groceries = ["apple", "pen", "pineapple", "bread", "fruit"];

groceries.push("hund");

// array methods:
// array.push and array.slice, array.indexOf(name of the element), array.length

// we define object by setting a variable equal to this brackets person = {}, then use the following methods:
// then you can access the different properties by typing person.name or person["age"]

// const person = {
//   name: "Filip",
//   age: "18",
//   weight: "76 kg",
// };

// console.log(person["age"]);

// person.phone = "077 942 25 53";

// console.log(person.phone);

// // es6 arrow function (2 arguments)
// const introducer = (name, age) => {
//   const person = {
//     name: name,
//     age: age,
//     assets: 100,
//     debt: 50,
//     netWorth: function () {
//       return this.assets - this.debt;
//     },
//   };
//   const intro = `Hi my name is ${
//     person.name
//   } and I am ${age} years old, and my net worth is ${person.netWorth()}`; // To be able to use a veriables value inside a string you have to use backlashes and not double or single quotes

//   return intro;
// };

// console.log(introducer("Filip", "18"));

const letterCounter = () => {
  const phrase = "hey, can you count how many letters are here";
  let num = 0;
  for (letter in phrase) {
    num += 1;
  }
  console.log(num);
};

letterCounter();
