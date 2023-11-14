import React from 'react';
import {View, Text, StyleSheet, FlatList, Image, Pressable} from 'react-native';
// import products from '../data/products';
import {useDispatch, useSelector} from 'react-redux';
import {productSlice} from '../store/productSlice';


const ProductsScreen = ({navigation}) => {
  const products = useSelector(state => state.product.products);
  const dispatch = useDispatch();

  const renderItem = ({item}) => (
    <Pressable
      style={styles.itemContainer}
      onPress={() => {
        dispatch(productSlice.actions.selectedProduct(item.id));
        navigation.navigate('Product Details')
      }}>
      <Image source={{uri: item.image}} style={styles.image} />
    </Pressable>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: '50%',
    padding: 1,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
});

export default ProductsScreen;
