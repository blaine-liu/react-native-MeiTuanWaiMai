/**
 * Created by Administrator on 2018/2/1.
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';

export default class Button extends PureComponent {
  render() {
    const Touchable =
      Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
    const { onPress, containerStyle, textStyle, disabled, title } = this.props;
    return (
      <Touchable onPress={onPress}>
        <View style={[styles.buttonContainer, containerStyle]}>
          <Text style={textStyle} disabled={disabled}>
            {title}
          </Text>
        </View>
      </Touchable>
    );
  }
}

Button.props = {
  onPress: PropTypes.func,
  containerStyle: PropTypes.any,
  textStyle: PropTypes.any,
  disabled: PropTypes.bool,
  title: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 80,
    height: 32,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: 'rgb(212,212,212)',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    color: 'rgb(38,38,38)',
  },
});
