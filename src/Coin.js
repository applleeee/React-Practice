import { useEffect, useState } from "react";

const Coin = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((data) => {
        setCoins(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The Coins</h1>
      {loading ? <span>Loading...</span> : null}
      <ul>
        {coins.map((ele) => {
          return (
            <li key={ele.id}>
              {ele.name} ({ele.symbol}): {ele.quotes.USD.price} USD
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Coin;
