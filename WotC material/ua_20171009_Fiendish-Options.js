var iFileName = "ua_20171009_Fiendish-Options.js";
RequiredSheetVersion("13.0.8");
// This file adds the content from the Unearthed Arcana: Fiendish Options article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:FO"] = {
	name : "Unearthed Arcana: Fiendish Options",
	abbreviation : "UA:FO",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2017/dnd/downloads/UA_FiendishOptions.pdf",
	date : "2017/10/09"
};

// Adds 8 subraces for the Tiefling, even though it doesn't have any in the PHB/SRD
// Much of this code was contributed by Friedrich
// [dupl_start] Note that the Abyssal Tiefling is the same as the Tiefling in the PHB/SRD, so it is not added (again) by this code
if (!RaceList["baalzebul tiefling"]) {
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
		trait : "Baalzebul Tiefling (+1 Intelligence, +2 Charisma)\n\nLegacy of Maladomini:\n   I know the Thaumaturgy cantrip.\n   At 3rd level, I can cast the Ray of Sickness spell once per long rest as a 2nd-level spell.\n   At 5th level, I can also cast the Crown of Madness spell once per long rest.\n   Charisma is my spellcasting ability for these spells.",
		spellcastingAbility : 6,
		spellcastingBonus : {
			name : "Legacy of Maladomini (1)",
			spells : ["thaumaturgy"],
			selection : ["thaumaturgy"],
			firstCol : 'atwill'
		},
		features : {
			"ray of sickness" : {
				name : "Legacy of Maladomini (level 3)",
				limfeaname : "Ray of Sickness (3d8)",
				minlevel : 3,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Legacy of Maladomini (3)",
					spells : ["ray of sickness"],
					selection : ["ray of sickness"],
					firstCol : 'oncelr'
				},
				spellChanges : {
					"ray of sickness" : {
						description : "Spell attack for 3d8 Poison dmg; save or also poisoned until end of my next turn",
						changes : "Using Legacy of Maladomini, I cast Ray of Sickness as if I'm using a 2nd-level spell slot."
					}
				}
			},
			"crown of madness" : {
				name : "Legacy of Maladomini (level 5)",
				limfeaname : "Crown of Madness",
				minlevel : 5,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Legacy of Maladomini (5)",
					spells : ["crown of madness"],
					selection : ["crown of madness"],
					firstCol : 'oncelr'
				}
			}
		}
	};
}
if (!RaceList["fierna tiefling"]) {
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
		trait : "Fierna Tiefling (+1 Wisdom, +2 Charisma)\n\nLegacy of Phlegethos:\n   I know the Friends cantrip.\n   At 3rd level, I can cast the Charm Person spell once per long rest as a 2nd-level spell.\n   At 5th level, I can also cast the Suggestion spell once per long rest.\n   Charisma is my spellcasting ability for these spells.",
		abilitySave : 6,
		spellcastingAbility : 6,
		spellcastingBonus : {
			name : "Legacy of Phlegethos (1)",
			spells : ["friends"],
			selection : ["friends"],
			firstCol : 'atwill'
		},
		features : {
			"charm person" : {
				name : "Legacy of Phlegethos (level 3)",
				limfeaname : "Charm Person (2 targets)",
				minlevel : 3,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Legacy of Phlegethos (3)",
					spells : ["charm person"],
					selection : ["charm person"],
					firstCol : 'oncelr'
				},
				spellChanges : {
					"charm person" : {
						description : "2 humanoids, max 30 ft apart, save or charmed; adv. on save if me/ally is fighting it",
						changes : "Using Legacy of Phlegethos, I cast Charm Person as if I'm using a 2nd-level spell slot."
					}
				}
			},
			"suggestion" : {
				name : "Legacy of Phlegethos (level 5)",
				limfeaname : "Suggestion",
				minlevel : 5,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Legacy of Phlegethos (5)",
					spells : ["suggestion"],
					selection : ["suggestion"],
					firstCol : 'oncelr'
				}
			}
		}
	};
}
if (!RaceList["glasya tiefling"]) {
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
		trait : "Glasya Tiefling (+1 Dexterity, +2 Charisma)\n\nLegacy of Malbolge:\n   I know the Minor Illusion cantrip.\n   At 3rd level, I can cast the Disguise Self spell once per long rest.\n   At 5th level, I can also cast the Invisibility spell once per long rest.\n   Charisma is my spellcasting ability for these spells.",
		spellcastingAbility : 6,
		spellcastingBonus : {
			name : "Legacy of Malbolge (1)",
			spells : ["minor illusion"],
			selection : ["minor illusion"],
			firstCol : 'atwill'
		},
		features : {
			"disguise self" : {
				name : "Legacy of Malbolge (level 3)",
				limfeaname : "Disguise Self",
				minlevel : 3,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Legacy of Malbolge (3)",
					spells : ["disguise self"],
					selection : ["disguise self"],
					firstCol : 'oncelr'
				}
			},
			"invisibility" : {
				name : "Legacy of Malbolge (level 5)",
				limfeaname : "Invisibility",
				minlevel : 5,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Legacy of Malbolge (5)",
					spells : ["invisibility"],
					selection : ["invisibility"],
					firstCol : 'oncelr'
				}
			}
		}
	};
}
if (!RaceList["levistus tiefling"]) {
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
		trait : "Levistus Tiefling (+1 Constitution, +2 Charisma)\n\nLegacy of Stygia:\n   I know the Ray of Frost cantrip.\n   At 3rd level, I can cast the Armor of Agathys spell once per long rest as a 2nd-level spell.\n   At 5th level, I can also cast the Darkness spell once per long rest.\n   Charisma is my spellcasting ability for these spells.",
		spellcastingAbility : 6,
		spellcastingBonus : {
			name : "Legacy of Stygia (1)",
			spells : ["ray of frost"],
			selection : ["ray of frost"],
			firstCol : 'atwill'
		},
		features : {
			"armor of agathys" : {
				name : "Legacy of Stygia (level 3)",
				limfeaname : "Armor of Agathys (2nd-level)",
				minlevel : 3,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Legacy of Stygia (3)",
					spells : ["armor of agathys"],
					selection : ["armor of agathys"],
					firstCol : 'oncelr'
				},
				spellChanges : {
					"armor of agathys" : {
						description : "10 temp HP; as long as temp HP last any crea that hits in melee takes 10 Cold dmg",
						changes : "Using Legacy of Stygia, I cast Armor of Agathys as if I'm using a 2nd-level spell slot."
					}
				}
			},
			"darkness" : {
				name : "Legacy of Stygia (level 5)",
				limfeaname : "Darkness",
				minlevel : 5,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Legacy of Stygia (5)",
					spells : ["darkness"],
					selection : ["darkness"],
					firstCol : 'oncelr'
				}
			}
		}
	};
}
if (!RaceList["mammon tiefling"]) {
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
		trait : "Mammon Tiefling (+1 Intelligence, +2 Charisma)\nLegacy of Minauros:\n   I know the Mage Hand cantrip.\n   At 3rd level, I can cast the Tenser's Floating Disk spell once per short rest.\n   At 5th level, I can also cast the Arcane Lock spell without a material component once per long rest.\n   Charisma is my spellcasting ability for these spells.",
		spellcastingAbility : 6,
		spellcastingBonus : {
			name : "Legacy of Minauros (1)",
			spells : ["mage hand"],
			selection : ["mage hand"],
			firstCol : 'atwill'
		},
		features : {
			"tenser's floating disk" : {
				name : "Legacy of Minauros (level 3)",
				limfeaname : "Tenser's Floating Disk",
				minlevel : 3,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Legacy of Minauros (3)",
					spells : ["tenser's floating disk"],
					selection : ["tenser's floating disk"],
					firstCol : 'oncesr'
				}
			},
			"arcane lock" : {
				name : "Legacy of Minauros (level 5)",
				limfeaname : "Arcane Lock",
				minlevel : 5,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Legacy of Minauros (5)",
					spells : ["arcane lock"],
					selection : ["arcane lock"],
					firstCol : 'oncelr'
				},
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

}
if (!RaceList["zariel tiefling"]) {
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
		trait : "Zariel Tiefling (+1 Strength, +2 Charisma)\n\nLegacy of Avernus:\n   I know the Thaumaturgy cantrip.\n   At 3rd level, I can cast the Searing Smite spell once per long rest as a 2nd-level spell.\n   At 5th level, I can also cast the Branding Smite spell once per long rest.\n   Charisma is my spellcasting ability for these spells.",
		spellcastingAbility : 6,
		spellcastingBonus : {
			name : "Legacy of Avernus (1)",
			spells : ["thaumaturgy"],
			selection : ["thaumaturgy"],
			firstCol : 'atwill'
		},
		features : {
			"searing smite" : {
				name : "Legacy of Avernus (level 3)",
				limfeaname : "Searing Smite (2d6)",
				minlevel : 3,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Legacy of Avernus (3)",
					spells : ["searing smite"],
					selection : ["searing smite"],
					firstCol : 'oncelr'
				},
				spellChanges : {
					"searing smite" : {
						description : "Next melee weapon hit +2d6 Fire dmg and target ignites; save to end spell or 1d6 Fire dmg",
						changes : "Using Legacy of Avernus, I cast Searing Smite as if I'm using a 2nd-level spell slot."
					}
				}
			},
			"branding smite" : {
				name : "Legacy of Avernus (level 5)",
				limfeaname : "Branding Smite",
				minlevel : 5,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Legacy of Avernus (5)",
					spells : ["branding smite"],
					selection : ["branding smite"],
					firstCol : 'oncelr'
				}
			}
		}
	};
} // dupl_end
RaceList["dispater tiefling-ua"] = {
	regExpSearch : /^(?=.*dispater)(?=.*tiefling|planetouched).*$/i,
	name : "Dispater tiefling",
	sortname : "Tiefling, Dispater",
	source : [["UA:FO", 1]],
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
	trait : "Dispater Tiefling (+1 Dexterity, +2 Charisma)\n\nLegacy of Dis:\n   I know the Thaumaturgy cantrip.\n   At 3rd level, I can cast the Disguise Self spell once per long rest.\n   At 5th level, I can also cast the Invisibility spell once per long rest.\n   Charisma is my spellcasting ability for these spells.",
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Legacy of Dis (level 1)",
		spells : ["thaumaturgy"],
		selection : ["thaumaturgy"],
		firstCol : 'atwill'
	},
	features : {
		"disguise self" : {
			name : "Legacy of Dis (level 3)",
			limfeaname : "Disguise Self",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Legacy of Dis (level 3)",
				spells : ["disguise self"],
				selection : ["disguise self"],
				firstCol : 'oncelr'
			}
		},
		"invisibility" : {
			name : "Legacy of Dis (level 5)",
			limfeaname : "Invisibility",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Legacy of Dis (level 5)",
				spells : ["invisibility"],
				selection : ["invisibility"],
				firstCol : 'oncelr'
			}
		}
	}
};
RaceList["mephistopheles tiefling-ua"] = {
	regExpSearch : /^(?=.*mephistopheles)(?=.*tiefling|planetouched).*$/i,
	name : "Mephistopheles tiefling",
	sortname : "Tiefling, Mephistopheles",
	source : [["UA:FO", 2]],
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
	trait : "Mephistopheles Tiefling (+1 Intelligence, +2 Charisma)\n\nLegacy of Cania:\n   I know the Mage Hand cantrip.\n   At 3rd level, I can cast the Magic Missile spell once per long rest as a 2nd-level spell.\n   At 5th level, I can also cast the Web spell once per long rest.\n   Charisma is my spellcasting ability for these spells.",
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Legacy of Cania (level 1)",
		spells : ["mage hand"],
		selection : ["mage hand"],
		firstCol : 'atwill'
	},
	features : {
		"magic missile" : {
			name : "Legacy of Cania (level 3)",
			limfeaname : "Magic Missile (2 darts)",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Legacy of Cania (level 3)",
				spells : ["magic missile"],
				selection : ["magic missile"],
				firstCol : 'oncelr'
			},
			spellChanges : {
				"magic missile" : {
					description : "4 darts hit creature(s) I can see for 1d4+1 Force dmg per dart",
					changes : "Using Legacy of Cania, I cast Magic Missile as if I'm using a 2nd-level spell slot."
				}
			}
		},
		"web" : {
			name : "Legacy of Cania (level 5)",
			limfeaname : "Web",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Legacy of Cania (level 5)",
				spells : ["web"],
				selection : ["web"],
				firstCol : 'oncelr'
			}
		}
	}
};
