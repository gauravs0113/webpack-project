import './style/index.scss'

const obj = {
    a: 1,
    b: 2
}

const obj2 = {
    ...obj,
    c:3,
    b:4
}

console.log(obj)
console.log(obj2)