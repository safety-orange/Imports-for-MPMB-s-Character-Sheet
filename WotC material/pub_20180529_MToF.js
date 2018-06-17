// WORK IN PROGRESS, NOT FINISHED, NOT TESTED!

var iFileName = "pub_20180529_MToF.js";
RequiredSheetVersion(12.999);
// This file adds all the player-material from Mordenkainen's Tome of Foes to MPMB's Character Record Sheet

// Define the source
SourceList.MToF={
	name : "Mordenkainen's Tome of Foes",
	abbreviation : "MToF",
	group : "Primary Sources",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/mordenkainens-tome-foes",
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
	improvements : "Baalzebul Tiefling: +1 Intelligence, +2 Charisma;",
	scores : [0, 0, 0, 1, 0, 2],
	trait : "Baalzebul Tiefling (+1 Intelligence, +2 Charisma)\n\nLegacy of Maladomini:\n   I know the Thaumaturgy cantrip.\n   At 3rd level, I can cast the Ray of Sickness spell once per long rest as a 2nd-level spell.\n   At 5th level, I can also cast the Crown of Madness spell once per long rest.\n   Charisma is my spellcasting ability for these spells.",
	abilitySave : 6,
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Legacy of Maladomini (1)",
		spells : ["thaumaturgy"],
		selection : ["thaumaturgy"],
		atwill : true
	},
	features : {
		"ray of sickness" : {
			name : "Ray of Sickness",
			minlevel : 3,
			usages : 1,
			additional : "3d8",
			recovery : "long rest",
			tooltip : " (Legacy of Maladomini)",
			action : ["action", " (3d8)"],
			spellcastingBonus : {
				name : "Legacy of Maladomini (3)",
				spells : ["ray of sickness"],
				selection : ["ray of sickness"],
				oncelr : true
			}
		},
		"crown of madness" : {
			name : "Crown of Madness",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Legacy of Maladomini)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Legacy of Maladomini (5)",
				spells : ["crown of madness"],
				selection : ["crown of madness"],
				oncelr : true
			}
		}
	}
};
RaceList["dispater tiefling-mtof"] = {
	regExpSearch : /^(?=.*dispater)(?=.*tiefling|planetouched).*$/i,
	name : tDoc.info.SheetVersion < 13 ? "Dispater tiefling " : "Dispater tiefling",
	sortname : "Tiefling, Dispater",
	source : ["MToF", 21],
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
	improvements : "Dispater Tiefling: +1 Dexterity, +2 Charisma;",
	scores : [0, 1, 0, 0, 0, 2],
	trait : "Dispater Tiefling (+1 Dexterity, +2 Charisma)\n\nLegacy of Dis:\n   I know the Thaumaturgy cantrip.\n   At 3rd level, I can cast the Disguise Self spell once per long rest.\n   At 5th level, I can also cast the Detect Thoughts spell once per long rest.\n   Charisma is my spellcasting ability for these spells.",
	abilitySave : 6,
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Legacy of Dis (level 1)",
		spells : ["thaumaturgy"],
		selection : ["thaumaturgy"],
		atwill : true
	},
	features : {
		"disguise self" : {
			name : "Disguise Self",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Legacy of Dis)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Legacy of Dis (level 3)",
				spells : ["disguise self"],
				selection : ["disguise self"],
				oncelr : true
			}
		},
		"detect thoughts" : {
			name : "Detect Thoughts",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Legacy of Dis)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Legacy of Dis (level 5)",
				spells : ["detect thoughts"],
				selection : ["detect thoughts"],
				oncelr : true
			}
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
	improvements : "Fierna Tiefling: +1 Wisdom, +2 Charisma;",
	scores : [0, 0, 0, 0, 1, 2],
	trait : "Fierna Tiefling (+1 Wisdom, +2 Charisma)\n\nLegacy of Phlegethos:\n   I know the Friends cantrip.\n   At 3rd level, I can cast the Charm Person spell once per long rest as a 2nd-level spell.\n   At 5th level, I can also cast the Suggestion spell once per long rest.\n   Charisma is my spellcasting ability for these spells.",
	abilitySave : 6,
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Legacy of Phlegethos (1)",
		spells : ["friends"],
		selection : ["friends"],
		atwill : true
	},
	features : {
		"charm person" : {
			name : "Charm Person",
			minlevel : 3,
			usages : 1,
			additional : "2 targets",
			recovery : "long rest",
			tooltip : " (Legacy of Phlegethos)",
			action : ["action", " (2 targets)"],
			spellcastingBonus : {
				name : "Legacy of Phlegethos (3)",
				spells : ["charm person"],
				selection : ["charm person"],
				oncelr : true
			}
		},
		"suggestion" : {
			name : "Suggestion",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Legacy of Phlegethos)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Legacy of Phlegethos (5)",
				spells : ["suggestion"],
				selection : ["suggestion"],
				oncelr : true
			}
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
	improvements : "Glasya Tiefling: +1 Dexterity, +2 Charisma;",
	scores : [0, 1, 0, 0, 0, 2],
	trait : "Glasya Tiefling (+1 Dexterity, +2 Charisma)\n\nLegacy of Malbolge:\n   I know the Minor Illusion cantrip.\n   At 3rd level, I can cast the Disguise Self spell once per long rest.\n   At 5th level, I can also cast the Invisibility spell once per long rest.\n   Charisma is my spellcasting ability for these spells.",
	abilitySave : 6,
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Legacy of Malbolge (1)",
		spells : ["minor illusion"],
		selection : ["minor illusion"],
		atwill : true
	},
	features : {
		"disguise self" : {
			name : "Disguise Self",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Legacy of Malbolge)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Legacy of Malbolge (3)",
				spells : ["disguise self"],
				selection : ["disguise self"],
				oncelr : true
			}
		},
		"invisibility" : {
			name : "Invisibility",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Legacy of Malbolge)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Legacy of Malbolge (5)",
				spells : ["invisibility"],
				selection : ["invisibility"],
				oncelr : true
			}
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
	improvements : "Levistus Tiefling: +1 Constitution, +2 Charisma;",
	scores : [0, 0, 1, 0, 0, 2],
	trait : "Levistus Tiefling (+1 Constitution, +2 Charisma)\n\nLegacy of Stygia:\n   I know the Ray of Frost cantrip.\n   At 3rd level, I can cast the Armor of Agathys spell once per long rest as a 2nd-level spell.\n   At 5th level, I can also cast the Darkness spell once per long rest.\n   Charisma is my spellcasting ability for these spells.",
	abilitySave : 6,
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Legacy of Stygia (1)",
		spells : ["ray of frost"],
		selection : ["ray of frost"],
		atwill : true
	},
	features : {
		"armor of agathys" : {
			name : "Armor of Agathys",
			minlevel : 3,
			usages : 1,
			additional : "2nd-level",
			recovery : "long rest",
			tooltip : " (Legacy of Stygia)",
			action : ["action", " (2nd-level)"],
			spellcastingBonus : {
				name : "Legacy of Stygia (3)",
				spells : ["armor of agathys"],
				selection : ["armor of agathys"],
				oncelr : true
			}
		},
		"darkness" : {
			name : "Darkness",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Legacy of Stygia)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Legacy of Stygia (5)",
				spells : ["darkness"],
				selection : ["darkness"],
				oncelr : true
			}
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
	improvements : "Mammon Tiefling: +1 Intelligence, +2 Charisma;",
	scores : [0, 0, 0, 1, 0, 2],
	trait : "Mammon Tiefling (+1 Intelligence, +2 Charisma)\nLegacy of Minauros:\n   I know the Mage Hand cantrip.\n   At 3rd level, I can cast the Tenser's Floating Disk spell once per short rest.\n   At 5th level, I can also cast the Arcane Lock spell without a material component once per long rest.\n   Charisma is my spellcasting ability for these spells.",
	abilitySave : 6,
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Legacy of Minauros (1)",
		spells : ["mage hand"],
		selection : ["mage hand"],
		atwill : true
	},
	features : {
		"tenser's floating disk" : {
			name : "Tenser's Floating Disk",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Legacy of Minauros)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Legacy of Minauros (3)",
				spells : ["tenser's floating disk"],
				selection : ["tenser's floating disk"],
				oncesr : true
			}
		},
		"arcane lock" : {
			name : "Arcane Lock",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Legacy of Minauros)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Legacy of Minauros (5)",
				spells : ["arcane lock"],
				selection : ["arcane lock"],
				oncelr : true
			}
		}
	}
};
RaceList["mephistopheles tiefling-mtof"] = {
	regExpSearch : /^(?=.*mephistopheles)(?=.*tiefling|planetouched).*$/i,
	name : tDoc.info.SheetVersion < 13 ? "Mephistopheles tiefling " : "Mephistopheles tiefling",
	sortname : "Tiefling, Mephistopheles",
	source : ["MToF", 23],
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
	improvements : "Mephistopheles Tiefling: +1 Intelligence, +2 Charisma;",
	scores : [0, 0, 0, 1, 0, 2],
	trait : "Mephistopheles Tiefling (+1 Intelligence, +2 Charisma)\n\nLegacy of Cania:\n   I know the Mage Hand cantrip.\n   At 3rd level, I can cast the Burning Hands spell once per long rest as a 2nd-level spell.\n   At 5th level, I can also cast the Flame Blade spell once per long rest.\n   Charisma is my spellcasting ability for these spells.",
	abilitySave : 6,
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Legacy of Cania (level 1)",
		spells : ["mage hand"],
		selection : ["mage hand"],
		atwill : true
	},
	features : {
		"burning hands" : {
			name : "Burning Hands",
			additional : "4d6",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Legacy of Cania)",
			action : ["action", " (4d6)"],
			spellcastingBonus : {
				name : "Legacy of Cania (level 3)",
				spells : ["burning hands"],
				selection : ["burning hands"],
				oncelr : true
			}
		},
		"flame blade" : {
			name : "Flame Blade",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Legacy of Cania)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Legacy of Cania (level 5)",
				spells : ["flame blade"],
				selection : ["flame blade"],
				oncelr : true
			}
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
	improvements : "Zariel Tiefling: +1 Strength, +2 Charisma;",
	scores : [1, 0, 0, 0, 0, 2],
	trait : "Zariel Tiefling (+1 Strength, +2 Charisma)\n\nLegacy of Avernus:\n   I know the Thaumaturgy cantrip.\n   At 3rd level, I can cast the Searing Smite spell once per long rest as a 2nd-level spell.\n   At 5th level, I can also cast the Branding Smite spell once per long rest.\n   Charisma is my spellcasting ability for these spells.",
	abilitySave : 6,
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Legacy of Avernus (1)",
		spells : ["thaumaturgy"],
		selection : ["thaumaturgy"],
		atwill : true
	},
	features : {
		"searing smite" : {
			name : "Searing Smite",
			additional : "2d6",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Legacy of Avernus)",
			action : ["bonus action", " (2d6)"],
			spellcastingBonus : {
				name : "Legacy of Avernus (3)",
				spells : ["searing smite"],
				selection : ["searing smite"],
				oncelr : true
			}
		},
		"branding smite" : {
			name : "Branding Smite",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Legacy of Avernus)",
			action : ["bonus action", ""],
			spellcastingBonus : {
				name : "Legacy of Avernus (5)",
				spells : ["branding smite"],
				selection : ["branding smite"],
				oncelr : true
			}
		}
	}
};

