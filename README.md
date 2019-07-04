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

```bash
# Create the image
$ docker-compose build

# Sets up Elastic Search in docker
$ docker-compose up
```

### Tests

Jest watches and recompiles typescript files when they are changed.

```bash
$ npm test
```

### Development Endpoints

```bash
# Elastic Search
http://localhost:9300

# API
http://localhost:3000
```

### Deployment

After a PR merges into master, [Heroku](https://dashboard.heroku.com/apps/harry-change) triggers a [new build](https://harry-change.herokuapp.com).
