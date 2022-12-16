//regex is some scary shit
		//flags: i:ignore case, g:global,
		let RGXvowl = /[aeiou]/gi
		let RGXvowlOne = /[aeiou]/i
		let RGXdigits = /\d/
		let RGXcons = /[^aeiou]/gi
		let RGXconsOne = /[^aeiou]/i
		let RGXseps = /\s|_/
		//let RGXswapLetters = /e\o/ //how to swap out letters????
//		format: /\W[0-9]/
		let testString = "I sure am a string buddy, woo0 bo1i do i have&problems tho";
		console.log(testString.split(/\W/)); //split at non-alphanum characters
		console.log(testString.split(/[0-9]/)); //split at number occurences
		console.log(/z/.test(testString)); //false: there is no 'z' in testString

//common terms:
//		[range-n] a-z, 0-9
//		\W - non-word characters
//		\

//string work
	let exReplace = testString.replace(RGXvowl,'#').replace(RGXdigits,'#'); //remove vowels & digits
	console.log("Replace vowels: "+exReplace+'\n')

//examples
	//spinalcase translator
	function spinalCase(str) {
		return str
				.trim()
				.split(/\s|_|(?=[A-Z])/) //\s whitespaces OR _ OR (?=positive lookahead, capitals)
				.join('-')
				.toLowerCase();
	}
	console.log(spinalCase('This Is Spinal Tap'));
	console.log(spinalCase('thisIsSpinalTap')); //both to -> this-is-spinal-tap

	//pig latin
	function translatePigLatin(str) {
		let regex = /^[^aeiou]+/ //^ = ???, vowels, + = 1 match
		let consGroup = str.match(regex);
		return (consGroup == null) 
				? str.concat('way') //starts with a vowel: just add way
				: str.replace(regex,'').concat(consGroup).concat('ay'); //replace out consgroup, add it back, add ay
	}
	console.log(translatePigLatin("consonant"));
	console.log(translatePigLatin("knight"));
	console.log(translatePigLatin("apple"));

	//fill in alphabetic sequence
	function fearNotLetter(str) {
		let s = str.length;
		let newStr = str.split(/(?=.)/);

		for(var i = 0; i < s-1; i++) {
		  let c = str.charCodeAt(i);
		  let c2 = str.charCodeAt(i+1);
		  let diff = c2 - c;
		  if (diff != 1) {
			for(var j = 0; j < diff-1; j++) {
				let nc = String.fromCharCode(c+1+j);
			  	newStr.splice(i+j+1, 0, nc);
			}
		  }
		}
		return newStr.join('');
	  }
	  
	  console.log(fearNotLetter("abce"));
	  console.log(fearNotLetter("abca"));
	  console.log(fearNotLetter("abg"));

// ESSENTIALS
	function capitalize(str) {
		return str.slice(0,1).toUpperCase() + str.slice(1);
	}
	console.log(capitalize("sandwich"));