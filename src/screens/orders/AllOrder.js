/**
 * Created by Administrator on 2018/2/1.
 */
import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import { OrderItem } from './../../components';

import constants from './../../styles/constants';

import orderData from './../../../mock/order';

export default class AllOrder extends Component {
  render() {
    return (
      <View>
        <FlatList
          data={orderData.digestlist}
          keyExtractor={item => `order-${item.order_id}`}
          renderItem={({ item }) => <OrderItem data={item} />}
          style={styles.flatList}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flatList: {
    paddingHorizontal: constants.paddingHorizontal,
  },
});
