import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import Colors from '../../constants/Colors'

const StockItem = ({stock}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.stockTicker}>{stock.ticker}</Text>
    <Text stlye={styles.stockName}>{stock.name}</Text>
            <Text style={styles.currentValue}>${stock.currentValue}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 15,
        borderBottomColor: Colors.GREY,
        borderBottomWidth: 1,
        marginBottom: 15,
        flexGrow: 1
    },
    stockTicker: {
        fontWeight: 'bold',
        color: '#555',
        textTransform: 'uppercase'
    },
    stockName: {
        color: '#444'
    },
    currentValue: {
        textAlign: 'right',
        color: '#555'
    }
})

export default StockItem
