"use strict";
var Endpoint;
(function (Endpoint) {
    var MethodEnum;
    (function (MethodEnum) {
        MethodEnum[MethodEnum["GET"] = 'GET'] = "GET";
        MethodEnum[MethodEnum["POST"] = 'POST'] = "POST";
        MethodEnum[MethodEnum["PUT"] = 'PUT'] = "PUT";
        MethodEnum[MethodEnum["DELETE"] = 'DELETE'] = "DELETE";
    })(MethodEnum = Endpoint.MethodEnum || (Endpoint.MethodEnum = {}));
})(Endpoint = exports.Endpoint || (exports.Endpoint = {}));
//# sourceMappingURL=Endpoint.js.map