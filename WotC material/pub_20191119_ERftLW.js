var iFileName = "pub_20191119_ERftLW.js";
RequiredSheetVersion("13.0.8");
// This file adds the content from Eberron: Rising from the Last War to MPMB's Character Record Sheet

// Define the source
SourceList["E:RLW"] = {
	name : "Eberron: Rising from the Last War",
	abbreviation : "E:RLW",
	group : "Primary Sources",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/eberron",
	date : "2019/11/19"
};

// The changeling
RaceList["changeling"] = {
	regExpSearch : /changeling/i,
	name : "Changeling",
	source : [["E:RLW", 18]],
	plural : "Changelings",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	skillstxt : "Choose two from Deception, Intimidation, Insight, and Persuasion",
	languageProfs : ["Common", 2],
	age : " mature slightly faster than humans but share a similar lifespan, typically a century or less. While a changeling can transform to conceal their age, the effects of aging affect them similarly to humans",
	height : " stand between 5 and 6 feet tall (5'1\" + 2d4\")",
	weight : " weigh around 140 lb (115 + 2d4 \xD7 2d4 lb)",
	heightMetric : " stand between 1,5 to over 1,8 metres tall (155 + 5d4 cm)",
	weightMetric : " weigh around 65 kg (52 + 5d4 \xD7 4d4 / 10 kg)",
	scorestxt : "+2 Charisma and +1 to one other ability score of my choice",
	scores : [0, 0, 0, 0, 0, 2],
	trait : "Changeling (+2 Charisma and +1 to one other ability score of my choice)\nShapechanger: As an action, I can change my appearance and voice to or from a humanoid-shaped form I have seen, not changing my equipment. I determine the specifics of the form like hair length, eye color, and sex. I can adjust my height and weight, but not so much that my size changes. I revert back when I die. I can make myself appear as a member of another race, though none of my game statistics change.",
	action : [["action", "Shapechanger"]]
};

// Double bladed scimitar
WeaponsList["double-bladed scimitar"] = {
	regExpSearch : /^(?=.*double)(?=.*scimitar).*$/i,
	name : "Double-bladed scimitar",
	source : [["E:RLW", 22], ["WGtE", 74]],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [2, 4, "slashing"],
	range : "Melee",
	weight : 6,
	description : "Two-handed; With Attack action, one attack as bonus action for 1d4",
	special : true,
	abilitytodamage : true
};

// Revenant blade feat
FeatsList["revenant blade"] = {
	name : "Revenant Blade",
	source : [["E:RLW", 22]],
	prerequisite : "Being an Elf",
	prereqeval : function(v) { return (/^(?!.*half)(?=.*(elf|eladrin|avariel|grugach|shadar-kai)).*$/i).test(CurrentRace.known); },
	descriptionFull : "You are descended from a master of the double blade and their skills have passed on to you. You gain the following benefits:\n \u2022 Increase your Dexterity or Strength score by 1, to a maximum of 20.\n \u2022 While you are holding a double-bladed scimitar with two hands, you gain a + 1 bonus to Armor Class.\n \u2022 A double-bladed scimitar has the finesse property when you wield it.",
	description : "My mastery with the double bladed scimitar allows me to treat it as having the finesse trait. In addition, I gain +1 AC while wielding it with two hands. [+1 Strength or Dexterity]",
	scorestxt : "+1 Strength or Dexterity",
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.baseWeaponName == 'double-bladed scimitar' && fields.Proficiency) {
					if (!/finesse/i.test(fields.Description)) fields.Description = 'Finesse, ' + fields.Description.substr(0,1).toLowerCase() + fields.Description.substr(1);
					fields.Mod = v.StrDex;
				};
			},
			"Double-bladed scimitars count as having finesse for me.",
			1
		]
	},
	extraAC : {
		mod : 1,
		text : "I gain a +1 bonus to AC while I'm wielding a double-bladed weapon in two hands.",
		stopeval : function (v) { return v.usingShield && !(/animated/i).test(What("AC Shield Bonus Description")) || !CurrentWeapons.known.some(function (n) { return n[0] == "double-bladed scimitar" || (WeaponsList[n[0]] && WeaponsList[n[0]].baseWeapon == "double-bladed scimitar"); }); }
	}
};
// [dupl_start] reprints from Volo's Guide to Monsters
if (!SourceList.V) {
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
	RaceList["goblin"] = {
		regExpSearch : /^(?=.*\bgoblins?\b)(?!.*(hobgoblin|bugbear)).*$/i,
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
			},
			"nimble escape" : {
				name : "Nimble Escape",
				minlevel : 1,
				action : [["bonus action", " (disengage/hide)"]]
			}
		},
		trait : "Goblin (+2 Dexterity, +1 Constitution)\n\nFury of the Small: Once per short rest, when I hit a creature of a size category larger than mine, I deal extra damage equal to my level.\n\nNimble Escape: As a bonus action, I can take the Disengage or Hide action."
	};
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
		trait : "Hobgoblin (+2 Constitution, +1 Intelligence)\n\nMartial Training: I am proficient with two martial weapons of my choice and light armor.\n\nSaving Face: Once per short rest, when I miss an attack roll or fail an ability check or a saving throw, I can gain a bonus to the roll equal to the number of allies I can see within 30 ft of me (max +5)."
	};
	// The Orc, which is a duplicate from VGtM after the VGtM 2020 errata
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
		action : ["bonus action", "Aggressive (dash to enemy)"],
		carryingCapacity : 2
	};
} // dupl_end

// The kalashtar
RaceList["kalashtar"] = {
	regExpSearch : /kalashtar/i,
	name : "Kalashtar",
	source : [["E:RLW", 30]],
	plural : "Kalashtar",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Quori", 1],
	savetxt : { immune : ["effects that require me to dream"], text : ["Adv. on all Wis saves"] },
	advantages : [ ["Wisdom", true] ],
	dmgres : ["Psychic"],
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " range from 5 and a half to well over 6 feet tall (5'4\" + 2d6\")",
	weight : " weigh around 145 lb (110 + 2d6 \xD7 1d6 lb)",
	heightMetric : " range from 1,7 to 1,9 metres tall (160 + 5d6 cm)",
	weightMetric : " weigh around 65 kg (50 + 5d6 \xD7 2d6 / 10 kg)",
	scores : [0, 0, 0, 0, 2, 1],
	trait : "Kalashtar (+2 Wisdom, +1 Charisma)\n   Dual Mind: I have advantage on Wisdom saving throws.\n   Mind Link: I can speak telepathically to any creature I can see within 10 ft \xD7 my level, as long as it can speak at least one language. As an action, I can give that creature the ability to speak telepathically back to me while it can see me and is within range. This lasts for 1 hour, until I use this ability on another creature, or until I end it as an action.\n   Severed from Dreams: I don't dream and thus immune to spells that affect dreams.",
	action : [['action', 'Mind Link (start/stop)']]
};

// The four subraces of the shifter
RaceList["beasthide shifter"] = {
	regExpSearch : /^(?=.*shifter)(?=.*beast)(?=.*hide).*$/i,
	name : "Beasthide shifter",
	sortname : "Shifter, Beasthide",
	source : [["E:RLW", 34]],
	plural : "Beasthide shifters",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common"],
	vision : [["Darkvision", 60]],
	skills : ["Athletics"],
	age : " reach young adulthood at age 10 and rarely live over 70",
	height : " range from under 5 to almost 6 feet tall (4'6\" + 2d8\")",
	weight : " weigh around 135 lb (90 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from under 1,5 to 1,8 metres tall (4'6\" + 5d8 cm)",
	weightMetric : " weigh around 65 kg (40 + 5d8 \xD7 4d4 / 10 kg)",
	scores : [1, 0, 2, 0, 0, 0],
	trait : "Beasthide Shifter: (+1 Strength, +2 Constitution)\n\nShifting: As a bonus action once per short rest, I can assume a more bestial appearance.\nThis transformation lasts for 1 minute, until I die, or until I revert back as a bonus action.\nWhen I shift, I gain temporary HP equal to 1d6 + my level + my Constitution modifier (minimum 1 temporary hit point).\nWhile transformed like this, I have a +1 bonus to AC.",
	features : {
		"shift" : {
			name : "Shift",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			action : ["bonus action", " (start/end)"],
			additional : levels.map(function (n) { return "1d6 + " + n + " + Con mod temp HP"; })
		}
	}
};
RaceList["longtooth shifter"] = {
	regExpSearch : /^(?=.*shifter)(?=.*long)(?=.*(tooth|teeth)).*$/i,
	name : "Longtooth shifter",
	sortname : "Shifter, Longtooth",
	source : [["E:RLW", 34]],
	plural : "Longtooth shifters",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*fangs?)(?=.*long)(?=.*(tooth|teeth)).*$/i,
		name : "Longtooth Fangs",
		source : [["E:RLW", 34]],
		damage : [1, 6, "piercing"],
		description : "Only while shifted; One attack as bonus action"
	},
	weaponsAdd : ["Longtooth Fangs"],
	vision : [["Darkvision", 60]],
	skills : ["Intimidation"],
	age : " reach young adulthood at age 10 and rarely live over 70",
	height : " range from under 5 to almost 6 feet tall (4'6\" + 2d8\")",
	weight : " weigh around 135 lb (90 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from under 1,5 to 1,8 metres tall (4'6\" + 5d8 cm)",
	weightMetric : " weigh around 65 kg (40 + 5d8 \xD7 4d4 / 10 kg)",
	scores : [2, 1, 0, 0, 0, 0],
	trait : "Longtooth Shifter: (+2 Strength, +1 Dexterity)\nShifting: As a bonus action once per short rest, I can assume a more bestial appearance.\nThis transformation lasts for 1 minute, until I die, or until I revert back as a bonus action.\nWhen I shift, I gain temporary HP equal to my level + my Constitution modifier (minimum 1 temporary hit point).\nWhile transformed like this, I use my elongated fangs to make unarmed strikes, dealing 1d6 piercing damage. As a bonus action, I can maken one attack with my fangs.",
	action : [['bonus action', 'Longtooth Fangs attack (while shifted)']],
	features : {
		"shift" : {
			name : "Shift",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			action : ["bonus action", " (start/end)"],
			additional : levels.map(function (n) { return n + " + Con mod temp HP"; })
		}
	}
};
RaceList["swiftstride shifter"] = {
	regExpSearch : /^(?=.*shifter)(?=.*swift)(?=.*stride).*$/i,
	name : "Swiftstride shifter",
	sortname : "Shifter, Swiftstride",
	source : [["E:RLW", 34]],
	plural : "Swiftstride shifters",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common"],
	vision : [["Darkvision", 60]],
	skills : ["Acrobatics"],
	age : " reach young adulthood at age 10 and rarely live over 70",
	height : " range from under 5 to almost 6 feet tall (4'6\" + 2d8\")",
	weight : " weigh around 135 lb (90 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from under 1,5 to 1,8 metres tall (4'6\" + 5d8 cm)",
	weightMetric : " weigh around 65 kg (40 + 5d8 \xD7 4d4 / 10 kg)",
	scores : [0, 2, 0, 0, 0, 1],
	trait : "Swiftstride Shifter: (+2 Dexterity, +1 Charisma)\nShifting: As a bonus action once per short rest, I can assume a more bestial appearance.\nThis transformation lasts for 1 minute, until I die, or until I revert back as a bonus action.\nWhen I shift, I gain temporary HP equal to my level + my Con" + (typePF ? "stitution modifier (minimum 1 temporary hit point" : " mod (minimum 1 temp HP") + ").\nWhile transformed like this, my walking speed increases with 10 ft.\nAs a reaction when an enemy ends its turn within 5 ft of me while I'm shifted, I can move 10 ft without provoking opportunity attacks.",
	action : [['reaction', 'Stride (while shifted)']],
	features : {
		"shift" : {
			name : "Shift",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			action : ["bonus action", " (start/end)"],
			additional : levels.map(function (n) { return n + " + Con mod temp HP"; })
		}
	}
};
RaceList["wildhunt shifter"] = {
	regExpSearch : /^(?=.*shifter)(?=.*wild)(?=.*hunt).*$/i,
	name : "Wildhunt shifter",
	sortname : "Shifter, Wildhunt",
	source : [["E:RLW", 34]],
	plural : "Wildhunt shifters",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common"],
	vision : [["Darkvision", 60]],
	skills : ["Survival"],
	age : " reach young adulthood at age 10 and rarely live over 70",
	height : " range from under 5 to almost 6 feet tall (4'6\" + 2d8\")",
	weight : " weigh around 135 lb (90 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from under 1,5 to 1,8 metres tall (4'6\" + 5d8 cm)",
	weightMetric : " weigh around 65 kg (40 + 5d8 \xD7 4d4 / 10 kg)",
	scores : [0, 1, 0, 0, 2, 0],
	trait : "Wildhunt Shifter: (+1 Dexterity, +2 Wisdom)\nShifting: As a bonus action once per short rest, I can assume a more bestial appearance.\nThis transformation lasts for 1 minute, until I die, or until I revert back as a bonus action.\nWhen I shift, I gain temporary HP equal to my level + my Constitution modifier (minimum 1 temporary hit point).\nWhile transformed like this, I have advantage on Wisdom checks and no creature within 30 ft can make an attack roll with advantage against me, unless I'm incapacitated.",
	features : {
		"shift" : {
			name : "Shift",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			action : ["bonus action", " (start/end)"],
			additional : levels.map(function (n) { return n + " + Con mod temp HP"; })
		}
	}
};

// The warforged
RaceList["warforged"] = {
	regExpSearch : /warforged/i,
	name : "Warforged",
	source : [["E:RLW", 36]],
	plural : "Warforged",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	toolProfs : [["Any tool", 1]],
	skillstxt : "Choose any one skill and any one tool",
	savetxt : {
		text : ["Magic can't put me to sleep"],
		immune : ["disease", "magical aging effects"],
		adv_vs : ["poison"]
	},
	dmgres : ["Poison"],
	age : " typical are between two and thirty years old. The maximum warforged lifespan remains a mystery; so far, warforged have shown no signs of deterioration due to age. Warforged are immune to magical aging effects.",
	height : " stand between 6 and 7 feet tall (5'10\" + 2d6\")",
	weight : " weigh around 300 lb (270 + 2d6 \xD7 4 lb)",
	heightMetric : " stand between 1,8 and 2,1 metres tall (178 + 5d6 cm)",
	weightMetric : " weigh around 135 kg (125 + 5d6 \xD7 8 / 10 kg)",
	scorestxt : "+2 Constitution and +1 to one other ability score of my choice",
	scores : [0, 0, 2, 0, 0, 0],
	trait : "Warforged (+2 Constitution and +1 to one other ability score" + (typePF ? "" : " of my choice") + ")\nWarforged Resilience: I do not need to sleep, eat, drink, or breathe.\nSentry's Rest: To benefit from a long rest, I need to enter an inactive state for 6 hours, during which I am not rendered unconscious and can see and hear as normal.\nIntegrated Protection: I gain +1 AC and I can don only armor with which I'm proficient. To don or doff armor, I must (un)incorporate it into my body over the course of 1 hour, which can be done during resting. Donned armor can't be removed against my will while I'm alive.",
	extraAC : {
		name : "Integrated Protection",
		mod : 1,
		text : "I gain a +1 bonus to AC."
	}
};

