
//This script demonstrates inheritance from a parent class (prototype).

//Define a Vehicle constructor.
//This will become the prototye for the parent class of ALL vehicles.
var Game = function(name, developer, price, nbrPlayers) {
  this.name = name;
  this.developer = developer;
  this.price = price;
  this.nbrPlayers = nbrPlayers;
};


//Encaupulate into Game prototype a method to display any vehicle.
Game.prototype.displayGame = function() {
  document.write("<input type='text' size='100' value=\'" + this.name + ": Developer-" + this.developer + ", costs $" + this.price.toFixed(2) + ", and has " +
                 this.nbrPlayers + " players." + "\'><br><br>");
  this.launchGame();
};


//Encapsulate a method to launch the vehicle.
Game.prototype.launchGame = function() {
  document.write("<textarea rows= '6' cols= '50' id=\'" + this.name + "\'>" + "Text Area" + "</textarea><br><br>");
  document.getElementById(this.name).innerHTML = "Cannot launch " + this.name;
};


// define a constructor for a subclass of Game
function League(name, developer, price, nbrChampions) {
	// call the parent constructor
	// this will set the inherited properties for the subclass
	Game.call(this, name, developer, price);
	// set the subclass specific properties
	this.nbrChampions = nbrChampions;
}

// create the subclass prototype that inherits from
// the parent prototype by cloning it
League.prototype = Object.create(Game.prototype);

// set the constructor property of the new prototype to point to
// the subclass constructor
League.prototype.constructor = League;

// override the parent displayGame method for a League
League.prototype.displayGame = function() {
  document.write("<input type='text' size='100' value=\'" + this.name + ": Developer-" + this.developer + ", costs $" + this.price.toFixed(2) + ", and has " + this.nbrChampions + " Champions." + "\'><br><br>");
  this.launchGame();
};

// override the parent launchGame method for a League
League.prototype.launchGame = function() {
	document.write("<textarea rows = '6' cols='50' id=\'" + this.name + "\'>" +
			"Text area" + "</textarea><br><br>");
	var output = "";
	for (var tower = 1; tower <= 5; tower++) {
		output += "Tower " + tower + " destroyed\n";
	}
	output += "End Game";
	document.getElementById(this.name).innerHTML = output;
};

// define a constructor for a subclass of Game
function Overwatch(name, developer, price, nbrHeroes) {
	// call the parent constructor
	// this will set the inherited properties for the subclass
	Game.call(this, name, developer, price);
	// set the subclass specific properties
	this.nbrHeroes = nbrHeroes;
}

// create the subclass prototype that inherits from
// the parent prototype by cloning it
Overwatch.prototype = Object.create(Game.prototype);

// set the constructor property of the new prototype to point to
// the subclass constructor
Overwatch.prototype.constructor = Overwatch;

Overwatch.prototype.displayGame = function() {
  document.write("<input type='text' size='100' value=\'" + this.name + ": Developer-" + this.developer + ", costs $" + this.price.toFixed(2) + ", and has " + this.nbrHeroes + " Heroes." + "\'><br><br>");
  this.launchGame();
};

Overwatch.prototype.launchGame = function() {
	document.write("<textarea rows = '6' cols='50' id=\'" + this.name + "\'>" +
			"Text area" + "</textarea><br><br>");
	var output = "";
	for (var checkpoint = 1; checkpoint <= 3; checkpoint++) {
		output += "Checkpoint " + checkpoint + " reached\n";
	}
	output += "End Game";
	document.getElementById(this.name).innerHTML = output;
};

// define a constructor for a subclass of Game
function CSGO(name, developer, price, nbrPlayers) {
	// call the parent constructor
	// this will set the inherited properties for the subclass
	Game.call(this, name, developer, price, nbrPlayers);
}

// create the subclass prototype that inherits from
// the parent prototype by cloning it
CSGO.prototype = Object.create(Game.prototype);

// set the constructor property of the new prototype to point to
// the subclass constructor
CSGO.prototype.constructor = CSGO;

CSGO.prototype.displayGame = function() {
  document.write("<input type='text' size='100' value=\'" + this.name + ": Developer-" + this.developer + ", costs $" + this.price.toFixed(2) + ", and has " + this.nbrPlayers + "  Players." + "\'><br><br>");
  this.launchGame();
};

CSGO.prototype.launchGame = function() {
	document.write("<textarea rows = '6' cols='50' id=\'" + this.name + "\'>" +
			"Text area" + "</textarea><br><br>");
	var output = "";
	for (var enemies = 1; enemies <= 6; enemies++) {
		output += "Enemies Spotted: " + enemies + "\n";
	}
	output += "End Game";
	document.getElementById(this.name).innerHTML = output;
};

function Destiny(name, developer, price, nbrGuardians) {
	// call the parent constructor
	// this will set the inherited properties for the subclass
	Game.call(this, name, developer, price);
	// set the subclass specific properties
	this.nbrGuardians = nbrGuardians;
}

// create the subclass prototype that inherits
Destiny.prototype = Object.create(Game.prototype);


Destiny.prototype.constructor = Destiny;

Destiny.prototype.displayGame = function() {
  document.write("<input type='text' size='100' value=\'" + this.name + ": Developer-" + this.developer + ", costs $" + this.price.toFixed(2) + ", and has " + this.nbrGuardians + " Guardians." + "\'><br><br>");
  this.launchGame();
};

Destiny.prototype.launchGame = function() {
	document.write("<textarea rows = '6' cols='50' id=\'" + this.name + "\'>" +
			"Text area" + "</textarea><br><br>");
	var output = "";
	for (var boss = 1; boss <= 4; boss++) {
		output += "Boss " + boss + " beat\n";
	}
	output += "End Game";
	document.getElementById(this.name).innerHTML = output;
};



function main() {
  var gameArray = [];

  gameArray[0] = new Game("Mario", "Nintendo", 60, 12000000);
  gameArray[1] = new League("League of Legends", "Riot Games", 0, 132);
  gameArray[2] = new Overwatch("Overwatch", "Blizzard", 40, 22);
  gameArray[3] = new Destiny("Destiny", "Bungie", 60, 3);
  gameArray[4] = new CSGO("Counter Strike: Global Offensive", "Valve", 15, 6);

  for (var i = 0; i < gameArray.length; i++) {
    gameArray[i].displayGame();
  }
}
