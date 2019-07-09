import { Api } from '../store';
import { BuyOrSell } from "../BuyOrSell";
import { Trade } from "../Trade";

describe('trades selling logic', () => {
    const tbuy = new Trade(BuyOrSell.Buy, 10, 1);
    const tsell = new Trade(BuyOrSell.Sell, 10, 1);
    const tsell2 = new Trade(BuyOrSell.Sell, 20, 1);

    it('buy then sell should remove from queue', () => {
        Api.buy(tbuy);
        Api.sell(tsell);

        expect(Api.buyorders).toStrictEqual([]);
    });

    it('buy multiple then sell multiple should remove all from queue', () => {
        Api.buy(tbuy);
        Api.buy(tbuy);

        Api.sell(tsell);
        Api.sell(tsell);

        expect(Api.buyorders).toStrictEqual([]);
    });

    it('buy multiple then sell single for total amount should remove all from queue', () => {
        Api.buy(tbuy);
        Api.buy(tbuy);

        Api.sell(tsell2);

        expect(Api.buyorders).toStrictEqual([]);
    });

    const tsellhalf = new Trade(BuyOrSell.Sell, 5, 1);
    const tbuyhalf = new Trade(BuyOrSell.Buy, 5, 1).setId(0);

    it('buy single sell half of the single should modify element in queue', () => {
        Api.buy(tbuy);
        Api.sell(tsellhalf);

        expect(Api.buyorders).toEqual([tbuyhalf]);
    });
});
