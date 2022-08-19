let arr = [
    [1, 2],
    [3, 4],
    [5, 6],[7, 8, 9],
    [10, 11, 12, 13, 14, 15]
];
let flat = [].concat.apply([], arr);
let flatArray = [].concat(...arr);
let flatArray1 = arr.reduce((acc, curVal) => {
    return acc.concat(curVal)
}, []);

console.log(flat,flatArray, flatArray1)