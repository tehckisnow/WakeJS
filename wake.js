
//wait for the rest of the page to load, then listen for keypress and if it is enter, send input to enter()
$(document).ready(function(){
	$(document).keypress(function(key){
		if (key.which === 13 && $('#userInput').is(':focus')) {
			enter();
		}
	})
});

//instructions link
window.onload = function() {
	var ins = document.getElementById("instructions");
	ins.onclick = function() {
		out(instructions());
		return false;
	}
};

function instructions() {
	return "<br \ >This is a text-based adventure game, also known to some as <b>Interactive Fiction</b>.  \
	After reading the prompt, you type your responces into the field below.  It will not understand all sentances \
	or phrases, but it works best with sentences in the form of 'verb noun', such as 'look room' or \
	'get cup'.  You can navigate without a verb by typing the directions you wish to go, such as 'north', 'south', \
	'east', and 'west'.  You can also use the shortcuts, 'n', 's', 'e', and 'w', for each of the cardinal directions \
	respectively.  \
	<br \>You can view these instructions again by typing 'help'.";
	window.scrollBy(0, 200);
}

var player = {
	name: "player",
	description: "lookin' good!",
	currentRoom: 1,
	inventory: [{name: "corn"}, {name: "beef"}]
};

//to be implemented later;
function reset() {
	//var map = x; //reset map
	//return to first room
	 updateCurrentRoom(1);
	//refresh text
	document.getElementById("gameText").innerHTML = "<br \>" + map.description + "<br \>";
}

//map is an object that holds name, description, and an array of rooms and their data
var map = {
	//name: title of game (include author optionally?)
	name: "Default Game",
	//description: opening text for the game
	description: "This is the opening text",
	room: [
		{ //Room 0
			name: "default room",
			description: "This is a default room. If you see this, something has gone wrong.",
			exits: [],
			items: []
		},
		
		{ //Room 1
			name: "first room",
			description: "This is the first room.",
			exits: [
				{
				name: "south",
				destination: 2
				}
			],
			items: [
				{
				name: "rock",
				description: "a small rock."
				}
			]
		},
		
		{ //Room 2
			name: "second room", 
			description: "This is the second room.",
			exits: [
				{
				name: "north",
				destination: 1
				},
				{
				name: "south",
				destination: 3
				}
			],
			items: []
		},
		
		{ //Room 3
			name: "third room",
			description: "This is the third room.",
			exits: [
				{
				name: "north",
				destination: 2
				}
			],
			items: [
				{
				name: "key",
				description: "a small silver key."
				},
				{
				name: "pen",
				description: "a small silver writing pen."
				}
			]
		} //Room 3
		
	] //room list
} //map

var thisRoom = map.room[player.currentRoom]; //this will change

//change output method here (console.log / innerHTML, ect.)
function out(text) {
	document.getElementById("gameText").innerHTML += "<br \>" + text;
}//out()

//return a list of names seperated by spaces from the array passed in
//horizontal, for things like listItems() and listExits().
function listNames(array) {
	var elementsList = "";
	x = 0;
	while (x < array.length) {
		elementsList += array[x].name;
		if (!(x === array.length - 1)) {
			elementsList += " ";
		}
		x++;
	}
	return elementsList;
}//listNames()

//return a list of the names of items in the current room if there are any
function listItems() {
	if (thisRoom.items.length > 0) {
		return "You can see <b>" + listNames(thisRoom.items) + "</b> here. ";//space at end is intentional
	}
	return "";
}//listItems()

//return a list of names of exits in the current room if there are any
function listExits() {
	if (thisRoom.exits.length > 0) {
		return "There are exits to the <b>" + listNames(thisRoom.exits) + "</b>.";
	}
	return "";
}//listExits()

function returnRoomName() {
	return "<br \><b>[" + thisRoom.name + "]:</b>";
};

//takes input, converts to lowercase, passes to command interpreter, updates room info
function enter() {
	var input = $('#userInput').val().toLowerCase();
	out("&nbsp &nbsp &nbsp &nbsp> " + input);
	out(command(input));
	//clear previous input
	document.getElementById("userInput").value = ""; //save this as a constant instead of searching repeatedly?
	window.scrollBy(0, 200);
};

//which array element contains an object with the given parameter(q)? return -1 if not found
function searchName(datArray, q) {
	var found = -1;
	datArray.forEach(function(element) {
		if (element.name === q) {
			found = element.destination;
		}
	});
	return found;
};

//pass a number and update the current room number
function updateCurrentRoom(newRoom) {
	player.currentRoom = newRoom;
	thisRoom = map.room[player.currentRoom];
};

function updateRoomInfo() {
	return returnRoomName() + "<br \>" + thisRoom.description + "<br \>" + listItems() + listExits();
};

function checkGo(exitName) {
	var potentialRoom = searchName(thisRoom.exits, exitName);
	if (!(potentialRoom === -1)) {
		updateCurrentRoom(potentialRoom);
		return "You travel " + exitName + "." + "<br \>" + updateRoomInfo();
	} else {
		return "There does not seem to be an exit there.";
	}
};

