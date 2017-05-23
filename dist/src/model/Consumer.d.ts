export interface Consumer {
    id?: string;
    userId?: string;
    directoryId?: string;
    organizationId?: string;
    accountId?: string;
    accountPassword?: string;
    accountEmail?: string;
    accountEmailVerified?: boolean;
    customData?: any;
}
