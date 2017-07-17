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
