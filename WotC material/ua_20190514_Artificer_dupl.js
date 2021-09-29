var iFileName = "ua_20190514_Artificer.js";
RequiredSheetVersion("13.0.8");
// This file adds the content from the second Unearthed Arcana: Artificer article of 2019 to MPMB's Character Record Sheet
// It doesn't change anything compared to the UA article of 2019/02/28, but adds additional options: more spells, subclasses, and magic items

// Define the source
SourceList["UA:A3"] = {
	name : "Unearthed Arcana: Artificer 2019v2",
	abbreviation : "UA:A3",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2019/dnd/downloads/UA-Artificer2-2019.pdf",
	date : "2019/05/14"
};

// Adds a new class, the Artificer, with 4 subclasses
ClassList['artificer-ua3'] = {
	regExpSearch : /^(?=.*artificer)(?!.*wizard).*$/i,
	name : "Artificer",
	source : ["UA:A3", 1],
	primaryAbility : "Intelligence",
	abilitySave : 4,
	prereqs : "Intelligence 13",
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	die : 8,
	saves : ["Con", "Int"],
	skillstxt : {
		primary : "Choose two from Arcana, History, Investigation, Medicine, Nature, Perception, and Sleight of Hand"
	},
	toolProfs : {
		primary : [["Thieves' tools", "Dex"], "Tinker's tools", ["Artisan's tools", 1]],
		secondary : [["Thieves' tools", "Dex"], "Tinker's tools"]
	},
	armorProfs : {
		primary : [true, true, false, true],
		secondary : [true, true, false, true]
	},
	weaponProfs : {
		primary : [true, false, ["hand crossbow", "heavy crossbow"]]
	},
	equipment : "Artificer starting equipment:" +
		"\n \u2022 Any two simple weapons;" +
		"\n \u2022 A light crossbow and 20 bolts;" +
		"\n \u2022 Studded leather armor -or- scale mail;" +
		"\n \u2022 Thieves' tools and a dungeoneer's pack;" +
		"\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses : ["Artificer Specialist", []],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	spellcastingFactor : 2,
	spellcastingFactorRoundupMulti : true, // 2019v2
	spellcastingTable : [[0, 0, 0, 0, 0, 0, 0, 0, 0]].concat(levels.map(function (n) {
		return defaultSpellTable[Math.ceil(n / 2)];
	})),
	spellcastingKnown : {
		cantrips : [2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4],
		spells : "list",
		prepared : true
	},
	features : {
		"magical tinkering" : {
			name : "Magical Tinkering",
			source : ["UA:A3", 2],
			minlevel : 1,
			description : desc([
				"As an action, I use thieves' or an artisan's tools to give max 1 property to a tiny object:",
				" \u2022 Emit light (5-ft radius bright light, equal dim light), an odor, or a nonverbal sound",
				" \u2022 Static visual effect on one of its surfaces; picture, 25 words, shapes, or a mix of those",
				"If I instill a property in more objects than I can have active, the oldest loses its property"
			]),
			additional : "Intelligence modifier of active objects",
			action : [["action", " (add/remove)"]],
			extraname : "Artificer 2",
			"infuse item" : {
				name : "Infuse Item",
				source : ["UA:A3", 5],
				description : desc([
					"When I finish a long rest, I can turn nonmagical objects into magic items using my infusions",
					"I can attune to it immediately; If I infuse too many items, the oldest loses its magic",
					"The infusion lasts until my death + my Int mod in days, but ends if I unlearn the infusion",
					"Each infusion can only be used in one item at a time and only in appropriate items",
					"I can use an infused item as a spellcasting focus"
				]),
				additional : levels.map(function (n) {
					return n < 2 ? "" : (n < 4 ? 3 : n < 7 ? 4 : n < 11 ? 5 : n < 15 ? 6 : n < 19 ? 7 : 8) + " infusions known; max " + (n < 6 ? 2 : n < 11 ? 3 : n < 16 ? 4 : 5) + " infused items";
				})
			},
			autoSelectExtrachoices : [{
				extrachoice : "infuse item",
				minlevel : 2
			}]
		},
		"spellcasting" : {
			name : "Spellcasting",
			source : ["UA:A3", 3],
			minlevel : 1,
			description : desc([
				"I can cast prepared artificer cantrips/spells, using Intelligence as my spellcasting ability",
				"To cast, I must use thieves' or artisan's tools I'm proficient with as a spellcasting focus",
				"I can cast my prepared artificer spells as rituals if they have the ritual tag",
				"Whenever I gain an artificer level, I can swap one artificer cantrip I know for another"
			]),
			additional : levels.map(function (n, idx) {
				return [2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4][idx] + " cantrips known";
			}),
			calcChanges : {
				spellAdd : [
					function (spellKey, spellObj, spName) {
						if (!spellObj.psionic && spName == "artificer-ua3") {
							spellObj.compMaterial = (spellObj.compMaterial ? spellObj.compMaterial + "; " : "") + "My artificer spellcasting focus: thieves' tools, artisan's tools I'm proficient with, " + (classes.known["artificer-ua3"].subclass.indexOf("artillerist") !== -1 ? "rod, staff, wand, " : "") + "or an item infused by me.";
							if (GetFeatureChoice("classes", "artificer-ua3", "spellcasting", true).indexOf("don't change component column on spell sheet") != -1) {
								// do nothing if set to do so
							} else if (!spellObj.components) {
								spellObj.components = "M\u0192";
							} else if (spellObj.components.indexOf("M") == -1) {
								spellObj.components += ",M\u0192";
							} else if ((/M([^\u0192\u2020]|$)/).test(spellObj.components)) {
								spellObj.components = spellObj.components.replace("M", "M\u0192");
							}
							return true;
						}
					},
					"My artificer spells always require me to use a spellcasting focus: thieves' tools, artisan's tools I'm proficient with, or an item infused by me."
				]
			},
			extrachoices : ["Don't change component column on spell sheet"],
			extraname : "Artificer Spellcasting",
			"don't change component column on spell sheet" : {
				name : "[Meta] Don't alter spell sheets",
				source : ["UA:A3", 3],
				description : "\n   The automation will not add M\u0192 to each artificer spell on the generated spell sheets"
			}
		},
		"infuse item" : {
			name : "Infuse Item",
			source : ["UA:A3", 5],
			minlevel : 2,
			description : desc([
				"Use the \"Choose Feature\" button above to add Artificer Infusions to the third page",
				"Whenever I gain an artificer level, I can replace an infusion I know with another"
			]),
			additional : levels.map(function (n) {
				return n < 2 ? "" : (n < 4 ? 3 : n < 7 ? 4 : n < 11 ? 5 : n < 15 ? 6 : n < 19 ? 7 : 8) + " infusions known; max " + (n < 6 ? 2 : n < 11 ? 3 : n < 16 ? 4 : 5) + " infused items";
			}),
			extraname : "Artificer Infusion",
			extrachoices : ["Boots of the Winding Path (prereq: level 4 artificer)", "Enhanced Defense", "Enhanced Weapon", "Enhanced Wand", "Many-Handed Pouch (prereq: level 4 artificer)", "Radiant Weapon (prereq: level 8 artificer)", "Repeating Shot", "Repulsion Shield (prereq: level 8 artificer)", "Resistant Armor (prereq: level 8 artificer)", "Returning Weapon"],
			extraTimes : levels.map(function (n) {
				return n < 2 ? 0 : n < 4 ? 3 : n < 7 ? 4 : n < 11 ? 5 : n < 15 ? 6 : n < 19 ? 7 : 8;
			}),
			"boots of the winding path (prereq: level 4 artificer)" : {
				name : "Boots of the Winding Path",
				source : ["UA:A3", 12],
				description : desc([
					"The wearer can use a bonus action to teleport up to 15 ft to an unoccupied space it can see",
					"It must be a space that the wearer had occupied some time during the current turn"
				]),
				additional : "pair of boots; requires attunement",
				prereqeval : function(v) { return classes.known["artificer-ua3"].level >= 4; },
				eval : function (lvl, chc) { AddMagicItem("Boots of the Winding Path"); },
				removeeval : function (lvl, chc) {
					var loc = CurrentMagicItems.known.indexOf("boots of the winding path");
					if (loc == -1) return;
					MagicItemClear(loc + 1, true);
				}
			},
			"enhanced defense" : {
				name : "Enhanced Defense",
				source : ["UA:A3", 12],
				description : "",
				additional : levels.map(function (n) {
					return "armor/shield; +" + (n < 12 ? 1 : 2) + " magical";
				}),
				eval : function (lvl, chc) {
					AddMagicItem("Armor +" + (classes.known["artificer-ua3"].level < 12 ? 1 : 2));
				},
				removeeval : function (lvl, chc) {
					var loc = CurrentMagicItems.known.indexOf("armor, +1, +2, or +3");
					if (loc == -1) return;
					MagicItemClear(loc + 1, true);
				}
			},
			"enhanced wand" : { // 2019v2
				name : "Enhanced Wand",
				source : ["UA:A3", 12],
				description : "",
				additional : levels.map(function (n) {
					return "Wand of the War Mage +" + (n < 12 ? 1 : 2) + " magical";
				}),
				eval : function (lvl, chc) {
					AddMagicItem("Wand of the War Mage +" + (classes.known["artificer-ua3"].level < 12 ? 1 : 2));
				},
				removeeval : function (lvl, chc) {
					var loc = CurrentMagicItems.known.indexOf("wand of the war mage, +1, +2, or +3");
					if (loc == -1) return;
					MagicItemClear(loc + 1, true);
				}
			},
			"enhanced weapon" : {
				name : "Enhanced Weapon",
				source : ["UA:A3", 12],
				description : "",
				additional : levels.map(function (n) {
					return "simple/martial weapon; +" + (n < 12 ? 1 : 2) + " magical";
				}),
				eval : function (lvl, chc) {
					AddMagicItem("Weapon +" + (classes.known["artificer-ua3"].level < 12 ? 1 : 2));
				},
				removeeval : function (lvl, chc) {
					var loc = CurrentMagicItems.known.indexOf("weapon, +1, +2, or +3");
					if (loc == -1) return;
					MagicItemClear(loc + 1, true);
				}
			},
			"many-handed pouch (prereq: level 4 artificer)" : {
				name : "Many-Handed Pouch",
				source : ["UA:A3", 13],
				description : desc([
					"The infused pouches all share one interdimensional space the size of a single pouch",
					"Thus, reaching into any of the pouches allows access to the same storage space",
					"A pouch only functions if it is within 100 miles of another infused pouch",
					"When the infusion ends, the contents is moved to one of the pouches, chosen randomly"
				]),
				additional : "2-5 pouches",
				prereqeval : function(v) { return classes.known["artificer-ua3"].level >= 4; },
				eval : function (lvl, chc) { AddMagicItem("Many-Handed Pouch"); },
				removeeval : function (lvl, chc) {
					var loc = CurrentMagicItems.known.indexOf("many-handed pouch");
					if (loc == -1) return;
					MagicItemClear(loc + 1, true);
				}
			},
			"radiant weapon (prereq: level 8 artificer)" : {
				name : "Radiant Weapon",
				source : ["UA:A3", 13],
				description : desc([
					"The weapon has a +1 bonus to attack and damage rolls made with it and it sheds light",
					"As a bonus action, its wielder can start/stop the light, 30-ft radius bright + 30 ft dim light",
					"Once per short rest as a reaction after being hit in melee, the wielder can blind its attacker",
					"The attack must succeed on a Con save (spell save DC) or be blinded until its next turn ends"
				]),
				additional : "simple/martial weapon; requires attunement",
				prereqeval : function(v) { return classes.known["artificer-ua3"].level >= 8; },
				eval : function (lvl, chc) { AddMagicItem("Radiant Weapon"); },
				removeeval : function (lvl, chc) {
					var loc = CurrentMagicItems.known.indexOf("radiant weapon") != -1 ? CurrentMagicItems.known.indexOf("radiant weapon") : CurrentMagicItems.known.indexOf("radiant weapon-ua");
					if (loc == -1) return;
					MagicItemClear(loc + 1, true);
				}
			},
			"repeating shot" : { // 2019v2
				name : "Repeating Shot",
				source : ["UA:A3", 13],
				description : desc([
					"The weapon requiring ammunition has a +1 bonus to attack and damage rolls made with it",
					"It magically produces one piece of ammunition whenever it is used to make a ranged attack",
					"Thus, it doesn't require ammunition and ignores the loading property if it has it"
				]),
				additional : "weapon with ammo; requires attunement",
				eval : function (lvl, chc) { AddMagicItem("Repeating Shot"); },
				removeeval : function (lvl, chc) {
					var loc = CurrentMagicItems.known.indexOf("repeating shot");
					if (loc == -1) return;
					MagicItemClear(loc + 1, true);
				}
			},
			"repulsion shield (prereq: level 8 artificer)" : { // 2019v2
				name : "Repulsion Shield",
				source : ["UA:A3", 14],
				description : desc([
					"The shield gives its wearer an additional +1 bonus to AC",
					"As a reaction when hit by a melee attack, the wearer can push their attacker up to 15 ft",
					"This reaction can only be used once per short or long rest"
				]),
				additional : "shield; requires attunement",
				prereqeval : function(v) { return classes.known["artificer-ua3"].level >= 8; },
				eval : function (lvl, chc) { AddMagicItem("Repulsion Shield"); },
				removeeval : function (lvl, chc) {
					var loc = CurrentMagicItems.known.indexOf("repulsion shield") != -1 ? CurrentMagicItems.known.indexOf("repulsion shield") : CurrentMagicItems.known.indexOf("repulsion shield-ua");
					if (loc == -1) return;
					MagicItemClear(loc + 1, true);
				}
			},
			"resistant armor (prereq: level 8 artificer)" : {
				name : "Resistant Armor",
				source : ["UA:A3", 14],
				description : desc([
					"The armor gives its wearer resistance to one type of damage, chosen at the time of infusion",
					"Choose from: acid,	cold, fire, force, lightning, necrotic, poison, psychic, radiant, or thunder"
				]),
				additional : "suit of armor; requires attunement",
				prereqeval : function(v) { return classes.known["artificer-ua3"].level >= 8; },
				eval : function (lvl, chc) { AddMagicItem("Armor of Resistance"); },
				removeeval : function (lvl, chc) {
					var loc = CurrentMagicItems.known.indexOf("armor of resistance");
					if (loc == -1) return;
					MagicItemClear(loc + 1, true);
				}
			},
			"returning weapon" : {
				name : "Returning Weapon",
				source : ["UA:A3", 14],
				description : "After being used for a ranged attack, the weapon returns immediately; +1 magical bonus",
				additional : "simple/martial weapon with the thrown property",
				eval : function (lvl, chc) { AddMagicItem("Returning Weapon"); },
				removeeval : function (lvl, chc) {
					var loc = CurrentMagicItems.known.indexOf("returning weapon");
					if (loc == -1) return;
					MagicItemClear(loc + 1, true);
				}
			}
		},
		"tool expertise" : {
			name : "Tool Expertise",
			source : ["UA:A3", 5],
			minlevel : 3,
			description : " [expertise with all tools I am proficient with]",
			skillstxt : "expertise with all tools I am proficient with",
			eval : function () { Checkbox('Too Exp', true); },
			removeeval : function () { Checkbox('Too Exp', false); }
		},
		"subclassfeature3" : {
			name : "Artificer Specialist",
			source : ["UA:A3", 5],
			minlevel : 3,
			description : desc([
				'Choose a specialism and put it in the "Class" field on the first page',
				"Choose either alchemist, archivist, artillerist, or battle smith"
			])
		},
		"arcane armament" : {
			name : "Arcane Armament",
			source : ["UA:A3", 6],
			minlevel : 5,
			description : " [as Extra Attack, but only with magic weapon]"
		},
		"the right cantrip for the job" : {
			name : "The Right Cantrip for the Job",
			source : ["UA:A3", 6],
			minlevel : 10,
			description : "\n   " + "Whenever I finish a short/long rest, I can swap one of my artificer cantrips for another"
		},
		"spell-storing item" : {
			name : "Spell-Storing Item",
			source : ["UA:A3", 6],
			minlevel : 18,
			description : desc([
				"When I finish a long rest, I can infuse a 1st-/2nd-level artificer spell into an item I touch",
				"It must be a simple or martial weapon, or something I can use as a spellcasting focus",
				"The spell must have a casting time of 1 action, but I need not have it prepared",
				"A creature holding an infused item can use an action to cast the spell, using my abilities",
				"The item can produce the spell a number of times equal to twice my Int mod (min 2)"
			])
		},
		"soul of artifice" : {
			name : "Soul of Artifice",
			source : ["UA:A3", 6],
			minlevel : 20,
			description : " [+1 on all saves per attuned magic item (max 6)]",
			savetxt : {
				text : ["+1 to all saves per attuned magic item"]
			}
		}
	},
	artificerCompFunc : {
		add : function (compName) {
			var AScompA = isTemplVis('AScomp') ? What('Template.extras.AScomp').split(',') : false;
			var prefix = false;
			if (AScompA) {
				for (var a = 1; a < AScompA.length; a++) {
					if (!What(AScompA[a] + 'Comp.Race')) {
						prefix = AScompA[a];
						break;
					}
				}
			}
			if (!prefix) prefix = DoTemplate('AScomp', 'Add');
			Value(prefix + 'Comp.Race', compName);
			Value(prefix + 'Comp.Type', "Construct");
			var changeMsg = "The " + compName + " has been added to the companion page at page number " + (tDoc.getField(prefix + 'Comp.Race').page + 1);
			CurrentUpdates.types.push("notes");
			if (!CurrentUpdates.notesChanges) {
				CurrentUpdates.notesChanges = [changeMsg];
			} else {
				CurrentUpdates.notesChanges.push(changeMsg);
			}
			return prefix;
		},
		remove : function (compName) {
			var AScompA = isTemplVis('AScomp') ? What('Template.extras.AScomp').split(',') : false;
			if (!AScompA) return;
			compName = compName.toLowerCase();
			for (var a = 1; a < AScompA.length; a++) {
				if (What(AScompA[a] + 'Comp.Race').toLowerCase().indexOf(compName) !== -1) {
					DoTemplate("AScomp", "Remove", AScompA[a], true);
				}
			}
		},
		update : function (compName, newHP, newProf) {
			var AScompA = isTemplVis('AScomp') ? What('Template.extras.AScomp').split(',') : false;
			var prefixes = [];
			if (!AScompA) return prefixes;
			compName = compName.toLowerCase();
			for (var a = 1; a < AScompA.length; a++) {
				if (What(AScompA[a] + 'Comp.Race').toLowerCase().indexOf(compName) !== -1) {
					if (newHP !== undefined) Value(AScompA[a] + "Comp.Use.HP.Max", newHP);
					if (newProf !== undefined) Value(AScompA[a] + "Comp.Use.Proficiency Bonus", newProf);
					prefixes.push(AScompA[a]);
				}
			}
			return prefixes;
		}
	}
};

