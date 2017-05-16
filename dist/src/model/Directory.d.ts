export interface Directory {
    id?: string;
    name: string;
    description?: string;
    directoryType?: string;
    providerId: string;
    organizationId: string;
    active?: boolean;
    emailRequired?: boolean;
    emailVerificationRequired?: boolean;
    customData?: any;
}
