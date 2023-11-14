//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Pressable} from 'react-native';
import cart from '../data/cart';
import CartListItem from '../components/CartListItem';
import {useSelector} from 'react-redux';
import {
  selectSubtotal,
  selectDeliveryPrice,
  selectTotal,
} from '../store/cartSlice';
const ShoppingCart = () => {
  const cartItems = useSelector(state => state.cart.items);

  const renderItem = ({item}) => <CartListItem cartItem={item} />;

  const ShoppingCartTotals = () => {
    const subtotal = useSelector(selectSubtotal);
    const deliveryFee = useSelector(selectDeliveryPrice);
    const total = useSelector(selectTotal);

    return (
      <View style={styles.totalsContainer}>
        <View style={styles.row}>
          <Text style={styles.text}>Subtotal</Text>
          <Text style={styles.text}>{subtotal} US$</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Delivery</Text>
          <Text style={styles.text}>{deliveryFee} US$</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.textBold}>Total</Text>
          <Text style={styles.textBold}>{total} US$</Text>
        </View>
      </View>
    );
  };

  const onCheckout = () => {};

  return (
    <>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        ListFooterComponent={ShoppingCartTotals}
      />
      <Pressable onPress={onCheckout} style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  totalsContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: 'gainsboro',
    borderTopWidth: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: 'gray',
  },
  textBold: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
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
export default ShoppingCart;