// Add the Alchemist specialism
AddSubClass("artificer-ua3", "alchemist", {
	regExpSearch : /^(?=.*alchemist)(?!.*wizard).*$/i,
	subname : "Alchemist",
	fullname : "Alchemist",
	source : ["UA:A3", 6],
	features : {
		"subclassfeature3" : {
			name : "Tools of the Trade",
			source : ["UA:A3", 6],
			minlevel : 3,
			description : "\n   I can craft magical potions for half the usual gold and in a quarter of the usual time",
			additional : "alchemist's and herbalism kit proficiency",
			toolProfs : ["Alchemist's supplies", "Herbalism kit"],
			eval : function () {
				AddToInv("gear", "l", "Alchemist's supplies", "", 8);
				AddToInv("gear", "l", "Herbalism kit", "", 3);
			},
			spellcastingExtra : ["purify food and drink", "ray of sickness", "melf's acid arrow", "web", "create food and water", "stinking cloud", "blight", "death ward", "cloudkill", "raise dead"]
		},
		"subclassfeature3.1" : {
			name : "Alchemical Homunculus",
			source : ["UA:A3", 6],
			minlevel : 3,
			description : desc([
				"When I end a long rest, I can use alchemist's supplies to create an alchemical homunculus",
				"I determine its appearance; I can have only 1 at a time, making a new one kills the older",
				"It obeys my commands, is friendly to my allies and I, and acts on my initiative, after me",
				"Unless I use a bonus action to command it, it only takes the Dodge action on its turn",
				"It can only do acidic spittle, alchemical salve, or take the Dash, Disengage, or Help action",
				"Its HP maximum is equal to five times my artificer level + my Intelligence modifier",
				"If it dies, I can, as an action within the hour, spend a spell slot to restore it to its full HP"
			]),
			action : [["action", " (restore)"], ["bonus action", " (command)"]],
			eval : function () {
				var prefix = ClassList['artificer-ua3'].artificerCompFunc.add("Alchemical Homunculus");
				AddSkillProf("Perception", true, false, false, 2, prefix);
			},
			removeeval : function () {
				ClassList['artificer-ua3'].artificerCompFunc.remove("alchemical homunculus");
			},
			changeeval : function (lvlA) {
				var newProf = ProficiencyBonusList[classes.totallevel - 1];
				var newHP = Math.round(lvlA[1] * 5 + What("Int Mod"));
				ClassList['artificer-ua3'].artificerCompFunc.update("alchemical homunculus", newHP, newProf);
			}
		},
		"subclassfeature6" : {
			name : "Alchemical Mastery",
			source : ["UA:A3", 7],
			minlevel : 6,
			description : desc([
				"I can enhance the spell I cast when I use alchemist's supplies as my spellcasting focus",
				"I then add my Int mod to one die roll for dealing acid or poison damage, or restoring HP"
			]),
			calcChanges : {
				atkCalc : [
					function (fields, v, output) {
						if (v.thisWeapon[3] && v.thisWeapon[4].indexOf("artificer-ua3") !== -1 && (/poison|acid/i).test(fields.Damage_Type)) {
							output.extraDmg += Math.max(Number(What("Int Mod")), 1);
						}
					},
					"Artificer spells that deal poison or acid damage which I cast while using alchemist's supplies as my spellcasting focus, have my Intelligence modifier (min 1) added to one damage die roll."
				],
				spellAdd : [
					function (spellKey, spellObj, spName) {
						if (spellObj.psionic || spName !== "artificer" || (/color spray|sleep/).test(spellKey)) return;
						var startDescr = spellObj.description;
						var toAdd = Math.max(Number(What("Int Mod")), 1);
						if ((/healing spirit|aura of vitality/i).test(spellKey)) {
							spellObj.description += " (+" + toAdd + " once)";
							return true;
						} else if (genericSpellDmgEdit(spellKey, spellObj, "acid|poison", toAdd < 2 ? 1 : "Int", true, true)) {
							return true;
						} else {
							// other healing spells
							var testRegex = /(.*?\d+d\d+)(\+\d+)?((\+\d+d?\d*\/\d?SL)?(\+spell(casting)? (ability )?mod(ifier)?|(\+|-)\d+ \(.{3}\))? hp.*)/i;
							var theMatch = spellObj.description.match(testRegex);
							if (!theMatch) return false;
							if (theMatch[2]) {
								var theMid = Number(theMatch[2]) + toAdd;
								if (theMid > -1) theMid = "+" + theMid;
							} else {
								var theMid = "+" + toAdd;
							}
							spellObj.description = spellObj.description.replace(testRegex, "$1" + theMid + "$3");
						}
						return startDescr !== spellObj.description;
					},
					"Artificer spells I cast using alchemist's supplies as my spellcasting focus, have my Intelligence modifier (min 1) added to one die rolled for healing, poison damage, or acid damage."
				]
			}
		},
		"subclassfeature6.1" : {
			name : "Alchemical Mastery: Lesser Restoration",
			source : ["UA:A3", 7],
			minlevel : 6,
			description : "\n   I can cast Lesser Restoration without a spell slot if I use alchemist's supplies as a focus",
			usages : "Int mod per ",
			recovery : "long rest",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));",
			spellcastingBonus : {
				name : "Alchemical Mastery",
				spells : ["lesser restoration"],
				selection : ["lesser restoration"],
				firstCol : "Sp"
			},
			spellChanges : {
				"lesser restoration" : {
					components : "V,S,M\u0192",
					compMaterial : "Alchemist's supplies",
					changes : "When using my Alchemical Mastery class feature, I can cast Lesser Restoration a number of times per long rest equal to my Intelligence modifier. To do so, I have to use alchemist's supplies as my spellcasting focus"
				}
			}
		},
		"subclassfeature14" : {
			name : "Chemical Savant",
			source : ["UA:A2", 7],
			minlevel : 14,
			description : desc([
				"I always have resistance to acid and poison damage and immunity to being poisoned",
				"Once per long rest, I can cast Greater Restoration without a spell slot or material comp.",
				"To do so, I have to use alchemist's supplies as my spellcasting focus"
			]),
			dmgres : ["Acid", "Poison"],
			savetxt : { immune : ["poisoned condition"] },
			usages : 1,
			recovery : "long rest",
			additional : "Greater Restoration",
			spellcastingBonus : {
				name : "Chemical Savant",
				spells : ["greater restoration"],
				selection : ["greater restoration"],
				firstCol : "oncelr"
			},
			spellChanges : {
				"greater restoration" : {
					components : "V,S,M\u0192",
					compMaterial : "Alchemist's supplies",
					description : "Reduce exhaustion 1 lvl or end charm, petrify, curse, one ability score reduction, or max HP reduction",
					changes : "When using my Chemical Savant class feature and alchemist's supplies as my spellcasting focus, I can cast Greater Restoration once per long rest without using a spell slot or requiring material components."
				}
			}
		}
	}
});
// Add the Alchemist's Alchemical Homunculus
CreatureList["alchemical homunculus-ua"] = {
	name : "Alchemical Homunculus",
	source : [["UA:A3", 7], ["UA:A2", 6]],
	size : 5,
	type : "Construct",
	alignment : "Neutral",
	ac : 13,
	hp : 5,
	hd : [],
	speed : "20 ft, fly 30 ft",
	scores : [4, 15, 11, 10, 10, 7],
	saves : ["", "", "", "", "", ""],
	skills : {
		"perception" : 4,
		"stealth" : 4
	},
	damage_immunities : "acid, poison",
	condition_immunities : "charmed, exhaustion, poisoned",
	senses : "Darkvision 60 ft",
	passivePerception : 10,
	languages : "understands the languages of its creator but can't speak",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Acidic Spittle",
		ability : 2,
		damage : [1, 6, "acid"],
		range : "30 ft",
		modifiers : ["", "Prof-2"]
	}],
	features : [{
		name : "Creator",
		description : "The homunculus obeys the commands of its creator and has the same proficiency bonus. It takes its turn immediately after its creator, on the same initiative count. It only takes the Dodge action, unless its creator takes a bonus action to command to do otherwise, in which case it can only take the Acidic Spittle, Alchemical Salve, Dash, Disengage, or Help action."
	}, {
		name : "Healing",
		description : "The homunculus regains 2d6 HP whenever the Mending spell is cast on it."
	}],
	actions : [{
		name : "Alchemical Salve (3/Day)",
		description : "The homunculus produces a salve and touches one creature designated by its creator, granting it one of the following magical benefits chosen by its creator:" +
		"\n  \u2022 Buoyancy: The target gains a flying speed of 10 ft for 10 minutes." +
		"\n  \u2022 Inspiration: The target feels giddy and effective, gaining advantage on certain ability checks in the next hour. The target chooses the checks before or after rolling. The magic runs out after the target has used it on a number of checks equal to the Intelligence modifier of the homunculus' creator (minimum of 1)." +
		"\n  \u2022 Resilience: The target gains a number of temporary hit points equal to 2d6 + the Intelligence modifier of the homunculus' creator."
	}]
}

