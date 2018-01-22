/**
 * Created by Administrator on 2018/1/19.
 * 为你优选
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Dimensions } from 'react-native';

import { CardItem, RecommendItem, ThemeItem } from './../../components';

class RecommendSection extends PureComponent {
  render() {
    const { data } = this.props;
    return (
      <View style={this.props.style}>
        <CardItem title={data.block_title}>
          <View style={styles.rowContainer}>
            {data.poi_list &&
              data.poi_list.map(poi => {
                return (
                  <RecommendItem
                    key={`recommend-item-${poi.sku_id}`}
                    data={poi}
                  />
                );
              })}
          </View>
          <View style={styles.rowContainer}>
            {data.theme_list &&
              data.theme_list.map(theme => {
                return (
                  <ThemeItem
                    key={`theme-item-${theme.theme_id}`}
                    data={theme}
                  />
                );
              })}
          </View>
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

RecommendSection.props = {
  data: PropTypes.object,
};

export default RecommendSection;
