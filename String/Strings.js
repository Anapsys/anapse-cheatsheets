// strings in JS kinda suck
// it's almost always good to tun them into an array first... via s.split('');
const wordComplex = 'complex';
const str1 = 'I will obliterate all human life';
const str2 = `Strings may contain ${wordComplex} functionality mixing 'quotation marks' if "backtick" is used.`;
const strAnagram1 = "apple";
const strAnagram2 = "papel";

// anagrams
	var isAnagram = (a, b) => {
		return a.split('').sort().join('') 
		=== b.split('').sort().join('');
	}
	console.log(isAnagram(strAnagram1, strAnagram2));
	console.log(isAnagram(strAnagram1, str1));