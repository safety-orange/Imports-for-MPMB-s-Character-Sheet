var iFileName = "ua_20180910_Dragonmarks.js";
RequiredSheetVersion("13.0.8");
// This file adds the content from the Unearthed Arcana: Dragonmarks article to MPMB's Character Record Sheet
// Note that this content also appears in the script for Wayfinder's Guide to Eberron and thus both sources are included for all things here

// Define the sources
SourceList["UA:D"] = {
	name : "Unearthed Arcana: Dragonmarks",
	abbreviation : "UA:D",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2018/dnd/downloads/UA_Dragonmarks.pdf",
	date : "2018/09/10"
};

// Dragonmarks subraces
RaceList["dragonmark detection half-elf-ua"] = {
	regExpSearch : /^((?=.*mark)(?=.*detection)|(?=.*house)(?=.*medani)).*$/i,
	name : "Half-elf (dragonmark)",
	sortname : "Dragonmark, Detection (Half-Elf)",
	source : [["WGtE", 96], ["UA:D", 2]],
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
	scorestxt : "+1 Intelligence, +1 Charisma, and +1 to any one ability score of my choice",
	scores : [0, 0, 0, 1, 0, 1],
	trait : "Half-Elf, Dragonmark of Detection (+1 Intelligence, +1 Charisma, and +1 to any one ability score of my choice)\n" + (typePF ? "\n" : "   ") + "Deductive Intuition: I can add my Intuition Die (1d4) to my Intelligence (Investigation) and Wisdom (Insight) checks.\n" + (typePF ? "\n" : "   ") + "Sense Threats: I can cast Detect Magic and Detect Poison and Disease as rituals using Intelligence as my spellcasting ability.",
	spellcastingAbility : 4,
	spellcastingBonus : {
		name : "Sense Threats",
		spells : ["detect magic", "detect poison and disease"],
		selection : ["detect magic", "detect poison and disease"],
		firstCol : "(R)",
		times : 2
	},
	spellChanges : {
		"detect magic" : {
			time : "10 min",
			changes : "I can cast this spell only as a ritual, thus its casting time is 10 minutes longer."
		},
		"detect poison and disease" : {
			time : "10 min",
			changes : "I can cast this spell only as a ritual, thus its casting time is 10 minutes longer."
		}
	}
};
RaceList["dragonmark finding half-orc-ua"] = {
	regExpSearch : /^(?=.*half)(?=.*\bor(c|k))((?=.*mark)(?=.*finding)|(?=.*house)(?=.*tharashk)).*$/i,
	name : "Half-orc (dragonmark)",
	sortname : "Dragonmark, Finding (Half-Orc)",
	source : [["WGtE", 97], ["UA:D", 2]],
	plural : "Half-orcs (dragonmark)",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Orc"],
	vision : [["Darkvision", 60]],
	age : " reach adulthood around age 14 and rarely live longer than 75 years",
	height : " range from 5 to well over 6 feet tall (4'10\" + 2d10\")",
	weight : " weigh around 215 lb (140 + 2d10 \xD7 2d6 lb)",
	heightMetric : " range from 1,5 to well over 1,8 metres tall (150 + 5d10 cm)",
	weightMetric : " weigh around 100 kg (65 + 5d10 \xD7 4d6 / 10 kg)",
	scorestxt : "+1 Strength, +1 Wisdom, and +1 to any one ability score of my choice",
	scores : [1, 0, 0, 0, 1, 0],
	trait : "Half-Orc, Dragonmark of Finding (+1 Str" + (typePF ? ", +1 Wis, +1 to one ability" : "ength, +1 Wisdom, +1 to any one ability score") + ")\n   Hunter's Intuition: I add my Intuition Die (1d4) to my Perception and Survival checks.\n   Imprint Prey: As a bonus action once per short rest, I imprint a target I can see in 30 ft or with a Survival check when tracking it, lasting until it dies or I use this again. I double my Intuition Die for tracking it, sense its general location in 60 ft, my attacks vs. it ignore half cover and don't have disadv. if I can't see it, and it has no adv. vs. me if I can't see it.\n" + (typePF ? "Nature's Voice: cast Locate Animals/Plants as a ritual from 3rd level." : "   Nature's Voice: Once I reach 3rd level, I can cast Locate Animals or Plants as a ritual."),
	features : {
		"imprint prey" : {
			name : "Imprint Prey",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			action : ["bonus action", ""]
		},
		"locate animals or plants" : {
			name : "Locate Animals or Plants",
			minlevel : 3,
			spellcastingBonus : {
				name : "Nature's Voice",
				spells : ["locate animals or plants"],
				selection : ["locate animals or plants"],
				firstCol : "(R)"
			},
			spellChanges : {
				"locate animals or plants" : {
					time : "10 min",
					changes : "I can cast this spell only as a ritual, thus its casting time is 10 minutes longer."
				}
			}
		}
	}
};
RaceList["dragonmark handling human-ua"] = {
	regExpSearch : /^((?=.*mark)(?=.*handling)|(?=.*house)(?=.*vadalis)).*$/i,
	name : "Human (dragonmark)",
	sortname : "Dragonmark, Handling (Human)",
	source : [["WGtE", 98], ["UA:D", 3]],
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
	scorestxt : "+1 Dexterity, +1 Wisdom, and +1 to any one ability score of my choice",
	scores : [0, 1, 0, 0, 1, 0],
	trait : "Human, Dragonmark of Handling (+1 Dex" + (typePF ? ", +1 Wis, +1 to one ability" : "terity, +1 Wisdom, +1 to any one ability score") + ")\n   Wild Intuition: I can add my Intuition Die (1d4) to my Wisdom (Animal Handling) and Intelligence (Nature) checks.\n   Expert Handling: I can use the Help action to aid an ally animal companion or mount even when they are within 30 ft of me, rather than just within 5 ft.\n   Primal Connection: Once per short rest, I can cast Animal Friendship using Wisdom " + (typePF ? "as my spellcasting ability" : "") + ".\n   " + (typePF ? "The Bigger They Are: My spells that normally affect only beasts now also affect monstrosities with an Intelligence of 3 or lower." : "Bigger They Are: My spells that affect only beasts, also affect monstrosities with Int < 4."),
	spellcastingAbility : 5,
	features : {
		"animal friendship" : {
			name : "Primal Connection",
			limfeaname : "Animal Friendship",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			spellcastingBonus : {
				name : "Primal Connection",
				spells : ["animal friendship"],
				selection : ["animal friendship"],
				firstCol : 'oncesr'
			}
		}
	},
	calcChanges : {
		spellAdd : [
			function (spellKey, spellObj, spName) {
				switch (spellKey) {
					case "animal friendship" :
						spellObj.description = spellObj.description.replace("beasts", "beasts/monstrosities");
						return true;
					case "beast bond" :
						spellObj.description = "Telepathic link with 1 beast/monstrosity Int<4 while in sight; it has adv. on atks vs. crea I can see";
						return true;
					case "beast sense" :
						spellObj.description = "Use senses of 1 willing monstrosity Int<4 or beast; I'm blinded and deafened while doing so";
						return true;
					case "dominate beast" :
						spellObj.description = "1 monstrosity Int<4 or beast save or charmed, follows telepathic commands, 1 a for complete control";
						return true;
					case "speak with animals" :
						spellObj.description = "Communicate verbally with monstrosities Int<4 or beasts for duration; interactions limited by their Int";
						return true;
				}
			},
			"Spells I cast that only affect beasts can also affect monstrosities with an Intelligence score of 3 or lower."
		]
	}
};
RaceList["dragonmark healing halfling-ua"] = {
	regExpSearch : /^((?=.*mark)(?=.*healing)|(?=.*house)(?=.*jorasco)).*$/i,
	name : "Halfling (dragonmark)",
	sortname : "Dragonmark, Healing (Halfling)",
	source : [["WGtE", 99], ["UA:D", 3]],
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
	trait : "Halfling, Dragonmark of Healing (+2 Dexterity, +1 Wisdom)" + (typePF ? "\n  " : "") + 
		" Lucky: When I roll a 1 on an attack roll, ability check, or saving throw, I can reroll the die and must use the new roll." + desc([
		"Halfling Nimbleness: I can move through the space of Medium and larger creatures.",
		"Medical Intuition: I " + (typePF ? "" : "can") + " add my Intuition Die (1d4) to " + (typePF ? "Medicine" : "my Wisdom (Medicine)") + " checks.",
		"Healing Touch: As an action once per short rest, I can spend one of my Hit Dice to heal myself or a creature I touch. I heal the roll of the die plus my Wisdom modifier.",
		"Jorasco's Blessing: I know the Spare the Dying cantrip."
	]),
	features : {
		"healing touch" : {
			name : "Healing Touch",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			action : ["action", ""]
		}
	},
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Jorasco's Blessing",
		spells : ["spare the dying"],
		selection : ["spare the dying"],
		firstCol : 'atwill'
	}
};
RaceList["dragonmark hospitality halfling-ua"] = {
	regExpSearch : /^((?=.*mark)(?=.*hospitality)|(?=.*house)(?=.*ghallanda)).*$/i,
	name : "Halfling (dragonmark)",
	sortname : "Dragonmark, Hospitality (Halfling)",
	source : [["WGtE", 100], ["UA:D", 4]],
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
	trait : "Halfling, Dragonmark of Hospitality (+2 Dexterity, +1 Charisma)\nLucky: When I roll a 1 on an attack roll, ability check, or saving throw, I can reroll the die and must use the new roll.\nHalfling Nimbleness: I can move through the space of Medium and larger creatures.\nEver Hospitable: I can add my Intuition Die (1d4) to my Charisma (Persuasion) checks and ability checks involving brewer's supplies or cook's utensils.\nInnkeeper's Charms: I know Friends and Prestidigitation with Cha as my spellcasting ability.",
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Innkeeper's Charms",
		spells : ["friends", "prestidigitation"],
		selection : ["friends", "prestidigitation"],
		firstCol : 'atwill',
		times : 2
	}
};
RaceList["dragonmark making human-ua"] = {
	regExpSearch : /^((?=.*mark)(?=.*making)|(?=.*house)(?=.*cannith)).*$/i,
	name : "Human (dragonmark)",
	sortname : "Dragonmark, Making (Human)",
	source : [["WGtE", 101], ["UA:D", 4]],
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
	scorestxt : "+1 Dexterity, +1 Intelligence, and +1 to any one ability score of my choice",
	scores : [0, 1, 0, 1, 0, 0],
	trait : "Human, Dragonmark of Making (+1 Dex" + (typePF ? ", +2 Int or +2 Dex, +1 Int" : "terity, +1 Intelligence, +1 to Dex or Int, my choice") + ")\nArtisan's Intuition: I can add my Intuition Die (1d4) to ability checks with artisan's tools.\nMagecraft: I can create a magic item that gives me the ability to cast one wizard cantrip of my choice, using Intelligence as my spellcasting ability. This works while the item is in my possession. At the end of a long rest, I can replace it with a new item and cantrip.\nSpellsmith: Once per long rest, I can spend 1 minute to make a nonmagical armor or weapon gain a +1 bonus for the next hour. Maker's Gift: I know the mending cantrip.",
	features : {
		"spellsmith" : {
			name : "Spellsmith",
			minlevel : 1,
			usages : 1,
			recovery : "long rest"
		}
	},
	eval : function () {
		CurrentSpells['dragonmark making human'] = {
			name : 'Human (dragonmark)',
			ability : 4,
			list : { 'class' : 'wizard', level : [0, 0], notspells : ['mending'] },
			known : { cantrips : 1, spells : 'list' },
			bonus : {
				bonus1 : {
					name : "Maker's Gift",
					spells : ['mending'],
					selection : ['mending'],
					firstCol : 'atwill'
				}
			},
			typeList : 2,
			refType : "race"
		};
		SetStringifieds('spells'); CurrentUpdates.types.push('spells');
	},
	removeeval : function () {
		delete CurrentSpells['dragonmark making human'];
		SetStringifieds('spells'); CurrentUpdates.types.push('spells');
	}
};
RaceList["dragonmark passage human-ua"] = { // different in Unearthed Arcana
	regExpSearch : /^((?=.*mark)(?=.*passage)|(?=.*house)(?=.*orien)).*$/i,
	name : "Human (dragonmark)",
	sortname : "Dragonmark, Passage (Human)",
	source : ["UA:D", 4],
	plural : "Humans (dragonmark)",
	size : 3,
	speed : {
		walk : { spd : 40, enc : 30 }
	},
	languageProfs : ["Common", 1],
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	scorestxt : "+2 Dexterity and +1 to another ability score of my choice",
	scores : [0, 2, 0, 0, 0, 0],
	trait : "Human, Dragonmark of Passage (+2 Dexterity and +1 to another ability score)\n   Intuitive Motion: I can add my Intuition Die (1d4) to my Strength (Athletics) checks and any ability checks involving operating or maintaining a land vehicle.\n   Orien's Grace: I can forgo half my movement speed for my turn to no longer provoke opportunity attacks for the rest of that turn.\n   Shared Passage: As a bonus action once per long rest, I can teleport myself and a willing ally within 5 ft a distance up to my walking speed to an unoccupied space I can see.",
	features : {
		"shared passage" : {
			name : "Shared Passage",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			action : ["bonus action", ""]
		}
	}
};
RaceList["dragonmark scribing gnome-ua"] = {
	regExpSearch : /^((?=.*mark)(?=.*scribing)|(?=.*house)(?=.*sivis)).*$/i,
	name : "Gnome (dragonmark)",
	sortname : "Dragonmark, Scribing (Gnome)",
	source : [["WGtE", 103], ["UA:D", 5]],
	plural : "Gnomes (dragonmark)",
	size : 4,
	speed : {
		walk : { spd : 25, enc : 15 }
	},
	languageProfs : ["Common", "Gnomish", 1],
	toolProfs : ["Calligrapher's supplies", "Forgery kits"],
	vision : [["Darkvision", 60]],
	savetxt : { text : ["Adv. on Int/Wis/Cha saves vs. magic"] },
	age : " start adult life around age 40 and can live 350 to almost 500 years",
	height : " are 3 to 4 feet tall (2'11\" + 2d4\")",
	weight : " weigh around 40 lb (35 + 2d4 lb)",
	heightMetric : " are 90 to 120 cm tall (2'11\" + 5d4)",
	weightMetric : " weigh around 18 kg (16 + 5d4 / 10 kg)",
	scores : [0, 0, 0, 2, 0, 1],
	trait : "Gnome, Dragonmark of Scribing (+2 Intelligence, +1 Charisma)\n   Gifted Scribe: I can add my Intuition Die (1d4) to ability checks involving calligrapher's supplies or forgery kits. I am proficient with both of these tools.\n   Whispering Wind: I know the Message cantrip.\n   Scribe's Insight: I can cast Comprehend Languages once per long rest.\nIntelligence is my spellcasting ability for the spells gained from being a gnome, dragonmark of scribing.",
	spellcastingAbility : 4,
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
	}
};
RaceList["dragonmark sentinel human-ua"] = {
	regExpSearch : /^((?=.*mark)(?=.*sentinel)|(?=.*house)(?=.*deneith)).*$/i,
	name : "Human (dragonmark)",
	sortname : "Dragonmark, Sentinel (Human)",
	source : [["WGtE", 104], ["UA:D", 5]],
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
	scorestxt : "+1 Strength, +1 Wisdom, and +1 to any one ability score of my choice",
	scores : [1, 0, 0, 0, 1, 0],
	trait : "Human, Dragonmark of Sentinel (+1 Str" + (typePF ? ", +1 Wis, +1 to one ability" : "ength, +1 Wisdom, +1 to any one ability score") + ")\n   Sentinel's Intuition: I can add my Intuition Die (1d4) to Initiative rolls and my Wisdom (Perception) checks.\n   Sentinel's Shield: I know the Blade Ward cantrip. I can cast Shield once per short rest.\n   Vigilant Guardian: As an action, I can designate an ally as my ward, gaining adv. on Insight and Perception checks to spot threats to it. As a reaction when I see my ward being attacked while within 5 ft, I can swap places with it, becoming the target of the attack.",
	action : [['action', 'Vigilant Guardian (designate ward)'], ['reaction', 'Vigilant Guardian (swap with ward)']],
	features : {
		"shield" : {
			name : "Sentinel's Shield",
			limfeaname : "Shield",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			action : ["reaction", ""],
			spellcastingBonus : [{
				name : "Sentinel's Shield",
				spells : ["blade ward"],
				selection : ["blade ward"],
				firstCol : 'atwill'
			}, {
				name : "Sentinel's Shield",
				spells : ["shield"],
				selection : ["shield"],
				firstCol : 'oncesr'
			}]
		}
	}
};
RaceList["dragonmark shadow elf-ua"] = {
	regExpSearch : /^((?=.*mark)(?=.*shadow)|(?=.*house)(?=.*(phiarlan|thuranni))).*$/i,
	name : "Elf (dragonmark)",
	sortname : "Dragonmark, Shadow (Elf)",
	source : [["WGtE", 105], ["UA:D", 6]],
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
	skillstxt : "Perception and proficiency with either Performance or one musical instrument",
	age : " typically claim adulthood around age 100 and can live to be 750 years old",
	height : " range from under 5 to over 6 feet tall (4'6\" + 2d10\")",
	weight : " weigh around 115 lb (90 + 2d10 \xD7 1d4 lb)",
	heightMetric : " range from under 1,5 to over 1,8 metres tall (140 + 5d10 cm)",
	weightMetric : " weigh around 55 kg (40 + 5d10 \xD7 2d4 / 10 kg)",
	scores : [0, 2, 0, 0, 0, 1],
	trait : "Elf, Dragonmark of Shadow (+2 Dexterity, +1 Charisma)\nTrance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. This gives the same benefit as a human gets from 8 hours of sleep (long rest takes only 4 hours).\nGift of the Shadows: I can add my Intuition Die (1d4) to Performance and Stealth checks.\nShape Shadows: I know the Minor Illusion cantrip using Charisma as my spellcasting ability.\nSlip Into Shadow: As a bonus action once per short rest, I can use the Hide action even while I have no cover or if I'm being observed.",
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Shape Shadows",
		spells : ["minor illusion"],
		selection : ["minor illusion"],
		firstCol : 'atwill'
	},
	features : {
		"slip into shadow" : {
			name : "Slip Into Shadow",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			action : ["bonus action", ""]
		}
	}
};
AddRacialVariant("dragonmark shadow elf-ua", "performance, ", {
	regExpSearch : /performance/i,
	source : [["WGtE", 105], ["UA:D", 6]],
	skills : ["Perception", "Performance"],
	skillstxt : ""
});
AddRacialVariant("dragonmark shadow elf-ua", "musical instrument, ", {
	regExpSearch : /musical instrument/i,
	source : [["WGtE", 105], ["UA:D", 6]],
	skillstxt : "",
	toolProfs : [["Musical instrument", 1]]
});
RaceList["dragonmark storm half-elf-ua"] = {
	regExpSearch : /^((?=.*mark)(?=.*storm)|(?=.*house)(?=.*lyrandar)).*$/i,
	name : "Half-elf (dragonmark)",
	sortname : "Dragonmark, Storm (Half-Elf)",
	source : [["WGtE", 106], ["UA:D", 6]],
	plural : "Half-elves (dragonmark)",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : 30, enc : 20 }
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
	scorestxt : "+1 Dexterity, +1 Charisma, and +1 to any one ability score of my choice",
	scores : [0, 1, 0, 0, 0, 1],
	trait : "Half-Elf, Dragonmark of Storm (+1 Dexterity, +1 Charisma, and +1 to any one ability score of my choice)\n" + (typePF ? "\n" : "   ") + "Windwright's Intuition: I can add my Intuition Die (1d4) to my Dexterity (Acrobatics) checks and any ability checks involving operating or maintaining a water or air vehicle.\n" + (typePF ? "\n" : "   ") + "Headwinds: I know the Gust cantrip. Once I reach 3rd level, I can cast Gust of Wind once per long rest. Charisma is my spellcasting ability for these spells.",
	spellcastingAbility : 6, // Not mentioned in WGtE, but essential!
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
	}
};
RaceList["dragonmark warding dwarf-ua"] = {
	regExpSearch : /^((?=.*mark)(?=.*warding)|(?=.*house)(?=.*kundarak)).*$/i,
	name : "Dwarf (dragonmark)",
	sortname : "Dragonmark, Warding (Dwarf)",
	source : [["WGtE", 108], ["UA:D", 7]],
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
	scores : [0, 1, 2, 1, 0, 0],
	trait : "Dwarf, Dragonmark of Warding (+1 Dex" + (typePF ? ", +2 Con, +1 Int" : "terity, +2 Constitution, +1 Intelligence") + ")\n   Stonecunning: When I make an Intelligence (History) check related to the origin of stonework, I am considered having expertise in the History skill.\n   Master of Locks: I can add my Intuition Die (1d4) to Intelligence (History), Intelligence (Investigation), and ability checks with thieves' tools, if it involves lock or trap mechanisms.\n   Wards and Seals: I can cast Alarm as a ritual. Once I reach 3rd level, I can cast Arcane Lock once per long rest. Intelligence is my spellcasting ability for these.",
	spellcastingAbility : 4,
	spellcastingBonus : {
		name : "Wards and Seals (level 1)",
		spells : ["alarm"],
		selection : ["alarm"],
		firstCol : "(R)"
	},
	spellChanges : {
		"alarm" : {
			time : "11 min",
			changes : "I can cast this spell only as a ritual, thus its casting time is 10 minutes longer."
		}
	},
	features : {
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
	}
};

