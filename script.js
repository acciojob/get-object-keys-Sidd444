//your JS code here. If required.
let student{
	key:"name"
}
Object.prototype.getKeys=()=>{
	let arr=[];
	for(let key in Object) arr.push(key);
	return arr;
}