// Elf subraces
RaceList["eladrin-mtof"] = {
	regExpSearch : /^(?!.*half)((?=.*eladrin)|((?=.*\b(elfs?|elves|elvish|elven)\b)(?=.*\b(feys?|feywild)\b))).*$/i,
	name : tDoc.info.SheetVersion < 13 ? "Eladrin  " : "Eladrin",
	sortname : "Elf, Fey (Eladrin)",
	source : ["MToF", 61],
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
	weight : " weigh around 115 lb (90 + 2d10 \xD7 1d4 lb)",
	heightMetric : " range from under 1,5 to over 1,8 metres tall (140 + 5d12 cm)",
	weightMetric : " weigh around 55 kg (40 + 5d10 \xD7 2d4 / 10 kg)",
	improvements : "Eladrin: +2 Dexterity, +1 Charisma;",
	scores : [0, 2, 0, 0, 0, 1],
	abilitySave : 6,
	trait : "Eladrin (+2 Dexterity, +1 Charisma)" + desc([
		"Trance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. This gives the same benefit as a human gets from 8 hours of sleep (long rest only 4 hours).",
		"Fey Step: Once per short rest, as a bonus action, I can magically teleport up to 30 ft to an unoccupied space I can see. Once I reach 3rd level, this gains an additional effect, based on the current season I'm aligned with. See the third page notes section for the effects.",
		"Shifting Seasons: After I finish a long rest, I can align myself with a season of my choice."
	]),
	features : {
		"fey step" : {
			name : "Fey Step",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			tooltip : "",
			action : ["bonus action", ""]
		}
	},
	notes : "\u25C6 Eladrin Season Features (MToF 62) [save DC 8 + Cha mod + prof bonus]"
	+ "\n  \u2022 Autumn (Eladrin Season, MToF 62)" + desc([
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
	]),
	eval : "AddString('Extra.Notes', RaceList['eladrin-mtof'].notes, true); if(sheetVersion < 13) { Value('Extra.Layers Remember', 'notes,' + What('Extra.Layers Remember').split(',')[1]); LayerVisibilityOptions(false); } else { show3rdPageNotes(); };",
	removeeval : "RemoveString('Extra.Notes', RaceList['eladrin-mtof'].notes, true);"
};
RaceList["sea elf"] = {
	regExpSearch : /^(?!.*half)((?=.*\b(elfs?|elves|elvish|elven)\b)(?=.*\b(seas?|oceans?|water)\b)).*$/i,
	name : "Sea elf",
	sortname : "Elf, Sea",
	source : [["MToF", 62], ["UA:ES", 1]],
	plural : "Sea elves",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : 30, enc : 20 }
	},
	weaponprofs : [false, false, ["spear", "trident", "light crossbow", "net"]],
	languageProfs : ["Common", "Elvish", "Aquan"],
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
	improvements : "Sea Elf: +2 Dexterity, +1 Constitution;",
	scores : [0, 2, 1, 0, 0, 0],
	trait : "Sea Elf (+2 Dexterity, +1 Constitution)" + desc([
		"Trance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. While meditating, I can dream after a fashion. After resting in this way, I gain the same benefit that a human does from 8 hours of sleep, thus needing only 4 hours for a long rest.",
		"Child of the Sea. I have 30 ft swimming speed and can breathe air and water.",
		"Friend of the Sea: Through sounds and gestures, I can communicate simple ideas with any beast that has an inborn swimming speed."
	])
};
RaceList["shadar-kai-mtof"] = {
	regExpSearch : /^(?!.*half)((?=.*shadar-kai)|((?=.*\b(elfs?|elves|elvish|elven)\b)(?=.*\b(shadows?|shadowfell)\b))).*$/i,
	name : tDoc.info.SheetVersion < 13 ? "Shadar-kai " : "Shadar-kai",
	sortname : "Elf, Shadow (Shadar-kai)",
	source : ["MToF", 62],
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
	improvements : "Shadar-kai: +2 Dexterity, +1 Constitution;",
	scores : [0, 2, 1, 0, 0, 0],
	trait : "Shadar-kai (+2 Dexterity, +1 Constitution)" + desc([
		"Trance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. This gives the same benefit as a human gets from 8 hours of sleep (long rest only 4 hours).",
		"Blessing of the Raven Queen: Once per long rest, as a bonus action, I can magically teleport up to 30 ft to an unoccupied space I can see.",
		"Once I reach 3rd level, after I use the Blessing of the Raven Queen, I appear translucent and have resistance to all damage until the start of my next turn."
	]),
	features : {
		"blessing of the raven queen" : {
			name : "Blessing of the Raven Queen",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			tooltip : "",
			action : ["bonus action", ""]
		}
	}
};

