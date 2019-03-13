var iFileName = "pub_20181120_GGtR.js";
RequiredSheetVersion(12.999);
// This file adds all material from the Guildmasters' Guide to Ravnica to MPMB's Character Record Sheet

// Define the source
SourceList.G = {
	name : "Guildmasters' Guide to Ravnica",
	abbreviation : "GGtR",
	group : "Primary Sources",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/guildmasters-guide-ravnica",
	date : "2018/11/20"
};

// Add the Centaur race
RaceList["centaur-ggtr"] = {
	regExpSearch : /centaur/i,
	name : "Centaur" + (tDoc.info.SheetVersion < 13 ? " " : ""),
	sortname : "Centaur",
	source : ["G", 15],
	plural : "Centaurs",
	size : 3,
	speed : {
		walk : { spd : 40, enc : 30 }
	},
	languageProfs : ["Common", "Sylvan"],
	weapons : ["Hooves"],
	skillstxt : "Choose one from Animal Handling, Medicine, Nature, or Survival",
	age : " mature and age at about the same rate as humans",
	height : " stand between 6 and 7 feet tall, with their equine bodies reaching about 4 feet at the withers (6'0\" + 1d10\")",
	weight : " weigh around 670 lb (600 + 1d10 \xD7 2d12 lb)",
	heightMetric : " stand around 2 metres tall, with their equine bodies reaching about 1,5 metres at the withers (183 + 3d8 cm)",
	weightMetric : " weigh around 300 kg (270 + 3d8 \xD7 4d12 / 10 kg)",
	improvements : "Centaur: +2 Strength, +1 Wisdom;",
	scores : [2, 0, 0, 0, 1, 0],
	trait : "Centaur (+2 Strength +1 Wisdom)" + desc([
		"Fey: My creature type is fey, rather than humanoid.",
		"Hooves: I can use my hooves for unarmed strikes (1d4 bludgeoning damage).",
		"Charge: If I move 30 ft straight toward a creature and then hit it with a melee weapon attack on the same turn, I can make a hooves attack against it as a bonus action.",
		"Equine Build: I count as one size larger for my carrying capacity and the weight I can push, drag, or lift. Because of my hooves, 1 ft of movement while climbing costs me 4 ft."
	]),
	features : {
		"charge" : {
			name : "Charge",
			minlevel : 1,
			action : ["bonus action", " (hooves attack)"]
		}
	},
	eval : "tDoc.getField('Carrying Capacity Multiplier').value *= 2;",
	removeeval : "tDoc.getField('Carrying Capacity Multiplier').value /= 2;"
};
// Centaur weapon
WeaponsList["hooves-ggtr"] = {
	regExpSearch : /\b(hoofs?|hooves)\b/i,
	name : "Hooves" + (tDoc.info.SheetVersion < 13 ? " " : ""),
	source : ["G", 15],
	ability : 1,
	type : "Natural",
	damage : [1, 4, "bludgeoning"],
	range : "Melee",
	description : "Use as bonus action after charge 30 ft",
	abilitytodamage : true,
	monkweapon : true
};

if (!RaceList["goblin"]) { // reprint from Volo's Guide to Monsters
	RaceList["goblin"] = {
		regExpSearch : /^(?=.*\bgoblins?\b)(?!.*hobgoblin|bugbear).*$/i,
		name : "Goblin",
		source : [["V", 119], ["G", 17]],
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
		improvements : "Goblin: +2 Dexterity, +1 Constitution;",
		scores : [0, 2, 1, 0, 0, 0],
		features : {
			"fury of the small" : {
				name : "Fury of the Small",
				minlevel : 1,
				usages : 1,
				recovery : "short rest",
				aadditional : levels.map(function (n) { return "+" + n + " damage"; })
			},
			"nimble escape" : {
				name : "Nimble Escape",
				minlevel : 1,
				action : ["bonus action", " (disengage/hide)"]
			}
		},
		trait : "Goblin (+2 Dexterity, +1 Constitution)\n\nFury of the Small: Once per short rest, when I hit a creature of a size category larger than mine, I deal extra damage equal to my level.\n\nNimble Escape: As a bonus action, I can take the Disengage or Hide action."
	};
}

// Add Loxodon
RaceList["loxodon-ggtr"] = {
	regExpSearch : /loxodon/i,
	name : "Loxodon" + (tDoc.info.SheetVersion < 13 ? " " : ""),
	source : ["G", 18],
	plural : "Loxodons",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common"],
	savetxt : { adv_vs : ["charmed", "frightened"] },
	addarmor : "Loxodon Natural Armor (Con)",
	vision : [["Keen Smell", 0]],
	age : " physically mature at the same rate as humans, but are considered young until they reach the age of 60 and live about 450 years",
	height : " stand between 7 and 8 feet tall (6'7\" + 2d10\")",
	weight : " weigh between 300 and 400 pounds (295 + 2d10 \xD7 2d4 lb)",
	heightMetric : " stand between 2 and 2,5 metres tall (200 + 5d10 cm)",
	weightMetric : " weigh between 135 and 200 kg (133 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "Loxodon: +2 Constitution, +1 Wisdom;",
	scores : [0, 0, 2, 0, 1, 0],
	trait : "Loxodon (+2 Constitution, +1 Wisdom)" +
		"\n  Powerful Build: I count as one size larger for my carrying capacity, push, drag, and lift." +
		"\n  Natural Armor: " + (typePF ? "I have an AC of" : "My thick, leathery skin gives me AC") + " 12 + Constitution modifier + shield." +
		"\n  Trunk: I can grasp things with my trunk or use it as a snorkel. It has a reach of 5 ft and can lift things up to 5× my Strength in pounds. I can also use it to make unarmed strikes, but I can't use it to wield weapons, shields, or anything that requires manual precision." +
		"\n  Keen Smell: I have " + (typePF ? "advantage on Wisdom (Perception), Wisdom (Survival), and Intelligence (Investigation) checks that involve smell." : "adv. on Perception, Survival, and Investigation checks involving smell."),
	eval : "tDoc.getField('Carrying Capacity Multiplier').value *= 2;",
	removeeval : "tDoc.getField('Carrying Capacity Multiplier').value /= 2;"
};
// Loxodon armour
ArmourList['loxodon natural armor'] = {
	regExpSearch : /^(?=.*loxodon)(?=.*(natural|hide|skin)).*$/i,
	name : "Loxodon Natural Armor (Con)",
	source : ["G", 18],
	type : "",
	ac : 12,
	stealthdis : false,
	strReq : 0,
	dex : -10,
	addMod : true
};

// Add the Minotaur race
RaceList["minotaur-ggtr"] = {
	regExpSearch : /minotaur/i,
	name : "Minotaur" + (tDoc.info.SheetVersion < 13 ? " " : ""),
	sortname : "Minotaur",
	source : ["G", 19],
	plural : "Minotaurs",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Minotaur"],
	weapons : ["Minotaur Horns"],
	skillstxt : "Choose one from Intimidation or Persuasion",
	age : " reach adulthood around age 17 and live up to 150 years",
	height : " stand around 6 feet tall (5'4\" + 2d8\")",
	weight : " weigh around 300 pounds (175 + 2d8 \xD7 2d6 lb)",
	heightMetric : " stand around 175 cm tall (163 + 5d8 cm)",
	weightMetric : " weigh around 135 kg (80 + 5d8 \xD7 4d6 / 10 kg)",
	improvements : "Minotaur: +2 Strength +1 Constitution;",
	scores : [2, 0, 1, 0, 0, 0],
	abilitySave : 1,
	trait : "Minotaur (+2 Strength +1 Constitution)" + desc([
		"Horns: I can use my horns for unarmed strikes (1d6 piercing damage).",
		"Goring Rush: When taking a Dash action and moving at least 20 ft, I can make a horns attack as a bonus action.",
		"Hammering Horns: As a bonus action after I hit a melee attack during my Attack action, I can shove that target with my horns, if it is up to than one size larger than me. It must make a Str save (DC 8 + Str mod + Prof bonus) or be pushed up to 10 ft away from me."
	]),
	features : {
		"goring rush" : {
			name : "Goring Rush",
			minlevel : 1,
			action : ["bonus action", " (with Dash)"]
		},
		"hammering horns" : {
			name : "Hammering Horns",
			minlevel : 1,
			action : ["bonus action", " (after hit)"]
		}
	}
};
// Minotaur weapon
WeaponsList["minotaur horns"] = {
	regExpSearch : /^(?=.*minotaur)(?=.*\bhorns?\b).*$/i,
	name : "Minotaur Horns" + (tDoc.info.SheetVersion < 13 ? " " : ""),
	source : ["G", 19],
	ability : 1,
	type : "Natural",
	damage : [1, 6, "piercing"],
	range : "Melee",
	description : "Use as a bonus action after moving 20 ft with the Dash action",
	abilitytodamage : true,
	monkweapon : true
};

