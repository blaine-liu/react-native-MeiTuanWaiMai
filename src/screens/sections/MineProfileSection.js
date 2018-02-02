/**
 * Created by Administrator on 2018/2/2.
 */
import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, StatusBar, Image } from 'react-native';

import { CategoryItem } from './../../components';

export default class MineProfileSection extends PureComponent {
  render() {
    return (
      <View style={styles.categoryContainer}>
        <CategoryItem
          img={require('./../../assets/user/mycollection.png')}
          text={'我的收藏'}
          iconStyle={styles.iconBox}
          columnsNum={4}
          paddingHorizontal={0}
        />
        <CategoryItem
          img={require('./../../assets/user/myfootprint.png')}
          text={'我的足迹'}
          iconStyle={styles.iconBox}
          columnsNum={4}
          paddingHorizontal={0}
        />
        <CategoryItem
          img={require('./../../assets/user/mycomment.png')}
          text={'我的评价'}
          iconStyle={styles.iconBox}
          columnsNum={4}
          paddingHorizontal={0}
        />
        <CategoryItem
          img={require('./../../assets/user/mycomment.png')}
          text={'我的好友'}
          iconStyle={styles.iconBox}
          columnsNum={4}
          paddingHorizontal={0}
        />
        <CategoryItem
          img={require('./../../assets/user/mycomment.png')}
          text={'我的评价'}
          iconStyle={styles.iconBox}
          columnsNum={4}
          paddingHorizontal={0}
        />
        <CategoryItem
          img={require('./../../assets/user/myaddress.png')}
          text={'我的地址'}
          iconStyle={styles.iconBox}
          columnsNum={4}
          paddingHorizontal={0}
        />
      </View>
    );
  }
}

const rangeSize = 10;

const styles = StyleSheet.create({
  categoryContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: rangeSize,
    paddingTop: 12,
    paddingBottom: 8,
  },
  iconBox: {
    width: 33,
    height: 33,
  },
});
