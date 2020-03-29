import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Register from '../components/authenication/Register';
import Login from '../components/authenication/Login';
import StockList from '../components/stockViews/StockList'
import WatchList from '../components/watchlist/WatchList'
import Home from '../../Home'
import Portfolio from '../components/portfolio/Portfolio'
import Search from '../components/search/Search'
import Buy from '../components/buySell/Buy'
import Sell from '../components//buySell/Sell'
import StockDetail from '../components/stockViews/StockDetail'

const ListStockStack = createStackNavigator();

function ListStockStackNav() {
  return(
  <ListStockStack.Navigator>
    <ListStockStack.Screen name="StockList" component={StockList} />
    <ListStockStack.Screen name="StockDetail" component={StockDetail} />
    <ListStockStack.Screen name="Buy" component={Buy} />
    <ListStockStack.Screen name="Sell" component={Sell} />
  </ListStockStack.Navigator>
  )
}
export default ListStockStackNav;