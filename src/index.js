
exports.min = function min (array) {
  if (!Array.isArray(array) || array.length == 0) {
    return 0;
  }
  return Math.min(...array);
}

exports.max = function max (array) {
  if (!Array.isArray(array) || array.length == 0) {
    return 0;
  }
  return Math.max(...array);
}

exports.avg = function avg (array) {
  if (!Array.isArray(array) || array.length == 0) {
    return 0;
  }
  
  let sum = array.reduce((sum, elem, index) => {
    return sum + elem;
  }, 0);

  return sum / array.length;
}
