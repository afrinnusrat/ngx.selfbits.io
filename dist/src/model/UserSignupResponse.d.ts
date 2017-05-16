import * as models from './models';
export interface UserSignupResponse {
    user: models.User;
    authorization: models.AuthorizationResponse;
    credentials?: models.LoginCredentials;
}
