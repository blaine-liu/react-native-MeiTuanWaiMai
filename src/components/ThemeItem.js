/**
 * Created by Administrator on 2018/1/22.
 * 精选
 */
import React, { PureComponent } from 'react';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

import { calCellWidth } from './../utils';
import colors from './../styles/colors';

class ThemeItem extends PureComponent {
  gotoBrowserScreen = () => {
    const { data } = this.props;
    const { navigate } = this.props.navigation;
    navigate('BrowserScreen', { title: data.label, h5_url: data.click_url });
  };
  render() {
    const { data } = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        opacity={0.9}
        onPress={this.gotoBrowserScreen}
      >
        <Image style={styles.image} source={{ uri: data.pic }} />
        <View style={styles.frontContainer}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.label}>{data.label}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const imageHeight = 115;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
  image: {
    width: calCellWidth(36, 2),
    height: imageHeight,
  },
  frontContainer: {
    position: 'absolute',
    bottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 3,
    width: 130,
    height: 45,
  },
  title: {
    fontWeight: 'bold',
  },
  label: {
    color: colors.textColor.minor,
    fontSize: 10,
  },
});

ThemeItem.props = {
  data: PropTypes.object,
};

export default withNavigation(ThemeItem);
