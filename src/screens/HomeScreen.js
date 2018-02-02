/**
 * Created by Administrator on 2018/1/17.
 */
import React, { Component } from 'react';
import { View, Text, StyleSheet, SectionList, Animated } from 'react-native';

import { CollapsibleHeader, Banner, FriendFeeds } from './../components';
import {
  CategorySection,
  CardSection,
  RecommendSection,
  NearbySection,
} from './sections';

import { headerData, recommendData, nearbyData } from './../../mock';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0),
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <CollapsibleHeader offsetY={this.state.scrollY} />

        <SectionList
          style={styles.contentSection}
          initialNumToRender={3}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: this.state.scrollY } } },
          ])}
          sections={[
            {
              renderItem: () => {
                return (
                  <Banner
                    list={headerData.top_banner_list}
                    navigation={this.props.navigation}
                  />
                );
              },
              data: [
                {
                  key: 'section-banner',
                },
              ],
            },
            {
              renderItem: () => {
                return (
                  <CategorySection
                    containerStyle={{ marginTop: 8, marginBottom: 8 }}
                    navigation={this.props.navigation}
                    categories={headerData.primary_filter}
                  />
                );
              },
              data: [
                {
                  key: 'section-category',
                },
              ],
            },
            {
              renderItem: () => {
                return <FriendFeeds feeds={headerData.friend_feeds} />;
              },
              data: [
                {
                  key: 'section-friendFeeds',
                },
              ],
            },
            {
              renderItem: () => {
                return (
                  <CardSection
                    list={headerData.card_list}
                    style={{ marginTop: 27 }}
                  />
                );
              },
              data: [
                {
                  key: 'section-card',
                },
              ],
            },
            {
              renderItem: () => {
                return (
                  <RecommendSection
                    data={recommendData}
                    style={{ marginTop: 27 }}
                  />
                );
              },
              data: [
                {
                  key: 'section-recommend',
                },
              ],
            },
            {
              renderItem: () => {
                return (
                  <NearbySection data={nearbyData} style={{ marginTop: 27 }} />
                );
              },
              data: [
                {
                  key: 'section-nearby',
                },
              ],
            },
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentSection: {
    paddingLeft: 12,
    paddingRight: 12,
  },
});
