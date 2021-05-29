var iFileName = "pub_20201117_TCoE.js";
RequiredSheetVersion("13.0.6");
// This file adds the content from Tasha's Cauldron of Everything to MPMB's Character Record Sheet

/*	ACKNOWLEDGEMENTS
	This file contains contributions from many different people over on the /r/mpmb subreddit and
	the MPMB Discord server.

	Many contributions have been reworked by Safety-Orange to fix bugs, make texts more uniform,
	adhere to MPMB's standards, and/or adhere to the latest syntax version.
	Combined with the fact that many contributions haven't been individually tracked (on GitHub),
	it is no longer possible to assign specific additions to a single person.

	Instead, here is a list of people (account names on GitHub) who made contributions,
	helped collect materials, or were otherwise essential to this script coming to fruition,
	in no particular order:
		- Nod_Hero#2046 (discord)
		- Smashman
		- Metacomet10
		- BraabHimself
		- AelarTheElfRogue
		- uhohspaghetti0
		- Undrhil
		- easyboy
		- SoggieWafflz
		- phelot
		- Cosaur
		- remcovandalen
		- Seneschal55
		- Gam90
		- CountVladmir
		- alastairmarchant
		- edimshuffling
		- githubtkompare
		- Holynight6

	Think you're missing from this list? Please let me know!
*/

// Define the source
SourceList.T = {
	name : "Tasha's Cauldron of Everything",
	abbreviation : "TCoE",
	group : "Primary Sources",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/tashas-cauldron-everything",
	date : "2020/11/17"
};

// Add Custom Lineage
RaceList["custom lineage"] = {
	regExpSearch : /^(?=.*custom)(?=.*lineage).*$/i,
	name : "Custom lineage",
	source : [["T", 8]],
	plural : "Custom lineages",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	scorestxt : "+2 to one ability score of my choice",
	eval : function() { AddString('Feat Note 1', 'Custom lineage bonus feat', '; '); },
	removeeval : function() { RemoveString('Feat Note 1', 'Custom lineage bonus feat'); },
	trait : "Custom Lineage (+2 to one ability score of my choice)" + desc([
		"Size: I am Small or Medium (my choice).",
		"Feat: I gain one feat of my choice for which I qualify.",
		"Variable Trait: I gain either darkvision with a range of 60 ft or proficiency with a skill of my choice. Use the Racial Options button to select either one."
	])
};
AddRacialVariant("custom lineage", "darkvision", {
	regExpSearch : /darkvision/i,
	source : [["T", 8]],
	vision : [["Darkvision", 60]],
	trait : "Custom Lineage (+2 to one ability score of my choice)" + desc([
		"Size: I am Small or Medium (my choice).",
		"Feat: I gain one feat of my choice for which I qualify.",
		"Variable Trait: I have darkvision with a range of 60 ft."
	])
});
AddRacialVariant("custom lineage", "skill proficiency", {
	regExpSearch : /skill proficiency/i,
	source : [["T", 8]],
	skillstxt : "Choose any one skill",
	trait : "Custom Lineage (+2 to one ability score of my choice)" + desc([
		"Size: I am Small or Medium (my choice).",
		"Feat: I gain one feat of my choice for which I qualify.",
		"Variable Trait: I have proficiency with a skill of my choice."
	])
});


