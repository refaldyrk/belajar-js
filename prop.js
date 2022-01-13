class Mail {
	constructor() {
		this.from = "efal@gmail.com";
		this.contacts = [];
	}

	sendMessage(msg, to) {
		console.log(`Pengirim: ${this.from}\nPenerima: ${to}\nMessage: ${msg}`);
		this.contacts.push(to);
	}

	seeContact() {
		console.log(`Jumlah Contact: ${this.contacts.length}`);
		console.log("LIST KONTAK");

		for (let i = 0; i < this.contacts.length; i++) {
			const el = this.contacts[i];
			console.log(el);
		}
	}
}

//Inherintance
class Whatsapp extends Mail {
	constructor() {
		super();
		this.from = "Efal";
		this.binis = false;
	}

	myProfile() {
		console.log(`Hai My Name ${this.from}\nType: ${this.binis ? "Bisnis" : "Personal"}`);
	}
}

const mail = new Mail();
mail.sendMessage("Ini Test", "kontak1");
mail.sendMessage("ini test ke 2", "kontak ke 2");
mail.seeContact();
const wa = new Whatsapp();
wa.myProfile();
