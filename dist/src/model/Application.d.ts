export interface Application {
    id: string;
    name: string;
    description?: string;
    tenantId?: string;
    apiAdminPath?: string;
    apiBasePath?: string;
    active?: boolean;
    customData?: any;
}
