// Data Types

// There are two types of data type
// 1 Primitive DataType => String, Number, Boolean, Undefined, Null, BigInt, Symbol
// 2 Non-Primitive DataTtpe => are created usign primitive datatype - Object

//  Object = {
// key:value,
// key:value,
// key:value,
// }

let student = {
  name: "Shashank",
  age: 21,
  City: "Bhopal",
};

let student2 = {
  name: "Shobhit",
  city: "Bhopal",
  age: 21,
};

// console.log(student2.name);
console.log(typeof student2);

console.log(
  student2.name +
    " is of age " +
    student2.age +
    " and is living in " +
    student2.city +
    ".",
);
