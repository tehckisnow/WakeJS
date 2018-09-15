//map is an object that holds name, description, and an array of rooms and their data
var map = {
	//name: title of game (include author optionally?)
	name: "Default Game",
	//description: opening text for the game
	description: "This is the opening text",
	room: [
		{ //Room 0
			name: "default room",
			briefDesc: "This is a default room.",
			description: "This is a default room. If you see this, something has gone wrong.",
			exits: [],
			items: []
		},
		
		{ //Room 1
			name: "first room",
			briefDesc: "This is a default room.",
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
				description: "a small rock.",
				retain: true //does the item remain in inv upon use?
				}
			]
		},
		
		{ //Room 2
			name: "second room", 
			briefDesc: "This is a default room.",
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
			items: [{
				name: "fountain",
				description: "a beautiful fountain covered in water.",
				obtainable: false
				}]
		},
		
		{ //Room 3
			name: "third room",
			briefDesc: "This is a default room.",
			description: "This is the third room.",
			exits: [
				{
				name: "north",
				destination: 2
				},
				{
				name: "east",
				destination: 4,
				locked: true,
				keyID: 1203
				}
			],
			items: [
				{
				name: "key",
				description: "a small silver key.",
				id: 1203
				},
				{
				name: "pen",
				description: "a small silver writing pen."
				}
			]
		}, 
		
		{//Room 4
			name: "secret room",
			briefDesc: "This is a default room.",
			description: "Congratulations, you've found the secret room!",
			exits: [
				{
				name: "west",
				destination: 3
				}
				],
				items: []
		}
		
	] //room list
} //map