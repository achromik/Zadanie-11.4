function Phone(brand, price, color ) {
    this.brand = brand;
    this.price = price;
    this.color= (color!=undefined ? color : "No info");
    this.VAT = 23;
    this.accesories = [];
	this.powerState = 0;
	// OS = undefined;
}

Phone.prototype = {
	
	printInfo : function () {
		console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ' and price is ' + this.price + '.');
		if(this.OS != undefined) {
			console.log('OS is ' + this.OS);
		}
	},

	setOS : function(OS) {
		this.OS = OS;
	},

	getPrice : function() {
		return this.price;
	},

	setVAT : function(VAT) {
		this.VAT = VAT;
	},

	getVat : function() {
		return this.VAT;
	},

	getTotalPrice : function () {
		return this.price+this.price*this.VAT/100;
	},

	setAccesories : function(accesories) {
		this.accesories = [];
		for( var i =0; i<arguments.length; i++){
			this.accesories.push(arguments[i]);
		}
	},

	addAccesories : function(accesories) {
		for( var i =0; i<arguments.length; i++){
			this.accesories.push(arguments[i]);
		}
	},

	powerToggle : function() {
		this.powerState = (this.powerState) ? 0 : 1;
	},

	getPowerState : function() {
		return (this.powerState) ? 'ON' : 'OFF';
	},
};


var S5 = new Phone ('Samsung', 100, "Silver");
var a5 = new Phone ('Apple 5s', "red");

S5.printInfo();
S5.setOS("android 4.4");
S5.printInfo();
S5.setAccesories('headphones', 'power adapter');
console.log(S5.accesories);
S5.addAccesories('etui', 'box');
console.log(S5.accesories);
console.log(S5);

console.log('Phone ' + S5.brand + ' is ' + S5.getPowerState());
S5.powerToggle();
console.log('Phone ' + S5.brand + ' is ' + S5.getPowerState());
console.log(S5);




console.log('Price whit Tax: ' + S5.getTotalPrice());


a5.printInfo();
a5.setOS("OSX");
a5.printInfo();