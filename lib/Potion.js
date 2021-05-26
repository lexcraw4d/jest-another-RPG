function Potion(name) {
	this.types = ['strength', 'agility', 'health'];
	// if no name gives random potion type
	this.name = name || this.types[Math.floor(Math.random() * this.types.length)];
  

	if (this.name === 'health') {
		this.value = Math.floor(Math.random() * 10 + 30);
	} else {
		this.value = Math.floor(Math.random() * 5 + 7);
	}
}
// let player1 = new Potion('')
// console.log(player1)

module.exports = Potion;
