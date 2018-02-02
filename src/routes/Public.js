/**
 * Created by Administrator on 2018/1/9.
 */
import React from 'react';
import { StatusBar, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import {
  HomeScreen,
  MineScreen,
  OrderScreen,
  CategoryScreen,
  BrowserScreen,
} from './../screens';

import { TabBarIcon, Icon, Share } from './../components';
import colors from './../styles/colors';

const HomeIcon = ({ focused }) => {
  return (
    <TabBarIcon
      focused={focused}
      activeImg={require('../assets/tabbar/home_active.png')}
      inactiveImg={require('../assets/tabbar/home_inactive.png')}
    />
  );
};

const OrderIcon = ({ focused }) => {
  return (
    <TabBarIcon
      focused={focused}
      activeImg={require('../assets/tabbar/order_active.png')}
      inactiveImg={require('../assets/tabbar/order_inactive.png')}
    />
  );
};

const MineIcon = ({ focused }) => {
  return (
    <TabBarIcon
      focused={focused}
      activeImg={require('../assets/tabbar/user_active.png')}
      inactiveImg={require('../assets/tabbar/user_inactive.png')}
    />
  );
};

const LeftIcon = ({ onPress }) => {
  return <Icon onPress={onPress} name="ios-arrow-back-outline" />;
};

const MainTabNavigator = TabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: '首页',
        tabBarIcon: HomeIcon,
      },
    },
    Order: {
      screen: OrderScreen,
      navigationOptions: {
        tabBarLabel: '订单',
        tabBarIcon: OrderIcon,
      },
    },
    Mine: {
      screen: MineScreen,
      navigationOptions: {
        tabBarLabel: '我的',
        tabBarIcon: MineIcon,
      },
    },
  },
  {
    initialRouteName: 'Home',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: colors.textColor.primary,
      inactiveTintColor: colors.textColor.ordinary,
      style: {
        backgroundColor: '#FBFBFB',
        borderTopWidth: 1,
        borderColor: '#EDEDED',
        height: 49,
      },
      labelStyle: {
        fontSize: 12,
        marginTop: 1,
      },
      showIcon: true,
      renderIndicator: () => null,
    },
    tabBarPosition: 'bottom',
    lazy: true,
  }
);

const PublicNavigator = StackNavigator({
  Home: {
    screen: MainTabNavigator,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Category: {
    screen: CategoryScreen,
    navigationOptions: () => ({
      title: 'Category',
      header: null,
    }),
  },
  BrowserScreen: {
    screen: BrowserScreen,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.title}`,
      headerLeft: LeftIcon,
      headerRight: <Share />,
      headerStyle: {
        paddingHorizontal: 12,
      },
      headerTitleStyle: {
        alignSelf: 'center',
        fontWeight: 'normal',
        fontSize: 14,
      },
    }),
  },
});

export default PublicNavigator;
