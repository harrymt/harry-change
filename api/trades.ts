export enum BuyOrSell {
    Buy,
    Sell
}

export class Trade {
    constructor(type: BuyOrSell, amount: Number, price: Number, id: Number) {
        this.type = type;
        this.amount = amount;
        this.price = price;
        this.id = id;
    }

    type: BuyOrSell;
    amount: Number;
    price: Number;
    id: Number;
}

class TradesApi {

    constructor(orders: Trade[]) {
        this.orders = orders;
    }

    orders: Trade[];

    buy(trade: Trade) {
        this.orders.push(trade);
    }

    sell(order) {
        // TODO apply selling logic
        this.orders.pop();
    }
};

export let Trades = new TradesApi([]);
