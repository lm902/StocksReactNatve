import React, { Component } from 'react'
import {StyleSheet, FlatList, SafeAreaView, TouchableOpacity, View} from 'react-native'
import Colors from '../../constants/Colors'
import StockItem from '../stockViews/StockItem'
import {Ionicons} from '@expo/vector-icons'

const StockListWatchList = ({navigation}) => {

const stocks = [
    { ticker: 'MFST', name: 'Microsoft', currentValue: '149.70' },
    { ticker: 'GE', name: 'General Electric',currentValue: '7.62' },
    { ticker: 'BAC', name: 'Bank of America Corp',currentValue: '21.60' },
    { ticker: 'CCL', name: 'Carnival Corp', currentValue: '14.41' },
    { ticker: 'BA', name: 'Boeing Co',currentValue: '162.00' },
    { ticker: 'ESS', name: 'Essec Property Trust Inc',currentValue: '228.60' },
    { ticker: 'APPL', name: 'Apple',currentValue: '247.74' },
    { ticker: 'GOOGL', name: 'Google',currentValue: '1110.48' }
]

    // REPLACE THESE WITH DYNAMIC VALUES
    const iconName = 'ios-heart'
    const size = 20
    const color = Colors.DARK_PURPLE

// const showDetail = (stock) => {
//     navigation.navigate('StockDetail', stock)
// }

const showDetail = () => {
    navigation.navigate('StockDetail')
}

return (
    <SafeAreaView style={styles.container}>
        <FlatList
        keyExtractor={stock => stock.ticker}
        data={stocks}
        renderItem={({item}) => {
            return(
                <View style={styles.stockContainer}>
                <Ionicons 
                    style={styles.icon}
                    name={iconName} 
                    size={size} 
                    color={color} />
                <View 
                    stlye={styles.stockItem}
                    flexGrow={1}
                >
                <TouchableOpacity
                    onPress={() => navigation.navigate('StockDetail')}>
                {/* <TouchableOpacity onPress={() => showDetail().bind(this)}>  */}
                    <StockItem stock={item} />
                </TouchableOpacity>
                </View>
                </View>
            );
        }} />
    </SafeAreaView>
)

}

const styles = StyleSheet.create({
    container: {

    },
    stockContainer: {
        flexDirection: 'row',
        flex: 1
    },
    icon: {
        alignSelf: 'flex-start',
        paddingRight: 20,
    },
    stockItem: {
        //flexGrow: 1,
       //flex: 0
    }
});

export default StockListWatchList;