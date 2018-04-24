//1
const helloWorld = (h = "Hello", w = "World") => console.log(`${h} ${w}`);

//2
const multiplayer = (a = 1, b = 1) => {
    return a * b
};

//3-4
const average = (...args) => args.reduce((a, b) => a + b, 0) / args.length;

//5
let n = [1, 4, 'Iwona', false, 'Nowak'];
let [, , first, , last] = n;
console.log(first, last);