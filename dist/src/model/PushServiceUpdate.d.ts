export interface PushServiceUpdate {
    name?: string;
    description?: string;
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
