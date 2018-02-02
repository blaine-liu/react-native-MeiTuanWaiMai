/**
 * Created by Administrator on 2018/2/2.
 */
import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, StatusBar, Image } from 'react-native';

import { Icon as PressableIcon } from './../../components';

import colors from './../../styles/colors';

export default class MineHeaderSection extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rightContainer}>
          <PressableIcon
            name="ios-settings-outline"
            color="rgb(63,54,13)"
            style={{ height: 36 }}
          />
          <PressableIcon
            name="ios-chatboxes-outline"
            color="rgb(63,54,13)"
            style={{ height: 36 }}
          />
        </View>
        <View style={styles.profileContainer}>
          <Image
            source={require('./../../assets/user/user_default.png')}
            resizeMode="contain"
            style={styles.avatar}
          />
          <View style={styles.userContainer}>
            <Text style={styles.username}>小楼一夜听春雨</Text>
            <Text style={styles.remark}>个人信息 > </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 130,
    backgroundColor: colors.primaryColor,
    paddingTop: StatusBar.currentHeight,
  },
  rightContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  profileContainer: {
    marginLeft: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
  },
  userContainer: {
    marginLeft: 12,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  remark: {
    fontSize: 12,
    marginTop: 8,
  },
});
