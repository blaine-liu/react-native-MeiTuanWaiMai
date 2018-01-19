/**
 * Created by Administrator on 2018/1/19.
 */
import React, { Component } from 'react';
import {
    TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

const TouchableIcon = ({ opacity = 0.8, onPress, name, color = "#4F8EF7", size = 24 }) => {
    return (
        <TouchableOpacity onPress={onPress} opacity={opacity}>
            <Icon name={name} size={size} color={color} />
        </TouchableOpacity>
    );
};

export default TouchableIcon;