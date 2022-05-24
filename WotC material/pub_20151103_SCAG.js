var iFileName = "pub_20151103_SCAG.js";
RequiredSheetVersion("13.0.8");
// This file adds all the player-material from Sword Coast Adventure Guide to MPMB's Character Record Sheet

// Define the source
SourceList.S={
	name : "Sword Coast Adventure Guide",
	abbreviation : "SCAG",
	group : "Primary Sources",
	campaignSetting : "Forgotten Realms",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/sc-adventurers-guide",
	date : "2015/11/03"
};

// Races
RaceList["ghostwise halfling"] = {
	regExpSearch : /^(?=.*\b(halflings?|hobbits?)\b)(?=.*ghostwise).*$/i,
	name : "Ghostwise halfling",
	sortname : "Halfling, Ghostwise",
	plural : "Ghostwise halflings",
	source : ["S", 110],
	size : 4,
	speed : {
		walk : { spd : 25, enc : 15 }
	},
	languageProfs : ["Common", "Halfling"],
	savetxt : { adv_vs : ["frightened"] },
	age : " reach adulthood at age 20 and live around 150 years",
	height : " average about 3 feet tall (2'7\" + 2d4\")",
	weight : " weigh around 40 lb (35 + 2d4 lb)",
	heightMetric : " average about 90 cm tall (80 + 5d4)",
	weightMetric : " weigh around 18 kg (16 + 5d4 / 10 kg)",
	scores : [0, 2, 0, 0, 1, 0],
	trait : "Ghostwise Halfling (+2 Dexterity, +1 Wisdom)" + (typePF ? "\n" : " ") + "\nLucky: When I roll a 1 on an attack roll, ability check, or saving throw, I can reroll the die and must use the new roll." + (typePF ? "\n" : " ") + "\nHalfling Nimbleness: I can move through the space of any creature that is of a size larger than me." + (typePF ? "\n" : " ") + "\nSilent Speech: I can speak telepathically to any one creature within 30 feet of me. It only understands me if we share a language."
};
RaceList["gray dwarf"] = {
	regExpSearch : /^((?=.*\bduergars?\b)|((?=.*\b(dwarfs?|dwarves|dwarfish|dwarvish|dwarven)\b)(?=.*\b(grey|gray|underdark)\b))).*$/i,
	name : "Duergar",
	sortname : "Dwarf, Gray (Duergar)",
	source : [["S", 104], ["MToF", 81]],
	plural : "Duergar",
	size : 3,
	speed : {
		walk : { spd : 25, enc : 25 }
	},
	languageProfs : ["Common", "Dwarvish", "Undercommon"],
	vision : [["Darkvision", 120], ["Sunlight Sensitivity", 0]],
	savetxt : { adv_vs : ["charmed", "illusions", "paralyzed", "poison"] },
	dmgres : ["Poison"],
	weaponProfs : [false, false, ["battleaxe", "handaxe", "warhammer", "light hammer"]],
	toolProfs : [["Smith, brewer, or mason tools", 1]],
	age : " are considered young until they are 50 and live about 350 years",
	height : " stand between 4 and 5 feet tall (3'8\" + 2d4\")",
	weight : " weigh around 150 lb (115 + 2d4 \xD7 2d6 lb)",
	heightMetric : " stand between 1,2 and 1,5 metres tall (110 + 5d4 cm)",
	weightMetric : " weigh around 70 kg (55 + 5d4 \xD7 4d6 / 10 kg)",
	scores : [1, 0, 2, 0, 0, 0],
	trait : "Duergar (+2 Constitution, +1 Strength)\nStonecunning: Whenever I make an Int (History) check related to the origin of stonework, I am considered proficient in the skill and add double my proficiency bonus to the check.\nSunlight Sensitivity: Disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight when I or what I am trying to attack/perceive is in direct sunlight.\nDuergar Magic: 3rd: Enlarge/Reduce to enlarge; 5th: Invisibility. If not in direct sunlight," + (!typePF ? "\n" : " ") + "I can cast both spells on myself once per long rest without material components, using Int.",
	spellcastingAbility : 4,
	features : {
		"enlarge" : {
			name : "Duergar Magic (level 3)",
			limfeaname : "Enlarge (self only)",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Duergar Magic (level 3)",
				spells : ["enlarge/reduce"],
				selection : ["enlarge/reduce"],
				firstCol : 'oncelr'
			},
			spellChanges : {
				"enlarge/reduce" : {
					name : "Enlarge",
					range : "Self",
					components : "V,S",
					compMaterial : "",
					description : "I'm enlarged, adv. on Str checks/aves and +1d4 on weapon dmg; Can't cast this in direct sunlight",
					changes : "Using Duergar Magic, I cast Enlarge/Reduce while I'm not in direct sunlight, but only to enlarge myself."
				}
			}
		},
		"invisibility" : {
			name : "Duergar Magic (level 5)",
			limfeaname : "Invisibility (self only)",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Duergar Magic (level 5)",
				spells : ["invisibility"],
				selection : ["invisibility"],
				firstCol : 'oncelr'
			},
			spellChanges : {
				"invisibility" : {
					range : "Self",
					components : "V,S",
					compMaterial : "",
					description : "Me and my worn/carried invisible until I attack or cast; Can't cast this spell in direct sunlight",
					changes : "Using Duergar Magic, I can cast Invisibility while I'm not in direct sunlight, but only on myself."
				}
			}
		}
	}
};
// [dupl_start] Reprint from Elemental Evil Player's Companion
if (!RaceList["deep gnome"]) {
	RaceList["deep gnome"] = {
		regExpSearch : /^((?=.*svirfneblin)|((?=.*\bgnomes?\b)(?=.*\b(underdarks?|deep|depths?)\b))).*$/i,
		name : "Svirfneblin",
		sortname : "Gnome, Deep (Svirfneblin)",
		source : [["E", 7], ["S", 115], ["MToF", 113]],
		plural : "Svirfneblin",
		size : 4,
		speed : {
			walk : { spd : 25, enc : 15 }
		},
		languageProfs : ["Common", "Gnomish", "Undercommon"],
		vision : [["Darkvision", 120]],
		savetxt : { text : ["Adv. on Int/Wis/Cha saves vs. magic"] },
		age : " are considered full-grown adults when they reach 25 and live 200 to 250 years",
		height : " stand between 3 and 3 1/2 feet tall (2'9\" + 2d4\")",
		weight : " weigh around 90 lb (80 + 2d4 \xD7 1d4 lb)",
		heightMetric : " stand between 90 and 105 cm tall (85 + 5d4 cm)",
		weightMetric : " weigh around 50 kg (35 + 5d4 \xD7 4d4 / 10 kg)",
		scores : [0, 1, 0, 2, 0, 0],
		trait : "Svirfneblin (+1 Dexterity, +2 Intelligence)\n\nStone Camouflage:\n   I have advantage on Dexterity (stealth) checks to hide in rocky terrain."
	};
} // dupl_end