// Dragonmarks subraces
RaceList["dragonmark detection half-elf"] = {
	regExpSearch : /^((?=.*mark)(?=.*detection)|(?=.*house)(?=.*medani)).*$/i,
	name : "Half-elf (dragonmark)",
	sortname : "Dragonmark, Detection (Half-Elf)",
	source : [["E:RLW", 40]],
	plural : "Half-elves (dragonmark)",
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
	age : " reach adulthood around age 20 and often live over 180 years",
	height : " range from 5 to 6 feet tall (4'9\" + 2d8\")",
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from 1,5 to 1,8 metres tall (145 + 5d8 cm)",
	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)",
	scorestxt : "+2 Wisdom and +1 to one other ability score of my choice",
	scores : [0, 0, 0, 0, 2, 0],
	trait : "Half-Elf, Dragonmark of Detection (+2 Wisdom \u0026 +1 to one other ability of my choice)\n   Deductive Intuition: I can add +1d4 to my Intelligence (Investigation) and Wisdom (Insight) checks.\n   Magical Detection: I can cast Detect Magic and Detect Poison and Disease each once per long rest. At 3rd level, I can also cast See Invisibility once per long rest. Wisdom is my spellcasting ability for these and none of them require material components.\n   Spells of the Mark: I add several spells to the spell list of my spellcasting class(es).",
	spellcastingAbility : 5, // changed from Int to Wis by errata
	features : {
		"magical detection" : {
			name : "Magical Detection (level 1)",
			limfeaname : "Detect Magic",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Magical Detection (level 1)",
				spells : ["detect magic", "detect poison and disease"],
				selection : ["detect magic", "detect poison and disease"],
				firstCol : "oncelr",
				times : 2
			},
			extraLimitedFeatures : [{
				name : "Detect Poison and Disease",
				usages : 1,
				recovery : "long rest"
			}],
			spellChanges : {
				"detect poison and disease" : {
					components : "V,S",
					compMaterial : "",
					changes : "I can cast this spell once per long rest without requiring material components."
				}
			}
		},
		"see invisibility" : {
			name : "Magical Detection (level 3)",
			limfeaname : "See Invisibility",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Magical Detection (level 3)",
				spells : ["see invisibility"],
				selection : ["see invisibility"],
				firstCol : "oncelr"
			},
			spellChanges : {
				"see invisibility" : {
					components : "V,S",
					compMaterial : "",
					changes : "I can cast this spell once per long rest without requiring material components."
				}
			}
		}
	},
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["detect evil and good", "detect poison and disease", "detect thoughts", "find traps", "clairvoyance", "nondetection", "arcane eye", "divination", "legend lore"]);
			},
			"My race adds extra spells to the spell list(s) of my spellcasting class(es): Detect Evil and Good, Detect Poison and Disease, Detect Thoughts, Find Traps, Clairvoyance, Nondetection, Arcane Eye, Divination, and Legend Lore."
		]
	}
};
RaceList["dragonmark finding half-orc"] = {
	regExpSearch : /^((?=.*half)(?=.*\bor(c|k))((?=.*mark)(?=.*finding)|(?=.*house)(?=.*tharashk))).*$/i,
	name : "Half-orc (dragonmark)",
	sortname : "Dragonmark, Finding (Half-Orc)",
	source : [["E:RLW", 41]],
	plural : "Half-orcs (dragonmark)",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Goblin"],
	vision : [["Darkvision", 60]],
	age : " reach adulthood around age 14 and rarely live longer than 75 years",
	height : " range from 5 to well over 6 feet tall (4'10\" + 2d10\")",
	weight : " weigh around 215 lb (140 + 2d10 \xD7 2d6 lb)",
	heightMetric : " range from 1,5 to well over 1,8 metres tall (150 + 5d10 cm)",
	weightMetric : " weigh around 100 kg (65 + 5d10 \xD7 4d6 / 10 kg)",
	scores : [0, 0, 1, 0, 2, 0],
	trait : "Half-Orc, Dragonmark of Finding (+1 Constitution, +2 Wisdom)\n   Hunter's Intuition: I can add +1d4 to my Wisdom (Perception) and Wisdom (Survival) checks.\n   Finder's Magic: I can cast Hunter's Mark once per long rest. At 3rd level, I can also cast Locate Object once per long rest. Wisdom is my spellcasting ability for these.\n   Spells of the Mark: I add several spells to the spell list of my spellcasting class(es).",
	spellcastingAbility : 5,
	features : {
		"finder's magic" : {
			name : "Finder's Magic (level 1)",
			limfeaname : "Hunter's Mark",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Finder's Magic (level 1)",
				spells : ["hunter's mark"],
				selection : ["hunter's mark"],
				firstCol : "oncelr"
			}
		},
		"locate object" : {
			name : "Finder's Magic (level 3)",
			limfeaname : "Locate Object",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Finder's Magic (level 3)",
				spells : ["locate object"],
				selection : ["locate object"],
				firstCol : "oncelr"
			}
		}
	},
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["faerie fire", "longstrider", "locate animals or plants", "locate object", "clairvoyance", "speak with plants", "divination", "locate creature", "commune with nature"]);
			},
			"My race adds extra spells to the spell list(s) of my spellcasting class(es): Faerie Fire, Longstrider, Locate Animals or Plants, Locate Object, Clairvoyance, Speak with Plants, Divination, Locate Creature, and Commune with Nature."
		]
	}
};
RaceList["dragonmark finding human"] = {
	regExpSearch : /^((?=.*human)((?=.*mark)(?=.*finding)|(?=.*house)(?=.*tharashk))).*$/i,
	name : "Human (dragonmark)",
	sortname : "Dragonmark, Finding (Human)",
	source : [["E:RLW", 41]],
	plural : "Human (dragonmark)",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Goblin"],
	vision : [["Darkvision", 60]],
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	scores : [0, 0, 1, 0, 2, 0],
	trait : "Human, Dragonmark of Finding (+1 Constitution, +2 Wisdom)\n   Hunter's Intuition: I can add +1d4 to my Wisdom (Perception) and Wisdom (Survival) checks.\n   Finder's Magic: I can cast Hunter's Mark once per long rest. At 3rd level, I can also cast Locate Object once per long rest. Wisdom is my spellcasting ability for these.\n   Spells of the Mark: I add several spells to the spell list of my spellcasting class(es).",
	spellcastingAbility : 5,
	features : {
		"finder's magic" : {
			name : "Finder's Magic (level 1)",
			limfeaname : "Hunter's Mark",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Finder's Magic (level 1)",
				spells : ["hunter's mark"],
				selection : ["hunter's mark"],
				firstCol : "oncelr"
			}
		},
		"locate object" : {
			name : "Finder's Magic (level 3)",
			limfeaname : "Locate Object",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Finder's Magic (level 3)",
				spells : ["locate object"],
				selection : ["locate object"],
				firstCol : "oncelr"
			}
		}
	},
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["faerie fire", "longstrider", "locate animals or plants", "locate object", "clairvoyance", "speak with plants", "divination", "locate creature", "commune with nature"]);
			},
			"My race adds extra spells to the spell list(s) of my spellcasting class(es): Faerie Fire, Longstrider, Locate Animals or Plants, Locate Object, Clairvoyance, Speak with Plants, Divination, Locate Creature, and Commune with Nature."
		]
	}
};
RaceList["dragonmark handling human"] = {
	regExpSearch : /^((?=.*mark)(?=.*handling)|(?=.*house)(?=.*vadalis)).*$/i,
	name : "Human (dragonmark)",
	sortname : "Dragonmark, Handling (Human)",
	source : [["E:RLW", 42]],
	plural : "Humans (dragonmark)",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	scorestxt : "+2 Wisdom and +1 to one other ability score of my choice",
	scores : [0, 0, 0, 0, 2, 0],
	trait : "Human, Dragonmark of Handling (+2 Wisdom, +1 to one other ability score of my choice)\n   Wild Intuition: I can add +1d4 to my Wisdom (Animal Handling) and Intelligence (Nature) checks.\n   Primal Connection: I can cast Animal Friendship and Speak with Animals each once per short rest. Wisdom is my spellcasting ability for these.\n   The Bigger They Are: When I cast Animal Friendship or Speak with Animals, I can target a monstrosity with an Intelligence of 3 or lower instead of a beast.",
	spellcastingAbility : 5,
	features : {
		"primal connection" : {
			name : "Primal Connection",
			limfeaname : "Animal Friendship",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			extraLimitedFeatures : [{
				name : "Speak with Animals",
				usages : 1,
				recovery : "short rest"
			}],
			spellcastingBonus : {
				name : "Primal Connection",
				spells : ["animal friendship", "speak with animals"],
				selection : ["animal friendship", "speak with animals"],
				firstCol : 'oncesr',
				times : 2
			},
		}
	},
	calcChanges : {
		spellAdd : [
			function (spellKey, spellObj, spName) {
				switch (spellKey) {
					case "animal friendship" :
						spellObj.description = spellObj.description.replace("beasts", "beasts/monstrosities");
						return true;
					case "speak with animals" :
						spellObj.description = "Communicate verbally with monstrosities Int<4 or beasts for duration; interactions limited by their Int";
						return true;
				}
			},
			"When I cast Animal Friendship or Speak with Animals, I can target a monstrosity with an Intelligence of 3 or lower instead of a beast."
		],
		spellList : [
			function(spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["animal friendship", "speak with animals", "beast sense", "calm emotions", "beacon of hope", "conjure animals", "aura of life", "dominate beast", "awaken"]);
			},
			"My race adds extra spells to the spell list(s) of my spellcasting class(es): Animal Friendship, Speak with Animals, Beast Sense, Calm Emotions, Beacon of Hope, Conjure Animals, Aura of Life, Dominate Beast, and Awaken."
		]
	}
};
RaceList["dragonmark healing halfling"] = {
	regExpSearch : /^((?=.*mark)(?=.*healing)|(?=.*house)(?=.*jorasco)).*$/i,
	name : "Halfling (dragonmark)",
	sortname : "Dragonmark, Healing (Halfling)",
	source : [["E:RLW", 43]],
	plural : "Halflings (dragonmark)",
	size : 4,
	speed : {
		walk : { spd : 25, enc : 15 }
	},
	languageProfs : ["Common", "Halfling"],
	savetxt : { adv_vs : ["frightened"] },
	age : " reach adulthood at age 20 and live around 150 years",
	height : " average about 3 feet tall (2'7\" + 2d4\")",
	weight : " weigh around 40 lb (35 + 2d4 lb)",
	heightMetric : " average about 90 cm tall (80 + 5d4)",
	weightMetric : " weigh around 18 kg (16 + 5d4 / 10 kg)",
	scores : [0, 2, 0, 0, 1, 0],
	trait : "Halfling, Dragonmark of Healing (+2 Dexterity, +1 Wisdom)\nLucky: When I roll a 1 on an attack, check, or save, I can reroll it but must use the result." + (typePF ? " " : "\n") + "Halfling Nimbleness: I can move through the space of Medium and larger creatures.\nMedical Intuition: I can add +1d4 to my Wisdom (Medicine) and herbalism kit checks.\nHealing Touch: I can cast Cure Wounds each once per long rest. At 3rd level, I can also cast Lesser Restoration once per long rest. Wisdom is my spellcasting ability for these.\nSpells of the Mark: I add several spells to " + (typePF ? "my class' spell list." : "the spell list of my spellcasting class(es)."),
	spellcastingAbility : 5,
	features : {
		"healing touch" : {
			name : "Healing Touch (level 1)",
			limfeaname : "Cure Wounds",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Healing Touch (level 1)",
				spells : ["cure wounds"],
				selection : ["cure wounds"],
				firstCol : "oncelr"
			}
		},
		"lesser restoration" : {
			name : "Healing Touch (level 3)",
			limfeaname : "Lesser Restoration",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Healing Touch (level 3)",
				spells : ["lesser restoration"],
				selection : ["lesser restoration"],
				firstCol : "oncelr"
			}
		}
	},
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["cure wounds", "healing word", "lesser restoration", "prayer of healing", "aura of vitality", "mass healing word", "aura of purity", "aura of life", "greater restoration"]);
			},
			"My race adds extra spells to the spell list(s) of my spellcasting class(es): Cure Wounds, Healing Word, Lesser Restoration, Prayer of Healing, Aura of Vitality, Mass Healing Word, Aura of Purity, Aura of Life, and Greater Restoration."
		]
	}
};
RaceList["dragonmark hospitality halfling"] = {
	regExpSearch : /^((?=.*mark)(?=.*hospitality)|(?=.*house)(?=.*ghallanda)).*$/i,
	name : "Halfling (dragonmark)",
	sortname : "Dragonmark, Hospitality (Halfling)",
	source : [["E:RLW", 44]],
	plural : "Halflings (dragonmark)",
	size : 4,
	speed : {
		walk : { spd : 25, enc : 15 }
	},
	languageProfs : ["Common", "Halfling"],
	savetxt : { adv_vs : ["frightened"] },
	age : " reach adulthood at age 20 and live around 150 years",
	height : " average about 3 feet tall (2'7\" + 2d4\")",
	weight : " weigh around 40 lb (35 + 2d4 lb)",
	heightMetric : " average about 90 cm tall (80 + 5d4)",
	weightMetric : " weigh around 18 kg (16 + 5d4 / 10 kg)",
	scores : [0, 2, 0, 0, 0, 1],
	trait : "Halfling, Dragonmark of Hospitality (+2 Dexterity, +1 Charisma)\nLucky: When I roll a 1 on an attack, check, or save, I can reroll it but must use the result." + (typePF ? " " : "\n") + "Halfling Nimbleness: I can move through the space of Medium and larger creatures.\nEver Hospitable: I can add +1d4 to my Charisma (Persuasion), brewer's supplies, and cook's utensils checks." + (typePF ? "\n" : " ") + "Innkeeper's Magic: I know the Prestidigitation cantrip and I can cast Purify Food and Drink and Unseen Servant each once per long rest. Charisma as my spellcasting ability for these. Spells of the Mark: I add several spells to my class' spell list.",
	spellcastingAbility : 6,
	features : {
		"innkeeper's magic" : {
			name : "Innkeeper's Magic",
			limfeaname : "Purify Food and Drink",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : [{
				name : "Innkeeper's Magic",
				spells : ["prestidigitation"],
				selection : ["prestidigitation"],
				firstCol : 'atwill'
			}, {
				name : "Innkeeper's Magic",
				spells : ["purify food and drink", "unseen servant"],
				selection : ["purify food and drink", "unseen servant"],
				firstCol : "oncelr",
				times : 2
			}],
			extraLimitedFeatures : [{
				name : "Unseen Servant",
				usages : 1,
				recovery : "long rest"
			}]
		}
	},
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["goodberry", "sleep", "aid", "calm emotions", "create food and water", "leomund's tiny hut", "aura of purity", "mordenkainen's private sanctum", "hallow"]);
			},
			"My race adds extra spells to the spell list(s) of my spellcasting class(es): Goodberry, Sleep, Aid, Calm Emotions, Create Food and Water, Leomund's Tiny Hut, Aura of Purity, Mordenkainen's Private Sanctum, and Hallow."
		]
	}
};
RaceList["dragonmark making human"] = {
	regExpSearch : /^((?=.*mark)(?=.*making)|(?=.*house)(?=.*cannith)).*$/i,
	name : "Human (dragonmark)",
	sortname : "Dragonmark, Making (Human)",
	source : [["E:RLW", 45]],
	plural : "Humans (dragonmark)",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	toolProfs : [["Artisan's tools", 1]],
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	scorestxt : "+2 Intelligence and +1 to one other ability score of my choice",
	scores : [0, 0, 0, 2, 0, 0],
	trait : "Human, Dragonmark of Making (+2 Intelligence, +1 to one other ability score of my choice)\n   Artisan's Intuition: I can add +1d4 to Arcana checks and checks with artisan's tools.\n   Spellsmith: I know the Mending cantrip. I can cast Magic Weapon once per long rest and when I do so, it doesn't require concentration and lasts for 1 hour. Intelligence is my spellcasting ability for these.\n   Spells of the Mark: I add several spells to the spell list of my spellcasting class(es)." + (typePF ? "" : "\n   Maker's Gift: I gain proficiency with one type of artisan's tools of my choice."),
	spellcastingAbility : 4,
	features : {
		"spellsmith" : {
			name : "Spellsmith",
			limfeaname : "Magic Weapon",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : [{
				name : "Spellsmith",
				spells : ["mending"],
				selection : ["mending"],
				firstCol : "atwill"
			}, {
				name : "Spellsmith",
				spells : ["magic weapon"],
				selection : ["magic weapon"],
				firstCol : "oncelr"
			}],
			spellChanges : {
				"magic weapon" : {
					duration : "1 h",
					description : "1 nonmagical weapon becomes magical with an +1 bonus to attack and damage",
					changes : "When using my Spellsmith racial trait, this spell doesn't require concentration and lasts for 1 hour."
				}
			}
		}
	},
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["identify", "tenser's floating disk", "continual flame", "magic weapon", "conjure barrage", "elemental weapon", "fabricate", "stone shape", "creation"]);
			},
			"My race adds extra spells to the spell list(s) of my spellcasting class(es): Identify, Tenser's Floating Disk, Continual Flame, Magic Weapon, Conjure Barrage, Elemental Weapon, Fabricate, Stone Shape, and Creation."
		]
	}
};
RaceList["dragonmark passage human"] = {
	regExpSearch : /^((?=.*mark)(?=.*passage)|(?=.*house)(?=.*orien)).*$/i,
	name : "Human (dragonmark)",
	sortname : "Dragonmark, Passage (Human)",
	source : [["E:RLW", 46]],
	plural : "Humans (dragonmark)",
	size : 3,
	speed : {
		walk : { spd : 35, enc : 25 }
	},
	languageProfs : ["Common", 1],
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	scorestxt : "+2 Dexterity and +1 to one other ability score of my choice",
	scores : [0, 2, 0, 0, 0, 0],
	trait : "Human, Dragonmark of Passage (+2 Dexterity, +1 to one other ability score of my choice)\n   Intuitive Motion: I can add +1d4 to my Dexterity (Acrobatics) checks and any ability checks involving operating or maintaining a land vehicle.\n   Magical Passage: I can cast Misty Step once per long rest, using Dexterity as my spellcasting ability.\n   Spells of the Mark: I add several spells to the spell list of my spellcasting class(es).\n   Courier's Speed: My base walking speed is 35 ft.",
	spellcastingAbility : 2,
	features : {
		"magical passage" : {
			name : "Magical Passage",
			limfeaname : "Misty Step",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Magical Passage",
				spells : ["misty step"],
				selection : ["misty step"],
				firstCol : "oncelr"
			}
		}
	},
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["expeditious retreat", "jump", "misty step", "pass without trace", "blink", "phantom steed", "dimension door", "freedom of movement", "teleportation circle"]);
			},
			"My race adds extra spells to the spell list(s) of my spellcasting class(es): Expeditious Retreat, Jump, Misty Step, Pass Without Trace, Blink, Phantom Steed, Dimension Door, Freedom of Movement, and Teleportation Circle."
		]
	}
};
RaceList["dragonmark scribing gnome"] = {
	regExpSearch : /^((?=.*mark)(?=.*scribing)|(?=.*house)(?=.*sivis)).*$/i,
	name : "Gnome (dragonmark)",
	sortname : "Dragonmark, Scribing (Gnome)",
	source : [["E:RLW", 47]],
	plural : "Gnomes (dragonmark)",
	size : 4,
	speed : {
		walk : { spd : 25, enc : 15 }
	},
	languageProfs : ["Common", "Gnomish"],
	vision : [["Darkvision", 60]],
	savetxt : { text : ["Adv. on Int/Wis/Cha saves vs. magic"] },
	age : " start adult life around age 40 and can live 350 to almost 500 years",
	height : " are 3 to 4 feet tall (2'11\" + 2d4\")",
	weight : " weigh around 40 lb (35 + 2d4 lb)",
	heightMetric : " are 90 to 120 cm tall (2'11\" + 5d4)",
	weightMetric : " weigh around 18 kg (16 + 5d4 / 10 kg)",
	scores : [0, 0, 0, 2, 0, 1],
	trait : "Gnome, Dragonmark of Scribing (+2 Intelligence, +1 Charisma)\n   Gifted Scribe: I can add +1d4 to my Intelligence (History) checks and ability checks with calligrapher's supplies.\n   Scribe's Insight: I know the Message cantrip. I can cast Comprehend Languages once per long rest. At 3rd level, I can also cast Magic Mouth once per long rest. Intelligence is my spellcasting ability for these spells.\n   Spells of the Mark: I add several spells to the spell list of my spellcasting class(es).",
	spellcastingAbility : 4,
	features : {
		"scribe's insight" : {
			name : "Scribe's Insight (level 1)",
			limfeaname : "Comprehend Languages",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : [{
				name : "Scribe's Insight (level 1)",
				spells : ["message"],
				selection : ["message"],
				firstCol : "atwill"
			}, {
				name : "Scribe's Insight (level 1)",
				spells : ["comprehend languages"],
				selection : ["comprehend languages"],
				firstCol : "oncelr"
			}]
		},
		"magic mouth" : {
			name : "Scribe's Insight (level 3)",
			limfeaname : "Magic Mouth",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Scribe's Insight (level 3)",
				spells : ["magic mouth"],
				selection : ["magic mouth"],
				firstCol : "oncelr"
			}
		}
	},
	spellcastingBonus : {
		name : "Whispering Wind",
		spells : ["message"],
		selection : ["message"],
		firstCol : 'atwill'
	},
	features : {
		"comprehend languages" : {
			name : "Scribe's Insight",
			limfeaname : "Comprehend Languages",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Scribe's Insight",
				spells : ["comprehend languages"],
				selection : ["comprehend languages"],
				firstCol : 'oncelr'
			}
		}
	},
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["comprehend languages", "illusory script", "animal messenger", "silence", "sending", "tongues", "arcane eye", "confusion", "dream"]);
			},
			"My race adds extra spells to the spell list(s) of my spellcasting class(es): Comprehend Languages, Illusory Script, Animal Messenger, Silence, Sending, Tongues, Arcane Eye, Confusion, and Dream."
		]
	}
};
RaceList["dragonmark sentinel human"] = {
	regExpSearch : /^((?=.*mark)(?=.*sentinel)|(?=.*house)(?=.*deneith)).*$/i,
	name : "Human (dragonmark)",
	sortname : "Dragonmark, Sentinel (Human)",
	source : [["E:RLW", 48]],
	plural : "Humans (dragonmark)",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	scores : [0, 0, 2, 0, 1, 0],
	trait : "Human, Dragonmark of Sentinel (+2 Constitution, +1 Wisdom)\n  Sentinel's Intuition: I can add +1d4 my Wisdom (Insight) and Wisdom (Perception) checks.\n  Guardian's Shield: I can cast Shield once per long rest, using Wisdom as my spellcasting ability.\n  Vigilant Guardian: Once per long rest as a reaction when a creature I can see within 5 ft is hit by an attack roll, I can swap places with it and I'm hit by the attack instead.\n  Spells of the Mark: I add several spells to the spell list of my spellcasting class(es).",
	spellcastingAbility : 5,
	features : {
		"vigilant guardian" : {
			name : "Vigilant Guardian",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			action : [['reaction', '']]
		},
		"guardian's shield" : {
			name : "Guardian's Shield",
			limfeaname : "Shield",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Guardian's Shield",
				spells : ["shield"],
				selection : ["shield"],
				firstCol : 'oncelr'
			}
		}
	},
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["compelled duel", "shield of faith", "warding bond", "zone of truth", "counterspell", "protection from energy", "death ward", "guardian of faith", "bigby's hand"]);
			},
			"My race adds extra spells to the spell list(s) of my spellcasting class(es): Compelled Duel, Shield of Faith, Warding Bond, Zone of Truth, Counterspell, Protection from Energy, Death Ward, Guardian of Faith, and Bigby's Hand."
		]
	}
};
RaceList["dragonmark shadow elf"] = {
	regExpSearch : /^((?=.*mark)(?=.*shadow)|(?=.*house)(?=.*(phiarlan|thuranni))).*$/i,
	name : "Elf (dragonmark)",
	sortname : "Dragonmark, Shadow (Elf)",
	source : [["E:RLW", 49]],
	plural : "Elves (dragonmark)",
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
	height : " range from under 5 to over 6 feet tall (4'6\" + 2d10\")",
	weight : " weigh around 115 lb (90 + 2d10 \xD7 1d4 lb)",
	heightMetric : " range from under 1,5 to over 1,8 metres tall (140 + 5d10 cm)",
	weightMetric : " weigh around 55 kg (40 + 5d10 \xD7 2d4 / 10 kg)",
	scores : [0, 2, 0, 0, 0, 1],
	trait : "Elf, Dragonmark of Shadow (+2 Dexterity, +1 Charisma)\n   Trance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. This gives the same benefit as a human gets from 8 hours of sleep (long rest takes only 4 hours).\n   Cunning Intuition: I can add +1d4 to my Cha" + (typePF ? "risma" : "") + " (Performance) and Dex" + (typePF ? "terity" : "") + " (Stealth) checks.\n   Shape Shadows: I know the Minor Illusion cantrip. At 3rd level, I can cast Invisibility once per long rest. Charisma is my spellcasting ability for these.\n   Spells of the Mark: I add several spells to " + (typePF ? "my class' spell list." : "the spell list of my spellcasting class(es)."),
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Shape Shadows (level 1)",
		spells : ["minor illusion"],
		selection : ["minor illusion"],
		firstCol : 'atwill'
	},
	features : {
		"shape shadows" : {
			name : "Shape Shadows (level 3)",
			limfeaname : "Invisibility",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Shape Shadows (level 3)",
				spells : ["invisibility"],
				selection : ["invisibility"],
				firstCol : "oncelr"
			}
		}
	},
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["disguise self", "silent image", "darkness", "pass without trace", "clairvoyance", "major image", "greater invisibility", "hallucinatory terrain", "mislead"]);
			},
			"My race adds extra spells to the spell list(s) of my spellcasting class(es): Disguise Self, Silent Image, Darkness, Pass Without Trace, Clairvoyance, Major Image, Greater Invisibility, Hallucinatory Terrain, and Mislead."
		]
	}
};
RaceList["dragonmark storm half-elf"] = {
	regExpSearch : /^((?=.*mark)(?=.*storm)|(?=.*house)(?=.*lyrandar)).*$/i,
	name : "Half-elf (dragonmark)",
	sortname : "Dragonmark, Storm (Half-Elf)",
	source : [["E:RLW", 50]],
	plural : "Half-elves (dragonmark)",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Elvish"],
	vision : [["Darkvision", 60]],
	dmgres : ["Lightning"],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
	age : " reach adulthood around age 20 and often live over 180 years",
	height : " range from 5 to 6 feet tall (4'9\" + 2d8\")",
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from 1,5 to 1,8 metres tall (145 + 5d8 cm)",
	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)",
	scores : [0, 1, 0, 0, 0, 2],
	trait : "Half-Elf, Dragonmark of Storm (+1 Dexterity, +2 Charisma)\n   Windwright's Intuition: I can add +1d4 to my Dexterity (Acrobatics) checks and any ability checks involving operating or maintaining a water or air vehicle.\n   Headwinds: I know the Gust cantrip. Once I reach 3rd level, I can cast Gust of Wind once per long rest. Charisma is my spellcasting ability for these spells.\n   Spells of the Mark: I add several spells to the spell list of my spellcasting class(es).",
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Headwinds (level 1)",
		spells : ["gust"],
		selection : ["gust"],
		firstCol : 'atwill'
	},
	features : {
		"gust of wind" : {
			name : "Headwinds (level 3)",
			limfeaname : "Gust of Wind",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Headwinds (level 3)",
				spells : ["gust of wind"],
				selection : ["gust of wind"],
				firstCol : 'oncelr'
			}
		}
	},
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["feather fall", "fog cloud", "gust of wind", "levitate", "sleet storm", "wind wall", "conjure minor elementals", "control water", "conjure elemental"]);
			},
			"My race adds extra spells to the spell list(s) of my spellcasting class(es): Feather Fall, Fog Cloud, Gust of Wind, Levitate, Sleet Storm, Wind Wall, Conjure Minor Elementals, Control Water, and Conjure Elemental."
		]
	}
};
RaceList["dragonmark warding dwarf"] = {
	regExpSearch : /^((?=.*mark)(?=.*warding)|(?=.*house)(?=.*kundarak)).*$/i,
	name : "Dwarf (dragonmark)",
	sortname : "Dragonmark, Warding (Dwarf)",
	source : [["E:RLW", 51]],
	plural : "Dwarves (dragonmark)",
	size : 3,
	speed : {
		walk : { spd : 25, enc : 25 }
	},
	languageProfs : ["Common", "Dwarvish"],
	vision : [["Darkvision", 60]],
	savetxt : { adv_vs : ["poison"] },
	dmgres : ["Poison"],
	weaponProfs : [false, false, ["battleaxe", "handaxe", "warhammer", "light hammer"]],
	toolProfs : [["Smith, brewer, or mason tools", 1]],
	age : " are considered young until they are 50 and live about 350 years",
	height : " stand between 4 and 5 feet tall (4' + 2d4\")",
	weight : " weigh around 150 lb (130 + 2d4 \xD7 2d6 lb)",
	heightMetric : " stand between 1,2 and 1,5 metres tall (120 + 5d4 cm)",
	weightMetric : " weigh around 75 kg (60 + 5d4 \xD7 4d6 / 10 kg)",
	scores : [0, 0, 2, 1, 0, 0],
	trait : "Dwarf, Dragonmark of Warding (+2 Constitution, +1 Intelligence)\n" + (typePF ? "   " : "- ") + "Warder's Intuition: I can add +1d4 to my Intelligence (Investigation) checks and ability checks with thieves' tools." + (typePF ? "\n   Stonecunning: When I make an Int (History) check related to origin of stonework, I am considered having expertise in the History skill.\n   " : " - Stonecunning: Expertise in History when concerning stonework.\n- ") + "Wards and Seals: I can cast Alarm and Mage Armor each once per long rest. At 3rd level, I can also cast Arcane Lock once per long rest. Intelligence is my spellcasting ability for these and none of them require material components.\n" + (typePF ? "   " : "- ") + "Spells of the Mark: I add several spells to my class' spell list(s).",
	spellcastingAbility : 4,
	features : {
		"wards and seals" : {
			name : "Wards and Seals (level 1)",
			limfeaname : "Alarm",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Wards and Seals (level 1)",
				spells : ["alarm", "mage armor"],
				selection : ["alarm", "mage armor"],
				firstCol : "oncelr",
				times : 2
			},
			extraLimitedFeatures : [{
				name : "Mage Armor",
				usages : 1,
				recovery : "long rest"
			}],
			spellChanges : {
				"alarm" : {
					components : "V,S",
					compMaterial : "",
					changes : "I can cast this spell once per long rest without requiring material components."
				},
				"mage armor" : {
					components : "V,S",
					compMaterial : "",
					changes : "I can cast this spell once per long rest without requiring material components."
				}
			}
		},
		"arcane lock" : {
			name : "Wards and Seals (level 3)",
			limfeaname : "Arcane Lock",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Wards and Seals (level 3)",
				spells : ["arcane lock"],
				selection : ["arcane lock"],
				firstCol : 'oncelr'
			}
		}
	},
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["alarm", "armor of agathys", "arcane lock", "knock", "glyph of warding", "magic circle", "leomund's secret chest", "mordenkainen's faithful hound", "antilife shell"]);
			},
			"My race adds extra spells to the spell list(s) of my spellcasting class(es): Alarm, Armor of Agathys, Arcane Lock, Knock, Glyph of Warding, Magic Circle, Leomund's Secret Chest, Mordenkainen's Faithful Hound, and Antilife Shell."
		]
	}
};