// Greater Dragonmark feats
FeatsList["greater dragonmark-ua"] = {
	name : "Greater Dragonmark",
	source : [["WGtE", 110], ["UA:D", 7]],
	descriptionFull : "Your dragonmark has grown in size and power. This enhances your existing dragonmark, and the benefits are based on the mark that you already possess. A greater dragonmark provides the following benefits:\n \u2022 Increase one ability score by 1, to a maximum of 20. The abilities available to you are based on your mark, as shown on the Greater Dragonmark Benefits table.\n \u2022 The die type of your dragonmarked Intuition Die increases by one (for example, from a d4 to a d6).\n \u2022 You learn a set of spells, each of which you can cast once without expending a spell slot or using a material component. The list of spells, the spellcasting ability for them, and the type of rest you must complete to regain the use of these spells are shown on the Greater Dragonmark Benefits table.",
	description : "Select the type of greater dragonmark using the square button on this feat line.\nMy Intuition Die increases with one step (for example d4 to d6), I gain spellcating abilities, and an increase to one ability score.",
	eval : function () {
		var raceTrait = What('Racial Traits');
		if ((/my Intuition Die \(1d4\)/i).test(raceTrait)) {
			Value('Racial Traits', raceTrait.replace(/my Intuition Die \(1d4\)/i, 'my Intuition Die (1d6)'));
		};
	},
	removeeval : function () {
		var raceTrait = What('Racial Traits');
		if ((/my Intuition Die \(1d6\)/i).test(raceTrait)) {
			Value('Racial Traits', raceTrait.replace(/my Intuition Die \(1d6\)/i, 'my Intuition Die (1d4)'));
		};
	},
	choices : ["Detection", "Finding", "Handling", "Healing", "Hospitality", "Making", "Passage", "Scribing", "Sentinel", "Shadow", "Storm", "Warding"],
	"detection" : {
		prerequisite : "Being level 8 or higher and possessing the Dragonmark of Detection",
		prereqeval : function(v) { return v.characterLevel > 7 && (/^(?=.*dragonmark)(?=.*detection).*$/i).test(CurrentRace.known); },
		descriptionFull : "Your dragonmark has grown in size and power. This enhances your existing dragonmark, and the benefits are based on the mark that you already possess. A greater dragonmark provides the following benefits:\n \u2022 Increase your Charisma or Intelligence score by 1, to a maximum of 20.\n \u2022 The die type of your dragonmarked Intuition Die increases by one (for example, from a d4 to a d6).\n \u2022 You learn the spells See Invisibility and True Seeing, each of which you can cast once without expending a spell slot or using a material component. Intelligence is your spellcasting ability for these spells. Once you cast a spell using this feature, and you must finish a long rest before you can do so again.",
		description : "My Intuition Die increases with one step (d4 to d6, for example). I can cast See Invisibility and True Seeing each once per long rest without using spell slots or requiring material components. Intelligence is my spellcasting ability for these. [+1 Charisma or Intelligence]",
		scorestxt : "+1 Charisma or Intelligence",
		spellcastingBonus : {
			name : "1\xD7 per long",
			spells : ["see invisibility", "true seeing"],
			selection : ["see invisibility", "true seeing"],
			spellcastingAbility : 4,
			firstCol : 'oncelr',
			times : 2
		},
		spellChanges : {
			"see invisibility" : {
				components : "V,S",
				compMaterial : "",
				changes : "Spells cast through my Greater Dragonmark don't require material components."
			},
			"true seeing" : {
				components : "V,S",
				compMaterial : "",
				description : "1 willing crea gains truesight 120 ft; see through illusions, hidden doors, ethereal plane",
				changes : "Spells cast through my Greater Dragonmark don't require material components."
			}
		}
	},
	"finding" : {
		prerequisite : "Being level 8 or higher and possessing the Dragonmark of Finding",
		prereqeval : function(v) { return v.characterLevel > 7 && (/^(?=.*dragonmark)(?=.*finding).*$/i).test(CurrentRace.known); },
		descriptionFull : "Your dragonmark has grown in size and power. This enhances your existing dragonmark, and the benefits are based on the mark that you already possess. A greater dragonmark provides the following benefits:\n \u2022 Increase your Dexterity, Strength, or Wisdom score by 1, to a maximum of 20.\n \u2022 The die type of your dragonmarked Intuition Die increases by one (for example, from a d4 to a d6).\n \u2022 You learn the spells Locate Creature and Find the Path, each of which you can cast once without expending a spell slot or using a material component. Wisdom is your spellcasting ability for these spells. Once you cast a spell using this feature, and you must finish a long rest before you can do so again.",
		description : "My Intuition Die increases with one step (d4 to d6, for example). I can cast Locate Creature and Find the Path each once per long rest without using spell slots or requiring material components. Wisdom is my spellcasting ability for these. [+1 " + (typePF ? "Strength, Dexterity, or Wisdom]" : "Str, Dex, or Wis]"),
		scorestxt : "+1 Strength, Dexterity, or Wisdom",
		spellcastingBonus : {
			name : "1\xD7 per long",
			spells : ["locate creature", "find the path"],
			selection : ["locate creature", "find the path"],
			spellcastingAbility : 5,
			firstCol : 'oncelr',
			times : 2
		},
		spellChanges : {
			"locate creature" : {
				components : "V,S",
				compMaterial : "",
				changes : "Spells cast through my Greater Dragonmark don't require material components."
			},
			"find the path" : {
				components : "V,S",
				compMaterial : "",
				description : "Know the shortest route to a location I am familiar with and are on the same plane with",
				changes : "Spells cast through my Greater Dragonmark don't require material components."
			}
		}
	},
	"handling" : {
		prerequisite : "Being level 8 or higher and possessing the Dragonmark of Handling",
		prereqeval : function(v) { return v.characterLevel > 7 && (/^(?=.*dragonmark)(?=.*handling).*$/i).test(CurrentRace.known); },
		descriptionFull : "Your dragonmark has grown in size and power. This enhances your existing dragonmark, and the benefits are based on the mark that you already possess. A greater dragonmark provides the following benefits:\n \u2022 Increase your Dexterity or Wisdom score by 1, to a maximum of 20.\n \u2022 The die type of your dragonmarked Intuition Die increases by one (for example, from a d4 to a d6).\n \u2022 You learn the spells Beast Sense and Dominate Beast, each of which you can cast once without expending a spell slot or using a material component. Wisdom is your spellcasting ability for these spells. Once you cast a spell using this feature, and you must finish a long rest before you can do so again.",
		description : "My Intuition Die increases with one step (d4 to d6, for example). I can cast Beast Sense and Dominate Beast each once per long rest without using spell slots or requiring material components. Wisdom is my spellcasting ability for these. [+1 Dexterity or Wisdom]",
		scorestxt : "+1 Dexterity or Wisdom",
		spellcastingBonus : {
			name : "1\xD7 per long",
			spells : ["beast sense", "dominate beast"],
			selection : ["beast sense", "dominate beast"],
			spellcastingAbility : 5,
			firstCol : 'oncelr',
			times : 2
		}
	},
	"healing" : {
		prerequisite : "Being level 8 or higher and possessing the Dragonmark of Healing",
		prereqeval : function(v) { return v.characterLevel > 7 && (/^(?=.*dragonmark)(?=.*healing).*$/i).test(CurrentRace.known); },
		descriptionFull : "Your dragonmark has grown in size and power. This enhances your existing dragonmark, and the benefits are based on the mark that you already possess. A greater dragonmark provides the following benefits:\n \u2022 Increase your Dexterity or Wisdom score by 1, to a maximum of 20.\n \u2022 The die type of your dragonmarked Intuition Die increases by one (for example, from a d4 to a d6).\n \u2022 You learn the spells Mass Healing Word and Greater Restoration, each of which you can cast once without expending a spell slot or using a material component. Wisdom is your spellcasting ability for these spells. Once you cast a spell using this feature, and you must finish a long rest before you can do so again.",
		description : "My Intuition Die increases with one step (d4 to d6, for example). I can cast Mass Healing Word and Greater Restoration each once per long rest without using spell slots or requiring material components. Wisdom is my spellcasting ability for these. [+1 Dexterity or Wisdom]",
		scorestxt : "+1 Dexterity or Wisdom",
		spellcastingBonus : {
			name : "1\xD7 per long",
			spells : ["mass healing word", "greater restoration"],
			selection : ["mass healing word", "greater restoration"],
			spellcastingAbility : 5,
			firstCol : 'oncelr',
			times : 2
		},
		spellChanges : {
			"greater restoration" : {
				components : "V,S",
				compMaterial : "",
				description : "Reduce exhaustion or end charm, petrify, curse, stat or max HP reduction",
				changes : "Spells cast through my Greater Dragonmark don't require material components."
			}
		}
	},
	"hospitality" : {
		prerequisite : "Being level 8 or higher and possessing the Dragonmark of Hospitality",
		prereqeval : function(v) { return v.characterLevel > 7 && (/^(?=.*dragonmark)(?=.*hospitality).*$/i).test(CurrentRace.known); },
		descriptionFull : "Your dragonmark has grown in size and power. This enhances your existing dragonmark, and the benefits are based on the mark that you already possess. A greater dragonmark provides the following benefits:\n \u2022 Increase your Dexterity or Charisma score by 1, to a maximum of 20.\n \u2022 The die type of your dragonmarked Intuition Die increases by one (for example, from a d4 to a d6).\n \u2022 You learn the spells Sanctuary and Mordenkainen's Magnificent Mansion, each of which you can cast once without expending a spell slot or using a material component. Charisma is your spellcasting ability for these spells. Once you cast a spell using this feature, and you must finish a long rest before you can do so again.",
		description : "My Intuition Die increases with one step (d4 to d6, for example). I can cast Sanctuary and " + (typePF ? "Mordenkainen's " : "") + "Magnificent Mansion each once per long rest without using spell slots or requiring material components. Charisma is my spellcasting ability for these. [+1 Dexterity or Charisma]",
		scorestxt : "+1 Dexterity or Charisma",
		spellcastingBonus : {
			name : "1\xD7 per long",
			spells : ["sanctuary", "mordenkainen's magnificent mansion"],
			selection : ["sanctuary", "mordenkainen's magnificent mansion"],
			spellcastingAbility : 6,
			firstCol : 'oncelr',
			times : 2
		},
		spellChanges : {
			"sanctuary" : {
				components : "V,S",
				compMaterial : "",
				changes : "Spells cast through my Greater Dragonmark don't require material components."
			},
			"mordenkainen's magnificent mansion" : {
				components : "V,S",
				compMaterial : "",
				description : "Create extradimensional mansion with rooms, food and servants to serve 100 people; see book",
				changes : "Spells cast through my Greater Dragonmark don't require material components."
			}
		}
	},
	"making" : {
		prerequisite : "Being level 8 or higher and possessing the Dragonmark of Making",
		prereqeval : function(v) { return v.characterLevel > 7 && (/^(?=.*dragonmark)(?=.*making).*$/i).test(CurrentRace.known); },
		descriptionFull : "Your dragonmark has grown in size and power. This enhances your existing dragonmark, and the benefits are based on the mark that you already possess. A greater dragonmark provides the following benefits:\n \u2022 Increase your Dexterity or Intelligence score by 1, to a maximum of 20.\n \u2022 The die type of your dragonmarked Intuition Die increases by one (for example, from a d4 to a d6).\n \u2022 You learn the spells Fabricate and Creation, each of which you can cast once without expending a spell slot or using a material component. Intelligence is your spellcasting ability for these spells. Once you cast a spell using this feature, and you must finish a long rest before you can do so again.",
		description : "My Intuition Die increases with one step (d4 to d6, for example). I can cast Fabricate and Creation each once per long rest without using spell slots or requiring material components. Intelligence is my spellcasting ability for these. [+1 Dexterity or Intelligence]",
		scorestxt : "+1 Dexterity or Intelligence",
		spellcastingBonus : {
			name : "1\xD7 per long",
			spells : ["fabricate", "creation"],
			selection : ["fabricate", "creation"],
			spellcastingAbility : 4,
			firstCol : 'oncelr',
			times : 2
		},
		spellChanges : {
			"creation" : {
				components : "V,S",
				compMaterial : "",
				changes : "Spells cast through my Greater Dragonmark don't require material components."
			}
		}
	},
	"passage" : {
		prerequisite : "Being level 8 or higher and possessing the Dragonmark of Passage",
		prereqeval : function(v) { return v.characterLevel > 7 && (/^(?=.*dragonmark)(?=.*passage).*$/i).test(CurrentRace.known); },
		descriptionFull : "Your dragonmark has grown in size and power. This enhances your existing dragonmark, and the benefits are based on the mark that you already possess. A greater dragonmark provides the following benefits:\n \u2022 Increase your Dexterity or Constitution score by 1, to a maximum of 20.\n \u2022 The die type of your dragonmarked Intuition Die increases by one (for example, from a d4 to a d6).\n \u2022 You learn the spells Blink and Teleportation Circle, each of which you can cast once without expending a spell slot or using a material component. Constitution is your spellcasting ability for these spells. Once you cast a spell using this feature, and you must finish a long rest before you can do so again.",
		description : "My Intuition Die increases with one step (d4 to d6, for example). I can cast Blink and Teleportation Circle each once per long rest without using spell slots or requiring material components. Constitution is my spellcasting ability for these. [+1 Dexterity or Constitution]",
		scorestxt : "+1 Dexterity or Constitution",
		spellcastingBonus : {
			name : "1\xD7 per long",
			spells : ["blink", "teleportation circle"],
			selection : ["blink", "teleportation circle"],
			spellcastingAbility : 3,
			firstCol : 'oncelr',
			times : 2
		},
		spellChanges : {
			"teleportation circle" : {
				components : "V,S",
				compMaterial : "",
				description : "Create a circle to teleport to another teleportation circle on same plane; see book",
				changes : "Spells cast through my Greater Dragonmark don't require material components."
			}
		}
	},
	"scribing" : {
		prerequisite : "Being level 8 or higher and possessing the Dragonmark of Scribing",
		prereqeval : function(v) { return v.characterLevel > 7 && (/^(?=.*dragonmark)(?=.*scribing).*$/i).test(CurrentRace.known); },
		descriptionFull : "Your dragonmark has grown in size and power. This enhances your existing dragonmark, and the benefits are based on the mark that you already possess. A greater dragonmark provides the following benefits:\n \u2022 Increase your Intelligence or Charisma score by 1, to a maximum of 20.\n \u2022 The die type of your dragonmarked Intuition Die increases by one (for example, from a d4 to a d6).\n \u2022 You learn the spells Sending and Tongues, each of which you can cast once without expending a spell slot or using a material component. Intelligence is your spellcasting ability for these spells. Once you cast a spell using this feature, and you must finish a short or long rest before you can do so again.",
		description : "My Intuition Die increases with one step (d4 to d6, for example). I can cast Sending and Tongues each once per short rest without using spell slots or requiring material components. Intelligence is my spellcasting ability for these. [+1 Intelligence or Charisma]",
		scorestxt : "+1 Intelligence or Charisma",
		spellcastingBonus : {
			name : "1\xD7 per short",
			spells : ["sending", "tongues"],
			selection : ["sending", "tongues"],
			spellcastingAbility : 4,
			firstCol : 'oncesr',
			times : 2
		},
		spellChanges : {
			"sending" : {
				components : "V,S",
				compMaterial : "",
				changes : "Spells cast through my Greater Dragonmark don't require material components."
			},
			"tongues" : {
				components : "V,S",
				compMaterial : "",
				changes : "Spells cast through my Greater Dragonmark don't require material components."
			}
		}
	},
	"sentinel" : {
		prerequisite : "Being level 8 or higher and possessing the Dragonmark of Sentinel",
		prereqeval : function(v) { return v.characterLevel > 7 && (/^(?=.*dragonmark)(?=.*sentinel).*$/i).test(CurrentRace.known); },
		descriptionFull : "Your dragonmark has grown in size and power. This enhances your existing dragonmark, and the benefits are based on the mark that you already possess. A greater dragonmark provides the following benefits:\n \u2022 Increase your Strength or Wisdom score by 1, to a maximum of 20.\n \u2022 The die type of your dragonmarked Intuition Die increases by one (for example, from a d4 to a d6).\n \u2022 You learn the spells Compelled Duel, Warding Bond, each of which you can cast once without expending a spell slot or using a material component. Wisdom is your spellcasting ability for these spells. Once you cast a spell using this feature, and you must finish a short or long rest before you can do so again.",
		description : "My Intuition Die increases with one step (d4 to d6, for example). I can cast Compelled Duel and Warding Bond each once per short rest without using spell slots or requiring material components. Wisdom is my spellcasting ability for these. [+1 Strength or Wisdom]",
		scorestxt : "+1 Strength or Wisdom",
		spellcastingBonus : {
			name : "1\xD7 per short",
			spells : ["compelled duel", "warding bond"],
			selection : ["compelled duel", "warding bond"],
			spellcastingAbility : 5,
			firstCol : 'oncesr',
			times : 2
		},
		spellChanges : {
			"warding bond" : {
				components : "V,S",
				compMaterial : "",
				description : "1 crea +1 AC, +1 saves, resistance all dmg; if it takes dmg I take same dmg; ends if >60 ft away",
				changes : "Spells cast through my Greater Dragonmark don't require material components."
			}
		}
	},
	"shadow" : {
		prerequisite : "Being level 8 or higher and possessing the Dragonmark of Shadow",
		prereqeval : function(v) { return v.characterLevel > 7 && (/^(?=.*dragonmark)(?=.*shadow).*$/i).test(CurrentRace.known); },
		descriptionFull : "Your dragonmark has grown in size and power. This enhances your existing dragonmark, and the benefits are based on the mark that you already possess. A greater dragonmark provides the following benefits:\n \u2022 Increase your Dexterity or Charisma score by 1, to a maximum of 20.\n \u2022 The die type of your dragonmarked Intuition Die increases by one (for example, from a d4 to a d6).\n \u2022 You learn the spells Nondetection and Mislead, each of which you can cast once without expending a spell slot or using a material component. Charisma is your spellcasting ability for these spells. Once you cast a spell using this feature, and you must finish a long rest before you can do so again.",
		description : "My Intuition Die increases with one step (d4 to d6, for example). I can cast Nondetection and Mislead each once per long rest without using spell slots or requiring material components. Charisma is my spellcasting ability for these. [+1 Dexterity or Charisma]",
		scorestxt : "+1 Dexterity or Charisma",
		spellcastingBonus : {
			name : "1\xD7 per long",
			spells : ["nondetection", "mislead"],
			selection : ["nondetection", "mislead"],
			spellcastingAbility : 6,
			firstCol : 'oncelr',
			times : 2
		},
		spellChanges : {
			"nondetection" : {
				components : "V,S",
				compMaterial : "",
				description : "1 crea or object up to 10 cu ft hidden from all divination magic",
				changes : "Spells cast through my Greater Dragonmark don't require material components."
			}
		}
	},
	"storm" : {
		prerequisite : "Being level 8 or higher and possessing the Dragonmark of Storm",
		prereqeval : function(v) { return v.characterLevel > 7 && (/^(?=.*dragonmark)(?=.*storm).*$/i).test(CurrentRace.known); },
		descriptionFull : "Your dragonmark has grown in size and power. This enhances your existing dragonmark, and the benefits are based on the mark that you already possess. A greater dragonmark provides the following benefits:\n \u2022 Increase your Dexterity or Charisma score by 1, to a maximum of 20.\n \u2022 The die type of your dragonmarked Intuition Die increases by one (for example, from a d4 to a d6).\n \u2022 You learn the spells Control Water and Control Winds, each of which you can cast once without expending a spell slot or using a material component. Charisma is your spellcasting ability for these spells. Once you cast a spell using this feature, and you must finish a long rest before you can do so again.",
		description : "My Intuition Die increases with one step (d4 to d6, for example). I can cast Control Water and Control Winds each once per long rest without using spell slots or requiring material components. Charisma is my spellcasting ability for these. [+1 Dexterity or Charisma]",
		scorestxt : "+1 Dexterity or Charisma",
		spellcastingBonus : {
			name : "1\xD7 per long",
			spells : ["control water", "control winds"],
			selection : ["control water", "control winds"],
			spellcastingAbility : 6,
			firstCol : 'oncelr',
			times : 2
		},
		spellChanges : {
			"control water" : {
				components : "V,S",
				compMaterial : "",
				changes : "Spells cast through my Greater Dragonmark don't require material components."
			}
		}
	},
	"warding" : {
		prerequisite : "Being level 8 or higher and possessing the Dragonmark of Warding",
		prereqeval : function(v) { return v.characterLevel > 7 && (/^(?=.*dragonmark)(?=.*warding).*$/i).test(CurrentRace.known); },
		descriptionFull : "Your dragonmark has grown in size and power. This enhances your existing dragonmark, and the benefits are based on the mark that you already possess. A greater dragonmark provides the following benefits:\n \u2022 Increase your Dexterity or Intelligence score by 1, to a maximum of 20.\n \u2022 The die type of your dragonmarked Intuition Die increases by one (for example, from a d4 to a d6).\n \u2022 You learn the spells Knock, Glyph of Warding and Leomund's Secret Chest*, each of which you can cast once without expending a spell slot or using a material component. Intelligence is your spellcasting ability for these spells. Once you cast a spell using this feature, and you must finish a long rest before you can do so again.\n\n* To cast Leomund's Secret Chest using this feat, you must have a Siberys dragonshard with a value of at least 100 gp. While you have this dragonshard in hand, it serves as the spell's focus, and you can use it to summon and dismiss the chest.",
		description : "My Intuition Die increases one step. I can cast Knock, Secret Chest, and Glyph of Warding each once per long rest without spell slot or material component. Secret Chest requires a 100 gp Siberys dragonshard as a focus. These use Int as spellcasting ability. [+1 Dex or Int]",
		scorestxt : "+1 Dexterity or Intelligence",
		spellcastingBonus : [{
			name : "1\xD7 per long",
			spells : ["knock", "glyph of warding"],
			selection : ["knock", "glyph of warding"],
			spellcastingAbility : 4,
			firstCol : 'oncelr',
			times : 2
		}, {
			name : "with Siberys dragonshard",
			spells : ["leomund's secret chest"],
			selection : ["leomund's secret chest"],
			firstCol : 'oncelr'
		}],
		spellChanges : {
			"glyph of warding" : {
				components : "V,S",
				compMaterial : "",
				description : "Create a glyph that triggers on set condition; Int(Investigation) vs. Spell DC; see book",
				changes : "Spells cast through my Greater Dragonmark don't require material components."
			},
			"leomund's secret chest" : {
				compMaterial : "A Siberys dragonshard with a value of at least 100 gp",
				description : "Hide chest with content in Ethereal Plane for 60 days, after that chance of loss; 1 a reappear (100gp)",
				changes : "Leomund's Secret Chest cast through my Greater Dragonmark of Warding requires a Siberys dragonshard as a focus instead of an exquisite chest and its tiny replica."
			}
		}
	}
};

