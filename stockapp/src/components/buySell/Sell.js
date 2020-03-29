import React, { useState } from "react";
import { SafeAreaView, Text, Button, TextInput, StyleSheet, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import Colors from '../../constants/Colors'
// import StkMobile from "../../../../../stk-mobile";

export default function Buy() {
  const [currentValue, setCurrentValue] = useState({});
  const [quantity, setQuantity] = useState("");
  const [total, setTotal] = useState(0);
  const [stockName, setName] = useState("")

  function handleQuantity(value) {
    let quantity = 0;

    if (value) {
      quantity = value;
    }

    setTotal(quantity * currentValue.c);
    setQuantity(quantity);
    setName('Microsoft')

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
      <Text style={styles.tickerText}>{TICKER}</Text>
  <Text style={styles.stockName}>Microsoft</Text>
      <Text style={styles.stockValue}> Current Value: ${!!currentValue && currentValue.c}
      </Text>
        <TextInput
          style={styles.input}
          onSubmit={handleQuantity}
          name='quantity'
          placeholder='Quantity'
          value={quantity}
          onChangeText={handleQuantity}
        />
        <Text onChange={handleQuantity} style={styles.total}>Total: ${total} </Text>

    <View style={styles.buttonContainer}>
      <View style={styles.buttonView}>
      <Button 
      style={styles.cancel} 
      color={Colors.RED}
      title='Cancel' />
      </View>
      <View style={styles.buttonView}>
      <Button 
      style={styles.buy} 
      color={Colors.GREEN}
      title='Sell' />
      </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.BACKGROUND_COLOR,
    paddingHorizontal: 40
  },
  tickerText: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 34,
    textAlign:"right",
    color: '#555'
  },
  stockName: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign:'left',
    marginTop: 30,
    marginBottom: 30,
    fontSize: 22,
    color: '#444'
  },
  stockValue: {
    textAlign:'center',
    fontSize: 15,
    marginBottom: 30,
    color: '#555'
  },
  input: {
    width: 100,
    height: 35,
    padding: 10,
    borderWidth: 1,
    borderColor: '#222',
    marginBottom: 10,
    alignSelf: 'center',
    marginBottom: 20
  },
  total: {
    textAlign:'center',
    fontSize: 18,
    marginBottom: 30,
    color: '#555'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: "space-around"
  },
  buttonView: {
    width: '40%'
  }


});