var iFileName = "ua_20150504_Waterborne-Adventures.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Unearthed Arcana: Waterborne Adventures article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:WA"] = {
	name : "Unearthed Arcana: Waterborne Adventures",
	abbreviation : "UA:WA",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2015/downloads/dnd/UA_Waterborne_v3.pdf",
	date : "2015/05/04"
};

// New Fighting Style
AddFightingStyle(["fighter", "ranger", "paladin"], "Mariner", {
	name : "Mariner Fighting Style",
	source : ["UA:WA", 3],
	description : "\n   " + "While not wearing heavy armor or using a shield, I gain +1 AC and swim/climb speed" + "\n   " + "The swimming and climbing speeds are equal to my current walking speed",
	speed : {
		climb : { spd : "walk", enc : "walk" },
		swim : { spd : "walk", enc : "walk" }
	},
	eval : "AddACMisc(1, 'Mariner Fighting Style', 'When not wearing heavy armor or using a shield, the class feature Mariner Fighting Style gives a +1 bonus to AC', \"ACshield || tDoc.getField('Heavy Armor').isBoxChecked(0)\")",
	removeeval : "AddACMisc(0, 'Mariner Fighting Style', 'When not wearing heavy armor or using a shield, the class feature Mariner Fighting Style gives a +1 bonus to AC')"
});

// Add the Minotaur (Krynn) race and its three variants
RaceList["minotaur"] = {
	regExpSearch : /minotaur/i,
	name : "Minotaur",
	source : ["UA:WA", 1],
	plural : "Minotaurs",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common"],
	toolProfs : ["Navigator's tools", "Vehicles (water)"],
	weapons : ["Minotaur Horns"],
	age : " reach adulthood around age 17 and live up to 150 years",
	height : " are well over 6 feet tall",
	weight : " weigh around 300 lb",
	heightMetric : " are well over 1,8 metres tall",
	weightMetric : " weigh around 135 kg",
	improvements : "Minotaur: +1 Strength, and either +1 Intelligence, +1 Wisdom, or another +1 Strength;",
	scores : [1, 0, 0, 0, 0, 0],
	trait : "Minotaur (+1 Strength, and either +1 Int, Wis, or Str) use \"Racial Options\" button\nHorns: I am proficient with my horns, a 1d10 piercing damage melee weapon that grant me advantage on shoving a creature, but not to avoid being shoved myself.\nGoring Rush: When taking a Dash action, I can make a horns attack as a bonus action.\nHammering Horns: When taking a melee Attack action, I can attempt to shove with my horns as a bonus action. I cannot use this to knock a creature prone.\nLabyrinthine Recall: I can perfectly recall any path I have travelled.",
	features : {
		"goring rush" : {
			name : "Goring Rush",
			minlevel : 1,
			action : ["bonus action", " (with Dash)"]
		},
		"hammering horns" : {
			name : "Hammering Horns",
			minlevel : 1,
			action : ["bonus action", " (after hit)"]
		}
	}
};
AddRacialVariant("minotaur", "cunning", {
	regExpSearch : /(cunning|wisdom)/i,
	name : "Minotaur [Cunning]",
	source : ["UA:WA", 2],
	improvements : "Minotaur [cunning]: +1 Strength, +1 Wisdom;",
	scores : [1, 0, 0, 0, 1, 0],
	trait : "Minotaur [cunning] (+1 Strength, +1 Wisdom)\nHorns: I am proficient with my horns, a 1d10 piercing damage melee weapon that grant me advantage on shoving a creature, but not to avoid being shoved myself.\nGoring Rush: When taking a Dash action, I can make a horns attack as a bonus action.\nHammering Horns: When taking a melee Attack action, I can attempt to shove with my horns as a bonus action. I cannot use this to knock a creature prone.\nLabyrinthine Recall: I can perfectly recall any path I have travelled."
});
AddRacialVariant("minotaur", "intellect", {
	regExpSearch : /(intellect|intelligence)/i,
	name : "Minotaur [Intellect]",
	source : ["UA:WA", 2],
	improvements : "Minotaur [intellect]: +1 Strength, +1 Intelligence;",
	scores : [1, 0, 0, 1, 0, 0],
	trait : "Minotaur [intellect] (+1 Strength, +1 Intelligence)\nHorns: I am proficient with my horns, a 1d10 piercing damage melee weapon that grant me advantage on shoving a creature, but not to avoid being shoved myself.\nGoring Rush: When taking a Dash action, I can make a horns attack as a bonus action.\nHammering Horns: When taking a melee Attack action, I can attempt to shove with my horns as a bonus action. I cannot use this to knock a creature prone.\nLabyrinthine Recall: I can perfectly recall any path I have travelled."
});
AddRacialVariant("minotaur", "strength", {
	regExpSearch : /(strength|strong|\bmight\b)/i,
	name : "Minotaur [Strength]",
	source : ["UA:WA", 2],
	improvements : "Minotaur [strength]: +2 Strength;",
	scores : [1, 0, 0, 0, 0, 0],
	trait : "Minotaur [strength] (+2 Strength)\nHorns: I am proficient with my horns, a 1d10 piercing damage melee weapon that grant me advantage on shoving a creature, but not to avoid being shoved myself.\nGoring Rush: When taking a Dash action, I can make a horns attack as a bonus action.\nHammering Horns: When taking a melee Attack action, I can attempt to shove with my horns as a bonus action. I cannot use this to knock a creature prone.\nLabyrinthine Recall: I can perfectly recall any path I have travelled."
});

// Minotaur weapon
WeaponsList["horns-uawa"] = {
	regExpSearch : /^(?=.*minotaur)(?=.*\bhorns?\b).*$/i,
	name : "Minotaur Horns",
	source : ["UA:WA", 1],
	ability : 1,
	type : "Natural",
	damage : [1, 10, "piercing"],
	range : "Melee",
	description : "Advantage on all checks made to shove a creature, but not to avoid being shoved myself",
	abilitytodamage : true
};