// Aberrant Dragonmark feat
FeatsList["aberrant dragonmark-ua"] = {
	name : "Aberrant Dragonmark",
	source : [["WGtE", 112], ["UA:D", 9]],
	prerequisite : "Not having a dragonmark",
	prereqeval : function(v) { return !(/dragonmark/i).test(CurrentRace.known); },
	descriptionFull : "You have manifested an aberrant dragonmark. Determine its appearance and the flaw associated with it (see the table below for examples). You gain the following benefits:\n \u2022 Increase your Constitution score by 1, to a maximum of 20.\n \u2022 You learn a cantrip from the sorcerer spell list. In addition, choose a 1st-level spell from the sorcerer spell list. You learn that spell and can cast it at its lowest level. Once you cast it, you must finish a long rest before you can cast it again. Constitution is your spellcasting ability for these spells.\n \u2022 You can increase the power of your aberrant spells at the risk of your own vitality. When you cast a spell with your aberrant mark, you can use one of your Hit Dice to increase the spell's level by 1. Immediately after you cast the spell, roll the Hit Die. You take damage equal to the number rolled.\n\n" + toUni("1d8") + "\t" + toUni("Aberrant Mark Flaw") + "\n1\tYour mark is a source of constant physical pain.\n2\tYour mark whispers to you, though you may not understand what it says.\n3\tIn times of stress, your mark may trigger a cantrip effect involuntarily.\n4\tThe skin around your mark has an unusual appearance: burned, scaly, withered, etc.\n5\tMundane animals become uneasy around you.\n6\tYou have dramatic mood swings any time you use your mark.\n7\tYour appearance changes in a minor way every time you use your mark.\n8\tYou have horrific nightmares after you use your mark.",
	description : "I learn a sorcerer cantrip and a 1st-level sorcerer spell, using Con as my spellcasting ability. I can cast the spell once per long rest without a spell slot. I can use a Hit Die when casting the spell, casting it as if with a level 2 spell slot and taking the HD as damage. [+1 Con]",
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
		firstCol : 'oncelr'
	}]
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
}
// Control Winds reprint (only in Unearthed Arcana article, not in WGtE)
if (!SpellsList["control winds"]) {
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
} // dupl_end
