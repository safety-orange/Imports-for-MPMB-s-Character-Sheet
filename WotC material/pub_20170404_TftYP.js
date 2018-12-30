var iFileName = "pub_20170404_TftYP.js";
RequiredSheetVersion(12.999);
// This file adds the beasts from the Tales from the Yawning Portal adventure book to MPMB's Character Record Sheet

// Define the source
SourceList.TftYP={
	name : "Tales from the Yawning Portal [beasts]",
	abbreviation : "TftYP",
	group : "Adventure Books",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/tales-yawning-portal",
	date : "2017/04/04"
};

// Creatures
CreatureList["giant crayfish"] = {
	name : "Giant Crayfish",
	source : ["TftYP", 235],
	size : 2, //Large
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 15,
	hp : 45,
	hd : [7, 10], //[#, die]
	speed : "30 ft, swim 30 ft",
	scores : [15, 13, 13, 1, 9, 3], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"stealth" : 3
	},
	senses : "Blindsight 30 ft",
	passivePerception : 9,
	languages : "",
	challengeRating : "2",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
			name : "Claw",
			ability : 1,
			damage : [1, 10, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "Target grappled on hit (escape DC 12); 2 claw attacks as Attack action, if not grappling with claw"
		}
	],
	traits : [{
			name : "Amphibious",
			description : "The giant crayfish can breathe air and water."
		}
	]
};
CreatureList["giant ice toad"] = {
	name : "Giant Ice Toad",
	source : ["TftYP", 235],
	size : 2, //Large
	type : "Monstrosity",
	subtype : "",
	alignment : "Unaligned",
	ac : 14,
	hp : 52,
	hd : [7, 10], //[#, die]
	speed : "30 ft",
	scores : [16, 13, 14, 8, 10, 6], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	damage_immunities : "cold",
	senses : "Darkvision 60 ft",
	passivePerception : 10,
	languages : "Ice Toad",
	challengeRating : "3",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 1,
			damage : [2, 6, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "Target is grappled and restrained (escape DC 13); Can't use bite again until grapple ends"
		}
	],
	traits : [{
			name : "Amphibious",
			description : "The toad can breathe air and water"
		}, {
			name : "Cold Aura",
			description : "A creature that starts its turn within 10 feet of the toad takes 5 (1d10) cold damage."
		}, {
			name : "Standing Leap",
			description : "The toad's long jump is up to 20 ft and its high jump is up to 10 ft, with or without a running start."
		}
	],
	features : [{
			name : "Swallow",
			description : "The toad can make a bite attack against a Medium or smaller target it is grappling. If it hits, the target takes bite damage, is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the toad, and it takes 10 (3d6) acid damage and 11 (2d6) cold damage at the start of each of the toad's turns. The toad can have only one target swallowed at a time.\nIf the toad dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 feet of movement, exiting prone."
		}
	],
	wildshapeString : "Darkvision 60 ft| Cold Aura: Any within 5 ft at start of their turn take 1d10 cold damage| Amphibious: breathe air and water| Standing Leap: long jump 20 ft and high jump 10 ft, regardless of start| Swallow: if bite attack hits Medium or smaller being grappling, it takes bite damageand is swallowed: blinded, restrained, total cover, takes 3d6 acid and 2d6 cold damage at the start of each of the toad's turns; Only 1 swallowed at a time."
};
CreatureList["giant lightning eel"] = {
	name : "Giant Lightning Eel",
	source : ["TftYP", 236],
	size : 2, //Large
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 13,
	hp : 42,
	hd : [5, 10], //[#, die]
	speed : "5 ft, swim 30 ft",
	scores : [11, 17, 16, 2, 12, 3], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	damage_resistances : "lightning",
	senses : "Blindsight 60 ft",
	passivePerception : 11,
	languages : "",
	challengeRating : "3",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
			name : "Bite",
			ability : 1,
			damage : [2, 6, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "Two bite attacks as an Attack action; +1d8 lightning damage on a hit"
		}, {
			name : "Lightning Jolt (Recharge 5-6)",
			ability : 3,
			damage : [3, 8, "lightning"], //[#, die, type] "" for die is allowed
			range : "Out/in 5/15 ft",
			dc : true,
			description : "Out water: 5 ft, 1 crea; In water: all in 15 ft; Con save: fail― stunned until eel's next turn end, success― half damage",
			modifiers : [-1, "", false], //[to hit, to damage, add ability to damage] "" means ignore
			tooltip : "One creature the eel touches within 5 feet of it outside water, or each creature within 15 feet of it in a body of water, must make a DC 12 Constitution saving throw. On failed save, a target takes 13 (3d8) lightning damage. If the target takes any of this damage, the target is stunned until the end of the eel's next turn. On a successful save, a target takes half as much damage and isn't stunned"
		}
	],
	traits : [{
			name : "Water Breathing",
			description : "The eel can breathe only underwater."
		}
	],
	actions : [{
			name : "Lightning Jolt (Recharge 5-6)",
			description : "See Attack. One creature the eel touches within 5 feet of it outside water, or each creature within 15 feet of it in a body of water, must make a DC 12 Constitution saving throw. On failed save, a target takes 13 (3d8) lightning damage. If the target takes any of this damage, the target is stunned until the end of the eel's next turn. On a successful save, a target takes half as much damage and isn't stunned"
		}
	]
};
CreatureList["giant subterranean lizard"] = {
	name : "Giant Subterranean Lizard",
	source : ["TftYP", 236],
	size : 1, //Huge
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 14,
	hp : 66,
	hd : [7, 12], //[#, die]
	speed : "30 ft, swim 50 ft",
	scores : [21, 9, 17, 2, 10, 7], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"stealth" : 3
	},
	senses : "",
	passivePerception : 10,
	languages : "",
	challengeRating : "4",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
			name : "Bite",
			ability : 1,
			damage : [2, 10, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "1 bite \u0026 1 tail attack as Attack action; Target grappled \u0026 restrained (escape DC 15); Can't use bite until grapple ends"
		}, {
			name : "Tail",
			ability : 1,
			damage : [2, 6, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (10 ft)",
			description : "1 bite \u0026 1 tail attack as Attack action; Target DC 15 Str save or knocked prone"
		}
	],
	traits : [{
			name : "Swallow",
			description : "The lizard can make one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target takes bite damage, is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the lizard, and it takes 10 (3d6) acid damage at the start of each of the lizard's turns. The lizard can have only one target swallowed at a time.\nIf the lizard dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 10 feet of movement, exiting prone."
		}
	],
	wildshapeString : "\u25C6 Swallow: If a bite attack hits a Small or smaller target that is currently being grappled by the lizard, the target is swallowed, ending the grapple. While swallowed, it is blinded, restrained, has total cover, and takes 3d4 acid damage at the start of each of the lizard's turns; The lizard can have only 1 swallowed at a time. If the lizard dies, the swallowed creature is no longer restrained and can escape using 10 ft movement."
};
