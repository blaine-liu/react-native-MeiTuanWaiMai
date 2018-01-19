/**
 * Created by Administrator on 2018/1/17.
 */
import React, { PureComponent } from 'react';
import { StyleSheet, Dimensions, Image, View, Text } from 'react-native';

const { width } = Dimensions.get('window');

class StaticSearch extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/tool/search.png')}
          style={styles.icon}
        />
        <Text style={styles.text}>奶茶</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 3,
  },
  icon: {
    margin: 5,
    width: 15,
    height: 15,
  },
  text: {
    fontSize: 12,
  },
});

export default StaticSearch;
