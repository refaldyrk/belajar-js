let visitsCountMap = new WeakMap();

function countUser(user) {
	let count = visitsCountMap.get(user) || 0;
	visitsCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas);
console.log(visitsCountMap);

jonas = null;

console.log(visitsCountMap);
