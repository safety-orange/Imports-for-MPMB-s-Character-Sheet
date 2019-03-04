var iFileName = "ua_20170109_Artificer.js";
RequiredSheetVersion(13);
// This file adds the content from the Unearthed Arcana: Artificer article to MPMB's Character Record Sheet
// WARNING: there are no published multiclassing rules for Artificer; the ones provided here are extrapolated from other classes

// Define the source
SourceList["UA:A"] = {
	name : "Unearthed Arcana: Artificer",
	abbreviation : "UA:A",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2016/dnd/downloads/1_UA_Artificer_20170109.pdf",
	date : "2017/01/09"
};

// Adds a new class, the Artificer, with 2 subclasses
// This code was for a big part contributed by RCanine on ENworld
ClassList['artificer-ua'] = {
	regExpSearch : /^(?=.*artificer)(?!.*wizard).*$/i,
	name : "Artificer",
	source : ["UA:A", 1],
	primaryAbility : "Intelligence",
	abilitySave : 4,
	prereqs : "Intelligence 13",
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5],
	die : 8,
	saves : ["Con", "Int"],
	skillstxt : ["Choose three from Arcana, Deception, History, Investigation, Medicine, Nature, Religion, and Sleight of Hand", "Choose one from Arcana, Deception, History, Investigation, Medicine, Nature, Religion, and Sleight of Hand"],
	toolProfs : {
		primary : [["Thieves' tools", "Dex"], ["Any tool", 2]],
		secondary : [["Any tool", 1]]
	},
	armorProfs : [
		[true, true, false, false]
	],
	weaponProfs : [
		[true, false]
	],
	equipment : "Artificer starting equipment:\n \u2022 A handaxe and a light hammer -or- any two simple weapons;\n \u2022 Scale mail -or- studded leather armor;\n \u2022 A light crossbow and 20 bolts;\n \u2022 A dungeoneer's pack;\n \u2022 Thieves' tools.\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses : ["Artificer Specialism", ["artificer-alchemist", "artificer-gunsmith"]],
	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	spellcastingFactor : 3,
	spellcastingKnown : {
		spells : [0, 0, 3, 4, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 10, 11, 11, 11, 12, 13]
	},
	features : {
		"subclassfeature1" : {
			name : "Artificer Specialist",
			source : ["UA:A", 2],
			minlevel : 1,
			description : desc([
				"Choose an Artificer Specialism and put it in the \"Class\" field on the first page",
				"Choose either Alchemist or Gunsmith"
			])
		},
		"magic item analysis" : {
			name : "Magic Item Analysis",
			source : ["UA:A", 2],
			minlevel : 1,
			description : "\n   " + "I can cast Detect Magic and Identify as rituals without requiring material components",
			spellcastingBonus : [{
				name : "Magic Item Analysis",
				spells : ["detect magic"],
				selection : ["detect magic"],
				firstCol : "(R)"
			}, {
				name : "Magic Item Analysis",
				spells : ["identify"],
				selection : ["identify"],
				firstCol : "(R)"
			}],
			spellChanges : {
				"detect magic" : {
					time : "10 min",
					changes : "I can cast this spell only as a ritual, thus its casting time is 10 minutes longer."
				},
				"identify" : {
					time : "11 min",
					components : "V,S",
					compMaterial : "",
					changes : "I can cast this spell without requiring material components, but only as a ritual, thus its casting time is always 10 minutes longer."
				}
			}
		},
		"tool expertise" : {
			name : "Tool Expertise",
			source : ["UA:A", 3],
			minlevel : 2,
			description : "\n   " + "I have expertise with any tool proficiencies I gain from the artificer class",
			skillstxt : "expertise with any tool proficiencies gained from the artificer class",
			eval : function () {
				if ((/thieve.?s.*tools/i).test(What('Too Text'))) {
					Checkbox('Too Exp', true);
				};
			},
			removeeval : function () {
				if ((/thieve.?s.*tools/i).test(What('Too Text'))) {
					Checkbox('Too Exp', false);
				};
			}
		},
		"wondrous invention" : {
			name : "Wondrous Invention",
			source : ["UA:A", 3],
			minlevel : 2,
			description : "\n   " + "I gain a magic item that I have crafted; Use the \"Choose Feature\" button above",
			additional : levels.map(function (n) {
				return n < 2 ? "" : n < 5 ? "1 item" : (n < 10 ? 2 : n < 15 ? 3 : n < 20 ? 4 : 5) + " items";
			}),
			extraname : "Magic Item",
			extrachoices : []
			//come back to this with the function to make the individual entries
		},
		"spellcasting" : {
			name : "Spellcasting",
			source : ["UA:A", 3],
			minlevel : 3,
			description : desc([
				"I can cast artificer spells that I know, using Intelligence as my spellcasting ability",
				"I can use an arcane focus as a spellcasting focus"
			]),
			additional : levels.map(function (n, idx) {
				return n < 3 ? "" : [0, 0, 3, 4, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 10, 11, 11, 11, 12, 13][idx] + " spells known";
			})
		},
		"infuse magic" : {
			name : "Infuse Magic",
			source : ["UA:A", 4],
			minlevel : 4,
			description : desc([
				"By spending 1 minute, I can infuse one of my artificer spells into a nonmagical item",
				"This expends a spell slot as normal and the spell must have a casting time of 1 action",
				"An item holds max one spell for 8 hours; I can have up to my Int mod of infused items",
				"A creature holding an infused item can use an action to cast the spell, using my ability",
				"The spell's target is the creature activating it or, with area of effect spells, the item"
			])
		},
		"mechanical servant" : {
			name : "Mechanical Servant",
			source : ["UA:A", 4],
			minlevel : 6,
			description : desc([
				"I create a construct that obeys my orders; It acts on its own initiative",
				"I can repair it to 1 HP during a long rest, or build a new one in a week with 1000 gp",
				"As a reaction when I'm attacked in melee, I can have it make a melee attack back"
			])
		},
		"superior attunement" : {
			name : "Superior Attunement",
			source : ["UA:A", 4],
			minlevel : 5,
			description : "",
			additional : levels.map(function (n) {
				return n < 5 ? "" : "attune to " + (n < 15 ? 4 : n < 20 ? 5 : 6) + " magic items instead of 3";
			})
		},
		"soul of artifice" : {
			name : "Soul of Artifice",
			source : ["UA:A", 4],
			minlevel : 20,
			description : "\n   " + "I gain a +1 bonus to all saving throws per magic item I am currently attuned to",
			savetxt : {
				text : ["+1 to all saves per attuned magic item"]
			}
		}
	}
};
// Alchemist subclass for the Artificer
ClassSubList["artificer-alchemist"] = {
	regExpSearch : /^(?=.*artificer)(?=.*alchemist)(?!.*wizard).*$/i,
	subname : "Alchemist",
	source : ["UA:A", 5],
	features : {
		"subclassfeature1" : {
			name : "Alchemist's Satchel",
			source : ["UA:A", 5],
			minlevel : 1,
			description : desc([
				"I craft an Alchemist's Satchel, a magic item with which I can create concoctions",
				"Whenever I reach in, it holds the material for the Alchemical Formula I want to use",
				"If lost, I craft another by spending 8 hours a day for 3 days and 100 gp of materials"
			])
		},
		"subclassfeature1.1" : {
			name : "Alchemy Formulae",
			source : ["UA:A", 5],
			minlevel : 1,
			description : desc([
				"I learn Alchemical Formulae that I can use if I have my Alchemist's Satchel within reach",
				"I learn the Alchemical Acid and Fire formulae, and additional depending on my level",
				"Use the \"Choose Feature\" button above to select additional Alchemical Formulae"
			]),
			additional : levels.map(function (n) {
				if (n < 3) return "1 additional formula";
				if (n < 9) return "2 additional formula";
				if (n < 14) return "3 additional formula";
				if (n < 17) return "4 additional formula";
				return "5 additional formula";
			}),
			extraname : "Alchemical Formula",
			extrachoices : ["Healing Draught", "Smoke Stick", "Swift Step Draught", "Tanglefoot Bag", "Thunderstone"],
			"healing draught" : {
				name : "Healing Draught",
				source : ["UA:A", 5],
				description : desc([
					"As an action, I can take a vial of healing liquid from my satchel, which lasts for 1 hour",
					"Anyone can drink this as an action, healing in doing so, after which the vial disappears",
					"One vial heals a number of d8 equal to half my artificer level (rounded up) in HP",
					"After being healed this way, a creature can't do so again until it finishes a long rest",
					"While a Healing Draught exists, I can't use this formula to create another one"
				]),
				action : ["action", ""],
				additional : levels.map(function (n) {
					return "Heals " + Math.ceil(n / 2) + "d8";
				})
			},
			"smoke stick" : {
				name : "Smoke Stick",
				source : ["UA:A", 5],
				description : desc([
					"As an action, I can take a smoke stick from my satchel and throw it up to 30 ft away",
					"The stick produces smoke in a 10-ft radius around it, blocking vision, incl. darkvision",
					"It disappears after 1 minute; After creating one, I can't create a new one for 1 minute"
				]),
				action : ["action", ""]
			},
			"swift step draught" : {
				name : "Swift Step Draught",
				source : ["UA:A", 5],
				description : desc([
					"As a bonus action, I take a vial of brown liquid from my satchel, which lasts for 1 minute",
					"Any creature can drink this vial as an action, gaining +20 ft speed for 1 minute",
					"After use, the vial disappears; After creating one, I can't create a new one for 1 minute"
				]),
				action : ["bonus action", ""]
			},
			"tanglefoot bag" : {
				name : "Tanglefoot Bag",
				source : ["UA:A", 6],
				description : desc([
					"As an action, I can hurl a bag of black tar to a point on the ground within 30 ft",
					"It bursts and covers the ground with sticky goo in a 5-ft radius, which lasts for 1 min",
					"It is difficult terrain and anyone starting its turn in it has its speed halved for that turn",
					"After creating one, I can't create a new one for 1 minute"
				]),
				action : ["action", ""]
			},
			"thunderstone" : {
				name : "Thunderstone",
				source : ["UA:A", 6],
				description : desc([
					"As an action, I can hurl a crystalline shard at a creature/object/surface within 30 ft",
					"It shatters on impact and any creature within 10 ft must make a Constitution save",
					"If failed, a creature is knocked prone and pushed 10 ft away from the point of impact"
				]),
				action : ["action", ""]
			}
		},
		"subclassfeature1.2" : {
			name : "Formula: Alchemical Acid",
			source : ["UA:A", 5],
			minlevel : 1,
			description : desc([
				"As an action, I can hurl a vial of acid at a creature or object within 30 ft",
				"It shatters on impact and the target must succeed on a Dex save or take acid damage",
				"An object automatically fails its saving throw and takes maximum damage"
			]),
			additional : levels.map(function (n) {
				return Math.ceil(n / 2) + "d6 acid damage";
			}),
			action : ["action", ""],
			weaponOptions : {
				regExpSearch : /^(?=.*alchemical)(?=.*acid).*$/i,
				name : "Alchemical Acid",
				source : ["UA:A", 5],
				list : "artificer",
				ability : 4,
				type : "Artificer",
				damage : [1, 6, "acid"],
				range : "30 ft",
				description : "Dex save, success - no damage; Objects automatically take maximum damage",
				abilitytodamage : false,
				dc : true,
				artAlcAcid : true
			},
			weaponsAdd : ['Alchemical Acid'],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.theWea.artAlcAcid && classes.known.artificer && classes.known.artificer.level) {
							fields.Proficiency = true;
							fields.Damage_Die = Math.ceil(classes.known.artificer.level / 2) + 'd6';
						};
					}, ""]
			}
		},
		"subclassfeature1.3" : {
			name : "Formula: Alchemical Fire",
			source : ["UA:A", 5],
			minlevel : 1,
			description : desc([
				"As an action, I can hurl a vial of volatile liquid at a creature/object/surface within 30 ft",
				"It explodes and all within a 5-ft radius must succeed on a Dex save or take fire damage"
			]),
			additional : levels.map(function (n) {
				return Math.ceil(n / 3) + "d6 fire damage";
			}),
			action : ["action", ""],
			weaponOptions : {
				regExpSearch : /^(?=.*alchemical)(?=.*fire).*$/i,
				name : "Alchemical Fire",
				source : ["UA:A", 5],
				list : "artificer",
				ability : 4,
				type : "Artificer",
				damage : [1, 6, "fire"],
				range : "30 ft",
				description : "Dex save, success - no damage; All creatures within 5-ft of the point of impact have to save",
				abilitytodamage : false,
				dc : true,
				artAlcFire : true
			},
			weaponsAdd : ['Alchemical Fire'],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.theWea.artAlcFire && classes.known.artificer && classes.known.artificer.level) {
							fields.Proficiency = true;
							fields.Damage_Die = Math.ceil(classes.known.artificer.level / 3) + 'd6';
						};
					}, ""]
			}
		}
	}
};
// Gunsmith subclass for the Artificer
ClassSubList["artificer-gunsmith"] = {
	regExpSearch : /^(?=.*artificer)(?=.*gunsmith)(?!.*wizard).*$/i,
	subname : "Gunsmith",
	source : ["UA:A", 6],
	features : {
		"subclassfeature1" : {
			name : "Master Smith",
			source : ["UA:A", 6],
			minlevel : 1,
			description : desc(["I gain proficiency with smith's tools and I learn the mending cantrip"]),
			spellcastingBonus : {
				name : "Master Smith",
				spells : ["mending"],
				selection : ["mending"]
			},
			toolProfs : ["Smith's tools"]
		},
		"subclassfeature1.1" : {
			name : "Thunder Cannon",
			source : ["UA:A", 6],
			minlevel : 1,
			description : desc([
				"I craft a magical firearm, my thunder cannon, with which I am proficient",
				"If lost, I craft another by spending 8 hours a day for 3 days and 100 gp of materials"
			]),
			weaponProfs : [false, false, ["thunder cannon"]],
			action : ["bonus action", " (reload)"],
			weaponOptions : {
				regExpSearch : /^(?!.*(blast|monger|piercing|explosive|round))(?=.*\bthunder)(?=.*cannon\b).*$/i,
				name : "Thunder Cannon",
				source : ["UA:A", 6],
				ability : 2,
				type : "Thunder Cannon",
				damage : [2, 6, "piercing"],
				range : "150/500 ft",
				weight : 12, // made up, based on the weight of real rifles
				description : "Ammunition, loading, two-handed, bonus action to reload",
				abilitytodamage : true,
				ammo : "Arcane Magazine"
			},
			ammoOptions : {
				name : "Arcane Magazine",
				source : ["UA:A", 7],
				weight : 0.2, // based on the weight of renaissance bullets from the DMG
				icon : "Bullets",
				checks : [".Bullet"],
				display : 50,
				invName : "Thunder Cannon Rounds",
				alternatives : [/^((?=.*arcane)(?=.*magazine)|(?=.*thunder)(?=.*cannon)(?=.*rounds)).*$/i]
			},
			weaponsAdd : ['Thunder Cannon']
		},
		"subclassfeature1.2" : {
			name : "Arcane Magazine",
			source : ["UA:A", 6],
			minlevel : 1,
			description : desc([
				"I craft a leather bag that holds my tools, ammunition, and materials for the weapon",
				"I can use it to produce 40 rounds of ammo after a long rest or 10 after a short rest",
				"If lost, I can create a new one as part of a long rest with 25 gp of materials"
			])
		},
		"subclassfeature3" : {
			name : "Thunder Monger",
			source : ["UA:A", 6],
			minlevel : 3,
			description : desc(["As an action, I can make an attack with my thunder cannon that does extra damage"]),
			additional : levels.map(function (n) {
				if (n < 3) return "";
				return "+" + Math.floor((n - 1) / 2) + "d6 thunder damage";
			}),
			action : ["action", ""],
			weaponOptions : {
				regExpSearch : /^(?=.*\bthunder)(?=.*monger\b).*$/i,
				name : "Thunder Cannon (Monger)",
				source : ["UA:A", 6],
				ability : 2,
				type : "Thunder Cannon",
				damage : [2, 6, "piercing"],
				range : "150/500 ft",
				description : "Ammunition, loading, two-handed, bonus action to reload",
				abilitytodamage : true,
				ammo : "Arcane Magazine",
				artTCmonger : true
			},
			weaponsAdd : ['Thunder Cannon (Monger)'],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.theWea.artTCmonger && classes.known.artificer && classes.known.artificer.level > 2) {
							fields.Description += '; +' + Math.floor((classes.known.artificer.level - 1) / 2) + 'd6 thunder damage';
						};
					}, ""]
			}
		},
		"subclassfeature9" : {
			name : "Blast Wave",
			source : ["UA:A", 6],
			minlevel : 9,
			description : desc([
				"As an action, I can make a special attack with my thunder cannon in a 15-ft cone",
				"Creatures in the area must make a Str save or take damage and pushed back 10 ft"
			]),
			additional : levels.map(function (n) {
				return n < 9 ? "" :
				n < 13 ? "2d6 force damage" :
				n < 17 ? "3d6 force damage" :
				"4d6 force damage";
			}),
			action : ["action", ""],
			weaponOptions : {
				regExpSearch : /^(?=.*\bthunder)(?=.*cannon\b)(?=.*\bblast)(?=.*wave\b).*$/i,
				name : "Thunder Cannon (Blast Wave)",
				source : ["UA:A", 6],
				ability : 4,
				type : "Thunder Cannon",
				damage : [2, 6, "force"],
				range : "15-ft cone",
				description : "Ammunition, loading, two-handed, bonus action to reload; Str save or damage and pushed back 10 ft",
				dc : true,
				abilitytodamage : false,
				ammo : "Arcane Magazine",
				artTCblast : true
			},
			weaponsAdd : ['Thunder Cannon (Blast Wave)'],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.theWea.artTCblast && classes.known.artificer && classes.known.artificer.level >= 13) {
							fields.Damage_Die = (classes.known.artificer.level < 17 ? 3 : 4) + 'd6';
						};
					}, ""]
			}
		},
		"subclassfeature14" : {
			name : "Piercing Round",
			source : ["UA:A", 6],
			minlevel : 14,
			description : desc([
				"As an action, I can make a special attack with my thunder cannon in a 30-ft line",
				"Creatures in the 5-ft wide line must make a Dex save or take damage"
			]),
			additional : levels.map(function (n) {
				return n < 14 ? "" :
				n < 19 ? "4d6 lightning damage" :
				"6d6 lightning damage";
			}),
			action : ["action", ""],
			weaponOptions : {
				regExpSearch : /^(?=.*\bthunder)(?=.*cannon\b)(?=.*\bpiercing)(?=.*round\b).*$/i,
				name : "Thunder Cannon (Piercing Round)",
				source : ["UA:A", 6],
				ability : 4,
				type : "Thunder Cannon",
				damage : [4, 6, "lightning"],
				range : "30-ft line",
				description : "Ammunition, loading, two-handed, bonus action to reload; 5 ft wide line; Dex save or damage",
				dc : true,
				abilitytodamage : false,
				ammo : "Arcane Magazine",
				artTCpiercing : true
			},
			weaponsAdd : ['Thunder Cannon (Piercing Round)'],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.theWea.artTCpiercing && classes.known.artificer && classes.known.artificer.level >= 19) {
							fields.Damage_Die = '6d6';
						};
					}, ""]
			}
		},
		"subclassfeature17" : {
			name : "Explosive Round",
			source : ["UA:A", 7],
			minlevel : 17,
			description : desc([
				"As an action, I can make a special exploding attack with my thunder cannon",
				"A 30-ft radius sphere somewhere within range of the thunder cannon is affected",
				"Creatures in the area must make a Dexterity saving throw or take 4d8 fire damage"
			]),
			additional : "4d8 fire damage",
			action : ["action", ""],
			weaponOptions : {
				regExpSearch : /^(?=.*\bthunder)(?=.*cannon\b)(?=.*\bexplosive)(?=.*round\b).*$/i,
				name : "Thunder Cannon (Explosive Round)",
				source : ["UA:A", 7],
				ability : 4,
				type : "Thunder Cannon",
				damage : [4, 8, "fire"],
				range : "500 ft",
				description : "Ammunition, loading, two-handed, bonus action to reload; 30-ft radius sphere; Dex save or damage",
				dc : true,
				abilitytodamage : false,
				ammo : "Arcane Magazine"
			},
			weaponsAdd : ['Thunder Cannon (Explosive Round)']
		}
	}
};

