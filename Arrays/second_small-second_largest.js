//Brute Force approach works only if there is no duplicates

function getElement(arr){
    if(arr.length === 0|| arr.length === 1){
        console.log(-1 + " " + -1); 
        return;
    }

   arr.sort( (a,b) => a-b );
   let Small = arr[1]; 
   let Largest = arr[arr.length-2]; 
    console.log("the second smallest is " + Small);
    console.log("the second largest is " + Largest);
}

   const arr =[1, 2, 4, 6, 7, 5];
   getElement(arr);

   


