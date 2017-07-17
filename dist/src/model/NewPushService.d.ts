export interface NewPushService {
    id?: string;
    name: string;
    description?: string;
    pushServiceType: NewPushService.PushServiceTypeEnum;
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
    customData?: any;
}
export declare namespace NewPushService {
    enum PushServiceTypeEnum {
        FCM,
        APN,
    }
}
