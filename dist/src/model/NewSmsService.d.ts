export interface NewSmsService {
    id?: string;
    name: string;
    description?: string;
    serviceAccountId?: string;
    smsServiceType: NewSmsService.SmsServiceTypeEnum;
    apiKey?: string;
    apiSecret?: string;
    servicePhoneNumber?: string;
    customData?: any;
}
export declare namespace NewSmsService {
    enum SmsServiceTypeEnum {
        TWILIO,
        PLIVO,
        NEXMO,
        BANDWIDTH,
    }
}
