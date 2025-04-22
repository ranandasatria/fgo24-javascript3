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
  
  wait("John", 1500)
    .then(() => wait("Ed", 2000))
    .then(() => wait("Jane", 500))
    .catch((error) => {
      console.log("Terjadi kesalahan:", error)
    }
)


// async function runQueue() {
//     await wait("Jane", 500);
//     await wait("John", 1500);
//     await wait("Ed", 2000);
//   }
  
//   runQueue();

// async function doingProcess(){
//     await wait("Jane", 500)
//     await wait("John", 1500)
//     await wait("Ed", 2000);
// }

// doingProcess()