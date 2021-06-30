var iFileName = "pub_20200915_RotF.js";
RequiredSheetVersion(13);

// Define the source
SourceList.F={
	name : "Icewind Dale: Rime of the Frostmaiden [creatures, items, spells]",
	abbreviation : "RotF",
	group : "Adventure Books",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/icewind-dale-rime-frostmaiden",
	date : "2020/09/15"
};

// Creatures - new beasts
CreatureList["awakened white moose"] = {
	name : "Awakened White Moose",
	source : [["F", 82]],
	size : 2,
	type : "Beast",
	alignment : "Neutral Evil",
	ac : 11,
	hp : 68,
	hd : [8, 10],
	speed : "40 ft",
	scores : [19, 11, 16, 10, 12, 6],
	senses : "",
	passivePerception : 11,
	languages : "Druidic",
	challengeRating : "3",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
		name : "Antlers",
		ability : 1,
		damage : [2, 8, "piercing"],
		range : "Melee (5 ft)",
		description : "If used after moving 20 ft straight in the same round, see Charge trait"
	}, {
		name : "Hooves",
		ability : 1,
		damage : [2, 4, "bludgeoning"],
		range : "Melee (5 ft)",
		description : "One antlers and one hooves attack as an Attack action"
	}],
	traits : [{
		name : "Charge",
		description : "If the moose moves at least 20 ft straight toward a target and then hits it with an antlers attack on the same turn, the target takes an extra 9 (2d8) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone."
	}, {
		name : "Sure-Footed",
		description : "The moose has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
	}],
	actions : [{
		name : "Multiattack",
		description : "The moose makes two attacks: one with its antlers and one with its hooves."
	}],
	wildshapeString : "\u25C6 Multiattack: Makes two attacks: one with its antlers and one with its hooves."+
	"\n\u25C6 Charge: After moving 20 ft straight toward a target and then hitting it with an antlers attack on the same turn, the target takes an extra 2d8 bludgeoning damage and must make a DC 14 Str save or be knocked prone."+
	"\n\u25C6 Sure-Footed: Advantage on Str and Dex saves against effects that would knock it prone."
};
CreatureList["fox"] = {
	name : "Fox",
	companion : "familiar_not_al",
	source : [["F", 288]],
	size : 5,
	type : "Beast",
	alignment : "Unaligned",
	ac : 13,
	hp : 2,
	hd : [1, 4],
	speed : "30 ft, burrow 5 ft",
	scores : [2, 16, 11, 3, 12, 6],
	skills : {
		"perception" : 3,
		"stealth" : 5
	},
	senses : "Darkvision 60 ft; Adv. on Wis (Perception) checks using hearing",
	passivePerception : 13,
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 2,
		damage : [1, "", "piercing"],
		range : "Melee (5 ft)",
		description : "",
		abilitytodamage : false
	}],
	traits : [{
		name : "Keen Hearing",
		description : "The fox has advantage on Wisdom (Perception) checks that rely on hearing."
	}]
};
CreatureList["hare"] = {
	name : "Hare",
	source : [["F", 294]],
	companion : "familiar_not_al",
	size : 5,
	type : "Beast",
	alignment : "Unaligned",
	ac : 13,
	hp : 1,
	hd : [1, 4],
	speed : "20 ft, burrow 5 ft",
	scores : [1, 17, 9, 2, 11, 4],
	skills : {
		"perception" : 2,
		"stealth" : 5
	},
	senses : "",
	passivePerception : 12,
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 0,
	attacks : [],
	traits : [{
		name : "Escape",
		description : "The hare can take the Dash, Disengage, or Hide action as a bonus action on each of its turns."
	}]
};
CreatureList["knucklehead trout"] = {
	name : "Knucklehead Trout",
	source : [["F", 295]],
	size : 4,
	type : "Beast",
	alignment : "Unaligned",
	ac : 12,
	hp : 7,
	hd : [2, 6],
	speed : "0 ft, swim 30 ft",
	scores : [14, 14, 11, 1, 6, 1],
	senses : "Darkvision 60 ft",
	passivePerception : 8,
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 1,
		damage : [1, 4, "piercing"],
		range : "Melee (5 ft)",
		description : ""
	}, {
		name : "Tail",
		ability : 1,
		damage : [1, 4, "bludgeoning"],
		range : "Melee (5 ft)",
		description : ""
	}],
	traits : [{
		name : "Water Breathing",
		description : "The trout can breathe only underwater."
	}]
};
CreatureList["mountain goat"] = {
	name : "Mountain Goat",
	source : [["F", 304]],
	size : 3,
	type : "Beast",
	alignment : "Unaligned",
	ac : 11,
	hp : 13,
	hd : [2, 8],
	speed : "40 ft, climb 30 ft",
	scores : [14, 12, 14, 2, 10, 5],
	senses : "",
	passivePerception : 10,
	challengeRating : "1/8",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Ram",
		ability : 1,
		damage : [1, 6, "bludgeoning"],
		range : "Melee (5 ft)",
		description : "If used after moving 20 ft straight in the same round, see Charge trait"
	}],
	traits : [{
		name : "Charge",
		description : "If the goat moves at least 20 ft straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 3 (1d6) bludgeoning damage. If the target is a creature, it must succeed on a DC 12 Strength saving throw or be knocked prone."
	}, {
		name : "Sure-Footed",
		description : "The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
	}],
	wildshapeString : "\u25C6 Charge: After moving 20 ft straight toward a target and then hitting it with a ram attack on the same turn, the target takes an extra 1d6 bludgeoning damage and must make a DC 12 Strength save or be knocked prone."+
	"\n\u25C6 Sure-Footed: Advantage on Strength and Dexterity saves against effects that would knock it prone."
};
CreatureList["seal"] = {
	name : "Seal",
	source : [["F", 308]],
	size : 3,
	type : "Beast",
	alignment : "Unaligned",
	ac : 11,
	hp : 9,
	hd : [2, 8],
	speed : "20 ft, swim 40 ft",
	scores : [10, 12, 11, 3, 12, 5],
	senses : "Darkvision 60 ft; Adv. on Wis (Perception) checks using smell",
	passivePerception : 11,
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 1,
		damage : [1, "", "piercing"],
		range : "Melee (5 ft)",
		description : "",
		abilitytodamage : false
	}],
	traits : [{
		name : "Hold Breath",
		description : "The seal can hold its breath for 15 minutes."
	}, {
		name : "Keen Smell",
		description : "The seal has advantage on Wisdom (Perception) checks that rely on smell."
	}]
};
CreatureList["sperm whale"] = {
	name : "Sperm Whale",
	source : [["F", 309]],
	size : 0,
	type : "Beast",
	alignment : "Unaligned",
	ac : 13,
	hp : 189,
	hd : [14, 20],
	speed : "0 ft, swim 60 ft",
	scores : [26, 8, 17, 3, 12, 5],
	senses : "Blindsight 120 ft; Adv. on Wis (Perception) checks using hearing",
	passivePerception : 11,
	challengeRating : "8",
	proficiencyBonus : 3,
	attacksAction : 2,
	attacks : [{
		name : "Bite",
		ability : 1,
		damage : [3, 8, "piercing"],
		range : "Melee (5 ft)",
		description : "1 bite \u0026 1 tail attack as Attack action; See Swallow feature",
		tooltip : "If the target is a Large or smaller creature, it must succeed on a DC 14 Dexterity saving throw or be swallowed by the whale. A swallowed creature has total cover against attacks and other effects outside the whale, and it takes 3 (1d6) acid damage at the start of each of the whale's turns. If the whale takes 30 damage or more on a single turn from a creature inside it, the whale must succeed on a DC 16 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the whale. If the whale dies, a swallowed creature can escape from the corpse by using 20 feet of movement, exiting prone."
	}, {
		name : "Tail",
		ability : 1,
		damage : [3, 6, "bludgeoning"],
		range : "Melee (15 ft)",
		description : "1 bite \u0026 1 tail attack as Attack action; Double damage vs. objects",
		tooltip : "If the target is an object, the tail attack deal 6d6 + twice the Strength modifier bludgeoning damage."
	}],
	features : [{
		name : "Swallow",
		description : "A Large or smaller creature hit by the whale's bite attack must make a DC 14 Dexterity saving throw or be swallowed whole. A swallowed creature has total cover against attacks and other effects outside the whale, and it takes 3 (1d6) acid damage at the start of each of the whale's turns. If the whale takes 30 damage or more on a single turn from a creature inside it, the whale must succeed on a DC 16 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 ft of the whale. If the whale dies, a swallowed creature can escape from the corpse by using 20 ft of movement, exiting prone."
	}],
	traits : [{
		name : "Echolocation",
		description : "The whale can't use its blindsight while deafened."
	}, {
		name : "Hold Breath",
		description : "The whale can hold its breath for 90 minutes."
	}, {
		name : "Keen Hearing",
		description : "The whale has advantage on Wisdom (Perception) checks that rely on hearing."
	}],
	actions : [{
		name : "Multiattack",
		description : "The whale makes two attacks: one with its bite and one with its tail."
	}],
	wildshapeString : "\u25C6 Senses: Blindsight 120 ft (unless deafened); Adv. on Wis (Perception) checks using hearing."+
	"\n\u25C6 Hold Breath: Can hold its breath for 90 minutes."+
	"\n\u25C6 Swallow: Large or smaller hit with bite DC 14 Dex save or swallowed. Swallowed: total cover from outside whale, 1d6 acid damage at start of each turn. If whale takes 30 or more damage in a turn from inside, it DC 16 Con save or spit out creature prone in 10 ft at end of turn."
};
CreatureList["walrus"] = {
	name : "Walrus",
	source : [["F", 312]],
	size : 2,
	type : "Beast",
	alignment : "Unaligned",
	ac : 9,
	hp : 22,
	hd : [3, 10],
	speed : "20 ft, swim 40 ft",
	scores : [15, 9, 14, 3, 11, 4],
	senses : "",
	passivePerception : 10,
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Tusks",
		ability : 1,
		damage : [2, 4, "piercing"],
		range : "Melee (5 ft)",
		description : ""
	}],
	traits : [{
		name : "Hold Breath",
		description : "The walrus can hold its breath for 10 minutes."
	}]
};
CreatureList["giant walrus"] = {
	name : "Giant Walrus",
	source : [["F", 312]],
	size : 1,
	type : "Beast",
	alignment : "Unaligned",
	ac : 9,
	hp : 85,
	hd : [9, 12],
	speed : "20 ft, swim 40 ft",
	scores : [22, 9, 16, 3, 11, 4],
	senses : "Darkvision 60 ft",
	passivePerception : 10,
	challengeRating : "4",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
		name : "Body Flop",
		ability : 1,
		damage : [2, 8, "bludgeoning"],
		range : "Melee (5 ft)",
		description : "One body flop and one tusks attack as an Attack action"
	}, {
		name : "Tusks",
		ability : 1,
		damage : [3, 6, "piercing"],
		range : "Melee (5 ft)",
		description : "One body flop and one tusks attack as an Attack action"
	}],
	traits : [{
		name : "Hold Breath",
		description : "The walrus can hold its breath for 30 minutes."
	}],
	actions : [{
		name : "Multiattack",
		description : "The walrus makes two attacks: one with its body flop and one with its tusks."
	}]
};

