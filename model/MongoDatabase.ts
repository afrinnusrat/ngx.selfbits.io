/**
 * Selfbits API V2
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface MongoDatabase {
    id?: string;

    name: string;

    description?: string;

    mongoUri?: string;

    database?: string;

    user?: string;

    password?: string;

    isEnabled?: boolean;

    isDefault?: boolean;

    isDatabaseService?: boolean;

    customData?: any;

}

