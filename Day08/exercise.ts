let a = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 2", email: "student2@mail.com" },
  { name: "Student 4", email: "student1@mail.com" },
];
let b = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 2", email: "student2@mail.com" },
  { name: "Student 3", email: "student3@mail.com" },
  { name: "Student 4", email: "student4@mail.com" },
];

const mergeArr2 = (array1: any[], array2: any[]) => {
  let gabung = [...array1, ...array2];
  let temp = [];
  for (let i = 0; i < gabung.length; i++) {
    let check = temp.filter((val) => val.email == gabung[i].email);
    if (!check.length) {
      temp.push(gabung[i]);
    }
  }
  return temp;
};

console.log(mergeArr2(a, b));
