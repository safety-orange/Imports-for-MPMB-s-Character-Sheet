var iFileName = "pub_20140818_PHB.js";
RequiredSheetVersion(12.999);
// This file adds all material from the Player's Handbook to MPMB's Character Record Sheet

// Define the source
SourceList.P={
	name : "Player's Handbook",
	abbreviation : "PHB",
	group : "Primary Sources",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/rpg_playershandbook",
	date : "2014/08/19"
};
	// Sources for all official WotC backgrounds, so that they are easier to use with the AL +1 rule
if (!SourceList.ALbackground) {
	SourceList.ALbackground = {
		name : "All official WotC backgrounds",
		abbreviation : "WotC",
		group : "Primary Sources"
	}
};

// (sub)Races that are not in the SRD
RaceList["mountain dwarf"] = {
	regExpSearch : /^((?=.*(hylar|daewar))|((?=.*\b(dwarfs?|dwarves|dwarfish|dwarvish|dwarven)\b)(?=.*\b(mountain|shield)\b))).*$/i,
	name : "Mountain dwarf",
	sortname : "Dwarf, Mountain",
	source : ["P", 20],
	plural : "Mountain dwarves",
	size : 3,
	speed : {
		walk : { spd : 25, enc : 25 }
	},
	languageProfs : ["Common", "Dwarvish"],
	vision : [["Darkvision", 60]],
	savetxt : { adv_vs : ["poison"] },
	dmgres : ["Poison"],
	weaponprofs : [false, false, ["battleaxe", "handaxe", "warhammer", "light hammer"]],
	armor : [true, true, false, false],
	toolProfs : [["Smith, brewer, or mason tools", 1]],
	age : " are considered young until they are 50 and live about 350 years",
	height : " stand between 4 and 5 feet tall (4' + 2d4\")",
	weight : " weigh around 150 lb (130 + 2d4 \xD7 2d6 lb)",
	heightMetric : " stand between 1,2 and 1,5 metres tall (120 + 5d4 cm)",
	weightMetric : " weigh around 75 kg (60 + 5d4 \xD7 4d6 / 10 kg)",
	improvements : "Mountain Dwarf: +2 Strength, +2 Constitution;",
	scores : [2, 0, 2, 0, 0, 0],
	trait : "Mountain Dwarf (+2 Strength, +2 Constitution)\n\nStonecunning:\n   Whenever I make an Intelligence (History) check related to the origin of stonework, I am considered proficient in the History skill and add double my proficiency bonus to the check, instead of my normal proficiency bonus."
};
RaceList["dark elf"] = {
	regExpSearch : /^(?!.*half)((?=.*(drow|devkarin))|((?=.*\b(elfs?|elves|elvish|elven)\b)(?=.*\b(dark|underdarks?|deep|depths?)\b))).*$/i,
	name : "Drow",
	sortname : "Elf, Dark (Drow)",
	source : ["P", 24],
	plural : "Drow",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Elvish"],
	vision : [["Darkvision", 120], ["Sunlight Sensitivity", 0]],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
	weaponprofs : [false, false, ["rapier", "shortsword", "hand crossbow"]],
	skills : ["Perception"],
	age : " typically claim adulthood around age 100 and can live to be 750 years old",
	height : " range from under 5 to 5 1/2 feet tall (4'5\" + 2d6\")",
	weight : " weigh around 100 lb (75 + 2d6 \xD7 1d6 lb)",
	heightMetric : " range from under 1,5 to 1,7 metres tall (135 + 5d6 cm)",
	weightMetric : " weigh around 45 kg (35 + 5d6 \xD7 2d6 / 10 kg)",
	improvements : "Drow: +2 Dexterity, +1 Charisma;",
	scores : [0, 2, 0, 0, 0, 1],
	trait : "Drow (+2 Dexterity, +1 Charisma)\nTrance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. This gives the same benefit as a human gets from 8 hours of sleep (long rest takes only 4 hours).\nSunlight Sensitivity: Disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight when I or what I am trying to attack/perceive is in direct sunlight.\nDrow Magic: 1st level: Dancing Lights cantrip; 3rd level: Faerie Fire; 5th level: Darkness. Both spells can be used once per long rest. Charisma is my spellcasting ability for these.", // errata to specify once per day is long rest
	abilitySave : 6,
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Drow Magic (level 1)",
		spells : ["dancing lights"],
		selection : ["dancing lights"],
		atwill : true
	},
	features : {
		"faerie fire" : {
			name : "Faerie Fire",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Drow Magic)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Drow Magic (level 3)",
				spells : ["faerie fire"],
				selection : ["faerie fire"],
				oncelr : true
			}
		},
		"darkness" : {
			name : "Darkness",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Drow Magic)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Drow Magic (level 5)",
				spells : ["darkness"],
				selection : ["darkness"],
				oncelr : true
			}
		}
	}
};
RaceList["wood elf"] = {
	regExpSearch : /^(?!.*half)((?=.*(grugach|kagonesti|silhana))|((?=.*\b(elfs?|elves|elvish|elven)\b)(?=.*\b(woodlands?|woods?|forests?|wilds?|green)\b))).*$/i,
	name : "Wood elf",
	sortname : "Elf, Wood",
	source : ["P", 24],
	plural : "Wood elves",
	size : 3,
	speed : {
		walk : { spd : 35, enc : 25 }
	},
	languageProfs : ["Common", "Elvish"],
	vision : [["Darkvision", 60]],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
	weaponprofs : [false, false, ["longsword", "shortsword", "longbow", "shortbow"]],
	skills : ["Perception"],
	age : " typically claim adulthood around age 100 and can live to be 750 years old",
	height : " range from under 5 to over 6 feet tall (4'6\" + 2d10\")",
	weight : " weigh around 115 lb (90 + 2d10 \xD7 1d4 lb)",
	heightMetric : " range from under 1,5 to over 1,8 metres tall (140 + 5d10 cm)",
	weightMetric : " weigh around 55 kg (40 + 5d10 \xD7 2d4 / 10 kg)",
	improvements : "Wood Elf: +2 Dexterity, +1 Wisdom;",
	scores : [0, 2, 0, 0, 1, 0],
	trait : "Wood Elf (+2 Dexterity, +1 Wisdom)\nTrance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. While meditating, I can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, I gain the same benefit that a human does from 8 hours of sleep, thus needing only 4 hours for a long rest.\nMask of the Wild: I can attempt to hide even when I am only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena."
};
RaceList["forest gnome"] = {
	regExpSearch : /^((?=.*\bgnomes?\b)(?=.*\b(woods?|forests?|wilds?|green)\b)).*$/i,
	name : "Forest gnome",
	sortname : "Gnome, Forest",
	source : ["P", 37],
	plural : "Forest gnomes",
	size : 4,
	speed : {
		walk : { spd : 25, enc : 15 }
	},
	languageProfs : ["Common", "Gnomish"],
	vision : [["Darkvision", 60]],
	savetxt : { text : ["Adv. on Int/Wis/Cha saves vs. magic"] },
	age : " start adult life around age 40 and can live 350 to almost 500 years",
	height : " are 3 to 4 feet tall (2'11\" + 2d4\")",
	weight : " weigh around 40 lb (35 + 2d4 lb)",
	heightMetric : " are 90 to 120 cm tall (2'11\" + 5d4)",
	weightMetric : " weigh around 18 kg (16 + 5d4 / 10 kg)",
	improvements : "Forest Gnome: +1 Dexterity, +2 Intelligence;",
	scores : [0, 1, 0, 2, 0, 0],
	trait : "Forest Gnome (+1 Dexterity, +2 Intelligence)" + (typePF ? "\n" : " ") + "\nNatural Illusionist:\n   I know the Minor Illusion cantrip. Intelligence is my spellcasting ability for it.\n\nSpeak with Small Beasts:\n   Through sounds and gestures, I can communicate simple ideas with Small or smaller beasts.",
	spellcastingAbility : 4,
	spellcastingBonus : {
		name : "Natural Illusionist",
		spells : ["minor illusion"],
		selection : ["minor illusion"],
		atwill : true
	}
};
RaceList["stout halfling"] = {
	regExpSearch : /^(?=.*\b(halflings?|hobbits?)\b)(?=.*stout).*$/i,
	name : "Stout halfling",
	sortname : "Halfling, Stout",
	source : ["P", 28],
	plural : "Stout halflings",
	size : 4,
	speed : {
		walk : { spd : 25, enc : 15 }
	},
	languageProfs : ["Common", "Halfling"],
	savetxt : { adv_vs : ["frightened", "poison"] },
	dmgres : ["Poison"],
	age : " reach adulthood at age 20 and live around 150 years",
	height : " average about 3 feet tall (2'7\" + 2d4\")",
	weight : " weigh around 40 lb (35 + 2d4 lb)",
	heightMetric : " average about 90 cm tall (80 + 5d4)",
	weightMetric : " weigh around 18 kg (16 + 5d4 / 10 kg)",
	improvements : "Stout Halfling: +2 Dexterity, +1 Constitution;",
	scores : [0, 2, 1, 0, 0, 0],
	trait : "Stout Halfling (+2 Dexterity, +1 Constitution)\n\nLucky: When I roll a 1 on an attack roll, ability check, or saving throw, I can reroll the die and must use the new roll.\n\nHalfling Nimbleness: I can move through the space of any creature that is of a size larger than me."
};

// Add racial variants that are not part of the SRD
AddRacialVariant("human", "variant", {
	regExpSearch : /variant/i,
	source : ["P", 31],
	skillstxt : "Choose any one skill",
	improvements : "Human: +1 to two different ability scores of my choice;",
	scores : [0, 0, 0, 0, 0, 0],
	trait : "Human (+1 to two different ability scores of my choice)\n\nSkills: I gain proficiency in one skill of my choice.\n\nFeat: I gain one feat of my choice.",
	eval : "AddString('Feat Note 1', 'Human bonus feat', '; ');",
	removeeval : "RemoveString('Feat Note 1', 'Human bonus feat');"
});

