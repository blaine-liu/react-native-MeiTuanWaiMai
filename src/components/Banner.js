/**
 * Created by Administrator on 2018/1/17.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
const Swiper = require('react-native-swiper');
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import colors from './../styles/colors';

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            swiperShow:false,
        };
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                swiperShow:true
            });
        },150)
    }

  gotoBrowserScreen = banner => {
    const { navigate } = this.props.navigation;
    navigate('BrowserScreen', { title: '美食', ...banner });
  };

  render() {
    const { list } = this.props;
    return (
      <View style={styles.container}>
          {
              this.state.swiperShow &&
              <Swiper
                  autoPlay
                  index={Math.floor(list.length / 2)}
                  paginationStyle={{
            bottom: 8,
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
                  {list &&
                  list.map(banner => {
                      return (
                          <View
                              key={`banner-${banner.banner_act_id}`}
                              style={styles.banner}
                          >
                              <TouchableOpacity
                                  style={styles.banner}
                                  activeOpacity={0.8}
                                  onPress={() => this.gotoBrowserScreen(banner)}
                              >
                                  <Image
                                      style={styles.image}
                                      source={{ uri: banner.banner_pic_url }}
                                      resizeMode={Image.resizeMode.contain}
                                  />
                              </TouchableOpacity>
                          </View>
                      );
                  })}
              </Swiper>
          }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 102,
  },
  banner: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  image: {
    flex: 1,
    width: Dimensions.get('window').width - 24,
    height: 80,
  },
});

Banner.props = {
  list: PropTypes.array,
  navigation: PropTypes.object,
};

Banner.defaultProps = {
  list: [],
};

export default withNavigation(Banner);
