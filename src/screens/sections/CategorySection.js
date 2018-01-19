/**
 * Created by Administrator on 2018/1/17.
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Dimensions } from 'react-native';
const Swiper = require('react-native-swiper');

import { CategoryItem } from './../../components';
import colors from './../../styles/colors';
import { groupArray } from './../../utils';

class CategorySection extends PureComponent {
  gotoCategory = () => {
    const { navigate } = this.props.navigation;
    navigate('Category');
  };

  render() {
    const categories = this.props.categories || [];
    const grouped = groupArray(categories, 10);
    return (
      <View style={[styles.container, this.props.containerStyle]}>
        <Swiper
          autoPlay
          loop={false}
          paginationStyle={{
            bottom: 3,
          }}
          dot={
            <View
              style={{
                backgroundColor: 'rgba(255,255,255,.3)',
                width: 5,
                height: 5,
                borderRadius: 3,
                marginLeft: 3,
                marginRight: 3,
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: colors.primaryColor,
                width: 10,
                height: 4,
                borderRadius: 3,
                marginLeft: 3,
                marginRight: 3,
              }}
            />
          }
        >
          {grouped &&
            grouped.map((group, index) => {
              return (
                <View
                  key={`category-swiper-${index}`}
                  style={styles.categoryContainer}
                >
                  {group.map(category => {
                    return (
                      <CategoryItem
                        key={`category-${category.code}`}
                        img={{ uri: category.url }}
                        text={category.name}
                        onPress={this.gotoCategory}
                      />
                    );
                  })}
                </View>
              );
            })}
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 154,
  },
  categoryContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
  },
});

CategorySection.props = {
  containerStyle: PropTypes.any,
  navigation: PropTypes.object,
  categories: PropTypes.array,
};

export default CategorySection;
