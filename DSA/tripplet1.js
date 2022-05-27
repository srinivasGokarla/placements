function triplet(arr,n){
    let res = [];
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr.length;j++){
            for(k=0;k<arr.length;k++){
                if(arr[i]+arr[j]+arr[k] === n){
                   
               res.push(arr[i])
               res.push(arr[j]) 
               res.push(arr[k])   
                    break;
                }
            }
        }
    }

if(res===[]){
    console.log(false)
}else{
    console.log(true)
    console.log(res[0],res[1],res[2])
}
}
function runProgram(input) {
   input = input.trim().split("\n");
   let size = +input[0];
   let arr = input[1].trim().split(" ").map(Number);
   let n = +input[2]

  triplet(arr,n)
    

    
}
 

   if (process.env.USERNAME === 'srini') {
     runProgram(`6
     12 3 4 1 6 9
     2`)
    } else {
     process.stdin.resume();
     process.stdin.setEncoding("ascii");
     let read = "";
     process.stdin.on("data", function (input) {
       read += input;
     });
     process.stdin.on("end", function () {
       read = read.replace(/\n$/, "");
       read = read.replace(/\n$/, "");
       runProgram(read);
     });
     process.on("SIGINT", function () {
       read = read.replace(/\n$/, "");
       runProgram(read);
       process.exit(0);
     });
   }