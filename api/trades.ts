let Trades = {
    orders: [
        {
            type: "BUY",
            amount: 20,
            price: 1.50,
            id: 1
        },
        {
            type: "BUY",
            amount: 20,
            price: 1.50,
            id: 2
        }
    ],

    buy: function(order) {
        this.orders.push(order);
    },

    sell: function(order) {
        // TODO apply selling logic
        this.orders.pop();
    }
};

module.exports = Trades;