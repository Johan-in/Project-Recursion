function mergeSort(arr) {
    if (arr.length <= 1) {
        console.log(arr);
        return arr;
    }
    
    const mid = Math.ceil (arr.length / 2);
    console.log(arr, mid);
    const left = arr.slice (0, mid);
    const right = arr.slice(mid);
    const leftSorted = mergeSort(left);
    const rightSorted = mergeSort(right);
    return merge(leftSorted, rightSorted);
}

function merge (left, right) {
    console.log (left, right);
    const result = [];
    let i = 0;
    let j = 0;
    while ( i < left.length &&  j < right.length ) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        }
        else {
            result.push(right[i]);
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j))
}

// Example usage;

const arr = [36, 27, 43, 3, 9, 82, 10];
const sortedArr = mergeSort(arr);
console.log(sortedArr);