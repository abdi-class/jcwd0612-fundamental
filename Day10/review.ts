// Callback function : - sebuah fungsi yang dijalankan didalam fungsi lain dan dimasukkan melalui parameter

/**
 * Aturan penulisan :
 *
 * function mainFunction(callbackFn){
 *      // code
 *      callbackFn();
 * }
 * - callbackFn : parameter yang harus diisi dengan function
 */

function mainFunction(callbackFn) {
  console.log(callbackFn());
}

mainFunction(function () {
  return "Hello";
});

function printCalculation(cb) {
  let angkaA: number = 20;
  let angkaB: number = 10;

  return `Hasil perhitungan adalah ${cb(angkaA, angkaB)}`;
}

const calculate: string = printCalculation(function (
  angkaA: number,
  angkaB: number
) {
  return angkaA * angkaB;
});

console.log(calculate);

const dataArr: any[] = [1, 2, 3, 2, 4, 6, 4, 3, 2, 7, 8, 9];

// array.forEach(cbfn) : untuk mengakses isi dan index dari tiap data array
dataArr.forEach((value: number, index: number) => {
  console.log(value);
});

// array.map(cbfn) : untuk merubah seluruh data array dan dijadikan data array baru
const newDataArr: number[] = dataArr.map((value: number) => {
  return value * 2;
});

console.log(newDataArr);

// array.filter(cbfn) : untuk mencari data sesuai acuan filter dan menampungnya kedalam array baru
const filterArr: number[] = dataArr.filter((value: number) => {
  return value % 2 !== 0;
});

console.log(filterArr);

// Object : tipe data yang dapat menampung tipe data lain dan tiap data ditampung kedalam property

/**
 * Aturan penulisan :
 * Cara 1 :
 * const object ={
 *      namaProperty : value,
 *      name:"Edi",
 *      usia:18,
 *      isActive: true,
 *      grade : ["A", "B", "C"],
 *      getInfo:function(){
 *              // code
 *      }
 * }
 *
 * Cara 2
 * const object = new Object();
 * object.name = "Edi";
 * object.usia = 15;
 *
 *
 * Cara 3
 * class MyObj{
 *      constructor(name, usia){
 *          this.name = name;
 *          this.usia = usia;
 *      }
 * }
 */

interface IHumanB {
  name: string;
  age: number;
  gender: "Male" | "Female";
  isLive: boolean;
}

// Cara 1
const dataHuman: IHumanB = {
  name: "Edi",
  age: 17,
  gender: "Male",
  isLive: true,
};

// Cara 2
const dataHumanB: any = new Object();
dataHumanB.name = "Edo";
dataHumanB.age = 17;
dataHumanB.gender = "Male";
dataHumanB.isLive = true;

// Cara 3
class Human {
  name: string;
  age: number;
  gender: "Male" | "Female";
  isLive: boolean = true;
  private religion: string = "Islam"; // Encapsulation : menyembunyikan property

  constructor(_name: string, _age: number, _gender: "Male" | "Female") {
    this.name = _name;
    this.age = _age;
    this.gender = _gender;
  }
}

const data: Human = new Human("Aldi", 20, "Male"); // instance
console.log(data.name);
console.log(data["age"]);
console.log(data);

// Inheritance : pewarisan data dari class utama. supaya class turunan memiliki property dari class utama
class Employee extends Human {
  position: string;
  salary: number;

  constructor(
    _name: string,
    _age: number,
    _gender: "Male" | "Female",
    position: string,
    salary: number
  ) {
    super(_name, _age, _gender);
    this.position = position;
    this.salary = salary;
  }
}

const employee1: Employee = new Employee(
  "Irfan",
  15,
  "Male",
  "Front-end",
  5000000
);

console.log(employee1);

// Destructure : mengeluarkan nilai dari property object menjadi variable yang beridiri sendiri
const { age: umur, isLive, gender } = employee1;
console.log(umur);
console.log(gender);
