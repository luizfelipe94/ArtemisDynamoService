"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DynamoDB = require("aws-sdk/clients/dynamodb");
var dynamodb_data_mapper_1 = require("@aws/dynamodb-data-mapper");
var client = new DynamoDB({ region: process.env.REGION });
var Dynamo = (function () {
    function Dynamo() {
        this.mapper = new dynamodb_data_mapper_1.DataMapper({ client: client });
    }
    Dynamo.prototype.list = function () {
    };
    Dynamo.prototype.getById = function (uuid) {
    };
    return Dynamo;
}());
exports.default = Dynamo;
//# sourceMappingURL=Dynamo.service.js.map