// Creatures - for the Create Magos spell
CreatureList["demos magen"] = {
	name : "Magen, Demos",
	nameAlt : ["Demos Magen"],
	source : [["F", 300]],
	size : 3,
	type : "Construct",
	alignment : "Unaligned",
	ac : 16,
	hp : 51,
	hd : [6, 8],
	speed : "30 ft",
	scores : [14, 14, 18, 10, 10, 7],
	senses : "",
	damage_immunities : "poison",
	condition_immunities : "charmed, exhaustion, frightened, paralyzed, poisoned",
	passivePerception : 10,
	languages : "understands the languages of its creator but can't speak",
	challengeRating : "2",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
		name : "Greatsword",
		ability : 1,
		damage : [2, 6, "slashing"],
		range : "Melee (5 ft)",
		description : "Two greatsword attacks as an Attack action"
	}, {
		name : "Light Crossbow",
		ability : 2,
		damage : [1, 8, "piercing"],
		range : "80/320 ft",
		description : ""
	}],
	traits : [{
		name : "Fiery End",
		description : "If the magen dies, its body disintegrates in a harmless burst of fire and smoke, leaving behind anything it was wearing or carrying."
	}, {
		name : "Magic Resistance",
		description : "The magen has advantage on saving throws against spells and other magical effects."
	}, {
		name : "Unusual Nature",
		description : "The magen doesn't require air, food, drink, or sleep."
	}],
	features : [{
		name : "Magical Servants",
		description : "Magen make ideal servants. At creation, each is instilled with an instinct to protect itself and its creator, and it follows its creator's instructions without hesitation. When its taks is complete, a magen stands immobile and silent until its creator gives it new orders."
	}]
};
CreatureList["galvan magen"] = {
	name : "Magen, Galvan",
	nameAlt : ["Galvan Magen"],
	source : [["F", 301]],
	size : 3,
	type : "Construct",
	alignment : "Unaligned",
	ac : 14,
	hp : 68,
	hd : [8, 8],
	speed : "30 ft, fly 30 ft (hover)",
	scores : [10, 18, 18, 12, 10, 7],
	senses : "",
	damage_immunities : "lightning, poison",
	condition_immunities : "charmed, exhaustion, frightened, paralyzed, poisoned",
	passivePerception : 10,
	languages : "understands the languages of its creator but can't speak",
	challengeRating : "3",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
		name : "Shocking Touch",
		ability : 2,
		damage : [1, 6, "lightning"],
		range : "Melee (5 ft)",
		description : "Two shocking touch attacks as an Attack action; Adv. if target wears metal armor"
	}, {
		name : "Static Discharge (Recharge 5–6)",
		ability : 3,
		damage : [4, 10, "lightning"],
		range : "5-ft \xD7 30-ft line",
		description : "Hits all in area; Dex save, success\u2015 half damage; Disadv. if wearing metal armor",
		abilitytodamage : false,
		dc : true,
		tooltip : "The magen discharges a lightning bolt in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 14 Dexterity saving throw (with disadvantage if the creature is wearing armor made of metal), taking 22 (4d10) lightning damage on a failed save, or half as much damage on a successful one."
	}],
	traits : [{
		name : "Fiery End",
		description : "If the magen dies, its body disintegrates in a harmless burst of fire and smoke, leaving behind anything it was wearing or carrying."
	}, {
		name : "Magic Resistance",
		description : "The magen has advantage on saving throws against spells and other magical effects."
	}, {
		name : "Unusual Nature",
		description : "The magen doesn't require air, food, drink, or sleep."
	}],
	features : [{
		name : "Magical Servants",
		description : "Magen make ideal servants. At creation, each is instilled with an instinct to protect itself and its creator, and it follows its creator's instructions without hesitation. When its taks is complete, a magen stands immobile and silent until its creator gives it new orders."
	}],
	actions : [{
		name : "Static Discharge (Recharge 5–6)",
		description : "See Attack. The magen discharges a lightning bolt in a 60-ft line that is 5 ft wide. Each creature in that line must make a DC 14 Dexterity saving throw (with disadvantage if the creature is wearing armor made of metal), taking 4d12 lightning damage on a failed save, or half as much damage on a successful one."
	}]
};
CreatureList["hypnos magen"] = {
	name : "Magen, Hypnos",
	nameAlt : ["Hypnos Magen"],
	source : [["F", 301]],
	size : 3,
	type : "Construct",
	alignment : "Unaligned",
	ac : 12,
	hp : 34,
	hd : [4, 8],
	speed : "30 ft",
	scores : [10, 14, 18, 14, 10, 7],
	senses : "",
	damage_immunities : "poison",
	condition_immunities : "charmed, exhaustion, frightened, paralyzed, poisoned",
	passivePerception : 10,
	languages : "telepathy 30 ft, understands the languages of its creator but can't speak",
	challengeRating : "1",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Psychic Lash",
		ability : 4,
		damage : [2, 10, "psychic"],
		range : "60 ft",
		description : "One creature in sight; Wis save: success\u2015 no damage",
		abilitytodamage : false,
		dc : true
	}],
	traits : [{
		name : "Fiery End",
		description : "If the magen dies, its body disintegrates in a harmless burst of fire and smoke, leaving behind anything it was wearing or carrying."
	}, {
		name : "Magic Resistance",
		description : "The magen has advantage on saving throws against spells and other magical effects."
	}, {
		name : "Unusual Nature",
		description : "The magen doesn't require air, food, drink, or sleep."
	}],
	features : [{
		name : "Magical Servants",
		description : "Magen make ideal servants. At creation, each is instilled with an instinct to protect itself and its creator, and it follows its creator's instructions without hesitation. When its taks is complete, a magen stands immobile and silent until its creator gives it new orders."
	}],
	actions : [{
		name : "Suggestion",
		description : "The magen casts the Suggestion spell (save DC 12), requiring no material components. The target must be a creature that the magen can communicate with telepathically. If it succeeds on its saving throw, the target is immune to this magen's suggestion spell for the next 24 hours. The magen's spellcasting ability is Intelligence."
	}]
};

