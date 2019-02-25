var iFileName = "pub_20180723_WGtE.js";
RequiredSheetVersion(12.999);
// This file adds the content from Wayfinder's Guide to Eberron to MPMB's Character Record Sheet

// Define the sources
SourceList.WGtE = {
	name : "Wayfinder's Guide to Eberron",
	abbreviation : "WGtE",
	group : "Primary Sources",
	url : "https://www.dmsguild.com/product/247882/",
	date : "2018/10/09" // the original is from 2018/07/23, but this script is based on the newer version that includes (most of) the UA:Dragonmark changes 
};

// The changeling
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

// The kalashtar
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
	name : "Warforged iron fists",
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

// Elf Variants
AddRacialVariant("wood elf", "aereni", {
	regExpSearch : /aereni/i,
	name : "Aereni wood elf",
	source : ["WGtE", 73],
	plural : "Aereni wood elves",
	weaponprofs : "",
	skillstxt : "Proficiency and expertise with any one skill or tool",
	trait : "Aereni " + RaceList["wood elf"].trait
});
AddRacialVariant("high elf", "aereni", {
	regExpSearch : /aereni/i,
	name : "Aereni high elf",
	source : ["WGtE", 73],
	plural : "Aereni high elves",
	weaponprofs : "",
	skillstxt : "Proficiency and expertise with any one skill or tool",
	trait : "Aereni " + RaceList["high elf"].trait
});
AddRacialVariant("wood elf", "valenar", {
	regExpSearch : /valenar/i,
	name : "Valenar wood elf",
	source : ["WGtE", 73],
	plural : "Valenar wood elves",
	weaponprofs : [false, false, ["scimitar", "double-bladed scimitar", "longbow", "shortbow"]],
	trait : "Valenar " + RaceList["wood elf"].trait
});
AddRacialVariant("high elf", "valenar", {
	regExpSearch : /valenar/i,
	name : "Valenar high elf",
	source : ["WGtE", 73],
	plural : "Valenar high elves",
	weaponprofs : [false, false, ["scimitar", "double-bladed scimitar", "longbow", "shortbow"]],
	trait : "Valenar " + RaceList["high elf"].trait
});

// Double bladed scimitar
WeaponsList["double-bladed scimitar"] = { // Juggernaut warforged weapon
	regExpSearch : /^(?=.*double)(?=.*scimitar).*$/i,
	name : "Double-bladed scimitar",
	source : ["WGtE", 74],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [2, 4, "slashing"],
	range : "Melee",
	weight : 6,
	description : "Two-handed; With Attack action, one attack as bonus action for 1d4",
	abilitytodamage : true
};

// Revenant blade feat
FeatsList["revenant blade"] = {
	name : "Revenant Blade",
	source : ["WGtE", 74],
	prerequisite : "Being an Elf",
	prereqeval : "(/^(?!.*half)(?=.*(elf|eladrin|avariel|grugach|shadar-kai)).*$/i).test(CurrentRace.known)",
	description : "As a bonus action with the Attack action, I can make an extra with a double-bladed weapon for 2d4 slashing damage. I treat double-bladed weapons as having the finesse trait. +1 AC while wielding a double-bladed weapon with two hands. [+1 Strength or Dexterity]",
	improvements : "Revenant Blade (feat): +1 Strength or Dexterity;",
	action : ["bonus action", " (with Attack action)"],
	calcChanges : {
		atkAdd : ["if ((/double-bladed scimitar/i).test(WeaponName) && fields.Proficiency) {fields.Description = fields.Description.replace('Two-handed; With Attack action, one attack as bonus action for 1d4', 'Finesse, two-handed; With Attack action, one attack as bonus action'); fields.Mod = StrDex; };", "Double-bladed weapons count as having finesse for me and I can make an extra attack with them as a bonus action when taking the Attack action."]
	},
	eval : "AddACMisc(1, 'Revenant Blade', 'When wielding a double-bladed weapon in two hands, the Revenant Blade feat gives a +1 bonus to AC', 'ACshield');",
	removeeval : "AddACMisc(0, 'Revenant Blade', 'When wielding a double-bladed weapon in two hands, the Revenant Blade feat gives a +1 bonus to AC');"
};

