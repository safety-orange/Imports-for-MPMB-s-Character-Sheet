var iFileName = "pub_20140930_MM.js";
RequiredSheetVersion("13.1.13");
// This file adds all the player-material from the Monster Manual to MPMB's Character Record Sheet

// Define the source
SourceList.M={
	name : "Monster Manual",
	abbreviation : "MM",
	group : "Core Sources",
	url : "https://dnd.wizards.com/products/monster-manual",
	date : "2014/09/30"
};

// Dinosaurs not in the SRD
CreatureList["allosaurus"] = {
	name : "Allosaurus",
	source : [["M", 79]],
	size : 2, //Large
	type : "Beast",
	alignment : "Unaligned",
	ac : 13,
	hp : 51,
	hd : [6, 10], //[#, die]
	speed : "60 ft",
	scores : [19, 13, 17, 2, 12, 5], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 5
	},
	senses : "",
	passivePerception : 15,
	challengeRating : "2",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Claw",
		ability : 1,
		damage : [1, 8, "slashing"], //[#, die, type] "" for die is allowed
		range : "Melee (5 ft)",
		description : "If used after moving 30 ft straight in the same round, see Pounce trait"
	}, {
		name : "Bite",
		ability : 1,
		damage : [2, 10, "piercing"], //[#, die, type] "" for die is allowed
		range : "Melee (5 ft)",
		description : "Can be used in combination with claw while pouncing (see Pounce trait)"
	}],
	traits : [{
		name : "Pounce",
		description : "If the allosaurus moves at least 30 ft straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the allosaurus can make one bite attack against it as a bonus action."
	}]
};
CreatureList["ankylosaurus"] = {
	name : "Ankylosaurus",
	source : [["M", 79]],
	size : 1, //Huge
	type : "Beast",
	alignment : "Unaligned",
	ac : 15,
	hp : 68,
	hd : [8, 12], //[#, die]
	speed : "30 ft",
	scores : [19, 11, 15, 2, 12, 5], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "",
	passivePerception : 11,
	challengeRating : "3",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Tail",
		ability : 1,
		damage : [4, 6, "bludgeoning"], //[#, die, type] "" for die is allowed
		range : "Melee (10 ft)",
		description : "Target must succeed on a DC 14 Strength saving throw or be knocked prone",
		modifiers : [1, ""]
	}]
};
CreatureList["pteranodon"] = {
	name : "Pteranodon",
	source : [["M", 79]],
	size : 3, //Medium
	type : "Beast",
	alignment : "Unaligned",
	ac : 13,
	hp : 13,
	hd : [3, 8], //[#, die]
	speed : "10 ft, fly 60 ft",
	scores : [12, 15, 10, 2, 9, 5], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 1
	},
	senses : "",
	passivePerception : 11,
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 1,
		damage : [1, 6, "piercing"], //[#, die, type] "" for die is allowed
		range : "Melee (5 ft)",
		description : ""
	}],
	traits : [{
		name : "Flyby",
		description : "The pteranodon doesn't provoke opportunity attacks when it flies out of an enemy's reach."
	}]
};

