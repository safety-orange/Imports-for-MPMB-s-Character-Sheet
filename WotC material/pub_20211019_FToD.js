var iFileName = "pub_20211019_FToD.js";
RequiredSheetVersion("13.1.1");
// This file adds all the player-material from Fizban's Treasury of Dragons to MPMB's Character Record Sheet

// Define the source
SourceList.FToD = {
	name : "Fizban's Treasury of Dragons",
	abbreviation : "FToD",
	abbreviationSpellsheet : "FD",
	group : "Primary Sources",
	url : "https://dnd.wizards.com/products/treasury-dragons",
	date : "2021/10/19"
};

// Races
var FToD_dragonborns_add = function () { // New dragonborn variants
	var objDragonborns = {
		Chromatic : {
			regExpSearch : /^(?=.*chromatic)(?=.*dragonborn).*$/i,
			source : [["FToD", 10]],
			variants : [["Black", "Acid"], ["Blue", "Lightning"], ["Green", "Poison"], ["Red", "Fire"], ["White", "Cold"]],
			breathWeaponShape : "5-ft by 30-ft line",
			trait : desc([
				">>TYPE<< Breath Weapon: When I take the Attack action on my turn, I can replace one attack with a breath weapon that deals 1d10 >>type<< damage to all in a 5-ft by 30-ft line, Dex save halves (DC 8 + Con mod + Proficiency Bonus). I can do this my Proficiency Bonus per long rest. The damage increases with +1d10 at 5th, 11th, and 17th level.",
				"Chromatic Warding: From 5th level, I can protect myself using my draconic energies. As an action once per long rest, I can become immune to >>type<< damage for 1 minute."
			], "\n \u2022 "),
			features : {
				"chromatic warding" : {
					name: "Chromatic Warding",
					source : [["FToD", 10]],
					minlevel: 5,
					usages: 1,
					recovery: "long rest",
					action : [["action", ""]]
				}
			}
		},
		Gem : {
			regExpSearch : /^(?=.*gem)(?=.*dragonborn).*$/i,
			source : [["FToD", 11]],
			variants : [["Amethyst", "Force"], ["Crystal", "Radiant"], ["Emerald", "Psychic"], ["Sapphire", "Thunder"], ["Topaz", "Necrotic"]],
			breathWeaponShape : "15-ft cone",
			trait : desc([
				">>TYPE<< Breath Weapon: When I take the Attack action on my turn, I can replace one attack with a breath weapon that deals 1d10 >>type<< damage to all in a 15-ft cone, Dex save halves (DC 8 + Con mod + Prof Bonus). I can do this my Prof" + (typePF ? "iciency" : ".") + " Bonus per long rest.",
				"Psionic Mind: " + (typePF ? "I can send telepathic messages to any creature I can see within 30 ft that understands at least one language." : "I can telepathically message a creature with a language I can see in 30 ft."),
				"Gem Flight: From 5th level, I can manifest spectral wings. As a bonus action once per long rest, I can gain, for 1 minute, a flying speed equal to my walking speed and can hover."
			], "\n \u2022 "),
			features : {
				"gem flight" : {
					name: "Gem Flight",
					source : [["FToD", 11]],
					minlevel: 5,
					usages: 1,
					recovery: "long rest",
					action : [["bonus action", ""]]
				}
			}
		},
		Metallic : {
			regExpSearch : /^(?=.*metallic)(?=.*dragonborn).*$/i,
			source : [["FToD", 12]],
			variants : [["Brass", "Fire"], ["Bronze", "Lightning"], ["Copper", "Acid"], ["Gold", "Fire"], ["Silver", "Cold"]],
			breathWeaponShape : "15-ft cone",
			trait : desc([
				">>TYPE<< Breath Weapon: When I take the Attack action on my turn, I can replace one attack with a breath weapon that deals 1d10 >>type<< damage to all in a 15-ft cone, Dex save halves (DC 8 + Con mod + Prof" + (typePF ? "iciency" : ".") + " Bonus). I can do this my Prof" + (typePF ? "iciency" : ".") + " Bonus per long rest.",
				"Metallic Breath Weapon: At 5th level I gain a second breath weapon once per long rest, that works just like the first, but I choose the effect when I use it: Enervating: Con save or incapacitated until my next turn starts. Repulsion: Str save or pushed 20 ft and prone."
			], "\n \u2022 "),
			features : {
				"metallic breath weapon" : {
					name: "Metallic Breath Weapon",
					source : [["FToD", 12]],
					minlevel: 5,
					usages: 1,
					recovery: "long rest",
					weaponsAdd : ["Metallic Breath Weapon"],
					weaponOptions: [{
						regExpSearch : /^(?=.*metallic)(?=.*breath)(?=.*weapon).*$/i,
						name : "Metallic breath weapon",
						source : [["FToD", 12]],
						ability : 3,
						type : 'Natural',
						damage : ['Enervating', '', 'or Repulsion'],
						range : "15-ft cone",
						description : "Repulsion: Str save or pushed 20 ft \u0026 prone; Enervating: Con save or incapacitated till my next turn starts",
						abilitytodamage : false,
						dc : true
					}]
				}
			}
		}
	}
	for (var sDrBrn in objDragonborns) {
		var sDrBrnLC = sDrBrn.toLowerCase();
		var oDrBrn = objDragonborns[sDrBrn];
		RaceList[sDrBrnLC + " dragonborn"] = {
			regExpSearch : oDrBrn.regExpSearch,
			name : sDrBrn + " Dragonborn",
			sortname : "Dragonborn, " + sDrBrn,
			source : oDrBrn.source,
			plural : sDrBrn + " Dragonborn",
			size : 3,
			speed : {
				walk : { spd : 30, enc : 20 }
			},
			weaponsAdd : ["Breath Weapon"],
			weaponOptions: [{
				regExpSearch : /^(?=.*breath)(?=.*weapon).*$/i,
				name : "Breath weapon",
				source : oDrBrn.source,
				ability : 3,
				type : 'Natural',
				damage : ['C', 10, 'fire'],
				range : oDrBrn.breathWeaponShape.replace('by', '\xD7'),
				description : "Hits all in area; Dex save, success - half damage",
				abilitytodamage : false,
				dc : true,
				dbBreathWeapon : true
			}],
			age : " reach adulthood by 15 and live around 80 years",
			height : " stand well over 6 feet tall (5'6\" + 2d8\")",
			weight : " weigh around 240 lb (175 + 2d8 \xD7 2d6 lb)",
			heightMetric : " stand well over 1,8 metres tall (170 + 5d8 cm)",
			weightMetric : " weigh around 110 kg (80 + 5d8 \xD7 4d6 / 10 kg)",
			scoresGeneric : true,
			trait : sDrBrn + " Dragonborn"+
				"\n \u2022 " + sDrBrn + ' Ancestry: Choose a type of dragon using the "Racial Options" button. The damage type of my resistance and my breath weapon are determined by the dragon type chosen.'+
				+ oDrBrn.trait.replace(/>>type<< /ig, ""),
			features : {
				"breath weapon" : {
					name : "Breath Weapon",
					minlevel : 1,
					usages : "Proficiency Bonus per ",
					usagescalc : "event.value = How('Proficiency Bonus');",
					recovery : "long rest",
					additional : levels.map(function (n) {
						return (n < 5 ? 1 : n < 11 ? 2 : n < 17 ? 3 : 4) + 'd10';
					}),
					calcChanges : {
						atkAdd : [
							function (fields, v) {
								if (v.theWea.dbBreathWeapon && (/dragonborn/i).test(CurrentRace.known) && CurrentRace.variant) {
									fields.Damage_Type = CurrentRace.dmgres[0];
								}
							},
							'',
							1
						]
					}
				}
			},
			variants : []
		};
		if (oDrBrn.features) {
			for (var sFea in oDrBrn.features) {
				RaceList[sDrBrnLC + " dragonborn"].features[sFea] = oDrBrn.features[sFea];
			}
		}
		for (var i = 0; i < oDrBrn.variants.length; i++) {
			var sDrBrnVar = oDrBrn.variants[i][0];
			var sDrBrnDmg = oDrBrn.variants[i][1];
			AddRacialVariant(sDrBrnLC + " dragonborn", sDrBrnVar.toLowerCase(), {
				regExpSearch : RegExp(sDrBrnVar, "i"),
				name : sDrBrnVar + " " + sDrBrnLC + " dragonborn",
				trait : sDrBrnVar + " " + sDrBrnLC + " dragonborn"+
					oDrBrn.trait.replace(/>>TYPE<</g, sDrBrnDmg).replace(/>>type<</g, sDrBrnDmg.toLowerCase()),
				dmgres : [sDrBrnDmg]
			});
		}
	}
}();

