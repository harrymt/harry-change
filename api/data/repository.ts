import client from './client';
import { Trade } from '../trades/Trade';

class Repository {
    async search(trade: Trade) {
        const result = await client.search({
            index: 'trades',
            body: trade.toJson()
        });

        return result.body;
    }

    async set(trade: Trade) {
        const result = await client.index({
            index: 'trades',
            body: trade.toJson()
        });

        return result.body;
    }
}

let apiRepo = new Repository();

export default apiRepo;
