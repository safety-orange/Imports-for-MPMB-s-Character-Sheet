var iFileName = "pub_20150416_EE.js";
RequiredSheetVersion("13.0.8");
// This file adds all the player-material from the Elemental Evil Player's Companion (November 2017, after the XGtE update) to MPMB's Character Record Sheet

// Define the source
SourceList.E={
	name : "Elemental Evil Player's Companion", // November 2017 version
	abbreviation : "EE",
	group : "Primary Sources",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/player%E2%80%99s-companion",
	date : "2015/04/16"
};

// Races
RaceList["aarakocra"] = {
	regExpSearch : /aarakocra/i,
	name : "Aarakocra",
	source : [["E", 5], ["W", 166]],
	plural : "Aarakocra",
	size : 3,
	speed : {
		walk : { spd : 25, enc : 15 },
		fly : { spd : 50, enc : 0 }
	},
	languageProfs : ["Common", "Aarakocra", "Auran"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /talon/i,
		name : "Talons",
		source : [["E", 5], ["W", 166]],
		damage : [1, 4, "slashing"]
	},
	weaponsAdd : ["Talons"],
	age : " rearch maturity by age 3 and live about 30 years",
	height : " are about 5 feet tall",
	weight : " weigh between 80 and 100 lb",
	heightMetric : " are about 1,5 metres tall",
	weightMetric : " weigh between 36 and 45 kg",
	scores : [0, 2, 0, 0, 1, 0],
	trait : "Aarakocra (+2 Dexterity, +1 Wisdom)\n\nFlight: I have a flying speed of 50 feet. To use this speed, I can't be wearing medium or heavy armor.\n\nTalons: My unarmed strikes deal 1d4 slashing damage on a hit."
};
RaceList["deep gnome"] = {
	regExpSearch : /^((?=.*svirfneblin)|((?=.*\bgnomes?\b)(?=.*\b(underdarks?|deep|depths?)\b))).*$/i,
	name : "Svirfneblin",
	sortname : "Gnome, Deep (Svirfneblin)",
	source : [["E", 7], ["S", 115], ["MToF", 113]],
	plural : "Svirfneblin",
	size : 4,
	speed : {
		walk : { spd : 25, enc : 15 }
	},
	languageProfs : ["Common", "Gnomish", "Undercommon"],
	vision : [["Darkvision", 120]],
	savetxt : { text : ["Adv. on Int/Wis/Cha saves vs. magic"] },
	age : " are considered full-grown adults when they reach 25 and live 200 to 250 years",
	height : " stand between 3 and 3 1/2 feet tall (2'9\" + 2d4\")",
	weight : " weigh around 90 lb (80 + 2d4 \xD7 1d4 lb)",
	heightMetric : " stand between 90 and 105 cm tall (85 + 5d4 cm)",
	weightMetric : " weigh around 50 kg (35 + 5d4 \xD7 4d4 / 10 kg)",
	scores : [0, 1, 0, 2, 0, 0],
	trait : "Svirfneblin (+1 Dexterity, +2 Intelligence)\n\nStone Camouflage:\n   I have advantage on Dexterity (stealth) checks to hide in rocky terrain."
};
RaceList["air genasi"] = {
	regExpSearch : /^(?=.*(genasi|planetouched))(?=.*\bairs?\b).*$/i,
	name : "Air genasi",
	sortname : "Genasi, Air",
	source : [["E", 9], ["W", 172]],
	plural : "Air genasi",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Primordial"],
	age : " reach adulthood in their late teens and live up to 120 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 lb (50 + 5d10 \xD7 4d4 / 10 kg)",
	scores : [0, 1, 2, 0, 0, 0],
	trait : "Air Genasi (+1 Dexterity, +2 Constitution)\n\nUnending Breath: I can hold my breath indefinitely while I am not incapacitated.\n\nMingle with the Wind: I can cast the Levitate spell once with this trait, requiring no material components, and I regain the ability to cast it this way when I finish a long rest. Constitution is my spellcasting ability for this spell.",
	spellcastingAbility : 3,
	features : {
		"levitate" : {
			name : "Mingle with the Wind",
			limfeaname : "Levitate",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Mingle with the Wind",
				spells : ["levitate"],
				selection : ["levitate"],
				firstCol : 'oncelr'
			},
			spellChanges : {
				"levitate" : {
					components : "V,S",
					compMaterial : "",
					changes : "Using Mingle with the Wind, I can cast Levitate once per long rest without requiring material components."
				}
			}
		}
	}
};
RaceList["earth genasi"] = {
	regExpSearch : /^(?=.*(genasi|planetouched))(?=.*\bearths?\b).*$/i,
	name : "Earth genasi",
	sortname : "Genasi, Earth",
	source : [["E", 9], ["W", 172]],
	plural : "Earth genasi",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Primordial"],
	age : " reach adulthood in their late teens and live up to 120 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 lb (50 + 5d10 \xD7 4d4 / 10 kg)",
	scores : [1, 0, 2, 0, 0, 0],
	trait : "Earth Genasi (+1 Strength, +2 Constitution)" + (typePF ? "\n" : "") + "\nEarth Walk: I can move across difficult terrain made of earth or stone without expending extra movement." + (typePF ? "\n" : "") + "\nMerge with Stone: I can cast the Pass without Trace spell once with this trait, requiring no material components, and I regain the ability to cast it this way when I finish a long rest. Constitution is my spellcasting ability for this spell.",
	spellcastingAbility : 3,
	features : {
		"pass without trace" : {
			name : "Merge with Stone",
			limfeaname : "Pass without Trace",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Merge with Stone",
				spells : ["pass without trace"],
				selection : ["pass without trace"],
				firstCol : 'oncelr'
			},
			spellChanges : {
				"pass without trace" : {
					components : "V,S",
					compMaterial : "",
					changes : "Using Merge with Stone, I can cast Pass without Trace once per long rest without requiring material components."
				}
			}
		}
	}
};
RaceList["fire genasi"] = {
	regExpSearch : /^(?=.*(genasi|planetouched))(?=.*\bfires?\b).*$/i,
	name : "Fire genasi",
	sortname : "Genasi, Fire",
	source : [["E", 9], ["W", 172]],
	plural : "Fire genasi",
	vision : [["Darkvision", 60]],
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Primordial"],
	dmgres : ["Fire"],
	age : " reach adulthood in their late teens and live up to 120 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 lb (50 + 5d10 \xD7 4d4 / 10 kg)",
	scores : [0, 0, 2, 1, 0, 0],
	trait : "Fire Genasi (+2 Constitution, +1 Intelligence)\n\nReach to the Blaze:\n   I know the Produce Flame cantrip.\n   Once I reach 3rd level, I can cast the Burning Hands spell once as a 1st-level spell.\n   I regain the ability to cast it this way when I finish a long rest.\n   Constitution is my spellcasting ability for these spells.",
	spellcastingAbility : 3,
	spellcastingBonus : {
		name : "Reach to the Blaze (level 1)",
		spells : ["produce flame"],
		selection : ["produce flame"],
		firstCol : 'atwill'
	},
	features : {
		"burning hands" : {
			name : "Reach to the Blaze (level 3)",
			limfeaname : "Burning Hands",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Reach to the Blaze (level 3)",
				spells : ["burning hands"],
				selection : ["burning hands"],
				firstCol : 'oncelr'
			}
		}
	}
};
RaceList["water genasi"] = {
	regExpSearch : /^(?=.*(genasi|planetouched))(?=.*\bwaters?\b).*$/i,
	name : "Water genasi",
	sortname : "Genasi, Water",
	source : [["E", 10], ["W", 172]],
	plural : "Water genasi",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Primordial"],
	dmgres : ["Acid"],
	age : " reach adulthood in their late teens and live up to 120 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 lb (50 + 5d10 \xD7 4d4 / 10 kg)",
	scores : [0, 0, 2, 0, 1, 0],
	trait : "Water Genasi (+2 Constitution, +1 Wisdom)\nAmphibious: I can breathe air and water.\nSwim: I have a swimming speed of 30 feet.\nCall to the Wave: I know the Shape Water cantrip.\n   When I reach 3rd level, I can cast the Create or Destroy Water spell as a 2nd-level spell once with this trait, and I regain the ability to cast it this way when I finish a long rest.\n   Constitution is my spellcasting ability for these spells.",
	spellcastingAbility : 3,
	spellcastingBonus : {
		name : "Call to the Wave (level 1)",
		spells : ["shape water"],
		selection : ["shape water"],
		firstCol : 'atwill'
	},
	features : {
		"create or destroy water" : {
			name : "Call to the Wave (level 3)",
			limfeaname : "Create/Destroy Water (level 2)",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Call to the Wave (level 3)",
				spells : ["create or destroy water"],
				selection : ["create or destroy water"],
				firstCol : 'oncelr'
			}
		}
	}
};
RaceList["goliath"] = { // Added cold resistance in accordance with the VGtM 2020 errata https://media.wizards.com/2020/dnd/downloads/VGtM-Errata.pdf
	regExpSearch : /goliath/i,
	name : "Goliath",
	source : [["E", 11], ["V", 108], ["W", 175]],
	plural : "Goliaths",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Giant"],
	dmgres : ["Cold"],
	skills : ["Athletics"],
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " are between 6 and a half and 8 feet tall (6'2\" + 2d10\")",
	weight : " weigh between 280 and 340 lb (200 + 2d10 \xD7 2d6 lb)",
	heightMetric : " are between 2 and 2,4 metres tall (190 + 5d10 cm)",
	weightMetric : " weigh between 100 and 155 kg (90 + 5d10 \xD7 4d6 / 10 kg)",
	scores : [2, 0, 1, 0, 0, 0],
	features : {
		"stone's endurance" : {
			name : "Stone's Endurance",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			action : ["reaction", ""]
		}
	},
	trait : "Goliath (+2 Strength, +1 Constitution)" + (typePF ? "\n" : "") + "\nStone's Endurance: Once per short rest, when I take damage, I can use my reaction to reduce the damage by 1d12 + my Con" + (typePF ? "" : "stitution") + " modifier." + (typePF ? "\n" : "") + "\nPowerful Build: I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift." + (typePF ? "\n" : "") + "\nMountain Born: I have resistance to cold damage and I'm acclimated to high altitude, including elevations above 20000 feet.",
	carryingCapacity : 2
};

