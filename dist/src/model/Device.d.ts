export interface Device {
    id?: string;
    uuid?: string;
    model?: string;
    platform?: string;
    version?: string;
    manufacturer?: string;
    serial?: string;
    uaLastUpdate?: string;
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
