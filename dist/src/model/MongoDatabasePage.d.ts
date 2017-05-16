import * as models from './models';
export interface MongoDatabasePage {
    docs?: Array<models.MongoDatabase>;
    total?: number;
    limit?: number;
    page?: number;
    pages?: number;
}
