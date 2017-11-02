import React from 'react';

const payMethods = {
    alipay: function () {

    }
};

class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <form onSubmit={() => this.pay(this.state)}>
                    <select value={this.state.payMethod}>
                        <option value="alipay">支付宝</option>
                        <option value="wxpay">微信支付</option>
                    </select>
                    <button>立即支付</button>
                </form>
            </div>
        );
    }

    pay(data) {
        payMethods[data.payMethod](data);
    }
}

export default Page;