import { Client } from '@elastic/elasticsearch';
import logger from '../logger';

const client = new Client({ node: 'http://localhost:9200' })

export function ping() {
    client.ping({}, error => {
        if (error) {
            logger.error('Elasticsearch cluster is down!');
        } else {
            logger.info('Successfully able to ping elastic search');
        }
    });
};

export default client;