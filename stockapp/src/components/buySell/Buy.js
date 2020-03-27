import React, { useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

export default function Home() {
  const [currentValue, setCurrentValue] = useState({});

  const BASE = "https://finnhub.io/api/v1/quote?symbol=";
  const TICKER = "AAPL";
  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;

      const fetchUser = async () => {
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

      fetchUser();

      return () => {
        isActive = false;
      };
    }, [TICKER])
  );
  // useFocusEffect(
  //   React.useCallback(() => {
  //     console.log("kenny");
  // var requestOptions = {
  //   method: "GET"
  // };
  // fetch(`${BASE}${TICKER}&token=bpo09nfrh5ra872e0oi0`, requestOptions)
  //   .then(response => response.json())
  //   .then(result => setCurrentValue(result))
  //   .catch(error => console.log("error", error));
  // })
  // );
  return (
    <SafeAreaView>
      <Text>{!!currentValue && currentValue.c}</Text>
    </SafeAreaView>
  );
}
