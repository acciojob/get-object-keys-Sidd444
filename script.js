//your JS code here. If required.
let student={
	key:"name"
}
Object.prototype.getKeys=()=>{
	return Object.keys(this);
}
console.log(student.getKeys())