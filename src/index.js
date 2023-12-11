import { styleBody, addTitle, contact } from "./dom";
// import dataDefaultValues from "./data"; // import default export, name it whatever you want
import users, { getPremiumUsers } from "./data"; // keep the name of the default export just for clarity

console.log("Index File");
addTitle("Hello, World from Index File");
// styleBody();
// console.log(contact);
// console.log(users);

const premiumUsers = getPremiumUsers(users);

console.log(premiumUsers);

// const greet = (name) => {
//   return `Hello ${name}`;
// };

// console.log(greet("Cezar"));
// console.log(greet("Zoe"));
// // console.log(greet("Mario"));