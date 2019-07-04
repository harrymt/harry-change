import { BuyOrSell } from "./BuyOrSell";

let nextId = 0;

export class Trade {
    constructor(type: BuyOrSell, amount: number, price: number) {
        this.type = type;
        this.amount = amount;
        this.price = price;
        this.id = nextId++;
    }
    static fromRequest(body: any) {
        const t = body as Trade;
        return new this(t.type, t.amount, t.price);
    }
    type: BuyOrSell;
    amount: number;
    price: number;
    id: number;

    toJson() {
        return JSON.parse(JSON.stringify(Object.assign({}, this)));
    }

    toString() {
        return JSON.stringify(this.toJson());
    }
}
