 
import React, { useState } from "react";
import { SafeAreaView, Text, Button, TextInput,StyleSheet, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import Colors from '../../constants/Colors'
// import StkMobile from "../../../../../stk-mobile";

export default function Buy() {
  const [currentValue, setCurrentValue] = useState({});
  const [quantity, setQuantity] = useState("");
  const [total, setTotal] = useState(0);
  const [stockName, setName] = useState("");

  function handleQuantity(value) {
    let quantity = 0;

    if (value) {
      quantity = value;
    }

    setTotal(quantity * currentValue.c);
    setQuantity(quantity);
    setName("Microsoft")

    console.log(currentValue.c);
    console.log(quantity);
    console.log(value);
  }

  const BASE = "https://finnhub.io/api/v1/quote?symbol=";
  const TICKER = "MSFT";
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
    <SafeAreaView style={styles.container}>
      <Text stlye={styles.ticker}>{TICKER}</Text>
      <Text style={styles.stockName}>{stockName}</Text>
      <Text style={styles.stockValue}> Current Value: ${!!currentValue && currentValue.c}
      </Text>
      <View stlye={styles.quantity}>
        <Text> Quantity: </Text>
        <TextInput
          onSubmit={handleQuantity}
          name='quantity'
          placeholder='Quantity'
          value={quantity}
          onChangeText={handleQuantity}
        />
        <Text onChange={handleQuantity}>Total: ${total} </Text>
      </View>

    <View stlye={styles.buttons}>
      <Button title='Cancel' />
      <Button title='Buy' />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.BACKGROUND_COLOR,
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  logo: {
      width: 100, 
      height: 100, 
      borderRadius: 100/2,
      alignSelf: "center",
      marginBottom: 30
  },
  linkText: {
      fontSize: 12,
      textAlign: "center"
  },
  link: {
      color: Colors.LINK_BLUE
  },
  buttonView: {
      width: 200
  }
});