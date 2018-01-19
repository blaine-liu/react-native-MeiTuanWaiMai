/**
 * Created by Administrator on 2018/1/17.
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

class TabBarIcon extends PureComponent {
  render() {
    const { focused, activeImg, inactiveImg } = this.props;
    const iconSize = 28;
    return (
      <Image
        source={focused ? activeImg : inactiveImg}
        style={{ width: iconSize, height: iconSize }}
      />
    );
  }
}

TabBarIcon.props = {
  focused: PropTypes.bool,
  activeImg: PropTypes.any,
  inactiveImg: PropTypes.any,
};

export default TabBarIcon;
