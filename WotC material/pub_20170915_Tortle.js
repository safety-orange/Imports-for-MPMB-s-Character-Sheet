var iFileName = "pub_20170915_Tortle.js";
RequiredSheetVersion(12.999);
// This file adds the Tortle Race from the Tortle Package from DMs Guild to MPMB's Character Record Sheet

// Define the source
SourceList.TP={
	name : "Tortle Package",
	abbreviation : "TP",
	group : "Adventurers League",
	url : "http://www.dmsguild.com/product/221716/",
	date : "2017/09/15"
};

// The Tortle race
RaceList["tortle"] = {
	regExpSearch : /tortle/i,
	name : "Tortle",
	source : ["TP", 4],
	plural : "Tortles",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Aquan"],
	skills : ["Survival"],
	weapons : ["tortle's claws"],
	addarmor : "Tortle's Shell",
	age : " reach adulthood by the age of 15 and live an average of 50 years",
	height : " stand between 5 and 6 feet tall",
	weight : " weigh around 450 lb",
	heightMetric : " stand between 1,5 and 1,8 metres tall",
	weightMetric : " weigh around 200 kg",
	improvements : "Tortle: +2 Strength, +1 Wisdom;",
	scores : [2, 0, 0, 0, 1, 0],
	features : {
		"shell defense" : {
			name : "Shell Defense",
			minlevel : 1,
			action : ["action", ""]
		}
	},
	trait : "Tortle (+2 Strength, +1 Wisdom)\nClaws: I can use my claws to make unarmed strikes dealing 1d4 slashing damage.\nHold Breath: I can hold my breath for up to 1 hour at a time.\nNatural Armor: I have a base AC of 17, but I can't add my Dex to it or wear armour.\nShell Defense: As an action, I can withdraw into my shell and gain +4 AC and adv. on Str and Con saves, but I count as prone, have speed 0, have disadv. on Dex saves, and can't take reactions. The only action I can take is a bonus action to emerge from the shell."
};

// Tortle's shell armour
ArmourList["tortle shell"] = {
	regExpSearch : /^(?=.*tortle)(?=.*shell).*$/i,
	name : "Tortle's Shell",
	source : ["TP", 4],
	type : "",
	ac : 17,
	dex : -10,
	stealthdis : false,
	strReq : 0
};

// Tortle's claws
WeaponsList["claws"] = {
	regExpSearch : /^(?=.*\b(sharp|cat|dragon|retractable|tortle))(?=.*\bclaws?\b).*$/i,
	name : "Sharp Claws",
	source : [["V", 115], ["UA:FR", 2], ["TP", 4], ["X", 74]],
	ability : 1,
	type : "Natural",
	damage : [1, 4, "slashing"],
	range : "Melee",
	description : "",
	abilitytodamage : true,
	monkweapon : true
};
