import * as models from './models';
export interface ProviderPage {
    docs?: Array<models.Provider>;
    total?: number;
    limit?: number;
    page?: number;
    pages?: number;
}
