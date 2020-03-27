import React, { useState } from "react";
import { SafeAreaView, Text, Button } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { Input } from "react-native-elements";

export default function Buy() {
  const [currentValue, setCurrentValue] = useState({});
  const [quantity, setQuantity] = useState({});
  const [total, setTotal] = useState("");

  function handleQuantity(e) {
    setQuantity(e.target.value);
  }
  function totalQuantity(e) {
    setTotal(JSON.parse(quantity * currentValue));
  }

  const BASE = "https://finnhub.io/api/v1/quote?symbol=";
  const TICKER = "AAPL";
  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;

      const getCurrentValue = async () => {
        var requestOptions = {
          method: "GET"
        };
        try {
          const user = await fetch(
            `${BASE}${TICKER}&token=bpo09nfrh5ra872e0oi0`,
            requestOptions
          )
            .then(response => response.json())
            .then(result => {
              if (isActive) {
                setCurrentValue(result);
              }
            })
            .catch(error => console.log("error", error));
        } catch (err) {
          throw err;
        }
      };
      getCurrentValue();
      return () => {
        isActive = false;
      };
    }, [TICKER])
  );

  return (
    <SafeAreaView>
      <Text>
        {" "}
        {TICKER} Current Value: ${!!currentValue && currentValue.c}
      </Text>

      <Text> Quantity: </Text>

      <Input
        onSubmit={handleQuantity}
        name="quantity"
        placeholder="Quantity"
        value={quantity}
        onChange={handleQuantity}
      />
      <Text onChange={totalQuantity}>Total: ${total} </Text>
      <Button title="Cancel" />
      <Button title="Sell" />
    </SafeAreaView>
  );
}
