//Mengurutkan angka

let angka = [3, 1, 2];

//1. Cara manual

if (angka[0] > angka[1]) {
  let temp = angka[0];
  angka[0] = angka[1];
  angka[1] = temp;
}

if (angka[1] > angka[2]) {
  let temp = angka[1];
  angka[1] = angka[2];
  angka[2] = temp;
}

if (angka[0] > angka[1]) {
  let temp = angka[0];
  angka[0] = angka[1];
  angka[1] = temp;
}
console.log(angka);


//2. Pakai method sort
angka.sort((a, b) => a - b);
console.log(angka); 

