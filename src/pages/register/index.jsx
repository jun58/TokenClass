import React from 'react';
import { InputItem, Button } from 'antd-mobile';

import './index.scss';

import CountDown from '../../common/count_down';

import {POST} from '../../utils/request';


const phone_icon = require('../../assets/phone.png');
const passwd_icon = require('../../assets/passwd.png');

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

        this.send_msg = this.send_msg.bind(this);
        this.toggle_sendBtn = this.toggle_sendBtn.bind(this);
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
                            >
                                <img src={passwd_icon} className="input_icon"/>
                            </InputItem>
                        </li>
                    </ul>
                    <div className="confirm_btn">
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