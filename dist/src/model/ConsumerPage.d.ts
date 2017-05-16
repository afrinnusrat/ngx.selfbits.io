import * as models from './models';
export interface ConsumerPage {
    docs?: Array<models.Consumer>;
    total?: number;
    limit?: number;
    page?: number;
    pages?: number;
}
