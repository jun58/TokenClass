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

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            is_sending: false
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
        if (is_sending) {
            return;
        }
        this.toggle_sendBtn();

    }

    toggle_sendBtn() {
        this.setState({
            is_sending: !this.state.is_sending
        });
    }

    confirm() {
        const {POST} = Request;
        POST('/tokenclass/t1/v1/reserve/setuserreservequit', {
            channel: 1,
            ver:'0.0.1',
            platform,
            zone: 'CN',
            countrycode: '86',
            invitation: search.invitecode,
            ...this.form_data            
        }).then((res) => {
            console.log('注册', res);
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
                                type="number"
                                maxLength={11}
                                labelNumber={3}
                                onChange={(val) => {this.set_data('passwd', val)}}
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