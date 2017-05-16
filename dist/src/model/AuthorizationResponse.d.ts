export interface AuthorizationResponse {
    token?: string;
    tokenPrefix?: string;
    expires?: number;
    userId?: string;
    directoryId?: string;
    organizationId?: string;
}
