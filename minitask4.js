//1. Deteksi palindrom pakai built-in method

const inputText = "LevEl";
console.log(inputText.toLowerCase() === inputText.toLowerCase().split("").reverse().join("") ? "Palindrom" : "Bukan palindrom");

//2. Deteksi palindrom pakai built-in method

const kalimat = "saya suka belajar JavaScript";
console.log(kalimat.split(" ").reverse().join(" ")); 
