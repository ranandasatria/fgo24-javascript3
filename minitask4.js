// 1. Deteksi palindrom 
// a. Menggunakan built-in method

// const inputText = "LevEl";
// console.log(inputText.toLowerCase() === inputText.toLowerCase().split("").reverse().join("") ? "Palindrom" : "Bukan palindrom");

// b. Secara manual

function palindromeDetection (word){
    //belum ubah huruf besar kecil
    if(typeof word !== "string")
        return console.log("Hanya bisa memasukkan huruf")   
    let reversed = ""
    for (i = 0; i < word.length; i++){
        reversed += word[word.length-1-i]
    }
    
    if (word === reversed) 
        console.log("Palindrom")
    else 
        console.log("Bukan Palindrom")
}

palindromeDetection("level")



// 2. Deteksi palindrom pakai built-in method

// const kalimat = "saya suka belajar JavaScript";
// console.log(kalimat.split(" ").reverse().join(" ")); 

