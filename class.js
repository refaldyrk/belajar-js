class Mail {
    constructor() {
        this.from = 'efal@gmail.com'
    }

    sendMessage(msg, to) {
        console.log(`Pengirim ${this.from}\nPenerima: ${to}\nMessage: ${msg}`)
    }
}

const mail = new Mail
mail.sendMessage('Halo Ini Test', 'aulia@gmail.com')