/**
 * Created by Administrator on 2018/1/22.
 * 标签组件
 */
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StaticTag = ({
  content,
  contentColor,
  borderColor, // 边框颜色
}) => {
  return (
    <View style={[styles.container, { borderColor }]}>
      <Text style={[styles.content, { color: contentColor }]}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 2,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
    marginRight: 4,
  },
  content: {
    fontSize: 10,
  },
});

export default StaticTag;