// >>>>>>>>>>>>>>>>>>>>>>> //
// >>> Artificer Class >>> //
// >>>>>>>>>>>>>>>>>>>>>>> //
// [dupl_start] reprints from Eberron: Rising from the Last War (after 2020 errata)
if (!SourceList["E:RLW"]) {
	ClassList.artificer = {
		regExpSearch : /^(?=.*artificer)(?!.*wizard).*$/i,
		name : "Artificer",
		source : [["E:RLW", 54], ["T", 9]],
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
			primary : [true, false, ["Firearms"]]
		},
		equipment : "Artificer starting equipment:" +
			"\n \u2022 Any two simple weapons;" +
			"\n \u2022 A light crossbow and 20 bolts;" +
			"\n \u2022 Studded leather armor -or- scale mail;" +
			"\n \u2022 Thieves' tools and a dungeoneer's pack;" +
			"\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
		subclasses : ["Artificer Specialist", []],
		attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		spellcastingFactor : 2,
		spellcastingFactorRoundupMulti : true,
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
				source : [["E:RLW", 55], ["T", 11]],
				minlevel : 1,
				description : desc([
					"As an action, I use thieves/artisan's tools to give 1 property to a nonmagical tiny object:",
					" \u2022 Emit light (5-ft radius bright light, equal dim), an odor, or a nonverbal sound",
					" \u2022 Static visual effect on one surface, or emit a 6-second recorded message when tapped",
					"If I instill a property in more objects than I can have active, the oldest loses its property"
				]),
				additional : "Intelligence modifier of active objects",
				action : [["action", " (add/remove)"]],
				"infuse item" : {
					name : "Infuse Item",
					extraname : "Artificer 2",
					source : [["E:RLW", 57]],
					description : desc([
						"When I finish a long rest, I can turn nonmagical objects into magic items using my infusions",
						"I can attune to it immediately; If I infuse too many items, the oldest loses its magic",
						"The infusion lasts until my death + my Int mod in days, but ends if I unlearn the infusion",
						"Each infusion can only be used in one item at a time and only in appropriate items",
						"Whenever I gain an artificer level, I can replace an infusion I know with another",
						"I can use an infused item as a spellcasting focus"
					]),
					additional : levels.map(function (n) {
						return n < 2 ? "" : (n < 6 ? 4 : n < 10 ? 6 : n < 14 ? 8 : n < 18 ? 10 : 12) + " infusions known; max " + (n < 6 ? 2 : n < 10 ? 3 : n < 14 ? 4 : n < 18 ? 5 : 6) + " infused items";
					})
				},
				autoSelectExtrachoices : [{
					extrachoice : "infuse item",
					minlevel : 2
				}]
			},
			"spellcasting" : {
				name : "Spellcasting",
				source : [["E:RLW", 55], ["T", 11]],
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
							if (!spellObj.psionic && spName == "artificer" && spellObj.compMaterial === SpellsList[spellKey].compMaterial) {
								var extraFocus = classes.known.artificer.subclass.indexOf("artillerist") !== -1 && classes.known.artificer.level > 4 ? "my arcane firearm, " : classes.known.artificer.subclass.indexOf("armorer") !== -1 && classes.known.artificer.level > 2 ? "my arcane armor, " : "";
								spellObj.compMaterial = (spellObj.compMaterial ? spellObj.compMaterial + ".\n\nAlso a" : "A") + "lways requires my artificer spellcasting focus: thieves' tools, any set of artisan's tools I'm proficient with, " + extraFocus + "or an item infused by me.";
								if (GetFeatureChoice("classes", "artificer", "spellcasting", true).indexOf("don't change component column on spell sheet") != -1) {
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
							return false;
						},
						"My artificer spells always require me to use a spellcasting focus: thieves' tools, artisan's tools I'm proficient with, or an item infused by me."
					]
				},
				extrachoices : ["Don't change component column on spell sheet"],
				extraname : "Artificer Spellcasting",
				"don't change component column on spell sheet" : {
					name : "[Meta] Don't alter spell sheets",
					source : [["E:RLW", 55], ["T", 11]],
					description : "\n   The automation will not add M\u0192 to each artificer spell on the generated spell sheets"
				}
			},
			"infuse item" : {
				name : "Infuse Item",
				source : [["E:RLW", 57], ["T", 12]],
				minlevel : 2,
				description : '\n   Use the "Choose Feature" button above to add Artificer Infusions to the third page',
				additional : levels.map(function (n) {
					return n < 2 ? "" : (n < 6 ? 4 : n < 10 ? 6 : n < 14 ? 8 : n < 18 ? 10 : 12) + " infusions known; max " + (n < 6 ? 2 : n < 10 ? 3 : n < 14 ? 4 : n < 18 ? 5 : 6) + " infused items";
				}),
				extraname : "Artificer Infusion",
				extrachoices : ["Boots of the Winding Path (prereq: level 6 artificer)", "Enhanced Arcane Focus", "Enhanced Defense (armor)", "Enhanced Defense (shield)", "Enhanced Weapon", "Homunculus Servant", "Radiant Weapon (prereq: level 6 artificer)", "Repeating Shot", "Repulsion Shield (prereq: level 6 artificer)", "Resistant Armor (prereq: level 6 artificer)", "Returning Weapon"],
				extraTimes : levels.map(function (n) {
					return n < 2 ? 0 : n < 6 ? 4 : n < 10 ? 6 : n < 14 ? 8 : n < 18 ? 10 : 12;
				}),
				"boots of the winding path (prereq: level 6 artificer)" : {
					name : "Boots of the Winding Path",
					source : [["E:RLW", 62], ["T", 21]],
					description : desc([
						"The wearer can use a bonus action to teleport up to 15 ft to an unoccupied space it can see",
						"It must be a space that the wearer had occupied some time during the current turn"
					]),
					additional : "pair of boots; requires attunement",
					prereqeval : function(v) { return classes.known.artificer.level >= 6; },
					magicitemsAdd : ["Boots of the Winding Path"]
				},
				"enhanced arcane focus" : {
					name : "Enhanced Arcane Focus",
					source : [["E:RLW", 62], ["T", 21]],
					description : "\n   The holder has a bonus to spell attack rolls and ignores half cover with spell attacks",
					additional : levels.map(function (n) {
						return "rod/staff/wand; attunement; +" + (n < 10 ? 1 : 2);
					}),
					eval : function (lvl, chc) {
						AddMagicItem("Enhanced Arcane Focus +" + (classes.known.artificer.level < 10 ? 1 : 2));
					},
					removeeval : function (lvl, chc) {
						RemoveMagicItem("wand of the war mage, +1, +2, or +3");
					}
				},
				"enhanced defense (armor)" : {
					name : "Enhanced Defense",
					source : [["E:RLW", 62], ["T", 21]],
					description : "",
					additional : levels.map(function (n) {
						return "armor/shield; +" + (n < 10 ? 1 : 2) + " magical";
					}),
					prereqeval : function(v) {
						return GetFeatureChoice("classes", "artificer", "infuse item", true).indexOf("enhanced defense (shield)") == -1;
					},
					eval : function (lvl, chc) {
						AddMagicItem("Armor +" + (classes.known.artificer.level < 10 ? 1 : 2));
					},
					removeeval : function (lvl, chc) {
						RemoveMagicItem("armor, +1, +2, or +3");
					}
				},
				"enhanced defense (shield)" : {
					name : "Enhanced Defense",
					source : [["E:RLW", 62], ["T", 21]],
					description : "",
					additional : levels.map(function (n) {
						return "armor/shield; +" + (n < 10 ? 1 : 2) + " magical";
					}),
					prereqeval : function(v) {
						return GetFeatureChoice("classes", "artificer", "infuse item", true).indexOf("enhanced defense (armor)") == -1;
					},
					eval : function (lvl, chc) {
						AddMagicItem("Shield +" + (classes.known.artificer.level < 10 ? 1 : 2));
					},
					removeeval : function (lvl, chc) {
						RemoveMagicItem("shield, +1, +2, or +3");
					}
				},
				"enhanced weapon" : {
					name : "Enhanced Weapon",
					source : [["E:RLW", 62], ["T", 21]],
					description : "",
					additional : levels.map(function (n) {
						return "simple/martial weapon; +" + (n < 10 ? 1 : 2) + " magical";
					}),
					eval : function (lvl, chc) {
						AddMagicItem("Weapon +" + (classes.known.artificer.level < 10 ? 1 : 2));
					},
					removeeval : function (lvl, chc) {
						RemoveMagicItem("weapon, +1, +2, or +3");
					}
				},
				"homunculus servant" : {
					name : "Homunculus Servant",
					source : [["E:RLW", 62], ["T", 21]],
					description : desc([
						"The item I infuse becomes the heart of a homunculus that immediately forms around it",
						"I determine its appearance; It is friendly to me and my allies and obeys my commands",
						'See "Homunculus Servant" on a companion page to see its game statistics'
					]),
					additional : "gem or crystal of 100+ gp",
					action : [["bonus action", " (command)"]],
					creaturesAdd : [["Homunculus Servant"]],
					creatureOptions : [{
						name : "Homunculus Servant",
						source : [["E:RLW", 62], ["T", 22]],
						size : 5,
						type : "Construct",
						alignment : "Neutral",
						ac : 13,
						hp : 3,
						hd : [2, 4],
						hdLinked : ["artificer"],
						speed : "20 ft, fly 30 ft",
						scores : [4, 15, 12, 10, 10, 7],
						saves : ["", 4, "", "", "", ""],
						skills : {
							"perception" : 4,
							"stealth" : 4
						},
						damage_immunities : "poison",
						condition_immunities : "exhaustion, poisoned",
						senses : "Darkvision 60 ft",
						passivePerception : 14,
						languages : "understands the languages of its creator but can't speak",
						challengeRating : "0",
						proficiencyBonus : 2,
						proficiencyBonusLinked : true,
						attacksAction : 1,
						attacks : [{
							name : "Force Strike",
							ability : 4,
							damage : [1, 4, "force"],
							range : "30 ft",
							description : "",
							modifiers : ["", "Prof"],
							abilitytodamage : false,
							useSpellMod : "artificer"
						}],
						features : [{
							name : "Creator",
							description : "The homunculus obeys the commands of its creator and has the same proficiency bonus. It takes its turn immediately after its creator, on the same initiative count. It can move and take reactions on its own, but only takes the Dodge action on its turn unless its creator takes a bonus action to command it to take another action. If its creator is incapacitated, it can take any action, not just Dodge."
						}],
						traits : [{
							name : "Healing",
							description : "The homunculus regains 2d6 hit points whenever the Mending spell is cast on it. Its HP total is equal to 1 + its creator's artificer level + its creator's Intelligence modifier. If it or its creator dies, the homunculus vanishes, leaving its heart in its space."
						}, {
							name : "Evasion",
							description : "If the homunculus is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails. It can't use this trait if it's incapacitated."
						}],
						actions : [{
							name : "Channel Magic",
							description : "As a reaction, the homunculus delivers a spell cast by its creator that has a range of touch. The homunculus must be within 120 ft of its creator to do so."
						}],
						header : "Construct",
						calcChanges : {
							hp : function (totalHD, HDobj, prefix) {
								if (!classes.known.artificer) return;
								var intMod = Number(What('Int Mod'));
								var artLvl = classes.known.artificer.level;
								HDobj.alt.push(1 + intMod + artLvl);
								HDobj.altStr.push(" = 1 as a base\n + " + intMod + " from its creator's Intelligence modifier\n + " + artLvl + " from its creator's artificer level");
							},
							setAltHp : true,
							hpForceRecalc : true
						}
					}]
				},
				"radiant weapon (prereq: level 6 artificer)" : {
					name : "Radiant Weapon",
					source : [["E:RLW", 62], ["T", 22]],
					description : desc([
						"The weapon has a +1 bonus to attack and damage rolls made with it and it sheds light",
						"As a bonus action, its wielder can start/stop the light, 30-ft radius bright + 30 ft dim light",
						"The weapon has 4 charges, regaining 1d4 expended charges daily at dawn",
						"As a reaction when hit by an attack, the wielder can expend 1 charge to blind its attacker",
						"The attacker makes a Con save (my spell save DC) or is blinded until its next turn ends"
					]),
					additional : "simple/martial weapon; requires attunement",
					prereqeval : function(v) { return classes.known.artificer.level >= 6; },
					magicitemsAdd : ["Radiant Weapon"]
				},
				"repeating shot" : {
					name : "Repeating Shot",
					source : [["E:RLW", 62], ["T", 22]],
					description : desc([
						"The weapon requiring ammunition has a +1 bonus to attack and damage rolls made with it",
						"It magically produces one piece of ammunition whenever it is used to make a ranged attack",
						"Thus, it doesn't require ammunition and ignores the loading property if it has it"
					]),
					additional : "weapon with ammo; requires attunement",
					magicitemsAdd : ["Repeating Shot"]
				},
				"repulsion shield (prereq: level 6 artificer)" : {
					name : "Repulsion Shield",
					source : [["E:RLW", 63], ["T", 23]],
					description : desc([
						"The shield gives its wearer an extra +1 bonus to AC; It has 4 charges, regaining 1d4 daily",
						"As a reaction when hit in melee, the wearer can use 1 charge to push the attacker 15 ft"
					]),
					additional : "shield; requires attunement",
					prereqeval : function(v) { return classes.known.artificer.level >= 6; },
					magicitemsAdd : ["Repulsion Shield"]
				},
				"resistant armor (prereq: level 6 artificer)" : {
					name : "Resistant Armor",
					source : [["E:RLW", 63], ["T", 23]],
					description : desc([
						"The armor gives its wearer resistance to one type of damage, chosen at the time of infusion",
						"Choose from: acid,	cold, fire, force, lightning, necrotic, poison, psychic, radiant, or thunder"
					]),
					additional : "suit of armor; requires attunement",
					prereqeval : function(v) { return classes.known.artificer.level >= 6; },
					magicitemsAdd : ["Armor of Resistance"]
				},
				"returning weapon" : {
					name : "Returning Weapon",
					source : [["E:RLW", 63], ["T", 23]],
					description : "After being used for a ranged attack, the weapon returns immediately; +1 magical bonus",
					additional : "weapon with the thrown property",
					magicitemsAdd : ["Returning Weapon"]
				}
			},
			"the right tool for the job" : {
				name : "The Right Tool for the Job",
				source : [["E:RLW", 57], ["T", 13]],
				minlevel : 3,
				description : "\n   In 1 hour (during a rest) I can create a set of artisan's tools that last until I do so again",
				additional : "using thieves' or artisan's tools"
			},
			"subclassfeature3" : {
				name : "Artificer Specialist",
				source : [["E:RLW", 57], ["T", 13]],
				minlevel : 3,
				description : desc([
					'Choose a specialism and put it in the "Class" field on the first page',
					"Choose either alchemist, artillerist, or battle smith"
				])
			},
			"tool expertise" : {
				name : "Tool Expertise",
				source : [["E:RLW", 57], ["T", 13]],
				minlevel : 6,
				description : " [expertise with all tools I'm proficient with]",
				skillstxt : "Expertise with all tools I'm proficient with",
				eval : function () { Checkbox('Too Exp', true); },
				removeeval : function () { Checkbox('Too Exp', false); }
			},
			"flash of genius" : {
				name : "Flash of Genius",
				source : [["E:RLW", 57], ["T", 13]],
				minlevel : 7,
				description : "\n   As a reaction when I or another in 30 ft make a check/save, I can add my Int mod to it",
				action : [["reaction", ""]],
				usages : "Intelligence modifier per ",
				usagescalc : "event.value = Math.max(1, What('Int Mod'));",
				recovery : "long rest"
			},
			"magic item adept" : {
				name : "Magic Item Adept",
				source : [["E:RLW", 57], ["T", 13]],
				minlevel : 10,
				description : "\n   It takes me half the normal time and gold to craft common and uncommon magic items",
				additional : levels.map(function (n) {
					return n < 10 ? "" : "attune to " + (n < 14 ? 4 : n < 18 ? 5 : 6) + " magic items";
				})
			},
			"spell-storing item" : {
				name : "Spell-Storing Item",
				source : [["E:RLW", 58], ["T", 13]],
				minlevel : 11,
				description : desc([
					"When I finish a long rest, I can infuse a 1st-/2nd-level artificer spell into an item I touch",
					"It has to be a weapon or spellcasting focus for me; Stored spells are lost if I do this again",
					"The spell must have a casting time of 1 action, but I need not have it prepared",
					"A creature holding an infused item can use an action to cast the spell, using my abilities"
				]),
				additional : "cast stored spell",
				usages : "2\u00D7 Int mod per ",
				usagescalc : "event.value = Math.max(2, Number(What('Int Mod')) * 2);",
				recovery : "long rest"
			},
			"magic item savant" : {
				name : "Magic Item Savant",
				source : [["E:RLW", 58], ["T", 14]],
				minlevel : 14,
				description : " [ignore class/race/spell/level attune require.]"
			},
			"soul of artifice" : {
				name : "Soul of Artifice",
				source : [["E:RLW", 58], ["T", 14]],
				minlevel : 20,
				description : " [+1 on all saves per attuned magic item]\n   As a reaction when I'm reduced to 0 HP, I can end one infusion to drop to 1 HP instead",
				action : [["reaction", ""]],
				savetxt : {
					text : ["+1 to all saves per attuned magic item"]
				}
			}
		},
		prereqLvl6 : function(v) { return classes.known.artificer.level >= 6; },
		prereqLvl10 : function(v) { return classes.known.artificer.level >= 10; },
		prereqLvl14 : function(v) { return classes.known.artificer.level >= 14; },
	};

	// Set the Artificer infusion list for Replicate Magic Item
	RunFunctionAtEnd(function() {
		var artMi = [
			// 2nd-level artificer
			["alchemy jug", 2],
			["bag of holding", 2],
			["cap of water breathing", 2],
			["goggles of night", 2],
			["rope of climbing", 2],
			["sending stones", 2],
			["wand of magic detection", 2],
			["wand of secrets", 2],
			// 6th-level artificer
			["boots of elvenkind", 6],
			["cloak of elvenkind", 6],
			["cloak of the manta ray", 6],
			["eyes of charming", 6],
			["gloves of thievery", 6],
			["lantern of revealing", 6],
			["pipes of haunting", 6],
			["ring of water walking", 6],
			// 10th-level artificer
			["boots of striding and springing", 10],
			["boots of the winterlands", 10],
			["bracers of archery", 10],
			["brooch of shielding", 10],
			["cloak of protection", 10],
			["eyes of the eagle", 10],
			["gauntlets of ogre power", 10],
			["gloves of missile snaring", 10],
			["gloves of swimming and climbing", 10],
			["hat of disguise", 10],
			["headband of intellect", 10],
			["helm of telepathy", 10],
			["medallion of thoughts", 10],
			["necklace of adaptation", 10], // TCoE addition
			["periapt of wound closure", 10],
			["pipes of the sewers", 10],
			["quiver of ehlonna", 10],
			["ring of jumping", 10],
			["ring of mind shielding", 10],
			["slippers of spider climbing", 10],
			["ventilating lung", 10],
			["winged boots", 10],
			// 14th-level artificer
			["amulet of health", 14],
			["arcane propulsion arm", 14],
			["belt of giant strength", 14, "hill (str 21, rare)"],
			["boots of levitation", 14],
			["boots of speed", 14],
			["bracers of defense", 14],
			["cloak of the bat", 14],
			["dimensional shackles", 14],
			["gem of seeing", 14],
			["horn of blasting", 14],
			["ring of free action", 14],
			["ring of protection", 14],
			["ring of the ram", 14]
		];
		// add all common items (except potions and scrolls)
		for (var mi in MagicItemsList) {
			var aMI = MagicItemsList[mi];
			if (aMI.type && !(/potion|scroll/i).test(aMI.type) &&
				( (!aMI.rarity && aMI.choices) || (aMI.rarity && aMI.rarity.toLowerCase() === "common") )
			) {
				if (aMI.choices) {
					for (var c = 0; c < aMI.choices.length; c++) {
						var choiceNmLC = aMI.choices[c].toLowerCase();
						var aMIchoice = aMI[choiceNmLC];
						// skip if not common rarity or a potion or a scroll
						if (!aMIchoice || !aMIchoice.rarity || aMIchoice.rarity.toLowerCase() !== "common" || (/potion|scroll/i).test(aMIchoice.type)) continue;
						artMi.push([mi, 0, choiceNmLC]);
					}
				} else {
					artMi.push([mi]);
				}
			}
		}
		var getLetterRange = function(str) {
			var iCharNr = removeDiacritics(str[0].toLowerCase()).charCodeAt(0) - 97;
			var oOpt = {
				"A-F" : ("f").charCodeAt(0) - 97,
				"G-Q" : ("q").charCodeAt(0) - 97,
				"R-Z" : ("z").charCodeAt(0) - 97,
			}
			for (var sRng in oOpt) {
				if (iCharNr <= oOpt[sRng]) return sRng;
			}
			return sRng; // higher than the last, so just return the last
		};
		var theObj = ClassList.artificer.features["infuse item"];
		for (var a = 0; a < artMi.length; a++) {
			var MI0 = artMi[a][0];
			var MI1 = artMi[a][1];
			var MI2 = artMi[a][2];
			var anArtMi = MagicItemsList[MI0];
			if (!anArtMi) continue;
			if (MI2 && anArtMi[MI2]) {
				anArtMi = {
					name : anArtMi[MI2].name ? anArtMi[MI2].name : anArtMi.name + " [" + MI2.capitalize() + "]",
					rarity : anArtMi[MI2].rarity ? anArtMi[MI2].rarity : anArtMi.rarity,
					source : anArtMi[MI2].source ? anArtMi[MI2].source : anArtMi.source,
					attunement : anArtMi[MI2].attunement !== undefined ? anArtMi[MI2].attunement : anArtMi.attunement
				}
			}
			var theI = anArtMi.name + (MI1 ? " (prereq: level " + MI1 + " artificer)" : "");
			var theILC = theI.toLowerCase();
			if (theObj[theILC]) continue;
			theObj[theILC] = {
				name : anArtMi.name,
				description : "",
				source : anArtMi.source,
				magicitemsAdd : [anArtMi.name],
				additional : anArtMi.attunement ? "requires attunement" : undefined,
				prereqeval : MI1 && MI1 > 2 ? ClassList.artificer["prereqLvl" + MI1] : undefined,
				submenu : "Replicate Magic Item" + (MI1 ? " (prereq: level " + (" "+MI1).slice(-2) + " artificer)" : " (common magic items) [" + getLetterRange(anArtMi.name) + "]")
			};
			theObj.extrachoices.push(theI);
		};
	});

	// Add the Alchemist specialism
	AddSubClass("artificer", "alchemist", {
		regExpSearch : /^(?=.*alchemist)(?!.*wizard).*$/i,
		subname : "Alchemist",
		fullname : "Alchemist",
		source : [["E:RLW", 58], ["T", 14]],
		features : {
			"subclassfeature3" : {
				name : "Tools Proficiency",
				source : [["E:RLW", 58], ["T", 14]],
				minlevel : 3,
				description : " [proficient with alchemist's supplies]",
				toolProfs : ["Alchemist's supplies"],
				spellcastingExtra : ["healing word", "ray of sickness", "flaming sphere", "melf's acid arrow", "gaseous form", "mass healing word", "blight", "death ward", "cloudkill", "raise dead"]
			},
			"subclassfeature3.1" : {
				name : "Experimental Elixir",
				source : [["E:RLW", 58], ["T", 14]],
				minlevel : 3,
				description : desc([
					"When I finish a long rest I can produce a number of elixirs in empty flasks I touch",
					"Also, as an action, I can expend a spell slot to create one elixir in a touched empty flask",
					"I need alchemist supplies on my person to do this; An elixir lasts until my next long rest",
					"For their effects, see the experimental elixir table on a Notes page; They work like potions"
				]),
				additional : levels.map(function (n) {
					return n < 3 ? "" : "create " + (n < 6 ? 1 : n < 15 ? 2 : 3) + " elixir" + (n < 6 ? "" : "s") + " after finishing a long rest";
				}),
				action : [["action", ""]],
				toNotesPage : [{
					name : "Experimental Elixir Table",
					note : [
						"Whenever I finish a long rest, I can magically produce a number of experimental elixir in empty flasks I touch. I can create one at 3rd level, two at 6th level, and three at 15th level.",
						"Creating an experimental elixir requires me to have alchemist's supplies on my person, and any elixir created like this lasts until it is drunk or until the end of my next long rest.",
						"I can create additional experimental elixirs by expending a spell slot of 1st level or higher for each one. When I do so, I use my action to create the elixir in an empty flask I touch.",
						"As an action, a creature can drink the elixir or administer it to an incapacitated creature.",
						"The effect of an elixir when someone drinks it is found on the table below. Roll to determine the effect for each elixir I create when finishing a long rest. I can choose the effect from the table for those created by expending a spell slot.",
						"\n  D6\tEFFECT",
						"1\tHealing: The drinker regains a number of hit points equal to 2d4 + my Intelligence modifier.",
						"2\tSwiftness: The drinker's walking speed increases by 10 ft for 1 hour.",
						"3\tResilience: The drinker gains a +1 bonus to AC for 10 minutes.",
						"4\tBoldness: The drinker can roll a d4 and add the number rolled to every attack roll and saving throw they make for the next minute.",
						"5\tFlight: The drinker gains a flying speed of 10 ft for 10 minutes.",
						"6\tTransformation: The drinker's body is transformed as if by the alter self spell. The drinker determines the transformation caused by the spell, the effects of which last for 10 minutes."
					]
				}]
			},
			"subclassfeature5" : {
				name : "Alchemical Savant",
				source : [["E:RLW", 58], ["T", 15]],
				minlevel : 5,
				description : desc([
					"When I cast spells using alchemist's supplies as my spellcasting focus, I can enhance them",
					"I add my Int mod to one roll of acid, fire, necrotic, or poison damage, or restoring HP"
				]),
				calcChanges : {
					atkCalc : [
						function (fields, v, output) {
							if (v.thisWeapon[3] && v.thisWeapon[4].indexOf("artificer") !== -1 && (/acid|fire|necrotic|poison/i).test(fields.Damage_Type)) {
								output.extraDmg += Math.max(Number(What("Int Mod")), 1);
							}
						},
						"Artificer spells that deal acid, fire, necrotic, or poison damage which I cast while using alchemist's supplies as my spellcasting focus, have my Intelligence modifier (min 1) added to one damage die roll."
					],
					spellAdd : [
						function (spellKey, spellObj, spName) {
							if (spellObj.psionic || spName !== "artificer" || (/color spray|sleep/).test(spellKey)) return;
							var startDescr = spellObj.description;
							var toAdd = Math.max(Number(What("Int Mod")), 1);
							if ((/healing spirit|aura of vitality/i).test(spellKey)) {
								spellObj.description += " (+" + toAdd + " once)";
								return true;
							} else if (genericSpellDmgEdit(spellKey, spellObj, "acid|fire|necro\\.?|necrotic|poison", toAdd, true, true)) {
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
						"Artificer spells I cast using alchemist's supplies as my spellcasting focus, have my Intelligence modifier (min 1) added to one die rolled for dealing acid, fire, necrotic, or poison damage, or when restoring hit points."
					]
				}
			},
			"subclassfeature9" : {
				name : "Restorative Reagents",
				source : [["E:RLW", 59], ["T", 15]],
				minlevel : 9,
				description : desc([
					"Drinking my experimental elixirs now also grants 2d6 + my Int mod in temp HP (min 1)",
					"I can cast Lesser Restoration with alchemist's supplies without a spell slot (Int mod times)"
				]),
				usages : "Int mod per ",
				usagescalc : "event.value = Math.max(1, What('Int Mod'));",
				recovery : "long rest",
				limfeaname : "Restorative Reagents: Lesser Restoration",
				spellcastingBonus : {
					name : "Restorative Reagents",
					spells : ["lesser restoration"],
					selection : ["lesser restoration"],
					firstCol : "Sp"
				},
				spellChanges : {
					"lesser restoration" : {
						components : "V,S,M\u0192",
						compMaterial : "Alchemist's supplies",
						changes : "When using my Restorative Reagents class feature, I can cast Lesser Restoration a number of times per long rest equal to my Intelligence modifier. To do so, I have to use alchemist's supplies as my spellcasting focus."
					}
				}
			},
			"subclassfeature15" : {
				name : "Chemical Mastery",
				source : [["E:RLW", 59], ["T", 15]],
				minlevel : 15,
				description : " [each spell 1\xD7 per long rest]" + desc([
					"I have resistance to acid and poison damage and immunity to being poisoned",
					"I can cast Greater Restoration and Heal each once per long rest without a spell slot",
					"I need alchemist's supplies as a focus for it, but the spells require no material components"
				]),
				dmgres : ["Acid", "Poison"],
				savetxt : { immune : ["poisoned condition"] },
				extraLimitedFeatures : [{
					name : "Chemical Mastery: Greater Restoration",
					usages : 1,
					recovery : "long rest"
				}, {
					name : "Chemical Mastery: Heal",
					usages : 1,
					recovery : "long rest"
				}],
				spellcastingBonus : {
					name : "Chemical Mastery",
					spells : ["greater restoration", "heal"],
					selection : ["greater restoration", "heal"],
					firstCol : "oncelr",
					times : 2
				},
				spellChanges : {
					"greater restoration" : {
						components : "V,S,M\u0192",
						compMaterial : "Alchemist's supplies",
						description : "Reduce exhaustion 1 lvl or end charm, petrify, curse, one ability score reduction, or max HP reduction",
						changes : "When using my Chemical Mastery class feature and alchemist's supplies as my spellcasting focus, I can cast Greater Restoration once per long rest without using a spell slot or requiring other material components."
					},
					"heal" : {
						components : "V,S,M\u0192",
						compMaterial : "Alchemist's supplies",
						description : "1 living creature heals 70 HP and is cured of blindness, deafness, and all diseases",
						changes : "When using my Chemical Mastery class feature and alchemist's supplies as my spellcasting focus, I can cast Heal once per long rest without using a spell slot."
					}
				}
			}
		}
	});

	// Add the Artillerist specialism
	AddSubClass("artificer", "artillerist", {
		regExpSearch : /^(?=.*artillerist)(?!.*wizard).*$/i,
		subname : "Artillerist",
		fullname : "Artillerist",
		source : [["E:RLW", 59], ["T", 17]],
		features : {
			"subclassfeature3" : {
				name : "Tools Proficiency",
				source : [["E:RLW", 59], ["T", 17]],
				minlevel : 3,
				description : " [proficient with woodcarver's tools]",
				toolProfs : ["Woodcarver's tools"],
				spellcastingExtra : ["shield", "thunderwave", "scorching ray", "shatter", "fireball", "wind wall", "ice storm", "wall of fire", "cone of cold", "wall of force"]
			},
			"subclassfeature3.1" : {
				name : "Eldritch Cannon",
				source : [["E:RLW", 59], ["T", 17]],
				minlevel : 3,
				description : desc([
					"As an action, I can use woodcarver's or smith's tools to create an eldritch cannon in 5 ft",
					"I can do this once per long rest, or by expending a spell slot (SS 1+) to create one cannon",
					"I decide its size (Small/Tiny), appearance, type: flamethrower, force ballista, or protector",
					"It disappears after 1 hour, when reduced to 0 HP, or if I dismiss it as an action",
					"As a bonus action when within 60 ft of it, I can activate it to move and do its action",
					"I can't have multiple cannons; Select \"Eldritch Cannon\" on a companion page for its stats"
				]),
				usages : 1,
				recovery: "long rest",
				altResource : "SS 1+",
				additional : levels.map(function(n) {
					return n < 3 ? "" : n < 15 ? "create 1 cannon" : "create 2 cannons";
				}),
				action: [["action", " (summon/dismiss)"], ["bonus action", " (activate)"]],
				creaturesAdd : [["Eldritch Cannon"]],
				creatureOptions : [{
					name : "Eldritch Cannon",
					source : [["E:RLW", 59], ["T", 17]],
					size : [4, 5],
					type : "Object",
					alignment : "",
					ac : 18,
					hp : 5,
					hd : ["", ""],
					speed : "15 ft, climb 15 ft",
					scores : [10, 10, 10, 10, 10, 10],
					damage_immunities : "poison, psychic",
					passivePerception : 10,
					senses : "",
					challengeRating : "1",
					proficiencyBonus : 2,
					proficiencyBonusLinked : true,
					attacksAction : 0,
					attacks : [{
						name : "Flamethrower",
						ability : 4,
						damage : [2, 8, "fire"],
						range : "15-ft cone",
						description : "Dex save, success - half damage; Unattended flammable objects ignite",
						dc : true,
						useSpellMod : "artificer",
						abilitytodamage : false,
						tooltip : "The cannon exhales fire in an adjacent 15-ft cone that its creator designates. Each creature in that area must make a Dexterity saving throw against its creator's artificer spell save DC, taking 2d8 fire damage on a failed save or half as much damage on a successful one. The fire ignites any flammable objects in the area that aren't being worn or carried."
					}, {
						name : "Force Ballista",
						ability : 4,
						damage : [2, 8, "force"],
						range : "120 ft",
						description : "Creature hit is pushed 5 ft away",
						useSpellMod : "artificer",
						abilitytodamage : false,
						tooltip : "The cannon's creator makes a ranged spell attack, originating from the cannon, at one creature or object within 120 ft of it. On a hit, the target takes 2d8 force damage, and if the target is a creature, it is pushed up to 5 ft away from the cannon."
					}, {
						name : "Detonate",
						ability : 4,
						damage : [3, 8, "force"],
						range : "20-ft radius",
						description : "Dex save, success - half damage; Destroys cannon",
						dc : true,
						useSpellMod : "artificer",
						abilitytodamage : false,
						tooltip : "As an action, its creator can command the cannon to deto­nate if its creator is within 60 ft of it. Doing so destroys the cannon and forces each creature within 20 ft of it to make a Dexterity saving throw against its creator's artificer spell save DC, taking 3d8 force damage on a failed save or half as much damage on a successful one."
					}],
					features : [{
						name : "Healing",
						description : "The cannon regains 2d6 HP whenever Mending is cast on it."
					}, {
						name : "Cannon Type",
						description : "Upon creation, the creator decides what type of cannon it is: Flamethrower, Force Ballista, or Protector. What feature/attack it can use depends on its type."
					}, {
						name : "Protector",
						description : "The cannon emits a burst of positive energy that grants itself and each creature of its creator's choice within 10 ft of it a number of temporary hit points equal to 1d8 + its creator's Intelligence modifier (minimum of +1)."
					}],
					traits : [{
						name: "Creator",
						description: "As an object, the cannon only acts when activated by its creator, uses its creator's artificer spell attack and save DC, and has five times the artificer level in HP. It disappears after 1 hour, when reduced to 0 HP, or when its creator dismisses it as an action."
					}, {
						name: "Activation",
						description: "The creator of the cannon can activate it as a bonus action while within 60 ft of it. Once activated, the cannon does as instructed, moves and uses the action associated with its type: flamethrower attack, force ballista attack, or protector feature."
					}, {
						name: "Detonate (Artillerist 9)",
						minlevel : 9,
						description: "The creator of the cannon, can use an action to detonate the cannon when within 60 ft of it, see the attack section. The cannon's attacks now deal 3d8 damage.",
						eval : function(prefix, lvl) {
							// add the Detonate attack entry
							Value(prefix + "Comp.Use.Attack.3.Weapon Selection", "Detonate");
							// Upgrade the damage for the attacks
							for (var i = 1; i <= 2; i++) {
								Value(prefix + "BlueText.Comp.Use.Attack." + i + ".Damage Die", "3d8");
							}
						},
						removeeval : function(prefix, lvl) {
							// remove the Detonate attack entry
							Value(prefix + "Comp.Use.Attack.3.Weapon Selection", "");
							// Reset the damage for the attacks
							for (var i = 1; i <= 2; i++) {
								Value(prefix + "BlueText.Comp.Use.Attack." + i + ".Damage Die", "2d8");
							}
						}
					}, {
						name: "Shimmering Field (Artillerist 15)",
						minlevel : 15,
						description: "The creator of the cannon and their allies have half cover while within 10 ft of the cannon."
					}],
					minlevelLinked : ["artificer"],
					header : "Object",
					calcChanges : {
						hp : function (totalHD, HDobj, prefix) {
							if (!classes.known.artificer) return;
							var artLvl = classes.known.artificer.level;
							HDobj.alt.push(5 * artLvl);
							HDobj.altStr.push(" = 5 \xD7 " + artLvl + " from five times its creator's artificer level");
						},
						setAltHp : true
					},
					eval : function(prefix, lvl) {
						// remove the Detonate attack if adding this creature before artificer level 9
						if (lvl[0] < 9) Value(prefix + "Comp.Use.Attack.3.Weapon Selection", "");
					}
				}]
			},
			"subclassfeature5" : {
				name : "Arcane Firearm",
				source : [["E:RLW", 59], ["T", 18]],
				minlevel : 5,
				description : " [lasts until I use this feature again]" + desc([
					"After a long rest, I can use woodcarver's tools to enhance a wand, staff, or rod",
					"If I use this as my spellcasting focus for an artificer spell, I add +1d8 to one damage"
				]),
				calcChanges : {
					atkAdd : [
						function (fields, v) {
							if (v.thisWeapon[3] && v.thisWeapon[4].indexOf("artificer") !== -1) {
								fields.Damage_Die = fields.Damage_Die.replace(/D/g, 'd');
								var d8Regex = /(\d+)d8/;
								if (fields.Damage_Die.indexOf('Bd8') != -1) {
									fields.Damage_Die = fields.Damage_Die.replace('Bd8', 'Cd8');
								} else if (fields.Damage_Die.indexOf('Cd8') != -1) {
									fields.Damage_Die = fields.Damage_Die.replace('Cd8', 'Qd8');
								} else if (d8Regex.test(fields.Damage_Die)) {
									fields.Damage_Die = fields.Damage_Die.replace(d8Regex, Number(fields.Damage_Die.replace(d8Regex, '$1')) + 1 + 'd8');
								} else if (v.thisWeapon[3] == "eldritch blast") {
									fields.Description += (fields.Description ? '; ' : '') + "One ray +1d8 dmg";
								} else {
									fields.Damage_Die += '+1d8';
								}
							}
						},
						"If I use my arcane firearm as a spellcasting focus for an artificer spell, I can add +1d8 to one of the spell's damage rolls."
					],
					spellAdd : [
						function (spellKey, spellObj, spName) {
							if (spellObj.psionic || spName !== "artificer") return;
							return genericSpellDmgEdit(spellKey, spellObj, "acid|bludg\\.?|bludgeoning|cold|fire|force|lightn\\.?|lightning|necro\\.?|necrotic|pierc\\.?|piercing|poison|psychic|radiant|slash\\.?|slashing|thunder", "1d8", true, true);
						},
						"If I use my arcane firearm as a spellcasting focus for an artificer spell, I can add +1d8 to one of the spell's damage rolls."
					]
				}
			},
			"subclassfeature9" : {
				name : "Explosive Cannon",
				source : [["E:RLW", 60], ["T", 18]],
				minlevel : 9,
				description : "\n   My eldritch cannons deal +1d8 damage; As an action, I can detonate a cannon in 60 ft",
				action : [["action", "Eldritch Cannon (detonate)"]]
			},
			"subclassfeature15" : {
				name : "Fortified Position",
				source : [["E:RLW", 60], ["T", 18]],
				minlevel : 15,
				description : " [cannons grant half cover in 10 ft to allies]" + desc([
					"I can now have two cannons at the same time and activate both with one bonus action",
					"I can create 2 eldritch cannons with the same action (still only one with a spell slot)"
				])
			}
		}
	});

	// Add the Battle Smith specialism
	AddSubClass("artificer", "battle smith", {
		regExpSearch : /^(?=.*battle)(?=.*smith)(?!.*wizard).*$/i,
		subname : "Battle Smith",
		fullname : "Battle Smith",
		source : [["E:RLW", 60], ["T", 18]],
		attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
		features : {
			"subclassfeature3" : {
				name : "Battle Ready \u0026 Tool Proficiency",
				source : [["E:RLW", 61], ["T", 19]],
				minlevel : 3,
				description : desc([
					"I gain proficiency with martial weapons and smith's tools",
					"I can use my Intelligence modifier instead of Strength or Dexterity for magic weapons"
				]),
				toolProfs : ["Smith's tools"],
				spellcastingExtra : ["heroism", "shield", "branding smite", "warding bond", "aura of vitality", "conjure barrage", "aura of purity", "fire shield", "banishing smite", "mass cure wounds"],
				weaponProfs : [false, true],
				calcChanges : {
					atkAdd : [
						function (fields, v) {
							if (!v.isSpell && (v.theWea.isMagicWeapon || v.thisWeapon[1]) && fields.Mod > 0 && fields.Mod < 3 && Number(What("Int")) > Number(What(fields.Mod == 1 ? "Str" : "Dex"))) {
								fields.Mod = 4;
							}
						},
						'I can use my Intelligence modifier instead of Strength or Dexterity for the attack and damage rolls of magic weapons.'
					]
				}
			},
			"subclassfeature3.1" : {
				name : "Steel Defender",
				source : [["E:RLW", 61], ["T", 19]],
				minlevel : 3,
				description : desc([
					"When I end a long rest, I can use smith's tools to create a steel defender",
					"I determine its appearance; It obeys my commands and it acts on my initiative, after me",
					"Unless I use a bonus action to command it, it only takes the Dodge action on its turn",
					"It can take reactions and move on its turn even if I don't command it",
					"I can't have multiple at once; Select \"Steel Defender\" on a companion page for its stats"
				]),
				action : [["bonus action", " (command)"], ["action", " (restore)"]],
				creaturesAdd : [["Steel Defender"]],
				creatureOptions : [{
					name : "Steel Defender",
					source : [["E:RLW", 61], ["T", 19]],
					size : 3,
					type : "Construct",
					alignment : "Neutral",
					ac : 15,
					hp : 12,
					hd : [2, 8],
					hdLinked : ["artificer"],
					speed : "40 ft",
					scores : [14, 12, 14, 4, 10, 6],
					saves : ["", 3, 4, "", "", ""],
					skills : {
						"athletics" : 4,
						"perception" : 4
					},
					damage_immunities : "poison",
					condition_immunities : "charmed, exhaustion, poisoned",
					passivePerception : 14,
					senses : "Darkvision 60 ft",
					languages : "understands the languages of its creator but can't speak",
					challengeRating : "1",
					proficiencyBonus : 2,
					proficiencyBonusLinked : true,
					attacksAction : 1,
					attacks : [{
						name : "Force-Empowered Rend",
						ability : 4,
						damage : [1, 8, "piercing"],
						range : "Melee (5 ft)",
						description : "",
						modifiers : ["", "Prof"],
						abilitytodamage : false,
						useSpellMod : "artificer"
					}, {
						name : "Deflect Attack (reaction)",
						ability : 0,
						damage : [1, 4, "force"],
						range : "Melee (5 ft)",
						description : "After using the reaction, the attacker takes this damage, no attack roll required",
						modifiers : ["-Prof", "oInt"],
						abilitytodamage : false
					}],
					features : [{
						name : "Creator",
						description : "The steel defender obeys the commands of its creator and has the same proficiency bonus. It takes its turn immediately after its creator, on the same initiative count. It can move and take reactions on its own, but only takes the Dodge action on its turn unless its creator takes a bonus action to command it to take another action. If its creator is incapacitated, it can take any action, not just Dodge."
					}, {
						name : "Vigilant",
						description : "The " + (typePF ? "" : "steel ") + "defender can't be surprised."
					}],
					traits : [{
						name : "Healing",
						description : "The steel defender regains 2d6 HP whenever the Mending spell is cast on it. Its HP total is equal to 2 + its creator's artificer level times five + its creator's Int mod. Within an hour of its death, while within 5 ft, its creator can take an action to use smith's tools and expend a spell slot to have it return to full HP after 1 minute. If its creator dies, " + (typePF ? "the steel defender also perishes" : "so does it") + "."
					}],
					actions : [{
						name : "Repair (3/Day)",
						description : "As an action, the " + (typePF ? "" : "magical mechanisms inside the ") + "steel defender restore" + (typePF ? "s" : "") + " 2d8 + its proficiency bonus in HP to itself or to one construct or object within 5 ft of it."
					}, {
						name : "Deflect Attack (reaction)",
						description : typePF ? "As a reaction, the steel defender imposes disadvantage on the attack roll of one creature it can see that is within 5 ft of it, provided the attack roll is against a creature other than the defender." : "As a reaction, the defender imposes disadv. on the attack roll of one creature it can see within 5 ft, provided the creature attacks another than the defender."
					}, {
						name : "Arcane Jolt (Battle Smith 9)",
						minlevel : 9,
						eval : function(prefix, lvl) {
							Value(prefix + "Comp.Use.Attack.1.Description", "Arcane Jolt (1d6): On hit, deal force damage or heal target in 30 ft");
						},
						removeeval : function(prefix, lvl) {
							Value(prefix + "Comp.Use.Attack.1.Description", "");
						}
					}, {
						name : "Improved Defender (Battle Smith 15)",
						minlevel : 15,
						description : "The steel defender's Deflect Attack now deals 1d4 + its creator's Intelligence modifier in force damage to the attacker.",
						addMod : [{ type : "", field : "Comp.Use.AC", mod : 2, text : "The steel defender gains a +2 bonus to its AC (base AC of 15)." }],
						eval : function(prefix, lvl) {
							Value(prefix + "Comp.Use.Attack.1.Description", What(prefix + "Comp.Use.Attack.1.Description").replace("Arcane Jolt (1d6)", "Arcane Jolt (2d6)"));
							Value(prefix + "Comp.Use.Attack.2.Weapon Selection", "Deflect Attack (reaction)");
						},
						removeeval : function(prefix, lvl) {
							Value(prefix + "Comp.Use.Attack.1.Description", What(prefix + "Comp.Use.Attack.1.Description").replace("Arcane Jolt (2d6)", "Arcane Jolt (1d6)"));
							Value(prefix + "Comp.Use.Attack.2.Weapon Selection", "");
						}
					}],
					header : "Construct",
					calcChanges : {
						hp : function (totalHD, HDobj, prefix) {
							if (!classes.known.artificer) return;
							var intMod = Number(What('Int Mod'));
							var artLvl = classes.known.artificer.level;
							var artLvl5 = 5 * artLvl;
							HDobj.alt.push(2 + intMod + artLvl5);
							HDobj.altStr.push(" = 2 as a base\n + " + intMod + " from its creator's Intelligence modifier\n + 5 \xD7 " + artLvl + " from five times its creator's artificer level (" + artLvl5 + ")");
						},
						setAltHp : true,
						hpForceRecalc : true
					},
					eval : function(prefix, lvl) {
						// remove the Deflect Attack (reaction) attack if adding this creature before artificer level 9
						if (lvl[0] < 15) Value(prefix + "Comp.Use.Attack.2.Weapon Selection", "");
					}
				}]
			},
			"subclassfeature9" : {
				name : "Arcane Jolt",
				source : [["E:RLW", 61], ["T", 20]],
				minlevel : 9,
				description : function () {
					var descr9 = desc([
						"Once per turn when my steel defender or magic weapon hits a target, I can have it:",
						" \u2022 Deal an extra +2d6 force damage to the target",
						" \u2022 Restore 2d6 HP to another target within 30 ft of the one that was hit"
					]);
					var descr15 = descr9.replace(/2d6/g, '4d6');
					return levels.map(function (n) {
						return n < 9 ? "" : n < 15 ? descr9 : descr15;
					});
				}(),
				usages : "Intelligence modifier per ",
				usagescalc : "event.value = Math.max(1, What('Int Mod'));",
				recovery : "long rest",
				additional : levels.map(function (n) {
					return n < 9 ? "" : (n < 15 ? 2 : 4) + "d6";
				}),
				calcChanges : {
					atkAdd : [
						function (fields, v) {
							if (v.theWea.isMagicWeapon || v.thisWeapon[1]) {
								fields.Description += (fields.Description ? '; ' : '') + 'Arcane Jolt (' + (classes.known.artificer && classes.known.artificer.level >= 15 ? 4 : 2) + 'd6)';
							}
						},
						"Once per turn when I hit with a magic weapon or my steel defender hits with its attack, I can use my Arcane Jolt class feature to have the hit either deal extra force damage or heal somebody within 30 ft of the target hit."
					]
				}
			},
			"subclassfeature15" : {
				name : "Improved Defender",
				source : [["E:RLW", 61], ["T", 20]],
				minlevel : 15,
				description : desc([
					"My defender's Deflect Attack now deals its attacker 1d4 + my Int mod force damage",
					"My arcane jolt damage/healing increases to 4d6; My steel defender gains +2 AC"
				])
			}
		}
	});

	// Add the new special magic items for the artificer class (infusions)
	MagicItemsList["boots of the winding path"] = {
		name : "Boots of the Winding Path",
		source : [["E:RLW", 62], ["T", 21], ["UA:A2", 9], ["UA:A3", 12]],
		type : "wondrous item",
		description : "While wearing these boots, I can teleport up to 15 ft as a bonus action to an unoccupied space I can see, as long as I occupied that space at some point during the current turn.",
		descriptionFull : "While wearing these boots, a creature can teleport up to 15 feet as a bonus action to an unoccupied space the creature can see. The creature must have occupied that space at some point during the current turn.",
		attunement : true,
		action : [["bonus action", ""]]
	}
	MagicItemsList["radiant weapon"] = {
		name : "Radiant Weapon",
		nameTest : "Radiant",
		source : [["E:RLW", 62], ["T", 22]],
		type : "weapon (any)",
		description : "This item adds a +1 on its to hit and damage, has 4 charges, and regains 1d4 at dawn. As a bonus action, I can have it start/stop shedding light, bright in 30 ft, dim in another 30 ft. As a reaction if hit by an attack, I can use 1 charge to blind the attacker until the end of its next turn unless it makes a Con save (my spell DC).",
		descriptionFull : "This magic weapon grants a +1 bonus to attack and damage rolls made with it. While holding it, the wielder can take a bonus action to cause it to shed bright light in a 30-foot radius and dim light for an additional 30 feet. The wielder can extinguish the light as a bonus action.\n   The weapon has 4 charges. As a reaction immediately after being hit by an attack, the wielder can expend 1 charge and cause the attacker to be blinded until the end of the attacker's next turn, unless the attacker suc­ceeds on a Constitution saving throw against your spell save DC. The weapon regains ld4 expended charges daily at dawn. ",
		attunement : true,
		usages : 4,
		recovery : "dawn",
		additional : "blind attacker; regains 1d4",
		action : [["bonus action", " (start/stop light)"], ["reaction", " (1 charge; after hit)"]],
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "suffix",
			descriptionChange : ["replace", "weapon"]
		},
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && !v.isSpell && (/radiant/i).test(v.WeaponText)) {
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
	MagicItemsList["repeating shot"] = {
		name : "Repeating Shot",
		source : [["E:RLW", 62], ["T", 22], ["UA:A3", 13]],
		type : "weapon (any with ammunition)",
		description : "When I use this magic weapon to make a ranged attack, it magically produces one piece of ammunition and grants a +1 bonus to its attack and damage rolls. Thus, it doesn't require ammunition and ignores the loading property if it has it. The produced ammunition vanishes once it hits or misses a target.",
		descriptionFull : "This magic weapon grants a +1 bonus to attack and damage rolls made with it when it's used to make a ranged attack, and it ignores the loading property if it has it.\n   If you load no ammunition in the weapon, it produces its own, automatically creating one piece of magic am­munition when you make a ranged attack with it. The ammunition created by the weapon vanishes the instant after it hits or misses a target.",
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
	MagicItemsList["repulsion shield"] = {
		name : "Repulsion Shield",
		source : [["E:RLW", 63], ["T", 23]],
		type : "shield",
		description : "I gain an additional +1 bonus to Armor Class while wielding this shield. The shield has 4 charges and regains 1d4 expended charges daily at dawn. As a reaction immediately after being hit by a melee attack, I can expend 1 charge to push the attacker up to 15 ft away.",
		descriptionFull : "A creature gains a + 1 bonus to Armor Class while wield­ing this shield.\n   The shield has 4 charges. While holding it, the wielder can use a reaction immediately after being hit by a me­lee attack to expend 1 of the shield's charges and push the attacker up to 15 feet away. The shield regains ld4 expended charges daily at dawn. ",
		weight : 6,
		attunement : true,
		usages : 4,
		additional : "regains 1d4",
		recovery : "dawn",
		action : [["reaction", " (1 charge)"]],
		shieldAdd : ["Repulsion Shield", 3, 6]
	}
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

// New Artificer Infusions
AddFeatureChoice(ClassList.artificer.features["infuse item"], true, "Arcane Propulsion Armor (prereq: level 14 artificer)", {
	name : "Arcane Propulsion Armor",
	source : [["T", 20]],
	description : desc([
		"The armor replaces any missing limbs of the wearer and can't be removed against its will",
		"It increases the wearer's walking speed by 5 ft; Its gauntlet can be used as melee weapons"
	]),
	additional : "suit of armor; requires attunement",
	prereqeval : function(v) { return classes.known.artificer.level >= 14; },
	magicitemsAdd : ["Arcane Propulsion Armor"]
});
MagicItemsList["arcane propulsion armor"] = {
	name : "Arcane Propulsion Armor",
	source : [["T", 20]],
	type : "armor (light, medium, or heavy)",
	descriptionFull : "The wearer of this armor gains these benefits:\n \u2022 The wearer's walking speed increases by 5 feet.\n \u2022 The armor includes gauntlets, each of which is a magic melee weapon that can be wielded only when the hand is holding nothing. The wearer is proficient with the gauntlets, and each one deals 1d8 force damage on a hit and has the thrown property, with a normal range of 20 feet and a long range of 60 feet. When thrown, the gauntlet detaches and flies at the attack's target, then immediately returns to the wearer and reattaches.\n \u2022 The armor can't be removed against the wearer's will.\n \u2022 If the wearer is missing any limbs, the armor replaces those limbs—hands, arms, feet, legs, or similar appendages. The replacements function identically to the body parts they replace.",
	description : "This armor replaces any missing limbs, increases my walking speed by 5 ft, and can't be removed against my will. I can use either empty-handed gauntlet as a proficient melee weapon with the thrown property. After a throwing attack with a gauntlet, it returns and reattaches immediately.",
	attunement : true,
	chooseGear : {
		type : "armor",
		prefixOrSuffix : "brackets",
		descriptionChange : ["prefix", "armor"]
	},
	speed : { walk : { spd : "+5", enc : "+5" } },
	weaponsAdd : ["Arcane Propulsion Gauntlets"],
	weaponOptions : {
		regExpSearch : /^(?=.*arcane)(?=.*propulsion)(?=.*gauntlet).*$/i,
		name : "Arcane Propulsion Gauntlets",
		source : [["T", 20]],
		ability : 1,
		type : "AlwaysProf",
		damage : [1, 8, "force"],
		range : "Melee, 20/60 ft",
		description : "Thrown; Returns immediately after thrown",
		abilitytodamage : true
	}
}
AddFeatureChoice(ClassList.artificer.features["infuse item"], true, "Armor of Magical Strength", {
	name : "Armor of Magical Strength",
	source : [["T", 20]],
	description : desc([
		"The armor has 6 charges, regaining 1d6 expended charges daily at dawn",
		"As a reaction when being knocked prone, the wearer can use 1 charge to not be prone",
		"When making a Str check/save, the wearer can use 1 charge to add its Int mod to the roll"
	]),
	additional : "suit of armor; requires attunement",
	magicitemsAdd : ["Armor of Magical Strength"]
});
MagicItemsList["armor of magical strength"] = {
	name : "Armor of Magical Strength",
	nameTest : "of Magical Strength",
	source : [["T", 20]],
	type : "armor (light, medium, or heavy)",
	descriptionFull : "This armor has 6 charges. The wearer can expend the armor's charges in the following ways:\n \u2022 When the wearer makes a Strength check or a Strength saving throw, it can expend 1 charge to add a bonus to the roll equal to its Intelligence modifier.\n \u2022 If the creature would be knocked prone, it can use its reaction to expend 1 charge to avoid being knocked prone.\nThe armor regains 1d6 expended charges daily at dawn.",
	description : "This armor has 6 charges and regains 1d6 expended charges daily at dawn. As a reaction when I would be knocked prone, I can expend 1 charge to avoid being knocked prone. When I make a Strength check or Strength saving throw, I can expend 1 charge to add my Intelligence modifier to the roll.",
	attunement : true,
	action : [["reaction", ""]],
	chooseGear : {
		type : "armor",
		prefixOrSuffix : "prefix"
	},
	usages : 6,
	recovery : "dawn",
	additional : "regains 1d6"
};
AddFeatureChoice(ClassList.artificer.features["infuse item"], true, "Helm of Awareness (prereq: level 10 artificer)", {
	name : "Helm of Awareness",
	source : [["T", 21], ["UA:SP3", 3]],
	description : "\n   The wearer has advantage on Initiative rolls and can't be surprised while not incapacitated",
	additional : "helmet; requires attunement",
	prereqeval : function(v) { return classes.known.artificer.level >= 10; },
	magicitemsAdd : ["Helm of Awareness"]
});
MagicItemsList["helm of awareness"] = {
	name : "Helm of Awareness",
	source : [["T", 21], ["UA:SP3", 3]],
	type : "wondrous item",
	description : "While wearing this helmet, I have advantage on initiative rolls. In addition, I can't be surprised, provided I'm not incapacitated.",
	descriptionFull : "While wearing this helmet, a creature has advantage on initiative rolls. In addition, the wearer can't be surprised, provided it isn't incapacitated.",
	attunement : true,
	advantages : [["Initiative", true]],
	savetxt : { immune : ["surprised"] }
};
AddFeatureChoice(ClassList.artificer.features["infuse item"], true, "Mind Sharpener", {
	name : "Mind Sharpener",
	source : [["T", 22]],
	description : "\n   The wearer can use its reaction to ignore a failed Con save to maintain concentration",
	additional : "suit of armor or robes",
	magicitemsAdd : ["Mind Sharpener"]
});
MagicItemsList["mind sharpener"] = {
	name : "Mind Sharpener",
	source : [["T", 22]],
	descriptionFull : "The infused item can send a jolt to the wearer to refocus their mind. The item has 4 charges. When the wearer fails a Constitution saving throw to maintain concentration on a spell, the wearer can use its reaction to expend 1 of the item's charges to succeed instead. The item regains 1d4 expended charges daily at dawn.",
	description : "This magic armor or robes can send a jolt to refocus my mind. It has 4 charges and regains 1d4 expended charges daily at dawn. As a reaction when I fail a Constitution saving throw to maintain concentration on a spell, I can expend 1 charge to succeed instead.",
	action : [["reaction", ""]],
	usages : 4,
	recovery : "dawn",
	additional : "regains 1d4",
	choices : ["Mind Sharpener Armor", "Mind Sharpener Robes"],
	"mind sharpener armor" : {
		name : "Mind\u200A Sharpener",
		type : "armor (light, medium, or heavy)",
		description : "This magic armor can send a jolt to refocus my mind. It has 4 charges and regains 1d4 expended charges daily at dawn. As a reaction when I fail a Constitution saving throw to maintain concentration on a spell, I can expend 1 charge to succeed instead.",
		chooseGear : {
			type : "armor",
			prefixOrSuffix : "brackets",
			itemName1stPage : ["suffix", "Mind Sharpener"],
			descriptionChange : ["prefix", "armor"]
		}
	},
	"mind sharpener robes" : {
		name : "Mind Sharpener (Robes)",
		type : "wondrous item",
		description : "These magic robes can send a jolt to refocus my mind. It has 4 charges and regains 1d4 expended charges daily at dawn. As a reaction when I fail a Constitution saving throw to maintain concentration on a spell, I can expend 1 charge to succeed instead."
	}
};
AddFeatureChoice(ClassList.artificer.features["infuse item"], true, "Spell-Refueling Ring (prereq: level 6 artificer)", {
	name : "Spell-Refueling Ring",
	source : [["T", 23]],
	description : "\n   As an action once per dawn, this ring's wearer can recover one 3rd-level or lower spell slot",
	additional : "ring; requires attunement",
	prereqeval : function(v) { return classes.known.artificer.level >= 6; },
	magicitemsAdd : ["Spell-Refueling Ring"]
});
MagicItemsList["spell-refueling ring"] = {
	name : "Spell-Refueling Ring",
	source : [["T", 23]],
	type : "ring",
	descriptionFull : "While wearing this ring, the creature can recover one expended spell slot as an action. The recovered slot can be of 3rd level or lower. Once used, the ring can't be used again until the next dawn.",
	description : "As an action, I can activate this magic ring to recover one expended spell slot. The recovered slot can be of 3rd level or lower. Once used, the ring can't be used again until the next dawn.",
	attunement : true,
	action : [["action", ""]],
	usages : 1,
	recovery : "dawn"
};

// Add the Armorer specialism (but after all other scripts, so that all armour options are present)
RunFunctionAtEnd(function () {
	var artificerSubclassArmorerUA = AddSubClass("artificer", "armorer", {
		regExpSearch : /^(?=.*armou?rer)(?!.*wizard).*$/i,
		subname : "Armorer",
		fullname : "Armorer",
		source : [["T", 15]],
		attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
		features : {
			"subclassfeature3" : {
				name : "Tools of the Trade",
				source : [["T", 15]],
				minlevel : 3,
				description : " [proficient with heavy armor \u0026 smith's tools]",
				toolProfs : ["Smith's tools"],
				armorProfs : [false, false, true, false],
				spellcastingExtra : ["magic missile", "thunderwave", "mirror image", "shatter", "hypnotic pattern", "lightning bolt", "fire shield", "greater invisibility", "passwall", "wall of force"]
			},
			"subclassfeature3.1" : {
				name : "Arcane Armor",
				source : [["T", 15]],
				minlevel : 3,
				description : " [reverts back if I die or don another armor]" + desc([
					"As an action, I can use smith's tool to turn an armor I'm wearing into arcane armor",
					"As an action, I can don or doff it; As a bonus action, I can deploy or retract its helmet",
					"It can't be removed against my will, covers all my limbs, and even replaces missing limbs",
					"I ignore the Strength requirement of arcane armor and can use it as a spellcasting focus"
				]),
				action : [["action", " (create/don/doff)"], ["bonus action", " (retract/deploy helmet)"]]
			},
			"subclassfeature3.2" : {
				name : "Armor Model",
				source : [["T", 16]],
				minlevel : 3,
				description : desc([
					"When I finish a rest, I can use smith's tools to change the model of my arcane armor",
					'Select a model using the "Choose Feature" button; See "Notes" page for features of each'
				]),
				additional : "also see notes page",
				toNotesPage : [{
					name : "Arcane Armor Model Features",
					note : desc([
						"I can customize my arcane armor to the guardian or infiltrator model whenever I finish a short or long rest, provided I have smith's tools in hand.",
						"Each model includes a special weapon. When I attack with that weapon, I can use my Intelligence modifier, instead of Strength or Dexterity, for the attack and damage rolls."
					])
				}, {
					name : "Guardian Arcane Armor",
					popupName : "Guardian Arcane Armor Features",
					note : desc([
						"\u2022 Thunder Gauntlets: Each of the armor's gauntlets counts as a simple melee weapon while I'm not holding anything in it, and it deals 1d8 thunder damage on a hit. A creature hit by the gauntlet has disadvantage on attack rolls against targets other than me until the start of me next turn, as the armor magically emits a distracting pulse when the creature attacks someone else.",
						"\u2022 Defensive Field: As a bonus action, I can gain temporary hit points equal to my artificer level, replacing any temporary hit points I already have. I lose these temporary hit points if I doff the armor. I can use this bonus action a number of times equal to my proficiency bonus, and I regain all expended uses when I finish a long rest."
					]),
					amendTo : "Arcane Armor Model Features"
				}, {
					name : "Infiltrator Arcane Armor",
					popupName : "Infiltrator Arcane Armor Features",
					note : desc([
						"\u2022 Lightning Launcher: A gemlike node on one of the armored fists or on the chest (my choice) counts as a simple ranged weapon, with a normal range of 90 ft and a long range of 300 ft. It deals 1d6 lightning damage on a hit. Once on each of my turns when I hit a creature with it, I can deal an extra 1d6 lightning damage to that target.",
						"\u2022 Powered Steps: My walking speed increases by 5 feet.",
						"\u2022 Dampening Field: I have advantage on Dexterity (Stealth) checks. If the armor normally imposes disadvantage on such checks, the advantage and disadvantage cancel each other, as normal."
					]),
					amendTo : "Arcane Armor Model Features"
				}],
				choices : [],
				choiceDependencies : [{
					feature : "subclassfeature15",
					choiceAttribute : true
				}],
				weaponOptions : [{
					regExpSearch : /^(?=.*thunder)(?=.*gauntlet).*$/i,
					name : "Thunder Gauntlets",
					source : [["T", 16]],
					ability : 4,
					type : "Simple",
					damage : [1, 8, "thunder"],
					range : "Melee",
					description : "Target hit disadv. on attacks vs. others than me until my next turn starts",
					abilitytodamage : true,
					monkweapon : true
				}, {
					regExpSearch : /^(?=.*lightning)(?=.*launcher).*$/i,
					name : "Lightning Launcher",
					source : [["T", 16]],
					ability : 4,
					type : "Simple",
					damage : [1, 6, "lightning"],
					range : "90/300 ft",
					description : "Once per turn on hit, +1d6 lightning damage",
					abilitytodamage : true
				}],
				// Do this in the parent object, so that it is always visible and people printing the sheet can more easily switch between the two models
				// Also, the armor model can be changed on a short rest, but the limited feature only resets on a long rest, so shouldn't be removed
				action : [["bonus action", "Defensive Field (Guardian Model)"]],
				extraLimitedFeatures : [{
					name : "Defensive Field (Guardian Model)",
					usages : "Proficiency Bonus per ",
					usagescalc : "event.value = How('Proficiency Bonus');",
					recovery : "long rest"
				}]
			},
			"subclassfeature9" : {
				name : "Armor Modifications",
				source : [["T", 17]],
				minlevel : 9,
				description : desc([
					"Arcane armor now counts as armor, boots, helmet, and a weapon for holding infusions",
					"Each can hold one infusion; The infusions remain when I change the armor's model"
				]),
				additional : "+2 infused items, if used on arcane armor"
			},
			"subclassfeature15" : {
				name : "Perfected Armor",
				source : [["T", 17]],
				minlevel : 15,
				description : desc([
					'My armor gets additional features, based on the model; Use "Choose Features" to select it',
					"The guardian gets the ability to pull a creature closer as a reaction and make an attack",
					"The infiltrator gets an upgrade to its lightning launcher weapon attack"
				]),
				toNotesPage : [{
					name : "Guardian Perfected Armor Features",
					note : desc([
						"Tinkering with my armor's energy system leads me to discover a powerful pulling force.",
						"As a reaction when a Huge or smaller creature I can see ends its turn within 30 ft of me, I can magically force the creature to make a Strength saving throw against my spell save DC, pulling the creature up to 30 ft toward me to an unoccupied space. If I pull the target to a space within 5 ft of me, I can make a melee weapon attack against it as part of this reaction.",
						"I can use this reaction a number of times equal to my proficiency bonus. I regain all expended uses of it when I finish a long rest."
					]),
					amendTo : "Arcane Armor Model Features"
				}, {
					name : "Infiltrator Perfected Armor Features",
					note : desc([
						"Any creature that takes lightning damage from my Lightning Launcher glimmers with magical light until the start of my next turn.",
						"The glimmering creature sheds dim light in a 5-ft radius, and it has disadvantage on attack rolls against me, as the light jolts it if it attacks me. In addition, the next attack roll against it has advantage, and if that attack hits, the target takes an extra 1d6 lightning damage."
					]),
					amendTo : "Arcane Armor Model Features"
				}],
				"guardian" : {
					name : "Perfected Armor: Guardian",
					description : " [Proficiency Bonus per long rest]" + desc([
						"As a reaction when a creature I can see ends its turn in 30 ft, I have it make a Str save",
						"If it is Huge or smaller and fails, I pull it up to 30 ft towards me to an unoccupied space",
						"If I pull it within 5 ft, I can make a melee weapon attack vs. it as part of this reaction"
					])
				},
				"infiltrator" : {
					name : "Perfected Armor: Infiltrator",
					description :  desc([
						"Those hit by my lightning launcher shed 5-ft radius dim light until my next turn starts",
						"The light gives the target disadvantage on attacks rolls made against me",
						"Also, the next attack against it has advantage and deals an extra 1d6 lightning damage"
					])
				},
				// Do these in the parent object, so that they are always visible and people printing the sheet can more easily switch between the two models
				// Also, the armor model can be changed on a short rest, but the limited feature only resets on a long rest, so shouldn't be removed
				action : [["reaction", "Perfected Armor: Guardian"]],
				extraLimitedFeatures : [{
					name : "Perfected Armor: Guardian",
					usages : "Proficiency Bonus per ",
					usagescalc : "event.value = How('Proficiency Bonus');",
					recovery : "long rest"
				}]
			}
		}
	});
	var itsFea = ClassSubList[artificerSubclassArmorerUA].features["subclassfeature3.2"];
	var guardianTxt = desc([
		"Both fists are Thunder Gauntlets, simple melee weapons that distract those hit by it",
		"As a bonus action, I can activate a defensive shield to gain my artificer level in temp HP"
	])
	var guardianAdditional = levels.map(function (n) {
		return n + " temp HP, Prof. B. per long rest";
	})
	var infiltratorTxt = desc([
		"+5 ft walking speed; Gemlike node in fist/chest is a ranged weapon, Lightning Launcher",
		"It gives me advantage on Dexterity (Stealth) checks"
	])
	var prereqFunc = function(v) {
		var sParsed = ParseArmor(v.choice.replace(/(Guardian|Infiltrator) arcane /i, ''));
		return sParsed && testSource(sParsed, ArmourList[sParsed], "armorExcl") ? "skip" : true;
	};
	for (var armor in ArmourList) {
		var anArm = ArmourList[armor];
		if (anArm.isMagicArmor || !anArm.weight || (CurrentVars.extraArmour && CurrentVars.extraArmour[armor])) continue;
		// Add the Guardian variant of the armor
		var gArmName = "Guardian Arcane " + anArm.name;
		itsFea[gArmName.toLowerCase()] = {
			name : (typePF ? "Armor " : "") + "Model: Guardian " + anArm.name,
			submenu : "Guardian Arcane Armor",
			description : guardianTxt,
			additional : guardianAdditional,
			armorAdd : gArmName,
			weaponsAdd : ["Thunder Gauntlets"],
			prereqeval : prereqFunc,
			dependentChoices : "guardian"
		}
		// And now add the Infiltrator variant of the armor
		var iArmName = "Infiltrator Arcane " + anArm.name;
		itsFea[iArmName.toLowerCase()] = {
			name : "Armor Model: Infiltrator " + anArm.name,
			submenu : "Infiltrator Arcane Armor",
			description : infiltratorTxt + (anArm.stealthdis ? ", cancelling out the disadv. it imposes" : ""),
			speed : { walk : {spd : "+5", enc : "+5" } },
			armorAdd : iArmName,
			weaponsAdd : ["Lightning Launcher"],
			prereqeval : prereqFunc,
			advantages : [["Stealth", true]],
			dependentChoices : "infiltrator"
		}
		// Lastly push both choices to the array
		itsFea.choices.push(gArmName, iArmName);
	}
});


// >>>>>>>>>>>>>>>>>>>>>>>>> //
// >>> Barbarian Options >>> //
// >>>>>>>>>>>>>>>>>>>>>>>>> //

// Barbarian Optional Class Features
AddFeatureChoice(ClassList.barbarian.features["danger sense"], true, "Primal Knowledge", {
	name : "Primal Knowledge",
	extraname : "Optional Barbarian 3",
	source : [["T", 24]],
	description : desc([
		"At 3rd level and again at 10th level I gain proficiency with one skill of my choice",
		"I can choose from Animal Handling, Athletics, Intimidation, Nature, Perception, Survival"
	]),
	skillstxt : "Choose one from Animal Handling, Athletics, Intimidation, Nature, Perception and Survival.\nChoose another from this list at 10th level"
}, "Optional 3rd-level barbarian features");
AddFeatureChoice(ClassList.barbarian.features["feral instinct"], true, "Instinctive Pounce", {
	name : "Instinctive Pounce",
	extraname : "Optional Barbarian 7",
	source : [["T", 24]],
	description : desc([
		"As part of the bonus action I use to enter rage, I can move up to half my speed"
	]),
	action : [["bonus action", "Rage (start & half move / end)", "Rage (start/end)"]]
}, "Optional 7th-level barbarian features");

// Barbarian Subclasses
AddSubClass("barbarian", "path of the beast", {
	regExpSearch : /^(?=.*\bbeast\b)(?=.*(warrior|marauder|barbarian|viking|(norse|tribes?|clans?)(wo)?m(a|e)n)).*$/i,
	subname : "Path of the Beast",
	source : [["T", 24]],
	abilitySave : 3,
	features : {
		"subclassfeature3" : {
			name : "Form of the Beast",
			source : [["T", 24]],
			minlevel : 3,
			description : desc([
				"When I enter my rage, I can transform to gain a bite, tail, or claws attack for that rage",
				"On a hit with the bite attack once on each of my turns, I can heal my Prof. Bonus in HP",
				"This only works if I have less than half my hit points when I hit with this bite attack",
				"With the claws I can make one extra attack when I attack with it in my Attack action",
				"As a reaction with the tail when I'm hit, I can add 1d8 to my AC for that attack",
				"This only works if the hit is from an attack roll made a creature I can see within 30 ft"
			]),
			weaponOptions : [{
				regExpSearch : /^(?=.*(bestial|beast))(?=.*bite).*$/i,
				name : "Bestial Bite",
				source : [["T", 24]],
				ability : 1,
				type : "Natural",
				damage : [1, 8, "piercing"],
				range : "Melee",
				description : "Only in rage; On a hit once on my turn, regain Prof. Bonus in HP (if below 1/2 HP)",
				abilitytodamage : true,
				bestialNaturalWeapon : true
			}, {
				regExpSearch : /^(?=.*(bestial|beast))(?=.*claws?).*$/i,
				name : "Bestial Claws",
				source : [["T", 24]],
				ability : 1,
				type : "Natural",
				damage : [1, 6, "slashing"],
				range : "Melee",
				description : "Only in rage; Extra attack if used as part of Attack action",
				abilitytodamage : true,
				bestialNaturalWeapon : true
			}, {
				regExpSearch : /^(?=.*(bestial|beast))(?=.*tail).*$/i,
				name : "Bestial Tail",
				source : [["T", 25]],
				ability : 1,
				type : "Natural",
				damage : [1, 8, "piercing"],
				range : "Melee",
				description : "Reach; Only in rage",
				abilitytodamage : true,
				bestialNaturalWeapon : true
			}],
			weaponsAdd : ["Bestial Bite", "Bestial Claws", "Bestial Tail"],
			additional : levels.map(function(n) {
				return n < 6 ? "" : "chosen weapon counts as magical";
			}),
			action : [["reaction", "Bestial Tail"]]
		},
		"subclassfeature6" : {
			name : "Bestial Soul",
			source : [["T", 25]],
			minlevel : 6,
			description : desc([
				"When I finish a short rest, I can choose one of the following benefits until my next rest:",
				" \u2022 Swimming speed equal to my walking speed and I can breathe underwater",
				" \u2022 Climb speed (same as walking) and no check to climb difficult surfaces or upside down",
				" \u2022 Once per turn when I jump, I can extend it by the result of an Athletics check in feet"
			]),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.theWea.bestialNaturalWeapon && !v.thisWeapon[1] && !v.theWea.isMagicWeapon && !(/counts as( a)? magical/i).test(fields.Description)) {
							fields.Description += (fields.Description ? '; ' : '') + 'Counts as magical';
						};
					},
					"The natural melee weapon that I gain from Form of the Beast count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage."
				]
			}
		},
		"subclassfeature10" : {
			name : "Infectious Fury",
			source : [["T", 25]],
			minlevel : 10,
			description : desc([
				"In rage, when I hit a creature with my natural weapon, I can have it make a Wis save",
				"If it fails (DC 8 + my Prof bonus + my Con mod) it suffers one effect of my choice:",
				" \u2022 It uses its reaction to make a melee attack against one creature I can see of my choice",
				" \u2022 It takes 2d12 psychic damage"
			]),
			usages : "Proficiency Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest"
		},
		"subclassfeature14" : {
			name : "Call the Hunt",
			source : [["T", 25]],
			minlevel : 14,
			description : desc([
				"When I enter rage, I can choose my Con mod of willing creatures I can see within 30 ft",
				"Once on each of their turns, if they hit an attack, they can have it deal +1d6 damage",
				"This lasts as long as I rage; I gain 5 temporary HP per creature that accepts this benefit"
			]),
			usages : "Proficiency Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest"
		}
	}
});
AddSubClass("barbarian", "path of wild magic", {
	regExpSearch : /^(?=.*\bwild\b)(?=.*\bmagic\b).*$/i,
	subname : "Path of Wild Magic",
	source : [["T", 25]],
	abilitySave : 3,
	features : {
		"subclassfeature3" : {
			name : "Magic Awareness",
			source : [["T", 25]],
			minlevel : 3,
			description : desc([
				"As an action, I can open my awareness to the presence of concentrated magic",
				"Until my next turn ends, I know the location of any spell or magic item within 60 ft",
				"I also learn the school of magic of a spell; This doesn't reveal anything behind total cover"
			]),
			usages: "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus')",
			recovery: "long rest",
			action : [["action", ""]]
		},
		"subclassfeature3.1" : {
			name : "Wild Surge",
			source : [["T", 25]],
			minlevel : 3,
			description : "\n   Whenever I enter my rage, I roll on the Wild Magic table (see Notes page)",
			toNotesPage : [{
				name : "Wild Magic Table",
				source : [["T", 26]],
				note : [
					"The magical energy roiling inside me sometimes erupts from me.  Whenever I enter my rage, I have to roll on the table below to see what happens.",
					"If the effect calls for a saving throw, the DC is equal to 8 + my proficiency bonus + my Constitution modifier.\n",
					"d8\tEFFECT",
					" 1\tShadowy tendrils lash around me. Each creature of my choice that I can see within 30 ft of me must succeed on a Constitution saving throw or take 1d12 necrotic damage. I also gain 1d12 temporary hit points.",
					" 2\tI teleport up to 30 ft to an unoccupied space I can see. Until my rage ends, I can use this effect again on each of my turns as a bonus action.",
					" 3\tAn intangible spirit, which looks like a flumph or a pixie (my choice), appears within 5 ft of one creature of my choice that I can see within 30 ft of me. At the end of the current turn, the spirit explodes, and each creature within 5 ft of it must succeed on a Dexterity saving throw or take 1d6 force damage. Until my rage ends, I can use this effect again, summoning another spirit, on each of my turns as a bonus action.",
					" 4\tMagic infuses one weapon of my choice that I am holding. Until my rage ends, the weapon's damage type changes to force, and it gains the light and thrown properties, with a normal range of 20 ft and a long range of 60 ft. If the weapon leaves my hand, the weapon reappears in my hand at the end of the current turn.",
					" 5\tWhenever a creature hits me with an attack roll before my rage ends, that creature takes 1d6 force damage, as magic lashes out in retribution.",
					" 6\tUntil my rage ends, I am surrounded by multicolored, protective lights; I gain a +1 bonus to AC, and while within 10 ft of me, my allies gain the same bonus.",
					" 7\tFlowers and vines temporarily grow around me; until my rage ends, the ground within 15 ft of me is difficult terrain for my enemies.",
					" 8\tA bolt of light shoots from my chest. Another creature of my choice that I can see within 30 ft of me must succeed on a Constitution saving throw or take 1d6 radiant damage and be blinded until the start of my next turn. Until my rage ends, I can use this effect again on each of my turns as a bonus action."
				]
			}]
		},
		"subclassfeature6" : {
			name : "Bolstering Magic",
			source : [["T", 26]],
			minlevel : 6,
			description : desc([
				"As an action, I can touch a creature or myself and confer one of the following benefits:",
				" \u2022 For 10 minutes, they can add 1d3 to any attack roll and ability check",
				" \u2022 Roll 1d3. They regain an expended spell slot of a level equal to or lower than the roll",
				"A creature that receives the second benefit can't receive it again until after a long rest"
			]),
			usages: "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus')",
			recovery: "long rest",
			action : [["action", ""]]
		},
		"subclassfeature10" : {
			name : "Unstable Backlash",
			source : [["T", 26]],
			minlevel : 10,
			description : desc([
				"As a reaction in rage when taking damage or failing a save, I can lash out with magic",
				"I roll on the Wild Magic table and immediately apply the roll, replacing my current effect"
			]),
			action : [["reaction", " (in rage on damage/save fail)"]]
		},
		"subclassfeature14" : {
			name : "Controlled Surge",
			source : [["T", 26]],
			minlevel : 14,
			description : desc([
				"Whenever I roll on the Wild Magic table, I can roll two dice and choose which to use",
				"If I roll the same on both dice, I can instead choose any effect on the Wild Magic table"
			])
		}
	}
});


