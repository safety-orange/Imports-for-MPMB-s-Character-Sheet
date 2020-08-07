var iFileName = "ua_20200206_Subclasses-Part-3.js";
RequiredSheetVersion(13);
// This file adds the content from the Unearthed Arcana 2020: Subclasses, Part 3 article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:SP3"] = {
	name : "Unearthed Arcana: Subclasses, Part 3",
	abbreviation : "UA:SP3",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2020/dnd/downloads/UA2020-Subclasses03_0224.pdf",
	date : "2020/02/24"
};

// Add a subclass for the Artificer (but after all other scripts, so that all armor options are present)
RunFunctionAtEnd(function () {
	var artificerSubclassArmorerUA = AddSubClass("artificer", "armorer-ua", {
		regExpSearch : /^(?=.*armou?rer)(?!.*wizard).*$/i,
		subname : "Armorer",
		fullname : "Armorer",
		source : [["UA:SP3", 1]],
		attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
		features : {
			"subclassfeature3" : {
				name : "Tools of the Trade",
				source : [["UA:SP3", 1]],
				minlevel : 3,
				description : " [proficient with heavy armor \u0026 smith's tools]",
				toolProfs : ["Smith's tools"],
				armorProfs : [false, false, true, false],
				spellcastingExtra : ["magic missile", "shield", "mirror image", "shatter", "hypnotic pattern", "lightning bolt", "fire shield", "greater invisibility", "passwall", "wall of force"]
			},
			"subclassfeature3.1" : {
				name : "Power Armor",
				source : [["UA:SP3", 1]],
				minlevel : 3,
				description : desc([
					"As an action, I can use smith's tool to turn a suit of heavy armor into power armor",
					"It continues to be power armor until I doff it, don another armor, or I die",
					"It can't be removed against my will, covers all my limbs, and even replaces missing limbs",
					"I ignore the Strength requirement of power armor and can use it as a spellcasting focus"
				]),
				action : [["action", ""]]
			},
			"subclassfeature3.2" : {
				name : "Armor Model",
				source : [["UA:SP3", 2]],
				minlevel : 3,
				description : desc([
					"When I finish a rest, I can use smith's tools to change the model of my power armor",
					'Use the "Choose Feature" button above to select the model currently in use',
					'Each model has their own integrated weapon and extra features, see the "Notes" page'
				]),
				additional : "also see notes page",
				toNotesPage : [{
					name : "Power Armor Model Features",
					note : desc([
						"I can customize my power armor to the guardian or infiltrator model whenever I finish a short or long rest, provided I have smith’s tools in hand.",
						"Each model includes a special weapon. When I attack with that weapon, I can use my Intelligence modifier, instead of Strength or Dexterity, for the attack and damage rolls."
					]) + "\n\n\u25C6 Guardian Power Armor (Armorer 3, UA:SP3 2)" + desc([
						"\u2022 Thunder Gauntlets: The armored fists of the guardian power armor each count as a simple melee weapon, and each deals 1d8 thunder damage on a hit. A creature hit by the gauntlet has disadvantage on attack rolls against targets other than me until the start of me next turn, as the armor magically emits a distracting pulse when the creature attacks someone else.",
						"\u2022 Defensive Field: As a bonus action, I can gain temporary hit points equal to my artificer level, replacing any temporary hit points I already have. I lose these temporary hit points if I doff the armor."
					]) + "\n\n\u25C6 Infiltrator Power Armor (Armorer 3, UA:SP3 2)" + desc([
						"\u2022 Lightning Launcher: A gemlike node on one of the armored fists or on the chest (my choice) counts as a simple ranged weapon, with a normal range of 90 ft and a long range of 300 ft. It deals 1d6 lightning damage on a hit. Once on each of my turns when I hit a creature with it, I can deal an extra 1d6 lightning damage to that target.",
						"\u2022 Powered Steps: My walking speed increases by 5 feet.",
						"\u2022 Second Skin: The armor's weight is negligible, and it becomes formfitting and wearable under clothing. If the armor normally imposes disadvantage on Dexterity (Stealth) checks, the power armor doesn't."
					])
				}],
				choices : [],
				choiceDependencies : [{
					feature : "subclassfeature15",
					choiceAttribute : true
				}],
				weaponOptions : [{
					regExpSearch : /^(?=.*lightning)(?=.*launcher).*$/i,
					name : "Lightning Launcher",
					source : [["UA:SP3", 2]],
					ability : 4,
					type : "Simple",
					damage : [1, 6, "lightning"],
					range : "90/300 ft",
					description : "Once per turn on hit, +1d6 lightning damage",
					abilitytodamage : true,
					isLightningLauncher : true
				}, {
					regExpSearch : /^(?=.*thunder)(?=.*gauntlet).*$/i,
					name : "Thunder Gauntlets",
					source : [["UA:SP3", 2]],
					ability : 4,
					type : "Simple",
					damage : [1, 8, "thunder"],
					range : "Melee",
					description : "Target hit disadv. on attacks vs. others than me until my next turn starts",
					abilitytodamage : true,
					monkweapon : true
				}],
				// Do this in the parent object, so that it is always visible and people printing the sheet can more easily switch between the two models
				action : [["bonus action", "Defensive Field (Guardian Model)"]]
			},
			"subclassfeature9" : {
				name : "Armor Modifications",
				source : [["UA:SP3", 2]],
				minlevel : 9,
				description : desc([
					"Power armor now counts as armor, boots, bracers, and a weapon for holding infusions",
					"I can infuse two of those after a rest without counting towards the number of items"
				]),
				additional : "+2 infused items, if used on power armor"
			},
			"subclassfeature15" : {
				name : "Perfected Armor",
				source : [["UA:SP3", 2]],
				minlevel : 15,
				description :  desc([
					'My armor gets additional features, based on the model; Use "Choose Features" to select it',
					"The guardian gets the ability to pull a creature closer as a reaction and make an attack",
					"The infiltrator gets an upgrade to its lightning launcher weapon attack"
				]),
				toNotesPage : [{
					popupName : "Perfected Armor: Model Features",
					name : "Guardian Perfected Armor Features",
					note : desc([
						"Tinkering with my armor's energy system leads me to discover a powerful pulling force.",
						"As a reaction when a creature I can see ends its turn within 30 ft of me, I can force the creature to succeed on a Strength saving throw against my spell save DC or be pulled up to 30 ft toward me to an unoccupied space. If I pull the target to space within 5 ft of me, I can make a melee weapon attack against it as part of this reaction.",
						"I can use this reaction a number of times equal to my Intelligence modifier (min 1). I regain all expended uses of it when I finish a long rest."
					]) + "\n\n\u25C6 Infiltrator Perfected Armor Features (Armorer 15, UA:SP3 2)" + desc([
						"Any creature that takes lightning damage from my Lightning Launcher glimmers with light until the start of my next turn.",
						"The glimmering creature sheds dim light in a 5 ft radius, and the next attack roll against it by a creature other than me has advantage. If that attack hits, it deals an extra 1d6 lightning damage."
					]),
					amendTo : "Power Armor Model Features"
				}],
				"guardian" : {
					name : "Perfected Armor: Guardian",
					description : " [Intelligence modifier per long rest]" + desc([
						"As a reaction when a creature I can see ends its turn in 30 ft, I have it make a Str save",
						"If it fails, I pull it up to 30 ft towards me to an empty space",
						"If I pull it within 5 ft, I can make a melee weapon attack vs. it as part of this reaction"
					])
				},
				"infiltrator" : {
					name : "Perfected Armor: Infiltrator",
					description :  desc([
						"Those hit by my lightning launcher shed 5-ft radius dim light until my next turn starts",
						"Also, the next attack roll made by another than me vs. the target has advantage",
						"If that attack hits, it deals an extra 1d6 lightning damage"
					])
				},
				// Do these in the parent object, so that they are always visible and people printing the sheet can more easily switch between the two models
				// Also, the armor model can be changed on a short rest, but the limited feature only resets on a long rest, so shouldn't be removed
				action : [["reaction", "Perfected Armor: Guardian"]],
				extraLimitedFeatures : [{
					name : "Perfected Armor: Guardian",
					usages : "Intelligence modifier per ",
					recovery : "long rest",
					usagescalc : "event.value = Math.max(1, What('Int Mod'));"
				}],
				calcChanges : {
					atkAdd : [
						function (fields, v) {
							if (v.theWea.isLightningLauncher) {
								fields.Description = fields.Description.replace("lightning damage", "damage") + (fields.Description ? '; ' : '') + "+1d6 lightning damage and adv. on next attack vs. target not by me";
							}
						},
						"A target hit by my Lightning Launcher attack will shed dim light in a 5-ft radius, and the next attack roll against it by a creature other than me has advantage. If that attack hits, it deals an extra 1d6 lightning damage."
					]
				}
			}
		}
	});
	var itsFea = ClassSubList[artificerSubclassArmorerUA].features["subclassfeature3.2"];
	var guardianTxt = desc([
		"Both fists are Thunder Gauntlets, simple melee weapons that distract those hit by it",
		"As a bonus action, I can activate a defensive shield to gain my artificer level in temp HP"
	])
	var guardianAdditional = levels.map(function (n) {
		return n + " temp HP; see notes page";
	})
	var infiltratorTxt = desc([
		"+5 ft walking speed; Gemlike node in fist/chest is a ranged weapon, Lightning Launcher",
		"The power armor is formfitting, has negligible weight, and doesn't give disadv. on Stealth"
	])
	for (var armor in ArmourList) {
		var anArm = ArmourList[armor];
		if (anArm.type != "heavy" || anArm.isMagicArmor || !anArm.weight) continue;
		// Add the Guardian variant of the armor
		var gArmName = "Guardian Power " + anArm.name;
		itsFea[gArmName.toLowerCase()] = {
			name : (typePF || anArm.name.length < 16 ? "Armor " : "") + "Model: Guardian " + anArm.name,
			description : guardianTxt,
			source : [["UA:SP3", 2]],
			additional : guardianAdditional,
			armorAdd : gArmName,
			weaponsAdd : ["Thunder Gauntlets"],
			prereqeval : 'testSource("' + armor + '", ArmourList["' + armor + '"], "armorExcl") ? "skip" : true;',
			dependentChoices : "guardian"
		}
		// And now add the Infiltrator variant of the armor
		var iArm = newObj(anArm); iArm.name = "Infiltrator Power " + anArm.name;
		iArm.weight = 0; iArm.stealthdis = false; iArm.strReq = 0;
		if (iArm.regExpSearch.indexOf(".*$/") == -1) {
			iArm.regExpSearch = iArm.regExpSearch.replace(/^/, "infiltrator.*");
		} else {
			iArm.regExpSearch = iArm.regExpSearch.replace(/\.\*\$$/, "(?=.infiltrator).*$");
		};
		itsFea[iArm.name.toLowerCase()] = {
			name : "Armor Model: Infiltrator " + anArm.name,
			description : infiltratorTxt,
			source : [["UA:SP3", 2]],
			speed : { walk : {spd : "+5", enc : "+5" } },
			armorAdd : iArm.name,
			weaponsAdd : ["Lightning Launcher"],
			prereqeval : 'testSource("' + armor + '", ArmourList["' + armor + '"], "armorExcl") ? "skip" : true;',
			armorOptions : [iArm],
			dependentChoices : "infiltrator"
		}
		// Lastly push both choices to the array
		itsFea.choices.push(gArmName, iArm.name);
	}
});

