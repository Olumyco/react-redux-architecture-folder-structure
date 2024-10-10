const decoderNumbers = [
    {
        amount: 500000,
        currencyCode: "566",
        currencySymbol: "NGN",
        customerId: "0000000001",
        customerIdField: "Decoder Number",
        description: "Mobile1",
        id: "5f43a1b83f6ae800010c025b",
        imageUrl: "https://qt-v5.qa.interswitchng.com/Content/Images/noimage.png",
        isFixedAmount: false,
        lastPaymentDate: "2021-05-19T11:40:17.214Z",
        paymentCode: "4801523",
        paymentCount: 1,
        paymentItemId: "1523",
        paymentItemName: "Mobile1",
        serviceId: 480,
        serviceName: "DSTV Mobile",
        ussdShortCode: "*322*1*4801523*5000#"
    },
    {
        amount: 110000,
        currencyCode: "566",
        currencySymbol: "NGN",
        customerId: "4623612272",
        customerIdField: "Decoder Number",
        description: "4623612272",
        id: "5f8da21e7880f10001878bc9",
        imageUrl: "https://qt-v5.qa.interswitchng.com/Content/Images/noimage.png",
        isFixedAmount: false,
        lastPaymentDate: "2021-02-22T08:00:18.048Z",
        paymentCode: "4801535",
        paymentCount: 2,
        paymentItemId: "1535",
        paymentItemName: "Mobile 2",
        serviceId: 480,
        serviceName: "DSTV Mobile",
        ussdShortCode: "*322*1*4801535*1100#"
    },
    {
        amount: 110000,
        currencyCode: "566",
        currencySymbol: "NGN",
        customerId: "89348984242323",
        customerIdField: "Decoder Number",
        description: "89348984242323",
        id: "5fca300cde2e4900076b14fd",
        imageUrl: "https://qt-v5.qa.interswitchng.com/Content/Images/noimage.png",
        isFixedAmount: false,
        lastPaymentDate: "2020-12-04T12:48:11.929Z",
        paymentCode: "4801535",
        paymentCount: 0,
        paymentItemId: "1535",
        paymentItemName: "Mobile 2",
        serviceId: 480,
        serviceName: "DSTV Mobile",
        ussdShortCode: "*322*1*4801535*1100#"
    }
];

const dstvPackages = [
    {
        amount: 110000,
        billerType: "",
        categoryId: "2",
        code: "02",
        currencyCode: "566",
        currencySymbol: "NGN",
        customerIdField: "Decoder Number",
        id: "1535",
        isAmountFixed: false,
        itemCurrencyCode: null,
        itemCurrencySymbol: "",
        name: "Mobile 2",
        paymentCode: "4801535",
        pictureId: "0",
        serviceId: 480,
        serviceName: "DSTV Mobile",
        sortOrder: 0,
        surcharge: "100",
        ussdShortCode: "*322*1*4801535*1100#"
    },
    {
        amount: 500000,
        billerType: "",
        categoryId: "2",
        code: "01",
        currencyCode: "566",
        currencySymbol: "NGN",
        customerIdField: "Decoder Number",
        id: "1523",
        isAmountFixed: false,
        itemCurrencyCode: null,
        itemCurrencySymbol: "",
        name: "Mobile1",
        paymentCode: "4801523",
        pictureId: "0",
        serviceId: 480,
        serviceName: "DSTV Mobile",
        sortOrder: 0,
        surcharge: "100",
        ussdShortCode: "*322*1*4801523*5000#"
    }
];

export {
    decoderNumbers,
    dstvPackages
};