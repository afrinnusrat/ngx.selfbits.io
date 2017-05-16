import * as models from './models';
export interface TenantCredential {
    id?: string;
    authorization?: models.AuthorizationResponse;
}
