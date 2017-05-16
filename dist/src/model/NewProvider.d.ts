export interface NewProvider {
    id?: string;
    name: string;
    description?: string;
    directoryType?: string;
    oauth2ClientId?: string;
    oauth2ClientSecret?: string;
    oauth2Scope?: Array<string>;
    customData?: any;
}
