/**
 * Created by Administrator on 2018/1/22.
 * 精选
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

import { calCellWidth } from './../utils';
import colors from './../styles/colors';

class ThemeItem extends PureComponent {
  render() {
    const { data } = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: data.pic }} />
        <View style={styles.frontContainer}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.label}>{data.label}</Text>
        </View>
      </View>
    );
  }
}

const imageHeight = 115;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
  image: {
    width: calCellWidth(36, 2),
    height: imageHeight,
  },
  frontContainer: {
    position: 'absolute',
    bottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 3,
    width: 130,
    height: 45,
  },
  title: {
    fontWeight: 'bold',
  },
  label: {
    color: colors.textColor.minor,
    fontSize: 10,
  },
});

ThemeItem.props = {
  data: PropTypes.object,
};

export default ThemeItem;