// Gith and its two subraces
RaceList["githyanki-mtof"] = {
	regExpSearch : /githyanki/i,
	name : tDoc.info.SheetVersion < 13 ? "Githyanki " : "Githyanki",
	source : ["MToF", 96],
	plural : "Githyanki",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Gith", 1],
	armor : [true, true, false, false],
	weaponprofs : [false, false, ["shortsword", "longsword", "greatsword"]],
	skillstxt : "Choose any one skill or tool",
	age : " reach adulthood in their late teens and live for about a century",
	height : " are more leaner and taller than humans, most are a slender 6 feet tall (5'0\" + 2d12\")",
	weight : " weigh around 135 lb (100 + 2d12 \xD7 2d4 lb)",
	heightMetric : " are more leaner and taller than humans, most are a slender 1,8 metres tall (150 + 5d12 cm)",
	weightMetric : " weigh around 61 kg (45 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "Githyanki: +2 Strength, +1 Intelligence;",
	scores : [2, 0, 0, 1, 0, 0],
	trait : "Githyanki (+2 Strength, +1 Intelligence)\n" + (typePF ? "\n" : "") + "Githyanki Psionics:" + desc([
		"I know the Mage Hand cantrip, but the hand is invisible.",
		"At 3rd level, I can cast the Jump spell once per long rest.",
		"At 5th level, I can also cast the Misty Step spell once per long rest.",
		"Intelligence is my spellcasting ability for these spells.",
		"I don't require components to cast these spells."
	]),
	spellcastingAbility : 4,
	spellcastingBonus : {
		name : "Githyanki Psionics (1)",
		spells : ["mage hand"],
		selection : ["mage hand"],
		atwill : true
	},
	features : {
		"jump" : {
			name : "Jump",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Githyanki Psionics)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Githyanki Psionics (3)",
				spells : ["jump"],
				selection : ["jump"],
				oncelr : true
			}
		},
		"misty step" : {
			name : "Misty Step",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Githyanki Psionics)",
			action : ["bonus action", ""],
			spellcastingBonus : {
				name : "Githyanki Psionics (5)",
				spells : ["misty step"],
				selection : ["misty step"],
				oncelr : true
			}
		}
	}
};
AddRacialVariant("githyanki-mtof", "tool proficiency", {
	regExpSearch : /tool proficiency/i,
	toolProfs : [["Any tool", 1]]
});
AddRacialVariant("githyanki-mtof", "skill proficiency", {
	regExpSearch : /skill proficiency/i,
	skillstxt : "Choose any one skill"
});
RaceList["githzerai-mtof"] = {
	regExpSearch : /githzerai/i,
	name : tDoc.info.SheetVersion < 13 ? "Githzerai " : "Githzerai",
	source : ["MToF", 96],
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
	improvements : "Githzerai: +1 Intelligence, +2 Wisdom;",
	scores : [0, 0, 0, 1, 2, 0],
	trait : "Githzerai (+1 Intelligence, +2 Wisdom)\n" + (typePF ? "\n" : "") + "Githzerai Psionics:" + desc([
		"I know the Mage Hand cantrip, but the hand is invisible.",
		"At 3rd level, I can cast the Shield spell once per long rest.",
		"At 5th level, I can also cast the Detect Thoughts spell once per long rest.",
		"Wisdom is my spellcasting ability for these spells.",
		"I don't require components to cast these spells."
	]),
	savetxt : { adv_vs : ["charmed", "frightened"] },
	spellcastingAbility : 5,
	spellcastingBonus : {
		name : "Githzerai Psionics (1)",
		spells : ["mage hand"],
		selection : ["mage hand"],
		atwill : true
	},
	features : {
		"shield" : {
			name : "Shield",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Githzerai Psionics)",
			action : ["reaction", ""],
			spellcastingBonus : {
				name : "Githzerai Psionics (3)",
				spells : ["shield"],
				selection : ["shield"],
				oncelr : true
			}
		},
		"detect thoughts" : {
			name : "Detect Thoughts",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Githzerai Psionics)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Githzerai Psionics (5)",
				spells : ["detect thoughts"],
				selection : ["detect thoughts"],
				oncelr : true
			}
		}
	}
};

