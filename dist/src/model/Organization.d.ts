export interface Organization {
    id?: string;
    name: string;
    description?: string;
    defaultDirectoryId?: string;
    isDefault?: boolean;
    isPublic?: boolean;
    emailDomainRestriction?: string;
    customData?: any;
}
