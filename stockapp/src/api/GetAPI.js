import React, { useState } from "react";
import axios from "axios";

export default function GetAPI(props) {
  const [ticker, setTicker] = useState("");

  //   super(props);
  //   this.ticker = React.createRef();
  //   this.state = {
  //     ticker: {}
  //   }
  // }

  function handleTicker(e) {
    setTicker(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    console.log("the link was clicked");
    axios
      .get(
        `https://finnhub.io/api/v1/stock/profile?symbol=${ticker.current.value}&token=bpo09nfrh5ra872e0oi0`
      )
      .then(res => {
        console.log(res.data);
      });
  }

  if (ticker !== null && ticker.current !== null) {
    return (
      <div>
        <form onSubmit={handleClick}>
          <label>
            <input
              type="text"
              onChange={handleTicker}
              placeholder="Enter Ticker"
            />
          </label>
          <button onClick={handleClick}> submit </button>
        </form>
        <p>{ticker.current.value}</p>
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={handleClick}>
          <label>
            <input
              type="text"
              onChange={handleTicker}
              placeholder="Enter Ticker"
            />
          </label>
          <button onClick={handleClick}> submit </button>
        </form>
      </div>
    );
  }
}
