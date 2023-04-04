function binarySearch(arr, target) {
    let lo = 0;
    let hi = arr.length-1;

    while (lo < hi) {
        let mid = Math.floor((hi + lo) / 2);
        if (arr[mid] === target) return arr[mid];
        else if (arr[mid] < target) lo = mid+1;
        else if (arr[mid] > target) hi = mid-1;
    }
    return -1;
}

let arr = [1, 5, 8, 10, 14, 26, 27, 32, 37, 51, 52,
       53, 57, 63, 66, 67, 68, 69, 74, 76, 79,
       82, 83, 84, 86, 88, 89, 92, 94, 95, 99, 100]
let target = 89

console.log(binarySearch(arr, target));
