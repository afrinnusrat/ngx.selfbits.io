import * as models from './models';
export interface ApplicationPage {
    docs?: Array<models.Application>;
    total?: number;
    limit?: number;
    page?: number;
    pages?: number;
}
