export interface NewTopic {
    id?: string;
    name: string;
    description?: string;
    enabled?: boolean;
    notificationType?: NewTopic.NotificationTypeEnum;
    isSubscriptionRestricted?: boolean;
    subscriptionRole?: string;
    notificationTemplateId?: string;
    customData?: any;
}
export declare namespace NewTopic {
    enum NotificationTypeEnum {
        EMAIL,
        PUSH,
        SMS,
        WEBHOOK,
    }
}