// Racial variants
AddRacialVariant("half-elf", "aquatic", {
	regExpSearch : /aquatic/i,
	name : "Half-aquatic elf",
	source : ["S", 116],
	plural : "Half-aquatic elves",
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : 30, enc : 20 }
	},
	skillstxt : "",
	trait : "Half-Aquatic Elf (+2 Charisma and +1 to two other ability scores of my choice)\n\nSwimming Speed:\n   My aquatic heritage gives me a swimming speed of 30 feet."
});
AddRacialVariant("half-elf", "cantrip", {
	regExpSearch : /cantrip/i,
	name : "Half-high elf",
	source : ["S", 116],
	plural : "Half-high elves",
	skillstxt : "",
	trait : "Half-High Elf (+2 Charisma and +1 to two other ability scores of my choice)\n\nCantrip:\n   I know one cantrip of my choice from the wizard spell list.\n   Intelligence is my spellcasting ability for it.",
	spellcastingAbility : 4,
	spellcastingBonus : {
		name : "High Elf Cantrip",
		"class" : "wizard",
		level : [0, 0],
		firstCol : 'atwill'
	}
});
AddRacialVariant("half-elf", "drow magic", {
	regExpSearch : /^(?=.*drow)(?=.*magic).*$/i,
	name : "Half-drow",
	source : ["S", 116],
	plural : "Half-drow",
	skillstxt : "",
	trait : "Half-drow (+2 Charisma and +1 to two other ability scores of my choice)\n\nDrow Magic:\n   I know the Dancing Lights cantrip.\n   Once I reach 3rd level, I can cast the Faerie Fire spell once per long rest.\n   Once I reach 5th level, I can also cast the Darkness spell once per long rest.\n   Charisma is my spellcasting ability for these spells.",
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Drow Magic (level 1)",
		spells : ["dancing lights"],
		selection : ["dancing lights"],
		firstCol : 'atwill'
	},
	features : {
		"faerie fire" : {
			name : "Drow Magic (level 3)",
			limfeaname : "Faerie Fire",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Drow Magic (level 3)",
				spells : ["faerie fire"],
				selection : ["faerie fire"],
				firstCol : 'oncelr'
			}
		},
		"darkness" : {
			name : "Drow Magic (level 5)",
			limfeaname : "Darkness",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Drow Magic (level 5)",
				spells : ["darkness"],
				selection : ["darkness"],
				firstCol : 'oncelr'
			}
		}
	}
});
AddRacialVariant("half-elf", "elf weapon training", {
	regExpSearch : /^(?=.*\b(elf|elven)\b)(?=.*weapon)(?=.*training).*$/i,
	source : ["S", 116],
	skillstxt : "",
	trait : "Half-Elf (+2 Charisma and +1 to two other ability scores of my choice)",
	weaponProfs : [false, false, ["longsword", "shortsword", "longbow", "shortbow"]]
});
AddRacialVariant("half-elf", "fleet of foot", {
	regExpSearch : /^(?=.*fleet)(?=.*\b(foot|feet)\b).*$/i,
	name : "Half-wood elf",
	source : ["S", 116],
	plural : "Half-wood elves",
	speed : {
		walk : { spd : 35, enc : 25 }
	},
	skillstxt : "",
	trait : "Half-Wood Elf (+2 Charisma and +1 to two other ability scores of my choice)"
});
AddRacialVariant("half-elf", "mask of the wild", {
	regExpSearch : /^(?=.*\bmasks?\b)(?=.*\bwilds?\b).*$/i,
	name : "Half-wood elf",
	source : ["S", 116],
	plural : "Half-wood elves",
	skillstxt : "",
	trait : "Half-Wood Elf (+2 Charisma and +1 to two other ability scores of my choice)\n\nMask of the Wild:\n   I can attempt to hide even when I am only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena."
});
AddRacialVariant("tiefling", "devil's tongue", {
	regExpSearch : /^(?=.*devil)(?=.*tongue).*$/i,
	name : "Devil's tongue tiefling",
	source : ["S", 118],
	plural : "Devil's tongue tieflings",
	trait : "Devil's Tongue Tiefling (+1 Intelligence, +2 Charisma)\n\nDevil's Tongue:\n   I know the Vicious Mockery cantrip.\n   At 3rd level, I can cast the Charm Person spell once per long rest as a 2nd-level spell.\n   At 5th level, I can also cast the Enthrall spell once per long rest.\n   Charisma is my spellcasting ability for these spells.",
	spellcastingBonus : {
		name : "Devil's Tongue (level 1)",
		spells : ["vicious mockery"],
		selection : ["vicious mockery"],
		firstCol : 'atwill'
	},
	features : {
		"charm person" : {
			name : "Devil's Tongue (level 3)",
			limfeaname : "Charm Person (2 targets)",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Devil's Tongue (level 3)",
				spells : ["charm person"],
				selection : ["charm person"],
				firstCol : 'oncelr'
			},
			spellChanges : {
				"charm person" : {
					description : "2 humanoids, max 30 ft apart, save or charmed; advantage on save if I or my allies are fighting it",
					changes : "Using Devil's Tongue, I cast Charm Person as if I'm using a 2nd-level spell slot, affecting 2 humanoids."
				}
			}
		},
		"enthrall" : {
			name : "Devil's Tongue (level 5)",
			limfeaname : "Enthrall",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Devil's Tongue (level 5)",
				spells : ["enthrall"],
				selection : ["enthrall"],
				firstCol : 'oncelr'
			}
		}
	}
});
AddRacialVariant("tiefling", "hellfire", {
	regExpSearch : /hellfire/i,
	name : "Hellfire tiefling",
	source : ["S", 118],
	plural : "Hellfire tieflings",
	trait : "Hellfire Tiefling (+1 Intelligence, +2 Charisma)\n\nInfernal Legacy (Hellfire):\n   I know the Thaumaturgy cantrip.\n   At 3rd level, I can cast the Burning Hands spell once per long rest as a 2nd-level spell.\n   At 5th level, I can also cast the Darkness spell once per long rest.\n   Charisma is my spellcasting ability for these spells.",
	features : {
		"burning hands" : {
			name : "Hellfire Legacy (level 3)",
			limfeaname : "Burning Hands (4d6)",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Hellfire Legacy (level 3)",
				spells : ["burning hands"],
				selection : ["burning hands"],
				firstCol : 'oncelr'
			},
			spellChanges : {
				"burning hands" : {
					description : "4d6 Fire damage; save halves; unattended flammable objects ignite",
					changes : "Using Hellfire Legacy, I cast Burning Hands as if I'm using a 2nd-level spell slot, doing 4d6 Fire damage."
				}
			}
		},
		"darkness" : {
			name : "Hellfire Legacy (level 5)",
			limfeaname : "Darkness",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Infernal Legacy (level 5)",
				spells : ["darkness"],
				selection : ["darkness"],
				firstCol : 'oncelr'
			}
		}
	}
});
AddRacialVariant("tiefling", "winged", {
	regExpSearch : /wing/i,
	name : "Winged tiefling",
	source : [["S", 118]],
	plural : "Winged tieflings",
	speed : {
		walk : { spd : 30, enc : 20 },
		fly : { spd : 30, enc : 0 }
	},
	trait : "Winged Tiefling (+1 Intelligence, +2 Charisma)\n\nWings:\n   I have bat-like wings sprouting from my shoulder blades that give me flying speed of 30 feet when I'm not wearing heavy armor.",
	features : "",
	spellcastingAbility : "",
	spellcastingBonus : ""
});
RunFunctionAtEnd(function() {
	if (!RaceList.tiefling) return;
	var tRace = {
		objname : "feral tiefling",
		replaceTraitTxt : ["+1 Intelligence, +2 Charisma", "+2 Dexterity, +1 Intelligence"],
		replaceNameTxt : ["tiefling", "feral tiefling"],
		regExpSearch : /^(?=.*feral)((?=.*tiefling)|(?=.*planetouched)(?=.*(hell|abyss|fiend|devil))).*$/i,
		name : "Feral tiefling",
		sortname : "Tiefling, Feral",
		source : ["S", 118],
		plural : "Feral tieflings",
		scores : [0, 2, 0, 1, 0, 0],
		trait : "Feral Tiefling (+2 Dexterity, +1 Intelligence)\n\nInfernal Legacy:\n   I know the Thaumaturgy cantrip.\n   At 3rd level, I can cast the Hellish Rebuke spell once per long rest as a 2nd-level spell.\n   At 5th level, I can also cast the Darkness spell once per long rest.\n   Charisma is my spellcasting ability for these spells."
	};
	// Create the RaceList entry
	RaceList[tRace.objname] = newObj(RaceList.tiefling);
	for (var rFea in tRace) {
		if ((/objname|replaceTraitTxt|replaceNameTxt/).test(rFea)) continue;
		RaceList[tRace.objname][rFea] = tRace[rFea];
	};
	// Create feral tiefling variants
	RaceList[tRace.objname].variants.forEach( function(nVar) {
		RaceSubList[tRace.objname + "-" + nVar] = newObj(RaceSubList["tiefling-" + nVar]);
		var thisVar = RaceSubList[tRace.objname + "-" + nVar];
		thisVar.trait = thisVar.trait.replace(tRace.replaceTraitTxt[0], tRace.replaceTraitTxt[1]);
		thisVar.trait = thisVar.trait.replace(tRace.replaceNameTxt[0].capitalize(), tRace.replaceNameTxt[1].capitalize());
		thisVar.name = thisVar.name.replace(tRace.replaceNameTxt[0], tRace.replaceNameTxt[1]);
		thisVar.plural = thisVar.plural.replace(tRace.replaceNameTxt[0], tRace.replaceNameTxt[1]);
	});
});

