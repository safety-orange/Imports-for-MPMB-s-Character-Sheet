var iFileName = "ua_20180514_Centaur-and-Minotaur.js";
RequiredSheetVersion(13);
// This file adds the content from the Unearthed Arcana: Centaur and Minotaur article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:CnM"] = {
	name : "Unearthed Arcana: Centaur and Minotaur",
	abbreviation : "UA:CnM",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2018/dnd/downloads/UA-Centaur.pdf",
	date : "2018/05/14"
};

// Add the Centaur race
RaceList["centaur"] = {
	regExpSearch : /centaur/i,
	name : "Centaur",
	sortname : "Centaur",
	source : ["UA:CnM", 1],
	plural : "Centaurs",
	size : 3,
	speed : {
		walk : { spd : 40, enc : 30 }
	},
	languageProfs : ["Common", "Sylvan"],
	weaponOptions : {
		regExpSearch : /\b(hoofs?|hooves)\b/i,
		name : "Hooves",
		source : ["UA:CnM", 2],
		ability : 1,
		type : "Natural",
		damage : [1, 6, "bludgeoning"],
		range : "Melee",
		abilitytodamage : true
	},
	weaponsAdd : ["Hooves"],
	skills : ["Survival"],
	age : " reach adulthood in their late teens and live around 100 years",
	height : " stand between 7 and 8 feet tall (front hooves to their crowns) and 6 to 8 feet long (from their chest to the back of their rumps)", // from 3.5e Races of Faerun
	weight : " weigh anywhere from 950 to 1200 lb", // from 3.5e Races of Faerun
	heightMetric : " stand between 2,1 and 2,4 metres tall (front hooves to their crowns) and 1,8 to 2,4 metres long (from their chests to the back of their rumps)",
	weightMetric : " weigh anywhere from 430 to 550 kg",
	scores : [2, 0, 0, 0, 1, 0],
	trait : "Centaur (+2 Strength +1 Wisdom)" + desc([
		"Hooves: I can use my hooves in melee (1d6 bludgeoning damage).",
		"Charge: Once per short rest, if I move 20 ft straight toward a creature and then hit it with a melee weapon attack on the same turn, I can roll the weapon's damage dice twice.",
		"Equine Build: I count as one size larger for my carrying capacity. While climbing, 1 ft of movement costs me 5 ft. A medium or smaller creature can ride me as a mount.",
		"Hybrid Nature: I am affected by effects that work on either humanoids or monstrosities."
	]),
	features : {
		"charge" : {
			name : "Charge",
			minlevel : 1,
			usages : 1,
			recovery : "short rest"
		}
	},
	eval : "tDoc.getField('Carrying Capacity Multiplier').value *= 2;",
	removeeval : "tDoc.getField('Carrying Capacity Multiplier').value /= 2;"
};

// Add the Minotaur race
RaceList["minotaur-uacnm"] = {
	regExpSearch : /minotaur/i,
	name : "Minotaur" + (tDoc.info.SheetVersion < 13 ? " " : ""),
	sortname : "Minotaur",
	source : ["UA:CnM", 2],
	plural : "Minotaurs",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Minotaur"],
	weaponOptions : {
		regExpSearch : /\bhorns?\b/i,
		name : "Horns",
		source : ["UA:CnM", 2],
		ability : 1,
		type : "Natural",
		damage : [1, 6, "piercing"],
		range : "Melee",
		description : "One horns attack as a bonus action if taking the Dash action",
		abilitytodamage : true
	},
	weaponsAdd : ["Horns"],
	skills : ["Intimidation"],
	age : " reach adulthood around age 17 and live up to 150 years",
	height : " are well over 6 feet tall",
	weight : " weigh around 300 lb",
	heightMetric : " are well over 1,8 metres tall",
	weightMetric : " weigh around 135 kg",
	scores : [2, 0, 1, 0, 0, 0],
	abilitySave : 1,
	trait : "Minotaur (+2 Strength +1 Constitution)" + desc([
		"Horns: I have horns that I can use in melee (1d6 piercing damage).",
		"Goring Rush: When taking a Dash action, I can make a horns attack as a bonus action.",
		"Hammering Horns: As a reaction after I hit a melee attack during my Attack action, I can shove that target with my horns, if it is no more than one size larger than me. It must make a Str save (DC 8 + Str mod + prof bonus) or be pushed up to 5 ft away from me.",
		"Hybrid Nature: I am affected by effects that work on either humanoids or monstrosities."
	]),
	features : {
		"goring rush" : {
			name : "Goring Rush",
			minlevel : 1,
			action : ["bonus action", " (with Dash)"]
		},
		"hammering horns" : {
			name : "Hammering Horns",
			minlevel : 1,
			action : ["reaction", " (after hit)"]
		}
	}
};
