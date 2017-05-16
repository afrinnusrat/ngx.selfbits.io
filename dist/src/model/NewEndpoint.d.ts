export interface NewEndpoint {
    id?: string;
    resource: string;
    resourcePath: string;
    method: NewEndpoint.MethodEnum;
    description?: string;
    actionId?: string;
    customData?: any;
}
export declare namespace NewEndpoint {
    enum MethodEnum {
        GET,
        POST,
        PUT,
        DELETE,
    }
}
