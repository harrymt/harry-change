# Harry's Exchange

Example Node.js backend API for an exchange.


```
POST /order
{
	"type": "BUY",
	"amount": 10,
	"price": 12.50
}
```

> Receive:

```
{
  "response": "OK"
}
```

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

```
GET /orders
```

> Receive:

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

# Use nodemon to compile ts files on save
$ npm run dev
```

### Tests

Jest watches and recompiles typescript files when they are changed.

```
$ npm test
```
