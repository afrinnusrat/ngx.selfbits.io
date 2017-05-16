"use strict";
var Configuration = (function () {
    function Configuration(configurationParameters) {
        if (configurationParameters === void 0) { configurationParameters = {}; }
        this.tenant = configurationParameters.tenant;
        this.application = configurationParameters.application;
        this.sbClientId = configurationParameters.sbClientId;
        this.sbClientSecret = configurationParameters.sbClientSecret;
        this.useDeveloperAuth = configurationParameters.useDeveloperAuth;
        this.basePath = "https://" + this.tenant + ".apps.selfbits.io/api/v2/" + this.tenant + "/" + (this.useDeveloperAuth ? "admin" : "apps") + "/" + this.application;
        this.apiKey = configurationParameters.apiKey;
        this.apiKeyPrefix = configurationParameters.apiKeyPrefix || "bearer ";
        if (!this.apiKeyPrefix.endsWith(" ")) {
            this.apiKeyPrefix = this.apiKeyPrefix + " ";
        }
    }
    return Configuration;
}());
exports.Configuration = Configuration;
//# sourceMappingURL=configuration.js.map