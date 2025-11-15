var iFileName = "pub_20180529_MToF.js";
RequiredSheetVersion("13.1.14");
// This file adds all the player-material from Mordenkainen's Tome of Foes to MPMB's Character Record Sheet

// Define the source
SourceList.MToF={
	name : "Mordenkainen's Tome of Foes",
	abbreviation : "MToF",
	group : "Primary Sources",
	url : "https://dnd.wizards.com/products/mordenkainens-tome-foes",
	date : "2018/05/29"
};

// Tiefling subraces
RaceList["baalzebul tiefling"] = {
	regExpSearch : /^(?=.*baalzebul)(?=.*tiefling|planetouched).*$/i,
	name : "Baalzebul tiefling",
	sortname : "Tiefling, Baalzebul",
	source : [["MToF", 21], ["UA:FO", 1]],
	plural : "Baalzebul tieflings",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Infernal"],
	vision : [["Darkvision", 60]],
	dmgres : ["Fire"],
	age : " reach adulthood in their late teens and live around 100 years",
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")",
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d8 cm)",
	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)",
	scores : [0, 0, 0, 1, 0, 2],
	trait : "Baalzebul Tiefling (+1 Intelligence, +2 Charisma)\n\nLegacy of Maladomini:\n   I know the Thaumaturgy cantrip.\n   At 3rd level, I can cast Ray of Sickness once per long rest as a 2nd-level spell.\n   At 5th level, I can also cast Crown of Madness once per long rest.\n   Charisma is my spellcasting ability for these spells.",
	spellcastingAbility : 6,
	spellcastingBonus : [{
		name : "Legacy of Maladomini (1)",
		spells : ["thaumaturgy"],
		selection : ["thaumaturgy"],
		firstCol : 'atwill'
	}],
	features : {
		"ray of sickness" : {
			name : "Legacy of Maladomini (level 3)",
			minlevel : 3,
			spellcastingBonus : [{
				name : "Legacy of Maladomini (3)",
				spells : ["ray of sickness"],
				selection : ["ray of sickness"],
				firstCol : 'oncelr'
			}],
			spellChanges : {
				"ray of sickness" : {
					description : "Spell attack for 3d8 Poison dmg; save or also poisoned until end of my next turn",
					changes : "Using Legacy of Maladomini, I cast Ray of Sickness as if I'm using a 2nd-level spell slot."
				}
			}
		},
		"crown of madness" : {
			name : "Legacy of Maladomini (level 5)",
			minlevel : 5,
			spellcastingBonus : [{
				name : "Legacy of Maladomini (5)",
				spells : ["crown of madness"],
				selection : ["crown of madness"],
				firstCol : 'oncelr'
			}]
		}
	}
};
RaceList["dispater tiefling"] = {
	regExpSearch : /^(?=.*dispater)(?=.*tiefling|planetouched).*$/i,
	name : "Dispater tiefling",
	sortname : "Tiefling, Dispater",
	source : [["MToF", 21]],
	plural : "Dispater tieflings",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Infernal"],
	vision : [["Darkvision", 60]],
	dmgres : ["Fire"],
	age : " reach adulthood in their late teens and live around 100 years",
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")",
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d8 cm)",
	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)",
	scores : [0, 1, 0, 0, 0, 2],
	trait : "Dispater Tiefling (+1 Dexterity, +2 Charisma)\n\nLegacy of Dis:\n   I know the Thaumaturgy cantrip.\n   At 3rd level, I can cast Disguise Self once per long rest.\n   At 5th level, I can also cast Detect Thoughts once per long rest.\n   Charisma is my spellcasting ability for these spells.",
	spellcastingAbility : 6,
	spellcastingBonus : [{
		name : "Legacy of Dis (level 1)",
		spells : ["thaumaturgy"],
		selection : ["thaumaturgy"],
		firstCol : 'atwill'
	}],
	features : {
		"disguise self" : {
			name : "Legacy of Dis (level 3)",
			minlevel : 3,
			spellcastingBonus : [{
				name : "Legacy of Dis (level 3)",
				spells : ["disguise self"],
				selection : ["disguise self"],
				firstCol : 'oncelr'
			}]
		},
		"detect thoughts" : {
			name : "Legacy of Dis (level 5)",
			minlevel : 5,
			spellcastingBonus : [{
				name : "Legacy of Dis (level 5)",
				spells : ["detect thoughts"],
				selection : ["detect thoughts"],
				firstCol : 'oncelr'
			}]
		}
	}
};
RaceList["fierna tiefling"] = {
	regExpSearch : /^(?=.*fierna)(?=.*tiefling|planetouched).*$/i,
	name : "Fierna tiefling",
	sortname : "Tiefling, Fierna",
	source : [["MToF", 21], ["UA:FO", 1]],
	plural : "Fierna tieflings",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Infernal"],
	vision : [["Darkvision", 60]],
	dmgres : ["Fire"],
	age : " reach adulthood in their late teens and live around 100 years",
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")",
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d8 cm)",
	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)",
	scores : [0, 0, 0, 0, 1, 2],
	trait : "Fierna Tiefling (+1 Wisdom, +2 Charisma)\n\nLegacy of Phlegethos:\n   I know the Friends cantrip.\n   At 3rd level, I can cast Charm Person once per long rest as a 2nd-level spell.\n   At 5th level, I can also cast Suggestion once per long rest.\n   Charisma is my spellcasting ability for these spells.",
	spellcastingAbility : 6,
	spellcastingBonus : [{
		name : "Legacy of Phlegethos (1)",
		spells : ["friends"],
		selection : ["friends"],
		firstCol : 'atwill'
	}],
	features : {
		"charm person" : {
			name : "Legacy of Phlegethos (level 3)",
			minlevel : 3,
			spellcastingBonus : [{
				name : "Legacy of Phlegethos (3)",
				spells : ["charm person"],
				selection : ["charm person"],
				firstCol : 'oncelr'
			}],
			spellChanges : {
				"charm person" : {
					description : "2 humanoids, max 30 ft apart, save or charmed; adv. on save if me/ally is fighting it",
					changes : "Using Legacy of Phlegethos, I cast Charm Person as if I'm using a 2nd-level spell slot."
				}
			}
		},
		"suggestion" : {
			name : "Legacy of Phlegethos (level 5)",
			minlevel : 5,
			spellcastingBonus : [{
				name : "Legacy of Phlegethos (5)",
				spells : ["suggestion"],
				selection : ["suggestion"],
				firstCol : 'oncelr'
			}]
		}
	}
};
RaceList["glasya tiefling"] = {
	regExpSearch : /^(?=.*glasya)(?=.*tiefling|planetouched).*$/i,
	name : "Glasya tiefling",
	sortname : "Tiefling, Glasya",
	source : [["MToF", 22], ["UA:FO", 2]],
	plural : "Glasya tieflings",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Infernal"],
	vision : [["Darkvision", 60]],
	dmgres : ["Fire"],
	age : " reach adulthood in their late teens and live around 100 years",
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")",
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d8 cm)",
	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)",
	scores : [0, 1, 0, 0, 0, 2],
	trait : "Glasya Tiefling (+1 Dexterity, +2 Charisma)\n\nLegacy of Malbolge:\n   I know the Minor Illusion cantrip.\n   At 3rd level, I can cast Disguise Self once per long rest.\n   At 5th level, I can also cast Invisibility once per long rest.\n   Charisma is my spellcasting ability for these spells.",
	spellcastingAbility : 6,
	spellcastingBonus : [{
		name : "Legacy of Malbolge (1)",
		spells : ["minor illusion"],
		selection : ["minor illusion"],
		firstCol : 'atwill'
	}],
	features : {
		"disguise self" : {
			name : "Legacy of Malbolge (level 3)",
			minlevel : 3,
			spellcastingBonus : [{
				name : "Legacy of Malbolge (3)",
				spells : ["disguise self"],
				selection : ["disguise self"],
				firstCol : 'oncelr'
			}]
		},
		"invisibility" : {
			name : "Legacy of Malbolge (level 5)",
			minlevel : 5,
			spellcastingBonus : [{
				name : "Legacy of Malbolge (5)",
				spells : ["invisibility"],
				selection : ["invisibility"],
				firstCol : 'oncelr'
			}]
		}
	}
};
RaceList["levistus tiefling"] = {
	regExpSearch : /^(?=.*levistus)(?=.*tiefling|planetouched).*$/i,
	name : "Levistus tiefling",
	sortname : "Tiefling, Levistus",
	source : [["MToF", 22], ["UA:FO", 2]],
	plural : "Levistus tieflings",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Infernal"],
	vision : [["Darkvision", 60]],
	dmgres : ["Fire"],
	age : " reach adulthood in their late teens and live around 100 years",
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")",
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d8 cm)",
	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)",
	scores : [0, 0, 1, 0, 0, 2],
	trait : "Levistus Tiefling (+1 Constitution, +2 Charisma)\n\nLegacy of Stygia:\n   I know the Ray of Frost cantrip.\n   At 3rd level, I can cast Armor of Agathys once per long rest as a 2nd-level spell.\n   At 5th level, I can also cast Darkness once per long rest.\n   Charisma is my spellcasting ability for these spells.",
	spellcastingAbility : 6,
	spellcastingBonus : [{
		name : "Legacy of Stygia (1)",
		spells : ["ray of frost"],
		selection : ["ray of frost"],
		firstCol : 'atwill'
	}],
	features : {
		"armor of agathys" : {
			name : "Legacy of Stygia (level 3)",
			minlevel : 3,
			spellcastingBonus : [{
				name : "Legacy of Stygia (3)",
				spells : ["armor of agathys"],
				selection : ["armor of agathys"],
				firstCol : 'oncelr'
			}],
			spellChanges : {
				"armor of agathys" : {
					description : "10 temp HP; as long as temp HP last any crea that hits in melee takes 10 Cold dmg",
					changes : "Using Legacy of Stygia, I cast Armor of Agathys as if I'm using a 2nd-level spell slot."
				}
			}
		},
		"darkness" : {
			name : "Legacy of Stygia (level 5)",
			minlevel : 5,
			spellcastingBonus : [{
				name : "Legacy of Stygia (5)",
				spells : ["darkness"],
				selection : ["darkness"],
				firstCol : 'oncelr'
			}]
		}
	}
};
RaceList["mammon tiefling"] = {
	regExpSearch : /^(?=.*mammon)(?=.*tiefling|planetouched).*$/i,
	name : "Mammon tiefling",
	sortname : "Tiefling, Mammon",
	source : [["MToF", 22], ["UA:FO", 2]],
	plural : "Mammon tieflings",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Infernal"],
	vision : [["Darkvision", 60]],
	dmgres : ["Fire"],
	age : " reach adulthood in their late teens and live around 100 years",
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")",
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d8 cm)",
	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)",
	scores : [0, 0, 0, 1, 0, 2],
	trait : "Mammon Tiefling (+1 Intelligence, +2 Charisma)\nLegacy of Minauros:\n   I know the Mage Hand cantrip.\n   At 3rd level, I can cast Tenser's Floating Disk once per short rest.\n   At 5th level, I can also cast Arcane Lock without a material component once per long rest.\n   Charisma is my spellcasting ability for these spells.",
	spellcastingAbility : 6,
	spellcastingBonus : [{
		name : "Legacy of Minauros (1)",
		spells : ["mage hand"],
		selection : ["mage hand"],
		firstCol : 'atwill'
	}],
	features : {
		"tenser's floating disk" : {
			name : "Legacy of Minauros (level 3)",
			minlevel : 3,
			spellcastingBonus : [{
				name : "Legacy of Minauros (3)",
				spells : ["tenser's floating disk"],
				selection : ["tenser's floating disk"],
				firstCol : 'oncesr'
			}]
		},
		"arcane lock" : {
			name : "Legacy of Minauros (level 5)",
			minlevel : 5,
			spellcastingBonus : [{
				name : "Legacy of Minauros (5)",
				spells : ["arcane lock"],
				selection : ["arcane lock"],
				firstCol : 'oncelr'
			}],
			spellChanges : {
				"arcane lock" : {
					components : "V,S",
					compMaterial : "",
					changes : "I can cast this spell once per long rest without requiring material components."
				}
			}
		}
	}
};
RaceList["mephistopheles tiefling"] = {
	regExpSearch : /^(?=.*mephistopheles)(?=.*tiefling|planetouched).*$/i,
	name : "Mephistopheles tiefling",
	sortname : "Tiefling, Mephistopheles",
	source : [["MToF", 23]],
	plural : "Mephistopheles tieflings",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Infernal"],
	vision : [["Darkvision", 60]],
	dmgres : ["Fire"],
	age : " reach adulthood in their late teens and live around 100 years",
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")",
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d8 cm)",
	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)",
	scores : [0, 0, 0, 1, 0, 2],
	trait : "Mephistopheles Tiefling (+1 Intelligence, +2 Charisma)\n\nLegacy of Cania:\n   I know the Mage Hand cantrip.\n   At 3rd level, I can cast Burning Hands once per long rest as a 2nd-level spell.\n   At 5th level, I can also cast Flame Blade once per long rest.\n   Charisma is my spellcasting ability for these spells.",
	spellcastingAbility : 6,
	spellcastingBonus : [{
		name : "Legacy of Cania (level 1)",
		spells : ["mage hand"],
		selection : ["mage hand"],
		firstCol : 'atwill'
	}],
	features : {
		"burning hands" : {
			name : "Legacy of Cania (level 3)",
			minlevel : 3,
			spellcastingBonus : [{
				name : "Legacy of Cania (level 3)",
				spells : ["burning hands"],
				selection : ["burning hands"],
				firstCol : 'oncelr'
			}],
			spellChanges : {
				"burning hands" : {
					description : "All in area 4d6 Fire dmg; save halves; unattended flammable objects ignite",
					changes : "Using Legacy of Cania, I cast Burning Hands as if I'm using a 2nd-level spell slot."
				}
			}
		},
		"flame blade" : {
			name : "Legacy of Cania (level 5)",
			minlevel : 5,
			spellcastingBonus : [{
				name : "Legacy of Cania (level 5)",
				spells : ["flame blade"],
				selection : ["flame blade"],
				firstCol : 'oncelr'
			}]
		}
	}
};
RaceList["zariel tiefling"] = {
	regExpSearch : /^(?=.*zariel)(?=.*tiefling|planetouched).*$/i,
	name : "Zariel tiefling",
	sortname : "Tiefling, Zariel",
	source : [["MToF", 23], ["UA:FO", 2]],
	plural : "Zariel tieflings",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Infernal"],
	vision : [["Darkvision", 60]],
	dmgres : ["Fire"],
	age : " reach adulthood in their late teens and live around 100 years",
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")",
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d8 cm)",
	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)",
	scores : [1, 0, 0, 0, 0, 2],
	trait : "Zariel Tiefling (+1 Strength, +2 Charisma)\n\nLegacy of Avernus:\n   I know the Thaumaturgy cantrip.\n   At 3rd level, I can cast Searing Smite once per long rest as a 2nd-level spell.\n   At 5th level, I can also cast Branding Smite once per long rest.\n   Charisma is my spellcasting ability for these spells.",
	spellcastingAbility : 6,
	spellcastingBonus : [{
		name : "Legacy of Avernus (1)",
		spells : ["thaumaturgy"],
		selection : ["thaumaturgy"],
		firstCol : 'atwill'
	}],
	features : {
		"searing smite" : {
			name : "Legacy of Avernus (level 3)",
			minlevel : 3,
			spellcastingBonus : [{
				name : "Legacy of Avernus (3)",
				spells : ["searing smite"],
				selection : ["searing smite"],
				firstCol : 'oncelr'
			}],
			spellChanges : {
				"searing smite" : {
					description : "Next melee weapon hit +2d6 Fire dmg and target ignites; save to end spell or 1d6 Fire dmg",
					changes : "Using Legacy of Avernus, I cast Searing Smite as if I'm using a 2nd-level spell slot."
				}
			}
		},
		"branding smite" : {
			name : "Legacy of Avernus (level 5)",
			minlevel : 5,
			spellcastingBonus : [{
				name : "Legacy of Avernus (5)",
				spells : ["branding smite"],
				selection : ["branding smite"],
				firstCol : 'oncelr'
			}]
		}
	}
};