// Add the new Artificer infusions
if (ClassList.artificer && ClassList.artificer.features["infuse item"]) {
	AddFeatureChoice(ClassList.artificer.features["infuse item"], true, "Armor of Magical Strength (prereq: level 10 artificer)", {
		name : "Armor of Magical Strength",
		source : [["UA:SP3", 3]],
		description : desc([
			"The wearer of the armor can use its Int mod instead of its Str mod for Str checks/saves",
			"The armor has 4 charges, regaining 1d4 expended charges daily at dawn",
			"As a reaction when being knocked prone, the wearer can use 1 charge to not be prone"
		]),
		additional : "suit of armor; requires attunement",
		prereqeval : function(v) { return classes.known.artificer.level >= 10; },
		eval : function (lvl, chc) { AddMagicItem("Armor of Magical Strength"); },
		removeeval : function (lvl, chc) {
			var loc = CurrentMagicItems.known.indexOf("armor of magical strength-ua");
			if (loc == -1) return;
			MagicItemClear(loc + 1, true);
		}
	});
	AddFeatureChoice(ClassList.artificer.features["infuse item"], true, "Armor of Tools", {
		name : "Armor of Tools",
		source : [["UA:SP3", 3]],
		description : desc([
			"The armor can have a set of artisan's or thieves' tools integrated into it as an action",
			"The tools remain integrated for 8 hours, or until removed as an action",
			"The wearer can add its Intelligence modifier to checks made with the integrated tools"
		]),
		additional : "suit of armor",
		eval : function (lvl, chc) { AddMagicItem("Armor of Tools"); },
		removeeval : function (lvl, chc) {
			var loc = CurrentMagicItems.known.indexOf("armor of tools-ua");
			if (loc == -1) return;
			MagicItemClear(loc + 1, true);
		}
	});
	AddFeatureChoice(ClassList.artificer.features["infuse item"], true, "Helm of Awareness (prereq: level 10 artificer)", {
		name : "Helm of Awareness",
		source : [["UA:SP3", 3]],
		description : "\n   The wearer has advantage on Initiative rolls and can't be surprised while not incapacitated",
		additional : "helmet; requires attunement",
		prereqeval : function(v) { return classes.known.artificer.level >= 10; },
		eval : function (lvl, chc) { AddMagicItem("Helm of Awareness"); },
		removeeval : function (lvl, chc) {
			var loc = CurrentMagicItems.known.indexOf("helm of awareness-ua");
			if (loc == -1) return;
			MagicItemClear(loc + 1, true);
		}
	});
	AddFeatureChoice(ClassList.artificer.features["infuse item"], true, "Mind Sharpener", {
		name : "Mind Sharpener",
		source : [["UA:SP3", 3]],
		description : "\n   The wearer can use its reaction to ignore a failed Con save to maintain concentration",
		additional : "suit of armor or robes",
		eval : function (lvl, chc) { AddMagicItem("Mind Sharpener"); },
		removeeval : function (lvl, chc) {
			var loc = CurrentMagicItems.known.indexOf("mind sharpener-ua");
			if (loc == -1) return;
			MagicItemClear(loc + 1, true);
		}
	});
	AddFeatureChoice(ClassList.artificer.features["infuse item"], true, "Spell-Refueling Ring (prereq: level 6 artificer)", {
		name : "Spell-Refueling Ring",
		source : [["UA:SP3", 3]],
		description : desc([
			"As an action once per dawn, the wearer of this ring can recover one expended spell slot",
			"The maximum level of the spell slot is equal to the number of magic items it is attuned to"
		]),
		additional : "ring; requires attunement",
		prereqeval : function(v) { return classes.known.artificer.level >= 6; },
		eval : function (lvl, chc) { AddMagicItem("Spell-Refueling Ring"); },
		removeeval : function (lvl, chc) {
			var loc = CurrentMagicItems.known.indexOf("spell-refueling ring-ua");
			if (loc == -1) return;
			MagicItemClear(loc + 1, true);
		}
	});

	// Add some special magic items for these Artificer infusions
	MagicItemsList["armor of magical strength-ua"] = {
		name : "Armor of Magical Strength",
		nameTest : "of Magical Strength",
		source : [["UA:SP3", 3]],
		type : "armor (light, medium, or heavy)",
		description : "This armor has 4 charges and regains 1d4 charges daily at dawn. As a reaction when I would be knocked prone, I can expend 1 charge to not be knocked prone. It allows me to use my Intelligence modifier instead of my Strength modifier when making Strength checks or Strength saves.",
		descriptionFull : "While wearing this armor, a creature can use its Intelligence modifier in place of its Strength modifier when making Strength checks and Strength saving throws.\n   The armor has 4 charges. As a reaction when it would be knocked prone, the wearer can expend 1 charge to not be knocked prone. The armor regains 1d4 expended charges daily at dawn.",
		attunement : true,
		action : [["reaction", ""]],
		chooseGear : {
			type : "armor",
			prefixOrSuffix : "prefix"
		},
		usages : 4,
		recovery : "dawn",
		additional : "regains 1d4",
		addMod : [{
			type : "save", field : "Str", mod : "max(Int-Str|0)",
			text : "While attuned to the Armor of Magical Strength, I can use my Intelligence modifier instead of my Strength modifier for Strength saving throws."
		}, {
			type : "skill", field : "Athletics", mod : "max(Int-Str|0)",
			text : "While attuned to the Armor of Magical Strength, I can use my Intelligence modifier instead of my Strength modifier for Strength checks."
		}]
	};
	MagicItemsList["armor of tools-ua"] = {
		name : "Armor of Tools",
		source : [["UA:SP3", 3]],
		type : "armor (light, medium, or heavy)",
		description : "As an action, I can integrate a set of artisan's or thieves' tools into this magic studded leather armor, which can hold only one set at a time. The tools remain integrated for 8 hours or until I remove them as an action. I can add my Intelligence modifier as a bonus to any ability checks I make with the integrated tools.",
		descriptionFull : "As an action, a creature wearing this infused armor can integrate into it artisan's tools or thieves' tools. The tools remain integrated in the armor for 8 hours or until the wearer removes the tools as an action. The armor can have only one tool integrated at a time.\n   The wearer can add its Intelligence modifier to any ability checks it makes with the integrated tool. The wearer must have a hand free to use the tool.",
		action : [["action", ""]]
	};
	MagicItemsList["helm of awareness-ua"] = {
		name : "Helm of Awareness",
		source : [["UA:SP3", 3]],
		type : "wondrous item",
		description : "While wearing this helmet, I have advantage on initiative rolls. In addition, I can't be surprised, provided I'm not incapacitated.",
		descriptionFull : "While wearing this helmet, a creature has advantage on initiative rolls. In addition, the wearer can't be surprised, provided it isn't incapacitated.",
		attunement : true,
		advantages : [["Initiative", true]],
		savetxt : { immune : ["surprised"] }
	};
	MagicItemsList["mind sharpener-ua"] = {
		name : "Mind Sharpener",
		source : [["UA:SP3", 3]],
		description : "This magic armor or robes can send a jolt to refocus my mind. Whenever I fail a Constitution saving throw to maintain concentration on a spell, I can use my reaction to succeed instead.",
		descriptionFull : "The infused item can send a jolt to the wearer to refocus their mind. While wearing this infused item, whenever the creature fails a Constitution saving throw to maintain concentration on a spell, it can use its reaction to succeed instead.",
		action : [["reaction", ""]],
		choices : ["Mind Sharpener Armor", "Mind Sharpener Robes"],
		"mind sharpener armor" : {
			name : "Mind \u200ASharpener",
			type : "armor (light, medium, or heavy)",
			description : "This magic armor can send a jolt to refocus my mind. Whenever I fail a Constitution saving throw to maintain concentration on a spell, I can use my reaction to succeed instead.",
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
			description : "These magic robes can send a jolt to refocus my mind. Whenever I fail a Constitution saving throw to maintain concentration on a spell, I can use my reaction to succeed instead."
		}
	};
	MagicItemsList["spell-refueling ring-ua"] = {
		name : "Spell-Refueling Ring",
		source : [["UA:SP3", 3]],
		type : "ring",
		description : "As an action, I can activate this magic ring to recover one expended spell slot. The maximum level of the recovered slot is equal to the number of magic items I am attuned to when I activate this ring. Once used, the ring can't be used again until the next dawn.",
		descriptionFull : "While wearing this ring, the creature can recover one expended spell slot as an action. The maximum level of the recovered slot is equal to the number of magic items the wearer is currently attuned to. Once used, the ring can't be used again until the next dawn.",
		attunement : true,
		action : [["action", ""]],
		usages : 1,
		recovery : "dawn"
	};
}

