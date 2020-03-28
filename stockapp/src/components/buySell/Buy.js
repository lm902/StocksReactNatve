import React, { useState } from "react";
import { SafeAreaView, Text, Button, TextInput } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
// import StkMobile from "../../../../../stk-mobile";

export default function Buy() {
  const [currentValue, setCurrentValue] = useState({});
  const [quantity, setQuantity] = useState("");
  const [total, setTotal] = useState(0);

  function handleQuantity(value) {
    let quantity = 0;

    if (value) {
      quantity = value;
    }

    setTotal(quantity * currentValue.c);
    setQuantity(quantity);

    console.log(currentValue.c);
    console.log(quantity);
    console.log(value);
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
            .then((response) => response.json())
            .then((result) => {
              if (isActive) {
                setCurrentValue(result);
              }
            })
            .catch((error) => console.log("error", error));
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
        {TICKER} Current Value: ${!!currentValue && currentValue.c}
      </Text>

      <Text> Quantity: </Text>

      <TextInput
        onSubmit={handleQuantity}
        name='quantity'
        placeholder='Quantity'
        value={quantity}
        onChangeText={handleQuantity}
      />
      <Text onChange={handleQuantity}>Total: ${total} </Text>

      <Button title='Cancel' />
      <Button title='Buy' />
    </SafeAreaView>
  );
}
