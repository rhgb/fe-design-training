export default function getPayment(method) {
    switch (method) {
        case 'alipay':
            return aliPay;
        case 'wxpay':
            return wxPay;
        default:
            throw new Error('不支持的支付方式');
    }
}

function aliPay(data) {
    // ...
}

function wxPay(data) {
    // ...
}