export interface SmsService {
    id?: string;
    name?: string;
    description?: string;
    serviceAccountId?: string;
    smsServiceType?: SmsService.SmsServiceTypeEnum;
    apiKey?: string;
    apiSecret?: string;
    servicePhoneNumber?: string;
    isEnabled?: boolean;
    isValid?: boolean;
    customData?: any;
}
export declare namespace SmsService {
    enum SmsServiceTypeEnum {
        TWILIO,
        PLIVO,
        NEXMO,
        BANDWIDTH,
    }
}
