import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {  useDispatch } from 'react-redux'
import { addItem } from './Actions';
const ProductList = ({ products }) => {
    const dispatch = useDispatch(); // phan phoi State
    return (
        <View>
            {
                products.map(product => (
                    <View key={product.id}>
                        <Text>{product.name}</Text>
                        <Button title='Add To Cart' onPress={() => dispatch(addItem(product))} />
                    </View>
                ))
            }
        </View>
    )
}

export default ProductList

const styles = StyleSheet.create({})