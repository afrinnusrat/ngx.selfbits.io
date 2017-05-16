export interface MongoDatabase {
    id?: string;
    name: string;
    description?: string;
    mongoUri?: string;
    database?: string;
    user?: string;
    password?: string;
    isEnabled?: boolean;
    isDefault?: boolean;
    isDatabaseService?: boolean;
    customData?: any;
}
