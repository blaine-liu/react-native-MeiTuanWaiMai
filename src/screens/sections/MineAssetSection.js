/**
 * Created by Administrator on 2018/2/2.
 */
import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, StatusBar, Image } from 'react-native';

import { CategoryItem } from './../../components';

export default class MineAssetSection extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>我的资产</Text>
        <View style={styles.categoryContainer}>
          <CategoryItem
            img={require('./../../assets/user/redPacket.png')}
            text={'红包'}
            iconStyle={styles.iconBox}
            columnsNum={4}
            paddingHorizontal={0}
            remark="6个未使用"
          />
          <CategoryItem
            img={require('./../../assets/user/redPacket.png')}
            text={'代金券'}
            iconStyle={styles.iconBox}
            columnsNum={4}
            paddingHorizontal={0}
            remark="2个未使用"
          />
          <CategoryItem
            img={require('./../../assets/user/redPacket.png')}
            text={'我的钱包'}
            iconStyle={styles.iconBox}
            columnsNum={4}
            paddingHorizontal={0}
            remark="支付管理"
          />
          <CategoryItem
            img={require('./../../assets/user/redPacket.png')}
            text={'余额'}
            iconStyle={styles.iconBox}
            columnsNum={4}
            paddingHorizontal={0}
            remark="¥ 0.00"
          />
        </View>
      </View>
    );
  }
}

const rangeSize = 10;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: rangeSize,
    paddingTop: 12,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 8,
  },
  iconBox: {
    width: 33,
    height: 33,
  },
  title: {
    marginLeft: 12,
    paddingBottom: 16,
    borderColor: 'rgb(230,230,230)',
    borderBottomWidth: 1,
  },
});
