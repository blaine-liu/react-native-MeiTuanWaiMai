/**
 * Created by Administrator on 2018/1/18.
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

import { BrandBlockItem, BlockItem } from './../components';

class CardItem extends PureComponent {
  render() {
    const { data } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{data.bar_name}</Text>
        <View style={styles.brandContainer}>
          {data.brand_block_list &&
            data.brand_block_list.map(brand => {
              return (
                <BrandBlockItem
                  key={`brand-item-${brand.block_id}`}
                  data={brand}
                />
              );
            })}
        </View>
        <View style={styles.blockContainer}>
          {data.block_list &&
            data.block_list.map(block => {
              return (
                <BlockItem key={`block-item-${block.block_id}`} data={block} />
              );
            })}
        </View>
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
  brandContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  blockContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
});

CardItem.props = {
  data: PropTypes.object,
};

export default CardItem;
