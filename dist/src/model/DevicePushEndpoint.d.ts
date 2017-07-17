export interface DevicePushEndpoint {
    id?: string;
    pushServiceType?: DevicePushEndpoint.PushServiceTypeEnum;
    userId?: string;
    deviceId?: string;
    uuid?: string;
    registrationId?: string;
    isEnabled?: boolean;
    isValid?: boolean;
    customData?: any;
}
export declare namespace DevicePushEndpoint {
    enum PushServiceTypeEnum {
        FCM,
        APN,
    }
}
