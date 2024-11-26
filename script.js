//your JS code here. If required.

const myObj = {
	name:'John',
	age:30,
	city:'New York',
}

myObj.__proto__.getKeys = function() {
	let keysArr = [];
	for(let key in this) {
		keysArr.push(key);
	}
	keysArr.pop();
	return keysArr;
}

console.log(myObj.getKeys())