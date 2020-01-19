import CampaignDelvieryStatus from "../models/CampaignDeliveryStatus.model";
import DynamoService from "./Dynamo.service";
import { Uuid } from "aws-sdk/clients/groundstation";

class CampaignDeliveryStatusService extends DynamoService {

    constructor(){
        super();
    }

    save(data: any){
        const record = Object.assign(new CampaignDelvieryStatus, data);
        return this.mapper.put({item: record});
    }

    async getByUuid(uuid: Uuid){
        const iterator = this.mapper.query(CampaignDelvieryStatus, { uuid });
        for await (const record of iterator) {
            return record;
        }
    }
}

export default new CampaignDeliveryStatusService();