
// You should implement your task here.

module.exports = function towelSort(arr) {
  //return combSorting(parseArr(arr)); // comb sorting, but not towel sorting
  return towelSortParse(arr);
}

function towelSortParse(arr, dir) {
  if(!Array.isArray(arr)) return [];
  if(dir!=-1 && dir!=1) dir = 1;
  let toweledArr = [];
  for(let i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i])) {
          if(i!=0) dir*=-1;
          toweledArr = toweledArr.concat(towelSortParse(arr[i], dir));
      }
      else {
          if(dir == 1) toweledArr.push(arr[i]);
          else if(dir == -1) toweledArr.unshift(arr[i]);
      }
  }
  return toweledArr;
}

// comb sorting, but not towel sorting
function parseArr(arr) {
  let normalizedArr = [];
  for(let item of arr) {
      if(Array.isArray(item)) normalizedArr = normalizedArr.concat(parseArr(item));
      else normalizedArr.push(item);
  }
  return normalizedArr;
}

function combSorting(arr) {
  for(let interval = Math.floor(arr.length / 1.247); interval > 0; interval = Math.floor(interval / 1.3)) {
    for(let i = 0; i + interval < arr.length; i++) {
          if (arr[i] > arr[i + interval]) {
            let buf = arr[i + interval];
            arr[i + interval] = arr[i];
            arr[i] = buf;
        }
    }
  }
  return arr;
}
// comb sorting, but not towel sorting
