/**
 * Created by Administrator on 2018/1/17.
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

import colors from './../styles/colors';

class CategoryItem extends PureComponent {
  render() {
    const { img, text, onPress } = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.8}
        onPress={onPress}
      >
        <Image style={styles.icon} source={img} />
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: (Dimensions.get('window').width - 24) / 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
  icon: {
    width: 43,
    height: 43,
    marginBottom: 5,
  },
  text: {
    fontSize: 10,
    color: colors.textColor.primary,
  },
});

CategoryItem.props = {
  img: PropTypes.any,
  text: PropTypes.text,
  onPress: PropTypes.func,
};

export default CategoryItem;