// [dupl_start] Gust cantrip reprint
if (!SpellsList["gust"]) {
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
} // dupl_end

// Aberrant Dragonmark feat
FeatsList["aberrant dragonmark"] = {
	name : "Aberrant Dragonmark",
	source : [["E:RLW", 52]],
	prerequisite : "No other dragonmark",
	prereqeval : function(v) { return !(/dragonmark/i).test(CurrentRace.known); },
	descriptionFull : "You have manifested an aberrant dragonmark. Determine its appearance and the flaw associated with it. You gain the following benefits:\n \u2022 Increase your Constitution score by 1, to a maximum of 20.\n \u2022 You learn a cantrip of your choice from the sorcerer spell list. In addition, choose a 1st-level spell from the sorcerer spell list. You learn that spell and can cast it through your mark. Once you cast it, you must finish a short or long rest before you can cast it again through the mark. Constitution is your spellcasting ability for these spells.\n \u2022 When you cast the 1st-level spell through your mark, you can expend one of your Hit Dice and roll it. If you roll an even number, you gain a number of temporary hit points equal to the number rolled. If you roll an odd number, one random creature within 30 feet of you (not including you) takes force damage equal to the number rolled. If no other creatures are in range, you take the damage.\n\nYou also develop a random flaw from the Aberrant Dragonmark Flaws table.\n\n" + toUni("d8\tFlaw") + "\n  1\tYour mark is a source of constant physical pain.\n  2\tYour mark whispers to you. Its meaning can be unclear.\n  3\tWhen you're stressed, the mark hisses audibly.\n  4\tThe skin around the mark is burned, scaly, or withered.\n  5\tAnimals are uneasy around you.\n  6\tYou have a mood swing any time you use your mark.\n  7\tYour looks change slightly whenever you use the mark.\n  8\tYou have horrific nightmares after you use your mark.",
	description : "I learn a sorcerer cantrip, and a 1st-level spell that I can cast once per short rest. They use Con as spellcasting ability. I can expend and roll an HD when I cast the level 1 spell. If even, I gain it in temp HP. If odd, a random target in 30 ft takes it in force damage. [+1 Con]",
	scores : [0, 0, 1, 0, 0, 0],
	spellcastingAbility : 3,
	spellcastingBonus : [{
		name : "Sorcerer cantrip",
		'class' : 'sorcerer',
		level : [0, 0],
		firstCol : 'atwill'
	}, {
		name : "Sorcerer 1st-level spell",
		'class' : 'sorcerer',
		level : [1, 1],
		firstCol : 'oncesr'
	}]
};

// House Agent backgrounds
BackgroundList["house agent"] = { // the default is House Cannith
	regExpSearch : /^(?=.*agent)(?=.*house)(?=.*(noble|cannith)).*$/i,
	name : "Agent of House Cannith",
	source : [["E:RLW", 53], ["WGtE", 94]],
	skills : ["Investigation", "Persuasion"],
	gold : 20,
	equipleft : [["Signet ring of house Cannith", "", ""]],
	equipright : [
		["Fine clothes", "", 6],
		["ID papers", "", ""],
		["Purse (with coins)", "", 1]
	],
	feature : "House Connections",
	trait : [
		"I never let emotion complicate work.",
		"I'm always looking to improve efficiency.",
		"I share trivia about my house's business (medicine, ships, warforged).",
		"I hold myself and anyone I work with to extremely high standards.",
		"I never forget an insult made against myself or my house.",
		"I'm very excited and enthusiastic about everything my house does.",
		"I'm representing my house and take great pride in my personal appearance.",
		"I'm critical of monarchies and opposed to any restrictions on the houses."
	],
	ideal : [
		["Common Good",
			"Common Good: My house serves a vital function, and its prosperity will help everyone. (Good)"
		],
		["Tradition",
			"Tradition: I uphold traditions of my house and bring honor to my family. (Lawful)"
		],
		["Innovation",
			"Innovation: Abandon old traditions and find better ways to do things. (Chaotic)"
		],
		["Power",
			"Power: I want to ensure the prosperity of my house and wield its power myself. (Evil)"
		],
		["Discovery",
			"Discovery: I want to learn all I can, both for my house and for my own curiosity. (Any)"
		],
		["Comfort",
			"Comfort: I want to ensure that me and friends of mine enjoy the best things in life. (Any)"
		]
	],
	bond : [
		"My house is my family, and I would do anything for my family.",
		"I love someone from another house, but the relationship is forbidden.",
		"Someone I love was killed by a rival faction within my house, and I will have revenge.",
		"I don't care about the house as a whole, but I would do anything for my old mentor.",
		"I believe my house needs to evolve to survive, and I need to lead that change.",
		"I'm determined to impress the leaders of my house, and to become a leader myself."
	],
	flaw : [
		"I'm overly concerned with following established procedures and protocols.",
		"I'm obsessed with conspiracy theories and worried about secret societies and hidden demons.",
		"I believe that my house and bloodline makes me better than everyone else.",
		"I'm concealing a secret that could get me driven from my house.",
		"I have strong religious beliefs that aren't widespread in my house.",
		"I'm working for a hidden faction in my house that gives me secret assignments."
	],
	extra : [
		"Select an House Agent Role",
		"Acquisition",
		"Investigation",
		"Research \u0026 Development",
		"Security",
		"Intimidation",
		"Exploration",
		"Negotiation",
		"Covert Operations"
	],
	toolProfs : ["Alchemist's supplies", "Tinker's tools"]
};
AddBackgroundVariant("house agent", "deneith", {
	regExpSearch : /^(?=.*agent)(?=.*house)(?=.*deneith).*$/i,
	name : "Agent of House Deneith",
	source : [["E:RLW", 53], ["WGtE", 94]],
	equipleft : [["Signet ring of house Deneith", "", ""]],
	toolProfs : [["Gaming set", 1], "Vehicles (land)"]
});
AddBackgroundVariant("house agent", "ghallanda", {
	regExpSearch : /^(?=.*agent)(?=.*house)(?=.*ghallanda).*$/i,
	name : "Agent of House Ghallanda",
	source : [["E:RLW", 53], ["WGtE", 94]],
	equipleft : [["Signet ring of house Ghallanda", "", ""]],
	toolProfs : ["Brewer's supplies", "Cook's utensils"]
});
AddBackgroundVariant("house agent", "jorasco", {
	regExpSearch : /^(?=.*agent)(?=.*house)(?=.*jorasco).*$/i,
	name : "Agent of House Jorasco",
	source : [["E:RLW", 53], ["WGtE", 94]],
	equipleft : [["Signet ring of house Jorasco", "", ""]],
	toolProfs : ["Alchemist's supplies", "Herbalism kit"]
});
AddBackgroundVariant("house agent", "kundarak", {
	regExpSearch : /^(?=.*agent)(?=.*house)(?=.*kundarak).*$/i,
	name : "Agent of House Kundarak",
	source : [["E:RLW", 53], ["WGtE", 94]],
	equipleft : [["Signet ring of house Kundarak", "", ""]],
	toolProfs : [["Thieves' tools", "Dex"], "Tinker's tools"]
});
AddBackgroundVariant("house agent", "lyrandar", {
	regExpSearch : /^(?=.*agent)(?=.*house)(?=.*lyrandar).*$/i,
	name : "Agent of House Lyrandar",
	source : [["E:RLW", 53], ["WGtE", 94]],
	equipleft : [["Signet ring of house Lyrandar", "", ""]],
	toolProfs : ["Navigator's tools", "Vehicles (sea/air)"]
});
AddBackgroundVariant("house agent", "medani", {
	regExpSearch : /^(?=.*agent)(?=.*house)(?=.*medani).*$/i,
	name : "Agent of House Medani",
	source : [["E:RLW", 53], ["WGtE", 94]],
	equipleft : [["Signet ring of house Medani", "", ""]],
	toolProfs : ["Disguise kit", ["Thieves' tools", "Dex"]]
});
AddBackgroundVariant("house agent", "orien", {
	regExpSearch : /^(?=.*agent)(?=.*house)(?=.*orien).*$/i,
	name : "Agent of House Orien",
	source : [["E:RLW", 53], ["WGtE", 94]],
	equipleft : [["Signet ring of house Orien", "", ""]],
	toolProfs : [["Gaming set", 1], "Vehicles (land)"]
});
AddBackgroundVariant("house agent", "phiarlan", {
	regExpSearch : /^(?=.*agent)(?=.*house)(?=.*phiarlan).*$/i,
	name : "Agent of House Phiarlan",
	source : [["E:RLW", 53], ["WGtE", 94]],
	equipleft : [["Signet ring of house Phiarlan", "", ""]],
	toolProfs : ["Disguise kit", ["Musical instrument", 1]]
});
AddBackgroundVariant("house agent", "sivis", {
	regExpSearch : /^(?=.*agent)(?=.*house)(?=.*sivis).*$/i,
	name : "Agent of House Sivis",
	source : [["E:RLW", 53], ["WGtE", 94]],
	equipleft : [["Signet ring of house Sivis", "", ""]],
	toolProfs : ["Calligrapher's tools", "Forgery kit"]
});
AddBackgroundVariant("house agent", "tharashk", {
	regExpSearch : /^(?=.*agent)(?=.*house)(?=.*tharashk).*$/i,
	name : "Agent of House Tharashk",
	source : [["E:RLW", 53], ["WGtE", 94]],
	equipleft : [["Signet ring of house Tharashk", "", ""]],
	toolProfs : [["Gaming set", 1], ["Thieves' tools", "Dex"]]
});
AddBackgroundVariant("house agent", "thuranni", {
	regExpSearch : /^(?=.*agent)(?=.*house)(?=.*thuranni).*$/i,
	name : "Agent of House Thuranni",
	source : [["E:RLW", 53], ["WGtE", 94]],
	equipleft : [["Signet ring of house Thuranni", "", ""]],
	toolProfs : [["Musical instrument", 1], "Poisoner's kit"]
});
AddBackgroundVariant("house agent", "vadalis", {
	regExpSearch : /^(?=.*agent)(?=.*house)(?=.*vadalis).*$/i,
	name : "Agent of House Vadalis",
	source : [["E:RLW", 53], ["WGtE", 94]],
	equipleft : [["Signet ring of house Vadalis", "", ""]],
	toolProfs : ["Herbalism kit", "Vehicles (land)"]
});
BackgroundFeatureList["house connections"] = {
	description : "As an agent of my house, I can always get food and lodging for my friends at a house enclave. My house usually provides me with necessary supplies and transportation if it assigns me a mission. I have many old friends, mentors, and rivals in my house that I might run into and be willing to help me depending on my current standing in the house.",
	source : [["E:RLW", 53], ["WGtE", 95]]
};

