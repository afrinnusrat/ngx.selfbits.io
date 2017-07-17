export interface NewTemplate {
    id?: string;
    name: string;
    description?: string;
    templateType: NewTemplate.TemplateTypeEnum;
    version?: number;
    titleTemplate?: string;
    bodyTemplate?: string;
    variables?: Array<string>;
    fallbackLanguageCode?: string;
    translations?: any;
    customData?: any;
}
export declare namespace NewTemplate {
    enum TemplateTypeEnum {
        EMAIL,
        PUSH,
        SMS,
        WEBHOOK,
        HTML,
        EMAILVERIFICATION,
        PASSWORDRESET,
    }
}
