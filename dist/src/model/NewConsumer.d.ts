export interface NewConsumer {
    directoryId: string;
    accountId: string;
    accountPassword: string;
    accountEmail?: string;
    accountEmailVerified?: string;
    customData?: any;
}
