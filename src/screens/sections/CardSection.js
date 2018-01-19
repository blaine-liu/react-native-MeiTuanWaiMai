/**
 * Created by Administrator on 2018/1/18.
 * 优惠专区
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Dimensions } from 'react-native';

import { CardItem } from './../../components';

class CardSection extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <View style={this.props.style}>
        {list &&
          list.map(data => {
            return <CardItem key={`card-${data.cardId}`} data={data} />;
          })}
      </View>
    );
  }
}

CardSection.props = {
  list: PropTypes.array,
};

export default CardSection;
