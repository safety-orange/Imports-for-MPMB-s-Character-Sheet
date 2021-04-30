var iFileName = "pub_20201117_TCoE.js";
RequiredSheetVersion("13.0.6");
// This file adds the content from Tasha's Cauldron of Everything to MPMB's Character Record Sheet
// This file has contributions from many different people over on the MPMB Discord server

// Define the source
SourceList.T = { 
	name : "Tasha's Cauldron of Everything", 
	abbreviation : "TCoE",
	group : "Primary Sources",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/tashas-cauldron-everything",
	date : "2020/11/17"
};


// >>>>>>>>>>>>>>>>>>>>>>> //
// >>> Artificer Class >>> //
// >>>>>>>>>>>>>>>>>>>>>>> //
// [dupl_start] reprints from Eberron: Rising from the Last War (after 2020 errata)
if (!SourceList["E:RLW"]) {
	ClassList.artificer = {
		regExpSearch : /^(?=.*artificer)(?!.*wizard).*$/i,
		name : "Artificer",
		source : [["E:RLW", 54], ["TCoE", 9]],
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
				source : [["E:RLW", 55], ["TCoE", 11]],
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
				source : [["E:RLW", 55], ["TCoE", 11]],
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
								spellObj.compMaterial = (spellObj.compMaterial ? spellObj.compMaterial + ".\n\nAlso a" : "A") + "lways requires my artificer spellcasting focus: thieves' tools, any set of artisan's tools I'm proficient with, " + (classes.known.artificer.subclass.indexOf("artillerist") !== -1 && classes.known.artificer.level > 4 ? "my arcane firearm, " : "") + "or an item infused by me.";
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
					source : [["E:RLW", 55], ["TCoE", 11]],
					description : "\n   The automation will not add M\u0192 to each artificer spell on the generated spell sheets"
				}
			},
			"infuse item" : {
				name : "Infuse Item",
				source : [["E:RLW", 57], ["TCoE", 12]],
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
					source : [["E:RLW", 62], ["TCoE", 21]],
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
					source : [["E:RLW", 62], ["TCoE", 21]],
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
					source : [["E:RLW", 62], ["TCoE", 21]],
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
					source : [["E:RLW", 62], ["TCoE", 21]],
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
					source : [["E:RLW", 62], ["TCoE", 21]],
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
					source : [["E:RLW", 62], ["TCoE", 21]],
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
						source : [["E:RLW", 62], ["TCoE", 22]],
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
					source : [["E:RLW", 62], ["TCoE", 22]],
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
					source : [["E:RLW", 62], ["TCoE", 22]],
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
					source : [["E:RLW", 63], ["TCoE", 23]],
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
					source : [["E:RLW", 63], ["TCoE", 23]],
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
					source : [["E:RLW", 63], ["TCoE", 23]],
					description : "After being used for a ranged attack, the weapon returns immediately; +1 magical bonus",
					additional : "weapon with the thrown property",
					magicitemsAdd : ["Returning Weapon"]
				}
			},
			"the right tool for the job" : {
				name : "The Right Tool for the Job",
				source : [["E:RLW", 57], ["TCoE", 13]],
				minlevel : 3,
				description : "\n   In 1 hour (during a rest) I can create a set of artisan's tools that last until I do so again",
				additional : "using thieves' or artisan's tools"
			},
			"subclassfeature3" : {
				name : "Artificer Specialist",
				source : [["E:RLW", 57], ["TCoE", 13]],
				minlevel : 3,
				description : desc([
					'Choose a specialism and put it in the "Class" field on the first page',
					"Choose either alchemist, artillerist, or battle smith"
				])
			},
			"tool expertise" : {
				name : "Tool Expertise",
				source : [["E:RLW", 57], ["TCoE", 13]],
				minlevel : 6,
				description : " [expertise with all tools I'm proficient with]",
				skillstxt : "Expertise with all tools I'm proficient with",
				eval : function () { Checkbox('Too Exp', true); },
				removeeval : function () { Checkbox('Too Exp', false); }
			},
			"flash of genius" : {
				name : "Flash of Genius",
				source : [["E:RLW", 57], ["TCoE", 13]],
				minlevel : 7,
				description : "\n   As a reaction when I or another in 30 ft make a check/save, I can add my Int mod to it",
				action : [["reaction", ""]],
				usages : "Intelligence modifier per ",
				usagescalc : "event.value = Math.max(1, What('Int Mod'));",
				recovery : "long rest"
			},
			"magic item adept" : {
				name : "Magic Item Adept",
				source : [["E:RLW", 57], ["TCoE", 13]],
				minlevel : 10,
				description : "\n   It takes me half the normal time and gold to craft common and uncommon magic items",
				additional : levels.map(function (n) {
					return n < 10 ? "" : "attune to " + (n < 14 ? 4 : n < 18 ? 5 : 6) + " magic items";
				})
			},
			"spell-storing item" : {
				name : "Spell-Storing Item",
				source : [["E:RLW", 58], ["TCoE", 13]],
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
				source : [["E:RLW", 58], ["TCoE", 14]],
				minlevel : 14,
				description : " [ignore class/race/spell/level attune require.]"
			},
			"soul of artifice" : {
				name : "Soul of Artifice",
				source : [["E:RLW", 58], ["TCoE", 14]],
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
	
	// Set the Artificer class spell and infusion lists
	RunFunctionAtEnd(function(){
		var artSp = [
			"acid splash",
			"create bonfire",
			"dancing lights",
			"fire bolt",
			"frostbite",
			"guidance",
			"light",
			"mage hand",
			"magic stone",
			"mending",
			"message",
			"poison spray",
			"prestidigitation",
			"ray of frost",
			"resistance",
			"shocking grasp",
			"spare the dying",
			"thorn whip",
			"thunderclap",
			// level 1
			"absorb elements",
			"alarm",
			"catapult",
			"cure wounds",
			"detect magic",
			"disguise self",
			"expeditious retreat",
			"faerie fire",
			"false life",
			"feather fall",
			"grease",
			"identify",
			"jump",
			"longstrider",
			"purify food and drink",
			"sanctuary",
			"snare",
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
			"pyrotechnics",
			"rope trick",
			"see invisibility",
			"skywrite",
			"spider climb",
			"web",
			// level 3
			"blink",
			"catnap",
			"create food and water",
			"dispel magic",
			"elemental weapon",
			"flame arrows",
			"fly",
			"glyph of warding",
			"haste",
			"protection from energy",
			"revivify",
			"tiny servant",
			"water breathing",
			"water walk",
			// level 4
			"arcane eye",
			"elemental bane",
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
			"skill empowerment",
			"transmute rock",
			"wall of stone"
		];
		for (var a = 0; a < artSp.length; a++) {
			var aArtSp = SpellsList[artSp[a]];
			if(aArtSp && aArtSp.classes && aArtSp.classes.indexOf("artificer") === -1) aArtSp.classes.push("artificer");
		};
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
				submenu : "Replicate Magic Item" + (MI1 ? " (prereq: level " + (" "+MI1).slice(-2) + " artificer)" : " (common magic items)")
			};
			theObj.extrachoices.push(theI);
		};
	});
	
	// Add the Alchemist specialism
	AddSubClass("artificer", "alchemist", {
		regExpSearch : /^(?=.*alchemist)(?!.*wizard).*$/i,
		subname : "Alchemist",
		fullname : "Alchemist",
		source : [["E:RLW", 58], ["TCoE", 14]],
		features : {
			"subclassfeature3" : {
				name : "Tools Proficiency",
				source : [["E:RLW", 58], ["TCoE", 14]],
				minlevel : 3,
				description : " [proficient with alchemist's supplies]",
				toolProfs : ["Alchemist's supplies"],
				spellcastingExtra : ["healing word", "ray of sickness", "flaming sphere", "melf's acid arrow", "gaseous form", "mass healing word", "blight", "death ward", "cloudkill", "raise dead"]
			},
			"subclassfeature3.1" : {
				name : "Experimental Elixir",
				source : [["E:RLW", 58], ["TCoE", 14]],
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
				source : [["E:RLW", 58], ["TCoE", 15]],
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
				source : [["E:RLW", 59], ["TCoE", 15]],
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
				source : [["E:RLW", 59], ["TCoE", 15]],
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
		source : [["E:RLW", 59], ["TCoE", 17]],
		features : {
			"subclassfeature3" : {
				name : "Tools Proficiency",
				source : [["E:RLW", 59], ["TCoE", 17]],
				minlevel : 3,
				description : " [proficient with woodcarver's tools]",
				toolProfs : ["Woodcarver's tools"],
				spellcastingExtra : ["shield", "thunderwave", "scorching ray", "shatter", "fireball", "wind wall", "ice storm", "wall of fire", "cone of cold", "wall of force"]
			},
			"subclassfeature3.1" : {
				name : "Eldritch Cannon",
				source : [["E:RLW", 59], ["TCoE", 17]],
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
					source : [["E:RLW", 59], ["TCoE", 17]],
					size : 5,
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
				source : [["E:RLW", 59], ["TCoE", 18]],
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
				source : [["E:RLW", 60], ["TCoE", 18]],
				minlevel : 9,
				description : "\n   My eldritch cannons deal +1d8 damage; As an action, I can detonate a cannon in 60 ft",
				action : [["action", "Eldritch Cannon (detonate)"]]
			},
			"subclassfeature15" : {
				name : "Fortified Position",
				source : [["E:RLW", 60], ["TCoE", 18]],
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
		source : [["E:RLW", 60], ["TCoE", 18]],
		attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
		features : {
			"subclassfeature3" : {
				name : "Battle Ready \u0026 Tool Proficiency",
				source : [["E:RLW", 61], ["TCoE", 19]],
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
				source : [["E:RLW", 61], ["TCoE", 19]],
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
					source : [["E:RLW", 61], ["TCoE", 19]],
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
						description : "The steel defender obeys the commands of its creator and shares its proficiency bonus. It takes its turn immediately after its creator, on the same initiative count. It can move and take reactions on its own, but only takes the Dodge action on its turn unless its creator takes a bonus action to command it to take another action. If its creator is incapacitated, it can take any action, not just Dodge."
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
				source : [["E:RLW", 61], ["TCoE", 20]],
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
				source : [["E:RLW", 61], ["TCoE", 20]],
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
		source : [["E:RLW", 62], ["TCoE", 21], ["UA:A2", 9], ["UA:A3", 12]],
		type : "wondrous item",
		description : "While wearing these boots, I can teleport up to 15 ft as a bonus action to an unoccupied space I can see, as long as I occupied that space at some point during the current turn.",
		descriptionFull : "While wearing these boots, a creature can teleport up to 15 feet as a bonus action to an unoccupied space the creature can see. The creature must have occupied that space at some point during the current turn.",
		attunement : true,
		action : [["bonus action", ""]]
	}
	MagicItemsList["radiant weapon"] = {
		name : "Radiant Weapon",
		nameTest : "Radiant",
		source : [["E:RLW", 62], ["TCoE", 22]],
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
		source : [["E:RLW", 62], ["TCoE", 22], ["UA:A3", 13]],
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
		source : [["E:RLW", 63], ["TCoE", 23]],
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
		source : [["E:RLW", 63], ["TCoE", 23], ["UA:A3", 14], ["UA:A2", 10]],
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
// Add the Armorer specialism (but after all other scripts, so that all armour options are present)
//RunFunctionAtEnd(function () {}); // see UA


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
	])
}, "Optional 7th-level barbarian features");

// Barbarian Subclasses
//AddSubClass("barbarian", "path of the beast", {}); // see UA
//AddSubClass("barbarian", "path of wild magic", {});


// >>>>>>>>>>>>>>>>>>>> //
// >>> Bard Options >>> //
// >>>>>>>>>>>>>>>>>>>> //

// Bard Optional Class Features


// Bard Subclasses
//AddSubClass("bard", "college of creation", {}); // see UA
//AddSubClass("bard", "college of eloquence", {}); // Also in MOoT


// >>>>>>>>>>>>>>>>>>>>>> //
// >>> Cleric Options >>> //
// >>>>>>>>>>>>>>>>>>>>>> //

// Cleric Optional Class Features


// Cleric Subclasses
// [dupl_start] reprints from Guildmasters' Guide to Ravnica
if (!SourceList.G) {
	AddSubClass("cleric", "order domain", {
		regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*order).*$/i,
		subname : "Order Domain",
		source : [["G", 25], ["T", 31]],
		spellcastingExtra : ["command", "heroism", "hold person", "zone of truth", "mass healing word", "slow", "compulsion", "locate creature", "commune", "dominate person"],
		features : {
			"subclassfeature1" : {
				name : "Bonus Proficiency",
				source : [["G", 26], ["T", 32]],
				minlevel : 1,
				description : "\n   " + "I gain proficiency with heavy armor, and either the Intimidation or Persuasion skill",
				armorProfs : [false, false, true, false],
				skillstxt : "Choose one from Intimidation or Persuasion"
			},
			"subclassfeature1.1" : {
				name : "Voice of Authority",
				source : [["G", 26], ["T", 32]],
				minlevel : 1,
				description : desc([
					"Whenever I use a spell slot to cast a spell on an ally, it can use its reaction to attack",
					"The ally makes one weapon attack against a target of my choice that I can see",
					"If the spell targets multiple allies, I can choose which one can make the attack"
				])
			},
			"subclassfeature2" : {
				name : "Channel Divinity: Order's Demand",
				source : [["G", 26], ["T", 32]],
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
				source : [["G", 26], ["T", 32]],
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
				source : [["G", 26], ["T", 32]],
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
				source : [["G", 26], ["T", 32]],
				minlevel : 17,
				description : desc([
					"If I deal my Divine Strike damage to a creature, it is cursed until my next turn starts",
					"The next time it is hit by a weapon attack from my allies, it takes +2d8 psychic damage"
				])
			}
		}
	});
} // dupl_end
//AddSubClass("cleric", "peace domain", {});
//AddSubClass("cleric", "twilight domain", {}); // see UA


// >>>>>>>>>>>>>>>>>>>>> //
// >>> Druid Options >>> //
// >>>>>>>>>>>>>>>>>>>>> //

// Druid Optional Class Features


// Druid Subclasses
// [dupl_start] reprints from Guildmasters' Guide to Ravnica
if (!SourceList.G) {
	AddSubClass("druid", "circle of spores", {
		regExpSearch : /^(?=.*(druid|shaman))(?=.*spores).*$/i,
		subname : "Circle of Spores",
		source : [["G", 26], ["T", 36]],
		features : {
			"subclassfeature2" : {
				name : "Circle Spells",
				source : [["G", 27], ["T", 36]],
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
				source : [["G", 27], ["T", 36]],
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
				source : [["G", 27], ["T", 37]],
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
					atkAdd : [
						function (fields, v) {
							if (v.isMeleeWeapon && !v.isNaturalWeapon && (/\b(spore|symbiotic)\b/i).test(v.WeaponText)) {
								fields.Description += (fields.Description ? '; ' : '') + '+1d6 poison damage';
							};
						},
						"If I include the word 'Spore' or 'Symbiotic' in a melee weapon's name, it gets treated as a weapon that is infused by my Symbiotic Entity feature, adding +1d6 poison damage in the description."
					]
				}
			},
			"subclassfeature6" : {
				name : "Fungal Infestation",
				source : [["G", 27], ["T", 37]],
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
				source : [["G", 27], ["T", 37]],
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
				source : [["G", 27], ["T", 38]],
				minlevel : 14,
				description : desc([
					"I'm immune to being blinded, deafened, frightened, poisoned, and critical hits"
				]),
				savetxt : { immune : ["blinded", "deafened", "frightened", "poisoned", "critical hits (unless incapacitated)"] }
			}
		}
	});
} // dupl_end
// AddSubClass("druid", "circle of stars", {});
// AddSubClass("druid", "circle of wildfire", {}); // see UA


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
		"I can't be the target and it requires me wielding a shield, or a simple or martial weapon"
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
if (ClassSubList["fighter-battle master"]) {
	// Fighter alternative class features and enhancements (only if Battle Master subclass exists)
	AddFightingStyle(["fighter"], "Superior Technique", {
		name : "Superior Technique",
		source : [["T", 41], ["UA:CFV", 5]],
		description : " [1 maneuver; d6, 1\xD7 per short rest]" + desc([
			"I gain one superiority die (d6) that I can expend to fuel a special Maneuver",
			"I can only use one Maneuver per attack; DCs are 8 + Prof B. + Str/Dex mod, my choice",
			'Use the "Choose Feature" button above to add a Maneuver to the third page'
		]),
		eval : function () {
			AddFeature('Combat Superiority ', 1, '(d6)', 'short rest', 'Fighter: Superior Technique Fighting Style', 'bonus');
			DontPrint("Class Features Menu");
		},
		removeeval : function () {
			RemoveFeature('Combat Superiority ', 1);
			if (!MakeClassMenu()) Hide("Class Features Menu");
		}
	});
}
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
	description : "\n   Whenever I gain an ASI from the fighter class, I can change a fighting style or a maneuver",
	prereqeval : function (v) { return classes.known.fighter.level >= 4 ? true : "skip"; }
}, "Optional 4th-level fighter features");

