export interface Topic {
    id?: string;
    name?: string;
    description?: string;
    enabled?: boolean;
    notificationType?: Topic.NotificationTypeEnum;
    isSubscriptionRestricted?: boolean;
    subscriptionRole?: string;
    notificationTemplateId?: string;
    customData?: any;
}
export declare namespace Topic {
    enum NotificationTypeEnum {
        EMAIL,
        PUSH,
        SMS,
        WEBHOOK,
    }
}
