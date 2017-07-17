export interface MailServer {
    id?: string;
    name?: string;
    description?: string;
    host?: string;
    user?: string;
    password?: string;
    smtpPort?: number;
    secure?: boolean;
    defaultSenderAddress?: string;
    defaultSubjectPrefix?: string;
    isEnabled?: boolean;
    isValid?: boolean;
    customData?: any;
}