// Add the Archivist specialism (new in 2019v2)
AddSubClass("artificer-ua3", "archivist", {
	regExpSearch : /^(?=.*archivist)(?!.*wizard).*$/i,
	subname : "Archivist",
	fullname : "Archivist",
	source : ["UA:A3", 7],
	features : {
		"subclassfeature3" : {
			name : "Tools of the Trade",
			source : ["UA:A3", 7],
			minlevel : 3,
			description : desc([
				"I gain proficiency with calligrapher's supplies and the forgery kit",
				"I can craft magical scrolls for half the usual gold and in a quarter of the usual time"
			]),
			toolProfs : ["Calligrapher's supplies", "Forgery kit"],
			eval : function () {
				AddToInv("gear", "l", "Calligrapher's supplies", "", 5);
				AddToInv("gear", "l", "Forgery kit", "", 5);
			},
			spellcastingExtra : ["comprehend languages", "dissonant whispers", "detect thoughts", "locate object", "hypnotic pattern", "tongues", "locate creature", "phantasmal killer", "legend lore", "modify memory"]
		},
		"subclassfeature3.1" : {
			name : "Artificial Mind",
			source : ["UA:A3", 8],
			minlevel : 3,
			description : desc([
				"When I end a long rest, I can use calligrapher's supplies on a tiny nonmagical object",
				"It gain a magical keen mind; I can have only 1 at a time, creating more kills the older",
				"See 3rd page for the telepathic advisor and manifest mind features of this magic item",
				"As an action, I can use its information overload: a target in 5 ft must make an Int save",
				"If fail, it takes psychic damage & the 1st attack vs. it before my next turn ends has adv.",
				"If this deals damage, I can expend a spell slot to add damage of 1d8 + 1d8 per slot level"
			]),
			additional : levels.map(function (n, idx) {
				return n < 3 ? "" : (cantripDie[idx]) + 'd8 psychic damage';
			}),
			weaponsAdd : ["Information Overload"],
			weaponOptions : {
				regExpSearch : /^(?=.*information)(?=.*overload).*$/i,
				name : "Information Overload",
				source : ["UA:A3", 8],
				ability : 4,
				type : "Spell",
				damage : [1, 8, "psychic"],
				range : "5 ft of mind",
				description : "Int save; Fail - damage and 1st attack before my next turn ends vs. target has adv; Use spell slot for extra damage",
				dc : true,
				monkweapon : false,
				abilitytodamage : false,
				isInformationOverload : true
			},
			calcChanges : {
				atkAdd : [function (fields, v) {
					if (v.theWea.isInformationOverload && classes.known['artificer-ua3'] && classes.known['artificer-ua3'].level > 4) {
						fields.Damage_Die = cantripDie[classes.known['artificer-ua3'].level - 1] + "d8";
					};
				}]
			},
			action : [["bonus action", "Manifest Mind (start/stop/move)"], ["action", "Manifest Mind (use its senses)"]],
			extraname : "Artificial Mind",
			"telepathic advisor" : {
				name : "Telepathic Advisor",
				source : ["UA:A3", 8],
				description : desc([
					"While my artificial mind is on my person, it telepathically grants me two skill proficiencies",
					"I can choose which skills when I create the artificial mind, depending on its raw material",
					"Animal raw material: two from Animal Handling, Insight, Medicine, Perception, \u0026 Survival",
					"Mineral raw material: two from Deception, Intimidation, Performance, and Persuasion",
					"Plant raw material: two from Arcana, History, Investigation, Nature, and Religion"
				]),
				skillstxt : "I can choose two skill proficiencies based on the raw material the Artificial Mind is made from:\n   - Animal raw material: two from Animal Handling, Insight, Medicine, Perception, and Survival\n   - Mineral raw material: two from Deception, Intimidation, Performance, and Persuasion\n   - Plant raw material: two Arcana, History, Investigation, Nature, and Religion"
			},
			"manifest mind" : {
				name : "Manifest Mind",
				source : ["UA:A3", 8],
				description : desc([
					"As a bonus action, I can have the artificial mind create a spectral presence within 60 ft",
					"This requires the item to be on my person and it stops if the presence goes beyond 300 ft",
					"I decide its spectral appearance; It is intangible, invulnerable, and sheds dim light in 10 ft",
					"While manifested, the spectral mind can hear and see, and has 60 ft darkvision",
					"As an action, I can use the mind's senses instead of my own until I stop concentrating on it",
					"As a bonus action, I can cause the spectral mind to hover 30 ft, passing through creatures",
					"When I cast an artificer spell on my turn, I can have the origins of it be the spectral mind",
					"I can cast spells through it a number of times per long rest equal to my Intelligence mod"
				]),
				extraLimitedFeatures : [{
					name : "Cast spell through Manifest Mind",
					usages : "Intelligence modifier per ",
					usagescalc : "event.value = Math.max(1, What('Int Mod'));",
					recovery : "long rest"
				}]
			},
			autoSelectExtrachoices : [{ extrachoice : "telepathic advisor" }, { extrachoice : "manifest mind" }]
		},
		"subclassfeature6" : {
			name : "Mind Network",
			source : ["UA:A3", 9],
			minlevel : 6,
			description : desc([
				"I add my Int mod to artificer spells that deal psychic damage and information overload",
				"With my artificial mind, I communicate telepathically with anyone carrying my infusions"
			]),
			calcChanges : {
				atkCalc : [
					function (fields, v, output) {
						if (v.theWea.isInformationOverload || (v.isSpell && (/psychic/i).test(fields.Damage_Type) && v.thisWeapon[4].indexOf('artificer-ua3') !== -1)) {
							output.extraDmg += Math.max(1, What('Int Mod'));
						};
					},
					"My artificer cantrips and spells that deal psychic damage, as well as my artificial mind's information overload get my Intelligence modifier added to their damage."
				],
				spellAdd : [
					function (spellKey, spellObj, spName) {
						if (spName == 'artificer-ua3' && !spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "psychic", "Int", true);
					},
					"My artificer cantrips and spells that deal psychic damage get my Intelligence modifier added to their damage."
				]
			}
		},
		"subclassfeature14" : {
			name : "Pure Information",
			source : ["UA:A3", 9],
			minlevel : 14,
			description : desc([
				"When I use a spell slot to boost information overload, its target must make another save",
				"On a failed Intelligence saving throw it is stunned until the end of my next turn",
				"As an action while my artificial mind is on my person, I can teleport (infoportation)",
				"I teleport to an unoccupied space nearest to the spectral mind or an item infused by me",
				"I can do this once per long rest, or by expending a 2nd-level or higher spell slot (SS 2+)"
			]),
			usages : 1,
			recovery : "long rest",
			altResource : "SS 2+",
			additional : "Infoportation",
			action : [["action", ""]]
		}
	}
});

