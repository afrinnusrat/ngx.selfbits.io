export interface Action {
    id?: string;
    name: string;
    description?: string;
    runtime?: string;
    config?: any;
    code?: string;
    version?: number;
    customData?: any;
}
