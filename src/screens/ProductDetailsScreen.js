//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  useWindowDimensions,
  ScrollView,
  Pressable,
} from 'react-native';
import products from '../data/products';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {cartSlice} from '../store/cartSlice';

const ProductDetailsScreen = () => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.product.selectedProduct);

  const {width} = useWindowDimensions();
  const navigation = useNavigation();

  const renderItem = ({item}) => (
    <Image source={{uri: item}} style={{width, aspectRatio: 1}} />
  );

  const addToCart = () => {
    dispatch(cartSlice.actions.addCartItem({product}));
    navigation.navigate('Cart');
    console.log('addToCart');
  };

  return (
    <View>
      <ScrollView>
        <FlatList
          data={product.images}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        />
        <View style={{padding: 20}}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      <Pressable onPress={addToCart} style={styles.button}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: '500',
    marginVertical: 10,
  },
  price: {
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: 1.5,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: '300',
  },
  button: {
    position: 'absolute',
    backgroundColor: 'black',
    bottom: 30,
    width: '90%',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
});

//make this component available to the app
export default ProductDetailsScreen;
