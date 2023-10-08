// Contoh penggunaan if-else dan nested if:
let nilai = 85;

if (nilai >= 90) {
  console.log("Anda mendapatkan nilai A");
} else if (nilai >= 80) {
  console.log("Anda mendapatkan nilai B");
} else if (nilai >= 70) {
  console.log("Anda mendapatkan nilai C");
} else {
  console.log("Anda mendapatkan nilai D");
}

// Contoh penggunaan switch case
let hari = "Rabu";

switch (hari) {
  case "Senin":
    console.log("Hari ini adalah Senin");
    break;
  case "Selasa":
    console.log("Hari ini adalah Selasa");
    break;
  case "Rabu":
    console.log("Hari ini adalah Rabu");
    break;
  default:
    console.log("Hari ini adalah hari lainnya");
}

// Contoh penggunaan for statement
for (let i = 1; i <= 5; i++) {
  console.log("Iterasi ke-" + i);
}

// Contoh penggunaan while
let angka = 1;

while (angka <= 5) {
  console.log("Angka: " + angka);
  angka++;
}

// Contoh penggunaan do-while
let counter = 1;

do {
  console.log("Counter: " + counter);
  counter++;
} while (counter <= 5);

// Contoh penggunaan function
function tambah(a, b) {
  return a + b;
}

let hasilPenambahan = tambah(3, 5);
console.log("Hasil penambahan: " + hasilPenambahan);
