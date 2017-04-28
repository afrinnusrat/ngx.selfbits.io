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

export interface ProviderUpdate {
    id?: string;

    name?: string;

    description?: string;

    oauth2ClientId?: string;

    oauth2ClientSecret?: string;

    oauth2Scope?: Array<string>;

    customData?: any;

}

