var iFileName = "ua_20171113_Elf-Subraces.js";
RequiredSheetVersion(13);
// This file adds the content from the Unearthed Arcana: Elf Subraces article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:ES"] = {
	name : "Unearthed Arcana: Elf Subraces",
	abbreviation : "UA:ES",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2017/dnd/downloads/UA-ElfSubraces.pdf",
	date : "2017/11/13"
};

// Adds 4 new subraces for the elf
RaceList["avariel-ua"] = {
	regExpSearch : /^(?!.*half)((?=.*avariel)|((?=.*\b(elfs?|elves|elvish|elven)\b)(?=.*\b(winged?|wings?|flying|air)\b))).*$/i,
	name : "Avariel",
	sortname : "Elf, Winged (Avariel)",
	source : ["UA:ES", 1],
	plural : "Avariel",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		fly : { spd : 30, enc : 0 }
	},
	languageProfs : ["Common", "Elvish", "Auran"],
	vision : [["Darkvision", 60]],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
	skills : ["Perception"],
	age : " typically claim adulthood around age 100 and can live to be 750 years old",
	height : " range from 5 to over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 115 lb (90 + 2d10 \xD7 1d4 lb)",
	heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 55 kg (40 + 5d10 \xD7 2d4 / 10 kg)",
	scores : [0, 2, 0, 0, 0, 0],
	trait : "Avariel (+2 Dexterity)\nTrance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. While meditating, I can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, I gain the same benefit that a human does from 8 hours of sleep, thus needing only 4 hours for a long rest.\nFlight: I have a flying speed of 30 feet. To use this speed, I can't be wearing medium or heavy armor."
};
RaceList["grugach elf-ua"] = {
	regExpSearch : /^(?!.*half)((?=.*grugach)|((?=.*\b(elfs?|elves|elvish|elven)\b)(?=.*\b(wilds?|wilderness)\b))).*$/i,
	name : "Grugach",
	sortname : "Elf, Wild (Grugach)",
	source : ["UA:ES", 1],
	plural : "Grugach",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Elvish", "Sylvan"],
	vision : [["Darkvision", 60]],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
	weaponProfs : [false, false, ["spear", "longbow", "shortbow", "net"]],
	skills : ["Perception"],
	age : " typically claim adulthood around age 100 and can live to be 750 years old",
	height : " stand around 5 feet tall (4'5\" + 2d6\")",
	weight : " weigh around 100 lb (75 + 2d6 \xD7 1d6 lb)",
	heightMetric : " range from well under to well over 1,5 metres tall (135 + 5d6 cm)",
	weightMetric : " weigh around 45 kg (35 + 5d6 \xD7 2d6 / 10 kg)",
	scores : [1, 2, 0, 0, 0, 0],
	trait : "Grugach (+1 Strength, +2 Dexterity)\nTrance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. While meditating, I can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, I gain the same benefit that a human does from 8 hours of sleep, thus needing only 4 hours for a long rest.\nCantrip: I know one cantrip of my choice from the druid spell list. Wisdom is my spellcasting ability for it.",
	spellcastingAbility : 5,
	spellcastingBonus : {
		name : "Grugach Cantrip",
		"class" : "druid",
		level : [0, 0],
		firstCol : 'atwill'
	},
	eval : function () {
		RemoveLangTool('language', 'Common');
	}
};
// Edit the Wood Elf PHB entry, if available, to not match on Grugach
if (RaceList["wood elf"]) {
	RaceList["wood elf"].regExpSearch = RaceList["wood elf"].regExpSearch.replace(/grugach\|?|wilds\?\|?/g, "");
}
// dupl_start
if (!SourceList.MToF) {
	RaceList["sea elf"] = {
		regExpSearch : /^(?!.*half)((?=.*\b(elfs?|elves|elvish|elven)\b)(?=.*\b(seas?|oceans?|water)\b)).*$/i,
		name : "Sea elf",
		sortname : "Elf, Sea",
		source : [["MToF", 62], ["UA:ES", 1]],
		plural : "Sea elves",
		size : 3,
		speed : {
			walk : { spd : 30, enc : 20 },
			swim : { spd : 30, enc : 20 }
		},
		weaponProfs : [false, false, ["spear", "trident", "light crossbow", "net"]],
		languageProfs : ["Common", "Elvish", "Aquan"],
		vision : [["Darkvision", 60]],
		savetxt : {
			text : ["Magic can't put me to sleep"],
			adv_vs : ["charmed"]
		},
		skills : ["Perception"],
		age : " typically claim adulthood around age 100 and can live to be 750 years old",
		height : " range from under 5 to almost 6 feet tall (4'6\" + 2d8\")",
		weight : " weigh around 115 lb (90 + 2d8 \xD7 1d4 lb)",
		heightMetric : " range from under 1,5 to almost 1,8 metres tall (140 + 5d8 cm)",
		weightMetric : " weigh around 52 kg (40 + 5d8 \xD7 2d4 / 10 kg)",
		scores : [0, 2, 1, 0, 0, 0],
		trait : "Sea Elf (+2 Dexterity, +1 Constitution)" + desc([
			"Trance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. While meditating, I can dream after a fashion. After resting in this way, I gain the same benefit that a human does from 8 hours of sleep, thus needing only 4 hours for a long rest.",
			"Child of the Sea. I have 30 ft swimming speed and can breathe air and water.",
			"Friend of the Sea: Through sounds and gestures, I can communicate simple ideas with any beast that has an inborn swimming speed."
		]) // edited to be the same as in MToF instead of "Small or smaller beasts that have an inborn swimming speed."
	};
} // dupl_end
RaceList["shadar-kai elf-ua"] = {
	regExpSearch : /^(?!.*half)((?=.*shadar-kai)|((?=.*\b(elfs?|elves|elvish|elven)\b)(?=.*\b(shadows?|shadowfell)\b))).*$/i,
	name : "Shadar-kai",
	sortname : "Elf, Shadow (Shadar-kai)",
	source : ["UA:ES", 2],
	plural : "Shadar-kai",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Elvish"],
	vision : [["Darkvision", 60]],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
	skills : ["Perception"],
	age : " typically claim adulthood around age 100 and can live to be 750 years old",
	height : " range from under 5 to over 6 feet tall (4'8\" + 2d8\")",
	weight : " weigh around 115 lb (90 + 2d8 \xD7 1d4 lb)",
	heightMetric : " range from under 1,5 to over 1,8 metres tall (145 + 5d8 cm)",
	weightMetric : " weigh around 52 kg (40 + 5d8 \xD7 2d4 / 10 kg)",
	scores : [0, 2, 0, 0, 0, 1],
	trait : "Shadar-kai (+2 Dexterity, +1 Charisma)\nTrance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. This gives the same benefit as a human gets from 8 hours of sleep (long rest takes only 4 hours).\nBlessing of the Raven Queen: Once per short rest, as a bonus action, I can magically teleport up to 15 ft to an unoccupied space I can see, and, until the start of my next turn, I have resistance to all damage and appear translucent." + (typePF ? "\n" : " ") + "Cantrip: I know one cantrip: Chill Touch, Spare the Dying, or Thaumaturgy. Charisma is my spellcasting ability for it.",
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Shadar-kai Cantrip",
		spells : ["chill touch", "spare the dying", "thaumaturgy"],
		firstCol : 'atwill'
	},
	features : {
		"blessing of the raven queen" : {
			name : "Blessing of the Raven Queen",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			action : ["bonus action", ""]
		}
	}
};