// >>>>>>>>>>>>>>>>>>>> //
// >>> Bard Options >>> //
// >>>>>>>>>>>>>>>>>>>> //

// Bard Optional Class Features
AddFeatureChoice(ClassList.bard.features.spellcasting, true, "Additional Bard Spells", {
	name : "Additional Bard Spells",
	source : [["T", 27]],
	extraname : "Optional Bard 1",
	description : "",
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Stop this is not the class' spell list or if this is for a bonus spell entry
				if (spName !== "bard" || spType.indexOf("bonus") !== -1) return;
				spList.extraspells = spList.extraspells.concat(["color spray", "command", "aid", "enlarge/reduce", "mirror image", "mass healing word", "slow", "phantasmal killer", "rary's telepathic bond", "heroes' feast", "prismatic spray", "antipathy/sympathy", "prismatic wall"]);
			},
			"This optional class feature expands the spell list of the bard class with the following spells (spell level in brackets): Color Spray (1), Command (1), Aid (2), Enlarge/Reduce (2), Mirror Image (2), Mass Healing Word (3), Slow (3), Phantasmal Killer (4), Rary's Telepathic Bond (5), Heroes' Feast (6), Prismatic Spray (7), Antipathy/Sympathy (8), and Prismatic Wall (9)."
		]
	}
}, "Optional 1st-level bard features");
AddFeatureChoice(ClassList.bard.features["jack of all trades"], true, "Magical Inspiration", {
	name : "Magical Inspiration",
	extraname : "Optional Bard 2",
	source : [["T", 27]],
	description : desc([
		"A bardic inspiration die recipient can also use it when casting a damaging or healing spell",
		"They can expend the die and add it to healing or damage dealt to one target of the spell"
	])
}, "Optional 2nd-level bard features");
AddFeatureChoice(ClassList.bard.features["song of rest"], true, "Bardic Versatility", {
	name : "Bardic Versatility",
	extraname : "Optional Bard 4",
	source : [["T", 28]],
	description : " [ASI = Ability Score Improvement]" + desc([
		"Whenever I gain an ASI from the bard class, I can change one cantrip or expertise choice",
		"I can select another cantrip from the bard spell list or another skill I'm proficient with"
	]),
	prereqeval : function (v) { return classes.known.bard.level >= 4 ? true : "skip"; }
}, "Optional 4th-level bard features");

// Bard Subclasses
AddSubClass("bard", "college of creation", {
	regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*creation).*$/i,
	subname : "College of Creation",
	source : [["T", 28]],
	features : {
		"subclassfeature3" : {
			name : "Note of Potential",
			source : [["T", 28]],
			minlevel : 3,
			description : desc([
				"Those who use my Bardic Inspiration die gain an extra bonus depending how they use it:",
				"\u2022 Ability check: Roll the die twice and choose which result to use",
				"\u2022 Attack roll: the target and others of my choice I can see in 5 ft must make a Con save",
				"  If failed, they take the die roll in thunder damage; This uses my spell save DC",
				"\u2022 Saving throw: Grants temporary HP equal to the roll + my Cha mod (min 1 temp HP)"
			])
		},
		"subclassfeature3.1" : {
			name : "Performance of Creation",
			source : [["T", 28]],
			minlevel : 3,
			description : levels.map(function (n) {
				if (n < 14) {
					var descr = [
						"As an action, I create " + (n < 6 ? "a Medium" : "one Large") + " or smaller nonmagical item in an empty space in 10 ft",
						"It can't be worth more than " + (20 * n) + " gp; It lasts for my Proficiency Bonus in hours",
						"I can't have multiple, creating more makes the first one vanish",
						"I can do this once per long rest, or by expending a 2nd-level or higher spell slot (SS 2+)"
					];
				} else {
					var descr = [
						"As an action, I create my Charisma mod of nonmagical items in an empty space in 10 ft",
						"One can be Huge, the rest Small or smaller; They last for my Proficiency Bonus in hours",
						"I can't have more than my Cha mod; If I create more, I get to choose which vanish",
						"I can do this once per long rest, or by expending a 2nd-level or higher spell slot (SS 2+)"
					];
				}
				return desc(descr);
			}),
			action : [["action", ""]],
			usages : 1,
			recovery : "long rest",
			altResource : "SS 2+"
		},
		"subclassfeature6" : {
			name : "Animating Performance",
			source : [["T", 29]],
			minlevel : 6,
			description : desc([
				"As an action, I can animate a Large or smaller nonmagical item I can see within 30 ft",
				"It is friendly and obeys my commands; It lasts for 1 hour, until it has 0 HP, or I die",
				"Unless I use a bonus action to command it, it only takes the Dodge action on its turn",
				"It can take reactions and move on its turn without commands; I can't have multiple",
				"When I use bardic inspiration, I can command the item as part of the same bonus action",
				'It acts on my initiative, after me; See "Dancing Item" on a companion page for its stats',
				"I can do this once per long rest, or by expending a 3rd-level or higher spell slot (SS 3+)"
			]),
			action : [["action", ""], ["bonus action", "Command Dancing Item"]],
			usages : 1,
			recovery : "long rest",
			altResource : "SS 3+",
			creaturesAdd : [["Dancing Item"]],
			creatureOptions : [{
				name : "Dancing Item",
				source : [["T", 29]],
				size : 4,
				type : "Construct",
				alignment : "",
				ac : 16,
				hp : 25,
				hd : [],
				speed : "40 ft",
				scores : [18, 14, 16, 4, 10, 6],
				damage_immunities : "poison, psychic",
				condition_immunities : "charmed, exhaustion, poisoned, frightened",
				passivePerception : 10,
				senses : "Darkvision 60 ft",
				languages : "understands the languages of its creator but can't speak",
				challengeRating : "1/2",
				proficiencyBonus : 2,
				proficiencyBonusLinked : true,
				attacksAction : 1,
				attacks : [{
					name : "Force-Empowered Slam",
					ability : 6,
					damage : [1, 10, "force"],
					range : "Melee (5 ft)",
					modifiers : ["", "Prof"],
					abilitytodamage : false,
					useSpellMod : "bard"
				}],
				features : [{
					name : "Variable Size",
					description : "The item animated can be Large or smaller."
				}, {
					name : "Creator",
					description : "The item obeys the commands of its creator and has the same proficiency bonus. It takes its turn immediately after its creator, on the same initiative count. It can move and take reactions on its own, but only takes the Dodge action on its turn unless its creator takes a bonus action to command it to take another action. If its creator is incapacitated, it can take any action, not just Dodge."
				}],
				actions : [{
					name : "Immutable Form",
					description : "The item is immune to any spell or effect that would alter its form."
				}, {
					name : "Irrepressible Dance",
					description : "When any creature starts its turn within 10 ft of the item, the item can increase or decrease (its creator's choice) the walking speed of that creature by 10 ft until the end of the turn, provided the item isn't incapacitated."
				}],
				header : 'Animated',
				calcChanges : {
					hp : function (totalHD, HDobj, prefix) {
						if (!classes.known.bard) return;
						var brdLvl = classes.known.bard.level;
						var brdLvl5 = 5 * brdLvl;
						HDobj.alt.push(10 + brdLvl5);
						HDobj.altStr.push(" = 10 as a base\n + 5 \xD7 " + brdLvl + " from five times its creator's bard level (" + brdLvl5 + ")");
					},
					setAltHp : true
				}
			}]
		},
		"subclassfeature14" : {
			name : "Creative Crescendo",
			source : [["T", 29]],
			minlevel : 14,
			description : " [enhances Performance of Creation]"
		}
	}
});
// [dupl_start] reprints from Mythic Odysseys of Theros
if (!SourceList.MOT) {
	AddSubClass("bard", "college of eloquence", {
		regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*eloquence).*$/i,
		subname : "College of Eloquence",
		source : [["T", 29], ["MOT", 28]],
		features : {
			"subclassfeature3" : {
				name : "Silver Tongue",
				source : [["T", 30], ["MOT", 28]],
				minlevel : 3,
				description : "\n   When I make a Persuasion or Deception check, I can treat a roll of 9 or lower as a 10"
			},
			"subclassfeature3.1" : {
				name : "Unsettling Words",
				source : [["T", 30], ["MOT", 28]],
				minlevel : 3,
				description : desc([
					"As a bonus action, I expend a Bardic Inspiration use & choose a target I can see in 60 ft",
					"It subtracts my inspiration die from the next save it makes before my next turn starts"
				]),
				action : [["bonus action", ""]]
			},
			"subclassfeature6" : {
				name : "Unfailing Inspiration",
				source : [["T", 30], ["MOT", 28]],
				minlevel : 6,
				description : "\n   When a creature adds my Bardic Inspiration die to a roll but fails, they can keep the die"
			},
			"subclassfeature6.1" : {
				name : "Universal Speech",
				source : [["T", 30], ["MOT", 28]],
				minlevel : 6,
				description : desc([
					"As an action, I can choose up to my Charisma modifier (min 1) creatures within 60 ft",
					"Those creatures magically understand any language I speak for an hour",
					"I can do this once per long rest, or by expending a 1st-level or higher spell slot (SS 1+)"
				]),
				recovery : "long rest",
				usages : 1,
				altResource : "SS 1+",
				action : [["action", ""]]
			},
			"subclassfeature14" : {
				name : "Infectious Inspiration",
				source : [["T", 30], ["MOT", 28]],
				minlevel : 14,
				description : desc([
					"As a reaction when a creature uses my inspiration die and succeeds, I can inspire another",
					"I give a creature within 60 ft that can hear me an inspiration die without expending any"
				]),
				action : [["reaction", ""]],
				usages : "Charisma mod per ",
				usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
				recovery : "long rest"
			}
		}
	});
} // dupl_end


// >>>>>>>>>>>>>>>>>>>>>> //
// >>> Cleric Options >>> //
// >>>>>>>>>>>>>>>>>>>>>> //

// Cleric Optional Class Features
AddFeatureChoice(ClassList.cleric.features.spellcasting, true, "Additional Cleric Spells", {
	name : "Additional Cleric Spells",
	extraname : "Optional Cleric 1",
	source : [["T", 30]],
	description : "",
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Stop this is not the class' spell list or if this is for a bonus spell entry
				if (spName !== "cleric" || spType.indexOf("bonus") !== -1) return;
				spList.extraspells = spList.extraspells.concat(["aura of vitality", "aura of life", "aura of purity", "sunbeam", "sunburst", "power word heal"]);
			},
			"This optional class feature expands the spell list of the cleric class with the following spells (spell level in brackets): Aura of Vitality (3), Aura of Life (4), Aura of Purity (4), Sunbeam (6), Sunburst (8), and Power Word Heal (9)."
		]
	}
}, "Optional 1st-level cleric features");
AddFeatureChoice(ClassList.cleric.features["channel divinity"], true, "Harness Divine Power", {
	name : "Channel Divinity: Harness Divine Power",
	extraname : "Optional Cleric 2",
	source : [["T", 30]],
	description : desc([
		"As a bonus action, I can expend a use of my channel divinity to regain one used spell slot",
		"The level of this spell slot can be no more than half my Proficiency Bonus (rounded up)",
		"I can only do this so many times per long rest, even if I have uses of channel divinity left"
	]),
	action : [["bonus action", ""]],
	usages : levels.map(function(n) {
		return n < 3 ? "" : n < 6 ? 1 : n < 18 ? 2 : 3;
	}),
	recovery : "long rest"
}, "Optional 2nd-level cleric features");
AddFeatureChoice(ClassList.cleric.features["turn undead"], true, "Cantrip Versatility", {
	name : "Cantrip Versatility",
	extraname : "Optional Cleric 4",
	source : [["T", 31]],
	description : " [ASI = Ability Score Improvement]\n   Whenever I gain an ASI from the cleric class, I can change one cleric cantrip for another",
	prereqeval : function (v) { return classes.known.cleric.level >= 4 ? true : "skip"; }
}, "Optional 4th-level cleric features");
// Cleric subclass alternative feature, so only run this after we are sure all subclasses have been added
RunFunctionAtEnd(function() {
	for (var i = 0; i < ClassList.cleric.subclasses[1].length; i++) {
		var domain = ClassList.cleric.subclasses[1][i];
		var objDomain = ClassSubList[domain];
		if (!objDomain || !objDomain.features.subclassfeature8 || !(/divine strike|potent spellcasting/i).test(objDomain.features.subclassfeature8.name)) continue;
		CreateClassFeatureVariant(domain, "subclassfeature8", "Blessed Strikes", {
			name : "Blessed Strikes",
			source : [["T", 31]],
			description : desc([
				"When a creature is damaged by my weapon attack or cantrip, I can do +1d8 radiant damage",
				"Once I deal this extra damage, I can't do so again until the start of my next turn"
			]),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.cleric && classes.known.cleric.level > 7 && (!v.thisWeapon[3] || Number(SpellsList[v.thisWeapon[3]].level) !== 0)) {
							fields.Description += (fields.Description ? '; ' : '') + 'Once per round +1d8 radiant damage';
						}
					},
					"Once per turn when a creature takes damage from one of my spell or weapon attacks, I can also deal 1d8 radiant damage to the target."
				]
			}
		});
	}
});

// Cleric Subclasses
// [dupl_start] reprints from Guildmasters' Guide to Ravnica
if (!SourceList.G) {
	AddSubClass("cleric", "order domain", {
		regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*order).*$/i,
		subname : "Order Domain",
		source : [["T", 31], ["G", 25]],
		spellcastingExtra : ["command", "heroism", "hold person", "zone of truth", "mass healing word", "slow", "compulsion", "locate creature", "commune", "dominate person"],
		features : {
			"subclassfeature1" : {
				name : "Bonus Proficiency",
				source : [["T", 32], ["G", 26]],
				minlevel : 1,
				description : "\n   " + "I gain proficiency with heavy armor, and either the Intimidation or Persuasion skill",
				armorProfs : [false, false, true, false],
				skillstxt : "Choose one from Intimidation or Persuasion"
			},
			"subclassfeature1.1" : {
				name : "Voice of Authority",
				source : [["T", 32], ["G", 26]],
				minlevel : 1,
				description : desc([
					"Whenever I use a spell slot to cast a spell on an ally, it can use its reaction to attack",
					"The ally makes one weapon attack against a target of my choice that I can see",
					"If the spell targets multiple allies, I can choose which one can make the attack"
				])
			},
			"subclassfeature2" : {
				name : "Channel Divinity: Order's Demand",
				source : [["T", 32], ["G", 26]],
				minlevel : 2,
				description : desc([
					"As an action, all chosen targets in 30 ft that can see or hear me must make a Wis save",
					"If failed, it is charmed by me until the end of my next turn or it takes any damage",
					"Also, I can choose to have a charmed target drop what its holding when it fails its save"
				]),
				action : [["action", ""]]
			},
			"subclassfeature6" : {
				name : "Embodiment of the Law",
				source : [["T", 32], ["G", 26]],
				minlevel : 6,
				description : desc([
					"When I cast an enchantment spell using a spell slot, I can reduce its casting time",
					"If the spell normally has a casting time of an action, I can now cast it as a bonus action"
				]),
				usages : "Wisdom modifier per ",
				usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
				recovery : "long rest",
				calcChanges : {
					spellAdd : [
						function (spellKey, spellObj, spName) {
							if (CurrentSpells[spName].refType == "class" && spellObj.school == "Ench" && spellObj.time == "1 a") {
								spellObj.time = "1a/bns"
								return true;
							};
						},
						"When I cast an enchantment spell using a spell slot that normally requires 1 action to cast, I can reduce its casting time to a bonus action."
					]
				}
			},
			"subclassfeature8" : {
				name : "Divine Strike",
				source : [["T", 32], ["G", 26]],
				minlevel : 8,
				description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
				additional : levels.map(function (n) {
					if (n < 8) return "";
					return "+" + (n < 14 ? 1 : 2) + "d8 psychic damage";
				}),
				calcChanges : {
					atkAdd : [
						function (fields, v) {
							if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isSpell) {
								fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 psychic damage' + (classes.known.cleric.level < 17 ? '' : ' \u0026 again if hit by ally before my next turn');
							}
						},
						"Once per turn, I can have one of my weapon attacks that hit do extra psychic damage."
					]
				}
			},
			"subclassfeature17" : {
				name : "Order's Wrath",
				source : [["T", 32], ["G", 26]],
				minlevel : 17,
				description : desc([
					"If I deal my Divine Strike damage to a creature, it is cursed until my next turn starts",
					"The next time it is hit by a weapon attack from my allies, it takes +2d8 psychic damage"
				])
			}
		}
	});
} // dupl_end
AddSubClass("cleric", "peace domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*peace).*$/i,
	subname : "Peace Domain",
	source : [["T", 32]],
	spellcastingExtra : ["heroism", "sanctuary", "aid", "warding bond", "beacon of hope", "sending", "aura of purity", "otiluke's resilient sphere", "greater restoration", "rary's telepathic bond"],
	features : {
		"subclassfeature1" : {
			name : "Emboldening Bond",
			source : [["T", 33]],
			minlevel : 1,
			description : levels.map(function (n) {
				return desc([
					"As an action, I can magically bond my Prof. Bonus of willing creatures I can see in 30 ft",
					"I can be one of the bonded creatures; The bond lasts for 10 min or until I use this again",
					"While within " + (n < 17 ? 30 : 60) + " ft of another, a bonded target can add +1d4 to a save, attack, or check",
					"Each creature can add the +1d4 only once per turn"
				]);
			}),
			action : [["action", ""]],
			usages : "Proficiency Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest"
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Balm of Peace",
			source : [["T", 33]],
			minlevel : 2,
			description : desc([
				"As an action, I can move up to my speed without provoking opportunity attacks",
				"During this move, I can heal each creature that I come within 5 ft of once",
				"I restore a number of hit points equal to 2d6 + my Wisdom modifier (minimum 1 HP)"
			]),
			action : [["action", ""]]
		},
		"subclassfeature6" : {
			name : "Protective Bond",
			source : [["T", 33]],
			minlevel : 6,
			description : desc([
				"My Emboldening Bond now also helps those bonded to protect each other if within range",
				"When one is about to take damage, another bonded can use its reaction to teleport closer",
				"They teleport to an empty space within 5 ft of the first and take all the damage instead",
				"From 17th-level, they count as having resistance for this damage, thus take only half"
			]),
			additional : levels.map(function (n) {
				return n < 6 ? "" : "the bonded must be within " + (n < 17 ? 30 : 60) + " ft";
			})
		},
		"subclassfeature8" : {
			name : "Potent Spellcasting",
			source : [["T", 33]],
			minlevel : 8,
			description : "\n   I add my Wisdom modifier to the damage I deal with my cleric cantrips",
			calcChanges : {
				atkCalc : [
					function (fields, v, output) {
						if (classes.known.cleric && classes.known.cleric.level > 7 && v.thisWeapon[3] && v.thisWeapon[4].indexOf('cleric') !== -1 && SpellsList[v.thisWeapon[3]].level === 0) {
							output.extraDmg += What('Wis Mod');
						};
					},
					"My cleric cantrips get my Wisdom modifier added to their damage."
				],
				spellAdd : [
					function (spellKey, spellObj, spName) {
						if (spName.indexOf("cleric") == -1 || !What("Wis Mod") || Number(What("Wis Mod")) <= 0 || spellObj.psionic || spellObj.level !== 0) return;
						if (spellKey == "shillelagh") {
							spellObj.description = spellObj.description.replace("1d8", "1d8+" + What("Wis Mod"));
							return true;
						}
						return genericSpellDmgEdit(spellKey, spellObj, "\\w+\\.?", "Wis", true);
					},
					"My cleric cantrips get my Wisdom modifier added to their damage."
				]
			}
		},
		"subclassfeature17" : {
			name : "Expansive Bond",
			source : [["T", 33]],
			minlevel : 17,
			description : desc([
				"Emboldening and Protective Bond work when the bonded are within 60 ft of each other",
				"Protective Bond now also grants resistance when used to take damage for another"
			])
		}
	}
});
AddSubClass("cleric", "twilight domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(twilight|transition)).*$/i,
	subname : "Twilight Domain",
	source : [["T", 34]],
	spellcastingExtra : ["faerie fire", "sleep", "moonbeam", "see invisibility", "aura of vitality", "leomund's tiny hut", "aura of life", "greater invisibility", "circle of power", "mislead"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Proficiency",
			source : [["T", 34]],
			minlevel : 1,
			description : "\n   I gain proficiency with martial weapons and heavy armor",
			armorProfs : [false, false, true, false],
			weaponProfs : [false, true]
		},
		"subclassfeature1.1" : {
			name : "Eyes of Night",
			source : [["T", 34]],
			minlevel : 1,
			description : desc([
				"I gain darkvision out to a range of 300 ft; As an action, I can grant others this as well",
				"I can grant it for 1 hour to my Wis mod (min 1) of willing targets I can see within 10 ft",
				"I can do this once per long rest, or by expending a spell slot (SS 1+)"
			]),
			action : [["action", " (grant others)"]],
			vision : [["Darkvision", 300]],
			additional : "grant others",
			usages : 1,
			recovery : "long rest",
			altResource : "SS 1+"
		},
		"subclassfeature1.2" : {
			name : "Vigilant Blessing",
			source : [["T", 35]],
			minlevel : 1,
			description : desc([
				"As an action, I can grant myself or a creature I touch adv. on the next initiative roll",
				"This benefit ends immediately after the roll or when I use this feature again"
			]),
			action : [["action", ""]]
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Twilight Sanctuary",
			source : [["T", 35]],
			minlevel : 2,
			description : desc([
				"As an action, I can use my holy symbol to create a 30-ft radius sphere around myself",
				"It moves with me, is filled with dim light, and lasts for 1 min or until I'm incapacitated",
				"When a creature, including me, ends its turn inside the sphere, I can grant it a benefit:",
				" \u2022 I grant it temporary hit points equal to 1d6 + my cleric level",
				" \u2022 I end one effect on it causing it to be charmed or frightened",
				"From 17th-level onwards, me and my allies have half cover while inside the sphere"
			]),
			action : [["action", ""]],
			additional : levels.map(function(n) {
				return n < 2 ? "" : "1d6 + " + n + " temp HP";
			}),
		},
		"subclassfeature6" : {
			name : "Steps of Night",
			source : [["T", 35]],
			minlevel : 6,
			description : desc([
				"As a bonus action when I'm in dim light or darkness, I can magically grant myself flight",
				"I gain a flying speed equal to my walking speed for 1 minute"
			]),
			action : [["bonus action", ""]],
			usages : "Proficiency Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest"
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : [["T", 35]],
			minlevel : 8,
			description : "\n  Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
			additional : levels.map(function (n) {
				if (n < 8) return "";
				return "+" + (n < 14 ? 1 : 2) + "d8 radiant damage";
			}),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isSpell) {
							fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 radiant damage';
						}
					},
					"Once per turn, I can have one of my weapon attacks that hit do extra radiant damage."
				]
			}
		},
		"subclassfeature17" : {
			name : "Twilight Shroud",
			source : [["T", 35]],
			minlevel : 17,
			description : desc([
				"Me and my allies have half cover while in the sphere created by my Twilight Sanctuary"
			])
		}
	}
});


// >>>>>>>>>>>>>>>>>>>>> //
// >>> Druid Options >>> //
// >>>>>>>>>>>>>>>>>>>>> //

// Druid Optional Class Features
AddFeatureChoice(ClassList.druid.features.spellcasting, true, "Additional Druid Spells", {
	name : "Additional Druid Spells",
	extraname : "Optional Druid 1",
	source : [["T", 35]],
	description : "",
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Stop this is not the class' spell list or if this is for a bonus spell entry
				if (spName !== "druid" || spType.indexOf("bonus") !== -1) return;
				spList.extraspells = spList.extraspells.concat(["protection from evil and good", "augury", "continual flame", "enlarge/reduce", "aura of vitality", "elemental weapon", "revivify", "divination", "fire shield", "cone of cold", "flesh to stone", "symbol", "incendiary cloud"]);
			},
			"This optional class feature expands the spell list of the druid class with the following spells (spell level in brackets): Protection from Evil and Good (1), Augury (2), Continual Flame (2), Enlarge/Reduce (2), Aura of Vitality (3), Elemental Weapon (3), Revivify (3), Divination (4), Fire Shield (4), Cone of Cold (5), Flesh to Stone (6), Symbol (7), and Incendiary Cloud (8)."
		]
	}
}, "Optional 1st-level druid features");
var TCoE_Wild_Companion = {
	name : "Wild Companion",
	extraname : "Optional Druid 2",
	source : [["T", 35], ["UA:CFV", 4]],
	description : desc([
		"I can expend a use of wild shape to cast Find Familiar without material components",
		"The familiar always has the Fey type and disappears after half my druid level in hours"
	]),
	additional : levels.map(function (n) {
		return n < 2 ? "" : Math.floor(n/2) + " hours";
	}),
	spellcastingBonus : {
		name : "Wild Companion",
		spells : ["find familiar"],
		selection : ["find familiar"],
		firstCol : "Sp"
	},
	spellChanges : {
		"find familiar" : {
			components : "V,S",
			compMaterial : "",
			description : "Gain the services of a fey familiar; can see through its eyes; it can deliver touch spells; see B",
			duration : "\u00BD druid lvl h",
			changes : "By using my Wild Companion class feature, I can expend a use of wild shape to cast Find Familiar without material components. The familiar created this way always has the Fey type and disappears after a number of hours equal to half my druid level."
		}
	}
}
AddFeatureChoice(ClassList.druid.features["subclassfeature2.wild shape"], true, "Wild Companion", TCoE_Wild_Companion, "Optional 2nd-level druid features");
if (ClassSubList["druid-circle of the moon"]) {
	AddFeatureChoice(ClassSubList["druid-circle of the moon"].features["subclassfeature2.wild shape"], true, "Wild Companion", TCoE_Wild_Companion, "Optional 2nd-level druid features");
}
AddFeatureChoice(ClassList.druid.features.druidic, true, "Cantrip Versatility", {
	name : "Cantrip Versatility",
	extraname : "Optional Druid 4",
	source : [["T", 35]],
	description : " [ASI = Ability Score Improvement]\n   Whenever I gain an ASI from the druid class, I can change one druid cantrip for another",
	prereqeval : function (v) { return classes.known.druid.level >= 4 ? true : "skip"; }
}, "Optional 4th-level druid features");

