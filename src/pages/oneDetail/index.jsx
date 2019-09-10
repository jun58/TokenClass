import React from 'react';


import './index.scss';

export default class OneDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="onedetail_wrap">
                <h3>ONE详情</h3>
                <div className="detail_label">概述:</div>
                <p>
                    TonkenClass One 由TokenClass团队创立，透明且本金保障，追求数字货币投资的最佳实践，成员可以实时获得操作数据，并且得到实时指导，通过实战的方式提高自身的投资能力。
                </p>

                <div className="detail_label">参数:</div>
                <p>ONE创世额度设定：500000 USDT</p>
                <p>创世最大预约金额设定：1000000 USDT</p>
                <p>创世预约开启时间：2019年10月15日 12:00:00</p>
                <p>创世预约持续时间：24小时</p>
                <p>保障池初始金额：100000 USDT</p>
                <p>每用户限额：1000-30000 USDT</p>
                <p>冻结期：15天</p>
                <p>实际创世额度：--</p>

                <div className="detail_label">生命周期:</div>
                <img src={require('../../assets/life.png')} alt="" style={{
                    width: '100%',

                }}/>

                <div className="detail_label">创世参与:</div>
                <p>
                    阳光普照模式，创世额度为50万USDT，创世最大可预约金额为100万USDT，每个完成实名认证的用户可参与1000USDT-30000USDT，满额为止，无需消耗TC。如某用户预约了2万USDT，总预约量为80万USDT，则此用户正式参与的额度为：2万*50/80=1.25万USDT。
                </p>

                <div className="detail_label">运行期参与:</div>
                <p>
                    在运行期，当ONE额度满时，可以预约参与，当有额度时，系统会按先后顺序优先满足预约者，预约者也可以在中途取消预约；当有额度且无预约者时，可实时参与。参与时每1USDT将需支付0.5TC的参与费。
                </p>

                <div className="detail_label">保障池机制:</div>
                <p>
                    {`TokenClass One在创始阶段会额外设立一个保障池并向成员公布，其初始资金为创世额度的20%（50w*20%），由TokenClass团队支付，其后每次结算将会有20%的收益自动划入保障池（团队会优先提取所支付的保障池初始金），以保障TokenClass One在较低风险，甚至无风险的情况下运作。当保障池 < One额度*20%时，投入到保障池的资金不增加One额度，当保障池 > One额度*20%时，One额度将按保障池所增加资金*3增加One额度`}
                </p>

                <div className="detail_label">止损规则:</div>
                <p>
                    TokenClss One如果亏损达到保障池资金，将会立即停止运作，进入结算流程，以保障所有参与者本金安全。
                </p>

                <div className="detail_label">收益分配:</div>
                <p>
                    收益中40%归参与者所有，40%分发给所有TC持有人，20%累积到保障池。
                </p>

                <div className="detail_label">退出:</div>
                <p>
                    所有参与者冻结期为15天，过了冻结期可随时申请退出并在下一个结算日自动退出，退出后随时可提现。
                </p>

                <div className="detail_label">交割周期:</div>
                <p>
                    无固定周期，当TokenClass One中的资金收益超过20%时，或者亏损达到保障池金额时将会自动触发结算，未申请退出者其本金自动滚入下期，其收益自动分配到用户账户。
                </p>

                <div className="detail_label">保障溢出:</div>
                <p>
                    虽然我们将极力避免亏损，但在极端情况下，当亏损达到保障池，因来不及止损操作导致的亏损由参与用户承担，用户需承担的最大亏损值为其本金的10%，超过部分为TokenClass兜底承担
                </p>

                <div className="detail_label">解释权:</div>
                <p>
                    解释权归TokenClass团队所有，团队会根据实际情况或成员意见适时优化相关规则。
                </p>
            </div>
        )
    }
}
