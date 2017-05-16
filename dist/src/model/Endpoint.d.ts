export interface Endpoint {
    id?: string;
    resource?: string;
    resourcePath?: string;
    method?: Endpoint.MethodEnum;
    description?: string;
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