// Druid Subclasses
// [dupl_start] reprints from Guildmasters' Guide to Ravnica
if (!SourceList.G) {
	AddSubClass("druid", "circle of spores", {
		regExpSearch : /^(?=.*(druid|shaman))(?=.*spores).*$/i,
		subname : "Circle of Spores",
		source : [["T", 36], ["G", 26]],
		features : {
			"subclassfeature2" : {
				name : "Circle Spells",
				source : [["T", 36], ["G", 27]],
				minlevel : 2,
				description : desc([
					"I learn the Chill Touch cantrip and gain the ability to cast certain spells",
					"These are always prepared, but don't count against the number of spells I can prepare"
				]),
				spellcastingBonus : {
					name : "Circle Spells",
					spells : ["chill touch"],
					selection : ["chill touch"]
				},
				spellcastingExtra : ["blindness/deafness", "gentle repose", "animate dead", "gaseous form", "blight", "confusion", "cloudkill", "contagion"]
			},
			"subclassfeature2.1" : {
				name : "Halo of Spores",
				source : [["T", 36], ["G", 27]],
				minlevel : 2,
				 description : desc([
					"As a reaction when someone I can see in 10 ft starts its turn or moves, I can have it save",
					"It must succeed on a Constitution save or take necrotic damage from my cloud of spores"
				]),
				additional : levels.map(function (n) { return n < 2 ? "" : 'Con save or 1d' + (n < 6 ? 4 : n < 10 ? 6 : n < 14 ? 8 : 10) + " necrotic damage"; }),
				action : ["reaction", ""]
			},
			"subclassfeature2.2" : { // changed from poison to necrotic damage in TCoE
				name : "Symbiotic Entity",
				source : [["T", 37], ["G", 27]],
				minlevel : 2,
				description : desc([
					"As an action, I can expend a Wild Shape use to boost my spores instead of transforming",
					"I gain 4 temporary hit points per druid level and my Halo of Spores damage increases",
					"Also, my melee weapon attacks do +1d6 necrotic damage with every hit",
					"This lasts for 10 min, until these temporary HP run out, or until I use Wild Shape again"
				]),
				additional : levels.map(function (n) {
					return n < 2 ? "" : Math.floor(n*4) + " temp HP; Halo of Spores: 2d" + (n < 6 ? 4 : n < 10 ? 6 : n < 14 ? 8 : 10);
				}),
				action : ["action", ""],
				calcChanges : {
					atkAdd : [
						function (fields, v) {
							if (v.isMeleeWeapon && !v.isNaturalWeapon && (/\b(spore|symbiotic)\b/i).test(v.WeaponText)) {
								fields.Description += (fields.Description ? '; ' : '') + '+1d6 necrotic damage';
							};
						},
						"If I include the word \"Spore\" or \"Symbiotic\" in a melee weapon's name, it gets treated as a weapon that is infused by my Symbiotic Entity feature, adding +1d6 necrotic damage in the description."
					]
				}
			},
			"subclassfeature6" : {
				name : "Fungal Infestation",
				source : [["T", 37], ["G", 27]],
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
				source : [["T", 37], ["G", 27]],
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
				source : [["T", 38], ["G", 27]],
				minlevel : 14,
				description : desc([
					"I'm immune to being blinded, deafened, frightened, poisoned, and critical hits"
				]),
				savetxt : { immune : ["blinded", "deafened", "frightened", "poisoned", "critical hits (unless incapacitated)"] }
			}
		}
	});
} // dupl_end
AddSubClass("druid", "circle of the stars", {
	regExpSearch : /^(?=.*(druid|shaman))(?=.*circle)(?=.*stars).*$/i,
	subname : "Circle of the Stars",
	source : [["T", 38]],
	features : {
		"subclassfeature2" : {
			name : "Star Map",
			source : [["T", 38]],
			minlevel : 2,
			description : desc([
				"I've created a star map, a Tiny object which I can use as my spellcasting focus",
				"If I lose it, I can preform a 1-hour ceremony during a rest to create a replacement",
				"While holding it, I know the Guidance cantrip and always have Guiding Bolt prepared",
				"These count as druid spells, but do not count against the number of spells I can prepare",
				"I can cast Guiding Bolt without expending a spell slot my Proficiency Bonus per long rest"
			]),
			spellcastingBonus : [{
				name : "Star Map",
				spells : ["guidance"],
				selection : ["guidance"],
				firstCol : "atwill"
			}, {
				name : "Star Map",
				spells : ["guiding bolt"],
				selection : ["guiding bolt"],
				firstCol : "Sp"
			}],
			additional : "Guiding Bolt",
			usages : "Proficiency Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest"
		},
		"subclassfeature2.1" : {
			name : "Starry Form",
			source : [["T", 38]],
			minlevel : 2,
			description : desc([
				"As a bonus action, I can expend a use of wild shape to take on a starry form for 10 min",
				"In that form I shed bright light in a 10-ft radius and dim light for an extra 10-ft radius",
				"When I do so, I choose one constellation that glimmers on my body, granting me benefits",
				"See the 3rd page's \"Notes\" section for the benefits of the possible constellations"
			]),
			weaponOptions : {
				regExpSearch : /^(?=.*luminous)(?=.*arrow).*$/i,
				name : "Luminous Arrow",
				source : [["T", 38]],
				ability : 5,
				type : "Spell",
				damage : [1, 8, "radiant"],
				range : "60 ft",
				description : "Use as bonus action",
				abilitytodamage : true,
				useSpellMod : "druid",
				luminousarrow : true
			},
			weaponsAdd : ['Luminous Arrow'],
			extraname : "Starry Form",
			"archer constellation" : {
				name : "Archer Constellation",
				source : [["T", 38]],
				description : desc([
					"As a bonus action, I can make a ranged spell attack to hurl a luminous arrow 60 ft",
					"I can also do this as part of the bonus action I use to assume the starry form"
				]),
				additional : levels.map(function (n) {
					return n < 2 ? "" : (n < 10 ? 1 : 2) + "d8 + Wisdom modifier radiant damage";
				}),
				action : [["bonus action", " (Luminous Arrow)"]]
			},
			"chalice constellation" : {
				name : "Chalice Constellation",
				source : [["T", 39]],
				description : desc([
					"When I cast a healing spell with a spell slot, I can heal myself or another within 30 ft of me"
				]),
				additional : levels.map(function (n) {
					return n < 2 ? "" : (n < 10 ? 1 : 2) + "d8 + Wisdom modifier hit points restored";
				})
			},
			"dragon constellation" : {
				name : "Dragon Constellation",
				source : [["T", 39]],
				description : desc([
					"I can treat a roll below 10 as a 10 for Int/Wis checks and saves to maintain concentration",
					"From 10th-level onwards, I also gain a flying speed of 20 ft and can hover"
				])
			},
			autoSelectExtrachoices : [{
				extrachoice : "archer constellation"
			}, {
				extrachoice : "chalice constellation"
			}, {
				extrachoice : "dragon constellation"
			}]
		},
		"subclassfeature6" : {
			name : "Cosmic Omen",
			source : [["T", 39]],
			minlevel : 6,
			description : desc([
				"When I finish a long rest, I roll a die to gain an omen based on the result (odd/even)",
				"As a reaction when a creature I can see in 30 ft makes an attack, check, or save, I can:",
				" \u2022 Weal (even): add 1d6 to the number rolled for the attack, check, or save",
				" \u2022 Woe (odd): subtract 1d6 from the number rolled for the attack, check, or save"
			]),
			action : [["reaction", ""]],
			usages : "Proficiency Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest"
		},
		"subclassfeature10" : {
			name : "Twinkling Constellations",
			source : [["T", 39]],
			minlevel : 10,
			description : desc([
				"While in my starry form, I can change the constellation at the start of each of my turns",
				"The benefit of my constellations improve, see the 3rd page's \"Notes\" section"
			]),
			calcChanges : {
				atkAdd : [function (fields, v) {
					if (v.theWea.luminousarrow && fields.Damage_Die.indexOf('1d8') !== -1) {
						fields.Damage_Die = fields.Damage_Die.replace('1d8', '2d8');
					};
				}]
			}
		},
		"subclassfeature14" : {
			name : "Full of Stars",
			source : [["T", 39]],
			minlevel : 14,
			description : "\n   While in my starry form, I have resistance to bludgeoning, piercing, and slashing damage",
			dmgres : [
				["Bludgeoning", "Bludgeon. (in form)"],
				["Piercing", "Piercing (in form)"],
				["Slashing", "Slashing (in form)"]
			]
		}
	}
});
AddSubClass("druid", "circle of wildfire", {
	regExpSearch : /^(?=.*(druid|shaman))(?=.*wild.{0,1}fire).*$/i,
	subname : "Circle of Wildfire",
	source : [["T", 39]],
	features : {
		"subclassfeature2" : {
			name : "Circle Spells",
			source : [["T", 39]],
			minlevel : 2,
			description : desc([
				"My link to a wildfire spirit grants me access to spells, which count as druid spells to me",
				"These are always prepared, but don't count against the number of spells I can prepare"
			]),
			spellcastingExtra : ["burning hands", "cure wounds", "flaming sphere", "scorching ray", "plant growth","revivify", "aura of life", "fire shield", "flame strike", "mass cure wounds"]
		},
		"subclassfeature2.1" : {
			name : "Summon Wildfire Spirit",
			source : [["T", 40]],
			minlevel : 2,
			description : desc([
				"As an action, I can expend a use of wild shape to summon a wildfire spirit within 30 ft",
				"All within 10 ft of where it manifests must make a Dex save or take 2d10 fire damage",
				"It is friendly and obeys my commands; It lasts for 1 hour, until it has 0 HP, or I die",
				"Unless I use a bonus action to command it, it only takes the Dodge action on its turn",
				"It can always take reactions and move on its turn; It acts on my initiative, after me",
				'It disappears if I summon another; See "Wildfire Spirit" on a companion page for its stats',
			]),
			action : [["action", ""], ["bonus action", "Command Wildfire Spirit"]],
			creaturesAdd : [["Wildfire Spirit"]],
			creatureOptions : [{
				name : "Wildfire Spirit",
				source : [["T", 40]],
				size : 4,
				type : "Elemental",
				alignment : "",
				ac : 13,
				hp : 20,
				hd : [],
				speed : "30 ft, fly 30 ft (hover)",
				scores : [10, 14, 14, 13, 15, 11],
				damage_immunities : "fire",
				condition_immunities : "charmed, frightened, grappled, prone, restrained",
				senses : "Darkvision 60 ft",
				passivePerception : 12,
				languages : "understands the languages of its creator",
				challengeRating : "1/2",
				proficiencyBonus : 2,
				proficiencyBonusLinked : true,
				attacksAction : 1,
				attacks : [{
					name : "Flame Seed",
					ability : 5,
					damage : [1, 6, "fire"],
					range : "60 ft",
					description : "Ranged weapon attack",
					modifiers : ["", "Prof"],
					abilitytodamage : false,
					useSpellMod : "druid"
				}, {
					name : "Fiery Teleportation",
					ability : 5,
					damage : [1, 6, "fire"],
					range : "5-ft radius",
					description : "Dex save for all within 5 ft of teleportation origin, success - no damage; See traits",
					dc : true,
					modifiers : ["", "Prof"],
					abilitytodamage : false,
					useSpellMod : "druid"
				}, {
					name : "Fiery Manifestation",
					ability : 5,
					damage : [2, 6, "fire"],
					range : "10-ft radius",
					description : "Dex save for all within 10 ft where spirit is summoned, success - no damage",
					dc : true,
					abilitytodamage : false,
					useSpellMod : "druid"
				}],
				features : [{
					name : "Creator",
					description : "The spirit obeys the commands of its creator and has the same proficiency bonus. It takes its turn immediately after its creator, on the same initiative count. It can move and take reactions on its own, but only takes the Dodge action on its turn unless its creator takes a bonus action to command it to take another action. If its creator is incapacitated, it can take any action, not just Dodge."
				}],
				actions : [{
					name : "Fiery Teleportation",
					description : "The spirit and each willing creature of its creator's choice within 5 ft of it teleport up to 15 ft to unoccupied spaces its creator can see. Then each creature within 5 ft of the space that the spirit left must succeed on a Dexterity saving throw against its creator's spell save DC or take fire damage equal to 1d6 + its proficiency bonus."
				}],
				traits : [{
					name : "Fiery Manifestation",
					description : "The spirit appears in an unoccupied space of its creator's choice that its creator can see within 30 ft. Each creature within 10 ft of the spirit (other than its creator) when it appears must succeed on a Dexterity saving throw against its creator's spell save DC or take 2d6 fire damage."
				}],
				header : "Wildfire",
				calcChanges : {
					hp : function (totalHD, HDobj, prefix) {
						if (!classes.known.druid) return;
						var drdLvl = classes.known.druid.level;
						var drdLvl5 = 5 * drdLvl;
						HDobj.alt.push(5 + drdLvl5);
						HDobj.altStr.push(" = 10 as a base\n + 5 \xD7 " + drdLvl + " from five times its creator's druid level (" + drdLvl5 + ")");
					},
					setAltHp : true
				}
			}]
		},
		"subclassfeature6" : {
			name : "Enhanced Bond",
			source : [["T", 40]],
			minlevel : 6,
			description : desc([
				"While my wildfire spirit is present, I can have my spells originate from it (no range 'self')",
				"Also, I can then add 1d8 to a single roll of my spells that restore HP or deal fire damage"
			])
		},
		"subclassfeature10" : {
			name : "Cauterizing Flames",
			source : [["T", 40]],
			minlevel : 10,
			description : desc([
				"As a reaction when a Small or larger creature dies within 30 ft of me or wildfire spirit,",
				"I can have a spectral flame erupt in its space that lasts for 1 minute",
				"As a reaction when I see a creature enter the flame's space, I can extinguish the flame",
				"This heals or deals fire damage to the creature (my choice) equal to 2d10 + my Wis mod"
			]),
			action : [["reaction", ""]],
			usages : "Proficiency Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest"
		},
		"subclassfeature14" : {
			name : "Blazing Revival",
			source : [["T", 40]],
			minlevel : 14,
			description : desc([
				"If I drop to 0 HP and don't die, and my wildfire spirit is within 120 ft, it can save me",
				"I can have it drop to 0 HP; I then regain half my HP and immediately rise to my feet"
			]),
			usages : 1,
			recovery : "long rest"
		}
	}
});


// >>>>>>>>>>>>>>>>>>>>>>> //
// >>> Fighter Options >>> //
// >>>>>>>>>>>>>>>>>>>>>>> //

// Fighter Optional Class Features
AddFightingStyle(["fighter", "ranger", "paladin"], "Blind Fighting", {
	name : "Blind Fighting Style",
	source : [["T", 41]],
	description : desc([
		"I have blindsight with 10 ft range, allowing me to see anything not behind total cover",
		"In range, I can see invisible, but not hidden, things, even when blinded or in darkness"
	]),
	vision : [["Blindsight", 10]]
});
AddFightingStyle(["fighter", "paladin"], "Interception", {
	name : "Interception Fighting Style",
	source : [["T", 41], ["UA:CFV", 12]],
	description : desc([
		"As a reaction when a creature I can see hits another within 5 ft of me, I can intercept",
		"I reduce the damage the target takes by 1d10 + my Proficiency Bonus (min 0 damage)",
		"I can't be the target and it requires me wielding a shield or a simple or martial weapon"
	]),
	action : [["reaction", ""]]
});
AddFightingStyle(["fighter", "ranger"], "Thrown Weapon Fighting", {
	name : "Thrown Weapon Fighting Style",
	source : [["T", 42]],
	description : desc([
		"I can draw a weapon with the thrown property as part of the attack I make with it",
		"In addition, my ranged attacks made with thrown weapons deal +2 damage"
	]),
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.isMeleeWeapon && (/thrown/i).test(fields.Description)) {
					if (v.isMeleeWeapon) fields.Description += (fields.Description ? '; ' : '') + '+2 damage when thrown';
				};
			},
			"I deal +2 damage when I hit a ranged attack made with a thrown weapon."
		]
	}
});
AddFightingStyle(["fighter"], "Unarmed Fighting", {
	name : "Unarmed Fighting Style",
	source : [["T", 42]],
	description : desc([
		"My unarmed strikes deal 1d6 damage, or 1d8 damage when I have both hands free",
		"At the start of my turn, I can deal 1d4 bludgeoning damage to one target I'm grappling"
	]),
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.baseWeaponName == "unarmed strike") {
					if (fields.Damage_Die == 1 || fields.Damage_Die == "1d4") fields.Damage_Die = '1d6';
					fields.Description += (fields.Description ? '; ' : '') + 'Versatile (d8)';
				};
			},
			"My unarmed strikes deal 1d6 damage instead of 1, which increases to 1d8 if I have both hands free to make an unarmed strike with."
		]
	}
});
AddFeatureChoice(ClassList.fighter.features['action surge'], true, "Martial Versatility", {
	name : "Martial Versatility",
	extraname : "Optional Fighter 4",
	source : [["T", 42]],
	description : " [ASI = Ability Score Improvement]\n   Whenever I gain an ASI from the fighter class, I can change a fighting style or a maneuver",
	prereqeval : function (v) { return classes.known.fighter.level >= 4 ? true : "skip"; }
}, "Optional 4th-level fighter features");
// Fighter alternative class features and enhancements (only if Battle Master subclass exists)
if (ClassSubList["fighter-battle master"]) {
	AddFightingStyle(["fighter"], "Superior Technique", {
		name : "Superior Technique",
		source : [["T", 41], ["UA:CFV", 5]],
		description : " [1 maneuver; d6, 1\xD7 per short rest]" + desc([
			"I gain one superiority die (d6) that I can expend to fuel a special Maneuver",
			"I can only use one Maneuver per attack; DCs are 8 + Prof B. + Str/Dex mod, my choice",
			'Use the "Choose Feature" button above to add a Maneuver to the third page'
		]),
		bonusClassExtrachoices : [{
			"class" : "fighter",
			"subclass" : "fighter-battle master",
			"feature" : "subclassfeature3.1",
			"bonus" : 1
		}],
		extraLimitedFeatures : [{
			name : "Combat Superiority",
			usages : 1,
			additional : 'd6',
			recovery : "short rest",
			addToExisting : true
		}]
	});
	// New Maneuver options
	AddFeatureChoice(ClassSubList["fighter-battle master"].features["subclassfeature3.1"], true, "Ambush", {
		name : "Ambush",
		source : [["T", 42], ["UA:CFV", 5]],
		description : desc([
			"When I make an initiative roll or a Dex (Stealth) check, I can add a superiority die to it",
			"I can't do this if I'm incapacitated"
		])
	});
	AddFeatureChoice(ClassSubList["fighter-battle master"].features["subclassfeature3.1"], true, "Bait and Switch", {
		name : "Bait and Switch",
		source : [["T", 42]],
		description : desc([
			"On my turn, I can expend a superiority die to swap places with an ally within 5 ft",
			"I can't do this if the ally is incapacitated or unwilling to swap",
			"Doing this costs me 5 ft of movement, but this doesn't provoke opportunity attacks",
			"Me or my ally (my choice) can then add the superiority die to AC until my next turn starts"
		])
	});
	AddFeatureChoice(ClassSubList["fighter-battle master"].features["subclassfeature3.1"], true, "Brace", {
		name : "Brace",
		source : [["T", 42]],
		description : desc([
			"As a reaction when a creature I can see moves within my melee reach, I can attack it",
			"I expend a superiority die and make one weapon attack, adding the die to the damage"
		]),
		action : [["reaction", ""]]
	});
	AddFeatureChoice(ClassSubList["fighter-battle master"].features["subclassfeature3.1"], true, "Commanding Presence", {
		name : "Commanding Presence",
		source : [["T", 42]],
		description : "\n   When I make a Performance, Intimidation, or Persuasion check, I can add a superiority die"
	});
	AddFeatureChoice(ClassSubList["fighter-battle master"].features["subclassfeature3.1"], true, "Grappling Strike", {
		name : "Grappling Strike",
		source : [["T", 42]],
		description : desc([
			"Immediately after hitting with a melee attack, I can use a bonus action to try to grapple",
			"I add the superiority die to the Str (Athletics) check; I can only do this on my own turn"
		]),
		action : [["bonus action", " (after melee hit)"]]
	});
	AddFeatureChoice(ClassSubList["fighter-battle master"].features["subclassfeature3.1"], true, "Quick Toss", {
		name : "Quick Toss",
		source : [["T", 42]],
		description : desc([
			"As a bonus action, I can use a superiority die to do a ranged attack with a thrown weapon",
			"I can draw a thrown weapon as part of making this attack; I add the die to the damage"
		]),
		action : [["bonus action", ""]]
	});
	AddFeatureChoice(ClassSubList["fighter-battle master"].features["subclassfeature3.1"], true, "Tactical Assessment", {
		name : "Tactical Assessment",
		source : [["T", 42]],
		description : "\n   When I make an Investigation, History, or Insight check, I can add a superiority die to it"
	});
}

// Fighter Subclasses
AddSubClass("fighter", "psi warrior", {
	regExpSearch : /^(?=.*\bpsi(onic)?s?\b)(?=.*warrior).*$/i,
	subname : "Psi Warrior",
	source : [["T", 42]],
	fullname : "Psi Warrior",
    abilitySave : 4,
	features : {
		"subclassfeature3" : {
			name : "Psionic Energy Dice",
			source : [["T", 43]],
			minlevel : 3,
			description : desc([
				"I gain twice my proficiency bonus of psionic energy dice (PsiD) that fuel my psionics",
				"I regain all expended psionic energy dice after a long rest",
				"As a bonus action once per short rest, I can regain one expended psionic energy die"
			]),
			additional : levels.map(function(n) {
				return n < 3 ? "" : n < 5 ? "d6" : n < 11 ? "d8" : n < 17 ? "d10" : "d12";
			}),
			action : [["bonus action", "Regain 1 Psionic Energy Die"]],
			usages : "Proficiency Bonus \xD7 2 per ",
			usagescalc : "event.value = Number(How('Proficiency Bonus'))*2",
			recovery : "long rest",
			extraLimitedFeatures : [{
				name : "Regain 1 Psionic Energy die",
				usages : 1,
				recovery : "short rest"
			}]
		},
		"subclassfeature3.1" : {
			name : "Psionic Power: Protective Field",
			source : [["T", 43]],
			minlevel : 3,
			description : " [1 psionic energy die]" + desc([
				"As a reaction when I or a creature I can see within 30 ft takes damage, I can reduce it",
				"I reduce the damage by the roll of the one psionic energy die I expend + my Int mod"
			]),
			action : [["reaction", "Protective Field"]]
		},
		"subclassfeature3.2" : {
			name : "Psionic Power: Psionic Strike",
			source : [["T", 43]],
			minlevel : 3,
			description : " [1 psionic energy die]" + desc([
				"Once on each of my turns after I hit a target in 30 ft and damage it with a weapon,",
				"I can expend a psionic energy die to deal it the die roll + my Int mod in force damage"
			])
		},
		"subclassfeature3.3" : {
			name : "Psionic Power: Telekinetic Movement",
			source : [["T", 43]],
			minlevel : 3,
			description : desc([
				"As an action, I can move a Large or smaller loose object or one willing creature in 30 ft",
				"I must be able to see the target and can move it up to 30 ft to an empty space I can see",
				"If it is a Tiny object, I can also move it to or from my hand; I can't move myself this way",
				"I can do this once per short rest, or by expending a psionic energy die (PsiD)"
			]),
			limfeaname : "Telekinetic Movement",
			action : [["action", ""]],
			usages : 1,
			recovery : "short rest",
			altResource : "PsiD"
		},
		"subclassfeature7.1" : {
			name : "Telekinetic Adept: Psi-Powered Leap",
			source : [["T", 43]],
			minlevel : 7,
			description : desc([
				"As a bonus action, I gain a flying speed of twice my walking speed until the turn ends",
				"I can do this once per short rest, or by expending a psionic energy die (PsiD)"
			]),
			limfeaname : "Psi-Powered Leap",
			action : [["bonus action", ""]],
			usages : 1,
			recovery : "short rest",
			altResource : "PsiD"
		},
		"subclassfeature7.2" : {
			name : "Telekinetic Adept: Telekinetic Thrust",
			source : [["T", 43]],
			minlevel : 7,
			description : " [DC 8 + Prof B + Int mod]" + desc([
				"When I deal damage with my Psionic Strike, I can have the target make a Strength save",
				"If failed, I knock the target prone or move it up to 10 ft in any direction horizontally"
			]),
		},
		"subclassfeature10" : {
			name : "Guarded Mind",
			source : [["T", 43]],
			minlevel : 10,
			description : desc([
				"I can expend a psionic energy die to end all effects on me causing charmed or frightened",
				"I can do this if at the start of my turn; I also gain resistance to psychic damage"
			]),
			dmgres : ["Psychic"]
		},
		"subclassfeature15" : {
			name : "Bulwark of Force",
			source : [["T", 44]],
			minlevel : 15,
			description : desc([
				"As a bonus action, I can choose up to my Int mod of creatures (min 1) I can see in 30 ft",
				"This can include me; Each chosen gains half cover for 1 minute or until I'm incapacitated",
				"I can do this once per long rest, or by expending a psionic energy die (PsiD)"
			]),
			action : [["bonus action", ""]],
			usages : 1,
			recovery : "long rest",
			altResource : "PsiD"
		},
		"subclassfeature18" : {
			name : "Telekinetic Master",
			source : [["T", 44]],
			minlevel : 18,
			description : desc([
				"I can cast Telekinesis, requiring no spell slot or components, with Int spellcasting ability",
				"As a bonus action while concentrating on this spell, I can make one weapon attack",
				"I can cast Telekinesis once per long rest, or by expending a psionic energy die (PsiD)"
			]),
			spellcastingBonus : {
				name : "Telekinetic Master",
				spells : ["telekinesis"],
				selection : ["telekinesis"],
				firstCol : "Sp"
			},
			spellChanges : {
				"telekinesis" : {
					components : "",
					changes : "Using Telekinetic Master, I can cast Telekinesis without requiring components or spell slots."
				}
			},
			action : [["bonus action", "Weapon Attack while Telekinesis conc."]],
			usages : 1,
			recovery : "long rest",
			altResource : "PsiD"
		}
	}
});
AddSubClass("fighter", "rune knight", {
	regExpSearch : /^(?=.*rune)(?=.*knight).*$/i,
	subname : "Rune Knight",
	source : [["T", 44]],
	fullname : "Rune Knight",
	abilitySave : 3,
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiencies",
			source : [["T", 44]],
			minlevel : 3,
			description : "\n   I gain proficiency with smith's tools and I learn to speak, read, and write Giant",
			toolProfs : ["Smith's tools"],
			languageProfs : ["Giant"]
		},
		"subclassfeature3.1" : {
			name : "Rune Carver",
			source : [["T", 44]],
			minlevel : 3,
			description : desc([
				"I learn how to use magic runes to enhance my gear that I can wear or hold in my hand",
				'Use the "Choose Feature" button above to select a rune and add it to the third page',
				"When I finish a long rest, I can inscribe each rune I know upon a different item I touch",
				"Each item can hold only one rune and remains there until I finish a long rest",
				"Runes inscribed on a carried object grant both a passive and a limited-use active effect",
				"Whenever I gain a fighter level, I can swap a rune I know for another",
				"The DC for a rune's abilities is 8 + my Proficiency bonus + my Constitution modifier"
			]),
			additional : levels.map(function (n){
				return n < 3 ? "" : (n < 7 ? 2 : n < 10 ? 3 : n < 15 ? 4 : 5) + " runes known"
			}),
			extraTimes : levels.map(function (n) {
				return n < 3 ? 0 : n < 7 ? 2 : n < 10 ? 3 : n < 15 ? 4 : 5;
			}),
			extraname : "Rune Knight 3",
			extrachoices : ["Cloud Rune", "Fire Rune", "Frost Rune", "Stone Rune", "Hill Rune (prereq: level 7 fighter)", "Storm Rune (prereq: level 7 fighter)"],
			"cloud rune" : {
				name : "Cloud Rune",
				source : [["T", 44]],
				description : desc([
					"While I wear an object inscribed with this, I gain a deceptiveness reminiscent of cloud giants",
					"I always gain advantage on Dexterity (Sleight of Hand) and Charisma (Deception) checks",
					"As a reaction when I or another I can see within 30 ft is hit by an attack, I can invoke this",
					"I select another target for the attack within 30 ft of me, using the same roll (ignore range)"
				]),
				action : [["reaction", " (invoke)"]],
				additional : "invoke",
				usages : ["", "", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
				recovery : "short rest",
				advantages : [ ["Sleight of Hand", true], ["Deception", true] ]
			},
			"fire rune" : {
				name : "Fire Rune",
				source : [["T", 44]],
				description : desc([
					"While I wear an object inscribed with this, I gain craftsmanship reminiscent of great smiths",
					"I always double my proficiency bonus when making an ability check with a tool",
					"When I hit a creature with a weapon attack, I can invoke it to summon fiery shackles",
					"It takes an extra 2d6 fire damage and must make a Str save or be restrained for 1 min",
					"While restrained, the creature takes 2d6 fire damage at the start of each of its turns",
					"It can repeat the save at the end of each of its turns, banishing the shackles on a success"
				]),
				additional : "invoke",
				usages : ["", "", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
				recovery : "short rest",
				skillstxt : "expertise with all tools I am proficient with",
				eval : function () { Checkbox('Too Exp', true); },
				removeeval : function () { Checkbox('Too Exp', false); }
			},
			"frost rune" : {
				name : "Frost Rune",
				source : [["T", 45]],
				description : desc([
					"While I wear an object inscribed with this, I gain might of those surviving wintry wilderness",
					"I always gain advantage on Wisdom (Animal Handling) and Charisma (Intimidation) checks",
					"As a bonus action, I can invoke this to gain +2 on Str and Con checks and saves for 10 min"
				]),
				action : [["bonus action", " (invoke)"]],
				additional : "invoke",
				usages : ["", "", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
				recovery : "short rest",
				advantages : [ ["Animal Handling", true], ["Intimidation", true] ]
			},
			"stone rune" : {
				name : "Stone Rune",
				source : [["T", 45]],
				description : desc([
					"While I wear an object inscribed with this, I gain judiciousness reminiscent of stone giants",
					"I always gain advantage on Wisdom (Insight) checks and I gain darkvision out to 120 ft",
					"As a reaction when a creature I can see ends it turn within 30 ft, I can invoke this rune",
					"This causes the creature to make a Wisdom save or be charmed by me for 1 minute",
					"While charmed, it descends into a dreamy stupor, becoming incapacitated and has speed 0",
					"It can repeat the save at the end of each of its turns, ending the effect on a success"
				]),
				action : [["reaction", " (invoke)"]],
				additional : "invoke",
				usages : ["", "", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
				recovery : "short rest",
				vision : [["Darkvision", 120]],
				advantages : [ ["Insight", true] ]
			},
			"hill rune (prereq: level 7 fighter)" : {
				name : "Hill Rune",
				source : [["T", 45]],
				description : desc([
					"While I wear an object inscribed with this rune, I gain a resilience reminiscent of hill giants",
					"I always gain advantage on saves against being poisoned and resistance to poison damage",
					"As a bonus action, I can invoke it to gain resistance to bludg/slash/pierc damage for 1 min"
				]),
				prereqeval : function(v) { return classes.known.fighter.level >= 7; },
				action : [["bonus action", " (invoke)"]],
				additional : "invoke",
				usages : ["", "", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
				recovery : "short rest",
				dmgres : ["Poison"],
				savetxt : { adv_vs : ["poison"] }
			},
			"storm rune (prereq: level 7 fighter)" : {
				name : "Storm Rune",
				source : [["T", 45]],
				description : desc([
					"While I wear an object inscribed with this rune, I can glimpse the future like storm giants",
					"I always gain adv. on Int (Arcana) checks and I can't be surprised while not incapacitated",
					"As a bonus action, I can invoke it to enter a prophetic state for 1 min or till incapacitated",
					"While in this state, I can use a reaction to cause a roll to gain advantage or disadvantage",
					"I can do this for attacks, saves, and checks of myself or others I can see within 60 ft of me"
				]),
				prereqeval : function(v) { return classes.known.fighter.level >= 7; },
				action : [["bonus action", " (invoke)"]],
				additional : "invoke",
				usages : ["", "", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
				recovery : "short rest",
				advantages : [ ["Arcana", true] ],
				savetxt : { immune : ["surprised"] },
			}
		},
		"subclassfeature3.2" : {
			name : "Giant's Might",
			source : [["T", 45]],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can imbue myself with giant magic for 1 minute and gain benefits:",
				" \u2022 Space permitted, I grow to a larger size category along with everything I'm wearing",
				" \u2022 I have advantage on my Strength check and saves",
				" \u2022 My weapon and unarmed strike attacks deal extra damage"
			]),
			additional : levels.map(function (n) {
				return n < 3 ? "" : (n < 18 ? "Large" : "Huge") + ", +1d" + (n < 10 ? 6 : n < 18 ? 8 : 10) + " damage"
			}),
			action : [["bonus action", ""]],
			savetxt : { text : ["Adv. on Str saves in Giant's Might"] },
			usages : "Prof Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.fighter && classes.known.fighter.level >= 3 && v.isWeapon && (/giant('s)? might/i).test(v.WeaponTextName)) {
							var GMdmgDie = classes.known.fighter.level < 10 ? 'd6' : classes.known.fighter.level < 18 ? 'd8' : 'd10';
							var dmgDieRx = RegExp('(\\d+)' + GMdmgDie, 'i');
							if (dmgDieRx.test(fields.Damage_Die)) {
								var dmgDieMatch = fields.Damage_Die.match(dmgDieRx);
								fields.Damage_Die = fields.Damage_Die.replace(dmgDieRx, Number(dmgDieMatch[1]) + 1 + GMdmgDie);
								fields.Description = fields.Description.replace(/Versatile \((\d+d\d+)\)/i, 'Versatile ($1+1' + GMdmgDie + ')');
							} else if (!isNaN(fields.Damage_Die)) {
								fields.Damage_Die = 1 + GMdmgDie + "+" + fields.Damage_Die;
							} else {
								fields.Description += (fields.Description ? '; ' : '') + '+1' + GMdmgDie + ' damage';
							}
							if (classes.known.fighter.level >= 18 && v.isMeleeWeapon) fields.Description += (fields.Description ? '; ' : '') + '+5 ft reach';
						};
					},
					"If I include the words \"Giant Might\" in the name of a weapon or unarmed strike, it gets treated as a weapon that I use while imbued by my Giant's Might feature. It adds +1d6 weapon damage. From 10th-level onwards, this increases to +1d8 damage. From 18th-level onwards, this increases to +1d10 damage and my reach increases by 5 ft (for melee weapons)."
				]
			}
		},
		"subclassfeature7" : {
			name : "Runic Shield",
			source : [["T", 45]],
			minlevel : 7,
			description : desc([
				"As a reaction when I see a creature within 60 ft get hit by an attack, I can protect it",
				"The attacker must reroll its attack roll and use the new roll"
			]),
			action : [["reaction", ""]]
		},
		"subclassfeature10" : {
			name : "Great Stature",
			source : [["T", 46]],
			minlevel : 10,
			description : desc([
				"My runes permanently make me grow; I add 3d4 inches to my length",
				"In addition, the extra weapon damage I deal with Giant Might increases to 1d8"
			])
		},
		"subclassfeature15" : {
			name : "Master of Runes",
			source : [["T", 46]],
			minlevel : 15,
			description : "\n   I can now invoke each of my runes twice per short rest instead of once"
		},
		"subclassfeature18" : {
			name : "Runic Juggernaut",
			source : [["T", 46]],
			minlevel : 18,
			description : desc([
				"Giant's Might now adds +1d10 weapon damage, and can make me grow up to Huge",
				"While I'm Huge, my reach increases by 5 ft"
			])
		}
	}
});


// >>>>>>>>>>>>>>>>>>>> //
// >>> Monk Options >>> //
// >>>>>>>>>>>>>>>>>>>> //

// Monk Optional Class Features
AddFeatureChoice(ClassList.monk.features.ki, true, "Dedicated Weapon", {
	name : "Dedicated Weapon",
	extraname : "Optional Monk 2",
	source : [["T", 48]],
	description : desc([
		"When I finish a short or long rest, I can focus ki and touch one simple or martial weapon",
		"From then on, until I use this feature again, this weapon counts as a monk weapon for me",
		"I have to be proficient with the weapon and it can't have the heavy or special property"
	]),
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.monkweapon && !v.theWea.special && classes.known.monk && classes.known.monk.level && (/dedicated/i).test(v.WeaponTextName) && fields.Proficiency && (/simple|martial/i).test(v.theWea.type) && !(/\b(heavy|special)\b/i).test(fields.Description)) {
					v.theWea.monkweapon = true;
					var aMonkDie = function (n) { return n < 5 ? 4 : n < 11 ? 6 : n < 17 ? 8 : 10; }(classes.known.monk.level);
					try {
						var curDie = eval_ish(fields.Damage_Die.replace('d', '*'));
					} catch (e) {
						var curDie = 'x';
					};
					if (isNaN(curDie) || curDie < aMonkDie) {
						fields.Damage_Die = '1d' + aMonkDie;
					};
					if (fields.Mod == 1 || fields.Mod == 2 || What(AbilityScores.abbreviations[fields.Mod - 1] + " Mod") < What(AbilityScores.abbreviations[v.StrDex - 1] + " Mod")) {
						fields.Mod = v.StrDex;
					}
				};
			},
			'If I include the word "Dedicated" in the name of a simple or martial weapon that I\'m proficient with and that doesn\'t have the heavy or special property, it will be treated as a monk weapon.'
		]
	}
}, "Optional 2nd-level monk features");
AddFeatureChoice(ClassList.monk.features["unarmored movement"], true, "Ki-Fueled Attack", {
	name : "Ki-Fueled Attack",
	extraname : "Optional Monk 3",
	source : [["T", 48]],
	description : desc([
		"If I use any ki points during my action on my turn, I can make an attack as a bonus action",
		"This attack has to be in the same turn and with an unarmed strike or a monk weapon"
	]),
	action : [["bonus action", ""]]
}, "Optional 3rd-level monk features");
AddFeatureChoice(ClassList.monk.features["slow fall"], true, "Quickened Healing (2 ki points)", {
	name : "Quickened Healing",
	extraname : "Optional Monk 4",
	source : [["T", 49]],
	description : " [2 ki points]\n   As an action, I can regain HP equal to the roll of my martial arts die + Proficiency Bonus",
	action : [["action", ""]]
}, "Optional 4th-level monk features");
AddFeatureChoice(ClassList.monk.features["deflect missiles"], true, "Focused Aim (1-3 ki points)", {
	name : "Focused Aim",
	extraname : "Optional Monk 5",
	source : [["T", 49]],
	description : " [1-3 ki points]\n   When I miss an attack roll, I can spend ki to increase the roll by +2 per ki point (max +6)",
	prereqeval : function (v) { return classes.known.monk.level >= 5 ? true : "skip"; }
}, "Optional 5th-level monk features");