// Special familiars not in the SRD
CreatureList["faerie dragon"] = { // With contributions by Patrick O.
	name : "Faerie Dragon",
	nameAlt : ["Dragon, Faerie"],
	source : [["M", 133]],
	size : 5, //Tiny
	type : "Dragon",
	alignment : "Chaotic Good",
	ac : 15,
	hp : 14,
	hd : [4, 4],
	speed : "10 ft, fly 60 ft",
	scores : [3, 20, 13, 14, 12, 16], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"arcana" : 4,
		"perception" : 3,
		"stealth" : 7
	},
	senses : "Darkvision 60 ft",
	passivePerception : 13,
	languages : "Draconic, Sylvan",
	challengeRating : "1",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 2,
		damage : [1, "", "piercing"],
		range : "Melee (5 ft)",
		description : "",
		abilitytodamage : false
	}, {
		name : "Euphoria Breath (Recharge 5-6)",
		ability : 3,
		damage : ["Wis save", "", "Euphoria"],
		range : "5 ft",
		description : "For 1 min, target rolls d6 at turn start: 1-4 move random (no actions), 5-6 save again (no actions/move)",
		dc : true,
		abilitytodamage : false,
		tooltip : "The dragon exhales a puff of euphoria gas at one creature within 5 feet of it. The target must succeed on a DC 11 Wisdom saving throw, or for 1 minute, the target can't take reactions and must roll a d6 at the start of each of its turns to determine its behavior during the turn: 1-4 - the target takes no action or bonus action and uses all its movment to move in a random direction. 5-6 - the target doesn't move, and the only thing it can do on its turn is make a DC 11 Wisdom saving throw, ending the effect on itself on a success."
	}],
	traits : [{
		name : "Superior Invisibility",
		description : "As a bonus action, the dragon can magically turn invisible until its concentration ends (as with a spell). Anything it wears or carries is invisible with it."
	}, {
		name : "Limited Telepathy",
		description : "Using telepathy, the dragon can magically communicate with any other faerie dragon within 60 feet of it."
	}, {
		name : "Magic Resistance",
		description : "The dragon has advantage on saves against spells and magical effects."
	}, {
		name : "Euphoria Breath (Recharge 5-6)",
		description : "Exhale a puff of euphoria gas at a creature within 5 ft. It must succeed on a DC 11 Wisdom save, or for 1 minute, it can't take reactions and must roll a d6 at the start of each of its turns:\n 1-4 - No action or bonus action, using all movment to move in a random direction.\n 5-6 - The target does nothing except attempt another save to try end the effect on itself."
	}],
	features : [{
		name : "Innate Spellcasting",
		description : "Cast spells using Charisma (save DC 13), requiring no material components. The spells it knows depends on its age (and stack):\n Red: 1/day - Dancing Lights, Mage Hand, Minor Illusion\n Orange (6-10 years): 1/day - Color Spray\n Yellow (11-20 years): 1/day - Mirror Image\n Green (21-30 years): 1/day - Suggestion\n Blue (31-40 years): 1/day - Major Image\n Indigo (41-50 years): 1/day - Hallucinatory Terrain\n Violet (51+ years): 1/day - Polymorph"
	}]
};
CreatureList["crawling claw"] = {
	name : "Crawling Claw",
	source : [["M", 44]],
	size : 5, //Tiny
	type : "Undead",
	companion : "familiar_not_al",
	alignment : "Neutral Evil",
	ac : 12,
	hp : 2,
	hd : [1, 4], //[#, die]
	speed : "20 ft, climb 20 ft",
	scores : [13, 14, 11, 5, 10, 4], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "Blindsight 30 ft (blind beyond this radius)",
	damage_immunities : "poison",
	condition_immunities : "charmed, exhaustion, poisoned",
	passivePerception : 10,
	languages : "understands Common but can't speak",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Claw",
		ability : 1,
		damage : [1, 4, "bludgeoning"], //[#, die, type] "" for die is allowed
		range : "Melee (5 ft)",
		description : "Does bludgeoning or slashing damage (claw's choice)"
	}],
	traits : [{
		name : "Turn Immunity",
		description : "The claw is immune to effects that turn undead."
	}]
};
CreatureList["peryton"] = {
	name : "Peryton",
	source : [["M", 251]],
	size : 3, //Medium
	type : "Monstrosity",
	companion : "steed",
	alignment : "Chaotic Evil",
	ac : 13,
	hp : 33,
	hd : [6, 8], //[#, die]
	speed : "20 ft, fly 60 ft",
	scores : [16, 12, 13, 9, 12, 10], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 5
	},
	senses : "Adv. on Wis (Perception) checks using sight/smell",
	passivePerception : 16,
	languages : "understands Common and Elvish, but can't speak",
	challengeRating : "2",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
		name : "Gore",
		ability : 1,
		damage : [1, 8, "piercing"], //[#, die, type] "" for die is allowed
		range : "Melee (5 ft)",
		description : "One gore and one talons attack as an Attack action; +2d8 after 30 ft dive straight down"
	}, {
		name : "Talons",
		ability : 1,
		damage : [2, 4, "piercing"], //[#, die, type] "" for die is allowed
		range : "Melee (5 ft)",
		description : "One talons and one gore attack as an Attack action; +2d8 after 30 ft dive straight down"
	}],
	actions : [{
		name : "Multiattack",
		description : "The peryton makes one gore attack and one talon attack."
	}],
	traits : [{
		name : "Dive Attack",
		description : "If the peryton is flying and dives at least 30 ft. straight toward a target and then hits it with a melee weapon attack, the attack deals an extra 9 (2d8) damage to the target."
	}, {
		name : "Flyby",
		description : "The peryton doesn't provoke an opportunity attack when it flies out of an enemy's reach."
	}, {
		name : "Keen Sight and Smell",
		description : "The peryton has advantage on Wisdom (Perception) checks that rely on sight or smell."
	}]
};