// Add the subclasses that are not in the SRD
AddSubClass("barbarian", "totem warrior", {
	regExpSearch : /^(?=.*totem)(?=.*(warrior|fighter|marauder|barbarian|viking|(norse|tribes?|clans?)(wo)?m(a|e)n)).*$/i,
	subname : "Path of the Totem Warrior",
	fullname : "Totem Warrior",
	source : ["P", 50],
	features : {
		"subclassfeature3" : {
			name : "Spirit Seeker",
			source : ["P", 50],
			minlevel : 3,
			description : "\n   " + "I can cast Beast Sense and Speak with Animals as rituals (PHB 217 \u0026 277)",
			spellcastingBonus : [{
				name : "Spirit Seeker",
				spells : ["beast sense"],
				selection : ["beast sense"]
			}, {
				name : "Spirit Seeker",
				spells : ["speak with animals"],
				selection : ["speak with animals"]
			}]
		},
		"subclassfeature3.1" : {
			name : "Totem Spirit",
			source : ["P", 50],
			minlevel : 3,
			description : "\n   " + "Choose Bear, Eagle, Elk, Wolf, or Tiger Spirit using the \"Choose Feature\" button above",
			choices : ["Bear", "Eagle", "Wolf"],
			"bear" : {
				name : "Bear Spirit",
				description : "\n   " + "While raging, I have resistance to all damage types except psychic",
				dmgres : [["All -Psychic", "All -Psychic (rage)"]],
				eval : "SetProf('resistance', false, 'Bludgeoning', 'Barbarian: Rage', 'Bludgeon. (in Rage)'); SetProf('resistance', false, 'Piercing', 'Barbarian: Rage', 'Piercing (in Rage)'); SetProf('resistance', false, 'Slashing', 'Barbarian: Rage', 'Slashing (in Rage)');",
				removeeval : "SetProf('resistance', true, 'Bludgeoning', 'Barbarian: Rage', 'Bludgeon. (in Rage)'); SetProf('resistance', true, 'Piercing', 'Barbarian: Rage', 'Piercing (in Rage)'); SetProf('resistance', true, 'Slashing', 'Barbarian: Rage', 'Slashing (in Rage)');"
			},
			"eagle" : {
				name : "Eagle Spirit",
				description : "\n   " + "While raging without heavy armor, others have disadv. on opportunity attacks vs. me" + "\n   " + "I can use the Dash action as a bonus action",
				action : ["bonus action", " (Dash)"]
			},
			"wolf" : {
				name : "Wolf Spirit",
				description : "\n   " + "While raging, friends have advantage on melee attacks vs. hostiles within 5 ft of me"
			}
		},
		"subclassfeature6" : {
			name : "Aspect of the Beast",
			source : ["P", 50],
			minlevel : 6,
			description : "\n   " + "Choose Bear, Eagle, Elk, Wolf, or Tiger Aspect using the \"Choose Feature\" button above",
			choices : ["Bear", "Eagle", "Wolf"],
			"bear" : {
				name : "Aspect of the Bear",
				description : "\n   " + "Advantage on Strength checks to push/pull/lift/break; Carrying capacity is doubled",
				eval : "tDoc.getField('Carrying Capacity Multiplier').value *= 2;",
				removeeval : "tDoc.getField('Carrying Capacity Multiplier').value /= 2;"
			},
			"eagle" : {
				name : "Aspect of the Eagle",
				description : "\n   " + "I can see up to 1 mile away perfectly; No disadvantage on Perception from dim light"
			},
			"wolf" : {
				name : "Aspect of the Wolf",
				description : "\n   " + "I can track while traveling at a fast pace; I can move stealthily at a normal pace"
			}
		},
		"subclassfeature10" : {
			name : "Spirit Walker",
			source : ["P", 50],
			minlevel : 10,
			description : "\n   " + "I can cast Commune with Nature as a ritual (PHB 224)",
			spellcastingBonus : {
				name : "Spirit Walker",
				spells : ["commune with nature"],
				selection : ["commune with nature"]
			}
		},
		"subclassfeature14" : {
			name : "Totemic Attunement",
			source : ["P", 50],
			minlevel : 14,
			description : "\n   " + "Choose Bear, Eagle, Elk, Wolf, or Tiger Attunement using the \"Choose Feature\" button",
			choices : ["Bear", "Eagle", "Wolf"],
			"bear" : {
				name : "Bear Attunement",
				description : "\n   " + "While raging, any creature that sees me within 5 ft has disadv. on attacks vs. others" + "\n   " + "Enemies that can't perceive me or be frightened are immune"
			},
			"eagle" : {
				name : "Eagle Attunement",
				description : "\n   " + "While raging, I can fly at my current speed, but I can only stay aloft during my turn"
			},
			"wolf" : {
				name : "Wolf Attunement",
				description : "\n   " + "If my melee attack hits while raging, I can knock prone as a bonus action (up to Large)",
				action : ["bonus action", " (raging: knock prone)"]
			}
		}
	}
});
AddSubClass("bard", "college of valor", {
	regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*valor).*$/i,
	subname : "College of Valor",
	source : ["P", 55],
	attacks : [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiencies",
			source : ["P", 55],
			minlevel : 3,
			description : "\n   " + "I gain proficiency with medium armor, shields, and martial weapons",
			armor : [false, true, false, true],
			weapons : [false, true]
		},
		"subclassfeature3.1" : {
			name : "Combat Inspiration",
			source : ["P", 55],
			minlevel : 3,
			description : "\n   " + "My Bardic Inspiration can also be used to add the die to a weapon damage roll" + "\n   " + "Alternatively, it can be used as a reaction to add the die to AC against one attack"
		},
		"subclassfeature14" : {
			name : "Battle Magic",
			source : ["P", 55],
			minlevel : 14,
			description : "\n   " + "As a bonus action when I use my action to cast a bard spell, I can make a weapon attack",
			action : ["bonus action", " (with Bard spell)"]
		}
	}
});
AddSubClass("cleric", "knowledge domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(knowledge|wisdom|learning)).*$/i,
	subname : "Knowledge Domain",
	source : ["P", 59],
	spellcastingExtra : ["command", "identify", "augury", "suggestion", "nondetection", "speak with dead", "arcane eye", "confusion", "legend lore", "scrying"],
	features : {
		"subclassfeature1" : {
			name : "Blessings of Knowledge",
			source : ["P", 59],
			minlevel : 1,
			description : "\n   " + "I learn two languages and gain proficiency and expertise with two skills" + "\n   " + "I can choose from the following: Arcana, History, Nature, or Religion",
			skillstxt : "\n\n" + toUni("Knowledge Domain") + ": Choose two from Arcana, History, Nature, and Religion. You also gain expertise with these skills.",
			languageProfs : [2]
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Knowledge of Ages",
			source : ["P", 59],
			minlevel : 2,
			description : "\n   " + "As an action, I gain proficiency with a chosen skill or tool for 10 minutes",
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Channel Divinity: Read Thoughts",
			source : ["P", 59],
			minlevel : 6,
			description : "\n   " + "As an action, one creature within 60 ft I can see must make a Wisdom save" + "\n   " + "If it fails, I can read its surface thoughts for 1 min, as long as it's within 60 ft of me" + "\n   " + "As an action, I can end this and cast Suggestion on it (it fails its save automatically)" + "\n   " + "If it succeeded on its save, I can't use this feature again on it until I finish a long rest",
			action : ["action", ""]
		},
		"subclassfeature8" : {
			name : "Potent Spellcasting",
			source : ["P", 60],
			minlevel : 8,
			description : "\n   " + "I can add my Wisdom modifier to the damage I deal with my cleric cantrips",
			calcChanges : {
				atkCalc : ["if (classes.known.cleric && classes.known.cleric.level > 7 && thisWeapon[4].indexOf('cleric') !== -1 && thisWeapon[3] && SpellsList[thisWeapon[3]].level === 0) { output.extraDmg += What('Wis Mod'); }; ", "My cleric cantrips get my Wisdom modifier added to their damage."]
			}
		},
		"subclassfeature17" : {
			name : "Visions of the Past",
			source : ["P", 60],
			minlevel : 17,
			description : "\n   " + "I can see recent events of an object or area by concentrating and praying for 1 min" + "\n   " + "I can meditate this way for up to a number of minutes equal to my Wisdom score" + "\n   - " + "Object Reading (after meditating for 1 minute per owner):" + "\n      " + "If an owner owned it in the last Wis score in days, I learn how that owner got/lost it" + "\n      " + "I also learn the most recent significant event involving the object and the owner" + "\n   - " + "Area Reading (my immediate surroundings, up to a 50-foot cube):" + "\n      " + "Going back my Wisdom score in days, per minute I meditate, I learn about one event" + "\n      " + "This starts with the most recent event; It can be significant or just important to me",
			usages : 1,
			recovery : "short rest"
		}
	}
});
AddSubClass("cleric", "light domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*\b(light|sun|shining)\b).*$/i,
	subname : "Light Domain",
	source : ["P", 61],
	spellcastingExtra : ["burning hands", "faerie fire", "flaming sphere", "scorching ray", "daylight", "fireball", "guardian of faith", "wall of fire", "flame strike", "scrying"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Cantrip",
			source : ["P", 61],
			minlevel : 1,
			description : "\n   " + "I learn the Light cantrip if I didn't already know it",
			spellcastingBonus : {
				name : "Bonus Cantrip (Light)",
				spells : ["light"],
				selection : ["light"]
			}
		},
		"subclassfeature1.1" : {
			name : "Warding Flare",
			source : ["P", 61],
			minlevel : 1,
			description : desc([
				"When a creature within 30 ft attacks me and I can see it, I can interpose divine light",
				"As a reaction, I impose disadv. on the attacker's attack roll (unless it can't be blinded)"
			]),
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
			action : ["reaction", ""]
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Radiance of the Dawn",
			source : ["P", 61],
			minlevel : 2,
			description : "\n   " + "As an action, in 30 ft, magical darkness is dispelled and hostiles must make a Con save" + "\n   " + "Each takes radiant damage, saves for half, and negates with total cover",
			additional : ["", "2d10 + 2 damage", "2d10 + 3 damage", "2d10 + 4 damage", "2d10 + 5 damage", "2d10 + 6 damage", "2d10 + 7 damage", "2d10 + 8 damage", "2d10 + 9 damage", "2d10 + 10 dmg", "2d10 + 11 dmg", "2d10 + 12 dmg", "2d10 + 13 dmg", "2d10 + 14 dmg", "2d10 + 15 dmg", "2d10 + 16 dmg", "2d10 + 17 dmg", "2d10 + 18 dmg", "2d10 + 19 dmg", "2d10 + 20 dmg"],
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Improved Flame",
			source : ["P", 61],
			minlevel : 6,
			description : "\n   " + "I can also use my Warding Flare if another is attacked by a creature within 30 ft of me"
		},
		"subclassfeature8" : {
			name : "Potent Spellcasting",
			source : ["P", 61],
			minlevel : 8,
			description : "\n   " + "I can add my Wisdom modifier to the damage I deal with my cleric cantrips",
			calcChanges : {
				atkCalc : ["if (classes.known.cleric && classes.known.cleric.level > 7 && thisWeapon[4].indexOf('cleric') !== -1 && thisWeapon[3] && SpellsList[thisWeapon[3]].level === 0) { output.extraDmg += What('Wis Mod'); }; ", "My cleric cantrips get my Wisdom modifier added to their damage."]
			}
		},
		"subclassfeature17" : {
			name : "Corona of Light",
			source : ["P", 61],
			minlevel : 17,
			description : "\n   " + "As an action, I have an aura of 60 ft sunlight and 30 ft dim light for 1 min" + "\n   " + "Enemies in the sunlight have disadv. on saves vs. spells that deal fire or radiant damage",
			action : ["action", " (start/stop)"]
		}
	}
});
AddSubClass("cleric", "nature domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*\b(nature|natural|animal|element(s|al)?)\b).*$/i,
	subname : "Nature Domain",
	source : ["P", 62],
	spellcastingExtra : ["animal friendship", "speak with animals", "barkskin", "spike growth", "plant growth", "wind wall", "dominate beast", "grasping vine", "insect plague", "tree stride"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Proficiency",
			source : ["P", 62],
			minlevel : 1,
			description : "\n   " + "I gain proficiency with heavy armor",
			armor : [false, false, true, false]
		},
		"subclassfeature1.1" : {
			name : "Acolyte of Nature",
			source : ["P", 62],
			minlevel : 1,
			description : "\n   " + "I learn a druid cantrip and proficiency with a skill: Animal Handling, Nature, Survival",
			skillstxt : "\n\n" + toUni("Nature Domain") + ": Choose one from Animal Handling, Nature, or Survival.",
			spellcastingBonus : {
				name : "Acolyte of Nature",
				"class" : "druid",
				level : [0, 0]
			}
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Charm Animals and Plants",
			source : ["P", 62],
			minlevel : 2,
			description : "\n   " + "As an action, all beasts and plants within 30 ft that I can see must make a Wis save" + "\n   " + "If failed, each is charmed and friendly to allies and me for 1 min or until damaged",
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Dampen Elements",
			source : ["P", 62],
			minlevel : 6,
			description : "\n   " + "As a reaction, if an ally in 30 ft or I takes acid/cold/fire/lightning/thunder damage," + "\n   " + "I can grant resistance against that instance of damage",
			action : ["reaction", ""]
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : ["P", 62],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
			additional : levels.map(function (n) {
				if (n < 8) return "";
				return "+" + (n < 14 ? 1 : 2) + "d8 cold/fire/lightning damage (choice)";
			}),
			calcChanges : {
				atkAdd : ["if (classes.known.cleric && classes.known.cleric.level > 7 && !isSpell) {fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 cold/fire/lightning damage'; }; ", "Once per turn, I can have one of my weapon attacks that hit do extra cold, fire, or lightning damage (my choice)."]
			}
		},
		"subclassfeature17" : {
			name : "Master of Nature",
			source : ["P", 62],
			minlevel : 17,
			description : "\n   " + "As a bonus action, I can command creatures that are charmed by my Channel Divinity",
			action : ["bonus action", ""]
		}
	}
});
AddSubClass("cleric", "tempest domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*\b(tempest|destruction|storm)\b).*$/i,
	subname : "Tempest Domain",
	source : ["P", 62],
	spellcastingExtra : ["fog cloud", "thunderwave", "gust of wind", "shatter", "call lightning", "sleet storm", "control water", "ice storm", "destructive wave", "insect plague"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Proficiency",
			source : ["P", 62],
			minlevel : 1,
			description : "\n   " + "I gain proficiency with martial weapons and heavy armor",
			armor : [false, false, true, false],
			weapons : [false, true]
		},
		"subclassfeature1.1" : {
			name : "Wrath of the Storm",
			source : ["P", 62],
			minlevel : 1,
			description : "\n   " + "As a reaction, when a creature I can see within 5 ft hits me, I can thunderously rebuke" + "\n   " + "It takes 2d8 lightning or thunder damage (my choice) that a Dex save can halve",
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
			action : ["reaction", ""]
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Destructive Wrath",
			source : ["P", 62],
			minlevel : 2,
			description : "\n   " + "Instead of rolling, I can do maximum damage when I do lightning or thunder damage"
		},
		"subclassfeature6" : {
			name : "Thunderbolt Strike",
			source : ["P", 62],
			minlevel : 6,
			description : "\n   " + "When I deal lightning damage to a Large or smaller foe, I can push it up to 10 ft away"
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : ["P", 62],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
			additional : levels.map(function (n) {
				if (n < 8) return "";
				return "+" + (n < 14 ? 1 : 2) + "d8 thunder damage";
			}),
			calcChanges : {
				atkAdd : ["if (classes.known.cleric && classes.known.cleric.level > 7 && !isSpell) {fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 thunder damage'; }; ", "Once per turn, I can have one of my weapon attacks that hit do extra thunder damage."]
			}
		},
		"subclassfeature17" : {
			name : "Stormborn",
			source : ["P", 62],
			minlevel : 17,
			description : "\n   " + "Whenever I'm not underground or indoors, I have a fly speed equal to my current speed",
			speed : { fly : { spd : "walk", enc : "walk" } }
		}
	}
});
AddSubClass("cleric", "trickery domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(trickery|trickster|illusion)).*$/i,
	subname : "Trickery Domain",
	source : ["P", 63],
	spellcastingExtra : ["charm person", "disguise self", "mirror image", "pass without trace", "blink", "dispel magic", "dimension door", "polymorph", "dominate person", "modify memory"],
	features : {
		"subclassfeature1" : {
			name : "Blessing of the Trickster",
			source : ["P", 63],
			minlevel : 1,
			description : "\n   " + "As an action, a willing creature I touch (not me) has adv. on Dex (Stealth) checks" + "\n   " + "This lasts for 1 hour or until I use it again",
			action : ["action", ""]
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Invoke Duplicity",
			source : ["P", 63],
			minlevel : 2,
			description : desc([
				"As an action, I create illusory duplicates of myself within 30 ft of me for 1 min (conc)",
				"As a bonus action, I can move them 30 ft to space(s) I can see within 120 ft of me",
				"I can cast spells as though I was in an duplicate's space, using my own senses",
				"I have advantage on attacks if the target is within 5 ft of a duplicate and me"
			]),
			additional : levels.map(function (n) { return n < 2 ? "" : (n < 17 ? 1 : 2) + " illusory duplicate" + (n < 17 ? "" : "s"); }),
			action : ["action", ""],
			eval : "AddAction('bonus action', 'Move Duplicate(s)', 'Cleric (Trickery Domain) - Channel Divinity: Invoke Duplicity')",
			removeeval : "RemoveAction('bonus action', 'Move Duplicate(s)')"
		},
		"subclassfeature6" : {
			name : "Channel Divinity: Cloak of Shadows",
			source : ["P", 63],
			minlevel : 6,
			description : "\n   " + "As an action, I become invisible until the end of my next turn or I attack/cast a spell",
			action : ["action", ""]
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : ["P", 63],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
			additional : levels.map(function (n) { return n < 8 ? "" : "+" + (n < 14 ? 1 : 2) + "d8 poison damage"; }),
			calcChanges : {
				atkAdd : ["if (classes.known.cleric && classes.known.cleric.level > 7 && !isSpell) {fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 poison damage'; }; ", "Once per turn, I can have one of my weapon attacks that hit do extra poison damage."]
			}
		},
		"subclassfeature17" : {
			name : "Improved Duplicity",
			source : ["P", 63],
			minlevel : 17,
			description : desc([
				"When I use Invoke Duplicity, I make four illusory duplicates instead of one",
				"I can move any number of the illusory duplicates as part of the same bonus action"
			])
		}
	}
});
AddSubClass("cleric", "war domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*\b(war|fighting|conflict)\b).*$/i,
	subname : "War Domain",
	source : ["P", 63],
	spellcastingExtra : ["divine favor", "shield of faith", "magic weapon", "spiritual weapon", "crusader's mantle", "spirit guardians", "freedom of movement", "stoneskin", "flame strike", "hold monster"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Proficiency",
			source : ["P", 63],
			minlevel : 1,
			description : "\n   " + "I gain proficiency with martial weapons and heavy armor",
			armor : [false, false, true, false],
			weapons : [false, true]
		},
		"subclassfeature1.1" : {
			name : "War Priest",
			source : ["P", 63],
			minlevel : 1,
			description : "\n   " + "When I use the Attack action, I can make a weapon attack as a bonus action",
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
			action : ["bonus action", " (with Attack action)"]
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Guided Strike",
			source : ["P", 63],
			minlevel : 2,
			description : "\n   " + "When I make an attack roll, I can add a +10 bonus to the roll after seeing the d20 roll"
		},
		"subclassfeature6" : {
			name : "Channel Divinity: War God's Blessing",
			source : ["P", 63],
			minlevel : 6,
			description : desc([
				"As a reaction, when a creature within 30 ft makes an attack roll, I can grant a ",
				"The creature then adds a +10 bonus to the roll; I can do this after seeing the d20 roll"
			]),
			action : ["reaction", ""]
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : ["P", 63],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
			additional : levels.map(function (n) {
				if (n < 8) return "";
				return "+" + (n < 14 ? 1 : 2) + "d8 damage of the weapon's type";
			}),
			calcChanges : {
				atkAdd : ["if (classes.known.cleric && classes.known.cleric.level > 7 && !isSpell) {fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 damage'; }; ", "Once per turn, I can have one of my weapon attacks that hit do extra damage."]
			}
		},
		"subclassfeature17" : {
			name : "Avatar of Battle",
			source : ["P", 63],
			minlevel : 17,
			description : "\n   " + "I have resistance to bludgeoning/piercing/slashing damage from nonmagical weapons",
			dmgres : [["Bludgeoning", "Bludg. (nonmagical)"], ["Piercing", "Pierc. (nonmagical)"], ["Slashing", "Slash. (nonmagical)"]]
		}
	}
});
AddSubClass("druid", "circle of the moon", {
	regExpSearch : /^(?=.*(druid|shaman))((?=.*\bmoon\b)|((?=.*\bmany\b)(?=.*\bforms?\b))).*$/i,
	subname : "Circle of the Moon",
	source : ["P", 69],
	features : {
		"subclassfeature2" : {
			name : "Circle Forms",
			source : ["P", 69],
			minlevel : 2,
			description : "\n   " + "I am able to transform into more dangerous animal forms when using Wild Shape"
		},
		"subclassfeature2.wild shape" : {
			name : "Wild Shape",
			source : ["P", 66],
			minlevel : 2,
			description : "\n   " + "As a bonus action, I assume the shape of a beast I have seen before with these rules:" + "\n    - " + "I gain all its game statistics except Intelligence, Wisdom, or Charisma" + "\n    - " + "I get its skill/saving throw prof. while keeping my own, using whichever is higher" + "\n    - " + "I assume the beast's HP and HD; I get mine back when I revert back" + "\n    - " + "I can't cast spells in beast form, but transforming doesn't break concentration" + "\n    - " + "I retain features from class, race, etc., but I don't retain special senses" + "\n    - " + "I can choose whether equipment falls to the ground, merges, or stays worn" + "\n    - " + "I revert if out of time or unconscious; if KOd by damage, excess damage carries over",
			usages : [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, "\u221E\u00D7 per "],
			recovery : "short rest",
			additional : ["", "CR 1, no fly/swim; 1 hour", "CR 1, no fly/swim; 1 hour", "CR 1, no fly; 2 hours", "CR 1, no fly; 2 hours", "CR 2, no fly; 3 hours", "CR 2, no fly; 3 hours", "CR 2; 4 hours", "CR 3; 4 hours", "CR 3; 5 hours", "CR 3; 5 hours", "CR 4; 6 hours", "CR 4; 6 hours", "CR 4; 7 hours", "CR 5; 7 hours", "CR 5; 8 hours", "CR 5; 8 hours", "CR 6; 9 hours", "CR 6; 9 hours", "CR 6; 10 hours"],
			action : ["bonus action", " (start/stop)"],
			eval : "RemoveAction('action', 'Wild Shape (start)'); RemoveAction('bonus action', 'Wild Shape (end)');"
		},
		"subclassfeature2.1" : {
			name : "Combat Wild Shape",
			source : ["P", 69],
			minlevel : 2,
			description : "\n   " + "As a bonus action while in Wild Shape, I can expend spell slots to heal myself" + "\n   " + "I regain 1d8 HP per expended spell slot level; I can use Wild Shape as a bonus action",
			action : ["bonus action", " (heal)"],
			removeeval : "AddAction('action', 'Wild Shape (start)', 'Druid'); AddAction('bonus action', 'Wild Shape (end)', 'Druid');"

		},
		"subclassfeature6" : {
			name : "Primal Strike",
			source : ["P", 69],
			minlevel : 6,
			description : "\n   " + "My attacks count as magical while in Wild Shape"
		},
		"subclassfeature10" : {
			name : "Elemental Wild Shape",
			source : ["P", 69],
			minlevel : 10,
			description : "\n   " + "I can transform into an air/earth/fire/water elemental by expending 2 Wild Shape uses"
		},
		"subclassfeature14" : {
			name : "Thousand Forms",
			source : ["P", 69],
			minlevel : 14,
			description : "\n   " + "I can cast Alter Self at will without using spell slots (PHB 211)"
		}
	}

});
AddSubClass("fighter", "battle master", {
	regExpSearch : /^(?=.*(war|fighter|battle|martial))(?=.*master).*$/i,
	subname : "Battle Master",
	fullname : "Battle Master",
	source : ["P", 73],
	abilitySave : 1,
	abilitySaveAlt : 2,
	features : {
		"subclassfeature3" : {
			name : "Combat Superiority",
			source : ["P", 73],
			minlevel : 3,
			description : "\n   " + "I gain a number of superiority dice that I can use to fuel special Maneuvers" + "\n   " + "I regain all superiority dice after a short rest",
			additional : ["", "", "d8", "d8", "d8", "d8", "d8", "d8", "d8", "d10", "d10", "d10", "d10", "d10", "d10", "d10", "d10", "d12", "d12", "d12"],
			usages : [0, 0, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6],
			recovery : "short rest"
		},
		"subclassfeature3.1" : {
			name : "Maneuvers",
			source : ["P", 73],
			minlevel : 3,
			description : "\n   " + "Use the \"Choose Feature\" button above to add a Maneuver to the third page" + "\n   " + "I can use a Maneuver by expending a superiority die (only one Maneuver per attack)",
			additional : ["", "", "3 known", "3 known", "3 known", "3 known", "5 known", "5 known", "5 known", "7 known", "7 known", "7 known", "7 known", "7 known", "9 known", "9 known", "9 known", "9 known", "9 known", "9 known"],
			extraname : "Maneuver",
			extrachoices : ["Commander's Strike", "Disarming Attack", "Distracting Strike", "Evasive Footwork", "Feinting Attack", "Goading Attack", "Lunging Attack", "Maneuvering Attack", "Menacing Attack", "Parry", "Precision Attack", "Pushing Attack", "Rally", "Riposte", "Sweeping Attack", "Trip Attack"],
			"commander's strike" : {
				name : "Commander's Strike",
				source : ["P", 74],
				description : "\n   " + "I forgo one attack of my Attack action to use a bonus action to direct an ally I see/hear" + "\n   " + "The ally can use a reaction to make an attack, adding the superiority die to damage",
				action : ["bonus action", " (with Attack action)"]
			},
			"disarming attack" : {
				name : "Disarming Attack",
				source : ["P", 74],
				description : "\n   " + "Use after hitting a creature; I add the superiority die to my attack's damage" + "\n   " + "Target makes a Strength save or drops a held object of my choice to its feet"
			},
			"distracting strike" : {
				name : "Distracting Strike",
				source : ["P", 74],
				description : "\n   " + "Use after hitting a creature; I add the superiority die to my attack's damage" + "\n   " + "The next attack of an ally before my next turn has adv. against the creature"
			},
			"evasive footwork" : {
				name : "Evasive Footwork",
				source : ["P", 74],
				description : "\n   " + "Use when moving; I add the superiority die to my AC until I stop moving"
			},
			"feinting attack" : {
				name : "Feinting Attack",
				source : ["P", 74],
				description : "\n   " + "As a bonus action, I can feint to gain adv. on my next attack this turn vs. a target in 5 ft" + "\n   " + "If the attack hits, I add the superiority die to my attack's damage",
				action : ["bonus action", ""]
			},
			"goading attack" : {
				name : "Goading Attack",
				source : ["P", 74],
				description : "\n   " + "Use after hitting a creature; I add the superiority die to my attack's damage" + "\n   " + "Target makes a Wis save or has disadv. vs. other targets until the end of my next turn"
			},
			"lunging attack" : {
				name : "Lunging Attack",
				source : ["P", 74],
				description : "\n   " + "I can spend a superiority die to increase the reach of a melee weapon attack by 5 ft" + "\n   " + "If the attack hits, I add the superiority die to my attack's damage"
			},
			"maneuvering attack" : {
				name : "Maneuvering Attack",
				source : ["P", 74],
				description : "\n   " + "Use after hitting a creature; I add the superiority die to my attack's damage" + "\n   " + "Ally can use reaction to move half speed without opportunity attack from the target"

			},
			"menacing attack" : {
				name : "Menacing Attack",
				source : ["P", 74],
				description : "\n   " + "Use after hitting a creature; I add the superiority die to my attack's damage" + "\n   " + "Target makes a Wisdom save or is frightened of me until the end of my next turn"
			},
			"parry" : {
				name : "Parry",
				source : ["P", 74],
				description : "\n   " + "When damaged in melee, I can use a reaction to reduce it by superiority die + Dex mod",
				action : ["reaction", " (when damaged in melee)"]
			},
			"precision attack" : {
				name : "Precision Attack",
				source : ["P", 74],
				description : "\n   " + "I add the superiority die to my attack roll, either before or after rolling"
			},
			"pushing attack" : {
				name : "Pushing Attack",
				source : ["P", 74],
				description : "\n   " + "Use after hitting a creature; I add the superiority die to the attack's damage" + "\n   " + "If target is Large or smaller, it must make a Strength save or be pushed up to 15 ft away"
			},
			"rally" : {
				name : "Rally",
				source : ["P", 74],
				description : "\n   " + "Ally that can see/hear me gets temporary HP equal to superiority die + Charisma mod",
				action : ["bonus action", ""]
			},
			"riposte" : {
				name : "Riposte",
				source : ["P", 74],
				description : "\n   " + "When missed in melee, I can use my reaction to make one melee attack vs. the attacker" + "\n   " + "If the attack hits, I add the superiority die to my attack's damage",
				action : ["reaction", " (after missed in melee)"]
			},
			"sweeping attack" : {
				name : "Sweeping Attack",
				source : ["P", 74],
				description : "\n   " + "Use after hitting a creature and a second creature is within 5 ft of the first" + "\n   " + "If the original attack roll hits this second creature, it takes the superiority die in damage"
			},
			"trip attack" : {
				name : "Trip Attack",
				source : ["P", 74],
				description : "\n   " + "Use after hitting a creature; I add the superiority die to the attack's damage" + "\n   " + "If target is Large or smaller, it must make a Strength save or be knocked prone"
			}
		},
		"subclassfeature3.2" : {
			name : "Student of War",
			source : ["P", 73],
			minlevel : 3,
			description : "\n   " + "I have proficiency with one artisan's tool set of my choice",
			toolProfs : [["Artisan's tools", 1]]
		},
		"subclassfeature7" : {
			name : "Know Your Enemy",
			source : ["P", 73],
			minlevel : 7,
			description : "\n   " + "If I spend 1 min studying someone, the DM will tell me info about him/her"
		},
		"subclassfeature10" : {
			name : "Improved Combat Superiority",
			source : ["P", 74],
			minlevel : 10,
			description : "\n   " + "My superiority dice turn into d10s at 10th level and into d12s at 18th level"
		},
		"subclassfeature15" : {
			name : "Relentless",
			source : ["P", 74],
			minlevel : 15,
			description : "\n   " + "I regain one superiority die if I have no more remaining when I roll initiative"
		}
	}
});
AddSubClass("fighter", "eldritch knight", {
	regExpSearch : /^(?!.*(exalted|sacred|holy|divine|nature|natural|purple.*dragon|green))(?=.*(knight|fighter|warrior|militant|warlord|phalanx|gladiator|trooper))(?=.*\b(eldritch|arcane|magic|mage|witch)\b).*$/i,
	subname : "Eldritch Knight",
	fullname : "Eldritch Knight",
	source : ["P", 75],
	abilitySave : 4,
	spellcastingFactor : 3,
	spellcastingList : {
		"class" : "wizard",
		school : ["Evoc", "Abjur"],
		level : [0, 4] //lower and higher limit
	},
	spellcastingKnown : {
		cantrips : [0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
		spells : [0, 0, 2, 3, 3, 3, 4, 4, 4, 5, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9]
	},
	features : {
		"action surge" : {
			name : "Action Surge",
			source : ["P", 72],
			minlevel : 2,
			description : "\n   " + "I can take one additional action on my turn on top of my normally allowed actions",
			usages : [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2],
			recovery : "short rest",
			additional : ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "30 ft teleport", "30 ft teleport", "30 ft teleport", "30 ft teleport", "30 ft teleport", "30 ft teleport"]
		},
		"subclassfeature3" : {
			name : "Spellcasting",
			source : ["P", 75],
			minlevel : 3,
			description : "\n   " + "I can cast known wizard cantrips/spells, using Intelligence as my spellcasting ability",
			additional : ["2 cantrips known", "2 cantrips known", "2 cantrips \u0026 3 spells known", "2 cantrips \u0026 4 spells known", "2 cantrips \u0026 4 spells known", "2 cantrips \u0026 4 spells known", "2 cantrips \u0026 5 spells known", "2 cantrips \u0026 6 spells known", "2 cantrips \u0026 6 spells known", "3 cantrips \u0026 7 spells known", "3 cantrips \u0026 8 spells known", "3 cantrips \u0026 8 spells known", "3 cantrips \u0026 9 spells known", "3 cantrips \u0026 10 spells known", "3 cantrips \u0026 10 spells known", "3 cantrips \u0026 11 spells known", "3 cantrips \u0026 11 spells known", "3 cantrips \u0026 11 spells known", "3 cantrips \u0026 12 spells known", "3 cantrips \u0026 13 spells known"],
			spellcastingBonus : { //for the spells gained at level 3, 8, 14, 20
				name : "From any School",
				"class" : "wizard",
				times : [0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4],
				level : [1, 4], //lower and higher limit
			}
		},
		"subclassfeature3.1" : {
			name : "Weapon Bond",
			source : ["P", 75],
			minlevel : 3,
			description : "\n   " + "I can bond with up to two weapons by spending a short rest with each" + "\n   " + "I can't be disarmed of a bonded weapon and I can summon one as a bonus action",
			action : ["bonus action", ""]
		},
		"subclassfeature7" : {
			name : "War Magic",
			source : ["P", 75],
			minlevel : 7,
			description : "\n   " + "When I use my action to cast a cantrip, I can make a weapon attack as a bonus action",
			action : ["bonus action", ""]
		},
		"subclassfeature10" : {
			name : "Eldritch Strike",
			source : ["P", 75],
			minlevel : 10,
			description : "\n   " + "A creature hit by my weapon attack has disadv. on the save vs. the next spell I cast" + "\n   " + "This lasts until the end of my next turn"
		},
		"subclassfeature15" : {
			name : "Arcane Charge",
			source : ["P", 75],
			minlevel : 15,
			description : "\n   " + "When I use Action Surge, I can also teleport up to 30 ft to an empty space I can see" + "\n   " + "I can do so before or after the extra action"
		},
		"subclassfeature18" : {
			name : "Improved War Magic",
			source : ["P", 75],
			minlevel : 18,
			description : "\n   " + "When I use my action to cast a spell, I can make a weapon attack as a bonus action",
			action : ["bonus action", ""]
		}
	}
});
AddSubClass("monk", "way of the four elements", {
	regExpSearch : /^(?=.*\b(four|4)\b)((?=.*elements?)|((?=.*earth)|(?=.*(wind|air))|(?=.*fire)|(?=.*water)))((?=.*(monk|monastic))|(((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior)))).*$/i,
	subname : "Way of the Four Elements",
	source : ["P", 80],
	features : {
		"subclassfeature3" : {
			name : "Disciple of the Elements",
			source : ["P", 80],
			minlevel : 3,
			description : "\n   " + "I know Elemental Attunement and additional Elemental Disciplines, depending on level" + "\n   " + "Use the \"Choose Feature\" button above to add Elemental Disciplines to the third page" + "\n   " + "From 5th level onward, I can use additional ki points to increase their spell slot level" + "\n   " + "I can trade known Elemental Disciplines for others when I gain new ones",
			additional : ["", "", "2 known", "2 known", "2 known; 3 max ki", "3 known; 3 max ki", "3 known; 3 max ki", "3 known; 3 max ki", "3 known; 4 max ki", "3 known; 4 max ki", "4 known; 4 max ki", "4 known; 4 max ki", "4 known; 5 max ki", "4 known; 5 max ki", "4 known; 5 max ki", "4 known; 5 max ki", "5 known; 6 max ki", "5 known; 6 max ki", "5 known; 6 max ki", "5 known; 6 max ki"],
			extraname : "Elemental Discipline",
			extrachoices : ["Breath of Winter (prereq: level 17 monk)", "Clench of the North Wind (prereq: level 6 monk)", "Eternal Mountain Defense (prereq: level 17 monk)", "Fangs of the Fire Snake", "Fist of Four Thunders", "Fist of Unbroken Air", "Flames of the Phoenix (prereq: level 11 monk)", "Gong of the Summit (prereq: level 6 monk)", "Mist Stance (prereq: level 11 monk)", "Ride the Wind (prereq: level 11 monk)", "Rive of Hungry Flame (prereq: level 17 monk)", "Rush of the Gale Spirits", "Shape the Flowing River", "Sweeping Cinder Strike", "Water Whip", "Wave of Rolling Earth (prereq: level 17 monk)"],
			eval : "ClassFeatureOptions(['monk', 'subclassfeature3', 'elemental attunement', 'extra']);",
			removeeval : "ClassFeatureOptions(['monk', 'subclassfeature3', 'elemental attunement', 'extra'], 'remove');",
			"elemental attunement" : {
				name : "Elemental Attunement",
				source : ["P", 81],
				description : "\n   " + "As an action, I can briefly control elemental forces within 30 ft of me" + "\n   " + "I can make a harmless sensory effect, light/snuff light, chill/warm 1 lb for 1 hour," + "\n   " + "or I cause earth/fire/water/mist in a 1 ft cube to shape itself into a form for 1 minute",
				action : ["action", ""]
			},
			"breath of winter (prereq: level 17 monk)" : {
				name : "Breath of Winter",
				source : ["P", 81],
				description : " [6 ki points]" + "\n   " + "As an action, I can cast Cone of Cold without material components (PHB 224)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Breath of Winter",
					spells : ["cone of cold"],
					selection : ["cone of cold"],
					firstCol : 6
				},
				spellFirstColTitle : "Ki",
				prereqeval : "classes.known.monk.level >= 17"
			},
			"clench of the north wind (prereq: level 6 monk)" : {
				name : "Clench of the North Wind",
				source : ["P", 81],
				description : " [3 ki points]" + "\n   " + "As an action, I can cast Hold Person without material components (PHB 251)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Clench of the North Wind",
					spells : ["hold person"],
					selection : ["hold person"],
					firstCol : 3
				},
				spellFirstColTitle : "Ki",
				prereqeval : "classes.known.monk.level >= 6"
			},
			"eternal mountain defense (prereq: level 17 monk)" : { // errata from level 11 to level 17
				name : "Eternal Mountain Defense",
				source : ["P", 81],
				description : " [5 ki points]" + "\n   " + "As an action, I can cast Stoneskin on myself without material components (PHB 278)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Eternal Mountain Defense",
					spells : ["stoneskin"],
					selection : ["stoneskin"],
					firstCol : 5
				},
				spellFirstColTitle : "Ki",
				prereqeval : "classes.known.monk.level >= 17"
			},
			"fangs of the fire snake" : {
				name : "Fangs of the Fire Snake",
				source : ["P", 81],
				description : " [1 ki point]" + "\n   " + "With Attack action, my unarmed strikes +10 ft reach and deal fire damage this turn" + "\n   " + "Also, I can spent an additional 1 ki point to cause an attack to deal +1d10 fire damage",
				calcChanges : {
					atkAdd : ["if ((/unarmed strike/i).test(WeaponName) && (/^(?=.*fire)(?=.*snake).*$/i).test(WeaponText)) {fields.Description += (fields.Description ? '; ' : '') + 'After hit, spend 1 ki point for +1d10 fire damage'; fields.Range = 'Melee (15 ft reach)'; fields.Damage_Type = 'fire'; }; ", "If I include the words 'Fire Snake' in the name of an unarmed strike, it gets +10 ft reach, does fire damage, and gains the option to deal +1d10 fire damage by spending 1 additional ki point."]
				}
			},
			"fist of four thunders" : {
				name : "Fist of Four Thunders",
				source : ["P", 81],
				description : " [2 ki points]" + "\n   " + "As an action, I can cast Thunderwave (PHB 282)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Fist of Four Thunders",
					spells : ["thunderwave"],
					selection : ["thunderwave"],
					firstCol : 2
				},
				spellFirstColTitle : "Ki"
			},
			"fist of unbroken air" : {
				name : "Fist of Unbroken Air",
				source : ["P", 81],
				description : " [2 ki points; +1d10/extra ki point]" + "\n   " + "As an action, target within 30 ft takes 3d10 bludgeoning damage (spend ki for more)" + "\n   " + "It is also pushed up to 20 ft away from me and knocked prone" + "\n   " + "It can make a Strength save to halve damage and avoid being pushed and knocked prone",
				action : ["action", ""]
			},
			"flames of the phoenix (prereq: level 11 monk)" : {
				name : "Flames of the Phoenix",
				source : ["P", 81],
				description : " [4 ki points]" + "\n   " + "As an action, I can cast Fireball without material components (PHB 241)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Flames of the Phoenix",
					spells : ["fireball"],
					selection : ["fireball"],
					firstCol : 4
				},
				spellFirstColTitle : "Ki",
				prereqeval : "classes.known.monk.level >= 11"
			},
			"gong of the summit (prereq: level 6 monk)" : {
				name : "Gong of the Summit",
				source : ["P", 81],
				description : " [3 ki points]" + "\n   " + "As an action, I can cast Shatter without material components (PHB 275)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Gong of the Summit",
					spells : ["shatter"],
					selection : ["shatter"],
					firstCol : 3
				},
				spellFirstColTitle : "Ki",
				prereqeval : "classes.known.monk.level >= 6"
			},
			"mist stance (prereq: level 11 monk)" : {
				name : "Mist Stance",
				source : ["P", 81],
				description : " [4 ki points]" + "\n   " + "As an action, I can cast Gaseous Form on myself without material components (PHB 244)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Mist Stance",
					spells : ["gaseous form"],
					selection : ["gaseous form"],
					firstCol : 4
				},
				spellFirstColTitle : "Ki",
				prereqeval : "classes.known.monk.level >= 11"
			},
			"ride the wind (prereq: level 11 monk)" : {
				name : "Ride the Wind",
				source : ["P", 81],
				description : " [4 ki points]" + "\n   " + "As an action, I can cast Fly on myself without material components (PHB 243)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Ride the Wind",
					spells : ["fly"],
					selection : ["fly"],
					firstCol : 4
				},
				spellFirstColTitle : "Ki",
				prereqeval : "classes.known.monk.level >= 11"
			},
			"rive of hungry flame (prereq: level 17 monk)" : {
				name : "Rive of Hungry Flame",
				source : ["P", 81],
				description : " [5 ki points]" + "\n   " + "As an action, I can cast Wall of Fire without material components (PHB 285)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Rive of Hungry Flame",
					spells : ["wall of fire"],
					selection : ["wall of fire"],
					firstCol : 5
				},
				spellFirstColTitle : "Ki",
				prereqeval : "classes.known.monk.level >= 17"
			},
			"rush of the gale spirits" : {
				name : "Rush of the Gale Spirits",
				source : ["P", 81],
				description : " [2 ki points]" + "\n   " + "As an action, I can cast Gust of Wind without material components (PHB 248)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Rush of the Gale Spirits",
					spells : ["gust of wind"],
					selection : ["gust of wind"],
					firstCol : 2
				},
				spellFirstColTitle : "Ki"
			},
			"shape the flowing river" : {
				name : "Shape the Flowing River",
				source : ["P", 81],
				description : " [1 ki point]" + "\n   " + "As an action, I can affect ice/water up to a 30-foot cube within 120 ft" + "\n   " + "I can switch it between water/ice states and reshape ice up to half its largest dimension",
				action : ["action", ""]
			},
			"sweeping cinder strike" : {
				name : "Sweeping Cinder Strike",
				source : ["P", 81],
				description : " [2 ki points]" + "\n   " + "As an action, I can cast Burning Hands (PHB 220)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Sweeping Cinder Strike",
					spells : ["burning hands"],
					selection : ["burning hands"],
					firstCol : 2
				},
				spellFirstColTitle : "Ki"
			},
			"water whip" : {
				name : "Water Whip",
				source : ["P", 81],
				description : " [2 ki points; +1d10/extra ki point]" + "\n   " + "As an action, a creature within 30 ft takes 3d10 bludgeoning damage (spend ki for more)" + "\n   " + "It is also knocked prone or pulled up to 25 ft closer to me (my choice)" + "\n   " + "It can make a Dexterity save to halve damage and avoid being pulled or knocked prone",
				action : ["action", ""]
			},
			"wave of rolling earth (prereq: level 17 monk)" : {
				name : "Wave of Rolling Earth",
				source : ["P", 81],
				description : " [6 ki points]" + "\n   " + "As an action, I can cast Wall of Stone without material components (PHB 287)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Wave of Rolling Earth",
					spells : ["wall of stone"],
					selection : ["wall of stone"],
					firstCol : 6
				},
				spellFirstColTitle : "Ki",
				prereqeval : "classes.known.monk.level >= 17"
			}
		}
	}
});
AddSubClass("monk", "way of shadow", {
	regExpSearch : /^(?=.*shadow)((?=.*(monk|monastic))|(((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior)))).*$/i,
	subname : "Way of Shadow",
	source : ["P", 80],
	features : {
		"subclassfeature3" : {
			name : "Shadow Arts",
			source : ["P", 80],
			minlevel : 3,
			description : "\n   " + "I know the Minor Illusion cantrip and can cast certain spells by using ki (see page 3)",
			spellcastingBonus : {
				name : "Shadow Arts",
				spells : ["minor illusion"],
				selection : ["minor illusion"],
				atwill : true
			},
			extraname : "Shadow Art",
			eval : "ClassFeatureOptions(['monk', 'subclassfeature3', 'darkness', 'extra']); ClassFeatureOptions(['monk', 'subclassfeature3', 'darkvision', 'extra']); ClassFeatureOptions(['monk', 'subclassfeature3', 'pass without trace', 'extra']); ClassFeatureOptions(['monk', 'subclassfeature3', 'silence', 'extra']);",
			removeeval : "ClassFeatureOptions(['monk', 'subclassfeature3', 'darkness', 'extra'], 'remove'); ClassFeatureOptions(['monk', 'subclassfeature3', 'darkvision', 'extra'], 'remove'); ClassFeatureOptions(['monk', 'subclassfeature3', 'pass without trace', 'extra'], 'remove'); ClassFeatureOptions(['monk', 'subclassfeature3', 'silence', 'extra'], 'remove');",
			"darkness" : {
				name : "Darkness",
				source : ["P", 80],
				description : " [2 ki points]" + "\n   " + "As an action, I can cast Darkness without material components (PHB 230)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Darkness",
					spells : ["darkness"],
					selection : ["darkness"],
					firstCol : 2
				},
				spellFirstColTitle : "Ki"
			},
			"darkvision" : {
				name : "Darkvision",
				source : ["P", 80],
				description : " [2 ki points]" + "\n   " + "As an action, I can cast Darkvision without material components (PHB 230)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Darkvision",
					spells : ["darkvision"],
					selection : ["darkvision"],
					firstCol : 2
				},
				spellFirstColTitle : "Ki"
			},
			"pass without trace" : {
				name : "Pass Without Trace",
				source : ["P", 80],
				description : " [2 ki points]" + "\n   " + "As an action, I can cast Pass without Trace without material components (PHB 264)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Pass Without Trace",
					spells : ["pass without trace"],
					selection : ["pass without trace"],
					firstCol : 2
				},
				spellFirstColTitle : "Ki"
			},
			"silence" : {
				name : "Silence",
				source : ["P", 80],
				description : " [2 ki points]" + "\n   " + "As an action, I can cast Silence (PHB 275)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Silence",
					spells : ["silence"],
					selection : ["silence"],
					firstCol : 2
				},
				spellFirstColTitle : "Ki"
			}
		},
		"subclassfeature6" : {
			name : "Shadow Step",
			source : ["P", 80],
			minlevel : 6,
			description : "\n   " + "As a bonus action, I can teleport from and into dim light or darkness within 60 ft" + "\n   " + "After I do this, I have adv. on the next melee attack I make before the end of my turn",
			action : ["bonus action", ""]
		},
		"subclassfeature11" : {
			name : "Cloak of Shadows",
			source : ["P", 80],
			minlevel : 11,
			description : "\n   " + "As an action, I can become invisible in dim light or darkness until I attack/cast",
			action : ["action", ""]
		},
		"subclassfeature17" : {
			name : "Opportunist",
			source : ["P", 80],
			minlevel : 17,
			description : "\n   " + "As a reaction, if a creature in 5 ft is hit by another, I can make a melee attack vs. it",
			action : ["reaction", ""]
		}
	}
});
AddSubClass("paladin", "oath of the ancients", {
	regExpSearch : /^(((?=.*(ancient|nature|natural|green|fey|horned))((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper)))))|((?=.*(green|fey|horned))(?=.*(knight|fighter|warrior|warlord|trooper)))).*$/i,
	subname : "Oath of the Ancients",
	source : ["P", 87],
	spellcastingExtra : ["ensnaring strike", "speak with animals", "moonbeam", "misty step", "plant growth", "protection from energy", "ice storm", "stoneskin", "commune with nature", "tree stride"],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Nature's Wrath",
			source : ["P", 87],
			minlevel : 3,
			description : "\n   " + "As an action, a creature I can see within 10 ft must make a Str/Dex save (its choice)" + "\n   " + "If it fails this save, it is restrained until it succeeds on a save at the end of its turn",
			action : ["action", ""]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Turn the Faithless",
			source : ["P", 87],
			minlevel : 3,
			description : "\n   " + "As an action, all fey/fiends within 30 ft that can hear me must make a Wisdom save" + "\n   " + "If one fails, it is turned for 1 minute or until it takes damage and must show true form" + "\n   " + "Turned: move away, never within 30 ft of me, no reactions or actions other than Dash" + "\n   " + "Turned: may Dodge instead of Dash when nowhere to move and unable to escape bonds",
			action : ["action", ""]
		},
		"subclassfeature7" : {
			name : "Aura of Warding",
			source : ["P", 87],
			minlevel : 7,
			description : "\n   " + "Allies within range and I have resistance to damage from spells",
			additional : ["", "", "", "", "", "", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "30-foot aura", "30-foot aura", "30-foot aura"],
			dmgres : ["Spells"]
		},
		"subclassfeature15" : {
			name : "Undying Sentinel",
			source : ["P", 87],
			minlevel : 15,
			description : "\n   " + "If dropped to 0 hit points and not killed outright, I can choose to stay at 1 hit point" + "\n   " + "Additionally, I suffer no drawbacks of old age and can't be aged magically",
			recovery : "long rest",
			usages : 1
		},
		"subclassfeature20" : {
			name : "Elder Champion",
			source : ["P", 87],
			minlevel : 20,
			description : "\n   " + "As an action, I assume the form of a force of nature for 1 minute and gain benefits:" + "\n    - " + "At the start of each of my turns, I regain 10 hit points" + "\n    - " + "I can cast paladin spells with a casting time of 1 action as a bonus action instead" + "\n    - " + "Enemies within 10 ft have disadv. on saves vs. my paladin spells and channel divinity",
			recovery : "long rest",
			usages : 1,
			action : ["action", ""]
		}
	}
});
AddSubClass("paladin", "oath of vengeance", {
	regExpSearch : /^(((?=.*(vengeance|wrath|justice))((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper)))))|((?=.*dark)(?=.*knight))|(?=.*avenger)).*$/i,
	subname : "Oath of Vengeance",
	source : ["P", 88],
	spellcastingExtra : ["bane", "hunter's mark", "hold person", "misty step", "haste", "protection from energy", "banishment", "dimension door", "hold monster", "scrying"],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Abjure Enemy",
			source : ["P", 88],
			minlevel : 3,
			description : "\n   " + "As an action, one creature within 60 ft that I can see me must make a Wisdom save" + "\n   " + "If failed, it is frightened and its speed is 0 despite bonuses; if success, its speed is halved" + "\n   " + "This lasts for 1 minute or until it takes damage; Undead/fiends have disadv. on save",
			action : ["action", ""]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Vow of Enmity",
			source : ["P", 88],
			minlevel : 3,
			description : "\n   " + "As a bonus action, I utter a vow against a creature I can see within 10 ft" + "\n   " + "I get adv. on attacks against it for 1 minute or until it drops to 0 HP or falls unconscious",
			action : ["bonus action", ""]
		},
		"subclassfeature7" : {
			name : "Relentless Avenger",
			source : ["P", 88],
			minlevel : 7,
			description : "\n   " + "After I hit with an opportunity attack, I can move 1/2 my speed in the same reaction" + "\n   " + "This movement doesn't provoke opportunity attacks"
		},
		"subclassfeature15" : {
			name : "Soul of Vengeance",
			source : ["P", 88],
			minlevel : 15,
			description : "\n   " + "When an enemy I have an active Vow of Enmity against makes an attack, I can react" + "\n   " + "As a reaction, I can make a melee weapon attack against it if it is within range",
			action : ["reaction", " (with Vow of Enmity"]
		},
		"subclassfeature20" : {
			name : "Avenging Angel",
			source : ["P", 88],
			minlevel : 20,
			description : "\n   " + "As an action, I gain a flying speed of 60 ft and a 30 ft aura of menace for 1 hour" + "\n   " + "When a creature first enters or starts its turn in the aura, it must make a Wis save" + "\n   " + "If failed, for 1 min or until it takes damage, it is frightened and attacks vs. it have adv.",
			recovery : "long rest",
			usages : 1,
			action : ["action", ""]
		}
	}
});
AddSubClass("ranger", "beast master", {
	regExpSearch : /^(?=.*(animal|beast))((?=.*(master|ranger|strider))|((?=.*(nature|natural|green))(?=.*(knight|fighter|warrior|warlord|trooper)))).*$/i,
	subname : "Beast Master",
	fullname : "Beast Master",
	source : ["P", 93],
	features : {
		"subclassfeature3" : {
			name : "Ranger's Companion",
			source : ["P", 93],
			minlevel : 3,
			description : desc([
				"It adds my proficiency bonus to AC, attacks, damage, and save/skill proficiencies",
				"Its hit point maximum equals four times my ranger level if higher than its normal HP",
				"It takes a turn on my initiative; It takes the Dodge action unless I command it otherwise",
				"As an action, I can have it take the Attack, Dash, Disengage, or Help action on its turn",
				"I can still use Extra Attack while commanding it to Attack; No action to order to move"
			]),
			additional : "1/4 CR up to medium sized beast",
			action : ["action", " (Command)"]
		},
		"subclassfeature7" : {
			name : "Exceptional Training",
			source : ["P", 93],
			minlevel : 7,
			description : desc([
				"My beast's attacks count as magical for overcoming resistances and immunities",
				"As a bonus action, I can command it to take the Dash/Disengage/Help action on its turn"
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature11" : {
			name : "Bestial Fury",
			source : ["P", 93],
			minlevel : 11,
			description : "\n   " + "When I command my beast to use the Attack action, it can attack twice on its turn"
		},
		"subclassfeature15" : {
			name : "Share Spells",
			source : ["P", 93],
			minlevel : 15,
			description : "\n   " + "When I cast a spell on myself, I can have it also affect my beast if it is within 30 ft"
		}
	}
});
AddSubClass("rogue", "arcane trickster", {
	regExpSearch : /^(?=.*(trickster|rogue|miscreant))(?=.*\b(eldritch|arcane|magic|mage|witch)\b).*$/i,
	subname : "Arcane Trickster",
	fullname : "Arcane Trickster",
	source : ["P", 98],
	abilitySave : 4,
	spellcastingFactor : 3,
	spellcastingList : {
		"class" : "wizard",
		school : ["Ench", "Illus"],
		level : [0, 4] //lower and higher limit
	},
	spellcastingKnown : {
		cantrips : [0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
		spells : [0, 0, 2, 3, 3, 3, 4, 4, 4, 5, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9]
	},
	features : {
		"subclassfeature3" : {
			name : "Spellcasting",
			source : ["P", 98],
			minlevel : 3,
			description : "\n   " + "I can cast known wizard cantrips/spells, using Intelligence as my spellcasting ability",
			additional : ["", "", "3 cantrips \u0026 3 spells known", "3 cantrips \u0026 4 spells known", "3 cantrips \u0026 4 spells known", "3 cantrips \u0026 4 spells known", "3 cantrips \u0026 5 spells known", "3 cantrips \u0026 6 spells known", "3 cantrips \u0026 6 spells known", "4 cantrips \u0026 7 spells known", "4 cantrips \u0026 8 spells known", "4 cantrips \u0026 8 spells known", "4 cantrips \u0026 9 spells known", "4 cantrips \u0026 10 spells known", "4 cantrips \u0026 10 spells known", "4 cantrips \u0026 11 spells known", "4 cantrips \u0026 11 spells known", "4 cantrips \u0026 11 spells known", "4 cantrips \u0026 12 spells known", "4 cantrips \u0026 13 spells known"],
			spellcastingBonus : [{//for the Mage Hand cantrip gained at level 1
				name : "Mage Hand cantrip",
				spells : ["mage hand"],
				selection : ["mage hand"]
			}, { //for the spells gained at level 3, 8, 14, 20
				name : "From any School",
				"class" : "wizard",
				times : [0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4],
				level : [1, 4], //lower and higher limit
			}]
		},
		"subclassfeature3.1" : {
			name : "Mage Hand Legerdemain",
			source : ["P", 98],
			minlevel : 3,
			description : "\n   " + "As a bonus action, I can direct my Mage Hand" + "\n   " + "With a Dex (Sleight of Hand) vs. Wis (Perception) checks, I can do so discreetly" + "\n   " + "I can make it invisible and perform the following tasks:" + "\n    - " + "Stow/retrieve an object the hand is holding in a container worn/carried by another" + "\n    - " + "Use thieves' tools to pick locks and disarm traps at range",
			action : ["bonus action", ""]
		},
		"subclassfeature9" : {
			name : "Magical Ambush",
			source : ["P", 98],
			minlevel : 9,
			description : "\n   " + "When I cast a spell while hidden, the target(s) have disadvantage against that spell"
		},
		"subclassfeature13" : {
			name : "Versatile Trickster",
			source : ["P", 98],
			minlevel : 13,
			description : "\n   " + "As a bonus action, gain adv. on attacks this turn on creature within 5 ft of Mage Hand",
			action : ["bonus action", ""]
		},
		"subclassfeature17" : {
			name : "Spell Thief",
			source : ["P", 98],
			minlevel : 17,
			description : "\n   " + "As a reaction, after a spell is cast at me, I can try to negate and steal it" + "\n   " + "The caster makes a save against my spell DC with his/her spellcasting ability" + "\n   " + "On failure, the caster forgets how to cast that spell for eight hours" + "\n   " + "If I have a spell slot of a high enough level for it, I learn how to cast it during this time",
			action : ["reaction", ""],
			recovery : "long rest",
			usages : 1
		}
	}
});
AddSubClass("rogue", "assassin", {
	regExpSearch : /^(?!.*(barbarian|bard|cleric|druid|fighter|monk|paladin|ranger|sorcerer|warlock|wizard))(?=.*assassin).*$/i,
	subname : "Assassin",
	fullname : "Assassin",
	source : ["P", 97],
	abilitySave : 2,
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiencies",
			source : ["P", 97],
			minlevel : 3,
			description : "\n   " + "I am proficient with disguise kits and poisoner's kits",
			toolProfs : ["Disguise kit", "Poisoner's kit"]
		},
		"subclassfeature3.1" : {
			name : "Assassinate",
			source : ["P", 97],
			minlevel : 3,
			description : "\n   " + "I have adv. on attack rolls against creatures that have not taken a turn in combat yet" + "\n   " + "Any hit I score against a creature that is surprised is a critical hit"
		},
		"subclassfeature9" : {
			name : "Infiltration Expertise",
			source : ["P", 97],
			minlevel : 9,
			description : "\n   " + "I can create false identities in 7 days for 25 gp"
		},
		"subclassfeature13" : {
			name : "Imposter",
			source : ["P", 97],
			minlevel : 13,
			description : "\n   " + "After 3 hours of studying a person, I can mimic speech, writing, and behavior" + "\n   " + "I have advantage on Charisma (Deception) checks to maintain this ruse"
		},
		"subclassfeature17" : {
			name : "Death Strike",
			source : ["P", 97],
			minlevel : 17,
			description : "\n   " + "When I hit a surprised creature, it must make a Con save or take double damage",
			additional : "Save DC: 8 + Dex mod + Proficiency bonus"
		}
	}
});
AddSubClass("sorcerer", "wild magic", {
	regExpSearch : /^(?=.*(mage|magus|sorcerer|witch))(?=.*(wild|chaos|chaotic|limbo)).*$/i,
	subname : "Wild Magic",
	fullname : "Wild Mage",
	source : ["P", 103],
	features : {
		"subclassfeature1" : {
			name : "Wild Magic Surge",
			source : ["P", 103],
			minlevel : 1,
			description : desc([
				"Wild Magic Surges happen 5% of the time that I cast a sorcerer spell",
				"This doesn't happen with cantrips and I only take this chance if the DM tells me to",
				"See the \"Notes\" page for the table"
			]),
			wmsurgetable1 : "\u25C6 Wild Magic Surge Table (Wild Magic 1, PHB 104) [results 01-50]" + desc([
				"d100  Effect",
				"01-02 Roll on this table at the start of each of your turns for the next minute, ignoring this result on subsequent rolls.",
				"03-04 For the next minute, you can see any invisible creature if you have line of sight to it.",
				"05-06 A modron chosen and controlled by the DM appears in an unoccupied space within 5 ft of you, then disappears 1 minute later.",
				"07-08 You cast fireball as a 3rd-level spell centered on yourself.",
				"09-10 You cast magic missile as a 5th-level spell.",
				"11-12 Roll a d10. Your height changes by a number of inches equal to the roll. If the roll is odd, you shrink. If the roll is even, you grow.",
				"13-14 You cast confusion centered on yourself.",
				"15-16 For the next minute, you regain 5 hit points at the start of each of your turns.",
				"17-18 You grow a long beard made of feathers that remains until you sneeze, at which point the feathers explode out from your face.",
				"19-20 You cast grease centered on yourself.",
				"21-22 Creatures have disadvantage on saving throws against the next spell you cast in the next minute that involves a saving throw.",
				"23-24 Your skin turns a vibrant shade of blue. A remove curse spell can end this effect.",
				"25-26 An eye appears on your forehead for the next minute.",
				"27-28 For the next minute, all your spells with a casting time feet of 1 action have a casting time of 1 bonus action.",
				"29-30 You teleport up to 60 ft to an unoccupied space of your choice that you can see.",
				"31-32 You are transported to the Astral Plane until the end of your next turn, after which time you return to the space you previously occupied or the nearest unoccupied space if that space is occupied.",
				"33-34 Maximize the damage of the next damaging spell you cast within the next minute.",
				"35-36 Roll a d10. Your age changes by a number of years equal to the roll. If the roll is odd, you get younger (minimum 1 year old). If the roll is even, you get older.",
				"37-38 1d6 flumphs controlled by the DM appear in unoccupied spaces within 60 ft of you and are frightened of you. They vanish after 1 minute.",
				"39-40 You regain 2d10 hit points.",
				"41-42 You turn into a potted plant until the start of your next turn. While a plant, you are incapacitated and have vulnerability to all damage. If you drop to 0 hit points, your pot breaks, and your form reverts.",
				"43-44 For the next minute, you can teleport up to 20 ft as a bonus action on each of your turns.",
				"45-46 You cast levitate on yourself.",
				"47-48 A unicorn controlled by the DM appears in a space within 5 ft of you, then disappears 1 minute later.",
				"49-50 You can't speak for the next minute. Whenever you try, pink bubbles float out of your mouth."
			]),
			wmsurgetable2 : "\u25C6 Wild Magic Surge Table (Wild Magic 1, PHB 104) [results 51-100]" + desc([
				"d100  Effect",
				"51-52 A spectral shield hovers near you for the next minute, granting you a +2 bonus to AC and immunity to magic missile.",
				"53-54 You are immune to being intoxicated by alcohol for the next 5d6 days.",
				"55-56 Your hair falls out but grows back within 24 hours.",
				"57-58 For the next minute, any flammable object you touch that isn't being worn or carried by another creature bursts into flame.",
				"59-60 You regain your lowest-level expended spell slot.",
				"61-62 For the next minute, you must shout when you speak.",
				"63-64 You cast fog cloud centered on yourself.",
				"65-66 Up to three creatures you choose within 30 ft of you take 4d10 lightning damage.",
				"67-68 You are frightened by the nearest creature until the end of your next turn.",
				"69-70 Each creature within 30 ft of you becomes invisible for the next minute. The invisibility ends on a creature when it attacks or casts a spell.",
				"71-72 You gain resistance to all damage for the next minute.",
				"73-74 A random creature within 60 ft of you becomes poisoned for 1d4 hours.",
				"75-76 You glow with bright light in a 30-ft radius for the next minute. Any creature that ends its turn within 5 ft of you is blinded until the end of its next turn.",
				"79-80 Illusory butterflies and flower petals flutter in the air within 10 ft of you for the next minute.",
				"77-78 You cast polymorph on yourself. If you fail the saving throw, you turn into a sheep for the spell's duration.",
				"81-82 You can take one additional action immediately.",
				"83-84 Each creature within 30 ft of you takes 1d10 necrotic damage. You regain hit points equal to the sum of the necrotic damage dealt.",
				"85-86 You cast mirror image.",
				"87-88 You cast fly on a random creature within 60 ft of you.",
				"89-90 You become invisible for the next minute. During that time, other creatures can't hear you. The invisibility ends if you attack or cast a spell.",
				"91-92 If you die within the next minute, you immediately come back to life as if by the reincarnate spell.",
				"93-94 Your size increases by one size category for the next minute.",
				"95-96 You and all creatures within 30 ft of you gain vulnerability to piercing damage for the next minute.",
				"97-98 You are surrounded by faint, ethereal music for the next minute.",
				"99-100 You regain all expended sorcery points."
			]),
			eval : "try {AddToNotes(ClassSubList['sorcerer-wild magic'].features.subclassfeature1.wmsurgetable1, \"Wild Mage's Wild Magic Surge table, part 1\"); AddToNotes(ClassSubList['sorcerer-wild magic'].features.subclassfeature1.wmsurgetable2, \"Wild Mage's Wild Magic Surge table, part 2\");} catch (er) {};",
			removeeval : "try {AddToNotes('', '', ClassSubList['sorcerer-wild magic'].features.subclassfeature1.wmsurgetable1); AddToNotes('', '', ClassSubList['sorcerer-wild magic'].features.subclassfeature1.wmsurgetable2);} catch (er) {};"
		},
		"subclassfeature1.1" : {
			name : "Tides of Chaos",
			source : ["P", 103],
			minlevel : 1,
			description : "\n   " + "I can gain advantage on either one attack roll, ability check, or saving throw" + "\n   " + "After I cast a 1st-level or higher sorcerer spell, the DM can impose a Wild Magic Surge" + "\n   " + "After I roll on the Wild Magic Surge table, I regain my use of Tides of Chaos",
			recovery : "long rest",
			usages : 1
		},
		"subclassfeature6" : {
			name : "Bend Luck",
			source : ["P", 103],
			minlevel : 6,
			description : "\n   " + "As a reaction, I can add/subtract 1d4 from another's attack roll, ability check, or save",
			action : ["reaction", " (2 sorcery points)"],
			additional : "2 sorcery points"
		},
		"subclassfeature14" : {
			name : "Controlled Chaos",
			source : ["P", 103],
			minlevel : 14,
			description : "\n   " + "Whenever I roll on the Wild Magic Surge table, I can roll twice and use either result"
		},
		"subclassfeature18" : {
			name : "Spell Bombardment",
			source : ["P", 103],
			minlevel : 18,
			description : "\n   " + "Once per turn, when I roll spell damage, I can take one damage die that rolled max" + "\n   " + "I can then roll this die again and add it to the spell's damage"
		}
	}
});
AddSubClass("warlock", "the archfey", {
	regExpSearch : /^(?=.*fey)(?=.*warlock).*$/i,
	subname : "the Archfey",
	source : ["P", 109],
	spellcastingExtra : ["faerie fire", "sleep", "calm emotions", "phantasmal force", "blink", "plant growth", "dominate beast", "greater invisibility", "dominate person", "seeming"],
	features : {
		"subclassfeature1" : {
			name : "Fey Presence",
			source : ["P", 109],
			minlevel : 1,
			description : "\n   " + "As an action, all creatures in a 10-ft cube around me must make a Wisdom save" + "\n   " + "If failed, they're all charmed or frightened (my choice) until the end of my next turn",
			recovery : "short rest",
			usages : 1,
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Misty Escape",
			source : ["P", 109],
			minlevel : 6,
			description : "\n   " + "As a reaction, when I take damage, I can turn invisible and teleport up to 60 ft" + "\n   " + "I stay invisible until the start of my next turn or until I attack or cast a spell",
			action : ["reaction", " (taking damage)"],
			recovery : "short rest",
			usages : 1
		},
		"subclassfeature10" : {
			name : "Beguiling Defenses",
			source : ["P", 109],
			minlevel : 10,
			description : "\n   " + "As a reaction, when a creature tries to charm me, I can turn the charm back on it" + "\n   " + "It must make a Wis save or be charmed by me for 1 minute or until taking damage" + "\n   " + "I am immune to being charmed",
			action : ["reaction", " (when charmed)"],
			savetxt : { immune : ["charmed"] }
		},
		"subclassfeature14" : {
			name : "Dark Delirium",
			source : ["P", 109],
			minlevel : 14,
			description : "\n   " + "As an action, a creature within 60 ft must make a Wis save or be charmed/frightened" + "\n   " + "This lasts for 1 minute or until my concentration is broken or it takes damage" + "\n   " + "During this time, it can't see or hear anything but the illusion, me, and itself",
			recovery : "short rest",
			usages : 1,
			action : ["action", ""]
		}
	}
});
AddSubClass("warlock", "the great old one", {
	regExpSearch : /^(((?=.*(tharizdun|cthulhu))(?=.*warlock))|((?=.*(great|dread))(?=.*(ancient|old))(?=.*\b(one|entity)\b))).*$/i,
	subname : "the Great Old One",
	source : ["P", 110],
	spellcastingExtra : ["dissonant whispers", "tasha's hideous laughter", "detect thoughts", "phantasmal force", "clairvoyance", "sending", "dominate beast", "evard's black tentacles", "dominate person", "telekinesis"],
	features : {
		"subclassfeature1" : {
			name : "Awakened Mind",
			source : ["P", 110],
			minlevel : 1,
			description : "\n   " + "I can telepathically speak to creatures I can see within 30 ft if they know a language" // 'to' not 'with', so one-way
		},
		"subclassfeature6" : {
			name : "Entropic Ward",
			source : ["P", 110],
			minlevel : 6,
			description : "\n   " + "As a reaction, when I'm attacked, I can impose disadvantage to that attack roll" + "\n   " + "If it misses me, I have adv. on my next attack vs. the attacker during my next turn",
			action : ["reaction", " (when attacked)"],
			recovery : "short rest",
			usages : 1
		},
		"subclassfeature10" : {
			name : "Thought Shield",
			source : ["P", 110],
			minlevel : 10,
			description : "\n   " + "No one can read my mind unless I allow it; I have resistance to psychic damage" + "\n   " + "When I take psychic damage, the dealer of the psychic damage takes the same amount",
			dmgres : ["Psychic"]
		},
		"subclassfeature14" : {
			name : "Create Thrall",
			source : ["P", 110],
			minlevel : 14,
			description : "\n   " + "As an action, I can charm an incapacitated humanoid by touch" + "\n   " + "While it is charmed, I can communicate with it telepathically if it is on the same plane" + "\n   " + "This lasts until the charm is removed (can be by Remove Curse) or I use this again",
			action : ["action", ""]
		}
	}
});
AddSubClass("wizard", "abjuration", {
	regExpSearch : /(abjuration|abjurer)/i,
	subname : "School of Abjuration",
	fullname : "Abjurer",
	source : ["P", 115],
	features : {
		"subclassfeature2" : {
			name : "Abjuration Savant",
			source : ["P", 115],
			minlevel : 2,
			description : "\n   " + "I halve the gp and time needed to copy abjuration spells into my spellbook"
		},
		"subclassfeature2.1" : {
			name : "Arcane Ward",
			source : ["P", 115],
			minlevel : 2,
			description : "\n   " + "Whenever I cast an 1st-level or higher abjuration spell, I make/heal a ward" + "\n   " + "I make it at max HP; When I cast again, it heals two HP per spell level" + "\n   " + "It stays active at 0 HP and doesn't go away until my next long rest" + "\n   " + "If I take damage, the ward takes the damage instead, but excess damage carries over",
			additional : levels.map( function(n) {
				if (n < 2) return "";
				return "Ward max HP: " + (n * 2) + "+Int mod";
			}),
			usages : 1,
			recovery : "long rest"
		},
		"subclassfeature6" : {
			name : "Projected Ward",
			source : ["P", 115],
			minlevel : 6,
			description : "\n   " + "As a reaction, my Arcane Ward can absorb damage done to a creature within 30 ft",
			action : ["reaction", ""]
		},
		"subclassfeature10" : {
			name : "Improved Abjuration",
			source : ["P", 115],
			minlevel : 10,
			description : "\n   " + "When I cast an abjuration spell requiring an ability check, I add my proficiency bonus"
		},
		"subclassfeature14" : {
			name : "Spell Resistance",
			source : ["P", 116],
			minlevel : 14,
			description : "\n   " + "I have adv. on spell saves and resistance to damaging spells",
			dmgres : ["Spells"],
			savetxt : { adv_vs : ["spells"] }
		}
	}
});
AddSubClass("wizard", "conjuration", {
	regExpSearch : /(conjuration|conjurer)/i,
	subname : "School of Conjuration",
	fullname : "Conjurer",
	source : ["P", 116],
	features : {
		"subclassfeature2" : {
			name : "Conjuration Savant",
			source : ["P", 116],
			minlevel : 2,
			description : "\n   " + "I halve the gp and time needed to copy conjuration spells into my spellbook"
		},
		"subclassfeature2.1" : {
			name : "Minor Conjuration",
			source : ["P", 116],
			minlevel : 2,
			description : "\n   " + "As an action, I can conjure an object up to 3 ft on each side and no more than 10 lbs" + "\n   " + "It must be of a form of a nonmagical object I have seen and is created within 10 ft" + "\n   " + "The object disappears after 1 hour, if it takes or deals damage, or when I use this again",
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Benign Transposition",
			source : ["P", 116],
			minlevel : 6,
			description : "\n   " + "As an action, I can teleport to a place within 30 ft that I can see" + "\n   " + "Instead, I can swap places with a willing Small/Medium creature in 30 ft that I can see" + "\n   " + "I can do this again after a long rest or casting a 1st-level or higher conjuration spell",
			usages : 1,
			recovery : "long rest",
			action : ["action", ""]
		},
		"subclassfeature10" : {
			name : "Focused Conjuration",
			source : ["P", 116],
			minlevel : 10,
			description : "\n   " + "While I am concentrating on a conjuration spell, it can't be broken by taking damage"
		},
		"subclassfeature14" : {
			name : "Durable Summons",
			source : ["P", 116],
			minlevel : 14,
			description : "\n   " + "Any creature I summon or create with a conjuration spell has 30 temporary hit points"
		}
	}
});
AddSubClass("wizard", "divination", {
	regExpSearch : /(divination|diviner|divinator)/i,
	subname : "School of Divination",
	fullname : "Diviner",
	source : ["P", 116],
	features : {
		"subclassfeature2" : {
			name : "Divination Savant",
			source : ["P", 116],
			minlevel : 2,
			description : "\n   " + "I halve the gp and time needed to copy divination spells into my spellbook"
		},
		"subclassfeature2.1" : {
			name : "Portent",
			source : ["P", 116],
			minlevel : 2,
			description : "\n   " + "After a long rest, I roll dice and keep the results to be used before my next rest" + "\n   " + "A result can replace an attack/save/ability check made by me or a creature I can see" + "\n   " + "I choose to switch them before the dice to be replaced are rolled; Max once per turn",
			additional : ["", "2d20 after a long rest", "2d20 after a long rest", "2d20 after a long rest", "2d20 after a long rest", "2d20 after a long rest", "2d20 after a long rest", "2d20 after a long rest", "2d20 after a long rest", "2d20 after a long rest", "2d20 after a long rest", "2d20 after a long rest", "2d20 after a long rest", "3d20 after a long rest", "3d20 after a long rest", "3d20 after a long rest", "3d20 after a long rest", "3d20 after a long rest", "3d20 after a long rest", "3d20 after a long rest"]
		},
		"subclassfeature6" : {
			name : "Expert Divination",
			source : ["P", 116],
			minlevel : 6,
			description : "\n   " + "When I cast a divination spell, I recover a spell slot of a lower level than the one I cast",
			additional : "Spell slot < 6th-level"
		},
		"subclassfeature10" : {
			name : "The Third Eye",
			source : ["P", 116],
			minlevel : 10,
			description : "\n   " + "As an action, I gain one of the following until my next short or long rest:" + "\n   " + "Darkvision 60ft, see the Ethereal Plane 60ft, read any language, or see invisibility 10ft",
			recovery : "short rest",
			usages : 1,
			action : ["action", ""]
		},
		"subclassfeature14" : {
			name : "Greater Portent",
			source : ["P", 117],
			minlevel : 14,
			description : "\n   " + "I can roll 3d20 instead of 2d20 when using my Portent feature"
		}
	}
});
AddSubClass("wizard", "enchantment", {
	regExpSearch : /(enchantment|enchanter)/i,
	subname : "School of Enchantment",
	fullname : "Enchanter",
	source : ["P", 117],
	features : {
		"subclassfeature2" : {
			name : "Enchantment Savant",
			source : ["P", 117],
			minlevel : 2,
			description : "\n   " + "I halve the gp and time needed to copy enchantment spells into my spellbook"
		},
		"subclassfeature2.1" : {
			name : "Hypnotic Gaze",
			source : ["P", 117],
			minlevel : 2,
			description : "\n   " + "As an action, a seen enemy within 5 ft must make a Wis save or be charmed" + "\n   " + "This doesn't work if it can't see/hear me; It's also incapacitated and reduced to 0 speed" + "\n   " + "This lasts until the end of my next turn, but I can use an action to extend the duration" + "\n   " + "It also ends if it takes damage, can't see or hear me, or is more than 5 ft from me" + "\n   " + "On success or once it ends, I can't use this on it again until after a long rest",
			action : ["action", ""],
			usages : 1,
			recovery : "long rest"
		},
		"subclassfeature6" : {
			name : "Instinctive Charm",
			source : ["P", 117],
			minlevel : 6,
			description : "\n   " + "As a reaction, when someone I can see in 30 ft attacks me, it must make a Wis save" + "\n   " + "If failed, it must instead attack the closest creature within range (not me or self)" + "\n   " + "On a success, the target is immune to this until after my long rest; This is a charm effect",
			action : ["reaction", " (when attacked)"]
		},
		"subclassfeature10" : {
			name : "Split Enchantment",
			source : ["P", 117],
			minlevel : 10,
			description : "\n   " + "When I cast an enchantment spell with only one target, I can target a second in range" + "\n   " + "This does not apply to cantrips"
		},
		"subclassfeature14" : {
			name : "Alter Memories",
			source : ["P", 117],
			minlevel : 14,
			description : "\n   " + "When I cast an enchantment spell that charms, I can have one target be unaware of it" + "\n   " + "Also, once before that spell ends, I can have that target forget time while affected" + "\n   " + "It must make an Intelligence save or lose up to 1 + Charisma modifier hours of memory"
		}
	}
});
AddSubClass("wizard", "illusion", {
	regExpSearch : /(illusion|illusionist|illusionary)/i,
	subname : "School of Illusion",
	fullname : "Illusionist",
	source : ["P", 118],
	features : {
		"subclassfeature2" : {
			name : "Illusion Savant",
			source : ["P", 118],
			minlevel : 2,
			description : "\n   " + "I halve the gp and time needed to copy illusion spells into my spellbook"
		},
		"subclassfeature2.1" : {
			name : "Improved Minor Illusion",
			source : ["P", 118],
			minlevel : 2,
			description : "\n   " + "I gain the knowledge of the Minor Illusion cantrip (or another if I already knew it)" + "\n   " + "When I cast it, I can create both a sound and an image with a single casting",
			spellcastingBonus : {
				name : "Minor Illusion cantrip",
				spells : ["minor illusion"],
				selection : ["minor illusion"]
			}
		},
		"subclassfeature6" : {
			name : "Malleable Illusion",
			source : ["P", 118],
			minlevel : 6,
			description : "\n   " + "After I cast an illusion spell that lasts 1 min or longer, I can use an action to change it",
			action : ["action", ""]
		},
		"subclassfeature10" : {
			name : "Illusory Self",
			source : ["P", 118],
			minlevel : 10,
			description : "\n   " + "As a reaction, when I'm attacked, I can impose an illusion that makes the attack miss",
			action : ["reaction", ""],
			recovery : "short rest",
			usages : 1
		},
		"subclassfeature14" : {
			name : "Illusory Reality",
			source : ["P", 118],
			minlevel : 14,
			description : "\n   " + "As a bonus action, after I cast a 1st-level or higher illusion spell, I can make it real" + "\n   " + "One inanimate, nonmagical object that is part of the illusion becomes real for 1 minute" + "\n   " + "The object can't be something that directly harms someone",
			action : ["bonus action", ""]
		}
	}
});
AddSubClass("wizard", "necromancy", {
	regExpSearch : /(necromancy|necromancer|necromantic)/i,
	subname : "School of Necromancy",
	fullname : "Necromancer",
	source : ["P", 118],
	features : {
		"subclassfeature2" : {
			name : "Necromancy Savant",
			source : ["P", 118],
			minlevel : 2,
			description : "\n   " + "I halve the gp and time needed to copy necromancy spells into my spellbook"
		},
		"subclassfeature2.1" : {
			name : "Grim Harvest",
			source : ["P", 118],
			minlevel : 2,
			description : "\n   " + "Once per turn, when I kill something with a 1st-level or higher spell, I regain hit points" + "\n   " + "The number of hit points regained is 2\u00D7 the spell's level (or 3\u00D7 with necromancy spells)" + "\n   " + "This doesn't occur for constructs/undead"
		},
		"subclassfeature6" : {
			name : "Undead Thralls",
			source : ["P", 119],
			minlevel : 6,
			description : "\n   " + "I add Animate Dead to my spellbook and can have an additional target when casting it" + "\n   " + "Undead created by my necromancy spells have the following benefits:" + "\n   " + "They add my proficiency bonus to damage and my wizard level to their HP maximums"
		},
		"subclassfeature10" : {
			name : "Inured to Undead",
			source : ["P", 119],
			minlevel : 10,
			description : "\n   " + "I have resistance to necrotic damage and my hit point maximum can't be reduced",
			dmgres : ["Necrotic"]

		},
		"subclassfeature14" : {
			name : "Command Undead",
			source : ["P", 11],
			minlevel : 14,
			description : "\n   " + "As an action, an undead within 60 ft that I can see must make a Charisma save" + "\n   " + "If its Int is > 7, it has adv. on the save; If its Int is > 11, it repeats the save every hour" + "\n   " + "If failed, it becomes friendly to me and obeys my commands until I use this on another" + "\n   " + "On success, it becomes permanently immune to my further attempts",
			action : ["action", ""]
		}
	}
});
AddSubClass("wizard", "transmutation", {
	regExpSearch : /(transmutation|transmuter)/i,
	subname : "School of Transmutation",
	fullname : "Transmuter",
	source : ["P", 119],
	features : {
		"subclassfeature2" : {
			name : "Transmutation Savant",
			source : ["P", 119],
			minlevel : 2,
			description : "\n   " + "I halve the gp and time needed to copy transmutation spells into my spellbook"
		},
		"subclassfeature2.1" : {
			name : "Minor Alchemy",
			source : ["P", 119],
			minlevel : 2,
			description : "\n   " + "I can transform an object of wood/stone/iron/copper/silver into another of those" + "\n   " + "For each 10 min I spend, I can transform up to 1 cubic foot of the material" + "\n   " + "It reverts back when I lose concentration or after 1 hour"
		},
		"subclassfeature6" : {
			name : "Transmuter's Stone",
			source : ["P", 119],
			minlevel : 6,
			description : "\n   " + "In 8 hours, I can create a transmuter's stone that gives its wielder one of the following:" + "\n    - " + "Darkvision 60 ft" + "\n    - " + "10 ft increase to speed while unencumbered" + "\n    - " + "Proficiency in Constitution saving throws" + "\n    - " + "Resistance to either acid, cold, fire, lightning, or thunder damage" + "\n   " + "The benefit is chosen at creation; I can have only one active stone at a time" + "\n   " + "I can change the benefit when I cast a 1st-level or higher transmutation spell with it"
		},
		"subclassfeature10" : {
			name : "Shapechanger",
			source : ["P", 119],
			minlevel : 10,
			description : "\n   " + "I add Polymorph to my spellbook; I can cast it on myself without using a spell slot" + "\n   " + "When I do that, I can only transform into a beast with a challenge rating of 1 or lower",
			recovery : "short rest",
			usages : 1
		},
		"subclassfeature14" : {
			name : "Master Transmuter",
			source : ["P", 119],
			minlevel : 14,
			description : "\n   " + "As an action, I can destroy my transmuter's stone and do one of the four following:" + "\n    " + "1) Major Transformation" + "\n      " + "In 10 minutes, I transmute one nonmagical object up to 5 cubic foot into another" + "\n      " + "This new, nonmagical object must be of similar size and mass and equal or less value" + "\n    " + "2) Panacea" + "\n      " + "One touched has all curses, diseases, and poisons removed and is healed to max HP" + "\n    " + "3) Restore Life" + "\n      " + "I cast Raise Dead without using spell slots or needing to have it in my spellbook" + "\n    " + "4) Restore Youth" + "\n      " + "A touched creature's apparent age is reduced by 3d10 years (to a minimum of 13)",
			action : ["action", ""]
		}
	}
});

// Add the backgrounds that are not in the SRD
BackgroundList["charlatan"] = {
	regExpSearch : /charlatan/i,
	name : "Charlatan",
	source : [["P", 128], ["ALbackground", 0]],
	skills : ["Deception", "Sleight of Hand"],
	gold : 15,
	equipleft : [
		["Disguise kit", "", 3],
		["Tools for chosen con", "", ""]
	],
	equipright : [
		["Fine clothes", "", 6],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "False Identity",
	trait : [
		"I fall in and out of love easily, and am always pursuing someone.",
		"I have a joke for every occasion, especially occasions where humor is inappropriate.",
		"Flattery is my preferred trick for getting what I want.",
		"I'm a born gambler who can't resist taking a risk for a potential payoff.",
		"I lie about almost everything, even when there's no good reason to.",
		"Sarcasm and insults are my weapons of choice.",
		"I keep multiple holy symbols on me and invoke whatever deity might come in useful at any given moment.",
		"I pocket anything I see that might have some value."
	],
	ideal : [
		["Independence",
			"Independence: I am a free spirit \u2015 no one tells me what to do. (Chaotic)"
		],
		["Fairness",
			"Fairness: I never target people who can't afford to lose a few coins. (Lawful)"
		],
		["Charity",
			"Charity: I distribute the money I acquire to the people who really need it. (Good)"
		],
		["Creativity",
			"Creativity: I never run the same con twice. (Chaotic)"
		],
		["Friendship",
			"Friendship: Material goods come and go. Bonds of friendship last forever. (Good)"
		],
		["Aspiration",
			"Aspiration: I'm determined to make something of myself. (Any)"
		]
	],
	bond : [
		"I fleeced the wrong person and must work to ensure that this individual never crosses paths with me or those I care about.",
		"I owe everything to my mentor \u2015 a horrible person who's probably rotting in jail somewhere.",
		"Somewhere out there, I have a child who doesn't know me. I'm making the world better for him or her.",
		"I come from a noble family, and one day I'll reclaim my lands and title from those who stole them from me.",
		"A powerful person killed someone I love. Someday soon, I'll have my revenge.",
		"I swindled and ruined a person who didn't deserve it. I seek to atone for my misdeeds but might never be able to forgive myself."
	],
	flaw : [
		"I can't resist a pretty face.",
		"I'm always in debt. I spend my ill-gotten gains on decadent luxuries faster than I bring them in.",
		"I'm convinced that no one could ever fool me the way I fool others.",
		"I'm too greedy for my own good. I can't resist taking a risk if there's money involved.",
		"I can't resist swindling people who are more powerful than me.",
		"I hate to admit it and will hate myself for it, but I'll run and preserve my own hide if the going gets tough."
	],
	extra : [
		"Select a Favorite Scheme",
		"Cheat at games of chance",
		"Shave coins, forge documents",
		"User/manipulator",
		"Change identity",
		"Sleight-of-hand cons",
		"Sell junk as expensive necessities"
	],
	toolProfs : ["Disguise kit", "Forgery kit"],
	lifestyle : "comfortable"
};
BackgroundList["criminal"] = {
	regExpSearch : /criminal/i,
	name : "Criminal",
	source : [["P", 129], ["ALbackground", 0]],
	skills : ["Deception", "Stealth"],
	gold : 15,
	equipright : [
		["Dark, common clothes with hood", "", 3],
		["Crowbar", "", 5],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Criminal Contact",
	trait : [
		"I always have a plan for what to do when things go wrong.",
		"I am always calm, no matter the situation. I never raise my voice or let my emotions control me.",
		"The first thing I do in a new place is note the locations of everything valuable \u2015 or where such things could be hidden.",
		"I would rather make a new friend than a new enemy.",
		"I am incredibly slow to trust. Those who seem the fairest often have the most to hide.",
		"I don't pay attention to the risks in a situation. Never tell me the odds.",
		"The best way to get me to do something is to tell me I can't do it.",
		"I blow up at the slightest insult."
	],
	ideal : [
		["Honor",
			"Honor: I don't steal from others in the trade. (Lawful)"
		],
		["Freedom",
			"Freedom: Chains are meant to be broken, as are those who would forge them. (Chaotic)"
		],
		["Charity",
			"Charity: I steal from the wealthy so that I can help people in need. (Good)"
		],
		["Greed",
			"Greed: I will do whatever it takes to become wealthy. (Evil)"
		],
		["People",
			"People: I'm loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care. (Neutral)"
		],
		["Redemption",
			"Redemption: There's a spark of good in everyone. (Good)"
		]
	],
	bond : [
		"I'm trying to pay off an old debt I owe to a generous benefactor.",
		"My ill-gotten gains go to support my family.",
		"Something important was taken from me, and I aim to steal it back.",
		"I will become the greatest thief that ever lived.",
		"I'm guilty of a terrible crime. I hope I can redeem myself for it.",
		"Someone I loved died because of a mistake I made. That will never happen again."
	],
	flaw : [
		"When I see something valuable, I can't think about anything but how to steal it.",
		"When faced with a choice between money and my friends, I usually choose the money.",
		"If there's a plan, I'll forget it. If I don't forget it, I'll ignore it.",
		"I have a \"tell\" that reveals when I'm lying.",
		"I turn tail and run when things look bad.",
		"An innocent person is in prison for a crime that I committed. I'm okay with that."
	],
	extra : [
		"Select a Criminal Specialty",
		"Blackmailer",
		"Burglar",
		"Enforcer",
		"Fence",
		"Highway robber",
		"Hired killer",
		"Pickpocket",
		"Smuggler",
		"Spy"
	],
	toolProfs : [["Gaming set", 1], ["Thieves' tools", "Dex"]],
	lifestyle : "poor"
};
BackgroundList["entertainer"] = {
	regExpSearch : /(entertainer|actor|dancer|fire.?eater|jester|juggler|instrumentalist|poet|singer|storyteller|tumbler)/i,
	name : "Entertainer",
	source : [["P", 130], ["ALbackground", 0]],
	skills : ["Acrobatics", "Performance"],
	gold : 15,
	equipright : [
		["Costume", "", 4],
		["Favor of an admirer", "", ""],
		["Belt pouch (with coins)", "", 1],
		["Musical instrument of my choice", "", ""]
	],
	feature : "By Popular Demand",
	trait : [
		"I know a story relevant to almost every situation.",
		"Whenever I come to a new place, I collect local rumors and spread gossip.",
		"I'm a hopeless romantic, always searching for that 'special someone'.",
		"Nobody stays angry at me or around me for long, since I can defuse any amount of tension.",
		"I love a good insult, even one directed at me.",
		"I get bitter if I'm not the center of attention.",
		"I'll settle for nothing less than perfection.",
		"I change my mood or my mind as quickly as I change key in a song."
	],
	ideal : [
		["Beauty",
			"Beauty: When I perform, I make the world better than it was. (Good)"
		],
		["Tradition",
			"Tradition: The stories, legends, and songs of the past must never be forgotten, for they teach us who we are. (Lawful)"
		],
		["Creativity",
			"Creativity: The world is in need of new ideas and bold action. (Chaotic)"
		],
		["Greed",
			"Greed: I'm only in it for the money and fame. [Evil]"
		],
		["People",
			"People: I like seeing the smiles on people's faces when I perform. That's all that matters. (Neutral)"
		],
		["Honesty",
			"Honesty: Art should reflect the soul; it should come from within and reveal who we really are. (Any)"
		]
	],
	bond : [
		"My instrument is my most treasured possession, and it reminds me of someone I love.",
		"Someone stole my precious instrument, and someday I'll get it back.",
		"I want to be famous, whatever it takes.",
		"I idolize a hero of the old tales and measure my deeds against that person's.",
		"I will do anything to prove myself superior to my hated rival.",
		"I would do anything for the other members of my old troupe."
	],
	flaw : [
		"I'll do anything to win fame and renown.",
		"I'm a sucker for a pretty face.",
		"A scandal prevents me from ever going home again. That kind of trouble seems to follow me around.",
		"I once satirized a noble who still wants my head. It was a mistake that I will likely repeat.",
		"I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble.",
		"Despite my best efforts, I am unreliable to my friends."
	],
	extra : [
		"Select an Entertainer Routine",
		"Actor",
		"Dancer",
		"Fire-eater",
		"Jester",
		"Juggler",
		"Instrumentalist",
		"Poet",
		"Singer",
		"Storyteller",
		"Tumbler"
	],
	toolProfs : ["Disguise kit", ["Musical instrument", 1]],
	lifestyle : "modest"
};
BackgroundList["folk hero"] = {
	regExpSearch : /^(?=.*folk)(?=.*hero).*$/i,
	name : "Folk Hero",
	source : [["P", 131], ["ALbackground", 0]],
	skills : ["Animal Handling", "Survival"],
	gold : 10,
	equipleft : [
		["Set of artisan's tools", "", ""],
		["Shovel", "", 5],
		["Iron pot", "", 10]
	],
	equipright : [
		["Common clothes", "", 3],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Rustic Hospitality",
	trait : [
		"I judge people by their actions, not their words.",
		"If someone is in trouble, I'm always ready to lend help.",
		"When I set my mind to something, I follow through no matter what gets in my way.",
		"I have a strong sense of fair play and always try to find the most equitable solution to arguments.",
		"I'm confident in my own abilities and do what I can to instill confidence in others.",
		"Thinking is for other people. I prefer action.",
		"I misuse long words in an attempt to sound smarter.",
		"I get bored easily. When am I going to get on with my destiny?"
	],
	ideal : [
		["Respect",
			"Respect: People deserve to be treated with dignity and respect. (Good)"
		],
		["Fairness",
			"Fairness: No one should get preferential treatment before the law, and no one is above the law. (Lawful)"
		],
		["Freedom",
			"Freedom: Tyrants must not be allowed to oppress the people. (Chaotic)"
		],
		["Might",
			"Might: If I become strong, I can take what I want\u2015 what I deserve. (Evil)"
		],
		["Sincerity",
			"Sincerity: There's no good in pretending to be something I'm not. (Neutral)"
		],
		["Destiny",
			"Destiny: Nothing and no one can steer me away from my higher calling. (Any)"
		]
	],
	bond : [
		"I have a family, but I have no idea where they are. One day, I hope to see them again.",
		"I worked the land, I love the land, and I will protect the land.",
		"A proud noble once gave me a horrible beating, and I will take my revenge on any bully I encounter.",
		"My tools are symbols of my past life, and I carry them so that I will never forget my roots.",
		"I protect those who cannot protect themselves.",
		"I wish my childhood sweetheart had come with me to pursue my destiny."
	],
	flaw : [
		"The tyrant who rules my land will stop at nothing to see me killed.",
		"I'm convinced of the significance of my destiny, and blind to my shortcomings and the risk of failure.",
		"The people who knew me when I was young know my shameful secret, so I can never go home again.",
		"I have a weakness for the vices of the city, especially hard drink.",
		"Secretly, I believe that things would be better if I were a tyrant lording over the land.",
		"I have trouble trusting in my allies."
	],
	extra : [
		"Select a Defining Event",
		"I stood up to a tyrant's agents",
		"I saved people during a natural disaster",
		"I stood alone against a terrible monster",
		"I stole from a corrupt merchant for the poor",
		"I led a militia to fight off an invading army",
		"I stole weapons from a tyrant to arm the people",
		"I trained peasantry to fight a tyrant with farm tools",
		"A decree was rescinded after I led a protest against it",
		"A magical creature gave me a blessing or insight",
		"I rose to leadership in a lord's army"
	],
	toolProfs : [["Artisan's tools", 1], "Vehicles (land)"],
	lifestyle : "modest"
};
BackgroundList["guild artisan"] = {
	regExpSearch : /^(?=.*guild)(?=.*artisan).*$/i,
	name : "Guild Artisan",
	source : [["P", 132], ["ALbackground", 0]],
	skills : ["Insight", "Persuasion"],
	gold : 15,
	equipleft : [
		["Set of artisan's tools", "", ""],
		["Letter of introduction from guild", "", ""]
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Guild Membership",
	trait : [
		"I believe that anything worth doing is worth doing right. I can't help it\u2015 I'm a perfectionist.",
		"I'm a snob who looks down on those who can't appreciate fine art.",
		"I always want to know how things work and what makes people tick.",
		"I'm full of witty aphorisms and have a proverb for every occasion.",
		"I'm rude to people who lack my commitment to hard work and fair play.",
		"I like to talk at length about my profession.",
		"I don't part with my money easily and will haggle tirelessly to get the best deal possible.",
		"I'm well known for my work, and I want to make sure everyone appreciates it. I'm always taken aback when people haven't heard of me."
	],
	ideal : [
		["Community",
			"Community: It is the duty of all civilized people to strengthen the bonds of community and the security of civilization. (Lawful)"
		],
		["Generosity",
			"Generosity: My talents were given to me so that I could use them to benefit the world. (Good)"
		],
		["Freedom",
			"Freedom: Everyone should be free to pursue his or her own livelihood. (Chaotic)"
		],
		["Greed",
			"Greed: I'm only in it for the money. (Evil)"
		],
		["People",
			"People: I'm committed to the people I care about, not to ideals. (Neutral)"
		],
		["Aspiration",
			"Aspiration: I work hard to be the best there is at my craft. (Any)"
		]
	],
	bond : [
		"The workshop where I learned my trade is the most important place in the world to me.",
		"I created a great work for someone, and then found them unworthy to receive it. I'm still looking for someone worthy.",
		"I owe my guild a great debt for forging me into the person I am today.",
		"I pursue wealth to secure someone's love.",
		"One day I will return to my guild and prove that I am the greatest artisan of them all.",
		"I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood."
	],
	flaw : [
		"I'll do anything to get my hands on something rare or priceless.",
		"I'm quick to assume that someone is trying to cheat me.",
		"No one must ever learn that I once stole money from guild coffers.",
		"I'm never satisfied with what I have\u2015 I always want more.",
		"I would kill to acquire a noble title.",
		"I'm horribly jealous of anyone who can outshine my handiwork. Everywhere I go, I'm surrounded by rivals."
	],
	extra : [
		"Select a Guild Business",
		"Alchemists and apothecaries",
		"Armorers, locksmiths, and finesmiths",
		"Brewers, distillers, and vintners",
		"Calligraphers, scribes, and scriveners",
		"Carpenters, roofers, and plasterers",
		"Cartographers, surveyors, and chart-makers",
		"Cobblers and shoemakers",
		"Cooks and bakers",
		"Glassblowers and glaziers",
		"Jewelers and gemcutters",
		"Leatherworkers, skinners, and tanners",
		"Masons and stonecutters",
		"Painters, limners, and sign-makers",
		"Potters and tile-makers",
		"Shipwrights and sailmakers",
		"Smiths and metal-forgers",
		"Tinkers, pewterers, and casters",
		"Wagon-makers and wheelwrights",
		"Weavers and dyers",
		"Woodcarvers, coopers, and bowyers"
	],
	toolProfs : [["Artisan's tools", 1]],
	languageProfs : [1],
	lifestyle : "comfortable"
};
BackgroundList["hermit"] = {
	regExpSearch : /hermit/i,
	name : "Hermit",
	source : [["P", 134], ["ALbackground", 0]],
	skills : ["Medicine", "Religion"],
	gold : 5,
	equipleft : [
		["Winter blanket", "", 3],
		["Herbalism kit", "", 3]
	],
	equipright : [
		["Common clothes", "", 3],
		["Scroll case with notes", "", 1]
	],
	feature : "Discovery",
	trait : [
		"I've been isolated for so long that I rarely speak, preferring gestures and the occasional grunt.",
		"I am utterly serene, even in the face of disaster.",
		"The leader of my community had something wise to say on every topic, and I am eager to share that wisdom.",
		"I feel tremendous empathy for all who suffer.",
		"I'm oblivious to etiquette and social expectations.",
		"I connect everything that happens to me to a grand, cosmic plan.",
		"I often get lost in my own thoughts and contemplation, becoming oblivious to my surroundings.",
		"I am working on a grand philosophical theory and love sharing my ideas."
	],
	ideal : [
		["Greater Good",
			"Greater Good: My gifts are meant to be shared with all, not used for my own benefit. (Good)"
		],
		["Logic",
			"Logic: Emotions must not cloud our sense of what is right and true, or our logical thinking. (Lawful)"
		],
		["Free Thinking",
			"Free Thinking: Inquiry and curiosity are the pillars of progress. (Chaotic)"
		],
		["Power",
			"Power: Solitude and contemplation are paths toward mystical or magical power. (Evil)"
		],
		["Live and Let Live",
			"Live and Let Live: Meddling in the affairs of others only causes trouble. (Neutral)"
		],
		["Self-Knowledge",
			"Self-Knowledge: If you know yourself, there's nothing left to know. (Any)"
		]
	],
	bond : [
		"Nothing is more important than the other members of my hermitage, order, or association.",
		"I entered seclusion to hide from the ones who might still be hunting me. I must someday confront them.",
		"I'm still seeking the enlightenment I pursued in my seclusion, and it still eludes me.",
		"I entered seclusion because I loved someone I could not have.",
		"Should my discovery come to light, it could bring ruin to the world.",
		"My isolation gave me great insight into a great evil that only I can destroy."
	],
	flaw : [
		"Now that I've returned to the world, I enjoy its delights a little too much.",
		"I harbor dark, bloodthirsty thoughts that my isolation and meditation failed to quell.",
		"I am dogmatic in my thoughts and philosophy.",
		"I let my need to win arguments overshadow friendships and harmony.",
		"I'd risk too much to uncover a lost bit of knowledge.",
		"I like keeping secrets and won't share them with anyone."
	],
	extra : [
		"Select a Life of Seclusion",
		"Searching for spiritual enlightenment",
		"Living in accordance with a religious order",
		"Exiled for a crime I didn't commit",
		"Retreated from society after a life-altering event",
		"Worked on my art, literature, music, or manifesto",
		"Commune with nature, far from civilization",
		"Caretaker of an ancient ruin or relic",
		"Pilgrim in search of a thing of spiritual significance"
	],
	toolProfs : ["Herbalism kit"],
	languageProfs : [1],
	lifestyle : "poor"
};
BackgroundList["noble"] = {
	regExpSearch : /^(?!.*(waterdhavian|waterdeep|knight))(?=.*noble).*$/i,
	name : "Noble",
	source : [["P", 135], ["ALbackground", 0]],
	skills : ["History", "Persuasion"],
	gold : 25,
	equipleft : [
		["Scroll of pedigree", "", ""]
	],
	equipright : [
		["Fine clothes", "", 6],
		["Signet ring", "", ""],
		["Purse (with coins)", "", 1]
	],
	feature : "Position of Privilege",
	trait : [
		"My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.",
		"The common folk love me for my kindness and generosity.",
		"No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.",
		"I take great pains to always look my best and follow the latest fashions.",
		"I don't like to get my hands dirty, and I won't be caught dead in unsuitable accommodations.",
		"Despite my noble birth, I do not place myself above other folk. We all have the same blood.",
		"My favor, once lost, is lost forever.",
		"If you do me an injury, I will crush you, ruin your name, and salt your fields."
	],
	ideal : [
		["Respect",
			"Respect: Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity. (Good)"
		],
		["Responsibility",
			"Responsibility: It is my duty to respect the authority of those above me, just as those below me must respect mine. (Lawful)"
		],
		["Independence",
			"Independence: I must prove that I can handle myself without the coddling of my family. (Chaotic)"
		],
		["Power",
			"Power: If I can attain more power, no one will tell me what to do. (Evil)"
		],
		["Family",
			"Family: Blood runs thicker than water. (Any)"
		],
		["Noble Obligation",
			"Noble Obligation: It is my duty to protect and care for the people beneath me. (Good)"
		]
	],
	bond : [
		"I will face any challenge to win the approval of my family.",
		"My house's alliance with another noble family must be sustained at all costs.",
		"Nothing is more important than the other members of my family.",
		"I am in love with the heir of a family that my family despises.",
		"My loyalty to my sovereign is unwavering.",
		"The common folk must see me as a hero of the people."
	],
	flaw : [
		"I secretly believe that everyone is beneath me.",
		"I hide a truly scandalous secret that could ruin my family forever.",
		"I too often hear veiled insults and threats in every word addressed to me, and I'm quick to anger.",
		"I have an insatiable desire for carnal pleasures.",
		"In fact, the world does revolve around me.",
		"By my words and actions, I often bring shame to my family."
	],
	toolProfs : [["Gaming set", 1]],
	languageProfs : [1],
	lifestyle : "wealthy"
};
BackgroundList["outlander"] = {
	regExpSearch : /^(?!.*urban)(?=.*(outlander|forester|trapper|homesteader|guide|exile|outcast|bounty.?hunter|tribal nomad|hunter-gatherer|tribal.?marauder)).*$/i,
	name : "Outlander",
	source : [["P", 136], ["ALbackground", 0]],
	skills : ["Athletics", "Survival"],
	gold : 10,
	equipright : [
		["Traveler's clothes", "", 4],
		["Staff", "", 4],
		["Hunting trap", "", 25],
		["Trophy from animal", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Wanderer",
	trait : [
		"I'm driven by a wanderlust that led me away from home.",
		"I watch over my friends as if they were a litter of newborn pups.",
		"I once ran twenty-five miles without stopping to warn to my clan of an approaching orc horde. I'd do it again if I had to.",
		"I have a lesson for every situation, drawn from observing nature.",
		"I place no stock in wealthy or well-mannered folk. Money and manners won't save you from a hungry owlbear.",
		"I'm always picking things up, absently fiddling with them, and sometimes accidentally breaking them.",
		"I feel far more comfortable around animals than people.",
		"I was, in fact, raised by wolves."
	],
	ideal : [
		["Change",
			"Change: Life is like the seasons, in constant change, and we must change with it. (Chaotic)"
		],
		["Greater Good",
			"Greater Good: It is each person's responsibility to make the most happiness for the whole tribe. (Good)"
		],
		["Honor",
			"Honor: If I dishonor myself, I dishonor my whole clan. (Lawful)"
		],
		["Might",
			"Might: The strongest are meant to rule. (Evil)"
		],
		["Nature",
			"Nature: The natural world is more important than all the constructs of civilization. (Neutral)"
		],
		["Glory",
			"Glory: I must earn glory in battle, for myself and my clan. (Any)"
		]
	],
	bond : [
		"My family, clan, or tribe is the most important thing in my life, even when they are far from me.",
		"An injury to the unspoiled wilderness of my home is an injury to me.",
		"I will bring terrible wrath down on the evildoers who destroyed my homeland.",
		"I am the last of my tribe, and it is up to me to ensure their names enter legend.",
		"I suffer awful visions of a coming disaster and will do anything to prevent it.",
		"It is my duty to provide children to sustain my tribe."
	],
	flaw : [
		"I am too enamored of ale, wine, and other intoxicants.",
		"There's no room for caution in a life lived to the fullest.",
		"I remember every insult I've received and nurse a silent resentment toward anyone who's ever wronged me.",
		"I am slow to trust members of other races, tribes, and societies.",
		"Violence is my answer to almost any challenge.",
		"Don't expect me to save those who can't save themselves. It is nature's way that the strong thrive and the weak perish."
	],
	extra : ["Select an Origin",
		"Forester",
		"Trapper",
		"Homesteader",
		"Guide",
		"Exile or outcast",
		"Bounty hunter",
		"Pilgrim",
		"Tribal nomad",
		"Hunter-gatherer",
		"Tribal marauder"
	],
	toolProfs : [["Musical instrument", 1]],
	languageProfs : [1],
	lifestyle : "poor"
};
BackgroundList["sage"] = {
	regExpSearch : /(sage|alchemist|astronomer|academic|librarian|professor|researcher|apprentice|scribe)/i,
	name : "Sage",
	source : [["P", 137], ["ALbackground", 0]],
	skills : ["Arcana", "History"],
	gold : 10,
	equipleft : [
		["Ink, 1 ounce bottle of", 1, ""],
		["Ink pen (quill)", "", ""],
		["Small knife", "", 0.5],
		["Letter from dead colleague", "", ""]
	],
	equipright : [
		["Common clothes", "", 3],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Researcher",
	trait : [
		"I use polysyllabic words that convey the impression of great erudition.",
		"I've read every book in the world's greatest libraries\u2015 or I like to boast that I have.",
		"I'm used to helping out those who aren't as smart as I am, and I patiently explain anything and everything to others.",
		"There's nothing I like more than a good mystery.",
		"I'm willing to listen to every side of an argument before I make my own judgment.",
		"I . . . speak . . . slowly . . . when talking . . . to idiots, . . . which . . . almost. . . everyone . . . is . . . compared . . . to me.",
		"I am horribly, horribly awkward in social situations.",
		"I'm convinced that people are always trying to steal my secrets."
	],
	ideal : [
		["Knowledge",
			"Knowledge: The path to power and self-improvement is through knowledge. (Neutral)"
		],
		["Beauty",
			"Beauty: What is beautiful points us beyond itself toward what is true. (Good)"
		],
		["Logic",
			"Logic: Emotions must not cloud our logical thinking. (Lawful)"
		],
		["No Limits",
			"No Limits: Nothing should fetter the infinite possibility inherent in all existence. (Chaotic)"
		],
		["Power",
			"Power: Knowledge is the path to power and domination. (Evil)"
		],
		["Self-Improvement",
			"Self-Improvement: The goal of a life of study is the betterment of oneself. (Any)"
		]
	],
	bond : [
		"It is my duty to protect my students.",
		"I have an ancient text that holds terrible secrets that must not fall into the wrong hands.",
		"I work to preserve a library, university, scriptorium, or monastery.",
		"My life's work is a series of tomes related to a specific field of lore.",
		"I've been searching my whole life for the answer to a certain question.",
		"I sold my soul for knowledge. I hope to do great deeds and win it back."
	],
	flaw : [
		"I am easily distracted by the promise of information.",
		"Most people scream and run when they see a demon. I stop and take notes on its anatomy.",
		"Unlocking an ancient mystery is worth the price of a civilization.",
		"I overlook obvious solutions in favor of complicated ones.",
		"I speak without really thinking through my words, invariably insulting others.",
		"I can't keep a secret to save my life, or anyone else's."
	],
	extra : ["Select a Specialty",
		"Alchemist",
		"Astronomer",
		"Discredited academic",
		"Librarian",
		"Professor",
		"Researcher",
		"Wizard's apprentice",
		"Scribe"
	],
	languageProfs : [2],
	lifestyle : "modest"
};
BackgroundList["sailor"] = {
	regExpSearch : /sailor/i,
	name : "Sailor",
	source : [["P", 139], ["ALbackground", 0]],
	skills : ["Athletics", "Perception"],
	gold : 10,
	equipleft : [
		["Silk rope, feet of", 50, 0.1]
	],
	equipright : [
		["Common clothes", "", 3],
		["Belaying pin (club)", "", 2],
		["Lucky charm", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Ship's Passage",
	trait : [
		"My friends know they can rely on me, no matter what.",
		"I work hard so that I can play hard when the work is done.",
		"I enjoy sailing into new ports and making new friends over a flagon of ale.",
		"I stretch the truth for the sake of a good story.",
		"To me, a tavern brawl is a nice way to get to know a new city.",
		"I never pass up a friendly wager.",
		"My language is as foul as an otyugh nest.",
		"I like a job well done, especially if I can convince someone else to do it."
	],
	ideal : [
		["Respect",
			"Respect: The thing that keeps a ship together is mutual respect between captain and crew. (Good)"
		],
		["Fairness",
			"Fairness: We all do the work, so we all share in the rewards. (Lawful)"
		],
		["Freedom",
			"Freedom: The sea is freedom\u2015 the freedom to go anywhere and do anything. (Chaotic)"
		],
		["Mastery",
			"Mastery: I'm a predator, and the other ships on the sea are my prey. (Evil)"
		],
		["People",
			"People: I'm committed to my crewmates, not to ideals. (Neutral)"
		],
		["Aspiration",
			"Aspiration: Someday I'll own my own ship and chart my own destiny. (Any)"
		]
	],
	bond : [
		"I'm loyal to my captain first, everything else second.",
		"The ship is most important\u2015 crewmates and captains come and go.",
		"I'll always remember my first ship.",
		"In a harbor town, I have a paramour whose eyes nearly stole me from the sea.",
		"I was cheated out of my fair share of the profits, and I want to get my due.",
		"Ruthless pirates murdered my captain and crewmates, plundered our ship, and left me to die. Vengeance will be mine."
	],
	flaw : [
		"I follow orders, even if I think they're wrong.",
		"I'll say anything to avoid having to do extra work.",
		"Once someone questions my courage, I never back down no matter how dangerous the situation.",
		"Once I start drinking, it's hard for me to stop.",
		"I can't help but pocket loose coins and other trinkets I come across.",
		"My pride will probably lead to my destruction."
	],
	toolProfs : ["Navigator's tools", "Vehicles (water)"],
	lifestyle : "modest",
};
BackgroundList["soldier"] = {
	regExpSearch : /^(?!.*mercenary)(?=.*soldier).*$/i,
	name : "Soldier",
	source : [["P", 140], ["ALbackground", 0]],
	skills : ["Athletics", "Intimidation"],
	gold : 10,
	equipright : [
		["Common clothes", "", 3],
		["Insignia of rank", "", ""],
		["Trophy from fallen enemy", "", ""],
		["Bone dice or playing cards", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Military Rank",
	trait : [
		"I'm always respectful and polite.",
		"I'm haunted by memories of war. I can't get the violent images out of my mind.",
		"I'm slow to make new friends, because I've lost too many old ones.",
		"I'm full of inspiring and cautionary tales from my military experience with some relevance to almost every type of combat situation.",
		"I can stare down a owlbear without flinching.",
		"I enjoy my strength and like to break things.",
		"I have a rough sense of humor.",
		"I approach problems head-on. A simple, direct course is the best path to a solution."
	],
	ideal : [
		["Greater Good",
			"Greater Good: Our fate is to give our lives in the defense of others. (Good)"
		],
		["Responsibility",
			"Responsibility: I do what I have to and follow just authority. (Lawful)"
		],
		["Independence",
			"Independence: When people obey orders blindly, they affirm a kind of tyranny. (Chaotic)"
		],
		["Might",
			"Might: In life as in war, the mightier force prevails. (Evil)"
		],
		["Live and Let Live",
			"Live and Let Live: Ideals aren't worth killing over or going to war for. (Neutral)"
		],
		["Nation",
			"Nation: My city, state, or people are the only things that matter. (Any)"
		]
	],
	bond : [
		"I would still give my life for the people I have served with.",
		"Someone saved my life on the battlefield. Even now, I would never leave a friend behind.",
		"My honor is my life.",
		"I'll never forget the crushing defeat my company endured or the foes who inflicted it.",
		"Those who fight with me are those worth laying down my life for.",
		"I fight for those who cannot fight for themselves."
	],
	flaw : [
		"The atrocious enemy we faced in battle still leaves me trembling with fear.",
		"I have little respect for those who are not a tested warrior.",
		"A disastrous mistake I made in battle cost many lives\u2015 I will do anything to keep that mistake a secret.",
		"My hatred of my foes is blind and unreasoning. ",
		"I uphold the law, even if the law causes suffering.",
		"I'd rather eat my weapon than admit when I'm wrong."
	],
	extra : ["Select a Specialty",
		"Officer",
		"Scout",
		"Infantry",
		"Cavalry",
		"Healer",
		"Quartermaster",
		"Standard-bearer",
		"Support staff"
	],
	toolProfs : [["Gaming set", 1], "Vehicles (land)"],
	lifestyle : "modest"
};
BackgroundList["urchin"] = {
	regExpSearch : /urchin/i,
	name : "Urchin",
	source : [["P", 141], ["ALbackground", 0]],
	skills : ["Sleight of Hand", "Stealth"],
	gold : 10,
	equipleft : [
		["Map of the city", "", ""],
		["Small knife", "", 0.5]
	],
	equipright : [
		["Common clothes", "", 3],
		["Token from my parents", "", ""],
		["Pet mouse", "", 0.1],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "City Secrets",
	trait : [
		"I keep scraps of food and trinkets hidden away in my pockets.",
		"I ask questions all the time.",
		"I like to squeeze into compact places where nobody can harm me.",
		"I sleep with my back to solid surface, with all that I own embraced tightly in my arms.",
		"I have bad manners and eat like a pig.",
		"I expect that anybody who's nice to me is hiding malicious intent.",
		"I eschew bathing.",
		"I say, without reserve, what other people are implying or masking."
	],
	ideal : [
		["Respect",
			"Respect: Everybody, no matter their riches, deserves respect. (Good)"
		],
		["Community",
			"Community: We have to take look out for each other, because nobody else will do it for us. (Lawful)"
		],
		["Change",
			"Change: The low rise up, and the high and mighty come down. Change is natural. (Chaotic)"
		],
		["Retribution",
			"Retribution: The rich need to be shown how it is to live and die in the poor quarters. (Evil)"
		],
		["People",
			"People: I help those who help me\u2015 that is what lets us stay alive. (Neutral)"
		],
		["Aspiration",
			"Aspiration: I'm going to prove that I'm worthy of a better life. (Any)"
		]
	],
	bond : [
		"My town or city is my home, and I'll battle those that threaten it.",
		"I'm the benefactor of an orphanage so others may be kept from enduring what I was forced to endure.",
		"I owe my life to another urchin who taught me the ways of living in the gutters.",
		"I owe a debt I can never repay to the person who showed me sympathy.",
		"I got away from my life of poverty by robbing an influential person, and I'm wanted for it.",
		"No one else should have to suffer the difficulties I've been through."
	],
	flaw : [
		"I will run away from a fight if I'm outnumbered.",
		"A gold piece already has a lot of value to me, and I'll do just about anything for more of it.",
		"I will never completely trust another. I only trust myself.",
		"I would rather use an unfair advantage than fight honorably.",
		"It's not theft if I have more use for it than someone else.",
		"People who are incapable of taking care of themselves get what they deserve."
	],
	toolProfs : ["Disguise kit", ["Thieves' tools", "Dex"]],
	lifestyle : "modest"
};

// Add the background variants
AddBackgroundVariant("entertainer", "gladiator", {
	regExpSearch : /gladiator/i,
	name : "Gladiator",
	source : [["P", 131], ["ALbackground", 0]],
	equipright : [
		["Costume", "", 4],
		["Favor of an admirer", "", ""],
		["Belt pouch (with coins)", "", 1],
		["Inexpensive, unusual weapon", "", ""]
	],
	feature : "Are You Entertained?",
	extra : ""
});
AddBackgroundVariant("guild artisan", "guild merchant", {
	regExpSearch : /^(?=.*guild)(?=.*merchant).*$/i,
	name : "Guild Merchant",
	source : [["P", 133], ["ALbackground", 0]],
	equipleft : [
		["Letter of introduction from guild", "", ""]
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["Belt pouch (with coins)", "", 1],
		["Cart", "", ""],
		["Mule", "", ""]
	],
	extra : [
		"Select a Guild Business",
		"Traders",
		"Caravan masters",
		"Shopkeepers"
	],
	toolProfs : ["Navigator's tools (or language)"]
});
AddBackgroundVariant("noble", "knight", {
	regExpSearch : /^(?!.*order)(?=.*knight).*$/i,
	name : "Knight",
	source : [["P", 136], ["ALbackground", 0]],
	equipright : [
		["Fine clothes", "", 6],
		["Signet ring", "", ""],
		["Purse (with coins)", "", 1],
		["Banner or token from devoted love", "", ""]
	],
	feature : "Retainers"
});
AddBackgroundVariant("sailor", "pirate", {
	regExpSearch : /pirate/i,
	name : "Pirate",
	source : [["P", 139], ["ALbackground", 0]],
	feature : "Bad Reputation"
});

// Add the backgrounds features that are not in the SRD
BackgroundFeatureList["are you entertained?"] = {
	description : "I can always find a place to perform (arena/pit fight), where I receive free lodging and food of a modest or comfortable standard, as long as I perform each night. In addition, my performance makes me something of a local figure. When strangers recognize me in a town where I have performed, they typically take a liking to me.",
	source : [["P", 131], ["ALbackground", 0]]
};
BackgroundFeatureList["bad reputation"] = {
	description : "No matter where I go, people are afraid of me due to my reputation. When I am in a civilized settlement, I can get away with minor criminal offenses, such as refusing to pay for food at a tavern or breaking down doors at a local shop, since most people will not report my activity to the authorities.",
	source : [["P", 139], ["ALbackground", 0]]
};
BackgroundFeatureList["by popular demand"] = {
	description : "I can always find a place to perform (inn/tavern/circus/etc.), where I receive free lodging and food of a modest or comfortable standard, as long as I perform each night. In addition, my performance makes me something of a local figure. When strangers recognize me in a town where I have performed, they typically take a liking to me.",
	source : [["P", 130], ["ALbackground", 0]],
};
BackgroundFeatureList["city secrets"] = {
	description : "I know the secret patterns and flow to cities and can find passages through the urban sprawl that others would miss. When I am not in combat, I (and companions I lead) can travel between any two locations in the city twice as fast as my speed would normally allow.",
	source : [["P", 141], ["ALbackground", 0]]
};
BackgroundFeatureList["criminal contact"] = {
	description : "I have a reliable and trustworthy contact who acts as my liaison to a network of other criminals. I know how to get messages to and from my contact, even over great distances; specifically, I know the local messengers, corrupt caravan masters, and seedy sailors who can deliver my messages.",
	source : [["P", 129], ["ALbackground", 0]]
};
BackgroundFeatureList["discovery"] = {
	description : "The quiet seclusion of my extended hermitage gave me access to a unique and powerful discovery. The exact nature of this revelation depends on the nature of my seclusion. It might be a great truth, a hidden site, a long forgotten fact, or unearthed some relic of the past that could rewrite history.",
	source : [["P", 134], ["ALbackground", 0]]
};
BackgroundFeatureList["false identity"] = {
	description : "I have created a second identity that includes documentation, established acquaintances, and disguises that allow me to assume that persona. Additionally, I can forge documents, including official papers and personal letters, as long as I have seen an example of the kind of document or the handwriting I am trying to copy.",
	source : [["P", 128], ["ALbackground", 0]]
};
BackgroundFeatureList["guild membership"] = {
	description : "5 gp membership fees per month: The guild offers lodging if possible. In case of being accused of a crime, the guild will support me if a good case can be made for my innocence or the crime is justifiable. I can also gain access to powerful political figures through the guild, as long as I'm in good standing and the guild is paid enough.",
	source : [["P", 133], ["ALbackground", 0]]
};
BackgroundFeatureList["military rank"] = {
	description : "I have a military rank from my career as a soldier. Soldiers loyal to my former military organization still recognize my authority and influence. I can invoke my rank to influence soldiers and temporarily requisition simple equipment or horses. I can usually gain access to friendly military encampments and fortresses where my rank is recognized.",
	source : [["P", 140], ["ALbackground", 0]],
};
BackgroundFeatureList["position of privilege"] = {
	description : "I am welcome in high society, and people assume I have the right to be wherever I am. The common folk make every effort to accommodate me and avoid my displeasure, and other people of high birth treat me as a member of the same social sphere. I can secure an audience with a local noble if I need to.",
	source : [["P", 135], ["ALbackground", 0]]
};
BackgroundFeatureList["researcher"] = {
	description : "When I attempt to learn or recall a piece of lore, if I do not know that information, I often know where and from whom I can obtain it. Usually, this information comes from a library, scriptorium, university, or a sage or other learned person or creature. Unearthing the deepest secrets of the multiverse can require an adventure or even a whole campaign.",
	source : [["P", 138], ["ALbackground", 0]]
};
BackgroundFeatureList["retainers"] = {
	description : "I have the service of three retainers loyal to me family, one of whom is another noble and my squire. My other retainers are commoners who can perform mundane tasks for me, but they do not fight for me, will not follow me into obviously dangerous areas (such as dungeons), and will leave if they are frequently endangered or abused.",
	source : [["P", 136], ["ALbackground", 0]]
};
BackgroundFeatureList["rustic hospitality"] = {
	description : "Since I come from the ranks of the common folk, I fit in among them with ease. I can find a place to hide, rest, or recuperate among other commoners, unless I have shown myself to be a danger to them. They will shield me from the law or anyone else searching for me, though they will not risk their lives for me.",
	source : [["P", 131], ["ALbackground", 0]]
};
BackgroundFeatureList["ship's passage"] = {
	description : "When I need to, I can secure free passage on a sailing ship for myself and my companions. I might sail on the ship I served on, or another ship I have good relations with. Because I'm calling in a favor, I can't be certain of a schedule or route that will meet my every need. My companions and I are expected to assist the crew during the voyage.",
	source : [["P", 139], ["ALbackground", 0]]
};
BackgroundFeatureList["wanderer"] = {
	description : "I have an excellent memory for maps and geography, and I can always recall the general layout of terrain, settlements, and other features around me. In addition, I can find food and fresh water for myself and up to five other people each day, provided that the land offers berries, small game, water, and so forth.",
	source : [["P", 136], ["ALbackground", 0]]
};

// Add the feats that are not in the SRD
FeatsList["actor"] = {
	name : "Actor",
	source : ["P", 165],
	description : "Advantage on Charisma (Deception) and (Performance) if trying to pass as another. I can mimic a person's speech or other creature's sounds if I've heard it for at least 1 minute. Wisdom (Insight) vs. Charisma (Deception) to determine the sound is faked. [+1 Charisma]",
	improvements : "Actor (feat): +1 Charisma;",
	scores : [0, 0, 0, 0, 0, 1]
};
FeatsList["alert"] = {
	name : "Alert",
	source : ["P", 165],
	description : "I can't be surprised while I'm conscious. I have a +5 bonus on initiative rolls. Other creatures don't gain advantage on attack rolls against me as a result of being hidden from me.",
	addMod : { type : "skill", field : "Init", mod : 5, text : "I have a +5 bonus on initiative rolls." }
};
FeatsList["athlete"] = {
	name : "Athlete",
	source : ["P", 165],
	description : "Standing up from prone uses only 5 ft of movement. Climbing doesn't cost me extra movement. I can make a running long jump or a running high jump after moving only 5 feet on foot, rather than 10 feet. [+1 Strength or Dexterity]",
	improvements : "Athlete (feat): +1 Strength or Dexterity;"
};
FeatsList["charger"] = {
	name : "Charger",
	source : ["P", 165],
	description : "When taking the Dash action and moving 10 feet or more in a straight line, I can immediately take a bonus action to make either one melee weapon attack with +5 damage or try to shove the target up to 10 feet away.",
	action : ["bonus action", " (after Dash action)"]
};
FeatsList["crossbow expert"] = {
	name : "Crossbow Expert",
	source : ["P", 165],
	description : "I ignore the loading quality of crossbows I'm proficient with. I don't suffer disadvantage on ranged attack rolls for being within 5 feet of a hostile. When I attack with a one-handed weapon, I can use a bonus action to attack with a hand crossbow I'm holding.",
	action : ["bonus action", " (with Attack action)"],
	calcChanges : {
		atkAdd : ["if ((/crossbow/i).test(WeaponName) && fields.Proficiency) {fields.Description = fields.Description.replace(/(,? ?loading|loading,? ?)/i, '');};", "I ignore the loading quality of crossbows I'm proficient with."]
	}
};
FeatsList["defensive duelist"] = {
	name : "Defensive Duelist",
	source : ["P", 165],
	description : "When wielding a finesse weapon with which I am proficient and another creature hits me with a melee attack, I can use my reaction to add my proficiency bonus to my AC for that attack, potentially causing the attack to miss me.",
	prerequisite : "Dexterity 13 or higher",
	prereqeval : "What('Dex') >= 13",
	action : ["reaction", " (when hit in melee)"]
};
FeatsList["dual wielder"] = {
	name : "Dual Wielder",
	source : ["P", 165],
	description : "I can use two-weapon fighting even when the one-handed melee weapons I'm wielding aren't light. I can draw or stow two one-handed weapons when I would normally be able to draw or stow only one. +1 AC while wielding separate melee weapons in each hand.",
	eval : "AddACMisc(1, 'Dual Wielder (if 2 weapons)', 'When wielding a melee weapon in each hand, the Dual Wielder feat gives a +1 bonus to AC', 'ACshield');",
	removeeval : "AddACMisc(0, 'Dual Wielder (if 2 weapons)', 'When wielding a melee weapon in each hand, the Dual Wielder feat gives a +1 bonus to AC');"
};
FeatsList["dungeon delver"] = {
	name : "Dungeon Delver",
	source : ["P", 166],
	description : "I have adv. on Wis (Perception) and Int (Investigation) checks made to detect the presence of secret doors. I have resistance to damage dealt by traps and advantage on saves to avoid or resist traps. Travelling at a fast pace doesn't impose -5 on my passive Perception.",
	dmgres : ["Traps"],
	savetxt : { adv_vs : ["traps"] },
	vision : [["Adv. on Perception and Investigation for secret doors", 0], ["No -5 for travelling at fast pace", 0]]
};
FeatsList["durable"] = {
	name : "Durable",
	source : ["P", 166],
	description : "When I roll a hit die to regain hit points, the minimum number of hit points I regain from the roll equals twice my Constitution modifier (minimum of 2). [+1 Constitution]",
	improvements : "Durable (feat): +1 Constitution;",
	scores : [0, 0, 1, 0, 0, 0]
};
FeatsList["elemental adept"] = {
	name : "Elemental Adept",
	source : ["P", 166],
	description : "Choose one of the damage types: acid, cold, fire, lightning, or thunder. Spells I cast ignore resistance to damage from this damage type. For any spell I cast that deals this damage type, I can treat any 1 on a damage die as a 2.",
	prerequisite : "The ability to cast at least one spell",
	prereqeval : "CurrentSpells.toSource() !== '({})'"
};
FeatsList["great weapon master"] = {
	name : "Great Weapon Master",
	source : ["P", 167],
	description : "If I score a critical hit or reduce a creature to 0 hit points with a melee weapon in my turn, I can make one melee weapon attack as a bonus action. With a heavy melee weapon, I can choose to take a -5 penalty on the attack roll for +10 on the attack's damage.",
	action : ["bonus action", " (after crit or take-down)"],
	calcChanges : {
		atkCalc : ["if (isMeleeWeapon && (/heavy/i).test(fields.Description) && (/power.{0,3}attack|great.{0,3}weapon.{0,3}master/i).test(WeaponText)) {output.extraDmg += 10; output.extraHit -= 5;};", "If I include the words 'Power Attack' or 'Great Weapon Master' in a heavy melee weapon's name or description, the calculation will put a -5 penalty on the attack's To Hit and +10 on its Damage."]
	}
};
FeatsList["healer"] = {
	name : "Healer",
	source : ["P", 167],
	description : "Using a healer's kit to stabilize someone gives them 1 hit point as well. As an action, I can spend one use of a healer's kit to restore 1d6 + 4 + (creature's HD) hit points. After that, the creature can't gain hit points from this feat again until it finishes a short rest.",
	action : ["action", " (1d6+4+HD with healing kit)"]
};
FeatsList["heavily armored"] = {
	name : "Heavily Armored",
	source : ["P", 167],
	description : "I gain proficiency with heavy armor. [+1 Strength]",
	prerequisite : "Proficiency with medium armor",
	prereqeval : "tDoc.getField('Proficiency Armor Medium').isBoxChecked(0)",
	improvements : "Heavily Armored (feat): +1 Strength;",
	scores : [1, 0, 0, 0, 0, 0],
	armor : [false, false, true, false]
};
FeatsList["heavy armor master"] = {
	name : "Heavy Armor Master",
	source : ["P", 167],
	description : "While wearing heavy armor, bludgeoning, piercing, and slashing damage taken from nonmagical weapons is reduced by 3. [+1 Strength]",
	prerequisite : "Proficiency with heavy armor",
	prereqeval : "tDoc.getField('Proficiency Armor Heavy').isBoxChecked(0)",
	improvements : "Heavy Armor Master (feat): +1 Strength;",
	scores : [1, 0, 0, 0, 0, 0]
};
FeatsList["inspiring leader"] = {
	name : "Inspiring Leader",
	source : ["P", 167],
	calculate : "event.value = 'I can spend 10 minutes inspiring up to 6 friendly creatures within 30 feet who can see or hear and can understand me. Each gains lvl (' + What('Character Level') + ') + Cha mod (' + What('Cha Mod') + \") temporary hit points. One can't gain temporary hit points from this feat again until after a short rest.\";",
	prerequisite : "Charisma 13 or higher",
	prereqeval : "What('Cha') >= 13"
};
FeatsList["keen mind"] = {
	name : "Keen Mind",
	source : ["P", 167],
	description : "I always know which way is north and the number of hours left before the next sunrise or sunset. I can accurately recall anything I have seen or heard within the past month. [+1 Intelligence]",
	improvements : "Keen Mind (feat): +1 Intelligence;",
	scores : [0, 0, 0, 1, 0, 0]
};
FeatsList["lightly armored"] = {
	name : "Lightly Armored",
	source : ["P", 167],
	description : "I gain proficiency with light armor. [+1 Strength or Dexterity]",
	improvements : "Lightly Armored (feat): +1 Strength or Dexterity;",
	armor : [true, false, false, false]
};
FeatsList["linguist"] = {
	name : "Linguist",
	source : ["P", 167],
	calculate : "event.value = \"I can ably create written ciphers that others can't decipher unless I teach them, they succeed on an Intelligence check DC \" + (What('Int') + What('Proficiency Bonus')) + ' (Intelligence score + proficiency bonus), or they use magic to decipher it. I learn three languages of my choice. [+1 Intelligence]';",
	improvements : "Linguist (feat): +1 Intelligence;",
	scores : [0, 0, 0, 1, 0, 0],
	languageProfs : [3]
};
FeatsList["lucky"] = {
	name : "Lucky",
	source : ["P", 167],
	description : "Use one of three luck points to roll an extra d20 for attacking, being attacked, an ability check, or a saving throw before the outcome is determined. If more than one creature uses luck, no extra dice are rolled. I regain expended luck points when I finish a long rest.",
	usages : 3,
	recovery : "long rest",
	additional : "attack/check/save"
};
FeatsList["mage slayer"] = {
	name : "Mage Slayer",
	source : ["P", 168],
	description : "As a reaction, I can make a melee weapon attack on a creature within 5 ft of me that casts a spell. Concentration checks from damage from me are made with disadvantage. I have advantage on saving throws against spells cast by creatures within 5 feet of me.",
	savetxt : { adv_vs : ["spells cast within 5 ft"] },
	eval : "AddAction('reaction', 'Melee weapon attack (if spell cast in 5 ft)', 'the Mage Slayer feat');",
	removeeval : "RemoveAction('reaction', 'Melee weapon attack (if spell cast in 5 ft)');"
};
FeatsList["magic initiate [bard]"] = {
	name : "Magic Initiate [Bard]",
	source : ["P", 168],
	description : "I learn two cantrips and one 1st-level spell of my choice from the bard's spell list.\nI can cast the 1st-level spell at its lowest level once per long rest without using a spell slot.\nCharisma is my spellcasting ability for these.",
	spellcastingBonus : [{
		name : "Bard cantrip",
		spellcastingAbility : 6,
		'class' : 'bard',
		level : [0, 0],
		atwill : true,
		times : 2
	}, {
		name : "Bard 1st-level spell",
		'class' : 'bard',
		level : [1, 1],
		oncelr : true
	}]
};
FeatsList["magic initiate [cleric]"] = {
	name : "Magic Initiate [Cleric]",
	source : ["P", 168],
	description : "I learn two cantrips and one 1st-level spell of my choice from the cleric's spell list.\nI can cast the 1st-level spell at its lowest level once per long rest without using a spell slot.\nWisdom is my spellcasting ability for these.",
	spellcastingBonus : [{
		name : "Cleric cantrip",
		spellcastingAbility : 5,
		'class' : 'cleric',
		level : [0, 0],
		atwill : true,
		times : 2
	}, {
		name : "Cleric 1st-level spell",
		'class' : 'cleric',
		level : [1, 1],
		oncelr : true
	}]
};
FeatsList["magic initiate [druid]"] = {
	name : "Magic Initiate [Druid]",
	source : ["P", 168],
	description : "I learn two cantrips and one 1st-level spell of my choice from the druid's spell list.\nI can cast the 1st-level spell at its lowest level once per long rest without using a spell slot.\nWisdom is my spellcasting ability for these.",
	spellcastingBonus : [{
		name : "Druid cantrip",
		spellcastingAbility : 5,
		'class' : 'druid',
		level : [0, 0],
		atwill : true,
		times : 2
	}, {
		name : "Druid 1st-level spell",
		'class' : 'druid',
		level : [1, 1],
		oncelr : true
	}]
};
FeatsList["magic initiate [sorcerer]"] = {
	name : "Magic Initiate [Sorcerer]",
	source : ["P", 168],
	description : "I learn two cantrips and one 1st-level spell of my choice from the sorcerer's spell list.\nI can cast the 1st-level spell at its lowest level once per long rest without using a spell slot.\nCharisma is my spellcasting ability for these.",
	spellcastingBonus : [{
		name : "Sorcerer cantrip",
		spellcastingAbility : 6,
		'class' : 'sorcerer',
		level : [0, 0],
		atwill : true,
		times : 2
	}, {
		name : "Sorcerer 1st-level spell",
		'class' : 'sorcerer',
		level : [1, 1],
		oncelr : true
	}]
};
FeatsList["magic initiate [warlock]"] = {
	name : "Magic Initiate [Warlock]",
	source : ["P", 168],
	description : "I learn two cantrips and one 1st-level spell of my choice from the warlock's spell list.\nI can cast the 1st-level spell at its lowest level once per long rest without using a spell slot.\nCharisma is my spellcasting ability for these.",
	spellcastingBonus : [{
		name : "Warlock cantrip",
		spellcastingAbility : 6,
		'class' : 'warlock',
		level : [0, 0],
		atwill : true,
		times : 2
	}, {
		name : "Warlock 1st-level spell",
		'class' : 'warlock',
		level : [1, 1],
		oncelr : true
	}]
};
FeatsList["magic initiate [wizard]"] = {
	name : "Magic Initiate [Wizard]",
	source : ["P", 168],
	description : "I learn two cantrips and one 1st-level spell of my choice from the wizard's spell list.\nI can cast the 1st-level spell at its lowest level once per long rest without using a spell slot.\nIntelligence is my spellcasting ability for these.",
	spellcastingBonus : [{
		name : "Wizard cantrip",
		spellcastingAbility : 4,
		'class' : 'wizard',
		level : [0, 0],
		atwill : true,
		times : 2
	}, {
		name : "Wizard 1st-level spell",
		'class' : 'wizard',
		level : [1, 1],
		oncelr : true
	}]
};
FeatsList["martial adept"] = {
	name : "Martial Adept",
	source : ["P", 168],
	calculate : "event.value = 'I learn two maneuvers of my choice from those available to the Battle Master archetype. The saving throw DC for this is ' + (8 + What('Proficiency Bonus') + Math.max(What('Str Mod'), What('Dex Mod'))) + ' (8 + proficiency bonus + Str/Dex mod). I gain one superiority die (d6), which I regain when I finish a short rest.';",
	eval : "AddFeature('Combat Superiority ', 1, '(d6)', 'short rest', 'the Martial Adept feat', 'bonus');",
	removeeval : "RemoveFeature('Combat Superiority ', 1);"
};
FeatsList["medium armor master"] = {
	name : "Medium Armor Master",
	source : ["P", 168],
	description : "Wearing medium armor doesn't impose disadvantage on my Dexterity (Stealth) checks. When I wear medium armor, I can add up to 3, rather than 2, to my AC if my Dexterity is 16 or higher.",
	prerequisite : "Proficiency with medium armor",
	prereqeval : "tDoc.getField('Proficiency Armor Medium').isBoxChecked(0)",
	eval : "Value('Medium Armor Max Mod', 3); if (CurrentArmour.known && ArmourList[CurrentArmour.known].type === 'medium') {Checkbox('AC Stealth Disadvantage', false); ShowHideStealthDisadv();}",
	removeeval : "tDoc.resetForm(['Medium Armor Max Mod']); if (CurrentArmour.known && ArmourList[CurrentArmour.known].type === 'medium') {Checkbox('AC Stealth Disadvantage', ArmourList[CurrentArmour.known].stealthdis && !(/mithral/i).test(CurrentArmour.field)); ShowHideStealthDisadv();};"
};
FeatsList["mobile"] = {
	name : "Mobile",
	source : ["P", 168],
	description : "When I use the Dash action, difficult terrain doesn't cost me extra movement that turn. When I make a melee attack against a creature, I don't provoke opportunity attacks from that creature for the rest of the turn, whether I hit or not. [+10 ft speed]",
	speed : { allModes : "+10" }
};
FeatsList["moderately armored"] = {
	name : "Moderately Armored",
	source : ["P", 168],
	description : "I gain proficiency with medium armor and shields. [+1 Strength or Dexterity]",
	prerequisite : "Proficiency with light armor",
	prereqeval : "tDoc.getField('Proficiency Armor Light').isBoxChecked(0)",
	improvements : "Moderately Armored (feat): +1 Strength or Dexterity;",
	armor : [false, true, false, true]
};
FeatsList["mounted combatant"] = {
	name : "Mounted Combatant",
	source : ["P", 168],
	description : "I have advantage on melee attack rolls against unmounted creatures smaller than my mount. I can force attacks targeting my mount to target me instead. When a Dex save would halve damage, my mount takes no damage on success and half damage on failure."
};
FeatsList["observant"] = {
	name : "Observant",
	source : ["P", 168],
	description : "If I can see a creature's mouth while it is speaking a language I understand, I can interpret what it's saying by reading its lips. I have a +5 bonus to passive Wisdom (Perception) and passive Intelligence (Investigation) scores. [+1 Intelligence or Wisdom]",
	improvements : "Observant (feat): +1 Intelligence or Wisdom;",
	addMod : { type : "skill", field : "passive perception", mod : 5, text : "I have a +5 bonus to passive Wisdom (Perception)." }
};
FeatsList["polearm master"] = {
	name : "Polearm Master",
	source : ["P", 168],
	description : "As a bonus action when I do the Attack action with a glaive/" + (typePF ? " " : "") + "halberd/quarterstaff/spear, I can make a 1d4 bludgeoning attack with its butt end." + (typePF ? "\n" : " ") + "While wielding a glaive/halberd/" + (typePF ? "" : " ") + "pike/quarterstaff/spear, I get an opportunity attack when a creature enters my reach.",
	eval : "AddAction('bonus action', 'Butt end attack (after attack with polearm)', 'the Polearm Master feat'); AddWeapon('polearm butt end');",
	removeeval : "RemoveAction('bonus action', 'Butt end attack (after attack with polearm)'); RemoveWeapon('polearm butt end');",
	weapons : [false, false, ["polearm butt end"]]
};
FeatsList["resilient [strength]"] = {
	name : "Resilient [Strength]",
	source : ["P", 168],
	description : "I gain proficiency with Strength saving throws. [+1 Strength]",
	improvements : "Resilient (feat): +1 Strength;",
	scores : [1, 0, 0, 0, 0, 0],
	saves : ["Str"]
};
FeatsList["resilient [dexterity]"] = {
	name : "Resilient [Dexterity]",
	source : ["P", 168],
	description : "I gain proficiency with Dexterity saving throws. [+1 Dexterity]",
	improvements : "Resilient (feat): +1 Dexterity;",
	scores : [0, 1, 0, 0, 0, 0],
	saves : ["Dex"]
};
FeatsList["resilient [constitution]"] = {
	name : "Resilient [Constitution]",
	source : ["P", 168],
	description : "I gain proficiency with Constitution saving throws. [+1 Constitution]",
	improvements : "Resilient (feat): +1 Constitution;",
	scores : [0, 0, 1, 0, 0, 0],
	saves : ["Con"]
};
FeatsList["resilient [intelligence]"] = {
	name : "Resilient [Intelligence]",
	source : ["P", 168],
	description : "I gain proficiency with Intelligence saving throws. [+1 Intelligence]",
	improvements : "Resilient (feat): +1 Intelligence;",
	scores : [0, 0, 0, 1, 0, 0],
	saves : ["Int"]
};
FeatsList["resilient [wisdom]"] = {
	name : "Resilient [Wisdom]",
	source : ["P", 168],
	description : "I gain proficiency with Wisdom saving throws. [+1 Wisdom]",
	improvements : "Resilient (feat): +1 Wisdom;",
	scores : [0, 0, 0, 0, 1, 0],
	saves : ["Wis"]
};
FeatsList["resilient [charisma]"] = {
	name : "Resilient [Charisma]",
	source : ["P", 168],
	description : "I gain proficiency with Charisma saving throws. [+1 Charisma]",
	improvements : "Resilient (feat): +1 Charisma;",
	scores : [0, 0, 0, 0, 0, 1],
	saves : ["Cha"]
};
FeatsList["ritual caster [bard]"] = {
	name : "Ritual Caster [Bard]",
	source : ["P", 169],
	description : "I can cast spells in my ritual book as rituals only. I gain two 1st-level ritual bard spells.\nI can copy ritual bard spells that I find into my book if they are not more than half my level (2 hours and 50 gp per spell level). Charisma is my spellcasting ability for these.",
	prerequisite : "Intelligence or Wisdom 13 or higher",
	prereqeval : "What('Int') >= 13 || What('Wis') >= 13",
	eval : "CurrentSpells['ritual caster bard'] = {name : 'Ritual Book [Bard]', ability : 6, list : {class : 'bard', ritual : true}, known : {spells : 'book'}}; SetStringifieds('spells');",
	removeeval : "delete CurrentSpells['ritual caster bard']; SetStringifieds('spells');"
};
FeatsList["ritual caster [cleric]"] = {
	name : "Ritual Caster [Cleric]",
	source : ["P", 169],
	description : "I can cast spells in my ritual book as rituals only. I gain two 1st-level ritual cleric spells.\nI can copy ritual cleric spells that I find into my book if they are not more than half my level (2 hours and 50 gp per spell level). Wisdom is my spellcasting ability for these.",
	prerequisite : "Intelligence or Wisdom 13 or higher",
	prereqeval : "What('Int') >= 13 || What('Wis') >= 13",
	eval : "CurrentSpells['ritual caster cleric'] = {name : 'Ritual Book [Cleric]', ability : 5, list : {class : 'cleric', ritual : true}, known : {spells : 'book'}}; SetStringifieds('spells');",
	removeeval : "delete CurrentSpells['ritual caster cleric']; SetStringifieds('spells');"
};
FeatsList["ritual caster [druid]"] = {
	name : "Ritual Caster [Druid]",
	source : ["P", 169],
	description : "I can cast spells in my ritual book as rituals only. I gain two 1st-level ritual druid spells.\nI can copy ritual druid spells that I find into my book if they are not more than half my level (2 hours and 50 gp per spell level). Wisdom is my spellcasting ability for these.",
	prerequisite : "Intelligence or Wisdom 13 or higher",
	prereqeval : "What('Int') >= 13 || What('Wis') >= 13",
	eval : "CurrentSpells['ritual caster druid'] = {name : 'Ritual Book [Druid]', ability : 5, list : {class : 'druid', ritual : true}, known : {spells : 'book'}}; SetStringifieds('spells');",
	removeeval : "delete CurrentSpells['ritual caster druid']; SetStringifieds('spells');"
};
FeatsList["ritual caster [sorcerer]"] = {
	name : "Ritual Caster [Sorcerer]",
	source : ["P", 169],
	description : "I can cast spells in my ritual book as rituals only. I gain two 1st-level ritual sorcerer spells.\nI can copy ritual sorcerer spells that I find into my book if they are not more than half my level (2 hours and 50 gp per spell level). Charisma is my spellcasting ability for these.",
	prerequisite : "Intelligence or Wisdom 13 or higher",
	prereqeval : "What('Int') >= 13 || What('Wis') >= 13",
	eval : "CurrentSpells['ritual caster sorcerer'] = {name : 'Ritual Book [Sorcerer]', ability : 6, list : {class : 'sorcerer', ritual : true}, known : {spells : 'book'}}; SetStringifieds('spells');",
	removeeval : "delete CurrentSpells['ritual caster sorcerer']; SetStringifieds('spells');"
};
FeatsList["ritual caster [warlock]"] = {
	name : "Ritual Caster [Warlock]",
	source : ["P", 169],
	description : "I can cast spells in my ritual book as rituals only. I gain two 1st-level ritual warlock spells.\nI can copy ritual warlock spells that I find into my book if they are not more than half my level (2 hours and 50 gp per spell level). Charisma is my spellcasting ability for these.",
	prerequisite : "Intelligence or Wisdom 13 or higher",
	prereqeval : "What('Int') >= 13 || What('Wis') >= 13",
	eval : "CurrentSpells['ritual caster warlock'] = {name : 'Ritual Book [Warlock]', ability : 6, list : {class : 'warlock', ritual : true}, known : {spells : 'book'}}; SetStringifieds('spells');",
	removeeval : "delete CurrentSpells['ritual caster warlock']; SetStringifieds('spells');"
};
FeatsList["ritual caster [wizard]"] = {
	name : "Ritual Caster [Wizard]",
	source : ["P", 169],
	description : "I can cast spells in my ritual book as rituals only. I gain two 1st-level ritual wizard spells.\nI can copy ritual wizard spells that I find into my book if they are not more than half my level (2 hours and 50 gp per spell level). Intelligence is my spellcasting ability for these.",
	prerequisite : "Intelligence or Wisdom 13 or higher",
	prereqeval : "What('Int') >= 13 || What('Wis') >= 13",
	eval : "CurrentSpells['ritual caster wizard'] = {name : 'Ritual Book [Wizard]', ability : 4, list : {class : 'wizard', ritual : true}, known : {spells : 'book'}}; SetStringifieds('spells');",
	removeeval : "delete CurrentSpells['ritual caster wizard']; SetStringifieds('spells');"
};
FeatsList["savage attacker"] = {
	name : "Savage Attacker",
	source : ["P", 169],
	description : "Once per turn, when I roll damage for a melee weapon attack, I can reroll the weapon's damage dice and use either total."
};
FeatsList["sentinel"] = {
	name : "Sentinel",
	source : ["P", 169],
	description : "Creatures I hit with opportunity attacks have 0 speed for this turn. The Disengage action doesn't work on me. When a creature within 5 ft makes an attack against a target other than me, I can use my reaction to make a melee weapon attack against the attacker.",
	action : ["reaction", " (after attack on ally)"]
};
FeatsList["sharpshooter"] = {
	name : "Sharpshooter",
	source : ["P", 170],
	description : "My ranged weapon attacks don't have disadvantage on long range and ignore half cover and three-quarters cover. With a ranged weapon that I am proficient with, I can choose to take a -5 penalty on the attack roll for +10 on the attack's damage.",
	calcChanges : {
		atkCalc : ["if (isRangedWeapon && (/power.{0,3}attack|sharp.{0,3}shoo?t/i).test(WeaponText)) {output.extraDmg += 10; output.extraHit -= 5;};", "If I include the words 'Power Attack', 'Sharpshooter', or 'Sharpshot' in a ranged weapon's name or description, the calculation will put a -5 penalty on the attack's To Hit and +10 on its Damage."]
	}
};
FeatsList["shield master"] = {
	name : "Shield Master",
	source : ["P", 170],
	description : "As a bonus action, when I use the Attack action, I can shove someone within 5 ft with my shield. I add my shield's AC bonus to Dex saves vs. effects targeting only me. As a reaction, if I succeed on a Dex save for half damage, I can interpose my shield to avoid the damage.",
	eval : "AddAction('bonus action', 'Shove with shield (with Attack action)', 'the Shield Master feat'); AddAction('reaction', 'Interpose shield (if Dex save half dmg)', 'the Shield Master feat');",
	removeeval : "RemoveAction('bonus action', 'Shove with shield (with Attack action)'); RemoveAction('reaction', 'Interpose shield (if Dex save half dmg)');"
};
FeatsList["skilled"] = {
	name : "Skilled",
	source : ["P", 170],
	description : "I gain proficiency with any combination of three skills or tools of my choice.",
	skills : "\n\n" + toUni("Skilled (feat)") + ": Choose three skills or tools."
};
FeatsList["skulker"] = {
	name : "Skulker",
	source : ["P", 170],
	description : "I can try to hide when I am lightly obscured. My position is not revealed when I am hidden from a creature and miss it with a ranged weapon attack. Dim light doesn't impose disadvantage on my Wisdom (Perception) checks relying on sight.",
	prerequisite : "Dexterity 13 or higher",
	prereqeval : "What('Dex') >= 13",
	vision : [["No disadv. on Perception in dim light", 0]]
};
FeatsList["spell sniper [bard]"] = {
	name : "Spell Sniper [Bard]",
	source : ["P", 170],
	description : "Any spell that I cast that has a ranged attack roll has its range doubled and ignores half cover and three-quarters cover. I learn one bard cantrip that requires an attack roll. Charisma is my spellcasting ability for this.",
	prerequisite : "The ability to cast at least one spell",
	prereqeval : "CurrentSpells.toSource() !== '({})'",
	eval : "CurrentSpells['spell sniper bard'] = {name : 'Spell Sniper [Bard]', ability : 6, list : {class : 'bard', attackOnly : 'true'}, known : {cantrips : 1}}; SetStringifieds('spells');",
	removeeval : "delete CurrentSpells['spell sniper bard']; SetStringifieds('spells');",
	calcChanges : {
		atkAdd : ["if (!spellSniper && !isDC && isSpell && (/^(?!.*melee).*\\d+(\\.\\d+|,\\d+)? ?(f.{0,2}t|m).*$/i).test(fields.Range)) { var spellSniper = true; var rangeNmbr = fields.Range.match(/\\d+(\\.\\d+|,\\d+)?/g); var notNmbrs = fields.Range.split(RegExp(rangeNmbr.join('|'))); fields.Range = ''; rangeNmbr.forEach(function (dR, idx) { fields.Range += (notNmbrs[idx] ? notNmbrs[idx] : '') + (parseFloat(dR.toString().replace(',', '.') * 2)); }); if (notNmbrs.length > rangeNmbr.length) { fields.Range += notNmbrs[notNmbrs.length - 1]; }; }; ", "My spells and cantrips that require a ranged attack roll, have their range doubled."]
	}
};
FeatsList["spell sniper [cleric]"] = {
	name : "Spell Sniper [Cleric]",
	source : ["P", 170],
	description : "Any spell that I cast that has a ranged attack roll has its range doubled and ignores half cover and three-quarters cover. I learn one cleric cantrip that requires an attack roll. Wisdom is my spellcasting ability for this.",
	prerequisite : "The ability to cast at least one spell",
	prereqeval : "CurrentSpells.toSource() !== '({})'",
	eval : "CurrentSpells['spell sniper cleric'] = {name : 'Spell Sniper [Cleric]', ability : 5, list : {class : 'cleric', attackOnly : 'true'}, known : {cantrips : 1}}; SetStringifieds('spells');",
	removeeval : "delete CurrentSpells['spell sniper cleric']; SetStringifieds('spells');",
	calcChanges : {
		atkAdd : ["if (!spellSniper && !isDC && isSpell && (/^(?!.*melee).*\\d+(\\.\\d+|,\\d+)? ?(f.{0,2}t|m).*$/i).test(fields.Range)) { var spellSniper = true; var rangeNmbr = fields.Range.match(/\\d+(\\.\\d+|,\\d+)?/g); var notNmbrs = fields.Range.split(RegExp(rangeNmbr.join('|'))); fields.Range = ''; rangeNmbr.forEach(function (dR, idx) { fields.Range += (notNmbrs[idx] ? notNmbrs[idx] : '') + (parseFloat(dR.toString().replace(',', '.') * 2)); }); if (notNmbrs.length > rangeNmbr.length) { fields.Range += notNmbrs[notNmbrs.length - 1]; }; }; ", "My spells and cantrips that require a ranged attack roll, have their range doubled."]
	}
};
FeatsList["spell sniper [druid]"] = {
	name : "Spell Sniper [Druid]",
	source : ["P", 170],
	description : "Any spell that I cast that has a ranged attack roll has its range doubled and ignores half cover and three-quarters cover. I learn one druid cantrip that requires an attack roll. Wisdom is my spellcasting ability for this.",
	prerequisite : "The ability to cast at least one spell",
	prereqeval : "CurrentSpells.toSource() !== '({})'",
	eval : "CurrentSpells['spell sniper druid'] = {name : 'Spell Sniper [Druid]', ability : 5, list : {class : 'druid', attackOnly : 'true'}, known : {cantrips : 1}}; SetStringifieds('spells');",
	removeeval : "delete CurrentSpells['spell sniper druid']; SetStringifieds('spells');",
	calcChanges : {
		atkAdd : ["if (!spellSniper && !isDC && isSpell && (/^(?!.*melee).*\\d+(\\.\\d+|,\\d+)? ?(f.{0,2}t|m).*$/i).test(fields.Range)) { var spellSniper = true; var rangeNmbr = fields.Range.match(/\\d+(\\.\\d+|,\\d+)?/g); var notNmbrs = fields.Range.split(RegExp(rangeNmbr.join('|'))); fields.Range = ''; rangeNmbr.forEach(function (dR, idx) { fields.Range += (notNmbrs[idx] ? notNmbrs[idx] : '') + (parseFloat(dR.toString().replace(',', '.') * 2)); }); if (notNmbrs.length > rangeNmbr.length) { fields.Range += notNmbrs[notNmbrs.length - 1]; }; }; ", "My spells and cantrips that require a ranged attack roll, have their range doubled."]
	}
};
FeatsList["spell sniper [sorcerer]"] = {
	name : "Spell Sniper [Sorcerer]",
	source : ["P", 170],
	description : "Any spell that I cast that has a ranged attack roll has its range doubled and ignores half cover and three-quarters cover. I learn one sorcerer cantrip that requires an attack roll. Charisma is my spellcasting ability for this.",
	prerequisite : "The ability to cast at least one spell",
	prereqeval : "CurrentSpells.toSource() !== '({})'",
	eval : "CurrentSpells['spell sniper sorcerer'] = {name : 'Spell Sniper [Sorcerer]', ability : 6, list : {class : 'sorcerer', attackOnly : 'true'}, known : {cantrips : 1}}; SetStringifieds('spells');",
	removeeval : "delete CurrentSpells['spell sniper sorcerer']; SetStringifieds('spells');",
	calcChanges : {
		atkAdd : ["if (!spellSniper && !isDC && isSpell && (/^(?!.*melee).*\\d+(\\.\\d+|,\\d+)? ?(f.{0,2}t|m).*$/i).test(fields.Range)) { var spellSniper = true; var rangeNmbr = fields.Range.match(/\\d+(\\.\\d+|,\\d+)?/g); var notNmbrs = fields.Range.split(RegExp(rangeNmbr.join('|'))); fields.Range = ''; rangeNmbr.forEach(function (dR, idx) { fields.Range += (notNmbrs[idx] ? notNmbrs[idx] : '') + (parseFloat(dR.toString().replace(',', '.') * 2)); }); if (notNmbrs.length > rangeNmbr.length) { fields.Range += notNmbrs[notNmbrs.length - 1]; }; }; ", "My spells and cantrips that require a ranged attack roll, have their range doubled."]
	}
};
FeatsList["spell sniper [warlock]"] = {
	name : "Spell Sniper [Warlock]",
	source : ["P", 170],
	description : "Any spell that I cast that has a ranged attack roll has its range doubled and ignores half cover and three-quarters cover. I learn one warlock cantrip that requires an attack roll. Charisma is my spellcasting ability for this.",
	prerequisite : "The ability to cast at least one spell",
	prereqeval : "CurrentSpells.toSource() !== '({})'",
	eval : "CurrentSpells['spell sniper warlock'] = {name : 'Spell Sniper [Warlock]', ability : 6, list : {class : 'warlock', attackOnly : 'true'}, known : {cantrips : 1}}; SetStringifieds('spells');",
	removeeval : "delete CurrentSpells['spell sniper warlock']; SetStringifieds('spells');",
	calcChanges : {
		atkAdd : ["if (!spellSniper && !isDC && isSpell && (/^(?!.*melee).*\\d+(\\.\\d+|,\\d+)? ?(f.{0,2}t|m).*$/i).test(fields.Range)) { var spellSniper = true; var rangeNmbr = fields.Range.match(/\\d+(\\.\\d+|,\\d+)?/g); var notNmbrs = fields.Range.split(RegExp(rangeNmbr.join('|'))); fields.Range = ''; rangeNmbr.forEach(function (dR, idx) { fields.Range += (notNmbrs[idx] ? notNmbrs[idx] : '') + (parseFloat(dR.toString().replace(',', '.') * 2)); }); if (notNmbrs.length > rangeNmbr.length) { fields.Range += notNmbrs[notNmbrs.length - 1]; }; }; ", "My spells and cantrips that require a ranged attack roll, have their range doubled."]
	}
};
FeatsList["spell sniper [wizard]"] = {
	name : "Spell Sniper [Wizard]",
	source : ["P", 170],
	description : "Any spell that I cast that has a ranged attack roll has its range doubled and ignores half cover and three-quarters cover. I learn one wizard cantrip that requires an attack roll. Intelligence is my spellcasting ability for this.",
	prerequisite : "The ability to cast at least one spell",
	prereqeval : "CurrentSpells.toSource() !== '({})'",
	eval : "CurrentSpells['spell sniper wizard'] = {name : 'Spell Sniper [Wizard]', ability : 4, list : {class : 'wizard', attackOnly : 'true'}, known : {cantrips : 1}}; SetStringifieds('spells');",
	removeeval : "delete CurrentSpells['spell sniper wizard']; SetStringifieds('spells');",
	calcChanges : {
		atkAdd : ["if (!spellSniper && !isDC && isSpell && (/^(?!.*melee).*\\d+(\\.\\d+|,\\d+)? ?(f.{0,2}t|m).*$/i).test(fields.Range)) { var spellSniper = true; var rangeNmbr = fields.Range.match(/\\d+(\\.\\d+|,\\d+)?/g); var notNmbrs = fields.Range.split(RegExp(rangeNmbr.join('|'))); fields.Range = ''; rangeNmbr.forEach(function (dR, idx) { fields.Range += (notNmbrs[idx] ? notNmbrs[idx] : '') + (parseFloat(dR.toString().replace(',', '.') * 2)); }); if (notNmbrs.length > rangeNmbr.length) { fields.Range += notNmbrs[notNmbrs.length - 1]; }; }; ", "My spells and cantrips that require a ranged attack roll, have their range doubled."]
	}
};
FeatsList["tavern brawler"] = {
	name : "Tavern Brawler",
	source : ["P", 170],
	description : "I am proficient with improvised weapons. My unarmed strike does 1d4 damage. When I hit a creature with an unarmed strike or improvised weapon on my turn, I can attempt to grapple the target as a bonus action. [+1 Strength or Constitution]",
	improvements : "Tavern Brawler (feat): +1 Strength or Constitution;",
	eval : "AddAction('bonus action', 'Grapple (on hit with unarmed/improv.)', 'the Tavern Brawler feat');",
	removeeval : "RemoveAction('bonus action', 'Grapple (on hit with unarmed/improv.)');",
	weapons : [false, false, ["Improvised weapons"]],
	calcChanges : {
		atkAdd : ["if (isMeleeWeapon && ((/unarmed strike/i).test(WeaponName) || (/improvised/i).test(WeaponName) || (/improvised weapon/i).test(theWea.type))) {fields.Description += (fields.Description ? '; ' : '') + 'After hitting, can attempt to grapple as a bonus action'; fields.Proficiency = true; }; if ((/unarmed strike/i).test(WeaponName) && fields.Damage_Die == 1) {fields.Damage_Die = '1d4'; }; ", "My unarmed strikes do 1d4 damage instead of 1;\n - After hitting a creature with an unarmed strike or improvised weapon in melee, I can attempt to start a grapple as a bonus action."]
	}
};
FeatsList["tough"] = {
	name : "Tough",
	source : ["P", 170],
	description : "My hit point maximum increases by an amount equal to twice my character level.",
	calcChanges : {
		hp : "extrahp += totalhd * 2; extrastring += '\\n + ' + totalhd + ' \\u00D7 2 from the Tough feat (' + (totalhd * 2) + ')';"
	}
};
FeatsList["war caster"] = {
	name : "War Caster",
	source : ["P", 170],
	prerequisite : "The ability to cast at least one spell",
	prereqeval : "CurrentSpells.toSource() !== '({})'",
	description : "Advantage on Con saves to maintain concentration on spells when damaged. Perform somatic components even when holding weapons or shield in one or both hands. Cast spell of 1 action casting time that targets only one creature instead of an opportunity attack.",
	action : ["reaction", " - Opportunity Spell"],
	savetxt : { text : "Adv. on Con (Concentration) saves when damaged" }
};
FeatsList["weapon master"] = {
	name : "Weapon Master",
	source : ["P", 170],
	description : "I gain proficiency with four simple or martial weapons of my choice.\n[+1 Strength or Dexterity]",
	improvements : "Weapon Master (feat): +1 Strength or Dexterity;"
};

// Add equipment that is not in the SRD
WeaponsList["polearm butt end"] = {
	regExpSearch : /^(?=.*(polearm|(glaive|guandao|bisento|naginata)|(halberd|\bji\b|kamayari)|(quarterstaff|\bstaff\b|\bbo\b)|(spear|qiang|\byaris?\b)))(?=.*butt)(?=.*end).*$/i,
	name : "Polearm butt end",
	source : ["P", 168],
	ability : 1,
	type : "Other",
	damage : [1, 4, "bludgeoning"],
	range : "Melee",
	description : "As bonus action after Attack action with only a glaive, halberd, spear, or quarterstaff",
	abilitytodamage : true
};
WeaponsList["thorn whip"] = {
	regExpSearch : /^(?=.*thorn)(?=.*whip).*$/i,
	name : "Thorn Whip",
	source : ["P", 282],
	list : "spell",
	ability : 5,
	type : "Cantrip",
	damage : ["C", 6, "piercing"],
	range : "Melee, 30 ft",
	description : "Melee spell attack, pull target 10 ft closer to me (PHB 282)",
	abilitytodamage : false
};

// Add spells that are not in the SRD
SpellsList["arcane gate"] = {
	name : "Arcane Gate",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["P", 214],
	level : 6,
	school : "Conj",
	time : "1 a",
	range : "500 ft",
	components : "V,S",
	duration : "Conc, 10 min",
	description : "Two portals, up to 500 ft apart, teleport any to other side; portals are filled with opaque mist",
	descriptionFull : "You create linked teleportation portals that remain open for the duration. Choose two points on the ground that you can see, one point within 10 feet of you and one point within 500 feet of you. A circular portal, 10 feet in diameter, opens over each point. If the portal would open in the space occupied by a creature, the spell fails, and the casting is lost." + "\n   " + "The portals are two-dimensional glowing rings filled with mist, hovering inches from the ground and perpendicular to it at the points you choose. A ring is visible only from one side (your choice), which is the side that functions as a portal." + "\n   " + "Any creature or object entering the portal exits from the other portal as if the two were adjacent to each other, passing through a portal from the non-portal side has no effect. The mist that fills each portal is opaque and blocks vision through it. On your turn, you can rotate the rings as a bonus action so that the active side faces in a different direction."
};
SpellsList["armor of agathys"] = {
	name : "Armor of Agathys",
	classes : ["warlock"],
	source : ["P", 215],
	level : 1,
	school : "Abjur",
	time : "1 a",
	range : "Self",
	components : "V,S,M",
	compMaterial : "A cup of water",
	duration : "1 h",
	description : "5+5/SL temp hp; as long as temp hp last any crea that hits in melee takes 5+5/SL Cold dmg",
	descriptionFull : "A protective magical force surrounds you, manifesting as a spectral frost that covers you and your gear. You gain 5 temporary hit points for the duration. If a creature hits you with a melee attack while you have these hit points, the creature takes 5 cold damage." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, both the temporary hit points and the cold damage increase by 5 for each slot level above 1st."
};
SpellsList["arms of hadar"] = {
	name : "Arms of Hadar",
	classes : ["warlock"],
	source : ["P", 215],
	level : 1,
	school : "Conj",
	time : "1 a",
	range : "10-ft rad",
	components : "V,S",
	duration : "Instantaneous",
	save : "Str",
	description : "2d6+1d6/SL Necrotic dmg; save halves; on failed save no reactions until next turn",
	descriptionFull : "You invoke the power of Hadar, the Dark Hunger. Tendrils of dark energy erupt from you and batter all creatures within 10 feet of you. Each creature in that area must make a Strength saving throw. On a failed save, a target takes 2d6 necrotic damage and can't take reactions until its next turn. On a successful save, the creature takes half damage, but suffers no other effect." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
};
SpellsList["aura of life"] = {
	name : "Aura of Life",
	classes : ["paladin"],
	source : ["P", 216],
	level : 4,
	school : "Abjur",
	time : "1 a",
	range : "30-ft rad",
	components : "V",
	duration : "Conc, 10 min",
	description : "You + any crea while in area Necrotic dmg resist.; heals all living crea at 0 hp at start of turn to 1 hp",
	descriptionFull : "Life-preserving energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. Each non-hostile creature in the aura (including you) has resistance to necrotic damage, and its hit point maximum can't be reduced. In addition, a non-hostile, living creature regains 1 hit point when it starts its turn in the aura with 0 hit points."
};
SpellsList["aura of purity"] = {
	name : "Aura of Purity",
	classes : ["paladin"],
	source : ["P", 216],
	level : 4,
	school : "Abjur",
	time : "1 a",
	range : "30-ft rad",
	components : "V",
	duration : "Conc, 10 min",
	description : "You + any crea while in area Poison dmg resist., immune to disease, adv. on saves vs. conditions",
	descriptionFull : "Purifying energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. Each non-hostile creature in the aura (including you) can't become diseased, has resistance to poison damage, and has advantage on saving throws against effects that cause any of the following conditions - blinded, charmed, deafened, frightened, paralyzed, poisoned, and stunned."
};
SpellsList["aura of vitality"] = {
	name : "Aura of Vitality",
	classes : ["paladin"],
	source : ["P", 216],
	level : 3,
	school : "Evoc",
	time : "1 a",
	range : "30-ft rad",
	components : "V",
	duration : "Conc, 1 min",
	description : "You can heal 1 creature in range for 2d6 hp as a bonus action for the duration",
	descriptionFull : "Healing energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. You can use a bonus action to cause one creature in the aura (including you) to regain 2d6 hit points."
};
SpellsList["banishing smite"] = {
	name : "Banishing Smite",
	classes : ["paladin"],
	source : ["P", 216],
	level : 5,
	school : "Abjur",
	time : "1 bns",
	range : "Self",
	components : "V",
	duration : "Conc, 1 min",
	description : "Next melee hit +5d10 Force dmg; if this brings target hp<50, you banish it until spell ends",
	descriptionFull : "The next time you hit a creature with a weapon attack before this spell ends, your weapon crackles with force, and the attack deals an extra 5d10 force damage to the target. Additionally, if this attack reduces the target to 50 hit points of fewer, you banish it. If the target is native to a different plane of existence than the one you're on, the target disappears, returning to its home plane. If the target is native to the plane you're on, the creature vanishes into a harmless demiplane. While there, the target is incapacitated. It remains there until the spell ends, at which point the tart reappears in the space it left or in the nearest unoccupied space if that space is occupied."
};
SpellsList["beast sense"] = {
	name : "Beast Sense",
	classes : ["druid", "ranger"],
	source : ["P", 217],
	ritual : true,
	level : 2,
	school : "Div",
	time : "1 a",
	range : "Touch",
	components : "S",
	duration : "Conc, 1 h",
	description : "Use 1 willing beast's senses; you are blinded and deafened while doing so",
	descriptionFull : "You touch a willing beast. For the duration of the spell, you can use your action to see through the beast's eyes and hear what it hears, and continue to do so until you use your action to return to your normal senses."
};
SpellsList["blade ward"] = {
	name : "Blade Ward",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : ["P", 218],
	level : 0,
	school : "Abjur",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "1 rnd",
	description : "Until the end of your next turn, Bludgeoning, Piercing, and Slashing dmg resist. vs. weapons",
	descriptionFull : "You extend your hand and trace a sigil of warding in the air. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks."
};
SpellsList["blinding smite"] = {
	name : "Blinding Smite",
	classes : ["paladin"],
	source : ["P", 219],
	level : 3,
	school : "Evoc",
	time : "1 bns",
	range : "Self",
	components : "V",
	duration : "Conc, 1 min",
	save : "Con",
	description : "Next melee hit +3d8 Radiant dmg; save or blinded; extra save at end of every turn",
	descriptionFull : "The next time you hit a creature with a melee weapon attack during this spell's duration, you weapon flares with a bright light, and the attack deals an extra 3d8 radiant damage to the target. Additionally, the target must succeed on a Constitution saving throw or be blinded until the spell ends." + "\n   " + "A creature blinded by this spell makes another Constitution saving throw at the end of each of its turns. On a successful save, it is no longer blinded."
};
SpellsList["chromatic orb"] = {
	name : "Chromatic Orb",
	classes : ["sorcerer", "wizard"],
	source : ["P", 221],
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "90 ft",
	components : "V,S,M\u0192",
	compMaterial : "A diamond worth at least 50 gp",
	duration : "Instantaneous",
	description : "Spell attack for 3d8+1d8/SL Acid, Cold, Fire, Lightning, Poison or Thunder dmg (50gp)",
	descriptionFull : "You hurl a 4-inch-diameter sphere of energy at a creature that you can see within range. You choose acid, cold, fire, lightning, poison, or thunder for the type of orb you create, and then make a ranged spell attack against the target. If the attack hits, the creature takes 3d8 damage of the type you chose." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
};
SpellsList["circle of power"] = {
	name : "Circle of Power",
	classes : ["paladin"],
	source : ["P", 221],
	level : 5,
	school : "Abjur",
	time : "1 a",
	range : "30-ft rad",
	components : "V",
	duration : "Conc, 10 min",
	description : "Any crea while in area adv. on saves vs. magical effects; if save would half dmg it takes no dmg",
	descriptionFull : "Divine energy radiates from you, distorting and diffusing magical energy within 30 feet of you. Until the spell ends, the sphere moves with you, centered on you. For the duration, each friendly creature in the area (including you) has advantage on saving throws against spells and other magical effects. Additionally, when an affected creature succeeds on a saving throw made against a spell or magical effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw."
};
SpellsList["cloud of daggers"] = {
	name : "Cloud of Daggers",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : ["P", 222],
	level : 2,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "A sliver of glass",
	duration : "Conc, 1 min",
	description : "5-ft cube 4d4+2d4/SL Slashing dmg to all that enter or start turn in area",
	descriptionFull : "You fill the air with spinning daggers in a cube 5 feet on each side, centered on a point you choose within range. A creature takes 4d4 slashing damage when it enters the spell's area for the first time on a turn or starts its turn there." + AtHigherLevels + "when you cast this spell using a spell slot of 3rd level or higher, the damage increases by 2d4 for each slot level above 2nd."
};
SpellsList["compelled duel"] = {
	name : "Compelled Duel",
	classes : ["paladin"],
	source : ["P", 224],
	level : 1,
	school : "Ench",
	time : "1 bns",
	range : "30 ft",
	components : "V",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "1 crea save or dis. on attacks vs. not-you and save if moving more than 30 ft away",
	descriptionFull : "You attempt to compel a creature into a duel. One creature that you can see within range must make a Wisdom saving throw. On a failed save, the creature is drawn to you, compelled by your divine demand. For the duration, it has disadvantage on attack rolls against creatures other than you, and must make a Wisdom saving throw each time it attempts to move to a space that is more than 30 feet away from you, if it succeeds on this saving throw, this spell doesn't restrict the target's movement for that turn." + "\n   " + "The spell ends if you attack any other creature, if you cast a spell that targets a hostile creature other than the target, if a creature friendly to you damages the target or casts a harmful spell on it, or if you end your turn more than 30 feet away from the target."
};
SpellsList["conjure barrage"] = {
	name : "Conjure Barrage",
	classes : ["ranger"],
	source : ["P", 225],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "60-ft cone",
	components : "V,S,M",
	compMaterial : "One piece of ammunition or a thrown weapon",
	duration : "Instantaneous",
	save : "Dex",
	description : "Throw weapon or ammo; copies rain down for 3d8 dmg; dmg type as weapon; save halves",
	descriptionFull : "You throw a nonmagical weapon or fire a piece of nonmagical ammunition into the air to create a cone of identical weapons that shoot forward and then disappear. Each creature in a 60-foot cone must succeed on a Dexterity saving throw. A creature takes 3d8 damage on a failed save, or half as much damage on a successful one. The damage type is the same as that of the weapon or ammunition used as a component."
};
SpellsList["conjure volley"] = {
	name : "Conjure Volley",
	classes : ["ranger"],
	source : ["P", 226],
	level : 5,
	school : "Conj",
	time : "1 a",
	range : "150 ft",
	components : "V,S,M",
	compMaterial : "One piece of ammunition or one thrown weapon",
	duration : "Instantaneous",
	save : "Dex",
	description : "Turn ammo/thrown wea into volley; 40-ft rad 20-ft high 8d8 dmg; dmg type as weapon; save halves",
	descriptionFull : "You fire a piece of nonmagical ammunition from a ranged weapon or throw a nonmagical weapon into the air and choose a point within range. Hundreds of duplicates of the ammunition or weapon fall in a volley from above and then disappear. Each creature in a 40-foot-radius. 20-foot-high cylinder centered on that point must make a Dexterity saving throw. A creature takes 8d8 damage on a failed save, or half as much damage on a successful one. The damage type is the same as that of the ammunition or weapon."
};
SpellsList["cordon of arrows"] = {
	name : "Cordon of Arrows",
	classes : ["ranger"],
	source : ["P", 228],
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "5 ft",
	components : "V,S,M",
	compMaterial : "Four or more arrows or bolts",
	duration : "8 h",
	save : "Dex",
	description : "4+2/SL arrows/bolts attack first crea in 30 ft one at a time for 1d6 Piercing dmg; save halves",
	descriptionFull : "You plant four pieces of nonmagical ammunition - arrows or crossbow bolts - in the ground within range and lay magic upon them to protect an area. Until the spell ends, whenever a creature other than you comes within 30 feet of the ammunition for the first time on a turn or ends its turn there, one piece of ammunition flies up to strike it. The creature must succeed on a Dexterity saving throw or take 1d6 piercing damage. The piece of ammunition is then destroyed. The spell ends when no ammunition remains." + "\n   " + "When you cast this spell, you can designate any creatures you choose, and the spell ignores them." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the amount of ammunition that can be affected increases by two for each slot level above 2nd."
};
SpellsList["crown of madness"] = {
	name : "Crown of Madness",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : ["P", 229],
	level : 2,
	school : "Ench",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "1 humanoid save or charmed and must melee attack against crea chosen by you; extra save/rnd",
	descriptionFull : "One humanoid of your choice that you can see within range must succeed on a Wisdom saving throw or become charmed by you for the duration. While the target is charmed in this way, a twisted crown of jagged iron appears on its head, and a madness glows in its eyes." + "\n   " + "The charmed target must use its action before moving on each of its turns to make a melee attack against a creature other than itself that you mentally choose. The target can act normally on its turn if you choose no creature or if none are within its reach." + "\n   " + "On your subsequent turns, you must use your action to maintain control over the target, or the spell ends. Also, the target can make a Wisdom saving throw at the end of each of its turns. On a success, the spell ends."
};
SpellsList["crusader's mantle"] = {
	name : "Crusader's Mantle",
	classes : ["paladin"],
	source : ["P", 230],
	level : 3,
	school : "Evoc",
	time : "1 a",
	range : "30-ft rad",
	components : "V",
	duration : "Conc, 1 min",
	description : "You and allies in range deal extra 1d4 Radiant dmg with weapon attacks",
	descriptionFull : "Holy power radiates from you in an aura with a 30-foot radius, awakening boldness in friendly creatures. Until the spell ends, the aura moves with you, centered on you. While in the aura, each non-hostile creature in the aura (including you) deals an extra 1d4 radiant damage when it hits with a weapon attack."
};
SpellsList["destructive wave"] = {
	name : "Destructive Wave",
	classes : ["paladin"],
	source : ["P", 231],
	level : 5,
	school : "Evoc",
	time : "1 a",
	range : "30-ft rad",
	components : "V",
	duration : "Instantaneous",
	save : "Con",
	description : "Any crea 5d6 Thunder + 5d6 Radiant/Necrotic dmg and knocked prone; save halves not prone",
	descriptionFull : "You strike the ground, creating a burst of divine energy that ripples outward from you. Each creature you choose within 30 feet of you must succeed on a Constitution saving throw or take 5d6 thunder damage, as well as 5d6 radiant or necrotic damage (your choice), and be knocked prone. A creature that succeeds on its saving throw takes half as much damage and isn't knocked prone."
};
SpellsList["dissonant whispers"] = {
	name : "Dissonant Whispers",
	classes : ["bard"],
	source : ["P", 234],
	level : 1,
	school : "Ench",
	time : "1 a",
	range : "60 ft",
	components : "V",
	duration : "Instantaneous",
	save : "Wis",
	description : "1 crea 3d6+1d6/SL Psychic dmg and flee; save halves and no fleeing; deaf crea are immune",
	descriptionFull : "You whisper a discordant melody that only one creature of your choice within range can hear, wracking it with terrible pain. The target must make a Wisdom saving throw. On a failed save, it takes 3d6 psychic damage and must immediately use its reaction, if available, to move as far as its speed allows away from you. The creature doesn't move into obviously dangerous ground, such as a fire or a pit. On a successful save, the target takes half as much damage and doesn't have to move away. A deafened creature automatically succeeds on the save." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
};
SpellsList["elemental weapon"] = {
	name : "Elemental Weapon",
	classes : ["paladin"],
	source : ["P", 237],
	level : 3,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Conc, 1 h",
	description : "+1 magical weapon; +1d4 Acid, Cold, Fire, Lightning, or Thunder dmg; SL5: +2/+2d4, SL7: +3/+3d4",
	descriptionFull : "A nonmagical weapon you touch becomes a magic weapon. Choose one of the following damage types - acid, cold, fire, lightning, or thunder. For the duration, the weapon has a +1 bonus to attack rolls and deals an extra 1d4 damage of the chosen type when it hits." + AtHigherLevels + "When you cast this spell using a spell slot of 5th or 6th level, the bonus to attack rolls increases to +2 and the extra damage increases to 2d4. When you use a spell slot of 7th level or higher, the bonus increases to +3 and the extra damage increases to 3d4."
};
SpellsList["ensnaring strike"] = {
	name : "Ensnaring Strike",
	classes : ["ranger"],
	source : ["P", 237],
	level : 1,
	school : "Conj",
	time : "1 bns",
	range : "Self",
	components : "V",
	duration : "Conc, 1 min",
	save : "Str",
	description : "Next crea hit save (Large adv.) or restrained, 1d6+1d6/SL Piercing dmg/rnd; Str check to escape",
	descriptionFull : "The next time you hit a creature with a weapon attack before this spell ends, a writhing mass of thorny vines appears at the point of impact, and the target must succeed on a Strength saving throw or be restrained by the magical vines until the spell ends. A Large or larger creature has advantage on this saving throw. If the target succeeds on the save, the vines shrivel away." + "\n   " + "While restrained by this spell, the target takes 1d6 piercing damage at the start of each of its turns. A creature restrained by the vines or one that can touch the creature can use its action to make a Strength check against your spell save DC. On a success, the target is freed." + AtHigherLevels + "If you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
};
SpellsList["feign death"] = {
	name : "Feign Death",
	classes : ["bard", "cleric", "druid", "wizard"],
	source : ["P", 240],
	ritual : true,
	level : 3,
	school : "Necro",
	time : "1 a",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "A pinch of graveyard dirt",
	duration : "1 h (D)",
	description : "Willing creature appears dead; it is blinded, incapacitated, has dmg resist. all but Psychic, and speed 0",
	descriptionFull : "You touch a willing creature and put it into a cataleptic state that is indistinguishable from death." + "\n   " + "For the spell's duration, or until you use an action to touch the target and dismiss the spell, the target appears dead to all outward inspection and to spells used to determine the target's status. The target is blinded and incapacitated, and its speed drops to 0. The target has resistance to all damage except psychic damage. If the target is diseased or poisoned when you cast the spell, or becomes diseased or poisoned while under the spell's effect, the disease and poison have no effect until the spell ends."
};
SpellsList["friends"] = {
	name : "Friends",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : ["P", 244],
	level : 0,
	school : "Ench",
	time : "1 a",
	range : "Self",
	components : "S,M",
	compMaterial : "A small amount of makeup applied to the face as this spell is cast",
	duration : "Conc, 1 min",
	description : "Adv. on Cha checks vs. 1 crea currently not hostile; when spell ends, crea knows and becomes hostile",
	descriptionFull : "For the duration, you have advantage on all Charisma checks directed at one creature of your choice that isn't hostile toward you. When the spell ends, the creature realizes that you used magic to influence its mood and becomes hostile toward you. A creature prone to violence might attack you. Another creature might seek retribution in other ways (at the DM's discretion), depending on the nature of your interaction with it."
};
SpellsList["grasping vine"] = {
	name : "Grasping Vine",
	classes : ["druid", "ranger"],
	source : ["P", 246],
	level : 4,
	school : "Conj",
	time : "1 bns",
	range : "30 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "Conjure vine with 30 ft reach; bns a to direct to 1 crea save or pulled 20 ft to vine",
	descriptionFull : "You conjure a vine that sprouts from the ground in an unoccupied space of your choice that you can see within range. When you cast this spell, you can direct the vine to lash out at a creature within 30 feet of it that you can see. That creature must succeed on a Dexterity saving throw or be pulled 20 feet directly toward the vine." + "\n   " + "Until the spell ends, you can direct the vine to lash out at the same creature or another one as a bonus action on each of your turns."
};
SpellsList["hail of thorns"] = {
	name : "Hail of Thorns",
	classes : ["ranger"],
	source : ["P", 249],
	level : 1,
	school : "Conj",
	time : "1 bns",
	range : "Self",
	components : "V",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "Next ranged weapon attack, all within 5 ft of target 1d10+1d10/SL Piercing dmg; save halves",
	descriptionFull : "The next time you hit a creature with a ranged weapon attack before the spell ends, this spell creates a rain of thorns that sprouts from your ranged weapon or ammunition. In addition to the normal effect of the attack, the target of the attack and each creature within 5 feet of it must make a Dexterity saving throw. A creature takes 1d10 piercing damage on a failed save, or half as much damage on a successful one." + AtHigherLevels + "If you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st (to a maximum of 6d10)."
};
SpellsList["hex"] = {
	name : "Hex",
	classes : ["warlock"],
	source : ["P", 251],
	level : 1,
	school : "Ench",
	time : "1 bns",
	range : "90 ft",
	components : "V,S,M",
	compMaterial : "The petrified eye of a newt",
	duration : "Conc, 1 h",
	description : "1 crea +1d6 Necrotic dmg from your atks; dis. on chosen ability checks; SL3: conc, 8h; SL5: conc, 24h",
	descriptionFull : "You place a curse on a creature that you can see within range. Until the spell ends, you deal an extra 1d6 necrotic damage to the target whenever you hit it with an attack. Also, choose one ability when you cast the spell. The target has disadvantage on ability checks made with the chosen ability." + "\n   " + "If the target drops to 0 hit points before this spell ends, you can use a bonus action on a subsequent turn of yours to curse a new creature." + "\n   " + "A remove curse cast on the target ends this spell early." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd or 4th level, you can maintain your concentration on the spell for up to 8 hours. When you use a spell slot of 5th level or higher, you can maintain your concentration on the spell for up to 24 hours."
};
SpellsList["hunger of hadar"] = {
	name : "Hunger of Hadar",
	classes : ["warlock"],
	source : ["P", 251],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "150 ft",
	components : "V,S,M",
	compMaterial : "A pickled octopus tentacle",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "20-ft rad blinds all while in; all start turn in 2d6 Cold dmg; all end turn in save or 2d6 Acid dmg",
	descriptionFull : "You open a gateway to the dark between the stars, a region infested with unknown horrors. A 20-foot-radius sphere of blackness and bitter cold appears, centered on a point with range and lasting for the duration. This void is filled with a cacophony of soft whispers and slurping noises that can be heard up to 30 feet away. No light, magical or otherwise, can illuminate the area, and creatures fully within the area are blinded." + "\n   " + "The void creates a warp in the fabric of space, and the area is difficult terrain. Any creature that starts its turn in the area takes 2d6 cold damage. Any creature that ends its turn in the area must succeed on a Dexterity saving throw or take 2d6 acid damage as milky, otherworldly tentacles rub against it."
};
SpellsList["lightning arrow"] = {
	name : "Lightning Arrow",
	classes : ["ranger"],
	source : ["P", 255],
	level : 3,
	school : "Trans",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "Next rngd wea atk +4d8+1d8/SL Lightn. dmg, miss half; 10 ft all 2d8+1d8/SL Lightn. dmg, save half",
	descriptionFull : "The next time you make a ranged weapon attack during the spell's duration, the weapon's ammunition, or the weapon itself if it's a thrown weapon, transforms into a bolt of lightning. Make the attack roll as normal. The target takes 4d8 lightning damage on a hit, or half as much damage on a miss, instead of the weapon's normal damage." + "\n   " + "Whether you hit or miss, each creature within 10 feet of the target must make a Dexterity saving throw. Each of these creatures takes 2d8 lightning damage on a failed save, or half as much damage on a successful one." + "\n   " + "The piece of ammunition or weapon then returns to its normal form." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage for both effects of the spell increases by 1d8 for each slot level above 3rd."
};
SpellsList["phantasmal force"] = {
	name : "Phantasmal Force",
	classes : ["bard", "sorcerer", "wizard"],
	source : ["P", 264],
	level : 2,
	school : "Illus",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "A bit of fleece",
	duration : "Conc, 1 min",
	save : "Int",
	description : "1 crea save or sees 10 ft cube illusion that does 1d6 Psychic dmg/rnd; Int(Investigation) vs. Spell DC",
	descriptionFull : "You craft an illusion that takes root in the mind of a creature that you can see within range. The target must make an Intelligence saving throw. On a failed save, you create a phantasmal object, creature, or other visible phenomenon of your choice that is no larger than a 10-foot cube and that is perceivable only to the target for the duration. This spell has no effect on undead or constructs." + "\n   " + "The phantasm includes sound, temperature, and other stimuli, also evident only to the creature." + "\n   " + "The target can use its action to examine the phantasm with an Intelligence (Investigation) check against your spell save DC. If the check succeeds, the target realizes that the phantasm is an illusion, and the spell ends." + "\n   " + "While a target is affected by the spell, the target treats the phantasm as if it were real. The target rationalizes any illogical outcomes from interacting with the phantasm. For example, a target attempting to walk across a phantasmal bridge that spans a chasm falls once it steps onto the bridge. If the target survives the fall, it still believes that the bridge exists and comes up with some other explanation for its fall - it was pushed, it slipped, or a strong wind might have knocked it off." + "\n   " + "An affected target is so convinced of the phantasm's reality that it can even take damage from the illusion. A phantasm created to appear as a creature can attack the target. Similarly, a phantasm created to appear as fire, a pool of acid, or lava can burn the target. Each round on your turn, the phantasm can deal 1d6 psychic damage to the target if it is in the phantasm's area or within 5 feet of the phantasm, provided that the illusion is of a creature or hazard that could logically deal damage, such as by attacking. The target perceives the damage as a type appropriate to the illusion."
};
SpellsList["power word heal"] = {
	name : "Power Word Heal",
	classes : ["bard"],
	source : ["P", 266],
	level : 9,
	school : "Evoc",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Instantaneous",
	description : "1 crea heals all hp and stops being charmed, frightened, paralyzed, stunned; it can use rea to stand up",
	descriptionFull : "A wave of healing energy washes over the creature you touch. The target regains all its hit points. If the creature is charmed, frightened, paralyzed, or stunned, the condition ends. If the creature is prone, it can use its reaction to stand up. This spell has no effect on undead or constructs."
};
SpellsList["ray of sickness"] = {
	name : "Ray of Sickness",
	classes : ["sorcerer", "wizard"],
	source : ["P", 271],
	level : 1,
	school : "Necro",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	description : "Spell attack for 2d8+1d8/SL Poison dmg; save or also poisoned until end of your next turn",
	descriptionFull : "A ray of sickening greenish energy lashes out toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d8 poison damage and must make a Constitution saving throw. On a failed save, it is also poisoned until the end of your next turn." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
};
SpellsList["searing smite"] = {
	name : "Searing Smite",
	classes : ["paladin"],
	source : ["P", 274],
	level : 1,
	school : "Evoc",
	time : "1 bns",
	range : "Self",
	components : "V",
	duration : "Conc, 1 min",
	save : "Con",
	description : "Next melee weapon hit +1d6+1d6/SL Fire dmg and target ignites; save to end spell or 1d6 Fire dmg",
	descriptionFull : "The next time you hit a creature with a melee weapon attack during the spell's duration, your weapon flares with white-hot intensity, and the attack deals an extra 1d6 fire damage to the target and causes the target to ignite in flames. At the start of each of its turns until the spell ends, the target must make a Constitution saving throw. On a failed save, it takes 1d6 fire damage. On a successful save, the spell ends. If the target or a creature within 5 feet of it uses an action to put out the flames, or if some other effect douses the flames (such as the target being submerged in water), the spell ends." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the initial extra damage dealt by the attack increases by 1d6 for each slot above the 1st."
};
SpellsList["staggering smite"] = {
	name : "Staggering Smite",
	classes : ["paladin"],
	source : ["P", 278],
	level : 4,
	school : "Evoc",
	time : "1 bns",
	range : "Self",
	components : "V",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "Next melee weapon hit +4d6 Psychic dmg and save or dis. on atks/chks, no rea, until end next turn",
	descriptionFull : "The next time you hit a creature with a melee weapon attack during this spell's duration, your weapon pierces both body and mind, and the attack deals an extra 4d6 psychic damage to the target. The target must make a Wisdom saving throw. On a failed save, it has disadvantage on attack rolls and ability checks, and can't take reactions, until the end of its next turn."
};
SpellsList["swift quiver"] = {
	name : "Swift Quiver",
	classes : ["ranger"],
	source : ["P", 279],
	level : 5,
	school : "Trans",
	time : "1 bns",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "A quiver containing at least one piece of ammunition",
	duration : "Conc, 1 min",
	description : "Quiver gives nonmagical ammo; bns a to make 2 atks with weapon that uses ammo from that quiver",
	descriptionFull : "You transmute your quiver so it produces an endless supply of nonmagical ammunition, which seems to leap into your hand when you reach for it." + "\n   " + "On each of your turns until the spell ends, you can use a bonus action to make two attacks with a weapon that uses ammunition from the quiver. Each time you make such a ranged attack, your quiver magically replaces the piece of ammunition you used with a similar piece of nonmagical ammunition. Any pieces of ammunition created by this spell disintegrate when the spell ends. If the quiver leaves your possession, the spell ends."
};
SpellsList["telepathy"] = {
	name : "Telepathy",
	classes : ["wizard"],
	source : ["P", 281],
	level : 8,
	school : "Evoc",
	time : "1 a",
	range : "Unlimited",
	components : "V,S,M",
	compMaterial : "A pair of linked silver rings",
	duration : "24 h",
	description : "1 willing crea Int>0 and you telepathic link; share words, sensory information if on same plane",
	descriptionFull : "You create a telepathic link between yourself and a willing creature with which you are familiar. The creature can be anywhere on the same plane of existence as you. The spell ends if you or the target are no longer on the same plane." + "\n   " + "Until the spell ends, you and the target can instantaneously share words, images, sounds, and other sensory messages with one another through the link, and the target recognizes you as the creature it is communicating with. The spell enables a creature with an Intelligence score of at least 1 to understand the meaning of your words and take in the scope of any sensory messages you send to it."
};
SpellsList["thorn whip"] = {
	name : "Thorn Whip",
	classes : ["druid"],
	source : ["P", 282],
	level : 0,
	school : "Trans",
	time : "1 a",
	range : "30 ft",
	components : "V,S,M",
	compMaterial : "The stem of a plant with thorns",
	duration : "Instantaneous",
	description : "Melee spell attack for 1d6 Piercing dmg and pull crea 10 ft to you; +1d6 at CL 5, 11, and 17",
	descriptionFull : "You create a long, vine-like whip covered in thorns that lashes out at your command toward a creature in range. Make a melee spell attack against the target. If the attack hits, the creature takes 1d6 piercing damage, and if the creature is Large or smaller, you pull the creature up to 10 feet closer to you." + "\n   " + "This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
};
SpellsList["thunderous smite"] = {
	name : "Thunderous Smite",
	classes : ["paladin"],
	source : ["P", 282],
	level : 1,
	school : "Evoc",
	time : "1 bns",
	range : "Self",
	components : "V",
	duration : "Conc, 1 min",
	save : "Str",
	description : "Next melee weapon hit +2d6 Thunder dmg and save or 10 ft push and prone; audible in 300 ft",
	descriptionFull : "The first time you hit with a melee weapon attack during this spell's duration, your weapon rings with thunder that is audible within 300 feet of you, and the attack deals an extra 2d6 thunder damage to the target. Additionally, if the target is a creature, it must succeed on a Strength saving throw or be pushed 10 feet away from you and knocked prone."
};
SpellsList["tsunami"] = {
	name : "Tsunami",
	classes : ["druid"],
	source : ["P", 284],
	level : 8,
	school : "Conj",
	time : "1 min",
	range : "Sight",
	components : "V,S",
	duration : "Conc, 6 rnd",
	save : "Str",
	description : "300\u00D750\u00D7300ft (l\u00D7w\u00D7h) wall of water moves away at 50 ft/rnd; 6d10 Bludg. dmg; save halves; see B",
	descriptionMetric : "90\u00D715\u00D790m (l\u00D7w\u00D7h) wall of water moves away at 15 m/rnd; 6d10 Bludg. dmg; save halves; see B",
	descriptionFull : "A wall of water springs into existence at a point you choose within range. You can make the wall up to 300 feet long, 300 feet high, and 50 feet thick. The wall lasts for the duration." + "\n   " + "When the wall appears, each creature within its area must make a Strength saving throw. On a failed save, a creature takes 6d10 bludgeoning damage, or half as much damage on a successful save." + "\n   " + "At the start of each of your turns after the wall appears, the wall, along with any creatures in it, moves 50 feet away from you. Any Huge or smaller creature inside the wall or whose space the wall enters when it moves must succeed on a Strength saving throw or take 5d10 bludgeoning damage. A creature can take this damage only once per round. At the end of the turn, the wall's height is reduced by 50 feet, and the damage creatures take from the spell on subsequent rounds is reduced by 1d10. When the wall reaches 0 feet in height, the spell ends." + "\n   " + "A creature caught in the wall can move by swimming. Because of the force of the wave, though, the creature must make a successful Strength (Athletics) check against your spell save DC in order to move at all. If it fails the check, it can't move. A creature that moves out of the area falls to the ground."
};
SpellsList["witch bolt"] = {
	name : "Witch Bolt",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["P", 289],
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "30 ft",
	components : "V,S,M",
	compMaterial : "A twig from a tree that has been struck by lightning",
	duration : "Conc, 1 min",
	description : "Spell attack 1d12+1d12/SL Lightning dmg; 1 a, if consecutive, for dmg again; ends if out of range",
	descriptionFull : "A beam of crackling, blue energy lances out toward a creature within range, forming a sustained arc of lightning between you and the target. Make a ranged spell attack against that creature. On a hit, the target takes 1d12 lightning damage, and on each of your turns for the duration, you can use your action to deal 1d12 lightning damage to the target automatically. The spell ends if you use your action to do anything else. The spell also ends if the target is ever outside the spell's range or if it has total cover from you." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the initial damage increases by 1d12 for each slot level above 1st."
};
SpellsList["wrathful smite"] = {
	name : "Wrathful Smite",
	classes : ["paladin"],
	source : ["P", 289],
	level : 1,
	school : "Evoc",
	time : "1 bns",
	range : "Self",
	components : "V",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "Next melee weapon hit +1d6 Psychic dmg and save or frightened; it can take 1 a for extra save",
	descriptionFull : "The next time you hit with a melee weapon attack during this spell's duration, your attack deals an extra 1d6 psychic damage. Additionally, if the target is a creature, it must make a Wisdom saving throw or be frightened of you until the spell ends. As an action, the creature can make a Wisdom check against your spell save DC to steel its resolve and end this spell."
};

// Add a function if not already defined
if (typeof AddToNotes === 'undefined') {
	AddToNotes = function(noteStr, alertTxt, oldNoteStr) {
		if (What("Unit System") === "metric") {
			noteStr = ConvertToMetric(noteStr, 0.5);
			if (oldNoteStr) oldNoteStr = ConvertToMetric(oldNoteStr, 0.5);
		};
		noteStr = noteStr.replace(/\n/g, "\r");
		if (oldNoteStr) oldNoteStr = oldNoteStr.replace(/\n/g, "\r");
		var replaceOldNote = false;
		if (!isTemplVis("ASnotes")) {
			var noteFld = DoTemplate("ASnotes", "Add");
			noteFld += "Notes.Left";
		} else {
			var noteFld = false;
			var noteFlds = ["Notes.Left", "Notes.Right"];
			var notesPrefix = What("Template.extras.ASnotes").split(",");
			for (var i = 1; i < notesPrefix.length; i++) {
				for (var n = 0; n < noteFlds.length; n++) {
					var aFld = notesPrefix[i] + noteFlds[n];
					var inFld = What(aFld);
					if (noteStr && inFld.toLowerCase().indexOf(noteStr.toLowerCase()) !== -1) {
						return;
					} else if (oldNoteStr && inFld.toLowerCase().indexOf(oldNoteStr.toLowerCase()) !== -1) {
						noteFld = aFld;
						replaceOldNote = true;
						i = noteFlds.length;
						break;
					} else if (inFld === "" && !noteFld) {
						noteFld = aFld;
					};
				};
			};
			if (!noteFld && noteStr) {
				noteFld = DoTemplate("ASnotes", "Add");
			} else if (!noteStr && !oldNoteStr) {
				return;
			};
		};
		ReplaceString(noteFld, noteStr, false, oldNoteStr ? oldNoteStr : "");
		if (!replaceOldNote && noteStr && alertTxt) {
			app.alert({
				cTitle : alertTxt + " is added on the Notes page",
				cMsg : "You can find the rules for " + alertTxt + " on the \"Notes\" page at page no. " + (tDoc.getField(noteFld).page + 1) + ".\n\nThese rules are simply to much for the Class Features section and do not fit with the rest that needs to go in the third page's Notes section. Thus, these rules will be put on a Notes page and will be updated there.",
				nIcon : 3
			});
		};
	};
};
