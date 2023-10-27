var iFileName = "ua_20160912_The-Ranger,-Revised.js";
RequiredSheetVersion("13.1.0");
// This file adds the content from the Unearthed Arcana: The Ranger, Revised article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:RR"] = {
	name : "Unearthed Arcana: The Ranger, Revised",
	abbreviation : "UA:RR",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2016/dnd/downloads/UA_RevisedRanger.pdf",
	date : "2016/09/12"
};

//adds an alternative ranger class, including three subclasses
ClassList.rangerua = {
	regExpSearch : /^((?=.*(ranger|strider))|((?=.*(nature|natural))(?=.*(knight|fighter|warrior|warlord|trooper)))).*$/i,
	name : "Ranger",
	source : [["UA:RR", 2]],
	primaryAbility : "Dexterity and Wisdom",
	abilitySave : 5,
	prereqs : "Dexterity 13 and Wisdom 13",
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	die : 10,
	saves : ["Str", "Dex"],
	skillstxt : {
		primary : "Choose three from Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, and Survival",
		secondary : "Choose one from Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, or Survival"
	},
	armorProfs : {
		primary : [true, true, false, true],
		secondary : [true, true, false, true]
	},
	weaponProfs : {
		primary : [true, true],
		secondary : [true, true]
	},
	equipment : "Ranger starting equipment:\n \u2022 Scale mail -or- leather armor;\n \u2022 Two shortswords -or- two simple melee weapons;\n \u2022 A dungeoneer's pack -or- an explorer's pack;\n \u2022 A longbow and a quiver of 20 arrows.\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses : ["Ranger Conclaves", []],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	spellcastingFactor : 2,
	spellcastingList : {
		"class" : "ranger"
	},
	spellcastingKnown : {
		spells : [0, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11]
	},
	features : {
		"favored enemy" : {
			name : "Favored Enemy",
			source : [["UA:RR", 2]],
			minlevel : 1,
			description : "\n   " + 'Use the "Choose Feature" button above to select a favored enemy' + "\n   " + "Choose from beasts, fey, humanoids, monstrosities, or undead" + "\n   " + "I get a bonus to damage rolls with weapon attacks against the chosen favored enemy" + "\n   " + "I have adv. on Wis (Survival) to track and Int checks to recall info about them" + "\n   " + "I also learn one language of my choice, typically one associated with the favored enemy",
			additional : levels.map(function (n) {
				return (n < 6 ? "+2" : "+4") + " weapon attack damage";
			}),
			choices : ["Beasts", "Fey", "Humanoids", "Monstrosities", "Undead"],
			"beasts" : {
				name : "Favored Enemy: Beasts",
				description : "\n   " + "I get a bonus to damage rolls with weapon attacks against beasts" + "\n   " + "I have adv. on Wis (Survival) to track and Int checks to recall info about beasts" + "\n   " + "I learn a language, typically one spoken by or associated with beasts"
			},
			"fey" : {
				name : "Favored Enemy: Fey",
				description : "\n   " + "I get a bonus to damage rolls with weapon attacks against fey" + "\n   " + "I have adv. on Wis (Survival) to track and Int checks to recall info about fey" + "\n   " + "I learn a language, typically one spoken by or associated with fey"
			},
			"humanoids" : {
				name : "Favored Enemy: Humanoids",
				description : "\n   " + "I get a bonus to damage rolls with weapon attacks against humanoids" + "\n   " + "I have adv. on Wis (Survival) to track and Int checks to recall info about humanoids" + "\n   " + "I learn a language, typically one spoken by or associated with humanoids"
			},
			"monstrosities" : {
				name : "Favored Enemy: Monstrosities",
				description : "\n   " + "I get a bonus to damage rolls with weapon attacks against monstrosities" + "\n   " + "I have adv. on Wis (Survival) to track and Int checks to recall info about monstrosities" + "\n   " + "I learn a language, typically one spoken by or associated with monstrosities"
			},
			"undead" : {
				name : "Favored Enemy: Undead",
				description : "\n   " + "I get a bonus to damage rolls with weapon attacks against undead" + "\n   " + "I have adv. on Wis (Survival) to track and Int checks to recall info about undead" + "\n   " + "I learn a language, typically one spoken by or associated with undead"
			},
			languageProfs : [1],
			calcChanges : {
				atkCalc : [
					function (fields, v, output) {
						if (!v.isSpell && classes.known.rangerua && classes.known.rangerua.level && (/favou?red.{1,2}enemy/i).test(v.WeaponTextName)) {
							output.extraDmg += classes.known.rangerua.level < 6 ? 2 : 4;
						};
					},
					"If I include the words 'Favored Enemy' in the name or description of a weapon, it gets bonus damage, depending on my Ranger level."
				]
			}
		},
		"natural explorer" : {
			name : "Natural Explorer",
			source : [["UA:RR", 3]],
			minlevel : 1,
			description : "\n   " + "On my first turn in combat, I have adv. on attacks against those that did not yet act" + "\n   " + "I ignore difficult terrain; I have adv. on Initiative; I have benefits in travel, see page 3",
			"travel benefits" : {
				name : "Travel Benefits",
				extraname : "Natural Explorer",
				source : [["UA:RR", 3]],
				description: desc([
					"After one hour of traveling in the wilderness I gain the following benefits:",
					" \u2022 My allies and I are not slowed by difficult terrain and can't get lost except by magic",
					" \u2022 I am alert to danger even when doing something else; I forage twice as much food",
					" \u2022 If alone (or alone with animal companion), I can move stealthily at my normal pace",
					" \u2022 When tracking others, I also learn their exact number, size, and time since passing"
				])
			},
			autoSelectExtrachoices : [{ extrachoice : "travel benefits" }],
			advantages : [["Initiative", true]]
		},
		"fighting style" : function () {
			var FSfea = newObj(ClassList.ranger.features["fighting style"]);
			FSfea.source = ["UA:RR", 3];
			return FSfea;
		}(),
		"spellcasting" : {
			name : "Spellcasting",
			source : [["UA:RR", 3]],
			minlevel : 2,
			description : "\n   " + "I can cast ranger spells that I know, using Wisdom as my spellcasting ability",
			additional : ["", "2 spells known", "3 spells known", "3 spells known", "4 spells known", "4 spells known", "5 spells known", "5 spells known", "6 spells known", "6 spells known", "7 spells known", "7 spells known", "8 spells known", "8 spells known", "9 spells known", "9 spells known", "10 spells known", "10 spells known", "11 spells known", "11 spells known"]
		},
		"primeval awareness" : {
			name : "Primeval Awareness",
			source : [["UA:RR", 4]],
			minlevel : 3,
			description : "\n   " + "If I haven't attacked a beast within the last 10 min, I can communicate with it" + "\n   " + "As an action, I convey simple ideas, and read mood, intent, emotions, needs, etc." + "\n   " + "By concentrating for 1 min, I know if any of my favored enemies are within 5 miles" + "\n   " + "Per group, I sense the number, general direction, distance, and type of favored enemy",
			action : ["action", " (communicate)"]
		},
		"subclassfeature3" : {
			name : "Ranger Conclave",
			source : [["UA:RR", 4]],
			minlevel : 3,
			description : "\n   " + "Choose a Ranger Conclave you strive to emulate and put it in the \"Class\" field" + "\n   " + "Choose either Beast Conclave, Deep Stalker Conclave or Hunter Conclave"
		},
		"greater favored enemy" : {
			name : "Greater Favored Enemy",
			source : [["UA:RR", 4]],
			minlevel : 6,
			description : "\n   " + 'Use the "Choose Feature" button above to select a greater favored enemy' + "\n   " + "Choose from aberrations, celestials, constructs, dragons, elementals, fiends, or giants" + "\n   " + "I get all the bonuses from Favored Enemy for this creature type as well" + "\n   " + "Additionally, I have adv. on saves vs. spells and abilities of this greater favored enemy",
			additional : "+4 weapon attack damage",
			choices : ["Aberrations", "Celestials", "Constructs", "Dragons", "Elementals", "Fiends", "Giants"],
			"aberrations" : {
				name : "Greater Favored Enemy: Aberrations",
				description : "\n   " + "The bonuses I get from Favored Enemy now also work against aberrations" + "\n   " + "Additionally, I have advantage on saves against spells and abilities used by aberrations",
				savetxt : { adv_vs : ["spells/abilities of aberrations"] }
			},
			"celestials" : {
				name : "Greater Favored Enemy: Celestials",
				description : "\n   " + "The bonuses I get from Favored Enemy now also work against celestials" + "\n   " + "Additionally, I have advantage on saves against spells and abilities used by celestials",
				savetxt : { adv_vs : ["spells/abilities of celestials"] }
			},
			"constructs" : {
				name : "Greater Favored Enemy: Constructs",
				description : "\n   " + "The bonuses I get from Favored Enemy now also work against constructs" + "\n   " + "Additionally, I have advantage on saves against spells and abilities used by constructs",
				savetxt : { adv_vs : ["spells/abilities of constructs"] }
			},
			"dragons" : {
				name : "Greater Favored Enemy: Dragons",
				description : "\n   " + "The bonuses I get from Favored Enemy now also work against dragons" + "\n   " + "Additionally, I have advantage on saves against spells and abilities used by dragons",
				savetxt : { adv_vs : ["spells/abilities of dragons"] }
			},
			"elementals" : {
				name : "Greater Favored Enemy: Elementals",
				description : "\n   " + "The bonuses I get from Favored Enemy now also work against elementals" + "\n   " + "Additionally, I have advantage on saves against spells and abilities used by elementals",
				savetxt : { adv_vs : ["spells/abilities of elementals"] }
			},
			"fiends" : {
				name : "Greater Favored Enemy: Fiends",
				description : "\n   " + "The bonuses I get from Favored Enemy now also work against fiends" + "\n   " + "Additionally, I have advantage on saves against spells and abilities used by fiends",
				savetxt : { adv_vs : ["spells/abilities of fiends"] }
			},
			"giants" : {
				name : "Greater Favored Enemy: Giants",
				description : "\n   " + "The bonuses I get from Favored Enemy now also work against giants" + "\n   " + "Additionally, I have advantage on saves against spells and abilities used by giants",
				savetxt : { adv_vs : ["spells/abilities of giants"] }
			},
			languageProfs : [1]
		},
		"fleet of foot" : {
			name : "Fleet of Foot",
			source : [["UA:RR", 4]],
			minlevel : 8,
			description : "\n   " + "I can take the Dash action as a bonus action",
			action : ["bonus action", ""]
		},
		"hide in plain sight" : {
			name : "Hide in Plain Sight",
			source : [["UA:RR", 4]],
			minlevel : 10,
			description : "\n   " + "When I hide on my turn without moving, others take -10 Wis (Perception) to find me" + "\n   " + "This lasts until something reveals my presence, or until I (voluntarily) move/fall prone"
		},
		"vanish" : {
			name : "Vanish",
			source : [["UA:RR", 5]],
			minlevel : 14,
			description : "\n   " + "I can't be nonmagically tracked if I don't want to be and can Hide as a bonus action",
			action : ["bonus action", ""]
		},
		"feral senses" : {
			name : "Feral Senses",
			source : [["UA:RR", 5]],
			minlevel : 18,
			description : "\n   " + "When not blinded or deafened, I'm aware of invisible, non-hidden creatures in 30 ft" + "\n   " + "I don't have disadvantage when attacking creatures I am aware of but can't see"
		},
		"foe slayer" : {
			name : "Foe Slayer",
			source : [["UA:RR", 5]],
			minlevel : 20,
			description : "\n   " + "Once per turn, I can add Wis mod to the attack or damage roll after I see the die roll"
		}
	}
};