// Artificer class
ClassList.artificer = {
	regExpSearch : /^(?=.*artificer)(?!.*wizard).*$/i,
	name : "Artificer",
	source : [["E:RLW", 54], ["T", 9]],
	primaryAbility : "Intelligence",
	abilitySave : 4,
	prereqs : "Intelligence 13",
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	die : 8,
	saves : ["Con", "Int"],
	skillstxt : {
		primary : "Choose two from Arcana, History, Investigation, Medicine, Nature, Perception, and Sleight of Hand"
	},
	toolProfs : {
		primary : [["Thieves' tools", "Dex"], "Tinker's tools", ["Artisan's tools", 1]],
		secondary : [["Thieves' tools", "Dex"], "Tinker's tools"]
	},
	armorProfs : {
		primary : [true, true, false, true],
		secondary : [true, true, false, true]
	},
	weaponProfs : {
		primary : [true, false, ["Firearms"]]
	},
	equipment : "Artificer starting equipment:" +
		"\n \u2022 Any two simple weapons;" +
		"\n \u2022 A light crossbow and 20 bolts;" +
		"\n \u2022 Studded leather armor -or- scale mail;" +
		"\n \u2022 Thieves' tools and a dungeoneer's pack;" +
		"\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses : ["Artificer Specialist", []],
	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	spellcastingFactor : 2,
	spellcastingFactorRoundupMulti : true,
	spellcastingTable : [[0, 0, 0, 0, 0, 0, 0, 0, 0]].concat(levels.map(function (n) {
		return defaultSpellTable[Math.ceil(n / 2)];
	})),
	spellcastingKnown : {
		cantrips : [2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4],
		spells : "list",
		prepared : true
	},
	features : {
		"magical tinkering" : {
			name : "Magical Tinkering",
			source : [["E:RLW", 55], ["T", 11]],
			minlevel : 1,
			description : desc([
				"As an action, I use thieves/artisan's tools to give 1 property to a nonmagical tiny object:",
				" \u2022 Emit light (5-ft radius bright light, equal dim), an odor, or a nonverbal sound",
				" \u2022 Static visual effect on one surface, or emit a 6-second recorded message when tapped",
				"If I instill a property in more objects than I can have active, the oldest loses its property"
			]),
			additional : "Intelligence modifier of active objects",
			action : [["action", " (add/remove)"]],
			"infuse item" : {
				name : "Infuse Item",
				extraname : "Artificer 2",
				source : [["E:RLW", 57]],
				description : desc([
					"When I finish a long rest, I can turn nonmagical objects into magic items using my infusions",
					"I can attune to it immediately; If I infuse too many items, the oldest loses its magic",
					"The infusion lasts until my death + my Int mod in days, but ends if I unlearn the infusion",
					"Each infusion can only be used in one item at a time and only in appropriate items",
					"Whenever I gain an artificer level, I can replace an infusion I know with another",
					"I can use an infused item as a spellcasting focus"
				]),
				additional : levels.map(function (n) {
					return n < 2 ? "" : (n < 6 ? 4 : n < 10 ? 6 : n < 14 ? 8 : n < 18 ? 10 : 12) + " infusions known; max " + (n < 6 ? 2 : n < 10 ? 3 : n < 14 ? 4 : n < 18 ? 5 : 6) + " infused items";
				})
			},
			autoSelectExtrachoices : [{
				extrachoice : "infuse item",
				minlevel : 2
			}]
		},
		"spellcasting" : {
			name : "Spellcasting",
			source : [["E:RLW", 55], ["T", 11]],
			minlevel : 1,
			description : desc([
				"I can cast prepared artificer cantrips/spells, using Intelligence as my spellcasting ability",
				"To cast, I must use thieves' or artisan's tools I'm proficient with as a spellcasting focus",
				"I can cast my prepared artificer spells as rituals if they have the ritual tag",
				"Whenever I gain an artificer level, I can swap one artificer cantrip I know for another"
			]),
			additional : levels.map(function (n, idx) {
				return [2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4][idx] + " cantrips known";
			}),
			calcChanges : {
				spellAdd : [
					function (spellKey, spellObj, spName) {
						if (!spellObj.psionic && spName == "artificer" && spellObj.compMaterial === SpellsList[spellKey].compMaterial) {
							var extraFocus = classes.known.artificer.subclass.indexOf("artillerist") !== -1 && classes.known.artificer.level > 4 ? "my arcane firearm, " : classes.known.artificer.subclass.indexOf("armorer") !== -1 && classes.known.artificer.level > 2 ? "my arcane armor, " : "";
							spellObj.compMaterial = (spellObj.compMaterial ? spellObj.compMaterial + ".\n\nAlso a" : "A") + "lways requires my artificer spellcasting focus: thieves' tools, any set of artisan's tools I'm proficient with, " + extraFocus + "or an item infused by me.";
							if (GetFeatureChoice("classes", "artificer", "spellcasting", true).indexOf("don't change component column on spell sheet") != -1) {
								// do nothing if set to do so
							} else if (!spellObj.components) {
								spellObj.components = "M\u0192";
							} else if (spellObj.components.indexOf("M") == -1) {
								spellObj.components += ",M\u0192";
							} else if ((/M([^\u0192\u2020]|$)/).test(spellObj.components)) {
								spellObj.components = spellObj.components.replace("M", "M\u0192");
							}
							return true;
						}
						return false;
					},
					"My artificer spells always require me to use a spellcasting focus: thieves' tools, artisan's tools I'm proficient with, or an item infused by me."
				]
			},
			extrachoices : ["Don't change component column on spell sheet"],
			extraname : "Artificer Spellcasting",
			"don't change component column on spell sheet" : {
				name : "[Meta] Don't alter spell sheets",
				source : [["E:RLW", 55], ["T", 11]],
				description : "\n   The automation will not add M\u0192 to each artificer spell on the generated spell sheets"
			}
		},
		"infuse item" : {
			name : "Infuse Item",
			source : [["E:RLW", 57], ["T", 12]],
			minlevel : 2,
			description : '\n   Use the "Choose Feature" button above to add Artificer Infusions to the third page',
			additional : levels.map(function (n) {
				return n < 2 ? "" : (n < 6 ? 4 : n < 10 ? 6 : n < 14 ? 8 : n < 18 ? 10 : 12) + " infusions known; max " + (n < 6 ? 2 : n < 10 ? 3 : n < 14 ? 4 : n < 18 ? 5 : 6) + " infused items";
			}),
			extraname : "Artificer Infusion",
			extrachoices : ["Boots of the Winding Path (prereq: level 6 artificer)", "Enhanced Arcane Focus", "Enhanced Defense (armor)", "Enhanced Defense (shield)", "Enhanced Weapon", "Homunculus Servant", "Radiant Weapon (prereq: level 6 artificer)", "Repeating Shot", "Repulsion Shield (prereq: level 6 artificer)", "Resistant Armor (prereq: level 6 artificer)", "Returning Weapon"],
			extraTimes : levels.map(function (n) {
				return n < 2 ? 0 : n < 6 ? 4 : n < 10 ? 6 : n < 14 ? 8 : n < 18 ? 10 : 12;
			}),
			"boots of the winding path (prereq: level 6 artificer)" : {
				name : "Boots of the Winding Path",
				source : [["E:RLW", 62], ["T", 21]],
				description : desc([
					"The wearer can use a bonus action to teleport up to 15 ft to an unoccupied space it can see",
					"It must be a space that the wearer had occupied some time during the current turn"
				]),
				additional : "pair of boots; requires attunement",
				prereqeval : function(v) { return classes.known.artificer.level >= 6; },
				magicitemsAdd : ["Boots of the Winding Path"]
			},
			"enhanced arcane focus" : {
				name : "Enhanced Arcane Focus",
				source : [["E:RLW", 62], ["T", 21]],
				description : "\n   The holder has a bonus to spell attack rolls and ignores half cover with spell attacks",
				additional : levels.map(function (n) {
					return "rod/staff/wand; attunement; +" + (n < 10 ? 1 : 2);
				}),
				eval : function (lvl, chc) {
					AddMagicItem("Enhanced Arcane Focus +" + (classes.known.artificer.level < 10 ? 1 : 2));
				},
				removeeval : function (lvl, chc) {
					RemoveMagicItem("enhanced arcane focus, +1 or +2");
				}
			},
			"enhanced defense (armor)" : {
				name : "Enhanced Defense",
				source : [["E:RLW", 62], ["T", 21]],
				description : "",
				additional : levels.map(function (n) {
					return "armor/shield; +" + (n < 10 ? 1 : 2) + " magical";
				}),
				prereqeval : function(v) {
					return GetFeatureChoice("classes", "artificer", "infuse item", true).indexOf("enhanced defense (shield)") == -1;
				},
				eval : function (lvl, chc) {
					AddMagicItem("Armor +" + (classes.known.artificer.level < 10 ? 1 : 2));
				},
				removeeval : function (lvl, chc) {
					RemoveMagicItem("armor, +1, +2, or +3");
				}
			},
			"enhanced defense (shield)" : {
				name : "Enhanced Defense",
				source : [["E:RLW", 62], ["T", 21]],
				description : "",
				additional : levels.map(function (n) {
					return "armor/shield; +" + (n < 10 ? 1 : 2) + " magical";
				}),
				prereqeval : function(v) {
					return GetFeatureChoice("classes", "artificer", "infuse item", true).indexOf("enhanced defense (armor)") == -1;
				},
				eval : function (lvl, chc) {
					AddMagicItem("Shield +" + (classes.known.artificer.level < 10 ? 1 : 2));
				},
				removeeval : function (lvl, chc) {
					RemoveMagicItem("shield, +1, +2, or +3");
				}
			},
			"enhanced weapon" : {
				name : "Enhanced Weapon",
				source : [["E:RLW", 62], ["T", 21]],
				description : "",
				additional : levels.map(function (n) {
					return "simple/martial weapon; +" + (n < 10 ? 1 : 2) + " magical";
				}),
				eval : function (lvl, chc) {
					AddMagicItem("Weapon +" + (classes.known.artificer.level < 10 ? 1 : 2));
				},
				removeeval : function (lvl, chc) {
					RemoveMagicItem("weapon, +1, +2, or +3");
				}
			},
			"homunculus servant" : {
				name : "Homunculus Servant",
				source : [["E:RLW", 62], ["T", 21]],
				description : desc([
					"The item I infuse becomes the heart of a homunculus that immediately forms around it",
					"I determine its appearance; It is friendly to me and my allies and obeys my commands",
					'See "Homunculus Servant" on a companion page to see its game statistics'
				]),
				additional : "gem or crystal of 100+ gp",
				action : [["bonus action", " (command)"]],
				creaturesAdd : [["Homunculus Servant"]],
				creatureOptions : [{
					name : "Homunculus Servant",
					source : [["E:RLW", 62], ["T", 22]],
					size : 5,
					type : "Construct",
					alignment : "Neutral",
					ac : 13,
					hp : 3,
					hd : [2, 4],
					hdLinked : ["artificer"],
					speed : "20 ft, fly 30 ft",
					scores : [4, 15, 12, 10, 10, 7],
					saves : ["", 4, "", "", "", ""],
					skills : {
						"perception" : 4,
						"stealth" : 4
					},
					damage_immunities : "poison",
					condition_immunities : "exhaustion, poisoned",
					senses : "Darkvision 60 ft",
					passivePerception : 14,
					languages : "understands the languages of its creator but can't speak",
					challengeRating : "0",
					proficiencyBonus : 2,
					proficiencyBonusLinked : true,
					attacksAction : 1,
					attacks : [{
						name : "Force Strike",
						ability : 4,
						damage : [1, 4, "force"],
						range : "30 ft",
						description : "",
						modifiers : ["", "Prof"],
						abilitytodamage : false,
						useSpellMod : "artificer"
					}],
					features : [{
						name : "Creator",
						description : "The homunculus obeys the commands of its creator and has the same proficiency bonus. It takes its turn immediately after its creator, on the same initiative count. It can move and take reactions on its own, but only takes the Dodge action on its turn unless its creator takes a bonus action to command it to take another action. If its creator is incapacitated, it can take any action, not just Dodge."
					}],
					traits : [{
						name : "Healing",
						description : "The homunculus regains 2d6 hit points whenever the Mending spell is cast on it. Its HP total is equal to 1 + its creator's artificer level + its creator's Intelligence modifier. If it or its creator dies, the homunculus vanishes, leaving its heart in its space."
					}, {
						name : "Evasion",
						description : "If the homunculus is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails. It can't use this trait if it's incapacitated."
					}],
					actions : [{
						name : "Channel Magic",
						description : "As a reaction, the homunculus delivers a spell cast by its creator that has a range of touch. The homunculus must be within 120 ft of its creator to do so."
					}],
					header : "Construct",
					calcChanges : {
						hp : function (totalHD, HDobj, prefix) {
							if (!classes.known.artificer) return;
							var intMod = Number(What('Int Mod'));
							var artLvl = classes.known.artificer.level;
							HDobj.alt.push(1 + intMod + artLvl);
							HDobj.altStr.push(" = 1 as a base\n + " + intMod + " from its creator's Intelligence modifier\n + " + artLvl + " from its creator's artificer level");
						},
						setAltHp : true,
						hpForceRecalc : true
					}
				}]
			},
			"radiant weapon (prereq: level 6 artificer)" : {
				name : "Radiant Weapon",
				source : [["E:RLW", 62], ["T", 22]],
				description : desc([
					"The weapon has a +1 bonus to attack and damage rolls made with it and it sheds light",
					"As a bonus action, its wielder can start/stop the light, 30-ft radius bright + 30 ft dim light",
					"The weapon has 4 charges, regaining 1d4 expended charges daily at dawn",
					"As a reaction when hit by an attack, the wielder can expend 1 charge to blind its attacker",
					"The attacker makes a Con save (my spell save DC) or is blinded until its next turn ends"
				]),
				additional : "simple/martial weapon; requires attunement",
				prereqeval : function(v) { return classes.known.artificer.level >= 6; },
				magicitemsAdd : ["Radiant Weapon"]
			},
			"repeating shot" : {
				name : "Repeating Shot",
				source : [["E:RLW", 62], ["T", 22]],
				description : desc([
					"The weapon requiring ammunition has a +1 bonus to attack and damage rolls made with it",
					"It magically produces one piece of ammunition whenever it is used to make a ranged attack",
					"Thus, it doesn't require ammunition and ignores the loading property if it has it"
				]),
				additional : "weapon with ammo; requires attunement",
				magicitemsAdd : ["Repeating Shot"]
			},
			"repulsion shield (prereq: level 6 artificer)" : {
				name : "Repulsion Shield",
				source : [["E:RLW", 63], ["T", 23]],
				description : desc([
					"The shield gives its wearer an extra +1 bonus to AC; It has 4 charges, regaining 1d4 daily",
					"As a reaction when hit in melee, the wearer can use 1 charge to push the attacker 15 ft"
				]),
				additional : "shield; requires attunement",
				prereqeval : function(v) { return classes.known.artificer.level >= 6; },
				magicitemsAdd : ["Repulsion Shield"]
			},
			"resistant armor (prereq: level 6 artificer)" : {
				name : "Resistant Armor",
				source : [["E:RLW", 63], ["T", 23]],
				description : desc([
					"The armor gives its wearer resistance to one type of damage, chosen at the time of infusion",
					"Choose from: acid,	cold, fire, force, lightning, necrotic, poison, psychic, radiant, or thunder"
				]),
				additional : "suit of armor; requires attunement",
				prereqeval : function(v) { return classes.known.artificer.level >= 6; },
				magicitemsAdd : ["Armor of Resistance"]
			},
			"returning weapon" : {
				name : "Returning Weapon",
				source : [["E:RLW", 63], ["T", 23]],
				description : "After being used for a ranged attack, the weapon returns immediately; +1 magical bonus",
				additional : "weapon with the thrown property",
				magicitemsAdd : ["Returning Weapon"]
			}
		},
		"the right tool for the job" : {
			name : "The Right Tool for the Job",
			source : [["E:RLW", 57], ["T", 13]],
			minlevel : 3,
			description : "\n   In 1 hour (during a rest) I can create a set of artisan's tools that last until I do so again",
			additional : "using thieves' or artisan's tools"
		},
		"subclassfeature3" : {
			name : "Artificer Specialist",
			source : [["E:RLW", 57], ["T", 13]],
			minlevel : 3,
			description : desc([
				'Choose a specialism and put it in the "Class" field on the first page',
				"Choose either alchemist, artillerist, or battle smith"
			])
		},
		"tool expertise" : {
			name : "Tool Expertise",
			source : [["E:RLW", 57], ["T", 13]],
			minlevel : 6,
			description : " [expertise with all tools I'm proficient with]",
			skillstxt : "Expertise with all tools I'm proficient with",
			eval : function () { Checkbox('Too Exp', true); },
			removeeval : function () { Checkbox('Too Exp', false); }
		},
		"flash of genius" : {
			name : "Flash of Genius",
			source : [["E:RLW", 57], ["T", 13]],
			minlevel : 7,
			description : "\n   As a reaction when I or another in 30 ft make a check/save, I can add my Int mod to it",
			action : [["reaction", ""]],
			usages : "Intelligence modifier per ",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));",
			recovery : "long rest"
		},
		"magic item adept" : {
			name : "Magic Item Adept",
			source : [["E:RLW", 57], ["T", 13]],
			minlevel : 10,
			description : "\n   It takes me half the normal time and gold to craft common and uncommon magic items",
			additional : levels.map(function (n) {
				return n < 10 ? "" : "attune to " + (n < 14 ? 4 : n < 18 ? 5 : 6) + " magic items";
			})
		},
		"spell-storing item" : {
			name : "Spell-Storing Item",
			source : [["E:RLW", 58], ["T", 13]],
			minlevel : 11,
			description : desc([
				"When I finish a long rest, I can infuse a 1st-/2nd-level artificer spell into an item I touch",
				"It has to be a weapon or spellcasting focus for me; Stored spells are lost if I do this again",
				"The spell must have a casting time of 1 action, but I need not have it prepared",
				"A creature holding an infused item can use an action to cast the spell, using my abilities"
			]),
			additional : "cast stored spell",
			usages : "2\xD7 Int mod per ",
			usagescalc : "event.value = Math.max(2, Number(What('Int Mod')) * 2);",
			recovery : "long rest"
		},
		"magic item savant" : {
			name : "Magic Item Savant",
			source : [["E:RLW", 58], ["T", 14]],
			minlevel : 14,
			description : " [ignore class/race/spell/level attune require.]"
		},
		"soul of artifice" : {
			name : "Soul of Artifice",
			source : [["E:RLW", 58], ["T", 14]],
			minlevel : 20,
			description : " [+1 on all saves per attuned magic item]\n   As a reaction when I'm reduced to 0 HP, I can end one infusion to drop to 1 HP instead",
			action : [["reaction", ""]],
			savetxt : {
				text : ["+1 to all saves per attuned magic item"]
			}
		}
	},
	prereqLvl6 : function(v) { return classes.known.artificer.level >= 6; },
	prereqLvl10 : function(v) { return classes.known.artificer.level >= 10; },
	prereqLvl14 : function(v) { return classes.known.artificer.level >= 14; },
};

// Set the Artificer infusion list for Replicate Magic Item
RunFunctionAtEnd(function() {
	var artMi = [
		// 2nd-level artificer
		["alchemy jug", 2],
		["bag of holding", 2],
		["cap of water breathing", 2],
		["goggles of night", 2],
		["rope of climbing", 2],
		["sending stones", 2],
		["wand of magic detection", 2],
		["wand of secrets", 2],
		// 6th-level artificer
		["boots of elvenkind", 6],
		["cloak of elvenkind", 6],
		["cloak of the manta ray", 6],
		["eyes of charming", 6],
		["gloves of thievery", 6],
		["lantern of revealing", 6],
		["pipes of haunting", 6],
		["ring of water walking", 6],
		// 10th-level artificer
		["boots of striding and springing", 10],
		["boots of the winterlands", 10],
		["bracers of archery", 10],
		["brooch of shielding", 10],
		["cloak of protection", 10],
		["eyes of the eagle", 10],
		["gauntlets of ogre power", 10],
		["gloves of missile snaring", 10],
		["gloves of swimming and climbing", 10],
		["hat of disguise", 10],
		["headband of intellect", 10],
		["helm of telepathy", 10],
		["medallion of thoughts", 10],
		["necklace of adaptation", 10], // TCoE addition
		["periapt of wound closure", 10],
		["pipes of the sewers", 10],
		["quiver of ehlonna", 10],
		["ring of jumping", 10],
		["ring of mind shielding", 10],
		["slippers of spider climbing", 10],
		["ventilating lung", 10],
		["winged boots", 10],
		// 14th-level artificer
		["amulet of health", 14],
		["arcane propulsion arm", 14],
		["belt of giant strength", 14, "hill (str 21, rare)"],
		["boots of levitation", 14],
		["boots of speed", 14],
		["bracers of defense", 14],
		["cloak of the bat", 14],
		["dimensional shackles", 14],
		["gem of seeing", 14],
		["horn of blasting", 14],
		["ring of free action", 14],
		["ring of protection", 14],
		["ring of the ram", 14]
	];
	// add all common items (except potions and scrolls)
	for (var mi in MagicItemsList) {
		var aMI = MagicItemsList[mi];
		if (aMI.type && !(/potion|scroll/i).test(aMI.type) &&
			( (!aMI.rarity && aMI.choices) || (aMI.rarity && aMI.rarity.toLowerCase() === "common") )
		) {
			if (aMI.choices) {
				for (var c = 0; c < aMI.choices.length; c++) {
					var choiceNmLC = aMI.choices[c].toLowerCase();
					var aMIchoice = aMI[choiceNmLC];
					// skip if not common rarity or a potion or a scroll
					if (!aMIchoice || !aMIchoice.rarity || aMIchoice.rarity.toLowerCase() !== "common" || (/potion|scroll/i).test(aMIchoice.type)) continue;
					artMi.push([mi, 0, choiceNmLC]);
				}
			} else {
				artMi.push([mi]);
			}
		}
	}
	var getLetterRange = function(str) {
		var iCharNr = removeDiacritics(str[0].toLowerCase()).charCodeAt(0) - 97;
		var oOpt = {
			"A-F" : ("f").charCodeAt(0) - 97,
			"G-Q" : ("q").charCodeAt(0) - 97,
			"R-Z" : ("z").charCodeAt(0) - 97,
		}
		for (var sRng in oOpt) {
			if (iCharNr <= oOpt[sRng]) return sRng;
		}
		return sRng; // higher than the last, so just return the last
	};
	var theObj = ClassList.artificer.features["infuse item"];
	for (var a = 0; a < artMi.length; a++) {
		var MI0 = artMi[a][0];
		var MI1 = artMi[a][1];
		var MI2 = artMi[a][2];
		var anArtMi = MagicItemsList[MI0];
		if (!anArtMi) continue;
		if (MI2 && anArtMi[MI2]) {
			anArtMi = {
				name : anArtMi[MI2].name ? anArtMi[MI2].name : anArtMi.name + " [" + MI2.capitalize() + "]",
				rarity : anArtMi[MI2].rarity ? anArtMi[MI2].rarity : anArtMi.rarity,
				source : anArtMi[MI2].source ? anArtMi[MI2].source : anArtMi.source,
				attunement : anArtMi[MI2].attunement !== undefined ? anArtMi[MI2].attunement : anArtMi.attunement
			}
		}
		var theI = anArtMi.name + (MI1 ? " (prereq: level " + MI1 + " artificer)" : "");
		var theILC = theI.toLowerCase();
		if (theObj[theILC]) continue;
		theObj[theILC] = {
			name : anArtMi.name,
			description : "",
			source : anArtMi.source,
			magicitemsAdd : [anArtMi.name],
			additional : anArtMi.attunement ? "requires attunement" : undefined,
			prereqeval : MI1 && MI1 > 2 ? ClassList.artificer["prereqLvl" + MI1] : undefined,
			submenu : "Replicate Magic Item" + (MI1 ? " (prereq: level " + (" "+MI1).slice(-2) + " artificer)" : " (common magic items) [" + getLetterRange(anArtMi.name) + "]")
		};
		theObj.extrachoices.push(theI);
	};
});

// Add the Alchemist specialism
AddSubClass("artificer", "alchemist", {
	regExpSearch : /^(?=.*alchemist)(?!.*wizard).*$/i,
	subname : "Alchemist",
	fullname : "Alchemist",
	source : [["E:RLW", 58], ["T", 14]],
	features : {
		"subclassfeature3" : {
			name : "Tools Proficiency",
			source : [["E:RLW", 58], ["T", 14]],
			minlevel : 3,
			description : " [proficient with alchemist's supplies]",
			toolProfs : ["Alchemist's supplies"],
			spellcastingExtra : ["healing word", "ray of sickness", "flaming sphere", "melf's acid arrow", "gaseous form", "mass healing word", "blight", "death ward", "cloudkill", "raise dead"]
		},
		"subclassfeature3.1" : {
			name : "Experimental Elixir",
			source : [["E:RLW", 58], ["T", 14]],
			minlevel : 3,
			description : desc([
				"When I finish a long rest I can produce a number of elixirs in empty flasks I touch",
				"Also, as an action, I can expend a spell slot to create one elixir in a touched empty flask",
				"I need alchemist supplies on my person to do this; An elixir lasts until my next long rest",
				"For their effects, see the experimental elixir table on a Notes page; They work like potions"
			]),
			additional : levels.map(function (n) {
				return n < 3 ? "" : "create " + (n < 6 ? 1 : n < 15 ? 2 : 3) + " elixir" + (n < 6 ? "" : "s") + " after finishing a long rest";
			}),
			action : [["action", ""]],
			toNotesPage : [{
				name : "Experimental Elixir Table",
				note : [
					"Whenever I finish a long rest, I can magically produce a number of experimental elixir in empty flasks I touch. I can create one at 3rd level, two at 6th level, and three at 15th level.",
					"Creating an experimental elixir requires me to have alchemist's supplies on my person, and any elixir created like this lasts until it is drunk or until the end of my next long rest.",
					"I can create additional experimental elixirs by expending a spell slot of 1st level or higher for each one. When I do so, I use my action to create the elixir in an empty flask I touch.",
					"As an action, a creature can drink the elixir or administer it to an incapacitated creature.",
					"The effect of an elixir when someone drinks it is found on the table below. Roll to determine the effect for each elixir I create when finishing a long rest. I can choose the effect from the table for those created by expending a spell slot.",
					"\n  D6\tEFFECT",
					"1\tHealing: The drinker regains a number of hit points equal to 2d4 + my Intelligence modifier.",
					"2\tSwiftness: The drinker's walking speed increases by 10 ft for 1 hour.",
					"3\tResilience: The drinker gains a +1 bonus to AC for 10 minutes.",
					"4\tBoldness: The drinker can roll a d4 and add the number rolled to every attack roll and saving throw they make for the next minute.",
					"5\tFlight: The drinker gains a flying speed of 10 ft for 10 minutes.",
					"6\tTransformation: The drinker's body is transformed as if by the alter self spell. The drinker determines the transformation caused by the spell, the effects of which last for 10 minutes."
				]
			}]
		},
		"subclassfeature5" : {
			name : "Alchemical Savant",
			source : [["E:RLW", 58], ["T", 15]],
			minlevel : 5,
			description : desc([
				"When I cast spells using alchemist's supplies as my spellcasting focus, I can enhance them",
				"I add my Int mod to one roll of acid, fire, necrotic, or poison damage, or restoring HP"
			]),
			calcChanges : {
				atkCalc : [
					function (fields, v, output) {
						if (v.thisWeapon[3] && v.thisWeapon[4].indexOf("artificer") !== -1 && (/acid|fire|necrotic|poison/i).test(fields.Damage_Type)) {
							output.extraDmg += Math.max(Number(What("Int Mod")), 1);
						}
					},
					"Artificer spells that deal acid, fire, necrotic, or poison damage which I cast while using alchemist's supplies as my spellcasting focus, have my Intelligence modifier (min 1) added to one damage die roll."
				],
				spellAdd : [
					function (spellKey, spellObj, spName) {
						if (spellObj.psionic || spName !== "artificer") return;
						var toAdd = Math.max(Number(What("Int Mod")), 1);
						if (genericSpellDmgEdit(spellKey, spellObj, "acid|fire|necro\\.?|necrotic|poison", toAdd, true, true) || genericSpellDmgEdit(spellKey, spellObj, "heal", toAdd, true, true)) {
							return true;
						}
					},
					"Artificer spells I cast using alchemist's supplies as my spellcasting focus, have my Intelligence modifier (min 1) added to one die rolled for dealing acid, fire, necrotic, or poison damage, or when restoring hit points."
				]
			}
		},
		"subclassfeature9" : {
			name : "Restorative Reagents",
			source : [["E:RLW", 59], ["T", 15]],
			minlevel : 9,
			description : desc([
				"Drinking my experimental elixirs now also grants 2d6 + my Int mod in temp HP (min 1)",
				"I can cast Lesser Restoration with alchemist's supplies without a spell slot (Int mod times)"
			]),
			usages : "Int mod per ",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));",
			recovery : "long rest",
			limfeaname : "Restorative Reagents: Lesser Restoration",
			spellcastingBonus : {
				name : "Restorative Reagents",
				spells : ["lesser restoration"],
				selection : ["lesser restoration"],
				firstCol : "Sp"
			},
			spellChanges : {
				"lesser restoration" : {
					components : "V,S,M\u0192",
					compMaterial : "Alchemist's supplies",
					changes : "When using my Restorative Reagents class feature, I can cast Lesser Restoration a number of times per long rest equal to my Intelligence modifier. To do so, I have to use alchemist's supplies as my spellcasting focus."
				}
			}
		},
		"subclassfeature15" : {
			name : "Chemical Mastery",
			source : [["E:RLW", 59], ["T", 15]],
			minlevel : 15,
			description : " [each spell 1\xD7 per long rest]" + desc([
				"I have resistance to acid and poison damage and immunity to being poisoned",
				"I can cast Greater Restoration and Heal each once per long rest without a spell slot",
				"I need alchemist's supplies as a focus for it, but the spells require no material components"
			]),
			dmgres : ["Acid", "Poison"],
			savetxt : { immune : ["poisoned condition"] },
			extraLimitedFeatures : [{
				name : "Chemical Mastery: Greater Restoration",
				usages : 1,
				recovery : "long rest"
			}, {
				name : "Chemical Mastery: Heal",
				usages : 1,
				recovery : "long rest"
			}],
			spellcastingBonus : {
				name : "Chemical Mastery",
				spells : ["greater restoration", "heal"],
				selection : ["greater restoration", "heal"],
				firstCol : "oncelr",
				times : 2
			},
			spellChanges : {
				"greater restoration" : {
					components : "V,S,M\u0192",
					compMaterial : "Alchemist's supplies",
					description : "Reduce exhaustion 1 lvl or end charm, petrify, curse, one ability score reduction, or max HP reduction",
					changes : "When using my Chemical Mastery class feature and alchemist's supplies as my spellcasting focus, I can cast Greater Restoration once per long rest without using a spell slot or requiring other material components."
				},
				"heal" : {
					components : "V,S,M\u0192",
					compMaterial : "Alchemist's supplies",
					allowUpCasting : false,
					changes : "When using my Chemical Mastery class feature and alchemist's supplies as my spellcasting focus, I can cast Heal once per long rest without using a spell slot."
				}
			}
		}
	}
});

