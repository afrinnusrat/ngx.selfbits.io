export * from './AuthApi';
import { AuthApi } from './AuthApi';
export * from './FilesApi';
import { FilesApi } from './FilesApi';
export * from './InteractiveViewsApi';
import { InteractiveViewsApi } from './InteractiveViewsApi';
export * from './JoinApi';
import { JoinApi } from './JoinApi';
export * from './MongodbApi';
import { MongodbApi } from './MongodbApi';
export * from './OrganizationsApi';
import { OrganizationsApi } from './OrganizationsApi';
export * from './RestApi';
import { RestApi } from './RestApi';
export * from './TenantsApi';
import { TenantsApi } from './TenantsApi';
export * from './UsersApi';
import { UsersApi } from './UsersApi';
export declare const APIS_APP: (typeof AuthApi | typeof FilesApi | typeof InteractiveViewsApi | typeof JoinApi | typeof MongodbApi | typeof OrganizationsApi | typeof RestApi | typeof TenantsApi | typeof UsersApi)[];