// Add the Artillerist specialism
AddSubClass("artificer-ua3", "artillerist", {
	regExpSearch : /^(?=.*artillerist)(?!.*wizard).*$/i,
	subname : "Artillerist",
	fullname : "Artillerist",
	source : ["UA:A3", 8],
	features : {
		"subclassfeature3" : {
			name : "Tools of the Trade",
			source : ["UA:A3", 9],
			minlevel : 3,
			description : desc([
				"I can use rods, wands, and staffs as a spellcasting focus",
				"I can craft magical wands for half the usual gold and in a quarter of the usual time"
			]),
			additional : "proficiency with smith's \u0026 woodcarver's tools",
			toolProfs : ["Smith's tools", "Woodcarver's tools"],
			eval : function () {
				AddToInv("gear", "l", "Smith's tools", "", 8);
				AddToInv("gear", "l", "Woodcarver's tools", "", 5);
				AddToInv("gear", "r", "Wooden wand", "", 1);
			},
			spellcastingExtra : ["shield", "thunderwave", "scorching ray", "shatter", "fireball", "wind wall", "ice storm", "wall of fire", "cone of cold", "wall of force"]
		},
		"subclassfeature3.1" : {
			name : "Arcane Turret",
			source : ["UA:A3", 10],
			minlevel : 3,
			description: desc([
				"As an action, I can use smith's tools to summon a Medium turret within 5 ft of me",
				"I can do so a number of times per long rest for free, or by spending a spell slot",
				"If I create more turrets than I can have active, the oldest one disappears",
				"When I summon one, I decide what type it is: flamethrower, force ballista, or defender",
				"It disappears after 10 minutes, when reduced to 0 HP, or if I dismiss it as an action",
				"When within 60 ft of it, I can activate it as a bonus action, or detonate it as an action",
				"See the companion page for how the different types of turrets operate"
			]),
			usages : levels.map(function(n) {
				return n < 3 ? "" : n < 14 ? 1 : 2;
			}),
			recovery: "long rest",
			additional : levels.map(function(n) {
				return n < 3 ? "" : n < 14 ? "max 1 active turret"  : "max 2 active turrets";
			}),
			action: [["action", " (summon/detonate)"], ["bonus action", " (command)"]],
			eval : function () {
				ClassList['artificer-ua3'].artificerCompFunc.add("Arcane Turret");
			},
			removeeval : function () {
				ClassList['artificer-ua3'].artificerCompFunc.remove("arcane turret");
			},
			changeeval : function (lvlA) {
				ClassList['artificer-ua3'].artificerCompFunc.update("arcane turret", lvlA[1] * 5);
			}
		},
		"subclassfeature6" : {
			name : "Wand Prototype",
			source : ["UA:A3", 10],
			minlevel : 6,
			description: desc([
				"When I finish a long rest, I can use woodcarver's tools to turn a wand into a magic item",
				"I can only infuse a nonmagical wooden wand and it lasts until I finish my next long rest",
				"I infuse it with an artificer cantrip, even one I don't know, with a 1 action casting time",
				"As an action, I can use the wand to cast the cantrip, using my spellcasting ability",
				"I also add my Intelligence modifier (min 1) to any damage rolls for that cantrip"
			]),
			additional : levels.map(function(n) {
				return n < 6 ? "" : "infuse wand with " + (n < 14 ? "1 cantrip" : "2 cantrips");
			}),
			spellcastingBonus : {
				name : "Wand Prototype",
				"class" : "artificer-ua3",
				notspells : ["magic stone", "mending", "shillelagh"], // all cantrips with a casting time that is not 1 action
				level : [0, 0],
				times : levels.map(function(n) {
					return n < 14 ? 1 : 2;
				}),
				firstCol : "W"
			},
			calcChanges : {
				atkCalc : [
					function (fields, v, output) {
						if (!v.thisWeapon[3] || v.thisWeapon[4].indexOf("artificer-ua3") == -1) return;
						var artSp = CurrentSpells["artificer-ua3"];
						if (!artSp || !artSp.selectBo || !v.thisWeapon[3] || v.thisWeapon[4].indexOf("artificer-ua3") == -1 || artSp.selectCa.indexOf(v.thisWeapon[3]) !== -1) return;
						var artBoSp = CurrentSpells["artificer-ua3"].bonus.subclassfeature6.selection;
						if (artBoSp && artBoSp.indexOf(v.thisWeapon[3]) !== -1) {
							output.die = output.die.replace(/C/g, 1).replace(/B/g, 0).replace(/0.?d\d+/g, 0);
							output.extraDmg += Math.max(Number(What("Int Mod")), 1);
						}
					},
					"Cantrips cast through a wand infused by my Wand Prototype class feature get my Intelligence modifier added to their damage (minimum of +1) and are cast as if coming from a magic item (thus don't require any components nor scale with level)."
				],
				spellAdd : [
					function (spellKey, spellObj, spName, isDuplicate) {
						if (spName != "artificer-ua3" || isDuplicate || !CurrentSpells["artificer-ua3"]) return;
						var artBoSp = CurrentSpells["artificer-ua3"].bonus.subclassfeature6.selection;
						if (!artBoSp || artBoSp.indexOf(spellKey) == -1) return;
						spellObj.components = "";
						spellObj.compMaterial = "Spells cast by magic items don't require any components.";
						var aSpell = SpellsList[spellKey];
						if (aSpell.descriptionCantripDie) {
							var cDie = 1;
							var newCantripDieDescr = aSpell.descriptionCantripDie;
							while ((/`CD(-|\+|\*)?\d*`/).test(newCantripDieDescr)) {
								if ((/`CD(-|\+)\d+`/).test(newCantripDieDescr)) {
									var cDie = cDie + Number(newCantripDieDescr.replace(/.*`CD((-|\+)\d+)`.*/, "$1"));
								} else if ((/`CD\*\d+`/).test(newCantripDieDescr)) {
									var cDie = cDie * Number(newCantripDieDescr.replace(/.*`CD\*(\d+)`.*/, "$1"));
								}
								newCantripDieDescr = newCantripDieDescr.replace(/`CD(-|\+|\*)?\d*`/, cDie);
							}
							spellObj.description = newCantripDieDescr.replace(/\b0d\d+()/g, "$1").replace(/\b0d\d+/g, "0");
						}
						genericSpellDmgEdit(spellKey, spellObj, "[\\w\\.]+", Math.max(Number(What("Int Mod")), 1), false, true)
						return true;
					},
					"Cantrips cast through a wand infused by my Wand Prototype class feature get my Intelligence modifier added to their damage (minimum of +1) and are cast as if coming from a magic item (thus don't require any components nor scale with level)."
				]
			}
		},
		"subclassfeature14" : {
			name : "Fortified Position",
			source : ["UA:A3", 10],
			minlevel : 14,
			description: "\n   My allies and I have half cover while within 10 ft of an arcane turret I created"
		}
	}
});
// Add the Artillerist's Arcane Turret
CreatureList["arcane turret-ua"] = {
	name : "Arcane Turret",
	source : [["UA:A3", 10], ["UA:A2", 7]],
	size : 3,
	type : "Construct",
	alignment : "Neutral",
	ac : 18,
	hp : 15,
	hd : [0, 0],
	speed : "15 ft, climb 15 ft",
	scores : [10, 10, 10, 10, 10, 10],
	saves : ["", "", "", "", "", ""],
	damage_immunities : "poison, psychic",
	condition_immunities : "all conditions",
	passivePerception : 10,
	senses : "",
	languages : "",
	challengeRating : "1",
	proficiencyBonus : 0,
	attacksAction : 0,
	attacks : [{
		name : "Flamethrower",
		ability : 4,
		damage : [1, 8, "fire"],
		range : "15-ft cone",
		description : "Dex save, success - half damage; Unattended flammable objects ignite",
		modifiers : ["dc+oProf+oInt", ""],
		abilitytodamage : false,
		tooltip : "The turret exhales fire in an adjacent 15-foot cone that the creator designate. Each creature in that area must make a Dexterity saving throw against the creator's spell save DC, taking 1d8 fire damage on a failed save or half as much damage on a successful one. The fire ignites any flammable objects in the area that aren't being worn or carried."
	}, {
		name : "Force Ballista",
		ability : 4,
		damage : [2, 8, "force"],
		range : "120 ft",
		description : "Creatures hit are pushed 5 ft away",
		modifiers : ["oProf+oInt", ""],
		abilitytodamage : false,
		tooltip : "Make a range spell attack, originating from the turret, at one creature or object within 120 feet of it. On a hit, the target takes 2d8 force damage, and if the target is a creature, it is pushed up to 5 feet away from the turret."
	}, {
		name : "Detonate",
		ability : 4,
		damage : [3, 6, "force"],
		range : "10-ft radius",
		description : "Dex save, success - half damage; Destroys turret",
		modifiers : ["dc+oProf+oInt", ""],
		abilitytodamage : false,
		tooltip : "Detonate destroys the turret and forces each creature within 10 feet of it to make a Dexterity saving throw against your spell save DC, taking 3d6 force damage on a failed save or half as much damage on a successful one."
	}],
	features : [{
		name : "Healing",
		description : "The turret regains 2d6 HP whenever Mending is cast on it."
	}, {
		name : "Turret Type",
		description : "Upon creation, the creator decides what type of turret it is: Flamethrower, Force Ballista, or Defender. What feature/attack it can use depends on its type."
	}, {
		name : "Defender",
		description : "The turret emits a burst of positive energy that grants itself and each creature of the creator's choice within 10 feet of it a number of temporary hit points equal to 1d8 + the creator's Intelligence modifier (minimum of +1)."
	}],
	traits : [{
		name: "Creator",
		description: "The turret only does something when activated by its creator. It uses the spell attack and spell save DC of its creator, and has five times the creator's artificer level in HP."
	}, {
		name: "Activation",
		description: "The creator of the turret can activate it as a bonus action while within 60 ft of it. Once activated, the turret does as its creator wishes, move to an unoccupied space and use the action associated with its type:" +
		"\n  \u2022 Flamethrower: use the flamethrower attack." +
		"\n  \u2022 Force Ballista: use the force ballista attack." +
		"\n  \u2022 Defender: use the defender feature, see the features to the left."
	}, {
		name: "Detonate",
		description: "The creator of the turret can use an action to detonate the turret when within 60 ft of it, see the attack section."
	}]
};