// Subclasses
AddSubClass("barbarian", "battlerager", {
	regExpSearch : /(battlerager|kuldjargh)/i,
	subname : "Path of the Battlerager",
	fullname : "Battlerager",
	source : ["S", 121],
	abilitySave : 6,
	features : {
		"subclassfeature3" : {
			name : "Battlerager Armor",
			source : ["S", 121],
			minlevel : 3,
			description : desc([
				"I gain proficiency with spiked armor both as an armor and as a weapon",
				"As a bonus action while raging, I can attack once with my armor spikes",
				"With my spiked armor I do 3 piercing damage when I use my Attack action to grapple"
			]),
			action : ["bonus action", "Armor Spikes attack (in rage)"],
			armorOptions : {
				regExpSearch : /^(?!.*(dragon|draconic|beast))(?=.*spike(d|s))(?=.*armou?r).*$/i,
				name : "Spiked armor",
				source : ["S", 121],
				type : "medium",
				ac : 14,
				stealthdis : true,
				weight : 45
			},
			weaponOptions : {
				regExpSearch : /^(?=.*armou?r)(?=.*spike).*$/i,
				name : "Armor spikes",
				source : ["S", 121],
				ability : 1,
				type : "armor spikes",
				damage : [1, 4, "piercing"],
				range : "Melee",
				description : "Does 3 piercing damage when grappling during my Attack action",
				abilitytodamage : true
			},
			weaponProfs : [false, false, ["armor spikes"]],
			weaponsAdd : ['Armor Spikes'],
			eval : function() {
				AddString('Proficiency Armor Other Description', 'Spiked Armor', ', ');
			},
			removeeval : function () {
				RemoveString('Proficiency Armor Other Description', 'Spiked Armor');
			}
		},
		"subclassfeature6" : {
			name : "Reckless Abandon",
			source : ["S", 121],
			minlevel : 6,
			description : "\n   " + "If I use Reckless Attack during rage, I also gain temporary HP equal to my Con mod"
		},
		"subclassfeature10" : {
			name : "Battlerager Charge",
			source : ["S", 121],
			minlevel : 10,
			description : "\n   " + "As a bonus action while raging, I can use the Dash action",
			action : ["bonus action", " (in rage)"]
		},
		"subclassfeature14" : {
			name : "Spiked Retribution",
			source : ["S", 121],
			minlevel : 14,
			description : "\n   " + "When I'm hit in melee by an attacker within 5 ft, it takes 3 piercing damage" + "\n   " + "This only works while I'm wearing spiked armor, in rage, and I'm not incapacitated"
		}
	}
});
AddSubClass("cleric", "arcana domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(arcana|magic|wizardry)).*$/i,
	subname : "Arcana Domain",
	source : ["S", 125],
	spellcastingExtra : ["detect magic", "magic missile", "magic weapon", "nystul's magic aura", "dispel magic", "magic circle", "arcane eye", "leomund's secret chest", "planar binding", "teleportation circle"],
	features : {
		"subclassfeature1" : {
			name : "Arcane Initiate",
			source : ["S", 125],
			minlevel : 1,
			description : "\n   " + "I gain proficiency with Arcana and two wizard cantrips that count as cleric cantrips",
			skills : ["Arcana"],
			spellcastingBonus : {
				name : "Arcane Initiate",
				"class" : "wizard",
				level : [0, 0],
				times : 2
			}
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Arcane Abjuration",
			source : ["S", 125],
			minlevel : 2,
			description : "\n   " + "As an action, one celestial, elemental, fey, or fiend within 30 ft must make a Wis save" + "\n   " + "If it fails and is able to see/hear me, it is turned for 1 min or until it takes damage" + "\n   " + "Turned: move away, never within 30 ft of me, no reactions or actions other than Dash" + "\n   " + "Turned: may Dodge instead of Dash when nowhere to move and unable to escape bonds" + "\n   " + "If its CR is low enough and it is not on its home plane, it is banished for 1 min instead" + "\n   " + "Banished: sent to home plane, reappearing where it was if the effect ends before 1 min",
			additional : ["", "", "", "", "CR 1/2 or lower", "CR 1/2 or lower", "CR 1/2 or lower", "CR 1 or lower", "CR 1 or lower", "CR 1 or lower", "CR 2 or lower", "CR 2 or lower", "CR 2 or lower", "CR 3 or lower", "CR 3 or lower", "CR 3 or lower", "CR 4 or lower", "CR 4 or lower", "CR 4 or lower", "CR 4 or lower"],
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Spell Breaker",
			source : ["S", 126],
			minlevel : 6,
			description : "\n   " + "When I restore HP to an ally with a 1st-level or higher spell, I can also end one spell" + "\n   " + "The chosen spell on the ally ends if it is equal or lower level to the spell slot level used",
			calcChanges : {
				spellAdd : [
					function (spellKey, spellObj, spName) {							
						var startDescr = spellObj.description;
						switch (spellKey) {
							case "mass heal" :
								spellObj.description = "Heal 700 hp, split over crea in range; also cures blindness, deafness, and all diseases; spell breaker";
								break;
							case "power word heal" :
								spellObj.description = spellObj.description.replace(/heals all.*/i, "full hp; no longer charmed, frightened, paralyzed, stunned; can stand up as rea; spell breaker");
								break;
							case "goodberry" :
								spellObj.description = spellObj.description.replace("Create ", "").replace("lose potency after ", "remain");
							case "regenerate" :
								spellObj.description = spellObj.description.replace(" for rest of duration", "");
							case "heal" :
								spellObj.description = spellObj.description.replace("all diseases", "diseases");
							case "cure wounds" :
							case "healing word" :
							case "life transference" :
							case "mass cure wounds" :
							case "mass healing word" :
							case "prayer of healing" :
								spellObj.description = spellObj.description.replace(/creatures?/i, "crea").replace("within", "in").replace("spellcasting ability modifier", "spellcasting ability mod") + "; spell breaker";
						}
						return startDescr !== spellObj.description;
					},
					"When I cast a spell that restores hit points to another creature than myself, I can also end a spell affecting the target. This spell can be of the same level of the spell slot used to cast the healing spell, or lower."
				]
			}
		},
		"subclassfeature8" : {
			name : "Potent Spellcasting",
			source : ["S", 126],
			minlevel : 8,
			description : "\n   " + "I add my Wisdom modifier to the damage I deal with my cleric cantrips",
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
						return genericSpellDmgEdit(spellKey, spellObj, "\\w+\\.?", "Wis");
					},
					"My cleric cantrips get my Wisdom modifier added to their damage."
				]
			}
		},
		"subclassfeature17" : {
			name : "Arcane Mastery",
			source : ["S", 126],
			minlevel : 17,
			description : "\n   " + "I add four wizards spells, a 6th, 7th, 8th, and 9th-level spell, to my domain spells" + "\n   " + "As any domain spell, these spells are automatically prepared and count as cleric spells",
			spellcastingBonus : [{
				name : "Arcane Mastery (6)",
				"class" : "wizard",
				level : [6, 6],
				firstCol : 'markedbox'
			}, {
				name : "Arcane Mastery (7)",
				"class" : "wizard",
				level : [7, 7],
				firstCol : 'markedbox'
			}, {
				name : "Arcane Mastery (8)",
				"class" : "wizard",
				level : [8, 8],
				firstCol : 'markedbox'
			}, {
				name : "Arcane Mastery (9)",
				"class" : "wizard",
				level : [9, 9],
				firstCol : 'markedbox'
			}]
		}
	}
});
AddSubClass("fighter", "purple dragon knight", {
	regExpSearch : /^(((?=.*purple)(?=.*dragon)(?=.*knight))|(?=.*banneret)).*$/i,
	subname : "Purple Dragon Knight",
	fullname : "Purple Dragon Knight",
	source : ["S", 128],
	features : {
		"subclassfeature3" : {
			name : "Rallying Cry",
			source : ["S", 128],
			minlevel : 3,
			description : "\n   " + "When I use Second Wind, I also heal three allies within 60 ft that can see or hear me",
			additional : levels.map(function (n) {
				return n < 3 ? "" : n + " HP";
			}),
			action : [["bonus action", "Second Wind (+Rallying Cry)", "Second Wind"]]
		},
		"subclassfeature7" : {
			name : "Royal Envoy",
			source : ["S", 128],
			minlevel : 7,
			description : "\n   " + "I gain proficiency with the Persuasion skill and I gain expertise with the Persuasion skill" + "\n   " + "If already proficient, I can choose Animal Handling, Insight, Intimidation, or Performance",
			skillstxt : "Persuasion proficiency and expertise; If already proficient, choose one from Animal Handling, Insight, Intimidation, or Performance",
			skills : ["Persuasion", "full"]
		},
		"subclassfeature10" : {
			name : "Inspiring Surge",
			source : ["S", 128],
			minlevel : 10,
			description : "\n   " + "When I use my Action Surge, I can inspire an ally within 60 ft that can see or hear me" + "\n   " + "The ally can then use its reaction to make one melee or ranged weapon attack",
			additional : levels.map(function (n) {
				return n < 10 ? "" : n < 18 ? "1 ally" : "2 allies";
			})
		},
		"subclassfeature15" : {
			name : "Bulwark",
			source : ["S", 128],
			minlevel : 15,
			description : "\n   " + "When I use Indomitable to reroll a Int, Wis, or Cha save, I can extend it to an ally" + "\n   " + "The ally can reroll its failed saving throw against the same effect and take the result" + "\n   " + "It only works if not incapacitated and the ally is within 60 ft and can see or hear me"
		}
	}
});
AddSubClass("monk", "way of the long death", {
	regExpSearch : /^(?=.*\blong)(?=.*\b(death|dead))((?=.*(monk|monastic))|(((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior)))).*$/i,
	subname : "Way of the Long Death",
	source : ["S", 130],
	features : {
		"subclassfeature3" : {
			name : "Touch of Death",
			source : ["S", 130],
			minlevel : 3,
			description : "\n   " + "If I reduce someone within 5 ft to 0 HP, I gain Wis mod + monk level temporary HP"
		},
		"subclassfeature6" : {
			name : "Hour of Reaping",
			source : ["S", 130],
			minlevel : 6,
			description : "\n   " + "As an action, all creatures within 30 feet of me must make a Wisdom saving throw" + "\n   " + "On a failed save the creature is frightened until the end of my next turn",
			action : ["action", ""]
		},
		"subclassfeature11" : {
			name : "Mastery of Death",
			source : ["S", 131],
			minlevel : 11,
			additional : "1 ki point",
			description : "\n   " + "When I'm reduced to 0 HP, I can expend 1 ki point to have 1 HP instead",
			"touch of the long death" : {
				name : "Touch of the Long Death",
				extraname : "Way of the Long Death 17",
				source : ["S", 131],
				description : " [1-10 ki points]" + "\n   " + "As an action, a target within 5 ft takes 2d10 necrotic damage per ki point I spent" + "\n   " + "It can make a Constitution saving throw to half the damage",
				action : ["action", ""]
			},
			autoSelectExtrachoices : [{
				extrachoice : "touch of the long death",
				minlevel : 17
			}]
		}
	}
});
AddSubClass("monk", "way of the sun soul", {
	regExpSearch : /^(?=.*\bsun)(?=.*\b(soul|spirit))((?=.*(warrior|monk|monastic))|(((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior)))).*$/i,
	subname : "Way of the Sun Soul",
	source : [["S", 131], ["X", 35]],
	features : {
		"subclassfeature3" : {
			name : "Radiant Sun Bolt",
			source : [["S", 131], ["X", 35]],
			minlevel : 3,
			additional : "1 ki point for 2 extra attacks",
			description : desc([
				"I gain a ranged spell attack that I can use as an attack in the Attack action",
				"If I do this and spend 1 ki point, I can make 2 of these attacks as a bonus action"
			]),
			action : ["bonus action", " (2\xD7 with Attack action)"],
			weaponOptions : {
				regExpSearch : /^(?=.*radiant)(?=.*(sun|light))(?=.*bolt).*$/i,
				name : "Radiant Sun Bolt",
				source : [["S", 131], ["X", 35]],
				ability : 2,
				type : "Spell",
				damage : [1, 4, "radiant"],
				range : "30 ft",
				description : "If used in an Attack action, spend 1 ki point to use it twice as a bonus action",
				monkweapon : true,
				abilitytodamage : true
			},
			weaponsAdd : ['Radiant Sun Bolt'],
			"searing arc strike" : {
				name : "Searing Arc Strike",
				extraname : "Way of the Sun Soul 6",
				source : [["S", 131], ["X", 35]],
				description : desc([
					"After taking the Attack action, I can cast Burning Hands as a bonus action [PHB 220]",
					"For every additional ki point I spend, Burning hands is cast at 1 higher spell level",
					"The maximum total ki points I can spend for this (including the 2) is half my Monk level"
				]),
				additional : levels.map(function (n) {
					if (n < 3) return "";
					var xtrKi = Math.max(0,Math.floor(n/2) - 2);
					return "2 ki points + max " + xtrKi + " ki point" + (xtrKi == 1 ? "" : "s");
				}),
				action : ["bonus action", " (after Attack action)"],
				spellcastingBonus : {
					name : "Searing Arc Strike",
					spells : ["burning hands"],
					selection : ["burning hands"],
					firstCol : 2
				},
				spellFirstColTitle : "Ki",
				spellChanges : {
					"burning hands" : {
						time : "1 bns",
						description : "3d6+1d6/extra Ki Fire dmg; save halves; unattended flammable objects ignite (ki max 1/2 monk lvl)",
						changes : "After I use the Attack action, I can cast Burning Hands as a bonus action by spending 2 ki points. I can even spend additional ki points to increase its spell level. The total amount of ki points I can spend on it is half my monk level."
					}
				}
			},
			autoSelectExtrachoices : [{
				extrachoice : "searing arc strike",
				minlevel : 6
			}]
		},
		"subclassfeature11" : {
			name : "Searing Sunburst",
			source : [["S", 131], ["X", 35]],
			minlevel : 11,
			description : desc([
				"As an action, anyone in a 20-ft radius light on a point within 150 ft makes a Con save",
				"If failed and not behind opaque total cover, take 2d6 (+ 2d6/ki point) radiant damage"
			]),
			action : ["action", ""],
			additional : "0 ki points + max 3 ki points",
			weaponsAdd : ['Searing Sunburst'],
			weaponOptions : {
				regExpSearch : /^(?=.*searing)(?=.*sunburst).*$/i,
				name : "Searing Sunburst",
				source : [["S", 131], ["X", 35]],
				ability : 5,
				type : "Spell",
				damage : [2, 6, "radiant"],
				range : "150 ft",
				description : "All in 20-ft radius; Con save - success no damage; +2d6 damage per ki point (max 3 ki)",
				abilitytodamage : false,
				dc : true,
				useSpellMod : "monk"
			}
		},
		"subclassfeature17" : {
			name : "Sun Shield",
			source : [["S", 131], ["X", 35]],
			minlevel : 17,
			description : desc([
				"As a reaction, when I'm hit by a melee attack, I can deal 5 + Wis mod radiant damage",
				"I can only do this while my light aura is on; I can turn it on/off as a bonus action"
			]),
			action : [["bonus action", " (start/stop)"], ["reaction", " (hit in melee)"]],
			additional : "30-ft rad bright + 30-ft dim light"
		}
	}
});
AddSubClass("paladin", "oath of the crown", {
	regExpSearch : /^(?=.*(crown|king|country))(((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper))))).*$/i,
	subname : "Oath of the Crown",
	source : ["S", 133],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Champion Challenge",
			source : ["S", 133],
			minlevel : 3,
			description : "\n   " + "I can compel any chosen creatures within 30 ft of me to make a Wisdom save" + "\n   " + "If failed, a target is unable to willingly move more than 30 ft away from me" + "\n   " + "The effect ends if I'm incapacitated, die, or it is moved more than 30 ft away from me",
			action : ["action", ""],
			spellcastingExtra : ["command", "compelled duel", "warding bond", "zone of truth", "aura of vitality", "spirit guardians", "banishment", "guardian of faith", "circle of power", "geas"]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Turn the Tide",
			source : ["S", 133],
			minlevel : 3,
			description : "\n   " + "As a bonus action, any chosen creatures within 30 ft that can hear me regain HP" + "\n   " + "Each regain 1d6 + my Charisma modifier HP, up to half of its total HP",
			action : ["bonus action", ""]
		},
		"subclassfeature7" : {
			name : "Divine Allegiance",
			source : ["S", 133],
			minlevel : 7,
			description : "\n   " + "When a creature within 5 feet of me takes damage, I can substitute my HP for it" + "\n   " + "The creature takes no damage and I take all of it; this damage can't be prevented",
			action : ["reaction", ""]
		},
		"subclassfeature15" : {
			name : "Unyielding Spirit",
			source : ["S", 133],
			minlevel : 15,
			description : "\n   " + "I have advantage on saving throws against effects that paralyze or stun",
			savetxt : { adv_vs : ["paralyzed", "stunned"] }
		},
		"subclassfeature20" : {
			name : "Exalted Champion",
			source : ["S", 133],
			minlevel : 20,
			description : desc([
				"As an action, I gain the following benefits for 1 hour or until I'm incapacitated:",
				" \u2022 " + "Resistance to bludgeoning, piercing, and slashing damage from nonmagical weapons",
				" \u2022 " + "My allies within 30 ft of me and I have advantage on Wisdom and Death saves"
			]),
			recovery : "long rest",
			usages : 1,
			action : ["action", ""]
		}
	}
});
AddSubClass("rogue", "mastermind", {
	regExpSearch : /^(?!.*(barbarian|bard|cleric|druid|fighter|monk|paladin|ranger|sorcerer|warlock|wizard))(?=.*(mastermind|strategist)).*$/i,
	subname : "Mastermind",
	fullname : "Mastermind",
	source : [["S", 135], ["X", 46]],
	features : {
		"subclassfeature3" : {
			name : "Master of Intrigue",
			source : [["S", 135], ["X", 46]],
			minlevel : 3,
			description : desc([
				"I gain proficiency with disguise kits, forgery kits, one gaming set, and two languages",
				"I can mimic speech patterns and accents if I've heard them for at least 1 minute"
			]),
			languageProfs : [2],
			toolProfs : ["Disguise kit", "Forgery kit", ["Gaming set", 1]]
		},
		"subclassfeature3.1" : {
			name : "Master of Tactics",
			source : [["S", 135], ["X", 46]],
			minlevel : 3,
			description : desc([
				"I can use the Help action as a bonus action",
				"This even works if the ally attacks a target within 30 ft of me that can see or hear me"
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature9" : {
			name : "Insightful Manipulator",
			source : [["S", 135], ["X", 46]],
			minlevel : 9,
			description : desc([
				"By spending 1 minute observing/interacting outside of combat I can learn capabilities",
				"The DM tells me if the target is my equal, superior, or inferior in regard to two things:",
				" - Intelligence score    - Wisdom score    - Charisma score    - Class levels (if any)"
			])
		},
		"subclassfeature13" : {
			name : "Misdirection",
			source : [["S", 135], ["X", 46]],
			minlevel : 13,
			description : desc([
				"As a reaction, I can redirect an attack meant for me to a creature within 5 ft of me",
				"This only works if the creature is providing me with cover against the attack"
			]),
			action : ["reaction", ""]
		},
		"subclassfeature17" : {
			name : "Soul of Deceit",
			source : [["S", 135], ["X", 46]],
			minlevel : 17,
			description : desc([
				"My thoughts can't be read by telepathy or similar means; I can project false thoughts",
				"For that, I must pass a Cha (Deception) vs. Wis (Insight) check to fool the mind reader",
				"Magic always determines I'm truthful; I can't be magically compelled to tell the truth"
			])
		}
	}
});
AddSubClass("rogue", "swashbuckler", {
	regExpSearch : /^(?!.*(barbarian|bard|cleric|druid|fighter|monk|paladin|ranger|sorcerer|warlock|wizard))(?=.*swashbuckl).*$/i,
	subname : "Swashbuckler",
	fullname : "Swashbuckler",
	source : [["S", 135], ["X", 47]],
	features : {
		"subclassfeature3" : {
			name : "Fancy Footwork",
			source : [["S", 135], ["X", 47]],
			minlevel : 3,
			description : desc([
				"Enemies I make a melee attack against in my turn can't use opportunity attacks on me",
				"This lasts until the end of my current turn"
			])
		},
		"subclassfeature3.1" : {
			name : "Rakish Audacity",
			source : [["S", 136], ["X", 47]],
			minlevel : 3,
			description : desc([
				"I don't need advantage to sneak attack if my target is the only one within 5 ft of me",
				"I still can't sneak attack if I have disadv.; I add my Charisma modifier to initiative rolls"
			]),
			addMod : { type : "skill", field : "Init", mod : "max(Cha|0)", text : "I can add my Charisma modifier to initiative rolls." }
		},
		"subclassfeature9" : {
			name : "Panache",
			source : [["S", 136], ["X", 47]],
			minlevel : 9,
			description : desc([
				"As an action, I can beguile a creature that hears and understands me, for 1 minute",
				"It must succeed a Wis (Insight) check opposed by my Cha (Persuasion) or be affected as:",
				"\u2022 A hostile target gains disadv. on attacks and can't do opportunity attacks vs. not-me",
				"  This effect ends if an ally attacks or casts a spell vs. it, or if it and I are 60 ft apart",
				"\u2022 Targets that are not hostile are charmed and regard me as a friendly acquaintance",
				"  This effect ends if me or an ally do anything harmful to it"
			]),
			action : ["action", ""]
		},
		"subclassfeature13" : {
			name : "Elegant Maneuver",
			source : [["S", 136], ["X", 47]],
			minlevel : 13,
			description : "\n   " + "As a bonus action, I can gain adv. on my next Dex (Acrobatics) or Str (Athletics) check",
			action : ["bonus action", ""]
		},
		"subclassfeature17" : {
			name : "Master Duelist",
			source : [["S", 136], ["X", 47]],
			minlevel : 17,
			description : "\n   " + "Once per short rest, when I miss with an attack roll, I can roll again with advantage",
			recovery : "short rest",
			usages : 1
		}
	}
});
AddSubClass("sorcerer", "storm sorcery", {
	regExpSearch : /^(?=.*(sorcerer|witch))((?=.*(storm|tempest|hurricane))|((?=.*air)(?=.*element))).*$/i,
	subname : "Storm Sorcery",
	fullname : "Storm Sorcerer",
	source : [["S", 137], ["X", 51]],
	features : {
		"subclassfeature1" : {
			name : "Wind Speaker",
			source : [["S", 137], ["X", 52]],
			minlevel : 1,
			description : "\n   " + "I can speak, read, and write Primordial (and its dialects Aquan, Auran, Ignan, Terran)",
			languageProfs : ["Primordial"]
		},
		"subclassfeature1.1" : {
			name : "Tempestuous Magic",
			source : [["S", 137], ["X", 52]],
			minlevel : 1,
			description : desc([
				"As a bonus action, before or after casting a 1st-level or higher spell, I can fly 10 ft",
				"This movement doesn't provoke opportunity attacks as whirling gust of air surround me"
			]),
			action : ["bonus action", " (with casting)"]
		},
		"subclassfeature6" : {
			name : "Heart of the Storm",
			source : [["S", 137], ["X", 52]],
			minlevel : 6,
			description : desc([
				"I have resistance to lightning and thunder damage",
				"When I start casting a 1st-level or higher spell that deals lightning or thunder damage,",
				"I deal lightning or thunder damage to creatures of my choice that I can see within 10 ft"
			]),
			additional : levels.map(function (n) { return n < 6 ? "" : Math.floor(n/2) + " damage"; }),
			dmgres : ["Lightning", "Thunder"]
		},
		"subclassfeature6.1" : {
			name : "Storm Guide",
			source : [["S", 137], ["X", 52]],
			minlevel : 6,
			description : desc([
				"As an action, I can stop rain around me in 20-ft radius; bonus action for it to resume",
				"As a bonus action, I can choose the direction of wind around me in a 100-ft radius",
				"This lasts until the end of my next turn and doesn't alter the wind's speed"
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature14" : {
			name : "Storm's Fury",
			source : [["S", 137], ["X", 52]],
			minlevel : 14,
			description : desc([
				"As a reaction when hit by a melee attack, I can deal lightning damage to the attacker",
				"The attacker must also make a Strength save or be pushed up to 20 ft away from me"
			]),
			action : ["reaction", ""],
			additional : levels.map(function (n) { return n < 14 ? "" : n + " lightning damage"; })
		},
		"subclassfeature18" : {
			name : "Wind Soul",
			source : [["S", 137], ["X", 52]],
			minlevel : 18,
			description : desc([
				"I have immunity to lightning and thunder damage and gain magical 60 ft fly speed",
				"As an action, I reduce my fly speed to 30 ft and give allies 30 ft fly speed for 1 hour",
				"I can do this once per short rest for up to 3 + my Charisma modifier allies within 30 ft"
			]),
			action : ["action", ""],
			savetxt : { immune : ["lightning", "thunder"] },
			speed : { fly : { spd : "fixed 60", enc : "fixed 60" } },
			usages : 1,
			recovery : "short rest"
		}
	}
});
AddSubClass("warlock", "the undying", {
	regExpSearch : /^(?!.*light)(?=.*warlock)(?=.*(immortal|undying|neverending|unending)).*$/i,
	subname : "the Undying",
	source : ["S", 139],
	spellcastingExtra : ["false life", "ray of sickness", "blindness/deafness", "silence", "feign death", "speak with dead", "aura of life", "death ward", "contagion", "legend lore"],
	features : {
		"subclassfeature1" : {
			name : "Among the Dead",
			source : ["S", 139],
			minlevel : 1,
			description : "\n   " + "I learn the Spare the Dying cantrip and gain advantage on saving throws vs. diseases" + "\n   " + "If an undead targets me directly with an attack or spell, it must make a Wisdom save" + "\n   " + "On a fail, it must choose a new target or forfeit its attack or harmful spell" + "\n   " + "On a success or if I attack or cast a harmful spell on it, it is immune for 24 hours",
			savetxt : { adv_vs : ["disease"] },
			spellcastingBonus : {
				name : "Among the Dead",
				spells : ["spare the dying"],
				selection : ["spare the dying"]
			}
		},
		"subclassfeature6" : {
			name : "Defy Death",
			source : ["S", 140],
			minlevel : 6,
			description : "\n   " + "I regain 1d8 + my Constitution modifier in HP when I succeed on a Death saving throw" + "\n   " + "I also regain this amount whenever I use Spare the Dying to stabilize a creature",
			recovery : "long rest",
			usages : 1
		},
		"subclassfeature10" : {
			name : "Undying Nature",
			source : ["S", 140],
			minlevel : 10,
			description : "\n   " + "I can hold my breath indefinitely; I don't require food, water, or sleep (I still need rest)" + "\n   " + "I age more slowly, only 1 year for every 10 years that pass; I can't be magically aged"
		},
		"subclassfeature14" : {
			name : "Indestructible Life",
			source : ["S", 140],
			minlevel : 14,
			description : "\n   " + "As a bonus action, I can regain HP and reattach severed body parts",
			action : ["bonus action", ""],
			recovery : "short rest",
			usages : 1,
			additional : levels.map(function (n) { return n < 14 ? "" : "1d8 + " + n + " HP"; })
		}
	}
});
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
						if (v.isMeleeWeapon && (/blade.?song/i).test(v.WeaponTextName)) {
							output.extraDmg += Math.max(1, Number(What('Int Mod')));
						};
					},
					"If I include the word 'Bladesong' in the name or description of a melee weapon, it gets my Intelligence modifier added to its Damage."
				]
			}
		}
	}
});