// Monk Subclasses
AddSubClass("monk", "way of mercy", {
	regExpSearch : /^(?=.*mercy)((?=.*(monk|monastic))|((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior))).*$/i,
	subname : "Way of Mercy",
	source : [["T", 49]],
	features : {
		"subclassfeature3" : {
			name : "Implements of Mercy",
			source : [["T", 49]],
			minlevel : 3,
			description : desc([
				"I gain proficiency with Insight, Medicine, and herbalism kit; I have a special Merciful Mask"
			]),
			skills : ["Insight", "Medicine"],
			toolProfs : ["Herbalism kit"],
			"hands of healing" : {
				name : "Hands of Healing",
				extraname : "Way of Mercy 3",
				source : [["T", 49]],
				description : levels.map(function (n) {
					var a = "As an action, I can spend 1 ki point to touch a creature and restore a number of its HP";
					var b6 = "It also recovers from one disease or being blinded, deafened, paralyzed, poisoned or stunned";
					var c = "When I use Flurry of Blows, I can do this instead of one unarmed strike (no extra ki cost)";
					return desc( n < 6 ? [a, c] :
						[a, b6, n < 11 ? c : c.replace("one", "each")]
					);
				}),
				action : [["action", ""]],
				additional : levels.map(function (n) {
					return n < 3 ? "" : "1 ki point; heal 1d" + (n < 5 ? 4 : n < 11 ? 6 : n < 17 ? 8 : 10) + " + Wisdom modifier";
				})
			},
			"hands of harm" : {
				name : "Hands of Harm",
				extraname : "Way of Mercy 3",
				source : [["T", 50]],
				description : levels.map(function (n) {
					var a = "When I hit a creature with an unarmed strike, I can spend 1 ki point to deal extra damage";
					var b6 = "I can also subject the target to the poisoned condition until the end of my next turn";
					var c11 = "When I use Flurry of Blows, I can do this with one unarmed strike (no extra ki cost)";
					var d = "I can use this feature only once per turn";
					return desc( n < 6 ? [a, d] :
						n < 11 ? [a, b6, d] :
						[a, b6, c11, d]
					);
				}),
				additional : levels.map(function (n) {
					return n < 3 ? "" : "1 ki point; 1d" + (n < 5 ? 4 : n < 11 ? 6 : n < 17 ? 8 : 10) + " + Wis mod necrotic damage";
				})
			},
			autoSelectExtrachoices : [{
				extrachoice : "hands of healing"
			}, {
				extrachoice : "hands of harm"
			}]
		},
		"subclassfeature6" : {
			name : "Physician's touch",
			source : [["T", 50]],
			minlevel : 6,
			description :  desc([
				"Hand of Healing also ends 1 disease, blinded, deafened, paralyzed, poisoned or stunned",
				"Hand of Harm also causes target to be poisoned until the end of my next turn"
			])
		},
		"subclassfeature11" : {
			name : "Flurry of Healing and Harm",
			source : [["T", 50]],
			minlevel : 11,
			description : desc([
				"I can use Hand of Healing instead of each Flurry of Blows unarmed strike without ki cost",
				"I can use Hand of Harm on one Flurry of Blows unarmed strike without ki cost"
			]),
			"hand of ultimate mercy" : {
				name : "Hand of Ultimate Mercy",
				extraname : "Way of Mercy 17",
				source : [["T", 50]],
				description : desc([
					"As an action, I can spend 5 ki points and touch a creature that died in the last 24 hours",
					"The creature returns to life and regains 4d10 + my Wisdom modifier in hit points",
					"It is also cured of all these conditions: blinded, deafened, paralyzed, poisoned, and stunned"
				]),
				action : [["action", ""]],
				additional : "5 ki points",
				usages : 1,
				recovery : "long rest"
			},
			autoSelectExtrachoices : [{
				extrachoice : "hand of ultimate mercy",
				minlevel : 17
			}]
		}
	}
});
AddSubClass("monk", "way of the astral self", {
	regExpSearch : /^(?=.*astral)(?=.*(self|projection|travel))((?=.*(monk|monastic))|((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior))).*$/i,
	subname : "Way of the Astral Self",
	source : [["T", 50]],
	features : {
		"subclassfeature3" : {
			name : "Arms of the Astral Self",
			source : [["T", 50]],
			minlevel : 3,
			description : ' [1 ki; see 3rd page "Notes"]' + desc([
				"As a bonus action, I can use my ki to summon the arms of my astral self for 10 minutes"
			]),
			action : [["bonus action", "Summon Astral Arms"]],
			weaponsAdd : ["Astral Arms"],
			weaponOptions : {
				baseWeapon : "unarmed strike",
				regExpSearch : /^(?=.*\bastral\b)(?=.*\barms?\b).*$/i,
				name : "Astral Arms",
				source : [["T", 50]],
				ability : 5,
				range : "Melee (+5 ft)",
				damage : [1, "", "Force"],
				description : "+5 ft reach; Uses Str, Dex, or Wis",
				isAstralArms : true
			},
			"astral arms" : {
				name : "Astral Arms",
				extraname : "Way of the Astral Self 3",
				source : ["UA:BnM", 2],
				description : desc([
					"As a bonus action, I can summon my astral arms to hover next to or over my own arms",
					"When I summon them, all creatures of my choice I can see in 10 ft must make a Dex save",
					"If failed, they take twice my martial arts die in force damage",
					"I can use the arms to make unarmed strikes, using Wisdom instead of Strength/Dexterity",
					"I have +5 ft reach on attacks made with my astral arms and they deal force damage",
					"They last for 10 minutes or until I'm incapacitated or die; I choose their appearance"
				]),
				additional : levels.map(function (n) {
					return n < 3 ? "" : "1 ki point; 2d" + (n < 5 ? 4 : n < 11 ? 6 : n < 17 ? 8 : 10) + " force damage on summon";
				})
			},
			autoSelectExtrachoices : [{ extrachoice : "astral arms" }]
		},
		"subclassfeature6" : {
			name : "Visage of the Astral Self",
			source : [["T", 50]],
			minlevel : 6,
			description : ' [1 ki; see 3rd page "Notes"]' + desc([
				"As a bonus action, I can use my ki to summon the visage of my astral self for 10 minutes"
			]),
			action : [["bonus action", "Summon Astral Arms and/or Visage", "Summon Astral Arms"]],
			"astral visage" : {
				name : "Astral Visage",
				extraname : "Way of the Astral Self 6",
				source : [["T", 50]],
				description : " [1 ki point]" + desc([
					"As a bonus action (or when summoning my astral arms), I can summon my astral visage",
					"It lasts for 10 minutes or until I'm incapacitated or die; I choose its appearance",
					"My astral visage covers my face like a helmet or mask and grants me the following benefits:",
					" \u2022 Astral Sight: I can see normally in normal and magical darkness to a distance of 120 ft",
					" \u2022 Wisdom of the Spirit: I have advantage on Wisdom (Insight) and Charisma (Intimidation)",
					" \u2022 Word of the Spirit: I can have only one target I can see in 60 ft hear me, or all in 300 ft"
				])
			},
			autoSelectExtrachoices : [{ extrachoice : "astral visage" }]
		},
		"subclassfeature11" : {
			name : "Body of the Astral Self",
			source : [["T", 51]],
			minlevel : 11,
			description : ' [see 3rd page "Notes"]' + desc([
				"When I have both my astral arms and visage summoned, my astral body appears as well",
				"This spectral body covers me like an armor, connecting my astral arms and astral visage"
			]),
			action : [["reaction", "Deflect Energy"]],
			"astral body" : {
				name : "Astral Body",
				extraname : "Way of the Astral Self 11",
				source : [["T", 51]],
				description : " [if both astral arms \u0026 visage are present]" + desc([
					" \u2022 Deflect Energy: As a reaction when I take damage, I can reduce it by 1d10 + Wis mod",
					"   I can only do this if the damage I take is acid, cold, fire, force, lightning, or thunder",
					" \u2022 Empowered Arms: Once per my turn, I can add martial art die to astral arms damage"
				])
			},
			autoSelectExtrachoices : [{ extrachoice : "astral body" }],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.theWea.isAstralArms && classes.known.monk && classes.known.monk.level) {
							var aMonkDie = function (n) { return n < 5 ? 4 : n < 11 ? 6 : n < 17 ? 8 : 10; }(classes.known.monk.level);
							fields.Description += (fields.Description ? '; ' : '') + 'Once on each of my turns +1d' + aMonkDie + ' damage';
						}
					},
					"Once on each of my turns when I hit a target with my astral arms, I can add my martial arts die to the damage dealt."
				]
			}
		},
		"subclassfeature17" : {
			name : "Awakened Astral Self",
			source : [["T", 51]],
			minlevel : 17,
			description : ' [5 ki; see 3rd page "Notes"]' + desc([
				"As a bonus action, I can use 5 ki points to summon astral arms and visage with benefits"
			]),
			action : [["bonus action", ""]],
			"astral body" : {
				name : "Awakened Astral Self",
				extraname : "Way of the Astral Self 17",
				source : ["UA:BnM", 3],
				description : " [5 ki points]" + desc([
					"As a bonus action, I can summon my astral arms and astral visage, with extra benefits:",
					" \u2022 Armor of the Spirit: I gain a +2 bonus to my armor class",
					" \u2022 Astral Barrage: I can do three attacks with the Attack action, if all are with astral arms",
					"This lasts for 10 minutes or until I'm incapacitated or die"
				])
			},
			autoSelectExtrachoices : [{ extrachoice : "astral body" }]
		}
	}
});


// >>>>>>>>>>>>>>>>>>>>>>> //
// >>> Paladin Options >>> //
// >>>>>>>>>>>>>>>>>>>>>>> //

// Paladin Optional Class Features
AddFeatureChoice(ClassList.paladin.features.spellcasting, true, "Additional Paladin Spells", {
	name : "Additional Paladin Spells",
	extraname : "Optional Paladin 2",
	source : [["T", 52]],
	description : "",
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Stop this is not the class' spell list or if this is for a bonus spell entry
				if (spName !== "paladin" || spType.indexOf("bonus") !== -1) return;
				spList.extraspells = spList.extraspells.concat(["gentle repose", "prayer of healing", "warding bond"]);
			},
			"This optional class feature expands the spell list of the paladin class with the following spells (spell level in brackets): Gentle Repose (2), Prayer of Healing (2), and Warding Bond (2)."
		]
	}
}, "Optional 2nd-level paladin features");
// Blind Fighting & Interception already added in the Fighter Options section
AddFightingStyle(["paladin"], "Blessed Warrior", {
	name : "Blessed Warrior Fighting Style",
	source : [["T", 52], ["UA:CFV", 6]],
	description : desc([
		"I learn two cleric cantrips that count as paladin spells for me and use Cha for spellcasting",
		"Whenever I gain a paladin level, I can swap one of these for another cleric cantrip"
	]),
	spellcastingBonus : {
		name : "Blessed Warrior",
		"class" : "cleric",
		level : [0, 0],
		times : 2
	}
});
AddFeatureChoice(ClassList.paladin.features["subclassfeature3.0-channel divinity"], true, "Harness Divine Power", {
	name : "Channel Divinity: Harness Divine Power",
	extraname : "Optional Paladin 3",
	source : [["T", 52]],
	description : desc([
		"As a bonus action, I can expend a use of my channel divinity to regain one used spell slot",
		"The level of this spell slot can be no more than half my Proficiency Bonus (rounded up)",
		"I can only do this so many times per long rest, even if I have uses of channel divinity left"
	]),
	action : [["bonus action", ""]],
	usages : levels.map(function(n) {
		return n < 3 ? "" : n < 7 ? 1 : n < 15 ? 2 : 3;
	}),
	recovery : "long rest"
}, "Optional 3rd-level paladin features");
AddFeatureChoice(ClassList.paladin.features['divine health'], true, "Martial Versatility", {
	name : "Martial Versatility",
	extraname : "Optional Paladin 4",
	source : [["T", 53]],
	description : " [ASI = Ability Score Improvement]\n   Whenever I gain an ASI from the paladin class, I can change my paladin fighting style",
	prereqeval : function (v) { return classes.known.paladin.level >= 4 ? true : "skip"; }
}, "Optional 4th-level paladin features");

// Paladin Subclasses
// [dupl_start] reprints from Mythic Odysseys of Theros
if (!SourceList.MOT) {
	AddSubClass("paladin", "oath of glory", {
		regExpSearch : /^(((?=.*glory)(((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper))))))).*$/i,
		subname : "Oath of Glory",
		source : [["T", 53], ["MOT", 29]],
		features : {
			"subclassfeature3" : {
				name : "Channel Divinity: Peerless Athlete",
				source : [["T", 54], ["MOT", 29]],
				minlevel : 3,
				description : desc([
					"As a bonus action, I can get adv. on Str (Athletics) \u0026 Dex (Acrobatics) checks for 10 min",
					"In that time, I also add +10 ft to jumps, and double what I can carry, push, drag, \u0026 lift"
				]),
				action : [["bonus action", ""]],
				spellcastingExtra : ["guiding bolt", "heroism", "enhance ability", "magic weapon", "haste", "protection from energy", "compulsion", "freedom of movement", "commune", "flame strike"]
			},
			"subclassfeature3.1" : {
				name : "Channel Divinity: Inspiring Smite",
				source : [["T", 54], ["MOT", 29]],
				minlevel : 3,
				description : desc([
					"As a bonus action after dealing damage with Divine Strike, I can grant temporary HP",
					"I distribute the temporary HP how I choose across creatures within 30 ft, including me"
				]),
				additional : levels.map(function (n) {
					return n < 3 ? "" : "2d8 + " + n + " temporary HP";
				}),
				action : [["bonus action", ""]]
			},
			"subclassfeature7" : {
				name : "Aura of Alacrity",
				source : [["T", 54], ["MOT", 29]],
				minlevel : 7,
				description : "\n   If I'm not incapacitated, allies starting their turn in range gain bonus speed for that turn",
				speed : { walk : { spd : "+10", enc : "+10" } },
				additional : levels.map(function (n) {
					return n < 7 ? "" : (n < 18 ? 5 : 10) + "-foot aura; +10 ft walking speed";
				})
			},
			"subclassfeature15" : {
				name : "Glorious Defense",
				source : [["T", 54], ["MOT", 29]],
				minlevel : 15,
				description : desc([
					"As a reaction when I or another in 10 ft is hit with an attack roll, I can grant bonus AC",
					"I must be able to see the attacker; I add my Cha mod (min 1) to the AC for that attack",
					"If it misses, I can do a weapon attack vs. the attacker, if in reach, as part of this reaction"
				]),
				usages : "Charisma modifier per ",
				usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
				recovery : "long rest",
				action : [["reaction", ""]]
			},
			"subclassfeature20" : {
				name : "Living Legend",
				source : [["T", 54], ["MOT", 29]],
				minlevel : 20,
				description : desc([
					"As a bonus action, I can empower myself with legends, gaining the following for 1 min:",
					" \u2022 My otherworldly presence grants me advantage on Charisma checks",
					" \u2022 Once on each of my turns when I miss with a weapon attack, I can have it hit instead",
					" \u2022 As a reaction when I fail a saving throw, I can reroll it, but must use the new roll",
					"I can do this once per long rest, or by expending a 5th-level or higher spell slot (SS 5+)"
				]),
				recovery : "long rest",
				usages : 1,
				altResource : "SS 5+",
				action : [["bonus action", ""]]
			}
		}
	});
} // dupl_end
AddSubClass("paladin", "oath of the watchers", {
	regExpSearch : /^(?=.*watchers)((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper)))).*$/i,
	subname : "Oath of the Watchers",
	source : [["T", 54]],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Watcher's Will",
			source : [["T", 55]],
			minlevel : 3,
			description : "\n   As an action, Cha mod of creatures I see in 30 ft adv. on Int/Wis/Cha saves for 1 min",
			action : [["action", ""]],
			spellcastingExtra : ["alarm", "detect magic", "moonbeam", "see invisibility", "counterspell", "nondetection", "aura of purity", "banishment", "hold monster", "scrying"]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Abjure the Extraplanar",
			source : [["T", 55]],
			minlevel : 3,
			description : desc([
				"As an action, all aberration, celestial, elemental, fey, fiend in 30 ft must make Wis save",
				"Succeeds if it can't hear me; On fail, turned for 1 minute or until it takes any damage",
				"Turned: move away, never within 30 ft of me, no reactions or actions other than Dash",
				"Turned: may Dodge instead of Dash when nowhere to move and unable to escape bonds"
			]),
			action : [["action", ""]]
		},
		"subclassfeature7" : {
			name : "Aura of the Sentinel",
			source : [["T", 55]],
			minlevel : 7,
			description : "\n   If I'm not incapacitated, chosen creatures in range and I add my Prof. Bonus to Initiative",
			additional : levels.map(function (n) { return n < 7 ? "" : (n < 18 ? 10 : 30) + "-foot aura"; }),
			addMod : [{ type : "skill", field : "Init", mod : "prof", text : "I can add my Proficiency Bonus to initiative rolls." }]
		},
		"subclassfeature15" : {
			name : "Vigilant Rebuke",
			source : [["T", 55]],
			minlevel : 15,
			description : desc([
				"As a reaction when I or another I can see succeeds a Int, Wis, or Cha save, I can rebuke",
				"The creature that forced the saving throw takes 2d8 + my Charisma mod force damage"
			]),
			action : [["reaction", ""]]
		},
		"subclassfeature20" : {
			name : "Mortal Bulwark",
			source : [["T", 55]],
			minlevel : 20,
			description : desc([
				"As a bonus action, I can gain the following benefits for 1 minute:",
				" \u2022 Truesight 120 ft; Adv. on attacks vs. aberrations, celestials, elementals, fey, and fiends",
				" \u2022 When I hit and damage a creature with an attack, I can banish it if it fails a Cha save",
				"   It's banished to its native plane if not there now; It's immune for 24 hours on a success",
				"I can do this once per long rest, or by expending a 5th-level or higher spell slot (SS 5+)"
			]),
			recovery : "long rest",
			usages : 1,
			altResource : "SS 5+",
			action : [["bonus action", ""]]
		}
	}
});


// >>>>>>>>>>>>>>>>>>>>>>> //
// >>> Ranger Options >>> //
// >>>>>>>>>>>>>>>>>>>>>>> //

// Ranger Optional Class Features
var TCoE_Deft_Explorer = function () {
	var a = {
		name : "Deft Explorer: Canny",
		source : [["T", 56]],
		description : "\n   I learn two languages and gain expertise with one skill I'm proficient with",
		languageProfs : [2],
		skillstxt : "Expertise with one skill I'm proficient with",
		additional : "extra benefits at 6th and 10th level",
		extraTimes : [1],
		extraname : "Canny (select skill for expertise)",
		extrachoices : ["Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight of Hand", "Stealth", "Survival"],
		"roving benefit" : {
			name : "Roving",
			extraname : "Deft Explorer Benefit 6",
			source : [["T", 56]],
			description : "\n   I gain +5 ft walking speed and climbing and swimming speed equal to my walking speed",
			speed : {
				walk : { spd : "+5", enc : "+5" },
				climb : { spd : "walk", enc : "walk" },
				swim : { spd : "walk", enc : "walk" }
			}
		},
		"tireless benefit" : {
			name : "Tireless",
			extraname : "Deft Explorer Benefit 10",
			source : [["T", 56]],
			description : desc([
				"Whenever I finish a short rest, I reduce my exhaustion level, if any, by 1",
				"As an action a number of times per long rest, I can give myself temp HP of 1d8 + Wis mod"
			]),
			action : [["action", ""]],
			additional : "1d8 + Wis Mod",
			usages: "Prof. Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest"
		},
		autoSelectExtrachoices : [{
			extrachoice : "roving benefit",
			minlevel : 6
		}, {
			extrachoice : "tireless benefit",
			minlevel : 10
		}]
	}
	for (var i = 0; i < a.extrachoices.length; i++) {
		var attr = a.extrachoices[i].toLowerCase();
		a[attr] = {
			name : a.extrachoices[i] + " Expertise",
			extraname : "Deft Explorer Benefit 1",
			description : "",
			source : a.source,
			skills : [[a.extrachoices[i], "only"]],
			prereqeval : function(v) {
				return v.skillProfsLC.indexOf(v.choice) === -1 ? false : v.skillExpertiseLC.indexOf(v.choice) === -1 ? true : "markButDisable";
			}
		}
	}
	return a;
}();
CreateClassFeatureVariant("ranger", "natural explorer", "Deft Explorer", TCoE_Deft_Explorer);
var TCoE_Favored_Foe = {
	name : "Favored Foe",
	source : [["T", 56]],
	description : desc([
		"When I hit a creature with an attack roll, I can mark it as my favored enemy for 1 min",
		"I deal extra damage to it when I mark it and the first time I hit a marked on my turn",
		"Keeping a creature marked as favored enemy requires me to concentrate, like on a spell"
	]),
	additional : levels.map(function (n) {
		return "+1d" + (n < 6 ? 4 : n < 14 ? 6 : 8) + " damage";
	}),
	usages : "Proficiency Bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus');",
	recovery : "long rest",
	calcChanges : {
		atkCalc : [
			function (fields, v, output) {
				if (!v.isSpell && (classes.known.rangerua || classes.known.ranger) && (/favou?red.{1,2}enemy/i).test(v.WeaponText)) {
					var rngrLvl = classes.known.ranger ? classes.known.ranger.level : classes.known.rangerua.level;
					fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +1d' + (rngrLvl < 6 ? 4 : rngrLvl < 14 ? 6 : 8) + ' damage';
				};
			},
			"If I include the words \"Favored Enemy\" in the name of a weapon, it gets the bonus damage I do against marked favored enemies added to its description."
		]
	}
};
CreateClassFeatureVariant("ranger", "favored enemy", "Favored Foe", TCoE_Favored_Foe);
var TCoE_Additional_Ranger_Spells = {
	name : "Additional Ranger Spells",
	extraname : "Optional Ranger 2",
	source : [["T", 57]],
	description : "",
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Stop this is not the class' spell list or if this is for a bonus spell entry
				if ((spName !== "ranger" && spName !== "rangerua") || spType.indexOf("bonus") !== -1) return;
				spList.extraspells = spList.extraspells.concat(["entangle", "searing smite", "aid", "enhance ability", "gust of wind", "magic weapon", "elemental weapon", "meld into stone", "revivify", "dominate beast", "greater restoration"]);
			},
			"This optional class feature expands the spell list of the ranger class with the following spells (spell level in brackets): Entangle (1), Searing Smite (1), Aid (2), Enhance Ability (2), Gust of Wind (2), Magic Weapon (2), Elemental Weapon (3), Meld into Stone (3), Revivify (3), Dominate Beast (4), and Greater Restoration (5)."
		]
	}
};
AddFeatureChoice(ClassList.ranger.features.spellcasting, true, "Additional Ranger Spells", TCoE_Additional_Ranger_Spells, "Optional 2nd-level ranger features");
// Blind Fighting & Thrown Weapon Fighting already added in the Fighter Options section
AddFightingStyle(["ranger"], "Druidic Warrior", {
	name : "Druidic Warrior Fighting Style",
	source : [["T", 57], ["UA:CFV", 7]],
	description : desc([
		"I learn two druid cantrips that count as ranger spells for me and use Wis for spellcasting",
		"Whenever I gain a ranger level, I can swap one of these for another druid cantrip"
	]),
	spellcastingBonus : {
		name : "Druidic Warrior",
		"class" : "druid",
		level : [0, 0],
		times : 2
	}
});
var TCoE_Ranger_Spellcasting_Focus = {
	name : "Spellcasting Focus",
	extraname : "Optional Ranger 2",
	source : [["T", 57], ["UA:CFV", 8]],
	description : "\n   I can use a druidic focus as a spellcasting focus for my ranger spells"
};
AddFeatureChoice(ClassList.ranger.features.spellcasting, true, "Spellcasting Focus", TCoE_Ranger_Spellcasting_Focus, "Optional 2nd-level ranger features");
var TCoE_Primal_Awareness = {
	name : "Primal Awareness",
	source : [["T", 57]],
	description : desc([
		"I get bonus spells known, which do not count against the number of spells I can know",
		"In addition, I can cast each once per long rest without expending a spell slot"
	]),
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Remove the bonus spells from the normally selectable list
				if ((spName === "ranger" || spName === "rangerua") && spType.indexOf("bonus") === -1) {
					if (!spList.notspells) spList.notspells = [];
					spList.notspells = spList.notspells.concat(["speak with animals", "beast sense", "speak with plants", "locate creature", "commune with nature"]);
				}
			},
			"I know the following spells, without them counting towards the maximum number of spells I can know: Speak with Animals, Beast Sense, Speak with Plants, Locate Creature, and Commune with Nature."
		]
	},
	spellcastingBonus : {
		name : "Primal Awareness",
		spells : ["speak with animals", "beast sense", "speak with plants", "locate creature", "commune with nature"],
		selection : ["speak with animals", "beast sense", "speak with plants", "locate creature", "commune with nature"],
		firstCol : "oncelr",
		times : levels.map(function (n) {
			return n < 5 ? 1 : n < 9 ? 2 : n < 13 ? 3 : n < 17 ? 4 : 5;
		})
	}
};
CreateClassFeatureVariant("ranger", "primeval awareness", "Primal Awareness", TCoE_Primal_Awareness);
var TCoE_Ranger_Martial_Versatility = {
	name : "Martial Versatility",
	extraname : "Optional Ranger 4",
	source : [["T", 57]],
	description : " [ASI = Ability Score Improvement]\n   Whenever I gain an ASI from the ranger class, I can change my ranger fighting style",
	prereqeval : function (v) { return classes.known.ranger && classes.known.ranger.level >= 4 ? true : classes.known.rangerau && classes.known.rangerau.level >= 4 ? true : "skip"; }
};
AddFeatureChoice(ClassList.ranger.features['primeval awareness'], true, "Martial Versatility", TCoE_Ranger_Martial_Versatility, "Optional 4th-level ranger features");
var TCoE_Natures_Veil = {
	name : "Nature's Veil",
	source : [["T", 57]],
	description : desc([
		"As a bonus action, I can become invisible along with any equipment I'm wearing/carrying",
		"This invisibility lasts until the start of my next turn"
	]),
	action : [["bonus action", ""]],
	usages : "Proficiency Bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus');",
	recovery : "long rest",
};
CreateClassFeatureVariant("ranger", "hide in plain sight", "Nature's Veil", TCoE_Natures_Veil);

// Add the Ranger alternative class features also to the Revised Ranger, if it exists after all scripts have ran
RunFunctionAtEnd(function() {
	if (!ClassList["rangerua"]) return;
	CreateClassFeatureVariant("rangerua", "natural explorer", "Deft Explorer", TCoE_Deft_Explorer);

	// Add Favored Foe as an alternative choice (can't be done by automation because of choices) and add "Favored Foe" variant option
	// Move some attributes from the main object to the favored enemy choice objects
	['additional', 'languageProfs', 'calcChanges'].forEach( function(attr) {
		var fea = ClassList.rangerua.features["favored enemy"];
		if (!fea[attr]) return;
		// Move the attribute to each of the choices
		for (var i = 0; i < fea.choices.length; i++) {
			var aCh = fea[fea.choices[i].toLowerCase()];
			if (aCh.source) continue; // don't do options that are not part of the original entry (which don't have a source)
			aCh[attr] = fea[attr];
		}
		// Now delete the attributes from the parent object
		delete fea[attr];
	});
	// Now add the alternative class feature as another choice
	AddFeatureChoice(ClassList.rangerua.features["favored enemy"], false, "[alternative feature] Favored Foe", TCoE_Favored_Foe);

	AddFeatureChoice(ClassList.rangerua.features.spellcasting, true, "Spellcasting Focus", TCoE_Ranger_Spellcasting_Focus, "Optional 2nd-level ranger features");
	CreateClassFeatureVariant("rangerua", "primeval awareness", "Primal Awareness", TCoE_Primal_Awareness);
	AddFeatureChoice(ClassList.rangerua.features['primeval awareness'], true, "Martial Versatility", TCoE_Ranger_Martial_Versatility, "Optional 4th-level ranger features");
	CreateClassFeatureVariant("rangerua", "hide in plain sight", "Nature's Veil", TCoE_Natures_Veil);
});

// Ranger (Beast Master) alternative class feature
if (ClassSubList["ranger-beast master"]) {
	var TCoE_Primal_Companion_Attributes = {
		hdLinked : ["ranger", "spell-less ranger"],
		languages : "understands the languages of its master but can't speak",
		features : [{
			name : "Master",
			description : "The beast obeys the commands of its master and shares its proficiency bonus. It takes its turn during that of its master, on the same initiative count. It can move and take reactions on its own, but only takes the Dodge action on its turn unless its master takes a bonus action to command it to take another action. Its master can also forgo one attack during their Attack action to command the beast to take the Attack action. If its master is incapacitated, the beast can take any action, not just Dodge. The beast vanishes if its master dies."
		}],
		traits : [{
			name : "Primal Rebirth",
			description : "Within an hour of the beast's death, its master can take an action to touch it and expend a spell slot to have it return to full HP after 1 minute."
		}, {
			name : "Primal Bond",
			description : "The beast adds it proficiency bonus to all its ability check and saving throws."
		}, {
			name : "Exceptional Training (Beast Master 7)",
			minlevel : 7,
			description : "The beast's attacks count as magical for overcoming resistances and immunities.",
			eval : function(prefix, lvl) {
				AddString(prefix + "Comp.Use.Attack.1.Description", "Counts as magical", "; ");
			},
			removeeval : function(prefix, lvl) {
				RemoveString(prefix + "Comp.Use.Attack.1.Description", "Counts as magical");
			}
		}, {
			name : "Bestial Fury (Beast Master 11)",
			minlevel : 11,
			description : "When commanded to take the Attack action, the beast can make 2 attacks as part of its Attack action.",
			eval : function(prefix, lvl) {
				Value(prefix + "Comp.Use.Attack.perAction", 2);
			},
			removeeval : function(prefix, lvl) {
				Value(prefix + "Comp.Use.Attack.perAction", 1);
			}
		}],
		addMod : [
			{ type : "skill", field : "All", mod : "Prof", text : "The primal companion adds it proficiency bonus to all its ability check and saving throws." },
			{ type : "skill", field : "Init", mod : "Prof", text : "The primal companion adds it proficiency bonus to all its ability check and saving throws." },
			{ type : "save", field : "All", mod : "Prof", text : "The primal companion adds it proficiency bonus to all its ability check and saving throws." }
		],
		calcChanges : {
			hp : function (totalHD, HDobj, prefix) {
				if (!classes.known.ranger && !classes.known["spell-less ranger"]) return;
				var rngrLvl = classes.known.ranger ? classes.known.ranger.level : classes.known["spell-less ranger"].level;
				var multiplier = What(prefix + "Comp.Use.HD.Die") == 6 ? [4, "four"] : [5, "five"];
				var rngrLvlM = multiplier[0] * rngrLvl;
				HDobj.alt.push(multiplier[0] + rngrLvlM);
				HDobj.altStr.push(" = " + multiplier[0] + " as a base\n + " + multiplier[0] + " \xD7 " + rngrLvl + " from " + multiplier[1] + " times its master's ranger level (" + rngrLvlM + ")");
			},
			setAltHp : true
		}
	};
	CreateClassFeatureVariant("ranger-beast master", "subclassfeature3", "Primal Companion", {
		name : "Primal Companion",
		source : [["T", 61]],
		description : desc([
			"When I finish a long rest, I can summon a primal beast of the land, sea, or sky in 5 ft",
			"I determine what animal it looks like, but it always has primal markings",
			"It is friendly to me and my allies, obeys my commands, and acts during my turn",
			"Unless I use a bonus action to command it, it only takes the Dodge action on its turn",
			"I can also forgo one attack of my Attack action to command it to take the Attack action",
			"It can take reactions and move on its turn even if I don't command it",
			"As an action within 1 hour of it dying, I can touch it and expend a spell slot to revive it",
			"It then returns to full HP in 1 minute; It vanishes if I summon another one or if I die"
		]),
		action : [
			["bonus action", " (command)"],
			["action", " (revive)"]
		],
		creaturesAdd : [
			["Beast of the Land", true],
			["Beast of the Sea", true],
			["Beast of the Sky", true]
		],
		creatureOptions : [{
			name : "Beast of the Land",
			source : [["T", 61]],
			size : 3,
			type : "Beast",
			alignment : "Unaligned",
			ac : "11+Dex+Prof",
			hp : 20,
			hd : [3, 8],
			hdLinked : TCoE_Primal_Companion_Attributes.hdLinked,
			speed : "40 ft, climb 40 ft",
			scores : [14, 14, 15, 8, 14, 11],
			senses : "Darkvision 60 ft",
			passivePerception : 12,
			languages : TCoE_Primal_Companion_Attributes.languages,
			challengeRating : "1/4",
			proficiencyBonus : 2,
			proficiencyBonusLinked : true,
			attacksAction : 1,
			attacks : [{
				name : "Maul",
				ability : 5,
				damage : [1, 8, "slashing"],
				modifiers : ["", "Prof"],
				range : "Melee (5 ft)",
				description : "+1d6 damage if hits after moving 20 ft straight in same round, see Charge",
				tooltip : "If the beast moves at least 20 feet straight toward a target and then hits it with a maul attack on the same turn, the target takes an extra 1d6 slashing damage. If the target is a creature, it must succeed on a Strength saving throw against your spell save DC or be knocked prone.",
				useSpellMod : "ranger"
			}, {
				name : "Charge",
				ability : 5,
				damage : ["Str save", "", "Knocked prone"],
				range : "Melee (5 ft)",
				description : "Str save or knocked prone; Only if maul hits after moving 20 ft straight in same round",
				tooltip : "If the beast moves at least 20 feet straight toward a target and then hits it with a maul attack on the same turn, the target takes an extra 1d6 slashing damage. If the target is a creature, it must succeed on a Strength saving throw against your spell save DC or be knocked prone.",
				abilitytodamage : false,
				dc : true,
				useSpellMod : "ranger"
			}],
			actions : [{
				name : "Charge",
				description : "If the beast moves at least 20 ft straight toward a target and then hits it with a maul attack on the same turn, the target takes an extra 1d6 slashing damage. If the target is a creature, it must succeed on a Strength saving throw against my spell save DC or be knocked prone."
			}],
			features : TCoE_Primal_Companion_Attributes.features,
			traits : TCoE_Primal_Companion_Attributes.traits.map( function(n) {
				if (!typePF && /Exceptional Training/i.test(n.name)) {
					var a = newObj(n);
					a.description = "The beast's attacks count as magical.";
					return a;
				} else {
					return n;
				}
			}),
			addMod : TCoE_Primal_Companion_Attributes.addMod,
			calcChanges : TCoE_Primal_Companion_Attributes.calcChanges,
			minlevelLinked : TCoE_Primal_Companion_Attributes.hdLinked
		}, {
			name : "Beast of the Sea",
			source : [["T", 61]],
			size : 3,
			type : "Beast",
			alignment : "Unaligned",
			ac : "11+Dex+Prof",
			hp : 20,
			hd : [3, 8],
			hdLinked : TCoE_Primal_Companion_Attributes.hdLinked,
			speed : "5 ft, swim 60 ft",
			scores : [14, 14, 15, 8, 14, 11],
			senses : "Darkvision 60 ft",
			passivePerception : 12,
			languages : TCoE_Primal_Companion_Attributes.languages,
			challengeRating : "1/4",
			proficiencyBonus : 2,
			proficiencyBonusLinked : true,
			attacksAction : 1,
			attacks : [{
				name : "Binding Strike",
				ability : 1,
				damage : [1, 6, "Pierc./Bludg."],
				modifiers : ["", "Prof"],
				range : "Melee (5 ft)",
				description : "On hit, target is grappled (escape DC is spell DC) and beast can't use attack on others",
				tooltip : "If the beast hits a target with its blinding strike, the target is grappled (escape DC equal to your spellcasting save DC). Until this grapple ends, the beast can't use this attack on another target.",
				useSpellMod : "ranger"
			}],
			actions : [{
				name : "Amphibious",
				description : "The beast can breathe both air and water."
			}],
			features : TCoE_Primal_Companion_Attributes.features,
			traits : TCoE_Primal_Companion_Attributes.traits,
			addMod : TCoE_Primal_Companion_Attributes.addMod,
			calcChanges : TCoE_Primal_Companion_Attributes.calcChanges,
			minlevelLinked : TCoE_Primal_Companion_Attributes.hdLinked
		}, {
			name : "Beast of the Sky",
			source : [["T", 61]],
			size : 4,
			type : "Beast",
			alignment : "Unaligned",
			ac : "10+Dex+Prof",
			hp : 16,
			hd : [3, 6],
			hdLinked : TCoE_Primal_Companion_Attributes.hdLinked,
			speed : "10 ft, fly 60 ft",
			scores : [6, 16, 13, 8, 14, 11],
			senses : "Darkvision 60 ft",
			passivePerception : 12,
			languages : TCoE_Primal_Companion_Attributes.languages,
			challengeRating : "1/4",
			proficiencyBonus : 2,
			proficiencyBonusLinked : true,
			attacksAction : 1,
			attacks : [{
				name : "Shred",
				ability : 2,
				damage : [1, 6, "slashing"],
				modifiers : ["", "Prof"],
				range : "Melee (5 ft)",
				useSpellMod : "ranger"
			}],
			actions : [{
				name : "Flyby",
				description : "The beast doesn't provoke opportunity attacks when it flies out of an enemy's reach."
			}],
			features : TCoE_Primal_Companion_Attributes.features,
			traits : TCoE_Primal_Companion_Attributes.traits,
			addMod : TCoE_Primal_Companion_Attributes.addMod,
			calcChanges : TCoE_Primal_Companion_Attributes.calcChanges,
			minlevelLinked : TCoE_Primal_Companion_Attributes.hdLinked
		}],
		eval : function() {
			// Remove any ranger companion pages
			What("Template.extras.AScomp").split(",").forEach(function (prefix) {
				if (What(prefix + "Companion.Remember") === "companion") {
					DoTemplate("AScomp", "Remove", prefix, true)
				}
			});
		}
	});
}

