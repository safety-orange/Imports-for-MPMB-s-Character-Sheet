var iFileName = "pub_20161115_VGtM.js";
RequiredSheetVersion("13.0.7");
// This file adds all the player-material from Volo's Guide to Monsters to MPMB's Character Record Sheet

// Define the source
SourceList.V = {
	name : "Volo's Guide to Monsters",
	abbreviation : "VGtM",
	group : "Primary Sources",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/volos-guide-to-monsters",
	date : "2016/11/15"
};

// Races
RaceList["fallen aasimar"] = {
	regExpSearch : /^((?=.*aasimar)|((?=.*planetouched)(?=.*(celestial|angel))))(?=.*fallen).*$/i,
	name : "Fallen Aasimar",
	source : [["V", 104], ["W", 168]],
	plural : "Fallen Aasimar",
	sortname : "Aasimar, Fallen",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Celestial"],
	vision : [["Darkvision", 60]],
	dmgres : ["Necrotic", "Radiant"],
	age : " reach adulthood in their late teens and live around 160 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	scores : [1, 0, 0, 0, 0, 2],
	trait : "Fallen Aasimar (+1 Strength, +2 Charisma)" + (typePF ? "\n" : " ") + "Light Bearer: I know the Light cantrip.\nHealing Hands: As an action, once per long rest, I can touch to heal for my level in HP.\nNecrotic Shroud: Once per long rest when I'm 3rd level, I can use an action to transform, causing all within 10 ft of me to make a Cha" + (typePF ? "" : "risma") + " saving throw (DC 8 + Cha mod + Prof bonus) or be frightened of me until the end of my next turn. This lasts for 1 minute or until I end it as a bonus action. Once on my turn I can have one of my attacks or spells deals my level in extra necrotic damage to one target.",
	abilitySave : 6,
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Light Bearer",
		spells : ["light"],
		selection : ["light"],
		firstCol : 'atwill'
	},
	features : {
		"healing hands" : {
			name : "Healing Hands",
			usages : 1,
			minlevel : 1,
			recovery : "long rest",
			additional : levels.map(function (n) { return n + " HP"; }),
			action : ["action", ""]
		},
		"necrotic shroud" : {
			name : "Necrotic Shroud",
			usages : 1,
			minlevel : 3,
			recovery : "long rest",
			additional : levels.map(function (n) { return n < 3 ? "" : "+" + n + " damage"; }),
			action : [["action", " (start)"], ['bonus action', ' (end)']]
		}
	}
};
RaceList["protector aasimar"] = {
	regExpSearch : /^((?=.*aasimar)|((?=.*planetouched)(?=.*(celestial|angel))))(?=.*protector).*$/i,
	name : "Protector Aasimar",
	source : [["V", 104], ["W", 167]],
	plural : "Protector Aasimar",
	sortname : "Aasimar, Protector",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Celestial"],
	vision : [["Darkvision", 60]],
	dmgres : ["Necrotic", "Radiant"],
	age : " reach adulthood in their late teens and live around 160 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	scores : [0, 0, 0, 0, 1, 2],
	trait : "Protector Aasimar (+1 Wisdom, +2 Charisma)\nLight Bearer: I know the Light cantrip.\nHealing Hands: As an action, once per long rest, I can touch to heal for my level in HP.\nRadiant Soul: Once per long rest when I'm 3rd level, I can use an action to transform, gaining glimmer in my eyes and two incorporeal wings. For 1 minute or until I end it as a bonus action, I have 30 feet fly speed; once on my turn I can have one of my attacks or spells deal my level in extra radiant damage to one target.",
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Light Bearer",
		spells : ["light"],
		selection : ["light"],
		firstCol : 'atwill'
	},
	features : {
		"healing hands" : {
			name : "Healing Hands",
			usages : 1,
			minlevel : 1,
			recovery : "long rest",
			additional : levels.map(function (n) { return n + " HP"; }),
			action : ["action", ""]
		},
		"radiant soul" : {
			name : "Radiant Soul",
			usages : 1,
			minlevel : 3,
			recovery : "long rest",
			additional : levels.map(function (n) { return n < 3 ? "" : "+" + n + " damage"; }),
			action : [["action", " (start)"], ['bonus action', ' (end)']]
		}
	}
};
RaceList["scourge aasimar"] = {
	regExpSearch : /^((?=.*aasimar)|((?=.*planetouched)(?=.*(celestial|angel))))(?=.*scourge).*$/i,
	name : "Scourge Aasimar",
	source : [["V", 104], ["W", 167]],
	plural : "Scourge Aasimar",
	sortname : "Aasimar, Scourge",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Celestial"],
	vision : [["Darkvision", 60]],
	dmgres : ["Necrotic", "Radiant"],
	age : " reach adulthood in their late teens and live around 160 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	scores : [0, 0, 1, 0, 0, 2],
	trait : "Scourge Aasimar (+1 Constitution, +2 Charisma)" + (typePF ? "\n" : " ") + "Light Bearer: I know the Light cantrip.\nHealing Hands: As an action, once per long rest, I can touch to heal for my level in HP.\nRadiant Consumption: Once per long rest when I'm 3rd level, I can use an action to radiate bright light in 10-ft radius and dim light for another 10-ft, for 1 minute or until I end it as a bonus action. Once on my turn my attack or spell deals my level in extra radiant damage to one target, and at the end of my turns all creatures within 10 ft of me, including myself, take half my level in radiant damage.",
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Light Bearer",
		spells : ["light"],
		selection : ["light"],
		firstCol : 'atwill'
	},
	features : {
		"healing hands" : {
			name : "Healing Hands",
			usages : 1,
			minlevel : 1,
			recovery : "long rest",
			additional : levels.map(function (n) { return n + " HP"; }),
			action : ["action", ""]
		},
		"radiant consumption" : {
			name : "Radiant Consumption",
			usages : 1,
			minlevel : 3,
			recovery : "long rest",
			additional : levels.map(function (n) {
				if (n < 3) return ""
				return Math.ceil(n/2) + "/" + n + " damage";
			}),
			action : [["action", " (start)"], ['bonus action', ' (end)']]
		}
	}
};
RaceList["bugbear"] = {
	regExpSearch : /bugbear/i,
	name : "Bugbear",
	source : [["V", 119], ["E:RLW", 25], ["W", 174]],
	plural : "Bugbears",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Goblin"],
	vision : [["Darkvision", 60]],
	skills : ["Stealth"],
	age : " rearch adulthood at age 16 and live up to 80 years",
	height : " are between 6 and 8 feet tall (6'0\" + 2d12\")",
	weight : " weigh between 250 and 350 lb (200 + 2d12 \xD7 2d6 lb)",
	heightMetric : " are between 1,9 and 2,4 metres tall (185 + 5d12 cm)",
	weightMetric : " weigh between 115 and 160 kg (90 + 5d12 \xD7 4d6 / 10 kg)",
	scores : [2, 1, 0, 0, 0, 0],
	features : {
		"surprise attack" : {
			name : "Surprise Attack",
			minlevel : 1,
			usages : 1,
			recovery : "Combat",
			additional : "2d6"
		}
	},
	trait : "Bugbear (+2 Strength, +1 Dexterity)\nPowerful Build: I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift.\nLong-Limbed: I have an additional 5 feet reach with melee attacks that I make on my turn.\nSurprise Attack: If I hit a surprised creature on my first turn in combat, that attack deals an extra 2d6 damage. I can do this only once per combat.",
	carryingCapacity : 2
};
RaceList["firbolg"] = {
	regExpSearch : /firbolg/i,
	name : "Firbolg",
	source : [["V", 106], ["W", 170]],
	plural : "Firbolg",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Elvish", "Giant"],
	age : " reach adulthood around 30 and can live for 500 years",
	height : " are between 6 and half and 8 feet tall (6'2\" + 2d12\")",
	weight : " weigh between 240 and 300 lb (175 + 2d12 \xD7 2d6 lb)",
	heightMetric : " are between 2 and 2,5 metres tall (190 + 5d12 cm)",
	weightMetric : " weigh between 110 and 135 kg (80 + 5d12 \xD7 4d6 / 10 kg)",
	scores : [1, 0, 0, 0, 2, 0],
	trait : "Firbolg (+1 Strength, +2 Wisdom)" + (typePF ? "\n" : " ") + "Hidden Step: Once per short rest, as a bonus action, I turn invisible until the start of my next turn as per the invisibility spell.\nPowerful Build: I count as one size larger for the weight I can carry.\nFirbolg Magic: I can cast the Detect Magic and Disguise Self spells each once per short rest. With Disguise Self I can seem up to 3 feet shorter. Wisdom is my ability for these spells.\nSpeech of Beast and Leaf: I can make my words understood, in a limited manner, by beasts and plants. I have advantage on Charisma checks to influence them.",
	spellcastingAbility : 5,
	features : {
		"firbolg magic (detect magic)" : {
			name : "Firbolg Magic (Detect Magic)",
			limfeaname : "Detect Magic",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			spellcastingBonus : {
				name : "Firbolg Magic",
				spells : ["detect magic"],
				selection : ["detect magic"],
				firstCol : 'oncesr'
			}
		},
		"firbolg magic (disguise self)" : {
			name : "Firbolg Magic (Disguise Self)",
			limfeaname : "Disguise Self",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			spellcastingBonus : {
				name : "Firbolg Magic",
				spells : ["disguise self"],
				selection : ["disguise self"],
				firstCol : 'oncesr'
			}
		},
		"hidden step" : {
			name : "Hidden Step",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			action : ["bonus action", ""]
		}
	},
	carryingCapacity : 2
};
RaceList["goblin"] = {
	regExpSearch : /^(?=.*\bgoblins?\b)(?!.*hobgoblin|bugbear).*$/i,
	name : "Goblin",
	source : [["V", 119], ["G", 17], ["E:RLW", 26], ["W", 174]],
	plural : "Goblins",
	size : 4,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Goblin"],
	vision : [["Darkvision", 60]],
	age : " rearch adulthood at age 8 and live up to 60 years",
	height : " are between 3 and a half and 4 feet tall (3'5\" + 2d4\")",
	weight : " weigh between 40 and 70 lb (35 + 2d4 \xD7 1 lb)",
	heightMetric : " are between 100 and 120 cm tall (100 + 5d4 cm)",
	weightMetric : " weigh between 20 and 30 kg (17 + 5d4 \xD7 2 / 10 kg)",
	scores : [0, 2, 1, 0, 0, 0],
	features : {
		"fury of the small" : {
			name : "Fury of the Small",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			additional : levels.map(function (n) { return "+" + n + " damage"; })
		}
	},
	action : [["bonus action", "Nimble Escape (disengage/hide)"]],
	trait : "Goblin (+2 Dexterity, +1 Constitution)\n\nFury of the Small: Once per short rest, when I hit a creature of a size category larger than mine, I deal extra damage equal to my level.\n\nNimble Escape: As a bonus action, I can take the Disengage or Hide action."
};
// dupl_start
if (!RaceList["goliath"]) {
	RaceList["goliath"] = {
		regExpSearch : /goliath/i,
		name : "Goliath",
		source : [["E", 11], ["V", 108], ["W", 176]],
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
				tooltip : "",
				action : ["reaction", ""]
			}
		},
		trait : "Goliath (+2 Strength, +1 Constitution)" + (typePF ? "\n" : "") + "\nStone's Endurance: Once per short rest, when I take damage, I can use my reaction to reduce the damage by 1d12 + my Con" + (typePF ? "" : "stitution") + " modifier." + (typePF ? "\n" : "") + "\nPowerful Build: I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift." + (typePF ? "\n" : "") + "\nMountain Born: I have resistance to cold damage and I'm acclimated to high altitude, including elevations above 20000 feet.",
		carryingCapacity : 2
	};
} // dupl_end
RaceList["hobgoblin"] = {
	regExpSearch : /hobgoblin/i,
	name : "Hobgoblin",
	source : [["V", 119], ["E:RLW", 26], ["W", 175]],
	plural : "Hobgoblins",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Goblin"],
	vision : [["Darkvision", 60]],
	armorProfs : [true, false, false, false],
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh between 150 and 200 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh between 70 and 90 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	scores : [0, 0, 2, 1, 0, 0],
	features : {
		"saving face" : {
			name : "Saving Face",
			minlevel : 1,
			usages : 1,
			recovery : "short rest"
		}
	},
	trait : "Hobgoblin (+2 Constitution, +1 Intelligence)\n\nMartial Training: I am proficient with two martial weapons of my choice and light armor.\n\nSaving Face: Once per short rest, when I miss an attack roll or fail an ability check or a saving throw, I can gain a bonus to the roll equal to the number of allies I can see within 30 feet of me (max +5)."
};
RaceList["kenku"] = {
	regExpSearch : /kenku/i,
	name : "Kenku",
	source : [["V", 109], ["W", 177]],
	plural : "Kenku",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	skillstxt : "Choose two from Acrobatics, Deception, Stealth, and Sleight of Hand",
	languageProfs : ["Common", "Auran"],
	age : " reach maturity at about 12 years old and can live to 60",
	height : " are around 5 feet tall (4'4\" + 2d8\")",
	weight : " weigh between 90 and 120 lb (70 + 2d8 \xD7 1d4 lb)",
	heightMetric : " are around 1,5 metres tall (135 + 5d8 cm)",
	weightMetric : " weigh between 40 and 55 kg (35 + 5d8 \xD7 2d4 / 10 kg)",
	scores : [0, 2, 0, 0, 1, 0],
	trait : "Kenku (+2 Dexterity, +1 Wisdom)" + (typePF ? "\n" : "") + "\nExpert Forgery: Kenku can duplicate other creatures' handwriting and craftwork. I have advantage on all checks made to produce forgeries or duplicates of existing objects." + (typePF ? "\n" : "") + "\nMimicry: I can mimic any sounds I have heard, including voices, but can otherwise not speak. Creatures hearing these sounds can determine they are imitations with a successful Wisdom (Insight) check opposed by my Charisma (Deception)."
};
RaceList["kobold"] = {
	regExpSearch : /kobold/i,
	name : "Kobold",
	source : ["V", 119],
	plural : "Kobolds",
	size : 4,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Draconic"],
	vision : [["Darkvision", 60], ["Sunlight Sensitivity", 0]],
	age : " reach adulthood at age 6 and can live up to 120 years, but rarely do so",
	height : " are between 2 and 3 feet tall (2'1\" + 2d4\")",
	weight : " weigh between 25 and 35 lb (25 + 2d4 \xD7 1 lb)",
	heightMetric : " are between 65 and 90 cm tall (63 + 5d4 cm)",
	weightMetric : " weigh between 10 and 15 kg (11 + 5d4 \xD7 2 / 10 kg)",
	scores : [0, 2, 0, 0, 0, 0],
	features : {
		"grovel, cower, and beg" : {
			name : "Grovel, Cower, and Beg",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			action : ["action", ""]
		}
	},
	trait : "Kobold (+2 Dexterity)\nSunlight Sensitivity: Disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight when I or what I am trying to attack/perceive is in direct sunlight.\nGrovel, Cower, and Beg: As an action, I can distract all foes within 10 feet of me that can see me so that my allies gain advantage on attack rolls against them.\nPack Tactics: I have advantage on attack rolls against creatures when at least one of my allies is within 5 feet of that creature and that ally is not incapacitated."
};
RaceList["lizardfolk"] = {
	regExpSearch : /lizard(folk|man|men)/i,
	name : "Lizardfolk",
	source : ["V", 111],
	plural : "Lizardfolk",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : 30, enc : 20 }
	},
	skillstxt : "Choose two from Animal Handling, Nature, Perception, Stealth, and Survival",
	languageProfs : ["Common", "Draconic"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /\bbite\b/i,
		name : "Bite",
		source : ["V", 113],
		damage : [1, 6, "piercing"]
	},
	weaponsAdd : ["Bite"],
	armorOptions : {
		regExpSearch : /^(?=.*natural)(?=.*armou?r).*$/i,
		name : "Natural Armor",
		source : ["V", 113],
		ac : 13
	},
	armorAdd : "Natural Armor",
	age : " reach maturity around age 14 and rarely live longer than 60 years",
	height : " range from 5 to well over 6 feet tall (4'9\" + 2d10\")",
	weight : " weigh around 200 lb (120 + 2d10 \xD7 2d6 lb)",
	heightMetric : " range from 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 95 kg (55 + 5d10 \xD7 4d6 / 10 kg)",
	scores : [0, 0, 2, 0, 1, 0],
	features : {
		"cunning artisan" : {
			name : "Cunning Artisan",
			minlevel : 1,
			usages : 1,
			recovery : "short rest"
		},
		"hungry jaws" : {
			name : "Hungry Jaws",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			action : ["bonus action", ""]
		}
	},
	trait : "Lizardfolk (+2 Constitution, +1 Wisdom) Bite: I can use my fanged maw to make unarmed strikes dealing 1d6 piercing damage." + (typePF ? "\n" : " ") + "Cunning Artisan: As part of a short rest I can harvest parts of a slain creature to make a shield, club, javelin, or 1d4 darts/blowgun needles. This requires a suitable corpse and appropriate tools." + (typePF ? "\n" : " ") + "Hold Breath: I can hold my breath for up to 15 minutes at a time." + (typePF ? "\n" : " ") + "Natural Armor: I have an AC of 13 + Dexterity modifier + shield." + (typePF ? "\n" : " ") + "Hungry Jaws: As a bonus action, once per short rest, I can make a special bite attack and if it hits I gain temporary HP equal to my Con modifier (min 1)."
};
RaceList["orc"] = {
	regExpSearch : /^(?!.*half)(?=.*\bor(c|k)).*$/i,
	name : "Orc",
	source : [["V", 120], ["E:RLW", 32], ["W", 178]],
	plural : "Orcs",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Orc"],
	vision : [["Darkvision", 60]],
	skillstxt : "Choose two from Animal Handling, Insight, Intimidation, Medicine, Nature, Perception, and Survival.",
	age : " reach adulthood at age 12 and live up to 50 years",
	height : " are usually over 6 feet tall (5'4\" + 2d8\")",
	weight : " weigh between 230 and 280 lb (175 + 2d8 \xD7 2d6 lb)",
	heightMetric : " are usually over 1,8 metres tall (160 + 5d8 cm)",
	weightMetric : " weigh between 100 and 125 kg (80 + 5d8 \xD7 4d6 / 10 kg)",
	scores : [2, 0, 1, 0, 0, 0],
	trait : "Orc (+2 Strength, +1 Constitution)\n\nPowerful Build: I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift.\n\nAggressive: As a bonus action, I can move up to my speed toward an enemy that I can see or hear. I must end my move closer to this enemy than I started.",
	action : [["bonus action", "Aggressive (dash to enemy)"]],
	carryingCapacity : 2
};
RaceList["tabaxi"] = {
	regExpSearch : /tabaxi/i,
	name : "Tabaxi",
	source : [["V", 113], ["W", 179]],
	plural : "Tabaxi",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		climb : { spd : 20, enc : 10 }
	},
	skills : ["Perception", "Stealth"],
	languageProfs : ["Common", 1],
	vision : [["Darkvision", 60]],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*(tabaxi|\bcat\b))(?=.*claw).*$/i,
		name : "Tabaxi Claws",
		source : ["V", 115],
		damage : [1, 4, "slashing"]
	},
	weaponsAdd : ["Tabaxi Claws"],
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " range from 5 to well over 6 feet tall (4'10\" + 2d10\")",
	weight : " weigh around 150 lb (90 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 70 kg (40 + 5d10 \xD7 4d4 / 10 kg)",
	scores : [0, 2, 0, 0, 0, 1],
	features : {
		"feline agility" : {
			name : "Feline Agility",
			minlevel : 1,
			usages : 1,
			recovery : " Turn",
			additional : "still for 1 turn to recover",
			tooltip : " (can be replenished by not moving for one whole turn)"
		}
	},
	trait : "Tabaxi (+2 Dexterity, +1 Charisma)\n\nCat's Claws: I can use my retractable claws to make unarmed strikes dealing 1d4 slashing damage. They also give me a climbing speed of 20 ft.\n\nFeline Agility: When moving on my turn in combat, I can move double my speed. Once I do this, I can't do it again until I don't move at all on one of my turns."
};
RaceList["triton"] = {
	regExpSearch : /triton/i,
	name : "Triton",
	source : [["V", 115], ["MOT", 26]],
	plural : "Triton",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Primordial"],
	dmgres : ["Cold"],
	vision : [["Darkvision", 60]],
	age : " reach maturity around age 15 and can live up to 200 years",
	height : " are around 5 feet tall (4'6\" + 2d10\")",
	weight : " weigh around 150 lb (90 + 2d10 \xD7 2d4 lb)",
	heightMetric : " are around 1,6 metres tall (135 + 5d10 cm)",
	weightMetric : " weigh around 70 kg (40 + 5d10 \xD7 4d4 / 10 kg)",
	scores : [1, 0, 1, 0, 0, 1],
	trait : "Triton (+1 Strength, +1 Constitution, and +1 Charisma)\nControl Air and Water: I can cast the Fog Cloud spell. Once I reach 3rd level, I can cast the Gust of Wind spell. Once I reach 5th level, I can cast the Wall of Water spell. All three spells can be used once per long rest. Charisma is my spellcasting ability for these spells.\nEmissary of the Sea: I can communicate simple ideas to beasts that can breathe water.\nGuardians of the Depths: Adapted to even the most extreme ocean depths, I have resistance to cold damage." + (typePF ? "\n" : " ") + "Amphibious: I can breathe air and water.",
	spellcastingAbility : 6,
	features : {
		"fog cloud" : {
			name : "Control Air and Water (level 1)",
			limfeaname : "Fog Cloud",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Control Air and Water (1)",
				spells : ["fog cloud"],
				selection : ["fog cloud"],
				firstCol : 'oncelr'
			}
		},
		"gust of wind" : {
			name : "Control Air and Water (level 3)",
			limfeaname : "Gust of Wind",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Control Air and Water (3)",
				spells : ["gust of wind"],
				selection : ["gust of wind"],
				firstCol : 'oncelr'
			}
		},
		"wall of water" : {
			name : "Control Air and Water (level 5)",
			limfeaname : "Wall of Water",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Control Air and Water (5)",
				spells : ["wall of water"],
				selection : ["wall of water"],
				firstCol : 'oncelr'
			}
		}
	}
};
// [dupl_start] Add Wall of Water spell, if not already present
if (!SpellsList["wall of water"]) {
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
}; // dupl_end
RaceList["yuan-ti pureblood"] = {
	regExpSearch : /^(?!.*human)(?=.*yuan.ti)(?=.*pure.?blood).*$/i,
	name : "Yuan-Ti Pureblood",
	source : ["V", 120],
	plural : "Yuan-Ti Purebloods",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Abyssal", "Draconic"],
	vision : [["Darkvision", 60]],
	savetxt : {
		immune : ["poison"],
		adv_vs : ["magic"]
	},
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "Yuan-Ti Pureblood: +1 Intelligence, +2 Charisma;",
	scores : [0, 0, 0, 1, 0, 2],
	trait : "Yuan-Ti Pureblood (+1 Intelligence, +2 Charisma)" + desc([
		"Magic Resistance: I have advantage on saving throws against spells and other magical effects.",
		"Innate Spellcasting: I know the Poison Spray cantrip and I can cast Animal Friendship on snakes at will. Once I reach 3rd level, I can cast Suggestion once per long rest. Charisma is my spellcasting ability for these spells."
	]),
	spellcastingAbility : 6,
	spellcastingBonus : [{
		name : "Innate Spellcasting (level 1)",
		spells : ["poison spray"],
		selection : ["poison spray"],
		firstCol : 'atwill'
	}, {
		name : "Innate Spellcasting (level 1)",
		spells : ["animal friendship"],
		selection : ["animal friendship"],
		firstCol : 'atwill'
	}],
	features : {
		"suggestion" : {
			name : "Innate Spellcasting (level 3)",
			limfeaname : "Suggestion",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Innate Spellcasting (level 3)",
				spells : ["suggestion"],
				selection : ["suggestion"],
				firstCol : 'oncelr'
			}
		}
	}
};

