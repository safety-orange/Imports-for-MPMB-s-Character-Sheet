var iFileName = "pub_20211019_FToD.js";
RequiredSheetVersion("13.0.8");
// This file adds all the player-material from Fizban's Treasury of Dragons to MPMB's Character Record Sheet that has been released until now (2021-09-28)

// Define the source
SourceList.FToD = {
	name: "Fizban's Treasury of Dragons",
	abbreviation: "FToD",
	group: "Primary Sources",
	url: "https://dnd.wizards.com/products/treasury-dragons",
	date: "2021/10/19"
};

// New Races
var FToD_dragonborns_add = function () { // New dragonborn variants
	var objDragonborns = {
/*
		Chromatic : {
			regExpSearch : /^(?=.*chromatic)(?=.*dragonborn).*$/i,
			source : [["UA:DO", 2]],
			variants : [["Black", "Acid"], ["Blue", "Lightning"], ["Green", "Poison"], ["Red", "Fire"], ["White", "Cold"]],
			breathWeaponShape : "5-ft by 30-ft line",
			trait : desc([
				">>TYPE<< Breath Weapon: When I take the Attack action, I can replace one attack with a breath weapon that deals 1d10 >>type<< damage to all in a 5-ft by 30-ft line, Dex save halves (DC 8 + Con mod + Proficiency Bonus). I can do this my Proficiency Bonus per long rest. The damage increases to 2d10 at 5th level, 3d10 at 11th level, and 4d10 at 17th level.",
				"Chromatic Warding: From 3rd level, I can protect myself using my draconic energies. As an action once per long rest, I can become immune to >>type<< damage for 10 minutes."
			], "\n \u2022 "),
			features : {
				"chromatic warding" : {
					name: "Chromatic Warding",
					source : [["UA:DO", 2]],
					minlevel: 3,
					usages: 1,
					recovery: "long rest",
					action : [["action", ""]]
				}
			}
		},
*/
		Metallic : {
			regExpSearch : /^(?=.*metallic)(?=.*dragonborn).*$/i,
			source : [["FToD", 0]],
			variants : [["Brass", "Fire"], ["Bronze", "Lightning"], ["Copper", "Acid"], ["Gold", "Fire"], ["Silver", "Cold"]],
			breathWeaponShape : "15-ft cone",
			trait : desc([
				">>TYPE<< Breath Weapon: When I take the Attack action, I can replace one attack with a breath weapon that deals 1d10 >>type<< damage to all in a 15-ft cone, Dex save halves (DC 8 + Con mod + Proficiency Bonus). I can do this my Proficiency Bonus per long rest.",
				"Metallic Breath Weapon: At 3rd level I gain a second breath weapon once per long rest, that works just like the first, but I choose the effect when I use it: Enervating: Con save or incapacitated until my next turn starts. Repulsion: Str save or pushed 20 ft and prone."
			], "\n \u2022 "),
			features : {
				"metallic breath weapon" : {
					name: "Metallic Breath Weapon",
					source : [["UA:DO", 3]],
					minlevel: 3,
					usages: 1,
					recovery: "long rest",
					weaponsAdd : ["Metallic Breath Weapon"],
					weaponOptions: [{
						regExpSearch : /^(?=.*metallic)(?=.*breath)(?=.*weapon).*$/i,
						name : "Metallic breath weapon",
						source : [["UA:DO", 3]],
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
		},
/*
		Gem : {
			regExpSearch : /^(?=.*gem)(?=.*dragonborn).*$/i,
			source : [["UA:DO", 3]],
			variants : [["Amethyst", "Force"], ["Crystal", "Radiant"], ["Emerald", "Psychic"], ["Sapphire", "Thunder"], ["Topaz", "Necrotic"]],
			breathWeaponShape : "15-ft cone",
			trait : desc([
				">>TYPE<< Breath Weapon: When I take the Attack action, I can replace one attack with a breath weapon that deals 1d10 >>type<< damage to all in a 15-ft cone, Dex save halves (DC 8 + Con mod + Proficiency Bonus). I can do this my Proficiency Bonus per long rest.",
				"Psionic Mind: I can speak telepathically to " + (typePF ? "any creature I can see within 30 ft that understands a language  but it can't respond." : "a creature with a language I can see in 30 ft."),
				"Gem Flight: From 3rd level, I can temporarily fly. As a bonus action once per long rest, I can gain a flying speed equal to my walking speed and can hover. This lasts for 1 minute."
			], "\n \u2022 "),
			features : {
				"gem flight" : {
					name: "Gem Flight",
					source : [["UA:DO", 3]],
					minlevel: 3,
					usages: 1,
					recovery: "long rest"
				}
			}
		}
*/
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
			languageProfs : ["Common", 1],
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
			scorestxt : "+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice",
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

// New Subclasses
var FToD_Ranger_Subclass_Drakewarden = AddSubClass("ranger", "drakewarden", {
	regExpSearch : /^(?=.*(drake|dragon|draconic))(?=.*(warden|ranger|trainer)).*$/i,
	subname : "Drakewarden",
	source : [["FToD", 0]],
	fullname : "Drakewarden",
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	features : {
		"subclassfeature3" : {
			name : "Draconic Gift",
			source : [["FToD", 0]],
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
			source : [["FToD", 0]],
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
				source : [["FToD", 0]],
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
					description : "The drake obeys the commands of its warden and shares its proficiency bonus. It takes its turn immediately after that of its warden, on the same initiative. It can move and take reactions on its own, but only takes the Dodge action on its turn unless its warden takes a bonus action to command it to take another action. If its warden is incapacitated, the beast can take any action, not just Dodge. The drake vanishes after a number of hours equal to its proficiency bonus, when it is reduced to 0 hit points, when its warden summons another drake, or when its warden dies."
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
			source : [["FToD", 0]],
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
			source : [["FToD", 0]],
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
				source : [["FToD", 0]],
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
			source : [["FToD", 0]],
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
	ClassList.rangerua.subclasses[1].push(FToD_Ranger_Subclass_Drakewarden);
};