AddSubClass("rangerua", "beast master-ua", {
	regExpSearch : /^(?=.*(animal|beast))((?=.*(master|ranger|strider))|((?=.*(nature|natural))(?=.*(knight|fighter|warrior|warlord|trooper)))).*$/i,
	subname : "Beast Conclave",
	source : [["UA:RR", 5]],
	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	features : {
		"subclassfeature3" : {
			name : "Animal Companion",
			source : [["UA:RR", 5]],
			minlevel : 3,
			description : "\n   " + "I call an animal by spending 8 hours and 50 gp; I can revive it with 8 hours and 25 gp",
			additional : ["", "", "", "+1 HD for companion", "+2 HD for companion", "+3 HD for companion", "+4 HD for companion", "+5 HD for companion", "+6 HD for companion", "+7 HD for companion", "+8 HD for companion", "+9 HD for companion", "+10 HD for companion", "+11 HD for companion", "+12 HD for companion", "+13 HD for companion", "+14 HD for companion", "+15 HD for companion", "+16 HD for companion", "+17 HD for companion"],
			creaturesAdd : [["Animal Companion", false, function(AddRemove, prefix) {
				if (!AddRemove) return;
				var compOptions = ["Ape", "Black Bear", "Boar", "Giant Badger", "Giant Weasel", "Mule", "Panther", "Wolf"];
				var selectedRace = AskUserOptions("Select Animal Companion", "Select which beast you would like to have as your animal companion.\nYou can change the beast at any time using the \"Companion Options\" button at the top of the Companion page.", compOptions, "radio", true);
				ApplyCompRace(selectedRace, prefix, "companionrr");
			}]]
		},
		"subclassfeature3.1" : {
			name : "Companion's Bond",
			source : [["UA:RR", 5]],
			minlevel : 3,
			description : "\n   " + "My companion gains several benefits, see the Companion's sheet"
		},
		"subclassfeature5" : {
			name : "Coordinated Attack",
			source : [["UA:RR", 6]],
			minlevel : 5,
			description : "\n   " + "If I take the Attack action, my companion can use its reaction to make a melee attack"
		},
		"subclassfeature7" : {
			name : "Beast's Defense",
			source : [["UA:RR", 6]],
			minlevel : 7,
			description : "\n   " + "While my companion can see me, it has advantage on all saving throws"
		},
		"subclassfeature11" : {
			name : "Storm of Claws and Fangs",
			source : [["UA:RR", 6]],
			minlevel : 11,
			description : "\n   " + "My companion can, as an action, make melee attacks vs. all creatures within 5 ft of it"
		},
		"subclassfeature15" : {
			name : "Superior Beast's Defense",
			source : [["UA:RR", 6]],
			minlevel : 15,
			description : "\n   " + "My companion can, as a reaction, halve an attack's damage from attacker that it sees"
		}
	}
});
// Add the Beast Conclave's Animal Companion as a companion option
CompanionList.companionrr = {
	name : "Animal Companion",
	nameTooltip : "Beast Conclave: Animal Companion",
	nameOrigin : "Beast Conclave 3",
	nameMenu : "Animal Companion (Beast Conclave feature)",
	source : [["UA:RR", 5]],
	includeCheck : function(sCrea, objCrea, iCreaCR) {
		// Only specific animals
		return /^(ape|black bear|boar|giant badger|giant weasel|mule|panther|wolf)$/i.test(sCrea);
	},
	attributesAdd : {
		header : "Companion",
		minlevelLinked : ["rangerua", "ranger", "spell-less ranger"],
		attacksAction : 1,
		proficiencyBonusLinked : true,
		features : [{
			name : "Coordinated Attack",
			description : "As a reaction when the ranger owner takes the Attack action, the companion can make one melee attack.",
			minlevel : 5
		}, {
			name : "Storm of Claws and Fangs",
			description : "As an action, the companion can make a melee attack against each creature that is within 5 ft.",
			minlevel : 11
		}, {
			name : "Superior Beast's Defense",
			description : "As a reaction, the companion can halve the damage of an attack from an attacker that it can see.",
			minlevel : 15
		}],
		hdLinked : function(prefix) {
			var iTotalHD = CurrentCompRace[prefix] && CurrentCompRace[prefix].hd ? CurrentCompRace[prefix].hd[0] : 0;
			var bRngLvls = false;
			["rangerua", "ranger", "spell-less ranger"].forEach(function (n) {
				if (classes.known[n]) {
					bRngLvls = true;
					iTotalHD += classes.known[n].level > 3 ? classes.known[n].level - 3 : 0;
				}
			})
			if (!bRngLvls && classes.totallevel > 3) iTotalHD += classes.totallevel - 3;
			return iTotalHD;
		}
	},
	notes : [{
		name : "Call forth and bond with an animal",
		description : "from the wilderness by spending 8 hours and 50 gp",
		joinString : " "
	}, {
		name : "I can have one companion at a time",
		description : "If it dies, I can spend 8 hours and 25 gp to bring it back",
		joinString : "; "
	}, {
		name : "Companion's Bond",
		description : [
			"It obeys my commands as best it can, or acts on its own if I can't command it",
			"When moving stealthily together with only my companion, we can move at a normal pace",
			"It uses my Proficiency Bonus instead of its own and adds this to its AC and damage rolls",
			"My companion gains proficiency with 2 skills of my choice (not automated), as well as all saves",
			"It gains a HD (and thus HP) for every ranger level I gain after 3rd, and an ASI whenever I do"
		].join("\n   "),
		joinString : typePF ? ": " : "\n   "
	}, {
		name : "In Combat",
		description : [
			"My companion rolls for initiative and takes actions as normal, but can't use Multiattack",
			"My companion gains a bonus on damage rolls against my favored enemies just like me"
		].join("\n   "),
		joinString : typePF ? ": " : ":\n   "
	}, {
		name : "Coordinated Attack (Beast Conclave 5, UA:RR 6)",
		description : "When I take the Attack action, my companion can use its reaction to make one melee attack",
		joinString : "\n   ",
		minlevel : 5
	}, {
		name : "Beast's Defense (Beast Conclave 7, UA:RR 6)",
		description : "While my companion can see me, it has advantage on all saving throws",
		joinString : "\n   ",
		minlevel : 7
	}, {
		name : "Storm of Claws and Fangs (Beast Conclave 11, UA:RR 6)",
		description : "My companion can, as an action, make a melee attack vs. all creatures within 5 ft of it",
		joinString : "\n   ",
		minlevel : 11
	}, {
		name : "Superior Beast's Defense (Beast Conclave 15, UA:RR 6)",
		description : "My companion can, as a reaction, halve the damage of an attack from an attacker that it sees",
		joinString : "\n   ",
		minlevel : 15
	}],
	attributesChange : function(sCrea, objCrea) {
		// Add Prof to attack damage
		for (var i = 0; i < objCrea.attacks.length; i++) {
			var oAtk = objCrea.attacks[i];
			if (!oAtk.modifiers) {
				oAtk.modifiers = ["", "Prof"];
			} else {
				oAtk.modifiers[1] += "+Prof";
			}
			if (oAtk.description) { // Remove multiattack
				oAtk.description = oAtk.description.replace(/(((One|Two|2).+as an Attack action)|(2 per Attack));? ?/i, '');
			}
		};
		// Remove multiattack trait/feature/action
		["traits", "features", "actions"].forEach(function (n) {
			if (!objCrea[n]) return;
			for (var i = objCrea[n].length - 1; i > -1; i--) {
				var oN = objCrea[n][i];
				if (oN.name && /multiattack/i.test(oN.name)) {
					objCrea[n].splice(i, 1);
				}
			}
		})
		// Proficient with all saving throws
		var aSaves = objCrea.saves ? objCrea.saves : ["", "", "", "", "", ""];
		for (var i = 0; i < aSaves.length; i++) {
			var iProfSave = Math.round((objCrea.scores[i] - 10.5) * 0.5) + objCrea.proficiencyBonus;
			if (aSaves[i] === "" || aSaves[i] < iProfSave) {
				aSaves[i] = iProfSave;
			}
		}
		objCrea.saves = aSaves;
	},
	eval : function(prefix, lvl) {
		// Set the alignment to be the same as the main character
		var iAlignInx = tDoc.getField("Alignment").currentValueIndices;
		if (iAlignInx !== -1) {
			PickDropdown(prefix + "Comp.Desc.Alignment", iAlignInx);
		} else {
			Value(prefix + "Comp.Desc.Alignment", What("Alignment"));
		}
		// Set HP to use fixed values
		var sHPfld = prefix + "Comp.Use.HP.Max";
		var aHPsets = How(sHPfld).split(",");
		aHPsets[3] = "fixed";
		AddTooltip(sHPfld, undefined, aHPsets.join());
		// Add Prof to the AC, if not already present
		AddToModFld(prefix + "Comp.Use.AC", "Prof", false, "Animal Companion", "An beast conclave's animal companion adds its proficiency bonus (Prof) to its AC.");
		// Alert player of things that have to be done manually
		app.alert({
			cMsg : toUni("Pick Two Skills") + "\nThe Ranger's Animal Companion that you have just added, gains proficiency with two additional skills to those already selected. Because there is no automation for selecting these proficiencies, please do so manually.\n\n" + toUni("Ability Score Improvements") + "\nThe Ranger's Animal Companion gains Ability Score Improvements (ASI) whenever your character gains them. An animal companion can't use these to take feats. There is no automation for adding these ASIs either, so please don't forget to increase the ability scores for the animal companion when you get the reminder pop-up for ASI changes.\nAlso, remember that any DCs for abilities that the beast possesses are based on ability scores modifier and that they might need to be manually changed when increasing ability scores modifiers.\nThe 'Notes' section on the companion page automatically keeps track of how many points you can increase the ability scores with and what the base value of those scores are according to the Monster Manual.",
			nIcon : 3,
			cTitle : "Don't forget the Skills and Ability Score Improvements!"
		});
	},
	changeeval : function (prefix, lvl) {
		// Update the string with the number of Ability Score Improvements (ASI)
		var objCreaFnd = CurrentCompRace[prefix];
		if (objCreaFnd.typeFound !== "creature" || !CreatureList[objCreaFnd.known]) return;
		var objCrea = CreatureList[objCreaFnd.known];
		var iASIs = 0;
		for (var aClass in classes.known) {
			if (!CurrentClasses[aClass].improvements) continue;
			var classLvL = Math.min(CurrentClasses[aClass].improvements.length, classes.known[aClass].level);
			iASIs += 2 * CurrentClasses[aClass].improvements[classLvL - 1];
		}
		var sNote = What(prefix + "Cnote.Left");
		var sNoteNew = sNote;
		if (!iASIs) {
			sNoteNew = sNote.replace(/[\r\n]? *Currently, \d+ points.*/, "");
		} else {
			var sIncreases = "Currently, " + iASIs + " points to divide " + (objCrea && objCrea.scores ? "(default: " + objCrea.scores[0] + " Str, " + objCrea.scores[1] + " Dex, " + objCrea.scores[2] + " Con, " + objCrea.scores[3] + " Int, " + objCrea.scores[4] + " Wis, " + objCrea.scores[5] + " Cha)" : "among the ability scores");
			sNoteNew = sNote.replace(/(ASI.*)([\r\n]? *Currently, \d+ points.*)?/, "$1\r   " + sIncreases);
		}
		if (sNote !== sNoteNew) Value(prefix + "Cnote.Left", sNoteNew);
	}
}

