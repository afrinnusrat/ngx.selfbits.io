import * as models from './models';
export interface MongoModelPage {
    docs?: Array<models.MongoModel>;
    total?: number;
    limit?: number;
    page?: number;
    pages?: number;
}
