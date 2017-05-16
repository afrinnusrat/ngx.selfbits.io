import * as models from './models';
export interface TenantCreateResponse {
    tenant?: models.Tenant;
    user?: models.User;
    authorization?: models.AuthorizationResponse;
}
