//your JS code here. If required.
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