// Add the Battle Smith specialism (new in 2019v2)
AddSubClass("artificer-ua3", "battle smith", {
	regExpSearch : /^(?=.*battle)(?=.*smith)(?!.*wizard).*$/i,
	subname : "Battle Smith",
	fullname : "Battle Smith",
	source : ["UA:A3", 11],
	features : {
		"subclassfeature3" : {
			name : "Tools of the Trade \u0026 Battle Ready",
			source : ["UA:A3", 11],
			minlevel : 3,
			description : desc([
				"I gain proficiency with leatherworker's tools, smith's tools, and martial weapons",
				"I can craft magical armor for half the usual gold and in a quarter of the usual time",
				"I can use my Intelligence modifier instead of Strength or Dexterity for magic weapons"
			]),
			toolProfs : ["Leatherworker's tools", "Smith's tools"],
			eval : function () {
				AddToInv("gear", "l", "Leatherworker's tools", "", 5);
				AddToInv("gear", "l", "Smith's tools", "", 8);
			},
			weaponProfs : [false, true],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (!v.isSpell && (v.theWea.isMagicWeapon || v.thisWeapon[1]) && fields.Mod > 0 && fields.Mod < 3 && What("Int") > What(fields.Mod == 1 ? "Str" : "Dex")) {
							fields.Mod = 4;
						}
					},
					'I can use my Intelligence modifier instead of Strength or Dexterity for the attack and damage rolls of magic weapons.'
				]
			},
			spellcastingExtra : ["heroism", "searing smite", "branding smite", "warding bond", "aura of vitality", "blinding smite", "aura of purity", "staggering smite", "banishing smite", "mass cure wounds"]
		},
		"subclassfeature3.1" : {
			name : "Iron Defender",
			source : ["UA:A3", 11],
			minlevel : 3,
			description : desc([
				"When I end a long rest, I can use smith's tools to create an iron defender",
				"I determine its appearance; I can have only 1 at a time, making a new one kills the older",
				"It obeys my commands, is friendly to my allies and I, and acts on my initiative, after me",
				"Unless I use a bonus action to command it, it only takes reactions and the Dodge action",
				"If commanded to, it can only take an action to bite, repair, Dash, Disengage, or Help",
				"Its HP maximum is equal to five times my artificer level + my Int Mod + its Con mod"
			]),
			action : [["action", " (restore)"], ["bonus action", " (command)"]],
			eval : function () {
				var prefix = ClassList['artificer-ua3'].artificerCompFunc.add("Iron Defender");
				AddSkillProf("Perception", true, false, false, 2, prefix);
			},
			removeeval : function () {
				ClassList['artificer-ua3'].artificerCompFunc.remove("iron defender");
			},
			changeeval : function (lvlA) {
				var newProf = ProficiencyBonusList[classes.totallevel - 1];
				var pres = ClassList['artificer-ua3'].artificerCompFunc.update("iron defender", undefined, newProf);
				if (!pres.length) return;
				var lvlH = Math.max(lvlA[0], lvlA[1]), lvlL = Math.min(lvlA[0], lvlA[1]);
				var newHP = Math.round(lvlA[1] * 5 + What("Int Mod"));
				for (var i = 0; i < pres.length; i++) {
					Value(pres[i] + "Comp.Use.HP.Max", newHP + What(pres[i] + "Comp.Use.Ability.Con.Mod"));
					if (lvlL < 6 && lvlH >= 6) { // Arcane Jolt
						Value(pres[i] + "Comp.Use.Attack.1.Description", lvlA[1] >= 6 ? "Counts as magical; Can channel energy (Arcane Jolt)" : "");
					}
					if (lvlL < 14 && lvlH >= 14) { // Improved Defender
						Value(pres[i] + "Comp.Use.Attack.2.Weapon Selection", lvlA[1]>= 14 ? "Defensive Pounce" : "");
						if (lvlA[1] >= 14) {
							Value(pres[i] + "Comp.Use.Attack.2.Range", "Melee (5 ft)");
							Value(pres[i] + "Comp.Use.Attack.2.Description", "As reaction on target that attacks another; Automatically hits and target has disadv. on its attack");
							Value(pres[i] + "Comp.Use.Attack.2.Damage Type", "Force");
							PickDropdown(pres[i] + "Comp.Use.Attack.2.Mod", 5);
							Value(pres[i] + "BlueText.Comp.Use.Attack.2.Damage Die", "1d4");
							Value(pres[i] + "BlueText.Comp.Use.Attack.2.Damage Bonus", "oInt-Wis");
						}
					}
				}
			}
		},
		"subclassfeature6" : {
			name : "Arcane Jolt",
			source : ["UA:A3", 12],
			minlevel : 6,
			description : desc([
				"The bite attack of my iron defender is considered magical",
				"I can channel energy through the defender's bite attack and my magic weapon attacks",
				"Once per turn when such an attack hits, I can have it do extra force damage or heal",
				"If I choose to heal, I restore HP to a creature that I can see within 30 ft of the target"
			]),
			usages : "Intelligence modifier per ",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));",
			recovery : "long rest",
			additional : levels.map(function (n) {
				return n < 6 ? "" : (n < 14 ? 2 : 4) + "d4";
			})
		},
		"subclassfeature14" : {
			name : "Improved Defender",
			source : ["UA:A3", 14],
			minlevel : 14,
			description : desc([
				"My iron defender's defensive pounce now also deals 1d4 + my Int mod in force damage",
				"The damage and healing from arcane jolt increases from 2d4 to 4d4"
			])
		}
	}
});
// Add the Battle Smith's Iron Defender (new in 2019v2)
CreatureList["iron defender-ua"] = {
	name : "Iron Defender",
	source : ["UA:A3", 11],
	size : 3,
	type : "Construct",
	alignment : "Neutral",
	ac : 15,
	hp : 7,
	hd : [],
	speed : "40 ft",
	scores : [14, 12, 14, 4, 10, 6], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : { "perception" : 4 },
	damage_immunities : "poison",
	condition_immunities : "charmed, exhaustion, poisoned",
	passivePerception : 10,
	senses : "Darkvision 60 ft",
	languages : "understands the languages of its creator but can't speak",
	challengeRating : "1",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 1,
		damage : [1, 8, "piercing"],
		range : "Melee (5 ft)",
		modifiers : ["", "Prof-2"]
	}],
	features : [{
		name : "Creator",
		description : "The iron defender obeys the commands of its creator and has the same proficiency bonus. It takes its turn after its creator, on the same initiative count. It only takes the Dodge action, unless its creator takes a bonus action to command to do otherwise, in which case it can only take the Bite, Repair, Dash, Disengage, or Help action. Within an hour of its death, its creator can expend a spell slot as an action while within 5 ft to have it return to full HP after 1 minute."
	}],
	actions : [{
		name : "Healing",
		description : "The iron defender regains 2d6 HP whenever the Mending spell is cast on it."
	}, {
		name : "Vigilant",
		description : "The iron defender can't be surprised."
	}, {
		name : "Repair (3/Day)",
		description : "As an action, the magical mechanisms inside the iron defender restore 2d8 + its proficiency bonus in hit points to itself or to one construct or object within 5 ft of it."
	}, {
		name : "Defensive Pounce (reaction)",
		description : "As a reaction, the iron defender imposes disadvantage on the attack roll of one creature it can see that is within 5 ft of it, provided the attack roll is against a creature other than the iron defender."
	}]
};

