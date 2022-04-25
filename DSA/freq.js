function compare(p1, p2)
{
    if(p1[1] == p2[1]) //if frequency is equal
    {
        return p1[0] - p2[0]; //return the smaller value
    }
    return p2[1] - p1[1]; //return the element with greater frequency
}
 
// driver code
let arr = [4,4,5,6,4,2,2,8,5];
let n = arr.length;
let m = new Map();
let res = []
for(let i = 0; i < n; i++)
{
    if(m.has(arr[i])){
        m.set(arr[i], m.get(arr[i]) + 1);
    }
    else m.set(arr[i],1);
}
let a = [];
for(let [x,y] of m)
{
    a.push([x,y]); //making pair of element and it's frequency
}
a.sort(compare);
let ans = [];
for(let x of a){
    while(x[1]--){
        ans.push(x[0]);
    }
}
for(let x of ans)
{
  res.push(x)
}
console.log(res)