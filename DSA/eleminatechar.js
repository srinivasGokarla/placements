var arr = ["123f", "1dsa12", "1212ds", "65fd", "sadfa", "asdasd"]
var out = []
for(var i=0; i<arr.length; i++){
    parseNum = str => +str.replace(/[^.\d]/g, '');
    out.push(parseNum(arr[i]))
}
var sum = 0;
for(var i=0; i<out.length; i++){
    sum += +out[i]
}
console.log(sum)