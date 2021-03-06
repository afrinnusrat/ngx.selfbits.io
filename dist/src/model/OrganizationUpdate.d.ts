export interface OrganizationUpdate {
    name?: string;
    description?: string;
    defaultDirectoryId?: string;
    isDefault?: boolean;
    isPublic?: boolean;
    emailDomainRestriction?: string;
    customData?: any;
}