// Add the Artillerist specialism
AddSubClass("artificer", "artillerist", {
	regExpSearch : /^(?=.*artillerist)(?!.*wizard).*$/i,
	subname : "Artillerist",
	fullname : "Artillerist",
	source : [["E:RLW", 59], ["T", 17]],
	features : {
		"subclassfeature3" : {
			name : "Tools Proficiency",
			source : [["E:RLW", 59], ["T", 17]],
			minlevel : 3,
			description : " [proficient with woodcarver's tools]",
			toolProfs : ["Woodcarver's tools"],
			spellcastingExtra : ["shield", "thunderwave", "scorching ray", "shatter", "fireball", "wind wall", "ice storm", "wall of fire", "cone of cold", "wall of force"]
		},
		"subclassfeature3.1" : {
			name : "Eldritch Cannon",
			source : [["E:RLW", 59], ["T", 17]],
			minlevel : 3,
			description : desc([
				"As an action, I can use woodcarver's or smith's tools to create an eldritch cannon in 5 ft",
				"I can do this once per long rest, or by expending a spell slot (SS 1+) to create one cannon",
				"I decide its size (Small/Tiny), appearance, type: flamethrower, force ballista, or protector",
				"It disappears after 1 hour, when reduced to 0 HP, or if I dismiss it as an action",
				"As a bonus action when within 60 ft of it, I can activate it to move and do its action",
				"I can't have multiple cannons; Select \"Eldritch Cannon\" on a companion page for its stats"
			]),
			usages : 1,
			recovery: "long rest",
			altResource : "SS 1+",
			additional : levels.map(function(n) {
				return n < 3 ? "" : n < 15 ? "create 1 cannon" : "create 2 cannons";
			}),
			action: [["action", " (summon/dismiss)"], ["bonus action", " (activate)"]],
			creaturesAdd : [["Eldritch Cannon"]],
			creatureOptions : [{
				name : "Eldritch Cannon",
				source : [["E:RLW", 59], ["T", 17]],
				size : [4, 5],
				type : "Object",
				alignment : "",
				ac : 18,
				hp : 5,
				hd : ["", ""],
				speed : "15 ft, climb 15 ft",
				scores : [10, 10, 10, 10, 10, 10],
				damage_immunities : "poison, psychic",
				passivePerception : 10,
				senses : "",
				challengeRating : "1",
				proficiencyBonus : 2,
				proficiencyBonusLinked : true,
				attacksAction : 0,
				attacks : [{
					name : "Flamethrower",
					ability : 4,
					damage : [2, 8, "fire"],
					range : "15-ft cone",
					description : "Dex save, success - half damage; Unattended flammable objects ignite",
					dc : true,
					useSpellMod : "artificer",
					abilitytodamage : false,
					tooltip : "The cannon exhales fire in an adjacent 15-ft cone that its creator designates. Each creature in that area must make a Dexterity saving throw against its creator's artificer spell save DC, taking 2d8 fire damage on a failed save or half as much damage on a successful one. The fire ignites any flammable objects in the area that aren't being worn or carried."
				}, {
					name : "Force Ballista",
					ability : 4,
					damage : [2, 8, "force"],
					range : "120 ft",
					description : "Creature hit is pushed 5 ft away",
					useSpellMod : "artificer",
					abilitytodamage : false,
					tooltip : "The cannon's creator makes a ranged spell attack, originating from the cannon, at one creature or object within 120 ft of it. On a hit, the target takes 2d8 force damage, and if the target is a creature, it is pushed up to 5 ft away from the cannon."
				}, {
					name : "Detonate",
					ability : 4,
					damage : [3, 8, "force"],
					range : "20-ft radius",
					description : "Dex save, success - half damage; Destroys cannon",
					dc : true,
					useSpellMod : "artificer",
					abilitytodamage : false,
					tooltip : "As an action, its creator can command the cannon to deto­nate if its creator is within 60 ft of it. Doing so destroys the cannon and forces each creature within 20 ft of it to make a Dexterity saving throw against its creator's artificer spell save DC, taking 3d8 force damage on a failed save or half as much damage on a successful one."
				}],
				features : [{
					name : "Healing",
					description : "The cannon regains 2d6 HP whenever Mending is cast on it."
				}, {
					name : "Cannon Type",
					description : "Upon creation, the creator decides what type of cannon it is: Flamethrower, Force Ballista, or Protector. What feature/attack it can use depends on its type."
				}, {
					name : "Protector",
					description : "The cannon emits a burst of positive energy that grants itself and each creature of its creator's choice within 10 ft of it a number of temporary hit points equal to 1d8 + its creator's Intelligence modifier (minimum of +1)."
				}],
				traits : [{
					name: "Creator",
					description: "As an object, the cannon only acts when activated by its creator, uses its creator's artificer spell attack and save DC, and has five times the artificer level in HP. It disappears after 1 hour, when reduced to 0 HP, or when its creator dismisses it as an action."
				}, {
					name: "Activation",
					description: "The creator of the cannon can activate it as a bonus action while within 60 ft of it. Once activated, the cannon does as instructed, moves and uses the action associated with its type: flamethrower attack, force ballista attack, or protector feature."
				}, {
					name: "Detonate (Artillerist 9)",
					minlevel : 9,
					description: "The creator of the cannon, can use an action to detonate the cannon when within 60 ft of it, see the attack section. The cannon's attacks now deal 3d8 damage.",
					eval : function(prefix, lvl) {
						// add the Detonate attack entry
						Value(prefix + "Comp.Use.Attack.3.Weapon Selection", "Detonate");
						// Upgrade the damage for the attacks
						for (var i = 1; i <= 2; i++) {
							Value(prefix + "BlueText.Comp.Use.Attack." + i + ".Damage Die", "3d8");
						}
					},
					removeeval : function(prefix, lvl) {
						// remove the Detonate attack entry
						Value(prefix + "Comp.Use.Attack.3.Weapon Selection", "");
						// Reset the damage for the attacks
						for (var i = 1; i <= 2; i++) {
							Value(prefix + "BlueText.Comp.Use.Attack." + i + ".Damage Die", "2d8");
						}
					}
				}, {
					name: "Shimmering Field (Artillerist 15)",
					minlevel : 15,
					description: "The creator of the cannon and their allies have half cover while within 10 ft of the cannon."
				}],
				minlevelLinked : ["artificer"],
				header : "Object",
				calcChanges : {
					hp : function (totalHD, HDobj, prefix) {
						if (!classes.known.artificer) return;
						var artLvl = classes.known.artificer.level;
						HDobj.alt.push(5 * artLvl);
						HDobj.altStr.push(" = 5 \xD7 " + artLvl + " from five times its creator's artificer level");
					},
					setAltHp : true
				},
				eval : function(prefix, lvl) {
					// remove the Detonate attack if adding this creature before artificer level 9
					if (lvl[0] < 9) Value(prefix + "Comp.Use.Attack.3.Weapon Selection", "");
				}
			}]
		},
		"subclassfeature5" : {
			name : "Arcane Firearm",
			source : [["E:RLW", 59], ["T", 18]],
			minlevel : 5,
			description : " [lasts until I use this feature again]" + desc([
				"After a long rest, I can use woodcarver's tools to enhance a wand, staff, or rod",
				"If I use this as my spellcasting focus for an artificer spell, I add +1d8 to one damage"
			]),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.thisWeapon[3] && v.thisWeapon[4].indexOf("artificer") !== -1) {
							fields.Damage_Die = fields.Damage_Die.replace(/D/g, 'd');
							var d8Regex = /(\d+)d8/;
							if (fields.Damage_Die.indexOf('Bd8') != -1) {
								fields.Damage_Die = fields.Damage_Die.replace('Bd8', 'Cd8');
							} else if (fields.Damage_Die.indexOf('Cd8') != -1) {
								fields.Damage_Die = fields.Damage_Die.replace('Cd8', 'Qd8');
							} else if (d8Regex.test(fields.Damage_Die)) {
								fields.Damage_Die = fields.Damage_Die.replace(d8Regex, Number(fields.Damage_Die.replace(d8Regex, '$1')) + 1 + 'd8');
							} else if (v.thisWeapon[3] == "eldritch blast") {
								fields.Description += (fields.Description ? '; ' : '') + "One ray +1d8 dmg";
							} else {
								fields.Damage_Die += '+1d8';
							}
						}
					},
					"If I use my arcane firearm as a spellcasting focus for an artificer spell, I can add +1d8 to one of the spell's damage rolls.",
					10
				],
				spellAdd : [
					function (spellKey, spellObj, spName) {
						if (spellObj.psionic || spName !== "artificer") return;
						return genericSpellDmgEdit(spellKey, spellObj, "\\w+\\.?", "1d8", true, true);
					},
					"If I use my arcane firearm as a spellcasting focus for an artificer spell, I can add +1d8 to one of the spell's damage rolls."
				]
			}
		},
		"subclassfeature9" : {
			name : "Explosive Cannon",
			source : [["E:RLW", 60], ["T", 18]],
			minlevel : 9,
			description : "\n   My eldritch cannons deal +1d8 damage; As an action, I can detonate a cannon in 60 ft",
			action : [["action", "Eldritch Cannon (detonate)"]]
		},
		"subclassfeature15" : {
			name : "Fortified Position",
			source : [["E:RLW", 60], ["T", 18]],
			minlevel : 15,
			description : " [cannons grant half cover in 10 ft to allies]" + desc([
				"I can now have two cannons at the same time and activate both with one bonus action",
				"I can create 2 eldritch cannons with the same action (still only one with a spell slot)"
			])
		}
	}
});

// Add the Battle Smith specialism
AddSubClass("artificer", "battle smith", {
	regExpSearch : /^(?=.*battle)(?=.*smith)(?!.*wizard).*$/i,
	subname : "Battle Smith",
	fullname : "Battle Smith",
	source : [["E:RLW", 60], ["T", 18]],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	features : {
		"subclassfeature3" : {
			name : "Battle Ready \u0026 Tool Proficiency",
			source : [["E:RLW", 61], ["T", 19]],
			minlevel : 3,
			description : desc([
				"I gain proficiency with martial weapons and smith's tools",
				"I can use my Intelligence modifier instead of Strength or Dexterity for magic weapons"
			]),
			toolProfs : ["Smith's tools"],
			spellcastingExtra : ["heroism", "shield", "branding smite", "warding bond", "aura of vitality", "conjure barrage", "aura of purity", "fire shield", "banishing smite", "mass cure wounds"],
			weaponProfs : [false, true],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (!v.isSpell && (v.theWea.isMagicWeapon || v.thisWeapon[1]) && fields.Mod > 0 && fields.Mod < 3 && Number(What("Int")) > Number(What(fields.Mod == 1 ? "Str" : "Dex"))) {
							fields.Mod = 4;
						}
					},
					'I can use my Intelligence modifier instead of Strength or Dexterity for the attack and damage rolls of magic weapons.'
				]
			}
		},
		"subclassfeature3.1" : {
			name : "Steel Defender",
			source : [["E:RLW", 61], ["T", 19]],
			minlevel : 3,
			description : desc([
				"When I end a long rest, I can use smith's tools to create a steel defender",
				"I determine its appearance; It obeys my commands and it acts on my initiative, after me",
				"Unless I use a bonus action to command it, it only takes the Dodge action on its turn",
				"It can take reactions and move on its turn even if I don't command it",
				"I can't have multiple at once; Select \"Steel Defender\" on a companion page for its stats"
			]),
			action : [["bonus action", " (command)"], ["action", " (restore)"]],
			creaturesAdd : [["Steel Defender"]],
			creatureOptions : [{
				name : "Steel Defender",
				source : [["E:RLW", 61], ["T", 19]],
				size : 3,
				type : "Construct",
				alignment : "Neutral",
				ac : 15,
				hp : 12,
				hd : [2, 8],
				hdLinked : ["artificer"],
				speed : "40 ft",
				scores : [14, 12, 14, 4, 10, 6],
				saves : ["", 3, 4, "", "", ""],
				skills : {
					"athletics" : 4,
					"perception" : 4
				},
				damage_immunities : "poison",
				condition_immunities : "charmed, exhaustion, poisoned",
				passivePerception : 14,
				senses : "Darkvision 60 ft",
				languages : "understands the languages of its creator but can't speak",
				challengeRating : "1",
				proficiencyBonus : 2,
				proficiencyBonusLinked : true,
				attacksAction : 1,
				attacks : [{
					name : "Force-Empowered Rend",
					ability : 4,
					damage : [1, 8, "piercing"],
					range : "Melee (5 ft)",
					description : "",
					modifiers : ["", "Prof"],
					abilitytodamage : false,
					useSpellMod : "artificer"
				}, {
					name : "Deflect Attack (reaction)",
					ability : 0,
					damage : [1, 4, "force"],
					range : "Melee (5 ft)",
					description : "After using the reaction, the attacker takes this damage, no attack roll required",
					modifiers : ["-Prof", "oInt"],
					abilitytodamage : false
				}],
				features : [{
					name : "Creator",
					description : "The steel defender obeys the commands of its creator and shares its proficiency bonus. It takes its turn immediately after its creator, on the same initiative count. It can move and take reactions on its own, but only takes the Dodge action on its turn unless its creator takes a bonus action to command it to take another action. If its creator is incapacitated, it can take any action, not just Dodge."
				}, {
					name : "Vigilant",
					description : "The " + (typePF ? "" : "steel ") + "defender can't be surprised."
				}],
				traits : [{
					name : "Healing",
					description : "The steel defender regains 2d6 HP whenever the Mending spell is cast on it. Its HP total is equal to 2 + its creator's artificer level times five + its creator's Int mod. Within an hour of its death, while within 5 ft, its creator can take an action to use smith's tools and expend a spell slot to have it return to full HP after 1 minute. If its creator dies, " + (typePF ? "the steel defender also perishes" : "so does it") + "."
				}],
				actions : [{
					name : "Repair (3/Day)",
					description : "As an action, the " + (typePF ? "" : "magical mechanisms inside the ") + "steel defender restore" + (typePF ? "s" : "") + " 2d8 + its proficiency bonus in HP to itself or to one construct or object within 5 ft of it."
				}, {
					name : "Deflect Attack (reaction)",
					description : typePF ? "As a reaction, the steel defender imposes disadvantage on the attack roll of one creature it can see that is within 5 ft of it, provided the attack roll is against a creature other than the defender." : "As a reaction, the defender imposes disadv. on the attack roll of one creature it can see within 5 ft, provided the creature attacks another than the defender."
				}, {
					name : "Arcane Jolt (Battle Smith 9)",
					minlevel : 9,
					eval : function(prefix, lvl) {
						Value(prefix + "Comp.Use.Attack.1.Description", "Arcane Jolt (1d6): On hit, deal force damage or heal target in 30 ft");
					},
					removeeval : function(prefix, lvl) {
						Value(prefix + "Comp.Use.Attack.1.Description", "");
					}
				}, {
					name : "Improved Defender (Battle Smith 15)",
					minlevel : 15,
					description : "The steel defender's Deflect Attack now deals 1d4 + its creator's Intelligence modifier in force damage to the attacker.",
					addMod : [{ type : "", field : "Comp.Use.AC", mod : 2, text : "The steel defender gains a +2 bonus to its AC (base AC of 15)." }],
					eval : function(prefix, lvl) {
						Value(prefix + "Comp.Use.Attack.1.Description", What(prefix + "Comp.Use.Attack.1.Description").replace("Arcane Jolt (1d6)", "Arcane Jolt (2d6)"));
						Value(prefix + "Comp.Use.Attack.2.Weapon Selection", "Deflect Attack (reaction)");
					},
					removeeval : function(prefix, lvl) {
						Value(prefix + "Comp.Use.Attack.1.Description", What(prefix + "Comp.Use.Attack.1.Description").replace("Arcane Jolt (2d6)", "Arcane Jolt (1d6)"));
						Value(prefix + "Comp.Use.Attack.2.Weapon Selection", "");
					}
				}],
				header : "Construct",
				calcChanges : {
					hp : function (totalHD, HDobj, prefix) {
						if (!classes.known.artificer) return;
						var intMod = Number(What('Int Mod'));
						var artLvl = classes.known.artificer.level;
						var artLvl5 = 5 * artLvl;
						HDobj.alt.push(2 + intMod + artLvl5);
						HDobj.altStr.push(" = 2 as a base\n + " + intMod + " from its creator's Intelligence modifier\n + 5 \xD7 " + artLvl + " from five times its creator's artificer level (" + artLvl5 + ")");
					},
					setAltHp : true,
					hpForceRecalc : true
				},
				eval : function(prefix, lvl) {
					// remove the Deflect Attack (reaction) attack if adding this creature before artificer level 9
					if (lvl[0] < 15) Value(prefix + "Comp.Use.Attack.2.Weapon Selection", "");
				}
			}]
		},
		"subclassfeature9" : {
			name : "Arcane Jolt",
			source : [["E:RLW", 61], ["T", 20]],
			minlevel : 9,
			description : function () {
				var descr9 = desc([
					"Once per turn when my steel defender or magic weapon hits a target, I can have it:",
					" \u2022 Deal an extra +2d6 force damage to the target",
					" \u2022 Restore 2d6 HP to another target within 30 ft of the one that was hit"
				]);
				var descr15 = descr9.replace(/2d6/g, '4d6');
				return levels.map(function (n) {
					return n < 9 ? "" : n < 15 ? descr9 : descr15;
				});
			}(),
			usages : "Intelligence modifier per ",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));",
			recovery : "long rest",
			additional : levels.map(function (n) {
				return n < 9 ? "" : (n < 15 ? 2 : 4) + "d6";
			}),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.theWea.isMagicWeapon || v.thisWeapon[1]) {
							fields.Description += (fields.Description ? '; ' : '') + 'Arcane Jolt (' + (classes.known.artificer && classes.known.artificer.level >= 15 ? 4 : 2) + 'd6)';
						}
					},
					"Once per turn when I hit with a magic weapon or my steel defender hits with its attack, I can use my Arcane Jolt class feature to have the hit either deal extra force damage or heal somebody within 30 ft of the target hit."
				]
			}
		},
		"subclassfeature15" : {
			name : "Improved Defender",
			source : [["E:RLW", 61], ["T", 20]],
			minlevel : 15,
			description : desc([
				"My defender's Deflect Attack now deals its attacker 1d4 + my Int mod force damage",
				"My arcane jolt damage/healing increases to 4d6; My steel defender gains +2 AC"
			])
		}
	}
});

