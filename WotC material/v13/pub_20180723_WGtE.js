var iFileName = "pub_20180723_WGtE.js";
RequiredSheetVersion(13);
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
	weaponsAdd : ["Longtooth Fangs"],
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
	toolProfs : [["Any tool", 1]],
	skillstxt : "Choose any one skill, any one tool, and expertise with any one tool I'm proficient with",
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
			CurrentRace.armorAdd = 'Heavy Plating (Prof)';
		} else if (tDoc.getField('Proficiency Armor Medium').isBoxChecked(0) && ((What('Dex') < 18 && lightProf) || !lightProf)) {
			CurrentRace.armorAdd = 'Composite Plating (Prof)';
		} else {
			CurrentRace.armorAdd = 'Darkwood Core' + (lightProf ? " (Prof)" : "");
		};
	},
	removeeval : function () {
		if ((/darkwood core|composite plating|heavy plating/).test(CurrentArmour.known)) {
			tDoc.resetForm(['AC Armor Description']);
		};
	},
	armorOptions : [{
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
	weaponsAdd : ["Warforged Iron Fists"],
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
	carryingCapacity : 2,
	eval : function() {
		var lightProf = tDoc.getField('Proficiency Armor Light').isBoxChecked(0);
		if (tDoc.getField('Proficiency Armor Heavy').isBoxChecked(0)) {
			CurrentRace.armorAdd = 'Heavy Plating (Prof)';
		} else if (tDoc.getField('Proficiency Armor Medium').isBoxChecked(0) && ((What('Dex') < 18 && lightProf) || !lightProf)) {
			CurrentRace.armorAdd = 'Composite Plating (Prof)';
		} else {
			CurrentRace.armorAdd = 'Darkwood Core' + (lightProf ? " (Prof)" : "");
		};
	},
	removeeval : function () {
		if ((/darkwood core|composite plating|heavy plating/).test(CurrentArmour.known)) {
			tDoc.resetForm(['AC Armor Description']);
		};
	},
	armorOptions : [{
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
			CurrentRace.armorAdd = 'Heavy Plating (Prof)';
		} else if (tDoc.getField('Proficiency Armor Medium').isBoxChecked(0) && ((What('Dex') < 18 && lightProf) || !lightProf)) {
			CurrentRace.armorAdd = 'Composite Plating (Prof)';
		} else {
			CurrentRace.armorAdd = 'Darkwood Core' + (lightProf ? " (Prof)" : "");
		};
	},
	removeeval : function () {
		if ((/darkwood core|composite plating|heavy plating/).test(CurrentArmour.known)) {
			tDoc.resetForm(['AC Armor Description']);
		};
	},
	armorOptions : [{
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

// Elf Variants
if (RaceList["wood elf"]) {
	AddRacialVariant("wood elf", "aereni", {
		regExpSearch : /aereni/i,
		name : "Aereni wood elf",
		source : ["WGtE", 73],
		plural : "Aereni wood elves",
		weaponProfs : "",
		skillstxt : "Proficiency and expertise with any one skill or tool",
		trait : "Aereni " + RaceList["wood elf"].trait
	});
	AddRacialVariant("wood elf", "valenar", {
		regExpSearch : /valenar/i,
		name : "Valenar wood elf",
		source : ["WGtE", 73],
		plural : "Valenar wood elves",
		weaponProfs : [false, false, ["scimitar", "double-bladed scimitar", "longbow", "shortbow"]],
		trait : "Valenar " + RaceList["wood elf"].trait
	});
}
AddRacialVariant("high elf", "aereni", {
	regExpSearch : /aereni/i,
	name : "Aereni high elf",
	source : ["WGtE", 73],
	plural : "Aereni high elves",
	weaponProfs : "",
	skillstxt : "Proficiency and expertise with any one skill or tool",
	trait : "Aereni " + RaceList["high elf"].trait
});
AddRacialVariant("high elf", "valenar", {
	regExpSearch : /valenar/i,
	name : "Valenar high elf",
	source : ["WGtE", 73],
	plural : "Valenar high elves",
	weaponProfs : [false, false, ["scimitar", "double-bladed scimitar", "longbow", "shortbow"]],
	trait : "Valenar " + RaceList["high elf"].trait
});

// Double bladed scimitar
WeaponsList["double-bladed scimitar"] = {
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
	prereqeval : function(v) { return (/^(?!.*half)(?=.*(elf|eladrin|avariel|grugach|shadar-kai)).*$/i).test(CurrentRace.known); },
	descriptionFull : "You are descended from a master of the double blade and their skills have passed on to you. You gain the following benefits:\n \u2022 While wielding a double-bladed weapon with two hands, the weapon has the finesse trait for your attacks with it, and you gain +1 AC.\n \u2022 On your turn, when you use a bonus action to make a melee attack with the blade at the opposite end of the weapon, the weapon's damage die for this attack increases to 2d4, instead of 1d4.",
	description : "As a bonus action with the Attack action, I can make an extra with a double-bladed weapon for 2d4 slashing damage. I treat double-bladed weapons as having the finesse trait. +1 AC while wielding a double-bladed weapon with two hands. [+1 Strength or Dexterity]",
	scorestxt : "+1 Strength or Dexterity",
	action : ["bonus action", " (with Attack action)"],
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.baseWeaponName == 'double-bladed scimitar' && fields.Proficiency) {
					fields.Description = fields.Description.replace('Two-handed; With Attack action, one attack as bonus action for 1d4', 'Finesse, two-handed; With Attack action, one attack as bonus action');
					fields.Mod = v.StrDex;
				};
			},
			"Double-bladed weapons count as having finesse for me and I can make an extra attack with them as a bonus action when taking the Attack action."
		]
	},
	extraAC : {
		mod : 1,
		text : "I gain a +1 bonus to AC while I'm wielding a double-bladed weapon in two hands.",
		stopeval : function (v) { return v.usingShield && !(/animated/i).test(What("AC Shield Bonus Description")); }
	}
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
	scorestxt : "+1 Dexterity, +1 Intelligence, and another +1 to either Dexterity or Intelligence",
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
			list : { 'class' : 'wizard', level : [0, 0] },
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
	scorestxt : "+2 Dexterity and +1 to another ability score of my choice",
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
FeatsList["greater dragonmark"] = {
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
			name : "1\u00D7 per long",
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
			name : "1\u00D7 per long",
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
			name : "1\u00D7 per long",
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
			name : "1\u00D7 per long",
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
			name : "1\u00D7 per long",
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
			name : "1\u00D7 per long",
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
			name : "1\u00D7 per long",
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
			name : "1\u00D7 per short",
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
			name : "1\u00D7 per short",
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
			name : "1\u00D7 per long",
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
			name : "1\u00D7 per long",
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
			name : "1\u00D7 per long",
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
			"glyph of warding" : {
				compMaterial : "A Siberys dragonshard with a value of at least 100 gp",
				description : "Hide chest with content in Ethereal Plane for 60 days, after that chance of loss; 1 a reappear (100gp)",
				changes : "Leomund's Secret Chest cast through my Greater Dragonmark of Warding requires a Siberys dragonshard as a focus instead of an exquisite chest and its tiny replica."
			}
		}
	}
};

