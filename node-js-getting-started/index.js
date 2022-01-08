const userName = 'Adam';
let age = 25;
const hasHobbies = true;

age = 30;

const summarizeUser = (userName, userAge, userHasHobby) => {
    return "Name is " + userName + ' age is ' + userAge + ' and user has hobbies: ' + userHasHobby
}

//const add = (a,b) => a + b;
const addOne = a => a + 1;


console.log(addOne(1));

console.log(summarizeUser(userName, age, hasHobbies));

const person = {
    name: "Adam",
    age: 25,
    greet() {
        console.log("Hi, I am " + this.name);
    }
};

const hobbies = ['Sports', 'Cooking'];
for (let hobby of hobbies) {
    //console.log(hobby);
}

console.log(hobbies.map(hobby =>  "Hobby: " + hobby));
console.log(hobbies);