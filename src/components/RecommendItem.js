/**
 * Created by Administrator on 2018/1/22.
 */
import React, { PureComponent } from 'react';
import { withNavigation } from 'react-navigation';
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

class RecommendItem extends PureComponent {
  gotoBrowserScreen = () => {
    const { data } = this.props;
    const { navigate } = this.props.navigation;
    navigate('BrowserScreen', { title: data.title, h5_url: data.click_url });
  };
  render() {
    const { data } = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        opacity={0.9}
        onPress={this.gotoBrowserScreen}
      >
        <Image style={styles.productImage} source={{ uri: data.product_pic }} />
        <Image style={styles.thumb} source={{ uri: data.pic }} />
        <Text style={styles.title} numberOfLines={1}>
          {data.title}
        </Text>
        <Text style={styles.label}>{data.label}</Text>
      </TouchableOpacity>
    );
  }
}

const imageHeight = 82;
const thumbSize = 36;
const thumbOffsetLeft = 12;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
  productImage: {
    width: calCellWidth(36, 2),
    height: imageHeight,
  },
  thumb: {
    width: thumbSize,
    height: thumbSize,
    position: 'absolute',
    left: thumbOffsetLeft,
    bottom: 24,
    borderRadius: 3,
  },
  title: {
    width: calCellWidth(36, 2) - thumbSize - thumbOffsetLeft,
    left: 32,
    fontWeight: 'bold',
  },
  label: {
    color: colors.textColor.minor,
    fontSize: 12,
    alignSelf: 'flex-start',
    left: thumbOffsetLeft,
  },
});

RecommendItem.props = {
  data: PropTypes.object,
};

export default withNavigation(RecommendItem);
