import * as models from './models';
export interface ConsumerRolePage {
    docs?: Array<models.ConsumerRole>;
    total?: number;
    limit?: number;
    page?: number;
    pages?: number;
}
