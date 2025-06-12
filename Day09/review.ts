/**
 * Kisi-kisi exam modul 01 :
- Introduction programming 
- Data type (Primitive, Non-primitive)
- var, let dan const
- Introduction TS
- Looping statement
- Interface and Object declaration
- function hoisting
- Encapsulation
- Data structure
- Big O Notation
 */

// Variable : penampung data

/**
 * Rumus penulisan variable ==> keywordVariable namaVariable = value;
 * keywordVariable : var, let, const
 * namaVariable : - Tidak boleh diawali dengan angka.
 *                - Boleh diawali simbol _ atau $
 *                - Jika terdiri dari lebih dari satu suku kata harus digabung dengan metode camelCase
 */

// Karakter keyword variable
// Keyword var : redeclare, reassign, global variable
// Redeclare
var nama: string = "Abdi";
var nama: string = "Edo";

// Reassign
nama = "Aldo";

// Keyword let : non-redeclare, reassign, block-scoped variable
// Non-redeclare
let usia: number = 20;
// let usia: number = 15;

// reassign
usia = 40;

// Contoh block-scoped variable
function introduce() {
  let usia: number = 15;
  return `Usiaku ${usia}`;
}

// keyword const : Non-redeclare, Non-reassign, constant variable
const PI = Math.PI;
const listAngka: number[] = [2, 3, 4, 5, 2, 6, 3, 4];
interface IHuman {
  nama: string;
  tglLahir: string;
  gender: "Pria" | "Wanita";
}
const human: IHuman = {
  nama: "Abdi",
  tglLahir: "2000-12-03",
  gender: "Pria",
};

// Looping statement :penulisan code yang ditujukan untuk mengulang eksekusi suatu code

/**
 * WHILE LOOP : perulangan program yang akan selalu dijalankan selama kondisi masih terpenuhi
 * Aturan penulisan :
 * while(condition){
 *      // code
 * }
 */

let count: number = 1;

while (count < 10) {
  console.log(`Loope ke-${count}`);
  count++;
}

while (true) {
  let random: number = Math.random();
  console.log(random);
  if (random < 0.25) {
    break;
  }
}

/**
 * DO...WHILE
 * Aturan penulisan :
 * do{
 *      // code
 * }while(condition)
 */

let counter: number = 1;
do {
  console.log(counter);
  counter++;
} while (counter < 10);

/**
 * FOR LOOP : digunakan ketika batas looping ditentukan sejak awal
 * Aturan penulisan :
 * for(counterDeclaration ; counter_condition ; counter){
 *      code
 * }
 */

for (let i: number = 1; i < 10; i++) {
  console.log(i);
}

// for...in : looping yang berkaitan dengan tipe data object
for (const property in human) {
  console.log(property);
  console.log(human[property]);
}

console.log(human.nama);
console.log(human["nama"]);

// for...of : looping yang berhubungan dengan akses value data array
const listProduct: string[] = ["Kopi", "Teh", "Es Jeruk"];
for (const value of listProduct) {
  console.log(value);
}
