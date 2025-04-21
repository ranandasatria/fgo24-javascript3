//Mengurutkan angka

let angka = [5, 3, 8, 1];

//1. Cara manual
for (let i = 0; i < angka.length; i++) {
  for (let j = 0; j < angka.length - 1; j++) {
    if (angka[j] > angka[j + 1]) {
      let sementara = angka[j];
      angka[j] = angka[j + 1];
      angka[j + 1] = sementara;
    }
  }
}
console.log(angka); 

//2. Pakai method sort
angka.sort((a, b) => a - b);
console.log(angka); 

