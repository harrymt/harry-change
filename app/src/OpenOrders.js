import React from 'react';
import './OpenOrders.css';


const fetchUtil = {
  HealthCheckResponse: res => {
    if (!res.ok) {
      console.warn("Response was not okay :(", res);
    }
    return res;
  },
  ParseJSON: res => {
    return res.json().then(data => {
      return data;
    }, error => {
      console.warn(`Response did not return JSON: ${error}`, res)
    });
  }
};

export class OpenOrders extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }s

    componentDidMount() {
      fetch("http://localhost:3100/orders")
      .then(fetchUtil.HealthCheckResponse)
      .then(fetchUtil.ParseJSON)
      .then(
          (result) => {
            this.setState({
              isLoaded: true,
              isEmpty: result.body === null || result === "{}",
              items: result.response
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items, isEmpty } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else if (isEmpty) {
        return <div>No open orders</div>;
      } else {
        return (
          <ul className="OpenOrders-list">
            {items.map(item => (
              <li key={item.id}>
                {item.type} {item.amount} £{item.price}
              </li>
            ))}
          </ul>
        );
      }
    }
  }