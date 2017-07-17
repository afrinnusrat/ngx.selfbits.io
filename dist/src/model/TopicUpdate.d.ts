export interface TopicUpdate {
    name?: string;
    description?: string;
    enabled?: boolean;
    isSubscriptionRestricted?: boolean;
    subscriptionRole?: string;
    notificationTemplateId?: string;
    customData?: any;
}
