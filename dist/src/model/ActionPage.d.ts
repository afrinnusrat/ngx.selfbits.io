import * as models from './models';
export interface ActionPage {
    docs?: Array<models.Action>;
    total?: number;
    limit?: number;
    page?: number;
    pages?: number;
}
