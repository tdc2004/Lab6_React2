import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from './Actions';

const Cart = () => {
    const cartItem = useSelector(state => state.cart.item);
    const dispatch = useDispatch();
  return (
    <View>
      {
        cartItem.map(item=>(
            <View key={item.id}>
                <Text>{item.name} - {item.quantity}</Text>
                <Button title='Delete' onPress={()=>dispatch(removeItem(item))}/>
            </View>
        ))
      }
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})