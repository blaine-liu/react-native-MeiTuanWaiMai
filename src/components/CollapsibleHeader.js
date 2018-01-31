/**
 * Created by Administrator on 2018/1/17.
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Image, StyleSheet, Animated, StatusBar } from 'react-native';

import colors from './../styles/colors';

import Location from './Location';
import StaticSearch from './StaticSearch';

const MaxHeight = 84 + StatusBar.currentHeight;
const MinHeight = 54 + StatusBar.currentHeight;
class CollapsibleHeader extends PureComponent {
  render() {
    const { containerStyle, offsetY } = this.props;
    const topInterpolate = offsetY.interpolate({
      inputRange: [0, MaxHeight, MaxHeight],
      outputRange: [0, -18, -18],
    });
    const heightInterpolate = offsetY.interpolate({
      inputRange: [0, MaxHeight, MaxHeight],
      outputRange: [MaxHeight, MinHeight, MinHeight],
    });
    const bgColorInterpolate = offsetY.interpolate({
      inputRange: [0, MaxHeight, MaxHeight],
      outputRange: [colors.primaryColor, '#fff', '#fff'],
    });
    const opacityInterpolate = offsetY.interpolate({
      inputRange: [0, MaxHeight, MaxHeight],
      outputRange: [1, 0, 0],
    });
    const searchTopInterpolate = offsetY.interpolate({
      inputRange: [0, MaxHeight, MaxHeight],
      outputRange: [0, -9, -9],
    });
    const searchColorInterpolate = offsetY.interpolate({
      inputRange: [0, MaxHeight, MaxHeight],
      outputRange: ['#fff', '#E2E2E2', '#E2E2E2'],
    });
    return (
      <Animated.View
        style={[
          styles.container,
          containerStyle,
          {
            height: heightInterpolate,
            backgroundColor: bgColorInterpolate,
          },
        ]}
      >
        <StatusBar
          backgroundColor={'transparent'}
          barStyle={'dark-content'}
          translucent
        />
        <Animated.View
          style={{
            top: topInterpolate,
          }}
        >
          <Animated.View
            style={{
              opacity: opacityInterpolate,
            }}
          >
            <Location containerStyle={{ marginBottom: 12, marginTop: 8 }} />
          </Animated.View>
          <StaticSearch
            containerStyle={{
              top: searchTopInterpolate,
              borderColor: searchColorInterpolate,
              backgroundColor: searchColorInterpolate,
            }}
          />
        </Animated.View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryColor,
    height: MaxHeight,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: StatusBar.currentHeight,
  },
});

CollapsibleHeader.props = {
  containerStyle: PropTypes.any,
  offsetY: PropTypes.number,
};

export default CollapsibleHeader;