// Fighter Subclasses
// AddSubClass("fighter", "psi warrior", {});
// AddSubClass("fighter", "rune knight", {}); // see UA


// >>>>>>>>>>>>>>>>>>>> //
// >>> Monk Options >>> //
// >>>>>>>>>>>>>>>>>>>> //

// Monk Optional Class Features


// Monk Subclasses
//AddSubClass("monk", "way of mercy", {}); // see UA
//AddSubClass("monk", "way of the astral self", {}); // see UA


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
				spList.extraspells = spList.extraspells.concat(["gentle repose", "prayer of healing", "warding bond", "spirit shroud", "summon celestial"]);
			},
			"This optional class feature expands the spell list of the paladin class."
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
	description : "\n   Whenever I gain an ASI from the paladin class, I can change my paladin fighting style",
	prereqeval : function (v) { return classes.known.paladin.level >= 4 ? true : "skip"; }
}, "Optional 4th-level paladin features");

// Paladin Subclasses
//AddSubClass("paladin", "oath of glory", {}); // Also in MOoT
//AddSubClass("paladin", "oath of the watchers", {}); // see UA


// >>>>>>>>>>>>>>>>>>>>>>> //
// >>> Ranger Options >>> //
// >>>>>>>>>>>>>>>>>>>>>>> //

