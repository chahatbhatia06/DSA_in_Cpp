//Brute Force Approach

// 1.Sorting

function sortArr(arr){
    arr.sort((a,b) => a-b);
    return arr[arr.length-1];
}

const arr1 =[2,3,7,8,9]
const arr2 =[5,3,1,8,6]

console.log("The largest element in array is " + sortArr(arr1) );
console.log("The largest element in array is " + sortArr(arr2) );