AddSubClass("rangerua", "hunter-ua", {
	regExpSearch : /^(?!.*(monster|barbarian|bard|cleric|druid|fighter|monk|paladin|rogue|sorcerer|warlock|wizard))(?=.*(hunter|huntress|hunts(wo)?m(e|a)n)).*$/i,
	subname : "Hunter Conclave",
	source : [["UA:RR", 7]],
	features : {
		"subclassfeature3" : {
			name : "Hunter's Prey",
			source : [["UA:RR", 7]],
			minlevel : 3,
			description : "\n   " + 'Choose Colossus Slayer, Giant Killer, or Horde Breaker with the "Choose Feature" button',
			choices : ["Colossus Slayer", "Giant killer", "Horde Breaker"],
			"colossus slayer" : {
				name : "Hunter's Prey: Colossus Slayer",
				description : "\n   " + "Once per turn, when hitting someone that is below max HP, I do an extra 1d8 damage"
			},
			"giant killer" : {
				name : "Hunter's Prey: Giant Killer",
				description : "\n   " + "As a reaction, when a Large or larger enemy in 5 ft attacks me, I can attack it once",
				action : ["reaction", ""]
			},
			"horde breaker" : {
				name : "Hunter's Prey: Horde Breaker",
				description : "\n   " + "Once per turn, when I hit a creature, I can make an attack vs. another within 5 ft of it"
			}
		},
		"subclassfeature7" : {
			name : "Defensive Tactics",
			source : [["UA:RR", 7]],
			minlevel : 7,
			description : "\n   " + '"Choose Feature" button to choose Escape the Horde, Multiattack Defense, or Steel Will',
			choices : ["Escape the Horde", "Multiattack Defense", "Steel Will"],
			"escape the horde" : {
				name : "Defensive Tactic: Escape the Horde",
				description : "\n   " + "Creatures attacking me with opportunity attacks have disadvantage on the attack rolls"
			},
			"multiattack defense" : {
				name : "Defensive Tactic: Multiattack Defense",
				description : "\n   " + "When a creature hits me, I gain +4 AC against that creature for the rest of the turn"
			},
			"steel will" : {
				name : "Defensive Tactic: Steel Will",
				description : "\n   " + "I have advantage on saves against being frightened",
				savetxt : { adv_vs : ["frightened"] }
			}
		},
		"subclassfeature11" : {
			name : "Multiattack",
			source : [["UA:RR", 7]],
			minlevel : 11,
			description : "\n   " + 'Choose Volley or Whirlwind Attack using the "Choose Feature" button above',
			choices : ["Volley", "Whirlwind Attack"],
			"volley" : {
				name : "Multiattack: Volley",
				description : "\n   " + "As an action, I can make ranged attacks vs. all within a 10-ft radius of a point in range",
				action : ["action", ""]
			},
			"whirlwind attack" : {
				name : "Multiattack: Whirlwind Attack",
				description : "\n   " + "As an action, I can make melee attacks vs. all creatures within 5 ft of me",
				action : ["action", ""]
			}
		},
		"subclassfeature15" : {
			name : "Superior Hunter's Defense",
			source : [["UA:RR", 7]],
			minlevel : 15,
			description : "\n   " + '"Choose Feature" button to choose Evasion, Stand Against the Tide, or Uncanny Dodge',
			choices : ["Evasion", "Stand Against the Tide", "Uncanny Dodge"],
			"evasion" : {
				name : "Evasion",
				description : "\n   " + "My Dexterity saves vs. areas of effect negate damage on success and halve it on failure",
				savetxt : { text : ["Dex save vs. area effects: fail \u2015 half dmg, success \u2015 no dmg"] }
			},
			"stand against the tide" : {
				name : "Stand Against the Tide",
				description : "\n   " + "When a creature misses me with a melee attack, I can use my reaction on the attack" + "\n   " + "I force the attacker to repeat it vs. another (not attacker) of my choice within range",
				action : ["reaction", ""]
			},
			"uncanny dodge" : {
				name : "Uncanny Dodge",
				description : "\n   " + "As a reaction, I halve the damage of an attack from an attacker that I can see",
				action : ["reaction", ""]
			}
		}
	}
});