// Creatures
CreatureList["aurochs"] = {
	name : "Aurochs",
	source : ["V", 207],
	size : 2, //Large
	type : "Beast",
	alignment : "Unaligned",
	ac : 11,
	hp : 38,
	hd : [4, 10], //[#, die]
	speed : "50 ft",
	scores : [20, 10, 19, 2, 12, 5], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "",
	passivePerception : 11,
	challengeRating : "2",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Gore",
		ability : 1,
		damage : [2, 8, "piercing"], //[#, die, type] "" for die is allowed
		range : "Melee (5 ft)",
		description : "If used after moving 20 ft straight in the same round, see Charge trait"
	}],
	traits : [{
		name : "Charge",
		description : "If the aurochs moves at least 20 ft straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) piercing damage. A targeted creature must succeed on a DC 15 Strength saving throw or be knocked prone."
	}]
};
CreatureList["cow"] = {
	name : "Cow",
	source : ["V", 207],
	size : 2, //Large
	type : "Beast",
	alignment : "Unaligned",
	ac : 10,
	hp : 15,
	hd : [2, 10], //[#, die]
	speed : "30 ft",
	scores : [18, 10, 12, 2, 10, 4], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "",
	passivePerception : 10,
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Gore",
		ability : 1,
		damage : [1, 6, "piercing"], //[#, die, type] "" for die is allowed
		range : "Melee (5 ft)",
		description : "If used after moving 20 ft straight in the same round, deals extra 2d6 damage (Charge)"
	}],
	traits : [{
		name : "Charge",
		description : "If the cow moves at least 20 ft straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 7 (2d6) piercing damage."
	}]
};
CreatureList["ox"] = {
	name : "Ox",
	source : ["V", 208],
	size : 2, //Large
	type : "Beast",
	alignment : "Unaligned",
	ac : 10,
	hp : 15,
	hd : [2, 10], //[#, die]
	speed : "30 ft",
	scores : [18, 10, 12, 2, 10, 4], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "",
	passivePerception : 10,
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Gore",
		ability : 1,
		damage : [1, 6, "piercing"], //[#, die, type] "" for die is allowed
		range : "Melee (5 ft)",
		description : "If used after moving 20 ft straight in the same round, deals extra 2d6 damage (Charge)"
	}],
	traits : [{
		name : "Charge",
		description : "If the ox moves at least 20 ft straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 7 (2d6) piercing damage."
	}, {
		name : "Beast of Burden",
		description : "The oxen is considered to be a Huge animal for the purpose of determining its carrying capacity."
	}]
};
CreatureList["deep rothe"] = {
	name : "Deep Roth\xE9",
	source : ["V", 208],
	size : 3, //Medium
	type : "Beast",
	alignment : "Unaligned",
	ac : 10,
	hp : 13,
	hd : [2, 8], //[#, die]
	speed : "30 ft",
	scores : [18, 10, 12, 2, 10, 4], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "Darkvision 60 ft",
	passivePerception : 10,
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Gore",
		ability : 1,
		damage : [1, 6, "piercing"], //[#, die, type] "" for die is allowed
		range : "Melee (5 ft)",
		description : "If used after moving 20 ft straight in the same round, deals extra 2d6 damage (Charge)"
	}],
	traits : [{
		name : "Charge",
		description : "If the deep roth\xE9 moves at least 20 ft straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 7 (2d6) piercing damage."
	}, {
		name : "Innate Spellcasting",
		description : "The deep roth\xE9's spellcasting ability is Charisma. It can innately cast Dancing Lights at will, requiring no components."
	}]
};
CreatureList["rothe"] = {
	name : "Roth\xE9",
	source : ["V", 208],
	size : 2, //Large
	type : "Beast",
	alignment : "Unaligned",
	ac : 10,
	hp : 15,
	hd : [2, 10], //[#, die]
	speed : "30 ft",
	scores : [18, 10, 12, 2, 10, 4], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "Darkvision 30 ft",
	passivePerception : 10,
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Gore",
		ability : 1,
		damage : [1, 6, "piercing"], //[#, die, type] "" for die is allowed
		range : "Melee (5 ft)",
		description : "If used after moving 20 ft straight in the same round, deals extra 2d6 damage (Charge)"
	}],
	traits : [{
		name : "Charge",
		description : "If the Roth\xE9 moves at least 20 ft straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 7 (2d6) piercing damage."
	}]
};
CreatureList["stench kow"] = {
	name : "Stench Kow",
	source : ["V", 208],
	size : 2, //Large
	type : "Beast",
	alignment : "Unaligned",
	ac : 10,
	hp : 15,
	hd : [2, 10], //[#, die]
	speed : "30 ft",
	scores : [18, 10, 12, 2, 10, 4], //[Str, Dex, Con, Int, Wis, Cha]
	damage_resistances : "cold, fire, and poison damage",
	senses : "Darkvision 60 ft",
	passivePerception : 10,
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Gore",
		ability : 1,
		damage : [1, 6, "piercing"], //[#, die, type] "" for die is allowed
		range : "Melee (5 ft)",
		description : "If used after moving 20 ft straight in the same round, deals extra 2d6 damage (Charge)"
	}],
	traits : [{
		name : "Charge",
		description : "If the stench kow moves at least 20 ft straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 7 (2d6) piercing damage."
	}, {
		name : "Stench",
		description : "Any creature other than a stench kow starting its turn within 5 ft of a stench kow must make a DC 12 Constitution saving throw or be poisoned until the start of the creature's next turn. On a successful saving throw, the creature is immune to the stench of all stench kows for 1 hour."
	}],
	wildshapeString : "Darkvision 60 ft | Resistant to: cold, fire, poison | Charge: If the stench kow moves at least 20 ft straight toward a target and then hits it with a gore attack on the same turn, it deals extra 2d6 piercing damage | Stench: Any creature starting its turn within 5 ft of a stench kow must make a DC 12 Con save or be poisoned until the start of the its next turn. On a success, it is immune to the stench of all stench kows for 1 hour"
};
CreatureList["dolphin"] = {
	name : "Dolphin",
	source : ["V", 208],
	size : 3, //Medium
	type : "Beast",
	alignment : "Unaligned",
	ac : 12,
	hp : 11,
	hd : [2, 8], //[#, die]
	speed : "swim 60 ft",
	scores : [14, 13, 13, 6, 12, 7], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 3
	},
	senses : "Blindsight 60 ft",
	passivePerception : 13,
	challengeRating : "1/8",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Slam",
		ability : 1,
		damage : [1, 6, "bludgeoning"], //[#, die, type] "" for die is allowed
		range : "Melee (5 ft)",
		description : "If used after moving 30 ft straight in the same round, deals extra 1d6 damage (Charge)"
	}],
	traits : [{
		name : "Charge",
		description : "If the dolphin moves at least 30 ft straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 3 (1d6) bludgeoning damage."
	}, {
		name : "Hold Breath",
		description : "The dolphin can hold its breath for 20 minutes."
	}]
};
CreatureList["cranium rat"] = {
	name : "Cranium Rat",
	source : ["V", 133],
	size : 5, //Tiny
	type : "Beast",
	companion : "familiar_not_al",
	alignment : "Lawful Evil",
	ac : 12,
	hp : 2,
	hd : [1, 4], //[#, die]
	speed : "30 ft",
	scores : [2, 14, 10, 4, 11, 8], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "Darkvision 30 ft",
	passivePerception : 10,
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 2,
		damage : [1, "", "piercing"], //[#, die, type] "" for die is allowed
		range : "Melee (5 ft)",
		description : "",
		abilitytodamage : false
	}],
	traits : [{
		name : "Illumination",
		description : "As a bonus action, the cranium rat can shed dim light from its brain in a 5-foot radius or extinguish the light."
	}, {
		name : "Telepathic Shroud",
		description : "The cranium rat is immune to any effect that would sense its emotions or read its thoughts, as well as to all divination spells."
	}]
};
CreatureList["brontosaurus"] = {
	name : "Brontosaurus",
	source : [["V", 139], ["ToA", 215]],
	size : 0, //Gargantuan
	type : "Beast",
	alignment : "Unaligned",
	ac : 15,
	hp : 121,
	hd : [9, 20], //[#, die]
	speed : "30 ft",
	scores : [21, 9, 17, 2, 10, 7], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", 6, "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "",
	passivePerception : 10,
	challengeRating : "5",
	proficiencyBonus : 3,
	attacksAction : 1,
	attacks : [{
		name : "Stomp",
		ability : 1,
		damage : [5, 8, "bludgeoning"], //[#, die, type] "" for die is allowed
		range : "Melee (20 ft)",
		description : "Target must succeed on a DC 14 Strength saving throw or be knocked prone"
	}, {
		name : "Tail",
		ability : 1,
		damage : [6, 8, "bludgeoning"], //[#, die, type] "" for die is allowed
		range : "Melee (20 ft)",
		description : ""
	}]
};
CreatureList["deinonychus"] = {
	name : "Deinonychus",
	source : [["V", 139], ["ToA", 217]],
	size : 3, //Medium
	type : "Beast",
	alignment : "Unaligned",
	ac : 13,
	hp : 26,
	hd : [4, 8], //[#, die]
	speed : "40 ft",
	scores : [15, 15, 14, 4, 12, 6], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 3
	},
	senses : "",
	passivePerception : 13,
	challengeRating : "1",
	proficiencyBonus : 2,
	attacksAction : 3,
	attacks : [{
		name : "Claw",
		ability : 1,
		damage : [1, 8, "slashing"], //[#, die, type] "" for die is allowed
		range : "Melee (5 ft)",
		description : "Two claw and one bite as one Attack action; If used after moving 20 ft straight in the same round, see Pounce trait"
	}, {
		name : "Bite",
		ability : 1,
		damage : [1, 8, "piercing"], //[#, die, type] "" for die is allowed
		range : "Melee (5 ft)",
		description : "Two claw and one bite as one Attack action (also, see Pounce trait)"
	}],
	traits : [{
		name : "Multiattack",
		description : "The deinonychus makes three attacks: two with its claws and one with its bite."
	}, {
		name : "Pounce",
		description : "If the deinonychus moves at least 20 ft straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the deinonychus can make one bite attack against it as a bonus action."
	}]
};
CreatureList["dimetrodon"] = {
	name : "Dimetrodon",
	source : [["V", 139], ["ToA", 217]],
	size : 3, //Medium
	type : "Beast",
	alignment : "Unaligned",
	ac : 12,
	hp : 19,
	hd : [3, 8], //[#, die]
	speed : "30 ft, swim 20 ft",
	scores : [14, 10, 15, 2, 10, 5], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 2
	},
	senses : "",
	passivePerception : 12,
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 1,
		damage : [2, 6, "piercing"], //[#, die, type] "" for die is allowed
		range : "Melee (5 ft)",
		description : ""
	}]
};
CreatureList["hadrosaurus"] = {
	name : "Hadrosaurus",
	source : [["V", 140], ["ToA", 224]],
	size : 2, //Large
	type : "Beast",
	alignment : "Unaligned",
	ac : 11,
	hp : 19,
	hd : [3, 10], //[#, die]
	speed : "40 ft",
	scores : [15, 10, 13, 2, 10, 5], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 2
	},
	senses : "",
	passivePerception : 12,
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Tail",
		ability : 1,
		damage : [1, 10, "bludgeoning"], //[#, die, type] "" for die is allowed
		range : "Melee (5 ft)",
		description : ""
	}]
};
CreatureList["quetzalcoatlus"] = {
	name : "Quetzalcoatlus",
	source : [["V", 140], ["ToA", 230]],
	size : 1, //Huge
	type : "Beast",
	alignment : "Unaligned",
	ac : 13,
	hp : 30,
	hd : [4, 12], //[#, die]
	speed : "10 ft, fly 80 ft",
	scores : [15, 13, 13, 2, 10, 5], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 2
	},
	senses : "",
	passivePerception : 12,
	challengeRating : "2",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 1,
		damage : [3, 6, "piercing"], //[#, die, type] "" for die is allowed
		range : "Melee (10 ft)",
		description : "If used after diving 30 ft towards a target, the attack deals 3d6 extra damage (Dive Attack)"
	}],
	traits : [{
		name : "Dive Attack",
		description : "If the quetzalcoatlus is flying and dives at least 30 ft toward a creature and then hits it with a bite attack, the attack deals an extra 10 (3d6) damage to the target."
	}, {
		name : "Flyby",
		description : "The quetzalcoatlus doesn't provoke opportunity attacks when it flies out of an enemy's reach."
	}]
};
CreatureList["stegosaurus"] = {
	name : "Stegosaurus",
	source : [["V", 140], ["ToA", 231]],
	size : 1, //Huge
	type : "Beast",
	alignment : "Unaligned",
	ac : 13,
	hp : 76,
	hd : [8, 12], //[#, die]
	speed : "40 ft",
	scores : [20, 9, 17, 2, 11, 5], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "",
	passivePerception : 10,
	challengeRating : "4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 1,
		damage : [6, 6, "piercing"], //[#, die, type] "" for die is allowed
		range : "Melee (10 ft)",
		description : ""
	}]
};
CreatureList["velociraptor"] = {
	name : "Velociraptor",
	source : [["V", 140], ["ToA", 235]],
	size : 5, //Tiny
	type : "Beast",
	alignment : "Unaligned",
	ac : 13,
	hp : 10,
	hd : [3, 4], //[#, die]
	speed : "30 ft",
	scores : [6, 14, 13, 4, 12, 6], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 3
	},
	senses : "",
	passivePerception : 13,
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
		name : "Bite",
		ability : 2,
		damage : [1, 6, "piercing"], //[#, die, type] "" for die is allowed
		range : "Melee (5 ft)",
		description : "One bite and one claw attack as an Attack action"
	}, {
		name : "Claw",
		ability : 2,
		damage : [1, 4, "slashing"], //[#, die, type] "" for die is allowed
		range : "Melee (5 ft)",
		description : "One bite and one claw attack as an Attack action"
	}],
	traits : [{
		name : "Pack Tactics",
		description : "The velociraptor has advantage on an attack roll against a creature if at least one of the velociraptor's allies is within 5 ft of the creature and the ally isn't incapacitated."
	}]
};
CreatureList["gazer"] = {
	name : "Gazer",
	source : ["V", 126],
	size : 5, //Tiny
	type : "Aberration",
	companion : "familiar_not_al",
	alignment : "Neutral Evil",
	ac : 13,
	hp : 13,
	hd : [3, 4], //[#, die]
	speed : "0 ft, fly 30 ft",
	scores : [3, 17, 14, 3, 10, 7], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", 2, ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 4,
		"stealth" : 5
	},
	senses : "Darkvision 60 ft",
	passivePerception : 14,
	challengeRating : "1/2",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 2,
		damage : [1, "", "piercing"], //[#, die, type] "" for die is allowed
		range : "Melee (5 ft)",
		description : ""
	}, {
		name : "Eye Rays",
		ability : 3,
		damage : ["Special", "", ""], //[#, die, type] "" for die is allowed
		range : "60 ft",
		description : "Shoot two randomly determined different rays as one action; Each ray has its own target; See traits",
		dc : true,
		abilitytodamage : false
	}],
	traits : [{
		name : "Aggressive",
		description : "As a bonus action, the gazer moves its speed toward an enemy that it can see."
	}, {
		name : "Mimicry",
		description : "The gazer can mimic simple speech it has heard, in any language. Any who hear this can tell it is an imitation with a successful DC 10 Wis (Insight) check."
	}],
	actions : [{
		name : "Eye Rays",
		description : "1. Dazing Ray: Wisdom saving throw or charmed until the start of the gazer's next turn. While charmed, half speed and disadv. on attacks.\n2. Fear Ray: Wisdom saving throw or frightened until the start of the gazer's next turn.\n3. Frost Ray: Target must make a Dexterity saving throw or 10 (3d6) cold damage.\n4. Telekinetic Ray: Medium or smaller creature, Strength saving throw or be moved up to 30 ft away from the gazer. If it is an up to 10 lb unattended object, the gazer moves it up to 30 ft in any direction. It can exert fine control on objects this way."
	}],
	variant : [{
		name : "Variant: Familiar",
		description : "The gazer can serve another creature as a familiar, forming a telepathic bond with its willing master, provided that the master is at least a 3rd-level spellcaster. While the two are bonded, the master can sense what the gazer senses as long as they are within 1 mile of each other. If its master causes it physical harm, the gazer will end its service as a familiar, breaking the telepathic bond."
	}]
};

