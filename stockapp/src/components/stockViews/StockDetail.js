 
import React, { useState } from "react";
import { SafeAreaView, Text, Button, TextInput,StyleSheet, View, Dimensions } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import Colors from '../../constants/Colors'
import {Ionicons} from '@expo/vector-icons'
// import StkMobile from "../../../../../stk-mobile";

export default function StockDetail() {
    const [currentValue, setCurrentValue] = useState({});
    const [favorite, setFavorite] = useState(false);
    const [stockName, setName] = useState("") 
    
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


    // REPLACE THESE WITH DYNAMIC VALUES
    const iconName = 'ios-heart-empty'
    const size = 40
    const color = Colors.DARK_PURPLE
    const watchListText = "Add to Watchlist"
  
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.tickerText}>{TICKER}</Text>
    <Text style={styles.stockName}>Microsoft</Text>
        <Text style={styles.stockValue}> Current Value: ${!!currentValue && currentValue.c}
        </Text>
        <View style={styles.addToWatchList}>
        <Ionicons 
          style={styles.icon}
          name={iconName} 
          size={size} 
          color={color} />
          <Text>{watchListText}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonView}>
        <Button 
        style={styles.cancel} 
        color={Colors.PURPLE}
        title='BUY' />
        </View>
        <View style={styles.buttonView}>
        <Button 
        style={styles.buy} 
        color={Colors.PURPLE}
        title='SELL' />
        </View>
      </View>
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  addToWatchList: {
    alignItems: 'center',
    marginBottom: 50
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: "space-around"
  },
  buttonView: {
    width: '40%'
  }


});