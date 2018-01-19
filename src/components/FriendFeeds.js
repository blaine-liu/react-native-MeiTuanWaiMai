/**
 * Created by Administrator on 2018/1/18.
 * 好友头条
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
const Swiper = require('react-native-swiper');
import { View, StyleSheet, Image, Dimensions, Text } from 'react-native';

import colors from './../styles/colors';

const FriendFeeds_Size = 36;
class FriendFeeds extends Component {
  render() {
    const { logo, feed_list } = this.props.feeds;
    return (
      <View style={styles.container}>
        <Image source={{ uri: logo }} style={styles.logo} />
        <View style={styles.feedContainer}>
          <Swiper
            autoPlay
            horizontal={false}
            showsPagination={false}
            height={FriendFeeds_Size}
          >
            {feed_list &&
              feed_list.map((feed, index) => {
                return (
                  <View key={`feed-${index}`} style={styles.feedSwiper}>
                    <Image
                      style={styles.avatar}
                      source={{ uri: feed.user_pic }}
                      resizeMode={Image.resizeMode.contain}
                    />
                    <View style={styles.infoContainer}>
                      <Text style={styles.mainInfo}>{feed.main_info}</Text>
                      <Text style={styles.subInfo}>{feed.sub_info}</Text>
                    </View>
                    <Text style={styles.feedTime}>1月1日</Text>
                  </View>
                );
              })}
          </Swiper>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logo: {
    width: FriendFeeds_Size * 0.9,
    height: FriendFeeds_Size * 0.9,
  },
  feedContainer: {
    flex: 1,
    marginLeft: 12,
    height: FriendFeeds_Size,
  },
  feedSwiper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  avatar: {
    width: FriendFeeds_Size,
    height: FriendFeeds_Size,
    borderRadius: FriendFeeds_Size,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 8,
  },
  mainInfo: {
    fontSize: 12,
  },
  subInfo: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 2,
  },
  feedTime: {
    position: 'relative',
    right: 0,
    fontSize: 10,
    color: colors.textColor.minor,
  },
});

FriendFeeds.props = {
  feeds: PropTypes.object,
};

export default FriendFeeds;