AddSubClass("rangerua", "deep stalker-ua", {
	regExpSearch : /^(?=.*deep)(?=.*stalker).*$/i,
	subname : "Deep Stalker Conclave",
	source : [["UA:RR", 7]],
	features : {
		"subclassfeature3" : {
			name : "Underdark Scout",
			source : [["UA:RR", 7]],
			minlevel : 3,
			description : "\n   " + "In the first turn of combat I have +10 ft speed and +1 attack with the Attack action" + "\n   " + "When I'm hiding or trying to hide, others gain no benefit from darkvision to detect me"
		},
		"subclassfeature3.1" : {
			name : "Deep Stalker Magic",
			source : [["UA:RR", 8]],
			minlevel : 3,
			description : "\n   " + "I have 90 ft darkvision (or +30 ft) and gain extra known spells at level 3, 5, 9, 13, 17" + "\n   " + "These count as ranger spells, but do not count against the number of spells I can know",
			spellcastingExtra : ["disguise self", "rope trick", "glyph of warding", "greater invisibility", "seeming"],
			spellcastingExtraApplyNonconform : true,
			vision : [["Darkvision", "fixed 90"], ["Darkvision", "+30"]]
		},
		"subclassfeature7" : {
			name : "Iron Mind",
			source : [["UA:RR", 8]],
			minlevel : 7,
			description : "\n   " + "I am proficient with Wisdom saving throws",
			saves : ["Wis"]
		},
		"subclassfeature11" : {
			name : "Stalker's Flurry",
			source : [["UA:RR", 8]],
			minlevel : 11,
			description : "\n   " + "Once during my turn when I miss an attack, I can immediately make an extra attack"
		},
		"subclassfeature15" : {
			name : "Stalker's Dodge",
			source : [["UA:RR", 8]],
			minlevel : 15,
			description : "\n   " + "As a reaction when I'm attacked without adv., I can impose disadv. on the attack roll",
			action : ["reaction", " (when attacked)"]
		}
	}
});

// By popular demand, the XGtE, TCoE, FToD ranger subclasses, if they exist, are added as an option to the Revised Ranger
// Note that there are no rules by WotC that support doing this!
var UARR_AddRangerSubclassesToRevisedRanger = function() {
	var aSources = ["X", "T", "FToD"];
	var aRngrSubs = ClassList.ranger.subclasses[1];
	for (var i = 0; i < aRngrSubs.length; i++) {
		var sSub = aRngrSubs[i];
		var oSub = ClassSubList[sSub];
		if (!oSub || !oSub.source || ClassList.rangerua.subclasses[1].indexOf(sSub) !== -1) continue;
		var sSubSrc = isArray(oSub.source[0]) ? oSub.source[0][0] : oSub.source[0];
		if (aSources.indexOf(sSubSrc) === -1) continue;
		ClassList.rangerua.subclasses[1].push(sSub);
	}
}();