// Feat
FeatsList["svirfneblin magic"] = {
	name : "Svirfneblin Magic",
	source : [["E", 7], ["S", 115], ["MToF", 114]],
	prerequisite : "Being a Svirfneblin (Deep Gnome)",
	prereqeval : function(v) { return CurrentRace.known === 'deep gnome'; },
	descriptionFull : "You have inherited the innate spellcasting ability of your ancestors. This ability allows you to cast Nondetection on yourself at will, without needing a material component. You can also cast each of the following spells once with this ability: Blindness/Deafness, Blur, and Disguise Self. You regain the ability to cast these spells when you finish a long rest.\n   Intelligence is your spellcasting ability for these spells, and you cast them at their lowest possible levels.",
	description : "I can cast Nondetection on myself at will, without a material component. I can also cast the spells Blindness/Deafness, Blur, and Disguise Self once each. I regain the ability to cast these spells when I finish a long rest. Intelligence is my spellcasting ability for these spells.",
	spellcastingBonus : [{
		name : "at will (self only)",
		spellcastingAbility : 4,
		spells : ["nondetection"],
		selection : ["nondetection"],
		firstCol : 'atwill'
	}, {
		name : "1x long rest (self only)",
		spells : ["blindness/deafness", "blur", "disguise self"],
		selection : ["blindness/deafness", "blur", "disguise self"],
		firstCol : 'oncelr',
		times : 3
	}],
	spellChanges : {
		"nondetection" : {
			range : "Self",
			components : "V,S",
			compMaterial : "",
			description : "I am hidden from all divination magic",
			changes : "Using Svirfneblin Magic, I can cast Nondetection without a material component, but only on myself."
		}
	}
};

