let arr = [
    [1, 2],
    [3, 4],
    [5, 6],[7, 8, 9],
    [10, 11, 12, 13, 14, 15]
];

console.log([].concat(...arr))


//debouncing function

const debounce = (fn, delay) =>{
    let timer;
    return () => {
        if(timer) clearTimeout(timer);
timer = setTimeout(fn, delay)
    }
}
document.getElementById("mybutton").addEventListener('click', debounce(()=> console.log("clicked"), 1000))

let array = [1,2,3]
let result = array.map((el) =>  el*5)

console.log(result)