//your JS code here. If required.
class Obj {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	getKeys() {
		// let keysArr = [];
		// for(let key in this) {
		// 	keysArr.push(key);
		// }
		return this;
	}
}

const newObj = new Obj('Arshad', 25);
console.log(newObj.getKeys());
