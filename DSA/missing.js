function runProgram(input) {
   let arr = input.trim().split(" ").map(Number)
   //console.log(arr)
   missing(arr) 
}
   function missing(arr) {
    var out = 0
    for(var i = 0; i<arr.length-1; i++){
        if(arr[i]+1 != arr[i+1]){
           out = arr[i]+1
        }
    
   
   }
   console.log(out)
  }
     
  


  }
  
