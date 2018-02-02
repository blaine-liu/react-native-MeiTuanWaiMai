/**
 * Created by Administrator on 2018/2/2.
 */
import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, StatusBar, Image } from 'react-native';

import { CategoryItem } from './../../components';

export default class MineRecommendSection extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>更多推荐</Text>
                <View style={styles.categoryContainer}>
                    <CategoryItem
                        img={require('./../../assets/user/redPacket.png')}
                        text={'邀请有奖'}
                        iconStyle={styles.iconBox}
                        columnsNum={4}
                        paddingHorizontal={0}
                    />
                    <CategoryItem
                        img={require('./../../assets/user/redPacket.png')}
                        text={'商家入驻'}
                        iconStyle={styles.iconBox}
                        columnsNum={4}
                        paddingHorizontal={0}
                    />
                    <CategoryItem
                        img={require('./../../assets/user/redPacket.png')}
                        text={'骑手招募'}
                        iconStyle={styles.iconBox}
                        columnsNum={4}
                        paddingHorizontal={0}
                    />
                    <CategoryItem
                        img={require('./../../assets/user/redPacket.png')}
                        text={'帮助与反馈'}
                        iconStyle={styles.iconBox}
                        columnsNum={4}
                        paddingHorizontal={0}
                    />
                    <CategoryItem
                        img={require('./../../assets/user/redPacket.png')}
                        text={'在线客服'}
                        iconStyle={styles.iconBox}
                        columnsNum={4}
                        paddingHorizontal={0}
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
    }
});