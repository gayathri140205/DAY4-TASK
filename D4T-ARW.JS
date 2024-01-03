QUESTION :1

let narr = [1, 2, 3, 4, 5, 6,7,8,9,10];

let odd1=narr.filter((x) => {

return x % 2 !== 0;
});
console.log(odd1);


QUESTION :2
let str2 = ["i", "have", "laptop"];
let strCaps = str2.map((item) => {
  return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
});
console.log( strCaps.join(' '));


QUESTION :3

var arr=[1,2,3,4,5,6,7,8,9,10];
const add=arr.reduce((a,b)=>a+b);
console.log([add]);

QUESTION :4

let prime1 = (arr) => {
  return arr.filter((n) => {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
    }
    }
      return n > 1;
    });
  };
  console.log(prime1([1,2,3,4,5,6,7,8,9,10]));

QUESTION :5

var arr =["gayathri", "is", "looking", "wow"];
arr = arr.filter((s)=>{
let len = s.length;
for (var i = 0; i<len / 2; i++) {
if (s[i] == s[len - i - 1]){
return true;
}
else{
return false;
}
}
});
console.log(arr);