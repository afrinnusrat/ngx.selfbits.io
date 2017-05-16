export interface NewMongoDatabase {
    id?: string;
    name: string;
    description?: string;
    mongoUri?: string;
    database?: string;
    user?: string;
    password?: string;
    isEnabled?: boolean;
    isDefault?: boolean;
    customData?: any;
}
