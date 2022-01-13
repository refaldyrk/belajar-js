function sayName(name) {
	return `Hello ${name}`;
}

const region = (region, name) => {
	let rs = sayName(name); //Hello ${name}

	if (region === undefined || name === undefined) {
		return `Lengkapi Parameter`;
	}
	return `${rs}, You From ${region}, Right?`;
};

console.log(region("Indonesia", "Efal"));
