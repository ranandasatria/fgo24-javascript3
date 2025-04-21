const animal = "ayam,bebek,sapi,unta"
//chaining built-in method
let arr = animal.split(",")
arr[2] = "domba"
const gabung = arr.join(",")

console.log(gabung)
