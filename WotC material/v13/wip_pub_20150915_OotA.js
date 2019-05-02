var iFileName = "pub_20150915_OotA.js";
RequiredSheetVersion(13);
// This file adds all the beasts and background features from the Out of the Abyss adventure book to MPMB's Character Record Sheet

// Define the source
SourceList.OotA={
	name : "Out of the Abyss [beasts, background features, items]",
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

// Magic Items
MagicItemsList["dawnbringer"] = {
	name : "Dawnbringer",
	source : ["OotA", 222],
	type : "weapon (longsword)",
	rarity : "legendary",
	storyItemAL : true,
	prerequisite : "Requires attunement by a creature of non-evil alignment",
	description : "",
	descriptionFull : "Lost for ages in the Underdark, Dawnbringer appears to be a gilded longsword hilt. While grasping the hilt, you can use a bonus action to make a blade of pure radiance spring from the hilt, or cause the blade to disappear. While the blade exists, this magic longsword has the finesse property. If you are proficient with shortswords or longswords, you are proficient with Dawnbringer.\n   You gain a +2 bonus to attack and damage rolls made with this weapon, which deals radiant damage instead of slashing damage. When you hit an undead with it, that target takes an extra 1d8 radiant damage.\n   The sword's luminous blade emits bright light in a 15-foot radius and dim light for an additional 15 feet. The light is sunlight. While the blade persists, you can use an action to expand or reduce its radius of bright and dim light by 5 feet each, to a maximum of 30 feet each or a minimum of 10 feet each.\n   While holding the weapon, you can use an action to touch a creature with the blade and cast Lesser Restoration on that creature. Once used, this ability can't be used again until the next dawn.\n   " + toUni("Sentience") + ". Dawnbringer is a sentient neutral good weapon with an Intelligence of 12, a Wisdom of 15, and a Charisma of 14. It has hearing and darkvision out to a range of 120 feet.\n   The sword can speak, read, and understand Common, and it can communicate with its wielder telepathically. Its voice is kind and feminine. It knows every language you know while attuned to it.\n   " + toUni("Personality") + ". Forged by ancient sun worshippers, Dawnbringer is meant to bring light into darkness and to fight creatures of darkness. It is kind and compassionate to those in need, but fierce and destructive to its enemies.\n   Long years lost in darkness have made Dawnbringer frightened of both the dark and abandonment. It prefers that its blade always be present and shedding light in areas of darkness, and it strongly resists being parted from its wielder for any length of time." +
	// Addition from Adventurers League Content Catalogue 8.07
	"\n   If an evil creature attempts to attune to the weapon, it not only finds it impossible, but Dawnbringer attempts to take control of its wielder (DC 14 Charisma saving throw). If the weapon is successful, it insists on being taken to the surface or willingly given to the first creature it comes across that is not a member of a race indigenous to the Underdark. Dawnbringer will not allow its relinquishment to a creature that it or its wielder knows is evil, and instead compels its wielder to find a new recipient.",
	attunement : true,
	weight : 3
}
MagicItemsList["piwafwi (cloak of elvenkind)"] = {
	name : "Piwafwi",
	source : ["OotA", 222],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "F",
	description : "",
	descriptionFull : "This dark spider-silk cloak is made by drow. It is a cloak of elvenkind. It loses its magic if exposed to sunlight for 1 hour without interruption.\n   While you wear this cloak with its hood up, Wisdom (Perception) checks made to see you have disadvantage. and you have advantage on Dexterity (Stealth) checks made to hide, as the cloak's color shifts to camouflage you. Pulling the hood up or down requires an action.",
	attunement : true
}
MagicItemsList["piwafwi of fire resistance (cloak of elvenkind)"] = {
	name : "Piwafwi of Fire Resistance",
	source : ["OotA", 222],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "G",
	description : "",
	descriptionFull : "This dark spider-silk cloak is made by drow. It is a cloak of elvenkind. It also grants resistance to fire damage while you wear it. It loses its magic if exposed to sunlight for 1 hour without interruption.\n   While you wear this cloak with its hood up, Wisdom (Perception) checks made to see you have disadvantage. and you have advantage on Dexterity (Stealth) checks made to hide, as the cloak's color shifts to camouflage you. Pulling the hood up or down requires an action.",
	attunement : true
}
MagicItemsList["spell gem"] = { // not legal in AL
	name : "Spell Gem",
	type : "wondrous item",
	notLegalAL : true,
	description : "",
	descriptionFull : "A spell gem can contain one spell from any class's spell list. You become aware of the spell when you learn the gem's properties. While holding the gem, you can cast the spell from it as an action if you know the spell or if the spell is on your class's spell list. Doing so doesn't require any components, and doesn't require attunement. The spell then disappears from the gem.\n   If the spell is of a higher level than you an normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC equals 10 + the spell's level. On a failed check, the spell disappears from the gem with no other effect\n   Each spell gem has a maximum level for the spell it can store. The spell level determines the gem's rarity, the stored spell's saving throw DC, and attack bonus, as shown int he table below.\n   You can imbue the gem with a spell if you're attuned to it and it's empty. To do so, you cast the spell while holding the gem. The spell is stored in the gem instead of having any effect. Casting the spell must require either 1 action or 1 minute or longer, and the spell's level must be no higher than the gem's maximum. If the spell belongs to the school of abjuration and requires material components that are consumed, you must provide them, but they can be worth half as much as normal.\n   Once imbued with a spell, the gem can't be imbued again until the next dawn.\n   Deep gnomes created these magic gemstones and keep the creation process a secret.\n\n" + toUni("Level\tStone\t\tRarity\t\tDC/Atk") + "\nCantrip\tObsidian\t\tUncommon\t13/+5\n1st\tLapis Lazuli\tUncommon\t13/+5\n2nd\tQuartz\t\tRare\t\t13/+5\n3rd\tBloodstone\tRare\t\t15/+7\n4th\tAmber\t\tVery Rare   \t15/+7\n5th\tJade\t\tVery Rare   \t17/+9\n6th\tTopaz\t\tVery Rare   \t17/+9\n7th\tStar Ruby  \tLegendary \t18/+10\n8th\tRuby\t\tLegendary \t18/+10\n9th\tDiamond\t\tLegendary \t19/+11",
	source : ["OotA", 223],
	attunement : true,
	choices : ["Obsidian (cantrip, uncommon)", "Lapis Lazuli (1st-level, uncommon)", "Quartz (2nd-level, rare)", "Bloodstone (3rd-level, rare)", "Amber (4th-level, very rare)", "Jade (5th-level, very rare)", "Topaz (6th-level, very rare)", "Star Ruby (7th-level, legendary)", "Ruby (8th-level, legendary)", "Diamond (9th-level, legendary)"],
	"obsidian (cantrip, uncommon)" : {
		name : "Spell Gem [Obsidian]",
		rarity : "uncommon",
		description : ""
	},
	"lapis lazuli (1st-level, uncommon)" : {
		name : "Spell Gem [Lapis Lazuli]",
		rarity : "uncommon",
		description : ""
	},
	"quartz (2nd-level, rare)" : {
		name : "Spell Gem [Quartz]",
		rarity : "rare",
		description : ""
	},
	"bloodstone (3rd-level, rare)" : {
		name : "Spell Gem [Bloodstone]",
		rarity : "rare",
		description : ""
	},
	"amber (4th-level, very rare)" : {
		name : "Spell Gem [Amber]",
		rarity : "very rare",
		description : ""
	},
	"jade (5th-level, very rare)" : {
		name : "Spell Gem [Jade]",
		rarity : "very rare",
		description : ""
	},
	"topaz (6th-level, very rare)" : {
		name : "Spell Gem [Topaz]",
		rarity : "very rare",
		description : ""
	},
	"star ruby (7th-level, legendary)" : {
		name : "Spell Gem [Star Ruby]",
		rarity : "legendary",
		description : ""
	},
	"ruby (8th-level, legendary)" : {
		name : "Spell Gem [Ruby]",
		rarity : "legendary",
		description : ""
	},
	"diamond (9th-level, legendary)" : {
		name : "Spell Gem [Diamond]",
		rarity : "legendary",
		description : ""
	}
}
MagicItemsList["stonespeaker crystal"] = {
	name : "Stonespeaker Crystal",
	source : ["OotA", 223],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "G",
	description : "",
	descriptionFull : "Created by the stone giant librarians of Gravenhollow, this nineteen-inch-long shard of quartz grants you advantage on Intelligence (Investigation) checks while it is on your person.\n   The crystal has 10 charges. While holding it, you can use an action to expend some of its charges to cast one of the following spells from it: Speak with Animals (2 charges), Speak with Dead (4 charges), or Speak with Plants (3 charges).\n   When you cast a Divination spell, you can use the crystal in place of one material component that would normally be consumed by the spell, at a cost of 1 charge per level of the spell. The crystal is not consumed when used in this way.\n   The crystal regains 1d6+4 expended charges daily at dawn. If you expend the crystal's last charge, roll a d20. On a 1, the crystal vanishes, lost forever.",
	attunement : true
}
MagicItemsList["wand of viscid globs"] = {
	name : "Wand of Viscid Globs",
	source : ["OotA", 223],
	type : "wand",
	rarity : "rare",
	magicItemTable : "G",
	description : "",
	descriptionFull : "Crafted by the drow, this slim black wand has 7 charges. While holding it, you can use an action to expend 1 of its charges to cause a small glob of viscous material to launch from the tip at one creature within 60 feet of you. Make a ranged attack roll against the target, with a bonus equal to your spellcasting modifier (or your Intelligence modifier, if you don't have a spellcasting modifier) plus your proficiency bonus. On a hit, the glob expands and dries on the target, which is restrained for 1 hour. After that time, the viscous material cracks and falls away.\n   Applying a pint or more of alcohol to the restrained creature dissolves the glob instantly, as does the application of oil of etherealness or universal solvent. The glob also dissolves instantly if exposed to sunlight. No other nonmagical process can remove the viscous material until it deteriorates on its own.\n   The wand regains 1d6+1 expended charges daily at midnight. If you expend the wands last charge, roll a d20. On a 1, the wand melts into harmless slime and is destroyed.\n   A wand of viscous globs is destroyed if exposed to sunlight for 1 hour without interruption.",
	attunement : true
}