// Add Simic Hybrid
RaceList["simic hybrid-ggtr"] = {
	regExpSearch : /^(?=.*(simic|elf|dwarf|human|orc))(?=.*hybrid).*$/i,
	name : "Simic hybrid" + (tDoc.info.SheetVersion < 13 ? " " : ""),
	source : ["G", 20],
	plural : "Simic hybrids",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", ["Elvish or Vedalken", 1]],
	vision : [["Darkvision", 60]],
	age : " age slightly faster than their base humanoid race and their maximum lifespan is somewhat reduced",
	height : " are of the same height as typical for their humanoid race",
	weight : " are of the same weight as typical for their humanoid race",
	improvements : "Simic Hybrid: +2 Constitution and +1 to one other ability score of my choice;",
	scores : [0, 0, 2, 0, 0, 0],
	trait : "Simic Hybrid (+2 Constitution and +1 to one other ability score of my choice)\n   Animal Enhancement (1st level): Choose one to three types of enhancement using the \"Racial Options\" button: Manta Glide, Nimble Climber, or Underwater Adaptation.\n   Animal Enhancement (5th level): At 5th level, I gain another animal enhancement. I can either choose one I didn't take at 1st level or choose Grappling Appendages, Carapace, or Acid Spit.",
	features : {
		"animal enhancement" : {
			name : "Animal Enhancement",
			minlevel : 5,
			eval : 'RaceList["simic hybrid-ggtr"].set5thLvlAE()',
			removeeval : 'RaceList["simic hybrid-ggtr"].remove5thLvlAE()'
		}
	},
	set5thLvlAE : function() {
		var curChoice = ParseRace(What('Race Remember'))[1].capitalize();
		var AEoptions = ["Manta Glide", "Nimble Climber", "Underwater Adaptation", "Grappling Appendages", "Carapace", "Acid Spit"];
		if (curChoice && AEoptions.indexOf(curChoice) !== -1) AEoptions.splice(AEoptions.indexOf(curChoice), 1);
		var theChoice = AskUserOptions('Simic Hybrid 5th-level Animal Enhancement', (sheetVersion > 12.999 ? 'The Simic Hybrid race offers a choice of animal enhancement at 5th-level. ' : '') + 'Make a selection to update the sheet accordingly. You can only change this selection by removing the Simic Hybrid race or changing its variant.', AEoptions, 'radio', true);
		var feaTxt = '';
		var rNm = RaceList["simic hybrid-ggtr"].name;
		switch (theChoice) {
			case "Manta Glide":
				feaTxt = "Animal Enhancement (Manta Glide): I have manta ray-like wings that I can use to slow my fall. I subtract 100 ft when calculating falling damage and I can move 2 ft horizontally for every 1 ft I descend.";
				break;
			case "Nimble Climber":
				feaTxt = "Animal Enhancement (Nimble Climber): I have a climbing speed equal to my walking speed.";
				SetProf("speed", true, { climb : { spd : 'walk', enc : 'walk' } }, rNm + ": Animal Enhancement (Nimble Climber)");
				break;
			case "Underwater Adaptation":
				feaTxt = "Animal Enhancement (Underwater Adaptation): I can breathe air and water, and I have a swimming speed equal to my walking speed.";
				SetProf("speed", true, { swim : { spd : 'walk', enc : 'walk' } }, rNm + ": Animal Enhancement (Underwater Adaptation)");
				break;
			case "Grappling Appendages":
				feaTxt = "Animal Enhancement (Grappling Appendages): I have two extra appendages which I can use to make unarmed strikes for 1d6 bludgeoning damage. As a bonus action after hitting with them, I can try to grapple the target. I can't use these appendages to wield anything.";
				AddWeapon("Grappling Appendages");
				AddAction("bonus action", "Grappling Appendages (after hit)", rNm + ": Animal Enhancement (Grappling Appendages)");
				break;
			case "Carapace":
				feaTxt = "Animal Enhancement (Carapace): My skin is covered by a thick shell, giving my a +1 to AC whenever I'm not wearing heavy armor.";
				AddACMisc(1, 'Carapace Animal Enhancement', "+1 AC while not wearing Heavy armor.\n\nCarapace Animal Enhancement was gained from " + rNm + ": Animal Enhancement (Carapace)", "tDoc.getField('Heavy Armor').isBoxChecked(0)");
				break;
			case "Acid Spit":
				feaTxt = "Animal Enhancement (Acid Spit): As an action, I can spit acid at a creature within 30 ft that I can see. It must make a Dex save (DC 8 + Con mod + Prof bonus) or take 2d10 acid damage (+1d10 at 11th and 17th level). I can do this my Con mod times per long rest.";
				AddFeature("Acid Spit", "Con Mod", "", "long rest", "Simic Hybrid: Animal Enhancement (Acid Spit)", 0, "event.value = Math.max(1, What('Con Mod'));");
				AddWeapon("Acid Spit");
				break;
		};
		if (What("Unit System") !== "imperial") feaTxt = ConvertToMetric(feaTxt, 0.5);
		Value("Racial Traits", What("Racial Traits").replace(/Animal Enhancement \(5th level\):.*/, '') + feaTxt);
		Value("Race Remember", What("Race Remember") + "-*" + theChoice.replace(' ', '_') + "*");
	},
	remove5thLvlAE : function() {
		var theRegex = /\*(Manta_Glide|Nimble_Climber|Underwater_Adaptation|Grappling_Appendages|Carapace|Acid_Spit)\*/i;
		var raceRem = What("Race Remember");
		if (!theRegex.test(raceRem)) return;
		var rNm = RaceList["simic hybrid-ggtr"].name;
		var theChoice = raceRem.match(theRegex)[1].replace('_', ' ').capitalize();
		switch (theChoice) {
			case "Nimble Climber":
				SetProf("speed", false, { climb : { spd : 'walk', enc : 'walk' } }, rNm + ": Animal Enhancement (Nimble Climber)");
				break;
			case "Underwater Adaptation":
				SetProf("speed", false, { swim : { spd : 'walk', enc : 'walk' } }, rNm + ": Animal Enhancement (Underwater Adaptation)");
				break;
			case "Grappling Appendages":
				RemoveWeapon("Grappling Appendages");
				RemoveAction("bonus action", "Grappling Appendages (after hit)", rNm + ": Animal Enhancement (Grappling Appendages)");
				break;
			case "Carapace":
				AddACMisc(0, 'Carapace Animal Enhancement', "+1 AC while not wearing Heavy armor.\n\nCarapace Animal Enhancement was gained from " + rNm + ": Animal Enhancement (Carapace)");
				break;
			case "Acid Spit":
				RemoveFeature("Acid Spit", "", "", "", "", "", "event.value = Math.max(1, What('Con Mod'));");
				RemoveWeapon("Acid Spit");
				break;
		};
		Value("Racial Traits", What("Unit System") === "imperial" ? CurrentRace.trait : ConvertToMetric(CurrentRace.trait, 0.5));
	}
};
AddRacialVariant("simic hybrid-ggtr", "manta glide", {
	regExpSearch : /manta glide/i,
	source : ["G", 20],
	trait : "Simic Hybrid (+2 Constitution and +1 to one other ability score of my choice)\n   Animal Enhancement (Manta Glide): I have manta ray-like wings that I can use to slow my fall. I subtract 100 ft when calculating falling damage and I can move 2 ft horizontally for every 1 ft I descend.\n   Animal Enhancement (5th level): At 5th level, I gain another animal enhancement. I can choose Nimble Climber, Underwater Adaptation, Grappling Appendages, Carapace, or Acid Spit."
});
AddRacialVariant("simic hybrid-ggtr", "nimble climber", {
	regExpSearch : /nimble climber/i,
	source : ["G", 20],
	speed : {
		walk : { spd : 30, enc : 20 },
		climb : { spd : 'walk', enc : 'walk' }
	},
	trait : "Simic Hybrid (+2 Constitution and +1 to one other ability score of my choice)\n   Animal Enhancement (Nimble Climber): I have a climbing speed equal to my walking speed.\n   Animal Enhancement (5th level): At 5th level, I gain another animal enhancement. I can choose Manta Glide, Underwater Adaptation, Grappling Appendages, Carapace, or Acid Spit."
});
AddRacialVariant("simic hybrid-ggtr", "underwater adaptation", {
	regExpSearch : /underwater adaptation/i,
	source : ["G", 20],
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : 'walk', enc : 'walk' }
	},
	trait : "Simic Hybrid (+2 Constitution and +1 to one other ability score of my choice)\n   Animal Enhancement (Underwater Adaptation): I can breathe air and water, and I have a swimming speed equal to my walking speed.\n   Animal Enhancement (5th level): At 5th level, I gain another animal enhancement. I can choose Manta Glide, Nimble Climber, Grappling Appendages, Carapace, or Acid Split."
});
WeaponsList["grappling appendages"] = {
	regExpSearch : /^(?=.*grappling)(?=.*(appendage|tentacle|claw)).*$/i,
	name : "Grappling Appendages",
	source : [["G", 20], ["UA:RoR", 3]],
	ability : 1,
	type : "Natural",
	damage : [1, 6, "bludgeoning"],
	range : "Melee",
	description : "After hitting, start grapple on target as a bonus action",
	abilitytodamage : true,
	monkweapon : true
};
WeaponsList["acid spit"] = {
	regExpSearch : /^(?=.*acid)(?=.*spit).*$/i,
	name : "Acid Spit",
	source : [["G", 21], ["UA:RoR", 3]],
	ability : 3,
	type : "Natural",
	damage : ["C", 10, "acid"],
	range : "30 ft",
	description : "Dex save, success - no damage",
	abilitytodamage : false,
	dc : true
};

