function query(iterable, propertyX, valueOfX, propertyY) {
			 
	for (let x of iterable) {	
		if (valueOfX !== undefined) {	
			if (x[propertyX] == valueOfX) {
			return x[propertyY];
			} 
		}
		return x[propertyX];
	}
};

let array = [{name: "mathew", noHands: 2},
			 {name: "mark", noHands: 2},
			 {name: "luke", noHands: 2},
			 {name: "evan", noHands: 1}];
			 
//how many hands does mark have?
var q = query(array, "name", "mark", "noHands");
console.log(q);