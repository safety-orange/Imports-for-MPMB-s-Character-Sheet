var iFileName = "pub_20150915_OotA.js";
RequiredSheetVersion(12.999);
// This file adds all the beasts and background features from the Out of the Abyss adventure book to MPMB's Character Record Sheet

// Define the source
SourceList.OotA={
	name : "Out of the Abyss [beasts, background features]",
	abbreviation : "OotA",
	group : "Adventure Books",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/outoftheabyss",
	date : "2015/09/15"
};

// Background features
BackgroundFeatureList["deep delver"] = {
	description : "I have a knack for finding my way in the Underdark, recalling all twists and turns with ease, such that I can always retrace my steps underground. I can determine which sources of food and water are safe to consume. I can always find sufficient food and water for myself and up to five other people in the Underdark, if sustenance is available in the area.",
	source : [["OotA", 221], ["ALbackground", 0]]
};
BackgroundFeatureList["underdark experience"] = {
	description : "I'm no casual visitor to the Underdark, but have spent considerable time there learning its ways. I'm familiar with the various races, civilizations, settlements, and travel routes of the Underdark. If I fail an Intelligence check to recall some piece of Underdark lore, I know a source I can consult for the answer unless the DM rules that the lore is unknown.",
	source : [["OotA", 221], ["ALbackground", 0]]
};

// Creatures
CreatureList["steeder"] = { // "Steeder, Female" entry so that just "steeder" also matches this entry
	name : "Steeder, Female",
	source : ["OotA", 231],
	size : 2, //Large
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 14,
	hp : 30,
	hd : [4, 10], //[#, die]
	speed : "30 ft, climb 30 ft",
	scores : [15, 16, 14, 2, 10, 3], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"stealth" : 7
	},
	senses : "Darkvision 120 ft",
	passivePerception : 10,
	languages : "",
	challengeRating : "1",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 2,
			damage : [1, 8, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "Target also takes 2d8 acid damage, half on a DC 12 Constitution saving throw"
		}, {
			name : "Sticky Leg",
			ability : 2,
			damage : ["Grappled", "", ""], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "Medium or smaller is stuck to the steeder's leg and grappled (escape DC 12); Can't use again until grapple ends",
			modifiers : ["", "", false] //[to hit, to damage, add ability to damage] "" means ignore
		}
	],
	traits : [{
			name : "Spider Climb",
			description : "The steeder can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
		}, {
			name : "Leap",
			description : "The steeder can expend all its movement on its turn to jump up to 90 ft vertically or horizontally, provided that its speed is at least 30 feet."
		}
	]
};
CreatureList["steeder, male"] = {
	name : "Steeder, Male",
	source : ["OotA", 231],
	size : 3, //Medium
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 12,
	hp : 13,
	hd : [2, 8], //[#, die]
	speed : "30 ft, climb 30 ft",
	scores : [15, 12, 14, 2, 10, 3], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"stealth" : 5
	},
	senses : "Darkvision 120 ft",
	passivePerception : 10,
	languages : "",
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 1,
			damage : [1, 8, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "Target also takes 1d8 acid damage, half on a DC 12 Constitution saving throw"
		}, {
			name : "Sticky Leg",
			ability : 1,
			damage : ["Grappled", "", ""], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "Small or smaller is stuck to the steeder's leg and grappled (escape DC 12); Can't use again until grapple ends",
			modifiers : ["", "", false] //[to hit, to damage, add ability to damage] "" means ignore
		}
	],
	traits : [{
			name : "Spider Climb",
			description : "The steeder can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
		}, {
			name : "Leap",
			description : "The steeder can expend all its movement on its turn to jump up to 60 ft vertically or horizontally, provided that its speed is at least 30 feet."
		}
	]
};
