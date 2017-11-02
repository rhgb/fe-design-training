export interface PayData {
    amount: number;
    discountAmount: number;
    method: string;
}


export default function pay(data: PayData): Promise<boolean> {
    switch (data.method) {
        case 'alipay':
            return aliPay(data);
        case 'wxpay':
            return wxPay(data);
        default:
            throw new Error('不支持的支付方式');
    }
}

function aliPay(data: PayData): Promise<boolean> {
    // ...
    return Promise.resolve(true);
}

function wxPay(data: PayData): Promise<boolean> {
    // ...
    return Promise.resolve(true);
}

