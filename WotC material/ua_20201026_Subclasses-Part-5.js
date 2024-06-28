var iFileName = "ua_20201026_Subclasses-Part-5.js";
RequiredSheetVersion("13.1.14");
// This file adds the content from the Unearthed Arcana 2020: Subclasses, Part 5 article to MPMB's Character Record Sheet
// This file contains contributions by WondrousLittleWizard

// Define the source
SourceList["UA:SP5"] = {
	name : "Unearthed Arcana: Subclasses, Part 5",
	abbreviation : "UA:SP5",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2020/dnd/downloads/UA2020_102620_Subclasses05.pdf",
	date : "2020/10/26"
};

AddSubClass("monk", "ascendant dragon-ua", {
	regExpSearch : /^(?=.*ascendant)(?=.*(dragon|draconic))((?=.*(monk|monastic))|((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior))).*$/i,
	subname : "Way of the Ascendant Dragon",
	source : [["UA:SP5", 1]],
	features : {
		"subclassfeature3" : {
			name : "Draconic Disciple",
			source : [["UA:SP5", 1]],
			minlevel : 3,
			description : desc([
				"I can change the damage type of my unarmed strikes to acid, cold, fire, lightning, poison",
				"As a reaction when I fail an Intimidation or Persuasion check, I can reroll the check",
				"If this turns it into a success, I can't do so again until I finish a long rest; I learn Draconic"
			]),
			languageProfs : ["Draconic"],
			action : [["reaction", " (reroll check)"]],
			usages : 1,
			recovery : "long rest",
			additional : "reroll",
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.baseWeaponName === "unarmed strike") {
							fields.Description += (fields.Description ? '; ' : '') + "Change type to acid/cold/fire/lightning/poison";
						};
					},
					"When I damage a target with an unarmed strike, I can change the damage type to acid, cold, fire, lightning or poison."
				]
			},
			"breath of the dragon" : {
				name : "Breath of the Dragon",
				extraname : "Ascendant Dragon 3",
				source : [["UA:SP5", 1]],
				description : levels.map(function (n) {
					var iMonkDie = n < 5 ? 4 : n < 11 ? 6 : n < 17 ? 8 : 10;;
					var aDesc = [
						"When I take the Attack action on my turn, I can replace one attack with a breath weapon",
						"This deals " + (n < 11 ? 2 : 3) + "d" + iMonkDie + " acid, cold, fire, lightning, or poison (my choice) damage to all in the area",
						"The area can be a 20-ft cone or a 5-ft wide, 30-ft line; Dex save to halve the damage",
						"I can do this my Proficiency Bonus times per long rest, or by expending 1 ki point"
					];
					if (n < 17) return desc(aDesc);
					var aDesc17 = [
						"From 17th-level, the energy clings to those damaged by this, hurting them every turn",
						"At the start of each of their turns, they take 1d" + iMonkDie + " damage of the chosen type",
						"At the end of each of their turns, they can repeat the save to end this effect on themselves"
					];
					return desc(aDesc.concat(aDesc17));
				}),
				usages : "Prof B. per ",
				usagescalc : "event.value = How('Proficiency Bonus');",
				recovery : "long rest",
				altResource : "1 ki",
				additional : levels.map(function (n) {
					return n < 3 ? "" : (n < 11 ? 2 : 3) + "d" + (n < 5 ? 4 : n < 11 ? 6 : n < 17 ? 8 : 10);
				}),
				weaponOptions : [{
					regExpSearch : /^(?=.*breath)(?=.*dragon).*$/i,
					name : "Breath of the Dragon",
					source : [["UA:SP5", 1]],
					ability : 5,
					type : "Natural",
					damage : [2, 4, "My choice"],
					range : "5-ft \xD7 30-ft line",
					description : "All in area; Dex save for half damage; Alt: 20-ft cone; Type: acid/cold/fire/lightning/poison",
					dc : true,
					monkweapon : false,
					abilitytodamage : false,
					UA_WotAD_BreathWeapon : true,
					selectNow : true
				}],
				calcChanges : {
					atkAdd : [
						function (fields, v) {
							if (classes.known.monk && classes.known.monk.level && v.theWea.UA_WotAD_BreathWeapon) {
								var n = classes.known.monk.level;
								var aMonkDie = n < 5 ? 4 : n < 11 ? 6 : n < 17 ? 8 : 10;;
								fields.Damage_Die = (n < 11 ? 2 : 3) + "d" + aMonkDie;
								if (n >= 17) fields.Description += (fields.Description ? '; ' : '') + 'Clings to targets';
							};
						},
						"My Breath of the Dragon deals damage equal to two rolls of my Martials Arts die. At 11th level, this increases to three rolls of my Martial Arts die. At 17th level, the energy clings to the target. At the start of each of a target's turns, it takes damage of the type the breath dealt equal to one roll of my Martial Arts die. At the end of its turn, the creature can repeat the save, ending the effect on itself on a success."
					]
				}
			},
			autoSelectExtrachoices : [{ extrachoice : "breath of the dragon" }]
		},
		"subclassfeature6" : {
			name : "Wings Unfurled",
			source : [["UA:SP5", 2]],
			minlevel : 6,
			description : " [Prof B. / long rest or 1 ki]" + desc([
				"When I use Step of the Wind, I can gain a flying speed equal to my walking speed",
				"I can do this Prof Bonus per long rest, or by using 2 ki points to use Step of the Wind"
			]),
			extraLimitedFeatures : [{
				name : "Wings Unfurled",
				usages : "Proficiency bonus per ",
				recovery : "long rest",
				usagescalc : "event.value = How('Proficiency Bonus');",
				altResource : "1 ki"
			}],
			"aspect of the wyrm" : {
				name : "Aspect of the Wyrm",
				extraname : "Ascendant Dragon 11",
				source : [["UA:SP5", 2]],
				description : levels.map(function (n) {
					var aDesc = [
						"As a bonus action, I can activate a 30 ft aura of draconic power that lasts for 1 minute",
						"I choose acid, cold, fire, lightning, or poison damage when I activate this aura",
						"From 17th-level, all creatures of my choosing in the aura take 4d10 damage of this type",
						"My allies in the aura and myself gain resistance to the chosen damage type",
						"When an attack hits one of us, the one hit can use their reaction to damage the attacker",
						"This damage is of the chosen damage type, equal to one roll of my martial arts",
						"I can activate this aura once per long rest, or by expending 4 ki points"
					];
					if (n < 17) aDesc.splice(2,1);
					return desc(aDesc);
				}),
				usages : 1,
				recovery : "long rest",
				altResource : "4 ki",
				additional : levels.map(function (n) {
					return n < 11 ? "" : "1d" + (n < 17 ? 8 : 10);
				}),
				action : [["bonus action", " (activate)"], ["reaction", " (if active)"]]
			},
			autoSelectExtrachoices : [{
				extrachoice : "aspect of the wyrm",
				minlevel : 11
			}]
		},
		"subclassfeature17" : {
			name : "Ascendant Aspect",
			source : [["UA:SP5", 2]],
			minlevel : 17,
			description : "\n   I gain 30 ft blindsight and both Breath of the Dragon and Aspect of the Wyrm improve",
			vision : [["blindsight", 30]]
		}
	}
});

