import React from 'react';
import { InputItem, Toast } from 'antd-mobile';

import './index.scss';

import CountDown from '../../common/count_down';

import Request from '../../utils/request';


const phone_icon = require('../../assets/phone.png');
const passwd_icon = require('../../assets/passwd.png');

const get_search = () => {
    let serarch_obj = {};
    if (window.location.search !== '') {
      const arr = window.location.search.substr(1).split('&');

      arr.map((item) => {
        let tem = item.split('=');
        serarch_obj[tem[0]] = tem[1];
      });
    }
    return serarch_obj;
}

const search = get_search();
const agent = navigator.userAgent;
const platform = agent.match(/mobile/i) ? (agent.match(/iphone/i) ? 'IOS' : 'Android') : 'PC';


const MsgBtn = ({is_sending, on_end}) => {
    return (
        <div className={is_sending ? 'msg_disable' : 'msg_active'}>
            {
                is_sending ? 
                <CountDown startCount={60}>
                    {
                        (count) => {
                            if (count <= 0) {
                                on_end();
                            }
                            return <p>{count + 's'}</p>
                        }         
                    }                    
                </CountDown> :
                `发送验证码`
            }
        </div>
    )
}
/**
 * 检测密码是否符合
 * @param passwd 密码
 */
function test_passwd(passwd) {
    const rep = new RegExp(/[\u4E00-\u9FA5]/);
    if (rep.test(passwd)) {
        return '密码格式错误';
    } else if (passwd.length < 6) {
        return '密码最少6位';
    }

    return '';
}

const {POST} = Request;
class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            is_sending: false,
            password: ''
        }

        this.form_data = {
            phone: '',
            smscode: '',
            passwd: ''
        }

        this.send_msg = this.send_msg.bind(this);
        this.toggle_sendBtn = this.toggle_sendBtn.bind(this);
        this.init = this.init.bind(this);
        this.confirm = this.confirm.bind(this);
        this.set_data = this.set_data.bind(this);
    }

    init() {
        this.form_data = {
            phone: '',
            smscode: '',
            passwd: '',
        }
    }

    send_msg() {
        const {is_sending} = this.state;
        const rel_phone = this.form_data.phone.replace(/' '/g, '');
        if (is_sending) {
            return;
        }
        if (rel_phone.length < 11) {
            return Toast.info('请输入正确的手机号');
        }
        this.toggle_sendBtn();

        POST('/tokenclass/user/v1/sms/send', {
            countrycode: '86',
            phone: rel_phone,
            businesstype: 1000,         
        }).then((res) => {
            if(res.code == 0) {
                Toast.info('发送成功');
            } else {
                Toast.info('发送失败，请稍后重试');
            }
        });

    }

    toggle_sendBtn() {
        this.setState({
            is_sending: !this.state.is_sending
        });
    }

    confirm() {
        const {phone, smscode} = this.form_data;
        const {password} = this.state;
        
        if (!phone || !smscode || !password) {
            return Toast.info('有未完成项');
        }

        const tips = test_passwd(password);
        if (tips) {
            return Toast.info(tips);
        }

        let fix = {...this.form_data};

        if (search.invitecode) {
            fix = {
                ...fix,
                invitation: search.invitecode
            }
        }

        if (platform !== 'PC') {
            fix = {
                ...fix,
                pushway: 0
            }
        }

        Toast.loading('loading...', 0);
        POST('/tokenclass/user/v1/register', {
            channel: 1,
            type: 0,
            ver:'0.0.1',
            platform,
            zone: 'CN',
            countrycode: '86',
            ...fix,
            passwd: password            
        }).then((res) => {
            console.log('注册', res);
            Toast.hide();
            if(res.code == 0) {
                Toast.info('注册成功');
                this.init();
            } else {
                Toast.info('注册失败');
            }
        });
    }

    set_data(key, data) {
        this.form_data[key] = data;
    }

    render() {
        const {is_sending} = this.state;
        return (
            <div className="register_wrap">
                <div className="register_head">TokenClass</div>
                <div className="form_box">
                    <ul>
                        <li>
                            <InputItem
                                placeholder="请输入手机号码"
                                type="phone"
                                labelNumber={3}
                                onChange={(val) => {this.set_data('phone', val.replace(/\s+/g,""))}}
                            >
                                <img src={phone_icon} className="input_icon"/>
                            </InputItem>
                        </li>
                        <li>
                            <InputItem
                                placeholder="验证码"
                                type="number"
                                maxLength={6}
                                labelNumber={3}
                                extra={<MsgBtn is_sending={is_sending} on_end={this.toggle_sendBtn}/>}
                                onExtraClick={this.send_msg}
                                onChange={(val) => {this.set_data('smscode', val)}}
                            >
                                <img src={passwd_icon} className="input_icon"/>
                            </InputItem>
                        </li>
                        <li>
                            <InputItem
                                placeholder="请输入密码"
                                type="password"
                                value={this.state.password}
                                maxLength={11}
                                labelNumber={3}
                                onChange={(val) => {this.setState({
                                    password: val.replace(/\s/g, '')
                                })}}
                            >
                                <img src={passwd_icon} className="input_icon"/>
                            </InputItem>
                        </li>
                    </ul>
                    <div className="confirm_btn" onClick={this.confirm}>
                        立即注册
                    </div>
                    <div className="law">
                        注册代表您同意<i className="law_btn">《用户协议》</i>

                    </div>
                </div>
                <div></div>
            </div>
        )
    }
}

export default Register;