/**
 * Created by Administrator on 2018/1/18.
 */
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

module.exports = {
  groupArray,
};