// Blights and spores
CreatureList["needle blight"] = {
	name : "Needle Blight",
	nameAlt : ["Blight, Needle"],
	source : [["M", 32]],
	size : 3, //Medium
	type : "Plant",
	alignment : "Neutral Evil",
	ac : 12,
	hp : 11,
	hd : [2, 8], //[#, die]
	speed : "30 ft",
	scores : [12, 12, 13, 4, 8, 3], //[Str, Dex, Con, Int, Wis, Cha]
	condition_immunities : "blinded, deafened",
	senses : "Blindsight 60 ft (blind beyond this radius).",
	passivePerception : 9,
	languages : "understands Common but can't speak",
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Claws",
		ability : 2,
		damage : [2, 4, "piercing"], //[#, die, type] "" for die is allowed
		range : "Melee (5 ft)",
		description : ""
	}, {
		name : "Needles",
		ability : 2,
		damage : [2, 6, "piercing"], //[#, die, type] "" for die is allowed
		range : "30/60 ft",
		description : ""
	}]
};
CreatureList["twig blight"] = {
	name : "Twig Blight",
	nameAlt : ["Blight, Twig"],
	source : [["M", 32]],
	size : 4, //Small
	type : "Plant",
	alignment : "Neutral Evil",
	ac : 13,
	hp : 4,
	hd : [1, 6], //[#, die]
	speed : "20 ft",
	scores : [6, 13, 12, 4, 8, 3], //[Str, Dex, Con, Int, Wis, Cha]
	damage_vulnerabilities : "fire",
	condition_immunities : "blinded, deafened",
	senses : "Blindsight 60 ft (blind beyond this radius).",
	passivePerception : 9,
	languages : "understands Common but can't speak",
	challengeRating : "1/8",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Claws",
		ability : 2,
		damage : [1, 4, "piercing"], //[#, die, type] "" for die is allowed
		range : "Melee (5 ft)",
		description : ""
	}],
	traits : [{
		name : "False Appearance",
		description : "While the blight remains motionless, it is indistinguishable from a dead shrub."
	}]
};
CreatureList["vine blight"] = {
	name : "Vine Blight",
	nameAlt : ["Blight, Vine"],
	source : [["M", 32]],
	size : 3, //Medium
	type : "Plant",
	alignment : "Neutral Evil",
	ac : 12,
	hp : 26,
	hd : [4, 8], //[#, die]
	speed : "10 ft",
	scores : [15, 8, 14, 5, 10, 3], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"stealth" : 1
	},
	condition_immunities : "blinded, deafened",
	senses : "Blindsight 60 ft (blind beyond this radius).",
	passivePerception : 9,
	languages : "Common",
	challengeRating : "1/2",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Constrict",
		ability : 1,
		damage : [2, 6, "bludgeoning"], //[#, die, type] "" for die is allowed
		range : "Melee (10 ft)",
		description : "Large or smaller target is grappled and restrained (escape DC 12); Can't use constrict again until grapple ends"
	}],
	traits : [{
		name : "False Appearance",
		description : "While the blight remains motionless, it is indistinguishable from a tangle of vines."
	}],
	actions : [{
		name : "Entangling Plants (Recharge 5-6)",
		description : "As an action, grasping roots and vines sprout in a 15-ft radius centered on the blight, withering away after 1 minute. For the duration, that area is difficult terrain for nonplant creatures. In addition, each creature of the blight's choice in that area when the plants appear must succeed on a DC 12 Strength saving throw or become restrained. A creature can use its action to make a DC 12 Strength check, freeing it self or another entangled creature within reach on a success."
	}],
	wildshapeString : "Blindsight 60 ft (blind beyond)| Immune to blinded, deafened| Entangling Plants (Recharge 5-6): As an action, 15-ft radius is difficult terrain for nonplant creatures, for 1 minute. Chosen creatures in it must make a DC 12 Str save or become restrained. A creature can use its action to make a DC 12 Str check to free itself or another within reach| False Appearance: While motionless, it's indistinguishable from a tangle of vines."
};
CreatureList["gas spore"] = {
	name : "Gas Spore",
	source : [["M", 138]],
	size : 2, //Large
	type : "Plant",
	alignment : "Unaligned",
	ac : 5,
	hp : 1,
	hd : [1, 10], //[#, die]
	speed : "fly 10 ft (hover)",
	scores : [5, 1, 3, 1, 1, 1], //[Str, Dex, Con, Int, Wis, Cha]
	condition_immunities : "blinded, deafened, frightened",
	senses : "Blindsight 30 ft (blind beyond this radius).",
	passivePerception : 5,
	challengeRating : "1/2",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Touch",
		ability : 1,
		damage : [1, "", "poison"], //[#, die, type] "" for die is allowed
		range : "Melee (5 ft)",
		description : "DC 10 Con save or infected with Death Burst disease, see traits",
		modifiers : [1, ""],
		abilitytodamage : false
	}],
	traits : [{
		name : "Death Burst",
		description : "The gas spore explodes when it drops to 0 hit points. Each creature within 20 feet of it must succeed on a DC 15 Constitution saving throw or take 10 (3d6) poison damage and become infected with a disease on a failed save. Creatures immune to the poisoned condition are immune to this disease.\n   Spores invade an infected creature's system, killing the creature in a number of hours equal to 1d12+the creature's Constitution score, unless the disease is removed. In half that time, the creature becomes poisoned for the rest of the duration. After the creature dies, it sprouts 2d4 Tiny gas spores that grow to full size in 7 days."
	}, {
		name : "Eerie Resemblance",
		description : "The gas spore resembles a beholder. A creature that can see the gas spore can discern its true nature with a successful DC 15 Intelligence (Nature) check."
	}],
	wildshapeString : "Blindsight 30 ft (blind beyond)| Immune to: blinded, deafened, frightened| Distinguishable form a beholder only with a DC 15 Int (Nature) check| When at 0 HP, explodes: all within 20 ft DC 15 Con save or 3d6 poison damage and infected with disease| The disease kills a creature in 1d12+it's Con score of hours. In half that, it becomes poisoned for the remainder. When dies, sprouts 2d4 Tiny gas spores that grow to full size in 7 days."
};

