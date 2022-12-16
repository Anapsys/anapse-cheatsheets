// server.js or app.js etc should be the functionality of your application.

// VARIABLES, DECLARATIONS, ASSIGNMENTS
globalScopeVar = 0;
const PI = 3.1415;
var unassignedValue;
var reassignedValue = "var will re-initialize the value...";
var reassignedValue; //...each time you declare it. thus reassignedValue now == null
    // strings
    let stringExample = '<a href="127.0.0.1">"Mix and match quote styles \'yo!"</a>';
    let advancedStringExample = `A formatted type with extra behavior. Displays value of Pi as ${PI}`;
    let stringsAreImmutable = "Jello World";
    stringsAreImmutable[0] = "H"; //does not work!

    // data structures
    let arrayAnimals = ['cat', 'dog', 'ferret'];
    let arraySpreadCopy = [...arrayAnimals]; // use the spread syntax to get each element of a list
    const BEST_ANIMAL = arrayAnimals[2];
    arrayAnimals.push('pine marten');
    let takenAnimal = arrayAnimals.pop(); //removes and returns
        //shift() -> removes first element, unshift() -> pushes to beginning, push() -> push to end, pop() -> remove from end
		console.log(takenAnimal); //pine marten; last added element
    let numberTotalAnimals = arrayAnimals.length; //length here is a property, not a function
    let firstAnimal = arrayAnimals[0];

    let objectPerson = {name: "Derek", //static object
                        age: 13, 
                        job: 'Hobgoblin knob slobberer',
                        nestedObject: {age: 666, type: "demon blade"},
                        "multitoken property name": "why is this a f e a t u r e"};
			console.log(objectPerson);
        const { name: desName, age: desAge } = objectPerson; //destructuring syntax: assign multiple properties to their own vars
        const { name, age } = objectPerson; //the same, but without assigning new var names
			console.log(desName);
        let ageValue = objectPerson.age;
        let dumbValue = objectPerson["multitoken property name"]; //spaces mean you must use bracket notation
        delete objectPerson.job;

    function Animal(species, name) {
        this.species = species;
        this.name = name;
    }
        Animal.prototype.lovesPeanutButter = true; //prototypes are shared between ALL instances of Animal
        let bestAnimal = new Animal('ferret', 'Slouch');
        console.log('Animalism: '+(bestAnimal instanceof Animal));

    //functions
    function myFunc(param1, param2) {
        //this kind of declaration is used for 
        return param1 + param2;
    };

    const myCallback = (req, res) => { //arrow notation
        //this kind of decalaration is used for... actually this seems kinda dumb
        //used for declaring a limited function, for instance, within an argument
    };

    const serverRequest = new Promise((resolve, reject) => {
        //TODO: this doesnt work
        let condition;
        setTimeout(() => {
            condition = true;
        }, 100);

        if (condition) resolve("Fulfill message");
        else reject("Failed message");
    }).then(result => {
        //work with the data passed in resolve
        console.log(result);
    }).catch(error => {
        //work with the data passed in reject
        console.warn(error);
    })

    //loops
    let loop1Arr = [];
    for (let prop in bestAnimal) { //let ___ in gets all members
        //loop1Arr.push(prop);
		loop1Arr.push(prop + ": " + bestAnimal[prop]);
    }
    console.log(loop1Arr);
    let spread1Arr = ['added head property',...loop1Arr,'added tail property']; //...spread used with arrs
    console.log(spread1Arr);

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

	//search for key/val match
	function whatIsInAName(collection, source) {
		//const arr = [];
		// Only change code below this line
		const sourceKeys = Object.keys(source);
		const arr = collection.filter(obj => {
			//executed on each obj... (let _ of _)
			//using guard clauses
			for(let k of sourceKeys) {
				//if it doesnt have the property it's not a match
				if (!obj.hasOwnProperty(k)) return false;
				//if the property doesnt have the same value its not a match
				if (obj[k] != source[k]) return false;
			}
			//if there isnt a key rejection, it's a match, return true
			return true;
		})
		// Only change code above this line
		console.log(arr);
		return arr;
	}

	whatIsInAName([{ first: "Romeo", last: "Montague" }, 
					{ first: "Mercutio", last: null }, 
					{ first: "Tybalt", last: "Capulet" }], 
					{ last: "Capulet" });