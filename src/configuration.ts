export interface ConfigurationParameters {
	tenant?: string;
	application?: string;
	sbClientId?: string;
	sbClientSecret?: string;
	apiKey?: string;
	apiKeyPrefix?: string;
	useDeveloperAuth?: boolean;
}

export class Configuration {
	tenant?: string;
	application?: string;
	basePath?: string;
	sbClientId?: string;
	sbClientSecret?: string;
	apiKey?: string;
	apiKeyPrefix?: string;
	useDeveloperAuth?: boolean;

	constructor(configurationParameters: ConfigurationParameters = {}) {
		this.tenant = configurationParameters.tenant;
		this.application = configurationParameters.application;
		this.sbClientId = configurationParameters.sbClientId;
		this.sbClientSecret = configurationParameters.sbClientSecret;
		this.useDeveloperAuth = configurationParameters.useDeveloperAuth;
		this.basePath = "https://" + this.tenant
			+ ".apps.selfbits.io/api/v2/" + this.tenant + "/"
			+ (this.useDeveloperAuth ? "admin" : "apps") + "/" + this.application;
		this.apiKey = configurationParameters.apiKey || "";
		this.apiKeyPrefix = configurationParameters.apiKeyPrefix || "bearer ";
		if (!this.apiKeyPrefix.endsWith(" ")) {
			this.apiKeyPrefix = this.apiKeyPrefix + " ";
		}
	}
}
