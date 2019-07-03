# Harry's Exchange

Example Node.js backend API for an exchange.


#### Order
```
POST /order
{
	"type": "BUY",
	"amount": 10,
	"price": 12.50
}
```

```
{
  "response": "OK"
}
```


#### Sell

```
POST /order
{
	"type": "SELL",
	"amount": 5,
	"price": 12.50
}
```

> Receive:

```
{
  "response": "OK"
}
```

#### List open orders

```
GET /orders
```

```
[
  {
    "type": "BUY",
    "amount": 5,
    "price": 12.5
  }
]
```


### Setup

```
$ npm install

# Uses nodemon to compile typescript files on save
$ npm run dev
```

### Tests

Jest watches and recompiles typescript files when they are changed.

```
$ npm test
```

### Deployment

After a PR merges into master, [Heroku](https://dashboard.heroku.com/apps/harry-change) triggers a [new build](https://harry-change.herokuapp.com).
