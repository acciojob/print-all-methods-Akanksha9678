//your JS code here. If required.
function allMethods() {
  //write your code here
	 return Object.getOwnPropertyNames(Math)
        .filter(prop => typeof Math[prop] === 'function')
        .join(', ');
}

alert(allMethods());
