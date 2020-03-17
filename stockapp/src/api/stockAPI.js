import React from "react";
import axios from "axios";

export default class StockAPI extends React.Component {
  constructor(props) {
    super(props);
    this.ticker = React.createRef();
    this.state = {
      ticker: {}
    };
  }

  handleClick = e => {
    e.preventDefault();
    console.log("the link was clicked");
    axios
      .get(
        `https://finnhub.io/api/v1/stock/profile?symbol=${this.ticker.current.value}&token=bpo09nfrh5ra872e0oi0`
      )
      .then(res => {
        this.setState();
        console.log(res.data);
        // console.log(`https://finnhub.io/api/v1/stock/profile?symbol=${this.ticker.current.value}&token=bpo09nfrh5ra872e0oi0`)
      });
  };

  render() {
    if (this.ticker !== null && this.ticker.current !== null) {
      return (
        <div>
          <form onSubmit={this.handleClick}>
            <label>
              <input type="text" ref={this.ticker} placeholder="Enter Ticker" />
            </label>
            <button onClick={this.handleClick}> submit </button>
          </form>
          <p>{this.ticker.current.value}</p>
        </div>
      );
    } else {
      return (
        <div>
          <form onSubmit={this.handleClick}>
            <label>
              <input type="text" ref={this.ticker} placeholder="Enter Ticker" />
            </label>
            <button onClick={this.handleClick}> submit </button>
          </form>
        </div>
      );
    }
  }
}
