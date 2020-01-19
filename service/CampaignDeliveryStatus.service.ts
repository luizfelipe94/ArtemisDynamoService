import CampaignDelvieryStatus from "../models/CampaignDeliveryStatus.model";
import DynamoService from "./Dynamo.service";

class CampaignDeliveryStatusService extends DynamoService {
    constructor(){
        super();
    }
    save(data: any){
        const record = Object.assign(new CampaignDelvieryStatus, data);
        return this.mapper.put({item: record});
    }
}

export default new CampaignDeliveryStatusService();