import * as models from './models';
export interface OrganizationPage {
    docs?: Array<models.Organization>;
    total?: number;
    limit?: number;
    page?: number;
    pages?: number;
}