// Elf subraces
RaceList["eladrin-mtof"] = {
	regExpSearch : /^(?!.*half)((?=.*eladrin)|((?=.*\b(elfs?|elves|elvish|elven)\b)(?=.*\b(feys?|feywild)\b))).*$/i,
	name : "Eladrin",
	sortname : "Elf, Fey (Eladrin)",
	source : [["MToF", 61]],
	plural : "Eladrin",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Elvish"],
	vision : [["Darkvision", 60]],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
	skills : ["Perception"],
	age : " typically claim adulthood around age 100 and can live to be 750 years old",
	height : " range from under 5 to over 6 feet tall (4'6\" + 2d12\")",
	weight : " weigh around 115 lb (90 + 2d12 \xD7 1d4 lb)",
	heightMetric : " range from under 1,5 to over 1,8 metres tall (140 + 5d12 cm)",
	weightMetric : " weigh around 55 kg (40 + 5d12 \xD7 2d4 / 10 kg)",
	scores : [0, 2, 0, 0, 0, 1],
	abilitySave : 6,
	trait : "Eladrin (+2 Dexterity, +1 Charisma)" + desc([
		"Trance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. This gives the same benefit as a human gets from 8 hours of sleep (long rest takes only 4 hours).",
		"Fey Step: Once per short rest, as a bonus action, I can magically teleport up to 30 ft to an unoccupied space I can see. Once I reach 3rd level, this gains an additional effect, based on the current season I'm aligned with. See the third page notes section for the effects.",
		"Shifting Seasons: After I finish a long rest, I can align myself with a season of my choice."
	]),
	features : {
		"fey step" : {
			name : "Fey Step",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			action : [["bonus action", ""]]
		}
	},
	toNotesPage : [{
		name : "Eladrin Season Features",
		source : [["MToF", 62]],
		popupName : "Eladrin Shifting Season Features",
		additional : "save DC 8 + Cha mod + Prof Bonus",
		page3notes : true,
		note : "\n  \u2022 Autumn (Eladrin Season, MToF 62)" + desc([
			" After using Fey Step, up to 2 creatures I can see within 10 ft of me must make a Wis save",
			" If failed, a target is charmed by me for 1 minute, or until I or my allies damage it"
		]) + "\n  \u2022 Winter (Eladrin Season, MToF 62)" + desc([
			" When I use Fey Step, one target in 5 ft of where I teleported from must make a Wis save",
			" If failed, it is frightened of me until the end of my next turn"
		]) + "\n  \u2022 Spring (Eladrin Season, MToF 62)" + desc([
			" When I use Fey Step, I can instead teleport one willing creature I touch within 5 ft of me",
			" It teleports to an unoccupied space of my choice that I can see within 30 ft of me"
		]) + "\n  \u2022 Summer (Eladrin Season, MToF 62)" + desc([
			" After using Fey Step, each creature of my choice within 5 ft of me takes fire damage",
			" This fire damage is equal to my Charisma modifier (minimum 1)"
		])
	}]
};
RaceList["sea elf"] = {
	regExpSearch : /^(?!.*half)((?=.*\b(elfs?|elves|elvish|elven)\b)(?=.*\b(seas?|oceans?|water)\b)).*$/i,
	name : "Sea elf",
	sortname : "Elf, Sea",
	source : [["MToF", 62], ["W", 163], ["UA:ES", 1]],
	plural : "Sea elves",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : 30, enc : 20 }
	},
	weaponProfs : [false, false, ["spear", "trident", "light crossbow", "net"]],
	languageProfs : ["Common", "Elvish", "Aquan", "Friend of the Sea"],
	vision : [["Darkvision", 60]],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
	skills : ["Perception"],
	age : " typically claim adulthood around age 100 and can live to be 750 years old",
	height : " range from under 5 to almost 6 feet tall (4'6\" + 2d8\")",
	weight : " weigh around 115 lb (90 + 2d8 \xD7 1d4 lb)",
	heightMetric : " range from under 1,5 to almost 1,8 metres tall (140 + 5d8 cm)",
	weightMetric : " weigh around 52 kg (40 + 5d8 \xD7 2d4 / 10 kg)",
	scores : [0, 2, 1, 0, 0, 0],
	trait : "Sea Elf (+2 Dexterity, +1 Constitution)" + desc([
		"Trance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. While meditating, I can dream after a fashion. After resting in this way, I gain the same benefit that a human does from 8 hours of sleep, thus needing only 4 hours for a long rest.",
		"Child of the Sea. I have 30 ft swimming speed and can breathe air and water.",
		"Friend of the Sea: Through sounds and gestures, I can communicate simple ideas with any beast that has an inborn swimming speed."
	])
};
RaceList["shadar-kai elf"] = {
	regExpSearch : /^(?!.*half)((?=.*shadar-kai)|((?=.*\b(elfs?|elves|elvish|elven)\b)(?=.*\b(shadows?|shadowfell)\b))).*$/i,
	name : "Shadar-kai",
	sortname : "Elf, Shadow (Shadar-kai)",
	source : [["MToF", 62]],
	plural : "Shadar-kai",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Elvish"],
	vision : [["Darkvision", 60]],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
	dmgres : ["Necrotic"],
	skills : ["Perception"],
	age : " typically claim adulthood around age 100 and can live to be 750 years old",
	height : " range from under 5 to over 6 feet tall (4'8\" + 2d8\")",
	weight : " weigh around 115 lb (90 + 2d8 \xD7 1d4 lb)",
	heightMetric : " range from under 1,5 to over 1,8 metres tall (145 + 5d8 cm)",
	weightMetric : " weigh around 52 kg (40 + 5d8 \xD7 2d4 / 10 kg)",
	scores : [0, 2, 1, 0, 0, 0],
	trait : "Shadar-kai (+2 Dexterity, +1 Constitution)" + desc([
		"Trance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. This gives the same benefit as a human gets from 8 hours of sleep (long rest takes only 4 hours).",
		"Blessing of the Raven Queen: Once per long rest, as a bonus action, I can magically teleport up to 30 ft to an unoccupied space I can see.",
		"Once I reach 3rd level, after I use the Blessing of the Raven Queen, I appear translucent and have resistance to all damage until the start of my next turn."
	]),
	features : {
		"blessing of the raven queen" : {
			name : "Blessing of the Raven Queen",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			action : [["bonus action", ""]]
		}
	}
};

