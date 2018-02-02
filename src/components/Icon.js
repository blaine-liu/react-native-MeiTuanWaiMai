/**
 * Created by Administrator on 2018/1/19.
 */
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TouchableIcon = ({
  opacity = 0.8,
  onPress,
  name,
  color = '#666',
  size = 24,
  position = 'left',
  style = {},
}) => {
  const container = {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: position === 'left' ? 'flex-start' : 'flex-end',
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      opacity={opacity}
      style={[container, style]}
    >
      <Icon name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default TouchableIcon;
