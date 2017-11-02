import React from 'react';
import {default as pay, PayData} from "./payment";

class Page extends React.Component {
    state: {
        payData: PayData
    };
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <form onSubmit={() => this.pay(this.state.payData)}>
                    <select value={this.state.payData.method}>
                        <option value="alipay">支付宝</option>
                        <option value="wxpay">微信支付</option>
                    </select>
                    <button>立即支付</button>
                </form>
            </div>
        );
    }

    pay(data: PayData) {
        pay(data).then(() => {
            // ...
        });
    }
}

export default Page;