export interface PushService {
    id?: string;
    name?: string;
    description?: string;
    pushServiceType?: PushService.PushServiceTypeEnum;
    fcmSenderId?: string;
    fcmApiKey?: string;
    apnCertificate?: string;
    apnPrivateKey?: string;
    apnProviderTokenP8Key?: string;
    apnProviderTokenKeyId?: string;
    apnProviderTokenTeamId?: string;
    apnIsDevelopment?: boolean;
    apnAppBundleId?: string;
    defaultTransmissionOptions?: any;
    isEnabled?: boolean;
    isValid?: boolean;
    customData?: any;
}
export declare namespace PushService {
    enum PushServiceTypeEnum {
        FCM,
        APN,
    }
}
