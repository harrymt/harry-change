export enum BuyOrSell {
    Buy = "BUY",
    Sell = "SELL"
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
        console.log(`Successfully added order ${trade.id}.`)
        console.log(this.orders);
    }

    sell(trade: Trade) {
        // TODO apply selling logic
        const last = this.orders.pop();
        console.log(`Successfully removed (last) order ${last.id}.`)
        console.log(this.orders);
    }
};

export let Trades = new TradesApi([]);
