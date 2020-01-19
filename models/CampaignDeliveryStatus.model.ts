import {
    table,
    attribute,
} from '@aws/dynamodb-data-mapper-annotations';

@table('CampaignDelvieryStatus')
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