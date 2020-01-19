import CampaignDeliveryStatusService from "../service/CampaignDeliveryStatus.service";
import { Context } from "koa";
import * as uuid from "uuid";

class CampaignDeliveryStatusController {

    async save(ctx: Context, next: () => Promise<any>){
        try{
            const data: any = ctx.request.body;
            data.uuid = uuid.v4();
            const result = await CampaignDeliveryStatusService.save(data);
            ctx.body = result;
            ctx.status = 201;
            await next();       
        }catch(e){
            console.error(e);
            ctx.body = { msg: "Internal server error" };
            ctx.status = 500;
        }
    }

    async get(ctx: Context, next: () => Promise<any>){
        try{
            const uuid = ctx.params.uuid;
            if(!uuid){
                ctx.body = { msg: "Uuid not defined." };
                ctx.status = 404;
                return await next();
            }
            const result = await CampaignDeliveryStatusService.getByUuid(uuid);
            if(!result){
                ctx.body = { msg: "CampaignDeliveryStatus not found." };
                ctx.status = 404;
                return await next();
            }
            ctx.body = result;
            ctx.status = 200;
            await next();
        }catch(e){
            console.error(e);
            ctx.body = { msg: "Internal server error" };
            ctx.status = 500;
        }
    }
}

export default new CampaignDeliveryStatusController();