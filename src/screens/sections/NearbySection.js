/**
 * Created by Administrator on 2018/1/22.
 * 附近商家
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Dimensions, Text } from 'react-native';

import { CardItem, GoodsItem } from './../../components';

class NearbySection extends PureComponent {
  render() {
    const { data } = this.props;
    return (
      <View style={this.props.style}>
        <CardItem title={'附近商家'}>
          {data.poilist &&
            data.poilist.map(poi => {
              return <GoodsItem key={`goods-item-${poi.id}`} data={poi} />;
            })}
        </CardItem>
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

NearbySection.props = {
  data: PropTypes.object,
};

export default NearbySection;
