function countNames(N,strings){
	//write your code here

let obj = {}
for(let i = 0; i < N; i++){
    if(obj[strings[i]] === undefined){
        obj[strings[i]] = 1
    } else {
        obj[strings[i]] += 1
    }
}
keys = Object.keys(obj),
keys.sort();

for (i = 0; i < keys.length; i++) {
  k = keys[i];
  console.log(k, obj[k]);
}


	  
	    
}