// Add Vedalken
RaceList["vedalken-ggtr"] = {
	regExpSearch : /vedalken/i,
	name : "Vedalken" + (tDoc.info.SheetVersion < 13 ? " " : ""),
	source : ["G", 21],
	plural : "Vedalken",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	savetxt : { text : ["Adv. on Int/Wis/Cha saves"] },
	skillstxt : "Choose one from Arcana, History, Investigation, Medicine, Performance, or Sleight of Hand. I add 1d4 to a check with the chosen skill",
	languageProfs : ["Common", "Vedalken", 1],
	toolProfs : [["Any tool", 1]],
	age : " reach maturity around age 40 and typically live 350 years, with some living up to 500 years",
	height : " stand between 6 and 6 and a half feet tall (5'4\" + 2d10\")",
	weight : " are slender, weighing around 200 pounds (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " stand between 1,8 and 2 metres tall (163 + 5d10 cm)",
	weightMetric : " are slender, weighing around 100 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "Vedalken: +2 Intelligence, +1 Wisdom;",
	scores : [0, 0, 0, 2, 1, 0],
	trait : "Vedalken (+2 Intelligence, +1 Wisdom)" + desc([
		"Vedalken Dispassion: I have advantage on all Intelligence, Wisdom, and Charisma saves.",
		"Tireless Precision: I am proficient with any one tool and one skill of my choice: Arcana, History, Investigation, Medicine, Performance, or Sleight of Hand. Whenever I make an ability check with the chosen tool or skill, I can add 1d4 to the check's total.",
		"Partially Amphibious: Once per long rest, I can breathe underwater for 1 hour by absorbing oxygen through my skin."
	]),
	features : {
		"partially amphibious" : {
			name : "Partially Amphibious",
			minlevel : 1,
			usages : 1,
			recovery : "long rest"
		}
	},
	eval : function () {
		Checkbox('Int ST Adv', true, 'Advantage on Intelligence saving throws was gained from Vedalken');
		Checkbox('Wis ST Adv', true, 'Advantage on Wisdom saving throws was gained from Vedalken');
		Checkbox('Cha ST Adv', true, 'Advantage on Charisma saving throws was gained from Vedalken');
	},
	removeeval : function () {
		Checkbox('Int ST Adv', false, '');
		Checkbox('Wis ST Adv', false, '');
		Checkbox('Cha ST Adv', false, '');
	}
};

// New Subclass for Cleric: Order Domain
AddSubClass("cleric", "order domain-ggtr", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*order).*$/i,
	subname : "Order Domain",
	source : ["G", 25],
	spellcastingExtra : ["command", "heroism", "hold person", "zone of truth", "mass healing word", "slow", "compulsion", "locate creature", "commune", "dominate person"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Proficiency",
			source : ["G", 26],
			minlevel : 1,
			description : "\n   " + "I gain proficiency with heavy armor, and either the Intimidation or Persuasion skill",
			armor : [false, false, true, false],
			skillstxt : "\n\n" + toUni("Order Domain") + ": Choose one from Intimidation or Persuasion"
		},
		"subclassfeature1.1" : {
			name : "Voice of Authority",
			source : ["G", 26],
			minlevel : 1,
			description : desc([
				"Whenever I use a spell slot to cast a spell on an ally, it can use its reaction to attack",
				"The ally makes one weapon attack against a target of my choice that I can see",
				"If the spell targets multiple allies, I can choose which one can make the attack"
			])
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Order's Demand",
			source : ["G", 26],
			minlevel : 2,
			description : desc([
				"As an action, all chosen targets in 30 ft that can see or hear me must make a Wis save",
				"If failed, it is charmed by me until the end of my next turn or it takes any damage",
				"Also, I can choose to have a charmed target drop what its holding when it fails its save"
			]),
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Embodiment of the Law",
			source : ["G", 26],
			minlevel : 6,
			description : desc([
				"When I cast an enchantment spell using a spell slot, I can reduce its casting time",
				"If the spell normally has a casting time of an action, I can now cast it as a bonus action"
			]),
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest"
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : ["G", 26],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
			additional : levels.map(function (n) {
				if (n < 8) return "";
				return "+" + (n < 14 ? 1 : 2) + "d8 psychic damage";
			}),
			calcChanges : {
				atkAdd : ["if (classes.known.cleric && classes.known.cleric.level > 7 && !isSpell) {fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 psychic damage'; }; ", "Once per turn, I can have one of my weapon attacks that hit do extra psychic damage."]
			}
		},
		"subclassfeature17" : {
			name : "Order's Wrath",
			source : ["G", 26],
			minlevel : 17,
			description : desc([
				"If I deal my Divine Strike damage to a creature, it is cursed until my next turn starts",
				"The next time it is hit by a weapon attack from my allies, it takes +2d8 psychic damage"
			])
		}
	}
});

