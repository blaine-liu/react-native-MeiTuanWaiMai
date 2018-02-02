/**
 * Created by Administrator on 2018/1/17.
 */
import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import ScrollableTabView, {
  DefaultTabBar,
} from 'react-native-scrollable-tab-view';

import colors from './../styles/colors';
import constants from './../styles/constants';

import AllOrder from './orders/AllOrder';
import EvaluateOrder from './orders/EvaluateOrder';
import RefundOrder from './orders/RefundOrder';

const underlineWidth = 20;
const underlineLeft = (Dimensions.get('window').width / 3 - underlineWidth) / 2;

export default class OrderScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerSection}>
          <Text style={styles.headerTitle}>订单</Text>
        </View>
        <ScrollableTabView
          tabBarActiveTextColor={colors.primaryColor}
          tabBarInactiveTextColor={'rgb(105,105,105)'}
          tabBarBackgroundColor={'#fff'}
          tabBarUnderlineStyle={styles.tabBarUnderline}
          tabBarTextStyle={styles.tabBarText}
          renderTabBar={props => (
            <DefaultTabBar {...props} style={styles.tabBar} />
          )}
          style={styles.tabView}
        >
          <AllOrder tabLabel="全部订单" />
          <EvaluateOrder tabLabel="待评价（1）" />
          <RefundOrder tabLabel="退款" />
        </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerSection: {
    height: 72,
    paddingHorizontal: constants.paddingHorizontal,
    justifyContent: 'flex-end',
    borderColor: 'rgb(230,230,230)',
    borderBottomWidth: 1,
  },
  headerTitle: {
    color: colors.textColor.primary,
    fontSize: 18,
    bottom: 8,
  },
  tabView: {
    marginTop: 12,
  },
  tabBar: {
    height: 42,
    borderColor: 'rgb(252,252,252)',
    borderBottomWidth: 1,
    marginBottom: 15,
  },
  tabBarUnderline: {
    backgroundColor: colors.primaryColor,
    width: underlineWidth,
    height: 2,
    left: underlineLeft,
    alignSelf: 'center',
  },
  tabBarText: {
    fontWeight: 'normal',
  },
});
