"use strict";

// // 1. Create a Personal Info Object
// // Task: Ask students to create an object called person that stores information like name, age, profession, and hobbies.
// // Additional Challenge: Include a method inside the object that prints out a sentence like "My name is John, and I am 25 years old."
// let person = {
//   name: "Afsana",
//   age: 25,
//   profession: "Frontend devoloper",
//   hobbies: ["to investigate", "reading a book", "play the game", "dance"],
//   fullname(){
//     alert(`My name is ${this.name}, and i am ${this.age} years old, my ${this.hobbies}`)
//   }
// };
// alert(person.fullname());

// // 2. Object Manipulation
// // Task: Create an object car with properties like make, model, year, and color. Then, ask them to:
// // Add a new property owner.
// // Change the color property.
// // Delete the year property.
// let car={
//     make: "Land Rover",
//     model: "Range Rover",
//     year: 2024,
//     color: "black",
// }
// car.theWay="100km"
// car.color="white"
// delete car.make
// console.log(car);

// // 3. Nested Objects
// // Task: Create an object school that contains information about the name of the school and another object address that stores street, city, and country details.
// // Additional Challenge: Ask them to create a method inside the school object that returns the full address as a string.
// let school = {
//   name: "2 nomreli tam orta mekteb",
//   adress: {
//     city: "Baku",
//     country: "Azerbaijan",
//     street: "Qara Qarayev",
//     fullAddress() {
//       return `, unvan:  ${this.country}, ${this.city} sheheri ${this.street} kuchesi`;
//     },
//   },
// };
// console.log(school.name, school.adress.fullAddress());

// // 4. Array of Objects
// // Task: Create an array of objects where each object represents a book with properties like title, author, and yearPublished. Then, ask the students to:
// // Loop through the array and print each book's title.
// // Add a new book to the array.
// let book1 = {
//   title: "Eli ve nino",
//   author: "Qurban Seid",
//   yearPublished: 1937,
// };

// let book2 = {
//   title: "secilmis eserler",
//   author: "Mirzə Fətəli Axundov",
//   yearPublished: 1850,
// };

// let book3 = {
//   title: "das yuxular",
//   author: "Əkrəm Əylisli",
//   yearPublished: 2012,
// };

// let arr = [book1, book2, book3];
// for (let item of arr) {
//   console.log(item.title);
// }

// let book4 = {
//   title: "gulustan",
//   author: "Məhəmməd Hüseyn Şəhriyar",
//   yearPublished: 1995,
// };

// arr.push(book4);

// // 5. Compare Two Objects
// // Task: Create two objects representing two different students with properties like name, grade, and age. Write a function to compare their grades and print who has the higher grade.

// let students1 = {
//   name: "Afsana",
//   grade: 100,
//   age: 25,
// };

// let students2 = {
//   name: "aysel",
//   grade: 70,
//   age: 27,
// };

// if (students1.grade > students2.grade) {
//   console.log(`${students1.name}nin qiymeti daha yuksekdir))`);
// } else if (students2.grade > students1.grade) {
//   console.log(`${students2.name}nin qiymeti daha yuksekdir))`);
// } else {
//   console.log(
//     `${students1.name}nin ve ${students2.name}nin qiymetleri beraberdir`
//   );
// }

// // 6. Object Destructuring
// // Task: Give students an object with several properties (e.g., a user object with properties like name, email, password, etc.) and ask them to use object destructuring to extract some of these properties and print them.
// let students = {
//   name: "Eli",
//   email: "alili@gmail.com",
//   password: 12345,
// };
// //let [name,email,password]=students, destructuring??
// for (let [key, value] of Object.entries(students)) {
//   console.log(`${key}:${value}`);
// }

// // 7. Object Methods
// // Task: Create an object called calculator with methods for add, subtract, multiply, and divide. Each method should accept two numbers as arguments and return the result.
// let calculator={
//      add(num1,num2){
//         return num1+num2
//      },
//      subtract(num1,num2){
//         return num1-num2
//      },
//      multiply: function(num1,num2){
//         return num1*num2
//      },
//      divide: function(num1,num2){
//         return num1/num2
//      }
// }
// console.log(calculator.add(10,5), calculator.subtract(10,5), calculator.multiply(10,5), calculator.divide(10,5));



