QUESTION:1

var odd = function (num){
   let final =[];
  for(let i = 0; i<num.length; i++){
      if(num[i]%2==1){
        final.push(num[i]);
        
      }
  } 
console.log(final);   
};

var num =[1,2,3,4,5,6,7,8,9,10]
odd(num);

QUESTION :2

let title = function (str) {
	
	for (var i = 0; i < str.length; i++) {
        str[i] = str[i].toLowerCase();
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
	console.log(str.join(' '));
}

var str = ['hi','hello.'];

title(str);

QUESTION:3

let add = function (n){
    let sum = 0;
    for(let i = 0; i<n.length; i++){
        sum+=n[i];
    }
    console.log(sum);
};

var n= [1,2,3,4,5,6,7,8,9,10];
add(n);


QUESTION:4

var prime=function(a){
  var  pri=[];
    for(i=0;i<a.length;i++)
    {
     var count=0;
       for(j=1;j<=a[i];j++)
    {
     if(a[i]%j===0)
        {
        count++;
        }
        }
        if(count==2)
        {
        pri.push(a[i]);
        }
    }
console.log(pri);
};
prime([1,2,3,4,5,6,7,8,9,11]);

QUESTION:5

let palindrome = function(arr){
    var N=arr.length;
    var out =[];
    for(let i=0;i<arr.length;i++){
        let final = arr[i];
        let str = final.split('').reverse().join('');
        if(str==arr[i])
       out.push(arr[i]);
        }
     console.log(out);
   
};
var arr =["gayathri", "is", "looking ", "wow", "at","noon"];

palindrome(arr);

QUESTION:6

let median = function (arr1,arr2){
    let arr = [...arr1, ...arr2];
    arr.sort((a,b) => a-b);
    let len = arr.length;
   if(len%2!==0){
     let ans = arr[r(len/2)-1];
     let final = ans;
}else{

 ans = arr[Math.round(len/2)-1]+arr[Math.round(len/2)];
 final = ans;

}
console.log(final);
};
var arr1 = [3,2,1,4,5];
var arr2 = [8,6,7,4,10];
median(arr1,arr2);


QUESTION:7

var dup=function(arr){
    var A = {};
   for(let i = 0; i < arr.length; i++) {
       if(A[arr[i]]) {
         A[arr[i]] = A[arr[i]] + 1;
       } else {
         A[arr[i]] = 1;
       }
    }
    let final = [];
     for(let x in A) {
     if(A[x] === 1) {
       final.push(x);
     }
   }
 console.log(final); 
    };
   dup([1,12,11,3,4,5,12]);
