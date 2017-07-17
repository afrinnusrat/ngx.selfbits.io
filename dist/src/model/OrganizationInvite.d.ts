export interface OrganizationInvite {
    id?: string;
    organizationId?: string;
    userId?: string;
    expiresAt?: Date;
    customData?: any;
}
