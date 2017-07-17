"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./CoreAdminApi"));
var CoreAdminApi_1 = require("./CoreAdminApi");
__export(require("./FileAdminApi"));
var FileAdminApi_1 = require("./FileAdminApi");
__export(require("./MongodbAdminApi"));
var MongodbAdminApi_1 = require("./MongodbAdminApi");
exports.APIS_ADMIN = [CoreAdminApi_1.CoreAdminApi, FileAdminApi_1.FileAdminApi, MongodbAdminApi_1.MongodbAdminApi];
//# sourceMappingURL=api_admin.js.map