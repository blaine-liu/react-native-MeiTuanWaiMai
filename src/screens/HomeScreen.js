/**
 * Created by Administrator on 2018/1/17.
 */
import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet, SectionList } from 'react-native';

import { CollapsibleHeader, Banner, FriendFeeds } from './../components';
import { CategorySection, CardSection } from './sections';
import colors from './../styles/colors';

import { headerData } from './../../mock';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.primaryColor} />
        <CollapsibleHeader />

        <SectionList
          style={styles.contentSection}
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
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 24,
  },
  contentSection: {
    paddingLeft: 12,
    paddingRight: 12,
  },
});