// New Subclass for Druid: Circle of Spores
AddSubClass("druid", "circle of spores-ggtr", {
	regExpSearch : /^(?=.*(druid|shaman))(?=.*spores).*$/i,
	subname : "Circle of Spores",
	source : ["G", 26],
	spellcastingExtra : ["blindness/deafness", "gentle repose", "animate dead", "gaseous form", "blight", "confusion", "cloudkill", "contagion"],
	features : {
		"subclassfeature2" : {
			name : "Circle Spells",
			source : ["G", 27],
			minlevel : 2,
			description : desc([
				"I learn the Chill Touch cantrip and gain the ability to cast certain spells",
				"These are always prepared, but don't count against the number of spells I can prepare"
			]),
			spellcastingBonus : {
				name : "Circle Spells",
				spells : ["chill touch"],
				selection : ["chill touch"]
			}
		},
		"subclassfeature2.1" : {
			name : "Halo of Spores",
			source : ["G", 27],
			minlevel : 2,
 			description : desc([
				"As a reaction when someone I can see in 10 ft starts its turn or moves, I can have it save",
				"It must succeed on a Constitution save or take necrotic damage from my cloud of spores"
			]),
			additional : levels.map(function (n) { return n < 2 ? "" : 'Con save or 1d' + (n < 6 ? 4 : n < 10 ? 6 : n < 14 ? 8 : 10) + " necrotic damage"; }),
			action : ["reaction", ""]
		},
		"subclassfeature2.2" : {
			name : "Symbiotic Entity",
			source : ["G", 27],
			minlevel : 2,
			description : desc([
				"As an action, I expend a Wild Shape use to boost my spores instead of transforming",
				"I gain 4 temporary hit points per druid level and my Halo of Spores damage increases",
				"Also, my melee weapon attacks do +1d6 poison damage with every hit",
				"This lasts for 10 min, until these temporary HP run out, or until I use Wild Shape again"
			]),
			additional : levels.map(function (n) {
				return n < 2 ? "" : Math.floor(n*4) + " temp HP; Halo of Spores: 2d" + (n < 6 ? 4 : n < 10 ? 6 : n < 14 ? 8 : 10);
			}),
			action : ["action", ""],
			calcChanges : {
				atkAdd : ["if (isMeleeWeapon && (/\\b(spore|symbiotic)\\b/i).test(WeaponText) && !isNaturalWeapon) {fields.Description += (fields.Description ? '; ' : '') + '+1d6 poison damage';}; ", "If I include the word 'Spore' or 'Symbiotic' in a melee weapon's name or description, it gets treated as a weapon that is infused by my Symbiotic Entity feature, adding +1d6 poison damage in the description."]
			}
		},
		"subclassfeature6" : {
			name : "Fungal Infestation",
			source : ["G", 27],
			minlevel : 6,
			description : desc([
				"As a reaction when a Small/Medium beast/humanoid dies in 10 ft, I can animate it",
				"It rises as a zombie with 1 HP that follows my mental commands and dies after 1 hour",
				"It can only take the attack action for one melee attack; It takes its turns after mine"
			]),
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
			action : ["reaction", ""]
		},
		"subclassfeature10" : {
			name : "Spreading Spores",
			source : ["G", 27],
			minlevel : 10,
			description : " [only while Symbiotic Entity is active]" + desc([
				"As a bonus action, I create a 10-ft cube of fungal spores within 30 ft, lasting for 1 min",
				"Any creature moving into or starting its turn in it must save against my Halo of Spores",
				"The cube ends if I use this feature again; While it persists, I can't use my Halo of Spores"
			]),
			action : ["bonus action", " (start/end)"]
		},
		"subclassfeature14" : {
			name : "Fungal Body",
			source : ["G", 27],
			minlevel : 14,
			description : desc([
				"I'm immune to being blinded, deafened, frightened, poisoned, and critical hits",
			]),
			savetxt : { immune : ["blinded", "deafened", "frightened", "poisoned", "critical hits (unless incapacitated)"] }
		}
	}
});

