import CampaignDeliveryStatusService from "../service/CampaignDeliveryStatus.service";
import { Context } from "koa";


class CampaignDeliveryStatusController {
    async save(ctx: Context, next: () => Promise<any>){
        try{
            const data: any = ctx.request.body ;
            data.uuid = "123-456";
            const result = await CampaignDeliveryStatusService.save(data);
            console.log(result);
            await next();
        }catch(e){
            console.error(e);
        }
    }
}

export default new CampaignDeliveryStatusController();