var iFileName = "pub_20160906_SKT.js";
RequiredSheetVersion(12.999);
// This file adds the beasts from the Storm King's Thunder adventure book to MPMB's Character Record Sheet

// Define the source
SourceList.SKT={
	name : "Storm King's Thunder [beasts]",
	abbreviation : "SKT",
	group : "Adventure Books",
	url : "http://dnd.wizards.com/products/tabletop-games/rpg-products/storm-kings-thunder",
	date : "2016/09/06"
};

// Creatures
CreatureList["crag cat"] = {
	name : "Crag Cat",
	source : ["SKT", 240],
	size : 2, //Large
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 13,
	hp : 34,
	hd : [4, 10], //[#, die]
	speed : "40 ft",
	scores : [16, 17, 16, 4, 14, 8], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 4,
		"stealth" : 7
	},
	senses : "Darkvision 60 ft",
	passivePerception : 14,
	languages : "",
	challengeRating : "1",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Claw",
			ability : 1,
			damage : [1, 8, "slashing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "If used after moving 20 ft straight in the same round, see Pounce trait"
		}, {
			name : "Bite",
			ability : 1,
			damage : [1, 10, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "Can be used in combination with claw while pouncing (see Pounce trait)"
		}
	],
	traits : [{
			name : "Nondetection",
			description : "The crag cat can't be targeted or detected by any divination magic or perceived through magical scrying sensors."
		}, {
			name : "Pounce",
			description : "If the crag cat moves at least 20 ft straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the crag cat can make one bite attack against it as a bonus action."
		}, {
			name : "Spell Turning",
			description : "The crag cat has advantage on saving throws against any spell that targets only the cat (not an area). If the crag cat's saving throw succeeds and the spell is of 7th level or lower, the spell has no effect on the crag cat and instead targets the caster."
		}
	],
	wildshapeString : "Darkvision 60 ft| Nondetection: can't be targeted or detected by divination magic or scrying| Pounce: if target is hit with a claw attack after moving 20 ft straight on the same turn, DC 13 Str save or knocked prone and can make one bite attack against it as a bonus action| Spell Turning: adv. on saves vs. spells that targets only me (not area). If successful and spell is 7th level or lower, no effect and instead targets the caster"
};
CreatureList["hulking crab"] = {
	name : "Hulking Crab",
	source : ["SKT", 240],
	size : 1, //Huge
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 17,
	hp : 76,
	hd : [8, 12], //[#, die]
	speed : "20 ft, swim 30 ft",
	scores : [19, 8, 16, 3, 11, 3], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"stealth" : 2
	},
	senses : "Blindsight 30 ft",
	passivePerception : 10,
	languages : "",
	challengeRating : "5",
	proficiencyBonus : 3,
	attacksAction : 2,
	attacks : [{
			name : "Claws",
			ability : 2,
			damage : [1, "", "slashing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "",
			modifiers : [-4, "", false], //[to hit, to damage, add ability to damage] "" means ignore
		}
	],
	traits : [{
			name : "Amphibious",
			description : "The hulking crab can breate air and water."
		}, {
			name : "Shell Camouflage",
			description : "While the hulking crab remains motionless with its eyestalks and pincers tucked close to its body, it resembles a natural formation or a pile of detritus. A creature within 30 feet of it can discern its true nature with a DC 15 Intelligence (Nature) check."
		}
	]
};
CreatureList["tressym"] = {
	name : "Tressym",
	source : ["SKT", 242],
	size : 5, //Tiny
	type : "Beast",
	subtype : "",
	companion : sheetVersion >= 13 ? "familiar_not_al" : "familiar",
	alignment : "Unaligned",
	ac : 12,
	hp : 5,
	hd : [2, 4], //[#, die]
	speed : "40 ft, climb 30 ft, fly 40 ft",
	scores : [3, 15, 10, 11, 12, 12], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 5,
		"stealth" : 4
	},
	damage_immunities : "poison",
	condition_immunities : "poisoned",
	senses : "Darkvision 60 ft; Adv. on Wis (Perception) checks using smell",
	passivePerception : 15,
	languages : "understands Common but can't speak",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Claws",
			ability : 2,
			damage : [1, "", "slashing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "",
			modifiers : [-4, "", false], //[to hit, to damage, add ability to damage] "" means ignore
		}
	],
	traits : [{
			name : "Detect Invisibility",
			description : "Within 60 feet of the tressym, magical invisibility fails to conceal anything from the tressym's sight."
		}, {
			name : "Keen Smell",
			description : "The tressym has advantage on Wisdom (Perception) checks that rely on smell."
		}, {
			name : "Poison Sense",
			description : "The tressym can detect whether a substance is poisonous by taste, touch, or smell."
		}
	],
	wildshapeString : "\u25C6 Languages: understands Common but can't speak.\n\u25C6 Senses: Darkvision 60 ft; Advantage on Wisdom (Perception) checks that rely on smell.\n\u25C6 Detect Invisibility: Magical invisibility fails to conceal anything from sight, out to 60 ft.\n\u25C6 Immune to: poison damage, poisoned condition.\n\u25C6 Poison Sense: Detect whether a substance is poisonous by taste, touch, or smell."
};
