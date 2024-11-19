//your JS code here. If required.
const myObj = {
	name:'John',
	age:30,
	city:'New York',
	getKeys: function() {
		let keysArr = [];
		for(let key in this) {
			keysArr.push(key);
		}
		keysArr.pop();
		return keysArr;
	} 
}
console.log(myObj.getKeys());

/*
class Obj {
	constructor(name, age, city) {
		this.name = name;
		this.age = age;
		this.city = city;
	}

	getKeys() {
		let keysArr = [];
		for(let key in this) {
			keysArr.push(key);
		}
		return keysArr;
	}
}

const myObj = new Obj("John", 30, "New York");
const keys = myObj.getKeys();
console.log(keys);
*/