BackgroundList["azorius functionary"] = {
	regExpSearch :  /^(?=.*azorius)(?=.*functionary).*$/i,
	name : "Azorius Functionary",
	source : ["G", 33],
	skills : ["Insight", "Intimidation"],
	gold : 10,
	equipleft : [
		["Scroll with law text", "", ""],
		["Blue ink, 1 ounce bottle of", 1, ""],
		["Ink pen (quill)", "", ""]
	],
	equipright : [
		["Fine clothes", "", 6],
		["Azorius insignia", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	languageProfs : [2],
	feature : "Legal Authority",
	trait : [
		"I try never to let my judgment become clouded by emotion.",
		"I have infinite patience with the dolts and boors I'm forced to deal with every day.",
		"When I give an order, I expect it to be obeyed.",
		"I just want things the way I like them: neat, orderly, and clean.",
		"No wrongdoing can escape my watchful gaze.",
		"I always say exactly what I mean, no matter how many words it takes to communicate the particular nuance I am attempting to convey.",
		"I'm very literal and don't appreciate metaphor or sarcasm.",
		"I never change my mind once it's made up."
	],
	ideal : [
		["Guild", "Guild: My guild is all that really matters. (Any)"],
		["Order", "Order: The law is meant to ensure that the gears of society turn smoothly and quietly. (Lawful)"],
		["Peace", "Peace: The ultimate object of the law is to remove violence from society. (Good)"],
		["Compliance", "Compliance: Coercion is a fine way of ensuring that the laws are obeyed. (Lawful)"],
		["Legislation", "Legislation: The law embodies excellence in its precision and detail. (Lawful)"],
		["Punishment", "Punishment: A public display of consequences is an excellent deterrent for other criminals. (Evil)"]
	],
	bond : [
		"I am beholden to an Azorius arrester who captured the criminal who killed my parents, saving me from the same fate.",
		"I hope one day to write the laws, not just enforce them.",
		"I tried and failed to prevent a murder, and I have sworn to find and arrest the perpetrator.",
		"I successfully prevented a murder, and the would-be perpetrator wants me dead.",
		"One of my parents was prominent in the guild, and I resent constantly being compared to that standard.",
		"I've modeled my career after a highly respected lawmage or arrester, but I fear that my role model might be involved in something illegal."
	],
	flaw : [
		"I'm unable to distinguish between the letter and the spirit of the law.",
		"I seem like a harsh judge to others, but I judge myself most harshly of all.",
		"I have a secret, illegal vice.",
		"I was traumatized by witnessing a crime as a child.",
		"I'm incapable of deception.",
		"I wish I had joined the Boros, but I fear they'd never accept me."
	]
};
BackgroundFeatureList["legal authority"] = {
	description : "I have the authority to enforce the laws of Ravnica, inspiring respect and fear as a result. People mind their manners, avoid my attention, and assume I have a right to be wherever I am. My Azorius insignia gets me an audience with anyone I want, though it might work adversely with incorrigible lawbreakers. Abusing this privilege can get me in serious trouble.",
	source : ["G", 33]
};

BackgroundList["boros legionnaire"] = {
	regExpSearch :  /^(?=.*boros)(?=.*legionnaire).*$/i,
	name : "Boros Legionnaire",
	source : ["G", 40],
	skills : ["Athletics", "Intimidation"],
	gold : 2,
	equipleft : [
		["Feather from angel's wing", "", ""],
		["Tattered piece of Boros banner", 1, ""],
		["Ink pen (quill)", "", ""]
	],
	equipright : [
		["Common clothes", "", 3],
		["Boros insignia", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	languageProfs : [["Celestial, Draconic, Goblin, or Minotaur", 1]],
	toolProfs : [["Gaming set", 1]],
	feature : "Legion Station",
	trait : [
		"I approach every task with the same high degree of military precision.",
		"I am always the first into the fray.",
		"I bear any injury or indignity with stoic discipline.",
		"My righteous wrath is easily inflamed by the slightest iniquity.",
		"My honor is more important to me than my life.",
		"Dangerous work is best accomplished by an orderly group working with common purpose.",
		"I treat my weapons, uniform, and insignia with reverence, for they are gifts of the angels.",
		"I pace when standing and fidget incessantly when forced to sit."
	],
	ideal : [
		["Guild", "Guild: My guild is all that really matters. (Any)"],
		["Justice", "Justice: Achieving justice requires establishing fair, equitable, and compassionate relationships within a community. (Good)"],
		["Protection", "Protection: It isn't right for innocents to suffer because of the arrogance of the powerful. (Good)"],
		["Solidarity", "Solidarity: It is most crucial to act with a single will, marching side by side in perfect accord. (Lawful)"],
		["Order", "Order: Society functions only if people do their duty and respect the chain of command. (Lawful)"],
		["Conviction", "Conviction: Anything worth doing is worth doing with your whole heart. (Lawful)"]
	],
	bond : [
		"I would lay down my life for Aurelia and the angels.",
		"I owe my life to the Boros captain who took me in when I was living on the streets.",
		"My fellow legionnaires are my family.",
		"I wield the same Boros weapon my grandparent did, for the honor of our family.",
		"I ran with the Rakdos in my youth, and I'm striving to atone for my past misdeeds.",
		"I do what I can to help out the spouse of a comrade who died in battle."
	],
	flaw : [
		"I act bravely when I'm in a group, but I'm a coward when I'm alone.",
		"I see everything in clear-cut black and white.",
		"I'm just a little fascinated by the ways of the Gruul.",
		"I trust the chain of command more than anything—more even than my closest friends.",
		"I'm slow to trust members of other guilds.",
		"I've been known to turn a blind eye to injustice, with the help of a modest bribe."
	],
	lifestyle : "poor"
};
BackgroundFeatureList["legion station"] = {
	description : "I am established in the hierarchy of the Boros Legion. I can requisition simple equipment for temporary use. I have access to any Boros garrison in Ravnica where I can rest in safety and have access to medics. I'm paid 1 gp per week (a Boros-minted 1-zino coin), allowing me (together with the free garrison lodging) to have a poor lifestyle between adventures.",
	source : ["G", 40]
};

BackgroundList["dimir operative"] = {
	regExpSearch :  /^(?=.*dimir)(?=.*operative).*$/i,
	name : "Dimir Operative",
	source : ["G", 46],
	skills : ["Deception", "Stealth"],
	gold : 0,
	equipleft : [
		["Small knife", 3, 0.25],
		["Starting equipment of secondary guild", "", ""]
	],
	equipright : [
		["Dark-colored common clothes", "", 3],
		["Dimi insignia", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	languageProfs : [1],
	toolProfs : ["Disguise kit"],
	feature : "False Guild Identity",
	trait : [
		"I'm good at hiding my true thoughts and feelings.",
		"When I'm in doubt about revealing something, I assume it's a secret, and I don't share it.",
		"I like to sound mysterious, because wisdom hidden grows deeper with time.",
		"I have no patience with people who get in my way.",
		"I love hearing about other people's nightmares.",
		"Combat is meant to be quick, clean, and one-sided.",
		"I like to stick to the shadows.",
		"I never show my anger. I just plot my revenge."
	],
	ideal : [
		["Guild", "Guild: My true guild is all that really matters. (Any)"],
		["Control", "Control: I like pulling the strings. (Lawful)"],
		["Secrets", "Secrets: I collect secrets and never reveal them. (Any)"],
		["Knowledge", "Knowledge: I want to know as much as I can about this city and how it works. (Any)"],
		["Independence", "Independence: I value the freedom to pursue my own goals without interference. (Chaotic)"],
		["Nihilism", "Nihilism: I don't believe in anything, and anyone who does is a fool. (Neutral)"]
	],
	bond : [
		"I discovered a secret I can't let anyone else uncover—including my guild superiors.",
		"I formed a close friendship or romance with someone in the guild I'm infiltrating.",
		"The Dimir agent who recruited me was unmasked and killed. My revenge on the killers will be thorough and painful.",
		"I spend as much time as I can in the Ismeri Library because I'm certain an information hub operates behind its facade. I want its secrets!",
		"I'm utterly loyal to my superior in the guild, more than to the guild or its guildmaster.",
		"Someone has discovered my true identity."
	],
	flaw : [
		"I like secrets so much that I'm reluctant to share details of a plan even with those who need to know.",
		"I would let my friends die rather than reveal my true identity.",
		"I have trouble trusting anyone but myself.",
		"I have a particular vice that puts all my secrets at risk if I'm not careful.",
		"I'm pretty sure I've done something horrible that I can't remember because of the guild's mind magic.",
		"I put too much trust in the people who give me orders."
	],
	extra : [
		"Select a Reason for Infiltration",
		"Parental link",
		"Track activities",
		"Spy on individual",
		"Recruit more spies",
		"Member before recruitment",
		"Destroy from within",
		"Secret wish to join",
		"Randomly chosen"
	]
};
BackgroundFeatureList["false guild identity"] = {
	description : "I have more than one identity. The one I wear most of the time makes me appear to be a member of a guild other than my own. I have documentation, established acquaintances, and disguises that allow me to assume that persona and fit into the secondary guild. Whenever I choose, I can drop this identity and blend into the guildless masses of the city.",
	source : ["G", 46]
};

BackgroundList["golgari agent"] = {
	regExpSearch :  /^(?=.*golgari)(?=.*agent).*$/i,
	name : "Golgari Agent",
	source : ["G", 53],
	skills : ["Nature", "Survival"],
	gold : 10,
	equipleft : [
		["Poisoner's kit", "", 2]
	],
	equipright : [
		["Common clothes", "", 3],
		["Golgari insignia", "", ""],
		["Pet beetle or spider", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	languageProfs : [["Elvish, Giant, or Kraul", 1]],
	toolProfs : ["Poisoner's kit"],
	feature : "Undercity Paths",
	trait : [
		"Remember, I could kill you in your sleep. Or put centipedes in your bedroll.",
		"I like to remind people of their inevitable demise.",
		"Sometimes I give voice to the whispers of the rot, which I hear but no one else does.",
		"I do my best to discourage anyone from approaching or talking to me.",
		"I have accepted my death. Hence, I don't fear it.",
		"Like roots growing through stone, I am relentless and determined in my action.",
		"I put my knowledge of anatomy to use by narrating the injuries my enemies suffer in grisly detail.",
		"Like a wild animal, I lash out viciously when I'm provoked—and I'm easily provoked."
	],
	ideal : [
		["Guild", "Guild: My guild is all that really matters. (Any)"],
		["Stoicism", "Stoicism: All of us are part of the cyclical march of nature, which will continue with or without us. (Neutral)"],
		["Nature", "Nature: The natural world is more important than the edifices of the city and civilization. (Neutral)"],
		["Interdependence", "Interdependence: We are all part of nature's web. (Lawful)"],
		["Ambition", "Ambition: The time of Golgari ascendance is at hand, and I intend to have a prominent place in the new world order. (Evil)"],
		["Live and Let Live", "Live and Let Live: Meddling in the affairs of other guilds is a great way to get squashed like a bug. (Neutral)"]
	],
	bond : [
		"I cherish the finger of a family member who was petrified by a medusa.",
		"I have an identical twin who is as different from me as any person could be.",
		"I want to lead one faction of the guild to a new position of dominance.",
		"I love spending time in the moss-covered building where I took part in my first reclamation mission.",
		"I found something in the sewer that must never come to light.",
		"I am forever grateful to the reclaimer who found me floating facedown in the sewer, moments from death."
	],
	flaw : [
		"Death comes for us all, so you can't expect me to take care of someone who can't fight it off.",
		"I assume that anyone outside the Golgari looks down on me.",
		"I feel a need for revenge against those who enjoy the privilege of living above ground.",
		"I don't bother to couch my opinions in flattering words.",
		"I can't help but pocket any trinket or coin I come across, no matter how worthless.",
		"I'm convinced that I'm better and stronger than members of other guilds, isolated as they are from the realities of life and death."
	]
};
BackgroundFeatureList["undercity paths"] = {
	description : "I know hidden, underground pathways that I can use to bypass crowds, obstacles, and observation as I move through the city. I can lead a group to travel between two locations in the city twice as fast as normally. The paths of the undercity are haunted by dangers that rarely brave the light of the surface world, so my journey isn't guaranteed to be safe.",
	source : ["G", 53]
};

BackgroundList["gruul anarch"] = {
	regExpSearch :  /^(?=.*gruul)(?=.*anarch).*$/i,
	name : "Gruul Anarch",
	source : ["G", 60],
	skills : ["Nature", "Survival"],
	gold : 10,
	equipleft : [
		["Herbalism kit", "", 3],
		["Skull of a boar", "", ""]
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["Gruul insignia", "", ""],
		["Hunting trap", "", 25],
		["Beast-hide cloak", "", 1],
		["Belt pouch (with coins)", "", 1]
	],
	languageProfs : [["Draconic, Giant, Goblin, or Sylvan", 1]],
	toolProfs : ["Herbalism kit"],
	feature : "Rubblebelt Refuge",
	trait : [
		"Unlike people, the beasts of the wild are friends who won't stab me in the back.",
		"Go ahead and insult me—I dare you.",
		"I scorn those who can't survive away from the comforts of the city.",
		"Don't tell me I'm not allowed to do something.",
		"Laws are for people who are afraid to face their inner beasts.",
		"I smear the blood of my enemies over my skin.",
		"I was, in fact, raised by maaka.",
		"HarrRRAAGGHH! [I rarely form a coherent sentence and prefer to express myself by breaking things.]"
	],
	ideal : [
		["Clan", "Clan: My clan is all that really matters. (Any)"],
		["Anarchy", "Anarchy: No person or law or custom can tell another what to do. (Chaotic)"],
		["Nature", "Nature: We weren't born tame or domesticated, so we shouldn't have to live that way. (Neutral)"],
		["Might", "Might: The strongest are meant to dominate the weak. (Evil)"],
		["Rage", "Rage: AAAAAARRRRggggh! [To live is to feel and express the rage burning in your belly.] (Chaotic)"],
		["Tradition", "Tradition: The Old Ways must be preserved and upheld. (Any)"]
	],
	bond : [
		"I am determined that one day I will lead my clan—or a new one.",
		"I would give my life for my clan chieftain.",
		"The chieftain of another clan has a grudge against me.",
		"I am devoted to a sacred site in the midst of the rubblebelt.",
		"My weapon is made from the first raktusk I ever hunted.",
		"GrrrRRAAAAGGHH! [I will do anything to prove myself greater than my siblings or ancestors.]"
	],
	flaw : [
		"If you question my courage, I will never back down.",
		"HrrrGGGAAAARRuuuh! [My anger in battle led to the death of a loved one.]",
		"I'm as stubborn as a batterboar.",
		"I'm so convinced of my superiority over soft, civilized people that I'll take great risks to prove it.",
		"I'm easily manipulated by people I find attractive.",
		"I'm not actually all that angry."
	],
	extra : [
		"Select a Gruul Clan",
		"Burning Tree clan",
		"Ghor clan",
		"Scab clan",
		"Slitz clan",
		"Gravel Hide clan",
		"Zhur-Taa clan",
		"Minor or new clan",
		"Trog"
	]
};
BackgroundFeatureList["rubblebelt refuge"] = {
	description : "I'm very familiar with areas of the city that most people shun: neighborhoods ruined by wurms, overgrown parks gone untended for decades, and the vast, long abandoned rubblebelts of broken terrain. There, I can find a suitable place for me and my allies to hide or rest, as well as food and fresh water for myself and up to five other people each day.",
	source : ["G", 60]
};

BackgroundList["izzet engineer"] = {
	regExpSearch :  /^(?=.*izzet)(?=.*engineer).*$/i,
	name : "Izzet Engineer",
	source : ["G", 66],
	skills : ["Arcana", "Investigation"],
	gold : 5,
	equipleft : [
		["Set of artisan's tools", "", ""],
		["Twisted remains of failed experiment", "", ""],
		["Hammer", "", 3],
		["Block and tackle", "", 5]
	],
	equipright : [
		["Common clothes", "", 3],
		["Izzet insignia", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	languageProfs : [["Draconic, Goblin, or Vedalken", 1]],
	toolProfs : [["Artisan's tools", 1]],
	feature : "Urban Infrastructure",
	trait : [
		"I have a hard time staying focused on ... oh, and my brain tends to jump from one ... did I mention focus?",
		"I get really excited about my ideas and I can't wait to talk about them and start putting them into practice and tinkering with them and I want to tell you about how exciting it all is!",
		"It's not magic—or anything, really—if you do it only halfway. Whatever I do, I give it all I've got.",
		"I do what my gut tells me.",
		"Life's an experiment, and I can't wait to see what happens.",
		"I pepper my speech with the incomprehensible jargon of my trade, like mizzium droplets inserted into a weird-field suspension.",
		"Great ideas are fine, but great results are what counts.",
		"If you can guess what I'm about to do, that means I've run out of imagination."
	],
	ideal : [
		["Guild", "Guild: My guild is all that really matters. (Any)"],
		["Creativity", "Creativity: Half the world's troubles come from stodgy thinking, stuck in the past. We need innovative solutions. (Chaotic)"],
		["Discovery", "Discovery: Every experiment has the potential to reveal more secrets of the multiverse. (Any)"],
		["Science", "Science: A rigorous application of logical principles and protocols will lead us toward progress more surely than any belief system. (Lawful)"],
		["Fun", "Fun: I love my job! Despite the dangerous working conditions, there's nothing I'd rather do. (Chaotic)"],
		["Power", "Power: Someday I'll find or create the magic that will make me the most powerful being in Ravnica. (Evil)"]
	],
	bond : [
		"I have dedicated my life to finding a solution to a scientific problem.",
		"I'll never forget the laboratory where I learned my skills, or the other attendants who learned alongside me.",
		"I'm convinced it was sabotage that destroyed my first laboratory and killed many of my friends, and I seek revenge against whoever did it.",
		"I have the schematics for an invention that I hope to build one day, once I have the necessary resources.",
		"A fellow student and I are racing to solve the same scientific puzzle.",
		"I would do anything the guildmaster told me to do."
	],
	flaw : [
		"If there's a plan, I'll probably forget it. If I don't forget it, I'll probably ignore it.",
		"I get bored easily, and if nothing is happening I'll make something happen.",
		"Nothing is ever simple, and if it seems simple, I'll find a way to make it complicated.",
		"I tend to ignore sleep for days when I'm conducting research, often at the expense of my own health and safety.",
		"I'm convinced there's not a soul in Ravnica, except maybe the great Niv-Mizzet, who can match my boundless intellect.",
		"I'm incapable of admitting a flaw in my logic."
	]
};
BackgroundFeatureList["urban infrastructure"] = {
	description : "Although the Izzet League is infamous for mad inventions it is also involved in construction of the city's infrastructure. I have a basic knowledge of the structure of buildings and what is behind its walls. I can find their blueprints showing entry points, secret pases, structural weaknesses, or secret spaces. My guild won't protect me if I use this knowledge unlawfully.",
	source : ["G", 66]
};

BackgroundList["orzhov representative"] = {
	regExpSearch :  /^(?=.*orzhov)(?=.*representative).*$/i,
	name : "Orzhov Representative",
	source : ["G", 72],
	skills : ["Intimidation", "Religion"],
	gold : 10,
	equipright : [
		["Fine clothes", "", 6],
		["Orzhov insignia", "", ""],
		["Vestments", "", 4],
		["Chain of 10 golden coins", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	languageProfs : [2],
	feature : "Leverage",
	trait : [
		"I am always willing to act in accordance with the financial incentive offered.",
		"Debts are never meant to be forgiven.",
		"I am accustomed to enjoying the finest pleasures money can buy.",
		"No one could doubt that I am a cut above the masses of pitiful peasants that infest the city.",
		"I can't stand to spend a zib more than necessary to purchase what I need.",
		"I hate it when people try to make light of a serious situation.",
		"I want to make sure everyone is aware of how wealthy, powerful, and important I am.",
		"I can't think of anything to look forward to."
	],
	ideal : [
		["Guild", "Guild: My guild is all that really matters. (Any)"],
		["Wealth", "Wealth: I will do whatever it takes to become as rich as the oligarchs. (Evil)"],
		["Power", "Power: One day, I will be the one giving orders. (Evil)"],
		["Prestige", "Prestige: I want to be admired, respected, feared, or even hated for my position and wealth. (Evil)"],
		["Stability", "Stability: The economy functions best when chaos is kept under control and everyone knows their place. (Lawful)"],
		["Eternity", "Eternity: I want to live forever—in the flesh as long as possible, and as a spirit afterward. (Any)"]
	],
	bond : [
		"The unbearable weight of my debt has driven me to desperation.",
		"I'm duty-bound to obey the dictates of an ancestor on the Ghost Council.",
		"I value my worldly goods more highly than my mortal life.",
		"An oligarch publicly humiliated me, and I will exact revenge on that whole family.",
		"My faith in the Obzedat never wavers.",
		"I want to prove myself more worthy than an older sibling and thereby ensure that I inherit a greater share of my parents' wealth."
	],
	flaw : [
		"I hold a scandalous secret that could ruin my family forever—but could also earn me the favor of the Ghost Council.",
		"I'm convinced that everyone I know is plotting against me.",
		"I'll brave any risk if the monetary reward is great enough.",
		"I am convinced that I am far more important than anyone else is willing to acknowledge.",
		"I have little respect for anyone who isn't wealthy.",
		"I'll take any opportunity to steal from wealthier people, even for worthless trinkets."
	]
};
BackgroundFeatureList["leverage"] = {
	description : "I can exert leverage over one or more below me in the guild's hierarchy and demand their help as needs warrant. For example, deliver a message, arrange a ride, or clean up a bloody mess. As my status in the guild improves, I gain influence over more people of higher station. The DM decides if the demands are reasonable and if subordinates are available.",
	source : ["G", 72]
};

BackgroundList["rakdos cultist"] = {
	regExpSearch :  /^(?=.*rakdos)(?=.*cultist).*$/i,
	name : "Rakdos Cultist",
	source : ["G", 79],
	skills : ["Acrobatics", "Performance"],
	gold : 10,
	equipleft : [
		["Musical instrument", "", ""],
		["Costume", "", 4],
		["Hooded lantern of wrought iron", "", 2],
		["Chain with spiked links, feet of", 10, 1],
		["Tinderbox", "", 1],
		["Torches", 10, 1],
		["Sweet, red juice, bottle of", "", 4]
	],
	equipright : [
		["Common clothes", "", 3],
		["Rakdos insignia", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	languageProfs : [["Abyssal or Giant", 1]],
	toolProfs : [["Musical instrument", 1]],
	feature : "Fearsome Reputation",
	trait : [
		"I revel in mayhem, the more destructive the better.",
		"When violence breaks out, I lose myself in rage, and it's sometimes hard to stop.",
		"Everything is funny to me, and the most hilarious and bloodiest things leave me cackling with sadistic glee.",
		"I derive genuine pleasure from the pain of others.",
		"I enjoy testing other people's patience.",
		"I can't stand it when things are predictable, so I like to add a little chaos to every situation.",
		"I throw my weight around to make sure I get my way.",
		"I enjoy breaking delicate works of art. And fingers, which are sort of the same."
	],
	ideal : [
		["Guild", "Guild: My guild is all that really matters. (Any)"],
		["Hedonism", "Hedonism: Death comes for everyone, so take as much pleasure as you can from every moment of life. (Neutral)"],
		["Creativity", "Creativity: I strive to find more ways to express my art through pain—my own as well as others'. (Chaotic)"],
		["Freedom", "Freedom: No one tells me what to do. (Chaotic)"],
		["Equality", "Equality: I want to see Ravnica remade, with no guilds and no hierarchies. (Chaotic)"],
		["Spectacle", "Spectacle: People are inspired by the greatness they see in art. (Any)"]
	],
	bond : [
		"I have belonged to the same performance troupe for years, and these people mean everything to me.",
		"A blood witch told me I have a special destiny to fulfill, and I'm trying to figure out what it is.",
		"I'm secretly hoping that I can change the cult from the inside, using my influence to help rein in the wanton violence.",
		"I own something that Rakdos once touched (it's seared black at the spot), and I cherish it.",
		"I want to be better at my chosen form of performance than any other member of my troupe.",
		"I am devoted to Rakdos and live to impress him."
	],
	flaw : [
		"My family is prominent in another guild. I enjoy my wild life, but I don't want to embarrass them.",
		"I couldn't hide my emotions and opinions even if I wanted to.",
		"I throw caution to the wind.",
		"I resent the rich and powerful.",
		"When I'm angry, I lash out in violence.",
		"There's no such thing as too much pleasure."
	],
	extra : [
		"Select a Performance Style",
		"Spikewheel acrobat",
		"Lampooning satirist",
		"Fire juggler",
		"Marionette puppeteer",
		"Pain artist",
		"Noise musician",
		"Nightmare clown",
		"Master of ceremonies"
	]
};
BackgroundFeatureList["fearsome reputation"] = {
	description : "People recognize me as a member of the Cult of Rakdos, and they're careful not to draw my anger or ridicule. I can get away with minor criminal offenses, such as refusing to pay for food at a restaurant or breaking down a door at a local shop, if no legal authorities witness the crime. Most are too daunted by me to report my wrongdoing to the Azorius.",
	source : ["G", 79]
};

BackgroundList["selesnya initiate"] = {
	regExpSearch :  /^(?=.*selesnya)(?=.*initiate).*$/i,
	name : "Selesnya Initiate",
	source : ["G", 86],
	skills : ["Nature", "Persuasion"],
	gold : 5,
	equipleft : [
		["Healer's kit", "", 3]
	],
	equipright : [
		["Common clothes", "", 3],
		["Robes", "", 4],
		["Selesnya insignia", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	languageProfs : [["Elvish, Loxodon, or Sylvan", 1]],
	toolProfs : [["Artisan's tools or musical instrument", 1]],
	feature : "Conclave's Shelter",
	trait : [
		"I never raise my voice or lose my temper.",
		"I feel the pains and joys of everyone around me, friend or foe.",
		"I would rather make a friend than thwart an enemy.",
		"I'm always straining to peer into another reality that seems to be just beyond my senses.",
		"I'm uneasy if I can't see plants growing or feel soil beneath my feet.",
		"Seeing illness or injury in any creature saddens me.",
		"I have much to be proud of, but I am still just one strand in the grand, interwoven tapestry of life.",
		"Nature offers rich and abundant metaphors for understanding the complexities of life."
	],
	ideal : [
		["Guild", "Guild: My guild is all that really matters. (Any)"],
		["Harmony", "Harmony: Nothing is more beautiful than voices and actions aligned in common purpose. (Good)"],
		["Order", "Order: Like a well-pruned tree, society thrives when everything is kept in good order. (Lawful)"],
		["Life", "Life: Preserving life and nature is always a worthwhile endeavor. (Good)"],
		["Humility", "Humility: Ambition and pride are the roots of strife. (Good)"],
		["Evangelism", "Evangelism: When all have joined the Selesnya Conclave, Ravnica will finally know peace. (Any)"]
	],
	bond : [
		"I would give my life in the defense of the small enclave where I first encountered Mat'Selesnya.",
		"I love beasts and plants of all kinds, and am loath to harm them.",
		"A healer nursed me to recovery from a mortal illness.",
		"I'll sing the invitation of Mat'Selesnya with my dying breath.",
		"I cherish a leaf from Vitu-Ghazi that changes color with the seasons, even though it is no longer attached to the tree.",
		"Every member of the conclave is my kin, and I would fight for any one of them."
	],
	flaw : [
		"I'm terrified of getting into a fight where my side is outnumbered.",
		"I assume that people mean well until they prove otherwise.",
		"I enjoy comfort and quiet, and prefer to avoid extra effort.",
		"I have a fierce temper that doesn't reflect the inner calm I seek.",
		"I'm convinced that everyone else in the conclave has a deeper connection to the Worldsoul than I do.",
		"I'm trying to atone for the life of crime I led before I joined the Selesnya, but I find it hard to give up my bad habits."
	]
};
BackgroundFeatureList["conclave's shelter"] = {
	description : "My companions and I can find a place to hide or rest in any Selesnya enclave in the city, unless I have proven to be a danger to them. The members of the enclave will shield me from anyone searching for me, but will not risk their lives. I can receive free healing and care at a Selesnya enclave, though I must provide material components needed for spells.",
	source : ["G", 86]
};

BackgroundList["simic scientist"] = {
	regExpSearch :  /^(?=.*simic)(?=.*scientist).*$/i,
	name : "Simic Scientist",
	source : ["G", 93],
	skills : ["Arcana", "Medicine"],
	gold : 10,
	equipleft : [
		["Book of research notes", "", 5],
		["Squid ink, 1 ounce bottle of", "", ""],
		["Ink pen", "", ""],
		["Blubber oil, flasks of", "", 1],
		["Acid, vials of", "", 1],
		["Fish scales, vial of", "", 1],
		["Seaweed, vial of", "", 1],
		["Jellyfish stingers, vial of", "", 1],
		["Unidentified slime, glass bottle of", "", 4]
	],
	equipright : [
		["Common clothes", "", 3],
		["Belt pouch (with coins)", "", 1]
	],
	languageProfs : [2],
	feature : "Simic Researcher",
	trait : [
		"I can't wait to see what I become next!",
		"I am convinced that everything inclines toward constant improvement.",
		"I'm eager to explain every detail of my most intricate experiments and theories to anyone who shows the least bit of interest.",
		"I assume that everyone needs even the most basic concepts explained to them.",
		"I describe everything that happens as if it were going into my research notes (and it often is).",
		"I am insatiably curious about the seemingly infinite forms and adaptations of life.",
		"I can't resist prying into anything forbidden, since it must be terribly interesting.",
		"I employ a highly technical vocabulary to avoid imprecision and ambiguity in my communication."
	],
	ideal : [
		["Guild", "Guild: My guild is all that really matters. (Any)"],
		["Change", "Change: All life is meant to progress toward perfection, and our work is to hurry it along—no matter what must be upended along the way. (Chaotic)"],
		["Knowledge", "Knowledge: Understanding the world is more important than what you do with your knowledge. (Neutral)"],
		"Greater Good. I want to reshape the world into higher forms of life so that all can enjoy evolution. (Good)",
		["Logic", "Logic: It's foolish to let emotions and principles interfere with the conclusions of logic. (Lawful)"],
		["Superiority", "Superiority: My vast intellect and strength are directed toward increasing my sway over others. (Evil)"]
	],
	bond : [
		"I helped create a krasis that I love like a pet and would carry with me everywhere ... except it's the size of a building, and it might eat me.",
		"In my laboratory, I discovered something that I think could eliminate half the life on Ravnica.",
		"The other researchers in my clade are my family—a big, eccentric family including members and parts of many species.",
		"The laboratory where I did my research contains everything that is precious to me.",
		"I will get revenge on the shortsighted fool who killed my precious krasis creation.",
		"Everything I do is an attempt to impress someone I love."
	],
	flaw : [
		"I have a rather embarrassing mutation that I do everything I can to keep hidden.",
		"I'm more interested in taking notes on monstrous anatomy than in fighting monsters.",
		"Every social situation I'm in seems to lead to my asking rude personal questions.",
		"I'm supremely confident in my ability to adapt to any situation and handle any danger.",
		"I'll take any risk to earn recognition for my scientific brilliance.",
		"I have a tendency to take shortcuts in my research and any other tasks I have to complete."
	],
	extra : [
		"Select a Clade or Research",
		"Hull Clade: protection/durability",
		"Fin Clade: movement",
		"Gyre Clade: patterns/metamagic",
		"Guardian Project: guard monsters/super soldiers",
		"Crypsis Project: (counter)intelligence",
		"Independent research in a new area"
	]
};
BackgroundFeatureList["simic researcher"] = {
	description : "I know where or from whom I can acquire scientific facts, usually from a Simic laboratory, or sometimes an Izzet facility, library, university, independent scholar, or creature. I might need to offer bribes, favors, or other incentives to induce people to reveal their secrets. The DM can rule that the knowledge is inaccessible place, can't be found, or requires a quest.",
	source : ["G", 93]
};

// Spells
SpellsList["encode thoughts"] = {
	name : "Encode Thoughts",
	classes : [],
	source : ["G", 47],
	ritual : false,
	level : 0,
	school : "Ench",
	time : "1 a",
	range : "Self",
	components : "S",
	duration : "Up to 8 h",
	description : "Make physical through strand of memory or vice versa; works with detect thoughts \u0026 modify memory",
	descriptionFull : "Putting a finger to your head, you pull a memory, an idea, or a message from your mind and transform it into a tangible string of glowing energy called a thought strand, which persists for the duration or until you cast this spell again. The thought strand appears in an unoccupied space within 5 feet of you as a Tiny, weightless, semisolid object that can be held and carried like a ribbon. It is otherwise stationary." + "\n   " + "If you cast this spell while concentrating on a spell or an ability that allows you to read or manipulate the thoughts of others (such as detect thoughts or modify memory), you can transform the thoughts or memories you read, rather than your own, into a thought strand." + "\n   " + "Casting this spell while holding a thought strand allows you to instantly receive whatever memory, idea, or message the thought strand contains. (Casting detect thoughts on the strand has the same effect.)"
};
if (!SourceList.X) { // reprint from Xanathar's Guide to Everything
	SpellsList["chaos bolt-xgte"] = {
		name : "Chaos Bolt",
		classes : ["sorcerer"],
		source : [["X", 151], ["G", 67]],
		ritual : false,
		level : 1,
		school : "Evoc",
		time : "1 a",
		range : "120 ft",
		components : "V,S",
		duration : "Instantaneous",
		description : "Spell atk 2d8+1d6+1d6/SL dmg, d8s set dmg type, see B; double on d8s: new atk vs. crea in 30 ft",
		descriptionFull : "You hurl an undulating, warbling mass of chaotic energy at one creature in range. Make a ranged spell attack against the target. On a hit, the target takes 2d8 + 1d6 damage. Choose one of the d8s. The number rolled on that die determines the attack's damage type, as shown below." + "\n\n" + toUni("d8") + "\t" + toUni("Damage Type") + "\n  1\tAcid" + "\n  2\tCold" + "\n  3\tFire" + "\n  4\tForce" + "\n  5\tLightning" + "\n  6\tPoison" + "\n  7\tPsychic" + "\n  8\tThunder" + "\n\n   " + "If you roll the same number on both d8s, the chaotic energy leaps from the target to a different creature of your choice within 30 feet of it. Make a new attack roll against the new target, and make a new damage roll, which could cause the chaotic energy to leap again." + "\n   " + "A creature can be targeted only once by each casting of this spell." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, each target takes 1d6 extra damage of the type rolled for each slot level above 1st."
	};
}
