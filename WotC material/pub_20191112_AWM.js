var iFileName = "pub_20191112_Adventure-with-Muk.js";
RequiredSheetVersion("13.0.8");
// This file adds the Dankwood Goblin race from the Adventure with Muk from Extra Life to MPMB's Character Record Sheet
// Be aware that this race is not legal in adventurers league!

SourceList["AwM"] = {
	name : "Adventure with Muk",
	abbreviation : "AwM",
	group : "Extra Life",
	url : "https://dnd.wizards.com/products/tabletop-games/digital-only-rpg-products/adventure-muk",
	date : "2019/11/12",
	defaultExcluded : true
};

RaceList["dankwood goblin"] = {
	regExpSearch : /^(?=.*dankwood)(?=.*\bgoblins?\b)(?!.*(hobgoblin|bugbear)).*$/i,
	name : "Dankwood goblin",
	sortname : "Goblin, Dankwood",
	source : [["AwM", 35]],
	plural : "Dankwood goblins",
	size : 4,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Goblin"],
	vision : [["Darkvision", 60]],
	age : " reach adulthood at age 8 and live up to 60 years",
	height : " are between 3 and a half and 4 feet tall (3'5\" + 2d4\")",
	weight : " weigh between 40 and 70 lb (35 + 2d4 \xD7 1 lb)",
	heightMetric : " are between 100 and 120 cm tall (100 + 5d4 cm)",
	weightMetric : " weigh between 20 and 30 kg (17 + 5d4 \xD7 2 / 10 kg)",
	scores : [0, 2, 0, 0, 1, 0],
	action : [["bonus action", "Nimble Escape (disengage/hide)"]],
	trait : "Dankwood Goblin (+2 Dexterity, +1 Wisdom)"+
	"\n   Speak with Small Beasts: Through sounds and gestures, I can communicate simple ideas with Small or smaller beasts. Dankwood goblins love animals and often keep squirrels, badgers, rabbits, moles, woodpeckers, and other creatures as beloved pets."+
	"\n   Nimble Escape: As a bonus action, I can take the Disengage or Hide action."
};