var UASP5_Ranger_Subclass_Drakewarden = AddSubClass("ranger", "drakewarden-ua", {
	regExpSearch : /^(?=.*(drake|dragon|draconic))(?=.*(warden|ranger|trainer)).*$/i,
	subname : "Drakewarden",
	source : [["UA:SP5", 2]],
	fullname : "Drakewarden",
	features : {
		"subclassfeature3" : {
			name : "Draconic Gift",
			source : [["UA:SP5", 3]],
			minlevel : 3,
			description : desc([
				"I learn the Draconic language and the Thaumaturgy cantrip"
			]),
			languageProfs : ["Draconic"],
			spellcastingBonus : [{
				name : "Draconic Gift",
				spells : ["thaumaturgy"],
				selection : ["thaumaturgy"],
				firstCol : "atwill"
			}]
		},
		"subclassfeature3.1" : {
			name : "Drake Companion",
			source : [["UA:SP5", 3]],
			minlevel : 3,
			description : desc([
				"As an action, I can summon my drake to an empty space within 30 ft that I can see",
				'Select a "Drake Companion" on the companion page for its stats and rules',
				"I can do this once per long rest, or by expending a 1st-level or higher spell slot (SS 1+)"
			]),
			usages : 1,
			recovery : "long rest",
			altResource : "SS 1+",
			action : [["action", " (summon)"], ["bonus action", " (command)"]],
			creaturesAdd : [["Drake Companion", true]],
			creatureOptions : [{
				name : "Drake Companion",
				source : [["UA:SP5", 3]],
				size : 4,
				type : "Dragon",
				alignment : "Unaligned",
				ac : "14+Prof",
				hp : 20,
				hd : [3, 10],
				hdLinked : ["ranger", "rangerua"],
				minlevelLinked : ["ranger", "rangerua"],
				speed : "40 ft",
				scores : [16, 12, 15, 8, 14, 8],
				saves : ["", 3, "", "", 4, ""],
				damage_immunities : "the chosen Draconic Essence damage type",
				senses : "Darkvision 60 ft",
				passivePerception : 12,
				languages : "Draconic",
				challengeRating : "0",
				proficiencyBonus : 2,
				proficiencyBonusLinked : true,
				attacksAction : 1,
				attacks : [{
					name : "Bite",
					ability : 1,
					damage : [1, 6, "piercing"],
					modifiers : ["", "Prof"],
					range : "Melee (5 ft)",
					description : "Only 1d6 is piercing damage, the rest is of the chosen Draconic Essence damage type",
					abilitytodamage : false
				}],
				features : [{
					name : "Warden",
					description : "The drake obeys the commands of its warden and shares its proficiency bonus. It takes its turn immediately after that of its warden, on the same initiative. It can move and take reactions on its own, but only takes the Dodge action on its turn unless its warden takes a bonus action to command it to take another action. If its warden is incapacitated, the drake can take any action, not just Dodge. The drake vanishes after a number of hours equal to its proficiency bonus, when it is reduced to 0 hit points, when its warden summons another drake, or when its warden dies."
				}],
				traits : [{
					name : "Draconic Essence",
					description : "When the drake is summoned, choose a damage type: acid, cold, fire, lightning, or poison."
				}, {
					name : "Infused Strikes",
					description : "As a reaction when another creature within 30 ft of the drake that it can see hits with a weapon attack, the drake can infuse the strike with its essence, causing the attack to deal an extra 1d6 damage of its chosen Draconic Essence damage type"
				}, {
					name : "Bond of Fang and Scale (Drakewarden 7)",
					minlevel : 7,
					description : "When the drake is summoned, it gains either a 40 ft swimming speed and can breathe underwater, or a 40 ft flying speed and has wings. The drake's bite deals an extra 1d6 damage of its chosen Draconic Essence type.",
					addMod : [{ type : "", field : "BlueText.Comp.Use.Attack.1.Damage Die", mod : "1d6", text : "The drake's bite attack deals an extra 1d6 damage of the type chosen for its Draconic Essence." }],
					eval : function(prefix, lvl) {
						var sMoveStr = (typePF ? ",\n" : ", ") + "fly/swim 40 ft";
						if (What("Unit System") === "metric") sMoveStr = ConvertToMetric(sMoveStr, 0.5);
						tDoc.getField(prefix + "Comp.Use.Speed").value += sMoveStr;
					},
					removeeval : function(prefix, lvl) {
						var sMoveStr = (typePF ? ",\n" : ", ") + "fly/swim 40 ft";
						if (What("Unit System") === "metric") sMoveStr = ConvertToMetric(sMoveStr, 0.5);
						Value(prefix + "Comp.Use.Speed", What(prefix + "Comp.Use.Speed").replace(sMoveStr, ""));
					}
				}, {
					name : "Perfected Bond (Drakewarden 15)",
					minlevel : 15,
					description : "The drake's size is now Large and its bite attack deals an extra 1d6 damage (for a total of +2d6) of its chosen Draconic Essence type.",
					addMod : [{ type : "", field : "BlueText.Comp.Use.Attack.1.Damage Die", mod : "1d6", text : "The drake's bite attack deals another extra 1d6 damage (for a total of +2d6) of the type chosen for its Draconic Essence." }],
					eval : function(prefix, lvl) {
						PickDropdown(prefix + "Comp.Desc.Size", 2); // Large
					},
					removeeval : function(prefix, lvl) {
						PickDropdown(prefix + "Comp.Desc.Size", 4); // Small
					}
				}],
				calcChanges : {
					hp : function (totalHD, HDobj, prefix) {
						if (!classes.known.ranger && !classes.known.rangerua) return;
						var rngrLvl = classes.known.ranger ? classes.known.ranger.level : classes.known.rangerua.level;
						var rngrLvlM = 5 * rngrLvl;
						HDobj.alt.push(5 + rngrLvlM);
						HDobj.altStr.push(" = 5 as a base\n + 5 \xD7 " + rngrLvl + " from five times its warden's ranger level (" + rngrLvlM + ")");
					},
					setAltHp : true
				}
			}]
		},
		"subclassfeature7" : {
			name : "Bond of Fang and Scale",
			source : [["UA:SP5", 4]],
			minlevel : 7,
			description : desc([
				"When I summon my drake I can choose for it to have 40 ft flying or swimming speed",
				"If I choose swimming, it also gains the ability to breathe underwater",
				"The drake's bite attack deals an extra 1d6 damage chosen by its Draconic Essense",
				"While it is summoned, I gain resistance to the damage type of its Draconic Essense"
			]),
			dmgres : ["(See Drake)"]
		},
		"subclassfeature11" : {
			name : "Drake's Breath",
			source : [["UA:SP5", 4]],
			minlevel : 11,
			description : desc([
				"As an action, I can cause my drake or myself to exhale a 30-ft cone breath weapon",
				"Its damage type is acid, cold, fire, lightning, or poison; Dex save to halve the damage",
				"I can do this once per long rest, or by expending a 3rd-level or higher spell slot (SS 3+)"
			]),
			additional : levels.map(function (n) {
				return n < 11 ? "" : (n < 15 ? 6 : 8) + "d6 damage";
			}),
			action : [["action", ""]],
			usages : 1,
			recovery : "long rest",
			altResource : "SS 3+",
			weaponOptions : [{
				regExpSearch : /^(?=.*drake)(?=.*breath).*$/i,
				name : "Drake's Breath",
				source : [["UA:SP5", 4]],
				ability : 5,
				type : "Natural",
				damage : [6, 6, "My choice"],
				range : "30-ft cone",
				description : "Hits all in area; Dex save for half damage; Damage type: acid, cold, fire, lightning, or poison",
				abilitytodamage : false,
				dc : true,
				useSpellMod : "ranger",
				DrakewardenDrakeBreath : true,
				selectNow : true
			}],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.theWea.DrakewardenDrakeBreath && (classes.known.rangerua || classes.known.ranger)) {
							var rngrLvl = classes.known.ranger ? classes.known.ranger.level : classes.known.rangerua.level;
							fields.Damage_Die = (rngrLvl < 15 ? 6 : 8) + 'd6';
						};
					},
					"",
					1
				],
				atkCalc : [
					function (fields, v, output) {
						if (v.theWea.DrakewardenDrakeBreath && classes.known.rangerua) {
							v.theWea.useSpellMod = "rangerua";
						}
					}
				]
			}
		},
		"subclassfeature15" : {
			name : "Perfected Bond",
			source : [["UA:SP5", 4]],
			minlevel : 15,
			description : desc([
				"My drake is now Large and its bite deals +1d6 damage chosen by its Draconic Essence",
				"As a reaction when the drake or I take damage while within 30 ft of each other,",
				"I can give myself or the drake resistance to that instance of damage",
			]),
			action : [["reaction", ""]]
		}
	}
});
if (ClassList.rangerua) {
	ClassList.rangerua.subclasses[1].push(UASP5_Ranger_Subclass_Drakewarden);
};