// New Totem Warrior options
if (ClassSubList["barbarian-totem warrior"]) {
	var SCAG_TotemWarriorFeature = ClassSubList["barbarian-totem warrior"].features["subclassfeature3.1"];
	if (SCAG_TotemWarriorFeature) {
		AddFeatureChoice(SCAG_TotemWarriorFeature, false, "Elk", {
			name : "Elk Spirit",
			source : ["S", 122],
			description : "\n   While raging without heavy armor, my base walking speed increases by 15 ft"
		});
		AddFeatureChoice(SCAG_TotemWarriorFeature, false, "Tiger", {
			name : "Tiger Spirit",
			source : ["S", 122],
			description : "\n   While raging, I can add 10 ft to my long jump and 3 ft to my high jump distance"
		});
	}
	SCAG_TotemWarriorFeature = ClassSubList["barbarian-totem warrior"].features["subclassfeature6"];
	if (SCAG_TotemWarriorFeature) {
		AddFeatureChoice(SCAG_TotemWarriorFeature, false, "Elk", {
			name : "Aspect of the Elk",
			source : ["S", 122],
			description : desc([
				"While mounted or on foot and not incapacitated, my travel pace is doubled",
				"I can extend this benefit to up to ten companions, while they are within 60 ft of me"
			])
		});
		AddFeatureChoice(SCAG_TotemWarriorFeature, false, "Tiger", {
			name : "Aspect of the Tiger",
			source : ["S", 122],
			description : "\n   I gain proficiency with two skills chosen from: Athletics, Acrobatics, Stealth, or Survival",
			skillstxt : "Choose two from Athletics, Acrobatics, Stealth, and Survival"
		});
	}
	SCAG_TotemWarriorFeature = ClassSubList["barbarian-totem warrior"].features["subclassfeature14"];
	if (SCAG_TotemWarriorFeature) {
		AddFeatureChoice(SCAG_TotemWarriorFeature, false, "Elk", {
			name : "Elk Attunement",
			source : ["S", 122],
			description : desc([
				"As a bonus action while raging, I can move through a Large or smaller creature's space",
				"It must make a Strength save of DC 8 + Strength modifier + Proficiency bonus",
				"If failed, it is knocked prone and takes 1d12 + Strength modifier bludgeoning damage"
			]),
			action : [["bonus action", " (in rage)"]]
		});
		AddFeatureChoice(SCAG_TotemWarriorFeature, false, "Tiger", {
			name : "Tiger Attunement",
			source : ["S", 122],
			description : desc([
				"As a bonus action while raging, I can make a melee weapon attack on these conditions:",
				" \u2022 I move at least 20 ft in a straight line towards the target that is Large or smaller",
				" \u2022 I make a melee weapon attack against it after the bonus action"
			]),
			action : [["bonus action", " (in rage)"]]
		});
	}
}

