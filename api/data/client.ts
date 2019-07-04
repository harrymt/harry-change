import { Client } from '@elastic/elasticsearch';

const client = new Client({ node: 'http://localhost:9200' })

export function setup() {
    client.ping({}, error => {
        if (error) {
            console.error('Elasticsearch cluster is down!');
        } else {
            console.log('Successfully able to ping elastic search');
        }
    });
};

export default client;