// Ranger Optional Class Features
var TCoE_Deft_Explorer = {
	name : "Deft Explorer: Canny",
	source : [["T", 56]],
	description : "\n   I learn two languages and gain expertise with one skill I'm proficient with",
	languageProfs : [2],
	skillstxt : "Expertise with one skill I'm proficient with",
	additional : "extra benefits at 6th and 10th level",
	extraTimes : [1],
	extraname : "Canny (select skill for expertise)",
	extrachoices : ["Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight of Hand", "Stealth", "Survival"],
	"acrobatics" : {
		name : "Acrobatics Expertise", description : "",
		source : [["T", 56]],
		prereqeval : function(v) { return v.skillProfs.indexOf("Acrobatics") !== -1; },
		skills : [["Acrobatics", "only"]]
	},
	"animal handling" : {
		name : "Animal Handling Expertise", description : "",
		source : [["T", 56]],
		prereqeval : function(v) { return v.skillProfs.indexOf("Animal Handling") !== -1; },
		skills : [["Animal Handling", "only"]]
	},
	"arcana" : {
		name : "Arcana Expertise", description : "",
		source : [["T", 56]],
		prereqeval : function(v) { return v.skillProfs.indexOf("Arcana") !== -1; },
		skills : [["Arcana", "only"]]
	},
	"athletics" : {
		name : "Athletics Expertise", description : "",
		source : [["T", 56]],
		prereqeval : function(v) { return v.skillProfs.indexOf("Athletics") !== -1; },
		skills : [["Athletics", "only"]]
	},
	"deception" : {
		name : "Deception Expertise", description : "",
		source : [["T", 56]],
		prereqeval : function(v) { return v.skillProfs.indexOf("Deception") !== -1; },
		skills : [["Deception", "only"]]
	},
	"history" : {
		name : "History Expertise", description : "",
		source : [["T", 56]],
		prereqeval : function(v) { return v.skillProfs.indexOf("History") !== -1; },
		skills : [["History", "only"]]
	},
	"insight" : {
		name : "Insight Expertise", description : "",
		source : [["T", 56]],
		prereqeval : function(v) { return v.skillProfs.indexOf("Insight") !== -1; },
		skills : [["Insight", "only"]]
	},
	"intimidation" : {
		name : "Intimidation Expertise", description : "",
		source : [["T", 56]],
		prereqeval : function(v) { return v.skillProfs.indexOf("Intimidation") !== -1; },
		skills : [["Intimidation", "only"]]
	},
	"investigation" : {
		name : "Investigation Expertise", description : "",
		source : [["T", 56]],
		prereqeval : function(v) { return v.skillProfs.indexOf("Investigation") !== -1; },
		skills : [["Investigation", "only"]]
	},
	"medicine" : {
		name : "Medicine Expertise", description : "",
		source : [["T", 56]],
		prereqeval : function(v) { return v.skillProfs.indexOf("Medicine") !== -1; },
		skills : [["Medicine", "only"]]
	},
	"nature" : {
		name : "Nature Expertise", description : "",
		source : [["T", 56]],
		prereqeval : function(v) { return v.skillProfs.indexOf("Nature") !== -1; },
		skills : [["Nature", "only"]]
	},
	"perception" : {
		name : "Perception Expertise", description : "",
		source : [["T", 56]],
		prereqeval : function(v) { return v.skillProfs.indexOf("Perception") !== -1; },
		skills : [["Perception", "only"]]
	},
	"performance" : {
		name : "Performance Expertise", description : "",
		source : [["T", 56]],
		prereqeval : function(v) { return v.skillProfs.indexOf("Performance") !== -1; },
		skills : [["Performance", "only"]]
	},
	"persuasion" : {
		name : "Persuasion Expertise", description : "",
		source : [["T", 56]],
		prereqeval : function(v) { return v.skillProfs.indexOf("Persuasion") !== -1; },
		skills : [["Persuasion", "only"]]
	},
	"religion" : {
		name : "Religion Expertise", description : "",
		source : [["T", 56]],
		prereqeval : function(v) { return v.skillProfs.indexOf("Religion") !== -1; },
		skills : [["Religion", "only"]]
	},
	"sleight of hand" : {
		name : "Sleight of Hand Expertise", description : "",
		source : [["T", 56]],
		prereqeval : function(v) { return v.skillProfs.indexOf("Sleight of Hand") !== -1; },
		skills : [["Sleight of Hand", "only"]]
	},
	"stealth" : {
		name : "Stealth Expertise", description : "",
		source : [["T", 56]],
		prereqeval : function(v) { return v.skillProfs.indexOf("Stealth") !== -1; },
		skills : [["Stealth", "only"]]
	},
	"survival" : {
		name : "Survival Expertise", description : "",
		source : [["T", 56]],
		prereqeval : function(v) { return v.skillProfs.indexOf("Survival") !== -1; },
		skills : [["Survival", "only"]]
	},
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
			"If I include the words 'Favored Enemy' in the name of a weapon, it gets the bonus damage I do against marked favored enemies added to its description."
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
				spList.extraspells = spList.extraspells.concat(["entangle", "searing smite", "aid", "enhance ability", "gust of wind", "magic weapon", "summon beast", "elemental weapon", "meld into stone", "revivify", "summon fey", "dominate beast", "summon elemental", "greater restoration"]);
			},
			"This optional class feature expands the spell list of the ranger class."
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
	description : "\n   Whenever I gain an ASI from the ranger class, I can change my ranger fighting style",
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

