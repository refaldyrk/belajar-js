const canSendMessage = self => ({
	sendMessage: () => console.log(`Send Message ${self.msg}`),
});

const checkIsValidPhone = self => ({
	isValid: () => console.log(`Valid Phone: ${self.from}`),
});

const personalE = (from, msg, store) => {
	const self = {
		from,
		msg,
		store,
	};
	const personalEB = self => ({
		createCatalog: () => console.log(`Katalog ${self.store} Berhasil Dibuat`),
	});

	return Object.assign(self, personalEB(self), checkIsValidPhone(self), canSendMessage(self));
};

const pe = personalE("efal@gmail.com", "Ini Test", "Efal Store");
pe.sendMessage();
pe.createCatalog();
