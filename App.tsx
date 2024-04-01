import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import store from './buoi6/Store'
import ProductList from './buoi6/ProductList'
import Cart from './buoi6/Cart'

const products = [
  { id: '1', name: 'Sản phẩm 1' },
  { id: '2', name: 'Sản phẩm 2' },
  { id: '3', name: 'Sản phẩm 3' }
]
const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <ProductList products={products}/>
        <Cart />
      </View>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
})