// Ranger Subclasses
var TCoE_Ranger_Subclass_Fey_Wanderer = AddSubClass("ranger", "fey wanderer", {
	regExpSearch : /^(?=.*fey)(?=.*wanderer).*$/i,
	subname : "Fey Wanderer",
	source : [["T", 58]],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	fullname : "Fey Wanderer",
	features : {
		"subclassfeature3" : {
			name : "Dreadful Strikes",
			source : [["T", 58]],
			minlevel : 3,
			description : desc([
				"My weapons deal extra psychic damage, but only once per turn per creature"
			]),
			additional : levels.map(function (n) {
				return n < 3 ? "" : "+1d" + (n < 11 ? 4 : 6) + " psychic damage";
			}),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.isWeapon && (classes.known.ranger || classes.known.rangerua)) {
							var rngrLvl = classes.known.ranger ? classes.known.ranger.level : classes.known.rangerua.level;
							fields.Description += (fields.Description ? '; ' : '') + 'Once per turn per target +1d' + (rngrLvl < 11 ? 4 : 6) + ' psychic damage';
						};
					},
					"When I hit a creature with a weapon, I can deal an extra 1d4 psychic damage to the target, which can take this extra damage only once per turn. From 11th-level, this damage increases to 1d6."
				]
			}
		},
		"subclassfeature3.1" : {
			name : "Fey Wanderer Magic",
			source : [["T", 58]],
			minlevel : 3,
			description : "\n   I get bonus spells known, which do not count against the number of spells I can know",
			spellcastingExtra : ["charm person", "misty step", "dispel magic", "dimension door", "mislead"],
			spellcastingExtraApplyNonconform : true
		},
		"subclassfeature3.2" : {
			name : "Otherworldly Glamour",
			source : [["T", 59]],
			minlevel : 3,
			description : desc([
				"I can add my Wisdom modifier to any Charisma check I make (minimum of +1)",
				'I gain proficiency in Deception, Performance, or Persuasion; Use "Choose Feature" button'
			]),
			addMod : ["Deception", "Intimidation", "Performance", "Persuasion"].map(function(skill){return { type : "skill", field : skill, mod : "max(Wis|1)", text : "I can add my Wisdom modifier to any Charisma check I make (minimum of +1)." };}),
			choices : ["Deception proficiency", "Performance proficiency", "Persuasion proficiency"],
			"deception proficiency" : {
				name : "Otherworldly Glamour",
				description : " [Deception proficiency]\n   I can add my Wisdom modifier to any Charisma check I make (minimum of +1)",
				skills : ["Deception"]
			},
			"performance proficiency" : {
				name : "Otherworldly Glamour",
				description : " [Performance proficiency]\n   I can add my Wisdom modifier to any Charisma check I make (minimum of +1)",
				skills : ["Performance"]
			},
			"persuasion proficiency" : {
				name : "Otherworldly Glamour",
				description : " [Persuasion proficiency]\n   I can add my Wisdom modifier to any Charisma check I make (minimum of +1)",
				skills : ["Persuasion"]
			}
		},
		"subclassfeature7" : {
			name : "Beguiling Twist",
			source : [["T", 59]],
			minlevel : 7,
			description : desc([
				"I have advantage on saves against being charmed or frightened; Below uses my save DC",
				"As a reaction when a creature I see in 120 ft succeeds its save vs. charmed or frightened,",
				"I can have another I see in 120 ft make a Wis save or be charmed/frightened (I choose)",
				"This lasts for 1 minute and the target can repeat the save at the end of each of its turns"
			]),
			action : [["reaction", ""]],
			savetxt : { adv_vs : ["charmed", "frightened"] }
		},
		"subclassfeature11" : {
			name : "Fey Reinforcements",
			source : [["T", 59]],
			minlevel : 11,
			description : desc([
				"I learn Summon Fey; It needs no material component, nor counts against spells known",
				"Once per long rest, I can cast it without expending a spell slot",
				"When I cast it, I can have it not require concentration, but than its duration is 1 minute"
			]),
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Fey Reinforcements",
				spells : ["summon fey"],
				selection : ["summon fey"],
				firstCol : 'oncelr'
			},
			spellChanges : {
				"summon fey" : {
					components : "V,S",
					compMaterial : "",
					duration : "Conc,1h/1min",
					changes : "Using my Fey Reinforcements class feature, I can cast Summon Fey without requiring material components and I can cast it once per long rest without requiring a spell slot. Whenever I start casting the spell, I can modify it so that it doesn't require concentration. If I do so, the spell's duration becomes 1 minute for that casting."
				}
			}
		},
		"subclassfeature15" : {
			name : "Misty Wanderer",
			source : [["T", 59]],
			minlevel : 15,
			description : desc([
				"I can cast Misty Step without a spell slot and can bring a willing creature in 5 ft along"
			]),
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
			calcChanges : {
				spellAdd : [
					function (spellKey, spellObj, spName) {
						if (spellKey === "misty step") {
							spellObj.firstCol = "Sp";
							spellObj.description = "I and one willing creature I can see within 5 ft of me teleport 30 ft to a unoccupied space I can see";
							return true;
						}
						return false;
					},
					"Whenever I cast misty step, I can bring along one willing creature I can see within 5 ft of me. That creature teleports to an unoccupied space of my choice within 5 ft of my destination space.\nI can cast Misty Step without expending a spell slot a number of times per long rest equal to my Wisdom modifier (minimum of once)."
				]
			}
		}
	}
});
var TCoE_Ranger_Subclass_Swarmkeeper = AddSubClass("ranger", "swarmkeeper", {
	regExpSearch : /swarmkeeper/i,
	subname : "Swarmkeeper",
	source : [["T", 59]],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	fullname : "Swarmkeeper",
	features : {
		"subclassfeature3" : {
			name : "Gathered Swarm",
			source : [["T", 60]],
			minlevel : 3,
			description : levels.map(function (n) {
				var a = [
					"I'm bonded to a swarm of nature spirits crawling in my space; I choose their appearance",
					"Once on each of my turns, I can have it assist me after I hit a creature with an attack:",
					" \u2022 The target takes an extra 1d" + (n < 11 ? 6 : 8) + " piercing damage from the swarm",
					" \u2022 The target must make a Strength save or be moved 15 ft horizontally by the swarm",
					" \u2022 The swarm moves me 5 ft horizontally" + (n < 11 ? "" : " and I have half cover until my next turn starts"),
					"I get to choose the direction whenever the target or I'm moved by the swarm"
				];
				if (n >= 11) a.splice(4, 0, "   Additionally, on a failed save, I can also have the target be knocked prone");
				if (n >= 20) a.pop();
				return desc(a);
			})
		},
		"subclassfeature3.1" : {
			name : "Swarmkeeper Magic",
			source : [["T", 60]],
			minlevel : 3,
			description : desc([
				"I learn Mage Hand; When cast, its hand takes the form of my swarming nature spirits",
				"I get bonus spells known, which do not count against the number of spells I can know"
			]),
			spellcastingBonus : {
				name : "Swarmkeeper Magic",
				spells : ["mage hand"],
				selection : ["mage hand"],
				firstCol : "atwill"
			},
			spellcastingExtra : ["faerie fire", "web", "gaseous form", "arcane eye", "insect plague"],
			spellcastingExtraApplyNonconform : true
		},
		"subclassfeature7" : {
			name : "Writhing Tide",
			source : [["T", 60]],
			minlevel : 7,
			description : desc([
				"As a bonus action, I can fly on my swarm for 1 minute: 10 ft flying speed and can hover"
			]),
			action : [["bonus action", ""]],
			usages : "Proficiency Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest"
		},
		"subclassfeature11" : {
			name : "Mighty Swarm",
			source : [["T", 60]],
			minlevel : 11,
			description : " [improves Gathered Swarm, see above]\n   Now 1d8 damage, knocks prone on failed save, or grants me half cover until next turn"
		},
		"subclassfeature15" : {
			name : "Swarming Dispersal",
			source : [["T", 60]],
			minlevel : 15,
			description : desc([
				"As a reaction when I take damage, I can gain resistance to that damage and teleport",
				"I vanish into my swarm and teleport to an unoccupied space within 30 ft that I can see"
			]),
			action : [["reaction", ""]],
			usages : "Proficiency Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest"
		}
	}
});
// Add both subclasses to the revised ranger as well, if it exists
if (ClassList.rangerua) {
	ClassList.rangerua.subclasses[1].push(TCoE_Ranger_Subclass_Fey_Wanderer, TCoE_Ranger_Subclass_Swarmkeeper);
};


// >>>>>>>>>>>>>>>>>>>>> //
// >>> Rogue Options >>> //
// >>>>>>>>>>>>>>>>>>>>> //

// Rogue Optional Class Features
AddFeatureChoice(ClassList.rogue.features["thieves cant"], true, "Steady Aim", {
	name : "Steady Aim",
	extraname : "Optional Rogue 3",
	source : [["T", 62]],
	description : desc([
		"As a bonus action if I don't move during my turn, I can give myself adv. on my next attack",
		"This attack roll has to be in the same turn and my speed is 0 until the end of the turn"
	]),
	action : [["bonus action", ""]],
	prereqeval : function (v) { return classes.known.rogue.level >= 3 ? true : "skip"; }
}, "Optional 3rd-level rogue features");

// Rogue Subclasses
AddSubClass("rogue", "phantom", {
	regExpSearch : /^(?!.*(barbarian|bard|cleric|druid|fighter|monk|paladin|ranger|sorcerer|warlock|wizard))(?=.*phantom).*$/i,
	subname : "Phantom",
	source : [["T", 62]],
	fullname : "Phantom",
	features : {
		"subclassfeature3" : {
			name : "Whispers of the Dead",
			source : [["UA:SR", 1]],
			source : [["T", 62]],
			minlevel : 3,
			description : desc([
				"When I finish a rest, I gain a skill or tool proficiency of my choice until I change it again"
			]),
			skillstxt : "Choose one skill or tool; I can change the choice whenever I finish a short or long rest"
		},
		"subclassfeature3.1" : {
			name : "Wails from the Grave",
			source : [["T", 62]],
			minlevel : 3,
			description : levels.map(function (n) {
				var a = [
					"Directly after I deal sneak attack damage to a creature on my turn, I " + (n < 17 ? "can" : "also") + " harm another",
					n < 17 ? "I then deal half my sneak attack in necrotic damage to a creature I can see within 30 ft" : "I deal half my sneak attack in necrotic damage to both it and another I can see in 30 ft"
				];
				if (n >= 9) a.push("I can do this my Proficiency Bonus per long rest, or by destroying a soul trinket (ST)");
				return desc(a);
			}),
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			additional : levels.map(function (n) {
				return Math.ceil(n / 4) + "d6";
			}),
			altResource : levels.map(function (n) {
				return n < 9 ? "" : "ST";
			})
		},
		"subclassfeature9" : {
			name : "Tokens of the Departed",
			source : [["T", 63]],
			minlevel : 9,
			description : " [max Proficiency Bonus of soul trinkets]" + desc([
				"As a reaction when I see a creature within 30 ft die, I can create a Tiny soul trinket",
				"The token of its life essence appears in my free hand; The DM determines its appearance",
				"While a soul trinket is on my person, I have advantage on death and Constitution saves",
				"As an action, I can destroy one of my soul trinkets and ask its associated spirit a question",
				"Its spirit appears and answers concisely in a language it knew; Trinket can be anywhere"
			]),
			action : [
				["reaction", "Create Soul Trinket"],
				["action", "Destroy Soul Trinket"]
			],
			extraLimitedFeatures : [{
				name : "Soul Trinkets (max Prof. Bonus)",
				usages : "",
				recovery : "Special"
			}],
			savetxt : { text : ["While soul trinket is on me, Adv. on Con and death saves"] }
		},
		"subclassfeature13" : {
			name : "Ghost Walk",
			source : [["T", 63]],
			minlevel : 13,
			description : desc([
				"As a bonus action, I can assume a spectral form with 10 ft flying speed and can hover",
				"Attacks vs. me have disadv.; I can move through creatures and objects as difficult terrain",
				"This lasts 10 min; I take 1d10 force damage if I end my turn inside a creature or object",
				"I can assume this form once per long rest, or by destroying one of my soul trinkets (ST)"
			]),
			action : [["bonus action", " (start/end)"]],
			usages : 1,
			recovery : "long rest",
			altResource : "ST"
		},
		"subclassfeature17" : {
			name : "Death's Friend",
			source : [["T", 63]],
			minlevel : 17,
			description : desc([
				"Wails from the Grave now also deals damage to the target of the original sneak attack",
				"If I don't have any soul trinkets at the end of a long rest, one appears in my hand"
			])
		}
	}
});
AddSubClass("rogue", "soulknife", {
	regExpSearch : /soulknife/i,
	subname : "Soulknife",
	source : [["T", 63]],
	fullname : "Soulknife",
	abilitySave : 2,
	features : {
		"subclassfeature3" : {
			name : "Psionic Energy Dice",
			source : [["T", 64]],
			minlevel : 3,
			description : desc([
				"I gain twice my proficiency bonus of psionic energy dice (PsiD) that fuel my psionics",
				"I regain all expended psionic energy dice after a long rest; See psionic powers on page 3",
				"As a bonus action once per short rest, I can regain one expended psionic energy die"
			]),
			additional : levels.map(function(n) {
				return n < 3 ? "" : n < 5 ? "d6" : n < 11 ? "d8" : n < 17 ? "d10" : "d12";
			}),
			action : [["bonus action", "Regain 1 Psionic Energy Die"]],
			usages : "Proficiency Bonus \xD7 2 per ",
			usagescalc : "event.value = Number(How('Proficiency Bonus'))*2",
			recovery : "long rest",
			extraLimitedFeatures : [{
				name : "Regain 1 Psionic Energy die",
				usages : 1,
				recovery : "short rest"
			}],
			extraname : "Soulknife 3",
			"psi-bolstered knack" : {
				name : "Psionic Power: Psi-Bolstered Knack",
				source : [["T", 64]],
				description : " [1 PsiD if successful]" + desc([
					"If I fail an check using a skill or tool I'm proficient with, I can add a psionic energy die to it",
					"The psionic energy die is only expended if this addition turns the failure into a success"
				])
			},
			"psychic whispers" : {
				name : "Psionic Power: Psychic Whispers",
				source : [["T", 64]],
				description : desc([
					"As an action, I can select my Prof. Bonus of creatures I can see and roll a psionic energy die",
					"For the roll of hours, I can telepathically communicate with each and they with me",
					"To send or receive messages (no action), we must be within 1 mile of each other",
					"A creature must be able to speak a language to do this; It can end the link at any time",
					"The first time I do this after a long rest, I don't expend the psionic energy die (PsiD)"
				]),
				limfeaname : "Psychic Whispers",
				action : [["action", ""]],
				usages : 1,
				recovery : "long rest",
				altResource : "PsiD"
			},
			autoSelectExtrachoices : [{
				extrachoice : "psi-bolstered knack"
			}, {
				extrachoice : "psychic whispers"
			}]
		},
		"subclassfeature3.1" : {
			name : "Psychic Blades",
			source : [["T", 64]],
			minlevel : 3,
			description : desc([
				"As part of an Attack action, I can manifest a psychic blade from a free hand to attack",
				"It vanishes immediately after making the attack and leaves no mark on its target",
				"As a bonus action after this attack, I can manifest and attack with another psychic blade",
				"To do this, my other hand needs to be free as well and this blade does only 1d4 damage"
			]),
			action : [["bonus action", "Psychic Blade (after Attack action)"]],
			weaponsAdd : ["Psychic Blade"],
			weaponOptions : [{
				regExpSearch : /^(?=.*psychic)(?=.*blade).*$/i,
				name : "Psychic Blade",
				source : [["T", 64]],
				ability : 1,
				type : "Simple",
				damage : [1, 6, "psychic"],
				range : "Melee, 60 ft",
				description : "Finesse, thrown; Bonus action: 1d4 instead of 1d6",
				abilitytodamage : true
			}]
		},
		"subclassfeature9" : {
			name : "Soul Blades",
			source : [["T", 65]],
			minlevel : 9,
			description : desc([
				"My psi-suffused soul grants me more psionic powers, see the 3rd page's \"Notes\" section"
			]),
			extraname : "Soulknife 9",
			"homing strikes" : {
				name : "Homing Strikes",
				source : [["T", 65]],
				description : " [1 PsiD if successful]" + desc([
					"If I miss an attack with my psychic blades, I can add a psionic energy die to the attack roll",
					"The psionic energy die is only expended if this addition turns the miss into a hit"
				])
			},
			"psychic teleportation" : {
				name : "Psychic Teleportation",
				source : [["T", 65]],
				description : " [1 PsiD]" + desc([
					"As a bonus action, I can teleport up to 10 ft away times the roll of my psionic energy die",
					"I manifest a psychic blade and throw it to an empty space I can see before teleporting to it"
				]),
				action : [["bonus action", ""]]
			},
			autoSelectExtrachoices : [{
				extrachoice : "homing strikes"
			}, {
				extrachoice : "psychic teleportation"
			}]
		},
		"subclassfeature13" : {
			name : "Psychic Veil",
			source : [["T", 65]],
			minlevel : 13,
			description : desc([
				"As an action, I can become invisible along with what I'm wearing or carrying for 1 hour",
				"I can end it (no action); It also ends if I damage a creature or force one to make a save",
				"I can do this once per long rest, or by expending a psionic energy die (PsiD)"
			]),
			action : [["action", ""]],
			usages : 1,
			recovery : "long rest",
			altResource : "PsiD"
		},
		"subclassfeature17" : {
			name : "Rend Mind",
			source : [["T", 65]],
			minlevel : 17,
			description : desc([
				"When I use my psychic blade to deal sneak attack damage to a target, I can have it save",
				"It must make a Wisdom save (DC 8 + Prof. Bonus + Dex mod) or be stunned for 1 min",
				"It can repeat the save at the end of each of its turns to end being stunned",
				"I can do this once per long rest, or by expending three psionic energy dice (3 PsiD)"
			]),
			action : [["action", ""]],
			usages : 1,
			recovery : "long rest",
			altResource : "3 PsiD"
		}
	}
});


// >>>>>>>>>>>>>>>>>>>>>>>> //
// >>> Sorcerer Options >>> //
// >>>>>>>>>>>>>>>>>>>>>>>> //

// Sorcerer Optional Class Features
AddFeatureChoice(ClassList.sorcerer.features.spellcasting, true, "Additional Sorcerer Spells", {
	name : "Additional Sorcerer Spells",
	extraname : "Optional Sorcerer 1",
	source : [["T", 65]],
	description : "",
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Stop this is not the class' spell list or if this is for a bonus spell entry
				if (spName !== "sorcerer" || spType.indexOf("bonus") !== -1) return;
				spList.extraspells = spList.extraspells.concat(["grease", "flame blade", "flaming sphere", "magic weapon", "vampiric touch", "fire shield", "bigby's hand", "flesh to stone", "otiluke's freezing sphere", "demiplane"]);
			},
			"This optional class feature expands the spell list of the sorcerer class with the following spells (spell level in brackets): Grease (1), Flame Blade (2), Flaming Sphere (2), Magic Weapon (2), Vampiric Touch (3), Fire Shield (4), Bigby's Hand (5), Flesh to Stone (6), Otiluke's Freezing Sphere (6), and Demiplane (8)."
		]
	}
}, "Optional sorcerer features");
// Metamagic options
AddFeatureChoice(ClassList.sorcerer.features["metamagic"], true, "Seeking Spell", {
	name : "Seeking Spell",
	source : [["T", 66]],
	description : " [2 sorcery points]" + desc([
		"If I miss an attack roll for a spell, I can reroll the d20 and must use the new roll",
		"I can do this even if I already used another Metamagic option during the casting of the spell"
	])
});
AddFeatureChoice(ClassList.sorcerer.features["metamagic"], true, "Transmuted Spell", {
	name : "Transmuted Spell",
	source : [["T", 66]],
	description : " [1 sorcery point]" + desc([
		"If the spell deals one of the below damage types, I can change it to another on the list",
		"These damage types are: acid, cold, fire, lightning, poison, or thunder"
	])
});
// Other optional features
AddFeatureChoice(ClassList.sorcerer.features.spellcasting, true, "Sorcerer Versatility", {
	name : "Sorcerer Versatility",
	extraname : "Optional Sorcerer 4",
	source : [["T", 65]],
	description : " [ASI = Ability Score Improvement]" + desc([
		"Whenever I gain an ASI from the sorcerer class, I can change a cantrip or Metamagic choice",
		"I can select either another cantrip from the sorcerer spell list or another Metamagic option"
	]),
	prereqeval : function (v) { return classes.known.sorcerer.level >= 4 ? true : "skip"; }
}, "Optional sorcerer features");
AddFeatureChoice(ClassList.sorcerer.features.spellcasting, true, "Magical Guidance", {
	name : "Magical Guidance",
	extraname : "Optional Sorcerer 5",
	source : [["T", 65]],
	description : " [1 sorcery point]\n   When I make an ability check that fails, I can reroll the d20 and must use the new roll",
	prereqeval : function (v) { return classes.known.sorcerer.level >= 5 ? true : "skip"; }
}, "Optional sorcerer features");

// Sorcerer Subclasses
AddSubClass("sorcerer", "aberrant mind", {
	regExpSearch : /^(?=.*aberrant)(?=.*mind).*$/i,
	subname : "Aberrant Mind",
	source : [["T", 67]],
	features : {
		"subclassfeature1" : {
			name : "Psionic Spells",
			source : [["T", 67]],
			minlevel : 1,
			description : desc([
				"I learn additional spells, which do not count towards the number of spell I can know",
				"Whenever I gain a sorcerer level, I can replace one of these with another of the same level",
				"It must be a divination or enchantment spell on the sorcerer, wizard, or warlock spell list"
			]),
			spellcastingBonus : [{
				name : "Psionic Spells (cantrip)",
				"class" : ["sorcerer", "warlock", "wizard"],
				school : ["Ench", "Div"],
				level : [0, 0],
				extraspells : ["mind sliver"],
				selection : ["mind sliver"]
			}, {
				name : "Psionic Spells (1st-level)",
				"class" : ["sorcerer", "warlock", "wizard"],
				school : ["Ench", "Div"],
				level : [1, 1],
				firstCol : "PS",
				extraspells : ["arms of hadar", "dissonant whispers"],
				selection : ["arms of hadar", "dissonant whispers"],
				times : 2
			}, {
				name : "Psionic Spells (2nd-level)",
				"class" : ["sorcerer", "warlock", "wizard"],
				school : ["Ench", "Div"],
				level : [2, 2],
				firstCol : "PS",
				extraspells : ["calm emotions", "detect thoughts"],
				selection : ["calm emotions", "detect thoughts"],
				times : levels.map(function (n) { return n < 3 ? 0 : 2; })
			}, {
				name : "Psionic Spells (3rd-level)",
				"class" : ["sorcerer", "warlock", "wizard"],
				school : ["Ench", "Div"],
				level : [3, 3],
				firstCol : "PS",
				extraspells : ["hunger of hadar", "sending"],
				selection : ["hunger of hadar", "sending"],
				times : levels.map(function (n) { return n < 5 ? 0 : 2; })
			}, {
				name : "Psionic Spells (4th-level)",
				"class" : ["sorcerer", "warlock", "wizard"],
				school : ["Ench", "Div"],
				level : [4, 4],
				firstCol : "PS",
				extraspells : ["evard's black tentacles", "summon abberation"],
				selection : ["evard's black tentacles", "summon abberation"],
				times : levels.map(function (n) { return n < 7 ? 0 : 2; })
			}, {
				name : "Psionic Spells (5th-level)",
				"class" : ["sorcerer", "warlock", "wizard"],
				school : ["Ench", "Div"],
				level : [5, 5],
				firstCol : "PS",
				extraspells : ["rary's telepathic bond", "telekinesis"],
				selection : ["rary's telepathic bond", "telekinesis"],
				times : levels.map(function (n) { return n < 9 ? 0 : 2; })
			}]
		},
		"subclassfeature1.1" : {
			name : "Telepathic Speech",
			source : [["T", 67]],
			minlevel : 1,
			description : desc([
				"As a bonus action, I can telepathic link myself with a creature within 30 ft that I can see",
				"If we share a language, we can talk telepathically while in my Cha mod of miles (min 1)",
				"This last for my level in minutes, until I'm incapacitated, I die, or I use this feature again"
			]),
			action : [["bonus action", ""]],
			additional : levels.map(function (n) {
				return n + " minute" + (n > 1 ? "s" : "");
			})
		},
		"subclassfeature6" : {
			name : "Psionic Sorcery",
			source : [["T", 68]],
			minlevel : 6,
			description : desc([
				"I can expend sorcery points instead of a spell slot to cast a spell from my Psionic Spells",
				"This costs the spell's level in sorcery points, but in doing so requires no other components",
				"However, I do need to provide a material components if it is consumed by the spell"
			])
		},
		"subclassfeature6.1" : {
			name : "Psychic Defenses",
			source : [["T", 68]],
			minlevel : 6,
			description : "\n   I gain resistance to psychic damage and adv. on saves vs. being charmed or frightened",
			dmgres : ["Psychic"],
			savetxt : { adv_vs : ["charmed", "frightened"] }
		},
		"subclassfeature14" : {
			name : "Revelation in Flesh",
			source : [["T", 68]],
			minlevel : 14,
			description : desc([
				"As a bonus action, I can expend 1 or more sorcery points to transform for 10 minutes",
				"For each sorcery point used, I gain one of the following benefits of my choice:",
				" \u2022 I can see any invisible creatures within 60 ft of me not behind total cover",
				" \u2022 I gain a flying speed equal to my walking speed and I can hover",
				" \u2022 I gain a swimming speed equal to twice my walking speed \u0026 I can breathe underwater",
				" \u2022 I can move, with equipment, through any space as narrow as 1 inch without squeezing",
				"   Also, I can spend 5 ft of movement to escape form a grapple or nonmagical restraints"
			]),
			action : [["bonus action", ""]],
			additional : "1+ sorcery points"
		},
		"subclassfeature18" : {
			name : "Warping Implosion",
			source : [["T", 68]],
			minlevel : 18,
			description : desc([
				"As an action, I can teleport to an unoccupied space I can see within 120 ft",
				"All within 30 ft of where I left take 3d10 force damage and must make a Strength save",
				"If failed, each is pulled towards the space I left, ending up in the nearest empty space",
				"If successful, a creature takes only half damage and isn't pulled",
				"I can do this once per long rest, or by expending 5 sorcery points (5 SP)"
			]),
			action : [["action", ""]],
			recovery : "long rest",
			usages : 1,
			altResource : "5 SP"
		}
	}
});
AddSubClass("sorcerer", "clockwork soul", {
	regExpSearch : /^((?=.*(sorcerer|witch))(?=.*mechanus)|(?=.*clockwork)(?=.*soul)).*$/i,
	subname : "Clockwork Soul",
	source : [["T", 68]],
	fullname : "Clockwork Soul",
	features : {
		"subclassfeature1" : {
			name : "Clockwork Magic",
			source : [["T", 68]],
			minlevel : 1,
			description : desc([
				"I learn additional spells, which do not count towards the number of spell I can know",
				"Whenever I gain a sorcerer level, I can replace one of these with another of the same level",
				"It must be an abjuration or transmutation spell on the sorcerer, wizard, or warlock list"
			]),
			spellcastingBonus : [{
				name : "Clockwork Magic (1st-level)",
				"class" : ["sorcerer", "warlock", "wizard"],
				school : ["Abjur", "Trans"],
				level : [1, 1],
				extraspells : ["alarm", "protection from evil and good"],
				selection : ["alarm", "protection from evil and good"],
				times : 2
			}, {
				name : "Clockwork Magic (2nd-level)",
				"class" : ["sorcerer", "warlock", "wizard"],
				school : ["Abjur", "Trans"],
				level : [2, 2],
				extraspells : ["aid", "lesser restoration"],
				selection : ["aid", "lesser restoration"],
				times : levels.map(function (n) { return n < 3 ? 0 : 2; })
			}, {
				name : "Clockwork Magic (3rd-level)",
				"class" : ["sorcerer", "warlock", "wizard"],
				school : ["Abjur", "Trans"],
				level : [3, 3],
				extraspells : ["dispel magic", "protection from energy"],
				selection : ["dispel magic", "protection from energy"],
				times : levels.map(function (n) { return n < 5 ? 0 : 2; })
			}, {
				name : "Clockwork Magic (4th-level)",
				"class" : ["sorcerer", "warlock", "wizard"],
				school : ["Abjur", "Trans"],
				level : [4, 4],
				extraspells : ["freedom of movement", "summon construct"],
				selection : ["freedom of movement", "summon construct"],
				times : levels.map(function (n) { return n < 7 ? 0 : 2; })
			}, {
				name : "Clockwork Magic (5th-level)",
				"class" : ["sorcerer", "warlock", "wizard"],
				school : ["Abjur", "Trans"],
				level : [5, 5],
				extraspells : ["greater restoration", "wall of force"],
				selection : ["greater restoration", "wall of force"],
				times : levels.map(function (n) { return n < 9 ? 0 : 2; })
			}]
		},
		"subclassfeature1.1" : {
			name : "Restore Balance",
			source : [["T", 69]],
			minlevel : 1,
			description : desc([
				"As a reaction when a creature I can see in 60 ft is about to roll a d20 with adv./disadv.,",
				"I can prevent that roll from being affected by advantage and disadvantage"
			]),
			action : [["reaction", ""]],
			usages : "Proficiency Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest"
		},
		"subclassfeature6" : {
			name : "Bulwark of Law",
			source : [["T", 69]],
			minlevel : 6,
			description : desc([
				"As an action, I can imbue a creature I can see within 30 ft with a magical ward",
				"The ward has a number of d8s equal to the number of sorcery points I expend to do this",
				"As a reaction when the creature takes damage, it can expend any number of those dice",
				"The dice roll reduces the damage; The ward lasts until I finish a long rest or do this again"
			]),
			additional : "1-5 sorcery points; 1d8 per point",
			action : [["action", ""]]
		},
		"subclassfeature14" : {
			name : "Trance of Order",
			source : [["T", 69]],
			minlevel : 14,
			description : desc([
				"As a bonus action, I can enter a state of clockwork consciousness for 1 minute",
				"While in this state, attack rolls against me can't benefit from advantage",
				"Also, I can then treat a d20 roll below 9 as a 10 for my attack rolls, checks, and saves",
				"I can do this once per long rest, or by expending 5 sorcery points (5 SP)"
			]),
			action : [["bonus action", ""]],
			usages : 1,
			recovery : "long rest",
			altResource : "5 SP"
		},
		"subclassfeature18" : {
			name : "Clockwork Cavalcade",
			source : [["T", 69]],
			minlevel : 18,
			description : desc([
				"As an action, I can call spirits to bring balance in a 30-ft cube originating from me",
				"Inside the cube, the intangible spirits do all the following before vanishing:",
				" \u2022 Restore up to 100 HP, divided among the creatures in the cube as I choose",
				" \u2022 Repair all damaged objects entirely in the cube instantly",
				" \u2022 End every spell of 6th-level or lower on objects or creatures of my choice in the cube",
				"I can do this once per long rest, or by expending 7 sorcery points (7 SP)"
			]),
			action : [["action", ""]],
			usages : 1,
			recovery : "long rest",
			altResource : "7 SP"
		}
	}
});


// >>>>>>>>>>>>>>>>>>>>>>> //
// >>> Warlock Options >>> //
// >>>>>>>>>>>>>>>>>>>>>>> //

// Warlock Optional Class Features
AddFeatureChoice(ClassList.warlock.features["pact magic"], true, "Additional Warlock Spells", {
	name : "Additional Warlock Spells",
	extraname : "Optional Warlock 1",
	source : [["T", 70]],
	description : "",
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Stop this is not the class' spell list or if this is for a bonus spell entry
				if (spName !== "warlock" || (spType.indexOf("bonus") !== -1 && (!spList["class"] || spList["class"] !== "warlock"))) return;
				spList.extraspells = spList.extraspells.concat(["mislead", "planar binding", "teleportation circle", "gate", "weird"]);
			},
			"This optional class feature expands the spell list of the warlock class with the following spells (spell level in brackets): Mislead (5), Planar Binding (5), Teleportation Circle (5), Gate (9), and Weird (9)."
		]
	}
}, "Optional 1st-level warlock features");
AddWarlockPactBoon("Pact of the Talisman", {
	name : "Pact of the Talisman",
	source : [["T", 70]],
	description : desc([
		"When the wearer of this amulet fails an ability check, they can add +1d4 to the roll",
		"I can give the talisman to others to use; The talisman turns to ash when I die",
		"If I lose my talisman, I can preform an 1-hour ceremony to gain a replacement",
		"This ceremony destroys the previous amulet and can be done during a short or long rest"
	]),
	usages: "Proficiency bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus')",
	recovery: "long rest"
});
AddFeatureChoice(ClassList.warlock.features["pact boon"], true, "Eldritch Versatility", {
	name : "Eldritch Versatility",
	extraname : "Optional Warlock 4",
	source : [["T", 70]],
	description : " [ASI = Ability Score Improvement]" + desc([
		"Whenever I gain an ASI from the warlock class, I can change one of the following things:",
		" \u2022 I can replace one warlock cantrip with another cantrip from the warlock spell list",
		" \u2022 I can replace my pact boon for another",
		" \u2022 If I have Mystic Arcanum, I can replace one spell from it with another of the same level"
	]),
	prereqeval : function (v) { return classes.known.warlock.level >= 4 ? true : "skip"; }
}, "Optional 4th-level warlock features");
// Eldritch Invocation options
AddWarlockInvocation("Bond of the Talisman (prereq: level 12 warlock, Pact of the Talisman)", {
	name : "Bond of the Talisman",
	source : [["T", 70]],
	submenu : "[improves Pact of the Talisman]",
	description : desc([
		"As an action, I can teleport to the unoccupied space closest to the wearer of my talisman",
		"The talisman's wearer can do the same to teleport to me; Only works if both on same plane"
	]),
	prereqeval : function(v) {
		return classes.known.warlock.level >= 12 && GetFeatureChoice('class', 'warlock', 'pact boon').indexOf("pact of the talisman") !== -1;
	},
	action : [["action", ""]],
	usages: "Proficiency bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus')",
	recovery: "long rest"
});
AddWarlockInvocation("Eldritch Mind (prereq: Pact of the Tome)", {
	name : "Eldritch Mind",
	source : [["T", 71], ["UA:CFV", 11]],
	submenu : "[improves Pact of the Tome]",
	description : "\n   I have advantage on my Constitution saving throws to maintain concentration on a spell",
	prereqeval : function(v) {
		return GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the tome';
	},
	savetxt : { text : "Adv. on Con (Concentration) saves" }
});
AddWarlockInvocation("Far Scribe (prereq: level 5 warlock, Pact of the Tome)", {
	name : "Far Scribe",
	source : [["T", 71]],
	submenu : "[improves Pact of the Tome]",
	description : desc([
		"My book of shadows has a new page; As an action, a creature can write its name on it",
		"This page can hold my Proficiency Bonus in creature names; I can remove one as an action",
		"I can cast Sending without a spell slot or material components, targeting one on the page",
		"Instead of saying the message, I write it on the page and any reply appears there as well",
		"This writing disappears after 1 minute; The target still hears the message in their mind"
	]),
	prereqeval : function(v) {
		return classes.known.warlock.level >= 5 && GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the tome';
	},
	action : [["action", " (erase name)"]],
	spellcastingBonus : {
		name : "Far Scribe",
		spells : ["sending"],
		selection : ["sending"],
		firstCol : "atwill"
	},
	spellChanges : {
		"sending" : {
			components : "V,S",
			compMaterial : "",
			description : "Send 25 word message to crea named in book of shadows; it recognizes me and can respond 25 words",
			changes : "By using Far Scribe, I can cast Sending without using a spell slot or material components, but only to target one of the creatures that wrote their name in my book of shadows. Instead of speaking the message, I write it in my book and any response appears there as well, lasting for 1 minute. The target still hears the message in their mind."
		}
	}
});
AddWarlockInvocation("Gift of the Protectors (prereq: level 9 warlock, Pact of the Tome)", {
	name : "Gift of the Protectors",
	source : [["T", 71]],
	submenu : "[improves Pact of the Tome]",
	description : desc([
		"My book of shadows has a new page; As an action, a creature can write its name on it",
		"This page can hold my Proficiency Bonus in creature names; I can remove one as an action",
		"If a creature whose name is on the page drops to 0 HP, it magically drops to 1 HP instead",
		"This doesn't work if the creature would be killed outright"
	]),
	prereqeval : function(v) {
		return classes.known.warlock.level >= 9 && GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the tome';
	},
	action : [["action", " (erase name)"]],
	usages : 1,
	recovery : "long rest"
});
AddWarlockInvocation("Investment of the Chain Master (prereq: Pact of the Chain)", {
	name : "Investment of the Chain Master",
	source : [["T", 71]],
	submenu : "[improves Pact of the Chain]",
	description : desc([
		"When I cast Find Familiar, the summoned create has additional benefits:",
		"\u2022 It gains a flying or swimming speed of 40 ft (my choice at casting)",
		"\u2022 As a bonus action, I can command it to take the Attack action",
		"\u2022 Its weapon attacks are considered magical for overcoming immunities and resistances",
		"\u2022 If it forces a creature to make a saving throw, it uses my spell save DC",
		"\u2022 As a reaction when it takes damage, I can grant it resistance against that damage"
	]),
	action : [["bonus action", " (command to attack)"], ["reaction", " (give resistance)"]],
	prereqeval : function(v) {
		return GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the chain';
	},
	calcChanges : {
		companionCallback : [function(prefix, oCrea, bAdd, sCompType) {
			if (sCompType !== "pact_of_the_chain") return;
			var strFea = "\u25C6 Investment of the Chain Master (TCoE 71): The familiar gains 40 ft fly or swim speed (my choice), its attacks are considered magical, and it can use my spell save DC instead of its own DC's (if any).";
			var strSpd = "fly or swim 40 ft";
			if (What("Unit System") === "metric") {
				strFea = ConvertToMetric(strFea, 0.5);
				strSpd = ConvertToMetric(strSpd, 0.5);
			}
			var aFnc = bAdd ? AddString : RemoveString;
			aFnc(prefix + "Comp.Use.Features", strFea, true);
			aFnc(prefix + "Comp.Use.Speed", strSpd, typePF ? ",\n" : ", ");
			for (var i = 1; i <= 3; i++) {
				var baseFld = prefix + "Comp.Use.Attack." + i;
				var weaDescrFld = baseFld + ".Description";
				var strWeaDescr = What(weaDescrFld);
				if (bAdd && What(baseFld + ".Weapon Selection") && !(/(,|;)? ?counts as magical/i).test(strWeaDescr)) {
					AddString(weaDescrFld, "Counts as magical", "; ");
				} else if (!bAdd) {
					Value(weaDescrFld, strWeaDescr.replace(/(,|;)? ?counts as magical/i, ''));
				}
			}
		},
		"My pact of the chain familiars gain an extra feature listing the extra bonuses they gain."]
	}
});
AddWarlockInvocation("Protection of the Talisman (prereq: level 9 warlock, Pact of the Talisman)", {
	name : "Protection of the Talisman",
	source : [["T", 71]],
	submenu : "[improves Pact of the Talisman]",
	description : "\n   When the wearer of my talisman fails a saving throw, they can add +1d4 to the roll",
	prereqeval : function(v) {
		return classes.known.warlock.level >= 9 && GetFeatureChoice('class', 'warlock', 'pact boon').indexOf("pact of the talisman") !== -1;
	},
	usages: "Proficiency bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus')",
	recovery: "long rest"
});
AddWarlockInvocation("Rebuke of the Talisman (prereq: Pact of the Talisman)", {
	name : "Rebuke of the Talisman",
	source : [["T", 71]],
	submenu : "[improves Pact of the Talisman]",
	description : desc([
		"As a reaction when the wearer of my talisman is hit, I deal damage and push the attacker",
		"To be able to do this, I have to see the attacker and it has to be within 30 ft of me",
		"I deal it my Proficiency Bonus in psychic damage and push it 10 ft away from the talisman"
	]),
	prereqeval : function(v) {
		return GetFeatureChoice('class', 'warlock', 'pact boon').indexOf("pact of the talisman") !== -1;
	},
	action : [["reaction", ""]]
});
AddWarlockInvocation("Undying Servitude (prereq: level 5 warlock)", {
	name : "Undying Servitude",
	description : "\n   Once per long rest, I can cast Animate Dead using a warlock spell slot",
	source : [["T", 71]],
	submenu : "[warlock level  5+]",
	usages : 1,
	recovery : "long rest",
	spellcastingBonus : {
		name : "Undying Servitude",
		spells : ["animate dead"],
		selection : ["animate dead"],
		firstCol : "oncelr"
	},
	prereqeval : function(v) { return classes.known.warlock.level >= 5; }
});