// Add the Ranger alternative class features also to the Revised Ranger, if it exists
if (ClassList["rangerua"]) {
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
}

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
//AddSubClass("ranger", "fey wanderer", {}); // see UA
//AddSubClass("ranger", "swarmkeeper", {}); // see UA


// >>>>>>>>>>>>>>>>>>>>> //
// >>> Rogue Options >>> //
// >>>>>>>>>>>>>>>>>>>>> //

// Rogue Optional Class Features


// Rogue Subclasses
//AddSubClass("rogue", "phantom", {});
//AddSubClass("rogue", "soulknife", {}); // see UA


// >>>>>>>>>>>>>>>>>>>>>>>> //
// >>> Sorcerer Options >>> //
// >>>>>>>>>>>>>>>>>>>>>>>> //

// Sorcerer Optional Class Features


// Sorcerer Subclasses
//AddSubClass("sorcerer", "aberrant mind", {}); // see UA
//AddSubClass("sorcerer", "clockwork soul", {}); // see UA


// >>>>>>>>>>>>>>>>>>>>>>> //
// >>> Warlock Options >>> //
// >>>>>>>>>>>>>>>>>>>>>>> //

// Warlock Optional Class Features


// Warlock Subclasses
//AddSubClass("warlock", "the fathomless", {}); // see UA
//AddSubClass("warlock", "the genie", {}); // see UA


