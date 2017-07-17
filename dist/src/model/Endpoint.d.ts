export interface Endpoint {
    id?: string;
    resource?: string;
    resourcePath?: string;
    method?: Endpoint.MethodEnum;
    description?: string;
    config?: any;
    actionId?: string;
    customData?: any;
}
export declare namespace Endpoint {
    enum MethodEnum {
        GET,
        POST,
        PUT,
        DELETE,
    }
}
