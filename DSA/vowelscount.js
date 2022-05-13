function runProgram(input) {
    input = input.trim().split("\n")
    var str = input[0].trim().split("")
    //console.log(str)
    var count = 0;
    
    for(var i = 0; i < str.length; i++) {
        var arr =[];
    for(var j = i; j < str.length; j++) {
       arr.push(str[j])
        var arr1 = arr.join("")
        vowelscheck(arr1);
        if(vowelscheck(arr1) == 1) {
            count++;
        }
    }
    }
    console.log(count++)
    }
    function vowelscheck(word) {
        var vow = ['a','i','o','u'];
        var count = 0;
        for(var i = 0; i < vow.length; i++) {
            for(var j = 0; j < word.length; j++) {
                if(vow[i] == word[j]) {
                    count++;
                    break;
                }
            }
        }
        if(count == 4) {
            return true;
        } else {
            return false;
        }
    }
    
    if (process.env.USERNAME === "srini") {
      runProgram(`dangerouscovid`);
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