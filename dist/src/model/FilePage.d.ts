import * as models from './models';
export interface FilePage {
    docs?: Array<models.File>;
    total?: number;
    limit?: number;
    page?: number;
    pages?: number;
}
