// question 1

let firstName;
let lastName;

// question 2
let firstName = "Kehinde";

// Question 3
let lastName = "Odetola";

console.log(lastName);

// Question 4

let boss = firstName + " " + lastName;

console.log(boss);

// Question 5
alert(firstName + " " + lastName);


// Question 6
let ourPlanet = "Earth";

console.log(ourPlanet);

// Question 7
let currentVisitor = "Moh";

console.log(currentVisitor);

// Question 8
const fruits = ['apples', 'oranges', 'pears', 'cashews', 'pawpaws', 'sugarcanes', 'pineapples', 'mangos', 'grapes','strawberries', 'tangerines', 'kola', 'limes', 'melons', 'Avocados', 'cherries', 'Apricots', 'plums', 'lemons', 'peach']

console.log(fruits);

// Question 9
console.log(fruits[5],fruits[10],fruits[15],fruits[19]);

// Question 10
const dog = {
    name: 'Ridgeback',
    gender: 'female',
    color: 'white',
    strenght: 'friendly'
}

console.log(dog);

// Question 11
const animals =[
    {
       name: 'Clara',
       gender: 'female',
       breed: 'German Pinscher',
       weight: '10pounds'
        
    },
    {
        name: 'Byon',
        gender: 'male',
        breed: 'Pekapoo',
        weight: '25pounds'
         
     },
     {
        name: 'Cole',
        gender: 'male',
        breed: 'Texas Heeler',
        weight: '30pounds'
         
     },
     {
        name: 'Bale',
        gender: 'male',
        breed: 'Beagle-Harrier',
        weight: '35pounds'
         
     },
     {
        name: 'Ryan',
        gender: 'female',
        breed: 'pug',
        weight: '10pounds'
         
     },
     {
        name: 'Bill',
        gender: 'female',
        breed: 'Phalene',
        weight: '50pounds'
         
     },
     {
        name: 'Leo',
        gender: 'male',
        breed: 'Askal',
        weight: '45pounds'
         
     },
     {
        name: 'Fane',
        gender: 'female',
        breed: 'Azawakh',
        weight: '60pounds'
         
     }
];

console.log(animals[2].name, animals[3].breed, animals[4].weight, animals[5].gender, animals[7].name );

console.log(animals[5].name);

// Question 12
let ptpAmount = 45000

if(ptpAmount === 45000) {
console.log('ptpAmount is 45000');
} else if(ptpAmount < 30000) {
    console.log('ptpAmount is less than 30000')
}

const ptpAmount = 11000
if (ptpAmount < 10000) {
    console.log("ptp amount can not be less than 10000")
} else 
    console.log("ptp amount submitted sucessfully")
}