// Warlock Subclasses
AddSubClass("warlock", "the fathomless", {
	regExpSearch : /^(?=.*warlock)(?=.*fathomless).*$/i,
	subname : "the Fathomless",
	source : [["T", 72]],
	spellcastingExtra : ["create or destroy water", "thunderwave", "gust of wind", "silence", "lightning bolt", "sleet storm", "control water", "summon elemental", "bigby's hand", "cone of cold"],
	features : {
		"subclassfeature1" : {
			name : "Tentacle of the Deeps",
			source : [["T", 72]],
			minlevel : 1,
			description : desc([
				"As a bonus action, I can summon or move a spectral tentacle and make an attack with it",
				"I can summon it to a space within 60 ft that I can see or move an existing one 30 ft",
				"I make melee spell attacks with 10 ft reach with it that deal cold or lightning damage",
				"Creatures hit by the tentacle suffer 10 ft speed reduction until the start of my next turn",
				"The 10-ft long tentacle lasts for 1 minute or until I summon another"
			]),
			action : [["bonus action", " (summon/move)"]],
			usages : "Proficiency Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			additional : levels.map(function (n) {
				return (n < 10 ? 1 : 2) + "d8";
			}),
			weaponsAdd : ['Tentacle of the Deeps'],
			weaponOptions : [{
				regExpSearch : /^(?=.*tentacle)(?=.*\b(deeps?|spectral)\b).*$/i,
				name : "Tentacle of the Deeps",
				source : [["T", 72]],
				ability : 6,
				type : "Spell",
				damage : [1, 8, "Cold"],
				range : "Melee (10 ft)",
				description : "On hit, -10 ft speed until my next turn starts",
				abilitytodamage : false,
				tentacleOfTheDeeps : true
			}],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.theWea.tentacleOfTheDeeps && classes.known.warlock.level >= 10) {
							fields.Damage_Die = '2d8';
						};
					}
				]
			}
		},
		"subclassfeature1.1" : {
			name : "Gift of the Sea",
			source : [["T", 72]],
			minlevel : 1,
			description : "\n   I have a swimming speed of 40 ft and I can breathe underwater",
			speed : { swim : { spd : 40, enc : 30 } }
		},
		"subclassfeature6" : {
			name : "Oceanic Soul",
			source : [["T", 73]],
			minlevel : 6,
			description : desc([
				"I gain resistance to cold damage now that I'm even more at home in the depths",
				"While I'm fully submerged, others who are as well can understand my speech and I theirs"
			]),
			dmgres : ["Cold"]
		},
		"subclassfeature6.1" : {
			name : "Guardian Coil",
			source : [["T", 73]],
			minlevel : 6,
			description : desc([
				"As a reaction when I or a creature I see in 10 ft of my tentacle is damaged, it can help",
				"The tentacle interposes itself, reducing the damage of the attack for that creature"
			]),
			action : [["reaction", ""]],
			additional : levels.map(function (n) {
				return (n < 10 ? 1 : 2) + "d8 damage reduced";
			})
		},
		"subclassfeature10" : {
			name : "Grasping Tentacles",
			source : [["T", 73]],
			minlevel : 10,
			description : desc([
				"I learn Evard's Black Tentacles; Once per long rest, I can cast it without using a spell slot",
				"It counts as a warlock spell for me, but not towards the number of spell I can know",
				"Whenever I cast it, I gain temporary hit points equal to my warlock level",
				"Moreover, damage can't break my concentration on this spell"
			]),
			action : [["action", ""]],
			additional : levels.map(function (n) {
				return n < 10 ? "" : n + " temp HP; 1\xD7 per long rest no SS";
			}),
			spellcastingBonus : {
				name : "Grasping Tentacles",
				spells : ["evard's black tentacles"],
				selection : ["evard's black tentacles"],
				firstCol : "oncelr"
			},
			extraLimitedFeatures : [{
				name : "Evard's Black Tentacles (no spell slot)",
				usages : 1,
				recovery : "long rest"
			}],
			calcChanges : {
				spellAdd : [
					function (spellKey, spellObj, spName) {
						if (spellKey === "evard's black tentacles") {
							spellObj.description = "I temp hp; All enter/start in 20-ft rad save or restrained \u0026 3d6 Bludg. dmg/rnd; Str/Dex check escape";
							spellObj.duration = "Conc*, 1 min";
							return true;
						}
					},
					"Whenever I cast Evard's Black Tentacles, I gain temporary hit points equal to my warlock level.\n \u2022 Damage can't break my concentration on this spell."
				]
			}
		},
		"subclassfeature14" : {
			name : "Fathomless Plunge",
			source : [["T", 73]],
			minlevel : 14,
			description : desc([
				"As an action, I can teleport myself and up to 5 willing creatures I can see within 30 ft",
				"We reappear up to 1 mile away, inside or within 30 ft of a body of water I've seen"
			]),
			action : [["action", ""]],
			recovery : "short rest",
			usages : 1
		}
	}
});
AddSubClass("warlock", "the genie", {
	regExpSearch : /^(?=.*warlock)(?=.*(genie|dao|djinni|efreeti|marid)).*$/i,
	subname : "the Genie",
	source : [["T", 73], ["UA:SR", 2]],
	features : {
		"subclassfeature1" : {
			name : "Choose Genie Kind",
			source : [["T", 73], ["UA:SR", 3]],
			minlevel : 1,
			description : '\n   Use the "Choose Feature" button above to choose the kind of genie your patron is',
			calcChanges : {
				spellList : [
					function(spList, spName, spType) {
						if (spType.indexOf("bonus") !== -1 && spList.name && /mystic arcanum/i.test(spList.name) && spList.level[0] === 9) {
							spList.extraspells.push("wish");
						} else if (spType.indexOf("bonus") === -1 && spName === "warlock") {
							if (!spList.notspells) spList.notspells = [];
							spList.notspells.push("wish");
						}
					},
					"The Genie patron adds Wish as a spell available for my 9th-level Mystic Arcanum selection."
				]
			},
			choices : ["Dao (earth)", "Djinni (air)", "Efreeti (fire)", "Marid (water)"],
			"dao (earth)" : {
				name : "Dao Genie Patron",
				description : "\n   My genie patron is a Dao, associated with earth",
				spellcastingExtra : ["detect evil and good", "sanctuary", "phantasmal force", "spike growth", "create food and water", "meld into stone", "phantasmal killer", "stone shape", "creation", "wall of stone", "wish"]
			},
			"djinni (air)" : {
				name : "Djinni Genie Patron",
				description : "\n   My genie patron is a Djinni, associated with air",
				spellcastingExtra : ["detect evil and good", "thunderwave", "gust of wind", "phantasmal force", "create food and water", "wind wall", "greater invisibility", "phantasmal killer", "creation", "seeming", "wish"]
			},
			"efreeti (fire)" : {
				name : "Efreeti Genie Patron",
				description : "\n   My genie patron is an Efreeti, associated with fire",
				spellcastingExtra : ["burning hands", "detect evil and good", "phantasmal force", "scorching ray", "create food and water", "fireball", "fire shield", "phantasmal killer", "creation", "flame strike", "wish"]
			},
			"marid (water)" : {
				name : "Marid Genie Patron",
				description : "\n   My genie patron is a Marid, associated with water",
				spellcastingExtra : ["detect evil and good", "fog cloud", "blur", "phantasmal force", "create food and water", "sleet storm", "control water", "phantasmal killer", "cone of cold", "creation", "wish"]
			},
			choiceDependencies : [{
				feature : "subclassfeature1.3"
			}, {
				feature : "subclassfeature6"
			}]
		},
		"subclassfeature1.1" : {
			name : "Genie's Vessel",
			source : [["T", 73], ["UA:SR", 3]],
			minlevel : 1,
			description : desc([
				"My patron gifts me a magical vessel, a Tiny object, granting me a measure of its power",
				"I choose the vessel's appearance; I can use it as my spellcasting focus for warlock spells",
				"The vessel's AC is my spell save DC and it has my warlock level + Proficiency Bonus in HP",
				"If it is destroyed or lost, I can get a replacement with a 1-hour ceremony during a rest"
			])
		},
		"subclassfeature1.2" : {
			name : "Genie's Vessel: Bottled Respite",
			source : [["T", 74], ["UA:SR", 3]],
			minlevel : 1,
			description : desc([
				"As an action, I can vanish and enter the extradimensional space inside my genie's vessel",
				"The vessel stays in its location; The space inside is a 20-ft high, 20-ft radius cylinder",
				"As a bonus action, I can exit my vessel; I exit it early if I die or the vessel is destroyed",
				"I can remain inside for twice my Proficiency Bonus in hours; Objects can be left inside"
			]),
			limfeaname : "Bottled Respite",
			action : [["action", " (enter)"], ["bonus action", " (eject)"]],
			usages : 1,
			recovery : "long rest"
		},
		"subclassfeature1.3" : {
			name : "Genie's Wrath",
			source : [["T", 73], ["UA:SR", 3]],
			minlevel : 1,
			description : desc([
				"I can deal bonus damage on my attacks, its type depending on my patron's genie kind",
				'Use the "Choose Feature" button above to choose the kind of genie your patron is'
			]),
			"dao (earth)" : {
				name : "Dao's Wrath",
				description : " [once on each of my turns]\n   When I hit an attack, I can have it deal my Prof. Bonus in extra bludgeoning damage",
				calcChanges : {
					atkAdd : [
						function (fields, v) {
							if (!v.isDC) {
								fields.Description += (fields.Description ? '; ' : '') + 'Once per my turn +' + How('Proficiency Bonus') + ' fbludgeoningire damage';
							}
						},
						"Once on each of my turns, I can have one of my attacks that hit deal extra bludgeoning damage equal to my proficiency bonus."
					]
				}
			},
			"djinni (air)" : {
				name : "Djinni's Wrath",
				description : " [once on each of my turns]\n   When I hit an attack, I can have it deal my Proficiency Bonus in extra thunder damage",
				calcChanges : {
					atkAdd : [
						function (fields, v) {
							if (!v.isDC) {
								fields.Description += (fields.Description ? '; ' : '') + 'Once per my turn +' + How('Proficiency Bonus') + ' thunder damage';
							}
						},
						"Once on each of my turns, I can have one of my attacks that hit deal extra thunder damage equal to my proficiency bonus."
					]
				}
			},
			"efreeti (fire)" : {
				name : "Efreeti's Wrath",
				description : " [once on each of my turns]\n   When I hit an attack, I can have it deal my Proficiency Bonus in extra fire damage",
				calcChanges : {
					atkAdd : [
						function (fields, v) {
							if (!v.isDC) {
								fields.Description += (fields.Description ? '; ' : '') + 'Once per my turn +' + How('Proficiency Bonus') + ' fire damage';
							}
						},
						"Once on each of my turns, I can have one of my attacks that hit deal extra fire damage equal to my proficiency bonus."
					]
				}
			},
			"marid (water)" : {
				name : "Marid's Wrath",
				description : " [once on each of my turns]\n   When I hit an attack, I can have it deal my Proficiency Bonus in extra cold damage",
				calcChanges : {
					atkAdd : [
						function (fields, v) {
							if (!v.isDC) {
								fields.Description += (fields.Description ? '; ' : '') + 'Once per my turn +' + How('Proficiency Bonus') + ' cold damage';
							}
						},
						"Once on each of my turns, I can have one of my attacks that hit deal extra cold damage equal to my proficiency bonus."
					]
				}
			}
		},
		"subclassfeature6" : {
			name : "Elemental Gift",
			source : [["T", 75], ["UA:SR", 3]],
			minlevel : 6,
			description : desc([
				"I gain resistance to a damage type depending on my patron's genie kind",
				'Use the "Choose Feature" button above to choose the kind of genie your patron is',
				"As a bonus action, I can gain a flying speed of 30 ft and I can hover, for 10 minutes"
			]),
			"dao (earth)" : {
				name : "Dao's Elemental Gift",
				description : desc([
					"I gain resistance to bludgeoning damage",
					"As a bonus action, I can gain a flying speed of 30 ft and I can hover, for 10 minutes"
				]),
				action : [["bonus action", " (start fly)"]],
				dmgres : ["Bludgeoning"]
			},
			"djinni (air)" : {
				name : "Djinni's Elemental Gift",
				description : desc([
					"I gain resistance to thunder damage",
					"As a bonus action, I can gain a flying speed of 30 ft and I can hover, for 10 minutes"
				]),
				action : [["bonus action", " (start fly)"]],
				dmgres : ["Thunder"]
			},
			"efreeti (fire)" : {
				name : "Efreeti's Elemental Gift",
				description : desc([
					"I gain resistance to fire damage",
					"As a bonus action, I can gain a flying speed of 30 ft and I can hover, for 10 minutes"
				]),
				action : [["bonus action", " (start fly)"]],
				dmgres : ["Fire"]
			},
			"marid (water)" : {
				name : "Marid's Elemental Gift",
				description : desc([
					"I gain resistance to cold damage",
					"As a bonus action, I can gain a flying speed of 30 ft and I can hover, for 10 minutes"
				]),
				action : [["bonus action", " (start fly)"]],
				dmgres : ["Cold"]
			},
			additional : "Fly 10 min",
			usages : "Prof. Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest"
		},
		"subclassfeature10" : {
			name : "Sanctuary Vessel",
			source : [["T", 75], ["UA:SR", 3]],
			minlevel : 10,
			description : desc([
				"When I enter my vessel I can have up to 5 willing creatures I can see in 30 ft join me",
				"As a bonus action, I can eject any number of creatures from my genie's vessel",
				"Everyone is ejected when I leave it, I die, or if the vessel is destroyed",
				"Anyone who remains in the vessel for at least 10 min gains the benefits of a short rest",
				"Also, HD spend as part of this short rest has my Proficiency Bonus added to the roll"
			])
		},
		"subclassfeature14" : {
			name : "Limited Wish",
			source : [["T", 75], ["UA:SR", 3]],
			minlevel : 14,
			description : " [1\xD7 per 1d4 long rests]" + desc([
				"As an action, I can cast a 6th-level or lower spell with a casting time time of one action",
				"This can be any spell; It doesn't require any costly components, it simply takes effect"
			]),
			action : [["action", ""]],
			extraLimitedFeatures : [{
				name : "Limited Wish",
				usages : 1,
				recovery : "1d4 LR"
			}]
		}
	}
});


// >>>>>>>>>>>>>>>>>>>>>> //
// >>> Wizard Options >>> //
// >>>>>>>>>>>>>>>>>>>>>> //

// Wizard Optional Class Features
AddFeatureChoice(ClassList.wizard.features.spellcasting, true, "Additional Wizard Spells", {
	name : "Additional Wizard Spells",
	extraname : "Optional Wizard 1",
	source : [["T", 75]],
	description : "",
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Stop this is not the class' spell list or if this is for a bonus spell entry
				if (spName !== "wizard" || spType.indexOf("bonus") !== -1) return;
				spList.extraspells = spList.extraspells.concat(["augury", "enhance ability", "speak with dead", "divination"]);
			},
			"This optional class feature expands the spell list of the wizard class with the following spells (spell level in brackets): Augury (2), Enhance Ability (2), Speak with Dead (3), and Divination (4)."
		]
	}
}, "Optional 1st-level wizard features");
AddFeatureChoice(ClassList.wizard.features["arcane recovery"], true, "Cantrip Formulas", {
	name : "Cantrip Formulas",
	extraname : "Optional Wizard 3",
	source : [["T", 76]],
	description : desc([
		"I have scribed arcane formulas in my spellbook with which I formulate cantrips in my mind",
		"Whenever I finish a long rest, I can use this to change a wizard cantrip I know for another"
	]),
	prereqeval : function (v) { return classes.known.wizard.level >= 3 ? true : "skip"; }
}, "Optional 3rd-level wizard features");

// Wizard Subclasses
// [dupl_start] reprints from Sword Coast Adventure Guide (after 2020 errata)
if (!SourceList.S) {
	AddSubClass("wizard", "bladesinging", {
		regExpSearch : /(bladesinging|bladesinger)/i,
		subname : "Tradition of Bladesinging",
		fullname : "Bladesinger",
		attacks : [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
		source : [["S", 142], ["T", 76]],
		features : {
			"subclassfeature2" : {
				name : "Training in War and Song",
				source : [["S", 142], ["T", 76]],
				minlevel : 2,
				description : "\n   " + "I gain proficiency with light armor, a one-handed melee weapon, and Performance",
				armorProfs : [true, false, false, false],
				skills : ["Performance"]
			},
			"subclassfeature2.1" : {
				name : "Bladesong",
				source : [["S", 142], ["T", 76]],
				minlevel : 2,
				description : desc([
					"As a bonus action, I can start the bladesong for 1 minute; I can dismiss it at any time",
					"It stops when I wear a shield, medium or heavy armor, or attack with two hands",
					"While the bladesong is active I have the following benefits:",
					" \u2022 Intelligence modifier (min 1) to AC",
					" \u2022 Base walking speed increases by 10 foot",
					" \u2022 Advantage on Dexterity (Acrobatics) checks",
					" \u2022 Intelligence modifier (min 1) to concentration saves for maintaining conc. on a spell"
				]),
				action : [["bonus action", " (start)"]],
				usages: "Proficiency bonus per ",
				usagescalc : "event.value = How('Proficiency Bonus')",
				recovery: "long rest"
			},
			"subclassfeature6" : {
				name : "Extra Attack",
				source : [["S", 142], ["T", 77]],
				minlevel : 6,
				description: desc([
					"I can attack twice instead of once when I take the Attack action on my turn",
					"Moreover, I can cast one of my cantrips in place of one of those attacks"
				])
			},
			"subclassfeature10" : {
				name : "Song of Defense",
				source : [["S", 142], ["T", 77]],
				minlevel : 10,
				description : desc([
					"As a reaction while my bladesong is active, I can expend a spell slot to reduce damage",
					"The damage I take is reduced by 5 for every level of the spell slot I expend"
				]),
				action : [["reaction", " (in bladesong)"]]

			},
			"subclassfeature14" : {
				name : "Song of Victory",
				source : [["S", 142], ["T", 77]],
				minlevel : 14,
				description : "\n   " + "While my bladesong is active, I add my Int mod (min 1) to melee weapon attack damage",
				calcChanges : {
					atkCalc : [
						function (fields, v, output) {
							if (v.isMeleeWeapon && (/blade.?song/i).test(v.WeaponText)) {
								output.extraDmg += Math.max(1, Number(What('Int Mod')));
							};
						},
						"If I include the word \"Bladesong\" in the name or description of a melee weapon, it gets my Intelligence modifier added to its Damage."
					]
				}
			}
		}
	});
} // dupl_end
AddSubClass("wizard","order of scribes", {
	regExpSearch : /^(?=.*wizard)(?=.*order)(?=.*scribes?).*$|scrivener/i,
	subname : "Order of Scribes",
	source : [["T", 77]],
	features : {
		"subclassfeature2" : {
			name : "Wizardly Quill",
			source : [["T", 77]],
			minlevel : 2,
			description : desc([
				"As a bonus action, I can magically create a Tiny quill with the following properties:",
				" \u2022 It doesn't require ink and produces ink in the color of my choice when writing with it",
				" \u2022 I require only 2 minutes per spell level to transcribe spells into my spellbook with it",
				" \u2022 As a bonus action, I can use it to erase a text written with it if within 5 ft of the text",
				"The quill disappear if I create another or if I die"
			]),
			action : [["bonus action", " (create/erase)"]]
		},
		"subclassfeature2.1" : {
			name : "Awakened Spellbook",
			source : [["T", 77]],
			minlevel : 2,
			description : desc([
				"My spellbook gains sentience and grants me the following benefits while I am holding it:",
				" \u2022 I can use the book as a spellcasting focus for my wizard spells",
				" \u2022 When I cast a wizard spell using a spell slot, I can temporarily replace its damage type",
				"   The new type must appear in my spellbook in a spell of the same level as the spell slot",
				" \u2022 Once per long rest, I can ritual cast a wizard spell without 10 min extra casting time",
				"I can replace it over a short rest, transferring its spells and sentience to a blank book"
			]),
			additional : "fast ritual cast",
			usages : 1,
			recovery : "long rest"
		},
		"subclassfeature6" : {
			name : "Manifest Mind",
			source : [["T", 78]],
			minlevel : 6,
			description : desc([
				"As a bonus action, I can have the mind of my awakened spellbook manifest within 60 ft",
				"The spellbook needs to be on my person to do this; The mind is a Tiny spectral object",
				"The mind is intangible, doesn't occupy a space, hovers, and sheds dim light in 10 ft",
				"It can hear, see, has 60 ft darkvision, and telepathically shares with me what it perceives",
				"As a bonus action, I can dismiss it or move it up to 30 ft to an empty space I can see",
				"It can pass through creatures; It stops manifesting if it's over 300 ft from me or I die",
				"It also stop manifesting if Dispel Magic is cast on it or the awakened spellbook is no more",
				"I can do this once per long rest, or by expending a spell slot (SS 1+) to manifest it again"
			]),
			action : [["bonus action", " (conjure/move/dismiss)"]],
			usages : 1,
			recovery : "long rest",
			altResource : "SS 1+"
		},
		"subclassfeature6.1" : {
			name : "Manifest Mind: Cast Spell",
			source : [["T", 78]],
			minlevel : 6,
			description : desc([
				"I can have wizard spells I cast on my turn originate from the mind while its manifested"
			]),
			usages : "Proficiency Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest"
		},
		"subclassfeature10" : {
			name : "Master Scrivener",
			source : [["T", 78]],
			minlevel : 10,
			description : desc([
				"When I finish a long rest, I can write a spell in my awakened spellbook on a blank paper",
				"It must be a level 1 or 2 spell with 1 action casting time; My spellbook must be in 5 ft",
				"As an action, I can use this scroll to cast the spell on it at one higher level than normal",
				"Only I can use the scroll; The scroll turns blank again when I use it or finish a long rest",
				"Also, using my Wizardly Quill, the gold and time I need to craft spell scrolls is halved"
			]),
			action : [["action", " (cast scroll)"]],
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Master Scrivener scoll",
				"class" : "wizard",
				level : [1, 2],
				firstCol : "MS"
			},
			calcChanges : {
				spellAdd : [
					function (spellKey, spellObj, spName, isDuplicate) {
						if (!isDuplicate && spName === "wizard" && spellObj.firstCol === "MS" && (spellObj.level === 1 || spellObj.level === 2)) {
							// Calculate upcasting to be exactly 1 level higher
							var rxMatch = /(\d*d?\d+)\+(\d*d?\d+)\/(\d*SL)\b/i;
							while (rxMatch.test(spellObj.description)) {
								var aMatch = spellObj.description.match(rxMatch);
								var strDie1 = !isNaN(aMatch[1]) ? true : /\d+d\d+/i.test(aMatch[1]) ? aMatch[1].replace(/\d+(d\d+)/i, "$1") : false;
								var strDie2 = !isNaN(aMatch[2]) ? true : /\d+d\d+/i.test(aMatch[2]) ? aMatch[2].replace(/\d+(d\d+)/i, "$1") : undefined;
								if (!/^SL$/i.test(aMatch[3])) {
									// only increases if more than 1 level higher spell slot, so nothing we can do with it, just remove all upcasting
									removeSpellUpcasting(spellObj);
								} else if (/^\d/.test(aMatch[1]) && strDie1 === strDie2) {
									// identical type steps (e.g. 1d6+1d6/SL or 3+1/SL), so add the second to the first
									var strNew = (Number(aMatch[1].replace(/^(\d+).*/, "$1")) + Number(aMatch[2].replace(/^(\d+).*/, "$1"))) + aMatch[1].replace(/^\d+(.*)/, "$1");
									spellObj.description = spellObj.description.replace(rxMatch, strNew);
								} else {
									// non-identical steps, so leave the first and second along, but remove the /SL
									spellObj.description = spellObj.description.replace(rxMatch, "$1+$2");
								}
							}
							// Remove costly material components
							spellObj.description = spellObj.description.replace(/ \(\d+ ?gp( cons\.?)?\)/i, '');
							// List only the scroll as a component from the spell
							spellObj.components = "M\u2020";
							spellObj.compMaterial = "Spells cast from spell scrolls don't require any components other than the spell scroll itself.";
							return true;
						}
					},
					"When I finish a long rest, I can create a scroll of a spell in my spellbook using my Master Scrivener class feature. I can then cast this spell from the scroll and the spell is cast as if using a spell slot one level higher than its spell level."
				]
			}
		},
		"subclassfeature14" : {
			name : "One with the Word",
			source : [["T", 78]],
			minlevel : 14,
			description : ' [see 3rd page "Notes" section]',
			action : [["reaction", " (when damaged)"]],
			advantages : [["Arcana", true]],
			"one with the word" : {
				name : "One with the Word",
				extraname : "Order of Scribes 14",
				source : [["T", 78]],
				description : desc([
					"While my awakened spellbook is on my person, I have advantage on Int (Arcana) checks",
					"As a reaction when I take damage while my spellbook's mind is manifested, I can dismiss it",
					"In dismissing the manifested mind like this, I prevent all of the damage taken by me",
					"After doing so, I lose spells with a combined level of 3d6 from my awakened spellbook",
					"If I do not have enough spells left to cover the number rolled, I drop to 0 HP instead",
					"The spells vanish from my spellbook, reappearing only after I finish 1d6 long rests",
					"I can't cast spells that I lost this way, even if found on a scroll or in another spellbook"
				]),
				usages : 1,
				recovery : "long rest"
			},
			autoSelectExtrachoices : [{
				extrachoice : "one with the word"
			}]
		}
	}
});


