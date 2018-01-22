/**
 * Created by Administrator on 2018/1/18.
 * 卡片项
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

class CardItem extends PureComponent {
  render() {
    const { title } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});

CardItem.props = {
  title: PropTypes.string,
};

export default CardItem;