// Even though the shield guardian is in the SRD, the description for its control amulet is only found in the Monster Manual
MagicItemsList["shield guardian amulet"] = {
	name : "Shield Guardian Amulet",
	source : [["M", 271], ["RotF", 149]],
	type : "wondrous item",
	rarity : "rare",
	attunement : true,
	notLegalAL : true,
	prerequisite : "Requires attunement by a humanoid",
	prereqeval : function(v) { return !CurrentRace.known || !RaceList[CurrentRace.known] || !/creature type/i.test(RaceList[CurrentRace.known].trait); },
	description : "A shield guardian is magically linked to this amulet. It has AC 10, 10 HP, and immunity to poison and psychic damage. I know the distance and direction of the guardian while I'm wearing the amulet and I'm on the same plane as it. While within 10 ft of it, I can use the amulet to reactivate it with a DC 20 Arcana check.",
	descriptionFull : "The amulet is a 4-inch-wide disk composed of silver-framed wood, with a rune carved into its face. A detect magic spell reveals a magical aura of enchantment around the amulet."+
	"\n   Every shield guardian has an amulet magically linked to it. A shield guardian can have only one corresponding amulet, and if that amulet is destroyed, the shield guardian is incapacitated until a replacement amulet is created."+
	"\n   A shield guardian's amulet is subject to direct attack if it isn't being worn or carried. It has AC 10, 10 hit points, and immunity to poison and psychic damage. Crafting an amulet requires 1 week and costs 1,000 gp in components."+
	"\n   A shield guardian's solitary focus is to protect the amulet's wearer. The amulet's wearer can command the guardian to attack its enemies or to guard the wielder against attack. If an attack threatens to injure the wearer, the construct can magically absorb the blow into its own body, even at a distance."+
	"\n   A humanoid that attunes to this amulet knows the distance and direction of the shield guardian, provided the amulet and the guardian are on the same plane of existence. As an action, the amulet's attuned wearer can try to reactivate the shield guardian, doing so with a successful DC 20 Intelligence (Arcana) check. Reactivation can only be attempted while the amulet and guardian are within 10 feet of each other.",
	creaturesAdd : [["Shield Guardian"]]
};


