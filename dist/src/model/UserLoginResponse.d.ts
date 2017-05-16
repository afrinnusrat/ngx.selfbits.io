import * as models from './models';
export interface UserLoginResponse {
    user: models.User;
    authorization: models.AuthorizationResponse;
}
