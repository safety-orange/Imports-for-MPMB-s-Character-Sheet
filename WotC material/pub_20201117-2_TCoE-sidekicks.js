var iFileName = "pub_20201117-2_TCoE-sidekicks.js";
RequiredSheetVersion("13.1.7");
// This file adds the sidekick classes from Tasha's Cauldron of Everything (p142-147) to MPMB's Character Record Sheet

/* - NOTICE -
	These sidekick classes are available as normal classes because the sheet doesn't support classes for the companion page

	These classes are excluded by default so that they aren't confused with normal classes

	The base 1/2 CR creature will have to be added manually
	It would be too complex and messy to add them all as racial options
*/

// Define the source, if it doesn't yet exist
if (!SourceList.T) {
	SourceList.T = {
		name : "Tasha's Cauldron of Everything",
		abbreviation : "TCoE",
		abbreviationSpellsheet : "T",
		group : "Primary Sources",
		url : "https://dnd.wizards.com/products/tashas-cauldron-everything",
		date : "2020/11/17"
	};
}

// Define some functions here, so we an use them for all sidekick classes without duplication
global_TCoE_Sidekick_fn = {
	// prereqeval runs before any of the other class stuff is added, so we can even modify the ClassList object with it to set the HD
	prereqeval : function(v) {
		var sClass = v['class'];
		var sSubclass = v.subclass;
		var sClassOld = CurrentVars.sidekickDialogShown === undefined ? false : CurrentVars.sidekickDialogShown[0];
		// If we already did this function for this (sub)class, stop now
		if (CurrentVars.sidekickDialogShown && CurrentVars.sidekickDialogShown[0] === sClass && (!CurrentVars.sidekickDialogShown[1] || CurrentVars.sidekickDialogShown[1] === sSubclass)) {
			// if no subclass was defined when previously calling this, but now there is one selected, add that to the CurrentVars
			if (!CurrentVars.sidekickDialogShown[1] && sSubclass) {
				CurrentVars.sidekickDialogShown[1] = sSubclass;
				SetStringifieds("vars");
			}
			return true;
		}
		// Tell the player what is about to happen and give an option to opt-out
		var sClassName = ClassList[sClass].name.replace(/\(?sidekick\)?/i, '').trim();
		var warningMsg = {
			nIcon : 3, // Status
			nType : 2, // Yes,No
			cTitle : "Creating a Sidekick Works Differently",
			cMsg : "You are about to create a character with a " + sClassName + " sidekick class. Sidekick classes use the rules as described in Tasha's Cauldron of Everything, page 142. As this character sheet is intended for regular, non-sidekick classes, some changes will be made that you need to be aware off:"
		};
		var lineNo = 1;
		[
			"A sidekick class is added to a creature of CR 1/2 or lower. Before continuing, lookup the stat block of the base creature you would like to use. You will have to manually enter its:"+
				"\n   \u2022 Ability scores"+
				"\n   \u2022 Proficiencies for: skills, saving throws, weapons, armor, languages, and tools"+
				"\n   \u2022 Attacks (tip: use Modifier fields for attacks that aren't weapons/cantrips)"+
				"\n   \u2022 Hit dice (you will be prompted to enter)",
				sClass.indexOf('warrior') !== -1 ? false : 'To gain either the Expert of Spellcaster sidekick class, a creature must have at least one language in its stat block that it can speak.',
			'If you continue, the race and background automation will be turned off and the respective fields emptied. You can use these fields to enter the name and type of the base creature.'+
				'\nFor example. when using the bandit stat block, you could enter:'+
				'\n   \u2022 Race: Elf'+
				'\n   \u2022 Background: Bandit'+
				'\nYou can turn the automation back on with the "Auto/Manual" bookmark.',
			"Sidekicks don't use experience points, but gain levels as the average level of the group goes up. Thus, simply ignore the experience points box and change the level when needed.",
			"Sidekick classes can't multiclass and haven't been tested to work that way."
		].forEach(function (line) {
			if (!line) return;
			warningMsg.cMsg += "\n\n" + lineNo + ". " + line;
			lineNo++;
		});
		warningMsg.cMsg += "\n\n\n>>> Do you want to continue making a sidekick? <<<";
		warningMsg.cMsg += "\n\nIf you select 'No', the " + v.classlevel + " level(s) of this class will be counted towards the total character level, but none of its features will be added.";
		if (app.alert(warningMsg) !== 4) return 'skip';
		// Save that this dialog has been shown
		CurrentVars.sidekickDialogShown = [sClass, sSubclass];
		// Remove race and background, and set them to manual
		global_TCoE_Sidekick_fn.manualRaceBackground();
		// if the sidekick HD is already defined, delete those HD first before applying the new one
		if (CurrentVars.sidekickHD && sClassOld && classes.old[sClassOld]) {
			global_TCoE_Sidekick_fn.eval([classes.old[sClassOld].classlevel, 0], false, false, true);
		};
		// Ask the player to enter the number and type of HD the creature has in its stat block
		CurrentVars.sidekickHD = AskUserOptions(
			"Set Base Creature Hit Dice", // title
			"Enter the number and type of hit dice that the chosen base creature has in its stat block (i.e. without bonuses from sidekick levels).\nThe sidekick will gain 1 extra HD for each level it gains after the first.", // top explanation
			['Number of hit dice, for example "2"', 'Size of the hit dice, for example "d8"'],
			false, true,
			"Be aware that you *can't* change the *size* of the hit die (e.g. d8) at a later time. To do that, you will have to first remove the sidekick class completely.\n\nHowever, you *can* change the *number* of hit dice manually by editing the appropriate field." // bottom explanation
		).map(function (n, idx) {
			var a = n.replace(/.*?(\d+).*/, "$1");
			return !isNaN(a) ? Number(a) : idx === 0 ? 2 : 8;
		});
		ClassList[sClass].die = CurrentVars.sidekickHD[1];
		CurrentClasses[sClass].die = CurrentVars.sidekickHD[1];
		SetStringifieds("vars");
	},
	// Change the race and background to manual or auto
	manualRaceBackground : function(bAuto) {
		if (bAuto && (CurrentVars.manual.background || CurrentVars.manual.race)) {
			// set to automatic
			if (CurrentVars.manual.background) {
				Value("Background", "");
				SetToManual_Dialog.mBac = false;
			}
			if (CurrentVars.manual.race) {
				Value("Race", "");
				SetToManual_Dialog.mRac = false;
			}
			SetToManual_Button(true);
		} else if (!bAuto) {
			// set to manual
			if (CurrentVars.manual.race || CurrentVars.manual.background || CurrentVars.manual.backgroundFeature) {
				// if currently already set to manual, set to auto before emptying the fields
				IsNotImport = false;
				ignorePrereqs = true;
				SetToManual_Dialog.mBac = false;
				SetToManual_Dialog.mBFe = false;
				SetToManual_Dialog.mRac = false;
				SetToManual_Button(true);
				IsNotImport = true;
				ignorePrereqs = false;
			};
			// Remove the race and background
			if (CurrentRace.known) Value("Race", "");
			if (CurrentBackground.known) Value("Background", "");
			// Set race and background to manual
			SetToManual_Dialog.mRac = true;
			SetToManual_Dialog.mBac = true;
			SetToManual_Button(true);
		}
	},
	// When removing a sidekick class, return some stuff to normal
	removeeval : function(lvl) {
		// This could be called after the dialog was shown for another sidekick, so check if there is actually something to do
		var sClass = CurrentVars.sidekickDialogShown ? CurrentVars.sidekickDialogShown[0] : false;
		var sSubclass = CurrentVars.sidekickDialogShown ? CurrentVars.sidekickDialogShown[1] : false;
		if (!sClass || !classes.known[sClass] || classes.known[sClass].level ||
			(classes.old[sClass] && classes.old[sClass].subclass && classes.old[sClass].subclass !== sSubclass)
			) return;
		// Remove the extra sidekickHD and delete it from the CurrentVars
		global_TCoE_Sidekick_fn.eval(lvl, false, false, true);
		delete CurrentVars.sidekickHD;
		delete CurrentVars.sidekickDialogShown;
		SetStringifieds("vars");
		// Reset race and background to auto (if not already)
		global_TCoE_Sidekick_fn.manualRaceBackground(true);
	},
	// After the HD has been set, we still need to enter the bonus HD, if any (this can't be done with the prereqeval)
	eval : function(lvl, chc, undef, bRemove) {
		var hd = CurrentVars.sidekickHD;
		var extraHD = hd[0] - 1;
		if (isNaN(extraHD) || extraHD < 1) return;
		var totalHD = bRemove ? lvl[0] : lvl[1] + extraHD;
		var expectedHD = bRemove ? lvl[0] + extraHD : lvl[1];
		// Add the extra HD to the field
		for (var i = 1; i <= 3; i++) {
			var dieFld = "HD" + i + " Die";
			var lvlFld = "HD" + i + " Level";
			if (What(dieFld) == hd[1] && What(lvlFld) == expectedHD) {
				Value(lvlFld, totalHD);
				CurrentUpdates.types.push("hp");
				break;
			}
		}
	},
	calcChanges_hp : function (totalHD, HDobj) {
		// remove 1st level max (and change its average and fixed value to reflect this change)
		var hd = CurrentVars.sidekickHD[1];
		var matchRegex = RegExp('(\\d+)(d' + hd + ' \\()(\\d+\\.?\\d+?)\\)');
		var match = HDobj.dieStr[1] ? HDobj.dieStr[1].match(matchRegex) : false;
		if (!match) return;
		var hdAverage = hd / 2 + 0.5;
		var hdFixed = Math.ceil(hdAverage);
		HDobj.dieStr.shift();
		HDobj.average += hdAverage - hd;
		HDobj.fixed += hdFixed - hd;
		HDobj.dieStr[0] = HDobj.dieStr[0].replace(matchRegex, (Number(match[1]) + 1) + match[2] + (Number(match[3]) + hdAverage) + ") [sidekicks don't get max for 1st level]");
	},
	spellcasting_additional : levels.map(function (n, idx) {
		var cantr = [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4][idx];
		var splls = [1, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9,10,10,11,11][idx];
		return cantr + " cantrips \u0026 " + splls + " spells known";
	})
}

