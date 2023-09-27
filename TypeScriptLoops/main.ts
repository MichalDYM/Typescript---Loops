// Output "Hello World" to the console
console.log('Hello World');

// Define an interface named "Person" to describe the structure of a person object
interface Person {
  id: number;
  name: string;
  birthdate: string;
  children: number;
  country: string;
  can_program: boolean;
  can_playhockey: boolean;
}

// Create an array of "Person" objects
const people: Person[] = [
  // Sample person objects with various properties
  {"id":1,"name":"Carolin Margarson","birthdate":"4/15/1999","children":2,"country":"China","can_program":true,"can_playhockey":true},
  {"id":2,"name":"Jan Vomáčka","birthdate":"2/8/2004","children":2,"country":"Czech Republic","can_program":true,"can_playhockey":true},
  {"id":3,"name":"Gregoire Morrilly","birthdate":"6/6/1979","children":2,"country":"China","can_program":false,"can_playhockey":false},
  {"id":4,"name":"Leonelle Coutts","birthdate":"1/31/1982","children":4,"country":"Indonesia","can_program":true,"can_playhockey":true},
  {"id":5,"name":"Isac Roxburgh","birthdate":"7/9/1982","children":3,"country":"Poland","can_program":false,"can_playhockey":true},
  {"id":6,"name":"Silvano Wogdon","birthdate":"9/5/1961","children":0,"country":"Philippines","can_program":false,"can_playhockey":false},
  {"id":7,"name":"Mavis Freezer","birthdate":"12/25/1982","children":2,"country":"Poland","can_program":false,"can_playhockey":true},
  {"id":8,"name":"Jermayne McGreil","birthdate":"6/15/1975","children":1,"country":"China","can_program":true,"can_playhockey":true},
  {"id":9,"name":"Jazmin Cavie","birthdate":"9/9/1962","children":3,"country":"China","can_program":false,"can_playhockey":true},
  {"id":10,"name":"Leo Macrow","birthdate":"2/24/1965","children":0,"country":"Brazil","can_program":true,"can_playhockey":false}
];

// Initialize a variable "totalChildren" with the value 0
let totalChildren = 0;

// Loop through each "person" in the "people" array and add their "children" property to "totalChildren"
for (const person of people){
  totalChildren += person.children;
}

// Output the total number of children
console.log(`Total children: ${totalChildren}`);

// Loop through each "person" in the "people" array and print their information
for (const person of people) {
  console.log(`name: ${person.name}\nBirth Date: ${person.birthdate}\nChildren: ${person.children}\nCountry: ${person.country}\nCan program: ${person.can_program ? 'Yes' : 'No'}\nCan play hockey: ${person.can_playhockey ? 'Yes' : 'No'}\n`);
}
