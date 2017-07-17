export interface Application {
    id?: string;
    name?: string;
    description?: string;
    organizationId?: string;
    apiAdminPath?: string;
    apiBasePath?: string;
    active?: boolean;
    customData?: any;
}
