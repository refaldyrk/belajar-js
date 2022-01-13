/**
 * TODO:
 * 1. Buatlah class bernama Animal dengan ketentuan:
 *    - Memiliki properti:
 *      - name: string
 *      - age: int
 *      - isMammal: boolean
 *    - Memiliki constructor untuk menginisialisasi properti:
 *      - name
 *      - age
 *      - isMammal
 * 2. Buatlah class bernama Rabbit dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - eat yang mengembalikan nilai string "${this.name} sedang makan!"
 *    - Ketika diinstansiasi, properti isMammal harus bernilai true
 * 3. Buatlah class bernama Eagle dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - fly yang mengembalikan nilai string "${this.name} sedang terbang!"
 *    - Ketika diinstansiasi, properti isMammal harus bernilai false
 * 4. Buatlah instance dari class Rabbit bernama "myRabbit" dengan ketentuan:
 *    - properti name bernilai: "Labi"
 *    - properti age bernilai: 2
 * 5. Buatlah instance dari class Eagle bernama "myEagle" dengan ketentuan:
 *    - properti name bernilai: "Elo"
 *    - properti age bernilai: 4
 */

// TODO
class Animal {
	constructor(name, age, isMammal) {
		this.name = name;
		this.age = age || 17;
		this.isMammal = isMammal || true;
	}
}

class Eagle extends Animal {
	constructor(name, age, isMammal) {
		super(name, age, (isMammal = false));
	}

	fly() {
		this.isMammal = false;
		return `${this.name} sedang terbang!`;
	}
}
class Rabbit extends Animal {
	constructor(name, age, isMammal) {
		super(name, age, (isMammal = true));
	}

	eat() {
		this.isMammal = true;
		return `${this.name} sedang makan!`;
	}
}

let myRabbit = new Rabbit("Labi", 2);
let myEagle = new Eagle("Elo", 4);
/**
 * Abaikan kode di bawah ini
 */

module.exports = {
	Animal,
	Rabbit,
	Eagle,
	myRabbit,
	myEagle,
};
