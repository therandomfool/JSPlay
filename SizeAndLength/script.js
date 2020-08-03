/* returns the size/length of an object */
Object.size = function(obj) {
	var size = 0;
	for(key in obj) {
		if(obj.hasOwnProperty(key)) size++;
	}
	return size;
}

//initial vars
var str = 'JohnAndMary';
var letters = new Object;

//loop, figure it out
for(x = 0, length = str.length; x < length; x++) {
	var l = str.charAt(x)
	letters[l] = (isNaN(letters[l]) ? 1 : letters[l] + 1);
}

//output count!
for(key in letters) {
	console.log(key + ' :: ' + letters[key]);
}
console.log(Object.size(letters));

