/**
 * Created by Administrator on 2018/1/19.
 * 优惠专区-特色项
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

import colors from './../styles/colors';

class BlockItem extends PureComponent {
  render() {
    const { data } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.subTitle}>{data.sub_title}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            resizeMode={Image.resizeMode.center}
            source={{ uri: data.pic_url }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: (Dimensions.get('window').width - 24) / 4,
    overflow: 'hidden',
  },
  introContainer: {
    marginLeft: 8,
  },
  title: {
    fontWeight: 'bold',
  },
  subTitle: {
    color: colors.textColor.minor,
    fontSize: 12,
  },
  imageContainer: {
    width: (Dimensions.get('window').width - 24) / 4,
    height: 56,
    overflow: 'hidden',
    zIndex: 10,
    marginTop: 15,
  },
  image: {
    width: 78,
    height: 78,
    zIndex: 8,
    left: 24,
  },
});

BlockItem.props = {
  data: PropTypes.object,
};

export default BlockItem;
