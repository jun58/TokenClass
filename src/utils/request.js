import { server } from './config';
const md5 = require('md5');

const md5_key =  ['passwd'];

const throwError = json => {
    const error = new Error(json.code);
    error.message = json.msg;
    error.code = json.code;
    throw error;
};

const checkStatus = ({ resp, json, }) => {
    // 如果 返回结果中包含 code 和 message, 则认为出错了
    console.log(resp, json);
    if (resp.status >= 200 && resp.status < 300) {
      return json;
    } else if (resp.status >= 500) {
      throwError(json);
    } else {
      throwError(json);
    }
  
    return json;
};

const FETCH = async (path, options) => {
    const { headers, ...others } = options;

    let combineHeaders = { ...headers, };
  
    console.log('请求头信息:', combineHeaders);
    console.log('请求地址:', server + path, '请求信息:', others);
    return fetch(server + path, {
      ...others,
      headers: combineHeaders,
    })
    .then(resp =>
    resp
        .json()
        .then(json => ({ resp, json, }))
        .catch(error => ({ resp, json: {}, error, })),
    )
    .then(checkStatus);
};

const encodeQuery = (data) => {
    console.log(data)
    const query = Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${typeof data[key] == 'string' ? (md5_key.indexOf(key) >= 0 ? encodeURIComponent(md5(data[key])) : encodeURIComponent(data[key].replace(/\s+/g, '')) ) : encodeURIComponent(data[key])}`)
      .join('&');
  
    return query;
};
const POST = (url, data = {}, headers={}, is_formData = false) => {
    const __formData = is_formData ? data : encodeQuery(data);
    return FETCH(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            'Access-Control-Allow-Origin': '*', 
            ...headers
        },
        body: __formData
    })
    .then(resp => {
        return resp;
    })
    .catch(error => {
        return error;
    });
};
  
export default {
    POST
};