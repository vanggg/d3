// // 1.Odd numbers 
var av=function(...b){   
    for(i in b){
        if(b[i]%2!==0){
        console.log(b[i]);
        }
    }
}
av(13,11,12);
// //IFFE
(function(...a){
  for(i in a){
    if(a[i]%2!==0){
    console.log(a[i]);
    }
}
    
})(3,4,5)

// // Arrorow function 
var arro = (...c)=>{   
    for(i in c){
        if(c[i]%2!==0){
        console.log(c[i]);
        }
    }
}
arro(13,11,12);
//2. String title to cap in a string array 

let str = function(...a){
   for (let i = 0; i < a.length; i++) {
    let b= "";
    for(let j=0;j<a[i].length;j++){
        if (j === 0) {
            b += a[i][j].toUpperCase(); 
        } else {
            b += a[i][j]; 
        }
        
    }
    console.log(b);
   }
  
}
// str("virat","dhoni","srh");
//2.b IIFE
(function(...b){
    for (let i = 0; i < b.length; i++) {
        let c= "";
        for(let j=0;j<b[i].length;j++){
            if (j === 0) {
                c += b[i][j].toUpperCase(); 
            } else {
                c += b[i][j]; 
            }
            
        }
        console.log(c);
       }
})("srh","car")
// // 3.Arrow function
const stra=["fitnees","hrx"];
let str1=(d)=>{
return d.split(' ').map(e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()).join(' ');
};
const f=stra.map(str1);
console.log(f);

//3 rd question:-Sum of all numbers in an array
const number =[1,3,4,5,6,9];
var su=function(arr){
    let sum=0;
for(let i=0;i<number.length;i++){
    sum+=number[i];
}
return sum;
}
console.log(su(number));
//2nd Method IIFE
(function(...a){
    const sum =a.reduce(function(acc,cv){
        return acc+cv;
    },0);
    console.log(sum);
})(2,3,45,56)

//3rd Method Arrow function 
const sumArray = (arr) => {
    let sum = 0;
    for(const num of arr) {
        sum += num;
    }
    return sum;
};

const numbers = [1, 3, 4, 5, 6];
const sum = sumArray(numbers);
console.log(sum); 

// //Return all the prime numbers in an array
const prime=[2,4,5,7,8,97,107];
var pm=function(num){
    if(num<=1)return false;
    if(num==2)return true;
        for(let i=2;i<=Math.sqrt(num);i++){
            if(num%i==0)
                return false;
            
                }
                return true;
    };
    const getPrimes = function(arr) {
        return arr.filter(pm);
    };

    const pr=getPrimes(prime);
    console.log(pr);

// //IIFE
const d = [3, 24, 5, 6, 7, 8, 11];

const primeNumbers = (function(arr) {
    const isPrime = function(num) {
        if (num <= 1) return false;
        if (num === 2) return true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    return arr.filter(isPrime);
})(d);

console.log(primeNumbers);
//2.Arrow Fnction

//Arrow function 
const d = [3, 24, 5, 6, 7, 8, 11];
const prime = (num) =>{
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const primenumbers = d.filter(prime);
console.log(primenumbers);
//Return all the palindromes in an array
//1.Anonymous function 
const ab=function(...pa){
    let palindromes = [];
    for (let i = 0; i < pa.length; i++) {
        let reversed = pa[i].split('').reverse().join('');
        if (pa[i] === reversed) {
            palindromes.push(pa[i]);
        }
    }
    return palindromes;
}

console.log(ab("tat","madam"));
// //2.IIFE code 
const palindrome = (function(arr) {
    function isPalindrome(str) {
        const reversed = str.split('').reverse().join('');
        return str === reversed;
    }

    return arr.filter(isPalindrome);
})(['racecar', 'hello', 'level', 'world', 'madam', 'test']);

console.log(palindrome); 
//3. Arrow function 
const palindromes = ((arr) => {
    const isPalindrome = (str) => str === str.split('').reverse().join('');
    return arr.filter(isPalindrome);
})(['racecar', 'hello', 'level', 'world', 'madam', 'test']);

console.log(palindromes); 
//Return median of two sorted arrays of the same size.
//1. Anonymous function
const median=function(...arr){
   const merge= arr.reduce((acc, arr) => acc.concat(arr), []);
    const mid=Math.floor(merge.length/2);
    return merge.length%2===0?(merge[mid-1]+merge[mid])/2 : merge[mid];

}
console.log(median([1,2,3],[2,3,4]));

//2.IIFE
 (function(arr) {
    const merge= arr.reduce((acc, arr) => acc.concat(arr), []);
    const mid=Math.floor(merge.length/2);
     console.log( merge.length%2===0?(merge[mid-1]+merge[mid])/2 : merge[mid]);
})(([1,2,3],[2,3,4]))
//Remove duplicates from an array
//1.Anonymous function
const acc=function(...a){
    return a.filter((item, index) => a.indexOf(item) === index);
}
console.log(acc(1,1,2,2,3,3,4,5,67));
//2.IIFE
const result=(function(...a){
    return a.filter((item, index) => a.indexOf(item) === index);
    
   
})(2,2,3,4,5,55,55,65,46,55)
console.log(result);
// Rotate an array by k times
//1.Anonymous function
const rot=function(a,k){
k=k%a.length;
if(k<0){
    k=arr.length+k;
}
a.unshift(...a.splice(-k));
return a;

}
let a =[1,3,4,5];
let k=3;
let tot=rot(a,k);
console.log(tot);
//2.IIFE Function
let rotatedArray = (function(arr, k) {
    k = k % arr.length;
    if (k < 0) {
        k = arr.length + k;
    }
    return arr.slice(-k).concat(arr.slice(0, arr.length - k));
})([1, 2, 3, 4, 5], 3);

console.log(rotatedArray);  // Output: [3, 4, 5, 1, 2]



