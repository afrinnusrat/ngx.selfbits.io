export interface ProviderUpdate {
    id?: string;
    name?: string;
    description?: string;
    oauth2ClientId?: string;
    oauth2ClientSecret?: string;
    oauth2Scope?: Array<string>;
    customData?: any;
}
