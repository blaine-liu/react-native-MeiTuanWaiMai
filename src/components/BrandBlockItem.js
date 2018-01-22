/**
 * Created by Administrator on 2018/1/18.
 * 优惠专区-品牌
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

class BrandBlockItem extends PureComponent {
  render() {
    const { data } = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.brandImage} source={{ uri: data.pic_url }} />
        <View style={styles.intro}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{data.title}</Text>
          </View>
          <Text style={styles.subTitle}>{data.sub_title}</Text>
        </View>
        <Image
          style={styles.labelImage}
          resizeMode={Image.resizeMode.contain}
          source={{ uri: data.label_pic }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
  brandImage: {
    width: calCellWidth(32, 2),
    height: 106,
  },
  intro: {
    position: 'absolute',
    left: 2,
  },
  titleContainer: {
    backgroundColor: '#000',
    opacity: 0.9,
    padding: 2,
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
  subTitleContainer: {},
  subTitle: {
    backgroundColor: '#FED15E',
    fontSize: 10,
    padding: 2,
  },
  labelImage: {
    position: 'absolute',
    top: 5,
    left: 2,
    width: 45,
    height: 14,
  },
});

BrandBlockItem.props = {
  data: PropTypes.object,
};

export default BrandBlockItem;