// Add the new special magic items for the artificer class (infusions)
MagicItemsList["boots of the winding path"] = {
	name : "Boots of the Winding Path",
	source : [["E:RLW", 62], ["T", 21], ["UA:A2", 9], ["UA:A3", 12]],
	type : "wondrous item",
	description : "While wearing these boots, I can teleport up to 15 ft as a bonus action to an unoccupied space I can see, as long as I occupied that space at some point during the current turn.",
	descriptionFull : "While wearing these boots, a creature can teleport up to 15 feet as a bonus action to an unoccupied space the creature can see. The creature must have occupied that space at some point during the current turn.",
	attunement : true,
	action : [["bonus action", ""]]
}
MagicItemsList["enhanced arcane focus, +1 or +2"] = {
	name : "Enhanced Arcane Focus, +1 or +2",
	nameTest : /^(?=.*enhanced)(?=.*(arcane focus|rod|wand|staff)).*$/i,
	source : [["E:RLW", 62], ["T", 21]],
	type : "wondrous item",
	description : "While I am holding this arcane focus (rod, staff, or wand), I gain a +1 bonus to spell attack rolls (or +2 if the artificer that created it is level 10 or higher). In addition, I ignore half cover when making a spell attack.",
	descriptionFull : "While holding this rod, staff, or wand, a creature gains a +1 bonus to spell attack rolls. In addition, the creature ignores half cover when making a spell attack.\n   The bonus increases to +2 when it is created by someone with 10 levels or more in the artificer class.",
	attunement : true,
	weight : 1,
	prerequisite : "Requires attunement by a spellcaster",
	prereqeval : function(v) { return v.isSpellcaster; },
	choices : ["+1 to spell attacks", "+2 to spell attacks (artificer level 10+)"],
	"+1 to spell attacks" : {
		name : "Enhanced Arcane Focus +1",
		nameTest : /^(?=.*enhanced)(?=.*(arcane focus|rod|wand|staff))(?=.*\+1)(?!.*\+2).*$/i,
		description : "While I am holding this arcane focus (rod, staff, or wand), I gain a +1 bonus to spell attack rolls and I ignore half cover when making a spell attack.",
		calcChanges : {
			spellCalc : [
				function (type, spellcasters, ability) {
					if (type == "attack") return 1;
				},
				"I gain a +1 bonus to spell attack rolls."
			]
		}
	},
	"+2 to spell attacks (artificer level 10+)" : {
		name : "Enhanced Arcane Focus +2",
		nameTest : /^(?=.*enhanced)(?=.*(arcane focus|rod|wand|staff))(?!.*\+1)(?=.*\+2).*$/i,
		description : "While I am holding this arcane focus (rod, staff, or wand), I gain a +2 bonus to spell attack rolls and I ignore half cover when making a spell attack.",
		calcChanges : {
			spellCalc : [
				function (type, spellcasters, ability) {
					if (type == "attack") return 2;
				},
				"I gain a +2 bonus to spell attack rolls."
			]
		}
	}
}
MagicItemsList["radiant weapon"] = {
	name : "Radiant Weapon",
	nameTest : "Radiant",
	source : [["E:RLW", 62], ["T", 22]],
	type : "weapon (any)",
	description : "This item adds a +1 on its to hit and damage, has 4 charges, and regains 1d4 at dawn. As a bonus action, I can have it start/stop shedding light, bright in 30 ft, dim in another 30 ft. As a reaction if hit by an attack, I can use 1 charge to blind the attacker until the end of its next turn unless it makes a Con save (my spell DC).",
	descriptionFull : "This magic weapon grants a +1 bonus to attack and damage rolls made with it. While holding it, the wielder can take a bonus action to cause it to shed bright light in a 30-foot radius and dim light for an additional 30 feet. The wielder can extinguish the light as a bonus action.\n   The weapon has 4 charges. As a reaction immediately after being hit by an attack, the wielder can expend 1 charge and cause the attacker to be blinded until the end of the attacker's next turn, unless the attacker succeeds on a Constitution saving throw against your spell save DC. The weapon regains 1d4 expended charges daily at dawn.",
	attunement : true,
	usages : 4,
	recovery : "dawn",
	additional : "blind attacker; regains 1d4",
	action : [["bonus action", " (start/stop light)"], ["reaction", " (1 charge; after hit)"]],
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "suffix",
		descriptionChange : ["replace", "weapon"]
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && !v.isSpell && (/radiant/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'Reaction to blind attacker';
				}
			},
			'If I include the word "Radiant" in the name of a weapon, it will be treated as the magic weapon Radiant Weapon. It has +1 to hit and damage and can be used to shed light and to blind an attacker.'
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.isMeleeWeapon && !v.isSpell && (/radiant/i).test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[1] + 1;
				}
			}
		]
	}
}
MagicItemsList["repeating shot"] = {
	name : "Repeating Shot",
	source : [["E:RLW", 62], ["T", 22], ["UA:A3", 13]],
	type : "weapon (any with ammunition)",
	description : "When I use this magic weapon to make a ranged attack, it magically produces one piece of ammunition and grants a +1 bonus to its attack and damage rolls. Thus, it doesn't require ammunition and ignores the loading property if it has it. The produced ammunition vanishes once it hits or misses a target.",
	descriptionFull : "This magic weapon grants a +1 bonus to attack and damage rolls made with it when it's used to make a ranged attack, and it ignores the loading property if it has it.\n   If you load no ammunition in the weapon, it produces its own, automatically creating one piece of magic ammunition when you make a ranged attack with it. The ammunition created by the weapon vanishes the instant after it hits or misses a target.",
	attunement : true,
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "suffix",
		descriptionChange : ["replace", "weapon"],
		excludeCheck : function (inObjKey, inObj) {
			return !(/ammunition/i).test(inObj.description);
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && !v.isSpell && (/^(?=.*repeating shot)(?=.*ammunition).*$/i).test(v.WeaponText)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '').replace(/(;|,)? ?loading/i, '');
				}
			},
			'If I include the words "Repeating Shot" in the name of a weapon with the ammunition property, it will be treated as the magic weapon Repeating Shot. It has +1 to hit and damage and produces its own ammunition, thus its loading property is removed if it has it.'
		],
		atkCalc : [
			function (fields, v, output) {
				if ((/^(?=.*repeating shot)(?=.*ammunition).*$/i).test(v.WeaponText) && !v.isSpell) {
					output.magic = v.thisWeapon[1] + 1;
				}
			}, ''
		]
	}
}
MagicItemsList["repulsion shield"] = {
	name : "Repulsion Shield",
	source : [["E:RLW", 63], ["T", 23]],
	type : "shield",
	description : "I gain an additional +1 bonus to Armor Class while wielding this shield. The shield has 4 charges and regains 1d4 expended charges daily at dawn. As a reaction immediately after being hit by a melee attack, I can expend 1 charge to push the attacker up to 15 ft away.",
	descriptionFull : "A creature gains a +1 bonus to Armor Class while wielding this shield.\n   The shield has 4 charges. While holding it, the wielder can use a reaction immediately after being hit by a melee attack to expend 1 of the shield's charges and push the attacker up to 15 feet away. The shield regains 1d4 expended charges daily at dawn.",
	weight : 6,
	attunement : true,
	usages : 4,
	additional : "regains 1d4",
	recovery : "dawn",
	action : [["reaction", " (1 charge)"]],
	shieldAdd : ["Repulsion Shield", 3, 6]
}
MagicItemsList["returning weapon"] = {
	name : "Returning Weapon",
	nameTest : "Returning",
	source : [["E:RLW", 63], ["T", 23], ["UA:A3", 14], ["UA:A2", 10]],
	type : "weapon (any thrown)",
	description : "This magic weapon grants a +1 bonus to attack and damage rolls I make with it. It returns to my hand immediately after I use it to make a ranged attack.",
	descriptionFull : "This magic weapon grants a +1 bonus to attack and damage rolls made with it, and it returns to the wielder's hand immediately after it is used to make a ranged attack.",
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "suffix",
		descriptionChange : ["replace", "weapon"],
		excludeCheck : function (inObjKey, inObj) {
			return !/\bthrown\b/i.test(inObj.description);
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/^(?=.*returning)(?=.*thrown).*$/i).test(v.WeaponText)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'Returns immediately after ranged attack';
				}
			},
			'If I include the word "Returning" in the name of a thrown weapon, it will be treated as the magic weapon Returning Weapon. It has +1 to hit and damage and returns to my hand immediately after I use it to make a ranged attack.'
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.isMeleeWeapon && (/^(?=.*returning)(?=.*thrown).*$/i).test(v.WeaponText)) {
					output.magic = v.thisWeapon[1] + 1;
				}
			}, ''
		]
	}
}