// Magic Items
MagicItemsList["mind blade"] = {
	name : "Mind Blade",
	source : ["V", 81],
	type : "weapon (any sword)",
	rarity : "rare",
	description : "Mind flayers can turn any nonmagical sword into a mind blade. Only one creature can attune to this sword: either a specific mind flayer or one of its thralls. In the hands of its intended wielder, the mind blade is a magic weapon that deals an extra 2d6 psychic damage to any target it hits.",
	descriptionFull : "Mind flayers can turn any nonmagical sword into a mind blade. Only one creature can attune to it: either a specific mind flayer or one of its thralls. In the hands of any other creature, the mind blade functions as a normal sword of its kind. In the hands of its intended wielder, the mind blade is a magic weapon that deals an extra 2d6 psychic damage to any target it hits.",
	attunement : true,
	prerequisite : "Requires attunement by the creature this armor was made for: either a specific mind flayer or one of its thralls",
	prereqeval : function (v) { return false; },
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "suffix",
		descriptionChange : ["replace", "sword"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /sword|scimitar|rapier/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/^(?=.*mind)(?=.*blade).*$/i).test(v.WeaponText)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + '+2d6 psychic damage';
				}
			},
			'If I include the words "Mind Blade" in a the name of a sword, it will be treated as the magic weapon Mind Blade, which adds +2d6 psychic damage on any hit as long as attuned to its intended wielder.'
		]
	}
}
MagicItemsList["mind carapace armor"] = {
	name : "Mind Carapace Armor",
	source : ["V", 81],
	type : "armor (heavy)",
	rarity : "uncommon",
	description : "Only one creature can attune to this armor: either a specific mind flayer or one of its thralls. To its intended wearer, the armor grants advantage on Intelligence, Wisdom, and Charisma saving throws and makes its wearer immune to the frightened condition.",
	descriptionFull : "Any nonmagical suit of heavy armor can be turned by mind flayers into mind carapace armor. Only one creature can attune to it: either a specific mind flayer or one of its thralls. While worn by any other creature, the mind carapace armor functions as normal armor of its kind. To its intended wearer, the armor grants advantage on Intelligence, Wisdom, and Charisma saving throws and makes its wearer immune to the frightened condition.",
	attunement : true,
	prerequisite : "Requires attunement by the creature this armor was made for: either a specific mind flayer or one of its thralls",
	prereqeval : function (v) { return false; },
	savetxt : { text : ["Adv. on Int, Wis, and Cha saves"], immune : ["frightened"] },
	advantages : [["Intelligence", true], ["Wisdom", true], ["Charisma", true]],
	allowDuplicates : true,
	chooseGear : {
		type : "armor",
		prefixOrSuffix : "brackets",
		descriptionChange : ["prefix", "armor"],
		itemName1stPage : ["suffix", "Mind Carapace"],
		excludeCheck : function (inObjKey, inObj) {
			return !(/heavy/i).test(inObj.type);
		}
	}
}
MagicItemsList["mind lash"] = {
	name : "Mind Lash",
	source : ["V", 81],
	type : "weapon (whip)",
	rarity : "rare",
	description : "This magic whip strips away a creature's will to survive as it also strips away flesh and deals +2d4 psychic damage on each hit. Any target taking psychic damage must succeed on a DC 15 Wisdom save or have disadv. on Int, Wis, and Cha saves for 1 minute. It can repeat the save at the end of each of its turns.",
	descriptionFull : "In the hands of any creature other than a mind flayer, a mind lash functions as a normal whip. In the hands of an illithid, this magic weapon strips away a creature's will to survive as it also strips away flesh, dealing an extra 2d4 psychic damage to any target it hits. Any creature that takes psychic damage from the mind lash must also succeed on a DC 15 Wisdom saving throw or have disadvantage on Intelligence, Wisdom, and Charisma saving throws for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
	attunement : true,
	weight : 3,
	prerequisite : "Requires attunement by an illithid",
	prereqeval : function (v) { return (/mind flayer|illithid/i).test(What("Race")); },
	weaponsAdd : ["Mind Lash"],
	weaponOptions : {
		baseWeapon : "whip",
		regExpSearch : /^(?=.*mind)(?=.*lash).*$/i,
		name : "Mind Lash",
		source : ["V", 81],
		description : "Finesse, reach; +2d4 psychic damage; DC 15 Wis save or disadv. on Int/Wis/Cha saves for 1 min"
	}
}
MagicItemsList["shield of far sight"] = {
	name : "Shield of Far Sight",
	source : ["V", 81],
	type : "shield",
	rarity : "rare",
	description : "The mind flayer that created this shield can see through its eye with 60 ft darkvision while it is on the same plane. While peering through this magical eye, the mind flayer can use its Mind Blast action as though it were standing behind the shield. If a shield of far sight is destroyed, its creator is blinded for 2d12 hours.",
	descriptionFull : "A mind flayer skilled at crafting magic items creates a shield of far sight by harvesting an eye from an intelligent humanoid and magically implanting it on the outer surface of a nonmagical shield. The shield becomes a magic item once the eyes is implanted, whereupon the mind flayer can give the shield to a thrall or hang it on a wall in its lair. As long as the shield is on the same plane of existence as its creator, the mind flayer can see through the shield's eye, which has darkvision out to a range of 60 feet. While peering through this magical eye, the mind flayer can use its Mind Blast action as though it were standing behind the shield.\n   If a shield of far sight is destroyed, the mind flayer that created it is blinded for 2d12 hours.",
	weight : 6,
	shieldAdd : "Shield of Far Sight"
}
MagicItemsList["survival mantle"] = {
	name : "Survival Mantle",
	source : ["V", 81],
	type : "armor (half plate)",
	rarity : "unknown",
	description : "This mantle functions as a half plate and takes just as long to don or doff. It encases portions of my shoulders, neck, and chest so that I can breathe normally in any environment (including a vacuum) and gives me advantage on saving throws against gases (such as Cloudkill, Stinking Cloud, or inhaled poisons).",
	descriptionFull : "This carapace-like augmentation encases portions of the wearer's shoulders, neck, and chest. A survival mantle is equivalent to a suit of nonmagical half plate armor and takes just as long to don or doff. It can't be worn with other kinds of armor.\n   A creature wearing a survival mantle can breathe normally in any environment (including a vacuum) and has advantage on saving throws against harmful gases (such as those created by a Cloudkill spell, a Stinking Cloud spell, inhaled poisons, and the breath weapons of some dragons).",
	weight : 40,
	savetxt : { adv_vs : ["gases"] },
	armorAdd : "Survival Mantle",
	armorOptions : {
		regExpSearch : /^(?=.*survival)(?=.*mantle).*$/i,
		name : "Survival Mantle",
		source : ["V", 81],
		type : "medium",
		ac : 15,
		stealthdis : true,
		weight : 40
	}
}