// Spells
SpellsList["abi-dalzim's horrid wilting"] = {
	name : "Abi-Dalzim's Horrid Wilting",
	nameShort : "Abi-D's Horrid Wilting",
	nameAlt : "Horrid Wilting",
	classes : ["sorcerer", "wizard"],
	source : [["X", 150], ["E", 15]],
	level : 8,
	school : "Necro",
	time : "1 a",
	range : "150 ft",
	components : "V,S,M",
	compMaterial : "A bit of sponge",
	duration : "Instantaneous",
	save : "Con",
	description : "30-ft cube all crea 12d8 Necrotic dmg; save halves; plants/water elem. dis. const/undead immune",
	descriptionFull : "You draw the moisture from every creature in a 30-foot cube centered on a point you choose within range. Each creature in that area must make a Constitution saving throw. Constructs and undead aren't affected, and plants and water elementals make this saving throw with disadvantage. A creature takes 12d8 necrotic damage on a failed save, or half as much damage on a successful one." + "\n   " + "Nonmagical plants in the area that aren't creatures, such as trees and shrubs, wither and die instantly."
};
SpellsList["absorb elements"] = {
	name : "Absorb Elements",
	classes : ["artificer", "druid", "ranger", "sorcerer", "wizard"],
	source : [["X", 150], ["E", 15]],
	level : 1,
	school : "Abjur",
	time : "1 rea",
	range : "Self",
	components : "S",
	duration : "1 rnd",
	description : "Acid, Cold, Fire, Lightning, or Thunder resistance vs. 1 atk; first melee hit next rnd +1d6+1d6/SL dmg",
	descriptionFull : "The spell captures some of the incoming energy, lessening its effect on you and storing it for your next melee attack. You have resistance to the triggering damage type until the start of your next turn. Also, the first time you hit with a melee attack on your next turn, the target takes an extra 1d6 damage of the triggering type, and the spell ends." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each slot level above 1st."
};
SpellsList["aganazzar's scorcher"] = {
	name : "Aganazzar's Scorcher",
	nameAlt : "Scorch", //as per the Spell Compandium's (DnD 3.5e) alternative name
	classes : ["sorcerer", "wizard"],
	source : [["X", 150], ["E", 15]],
	level : 2,
	school : "Evoc",
	time : "1 a",
	range : "30-ft line",
	components : "V,S,M",
	compMaterial : "A red dragon's scale",
	duration : "Instantaneous",
	save : "Dex",
	description : "30-ft long 5-ft wide line all creatures 3d8+1d8/SL Fire dmg; save halves",
	descriptionFull : "A line of roaring flame 30 feet long and 5 feet wide emanates from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 3d8 fire damage on a failed save, or half as much damage on a successful one." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd."
};
SpellsList["beast bond"] = {
	name : "Beast Bond",
	classes : ["druid", "ranger"],
	source : [["X", 150], ["E", 15]],
	level : 1,
	school : "Div",
	time : "1 a",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "A bit of fur wrapped in a cloth",
	duration : "Conc, 10 min",
	description : "Telepathic link with 1 beast Int<4 while in line of sight; beast has adv. on attacks vs. crea I can see",
	descriptionFull : "You establish a telepathic link with one beast you touch that is friendly to you or charmed by you. The spell fails if the beast's Intelligence is 4 or higher. Until the spell ends, the link is active while you and the beast are within line of sight of each other. Through the link, the beast can understand your telepathic messages to it, and it can telepathically communicate simple emotions and concepts back to you. While the link is active, the beast gains advantage on attack rolls against any creature within 5 feet of you that you can see."
};
SpellsList["bones of the earth"] = {
	name : "Bones of the Earth",
	classes : ["druid"],
	source : [["X", 150], ["E", 15]],
	level : 6,
	school : "Trans",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	description : "6+2/SL 5-ft dia stone lift up 30 ft; \u2265Medium crea save or lifted, 6d6 Bludg. dmg if hit ceiling; see B",
	descriptionShorter : "6+2/SL 5-ft dia stone lift up 30 ft; \u2265Medium crea save or lift, 6d6 Bludg. dmg if hit ceiling; see B",
	descriptionShorterMetric : "6+2/SL 1,5-m dia stone lift 9 m; \u2265Medium crea save or lift, 6d6 Bludg. dmg if hit ceiling; see B",
	descriptionFull : "You cause up to six pillars of stone to burst from places on the ground that you can see within range. Each pillar is a cylinder that has a diameter of 5 feet and a height of up to 30 feet. The ground where a pillar appears must be wide enough for its diameter, and you can target the ground under a creature if that creature is Medium or smaller. Each pillar has AC 5 and 30 hit points. When reduced to 0 hit points, a pillar crumbles into rubble, which creates an area of difficult terrain with a 10-foot radius that lasts until the rubble is cleared. Each 5-foot-diameter portion of the area requires at least 1 minute to clear by hand.\n   If a pillar is created under a creature, that creature must succeed on a Dexterity saving throw or be lifted by the pillar. A creature can choose to fail the save.\n   If a pillar is prevented from reaching its full height because of a ceiling or other obstacle, a creature on the pillar takes 6d6 bludgeoning damage and is restrained, pinched between the pillar and the obstacle. The restrained creature can use an action to make a Strength or Dexterity check (the creature's choice) against the spell's save DC. On a success, the creature is no longer restrained and must either move off the pillar or fall off it." + AtHigherLevels + "When you cast this spell using a spell slot of 7th level or higher, you can create two additional pillars for each slot level above 6th."
};
SpellsList["catapult"] = {
	name : "Catapult",
	classes : ["artificer", "sorcerer", "wizard"],
	source : [["X", 150], ["E", 15]],
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "60 ft",
	components : "S",
	duration : "Instantaneous",
	save : "Dex",
	description : "Send 5+5/SL lb unattended object in 90 ft straight line; if crea hit, save or 3d8+1d8/SL Bludg. dmg",
	descriptionFull : "Choose one object weighing 1 to 5 pounds within range that isn't being worn or carried. The object flies in a straight line up to 90 feet in a direction you choose before falling to the ground, stopping early if it impacts against a solid surface. If the object would strike a creature, that creature must make a Dexterity saving throw. On a failed save, the object strikes the target and stops moving. When the object strikes something, the object and what it strikes each take 3d8 bludgeoning damage." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the maximum weight of objects that you can target with this spell increases by 5 pounds, and the damage increases by 1d8, for each slot level above 1st."
};
SpellsList["control flames"] = {
	name : "Control Flames",
	classes : ["druid", "sorcerer", "wizard"],
	source : [["X", 152], ["E", 16]],
	level : 0,
	school : "Trans",
	time : "1 a",
	range : "60 ft",
	components : "S",
	duration : "Instant. or 1 h",
	description : "Nonmagical flame up to 5 cu ft; instant: expand/extinguish, 1h: brighten/dim/color/create shapes",
	descriptionFull : "You choose nonmagical flame that you can see within range and that fits within a 5-foot cube. You affect it in one of the following ways." + "\n \u2022 " + "You instantaneously expand the flame 5 feet in one direction, provided that wood or other fuel is present in the new location." + "\n \u2022 " + "You instantaneously extinguish the flames within the cube." + "\n \u2022 " + "You double or halve the area of bright light and dim light cast by the flame, change its color, or both. The change lasts for 1 hour." + "\n \u2022 " + "You cause simple shapes-such as the vague form of a creature, an inanimate object, or a location-to appear within the flames and animate as you like. The shapes last for 1 hour." + "\n   " + "If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."
};
SpellsList["control winds"] = {
	name : "Control Winds",
	classes : ["druid", "sorcerer", "wizard"],
	source : [["X", 152], ["E", 16], ["UA:D", 8]],
	level : 5,
	school : "Trans",
	time : "1 a",
	range : "300 ft",
	components : "V,S",
	duration : "Conc, 1 h",
	description : "100-ft cube of air either gusts, downdraft, or updraft; affects flying/jump/ranged; 1 a change; see B",
	descriptionFull : "You take control of the air in a 100-foot cube that you can see within range. Choose one of the following effects when you cast the spell. The effect lasts for the spell's duration, unless you use your action on a later turn to switch to a different effect. You can also use your action to temporarily halt the effect or to restart one you've halted." + "\n   " + toUni("Gusts") + ": A wind picks up within the cube, continually blowing in a horizontal direction you designate. You choose the intensity of the wind: calm, moderate, or strong. If the wind is moderate or strong, ranged weapon attacks that enter or leave the cube or pass through it have disadvantage on their attack rolls. If the wind is strong, any creature moving against the wind must spend 1 extra foot of movement for each foot moved." + "\n   " + toUni("Downdraft") + ": You cause a sustained blast of strong wind to blow downward from the top of the cube. Ranged weapon attacks that pass through the cube or that are made against targets within it have disadvantage on their attack rolls. A creature must make a Strength saving throw if it flies into the cube for the first time on a turn or starts its turn there flying. On a failed save, the creature is knocked prone." + "\n   " + toUni("Updraft") + ": You cause a sustained updraft within the cube, rising upward from the cube's bottom side. Creatures that end a fall within the cube take only half damage from the fall. When a creature in the cube makes a vertical jump, the creature can jump up to 10 feet higher than normal."
};
SpellsList["create bonfire"] = {
	name : "Create Bonfire",
	classes : ["artificer", "druid", "sorcerer", "warlock", "wizard"],
	source : [["X", 152], ["E", 16]],
	level : 0,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "5-ft cube all crea now/enter/end turn save or 1d8 Fire dmg; ignites flammable; +1d8 at CL 5/11/17",
	descriptionShorter : "5-ft cube all now/enter/end save or 1d8 Fire dmg; ignites flammable; +1d8 at CL 5/11/17",
	descriptionCantripDie : "5-ft cube all crea at casting, entering, or end turn in save or `CD`d8 Fire dmg; ignites flammable",
	descriptionFull : "You create a bonfire on ground that you can see within range. Until the spell ends, the magic bonfire fills a 5-foot cube. Any creature in the bonfire's space when you cast the spell must succeed on a Dexterity saving throw or take 1d8 fire damage. A creature must also make the saving throw when it moves into the bonfire's space for the first time on a turn or ends its turn there." + "\n   " + "The bonfire ignites flammable objects in its area that aren't being worn or carried." + "\n   " + "The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
};
SpellsList["dust devil"] = {
	name : "Dust Devil",
	classes : ["druid", "sorcerer", "wizard"],
	source : [["X", 154], ["E", 17]],
	level : 2,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "A pinch of dust",
	duration : "Conc, 1 min",
	save : "Str",
	description : "5-ft cube; all in 5-ft 1d8+1d8/SL Bludg. dmg and pushed 10 ft away; save halves, no push; see book",
	descriptionFull : "Choose an unoccupied 5-foot cube of air that you can see within range. An elemental force that resembles a dust devil appears in the cube and lasts for the spell's duration." + "\n   " + "Any creature that ends its turn within 5 feet of the dust devil must make a Strength saving throw. On a failed save, the creature takes 1d8 bludgeoning damage and is pushed 10 feet away from the dust devil. On a successful save, the creature takes half as much damage and isn't pushed." + "\n   " + "As a bonus action, you can move the dust devil up to 30 feet in any direction. If the dust devil moves over sand, dust, loose dirt, or light gravel, it sucks up the material and forms a 10-foot-radius cloud of debris around itself that lasts until the start of your next turn. The cloud heavily obscures its area." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd."
};
SpellsList["earthbind"] = {
	name : "Earthbind",
	classes : ["druid", "sorcerer", "warlock", "wizard"],
	source : [["X", 154], ["E", 17]],
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "300 ft",
	components : "V",
	duration : "Conc, 1 min",
	save : "Str",
	description : "1 creatures save or fly speed is reduced to 0; airborne creatures safely descend at 60 ft per round",
	descriptionFull : "Choose one creature you can see within range. Yellow strips of magical energy loop around the creature. The target must succeed on a Strength saving throw, or its flying speed (if any) is reduced to 0 feet for the spell's duration. An airborne creature affected by this spell safely descends at 60 feet per round until it reaches the ground or the spell ends."
};
SpellsList["earth tremor"] = {
	name : "Earth Tremor",
	classes : ["bard", "druid", "sorcerer", "wizard"],
	source : [["X", 155], ["E", 17]],
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "10 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	description : "All crea in range except me save or 1d6+1d6/SL Bludgeoning dmg and prone; loose ground is dif. ter.",
	descriptionFull : "You cause a tremor in the ground within range. Each creature other than you in that area must make a Dexterity saving throw. On a failed save, a creature takes 1d6 bludgeoning damage and is knocked prone. If the ground in that area is loose earth or stone, it becomes difficult terrain until cleared, with each 5-foot-diameter portion requiring at least 1 minute to clear by hand." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
};
SpellsList["elemental bane"] = {
	name : "Elemental Bane",
	classes : ["artificer", "druid", "warlock", "wizard"],
	source : [["X", 155], ["E", 17]],
	level : 4,
	school : "Trans",
	time : "1 a",
	range : "90 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Con",
	description : "1+1/SL crea, each max 30 ft apart, save or 1 energy: lose resist. to it \u0026 +2d6 to first dmg with it/turn",
	descriptionShorter : "1+1/SL crea, each max 30 ft apart, save or 1 energy: lose resist. \u0026 +2d6 first dmg/turn",
	descriptionFull : "Choose one creature you can see within range, and choose one of the following damage types - acid, cold, fire, lightning, or thunder. The target must succeed on a Constitution saving throw or be affected by the spell for its duration. The first time each turn the affected target takes damage of the chosen type, the target takes an extra 2d6 damage of that type. Moreover, the target loses any resistance to that damage type until the spell ends." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th. The creatures must be within 30 feet of each other when you target them.",
	dynamicDamageBonus : {
		multipleDmgTypes : {
			dmgTypes : ["acid", "cold", "fire", "lightning", "thunder"],
			inDescriptionAs : "first"
		}
	}
};
SpellsList["erupting earth"] = {
	name : "Erupting Earth",
	classes : ["druid", "sorcerer", "wizard"],
	source : [["X", 155], ["E", 17]],
	level : 3,
	school : "Trans",
	time : "1 a",
	range : "120 ft",
	components : "V,S,M",
	compMaterial : "A piece of obsidian",
	duration : "Instantaneous",
	save : "Dex",
	description : "20-ft cube all crea 3d12+1d12/SL Bludgeoning dmg; save halves; area becomes difficult terrain",
	descriptionFull : "Choose a point you can see on the ground within range. A fountain of churned earth and stone erupts in a 20-foot cube centered on that point. Each creature in that area must make a Dexterity saving throw. A creature takes 3d12 bludgeoning damage on a failed save, or half as much damage on a successful one. Additionally, the ground in that area becomes difficult terrain until cleared. Each 5-foot-square portion of the area requires at least 1 minute to clear by hand." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d12 for each slot level above 3rd."
};
SpellsList["flame arrows"] = {
	name : "Flame Arrows",
	classes : ["artificer", "druid", "ranger", "sorcerer", "wizard"],
	source : [["X", 156], ["E", 18]],
	level : 3,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Conc, 1 h",
	description : "12+2/SL ammunition drawn from touched quiver do +1d6 Fire damage on a successful hit",
	descriptionFull : "You touch a quiver containing arrows or bolts. When a target is hit by a ranged weapon attack using a piece of ammunition drawn from the quiver, the target takes an extra 1d6 fire damage. The spell's magic ends on the piece of ammunition when it hits or misses, and the spell ends when twelve pieces of ammunition have been drawn from the quiver." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the number of pieces of ammunition you can affect with this spell increases by two for each slot level above 3rd."
};
SpellsList["frostbite"] = {
	name : "Frostbite",
	classes : ["artificer", "druid", "sorcerer", "warlock", "wizard"],
	source : [["X", 156], ["E", 18]],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	description : "1 crea save or 1d6 Cold dmg and dis. on next weapon attack roll; +1d6 at CL 5, 11, and 17",
	descriptionCantripDie : "1 crea save or `CD`d6 Cold dmg and dis. on next weapon attack roll",
	descriptionFull : "You cause numbing frost to form on one creature that you can see within range. The target must make a Constitution saving throw. On a failed save, the target takes 1d6 cold damage, and it has disadvantage on the next weapon attack roll it makes before the end of its next turn." + "\n   " + "The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
};
SpellsList["gust"] = {
	name : "Gust",
	classes : ["druid", "sorcerer", "wizard"],
	source : [["X", 157], ["E", 19], ["E:RLW", 50], ["UA:D", 6], ["WGtE", 107]],
	level : 0,
	school : "Trans",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Str",
	description : "Med. or smaller crea save or push 5 ft; or push unattended 5 lb obj 10 ft; or harmless sensory effect",
	descriptionFull : "You seize the air and compel it to create one of the following effects at a point you can see within range." + "\n " + "\u2022 One Medium or smaller creature that you choose must succeed on a Strength saving throw or be pushed up to 5 feet away from you." + "\n " + "\u2022 You create a small blast of air capable of moving one object that is neither held nor carried and that weighs no more than 5 pounds. The object is pushed up to 10 feet away from you. It isn't pushed with enough force to cause damage." + "\n " + "\u2022 You create a harmless sensory affect using air, such as causing leaves to rustle, wind to slam shutters shut, or your clothing to ripple in a breeze."
};
SpellsList["ice knife"] = {
	name : "Ice Knife",
	classes : ["druid", "sorcerer", "wizard"],
	source : [["X", 157], ["E", 19]],
	level : 1,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "S,M",
	compMaterial : "A drop of water or piece of ice",
	duration : "Instantaneous",
	save : "Dex",
	description : "Ranged atk for 1d10 Piercing dmg; hit/miss 5-ft rad on target all crea save or 2d6+1d6/SL Cold dmg",
	descriptionShorter : "Ranged atk 1d10 Piercing dmg; on target 5-ft rad all crea save or 2d6+1d6/SL Cold dmg",
	descriptionFull : "You create a shard of ice and fling it at one creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 piercing damage. Hit or miss, the shard then explodes. The target and each creature within 5 feet of it must succeed on a Dexterity saving throw or take 2d6 cold damage." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the cold damage increases by 1d6 for each slot level above 1st."
};
SpellsList["immolation"] = {
	name : "Immolation",
	classes : ["sorcerer", "wizard"],
	source : [["X", 158], ["E", 19]],
	level : 5,
	school : "Evoc",
	time : "1 a",
	range : "90 ft",
	components : "V",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "1 crea save or 8d6 Fire dmg \u0026 burns for 4d6 Fire dmg/rnd; save each rnd to end; save half, no burning",
	descriptionShorter : "1 crea save or 8d6 Fire dmg \u0026 4d6 Fire dmg/rnd; save each rnd to end; save half, no rnds",
	descriptionFull : "Flames wreathe one creature you can see within range. The target must make a Dexterity saving throw. It takes 8d6 fire damage on a failed save, or half as much damage on a successful one. On a failed save, the target also burns for the spell's duration. The burning target sheds bright light in a 30-foot radius and dim light for an additional 30 feet. At the end of each of its turns, the target repeats the saving throw. It takes 4d6 fire damage on a failed save, and the spell ends on a successful one. These magical flames can't be extinguished by nonmagical means." + "\n   " + "If damage from this spell kills a target, the target is turned to ash.",
	dynamicDamageBonus : { multipleDmgMoments : false }
};
SpellsList["investiture of flame"] = {
	name : "Investiture of Flame",
	classes : ["druid", "sorcerer", "warlock", "wizard"],
	source : [["X", 159], ["E", 19]],
	level : 6,
	school : "Trans",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Conc, 10 min",
	save : "Dex",
	description : "Fire immune; Cold res.; 1d10 Fire dmg in 5 ft; 1 a 15-ft long 5-ft wide all crea 4d8 Fire dmg, save half",
	descriptionShorter : "Fire im.; Cold res.; 1d10 Fire dmg in 5 ft; 1a 15-ft long 5-ft wide all 4d8 Fire dmg, save half",
	descriptionShorterMetric : "Fire immune; Cold res.; 1d10 Fire dmg in 1,5 m; 1 a 4,5-m long all 4d8 Fire dmg, save half",
	descriptionFull : "Flames race across your body, shedding bright light in a 30-foot radius and dim light for an additional 30 feet for the spell's duration. The flames don't harm you. Until the spell ends, you gain the following benefits." + "\n " + "\u2022 You are immune to fire damage and have resistance to cold damage." + "\n " + "\u2022 Any creature that moves within 5 feet of you for the first time on a turn or ends its turn there takes 1d10 fire damage." + "\n " + "\u2022 You can use your action to create a line of fire 15 feet long and 5 feet wide extending from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 4d8 fire damage on a failed save, or half as much damage on a successful one."
};
SpellsList["investiture of ice"] = {
	name : "Investiture of Ice",
	classes : ["druid", "sorcerer", "warlock", "wizard"],
	source : [["X", 159], ["E", 19]],
	level : 6,
	school : "Trans",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Conc, 10 min",
	save : "Con",
	description : "Cold im.; Fire res.; 10-ft rad dif. ter.; 1 a 15-ft cone all crea 4d6 Cold dmg, half spd; save half, no spd",
	descriptionShorter : "Cold im.; Fire res.; 10-ft rad dif. ter.; 1 a 15-ft cone all 4d6 Cold dmg, half speed; save half",
	descriptionFull : "Until the spell ends, ice rimes your body, and you gain the following benefits." + "\n " + "\u2022 You are immune to cold damage and have resistance to fire damage." + "\n " + "\u2022 You can move across difficult terrain created by ice or snow without spending extra movement." + "\n " + "\u2022 The ground in a 10-foot radius around you is icy and is difficult terrain for creatures other than you. The radius moves with you." + "\n " + "\u2022 You can use your action to create a 15-foot cone of freezing wind extending from your outstretched hand in a direction you choose. Each creature in the cone must make a Constitution saving throw. A creature takes 4d6 cold damage on a failed save, or half as much damage on a successful one. A creature that fails its save against this effect has its speed halved until the start of your next turn."
};
SpellsList["investiture of stone"] = {
	name : "Investiture of Stone",
	classes : ["druid", "sorcerer", "warlock", "wizard"],
	source : [["X", 159], ["E", 19]],
	level : 6,
	school : "Trans",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Conc, 10 min",
	save : "Dex",
	description : "Nonmagical Bludg/Pierc/Slash resist.; 1 a 15-ft rad all crea save or prone; move through earth/stone",
	descriptionFull : "Until the spell ends, bits of rock spread across your body, and you gain the following benefits:" + "\n \u2022 " + "You have resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks." + "\n \u2022 " + "You can use your action to create a small earthquake on the ground in a 15-foot radius centered on you. Other creatures on that ground must succeed on a Dexterity saving throw or be knocked prone." + "\n \u2022 " + "You can move across difficult terrain made of earth or stone without spending extra movement. You can move through solid earth or stone as if it was air and without destabilizing it, but you can't end your movement there. If you do so, you are ejected to the nearest unoccupied space, this spell ends, and you are stunned until the end of your next turn."
};
SpellsList["investiture of wind"] = {
	name : "Investiture of Wind",
	classes : ["druid", "sorcerer", "warlock", "wizard"],
	source : [["X", 160], ["E", 20]],
	level : 6,
	school : "Trans",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Conc, 10 min",
	save : "Con",
	description : "Rngd wea atks dis. vs. me; fly 60 ft; 1 a 15-ft cube in 60 ft all 2d10 Bludg. dmg, push 10 ft, save half",
	descriptionShorter : "Rngd wea atk dis; fly 60 ft; 1 a 15-ft cu in 60 ft all 2d10 Bludg. dmg, push 10 ft, save half",
	descriptionFull : "Until the spell ends, wind whirls around you, and you gain the following benefits." + "\n " + "\u2022 Ranged weapon attacks made against you have disadvantage on the attack roll." + "\n " + "\u2022 You gain a flying speed of 60 feet. If you are still flying when the spell ends, you fall, unless you can somehow prevent it." + "\n " + "\u2022 You can use your action to create a 15-foot cube of swirling wind centered on a point you can see within 60 feet of you. Each creature in that area must make a Constitution saving throw. A creature takes 2d10 bludgeoning damage on a failed save, or half as much damage on a successful one. If a Large or smaller creature fails the save, that creature is also pushed up to 10 feet away from the center of the cube."
};
SpellsList["maelstrom"] = {
	name : "Maelstrom",
	classes : ["druid"],
	source : [["X", 160], ["E", 20]],
	level : 5,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	components : "V,S,M",
	compMaterial : "Paper or leaf in the shape of a funnel",
	duration : "Conc, 1 min",
	save : "Str",
	description : "5-ft deep 30-ft rad dif. ter.; all crea starting turn in save or 6d6 Bludg. dmg and pulled 10 ft to center",
	descriptionShorter : "5-ft deep 30-ft rad dif. ter.; all start turn in save or 6d6 Bludg. dmg \u0026 pull 10 ft to center",
	descriptionFull : "A mass of 5-foot-deep water appears and swirls in a 30-foot radius centered on a point you can see within range. The point must be on ground or in a body of water. Until the spell ends, that area is difficult terrain, and any creature that starts its turn there must succeed on a Strength saving throw or take 6d6 bludgeoning damage and be pulled 10 feet toward the center."
};
SpellsList["magic stone"] = {
	name : "Magic Stone",
	classes : ["artificer", "druid", "warlock"],
	source : [["X", 160], ["E", 20]],
	level : 0,
	school : "Trans",
	time : "1 bns",
	range : "Touch",
	components : "V,S",
	duration : "1 min",
	description : "Imbue 3 pebbles for spell attacks, thrown 60 ft or with sling, do 1d6+spellcasting mod Bludg. dmg",
	descriptionShorter : "Imbue 3 pebbles for spell atk, thrown 60 ft or sling, do 1d6+spellcasting mod Bludg. dmg",
	descriptionFull : "You touch one to three pebbles and imbue them with magic. You or someone else can make a ranged spell attack with one of the pebbles by throwing it or hurling it with a sling. If thrown, it has a range of 60 feet. If someone else attacks with the pebble, that attacker adds your spellcasting ability modifier, not the attacker's, to the attack roll. On a hit, the target takes bludgeoning damage equal to 1d6 + your spellcasting ability modifier. Hit or miss, the spell then ends on the stone." + "\n   " + "If you cast this spell again, the spell ends early on any pebbles still affected by it."
};
SpellsList["maximilian's earthen grasp"] = {
	name : "Maximilian's Earthen Grasp",
	nameShort : "Max's Earthen Grasp",
	nameAlt : "Earthen Grasp",
	classes : ["sorcerer", "wizard"],
	source : [["X", 161], ["E", 20]],
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "30 ft",
	components : "V,S,M",
	compMaterial : "A miniature hand sculpted from clay",
	duration : "Conc, 1 min",
	save : "Str",
	description : "Medium hand atks 1 crea: save or 2d6 Bludg. dmg \u0026 restrained; 1 a hand moves/atks, releases; see B",
	descriptionShorter : "Medium hand atk 1 crea: save or 2d6 Bludg. dmg \u0026 restrained; 1 a move/atk, release; see B",
	descriptionFull : "You choose a 5-foot-square unoccupied space on the ground that you can see within range. A Medium hand made from compacted soil rises there and reaches for one creature you can see within 5 feet of it. The target must make a Strength saving throw. On a failed save, the target takes 2d6 bludgeoning damage and is restrained for the spell's duration." + "\n   " + "As an action, you can cause the hand to crush the restrained target, which must make a Strength saving throw. The target takes 2d6 bludgeoning damage on a failed save, or half as much damage on a successful one." + "\n   " + "To break out, the restrained target can use its action to make a Strength check against your spell save DC. On a success, the target escapes and is no longer restrained by the hand." + "\n   " + "As an action, you can cause the hand to reach for a different creature or to move to a different unoccupied space within range. The hand releases a restrained target if you do either."
};
SpellsList["melf's minute meteors"] = {
	name : "Melf's Minute Meteors",
	nameAlt : "Minute Meteors",
	classes : ["sorcerer", "wizard"],
	source : [["X", 161], ["E", 20]],
	level : 3,
	school : "Evoc",
	time : "1 a",
	range : "Self",
	components : "V,S,M",
	compMaterial : "Niter, sulfur, and pine tar formed into a bead",
	duration : "Conc, 10 min",
	save : "Dex",
	description : "6+2/SL meteors; at casting/bns a send up to two 120 ft for 5-ft rad all crea 2d6 Fire dmg; save half",
	descriptionShorter : "6+2/SL meteors; at cast/bns a send up to two 120 ft for 5-ft rad all 2d6 Fire dmg; save half",
	descriptionFull : "You create six tiny meteors in your space. They float in the air and orbit you for the spell's duration. When you cast the spell-and as a bonus action on each of your turns thereafter-you can expend one or two of the meteors, sending them streaking toward a point or points you choose within 120 feet of you. Once a meteor reaches its destination or impacts against a solid surface, the meteor explodes. Each creature within 5 feet of the point where the meteor explodes must make a Dexterity saving throw. A creature takes 2d6 fire damage on a failed save, or half as much damage on a successful one." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the number of meteors created increases by two for each slot level above 3rd."
};
SpellsList["mold earth"] = {
	name : "Mold Earth",
	classes : ["druid", "sorcerer", "wizard"],
	source : [["X", 162], ["E", 21]],
	level : 0,
	school : "Trans",
	time : "1 a",
	range : "30 ft",
	components : "S",
	duration : "Instant. or 1 h",
	description : "5 cu ft earth; instant.: excavate; 1h: change to difficult or normal terrain, or change shape and color",
	descriptionFull : "You choose a portion of dirt or stone that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways." + "\n " + "\u2022 If you target an area of loose earth, you can instantaneously excavate it, move it along the ground, and deposit it up to 5 feet away. This movement doesn't have enough force to cause damage." + "\n " + "\u2022 You cause shapes, colors, or both to appear on the dirt or stone, spelling out words, creating images, or shaping patterns. The changes last for 1 hour." + "\n " + "\u2022 If the dirt or stone you target is on the ground, you cause it to become difficult terrain. Alternatively, you can cause the ground to become normal terrain if it is already difficult terrain. This change lasts for 1 hour." + "\n\n" + "If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."
};
SpellsList["primordial ward"] = {
	name : "Primordial Ward",
	classes : ["druid"],
	source : [["X", 163], ["E", 21]],
	level : 6,
	school : "Abjur",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
	description : "Acid, Cold, Fire, Lightning, and Thunder resistance; use rea to gain 1 immunity for 1 rnd, spell ends",
	descriptionFull : "You have resistance to acid, cold, fire, lightning, and thunder damage for the spell's duration." + "\n   " + "When you take damage of one of those types, you can use your reaction to gain immunity to that type of damage, including against the triggering damage. If you do so, the resistances end, and you have the immunity until the end of your next turn, at which time the spell ends."
};
SpellsList["pyrotechnics"] = {
	name : "Pyrotechnics",
	classes : ["artificer", "bard", "sorcerer", "wizard"],
	source : [["X", 163], ["E", 21]],
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	description : "5 cu ft nonma. flame extinguish, or 10-ft rad all crea save or blind 1 rnd, or 20-ft rad hvy obsc. 1 min",
	descriptionFull : "Choose an area of nonmagical flame that you can see and that fits within a 5-foot cube within range. You can extinguish the fire in that area, and you create either fireworks or smoke when you do so." + "\n   " + toUni("Fireworks") + ": The target explodes with a dazzling display of colors. Each creature within 10 feet of the target must succeed on a Constitution saving throw or become blinded until the end of your next turn." + "\n   " + toUni("Smoke") + ": Thick black smoke spreads out from the target in a 20-foot radius, moving around corners. The area of the smoke is heavily obscured. The smoke persists for 1 minute or until a strong wind disperses it."
};
SpellsList["shape water"] = {
	name : "Shape Water",
	classes : ["druid", "sorcerer", "wizard"],
	source : [["X", 164], ["E", 21], ["W", 172]],
	level : 0,
	school : "Trans",
	time : "1 a",
	range : "30 ft",
	components : "S",
	duration : "Instant. or 1 h",
	description : "5 cu ft water; instant: move/change flow; 1h: simple shapes/change color or opacity/freeze",
	descriptionFull : "You choose an area of water that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways." + "\n " + "\u2022 You instantaneously move or otherwise change the flow of the water as you direct, up to 5 feet in any direction. This movement doesn't have enough force to cause damage." + "\n " + "\u2022 You cause the water to form into simple shapes and animate at your direction. This change lasts for 1 hour." + "\n " + "\u2022 You change the water's color or opacity. The water must be changed in the same way throughout. This change lasts for 1 hour." + "\n " + "\u2022 You freeze the water, provided that there are no creatures in it. The water unfreezes in 1 hour." + "\n\n" + "If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."
};
SpellsList["skywrite"] = {
	name : "Skywrite",
	classes : ["artificer", "bard", "druid", "wizard"],
	source : [["X", 165], ["E", 22]],
	ritual : true,
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "Sight",
	components : "V,S",
	duration : "Conc, 1 h",
	description : "Write up to 10 words with clouds in a part of the sky I can see; strong wind can diperse the clouds",
	descriptionFull : "You cause up to ten words to form in a part of the sky you can see. The words appear to be made of cloud and remain in place for the spell's duration. The words dissipate when the spell ends. A strong wind can disperse the clouds and end the spell early."
};
SpellsList["snilloc's snowball swarm"] = {
	name : "Snilloc's Snowball Swarm",
	nameAlt : "Snowball Swarm",
	classes : ["sorcerer", "wizard"],
	source : [["X", 165], ["E", 22]],
	level : 2,
	school : "Evoc",
	time : "1 a",
	range : "90 ft",
	components : "V,S,M",
	compMaterial : "A piece of ice or a small white rock chip",
	duration : "Instantaneous",
	save : "Dex",
	description : "5-ft radius all creatures 3d6+1d6/SL Cold damage; save halves",
	descriptionFull : "A flurry of magic snowballs erupts from a point you choose within range. Each creature in a 5-foot-radius sphere centered on that point must make a Dexterity saving throw. A creature takes 3d6 cold damage on a failed save, or half as much damage on a successful one." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd."
};
SpellsList["storm sphere"] = {
	name : "Storm Sphere",
	classes : ["sorcerer", "wizard"],
	source : [["X", 166], ["E", 22]],
	level : 4,
	school : "Evoc",
	time : "1 a",
	range : "150 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Str",
	description : "20-ft rad dif. ter., all now/end turn save or 2d6 Bludg. dmg; bns a 60 ft atk 4d6 Lightn. dmg; +1d6/SL",
	descriptionShorter : "20-ft rad dif. ter., all save/turn 2d6 Bludg. dmg; bns a 60 ft atk 4d6 Lightn. dmg; +1d6/SL",
	descriptionFull : "A 20-foot-radius sphere of whirling air springs into existence centered on a point you choose within range. The sphere remains for the spell's duration. Each creature in the sphere when it appears or that ends its turn there must succeed on a Strength saving throw or take 2d6 bludgeoning damage. The sphere's space is difficult terrain." + "\n   " + "Until the spell ends, you can use a bonus action on each of your turns to cause a bolt of lightning to leap from the center of the sphere toward one creature you choose within 60 feet of the center. Make a ranged spell attack. You have advantage on the attack roll if the target is in the sphere. On a hit, the target takes 4d6 lightning damage." + "\n   " + "Creatures within 30 feet of the sphere have disadvantage on Wisdom (Perception) checks made to listen." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the damage increases for each of its effects by 1d6 for each slot level above 4th."
};
SpellsList["thunderclap"] = {
	name : "Thunderclap",
	classes : ["artificer", "bard", "druid", "sorcerer", "warlock", "wizard"],
	source : [["X", 168], ["E", 22]],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "5 ft",
	components : "S",
	duration : "Instantaneous",
	save : "Con",
	description : "100-ft rad audible; all crea but me in area save or 1d6 Thunder dmg; +1d6 at CL 5, 11, and 17",
	descriptionCantripDie : "100-ft rad audible; all crea but me in area save or `CD`d6 Thunder dmg",
	descriptionFull : "You create a burst of thunderous sound that can be heard up to 100 feet away. Each creature within range, other than you, must succeed on a Constitution saving throw or take 1d6 thunder damage." + "\n   " + "The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
};
SpellsList["tidal wave"] = {
	name : "Tidal Wave",
	classes : ["druid", "sorcerer", "wizard"],
	source : [["X", 168], ["E", 22]],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "120 ft",
	components : "V,S,M",
	compMaterial : "A drop of water",
	duration : "Instantaneous",
	save : "Dex",
	description : "30-ft x 10-ft, 10-ft high all crea 4d8 Bludg. dmg and prone; save halves not prone; extinguish flames",
	descriptionFull : "You conjure up a wave of water that crashes down on an area within range. The area can be up to 30 feet long, up to 10 feet wide, and up to 10 feet tall. Each creature in that area must make a Dexterity saving throw. On a failed save, a creature takes 4d8 bludgeoning damage and is knocked prone. On a successful save, a creature takes half as much damage and isn't knocked prone. The water then spreads out across the ground in all directions, extinguishing unprotected flames in its area and within 30 feet of it, and then it vanishes."
};
SpellsList["transmute rock"] = {
	name : "Transmute Rock",
	classes : ["artificer", "druid", "wizard"],
	source : [["X", 169], ["E", 22]],
	level : 5,
	school : "Trans",
	time : "1 a",
	range : "120 ft",
	components : "V,S,M",
	compMaterial : "Clay and water",
	duration : "Until dispelled",
	description : "40 cu ft stone to mud or mud to stone; mud and stone restrains; mud from ceiling falls; see book",
	descriptionFull : "You choose an area of stone or mud that you can see that fits within a 40-foot cube and is within range, and choose one of the following effects." + "\n   " + toUni("Transmute Rock to Mud") + ": Nonmagical rock of any sort in the area becomes an equal volume of thick, flowing mud that remains for the spell's duration." + "\n   " + "The ground in the spell's area becomes muddy enough that creatures can sink into it. Each foot that a creature moves through the mud costs 4 feet of movement, and any creature on the ground when you cast the spell must make a Strength saving throw. A creature must also make the saving throw when it moves into the area for the first time on a turn or ends its turn there. On a failed save, a creature sinks into the mud and is restrained, though it can use an action to end the restrained condition on itself by pulling itself free of the mud." + "\n   " + "If you cast the spell on a ceiling, the mud falls. Any creature under the mud when it falls must make a Dexterity saving throw. A creature takes 4d8 bludgeoning damage on a failed save, or half as much damage on a successful one." + "\n   " + toUni("Transmute Mud to Rock") + ": Nonmagical mud or quicksand in the area no more than 10 feet deep transforms into soft stone for the spell's duration. Any creature in the mud when it transforms must make a Dexterity saving throw. On a successful save, a creature is shunted safely to the surface in an unoccupied space. On a failed save, a creature becomes restrained by the rock. A restrained creature, or another creature within reach, can use an action to try to break the rock by succeeding on a DC 20 Strength check or by dealing damage to it. The rock has AC 15 and 25 hit points, and it is immune to poison and psychic damage."
};
SpellsList["vitriolic sphere"] = {
	name : "Vitriolic Sphere",
	classes : ["sorcerer", "wizard"],
	source : [["X", 170], ["E", 23]],
	level : 4,
	school : "Evoc",
	time : "1 a",
	range : "150 ft",
	components : "V,S,M",
	compMaterial : "A drop of giant slug bile",
	duration : "Instantaneous",
	save : "Dex",
	description : "20-ft rad all crea 10d4+2d4/SL Acid dmg, +5d4 dmg next turn end; save half \u0026 no dmg next turn",
	descriptionShorter : "20-ft rad all crea 10d4+2d4/SL Acid dmg, +5d4 dmg next turn; save half \u0026 no next turn",
	descriptionFull : "You point at a location within range, and a glowing, 1-foot-diameter ball of emerald acid streaks there and explodes in a 20-foot-radius sphere. Each creature in that area must make a Dexterity saving throw. On a failed save, a creature takes 10d4 acid damage and another 5d4 acid damage at the end of its next turn. On a successful save, a creature takes half the initial damage and no damage at the end of its next turn." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the initial damage increases by 2d4 for each slot level above 4th.",
	dynamicDamageBonus : {
		multipleDmgMoments : false,
		extraDmgGroupsSameType : /((?:\+?\d+d?\d*)+)( dmg next turn)/i
	}
};
SpellsList["wall of sand"] = {
	name : "Wall of Sand",
	classes : ["wizard"],
	source : [["X", 170], ["E", 23]],
	level : 3,
	school : "Evoc",
	time : "1 a",
	range : "90 ft",
	components : "V,S,M",
	compMaterial : "A handful of sand",
	duration : "Conc, 10 min",
	description : "30\xD710\xD710ft (l\xD7w\xD7h) wall on the ground; blocks line of sight; blinded while inside; 1/3 move",
	descriptionMetric : "9\xD73\xD73m (l\xD7w\xD7h) wall on the ground; blocks line of sight; blinded while inside; 1/3 move",
	descriptionFull : "You conjure up a wall of swirling sand on the ground at a point you can see within range. You can make the wall up to 30 feet long, 10 feet high, and 10 feet thick, and it vanishes when the spell ends. It blocks line of sight but not movement. A creature is blinded while in the wall's space and must spend 3 feet of movement for every 1 foot it moves there."
};
SpellsList["wall of water"] = {
	name : "Wall of Water",
	classes : ["druid", "sorcerer", "wizard"],
	source : [["X", 170], ["E", 23], ["V", 116], ["MOT", 27]],
	level : 3,
	school : "Evoc",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "A drop of water",
	duration : "Conc, 10 min",
	description : "30\xD71\xD710ft (l\xD7w\xD7h) or 20-ft rad 20-ft high; dif. ter.; range wea dis.; Fire dmg half; Cold dmg freezes",
	descriptionMetric : "9\xD70,3\xD73m (l\xD7w\xD7h) or 6-m rad 6-m high; dif. ter.; ranged wea dis.; Fire dmg half; Cold dmg freezes",
	descriptionFull : "You conjure up a wall of water on the ground at a point you can see within range. You can make the wall up to 30 feet long, 10 feet high, and 1 foot thick, or you can make a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall vanishes when the spell ends. The wall's space is difficult terrain." + "\n   " + "Any ranged weapon attack that enters the wall's space has disadvantage on the attack roll, and fire damage is halved if the fire effect passes through the wall to reach its target. Spells that deal cold damage that pass through the wall cause the area of the wall they pass through to freeze solid (at least a 5-foot square section is frozen). Each 5-foot-square frozen section has AC 5 and 15 hit points. Reducing a frozen section to 0 hit points destroys it. When a section is destroyed, the wall's water doesn't fill it."
};
SpellsList["warding wind"] = {
	name : "Warding Wind",
	classes : ["bard", "druid", "sorcerer", "wizard"],
	source : [["X", 170], ["E", 23]],
	level : 2,
	school : "Evoc",
	time : "1 a",
	range : "S:10-ft rad",
	components : "V",
	duration : "Conc, 10 min",
	description : "Strong (20 mph) wind around me deafens/extinguishes unprotected flames/dif. ter./ranged wea dis.",
	descriptionMetric : "Strong (32 kph) wind around me deafens/extinguishes unprotected flames/dif. ter./ranged wea dis.",
	descriptionFull : "A strong wind (20 miles per hour) blows around you in a 10-foot radius and moves with you, remaining centered on you. The wind lasts for the spell's duration.\n   The wind has the following effects."+
	"\n \u2022 It deafens you and other creatures in its area."+
	"\n \u2022 It extinguishes unprotected flames in its area that are torch-sized or smaller."+
	"\n \u2022 The area is difficult terrain for creatures other than you."+
	"\n \u2022 The attack rolls of ranged weapon attacks have disadvantage if they pass in or out of the wind."+
	"\n \u2022 It hedges out vapor, gas, and fog that can be dispersed by strong wind."
};
SpellsList["watery sphere"] = {
	name : "Watery Sphere",
	classes : ["druid", "sorcerer", "wizard"],
	source : [["X", 170], ["E", 23]],
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "90 ft",
	components : "V,S,M",
	compMaterial : "A droplet of water",
	duration : "Conc, 1 min",
	save : "Str",
	description : "5-ft rad all crea < Huge save or restrained; on save ejected; save each rnd; 1 a move sphere 30 ft",
	descriptionFull : "You conjure up a sphere of water with a 5-foot radius at a point you can see within range. The sphere can hover but no more than 10 feet off the ground. The sphere remains for the spell's duration." + "\n   " + "Any creature in the sphere's space must make a Strength saving throw. On a successful save, a creature is ejected from that space to the nearest unoccupied space of the creature's choice outside the sphere. A Huge or larger creature succeeds on the saving throw automatically, and a Large or smaller creature can choose to fail it. On a failed save, a creature is restrained by the sphere and is engulfed by the water. At the end of each of its turns, a restrained target can repeat the saving throw, ending the effect on itself on a success." + "\n   " + "The sphere can restrain as many as four Medium or smaller creatures or one Large creature. If the sphere restrains a creature that causes it to exceed this capacity, a random creature that was already restrained by the sphere falls out of it and lands prone in a space within 5 feet of it." + "\n   " + "As an action, you can move the sphere up to 30 feet in a straight line. If it moves over a pit, a cliff, or other drop-off, it safely descends until it is hovering 10 feet above the ground. Any creature restrained by the sphere moves with it. You can ram the sphere into creatures, forcing them to make the saving throw." + "\n   " + "When the spell ends, the sphere falls to the ground and extinguishes all normal flames within 30 feet of it. Any creature restrained by the sphere is knocked prone in the space where it falls. The water then vanishes."
};
SpellsList["whirlwind"] = {
	name : "Whirlwind",
	classes : ["druid", "sorcerer", "wizard"],
	source : [["X", 171], ["E", 24]],
	level : 7,
	school : "Evoc",
	time : "1 a",
	range : "300 ft",
	components : "V,M",
	compMaterial : "A piece of straw",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "10-ft rad 30-ft high all crea 10d6 Bludg. dmg; save halves; restrains; 1 a move 30 ft; see book",
	descriptionFull : "A whirlwind howls down to a point that you can see on the ground within range. The whirlwind is a 10-foot-radius, 30-foot-high cylinder centered on that point. Until the spell ends, you can use your action to move the whirlwind up to 30 feet in any direction along the ground. The whirlwind sucks up any Medium or smaller objects that aren't secured to anything and that aren't worn or carried by anyone." + "\n   " + "A creature must make a Dexterity saving throw the first time on a turn that it enters the whirlwind or that the whirlwind enters its space, including when the whirlwind first appears. A creature takes 10d6 bludgeoning damage on a failed save, or half as much damage on a successful one. In addition, a Large or smaller creature that fails the save must succeed on a Strength saving throw or become restrained in the whirlwind until the spell ends. When a creature starts its turn restrained by the whirlwind, the creature is pulled 5 feet higher inside it, unless the creature is at the top. A restrained creature moves with the whirlwind and falls when the spell ends, unless the creature has some means to stay aloft." + "\n   " + "A restrained creature can use an action to make a Strength or Dexterity check against your spell save DC. If successful, the creature is no longer restrained by the whirlwind and is hurled 3d6 \xD7 10 feet away from it in a random direction."
};

