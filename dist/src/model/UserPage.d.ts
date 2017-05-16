import * as models from './models';
export interface UserPage {
    docs?: Array<models.User>;
    total?: number;
    limit?: number;
    page?: number;
    pages?: number;
}
