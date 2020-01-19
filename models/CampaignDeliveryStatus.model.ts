import {
    table,
    attribute,
    hashKey
} from '@aws/dynamodb-data-mapper-annotations';

@table('campaign-delivery-status')
export default class CampaignDelvieryStatus{
    @attribute()
    uuid: string;

    @attribute()
    creativeData?: string;

    @attribute()
    data?: string

    @attribute()
    deliveryStatus: string
}