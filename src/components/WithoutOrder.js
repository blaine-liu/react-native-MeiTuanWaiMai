/**
 * Created by Administrator on 2018/2/2.
 */
import React, { PureComponent } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class WithoutOrder extends PureComponent {
  render() {
    const { description } = this.props;
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('./../assets/order/without_order.png')}
        />
        <Text style={styles.text}>{description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 24,
  },
  image: {
    width: 156,
    height: 156,
  },
  text: {
    marginTop: 12,
  },
});
