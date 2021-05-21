var iFileName = "pub_20190903_DnDEK.js";
RequiredSheetVersion("13.0.6");
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
	group : "Adventure Books",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/essentials-kit",
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
		HDobj.dieStr.shift(); HDobj.average -= 3.5;  HDobj.fixed -= 3;
		HDobj.dieStr[0] = HDobj.dieStr[0].replace(matchRegex, (Number(match[1]) + 1) + "d8 (" + (Number(match[2]) + 4.5) + ")");
		HDobj.dieStr.push("\n extra sidekick HD (included above), but no max 1st level");
	},
	regExpSearch : /^(?=.*expert)(?=.*sidekick).*$/i,
	name : "Expert (sidekick)",
	source : ["DnDEK", 0],
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
			source : ["DnDEK", 0],
			minlevel : 1,
			description : desc([
				"Unlike other classes, a sidekick has preset ability scores and skill proficiencies",
				"A sidekick gains 2 HD at 1st level, but doesn't get max HP for its 1st level",
				"If the DM allows it, a race can be selected and have its racial traits applied",
				"A sidekick does not get the benefits of a background, nor can it multiclass"
			]),
			scorestxt : "Starts with 10 Strength, 15 Dexterity, 12 Constitution, 13 Intelligence, 10 Wisdom, and 14 Charisma",
			weaponsAdd : ["Shortsword", "Dagger", "Shortbow"],
			armorAdd : "Studded Leather",
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
			source : ["DnDEK", 0],
			minlevel : 1,
			description : "\n   I can use a bonus action to take the Help action",
			action : ["bonus action", ""]
		},
		"cunning action" : {
			name : "Cunning Action",
			source : ["DnDEK", 0],
			minlevel : 2,
			description : "\n   I can use a bonus action to take the Dash, Disengage, or Hide action",
			action : ["bonus action", ""]
		},
		"expertise" : function() {
			var a = {
				name : "Expertise",
				source : [["DnDEK", 0]],
				minlevel : 3,
				description : "\n   " + "I gain expertise with two skills I am proficient with",
				skillstxt : "Expertise with any two skill proficiencies",
				extraname : "Expertise",
				extrachoices : ["Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight of Hand", "Stealth", "Survival"],
				extraTimes : levels.map(function (n) { return n < 3 ? 0 : n < 10 ? 2 : 4; })
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
		}(),
		"inspiring help" : {
			name : "Inspiring Help",
			source : ["DnDEK", 0],
			minlevel : 7,
			description : desc([
				"When I use the Help action, the creature that receives the help adds +1d6 to its d20 roll",
				"If it was an attack roll that hits without the +1d6, it can add it to the damage instead"
			])
		},
		"evasion" : {
			name : "Evasion",
			source : ["DnDEK", 0],
			minlevel : 7,
			description : "\n   My Dexterity saves vs. areas of effect negate damage on success and halve it on failure",
			savetxt : { text : ["Dex save vs. area effects: fail \u2015 half dmg, success \u2015 no dmg"] }
		},
		"reliable talent" : {
			name : "Reliable Talent",
			source : ["DnDEK", 0],
			minlevel : 11,
			description : "\n   If I make an ability check where I add my proficiency bonus, rolls of 9 or lower are 10"
		}
	}
}
ClassList["sidekick-warrior"] = {
	regExpSearch : /^(?=.*warrior)(?=.*sidekick).*$/i,
	name : "Warrior (sidekick)",
	source : ["DnDEK", 0],
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
	attacks : [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3],
	features : {
		"sidekick" : {
			name : "Sidekick",
			source : ["DnDEK", 0],
			minlevel : 1,
			description : desc([
				"Unlike other classes, a sidekick has preset ability scores and skill proficiencies",
				"A sidekick gains 2 HD at 1st level, but doesn't get max HP for its 1st level",
				"If the DM allows it, a race can be selected and have its racial traits applied",
				"A sidekick does not get the benefits of a background, nor can it take feats or multiclass"
			]),
			scorestxt : "Starts with 15 Strength, 13 Dexterity, 14 Constitution, 10 Intelligence, 12 Wisdom, and 10 Charisma",
			weaponsAdd : ["Longsword", "Longbow"],
			armorAdd : "Chain Shirt",
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
			source : ["DnDEK", 0],
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
			source : ["DnDEK", 0],
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
			source : ["DnDEK", 0],
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
					"My weapon attacks score a critical on a to hit roll of both 19 and 20."
				]
			}
		},
		"battle readiness" : {
			name : "Battle Readiness",
			source : ["DnDEK", 0],
			minlevel : 7,
			description : "\n   I have advantage on my Initiative rolls",
			advantages : [["Initiative", true]]
		},
		"indomitable" : {
			name : "Indomitable",
			source : ["DnDEK", 0],
			minlevel : 9,
			description : "\n   I can reroll a failed saving throw, but must keep the new result",
			usages : 1,
			recovery : "long rest"
		},
		"improved defense" : {
			name : "Improved Defense",
			source : ["DnDEK", 0],
			minlevel : 10,
			description : "\n   I gain a +1 bonus to AC",
			extraAC : { mod : 1 }
		}
	}
}
ClassList["sidekick-spellcaster"] = {
	setSidekickSpells : function (knownObj, lvlA) {
		var spCast = CurrentSpells["sidekick-spellcaster"];
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
	source : ["DnDEK", 0],
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
			source : ["DnDEK", 0],
			minlevel : 1,
			description : desc([
				"Unlike other classes, a sidekick has preset ability scores and skill proficiencies",
				"A sidekick gains 2 HD at 1st level, but doesn't get max HP for its 1st level",
				"If the DM allows it, a race can be selected and have its racial traits applied",
				"A sidekick does not get the benefits of a background, nor can it take feats or multiclass"
			]),
			scorestxt : "Starts with 10 Strength, 12 Dexterity, 10 Constitution, 15 Intelligence, 14 Wisdom, and 13 Charisma",
			weaponsAdd : ["Quarterstaff"],
			armorAdd : "Leather",
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
			source : ["DnDEK", 0],
			minlevel : 1,
			description : '\n   Choose the magical role of the sidekick, mage or healer, and put it in the "Class" field'
		},
		"potent cantrips" : {
			name : "Potent Cantrips",
			source : ["DnDEK", 0],
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
						if (spellKey == "shillelagh") {
							spellObj.description = spellObj.description.replace("1d8", "1d8+" + spAbiMod);
						} else {
							return genericSpellDmgEdit(spellKey, spellObj, "\\w+\\.?", spAbi, true);
						}
					},
					"My cantrips get my spellcasting ability modifier added to their damage."
				]
			}
		},
		"empowered spells" : {
			name : "Empowered Spells",
			source : ["DnDEK", 0],
			minlevel : 10,
			description : desc([
				'Select one of the eight schools of magic using the "Choose Feature" button above',
				"Whenever I cast a spell from the selected school by expending a spell slot, I empower it",
				"I add my spellcasting ability modifier to the damage or healing I do with that spell"
			]),
			calcChanges : {
				spellAdd : [
					function (spellKey, spellObj, spName) {
						var subclass = classes.known["sidekick-spellcaster"].subclass;
						var spSchool = GetFeatureChoice("classes", "sidekick-spellcaster", "empowered spells");
						if (!subclass || !ClassSubList[subclass].abilitySave || !spSchool || spellObj.psionic || !spellObj.level) return;
						for (var aSchl in spellSchoolList) {
							if (spellSchoolList[aSchl] == spSchool) {
								spSchool = aSchl;
								break;
							}
						}
						if (spellObj.school !== spSchool) return;
						var spAbi = AbilityScores.abbreviations[ClassSubList[subclass].abilitySave - 1];
						var spAbiMod = Number(What(spAbi + ' Mod'));
						if (spAbiMod < 1) return;
						var startDescr = spellObj.description;
						switch (spellKey) {
							case "death ward" :
							case "harm" :
							case "virtue-uass" :
								break;
							case "enervation" :
								spellObj.description = spellObj.description.replace("action to repeat", "1 a to repeat").replace("see book", "see B");
							case "life transference" :
							case "vampiric touch" :
								spellObj.description = spellObj.description.replace(/(heals? (half|twice)( the damage dealt| that)?)( in HP)?/, "$1+" + spAbiMod);
								break;
							case "mass heal" :
								spellObj.description = spellObj.description.replace("creatures in range;", "crea in range, each then +" + spAbiMod + " HP;").replace("cured of", "cures").replace("and all diseases", "diseases");
								break;
							case "regenerate" :
								spellObj.description = spellObj.description.replace("1 HP/rnd", (1+spAbiMod) + " HP/rnd");
							default :
								if ((/\bHP o(f|r)\b/).test(spellObj.description)) break;
								var testRegex = /(.*?)([1-9]\d*d?\d*)((\+\d+d?\d*\/\d?SL)?((\+spell(casting)? ability mod(ifier)?|(\+|-)\d+ \(.{3}\))? hp.*))/i;
								var theMatch = spellObj.description.match(testRegex);
								if (!theMatch) break;
								try {
									var repl1 = isNaN(theMatch[2]) ? "$1$2+" + spAbiMod : "$1" + (Number(theMatch[2]) + spAbiMod);
									spellObj.description = spellObj.description.replace(testRegex, repl1 + "$3");
								} catch (err) {
									spellObj.description = startDescr;
								}
						}
						var theReturn = startDescr !== spellObj.description;
						if (genericSpellDmgEdit(spellKey, spellObj, "\\w+\\.?", spAbi, true)) theReturn = true;
						return theReturn;
					},
					"Spells from my selected school get my spellcasting ability modifier added to their damage and healing."
				]
			},
			choices : ["Abjuration", "Conjuration", "Divination", "Enchantment", "Evocation", "Illusion", "Necromancy", "Transmutation"],
			"abjuration" : {
				name : "Empowered Abjurations",
				description : desc([
					"Whenever I cast an abjuration spell by expending a spell slot, I can empower its effect",
					"I then add my spellcasting ability modifier to the damage or healing I do with that spell"
				])
			},
			"conjuration" : {
				name : "Empowered Conjurations",
				description : desc([
					"Whenever I cast a conjuration spell by expending a spell slot, I can empower its effect",
					"I then add my spellcasting ability modifier to the damage or healing I do with that spell"
				])
			},
			"divination" : {
				name : "Empowered Divinations",
				description : desc([
					"Whenever I cast a divination spell by expending a spell slot, I can empower its effect",
					"I then add my spellcasting ability modifier to the damage or healing I do with that spell"
				])
			},
			"enchantment" : {
				name : "Empowered Enchantments",
				description : desc([
					"Whenever I cast a enchantment spell by expending a spell slot, I can empower its effect",
					"I then add my spellcasting ability modifier to the damage or healing I do with that spell"
				])
			},
			"evocation" : {
				name : "Empowered Evocations",
				description : desc([
					"Whenever I cast a evocation spell by expending a spell slot, I can empower its effect",
					"I then add my spellcasting ability modifier to the damage or healing I do with that spell"
				])
			},
			"illusion" : {
				name : "Empowered Illusions",
				description : desc([
					"Whenever I cast an illusion spell by expending a spell slot, I can empower its effect",
					"I then add my spellcasting ability modifier to the damage or healing I do with that spell"
				])
			},
			"necromancy" : {
				name : "Empowered Necromancy",
				description : desc([
					"Whenever I cast a necromancy spell by expending a spell slot, I can empower its effect",
					"I then add my spellcasting ability modifier to the damage or healing I do with that spell"
				])
			},
			"transmutation" : {
				name : "Empowered Transmutations",
				description : desc([
					"Whenever I cast a transmutation spell by expending a spell slot, I can empower its effect",
					"I then add my spellcasting ability modifier to the damage or healing I do with that spell"
				])
			}
		}
	}
}

AddSubClass("sidekick-spellcaster", "mage", {
	regExpSearch : /^(?=.*mage)(?=.*sidekick).*$/i,
	subname : "Mage",
	fullname : "Mage (sidekick)",
	source : ["DnDEK", 0],
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
			source : ["DnDEK", 0],
			minlevel : 1,
			description : "\n   I can cast wizard cantrips/spells I know, using Intelligence as my spellcasting ability",
			weaponsAdd : ["Fire Bolt"],
			changeeval : function (lvlA, choiceA) {
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
	source : ["DnDEK", 0],
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
			source : ["DnDEK", 0],
			minlevel : 1,
			description : "\n   I can cast cleric cantrips/spells I know, using Wisdom as my spellcasting ability",
			weaponsAdd : ["Sacred Flame"],
			changeeval : function (lvlA, choiceA) {
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