// Reprints
RaceList["gray dwarf"] = { //reprint from Sword Coast Adventure Guide
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
	weaponprofs : [false, false, ["battleaxe", "handaxe", "warhammer", "light hammer"]],
	toolProfs : [["Smith, brewer, or mason tools", 1]],
	age : " are considered young until they are 50 and live about 350 years",
	height : " stand between 4 and 5 feet tall (3'8\" + 2d4\")",
	weight : " weigh around 150 lb (115 + 2d4 \xD7 2d6 lb)",
	heightMetric : " stand between 1,2 and 1,5 metres tall (110 + 5d4 cm)",
	weightMetric : " weigh around 70 kg (55 + 5d4 \xD7 4d6 / 10 kg)",
	improvements : "Duergar: +2 Constitution, +1 Strength;",
	scores : [1, 0, 2, 0, 0, 0],
	trait : "Duergar (+2 Constitution, +1 Strength)\nStonecunning: Whenever I make an Int (History) check related to the origin of stonework, I am considered proficient in the skill and add double my proficiency bonus to the check.\nSunlight Sensitivity: Disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight when I or what I am trying to attack/perceive is in direct sunlight.\nDuergar Magic: 3rd: Enlarge/Reduce to enlarge; 5th: Invisibility. If not in direct sunlight," + (!typePF ? "\n" : " ") + "I can cast both spells on myself once per long rest without material components, using Int.",
	spellcastingAbility : 4,
	features : {
		"enlarge" : {
			name : "Enlarge (self only)",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Duergar Magic)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Duergar Magic (level 3)",
				spells : ["enlarge/reduce"],
				selection : ["enlarge/reduce"],
				oncelr : true
			}
		},
		"invisibility" : {
			name : "Invisibility (self only)",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Duergar Magic)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Duergar Magic (level 5)",
				spells : ["invisibility"],
				selection : ["invisibility"],
				oncelr : true
			}
		}
	}
};
RaceList["deep gnome"] = { //reprint from Elemental Evil Player's Companion and Sword Coast Adventure Guide
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
	improvements : "Svirfneblin: +1 Dexterity, +2 Intelligence;",
	scores : [0, 1, 0, 2, 0, 0],
	trait : "Svirfneblin (+1 Dexterity, +2 Intelligence)\n\nStone Camouflage:\n   I have advantage on Dexterity (stealth) checks to hide in rocky terrain."
};