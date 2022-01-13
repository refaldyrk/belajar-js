//Param Object
let user = {
	name: "efal",
	email: "efal@vandev.id",
};

function paramob({ name, email }) {
	console.log(`${name}, Your Email Is: ${email}`);
}

paramob(user);

//Rest Param
function sumNum(...nums) {
	let result = 0;
	for (num of nums) {
		result += num;
	}

	return result;
}

console.log(sumNum(1, 5, 3, 1));