// Player characters as Lycanthropes race - even though they are in the SRD, the rules for applying their abilities to player characters are not (added in v13.1.13)
/*
Gains:
 - speed in non-humanoid form
 - damage immunities
 - traits
 - actions that don't involve equipment

 P.S. multiattack is a weird one, going with the interpretation here: https://rpg.stackexchange.com/questions/70694
*/
var MM_lycanthrope = {
	createDefaultTraits : function(sLycanName, sLycanPlural) {
		// the traits of a human
		var obj = {
			name : "Human " + sLycanName,
			plural : "Human " + sLycanPlural,
			languageProfs : ["Common", 1],
			age : " reach adulthood in their late teens and live less than 100 years",
			height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
			weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
			heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
			weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
			scorestxt : "+1 to all ability scores",
			scores : [1, 1, 1, 1, 1, 1, 1]
		}
		return obj;
	},
	createMessage : function(sLycanName, aOtherGains) {
		var aGained = [
			"Its speed in nonhumanoid form.",
			"Natural attacks in nonhumanoid form (e.g. bite/claw).",
			"Damage immunity to bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered.",
			"Shapechanger trait."
		].concat(aOtherGains);
		return "The lycanthrope races are template races. All features and traits of the base race are retained and all the " + sLycanName + "'s features are added to it."+
		"\nIf you choose not to use a previous race as the base race or you selected a " + sLycanName + " at character creation, a human (non-variant) will be used as the base race."+
		"\nThe " + sLycanName + "'s features added to the base race are:"+
		desc(aGained, "\n   \u2022 ")+
		"\n\nThe possible alignment change and moon-related limitations of lycanthrope are not mentioned in this race. Discuss with your DM how they want to handle lycanthrope."
	}
}
RaceList["lycanthrope-werebear"] = {
	regExpSearch : /were.?bear|^(?=.*lycanthrope)(?=.*bear).*$/i,
	name : "Werebear",
	source : [["M", 208]],
	plural : "Werebears",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	trait : "Human Werebear (+1 to all ability scores; min 19 Str)" + desc([
		"Shapechanger: As an action, I can polymorph into a Large bear-hybrid, into a Large bear, or back. In those forms, I gain 40 ft walking speed, 30 ft climb speed, +1 AC, and a bite and claw attack. My stats don't otherwise change when transformed, but my equipment doesn't change and I revert back when I die. Humanoids hit by my bite must save or be cursed with werebear lycanthrope.",
		"Keen Smell: I have adv. on Wis (Perception) checks using smell."
	], "\n \u2022 "),
	features : {
		lycanthrope_features : {
			name : "Lycanthrope",
			source : [["M", 208]],
			minlevel : 1,
			toNotesPage : [{
				name : "Lycanthrope",
				note : [
					"My Strength score increases to 19 unless it was already higher",
					"As an action, I can polymorph into a Large bear-hybrid, into a Large bear, or back",
					"In my bear and hybrid forms, I gain 40 ft walking speed, 30 ft climb speed, and +1 AC",
					"In these forms I also gain a bite and claw attack, but can't use bite as part of a multiattack",
					"My stats don't otherwise change, my equipment doesn't transform and I revert back if I die",
					"Humanoids hit by my bite must make a Con save or be cursed with werebear lycanthrope",
					"The DC to avoid this curse is 8 + my Proficiency bonus + my Constitution modifier"
				],
				page3notes : true
			}, {
				name : "Multiattack",
				note : [
					"As an action, I can make two attacks, none of which can be with my werebear bite"
				],
				page3notes : true
			}],
			action : [
				["action", "Shapechange (bear/hybrid/back)"],
				["action", "Multiattack (2 attacks, no bite)"]
			],
			scoresOverride : [19, 0, 0, 0, 0, 0],
			savetxt : { immune : ["bludgeoning, piercing, and slashing damage unless from magic/silver"] },
			weaponsAdd : ["Werebear Bite", "Werebear Claw"],
			weaponOptions : [{
				name : "Werebear Bite",
				regExpSearch : /^(?=.*(werebear|lycanthrope))(?=.*bite).*$/i,
				source : [["M", 208]],
				ability : 1,
				type : "Natural",
				damage : [2, 10, "piercing"],
				range : "Melee",
				description : "Bear and Hybrid form only; Humanoids Con save or cursed",
				abilitytodamage : true
			}, {
				name : "Werebear Claw",
				regExpSearch : /^(?=.*(werebear|lycanthrope))(?=.*\bclaws?\b).*$/i,
				source : [["M", 208]],
				ability : 1,
				type : "Natural",
				damage : [2, 8, "slashing"],
				range : "Melee",
				description : "Bear and Hybrid form only",
				abilitytodamage : true
			}],
			extraAC : [{
				name : "+1 in bear/hybrid form",
				mod : 0,
				text : "I gain a +1 bonus to AC while I'm in my bear or bear-hybrid form. This bonus is not added by default, it has to be added/removed manually when changing form."
			}]
		},
		lycanthrope_keen_senses : {
			name : "Keen Smell",
			source : [["M", 208]],
			minlevel : 1,
			toNotesPage : [{
				name : "Keen Smell",
				note : [
					"I have advantage on Wisdom (Perception) checks that rely on smell"
				],
				page3notes : true
			}],
			vision : [["Keen Smell", 0]]
		}
	},
	useFromPreviousRace : {
		updateName : "prefix", // e.g. "Drow Werebear"
		message : MM_lycanthrope.createMessage("werebear", [
			"Strength increase to 19 unless it was already higher.",
			"Keen Smell trait."
		]),
		defaultTraits : MM_lycanthrope.createDefaultTraits("Werebear", "Werebears"),
		gainTraits : ["everything"]
	}
};
RaceList["lycanthrope-wereboar"] = {
	regExpSearch : /were.?boar|^(?=.*lycanthrope)(?=.*boar).*$/i,
	name : "Wereboar",
	source : [["M", 209]],
	plural : "Wereboars",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	trait : "Human Wereboar (+1 to all ability scores; min 17 Str)" + desc([
		"Shapechanger: As an action, I can polymorph into a boar-" + (typePF ? "" : "humanoid ") + "hybrid, into a boar, or back. In those forms, I gain 40 ft walking speed, +1 AC, and a tusks attack. My stats don't otherwise change when transformed, but my equipment doesn't change and I revert back when I die. Humanoids hit by my tusks must save or be cursed" + (typePF ? "." : " with lycanthrope."),
		"Relentless: If I'm reduced to 0 HP by 14 damage or less, I can instead drop to 1 HP.",
		"Charge: If I move 15 ft straight before a tusks hit, +2d6 damage and Str save or prone."
	], "\n \u2022 "),
	features : {
		lycanthrope_features : {
			name : "Lycanthrope",
			source : [["M", 209]],
			minlevel : 1,
			toNotesPage : [{
				name : "Lycanthrope",
				note : [
					"My Strength score increases to 17 unless it was already higher",
					"As an action, I can polymorph into a boar-humanoid hybrid, into a boar, or back",
					"In my boar and hybrid forms, I gain 40 ft walking speed, a tusks attack, and +1 AC",
					"I also gain a bite and claw attack; As an action, I can make two claw attacks (multiattack)",
					"My stats don't otherwise change, my equipment doesn't transform and I revert back if I die",
					"Humanoids hit by my bite must make a Con save or be cursed with wereboar lycanthrope",
					"The DC to avoid this curse is 8 + my Proficiency bonus + my Constitution modifier"
				],
				page3notes : true
			}, {
				name : "Multiattack",
				note : [
					"As an action, I can make two attacks, only one of which can be with my wereboar tusks"
				],
				page3notes : true,
				additional : "in humanoid or hybrid form only"
			}],
			action : [
				["action", "Shapechange (boar/hybrid/back)"],
				["action", "Multiattack (2 attacks, max 1 tusks)"]
			],
			scoresOverride : [17, 0, 0, 0, 0, 0],
			savetxt : { immune : ["bludgeoning, piercing, and slashing damage unless from magic/silver"] },
			weaponsAdd : ["Wereboar Tusks"],
			weaponOptions : [{
				name : "Wereboar Tusks",
				regExpSearch : /^(?=.*(wereboar|lycanthrope))(?=.*tusks).*$/i,
				source : [["M", 209]],
				ability : 1,
				type : "Natural",
				damage : [2, 6, "slashing"],
				range : "Melee",
				description : "Boar/hybrid form only; Humanoids Con save or cursed; Charge for +2d6 damage",
				abilitytodamage : true
			}],
			extraAC : [{
				name : "+1 in boar/hybrid form",
				mod : 0,
				text : "I gain a +1 bonus to AC while I'm in my boar or boar-hybrid form. This bonus is not added by default, it has to be added/removed manually when changing form."
			}]
		},
		wereboar_relentless : {
			name : "Relentless",
			source : [["M", 209]],
			minlevel : 1,
			toNotesPage : [{
				name : "Relentless",
				note : [
					"If I'm reduced to 0 HP by an affect dealing 14 damage or less, I can instead drop to 1 HP"
				],
				page3notes : true,
				additional : "in boar or hybrid form only"
			}],
			usages : 1,
			recovery : "short rest"
		},
		wereboar_charge : {
			name : "Charge",
			source : [["M", 209]],
			minlevel : 1,
			toNotesPage : [{
				name : "Charge",
				note : [
					"If, in one turn, I move straight for 15 ft and then hit with my tusks, I deal +2d6 damage",
					"Those hit like this must make a Str save or be knocked prone (DC 8 + Prof B. + Str mod)"
				],
				page3notes : true,
				additional : "in boar or hybrid form only"
			}]
		}
	},
	useFromPreviousRace : {
		updateName : "prefix", // e.g. "High Elf Wereboar"
		message : MM_lycanthrope.createMessage("wereboar", [
			"Strength increase to 17 unless it was already higher.",
			"Relentless and Charge traits."
		]),
		defaultTraits : MM_lycanthrope.createDefaultTraits("Wereboar", "Wereboars"),
		gainTraits : ["everything"]
	},
	abilitySave : 1 // for charge trait
};
RaceList["lycanthrope-wererat"] = {
	regExpSearch : /were.?rat|^(?=.*lycanthrope)(?=.*rat).*$/i,
	name : "Wererat",
	source : [["M", 209]],
	plural : "Wererats",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	trait : "Human Wererat (+1 to all ability scores; min 15 Dex)" + desc([
		"Shapechanger: As an action, I can transform into a rat-humanoid hybrid, into a giant rat, or back. In those forms, I gain a bite attack, which can use Strength or Dexterity. In my giant rat form, I also become small and gain Darkvision 60 ft My stats don't otherwise change when transformed, but my equipment doesn't change and I revert back when I die. Humanoids hit by my bite must save or be cursed with wererat lycanthrope.",
		"Keen Smell: I have adv. on Wis (Perception) checks using smell."
	], "\n \u2022 "),
	features : {
		lycanthrope_features : {
			name : "Lycanthrope",
			source : [["M", 209]],
			minlevel : 1,
			toNotesPage : [{
				name : "Lycanthrope",
				note : [
					"My Dexterity score increases to 15 unless it was already higher",
					"As an action, I can transform into a rat-humanoid hybrid, into a giant rat (Small), or back",
					"In my rat and hybrid forms, I gain a bite attack that can use either Strength or Dexterity",
					"In my giant rat form, I also become small and gain Darkvision 60 ft",
					"My stats don't otherwise change, my equipment doesn't transform and I revert back if I die",
					"Humanoids hit by my bite must make a Con save or be cursed with wererat lycanthrope",
					"The DC to avoid this curse is 8 + my Proficiency bonus + my Constitution modifier"
				],
				page3notes : true
			}, {
				name : "Multiattack",
				note : [
					"As an action, I can make two attacks, only one of which can be with my wererat bite"
				],
				page3notes : true,
				additional : "in humanoid or hybrid form only"
			}],
			action : [
				["action", "Shapechange (giant rat/hybrid/back)"],
				["action", "Multiattack (2 attacks, max 1 bite)"]
			],
			scoresOverride : [0, 15, 0, 0, 0, 0],
			savetxt : { immune : ["bludgeoning, piercing, and slashing damage unless from magic/silver"] },
			weaponsAdd : ["Wererat Bite"],
			weaponOptions : [{
				name : "Wererat Bite",
				regExpSearch : /^(?=.*(wererat|lycanthrope))(?=.*bite).*$/i,
				source : [["M", 209]],
				ability : 2,
				type : "Natural",
				damage : [1, 4, "piercing"],
				range : "Melee",
				description : "Rat and Hybrid form only; Humanoids Con save or cursed",
				abilitytodamage : true,
				isWereratBite : true // for calcChanges.atkAdd
			}],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.theWea.isWereratBite) fields.Mod = v.StrDex;
					},
					'I can use Strength or Dexterity for my Wererat Bite, whichever is higher.'
				]
			}
		},
		lycanthrope_keen_senses : {
			name : "Keen Smell",
			source : [["M", 209]],
			minlevel : 1,
			toNotesPage : [{
				name : "Keen Smell",
				note : [
					"I have advantage on Wisdom (Perception) checks that rely on smell"
				],
				page3notes : true
			}],
			vision : [["Keen Smell", 0]]
		}
	},
	useFromPreviousRace : {
		updateName : "prefix", // e.g. "Lizardfolk Wererat"
		message : MM_lycanthrope.createMessage("wererat", [
			"Dexterity increase to 15 unless it was already higher.",
			"Keen Smell trait."
		]),
		defaultTraits : MM_lycanthrope.createDefaultTraits("Wererat", "Wererats"),
		gainTraits : ["everything"]
	}
};
RaceList["lycanthrope-weretiger"] = {
	regExpSearch : /were.?tiger|^(?=.*lycanthrope)(?=.*tiger).*$/i,
	name : "Weretiger",
	source : [["M", 210]],
	plural : "Weretigers",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	trait : "Human Weretiger (+1 to all ability scores; min 15 Str)" + desc([
		"Shapechanger: As an action, I can polymorph into a tiger-humanoid hybrid, into a Large tiger, or back. In those forms, I gain 40 ft walking speed, a bite attack, and a claw attack. My stats don't otherwise change when transformed, but my equipment doesn't transform and I revert back when I die. Humanoids hit by my bite must save or be cursed with weretiger lycanthrope."+
		(typePF ? "\n \u2022 Pounce: " : " ") + "I can pounce in my tiger and hybrid form, see notes.",
		"Keen Hearing and Smell: I have adv. on Wis (Perception) checks using hearing or smell."
	], "\n \u2022 "),
	features : {
		lycanthrope_features : {
			name : "Lycanthrope",
			source : [["M", 210]],
			minlevel : 1,
			toNotesPage : [{
				name : "Lycanthrope",
				note : [
					"My Strength score increases to 17 unless it was already higher; I gain 60 ft darkvision",
					"As an action, I can polymorph into a tiger-humanoid hybrid, into a Large tiger, or back",
					"In my tiger and hybrid forms, I gain 40 ft walking speed, a bite attack, and a claw attack",
					"My stats don't otherwise change, my equipment doesn't transform and I revert back if I die",
					"Humanoids hit by my bite must make a Con save or be cursed with weretiger lycanthrope",
					"The DC to avoid this curse is 8 + my Proficiency bonus + my Constitution modifier"
				],
				page3notes : true
			}, {
				name : "Multiattack",
				note : [
					"As an action, I can make two attacks, none of which can be with my weretiger bite"
				],
				page3notes : true,
				additional : "in humanoid or hybrid form only"
			}],
			action : [
				["action", "Shapechange (tiger/hybrid/back)"],
				["action", "Multiattack (2 attacks, no bite)"]
			],
			scoresOverride : [17, 0, 0, 0, 0, 0],
			savetxt : { immune : ["bludgeoning, piercing, and slashing damage unless from magic/silver"] },
			weaponsAdd : ["Weretiger Bite", "Weretiger Claw"],
			weaponOptions : [{
				name : "Weretiger Bite",
				regExpSearch : /^(?=.*(weretiger|lycanthrope))(?=.*bite).*$/i,
				source : [["M", 210]],
				ability : 1,
				type : "Natural",
				damage : [1, 10, "piercing"],
				range : "Melee",
				description : "Tiger and Hybrid form only; Humanoids Con save or cursed",
				abilitytodamage : true
			}, {
				name : "Weretiger Claw",
				regExpSearch : /^(?=.*(weretiger|lycanthrope))(?=.*\bclaws?\b).*$/i,
				source : [["M", 210]],
				ability : 1,
				type : "Natural",
				damage : [1, 8, "slashing"],
				range : "Melee",
				description : "Tiger and Hybrid form only; Can be use to pounce",
				abilitytodamage : true
			}],
			vision : [["Darkvision", 60]]
		},
		lycanthrope_keen_senses : {
			name : "Keen Hearing and Smell",
			source : [["M", 210]],
			minlevel : 1,
			toNotesPage : [{
				name : "Keen Hearing and Smell",
				note : [
					"I have advantage on Wisdom (Perception) checks that rely on hearing or smell"
				],
				page3notes : true
			}],
			vision : [["Keen Hearing and Smell", 0]]
		},
		weretiger_pounce : {
			name : "Pounce",
			source : [["M", 210]],
			minlevel : 1,
			toNotesPage : [{
				name : "Pounce",
				note : [
					"If, in one turn, I move straight for 15 ft and then hit with my claw, I can pounce a target",
					"The creature must make a Str save or be knocked prone (DC 8 + Prof Bonus + Str mod)",
					"If I knocked someone prone, I can then make a bite attack against them as a bonus action"
				],
				page3notes : true,
				additional : "in tiger or hybrid form only"
			}],
			action : [["bonus action", "Bite after successful Pounce"]]
		}
	},
	useFromPreviousRace : {
		updateName : "prefix", // e.g. "Mountain Dwarf Weretiger"
		message : MM_lycanthrope.createMessage("weretiger", [
			"Strength increase to 17 unless it was already higher.",
			"Keen Hearing and Smell trait."
		]),
		defaultTraits : MM_lycanthrope.createDefaultTraits("Weretiger", "Weretigers"),
		gainTraits : ["everything"]
	},
	abilitySave : 1 // for pounce trait
};
RaceList["lycanthrope-werewolf"] = {
	regExpSearch : /were.?wol(f|ve)|^(?=.*lycanthrope)(?=.*wol(f|ve)).*$/i,
	name : "Werewolf",
	source : [["M", 211]],
	plural : "Werewolves",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	trait : "Human Werewolf (+1 to all ability scores; min 15 Str)" + desc([
		"Shapechanger: As an action, I can polymorph into a wolf-humanoid hybrid, into a wolf, or back. In those forms, I gain 40 ft walking speed, a bite attack, and +1 AC. In my hybrid form, I also gain a claws attack. My stats don't otherwise change when transformed, but my equipment doesn't transform and I revert back when I die. Humanoids hit by my bite must save or be cursed with werewolf lycanthrope.",
		"Keen Hearing and Smell: I have adv. on Wis (Perception) checks using hearing or smell."
	], "\n \u2022 "),
	features : {
		lycanthrope_features : {
			name : "Lycanthrope",
			source : [["M", 211]],
			minlevel : 1,
			toNotesPage : [{
				name : "Lycanthrope",
				note : [
					"My Strength score increases to 15 unless it was already higher",
					"As an action, I can polymorph into a wolf-humanoid hybrid, into a wolf, or back",
					"In my wolf and hybrid forms, I gain 40 ft walking speed, a bite attack, and +1 AC",
					"In my hybrid form, I also gain a claws attack",
					"My stats don't otherwise change, my equipment doesn't transform and I revert back if I die",
					"Humanoids hit by my bite must make a Con save or be cursed with werewolf lycanthrope",
					"The DC to avoid this curse is 8 + my Proficiency bonus + my Constitution modifier"
				],
				page3notes : true
			}, {
				name : "Multiattack",
				note : [
					"As an action, I can make two attacks, only one of which can be with my werewolf bite"
				],
				page3notes : true,
				additional : "in humanoid or hybrid form only"
			}],
			action : [
				["action", "Shapechange (wolf/hybrid/back)"],
				["action", "Multiattack (2 attacks, max 1 bite)"]
			],
			scoresOverride : [15, 0, 0, 0, 0, 0],
			savetxt : { immune : ["bludgeoning, piercing, and slashing damage unless from magic/silver"] },
			weaponsAdd : ["Werewolf Bite", "Wolf-hybrid Claws"],
			weaponOptions : [{
				name : "Werewolf Bite",
				regExpSearch : /^(?=.*(werewolf|lycanthrope))(?=.*bite).*$/i,
				source : [["M", 211]],
				ability : 1,
				type : "Natural",
				damage : [1, 8, "piercing"],
				range : "Melee",
				description : "Wolf and Hybrid form only; Humanoids Con save or cursed",
				abilitytodamage : true
			}, {
				name : "Wolf-hybrid Claws",
				regExpSearch : /^(?=.*wolf)(?=.*hybrid)(?=.*\bclaws?\b).*$/i,
				source : [["M", 211]],
				ability : 1,
				type : "Natural",
				damage : [2, 4, "slashing"],
				range : "Melee",
				description : "Hybrid form only",
				abilitytodamage : true
			}],
			extraAC : [{
				name : "+1 in wolf/hybrid form",
				mod : 0,
				text : "I gain a +1 bonus to AC while I'm in my wolf or wolf-hybrid form. This bonus is not added by default, it has to be added/removed manually when changing form."
			}]
		},
		lycanthrope_keen_senses : {
			name : "Keen Hearing and Smell",
			source : [["M", 211]],
			minlevel : 1,
			toNotesPage : [{
				name : "Keen Hearing and Smell",
				note : [
					"I have advantage on Wisdom (Perception) checks that rely on hearing or smell"
				],
				page3notes : true
			}],
			vision : [["Keen Hearing and Smell", 0]]
		}
	},
	useFromPreviousRace : {
		updateName : "prefix", // e.g. "Rock Gnome Werewolf"
		message : MM_lycanthrope.createMessage("werewolf", [
			"Strength increase to 15 unless it was already higher.",
			"Keen Hearing and Smell trait."
		]),
		defaultTraits : MM_lycanthrope.createDefaultTraits("Werewolf", "Werewolves"),
		gainTraits : ["everything"]
	}
};
