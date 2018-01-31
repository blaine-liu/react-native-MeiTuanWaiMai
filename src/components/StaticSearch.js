/**
 * Created by Administrator on 2018/1/17.
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Dimensions,
  Image,
  View,
  Text,
  Animated,
} from 'react-native';

class StaticSearch extends PureComponent {
  render() {
    return (
      <Animated.View style={[styles.container, this.props.containerStyle]}>
        <Image
          source={require('../assets/tool/search.png')}
          style={styles.icon}
        />
        <Text style={styles.text}>奶茶</Text>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#fff',
  },
  icon: {
    margin: 5,
    width: 15,
    height: 15,
  },
  text: {
    fontSize: 12,
  },
});

StaticSearch.props = {
  containerStyle: PropTypes.any,
};

export default StaticSearch;
