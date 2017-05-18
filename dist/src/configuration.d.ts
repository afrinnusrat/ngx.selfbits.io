export interface ConfigurationParameters {
    tenant?: string;
    application?: string;
    basePath?: string;
    sbClientId?: string;
    sbClientSecret?: string;
    apiKey?: string;
    apiKeyPrefix?: string;
    useDeveloperAuth?: boolean;
}
export declare class Configuration {
    tenant?: string;
    application?: string;
    basePath?: string;
    sbClientId?: string;
    sbClientSecret?: string;
    apiKey?: string;
    apiKeyPrefix?: string;
    useDeveloperAuth?: boolean;
    constructor(configurationParameters?: ConfigurationParameters);
}
