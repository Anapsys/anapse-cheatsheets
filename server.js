// server.js or app.js etc should be the functionality of your application.

// VARIABLES, DECLARATIONS, ASSIGNMENTS
globalScopeVar = 0;
const PI = 3.1415;
var unassignedValue;
var reassignedValue = "var will re-initialize the value...";
var reassignedValue = "...each time you declare it.";
    // strings
    let stringExample = '<a href="127.0.0.1">"Mix and match quote styles \'yo!"</a>';
    let advancedStringExample = `A formatted type with extra behavior. Displays value of Pi as ${PI}`;
    let stringsAreImmutable = "Jello World";
    stringsAreImmutable[0] = "H"; //does not work!

    // data structures
    let arrayAnimals = ['cat', 'dog', 'ferret'];
    const BEST_ANIMAL = arrayAnimals[2];
    arrayAnimals.push('pine marten');
    let takenAnimal = arrayAnimals.pop(); //removes and returns
        //shift() -> removes first element, unshift() -> pushes to beginning, push() -> push to end, pop() -> remove from end
    let numberTotalAnimals = arrayAnimals.length; //length here is a property, not a function
    let firstAnimal = arrayAnimals[0];
    let objectPerson = {name: "Derek", 
                        age: 13, 
                        job: 'Hobgoblin knob slobberer',
                        "multitoken property name": "why is this a f e a t u r e"};
        let ageValue = objectPerson.age;
        let dumbValue = objectPerson["multitoken property name"]; //spaces mean you must use bracket notation
        delete objectPerson.job;

    //functions
    function myFunc(param1, param2) {
        //this kind of declaration is used for 
        return param1 + param2;
    };
    const myCallback = (req, res) => { //arrow notation
        //this kind of decalaration is used for... actually this seems kinda dumb
        //used for declaring a limited function, for instance, within an argument
    };

// FUNCTION CALLS
myFunc(PI, PI);
let randNum = Math.floor( Math.random()*11 ); //THIS RETURNS BETWEEN 0-10, random() can never quite reach 1
let min = 0; let max = 10;
let randRange = Math.floor( Math.random() * (max-min+1)) + min;
let parsedSeven = parseInt("007"); //this is done automatically in a lot of contexts. the argument defines the base-value of the number system expected.
    // THE CONSOLE
    console.log(advancedStringExample);
    console.info("You are now watching the Disney Channel!");
    console.error("You are now watching the History Channel!");
    console.time('label'); Math.random(); console.timeEnd('label');

// CONDITIONS
let laxConditionTrue = (3 == 3.0);
    console.log(laxConditionTrue);
let strictConditionFalse = ('3' === 3.0);
    console.log(strictConditionFalse);
let strictConditionTrue = ('3' !== 3);
let comparisonAnd = laxConditionTrue && strictConditionFalse;
let comparisonOr = laxConditionTrue || strictConditionFalse;
switch(PI) {
    case 3.1415: console.log("All is well"); break;
    default: console.error("REality hAs fallen apArt..."); break;
}
console.log( 3 < 4 ? "Of course it is" : "Numbers has finally broken" );

// PRACTICAL EXAMPLES
    // RECURSIVE BINARY SEARCH
    function findMe(arr, value, start = 0, end = arr.length) {
        if (start > end) {
            return "not found";
        }
        let middle = Math.floor((start+end)/2);
        let found = arr[middle];

        if (found == value) {
            return middle;
        }

        if (found > value) {
            return findMe(arr, value, start, middle-1);
        }

        if (found < value) {
            return findMe(arr, value, middle+1, end);
        }
    }
    console.time('binary');
    console.log("Binary search: "+ findMe([1,1,1,1,1,1,1,2,3,6,8,9],3));
    console.timeEnd('binary');