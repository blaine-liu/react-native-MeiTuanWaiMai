/**
 * Created by Administrator on 2018/1/17.
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Image, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Location extends PureComponent {
  render() {
    return (
      <View style={[styles.container, this.props.containerStyle]}>
        <Image
          source={require('./../assets/location/pin01.png')}
          style={styles.icon}
        />
        <Text style={styles.text}>勘泰大厦</Text>
          <View style={styles.iconContainer}>
              <Icon name={'ios-arrow-forward-outline'} size={16} />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  icon: {
    width: 18,
    height: 18,
  },
  text: {
    marginLeft: 8,
    fontSize: 14,
    color: '#4B3E3D',
  },
    iconContainer: {
      marginLeft: 8,
        alignSelf: 'center'
  }
});

Location.props = {
  containerStyle: PropTypes.any,
};

export default Location;