// Magic Items
MagicItemsList["arcane propulsion arm"] = {
	name : "Arcane Propulsion Arm",
	source : [["E:RLW", 276]],
	type : "wondrous item",
	rarity : "very rare",
	description : "Once attached to my wrist, elbow, or shoulder, this prosthetic magically forms a copy of the appendage it's replacing. It can't be removed against my will, but I can as an action. I can use it as a proficient melee weapon with the thrown property. After a throwing attack with it, it returns and reattaches immediately.",
	descriptionFull : "This prosthetic appendage was developed by artificers of House Cannith. To attune to this item, you must attach it to your arm at the wrist, elbow, or shoulder, at which point the prosthetic magically forms a copy of the appendage it's replacing.\n\nWhile attached, the prosthetic provides these benefits:\n \u2022 The prosthetic is a fully capable part of your body.\n \u2022 You can take an action to remove the prosthetic, and it removes itself if your attunement to it ends. It can't be removed against your will.\n \u2022 The prosthetic is a magic melee weapon with which you're proficient. It deals 1d8 force damage on a hit and has the thrown property, with a normal range of 20 feet and a long range of 60 feet. When thrown, the prosthetic detaches and flies at the target of the attack, then immediately returns to you and reattaches.",
	attunement : true,
	prerequisite : "Requires attunement by a creature missing a hand or an arm",
	prereqeval : function (v) { return false; },
	weaponsAdd : ["Arcane Propulsion Arm"],
	weaponOptions : {
		regExpSearch : /^(?=.*arcane)(?=.*propulsion)(?=.*arm).*$/i,
		name : "Arcane Propulsion Arm",
		source : [["E:RLW", 276]],
		ability : 1,
		type : "AlwaysProf",
		damage : [1, 8, "force"],
		range : "Melee, 20/60 ft",
		description : "Thrown; Returns immediately after thrown",
		abilitytodamage : true
	}
}
MagicItemsList["armblade"] = {
	name : "Armblade",
	source : [["E:RLW", 276]],
	type : "weapon (any one-handed melee weapon)",
	rarity : "common",
	description : "While attuned to it, this magic weapon is attached to my arm and inseparable from me. As a bonus action, I can retract it into my forearm or extend it from there. While it is extended, I can use the weapon as if I was holding it, and I can't use that hand for other purposes.",
	descriptionFull : "An armblade is a magic weapon that attaches to your arm, becoming inseparable from you as long as you're attuned to it. To attune to this item, you must hold it against your forearm for the entire attunement period.\n   As a bonus action, you can retract the armblade into your forearm or extend it from there. While it is extended, you can use the weapon as if you were holding it, and you can't use that hand for other purposes.",
	attunement : true,
	prerequisite : "Requires attunement by a warforged",
	prereqeval : function (v) { return (/warforged/i).test(CurrentRace.known); },
	allowDuplicates : true,
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "brackets",
		descriptionChange : ["replace", "weapon"],
		excludeCheck : function (inObjKey, inObj) {
			return (!inObj.description || (/two.{0,3}handed/i).test(inObj.description)) || (!inObj.range || !(/melee/i).test(inObj.range));
		}
	}
}
MagicItemsList["belashyrra's beholder crown"] = {
	name : "Belashyrra's Beholder Crown",
	nameAlt : "Beholder Crown",
	source : [["E:RLW", 276]],
	type : "wondrous item",
	rarity : "legendary",
	description : "This symbiotic crown of dark purple and mauve stone attaches to my skull and removing it requires ending a curse. It allows me to see normally in magical and normal darkness (devil's sight) out to 120 ft. It has 10 charges, regaining 1d6+3 at dawn, which I can use to cast several spells with spell save DC 16.",
	descriptionLong : "This symbiotic crown of dark purple and mauve stone attaches to my skull once I attune to it and removing it requires ending a curse. It allows me to see normally in magical and normal darkness (devil's sight) out to 120 ft. It has 10 charges, regaining 1d6+3 at dawn, which I can use to cast several spells with spell save DC 16. These are: Charm Person (1 charge), Disintegrate (6 charges), Fear (3 charges), Finger of Death (7 charges), Flesh to Stone (6 charges), Hold Person (2 charges), Ray of Enfeeblement (2 charges), Sleep (1 charge), Slow (3 charges), and Telekinesis (5 charges).",
	descriptionFull : "This symbiotic crown is carved from dark purple and mauve stone, with ten points like stalks set with gemstones resembling the eyestalks of a beholder. To attune to this item, you must wear it on your head for the entire attunement period, during which the crown's hidden tendrils burrow into your scalp to bond with your skull.\n   While wearing the crown, you can see normally in darkness, both magical and nonmagical, to a distance of 120 feet.\n   " + toUni("Spells") + ". The crown has 10 charges. While wearing it, you can use an action to expend some of its charges to cast one of the following spells from it (spell save DC 16): charm person (1 charge), disintegrate (6 charges), fear (3 charges), finger of death (7 charges), flesh to stone (6 charges), hold person (2 charges), ray of enfeeblement (2 charges), sleep (1 charge), slow (3 charges), telekinesis (5 charges).\n   The crown regains 1d6 + 3 expended charges daily at dawn.\n   " + toUni("Symbiotic Nature") + ". The crown can't be removed from you while you're attuned to it, and you can't voluntarily end your attunement to it. If you're targeted by a spell that ends a curse, your attunement to the crown ends, and it detaches from you.\n   The daelkyr Belashyrra made these crowns. While on the same plane of existence as the crown, Belashyrra can see through its eyestalks.",
	attunement : true,
	usages : 10,
	recovery : "dawn",
	additional : "regains 1d6+3",
	fixedDC : 16,
	spellFirstColTitle : "Ch",
	spellcastingBonus : [{
		name : "1 charge",
		spells : ["charm person", "sleep"],
		selection : ["charm person", "sleep"],
		firstCol : 1,
		times : 2
	}, {
		name : "2 charges",
		spells : ["hold person", "ray of enfeeblement"],
		selection : ["hold person", "ray of enfeeblement"],
		firstCol : 2,
		times : 2
	}, {
		name : "3 charges",
		spells : ["fear", "slow"],
		selection : ["fear", "slow"],
		firstCol : 3,
		times : 2
	}, {
		name : "5 charges",
		spells : ["telekinesis"],
		selection : ["telekinesis"],
		firstCol : 5
	}, {
		name : "6 charges",
		spells : ["disintegrate", "flesh to stone"],
		selection : ["disintegrate", "flesh to stone"],
		firstCol : 6,
		times : 2
	}, {
		name : "7 charges",
		spells : ["finger of death"],
		selection : ["finger of death"],
		firstCol : 7
	}]
}
MagicItemsList["cleansing stone"] = {
	name : "Cleansing Stone",
	source : [["E:RLW", 276], ["WGtE", 115], ["UA:MIoE", 2]],
	type : "wondrous item",
	rarity : "common",
	description : "This stone sphere is 1 ft in diameter and engraved with mystic sigils. As an action while touching it, I can activate it to remove dirt and grime from my garments and my person.",
	descriptionFull : "A cleansing stone is a sphere 1 foot in diameter, engraved with mystic sigils. When touching the stone, you can use an action to activate it and remove dirt and grime from your garments and your person.\n   Such stones are often embedded in pedestals in public squares in Aundair or in high-end Ghallanda inns.",
	action : [["action", ""]],
	weight : 88 // using average marble/limestone density of 2.711 g/cm3
}
var ERftLW_docentFullDescription = [
	"A docent is a small metal sphere, about 2 inches across, studded with dragonshards. To attune to a docent, you must embed the item somewhere on your body, such as your chest or your eye socket.",
	'>>Sentience<<. A docent is a sentient item of any alignment with an Intelligence of 16, a Wisdom of 14, and a Charisma of 14. It perceives the world through your senses. It communicates telepathically with you and can speak, read, and understand any language it knows (see "Random Properties" below).',
	">>Life Support<<. Whenever you end your turn with 0 hit points, the docent can make a Wisdom (Medicine) check with a +6 bonus. If this check succeeds, the docent stabilizes you.",
	">>Random Properties<<. A docent has the following properties:",
	" \u2022 >>Languages<<. The docent knows Common, Giant, and 1d4 additional languages chosen by the DM. If a docent knows fewer than six languages, it can learn a new language after it hears or reads the language through your senses.",
	" \u2022 >>Skills<<. The docent has a +7 bonus to one of the following skills (roll a d4): (1) Arcana, (2) History, (3) Investigation, or (4) Nature.",
	" \u2022 >>Spells<<. The docent knows one of the following spells and can cast it at will, requiring no components (roll a d6): (1–2) detect evil and good or (3–6) detect magic. The docent decides when to cast the spell.",
	">>Personality<<. A docent is designed to advise and assist the warforged it's attached to. One of the simple functions of a docent is to serve as a translator. The docent's properties are under its control, and if you have a bad relationship with your docent, it might refuse to assist you."
];
MagicItemsList["docent"] = {
	name : "Docent",
	source : [["E:RLW", 276]],
	type : "wondrous item",
	rarity : "rare",
	description : "I can embed this sentient small metal sphere studded with dragonshards into my chest or eye socket. I can communicate telepathically with it and it uses my senses. It can serve me as an advisor and a translator. It knowns 6 languages, a spells, an Intelligence skill, and can stabilize me. See Notes page.",
	descriptionFull : ERftLW_docentFullDescription.join("\n   ").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
	attunement : true,
	prerequisite : "Requires attunement by a warforged",
	prereqeval : function (v) { return (/warforged/i).test(CurrentRace.known); },
	toNotesPage : [{
		name : "Features",
		note : desc(ERftLW_docentFullDescription).replace(/>>(.*?)<</g, function(a, match) { return match.toUpperCase(); }).replace(/your/g, "my").replace(/(with|stabilizes|assist) you/ig, "$1 me").replace(/you /ig, "I ") + "\n\n" + sentientItemConflictTxt
	}]
}
MagicItemsList["dyrrn's tentacle whip"] = {
	name : "Dyrrn's Tentacle Whip",
	nameAlt : "Tentacle Whip",
	source : [["E:RLW", 276]],
	type : "weapon (whip)",
	rarity : "very rare",
	description : "This magic whip embeds itself in my arm once I attune to it and removing it requires ending a curse. It has a +2 bonus to attack and damage rolls, deals +1d6 psychic damage, but has disadv. vs. aberrations. On a roll of 20 to hit, the target is stunned until it next turn ends. As a bonus action, I can draw/sheath it in my arm",
	descriptionFull : "This long, whip-like strand of tough muscle bears a sharp stinger at one end. To attune to this symbiotic weapon, you wrap the whip around your wrist for the entire attunement period, during which time the whip painfully embeds its tendrils into your arm.\n   You gain a +2 bonus to attack and damage rolls made with this magic whip, but attack rolls made against aberrations with this weapon have disadvantage. A creature hit by this weapon takes an extra 1d6 psychic damage. When you roll a 20 on the d20 for an attack roll with this weapon, the target is stunned until the end of its next turn.\n   As a bonus action, you can sheathe the whip by causing it to retract into your arm, or draw the whip out of your arm again.\n   " + toUni("Symbiotic Nature") + ". The whip can't be removed from you while you're attuned to it, and you can't voluntarily end your attunement to it. If you're targeted by a spell that ends a curse, your attunement to the whip ends, and it detaches from you.",
	attunement : true,
	weight : 3,
	action : [["bonus action", "Tentacle Whip (draw/sheath)"]],
	weaponsAdd : ["Dyrrn's Tentacle Whip"],
	weaponOptions : {
		baseWeapon : "whip",
		regExpSearch : /^(?=.*tentacle)(?=.*whip).*$/i,
		name : "Dyrrn's Tentacle Whip",
		source : [["E:RLW", 276]],
		description : "Finesse, reach; +1d6 psychic dmg; On 20 to hit: stun until its next turn ends; Disadv. vs. aberrations",
		modifiers : [2, 2]
	}
}
MagicItemsList["earworm"] = {
	name : "Earworm",
	source : [["E:RLW", 277]],
	type : "wondrous item",
	rarity : "uncommon",
	description : "This symbiont bonds to my skull once I attune to it and removing it to end the attunement requires ending a curse. It has 4 charges, regaining 1d4 at dawn, which I can use to cast Detect Thoughts (2 charges) or Dissonant Whispers (1 charge) with DC 15. It allows me to speak, read, and write deep speech.",
	descriptionFull : "To attune to this symbiont, you must hold it against the skin behind your ear for the entire attunement period, whereupon it burrows into your head and bonds to your skull. While the earworm is inside you, you can speak, read, and write Deep Speech.\n   " + toUni("Spells") + ". The earworm has 4 charges. You can cast the following spells from it, expending the necessary number of charges (spell save DC 15): detect thoughts (2 charges) or dissonant whispers (1 charge). Each time you use the earworm to cast the detect thoughts spell, it sends the information gleaned to the nearest daelkyr, or to the next nearest earworm until it reaches a daelkyr.\n   The earworm regains 1d4 expended charges daily at dawn.\n   " + toUni("Symbiotic Nature") + ". The earworm can't be removed from you while you're attuned to it, and you can't voluntarily end your attunement to it. If you're targeted by a spell that ends a curse, your attunement to the earworm ends, and it exits your body.",
	attunement : true,
	languageProfs : ["Deep Speech"],
	usages : 4,
	recovery : "dawn",
	additional : "regains 1d4",
	fixedDC : 15,
	spellFirstColTitle : "Ch",
	spellcastingBonus : [{
		name : "1 charge",
		spells : ["dissonant whispers"],
		selection : ["dissonant whispers"],
		firstCol : 1
	}, {
		name : "2 charges",
		spells : ["detect thoughts"],
		selection : ["detect thoughts"],
		firstCol : 2
	}]
}
MagicItemsList["everbright lantern"] = {
	name : "Everbright Lantern",
	source : [["E:RLW", 277], ["WGtE", 115], ["UA:MIoE", 2]],
	type : "wondrous item",
	rarity : "common",
	description : "This bullseye lantern is powered by a dragonshard that sheds light comparable to that produced by a Continual Flame spell. The light never goes out, but it can be shuttered off. It sheds light in a 120-ft cone; the closest 60 ft is bright light, and the farthest 60 ft is dim light.",
	descriptionFull : "This bullseye lantern contains an Eberron dragonshard that sheds light comparable to that produced by a continual flame spell. An everbright lantern sheds light in a 120-foot cone; the closest 60 feet is bright light, and the farthest 60 feet is dim light.",
	weight : 2
}
MagicItemsList["feather token"] = {
	name : "Feather Token",
	source : [["E:RLW", 277]],
	type : "wondrous item",
	rarity : "common",
	description : "This small metal disk is inscribed with the image of a feather. When I fall at least 20 ft while the token is on my person, I descend 60 ft per round and take no damage from falling. The token's magic is expended after landing, whereupon the disk becomes nonmagical.",
	descriptionFull : "This small metal disk is inscribed with the image of a feather. When you fall at least 20 feet while the token is on your person, you descend 60 feet per round and take no damage from falling. The token's magic is expended after you land, whereupon the disk becomes nonmagical."
}
MagicItemsList["finder's goggles"] = {
	name : "Finder's Goggles",
	source : [["E:RLW", 277]],
	type : "wondrous item",
	rarity : "uncommon",
	description : "These goggles with dragonshard lenses grant me +1d4 on Wis (Insight) checks. As an action once per dawn, I can use them to find the last creature to touch an object with a Wis (Insight) check DC 13 + days since last contact. I learn the creature's type and can immediately cast Locate Creature to find the creature.",
	descriptionFull : "The lenses of these garish goggles are carved from Siberys dragonshards. While wearing these lenses, you gain the following benefits:\n \u2022 When you make a Wisdom (Insight) check, you can roll a d4 and add the number rolled to the check.\n \u2022 As an action, you can use the goggles to examine an object to identify the aura of the last creature that touched it. Make a Wisdom (Insight) check against a DC of 13 + the number of days since the last contact occurred. On a success, you learn the creature's type and can immediately use the goggles to cast locate creature to find that creature. This property can't be used again until the next dawn.",
	action : [["action", ""]],
	attunement : true,
	prerequisite : "Requires attunement by a creature with the Dragonmark of Finding",
	prereqeval : function (v) {
		return (/^(?=.*dragonmark)(?=.*finding).*$/i).test(CurrentRace.known);
	},
	action : [["action", " (examine object)"]],
	usages : 1,
	recovery : "dawn",
	additional : "examine object",
	spellcastingBonus : {
		name : "After examining object",
		spells : ["locate creature"],
		selection : ["locate creature"],
		firstCol : "Sp"
	}
}
MagicItemsList["glamerweave"] = {
	name : "Glamerweave",
	source : [["E:RLW", 277]],
	type : "wondrous item",
	description : "Glamerweave is clothing imbued with harmless illusory magic. As a bonus action while wearing these clothes, I can turn the pattern within the cloth into a moving illusory pattern. For the uncommon version, this pattern extends beyond the cloth and gives me +1d4 on a Performance or Persuasion check.",
	descriptionFull : "Glamerweave is clothing imbued with harmless illusory magic. While wearing the common version of these clothes, you can use a bonus action to create a moving illusory pattern within the cloth.\n   Uncommon glamerweave can have the pattern rise from the cloth. For example, a glamerweave gown might be wreathed in harmless, illusory flames, while a glam­erweave hat might have illusory butterflies fluttering around it.\n   When you make a Charisma (Performance) or Cha­risma (Persuasion) check while wearing the uncommon version of glamerweave, you can roll a d4 and add the number rolled to the check. Once you use this property, it can't be used again until the next dawn. ",
	action : [["bonus action", ""]],
	choices : ["Common (moving illusory pattern)", "Uncommon (pattern rises from the cloth)"],
	"common (moving illusory pattern)" : {
		name : "Glamerweave ",
		rarity : "common",
		description : "Glamerweave is clothing imbued with harmless illusory magic. As a bonus action while wearing these clothes, I can create a moving illusory pattern within the cloth.",
		descriptionFull : "Glamerweave is clothing imbued with harmless illusory magic. While wearing the common version of these clothes, you can use a bonus action to create a moving illusory pattern within the cloth."
	},
	"uncommon (pattern rises from the cloth)" : {
		name : "Uncommon Glamerweave",
		rarity : "uncommon",
		description : "Glamerweave is clothing imbued with harmless illusory magic. As a bonus action while wearing these clothes, I can have the pattern within them rise as an illusory visage (e.g. wreathed in flames). Once per dawn, I can use this to gives me +1d4 on a Charisma (Performance) or Charisma (Persuasion) check.",
		descriptionFull : "Glamerweave is clothing imbued with harmless illusory magic. While wearing these clothes, you can use a bonus action to create a moving illusory pattern within the cloth.\n   You can have the pattern rise from the cloth. For example, a glamerweave gown might be wreathed in harmless, illusory flames, while a glamerweave hat might have illusory butterflies fluttering around it.\n   When you make a Charisma (Performance) or Charisma (Persuasion) check while wearing the glamerweave, you can roll a d4 and add the number rolled to the check. Once you use this property, it can't be used again until the next dawn.",
		usages : 1,
		recovery : "dawn"
	}
}
MagicItemsList["imbued wood focus"] = {
	// Note that this item is implemented here against RAW,
	// because according to PHB page 203 a spellcasting focus can only be used for
	// spells with a material component that is neither costly nor consumed.
	// See also https://dnd.wizards.com/articles/sage-advice/rules-spellcasting
	// This would mean that the Imbued Wood Focus in only useful for a limited number of spells.
	// Instead, this code just applies the damage bonus to all damage spells that roll for their damage.
	name : "Imbued Wood Focus",
	source : [["E:RLW", 277], ["WGtE", 114], ["UA:MIoE", 1]],
	type : "wondrous item",
	rarity : "common",
	description : "This rod, wand, or staff is cut from a tree infused with extraplanar energy. I can use it as spellcasting focus for all my spells. If I do so, spells I cast that deal the associated damage type add a +1 bonus to one of their damage rolls.",
	descriptionFull : "An imbued wood focus is a rod, staff, or wand cut from a tree infused with extraplanar energy. If you're a spell­caster, you can use this orb as a spellcasting focus.\n   When you cast a damage-dealing spell using this item as your spellcasting focus, you gain a +1 bonus to one damage roll of the spell, provided the damage is of the type associated with the item's wood. The types of wood and their associated damage types are listed in the table below.\n\n" + toUni("Wood\t\t\tDamage Type") + "\nFernian Ash\t\tFire\nIrian Rosewood\t\tRadiant\nKythrian Manchineel  \tAcid or Poison\nLamannian Oak\t\tLightning or Thunder\nMabaran Ebony\t\tNecrotic\nRisian Pine\t\tCold\nShavarran Birch\t\tForce\nXorian Wenge\t\tPsychic",
	attunement : true,
	allowDuplicates : true,
	weight : 2,
	choices : ["Fernian Ash (fire)", "Irian Rosewood (radiant)", "Kythrian Manchineel (acid and poison)", "Lamannian Oak (lightning and thunder)", "Mabaran Ebony (necrotic)", "Risian Pine (cold)", "Shavarran Birch (force)", "Xorian Wenge (psychic)"],
	"fernian ash (fire)" : {
		name : "Fernian Ash Rod, Wand, or Staff",
		sortname : "Imbued Wood Focus, Fernian Ash (fire)",
		nameTest : /^(?=.*fernian)(?=.*ash)(?=.*(rod|wand|staff)).*$/i,
		description : "This rod, wand, or staff made of Fernian ash, wood infused with extraplanar energy. I can use it as spellcasting focus for all my spells. If I do so, spells I cast that deal fire damage add a +1 bonus to one of their damage rolls.",
		calcChanges : {
			atkCalc : [
				function (fields, v, output) {
					if (v.thisWeapon[3] && (/fire/i).test(fields.Damage_Type)) output.extraDmg += 1;
				},
				"When I use this as my spellcasting focus, spells I cast that deal fire damage get a +1 bonus added to one of their damage rolls."
			],
			spellAdd : [
				function (spellKey, spellObj, spName) {
					if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "fire", 1, true, true);
				},
				"When I use this as my spellcasting focus, spells I cast that deal fire damage get a +1 bonus added to one of their damage rolls."
			]
		}
	},
	"irian rosewood (radiant)" : {
		name : "Irian Rosewood Rod, Wand, or Staff",
		sortname : "Imbued Wood Focus, Irian Rosewood (radiant)",
		nameTest : /^(?=.*irian)(?=.*rosewood)(?=.*(rod|wand|staff)).*$/i,
		description : "This rod, wand, or staff made of Irian rosewood, wood infused with extraplanar energy. I can use it as spellcasting focus for all my spells. If I do so, spells I cast that deal radiant damage add a +1 bonus to one of their damage rolls.",
		calcChanges : {
			atkCalc : [
				function (fields, v, output) {
					if (v.thisWeapon[3] && (/radiant/i).test(fields.Damage_Type)) output.extraDmg += 1;
				},
				"When I use this as my spellcasting focus, spells I cast that deal radiant damage get a +1 bonus added to one of their damage rolls."
			],
			spellAdd : [
				function (spellKey, spellObj, spName) {
					if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "radiant", 1, true, true);
				},
				"When I use this as my spellcasting focus, spells I cast that deal radiant damage get a +1 bonus added to one of their damage rolls."
			]
		}
	},
	"kythrian manchineel (acid and poison)" : {
		name : "Kythrian Manchineel Rod, Wand, or Staff",
		sortname : "Imbued Wood Focus, Kythrian Manchineel (acid and poison)",
		nameTest : /^(?=.*kythrian)(?=.*manchineel)(?=.*(rod|wand|staff)).*$/i,
		description : "This rod, wand, or staff made of Kythrian manchineel, wood infused with extraplanar energy. I can use it as spellcasting focus for all my spells. If I do so, spells I cast that deal acid or poison damage add a +1 bonus to one of their damage rolls.",
		calcChanges : {
			atkCalc : [
				function (fields, v, output) {
					if (v.thisWeapon[3] && (/acid|poison/i).test(fields.Damage_Type)) output.extraDmg += 1;
				},
				"When I use this as my spellcasting focus, spells I cast that deal acid or poison damage get a +1 bonus added to one of their damage rolls."
			],
			spellAdd : [
				function (spellKey, spellObj, spName) {
					if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "acid|poison", 1, true, true);
				},
				"When I use this as my spellcasting focus, spells I cast that deal acid or poison damage get a +1 bonus added to one of their damage rolls."
			]
		}
	},
	"lamannian oak (lightning and thunder)" : {
		name : "Lamannian Oak Rod, Wand, or Staff",
		sortname : "Imbued Wood Focus, Lamannian Oak (lightning and thunder)",
		nameTest : /^(?=.*lamannian)(?=.*oak)(?=.*(rod|wand|staff)).*$/i,
		description : "This rod, wand, or staff made of Lamannian oak, wood infused with extraplanar energy. I can use it as spellcasting focus for all my spells. If I do so, spells I cast that deal lightning or thunder damage add a +1 bonus to one of their damage rolls.",
		calcChanges : {
			atkCalc : [
				function (fields, v, output) {
					if (v.thisWeapon[3] && (/lightning|thunder/i).test(fields.Damage_Type)) output.extraDmg += 1;
				},
				"When I use this as my spellcasting focus, spells I cast that deal lightning or thunder damage get a +1 bonus added to one of their damage rolls."
			],
			spellAdd : [
				function (spellKey, spellObj, spName) {
					if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "lightning|thunder", 1, true, true);
				},
				"When I use this as my spellcasting focus, spells I cast that deal lightning or thunder damage get a +1 bonus added to one of their damage rolls."
			]
		}
	},
	"mabaran ebony (necrotic)" : {
		name : "Mabaran Ebony Rod, Wand, or Staff",
		sortname : "Imbued Wood Focus, Mabaran Ebony (necrotic)",
		nameTest : /^(?=.*mabaran)(?=.*ebony)(?=.*(rod|wand|staff)).*$/i,
		description : "This rod, wand, or staff made of Mabaran ebony, wood infused with extraplanar energy. I can use it as spellcasting focus for all my spells. If I do so, spells I cast that deal necrotic damage add a +1 bonus to one of their damage rolls.",
		calcChanges : {
			atkCalc : [
				function (fields, v, output) {
					if (v.thisWeapon[3] && (/necrotic/i).test(fields.Damage_Type)) output.extraDmg += 1;
				},
				"When I use this as my spellcasting focus, spells I cast that deal necrotic damage get a +1 bonus added to one of their damage rolls."
			],
			spellAdd : [
				function (spellKey, spellObj, spName) {
					if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "necro\\.?|necrotic", 1, true, true);
				},
				"When I use this as my spellcasting focus, spells I cast that deal necrotic damage get a +1 bonus added to one of their damage rolls."
			]
		}
	},
	"risian pine (cold)" : {
		name : "Risian Pine Rod, Wand, or Staff",
		sortname : "Imbued Wood Focus, Risian Pine (cold)",
		nameTest : /^(?=.*risian)(?=.*pine)(?=.*(rod|wand|staff)).*$/i,
		description : "This rod, wand, or staff made of Risian pine, wood infused with extraplanar energy. I can use it as spellcasting focus for all my spells. If I do so, spells I cast that deal cold damage add a +1 bonus to one of their damage rolls.",
		calcChanges : {
			atkCalc : [
				function (fields, v, output) {
					if (v.thisWeapon[3] && (/cold/i).test(fields.Damage_Type)) output.extraDmg += 1;
				},
				"When I use this as my spellcasting focus, spells I cast that deal cold damage get a +1 bonus added to one of their damage rolls."
			],
			spellAdd : [
				function (spellKey, spellObj, spName) {
					if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "cold", 1, true, true);
				},
				"When I use this as my spellcasting focus, spells I cast that deal cold damage get a +1 bonus added to one of their damage rolls."
			]
		}
	},
	"shavarran birch (force)" : {
		name : "Shavarran Birch Rod, Wand, or Staff",
		sortname : "Imbued Wood Focus, Shavarran Birch (force)",
		nameTest : /^(?=.*shavarran)(?=.*birch)(?=.*(rod|wand|staff)).*$/i,
		description : "This rod, wand, or staff made of Shavarran birch, wood infused with extraplanar energy. I can use it as spellcasting focus for all my spells. If I do so, spells I cast that deal force damage add a +1 bonus to one of their damage rolls.",
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (v.thisWeapon[3] && v.thisWeapon[3] == "eldritch blast") {
						fields.Description += (fields.Description ? '; ' : '') + "One ray +1 dmg";
					}
				},
				"When I use this as my spellcasting focus, spells I cast that deal force damage get a +1 bonus added to one of their damage rolls."
			],
			atkCalc : [
				function (fields, v, output) {
					if (v.thisWeapon[3] && v.thisWeapon[3] != "eldritch blast" && (/force/i).test(fields.Damage_Type)) output.extraDmg += 1;
				}
			],
			spellAdd : [
				function (spellKey, spellObj, spName) {
					if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "force", 1, true, true);
				},
				"When I use this as my spellcasting focus, spells I cast that deal force damage get a +1 bonus added to one of their damage rolls."
			]
		}
	},
	"xorian wenge (psychic)" : {
		name : "Xorian Wenge Rod, Wand, or Staff",
		sortname : "Imbued Wood Focus, Xorian Wenge (psychic)",
		nameTest : /^(?=.*xorian)(?=.*wenge)(?=.*(rod|wand|staff)).*$/i,
		description : "This rod, wand, or staff made of Xorian wenge, wood infused with extraplanar energy. I can use it as spellcasting focus for all my spells. If I do so, spells I cast that deal psychic damage add a +1 bonus to one of their damage rolls.",
		calcChanges : {
			atkCalc : [
				function (fields, v, output) {
					if (v.thisWeapon[3] && (/psychic/i).test(fields.Damage_Type)) output.extraDmg += 1;
				},
				"When I use this as my spellcasting focus, spells I cast that deal psychic damage get a +1 bonus added to one of their damage rolls."
			],
			spellAdd : [
				function (spellKey, spellObj, spName) {
					if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "psychic", 1, true, true);
				},
				"When I use this as my spellcasting focus, spells I cast that deal psychic damage get a +1 bonus added to one of their damage rolls."
			]
		}
	}
}
MagicItemsList["keycharm"] = {
	name : "Keycharm",
	source : [["E:RLW", 277]],
	type : "wondrous item",
	rarity : "common",
	description : "When I cast Alarm, Arcane Lock, or Glyph of Warding, I can tie the effect to the keycharm. Its holder receives the notification from Alarm, bypasses the Arcane Lock, or avoids triggering the Glyph of Warding. It can have up to 3 tied spells at one time. As an action, the holder can speak the command to end a tied spell.",
	descriptionFull : "This small stylized key plays a vital role in the work of House Kundarak. If you cast the alarm, arcane lock, or glyph of warding spell, you can tie the effect to the keycharm so that whoever holds it receives the notification from the alarm spell, bypasses the lock of the arcane lock spell, or avoids triggering the glyph placed by the glyph of warding spell. In addition, the holder (who needn't be attuned to the item) can take an action to end any one spell tied to it, provided the holder knows the command word you set for ending the tied spells. The keycharm can have up to three tied spells at one time.",
	attunement : true,
	prerequisite : "Requires attunement by a creature with the Dragonmark of Warding",
	prereqeval : function (v) {
		return (/^(?=.*dragonmark)(?=.*warding).*$/i).test(CurrentRace.known);
	}
}
MagicItemsList["kyrzin's ooze"] = {
	name : "Kyrzin's Ooze",
	source : [["E:RLW", 278]],
	type : "wondrous item",
	rarity : "very rare",
	description : "Once I attune to this opalescent goo by drinking it, it can't only be removed by ending a curse. It gives me resistance to acid and poison damage and immunity to the poisoned condition. Each as an action once per short rest, I can exhale acid breath or become amorphous for 1 minute along with my equipment.",
	descriptionLong : "I can only attune to this opalescent, symbiotic goo by drinking it. I can't remove it or end the attunement voluntarily, but it seeps out of me if the curse is removed. It gives me resistance to acid and poison damage and immunity to the poisoned condition. As an action once per dawn, I can become amorphous for 1 minute along with my equipment and can move through a space as narrow as 1 inch wide. As an action once per dawn, I can exhale a 30-ft line, 5-ft wide acid breath that deals 8d8 acid damage (Dexterity save DC 15 halves). If I die while it is inside me, it turns my corpse into a black pudding.",
	descriptionFull : "This opalescent, symbiotic goo comes sealed in a jar and slowly shifts and moves, as if endlessly exploring the jar's interior. To attune to this item, you must first drink the contents of the jar, unlocking the following properties.\n   " + toUni("Resistant") + ". While attuned to Kyrzin's ooze, you have resistance to poison and acid damage, and you're immune to the poisoned condition.\n   " + toUni("Amorphous") + ". As an action, you can speak a command word and cause your body to assume the amorphous qualities of an ooze. For the next minute, you (along with any equipment you're wearing or carrying) can move through a space as narrow as 1 inch wide without squeezing. Once you use this property, it can't be used again until the next dawn.\n   " + toUni("Acid Breath") + ". As an action, you can exhale acid in a 30-foot line that is 5 feet wide. Each creature in that line must make a DC 15 Dexterity saving throw, taking 36 (8d8) acid damage on a failed save, or half as much damage on a successful one. Once you use this property, it can't be used again until the next dawn.\n   " + toUni("Symbiotic Nature") + ". The ooze can't be removed from you while you're attuned to it, and you can't voluntarily end your attunement to it. If you're targeted by a spell that ends a curse, your attunement to the ooze ends, as it seeps out of you.\n   If you die while the ooze is inside you, it bursts out and engulfs you, turning your corpse into a black pudding allied with the daelkyr.",
	attunement : true,
	dmgres : ["Acid", "Poison"],
	savetxt : { immune : ["poisoned condition"] },
	action : [["action", " (amorphous/acid breath)"]],
	extraLimitedFeatures : [{
		name : "Kyrzin's Ooze [Amorphous]",
		usages : 1,
		recovery : "dawn"
	}, {
		name : "Kyrzin's Ooze [Acid Breath]",
		usages : 1,
		recovery : "dawn"
	}],
	weaponsAdd : ["Kyrzin's Ooze Acid Breath"],
	weaponOptions : {
		regExpSearch : /^(?=.*ooze)(?=.*acid)(?=.*breath).*$/i,
		name : "Kyrzin's Ooze Acid Breath",
		source : [["E:RLW", 278]],
		ability : 0,
		type : "Magic Item",
		damage : [8, 8, "acid"],
		range : '5-ft \xD7 30-ft line',
		description : "Hits all in area; Dex save, success - half damage; Usable only once per dawn",
		abilitytodamage : false,
		dc : true,
		modifiers : [7, ""]
	}
}
MagicItemsList["living armor"] = {
	name : "Living Armor",
	source : [["E:RLW", 278]],
	type : "armor (any)",
	rarity : "very rare",
	description : "This armor of black chitin attaches itself to me once I attune to it and removing it requires ending a curse. It gives me +1 AC and resistance to necrotic, poison, and psychic damage. Whenever I finish a long rest, I must either feed it half my remaining HD (rounding up) or take 1 level of exhaustion.",
	descriptionFull : "This hideous armor is formed from black chitin, beneath which veins pulse and red sinews glisten. To attune to this item, you must wear it for the entire attunement period, during which tendrils on the inside burrow into you.\n   While wearing this armor, you have a +1 bonus to Armor Class, and you have resistance to the following damage types: necrotic, poison, and psychic.\n   " + toUni("Symbiotic Nature") + ". The armor can't be removed from you while you're attuned to it, and you can't voluntarily end your attunement to it. If you're targeted by a spell that ends a curse, your attunement to the armor ends, and it detaches from you.\n   The armor requires fresh blood be fed to it. Immediately after you finish any long rest, you must either feed half of your remaining Hit Dice to the armor (round up) or take 1 level of exhaustion.",
	attunement : true,
	dmgres : ["Necrotic", "Poison", "Psychic"],
	chooseGear : {
		type : "armor",
		prefixOrSuffix : "brackets",
		descriptionChange : ["prefix", "armor"],
		itemName1stPage : ["suffix", "+1 Living"]
	}
}
MagicItemsList["living gloves"] = {
	name : "Living Gloves",
	source : [["E:RLW", 278]],
	type : "wondrous item",
	rarity : "uncommon",
	description : "These gloves made of thin chitin and sinew bond with my skin once I attune to them and removing them requires ending a curse. Once I attune to them, I can choose to become proficient and gain expertise with either sleight of hand, thieves' tools, or an artisan's tools or musical instrument of my choice.",
	descriptionFull : "These symbiotic gloves\u2014made of thin chitin and sinew\u2014pulse with a life of their own. To attune to them, you must wear them for the entire attunement period, during which the gloves bond with your skin.\n   While attuned to these gloves, you gain one of the following proficiencies (your choice when you attune to the gloves):\n \u2022 Sleight of Hand\n \u2022 Thieves' tools\n \u2022 One kind of artisan's tools of your choice\n \u2022 One kind of musical instrument of your choice\n\nWhen you make an ability check using the chosen proficiency, you add double your proficiency bonus to the check, instead of your normal proficiency bonus.\n   " + toUni("Symbiotic Nature") + ". The gloves can't be removed from you while you're attuned to them, and you can't voluntarily end your attunement to them. If you're targeted by a spell that ends a curse, your attunement to the gloves ends, and they can be removed.",
	attunement : true,
	choices : ["Proficiency and expertise with Sleight of Hand", "Proficiency and expertise with Thieves' Tools", "Proficiency and expertise with chosen artisan's tools", "Proficiency and expertise with chosen musical instrument"],
	choicesNotInMenu : true,
	"proficiency and expertise with sleight of hand" : {
		name : "Living Gloves [Sleight of Hand]",
		description : "These symbiotic gloves made of thin chitin and sinew bond with my skin once I attune to them. Removing them requires ending a curse, I can't do so or end the attunement voluntarily. They give me proficiency and expertise with sleight of hand.",
		skills : [["Sleight of Hand", "full"]]
	},
	"proficiency and expertise with thieves' tools" : {
		name : "Living Gloves [Thieves' Tools]",
		description : "These symbiotic gloves made of thin chitin and sinew bond with my skin once I attune to them. Removing them requires ending a curse, I can't do so or end the attunement voluntarily. They give me proficiency and expertise with thieves' tools.",
		toolProfs : [["Thieves' tools", "Dex"]],
		eval : function () {
			if ((/thieve.?s.*tools/i).test(What('Too Text'))) {
				Checkbox('Too Exp', true);
			};
		},
		removeeval : function () {
			if ((/thieve.?s.*tools/i).test(What('Too Text'))) {
				Checkbox('Too Exp', false);
			};
		}
	},
	"proficiency and expertise with chosen artisan's tools" : {
		name : "Living Gloves [Artisan's Tools]",
		description : "These symbiotic gloves made of thin chitin and sinew bond with my skin once I attune to them. Removing them requires ending a curse, I can't do so or end the attunement voluntarily. They give me proficiency and expertise with a set of artisan's tools of my choice (chosen when I attune to them).",
		toolProfs : [["Artisan's tools", 1]],
	},
	"proficiency and expertise with chosen musical instrument" : {
		name : "Living Gloves [Musical Instrument]",
		description : "These symbiotic gloves made of thin chitin and sinew bond with my skin once I attune to them. Removing them requires ending a curse, I can't do so or end the attunement voluntarily. They give me proficiency and expertise with a musical instrument of my choice (chosen when I attune to them).",
		toolProfs : [["Musical instrument", 1]],
	}
}
MagicItemsList["orb of shielding"] = {
	name : "Orb of Shielding",
	source : [["E:RLW", 278], ["WGtE", 114], ["UA:MIoE", 1]],
	type : "wondrous item",
	rarity : "common",
	description : "An orb of shielding is made from crystal or stone aligned to one of the planes. I can use it as my spellcasting focus. While I am holding the orb and take damage of the type associated with the material the orb is made from, I can use my reaction to reduce the damage by 1d4 (to a minimum of 0).",
	descriptionFull : "An orb of shielding is a polished, spherical chunk of crystal or stone aligned to one of the planes of existence. If you're a spellcaster, you can use this orb as a spellcasting focus.\n   If you're holding the orb when you take damage of the type associated with the orb's material, you can use your reaction to reduce the damage by 1d4 (to a minimum of 0). The materials and their associated damage types are listed in the Orb of Shielding table.\n\n" + toUni("Planar Material\t\tDamage Type") + "\nFernian Basalt\t\tFire\nIrian Quartz\t\tRadiant\nKythrian Skarn\t\tAcid or Poison\nLamannian Flint\t\tLightning or Thunder\nMabaran Obsidian      \tNecrotic\nRisian Shale\t\tCold\nShavarran Chert\t\tForce\nXorian Marble\t\tPsychic",
	attunement : true,
	allowDuplicates : true,
	weight : 3,
	action : [["reaction", ""]],
	choices : ["Fernian Basalt (fire)", "Irian Quartz (radiant)", "Kythrian Skarn (acid or poison)", "Lamannian Flint (lightning or thunder)", "Mabaran Obsidian (necrotic)", "Risian Shale (cold)", "Shavaran Chert (force)", "Xorian Marble (psychic)"],
	"fernian basalt (fire)" : {
		name : "Orb of Shielding [Fernian Basalt]",
		description : "This stone orb is made from fernian basalt. I can use it as my spellcasting focus. As a reaction while I am holding the orb and take fire damage, I can reduce the damage by 1d4 (to a minimum of 0)."
	},
	"irian quartz (radiant)" : {
		name : "Orb of Shielding [Irian Quartz]",
		description : "This crystal orb is made from irian quartz. I can use it as my spellcasting focus. As a reaction while I am holding the orb and take radiant damage, I can reduce the damage by 1d4 (to a minimum of 0)."
	},
	"kythrian skarn (acid or poison)" : {
		name : "Orb of Shielding [Kythrian Skarn]",
		description : "This stone orb is made from kythrian skarn. I can use it as my spellcasting focus. As a reaction while I am holding the orb and take acid or poison damage, I can reduce the damage by 1d4 (to a minimum of 0)."
	},
	"lamannian flint (lightning or thunder)" : {
		name : "Orb of Shielding [Lamannian Flint]",
		description : "This stone orb is made from lamannian flint. I can use it as my spellcasting focus. As a reaction while I am holding the orb and take lightning or thunder damage, I can reduce the damage by 1d4 (to a minimum of 0)."
	},
	"mabaran obsidian (necrotic)" : {
		name : "Orb of Shielding [Mabaran Obsidian]",
		description : "This crystal orb is made from mabaran obsidian. I can use it as my spellcasting focus. As a reaction while I am holding the orb and take necrotic damage, I can reduce the damage by 1d4 (to a minimum of 0)."
	},
	"risian shale (cold)" : {
		name : "Orb of Shielding [Risian Shale]",
		description : "This stone orb is made from risian shale. I can use it as my spellcasting focus. As a reaction while I am holding the orb and take cold damage, I can reduce the damage by 1d4 (to a minimum of 0)."
	},
	"shavaran chert (force)" : {
		name : "Orb of Shielding [Shavaran Chert]",
		description : "This stone orb is made from shavaran chert. I can use it as my spellcasting focus. As a reaction while I am holding the orb and take force damage, I can reduce the damage by 1d4 (to a minimum of 0)."
	},
	"xorian marble (psychic)" : {
		name : "Orb of Shielding [Xorian Marble]",
		description : "This stone orb is made from xorian marble. I can use it as my spellcasting focus. As a reaction while I am holding the orb and take psychic damage, I can reduce the damage by 1d4 (to a minimum of 0)."
	}
}
MagicItemsList["prosthetic limb"] = { // no attument as per errata
	name : "Prosthetic Limb",
	source : [["E:RLW", 278], ["W", 268], ["T", 134]],
	type : "wondrous item",
	rarity : "common",
	description : "This artificial limb replaces a lost limb, like a hand, an arm, a foot, a leg, or a similar body part. While the prosthetic is attached, it functions identically to the part it replaces. As an action, I can detach or reattach it. It can't be removed against my will. It detaches if I die.",
	descriptionFull : "This item replaces a lost limb\u2014a hand, an arm, a foot, a leg, or a similar body part. While the prosthetic is attached, it functions identically to the part it replaces. You can detach or reattach it as an action, and it can't be removed against your will. It detaches if you die.",
	action : [["action", " (attach/detach)"]]
}
MagicItemsList["scribe's pen"] = {
	name : "Scribe's Pen",
	source : [["E:RLW", 278]],
	type : "wondrous item",
	rarity : "common",
	description : "I can use this pen to write on any surface. I decide whether the writing is visible or invisible, but it is always visible to creatures with the Mark of Scribing. As an action, I or others with the Mark of Scribing can touch the writing and make it visible to all. Writing on creatures other than constructs fades after 7 days.",
	descriptionFull : "You can use this pen to write on any surface. You decide whether the writing is visible or invisible, but the writing is always visible to a person with the Mark of Scribing.\n   Any creature with the Mark of Scribing can use an action to touch the invisible writing, making it visible to all.\n   If you use the pen to write on a creature that isn't a construct, the writing fades after 7 days.",
	attunement : true,
	prerequisite : "Requires attunement by a creature with the Dragonmark of Scribing",
	prereqeval : function (v) {
		return (/^(?=.*dragonmark)(?=.*scribing).*$/i).test(CurrentRace.known);
	}
}
MagicItemsList["shiftweave"] = {
	name : "Shiftweave",
	source : [["E:RLW", 279]],
	type : "wondrous item",
	rarity : "common",
	description : "Up to five different outfits are embedded into these clothes. As a bonus action, I can speak its command word to transform the outfit into one of the other designs contained within. Regardless of its appearance, the outfit can't be anything but clothing or gain properties of other magical clothing.",
	descriptionFull : "When a suit of shiftweave is created, up to five different outfits can be embedded into the cloth. While wearing the clothing, you can speak its command word as a bonus action to transform your outfit into your choice of one of the other designs contained within it. Regardless of its appearance, the outfit can't be anything but clothing. Although it can duplicate the look of other magical clothing, it doesn't gain their magical properties.",
	action : [["bonus action", ""]]
}
MagicItemsList["speaking stone"] = {
	name : "Speaking Stone",
	source : [["E:RLW", 279]],
	type : "wondrous item",
	rarity : "very rare",
	description : "This dragonshard is inscribed with arcane symbols that uniquely identify it. By touching it, I can cast Sending to any other speaking stone whose location or unique sequence of symbols I know. A creature within 5 ft of the receiving speaking stone hears the message as if they were the target of the Sending.",
	descriptionFull : "The key to long-distance, virtually instantaneous communication across Khorvaire is House Sivis's network of message stations. Each station contains at least one speaking stone, which is carved from a Siberys dragonshard and inscribed with arcane symbols that uniquely identify it. If you're a gnome with the Mark of Scribing, you can touch the stone and use an action to cast the sending spell from it. The target is any other speaking stone whose location or unique sequence of symbols you know. A creature within 5 feet of the stone hears the message as if they were the target.\n   In a Sivis message station, a gnome is always on duty by the speaking stone, listening for messages that might come in and transcribing them for delivery to their intended recipients.",
	prerequisite : "Can only be used by a gnome with the Dragonmark of Scribing",
	prereqeval : function (v) {
		return (/^(?=.*dragonmark)(?=.*scribing).*$/i).test(CurrentRace.known);
	},
	spellcastingBonus : {
		name : "At will",
		spells : ["sending"],
		selection : ["sending"],
		firstCol : "atwill"
	}
}
MagicItemsList["spellshard"] = {
	name : "Spellshard",
	source : [["E:RLW", 279], ["WGtE", 115], ["UA:MIoE", 3]],
	type : "wondrous item",
	rarity : "common",
	description : "This dragonshard can store up to 320 pages of text or spells. As an action while holding it (and speaking its passphrase if it has one), I can open my mind to its content and concentrate on it to subsequently read from and write to it in the same amount of time as a normal book (same cost as a normal spellbook).",
	descriptionFull : 'This polished Eberron dragonshard fits in the hand and stores information similar to a book. The shard can hold the equivalent of one book that\'s no more than 320 pages long. A shard can be created blank or already filled with information. When the shard is created, the creator can set a passphrase that must be spoken to access the information stored within.\n   While holding the shard, you can use an action to open your mind to the shard, seeing its content in your mind. On subsequent rounds, reading the text or scribing new text on blank "pages" in the shard requires concentration (as if concentrating on a spell) and takes the same amount of time it takes you to read and write normally. Thinking of a particular phrase or topic draws you to the first section in the shard that addresses it.\n   A wizard can use a spellshard as a spellbook, with the usual cost in gold and time to "scribe" a spell into the shard.',
	action : [["action", ""]]
}
MagicItemsList["ventilating lungs"] = {
	name : "Ventilating Lungs",
	source : [["E:RLW", 279]],
	type : "wondrous item",
	rarity : "very rare",
	description : "These lungs replace those in my chest while I'm attuned to them. Their function can't be suppressed by (anti)magic. They allow me to breath normally in any environment and give me advantage on saves against harmful gases and vapors. Once per dawn, I can use them to cast Gust of Wind (save DC 15) by exhaling.",
	descriptionFull : "These metallic nodules were created in response to the poisonous gases used on the battlefields of the Last War. When you attune to these lungs, they replace the lungs in your chest, which disappear. The lungs allow you to breathe normally, even in an antimagic field, and their breathing function can't be suppressed by magic.\n   Outside an antimagic field or any other effect that suppresses magic, these lungs allow you to breathe normally in any environment (including a vacuum), and you have advantage on saving throws against harmful gases such as those created by a cloudkill spell, a stinking cloud spell, inhaled poisons, and gaseous breath weapons.\n   As an action, you can use these lungs to exhale a gust of wind, as if you had cast the gust of wind spell (spell save DC 15) with no components. This property of the lungs can't be used again until the next dawn.\n   If your attunement to the lungs ends, your original lungs reappear.",
	attunement : true,
	usages : 1,
	recovery : "dawn",
	additional : "Gust of Wind",
	fixedDC : 15,
	spellcastingBonus : {
		name : "Once per dawn",
		spells : ["gust of wind"],
		selection : ["gust of wind"],
		firstCol : "oncelr"
	},
	savetxt : { adv_vs : ["gases", "vapors"] }
}
MagicItemsList["wand sheath"] = {
	name : "Wand Sheath",
	source : [["E:RLW", 279]],
	type : "wondrous item",
	rarity : "common",
	description : "This sheath clamps unto my arm and can't be removed while I'm attuned to it. As an action, I can insert a wand in it, which then doesn't count to the number of items I can attune to. As a bonus action, I can then retract the wand or extend the wand and use it as if holding it, while keeping my hand free.",
	descriptionFull : "A wand sheath clamps onto your arm and imparts the following benefits:\n \u2022 The wand sheath can't be removed from you while you're attuned to it.\n \u2022 You can insert a wand into the sheath as an action. The sheath can hold only one wand at a time.\n \u2022 You can retract or extend a wand from the sheath as a bonus action. While the wand is extended, you can use it as if you were holding it, but your hand remains free.\n\nIf a sheathed wand requires attunement, you must attune to the wand before you can use it. However, the wand sheath and the attached wand count as a single magic item with regard to the number of magic items you can attune to. If you remove the wand from the sheath, your attunement to the wand ends.",
	attunement : true,
	prerequisite : "Requires attunement by a warforged",
	prereqeval : function (v) { return (/warforged/i).test(CurrentRace.known); },
	action : [["action", " (insert)"], ["bonus action", " (extend/retract)"]]
}
MagicItemsList["wheel of wind and water"] = {
	name : "Wheel of Wind and Water",
	source : [["E:RLW", 280], ["WGtE", 115]],
	type : "wondrous item",
	rarity : "uncommon",
	description : "I can telepathically control the elemental bound into the elemental galleon or airship that has this wheel mounted at its helm. If I use a wheel of wind and water that is mounted on a mundane sailing ship, I can create an area of ideal conditions around the vessel, increasing its speed by 5 miles per hour.",
	descriptionFull : "When mounted at the helm of an elemental galleon or airship, this wheel allows a creature that possesses the Mark of Storm to telepathically control the elemental bound inside the vessel.\n   If a wheel of wind and water is mounted on a mundane sailing ship, a creature with the Mark of Storm who is using the wheel can create an area of ideal conditions around the vessel, increasing its speed by 5 miles per hour.",
	prerequisite : "Can only be used by a creature with the Dragonmark of Storm",
	prereqeval : function (v) {
		return (/^(?=.*dragonmark)(?=.*storm).*$/i).test(CurrentRace.known);
	}
}

