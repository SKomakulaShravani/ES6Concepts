const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping);//creating Array
//array with mixed data types
const sequence = [1, 1, 2, 3, 5, 8, 13];
const random = ["tree", 795, [0, 1, 2]];
//finding lenth of array
const shopping1 = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping1.length); // 5
//Accessing array items
const shopping2 = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping2[0]);// returns "bread"
//modifying an array items
const shopping3 = ["bread", "milk", "cheese", "hummus", "noodles"];
shopping3[0] = "tahini";
console.log(shopping3);// shopping will now return [ "tahini", "milk", "cheese", "hummus", "noodles" ]
//multi dimentional array
const random1 = ["tree", 795, [0, 1, 2]];
random1[2][2];
//Finding the index of items in an array
const birds = ["Parrot", "Falcon", "Owl"];
console.log(birds.indexOf("Owl")); //  2
console.log(birds.indexOf("Rabbit")); // -1
//push: adding items
const cities = ["hyderabad", "uppal"];
cities.push("kondapur");
console.log(cities); // [ "hyderabad", "uppal", "kondapur" ]
cities.push("jbs", "secunderabad");
console.log(cities); // [ "hyderabad", "uppal", "kondapur", "jbs", "secunderabad" ]

//To add an item to the start of the array, use unshift():
const cities1 = ["hyderabad", "uppal"];
cities1.unshift("ameerpet");
console.log(cities1); // [ "ameerpet", "hyderabad", "uppal" ]
//To remove the last item from the array, use pop().
const cities2 = ["hyderabad", "uppal"];
cities2.pop();
console.log(cities2); // [ "hyderabad" ]
//To remove the first item from an array, use shift():
const cities3 = ["hyderabad", "uppal"];
cities3.shift();
console.log(cities3); // [ "uppal" ]

//If we  know the index of an item, you can remove it from the array using splice():

const cities4 = ["hyderabad", "uppal", "kondapur", "ameerpet"];
const index = cities4.indexOf("uppal");
if (index !== -1) {
  cities4.splice(index, 1);
}
console.log(cities4); // [ "hyderabad", "kondapur", "ameerpet" ]

//Very often we will want to access every item in the array. we can do this using the for...of statement:
const birds1 = ["Parrot", "Falcon", "Owl"];

for (const bird of birds1) {
  console.log(bird);
}







