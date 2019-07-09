import { BuyOrSell } from "./BuyOrSell";

let nextId = 0;

export class Trade {
    type: BuyOrSell;
    amount: number;
    price: number;
    id: number;

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

    setId(id: number) {
        this.id = id;
        return this;
    }

    toJson() {
        return JSON.parse(JSON.stringify(Object.assign({}, this)));
    }

    toString() {
        return JSON.stringify(this.toJson());
    }
}
