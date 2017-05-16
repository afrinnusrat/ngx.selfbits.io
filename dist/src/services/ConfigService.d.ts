import { Configuration } from '../configuration';
import { AuthorizationResponse } from '../model/AuthorizationResponse';
export declare class ConfigService {
    private configuration;
    constructor(configuration: Configuration);
    setAuthorization(authorizationObject: AuthorizationResponse): void;
    getAuthorization(): AuthorizationResponse;
    setBasePath(basePath: string): void;
    setDefaultBasePath(): void;
    getBearerToken(): string;
    getUserId(): string;
    getOrganizationId(): string;
    getExpires(): string;
}
