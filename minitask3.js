const animal = "ayam,bebek,sapi,unta"

console.log(animal.split(",").with(2, "domba").join())
console.log(animal.split(",").toSpliced(2, 1, "domba").join())
console.log(animal.replace("sapi", "domba"))