//split user input into an array and save only recognized commands into array
function tokenize(originalInput) {
	var commandsList = ["help", "l", "look", "n", "north", "s", "south", "e", "east", "w", "west", "inventory", "inv", "i", "g", "get", "d", "drop", "test", "reset"];
	//split into array
	var tokenizedInput = originalInput.split(" ");
	//loop through array and only save recognized commands to finalizedCommand[finalCommandIndex]
	var finalizedCommand = [];
	var finalCommandIndex = 0;
	
	var i = 0;
	while (i < tokenizedInput.length) {
		//check commandsList
		if (tokenizedInput[i] !== undefined) {
			var y = 0;
			while (y < commandsList.length) {
				if (tokenizedInput[i] == commandsList[y]) {
					finalizedCommand[finalCommandIndex] = tokenizedInput[i];
					finalCommandIndex++;
					break;
				}
				y++;
			}
			//check inventory
			y = 0;
			while (y < player.inventory.length) {
				if (tokenizedInput[i] == player.inventory[y].name) {
					finalizedCommand[finalCommandIndex] = tokenizedInput[i];
					finalCommandIndex++;
					break;
				}
				y++;
			}
			//check currentRoom.items
			y = 0;
			while (y < thisRoom.items.length) {
				if (tokenizedInput[i] == thisRoom.items[y].name) {
					finalizedCommand[finalCommandIndex] = tokenizedInput[i];
					finalCommandIndex++;
					break;
				}
				y++;
			}
			
			i++;
		}
	}
	
	//remove this after debugging!!!
	out("!tokenized command: " + finalizedCommand);
	return finalizedCommand;
}

function command(input) {
	var tokens = tokenize(input);
	
	//for now, this checks for main command in tokens[0]; later convert to check if contains
	switch(tokens[0]) {
		case "help":
			return instructions();
			break;
		case "l":
		case "look":
			return updateRoomInfo();
			break;
		case "n":
		case "north":
			return checkGo("north");
			break;
		case "s":
		case "south":
			return checkGo("south");
			break;
		case "e":
		case "east":
			return checkGo("east");
			break;
		case "w":
		case "west":
			return checkGo("west");
			break;
		case "inventory":
		case "inv":
		case "i":
			if (player.inventory.length > 0) {
			return vertList(player.inventory);
			break;
			} else {
				return "You do not seem to be carrying anything.";
			}
			break;
		case "g":
		case "get":
			//CHANGE THIS!!!!!!!!!!!!!!!!!!!!!!!!
			return getItem(tokens[1]);
			break;
		case "d":
		case "drop":
			//CHANGE THIS!!!!!!!!!!!!!!!!!!!!!!!!
			return dropItem(tokens[1]);
			break;
		case "reset":
			reset();
			return updateRoomInfo();
			break;
		case "test":
			return testSearchArray();
			break;
		default:
			return "I'm not sure what you mean.";
	}
};

function searchArray(param, value) {
	return param.value;
}

function test() {
	var a = thisRoom.items.find(searchArray(name, "rock"));
	out(a);
}

// add incrementer!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function getItem(item) {
	//if item is in current room
	var i = 0;
	while (i < thisRoom.items.length) {
		if (thisRoom.items[i].name == item) {
			//add to inventory
			player.inventory[player.inventory.length] = thisRoom.items[i];
			//remove from room
			thisRoom.items.splice(i, 1);
			return "got " + item;
		} else {
			return "You don't see that here";
		}
	}
};

function dropItem(item) {
	if (item == undefined) {
		return "Drop what?";
	}
	//if item is in inventory
	var i = 0;
	while (i < player.inventory.length) {
		
		if (player.inventory[i].name == item) { //this is always returning true!
			//add to current room
			thisRoom.items[thisRoom.items.length] = player.inventory[i];
			//remove from inv
			player.inventory.splice(i, 1);
			return "dropped ";
		}
		i++;
	}
	return "You don't seem to have one of those.";
}

//delete this function (or rewrite?)
function checkContains(location, query){
	var i = 0;
	while (i < location.length) {
		if (location[i].name == query) {
			return true;
		}
	}
	return false;
};

//use to create a vertical list (like in inventory)
function vertList(array) {
	var result = "";
	for (x = 0; x < array.length; x++) {
		result += array[x].name + "<br \>";
	}
	return result;
};

function checkScreen() {
	if (document.documentElement.clientWidth < screen.width) {
		document.getElementById("div").style.width = "auto";
	} else {
		document.getElementById("div").style.width = "50%";
	}
};

function start() {
	var screenWidth = screen.width;
	document.getElementById("title").innerHTML = "\"" + map.name + "\"<br \><br \>";
	out(map.description + "<br \>");
	out(updateRoomInfo());
	//document.getElementById("userInput").size = 3 / screenWidth;
	//document.getElementById("div").size = (screenWidth)/2;
};
checkScreen();
start();