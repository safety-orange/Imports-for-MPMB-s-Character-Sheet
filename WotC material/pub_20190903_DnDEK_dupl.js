var iFileName = "pub_20190903_DnDEK.js";
RequiredSheetVersion("13.1.14");
// This file adds the sidekick rules from the Dungeons & Dragons Essentials Kit adventures to MPMB's Character Record Sheet
/* - NOTICE -
	These sidekick classes are available as normal classes because the sheet doesn't support classes for the companion page

	Be aware that the sidekick official way of levelling is not fully compatible with the sheet,
	because it isn't how player classes normally gain abilities and choices.
	For example, the ability score improvements here are left to the player, while the rules say which score increases.

	Also, the sidekicks here gain increases to their proficiency bonus just like normal classes because that is hard-coded into the sheet.
	According to the official rules, the sidekicks only get a proficiency bonus increase at 5th level, and at no other levels.
*/

// Define the source
SourceList["DnDEK"] = {
	name : "Dungeons & Dragons Essentials Kit [sidekick classes]",
	abbreviation : "DnDEK",
	group : "Primary Sources",
	url : "https://media.wizards.com/2020/dnd/downloads/dnd_essentials_rulebook.pdf",
	date : "2019/09/03",
	defaultExcluded : true
};

ClassList["sidekick-expert"] = {
	loadSidekickStats : function(AddRemove, scoresA) {
		// (re)set the default ability scores
		initiateCurrentStats();
		var expectedA = AddRemove ? [8,8,8,8,8,8] : scoresA;
		var setA = AddRemove ? scoresA : [8,8,8,8,8,8];
		for (var s = 0; s < scoresA.length; s++) {
			if (CurrentStats.cols[0].scores[s] != expectedA[s]) continue;
			CurrentStats.cols[0].scores[s] = setA[s];
			var thisAbi = AbilityScores.abbreviations[s];
			if (AddRemove && !What(thisAbi)) Value(thisAbi, setA[s])
		}
		// (re)set the race and background
		var expectedV = AddRemove ? ["", ""] : ["Hum\u200Aanoid", "Generic"];
		var setV = AddRemove ? ["Hum\u200Aanoid", "Generic"] : ["", ""];
		if (What("Race") == expectedV[0]) Value("Race", setV[0]);
		if (What("Background") == expectedV[1]) Value("Background", setV[1]);
	},
	fixSidekickLevelDeps : function(aClass, lvlA) {
		// First add an extra HD
		for (var i = 1; i <= 3; i++) {
			var lvlFld = "HD" + i + " Level";
			if (What("HD" + i + " Die") == 8 && What(lvlFld) == lvlA[1]) {
				Value(lvlFld, What(lvlFld) + 1);
				CurrentUpdates.types.push("hp");
				break;
			}
		}
	},
	amendSidekickHP : function (HDobj) {
		// remove 1st level max, and change its average and fixed value
		var matchRegex = /(\d+)d8 \((\d+\.?\d+?)\)/;
		var match = HDobj.dieStr[1].match(matchRegex);
		if (!match) return;
		HDobj.dieStr.shift(); HDobj.average -= 3.5; HDobj.fixed -= 3;
		HDobj.dieStr[0] = HDobj.dieStr[0].replace(matchRegex, (Number(match[1]) + 1) + "d8 (" + (Number(match[2]) + 4.5) + ")");
		HDobj.dieStr.push("\n extra sidekick HD (included above), but no max 1st level");
	},
	regExpSearch : /^(?=.*expert)(?=.*sidekick).*$/i,
	name : "Expert (sidekick)",
	source : [["DnDEK", 63]],
	primaryAbility : "Dexterity",
	prereqs : "Can't multiclass",
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 3, 3, 4],
	die : 8,
	saves : ["Dex"],
	skills : {
		primary : ["Acrobatics", "Performance", "Persuasion", "Sleight of Hand", "Stealth"]
	},
	toolProfs : {
		primary : [["Thieves' tools", "Dex"], ["Musical instrument", 1]]
	},
	armorProfs : {
		primary : [true, false, false, false]
	},
	weaponProfs : {
		primary : [true, false, ["rapier", "shortsword"]]
	},
	equipment : "Expert starting equipment:" +
		"\n \u2022 A shortsword and a dagger;" +
		"\n \u2022 A shortbow and a quiver of 20 arrows;" +
		"\n \u2022 Studded leather armor;" +
		"\n \u2022 Thieves' tools and a musical instrument of my choice.",
	subclasses : ["", []],
	attacks : [1, 1, 1, 1, 1, 2],
	features : {
		"sidekick" : {
			name : "Sidekick",
			source : [["DnDEK", 63]],
			minlevel : 1,
			description : desc([
				"Unlike other classes, a sidekick has preset ability scores and skill proficiencies",
				"A sidekick gains 2 HD at 1st level, but doesn't get max HP for its 1st level",
				"If the DM allows it, a race can be selected and have its racial traits applied",
				"A sidekick does not get the benefits of a background, nor can it multiclass"
			]),
			scorestxt : "Starts with 10 Strength, 15 Dexterity, 12 Constitution, 13 Intelligence, 10 Wisdom, and 14 Charisma",
			weaponsAdd : { select : ["Shortsword", "Dagger", "Shortbow"] },
			armorAdd : { select : "Studded Leather" },
			languageProfs : ["Common", 1],
			eval : function (lvlA, choiceA) {
				ClassList["sidekick-expert"].loadSidekickStats(true, [10, 15, 12, 13, 10, 14]);
			},
			removeeval : function (lvlA, choiceA) {
				ClassList["sidekick-expert"].loadSidekickStats(false, [10, 15, 12, 13, 10, 14]);
			},
			changeeval : function (lvlA, choiceA) {
				ClassList["sidekick-expert"].fixSidekickLevelDeps("sidekick-expert", lvlA);
			},
			calcChanges : {
				hp : function (totalHD, HDobj) {
					ClassList["sidekick-expert"].amendSidekickHP(HDobj);
				}
			}
		},
		"helpful" : {
			name : "Helpful",
			source : [["DnDEK", 63]],
			minlevel : 1,
			description : "\n   I can use a bonus action to take the Help action",
			action : ["bonus action", ""]
		},
		"cunning action" : {
			name : "Cunning Action",
			source : [["DnDEK", 64]],
			minlevel : 2,
			description : "\n   I can use a bonus action to take the Dash, Disengage, or Hide action",
			action : ["bonus action", ""]
		},
		"expertise" : function() {
			var a = {
				name : "Expertise",
				source : [["DnDEK", 64]],
				minlevel : 3,
				description : "\n   " + "I gain expertise with two skills I am proficient with",
				skillstxt : "Expertise with any two skill proficiencies",
				extraname : "Expertise",
				extrachoices : ["Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight of Hand", "Stealth", "Survival"],
				extraTimes : 2
			}
			for (var i = 0; i < a.extrachoices.length; i++) {
				var attr = a.extrachoices[i].toLowerCase();
				a[attr] = {
					name : a.extrachoices[i] + " Expertise",
					description : "",
					source : a.source,
					skills : [[a.extrachoices[i], "only"]],
					prereqeval : function(v) {
						return v.skillProfsLC.indexOf(v.choice) === -1 ? false : v.skillExpertiseLC.indexOf(v.choice) === -1 ? true : "markButDisable";
					}
				}
			}
			return a;
		}()
	}
}
ClassList["sidekick-warrior"] = {
	regExpSearch : /^(?=.*warrior)(?=.*sidekick).*$/i,
	name : "Warrior (sidekick)",
	source : [["DnDEK", 63]],
	primaryAbility : "Strength",
	prereqs : "Can't multiclass",
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3],
	die : 8,
	saves : ["Con"],
	skills : {
		primary : ["Athletics", "Perception", "Survival"]
	},
	armorProfs : {
		primary : [true, true, true, true]
	},
	weaponProfs : {
		primary : [true, true]
	},
	equipment : "Warrior starting equipment:" +
		"\n \u2022 A longsword;" +
		"\n \u2022 A longbow and a quiver of 20 arrows;" +
		"\n \u2022 Chain shirt and a shield.",
	subclasses : ["", []],
	attacks : [1, 1, 1, 1, 1, 2],
	features : {
		"sidekick" : {
			name : "Sidekick",
			source : [["DnDEK", 63]],
			minlevel : 1,
			description : desc([
				"Unlike other classes, a sidekick has preset ability scores and skill proficiencies",
				"A sidekick gains 2 HD at 1st level, but doesn't get max HP for its 1st level",
				"If the DM allows it, a race can be selected and have its racial traits applied",
				"A sidekick does not get the benefits of a background, nor can it take feats or multiclass"
			]),
			scorestxt : "Starts with 15 Strength, 13 Dexterity, 14 Constitution, 10 Intelligence, 12 Wisdom, and 10 Charisma",
			weaponsAdd : { select : ["Longsword", "Longbow"] },
			armorAdd : { select : "Chain Shirt" },
			shieldAdd : "Shield",
			languageProfs : ["Common", 1],
			eval : function (lvlA, choiceA) {
				ClassList["sidekick-expert"].loadSidekickStats(true, [15, 13, 14, 10, 12, 10]);
			},
			removeeval : function (lvlA, choiceA) {
				ClassList["sidekick-expert"].loadSidekickStats(false, [15, 13, 14, 10, 12, 10]);
			},
			changeeval : function (lvlA, choiceA) {
				ClassList["sidekick-expert"].fixSidekickLevelDeps("sidekick-warrior", lvlA);
			},
			calcChanges : {
				hp : function (totalHD, HDobj) {
					ClassList["sidekick-expert"].amendSidekickHP(HDobj);
				}
			}
		},
		"martial role" : {
			name : "Martial Role",
			source : [["DnDEK", 63]],
			minlevel : 1,
			description : '\n   Choose a Martial Role for the warrior using the "Choose Feature" button above',
			choices : ["Attacker", "Defender"],
			"attacker" : {
				name : "Martial Role: Attacker",
				description : "\n  I gain a +2 bonus to my attack rolls",
				calcChanges : {
					atkCalc : [
						function (fields, v, output) {
							if (!v.isDC) output.extraHit += 2;
						},
						"I add a +2 bonus on the To Hit of all my attack rolls."
					]
				}
			},
			"defender" : {
				name : "Martial Role: Defender",
				description : desc([
					"As a reaction, I can give disadv. on an attack made vs. someone within 5 ft of me",
					"I need to be able to see the attacker to do this"
				]),
				action : ["reaction", ""]
			}
		},
		"second wind" : {
			name : "Second Wind",
			source : [["DnDEK", 64]],
			minlevel : 2,
			description : "\n   As a bonus action, I regain 1d10 + warrior level HP; I can use this once per short rest",
			additional : levels.map(function (n) {
				return "1d10+" + n;
			}),
			usages : 1,
			recovery : "short rest",
			action : ["bonus action", ""]
		},
		"improved critical" : {
			name : "Improved Critical",
			source : [["DnDEK", 64]],
			minlevel : 3,
			description : "\n   I score a critical hit with my weapon attacks on a roll of 19 and 20",
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (!v.isSpell && !v.CritChance && classes.known["sidekick-warrior"]) {
							fields.Description += (fields.Description ? '; ' : '') + 'Crit on 19-20';
							v.CritChance = 19;
						};
					},
					"My weapon attacks score a critical on a to hit roll of both 19 and 20.",
					19
				]
			}
		}
	}
}
ClassList["sidekick-spellcaster"] = {
	setSidekickSpells : function (knownObj, lvlA) {
		var spCast = CurrentSpells["sidekick-spellcaster"];
		if (!spCast) return;
		if (!spCast.selectCa) spCast.selectCa = [];
		if (!spCast.selectSp) spCast.selectSp = [];
		for (var knownType in knownObj) {
			var knowSel = "select" + knownType;
			for (var cLvl in knownObj[knownType]) {
				if (cLvl > lvlA[0] && cLvl <= lvlA[1]) { // level gained
					spCast[knowSel] = spCast[knowSel].concat(knownObj[knownType][cLvl]);
				} else if (cLvl <= lvlA[0] && cLvl > lvlA[1]) { // level lost
					var removeSp = knownObj[knownType][cLvl];
					for (var i = 0; i < removeSp.length; i++) {
						var indx = spCast[knowSel].indexOf(removeSp[i]);
						if (indx == -1) continue;
						spCast[knowSel].splice(indx, 1);
					}
				}
			}
		}
	},
	regExpSearch : /^(?=.*(spellcaster|mage|healer))(?=.*sidekick).*$/i,
	name : "Spellcaster (sidekick)",
	source : [["DnDEK", 63]],
	primaryAbility : "Intelligence or Wisdom",
	prereqs : "Can't multiclass",
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3],
	die : 8,
	saves : ["Wis"],
	skills : {
		primary : ["Arcana", "Investigation", "Religion"]
	},
	armorProfs : {
		primary : [true, false, false, false]
	},
	weaponProfs : {
		primary : [true, false]
	},
	equipment : "Spellcaster starting equipment:" +
		"\n \u2022 A quarterstaff;" +
		"\n \u2022 Leather armor.",
	subclasses : ["Magical Role", []],
	attacks : [1],
	features : {
		"sidekick" : {
			name : "Sidekick",
			source : [["DnDEK", 63]],
			minlevel : 1,
			description : desc([
				"Unlike other classes, a sidekick has preset ability scores and skill proficiencies",
				"A sidekick gains 2 HD at 1st level, but doesn't get max HP for its 1st level",
				"If the DM allows it, a race can be selected and have its racial traits applied",
				"A sidekick does not get the benefits of a background, nor can it take feats or multiclass"
			]),
			scorestxt : "Starts with 10 Strength, 12 Dexterity, 10 Constitution, 15 Intelligence, 14 Wisdom, and 13 Charisma",
			weaponsAdd : { select : ["Quarterstaff"] },
			armorAdd : { select : "Leather" },
			languageProfs : ["Common", 1],
			eval : function (lvlA, choiceA) {
				ClassList["sidekick-expert"].loadSidekickStats(true, [10, 12, 10, 15, 14, 13]);
			},
			removeeval : function (lvlA, choiceA) {
				ClassList["sidekick-expert"].loadSidekickStats(false, [10, 12, 10, 15, 14, 13]);
			},
			changeeval : function (lvlA, choiceA) {
				ClassList["sidekick-expert"].fixSidekickLevelDeps("sidekick-warrior", lvlA);
			},
			calcChanges : {
				hp : function (totalHD, HDobj) {
					ClassList["sidekick-expert"].amendSidekickHP(HDobj);
				}
			}
		},
		"subclassfeature1" : {
			name : "Magical Role",
			source : [["DnDEK", 63]],
			minlevel : 1,
			description : '\n   Choose the magical role of the sidekick, mage or healer, and put it in the "Class" field'
		},
		"potent cantrips" : {
			name : "Potent Cantrips",
			source : [["DnDEK", 64]],
			minlevel : 6,
			description : "\n   I add my spellcasting ability modifier to the damage I deal with any cantrip",
			calcChanges : {
				atkCalc : [
					function (fields, v, output) {
						var subclass = classes.known["sidekick-spellcaster"].subclass;
						if (!subclass || !ClassSubList[subclass].abilitySave) return;
						var spAbiMod = Number(What(AbilityScores.abbreviations[ClassSubList[subclass].abilitySave - 1] + ' Mod'));
						if (spAbiMod > 0 && v.thisWeapon[3] && SpellsList[v.thisWeapon[3]].level === 0) {
							output.extraDmg += spAbiMod;
						};
					},
					"My cantrips get my spellcasting ability modifier added to their damage."
				],
				spellAdd : [
					function (spellKey, spellObj, spName) {
						var subclass = classes.known["sidekick-spellcaster"].subclass;
						if (!subclass || !ClassSubList[subclass].abilitySave || spellObj.psionic || spellObj.level !== 0) return;
						var spAbi = AbilityScores.abbreviations[ClassSubList[subclass].abilitySave - 1];
						var spAbiMod = Number(What(spAbi + ' Mod'));
						if (spAbiMod < 1) return;
						return genericSpellDmgEdit(spellKey, spellObj, "\\w+\\.?", spAbi);
					},
					"My cantrips get my spellcasting ability modifier added to their damage."
				]
			}
		}
	}
}

