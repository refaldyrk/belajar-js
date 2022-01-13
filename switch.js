let lang = "kr";
let say = null;

switch (lang) {
	case "id":
		say = "Selamat Pagi";
		break;
	case "en":
		say = "Good Morning";
		break;
	case "nl":
		say = "Goede Morgen";
		break;
	default:
		say = "You Can Speak Like A Human?";
		break;
}

console.log(say);
