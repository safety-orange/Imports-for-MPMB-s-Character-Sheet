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
				"As an action, I can use thieves' or a type of artisan's tools to invest magic in a tiny object",
				"I touch a nonmagical tiny object and give it one permanent magical property:",
				" \u2022 Emit light (5-ft radius bright light, equal dim light), an odor, or a nonverbal sound",
				" \u2022 Static visual effect on one of its surfaces; picture, 25 words, shapes, or a mix of those",
				"If I do this for more objects than my Intelligence modifier, the oldest one loses its magic",
				"Only 1 property per object; As an action, I can touch an invested object to end its magic"
			])
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
			})
		},
		"infuse item" : {
			name : "Infuse Item",
			source : ["UA:A2", 5],
			minlevel : 2,
			description : desc([
				"Use the \"Choose Feature\" button above to add Artificer Infusions to the third page",
				"Whenever I gain an artificer level, I can replace an infusion I know with another",
				"When I finish a long rest, I turn nonmagical objects into a magic items using my infusions",
				"I can attune to it immediately; If I infuse too many items, the oldest loses its magic",
				"The infusion lasts until my death + my Int mod in days, but ends if I unlearn the infusion",
				"Each infusion can only be used in one item at a time and only in appropriate items"
			]),
			additional : levels.map(function (n) {
				return n < 2 ? "" : (n < 4 ? 3 : n < 7 ? 4 : n < 11 ? 5 : n < 15 ? 6 : n < 19 ? 7 : 8) + " infusions known; max" + (n < 6 ? 2 : n < 11 ? 3 : n < 16 ? 4 : 5) + " infused items";
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
					"",
					""
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
			description : "\n   " + "I have expertise with all tools I am proficient with",
			skillstxt : "expertise with all tools I am proficient with",
			eval : function () {
				if ((/tool/i).test(What('Too Text'))) {
					Checkbox('Too Exp', true);
				};
			},
			removeeval : function () {
				if ((/tool/i).test(What('Too Text'))) {
					Checkbox('Too Exp', false);
				};
			}
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
				"A creature holding an infused item can use an action to cast the spell, using my ability",
				"The item can produce the spell a number of times equal to twice my Int mod (min 2)"
			])
		},
		"soul of artifice" : {
			name : "Soul of Artifice",
			source : ["UA:A2", 6],
			minlevel : 20,
			description : "\n   " + "I can attune to 6 magic items and gain +1 to all saves per magic item I am attuned to",
			savetxt : {
				text : ["+1 to all saves per attuned magic item"]
			}
		}
	}
};

// Add the new spell
SpellsList["arcane weapon"] = {
	name : "Arcane Weapon",
	source : ["UA:A2", 10],
	classes : ["artificer-ua2"],
	description : "",
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
	description : "",
	descriptionFull : "This magic weapon grants a +1 bonus to attack and damage rolls made with it. While holding it, the wielder can take a bonus action to cause it to shed bright light in a 30-foot radius and dim light for an additional 30 feet. The wielder can extinguish the light as a bonus action.\n   As a reaction immediately after being hit by a melee attack, the wielder can cause the attacker to be blinded until the end of the attacker's next turn, unless the attacker succeeds on a Constitution saving throw against your spell save DC. Once used, this reaction can't be used again until the wielder finishes a short or long rest.",
	attunement : true,
	action : [["bonus action", " (shed light/stop)"], ["reaction", " (after melee hit)"]],
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "suffix",
		descriptionChange : ["replace", "weapon"]
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/thrown/i).test(fields.Description)) {
					v.theWea.isMagicWeapon = true;
					fields.Description += (fields.Description ? '; ' : '') + 'Returns immediately after ranged attack';
				}
			},
			'If I include the word "Radiant" in the name of a weapon, it will be treated as the magic weapon Radiant Weapon. It has +1 to hit and damage and ?????????.'
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.isMeleeWeapon && (/radiant/i).test(v.WeaponText)) {
					output.magic = v.thisWeapon[1] + 1;
				}
			}, ''
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
		var anArtMi = MagicItemsList[artMi[a][0]];
		if (!anArtMi) continue;
		if (artMi[a][2]) {
			anArtMi = {
				name : MagicItemsList[artMi[a][0]][artMi[a][2]].name ? MagicItemsList[artMi[a][0]][artMi[a][2]].name : MagicItemsList[artMi[a][0]].name + " [" + artMi[a][2].capitalize() + "]",
				source : MagicItemsList[artMi[a][0]][artMi[a][2]].source ? MagicItemsList[artMi[a][0]][artMi[a][2]].source : MagicItemsList[artMi[a][0]].source,
				attunement : MagicItemsList[artMi[a][0]][artMi[a][2]].attunement ? MagicItemsList[artMi[a][0]][artMi[a][2]].attunement : MagicItemsList[artMi[a][0]].attunement
			}
		}
		var anArtPre = artMi[a][1] ? artMi[a][1] : false;
		var theI = "Replicate: " + anArtMi.name + (anArtPre ? " (prereq: level " + anArtPre + " artificer)" : "");
		var theILC = theI.toLowerCase();
		theObj[theILC] = {
			name : anArtMi.name,
			description : "",
			source : anArtMi.source,
			eval : function (lvl, chc, aItem = anArtMi.name) {
				AddMagicItem(aItem);
			},
			removeeval : artMi[a][2] ? function (lvl, chc, aItem = artMi[a][0], aItemCh = artMi[a][2]) {
				var loc = CurrentMagicItems.choices.indexOf(aItemCh);
				if (!aItem || !aItemCh || loc == -1) return;
				MagicItemClear(loc + 1, true);
			} : function (lvl, chc, aItem = artMi[a][0]) {
				var loc = CurrentMagicItems.known.indexOf(aItem);
				if (!aItem || loc == -1) return;
				MagicItemClear(loc + 1, true);
			}
		};
		if (anArtMi.attunement) theObj[theILC].additional = "requires attunement";
		if (anArtPre) theObj[theILC].prereqeval = function (v, minLvl = anArtPre) { return classes.known['artificer-ua'].level >= minLvl; };
		theObj.extrachoices.push(theI);
	};
}();