// >>>>>>>>>>>>>>>>>>>>>> //
// >>> Wizard Options >>> //
// >>>>>>>>>>>>>>>>>>>>>> //

// Wizard Optional Class Features


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
						"If I include the word 'Bladesong' in the name or description of a melee weapon, it gets my Intelligence modifier added to its Damage."
					]
				}
			}
		}
	});
} // dupl_end
//AddSubClass("wizard", "order of scribes", {});


// >>>>>>>>>>>>>>>>> //
// >>> New Feats >>> //
// >>>>>>>>>>>>>>>>> //


// >>>>>>>>>>>>>>>>>> //
// >>> New Spells >>> //
// >>>>>>>>>>>>>>>>>> //
// [dupl_start] reprint spells from Sword Coast Adventure Guide (after 2020 errata)
if (!SourceList.S || !(/Sword.*Coast.*Adventure.*Guide/i).test(SourceList.S.name)) {
	SpellsList["booming blade"] = {
		name : "Booming Blade",
		classes : ["sorcerer", "warlock", "wizard"],
		source : [["S", 142], ["T", 106]],
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
		classes : ["sorcerer", "warlock", "wizard"],
		source : [["S", 143], ["T", 107]],
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
		classes : ["sorcerer", "warlock", "wizard"],
		source : [["S", 143], ["T", 107]],
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
		classes : ["sorcerer", "warlock", "wizard"],
		source : [["S", 143], ["T", 115]],
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
} // dupl_end