export interface Template {
    id?: string;
    name?: string;
    description?: string;
    templateType?: Template.TemplateTypeEnum;
    version?: number;
    titleTemplate?: string;
    bodyTemplate?: string;
    variables?: Array<string>;
    fallbackLanguageCode?: string;
    translations?: any;
    customData?: any;
}
export declare namespace Template {
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
