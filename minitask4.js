// 1. Deteksi palindrom 

// a. Menggunakan built-in method

const inputText = "LevEl";
console.log(inputText.toLowerCase() === inputText.toLowerCase().split("").reverse().join("") ? "Palindrom" : "Bukan palindrom");

// b. Secara manual

function palindromeDetection (inputText1){
    let lowerText1 = inputText1.toLowerCase() 
    if(typeof lowerText1 !== "string")
        return console.log("Hanya bisa memasukkan huruf")   
    let reversed = ""
    for (i = 0; i < lowerText1.length; i++){
        reversed += lowerText1[lowerText1.length-1-i]
    }
    if (lowerText1 === reversed) 
        console.log("Palindrom")
    else 
        console.log("Bukan Palindrom")
}
palindromeDetection("LevEl")



// 2. Deteksi palindrom 

// a. Menggunakan built-in method

const kalimat0 = "Saya suka belajar JavaScript";
console.log(kalimat0.split(" ").reverse().join(" ")); 

// b. Secara manual

function reverseWords(text) {
    let kalimatTerbalik = ""; 
    let kataSementara = ""; 
    for (let i = text.length - 1; i >= 0; i--) {
        if (text[i] === " ") {
            kalimatTerbalik += kataSementara + " ";
            kataSementara = "";
        } else {
            kataSementara = text[i] + kataSementara;
        }
    }
    kalimatTerbalik += kataSementara;
    return kalimatTerbalik
}
const kalimat = "saya suka belajar JavaScript";
console.log(reverseWords(kalimat))