// Weapons (attack cantrips)
WeaponsList["create bonfire"] = {
	regExpSearch : /^(?=.*create)(?=.*bonfire).*$/i,
	name : "Create Bonfire",
	source : [["X", 152], ["E", 16]],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 8, "fire"],
	range : "60 ft",
	description : "5-ft cube; Dex save at casting or when moved into, success - no damage; Conc, 1 min",
	abilitytodamage : false,
	dc : true
};
WeaponsList["frostbite"] = {
	regExpSearch : /frostbite/i,
	name : "Frostbite",
	source : [["X", 156], ["E", 18]],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 6, "cold"],
	range : "60 ft",
	description : "Con save, success - no damage, fail - also disadv. on next weapon attack roll in next turn; 1 creature",
	abilitytodamage : false,
	dc : true
};
WeaponsList["magic stone"] = {
	regExpSearch : /^(?=.*magic)(?=.*stone).*$/i,
	name : "Magic Stone",
	source : [["X", 160], ["E", 20]],
	list : "spell",
	ability : 5,
	type : "Cantrip",
	damage : [1, 6, "bludgeoning"],
	range : "60/120 ft",
	description : "Produces 3 stones that each can be thrown (60 ft) or hurled with a sling (120 ft) as a spell attack",
	abilitytodamage : true
};
WeaponsList["thunderclap"] = {
	regExpSearch : /thunderclap/i,
	name : "Thunderclap",
	source : [["X", 168], ["E", 22]],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 6, "thunder"],
	range : "5-ft radius",
	description : "Con save, success - no damage; all creatures in area; audible in 100 ft",
	abilitytodamage : false,
	dc : true
};
