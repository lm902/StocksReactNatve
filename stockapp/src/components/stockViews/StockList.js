import React, { Component } from 'react'
import {Text, View, StyleSheet, FlatList, SafeAreaView, TouchableOpacity} from 'react-native'
import Colors from '../../constants/Colors'
import StockItem from './StockItem'
import StockNav from '../../nav/StockNav'

const StockList = ({navigation}) => {

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
                <TouchableOpacity onPress={() => navigation.navigate('StockDetail')}>
                {/* <TouchableOpacity onPress={() => showDetail().bind(this)}>  */}
                    <StockItem stock={item} />
                </TouchableOpacity>
            );
        }} />
    </SafeAreaView>
)

}

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
    //   alignItems: 'center',
    //   justifyContent: 'center',
      //backgroundColor: Colors.BACKGROUND_COLOR,
    }
});

export default StockList;