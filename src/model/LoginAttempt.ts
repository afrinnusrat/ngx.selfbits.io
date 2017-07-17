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

export interface LoginAttempt {
    id?: string;

    accountId?: string;

    directoryId?: string;

    city?: string;

    continentCode?: string;

    countryIsoCode?: string;

    timezone?: string;

    locationLat?: string;

    locationLng?: string;

    uaBrowserName?: string;

    uaBrowserMajor?: string;

    uaBrowserVersion?: string;

    uaDeviceType?: string;

    uaDeviceModel?: string;

    uaDeviceVendor?: string;

    uaEngineName?: string;

    uaEngineVersion?: string;

    uaOSName?: string;

    uaOSVersion?: string;

    uaArchitecture?: string;

    customData?: any;

}
