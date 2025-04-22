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
  
  wait("Jane", 500)
    .then(() => wait("John", 1500))
    .then(() => wait("Ed", 2000))
    .catch((error) => {
      console.log("Terjadi kesalahan:", error)
    })
