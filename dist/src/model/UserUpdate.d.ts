export interface UserUpdate {
    email?: string;
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
