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
    const {
      img,   // 图片
      text,  // 一级文本
      onPress,
      columnsNum, // 列数
      iconStyle,  // 图片样式
      paddingHorizontal, // 水平内边距，由于view的宽度是用Dimensions计算的，需要手工指定父级的内边距，否则可能出现计算偏差
      remark  // 次级文本
    } = this.props;
    return (
      <TouchableOpacity
        style={[
          styles.container,
          {
            width:
              (Dimensions.get('window').width - paddingHorizontal) / columnsNum,
          },
        ]}
        activeOpacity={0.8}
        onPress={onPress}
      >
        <Image style={[styles.icon, iconStyle]} source={img} />
        <Text style={styles.text}>{text}</Text>
          {
              remark && <Text style={styles.minorText}>{remark}</Text>
          }
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
  minorText: {
    fontSize: 8,
    color: colors.textColor.minor
  }
});

CategoryItem.props = {
  img: PropTypes.any,
  text: PropTypes.text,
  onPress: PropTypes.func,
  iconStyle: PropTypes.any,
  columnsNum: PropTypes.number,
  paddingHorizontal: PropTypes.number,
};

CategoryItem.defaultProps = {
  columnsNum: 5,
  paddingHorizontal: 24,
};

export default CategoryItem;
