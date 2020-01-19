"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var CampaignDeliveryStatus_model_1 = require("../models/CampaignDeliveryStatus.model");
var Dynamo_service_1 = require("./Dynamo.service");
var CampaignDeliveryStatusService = (function (_super) {
    __extends(CampaignDeliveryStatusService, _super);
    function CampaignDeliveryStatusService() {
        return _super.call(this) || this;
    }
    CampaignDeliveryStatusService.prototype.save = function (data) {
        var record = Object.assign(new CampaignDeliveryStatus_model_1.default, data);
        return this.mapper.put({ item: record });
    };
    return CampaignDeliveryStatusService;
}(Dynamo_service_1.default));
exports.default = new CampaignDeliveryStatusService();
//# sourceMappingURL=CampaignDeliveryStatus.service.js.map