// Beasts
CreatureList["clawfoot"] = {
	name : "Clawfoot",
	source : [["E:RLW", 289]],
	size : 3,
	type : "Beast",
	alignment : "Unaligned",
	ac : 13,
	hp : 19,
	hd : [3, 8],
	speed : "40 ft",
	scores : [12, 16, 14, 4, 12, 6],
	skills : {
		"perception" : 3,
		"stealth" : 5
	},
	senses : "",
	passivePerception : 13,
	challengeRating : "1",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
		name : "Bite",
		ability : 2,
		damage : [1, 8, "piercing"],
		range : "Melee (5 ft)",
		description : "Both bite \u0026 claws attack as Attack action"
	}, {
		name : "Claws",
		ability : 2,
		damage : [1, 8, "slashing"],
		range : "Melee (5 ft)",
		description : "If used after moving 20 ft straight in the same round, see Pounce trait; Both bite \u0026 claws attack as Attack action"
	}],
	traits : [{
		name : "Pack Tactics",
		description : "The clawfoot has advantage on an attack roll against a creature if at least one of the clawfoot's allies is within 5 ft of the creature and the ally isn't incapacitated."
	}, {
		name : "Pounce",
		description : "If the clawfoot moves at least 20 ft straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 11 Strength saving throw or be knocked prone. If the target is prone, the clawfoot can make one bite attack against it as a bonus action."
	}, {
		name : "Multiattack",
		description : "The clawfoot makes two attacks: one with its bite and one with its claws."
	}]
};
CreatureList["fastieth"] = {
	name : "Fastieth",
	source : [["E:RLW", 289]],
	size : 3,
	type : "Beast",
	alignment : "Unaligned",
	ac : 14,
	hp : 9,
	hd : [2, 8],
	speed : "50 ft",
	scores : [12, 18, 10, 4, 11, 4],
	senses : "",
	passivePerception : 10,
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 2,
		damage : [1, 8, "piercing"],
		range : "Melee (5 ft)",
		description : ""
	}],
	traits : [{
		name : "Quickness (Recharge 5-6)",
		description : "The fastieth can take the Dodge action as a bonus action."
	}]
};
