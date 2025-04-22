//Buat program antrian dengan memanfaatkan promise dan setTimeout
//Tampilkan nama "John" setelah 1500ms
//Tampilkan nama "Ed" setelah 2000ms
//Tampilkan nama "Jane" setelah 500ms
//Gunakan sintaks chaining then-catch


function wait(name, delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(name)
        resolve()
      }, delay)
    })
  }
  
  // Menggunakan wait-then
//   wait("John", 1500)
//     .then(() => wait("Ed", 2000))
//     .then(() => wait("Jane", 500))
//     .catch((error) => {
//       console.log("Terjadi kesalahan:", error)
//     }
// )

// Menggunakan async-await
async function doingProcess(){
    try{
    await wait("John", 1500)
    await wait("Ed", 2000)
    await wait("Jane", 500)
    }catch(error){
        console.log(error)
    }
}
doingProcess()






// contoh sintaks
// function wait(greet){
//     return new Promise ((resolve, reject)=>{
//     if(greet === "Selamat siang"){
//         reject("gagal")
//     }else{
//         setTimeout(()=>{
//             resolve("berhasil")
//         },1000)
//     }
//     })
// }