// Add the new spell
SpellsList["arcane weapon-ua"] = {
	name : "Arcane Weapon",
	classes : ["artificer-ua3", "artificer-ua2"],
	source : [["UA:A3", 14], ["UA:A2", 10]],
	level : 1,
	school : "Trans",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 h",
	description : "1 wea +1d6 dmg (acid, cold, fire, lightn., poison, or thunder); 1 bns change dmg type; SL3: conc, 8 h",
	descriptionFull : "You channel arcane energy into one simple or martial weapon you're holding, and choose one damage type: acid, cold, fire, lightning, poison, or thunder. Until the spell ends, you deal an extra 1d6 damage of the chosen type to any target you hit with the weapon. If the weapon isn't magical, it becomes a magic weapon for the spell's duration.\n   As a bonus action, you can change the damage type, choosing from the options above." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, you can maintain your concentration on the spell for up to 8 hours. "
};

// Add the new magic items
if (!MagicItemsList["boots of the winding path"]) {
	MagicItemsList["boots of the winding path"] = {
		name : "Boots of the Winding Path",
		source : [["E:RLW", 62], ["T", 21], ["UA:A2", 9], ["UA:A3", 12]],
		type : "wondrous item",
		description : "While wearing these boots, I can teleport up to 15 ft as a bonus action to an unoccupied space I can see, as long as I occupied that space at some point during the current turn.",
		descriptionFull : "While wearing these boots, a creature can teleport up to 15 feet as a bonus action to an unoccupied space the creature can see. The creature must have occupied that space at some point during the current turn.",
		attunement : true,
		action : [["bonus action", ""]]
	}
}
MagicItemsList["many-handed pouch-ua"] = {
	name : "Many-Handed Pouch",
	source : [["UA:A3", 13], ["UA:A2", 9]],
	type : "wondrous item",
	description : "These 2-5 pouches all share one interdimensional space of the same capacity as a single pouch. Thus, reaching into any of the pouches allows access to the same storage space. A pouch only functions if it is within 100 miles of another pouch of its set.",
	descriptionFull : "The infused pouches all share one interdimensional space of the same capacity as a single pouch. Thus, reaching into any of the pouches allows access to the same storage space. A pouch operates as long as it is within 100 miles of another one of the pouches; the pouch is otherwise empty and won't accept any contents.\n   If this infusion ends, the items stored in the shared space move into one of the pouches, determined at random. The rest of the pouches become empty."
}
MagicItemsList["radiant weapon-ua"] = {
	name : "Radiant Weapon",
	nameTest : "Radiant",
	source : [["UA:A3", 13], ["UA:A2", 9]],
	type : "weapon (any)",
	description : "This magic weapon adds a +1 on its attacks and damage. As a bonus action, I can start or stop it shedding light, bright in 30 ft and dim for another 30 ft. Once per short rest as a reaction when hit by a melee attack, I can blind the attacker until the end of its next turn unless it makes a Con save (my spell DC).",
	descriptionFull : "This magic weapon grants a +1 bonus to attack and damage rolls made with it. While holding it, the wielder can take a bonus action to cause it to shed bright light in a 30-foot radius and dim light for an additional 30 feet. The wielder can extinguish the light as a bonus action.\n   As a reaction immediately after being hit by a melee attack, the wielder can cause the attacker to be blinded until the end of the attacker's next turn, unless the attacker succeeds on a Constitution saving throw against your spell save DC. Once used, this reaction can't be used again until the wielder finishes a short or long rest.",
	attunement : true,
	usages : 1,
	recovery : "short rest",
	additional : "blind attacker",
	action : [["bonus action", " (shed light/stop)"], ["reaction", " (after melee hit)"]],
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "suffix",
		descriptionChange : ["replace", "weapon"]
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && !v.isSpell && (/radiant/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'Reaction to blind attacker';
				}
			},
			'If I include the word "Radiant" in the name of a weapon, it will be treated as the magic weapon Radiant Weapon. It has +1 to hit and damage and can be used to shed light and to blind an attacker.'
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.isMeleeWeapon && !v.isSpell && (/radiant/i).test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[1] + 1;
				}
			}
		]
	}
}
MagicItemsList["repulsion shield-ua"] = { // 2019v2
	name : "Repulsion Shield",
	source : ["UA:A3", 14],
	type : "shield",
	description : "I gain a +1 bonus to Armor Class while wielding this shield. As a reaction immediately after being hit by a melee attack, I can push the attacker up to 15 ft away. Once used, this reaction can't be used again until I finish a short or long rest.",
	descriptionFull : "A creature gains a +1 bonus to Armor Class while wielding this shield. While holding it, the wielder can use a reaction immediately after being hit by a melee attack to push the attacker up to 15 feet away. Once used, this reaction can't be used again until the wielder finishes a short or long rest.",
	weight : 6,
	attunement : true,
	usages : 1,
	recovery : "short rest",
	action : [["reaction", ""]],
	shieldAdd : ["Repulsion Shield", 3, 6],
}
// dupl_start
if (!MagicItemsList["repeating shot"]) {
	MagicItemsList["repeating shot"] = { // 2019v2
		name : "Repeating Shot",
		source : [["E:RLW", 62], ["T", 22], ["UA:A3", 13]],
		type : "weapon (any with ammunition)",
		description : "When I use this magic weapon to make a ranged attack, it magically produces one piece of ammunition and grants a +1 bonus to its attack and damage rolls. Thus, it doesn't require ammunition and ignores the loading property if it has it. The produced ammunition vanishes once it hits or misses a target.",
		descriptionFull : "This magic weapon grants a +1 bonus to attack and damage rolls made with it when it's used to make a ranged attack, and it ignores the loading property if it has it.\n   The weapon requires no ammunition; it magically produces one piece of ammunition each time you make a ranged attack with it, unless you manually load it. The ammunition produced by the weapon vanishes the instant after the it hits or misses a target.",
		attunement : true,
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "suffix",
			descriptionChange : ["replace", "weapon"],
			excludeCheck : function (inObjKey, inObj) {
				return !(/ammunition/i).test(inObj.description);
			}
		},
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && !v.isSpell && (/^(?=.*repeating shot)(?=.*ammunition).*$/i).test(v.WeaponText)) {
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '').replace(/(;|,)? ?loading/i, '');
					}
				},
				'If I include the words "Repeating Shot" in the name of a weapon with the ammunition property, it will be treated as the magic weapon Repeating Shot. It has +1 to hit and damage and produces its own ammunition, thus its loading property is removed if it has it.'
			],
			atkCalc : [
				function (fields, v, output) {
					if ((/^(?=.*repeating shot)(?=.*ammunition).*$/i).test(v.WeaponText) && !v.isSpell) {
						output.magic = v.thisWeapon[1] + 1;
					}
				}, ''
			]
		}
	}
}
if (!MagicItemsList["returning weapon"]) {
	MagicItemsList["returning weapon"] = {
		name : "Returning Weapon",
		nameTest : "Returning",
		source : [["E:RLW", 63], ["T", 23], ["UA:A3", 14], ["UA:A2", 10]],
		type : "weapon (any thrown)",
		description : "This magic weapon grants a +1 bonus to attack and damage rolls I make with it. It returns to my hand immediately after I use it to make a ranged attack.",
		descriptionFull : "This magic weapon grants a +1 bonus to attack and damage rolls made with it, and it returns to the wielder's hand immediately after it is used to make a ranged attack.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "suffix",
			descriptionChange : ["replace", "weapon"],
			excludeCheck : function (inObjKey, inObj) {
				return !(/melee/i).test(inObj.range) || !(/thrown/i).test(inObj.description);
			}
		},
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/^(?=.*returning)(?=.*thrown).*$/i).test(v.WeaponText)) {
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
						fields.Description += (fields.Description ? '; ' : '') + 'Returns immediately after ranged attack';
					}
				},
				'If I include the word "Returning" in the name of a thrown weapon, it will be treated as the magic weapon Returning Weapon. It has +1 to hit and damage and returns to my hand immediately after I use it to make a ranged attack.'
			],
			atkCalc : [
				function (fields, v, output) {
					if (v.isMeleeWeapon && (/^(?=.*returning)(?=.*thrown).*$/i).test(v.WeaponText)) {
						output.magic = v.thisWeapon[1] + 1;
					}
				}, ''
			]
		}
	}
} // dupl_end

