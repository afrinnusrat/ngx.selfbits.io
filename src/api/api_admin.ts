export * from './CoreAdminApi';
import { CoreAdminApi } from './CoreAdminApi';
export * from './FileAdminApi';
import { FileAdminApi } from './FileAdminApi';
export * from './MongodbAdminApi';
import { MongodbAdminApi } from './MongodbAdminApi';
export const APIS_ADMIN = [CoreAdminApi, FileAdminApi, MongodbAdminApi];