AddSubClass("druid", "circle of the stars-ua", {
	regExpSearch : /^(?=.*(druid|shaman))(?=.*circle)(?=.*stars).*$/i,
	subname : "Circle of the Stars",
	source : [["UA:SP3", 3]],
	features : {
		"subclassfeature2" : {
			name : "Star Map",
			source : [["UA:SP3", 3]],
			minlevel : 2,
			description : desc([
				"I've created a star map, a Tiny object which I can use as my spellcasting focus",
				"If I lose it, I can preform a 1-hour ceremony during a rest to create a replacement",
				"I can use it to cast Augury or Guiding Bolt, even unprepared, without using a spell slot"
			]),
			spellcastingBonus : {
				name : "Star Map",
				spells : ["guiding bolt", "augury"],
				selection : ["guiding bolt", "augury"],
				firstCol : "Sp",
				times: 2
			},
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest"
		},
		"subclassfeature2.1" : {
			name : "Starry Form",
			source : [["UA:SP3", 3]],
			minlevel : 2,
			description : desc([
				"As an action, I can expend a use of wild shape to take on a starry form for 10 minutes",
				"In that form I shed bright light in a 10-ft radius and dim light for an extra 10-ft radius",
				"When I do so, I choose one constellation below to grant me benefits in my starry form:",
				"\u2022 Chalice: When I use a spell slot to cast a healing spell, I also heal a creature in 30 ft",
				"  This can be myself or the original target; I restore 1d8 + half my druid level in HP",
				"\u2022 Archer: As a bonus action, I can make a ranged spell attack to hurl a luminous arrow",
				"  This has a range of 60 ft and deals radiant damage equal to 1d8 + my Wisdom mod",
				"\u2022 Dragon: I can treat a roll below 10 as a 10 for Int/Wis checks and concentration saves"
			]),
			action : [["bonus action", " (Archer Constellation)"]],
			additional : levels.map(function (n) {
				return n < 2 ? "" : "Chalice: heals 1d8+" + Math.floor(n/2) + " HP";
			}),
			weaponOptions : {
				regExpSearch : /^(?=.*luminous)(?=.*arrow).*$/i,
				name : "Luminous Arrow",
				source : [["UA:SP3", 3]],
				ability : 5,
				type : "Spell",
				damage : [1, 8, "radiant"],
				range : "60 ft",
				description : "Use as bonus action",
				abilitytodamage : true
			},
			weaponsAdd : ['Luminous Arrow']
		},
		"subclassfeature6" : {
			name : "Cosmic Omen",
			source : [["UA:SP3", 3]],
			minlevel : 6,
			description : desc([
				"When I finish a long rest, I can roll a die to gain an omen based on the result (odd/even)",
				"As a reaction when a creature I can see in 30 ft makes an attack, check, or save, I can:",
				"\u2022 Weal (even): add 1d6 to the number rolled for the attack, check, or save",
				"\u2022 Woe (odd): subtract 1d6 from the number rolled for the attack, check, or save"
			]),
			action : [["reaction", ""]],
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest"
		},
		"subclassfeature10" : {
			name : "Full of Stars",
			source : [["UA:SP3", 3]],
			minlevel : 10,
			description : "\n   While in my starry form, I have resistance to bludgeoning, piercing, and slashing damage",
			dmgres : [
				["Bludgeoning", "Bludgeon. (in form)"],
				["Piercing", "Piercing (in form)"],
				["Slashing", "Slashing (in form)"]
			],
			extraname : "Circle of the Stars 14",
			"star flare" : {
				name : "Star Flare",
				source : [["UA:SP3", 3]],
				description : desc([
					"As an action, I conjure a 30-ft radius sphere of light on a point within 120 ft I can see",
					"I then teleport each willing creature in that sphere to an empty space within 30 ft of it",
					"Creatures left within the sphere must make a Con save or take 4d10 radiant damage",
					"Those that failed the save are also blinded until the end of my next turn",
					"I can do this once per long rest, or by expending a 5th-level or higher spell slot (SS 5+)"
				]),
				action : [["action", ""]],
				usages : 1,
				recovery : "long rest",
				altResource : "SS 5+"
			},
			autoSelectExtrachoices : [{
				extrachoice : "star flare",
				minlevel : 14
			}]
		},
	}
});