// Add the three classes
ClassList["sidekick-expert-tcoe"] = {
	defaultExcluded : true,
	prereqeval : global_TCoE_Sidekick_fn.prereqeval,
	regExpSearch : /^(?=.*expert)(?=.*sidekick).*$/i,
	name : "Expert (sidekick)",
	source : [["T", 143]],
	primaryAbility : "Dexterity, Intelligence, or Charisma",
	prereqs : "Can't multiclass",
	improvements : levels.map(function (n) {
		return n < 4 ? 0 : n < 8 ? 1 : n < 10 ? 2 : n < 12 ? 3 : n < 16 ? 4 : n < 19 ? 5 : 6;
	}),
	die : CurrentVars.sidekickHD ? CurrentVars.sidekickHD[1] : 8,
	skillstxt : {
		primary : "Choose any five skills"
	},
	armorProfs : {
		primary : [true, false, false, false]
	},
	equipment : "",
	subclasses : ["", []],
	attacks : [1],
	features : {
		"a sidekick" : {
			name : "A Sidekick",
			source : [["T", 142]],
			minlevel : 1,
			description : desc([
				"A sidekick can be any creature with challenge rating of 1/2 or lower",
				"The Spellcaster and Expert classes can only apply to creatures that can speak a language",
				"Fill out the stats block into the character sheet manually, the class adds to it",
				"The sidekick's level is the same as the average level of the group",
				"The hit dice of a sidekick are the same as those of the base creature, gaining +1 per level",
				"A sidekick does not get the benefits of a background, nor can it take feats or multiclass"
			]),
			calcChanges : {
				hp : global_TCoE_Sidekick_fn.calcChanges_hp
			},
			eval : global_TCoE_Sidekick_fn.eval,
			removeeval : global_TCoE_Sidekick_fn.removeeval
		},
		"bonus proficiencies: saving throws" : {
			name : "Bonus Proficiencies: Saving Throws",
			source : [["T", 143]],
			minlevel : 1,
			description : desc('Choose Dex, Int, or Cha save proficiency, using the "Choose Feature" button above'),
			choices : ["Dexterity", "Intelligence", "Charisma"],
			"dexterity" : {
				name : "Bonus Proficiencies: Dexterity Saving Throws",
				description : desc("I am proficient in Dexterity saving throws"),
				saves : ["Dex"]
			},
			"intelligence" : {
				name : "Bonus Proficiencies: Intelligence Saving Throws",
				description : desc("I am proficient in Intelligence saving throws"),
				saves : ["Int"]
			},
			"charisma" : {
				name : "Bonus Proficiencies: Charisma Saving Throws",
				description : desc("I am proficient in Charisma saving throws"),
				saves : ["Cha"]
			}
		},
		"bonus proficiencies" : {
			name : "Bonus Proficiencies",
			source : [["T", 143]],
			minlevel : 1,
			description : desc([
				"I gain proficiency with light armor and in five skills of my choice",
				'If the base creature is a Humanoid or has a simple or martial weapon in its stat block,',
				'select it using the "Choose Feature" button above, so I gain more bonus proficiencies'
			]),
			choices : ["Base creature is a Humanoid or has a simple or martial weapon in its stat block", "Other base creatures"],
			"base creature is a humanoid or has a simple or martial weapon in its stat block" : {
				name : "Bonus Proficiencies: Humanoid",
				description : desc([
					"I gain proficiency with light armor and in five skills of my choice",
					"Additionally, I gain proficiency with two tools of my choice and with all simple weapons"
				]),
				weaponProfs : [true, false],
				toolProfs : [["Tool of my choice", 2]]
			},
			"other base creatures" : {
				name : "Bonus Proficiencies: Non-humanoid",
				description : desc("I gain proficiency with light armor and in five skills of my choice")
			}
		},
		"helpful" : {
			name : "Helpful",
			source : [["T", 143]],
			minlevel : 1,
			description : desc("I can use a bonus action to take the Help action"),
			action : [["bonus action", ""]]
		},
		"cunning action" : {
			name : "Cunning Action",
			source : [["T", 143]],
			minlevel : 2,
			description : desc("I can use a bonus action to take the Dash, Disengage, or Hide action"),
			action : [["bonus action", ""]]
		},
		"expertise" : function() {
			var a = {
				name : "Expertise",
				source : [["T", 143]],
				minlevel : 3,
				description : desc([
					"I gain expertise with two skills I am proficient with",
					"At level 15th, I gain expertise with two more skills I am proficient with"
				]),
				skillstxt : "Expertise with any two skill proficiencies, two more at level 15th",
				extraname : "Expertise",
				extrachoices : ["Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight of Hand", "Stealth", "Survival"],
				extraTimes : levels.map(function (n) { return n < 3 ? 0 : n < 15 ? 2 : 4; })
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
		"ability score improvement" : {
			name : "Ability Score Improvement",
			source : [["T", 144]],
			minlevel : 4,
			description : desc([
				"Increase one ability score by 2, or two ability scores by 1, up to a maximum of 20",
				"I gain this at 4th level and again at 8th, 10th, 12th, 16th, and 19th level"
			]),
			additional : levels.map(function (n) {
				return n < 4 ? "" : (n < 8 ? 1 : n < 10 ? 2 : n < 12 ? 3 : n < 16 ? 4 : n < 19 ? 5 : 6) + "\xD7 2 points increase";
			})
		},
		"coordinated strike" : {
			name : "Coordinated Strike",
			source : [["T", 144]],
			minlevel : 6,
			description : desc([
				"I can use Helpful to aid an ally to attack a creature up to 30 ft away from me",
				"If I do so, I add +2d6 damage on my next attack to that creature in the current turn"
			])
		},
		"evasion" : {
			name : "Evasion",
			source : [["T", 144]],
			minlevel : 7,
			description : desc([
				"If an effect allows me to make a Dex save for half damage, I take no damage on a success",
				"Also, I only take half damage on a failed save; I can't do this while incapacitated"
			]),
			savetxt : { text : ["Dex save vs. area effects: fail \u2015 half dmg, success \u2015 no dmg"] }
		},
		"inspiring help" : {
			name : "Inspiring Help",
			source : [["T", 144]],
			minlevel : 11,
			description : desc([
				"When I use the Help action, the creature that receives the help adds +1d6 to its d20 roll",
				"If it was an attack roll that hits without the +1d6, it can add it to the damage instead",
				"At 20th level, this bonus increases to 2d6"
			]),
			additional : levels.map(function (n) {
				return n < 11 ? "" : "+" + (n < 20 ? 1 : 2) + "d6 bonus";
			})
		},
		"reliable talent" : {
			name : "Reliable Talent",
			source : [["T", 144]],
			minlevel : 14,
			description : desc("If I make an ability check where I add my proficiency bonus, rolls of 9 or lower are 10")
		},
		"sharp mind" : {
			name : "Sharp Mind",
			source : [["T", 144]],
			minlevel : 18,
			description : desc('Choose Int, Wis, or Cha save proficiency, using the "Choose Feature" button above'),
			choices : ["Intelligence", "Wisdom", "Charisma"],
			"intelligence" : {
				name : "Sharp Mind: Intelligence",
				description : desc("I gain proficiency in Intelligence saving throws"),
				saves : ["Int"],
				prereqeval : function(v) { return tDoc.getField("Int ST Prof").isBoxChecked(0) ? false : true; }
			},
			"wisdom" : {
				name : "Sharp Mind: Wisdom",
				description : desc("I gain proficiency in Wisdom saving throws"),
				saves : ["Wis"],
				prereqeval : function(v) { return tDoc.getField("Wis ST Prof").isBoxChecked(0) ? false : true; }
			},
			"charisma" : {
				name : "Sharp Mind: Charisma",
				description : desc("I gain proficiency in Charisma saving throws"),
				saves : ["Cha"],
				prereqeval : function(v) { return tDoc.getField("Cha ST Prof").isBoxChecked(0) ? false : true; }
			}
		}
	}
}
ClassList["sidekick-spellcaster-tcoe"] = {
	defaultExcluded : true,
	prereqeval : global_TCoE_Sidekick_fn.prereqeval,
	regExpSearch : /^(?=.*(spellcaster|mage|healer|prodigy))(?=.*sidekick).*$/i,
	name : "Spellcaster (sidekick)",
	source : [["T", 144]],
	primaryAbility : "Intelligence, Wisdom, or Charisma",
	prereqs : "Can't multiclass",
	improvements : levels.map(function (n) {
		return n < 4 ? 0 : n < 8 ? 1 : n < 12 ? 2 : n < 16 ? 3 : n < 18 ? 4 : 5;
	}),
	die : CurrentVars.sidekickHD ? CurrentVars.sidekickHD[1] : 8,
	skillstxt : {
		primary : "Choose two from Arcana, History, Insight, Investigation, Medicine, Performance, Persuasion, and Religion"
	},
	armorProfs : {
		primary : [true, false, false, false]
	},
	equipment : "",
	subclasses : ["Spellcaster's Role", []],
	attacks : [1],
	abilitySave : 4,
	spellcastingFactor : 2,
	spellcastingTable : ClassList.artificer && ClassList.artificer.spellcastingTable ? ClassList.artificer.spellcastingTable : [[0, 0, 0, 0, 0, 0, 0, 0, 0]].concat(levels.map(function (n) {
		return defaultSpellTable[Math.ceil(n / 2)];
	})),
	spellcastingList : {
		"class" : "wizard",
		level : [0, 5]
	},
	spellcastingKnown : {
		cantrips : [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
		spells :   [1, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9,10,10,11,11]
	},
	features : {
		"a sidekick" : {
			name : "A Sidekick",
			source : [["T", 142]],
			minlevel : 1,
			description : desc([
				"A sidekick can be any creature with challenge rating of 1/2 or lower",
				"The Spellcaster and Expert classes can only apply to creatures that can speak a language",
				"Fill out the stats block into the character sheet manually, the class adds to it",
				"The sidekick's level is the same as the average level of the group",
				"The hit dice of a sidekick are the same as those of the base creature, gaining +1 per level",
				"A sidekick does not get the benefits of a background, nor can it take feats or multiclass"
			]),
			calcChanges : {
				hp : global_TCoE_Sidekick_fn.calcChanges_hp
			},
			eval : global_TCoE_Sidekick_fn.eval,
			removeeval : global_TCoE_Sidekick_fn.removeeval
		},
		"bonus proficiencies: saving throws" : {
			name : "Bonus Proficiencies: Saving Throws",
			source : [["T", 144]],
			minlevel : 1,
			description : desc('Choose Int, Wis, or Cha save proficiency, using the "Choose Feature" button above'),
			choices : ["Intelligence", "Wisdom", "Charisma"],
			"intelligence" : {
				name : "Bonus Proficiencies: Intelligence Saving Throws",
				description : desc("I am proficient in Intelligence saving throws"),
				saves : ["Int"]
			},
			"wisdom" : {
				name : "Bonus Proficiencies: Wisdom Saving Throws",
				description : desc("I am proficient in Wisdom saving throws"),
				saves : ["Wis"]
			},
			"charisma" : {
				name : "Bonus Proficiencies: Charisma Saving Throws",
				description : desc("I am proficient in Charisma saving throws"),
				saves : ["Cha"]
			}
		},
		"bonus proficiencies" : {
			name : "Bonus Proficiencies",
			source : [["T", 144]],
			minlevel : 1,
			description : desc([
				"I gain proficiency with light armor and two skills of my choice from the following list:",
				"Arcana, History, Insight, Investigation, Medicine, Performance, Persuasion, and Religion",
				'If the base creature is a Humanoid or has a simple or martial weapon in its stat block,',
				'select it using the "Choose Feature" button above, so I gain more bonus proficiencies'
			]),
			choices : ["Base creature is a Humanoid or has a simple or martial weapon in its stat block", "Other base creatures"],
			"base creature is a humanoid or has a simple or martial weapon in its stat block" : {
				name : "Bonus Proficiencies: Humanoid",
				description : desc([
					"I gain proficiency with light armor and two skills of my choice from the following list:",
					"Arcana, History, Insight, Investigation, Medicine, Performance, Persuasion, and Religion",
					"Additionally, I gain proficiency with all simple weapons"
				]),
				weaponProfs : [true, false]
			},
			"other base creatures" : {
				name : "Bonus Proficiencies: Non-humanoid",
				description : desc([
					"I gain proficiency with light armor and two skills of my choice from the following list:",
					"Arcana, History, Insight, Investigation, Medicine, Performance, Persuasion, and Religion"
				])
			}
		},
		"subclassfeature1" : {
			name : "Spellcaster's Role",
			source : [["T", 144]],
			minlevel : 1,
			description : desc('Choose the role of the sidekick, mage, healer, or prodigy, and put it in the "Class" field')
		},
		"ability score improvement" : {
			name : "Ability Score Improvement",
			source : [["T", 146]],
			minlevel : 4,
			description : desc([
				"Increase one ability score by 2, or two ability scores by 1, up to a maximum of 20",
				"I gain this at 4th level and again at 8th, 12th, 16th, and 18th level"
			]),
			additional : levels.map(function (n) {
				return n < 4 ? "" : (n < 8 ? 1 : n < 12 ? 2 : n < 16 ? 3 : n < 18 ? 4 : 5) + "\xD7 2 points increase";
			})
		},
		"potent cantrips" : {
			name : "Potent Cantrips",
			source : [["T", 146]],
			minlevel : 6,
			description : desc("I add my spellcasting ability modifier to the damage I deal with any cantrip"),
			calcChanges : {
				atkCalc : [
					function (fields, v, output) {
						var subclass = classes.known["sidekick-spellcaster-tcoe"].subclass;
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
						var subclass = classes.known["sidekick-spellcaster-tcoe"].subclass;
						if (!subclass || !ClassSubList[subclass].abilitySave || spellObj.psionic || spellObj.level !== 0) return;
						var spAbi = AbilityScores.abbreviations[ClassSubList[subclass].abilitySave - 1];
						var spAbiMod = Number(What(spAbi + ' Mod'));
						if (spAbiMod < 1) return;
						return genericSpellDmgEdit(spellKey, spellObj, "\\w+\\.?", spAbi);
					},
					"My cantrips get my spellcasting ability modifier added to their damage."
				]
			}
		},
		"empowered spells" : {
			name : "Empowered Spells",
			source : [["T", 146]],
			minlevel : 14,
			description : desc([
				'Select one of the eight schools of magic using the "Choose Feature" button above',
				"Whenever I cast a spell from the selected school by expending a spell slot, I empower it",
				"I add my spellcasting ability modifier to the damage or healing I roll for that spell"
			]),
			calcChanges : {
				spellAdd : [
					function (spellKey, spellObj, spName) {
						var subclass = classes.known["sidekick-spellcaster-tcoe"].subclass;
						var spSchool = GetFeatureChoice("classes", "sidekick-spellcaster-tcoe", "empowered spells");
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
						if (genericSpellDmgEdit(spellKey, spellObj, "\\w+\\.?", spAbiMod, true, true) || genericSpellDmgEdit(spellKey, spellObj, "heal", spAbiMod, true, true)) {
							return true;
						}
					},
					"Spells from my selected school cast by expending a spell slot get my spellcasting ability modifier added to their damage or healing rolls."
				]
			},
			choices : ["Abjuration", "Conjuration", "Divination", "Enchantment", "Evocation", "Illusion", "Necromancy", "Transmutation"],
			"abjuration" : {
				name : "Empowered Abjurations",
				description : desc([
					"Whenever I cast an abjuration spell by expending a spell slot, I can empower its effect",
					"I then add my spellcasting ability modifier to the damage or healing I roll for that spell"
				])
			},
			"conjuration" : {
				name : "Empowered Conjurations",
				description : desc([
					"Whenever I cast a conjuration spell by expending a spell slot, I can empower its effect",
					"I then add my spellcasting ability modifier to the damage or healing I roll for that spell"
				])
			},
			"divination" : {
				name : "Empowered Divinations",
				description : desc([
					"Whenever I cast a divination spell by expending a spell slot, I can empower its effect",
					"I then add my spellcasting ability modifier to the damage or healing I roll for that spell"
				])
			},
			"enchantment" : {
				name : "Empowered Enchantments",
				description : desc([
					"Whenever I cast a enchantment spell by expending a spell slot, I can empower its effect",
					"I then add my spellcasting ability modifier to the damage or healing I roll for that spell"
				])
			},
			"evocation" : {
				name : "Empowered Evocations",
				description : desc([
					"Whenever I cast a evocation spell by expending a spell slot, I can empower its effect",
					"I then add my spellcasting ability modifier to the damage or healing I roll for that spell"
				])
			},
			"illusion" : {
				name : "Empowered Illusions",
				description : desc([
					"Whenever I cast an illusion spell by expending a spell slot, I can empower its effect",
					"I then add my spellcasting ability modifier to the damage or healing I roll for that spell"
				])
			},
			"necromancy" : {
				name : "Empowered Necromancy",
				description : desc([
					"Whenever I cast a necromancy spell by expending a spell slot, I can empower its effect",
					"I then add my spellcasting ability modifier to the damage or healing I roll for that spell"
				])
			},
			"transmutation" : {
				name : "Empowered Transmutations",
				description : desc([
					"Whenever I cast a transmutation spell by expending a spell slot, I can empower its effect",
					"I then add my spellcasting ability modifier to the damage or healing I roll for that spell"
				])
			}
		},
		"focused casting" : {
			name : "Focused Casting",
			source : [["T", 146]],
			minlevel : 20,
			description : desc("Taking damage can't break my concentration on a spell")
		}
	}
}
ClassList["sidekick-warrior-tcoe"] = {
	defaultExcluded : true,
	prereqeval : global_TCoE_Sidekick_fn.prereqeval,
	regExpSearch : /^(?=.*warrior)(?=.*sidekick).*$/i,
	name : "Warrior (sidekick)",
	source : [["T", 146]],
	primaryAbility : "Strength, Dexterity, or Constitution",
	prereqs : "Can't multiclass",
	improvements : levels.map(function (n) {
		return n < 4 ? 0 : n < 8 ? 1 : n < 12 ? 2 : n < 14 ? 3 : n < 16 ? 4 : n < 19 ? 5 : 6;
	}),
	die : CurrentVars.sidekickHD ? CurrentVars.sidekickHD[1] : 8,
	skillstxt : {
		primary : "Choose two from Acrobatics, Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival"
	},
	armorProfs : {
		primary : [true, true, true, false]
	},
	equipment : "",
	subclasses : ["", []],
	attacks : [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3],
	features : {
		"a sidekick" : {
			name : "A Sidekick",
			source : [["T", 142]],
			minlevel : 1,
			description : desc([
				"A sidekick can be any creature with challenge rating of 1/2 or lower",
				"Fill out the stats block into the character sheet manually, the class adds to it",
				"The sidekick's level is the same as the average level of the group",
				"The hit dice of a sidekick are the same as those of the base creature, gaining +1 per level",
				"A sidekick does not get the benefits of a background, nor can it take feats or multiclass"
			]),
			calcChanges : {
				hp : global_TCoE_Sidekick_fn.calcChanges_hp
			},
			eval : global_TCoE_Sidekick_fn.eval,
			removeeval : global_TCoE_Sidekick_fn.removeeval
		},
		"bonus proficiencies: saving throws" : {
			name : "Bonus Proficiencies: Saving Throws",
			source : [["T", 146]],
			minlevel : 1,
			description : desc('Choose Str, Dex, or Con save proficiency, using the "Choose Feature" button above'),
			choices : ["Strength", "Dexterity", "Constitution"],
			"strength" : {
				name : "Bonus Proficiencies: Strength Saving Throws",
				description : desc("I am proficient in Strength saving throws"),
				saves : ["Str"]
			},
			"dexterity" : {
				name : "Bonus Proficiencies: Dexterity Saving Throws",
				description : desc("I am proficient in Dexterity saving throws"),
				saves : ["Dex"]
			},
			"constitution" : {
				name : "Bonus Proficiencies: Constitution Saving Throws",
				description : desc("I am proficient in Constitution saving throws"),
				saves : ["Con"]
			}
		},
		"bonus proficiencies" : {
			name : "Bonus Proficiencies",
			source : [["T", 146]],
			minlevel : 1,
			description : desc([
				"I gain proficiency with all armor and two skills of my choice from the following list:",
				"Acrobatics, Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival",
				'If the base creature is a Humanoid or has a simple or martial weapon in its stat block,',
				'select it using the "Choose Feature" button above, so I gain more bonus proficiencies'
			]),
			choices : ["Base creature is a Humanoid or has a simple or martial weapon in its stat block", "Other base creatures"],
			"base creature is a humanoid or has a simple or martial weapon in its stat block" : {
				name : "Bonus Proficiencies: Humanoid",
				description : desc([
					"I gain proficiency with all armor and two skills of my choice from the following list:",
					"Acrobatics, Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival",
					"Additionally, I gain proficiency with shields and all simple and martial weapons"
				]),
				armorProfs : [false, false, false, true],
				weaponProfs : [true, true]
			},
			"other base creatures" : {
				name : "Bonus Proficiencies: Non-humanoid",
				description : desc([
					"I gain proficiency with all armor and two skills of my choice from the following list:",
					"Acrobatics, Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival"
				])
			}
		},
		"martial role" : {
			name : "Martial Role",
			source : [["T", 146]],
			minlevel : 1,
			description : desc('Choose a Martial Role for the warrior using the "Choose Feature" button above'),
			choices : ["Attacker", "Defender"],
			"attacker" : {
				name : "Martial Role: Attacker",
				description : desc("I gain a +2 bonus to all my attack rolls"),
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
				action : [["reaction", ""]]
			}
		},
		"second wind" : {
			name : "Second Wind",
			source : [["T", 146]],
			minlevel : 2,
			description : desc([
				"As a bonus action, I can regain hit points equal to 1d10 + warrior level",
				"I can use this once per short rest (twice at 20th-level)"
			]),
			additional : levels.map(function (n) {
				return "1d10+" + n;
			}),
			usages : levels.map(function (n) { return n < 2 ? "" : n < 20 ? 1 : 2 }),
			recovery : "short rest",
			action : [["bonus action", ""]]
		},
		"improved critical" : {
			name : "Improved Critical",
			source : [["T", 146]],
			minlevel : 3,
			description : desc("I score a critical hit with my weapon attacks on a roll of 19 and 20"),
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
		},
		"ability score improvement" : {
			name : "Ability Score Improvement",
			source : [["T", 146]],
			minlevel : 4,
			description : desc([
				"Increase one ability score by 2, or two ability scores by 1, up to a maximum of 20",
				"I gain this at 4th level and again at 8th, 12th, 14th, 16th, and 19th level"
			]),
			additional : levels.map(function (n) {
				return n < 4 ? "" : (n < 8 ? 1 : n < 12 ? 2 : n < 14 ? 3 : n < 16 ? 4 : n < 19 ? 5 : 6) + "\xD7 2 points increase";
			})
		},
		"extra attack" : {
			name : "Extra Attack",
			source : [["T", 147]],
			minlevel : 6,
			description : desc([
				"I can attack twice, instead of once, whenever I take the Attack action on my turn",
				"This increases to three at 15th level",
				"If I have the Multiattack action, I can use either that or extra attack on a turn, not both"
			]),
			additional : levels.map(function (n) {
				return n < 6 ? "" : (n < 15 ? 1 : 3) + " attacks as an action on my turn";
			})
		},
		"battle readiness" : {
			name : "Battle Readiness",
			source : [["T", 147]],
			minlevel : 7,
			description : desc("I have advantage on my Initiative rolls"),
			advantages : [["Initiative", true]]
		},
		"improved defense" : {
			name : "Improved Defense",
			source : [["T", 147]],
			minlevel : 10,
			description : desc("I gain a +1 bonus to AC"),
			extraAC : { mod : 1 }
		},
		"indomitable" : {
			name : "Indomitable",
			source : [["T", 147]],
			minlevel : 11,
			description : desc([
				"I can reroll a failed saving throw, but must keep the new result",
				"I can use this once per long rest (twice at 20th-level)"
			]),
			usages : levels.map(function (n) { return n < 11 ? "" : n < 20 ? 1 : 2 }),
			recovery : "long rest"
		}
	}
}

// Add three subclasses to the spellcaster sidekick
AddSubClass("sidekick-spellcaster-tcoe", "mage", {
	regExpSearch : /^(?=.*mage)(?=.*sidekick).*$/i,
	subname : "Mage",
	fullname : "Spellcaster: Mage (sidekick)",
	source : [["T", 144]],
	abilitySave : 4,
	spellcastingList : {
		"class" : "wizard",
		level : [0, 5]
	},
	features : {
		"subclassfeature1" : {
			name : "Spellcasting",
			source : [["T", 144]],
			minlevel : 1,
			description : desc([
				"I can cast wizard cantrips/spells I know, using Intelligence as my spellcasting ability",
				"I can use an arcane focus as a spellcasting focus for my spells",
				"Whenever I gain a level, I can replace one cantrip/spell I know with another I'm allowed"
			]),
			additional : global_TCoE_Sidekick_fn.spellcasting_additional
		}
	}
});
AddSubClass("sidekick-spellcaster-tcoe", "healer", {
	regExpSearch : /^(?=.*healer)(?=.*sidekick).*$/i,
	subname : "Healer",
	fullname : "Spellcaster: Healer (sidekick)",
	source : [["T", 144]],
	abilitySave : 5,
	spellcastingList : {
		"class" : ["cleric", "druid"],
		level : [0, 5]
	},
	features : {
		"subclassfeature1" : {
			name : "Spellcasting",
			source : [["T", 144]],
			minlevel : 1,
			description : desc([
				"I can cast cleric and druid cantrips/spells I know, using Wisdom as my spellcasting ability",
				"I can use a holy symbol or druidic focus as a spellcasting focus for my spells",
				"Whenever I gain a level, I can replace one cantrip/spell I know with another I'm allowed"
			]),
			additional : global_TCoE_Sidekick_fn.spellcasting_additional
		}
	}
});
AddSubClass("sidekick-spellcaster-tcoe", "prodigy", {
	regExpSearch : /^(?=.*prodigy)(?=.*sidekick).*$/i,
	subname : "Prodigy",
	fullname : "Spellcaster: Prodigy (sidekick)",
	source : [["T", 144]],
	abilitySave : 6,
	spellcastingList : {
		"class" : ["bard", "warlock"],
		level : [0, 5]
	},
	features : {
		"subclassfeature1" : {
			name : "Spellcasting",
			source : [["T", 144]],
			minlevel : 1,
			description : desc([
				"I can cast bard and warlock cantrips/spells I know, using Cha as my spellcasting ability",
				"I can use an arcane focus or musical instrument as a spellcasting focus for my spells",
				"Whenever I gain a level, I can replace one cantrip/spell I know with another I'm allowed"
			]),
			additional : global_TCoE_Sidekick_fn.spellcasting_additional
		}
	}
});
