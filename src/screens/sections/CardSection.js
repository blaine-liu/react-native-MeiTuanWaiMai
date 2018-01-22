/**
 * Created by Administrator on 2018/1/18.
 * 优惠专区
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Dimensions } from 'react-native';

import { CardItem, BrandBlockItem, BlockItem } from './../../components';

class CardSection extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <View style={this.props.style}>
        {list &&
          list.map(data => {
            return (
              <CardItem key={`card-${data.cardId}`} title={data.bar_name}>
                <View style={styles.rowContainer}>
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
                <View style={styles.rowContainer}>
                  {data.block_list &&
                    data.block_list.map(block => {
                      return (
                        <BlockItem
                          key={`block-item-${block.block_id}`}
                          data={block}
                        />
                      );
                    })}
                </View>
              </CardItem>
            );
          })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
});

CardSection.props = {
  list: PropTypes.array,
};

export default CardSection;
