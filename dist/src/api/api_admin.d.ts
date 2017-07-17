export * from './CoreAdminApi';
import { CoreAdminApi } from './CoreAdminApi';
export * from './FileAdminApi';
import { FileAdminApi } from './FileAdminApi';
export * from './MongodbAdminApi';
import { MongodbAdminApi } from './MongodbAdminApi';
export declare const APIS_ADMIN: (typeof CoreAdminApi | typeof FileAdminApi | typeof MongodbAdminApi)[];
