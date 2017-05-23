export interface NewConsumer {
    id?: string;
    userId: string;
    directoryId: string;
    accountId: string;
    accountPassword: string;
    accountEmail?: string;
    customData?: any;
}