// Aberrant Dragonmark feat
FeatsList["aberrant dragonmark"] = {
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

// Magic Items
MagicItemsList["armblade"] = {
	name : "Armblade",
	source : [["WGtE", 120], ["UA:MIoE", 3]],
	type : "weapon (any one-handed melee weapon)",
	rarity : "common",
	description : "As a warforged, I can integrate this weapon in my forearm by attuning to it. While attached, it can't be disarmed or removed against my will, but I can't use that hand for other actions. I can spend one minute to end the attunement and remove the armblade. The weapon isn't inherently magical.",
	descriptionFull : "An armblade is a weapon designed to integrate with the forearm of a warforged. If you're a warforged, you can attach an armblade by attuning to it. An attached armblade cannot be disarmed or removed from you against your will, but while the weapon is attached you cannot use that hand for other actions. You can spend one minute to end the attunement and remove the armblade.\n   An armblade isn't inherently considered to be a magic weapon for purposes of overcoming damage resistance. However, any sort of magical melee weapon could be created as an armblade, so you could acquire a vicious armblade or a vorpal armblade.",
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
MagicItemsList["bag of bounty"] = {
	name : "Bag of Bounty",
	source : ["WGtE", 116],
	type : "wondrous item",
	rarity : "uncommon",
	description : "As an action three times per dawn, I can cast Create Food and Water, but can try and create fine food with a Cha check. If I'm proficient with cook's utensils, I add my proficiency bonus. Meal quality: modest (DC 10), comfortable (DC 13), wealthy (DC 15), aristocratic (DC 18). Failure results in a sour and squalid meal. ",
	descriptionFull : "This is a sturdy leather sack with tiny Siberys shards embedded into the lining. If you have the Mark of Hospitality you can use an action to cast create food and water, drawing a feast from within the bag. You shape this meal with your thoughts. You can create the standard bland fare without requiring any sort of check, but you can attempt to create finer food by making a Charisma check; if you're proficient with cook's utensils, add your bonus to this check. A failed check results in a sour and squalid meal.\n\n" + toUni("DC\tFood Quality") + "\nNo roll\tPoor\n10\tModest\n13\tComfortable\n15\tWealthy\n18\tAristocratic\n\nA bag of bounty can be used up to three times over the course of a day. After that, the bag can't be used again until the next dawn.",
	prerequisite : "Can only be used by someone with a Dragonmark of Hospitality",
	prereqeval : function (v) {
		return (/^(?=.*dragonmark)(?=.*hospitality).*$/i).test(CurrentRace.known);
	},
	spellFirstColTitle : "Ch",
	spellcastingBonus : {
		name : "3 times per long rest",
		spells : ["create food and water"],
		selection : ["create food and water"],
		firstCol : 1
	},
	spellChanges : {
		"create food and water" : {
			description : "Create 45 lb food and 30 gal water; feeds 15 humanoids or 5 steeds for 24h; Cha check for quality",
			changes : "Using the Bag of Bounty, I can create the standard bland fare without requiring any sort of check, but I can attempt to create finer food by making a Charisma check, adding my proficiency bonus if I'm proficient with cook's utensils. A failed check results in a sour and squalid meal."
		}
	},
	usages : 3,
	recovery : "dawn"
}
MagicItemsList["band of loyalty"] = {
	name : "Band of Loyalty",
	source : [["WGtE", 115], ["UA:MIoE", 2]],
	type : "ring",
	rarity : "common",
	description : "If I'm reduced to zero hit points while attuned to this ring, I instantly die. These rings are favored by spies who can't afford to fall into enemy hands.",
	descriptionFull : "If you are reduced to zero hit points while attuned to a band of loyalty, you instantly die. These rings are favored by spies who can't afford to fall into enemy hands.",
	attunement : true
}
MagicItemsList["cleansing stone"] = {
	name : "Cleansing Stone",
	source : [["WGtE", 115], ["UA:MIoE", 2]],
	type : "wondrous item",
	rarity : "common",
	description : "This stone sphere is 1 ft in diameter and engraved with mystic sigils. As an action while touching it, I can activate it to remove dirt and grime from my garments and my person.",
	descriptionFull : "A cleansing stone is a stone sphere one foot in diameter, engraved with mystic sigils. When touching the stone, you can use an action to activate it and remove dirt and grime from your garments and your person. Cleansing stones are often embedded into pedestals in public squares in Aundair or found in high-end Ghallanda inns.",
	action : [["action", ""]]
}
var docentFullDescription = [
	"A docent is a small metal sphere, approximately 2 inches across, studded with dragonshards. Despite a strong magical aura, it has no obvious abilities. When you attune to a docent, the sphere becomes embedded in your chest and comes to life\u2014literally.",
	">>Sentience<<. A docent is a sentient neutral item with an Intelligence of 16, a Wisdom of 14, and a Charisma of 14. It can perceive the world through your senses.",
	"A docent communicates telepathically with its wielder and can speak, read, and understand Common and Giant.",
	">>Personality<<. A docent is designed to advise and assist the warforged it's attached to. One of the simple functions of a docent is to serve as a translator. The docent's properties are under its control, and if you have a bad relationship with your docent it may refuse to assist you… or simply lie about information that it obtains. However, if you treat your docent well it could serve as a useful ally.",
	"The origin of docents is a great mystery. House Cannith created the first warforged thirty years ago. But the docents come from the distant land of Xen'drik and appear to be thousands of years old. Were they created to interface with some other form of construct? Or are the modern warforged a new interpretation of an ancient design? The docents claim to have forgotten their creators… but this is a mystery waiting to be unraveled. While all docents come from Xen'drik, some have been brought to Khorvaire by explorers and it's possible to encounter them in the Five Nations.",
	">>Languages<<. All docents understand Common and Giant, but a docent knows up to four additional languages. Elvish and Draconic are common options. If a docent knows less than six languages in total, it can add new languages to its repertoire after encountering them. So a docent found in Xen'drik may have never encountered a dwarf before… but after spending some time in Khorvaire studying dwarves, it could pick up the Dwarvish language.",
	">>Properties<<. A docent possesses up to three of the following properties:",
	"\u2022 The docent can cast the detect magic spell at will.",
	"\u2022 The docent can cast the detect evil and good spell at will.",
	"\u2022 The docent can detect any form of divination or scrying targeting it and its warforged host.",
	"\u2022 The docent has a +7 bonus to Intelligence (Arcana) checks.",
	"\u2022 The docent has a +7 bonus to Intelligence (History) checks.",
	"\u2022 The docent has a +7 bonus to Intelligence (Investigation) checks.",
	"\u2022 The docent has a +7 bonus to Intelligence (Nature) checks.",
	"\u2022 The docent has a +6 bonus to Wisdom (Insight) checks.",
	"\u2022 The docent has a +6 bonus to Wisdom (Perception) checks.",
	"\u2022 The docent has a +6 bonus to Wisdom (Medicine) checks targeting its warforged host. If the host is rendered unconscious, the docent will automatically attempt to stabilize them once each turn.",
	"You can use a bonus action on your turn to request that the docent use one of its properties on your behalf."
];
MagicItemsList["docent"] = {
	name : "Docent",
	source : [["WGtE", 121], ["UA:MIoE", 3]],
	type : "wondrous item",
	rarity : "rare",
	description : "I can embed this sentient small metal sphere studded with dragonshards into my chest. I can communicate telepathically with it. It can serve me as an advisor and a translator, as it knowns 6 languages. It also knows spells and/or skills that I can have it use as a bonus action. See Notes page.",
	descriptionFull : docentFullDescription.join("\n   ").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
	attunement : true,
	prerequisite : "Requires attunement by a warforged",
	prereqeval : function (v) { return (/warforged/i).test(CurrentRace.known); },
	action : [["bonus action", ""]],
	toNotesPage : [{
		name : "Features",
		popupName : "Features of Docent",
		note : desc(docentFullDescription).replace(/>>(.*?)<</g, function(a, match) { return match.toUpperCase(); }).replace(/your/g, "my").replace(/you are /ig, "I am ").replace(/(of|on|assist) you/ig, "$1 me").replace(/you /ig, "I ") + "\n\n" + sentientItemConflictTxt
	}]
}
MagicItemsList["everbright lantern"] = {
	name : "Everbright Lantern",
	source : [["WGtE", 115], ["UA:MIoE", 2]],
	type : "wondrous item",
	rarity : "common",
	description : "This bullseye lantern is powered by a dragonshard imbued with the effect of a Continual Flame spell. The light never goes out, but it can be shuttered off. It casts bright light in a 60-ft cone and dim light for an additional 60 ft.",
	descriptionFull : "An everbright lantern contains an Eberron dragonshard imbued with the effect of a continual flame spell. This bright light is mounted inside a normal bullseye lantern, allowing the light to be shuttered off. An everbright lantern provides clear illumination in a 60-foot cone and shadowy illumination in a 120-foot cone, just like a mundane bullseye lantern, but its flame never goes out."
}
MagicItemsList["feather token"] = {
	name : "Feather Token",
	source : [["WGtE", 115], ["UA:MIoE", 2]],
	type : "wondrous item",
	rarity : "common",
	description : "Once as a bonus action while the token is in my possession, I can use it to cast Feather Fall. This small metal disk is inscribed with the image of a feather and only holds sufficient charge for a single use, after which it loses its power.",
	descriptionFull : "This small metal disk is inscribed with the image of a feather. While the token is in your possession, you can cast feather fall as a bonus action. A feather token only holds sufficient charge for a single use, after which it loses its power. While it's an expensive form of insurance, frequent airship travelers and citizens of Sharn often appreciate the security it provides."
}
MagicItemsList["glamerweave"] = {
	name : "Glamerweave",
	source : [["WGtE", 115], ["UA:MIoE", 2]],
	type : "wondrous item",
	rarity : "common",
	description : "Glamerweave clothing is imbued with cosmetic illusions that have no impact on combat. Most of the time, these patterns are contained within the cloth, but higher-end glamerweave can have more dramatic effects. A gown could appear to be wreathed in flames, or a hat orbited by illusory butterflies.",
	descriptionFull : "Glamerweave clothing is imbued with cosmetic illusions. Traditionally, these patterns are contained within the cloth, but higher-end glamerweave can have more dramatic effects. You could have a gown that appears to be wreathed in flames, or a hat that's orbited by illusory butterflies. Regardless of the design, these are cosmetic effects and have no impact on combat.\n\n" + [
		toUni("1d8\tDescription"),
		"  1\tA hat orbited by the twelve moons",
		"  2\tLong gloves wreathed in cold flames",
		"  3\tA traveler's cloak lined with glittering stars",
		"  4\tA scarlet gown that glows with inner radiance",
		"  5\tA cloth shirt that appears to be a chain shirt",
		"  6\tA silver gown surrounded by drifting snowflakes",
		"  7\tA robe with two dragons wrestling across the back",
		"  8\tA cloak that slowly and subtly shifts colors"
	].join("\n")
}
MagicItemsList["imbued wood"] = {
	name : "Imbued Wood",
	source : [["WGtE", 114], ["UA:MIoE", 1]],
	type : "wondrous item",
	rarity : "common",
	description : "While holding a rod, wand, or staff made of imbued wood, spells I cast that deal the associated damage type add a +1 bonus to one of their damage rolls.",
	descriptionFull : "Powerful manifest zones can infuse local trees with planar energies. A gifted artificer can tap into this to create a wand, staff, or rod that is especially effective at channeling a particular type of energy.\n   When you cast a spell that deals damage of the type associated with the material your arcane focus is made from, the spell gains a +1 bonus to one damage roll of that spell. The materials and their associated damage types are listed here.\n \u2022 Fernian ash: Fire damage.\n \u2022 Irian rosewood: Radiant damage.\n \u2022 Kythrian manchineel: Acid or poison damage.\n \u2022 Lamannian oak: Lightning or thunder damage.\n \u2022 Mabaran ebony: Necrotic damage.\n \u2022 Quori beech, Xorian wenge: Psychic damage.\n \u2022 Risian pine: Cold damage.\n \u2022 Shavarran birch: Force damage.",
	attunement : true,
	allowDuplicates : true,
	choices : ["Fernian Ash (fire)", "Irian Rosewood (radiant)", "Kythrian Manchineel (acid and poison)", "Lamannian Oak (lightning and thunder)", "Mabaran Ebony (necrotic)", "Quori Beech (psychic)", "Risian Pine (cold)", "Shavarran Birch (force)", "Xorian Wenge (psychic)"],
	"fernian ash (fire)" : {
		name : "Fernian Ash Arcane Focus",
		description : "While holding a rod, wand, or staff made of Fernian ash, spells I cast that deal fire damage add a +1 bonus to one of their damage rolls.",
		spellAdd : [
			function (spellKey, spellObj, spName) {
				if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "fire", 1, true, true);
			},
			"Cantrips and spells that deal fire damage get a +1 bonus added to one of their damage rolls."
		]
	},
	"irian rosewood (radiant)" : {
		name : "Irian Rosewood Arcane Focus",
		description : "While holding a rod, wand, or staff made of Irian rosewood, spells I cast that deal radiant damage add a +1 bonus to one of their damage rolls.",
		spellAdd : [
			function (spellKey, spellObj, spName) {
				if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "radiant", 1, true, true);
			},
			"Cantrips and spells that deal radiant damage get a +1 bonus added to one of their damage rolls."
		]
	},
	"kythrian manchineel (acid and poison)" : {
		name : "Kythrian Manchineel Arcane Focus",
		description : "While holding a rod, wand, or staff made of Kythrian manchineel, spells I cast that deal acid or poison damage add a +1 bonus to one of their damage rolls.",
		spellAdd : [
			function (spellKey, spellObj, spName) {
				if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "acid|poison", 1, true, true);
			},
			"Cantrips and spells that deal acid or poison damage get a +1 bonus added to one of their damage rolls."
		]
	},
	"lamannian oak (lightning and thunder)" : {
		name : "Lamannian Oak Arcane Focus",
		description : "While holding a rod, wand, or staff made of Lamannian oak, spells I cast that deal lightning or thunder damage add a +1 bonus to one of their damage rolls.",
		spellAdd : [
			function (spellKey, spellObj, spName) {
				if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "lightning|thunder", 1, true, true);
			},
			"Cantrips and spells that deal lightning or thunder damage get a +1 bonus added to one of their damage rolls."
		]
	},
	"mabaran ebony (necrotic)" : {
		name : "Mabaran Ebony Arcane Focus",
		description : "While holding a rod, wand, or staff made of Mabaran ebony, spells I cast that deal necrotic damage add a +1 bonus to one of their damage rolls.",
		spellAdd : [
			function (spellKey, spellObj, spName) {
				if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "necrotic", 1, true, true);
			},
			"Cantrips and spells that deal necrotic damage get a +1 bonus added to one of their damage rolls."
		]
	},
	"quori beech (psychic)" : {
		name : "Quori Beech Arcane Focus",
		description : "While holding a rod, wand, or staff made of Quori beech, spells I cast that deal psychic damage add a +1 bonus to one of their damage rolls.",
		spellAdd : [
			function (spellKey, spellObj, spName) {
				if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "psychic", 1, true, true);
			},
			"Cantrips and spells that deal psychic damage get a +1 bonus added to one of their damage rolls."
		]
	},
	"risian pine (cold)" : {
		name : "Risian Pine Arcane Focus",
		description : "While holding a rod, wand, or staff made of Risian pine, spells I cast that deal cold damage add a +1 bonus to one of their damage rolls.",
		spellAdd : [
			function (spellKey, spellObj, spName) {
				if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "cold", 1, true, true);
			},
			"Cantrips and spells that deal cold damage get a +1 bonus added to one of their damage rolls."
		]
	},
	"shavarran birch (force)" : {
		name : "Shavarran Birch Arcane Focus",
		description : "While holding a rod, wand, or staff made of Shavarran birch, spells I cast that deal force damage add a +1 bonus to one of their damage rolls.",
		spellAdd : [
			function (spellKey, spellObj, spName) {
				if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "force", 1, true, true);
			},
			"Cantrips and spells that deal force damage get a +1 bonus added to one of their damage rolls."
		]
	},
	"xorian wenge (psychic)" : {
		name : "Xorian Wenge Arcane Focus",
		description : "While holding a rod, wand, or staff made of Xorian wenge, spells I cast that deal psychic damage add a +1 bonus to one of their damage rolls.",
		spellAdd : [
			function (spellKey, spellObj, spName) {
				if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "psychic", 1, true, true);
			},
			"Cantrips and spells that deal psychic damage get a +1 bonus added to one of their damage rolls."
		]
	}
}
MagicItemsList["inquisitive's goggles"] = {
	name : "Inquisitive's Goggles",
	source : ["WGtE", 115],
	type : "wondrous item",
	rarity : "uncommon",
	description : "I can add my Intuition Die to my Wis (Insight) checks. When I examine an object, I can make a Wis (Perception) check to sense the aura of the last living creature to touch it (DC is 13 + days since last contact). On a success, I learn the creature's species and I can immediately use my Imprint Prey ability to target it.",
	descriptionLong : "The lenses of these garish goggles are carved from Siberys dragonshards. It allows me to can add my Intuition Die to my Wisdom (Insight) checks. When I examine an object, I can use it to make a Wisdom (Perception) check to identify the aura of the last living creature to touch the object.The DC is 13 + the number of days since the last contact occurred. If the check is successful, I learn the species of the creature and I can immediately use my Imprint Prey ability to target this creature.",
	descriptionFull : "The lenses of these goggles are carved from Siberys dragonshards. While garish in appearance, these goggles are a boon to any Tharashk inquisitive. To attune to the goggles, you must possess the Mark of Finding. As long as this condition is met, you gain the following benefits:\n \u2022 You can add your Intuition die from the Hunter's Intuition trait of the mark when you make Wisdom (Insight) checks.\n \u2022 When you examine an object, you can make a Wisdom (Perception) check to identify the aura of the last living creature to touch the object. The DC is 13 + the number of days since the last contact occurred. If the check is successful, you learn the species of the creature and you can immediately use your Imprint Prey ability to target this creature.",
	attunement : true,
	prerequisite : "Requires attunement by someone with a Dragonmark of Finding",
	prereqeval : function (v) {
		return (/^(?=.*dragonmark)(?=.*finding).*$/i).test(CurrentRace.known);
	}
}
MagicItemsList["keycharm"] = {
	name : "Keycharm",
	source : ["WGtE", 115],
	type : "wondrous item",
	rarity : "common",
	description : "When I cast Alarm, Arcane Lock, Glyph of Warding, or a similar abjuration effect, I can tie it to the keycharm. Whoever holds the keycharm is considered to be the owner of this effect. For example, they receive the notification from Alarm, can safely avoid a Glyph of Warding, or can circumvent the Arcane Lock.",
	descriptionFull : "This simple object plays a vital role in the work of House Kundarak. If you possess the Mark of Warding, when you cast alarm, arcane lock, glyph of warding, or similar abjuration effects, you can tie the effect to the keycharm. Whoever holds the keycharm is considered to the owner of this enchantment; they receive the notification from alarm, they can safely avoid a glyph, and they can deactivate any associated effect.",
	prerequisite : "Can only be used by someone with a Dragonmark of Warding",
	prereqeval : function (v) {
		return (/^(?=.*dragonmark)(?=.*warding).*$/i).test(CurrentRace.known);
	}
}
MagicItemsList["orb of shielding"] = {
	name : "Orb of Shielding",
	source : [["WGtE", 114], ["UA:MIoE", 1]],
	type : "wondrous item",
	rarity : "common",
	description : "An orb of shielding is made from crystal or stone aligned to one of the planes. While I am holding the orb and take damage of the type associated with the material the orb is made from, I can use my reaction to reduce the damage by 1d4.",
	descriptionFull : "An orb of shielding is made from crystal or stone aligned to one of the planes. While you are holding the orb and take damage of the type associated with the material your orb is made from, you can use your reaction to reduce the damage by 1d4. The materials and their associated damage types are listed below.\n" +
	"\n \u2022 Fernian basalt: Fire damage" +
	"\n \u2022 Irian quartz: Radiant damage" +
	"\n \u2022 Kythrian skarn: Acid or poison damage" +
	"\n \u2022 Lamannian flint: Lightning or thunder damage" +
	"\n \u2022 Mabaran obsidian: Necrotic damage" +
	"\n \u2022 Quori celestine, Xorian marble: Psychic damage" +
	"\n \u2022 Risian shale: Cold damage" +
	"\n \u2022 Shavaran chert: Force damage",
	attunement : true,
	weight : 3,
	action : [["reaction", ""]],
	choices : ["Fernian Basalt (fire)", "Irian Quartz (radiant)", "Kythrian Skarn (acid or poison)", "Lamannian Flint (lightning or thunder)", "Mabaran Obsidian (necrotic)", "Quori Celestine (psychic)", "Risian Shale (cold)", "Shavaran Chert (force)", "Xorian Marble (psychic)"],
	"fernian basalt (fire)" : {
		name : "Orb of Shielding [Fernian Basalt]",
		description : "This stone orb is made from fernian basalt. As a reaction while I am holding the orb and take fire damage, I can reduce the damage by 1d4."
	},
	"irian quartz (radiant)" : {
		name : "Orb of Shielding [Irian Quartz]",
		description : "This crystal orb is made from irian quartz. As a reaction while I am holding the orb and take radiant damage, I can reduce the damage by 1d4."
	},
	"kythrian skarn (acid or poison)" : {
		name : "Orb of Shielding [Kythrian Skarn]",
		description : "This stone orb is made from kythrian skarn. As a reaction while I am holding the orb and take acid or poison damage, I can reduce the damage by 1d4."
	},
	"lamannian flint (lightning or thunder)" : {
		name : "Orb of Shielding [Lamannian Flint]",
		description : "This stone orb is made from lamannian flint. As a reaction while I am holding the orb and take lightning or thunder damage, I can reduce the damage by 1d4."
	},
	"mabaran obsidian (necrotic)" : {
		name : "Orb of Shielding [Mabaran Obsidian]",
		description : "This crystal orb is made from mabaran obsidian. As a reaction while I am holding the orb and take necrotic damage, I can reduce the damage by 1d4."
	},
	"quori celestine (psychic)" : {
		name : "Orb of Shielding [Quori Celestine]",
		description : "This crystal orb is made from quori celestine. As a reaction while I am holding the orb and take psychic damage, I can reduce the damage by 1d4."
	},
	"risian shale (cold)" : {
		name : "Orb of Shielding [Risian Shale]",
		description : "This stone orb is made from risian shale. As a reaction while I am holding the orb and take cold damage, I can reduce the damage by 1d4."
	},
	"shavaran chert (force)" : {
		name : "Orb of Shielding [Shavaran Chert]",
		description : "This stone orb is made from shavaran chert. As a reaction while I am holding the orb and take force damage, I can reduce the damage by 1d4."
	},
	"xorian marble (psychic)" : {
		name : "Orb of Shielding [Xorian Marble]",
		description : "This stone orb is made from xorian marble. As a reaction while I am holding the orb and take psychic damage, I can reduce the damage by 1d4."
	}
}
MagicItemsList["rings of shared suffering"] = {
	name : "Rings of Shared Suffering",
	source : ["WGtE", 117],
	type : "ring",
	rarity : "uncommon",
	description : "I can only attune to one of these rings. As a bonus action, I can link this ring to the other of its pair, if a creature is attuned to it. From then on, when that creature takes damage, they only suffer half and I take the rest. This effect has no range limit and lasts until either of us ends it as a bonus action or removes their ring.",
	descriptionFull : "These rings come in linked pairs. If you possess the Mark of Sentinel, you can use a bonus action to form a link to the creature attuned to the other ring; from then on, whenever that creature suffers damage, they only suffer half of that damage and you take the rest. This effect continues until you end it as a bonus action or until you or the other creature removes their ring. This effect isn't limited by range. A creature cannot be attuned to more than one ring of shared suffering.",
	attunement : true,
	prerequisite : "Requires attunement by someone with a Dragonmark of Sentinel",
	prereqeval : function (v) {
		return (/^(?=.*dragonmark)(?=.*sentinel).*$/i).test(CurrentRace.known);
	}
}
MagicItemsList["scribe's pen"] = {
	name : "Scribe's Pen",
	source : ["WGtE", 115],
	type : "wondrous item",
	rarity : "common",
	description : "I can use this quill to write on any surface. This can be visible(traced in glowing mystical lines) or invisible to any creature without the Mark of Scribing. Detect Magic reveals the invisible writing. As an action, I or others with the Mark of Scribing can make it (in)visible. Marks on living creatures fade within a week.",
	descriptionFull : "If you possess the Mark of Scribing, you can use this quill to write on any surface. This can be visible\u2014traced in glowing mystical lines\u2014or invisible to any creature without the Mark of Scribing. Invisible writing will be revealed by Detect Magic, See Invisibility, or True Seeing. Any creature with the Mark of Scribing can also reveal your writing or make it invisible as an action. If you mark a living creature, the mark will fade within a week.",
	prerequisite : "Can only be used by someone with a Dragonmark of Scribing",
	prereqeval : function (v) {
		return (/^(?=.*dragonmark)(?=.*scribing).*$/i).test(CurrentRace.known);
	}
}
MagicItemsList["shiftweave"] = {
	name : "Shiftweave",
	source : [["WGtE", 115], ["UA:MIoE", 2]],
	type : "wondrous item",
	rarity : "common",
	description : "Up to five different outfits are embedded into these clothes that have transmutation magic woven into their fabric. As an action, I can speak a command word to transform the outfit into one of the other designs contained within.",
	descriptionFull : "Transmutation magic is woven into the fabric of shiftweave clothing. When a suit of shiftweave is created, up to five different outfits can be embedded into the cloth. By taking an action and uttering a command word, you can transform your shiftweave outfit into one of the other designs contained within it. To determine the price of a suit of shiftweave, combine the value of all of the outfits it contains and add 25 gp to that amount.",
	action : [["action", ""]]
}
MagicItemsList["spellshard"] = {
	name : "Spellshard",
	source : [["WGtE", 115], ["UA:MIoE", 3]],
	type : "wondrous item",
	description : "This dragonshard is imbued with a text. By concentrating while holding it, I can see its pages in my mind's eye and it will draw me to the right section if I think of a topic. I can add content to it with a simple ritual and can use it as a wizard's spellbook, costing 1 gp per \"page\" I add to the shard.",
	allowDuplicates : true,
	choices : ["normal", "advanced"],
	"normal" : {
		name : "Spellshard ",
		allowDuplicates : true,
		rarity : "common",
		description : "This dragonshard is imbued with a work of literature. By holding it and concentrating, I can see its pages in my mind's eye and it will draw me to the right section if I think of a topic. I can add content to it with a simple ritual and can use it as a wizard's spellbook, costing 1 gp per \"page\" I add to the shard.",
		descriptionLong : "This polished dragonshard fits into the palm of my hand. It is imbued with a particular work of literature. By holding it and concentrating, I can see its pages in my mind's eye. Thinking of a particular phrase or topic will draw me to the first section that addresses it. I can add content to it with a simple ritual, allowing me to use it as a wizard's spellbook costing 1 gp per \"page\" in the shard, but otherwise functions as a mundane spellbook. Spellshards can also be used as diaries or journals."
	},
	"advanced" : {
		name : "Advanced Spellshard",
		allowDuplicates : true,
		rarity : "uncommon",
		description : "This dragonshard is imbued with a text. By concentrating and speaking the passphrase, I can see its pages in my mind's eye and it will draw me to the right section if I think of a topic. I can add content to it with a simple ritual and can use it as a wizard's spellbook, costing 1 gp per \"page\" I add to the shard.",
		descriptionLong : "This polished dragonshard fits into the palm of my hand. It is imbued with a particular work of literature. By holding it, concentrating, and speaking its passphrase, I can see its pages in my mind's eye. Thinking of a particular phrase or topic will draw me to the first section that addresses it. I can add content to it with a simple ritual, allowing me to use it as a wizard's spellbook costing 1 gp per \"page\" in the shard, but otherwise functions as a mundane spellbook. Spellshards can also be used as diaries or journals."
	}
}
MagicItemsList["wand sheath"] = {
	name : "Wand Sheath",
	source : [["WGtE", 115], ["UA:MIoE", 4]],
	type : "wondrous item",
	rarity : "common",
	description : "As a warforged, I can integrate this sheath in my forearm by attuning to it. It can only be removed if I spend a minute to end the attunement. As an action, I can insert a wand in it. The wand doesn't count to the number of items I can attune to. As a bonus action, I can then retract/extend it while keeping my hand free.",
	descriptionLong : "As a warforged, I can integrate this sheath in my forearm by attuning to it. It can only be removed if I spend a minute to end the attunement. As an action, I can insert a wand in it. I still need to attune to this wand if it requires me to do so, but the wand wand then doesn't count towards the number of items I can attune to. When I take the wand out of the sheath, I lose attunement with it. As a bonus action, I can retract or extend a wand in the sheath. While retracted, the wand can't be damaged. While extended, I can use the wand as if holding it, but my hand remains free for other actions.",
	descriptionFull : "A wand sheath is designed to integrate with the forearm of a warforged. If you're a warforged, you can attach a wand sheath by attuning to it. While the wand sheath is attached, it cannot be removed from you against your will. You can spend one minute to end the attunement and remove the wand sheath.\n   You can insert a wand into the sheath as an action. While the wand is sheathed, you gain the following benefits:\n \u2022 You can retract the wand into your forearm or extend it from your forearm as a bonus action. While it is retracted, it cannot be damaged or removed.\n \u2022 While the wand is extended, you can use it as if you were holding it, but your hand remains free for other actions.\n \u2022 If the sheathed wand requires attunement, you must attune to the wand before you can use it. However, the wand sheath and the attached wand only count as a single item for purposes of the maximum number of items you can be attuned to. If you remove the wand from the sheath, you immediately lose your attunement to the wand.",
	attunement : true,
	prerequisite : "Requires attunement by a warforged",
	prereqeval : function (v) {
		return (/warforged/i).test(CurrentRace.known);
	},
	action : [["action", " (insert)"], ["bonus action", " (extend/retract)"]]
}
MagicItemsList["wheel of wind and water"] = {
	name : "Wheel of Wind and Water",
	source : ["WGtE", 115],
	type : "wondrous item",
	rarity : "uncommon",
	description : "I can telepathically control the elemental bound into the elemental galleon or airship that has this wheel mounted at its helm. If a wheel of wind and water is mounted on a mundane sailing ship, I can create an area of ideal conditions around the vessel, increasing its speed by 5 miles per hour.",
	descriptionFull : "When mounted at the helm of an elemental galleon or airship, this allows a character who possesses the Mark of Storm to telepathically control the elemental bound into the vessel.\n   If a wheel of wind and water is mounted on a mundane sailing ship, a character with the Mark of Storm can create an area of ideal conditions around the vessel, increasing its speed by 5 miles per hour.",
	prerequisite : "Can only be used by someone with a Dragonmark of Storm",
	prereqeval : function (v) {
		return (/^(?=.*dragonmark)(?=.*storm).*$/i).test(CurrentRace.known);
	}
}
