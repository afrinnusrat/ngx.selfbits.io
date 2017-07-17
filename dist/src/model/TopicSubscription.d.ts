export interface TopicSubscription {
    id?: string;
    userId?: string;
    topicId?: string;
    notificationType?: TopicSubscription.NotificationTypeEnum;
    isSubscriptionVerified?: boolean;
    lastVerificationRequestTimestamp?: string;
    customData?: any;
}
export declare namespace TopicSubscription {
    enum NotificationTypeEnum {
        EMAIL,
        PUSH,
        SMS,
        WEBHOOK,
    }
}