//Magic Items


// Spells
SpellsList["blade of disaster"] = {
	name : "Blade of Disaster",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["T", 106], ["F", 318]],
	level : 9,
	school : "Conj",
	time : "1 bns",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	description : "Create weapon; 2 spell atks 4d12 Force dmg; crit on 18+, triple dmg; bns a to move 30 ft \u0026 do 2 atks",
	descriptionShorter : "Create wea; 2 spell atks 4d12 Force dmg; crit 18+, triple dmg; bns a to move 30 ft \u0026 2 atks",
	descriptionFull : "You create a blade-shaped planar rift about 3 feet long in an unoccupied space you can see within range. The blade lasts for the duration. When you cast this spell, you can make up to two melee spell attacks with the blade, each one against a creature, loose object, or structure within 5 feet of the blade. On a hit, the target takes 4d12 force damage. This attack scores a critical hit if the number on the d20 is 18 or higher. On a critical hit, the blade deals an extra 8d12 force damage (for a total of 12d12 force damage)."+
	"\n   As a bonus action on your turn, you can move the blade up to 30 feet to an unoccupied space you can see and then make up to two melee spell attacks with it again."+
	"\n   The blade can harmlessly pass through any barrier, including a wall of force."
};
SpellsList["create magen"] = {
	name : "Create Magen",
	source : [["F", 318]],
	classes : ["wizard"],
	level : 7,
	school : "Trans",
	time : "1 h",
	range : "Touch",
	components : "V,S,M\u2020",
	compMaterial : "A vial of quicksilver worth 500 gp and a life-sized human doll, both of which the spell consumes, and an intricate crystal rod worth at least 1,500 gp that is not consumed",
	duration : "Instantaneous",
	description : "Transform doll into magen (500gp cons.); obeys me; my HP max reduced by its CR; see book (1.5k gp)",
	descriptionFull : "While casting the spell, you place a vial of quicksilver in the chest of a life-sized human doll stuffed with ash or dust. You then stitch up the doll and drip your blood on it. At the end of the casting, you tap the doll with a crystal rod, transforming it into a magen clothed in whatever the doll was wearing. The type of magen is chosen by you during the casting of the spell. See appendix C for different kinds of magen and their statistics."+
	"\n   When the magen appears, your hit point maximum decreases by an amount equal to the magen's challenge rating (minimum reduction of 1). Only a wish spell can undo this reduction to your hit point maximum."+
	"\n   Any magen you create with this spell obeys your commands without question."
};
SpellsList["frost fingers"] = {
	name : "Frost Fingers",
	source : [["F", 318]],
	classes : ["wizard"],
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "S:15" + (typePF ? "-" : "") + "ft cone",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	description : "All in area 2d8+1d8/SL Cold dmg; save halves; unattended nonmagical liquids freeze",
	descriptionFull : "Freezing cold blasts from your fingertips in a 15-foot cone. Each creature in that area must make a Constitution saving throw, taking 2d8 cold damage on a failed save, or half as much damage on a successful one."+
	"\n   The cold freezes nonmagical liquids in the area that aren't being worn or carried."+
	AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
};
