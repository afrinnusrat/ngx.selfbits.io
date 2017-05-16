import * as models from './models';
export interface EndpointPage {
    docs?: Array<models.Endpoint>;
    total?: number;
    limit?: number;
    page?: number;
    pages?: number;
}
