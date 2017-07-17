export interface TemplateUpdate {
    name?: string;
    description?: string;
    titleTemplate?: string;
    bodyTemplate?: string;
    variables?: Array<string>;
    fallbackLanguageCode?: string;
    translations?: any;
    customData?: any;
}
