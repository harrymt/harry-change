import client from './client';
import { Trade } from '../trades/Trade';

class Repository {
    async search(trade: Trade) {
        const result = await client.search({
            index: trade.id.toString(),
            body: trade.toJson()
        });

        return result.body;
    }

    async set(trade: Trade) {
        const result = await client.index({
            index: trade.id.toString(),
            body: trade.toJson()
        });

        return result.body;
    }

    async removeAll(trades: Trade[]) {
        const results = [];
        for(var i = 0; i < trades.length; i++) {
            results.push(await this.remove(trades[i]));
        }

        return results;
    }

    async remove(trade: Trade) {
        const result = await client.indices.delete({
            index: trade.id.toString()
        });

        return result.body;
    }
}

let datastore = new Repository();

export default datastore;
