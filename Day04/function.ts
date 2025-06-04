// Function
/**
 * Definisi : Sekumpulan program yang disatukan untuk mengerjakan proses khusus yang biasanya bersifat reusable.
 * Kategori : Built-in function dan User-defined function
 * Aturan penulisan :
 *  - Penamaan function mengikuti aturan nama variable
 *  - Bisa menerima parameter/argumen : penampung dari function, untuk menerima nilai dari luar function
 *  - Function biasanya menghasilkan nilai output melalui keyword return didalamnya
 *  - Opsi penulisan bisa menggunakan Declarative Func, Function Expression atau Arrow Function
 */

// Contoh tanpa function
// INPUT : dua variable yang menampung data untuk dijumlahkan
let angkaA: number = 10;
let angkaB: number = 13;
// PROCESS : memproses penjumlahan kedua variable
const hasil: number = angkaA + angkaB;
// OUTPUT : menampilkan hasil penjumlahan
console.log(hasil);

// Buat kode diatas menjadi Declarative Function
/**
 * Declarative func :
 * function namaFunc(param1, param2,...){
 *      // code
 * }
 */
// Membuat function
function penjumlahan() {
  let angkaA: number = 2;
  let angkaB: number = 5;

  const hasil: number = angkaA + angkaB;

  return hasil;
}

let printPenjumlahan = penjumlahan();
console.log(printPenjumlahan);

console.log(penjumlahan());
console.log(penjumlahan());
console.log(penjumlahan());

// Function with parameter for reusable
function pengurangan(angkaA: number, angkaB: number) {
  const hasil: number = angkaA - angkaB;
  return hasil;
}

console.log(pengurangan(10, 20));
console.log(pengurangan(8, 5));
console.log(pengurangan(18, 5));
