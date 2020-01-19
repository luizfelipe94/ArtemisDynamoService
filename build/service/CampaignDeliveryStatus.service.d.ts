import DynamoService from "./Dynamo.service";
declare class CampaignDeliveryStatusService extends DynamoService {
    constructor();
    save(data: any): Promise<{
        item: any;
    }>;
}
declare const _default: CampaignDeliveryStatusService;
export default _default;