AddSubClass("sidekick-spellcaster", "mage", {
	regExpSearch : /^(?=.*mage)(?=.*sidekick).*$/i,
	subname : "Mage",
	fullname : "Mage (sidekick)",
	source : [["DnDEK", 63]],
	abilitySave : 4,
	spellcastingFactor : 1,
	spellcastingList : {
		"class" : "wizard",
		level : [0, 6]
	},
	spellcastingKnown : {
		cantrips : [2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5],
		spells :   [1, 2, 3, 3, 4, 4, 8, 9,10,11,12,12]
	},
	spellcastingTable : [[0, 0, 0, 0, 0, 0, 0, 0, 0]].concat(levels.slice(0,12).map(function (n) {
		return defaultSpellTable[n < 7 ? Math.ceil(n / 2) : n];
	})),
	features : {
		"subclassfeature1" : {
			name : "Spellcasting",
			source : [["DnDEK", 63]],
			minlevel : 1,
			description : "\n   I can cast wizard cantrips/spells I know, using Intelligence as my spellcasting ability",
			weaponsAdd : { select : ["Fire Bolt"] },
			changeeval : function (lvlA, choiceA) {
				if (!lvlA[1]) return;
				// set the spells known for the level
				var knownObj = {
					Ca : {
						"1" : ["fire bolt", "light"],
						"4" : ["mage hand"],
						"7" : ["minor illusion"],
						"10" : ["shocking grasp"]
					},
					Sp : {
						"1" : ["sleep"],
						"2" : ["burning hands"],
						"3" : ["shield"],
						"5" : ["invisibility"],
						"7" : ["flaming sphere", "fireball", "fly", "wall of fire"],
						"8" : ["polymorph"],
						"9" : ["cone of cold"],
						"10" : ["hold monster"],
						"11" : ["chain lightning"]
					}
				}
				ClassList["sidekick-spellcaster"].setSidekickSpells(knownObj, lvlA);
			}
		}
	}
});

