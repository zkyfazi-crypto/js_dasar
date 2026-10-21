console.log("Hello, World!");
document.write("Belajar JavaScript");

//variable
var namaDepan = "Muhammad";
var namaBelakang = "Fachrurozi";
var umur = 19;
var tinggiBadan = 168.5;


//data diri
const nim = "2025010029";
const nama = "Muhammad Zakya Fachrurozi";
const prodi = "RPL";
const angkatan = 2025;
console.log("NIM: " + nim);
console.log("Nama: " + nama);
console.log("Prodi: " + prodi);
console.log("angkatan: " + angkatan);

//prioritas oprasi
const hasil = 10 + 5 * 2;
console.log("Hasil: " + hasil);

//console.log(hasil);
const nilai = 90;

if (nilai >= 90) {
    console.log("Grade: A");
} else if (nilai >= 80) {
    console.log("Grade: B");
} else if (nilai >= 70) {
    console.log("Grade: C");
} else if (nilai >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: E");
}

//number string
const a = 10;
const b = 20;
console.log("a + b = " + (a + b));
console.log("a - b = " + (a - b));
console.log("a x b = " + (a * b));
console.log("a : b = " + (a / b));
console.log("a % b = " + (a % b));

//perbandingan
console.log(10 > 20);
console.log(10 < 20);
console.log(10 >= 20);
console.log(10 <= 20);
console.log(10 == 20);
console.log(10 === 20);

//operator logika
console.log(true && true);
console.log(true || false);
console.log(!false);