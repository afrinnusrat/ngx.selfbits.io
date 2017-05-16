import * as models from './models';
export interface RolePage {
    docs?: Array<models.Role>;
    total?: number;
    limit?: number;
    page?: number;
    pages?: number;
}
