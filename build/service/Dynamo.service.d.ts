import { DataMapper } from '@aws/dynamodb-data-mapper';
import { Uuid } from 'aws-sdk/clients/groundstation';
export default class Dynamo {
    mapper: DataMapper;
    constructor();
    list(): void;
    getById(uuid: Uuid): void;
}
