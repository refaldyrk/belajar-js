let names = ["Refaldy", "Aulia", "Austin", "Austine"];

const newNames = names.map(nm => `${nm}!`);

console.log(newNames);

const projects = [
	{
		name: "Bangun Aplikasi",
		budget: 10,
	},
	{
		name: "Bangun Aplikasi 2",
		budget: 30,
	},
	{
		name: "Bangun Aplikasi 3",
		budget: 5,
	},
	{
		name: "Bangun Aplikasi 4",
		budget: 20,
	},
];

const lolosProject = projects.filter(l => l.budget >= 20);
const lolos = lolosProject.map(nm => nm.name);
console.log(lolos);