// Gith and its two subraces
RaceList["githyanki-mtof"] = {
	regExpSearch : /githyanki/i,
	name : "Githyanki",
	source : [["MToF", 96]],
	plural : "Githyanki",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Gith", 1],
	armorProfs : [true, true, false, false],
	weaponProfs : [false, false, ["shortsword", "longsword", "greatsword"]],
	skillstxt : "Choose any one skill or tool",
	age : " reach adulthood in their late teens and live for about a century",
	height : " are more leaner and taller than humans, most are a slender 6 feet tall (5'0\" + 2d12\")",
	weight : " weigh around 135 lb (100 + 2d12 \xD7 2d4 lb)",
	heightMetric : " are more leaner and taller than humans, most are a slender 1,8 metres tall (150 + 5d12 cm)",
	weightMetric : " weigh around 61 kg (45 + 5d10 \xD7 4d4 / 10 kg)",
	scores : [2, 0, 0, 1, 0, 0],
	trait : "Githyanki (+2 Strength, +1 Intelligence)\n" + (typePF ? "\n" : "") + "Githyanki Psionics:" + desc([
		"I know the Mage Hand cantrip, but the hand is invisible.",
		"At 3rd level, I can cast Jump once per long rest.",
		"At 5th level, I can also cast Misty Step once per long rest.",
		"Intelligence is my spellcasting ability for these spells.",
		"I don't require components to cast these spells."
	]),
	spellcastingAbility : 4,
	spellcastingBonus : [{
		name : "Githyanki Psionics (1)",
		spells : ["mage hand"],
		selection : ["mage hand"],
		firstCol : 'atwill'
	}],
	spellChanges : {
		"mage hand" : {
			components : "",
			description : "Create invisible spectral hand for simple tasks or carry up to 10 lb; 1 a to control; can't have multiple",
			changes : "Using Githyanki Psionics, I can cast Mage Hand without requiring components and the spectral hand is invisible."
		}
	},
	features : {
		"jump" : {
			name : "Githyanki Psionics (level 3)",
			minlevel : 3,
			spellcastingBonus : [{
				name : "Githyanki Psionics (3)",
				spells : ["jump"],
				selection : ["jump"],
				firstCol : 'oncelr'
			}],
			spellChanges : {
				"jump" : {
					components : "",
					compMaterial : "",
					changes : "Using Githyanki Psionics, I can cast Jump once per long rest without requiring components."
				}
			}
		},
		"misty step" : {
			name : "Githyanki Psionics (level 5)",
			minlevel : 5,
			spellcastingBonus : [{
				name : "Githyanki Psionics (5)",
				spells : ["misty step"],
				selection : ["misty step"],
				firstCol : 'oncelr'
			}],
			spellChanges : {
				"misty step" : {
					components : SpellsList["misty step"].components + "*",
					changes : "Using Githyanki Psionics, I can cast Misty Step once per long rest without requiring components."
				}
			}
		}
	}
};
AddRacialVariant("githyanki-mtof", "tool proficiency", {
	regExpSearch : /tool proficiency/i,
	skillstxt : "",
	toolProfs : [["Any tool", 1]]
});
AddRacialVariant("githyanki-mtof", "skill proficiency", {
	regExpSearch : /skill proficiency/i,
	skillstxt : "Choose any one skill"
});
RaceList["githzerai-mtof"] = {
	regExpSearch : /githzerai/i,
	name : "Githzerai",
	source : [["MToF", 96]],
	plural : "Githzerai",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Gith"],
	age : " reach adulthood in their late teens and live for about a century",
	height : " are more leaner and taller than humans, most are a slender 6 feet tall (4'11\" + 2d12\")",
	weight : " weigh around 115 lb (90 + 2d12 \xD7 1d4 lb)",
	heightMetric : " are more leaner and taller than humans, most are a slender 1,8 metres tall (150 + 5d12 cm)",
	weightMetric : " weigh around 55 kg (40 + 5d10 \xD7 2d4 / 10 kg)",
	scores : [0, 0, 0, 1, 2, 0],
	trait : "Githzerai (+1 Intelligence, +2 Wisdom)\n" + (typePF ? "\n" : "") + "Githzerai Psionics:" + desc([
		"I know the Mage Hand cantrip, but the hand is invisible.",
		"At 3rd level, I can cast Shield once per long rest.",
		"At 5th level, I can also cast Detect Thoughts once per long rest.",
		"Wisdom is my spellcasting ability for these spells.",
		"I don't require components to cast these spells."
	]),
	savetxt : { adv_vs : ["charmed", "frightened"] },
	spellcastingAbility : 5,
	spellcastingBonus : [{
		name : "Githzerai Psionics (1)",
		spells : ["mage hand"],
		selection : ["mage hand"],
		firstCol : 'atwill'
	}],
	spellChanges : {
		"mage hand" : {
			components : "",
			description : "Create invisible spectral hand for simple tasks or carry up to 10 lb; 1 a to control; can't have multiple",
			changes : "Using Githzerai Psionics, I can cast Mage Hand without requiring components and the spectral hand is invisible."
		}
	},
	features : {
		"shield" : {
			name : "Githzerai Psionics (level 3)",
			minlevel : 3,
			spellcastingBonus : [{
				name : "Githzerai Psionics (3)",
				spells : ["shield"],
				selection : ["shield"],
				firstCol : 'oncelr'
			}],
			spellChanges : {
				"shield" : {
					components : "",
					changes : "Using Githzerai Psionics, I can cast Shield once per long rest without requiring components."
				}
			}
		},
		"detect thoughts" : {
			name : "Githzerai Psionics (level 5)",
			minlevel : 5,
			spellcastingBonus : [{
				name : "Githzerai Psionics (5)",
				spells : ["detect thoughts"],
				selection : ["detect thoughts"],
				firstCol : 'oncelr'
			}],
			spellChanges : {
				"detect thoughts" : {
					components : "",
					compMaterial : "",
					changes : "Using Githzerai Psionics, I can cast Detect Thoughts once per long rest without requiring components."
				}
			}
		}
	}
};

