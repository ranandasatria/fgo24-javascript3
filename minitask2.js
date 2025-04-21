//20 built-in method

// For Array

// 1. pop() - Menghapus elemen terakhir dari array
let angka1 = [1, 2, 3, 4, 5, 6]
angka1.pop()
console.log(angka1) 

// 2. shift() - Menghapus elemen pertama dari array
let angka2 = [1, 2, 3, 4, 5, 6]
angka2.shift()
console.log(angka2) 

// 3. unshift() - Menambah elemen pertama dari array
let angka3 = [1, 2, 3, 4, 5, 6]
angka3.unshift(0)
console.log(angka3)

// 4. slice -  Mengambil sebagian array tanpa mengubah aslinya
let angka4 = [1, 2, 3, 4, 5, 6]
let potong = angka4.slice(1, 3) 
console.log(potong)

// 5. splice() - Menyisipkan/menghapus/mengganti elemen di array
let buah = ["apel", "pisang", "jeruk"]
buah.splice(1, 1, "mangga")
console.log(buah) 

// 6. concat() - Menggabungkan dua array
let angka6 = [1, 2, 3, 4, 5, 6]
let huruf6 = ["a", "b", "c", "d", "e"]
let gabung = angka6.concat(huruf6);
console.log(gabung) 

// 7. join() - Mengubah array jadi string
let buah7 = ["apel", "pisang", "jeruk"]
const buah7string = buah7.join(", ")
console.log(buah7string) 

// 8. includes() - Mengecek apakah array mengandung elemen tertentu. Hasil dalam bentuk true or false
const hewan = ["Ayam", "Kambing", "Kerbau"]
console.log(hewan.includes("Ayam"))
console.log(hewan.includes("Bebek"))


// 9.  indexOf() - Mencari posisi index dari elemen tertentu
const buah9 = ["jeruk", "anggur", "mangga"]
let indexJeruk = buah9.indexOf("anggur"); 
console.log(indexJeruk) 

// 10. map() - Mengembalikan array baru berisi elemen yang dikembalikan oleh fungsi callback
const numberBefore = [1, 2, 3, 4, 5]
const numberAfter = numberBefore.map((number)=> number * 2);
console.log(numberAfter) 

// For String

// 11. concat() - Menggabungkan dua atau lebih string menjadi string baru yang lebih panjang
const str1 = "Saya suka"
const str2 = " mendengar lagu"
const str12= str1.concat(str2)
console.log(str12) 
//Secara langsung tanpa buat string baru:
console.log(str1.concat(" membaca buku dan", str2)); 

// 12. repeat() - Mengembalikan atau mengulang string sesuai angka yang dimasukkan
const ketawa = "wk"
console.log(`Lucu ${ketawa.repeat(3)}`)

// 13. replace() - Mengganti sebuah string dengan string baru
const strReplace = "Saya suka mendenger lagu"
console.log(strReplace.replaceAll("mendengar lagu", "membaca buku"))

// 14. replaceAll() - Mengganti semua string yang dipilih dengan string baru
const strReplaceAll = "Saya suka mendengar lagu"
console.log(strReplaceAll.replaceAll("a", "o"))

// 15. split() - Mengubah string menjadi array
const splitKata = "Mendengar"
console.log(splitKata.split(""))

const splitKalimat = "Saya suka mendengar lagu"
console.log(splitKalimat.split(" "))

//16. toLowerCase() - Mengubah string menjadi huruf kecil
const hurufKecil = "SAYA SUKA MENDENGAR LAGU"
console.log(hurufKecil.toLowerCase())

//17. trim() - Menghapus whitespace atau spasi di awal dan akhir string
const trimKalimat = "   Saya suka mendengar lagu   "
console.log(trimKalimat.trim())

//18. startsWith() - Menentukan apakah suatu string dimulai oleh karakter yang diperiksa. Hasil dalam bentuk boolean
const mulaiDari = "Saya suka mendengar lagu"
console.log(mulaiDari.startsWith("Saya")) 

//19. endsWith() - Menentukan apakah suatu string diakhiri oleh karakter yang diperiksa. Hasil dalam bentuk boolean
const diakhiriDengan = "Saya suka mendengar lagu"
console.log(diakhiriDengan.endsWith("lagu"))

//20. toUpperCase() - Mengubah string menjadi huruf besar
const hurufBesar = "saya suka mendengar lagu"
console.log(hurufBesar.toUpperCase())