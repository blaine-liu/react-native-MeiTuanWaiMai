/**
 * Created by Administrator on 2018/1/18.
 */
import { Dimensions } from 'react-native';

const groupArray = (data, cols) => {
  const list = [];
  let current = [];

  // for (t of data) {
  data.forEach(t => {
    current.push(t);
    if (current.length === cols) {
      list.push(current);
      current = [];
    }
  });
  // }    // for (t of data)

  if (current.length) {
    list.push(current);
  }
  return list;
};

const calCellWidth = (padding = 24, cols = 2) => {
  if (cols <= 0) throw new Error('Argument cols should great then 0');
  return (Dimensions.get('window').width - padding) / cols;
};

module.exports = {
  groupArray,
  calCellWidth,
};
