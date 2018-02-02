/**
 * Created by Administrator on 2018/1/17.
 */
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { MineHeaderSection, MineProfileSection, MineAssetSection, MineRecommendSection } from './sections';

export default class MineScreen extends Component {
  render() {
    return (
      <View>
        <MineHeaderSection />
        <MineProfileSection />
        <MineAssetSection />
        <MineRecommendSection />
      </View>
    );
  }
}
