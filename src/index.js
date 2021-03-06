
exports.min = function min (array) {
  let y = [];
  if ((array == undefined)||(array.length == y.length)){
    return 0;
  }
  else {
     let x = array[0];
  array.forEach(item => {
    if (item < x){
      x = item;
    }
  });
  return x;
  }
  
}

exports.max = function max (array) {
  let y = [];
  if ((array == undefined)||(array.length == y.length)){
    return 0;
  }
  else {
     let x = array[0];
  array.forEach(item => {
    if (item > x){
      x = item;
    }
  });
  return x;
  }
}

exports.avg = function avg (array) {
  let y = [];
  if ((array == undefined)||(array.length == y.length)){
    return 0;
  }
  else {
     let x = array[0];
  for (let i = 1; i < array.length; i++) {
      x += array[i];
  };
  return x/array.length;
  }
}
