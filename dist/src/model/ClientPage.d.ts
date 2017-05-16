import * as models from './models';
export interface ClientPage {
    docs?: Array<models.Client>;
    total?: number;
    limit?: number;
    page?: number;
    pages?: number;
}