AddSubClass("sidekick-spellcaster", "healer", {
	regExpSearch : /^(?=.*healer)(?=.*sidekick).*$/i,
	subname : "Healer",
	fullname : "Healer (sidekick)",
	source : [["DnDEK", 63]],
	abilitySave : 5,
	spellcastingFactor : 1,
	spellcastingList : {
		"class" : "cleric",
		level : [0, 6]
	},
	spellcastingKnown : {
		cantrips : [2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5],
		spells :   [1, 2, 3, 3, 4, 4, 8, 9,10,11,12,12]
	},
	spellcastingTable : [[0, 0, 0, 0, 0, 0, 0, 0, 0]].concat(levels.slice(0,12).map(function (n) {
		return defaultSpellTable[n < 7 ? Math.ceil(n / 2) : n];
	})),
	features : {
		"subclassfeature1" : {
			name : "Spellcasting",
			source : [["DnDEK", 63]],
			minlevel : 1,
			description : "\n   I can cast cleric cantrips/spells I know, using Wisdom as my spellcasting ability",
			weaponsAdd : { select : ["Sacred Flame"] },
			changeeval : function (lvlA, choiceA) {
				if (!lvlA[1]) return;
				// set the spells known for the level
				var knownObj = {
					Ca : {
						"1" : ["guidance", "sacred flame"],
						"4" : ["resistance"],
						"7" : ["light"],
						"10" : ["spare they dying"]
					},
					Sp : {
						"1" : ["cure wounds"],
						"2" : ["bless"],
						"3" : ["shield of faith"],
						"5" : ["aid"],
						"7" : ["lesser restoration", "protection from energy", "revivify", "death ward"],
						"8" : ["banishment"],
						"9" : ["greater restoration"],
						"10" : ["mass cure wounds"],
						"11" : ["heal"]
					}
				}
				ClassList["sidekick-spellcaster"].setSidekickSpells(knownObj, lvlA);
			}
		}
	}
});
