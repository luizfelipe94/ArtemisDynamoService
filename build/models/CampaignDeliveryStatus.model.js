"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dynamodb_data_mapper_annotations_1 = require("@aws/dynamodb-data-mapper-annotations");
var CampaignDelvieryStatus = (function () {
    function CampaignDelvieryStatus() {
    }
    __decorate([
        dynamodb_data_mapper_annotations_1.attribute()
    ], CampaignDelvieryStatus.prototype, "uuid", void 0);
    __decorate([
        dynamodb_data_mapper_annotations_1.attribute()
    ], CampaignDelvieryStatus.prototype, "creativeData", void 0);
    __decorate([
        dynamodb_data_mapper_annotations_1.attribute()
    ], CampaignDelvieryStatus.prototype, "data", void 0);
    __decorate([
        dynamodb_data_mapper_annotations_1.attribute()
    ], CampaignDelvieryStatus.prototype, "deliveryStatus", void 0);
    CampaignDelvieryStatus = __decorate([
        dynamodb_data_mapper_annotations_1.table('CampaignDelvieryStatus')
    ], CampaignDelvieryStatus);
    return CampaignDelvieryStatus;
}());
exports.default = CampaignDelvieryStatus;
//# sourceMappingURL=CampaignDeliveryStatus.model.js.map