var iFileName = "ua_20180723_Races-of-Eberron.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Unearthed Arcana: Races of Eberron article to MPMB's Character Record Sheet
// Note that this content also appears in the script for Wayfinder's Guide to Eberron and thus both sources are included for all things here

// Define the sources
SourceList["UA:RoE"] = {
	name : "Unearthed Arcana: Races of Eberron",
	abbreviation : "UA:RoE",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2018/dnd/downloads/723UA_EberronRaces7232018.pdf",
	date : "2018/07/23"
};

if (!SourceList.WGtE) {
	// Add the four new races and their subraces
	RaceList["changeling-wgte"] = {
		regExpSearch : /changeling/i,
		name : "Changeling" + (tDoc.info.SheetVersion < 13 ? " " : ""),
		source : [["WGtE", 61], ["UA:RoE", 2]],
		plural : "Changelings",
		size : 3,
		speed : {
			walk : { spd : 30, enc : 20 }
		},
		skillstxt : "Choose two from Deception, Intimidation, Insight, and Persuasion",
		languageProfs : ["Common", 2],
		toolProfs : [["Any tool", 1]],
		age : " reach adulthood in their early teens and live around 80 years",
		height : " stand between 5 and 6 feet tall (5'1\" + 2d4\")", // Taken from 3e Eberron Campaign Setting
		weight : " weigh around 140 lb (115 + 2d4 \xD7 2d4 lb)", // Taken from 3e Eberron Campaign Setting
		heightMetric : " stand between 1,5 to over 1,8 metres tall (155 + 5d4 cm)",
		weightMetric : " weigh around 65 kg (52 + 5d4 \xD7 4d4 / 10 kg)",
		improvements : "Changeling: +2 Charisma, and +1 Dexterity or +1 Intelligence;",
		scores : [0, 0, 0, 0, 0, 2],
		trait : "Changeling (+2 Charisma, and +1 Dexterity or +1 Intelligence)\nChange Appearance: As an action, I can polymorph to or from a humanoid form of my size I have seen, not changing my equipment. I revert back if I die and have adv. on Deception.\nUnsettling Visage: As a reaction once per short rest when I'm attacked by a seen attacker, I can impose disadv. Doing this reveals my shapeshifting nature to all within 30 ft.\nDivergent Persona: I have proficiency with one tool, and an alternate persona. While in the alternate form, my proficiency bonus with that tool is doubled.",
		eval : "AddAction('action', 'Change Appearance', 'being a Changeling');",
		removeeval : "RemoveAction('action', 'Change Appearance');",
		features : {
			"unsettling visage" : {
				name : "Unsettling Visage",
				minlevel : 1,
				usages : 1,
				recovery : "short rest",
				tooltip : "",
				action : ["reaction", ""]
			}
		}
	};

	RaceList["kalashtar"] = { //this code includes contributions by /u/SoilentBrad
		regExpSearch : /kalashtar/i,
		name : "Kalashtar",
		source : [["WGtE", 63], ["UA:RoE", 4]],
		plural : "Kalashtar",
		size : 3,
		speed : {
			walk : { spd : 30, enc : 20 }
		},
		skillstxt : "Advantage with one: Insight, Intimidation, Performance, or Persuasion",
		languageProfs : ["Common", "Quori", 1],
		savetxt : { immune : ["effects that require me to dream"] },
		dmgres : ["Psychic"],
		age : " reach adulthood in their late teens and live less than 100 years",
		height : " range from 5 and a half to well over 6 feet tall (5'3\" + 2d6\")", // Taken from 3e Eberron Campaign Setting
		weight : " weigh around 145 lb (120 + 2d6 \xD7 1d6 lb)", // Taken from 3e Eberron Campaign Setting
		heightMetric : " range from 1,7 to 1,9 metres tall (160 + 5d6 cm)",
		weightMetric : " weigh around 65 kg (55 + 5d6 \xD7 2d6 / 10 kg)",
		improvements : "Kalashtar: +1 Wisdom, +1 Charisma, and +1 to one other ability score of my choice;",
		scores : [0, 0, 0, 0, 1, 1],
		trait : "Kalashtar (+1 Wisdom, +1 Charisma, and +1 to one other" + (typePF ? "" : " ability score of my choice") + ")\nDual Mind: As a reaction after I roll a Wis" + (typePF ? " save, I can gain adv." : "dom saving throw, I can gain advantage") + " on it.\nMind Link: I can speak telepathically to any creature I can see within 60 ft, as long as it can speak at least one language. As a bonus action, I can give that creature the ability to speak telepathically back to me until the start of my next turn.\nPsychic Glamour: I have adv. on Insight, Intimidation, Performance, or Persuasion checks.\nSevered from Dreams: I don't dream and thus immune to spells that affect dreams.",
		eval : "AddAction('reaction', 'Dual Mind', 'being a Kalashtar'); AddAction('bonus action', 'Mind Link', 'being a Kalashtar');",
		removeeval : "RemoveAction('reaction', 'Dual Mind'); RemoveAction('bonus action', 'Mind Link');"
	};

	// The four subraces of the shifter
	RaceList["beasthide shifter"] = {
		regExpSearch : /^(?=.*shifter)(?=.*beast)(?=.*hide).*$/i,
		name : "Beasthide shifter" + (tDoc.info.SheetVersion < 13 ? " " : ""),
		sortname : "Shifter, Beasthide",
		source : [["WGtE", 66], ["UA:RoE", 6]],
		plural : "Beasthide shifters",
		size : 3,
		speed : {
			walk : { spd : 30, enc : 20 }
		},
		languageProfs : ["Common"],
		vision : [["Darkvision", 60]],
		skills : ["Athletics", "Perception"],
		age : " reach young adulthood at age 10 and rarely live over 70",
		height : " range from under 5 to almost 6 feet tall (4'6\" + 2d8\")", // Taken from 3e Eberron Campaign Setting
		weight : " weigh around 140 lb (95 + 2d8 \xD7 2d4 lb)", // Taken from 3e Eberron Campaign Setting
		heightMetric : " range from under 1,5 to 1,8 metres tall (4'6\" + 5d8 cm)",
		weightMetric : " weigh around 65 kg (43 + 5d8 \xD7 4d4 / kg)",
		improvements : "Beasthide Shifter: +1 Dexterity, +2 Constitution;",
		scores : [0, 1, 2, 0, 0, 0],
		trait : "Beasthide Shifter: (+1 Dexterity, +2 Constitution)\n\nShifting: As a bonus action once per short rest, I can assume a more bestial appearance.\nThis transformation lasts for 1 minute, until I die, or until I revert back as a bonus action.\nWhen I shift, I gain temporary HP equal to 1d6 + my level + my Constitution modifier (minimum 1 temporary hit point).\nWhile transformed like this, I have a +1 bonus to AC",
		features : {
			"shift" : {
				name : "Shift",
				minlevel : 1,
				usages : 1,
				recovery : "short rest",
				tooltip : "",
				action : ["bonus action", " (start/end)"]
			}
		}
	};
	RaceList["longtooth shifter"] = {
		regExpSearch : /^(?=.*shifter)(?=.*long)(?=.*(tooth|teeth)).*$/i,
		name : "Longtooth shifter" + (tDoc.info.SheetVersion < 13 ? " " : ""),
		sortname : "Shifter, Longtooth",
		source : [["WGtE", 66], ["UA:RoE", 6]],
		plural : "Longtooth shifters",
		size : 3,
		speed : {
			walk : { spd : 30, enc : 20 }
		},
		languageProfs : ["Common"],
		weapons : ["longtooth fangs"],
		vision : [["Darkvision", 60]],
		skills : ["Intimidation", "Perception"],
		age : " reach young adulthood at age 10 and rarely live over 70",
		height : " range from under 5 to almost 6 feet tall (4'6\" + 2d8\")", // Taken from 3e Eberron Campaign Setting
		weight : " weigh around 140 lb (95 + 2d8 \xD7 2d4 lb)", // Taken from 3e Eberron Campaign Setting
		heightMetric : " range from under 1,5 to 1,8 metres tall (4'6\" + 5d8 cm)",
		weightMetric : " weigh around 65 kg (43 + 5d8 \xD7 4d4 / kg)",
		improvements : "Longtooth Shifter: +2 Strength, +1 Dexterity;",
		scores : [2, 1, 0, 0, 0, 0],
		trait : "Longtooth Shifter: (+2 Strength, +1 Dexterity)\nShifting: As a bonus action once per short rest, I can assume a more bestial appearance.\nThis transformation lasts for 1 minute, until I die, or until I revert back as a bonus action.\nWhen I shift, I gain temporary HP equal to my level + my Constitution modifier (minimum 1 temporary hit point).\nWhile transformed like this, I use my elongated fangs to make unarmed strikes, dealing 1d6 piercing damage. As a bonus action, I can maken one attack with my fangs.",
		features : {
			"shift" : {
				name : "Shift",
				minlevel : 1,
				usages : 1,
				recovery : "short rest",
				tooltip : "",
				action : ["bonus action", " (start/end)"]
			}
		},
		eval : "AddAction('bonus action', 'Attack with Longtooth Fangs', 'being a Longtooth shifter');",
		removeeval : "RemoveAction('bonus action', 'Attack with Longtooth Fangs');"
	};
	WeaponsList["longtooth fangs"] = { // longtooth shifter weapon
		regExpSearch : /^(?=.*fangs?)(?=.*long)(?=.*(tooth|teeth)).*$/i,
		name : "Longtooth Fangs",
		source : [["WGtE", 66], ["UA:RoE", 6]],
		ability : 1,
		type : "Natural",
		damage : [1, 6, "piercing"],
		range : "Melee",
		description : "Only while shifted; One attack as bonus action",
		monkweapon : true,
		abilitytodamage : true
	};
	RaceList["swiftstride shifter"] = {
		regExpSearch : /^(?=.*shifter)(?=.*swift)(?=.*stride).*$/i,
		name : "Swiftstride shifter",
		sortname : "Shifter, Swiftstride",
		source : [["WGtE", 66], ["UA:RoE", 6]],
		plural : "Swiftstride shifters",
		size : 3,
		speed : {
			walk : { spd : 35, enc : 25 }
		},
		languageProfs : ["Common"],
		vision : [["Darkvision", 60]],
		skills : ["Acrobatics", "Perception"],
		age : " reach young adulthood at age 10 and rarely live over 70",
		height : " range from under 5 to almost 6 feet tall (4'6\" + 2d8\")", // Taken from 3e Eberron Campaign Setting
		weight : " weigh around 140 lb (95 + 2d8 \xD7 2d4 lb)", // Taken from 3e Eberron Campaign Setting
		heightMetric : " range from under 1,5 to 1,8 metres tall (4'6\" + 5d8 cm)",
		weightMetric : " weigh around 65 kg (43 + 5d8 \xD7 4d4 / kg)",
		improvements : "Swiftstride Shifter: +2 Dexterity, +1 Charisma;",
		scores : [0, 2, 0, 0, 0, 1],
		trait : "Swiftstride Shifter: (+2 Dexterity, +1 Charisma)\nShifting: As a bonus action once per short rest, I can assume a more bestial appearance.\nThis transformation lasts for 1 minute, until I die, or until I revert back as a bonus action.\nWhen I shift, I gain temporary HP equal to my level + my Con" + (typePF ? "stitution modifier (minimum 1 temporary hit point" : " mod (minimum 1 temp HP") + ").\nWhile transformed like this, my walking speed increases with 5 ft.\nAs a reaction when an enemy ends its turn within 5 ft of me while I'm shifted, I can move 10 ft without provoking opportunity attacks.",
		features : {
			"shift" : {
				name : "Shift",
				minlevel : 1,
				usages : 1,
				recovery : "short rest",
				tooltip : "",
				action : ["bonus action", " (start/end)"]
			}
		},
		eval : "AddAction('reaction', 'Stride (while shifted)', 'being a Swiftstride shifter');",
		removeeval : "RemoveAction('reaction', 'Stride (while shifted)');"
	};
	RaceList["wildhunt shifter"] = {
		regExpSearch : /^(?=.*shifter)(?=.*wild)(?=.*hunt).*$/i,
		name : "Wildhunt shifter" + (tDoc.info.SheetVersion < 13 ? " " : ""),
		sortname : "Shifter, Wildhunt",
		source : [["WGtE", 66], ["UA:RoE", 6]],
		plural : "Wildhunt shifters",
		size : 3,
		speed : {
			walk : { spd : 30, enc : 20 }
		},
		languageProfs : ["Common"],
		vision : [["Darkvision", 60]],
		skills : ["Perception", "Survival"],
		age : " reach young adulthood at age 10 and rarely live over 70",
		height : " range from under 5 to almost 6 feet tall (4'6\" + 2d8\")", // Taken from 3e Eberron Campaign Setting
		weight : " weigh around 140 lb (95 + 2d8 \xD7 2d4 lb)", // Taken from 3e Eberron Campaign Setting
		heightMetric : " range from under 1,5 to 1,8 metres tall (4'6\" + 5d8 cm)",
		weightMetric : " weigh around 65 kg (43 + 5d8 \xD7 4d4 / kg)",
		improvements : "Wildhunt Shifter: +1 Dexterity, +2 Wisdom;",
		scores : [0, 1, 0, 0, 2, 0],
		trait : "Wildhunt Shifter: (+1 Dexterity, +2 Wisdom)\nShifting: As a bonus action once per short rest, I can transform and get adv. on Wis checks." + (typePF ? " " : "\n") + "This transformation lasts for 1 minute, until I die, or until I revert back as a bonus action.\nWhen I shift, I gain temporary HP equal to my level + my Con" + (typePF ? "stitution modifier (minimum 1 temporary hit point" : " mod (minimum 1 temp HP") + ").\nMark the Scent: As a bonus action once per short rest, I can mark a creature that I can see within 10 ft. Until the end of my next long rest, my proficiency bonus is doubled for checks to find this target, and I always know its location if it is within 60 ft of me.",
		features : {
			"shift" : {
				name : "Shift",
				minlevel : 1,
				usages : 1,
				recovery : "short rest",
				tooltip : "",
				action : ["bonus action", " (start/end)"]
			},
			"mark the scent" : {
				name : "Mark the Scent",
				minlevel : 1,
				usages : 1,
				recovery : "short rest",
				tooltip : "",
				action : ["bonus action", ""]
			}
		}
	};

	// The three subraces of the warforged
	RaceList["envoy warforged"] = {
		regExpSearch : /^(?=.*warforged)(?=.*envoy).*$/i,
		name : "Envoy warforged",
		sortname : "Warforged, Envoy",
		source : [["WGtE", 69], ["UA:RoE", 9]],
		plural : "Envoy warforged",
		size : 3,
		speed : {
			walk : { spd : 30, enc : 20 }
		},
		languageProfs : ["Common", 1],
		toolProfs : [["Expertise with any one tool", 1]],
		skillstxt : "Choose any one skill",
		savetxt : {
			text : ["Magic can't put me to sleep"],
			immune : ["disease", "exhaustion from lack of rest"],
			adv_vs : ["poison"]
		},
		dmgres : ["Poison"],
		age : " are created as adults and will only start to show signs of physical deterioration after 150 years, but have no further aging effects",
		height : " stand between 6 and 7 feet tall (5'10\" + 2d6\")", // Taken from 3e Eberron Campaign Setting
		weight : " weigh around 300 lb (270 + 2d6 \xD7 4 lb)", // Taken from 3e Eberron Campaign Setting
		heightMetric : " stand between 1,8 and 2,1 metres tall (178 + 5d6 cm)",
		weightMetric : " weigh around 135 kg (125 + 5d6 \xD7 8 / kg)",
		improvements : "Envoy Warforged: +1 Constitution and +1 to two other ability scores of my choice;",
		scores : [0, 0, 1, 0, 0, 0],
		trait : "Envoy Warforged (+1 Constitution and +1 to two other abilit" + (typePF ? "ies" : "y scores of my choice") + ")\nWarforged Resilience: I do not need to sleep, eat, drink, or breathe.\nSentry's Rest: To benefit from a long rest, I need to enter an inactive state for 6 hours, during which I am not rendered unconscious and can see and hear as normal.\nIntegrated Protection: My AC depends on armor proficiency: none (11+Dex), light (11+Dex+Prof B), medium (13+Dex+Prof B), heavy (16+Prof B; Stealth disadv.). I can use a shield.\nIntegrated Tool: I have expertise with one tool and it is integrated into my body.",
		eval : "AddACMisc('Prof', 'Integrated Protection', 'Integrated Protection was gained from being a Warforged', '!(/warforged (darkwood core|composite plating|heavy plating)/).test(CurrentArmour.known) || (!tDoc.getField(\"Proficiency Armor Light\").isBoxChecked(0) && !tDoc.getField(\"Proficiency Armor Medium\").isBoxChecked(0) && !tDoc.getField(\"Proficiency Armor Heavy\").isBoxChecked(0))'); var lightProf = tDoc.getField('Proficiency Armor Light').isBoxChecked(0); if (tDoc.getField('Proficiency Armor Heavy').isBoxChecked(0)) { AddArmor('Warforged Heavy Plating', true); } else if (tDoc.getField('Proficiency Armor Medium').isBoxChecked(0) && ((What('Dex') < 18 && lightProf) || !lightProf)) { AddArmor('Warforged Composite Plating', true); } else { AddArmor('Warforged Darkwood Core', true); };",
		removeeval : "AddACMisc(0, 'Integrated Protection', 'Integrated Protection was gained from being a Warforged');"
	};
	RaceList["juggernaut warforged"] = {
		regExpSearch : /^(?=.*warforged)(?=.*juggernaut).*$/i,
		name : "Juggernaut warforged",
		sortname : "Warforged, Juggernaut",
		source : [["WGtE", 70], ["UA:RoE", 9]],
		plural : "Juggernaut warforged",
		size : 3,
		speed : {
			walk : { spd : 30, enc : 20 }
		},
		languageProfs : ["Common"],
		weapons : ["warforged iron fists"],
		savetxt : {
			text : ["Magic can't put me to sleep"],
			immune : ["disease", "exhaustion from lack of rest"],
			adv_vs : ["poison"]
		},
		dmgres : ["Poison"],
		age : " are created as adults and will only start to show signs of physical deterioration after 150 years, but have no further aging effects",
		height : " stand between 6 and 7 feet tall (5'10\" + 2d6\")", // Taken from 3e Eberron Campaign Setting
		weight : " weigh around 300 lb (270 + 2d6 \xD7 4 lb)", // Taken from 3e Eberron Campaign Setting
		heightMetric : " stand between 1,8 and 2,1 metres tall (178 + 5d6 cm)",
		weightMetric : " weigh around 135 kg (125 + 5d6 \xD7 8 / kg)",
		improvements : "Juggernaut Warforged: +2 Strength, +1 Constitution;",
		scores : [2, 0, 1, 0, 0, 0],
		trait : "Juggernaut Warforged (+2 Strength, +1 Constitution)" + (typePF ? "" : " Iron Fists: unarmed strikes do 1d4.") + "\nWarforged Resilience: I do not need to sleep, eat, drink, or breathe.\nSentry's Rest: To benefit from a long rest, I need to enter an inactive state for 6 hours, during which I am not rendered unconscious and can see and hear as normal.\nIntegrated Protection: My AC depends on armor proficiency: none (11+Dex), light (11+Dex+Prof B), medium (13+Dex+Prof B), heavy (16+Prof B; Stealth disadv.). I can use a shield.\nPowerful Build: I count as one size larger for my carrying capacity, push, drag, and lift." + (typePF ? " Iron Fists: My unarmed strikes do 1d4 damage." : ""),
		eval : "tDoc.getField('Carrying Capacity Multiplier').value *= 2; AddACMisc('Prof', 'Integrated Protection', 'Integrated Protection was gained from being a Warforged', '!(/warforged (darkwood core|composite plating|heavy plating)/).test(CurrentArmour.known) || (!tDoc.getField(\"Proficiency Armor Light\").isBoxChecked(0) && !tDoc.getField(\"Proficiency Armor Medium\").isBoxChecked(0) && !tDoc.getField(\"Proficiency Armor Heavy\").isBoxChecked(0))'); var lightProf = tDoc.getField('Proficiency Armor Light').isBoxChecked(0); if (tDoc.getField('Proficiency Armor Heavy').isBoxChecked(0)) { AddArmor('Warforged Heavy Plating', true); } else if (tDoc.getField('Proficiency Armor Medium').isBoxChecked(0) && ((What('Dex') < 18 && lightProf) || !lightProf)) { AddArmor('Warforged Composite Plating', true); } else { AddArmor('Warforged Darkwood Core', true); };",
		removeeval : "tDoc.getField('Carrying Capacity Multiplier').value /= 2; AddACMisc(0, 'Integrated Protection', 'Integrated Protection was gained from being a Warforged');"
	};
	WeaponsList["warforged iron fists"] = { // Juggernaut warforged weapon
		regExpSearch : /^(?=.*warforged)(?=.*iron)(?=.*fists?).*$/i,
		name : "Warforged Iron Fists",
		source : [["WGtE", 70], ["UA:RoE", 9]],
		ability : 1,
		type : "Natural",
		damage : [1, 4, "bludgeoning"],
		range : "Melee",
		description : "",
		abilitytodamage : true,
		monkweapon : true
	};
	RaceList["skirmisher warforged"] = {
		regExpSearch : /^(?=.*warforged)(?=.*skirmisher).*$/i,
		name : "Skirmisher warforged",
		sortname : "Warforged, Skirmisher",
		source : [["WGtE", 70], ["UA:RoE", 9]],
		plural : "Skirmisher warforged",
		size : 3,
		speed : {
			walk : { spd : 35, enc : 25 }
		},
		languageProfs : ["Common"],
		savetxt : {
			text : ["Magic can't put me to sleep"],
			immune : ["disease", "exhaustion from lack of rest"],
			adv_vs : ["poison"]
		},
		dmgres : ["Poison"],
		age : " are created as adults and will only start to show signs of physical deterioration after 150 years, but have no further aging effects",
		height : " stand between 6 and 7 feet tall (5'10\" + 2d6\")", // Taken from 3e Eberron Campaign Setting
		weight : " weigh around 300 lb (270 + 2d6 \xD7 4 lb)", // Taken from 3e Eberron Campaign Setting
		heightMetric : " stand between 1,8 and 2,1 metres tall (178 + 5d6 cm)",
		weightMetric : " weigh around 135 kg (125 + 5d6 \xD7 8 / kg)",
		improvements : "Skirmisher Warforged: +2 Dexterity, +1 Constitution;",
		scores : [0, 2, 1, 0, 0, 0],
		trait : "Skirmisher Warforged (+2 Dexterity, +1 Constitution)\nWarforged Resilience: I do not need to sleep, eat, drink, or breathe.\nSentry's Rest: To benefit from a long rest, I need to enter an inactive state for 6 hours, during which I am not rendered unconscious and can see and hear as normal.\nIntegrated Protection: My AC depends on armor proficiency: none (11+Dex), light (11+Dex+Prof B), medium (13+Dex+Prof B), heavy (16+Prof B; Stealth disadv.). I can use a shield.\nLight Step: If I travel alone for an hour or more, I can move stealthily at a normal pace.",
		eval : "AddACMisc('Prof', 'Integrated Protection', 'Integrated Protection was gained from being a Warforged', '!(/warforged (darkwood core|composite plating|heavy plating)/).test(CurrentArmour.known) || (!tDoc.getField(\"Proficiency Armor Light\").isBoxChecked(0) && !tDoc.getField(\"Proficiency Armor Medium\").isBoxChecked(0) && !tDoc.getField(\"Proficiency Armor Heavy\").isBoxChecked(0))'); var lightProf = tDoc.getField('Proficiency Armor Light').isBoxChecked(0); if (tDoc.getField('Proficiency Armor Heavy').isBoxChecked(0)) { AddArmor('Warforged Heavy Plating', true); } else if (tDoc.getField('Proficiency Armor Medium').isBoxChecked(0) && ((What('Dex') < 18 && lightProf) || !lightProf)) { AddArmor('Warforged Composite Plating', true); } else { AddArmor('Warforged Darkwood Core', true); };",
		removeeval : "AddACMisc(0, 'Integrated Protection', 'Integrated Protection was gained from being a Warforged');"
	};
	// Warforged armour
	ArmourList["warforged darkwood core"] = {
		regExpSearch : /^(?=.*warforged)(?=.*darkwood)(?=.*core).*$/i,
		name : "Warforged darkwood core",
		source : [["WGtE", 69], ["UA:RoE", 9]],
		type : "warforged",
		ac : 11,
		stealthdis : false,
		weight : 0,
		strReq : 0
	};
	ArmourList["warforged composite plating"] = {
		regExpSearch : /^(?=.*warforged)(?=.*composite)(?=.*plating).*$/i,
		name : "Warforged composite plating",
		source : [["WGtE", 69], ["UA:RoE", 9]],
		type : "warforged",
		ac : 13,
		stealthdis : false,
		weight : 0,
		strReq : 0,
		dex : 2
	};
	ArmourList["warforged heavy plating"] = {
		regExpSearch : /^(?=.*warforged)(?=.*heavy)(?=.*plating).*$/i,
		name : "Warforged heavy plating",
		source : [["WGtE", 69], ["UA:RoE", 9]],
		type : "warforged",
		ac : 16,
		stealthdis : true,
		weight : 0,
		strReq : 0,
		dex : -10
	};
}
