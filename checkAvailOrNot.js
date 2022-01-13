let list = [
	{
		id: 1,
		name: "Refaldy",
	},
	{
		id: 2,
		name: "Rizky",
	},
	{
		id: 3,
		name: "Karim",
	},
];

/**
 * Checked Function
 * @param{Array} data
 * @param{Number} value
 */
export function avail(data, value) {
	return data.some(x => x.id === value);
}
