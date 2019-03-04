"use strict";
exports.__esModule = true;
function quickSort(arr, isAsccending) {
    if (1 === arr.length)
        return arr;
    if (0 === arr.length)
        return [];
    var small = [];
    var big = [];
    var equal = [];
    var key = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < key) {
            small.push(arr[i]);
        }
        else if (arr[i] > key) {
            big.push(arr[i]);
        }
        else {
            equal.push(arr[i]);
        }
    }
    if (isAsccending) {
        return [].concat(quickSort(small, isAsccending), equal, quickSort(big, isAsccending));
    }
    return [].concat(quickSort(big, isAsccending), equal, quickSort(small, isAsccending));
}
exports["default"] = quickSort;
