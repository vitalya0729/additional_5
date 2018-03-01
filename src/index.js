module.exports = function check(str, stacksConfig) {
  // your solution
  	let arrStr = str.split('');
	let stack = [];
	let open_stacks = [];
	let close_stacks = [];

	if (arrStr.length % 2 != 0) {
		return false;
	}

	for (let i = 0; i < arrStr.length; i++) {
		for (let j = 0; j < stacksConfig.length; j++) {
			open_stacks[j] = stacksConfig[j][0];
			close_stacks[j] = stacksConfig[j][1];
		
		if (arrStr[i] == open_stacks[j]) {
			if(arrStr[i] == close_stacks[j] && arrStr[i] == stack[stack.length-1]){
        stack.pop();
        continue;
      }
      stack.push(arrStr[i]);
    }
    else if(arrStr[i] == close_stacks[j]){
      if(stack[stack.length-1] == open_stacks[j]){
      stack.pop();  
      }
      else{
        return false;
      }
    }
  }
}

	if (stack.length == 0) {
		return true;
	} else {
		return false;
	}
}