// [dupl_start] Reprint from Sword Coast Adventure Guide
if (!RaceList["gray dwarf"]) { 
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
				minlevel : 3,
				spellcastingBonus : [{
					name : "Duergar Magic (level 3)",
					spells : ["enlarge/reduce"],
					selection : ["enlarge/reduce"],
					firstCol : 'oncelr'
				}],
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
				minlevel : 5,
				spellcastingBonus : [{
					name : "Duergar Magic (level 5)",
					spells : ["invisibility"],
					selection : ["invisibility"],
					firstCol : 'oncelr'
				}],
				spellChanges : {
					"invisibility" : {
						range : "Self",
						components : "V,S",
						compMaterial : "",
						description : "I and worn/carried invisible until I attack or cast; Can't cast this spell in direct sunlight",
						changes : "Me and my worn/carried invisible until I attack or cast; Can't cast this spell in direct sunlight"
					}
				}
			}
		}
	};
}
// Reprint from Elemental Evil Player's Companion and Sword Coast Adventure Guide
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
}
// Feat reprint from Elemental Evil Player's Companion
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
			name : "1\xD7 long rest (self only)",
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

// Magic Items
MagicItemsList["greater silver sword"] = {
	name : "Greater Silver Sword",
	source : [["MToF", 89]],
	type : "weapon (greatsword)",
	rarity : "legendary",
	description : "This magic greatsword gives +1 to hit and damage. While holding it, I have adv. on Int, Wis, and Cha saves, immunity to being charmed, and resistance to psychic damage. If I score a critical hit with it on a creature's astral body, I can cut the cord tethering it to its material body, instead of dealing damage.",
	descriptionFull : "This magic weapon grants a +3 bonus to attack and damage rolls made with it. While you hold the sword, you have advantage on Intelligence, Wisdom, and Charisma saving throws, you are immune to being charmed, and you have resistance to psychic damage. In addition, if you score a critical hit with it against a creature's astral body, you can cut the silvery cord that tethers the target to its material body, instead of dealing damage.",
	attunement : true,
	weight : 6,
	prerequisite : "Requires attunement by a creature that has psionic ability",
	prereqeval : function (v) {
		if (!v.isSpellcaster) return false;
		if ((/psion|mystic/i).test(What("Racial Traits"))) return true;
		for (var aCast in CurrentSpells) {
			var spCast = CurrentSpells[aCast];
			if ((/psion|mystic/i).test(spCast.name) || (spCast.list && spCast.list.psionic)) return true;
			if (!spCast.bonus) continue;
			for (var aBon in spCast.bonus) {
				if ((/psion|mystic/i).test(aBon) || (/psion|mystic/i).test(spCast.bonus[aBon].name)) return true;
			}
		}
	},
	weaponOptions : [{
		baseWeapon : "greatsword",
		regExpSearch : /^(?=.*greater)(?=.*silver)(?=.*sword).*$/i,
		name : "Greater Silver Sword",
		source : [["MToF", 89]],
		description : "Heavy, two-handed; On crit vs. astral body, cut cord instead of damage",
		modifiers : [3, 3],
		selectNow : true
	}],
	savetxt : { text : ["Adv. on Int, Wis, and Cha saves"], immune : ["charmed"] },
	advantages : [["Intelligence", true], ["Wisdom", true], ["Charisma", true]],
	dmgres : ["Psychic"]
}
MagicItemsList["infernal tack"] = {
	name : "Infernal Tack",
	source : [["MToF", 167], ["DiA", 224]],
	type : "wondrous item",
	rarity : "legendary",
	notLegalAL : true,
	description : "While wearing the spurs of this set, the nightmare equipped with the bridle, bit, reins, saddle, and stirrups is under my command. As an action, I can have it appear in 20 ft at the start of my next turn. It acts on as my ally on my initiative, remains for 1 day, until I or it dies, or I dismiss it as an action. If it dies, it reforms in 24 h.",
	descriptionLong : "This tack consists of a bridle, bit, reins, saddle, stirrups, and spurs. A nightmare equipped with the tack serves whoever wears the spurs until the wearer dies or the tack is removed. As an action, I can clash the spurs together or scrape them through blood, causing the nightmare to appear within 20 ft at the start of my next turn. It acts as my ally on my initiative count, remains for 1 day, until I or it dies, or until I dismiss it as an action. If it dies, it reforms within 24 hours, after which I can summon it again. The tack doesn't create a nightmare from thin air; one must first be subdued so the tack can be placed on it.",
	descriptionFull : "A narzugon binds a nightmare to its service with infernal tack, which consists of a bridle, bit, reins, saddle, stirrups, and spurs. A nightmare equipped with infernal tack must serve whoever wears the spurs until the wearer dies or the tack is removed.\n   You can use an action to call a nightmare equipped with infernal tack by clashing the spurs together or scraping them through blood. The nightmare appears at the start of your next turn, within 20 feet of you. It acts as your ally and takes its turn on your initiative count. It remains for 1 day, until you or it dies, or until you dismiss it as an action. If the nightmare dies, it reforms in the Nine Hells within 24 hours, after which you can summon it again.\n   The tack doesn't conjure a nightmare from thin air; one must first be subdued so the tack can be placed on it. No nightmare accepts this forced servitude willingly, but some eventually form strong loyalties to their masters and become true partners in evil.",
	attunement : true,
	weight : 26, // riding saddle (25) + bit and bridle (1)
	prerequisite : "Requires attunement by a creature of evil alignment",
	prereqeval : function(v) { return (/evil/i).test(What("Alignment")); },
	action : [["action", ""]],
	creaturesAdd : [["Nightmare", true,
	function (AddRemove, prefix) {
		if (!AddRemove) return;
		// Show equipment section
		MakeCompMenu_CompOptions(prefix, ["companion", "visible", "comp.eqp"], true);
		// Add equipment when added
		var equip = ["bit and bridle", "riding"];
		for (var i = 0; i < equip.length; i++) {
			var gear = GearList[equip[i]];
			if (!gear) continue;
			AddToInv(prefix + "comp", "l", gear.name, gear.amount, gear.weight, "", false, false, false, false);
		}
		// Add notes
		var note = "I can use an action to call a nightmare equipped with infernal tack by clashing the spurs together or scraping them through blood. The nightmare appears at the start of my next turn, within 20 ft of me.\nThe nightmare acts as my ally and takes its turn on my initiative count. It remains for 1 day, until I or it dies, or until I dismiss it as an action. If the nightmare dies, it reforms in the Nine Hells within 24 hours, after which I can summon it again.";
		Value(prefix + "Comp.eqp.Notes", What("Unit System") === "metric" ? ConvertToMetric(note, 0.5) : note);
	}]]
}
