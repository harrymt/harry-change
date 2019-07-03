import { Record } from "./Record";
import { Trade } from "./Trade";
import logger from '../logger';

export class TradesApi {

    internalId: number;
    orders: Trade[];
    history: Record[];

    constructor(orders: Trade[]) {
        this.orders = orders;
        this.history = [];
    }

    buy(trade: Trade) {
        this.orders.push(trade);
        this.history.push(new Record(trade));

        logger.info(`Successfully added order ${trade} ${trade.toString()}.`);
    }

    sell(trade: Trade) {
        let toRemove: Map<number, number> = this.findOrdersToRemove(trade.amount, this.orders);
        let amountRemoved = this.removeOrders(toRemove, this.orders);
        this.history.push(new Record(trade));

        logger.info(`Successfully sold ${amountRemoved} orders, '${[...toRemove.entries()].map(e => e.join(': index -> ')).join(', ')}'.`);
    }

    private removeOrders(toRemove: Map<number, number>, orders: Trade[]) : number {
        const before = orders.length;

        this.orders = orders.filter((_, i, theOrders) => {
            if (toRemove.has(i)) {
                let amount = toRemove.get(i);

                // remove element completely
                if (amount === 0) return false;

                // keep element but modify the array
                theOrders[i].amount = amount;
                return true;
            }
        });

        const after = this.orders.length;
        return before - after;
    }

    private findOrdersToRemove(amount: number, orders: Trade[]) : Map<number, number>
    {
        let remainder = amount;
        let toRemove: Map<number, number> = new Map();
        
        for (let t = 0; t < orders.length; t++) {

            // If there is still some remainder, keep going.
            if ((remainder - orders[t].amount) > 0) {
                remainder = remainder - orders[t].amount;
                toRemove.set(t, 0);
                continue;
            } else if ((remainder - orders[t].amount) == 0) {
                // Exactly fits into the amounts
                toRemove.set(t, 0);
                break;
            } else {
                // There is some remainder left, save it and keep going!
                toRemove.set(t, remainder)
                break;
            }
        }

        return toRemove;
    }
}