// Creature
CreatureList["clawfoot raptor"] = {
	name : "Clawfoot Raptor",
	source : ["WGtE", 81],
	size : 3,
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 14,
	hp : 16,
	hd : [3, 8],
	speed : "50 ft",
	scores : [17, 17, 13, 2, 12, 10],
	saves : ["", "", "", "", "", ""],
	skills : {
		"athletics" : 5,
		"perception" : 5,
		"stealth" : 5
	},
	senses : "",
	passivePerception : 15,
	languages : "",
	challengeRating : "1/2",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Claw",
		ability : 1,
		damage : [2, 6, "slashing"],
		range : "Melee (5 ft)",
		description : "If used after moving 30 ft straight in the same round, see Pounce trait"
	}, {
		name : "Bite",
		ability : 1,
		damage : [2, 4, "piercing"],
		range : "Melee (5 ft)",
		description : "Can be used in combination with claw while pouncing (see Pounce trait)"
	}],
	traits : [{
		name : "Pounce",
		description : "If the clawfoot moves at least 30 ft straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the clawfoot can make one bite attack against it as a bonus action."
	}]
};

// House Agent backgrounds
BackgroundList["house agent"] = { // the default is House Cannith
	regExpSearch : /^(?=.*agent)(?=.*house)(?=.*(noble|cannith)).*$/i,
	name : "Agent of House Cannith",
	source : ["WGtE", 94],
	skills : ["Investigation", "Persuasion"],
	gold : 20,
	equipright : [
		["Fine clothes", "", 6],
		["Signet ring of house Cannith", "", ""],
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
			"Common Good: My house serves a vital function, and its properity will help everyone. (Good)"
		],
		["Tradition",
			"Tradition: I uphold traditions of my house and bring honor to my family. (Lawful)"
		],
		["Innovation",
			"Innovation: Abondon old traditions and find better ways to do things. (Chaotic)"
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
		"I love someone from another house, but such relationships are forbidden.",
		"Someone I love was killed by a rival faction within my house, and I will have revenge.",
		"I don't care about the house as a whole, but I would do anything for my old mentor.",
		"I believe my house needs to evolve to survive, and I need to lead that change.",
		"I am determined to impress the leaders of my house, and to become a leader myself."
	],
	flaw : [
		"I'm overly concerned with following established procedures and protocols.",
		"I'm obsessed with conspiracy theories and worried about secret societies and hidden demons.",
		"I believe that my house and bloodline makes me better than everyone else.",
		"I'm concealing a secret that could get me driven from my house.",
		"I have strong religious beliefs that aren't shared by others in my house.",
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
	source : ["WGtE", 94],
	toolProfs : [["Gaming set", 1], "Vehicles (land)"]
});
AddBackgroundVariant("house agent", "ghallanda", {
	regExpSearch : /^(?=.*agent)(?=.*house)(?=.*ghallanda).*$/i,
	name : "Agent of House Ghallanda",
	source : ["WGtE", 94],
	toolProfs : ["Brewer's supplies", "Cook's utensils"]
});
AddBackgroundVariant("house agent", "jorasco", {
	regExpSearch : /^(?=.*agent)(?=.*house)(?=.*jorasco).*$/i,
	name : "Agent of House Jorasco",
	source : ["WGtE", 94],
	toolProfs : ["Alchemist's supplies", "Herbalism kit"]
});
AddBackgroundVariant("house agent", "kundarak", {
	regExpSearch : /^(?=.*agent)(?=.*house)(?=.*kundarak).*$/i,
	name : "Agent of House Kundarak",
	source : ["WGtE", 94],
	toolProfs : [["Thieves' tools", "Dex"], "Tinker's tools"]
});
AddBackgroundVariant("house agent", "lyrandar", {
	regExpSearch : /^(?=.*agent)(?=.*house)(?=.*lyrandar).*$/i,
	name : "Agent of House Lyrandar",
	source : ["WGtE", 94],
	toolProfs : ["Navigator's tools", "Vehicles (sea/air)"]
});
AddBackgroundVariant("house agent", "medani", {
	regExpSearch : /^(?=.*agent)(?=.*house)(?=.*medani).*$/i,
	name : "Agent of House Medani",
	source : ["WGtE", 94],
	toolProfs : ["Disguise kit", ["Thieves' tools", "Dex"]]
});
AddBackgroundVariant("house agent", "orien", {
	regExpSearch : /^(?=.*agent)(?=.*house)(?=.*orien).*$/i,
	name : "Agent of House Orien",
	source : ["WGtE", 94],
	toolProfs : [["Gaming set", 1], "Vehicles (land)"]
});
AddBackgroundVariant("house agent", "phiarlan", {
	regExpSearch : /^(?=.*agent)(?=.*house)(?=.*phiarlan).*$/i,
	name : "Agent of House Phiarlan",
	source : ["WGtE", 94],
	toolProfs : ["Disguise kit", ["Musical instrument", 1]]
});
AddBackgroundVariant("house agent", "sivis", {
	regExpSearch : /^(?=.*agent)(?=.*house)(?=.*sivis).*$/i,
	name : "Agent of House Sivis",
	source : ["WGtE", 94],
	toolProfs : ["Calligrapher's tools", "Forgery kit"]
});
AddBackgroundVariant("house agent", "tharashk", {
	regExpSearch : /^(?=.*agent)(?=.*house)(?=.*tharashk).*$/i,
	name : "Agent of House Tharashk",
	source : ["WGtE", 94],
	toolProfs : [["Gaming set", 1], ["Thieves' tools", "Dex"]]
});
AddBackgroundVariant("house agent", "thuranni", {
	regExpSearch : /^(?=.*agent)(?=.*house)(?=.*thuranni).*$/i,
	name : "Agent of House Thuranni",
	source : ["WGtE", 94],
	toolProfs : [["Musical instrument", 1], "Poisoner's kit"]
});
AddBackgroundVariant("house agent", "vadalis", {
	regExpSearch : /^(?=.*agent)(?=.*house)(?=.*vadalis).*$/i,
	name : "Agent of House Vadalis",
	source : ["WGtE", 94],
	toolProfs : ["Herbalism kit", "Vehicles (land)"]
});
BackgroundFeatureList["house connections"] = {
	description : "As an agent of my house, I can always get food and lodging for my friends at a house enclave. My house usually provides me with necessary supplies and transportation if it assigns me a mission. I have many old friends, mentors, and rivals in my house that I might run into and be willing to help me depending on my current standing in the house.",
	source : ["WGtE", 95]
};

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
/* removed with UA:Dragonmark changes
RaceList["dragonmark finding human"] = {
	regExpSearch : /^(?=.*human)((?=.*mark)(?=.*finding)|(?=.*house)(?=.*tharashk)).*$/i,
	name : "Human (dragonmark)",
	sortname : "Dragonmark, Finding (Human)",
	source : ["WGtE", 97],
	plural : "Humans (dragonmark)",
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
	improvements : "Human, Dragonmark of Finding: +1 Dexterity, +1 Wisdom, and +1 to any one ability score of my choice;",
	scores : [0, 1, 0, 0, 1, 0],
	trait : "Human, Dragonmark of Finding (+1 Dex" + (typePF ? ", +1 Wis, +1 to one ability" : "terity, +1 Wisdom, and +1 to any one ability score") + ")\n   Hunter's Intuition: I add my Intuition Die (1d4) to my Perception and Survival checks.\n   Imprint Prey: As a bonus action once per short rest, I imprint to my mind a target I can see in 30 ft until it dies or leaves my sight. I can also do this with a Survival check for a creature I'm tracking. While imprinted, I double my Intuition Die for tracking it, can sense its exact location if within 60 ft, and my attacks vs. it ignore half cover.\n   Nature's Voice: Once I reach 3rd level, I can cast Locate Animals or Plants as a ritual.",
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
*/
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
	trait : "Human, Dragonmark of Handling (+1 Dex" + (typePF ? ", +1 Wis, +1 to one ability" : "terity, +1 Wisdom, +1 to any one ability score") + ")\n   Wild Intuition: I can add my Intuition Die (1d4) to my Wisdom (Animal Handling) and Intelligence (Nature) checks.\n   Expert Handling: I can use the Help action to aid an ally animal companion or mount even when they are within 30 ft of me, rather than just within 5 ft.\n   Primal Connection: Once per short rest, I can cast Animal Friendship using Wisdom " + (typePF ? "as my spellcasting ability" : "") + ".\n   " + (typePF ? "The Bigger They Are: My spells that normally affect only beasts now also affect monstrosities with an Intelligence of 3 or lower." : "Bigger They Are: My spells that affect only beasts, also affect monstrosities with Int < 4."),
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
	trait : "Human, Dragonmark of Making (+1 Dex" + (typePF ? ", +2 Int or +2 Dex, +1 Int" : "terity, +1 Intelligence, +1 to Dex or Int, my choice") + ")\nArtisan's Intuition: I can add my Intuition Die (1d4) to ability checks with artisan's tools.\nMagecraft: I can create a magic item that gives me the ability to cast one wizard cantrip of my choice, using Intelligence as my spellcasting ability. This works while the item is in my possession. At the end of a long rest, I can replace it with a new item and cantrip.\nSpellsmith: Once per long rest, I can spend 1 minute to make a nonmagical armor or weapon gain a +1 bonus for the next hour. Maker's Gift: I know the mending cantrip.",
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
RaceList["dragonmark passage human"] = {
	regExpSearch : /^((?=.*mark)(?=.*passage)|(?=.*house)(?=.*orien)).*$/i,
	name : "Human (dragonmark)",
	sortname : "Dragonmark, Passage (Human)",
	source : ["WGtE", 102],
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
	trait : "Human, Dragonmark of Passage (+2 Dexterity and +1 to another ability score)\n   Intuitive Motion: I can add my Intuition Die (1d4) to my Strength (Athletics) checks and any ability checks involving operating or maintaining a land vehicle.\n   Determined Stride: When I use the Dash action, difficult terrain doesn't cost me extra movement for that turn.\n   Shared Passage: As a bonus action once per long rest, I can teleport myself and a willing ally within 5 ft a distance up to my walking speed to an unoccupied space I can see.",
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
	scores : [0, 0, 0, 2, 0, 1],
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
	eval : "var raceTrait = What('Racial Traits'); if ((/my Intuition Die \\(1d4\\)/i).test(raceTrait)) { Value('Racial Traits', raceTrait.replace(/my Intuition Die \\(1d4\\)/i, 'my Intuition Die (1d6)')); }; ",
	removeeval : "var raceTrait = What('Racial Traits'); if ((/my Intuition Die \\(1d6\\)/i).test(raceTrait)) { Value('Racial Traits', raceTrait.replace(/my Intuition Die \\(1d6\\)/i, 'my Intuition Die (1d4)')); }; "
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
	eval : "var raceTrait = What('Racial Traits'); if ((/my Intuition Die \\(1d4\\)/i).test(raceTrait)) { Value('Racial Traits', raceTrait.replace(/my Intuition Die \\(1d4\\)/i, 'my Intuition Die (1d6)')); }; ",
	removeeval : "var raceTrait = What('Racial Traits'); if ((/my Intuition Die \\(1d6\\)/i).test(raceTrait)) { Value('Racial Traits', raceTrait.replace(/my Intuition Die \\(1d6\\)/i, 'my Intuition Die (1d4)')); }; "
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
	eval : "var raceTrait = What('Racial Traits'); if ((/my Intuition Die \\(1d4\\)/i).test(raceTrait)) { Value('Racial Traits', raceTrait.replace(/my Intuition Die \\(1d4\\)/i, 'my Intuition Die (1d6)')); }; ",
	removeeval : "var raceTrait = What('Racial Traits'); if ((/my Intuition Die \\(1d6\\)/i).test(raceTrait)) { Value('Racial Traits', raceTrait.replace(/my Intuition Die \\(1d6\\)/i, 'my Intuition Die (1d4)')); }; "
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
	eval : "var raceTrait = What('Racial Traits'); if ((/my Intuition Die \\(1d4\\)/i).test(raceTrait)) { Value('Racial Traits', raceTrait.replace(/my Intuition Die \\(1d4\\)/i, 'my Intuition Die (1d6)')); }; ",
	removeeval : "var raceTrait = What('Racial Traits'); if ((/my Intuition Die \\(1d6\\)/i).test(raceTrait)) { Value('Racial Traits', raceTrait.replace(/my Intuition Die \\(1d6\\)/i, 'my Intuition Die (1d4)')); }; "
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
	eval : "var raceTrait = What('Racial Traits'); if ((/my Intuition Die \\(1d4\\)/i).test(raceTrait)) { Value('Racial Traits', raceTrait.replace(/my Intuition Die \\(1d4\\)/i, 'my Intuition Die (1d6)')); }; ",
	removeeval : "var raceTrait = What('Racial Traits'); if ((/my Intuition Die \\(1d6\\)/i).test(raceTrait)) { Value('Racial Traits', raceTrait.replace(/my Intuition Die \\(1d6\\)/i, 'my Intuition Die (1d4)')); }; "
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
	eval : "var raceTrait = What('Racial Traits'); if ((/my Intuition Die \\(1d4\\)/i).test(raceTrait)) { Value('Racial Traits', raceTrait.replace(/my Intuition Die \\(1d4\\)/i, 'my Intuition Die (1d6)')); }; ",
	removeeval : "var raceTrait = What('Racial Traits'); if ((/my Intuition Die \\(1d6\\)/i).test(raceTrait)) { Value('Racial Traits', raceTrait.replace(/my Intuition Die \\(1d6\\)/i, 'my Intuition Die (1d4)')); }; "
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
	eval : "var raceTrait = What('Racial Traits'); if ((/my Intuition Die \\(1d4\\)/i).test(raceTrait)) { Value('Racial Traits', raceTrait.replace(/my Intuition Die \\(1d4\\)/i, 'my Intuition Die (1d6)')); }; ",
	removeeval : "var raceTrait = What('Racial Traits'); if ((/my Intuition Die \\(1d6\\)/i).test(raceTrait)) { Value('Racial Traits', raceTrait.replace(/my Intuition Die \\(1d6\\)/i, 'my Intuition Die (1d4)')); }; "
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
	eval : "var raceTrait = What('Racial Traits'); if ((/my Intuition Die \\(1d4\\)/i).test(raceTrait)) { Value('Racial Traits', raceTrait.replace(/my Intuition Die \\(1d4\\)/i, 'my Intuition Die (1d6)')); }; ",
	removeeval : "var raceTrait = What('Racial Traits'); if ((/my Intuition Die \\(1d6\\)/i).test(raceTrait)) { Value('Racial Traits', raceTrait.replace(/my Intuition Die \\(1d6\\)/i, 'my Intuition Die (1d4)')); }; "
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
	eval : "var raceTrait = What('Racial Traits'); if ((/my Intuition Die \\(1d4\\)/i).test(raceTrait)) { Value('Racial Traits', raceTrait.replace(/my Intuition Die \\(1d4\\)/i, 'my Intuition Die (1d6)')); }; ",
	removeeval : "var raceTrait = What('Racial Traits'); if ((/my Intuition Die \\(1d6\\)/i).test(raceTrait)) { Value('Racial Traits', raceTrait.replace(/my Intuition Die \\(1d6\\)/i, 'my Intuition Die (1d4)')); }; "
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
	eval : "var raceTrait = What('Racial Traits'); if ((/my Intuition Die \\(1d4\\)/i).test(raceTrait)) { Value('Racial Traits', raceTrait.replace(/my Intuition Die \\(1d4\\)/i, 'my Intuition Die (1d6)')); }; ",
	removeeval : "var raceTrait = What('Racial Traits'); if ((/my Intuition Die \\(1d6\\)/i).test(raceTrait)) { Value('Racial Traits', raceTrait.replace(/my Intuition Die \\(1d6\\)/i, 'my Intuition Die (1d4)')); }; "
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
	eval : "var raceTrait = What('Racial Traits'); if ((/my Intuition Die \\(1d4\\)/i).test(raceTrait)) { Value('Racial Traits', raceTrait.replace(/my Intuition Die \\(1d4\\)/i, 'my Intuition Die (1d6)')); }; ",
	removeeval : "var raceTrait = What('Racial Traits'); if ((/my Intuition Die \\(1d6\\)/i).test(raceTrait)) { Value('Racial Traits', raceTrait.replace(/my Intuition Die \\(1d6\\)/i, 'my Intuition Die (1d4)')); }; "
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
	eval : "var raceTrait = What('Racial Traits'); if ((/my Intuition Die \\(1d4\\)/i).test(raceTrait)) { Value('Racial Traits', raceTrait.replace(/my Intuition Die \\(1d4\\)/i, 'my Intuition Die (1d6)')); }; ",
	removeeval : "var raceTrait = What('Racial Traits'); if ((/my Intuition Die \\(1d6\\)/i).test(raceTrait)) { Value('Racial Traits', raceTrait.replace(/my Intuition Die \\(1d6\\)/i, 'my Intuition Die (1d4)')); }; "
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
