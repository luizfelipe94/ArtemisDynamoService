import * as dotenv from "dotenv";
dotenv.config();

import * as Koa from "koa";
import * as Router from "koa-router";
import * as logger from "koa-logger";
import * as json from "koa-json";
import * as bodyParser from "koa-bodyparser";

const app       = new Koa();
const router    = new Router();
const PORT      = process.env.PORT;

app.use(json());
app.use(logger());
app.use(bodyParser());

app
.use(router.routes())
.use(router.allowedMethods());

import CampaignDeliveryStatusController from "./controllers/CampaignDeliveryStatus.controller";

router.get('/', async (ctx: Koa.Context, next: () => Promise<any>) => {
    ctx.body = { message: "This is your GET route" };
    await next();
});

router.post('/data', async (ctx: Koa.Context, next: () => Promise<any>) => {
    ctx.body = { message: "This is your POST route, attached you can find the data you sent", body: ctx.request.body };
    await next();
});

router.post('/deliverystatus', CampaignDeliveryStatusController.save);
router.get('/deliverystatus/:uuid', CampaignDeliveryStatusController.get);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));