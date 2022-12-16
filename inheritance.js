//object inheritance in JS sucks hardcore
//important concepts:
//      IDEFK
//		prototype
//warnings:
//      apparently instanceof is an OPERATOR, and also USELESSS (false+ AND false-)
//      constructor is a deceptive property
//references:
//		https://medium.com/javascript-scene/the-two-pillars-of-javascript-ee6f3281e7f3
//		https://medium.com/javascript-scene/common-misconceptions-about-inheritance-in-javascript-d5d9bab29b0a
//		https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
//conclusion:
//		fuCK THIS FUCKING HELLFIRE TURBOSHIT BULLSHIT!!!!!
//		THIS GOES AGAINST EVERYTHING FUCKING DECENT ABOUT CODE!!!
//		ROTE MEMORIZATION OF POORLY WRITTEN SYNTAX?! YOU FUCKING BETCHA COCKWHORE!!!!
//		MANUAL ADDITION OF EXTRA LINES OF CODE TO GET A LOW-LEVEL """FEATURE""" WORKING?!!? OF FUCKING COURSE!!!!!!!!!!
//		FLAY MY COCKSKIN OPEN AND POUR SALT IN IT BEFORE YOU EXPECT ME TO USE THIS SHIT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//OBJECT LITERAL
let dogLiteral = {	//assigns a VARIABLE to an INSTANCE of OBJECT() with PROPERTIES and METHODS
    numLegs: 4,
    name: 'Stacy',
	barkSound: 'woof',
	bark: function() { return this.barkSound; }
};					//...thus no real inheritance
	console.log(dogLiteral.bark());
	dogLiteral.barkSound = 'AA-ARF';
	console.log(dogLiteral.bark());

//CLASS DEFINITION VIA """CONSTRUCTOR""" WHICH IS A LIE
function Animal(name) {
	this.dnasequence = ['c','t','g','a']; //called an "own property" in this hellscape
	this.numEyes = 2;
	this.numLegs = 4;
	this.name = name;
}
	//first use of prototype... all instances will have this... constant?
	Animal.prototype.planet = 'Earth';
	let derek = new Animal('derek');
	console.log('Constructor naive animalhood: '+(derek.constructor === Animal)) //bad and misleading!!! uselesss!!! cool!!!!!
	console.log(derek.name +" has " + derek.numEyes + " eyes.");
	console.log('Animalhood: '+(derek instanceof Animal)); //also bad and misleading!!!!!! USLESS!!!! COOOLLLL!!!!!!
	//accessing those properties... using 'in'
	let ownProperties = [];
	for(let property in derek) {
		let prototypal = !derek.hasOwnProperty(property); //if its not an own property, it's a prototypal property
		//property is an object, you can get its value by getting the value of the object in the ojbejcxcj
		console.log(property+'|'+prototypal+": \t\t"+derek[property]);
		ownProperties.push(property);
	}
	console.log(ownProperties);

//PROTOTYPES
	//a PROTOTYPE is an OBJECT
	//but it's made with a FUCKING CONSTRUCTOR
	//a parent, redefining the previous animal example
	function Animal2(args) {
		//constructor: Animal2, 
		this.planet = "Earth";
		this.eat = function(food) {
			//digest, dsitribute nutrients, etc
		}
	}
	Animal2.prototype = {
		constructor: Animal2 	// this has to be added manually because this feature set is a fucking disaster
									// but don't worry, it's actually useless to check .constructor anyway
	}
	let tristan = new Animal2('Tristan');
	tristan.constructor = Animal2; 	//THAT'S RIGHT!! YOU HAVE TO MANUALLY SET THIS FOR EVERY
									//FUCKING
									//OBJECT INSTANCE!!!!!!!!!
									//BECAUSE IT ISNT FUCKING SET!!!!!!!!!!!!!!
	console.log(Animal2.prototype.isPrototypeOf(tristan)); //stupid ugly shit syntax
	console.log(Object.prototype.isPrototypeOf(tristan)); //Object is a prototype/parent of all objects

	//a child, INHERITING a PROTOTYPE
	function Mammal(args) {
		this.hooves = 4;
	}
	Mammal.prototype.constructor = Mammal;
	Mammal.prototype = Object.create(Animal2.prototype); //how the FUCK does this make any fucking sense?!!?!
														//so to inherit you have to
														//1. assign the CLASS's static prototype to
														//2. the result of a function call from a STATIC OBJECT
														//3. which is passed another static property from the desired parent.
														//	FUCK! I CANT FUCKING EXPRESS HOW FUCKING ANGRY I AM!!!!!
														// I L I T E R A L L Y WANT TO KILL WHOEVER WROTE THIS
	//to check for fucking inheritance...
	//first refs parent, then parent's object, then passes an argument of
	//		the child's fucking prototype. What an ugly mess.
	console.log(Animal2.prototype.isPrototypeOf(Mammal.prototype));

//MIXINS
	//because this system does not cover all fucking usecases anyway.
	//so we have to use a weird fucking function to create a static default property.
	let dieMixin = function(obj) {
		obj.die = function() {
			//proceedToHeaven() or some shit
		}
	}
	dieMixin(Animal2);

//CLOSURES
	//unsurprisingly also done poorly.
	function Amphibian(args) {
		let sliminess = 4; //using let instead of this makes the difference here.
		this.getSliminess = function() {
			return sliminess; //but sh/wouldn't this refer to a STATIC PROPERTY?!?!
		}
	}

//IIFE Immediately Invoked Function Expression
	//wtf...
	//used on anonymous functions (no symbol assigned)
	//of basic appearance: (function() {  })();
	(function() { console.log('FUCK ME DADDY!!!') } )();