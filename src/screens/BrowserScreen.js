/**
 * Created by Administrator on 2018/1/18.
 */
import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class BrowserScreen extends Component {
  render() {
    const { state } = this.props.navigation;
    return (
      <WebView scalesPageToFit={true} source={{ uri: state.params.h5_url }} />
    );
  }
}