// Create the choices for the wondrous items class feature of the artificer
["Bag of Holding", "Cap of Water Breathing", "Driftglobe", "Goggles of Night", "Sending Stones", "Alchemy Jug (prereq: level 5 artificer)", "Helm of Comprehending Languages (prereq: level 5 artificer)", "Lantern of Revealing (prereq: level 5 artificer)", "Ring of Swimming (prereq: level 5 artificer)", "Robe of Useful Items (prereq: level 5 artificer)", "Rope of Climbing (prereq: level 5 artificer)", "Wand of Magic Detection (prereq: level 5 artificer)", "Wand of Secrets (prereq: level 5 artificer)", "Bag of Beans (prereq: level 10 artificer)", "Chime of Opening (prereq: level 10 artificer)", "Decanter of Endless Water (prereq: level 10 artificer)", "Eyes of Minute Seeing (prereq: level 10 artificer)", "Folding Boat (prereq: level 10 artificer)", "Heward's Handy Haversack (prereq: level 10 artificer)", "Boots of Striding and Springing (prereq: level 15 artificer)", "Bracers of Archery (prereq: level 15 artificer)", "Brooch of Shielding (prereq: level 15 artificer)", "Broom of Flying (prereq: level 15 artificer)", "Hat of Disguise (prereq: level 15 artificer)", "Slippers of Spider Climbing (prereq: level 15 artificer)", "Eyes of the Eagle (prereq: level 20 artificer)", "Gem of Brightness (prereq: level 20 artificer)", "Gloves of Missile Snaring (prereq: level 20 artificer)", "Gloves of Swimming and Climbing (prereq: level 20 artificer)", "Ring of Jumping (prereq: level 20 artificer)", "Ring of Mind Shielding (prereq: level 20 artificer)", "Wings of Flying (prereq: level 20 artificer)"].forEach(function (theI) {
	var theItem = ParseMagicItem(theI)[0];
	if (!theItem) return;
	var aMI = MagicItemsList[theItem];
	var minLevel = Number(theI.replace(/.*level (\d+) artificer.*/, "$1"));
	var theObj = ClassList.artificer.features["wondrous invention"];
	theObj[theI.toLowerCase()] = {
		name : aMI.name,
		description : "",
		source : aMI.source,
		eval : function (lvl, chc) {
			var aMI = MagicItemsList[ParseMagicItem(chc[1])[0]];
			AddMagicItem(aMI.name);
		},
		removeeval : function (lvl, chc) {
			var theItem = ParseMagicItem(chc[0])[0];
			var loc = CurrentMagicItems.known.indexOf(theItem);
			if (!theItem || loc == -1) return;
			MagicItemClear(loc + 1, true);
		},
		prereqeval : isNaN(minLevel) ? "" : "classes.known.artificer.level >= " + minLevel
	};
	theObj.extrachoices.push(theI);
});

// Set the Artificer class spell list
var SetArtificerSpells = function(){
	var artSp = [
		// level 1
		"alarm",
		"cure wounds",
		"disguise self",
		"expeditious retreat",
		"false life",
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
		"invisibility",
		"lesser restoration",
		"levitate",
		"magic weapon",
		"protection from poison",
		"rope trick",
		"see invisibility",
		"spider climb",
		// level 3
		"blink",
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
		"death ward",
		"fabricate",
		"freedom of movement",
		"leomund's secret chest",
		"mordenkainen's faithful hound",
		"mordenkainen's private sanctum",
		"otiluke's resilient sphere",
		"stone shape",
		"stoneskin"
	];
	for (var a = 0; a < artSp.length; a++) {
		var aArtSp = SpellsList[artSp[a]];
		if(aArtSp && aArtSp.classes && aArtSp.classes.indexOf("artificer-ua") === -1) aArtSp.classes.push("artificer-ua");
	};
}();
