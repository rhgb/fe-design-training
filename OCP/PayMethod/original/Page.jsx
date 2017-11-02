import React from 'react';

class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <form onSubmit={() => this.pay(this.state.payMethod)}>
                    <select value={this.state.payMethod}>
                        <option value="alipay">支付宝</option>
                        <option value="wxpay">微信支付</option>
                    </select>
                    <button>立即支付</button>
                </form>
            </div>
        );
    }

    pay(method) {
        if (method === 'alipay') {
            // .....
        } else if (method === 'wxpay') {
            // .....
        }
    }
}

export default Page;