var rangerSubclassFeyWandererUA = AddSubClass("ranger", "fey wanderer-ua", {
	regExpSearch : /^(?=.*fey)(?=.*wanderer).*$/i,
	subname : "Fey Wanderer",
	source : [["UA:SP3", 5]],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	fullname : "Fey Wanderer",
	features : {
		"subclassfeature3" : {
			name : "Fey Wanderer Magic",
			source : [["UA:SP3", 5]],
			minlevel : 3,
			description : "\n   I get bonus spells known, which do not count against the number of spells I can know",
			spellcastingExtra : ["charm person", "misty step", "dispel magic", "banishment", "mislead"].concat(new Array(95)).concat("AddToKnown")
		},
		"subclassfeature3.1" : {
			name : "Cunning Will",
			source : [["UA:SP3", 5]],
			minlevel : 3,
			description : "\n   Adv. on saves vs. charm/frightened; Proficiency in Deception, Performance, or Persuasion",
			skillstxt : "Choose one from: Deception, Performance, or Persuasion",
			savetxt : { adv_vs : ["charmed", "frightened"] }
		},
		"subclassfeature3.2" : {
			name : "Dreadful Strikes",
			source : [["UA:SP3", 5]],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can imbue the weapons I'm holding with magic until my turn ends",
				"They count as magical and deal +1d6 psychic damage, but only once to a single creature",
				"I can also do this as part of the same bonus action as making an off-hand attack"
			]),
			action : [["bonus action", ""]]
		},
		"subclassfeature7" : {
			name : "Blessings of the Courts",
			source : [["UA:SP3", 5]],
			minlevel : 7,
			description : desc([
				"Once per turn when I hit a weapon attack, I can expend a spell slot for extra damage",
				"The target takes +3d6 psychic damage and must make a Wis save or be frightened of me",
				"This lasts until the end of my next turn; In addition, I add my Wis mod to Cha checks"
			]),
			addMod : ["Deception", "Intimidation", "Performance","Persuasion"].map(function(skill){return {type : "skill", field : skill, mod : "Wis", text : "I add my Wisdom modifier to my Charisma checks"};})
		},
		"subclassfeature11" : {
			name : "Beguiling Twist",
			source : [["UA:SP3", 6]],
			minlevel : 11,
			description : desc([
				"As a reaction when a creature I can see in 120 ft succeeds a save vs. charmed/frightened",
				"I can have another I can see in 120 ft make a Wis save or suffer one effect of my choice:",
				" \u2022 For 1 min, it's frightened of me or charmed; It can save again at the end of its turns",
				" \u2022 It takes 3d10 psychic damage"
			]),
			action : [["reaction", ""]],
			extraname : "Fey Wanderer 15",
			"misty presence" : {
				name : "Misty Presence",
				source : [["UA:SP3", 6]],
				description : desc([
					"As a bonus action, I can have a creature I can see within 30 ft make a Wisdom save",
					"On a failed save, it cannot see or hear me for 24 hours or until I use this feature again",
					"The target can repeat its save if I hit it with an attack, force it to save, or deal it damage",
					"On a successful save, the creature is immune to my use of this feature for 7 days",
					"I can do this once per long rest, or by expending a 4th-level or higher spell slot (SS 4+)"
				]),
				action : [["bonus action", ""]],
				usages : 1,
				recovery : "long rest",
				altResource : "SS 4+"
			},
			autoSelectExtrachoices : [{
				extrachoice : "misty presence",
				minlevel : 15
			}]
		}
	}
});
if (ClassList.rangerua) { ClassList.rangerua.subclasses[1].push(rangerSubclassFeyWandererUA); };