// Backgrounds
BackgroundList["far traveler"] = {
	regExpSearch : /^(?=.*far)(?=.*traveler).*$/i,
	name : "Far Traveler",
	source : [["S", 148], ["ALbackground", 0]],
	skills : ["Insight", "Perception"],
	gold : 5,
	equipleft : [
		["Gaming set or musical instrument", "", ""],
		["Poorly wrought maps", "", ""]
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["Piece of jewelry worth 10 gp", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "All Eyes on You",
	trait : [
		"I have different assumptions from those around me concerning personal space, blithely invading others' space in innocence, or reacting to ignorant invasion of my own.",
		"I have my own ideas about what is and is not food, and I find the eating habits of those around me fascinating, confusing, or revolting.",
		"I have a strong code of honor or sense of propriety that others don't comprehend.",
		"I express affection or contempt in ways that are unfamiliar to others.",
		"I honor my deities through practices that are foreign to this land.",
		"I begin or end my day with small traditional rituals that are unfamiliar to those around me."
	],
	ideal : [
		["Open",
			"Open: I have much to learn from the kindly folk I meet along my way. (Good)"
		],
		["Reserved",
			"Reserved: As someone new to these strange lands, I am cautious and respectful in my dealings. (Lawful)"
		],
		["Adventure",
			"Adventure: I'm far from home, and everything is strange and wonderful! (Chaotic)"
		],
		["Cunning",
			"Cunning: Though I may not know their ways, neither do they know mine, which can be to my advantage. (Evil)"
		],
		["Inquisitive",
			"Inquisitive: Everything is new, but I have a thirst to learn. (Neutral)"
		],
		["Suspicious",
			"Suspicious: I must be careful, for I have no way of telling friend from foe here. (Any)"
		]
	],
	bond : [
		"So long as I have this token from my homeland, I can face any adversity in this strange land.",
		"The gods of my people are a comfort to me so far from home.",
		"I hold no greater cause than my service to my people.",
		"My freedom is my most precious possession. I'll never let anyone take it from me again.",
		"I'm fascinated by the beauty and wonder of this new land.",
		"Though I had no choice, I lament having to leave my loved one(s) behind. I hope to see them again one day."
	],
	flaw : [
		"I am secretly (or not so secretly) convinced of the superiority of my own culture over that of this foreign land.",
		"I pretend not to understand the local language in order to avoid interactions I would rather not have.",
		"I have a weakness for the new intoxicants and other pleasures of this land.",
		"I don't take kindly to some of the actions and motivations of the people of this land, because these folk are different from me.",
		"I consider the adherents of other gods to be deluded innocents at best, or ignorant fools at worst.",
		"I have a weakness for the exotic beauty of the people of these lands."
	],
	extra : [
		"Select Why You Are Here",
		"Emissary",
		"Exile",
		"Fugitive",
		"Pilgrim",
		"Sightseer",
		"Wanderer"
	],
	toolProfs : [["Gaming set or musical instrument", 1]],
	languageProfs : [1],
	lifestyle : "modest"
};

// Background variants
AddBackgroundVariant("soldier", "city watch", {
	regExpSearch : /^(?=.*city)(?=.*(watch|guard)).*$/i,
	name : "City Watch",
	source : [["S", 145], ["ALbackground", 0]],
	skills : ["Athletics", "Insight"],
	equipright : [
		["Uniform of my unit", "", 3],
		["Insignia of rank", "", ""],
		["Horn", "", 2],
		["Manacles", "", 6],
		["Belt pouch (with coins)", "", 1],
	],
	feature : "Watcher's Eye",
	extra : "",
	toolProfs : "",
	languageProfs : [2],
	lifestyle : "modest"
});
AddBackgroundVariant("guild artisan", "clan crafter", {
	regExpSearch : /^(?=.*clan)(?=.*(crafter|smith|builder|miner)).*$/i,
	name : "Clan Crafter",
	source : [["S", 145], ["ALbackground", 0]],
	skills : ["History", "Insight"],
	equipleft : [
		["Set of artisan's tools", "", ""],
		["Maker's mark chisel", "", 0.5]
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["Belt pouch (with coins and 10 gp gem)", "", 1],
	],
	feature : "Respect of the Stout Folk",
	extra : "",
	languageProfs : ["Dwarvish"],
	lifestyle : "comfortable"
});
AddBackgroundVariant("sage", "cloistered scholar", {
	regExpSearch : /^(?=.*cloistered)(?=.*scholar).*$/i,
	name : "Cloistered Scholar",
	source : [["S", 146], ["ALbackground", 0]],
	skills : ["History"],
	skillstxt : "History and choose one from Arcana, Nature, and Religion",
	gold : 10,
	equipleft : [
		["Ink, 1 ounce bottle of", 1, ""],
		["Quill", "", ""],
		["Parchment, sheets of", 1, ""],
		["Small penknife", "", 0.5],
		["Borrowed book", "", 5]
	],
	equipright : [
		["Scholar's robes", "", 3],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Library Access",
	extra : ["Name your Library"],
	languageProfs : [2],
	lifestyle : "modest"
});
AddBackgroundVariant("guild artisan", "courtier", {
	regExpSearch : /courtier/i,
	name : "Courtier",
	source : [["S", 146], ["ALbackground", 0]],
	skills : ["Insight", "Persuasion"],
	gold : 5,
	equipleft : "",
	equipright : [
		["Fine clothes", "", 3],
		["Belt pouch (with coins)", "", 1],
	],
	feature : "Court Functionary",
	extra : "",
	toolProfs : "",
	languageProfs : [2],
	lifestyle : "comfortable"
});
AddBackgroundVariant("acolyte", "faction agent", {
	regExpSearch : /^(?=.*agent)(?=.*(faction|harper|order of the gauntlet|emerald enclave|lord.?s alliance|zhentarim)).*$/i,
	name : "Faction Agent",
	source : [["S", 147], ["ALbackground", 0]],
	skills : ["Insight"],
	skillstxt : "Insight and choose one Intelligence, Wisdom, or Charisma skill",
	gold : 15,
	equipleft : [
		["Copy of seminal faction's text", "", ""]
	],
	equipright : [
		["Common clothes", "", 3],
		["Badge or emblem of faction", "", ""],
		["Belt pouch (with coins)", "", 1],
	],
	feature : "Safe Haven",
	extra : [
		"Select a Faction",
		"The Harpers",
		"The Order of the Gauntlet",
		"The Emerald Enclave",
		"The Lord's Alliance",
		"The Zhentarim"
	],
	languageProfs : [2],
	lifestyle : "modest"
});
AddBackgroundVariant("folk hero", "inheritor", {
	regExpSearch : /inheritor/i,
	name : "Inheritor",
	source : [["S", 150], ["ALbackground", 0]],
	skills : ["Survival"],
	skillstxt : "Survival and choose one from Arcana, History, and Religion",
	gold : 15,
	equipleft : [
		["Gaming set or musical instrument", "", ""]
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["The inheritance", "", ""],
		["Belt pouch (with coins)", "", 1],
	],
	feature : "Inheritance",
	extra : [
		"Select an Inheritance",
		"Document such as a map, letter, or journal",
		"A trinket",
		"Article of clothing",
		"Piece of jewelry",
		"Arcane book or formulary",
		"Written story, song, poem, or secret",
		"Tattoo or other body marking"
	],
	toolProfs : [["Gaming set or musical instrument", 1]],
	languageProfs : [1],
	lifestyle : "wealthy"
});
AddBackgroundVariant("soldier", "investigator", {
	regExpSearch : /investigator/i,
	name : "Investigator",
	source : [["S", 145], ["ALbackground", 0]],
	skills : ["Insight", "Investigation"],
	equipright : [
		["Uniform", "", 3],
		["Insignia of rank", "", ""],
		["Horn", "", 2],
		["Manacles", "", 6],
		["Belt pouch (with coins)", "", 1],
	],
	feature : "Watcher's Eye",
	extra : "",
	toolProfs : "",
	languageProfs : [2]
});
AddBackgroundVariant("soldier", "knight of the order", {
	regExpSearch : /^(?=.*knight)(?=.*order).*$/i,
	name : "Knight of the Order",
	source : [["S", 151], ["ALbackground", 0]],
	skills : ["Persuasion"],
	skillstxt : "Persuasion and choose one from Arcana, History, Nature, and Religion",
	equipright : [
		["Traveler's clothes", "", 4],
		["Signet, banner, or seal of rank", "", ""],
		["Belt pouch (with coins)", "", 1],
	],
	feature : "Knightly Regard",
	extra : ["Name your Knightly Order"],
	toolProfs : [["Gaming set or musical instrument", 1]],
	languageProfs : [1],
	lifestyle : "comfortable"
});
AddBackgroundVariant("soldier", "mercenary veteran", {
	regExpSearch : /^(?=.*mercenary)(?=.*(veteran|soldier)).*$/i,
	name : "Mercenary Veteran",
	source : [["S", 152], ["ALbackground", 0]],
	skills : ["Athletics", "Persuasion"],
	equipright : [
		["Uniform of my company", "", 4],
		["Insignia of rank", "", ""],
		["Gaming set", "", ""],
		["Belt pouch (with coins)", "", 1],
	],
	feature : "Mercenary Life",
	extra : ["Name your Mercenary Company"],
	lifestyle : "modest"
});
AddBackgroundVariant("criminal", "urban bounty hunter", {
	regExpSearch : /^(?=.*urban)(?=.*bounty)(?=.*hunter).*$/i,
	name : "Urban Bounty Hunter",
	source : [["S", 153], ["ALbackground", 0]],
	skills : "",
	skillstxt : "Choose two from Deception, Insight, Persuasion, and Stealth",
	gold : 20,
	equipright : [
		["Appropriate Clothes", "", 3],
		["Belt pouch (with coins)", "", 1],
	],
	feature : "Ear to the Ground",
	extra : "",
	toolProfs : [["Gaming set, instrument, or thieves' tools", 2]],
	lifestyle : "poor"
});
AddBackgroundVariant("outlander", "uthgardt tribe member", {
	regExpSearch : /^(?=.*(uthgardt|barbarian|nomad|clan))(?=.*tribe)(?=.*member).*$/i,
	name : "Uthgardt Tribe Member",
	source : [["S", 153], ["ALbackground", 0]],
	equipright : [
		["Traveler's clothes", "", 4],
		["Hunting trap", "", 25],
		["Totemic token or tattoos of tribal totem", "", ""],
		["Belt pouch (with coins)", "", 1],
	],
	feature : "Uthgardt Heritage",
	extra : "",
	toolProfs : [["Artisan's tools or musical instrument", 1]],
	languageProfs : [1],
	lifestyle : "poor"
});
AddBackgroundVariant("noble", "waterdhavian noble", {
	regExpSearch : /^(?=.*(waterdhavian|waterdeep))(?=.*noble).*$/i,
	name : "Waterdhavian Noble",
	source : [["S", 154], ["ALbackground", 0]],
	gold : 20,
	equipleft : [
		["Scroll of pedigree", "", ""],
		["Skin of fine zzar or wine", "", 5] // weight based on waterskin
	],
	equipright : [
		["Fine clothes", "", 6],
		["Signet ring or brooch", "", ""],
		["Purse (with coins)", "", 1],
	],
	feature : "Kept in Style",
	toolProfs : [["Gaming set or musical instrument", 1]],
	languageProfs : [1],
	lifestyle : "wealthy"
});

// Background features
BackgroundFeatureList["court functionary"] = {
	description : "My knowledge of how bureaucracies function lets me gain access to the records and inner workings of any noble court or government I encounter. I know or can easily acquire the knowledge who the movers and shakers are, whom to go to for the favors I seek, and what the current intrigues of interest in the group are.",
	source : [["S", 147], ["ALbackground", 0]]
};
BackgroundFeatureList["all eyes on you"] = {
	description : "My accent, mannerisms, figures of speech all mark me as foreign. Curious glances are directed my way wherever I go. A nuisance, but I also gain the friendly interest of the curious. I can parley this attention into access I might not otherwise have, for me and my companions. Nobles, scholars, merchants, and guilds, might be among the interested.",
	source : [["S", 149], ["ALbackground", 0]]
};
BackgroundFeatureList["ear to the ground"] = {
	description : "I am in frequent contact with people in my chosen segment of society. These people might be associated with the criminal underworld, the rough-and-tumble folk of the streets, or members of high society. This connection comes in the form of a contact in any city I visit, a person who provides information about the people and places of the local area.",
	source : [["S", 153], ["ALbackground", 0]]
};
BackgroundFeatureList["inheritance"] = {
	description : "The item I inherited has a special significance, history, power, and/or important value. When I begin my adventuring career, I can decide whether to tell my companions about it right away. Rather than attracting attention to myself, I could decide to keep it a secret until I learn more about what it means to me and what it can do for me.",
	source : [["S", 150], ["ALbackground", 0]]
};
BackgroundFeatureList["kept in style"] = {
	description : "While I am in Waterdeep or elsewhere in the North my house sees to my everyday needs. My name and signet are sufficient to cover most of my expenses; the inns, taverns, and festhalls I frequent are glad to record my debt and send an accounting to my family's estate. This advantage enables me to take 2 gp of my daily lifestyle costs down to 0 gp.",
	source : [["S", 154], ["ALbackground", 0]]
};
BackgroundFeatureList["knightly regard"] = {
	description : "I receive shelter and succor from members of my knightly order and its sympathizers. Religious knightly orders get aid from temples and communities of my deity. Civic order knights get help from the community they serve. Philosophical order knights can find help from those they have aided in pursuit of their ideals, and those who share those ideals.",
	source : [["S", 151], ["ALbackground", 0]]
};
BackgroundFeatureList["library access"] = {
	description : "I have free access to most of the library I work at, though it might have repositories of lore that are too valuable, magical, or secret to permit anyone immediate access. I have a working knowledge of my cloister's personnel and bureaucracy, and I know how to navigate those connections. I am likely to gain preferential treatment at other libraries.",
	source : [["S", 146], ["ALbackground", 0]]
};
BackgroundFeatureList["mercenary life"] = {
	description : "I know the mercenary life well. I am able to identify mercenary company emblems, and I know a little about any such company, including the leaders, reputation, and who hired them recently. I can find the locales where mercenaries abide anywhere, as long as I speak the language. My mercenary work between adventures affords me a comfortable lifestyle.",
	source : [["S", 152], ["ALbackground", 0]]
};
BackgroundFeatureList["respect of the stout folk"] = {
	description : "No one esteems clan crafters quite so highly as dwarves do. I always have free room and board in any place where shield dwarves or gold dwarves dwell, and the individuals in such a settlement might vie among themselves to determine who can offer me (and possibly my compatriots) the finest accommodations and assistance.",
	source : [["S", 145], ["ALbackground", 0]]
};
BackgroundFeatureList["safe haven"] = {
	description : "As a faction agent, I have access to a secret network of support and operatives who can provide assistance on my adventures. I know secret signs and passwords to identify such operatives, who can provide me with access to a hidden safe house, free room and board, or assistance in finding information. These agents never risk their lives or identity for me.",
	source : [["S", 147], ["ALbackground", 0]]
};
BackgroundFeatureList["uthgardt heritage"] = {
	description : "I have an excellent knowledge of my tribe's territory, and surrounding terrain and natural resources. I am familiar enough with any wilderness area that I can find twice as much food and water as one normally would. I can call upon the hospitality of my people, and those allied, often including members of druid circles, nomadic elves, and priesthoods.",
	source : [["S", 154], ["ALbackground", 0]]
};
BackgroundFeatureList["watcher's eye"] = {
	description : "My experience in enforcing the law, and dealing with lawbreakers, gives me a feel for local laws and criminals. I can easily find the local outpost of the watch, guards or a similar organization, and just as easily pick out the dens of criminal activity in a community. I am far more likely to be welcome in the former locations rather than the latter, however.",
	source : [["S", 145], ["ALbackground", 0]]
};

// [dupl_start] Feat reprint from Elemental Evil Player's Companion
if (!FeatsList["svirfneblin magic"]) {
	FeatsList["svirfneblin magic"] = {
		name : "Svirfneblin Magic",
		source : [["E", 7], ["S", 115], ["MToF", 114]],
		prerequisite : "Being a Svirfneblin (Deep Gnome)",
		prereqeval : function(v) { return CurrentRace.known === 'deep gnome'; },
		descriptionFull : "You have inherited the innate spellcasting ability of your ancestors. This ability allows you to cast Nondetection on yourself at will, without needing a material component. You can also cast each of the following spells once with this ability: Blindness/Deafness, Blur, and Disguise Self. You regain the ability to cast these spells when you finish a long rest.\n   Intelligence is your spellcasting ability for these spells, and you cast them at their lowest possible levels.",
		description : "I can cast Nondetection on myself at will, without a material component. I can also cast the spells Blindness/Deafness, Blur, and Disguise Self once each. I regain the ability to cast these spells when I finish a long rest. Intelligence is my spellcasting ability for these spells.",
		spellcastingBonus : [{
			name : "at will (self only)",
			spellcastingAbility : 4,
			spells : ["nondetection"],
			selection : ["nondetection"],
			firstCol : 'atwill'
		}, {
			name : "1x long rest (self only)",
			spells : ["blindness/deafness", "blur", "disguise self"],
			selection : ["blindness/deafness", "blur", "disguise self"],
			firstCol : 'oncelr',
			times : 3
		}],
		spellChanges : {
			"nondetection" : {
				range : "Self",
				components : "V,S",
				compMaterial : "",
				description : "I am hidden from all divination magic",
				changes : "Using Svirfneblin Magic, I can cast Nondetection without a material component, but only on myself."
			}
		}
	};
} // dupl_end

// Spells
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
	description : "Melee wea atk with cast; hit: 0d8 Thunder dmg, if it moves next round +1d8; +1d8 at CL5, 11, \u0026 17",
	descriptionShorter : "melee wea atk with cast; hit: 0d8 Thunder dmg, if move next rnd +1d8; +1d8 CL 5/11/17 ",
	descriptionCantripDie : "Melee wea atk with cast; if hit: `CD-1`d8 Thunder dmg and if moves next round +`CD`d8 Thunder dmg",
	descriptionFull : "You brandish the weapon used in the spell's casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack's normal effects and then becomes sheathed in booming energy until the start of your next turn. If the target willingly moves 5 feet or more before then, the target takes 1d8 thunder damage, and the spell ends.\n   This spell's damage increases when you reach certain levels. At 5th level, the melee attack deals an extra 1d8 thunder damage to the target on a hit, and the damage the target takes for moving increases to 2d8. Both damage rolls increase by 1d8 at 11th level (2d8 and 3d8) and again at 17th level (3d8 and 4d8).",
	dynamicDamageBonus : {
		extraDmgGroupsSameType : /(next r(?:ou)?nd )((?:\+?\d+d?\d*)+)/i
	}
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
	description : "Melee wea atk with cast; hit: 0d8 Fire dmg, 1 crea in 5 ft 0d8+spell mod Fire dmg; +1d8 CL5/11/17",
	descriptionShorter : "Melee wea atk; hit: 0d8 Fire dmg, 1 crea in 5 ft 0d8+spell mod Fire dmg; +1d8 CL5/11/17",
	descriptionCantripDie : "Melee wea atk with cast; if hit: `CD-1`d8 Fire dmg, 1 crea in 5 ft `CD-1`d8+spellcasting ability modifier Fire dmg",
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
	description : "1 crea in 15 ft save or pulled 10 ft to me; if it ends in 5 ft, 1d8 Lightning dmg; +1d8 at CL 5, 11, \u0026 17",
	descriptionShorter : "1 crea in 15 ft save or pulled 10 ft to me; if end in 5 ft, 1d8 Lightning dmg; +1d8 at CL 5/11/17",
	descriptionCantripDie : "1 crea I see save or pulled 10 ft to me; if it ends in 5 ft, `CD`d8 Lightning dmg",
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
