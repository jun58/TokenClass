import React from 'react';
import './index.scss';

export default class UserAgreement extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="agreement_wrap">
                <h3>TokenClass用户服务协议</h3>
                <div style={{padding: '10px 0', marginTop: '10px'}}>尊敬的用户：</div>
                <p>感谢您选择TokenClass服务。</p>
                <p>
                    TOKENCLASS运营网站https://www.TokenClass.com/（以下称“本网站”或“网站”），运营APP：“TokenClass”（以下简称“APP”，可在各移动应用平台上下载，包括但不限于Google Play和Apple App Store；公司、网站以及APP统称为“TokenClass”），TokenClass是一个向用户提供数字资产专业化投资及培训教育（以下称“该服务”或“服务”）的平台。只要登录网站和/或APP的自然人或其他主体均为TokenClass的用户（为了本协议表述之便利，以下简称为“用户”或使用“您”等称呼；TokenClass在本协议中以“我们”或其他第一人称称呼；我们和您在本协议中合称为“双方”，我们或您单称为“一方”）。《TokenClass用户服务协议》（以下称“本协议”）由正文、《TokenClass隐私政策》、《风险揭示书》、《了解你的客户和反洗钱政策》以及TokenClass通过任何渠道不时公布、更新的通知、公关、规则、政策等文件公共同组成。您使用本网站提供的服务时，应同时接受适用于本网站特定服务、活动等的准则、条款和协议（以下统称为“其他条款”）。如果本协议与“其他条款”有不一致之处，则以“其他条款”为准。
                </p>
                <div style={{padding: '10px 0', marginTop: '10px' }}>我们特别提示您：</div>
                <div>在使用我们的服务之前，请认真阅读本协议，尤其是本协议中免除我们责任、加重您责任以及各项风险告知的条款，该等条款将以加粗等形式体现，请您确保充分理解本协议中各条款，并自主考虑风险。如您对协议有任何疑问的，应向TokenClass客服咨询。</div>
            </div>
        )
    }
}
