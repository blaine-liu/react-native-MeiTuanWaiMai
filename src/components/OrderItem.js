/**
 * Created by Administrator on 2018/2/1.
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
import Icon from 'react-native-vector-icons/Ionicons';

import { Button } from './../components';

import colors from './../styles/colors';

class OrderItem extends PureComponent {
  render() {
    const { data } = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.thumb} source={{ uri: data.poi_pic }} />
        <View style={styles.bodyContainer}>
          <View style={styles.titleContainer}>
            <View style={styles.titleWithIcon}>
              <Text style={styles.title} numberOfLines={1}>
                {data.poi_name}
              </Text>
              <Icon
                name={'ios-arrow-forward-outline'}
                size={18}
                style={styles.titleIcon}
              />
            </View>
            <Text style={styles.status}>{data.status_description}</Text>
          </View>
          <View style={styles.goodsContainer}>
            {data.product_list &&
              data.product_list.map((product, index) => {
                return (
                  <View
                    key={`order-product-${index}`}
                    style={{ marginVertical: 4 }}
                  >
                    <Text style={styles.goodsText}>{product.product_name}</Text>
                    <Text style={[styles.goodsText, styles.productCount]}>
                      x {product.product_count}
                    </Text>
                  </View>
                );
              })}
          </View>
          <View style={{ marginVertical: 4, height: 18 }}>
            {data.product_count > 3 && (
              <Text style={styles.goodsText}>...</Text>
            )}
            <Text style={[styles.goodsText, styles.totalRemark]}>
              共{data.product_count}件商品，实付
              <Text
                style={{ fontWeight: 'bold', color: colors.textColor.primary }}
              >
                ¥{data.total}
              </Text>
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            {data.button_list &&
              data.button_list.map(btn => {
                const dynamicStyle = {};
                if (btn.highlight) {
                  dynamicStyle.borderColor = colors.primaryColor;
                  dynamicStyle.backgroundColor = colors.primaryColor;
                }
                return (
                  <Button
                    key={`btn-${btn.code}`}
                    title={btn.title}
                    containerStyle={[styles.btnStyle, dynamicStyle]}
                  />
                );
              })}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    flexDirection: 'row',
    marginBottom: 18,
  },
  thumb: {
    width: 33,
    height: 33,
  },
  bodyContainer: {
    flex: 1,
    paddingLeft: 13,
  },
  titleContainer: {
    flex: 1,
    borderColor: 'rgb(251,251,251)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    height: 39,
    alignItems: 'center',
  },
  titleWithIcon: {
    marginRight: 98,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  title: {
    color: colors.textColor.primary,
  },
  titleIcon: {
    marginLeft: 2,
  },
  status: {
    width: 73,
    position: 'absolute',
    right: 0,
    color: colors.textColor.primary,
  },
  goodsContainer: {
    marginTop: 8,
  },
  goodsText: {
    fontSize: 12,
    color: colors.textColor.minor,
  },
  productCount: {
    position: 'absolute',
    right: 0,
  },
  totalRemark: {
    position: 'absolute',
    right: 0,
    top: 2,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 8,
  },
  btnStyle: {
    marginLeft: 16,
  },
});

OrderItem.props = {
  data: PropTypes.object,
};

export default OrderItem;
