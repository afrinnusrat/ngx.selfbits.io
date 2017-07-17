export interface MailServerUpdate {
    name?: string;
    description?: string;
    host?: string;
    user?: string;
    password?: string;
    smtpPort?: number;
    secure?: boolean;
    defaultSenderAddress?: string;
    defaultSubjectPrefix?: string;
    customData?: any;
}
