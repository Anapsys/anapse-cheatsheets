let map1 = new Map();
let map2 = new Map();
// has,set,get,delete,keys,values,entries,foreach
map1.set('a',1);
map1.set('b',2);
map2['a'] = 2; //incorrect, will not properly interact with iteration

// iterable
for(let ele of map1) {
	console.log(ele)
}
for(let ele of map1.values()) {
	console.log(ele);
}

var topKFrequent = function(nums, k) {
    let entries = new Map();
	// get and tally all nums
    for(let ele of nums) {
        (entries.has(ele)) ?
        entries.set(ele, entries.get(ele)+1) :
        entries.set(ele, 1)
    }
	console.log(entries)

	// get the entries sorted by occurence
	let rank = []
	for (let ele of entries.entries()) {
		if (!rank.length) rank.push(ele);
		else {
			(rank[0][1] > ele[1]) ? rank.push(ele) : rank.unshift(ele);
		}
	}
	console.log(rank);
	let rankMap = new Map([...rank]);

	// return the first k elements
	return rankMap.keys().slice(0, k);
};
console.log(topKFrequent([3,3,3,3,4,4,5,6,1],2));
console.log(topKFrequent([1],1));
console.log(topKFrequent([1,1,1,2,2,3],2));