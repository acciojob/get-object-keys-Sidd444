//your JS code here. If required.
let obj = {name : "kaiba"};
Object.prototype.getKeys = function(){
	return Object.keys(this);
}