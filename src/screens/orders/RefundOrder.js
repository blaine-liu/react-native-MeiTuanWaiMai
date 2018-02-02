/**
 * Created by Administrator on 2018/2/1.
 */
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { WithoutOrder } from './../../components';

export default class RefundOrder extends Component {
  render() {
    return (
      <View>
        <WithoutOrder description="没有待退款的订单哦~" />
      </View>
    );
  }
}
