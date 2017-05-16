export interface ClientUpdate {
    name?: string;
    description?: string;
    isEnabled?: boolean;
    sbClientId?: string;
    sbClientSecret?: string;
    allowedOrigins?: Array<string>;
}