// Set the Artificer class spell list
var UAA3_SetArtificerSpells = function(){
	var artSp = [
		"acid splash",
		"create bonfire", // 2019v2
		"dancing lights",
		"fire bolt",
		"frostbite", // 2019v2
		"guidance",
		"light",
		"mage hand",
		"magic stone", // 2019v2
		"mending",
		"message",
		"poison spray",
		"prestidigitation",
		"ray of frost",
		"resistance",
		"shocking grasp",
		"spare the dying",
		"thorn whip",
		"thunderclap", // 2019v2
		// level 1
		"absorb elements", // 2019v2
		"alarm",
		"catapult", // 2019v2
		"cure wounds",
		"detect magic",
		"disguise self",
		"expeditious retreat",
		"faerie fire", // 2019v2
		"false life",
		"feather fall", // 2019v2
		"grease",
		"identify",
		"jump",
		"longstrider",
		"sanctuary",
		"snare", // 2019v2, replaces "shield of faith"
		// level 2
		"aid",
		"alter self",
		"arcane lock",
		"blur",
		"continual flame",
		"darkvision",
		"enhance ability",
		"enlarge/reduce",
		"heat metal",
		"invisibility",
		"lesser restoration",
		"levitate",
		"magic mouth",
		"magic weapon",
		"protection from poison",
		"pyrotechnics", // 2019v2
		"rope trick",
		"see invisibility",
		"skywrite", // 2019v2
		"spider climb",
		// level 3
		"blink",
		"catnap", // 2019v2
		"dispel magic",
		"elemental weapon",
		"flame arrows", // 2019v2
		"fly",
		"gaseous form",
		"glyph of warding",
		"haste",
		"protection from energy",
		"revivify",
		"tiny servant", // 2019v2
		"water breathing",
		"water walk",
		// level 4
		"arcane eye",
		"elemental bane", // 2019v2
		"fabricate",
		"freedom of movement",
		"leomund's secret chest",
		"mordenkainen's faithful hound",
		"mordenkainen's private sanctum",
		"otiluke's resilient sphere",
		"stone shape",
		"stoneskin",
		"vitriolic sphere", // 2019v2
		// level 5
		"animate objects",
		"bigby's hand",
		"creation",
		"greater restoration",
		"skill empowerment", // 2019v2
		"transmute rock", // 2019v2
		"wall of stone"
	];
	for (var a = 0; a < artSp.length; a++) {
		var aArtSp = SpellsList[artSp[a]];
		if(aArtSp && aArtSp.classes && aArtSp.classes.indexOf("artificer-ua3") === -1) aArtSp.classes.push("artificer-ua3");
	};
	var artMi = [
		["alchemy jug"],
		["bag of holding"],
		["cap of water breathing"],
		["cloak of the manta ray"],
		["goggles of night"],
		["lantern of revealing"],
		["rope of climbing"],
		["sending stones"],
		["wand of magic detection"],
		["wand of secrets"],
		["boots of elvenkind", 12],
		["boots of striding and springing", 12],
		["boots of the winterlands", 12],
		["bracers of archery", 12],
		["brooch of shielding", 12],
		["cloak of elvenkind", 12],
		["cloak of protection", 12],
		["eyes of charming", 12],
		["eyes of the eagle", 12],
		["gauntlets of ogre power", 12],
		["gloves of missile snaring", 12],
		["gloves of swimming and climbing", 12],
		["gloves of thievery", 12],
		["hat of disguise", 12],
		["headband of intellect", 12],
		["helm of telepathy", 12],
		["medallion of thoughts", 12],
		["periapt of wound closure", 12],
		["pipes of haunting", 12],
		["pipes of the sewers", 12],
		["quiver of ehlonna", 12],
		["ring of jumping", 12],
		["ring of mind shielding", 12],
		["ring of water walking", 12],
		["slippers of spider climbing", 12],
		["winged boots", 12],
		["amulet of health", 16],
		["belt of giant strength", 16, "hill (str 21, rare)"],
		["boots of levitation", 16],
		["boots of speed", 16],
		["bracers of defense", 16],
		["cloak of the bat", 16],
		["dimensional shackles", 16],
		["gem of seeing", 16],
		["horn of blasting", 16],
		["ring of free action", 16],
		["ring of protection", 16],
		["ring of the ram", 16]
	];
	var theObj = ClassList['artificer-ua3'].features["infuse item"];
	for (var a = 0; a < artMi.length; a++) {
		var MI0 = artMi[a][0];
		var MI1 = artMi[a][1];
		var MI2 = artMi[a][2];
		var anArtMi = MagicItemsList[MI0];
		if (!anArtMi) continue;
		if (MI2) {
			anArtMi = {
				name : MagicItemsList[MI0][MI2].name ? MagicItemsList[MI0][MI2].name : MagicItemsList[MI0].name + " [" + MI2.capitalize() + "]",
				source : MagicItemsList[MI0][MI2].source ? MagicItemsList[MI0][MI2].source : MagicItemsList[MI0].source,
				attunement : MagicItemsList[MI0][MI2].attunement !== undefined ? MagicItemsList[MI0][MI2].attunement : MagicItemsList[MI0].attunement
			}
		}
		var theI = "Replicate: " + anArtMi.name + (MI1 ? " (prereq: level " + MI1 + " artificer)" : "");
		var theILC = theI.toLowerCase();
		theObj[theILC] = {
			name : anArtMi.name,
			description : "",
			source : anArtMi.source,
			eval : 'AddMagicItem("' + anArtMi.name + '");',
			removeeval : MI2 ? 'if (CurrentMagicItems.choices.indexOf("' + MI2 + '") != -1) { MagicItemClear(CurrentMagicItems.choices.indexOf("' + MI2 + '") + 1, true); };' : 'if (CurrentMagicItems.known.indexOf("' + MI0 + '") != -1) { MagicItemClear(CurrentMagicItems.known.indexOf("' + MI0 + '") + 1, true); };'
		};
		if (anArtMi.attunement) theObj[theILC].additional = "requires attunement";
		if (MI1) theObj[theILC].prereqeval = "classes.known['artificer-ua3'].level >= " + MI1;
		theObj.extrachoices.push(theI);
	};
}();
