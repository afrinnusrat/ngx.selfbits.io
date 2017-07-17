export interface RestEndpoint {
    id?: string;
    resource?: string;
    resourcePath?: string;
    method?: RestEndpoint.MethodEnum;
    description?: string;
    stage?: string;
    version?: number;
    actionId?: string;
    config?: any;
    customData?: any;
}
export declare namespace RestEndpoint {
    enum MethodEnum {
        GET,
        POST,
        PUT,
        DELETE,
    }
}
