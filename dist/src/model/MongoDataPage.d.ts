import * as models from './models';
export interface MongoDataPage {
    docs?: Array<models.MongoData>;
    total?: number;
    limit?: number;
    page?: number;
    pages?: number;
}
