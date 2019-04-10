var iFileName = "ua_20190228_Artificer.js";
RequiredSheetVersion(13);
// This file adds the content from the Unearthed Arcana: Artificer 2019 article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:A2"] = {
	name : "Unearthed Arcana: Artificer 2019",
	abbreviation : "UA:A2",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2019/dnd/downloads/UA-Artificer-2019.pdf",
	date : "2019/02/28"
};

// Adds a new class, the Artificer, with 2 subclasses
ClassList['artificer-ua2'] = {
	regExpSearch : /^(?=.*artificer)(?!.*wizard).*$/i,
	name : "Artificer",
	source : ["UA:A2", 1],
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
		primary : [["Thieves' tools", "Dex"], "Tinker's tools", ["Any artisan's tool", 1]],
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
		"\n \u2022 any two simple weapons;" +
		"\n \u2022 A light crossbow and 20 bolts;" +
		"\n \u2022 Studded leather armor -or- scale mail;" +
		"\n \u2022 Thieves' tools and a dungeoneer's pack;" +
		"\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses : ["Artificer Specialist", []],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	spellcastingFactor : 2,
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
			source : ["UA:A2", 2],
			minlevel : 1,
			description : desc([
				"As an action, I use thieves' or an artisan's tools to give max 1 property to a tiny object:",
				" \u2022 Emit light (5-ft radius bright light, equal dim light), an odor, or a nonverbal sound",
				" \u2022 Static visual effect on one of its surfaces; picture, 25 words, shapes, or a mix of those",
				"If I instill a property in more objects than I can have active, the oldest loses its property"
			]),
			additional : "Intelligence modifier of active objects",
			action : [["action", " (add/remove)"]]
		},
		"spellcasting" : {
			name : "Spellcasting",
			source : ["UA:A2", 3],
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
						if (!spellObj.psionic && spName == "artificer-ua2") {
							spellObj.compMaterial = (spellObj.compMaterial ? spellObj.compMaterial + "; " : "") + "My artificer spellcasting focus: thieves' tools, artisan's tools I'm proficient with, " + (classes.known["artificer-ua2"].subclass.indexOf("artillerist") !== -1 ? "rod, staff, wand, " : "") + "or an item infused by me.";
							if (!spellObj.components) {
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
			extraname : "Artificer 2",
			"infuse item" : {
				name : "Infuse Item",
				source : ["UA:A2", 5],
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
		"infuse item" : {
			name : "Infuse Item",
			source : ["UA:A2", 5],
			minlevel : 2,
			description : desc([
				"Use the \"Choose Feature\" button above to add Artificer Infusions to the third page",
				"Whenever I gain an artificer level, I can replace an infusion I know with another"
			]),
			additional : levels.map(function (n) {
				return n < 2 ? "" : (n < 4 ? 3 : n < 7 ? 4 : n < 11 ? 5 : n < 15 ? 6 : n < 19 ? 7 : 8) + " infusions known; max " + (n < 6 ? 2 : n < 11 ? 3 : n < 16 ? 4 : 5) + " infused items";
			}),
			extraname : "Artificer Infusion",
			extrachoices : ["Boots of the Winding Path (prereq: level 4 artificer)", "Enhanced Defense", "Enhanced Weapon", "Many-Handed Pouch (prereq: level 4 artificer)", "Radiant Weapon (prereq: level 8 artificer)", "Resistant Armor (prereq: level 8 artificer)", "Returning Weapon"],
			"boots of the winding path (prereq: level 4 artificer)" : {
				name : "Boots of the Winding Path",
				source : ["UA:A2", 9],
				description : desc([
					"The wearer can use a bonus action to teleport up to 15 ft to an unoccupied space it can see",
					"It must be a space that the wearer had occupied some time during the current turn"
				]),
				additional : "pair of boots; requires attunement",
				prereqeval : function(v) { return classes.known["artificer-ua2"].level >= 4; },
				eval : function (lvl, chc) { AddMagicItem("Boots of the Winding Path"); },
				removeeval : function (lvl, chc) {
					var loc = CurrentMagicItems.known.indexOf("boots of the winding path");
					if (loc == -1) return;
					MagicItemClear(loc + 1, true);
				}
			},
			"enhanced defense" : {
				name : "Enhanced Defense",
				source : ["UA:A2", 9],
				description : "",
				additional : levels.map(function (n) {
					return "armor/shield; +" + (n < 12 ? 1 : 2) + " magical";
				}),
				eval : function (lvl, chc) {
					AddMagicItem("Armor +" + (classes.known["artificer-ua2"].level < 12 ? 1 : 2));
				},
				removeeval : function (lvl, chc) {
					var loc = CurrentMagicItems.known.indexOf("armor, +1, +2, or +3");
					if (loc == -1) return;
					MagicItemClear(loc + 1, true);
				}
			},
			"enhanced weapon" : {
				name : "Enhanced Weapon",
				source : ["UA:A2", 9],
				description : "",
				additional : levels.map(function (n) {
					return "simple/martial weapon; +" + (n < 12 ? 1 : 2) + " magical";
				}),
				eval : function (lvl, chc) {
					AddMagicItem("Weapon +" + (classes.known["artificer-ua2"].level < 12 ? 1 : 2));
				},
				removeeval : function (lvl, chc) {
					var loc = CurrentMagicItems.known.indexOf("weapon, +1, +2, or +3");
					if (loc == -1) return;
					MagicItemClear(loc + 1, true);
				}
			},
			"many-handed pouch (prereq: level 4 artificer)" : {
				name : "Many-Handed Pouch",
				source : ["UA:A2", 9],
				description : desc([
					"The infused pouches all share one interdimensional space the size of a single pouch",
					"Thus, reaching into any of the pouches allows access to the same storage space",
					"A pouch only functions if it is within 100 miles of another infused pouch",
					"When the infusion ends, the contents is moved to one of the pouches, chosen randomly"
				]),
				additional : "2-5 pouches",
				prereqeval : function(v) { return classes.known["artificer-ua2"].level >= 4; },
				eval : function (lvl, chc) { AddMagicItem("Many-Handed Pouch"); },
				removeeval : function (lvl, chc) {
					var loc = CurrentMagicItems.known.indexOf("many-handed pouch");
					if (loc == -1) return;
					MagicItemClear(loc + 1, true);
				}
			},
			"radiant weapon (prereq: level 8 artificer)" : {
				name : "Radiant Weapon",
				source : ["UA:A2", 9],
				description : desc([
					"The weapon has a +1 bonus to attack and damage rolls made with it and it sheds light",
					"As a bonus action, its wielder can start/stop the light, 30-ft radius bright + 30 ft dim light",
					"Once per short rest as a reaction after being hit in melee, the wielder can blind its attacker",
					"The attack must succeed on a Con save (spell save DC) or be blinded until its next turn ends"
				]),
				additional : "simple/martial weapon; requires attunement",
				prereqeval : function(v) { return classes.known["artificer-ua2"].level >= 8; },
				eval : function (lvl, chc) { AddMagicItem("Radiant Weapon"); },
				removeeval : function (lvl, chc) {
					var loc = CurrentMagicItems.known.indexOf("radiant weapon");
					if (loc == -1) return;
					MagicItemClear(loc + 1, true);
				}
			},
			"resistant armor (prereq: level 8 artificer)" : {
				name : "Resistant Armor",
				source : ["UA:A2", 10],
				description : desc([
					"The armor gives its wearer resistance to one type of damage, chosen at the time of infusion",
					"Choose from: acid,	 cold, fire, force, lightning, necrotic, poison, psychic, radiant, or thunder"
				]),
				additional : "suit of armor; requires attunement",
				prereqeval : function(v) { return classes.known["artificer-ua2"].level >= 8; },
				eval : function (lvl, chc) { AddMagicItem("Armor of Resistance"); },
				removeeval : function (lvl, chc) {
					var loc = CurrentMagicItems.known.indexOf("armor of resistance");
					if (loc == -1) return;
					MagicItemClear(loc + 1, true);
				}
			},
			"returning weapon" : {
				name : "Returning Weapon",
				source : ["UA:A2", 10],
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
			source : ["UA:A2", 5],
			minlevel : 3,
			description : " [expertise with all tools I am proficient with]",
			skillstxt : "expertise with all tools I am proficient with",
			eval : function () { Checkbox('Too Exp', true); },
			removeeval : function () { Checkbox('Too Exp', false); }
		},
		"subclassfeature3" : {
			name : "Artificer Specialist",
			source : ["UA:A2", 5],
			minlevel : 3,
			description : desc([
				'Choose a specialism and put it in the "Class" field on the first page',
				"Choose either alchemist or artillerist"
			])
		},
		"arcane armament" : {
			name : "Arcane Armament",
			source : ["UA:A2", 5],
			minlevel : 5,
			description : " [as Extra Attack, but only with magic weapon]"
		},
		"the right cantrip for the job" : {
			name : "The Right Cantrip for the Job",
			source : ["UA:A2", 5],
			minlevel : 10,
			description : "\n   " + "Whenever I finish a short/long rest, I can swap one of my artificer cantrips for another"
		},
		"spell-storing item" : {
			name : "Spell-Storing Item",
			source : ["UA:A2", 5],
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
			source : ["UA:A2", 6],
			minlevel : 20,
			description : " [+1 on all saves per attuned magic item (max 6)]",
			savetxt : {
				text : ["+1 to all saves per attuned magic item"]
			}
		}
	}
};

// Add the Alchemist specialism
AddSubClass("artificer-ua2", "alchemist", {
	regExpSearch : /^(?=.*alchemist)(?!.*wizard).*$/i,
	subname : "Alchemist",
	fullname : "Alchemist",
	source : ["UA:A2", 6],
	spellcastingExtra : ["purify food and drink", "ray of sickness", "melf's acid arrow", "web", "create food and water", "stinking cloud", "blight", "death ward", "cloudkill", "raise dead"],
	features : {
		"subclassfeature3" : {
			name : "Tools of the Trade",
			source : ["UA:A2", 6],
			minlevel : 3,
			description : desc([
				"I gain proficiency with alchemist's supplies and the herbalism kit",
				"I can craft magical potions for half the usual gold and in a quarter of the usual time"
			]),
			toolProfs : ["Alchemist's supplies", "Herbalism kit"],
			eval : function () {
				AddToInv("gear", "l", "Alchemist's supplies", "", 8);
				AddToInv("gear", "l", "Herbalism kit", "", 3);
			}
		},
		"subclassfeature3.1" : {
			name : "Alchemical Homunculus",
			source : ["UA:A2", 6],
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
				Value(prefix + 'Comp.Race', "Alchemical Homunculus");
				Value(prefix + 'Comp.Type', "Construct");
				AddSkillProf("Perception", true, false, false, 2, prefix);
			},
			removeeval : function () {
				var AScompA = isTemplVis('AScomp') ? What('Template.extras.AScomp').split(',') : false;
				if (!AScompA) return;
				for (var a = 1; a < AScompA.length; a++) {
					if (What(AScompA[a] + 'Comp.Race').toLowerCase().indexOf("alchemical homunculus") !== -1) {
						DoTemplate("AScomp", "Remove", AScompA[a], true);
					}
				}
			},
			changeeval : function (lvlA) {
				var AScompA = isTemplVis('AScomp') ? What('Template.extras.AScomp').split(',') : false;
				if (!AScompA) return;
				for (var a = 1; a < AScompA.length; a++) {
					if (What(AScompA[a] + 'Comp.Race').toLowerCase().indexOf("alchemical homunculus") !== -1) {
						Value(AScompA[a] + "Comp.Use.HP.Max", Math.round(lvlA[1] * 5 + What("Int mod")));
						Value(AScompA[a] + "Comp.Use.Proficiency Bonus", ProficiencyBonusList[classes.totallevel - 1]);
					}
				}
			}
		},
		"subclassfeature6" : {
			name : "Alchemical Mastery",
			source : ["UA:A2", 7],
			minlevel : 6,
			description : desc([
				"I can enhance the spell I cast when I use alchemist's supplies as my spellcasting focus",
				"I then add my Int mod to one die roll for dealing acid or poison damage, or restoring HP"
			]),
			calcChanges : {
				atkCalc : [
					function (fields, v, output) {
						if (v.thisWeapon[3] && v.thisWeapon[4].indexOf("artificer-ua2") !== -1 && (/poison|acid/i).test(fields.Damage_Type)) {
							output.extraDmg += Math.max(Number(What("Int Mod")), 1);
						}
					},
					"Artificer spells that deal poison or acid damage which I cast while using alchemist's supplies as my spellcasting focus, have my Intelligence modifier (min 1) added to one damage die roll."
				],
				spellAdd : [
					function (spellKey, spellObj, spName) {
						if (spellObj.psionic || spName !== "artificer-ua2" || (/color spray|sleep/).test(spellKey)) return;
						var startDescr = spellObj.description;
						var toAdd = Math.max(Number(What("Int Mod")), 1);
						switch (spellKey) {
							case "cloudkill" :
								spellObj.description = spellObj.description.replace("obscured, difficult terrain", "obsc., dif. ter.; 1\xD7 +" + toAdd + " dmg");
								break;
							case "hunger of hadar" :
								spellObj.description = spellObj.description.replace(/all /i, '') + " (1\xD7 +" + toAdd + ")";
								break;
							case "healing spirit" :
								spellObj.description += " (+" + toAdd + " once)";
								break;
							case "vitriolic sphere" :
								spellObj.description = spellObj.description.replace('now and', 'now, ');
							default :
								if (genericSpellDmgEdit(spellKey, spellObj, "acid|poison", "Int", true, true)) return true;
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
			source : ["UA:A2", 7],
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
			description : "I have resistance to acid and poison damage, and I'm immune to the poisoned condition",
			dmgres : ["acid", "poison"],
			savetxt : { immune : ["poisoned condition"] }
		},
		"subclassfeature14.1" : {
			name : "Chemical Savant: Greater Restoration",
			source : ["UA:A2", 7],
			minlevel : 14,
			description : desc([
				"I can cast Greater Restoration without using a spell slot or needing material components ",
				"To do so, I have to use alchemist's supplies as my spellcasting focus"
			]),
			usages : 1,
			recovery : "long rest",
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
CreatureList["alchemical homunculus-uaa2"] = {
	name : "Alchemical Homunculus",
	source : ["UA:A2", 6],
	size : 5,
	type : "Construct",
	subtype : "",
	alignment : "Neutral",
	ac : 13,
	hp : 5,
	hd : [2, 4],
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
		range : "30 ft"
	}],
	features : [{
		name : "Creator",
		description : "The homunculus obeys the commands of its creator and has the same proficiency bonus. It taking its turn immediately after its creator, on the same initiative count. It only takes the Dodge action, unless its creator takes a bonus action to command to do otherwise, in which case it can only take the Acidic Spittle, Alchemical Salve, Dash, Disengage, or Help action."
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

// Add the Artillerist specialism
AddSubClass("artificer-ua2", "artillerist", {
	regExpSearch : /^(?=.*artillerist)(?!.*wizard).*$/i,
	subname : "Artillerist",
	fullname : "Artillerist",
	source : ["UA:A2", 7],
	spellcastingExtra : ["shield", "thunderwave", "scorching ray", "shatter", "fireball", "wind wall", "ice storm", "wall of fire", "cone of cold", "wall of force"],
	features : {
		"subclassfeature3" : {
			name : "Tools of the Trade",
			source : ["UA:A2", 7],
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
			}
		},
		"subclassfeature3.1" : {
			name : "Arcane Turret",
			source : ["UA:A2", 7],
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
				Value(prefix + 'Comp.Race', "Arcane Turret");
				Value(prefix + 'Comp.Type', "Construct");
			},
			removeeval : function () {
				var AScompA = isTemplVis('AScomp') ? What('Template.extras.AScomp').split(',') : false;
				if (!AScompA) return;
				for (var a = 1; a < AScompA.length; a++) {
					if (What(AScompA[a] + 'Comp.Race').toLowerCase().indexOf("arcane turret") !== -1) {
						DoTemplate("AScomp", "Remove", AScompA[a], true);
					}
				}
			},
			changeeval : function (lvlA) {
				var AScompA = isTemplVis('AScomp') ? What('Template.extras.AScomp').split(',') : false;
				if (!AScompA) return;
				for (var a = 1; a < AScompA.length; a++) {
					if (What(AScompA[a] + 'Comp.Race').toLowerCase().indexOf("arcane turret") !== -1) {
						Value(AScompA[a] + "Comp.Use.HP.Max", lvlA[1] * 5);
					}
				}
			}
		},
		"subclassfeature6" : {
			name : "Wand Prototype",
			source : ["UA:A2", 8],
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
				"class" : "artificer-ua2",
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
						if (!v.thisWeapon[3] || v.thisWeapon[4].indexOf("artificer-ua2") == -1) return;
						var artSp = CurrentSpells["artificer-ua2"];
						if (!artSp || !artSp.selectBo || !v.thisWeapon[3] || v.thisWeapon[4].indexOf("artificer-ua2") == -1 || artSp.selectCa.indexOf(v.thisWeapon[3]) !== -1) return;
						var artBoSp = CurrentSpells["artificer-ua2"].bonus.subclassfeature6.selection;
						if (artBoSp && artBoSp.indexOf(v.thisWeapon[3]) !== -1) {
							output.die = output.die.replace(/C/g, 1).replace(/B/g, 0).replace(/0.?d\d+/g, 0);
							output.extraDmg += Math.max(Number(What("Int Mod")), 1);
						}
					},
					"Cantrips cast through a wand infused by my Wand Prototype class feature get my Intelligence modifier added to their damage (minimum of +1) and are cast as if coming from a magic item (thus don't require any components nor scale with level)."
				],
				spellAdd : [
					function (spellKey, spellObj, spName, isDuplicate) {
						if (spName != "artificer-ua2" || isDuplicate || !CurrentSpells["artificer-ua2"]) return;
						var artBoSp = CurrentSpells["artificer-ua2"].bonus.subclassfeature6.selection;
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
			source : ["UA:A2", 8],
			minlevel : 14,
			description: "\n   My allies and I have half cover while within 10 ft of an arcane turret I created"
		}
	}
});
// Add the Artillerist's Arcane Turret
CreatureList["arcane turret"] = {
	name : "Arcane Turret",
	source : ["UA:A2", 7],
	size : 3,
	type : "Construct",
	subtype : "",
	alignment : "Neutral",
	ac : 18,
	hp : 15,
	hd : [0, 0],
	speed : "15 ft, climb 15 ft",
	scores : [10, 10, 10, 10, 10, 10], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
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
		modifiers : ["dc+oProf+oInt", "", false],
		tooltip : "The turret exhales fire in an adjacent 15-foot cone that the creator designate. Each creature in that area must make a Dexterity saving throw against the creator's spell save DC, taking 1d8 fire damage on a failed save or half as much damage on a successful one. The fire ignites any flammable objects in the area that aren't being worn or carried."
	}, {
		name : "Force Ballista",
		ability : 4,
		damage : [2, 8, "force"],
		range : "120 ft",
		description : "Creatures hit are pushed 5 ft away",
		modifiers : ["oProf+oInt", "", false],
		tooltip : "Make a range spell attack, originating from the turret, at one creature or object within 120 feet of it. On a hit, the target takes 2d8 force damage, and if the target is a creature, it is pushed up to 5 feet away from the turret."
	}, {
		name : "Detonate",
		ability : 4,
		damage : [3, 6, "force"],
		range : "10-ft radius",
		description : "Dex save, success - half damage; Destroys turret",
		modifiers : ["dc+oProf+oInt", "", false],
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

// Add the new spell
SpellsList["arcane weapon-uaa2"] = {
	name : "Arcane Weapon",
	classes : ["artificer-ua2"],
	source : ["UA:A2", 10],
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
MagicItemsList["boots of the winding path"] = {
	name : "Boots of the Winding Path",
	source : ["UA:A2", 9],
	type : "wondrous item",
	description : "While wearing these boots, I can teleport up to 15 ft as a bonus action to an unoccupied space I can see, as long as I occupied that space at some point during the current turn.",
	descriptionFull : "While wearing these boots, a creature can teleport up to 15 feet as a bonus action to an unoccupied space the creature can see. The creature must have occupied that space at some point during the current turn.",
	attunement : true,
	action : [["bonus action", ""]]
}
MagicItemsList["many-handed pouch"] = {
	name : "Many-Handed Pouch",
	source : ["UA:A2", 9],
	type : "wondrous item",
	description : "These 2-5 pouches all share one interdimensional space of the same capacity as a single pouch. Thus, reaching into any of the pouches allows access to the same storage space. A pouch only functions if it is within 100 miles of another pouch of its set.",
	descriptionFull : "The infused pouches all share one interdimensional space of the same capacity as a single pouch. Thus, reaching into any of the pouches allows access to the same storage space. A pouch operates as long as it is within 100 miles of another one of the pouches; the pouch is otherwise empty and won't accept any contents.\n   If this infusion ends, the items stored in the shared space move into one of the pouches, determined at random. The rest of the pouches become empty."
}
MagicItemsList["radiant weapon"] = {
	name : "Radiant Weapon",
	nameTest : "Radiant",
	source : ["UA:A2", 9],
	type : "weapon (any)",
	description : "This magic double-bladed scimitar adds a +1 on its attacks and damage. As a bonus action, I can start or stop it shedding light, bright in 30 ft and dim for another 30 ft. Once per short rest as a reaction when hit by a melee attack, I can blind the attacker until the end of its next turn unless it makes a Con save (my spell DC).",
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
		atkCalc : [
			function (fields, v, output) {
				if (v.isMeleeWeapon && (/radiant/i).test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[1] + 1;
				}
			},
			'If I include the word "Radiant" in the name of a weapon, it will be treated as the magic weapon Radiant Weapon. It has +1 to hit and damage and can be used to shed light or blind an attacker.'
		]
	}
}
MagicItemsList["returning weapon"] = {
	name : "Returning Weapon",
	nameTest : "Returning",
	source : ["UA:A2", 10],
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
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/thrown/i).test(fields.Description)) {
					v.theWea.isMagicWeapon = true;
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

// Set the Artificer class spell list
var SetArtificerSpells = function(){
	var artSp = [
		"acid splash",
		"dancing lights",
		"fire bolt",
		"guidance",
		"light",
		"mage hand",
		"mending",
		"message",
		"poison spray",
		"prestidigitation",
		"ray of frost",
		"resistance",
		"shocking grasp",
		"spare the dying",
		"thorn whip",
		// level 1
		"alarm",
		"cure wounds",
		"detect magic",
		"disguise self",
		"expeditious retreat",
		"false life",
		"grease",
		"identify",
		"jump",
		"longstrider",
		"sanctuary",
		"shield of faith",
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
		"rope trick",
		"see invisibility",
		"spider climb",
		// level 3
		"blink",
		"dispel magic",
		"elemental weapon",
		"fly",
		"gaseous form",
		"glyph of warding",
		"haste",
		"protection from energy",
		"revivify",
		"water breathing",
		"water walk",
		// level 4
		"arcane eye",
		"fabricate",
		"freedom of movement",
		"leomund's secret chest",
		"mordenkainen's faithful hound",
		"mordenkainen's private sanctum",
		"otiluke's resilient sphere",
		"stone shape",
		"stoneskin",
		// level 5
		"animate objects",
		"bigby's hand",
		"creation",
		"greater restoration",
		"wall of stone"
	];
	for (var a = 0; a < artSp.length; a++) {
		var aArtSp = SpellsList[artSp[a]];
		if(aArtSp && aArtSp.classes && aArtSp.classes.indexOf("artificer-ua2") === -1) aArtSp.classes.push("artificer-ua2");
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
	for (var a = 0; a < artMi.length; a++) {
		if (!MagicItemsList[artMi[a][0]]) console.println(artMi[a][0]);
	}
	var theObj = ClassList['artificer-ua2'].features["infuse item"];
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
				attunement : MagicItemsList[MI0][MI2].attunement ? MagicItemsList[MI0][MI2].attunement : MagicItemsList[MI0].attunement
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
		if (MI1) theObj[theILC].prereqeval = "classes.known['artificer-ua2'].level >= " + MI1;
		theObj.extrachoices.push(theI);
	};
}();
