/**
 * Created by Administrator on 2018/1/22.
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
import StarRating from 'react-native-star-rating';

import { StaticTag } from './../components';
import colors from './../styles/colors';

class GoodsItem extends PureComponent {
  render() {
    const { data } = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.thumb} source={{ uri: data.pic_url }} />
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>{data.name}</Text>
          <View style={styles.subContainer}>
            <View style={styles.rowContainer}>
              <StarRating
                disabled={true}
                maxStars={5}
                starSize={10}
                starColor={colors.primaryColor}
                emptyStarColor={'gray'}
                rating={data.wm_poi_score}
              />
              <Text style={[styles.minorText, { marginLeft: 4 }]}>
                {data.wm_poi_score}
              </Text>
              <Text style={[styles.minorText, { marginLeft: 12 }]}>
                {data.month_sales_tip}
              </Text>
            </View>
            <Text
              style={[styles.minorText, { position: 'absolute', right: 0 }]}
            >
              {data.delivery_time_tip} | {data.distance}
            </Text>
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.minorText}>
              {data.min_price_tip} | {data.shipping_fee_tip} |{' '}
              {data.average_price_tip}
            </Text>
            {data.delivery_type === 1 && (
              <Text style={styles.delivery}>美团专送</Text>
            )}
          </View>
          <View style={styles.subContainer}>
            <Image
              source={require('../assets/tool/store_icon_gray.png')}
              style={styles.storeIcon}
            />
            <Text style={[styles.minorText, { marginLeft: 4 }]}>
              {data.third_category}
            </Text>
          </View>

          <View style={[styles.subContainer, styles.tagContainer]}>
            {data.label_info &&
              data.label_info.map((label, index) => {
                return (
                  <StaticTag
                    key={`goods-tag-${index}`}
                    content={label.content}
                    contentColor={label.content_color}
                    borderColor={label.label_frame_color}
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
    width: 70,
    height: 52,
    borderRadius: 2,
  },
  bodyContainer: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontWeight: 'bold',
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 4,
  },
  tagContainer: {
    flexWrap: 'wrap',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  minorText: {
    fontSize: 10,
    color: colors.textColor.minor,
  },
  rating: {
    backgroundColor: 'red',
  },
  delivery: {
    position: 'absolute',
    right: 0,
    width: 48,
    height: 13,
    backgroundColor: colors.primaryColor,
    fontSize: 8,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  storeIcon: {
    width: 12,
    height: 12,
  },
});

GoodsItem.props = {
  data: PropTypes.object,
};

export default GoodsItem;
