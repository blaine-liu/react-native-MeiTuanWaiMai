/**
 * Created by Administrator on 2018/1/31.
 */
import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';
import Modal from "react-native-modal";

import Icon from './Icon';

export default class Share extends Component {
    state = {
        isModalVisible: false
    };
    _toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };
    render(){
        return (
            <View>
                <Icon onPress={this._toggleModal} name={'ios-share-outline'} position='right' />
                <Modal
                    isVisible={this.state.isModalVisible}
                    useNativeDriver
                    onBackdropPress={() => this._toggleModal()}
                    onBackButtonPress={() => this._toggleModal()}
                    style={styles.bottomModal}
                >
                    <View style={styles.modalContent}>
                        <View style={styles.shareIconBox}>
                            <Image style={styles.shareIcon} source={require('./../assets/wechat/moments.png')}/>
                            <Text style={styles.shareText}>微信朋友圈</Text>
                        </View>
                        <View style={styles.shareIconBox}>
                            <Image style={styles.shareIcon} source={require('./../assets/wechat/friends.png')}/>
                            <Text style={styles.shareText}>微信好友</Text>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    modalContent: {
        backgroundColor: "white",
        padding: 22,
        height: 120,
        flexDirection: 'row',
        justifyContent: "center",
        borderColor: "rgba(0, 0, 0, 0.1)"
    },
    bottomModal: {
        justifyContent: "flex-end",
        margin: 0
    },
    shareIconBox: {
        flex: 1,
        alignItems: 'center'
    },
    shareIcon: {
        width: 48,
        height: 48,
    },
    shareText: {
        marginTop: 8,
    }
});