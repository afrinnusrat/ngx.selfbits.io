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

export interface Endpoint {
    id?: string;

    resource?: string;

    resourcePath?: string;

    method?: Endpoint.MethodEnum;

    description?: string;

    config?: any;

    actionId?: string;

    customData?: any;

}
export namespace Endpoint {
    export enum MethodEnum {
        GET = <any> 'GET',
        POST = <any> 'POST',
        PUT = <any> 'PUT',
        DELETE = <any> 'DELETE'
    }
}

