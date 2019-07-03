import { Trade } from "./Trade";
export class Record {
    trade: Trade;
    time: Date;
    constructor(trade: Trade) {
        this.trade = trade;
        this.time = new Date(Date.now());
    }
}
