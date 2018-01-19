/**
 * Created by Administrator on 2018/1/17.
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Image, StyleSheet } from 'react-native';

import colors from './../styles/colors';

import Location from './Location';
import StaticSearch from './StaticSearch';

class CollapsibleHeader extends PureComponent {
  render() {
    const { containerStyle } = this.props;
    return (
      <View style={[styles.container, containerStyle]}>
        <Location containerStyle={{ marginBottom: 12, marginTop: 8 }} />
        <StaticSearch />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryColor,
    height: 84,
    paddingLeft: 12,
    paddingRight: 12,
  },
});

CollapsibleHeader.props = {
  containerStyle: PropTypes.any,
};

export default CollapsibleHeader;
