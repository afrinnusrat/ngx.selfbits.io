export interface Consumer {
    id?: string;
    userId?: string;
    directoryId?: string;
    organizationId?: string;
    accountId?: string;
    accountPassword?: string;
    primaryEmail?: string;
    primaryEmailVerified?: boolean;
    customData?: any;
}
