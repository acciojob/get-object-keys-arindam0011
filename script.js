//your JS code here. If required.
Object.prototype.getKeys = function() {
    return Object.keys(this);
}
let student={
	name:"arindam"
}

let ans=student.getKeys();

console.log(ans);