function printReverse(array) {
	for (var i = array.length; i >= 0; i--) {
		console.log(array[i]);
	}
}

function isUniform(array) {
	var key = array[0];
	for (var i = 1; i < array.length; i++) {
		if (key !== array[i]) {
			return false;
		}
	}
	return true;
}

function sumArray(array) {
	var currSum = 0;
	array.forEach(function(num) {
		currSum += num;
	});
	return currSum;
}

function max(array) {
	var currMax = array[0];
	array.forEach(function(num) {
		if (num > currMax) {
			currMax = num;
		} 
	});
	return currMax;
}