// Subclasses
AddSubClass("monk", "ascendant dragon", {
	regExpSearch : /^(?=.*ascendant)(?=.*(dragon|draconic))((?=.*(monk|monastic))|((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior))).*$/i,
	subname : "Way of the Ascendant Dragon",
	source : [["FToD", 13]],
	features : {
		"subclassfeature3" : {
			name : "Draconic Disciple",
			source : [["FToD", 13]],
			minlevel : 3,
			description : desc([
				"I learn to speak, read, and write Draconic or one other language of my choice",
				"I can change the damage type of my unarmed strikes to acid, cold, fire, lightning, poison",
				"As a reaction when I fail an Intimidation or Persuasion check, I can reroll the check",
				"If this reroll turns the check into a success, I can't do so again until I finish a long rest"
			]),
			languageProfs : [["Draconic or other", 1]],
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
				source : [["FToD", 13]],
				description : levels.map(function (n) {
					var iMonkDie = n < 5 ? 4 : n < 11 ? 6 : n < 17 ? 8 : 10;;
					var aDesc = [
						"When I take the Attack action on my turn, I can replace one attack with a breath weapon",
						"This deals " + (n < 11 ? 2 : 3) + "d" + iMonkDie + " acid, cold, fire, lightning, or poison (my choice) damage to all in the area",
						"The area can be a 20-ft cone or a 5-ft wide, 30-ft line; Dex save to halve the damage",
						"I can do this my Proficiency Bonus times per long rest, or by expending 2 ki points"
					];
					if (n < 17) return desc(aDesc);
					var aDesc17 = [
						"From 17th-level, I can expend 1 (extra) ki point when I use this feature to augment it",
						"The damage increases to 4d" + iMonkDie + " and the area to a 60-ft cone or a 5-ft wide, 90-ft line"
					];
					return desc(aDesc.concat(aDesc17));
				}),
				usages : "Prof B. per ",
				usagescalc : "event.value = How('Proficiency Bonus');",
				recovery : "long rest",
				altResource : "2 ki",
				additional : levels.map(function (n) {
					return n < 3 ? "" : (n < 11 ? 2 : 3) + "d" + (n < 5 ? 4 : n < 11 ? 6 : n < 17 ? 8 : 10);
				}),
				weaponsAdd : ["Breath of the Dragon"],
				weaponOptions : {
					regExpSearch : /^(?=.*breath)(?=.*dragon).*$/i,
					name : "Breath of the Dragon",
					source : [["FToD", 13]],
					ability : 5,
					type : "Natural",
					damage : [2, 4, "My choice"],
					range : "5-ft \xD7 30-ft line",
					description : "All in area; Dex save for half damage; Alt: 20-ft cone; Type: acid/cold/fire/lightning/poison",
					dc : true,
					monkweapon : false,
					abilitytodamage : false,
					WotAD_BreathWeapon : true
				},
				calcChanges : {
					atkAdd : [
						function (fields, v) {
							if (classes.known.monk && classes.known.monk.level && v.theWea.WotAD_BreathWeapon) {
								var n = classes.known.monk.level;
								var aMonkDie = n < 5 ? 4 : n < 11 ? 6 : n < 17 ? 8 : 10;;
								fields.Damage_Die = (v.theWea.WotAD_BreathWeaponAugmented ? 4 : n < 11 ? 2 : 3) + "d" + aMonkDie;
							};
						},
						"My Breath of the Dragon deals damage equal to two rolls of my Martials Arts die. At 11th level, this increases to three rolls of my Martial Arts die. At 17th level, I can expend 1 ki point to augment the breath to increase the damage to four rolls of my Martial Arts die."
					]
				}
			},
			autoSelectExtrachoices : [{ extrachoice : "breath of the dragon" }]
		},
		"subclassfeature6" : {
			name : "Wings Unfurled",
			source : [["FToD", 13]],
			minlevel : 6,
			description : desc([
				"When I use Step of the Wind, I can gain a flying speed equal to my walking speed"
			]),
			usages : "Prof Bonus per ",
			recovery : "long rest",
			usagescalc : "event.value = How('Proficiency Bonus');",
			"aspect of the wyrm" : {
				name : "Aspect of the Wyrm",
				extraname : "Ascendant Dragon 11",
				source : [["FToD", 13]],
				description : levels.map(function (n) {
					var aDesc = [
						"As a bonus action, I can activate a 10 ft aura for 1 minute that grants me one benefit:",
						" \u2022 My allies in the aura and I gain resistance to acid, cold, fire, lightning, or poison damage",
						" \u2022 When I create this aura and as a bonus action while it is active, I can frighten a creature",
						"      One creature must make a Wisdom save or become frightened of me for 1 minute",
						"      It can repeat the save at the end of each of its turns, ending the effect on a success",
						"I can activate this aura once per long rest, or by expending 3 ki points"
					];
					if (n < 17) return desc(aDesc);
					var aDesc17 = [
						"From 17th-level, when I active this, I can choose any creatures I can see in the aura",
						"Each must then make a Dex save or take 3d10 acid, cold, fire, lightning, or poison damage"
					];
					return desc(aDesc.concat(aDesc17));
				}),
				usages : 1,
				recovery : "long rest",
				altResource : "3 ki",
				action : [["bonus action", ""]]
			},
			autoSelectExtrachoices : [{
				extrachoice : "aspect of the wyrm",
				minlevel : 11
			}]
		},
		"subclassfeature17" : {
			name : "Ascendant Aspect",
			source : [["FToD", 13]],
			minlevel : 17,
			description : "\n   I gain 10 ft blindsight and both Breath of the Dragon and Aspect of the Wyrm improve",
			vision : [["blindsight", 10]],
			weaponsAdd : ["Breath of the Dragon (Augmented)"],
			weaponOptions : {
				regExpSearch : /^(?=.*breath)(?=.*dragon)(?=.*augment).*$/i,
				name : "Breath of the Dragon (Augmented)",
				source : [["FToD", 13]],
				ability : 5,
				type : "Natural",
				damage : [4, 10, "My choice"],
				range : "5-ft \xD7 90-ft line",
				description : "[1 ki] All in area; Dex save for half damage; Alt: 60-ft cone; Type: acid/cold/fire/lightning/poison",
				dc : true,
				monkweapon : false,
				abilitytodamage : false,
				WotAD_BreathWeapon : true,
				WotAD_BreathWeaponAugmented : true
			}
		}
	}
});
var FToD_Ranger_Subclass_Drakewarden = AddSubClass("ranger", "drakewarden", {
	regExpSearch : /^(?=.*(drake|dragon|draconic))(?=.*(warden|ranger|trainer)).*$/i,
	subname : "Drakewarden",
	source : [["FToD", 15]],
	fullname : "Drakewarden",
	features : {
		"subclassfeature3" : {
			name : "Draconic Gift",
			source : [["FToD", 15]],
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
			source : [["FToD", 15]],
			minlevel : 3,
			description : desc([
				"As an action, I can summon my drake to appear in an empty space within 30 ft",
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
				source : [["FToD", 15]],
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
				senses : "Darkvision 40 ft",
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
					description : "", //+1d6 damage of the chosen Draconic Essense type
					abilitytodamage : false
				}],
				features : [{
					name : "Warden",
					description : "The drake obeys the commands of its warden and shares its proficiency bonus. It takes its turn immediately after that of its warden, on the same initiative. It can move and take reactions on its own, but only takes the Dodge action on its turn unless its warden takes a bonus action to command it to take another action. If its warden is incapacitated, the drake can take any action, not just Dodge. The drake vanishes when it is reduced to 0 hit points, when its warden summons another drake, or when its warden dies."
				}],
				traits : [{
					name : "Draconic Essence",
					description : "Chosen when summoned: acid, cold, fire, lightning, or poison damage."
				}, {
					name : "Infused Strikes",
					description : "As a reaction when another creature within 30 ft of the drake that it can see hits with a weapon attack, the drake can infuse the strike with its essence, causing the attack to deal an extra 1d6 damage of its chosen Draconic Essence damage type"
				}, {
					name : "Bond of Fang and Scale (Drakewarden 7)",
					minlevel : 7,
					description : "The drake is now Medium and can be ridden as a mount. When it is summoned, it gains either a 40 ft swimming speed and can breathe underwater, or a 40 ft flying speed and has wings, but can't fly with a rider on its back. The drake's bite deals an extra 1d6 damage of its chosen Draconic Essence type.",
					eval : function(prefix, lvl) {
						var sMoveStr = (typePF ? ",\n" : ", ") + "fly/swim 40 ft";
						if (What("Unit System") === "metric") sMoveStr = ConvertToMetric(sMoveStr, 0.5);
						tDoc.getField(prefix + "Comp.Use.Speed").value += sMoveStr;
						AddString(prefix + "Comp.Use.Attack.1.Description", "+1d6 damage of the chosen Draconic Essense type");
						PickDropdown(prefix + "Comp.Desc.Size", 3); // Medium
					},
					removeeval : function(prefix, lvl) {
						var sMoveStr = (typePF ? ",\n" : ", ") + "fly/swim 40 ft";
						if (What("Unit System") === "metric") sMoveStr = ConvertToMetric(sMoveStr, 0.5);
						Value(prefix + "Comp.Use.Speed", What(prefix + "Comp.Use.Speed").replace(sMoveStr, ""));
						var sAtkFld = prefix + "Comp.Use.Attack.1.Description";
						Value(sAtkFld, What(sAtkFld).replace(/\+\d+d6 damage of the chosen Draconic Essense type/i, ''));
						PickDropdown(prefix + "Comp.Desc.Size", 4); // Small
					}
				}, {
					name : "Perfected Bond (Drakewarden 15)",
					minlevel : 15,
					description : "The drake is now Large and its bite attack deals an extra 1d6 damage (for a total of +2d6) of its chosen Draconic Essence type.",
					eval : function(prefix, lvl) {
						var sAtkFld = prefix + "Comp.Use.Attack.1.Description";
						Value(sAtkFld, What(sAtkFld).replace(/\+\d+d6 damage of the chosen Draconic Essense type/i, '+2d6 damage of the chosen Draconic Essense type'));
						PickDropdown(prefix + "Comp.Desc.Size", 2); // Large
					},
					removeeval : function(prefix, lvl) {
						var sAtkFld = prefix + "Comp.Use.Attack.1.Description";
						Value(sAtkFld, What(sAtkFld).replace(/\+\d+d6 damage of the chosen Draconic Essense type/i, '+1d6 damage of the chosen Draconic Essense type'));
						PickDropdown(prefix + "Comp.Desc.Size", 3); // Medium
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
			source : [["FToD", 15]],
			minlevel : 7,
			description : desc([
				"My drake is now Medium, can serve as a mount, and has either 40 ft fly or swim speed",
				"If I choose swimming, it can also breathe underwater; It can't fly with a rider on its back",
				"The drake's bite attack deals an extra 1d6 damage chosen by its Draconic Essense",
				"While it is summoned, I gain resistance to the damage type of its Draconic Essense"
			]),
			dmgres : ["(See Drake)"]
		},
		"subclassfeature11" : {
			name : "Drake's Breath",
			source : [["FToD", 15]],
			minlevel : 11,
			description : desc([
				"As an action, I can cause my drake or myself to exhale a 30-ft cone breath weapon",
				"Its damage type is acid, cold, fire, lightning, or poison; Dex save to halve the damage",
				"I can do this once per long rest, or by expending a 3rd-level or higher spell slot (SS 3+)"
			]),
			additional : levels.map(function (n) {
				return n < 11 ? "" : (n < 15 ? 8 : 10) + "d6 damage";
			}),
			action : [["action", ""]],
			usages : 1,
			recovery : "long rest",
			altResource : "SS 3+",
			weaponsAdd : ["Drake's Breath"],
			weaponOptions : {
				regExpSearch : /^(?=.*drake)(?=.*breath).*$/i,
				name : "Drake's Breath",
				source : [["FToD", 15]],
				ability : 5,
				type : "Natural",
				damage : [8, 6, "My choice"],
				range : "30-ft cone",
				description : "Hits all in area; Dex save for half damage; Damage type: acid, cold, fire, lightning, or poison",
				abilitytodamage : false,
				dc : true,
				useSpellMod : "ranger",
				DrakewardenDrakeBreath : true
			},
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.theWea.DrakewardenDrakeBreath && (classes.known.rangerua || classes.known.ranger)) {
							var rngrLvl = classes.known.ranger ? classes.known.ranger.level : classes.known.rangerua.level;
							fields.Damage_Die = (rngrLvl < 15 ? 8 : 10) + 'd6';
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
			source : [["FToD", 15]],
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
// Add the subclass to the revised ranger as well, if it exists
if (ClassList.rangerua) {
	ClassList.rangerua.subclasses[1].push(FToD_Ranger_Subclass_Drakewarden);
};

// Feats
FeatsList["gift of the chromatic dragon"] = {
	name : "Gift of the Chromatic Dragon",
	source : [["FToD", 17], ["UA:DO", 4]],
	descriptionFull : "You've manifested some of the power of chromatic dragons, granting you the following benefits:"+
	"\n   " + toUni("Chromatic Infusion") + ". As a bonus action, you can touch a simple or martial weapon and infuse it with one of the following damage types: acid, cold, fire, lightning, or poison. For the next minute, the weapon deals an extra 1d4 damage of the chosen type when it hits. After you use this bonus action, you can't do so again until you finish a long rest."+
	"\n   " + toUni("Reactive Resistance") + ". When you take acid, cold, fire, lightning, or poison damage, you can use your reaction to give yourself resistance to that instance of damage. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	description : "As a bonus action once per long rest, I can touch a simple or martial weapon and infuse it to deal +1d4 acid, cold, fire, poison, or lightning damage for 1 minute. As a reaction when I take acid, cold, fire, lightning, or poison damage, I can gain resistance to that damage instance. I can do this my Prof Bonus per long rest.",
	action : [
		["bonus action", "Chromatic Gift (Chromatic Infusion)"],
		["reaction", "Chromatic Gift (Reactive Resistance)"]
	],
	extraLimitedFeatures : [{
		name : "Chromatic Gift (Chromatic Infusion)",
		usages : 1,
		recovery : "long rest"
	}, {
		name : "Chromatic Gift (Reactive Resistance)",
		usages : "Proficiency Bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest"
	}]
};
FeatsList["gift of the gem dragon"] = {
	name : "Gift of the Gem Dragon",
	source : [["FToD", 17], ["UA:DO", 5]],
	descriptionFull : "You've manifested some of the power of gem dragons, granting you the following benefits:"+
	"\n   " + toUni("Ability Score Increase") + ". Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20."+
	"\n   " + toUni("Telekinetic Reprisal") + ". When you take damage from a creature that is within 10 feet of you, you can use your reaction to emanate telekinetic energy. The creature that dealt damage to you must make a Strength saving throw (DC equals 8 + your proficiency bonus + the ability modifier of the score increased by this feat). On a failed save, the creature takes 2d8 force damage and is pushed up to 10 feet away from you. On a successful save, the creature takes half as much damage and isn't pushed. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	description : "As a reaction when I take damage from a creature that is within 10 ft, I can have it take 2d8 force damage and push it up to 10 ft away. If it succeeds on a Str save (DC 8 + Prof Bonus + chosen ability score modifier), it halves the damage and isn't pushed. I can do this my Prof Bonus per long rest. [+1 Int, Wis or Cha]",
	action : [["reaction", ""]],
	usages : "Proficiency Bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus');",
	recovery : "long rest",
	choices : ["Intelligence", "Wisdom", "Charisma"],
	"intelligence" : {
		calculate : "event.value = 'As a reaction when I take damage from a creature that is within 10 ft of me, I can have it take 2d8 force damage and push it up to 10 ft away from me. If it succeeds a Strength save DC ' + (8 + Number(How('Proficiency Bonus')) + Number(What('Int Mod'))) + ' (8 + Prof Bonus + Int mod), it halves the damage and isn't pushed. I can do this my Proficiency Bonus per long rest. [+1 Intelligence]';",
		scores : [0, 0, 0, 1, 0, 0]
	},
	"wisdom" : {
		calculate : "event.value = 'As a reaction when I take damage from a creature that is within 10 ft of me, I can have it take 2d8 force damage and push it up to 10 ft away from me. If it succeeds a Strength save DC ' + (8 + Number(How('Proficiency Bonus')) + Number(What('Wis Mod'))) + ' (8 + Prof Bonus + Wis mod), it halves the damage and isn't pushed. I can do this my Proficiency Bonus per long rest. [+1 Wisdom]';",
		scores : [0, 0, 0, 0, 1, 0]
	},
	"charisma" : {
		calculate : "event.value = 'As a reaction when I take damage from a creature that is within 10 ft of me, I can have it take 2d8 force damage and push it up to 10 ft away from me. If it succeeds a Strength save DC ' + (8 + Number(How('Proficiency Bonus')) + Number(What('Cha Mod'))) + ' (8 + Prof Bonus + Cha mod), it halves the damage and isn't pushed. I can do this my Proficiency Bonus per long rest. [+1 Charisma]';",
		scores : [0, 0, 0, 0, 0, 1]
	}
};
FeatsList["gift of the metallic dragon"] = {
	name : "Gift of the Metallic Dragon",
	source : [["FToD", 17]],
	descriptionFull : "You've manifested some of the power of metallic dragons, granting you the following benefits:"+
	"\n   " + toUni("Draconic Healing") + ". You learn the cure wounds spell. You can cast this spell without expending a spell slot. Once you cast this spell in this way, you can't do so again until you finish a long rest. You can also cast this spell using spell slots you have. The spell's spellcasting ability is Intelligence, Wisdom, or Charisma when you cast it with this feat (choose when you gain the feat)."+
	"\n   " + toUni("Protective Wings") + ". You can manifest protective wings that can shield you or others. When you or another creature you can see within 5 feet of you is hit by an attack roll, you can use your reaction to manifest spectral wings from your back for a moment. You grant a bonus to the target's AC equal to your proficiency bonus against that attack roll, potentially causing it to miss. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	description : "I know Cure Wounds. I can cast it using spell slots and once per long rest without a spell slot. As a reaction when I or another I can see within 5 ft is hit by an attack, I can add my Proficiency Bonus to AC, potentially causing the attack to miss. I can do this my Proficiency Bonus per long rest.",
	spellcastingAbility : [4, 5, 6],
	allowUpCasting : true,
	spellcastingBonus : [{
		name : "Cure Wounds",
		spells : ["cure wounds"],
		selection : ["cure wounds"],
		firstCol : "oncelr"
	}],
	action : [["reaction", "Metallic Gift (Protective Wings)"]],
	extraLimitedFeatures : [{
		name : "Metallic Gift (Cure Wounds)",
		usages : 1,
		recovery : "long rest"
	}, {
		name : "Metallic Gift (Protective Wings)",
		usages : "Proficiency Bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest"
	}]
};

// Spells
SpellsList["ashardalon's stride"] = { // contains contributions by Nod_Hero (Flame Stride in UA:DO)
	name : "Ashardalon's Stride",
	nameAlt : "Flame Stride",
	classes : ["artificer", "ranger", "sorcerer", "wizard"],
	source : [["FToD", 19], ["UA:DO", 6]],
	level : 3,
	school : "Trans",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
	description : "+20+5/SL ft speed; provoke no opp atks for moving; all crea/obj in 5 ft of path 1d6+1d6/SL Fire dmg",
	descriptionShorter : "+20+5/SL ft spd; no opp atks with move; all crea/obj in 5 ft of path 1d6+1d6/SL Fire dmg",
	descriptionMetric : "+6+1,5/SL m spd; provoke no opp atks in move; all crea/obj in 1,5 m of path 1d6+1d6/SL Fire dmg",
	descriptionShorterMetric : "+6+1,5/SL m spd; no opp atks in move; all crea/obj in 1,5 m of path 1d6+1d6/SL Fire dmg",
	descriptionFull : "The billowing flames of a dragon blast from your feet, granting you explosive speed. For the duration, your speed increases by 20 feet and moving doesn't provoke opportunity attacks."+
	"\n   When you move within 5 feet of a creature or an object that isn't being worn or carried, it takes 1d6 fire damage from your trail of heat. A creature or object can take this damage only once during a turn."+
	AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, increase your speed by 5 feet for each spell slot level above 3rd. The spell deals an additional 1d6 fire damage for each slot level above 3rd."
};
SpellsList["draconic transformation"] = {
	name : "Draconic Transformation",
	classes : ["druid", "sorcerer", "wizard"],
	source : [["FToD", 19]],
	level : 7,
	school : "Trans",
	time : "1 bns",
	range : "S:60" + (typePF ? "-" : "") + "ft cone",
	components : "V,S,M\u0192",
	compMaterial : "A statuette of a dragon, worth at least 500 gp",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "Blindsight 30 ft; 60 ft fly speed; at cast and 1 bns: 60-ft cone all 6d8 Force damage, save half (500gp)",
	descriptionShorter : "Blindsight 30 ft; 60 ft fly; at cast and 1 bns: 60-ft cone all 6d8 Force dmg, save half (500gp)",
	descriptionFull : "With a roar, you draw on the magic of dragons to transform yourself, taking on various draconic features. You gain the following benefits until the spell ends:"+
	"\n   " + toUni("Blindsight") + ". You have blindsight with a range of 30 feet. Within that range, you can effectively see anything that isn't behind total cover, even if you're blinded or in darkness. Moreover, you can see an invisible creature, unless the creature successfully hides from you."+
	"\n   " + toUni("Breath Weapon") + ". When you cast this spell, and as a bonus action on subsequent turns for the duration, you can exhale shimmering energy in a 60-foot cone. Each creature in that area must make a Dexterity saving throw, taking 6d8 force damage on a failed save, or half as much damage on a successful one."+
	"\n   " + toUni("Wings") + ". Incorporeal wings sprout from your back, giving you a flying speed of 60 feet."
};
SpellsList["fizban's platinum shield"] = {
	name : "Fizban's Platinum Shield",
	nameAlt : "Platinum Shield",
	classes : ["sorcerer", "wizard"],
	source : [["FToD", 20]],
	level : 6,
	school : "Abjur",
	time : "1 bns",
	range : "60 ft",
	components : "V,S,M\u0192",
	compMaterial : "A platinum-plated dragon scale, worth at least 500 gp",
	duration : "Conc, 1 min",
	description : "1 crea Acid, Cold, Fire, Lightn. \u0026 Poison resist., half cover, better Dex saves; 1 bns change crea (500gp)",
	descriptionFull : "You create a field of silvery light that surrounds a creature of your choice within range (you can choose yourself). The field sheds dim light out to 5 feet. While surrounded by the field, a creature gains the following benefits:"+
	"\n   " + toUni("Cover") + ". The creature has half cover."+
	"\n   " + toUni("Damage Resistance") + ". The creature has resistance to acid, cold, fire, lightning, and poison damage."+
	"\n   " + toUni("Evasion") + ". If the creature is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, the creature instead takes no damage if it succeeds on the saving throw, and only half damage if it fails."+
	"\n   As a bonus action on subsequent turns, you can move the field to another creature within 60 feet of the field."
};
SpellsList["nathair's mischief"] = {
	name : "Nathair's Mischief",
	nameAlt : "Mischief",
	classes : ["bard", "sorcerer", "wizard"],
	source : [["FToD", 20], ["UA:DO", 6]],
	level : 2,
	school : "Illus",
	time : "1 a",
	range : "60 ft",
	components : "S,M",
	compMaterial : "A piece of crust from an apple pie",
	duration : "Conc, 1 min",
	save : "Var",
	description : "20-ft cube of magic, roll d4 for effect; At start of my turn, move cube 10 ft and reroll effect; see book",
	descriptionFull : "You fill a 20-foot cube you can see within range with fey and draconic magic. Roll on the Mischievous Surge table to determine the magical effect produced, and roll again at the start of each of your turns until the spell ends. You can move the cube up to 10 feet before you roll."+
	"\n\nMischievous Surge"+
	toUni("\nd4\tEffect")+
	"\n  1\tThe smell of apple pie fills the air, and each creature in the cube must succeed on a Wisdom saving throw or become charmed by you until the start of your next turn."+
	"\n  2\tBouquets of flowers appear all around, and each creature in the cube must succeed on a Dexterity saving throw or be blinded until the start of your next turn as the flowers spray water in their faces."+
	"\n  3\tEach creature in the cube must succeed on a Wisdom saving throw or begin giggling until the start of your next turn. A giggling creature is incapacitated and uses all its movement to move in a random direction."+
	"\n  4\tDrops of molasses hover in the cube, making it difficult terrain until the start of your next turn."
};
SpellsList["raulothim's psychic lance"] = {
	name : "Raulothim's Psychic Lance",
	nameAlt : "Psychic Lance",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : [["FToD", 21]],
	level : 4,
	school : "Ench",
	time : "1 a",
	range : "120 ft",
	components : "V",
	duration : "Instantaneous",
	save : "Int",
	description : "1 crea I see or can name 7d6+1d6/SL Psychic dmg \u0026 incap. till start of my turn; save half, not incap.",
	descriptionShorter : "1 crea I see or can name 7d6+1d6/SL Psychic dmg \u0026 incap. for 1 rnd; save half, not incap.",
	descriptionFull : "You unleash a shimmering lance of psychic power from your forehead at a creature that you can see within range. Alternatively, you can utter a creature's name. If the named target is within range, it becomes the spell's target even if you can't see it. If the named target isn't within range, the lance dissipates without effect."+
	"\n   The target must make an Intelligence saving throw. On a failed save, the target takes 7d6 psychic damage and is incapacitated until the start of your next turn. On a successful save, the creature takes half as much damage and isn't incapacitated."+
	AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d6 for each slot level above 4th."
};
SpellsList["rime's binding ice"] = { // Icingdeath's Frost in UA:DO
	name : "Rime's Binding Ice",
	nameAlt : "Binding Ice",
	classes : ["sorcerer", "wizard"],
	source : [["FToD", 21], ["UA:DO", 6]],
	level : 2,
	school : "Evoc",
	time : "1 a",
	range : "S:30" + (typePF ? "-" : "") + "ft cone",
	components : "S,M",
	compMaterial : "A vial of meltwater",
	duration : "Instantaneous",
	save : "Con",
	description : "All in area 3d8+1d8/SL Cold dmg and speed 0 for 1 min until 1 a to undo; save halves, normal speed",
	descriptionShorter : "All in area 3d8+1d8/SL Cold dmg \u0026 spd 0 for 1 min until 1 a to undo; save halves, normal spd",
	descriptionFull : "A burst of cold energy emanates from you in a 30-foot cone. Each creature in that area must make a Constitution saving throw. On a failed save, a creature takes 3d8 cold damage and is hindered by ice formations for 1 minute, or until it or another creature within reach of it uses an action to break away the ice. A creature hindered by ice has its speed reduced to 0. On a successful save, a creature takes half as much damage and isn't hindered by ice."+
	AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, increase the cold damage by 1d8 for each slot level above 2nd."
};
SpellsList["summon draconic spirit"] = {
	name : "Summon Draconic Spirit",
	classes : ["druid", "sorcerer", "wizard"],
	source : [["FToD", 21], ["UA:DO", 7]],
	level : 5,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M\u0192",
	compMaterial : "an object with the image of a dragon engraved on it, worth at least 500 gp",
	duration : "Conc, 1 min",
	description : "Summon choice of Draconic Spirit; obeys commands; takes turn after mine; vanishes at 0 hp (500gp)",
	descriptionFull : "You call forth a draconic spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Draconic Spirit stat block. When you cast this spell, choose a family of dragon: chromatic, gem, or metallic. The creature resembles a dragon of the chosen family, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends."+
	"\n   The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger."+
	AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, use the higher level wherever the spell's level appears in the stat block."
};

// Magic Items
MagicItemsList["amethyst lodestone"] = {
	name : "Amethyst Lodestone",
	source : [["FToD", 22]],
	type : "wondrous item",
	rarity : "very rare",
	attunement : true,
	description : "This " + (typePF ? "" : "mineral ") + "grants me adv. on Str saves. It has 6 charges, regain" + (typePF ? "s" : "ing") + " 1d6 at dawn."+
		(typePF ? " " : "\n") + "\u2022 1 charge, bonus action: I gain a fly speed equal to walk speed for 10 min and I can hover."+
		(typePF ? " \u2022 1 charge, action: a creature I can see in 60 ft makes DC 18 Str save or pushed 20 ft in chosen direction." : "\n\u2022 1 charge, action: a creature I can see in 60 ft must make a DC 18 Str save or be pushed up to 20 ft in a direction of my choice.")+
		" \u2022 3 charges, action: I cast Reverse Gravity (DC 18).",
	descriptionFull : "This fist-sized chunk of amethyst is infused with an amethyst dragon's ability to bend gravitational forces. While you are carrying the lodestone, you have advantage on Strength saving throws."+
	"\n   The lodestone has 6 charges for the following properties, which you can use while you are holding the stone. The stone regains 1d6 expended charges daily at dawn."+
	"\n   " + toUni("Flight") + ". As a bonus action, you can expend 1 charge to gain the power of flight for 10 minutes. For the duration, you gain a flying speed equal to your walking speed, and you can hover."+
	"\n   " + toUni("Gravitational Thrust") + ". As an action, you can expend 1 charge to focus gravity around a creature you can see within 60 feet of you. The target must succeed on a DC 18 Strength saving throw or be pushed up to 20 feet in a direction of your choice."+
	"\n   " + toUni("Reverse Gravity") + ". As an action, you can expend 3 charges to cast reverse gravity from the stone (save DC 18).",
	usages : 6,
	recovery : "dawn",
	additional : "regains 1d6",
	spellFirstColTitle : "Ch",
	fixedDC : 18,
	spellcastingBonus : {
		name : "3 charges",
		spells : ["reverse gravity"],
		selection : ["reverse gravity"],
		firstCol : 3
	},
	advantages : [["Strength", true]],
	savetxt : { text : ["Adv. on Str saves"] },
	action : [["bonus action", " (Flight)"], ["action", " (Grav. Thrust)"]]
}
MagicItemsList["crystal blade"] = {
	name : "Crystal Blade",
	source : [["FToD", 22]],
	type : "weapon (any sword)",
	rarity : "rare",
	attunement : true,
	description : "This magic sword has 3 charges, regaining 1d3 at dawn. It deals an extra 1d8 radiant damage. When it does so to a creature, I can expend 1 charge to heal myself for the same amount. As a bonus action, I can have it start or stop shedding light: either 30 ft bright light and 30 ft dim, or only 10 ft dim.",
	descriptionFull : "This magic sword's blade is fashioned from a horn or spine from a crystal dragon. When you hit with an attack roll using this sword, the target takes an extra 1d8 radiant damage."+
	"\n   The sword has 3 charges and regains 1d3 expended charges daily at dawn. When you hit a creature with an attack roll using the sword, you can expend 1 charge to regain a number of hit points equal to the extra radiant damage the sword dealt."+
	"\n   While you're holding the sword, you can use a bonus action to cause it to shed bright light in a 30-foot radius and dim light for an additional 30 feet, to cause it to shed dim light in a 10-foot radius, or to douse the light.",
	usages : 3,
	recovery : "dawn",
	additional : "regains 1d3",
	action : [["bonus action", ""]],
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "brackets",
		descriptionChange : ["replace", "sword"],
		itemName1stPage : ["suffix", "Crystal Bladed"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /sword|scimitar|rapier/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/\bcrystal bladed?\b/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + '+1d8 radiant damage; 1 charge to heal';
				}
			},
			'If I include the words "Crystal Blade" or "Crystal Bladed" in a the name of a sword, it will be treated as the magic weapon Crystal Blade. The sword deals an extra 1d8 radiant damage and when it does so, I can expend 1 of its charges to heal me for the same amount.'
		]
	}
}
MagicItemsList["dragonhide belt, +1, +2, or +3"] = {
	name : "Dragonhide Belt, +1, +2, or +3",
	source : [["FToD", 23]],
	type : "wondrous item",
	rarity : "very rare",
	description : "This finely detailed belt is made of dragonhide. While wearing it, I gain a bonus to the save DCs of my ki features determined by its rarity: uncommon (+1), rare (+2), or very rare (+3). As an action, I can use it to regain ki points equal to a roll of my Martial Arts die. I can't use this action again until the next dawn.",
	descriptionFull : "This finely detailed belt is made of dragonhide. While wearing it, you gain a bonus to the saving throw DCs of your ki features. The bonus is determined by the belt's rarity: uncommon (+1), rare (+2), or very rare (+3). In addition, you can use an action to regain ki points equal to a roll of your Martial Arts die. You can't use this action again until the next dawn.",
	attunement : true,
	prerequisite : "Requires attunement by a monk",
	prereqeval : function(v) { return classes.known.monk ? true : false; },
	usages : 1,
	recovery : "dawn",
	additional : "regain ki points",
	allowDuplicates : true,
	choices : ["+1 to ki save DCs (uncommon)", "+2 to ki save DCs (rare)", "+3 to ki save DCs (very rare)"],
	"+1 to ki save dcs (uncommon)" : {
		name : "Dragonhide Belt +1",
		rarity : "uncommon",
		description : "This finely detailed belt is made of dragonhide. While wearing it, I gain a +1 bonus to the saving throw DCs of my ki features. As an action, I can use it to regain ki points equal to a roll of my Martial Arts die. Once I do so, I can't use this action again until the next dawn.",
		action : [["action", " (regain ki)"]],
		addMod : [{
			type : "dc", field : "Wis", mod : 1, text : "I gain a +1 bonus to the saving throw DCs of my ki features while attuned to this belt."
		}],
		calcChanges : {
			spellCalc : [
				function (type, spellcasters, ability) {
					if (type === "dc" && spellcasters.indexOf('monk') !== -1) return 1;
				},
				"I gain a +1 bonus to the saving throw DCs of my ki features while attuned to this belt."
			]
		}
	},
	"+2 to ki save dcs (rare)" : {
		name : "Dragonhide Belt +2",
		rarity : "uncommon",
		description : "This finely detailed belt is made of dragonhide. While wearing it, I gain a +2 bonus to the saving throw DCs of my ki features. As an action, I can use it to regain ki points equal to a roll of my Martial Arts die. Once I do so, I can't use this action again until the next dawn.",
		action : [["action", " (regain ki)"]],
		addMod : [{
			type : "dc", field : "Wis", mod : 2, text : "I gain a +2 bonus to the saving throw DCs of my ki features while attuned to this belt."
		}],
		calcChanges : {
			spellCalc : [
				function (type, spellcasters, ability) {
					if (type === "dc" && spellcasters.indexOf('monk') !== -1) return 2;
				},
				"I gain a +2 bonus to the saving throw DCs of my ki features while attuned to this belt."
			]
		}
	},
	"+3 to ki save dcs (very rare)" : {
		name : "Dragonhide Belt +3",
		rarity : "uncommon",
		description : "This finely detailed belt is made of dragonhide. While wearing it, I gain a +3 bonus to the saving throw DCs of my ki features. As an action, I can use it to regain ki points equal to a roll of my Martial Arts die. Once I do so, I can't use this action again until the next dawn.",
		action : [["action", " (regain ki)"]],
		addMod : [{
			type : "dc", field : "Wis", mod : 3, text : "I gain a +3 bonus to the saving throw DCs of my ki features while attuned to this belt."
		}],
		calcChanges : {
			spellCalc : [
				function (type, spellcasters, ability) {
					if (type === "dc" && spellcasters.indexOf('monk') !== -1) return 3;
				},
				"I gain a +3 bonus to the saving throw DCs of my ki features while attuned to this belt."
			]
		}
	}
}
MagicItemsList["dragonlance"] = {
	name : "Dragonlance",
	source : [["FToD", 23]],
	type : "weapon (lance or pike)",
	rarity : "legendary",
	attunement : true,
	description : "This magic weapon forged from rare metal grants me a +3 bonus to attack and damage rolls made with it. When I hit a dragon with it, the dragon takes an extra 3d6 force damage, and any Dragon of my choice that I can see within 30 ft can immediately use its reaction to make a melee attack.",
	descriptionFull : "A dragonlance is a renowned weapon forged from rare metal with the aid of powerful artifacts associated with Bahamut. Different lances are forged for use by foot soldiers (as pikes) and by riders (as lances), but the magical properties of the weapons are the same."+
	"\n   You gain a +3 bonus to attack and damage rolls made with this magic weapon."+
	"\n   When you hit a Dragon with this weapon, the Dragon takes an extra 3d6 force damage, and any Dragon of your choice that you can see within 30 feet of you can immediately use its reaction to make a melee attack.",
	choices : ["A lance for riders", "A pike for foot soldiers"],
	choicesNotInMenu : true,
	"a lance for riders" : {
		name : "Dragonlance ",
		description : "This magic lance forged from rare metal grants me a +3 bonus to attack and damage rolls made with it. When I hit a dragon with it, the dragon takes an extra 3d6 force damage, and any Dragon of my choice that I can see within 30 ft can immediately use its reaction to make a melee attack.",
		weaponsAdd : ["Dragonlance"]
	},
	"a pike for foot soldiers" : {
		name : "Dragonlance (Pike)",
		description : "This magic pike forged from rare metal grants me a +3 bonus to attack and damage rolls made with it. When I hit a dragon with it, the dragon takes an extra 3d6 force damage, and any Dragon of my choice that I can see within 30 ft can immediately use its reaction to make a melee attack.",
		weaponsAdd : ["Dragonlance (Pike)"]
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/\b(lance|pike)\b/i).test(v.baseWeaponName) && (/dragonlance/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + '+3d6 force damage vs. dragons';
				}
			},
			'If I include the word "Dragonlance" in a the name of a lance or pike, it will be treated as the magic weapon Dragonlance. It has +3 to hit and damage and does +3d6 force damage to dragons.'
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.isMeleeWeapon && (/\b(lance|pike)\b/i).test(v.baseWeaponName) && (/dragonlance/i).test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[1] + 3;
				}
			}, ''
		]
	}
}
MagicItemsList["dragon wing bow"] = function () {
	var obj = {
		name : "Dragon Wing Bow",
		source : [["FToD", 23]],
		type : "weapon (any bow)",
		rarity : "rare",
		attunement : true,
		description : "This magic bow has limb tips shaped like dragon wings and is infused with the essence of a dragon's breath. Attacks made with it deal an extra 1d6 damage of the dragon's type. When I pull back the string without ammo loaded in it, the weapon creates its own that lasts until it hits or misses a target.",
		descriptionFull : "The limb tips of this magic bow are shaped like a dragon's wings, and the weapon is infused with the essence of a chromatic, gem, or metallic dragon's breath. When you hit with an attack roll using this magic bow, the target takes an extra 1d6 damage of the same type as the breath infused in the bow\u2014acid, cold, fire, force, lightning, necrotic, poison, psychic, radiant, or thunder."+
		"\n   If you load no ammunition in the weapon, it produces its own, automatically creating one piece of magic ammunition when you pull back the string. The ammunition created by the bow vanishes the instant after it hits or misses a target.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "suffix",
			descriptionChange : ["replace", "bow"],
			excludeCheck : function (inObjKey, inObj) {
				var testRegex = /bow/i;
				return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
			}
		},
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && v.isRangedWeapon && /bow/i.test(v.baseWeaponName) && /\bdragon wing\b/i.test(v.WeaponTextName) && CurrentMagicItems.known.indexOf("dragon wing bow") !== -1 && CurrentMagicItems.choices[CurrentMagicItems.known.indexOf("dragon wing bow")]) {
						var sBowType = CurrentMagicItems.choices[CurrentMagicItems.known.indexOf("dragon wing bow")];
						var oBowObj = MagicItemsList["dragon wing bow"][sBowType];
						if (!oBowObj || !oBowObj.dragonWingBowDmgType) return;
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
						fields.Description += (fields.Description ? '; ' : '') + '+1d6 ' + oBowObj.dragonWingBowDmgType + ' damage; Creates own ammo';
					}
				},
				'If I include the words "Dragon Wing" in a the name of a bow, it will be treated as the magic weapon Dragon Wing Bow. The bow deals an extra 1d6 damage of the type of its associated dragon. It also requires no ammunition, creating its own if fired without loading ammunition.'
			]
		},
		choices : [],
		choicesNotInMenu : true
	};
	var aDragons = [["Black", "acid"], ["Blue", "lightning"], ["Green", "poison"], ["Red", "fire"], ["White", "cold"], ["Amethyst", "force"], ["Crystal", "radiant"], ["Emerald", "psychic"], ["Sapphire", "thunder"], ["Topaz", "necrotic"], ["Brass", "fire"], ["Bronze", "lightning"], ["Copper", "acid"], ["Gold", "fire"], ["Silver", "cold"]];
	var aVowels = ["a", "e"];
	for (var i = 0; i < aDragons.length; i++) {
		var sDragon = aDragons[i][0];
		var sDmg = aDragons[i][1];
		var sNameTest = sDragon + " Dragon Wing";
		var sNameFull = sNameTest + " Bow";
		var sNameChoice = sDragon + " dragon (" + sDmg + ")";
		var sAorAn = aVowels.indexOf(sDragon[0].toLowerCase()) === -1 ? "a " : "an ";
		obj.choices.push(sNameChoice);
		obj[sNameChoice.toLowerCase()] = {
			name : sNameFull,
			nameTest : sNameTest,
			description : "This magic bow has limb tips shaped like dragon wings and is infused with the essence of " + sAorAn + sDragon.toLowerCase() + " dragon's breath. Attacks made with it deal an extra 1d6 " + sDmg + " damage. When I pull back the string without ammunition loaded in it, the weapon creates its own that lasts until it hits or misses a target.",
			dragonWingBowDmgType : sDmg
		}
	}
	return obj;
}();
MagicItemsList["emerald pen"] = {
	name : "Emerald Pen",
	source : [["FToD", 23]],
	type : "wondrous item",
	rarity : "uncommon",
	description : "This pen is tipped with an emerald nib and requires no ink to write. While holding this pen, I can cast Illusory Script at will, requiring no material components.",
	descriptionFull : "This pen is tipped with an emerald nib and requires no ink to write. While holding this pen, you can cast illusory script at will, requiring no material components.",
	spellcastingAbility : "class",
	spellcastingBonus : {
		name : "At will",
		spells : ["illusory script"],
		selection : ["illusory script"],
		firstCol : "atwill"
	},
	spellChanges : {
		"illusory script" : {
			ritual : false,
			changes : "Using the Emerald Pen, I can cast Illusory Script at will without requiring material components. Thus, the Ritual tag is removed."
		}
	}
}
MagicItemsList["flail of tiamat"] = {
	name : "Flail of Tiamat",
	source : [["FToD", 23]],
	type : "weapon (flail)",
	rarity : "legendary",
	attunement : true,
	description : "This magical flail adds a +3 bonus to its attack and damage rolls and deals +5d4 damage. As an action once per dawn, I can have it breathe flames in a 90-ft cone that deals 14d6 damage, Dex save DC 18 to halve. Damage type is acid, cold, fire, lightning, or poison, which I can choose when I deal the damage (cone or hit).",
	descriptionFull : "This magic flail is made in the image of Tiamat, with five jagged heads shaped like the heads of five different chromatic dragons. You gain a +3 bonus to attack and damage rolls made with this flail. When you hit with an attack roll using it, the target takes an extra 5d4 damage of your choice of one of the following damage types: acid, cold, fire, lightning, or poison."+
	"\n   While holding the flail, you can use an action and speak a command word to cause the heads to breathe multicolored flames in a 90-foot cone. Each creature in that area must make a DC 18 Dexterity saving throw. On a failed save, it takes 14d6 damage of one of the following damage types (your choice): acid, cold, fire, lightning, or poison. On a successful save, it takes half as much damage. Once this action is used, it can't be used again until the next dawn.",
	weight : 2,
	usages : 1,
	recovery : "dawn",
	additional : "Breathe Flames",
	action : [["action", " (Breathe Flames)"]],
	weaponsAdd : ["Flail of Tiamat"],
	weaponOptions : {
		baseWeapon : "flail",
		regExpSearch : /^(?=.*flail)(?=.*tiamat).*$/i,
		name : "Flail of Tiamat",
		source : [["FToD", 23]],
		description : "+5d4 acid, cold, fire, lightning, or poison damage",
		modifiers : [3, 3]
	}
}
AddFeatureChoice(MagicItemsList["figurine of wondrous power"], false, "Gold Canary", {
	source : [["FToD", 23]],
	rarity : "legendary",
	description: "As an action, I can speak the command word and throw this statuette to an empty space within 60 ft, where it becomes a giant canary for 8 hours (or once a year an adult gold dragon for 1 hour), until I use the command again, or it drops to 0 hp. It is friendly, understands my languages, and obeys my commands.",
	descriptionLong: "As an action, I can speak the command word and throw this gold statuette of a canary to an unoccupied space within 60 ft, where it becomes a giant canary for up to 8 hours, until I use an action to repeat the command word, or it reaches 0 HP. It is friendly to me and my allies, understands my languages, and obeys my spoken commands. If I issue no commands, the creature defends itself but takes no other actions. Once per year, I can have it become an adult gold dragon for up to 1 hour. When it reverts back to a figurine, it can't be used again until the next dawn (canary) or 1 year has passed (dragon).",
	descriptionFull : "This gold statuette is carved in the likeness of a canary and is small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living creature in one of two forms (you choose). If there isn't enough space for the creature where it would appear, the figurine doesn't become a creature. The two forms are as follows:"+
	"\n   " + toUni("Giant Canary Form") + ". The figurine becomes a giant canary for up to 8 hours and can be ridden as a mount. Once the figurine has become a giant canary, it can't be used this way again until the next dawn."+
	"\n   " + toUni("Gold Dragon Form") + ". While you are missing half or more of your hit points, you can speak a different command word and the figurine becomes an adult gold dragon (see its stat block in the Monster Manual) for up to 1 hour. The dragon can't use any legendary actions or lair actions. Once the figurine has become an adult gold dragon, it can't be used this way again until 1 year has passed."+
	"\n   In either form, the creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions."+
	"\n   The creature exists for a duration specific to each form. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until a certain amount of time has passed, as specified in the description.",
	extraLimitedFeatures : [{
		name : "Gold Canary Figurine [canary form]",
		usages : 1,
		recovery : "dawn"
	}, {
		name : "Gold Canary Figurine [dragon form]",
		usages : 1,
		recovery : "1 year"
	}]
}, false, true);
MagicItemsList["platinum scarf"] = {
	name : "Platinum Scarf",
	source : [["FToD", 24]],
	type : "wondrous item",
	rarity : "very rare",
	attunement : true,
	description : "As an action, I can pull a scale from this scarf, of which it has 3 per dawn. When I do so, I can choose the effect: heal 10d4 HP to a creature I touch, or for 1 hour it becomes a shield (+1 shield that grants radiant damage immunity) or a light hammer (deals 2d4 radiant damage and +2d4 to chromatic dragons).",
	descriptionFull : "This scarf is made of sturdy cloth and covered in platinum-colored scales."+
	"\n   As an action, you can pull a scale from the scarf and speak a command word. When you do so, choose one of the following effects:"+
	"\n   " + toUni("Breath of Life") + ". The scale disappears, and you or a creature you touch regains 10d4 hit points."+
	"\n   " + toUni("Platinum Shield") + ". For 1 hour or until you dismiss it (no action required), the scale becomes a +1 shield, which you or another creature can use. A creature wielding the shield has immunity to radiant damage."+
	"\n   " + toUni("Radiant Hammer") + ". For 1 hour or until you dismiss it (no action required), the scale becomes a magic light hammer, which you or another creature can use. The weapon deals 2d4 radiant damage, instead of the bludgeoning damage normal for a light hammer. It deals an extra 2d4 radiant damage to chromatic dragons."+
	"\n   Once three scales have been pulled from the scarf, no more scales can be removed until the next dawn, when all the missing scales grow back. If you pull off a scale but don't speak a command word, it disappears after 1 minute.",
	usages : 3,
	recovery : "dawn",
	action : [["action", ""]],
	weaponOptions : {
		baseWeapon : "light hammer",
		regExpSearch : /^(?=.*platinum scarf)(?=.*radiant hammer).*$/i,
		name : "Platinum Scarf's Radiant Hammer",
		damage : [2, 4, "radiant"],
		source : [["FToD", 24]],
		description : "Light, thrown; +2d4 damage vs. chromatic dragons",
	}
}
MagicItemsList["potion of dragon's majesty"] = function () { // NOG AFMAKEN!!!!
	var obj = {
		name : "Potion of Dragon's Majesty",
		source : [["FToD", 24]],
		type : "potion",
		rarity : "legendary",
		description : "Once as an action, I can drink this potion or administer it to transform into an adult dragon for 1 hour. They can't use Change Shape, legendary actions, or lair actions. They retain languages, personality, and memories, but their equipment melds into the form or falls to the ground (their choice).",
		descriptionFull : "This potion looks like liquid gold, with a single scale from a chromatic, gem, or metallic dragon suspended in it. When you drink this potion, you transform into an adult dragon of the same kind as the dragon the scale came from. The transformation lasts for 1 hour. Any equipment you are wearing or carrying melds into your new form or falls to the ground (your choice). For the duration, you use the game statistics of the adult dragon instead of your own, but you retain your languages, personality, and memories. You can't use a dragon's Change Shape or its legendary or lair actions.",
		weight : 0.5,
		choices : [],
		choicesNotInMenu : true
	}
	var aDragons = ["Black", "Blue", "Green", "Red", "White", "Amethyst", "Crystal", "Emerald", "Sapphire", "Topaz", "Brass", "Bronze", "Copper", "Gold", "Silver"];
	for (var i = 0; i < aDragons.length; i++) {
		var sDragon = aDragons[i];
		var sNameChoice = sDragon + " Dragon";
		obj.choices.push(sNameChoice);
		obj[sNameChoice.toLowerCase()] = {
			name : "Potion of " + sDragon + " Dragon's Majesty",
			description : "Once as an action, I can drink this potion or administer it to transform into an adult " + sDragon.toLowerCase() + " dragon for 1 hour. They can't use Change Shape, legendary actions, or lair actions. They retain languages, personality, and memories, but their equipment melds into the form or falls to the ground (their choice)."
		}
	}
	return obj;
}();
MagicItemsList["ruby weave gem"] = {
	name : "Ruby Weave Gem",
	source : [["FToD", 24]],
	type : "wondrous item",
	rarity : "very rare",
	attunement : true,
	prerequisite : "Requires attunement by a spellcaster",
	prereqeval : function(v) { return v.isSpellcaster; },
	description : "While I hold this gem, I can use it as my spellcasting focus. It has 3 charges per dawn. When I cast a spell while holding it, I can use charges to ignore 500 gp per charge of components with a gp cost. When I finish a long rest, I learn any one spell of a level I can cast until my next long rest. I can cast it using spell slots.",
	descriptionFull : "While you are holding this gem, you can use it as a spellcasting focus for your spells."+
	"\n   The gem has 3 charges and regains all expended charges daily at dawn. When you cast a spell while holding this gem, you can expend up to 3 charges to ignore the spell's material components with a gold piece cost, up to 500 gp per charge expended."+
	"\n   When you finish a long rest, choose a spell from any class list. The spell you choose must be of a level you can cast. You know the chosen spell and can cast it with your spell slots of the appropriate level until the end of your next long rest.",
	usages : 3,
	recovery : "dawn",
	spellcastingAbility : "class",
	spellcastingBonus : [{
		name : "Any one spell per LR, so",
		"class" : "any",
		psionic : false,
		firstCol : "checkbox"
	}, {
		name : "add as many as needed",
		"class" : "any",
		psionic : false,
		firstCol : "checkbox"
	}, {
		name : "to have some choices.",
		"class" : "any",
		psionic : false,
		firstCol : "checkbox"
	}]
}
MagicItemsList["sapphire buckler"] = {
	name : "Sapphire Buckler",
	source : [["FToD", 24]],
	type : "shield",
	rarity : "very rare",
	attunement : true,
	description : "While I wield this crystalline blue shield, I have resistance to psychic and thunder damage. As a reaction when I take damage from a creature within 5 ft, I can deal it 2d6 thunder damage. As an action once per dawn, I can use it to know the direction of all aberrations within 1 mile until the end of my next turn.",
	descriptionFull : "This crystalline blue shield is fashioned from a sapphire dragon's scale and is created to aid in rooting out the influence of Aberrations. While wielding the shield, you have resistance to psychic and thunder damage. Also, when you take damage from a creature that is within 5 feet of you, you can use your reaction to deal 2d6 thunder damage to that creature."+
	"\n   As an action, you can use the shield to help you locate Aberrations until the end of your next turn. If any Aberrations are within 1 mile of you, the shield emits a low humming tone for a moment, and you know the direction of all Aberrations within that range. Once this property is used, it can't be used again until the next dawn.",
	weight : 6,
	shieldAdd : "Sapphire Buckler",
	dmgres : ["Psychic", "Thunder"],
	action : [["reaction", " (damaged in melee)"], ["action", " (locate aberrations)"]]
}
MagicItemsList["topaz annihilator"] = {
	name : "Topaz Annihilator",
	source : [["FToD", 24]],
	type : "weapon (firearm)",
	rarity : "legendary",
	attunement : true,
	description : "This magical firearm deals 2d6 necrotic damage on a hit. It has the two-handed property, requires no ammunition, 100 ft short range, and 300 ft long range. Targets reduced to 0 HP by it turn to dust and only True Resurrection or Wish can restore them to life. Once per dawn, I can use it to cast Disintegrate (DC 18).",
	descriptionFull : "This magic ranged weapon resembles a musket, but in lieu of any ammunition, it holds a glowing yellow scale from a topaz dragon in its heart."+
	"\n   The weapon has a normal range of 100 feet and a long range of 300 feet, and it has the two-handed property. It deals 2d6 necrotic damage on a hit. If this damage reduces a creature or object to 0 hit points, the target is reduced to dust. A creature reduced to dust can be restored to life only by a true resurrection or wish spell."+
	"\n   While the weapon is on your person, you can use an action to cast the disintegrate spell (save DC 18). Once this property is used, it can't be used again until the next dawn.",
	weaponsAdd : ["Topaz Annihilator"],
	weaponOptions : {
		regExpSearch : /^(?=.*Topaz)(?=.*tiamat).*$/i,
		name : "Topaz Annihilator",
		source : [["FToD", 24]],
		ability : 2,
		type : "firearm",
		damage : [2, 6, "necrotic"],
		range : "100/300 ft",
		weight : 10,
		description : "Two-handed; Targets reduced to 0 HP turn to dust",
		abilitytodamage : true
	},
	usages : 1,
	recovery : "dawn",
	additional : "Disintegrate",
	fixedDC : 18,
	spellcastingBonus : {
		name : "Once per dawn",
		spells : ["disintegrate"],
		selection : ["disintegrate"],
		firstCol : "oncelr"
	},
}
var FToD_HoardItems = {
	"dragon's wrath weapon" : [
		"This weapon is decorated with dragon heads, claws, wings, scales, or Draconic letters. When it steeps in a dragon's hoard, it absorbs the energy of the dragon's breath weapon and deals damage of that type with its special properties.",
		">>Slumbering (Uncommon)<<. Whenever you roll a 20 on your attack roll with this weapon, each creature of your choice within 5 feet of the target takes 5 damage of the type dealt by the dragon's breath weapon.",
		">>Stirring (Rare)<<. The Stirring weapon has the Slumbering property. In addition, you gain a +1 bonus to attack and damage rolls made using the weapon. On a hit, the weapon deals an extra 1d6 damage of the type dealt by the dragon's breath weapon.",
		">>Wakened (Very Rare)<<. The Wakened weapon has the Slumbering property, and it improves on the Stirring property. The bonus to attack and damage rolls increases to +2, and the extra damage dealt by the weapon increases to 2d6.",
		"As an action, you can unleash a 30-foot cone of destructive energy from the weapon. Each creature in that area must make a DC 16 Dexterity saving throw, taking 8d6 damage of the type dealt by the dragon's breath weapon on a failed save, or half as much damage on a successful one. Once this action is used, it can't be used again until the next dawn.",
		">>Ascendant (Legendary)<<. The Ascendant weapon has the Slumbering property, and it improves on the Stirring and Wakened properties. The bonus to attack and damage rolls increases to +3, and the extra damage dealt by the weapon increases to 3d6.",
		"The cone of destructive energy the weapon creates increases to a 60-foot cone, the save DC increases to 18, and the damage increases to 12d6."
	],
	"dww-slumbering" : {
		description : "This magic weapon decorated with draconic ornaments has absorbed the energy of >>a dragon<< dragon's breath weapon. Whenever I roll a 20 on an attack roll with it, each creature of my choice within 5 ft of the target takes 5 >>dmg type<< damage.",
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && (v.isMeleeWeapon || v.isRangedWeapon) && /^(?=.*slumbering)(?=.*\b(black|blue|green|red|white|amethyst|crystal|emerald|sapphire|topaz|brass|bronze|copper|gold|silver) (dragon'?s? wrath|DW)\b).*$/i.test(v.WeaponTextName)) {
						var sWeaNmLC = v.WeaponTextName.toLowerCase();
						var aDragons = [["black", "acid"], ["blue", "lightning"], ["green", "poison"], ["red", "fire"], ["white", "cold"], ["amethyst", "force"], ["crystal", "radiant"], ["emerald", "psychic"], ["sapphire", "thunder"], ["topaz", "necrotic"], ["brass", "fire"], ["bronze", "lightning"], ["copper", "acid"], ["gold", "fire"], ["silver", "cold"]];
						var sDmgType = false;
						for (var i = 0; i < aDragons.length; i++) {
							if (sWeaNmLC.indexOf(aDragons[i][0]) !== -1) {
								sDmgType = aDragons[i][1];
								break;
							}
						}
						if (!sDmgType) return;
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
						fields.Description += (fields.Description ? '; ' : '') + 'On 20 to hit: 5 ' + sDmgType + ' damage to chosen in 5 ft of target';
					};
				},
				"If I include the words \"TYPE Dragon's Wrath\" or \"TYPE DW\" (where \"TYPE\" is replaced with a dragon's type like \"Red\") and \"Slumbering\" in the name of a weapon, it will be treated as the magic item Slumbering Dragon's Wrath Weapon (e.g. \"Red DW Longbow (slumbering)\"). Whenever I roll a 20 on an attack roll with a slumbering dragon's wrath weapon, each creature of my choice within 5 ft of the target takes 5 damage of the associated dragon's type. "
			]
		}
	},
	"dww-stirring" : {
		description : "This dragon decorated weapon has absorbed the energy of >>a dragon<< dragon's breath weapon. I add +1 on attack and damage rolls made with it and it deals +1d6 >>dmg type<< damage. When I roll a 20 on an attack roll with it, each creature of my choice within 5 ft of the target takes 5 >>dmg type<< damage.",
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && (v.isMeleeWeapon || v.isRangedWeapon) && /^(?=.*stirring)(?=.*\b(black|blue|green|red|white|amethyst|crystal|emerald|sapphire|topaz|brass|bronze|copper|gold|silver) (dragon'?s? wrath|DW)\b).*$/i.test(v.WeaponTextName)) {
						var sWeaNmLC = v.WeaponTextName.toLowerCase();
						var aDragons = [["black", "acid"], ["blue", "lightning"], ["green", "poison"], ["red", "fire"], ["white", "cold"], ["amethyst", "force"], ["crystal", "radiant"], ["emerald", "psychic"], ["sapphire", "thunder"], ["topaz", "necrotic"], ["brass", "fire"], ["bronze", "lightning"], ["copper", "acid"], ["gold", "fire"], ["silver", "cold"]];
						var sDmgType = false;
						for (var i = 0; i < aDragons.length; i++) {
							if (sWeaNmLC.indexOf(aDragons[i][0]) !== -1) {
								sDmgType = aDragons[i][1];
								break;
							}
						}
						if (!sDmgType) return;
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
						fields.Description += (fields.Description ? '; ' : '') + '+1d6 ' + sDmgType + ' damage; On 20: 5 ' + sDmgType + ' damage to chosen in 5 ft of target';
					};
				},
				"If I include the words \"TYPE Dragon's Wrath\" or \"TYPE DW\" (where \"TYPE\" is replaced with a dragon's type like \"Red\") and \"Stirring\" in the name of a weapon, it will be treated as the magic item Stirring Dragon's Wrath Weapon (e.g. \"Red DW Longbow (stirring)\"). A stirring dragon's wrath weapon adds +1 to attack and damage rolls made with it. On a hit, the weapon deals an extra +1d6 damage and on a 20 on an attack roll with it, each creature of my choice within 5 ft of the target takes 5 damage. The damage is of the associated dragon's type."
			],
			atkCalc : [
				function (fields, v, output) {
					if (!v.theWea.isMagicWeapon && (v.isMeleeWeapon || v.isRangedWeapon) && /^(?=.*stirring)(?=.*\b(black|blue|green|red|white|amethyst|crystal|emerald|sapphire|topaz|brass|bronze|copper|gold|silver) (dragon'?s? wrath|DW)\b).*$/i.test(v.WeaponTextName)) {
						output.magic = v.thisWeapon[1] + 1;
					}
				}, ''
			]
		}
	},
	"dww-wakened" : {
		description : "This weapon uses >>dmg type<< of >>a dragon<< dragon. It adds +2 to its attack and damage rolls and deals +2d6 >>dmg type<< damage. On a 20 to hit, any creature of my choice in 5 ft of the target take 5 damage. As an action once per dawn, it can do a 30-ft cone, Dex DC 16 half, 8d6 damage dragon breath.",
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && (v.isMeleeWeapon || v.isRangedWeapon) && /^(?=.*wakened)(?=.*\b(black|blue|green|red|white|amethyst|crystal|emerald|sapphire|topaz|brass|bronze|copper|gold|silver) (dragon'?s? wrath|DW)\b).*$/i.test(v.WeaponTextName)) {
						var sWeaNmLC = v.WeaponTextName.toLowerCase();
						var aDragons = [["black", "acid"], ["blue", "lightning"], ["green", "poison"], ["red", "fire"], ["white", "cold"], ["amethyst", "force"], ["crystal", "radiant"], ["emerald", "psychic"], ["sapphire", "thunder"], ["topaz", "necrotic"], ["brass", "fire"], ["bronze", "lightning"], ["copper", "acid"], ["gold", "fire"], ["silver", "cold"]];
						var sDmgType = false;
						for (var i = 0; i < aDragons.length; i++) {
							if (sWeaNmLC.indexOf(aDragons[i][0]) !== -1) {
								sDmgType = aDragons[i][1];
								break;
							}
						}
						if (!sDmgType) return;
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
						fields.Description += (fields.Description ? '; ' : '') + '+2d6 ' + sDmgType + ' damage; On 20: 5 ' + sDmgType + ' damage to chosen in 5 ft of target';
					};
				},
				"If I include the words \"TYPE Dragon's Wrath\" or \"TYPE DW\" (where \"TYPE\" is replaced with a dragon's type like \"Red\") and \"Wakened\" in the name of a weapon, it will be treated as the magic item Wakened Dragon's Wrath Weapon (e.g. \"Red DW Longbow (wakened)\"). A wakened dragon wrath weapon adds +2 to attack and damage rolls made with it. On a hit, the weapon deals an extra +2d6 damage and on a 20 on an attack roll with it, each creature of my choice within 5 ft of the target takes 5 damage. The damage is of the associated dragon's type."
			],
			atkCalc : [
				function (fields, v, output) {
					if (!v.theWea.isMagicWeapon && (v.isMeleeWeapon || v.isRangedWeapon) && /^(?=.*stirring)(?=.*\b(black|blue|green|red|white|amethyst|crystal|emerald|sapphire|topaz|brass|bronze|copper|gold|silver) (dragon'?s? wrath|DW)\b).*$/i.test(v.WeaponTextName)) {
						output.magic = v.thisWeapon[1] + 2;
					}
				}, ''
			]
		},
		usages : 1,
		recovery : "dawn",
		limfeaname : ">>dragon<< Dragon's Wrath Breath (wakened)",
		action : [["action", ""]],
		weaponsAdd : ">>dragon<< DW Breath (wakened)",
		weaponOptions : {
			regExpSearch : "^(?=.*wakened)(?=.*>>dragon<< (dragon'?s? wrath|DW))(?=.*breath).*$",
			name : ">>dragon<< Dragon's Wrath Breath (wakened)",
			source : [["FToD", 25]],
			ability : 0,
			type : "Magic Item",
			damage : [8, 6, ">>type<<"],
			range : "30-ft cone",
			description : "Hits all in area; Dex save, success - half damage; Usable only once per dawn",
			abilitytodamage : false,
			dc : true,
			modifiers : ["dc+8", ""]
		}
	},
	"dww-ascendant" : {
		description : "This weapon uses >>dmg type<< of >>a dragon<< dragon. It adds +3 to its attack and damage rolls and deals +3d6 >>dmg type<< damage. On a 20 to hit, any creature of my choice in 5 ft of the target take 5 damage. As an action once per dawn, it can do a 60-ft cone, Dex DC 18 half, 8d6 damage dragon breath.",
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && (v.isMeleeWeapon || v.isRangedWeapon) && /^(?=.*ascendant)(?=.*\b(black|blue|green|red|white|amethyst|crystal|emerald|sapphire|topaz|brass|bronze|copper|gold|silver) (dragon'?s? wrath|DW)\b).*$/i.test(v.WeaponTextName)) {
						var sWeaNmLC = v.WeaponTextName.toLowerCase();
						var aDragons = [["black", "acid"], ["blue", "lightning"], ["green", "poison"], ["red", "fire"], ["white", "cold"], ["amethyst", "force"], ["crystal", "radiant"], ["emerald", "psychic"], ["sapphire", "thunder"], ["topaz", "necrotic"], ["brass", "fire"], ["bronze", "lightning"], ["copper", "acid"], ["gold", "fire"], ["silver", "cold"]];
						var sDmgType = false;
						for (var i = 0; i < aDragons.length; i++) {
							if (sWeaNmLC.indexOf(aDragons[i][0]) !== -1) {
								sDmgType = aDragons[i][1];
								break;
							}
						}
						if (!sDmgType) return;
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
						fields.Description += (fields.Description ? '; ' : '') + '+3d6 ' + sDmgType + ' damage; On 20: 5 ' + sDmgType + ' damage to chosen in 5 ft of target';
					};
				},
				"If I include the words \"TYPE Dragon's Wrath\" or \"TYPE DW\" (where \"TYPE\" is replaced with a dragon's type like \"Red\") and \"Ascendant\" in the name of a weapon, it will be treated as the magic item Ascendant Dragon's Wrath Weapon (e.g. \"Red DW Longbow (ascendant)\"). An ascendant dragon wrath weapon adds +3 to attack and damage rolls made with it. On a hit, the weapon deals an extra +3d6 damage and on a 20 on an attack roll with it, each creature of my choice within 5 ft of the target takes 5 damage. The damage is of the associated dragon's type."
			],
			atkCalc : [
				function (fields, v, output) {
					if (!v.theWea.isMagicWeapon && (v.isMeleeWeapon || v.isRangedWeapon) && /^(?=.*stirring)(?=.*\b(black|blue|green|red|white|amethyst|crystal|emerald|sapphire|topaz|brass|bronze|copper|gold|silver) (dragon'?s? wrath|DW)\b).*$/i.test(v.WeaponTextName)) {
						output.magic = v.thisWeapon[1] + 3;
					}
				}, ''
			]
		},
		usages : 1,
		recovery : "dawn",
		limfeaname : ">>dragon<< Dragon's Wrath Breath (ascendant)",
		action : [["action", "Dragon's Wrath Breath Weapon"]],
		weaponsAdd : ">>dragon<< DW Breath (ascendant)",
		weaponOptions : {
			regExpSearch : "^(?=.*ascendant)(?=.*>>dragon<< (dragon'?s? wrath|DW))(?=.*breath).*$",
			name : ">>dragon<< Dragon's Wrath Breath (ascendant)",
			source : [["FToD", 25]],
			ability : 0,
			type : "Magic Item",
			damage : [12, 6, ">>type<<"],
			range : "60-ft cone",
			description : "Hits all in area; Dex save, success - half damage; Usable only once per dawn",
			abilitytodamage : false,
			dc : true,
			modifiers : ["dc+10", ""]
		}
	},
	dragonsWrathWeaponCreate : function() {
		var aTypes = [["Slumbering", "uncommon"], ["Stirring", "rare"], ["Wakened", "very rare"], ["Ascendant", "legendary"]];
		var aDragons = [["Black", "acid"], ["Blue", "lightning"], ["Green", "poison"], ["Red", "fire"], ["White", "cold"], ["Amethyst", "force"], ["Crystal", "radiant"], ["Emerald", "psychic"], ["Sapphire", "thunder"], ["Topaz", "necrotic"], ["Brass", "fire"], ["Bronze", "lightning"], ["Copper", "acid"], ["Gold", "fire"], ["Silver", "cold"]];
		var aVowels = ["a", "e"];
		var sDescriptionFull = FToD_HoardItems["dragon's wrath weapon"].join("\n   ").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); });
		var sNotesDescription = FToD_HoardItems.to1stPerson(FToD_HoardItems["dragon's wrath weapon"]);
		for (var t = 0; t < aTypes.length; t++) {
			var sItemType = aTypes[t][0];
			var sItemTypeLC = aTypes[t][0].toLowerCase();
			var sItemName = "Dragon's Wrath Weapon (" + sItemTypeLC + ")";
			var sItemNameLC = sItemName.toLowerCase();
			var oDwwObj = FToD_HoardItems["dww-"+sItemTypeLC];
			MagicItemsList[sItemNameLC] = {
				name : sItemName,
				source : [["FToD", 25]],
				type : "weapon (any)",
				rarity : aTypes[t][1],
				attunement : true,
				description : oDwwObj.description.replace(/>>a dragon<</ig, "a").replace(/>>dmg type<< /ig, ""),
				descriptionFull : sDescriptionFull,
				toNotesPage : [{
					name : "Full Text",
					note : sNotesDescription
				}],
				allowDuplicates : true,
				choicesNotInMenu : true,
				choices : []
			}
			for (var sAttr in oDwwObj) {
				if (/^(description|weaponsAdd|weaponOptions|limfeaname)$/.test(sAttr)) continue;
				MagicItemsList[sItemNameLC][sAttr] = oDwwObj[sAttr];
			}
			for (var i = 0; i < aDragons.length; i++) {
				var sDragon = aDragons[i][0];
				var sDragonLC = sDragon.toLowerCase();
				var sDmg = aDragons[i][1];
				var sNameChoice = sDragon + " dragon (" + sDmg + ")";
				var sNameChoiceLC = sNameChoice.toLowerCase();
				var sNameTest = sItemType + " " + sDragon + " Dragon's Wrath";
				var sAorAnDragon = (aVowels.indexOf(sDragonLC[0]) === -1 ? "a " : "an ") + sDragonLC;
				MagicItemsList[sItemNameLC].choices.push(sNameChoice);
				MagicItemsList[sItemNameLC][sNameChoiceLC] = {
					name : sNameTest + " Weapon",
					nameTest : sNameTest,
					description : oDwwObj.description.replace(/>>a dragon<</ig, sAorAnDragon).replace(/>>dmg type<</ig, sDmg),
					chooseGear : {
						type : "weapon",
						prefixOrSuffix : "suffix",
						descriptionChange : ["replace", "weapon"],
						itemName1stPage : ["between", sDragon + " Dragon's Wrath", "(" + sItemTypeLC + ")"]
					}
				}
				if (oDwwObj.limfeaname) {
					MagicItemsList[sItemNameLC][sNameChoiceLC].limfeaname = [oDwwObj.limfeaname.replace(/>>dragon<</ig, sDragon)]
				}
				if (oDwwObj.weaponsAdd) {
					MagicItemsList[sItemNameLC][sNameChoiceLC].weaponsAdd = [oDwwObj.weaponsAdd.replace(/>>dragon<</ig, sDragon)]
				}
				if (oDwwObj.weaponOptions) {
					MagicItemsList[sItemNameLC][sNameChoiceLC].weaponOptions = {};
					for (var sAttr in oDwwObj.weaponOptions) {
						var toSet = oDwwObj.weaponOptions[sAttr];
						switch (sAttr) {
							case "regExpSearch":
								toSet = RegExp(toSet.replace(/>>dragon<</ig, sDragonLC), "i");
								break;
							case "name":
								toSet = toSet.replace(/>>dragon<</ig, sDragon);
								break;
							case "damage":
								toSet = [toSet[0], toSet[1], sDmg];
								break;
						}
						MagicItemsList[sItemNameLC][sNameChoiceLC].weaponOptions[sAttr] = toSet;
					}
				}
			}
		}
	},
	"dragon-touched focus" : [
		"This wondrous item can be a scepter, an orb, an amulet, a crystal, or another finely crafted object. It typically incorporates imagery of dragons' wings, claws, teeth, or scales.",
		">>Slumbering (Uncommon)<<. You have advantage on initiative rolls. While you are holding the focus, it can function as a spellcasting focus for all your spells.",
		">>Stirring (Rare)<<. The Stirring focus has the Slumbering property, and it gains an additional property determined by the family of the dragon in whose hoard it became Stirring:",
		"\u2022 Chromatic. Whenever you use a spell slot to cast a spell that deals acid, cold, fire, lightning, or poison damage, roll a d6, and you gain a bonus equal to the number rolled to one of the spell's damage rolls.",
		"\u2022 Gem. Whenever you use a spell slot to cast a spell, you can immediately teleport to an unoccupied space you can see within 15 feet of you.",
		"\u2022 Metallic. When a creature you can see within 30 feet of you makes a saving throw, you can use your reaction to give that creature advantage on the saving throw.",
		">>Wakened (Very Rare)<<. The Wakened focus has the Slumbering and Stirring properties, and while you are holding a Wakened focus, you can use it to cast certain spells. Once the item is used to cast a given spell, it can't be used to cast that spell again until the next dawn. The spells are determined by the family of the dragon in whose hoard it became Wakened. An asterisk indicates a new spell that appears earlier in this chapter.",
		"\u2022 Chromatic. Hold monster, Rime's binding ice",
		"\u2022 Gem. Rary's telepathic bond, Raulothim's psychic lance",
		"\u2022 Metallic. Fizban's platinum shield, legend lore",
		">>Ascendant (Legendary)<<. The Ascendant focus has the Slumbering, Stirring, and Wakened properties. In addition, when you cast a spell of 1st level or higher while holding this focus, you can treat the spell as if it were cast using a 9th-level spell slot. Once this property is used, it can't be used again until the next dawn."
	],
	dtf_chromatic : {
		calcChanges : {
			spellAdd : [
				function (spellKey, spellObj, spName) {
					if (CurrentSpells[spName].refType == "class" && !spellObj.psionic && spellObj.level !== 0 && (/(check|checked|marked)box/i.test(spellObj.firstCol) || (spName === "warlock" && !/atwill|sp/i.test(spellObj.firstCol)))) return genericSpellDmgEdit(spellKey, spellObj, "acid|cold|fire|lightning|lightn\\.?|poison", "1d6", true, true);
				},
				"Whenever I use a spell slot to cast a spell that deals acid, cold, fire, lightning, or poison damage, roll a d6, and I gain a bonus equal to the number rolled to one of the spell's damage rolls."
			]
		},
		extraLimitedFeatures : [{
			name : "Dragon-Touched Focus (Hold Monster)",
			usages : 1,
			recovery : "dawn"
		}, {
			name : "Dragon-Touched Focus (Rime's Binding Ice)",
			usages : 1,
			recovery : "dawn"
		}],
		spellcastingBonus : {
			name : "Once per dawn",
			spells : ["hold monster", "rime's binding ice"],
			selection : ["hold monster", "rime's binding ice"],
			firstCol : "oncelr",
			times : 2
		}
	},
	dtf_gem : {
		extraLimitedFeatures : [{
			name : "Dragon-Touched Focus (Rary's Telepathic Bond)",
			usages : 1,
			recovery : "dawn"
		}, {
			name : "Dragon-Touched Focus (R's Psychic Lance)",
			usages : 1,
			recovery : "dawn"
		}],
		spellcastingBonus : {
			name : "Once per dawn",
			spells : ["rary's telepathic bond", "raulothim's psychic lance"],
			selection : ["rary's telepathic bond", "raulothim's psychic lance"],
			firstCol : "oncelr",
			times : 2
		}
	},
	dtf_metallic : {
		extraLimitedFeatures : [{
			name : "Dragon-Touched Focus (F's Platinum Shield)",
			usages : 1,
			recovery : "dawn"
		}, {
			name : "Dragon-Touched Focus (Legend Lore)",
			usages : 1,
			recovery : "dawn"
		}],
		spellcastingBonus : {
			name : "Once per dawn",
			spells : ["fizban's platinum shield", "legend lore"],
			selection : ["fizban's platinum shield", "legend lore"],
			firstCol : "oncelr",
			times : 2
		}
	},
	dtf_ascendant : {
		extraLimitedFeatures : [{
			name : "Dragon-Touched Focus (upcast to 9th-level)",
			usages : 1,
			recovery : "dawn"
		}]
	},
	"dragon vessel" : [
		"This vessel can be a potion bottle, drinking horn, or other container meant to hold a liquid.",
		">>Slumbering (Uncommon)<<. As a bonus action, if the vessel is empty, you can speak the command word to fill the vessel with one of the following (your choice): ale, olive oil, a potion of healing, or a potion of climbing. Once this property is used, it can't be used until the next dawn. A potion you create in this way loses its magical properties if it isn't imbibed within 24 hours.",
		">>Stirring (Rare)<<. In addition to the options for a Slumbering vessel, you can fill a Stirring vessel with mead, a potion of fire breath, or a potion of healing (greater).",
		">>Wakened (Very Rare)<<. In addition to the options for a Slumbering or Stirring vessel, you can fill a Wakened vessel with wine, a potion of flying, or a potion of healing (superior).",
		">>Ascendant (Legendary)<<. In addition to the options for other states, you can fill an Ascendant vessel with whiskey, a potion of healing (supreme), or a potion of dragon's majesty (described earlier in this chapter)."
	],
	"scaled ornament" : [
		"This ornament can be jewelry, a cloak, or another wearable accessory. It appears to be fashioned from a dragon's scale, tooth, or claw, or it incorporates images in those shapes.",
		">>Slumbering (Uncommon)<<. You have advantage on saving throws you make to avoid being charmed or frightened or to end those conditions on you.",
		">>Stirring (Rare)<<. You gain a +1 bonus to AC, and you can't be charmed or frightened. Moreover, each creature of your choice within 30 feet of you has advantage on saving throws it makes to avoid being charmed or frightened or to end those conditions on itself.",
		">>Wakened (Very Rare)<<. The Wakened ornament has the Stirring property. In addition, when you would take damage of the type dealt by the breath of the dragon in whose hoard the ornament became Wakened, you can use your reaction to take no damage instead, and you regain hit points equal to the damage you would have taken. Once this property is used, it can't be used again until the next dawn.",
		">>Ascendant (Legendary)<<. The Ascendant ornament has the Stirring and Wakened properties. In addition, while you are wearing the ornament, you gain a flying speed equal to your walking speed and can hover. While you are flying using this speed, spectral dragon wings appear on your back."
	],
	hoardMagicItems : [
		"\n\n\u25C6 Hoard Magic Items (FToD 25)",
		"Certain magic items can absorb the ambient magic of a dragon's hoard. The mightier the dragon, the more powerful the item becomes when it is steeped in the dragon's hoard. These items, called hoard items, have four states A hoard item in its Slumbering state has certain base properties, and it gains additional properties when it enters the Stirring (young dragon), Wakened (adult dragon), or Ascendant (ancient dragon) state.",
		"Ordinarily, a hoard item must steep in a dragon's hoard for 1 year to reach the maximum possible state allowed by the age of the hoard's dragon. For example, a hoard item that steeps in an adult dragon's hoard for 1 year enters its Wakened state.",
		"When a dragon is slain, the magic surrounding its hoard becomes volatile. This allows a hoard item to steep more quickly in the hoard. A hoard item steeped in a dragon's hoard for 8 hours rises one state, as long as the steeping begins within 1 hour of the dragon's death and occurs within the dragon's lair. Steeping in this way can't raise the state of the item beyond the state associated with the dragon's age.",
		"Just as hoard items can grow in power by absorbing the ambient magic of a dragon's hoard, so too can these treasures fall back into slumber. If no creature is attuned to a hoard item and that item isn't in a dragon's hoard, the item decreases in power by one state every 30 days until it is Slumbering."
	].join("\n   "),
	to1stPerson : function (sDescr) {
		return desc(sDescr).replace(/\bf(oo|ee)t\b/ig, "ft")
			.replace(/you are/ig, "I am").replace(/\byou\b/ig, "I")
			.replace(/(by|of|to|for|on) I\b|\bI to|\bI an?\b/ig, "$1 me")
			.replace(/\bI (to|a|an)\b/ig, "me $1")
			.replace(/your/g, "my").replace(/Your/g, "My")
			.replace(/   >>(.*?)( \(.*?\))?<<. /g, function(a, p1, p2) { return "\n   " + p1.toUpperCase() + p2.toLowerCase() + "\n   "; })+
			FToD_HoardItems.hoardMagicItems;
	}
}
FToD_HoardItems.dragonsWrathWeaponCreate();
MagicItemsList["dragon-touched focus"] = {
	name : "Dragon-Touched Focus",
	nameTest : /^(?=.*dragon.touched)(?=.*(focus|rod|wand|staff|scepter|orb|amulet|crystal)).*$/i,
	source : [["FToD", 26]],
	type : "wondrous item",
	attunement : true,
	prerequisite : "Requires attunement by a spellcaster",
	prereqeval : function(v) { return v.isSpellcaster; },
	description : "",
	descriptionFull : FToD_HoardItems["dragon-touched focus"].join("\n   ").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
	toNotesPage : [{
		name : "Full Text",
		note : FToD_HoardItems.to1stPerson(FToD_HoardItems["dragon-touched focus"])
	}],
	allowDuplicates : true,
	choicesNotInMenu : true,
	advantages : [["Initiative", true]],
	choices : ["Slumbering (uncommon)", "Stirring - Chromatic (rare)", "Stirring - Gem (rare)", "Stirring - Metallic (rare)", "Wakened - Chromatic (very rare)",  "Wakened - Gem (very rare)",  "Wakened - Metallic (very rare)", "Ascendant - Chromatic (legendary)", "Ascendant - Gem (legendary)", "Ascendant - Metallic (legendary)"],
	"slumbering (uncommon)" : {
		name : "Dragon-Touched Focus (slumbering)",
		nameTest : /^(?=.*slumbering)(?=.*dragon.touched)(?=.*(focus|rod|wand|staff|scepter|orb|amulet|crystal)).*$/i,
		rarity : "uncommon",
		description : "This wondrous item can be a scepter, an orb, an amulet, a crystal, or another finely crafted object. It typically incorporates imagery of dragons' wings, claws, teeth, or scales. It grants me advantage on initiative rolls. While I am holding the focus, it can function as a spellcasting focus for all my spells."
	},
	"stirring - chromatic (rare)" : {
		name : "Chromatic Dragon-Touched Focus (stirring)",
		nameTest : /^(?=.*chromatic)(?=.*stirring)(?=.*dragon.touched)(?=.*(focus|rod|wand|staff|scepter|orb|amulet|crystal)).*$/i,
		rarity : "rare",
		description : "This ornate object with imagery of chromatic dragon limbs or scales grants me advantage on initiative rolls. While I am holding it, I can use it as my spellcasting focus and when I use a spell slot to cast a spell that deals acid, cold, fire, lightning, or poison damage, I can add +1d6 to one of the spell's damage rolls.",
		calcChanges : FToD_HoardItems.dtf_chromatic.calcChanges
	},
	"stirring - gem (rare)" : {
		name : "Gem Dragon-Touched Focus (stirring)",
		nameTest : /^(?=.*gem)(?=.*stirring)(?=.*dragon.touched)(?=.*(focus|rod|wand|staff|scepter|orb|amulet|crystal)).*$/i,
		rarity : "rare",
		description : "This ornate object with imagery of gem dragon limbs or scales grants me advantage on initiative rolls. While I am holding it, I can use it as my spellcasting focus and when I use a spell slot to cast a spell I can immediately teleport to an unoccupied space I can see within 15 ft."
	},
	"stirring - metallic (rare)" : {
		name : "Metallic Dragon-Touched Focus (stirring)",
		nameTest : /^(?=.*metallic)(?=.*stirring)(?=.*dragon.touched)(?=.*(focus|rod|wand|staff|scepter|orb|amulet|crystal)).*$/i,
		rarity : "rare",
		description : "This ornate object with imagery of metallic dragon limbs or scales grants me advantage on initiative rolls. While I am holding it, I can use it as my spellcasting focus. As a reaction when a creature I can see within 30 ft makes a saving throw, I can grant it advantage on that save.",
		action : [["reaction", "Dragon-Touched Focus (adv. on save)"]]
	},
	"wakened - chromatic (very rare)" : {
		name : "Chromatic Dragon-Touched Focus (wakened)",
		nameTest : /^(?=.*chromatic)(?=.*wakened)(?=.*dragon.touched)(?=.*(focus|rod|wand|staff|scepter|orb|amulet|crystal)).*$/i,
		rarity : "very rare",
		description : "While holding this object, I can use it as my spellcasting focus and I can add +1d6 to one damage roll of spells I cast with a spell slot that deal acid, cold, fire, lightning, or poison damage. It also grants me advantage on initiative and allows me to cast Hold Monster and Rime's Binding Ice each once per dawn.",
		calcChanges : FToD_HoardItems.dtf_chromatic.calcChanges,
		spellcastingAbility : "class",
		spellcastingBonus : FToD_HoardItems.dtf_chromatic.spellcastingBonus,
		extraLimitedFeatures : FToD_HoardItems.dtf_chromatic.extraLimitedFeatures
	},
	"wakened - gem (very rare)" : {
		name : "Gem Dragon-Touched Focus (wakened)",
		nameTest : /^(?=.*gem)(?=.*wakened)(?=.*dragon.touched)(?=.*(focus|rod|wand|staff|scepter|orb|amulet|crystal)).*$/i,
		rarity : "very rare",
		description : "While holding this object, I can use it as my spellcasting focus and I can immediately teleport to an unoccupied space I can see within 15 ft when I cast a spell with a spell slot. It also grants me advantage on initiative and allows me to cast Rary's Telepathic Bond and Raulothim's Psychic Lance each once per dawn.",
		spellcastingAbility : "class",
		spellcastingBonus : FToD_HoardItems.dtf_gem.spellcastingBonus,
		extraLimitedFeatures : FToD_HoardItems.dtf_gem.extraLimitedFeatures
	},
	"wakened - metallic (very rare)" : {
		name : "Metallic Dragon-Touched Focus (wakened)",
		nameTest : /^(?=.*metallic)(?=.*wakened)(?=.*dragon.touched)(?=.*(focus|rod|wand|staff|scepter|orb|amulet|crystal)).*$/i,
		rarity : "very rare",
		description : "While holding this object, I can use it as my spellcasting focus. As a reaction when a creature I can see within 30 ft makes a saving throw, I can grant it advantage on that save. It also grants me advantage on initiative and allows me to cast Fizban's Platinum Shield and Legend Lore each once per dawn.",
		action : [["reaction", "Dragon-Touched Focus (adv. on save)"]],
		spellcastingAbility : "class",
		extraLimitedFeatures : FToD_HoardItems.dtf_metallic.extraLimitedFeatures,
		spellcastingBonus : FToD_HoardItems.dtf_metallic.spellcastingBonus
	},
	"ascendant - chromatic (legendary)" : {
		name : "Chromatic Dragon-Touched Focus (ascendant)",
		nameTest : /^(?=.*chromatic)(?=.*ascendant)(?=.*dragon.touched)(?=.*(focus|rod|wand|staff|scepter|orb|amulet|crystal)).*$/i,
		rarity : "legendary",
		description : "While holding this, I can use it as my spellcasting focus and I can add 1d6 to a roll of acid, cold, fire, lightning, or poison damage for spells I cast with a spell slot. It grants me adv. on initiative and allows me to cast 2 spells once per dawn. Once per dawn, I can treat a spell I cast as if casted with a 9th-level spell slot.",
		calcChanges : FToD_HoardItems.dtf_chromatic.calcChanges,
		spellcastingAbility : "class",
		spellcastingBonus : FToD_HoardItems.dtf_chromatic.spellcastingBonus,
		extraLimitedFeatures : FToD_HoardItems.dtf_ascendant.extraLimitedFeatures.concat(FToD_HoardItems.dtf_chromatic.extraLimitedFeatures)
	},
	"ascendant - gem (legendary)" : {
		name : "Gem Dragon-Touched Focus (ascendant)",
		nameTest : /^(?=.*gem)(?=.*ascendant)(?=.*dragon.touched)(?=.*(focus|rod|wand|staff|scepter|orb|amulet|crystal)).*$/i,
		rarity : "legendary",
		description : "While holding this, I can use it as my spellcasting focus and I can teleport to an empty space I can see in 15 ft when I cast a spell with a spell slot. It also grants me adv. on initiative and allows me to cast 2 spells each once per dawn. Once per dawn, I can treat a spell I cast as if casted with a 9th-level spell slot.",
		spellcastingAbility : "class",
		spellcastingBonus : FToD_HoardItems.dtf_gem.spellcastingBonus,
		extraLimitedFeatures : FToD_HoardItems.dtf_ascendant.extraLimitedFeatures.concat(FToD_HoardItems.dtf_gem.extraLimitedFeatures)
	},
	"ascendant - metallic (legendary)" : {
		name : "Metallic Dragon-Touched Focus (ascendant)",
		nameTest : /^(?=.*metallic)(?=.*ascendant)(?=.*dragon.touched)(?=.*(focus|rod|wand|staff|scepter|orb|amulet|crystal)).*$/i,
		rarity : "legendary",
		description : "While holding this, I can use it as my spellcasting focus. As a reaction when a creature I can see in 30 ft makes a save, I can grant it adv. on that save. It also grants me adv. on initiative and allows me to cast 2 spells each once per dawn. Once per dawn, I can treat a spell I cast as if casted with a 9th-level spell slot.",
		action : [["reaction", "Dragon-Touched Focus (adv. on save)"]],
		spellcastingAbility : "class",
		extraLimitedFeatures : FToD_HoardItems.dtf_metallic.extraLimitedFeatures,
		spellcastingBonus : FToD_HoardItems.dtf_ascendant.extraLimitedFeatures.concat(FToD_HoardItems.dtf_metallic.spellcastingBonus)
	}
}
MagicItemsList["dragon vessel"] = {
	name : "Dragon Vessel",
	source : [["FToD", 27]],
	type : "wondrous item",
	attunement : true,
	description : "As a bonus action once per dawn, if this magical container is empty, I can speak the command word to fill the vessel with one liquid of my choice. The list of options depends on the level and rarity of the item.",
	descriptionFull : FToD_HoardItems["dragon vessel"].join("\n   ").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
	toNotesPage : [{
		name : "Full Text",
		note : FToD_HoardItems.to1stPerson(FToD_HoardItems["dragon vessel"])
	}],
	action : [["bonus action", ""]],
	usages : 1,
	recovery : "dawn",
	allowDuplicates : true,
	choicesNotInMenu : true,
	choices : ["Slumbering (uncommon)", "Stirring (rare)", "Wakened (very rare)", "Ascendant (legendary)"],
	"slumbering (uncommon)" : {
		name : "Dragon Vessel (slumbering)",
		rarity : "uncommon",
		description : "As a bonus action once per dawn, if this magical container is empty, I can speak the command word to fill the vessel with one of the following of my choice:  ale, olive oil, a potion of healing, or a potion of climbing. A potion loses its magic if it is not consumed within 24 hours."
	},
	"stirring (rare)" : {
		name : "Dragon Vessel (stirring)",
		rarity : "rare",
		description : "As a bonus action once per dawn, if this magical container is empty, I can speak the command word to fill the vessel with one of the following of my choice:  ale, mead, olive oil, a potion of healing (normal or greater), or a potion of climbing. A potion loses its magic if it is not consumed within 24 hours."
	},
	"wakened (very rare)" : {
		name : "Dragon Vessel (wakened)",
		rarity : "very rare",
		description : "As a bonus action once per dawn, if this magical container is empty, I can speak the command word to fill it with one of the following of my choice:  ale, mead, wine, olive oil, a potion of healing (normal, greater, or superior), a potion of climbing, or a potion of flying. Unused potions lose their magic after 24 hours."
	},
	"ascendant (legendary)" : {
		name : "Dragon Vessel (ascendant)",
		rarity : "legendary",
		description : "As a bonus action once per dawn, I can speak the command word to fill this empty vessel with one of my choice:  ale, mead, wine, whiskey, olive oil, a potion of healing (normal, greater, superior, or supreme), a potion of climbing, a potion of flying, or a potion of dragon's majesty. Potions lose magic after 24 hours."
	}
}
MagicItemsList["scaled ornament"] = function (n) {
	var obj = {
		name : "Scaled Ornament",
		source : [["FToD", 27]],
		type : "wondrous item",
		attunement : true,
		description : "This ornament can be jewelry, a cloak, or another wearable accessory. It appears to be fashioned from a dragon's scale, tooth, or claw, or it incorporates images in those shapes.",
		descriptionFull : FToD_HoardItems["scaled ornament"].join("\n   ").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
		toNotesPage : [{
			name : "Full Text",
			note : FToD_HoardItems.to1stPerson(FToD_HoardItems["scaled ornament"])
		}],
		allowDuplicates : true,
		choicesNotInMenu : true,
		choices : ["Slumbering (uncommon)", "Stirring (rare)"],
		"slumbering (uncommon)" : {
			name : "Scaled Ornament (slumbering)",
			rarity : "uncommon",
			description : "This ornament can be jewelry, a cloak, or another wearable accessory. It appears to be fashioned from a dragon's scale, tooth, or claw, or it incorporates images in those shapes. It grants me advantage on saving throws to avoid being charmed or frightened and to end those conditions on myself.",
			savetxt : { adv_vs : ["charmed", "frightened"] }
		},
		"stirring (rare)" : {
			name : "Scaled Ornament (stirring)",
			rarity : "rare",
			description : "This ornament is fashioned from a dragon's scale, tooth, or claw, or it incorporates images in those shapes. It makes me immune to being charmed or frightened and grants my allies within 30 ft advantage on saves to avoid or end those conditions on themselves. It also gives me a +1 bonus to my AC.",
			savetxt : { immune : ["charmed", "frightened"] },
			extraAC : [{
				mod : 1,
				name : "Scaled Ornament",
				magic : true,
				text : "I gain a +1 bonus to AC while I'm attuned to the scaled ornament."
			}]
		},
		"wakened (very rare)" : {
			name : "Scaled Ornament (wakened)",
			rarity : "very rare",
			description : ""
		},
		"ascendant (legendary)" : {
			name : "Scaled Ornament (ascendant)",
			rarity : "legendary",
			description : ""
		}
	};
	var aDragons = [["black", "acid"], ["blue", "lightning"], ["green", "poison"], ["red", "fire"], ["white", "cold"], ["amethyst", "force"], ["crystal", "radiant"], ["emerald", "psychic"], ["sapphire", "thunder"], ["topaz", "necrotic"], ["brass", "fire"], ["bronze", "lightning"], ["copper", "acid"], ["gold", "fire"], ["silver", "cold"]];
	var aChoicesNew = [[], []];
	for (var i = 0; i < aDragons.length; i++) {
		var sDragon = aDragons[i][0];
		var sDmg = aDragons[i][1];
		var sWakenedChoice = "Wakened - " + sDragon + " dragon - " + sDmg + " (very rare)";
		var sWakenedChoiceLC = sWakenedChoice.toLowerCase();
		var sWakenedName = "Scaled Ornament (" + sDragon + ", wakened)";
		var sAscendantChoice = "Ascendant - " + sDragon + " dragon - " + sDmg + " (very rare)";
		var sAscendantChoiceLC = sAscendantChoice.toLowerCase();
		var sAscendantName = "Scaled Ornament (" + sDragon + ", ascendant)";
		aChoicesNew[0].push(sWakenedChoice);
		aChoicesNew[1].push(sAscendantChoice);
		obj[sWakenedChoiceLC] = {
			name : sWakenedName,
			rarity : "very rare",
			description : "This wearable accessory makes me immune to being charmed or frightened and grants my allies within 30 ft adv. on saves vs. those conditions. It also gives me a +1 bonus to my AC. As a reaction once per dawn when I take " + sDmg + " damage, I can ignore that damage and heal for the same amount instead.",
			savetxt : obj["stirring (rare)"].savetxt,
			extraAC : obj["stirring (rare)"].extraAC,
			extraLimitedFeatures : [{
				name : "Scaled Ornament (absorb " + sDmg + ")",
				usages : 1,
				recovery : "dawn"
			}],
			action : [["reaction", "Scaled Ornament (absorb " + sDmg + ")"]],
		}
		obj[sAscendantChoiceLC] = newObj(obj[sWakenedChoiceLC]);
		obj[sAscendantChoiceLC].name = sAscendantName;
		obj[sAscendantChoiceLC].rarity = "legendary";
		obj[sAscendantChoiceLC].description = "This makes me immune to being charmed or frightened and my allies in 30 ft gain adv. on saves vs. those conditions. It also gives me +1 bonus to AC, a flying speed equal to my walking speed, and I can hover. As a reaction once per dawn when I take " + sDmg + " damage, I can ignore it and instead heal that amount.";
		obj[sAscendantChoiceLC].speed = { fly : { spd : "walk", enc : "walk" } }
	}
	obj.choices = obj.choices.concat(aChoicesNew[0]).concat(aChoicesNew[1]);
	return obj;
}();

// Creatures
CreatureList["giant canary"] = {
	name : "Giant Canary",
	nameAlt : ["Canary, Giant"],
	source : [["FToD", 23]],
	size : 2,
	type : "Beast",
	alignment : "Unaligned",
	ac : 12,
	hp : 26,
	hd : [4, 10],
	speed : "30 ft, fly 60 ft",
	scores : [10, 14, 12, 2, 10, 6],
	damage_immunities : "poison, psychic",
	condition_immunities : "blinded, charmed, deafened, exhaustion, frightened, paralyzed, petrified, poisoned",
	senses : "Blindsight 60 ft (blind beyond this radius)",
	passivePerception : 10,
	challengeRating : "1/2",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Peck",
		ability : 2,
		damage : [1, 10, "piercing"],
		range : "Melee (5 ft)",
		description : ""
	}]
};
