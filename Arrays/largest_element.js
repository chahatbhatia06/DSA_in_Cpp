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

//Recursive Approach

// 2.Using max variable

function LargestElement(arr){
    let max = arr[0];
    for(let i=0; i<arr.length; i++){
        if(max < arr[i]){
            max = arr[i]
        }
    }
    return max;
}

const arr3 = [2, 5, 1, 3, 0];
let max = LargestElement(arr3);
console.log("The largest element in the array is: " + max);

const arr4 = [8, 10, 5, 7, 9];
max = LargestElement(arr4);
console.log("The largest element in the array is: " + max);