// >>>>>>>>>>>>>>>>> //
// >>> New Feats >>> //
// >>>>>>>>>>>>>>>>> //
FeatsList["artificer initiate"] = {
	name : "Artificer Initiate",
	source : [["T", 79], ["UA:F2", 1]],
	descriptionFull : "You've learned some of an artificer's inventiveness:\n \u2022 You learn one cantrip of your choice from the artificer spell list, and you learn one 1st-level spell of your choice from that list. Intelligence is your spellcasting ability for these spells.\n \u2022 You can cast this feat's 1st-level spell without a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast the spell using any spell slots you have.\n \u2022 You gain proficiency with one type of artisan's tools of your choice, and you can use that type of tool as a spellcasting focus for any spell you cast that uses Intelligence as its spellcasting ability.",
	description: typePF ? "I learn a cantrip and a 1st-level spell from the artificer's spell list. Int is my spellcasting ability for these. Once per long rest, I can cast the 1st-level spell at its lowest level without using a spell slot. I gain proficiency in one artisan's tool, which I can use as a spellcasting focus for spells I cast with Int as spellcasting ability." : "I learn one cantrip and one 1st-level spell from the artificer's spell list. Intelligence is my spellcasting ability for these. I can cast the 1st-level spell at its lowest level once per long rest without using a spell slot. I gain proficiency in one artisan's tool, which I can use as a spellcasting focus for any spell I cast that uses Intelligence as its spellcasting ability.",
	spellcastingBonus : [{
		name : "Artificer cantrip",
		spellcastingAbility : 4,
		allowUpCasting : true,
		"class" : 'artificer',
		level : [0, 0],
		atwill : true
	}, {
		name : "1st-level artificer spell",
		"class" : 'artificer',
		level : [1, 1],
		oncelr : true
	}],
	toolProfs : [ ["Artisan's tools", 1] ]
};
FeatsList["chef"] = {
	name : "Chef",
	source : [["T", 79], ["UA:F2", 1]],
	descriptionFull : "Time spent mastering the culinary arts has paid off, granting you the following benefits:\n \u2022 Increase your Constitution or Wisdom score by 1, to a maximum of 20.\n \u2022 You gain proficiency with cook's utensils if you don't already have it.\n \u2022 As part of a short rest, you can cook special food, provided you have ingredients and cook's utensils on hand. You can prepare enough of this food for a number of creatures equal to 4 + your proficiency bonus. At the end of the short rest, any creature who eats the food and spends one or more Hit Dice to regain hit points regains an extra 1d8 hit points.\n \u2022 With one hour of work or when you finish a long rest, you can cook a number of treats equal to your proficiency bonus. These special treats last 8 hours after being made. A creature can use a bonus action to eat one of those treats to gain temporary hit points equal to your proficiency bonus.",
	description : "During a short rest, I can make food for 4 + my Prof" + (typePF ? "" : "iciency") + " Bonus creatures; if they eat it and spend 1" + (typePF ? "+ HD" : " or more Hit Die") + ", they regain 1d8 HP. In one hour or during a long rest, I can make treats equal to my Prof" + (typePF ? "" : "iciency") + " Bonus that last for 8 hours; As a bonus action, one can eat a treat, gaining my Prof" + (typePF ? "" : "iciency") + " Bonus in temporary HP. [+1 " + (typePF ? "Con or Wis" : "Constitution or Wisdom") + "]",
	action : [["bonus action", "Consume Chef's Treat"]],
	toolProfs : ["Cook's utensils"],
	scorestxt : "+1 Constitution or Wisdom"
};
FeatsList["crusher"] = {
	name : "Crusher",
	source : [["T", 79]],
	descriptionFull : "You are practiced in the art of crushing your enemies, granting you the following benefits:\n \u2022 Increase your Strength or Constitution by 1, to a maximum of 20.\n \u2022 Once per turn, when you hit a creature with an attack that deals bludgeoning damage, you can move it 5 feet to an unoccupied space, provided the target is no more than one size larger than you.\n \u2022 When you score a critical hit that deals bludgeoning damage to a creature, attack rolls against that creature are made with advantage until the start of your next turn.",
	description : "Once per turn, when I hit a creature no more than one size larger than me with an attack that deals bludgeoning damage, I can move it 5 ft to an unoccupied space. If I score a critical hit that deals bludgeoning damage, attacks against the creature hit gain advantage until the start of my next turn. [+1 " + (typePF ? "Str or Con" : "Strength or Constitution") + "]",
	scorestxt : "+1 Strength or Constitution"
};
FeatsList["eldritch adept"] = {
	name : "Eldritch Adept",
	source : [["T", 79], ["UA:F2", 1]],
	descriptionFull : "Studying occult lore, you have unlocked eldritch power within yourself: you learn one Eldritch Invocation option of your choice from the warlock class. If the invocation has a prerequisite of any kind, you can choose that invocation only if you're a warlock who meets the prerequisite.\n   Whenever you gain a level, you can replace the invocation with another one from the warlock class.",
	description: 'I learn one Eldritch Invocation from the warlock class for which I meet the prerequisites (2nd page "Choose Feature" button). I can replace this invocation for another whenever I gain a level.',
	bonusClassExtrachoices : [{
		"class" : "warlock",
		feature : "eldritch invocations",
		bonus : 1
	}],
	prerequisite : "Spellcasting or Pact Magic feature",
	prereqeval : function (v) { return v.isSpellcastingClass; }
};
FeatsList["fey touched"] = {
	name : "Fey Touched",
	source : [["T", 79], ["UA:F2", 2]],
	descriptionFull : "Your exposure to the Feywild's magic has changed you, granting you the following benefits:\n \u2022 Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.\n \u2022 You learn the misty step spell and one 1st-level spell of your choice. The 1st-level spell must be from the divination or enchantment school of magic. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat.",
	description : "I learn Misty Step and one 1st level divination or enchantment spell. I can cast each once per lost rest at their lowest level without expending a spell slot, and can cast them if I have a spell slot to do so. My spellcasting ability is the ability I choose to increase when I gain this feat. [+1 Intelligence, Wisdom, or Charisma]",
	spellcastingBonus : [{
		name : "Misty Step",
		spells : ["misty step"],
		selection : ["misty step"],
		firstCol : "oncelr"
	}, {
		name : "1st-level Ench/Div spell",
		'class': "any",
		school : ["Ench", "Div"],
		level : [1, 1],
		firstCol : "oncelr"
	}],
	spellcastingAbility : 4,
	allowUpCasting : true,
	choices : ["Intelligence", "Wisdom", "Charisma"],
	"intelligence": {
		description : "I learn Misty Step and one 1st level divination or enchantment spell. I can cast each once per lost rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Intelligence is my spellcasting ability for these spells. [+1 Intelligence]",
		spellcastingAbility : 4,
		scores : [0, 0, 0, 1, 0, 0]
	},
	"wisdom": {
		description : "I learn Misty Step and one 1st level divination or enchantment spell. I can cast each once per lost rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Wisdom is my spellcasting ability for these spells. [+1 Wisdom]",
		spellcastingAbility : 5,
		scores : [0, 0, 0, 0, 1, 0]
	},
	"charisma": {
		description : "I learn Misty Step and one 1st level divination or enchantment spell. I can cast each once per lost rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Charisma is my spellcasting ability for these spells. [+1 Charisma]",
		spellcastingAbility : 6,
		scores : [0, 0, 0, 0, 0, 1]
	}
};
// Add the fighting initiate only when all other code has run, so that we get fighting styles added by the code
RunFunctionAtEnd(function() {
	if (!ClassList.fighter || !ClassList.fighter.features["fighting style"]) return;
	var FtngStyles = ClassList.fighter.features["fighting style"];
	FeatsList["fighting initiate"] = {
		name : "Fighting Initiate",
		source : [["T", 80], ["UA:F2", 2]],
		descriptionFull : "Your martial training has helped you develop a particular style of fighting. As a result, you learn one Fighting Style option of your choice from the fighter class. If you already have a style, the one you choose must be different.\n   Whenever you reach a level that grants the Ability Score Improvement feature, you can replace this feat's fighting style with another one from the fighter class that you don't have.",
		description: "I learn one Fighting Style from the fighter class, which must be one that I don't yet know. I can replace this fighting style for another whenever I gain an Ability Score Improvement.",
		prerequisite: "Proficiency with a martial weapon",
		prereqeval : function(v) {
			return v.martialWeaponsProf || v.otherWeaponsProf.some(function (n) {
				return WeaponsList[n] && (/Martial/i).test(WeaponsList[n].type);
			});
		},
		choices : [],
		"archery" : {
			description : "I gain a +2 bonus to attack rolls I make with ranged weapons. I can replace this fighting style for another whenever I gain an Ability Score Improvement.",
			source : FtngStyles.source
		},
		"defense" : {
			description : "I gain a +1 bonus to my AC while I'm wearing armor. I can replace this fighting style for another whenever I gain an Ability Score Improvement.",
			source : FtngStyles.source
		},
		"dueling" : {
			description : "When I wield a melee weapon in one hand and no other weapons, I gain a +2 bonus to damage rolls with that weapon. I can replace this fighting style for another whenever I gain an Ability Score Improvement.",
			source : FtngStyles.source
		},
		"great weapon fighting" : {
			description : "When I roll a 1 or 2 on a damage die for an attack I make with a two-handed or versatile melee weapon that I'm wielding with two hands, I can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. I can replace this fighting style for another whenever I gain an Ability Score Improvement.",
			source : FtngStyles.source
		},
		"protection" : {
			description : "When a creature I can see attacks a target other than me that is within 5 ft of me, I can use my reaction to impose disadvantage on the attack roll. I must be wielding a shield to do this. I can replace this fighting style for another whenever I gain an Ability Score Improvement.",
			source : FtngStyles.source
		},
		"two-weapon fighting" : {
			description : "When I engage in two-weapon fighting, I can add my ability modifier to the damage of the second (off-hand) attack. I can replace this fighting style for another whenever I gain an Ability Score Improvement.",
			source : FtngStyles.source
		},
		"blind fighting" : {
			description : "I have blindsight with a range of 10 ft, wherein I can effectively see anything that isn't behind total cover, including invisible things, even if I'm blinded or in darkness. This doesn't allow me to see things hidden from me. I can replace this fighting style for another whenever I gain an Ability Score Improvement.",
			source : [["T", 41]]
		},
		"interception" : {
			description : "As a reaction when a creature I can see hits a target, other than me, within 5 ft of me with an attack, I can reduce the damage the target takes by 1d10 + my proficiency bonus (min 0 damage). I must be wielding a shield or a simple or martial weapon to do this. I can replace this fighting style for another whenever I gain an Ability Score Improvement.",
			source : [["T", 41], ["UA:CFV", 12]]
		},
		"thrown weapon fighting" : {
			description : "I can draw a weapon that has the thrown property as part of the attack I make with the weapon. In addition, when I hit with a ranged attack using a thrown weapon, I gain a +2 bonus to the damage roll. I can replace this fighting style for another whenever I gain an Ability Score Improvement.",
			source : [["T", 42]]
		},
		"unarmed fighting" : {
			description : "My unarmed strikes deal 1d6 damage, or 1d8 if I'm not wielding any weapons or a shield. At the start of each of my turns, I can deal 1d4 bludgeoning damage to one creature grappled by me. I can replace this fighting style for another whenever I gain an Ability Score Improvement.",
			source : [["T", 42]]
		}
	};
	FtngStyles.choices.forEach(function (sName) {
		var sNameLC = sName.toLowerCase();
		if (!FtngStyles[sNameLC]) return;
		FeatsList["fighting initiate"].choices.push(sName);
		if (!FeatsList["fighting initiate"][sNameLC]) {
			FeatsList["fighting initiate"][sNameLC] = {
				description : FtngStyles[sNameLC].description.replace(/^\n   /i, '').replace(/\n   /g, '. ') + ". I can replace this fighting style whenever I gain an ASI.",
				source : FtngStyles[sNameLC].source ? FtngStyles[sNameLC].source : FtngStyles.source
			}
		}
		// Copy all attributes except name, source and description
		for (var attr in FtngStyles[sNameLC]) {
			if ((/\b(name|description|source)\b/i).test(attr)) continue;
			FeatsList["fighting initiate"][sNameLC][attr] = FtngStyles[sNameLC][attr];
		}
		if (!FeatsList["fighting initiate"][sNameLC].prereqeval) {
			FeatsList["fighting initiate"][sNameLC].prereqeval = function(v) {
				var knownStyles = GetFightingStyleSelection();
				return knownStyles[v.choice] ? false : true;
			};
			if (!FeatsList["fighting initiate"][sNameLC].prerequisite) FeatsList["fighting initiate"][sNameLC].prerequisite = sName + " Fighting Style is not selected anywhere else."
		};
	});
});
FeatsList["gunner"] = {
	name : "Gunner",
	source : [["T", 80], ["UA:F2", 2]],
	descriptionFull : "You have a quick hand and keen eye when employing firearms, granting you the following benefits:\n \u2022 Increase your Dexterity score by 1, to a maximum of 20.\n \u2022 You gain proficiency with firearms (see \"Firearms\" in the Dungeon Master's Guide).\n \u2022 You ignore the loading property of firearms.\n \u2022 Being within 5 feet of a hostile creature doesn't impose disadvantage on your ranged attack rolls.",
	description: "I gain proficiency with firearms. I ignore the loading property of firearms. I don't suffer disadvantage on ranged attack rolls for being within 5 ft of a hostile creature. [+1 Dexterity]",
	scores : [0, 1, 0, 0, 0, 0],
	weaponProfs : [false, false, ["Firearms"]],
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if ((/firearm/i).test(v.theWea.type) || (/firearm/i).test(v.theWea.list)) {
					fields.Description = fields.Description.replace(/([;,]? ?loading|loading[;,]? ?)/i, '');
				};
			},
			"I ignore the loading quality of firearms."
		]
	}
};
FeatsList["metamagic adept"] = {
	name : "Metamagic Adept",
	source : [["T", 80], ["UA:F2", 2]],
	descriptionFull : "You've learned how to exert your will on your spells to alter how they function:\n \u2022 You learn two Metamagic options of your choice from the sorcerer class. You can use only one Metamagic option on a spell when you cast it, unless the option says otherwise. Whenever you reach a level that grants the Ability Score Improvement feature, you can replace one of these Metamagic options with another one from the sorcerer class.\n \u2022 You gain 2 sorcery points to spend on Metamagic (these points are added to any sorcery points you have from another source but can be used only on Metamagic). You regain all spent sorcery points when you finish a long rest.",
	description: 'I learn two Metamagic options from the sorcerer class (2nd page "Choose Feature" button). I can use only one option on a spell unless it says otherwise. I gain 2 sorcery points, which I can only use for Metamagic. I regain all expended sorcery points when I finish a long rest. I can change one ' + (typePF ? '' : 'Metamagic option ') + 'whenever I gain an ' + (typePF ? 'ASI' : 'Ability Score Improvement') + '.',
	bonusClassExtrachoices : [{
		"class" : "sorcerer",
		feature : "metamagic",
		bonus : 2
	}],
	extraLimitedFeatures : [{
		name : "Sorcery Points",
		usages : 2,
		recovery : "long rest",
		addToExisting : true
	}],
	prerequisite : "Spellcasting or Pact Magic feature",
	prereqeval : function (v) { return v.isSpellcastingClass; }
};
FeatsList["piercer"] = {
	name : "Piercer",
	source : [["T", 80], ["UA:F2", 2]],
	descriptionFull : "You have achieved a penetrating precision in combat, granting you the following benefits:\n \u2022 Increase your Strength or Dexterity by 1, to a maximum of 20.\n \u2022 Once per turn, when you hit a creature with an attack that deals piercing damage, you can reroll one of the attack's damage dice, and you must use the new roll.\n \u2022 When you score a critical hit that deals piercing damage to a creature, you can roll one additional damage die when determining the extra piercing damage the target takes.",
	description : "Once per turn when I deal piercing damage to a target, I can reroll one of the damage die and use the new roll. If I deal piercing damage on a critical hit to a target I can roll one additional damage die. [+1 Strength or Dexterity]",
	scorestxt : "+1 Strength or Dexterity",
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if ((/pierc(\.|ing)/i).test(fields.Damage_Type)) {
					var extraCritRegex = /\d+(d\d+ extra on a crit(ical)?( hit)? in melee)/i;
					v.extraCritM = (v.extraCritM ? v.extraCritM : 0) + 1;
					if (extraCritRegex.test(fields.Description)) {
						fields.Description = fields.Description.replace(extraCritRegex, v.extraCritM + '$1');
					} else if ((/d\d/).test(fields.Damage_Die)) {
						fields.Description += (fields.Description ? '; ' : '') + v.extraCritM + fields.Damage_Die.replace(/.*(d\d+).*/, '$1') + ' extra on a crit in melee';
					}
					if (!(/re-?roll (one|1)? ?damage/i).test(fields.Description)) {
						fields.Description += '; Once per turn, re-roll one damage die';
					}
				}
			},
			"While wielding a two-handed or versatile melee weapon in two hands, I can re-roll a 1 or 2 on any damage die once."
		]
	}
};
FeatsList["poisoner"] = {
	name : "Poisoner",
	source : [["T", 80], ["UA:F2", 2]],
	descriptionFull : "You can prepare and deliver deadly poisons, granting you the following benefits:\n \u2022 When you make a damage roll that deals poison damage, it ignores resistance to poison damage.\n \u2022 You can apply poison to a weapon or piece of ammunition as a bonus action, instead of an action.\n \u2022 You gain proficiency with the poisoner's kit if you don't already have it. With one hour of work using a poisoner's kit and expending 50 gp worth of materials, you can create a number of doses of potent poison equal to your proficiency bonus. Once applied to a weapon or piece of ammunition, the poison retains its potency for 1 minute or until you hit with the weapon or ammunition. When a creature takes damage from the coated weapon or ammunition, that creature must succeed on a DC 14 Constitution saving throw or take 2d8 poison damage and become poisoned until the end of your next turn.",
	description : "My poison damage rolls ignore poison resistance. As a bonus action, I can apply poison to a weapon or piece of ammo. I can use a poisoner's kit and 50 gp to create my Prof. Bonus doses of poison in 1 hour. Potent 1 min after applying. DC 14 Con save or 2d8 poison damage and poisoned until the end of my next turn.",
	toolProfs : ["Poisoner's kit"],
	action : [["bonus action", "Apply poison to weapon/ammo"]]
};
FeatsList["shadow touched"] = {
	name: "Shadow Touched",
	source: [["T", 80]],
	descriptionFull : "Your exposure to the Shadowfell's magic has changed you, granting you the following benefits:\n \u2022 Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.\n \u2022 You learn the invisibility spell and one 1st-level spell of your choice. The 1st-level spell must be from the illusion or necromancy school of magic. You learn the invisibility spell and one 1st-level spell of your choice. The 1st-level spell must be from the illusion or necromancy school of magic. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat.",
	description : "I learn Invisibility and one 1st level illusion or necromancy spell. I can cast each once per lost rest at their lowest level without expending a spell slot, and can cast them if I have a spell slot to do so. My spellcasting ability is the ability I choose to increase when I gain this feat. [+1 Intelligence, Wisdom, or Charisma]",
	spellcastingBonus : [{
		name : "Invisibility",
		spells : ["invisibility"],
		selection : ["invisibility"],
		firstCol : "oncelr"
	}, {
		name : "1st-level Illus/Necro spell",
		'class' : "any",
		school : ["Illus", "Necro"],
		level : [1, 1],
		firstCol : "oncelr"
	}],
	spellcastingAbility : 4,
	allowUpCasting : true,
	choices: ["Intelligence", "Wisdom", "Charisma"],
	"intelligence": {
		description : "I learn Invisibility and one 1st level illusion or necromancy spell. I can cast each once per lost rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Intelligence is my spellcasting ability for these spells. [+1 Intelligence]",
		spellcastingAbility : 4,
		scores : [0, 0, 0, 1, 0, 0]
	},
	"wisdom": {
		description : "I learn Invisibility and one 1st level illusion or necromancy spell. I can cast each once per lost rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Wisdom is my spellcasting ability for these spells. [+1 Wisdom]",
		spellcastingAbility : 5,
		scores : [0, 0, 0, 0, 1, 0]
	},
	"charisma": {
		description : "I learn Invisibility and one 1st level illusion or necromancy spell. I can cast each once per lost rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Charisma is my spellcasting ability for these spells. [+1 Charisma]",
		spellcastingAbility : 6,
		scores : [0, 0, 0, 0, 0, 1]
	}
};
FeatsList["skill expert"] = {
	name: "Skill Expert",
	source: [["T", 80]],
	descriptionFull : "You have honed your proficiency with particular skills, granting you the following benefits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You gain proficiency in one skill of your choice.\n \u2022 Choose one skill in which you have proficiency. You gain expertise with that skill, which means your proficiency bonus is doubled for any ability check you make with it. The skill you choose must be one that isn't already benefiting from a feature, such as Expertise, that doubles your proficiency bonus.",
	description: "I gain proficiency in one skill and expertise in that same skill or another skill I'm proficient with. [+1 to one ability score of my choice]",
	skillstxt : "Proficiency with one skill, and\n   Expertise with one skill I'm proficient with",
	scorestxt : "+1 to one ability score of my choice"
};
FeatsList["slasher"] = {
	name : "Slasher",
	source : [["T", 81], ["UA:F2", 3]],
	descriptionFull : "You've learned where to cut to have the greatest results, granting you the following benefits:\n \u2022 Increase your Strength or Dexterity by 1, to a maximum of 20.\n \u2022 Once per turn when you hit a creature with an attack that deals slashing damage, you can reduce the speed of the target by 10 feet until the start of your next turn.\n \u2022 When you score a critical hit that deals slashing damage to a creature, you grievously wound it. Until the start of your next turn, the target has disadvantage on all attack rolls.",
	description : "Once per turn when I deal slashing damage to a target, I can reduce its speed by 10 ft until the start of my next turn. When I score a critical hit that deals slashing damage to a creature, the grievous wound causes it to have disadvantage on all attack rolls until the start of my next turn. [+1 Strength or Dexterity]",
	scorestxt : "+1 Strength or Dexterity"
};
FeatsList["telekinetic"] = {
	name: "Telekinetic",
	source: [["T", 81]],
	descriptionFull : "You learn to move things with your mind, granting you the following benefits:\n \u2022 Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.\n \u2022 You learn the mage hand cantrip. You can cast it without verbal or somatic components, and you can make the spectral hand invisible. If you already know this spell, its range increases by 30 feet when you cast it. Its spellcasting ability is the ability increased by this feat.\n \u2022 As a bonus action, you can try to telekinetically shove one creature you can see within 30 feet of you. When you do so, the target must succeed on a Strength saving throw (DC 8 + your proficiency bonus + the ability modifier of the score increased by this feat) or be moved 5 feet toward you or away from you. A creature can willingly fail this save.",
    description : "I know the Mage Hand cantrip, can cast it without components, and the spectral hand can be invisible. As a bonus action, I can shove one creature I can see within 30 ft. It must make a Str save vs. this feat's spell save DC or be moved 5 ft from or towards me. My spellcasting ability is the ability I choose to increase when I gain this feat. [+1 Int, Wis, or Cha]",
	action : [["bonus action", " Shove"]],
	spellcastingBonus : [{
		name : "Mage Hand",
		spells : ["mage hand"],
		selection : ["mage hand"],
		firstCol : "oncelr"
	}],
	spellcastingAbility : 4,
	calcChanges : {
		spellAdd : [
			function (spellKey, spellObj, spName) {
				if (spellKey !== "mage hand") return;
				spellObj.components = "";
				if (spellObj.description === SpellsList["mage hand"].description) spellObj.description = "Create (in)visible spectral hand for simple tasks or carry up to 10 lb; 1 a to control; can't have multiple";
				var rangeRx = /(\d+)( ?ft| ?m)/i;
				if (!/^(?=.*telekinetic)(?=.*feat).*$/i.test(CurrentSpells[spName].name) && rangeRx.test(spellObj.range)) {
					// add the +30 ft rang only if not the entry for the feat itself
					var spRangeM = spellObj.range.match(rangeRx);
					spellObj.range = spellObj.range.replace(rangeRx, Number(spRangeM[1]) + (What("Unit System") === "metric" ? 9 : 30) + spRangeM[2]);
				}
				return true;
			},
			"My Telekinetic feat allows me to cast the Mage Hand cantrip without verbal or somatic components and I can make the spectral hand invisible. If I already know the cantrip from another source, its range is also increased with 30 ft."
		]
	},
	choices: ["Intelligence", "Wisdom", "Charisma"],
	"intelligence": {
		description : "I know the Mage Hand cantrip, can cast it without components, and the spectral hand can be invisible. As a bonus action, I can shove one creature I can see within 30 ft. It must make a Str" + (typePF ? "" : "ength") + " save vs. this feat's spell save DC or be moved 5 ft" + (typePF ? "" : "away") + " from or towards me. Intelligence is my spellcasting ability for these. [+1 Intelligence]",
		spellcastingAbility : 4,
		scores : [0, 0, 0, 1, 0, 0]
	},
	"wisdom": {
		description : "I know the Mage Hand cantrip, can cast it without components, and the spectral hand can be invisible. As a bonus action, I can shove one creature I can see within 30 ft. It must make a Str" + (typePF ? "" : "ength") + " save vs. this feat's spell save DC or be moved 5 ft" + (typePF ? "" : "away") + " from or towards me. Wisdom is my spellcasting ability for these. [+1 Wisdom]",
		spellcastingAbility : 5,
		scores : [0, 0, 0, 0, 1, 0]
	},
	"charisma": {
		description : "I know the Mage Hand cantrip, can cast it without components, and the spectral hand can be invisible. As a bonus action, I can shove one creature I can see within 30 ft. It must make a Str" + (typePF ? "" : "ength") + " save vs. this feat's spell save DC or be moved 5 ft" + (typePF ? "" : "away") + " from or towards me. Charisma is my spellcasting ability for these. [+1 Charisma]",
		spellcastingAbility : 6,
		scores : [0, 0, 0, 0, 0, 1]
	}
};
FeatsList["telepathic"] = {
	name: "Telepathic",
	source: [["T", 81]],
	descriptionFull : "You awaken the ability to mentally connect with others, granting you the following benefits:\n \u2022 Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20.\n \u2022 You can speak telepathically to any creature you can see within 60 feet of you. Your telepathic utterances are in a language you know, and the creature understands you only if it knows that language. Your communication doesn't give the creature the ability to respond to you telepathically.\n \u2022 You can cast the detect thoughts spell, requiring no spell slot or components, and you must finish a long rest before you can cast it this way again. Your spellcasting ability for the spell is the ability increased by this feat. If you have spell slots of 2nd level or higher, you can cast this spell with them.",
    description : "I can telepathically speak to a creature I can see within 60 ft in a language I know, but it can't respond telepathically. I can cast Detect Thoughts once per lost rest at its lowest level, requiring no spell slot or components, and can cast it using a spell slot as normal. My spellcasting ability is the ability I increase with this feat. [+1 Int, Wis, or Cha]",
	action : [["bonus action", " Shove"]],
	spellcastingBonus : [{
		name : "Detect Thoughts",
		spells : ["detect thoughts"],
		selection : ["detect thoughts"],
		firstCol : "oncelr"
	}],
	spellcastingAbility : 4,
	allowUpCasting : true,
	spellChanges : {
		"detect thoughts" : {
			components : "(V,S,M)",
			changes : "My Telepathic feat allows me to cast Detect Thoughts once per long rest without requiring a spell slot or spell components, or by using a spell slot and cast it with components as normal."
		}
	},
	choices: ["Intelligence", "Wisdom", "Charisma"],
	"intelligence": {
		description : "I can telepathically speak to a creature I can see within 60 ft in a language I know, but it can't respond telepathically. I can cast Detect Thoughts once per lost rest at its lowest level, requiring no spell slot or components, and can cast it using a spell slot as normal. Intelligence is my spellcasting ability for this. [+1 Int" + (typePF ? "" : "elligence") + "]",
		spellcastingAbility : 4,
		scores : [0, 0, 0, 1, 0, 0]
	},
	"wisdom": {
		description : "I can telepathically speak to a creature I can see within 60 ft in a language I know, but it can't respond telepathically. I can cast Detect Thoughts once per lost rest at its lowest level, requiring no spell slot or components, and can cast it using a spell slot as normal. Wisdom is my spellcasting ability for this. [+1 Wis" + (typePF ? "" : "dom") + "]",
		spellcastingAbility : 5,
		scores : [0, 0, 0, 0, 1, 0]
	},
	"charisma": {
		description : "I can telepathically speak to a creature I can see within 60 ft in a language I know, but it can't respond telepathically. I can cast Detect Thoughts once per lost rest at its lowest level, requiring no spell slot or components, and can cast it using a spell slot as normal. Charisma is my spellcasting ability for this. [+1 Cha" + (typePF ? "" : "risma") + "]",
		spellcastingAbility : 6,
		scores : [0, 0, 0, 0, 0, 1]
	}
};


// >>>>>>>>>>>>>>>>>> //
// >>> New Spells >>> //
// >>>>>>>>>>>>>>>>>> //
// [dupl_start] reprint spells from Sword Coast Adventure Guide (after 2020 errata)
if (!SourceList.S) {
	SpellsList["booming blade"] = {
		name : "Booming Blade",
		classes : ["artificer", "sorcerer", "warlock", "wizard"],
		source : [["T", 106], ["S", 142]],
		level : 0,
		school : "Evoc",
		time : "1 a",
		range : "S:5-ft rad",
		components : "S,M\u0192",
		compMaterial : "A melee weapon worth at least 1 sp",
		duration : "1 round",
		description : "Melee wea atk with cast; hit: 0d8 Thunder dmg, if it moves next rnd +1d8; +1d8 at CL5, 11, \u0026 17",
		descriptionCantripDie : "Melee wea atk with cast; if hit: `CD-1`d8 Thunder dmg and if it moves next round +`CD`d8 Thunder dmg",
		descriptionFull : "You brandish the weapon used in the spell's casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack's normal effects and then becomes sheathed in booming energy until the start of your next turn. If the target willingly moves 5 feet or more before then, the target takes 1d8 thunder damage, and the spell ends.\n   This spell's damage increases when you reach certain levels. At 5th level, the melee attack deals an extra 1d8 thunder damage to the target on a hit, and the damage the target takes for moving increases to 2d8. Both damage rolls increase by 1d8 at 11th level (2d8 and 3d8) and again at 17th level (3d8 and 4d8)."
	};
	SpellsList["green-flame blade"] = {
		name : "Green-Flame Blade",
		classes : ["artificer", "sorcerer", "warlock", "wizard"],
		source : [["T", 107], ["S", 143]],
		level : 0,
		school : "Evoc",
		time : "1 a",
		range : "S:5-ft rad",
		components : "S,M\u0192",
		compMaterial : "A melee weapon worth at least 1 sp",
		duration : "Instantaneous",
		description : "Melee wea atk with cast; atk +0d8 Fire dmg, crea in 5 ft 0d8+spell mod Fire dmg; +1d8 at CL5/11/17",
		descriptionCantripDie : "Melee wea atk with cast; if hit, atk does +`CD-1`d8 Fire dmg, 1 crea in 5 ft `CD-1`d8+spellcasting ability modifier Fire dmg",
		descriptionFull : "You brandish the weapon used in the spell's casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack's normal effects, and you can cause green fire to leap from the target to a different creature of your choice that you can see within 5 feet of it. The second creature takes fire damage equal to your spellcasting ability modifier.\n   This spell's damage increases when you reach certain levels. At 5th level, the melee attack deals an extra 1d8 fire damage to the target on a hit, and the fire damage to the second creature increases to 1d8 + your spellcasting ability modifier. Both damage rolls increase by 1d8 at 11th level (2d8 and 2d8) and 17th level (3d8 and 3d8)."
	};
	SpellsList["lightning lure"] = {
		name : "Lightning Lure",
		classes : ["artificer", "sorcerer", "warlock", "wizard"],
		source : [["T", 107], ["S", 143]],
		level : 0,
		school : "Evoc",
		time : "1 a",
		range : "S:15-ft rad",
		components : "V",
		duration : "Instantaneous",
		save : "Str",
		description : "1 crea in 15 ft I see save or pulled 10 ft to me; if it end in 5 ft, 1d8 Lightning dmg; +1d8 at CL 5, 11, and 17",
		descriptionCantripDie : "1 crea I see save or pulled 10 ft to me; if it end in 5 ft, `CD`d8 Lightning dmg",
		descriptionFull : "You create a lash of lightning energy that strikes at one creature of your choice that you can see within 15 feet of you. The target must succeed on a Strength saving throw or be pulled up to 10 feet in a straight line toward you and then take 1d8 lightning damage if it is within 5 feet of you." + "\n   " + "This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
	};
	SpellsList["sword burst"] = {
		name : "Sword Burst",
		classes : ["artificer", "sorcerer", "warlock", "wizard"],
		source : [["T", 115], ["S", 143]],
		level : 0,
		school : "Conj",
		time : "1 a",
		range : "S:5-ft rad",
		components : "V",
		duration : "Instantaneous",
		save : "Dex",
		description : "All crea in range save or 1d6 Force damage; +1d6 at CL 5, 11, and 17",
		descriptionCantripDie : "All crea in range save or `CD`d6 Force damage",
		descriptionFull : "You create a momentary circle of spectral blades that sweep around you. All other creatures within 5 feet of you must succeed on a Dexterity saving throw or take 1d6 force damage." + "\n   " + "This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
	};
	WeaponsList["booming blade"] = {
		regExpSearch : /^(?=.*booming)(?=.*blade).*$/i,
		name : "Booming Blade",
		source : [["T", 106], ["S", 142]],
		list : "spell",
		ability : 6,
		type : "Cantrip",
		damage : ["Bd8/Cd8", "", "thunder"],
		range : "With melee wea",
		description : "First damage added to the attack; second to the target if it moves next round",
		abilitytodamage : false
	};
	WeaponsList["green-flame blade"] = {
		regExpSearch : /^(?=.*green)(?=.*flame)(?=.*blade).*$/i,
		name : "Green-Flame Blade",
		source : [["T", 107], ["S", 143]],
		list : "spell",
		ability : 6,
		type : "Cantrip",
		damage : ["Bd8/Bd8", "", "fire"],
		range : "With melee wea",
		description : "First damage added to the attack; second to a target within 5 ft",
		abilitytodamage : true
	};
	WeaponsList["lightning lure"] = {
		regExpSearch : /^(?=.*lightning)(?=.*lure).*$/i,
		name : "Lightning Lure",
		source : [["T", 107], ["S", 143]],
		list : "spell",
		ability : 5,
		type : "Cantrip",
		damage : ["C", 8, "lightning"],
		range : "15 ft",
		description : "Str save; success - nothing; fail - pulled 10 ft closer to me, only take damage if end within 5 ft of me",
		abilitytodamage : false,
		dc : true
	};
	WeaponsList["sword burst"] = {
		regExpSearch : /^(?=.*sword)(?=.*burst).*$/i,
		name : "Sword Burst",
		source : [["T", 115], ["S", 143]],
		list : "spell",
		ability : 6,
		type : "Cantrip",
		damage : ["C", 6, "force"],
		range : "5-ft radius",
		description : "Dex save, success - no damage; all creatures in range",
		abilitytodamage : false,
		dc : true
	};
} // dupl_end
SpellsList["blade of disaster"] = {
	name : "Blade of Disaster",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["T", 106]],
	level : 9,
	school : "Conj",
	time : "1 bns",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	description : "Create weapon; 2 spell atks 4d12 Force dmg; crit on 18+, triple dmg; bns a to move 30 ft \u0026 do 2 atks",
	descriptionFull : "You create a blade-shaped planar rift about 3 feet long in an unoccupied space you can see within range. The blade lasts for the duration. When you cast this spell, you can make up to two melee spell attacks with the blade, each one against a creature, loose object, or structure within 5 feet of the blade. On a hit, the target takes 4d12 force damage. This attack scores a critical hit if the number on the d20 is 18 or higher. On a critical hit, the blade deals an extra 8d12 force damage (for a total of 12d12 force damage)." +
	"\n   As a bonus action on your turn, you can move the blade up to 30 feet to an unoccupied space you can see and then make up to two melee spell attacks with it again." +
	"\n   The blade can harmlessly pass through any barrier, including a wall of force."
};
SpellsList["dream of the blue veil"] = {
	name : "Dream of the Blue Veil",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : [["T", 106]],
	level : 7,
	school : "Conj",
	time : "10 min",
	range : "20 ft",
	components : "V,S,M\u0192",
	compMaterial : "A magic item or a willing creature from the destination world",
	duration : "6 hours",
	description : "9 willing crea unconscious for duration, after that travel to origin material plane of magic item or crea",
	descriptionFull : "You and up to eight willing creatures within range fall unconscious for the spell's duration and experience visions of another world on the Material Plane, such as Oerth, Toril, Krynn, or Eberron. If the spell reaches its full duration, the visions conclude with each of you encountering and pulling back a mysterious blue curtain. The spell then ends with you mentally and physically transported to the world that was in the visions." +
	"\n   To cast this spell, you must have a magic item that originated on the world you wish to reach, and you must be aware of the world's existence, even if you don't know the world's name. Your destination in the other world is a safe location within 1 mile of where the magic item was created. Alternatively, you can cast the spell if one of the affected creatures was born on the other world, which causes your destination to be a safe location within 1 mile of where that creature was born." +
	"\n   The spell ends early on a creature if that creature takes any damage, and the creature isn't transported. If you take any damage, the spell ends for you and all the other creatures, with none of you being transported."
};
SpellsList["intellect fortress"] = {
	name : "Intellect Fortress",
	classes : ["artificer", "bard", "sorcerer", "warlock", "wizard"],
	source : [["T", 107]],
	level : 3,
	school : "Abjur",
	time : "1 a",
	range : "30 ft",
	components : "V",
	duration : "Conc, 1 h",
    description : "1+1/SL crea, each max 30 ft apart, has Psychic damage resistance and adv. on Int, Wis, and Cha saves",
	descriptionFull : "For the duration, you or one willing creature you can see within range has resistance to psychic damage, as well as advantage on Intelligence, Wisdom, and Charisma saving throws." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd. The creatures must be within 30 feet of each other when you target them."
};
SpellsList["mind sliver"] = {
	name : "Mind Sliver",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["T", 108], ["UA:SnW", 4], ["UA:FRnW", 7], ["UA:POR", 7]],
	level : 0,
	school : "Ench",
	time : "1 a",
	range : "60 ft",
	components : "V",
	duration : "1 rnd",
	save : "Int",
	description : "1 crea save or 1d6 Psychic dmg, -1d4 on first save before my next turn ends; +1d6 at CL 5, 11, and 17",
	descriptionCantripDie : "1 crea save or `CD`d6 Psychic dmg and subtract 1d4 from first saving throw before my next turn ends",
	descriptionFull : "You drive a disorienting spike of psychic energy into the mind of one creature you can see within range. The target must succeed on an Intelligence saving throw or take 1d6 psychic damage and subtract 1d4 from the next saving throw it makes before the end of your next turn." +
	"\n   This spell's damage increases by 1d6 when you reach certain levels: 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
};
WeaponsList["mind sliver"] = {
	regExpSearch : /^(?=.*mind)(?=.*sliver).*$/i,
	name : "Mind Sliver",
	source : [["T", 108], ["UA:SnW", 4], ["UA:FRnW", 7], ["UA:POR", 7]],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 6, "psychic"],
	range : "60 ft",
	description : "1 creature Int save, success - no damage, fail - also -1d4 on first save before my next turn ends",
	abilitytodamage : false,
	dc : true
};
SpellsList["spirit shroud"] = {
	name : "Spirit Shroud",
	classes : ["cleric", "paladin", "warlock", "wizard"],
	source : [["T", 108]],
	level : 3,
	school : "Necro",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
    description : "In 10 ft, crea -10 ft spd, my atks +1d8+1d8/2SL dmg (Radi/Necr/Cold), no heal until next turn starts",
	descriptionFull : "You call forth spirits of the dead, which flit around you for the spell's duration. The spirits are intangible and invulnerable." +
	"\n   Until the spell ends, any attack you make deals 1d8 extra damage when you hit a creature within 10 feet of you. This damage is radiant, necrotic, or cold (your choice when you cast the spell). Any creature that takes this damage can't regain hit points until the start of your next turn." +
	"\n   In addition, any creature of your choice that you can see that starts its turn within 10 feet of you has its speed reduced by 10 feet until the start of your next turn." +
	AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for every two slot levels above 3rd."
};
SpellsList["summon abberation"] = {
	name : "Summon Abberation",
	classes : ["warlock", "wizard"],
	source : [["T", 109]],
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "90 ft",
    components : "V,S,M\u0192",
    compMaterial : "A pickled tentacle and an eyeball in a platinum-inlaid vial worth at least 400 gp",
	duration : "Conc, 1 h",
    description : "Summon choice of Abberant Spirit; obeys commands; takes turn after mine; vanishes at 0 hp (300gp)",
	descriptionFull : "You call forth an aberrant spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Aberrant Spirit stat block. When you cast the spell, choose Beholderkin, Slaad, or Star Spawn. The creature resembles an aberration of that kind, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.\n   The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, use the higher level wherever the spell's level appears in the stat block."
};
SpellsList["summon beast"] = {
	name : "Summon Beast",
	classes : ["druid", "ranger"],
	source : [["T", 109]],
	level : 2,
	school : "Conj",
	time : "1 a",
	range : "90 ft",
    components : "V,S,M\u0192",
    compMaterial : "A feather, tuft of fur, and fish tail inside a gilded acorn worth at least 200 gp",
	duration : "Conc, 1 h",
    description : "Summon choice of Bestial Spirit; obeys commands; takes turn after mine; disappears at 0 hp (200gp)",
	descriptionFull : "You call forth a bestial spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Bestial Spirit stat block. When you cast the spell, choose an environment: Air, Land, or Water. The creature resembles an animal of your choice that is native to the chosen environment, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.\n   The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, use the higher level wherever the spell's level appears in the stat block."
};
SpellsList["summon celestial"] = {
	name : "Summon Celestial",
	classes : ["cleric", "paladin"],
	source : [["T", 110]],
	level : 5,
	school : "Conj",
	time : "1 a",
	range : "90 ft",
    components : "V,S,M\u0192",
    compMaterial : "A golden reliquary worth at least 500 gp",
	duration : "Conc, 1 h",
    description : "Summon choice of Celestial Spirit; obeys commands; takes turn after mine; disappears at 0 hp (500gp)",
	descriptionFull : "You call forth a celestial spirit. It manifests in an angelic form in an unoccupied space that you can see within range. This corporeal form uses the Celestial Spirit stat block. When you cast the spell, choose Avenger or Defender. Your choice determines the creature's attack in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.\n   The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, use the higher level wherever the spell's level appears in the stat block."
};
SpellsList["summon construct"] = {
	name : "Summon Construct",
	classes : ["artificer", "wizard"],
	source : [["T", 111]],
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "90 ft",
    components : "V,S,M\u0192",
    compMaterial : "An ornate stone and metal lockbox worth at least 400 gp",
	duration : "Conc, 1 h",
    description : "Summon choice of Construct Spirit; obeys commands; takes turn after mine; vanishes at 0 hp (400gp)",
	descriptionFull : "You call forth the spirit of a construct. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Construct Spirit stat block. When you cast the spell, choose a material: Clay, Metal, or Stone. The creature resembles a golem or a modron (your choice) made of the chosen material, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.\n   The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, use the higher level wherever the spell's level appears in the stat block."
};
SpellsList["summon elemental"] = {
	name : "Summon Elemental",
	classes : ["druid", "ranger", "wizard"],
	source : [["T", 111]],
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "90 ft",
    components : "V,S,M\u0192",
    compMaterial : "Air, a pebble, ash, and water inside a gold-inlaid vial worth at least 400 gp",
	duration : "Conc, 1 h",
    description : "Summon choice of Elemental Spirit; obeys commands; takes turn after mine; vanishes at 0 hp (400gp)",
	descriptionFull : "You call forth an elemental spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Elemental Spirit stat block. When you cast the spell, choose an element: Air, Earth, Fire, or Water. The creature resembles a bipedal form wreathed in the chosen element, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.\n   The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, use the higher level wherever the spell's level appears in the stat block."
};
SpellsList["summon fey"] = {
	name : "Summon Fey",
	classes : ["druid", "ranger", "warlock", "wizard"],
	source : [["T", 112]],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "90 ft",
    components : "V,S,M\u0192",
    compMaterial : "A gilded flower worth at least 300 gp",
	duration : "Conc, 1 h",
    description : "Summon choice of Fey Spirit; obeys commands; takes turn after mine; disappears at 0 hp (300gp)",
	descriptionFull : "You call forth a fey spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Fey Spirit stat block. When you cast the spell, choose a mood: Fuming, Mirthful, or Tricksy. The creature resembles a fey creature of your choice marked by the chosen mood, which determines one of the traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.\n   The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, use the higher level wherever the spell's level appears in the stat block."
};
SpellsList["summon fiend"] = {
	name : "Summon Fiend",
	classes : ["warlock", "wizard"],
	source : [["T", 112]],
	level : 6,
	school : "Conj",
	time : "1 a",
	range : "90 ft",
    components : "V,S,M\u0192",
    compMaterial : "Humanoid blood inside a ruby vial worth at least 600 gp",
	duration : "Conc, 1 h",
    description : "Summon choice of Fiendish Spirit; obeys commands; takes turn after mine; disappears at 0 hp (500gp)",
	descriptionFull : "You call forth a fiendish spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Fiendish Spirit stat block. When you cast the spell, choose Demon, Devil, or Yugoloth. The creature resembles a fiend of the chosen type, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.\n   The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, use the higher level wherever the spell's level appears in the stat block."
};
SpellsList["summon shadowspawn"] = {
	name : "Summon Shadowspawn",
	classes : ["warlock", "wizard"],
	source : [["T", 113]],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "90 ft",
    components : "V,S,M\u0192",
    compMaterial : "Tears inside a gem worth at least 300 gp",
	duration : "Conc, 1 h",
    description : "Summon choice of Shadow Spirit; obeys commands; takes turn after mine; disappears at 0 hp (300gp)",
	descriptionFull : "You call forth a shadowy spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Shadow Spirit stat block. When you cast the spell, choose an emotion: Fury, Despair, or Fear. The creature resembles a misshapen biped marked by the chosen emotion, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.\n   The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, use the higher level wherever the spell's level appears in the stat block."
};
SpellsList["summon undead"] = {
	name : "Summon Undead",
	classes : ["warlock", "wizard"],
	source : [["T", 114]],
	level : 3,
	school : "Necro",
	time : "1 a",
	range : "90 ft",
    components : "V,S,M\u0192",
    compMaterial : "A gilded skull worth at least 300 gp",
	duration : "Conc, 1 h",
    description : "Summon choice of Undead Spirit; obeys commands; takes turn after mine; disappears at 0 hp (300gp)",
	descriptionFull : "You call forth an undead spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Undead Spirit stat block. When you cast the spell, choose the creature's form: Ghostly, Putrid, or Skeletal. The spirit resembles an undead creature with the chosen form, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.\n   The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, use the higher level wherever the spell's level appears in the stat block."
};
SpellsList["tasha's caustic brew"] = {
    name : "Tasha's Caustic Brew",
    nameAlt : "Caustic Brew",
	classes : ["artificer", "sorcerer", "wizard"],
	source : [["T", 115]],
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "S:30-ft line",
    components : "V,S,M",
    compMaterial : "A bit of rotten food",
	duration : "Conc, 1 min",
	save : "Dex",
    description : "30-ft long 5-ft wide all save or 2d4+2d4/SL Acid dmg at start of turn; action to clean self or adjacent",
	descriptionFull : "A stream of acid emanates from you in a line 30 feet long and 5 feet wide in a direction you choose. Each creature in the line must succeed on a Dexterity saving throw or be covered in acid for the spell's duration or until a creature uses its action to scrape or wash the acid off itself or another creature. A creature covered in the acid takes 2d4 acid damage at start of each of its turns." +
	AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 2d4 for each slot level above 1st."
};
SpellsList["tasha's mind whip"] = {
    name : "Tasha's Mind Whip",
    nameAlt : "Mind Whip",
	regExpSearch : /^(?=.*mind)(?=.*(whip|thrust)).*$/i, // "Mind Thrust" in UA:POR
	classes : ["sorcerer", "wizard"],
	source : [["T", 115], ["UA:POR", 8]],
	level : 2,
	school : "Ench",
	time : "1 a",
	range : "90 ft",
    components : "V",
	duration : "1 rnd",
	save : "Int",
    description : "1+1/SL crea, max 30 ft apart; 3d6 Psychic dmg, no rea, only move, act, or bns; save half, no act limit",
	descriptionFull : "You psychically lash out at one creature you can see within range. The target must make an Intelligence saving throw. On a failed save, the target takes 3d6 psychic damage, and it can't take a reaction until the end of its next turn. Moreover, on its next turn, it must choose whether it gets a move, an action, or a bonus action; it gets only one of the three. On a successful save, the target takes half as much damage and suffers none of the spell's other effects." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd. The creatures must be within 30 feet of each other when you target them."
};
SpellsList["tasha's otherworldly guise"] = {
    name : "Tasha's Otherworldly Guise",
    nameShort : "T's Otherworldly Guise",
    nameAlt : "Otherworldly Guise",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["T", 116]],
	level : 6,
	school : "Trans",
	time : "1 bns",
	range : "Self",
    components : "V,S,M\u0192",
    compMaterial : "An object engraved with a symbol of the Outer Planes, worth at least 500 gp",
	duration : "Conc, 1 min",
    description : "Fire/Poison or Radiant/Necrotic/Charm immune; 40 ft fly; +2 AC; 2 atks; spellcast. abi atks (500gp)",
    descriptionFull : "Uttering an incantation, you draw on the magic of the Lower Planes or Upper Planes (your choice) to transform yourself. You gain the following benefits until the spell ends:" +
	"\n \u2022 You are immune to fire and poison damage (Lower Planes) or radiant and necrotic damage (Upper Planes)." +
	"\n \u2022 You are immune to the poisoned condition (Lower Planes) or the charmed condition (Upper Planes)." +
	"\n \u2022 Spectral wings appear on your back, giving you a flying speed of 40 feet." +
	"\n \u2022 You have a +2 bonus to AC." +
	"\n \u2022 All your weapon attacks are magical, and when you make a weapon attack, you can use your spellcasting ability modifier, instead of Strength or Dexterity, for the attack and damage rolls." +
	"\n \u2022 You can attack twice, instead of once, when you take the Attack action on your turn. You ignore this benefit if you already have a feature, like Extra Attack, that lets you attack more than once when you take the Attack action on your turn."
};
