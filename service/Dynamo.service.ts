import DynamoDB = require('aws-sdk/clients/dynamodb');
import {DataMapper} from '@aws/dynamodb-data-mapper';
import { Uuid } from 'aws-sdk/clients/groundstation';

const client = new DynamoDB({ region: process.env.REGION });

export default class Dynamo {

    mapper: DataMapper;

    constructor(){
        this.mapper = new DataMapper({client});
    }

    list(){
        
    }

    getById(uuid: Uuid){

    }
}