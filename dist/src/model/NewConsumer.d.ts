export interface NewConsumer {
    id?: string;
    userId: string;
    directoryId: string;
    accountId: string;
    accountPassword: string;
    primaryEmail?: string;
    primaryEmailVerified?: boolean;
    customData?: any;
}
