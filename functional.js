//important concepts:
//      lamdas, closure, state
//		"pure" functions always have the same output given the same input.
//		functional programming emphasizes never using state. Inputs are never altered in place.

//lambda/"anonymous" function
	console.info("\nLamda example");
	//in this format, the "return" seems to be implied.
	const lambdaExample = (arg1, arg2) => (arg1 > arg2);
	const lambdaExample2 = (arg1) => {
		//complex functionality in braces and return required
		if (false) return false; //unreachable code lol its important shut up and die lol xd rofl lol
		return arg1;
	}
	console.log(lambdaExample(56,3));
	console.log(lambdaExample2("Carrots in hell"))
	console.log(() => ("You don't need to assign this anywhere to use it."))

//array mutation functional alternative
	let exampleArray = [1,2,3];
	exampleArray.push(4);
	console.log( exampleArray.concat([5,6,7]) ); //functional; exampleArray isnt mutated.
	console.log( exampleArray ); //will only print the results from the .push() call.

//reduce
	console.info("\nArray reduction");
	//reduce is the most basic form of array filtering functions
	let reducedArray = exampleArray.reduce( (_accumulator, _current, _index, _arr) => {
		//each loop gets access to these arguments, fed from the prev call
		//return _accumulator + _current; //results 10; a1+a2+a3+a4
		_arr.push(_current); return _arr; //results doubled original array; _arr+arr[0...n];
	}, 0 ); //initial value of iterator set here
	console.log(reducedArray);

	const squareList = arr => {
		// Only change code below this line
		let newArray = [];
		//freecodecamp solution: reduction that returns only squares of positive integers
		return arr.reduce( (_accu, _curr, _indx, _arr) => {
			//
			if ( _curr > 0 && Number.isInteger(_curr) ) {
				newArray.push(_curr * _curr);
			}
			return newArray;
		}, arr);
		// Only change code above this line
	};
	const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
	console.log(squaredIntegers);

//overview of the "filter" array prototype member function.
	console.info("\nArray filtering");
	Array.prototype.myFilterClone = function(callback) {
		//
		let newArray = [];

		//this refers to the given array
		this.forEach(a => {
			if (callback(a) === true) {
				newArray.push(a);
			}
		})

		return newArray;
	}
	const filteredArray = [23, 47, 48, 4, 8, 9].myFilterClone((item) => {
		//this lamda returns true if item is odd.
		//it is passed as an agument to "myFilterClone".
		//the declared array above is tested against it, and a new copy is given.
		return item % 2 === 1;
	})
	console.log(filteredArray);

//testData
const testData = [
	{
		Name: "Derek",
		Species: "Human",
		Sex: "M",
		Age: 21
	},
	{
		Name: "FeatherPaw SureFoot",
		Species: "Avali",
		Sex: "I",
		Age: 200
	},
	{
		Name: "Slouch",
		Species: "Wereferret",
		Sex: "M",
		Age: 26
	}
]
	const listOfSpecies = testData.map(a => (a["Species"]));
	const listOfAncients = testData.filter(a => (a["Age"] > 100));
	console.log(listOfSpecies);
	console.log(listOfAncients);

//currying... wtf?
	function uncuriedXYZ(x,y,z) {
		return x+y+z;
	}
	//splits function up into individual stages for each variable
	//supposedly for when not all variables are known at once??
	function curiedXYZ(x) {
		return y => {
			return z => {
				return x+y+z;
			}
		}
	}
	const curiedXYZ2 = x => y => z => x+y+z;