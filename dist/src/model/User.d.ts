export interface User {
    id?: string;
    email?: string;
    emailVerified?: boolean;
    username?: string;
    displayName?: string;
    firstName?: string;
    lastName?: string;
    birthday?: Date;
    phone?: string;
    gender?: string;
    picture?: string;
    utcOffset?: number;
    languageCode?: string;
    customData?: any;
}
