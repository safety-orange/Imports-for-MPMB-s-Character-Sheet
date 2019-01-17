var iFileName = "ua_20180723_Races-of-Eberron.js";
RequiredSheetVersion(13);
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
	// The changeling
	RaceList["changeling-wgte"] = {
		regExpSearch : /changeling/i,
		name : "Changeling",
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
		scorestxt : "+2 Charisma, and +1 Dexterity or +1 Intelligence",
		scores : [0, 0, 0, 0, 0, 2],
		trait : "Changeling (+2 Charisma, and +1 Dexterity or +1 Intelligence)\nChange Appearance: As an action, I can polymorph to or from a humanoid form of my size I have seen, not changing my equipment. I revert back if I die and have adv. on Deception.\nUnsettling Visage: As a reaction once per short rest when I'm attacked by a seen attacker, I can impose disadv. Doing this reveals my shapeshifting nature to all within 30 ft.\nDivergent Persona: I have proficiency with one tool, and an alternate persona. While in the alternate form, my proficiency bonus with that tool is doubled.",
		action : ["action", "Change Appearance"],
		features : {
			"unsettling visage" : {
				name : "Unsettling Visage",
				minlevel : 1,
				usages : 1,
				recovery : "short rest",
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
		scorestxt : "+1 Wisdom, +1 Charisma, and +1 to one other ability score of my choice",
		scores : [0, 0, 0, 0, 1, 1],
		trait : "Kalashtar (+1 Wisdom, +1 Charisma, and +1 to one other" + (typePF ? "" : " ability score of my choice") + ")\nDual Mind: As a reaction after I roll a Wis" + (typePF ? " save, I can gain adv." : "dom saving throw, I can gain advantage") + " on it.\nMind Link: I can speak telepathically to any creature I can see within 60 ft, as long as it can speak at least one language. As a bonus action, I can give that creature the ability to speak telepathically back to me until the start of my next turn.\nPsychic Glamour: I have adv. on Insight, Intimidation, Performance, or Persuasion checks.\nSevered from Dreams: I don't dream and thus immune to spells that affect dreams.",
		action : [['bonus action', 'Mind Link'], ['reaction', 'Dual Mind']]
	};

	// The four subraces of the shifter
	RaceList["beasthide shifter"] = {
		regExpSearch : /^(?=.*shifter)(?=.*beast)(?=.*hide).*$/i,
		name : "Beasthide shifter",
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
		scores : [0, 1, 2, 0, 0, 0],
		trait : "Beasthide Shifter: (+1 Dexterity, +2 Constitution)\n\nShifting: As a bonus action once per short rest, I can assume a more bestial appearance.\nThis transformation lasts for 1 minute, until I die, or until I revert back as a bonus action.\nWhen I shift, I gain temporary HP equal to 1d6 + my level + my Constitution modifier (minimum 1 temporary hit point).\nWhile transformed like this, I have a +1 bonus to AC",
		features : {
			"shift" : {
				name : "Shift",
				minlevel : 1,
				usages : 1,
				recovery : "short rest",
				action : ["bonus action", " (start/end)"]
			}
		}
	};
	RaceList["longtooth shifter"] = {
		regExpSearch : /^(?=.*shifter)(?=.*long)(?=.*(tooth|teeth)).*$/i,
		name : "Longtooth shifter",
		sortname : "Shifter, Longtooth",
		source : [["WGtE", 66], ["UA:RoE", 6]],
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
			source : [["WGtE", 66], ["UA:RoE", 6]],
			damage : [1, 6, "piercing"],
			description : "Only while shifted; One attack as bonus action"
		},
		addWeapons : ["Longtooth Fangs"],
		vision : [["Darkvision", 60]],
		skills : ["Intimidation", "Perception"],
		age : " reach young adulthood at age 10 and rarely live over 70",
		height : " range from under 5 to almost 6 feet tall (4'6\" + 2d8\")", // Taken from 3e Eberron Campaign Setting
		weight : " weigh around 140 lb (95 + 2d8 \xD7 2d4 lb)", // Taken from 3e Eberron Campaign Setting
		heightMetric : " range from under 1,5 to 1,8 metres tall (4'6\" + 5d8 cm)",
		weightMetric : " weigh around 65 kg (43 + 5d8 \xD7 4d4 / kg)",
		scores : [2, 1, 0, 0, 0, 0],
		trait : "Longtooth Shifter: (+2 Strength, +1 Dexterity)\nShifting: As a bonus action once per short rest, I can assume a more bestial appearance.\nThis transformation lasts for 1 minute, until I die, or until I revert back as a bonus action.\nWhen I shift, I gain temporary HP equal to my level + my Constitution modifier (minimum 1 temporary hit point).\nWhile transformed like this, I use my elongated fangs to make unarmed strikes, dealing 1d6 piercing damage. As a bonus action, I can maken one attack with my fangs.",
		action : ['bonus action', 'Attack with Longtooth Fangs'],
		features : {
			"shift" : {
				name : "Shift",
				minlevel : 1,
				usages : 1,
				recovery : "short rest",
				action : ["bonus action", " (start/end)"]
			}
		}
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
		scores : [0, 2, 0, 0, 0, 1],
		trait : "Swiftstride Shifter: (+2 Dexterity, +1 Charisma)\nShifting: As a bonus action once per short rest, I can assume a more bestial appearance.\nThis transformation lasts for 1 minute, until I die, or until I revert back as a bonus action.\nWhen I shift, I gain temporary HP equal to my level + my Con" + (typePF ? "stitution modifier (minimum 1 temporary hit point" : " mod (minimum 1 temp HP") + ").\nWhile transformed like this, my walking speed increases with 5 ft.\nAs a reaction when an enemy ends its turn within 5 ft of me while I'm shifted, I can move 10 ft without provoking opportunity attacks.",
		action : ['reaction', 'Stride (while shifted)'],
		features : {
			"shift" : {
				name : "Shift",
				minlevel : 1,
				usages : 1,
				recovery : "short rest",
				action : ["bonus action", " (start/end)"]
			}
		}
	};
	RaceList["wildhunt shifter"] = {
		regExpSearch : /^(?=.*shifter)(?=.*wild)(?=.*hunt).*$/i,
		name : "Wildhunt shifter",
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
		scores : [0, 1, 0, 0, 2, 0],
		trait : "Wildhunt Shifter: (+1 Dexterity, +2 Wisdom)\nShifting: As a bonus action once per short rest, I can transform and get adv. on Wis checks." + (typePF ? " " : "\n") + "This transformation lasts for 1 minute, until I die, or until I revert back as a bonus action.\nWhen I shift, I gain temporary HP equal to my level + my Con" + (typePF ? "stitution modifier (minimum 1 temporary hit point" : " mod (minimum 1 temp HP") + ").\nMark the Scent: As a bonus action once per short rest, I can mark a creature that I can see within 10 ft. Until the end of my next long rest, my proficiency bonus is doubled for checks to find this target, and I always know its location if it is within 60 ft of me.",
		features : {
			"shift" : {
				name : "Shift",
				minlevel : 1,
				usages : 1,
				recovery : "short rest",
				action : ["bonus action", " (start/end)"]
			},
			"mark the scent" : {
				name : "Mark the Scent",
				minlevel : 1,
				usages : 1,
				recovery : "short rest",
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
		scorestxt : "+1 Constitution and +1 to two other ability scores of my choice",
		scores : [0, 0, 1, 0, 0, 0],
		trait : "Envoy Warforged (+1 Constitution and +1 to two other abilit" + (typePF ? "ies" : "y scores of my choice") + ")\nWarforged Resilience: I do not need to sleep, eat, drink, or breathe.\nSentry's Rest: To benefit from a long rest, I need to enter an inactive state for 6 hours, during which I am not rendered unconscious and can see and hear as normal.\nIntegrated Protection: My AC depends on armor proficiency: none (11+Dex), light (11+Dex+Prof B), medium (13+Dex+Prof B), heavy (16+Prof B; Stealth disadv.). I can use a shield.\nIntegrated Tool: I have expertise with one tool and it is integrated into my body.",
		eval : function() {
			var lightProf = tDoc.getField('Proficiency Armor Light').isBoxChecked(0);
			if (tDoc.getField('Proficiency Armor Heavy').isBoxChecked(0)) {
				AddArmor('Heavy Plating (Prof)', true);
			} else if (tDoc.getField('Proficiency Armor Medium').isBoxChecked(0) && ((What('Dex') < 18 && lightProf) || !lightProf)) {
				AddArmor('Composite Plating (Prof)', true);
			} else {
				AddArmor('Darkwood Core' + (lightProf ? " (Prof)" : ""), true);
			};
		},
		removeeval : "if ((/darkwood core|composite plating|heavy plating/).test(CurrentArmour.known)) { tDoc.resetForm(['AC Armor Description']); }; ",
		armourOptions : [{
			regExpSearch : /^(?=.*darkwood)(?=.*core).*$/i,
			name : "Darkwood core",
			source : [["WGtE", 69], ["UA:RoE", 9]],
			ac : 11
		}, {
			regExpSearch : /^(?=.*darkwood)(?=.*core)(?=.*prof).*$/i,
			name : "Darkwood core (Prof)",
			source : [["WGtE", 69], ["UA:RoE", 9]],
			ac : 11,
			addMod : true
		}, {
			regExpSearch : /^(?=.*composite)(?=.*plating).*$/i,
			name : "Composite plating (Prof)",
			source : [["WGtE", 69], ["UA:RoE", 9]],
			ac : 13,
			addMod : true,
			dex : 2
		}, {
			regExpSearch : /^(?=.*heavy)(?=.*plating).*$/i,
			name : "Heavy plating (Prof)",
			source : [["WGtE", 69], ["UA:RoE", 9]],
			ac : 16,
			addMod : true,
			stealthdis : true,
			dex : -10
		}]
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
		weaponOptions : {
			baseWeapon : "unarmed strike",
			regExpSearch : /^(?=.*warforged)(?=.*iron)(?=.*fists?).*$/i,
			name : "Warforged iron fists",
			source : [["WGtE", 70], ["UA:RoE", 9]],
			damage : [1, 4, "bludgeoning"]
		},
		addWeapons : ["Warforged Iron Fists"],
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
		scores : [2, 0, 1, 0, 0, 0],
		trait : "Juggernaut Warforged (+2 Strength, +1 Constitution)" + (typePF ? "" : " Iron Fists: unarmed strikes do 1d4.") + "\nWarforged Resilience: I do not need to sleep, eat, drink, or breathe.\nSentry's Rest: To benefit from a long rest, I need to enter an inactive state for 6 hours, during which I am not rendered unconscious and can see and hear as normal.\nIntegrated Protection: My AC depends on armor proficiency: none (11+Dex), light (11+Dex+Prof B), medium (13+Dex+Prof B), heavy (16+Prof B; Stealth disadv.). I can use a shield.\nPowerful Build: I count as one size larger for my carrying capacity, push, drag, and lift." + (typePF ? " Iron Fists: My unarmed strikes do 1d4 damage." : ""),
		eval : function() {
			var lightProf = tDoc.getField('Proficiency Armor Light').isBoxChecked(0);
			if (tDoc.getField('Proficiency Armor Heavy').isBoxChecked(0)) {
				AddArmor('Heavy Plating (Prof)', true);
			} else if (tDoc.getField('Proficiency Armor Medium').isBoxChecked(0) && ((What('Dex') < 18 && lightProf) || !lightProf)) {
				AddArmor('Composite Plating (Prof)', true);
			} else {
				AddArmor('Darkwood Core' + (lightProf ? " (Prof)" : ""), true);
			};
		},
		removeeval : "if ((/darkwood core|composite plating|heavy plating/).test(CurrentArmour.known)) { tDoc.resetForm(['AC Armor Description']); }; ",
		armourOptions : [{
			regExpSearch : /^(?=.*darkwood)(?=.*core).*$/i,
			name : "Darkwood core",
			source : [["WGtE", 69], ["UA:RoE", 9]],
			ac : 11
		}, {
			regExpSearch : /^(?=.*darkwood)(?=.*core)(?=.*prof).*$/i,
			name : "Darkwood core (Prof)",
			source : [["WGtE", 69], ["UA:RoE", 9]],
			ac : 11,
			addMod : true
		}, {
			regExpSearch : /^(?=.*composite)(?=.*plating).*$/i,
			name : "Composite plating (Prof)",
			source : [["WGtE", 69], ["UA:RoE", 9]],
			ac : 13,
			addMod : true,
			dex : 2
		}, {
			regExpSearch : /^(?=.*heavy)(?=.*plating).*$/i,
			name : "Heavy plating (Prof)",
			source : [["WGtE", 69], ["UA:RoE", 9]],
			ac : 16,
			addMod : true,
			stealthdis : true,
			dex : -10
		}]
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
		scores : [0, 2, 1, 0, 0, 0],
		trait : "Skirmisher Warforged (+2 Dexterity, +1 Constitution)\nWarforged Resilience: I do not need to sleep, eat, drink, or breathe.\nSentry's Rest: To benefit from a long rest, I need to enter an inactive state for 6 hours, during which I am not rendered unconscious and can see and hear as normal.\nIntegrated Protection: My AC depends on armor proficiency: none (11+Dex), light (11+Dex+Prof B), medium (13+Dex+Prof B), heavy (16+Prof B; Stealth disadv.). I can use a shield.\nLight Step: If I travel alone for an hour or more, I can move stealthily at a normal pace.",
		eval : function() {
			var lightProf = tDoc.getField('Proficiency Armor Light').isBoxChecked(0);
			if (tDoc.getField('Proficiency Armor Heavy').isBoxChecked(0)) {
				AddArmor('Heavy Plating (Prof)', true);
			} else if (tDoc.getField('Proficiency Armor Medium').isBoxChecked(0) && ((What('Dex') < 18 && lightProf) || !lightProf)) {
				AddArmor('Composite Plating (Prof)', true);
			} else {
				AddArmor('Darkwood Core' + (lightProf ? " (Prof)" : ""), true);
			};
		},
		removeeval : "if ((/darkwood core|composite plating|heavy plating/).test(CurrentArmour.known)) { tDoc.resetForm(['AC Armor Description']); }; ",
		armourOptions : [{
			regExpSearch : /^(?=.*darkwood)(?=.*core).*$/i,
			name : "Darkwood core",
			source : [["WGtE", 69], ["UA:RoE", 9]],
			ac : 11
		}, {
			regExpSearch : /^(?=.*darkwood)(?=.*core)(?=.*prof).*$/i,
			name : "Darkwood core (Prof)",
			source : [["WGtE", 69], ["UA:RoE", 9]],
			ac : 11,
			addMod : true
		}, {
			regExpSearch : /^(?=.*composite)(?=.*plating).*$/i,
			name : "Composite plating (Prof)",
			source : [["WGtE", 69], ["UA:RoE", 9]],
			ac : 13,
			addMod : true,
			dex : 2
		}, {
			regExpSearch : /^(?=.*heavy)(?=.*plating).*$/i,
			name : "Heavy plating (Prof)",
			source : [["WGtE", 69], ["UA:RoE", 9]],
			ac : 16,
			addMod : true,
			stealthdis : true,
			dex : -10
		}]
	};
}
