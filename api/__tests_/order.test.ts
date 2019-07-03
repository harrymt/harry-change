import request from 'supertest';
import app from '../app';

import { BuyOrSell } from "../trades/BuyOrSell";
import { Trade } from "../trades/Trade";

describe('POST /order', function() {
    const buyTradeA = new Trade(BuyOrSell.Buy, 10, 1);
    const sellTradeA = new Trade(BuyOrSell.Sell, 10, 1);

    it('submitting a buy order returns ok 200', async function() {
        await request(app)
            .post('/order')
            .send(buyTradeA.toJson())
            .set('Accept', 'application/json')
            .expect(200, { response: 'OK' });
        
        // Tidy up
        await request(app)
            .post('/order')
            .send(sellTradeA.toJson())
            .set('Accept', 'application/json')
            .expect(200, { response: 'OK' });
    });

    it('submitting a buy order populates the trades array', async function() {
        await request(app)
            .post('/order')
            .send(buyTradeA.toJson())
            .set('Accept', 'application/json');

        await request(app)
            .get('/orders')
            .set('Accept', 'application/json')
            .expect(200, [buyTradeA.toJson()]);
        
        // Tidy up
        await request(app)
            .post('/order')
            .send(sellTradeA.toJson())
            .set('Accept', 'application/json')
            .expect(200, { response: 'OK' });
    });

    
    const buyTradeB = new Trade(BuyOrSell.Buy, 10, 1);
    const sellTradeAB = new Trade(BuyOrSell.Sell, 20, 1);

    it('submitting multiple buy orders then selling the whole amount removes all the orders', async function() {
        await request(app)
            .post('/order')
            .send(buyTradeA.toJson())
            .set('Accept', 'application/json');

        await request(app)
            .post('/order')
            .send(buyTradeB.toJson())
            .set('Accept', 'application/json');

        await request(app)
            .post('/order')
            .send(sellTradeAB.toJson())
            .set('Accept', 'application/json');
        
        await request(app)
            .get('/orders')
            .set('Accept', 'application/json')
            .expect(200, []);
    });
});
