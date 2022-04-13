
function runProgram(input){
    input = input.split("\n");
    let str1 = input[0];
    let str2 = input[1];
    let res1 = "";
    for(let i = 0; i < str1.length; i++){
        if(str1[i] == " "){
            continue;
        } else {
            res1 = res1 + str1[i];
        }
    }
    let res2 = "";
    for(let i = 0; i < str2.length; i++){
        if(str2[i] == " "){
            continue;
        } else {
            res2  = res2 + str2[i];
        }
    }
   console.log(AnagramDetective(res1,res2));
   
}

function AnagramDetective(res1,res2){
    if(res1.length !== res2.length){
        return "False";
    }
    let string1 = res1.split("").sort().join("");
    let string2 = res2.split("").sort().join("");
   
    if(string1 === string2){
        return "True";
    }
    return "False";
}

if (process.env.USERNAME === "srini") {
    runProgram(`anagram
    nag a ram`);
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