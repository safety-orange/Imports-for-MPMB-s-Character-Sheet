var iFileName = "ua_20180910_Dragonmarks.js";
RequiredSheetVersion(12.999);
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

if (!SourceList.WGtE) {
	// Dragonmarks subraces
	RaceList["dragonmark detection half-elf"] = {
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
		improvements : "Half-Elf, Dragonmark of Detection: +1 Intelligence, +1 Charisma, and +1 to any one ability score of my choice;",
		scores : [0, 0, 0, 1, 0, 1],
		trait : "Half-Elf, Dragonmark of Detection (+1 Intelligence, +1 Charisma, and +1 to any one ability score of my choice)\n" + (typePF ? "\n" : "   ") + "Deductive Intuition: I can add my Intuition Die (1d4) to my Intelligence (Investigation) and Wisdom (Insight) checks.\n" + (typePF ? "\n" : "   ") + "Sense Threats: I can cast Detect Magic and Detect Poison and Disease as rituals using Intelligence as my spellcasting ability.",
		spellcastingAbility : 4,
		spellcastingBonus : {
			name : "Sense Threats",
			spells : ["detect magic", "detect poison and disease"],
			selection : ["detect magic", "detect poison and disease"],
			firstCol : "(R)",
			times : 2
		}
	};
	RaceList["dragonmark finding half-orc"] = {
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
		improvements : "Half-Orc, Dragonmark of Finding: +1 Strength, +1 Wisdom, and +1 to any one ability score of my choice;",
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
				}
			}
		}
	};
	RaceList["dragonmark handling human"] = {
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
		improvements : "Human, Dragonmark of Handling: +1 Dexterity, +1 Wisdom, and +1 to any one ability score of my choice;",
		scores : [0, 1, 0, 0, 1, 0],
		trait : "Human, Dragonmark of Handling (+1 Dexterity, +1 Wisdom, +1 to any one ability score)\n   Wild Intuition: I can add my Intuition Die (1d4) to my Wisdom (Animal Handling) and Intelligence (Nature) checks.\n   Expert Handling: I can use the Help action to aid an ally animal companion or mount even when they are within 30 ft of me, rather than just within 5 ft.\n   Primal Connection: I can cast Animal Friendship once per short rest using Wisdom as my spellcasting ability.",
		spellcastingAbility : 5,
		features : {
			"animal friendship" : {
				name : "Animal Friendship",
				minlevel : 1,
				usages : 1,
				recovery : "short rest",
				tooltip : " (Primal Connection)",
				spellcastingBonus : {
					name : "Primal Connection",
					spells : ["animal friendship"],
					selection : ["animal friendship"],
					oncesr : true
				}
			}
		}
	};
	RaceList["dragonmark healing halfling"] = {
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
		improvements : "Halfling, Dragonmark of Healing: +2 Dexterity, +1 Wisdom;",
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
			atwill : true
		}
	};
	RaceList["dragonmark hospitality halfling"] = {
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
		improvements : "Halfling, Dragonmark of Hospitality: +2 Dexterity, +1 Charisma;",
		scores : [0, 2, 0, 0, 0, 1],
		trait : "Halfling, Dragonmark of Hospitality (+2 Dexterity, +1 Charisma)\nLucky: When I roll a 1 on an attack roll, ability check, or saving throw, I can reroll the die and must use the new roll.\nHalfling Nimbleness: I can move through the space of Medium and larger creatures.\nEver Hospitable: I can add my Intuition Die (1d4) to my Charisma (Persuasion) checks and ability checks involving brewer's supplies or cook's utensils.\nInnkeeper's Charms: I know Friends and Prestidigitation with Cha as my spellcasting ability.",
		spellcastingAbility : 6,
		spellcastingBonus : {
			name : "Innkeeper's Charms",
			spells : ["friends", "prestidigitation"],
			selection : ["friends", "prestidigitation"],
			atwill : true,
			times : 2
		}
	};
	RaceList["dragonmark making human"] = {
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
		improvements : "Human, Dragonmark of Making: +1 Dexterity, +1 Intelligence, and +1 to any one ability score of my choice;",
		scores : [0, 1, 0, 1, 0, 0],
		trait : "Human, Dragonmark of Making (+1 Dex" + (typePF ? ", +1 Int, +1 to one ability" : "terity, +1 Intelligence, +1 to any one ability score") + ")\nArtisan's Intuition: I can add my Intuition Die (1d4) to ability checks with artisan's tools.\nMagecraft: I can create a magic item that gives me the ability to cast one wizard cantrip of my choice, using Intelligence as my spellcasting ability. This works while the item is in my possession. At the end of a long rest, I can replace it with a new item and cantrip.\nSpellsmith: Once per long rest, I can spend 1 minute to make a nonmagical armor or weapon gain a +1 bonus for the next hour. Maker's Gift: I know the mending cantrip.",
		features : {
			"spellsmith" : {
				name : "Spellsmith",
				minlevel : 1,
				usages : 1,
				recovery : "long rest"
			}
		},
		eval : "CurrentSpells['dragonmark making human'] = {name : 'Human (dragonmark)', ability : 4, list : { 'class' : sheetVersion < 13 ? 'wizard' : 'dragonmark making human', level : [0, 0] }, known : {cantrips : 1, spells : sheetVersion < 13 ? false : 'list'}, bonus : {bonus1 : {name : \"Maker's Gift\", spells : ['mending'], selection : ['mending'], atwill : true}}, typeList : 2 }; SetStringifieds('spells');",
		removeeval : "delete CurrentSpells['dragonmark making human']; SetStringifieds('spells');"
	};
	RunFunctionAtEnd(function() { // make the spell list for the 'making dragonmark human' in v13 and later
		if (sheetVersion < 13) return;
		for (var sp in SpellsList) {
			var aSp = SpellsList[sp];
			if (aSp.level !== undefined && aSp.level === 0 && aSp.classes && aSp.classes.indexOf('wizard') !== -1) aSp.classes.push('dragonmark making human');
		}
	});
	RaceList["dragonmark passage human-ua-d"] = { // different in Unearthed Arcana
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
		improvements : "Human, Dragonmark of Passage: +2 Dexterity and +1 to another ability score of my choice;",
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
	RaceList["dragonmark scribing gnome"] = {
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
		improvements : "Gnome, Dragonmark of Scribing: +2 Intelligence, +1 Charisma;",
		scores : [0, 1, 0, 2, 0, 0],
		trait : "Gnome, Dragonmark of Scribing (+2 Intelligence, +1 Charisma)\n   Gifted Scribe: I can add my Intuition Die (1d4) to ability checks involving calligrapher's supplies or forgery kits. I am proficient with both of these tools.\n   Whispering Wind: I know the Message cantrip.\n   Scribe's Insight: I can cast Comprehend Languages once per long rest.\nIntelligence is my spellcasting ability for the spells gained from being a gnome, dragonmark of scribing.",
		spellcastingAbility : 4,
		spellcastingBonus : {
			name : "Whispering Wind",
			spells : ["message"],
			selection : ["message"],
			atwill : true
		},
		features : {
			"comprehend languages" : {
				name : "Comprehend Languages",
				minlevel : 1,
				usages : 1,
				recovery : "long rest",
				tooltip : " (Scribe's Insight)",
				spellcastingBonus : {
					name : "Scribe's Insight",
					spells : ["comprehend languages"],
					selection : ["comprehend languages"],
					oncelr : true
				}
			}
		}
	};
	RaceList["dragonmark sentinel human"] = {
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
		improvements : "Human, Dragonmark of Sentinel: +1 Strength, +1 Wisdom, and +1 to any one ability score of my choice;",
		scores : [1, 0, 0, 0, 1, 0],
		trait : "Human, Dragonmark of Sentinel (+1 Str" + (typePF ? ", +1 Wis, +1 to one ability" : "ength, +1 Wisdom, +1 to any one ability score") + ")\n   Sentinel's Intuition: I can add my Intuition Die (1d4) to Initiative rolls and my Wisdom (Perception) checks.\n   Sentinel's Shield: I know the Blade Ward cantrip. I can cast Shield once per short rest.\n   Vigilant Guardian: As an action, I can designate an ally as my ward, gaining adv. on Insight and Perception checks to spot threats to it. As a reaction when I see my ward being attacked while within 5 ft, I can swap places with it, becoming the target of the attack.",
		features : {
			"shield" : {
				name : "Shield (spell)",
				minlevel : 1,
				usages : 1,
				recovery : "short rest",
				action : ["reaction", ""],
				tooltip : " (Sentinel's Shield)",
				spellcastingBonus : [{
					name : "Sentinel's Shield",
					spells : ["blade ward"],
					selection : ["blade ward"],
					atwill : true
				}, {
					name : "Sentinel's Shield",
					spells : ["shield"],
					selection : ["shield"],
					oncesr : true
				}]
			}
		},
		eval : "AddAction('action', 'Vigilant Guardian (designate ward)', 'being a Human, Dragonmark of Sentinel'); AddAction('reaction', 'Vigilant Guardian (swap with ward)', 'being a Human, Dragonmark of Sentinel');",
		removeeval : "RemoveAction('action', 'Vigilant Guardian (designate ward)'); RemoveAction('reaction', 'Vigilant Guardian (swap with ward)');",
	};
	RaceList["dragonmark shadow elf"] = {
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
		improvements : "Elf, Dragonmark of Shadow: +2 Dexterity, +1 Charisma;",
		scores : [0, 2, 0, 0, 0, 1],
		trait : "Elf, Dragonmark of Shadow (+2 Dexterity, +1 Charisma)\nTrance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. This gives the same benefit as a human gets from 8 hours of sleep (long rest takes only 4 hours).\nGift of the Shadows: I can add my Intuition Die (1d4) to Performance and Stealth checks.\nShape Shadows: I know the Minor Illusion cantrip using Charisma as my spellcasting ability.\nSlip Into Shadow: As a bonus action once per short rest, I can use the Hide action even while I have no cover or if I'm being observed.",
		spellcastingAbility : 6,
		spellcastingBonus : {
			name : "Shape Shadows",
			spells : ["minor illusion"],
			selection : ["minor illusion"],
			atwill : true
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
	AddRacialVariant("dragonmark shadow elf", "performance, ", {
		regExpSearch : /performance/i,
		source : [["WGtE", 105], ["UA:D", 6]],
		skills : ["Perception", "Performance"],
		skillstxt : ""
	});
	AddRacialVariant("dragonmark shadow elf", "musical instrument, ", {
		regExpSearch : /musical instrument/i,
		source : [["WGtE", 105], ["UA:D", 6]],
		skillstxt : "",
		toolProfs : [["Musical instrument", 1]]
	});
	RaceList["dragonmark storm half-elf"] = {
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
		improvements : "Half-Elf, Dragonmark of Storm: +1 Dexterity, +1 Charisma, and +1 to any one ability score of my choice;",
		scores : [0, 1, 0, 0, 0, 1],
		trait : "Half-Elf, Dragonmark of Storm (+1 Dexterity, +1 Charisma, and +1 to any one ability score of my choice)\n" + (typePF ? "\n" : "   ") + "Windwright's Intuition: I can add my Intuition Die (1d4) to my Dexterity (Acrobatics) checks and any ability checks involving operating or maintaining a water or air vehicle.\n" + (typePF ? "\n" : "   ") + "Headwinds: I know the Gust cantrip. Once I reach 3rd level, I can cast Gust of Wind once per long rest. Charisma is my spellcasting ability for these spells.",
		spellcastingAbility : 6, // Not mentioned in WGtE, but essential!
		spellcastingBonus : {
			name : "Headwinds",
			spells : ["gust"],
			selection : ["gust"],
			atwill : true
		},
		features : {
			"gust of wind" : {
				name : "Gust of Wind",
				minlevel : 3,
				usages : 1,
				recovery : "long rest",
				tooltip : " (Headwinds)",
				spellcastingBonus : {
					name : "Headwinds (level 3)",
					spells : ["gust of wind"],
					selection : ["gust of wind"],
					oncelr : true
				}
			}
		}
	};
	RaceList["dragonmark warding dwarf"] = {
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
		weaponprofs : [false, false, ["battleaxe", "handaxe", "warhammer", "light hammer"]],
		toolProfs : [["Smith, brewer, or mason tools", 1]],
		age : " are considered young until they are 50 and live about 350 years",
		height : " stand between 4 and 5 feet tall (4' + 2d4\")",
		weight : " weigh around 150 lb (130 + 2d4 \xD7 2d6 lb)",
		heightMetric : " stand between 1,2 and 1,5 metres tall (120 + 5d4 cm)",
		weightMetric : " weigh around 75 kg (60 + 5d4 \xD7 4d6 / 10 kg)",
		improvements : "Dwarf, Dragonmark of Warding: +1 Dexterity, +2 Constitution, +1 Intelligence;",
		scores : [0, 1, 2, 1, 0, 0],
		trait : "Dwarf, Dragonmark of Warding (+1 Dex" + (typePF ? ", +2 Con, +1 Int" : "terity, +2 Constitution, +1 Intelligence") + ")\n   Stonecunning: When I make an Intelligence (History) check related to the origin of stonework, I am considered having expertise in the History skill.\n   Master of Locks: I can add my Intuition Die (1d4) to Intelligence (History), Intelligence (Investigation), and ability checks with thieves' tools, if it involves lock or trap mechanisms.\n   Wards and Seals: I can cast Alarm as a ritual. Once I reach 3rd level, I can cast Arcane Lock once per long rest. Intelligence is my spellcasting ability for these.",
		spellcastingAbility : 4,
		spellcastingBonus : {
			name : "Wards and Seals",
			spells : ["alarm"],
			selection : ["alarm"],
			firstCol : "(R)"
		},
		features : {
			"arcane lock" : {
				name : "Arcane Lock",
				minlevel : 3,
				usages : 1,
				recovery : "long rest",
				tooltip : " (Wards and Seals)",
				spellcastingBonus : {
					name : "Wards and Seals (level 3)",
					spells : ["arcane lock"],
					selection : ["arcane lock"],
					oncelr : true
				}
			}
		}
	};

	// Gust cantrip reprint
	if (!SpellsList["gust"]) {
		SpellsList["gust"] = {
			name : "Gust",
			classes : ["druid", "sorcerer", "wizard"],
			source : [["WGtE", 107], ["X", 157], ["E", 19], ["UA:D", 6]],
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

	// Greater Dragonmark feats
	FeatsList["greater dragonmark [detection]"] = {
		name : "Greater Dragonmark [Detection]",
		source : [["WGtE", 110], ["UA:D", 7]],
		prerequisite : "Being level 8 or higher and possessing the Dragonmark of Detection",
		prereqeval : "Number(What('Character Level')) > 7 && (/^(?=.*dragonmark)(?=.*detection).*$/i).test(CurrentRace.known)",
		description : "My Intuition Die increases with one step (for example d4 to d6). I can cast See Invisibility and True Seeing each once per long rest without using spell slots or requiring material components. Intelligence is my spellcasting ability for these. [+1 Charisma or Intelligence]",
		improvements : "Greater Dragonmark [Detection]: +1 Charisma or Intelligence;",
		spellcastingBonus : {
			name : "1\u00D7 per long",
			spells : ["see invisibility", "true seeing"],
			selection : ["see invisibility", "true seeing"],
			spellcastingAbility : 4,
			oncelr : true,
			times : 2
		},
		eval : "var raceTrait = Value('Racial Traits'); if ((/my Intuition Die \(1d4\)/i).test(raceTrait)) { What('Racial Traits', raceTrait.replace(/my Intuition Die \(1d4\)/i, 'my Intuition Die (1d6)'); ) }; ",
		removeeval : "var raceTrait = Value('Racial Traits'); if ((/my Intuition Die \(1d6\)/i).test(raceTrait)) { What('Racial Traits', raceTrait.replace(/my Intuition Die \(1d6\)/i, 'my Intuition Die (1d4)'); ) }; "
	};
	FeatsList["greater dragonmark [finding]"] = {
		name : "Greater Dragonmark [Finding]",
		source : [["WGtE", 110], ["UA:D", 7]],
		prerequisite : "Being level 8 or higher and possessing the Dragonmark of Finding",
		prereqeval : "Number(What('Character Level')) > 7 && (/^(?=.*dragonmark)(?=.*finding).*$/i).test(CurrentRace.known)",
		description : "My Intuition Die increases with one step (for example d4 to d6). I can cast Locate Creature and Find the Path each once per long rest without using spell slots or requiring material components. Wisdom is my spellcasting ability for these. [+1 " + (typePF ? "Strength, Dexterity, or Wisdom]" : "Str, Dex, or Wis]"),
		improvements : "Greater Dragonmark [Finding]: +1 Strength, Dexterity, or Wisdom;",
		spellcastingBonus : {
			name : "1\u00D7 per long",
			spells : ["locate creature", "find the path"],
			selection : ["locate creature", "find the path"],
			spellcastingAbility : 5,
			oncelr : true,
			times : 2
		},
		eval : "var raceTrait = Value('Racial Traits'); if ((/my Intuition Die \(1d4\)/i).test(raceTrait)) { What('Racial Traits', raceTrait.replace(/my Intuition Die \(1d4\)/i, 'my Intuition Die (1d6)'); ) }; ",
		removeeval : "var raceTrait = Value('Racial Traits'); if ((/my Intuition Die \(1d6\)/i).test(raceTrait)) { What('Racial Traits', raceTrait.replace(/my Intuition Die \(1d6\)/i, 'my Intuition Die (1d4)'); ) }; "
	};
	FeatsList["greater dragonmark [handling]"] = {
		name : "Greater Dragonmark [Handling]",
		source : [["WGtE", 110], ["UA:D", 7]],
		prerequisite : "Being level 8 or higher and possessing the Dragonmark of Handling",
		prereqeval : "Number(What('Character Level')) > 7 && (/^(?=.*dragonmark)(?=.*handling).*$/i).test(CurrentRace.known)",
		description : "My Intuition Die increases with one step (for example d4 to d6). I can cast Beast Sense and Dominate Beast each once per long rest without using spell slots or requiring material components. Wisdom is my spellcasting ability for these. [+1 Dexterity or Wisdom]",
		improvements : "Greater Dragonmark [Handling]: +1 Dexterity or Wisdom;",
		spellcastingBonus : {
			name : "1\u00D7 per long",
			spells : ["beast sense", "dominate beast"],
			selection : ["beast sense", "dominate beast"],
			spellcastingAbility : 5,
			oncelr : true,
			times : 2
		},
		eval : "var raceTrait = Value('Racial Traits'); if ((/my Intuition Die \(1d4\)/i).test(raceTrait)) { What('Racial Traits', raceTrait.replace(/my Intuition Die \(1d4\)/i, 'my Intuition Die (1d6)'); ) }; ",
		removeeval : "var raceTrait = Value('Racial Traits'); if ((/my Intuition Die \(1d6\)/i).test(raceTrait)) { What('Racial Traits', raceTrait.replace(/my Intuition Die \(1d6\)/i, 'my Intuition Die (1d4)'); ) }; "
	};
	FeatsList["greater dragonmark [healing]"] = {
		name : "Greater Dragonmark [Healing]",
		source : [["WGtE", 110], ["UA:D", 7]],
		prerequisite : "Being level 8 or higher and possessing the Dragonmark of Healing",
		prereqeval : "Number(What('Character Level')) > 7 && (/^(?=.*dragonmark)(?=.*healing).*$/i).test(CurrentRace.known)",
		description : "My Intuition Die increases with one step (for example d4 to d6). I can cast Mass Healing Word and Greater Restoration each once per long rest without using spell slots or requiring material components. Wisdom is my spellcasting ability for these. [+1 Dexterity or Wisdom]",
		improvements : "Greater Dragonmark [Healing]: +1 Dexterity or Wisdom;",
		spellcastingBonus : {
			name : "1\u00D7 per long",
			spells : ["mass healing word", "greater restoration"],
			selection : ["mass healing word", "greater restoration"],
			spellcastingAbility : 5,
			oncelr : true,
			times : 2
		},
		eval : "var raceTrait = Value('Racial Traits'); if ((/my Intuition Die \(1d4\)/i).test(raceTrait)) { What('Racial Traits', raceTrait.replace(/my Intuition Die \(1d4\)/i, 'my Intuition Die (1d6)'); ) }; ",
		removeeval : "var raceTrait = Value('Racial Traits'); if ((/my Intuition Die \(1d6\)/i).test(raceTrait)) { What('Racial Traits', raceTrait.replace(/my Intuition Die \(1d6\)/i, 'my Intuition Die (1d4)'); ) }; "
	};
	FeatsList["greater dragonmark [hospitality]"] = {
		name : "Greater Dragonmark [Hospitality]",
		source : [["WGtE", 110], ["UA:D", 7]],
		prerequisite : "Being level 8 or higher and possessing the Dragonmark of Hospitality",
		prereqeval : "Number(What('Character Level')) > 7 && (/^(?=.*dragonmark)(?=.*hospitality).*$/i).test(CurrentRace.known)",
		description : "My Intuition Die increases with one step (for example d4 to d6). I can cast Sanctuary and " + (typePF ? "Mordenkainen's " : "") + "Magnificent Mansion each once per long rest without using spell slots or requiring material components. Charisma is my spellcasting ability for these. [+1 Dexterity or Charisma]",
		improvements : "Greater Dragonmark [Hospitality]: +1 Dexterity or Charisma;",
		spellcastingBonus : {
			name : "1\u00D7 per long",
			spells : ["sanctuary", "mordenkainen's magnificent mansion"],
			selection : ["sanctuary", "mordenkainen's magnificent mansion"],
			spellcastingAbility : 6,
			oncelr : true,
			times : 2
		},
		eval : "var raceTrait = Value('Racial Traits'); if ((/my Intuition Die \(1d4\)/i).test(raceTrait)) { What('Racial Traits', raceTrait.replace(/my Intuition Die \(1d4\)/i, 'my Intuition Die (1d6)'); ) }; ",
		removeeval : "var raceTrait = Value('Racial Traits'); if ((/my Intuition Die \(1d6\)/i).test(raceTrait)) { What('Racial Traits', raceTrait.replace(/my Intuition Die \(1d6\)/i, 'my Intuition Die (1d4)'); ) }; "
	};
	FeatsList["greater dragonmark [making]"] = {
		name : "Greater Dragonmark [Making]",
		source : [["WGtE", 110], ["UA:D", 7]],
		prerequisite : "Being level 8 or higher and possessing the Dragonmark of Making",
		prereqeval : "Number(What('Character Level')) > 7 && (/^(?=.*dragonmark)(?=.*making).*$/i).test(CurrentRace.known)",
		description : "My Intuition Die increases with one step (for example d4 to d6). I can cast Fabricate and Creation each once per long rest without using spell slots or requiring material components. Intelligence is my spellcasting ability for these. [+1 Dexterity or Intelligence]",
		improvements : "Greater Dragonmark [Making]: +1 Dexterity or Intelligence;",
		spellcastingBonus : {
			name : "1\u00D7 per long",
			spells : ["fabricate", "creation"],
			selection : ["fabricate", "creation"],
			spellcastingAbility : 4,
			oncelr : true,
			times : 2
		},
		eval : "var raceTrait = Value('Racial Traits'); if ((/my Intuition Die \(1d4\)/i).test(raceTrait)) { What('Racial Traits', raceTrait.replace(/my Intuition Die \(1d4\)/i, 'my Intuition Die (1d6)'); ) }; ",
		removeeval : "var raceTrait = Value('Racial Traits'); if ((/my Intuition Die \(1d6\)/i).test(raceTrait)) { What('Racial Traits', raceTrait.replace(/my Intuition Die \(1d6\)/i, 'my Intuition Die (1d4)'); ) }; "
	};
	FeatsList["greater dragonmark [passage]"] = {
		name : "Greater Dragonmark [Passage]",
		source : [["WGtE", 110], ["UA:D", 7]],
		prerequisite : "Being level 8 or higher and possessing the Dragonmark of Passage",
		prereqeval : "Number(What('Character Level')) > 7 && (/^(?=.*dragonmark)(?=.*passage).*$/i).test(CurrentRace.known)",
		description : "My Intuition Die increases with one step (for example d4 to d6). I can cast Blink and Teleportation Circle each once per long rest without using spell slots or requiring material components. Constitution is my spellcasting ability for these. [+1 Dexterity or Constitution]",
		improvements : "Greater Dragonmark [Passage]: +1 Dexterity or Constitution;",
		spellcastingBonus : {
			name : "1\u00D7 per long",
			spells : ["blink", "teleportation circle"],
			selection : ["blink", "teleportation circle"],
			spellcastingAbility : 3,
			oncelr : true,
			times : 2
		},
		eval : "var raceTrait = Value('Racial Traits'); if ((/my Intuition Die \(1d4\)/i).test(raceTrait)) { What('Racial Traits', raceTrait.replace(/my Intuition Die \(1d4\)/i, 'my Intuition Die (1d6)'); ) }; ",
		removeeval : "var raceTrait = Value('Racial Traits'); if ((/my Intuition Die \(1d6\)/i).test(raceTrait)) { What('Racial Traits', raceTrait.replace(/my Intuition Die \(1d6\)/i, 'my Intuition Die (1d4)'); ) }; "
	};
	FeatsList["greater dragonmark [scribing]"] = {
		name : "Greater Dragonmark [Scribing]",
		source : [["WGtE", 110], ["UA:D", 7]],
		prerequisite : "Being level 8 or higher and possessing the Dragonmark of Scribing",
		prereqeval : "Number(What('Character Level')) > 7 && (/^(?=.*dragonmark)(?=.*scribing).*$/i).test(CurrentRace.known)",
		description : "My Intuition Die increases with one step (for example d4 to d6). I can cast Sending and Tongues each once per short rest without using spell slots or requiring material components. Intelligence is my spellcasting ability for these. [+1 Intelligence or Charisma]",
		improvements : "Greater Dragonmark [Scribing]: +1 Intelligence or Charisma;",
		spellcastingBonus : {
			name : "1\u00D7 per short",
			spells : ["sending", "tongues"],
			selection : ["sending", "tongues"],
			spellcastingAbility : 4,
			oncesr : true,
			times : 2
		},
		eval : "var raceTrait = Value('Racial Traits'); if ((/my Intuition Die \(1d4\)/i).test(raceTrait)) { What('Racial Traits', raceTrait.replace(/my Intuition Die \(1d4\)/i, 'my Intuition Die (1d6)'); ) }; ",
		removeeval : "var raceTrait = Value('Racial Traits'); if ((/my Intuition Die \(1d6\)/i).test(raceTrait)) { What('Racial Traits', raceTrait.replace(/my Intuition Die \(1d6\)/i, 'my Intuition Die (1d4)'); ) }; "
	};
	FeatsList["greater dragonmark [sentinel]"] = {
		name : "Greater Dragonmark [Sentinel]",
		source : [["WGtE", 110], ["UA:D", 7]],
		prerequisite : "Being level 8 or higher and possessing the Dragonmark of Sentinel",
		prereqeval : "Number(What('Character Level')) > 7 && (/^(?=.*dragonmark)(?=.*sentinel).*$/i).test(CurrentRace.known)",
		description : "My Intuition Die increases with one step (for example d4 to d6). I can cast Compelled Duel and Warding Bond each once per short rest without using spell slots or requiring material components. Wisdom is my spellcasting ability for these. [+1 Strength or Wisdom]",
		improvements : "Greater Dragonmark [Sentinel]: +1 Strength or Wisdom;",
		spellcastingBonus : {
			name : "1\u00D7 per short",
			spells : ["compelled duel", "warding bond"],
			selection : ["compelled duel", "warding bond"],
			spellcastingAbility : 5,
			oncesr : true,
			times : 2
		},
		eval : "var raceTrait = Value('Racial Traits'); if ((/my Intuition Die \(1d4\)/i).test(raceTrait)) { What('Racial Traits', raceTrait.replace(/my Intuition Die \(1d4\)/i, 'my Intuition Die (1d6)'); ) }; ",
		removeeval : "var raceTrait = Value('Racial Traits'); if ((/my Intuition Die \(1d6\)/i).test(raceTrait)) { What('Racial Traits', raceTrait.replace(/my Intuition Die \(1d6\)/i, 'my Intuition Die (1d4)'); ) }; "
	};
	FeatsList["greater dragonmark [shadow]"] = {
		name : "Greater Dragonmark [Shadow]",
		source : [["WGtE", 110], ["UA:D", 7]],
		prerequisite : "Being level 8 or higher and possessing the Dragonmark of Shadow",
		prereqeval : "Number(What('Character Level')) > 7 && (/^(?=.*dragonmark)(?=.*shadow).*$/i).test(CurrentRace.known)",
		description : "My Intuition Die increases with one step (for example d4 to d6). I can cast Nondetection and Mislead each once per long rest without using spell slots or requiring material components. Charisma is my spellcasting ability for these. [+1 Dexterity or Charisma]",
		improvements : "Greater Dragonmark [Shadow]: +1 Dexterity or Charisma;",
		spellcastingBonus : {
			name : "1\u00D7 per long",
			spells : ["nondetection", "mislead"],
			selection : ["nondetection", "mislead"],
			spellcastingAbility : 6,
			oncelr : true,
			times : 2
		},
		eval : "var raceTrait = Value('Racial Traits'); if ((/my Intuition Die \(1d4\)/i).test(raceTrait)) { What('Racial Traits', raceTrait.replace(/my Intuition Die \(1d4\)/i, 'my Intuition Die (1d6)'); ) }; ",
		removeeval : "var raceTrait = Value('Racial Traits'); if ((/my Intuition Die \(1d6\)/i).test(raceTrait)) { What('Racial Traits', raceTrait.replace(/my Intuition Die \(1d6\)/i, 'my Intuition Die (1d4)'); ) }; "
	};
	FeatsList["greater dragonmark [storm]"] = {
		name : "Greater Dragonmark [Storm]",
		source : [["WGtE", 110], ["UA:D", 7]],
		prerequisite : "Being level 8 or higher and possessing the Dragonmark of Storm",
		prereqeval : "Number(What('Character Level')) > 7 && (/^(?=.*dragonmark)(?=.*storm).*$/i).test(CurrentRace.known)",
		description : "My Intuition Die increases with one step (for example d4 to d6). I can cast Control Water and Control Winds each once per long rest without using spell slots or requiring material components. Charisma is my spellcasting ability for these. [+1 Dexterity or Charisma]",
		improvements : "Greater Dragonmark [Storm]: +1 Dexterity or Charisma;",
		spellcastingBonus : {
			name : "1\u00D7 per long",
			spells : ["control water", "control winds"],
			selection : ["control water", "control winds"],
			spellcastingAbility : 6,
			oncelr : true,
			times : 2
		},
		eval : "var raceTrait = Value('Racial Traits'); if ((/my Intuition Die \(1d4\)/i).test(raceTrait)) { What('Racial Traits', raceTrait.replace(/my Intuition Die \(1d4\)/i, 'my Intuition Die (1d6)'); ) }; ",
		removeeval : "var raceTrait = Value('Racial Traits'); if ((/my Intuition Die \(1d6\)/i).test(raceTrait)) { What('Racial Traits', raceTrait.replace(/my Intuition Die \(1d6\)/i, 'my Intuition Die (1d4)'); ) }; "
	};
	FeatsList["greater dragonmark [warding]"] = {
		name : "Greater Dragonmark [Warding]",
		source : [["WGtE", 110], ["UA:D", 7]],
		prerequisite : "Being level 8 or higher and possessing the Dragonmark of Warding",
		prereqeval : "Number(What('Character Level')) > 7 && (/^(?=.*dragonmark)(?=.*warding).*$/i).test(CurrentRace.known)",
		description : "My Intuition Die increases one step. I can cast Knock, Secret Chest, and Glyph of Warding each once per long rest without spell slot or material component. Secret Chest requires a 100 gp Siberys dragonshard as a focus. These use Int as spellcasting ability. [+1 Dex or Int]",
		improvements : "Greater Dragonmark [Warding]: +1 Dexterity or Intelligence;",
		spellcastingBonus : [{
			name : "1\u00D7 per long",
			spells : ["knock", "glyph of warding"],
			selection : ["knock", "glyph of warding"],
			spellcastingAbility : 4,
			oncelr : true,
			times : 2
		}, {
			name : "with Siberys dragonshard",
			spells : ["leomund's secret chest"],
			selection : ["leomund's secret chest"],
			oncelr : true
		}],
		eval : "var raceTrait = Value('Racial Traits'); if ((/my Intuition Die \(1d4\)/i).test(raceTrait)) { What('Racial Traits', raceTrait.replace(/my Intuition Die \(1d4\)/i, 'my Intuition Die (1d6)'); ) }; ",
		removeeval : "var raceTrait = Value('Racial Traits'); if ((/my Intuition Die \(1d6\)/i).test(raceTrait)) { What('Racial Traits', raceTrait.replace(/my Intuition Die \(1d6\)/i, 'my Intuition Die (1d4)'); ) }; "
	};

	// Aberrant Dragonmark feat
	FeatsList["aberrant dragonmark"] = {
		name : "Aberrant Dragonmark",
		source : [["WGtE", 112], ["UA:D", 9]],
		prerequisite : "Not having a dragonmark",
		prereqeval : "!(/dragonmark/i).test(CurrentRace.known)",
		description : "I learn a sorcerer cantrip and a 1st-level sorcerer spell, using Con as my spellcasting ability. I can cast the spell once per long rest without a spell slot. I can use a Hit Die when casting the spell, casting it as if with a level 2 spell slot and taking the HD as damage. [+1 Con]",
		improvements : "Aberrant Dragonmark (feat): +1 Constitution;",
		scores : [0, 0, 1, 0, 0, 0],
		spellcastingBonus : [{
			name : "Sorcerer cantrip",
			spellcastingAbility : 3,
			'class' : 'sorcerer',
			level : [0, 0],
			atwill : true
		}, {
			name : "Sorcerer 1st-level spell",
			'class' : 'sorcerer',
			level : [1, 1],
			oncelr : true
		}]
	};
}

// Control Winds reprint (only in Unearthed Arcana article)
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
}
