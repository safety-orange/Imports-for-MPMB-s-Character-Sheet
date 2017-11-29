var iFileName = "all_WotC_Unearthed_Arcana.js";
var iFileName = "UA_20150202_Eberron.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Unearthed Arcana: Eberron article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:E"] = {
	name : "Unearthed Arcana: Eberron",
	abbreviation : "UA:E",
	group : "Unearthed Arcana",
	url : "http://media.wizards.com/2015/downloads/dnd/UA_Eberron_v1.1.pdf",
	date : "2015/02/02"
};

// Adds three races:
// Changeling
RaceList["changeling"] = {
	regExpSearch : /changeling/i,
	name : "Changeling",
	source : ["UA:E", 1],
	plural : "Changelings",
	size : 3,
	skills : ["Deception"],
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 2],
	age : " reach adulthood in their early teens and live around 80 years",
	height : " stand between 5 and 6 feet tall (5'1\" + 2d4\")",
	weight : " weigh around 140 lb (115 + 2d4 \xD7 2d4 lb)",
	heightMetric : " stand between 1,5 to over 1,8 metres tall (155 + 5d4 cm)",
	weightMetric : " weigh around 65 kg (52 + 5d4 \xD7 4d4 / 10 kg)",
	improvements : "Changeling: +1 Dexterity, +1 Charisma;",
	scores : [0, 1, 0, 0, 0, 1],
	trait : "Changeling (+1 Dexterity, +1 Charisma)\nShapechanger:\n   As an action, I can polymorph into any humanoid of my size that I have seen, or back into my true form.\n   However, my equipment does not change with me.\n   If I die, I revert to my natural appearance.",
	eval : "AddAction('action', 'Polymorph', 'being a Changeling');",
	removeeval : "RemoveAction('action', 'Polymorph');"
};
// Warforged
RaceList["warforged"] = {
	regExpSearch : /warforged/i,
	name : "Warforged",
	source : ["UA:E", 3],
	plural : "Warforged",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	savetxt : { immune : ["disease"] },
	age : " are created as adults and will only start to show signs of physical deterioration after 150 years, but have no further aging effects",
	height : " stand between 6 and 7 feet tall (5'10\" + 2d6\")",
	weight : " weigh around 300 lb (270 + 2d6 \xD7 4 lb)",
	heightMetric : " stand between 1,8 and 2,1 metres tall (178 + 5d6 cm)",
	weightMetric : " weigh around 135 kg (125 + 5d6 \xD7 8 / kg)",
	improvements : "Warforged: +1 Strength, +1 Constitution;",
	scores : [1, 0, 1, 0, 0, 0],
	trait : "Warforged (+1 Strength, +1 Constitution)\nLiving Construct:\n   Even though I was constructed, I am a living creature. I am immune to disease. I do not need to eat or breathe, but I can ingest food and drink if I wish.\n   Instead of sleeping, I enter an inactive state for 4 hours each day. I do not dream in this state; I am fully aware of my surroundings and notice approaching enemies and other events as normal. I still need 8 hours for a long rest.",
	eval : "AddACMisc(1, 'Composite Plating', 'Composite Plating was gained from being a Warforged')",
	removeeval : "AddACMisc(0, 'Composite Plating', 'Composite Plating was gained from being a Warforged')"
};
// Shifter and its 6 subraces
RaceList["shifter"] = {
	regExpSearch : /shifter/i,
	name : "Shifter",
	source : ["UA:E", 2],
	plural : "Shifters",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Sylvan"],
	vision : [["Darkvision", 60]],
	age : " reach adulthood at the end of their teens and live around 100 years",
	height : " range from under 5 to 6 feet tall (4'6\" + 2d8\")",
	weight : " weigh around 140 lb (95 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from under 1,5 to 1,8 metres tall (4'6\" + 5d8 cm)",
	weightMetric : " weigh around 65 kg (43 + 5d8 \xD7 4d4 / kg)",
	improvements : "Shifter: +1 Dexterity and +1 to other ability score depending on type of shifter;",
	scores : [0, 1, 0, 0, 0, 0],
	trait : "Shifter (+1 Dexterity and +1 to other ability score depending on type of shifter)\n   Use the \"Racial Options\" button to select type of shifter.\nShifting:\n   On my turn, I can shift as a bonus action. Shifting lasts for 1 minute or until I end it on my turn as a bonus action. I must finish a short rest before I can shift again.\n   While shifted, I gain temporary hit points equal to my level + my Constitution modifier (minimum of 1) and another bonus depending on the type of shifter.",
	features : {
		"shift" : {
			name : "Shift",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			tooltip : "",
			action : ["bonus action", ""]
		}
	}
};
AddRacialVariant("shifter", "beasthide", {
	regExpSearch : /beasthide/i,
	name : "Beasthide shifter",
	source : ["UA:E", 2],
	plural : "Beasthide shifters",
	improvements : "Beasthide Shifter: +1 Dexterity, +1 Constitution;",
	scores : [0, 1, 1, 0, 0, 0],
	trait : "Beasthide Shifter (+1 Dexterity, +1 Constitution)\nShifting:\n   On my turn, I can shift as a bonus action. Shifting lasts for 1 minute or until I end it on my turn as a bonus action. I must finish a short rest before I can shift again.\n   While shifted, I gain temporary hit points equal to my level + my Constitution modifier (minimum of 1) and I gain a +1 bonus to my AC."
});
AddRacialVariant("shifter", "cliffwalk", {
	regExpSearch : /cliffwalk/i,
	name : "Cliffwalk shifter",
	source : ["UA:E", 2],
	plural : "Cliffwalk shifters",
	improvements : "Cliffwalk Shifter: +2 Dexterity;",
	scores : [0, 2, 0, 0, 0, 0],
	trait : "Cliffwalk Shifter (+2 Dexterity)\nShifting:\n   On my turn, I can shift as a bonus action. Shifting lasts for 1 minute or until I end it on my turn as a bonus action. I must finish a short rest before I can shift again.\n   While shifted, I gain temporary hit points equal to my level + my Constitution modifier (minimum of 1) and I gain a climb speed of 30 feet."
});
AddRacialVariant("shifter", "longstride", {
	regExpSearch : /longstride/i,
	name : "Longstride shifter",
	source : ["UA:E", 2],
	plural : "Longstride shifters",
	improvements : "Longstride Shifter: +2 Dexterity;",
	scores : [0, 2, 0, 0, 0, 0],
	trait : "Longstride Shifter (+2 Dexterity)\nShifting:\n   On my turn, I can shift as a bonus action. Shifting lasts for 1 minute or until I end it on my turn as a bonus action. I must finish a short rest before I can shift again.\n   While shifted, I gain temporary hit points equal to my level + my Constitution modifier (minimum of 1) and I can use the Dash action as a bonus action."
});
AddRacialVariant("shifter", "longtooth", {
	regExpSearch : /(longtooth|longteeth)/i,
	name : "Longtooth shifter",
	source : ["UA:E", 2],
	plural : "Longtooth shifters",
	weapons : ["longtooth"],
	improvements : "Longtooth Shifter: +1 Strength, +1 Dexterity;",
	scores : [1, 1, 0, 0, 0, 0],
	trait : "Longtooth Shifter (+1 Strength, +1 Dexterity)\nShifting: On my turn, I can shift as a bonus action. Shifting lasts for 1 minute or until I end it on my turn as a bonus action. I must finish a short rest before I can shift again. While shifted, I gain temporary hit points equal to my level + my Constitution modifier (minimum of 1) and, as an action, I can make can make a bite attack. This is a melee weapon attack that uses Strength and deals 1d6 piercing damage. If this attack hits a target that is my size or smaller, the target is also grappled."
});
AddRacialVariant("shifter", "razorclaw", {
	regExpSearch : /razorclaw/i,
	name : "Razorclaw shifter",
	source : ["UA:E", 2],
	plural : "Razorclaw shifters",
	weapons : ["razorclaw"],
	improvements : "Razorclaw Shifter: +2 Dexterity;",
	scores : [0, 2, 0, 0, 0, 0],
	trait : "Razorclaw Shifter (+2 Dexterity)\nShifting:\n   On my turn, I can shift as a bonus action. Shifting lasts for 1 minute or until I end it on my turn as a bonus action. I must finish a short rest before I can shift again.\n   While shifted, I gain temporary hit points equal to my level + my Constitution modifier (minimum of 1) and, as a bonus action, I can make an unarmed strike that can use my Dexterity for the attack roll and damage, dealing slashing damage."
});
AddRacialVariant("shifter", "wildhunt", {
	regExpSearch : /wildhunt/i,
	name : "Wildhunt shifter",
	source : ["UA:E", 3],
	plural : "Wildhunt shifters",
	improvements : "Wildhunt Shifter: +1 Dexterity, +1 Wisdom;",
	scores : [0, 1, 0, 0, 1, 0],
	trait : "Wildhunt Shifter (+1 Dexterity, +1 Wisdom)\nShifting:\n   On my turn, I can shift as a bonus action. Shifting lasts for 1 minute or until I end it on my turn as a bonus action. I must finish a short rest before I can shift again.\n   While shifted, I gain temporary hit points equal to my level + my Constitution modifier (minimum of 1) and I gain advantage on all Wisdom-based checks and saving throws."
});

// Shifter weapons
WeaponsList["longtooth"] = {
	regExpSearch : /\blongtooth\b/i,
	name : "Longtooth",
	source : ["UA:E", 2],
	ability : 1,
	type : "Natural",
	damage : [1, 6, "piercing"],
	range : "Melee",
	description : "Only while shifted; Target up to my size is grappled",
	abilitytodamage : true
};
WeaponsList["razorclaw"] = {
	regExpSearch : /\brazorclaw\b/i,
	name : "Razorclaw",
	source : ["UA:E", 2],
	ability : 1,
	type : "Natural",
	damage : [1, "", "slashing"],
	range : "Melee",
	description : "Only while shifted, use instead of unarmed strike: Can use as bonus action; Finesse",
	monkweapon : true,
	abilitytodamage : true
};

// 12 variants of the Dragonmark feat
FeatsList["dragonmark [detection]"] = {
	name : "Dragonmark [Detection]",
	source : ["UA:E", 6],
	description : "I learn the Mage Hand cantrip. I can also cast Detect Magic, Detect Thoughts (from 5th level onwards), and Clairvoyance (from 9th level onwards), each once per long rest. Wisdom is my spellcasting ability for these.",
	spellcastingBonus : {
		name : "Dragonmark",
		spellcastingAbility : 5,
		spells : ["mage hand", "detect magic", "detect thoughts", "clairvoyance"],
		selection : ["mage hand", "detect magic", "detect thoughts", "clairvoyance"],
		times : [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
		oncelr : true
	}
};
FeatsList["dragonmark [finding]"] = {
	name : "Dragonmark [Finding]",
	source : ["UA:E", 6],
	description : "I learn the Mage Hand cantrip. I can also cast Identify, Locate Object (from 5th level onwards), and Clairvoyance (from 9th level onwards), each once per long rest. Wisdom is my spellcasting ability for these.",
	spellcastingBonus : {
		name : "Dragonmark",
		spellcastingAbility : 5,
		spells : ["mage hand", "identify", "locate object", "clairvoyance"],
		selection : ["mage hand", "identify", "locate object", "clairvoyance"],
		times : [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
		oncelr : true
	}
};
FeatsList["dragonmark [handling]"] = {
	name : "Dragonmark [Handling]",
	source : ["UA:E", 6],
	description : "I learn the Druidcraft cantrip. I can also cast Speak with Animals, Beast Sense (from 5th level onwards), and Conjure Animals (from 9th level onwards), each once per long rest. Wisdom is my spellcasting ability for these.",
	spellcastingBonus : {
		name : "Dragonmark",
		spellcastingAbility : 5,
		spells : ["druidcraft", "speak with animals", "beast sense", "conjure animals"],
		selection : ["druidcraft", "speak with animals", "beast sense", "conjure animals"],
		times : [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
		oncelr : true
	}
};
FeatsList["dragonmark [healing]"] = {
	name : "Dragonmark [Healing]",
	source : ["UA:E", 6],
	description : "I learn the Spare the Dying cantrip. I can also cast Cure Wounds, Lesser Restoration (from 5th level onwards), and Revivify (from 9th level onwards), each once per long rest. Wisdom is my spellcasting ability for these.",
	spellcastingBonus : {
		name : "Dragonmark",
		spellcastingAbility : 5,
		spells : ["spare the dying", "cure wounds", "lesser restoration", "revivify"],
		selection : ["spare the dying", "cure wounds", "lesser restoration", "revivify"],
		times : [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
		oncelr : true
	}
};
FeatsList["dragonmark [hospitality]"] = {
	name : "Dragonmark [Hospitality]",
	source : ["UA:E", 6],
	description : "I learn the Friends cantrip. I can also cast Unseen Servant, Rope Trick (from 5th level onwards), and Leomund's Tiny Hut (from 9th level onwards), each once per long rest. Charisma is my spellcasting ability for these.",
	spellcastingBonus : {
		name : "Dragonmark",
		spellcastingAbility : 6,
		spells : ["friends", "unseen servant", "rope trick", "leomund's tiny hut"],
		selection : ["friends", "unseen servant", "rope trick", "leomund's tiny hut"],
		times : [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
		oncelr : true
	}
};
FeatsList["dragonmark [making]"] = {
	name : "Dragonmark [Making]",
	source : ["UA:E", 6],
	description : "I learn the Mending cantrip. I can also cast Identify, Magic Weapon (from 5th level onwards), and Fabricate (from 9th level onwards), each once per long rest. Intelligence is my spellcasting ability for these.",
	spellcastingBonus : {
		name : "Dragonmark",
		spellcastingAbility : 4,
		spells : ["mending", "identify", "magic weapon", "fabricate"],
		selection : ["mending", "identify", "magic weapon", "fabricate"],
		times : [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
		oncelr : true
	}
};
FeatsList["dragonmark [passage]"] = {
	name : "Dragonmark [Passage]",
	source : ["UA:E", 6],
	description : "I learn the Light cantrip. I can also cast Expeditious Retreat, Misty Step (from 5th level onwards), and Teleportation Circle (from 9th level onwards), each once per long rest. Intelligence is my spellcasting ability for these.",
	spellcastingBonus : {
		name : "Dragonmark",
		spellcastingAbility : 4,
		spells : ["light", "expeditious retreat", "misty step", "teleportation circle"],
		selection : ["light", "expeditious retreat", "misty step", "teleportation Circle"],
		times : [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
		oncelr : true
	}
};
FeatsList["dragonmark [scribing]"] = {
	name : "Dragonmark [Scribing]",
	source : ["UA:E", 6],
	description : "I learn the Message cantrip. I can also cast Comprehend Languages, Sending (from 5th level onwards), and Tongues (from 9th level onwards), each once per long rest. Intelligence is my spellcasting ability for these.",
	spellcastingBonus : {
		name : "Dragonmark",
		spellcastingAbility : 4,
		spells : ["message", "comprehend languages", "sending", "tongues"],
		selection : ["message", "comprehend languages", "sending", "tongues"],
		times : [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
		oncelr : true
	}
};
FeatsList["dragonmark [sentinel]"] = {
	name : "Dragonmark [Sentinel]",
	source : ["UA:E", 6],
	description : "I learn the Blade Ward cantrip. I can also cast Compelled Duel, Blur (from 5th level onwards), and Protection from Energy (from 9th level onwards), each once per long rest. Wisdom is my spellcasting ability for these.",
	spellcastingBonus : {
		name : "Dragonmark",
		spellcastingAbility : 5,
		spells : ["blade ward", "compelled duel", "blur", "protection from energy"],
		selection : ["blade ward", "compelled duel", "blur", "protection from energy"],
		times : [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
		oncelr : true
	}
};
FeatsList["dragonmark [shadow]"] = {
	name : "Dragonmark [Shadow]",
	source : ["UA:E", 6],
	description : "I learn the Dancing Lights cantrip. I can also cast Disguise Self, Darkness (from 5th level onwards), and Nondetection (from 9th level onwards), each once per long rest. Charisma is my spellcasting ability for these.",
	spellcastingBonus : {
		name : "Dragonmark",
		spellcastingAbility : 6,
		spells : ["dancing lights", "disguise self", "darkness", "nondetection"],
		selection : ["dancing lights", "disguise self", "darkness", "nondetection"],
		times : [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
		oncelr : true
	}
};
FeatsList["dragonmark [storm]"] = {
	name : "Dragonmark [Storm]",
	source : ["UA:E", 6],
	description : "I learn the Shocking Grasp cantrip. I can also cast Fog Cloud, Gust of Wind (from 5th level onwards), and Sleet Storm (from 9th level onwards), each once per long rest. Intelligence is my spellcasting ability for these.",
	spellcastingBonus : {
		name : "Dragonmark",
		spellcastingAbility : 4,
		spells : ["shocking grasp", "fog cloud", "gust of wind", "sleet storm"],
		selection : ["shocking grasp", "fog cloud", "gust of wind", "sleet storm"],
		times : [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
		oncelr : true
	}
};
FeatsList["dragonmark [warding]"] = {
	name : "Dragonmark [Warding]",
	source : ["UA:E", 6],
	description : "I learn the Resistance cantrip. I can also cast Alarm, Arcane Lock (from 5th level onwards), and Magic Circle (from 9th level onwards), each once per long rest. Intelligence is my spellcasting ability for these.",
	spellcastingBonus : {
		name : "Dragonmark",
		spellcastingAbility : 4,
		spells : ["resistance", "alarm", "arcane lock", "magic circle"],
		selection : ["resistance", "alarm", "arcane lock", "magic circle"],
		times : [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
		oncelr : true
	}
};

// Adds a subclass for the Wizard, called "Tradition of the Artificer"
AddSubClass("wizard", "artificer", {
	regExpSearch : /^((?=.*(wizard|mage|magus))(?=.*artificer))|(?=.*infuser).*$/i,
	subname : "Tradition of the Artificer",
	source : ["UA:E", 3],
	fullname : "Wizard (Artificer)",
	features : {
		"subclassfeature2" : {
			name : "Infuse Potions",
			source : ["UA:E", 3],
			minlevel : 2,
			description : "\n   " + "I can produce magic potions if I spend 10 minutes and expend a spell slot" + "\n   " + "I can not regain the spell slot until the potion is consumed or a week has passed",
			additional : ["", "3 potions", "3 potions", "3 potions", "3 potions", "3 potions", "3 potions", "3 potions", "3 potions", "4 potions", "4 potions", "4 potions", "4 potions", "4 potions", "4 potions", "4 potions", "4 potions", "4 potions", "4 potions", "4 potions"]
		},
		"subclassfeature2.1" : {
			name : "Infuse Scrolls",
			source : ["UA:E", 4],
			minlevel : 2,
			description : "\n   " + "I can produce a scroll after a short rest if I spend 10 minutes and my Arcane Recovery" + "\n   " + "I subtract the spell's level from the levels worth of slots I regain using Arcane Recovery" + "\n   " + "This reduction applies till the scroll is used and I finish a long rest",
			additional : ["", "1 scroll", "1 scroll", "1 scroll", "1 scroll", "1 scroll", "1 scroll", "1 scroll", "1 scroll", "2 scrolls", "2 scrolls", "2 scrolls", "2 scrolls", "2 scrolls", "2 scrolls", "2 scrolls", "2 scrolls", "2 scrolls", "2 scrolls", "2 scrolls"]
		},
		"subclassfeature6" : {
			name : "Infuse Weapons and Armor",
			source : ["UA:E", 4],
			minlevel : 6,
			description : "\n   " + "I can spend 10 minutes to produce a magic weapon, armor, a shield, or ammunition" + "\n   " + "The item retains its magic for 8 hours and the spell slot I expend is:" + "\n   " + "2nd: +1 ammunition (20 pieces), 3rd: +1 weapon or +1 shield, 4th: +1 armor," + "\n   " + "5th: +2 weapon or +2 ammunition (20 pieces), 6th: +3 armor.",
			additional : ["", "", "", "", "", "1 weapon or armor", "1 weapon or armor", "1 weapon or armor", "1 weapon or armor", "2 weapons or armor", "2 weapons or armor", "2 weapons or armor", "2 weapons or armor", "2 weapons or armor", "2 weapons or armor", "2 weapons or armor", "2 weapons or armor", "2 weapons or armor", "2 weapons or armor", "2 weapons or armor"]
		},
		"subclassfeature10" : {
			name : "Superior Artificer",
			source : ["UA:E", 4],
			minlevel : 10,
			description : "\n   " + "I can create one additional scroll, potion, weapon, or armor when I use Infuse"
		},
		"subclassfeature14" : {
			name : "Master Artificer",
			source : ["UA:E", 4],
			minlevel : 14,
			description : "\n   " + "I can produce a variety of magic items from Tables A and B from the DMG" + "\n   " + "It takes 1 week for such an item and I cannot do it again for a month",
			usages : 1,
			recovery : "Month"
		}
	}
});
var iFileName = "UA_20150406_Modifying-Classes.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Unearthed Arcana: Modifying Classes article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:MC"] = {
	name : "Unearthed Arcana: Modifying Classes",
	abbreviation : "UA:MC",
	group : "Unearthed Arcana",
	url : "http://media.wizards.com/2015/downloads/dnd/UA3_ClassDesignVariants.pdf",
	date : "2015/04/06"
};
// Also needs the PHB source, as the spell-less ranger uses stuff from there
if (!SourceList.P) {
	SourceList.P = {
		name : "Player's Handbook",
		abbreviation : "PHB",
		group : "Primary Sources",
		url : "http://dnd.wizards.com/products/tabletop-games/rpg-products/rpg_playershandbook",
		date : "2014/08/19"
	};
};

// Adds a subclass for the Sorcerer, called "Favored Soul", but only have it added at the very end, after all cleric subclasses have been defined
RunFunctionAtEnd(function() {
	var SorcererSubclassFavoredSoul = AddSubClass("sorcerer", "favored soul", {
		regExpSearch : /^(?=.*favou?red)(?=.*soul).*$/i,
		subname : "Favored Soul",
		source : ["UA:MC", 8],
		fullname : "Favored Soul",
		attacks : [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
		features : {
			"subclassfeature1" : {
				name : "Bonus Proficiencies",
				source : ["UA:MC", 9],
				minlevel : 1,
				description : "\n   " + "I gain proficiency with light armor, medium armor, shields, and simple weapons",
				armor : [true, true, false, true],
				weapons : [true, false]
			},
			"subclassfeature1.1" : {
				name : "Chosen of the Gods",
				source : ["UA:MC", 8],
				minlevel : 1,
				description : "\n   " + "Choose a Cleric Domain using the \"Choose Feature\" button above" + "\n   " + "I add the chosen domain's spells to my known spells, when they are of a level I can cast" + "\n   " + "These count as sorcerer spells, but do not count against the number of spells I can know",
				choices : []
			},
			"subclassfeature14" : {
				name : "Divine Wings",
				source : ["UA:MC", 8],
				minlevel : 14,
				description : "\n   " + "As a bonus action, unless armor is in the way, I can sprout dragon wings from my back" + "\n   " + "I gain a fly speed equal to my current speed until I dismiss the wings as a bonus action",
				action : ["bonus action", " (start/stop)"],
				speed : { fly : { spd : "walk", enc : "walk" } }
			},
			"subclassfeature18" : {
				name : "Power of the Chosen",
				source : ["UA:MC", 8],
				minlevel : 18,
				description : "\n   " + "When I cast a spell I gained from the Chosen of the Gods class feature, I heal myself" + "\n   " + "I regain a number of HP equal to my Charisma modifier (minimum 1) + the spell's level"
			}
		}
	});
	// Adding all cleric domain spells to the options of the first level ability "Chosen of the Gods"
	var FSfeat = ClassSubList[SorcererSubclassFavoredSoul].features["subclassfeature1.1"];
	for (var i = 0; i < ClassList.cleric.subclasses[1].length; i++) {
		var cDomain = ClassSubList[ClassList.cleric.subclasses[1][i]];
		if (cDomain && cDomain.spellcastingExtra) {
			var eSpells = eval(cDomain.spellcastingExtra.toSource());
			eSpells[100] = "AddToKnown";
			var dSource = parseSource(cDomain.source);
			if (!dSource) dSource = parseSource(cDomain.features["subclassfeature1"].source);
			if (!dSource) dSource = [["UA:MC", 8]];
			
			var suffix = 1;
			var entryDoNm = cDomain.subname;
			while (FSfeat.choices.indexOf(entryDoNm) !== -1) {
				suffix += 1;
				entryDoNm = cDomain.subname + " (" + suffix + ")";
			};
			FSfeat.choices.push(entryDoNm);
			FSfeat[entryDoNm.toLowerCase()] = {
				name : "Chosen of the Gods: " + cDomain.subname,
				source : dSource,
				spellcastingExtra : eSpells,
				description : "\n   " + "I add the " + cDomain.subname.toLowerCase() + " spells to my known spells, if they are of a level I can cast" + "\n   " + "These count as sorcerer spells, but do not count against the number of spells I can know"
			};
		};
	};
});

// A version of the ranger, the spell-less ranger
ClassList["spell-less ranger"] = {
	regExpSearch : /^(?=.*spell.?less)((?=.*(ranger|strider))|((?=.*(nature|natural))(?=.*(knight|fighter|warrior|warlord|trooper)))).*$/i,
	name : "Spell-less Ranger",
	source : ["UA:MC", 6],
	primaryAbility : "\n \u2022 Spell-less Ranger: Dexterity and Wisdom;",
	abilitySave : 1,
	abilitySaveAlt : 2,
	prereqs : "\n \u2022 Spell-less Ranger: Dexterity 13 and Wisdom 13;",
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	die : 10,
	saves : ["Str", "Dex"],
	skills : ["\n\n" + toUni("Spell-less Ranger") + ": Choose three from Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, and Survival", "\n\n" + toUni("Multiclass Spell-less Ranger") + ": Choose one from Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, and Survival"],
	armor : [
		[true, true, false, true],
		[true, true, false, true]
	],
	weapons : [
		[true, true],
		[true, true]
	],
	equipment : "Spell-less Ranger starting equipment:\n \u2022 Scale mail -or- leather armor;\n \u2022 Two shortswords -or- two simple melee weapons;\n \u2022 A dungeoneer's pack -or- an explorer's pack;\n \u2022 A longbow and a quiver of 20 arrows.\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses : ["Ranger Archetype", []],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	features : {
		"favored enemy" : ClassList.ranger.features["favored enemy"],
		"natural explorer" : ClassList.ranger.features["natural explorer"],
		"combat superiority" : {
			name : "Combat Superiority",
			source : ["UA:MC", 6],
			minlevel : 2,
			description : "\n   " + "I gain a number of superiority dice that I can use to fuel special Maneuvers" + "\n   " + "I regain all superiority dice after a short rest",
			additional : "d8",
			usages : levels.map( function(n) {
				return n < 2 ? "" : n < 9 ? 4 : n < 17 ? 5 : 6;
			}),
			recovery : "short rest"
		},
		"combat maneuvers" : {
			name : "Combat Maneuvers",
			source : ["UA:MC", 6],
			minlevel : 2,
			description : "\n   " + "Use the \"Choose Features\" button above to add a Maneuver to the third page" + "\n   " + "I can use a Maneuver by expending a superiority die (only one Maneuver per attack)",
			additional : levels.map( function(n) {
				if (n < 2) return "";
				return (n < 5 ? 2 : n < 9 ? 3 : n < 13 ? 4 : n < 17 ? 5 : 6) + " maneuvers known";
			}),
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
				description : "\n   " + "As a bonus action, I can feint to gain adv. on my next attack against a target within 5 ft" + "\n   " + "If the attack hits, I add the superiority die to my attack's damage",
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
		"fighting style" : ClassList.ranger.features["fighting style"],
		"poultices" : {
			name : "Poultices",
			source : ["UA:MC", 7],
			minlevel : 3,
			description : desc([
				"In 1 hour, I can create a number of poultices equal to my Wisdom mod (min 1)",
				"The amount of poultices I have with me cannot exceed my Wisdom mod (min 1)",
				"I can applying a poultice in 1 minute, healing a creature; Poultices last for 24 hours"
			]),
			additional : levels.map( function(n) {
				if (n < 3) return "";
				return "heals " + Math.ceil(n/2) + "d6";
			})
		},
		"primeval awareness" : {
			name : "Primeval Awareness",
			source : ["UA:MC", 6],
			minlevel : 3,
			description : "\n   " + "As an action, I can focus my awareness for 1 min, once per short rest" + "\n   " + "Out to 1 mile (6 in favored terrain), I sense if certain types of creatures are present",
			additional : "aber/celest/drag/elem/fey/fie/und",
			action : ["action", ""],
			usages : 1,
			recovery : "short rest"
		},
		"subclassfeature3" : {
			name : "Ranger Archetype",
			source : ["UA:MC", 6],
			minlevel : 3,
			description : "\n   " + "Choose a Ranger Archetype you strive to emulate and put it in the \"Class\" field" + "\n   " + "Choose either Spell-less Beast Master or Spell-less Hunter"
		},
		"land's stride" : ClassList.ranger.features["land's stride"],
		"natural antivenom" : {
			name : "Natural Antivenom",
			source : ["UA:MC", 7],
			minlevel : 9,
			description : desc([
				"I have advantage on saves vs. poison and resistance to poison damage",
				"When I use a poultice, in addition to healing, I cure one poison effect on the creature"
			]),
			savetxt : { adv_vs : ["poison"] },
			dmgres : ["Poison"]
		},
		"hide in plain sight" : ClassList.ranger.features["land's stride"],
		"call natural allies" : {
			name : "Call Natural Allies",
			source : ["UA:MC", 7],
			minlevel : 13,
			description : desc([
				"While in an area that is my Favored Terrain, I can call on beasts within 1 mile to help",
				"The DM determines the beasts: 1\u00D7CR 2, 2\u00D7CR 1, 4\u00D7CR 1/2, or 8\u00D7CR 1/4",
				"They will fight alongside me, are friendly to me and my allies, and help up to 1 hour",
				"After I use these feature, I can't use it in the same general area again for 24 hours"
			])
		},
		"vanish" : ClassList.ranger.features["vanish"],
		"relentless" : {
			name : "Relentless",
			source : ["UA:MC", 7],
			minlevel : 17,
			description : "\n   " + "I regain one superiority die if I have no more remaining when I roll initiative"
		},
		"feral senses" : ClassList.ranger.features["feral senses"],
		"foe slayer" : ClassList.ranger.features["foe slayer"],
	}
};
// Create the Hunter subclass for the spell-less ranger
var SLR_Hunter = newObj(ClassSubList["ranger-hunter"]);
SLR_Hunter.source = ["UA:MC", 6];
delete SLR_Hunter.fullname;
SLR_Hunter.regExpSearch = /^(?=.*spell.?less)(?!.*(monster|barbarian|bard|cleric|druid|fighter|monk|paladin|rogue|sorcerer|warlock|wizard))(?=.*(hunter|huntress|hunts(wo)?m(e|a)n)).*$/i;
AddSubClass("spell-less ranger", "hunter", SLR_Hunter);
// Create the Beast Master subclass for the spell-less ranger
if (ClassSubList["ranger-beast master"]) {
	var SLR_Beast_Master = newObj(ClassSubList["ranger-beast master"]);
	SLR_Beast_Master.source = ["UA:MC", 6];
	delete SLR_Beast_Master.fullname;
	SLR_Beast_Master.regExpSearch = /^(?=.*spell.?less)(?=.*(animal|beast))((?=.*(master|ranger|strider))|((?=.*(nature|natural|green))(?=.*(knight|fighter|warrior|warlord|trooper)))).*$/i;
	SLR_Beast_Master.features["subclassfeature15"] = {
		name : "Beastly Coordination",
		source : ["UA:MC", 7],
		minlevel : 15,
		description : "\n   " + "My companion can, as a reaction, halve an attack's damage from an attacker that I see"
	};
	AddSubClass("spell-less ranger", "beast master", SLR_Beast_Master);
};
var iFileName = "UA_20150504_Waterborne-Adventures.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Unearthed Arcana: Waterborne Adventures article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:WA"] = {
	name : "Unearthed Arcana: Waterborne Adventures",
	abbreviation : "UA:WA",
	group : "Unearthed Arcana",
	url : "http://media.wizards.com/2015/downloads/dnd/UA_Waterborne_v3.pdf",
	date : "2015/05/04"
};

// New Fighting Style
AddFightingStyle(["fighter", "ranger", "paladin"], "Mariner", {
	name : "Mariner Fighting Style",
	source : ["UA:WA", 3],
	description : "\n   " + "While not wearing heavy armor or using a shield, I gain +1 AC and swim/climb speed" + "\n   " + "The swimming and climbing speeds are equal to my current walking speed",
	speed : {
		climb : { spd : "walk", enc : "walk" },
		swim : { spd : "walk", enc : "walk" }
	},
	eval : "AddACMisc(1, 'Mariner Fighting Style', 'When not wearing heavy armor or using a shield, the class feature Mariner Fighting Style gives a +1 bonus to AC', \"ACshield || tDoc.getField('Heavy Armor').isBoxChecked(0)\")",
	removeeval : "AddACMisc(0, 'Mariner Fighting Style', 'When not wearing heavy armor or using a shield, the class feature Mariner Fighting Style gives a +1 bonus to AC')"
});

// Add the Minotaur (Krynn) race and its three variants
RaceList["minotaur"] = {
	regExpSearch : /(minotaur|krynn)/i,
	name : "Minotaur",
	source : ["UA:WA", 1],
	plural : "Minotaurs",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common"],
	toolProfs : ["Navigator's tools", "Vehicles (water)"],
	weapons : ["horns"],
	age : " rearch adulthood around age 17 and live up to 150 years",
	height : " are well over 6 feet tall",
	weight : " weigh around 300 lb",
	heightMetric : " are well over 1,8 metres tall",
	weightMetric : " weigh around 135 kg",
	improvements : "Minotaur: +1 Strength, and either +1 Intelligence, +1 Wisdom, or another +1 Strength;",
	scores : [1, 0, 0, 0, 0, 0],
	trait : "Minotaur (+1 Strength, and either +1 Int, Wis, or Str) use \"Racial Options\" button\nHorns: I am proficient with my horns, a 1d10 piercing damage melee weapon that grant me advantage on shoving a creature, but not to avoid being shoved myself.\nGoring Rush: When taking a Dash action, I can make a horns attack as a bonus action.\nHammering Horns: When taking a melee Attack action, I can attempt to shove with my horns as a bonus action. I cannot use this to knock a creature prone.\nLabyrinthine Recall: I can perfectly recall any path I have travelled.",
	eval : "AddAction('bonus action', 'Horns attack (when taking dash action)', 'being a Minotaur'); AddAction('bonus action', 'Shove another (when taking attack action)', 'being a Minotaur');",
	removeeval : "RemoveAction('bonus action', 'Horns attack (when taking dash action)'); RemoveAction('bonus action', 'Shove another (when taking attack action)');"
};
AddRacialVariant("minotaur", "cunning", {
	regExpSearch : /(cunning|wisdom)/i,
	name : "Minotaur [Cunning]",
	source : ["UA:WA", 2],
	improvements : "Minotaur [cunning]: +1 Strength, +1 Wisdom;",
	scores : [1, 0, 0, 0, 1, 0],
	trait : "Minotaur [cunning] (+1 Strength, +1 Wisdom)\nHorns: I am proficient with my horns, a 1d10 piercing damage melee weapon that grant me advantage on shoving a creature, but not to avoid being shoved myself.\nGoring Rush: When taking a Dash action, I can make a horns attack as a bonus action.\nHammering Horns: When taking a melee Attack action, I can attempt to shove with my horns as a bonus action. I cannot use this to knock a creature prone.\nLabyrinthine Recall: I can perfectly recall any path I have travelled.",
});
AddRacialVariant("minotaur", "intellect", {
	regExpSearch : /(intellect|intelligence)/i,
	name : "Minotaur [Intellect]",
	source : ["UA:WA", 2],
	improvements : "Minotaur [intellect]: +1 Strength, +1 Intelligence;",
	scores : [1, 0, 0, 1, 0, 0],
	trait : "Minotaur [intellect] (+1 Strength, +1 Intelligence)\nHorns: I am proficient with my horns, a 1d10 piercing damage melee weapon that grant me advantage on shoving a creature, but not to avoid being shoved myself.\nGoring Rush: When taking a Dash action, I can make a horns attack as a bonus action.\nHammering Horns: When taking a melee Attack action, I can attempt to shove with my horns as a bonus action. I cannot use this to knock a creature prone.\nLabyrinthine Recall: I can perfectly recall any path I have travelled.",
});
AddRacialVariant("minotaur", "strength", {
	regExpSearch : /(strength|strong|\bmight\b)/i,
	name : "Minotaur [Strength]",
	source : ["UA:WA", 2],
	improvements : "Minotaur [strength]: +2 Strength;",
	scores : [1, 0, 0, 0, 0, 0],
	trait : "Minotaur [strength] (+2 Strength)\nHorns: I am proficient with my horns, a 1d10 piercing damage melee weapon that grant me advantage on shoving a creature, but not to avoid being shoved myself.\nGoring Rush: When taking a Dash action, I can make a horns attack as a bonus action.\nHammering Horns: When taking a melee Attack action, I can attempt to shove with my horns as a bonus action. I cannot use this to knock a creature prone.\nLabyrinthine Recall: I can perfectly recall any path I have travelled.",
});

// Minotaur weapon
WeaponsList["horns"] = {
	regExpSearch : /\bhorns?\b/i,
	name : "Horns",
	source : ["UA:WA", 1],
	ability : 1,
	type : "Natural",
	damage : [1, 10, "piercing"],
	range : "Melee",
	description : "Advantage on all checks made to shove a creature, but not to avoid being shoved myself",
	abilitytodamage : true
};
var iFileName = "UA_20150803_Modern-Magic.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Unearthed Arcana: Modern Magic article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:MM"] = {
	name : "Unearthed Arcana: Modern Magic",
	abbreviation : "UA:MM",
	group : "Unearthed Arcana",
	url : "http://media.wizards.com/2015/downloads/dnd/UA_ModernMagic.pdf",
	date : "2015/08/03"
};

// A subclass for the Cleric, called "City Domain"
AddSubClass("cleric", "city domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(urban|city)).*$/i,
	subname : "City Domain",
	source: ["UA:MM", 1],
	spellcastingExtra : ["comprehend languages", "remote access", "find vehicle", "heat metal", "lightning bolt", "protection from ballistics", "locate creature", "synchronicity", "commune with city", "shutdown"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Cantrip",
			source: ["UA:MM", 1],
			minlevel : 1,
			description : "\n   " + "I learn the On/Off cantrip if I didn't already know it",
			spellcastingBonus : {
				name : "Bonus Cantrip (On/Off)",
				spells : ["on/off"],
				selection : ["on/off"]
			}
		},
		"subclassfeature1.1" : {
			name : "Bonus Proficiency",
			source: ["UA:MM", 1],
			minlevel : 1,
			description : "\n   " + "I gain proficiency with sidearms and land vehicles",
			weapons : [false, false, ["Sidearms"]],
			toolProfs : ["Hacking tools"]
		},
		"subclassfeature1.2" : {
			name : "Heart of the City",
			source: ["UA:MM", 1],
			minlevel : 1,
			description : desc([
				"While I'm in a city, I can gain adv. on a Cha (Deception, Intimidation, Persuasion) check",
				"I'm considered proficient with the appropriate skill for that one check"
			]),
			usages: "Wisdom modifier per ",
			usagescalc: "event.value = Math.max(1, tDoc.getField('Wis Mod').value);",
			recovery: "long rest"
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Spirits of the City",
			source: ["UA:MM", 1],
			minlevel : 2,
			description : desc([
				"As an action, I make all city utilities in 30 ft either stop or work perfectly for 1 min",
				"Additionally, all hostiles within 30 ft must make a Cha save at the time of use",
				"If failed, it is either knocked prone or restrained (my choice) by city hazards",
				"A restrained target can escape with an Athletics or Acrobatics check vs. my spell DC"
			]),
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Block Watch",
			source: ["UA:MM", 2],
			minlevel : 6,
			description : "\n   " + "While in an urban environment, I'm proficient and expertise in Insight and Perception"
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source: ["UA:MM", 2],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
			additional : levels.map(function (n) {
				if (n < 8) return "";
				return "+" + (n < 14 ? 1 : 2) + "d8 psychic damage";
			}),
			calcChanges : {
				atkAdd : ["if (classes.known.cleric && classes.known.cleric.level > 7 && !isSpell) {fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 psychic damage'; }; ", "Once per turn, I can have one of my weapon attacks that hit do extra psychic damage."]
			}
		},
		"subclassfeature17" : {
			name : "Express Transit",
			source: ["UA:MM", 2],
			minlevel : 17,
			description : desc([
				"As an action, I can teleport from one mass transit site to another in the same city",
				"This works just like a Teleport spell; Mass transits sites include bus/train/subway stops"
			]),
			usages : 1,
			recovery : "short rest",
			action : ["action", ""]
		}
	}
});

// A subclass for the Warlock, called "Ghost in the Machine"
AddSubClass("warlock", "ghost in the machine", {
	regExpSearch : /^(?=.*warlock)(?=.*ghost)(?=.*(machine|computer)).*$/i,
	subname : "the Ghost in the Machine",
	source : ["UA:MM", 2],
	spellcastingExtra : ["infallible relay", "remote access", "arcane hacking", "digital phantom", "haywire", "invisibility to cameras", "conjure knowbot", "system backdoor", "shutdown", "synchronicity"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Proficiency",
			source : ["UA:MM", 2],
			minlevel : 1,
			description : "\n   " + "I am proficient with hacking tools and know the On/Off cantrip",
			toolProfs : ["Hacking tools"],
			spellcastingBonus : {
				name : "Bonus Cantrip (On/Off)",
				spells : ["on/off"],
				selection : ["on/off"]
			}
		},
		"subclassfeature1.1" : {
			name : "Information Surge",
			source : ["UA:MM", 2],
			minlevel : 1,
			description : desc([
				"As an action, I can cause a computerized device within 30 ft to make an Int save",
				"If the device is held/used by a creature, that creature makes the saving throw",
				"If the device is not held/used, it makes a save with a +0 modifier and disadvantage",
				"On a failed save, the device stops functioning until the end of my next turn"
			]),
			usages : 1,
			recovery : "short rest",
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Wire Walk",
			source : ["UA:MM", 3],
			minlevel : 6,
			description : desc([
				"As a bonus action, I can teleport through a hardwired network to a point I can see",
				"Both where I start and end must be a device, cable, or socket connected to the network"
			]),
			usages : 1,
			recovery : "long rest",
			action : ["bonus action", ""]
		},
		"subclassfeature10" : {
			name : "Personal Encryption",
			source : ["UA:MM", 3],
			minlevel : 10,
			description : desc([
				"I have adv. on saves vs. scrying, thought detection, and magics for learning my location",
				"If the effect doesn't let me a save, the user has disadv. on checks to use it on me, if any"
			])
		},
		"subclassfeature14" : {
			name : "Technovirus",
			source : ["UA:MM", 3],
			minlevel : 14,
			description : desc([
				"As an action, I make a melee spell attack to infect someone with a techno-organic virus",
				"The target takes 8d10 psychic damage, or half that with a successful Con save",
				"If it failed its save, I can use an action to cast Command on it while it remains infected",
				"It makes its save vs. this Command with disadvantage and I can cast it at any range",
				"It is infected until my next long rest; The virus can be removed with Lesser Restoration"
			]),
			usages : 1,
			recovery : "long rest",
			action : ["action", ""]
		}
	}
});

// A subclass for the Wizard, called "Technomancy" (contributed by AKA_Sketch)
AddSubClass("wizard", "technomancy", {
	regExpSearch: /technomancy|technomancer/i,
	subname: "Technomancy",
	source: ["UA:MM", 3],
	fullname: "Technomancer",
	features: {
		"subclassfeature2": {
			name: "Bonus Proficiencies",
			source: ["UA:MM", 3],
			minlevel: 2,
			description: "\n   " + "I gain proficiency with sidearms and hacking tools",
			weapons : [false, false, ["Sidearms"]],
			toolProfs : ["Hacking tools"]
		},
		"subclassfeature2.1": {
			name: "Technological Savant",
			source: ["UA:MM", 3],
			minlevel: 2,
			description: desc([
				"I can use a single tablet computer (or similar) instead of a spellbook",
				"Spells copied into this device cost half the normal amount of gp"
			])
		},
		"subclassfeature6": {
			name: "Program Spell",
			source: ["UA:MM", 4],
			minlevel: 6,
			description: desc([
				"I can cast a spell into a device of at least smartphone-level of computing power",
				"Variables of the spell are chosen at time of casting; I can have only one active at a time",
				"As an action within the next 48 hours, the spell can be cast from the device",
				"I can't activate a concentration spell in this way if I am concentrating on another spell"
			]),
			recovery: "long rest",
			usages: 1
		},
		"subclassfeature10": {
			name: "Online Casting",
			source: ["UA:MM", 4],
			minlevel: 10,
			description: desc([
				"I can cast a spell, that is not area-of-effect, through networked electronic devices",
				"If the spell requires sight/hearing, the audio/visual must be transmitted electronically",
				"The spell's range is determined from me to my device plus from the target to its device"
			]),
			usages: "Intelligence modifier per ",
			usagescalc: "event.value = Math.max(1, tDoc.getField('Int Mod').value);",
			recovery: "long rest"
		},
		"subclassfeature14": {
			name: "Chained Device",
			source: ["UA:MM", 4],
			minlevel: 14,
			description: "\n   " + "I can use a held/worn tablet computer to concentrate on a spell I cast instead of me" + "\n   " + "If the device is separated from me, turned off, or broken, the effect is lost",
			recovery: "long rest",
			usages: 1
		}
	}
});

// Add a new Warlock invocation
AddWarlockInvocation("Arcane Gunslinger (prereq: Pact of the Blade)", {
	name : "Arcane Gunslinger",
	description : desc([
		"My pact weapon can take firearm forms, and I can transform magical firearms into one"
	]),
	source : ["UA:MM", 3],
	prereqeval : "What('Class Features Remember').indexOf('warlock,pact boon,pact of the blade') !== -1",
	calcChanges : {
		atkAdd : ["if (isRangedWeapon &&  && (/\\bpact\\b/i).test(inputText)) {fields.Proficiency = true; fields.Description += thisWeapon[1] ? '' : (fields.Description ? '; ' : '') + 'Counts as magical'; }; ", "If I include the word 'Pact' in a firearm weapon's name, it gets treated as my Pact Weapon."]
	}
});

/*	Adds 14 spells that are, according to the article, 'suitable' for the Sorcerer, Warlock, or Wizard spell list. 1 of those is also considered suitable for the Paladin spell list.
	
	Strangely enough, adding all these spells to the Warlock spell list makes the Ghost in the Machine's Expanded Spell List class feature completely useless
*/
SpellsList["arcane hacking"] = {
	name : "Arcane Hacking",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["UA:MM", 5],
	ritual : false,
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "Self",
	components : "V,S,M\u0192",
	compMaterial : "Hacking tools",
	duration : "Conc, 1 h",
	description : "Adv on Int (hacking tools) vs. encryption; Use Int (hacking tools) to remove protective spells; See book",
	descriptionFull : "[Technomagic]\n   You gain advantage on all Intelligence checks using hacking tools to break software encryption or online security when using a foreign system. This spell also allows you to break 2nd-level and lower protective spells such as arcane lock or glyph of warding by making an Intelligence check using hacking tools against the spell save DC of the spell's caster." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, you can attempt to counteract a spell set to secure the foreign system if the spell's level is equal to or less than the level of the spell slot you used."
};
SpellsList["commune with city"] = {
	name : "Commune with City",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["UA:MM", 5],
	ritual : true,
	level : 5,
	school : "Div",
	time : "1 min",
	range : "Self",
	components : "V,S",
	duration : "Instantaneous",
	description : "Learn up to three facts about surrounding city, out to 1 mile above- or 600 ft underground; see B",
	descriptionFull : "You briefly become one with the city and gain knowledge of the surrounding area. Aboveground, this spell gives you knowledge of the area within 1 mile of you. In sewers and other underground settings, you gain knowledge of the area within 600 feet of you." + "\n   " + "You instantly gain knowledge of up to three facts of your choice about any of the following subjects as they relate to the area:" + "\n  \u2022 " + "Terrain and bodies of water" + "\n  \u2022 " + "Prevalent buildings, plants, animals, or intelligent creatures" + "\n  \u2022 " + "Powerful (CR 1 or higher) celestials, fey, fiends, elementals, or undead" + "\n  \u2022 " + "Influences from other planes of existence" + "\n  \u2022 " + "Electrical currents, wireless signals, and active transit lines and tracks" + "\n\n   " + "For example, you could determine the location of powerful undead in the area, the location of major sources of electrical power or interference, and the location of any nearby parks."
};
SpellsList["conjure knowbot"] = {
	name : "Conjure Knowbot",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["UA:MM", 5],
	ritual : false,
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "500 ft",
	components : "V,S",
	duration : "10 min",
	description : "Create bot in touched device; computer checks 1 bns instead of 1 a for me; SL5: 1 h, 1000 ft, see book",
	descriptionFull : "[Technomagic]\n   You touch a single computerized device or computer system to conjure a knowbot\u2014a partially sentient piece of software imprinted with vestiges of your own skills and computer abilities. For the duration of the spell, you can use a bonus action to have the knowbot execute a computer-related task that would normally require an action. The knowbot makes Intelligence ability checks using your ability score and proficiency bonuses (including your proficiency with hacking tools, if applicable)." + "\n   " + "You have a limited telepathic bond with the knowbot, out to a range of 500 feet from the device or system where the knowbot was conjured. If you move beyond this range, the knowbot disappears in 2d4 rounds, as if the duration of the spell had expired. Moving within range again immediately reestablishes the bond. The knowbot is bound to the system in which it was created, and it stays there until it is dismissed or the spell's duration expires." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the spell's duration increases to 1 hour. Additionally, your telepathic bond with the knowbot is effective out to a range of 1,000 feet, and if you leave the range of the bond, the knowbot continues performing its last directed task until the spell expires."
};
SpellsList["digital phantom"] = {
	name : "Digital Phantom",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["UA:MM", 6],
	ritual : false,
	level : 2,
	school : "Abjur",
	time : "1 a",
	range : "Self",
	components : "V,S,M",
	compMaterial : "A small piece of copper wire",
	duration : "Conc, 1 h",
	description : "You and any others in same computer system +10 on Int to avoid detection; leave no trace on exit",
	descriptionFull : "[Technomagic]\n   This spell works to actively hide your presence within a computer system. For the spell's duration, you and any other users you choose on your local network gain a +10 bonus to Intelligence checks to avoid detection by administrators, knowbots, tracking software, and the like. Whenever you and your chosen users leave any computer system you are working in while this spell is in effect, all trace of your previous presence in that system is erased."
};
SpellsList["find vehicle"] = {
	name : "Find Vehicle",
	classes : ["paladin", "sorcerer", "warlock", "wizard"],
	source : ["UA:MM", 6],
	ritual : false,
	level : 2,
	school : "Conj",
	time : "10 min",
	range : "30 ft",
	components : "V,S",
	duration : "Conc, 1 h",
	description : "Gain services of land spirit-vehicle; expertise, share spells with it; SL3: water, SL5: air, SL7: any; see B",
	descriptionFull : "You summon a spirit that assumes the form of a nonmilitary land vehicle of your choice, appearing in an unoccupied space within range. The vehicle has the statistics of a normal vehicle of its sort, though it is celestial, fey, or fiendish (your choice) in origin. The physical characteristics of the vehicle reflect its origin to some degree. For example, a fiendish SUV might be jet black in color, with tinted windows and a sinister-looking front grille." + "\n   " + "You have a supernatural bond with the conjured vehicle that allows you to drive beyond your normal ability. While driving the conjured vehicle, you are considered proficient with vehicles of its type, and you add double your proficiency bonus to ability checks related to driving the vehicle. While driving the vehicle, you can make any spell you cast that targets only you also target the vehicle." + "\n   " + "If the vehicle drops to 0 hit points, it disappears, leaving behind no physical form. You can also dismiss the vehicle at any time as an action, causing it to disappear." + "\n   " + "You can't have more than one vehicle bonded by this spell at a time. As an action, you can release the vehicle from its bond at any time, causing it to disappear." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, you can conjure a nonmilitary water vehicle large enough to carry six Medium creatures. When you cast this spell using a spell slot of 5th level or higher, you can conjure a nonmilitary air vehicle large enough to carry ten Medium creatures. When you cast this spell using a spell slot of 7th level or higher, you can conjure any type of vehicle, subject to the DM's approval."
};
SpellsList["haywire"] = {
	name : "Haywire",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["UA:MM", 7],
	ritual : false,
	level : 3,
	school : "Ench",
	time : "1 a",
	range : "90 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "10 ft(+5 ft/SL) rad all electronic devices go haywire, see B; for hold devices, crea gets to save",
	descriptionFull : "[Technomagic]\n   This spell plays havoc with electronic devices, making the use of such devices all but impossible. Each electronic device in a 10-foot-radius sphere centered on a point you choose within range is subject to random behavior while it remains within the area. A device not held by a creature is automatically affected. If an electronic device is held by a creature, that creature must succeed on a Wisdom saving throw or have the device affected by the spell." + "\n   " + "At the start of each of your turns, roll a d6 for each affected device to determine its behavior. Except where otherwise indicated, that behavior lasts until the start of your next turn while this spell is in effect." + "\n\n" + toUni("d10") + "\t" + toUni("Behavior") + "\n  " + "1\tThe device shuts down and must be restarted. Do not roll again for this device until it is restarted.\n2–4\tThe device does not function." + "\n  " + "5\tThe device experiences a power surge, causing an electric shock to the wielder (if any) and one random creature within 5 feet of the device. Each affected creature must make a Dexterity saving throw against your spell save DC, taking 6d6 lightning damage on a failed save, or half as much damage on a successful one." + "\n  " + "6\tThe device is usable as normal.\n" + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the radius of the sphere affected by the spell increases by 5 feet for each slot level above 3rd."
};
SpellsList["infallible relay"] = {
	name : "Infallible Relay",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["UA:MM", 7],
	ritual : false,
	level : 1,
	school : "Div",
	time : "1 min",
	range : "Self",
	components : "V,S,M",
	compMaterial : "A mobile phone",
	duration : "Conc, 10 min",
	save : "Cha",
	description : "1 known crea save or has to answer your call from phone within 100 ft of it; it has to save to end call",
	descriptionFull : "[Technomagic]\n   With this spell, you can target any creature with whom you have spoken previously, as long as the two of you are on the same plane of existence. When you cast the spell, the nearest functioning telephone or similar communications device within 100 feet of the target begins to ring. If there is no suitable device close enough to the target, the spell fails." + "\n   " + "The target must make a successful Charisma saving throw or be compelled to answer your call. Once the connection is established, the call is crystal clear and cannot be dropped until the conversation has ended or the spell's duration ends. You can end the conversation at any time, but a target must succeed on a Charisma saving throw to end the conversation."
};
SpellsList["invisibility to cameras"] = {
	name : "Invisibility to Cameras",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["UA:MM", 7],
	ritual : false,
	level : 3,
	school : "Illus",
	time : "1 a",
	range : "10 ft",
	components : "V,S,M",
	compMaterial : "A scrap of black paper",
	duration : "Conc, 1 min",
	description : "Up to 4 crea and anything they are wearing or carrying become undetectable for electornic sensors",
	descriptionFull : "[Technomagic]\n   Four creatures of your choice within range become undetectable to electronic sensors and cameras for the duration of the spell. Anything a target is wearing or carrying is likewise undetectable as long as it is on the target's person. The targets remain visible to vision."
};
SpellsList["on/off"] = {
	name : "On/Off",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["UA:MM", 7],
	ritual : false,
	level : 0,
	school : "Trans",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	description : "Activate or deactivate 1 electornic device that has a way of doing so accessible from the outside of it",
	descriptionFull : "[Technomagic]\n   This cantrip allows you to activate or deactivate any electronic device within range, as long as the device has a clearly defined on or off function that can be easily accessed from the outside of the device. Any device that requires a software- based shutdown sequence to activate or deactivate cannot be affected by on/off."
};
SpellsList["protection from ballistics"] = {
	name : "Protection from Ballistics",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["UA:MM", 8],
	ritual : false,
	level : 3,
	school : "Abjur",
	time : "1 a",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "A shell casing",
	duration : "Conc, 10 min",
	description : "1 crea gains resistance to nonmagical ballistic damage",
	descriptionFull : "This spell enchants the flesh of the target against the impact of bullets. Until the spell ends, the target has resistance to nonmagical ballistic damage."
};
SpellsList["remote access"] = {
	name : "Remote Access",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["UA:MM", 8],
	ritual : false,
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "10 min",
	description : "You can use any electronic device within range as if it were in your hands",
	descriptionFull : "[Technomagic]\n   You can use any electronic device within range as if it were in your hands. This is not a telekinesis effect. Rather, this spell allows you to simulate a device's mechanical functions electronically. You are able to access only functions that a person using the device manually would be able to access. You can use remote access with only one device at a time."
};
SpellsList["shutdown"] = {
	name : "Shutdown",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["UA:MM", 8],
	ritual : false,
	level : 5,
	school : "Trans",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Con",
	description : "Shut down all electronic devices within range; if controlled/held by crea, it can save to keep active",
	descriptionFull : "[Technomagic]\n   This spell shuts down all electronic devices within range that are not wielded by or under the direct control of a creature. If an electronic device within range is used by a creature, that creature must succeed on a Constitution saving throw to prevent the device from being shut down. While the spell remains active, no electronic device within range can be started or restarted."
};
SpellsList["synchronicity"] = {
	name : "Synchronicity",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["UA:MM", 8],
	ritual : false,
	level : 4,
	school : "Ench",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Conc, 1 h",
	description : "1 crea not slowed by mundane delays, disadv on opportunity attacks to it, adv to Stealth and driving",
	descriptionFull : "The creature you touch feels reality subtly shifted to its favor while this spell is in effect." + "\n   " + "The target isn't inconvenienced by mundane delays of any sort. Traffic lights are always green, there's always a waiting elevator, and a taxi is always around the corner. The target can run at full speed through dense crowds, and attacks of opportunity provoked by the target's movement are made with disadvantage." + "\n   " + "Synchronicity grants advantage to Dexterity (Stealth) checks, since the target always finds a handy piece of cover available. Additionally, the target has advantage on all ability checks made to drive a vehicle." + "\n   " + "In the event that two or more creatures under the effect of synchronicity are attempting to avoid being inconvenienced by each other, the creatures engage in a contest of Charisma each time the effects of the spells would oppose each other."
};
SpellsList["system backdoor"] = {
	name : "System Backdoor",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["UA:MM", 8],
	ritual : false,
	level : 4,
	school : "Trans",
	time : "1 min",
	range : "Self",
	components : "V,S,M\u0192",
	compMaterial : "Hacking tools",
	duration : "Conc, 1 h",
	description : "Gain admin access to 1 system; defeats 3rd or lower technomancy spells; SL5+: defeats same or lower",
	descriptionFull : "[Technomagic]\n   This spell allows you to bypass system security in order to create a secure login on a foreign system. The login you create allows you administrator-level privileges in any computer system not enhanced through technomagic. The login defeats any technomagic spells of 3rd level or lower." + "\n   " + "Once the duration of the spell expires, the login and all privileges are wiped from the system." + "\n   " + "System logs still show the activity of the user, but the user identification cannot be found or traced." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, you are able to bypass technomagic spells if the spell's level is equal to or less than the level of the spell slot you used."
};
var iFileName = "UA_20151005_Prestige Classes and Rune Magic.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Unearthed Arcana: Prestige Classes and Rune Magic article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:PCRM"] = {
	name : "Unearthed Arcana: Prestige Classes and Rune Magic",
	abbreviation : "UA:PCRM",
	group : "Unearthed Arcana",
	url : "http://media.wizards.com/2015/downloads/dnd/UA_Rune_Magic_Prestige_Class.pdf",
	date : "2015/10/05"
};

// Adds a prestige class, called "Rune Scribe" (includes contributions by K.12)
ClassList["rune scribe"] = {
	regExpSearch : /^(?=.*rune)(?=.*scribe).*$/i,
	name : "Rune Scribe",
	source : ["UA:PCRM", 2],
	primaryAbility : "\n \u2022 Rune Scribe: Dexterity, Intelligence;",
	prereqs : "\n \u2022 Rune Scribe:\n   - Dexterity 13, Intelligence 13;\n   - Proficiency in the Arcana skill\n   - Complete a special task: You must find a rune and present it to an NPC rune scribe who accepts it in return for tutoring you in the ways of rune magic.",
	die : 8,
	improvements : levels.map(function (n) {return 0}),
	saves : ["", ""],
	skills : [""],
	toolProfs : {
		secondary : ["Calligrapher's Supplies", "Mason's Tools", "Woodcarver's Tools"]
	},
	armor : [
		[false, false, false, false]
	],
	weapons : [
		[false, false]
	],
	equipment : "",
	subclasses : ["", []],
	prestigeClassPrereq : 5,
	attacks : levels.map(function (n) {return 1}),
	spellcastingFactor : 1,
	features : {
		"rune lore" : {
			name : "Rune Lore",
			source : ["UA:PCRM", 3],
			minlevel : 1,
			description : desc([
				"I learn the basics of scribing runes, and can activate all properties of a master rune",
				"The first rune I master is the one I found to qualify to become a rune scribe",
				"To use any features of a master rune, I need to first attune to it just like a magic item",
				"Use the \"Choose Feature\" button above to add master runes to the third page"
			]),
			extraname : "Master Rune",
			extrachoices : ["Opal of the Ild Rune", "Orb of the Stein Rune", "Pennant of the Vind Rune", "Shard of the Kalt Rune"],	
			"opal of the ild rune" : {
				name : "Opal of the Ild Rune",
				source : ["UA:PCRM", 4],
				description : " [rare, requires attunement]" + desc([
					"- Ignite (simple): As an action, ignite touched flammable object; Fire extends 1 ft from it",
					"- Fire Tamer (simple): As an action, extinguish touched open flame up to 10-ft radius",
					"   I can expend a spell slot to extend that radius by 20 ft/SL",
					"- Fire's Friend (simple): While attuned, I have resistance to cold damage",
					"- Combustion (complex): As an action, I expend spell slot and touch a creature",
					"   The target automatically takes 1d10 + 1d10/SL fire damage",
					"- Flame Brand (complex): During a short rest, I can augment a weapon, or 20 ammo",
					"   The weapon or ammo deals fire damage; It lasts for 24 hours or until I use this again",
					"   I can expend a spell slot to also give the weapon a magic bonus of slot level dived by 3",
					"- Flame Stoker (complex): While attuned, I roll any fire damage twice and use the higher"
				]),
				dmgres : ["Cold"],
				eval : "AddAction('action', 'Ild Rune (Ignite, Fire Tamer, Combusion)', 'Opal of the Ild Rune');",
				removeeval : "RemoveAction('action', 'Ild Rune (Ignite, Fire Tamer, Combusion)');"
			},
			"orb of the stein rune" : {
				name : "Orb of the Stein Rune",
				source : ["UA:PCRM", 5],
				description : " [rare, requires attunement]" + desc([
					"- Indomitable Stand (simple): As an action, I gain abilities until I move",
					"   I have advantage on all ability checks and saving throws to resist being moved",
					"   Anyone moving within 10 ft makes a DC 12 Str save or has speed 0 until its next turn",
					"- Stone Soul (simple): While attuned, I cannot be petrified",
					"- Stone's Secrets (simple): As an action, I learn everybody's current location within 30 ft",
					"   They have to touch the same surface as I'm touching with my hand",
					"- Crushing Brand (complex): During a short rest, I can augment a bludgeoning weapon",
					"   The weapon's bludgeoning damage ignores resistances and immunities",
					"   If the weapon deals its maximum damage, the target is also knocked prone",
					"   I can expend a spell slot to also give the weapon a magic bonus of slot level dived by 3",
					"   These effects last for 24 hours or until I use Crushing Brand again",
					"- Earthen Step (complex): I can cast Meld Into Stone as a bonus action once per short rest",
					"- Overwhelming Bolt (complex): As an action, I expend spell slot and touch a creature",
					"   It takes 2d8+1d8/SL bludg. dmg and is prone; DC 12+SL Str save for half \u0026 not prone"
				]),
				eval : "AddAction('bonus action', 'Stein Rune (Earthen Step)', 'Orb of the Stein Rune'); AddAction('action', 'Stein Rune (Indomitable Stand, Secrets, Bolt)', 'Orb of the Stein Rune');",
				removeeval : "RemoveAction('bonus action', 'Stein Rune (Earthen Step)'); RemoveAction('action', 'Stein Rune (Indomitable Stand, Secrets, Bolt)');",
				savetxt : { immune : ["petrified"] },
				spellcastingBonus : {
					name : "Orb of the Stein Rune",
					spells : ["meld into stone"],
					selection : ["meld into stone"], 
					oncesr : true
				}
			},
			"pennant of the vind rune" : {
				name : "Pennant of the Vind Rune",
				source : ["UA:PCRM", 5],
				description : " [rare, requires attunement]" + desc([
					"- Comforting Wind (simple): While attuned, I can't suffocate or drown",
					"   Also, I gain advantage on saves against inhaled poisons, toxins, and similar effects",
					"- Wind Step (simple): As an action, I fly 20 ft, after which I fall if I'm still airborne",
					"- Wind's Grasp (simple): As a reaction when falling, I can take no damage from the fall",
					"- Howling Brand (complex): During a short rest, I can augment a ranged weapon",
					"   Its range is doubled and attacks with it do not suffer disadvantage due to range",
					"   I can expend a spell slot to also give the weapon a magic bonus of slot level dived by 3",
					"   These effects last for 24 hours or until I use Howling Brand again",
					"- Shrieking Bolt (complex): As an action, I expend spell slot to target a creature I can see",
					"   It 2d8+1d8/SL bludg. dmg \u0026 pushed 10 ft; DC 12+SL Str save for half \u0026 not pushed",
					"- Wind Walker (complex): I can cast Levitate as a bonus action once per short rest"
				]),
				eval : "AddAction('bonus action', 'Vind Rune (Wind Walker)', 'Pennant of the Vind Rune'); AddAction('action', 'Vind Rune (Wind Step, Shrieking Bolt)', 'Pennant of the Vind Rune'); AddAction('reaction', 'Vind Rune (Wind\\'s Grasp)', 'Pennant of the Vind Rune');",
				removeeval : "RemoveAction('bonus action', 'Vind Rune (Wind Walker)'); RemoveAction('action', 'Vind Rune (Wind Step, Shrieking Bolt)'); RemoveAction('reaction', 'Vind Rune (Wind Step, Shrieking Bolt)');",
				savetxt : { adv_vs : ["inhaled poison"] },
				spellcastingBonus : {
					name : "Pennant of the Vind Rune",
					spells : ["levitate"],
					selection : ["levitate"], 
					oncesr : true
				}
			},
			"shard of the kalt rune" : {
				name : "Shard of the Kalt Rune",
				source : ["UA:PCRM", 6],
				description : " [rare, requires attunement]" + desc([
					"- Frigid Touch (simple): As an action, I freeze water that I touch a 10-ft radius",
					"- Frost Friend (simple): While attuned, I have resistance to fire damage",
					"- Icy Mantle (simple): As an action, me or a creature I touch gains a protective mantle",
					"   The next time taking bludg., slash., pierc. damage, it absorbs the damage and falls apart",
					"- Freezing Bolt (complex): As an action, I expend spell slot and touch a creature",
					"   It takes 2d8+1d8/SL cold damage and its speed is 0 until the end of my next turn",
					"   If it succeeds on a DC 12+SL Con save, it takes only half damage and has normal speed",
					"- Ice Brand (complex):  During a short rest, I can augment a weapon, or 20 ammo pieces",
					"   The weapon or ammo deals cold damage; It lasts for 24 hours or until I use this again",
					"   I can expend a spell slot to also give the weapon a magic bonus of slot level dived by 3",
					"- Winter's Howl (complex): I can cast Sleet Storm as an action once per short rest"
				]),
				dmgres : ["Fire"],
				eval : "AddAction('action', 'Kalt Rune (Touch, Mantle, Bolt, Howl)', 'Shard of the Kalt Rune');",
				removeeval : "RemoveAction('action', 'Kalt Rune (Touch, Mantle, Bolt, Howl)');",
				spellcastingBonus : {
					name : "Shard of the Kalt Rune",
					spells : ["sleet storm"],
					selection : ["sleet storm"],
					oncesr : true
				}
			}
		},
		"runic magic" : {
			name : "Runic Magic",
			source : ["UA:PCRM", 3],
			minlevel : 1,
			description : "\n   " + "I obtain spell slots as if gaining a level in a full spellcasting class, but don't learn spells"
		},
		"runic discovery" : {
			name : "Runic Discovery",
			source : ["UA:PCRM", 3],
			minlevel : 2,
			description : desc([
				"I know a number of master runes which I can attune to, even if not in my possession",
				"Attuning or de-attuning in this manner can be done over the course of a short rest"
			]),
			additional : levels.map(function (n) {
				if (n < 2) return "";
				return (n < 3 ? 1 : n < 5 ? 2 : 3) + " known master runes";
			})
		},
		"living rune" : {
			name : "Living Rune",
			source : ["UA:PCRM", 3],
			minlevel : 4,
			description : desc([
				"I get 2 points that I can add to one or two of my ability scores as I see fit",
				"When I finish a long rest, I can re-allocate these point(s) from a single score to another"
			])
		},
		"rune mastery" : {
			name : "Rune Mastery",
			source : ["UA:PCRM", 3],
			minlevel : 5,
			description : "\n   " + "One rune I'm attuned to doesn't count toward the limit of magic items I can attune to"
		}
	}
};
var iFileName = "UA_20151102_Light,-Dark,-Underdark!.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Unearthed Arcana: Light, Dark, Underdark! article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:LDU"] = {
	name : "Unearthed Arcana: Light, Dark, Underdark!",
	abbreviation : "UA:LDU",
	group : "Unearthed Arcana",
	url : "http://media.wizards.com/2015/downloads/dnd/02_UA_Underdark_Characters.pdf",
	date : "2015/11/02"
};

// New Fighting Styles
AddFightingStyle(["fighter", "ranger", "paladin"], "Close Quarters Shooter", {
	name : "Close Quarters Shooting Fighting Style",
	source : ["UA:LDU", 1],
	description : "\n   " + "+1 bonus to attack rolls I make with ranged attacks" + "\n   " + "I don't have disadvantage when making a ranged attack while within 5 ft of a hostile" + "\n   " + "My ranged attacks ignore half and three-quarters cover against targets within 30 ft",
	calcChanges : {
		atkCalc : ["if (isRangedWeapon) {output.extraHit += 1; }; ", "My ranged weapons get a +1 bonus on the To Hit."]
	}
});
AddFightingStyle(["fighter", "ranger", "paladin"], "Tunnel Fighter", {
	name : "Tunnel Fighting Style",
	source : ["UA:LDU", 1],
	description : "\n   " + "As a bonus action, I enter a defensive stance that lasts until the start of my next turn" + "\n   " + "While I'm in this defensive stance I gain the following two benefits:" + "\n    - " + "I can make opportunity attacks without using my reaction" + "\n    - " + "I can make a melee attack as a reaction if a hostile moves >5 ft while in my reach",
	action : ["bonus action", ""]
});

// A subclass for the Ranger, called "Deep Stalker"
AddSubClass("ranger", "deep stalker", {
	regExpSearch : /^(?=.*deep)(?=.*stalker).*$/i,
	subname : "Deep Stalker",
	source : ["UA:LDU", 1],
	fullname : "Deep Stalker",
	features : {
		"subclassfeature3" : {
			name : "Underdark Scout",
			source : ["UA:LDU", 1],
			minlevel : 3,
			description : "\n   " + "In the first turn of combat I have +10 ft speed and +1 attack with the Attack action" + "\n   " + "All turns after that, I can take the Hide action as a bonus action at the end of my turn",
			action : ["bonus action", " (Hide at end of turn)"]
		},
		"subclassfeature3.1" : {
			name : "Deep Stalker Magic",
			source : ["UA:LDU", 2],
			minlevel : 3,
			description : "\n   " + "I have 90 ft darkvision and add a spell to my known spells at level 3, 5, 9, 13, and 15" + "\n   " + "These count as ranger spells, but do not count against the number of spells I can know",
			spellcastingExtra : ["disguise self", "rope trick", "glyph of warding", "greater invisibility", "seeming"].concat(new Array(95)).concat("AddToKnown"),
			vision : [["Darkvision", 90]]
		},
		"subclassfeature7" : {
			name : "Iron Mind",
			source : ["UA:LDU", 2],
			minlevel : 7,
			description : "\n   " + "I am proficient with Wisdom saving throws",
			saves : ["Wis"]
		},
		"subclassfeature11" : {
			name : "Stalker's Flurry",
			source : ["UA:LDU", 2],
			minlevel : 11,
			description : "\n   " + "Once during my turn when I miss an attack, I can immediately make an extra attack"
		},
		"subclassfeature15" : {
			name : "Stalker's Dodge",
			source : ["UA:LDU", 2],
			minlevel : 15,
			description : "\n   " + "As a reaction when I'm attacked without adv., I can impose disadv. on the attack roll",
			action : ["reaction", " (when attacked)"]
		}
	}
});

// A subclass for the Sorcerer, called "Shadow"
AddSubClass("sorcerer", "shadow sorcerer", {
	regExpSearch : /^(?=.*(sorcerer|witch))(?=.*shadow).*$/i,
	subname : "Shadow",
	source : ["UA:LDU", 2],
	fullname : "Shadow Sorcerer",
	features : {
		"subclassfeature1" : {
			name : "Eyes of the Dark",
			source : ["UA:LDU", 2],
			minlevel : 1,
			description : "\n   " + "I have 60 ft darkvision and can cast Darkness by spending 1 sorcery point" + "\n   " + "I can see through any darkness spell I cast using this ability",
			additional : "1 sorcery point",
			vision : [["Darkvision", 60]],
			action : ["action", " (1 sorcery point)"],
			spellcastingBonus : {
				name : "Eyes of the Dark",
				spells : ["darkness"],
				selection : ["darkness"],
				firstCol : 1
			}
		},
		"subclassfeature1.1" : {
			name : "Strength of the Grave",
			source : ["UA:LDU", 2],
			minlevel : 1,
			description : "\n   " + "When damage reduces me to 0 HP, that isn't radiant damage or a critical hit," + "\n   " + "I can make a Constitution save (DC 5 + damage taken) to drop to 1 HP instead"
		},
		"subclassfeature6" : {
			name : "Hound of Ill Omen",
			source : ["UA:LDU", 2],
			minlevel : 6,
			additional : "3 sorcery points",
			description : "\n   " + "As a bonus action, I target a creature I can see and summon a hound within 30 ft of it" + "\n   " + "The hound has all the stats of a medium sized dire wolf with the following exceptions:" + "\n    - " + "At the start of its turn, it automatically knows where the target is" + "\n    - " + "It can only move towards and make (opportunity) attack against the target" + "\n    - " + "It can move through other creatures and objects as if they were difficult terrain" + "\n    - " + "It take 5 force damage if it ends its turn inside an object" + "\n   " + "The target has disadvantage on saves vs. my spells while the hound is within 5 ft of it",
			action : ["bonus action", " (3 sorcery points)"]
		},
		"subclassfeature14" : {
			name : "Shadow Walk",
			source : ["UA:LDU", 3],
			minlevel : 14,
			description : "\n   " + "As a bonus action when I'm in dim light or darkness, I can teleport up to 120 ft" + "\n   " + "The destination has to be unoccupied, within line of sight, and in dim light or darkness",
			action : ["bonus action", ""]
		},
		"subclassfeature18" : {
			name : "Shadow Form",
			source : ["UA:LDU", 3],
			minlevel : 18,
			additional : "3 sorcery points",
			description : "\n   " + "As a bonus action, I transform into a shadow form for 1 minute" + "\n   " + "While transformed, I have resistance to all damage types except force damage" + "\n   " + "Also, I can move through other creatures and objects as if they were difficult terrain" + "\n   " + "I take 5 force damage if I end my turn inside an object",
			action : ["bonus action", " (3 sorcery points)"]
		}
	}
});

// A subclass for the Warlock, called "The Undying Light"
AddSubClass("warlock", "the undying light", {
	regExpSearch : /^(?=.*warlock)(?=.*light)(?=.*(immortal|undying|neverending|unending)).*$/i,
	subname : "the Undying Light",
	source : ["UA:LDU", 3],
	spellcastingExtra : ["burning hands", "flaming sphere", "daylight", "fire shield", "flame strike"],
	features : {
		"subclassfeature1" : {
			name : "Radiant Soul",
			source : ["UA:LDU", 3],
			minlevel : 1,
			description : "\n   " + "I add my Cha modifier to cantrips/spells I cast that deal fire or radiant damage" + "\n   " + "I have resistance to radiant damage and know the Light and Sacred Flame cantrips",
			spellcastingBonus : [{
				name : "Radiant Soul",
				spells : ["light"],
				selection : ["light"]
			}, {
				name : "Radiant Soul",
				spells : ["sacred flame"],
				selection : ["sacred flame"]
			}],
			dmgres : ["Radiant"],
			calcChanges : {
				atkCalc : ["if (isSpell && (/fire|radiant/i).test(fields.Damage_Type)) { output.extraDmg += What('Cha Mod'); }; ", "Cantrips and spells that deal fire or radiant damage get my Charisma modifier added to the damage."]
			}
		},
		"subclassfeature6" : {
			name : "Searing Vengeance",
			source : ["UA:LDU", 3],
			minlevel : 6,
			description : "\n   " + "When I would make a death saving throw, I can instead spring back to my feet" + "\n   " + "I immediately stand up and recover HP equal to half my current HP maximum" + "\n   " + "Also, all hostiles within 30 ft of me take 10 + Charisma modifier in radiant damage" + "\n   " + "Damaged creatures are blinded until the end of my next turn",
			usages : 1,
			recovery : "long rest"
		},
		"subclassfeature10" : {
			name : "Radiant Resilience",
			source : ["UA:LDU", 4],
			minlevel : 10,
			description : "\n   " + "When I finish a short or long rest, I and up to five allies gain temporary hit points" + "\n   " + "I get my warlock level + Cha mod, while my allies get half my warlock level + Cha mod"
		},
		"subclassfeature14" : {
			name : "Healing Light",
			source : ["UA:LDU", 4],
			minlevel : 14,
			description : "\n   " + "As a bonus action, I touch a creature and heal it by expending dice from my pool" + "\n   " + "I subtract the number of d6's used from my pool; I can expend up to 5d6 at a time" + "\n   " + "The target heals HP equal to the roll of the dice; I regain expended uses with a long rest",
			usages : "15d6 per ",
			usagescalc : "event.value = \"15d6\";",
			recovery : "long rest",
			action : ["bonus action", ""]
		}
	}
});
var iFileName = "UA_20151217_That-Old-Black-Magic.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Unearthed Arcana: That Old Black Magic article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:TOBM"] = {
	name : "Unearthed Arcana: That Old Black Magic",
	abbreviation : "UA:TOBM",
	group : "Unearthed Arcana",
	url : "http://media.wizards.com/2015/downloads/dnd/07_UA_That_Old_Black_Magic.pdf",
	date : "2015/12/17"
};

//adds a racial variant: the Abyssal Tiefling
var addAbyssalTiefling = function(){
	var tRace = {
		objname : "abyssal tiefling",
		replaceTraitTxt : ["+1 Intelligence, +2 Charisma", "+1 Constitution, +2 Charisma"],
		replaceNameTxt : ["tiefling", "abyssal tiefling"],
		regExpSearch : /^(?=.*abyssal)((?=.*tiefling)|(?=.*planetouched)(?=.*(hell|abyss|fiend|devil))).*$/i,
		name : "Abyssal tiefling",
		source : ["UA:TOBM", 1],
		plural : "Abyssal tieflings",
		sortname : "Tiefling, Abyssal",
		dmgres : "",
		improvements : "Abyssal Tiefling: +1 Constitution, +2 Charisma;",
		scores : [0, 0, 1, 0, 0, 2],
		trait : "Abyssal Tiefling (+1 Constitution, +2 Charisma)\nAbyssal Toughness: My hit point maximum increases with half the levels I have (min 1). Abyssal Arcana: After each long rest I gain randomly determined spellcasting ability (d6). This is a cantrip, and on both 3rd and 5th level a spell that I can cast once, at 2nd-level.\n1: (Dancing Lights, Burning Hands, Alter Self); 2: (True Strike, Charm Person, Darkness)" + (!typePF ? ";" : " ") + " 3: (Light, Magic Missile, Invisibility); 4: (Spare the Dying, Hideous Laughter, Mirror Image)" + (!typePF ? ";" : " ") + " 5: (Message, Cure Wounds, Levitate); 6: (Prestidigitation, Thunderwave, Spider Climb)",
		languageProfs : ["Common", "Abyssal"],
		spellcastingBonus : {
			name : "Abyssal Arcana (level 1)",
			spells : ["dancing lights", "true strike", "light", "message", "spare the dying", "prestidigitation"],
			atwill : true
		},
		features : {
			"abyssal fortitude" : {
				name : "Abyssal Fortitude",
				minlevel : 1,
				calcChanges : {
					hp : "extrahp += Math.max(1,Math.floor(totalhd/2)); extrastring += \"\\n + \" + Math.max(1,Math.floor(totalhd/2)) + \" from Abyssal Fortitude\";"
				}
			},
			"abyssal arcana (level 3)" : {
				name : "Abyssal Arcana (level 3)",
				minlevel : 3,
				usages : 1,
				recovery : "long rest",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Abyssal Arcana (level 3)",
					spells : ["burning hands", "charm person", "magic missile", "cure wounds", "tasha's hideous laughter", "thunderwave"],
					oncelr : true
				}
			},
			"abyssal arcana (level 5)" : {
				name : "Abyssal Arcana (level 5)",
				minlevel : 5,
				usages : 1,
				recovery : "long rest",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Abyssal Arcana (level 5)",
					spells : ["alter self", "darkness", "invisibility", "levitate", "mirror image", "spider climb"],
					oncelr : true
				}
			}
		}
	};
	//make a new RaceList object for each race
	RaceList[tRace.objname] = eval(RaceList.tiefling.toSource());
	for (var rFea in tRace) {
		if ((/objname|replaceTraitTxt|replaceNameTxt/).test(rFea)) continue;
		RaceList[tRace.objname][rFea] = tRace[rFea];
	};
	//now do the variants
	RaceList[tRace.objname].variants.forEach( function(nVar) {
		RaceSubList[tRace.objname + "-" + nVar] = eval(RaceSubList["tiefling-" + nVar].toSource());
		var thisVar = RaceSubList[tRace.objname + "-" + nVar];
		thisVar.trait = thisVar.trait.replace(tRace.replaceTraitTxt[0], tRace.replaceTraitTxt[1]);
		thisVar.trait = thisVar.trait.replace(tRace.replaceNameTxt[0].capitalize(), tRace.replaceNameTxt[1].capitalize());
		thisVar.name = thisVar.name.replace(tRace.replaceNameTxt[0], tRace.replaceNameTxt[1]);
		thisVar.plural = thisVar.plural.replace(tRace.replaceNameTxt[0], tRace.replaceNameTxt[1]);
	});
}();

/*	Adds 5 spells for summoning fiends to the Sorcerer and the Wizard spell lists
	
	This code was contributed by David
*/
SpellsList["conjure lesser demon"] = {
	name : "Conjure Lesser Demon",
	classes : ["sorcerer", "wizard"],
	source : ["UA:TOBM", 2],
	ritual : false,
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "A vial of blood from an intelligent humanoid killed within the past 24 hours",
	duration : "Conc, 1 h",
	description : "Summon 8 (16 at SL6, 32 at SL8) manes/dretches that are hostile to all non-demons, attacking nearest",
	descriptionFull : "You summon up to a total of eight manes or dretches that appear in unoccupied spaces you can see within range. A manes or dretch disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The demons are hostile to all creatures. Roll initiative for the summoned demons as a group, which has its own turns. The demons attack the nearest non-demons to the best of their ability." + "\n   " + "As part of casting the spell, you can scribe a circle on the ground with the blood used as a material component. The circle is large enough to encompass your space. The summoned demons cannot cross the circle or target anyone in it while the spell lasts. Using the material component in this manner consumes it." + AtHigherLevels + "When you cast this spell using a spell slot of 6th or 7th level, you summon sixteen demons. If you cast it using a spell slot of 8th or 9th level, you summon thirty-two demons."
};
SpellsList["conjure barlgura"] = {
	name : "Conjure Barlgura",
	classes : ["sorcerer", "wizard"],
	source : ["UA:TOBM", 2],
	ritual : false,
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "10 min",
	description : "Summon a barlgura that is hostile to all non-demons, attacking the nearest",
	descriptionFull : "You summon a barlgura that appears in an unoccupied space you can see within range. The barlgura disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The barlgura is hostile to all non-demons. Roll initiative for the barlgura, which has its own turns. At the start of its turn, it moves toward and attacks the nearest non-demon it can perceive. If two or more creatures are equally near, it picks one at random. If it cannot see any potential enemies, the barlgura moves in a random direction in search of foes." + "\n   " + "As part of casting the spell, you can scribe a circle on the ground using the blood of an intelligent humanoid slain within the past 24 hours. The circle is large enough to encompass your space. The summoned barlgura cannot cross the circle or target anyone in it while the spell lasts."
};
SpellsList["conjure hezrou"] = {
	name : "Conjure Hezrou",
	classes : ["sorcerer", "wizard"],
	source : ["UA:TOBM", 2],
	ritual : false,
	level : 7,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M\u2020",
	compMaterial : "Food worth at least 100 gp, which the spell consumes",
	duration : "Conc, 1 h",
	description : "Summon a hezrou that I might control as long as there is food; At half HP it leaves, see B (100gp cons.)",
	descriptionFull : "You summon a hezrou that appears in an unoccupied space you can see within range. The hezrou disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The hezrou's attitude depends on the value of the food used as a material component for this spell. Roll initiative for the hezrou, which has its own turns. At the start of the hezrou's turn, the DM makes a secret Charisma check on your behalf, with a bonus equal to the food's value divided by 20. The check DC starts at 10 and increases by 2 each round. You can issue orders to the hezrou and have it obey you as long as you succeed on the Charisma check." + "\n   " + "If the check fails, the spell no longer requires concentration and the demon is no longer under your control. The hezrou then focuses on devouring any corpses it can see. If there are no such meals at hand, it attacks the nearest creatures and eats anything it kills. If its hit points are reduced to below half its hit point maximum, it returns to the Abyss." + "\n   " + "As part of casting the spell, you can scribe a circle on the ground using the blood of an intelligent humanoid slain within the past 24 hours. The circle is large enough to encompass your space. The summoned hezrou cannot cross the circle or target anyone in it while the spell lasts."
};
SpellsList["conjure shadow demon"] = {
	name : "Conjure Shadow Demon",
	classes : ["sorcerer", "wizard"],
	source : ["UA:TOBM", 3],
	ritual : false,
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "A vial of blood from an intelligent humanoid killed within the past 24 hours",
	duration : "Conc, 1 h",
	description : "Summon a shadow demon that I control while not in bright light, can attack, and within 100 ft, see B",
	descriptionFull : "You summon a shadow demon that appears in an unoccupied space you can see within range. The shadow demon disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "Roll initiative for the shadow demon, which has its own turns. You can issue orders to the shadow demon, and it obeys you as long as it can attack a creature on each of its turns and does not start its turn in an area of bright light. If either of these conditions is not met, the shadow demon immediately makes a Charisma check contested by your Charisma check. If you fail the check, the spell no longer requires concentration and the demon is no longer under your control. The demon automatically succeeds on the check if it is more than 100 feet away from you." + "\n   " + "As part of casting the spell, you can scribe a circle on the ground using the blood of an intelligent humanoid slain within the past 24 hours. The circle is large enough to encompass your space. The summoned shadow demon cannot cross the circle or target anyone in it while the spell lasts."
};
SpellsList["conjure vrock"] = {
	name : "Conjure Vrock",
	classes : ["sorcerer", "wizard"],
	source : ["UA:TOBM", 3],
	ritual : false,
	level : 5,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M\u2020",
	compMaterial : "A gem worth at least 100 gp, which the spell consumes",
	duration : "Conc, 1 h",
	description : "Summon a vrock that I might control for some rounds, depending on gem value, see B (100gp cons.)",
	descriptionFull : "You summon a vrock that appears in an unoccupied space you can see within range. The vrock disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The vrock's attitude depends on the value of the gem used as a material component for this spell. Roll initiative for the vrock, which has its own turns. At the start of the vrock's turn, the DM makes a secret Charisma check on your behalf, with a bonus equal to the gem's value divided by 20. The check DC starts at 10 and increases by 2 each round. You can issue orders to the vrock and have it obey you as long as you succeed on the Charisma check." + "\n   " + "If the check fails, the spell no longer requires concentration and the vrock is no longer under your control. The vrock takes no actions on its next turn and uses its telepathy to tell any creature it can see that it will fight in exchange for treasure. The creature that gives the vrock the most expensive gem can command it for the next 1d6 rounds. At the end of that time, it offers the bargain again. If no one offers the vrock treasure before its next turn begins, it attacks the nearest creatures for 1d6 rounds before returning to the Abyss." + "\n   " + "As part of casting the spell, you can scribe a circle on the ground using the blood of an intelligent humanoid slain within the past 24 hours. The circle is large enough to encompass your space. The summoned vrock cannot cross the circle or target anyone in it while the spell lasts."
};
var iFileName = "UA_20160104_Kits-of-Old.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Unearthed Arcana: Kits of Old article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:KoO"] = {
	name : "Unearthed Arcana: Kits of Old",
	abbreviation : "UA:KoO",
	group : "Unearthed Arcana",
	url : "http://media.wizards.com/2015/downloads/dnd/04_UA_Classics_Revisited.pdf",
	date : "2016/01/04"
};

// Adds four subclasses, 2 for the bard, 2 for the fighter
AddSubClass("bard", "college of swords", {
	regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*\bswords?\b).*$/i,
	subname : "College of Swords",
	source : ["UA:KoO", 1],
	attacks : [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiencies",
			source : ["UA:KoO", 1],
			minlevel : 3,
			description : "\n   " + "I gain proficiency with medium armor and scimitars",
			armor : [false, true, false, false],
			weapons : [false, false, ["scimitar"]]
		},
		"subclassfeature3.1" : function () {
			var FSfea = newObj(FightingStyles.two_weapon);
			FSfea.source = ["UA:KoO", 1];
			FSfea.minlevel = 3;
			return FSfea;
		}(),
		"subclassfeature3.2" : {
			name : "Blade Flourish",
			source : ["UA:KoO", 1],
			minlevel : 3,
			description : "\n   " + "When I take the Attack action on my turn, I can do one of the following flourishes:" + "\n   " + "I have to use a dagger, longsword, rapier, scimitar, or shortsword while doing this" + "\n    - " + "Defensive Flourish [one Bardic Inspiration die]" + "\n       " + "As a bonus action, I add the die to my AC until the start of my next turn" + "\n    - " + "Trick Shooter's Flourish [one Bardic Inspiration die]" + "\n       " + "As a bonus action with a dagger ranged attack, I add the die to the attack roll" + "\n       " + "If the target is an unattended, inanimate object, the result of the die is doubled" + "\n    - " + "Unnerving Flourish [one Bardic Inspiration die]" + "\n       " + "As a bonus action when reducing a foe to 0 HP with a melee attack, I leave it alive" + "\n       " + "The target stays at 1 HP and is frightened of me for my Cha modifier in minutes" + "\n       " + "It must also make a Cha save at a DC of my spell save + the bardic inspiration die" + "\n       " + "If failed, it answers truthfully any questions I ask and obeys me while frightened",
			action : ["bonus action", " (one inspiration die)"]
		},
		"subclassfeature14" : {
			name : "Battle Magic",
			source : ["UA:KoO", 2],
			minlevel : 14,
			description : "\n   " + "When I use my action to cast a Bard spell, I can make one bonus action weapon attack",
			action : ["bonus action", " (with Bard spell)"]
		}
	}
});
AddSubClass("bard", "college of satire", {
	regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*satire).*$/i,
	subname : "College of Satire",
	source : ["UA:KoO", 2],
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiencies",
			source : ["UA:KoO", 2],
			minlevel : 3,
			description : "\n   " + "I gain proficiency with thieves' tools, sleight of hand, and one other skill of my choice",
			skills : ["Sleight of Hand"],
			skillstxt : "\n\n" + toUni("College of Satire") + ": Thieves' Tools, Sleight of Hand, and any one other skill.",
			toolProfs : [["Thieves' tools", "Dex"]]
		},
		"subclassfeature3.1" : {
			name : "Tumbling Fool",
			source : ["UA:KoO", 2],
			minlevel : 3,
			description : "\n   " + "As a bonus action, I tumble which gives the benefits of the Dash and Disengage actions" + "\n   " + "I also gain a climbing speed at my current speed and half damage from falling",
			action : ["bonus action", ""],
			speed : { climb : { spd : "walk", enc : "walk" } }
		},
		"subclassfeature6" : {
			name : "Fool's Insight",
			source : ["UA:KoO", 2],
			minlevel : 6,
			description : "\n   " + "I can cast Detect Thoughts, but on a save the target suffers an embarrassing social gaffe",
			usages : "Charisma modifier per ",
			usagescalc : "event.value = Math.max(1, this.getField(\"Cha Mod\").value);",
			recovery : "long rest",
			action : ["action", " (Detect Thoughts)"]
		},
		"subclassfeature14" : {
			name : "Fool's Luck",
			source : ["UA:KoO", 3],
			minlevel : 14,
			description : " [one bardic inspiration die]" + "\n   " + "When I fail an ability check, saving throw, or attack roll, I can add one inspiration die" + "\n   " + "If this turns the roll into a success, I have to note down the number rolled" + "\n   " + "I can't use this ability again until the DM subtracts the amount from a check or attack",
			usages : 1,
			recovery : "reset"
		}
	}
});
AddSubClass("fighter", "cavalier", {
	regExpSearch : /cavalier/i,
	subname : "Cavalier",
	source : ["UA:KoO", 3],
	fullname : "Cavalier",
	abilitySave : 1,
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiencies",
			source : ["UA:KoO", 3],
			minlevel : 3,
			description : "\n   " + "I gain proficiency with two skills or one skill and any one tool" + "\n   " + "For skills I can choose from Animal Handling, Insight, Performance, or Persuasion",
			choices : ["1 Skill and 1 Tool proficiencies", "2 Skill proficiencies"],
			"1 skill and 1 tool proficiencies" : {
				name : "Bonus Proficiencies",
				description : "\n   " + "I gain proficiency with one skill and any one tool of my choice" + "\n   " + "For the skill, I can choose Animal Handling, Insight, Performance, or Persuasion",
				skillstxt : "\n\n" + toUni("Cavalier") + ": Choose one from: Animal Handling, Insight, Performance, or Persuasion.",
				toolProfs : [["Any tool", 1]]
			},
			"2 skill proficiencies" : {
				name : "Bonus Proficiencies",
				description : "\n   " + "I gain two skill proficiencies: Animal Handling, Insight, Performance, or Persuasion",
				skillstxt : "\n\n" + toUni("Cavalier") + ": Choose two from: Animal Handling, Insight, Performance, or Persuasion."
			}
		},
		"subclassfeature3.1" : {
			name : "Born in the Saddle",
			source : ["UA:KoO", 3],
			minlevel : 3,
			description : "\n   " + "I have advantage on saves to avoid falling off my mount, and land on my feet if I fail" + "\n   " + "Mounting or dismounting a creature costs me only 5 ft of movement instead of half",
			savetxt : { adv_vs : ["falling off my mount"] }
		},
		"subclassfeature3.2" : {
			name : "Combat Superiority",
			source : ["UA:KoO", 3],
			minlevel : 3,
			description : "\n   " + "I gain a number of superiority dice that I can use to fuel special maneuvers (see below)" + "\n   " + "I can use only one maneuver per attack; I regain all superiority dice after a short rest" + "\n    - " + "Use after rolling to influence/control an animal; I add the superiority die to the roll" + "\n    - " + "Use after rolling to hit; I add the superiority die to my attack roll" + "\n    - " + "Use on a mount, before rolling to hit with a lance; I add the die to the damage roll" + "\n       " + "Also, the target must make a Str save (DC 8 + Prof + Str mod) or be knocked prone" + "\n    - " + "As a reaction when I'm hit or my mount is hit, I add the superiority die to AC" + "\n       " + "If the attack still hits, I or my mount only take half damage from it",
			additional : ["", "", "d8", "d8", "d8", "d8", "d8", "d8", "d8", "d10", "d10", "d10", "d10", "d10", "d10", "d10", "d10", "d12", "d12", "d12"],
			usages : [0, 0, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6],
			recovery : "short rest",
			action : ["reaction", " (if hit/mount hit)"]
		},
		"subclassfeature7" : {
			name : "Ferocious Charger",
			source : ["UA:KoO", 3],
			minlevel : 7,
			usages : 1,
			recovery : "long rest",
			description : "\n   " + "I can use two superiority dice, instead of just one, to increase the damage of my lance" + "\n   " + "If doing so, the target has disadvantage on its Str save to avoid being knocked prone",
			action : ["action", ""]
		},
		"subclassfeature10" : {
			name : "Improved Combat Superiority",
			source : ["UA:KoO", 3],
			minlevel : 10,
			description : "\n   " + "My superiority dice turn into d10s at 10th level and into d12s at 18th level"
		},
		"subclassfeature15" : {
			name : "Relentless",
			source : ["UA:KoO", 4],
			minlevel : 15,
			description : "\n   " + "I regain one superiority die if I have no more remaining when I roll initiative"
		}
	}
});
AddSubClass("fighter", "scout", {
	regExpSearch : /scout/i,
	subname : "Scout",
	source : ["UA:KoO", 4],
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiencies",
			source : ["UA:KoO", 4],
			minlevel : 3,
			description : "\n   " + "I gain proficiency with three skills or two skills and Thieves' Tools; For skills choose from:" + "\n   " + "Acrobatics, Athletics, Investigation, Medicine, Nature, Perception, Stealth, and Survival",
			choices : ["2 Skill proficiencies and Thieves' Tools proficiency", "3 Skill proficiencies"],
			"2 skill proficiencies and thieves' tools proficiency" : {
				name : "Bonus Proficiencies",
				description : desc([
					"I gain proficiency with two skills and Thieves' Tools; For skills choose from:",
					"Acrobatics, Athletics, Investigation, Medicine, Nature, Perception, Stealth, and Survival"
				]),
				skillstxt : "\n\n" + toUni("Scout") + ": Choose two from: Acrobatics, Athletics, Investigation, Medicine, Nature, Perception, Stealth, or Survival.",
				toolProfs : [["Thieves' tools", "Dex"]]
			},
			"3 skill proficiencies" : {
				name : "Bonus Proficiencies",
				description : desc([
					"I gain proficiency with three skills, chosen from:",
					"Acrobatics, Athletics, Investigation, Medicine, Nature, Perception, Stealth, and Survival"
				]),
				skillstxt : "\n\n" + toUni("Scout") + ": Choose three from: Acrobatics, Athletics, Investigation, Medicine, Nature, Perception, Stealth, or Survival."
			}
		},
		"subclassfeature3.1" : {
			name : "Combat Superiority",
			source : ["UA:KoO", 4],
			minlevel : 3,
			description : "\n   " + "I gain a number of superiority dice that I can use to fuel special maneuvers (see below)" + "\n   " + "I can use only one maneuver per attack; I regain all superiority dice after a short rest" + "\n    - " + "Use after rolling an Athletics, Nature, Perception, Stealth, or Survival check" + "\n       " + "I add half the superiority die to the roll (rounding up)" + "\n    - " + "Use after rolling to hit; I add the superiority die to my attack roll" + "\n    - " + "As a reaction when I'm hit while wearing light/medium armor, I add the die to AC" + "\n       " + "If the attack still hits, I only take half damage from it",
			additional : ["", "", "d8", "d8", "d8", "d8", "d8", "d8", "d8", "d10", "d10", "d10", "d10", "d10", "d10", "d10", "d10", "d12", "d12", "d12"],
			usages : [0, 0, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6],
			recovery : "short rest",
			action : ["reaction", " (if hit)"]
		},
		"subclassfeature3.2" : function () {
			var NEfea = newObj(ClassList.ranger.features["natural explorer"]);
			NEfea.source = ["UA:KoO", 4];
			NEfea.minlevel = 3;
			NEfea.additional = ["", "", "1 favored terrain", "1 favored terrain", "1 favored terrain", "1 favored terrains", "2 favored terrains", "2 favored terrains", "2 favored terrains", "2 favored terrains", "2 favored terrains", "2 favored terrains", "2 favored terrains", "2 favored terrains", "3 favored terrains", "3 favored terrains", "3 favored terrains", "3 favored terrains", "3 favored terrains", "3 favored terrains"];
			return NEfea;
		}(),
		"subclassfeature10" : {
			name : "Improved Combat Superiority",
			source : ["UA:KoO", 4],
			minlevel : 10,
			description : "\n   " + "My superiority dice turn into d10s at 10th level and into d12s at 18th level"
		},
		"subclassfeature15" : {
			name : "Relentless",
			source : ["UA:KoO", 4],
			minlevel : 15,
			description : "\n   " + "I regain one superiority die if I have no more remaining when I roll initiative"
		}
	}
});
var iFileName = "UA_20160404_Gothic-Heroes.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Unearthed Arcana: Gothic Heroes article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:GH"] = {
	name : "Unearthed Arcana: Gothic Heroes",
	abbreviation : "UA:GH",
	group : "Unearthed Arcana",
	url : "http://dnd.wizards.com/sites/default/files/media/upload/articles/UA%20Gothic%20Characters.pdf",
	date : "2016/04/04"
};

// Adds 8 new races, the Revenant versions of the Aasimar, Dragonborn, Dwarf, Elf, Gnome, Halfling, Human, and Tiefling
RaceList["aasimar revenant"] = { //based on the VGtM Aasimar
	regExpSearch : /^(?=.*revenant)((?=.*aasimar)|((?=.*planetouched)(?=.*(celestial|angel)))).*$/i,
	name : "Aasimar Revenant",
	sortname : "Revenant, Aasimar",
	source : ["UA:GH", 1],
	plural : "Aasimar",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Celestial"],
	vision : [["Darkvision", 60]],
	dmgres : ["Necrotic", "Radiant"],
	age : " reach adulthood in their late teens and live around 160 years",
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")",
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d8 cm)",
	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)",
	improvements : "Aasimar Revenant: +1 Constitution, +2 Charisma;",
	scores : [1, 0, 0, 0, 0, 2],
	trait : "Aasimar Revenant (+1 Constitution, +2 Charisma)" + (typePF ? "\n" : " ") + "Healing Hands: As an action, once per long rest, I can touch to heal for my level in HP.\nRelentless Nature: I have returned to life with one goal: avenge my death or finish an unresolved task. I will rest once I fulfill my goal, but until then I can't truly die. Whenever I'm below half my max HP at the start of my turn, I regain 1 HP. If I die, I return to life within 24 hours. If my body was destroyed, it is reformed within 1 mile of where I died. I always know the distance and direction to creatures involved with my goal.",
	features : {
		"healing hands" : {
			name : "Healing Hands",
			usages : 1,
			minlevel : 1,
			recovery : "long rest",
			additional : ["1 HP", "2 HP", "3 HP", "4 HP", "5 HP", "6 HP", "7 HP", "8 HP", "9 HP", "10 HP", "11 HP", "12 HP", "13 HP", "14 HP", "15 HP", "16 HP", "17 HP", "18 HP", "19 HP", "20 HP"],
			action : ["action", ""]
		}
	}
};
RaceList["dwarf revenant"] = {
	regExpSearch : /^(?=.*revenant)(?=.*\b(dwarfs?|dwarves|dwarfish|dwarvish|dwarven)\b).*$/i,
	name : "Dwarf Revenant",
	sortname : "Revenant, Dwarf",
	source : ["UA:GH", 1],
	plural : "Dwarves",
	size : 3,
	speed : {
		walk : { spd : 25, enc : 25 }
	},
	languageProfs : ["Common", "Dwarvish"],
	vision : [["Darkvision", 60]],
	savetxt : { adv_vs : ["poison"] },
	dmgres : ["Poison"],
	weaponprofs : [false, false, ["battleaxe", "handaxe", "warhammer", "light hammer"]],
	toolProfs : [["Smith, brewer, or mason tools", 1]],
	age : " are considered young until they are 50 and live about 350 years",
	height : " stand between 4 and 5 feet tall (4' + 2d4\")",
	weight : " weigh around 150 lb (130 + 2d4 \xD7 2d6 lb)",
	heightMetric : " stand between 1,2 and 1,5 metres tall (120 + 5d4 cm)",
	weightMetric : " weigh around 75 kg (60 + 5d4 \xD7 4d6 / 10 kg)",
	improvements : "Dwarf Revenant: +3 Constitution;",
	scores : [0, 0, 3, 0, 0, 0],
	trait : "Dwarf Revenant (+3 Constitution)\nStonecunning: I have expertise on Int (History) checks related to the origin of stonework.\nRelentless Nature: I have returned to life with one goal: avenge my death or finish an unresolved task. I will rest once I fulfill my goal, but until then I can't truly die. Whenever I'm below half my max HP at the start of my turn, I regain 1 HP. If I die, I return to life within 24 hours. If my body was destroyed, it is reformed within 1 mile of where I died. I always know the distance and direction to creatures involved with my goal."
};
RaceList["elf revenant"] = {
	regExpSearch : /^(?!.*half)(?=.*revenant)(?=.*\b(elfs?|elves|elvish|elven)\b).*$/i,
	name : "Elf Revenant",
	sortname : "Revenant, Elf",
	source : ["UA:GH", 1],
	plural : "Elves",
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
	height : " range from under 5 to over 6 feet tall (4'6\" + 2d10\")",
	weight : " weigh around 115 lb (90 + 2d10 \xD7 1d4 lb)",
	heightMetric : " range from under 1,5 to over 1,8 metres tall (140 + 5d10 cm)",
	weightMetric : " weigh around 55 kg (40 + 5d10 \xD7 2d4 / 10 kg)",
	improvements : "Elf Revenant: +2 Dexterity, +1 Constitution;",
	scores : [0, 2, 1, 0, 0, 0],
	trait : "Elf Revenant (+2 Dexterity, +1 Constitution)\nTrance: I don't sleep, but meditate for 4 hours a day, needing only 4 hours for a long rest.\nRelentless Nature: I have returned to life with one goal: avenge my death or finish an unresolved task. I will rest once I fulfill my goal, but until then I can't truly die. Whenever I'm below half my max HP at the start of my turn, I regain 1 HP. If I die, I return to life within 24 hours. If my body was destroyed, it is reformed within 1 mile of where I died. I always know the distance and direction to creatures involved with my goal."
};
RaceList["halfling revenant"] = {
	regExpSearch : /^(?=.*revenant)(?=.*\b(halflings?|hobbits?)\b).*$/i,
	name : "Halfling Revenant",
	sortname : "Revenant, Halfling",
	source : ["UA:GH", 1],
	plural : "Halflings",
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
	improvements : "Halfling Revenant: +2 Dexterity, +1 Constitution;",
	scores : [0, 2, 1, 0, 0, 0],
	trait : "Halfling Revenant (+2 Dexterity, +1 Constitution)" + (typePF ? "\n" : " ") + "Lucky: I reroll 1's on attack/check/save. Halfling Nimbleness: I can move through the space of anybody of a size larger than me.\nRelentless Nature: I have returned to life with one goal: avenge my death or finish an unresolved task. I will rest once I fulfill my goal, but until then I can't truly die. Whenever I'm below half my max HP at the start of my turn, I regain 1 HP. If I die, I return to life within 24 hours. If my body was destroyed, it is reformed within 1 mile of where I died. I always know the distance and direction to creatures involved with my goal."
};
RaceList["gnome revenant"] = {
	regExpSearch : /^(?=.*revenant)(?=.*\bgnomes?\b).*$/i,
	name : "Gnome Revenant",
	sortname : "Revenant, Gnome",
	source : ["UA:GH", 1],
	plural : "Gnomes",
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
	improvements : "Gnome Revenant: +1 Constitution, +2 Intelligence;",
	scores : [0, 0, 1, 2, 0, 0],
	trait : "Gnome Revenant (+1 Constitution, +2 Intelligence)\nRelentless Nature: I have returned to life with one goal: avenge my death or finish a critical, unresolved task. I will find rest once I fulfill my goal, but until then I can't truly die. Whenever I'm below half my max HP at the start of my turn, I regain 1 HP. If I die, I return to life within 24 hours. If my body was destroyed, it is reformed within 1 mile of where I died. Any destroyed equipment is not regained. I always know the distance and direction between me and any creature involved with my goal that is on the same plane."
};
RaceList["dragonborn revenant"] = {
	regExpSearch : /^(?=.*dragonborn)(?=.*revenant).*$/i,
	name : "Dragonborn Revenant",
	sortname : "Revenant, Dragonborn",
	source : ["UA:GH", 1],
	plural : "Dragonborn",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Draconic"],
	age : " reach adulthood by 15 and live around 80 years",
	height : " stand well over 6 feet tall (5'6\" + 2d8\")",
	weight : " weigh around 240 lb (175 + 2d8 \xD7 2d6 lb)",
	heightMetric : " stand well over 1,8 metres tall (170 + 5d8 cm)",
	weightMetric : " weigh around 110 kg (80 + 5d8 \xD7 4d6 / 10 kg)",
	improvements : "Dragonborn Revenant: +1 Strength, +1 Constitution, +1 Charisma;",
	scores : [1, 0, 1, 0, 0, 1],
	trait : "Dragonborn Revenant (+1 Strength, +1 Constitution, +1 Charisma)\nBreath Weapon: As an action, 5 ft by 30 ft line, Dex save halves, necrotic damage.\nRelentless Nature: I have returned to life with one goal: avenge my death or finish an unresolved task. I will rest once I fulfill my goal, but until then I can't truly die. Whenever I'm below half my max HP at the start of my turn, I regain 1 HP. If I die, I return to life within 24 hours. If my body was destroyed, it is reformed within 1 mile of where I died. I always know the distance and direction to creatures involved with my goal.",
	abilitySave : 3,
	dmgres : ["Necrotic"],
	features : {
		"breath weapon" : {
			name : "Breath Weapon",
			minlevel : 1,
			usages : 1,
			additional : ["2d6", "2d6", "2d6", "2d6", "2d6", "3d6", "3d6", "3d6", "3d6", "3d6", "4d6", "4d6", "4d6", "4d6", "4d6", "5d6", "5d6", "5d6", "5d6", "5d6"],
			recovery : "short rest",
			tooltip : " (Draconic Ancestry)",
			action : ["action", ""]
		}
	}
};
RaceList["human revenant"] = {
	regExpSearch : /^(?=.*human)(?=.*revenant).*$/i,
	name : "Human Revenant",
	sortname : "Revenant, Human",
	source : ["UA:GH", 1],
	plural : "Humans",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "Human Revenant: +1 Constitution and +1 to two different ability scores of my choice;",
	scores : [0, 0, 1, 0, 0, 0],
	trait : "Human Revenant (+1 Constitution and +1 to two different ability scores of my choice)\nRelentless Nature: I have returned to life with one goal: avenge my death or finish a critical, unresolved task. I will find rest once I fulfill my goal, but until then I can't truly die. Whenever I'm below half my max HP at the start of my turn, I regain 1 HP. If I die, I return to life within 24 hours. If my body was destroyed, it is reformed within 1 mile of where I died. Any destroyed equipment is not regained. I always know the distance and direction between me and any creature involved with my goal that is on the same plane."
};
RaceList["tiefling revenant"] = {
	regExpSearch : /^(?=.*revenant)((?=.*tiefling)|(?=.*planetouched)(?=.*(hell|abyss|fiend|devil))).*$/i,
	name : "Tiefling Revenant",
	sortname : "Revenant, Tiefling",
	source : ["UA:GH", 1],
	plural : "Tieflings",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Infernal"],
	vision : [["Darkvision", 60]],
	age : " reach adulthood in their late teens and live around 100 years",
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")",
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d8 cm)",
	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)",
	improvements : "Tiefling Revenant: +1 Constitution, +2 Charisma;",
	scores : [0, 0, 1, 0, 0, 2],
	trait : "Tiefling Revenant (+1 Constitution, +2 Charisma)\nRelentless Nature: I have returned to life with one goal: avenge my death or finish a critical, unresolved task. I will find rest once I fulfill my goal, but until then I can't truly die. Whenever I'm below half my max HP at the start of my turn, I regain 1 HP. If I die, I return to life within 24 hours. If my body was destroyed, it is reformed within 1 mile of where I died. Any destroyed equipment is not regained. I always know the distance and direction between me and any creature involved with my goal that is on the same plane."
};

// Adds 2 subclasses, 1 for the Fighter and 1 for the rogue
AddSubClass("fighter", "monster hunter", {
	regExpSearch : /^(?=.*monster)(?=.*hunter).*$/i,
	subname : "Monster Hunter",
	source : ["UA:GH", 2],
	fullname : "Monster Hunter",
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiencies",
			source : ["UA:GH", 2],
			minlevel : 3,
			description : "\n   " + "I gain proficiency with two skills or one skill and any one tool" + "\n   " + "For skills I can choose Arcana, History, Insight, Investigation, Nature, or Perception",
			choices : ["1 Skill and 1 Tool proficiencies", "2 Skill proficiencies"],
			"1 skill and 1 tool proficiencies" : {
				name : "Bonus Proficiencies",
				description : "\n   " + "I gain proficiency with one skill and any one tool of my choice" + "\n   " + "For the skill, I can choose Arcana, History, Insight, Investigation, Nature, or Perception",
				skillstxt : "\n\n" + toUni("Monster Hunter") + ": Choose one from: Arcana, History, Insight, Investigation, Nature, or Perception.",
				toolProfs : [["Any tool", 1]]
			},
			"2 skill proficiencies" : {
				name : "Bonus Proficiencies",
				description : "\n   " + "I gain 2 skill proficiencies: Arcana, History, Insight, Investigation, Nature, or Perception",
				skillstxt : "\n\n" + toUni("Monster Hunter") + ": Choose two from: Arcana, History, Insight, Investigation, Nature, or Perception."
			}
		},
		"subclassfeature3.1" : {
			name : "Combat Superiority",
			source : ["UA:GH", 2],
			minlevel : 3,
			description : "\n   " + "I gain a number of superiority dice that I can use to fuel special maneuvers (see below)" + "\n   " + "I can use only one maneuver per attack; I regain all superiority dice after a short rest" + "\n    - " + "Use after rolling to hit; I add the superiority die to my attack roll" + "\n    - " + "Use after damaging a creature; I add the superiority die to the damage roll" + "\n       " + "Also, the attack imposes disadvantage on any concentration save resulting from it" + "\n    - " + "Use after Int/Wis/Cha save, before knowing success/fail; add the die to the save total" + "\n    - " + "Use with Wis (Perception) to detect hidden or Wis (Insight) to see if lying to me" + "\n       " + "After rolling but before knowing if success/fail; I add the superiority die to the check",
			additional : ["", "", "d8", "d8", "d8", "d8", "d8", "d8", "d8", "d10", "d10", "d10", "d10", "d10", "d10", "d10", "d10", "d12", "d12", "d12"],
			usages : [0, 0, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6],
			recovery : "short rest"
		},
		"subclassfeature3.2" : {
			name : "Hunter's Mysticism",
			source : ["UA:GH", 2],
			minlevel : 3,
			usages : 1,
			recovery : "long rest",			
			description : "\n   " + "I can cast Detect Magic as a ritual and Protection from Evil & Good once per long rest" + "\n   " + "I gain the ability to speak one of the following languages: Abyssal, Celestial, or Infernal",
			action : ["action", " (Prot vs. Evil/Good)"],
			languageProfs : [["Abyssal, Celestial, or Infernal", 1]]
		},
		"subclassfeature7" : {
			name : "Monster Slayer",
			source : ["UA:GH", 2],
			minlevel : 7,
			usages : 1,
			recovery : "long rest",
			description : "\n   " + "Whenever I use a superiority die, I can choose to expend two, adding both to the roll" + "\n   " + "If the target is an aberration, fey, fiend, or undead, both dice deal maximum damage",
			action : ["action", ""]
		},
		"subclassfeature10" : {
			name : "Improved Combat Superiority",
			source : ["UA:GH", 2],
			minlevel : 10,
			description : "\n   " + "My superiority dice turn into d10s at 10th level and into d12s at 18th level"
		},
		"subclassfeature15" : {
			name : "Relentless",
			source : ["UA:GH", 2],
			minlevel : 15,
			description : "\n   " + "I regain one superiority die if I have no more remaining when I roll initiative"
		}
	}
});
AddSubClass("rogue", "inquisitive", {
	regExpSearch : /^(?=.*(rogue|miscreant))(?=.*inquisitive).*$/i,
	subname : "Inquisitive",
	source : ["UA:GH", 3],
	features : {
		"subclassfeature3" : {
			name : "Ear for Deceit",
			source : ["UA:GH", 3],
			minlevel : 3,
			description : "\n   " + "When using Wis (Insight) to sense if someone is lying, I can choose to use a fixed total" + "\n   " + "This total is 8 + Wis modifier + proficiency bonus (if proficient, or twice if expertise)"
		},
		"subclassfeature3.1" : {
			name : "Eye for Detail",
			source : ["UA:GH", 3],
			minlevel : 3,
			description : "\n   " + "I can use the bonus action granted by Cunning Action for the following as well:" + "\n    - " + "To make a Wisdom (Perception) check to spot a hidden creature or object" + "\n    - " + "To make an Intelligence (Investigation) check to uncover and decipher clues" + "\n    - " + "To use Insightful Fighting (see below)"
		},
		"subclassfeature3.2" : {
			name : "Insightful Fighting",
			source : ["UA:GH", 3],
			minlevel : 3,
			description : "\n   " + "As an action or bonus action, I can decipher the tactics of an active opponent I can see" + "\n   " + "I have to make a Wisdom (Insight) check vs. the target's Charisma (Deception) check" + "\n   " + "If I succeed, I can use sneak attack on the target regardless of advantage/disadvantage" + "\n   " + "This benefit lasts for 1 minute or until I successfully use Insightful Fighting again",
			action : ["action", ""]
		},
		"subclassfeature9" : {
			name : "Steady Eye",
			source : ["UA:GH", 3],
			minlevel : 9,
			usages : 1,
			recovery : "long rest",
			description : "\n   " + "If not moving during my turn, I gain adv. on Wis (Perception) to find hidden things"
		},
		"subclassfeature13" : {
			name : "Unerring Eye",
			source : ["UA:GH", 3],
			minlevel : 13,
			description : "\n   " + "As an action, I can sense magical deceptions within 30 feet of me, but not what it does" + "\n   " + "I know the presence of illusions, shapechanged creatures, or magic designed to deceive"
		},
		"subclassfeature17" : {
			name : "Eye for Weakness",
			source : ["UA:GH", 3],
			minlevel : 17,
			description : "\n   " + "While my Insightful Fighting is active, I add 2d6 to sneak attacks against that target"
		}
	}
});
var iFileName = "UA_20160606_Feats.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Unearthed Arcana: Feats article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:F"] = {
	name : "Unearthed Arcana: Feats",
	abbreviation : "UA:F",
	group : "Unearthed Arcana",
	url : "http://media.wizards.com/2016/downloads/DND/UA-Feats-V1.pdf",
	date : "2016/06/06"
};

// Add 8 feats: 4 'weapon mastery' feats and 4 'tool' feats
// This doesn't add the "Warhammer Master" feat, as that is only in the article to illustrate how not to design a feat
FeatsList["fell handed"] = {
	name : "Fell Handed",
	source : ["UA:F", 2],
	description : "With a handaxe, battleaxe, greataxe, warhammer, or maul, I get +1 to hit, knock prone if I have adv. and hit with both rolls, with disadv. still do Str mod in bludg. damage if I miss but the other die would've hit, can use Help to give ally +2 to hit vs. enemy with a shield.",
	calcChanges : {
		atkAdd : ["if ((/handaxe|battleaxe|greataxe|warhammer|maul/).test(WeaponName)) {fields.Description += (fields.Description ? '; ' : '') + 'Adv: knock prone if both dice hit; Disadv: Str Mod bludg. damage on miss but 2nd die would hit';}; ", "With a handaxe, battleaxe, greataxe, warhammer, or maul, I get the following benefits:\n - +1 to hit;\n - When attacking with advantage, the target is knocked prone if both die would hit;\n - When attacking with disadvantage and missing, still do my Strength modifier in bludgeoning damage."],
		atkCalc : ["if ((/handaxe|battleaxe|greataxe|warhammer|maul/).test(WeaponName)) {output.extraHit += 1;}; ", ""]
	}
};
FeatsList["blade mastery"] = {
	name : "Blade Mastery",
	source : ["UA:F", 2],
	description : "With a shortsword, longsword, greatsword, scimitar, or rapier, I get +1 to hit, advantage on opportunity attacks, and with the weapon in hand I can use my reaction to assume a parrying stance that gives me +1 AC until the start of my next turn.",
	calcChanges : {
		atkAdd : ["if ((/shortsword|longsword|greatsword|scimitar|rapier/).test(WeaponName)) {fields.Description += (fields.Description ? '; ' : '') + 'Advantage on opportunity attacks';}; ", "With a shortsword, longsword, greatsword, scimitar, or rapier, I get the following benefits:\n - +1 to hit;\n - Advantage on opportunity attacks."],
		atkCalc : ["if ((/shortsword|longsword|greatsword|scimitar|rapier/).test(WeaponName)) {output.extraHit += 1;}; ", ""]
	},
	action : ["reaction", " Parrying Stance"]
};
FeatsList["flail mastery"] = {
	name : "Flail Mastery",
	source : ["UA:F", 3],
	calculate : "event.value = 'With a flail, I get +1 to hit, and enemies hit by an opportunity attack with it have to make a Str save DC ' + (8 + Number(What('Proficiency Bonus')) + What('Str Mod')) + ' (8 + Prof. bonus + Str mod) or be knocked prone. As a bonus action, I can get +2 to hit with my flail vs. targets with shields until the end of my turn.';",
	calcChanges : {
		atkAdd : ["if (WeaponName === 'flail') {fields.Description += (fields.Description ? '; ' : '') + 'On opportunity attack hit, Strength save (DC 8 + Prof. bonus + Str mod) or knocked prone';}; ", "With a flail, I get the following benefits:\n - +1 to hit;\n - Targets hit with it must make a Strength saving throw (DC 8 + proficiency bonus + Strength modifier) or be knocked prone."],
		atkCalc : ["if (WeaponName === 'flail') {output.extraHit += 1;}; ", ""]
	},
	action : ["bonus action", ""]
};
FeatsList["spear mastery"] = {
	name : "Spear Mastery",
	source : ["UA:F", 3],
	description : "With a spear, I get +1 to hit and it does d8 damage (versatile d10). As a bonus action, I select a target at least 20 ft away. If it moves in reach on its next turn, I can attack it as a reaction, extra damage die. As a bonus action, I can increase the speer's reach with 5 ft.",
	calcChanges : {
		atkAdd : ["if (WeaponName === 'spear') { fields.Damage_Die = fields.Damage_Die === '1d6' ? '1d8' : fields.Damage_Die; fields.Description = fields.Description.replace('versatile (1d8)', 'versatile (1d10)'); }; ", "With a spear, I get the following benefits:\n - +1 to hit;\n - The spear damage die increases to d8 (versatile d10)."],
		atkCalc : ["if (WeaponName === 'spear') {output.extraHit += 1;}; ", ""]
	},
	action : ["bonus action", " (set vs. charge)"],
	eval : "AddAction('bonus action', 'Spear Mastery (increase reach)', 'the Spear Mastery feat');",
	removeeval : "RemoveAction('bonus action', 'Spear Mastery (increase reach)');"
};
FeatsList["alchemist"] = {
	name : "Alchemist",
	source : ["UA:F", 4],
	description : "I gain proficiency with alchemist's supplies, or expertise if already proficient. As an action, I can identify a potion within 5 ft. During a rest with alchemist's supplies, I can enhance a potion of healing, to heal its max. Consuming it within 1 hour maximizes its effects [+1 Int]",
	improvements : "Alchemist (feat): +1 Intelligence;",
	scores : [0, 0, 0, 1, 0, 0],
	action : ["action", " (identify potion)"],
	toolProfs : [["Alchemist's supplies", "Int"]],
	eval : "if (CurrentProfs.tool[\"Alchemist's supplies\"] && (/(alchemist|alchemy).*(supplies|kit)/i).test(What('Too Text'))) { Checkbox('Too Exp', true); }; ",
	removeeval : "if (CurrentProfs.tool[\"Alchemist's supplies\"] && (/(alchemist|alchemy).*(supplies|kit)/i).test(What('Too Text'))) { Checkbox('Too Exp', false); }; "
};
FeatsList["burglar"] = {
	name : "Burglar",
	source : ["UA:F", 4],
	description : "I gain proficiency with thieves' tools, or expertise with them if I'm already proficient. [+1 Dexterity]",
	improvements : "Burglar (feat): +1 Dexterity;",
	scores : [0, 1, 0, 0, 0, 0],
	toolProfs : [["Thieves' tools", "Dex"]],
	eval : "if (CurrentProfs.tool[\"Thieves' tools\"] && (/thieves.*tools/i).test(What('Too Text'))) { Checkbox('Too Exp', true); }; ",
	removeeval : "if (CurrentProfs.tool[\"Thieves' tools\"] && (/thieves.*tools/i).test(What('Too Text'))) { Checkbox('Too Exp', false); }; "
};
FeatsList["gourmand"] = {
	name : "Gourmand",
	source : ["UA:F", 4],
	description : "I gain proficiency with cook's utensils, or expertise if already proficient. As an action, I can detect poison in food within 5 ft. In a long rest with food/supplies, I can have 6 creatures regain 2 extra HD and give them adv. on Con saves vs. disease for 24 hours. [+1 Con]",
	improvements : "Gourmand (feat): +1 Constitution;",
	scores : [0, 0, 1, 0, 0, 0],
	action : ["action", " (inspect food)"],
	toolProfs : [["Cook's utensils", "Int"]],
	eval : "if (CurrentProfs.tool[\"Cook's utensils\"] && (/cook.*utensils/i).test(What('Too Text'))) { Checkbox('Too Exp', true); }; ",
	removeeval : "if (CurrentProfs.tool[\"Cook's utensils\"] && (/cook.*utensils/i).test(What('Too Text'))) { Checkbox('Too Exp', false); }; "
};
FeatsList["master of disguise"] = {
	name : "Master of Disguise",
	source : ["UA:F", 4],
	description : "I gain proficiency with the disguise kit, or expertise with it if I'm already proficient. After observing a creature for 1 hour, I can craft a disguise to mimic it in 8 hours with a disguise kit. Once finished, I can don this disguise as an action. [+1 Charisma]",
	improvements : "Master of Disguise (feat): +1 Charisma;",
	scores : [0, 0, 0, 0, 0, 1],
	action : ["action", " (don disguise)"],
	toolProfs : [["Disguise kit", "Cha"]],
	eval : "if (CurrentProfs.tool['Disguise kit'] && (/disguise.*kit/i).test(What('Too Text'))) { Checkbox('Too Exp', true); }; ",
	removeeval : "if (CurrentProfs.tool['Disguise kit'] && (/disguise.*kit/i).test(What('Too Text'))) { Checkbox('Too Exp', false); }; "
};
var iFileName = "UA_20160801_The-Faithful.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Unearthed Arcana: The Faithful article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:TF"] = {
	name : "Unearthed Arcana: The Faithful",
	abbreviation : "UA:TF",
	group : "Unearthed Arcana",
	url : "http://media.wizards.com/2016/dnd/downloads/UA%20Non-Divine%20Faithful%20SFG.pdf",
	date : "2016/08/01"
};

// Adds 2 subclasses, 1 for the Warlock and 1 for the Wizard
AddSubClass("warlock", "the seeker", {
	regExpSearch : /^(?=.*warlock)(?=.*seeker).*$/i,
	subname : "the Seeker",
	source : ["UA:TF", 1],
	spellcastingExtra : ["feather fall", "jump", "levitate", "locate object", "clairvoyance", "sending", "arcane eye", "locate creature", "legend lore", "passwall"],
	features : {
		"subclassfeature1" : {
			name : "Shielding Aurora",
			source : ["UA:TF", 1],
			minlevel : 1,
			description : "\n   " + "As a bonus action, I create a whirling aurora of brilliant energy around me" + "\n   " + "It lasts until the end of my next turn and grants me resistance to all damage" + "\n   " + "Any hostile ending its turn in 10 ft of me get Warlock level + Cha mod radiant damage",
			usages : 1,
			recovery : "short rest",
			action : ["bonus action", ""]
		},
		"pact boon" : function () {
			var pactBoon = newObj(ClassList.warlock.features["pact boon"]);
			pactBoon.choices.push("Pact of the Star Chain");
			pactBoon["pact of the star chain"] = {
				name : "Pact of the Star Chain",
				source : ["UA:TF", 1],
				description : "\n   " + "My patron grants me an item of power which disappears when I die" + "\n   " + "While it is on my person, I can cast Augury as a ritual (PHB 215)" + "\n   " + "Additionally, once per short rest, I can get advantage on an Intelligence check" + "\n   " + "If I lose this item I can perform a 1-hour ceremony to get a replacement",
				usages : 1,
				recovery : "short rest",
				spellcastingBonus : {
					name : "Pact of the Star Chain",
					spells : ["augury"],
					selection : ["augury"],
					firstCol : "(R)"
				}
			};
			return pactBoon;
		}(),
		"subclassfeature6" : {
			name : "Astral Refuge",
			source : ["UA:TF", 2],
			minlevel : 6,
			description : "\n   " + "As an action, I can step into an astral refuge, coming back at the end of the turn" + "\n   " + "While in the astral refuge, I can take two actions to cast spells targeting just me",
			action : ["action", ""]
		},
		"subclassfeature10" : {
			name : "Far Wanderer",
			source : ["UA:TF", 2],
			minlevel : 10,
			description : "\n   " + "I no longer need to breathe, and I gain resistance to fire damage and cold damage",
			dmgres : ["Cold", "Fire"]
		},
		"subclassfeature14" : {
			name : "Astral Sequestration",
			source : ["UA:TF", 2],
			minlevel : 14,
			description : "\n   " + "With a 5 minutes ritual, I can shift myself and ten willing creatures to the Astral Plane" + "\n   " + "While sequestered an Astral Plane, we gain the full benefits of a short rest" + "\n   " + "After this rest, we return to the same space as before, without any time having passed",
			usages : 1,
			recovery : "long rest"
		}
	}
});
RunFunctionAtEnd(function() {
	var theTheurgySubclass = AddSubClass("wizard", "theurgy", {
		regExpSearch : /^((?=.*mystic)(?=.*theurge))|(?=.*(theurgy|theurgist)).*$/i,
		subname : "Theurgy",
		source : [["UA:TF", 1], ["UA:WR", 1]],
		fullname : "Theurgist",
		features : {
			"subclassfeature2" : {
				name : "Arcane Initiate",
				source : [["UA:TF", 2], ["UA:WR", 1]],
				minlevel : 2,
				description : "\n   " + "Choose a Cleric Domain using the \"Choose Feature\" button above" + "\n   " + "When I gain a wizard level I can replace one of the spells I would add to my spellbook" + "\n   " + "I can replace it with one of the chosen domain spells, if it is of a level I can cast" + "\n   " + "If my spellbook has all the domain spells, I can select any cleric spell of a level I can cast" + "\n   " + "Other wizards cannot copy cleric spells from my spellbook into their own spellbooks",
				choices : []
			},
			"subclassfeature2.1" : {
				name : "Channel Arcana",
				source : [["UA:TF", 2], ["UA:WR", 1]],
				minlevel : 2,
				description : "\n   " + "I can channel arcane energy from my deity; the save for this is my wizard spell DC",
				usages : [0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3],
				recovery : "short rest"
			},
			"subclassfeature2.2" : {
				name : "Channel Arcana: Divine Arcana",
				source : [["UA:TF", 2], ["UA:WR", 1]],
				minlevel : 2,
				description : "\n   " + "As a bonus action, I speak a prayer to control the flow of magic around me" + "\n   " + "The next spell I cast gains a +2 bonus to its attack roll or saving throw DC",
				action : ["bonus action", ""]
			},
			"subclassfeature2.3" : {
				name : "Channel Arcana: Domain",
				source : [["UA:TF", 2], ["UA:WR", 1]],
				minlevel : 2,
				description : "\n   " + "Use the \"Choose Features\" button above to select the domain",
				choices : [],
				choicesNotInMenu : true,
				eval : "if (FeaChoice === \"\") {var CFrem = What(\"Class Features Remember\"); var tReg = /.*?wizard,subclassfeature2,(.*domain).*/i; if ((tReg).test(CFrem)) {FeaChoice = CFrem.replace(tReg, \"$1\"); AddString(\"Class Features Remember\", \"wizard,subclassfeature2.2,\" + FeaChoice, false);};};"
			},
			"subclassfeature6" : {
				name : "Arcane Acolyte",
				source : [["UA:TF", 3], ["UA:WR", 1]],
				minlevel : 6,
				description : "\n   " + "Use the \"Choose Features\" button above to select the domain",
				choices : [],
				choicesNotInMenu : true,
				eval : "if (FeaChoice === \"\") {var CFrem = What(\"Class Features Remember\"); var tReg = /.*?wizard,subclassfeature2,(.*?domain).*/i; if ((tReg).test(CFrem)) {FeaChoice = CFrem.replace(tReg, \"$1\"); AddString(\"Class Features Remember\", \"wizard,subclassfeature6,\" + FeaChoice, false);};};"
			},
			"subclassfeature10" : {
				name : "Arcane Priest",
				source : [["UA:TF", 3], ["UA:WR", 2]],
				minlevel : 10,
				description : "\n   " + "Use the \"Choose Features\" button above to select the domain",
				choices : [],
				choicesNotInMenu : true,
				eval : "if (FeaChoice === \"\") {var CFrem = What(\"Class Features Remember\"); var tReg = /.*?wizard,subclassfeature2,(.*?domain).*/i; if ((tReg).test(CFrem)) {FeaChoice = CFrem.replace(tReg, \"$1\"); AddString(\"Class Features Remember\", \"wizard,subclassfeature10,\" + FeaChoice, false);};};"
			},
			"subclassfeature14" : {
				name : "Arcane High Priest",
				source : [["UA:TF", 3], ["UA:WR", 2]],
				minlevel : 14,
				description : "\n   " + "Use the \"Choose Features\" button above to select the domain",
				choices : [],
				choicesNotInMenu : true,
				eval : "if (FeaChoice === \"\") {var CFrem = What(\"Class Features Remember\"); var tReg = /.*?wizard,subclassfeature2,(.*?domain).*/i; if ((tReg).test(CFrem)) {FeaChoice = CFrem.replace(tReg, \"$1\"); AddString(\"Class Features Remember\", \"wizard,subclassfeature14,\" + FeaChoice, false);};};"
			}
		}
	});
	var MTfeat = ClassSubList[theTheurgySubclass].features;
	for (var i = 0; i < ClassList.cleric.subclasses[1].length; i++) {
		var aDomain = ClassSubList[ClassList.cleric.subclasses[1][i]];
		if (!aDomain) continue;
		var dSource = parseSource(aDomain.source);
		if (!dSource) dSource = parseSource(aDomain.features["subclassfeature1"].source);
		if (!dSource) dSource = [["UA:MC", 8]];
		
		var suffix = 1;
		var entryDoNm = cDomain.subname;
		while (MTfeat["subclassfeature2"].choices.indexOf(entryDoNm) !== -1) {
			suffix += 1;
			entryDoNm = cDomain.subname + " (" + suffix + ")";
		};
		MTfeat["subclassfeature2"].choices.push(entryDoNm);
		MTfeat["subclassfeature2"][entryDoNm.toLowerCase()] = {
			name : "Arcane Initiate: " + aDomain.subname,
			source : dSource,
			spellcastingExtra : aDomain.spellcastingExtra,
			description : "\n   " + "When I gain a wizard level I can replace one of the spells I would add to my spellbook" + "\n   " + "I can replace it with one of the " + aDomain.subname.toLowerCase() + " spells, if it is of a level I can cast" + "\n   " + "If my spellbook has all the domain spells, I can select any cleric spell of a level I can cast" + "\n   " + "Other wizards cannot copy cleric spells from my spellbook into their own spellbooks",
			eval : ""
		};
		var AIdomain = MTfeat["subclassfeature2"][entryDoNm.toLowerCase()];
		for (var aFea in aDomain.features) {
			var dFea = aDomain.features[aFea];
			if (dFea.minlevel === 2 && (/channel divinity/i).test(dFea.name)) {
				MTfeat["subclassfeature2.3"].choices.push(entryDoNm);
				MTfeat["subclassfeature2.3"][entryDoNm.toLowerCase()] = eval(dFea.toSource());
				MTfeat["subclassfeature2.3"][entryDoNm.toLowerCase()].name = MTfeat["subclassfeature2.3"][entryDoNm.toLowerCase()].name.replace(/channel divinity/i, "Channel Arcana");
				AIdomain.eval += "var ToAdd = ['wizard', 'subclassfeature2.3', \"" + entryDoNm.toLowerCase() + "\"]; if (classes.known.wizard.level >= 2 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)}; ";
			};
			if (dFea.minlevel === 1 && !dFea.armor && !dFea.weapons) {
				if (MTfeat["subclassfeature6"].choices.indexOf(entryDoNm) === -1) { //if the entry does not exist yet
					MTfeat["subclassfeature6"].choices.push(entryDoNm);
					MTfeat["subclassfeature6"][entryDoNm.toLowerCase()] = eval(dFea.toSource());
					AIdomain.eval += "var ToAdd = ['wizard', 'subclassfeature6', \"" + entryDoNm.toLowerCase() + "\"]; if (classes.known.wizard.level >= 6 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)}; ";
				} else { //add to the existing entry
					var theFea = MTfeat["subclassfeature6"][entryDoNm.toLowerCase()];
					theFea.name += " \u0026 " + dFea.name;
					theFea.description += dFea.description;
					for (var subFea in dFea) {
						if (theFea[subFea] === undefined) theFea[subFea] = dFea[subFea];
					};
				};
			};
			if (dFea.minlevel === 6 && !dFea.armor && !dFea.weapons) {
				if (MTfeat["subclassfeature10"].choices.indexOf(entryDoNm) === -1) { //if the entry does not exist yet
					MTfeat["subclassfeature10"].choices.push(entryDoNm);
					MTfeat["subclassfeature10"][entryDoNm.toLowerCase()] = eval(dFea.toSource());
					AIdomain.eval += "var ToAdd = ['wizard', 'subclassfeature10', \"" + entryDoNm.toLowerCase() + "\"]; if (classes.known.wizard.level >= 10 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)}; ";
				} else { //add to the existing entry
					var theFea = MTfeat["subclassfeature10"][entryDoNm.toLowerCase()];
					theFea.name += " \u0026 " + dFea.name;
					theFea.description += dFea.description;
					for (var subFea in dFea) {
						if (theFea[subFea] === undefined) theFea[subFea] = dFea[subFea];
					};
				};
			};
			if (dFea.minlevel === 17 && !dFea.armor && !dFea.weapons) {
				if (MTfeat["subclassfeature14"].choices.indexOf(entryDoNm) === -1) { //if the entry does not exist yet
					MTfeat["subclassfeature14"].choices.push(entryDoNm);
					MTfeat["subclassfeature14"][entryDoNm.toLowerCase()] = eval(dFea.toSource());
					AIdomain.eval += "var ToAdd = ['wizard', 'subclassfeature14', \"" + entryDoNm.toLowerCase() + "\"]; if (classes.known.wizard.level >= 14 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)}; ";
				} else { //add to the existing entry
					var theFea = MTfeat["subclassfeature14"][entryDoNm.toLowerCase()];
					theFea.name += " \u0026 " + dFea.name;
					theFea.description += dFea.description;
					for (var subFea in dFea) {
						if (theFea[subFea] === undefined) theFea[subFea] = dFea[subFea];
					};
				};
			};
		};
	};
});
var iFileName = "UA_20160912_The-Ranger,-Revised.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Unearthed Arcana: The Ranger, Revised article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:RR"] = {
	name : "Unearthed Arcana: The Ranger, Revised",
	abbreviation : "UA:RR",
	group : "Unearthed Arcana",
	url : "http://media.wizards.com/2016/dnd/downloads/UA_RevisedRanger.pdf",
	date : "2016/09/12"
};

//adds an alternative ranger class, including three subclasses
ClassList["rangerua"] = {
	regExpSearch : /^((?=.*(ranger|strider))|((?=.*(nature|natural))(?=.*(knight|fighter|warrior|warlord|trooper)))).*$/i,
	name : "Ranger",
	source : ["UA:RR", 2],
	primaryAbility : "\n \u2022 Ranger: Dexterity and Wisdom;",
	abilitySave : 5,
	prereqs : "\n \u2022 Ranger: Dexterity 13 and Wisdom 13;",
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	die : 10,
	saves : ["Str", "Dex"],
	skills : ["\n\n" + toUni("Ranger") + ": Choose three from Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, and Survival", "\n\n" + toUni("Multiclass Ranger") + ": Choose one from Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, and Survival"],
	armor : [
		[true, true, false, true],
		[true, true, false, true]
	],
	weapons : [
		[true, true],
		[true, true]
	],
	equipment : "Ranger starting equipment:\n \u2022 Scale mail -or- leather armor;\n \u2022 Two shortswords -or- two simple melee weapons;\n \u2022 A dungeoneer's pack -or- an explorer's pack;\n \u2022 A longbow and a quiver of 20 arrows.\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses : ["Ranger Conclaves", ["rangerua-beast master", "rangerua-deep stalker", "rangerua-hunter"]],
	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	spellcastingFactor : 2,
	spellcastingList : {
		"class" : "ranger"
	},
	spellcastingKnown : {
		spells : [0, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11]
	},
	features : {
		"favored enemy" : {
			name : "Favored Enemy",
			source : ["UA:RR", 2],
			minlevel : 1,
			description : "\n   " + "Use the \"Choose Features\" button above to select a favored enemy" + "\n   " + "Choose from beasts, fey, humanoids, monstrosities, or undead" + "\n   " + "I get a bonus to damage rolls with weapon attacks against the chosen favored enemy" + "\n   " + "I have adv. on Wis (Survival) to track and Int checks to recall info about them" + "\n   " + "I also learn one language of my choice, typically one associated with the favored enemy",
			additional : levels.map(function (n) {
				return (n < 6 ? "+2" : "+4") + " weapon attack damage";
			}),
			choices : ["Beasts", "Fey", "Humanoids", "Monstrosities", "Undead"],
			"beasts" : {
				name : "Favored Enemy: Beasts",
				description : "\n   " + "I get a bonus to damage rolls with weapon attacks against beasts" + "\n   " + "I have adv. on Wis (Survival) to track and Int checks to recall info about beasts" + "\n   " + "I learn a language, typically one spoken by or associated with beasts"
			},
			"fey" : {
				name : "Favored Enemy: Fey",
				description : "\n   " + "I get a bonus to damage rolls with weapon attacks against fey" + "\n   " + "I have adv. on Wis (Survival) to track and Int checks to recall info about fey" + "\n   " + "I learn a language, typically one spoken by or associated with fey"
			},
			"humanoids" : {
				name : "Favored Enemy: Humanoids",
				description : "\n   " + "I get a bonus to damage rolls with weapon attacks against humanoids" + "\n   " + "I have adv. on Wis (Survival) to track and Int checks to recall info about humanoids" + "\n   " + "I learn a language, typically one spoken by or associated with humanoids"
			},
			"monstrosities" : {
				name : "Favored Enemy: Monstrosities",
				description : "\n   " + "I get a bonus to damage rolls with weapon attacks against monstrosities" + "\n   " + "I have adv. on Wis (Survival) to track and Int checks to recall info about monstrosities" + "\n   " + "I learn a language, typically one spoken by or associated with monstrosities"
			},
			"undead" : {
				name : "Favored Enemy: Undead",
				description : "\n   " + "I get a bonus to damage rolls with weapon attacks against undead" + "\n   " + "I have adv. on Wis (Survival) to track and Int checks to recall info about undead" + "\n   " + "I learn a language, typically one spoken by or associated with undead"
			},
			languageProfs : [1],
			calcChanges : {
				atkCalc : ["if (!isSpell && classes.known.rangerua && classes.known.rangerua.level && (/favou?red.{1,2}enemy/i).test(WeaponText)) { output.extraDmg += classes.known.rangerua.level < 6 ? 2 : 4; }; ", "If I include the words 'Favored Enemy' in the name or description of a weapon, it gets bonus damage, depending on my Ranger level."]
			}
		},
		"natural explorer" : {
			name : "Natural Explorer",
			source : ["UA:RR", 3],
			minlevel : 1,
			description : "\n   " + "On my first turn in combat, I have adv. on attacks against those that did not yet act" + "\n   " + "I ignore difficult terrain; I have adv. on Initiative; I have benefits in travel, see page 3",
			extraname : "Natural Explorer",
			"travel benefit" : {
				name : "Travel Benefits",
				source : ["UA:RR", 3],
				description: "\n   " + "After one hour of traveling in the wilderness I gain the following benefits:" + "\n    - " + "My allies and I are not slowed by difficult terrain and can't get lost except by magic" + "\n    - " + "I am alert to danger even when doing something else; I forage twice as much food" + "\n    - " + "If alone (or alone with animal companion), I can move stealthily at my normal pace" + "\n    - " + "When tracking others, I also learn their exact number, size, and time since passing"
			},
			eval : "Checkbox(\"Init Adv\", true, \"Advantage to Initiative checks was gained from Ranger (Natural Explorer)\"); ClassFeatureOptions([\"rangerua\", \"natural explorer\", \"travel benefit\", \"extra\"]);",
			removeeval : "Checkbox(\"Init Adv\", false, \"\"); ClassFeatureOptions([\"rangerua\", \"natural explorer\", \"travel benefit\", \"extra\"], \"remove\");"
		},
		"fighting style" : function () {
			var FSfea = newObj(ClassList.ranger.features["fighting style"]);
			FSfea.source = ["UA:RR", 3];
			return FSfea;
		}(),
		"spellcasting" : {
			name : "Spellcasting",
			source : ["UA:RR", 3],
			minlevel : 2,
			description : "\n   " + "I can cast ranger spells that I know, using Wisdom as my spellcasting ability",
			additional : ["", "2 spells known", "3 spells known", "3 spells known", "4 spells known", "4 spells known", "5 spells known", "5 spells known", "6 spells known", "6 spells known", "7 spells known", "7 spells known", "8 spells known", "8 spells known", "9 spells known", "9 spells known", "10 spells known", "10 spells known", "11 spells known", "11 spells known"]
		},
		"primeval awareness" : {
			name : "Primeval Awareness",
			source : ["UA:RR", 4],
			minlevel : 3,
			description : "\n   " + "If I haven't attacked a beast within the last 10 min, I can communicate with it" + "\n   " + "As an action, I convey simple ideas, and read mood, intent, emotions, needs, etc." + "\n   " + "By concentrating for 1 min, I know if any of my favored enemies are within 5 miles" + "\n   " + "Per group, I sense the number, general direction, distance, and type of favored enemy",
			action : ["action", " (communicate)"]
		},
		"subclassfeature3" : {
			name : "Ranger Conclave",
			source : ["UA:RR", 4],
			minlevel : 3,
			description : "\n   " + "Choose a Ranger Conclave you strive to emulate and put it in the \"Class\" field" + "\n   " + "Choose either Beast Conclave, Deep Stalker Conclave or Hunter Conclave"
		},
		"greater favored enemy" : {
			name : "Greater Favored Enemy",
			source : ["UA:RR", 4],
			minlevel : 6,
			description : "\n   " + "Use the \"Choose Features\" button above to select a greater favored enemy" + "\n   " + "Choose from aberrations, celestials, constructs, dragons, elementals, fiends, or giants" + "\n   " + "I get all the bonuses from Favored Enemy for this creature type as well" + "\n   " + "Additionally, I have adv. on saves vs. spells and abilities of this greater favored enemy",
			additional : "+4 weapon attack damage",
			choices : ["Aberrations", "Celestials", "Constructs", "Dragons", "Elementals", "Fiends", "Giants"],
			"aberrations" : {
				name : "Greater Favored Enemy: Aberrations",
				description : "\n   " + "The bonuses I get from Favored Enemy now also work against aberrations" + "\n   " + "Additionally, I have advantage on saves against spells and abilities used by aberrations",
				savetxt : { adv_vs : ["spells/abilities of aberrations"] }
			},
			"celestials" : {
				name : "Greater Favored Enemy: Celestials",
				description : "\n   " + "The bonuses I get from Favored Enemy now also work against celestials" + "\n   " + "Additionally, I have advantage on saves against spells and abilities used by celestials",
				savetxt : { adv_vs : ["spells/abilities of celestials"] }
			},
			"constructs" : {
				name : "Greater Favored Enemy: Constructs",
				description : "\n   " + "The bonuses I get from Favored Enemy now also work against constructs" + "\n   " + "Additionally, I have advantage on saves against spells and abilities used by constructs",
				savetxt : { adv_vs : ["spells/abilities of constructs"] }
			},
			"dragons" : {
				name : "Greater Favored Enemy: Dragons",
				description : "\n   " + "The bonuses I get from Favored Enemy now also work against dragons" + "\n   " + "Additionally, I have advantage on saves against spells and abilities used by dragons",
				savetxt : { adv_vs : ["spells/abilities of dragons"] }
			},
			"elementals" : {
				name : "Greater Favored Enemy: Elementals",
				description : "\n   " + "The bonuses I get from Favored Enemy now also work against elementals" + "\n   " + "Additionally, I have advantage on saves against spells and abilities used by elementals",
				savetxt : { adv_vs : ["spells/abilities of elementals"] }
			},
			"fiends" : {
				name : "Greater Favored Enemy: Fiends",
				description : "\n   " + "The bonuses I get from Favored Enemy now also work against fiends" + "\n   " + "Additionally, I have advantage on saves against spells and abilities used by fiends",
				savetxt : { adv_vs : ["spells/abilities of fiends"] }
			},
			"giants" : {
				name : "Greater Favored Enemy: Giants",
				description : "\n   " + "The bonuses I get from Favored Enemy now also work against giants" + "\n   " + "Additionally, I have advantage on saves against spells and abilities used by giants",
				savetxt : { adv_vs : ["spells/abilities of giants"] }
			},
			languageProfs : [1]
		},
		"fleet of foot" : {
			name : "Fleet of Foot",
			source : ["UA:RR", 4],
			minlevel : 8,
			description : "\n   " + "I can take the Dash action as a bonus action",
			action : ["bonus action", ""]
		},
		"hide in plain sight" : {
			name : "Hide in Plain Sight",
			source : ["UA:RR", 4],
			minlevel : 10,
			description : "\n   " + "When I hide on my turn without moving, others take -10 Wis (Perception) to find me" + "\n   " + "This lasts until something reveals my presence, or until I (voluntarily) move/fall prone"
		},
		"vanish" : {
			name : "Vanish",
			source : ["UA:RR", 5],
			minlevel : 14,
			description : "\n   " + "I can't be nonmagically tracked if I don't want to be and can Hide as a bonus action",
			action : ["bonus action", ""]
		},
		"feral senses" : {
			name : "Feral Senses",
			source : ["UA:RR", 5],
			minlevel : 18,
			description : "\n   " + "When not blinded or deafened, I'm aware of invisible, non-hidden creatures in 30 ft" + "\n   " + "I don't have disadvantage when attacking creatures I am aware of but can't see"
		},
		"foe slayer" : {
			name : "Foe Slayer",
			source : ["UA:RR", 5],
			minlevel : 20,
			description : "\n   " + "Once per turn, I can add Wis mod to the attack or damage roll after I see the die roll"
		}
	}
};
ClassSubList["rangerua-beast master"] = {
	regExpSearch : /^(?=.*(animal|beast))((?=.*(master|ranger|strider))|((?=.*(nature|natural))(?=.*(knight|fighter|warrior|warlord|trooper)))).*$/i,
	subname : "Beast Conclave",
	source : ["UA:RR", 5],
	features : {
		"subclassfeature3" : {
			name : "Animal Companion",
			source : ["UA:RR", 5],
			minlevel : 3,
			description : "\n   " + "I call an animal by spending 8 hours and 50 gp; I can revive it with 8 hours and 25 gp",
			additional : ["", "", "", "+1 HD for companion", "+2 HD for companion", "+3 HD for companion", "+4 HD for companion", "+5 HD for companion", "+6 HD for companion", "+7 HD for companion", "+8 HD for companion", "+9 HD for companion", "+10 HD for companion", "+11 HD for companion", "+12 HD for companion", "+13 HD for companion", "+14 HD for companion", "+15 HD for companion", "+16 HD for companion", "+17 HD for companion"]
		},
		"subclassfeature3.1" : {
			name : "Companion's Bond",
			source : ["UA:RR", 5],
			minlevel : 3,
			description : "\n   " + "My companion gains several benefits, see the Companion's sheet"
		},
		"subclassfeature5" : {
			name : "Coordinated Attack",
			source : ["UA:RR", 6],
			minlevel : 5,
			description : "\n   " + "If I take the Attack action, my companion can use its reaction to make a melee attack"
		},
		"subclassfeature7" : {
			name : "Beast's Defense",
			source : ["UA:RR", 6],
			minlevel : 7,
			description : "\n   " + "While my companion can see me, it has advantage on all saving throws"
		},
		"subclassfeature11" : {
			name : "Storm of Claws and Fangs",
			source : ["UA:RR", 6],
			minlevel : 11,
			description : "\n   " + "My companion can, as an action, make melee attacks vs. all creatures within 5 ft of it"
		},
		"subclassfeature15" : {
			name : "Superior Beast's Defense",
			source : ["UA:RR", 6],
			minlevel : 15,
			description : "\n   " + "My companion can, as a reaction, halve an attack's damage from attacker that it sees"
		}
	}
};
ClassSubList["rangerua-hunter"] = {
	regExpSearch : /^(?!.*(monster|barbarian|bard|cleric|druid|fighter|monk|paladin|rogue|sorcerer|warlock|wizard))(?=.*(hunter|huntress|hunts(wo)?m(e|a)n)).*$/i,
	subname : "Hunter Conclave",
	source : ["UA:RR", 7],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	features : {
		"subclassfeature3" : {
			name : "Hunter's Prey",
			source : ["UA:RR", 7],
			minlevel : 3,
			description : "\n   " + "Choose Colossus Slayer, Giant Killer, or Horde Breaker with the \"Choose Feature\" button",
			choices : ["Colossus Slayer", "Giant killer", "Horde Breaker"],
			"colossus slayer" : {
				name : "Hunter's Prey: Colossus Slayer",
				description : "\n   " + "Once per turn, when hitting someone that is below max HP, I do an extra 1d8 damage"
			},
			"giant killer" : {
				name : "Hunter's Prey: Giant Killer",
				description : "\n   " + "As a reaction, when a Large or larger enemy in 5 ft attacks me, I can attack it once",
				action : ["reaction", ""]
			},
			"horde breaker" : {
				name : "Hunter's Prey: Horde Breaker",
				description : "\n   " + "Once per turn, when I hit a creature, I can make an attack vs. another within 5 ft of it"
			}
		},
		"subclassfeature7" : {
			name : "Defensive Tactics",
			source : ["UA:RR", 7],
			minlevel : 7,
			description : "\n   " + "\"Choose Feature\" button to choose Escape the Horde, Multiattack Defense, or Steel Will",
			choices : ["Escape the Horde", "Multiattack Defense", "Steel Will"],
			"escape the horde" : {
				name : "Defensive Tactic: Escape the Horde",
				description : "\n   " + "Creatures attacking me with opportunity attacks have disadvantage on the attack rolls"
			},
			"multiattack defense" : {
				name : "Defensive Tactic: Multiattack Defense",
				description : "\n   " + "When a creature hits me, I gain +4 AC against that creature for the rest of the turn"
			},
			"steel will" : {
				name : "Defensive Tactic: Steel Will",
				description : "\n   " + "I have advantage on saves against being frightened",
				savetxt : { adv_vs : ["frightened"] }
			}
		},
		"subclassfeature11" : {
			name : "Multiattack",
			source : ["UA:RR", 7],
			minlevel : 11,
			description : "\n   " + "Choose Volley or Whirlwind Attack using the \"Choose Feature\" button above",
			choices : ["Volley", "Whirlwind Attack"],
			"volley" : {
				name : "Multiattack: Volley",
				description : "\n   " + "As an action, I can make ranged attacks vs. all within a 10-ft radius of a point in range",
				action : ["action", ""]
			},
			"whirlwind attack" : {
				name : "Multiattack: Whirlwind Attack",
				description : "\n   " + "As an action, I can make melee attacks vs. all creatures within 5 ft of me",
				action : ["action", ""]
			}
		},
		"subclassfeature15" : {
			name : "Superior Hunter's Defense",
			source : ["UA:RR", 7],
			minlevel : 15,
			description : "\n   " + "\"Choose Feature\" button to choose Evasion, Stand Against the Tide, or Uncanny Dodge",
			choices : ["Evasion", "Stand Against the Tide", "Uncanny Dodge"],
			"evasion" : {
				name : "Evasion",
				description : "\n   " + "My Dexterity saves vs. areas of effect negate damage on success and halve it on failure",
				savetxt : { text : ["Dex save vs. area effects: fail \u2015 half dmg, success \u2015 no dmg"] }
			},
			"stand against the tide" : {
				name : "Stand Against the Tide",
				description : "\n   " + "When a creature misses me with a melee attack, I can use my reaction on the attack" + "\n   " + "I force the attacker to repeat it vs. another (not attacker) of my choice within range",
				action : ["reaction", ""]
			},
			"uncanny dodge" : {
				name : "Uncanny Dodge",
				description : "\n   " + "As a reaction, I halve the damage of an attack from an attacker that I can see",
				action : ["reaction", ""]
			}
		}
	}
};
ClassSubList["rangerua-deep stalker"] = {
	regExpSearch : /^(?=.*deep)(?=.*stalker).*$/i,
	subname : "Deep Stalker Conclave",
	source : ["UA:RR", 7],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	features : {
		"subclassfeature3" : {
			name : "Underdark Scout",
			source : ["UA:RR", 7],
			minlevel : 3,
			description : "\n   " + "In the first turn of combat I have +10 ft speed and +1 attack with the Attack action" + "\n   " + "When I'm hiding or trying to hide, others gain no benefit from darkvision to detect me"
		},
		"subclassfeature3.1" : {
			name : "Deep Stalker Magic",
			source : ["UA:RR", 8],
			minlevel : 3,
			description : "\n   " + "I have 90 ft darkvision and add a spell to my known spells at level 3, 5, 9, 13, and 15" + "\n   " + "These count as ranger spells, but do not count against the number of spells I can know",
			spellcastingExtra : ["disguise self", "rope trick", "glyph of warding", "greater invisibility", "seeming"].concat(new Array(95)).concat("AddToKnown"),
			vision : [["Darkvision", 90]]
		},
		"subclassfeature7" : {
			name : "Iron Mind",
			source : ["UA:RR", 8],
			minlevel : 7,
			description : "\n   " + "I am proficient with Wisdom saving throws",
			saves : ["Wis"]
		},
		"subclassfeature11" : {
			name : "Stalker's Flurry",
			source : ["UA:RR", 8],
			minlevel : 11,
			description : "\n   " + "Once during my turn when I miss an attack, I can immediately make an extra attack"
		},
		"subclassfeature15" : {
			name : "Stalker's Dodge",
			source : ["UA:RR", 8],
			minlevel : 15,
			description : "\n   " + "As a reaction when I'm attacked without adv., I can impose disadv. on the attack roll",
			action : ["reaction", " (when attacked)"]
		}
	}
};
var iFileName = "UA_20161107_Barbarian-Primal-Paths.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Unearthed Arcana: Barbarian Primal Paths article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:BPP"] = {
	name : "Unearthed Arcana: Barbarian Primal Paths",
	abbreviation : "UA:BPP",
	group : "Unearthed Arcana",
	url : "http://media.wizards.com/2016/dnd/downloads/UA_Barbarian.pdf",
	date : "2016/11/07"
};

// A three subclasses for the Barbarian
AddSubClass("barbarian", "ancestral guardian", {
	regExpSearch : /^(?=.*ancestral)(?=.*guardian).*$/i,
	subname : "Path of the Ancestral Guardian",
	source : ["UA:BPP", 1],
	fullname : "Ancestral Guardian",
	features : {
		"subclassfeature3" : {
			name : "Ancestral Protectors",
			source : ["UA:BPP", 1],
			minlevel : 3,
			description : "\n   " + "As a bonus action while raging, I can choose a creature within 5 ft of me that I can see" + "\n   " + "The creature has disadvantage on attack rolls that don't target me" + "\n   " + "If it takes the Disengage action within 5 feet of me, its speed is halved for its turn" + "\n   " + "This lasts until the start of my next turn or my rage ends, whichever comes ",
			action : ["bonus action", " (in Rage)"]
		},
		"subclassfeature6" : {
			name : "Ancestral Shield",
			source : ["UA:BPP", 1],
			minlevel : 6,
			description : "\n   " + "While I'm raging, I can transfer my resistance to an ally I can see within 30 ft of me" + "\n   " + "As a reaction when an ally takes bludgeoning, piercing, or slashing damage" + "\n   " + "My ally keeps the resistance, and I lose it, until the start of my next turn",
			action : ["reaction", ""]
		},
		"subclassfeature10" : {
			name : "Consult the Spirits",
			source : ["UA:BPP", 1],
			minlevel : 10,
			description : "\n   " + "I can consult my ancestral spirits to give myself advantage on a Int or Wis check",
			usages : 3,
			recovery : "long rest"
		},
		"subclassfeature14" : {
			name : "Vengeful Ancestors",
			source : ["UA:BPP", 1],
			minlevel : 14,
			description : "\n   " + "While I'm raging, I can have my vengeful ancestors attack for 2d8 force damage" + "\n   " + "As a reaction when I or an ally I can see within 30 feet of me is damaged in melee",
			action : ["reaction", ""]
		}
	}
});
AddSubClass("barbarian", "storm herald", {
	regExpSearch : /^(?=.*storm)(?=.*herald).*$/i,
	subname : "Path of the Storm Herald",
	source : ["UA:BPP", 2],
	fullname : "Storm Herald",
	abilitySave : 3,
	features : {
		"subclassfeature3" : {
			name : "Storm Aura",
			source : ["UA:BPP", 2],
			minlevel : 3,
			description : "\n   " + "While raging, I emanate a 10-ft radius aura that shapes the environment around me" + "\n   " + "Use the \"Choose Features\" button above to select the aura",
			choices : ["Desert", "Sea", "Tundra"],
			"desert" : {
				name : "Storm of Fury: Desert",
				description : "\n   " + "While raging, I emanate a 10-ft radius aura that shapes the environment around me" + "\n   " + "Any enemy that ends its turn in my aura takes fire damage",
				additional : ["", "", "2 fire damage", "3 fire damage", "3 fire damage", "3 fire damage", "3 fire damage", "4 fire damage", "4 fire damage", "4 fire damage", "4 fire damage", "5 fire damage", "5 fire damage", "5 fire damage", "5 fire damage", "6 fire damage", "6 fire damage", "6 fire damage", "6 fire damage", "7 fire damage"],
				eval : "var ToAdd = [\"barbarian\", \"subclassfeature6\", \"desert\"]; if (classes.known.barbarian.level >= 6 && this.getField(\"Class Features Remember\").value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)}; ToAdd[1] = \"subclassfeature14\"; if (classes.known.barbarian.level >= 14 && this.getField(\"Class Features Remember\").value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)};"
			},
			"sea" : {
				name : "Storm of Fury: Sea",
				description : "\n   " + "While raging, I emanate a 10-ft radius aura that shapes the environment around me" + "\n   " + "At the end of each of my turns, I can choose a creature in my aura, other than myself" + "\n   " + "It must make a Dex save or take lightning damage, or half damage on a successful save" + "\n   " + "The DC for this save is 8 + my proficiency bonus + my Constitution modifier",
				additional : ["", "", "2d6", "2d6", "2d6", "2d6", "2d6", "2d6", "2d6", "3d6", "3d6", "3d6", "3d6", "3d6", "4d6", "4d6", "4d6", "4d6", "4d6", "4d6"],
				usages : 1,
				recovery : "turn",
				eval : "var ToAdd = [\"barbarian\", \"subclassfeature6\", \"sea\"]; if (classes.known.barbarian.level >= 6 && this.getField(\"Class Features Remember\").value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)}; ToAdd[1] = \"subclassfeature14\"; if (classes.known.barbarian.level >= 14 && this.getField(\"Class Features Remember\").value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)};"
			},
			"tundra" : {
				name : "Storm of Fury: Tundra",
				description : "\n   " + "While raging, I emanate a 10-ft radius aura that shapes the environment around me" + "\n   " + "Any enemy that ends its turn in my aura takes cold damage",
				additional : ["", "", "2 cold damage", "3 cold damage", "3 cold damage", "3 cold damage", "3 cold damage", "4 cold damage", "4 cold damage", "4 cold damage", "4 cold damage", "5 cold damage", "5 cold damage", "5 cold damage", "5 cold damage", "6 cold damage", "6 cold damage", "6 cold damage", "6 cold damage", "7 cold damage"],
				eval : "var ToAdd = [\"barbarian\", \"subclassfeature6\", \"tundra\"]; if (classes.known.barbarian.level >= 6 && this.getField(\"Class Features Remember\").value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)}; ToAdd[1] = \"subclassfeature14\"; if (classes.known.barbarian.level >= 14 && this.getField(\"Class Features Remember\").value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)};"
			}
		},
		"subclassfeature6" : {
			name : "Storm Soul",
			source : ["UA:BPP", 2],
			minlevel : 6,
			description : "\n   " + "Use the \"Choose Features\" button above to select the effect",
			choices : ["desert", "sea", "tundra"],
			choicesNotInMenu : true,
			"desert" : {
				name : "Storm Soul: Desert",
				description : "\n   " + "I have resistance to fire damage and don't suffer the effects of extreme heat",
				dmgres : ["Fire"],
				savetxt : { immune : ["effects of extreme heat"] }
			},
			"sea" : {
				name : "Storm Soul: Sea",
				description : "\n   " + "I have resistance to lightning damage and can breathe underwater",
				dmgres : ["Lightning"]
			},
			"tundra" : {
				name : "Storm Soul: Tundra",
				description : "\n   " + "I have resistance to cold damage and don't suffer the effects of extreme cold",
				dmgres : ["Cold"],
				savetxt : { immune : ["effects of extreme cold"] }
			},
			eval : "if (FeaChoice === \"\") {var CFrem = What(\"Class Features Remember\"); var tReg = /.*?barbarian,subclassfeature3,(desert|sea|tundra).*/i; if ((tReg).test(CFrem)) {FeaChoice = CFrem.replace(tReg, \"$1\"); AddString(\"Class Features Remember\", \"barbarian,subclassfeature6,\" + FeaChoice, false);};};"
		},
		"subclassfeature10" : {
			name : "Shield of the Storm",
			source : ["UA:BPP", 2],
			minlevel : 10,
			description : "\n   " + "While I'm raging, allies within my aura gain the benefits of my Storm Soul feature"
		},
		"subclassfeature14" : {
			name : "Raging Storm",
			source : ["UA:BPP", 2],
			minlevel : 14,
			description : "\n   " + "Use the \"Choose Features\" button above to select the effect",
			choices : ["desert", "sea", "tundra"],
			choicesNotInMenu : true,
			"desert" : {
				name : "Raging Storm: Desert",
				description : "\n   " + "Enemy in my aura move more than 5 ft on the ground must make a Strength save" + "\n   " + "On a fail, it moves only 5 ft and its speed drops to 0 until the start of its next turn" + "\n   " + "The DC for this save is 8 + my proficiency bonus + my Constitution modifier"
			},
			"sea" : {
				name : "Raging Storm: Sea",
				description : "\n   " + "Creatures in my aura hit by my attack must make a Str save or be knocked prone" + "\n   " + "The DC for this save is 8 + my proficiency bonus + my Strength modifier",
				calcChanges : {
					atkAdd : ["if (isMeleeWeapon && classes.known.barbarian && classes.known.barbarian.level > 13 && (/\\brage\\b/i).test(inputText)) {fields.Description += (fields.Description ? '; ' : '') + 'Str save or knocked prone'; }; ", "If I include the word 'Rage' in a melee weapon's name, it will show in its description that it forces targets that are hit to make a Strength saving throw or be knocked prone."]
				}
			},
			"tundra" : {
				name : "Raging Storm: Tundra",
				description : "\n   " + "The area within my aura is difficult terrain for my enemies"
			},
			eval : "if (FeaChoice === \"\") {var CFrem = What(\"Class Features Remember\"); var tReg = /.*?barbarian,subclassfeature3,(desert|sea|tundra).*/i; if ((tReg).test(CFrem)) {FeaChoice = CFrem.replace(tReg, \"$1\"); AddString(\"Class Features Remember\", \"barbarian,subclassfeature14,\" + FeaChoice, false);};};"
		}
	}
});
AddSubClass("barbarian", "zealot", {
	regExpSearch : /zealot/i,
	subname : "Path of the Zealot",
	source : ["UA:BPP", 2],
	fullname : "Zealot",
	features : {
		"subclassfeature3" : {
			name : "Divine Fury",
			source : ["UA:BPP", 2],
			minlevel : 3,
			description : "\n   " + "While raging, I can become cloaked in an aura of divine power until my rage ends" + "\n   " + "Choose a damage type using the \"Choose Feature\" button above",
			additional : ["", "", "1d6+1", "1d6+2", "1d6+2", "1d6+3", "1d6+3", "1d6+4", "1d6+4", "1d6+5", "1d6+5", "1d6+6", "1d6+6", "1d6+7", "1d6+7", "1d6+8", "1d6+8", "1d6+9", "1d6+9", "1d6+10"],
			usages : 1,
			recovery : "turn",
			choices : ["Necrotic Damage", "Radiant Damage"],
			"necrotic damage" : {
				name : "Divine Fury: Necrotic",
				description : "\n   " + "While raging, I become cloaked in an aura of divine power until my rage ends" + "\n   " + "At the end of my turn, each creature within 5 feet of me takes necrotic damage"
			},
			"radiant damage" : {
				name : "Divine Fury: Radiant",
				description : "\n   " + "While raging, I become cloaked in an aura of divine power until my rage ends" + "\n   " + "At the end of my turn, each creature within 5 feet of me takes radiant damage"
			}
		},
		"subclassfeature3.1" : {
			name : "Warrior of the Gods",
			source : ["UA:BPP", 2],
			minlevel : 3,
			description : "\n   " + "Spells restoring me to life (not undeath or anything else) don't need material comp."
		},
		"subclassfeature6" : {
			name : "Zealous Focus",
			source : ["UA:BPP", 3],
			minlevel : 6,
			description : "\n   " + "As a reaction when I fail a saving throw while raging, I can instead succeed on it" + "\n   " + "Doing so immediately ends my rage and I can't rage again until I finish a short rest",
			usages : 1,
			recovery : "short rest",
			action : ["reaction", " (in Rage)"]
		},
		"subclassfeature10" : {
			name : "Zealous Presence",
			source : ["UA:BPP", 3],
			minlevel : 10,
			description : "\n   " + "As an action, I howl in fury and unleash a battle cry infused with divine energy" + "\n   " + "Allies within 60 ft of me gain adv. on attacks and saves until the start of my next turn",
			usages : 1,
			recovery : "long rest",
			action : ["action", " (allies within 60 feet)"]
		},
		"subclassfeature14" : {
			name : "Rage Beyond Death",
			source : ["UA:BPP", 3],
			minlevel : 14,
			description : "\n   " + "While raging, having 0 hit points doesn't knock me unconscious" + "\n   " + "I still must make death saves, and I suffer the normal effects of taking damage" + "\n   " + "However, if I would die due to failing death saves, I don't die until my rage ends"
		}
	}
});
var iFileName = "UA_20161114_Bard-Colleges.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Unearthed Arcana: Bard Colleges article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:BC"] = {
	name : "Unearthed Arcana: Bard Colleges",
	abbreviation : "UA:BC",
	group : "Unearthed Arcana",
	url : "http://media.wizards.com/2016/dnd/downloads/UA_Bard.pdf",
	date : "2016/11/14"
};

// Adds 2 subclasses for the Bard
AddSubClass("bard", "college of glamour", {
	regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*glamour).*$/i,
	subname : "College of Glamour",
	source : ["UA:BC", 1],
	features : {
		"subclassfeature3" : {
			name : "Mantle of Inspiration",
			source : ["UA:BC", 1],
			minlevel : 3,
			description : "\n   " + "As a bonus action, I expend one bardic inspiration die to aid those within 60 ft of me" + "\n   " + "A number of allies equal to my Cha mod gain twice the die roll in temporary HP" + "\n   " + "They can use a reaction to move their speed toward me, without opportunity attacks",
			additional : "1 bardic inspiration die",
			action : ["bonus action", ""]
		},
		"subclassfeature3.1" : {
			name : "Enthralling Performance",
			source : ["UA:BC", 1],
			minlevel : 3,
			recovery : "short rest",
			usages : 1,
			description : "\n   " + "By performing for at least 10 minutes, I can charm humanoids within 60 ft of me" + "\n   " + "At the end of the performance, my Cha mod number of targets must make a Wis save" + "\n   " + "On a fail, a target is charmed for 1 hour; If success, it doesn't knows I tried to charm it" + "\n   " + "While charmed, the target idolizes me, hinders those opposing me, and avoids violence" + "\n   " + "This lasts until a target takes damage, I attack it, or if it sees me attacking its allies"
		},
		"subclassfeature6" : {
			name : "Mantle of Majesty",
			source : ["UA:BC", 1],
			minlevel : 6,
			recovery : "long rest",
			usages : 1,
			action : ["bonus action", ""],
			description : "\n   " + "As a bonus action, I take on an appearance of unearthly beauty for 1 minute" + "\n   " + "As a bonus action during this time, I can cast command without using a spell slot" + "\n   " + "Creatures charmed by me automatically fail their saves against these command spells",
			spellcastingBonus : [{
				name : "Mantle of Majesty",
				spells : ["command"],
				selection : ["command"],
				oncelr : true
			}]
		},
		"subclassfeature14" : {
			name : "Unspeakable Majesty",
			source : ["UA:BC", 2],
			minlevel : 14,
			recovery : "short rest",
			usages : 1,
			action : ["action", ""],
			description : "\n   " + "As an action, I can cast Sanctuary on myself without using a spell slot" + "\n   " + "If a creature fails its save to this, I gain adv. on all Cha checks against it for 1 min" + "\n   " + "In addition, the target has disadv. on saves it makes against my spells on my next turn",
			spellcastingBonus : [{
				name : "Unspeakable Majesty",
				spells : ["sanctuary"],
				selection : ["sanctuary"],
				oncesr : true
			}]
		}
	}
});
AddSubClass("bard", "college of whispers", {
	regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*whispers).*$/i,
	subname : "College of Whispers",
	source : ["UA:BC", 2],
	features : {
		"subclassfeature3" : {
			name : "Venomous Blades",
			source : ["UA:BC", 2],
			minlevel : 3,
			description : "\n   " + "When I hit with a weapon attack, I can expend a bardic inspiration die to add damage" + "\n   " + "I roll the inspiration die twice, dealing the total in Poison damage to the target" + "\n   " + "I can do this no more than once per round on my turn",
			additional : "1 bardic inspiration die"
		},
		"subclassfeature3.1" : {
			name : "Venomous Words",
			source : ["UA:BC", 2],
			minlevel : 3,
			recovery : "short rest",
			usages : 1,
			description : "\n   " + "By speaking in private with a humanoid for at least 10 minutes, I can try to frighten it" + "\n   " + "After the conversation, the target must make a Wisdom save or be frightened of me" + "\n   " + "If the save is successful, the target doesn't know I try to frighten it" + "\n   " + "While frightened, the target avoids the company of others, including its allies" + "\n   " + "The target also tries to hide in the most secret, safest place available to it" + "\n   " + "This lasts for 1 hour or until it is attacked/damaged, or if it sees me attacking its allies"
		},
		"subclassfeature6" : {
			name : "Mantle of Whispers",
			source : ["UA:BC", 2],
			minlevel : 6,
			action : ["reaction", ""],
			description : "\n   " + "As a reaction when a creature dies within 5 ft or by my hand, I can capture its shadow" + "\n   " + "I can use shadows of those with the same type and size as me (or Medium if I'm Small)" + "\n   " + "I can have only one captured shadow at a time and I can don it as a shadow disguise",
			extraname : "Mantle of Whispers",
			"shadow disguise" : {
				name : "Shadow Disguise",
				source : ["UA:BC", 2],
				action : ["action", " (start)"],
				description : "\n   " + "As an action, I can don a shadow that I captured as a disguise for 1 hour or until I stop it" + "\n   " + "I take on the creature's appearance and I can access its surface memories, but not secrets" + "\n   " + "I have access to information that it would would freely share with a casual acquaintance" + "\n   " + "This is enough that I can pass yourself off as the creature by drawing on its memories" + "\n   " + "Anybody can see through the disguise with a Wis (Insight) check vs. my Cha (Deception) +5" + "\n   " + "The knowledge disappears when the disguise ends",
				eval : "AddAction(\"bonus action\", \"Shadow Disguise (end)\", \"Bard (College of Whispers)\");",
				removeeval : "RemoveAction(\"bonus action\", \"Shadow Disguise (end)\");"
			},
			eval : "ClassFeatureOptions([\"bard\", \"subclassfeature6\", \"shadow disguise\", \"extra\"]);",
			removeeval : "ClassFeatureOptions([\"bard\", \"subclassfeature6\", \"shadow disguise\", \"extra\"], \"remove\");"
		},
		"subclassfeature14" : {
			name : "Shadow Lore",
			source : ["UA:BC", 3],
			minlevel : 14,
			recovery : "long rest",
			usages : 1,
			action : ["action", ""],
			description : "\n   " + "As an action, I whisper to a creature within 30 ft that can hear and understand me" + "\n   " + "Only the target can hear me; It must make a Wisdom save or be charmed by me" + "\n   " + "If failed, it thinks I know its most mortifying secret, otherwise it only hears mumbling" + "\n   " + "While charmed, the target obeys my commands, but won't risk its life or fight for me" + "\n   " + "This lasts for 8 hours or until I or my allies attack or damage it" + "\n   " + "When the effect ends, the target has no idea why it was so afraid of me"
		}
	}
});
var iFileName = "UA_20161121_Cleric-Divine-Domains.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Unearthed Arcana: Cleric Divine Domains article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:CDD"] = {
	name : "Unearthed Arcana: Cleric Divine Domains",
	abbreviation : "UA:CDD",
	group : "Unearthed Arcana",
	url : "http://media.wizards.com/2016/dnd/downloads/UA_Cleric.pdf",
	date : "2016/11/21"
};

// Adds 3 subclasses for the Cleric
AddSubClass("cleric", "forge domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(forge|forgery|blacksmith)).*$/i,
	subname : "Forge Domain",
	source : ["UA:CDD", 1],
	spellcastingExtra : ["searing smite", "shield", "heat metal", "magic weapon", "elemental weapon", "protection from energy", "fabricate", "wall of fire", "animate objects", "creation"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Proficiency",
			source : ["UA:CDD", 1],
			minlevel : 1,
			description : "\n   " + "I gain proficiency with heavy armor",
			armor : [false, false, true, false]
		},
		"subclassfeature1.1" : {
			name : "Blessing of the Forge",
			source : ["UA:CDD", 1],
			minlevel : 1,
			action : ["action", ""],
			usages : 1,
			recovery : "long rest",
			description : "\n   " + "At the end of a long rest, I can imbue magic into a nonmagical weapon or armor" + "\n   " + "It becomes magical: +1 AC if armor, or +1 to attack and damage rolls if a weapon" + "\n   " + "This lasts until the end of my next long rest"
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Artisan's Blessing",
			source : ["UA:CDD", 1],
			minlevel : 2,
			description : "\n   " + "During a short rest, I can conduct a ritual to craft an item that is at least part metal" + "\n   " + "The object can be worth up to 100 gp, and I must expend metals of equal value to it" + "\n   " + "The item can be an exact duplicate of a nonmagical item if I possess the original"
		},
		"subclassfeature6" : {
			name : "Soul of the Forge",
			source : ["UA:CDD", 1],
			minlevel : 6,
			additional : ["", "", "", "", "", "+6 force damage", "+7 force damage", "+8 force damage", "+9 force damage", "+10 force damage", "+11 force damage", "+12 force damage", "+13 force damage", "+14 force damage", "+15 force damage", "+16 force damage", "+17 force damage", "+18 force damage", "+19 force damage", "+20 force damage"],
			description : "\n   " + "I gain a +1 AC while wearing medium or heavy armor, and resistance to fire damage" + "\n   " + "When I hit a construct with an attack, I deal my cleric level in additional force damage",
			dmgres : ["Fire"],
			eval : "AddACMisc(1, \"Soul of the Forge\", \"+1 AC while wearing Medium or Heavy armor.\\n\\nSoul of the Forge was gained from Cleric (Forge Domain).\", \"!tDoc.getField('Medium Armor').isBoxChecked(0) && !tDoc.getField('Heavy Armor').isBoxChecked(0)\");",
			removeeval : "AddACMisc(0, \"Soul of the Forge\", \"+1 AC while wearing Medium or Heavy armor.\\n\\nSoul of the Forge was gained from Cleric (Forge Domain).\");"
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : ["UA:CDD", 1],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
			additional : levels.map(function (n) {
				if (n < 8) return "";
				return "+" + (n < 14 ? 1 : 2) + "d8 fire damage";
			}),
			calcChanges : {
				atkAdd : ["if (classes.known.cleric && classes.known.cleric.level > 7 && !isSpell) {fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 fire damage'; }; ", "Once per turn, I can have one of my weapon attacks that hit do extra fire damage."]
			}
		},
		"subclassfeature17" : {
			name : "Saint of Forge and Fire",
			source : ["UA:CDD", 1],
			minlevel : 17,
			description : "\n   " + "I gain immunity to fire damage" + "\n   " + "If wearing heavy armor, I'm resistant to nonmagical bludg./piercing/slashing damage",
			savetxt : { immune : ["fire"] },
			dmgres : [["Bludgeoning", "Bludg. (nonmagical)"], ["Piercing", "Pierc. (nonmagical)"], ["Slashing", "Slash. (nonmagical)"]]
		}
	}
});
AddSubClass("cleric", "grave domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(grave)).*$/i,
	subname : "Grave Domain",
	source : ["UA:CDD", 2],
	spellcastingExtra : ["bane", "false life", "gentle repose", "ray of enfeeblement", "revivify", "vampiric touch", "blight", "death ward", "antilife shell", "raise dead"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Proficiency",
			source : ["UA:CDD", 2],
			minlevel : 1,
			description : "\n   " + "I gain proficiency with heavy armor",
			armor : [false, false, true, false]
		},
		"subclassfeature1.1" : {
			name : "Circle of Mortality",
			source : ["UA:CDD", 2],
			minlevel : 1,
			action : ["bonus action", ""],
			description : "\n   " + "Spells I cast to heal a living creature at 0 HP have their dice count as their max result" + "\n   " + "As a bonus action, I can cast the Spare the Dying cantrip, if I know it"
		},
		"subclassfeature1.2" : {
			name : "Eyes of the Grave",
			source : ["UA:CDD", 2],
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			description : "\n   " + "By spending 1 min in uninterrupted contemplation, I sense undead within 1 mile" + "\n   " + "I learn their number, distance, and direction from me" + "\n   " + "In addition, I know the creature type of the one with the highest CR"
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Path to the Grave",
			source : ["UA:CDD", 2],
			minlevel : 2,
			action : ["action", ""],
			description : "\n   " + "As an action, I can touch a creature to make it take extra damage from one attack" + "\n   " + "It is vulnerable to all the damage from the next spell or attack from me or an ally" + "\n   " + "This only applies to the first time that source inflicts damage, and then ends" + "\n   " + "If the creature has resistance or is immune to the damage, it instead loses it"
		},
		"subclassfeature6" : {
			name : "Sentinel at Death's Door",
			source : ["UA:CDD", 2],
			minlevel : 6,
			usages : 1,
			recovery : "short rest",
			action : ["reaction", ""],
			description : "\n   " + "As a reaction, I turn a critical hit to me or an ally I see within 30 ft to a normal hit"
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : ["UA:CDD", 2],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
			additional : levels.map(function (n) {
				if (n < 8) return "";
				return "+" + (n < 14 ? 1 : 2) + "d8 necrotic damage";
			}),
			calcChanges : {
				atkAdd : ["if (classes.known.cleric && classes.known.cleric.level > 7 && !isSpell) {fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 necrotic damage'; }; ", "Once per turn, I can have one of my weapon attacks that hit do extra necrotic damage."]
			}
		},
		"subclassfeature17" : {
			name : "Keeper of Souls",
			source : ["UA:CDD", 2],
			minlevel : 17,
			description : "\n   " + "Once per round, if I'm not incapacitated, I can manipulate the energy of the dying" + "\n   " + "When an enemy I can see dies within 30 ft of me, I or an ally within 30 ft regain HP" + "\n   " + "The HP regained is equal to the enemy's number of Hit Dice"
		}
	}
});
AddSubClass("cleric", "protection domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(protection|protect|defend|defense)).*$/i,
	subname : "Protection Domain",
	source : ["UA:CDD", 3],
	spellcastingExtra : ["compelled duel", "protection from evil and good", "aid", "protection from poison", "protection from energy", "slow", "guardian of faith", "otiluke's resilient sphere", "antilife shell", "wall of force"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Proficiency",
			source : ["UA:CDD", 3],
			minlevel : 1,
			description : "\n   " + "I gain proficiency with heavy armor",
			armor : [false, false, true, false]
		},
		"subclassfeature1.1" : {
			name : "Shield of the Faithful",
			source : ["UA:CDD", 3],
			minlevel : 1,
			action : ["reaction", ""],
			description : "\n   " + "As a reaction, when someone within 5 ft of me is attacked, I impose disadv. on the roll" + "\n   " + "To do this, I must be able to see both the attacker and the target"
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Radiant Defense",
			source : ["UA:CDD", 3],
			minlevel : 2,
			action : ["action", ""],
			description : "\n   " + "As an action, I channel blessed energy into an ally that I can see within 30 ft of me" + "\n   " + "The first time the ally is hit within the next minute, the attacker takes radiant damage",
			additional : ["", "2d10+2", "2d10+3", "2d10+4", "2d10+5", "2d10+6", "2d10+7", "2d10+8", "2d10+9", "2d10+10", "2d10+11", "2d10+12", "2d10+13", "2d10+14", "2d10+15", "2d10+16", "2d10+17", "2d10+18", "2d10+19", "2d10+20"]
		},
		"subclassfeature6" : {
			name : "Blessed Healer",
			source : ["UA:CDD", 3],
			minlevel : 6,
			description : "\n   " + "When I cast a spell to heal another using a spell slot, I heal 2 + the spell's level as well"
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : ["UA:CDD", 3],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
			additional : levels.map(function (n) {
				if (n < 8) return "";
				return "+" + (n < 14 ? 1 : 2) + "d8 radiant damage";
			}),
			calcChanges : {
				atkAdd : ["if (classes.known.cleric && classes.known.cleric.level > 7 && !isSpell) {fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 radiant damage'; }; ", "Once per turn, I can have one of my weapon attacks that hit do extra radiant damage."]
			}
		},
		"subclassfeature17" : {
			name : "Indomitable Defense",
			source : ["UA:CDD", 3],
			minlevel : 17,
			usages : 1,
			recovery : "short rest",
			action : ["action", " (transfer)"],
			description : "\n   " + "I gain resistance to two of: bludgeoning, necrotic, piercing, radiant, or slashing damage" + "\n   " + "Whenever I finish a short or long rest, I can change the damage types chosen" + "\n   " + "As an action, I can transfer both resistances to one creature I touch" + "\n   " + "As a bonus action, I can transfer the resistances back to myself" + "\n   " + "Otherwise, the creature keeps this resistance until the end of my next short or long rest",
			eval : "AddAction(\"bonus action\", \"Indomitable Defense (return)\", \"Cleric (Protection Domain)\");",
			removeeval : "RemoveAction(\"bonus action\", \"Indomitable Defense (return)\");"
		}
	}
});
var iFileName = "UA_20161128_Druid-Circles.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Unearthed Arcana: Druid Circles article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:DC"] = {
	name : "Unearthed Arcana: Druid Circles",
	abbreviation : "UA:DC",
	group : "Unearthed Arcana",
	url : "http://media.wizards.com/2016/dnd/downloads/UA_Druid11272016_CAWS.pdf",
	date : "2016/11/28"
};

// Adds 3 subclasses for the Druid
AddSubClass("druid", "circle of dreams", {
	regExpSearch : /^(?=.*(druid|shaman))(?=.*\bdreams\b).*$/i,
	subname : "Circle of Dreams",
	source : ["UA:DC", 1],
	features : {
		"subclassfeature2" : {
			name : "Balm of the Summer Court",
			source : ["UA:DC", 1],
			minlevel : 2,
			description : "\n   " + "I have a pool of fey energy represented by a number of d6s equal to my druid level" + "\n   " + "As a bonus action, I can spend dice to heal an ally within 120 ft of me that I can see " + "\n   " + "I can spend up to half my druid level worth of dice from the pool at once" + "\n   " + "The ally heals an amount equal to the total rolled and gains 1 temp HP per die spent" + "\n   " + "In addition, the ally gains +5 ft speed per die spent, which lasts for 1 minute",
			usages : ["", "2d6 per ", "3d6 per ", "4d6 per ", "5d6 per ", "6d6 per ", "7d6 per ", "8d6 per ", "9d6 per ", "10d6 per ", "11d6 per ", "12d6 per ", "13d6 per ", "14d6 per ", "15d6 per ", "16d6 per ", "17d6 per ", "18d6 per ", "19d6 per ", "20d6 per "],
			recovery : "long rest"
		},
		"subclassfeature6" : {
			name : "Hearth of Moonlight and Shadow",
			source : ["UA:DC", 1],
			minlevel : 6,
			description : "\n   " + "At the start of a short or long rest, I can create a warded area of 30-ft radius" + "\n   " + "Within this area, my allies and I gain +5 on Wis (Perception) checks to detect creatures" + "\n   " + "Also, any light from open flames is not visible from outside the area" + "\n   " + "This effect lasts until the end of the rest or when I leave the area"
		},
		"subclassfeature10" : {
			name : "Hidden Paths",
			source : ["UA:DC", 1],
			minlevel : 10,
			description : "\n   " + "On my turn, I can teleport up to 30 ft to where I can see; Moved distance costs speed" + "\n   " + "As an action, I can teleport a willing ally I touch up to 30 ft to a spot I can see" + "\n   " + "Once I used either option, I can't use this feature again until 1d4 rounds have passed",
			usages : 1,
			recovery : "1d4 rounds",
			action : ["action", " (on ally)"]
		},
		"subclassfeature14" : {
			name : "Purifying Light",
			source : ["UA:DC", 1],
			minlevel : 14,
			description : "\n   " + "When I use a spell slot with a spell to restores HP, I can use Dispel Magic on the target" + "\n   " + "The Dispel Magic counts as if being cast with the same spell slot as the healing spell" + "\n   " + "Each creature effected by the Dispel Magic costs as one use of this feature",
			usages : 3,
			recovery : "long rest"
		}
	}
});
AddSubClass("druid", "circle of the shepherd", {
	regExpSearch : /^(?=.*(druid|shaman))(?=.*shepherd).*$/i,
	subname : "Circle of the Shepherd",
	source : ["UA:DC", 1],
	features : {
		"subclassfeature2" : {
			name : "Beast Speech",
			source : ["UA:DC", 2],
			minlevel : 2,
			description : "\n   " + "I can talk with beasts, they understand me and I them, to the limit of their intelligence" + "\n   " + "This doesn't automatically make me friends with all beasts"
		},
		"subclassfeature2.1" : {
			name : "Spirit Bond",
			source : ["UA:DC", 2],
			minlevel : 2,
			description : "\n   " + "As a bonus action, I can summon a spirit to an empty space within 60 ft that I can see" + "\n   " + "The Bear, Hawk, or Wolf spirit, creates a 30-ft radius aura and persist for 1 minute" + "\n   " + "It doesn't occupy space, is immobile, and counts as neither a creature nor an object" + "\n    - " + "Bear: my allies in the area and I instantly gain 5 + my druid level in temp HP" + "\n       " + "While in the aura, my allies and I gain advantage on Strength checks and saves" + "\n    - " + "Hawk: my allies and I gain advantage on attacks against targets in the aura" + "\n    - " + "Wolf: my allies and I gain advantage on ability checks to detect targets in the aura" + "\n       " + "If I cast a healing spell with a spell slot, allies in the aura heal my druid level in HP",
			usages : 1,
			recovery : "short rest",
			action : ["bonus action", ""]
		},
		"subclassfeature6" : {
			name : "Mighty Summoner",
			source : ["UA:DC", 2],
			minlevel : 6,
			description : "\n   " + "Beast I summon with my spells have +2 HP per HD and their attacks count as magical"
		},
		"subclassfeature10" : {
			name : "Guardian Spirit",
			source : ["UA:DC", 2],
			minlevel : 10,
			description : "\n   " + "Whenever I finish a long rest, I gain the benefits of a Death Ward spell for 24 hours"
		},
		"subclassfeature14" : {
			name : "Faithful Summons",
			source : ["UA:DC", 2],
			minlevel : 14,
			description : "\n   " + "When I am reduced to 0 HP or incapacitated against my will, I can summon protectors" + "\n   " + "I gain the benefits of a Conjure Animals spell as if cast with a 9th-level spell slot" + "\n   " + "It summons 4 beast of my choice with CR 2 or lower within 20 ft of me for 1 hour" + "\n   " + "If they receive no commands from me, they protect me from harm and attack foes",
			usages : 1,
			recovery : "long rest"
		}
	}
});
AddSubClass("druid", "circle of twilight", {
	regExpSearch : /^(?=.*(druid|shaman))(?=.*twilight).*$/i,
	subname : "Circle of Twilight",
	source : ["UA:DC", 2],
	features : {
		"subclassfeature2" : {
			name : "Harvest's Scythe",
			source : ["UA:DC", 3],
			minlevel : 2,
			description : "\n   " + "I have a pool of energy represented by a number of d10s equal to my druid level" + "\n   " + "When I roll damage for a spell, I can do extra necrotic damage with dice from the pool" + "\n   " + "I can spend up to half my druid level worth of dice from the pool at once" + "\n   " + "If I any hostiles die from an augmented spell, I can heal one ally I can see within 30 ft" + "\n   " + "The ally regains 2 HP per die spent; or 5 HP per die if one of the slain was undead  ",
			usages : ["", "2d10 per ", "3d10 per ", "4d10 per ", "5d10 per ", "6d10 per ", "7d10 per ", "8d10 per ", "9d10 per ", "10d10 per ", "11d10 per ", "12d10 per ", "13d10 per ", "14d10 per ", "15d10 per ", "16d10 per ", "17d10 per ", "18d10 per ", "19d10 per ", "20d10 per "],
			recovery : "long rest"
		},
		"subclassfeature6" : {
			name : "Speech Beyond the Grave",
			source : ["UA:DC", 3],
			minlevel : 6,
			description : "\n   " + "Once per short rest, I can cast Speak with Dead without spell slots or material comp." + "\n   " + "The target and I can understand each other, regardless of language or intelligence",
			usages : 1,
			recovery : "short rest",
			spellcastingBonus : {
				name : "Speech Beyond the Grave",
				spells : ["speak with dead"],
				selection : ["speak with dead"],
				oncesr : true
			}
		},
		"subclassfeature10" : {
			name : "Watcher at the Threshold",
			source : ["UA:DC", 3],
			minlevel : 10,
			description : "\n   " + "I gain resistance to necrotic and radiant damage" + "\n   " + "While I'm not incapacitated, allies within 30 ft of me gain adv. on their death saves",
			dmgres : ["Necrotic", "Radiant"]
		},
		"subclassfeature14" : {
			name : "Paths of the Dead",
			source : ["UA:DC", 3],
			minlevel : 14,
			description : "\n   " + "Once per short rest, I can cast Etherealness without needing a spell slot (PHB 238)",
			usages : 1,
			recovery : "short rest",
			spellcastingBonus : {
				name : "Paths of the Dead",
				spells : ["etherealness"],
				selection : ["etherealness"],
				oncesr : true
			}
		}
	}
});
var iFileName = "UA_20161205_Fighter-Martial-Archetypes.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Unearthed Arcana: Eberron article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:FMA"] = {
	name : "Unearthed Arcana: Fighter Martial Archetypes",
	abbreviation : "UA:FMA",
	group : "Unearthed Arcana",
	url : "http://media.wizards.com/2016/dnd/downloads/2016_Fighter_UA_1205_1.pdf",
	date : "2016/12/05"
};

// Adds 4 subclasses for the Fighter
AddSubClass("fighter", "arcane archer", {
	regExpSearch : /^(?=.*arcane)(?=.*archer).*$/i,
	subname : "Arcane Archer",
	source : ["UA:FMA", 1],
	fullname : "Arcane Archer",
	features : {
		"subclassfeature3" : {
			name : "Arcane Arrow",
			source : ["UA:FMA", 1],
			minlevel : 3,
			description : "\n   " + "As a bonus action, I can create one magical arrow that I can fire with a bow" + "\n   " + "A shot with the arrow counts as magical and does additional force damage on a hit" + "\n   " + "When I create the arrow, I can apply one of my known Arcane Shots on it" + "\n   " + "This arrow lasts until the end of my turn or until I hit or miss a target with it",
			additional : levels.map(function (n) {
				return n < 3 ? "" :
					(n < 18 ? "+2" : "+4") + "d6 force damage";
			}),
			additional : ["", "", "+2d6 force damage", "+2d6 force damage", "+2d6 force damage", "+2d6 force damage", "+2d6 force damage", "+2d6 force damage", "+2d6 force damage", "+2d6 force damage", "+2d6 force damage", "+2d6 force damage", "+2d6 force damage", "+2d6 force damage", "+2d6 force damage", "+2d6 force damage", "+2d6 force damage", "+4d6 force damage", "+4d6 force damage", "+4d6 force damage"],
			usages : 2,
			recovery : "short rest",
			eval : "AddAction(\"bonus action\", \"Create Magical Arrow\", \"Arcane Archer (Arcane Arrow)\");",
			removeeval : "RemoveAction(\"bonus action\", \"Create Magical Arrow\")",
			calcChanges : {
				atkAdd : ["if ((/longbow|shortbow/i).test(WeaponName) && (/^(?=.*arcane)(?=.*arrow).*$/i).test(inputText) && classes.known.fighter && classes.known.fighter.level) {fields.Description += (fields.Description ? '; +' : '+') + (classes.known.fighter.level < 18 ? 2 : 4) + 'd6 force damage' + (thisWeapon[1] ? '' : '; Counts as magical'); }; ", "If I include the words 'Arcane Arrow' in a longbow or shortbow's name, it gets an added description of the damage this Arcane Arrow adds."]
			}
		},
		"subclassfeature3.1" : {
			name : "Arcane Shot",
			source : ["UA:FMA", 1],
			minlevel : 3,
			description : "\n   " + "Use the \"Choose Features\" button above to add Arcane Shots to the third page",
			additional : ["", "", "2 known", "2 known", "2 known", "2 known", "3 known", "3 known", "3 known", "4 known", "4 known", "4 known", "4 known", "4 known", "5 known", "5 known", "5 known", "6 known", "6 known", "6 known"],
			extraname : "Arcane Shot",
			extrachoices : ["Beguiling Arrow", "Brute Bane Arrow", "Bursting Arrow", "Defending Arrow", "Grasping Arrow", "Piercing Arrow", "Seeking Arrow", "Shadow Arrow"],
			"beguiling arrow" : {
				name : "Beguiling Arrow",
				source : ["UA:FMA", 1],
				description : " [Enchantment]" + "\n   " + "If the arrow hits, I choose an ally withing 30 feet of the target" + "\n   " + "The target can't attack the chosen ally or include the ally in any harmful area of effects" + "\n   " + "This effect stops if the target is immune to charm effects or the ally damages the target"
			},
			"brute bane arrow" : {
				name : "Brute Bane Arrow",
				source : ["UA:FMA", 1],
				description : " [Necromancy]" + "\n   " + "If the arrow hits, the target's attacks deal half damage until the end of my next turn" + "\n   " + "Only attacks that deal bludgeoning, piercing or slashing damage are halved"
			},
			"bursting arrow" : {
				name : "Bursting Arrow",
				source : ["UA:FMA", 2],
				description : " [Evocation]" + "\n   " + "If the arrow hits, all creatures within 10 ft of the target creature take 2d6 force damage"
			},
			"defending arrow" : {
				name : "Defending Arrow",
				source : ["UA:FMA", 2],
				description : " [Abjuration]" + "\n   " + "If the arrow hits, the target has disadv. on its next attack before the end of my next turn"
			},
			"grasping arrow" : {
				name : "Grasping Arrow",
				source : ["UA:FMA", 2],
				description : " [Conjuration]" + "\n   " + "If the arrow hits, the target is wrapped with grasping, thorny brambles for 1 minute" + "\n   " + "The target has -10 ft speed; It takes 2d6 slashing damage when moving more than 1 ft" + "\n   " + "As an action, the target or a creature can remove the brambles with a DC 10 Str check"
			},
			"piercing arrow" : {
				name : "Piercing Arrow",
				source : ["UA:FMA", 2],
				description : " [Transmutation]" + "\n   " + "The arrow transform into an ethereal dart that creates a line of 1 ft wide and 30 ft long" + "\n   " + "I then make a separate attack using my Arcane Arrow against each creature in that line"
			},
			"seeking arrow" : {
				name : "Seeking Arrow",
				source : ["UA:FMA", 2],
				description : " [Divination]" + "\n   " + "As an action, I can make a ranged attack against a creature I have seen in the last minute" + "\n   " + "The seeking arrow moves around corners and obstacles to hit the target" + "\n   " + "The attack ignores 1/2 and 3/4 cover and disadvantage from range or being out of sight" + "\n   " + "The attack misses if the target is too far away or there is no path for the arrow to travel" + "\n   " + "I know if the arrow hits the target, but don't learn the location unless it's in line of sight",
				action : ["action", ""]
			},
			"shadow arrow" : {
				name : "Shadow Arrow",
				source : ["UA:FMA", 2],
				description : " [Illusion]" + "\n   " + "If the arrow hits, the target can't see beyond 30 ft until the end of my next turn"
			}
		},
		"subclassfeature3.2" : {
			name : "Archer's Lore",
			source : ["UA:FMA", 1],
			minlevel : 3,
			description : "\n   " + "I gain proficiency with two skills" + "\n   " + "I can choose from: Arcana, Athletics, Nature, Perception, Stealth, or Survival",
			skillstxt : "\n\n" + toUni("Arcane Archer") + ": Choose two from Arcana, Athletics, Nature, Perception, Stealth, and Survival."
		},
		"subclassfeature7" : {
			name : "Conjure Arrows",
			source : ["UA:FMA", 1],
			minlevel : 7,
			description : "\n   " + "As an action, I can create up to 20 nonmagical arrows that remain for 10 minutes" + "\n   " + "The arrows vanish if I use this feature again with 10 minutes",
			action : ["action", ""]
		},
		"subclassfeature15" : {
			name : "Ever-Ready Arrow",
			source : ["UA:FMA", 1],
			minlevel : 15,
			description : "\n   " + "I regain one use of Arcane Arrow one minute after I expend my last remaining use of it"
		}
	}
});
AddSubClass("fighter", "knight", {
	regExpSearch : /^(?!.*(exalted|sacred|holy|divine|nature|natural|purple.*dragon|green|fey|horned))(?=.*knight).*$/i,
	subname : "Knight",
	source : ["UA:FMA", 2],
	fullname : "Knight",
	features : {
		"subclassfeature3" : {
			name : "Born in the Saddle",
			source : ["UA:FMA", 2],
			minlevel : 3,
			description : "\n   " + "Mounting or dismounting a creature costs me only 5 ft of movement" + "\n   " + "I have advantage on saving throws made to avoid falling off my mount" + "\n   " + "If I fall off my mount for less than 10 ft while not incapacitated, I land on my feet",
			savetxt : { adv_vs : ["falling off my mount"] }
		},
		"subclassfeature3.1" : {
			name : "Implacable Mark",
			source : ["UA:FMA", 2],
			minlevel : 3,
			description : "\n   " + "If I hit a creature with a melee weapon attack, I mark it until the end of my next turn" + "\n   " + "A marked target has disadv. on any attacks vs. those that didn't mark it" + "\n   " + "I can attack the target I marked if it is within 5 ft of me and does one of the following:" + "\n    - " + "It moves at least 1 foot on its turn" + "\n    - " + "It makes an attack that it suffers disadv. on from being marked" + "\n   " + "This attack uses my reaction, has adv., and adds my fighter level as extra damage" + "\n   " + "I can still do this if I already used my reaction this round, but not this turn",
			recovery : "short rest",
			usages : 3,
			additional : levels.map(function (n) {
				return n < 3 ? "" : "+" + n + " damage";
			}),
			action : ["reaction", ""],
			calcChanges : {
				atkCalc : ["if (isMeleeWeapon && classes.known.fighter && classes.known.fighter.level > 2 && (/\\b(implacable.?mark|marked)\\b/i).test(WeaponText)) { output.extraDmg += classes.known.fighter.level; }; ", "If I include the words 'Implacable Mark' or 'Marked' in the name or description of a melee weapon, it gets my fighter level added to its Damage."]
			}
		},
		"subclassfeature7" : {
			name : "Noble Cavalry",
			source : ["UA:FMA", 2],
			minlevel : 7,
			description : "\n   " + "I gain proficiency with two skills or one language" + "\n   " + "I can choose the skills from: Animal Handling, History, Insight, Persuasion, and Religion",
			choices : ["Language proficiency", "2 Skill proficiencies: Animal Handling, History, Insight, Persuasion, or Religion"],
			"language proficiency" : {
				name : "Noble Cavalry",
				description : "\n   " + "I learn one language of my choice",
				languageProfs : [1]
			},
			"2 skill proficiencies: animal handling, history, insight, persuasion, or religion" : {
				name : "Noble Cavalry",
				description : "\n   " + "I gain 2 skill proficiencies: Animal Handling, History, Insight, Persuasion, or Religion",
				skillstxt : "\n\n" + toUni("Knight") + ": Choose two from: Animal Handling, History, Insight, Persuasion, or Religion."
			}
		},
		"subclassfeature10" : {
			name : "Hold the Line",
			source : ["UA:FMA", 2],
			minlevel : 10,
			description : "\n   " + "As a reaction when a creature within 5 ft of me moves at least 1 ft, I can attack it" + "\n   " + "This attack is made with a melee weapon attack and deals extra damage on a hit" + "\n   " + "If this hits, the attack reduces the target's speed to 0 until the end of this turn",
			additional : levels.map(function (n) {
				return n < 10 ? "" : "+" + Math.floor(n / 2) + " damage";
			}),
			action : ["reaction", ""],
			calcChanges : {
				atkCalc : ["if (isMeleeWeapon && classes.known.fighter && classes.known.fighter.level > 9 && (/holds?.the.line/i).test(WeaponText)) { output.extraDmg += Math.floor(classes.known.fighter.level / 2); }; ", "If I include the words 'Hold the Line' in the name or description of a melee weapon, it gets half my fighter level added to its Damage."]
			}
		},
		"subclassfeature15" : {
			name : "Rapid Strike",
			source : ["UA:FMA", 3],
			minlevel : 15,
			description : "\n   " + "If I have adv. on an attack, I can forgo it to make an extra attack as a bonus action" + "\n   " + "This attack has to be with the same weapon against the same target",
			action : ["bonus action", ""]
		},
		"subclassfeature18" : {
			name : "Defender's Blade",
			source : ["UA:FMA", 3],
			minlevel : 18,
			description : "\n   " + "I can do opportunity attacks if I already used my reaction this round, but not this turn" + "\n   " + "I gain +1 bonus to AC when I'm wearing heavy armor",
			eval : "AddACMisc(1, \"Defender's Blade\", \"When wearing heavy armor, the class feature Defender's Blade gives a +1 bonus to AC\", \"!tDoc.getField('Heavy Armor').isBoxChecked(0)\")",
			removeeval : "AddACMisc(0, \"Defender's Blade\", \"When wearing heavy armor, the class feature Defender's Blade gives a +1 bonus to AC\")"
		}
	}
});
AddSubClass("fighter", "samurai", {
	regExpSearch : /samurai/i,
	subname : "Samurai",
	source : ["UA:FMA", 3],
	fullname : "Samurai",
	features : {
		"subclassfeature3" : {
			name : "Fighting Spirit",
			source : ["UA:FMA", 3],
			minlevel : 3,
			description : "\n   " + "As a bonus action, I can give myself benefits that last until the end of my next turn" + "\n   " + "I then gain adv. on my attacks and resistance to bludgeoning/piercing/slashing damage",
			recovery : "short rest",
			usages : 3,
			action : ["bonus action", ""]
		},
		"subclassfeature7" : {
			name : "Elegant Courtier",
			source : ["UA:FMA", 3],
			minlevel : 7,
			description : "\n   " + "I can add my Wis modifier to any Cha check to persuade anyone of a high social station" + "\n   " + "I gain proficiency with either one language or the History, Insight, or Persuasion skill",
			choices : ["Language proficiency", "Skill proficiency: History, Insight, or Persuasion"],
			"language proficiency" : {
				name : "Elegant Courtier",
				description : "\n   " + "I can add my Wis modifier to any Cha check to persuade anyone of a high social station" + "\n   " + "I gain proficiency with one language of my choice",
				languageProfs : [1]
			},
			"skill proficiency: history, insight, or persuasion" : {
				name : "Elegant Courtier",
				description : "\n   " + "I can add my Wis modifier to any Cha check to persuade anyone of a high social station" + "\n   " + "I gain proficiency with one skill: History, Insight, or Persuasion",
				skillstxt : "\n\n" + toUni("Samurai") + ": History, Insight, or Persuasion.",
			}
		},
		"subclassfeature10" : {
			name : "Unbreakable Will",
			source : ["UA:FMA", 3],
			minlevel : 10,
			description : "\n   " + "I gain proficiency with Wis saves, or if I'm already proficient, either Int or Cha saves",
			saves : ["Wis"]
		},
		"subclassfeature15" : {
			name : "Rapid Strike",
			source : ["UA:FMA", 3],
			minlevel : 15,
			description : "\n   " + "If I have adv. on an attack, I can forgo it to make an extra attack as a bonus action" + "\n   " + "This attack has to be with the same weapon against the same target",
			action : ["bonus action", ""]
		},
		"subclassfeature18" : {
			name : "Strength Before Death",
			source : ["UA:FMA", 3],
			minlevel : 18,
			description : "\n   " + "If I take damage that would reduce me to 0 HP, I can delay that damage" + "\n   " + "I then immediately take a bonus turn, interrupting the current turn" + "\n   " + "I don't take the delayed damage until the bonus turn ends and can affect that damage",
			recovery : "long rest",
			usages : 1
		}
	}
});
AddSubClass("fighter", "sharpshooter", {
	regExpSearch : /sharpshooter/i,
	subname : "Sharpshooter",
	source : ["UA:FMA", 3],
	fullname : "Sharpshooter",
	features : {
		"subclassfeature3" : {
			name : "Steady Aim",
			source : ["UA:FMA", 3],
			minlevel : 3,
			description : "\n   " + "As a bonus action, I can carefully aim my ranged weapon on a target I can see in range" + "\n   " + "Until the end of my turn, my attacks with this weapon on that target get to:" + "\n   " + "Ignore half and three-quarter cover; Add 2 + half fighter level damage per hit",
			recovery : "short rest",
			usages : 3,
			additional : levels.map(function (n) {
				return n < 3 ? "" : "+" + (2 + Math.floor(n / 2)) + " damage";
			}),
			action : ["bonus action", ""],
			calcChanges : {
				atkAdd : ["if (isRangedWeapon && classes.known.fighter && classes.known.fighter.level > 2 && (/steady.{0,3}aim/i).test(inputText)) { fields.Description += (fields.Description ? '; ' : '') + 'Ignores 1/2 and 3/4 cover'; }; ", "If I include the words 'Steady Aim' in the name of a ranged weapon, it gets 2 + half my fighter level added to its Damage, and the fact that it ignores half and three-quarter cover added to its description."],
				atkCalc : ["if (isRangedWeapon && classes.known.fighter && classes.known.fighter.level > 2 && (/steady.{0,3}aim/i).test(WeaponText)) { output.extraDmg += 2 + Math.floor(classes.known.fighter.level / 2); }; ", ""]
			}
		},
		"subclassfeature7" : {
			name : "Careful Eyes",
			source : ["UA:FMA", 4],
			minlevel : 7,
			description : "\n   " + "As a bonus action, I can take the Search action" + "\n   " + "I gain proficiency with one skill, Perception, Investigation, or Survival",
			skillstxt : "\n\n" + toUni("Sharpshooter") + ": Perception, Investigation, or Survival.",
			action : ["bonus action", ""]
		},
		"subclassfeature10" : {
			name : "Close-Quarters Shooting",
			source : ["UA:FMA", 4],
			minlevel : 10,
			description : "\n   " + "I don't have disadvantage when making a ranged attack while within 5 ft of a hostile" + "\n   " + "A hostile within 5 ft that I hit with a ranged attack on my turn, can't take reactions" + "\n   " + "This lasts until the end of my turn"
		},
		"subclassfeature15" : {
			name : "Rapid Strike",
			source : ["UA:FMA", 4],
			minlevel : 15,
			description : "\n   " + "If I have adv. on an attack, I can forgo it to make an extra attack as a bonus action" + "\n   " + "This attack has to be with the same weapon against the same target",
			action : ["bonus action", ""]
		},
		"subclassfeature18" : {
			name : "Snap Shot",
			source : ["UA:FMA", 4],
			minlevel : 18,
			description : "\n   " + "I can make one more ranged attack with my Attack action on my first turn of combat"
		}
	}
});
var iFileName = "UA_20161212_Monk-Monastic-Traditions.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Unearthed Arcana: Monk Monastic Traditions article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:MMT"] = {
	name : "Unearthed Arcana: Monk Monastic Traditions",
	abbreviation : "UA:MMT",
	group : "Unearthed Arcana",
	url : "http://media.wizards.com/2016/dnd/downloads/M_2016_UAMonk1_12_12WKWT.pdf",
	date : "2016/12/12"
};

// Adds 2 subclasses for the Monk
AddSubClass("monk", "way of the kensei", {
	regExpSearch : /kensei/i,
	subname : "Way of the Kensei",
	source : ["UA:MMT", 1],
	features : {
		"subclassfeature3" : {
			name : "Path of the Kensei",
			source : ["UA:MMT", 1],
			minlevel : 3,
			description : " [3 martial weapons proficiencies]" + "\n   " + "Martial weapons I am proficient with count as kensei weapons for me" + "\n   " + "With these, I can use Dex instead of Str and use the Martial Arts damage die" + "\n   " + "As a bonus action, my kensei weapon deal +1d4 bludg. damage for an Attack action",
			action: ["bonus action", " (after hit)"],
			extraname : "Way of the Kensei 3",
			"kensei defense" : {
				name : "Kensei Defense",
				source : ["UA:MMT", 1],
				description : "\n   " + "If I make an unarmed strike with an Attack action, I can use my kensei weapon to defend" + "\n   " + "Until the start of my next turn, if I'm not incapacitated, I gain +2 AC while holding it"
			},
			eval : "ClassFeatureOptions([\"monk\", \"subclassfeature3\", \"kensei defense\", \"extra\"]);",
			removeeval : "ClassFeatureOptions([\"monk\", \"subclassfeature3\", \"kensei defense\", \"extra\"], \"remove\");",
			calcChanges : {
				atkAdd : ["var monkDie = function(n) {return n < 5 ? 4 : n < 11 ? 6 : n < 17 ? 8 : 10;}; if (classes.known.monk && classes.known.monk.level > 2 && fields.Proficiency && theWea && !isSpell && !(/shortsword/i).test(theWea.name) && (/martial/i).test(theWea.type)) {var aMonkDie = aMonkDie ? aMonkDie : monkDie(classes.known.monk.level); try {var curDie = eval(fields.Damage_Die.replace('d', '*'));} catch (e) {var curDie = 'x';}; if (isNaN(curDie) || curDie < aMonkDie) {fields.Damage_Die = '1d' + aMonkDie; }; fields.Mod = StrDex; fields.Description += (fields.Description ? '; ' : '') + 'As bonus action with Attack action, +1d4 bludg. damage'; }; ", "I can use either Strength or Dexterity and my Martial Arts damage die in place of the normal damage die for any martial weapons I am proficient with (Kensei Weapons).\n - If I score a hit with one of these kensei weapons as part of an Attack action, I can take a bonus action to have that hit, and any other hit after that as part of the same action, do +1d4 bludgeoning damage."]
			}
		},
		"ki-empowered strikes" : {
			name : "One with the Blade",
			source : ["UA:MMT", 1],
			minlevel : 6,
			description : "\n   " + "My unarmed strikes and kensei weapon attacks count as magical",
			calcChanges : {
				atkAdd : ["if (((/unarmed strike/i).test(WeaponName) || (theWea && !isSpell && (/martial/i).test(theWea.type))) && fields.Description.indexOf('Counts as magical') === -1 && !thisWeapon[1]) {fields.Description += (fields.Description ? '; ' : '') + 'Counts as magical';}; ", "My unarmed strikes and Kensei Weapons count as magical for overcoming resistances and immunities."]
			}
		},
		"subclassfeature6" : {
			name : "Precise Strike",
			source : ["UA:MMT", 1],
			minlevel : 6,
			description : "As a bonus action, I can focus my attention on one creature I can see within 30 ft" + "\n   " + "This turn, I double my proficiency bonus on my next weapon attack against that mark",
			usages : 1,
			recovery : "short rest",
			action : ["bonus action", ""],
			calcChanges : {
				atkCalc : ["if (!isSpell && !isDC && (/precise.{0,3}strike/i).test(WeaponText)) {output.prof *= 2; }; ", "If I include the words 'Precise Strike' in a weapon's name, or description it gets twice my proficiency bonus added to its To Hit instead of only once."]
			}
		},
		"subclassfeature17" : {
			name : "Unerring Accuracy",
			source : ["UA:MMT", 1],
			minlevel : 17,
			description : "\n   " + "On each of my turns, I can reroll one weapon attack roll I make that misses",
			extraname : "Way of the Kensei 11",
			"sharpen the blade" : {
				name : "Sharpen the Blade",
				source : ["UA:MMT", 1],
				description : " [1 to 3 ki points]" + "\n   " + "As a bonus action, I can grant my weapon a bonus to attack and damage rolls" + "\n   " + "This bonus is equal to the number of ki points I spend; It lasts for 1 minute",
				action : ["bonus action", ""]
			},
			changeeval : "if (newClassLvl.monk >= 11 && (What('Extra.Notes') + What('Class Features')).toLowerCase().indexOf('sharpen the blade') === -1) {ClassFeatureOptions(['monk', 'subclassfeature17', 'sharpen the blade', 'extra'])} else if (newClassLvl.monk <= 11 && oldClassLvl.monk >= 11) {ClassFeatureOptions(['monk', 'subclassfeature17', 'sharpen the blade', 'extra'], 'remove')}"
		}
	}
});
AddSubClass("monk", "way of tranquility", {
	regExpSearch : /^(?=.*tranquility|tranquil|calm|diplomatic|diplomat)((?=.*(monk|monastic))|((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior))).*$/i,
	subname : "Way of Tranquility",
	source : ["UA:MMT", 2],
	features : {
		"subclassfeature3" : {
			name : "Path of Tranquility",
			source : ["UA:MMT", 2],
			minlevel : 3,
			description : "\n   " + "I cast Sanctuary on me, no material comp., lasts 8 hours, hostiles must save every hour",
			usages : 1,
			recovery : "1 min",
			action : ["bonus action", ""],
			spellcastingBonus : {
				name : "Way of Tranquility",
				spells : ["sanctuary"],
				selection : ["sanctuary"]
			}
		},
		"subclassfeature3.1" : {
			name : "Healing Hands",
			source : ["UA:MMT", 2],
			minlevel : 3,
			description : "\n   " + "As an action, I use points to heal living creature; or 5 points to cure one poison/disease" + "\n   " + "With Flurry of Blows, I can replace one unarmed strike with a use of this feature",
			usages : [0, 0, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200],
			recovery : "long rest",
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Emissary of Peace",
			source : ["UA:MMT", 2],
			minlevel : 6,
			description : " [Performance or Persuasion prof]" + "\n   " + "I get adv. on Cha checks to calm or counsel peace; not with Deception or Intimidation",
			skillstxt : "\n\n" + toUni("Way of Tranquility") + ": Choose one from Performance or Persuasion.",
			extraname : "Way of Tranquility 11",
			"douse the flames of war" : {
				name : "Douse the Flames of War",
				source : ["UA:MMT", 1],
				description : "\n   " + "As an action, a creature I touch must make a Wisdom save or have no violent impulses" + "\n   " + "If the target is missing any HP it succeeds on the save; The effect lasts for 1 minute" + "\n   " + "During this time, it can't attack or cast spells that deal damage or force a saving throw" + "\n   " + "This effect ends if the target is attacked, takes damage, or is forced to make a saving throw" + "\n   " + "It also ends if the target witnesses any of those things happening to its allies",
				action : ["action", ""]
			},
			changeeval : "if (newClassLvl.monk >= 11 && (What(\"Extra.Notes\") + What(\"Class Features\")).toLowerCase().indexOf(\"douse the flames of war\") === -1) {ClassFeatureOptions([\"monk\", \"subclassfeature6\", \"douse the flames of war\", \"extra\"]);} else if (newClassLvl.monk <= 11 && oldClassLvl.monk >= 11) {ClassFeatureOptions([\"monk\", \"subclassfeature6\", \"douse the flames of war\", \"extra\"], \"remove\");}"
		},
		"subclassfeature17" : {
			name : "Anger of a Gentle Soul",
			source : ["UA:MMT", 2],
			minlevel : 17,
			description : "\n   " + "As a reaction if another I see goes to 0 HP, I get bonus damage until my next turn ends",
			usages : 1,
			recovery : "short rest",
			additional : ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "+17", "+18", "+19", "+20"],
			action : ["reaction", ""]
		}
	}
});
var iFileName = "UA_20161219_Paladin-Sacred-Oaths.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Unearthed Arcana: Paladin Sacred Oaths article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:PSO"] = {
	name : "Unearthed Arcana: Paladin Sacred Oaths",
	abbreviation : "UA:PSO",
	group : "Unearthed Arcana",
	url : "http://media.wizards.com/2016/dnd/downloads/UAPaladin_SO_20161219_1.pdf",
	date : "2016/12/19"
};

// Adds 2 subclasses for the Paladin
AddSubClass("paladin", "oath of conquest", {
	regExpSearch : /^((?=.*(knight tyrant|iron mongers))|((?=.*(conquest|tyranny|tyrant))(((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper))))))).*$/i,
	subname : "Oath of Conquest",
	source : ["UA:PSO", 1],
	spellcastingExtra : ["armor of agathys", "command", "hold person", "spiritual weapon", "bestow curse", "fear", "blight", "dominate beast", "dominate person", "insect plague"],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Conquering Strike",
			source : ["UA:PSO", 1],
			minlevel : 3,
			description : "\n   " + "I can use my channel divinity to break a foe's will that I hit with my melee weapon" + "\n   " + "The target must make a Wisdom saving throw or become frightened for 1 minute" + "\n   " + "The target can repeat this save at the end of each or its turn to end the effect"
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Guided Strike",
			source : ["UA:PSO", 1],
			minlevel : 3,
			description : "\n   " + "When I make an attack roll, I can add a +10 bonus to the roll after seeing the d20 roll"
		},
		"subclassfeature7" : {
			name : "Aura of Conquest",
			source : ["UA:PSO", 1],
			minlevel : 7,
			description : "\n   " + "While I'm not incapacitated, enemies in range have disadv. on saves vs. being frightened",
			additional : ["", "", "", "", "", "", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "30-foot aura", "30-foot aura", "30-foot aura"]
		},
		"subclassfeature15" : {
			name : "Implacable Spirit",
			source : ["UA:PSO", 1],
			minlevel : 15,
			description : "\n   " + "I can't be charmed",
			savetxt : { immune : ["charmed"] }
		},
		"subclassfeature20" : {
			name : "Invincible Conqueror",
			source : ["UA:PSO", 2],
			minlevel : 20,
			description : "\n   " + "As an action, I can gain the following benefits for 1 minute:" + "\n    - " + "I have resistance all damage" + "\n    - " + "I can make an additional attack as part of my Attack action" + "\n    - " + "My melee weapons score critical hits on a roll of 19 or 20",
			recovery : "long rest",
			usages : 1,
			action : ["action", ""]
		}
	}
});
AddSubClass("paladin", "oath of treachery", {
	regExpSearch : /^((?=.*blackguard)|(((?=.*(treachery|tyranny|tyrant))(?=.*paladin))|((?=.*(profane|unholy))(?=.*(knight|fighter|warrior|warlord|trooper))))).*$/i,
	subname : "Oath of Treachery",
	source : ["UA:PSO", 2],
	spellcastingExtra : ["charm person", "expeditious retreat", "invisibility", "mirror image", "gaseous form", "haste", "confusion", "greater invisibility", "dominate person", "passwall"],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Conjure Duplicate",
			source : ["UA:PSO", 2],
			minlevel : 3,
			description : "\n   " + "As an action, I create 1 illusory duplicate of myself within 30 ft of me for 1 min (conc)" + "\n   " + "As a bonus action, I can move it up to 30 ft to a space I can see within 120 ft of me" + "\n   " + "I can cast spells as though I was in its space, but still have to use my own senses" + "\n   " + "I have advantage on attacks if the target is within 5 ft of the duplicate and me",
			action : ["action", ""],
			eval : "AddAction(\"bonus action\", \"Move Duplicate\", \"Paladin (Oath of Treachery) - Channel Divinity: Conjure Duplicate\")",
			removeeval : "RemoveAction(\"bonus action\", \"Move Duplicate\")"
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Poison Strike",
			source : ["UA:PSO", 2],
			minlevel : 3,
			description : "\n   " + "As a bonus action, I imbue one weapon or piece of ammunition with poison upon touch" + "\n   " + "This poison lasts for 1 minute and will affect the next time I hit a target with it" + "\n   " + "The target takes 2d10 + my paladin level poison damage immediately after the hit" + "\n   " + "You automatically roll 20 on the 2d10 if you had advantage on the attack roll",
			action : ["bonus action", ""],
			additional : levels.map(function (n) {
				return n < 3 ? "" : "2d10+" + n + " damage";
			}),
			calcChanges : {
				atkAdd : ["if (!isSpell && (/^(?=.*poison)(?=.*strike).*$/i).test(inputText)) {fields.Description += (fields.Description ? '; +' : '+') + '2d10+' + classes.known.paladin.level + ' poison damage (or ' + (classes.known.paladin.level + 20) + ' if adv.)'; }; ", "If I include the words 'Poison Strike' in a weapon's name, it gets an added description of the extra 2d10 + paladin level of poison damage it would do. If I have advantage on the attack, I can treat the 2d10 as rolling 20 in total."]
			}
		},
		"subclassfeature7" : {
			name : "Cull the Herd",
			source : ["UA:PSO", 3],
			minlevel : 7,
			description : "\n   " + "I have adv. on melee attacks against creatures that have an ally of it within 5 ft of it"
		},
		"subclassfeature7.1" : {
			name : "Treacherous Strike",
			source : ["UA:PSO", 3],
			minlevel : 7,
			description : "\n   " + "As a reaction when a creature within 5 ft misses me, I can redirect the attack" + "\n   " + "If it can be charmed, it rerolls the attack on a target of my choice within 5 ft of it",
			recovery : "short rest",
			usages : 3,
			action : ["reaction", ""]
		},
		"subclassfeature15" : {
			name : "Blackguard's Escape",
			source : ["UA:PSO", 3],
			minlevel : 15,
			description : "\n   " + "As a reaction after I am hit by an attack, I can teleport up to 60 ft to a spot I can see" + "\n   " + "In doing this, I also become invisible (as the spell) until the end of my next turn",
			recovery : "short rest",
			usages : 1,
			action : ["reaction", ""],
			changeeval : "if (newClassLvl.paladin >= 20 && (What(\"Extra.Notes\") + What(\"Class Features\")).toLowerCase().indexOf(\"icon of deceit\") === -1) {ClassFeatureOptions([\"paladin\", \"subclassfeature15\", \"icon of deceit\", \"extra\"])} else if (newClassLvl.paladin < 20 && oldClassLvl.paladin >= 20) {ClassFeatureOptions([\"paladin\", \"subclassfeature15\", \"icon of deceit\", \"extra\"], \"remove\")};",
			extraname : "Oath of Treachery 20",
			"icon of deceit" : {
				name : "Icon of Deceit",
				source : ["UA:PSO", 3],
				description : "\n   " + "As an action, I can gain the following benefits for 1 minute:" + "\n    - " + "I become invisible" + "\n    - " + "If I have adv. on an attack, I do 20 extra damage with it if it hits" + "\n    - " + "If a creature hits me on its turn, it must make a Wis save or I control its next action" + "\n       " + "Provided it can be charmed and I am not incapacitated when it takes the action",
				recovery : "long rest",
				usages : 1,
				action : ["action", ""]
			}
		}
	}
});
var iFileName = "UA_20170109_Artificer.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Unearthed Arcana: Artificer article to MPMB's Character Record Sheet
// WARNING: there are no published multiclassing rules for Artificer; the ones provided here are extrapolated from other classes

// Define the source
SourceList["UA:A"] = {
	name : "Unearthed Arcana: Artificer",
	abbreviation : "UA:A",
	group : "Unearthed Arcana",
	url : "http://media.wizards.com/2016/dnd/downloads/1_UA_Artificer_20170109.pdf",
	date : "2017/01/09"
};

// Adds a new class, the Artificer, with 2 subclasses
// This code was for a big part contributed by RCanine on ENworld
ClassList.artificer = {
	regExpSearch : /^(?=.*artificer)(?!.*wizard).*$/i,
	name : "Artificer",
	source : ["UA:A", 1],
	primaryAbility : "\n \u2022 Artificer: Intelligence;",
	abilitySave : 4,
	prereqs : "\n \u2022 Artificer: Intelligence 13;",
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5],
	die : 8,
	saves : ["Con", "Int"],
	skills : ["\n\n" + toUni("Artificer") + ": Choose three from Arcana, Deception, History, Investigation, Medicine, Nature, Religion, and Sleight of Hand.", "\n\n" + toUni("Multiclass Artificer") + ": Choose one from Arcana, Deception, History, Investigation, Medicine, Nature, Religion, and Sleight of Hand."],
	toolProfs : {
		primary : [["Thieves' tools", "Dex"], ["Any tool", 2]],
		secondary : [["Any tool", 1]]
	},
	armor : [
		[true, true, false, false]
	],
	weapons : [
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
			description : desc(["I can cast Detect Magic and Identify as rituals without requiring material components"]),
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
			}]
		},
		"tool expertise" : {
			name : "Tool Expertise",
			source : ["UA:A", 3],
			minlevel : 2,
			description : desc(["I have expertise with any tool proficiencies I gain from the Artificer class"]),
			skillstxt : "\n\n" + toUni("Artificer") + ": expertise with with any tool proficiencies gained from the Artificer class.",
			eval : "if ((/thieves.? tools/i).test(What(\"Too Text\"))) { Checkbox(\"Too Exp\", true); };",
			removeeval : "if ((/thieves.? tools/i).test(What(\"Too Text\"))) { Checkbox(\"Too Exp\", false); };"
		},
		"wondrous invention" : {
			name : "Wondrous Invention",
			source : ["UA:A", 3],
			minlevel : 2,
			description : desc(["I gain a magic item that I have crafted; Use the \"Choose Features\" button above"]),
			additional : levels.map(function (n) {
				if (n < 2) return "";
				if (n < 5) return "1 item";
				if (n < 10) return "2 items";
				if (n < 15) return "3 items";
				if (n < 20) return "4 items";
				return "5 items";
			}),
			extraname : "Wondrous Invention",
			extrachoices : ["Bag of Holding (prereq: level 2 artificer)", "Cap of Water Breathing (prereq: level 2 artificer)", "Driftglobe (prereq: level 2 artificer)", "Goggles of Night (prereq: level 2 artificer)", "Sending Stones (prereq: level 2 artificer)", "Alchemy Jug (prereq: level 5 artificer)", "Helm of Comprehending Languages (prereq: level 5 artificer)", "Lantern of Revealing (prereq: level 5 artificer)", "Ring of Swimming (prereq: level 5 artificer)", "Robe of Useful Items (prereq: level 5 artificer)", "Rope of Climbing (prereq: level 5 artificer)", "Wand of Magic Detection (prereq: level 5 artificer)", "Wand of Secrets (prereq: level 5 artificer)", "Bag of Beans (prereq: level 10 artificer)", "Chime of Opening (prereq: level 10 artificer)", "Decanter of Endless Water (prereq: level 10 artificer)", "Eyes of Minute Seeing (prereq: level 10 artificer)", "Folding Boat (prereq: level 10 artificer)", "Heward's Handy Haversack (prereq: level 10 artificer)", "Boots of Striding and Springing (prereq: level 15 artificer)", "Bracers of Archery (prereq: level 15 artificer)", "Brooch of Shielding (prereq: level 15 artificer)", "Broom of Flying (prereq: level 15 artificer)", "Hat of Disguise (prereq: level 15 artificer)", "Slippers of Spider Climbing (prereq: level 15 artificer)", "Eyes of the Eagle (prereq: level 20 artificer)", "Gem of Brightness (prereq: level 20 artificer)", "Gloves of Missile Snaring (prereq: level 20 artificer)", "Gloves of Swimming and Climbing (prereq: level 20 artificer)", "Ring of Jumping (prereq: level 20 artificer)", "Ring of Mind Shielding (prereq: level 20 artificer)", "Wings of Flying (prereq: level 20 artificer)"] //come back to this with the function to make the individual entries
		},
		"spellcasting" : {
			name : "Spellcasting",
			source : ["UA:A", 3],
			minlevel : 3,
			description : desc([
				"I can cast artificer spells that I know, using Intelligence as my spellcasting ability",
				"I can use an arcane focus as a spellcasting focus"
			])
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
				if (n < 5) return "";
				if (n < 15) return "attune to 4 magic items instead of 3";
				if (n < 20) return "attune to 5 magic items instead of 3";
				return "attune to 6 magic items instead of 3";
			})
		},
		"soul of artifice" : {
			name : "Soul of Artifice",
			source : ["UA:A", 4],
			minlevel : 20,
			description : desc(["I gain a +1 bonus to all saving throws per magic item I am currently attuned to"]),
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
				"Use the \"Choose Features\" button above to select additional Alchemical Formulae"
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
				action : ["action", ""]
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
			eval : "AddWeapon('Alchemical Acid');",
			removeeval : "RemoveWeapon('Alchemical Acid');",
			calcChanges : {
				atkAdd : ["if (WeaponName === 'alchemical acid' && classes.known.artificer && classes.known.artificer.level) {fields.Proficiency = true; fields.Damage_Die = function(n){return Math.ceil(n / 2) + 'd6';}(classes.known.artificer.level); }; ", ""]
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
			eval : "AddWeapon('Alchemical Fire');",
			removeeval : "RemoveWeapon('Alchemical Fire');",
			calcChanges : {
				atkAdd : ["if (WeaponName === 'alchemical fire' && classes.known.artificer && classes.known.artificer.level) {fields.Proficiency = true; fields.Damage_Die = function(n){return Math.ceil(n / 3) + 'd6';}(classes.known.artificer.level); }; ", ""]
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
		"subclassfeature1.1" : {
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
		"subclassfeature1.2" : {
			name : "Thunder Cannon",
			source : ["UA:A", 6],
			minlevel : 1,
			description : desc([
				"I craft a magical firearm, my thunder cannon, with which I am proficient",
				"If lost, I craft another by spending 8 hours a day for 3 days and 100 gp of materials"
			]),
			weapons : [false, false, ["thunder cannon"]],
			action : ["bonus action", " (reload)"],
			eval : "AddWeapon('Thunder Cannon');",
			removeeval : "RemoveWeapon('Thunder Cannon');"
		},
		"subclassfeature1.3" : {
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
			eval : "AddWeapon('Thunder Cannon (Monger)');",
			removeeval : "RemoveWeapon('Thunder Cannon (Monger)');",
			calcChanges : {
				atkAdd : ["if (WeaponName === 'thunder cannon-thunder monger' && classes.known.artificer && classes.known.artificer.level > 2) {fields.Description += '; +' + function(n){return Math.floor((n - 1) / 2) + 'd6 thunder damage';}(classes.known.artificer.level); }; ", ""]
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
			eval : "AddWeapon('Thunder Cannon (Blast Wave)');",
			removeeval : "RemoveWeapon('Thunder Cannon (Blast Wave)');",
			calcChanges : {
				atkAdd : ["if (WeaponName === 'thunder cannon-blast wave' && classes.known.artificer && classes.known.artificer.level >= 13) {fields.Damage_Die = function(n){return (n < 17 ? 3 : 4) + 'd6';}(classes.known.artificer.level); }; ", ""]
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
			eval : "AddWeapon('Thunder Cannon (Piercing Round)');",
			removeeval : "RemoveWeapon('Thunder Cannon (Piercing Round)');",
			calcChanges : {
				atkAdd : ["if (WeaponName === 'thunder cannon-piercing round' && classes.known.artificer && classes.known.artificer.level >= 19) {fields.Damage_Die = '6d6'; }; ", ""]
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
			eval : "AddWeapon('Thunder Cannon (Explosive Round)');",
			removeeval : "RemoveWeapon('Thunder Cannon (Explosive Round)');"
		}
	}
};

//Magic Item additions 
var MagicItemsList = {
	"alchemy jug" : {
		name : "Alchemy Jug",
		source : ["D", 150],
		description : "A heavy ceramic jug. As an action, the jug can be commanded to hold a chosen liquid. With another action, the jug can be uncorked and the liquid can be poured out, at 2 gal. per minute. Once commanded to produce a liquid, it can't produce a different one or more than the max of one, until the next dawn. Liquids (with max): Acid (8 fl. oz.), Basic poison (1/2 fl. oz.), Beer (4 gal.), Honey (1 gal.), Mayonnaise (2 gal.), Oil (1 quart), Vinegar (2 gal.), Fresh water (8 gal.), Salt water (12 gal.), Wine (1 gal.)",
		descriptionLong : true,
		category : "wondrous item",
		rarity : "uncommon",
		attunement : false,
		weight : 12,
		descriptionFull : "This ceramic jug appears to be able to hold a gallon of liquid and weighs 12 pounds whether full or empty. Sloshing sounds can be heard from within the jug when it is shaken, even if the jug is empty." + "\n   " + "You can use an action and name one liquid from the table below to cause the jug to produce the chosen liquid. Afterward, you can uncork the jug as an action and pour that liquid out, up to 2 gallons per minute. The maximum amount of liquid the jug can produce depends on the liquid you named." + "\n   " + "Once the jug starts producing a liquid, it can't produce a different one, or more of one that has reached its maximum, until the next dawn.\n\n" + toUni("Max") + "\t" + toUni("Liquid") + "\t\t" + toUni("Max") + "\t" + toUni("Liquid") + "\n8 ounces\tAcid\t\t1 quart\tOil\n1/2 ounce\tBasic poison\t2 gallons\tVinegar\n4 gallons\tBeer\t\t8 gallons\tWater, fresh\n1 gallon\tHoney\t\t12 gallons\tWater, salt\n2 gallons\tMayonnaise\t1 gallon\tWine"
	},
	"bag of beans" : {
		name : "Bag of Beans",
		source : ["D", 152],
		description : "This heavy cloth bag (0.5 lb) contains 3d4 dry beans (0.25 lb each). Dumping the bag's contents out on the ground, will cause the beans to explode in a 10-ft radius. All in the area must make a DC 15 Dex save or take 5d4 fire damage, or half on a successful save. The fire ignites unattended flammable objects in the area.\nPlanting a bean from the bag in dirt or sand and then watering it, causes an effect 1 minute later from the ground where it was planted, as determined by the DM.",
		descriptionLong : true,
		category : "wondrous item",
		rarity : "rare",
		attunement : false,
		weight : 2.5,
		descriptionFull : "Inside this heavy cloth bag are 3d4 dry beans. The bag weighs 1/2 pound plus 1/4 pound for each bean it contains." + "\n   " + "If you dump the bag's contents out on the ground, they explode in a 10-foot radius, extending from the beans. Each creature in the area, including you, must make a DC 15 Dexterity saving throw, taking 5d4 fire damage on a failed save, or half as much damage on a successful one. The fire ignites flammable objects in the area that aren't being worn or carried." + "\n   " + "If you remove a bean from the bag, plant it in dirt or sand, and then water it, the bean produces an effect 1 minute later from the ground where it was planted. The GM can choose an effect from the following table, determine it randomly, or create an effect.\n\n" + toUni("d100") + "\t" + toUni("Effect") + "\n" + toUni("01") + "\t5d4 toadstools sprout. If a creature eats a toadstool, roll any die. On an odd roll, the eater must succeed on a DC 15 Constitution saving throw or take 5d6 poison damage and become poisoned for 1 hour. On an even roll, the eater gains 5d6 temporary hit points for 1 hour.\n" + toUni("02-10") + "\tA geyser erupts and spouts water, beer, berry juice, tea, vinegar, wine, or oil (GM's choice) 30 feet into the air for 1d12 rounds.\n" + toUni("11-20") + "\tA treant sprouts. There's a 50 percent chance that the treant is chaotic evil and attacks.\n" + toUni("21-30") + "\tAn animate, immobile stone statue in your likeness rises. It makes verbal threats against you. If you leave it and others come near, it describes you as the most heinous of villains and directs the newcomers to find and attack you. If you are on the same plane of existence as the statue, it knows where you are. The statue becomes inanimate after 24 hours.\n" + toUni("31-40") + "\tA campfire with blue flames springs forth and burns for 24 hours (or until it is extinguished).\n" + toUni("41-50") + "\t1d6 + 6 shriekers sprout.\n" + toUni("51-60") + "\t1d4 + 8 bright pink toads crawl forth. Whenever a toad is touched, it transforms into a Large or smaller monster of the GM's choice. The monster remains for 1 minute, then disappears in a puff of bright pink smoke.\n" + toUni("61-70") + "\tA hungry bulette burrows up and attacks.\n" + toUni("71-80") + "\tA fruit tree grows. It has 1d10 + 20 fruit, 1d8 of which act as randomly determined magic potions, while one acts as an ingested poison of the GM's choice. The tree vanishes after 1 hour. Picked fruit remains, retaining any magic for 30 days.\n" + toUni("81-90") + "\tA nest of 1d4 + 3 eggs springs up. Any creature that eats an egg must make a DC 20 Constitution saving throw. On a successful save, a creature permanently increases its lowest ability score by 1, randomly choosing among equally low scores. On a failed save, the creature takes 10d6 force damage from an internal magical explosion.\n" + toUni("91-99") + "\tA pyramid with a 60-foot-square base bursts upward. Inside is a sarcophagus containing a mummy lord. The pyramid is treated as the mummy lord's lair, and its sarcophagus contains treasure of the GM's choice." + "\n" + toUni("100") + "\tA giant beanstalk sprouts, growing to a height of the GM's choice. The top leads where the GM chooses, such as to a great view, a cloud giant's castle, or a different plane of existence."
	},
	"bag of holding" : {
		name : "Bag of Holding",
		source : ["D", 153],
		description : "The bag can hold up to 500 lb, not exceeding a volume of 64 cu ft, but weighs 15 lb regardless of content. Retrieving an item from it requires an action. If the bag is overloaded, pierced, or torn, it is destroyed, leaving its contents in the Astral plane.",
		descriptionLong : false,
		category : "wondrous item",
		rarity : "uncommon",
		attunement : false,
		weight : 15,
		descriptionFull : "This bag has an interior space considerably larger than its outside dimensions, roughly 2 feet in diameter at the mouth and 4 feet deep. The bag can hold up to 500 pounds, not exceeding a volume of 64 cubic feet. The bag weighs 15 pounds, regardless of its contents. Retrieving an item from the bag requires an action." + "\n   " + "If the bag is overloaded, pierced, or torn, it ruptures and is destroyed, and its contents are scattered in the Astral Plane. If the bag is turned inside out, its contents spill forth, unharmed, but the bag must be put right before it can be used again. Breathing creatures inside the bag can survive up to a number of minutes equal to 10 divided by the number of creatures (minimum 1 minute), after which time they begin to suffocate." + "\n   " + "Placing a bag of holding inside an extradimensional space created by a handy haversack, portable hole, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate is sucked through it to a random location on the Astral Plane. The gate then closes. The gate is one-way only and can't be reopened."
	},
	"boots of striding and springing" : {
		name : "Boots of Striding and Springing",
		source : ["D", 156],
		description : "While wearing these boots, my walking speed increases to 30 ft, and it isn't reduced if I'm encumbered or wearing heavy armor. In addition, I can jump three times the normal distance, though I can't jump farther my your remaining movement would allow.",
		descriptionLong : false,
		category : "wondrous item",
		rarity : "uncommon",
		attunement : true,
		weight : 1,
		descriptionFull : "While you wear these boots, your walking speed becomes 30 feet, unless your walking speed is higher, and your speed isn't reduced if you are encumbered or wearing heavy armor. In addition, you can jump three times the normal distance, though you can't jump farther than your remaining movement would allow."
	},
	"bracers of archery" : {
		name : "Bracers of Archery",
		source : ["D", 156],
		description : "While wearing these bracers, I have proficiency with the longbow and shortbow, and I gain a +2 bonus to damage rolls on ranged attacks made with such weapons.",
		descriptionLong : false,
		category : "wondrous item",
		rarity : "uncommon",
		attunement : true,
		weight : 1,
		descriptionFull : "While wearing these bracers, you have proficiency with the longbow and shortbow, and you gain a +2 bonus to damage rolls on ranged attacks made with such weapons."
	},
	"brooch of shielding" : {
		name : "Brooch of Shielding",
		source : ["D", 156],
		description : "While wearing this brooch, I have resistance to force damage, and I have immunity to damage from the magic missile spell.",
		descriptionLong : false,
		category : "wondrous item",
		rarity : "uncommon",
		attunement : true,
		weight : 0,
		descriptionFull : "While wearing this brooch, you have resistance to force damage, and you have immunity to damage from the magic missile spell."
	},
	"broom of flying" : {
		name : "Broom of Flying",
		source : ["D", 156],
		description : "If I speak this broom's command word while standing astride it, it then hovers beneath me and can be ridden. It has a 50 ft flying speed and can carry up to 400 lb. While carring over 200 lb, its speed becomes 30 ft. The broom stops hovering when I land.",
		descriptionLong : false,
		category : "wondrous item",
		rarity : "uncommon",
		attunement : false,
		weight : 3,
		descriptionFull : "This wooden broom, which weighs 3 pounds, functions like a mundane broom until you stand astride it and speak its command word. It then hovers beneath you and can be ridden in the air. It has a flying speed of 50 feet. It can carry up to 400 pounds, but its flying speed becomes 30 feet while carrying over 200 pounds. The broom stops hovering when you land." + "\n   " + "You can send the broom to travel alone to a destination within 1 mile of you if you speak the command word, name the location, and are familiar with that place. The broom comes back to you when you speak another command word, provided that the broom is still within 1 mile of you."
	},
	"cap of water breathing" : {
		name : "Cap of Water Breathing",
		source : ["D", 157],
		description : "If wearing this cap underwater, I can speak its command word as an action to create a bubble of air around my head, allowing me to breathe normally. This bubble stays until I again speak the command word, the cap is removed, or I am not underwater.",
		descriptionLong : false,
		category : "wondrous item",
		rarity : "uncommon",
		attunement : false,
		weight : 0,
		descriptionFull : "While wearing this cap underwater, you can speak its command word as an action to create a bubble of air around your head. It allows you to breathe normally underwater. This bubble stays with you until you speak the command word again, the cap is removed, or you are no longer underwater."
	},
	"chime of opening" : {
		name : "Chime of Opening",
		source : ["D", 158],
		description : "As an action, I can strike it and point it at an object within 120 ft that can be opened. One lock or latch on it opens unless the sound can't reach the object. If no locks or latches remain, the object itself opens. The chime has ten charges.",
		descriptionLong : false,
		category : "wondrous item",
		rarity : "rare",
		attunement : false,
		weight : 1,
		descriptionFull : "This hollow metal tube measures about 1 foot long and weighs 1 pound. You can strike it as an action, pointing it at an object within 120 feet of you that can be opened, such as a door, lid, or lock. The chime issues a clear tone, and one lock or latch on the object opens unless the sound can't reach the object. If no locks or latches remain, the object itself opens." + "\n   " + "The chime can be used ten times. After the tenth time, it cracks and becomes useless."
	},
	"decanter of endless water" : {
		name : "Decanter of Endless Water",
		source : ["D", 161],
		description : "I can use an action to remove the stopper from this flask and speak one of three command words, making fresh/salt water (my choice) pour out until the start of my next turn. 'Stream' produces 1 gallon of water. 'Fountain' produces 5 gallons of water.",
		descriptionLong : false,
		category : "wondrous item",
		rarity : "uncommon",
		attunement : false,
		weight : 2,
		descriptionFull : "This stoppered flask sloshes when shaken, as if it contains water. The decanter weighs 2 pounds." + "\n   " + "You can use an action to remove the stopper and speak one of three command words, whereupon an amount of fresh water or salt water (your choice) pours out of the flask. The water stops pouring out at the start of your next turn. Choose from the following options:" + "\n \u2022 " + "'Stream' produces 1 gallon of water." + "\n \u2022 " + "'Fountain' produces 5 gallons of water." + "\n \u2022 " + "'Geyser' produces 30 gallons of water that gushes forth in a geyser 30 feet long and 1 foot wide. As a bonus action while holding the decanter, you can aim the geyser at a creature you can see within 30 feet of you. The target must succeed on a DC 13 Strength saving throw or take 1d4 bludgeoning damage and fall prone. Instead of a creature, you can target an object that isn't being worn or carried and that weighs no more than 200 pounds. The object is either knocked over or pushed up to 15 feet away from you."
	},
	"driftglobe" : {
		name : "Driftglobe",
		source : ["D", 166],
		description : "When I'm within 60 ft of this small glass sphere, I can speak its command word to make it shine light as the Light or Daylight spell. The daylight effect, once used, can't be used again until the next dawn. Then, as an action, I can speak another command to make it hover 5 ft off the ground. It hovers until grasped from the air. If I move more than 60 ft from the hovering globe, it follows me at a distance of 60 ft, taking the shortest route. If it can't move, it sinks to the ground and becomes inactive with shining light.",
		descriptionLong : true,
		category : "wondrous item",
		rarity : "uncommon",
		attunement : false,
		weight : 1,
		descriptionFull : "This small sphere of thick glass weighs 1 pound. If you are within 60 feet of it, you can speak its command word and cause it to emanate the light or daylight spell. Once used, the daylight effect can't be used again until the next dawn." + "\n   " + "You can speak another command word as an action to make the illuminated globe rise into the air and float no more than 5 feet off the ground. The globe hovers in this way until you or another creature grasps it. If you move more than 60 feet from the hovering globe, it follows you until it is within 60 feet of you. It takes the shortest route to do so. If prevented from moving, the globe sinks gently to the ground and becomes inactive, and its light winks out."
	},
	"eyes of minute seeing" : {
		name : "Eyes of Minute Seeing",
		source : ["D", 168],
		description : "These crystal lenses fit over the eyes. While wearing them, I can see much better than normal out to a range of 1 ft. I have advantage on Int (Investigation) checks that rely on sight while searching an area or studying an object within that range.",
		descriptionLong : false,
		category : "wondrous item",
		rarity : "uncommon",
		attunement : false,
		weight : 0,
		descriptionFull : "These crystal lenses fit over the eyes. While wearing them, you can see much better than normal out to a range of 1 foot. You have advantage on Intelligence (Investigation) checks that rely on sight while searching an area or studying an object within that range."
	},
	"eyes of the eagle" : {
		name : "Eyes of the Eagle",
		source : ["D", 168],
		description : "These crystal lenses fit over the eyes. While wearing them, I have advantage on Wisdom (Perception) checks that rely on sight. In conditions of clear visibility, I can make out details of even extremely distant creatures and objects as small as 2 feet across.",
		descriptionLong : false,
		category : "wondrous item",
		rarity : "uncommon",
		attunement : true,
		weight : 0,
		descriptionFull : "These crystal lenses fit over the eyes. While wearing them, you have advantage on Wisdom (Perception) checks that rely on sight. In conditions of clear visibility, you can make out details of even extremely distant creatures and objects as small as 2 feet across."
	},
	"folding boat" : {
		name : "Folding Boat",
		source : ["D", 170],
		description : "A wooden box of 12 by 6 by 6 inches, that can be opened to put items in. As an action, I can speak one of the three command words. One causes it to unfold into a boat 10 ft by 4 ft by 2 ft deep, with oars, an anchor, a mast, and a lateen sail, and can hold four Medium creatures. Two causes it to unfold into a ship 24 ft by 8 ft by 6 ft deep, with a deck, rowing seats, five sets of oars, a steering oar, an anchor, a deck cabin, and a mast with a square sail and can hold fifteen Medium creatures comfortably. Three causes it to fold up.",
		descriptionLong : true,
		category : "wondrous item",
		rarity : "rare",
		attunement : false,
		weight : 4,
		descriptionFull : "This object appears as a wooden box that measures 12 inches long, 6 inches wide, and 6 inches deep. It weighs 4 pounds and floats. It can be opened to store items inside. This item also has three command words, each requiring you to use an action to speak it." + "\n   " + "One command word causes the box to unfold into a boat 10 feet long, 4 feet wide, and 2 feet deep. The boat has one pair of oars, an anchor, a mast, and a lateen sail. The boat can hold up to four Medium creatures comfortably." + "\n   " + "The second command word causes the box to unfold into a ship 24 feet long, 8 feet wide, and 6 feet deep. The ship has a deck, rowing seats, five sets of oars, a steering oar, an anchor, a deck cabin, and a mast with a square sail. The ship can hold fifteen Medium creatures comfortably." + "\n   " + "When the box becomes a vessel, its weight becomes that of a normal vessel its size, and anything that was stored in the box remains in the boat." + "\n   " + "The third command word causes the folding boat to fold back into a box, provided that no creatures are aboard. Any objects in the vessel that can't fit inside the box remain outside the box as it folds. Any objects in the vessel that can fit inside the box do so."
	},
	"gem of brightness" : {
		name : "Gem of Brightness",
		source : ["D", 171],
		description : "This prism has 50 charges. I can speak one of 3 command words as an action. 1) uses no charges to shed bright light in 30-ft radius and dim light for an extra 30 ft, lasting until I say the word as a bonus action or I use another function. 2) uses 1 charge to fire a beam of light at someone I see within 60 ft, who must make a DC 15 Con save or be blinded for 1 minute. It gets a save at the end of each of its turns to end the effect. 3) expends 5 charges to flare a 30-ft cone of light with the same effect as the beam to all in the area.",
		descriptionLong : true,
		category : "wondrous item",
		rarity : "uncommon",
		attunement : false,
		weight : 0,
		descriptionFull : "This prism has 50 charges. While you are holding it, you can use an action to speak one of three command words to cause one of the following effects:" + "\n \u2022 " + "The first command word causes the gem to shed bright light in a 30-foot radius and dim light for an additional 30 feet. This effect doesn't expend a charge. It lasts until you use a bonus action to repeat the command word or until you use another function of the gem." + "\n \u2022 " + "The second command word expends 1 charge and causes the gem to fire a brilliant beam of light at one creature you can see within 60 feet of you. The creature must succeed on a DC 15 Constitution saving throw or become blinded for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." + "\n \u2022 " + "The third command word expends 5 charges and causes the gem to flare with blinding light in a 30-foot cone originating from it. Each creature in the cone must make a saving throw as if struck by the beam created with the second command word." + "\n   " + "When all of the gem's charges are expended, the gem becomes a nonmagical jewel worth 50 gp."
	},
	"gloves of missile snaring" : {
		name : "Gloves of Missile Snaring",
		source : ["D", 172],
		description : "When a ranged weapon attack hits me and I have a hand free, I can use my reaction to reduce the damage of that attack by 1d10 + my Dex mod. If I reduce the damage to 0, I can catch the missile if it is small enough for me to hold in that hand.",
		descriptionLong : false,
		category : "wondrous item",
		rarity : "uncommon",
		attunement : true,
		weight : 0,
		descriptionFull : "These gloves seem to almost meld into your hands when you don them. When a ranged weapon attack hits you while you're wearing them, you can use your reaction to reduce the damage by 1d10 + your Dexterity modifier, provided that you have a free hand. If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in that hand."
	},
	"gloves of swimming and climbing" : {
		name : "Gloves of Swimming and Climbing",
		source : ["D", 172],
		description : "While wearing these gloves, climbing and swimming don't cost me extra movement, and I gain a +5 bonus to Strength (Athletics) checks made to climb or swim.",
		descriptionLong : false,
		category : "wondrous item",
		rarity : "uncommon",
		attunement : true,
		weight : 0,
		descriptionFull : "While wearing these gloves, climbing and swimming don't cost you extra movement, and you gain a +5 bonus to Strength (Athletics) checks made to climb or swim."
	},
	"goggles of night" : {
		name : "Goggles of Night",
		source : ["D", 172],
		description : "While wearing these dark lenses, I have darkvision out to a range of 60 feet. If I already have darkvision, wearing the goggles increases its range by 60 feet.",
		descriptionLong : false,
		category : "wondrous item",
		rarity : "uncommon",
		attunement : false,
		weight : 0,
		descriptionFull : "While wearing these dark lenses, you have darkvision out to a range of 60 feet. If you already have darkvision, wearing the goggles increases its range by 60 feet."
	},
	"hat of disguise" : {
		name : "Hat of Disguise",
		source : ["D", 173],
		description : "While wearing this hat, I can use an action to cast the disguise self spell from it at will. The spell ends if the hat is removed.",
		descriptionLong : false,
		category : "wondrous item",
		rarity : "uncommon",
		attunement : true,
		weight : 0,
		descriptionFull : "While wearing this hat, you can use an action to cast the disguise self spell from it at will. The spell ends if the hat is removed."
	},
	"helm of comprehending languages" : {
		name : "Helm of Comprehending Languages",
		source : ["D", 173],
		description : "While wearing this helm, I can use an action to cast the comprehend languages spell from it at will.",
		descriptionLong : false,
		category : "wondrous item",
		rarity : "uncommon",
		attunement : false,
		weight : 3,
		descriptionFull : "While wearing this helm, you can use an action to cast the comprehend languages spell from it at will."
	},
	"heward's handy haversack" : {
		name : "Heward's Handy Haversack",
		source : ["D", 174],
		description : "The backpack weighs 5 lb, but has two side pouches that hold up to 20 lb (2 cu ft), while it's central pouch holds up to 80 lb (8 cu ft). Retrieving an item from it requires an action. If the bag is overloaded, pierced, or torn, it is destroyed, as is its content.",
		descriptionLong : false,
		category : "wondrous item",
		rarity : "rare",
		attunement : false,
		weight : 5,
		descriptionFull : "This backpack has a central pouch and two side pouches, each of which is an extradimensional space. Each side pouch can hold up to 20 pounds of material, not exceeding a volume of 2 cubic feet. The large central pouch can hold up to 8 cubic feet or 80 pounds of material. The backpack always weighs 5 pounds, regardless of its contents." + "\n   " + "Placing an object in the haversack follows the normal rules for interacting with objects. Retrieving an item from the haversack requires you to use an action. When you reach into the haversack for a specific item, the item is always magically on top." + "\n   " + "The haversack has a few limitations. If it is overloaded, or if a sharp object pierces it or tears it, the haversack ruptures and is destroyed. If the haversack is destroyed, its contents are lost forever, although an artifact always turns up again somewhere. If the haversack is turned inside out, its contents spill forth, unharmed, and the haversack must be put right before it can be used again. If a breathing creature is placed within the haversack, the creature can survive for up to 10 minutes, after which time it begins to suffocate." + "\n   " + "Placing the haversack inside an extradimensional space created by a bag of holding, portable hole, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate is sucked through it and deposited in a random location on the Astral Plane. The gate then closes. The gate is one-way only and can't be reopened."
	},
	"lantern of revealing" : {
		name : "Lantern of Revealing",
		source : ["D", 179],
		description : "This lantern burns for 6 hours on 1 pint of oil. It shines bright light in a 30-ft radius and dim light for an extra 30 ft. Invisible objects and creatures are visible in the bright light. As an action, I can lower the hood, making it only dim light in a 5-ft radius.",
		descriptionLong : false,
		category : "wondrous item",
		rarity : "uncommon",
		attunement : false,
		weight : 2,
		descriptionFull : "While lit, this hooded lantern burns for 6 hours on 1 pint of oil, shedding bright light in a 30-foot radius and dim light for an additional 30 feet. Invisible creatures and objects are visible as long as they are in the lantern's bright light. You can use an action to lower the hood, reducing the light to dim light in a 5-foot radius."
	},
	"ring of jumping" : {
		name : "Ring of Jumping",
		source : ["D", 191],
		description : "While wearing this ring, I can cast the jump spell from it as a bonus action at will, but can target only myself when I do so.",
		descriptionLong : false,
		category : "ring",
		rarity : "uncommon",
		attunement : true,
		weight : 0,
		descriptionFull : "While wearing this ring, you can cast the jump spell from it as a bonus action at will, but can target only yourself when you do so."
	},
	"ring of mind shielding" : {
		name : "Ring of Mind Shielding",
		source : ["D", 191],
		description : "With this ring, I'm immune to magic that allows others to read my thoughts, determine whether I'm lying, know my alignment, or know my creature type. Telepathic communication with me only works if I allow it. As an action, I can make the ring invisible.",
		descriptionLong : false,
		category : "ring",
		rarity : "uncommon",
		attunement : true,
		weight : 0,
		descriptionFull : "While wearing this ring, you are immune to magic that allows other creatures to read your thoughts, determine whether you are lying, know your alignment, or know your creature type. Creatures can telepathically communicate with you only if you allow it." + "\n   " + "You can use an action to cause the ring to become invisible until you use another action to make it visible, until you remove the ring, or until you die." + "\n   " + "If you die while wearing the ring, your soul enters it, unless it already houses a soul. You can remain in the ring or depart for the afterlife. As long as your soul is in the ring, you can telepathically communicate with any creature wearing it. A wearer can't prevent this telepathic communication."
	},
	"ring of swimming" : {
		name : "Ring of Swimming",
		source : ["D", 193],
		description : "I have a swimming speed of 40 feet while wearing this ring.",
		descriptionLong : false,
		category : "ring",
		rarity : "uncommon",
		attunement : false,
		weight : 0,
		descriptionFull : "You have a swimming speed of 40 feet while wearing this ring."
	},
	"robe of useful items" : {
		name : "Robe of Useful Items",
		source : ["D", 195],
		description : "This robe has cloth patches of various shapes and colors covering it. While wearing the robe, I can use an action to detach one of the patches, causing it to become the object or creature it represents. The robe has two of each of the following patches: Dagger, Bullseye lantern (filled and lit), Steel mirror, 10-ft pole, Hempen rope (50 ft, coiled), and Sack. In addition, the robe has 4d4 other patches. The DM chooses the patches or determines them randomly. Once the last patch is removed, the robe becomes an ordinary garment.",
		descriptionLong : true,
		category : "wondrous item",
		rarity : "uncommon",
		attunement : false,
		weight : 1,
		descriptionFull : "This robe has cloth patches of various shapes and colors covering it. While wearing the robe, you can use an action to detach one of the patches, causing it to become the object or creature it represents. Once the last patch is removed, the robe becomes an ordinary garment." + "\n\n" + "The robe has two of each of the following patches:" + "\n \u2022 " + "Dagger" + "\n \u2022 " + "Bullseye lantern (filled and lit)" + "\n \u2022 " + "Steel mirror" + "\n \u2022 " + "10-foot pole" + "\n \u2022 " + "Hempen rope (50 feet, coiled)" + "\n \u2022 " + "Sack" + "\n\nIn addition, the robe has 4d4 other patches. The GM chooses the patches or determines them randomly.\n\n" + toUni("d100") + "\t" + toUni("Effect") + "\n" + toUni("01-08") + "\tBag of 100 gp\n" + toUni("09-15") + "\tSilver coffer (1 foot long, 6 inches wide and deep) worth 500 gp\n" + toUni("16-22") + "\tIron door (up to 10 feet wide and 10 feet high, barred on one side of your choice), which you can place in an opening you can reach; it conforms to fit the opening, attaching and hinging itself\n" + toUni("23-30") + "\t10 gems worth 100 gp each\n" + toUni("31-44") + "\tWooden ladder (24 feet long)\n" + toUni("45-51") + "\tA riding horse with saddle bags\n" + toUni("52-59") + "\tPit (a cube 10 feet on a side), which you can place on the ground within 10 feet of you\n" + toUni("60-68") + "\t4 potions of healing\n" + toUni("69-75") + "\tRowboat (12 feet long)\n" + toUni("76-83") + "\tSpell scroll containing one spell of 1st to 3rd level\n" + toUni("84-90") + "\t2 mastiffs\n" + toUni("91-96") + "\tWindow (2 feet by 4 feet, up to 2 feet deep), which you can place on a vertical surface you can reach\n" + toUni("97-00") + "\tPortable ram"
	},
	"rope of climbing" : {
		name : "Rope of Climbing",
		source : ["D", 197],
		description : "This 60-ft length of silk rope can hold up to 3,000 pounds. As an action while holding one end of the rope, I can speak the command word to animate it. Then, as a bonus action, I can command the other end to move to a chosen destination, at 10 ft on my turn. I can also tell it to stop moving, to fasten itself securely, to unfasten itself, to knot or unknot itself, or to coil itself for carrying. While knotted, the rope shortens to 50 ft and grants advantage to climb it. The rope has AC 20 and 20 HP, regaining 1 HP per 5 minutes.",
		descriptionLong : true,
		category : "wondrous item",
		rarity : "uncommon",
		attunement : false,
		weight : 3,
		descriptionFull : "This 60-foot length of silk rope weighs 3 pounds and can hold up to 3,000 pounds. If you hold one end of the rope and use an action to speak the command word, the rope animates. As a bonus action, you can command the other end to move toward a destination you choose. That end moves 10 feet on your turn when you first command it and 10 feet on each of your turns until reaching its destination, up to its maximum length away, or until you tell it to stop. You can also tell the rope to fasten itself securely to an object or to unfasten itself, to knot or unknot itself, or to coil itself for carrying." + "\n   " + "If you tell the rope to knot, large knots appear at 1-foot intervals along the rope. While knotted, the rope shortens to a 50-foot length and grants advantage on checks made to climb it." + "\n   " + "The rope has AC 20 and 20 hit points. It regains 1 hit point every 5 minutes as long as it has at least 1 hit point. If the rope drops to 0 hit points, it is destroyed."
	},
	"sending stones" : {
		name : "Sending Stones",
		source : ["D", 199],
		description : "While I touch one of the pair of stones, I can use an action to cast the sending spell, targeting the bearer of the other stone. If no creature has the other stone, the spell won't cast. Once it is cast, neither stone can be used again until the next dawn.",
		descriptionLong : false,
		category : "wondrous item",
		rarity : "uncommon",
		attunement : false,
		weight : 0,
		descriptionFull : "Sending stones come in pairs, with each smooth stone carved to match the other so the pairing is easily recognized. While you touch one stone, you can use an action to cast the sending spell from it. The target is the bearer of the other stone. If no creature bears the other stone, you know that fact as soon as you use the stone and don't cast the spell." + "\n   " + "Once sending is cast through the stones, they can't be used again until the next dawn. If one of the stones in a pair is destroyed, the other one becomes nonmagical."
	},
	"slippers of spider climbing" : {
		name : "Slippers of Spider Climbing",
		source : ["D", 200],
		description : "With these light shoes, I can move up, down, and across vertical surfaces and upside down along ceilings, while leaving my hands free. I have a climbing speed equal to my walking speed. The slippers don't work on a slippery surface (e.g. oily or icy).",
		descriptionLong : false,
		category : "wondrous item",
		rarity : "uncommon",
		attunement : true,
		weight : 0.5,
		descriptionFull : "While you wear these light shoes, you can move up, down, and across vertical surfaces and upside down along ceilings, while leaving your hands free. You have a climbing speed equal to your walking speed. However, the slippers don't allow you to move this way on a slippery surface, such as one covered by ice or oil."
	},
	"wand of magic detection" : {
		name : "Wand of Magic Detection",
		source : ["D", 211],
		description : "This wand has 3 charges. While holding it, I can expend 1 charge as an action to cast the detect magic spell from it. The wand regains 1d3 expended charges daily at dawn.",
		descriptionLong : false,
		category : "wand",
		rarity : "uncommon",
		attunement : false,
		weight : 0,
		descriptionFull : "This wand has 3 charges. While holding it, you can expend 1 charge as an action to cast the detect magic spell from it. The wand regains 1d3 expended charges daily at dawn."
	},
	"wand of secrets" : {
		name : "Wand of Secrets",
		source : ["D", 211],
		description : "The wand has 3 charges. While holding it, I can use an action to expend 1 of its charges, and if a secret door or trap is within 30 feet of me, the wand pulses and points at the one nearest to me. The wand regains 1d3 expended charges daily at dawn.",
		descriptionLong : false,
		category : "wand",
		rarity : "uncommon",
		attunement : false,
		weight : 0,
		descriptionFull : "The wand has 3 charges. While holding it, you can use an action to expend 1 of its charges, and if a secret door or trap is within 30 feet of you, the wand pulses and points at the one nearest to you. The wand regains 1d3 expended charges daily at dawn."
	},
	"wings of flying" : {
		name : "Wings of Flying",
		source : ["D", 214],
		description : "With this cloak, I can speak its command word as an action, turning it into a pair of bat or bird wings on my back for 1 hour or until I repeat the command word as an action. This gives me a flying speed of 60 ft. Once used, it takes 1d12 hours to recharge.",
		descriptionLong : false,
		category : "wondrous item",
		rarity : "rare",
		attunement : true,
		weight : 2,
		descriptionFull : "While wearing this cloak, you can use an action to speak its command word. This turns the cloak into a pair of bat wings or bird wings on your back for 1 hour or until you repeat the command word as an action. The wings give you a flying speed of 60 feet. When they disappear, you can't use them again for 1d12 hours."
	}
};

// Create the magic items for the wondrous items class feature of the artificer
ClassList.artificer.features["wondrous invention"].extrachoices.forEach(function (theI) {
	var theItem = theI.replace(/ *\(.*\)/, "");
	if (MagicItemsList[theItem.toLowerCase()]) {
		ClassList.artificer.features["wondrous invention"][theI.toLowerCase()] = {
			name : theItem,
			description : "",
			source : ["UA:A", 3],
			eval : "var maI = MagicItemsList[\"" + theItem.toLowerCase() + "\"]; AddMagicItem(maI.name, maI.attunement, maI.description, maI.weight, maI.descriptionLong);",
			removeeval : "RemoveMagicItem(\"" + theItem.toLowerCase() + "\");"
		};
	};
});

// Artificer weapons
WeaponsList["alchemical acid"] = {
	regExpSearch : /^(?=.*alchemical)(?=.*acid).*$/i,
	name : "Alchemical Acid",
	source : ["UA:A", 5],
	list : "artificer",
	ability : 4,
	type : "Artificer",
	damage : [1, 6, "acid"],
	range : "30 ft",
	weight : 0,
	description : "Dex save, success - no damage; Objects automatically take maximum damage",
	abilitytodamage : false,
	dc : true
};
WeaponsList["alchemical fire"] = {
	regExpSearch : /^(?=.*alchemical)(?=.*fire).*$/i,
	name : "Alchemical Fire",
	source : ["UA:A", 5],
	list : "artificer",
	ability : 4,
	type : "Artificer",
	damage : [1, 6, "fire"],
	range : "30 ft",
	weight : 0,
	description : "Dex save, success - no damage; All creatures within 5-ft of the point of impact have to save",
	abilitytodamage : false,
	dc : true
};
WeaponsList["thunder cannon-thunder cannon"] = {
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
	ammo : "arcane magazine"
};
WeaponsList["thunder cannon-thunder monger"] = {
	regExpSearch : /^(?=.*\bthunder)(?=.*monger\b).*$/i,
	name : "Thunder Cannon (Monger)",
	source : ["UA:A", 6],
	ability : 2,
	type : "Thunder Cannon",
	damage : [2, 6, "piercing"],
	range : "150/500 ft",
	weight : 0,
	description : "Ammunition, loading, two-handed, bonus action to reload",
	abilitytodamage : true,
	ammo : "arcane magazine"
};
WeaponsList["thunder cannon-blast wave"] = {
	regExpSearch : /^(?=.*\bthunder)(?=.*cannon\b)(?=.*\bblast)(?=.*wave\b).*$/i,
	name : "Thunder Cannon (Blast Wave)",
	source : ["UA:A", 6],
	ability : 4,
	type : "Thunder Cannon",
	damage : [2, 6, "force"],
	range : "15-ft cone",
	weight : 0,
	description : "Ammunition, loading, two-handed, bonus action to reload; Str save or damage and pushed back 10 ft",
	dc : true,
	abilitytodamage : false,
	ammo : "arcane magazine"
};
WeaponsList["thunder cannon-piercing round"] = {
	regExpSearch : /^(?=.*\bthunder)(?=.*cannon\b)(?=.*\bpiercing)(?=.*round\b).*$/i,
	name : "Thunder Cannon (Piercing Round)",
	source : ["UA:A", 6],
	ability : 4,
	type : "Thunder Cannon",
	damage : [4, 6, "lightning"],
	range : "30-ft line",
	weight : 0,
	description : "Ammunition, loading, two-handed, bonus action to reload; 5 ft wide line; Dex save or damage",
	dc : true,
	abilitytodamage : false,
	ammo : "arcane magazine"
};
WeaponsList["thunder cannon-explosive round"] = {
	regExpSearch : /^(?=.*\bthunder)(?=.*cannon\b)(?=.*\bexplosive)(?=.*round\b).*$/i,
	name : "Thunder Cannon (Explosive Round)",
	source : ["UA:A", 7],
	ability : 4,
	type : "Thunder Cannon",
	damage : [4, 8, "fire"],
	range : "500 ft",
	weight : 0,
	description : "Ammunition, loading, two-handed, bonus action to reload; 30-ft radius sphere; Dex save or damage",
	dc : true,
	abilitytodamage : false,
	ammo : "arcane magazine"
};

// Artificer ammo
WeaponsList["arcane magazine"] = {
	name : "Arcane Magazine",
	source : ["UA:A", 7],
	weight : 0.2, // based on the weight of renaissance bullets from the DMG
	icon : "Bullets",
	checks : [".Bullet"],
	display : 50,
	invName : "Thunder Cannon Rounds",
	alternatives : [/^((?=.*arcane)(?=.*magazine)|(?=.*thunder)(?=.*cannon)(?=.*rounds)).*$/i]
};
var iFileName = "UA_20170116_Ranger-and-Rogue.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Unearthed Arcana: Ranger and Rogue article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:RnR"] = {
	name : "Unearthed Arcana: Ranger and Rogue",
	abbreviation : "UA:RnR",
	group : "Unearthed Arcana",
	url : "http://media.wizards.com/2016/dnd/downloads/2017_01_UA_RangerRogue_0117JCMM.pdf",
	date : "2017/01/16"
};

// Adds 3 subclasses: 2 for the Ranger (and the Revised Ranger), and 1 for the Rogue
var theHorizonWalkerSubclass = {
	regExpSearch : /^(?=.*horizon)(?=.*(walker|conclave)).*$/i,
	subname : "Horizon Walker",
	source : ["UA:RnR", 1],
	fullname : "Horizon Walker",
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	features : {
		"subclassfeature3" : {
			name : "Planar magic",
			source : ["UA:RnR", 1],
			minlevel : 3,
			description : "\n   " + "I get bonus spells known, which do not count against the number of spells I can know",
			spellcastingExtra : ["protection from evil and good", "alter self", "protection from energy", "banishment", "teleportation circle"].concat(new Array(95)).concat("AddToKnown")
		},
		"subclassfeature3.1" : {
			name : "Planar Walker",
			source : ["UA:RnR", 1],
			minlevel : 3,
			description : "\n   " + "As a bonus action, I choose an enemy within 30 ft of me that I can see" + "\n   " + "Until the end of this turn, my attack against that enemy ignore damage resistances" + "\n   " + "In addition, the first time I hit it this turn, it takes an extra 1d6 force damage",
			action : ["bonus action", ""]
		},
		"subclassfeature3.2" : {
			name : "Portal Lore",
			source : ["UA:RnR", 1],
			minlevel : 3,
			description : "\n   " + "As an action, I sense the distance and direction to any planar portals within 1000 ft" + "\n   " + "I also sense to which plane the portal leads to; I can't sense details if obscured by magic" + "\n   " + "I can use this feature additional times by expending spell slots of 2nd level or higher",
			usages : 1,
			recovery : "short rest",
			action : ["action", ""]
		},
		"subclassfeature7" : {
			name : "Ethereal Step",
			source : ["UA:RnR", 1],
			minlevel : 7,
			description : "\n   " + "As a bonus action, I cast the Etherealness spell, which lasts until the end of the turn",
			usages : 1,
			recovery : "short rest",
			action : ["bonus action", ""]
		},
		"subclassfeature11" : {
			name : "Distant Strike",
			source : ["UA:RnR", 1],
			minlevel : 11,
			description : "\n   " + "With the Attack action, I can teleport 10 ft before each attack, to a spot I can see" + "\n   " + "If I attack two or more creatures with this action, I get an extra attack against a third"
		},
		"subclassfeature15" : {
			name : "Spectral Defense",
			source : ["UA:RnR", 1],
			minlevel : 15,
			description : "\n   " + "As a reaction when I take damage, I can halve that damage against me",
			action : ["reaction", ""]
		}
	}
};
AddSubClass("ranger", "horizon walker", theHorizonWalkerSubclass);
var thePrimevalGuardianSubclass = {
	regExpSearch : /^(?=.*primeval)(?=.*guardian).*$/i,
	subname : "Primeval Guardian",
	source : ["UA:RnR", 2],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	features : {
		"subclassfeature3" : {
			name : "Guardian magic",
			source : ["UA:RnR", 2],
			minlevel : 3,
			description : "\n   " + "I get bonus spells known, which do not count against the number of spells I can know",
			spellcastingExtra : ["entangle", "enhance ability", "conjure animals", "giant insect", "insect plague"].concat(new Array(95)).concat("AddToKnown")
		},
		"subclassfeature3.1" : {
			name : "Guardian Soul",
			source : ["UA:RnR", 2],
			minlevel : 3,
			description : "\n   " + "As a bonus action, I transform to or from a guardian form, changing me as follows:" + "\n    - " + "I grow to Large size, all my movement is reduced to 5 ft, and I get +5 ft reach" + "\n    - " + "I gain half my ranger level in temporary HP at the start of each of my turns" + "\n   " + "This ends when I'm incapacitated; When it ends, I lose all temporary HP I got from it",
			additional : ["", "", "1 temp HP per round", "2 temp HP per round", "2 temp HP per round", "3 temp HP per round", "3 temp HP per round", "4 temp HP per round", "4 temp HP per round", "5 temp HP per round", "5 temp HP per round", "6 temp HP per round", "6 temp HP per round", "7 temp HP per round", "7 temp HP per round", "8 temp HP per round", "8 temp HP per round", "9 temp HP per round", "9 temp HP per round", "10 temp HP per round"],
			action : ["bonus action", " (start/end)"]
		},
		"subclassfeature3.2" : {
			name : "Piercing Thorns",
			source : ["UA:RnR", 2],
			minlevel : 3,
			description : "\n   " + "Once each turn, a hit from my weapon attack can deal 1d6 extra piercing damage",
			calcChanges : {
				atkAdd : ["if (!isSpell) {fields.Description += (fields.Description ? '; ' : '') + 'Once per turn, +1d6 piercing damage'; }; ", "My weapon attacks can deal 1d6 extra piercing damage once per turn."]
			}
		},
		"subclassfeature7" : {
			name : "Ancient Fortitude",
			source : ["UA:RnR", 2],
			minlevel : 7,
			description : "\n   " + "When I assume my guardian form, my HP \u0026 max HP increase by twice my ranger level" + "\n   " + "When I leave the form, my max HP reverts back, and any excess HP I have is lost",
			additional : ["", "", "", "", "", "", "", "+16 max HP", "+18 max HP", "+20 max HP", "+22 max HP", "+24 max HP", "+26 max HP", "+28 max HP", "+30 max HP", "+32 max HP", "+34 max HP", "+36 max HP", "+38 max HP", "+40 max HP"]
		},
		"subclassfeature11" : {
			name : "Rooted Defense",
			source : ["UA:RnR", 2],
			minlevel : 11,
			description : "\n   " + "While in guardian form, the ground within 30 ft of me is difficult terrain for hostiles"
		},
		"subclassfeature15" : {
			name : "Guardian Aura",
			source : ["UA:RnR", 2],
			minlevel : 15,
			description : "\n   " + "While I'm in my guardian form, I heal allies that start their turn within 30 ft of me" + "\n   " + "They heal half my ranger level if they are below half HP and not undead or constructs",
			additional : ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "Heals 7 HP", "Heals 8 HP", "Heals 8 HP", "Heals 9 HP", "Heals 9 HP", "Heals 10 HP"]
		}
	}
};
AddSubClass("ranger", "primeval guardian", thePrimevalGuardianSubclass);
if (ClassList["rangerua"]) { // add them to the Revised Ranger as well, if it is defined
	var theHorizonConclaveSubclass = newObj(theHorizonWalkerSubclass);
	theHorizonConclaveSubclass.subname = "Horizon Conclave";
	delete theHorizonConclaveSubclass.fullname;
	AddSubClass("rangerua", "horizon conclave", theHorizonConclaveSubclass);
	var thePrimevalGuardianConclaveSubclass = newObj(theHorizonWalkerSubclass);
	thePrimevalGuardianConclaveSubclass.subname = "Primeval Guardian Conclave";
	delete thePrimevalGuardianConclaveSubclass.fullname;
	AddSubClass("rangerua", "primeval guardian conclave", thePrimevalGuardianConclaveSubclass);
};
AddSubClass("rogue", "scout", {
	regExpSearch : /scout/i,
	subname : "Scout",
	source : ["UA:RnR", 2],
	features : {
		"subclassfeature3" : {
			name : "Skirmisher",
			source : ["UA:RnR", 3],
			minlevel : 3,
			description : "\n   " + "As a reaction when a hostile ends its turn within 5 ft of me, I can move half my speed",
			action : ["reaction", ""]
		},
		"subclassfeature3.1" : {
			name : "Survivalist",
			source : ["UA:RnR", 3],
			minlevel : 3,
			description : "\n   " + "I gain proficiency and expertise with the Nature and Survival skills",
			skillstxt : "\n\n" + toUni("Scout") + ": proficiency and expertise with Nature and Survival.",
			eval : "AddSkillProf('Nature', true, true); AddSkillProf('Survival', true, true);",
			removeeval : "AddSkillProf('Nature', false, true); AddSkillProf('Survival', false, true);"
		},
		"subclassfeature9" : {
			name : "Superior Mobility",
			source : ["UA:RnR", 3],
			minlevel : 9,
			description : "\n   " + "I gain +10 ft to my walking speed (and swimming/climbing speed, if applicable)",
			speed : { 
				walk : { spd : "+10", enc : "+10" },
				climb : { spd : "_10", enc : "_10" },
				swim : { spd : "_10", enc : "_10" }
			}
		},
		"subclassfeature13" : {
			name : "Ambush Master",
			source : ["UA:RnR", 3],
			minlevel : 13,
			description : "\n   " + "As a bonus action in the first combat round with a surprised foe, I can lead the ambush" + "\n   " + "If I do so, allies who can see me gets +5 to their initiative roll, up to my initiative value" + "\n   " + "Also, each ally gains +10 ft to its speed that lasts until the end their next turn",
			action : ["bonus action", " (first round)"]
		},
		"subclassfeature17" : {
			name : "Sudden Strike",
			source : ["UA:RnR", 3],
			minlevel : 17,
			description : "\n   " + "With the Attack action, I can make one additional attack as a bonus action" + "\n   " + "This attack can benefit from my Sneak Attack even if I already used it this turn" + "\n   " + "However, I still can't use Sneak Attack on a single target more than once per turn",
			action : ["bonus action", " (with Attack action)"]
		}
	}
});
var iFileName = "UA_20170206_Sorcerous-Origins.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Unearthed Arcana: Sorcerous Origins article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:SO"] = {
	name : "Unearthed Arcana: Sorcerous Origins",
	abbreviation : "UA:SO",
	group : "Unearthed Arcana",
	url : "http://media.wizards.com/2017/dnd/downloads/26_UASorcererUA020617s.pdf",
	date : "2017/02/06"
};

// Adds 4 subclasses for the Sorcerer
//this code includes contributions by /u/SoilentBrad, as well as LamentingDemon on GitHub
AddSubClass("sorcerer", "favoured soul", {
	regExpSearch : /^(?=.*favou?red)(?=.*soul).*$/i,
	subname : "Favored Soul",
	source : ["UA:SO", 1],
	fullname : "Favored Soul",
	spellcastingList : {
		"class" : ["cleric", "sorcerer"]
	},
	features : {
		"subclassfeature1" : {
			name : "Divine Magic",
			source : ["UA:SO", 1],
			minlevel : 1,
			description : "\n   " + "When I select my 1st level or higher spells, I can also pick spells from the cleric spell list" + "\n   " + "These cleric spells count as sorcerer spells for me"
		},
		"subclassfeature1.1" : {
			name : "Supernatural Resilience",
			source : ["UA:SO", 1],
			minlevel : 1,
			description : "\n   " + "My hit point maximum increases by an amount equal to my sorcerer level",
			calcChanges : {
				hp : "if (classes.known.sorcerer) {extrahp += classes.known.sorcerer.level; extrastring += '\\n + ' + classes.known.sorcerer.level + ' from Supernatural Resilience (Sorcerer)'; }; "
			}
		},
		"subclassfeature1.2" : {
			name : "Favored by the Gods",
			source : ["UA:SO", 1],
			minlevel : 1,
			description : "\n   " + "If I fail a saving throw or miss with an attack roll, I can add 2d4 to the total",
			recovery : "short rest",
			usages : 1
		},
		"subclassfeature6" : {
			name : "Blessed Countenance",
			source : ["UA:SO", 1],
			minlevel : 6,
			description : "\n   " + "Choose an otherworldly quality using the \"Choose Feature\" button above" + "\n   " + "When my proficiency bonus applies to a Charisma check, I double that bonus",
			choices : ["Beautiful", "Youthful", "Kind", "Imposing"],
			"beautiful" : {
				name : "Beautiful",
				source : ["UA:SO", 1],
				description : "\n   " + "My appearance takes on an otherworldly quality of beauty" + "\n   " + "When my proficiency bonus applies to a Charisma check, I double that bonus"
			},
			"youthful" : {
				name : "Youthful",
				source : ["UA:SO", 1],
				description : "\n   " + "My appearance takes on an otherworldly quality of youthfulness" + "\n   " + "When my proficiency bonus applies to a Charisma check, I double that bonus"
			},
			"kind" : {
				name : "Kind",
				source : ["UA:SO", 1],
				description : "\n   " + "My appearance takes on an otherworldly quality of kindness" + "\n   " + "When my proficiency bonus applies to a Charisma check, I double that bonus"
			},
			"imposing" : {
				name : "Imposing",
				source : ["UA:SO", 1],
				description : "\n   " + "My appearance takes on an otherworldly quality of imposingness" + "\n   " + "When my proficiency bonus applies to a Charisma check, I double that bonus"
			},
			skillstxt : "\n\n" + toUni("Blessed Countenance (Sorcerer)") + ": I gain expertise in any Charisma-based skill I'm proficient with.",
			eval : "AddSkillProf('Dec', true, 'only'); AddSkillProf('Inti', true, 'only'); AddSkillProf('Perf', true, 'only'); AddSkillProf('Pers', true, 'only');",
			removeeval : "AddSkillProf('Dec', false, 'only'); AddSkillProf('Inti', false, 'only'); AddSkillProf('Perf', false, 'only'); AddSkillProf('Pers', false, 'only');"
		},
		"subclassfeature14" : {
			name : "Divine Purity",
			source : ["UA:SO", 1],
			minlevel : 14,
			description : "\n   " + "I become immune to disease and poison",
			savetxt : { immune : ["poison", "disease"] }
		},
		"subclassfeature18" : {
			name : "Unearthly Recovery",
			source : ["UA:SO", 1],
			minlevel : 18,
			description : "\n   " + "As a bonus action when I have less than half of my max HP, I can heal myself" + "\n   " + "I regain a number of HP equal to half my maximum Hit Points",
			action : ["bonus action", ""],
			recovery : "long rest",
			usages : 1
		}
	}
});
//this code includes contributions by /u/SoilentBrad, as well as Toby L.
AddSubClass("sorcerer", "phoenix sorcery", {
	regExpSearch : /^(?=.*phoenix)(?=.*(sorcerer|sorcery|witch)).*$/i,
	subname : "Phoenix Sorcery",
	source : ["UA:SO", 1],
	fullname : "Phoenix Sorcerer",
	features : {
		"subclassfeature1" : {
			name : "Ignite",
			source : ["UA:SO", 2],
			minlevel : 1,
			description : "\n   " + "As an action, I can magically ignite a flammable object by touching it with my hand",
			action : ["action", ""]
		},
		"subclassfeature1.1" : {
			name : "Mantle of Flame",
			source : ["UA:SO", 2],
			minlevel : 1,
			description : desc([
				"As a bonus action, I can wreathe myself in fire for 1 minute, gaining these benefits:",
				" - I shed bright light in a 30-ft radius and dim light for an additional 30 ft",
				" - I deal my Charisma modifier in fire damage to all that touch me",
				" - I also deal this damage to all that hit me with a melee attack from within 5 ft",
				" - When I roll for fire damage on my turn, I add my Charisma damage to the result"
			]),
			action : ["bonus action", ""],
			recovery : "long rest",
			usages : 1
		},
		"subclassfeature6" : {
			name : "Phoenix Spark",
			source : ["UA:SO", 2],
			minlevel : 6,
			description : desc([
				"As a reaction when I am reduced to 0 HP, I can draw on the phoenix to stay at 1 HP",
				"All creatures within 10 ft of me take half my sorcerer level + my Cha mod fire damage",
				"If I have Mantle of Flame active, this damage is my sorcerer level + twice my Cha mod",
				"If I use this feature, my Mantle of Flame immediately ends"
			]),
			additional : levels.map( function(n) {
				if (n < 6) return "";
				return Math.floor(n / 2) + "+Cha \u007Cor\u007C " + n + "+2\u00D7Cha";
			}),
			action : ["reaction", ""],
			recovery : "long rest",
			usages : 1
		},
		"subclassfeature14" : {
			name : "Nourishing Fire",
			source : ["UA:SO", 2],
			minlevel : 14,
			description : desc([
				"When I cast a spell using a spell slot that includes a fire damage roll, I regain HP",
				"The HP regained is equal to the spell slot level + my Charisma modifier"
			])
		},
		"subclassfeature18" : {
			name : "Form of the Phoenix",
			source : ["UA:SO", 2],
			minlevel : 18,
			description : desc([
				"While my Mantle of Flame is active, I gain the following additional benefits:",
				"- I have a flying speed of 40 ft and can hover",
				"- I have resistance to all damage",
				"- If I use my Phoenix Spark, it deals an extra 20 fire damage to each creature"
			]),
			dmgres : [["All", "All (Mantle of Flame)"]]
		}
	}
});
//this code includes contributions by /u/SoilentBrad
AddSubClass("sorcerer", "sea sorcery", {
	regExpSearch : /^(?=.*sea)(?=.*(sorcerer|sorcery|witch)).*$/i,
	subname : "Sea Sorcery",
	source : ["UA:SO", 2],
	fullname : "Sea Sorcerer",
	features : {
		"subclassfeature1" : {
			name : "Soul of the Sea",
			source : ["UA:SO", 3],
			minlevel : 1,
			description : "\n   " + "I can breathe underwater and I have a swim speed equal to my walking speed",
			speed : { swim : { spd : "walk", enc : "walk" } }
		},
		"subclassfeature1.1" : {
			name : "Curse of the Sea",
			source : ["UA:SO", 3],
			minlevel : 1,
			description : desc([
				"I can curse a target that I hit with a cantrip or that fails its save against my cantrip",
				"This lasts until the end of my next turn or until I curse another target like this",
				"Once per turn when I cast a spell, I can trigger an active curse, if a condition is met",
				" - If spell dealt cold damage to it, its has -15 ft speed until the end of my next turn",
				" - If the spell dealt lightning damage to it, that damage is increased with my Cha mod",
				" - If the spell moved the target, it is moved an additional 15 ft",
				"Only one of these effects can be applied, even if the spell meets multiple conditions",
				"If the spell triggering the curse is a cantrip, the target stays cursed for another round"
			])
		},
		"subclassfeature6" : {
			name : "Watery Defense",
			source : ["UA:SO", 3],
			minlevel : 6,
			description : desc([
				"I gain resistance to fire damage",
				"I can protect myself when an attack deals bludgeoning, piercing, or slashing damage",
				"As a reaction when that happens, I reduce the damage by my sorcerer level + Charisma",
				"I can then also move up to 30 ft without provoking opportunity attacks"
			]),
			additional : levels.map( function(n) {
				if (n < 6) return "";
				return n + " + Charisma score";
			}),
			action : ["reaction", ""],
			recovery : "short rest",
			usages : 1,
			dmgres : ["Fire"]
		},
		"subclassfeature14" : {
			name : "Shifting Form",
			source : ["UA:SO", 3],
			minlevel : 14,
			description : desc([
				"I gain the ability to enter a liquid state while moving, squeezing through small spaces",
				"When I move on my turn, I take half damage from opportunity attacks",
				"I can move through any enemy's space, but can't willingly end my move in that space",
				"On my turn, I can move through any opening of at least 3 inches in diameter",
				"I can't end my move in a space smaller than one size category smaller than I am"
			])
		},
		"subclassfeature18" : {
			name : "Water Soul",
			source : ["UA:SO", 3],
			minlevel : 18,
			description : desc([
				"I no longer need to eat, drink, or sleep; Critical hits against me become normal hits",
				"I gain resistance to bludgeoning, piercing, and slashing damage"
			]),
			dmgres : ["Bludgeoning", "Piercing", "Slashing"]
		}
	}
});
//this code includes contributions by /u/SoilentBrad
AddSubClass("sorcerer", "stone sorcery", {
	regExpSearch : /^(?=.*stone)(?=.*(sorcerer|sorcery|witch)).*$/i,
	subname : "Stone Sorcery",
	source : ["UA:SO", 3],
	fullname : "Stone Sorcerer",
	spellcastingExtra : ["compelled duel", "searing smite", "thunderous smite", "wrathful smite", "branding smite", "magic weapon", "blinding smite", "elemental weapon", "staggering smite"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Proficiencies",
			source : ["UA:SO", 4],
			minlevel : 1,
			description : "\n   " + "I gain proficiency with shields, simple weapons and martial weapons",
			armor : [false, false, false, true],
			weapons : [true, true]
		},
		"subclassfeature1.1" : {
			name : "Metal Magic",
			source : ["UA:SO", 4],
			minlevel : 1,
			description : "\n   " + "My affinity for metal allows me to select from a broader range of spells"
		},
		"subclassfeature1.2" : {
			name : "Stone's Durability",
			source : ["UA:SO", 4],
			minlevel : 1,
			description : desc([
				"My hit point maximum increases by an amount equal to my sorcerer level",
				"As an action, I can gain an AC of 13 + Constitution modifier + shield",
				"This AC lasts until I don armor, I'm incapacitated, or use a bonus action to end it"
			]),
			action : ["action", " (start)"],
			eval : "AddAction(\"bonus action\", \"Stone's Durability (end)\", \"Stone's Durability (Stone Sorcerer)\");",
			removeeval : "RemoveAction(\"bonus action\", \"Stone's Durability (end)\");",
			calcChanges : {
				hp : "if (classes.known.sorcerer) {extrahp += classes.known.sorcerer.level; extrastring += '\\n + ' + classes.known.sorcerer.level + ' from Stone\\'s Durability (Sorcerer)'; }; "
			}
		},
		"subclassfeature6" : {
			name : "Stone Aegis",
			source : ["UA:SO", 4],
			minlevel : 6,
			description : desc([
				"As a bonus action, I can grant an aegis to an ally I can see within 60 ft of me",
				"The aegis reduces any bludgeoning, piercing, or slashing damage taken by the target",
				"This aegis lasts for 1 minute, until I use it again, or until I'm incapacitated",
				"As a reaction when the protected ally is attacked with a melee attack, I can teleport",
				"I can do this only if the attacker is within 60 ft of me and I can see it",
				"I teleport to an empty space next to it and make one melee weapon attack against it",
				"If this attack hits, the attack deals extra force damage"
			]),
			additional : levels.map( function(n) {
				if (n < 6) return "";
				return (Math.floor(n / 4) + 2) + " damage reduction; +" + (n < 11 ? 1 : n < 17 ? 2 : 3) + "d10 force damage";
			}),
			action : ["bonus action", ""],
			eval : "AddAction('reaction', 'Aegis Teleport', 'Stone Aegis (Stone Sorcerer)');",
			removeeval : "RemoveAction('reaction', 'Aegis Teleport');"
		},
		"subclassfeature14" : {
			name : "Stone's Edge",
			source : ["UA:SO", 4],
			minlevel : 14,
			description : desc([
				"Once per casting of a spell that deals damage, I can choose one creature damaged by it",
				"That creature takes extra force damage equal to half my sorcerer level"
			]),
			additional : levels.map( function(n) {
				return n < 14 ? "" : Math.floor(n / 2) + " force damage";
			})
		},
		"subclassfeature18" : {
			name : "Earth Master's Aegis",
			source : ["UA:SO", 4],
			minlevel : 18,
			description : "\n   " + "My Stone's Aegis can now affect up to three creatures"
		}
	}
});

// Stone Sorcerer armour
ArmourList["stone's durability"] = {
	regExpSearch : /^(?=.*stone)(?=.*durability).*$/i,
	name : "Stone's Durability (Con)",
	source : ["UA:SO", 4],
	type : "",
	ac : 13,
	stealthdis : false,
	strReq : 0,
	dex : -10,
	addMod : true
};
var iFileName = "UA_20170213_Warlock-and-Wizard.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Unearthed Arcana: Warlock and Wizard article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:WnW"] = {
	name : "Unearthed Arcana: Warlock and Wizard",
	abbreviation : "UA:WnW",
	group : "Unearthed Arcana",
	url : "http://media.wizards.com/2017/dnd/downloads/20170213_Wizrd_Wrlck_UAv2_i48nf.pdf",
	date : "2017/02/13"
};

// Adds 3 subclasses, 2 for the Warlock, and 1 for the Wizard
//this code includes contributions by Greg N.
AddSubClass("warlock", "the hexblade", {
	regExpSearch : /^(?=.*hexblade)(?=.*warlock).*$/i,
	subname : "the Hexblade",
	source : ["UA:WnW", 1],
	spellcastingExtra : ["shield", "wrathful smite", "branding smite", "magic weapon", "blink", "elemental weapon", "phantasmal killer", "staggering smite", "cone of cold", "destructive wave"],
	features : {
		"subclassfeature1" : {
			name : "Hex Warrior",
			source : ["UA:WnW", 1],
			minlevel : 1,
			description : desc([
				"I gain proficiency with medium armor, shields, and martial weapons",
				"With one-handed melee weapons I can use Charisma instead of Strength or Dexterity"
			]),
			armor : [false, true, false, true],
			weapons : [false, true],
			calcChanges : {
				atkAdd : ["if (isMeleeWeapon && !(/\\b(2|two).?hand(ed)?s?\\b/i).test(WeaponText)) { fields.Mod = What('Cha Mod') > What(AbilityScores.abbreviations[fields.Mod - 1] + ' Mod') ? 6 : fields.Mod; }; ", "For melee weapons that lack the two-handed property, I can use my Charisma instead of Strength or Dexterity."]
			}
		},
		"subclassfeature1.1" : {
			name : "Hexblade's Curse",
			source : ["UA:WnW", 1],
			minlevel : 1,
			description : desc([
				"As a bonus action, I can curse a creature I can see within 30 ft of me for 1 minute",
				" - I add my proficiency bonus to damage rolls against the cursed target",
				" - My attack rolls against the curse target score a critical hit on a roll of 19 and 20",
				" - If the target dies while cursed, I regain HP equal to my warlock level + Cha mod"
			]),
			recovery : "short rest",
			usages : levels.map( function(n) { return n < 14 ? 1 : ""; }),
			action : ["bonus action", ""],
			calcChanges : {
				atkAdd : ["if (!isDC && (/hexblade/i).test(WeaponText) && !CritChance) {var CritChance = 19; fields.Description += (fields.Description ? '; ' : '') + 'Crit on 19-20'; }; ", "If I include the word 'Hexblade' in the name of a weapon, the automation will treat the attack as being against a target of the Hexblade's Curse: adding my proficiency bonus to the damage and adding the increased chance of a critical hit to the description."],
				atkCalc : ["if ((/hexblade/i).test(WeaponText)) {output.extraDmg += output.prof; }; ", ""]
			}
		},
		"subclassfeature6" : {
			name : "Shadow Hound",
			source : ["UA:WnW", 1],
			minlevel : 6,
			description : desc([
				"My shadow becomes a hound of pure darkness; Truesight reveals its nature",
				"As a bonus action, I can have it slip into the shadow of another I can see within 60 ft",
				"I know the distance/direction to the target; I ignore 1/2, 3/4 cover of the target",
				"My shadow returns to me if I use a bonus action to do so, I become incapacitated, ",
				"a spell is used to stop it, or if one of us moves to another plane of existence"
			])
		},
		"subclassfeature10" : {
			name : "Armor of Hexes",
			source : ["UA:WnW", 2],
			minlevel : 10,
			description : "\n   " + "Targets affected by my hexblade's curse have a 50% of missing me with any attack roll"
		},
		"subclassfeature14" : {
			name : "Master of Hexes",
			source : ["UA:WnW", 2],
			minlevel : 14,
			description : desc([
				"I no longer need to rest to be able to use my Hexblade's Curse again",
				"However, when I curse a new target, the curse immediately ends on the previous target"
			])
		}
	}
});
//this code includes contributions by Ben Y. and Wizzard
AddSubClass("warlock", "the raven queen", {
	regExpSearch : /^(?=.*\braven)(?=.*queen\b).*$/i,
	subname : "the Raven Queen",
	source : ["UA:WnW", 2],
	spellcastingExtra : ["false life", "sanctuary", "silence", "spiritual weapon", "feign death", "speak with dead", "ice storm", "locate creature", "commune", "cone of cold"],
	features : {
		"subclassfeature1" : {
			name : "Sentinel Raven",
			source : ["UA:WnW", 2],
			minlevel : 1,
			description : desc([
				"I gain the services of a spirit in the form of a raven (using the stats of a raven)",
				"It always obeys my commands, rolls its own initiative, and can be slain",
				"While it's within 100 ft, I can telepathically speak with it and see/hear what it does",
				"While it's on my shoulder, I gain Darkvision 30 ft and add my Cha mod to Perception",
				"While it's on my shoulder, it can't be targeted, take damage, or take actions",
				"It vanishes if it is more than 5 miles away from me, it dies, or if I die",
				"If it dies, I gain advantage on all attack rolls against its killer for 24 hours",
				"After a short rest, I can recall it to me regardless of its location or if it died"
			]),
			vision : [["Darkvision", 30]],
			addMod : { type : "skill", field : "Perc", mod : "Cha", text : "While my sentinel raven on my shoulder, I can add my Charisma modifier to Perception." }
		},
		"subclassfeature6" : {
			name : "Soul of the Raven",
			source : ["UA:WnW", 2],
			minlevel : 6,
			description : desc([
				"As a bonus action, when my raven is perched on my shoulder, I can merge our bodies",
				"I become tiny and replace my speed with the raven's (10 ft, fly 50 ft)",
				"I can then use my action only to Dash, Disengage, Dodge, Help, Hide, or Search",
				"While merged, I still get all the benefits of my raven being perched on my shoulder",
				"I can end this as an action"
			]),
			action : ["bonus action", " (start)"],
			eval : "AddAction('action', 'Soul of the Raven (end)', 'Warlock (the Raven Queen)')",
			removeeval : "RemoveAction('action', 'Soul of the Raven (end)')"
		},
		"subclassfeature10" : {
			name : "Raven's Shield",
			source : ["UA:WnW", 3],
			minlevel : 10,
			description : "\n   " + "I can't be frightened, have advantage on death saves, and resistance to necrotic damage",
			savetxt : { immune : ["frightened"], adv_vs : ["death"] },
			dmgres : ["Necrotic"]
		},
		"subclassfeature14" : {
			name : "Queen's Right Hand",
			source : ["UA:WnW", 3],
			minlevel : 14,
			description : "\n   " + "I can cast Finger of Death once per long rest",
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Queen's Right Hand",
				spells : ["finger of death"],
				selection : ["finger of death"],
				oncelr : true
			}
		}
	}
});
//this code includes contributions by /u/magicmanfk
AddSubClass("wizard", "lore mastery", {
	regExpSearch : /^(?=.*\blore)(?=.*mastery?\b).*$/i,
	subname : "Lore Mastery",
	source : ["UA:WnW", 5],
	fullname : "Lore Master",
	features : {
		"subclassfeature2" : {
			name : "Lore Master",
			source : ["UA:WnW", 6],
			minlevel : 2,
			description : desc([
				"I can use my Intelligence modifier for initiative instead of my Dexterity modifier",
				"I get expertise with each Arcana, History, Nature, and Religion, if I'm proficient with it"
			]),
			skillstxt : "\n\n" + toUni("Lore Master") + ": Expertise with Arcana, History, Nature, and Religion if I am already proficient with the skill.",
			addMod : { type : "skill", field : "Init", mod : "Int-Dex", text : "I use my Intelligence modifier for initiative rolls instead of Dexterity." },
			eval : "['Arc', 'His', 'Nat', 'Rel'].forEach( function(skl) { AddSkillProf(skl, undefined, 'only'); });",
			removeeval : "['Arc', 'His', 'Nat', 'Rel'].forEach( function(skl) { AddSkillProf(skl, false, 'only'); });"
		},
		"subclassfeature2.1" : {
			name : "Spell Secrets: Elements",
			source : ["UA:WnW", 6],
			minlevel : 2,
			description : desc([
				"I can change the damage type of spells I cast using spell slots (so not cantrips)",
				"I can swap out acid, cold, fire, force, lightning, necrotic, radiant, or thunder damage"
			])
		},
		"subclassfeature2.2" : {
			name : "Spell Secrets: Saves",
			source : ["UA:WnW", 6],
			minlevel : 2,
			description : "\n   " + "I can change the saving throw ability score to another for a spell I cast using a spell slot",
			recovery : "short rest",
			usages : 1
		},
		"subclassfeature6" : {
			name : "Alchemical Casting",
			source : ["UA:WnW", 6],
			minlevel : 6,
			description : desc([
				"When I cast a spell with a spell slot, I can expend one additional spell slot to augment it",
				" - 1st-level slot: one damage roll of the spell adds +2d10 force damage",
				" - 2nd-level slot: if the range of the spell is at least 30 ft, it becomes 1 mile",
				" - 3rd-level slot: the spell's save DC increases by 2"
			])
		},
		"subclassfeature10" : {
			name : "Prodigious Memory",
			source : ["UA:WnW", 6],
			minlevel : 10,
			description : "\n   " + "As a bonus action, I can replace one of my prepared spells with another from my book",
			recovery : "short rest",
			usages : 1,
			action : ["bonus action", ""]
		},
		"subclassfeature14" : {
			name : "Master of Magic",
			source : ["UA:WnW", 6],
			minlevel : 14,
			description : desc([
				"As a bonus action, I can call to mind one spell of my choice from any class' spell list",
				"This spell must be of a level I have spell slots for and that I don't already have prepared",
				"I can then cast it using the normal spellcasting rules, including expending a spell slot",
				"It counts a wizard spell; I can only cast the spell during the same turn I call it to mind"
			]),
			usages : 1,
			recovery : "long rest",
			action : ["bonus action", ""]
		}
	}
});

// Add many new Warlock invocations
AddWarlockInvocation("Aspect of the Moon (prereq: the Archfey patron)", {
	name : "Aspect of the Moon",
	description : "\n   " + "I don't need to sleep nor can be magically forced to; I can rest while doing light activity",
	source : ["UA:WnW", 3],
	prereqeval : "classes.known.warlock.subclass === 'the archfey'",
	eval : "AddString('Saving Throw advantages \/ disadvantages', \"Magic can't put me to sleep\", '; ');",
	removeeval : "RemoveString('Saving Throw advantages \/ disadvantages', \"Magic can't put me to sleep\");"
});
AddWarlockInvocation("Burning Hex (prereq: the Hexblade patron)", {
	name : "Burning Hex",
	description : desc([
		"As a bonus action, I can cause a target affected by my hexblade's curse to take damage",
		"It immediately takes fire damage equal to my Charisma modifier (min 1)"
	]),
	source : ["UA:WnW", 3],
	prereqeval : "classes.known.warlock.subclass === 'warlock-the hexblade'",
	action : ["bonus action", ""]
});
AddWarlockInvocation("Caiphon's Beacon (prereq: the Great Old One patron)", {
	name : "Caiphon's Beacon",
	description : desc([
		"I gain proficiencies with the Deception and Stealth skills",
		"I have advantage on attack rolls against charmed creatures"
	]),
	source : ["UA:WnW", 3],
	prereqeval : "classes.known.warlock.subclass === 'the great old one'",
	skills : ["Deception", "Stealth"],
	skillstxt : "\n\n" + toUni("Warlock (Caiphon's Beacon)") + ": Deception and Stealth."
});
AddWarlockInvocation("Chilling Hex (prereq: the Hexblade patron)", {
	name : "Chilling Hex",
	description : desc([
		"As a bonus action, I can swirl frost around a target affected by my hexblade's curse",
		"All creatures within 5 ft of the target take cold damage equal to my Cha modifier (min 1)"
	]),
	source : ["UA:WnW", 3],
	prereqeval : "classes.known.warlock.subclass === 'warlock-the hexblade'",
	action : ["bonus action", ""]
});
AddWarlockInvocation("Chronicle of the Raven Queen (prereq: the Raven Queen patron, Pact of the Tome)", {
	name : "Chronicle of the Raven Queen",
	description : desc([
		"Within 1 minute of a creature's death, I can use my book of shadows to ask it 1 question",
		"To do this, I need to put the corpse's hand on the book and speak the question aloud",
		"Its spirit writes the answer, to the best of its knowledge, in blood in a language I choose"
	]),
	source : ["UA:WnW", 3],
	prereqeval : "classes.known.warlock.subclass === 'warlock-the raven queen' && classes.known.warlock.level >= 3 && What('Class Features Remember').indexOf('warlock,pact boon,pact of the tome') !== -1",
	action : ["bonus action", ""]
});
AddWarlockInvocation("Claw of Acamar (prereq: the Great Old One patron, Pact of the Blade)", {
	name : "Claw of Acamar",
	description : desc([
		"As a pact weapon, I can create a black, lead flail with grasping tentacles for a head",
		"It has reach and can reduce a creature's speed to 0 on a hit until the end of my next turn",
		"On a hit, I can expand a spell slot to have it do +2d8 necrotic damage per spell slot level"
	]),
	source : ["UA:WnW", 3],
	prereqeval : "classes.known.warlock.subclass === 'the great old one' && classes.known.warlock.level >= 3 && What('Class Features Remember').indexOf('warlock,pact boon,pact of the blade') !== -1",
	eval : "AddWeapon('Claw of Acamar');",
	removeeval : "RemoveWeapon('Claw of Acamar');"
});
AddWarlockInvocation("Cloak of Baalzebul (prereq: the Fiend patron)", {
	name : "Cloak of Baalzebul",
	description : desc([
		"As a bonus action, I can conjure or dismiss a swarm of buzzing flies around me",
		"This gives me adv. on Cha (Intimidation) checks, but disadv. on all other Charisma checks",
		"Creatures starting their turn within 5 ft of me take poison damage equal to my Cha mod"
	]),
	source : ["UA:WnW", 3],
	prereqeval : "classes.known.warlock.subclass === 'the fiend'",
	action : ["bonus action", " (start/end)"]
});
AddWarlockInvocation("Curse Bringer (prereq: the Hexblade patron, Pact of the Blade)", {
	name : "Curse Bringer",
	description : desc([
		"As a pact weapon, I can create a silver greatsword with black runes etched in the blade",
		"If I bring a target of my hexblade's curse to 0 HP with it, I can move the curse to another",
		"It can reduce a creature's speed to 0 on a hit until the end of my next turn",
		"On a hit, I can expand a spell slot to have it do +2d8 slashing damage per spell slot level"
	]),
	source : ["UA:WnW", 4],
	prereqeval : "classes.known.warlock.subclass === 'warlock-the hexblade' && classes.known.warlock.level >= 3 && What('Class Features Remember').indexOf('warlock,pact boon,pact of the blade') !== -1",
	eval : "AddWeapon('Curse Bringer');",
	removeeval : "RemoveWeapon('Curse Bringer');"
});
AddWarlockInvocation("Kiss of Mephistopheles (prereq: level 5 warlock, the Fiend patron, Eldritch Blast cantrip)", {
	name : "Kiss of Mephistopheles",
	description : desc([
		"As a bonus action when my Eldritch Blast hits, I can cast Fireball using a warlock spell slot",
		"The origin of the Fireball is the creature that was hit with my Eldritch Blast attack"
	]),
	source : ["UA:WnW", 4],
	prereqeval : "hasEldritchBlast && classes.known.warlock.level >= 5 && classes.known.warlock.subclass === 'the fiend'",
	action : ["bonus action", ""]
});
AddWarlockInvocation("Frost Lance (prereq: the Archfey patron, Eldritch Blast cantrip)", {
	name : "Frost Lance",
	description : desc([
		"When my Eldritch Blast hits a creature once or more, I can reduce its speed by 10 ft",
		"This speed reduction lasts until the end of my next turn"
	]),
	source : ["UA:WnW", 4],
	prereqeval : "hasEldritchBlast && classes.known.warlock.subclass === 'the archfey'",
	calcChanges : {
		atkAdd : ["if (theWea && (/eldritch blast/i).test(theWea.name)) {fields.Description += '; Target -10 ft speed'; }; ", "When I hit a creature with my Eldritch Blast cantrip once or more times in a turn, I can reduce its speed by 10 ft until the end of my next turn."]
	}
});
AddWarlockInvocation("Gaze of Khirad (prereq: level 7 warlock, the Great Old One patron)", {
	name : "Gaze of Khirad",
	description : desc([
		"As an action, I can see through solid object out to 30 ft until the end of my current turn"
	]),
	source : ["UA:WnW", 4],
	prereqeval : "classes.known.warlock.subclass === 'the great old one' && classes.known.warlock.level >= 7",
	action : ["action", ""]
});
AddWarlockInvocation("Grasp of Hadar (prereq: the Great Old One patron, Eldritch Blast cantrip)", {
	name : "Grasp of Hadar",
	description : desc([
		"When my Eldritch Blast hits a creature once or more, I can move it 10 ft closer to me"
	]),
	source : ["UA:WnW", 4],
	prereqeval : "hasEldritchBlast && classes.known.warlock.subclass === 'the great old one'",
	calcChanges : {
		atkAdd : ["if (theWea && (/eldritch blast/i).test(theWea.name)) {fields.Description += '; Target moved 10 ft to me'; }; ", "When I hit a creature with my Eldritch Blast cantrip once or more times in a turn, I can move it in a straight line 10 ft closer to me."]
	}
});
AddWarlockInvocation("Green Lord's Gift (prereq: the Archfey patron)", {
	name : "Green Lord's Gift",
	description : desc([
		"When I regain HP, all dice for determining the HP I heal are treated as rolling maximum"
	]),
	source : ["UA:WnW", 4],
	prereqeval : "classes.known.warlock.subclass === 'the archfey'"
});
AddWarlockInvocation("Improved Pact Weapon (prereq: level 5 warlock, Pact of the Blade)", {
	name : "Improved Pact Weapon",
	description : desc([
		"Any pact weapon I create is a +1 magic weapon, if it isn't already a magic weapon"
	]),
	source : ["UA:WnW", 4],
	prereqeval : "classes.known.warlock.level >= 5 && What('Class Features Remember').indexOf('warlock,pact boon,pact of the blade') !== -1",
	calcChanges : {
		atkCalc : ["if (!thisWeapon[1] && (/\\bpact\\b/i).test(WeaponText)) { var pactMag = pactMag !== undefined ? 1 - pactMag : 1; output.magic += pactMag; }; ", "If I include the word 'Pact' in a weapon's name or description, it will be treated as a Pact Weapon. If it doesn't already include a magical bonus in its name, the calculation will add +1 to its To Hit and Damage."]
	}
});
AddWarlockInvocation("Mace of Dispater (prereq: the Fiend patron, Pact of the Blade)", {
	name : "Mace of Dispater",
	description : desc([
		"As a pact weapon, I can create an iron mace forged in Dis, the 2nd layer of the Nine Hells",
		"I can knock a target prone with it on a hit, if the target's size is Huge or smaller",
		"On a hit, I can expand a spell slot to have it do +2d8 force damage per spell slot level"
	]),
	source : ["UA:WnW", 4],
	prereqeval : "classes.known.warlock.subclass === 'the fiend' && classes.known.warlock.level >= 3 && What('Class Features Remember').indexOf('warlock,pact boon,pact of the blade') !== -1",
	eval : "AddWeapon('Mace of Dispater');",
	removeeval : "RemoveWeapon('Mace of Dispater');"
});
AddWarlockInvocation("Moon Bow (prereq: the Archfey patron, Pact of the Blade)", {
	name : "Moon Bow",
	description : desc([
		"As a pact weapon, I can create a longbow that creates arrows of white wood when drawn",
		"Its arrows last for 1 minute; I have advantage on attack rolls against lycanthropes with it",
		"On a hit, I can expand a spell slot to have it do +2d8 radiant damage per spell slot level"
	]),
	source : ["UA:WnW", 4],
	prereqeval : "classes.known.warlock.subclass === 'the archfey' && classes.known.warlock.level >= 3 && What('Class Features Remember').indexOf('warlock,pact boon,pact of the blade') !== -1",
	eval : "AddWeapon('Moon Bow');",
	removeeval : "RemoveWeapon('Moon Bow');"
});
AddWarlockInvocation("Path of the Seeker (prereq: the Seeker patron)", {
	name : "Path of the Seeker",
	description : desc([
		"I ignore difficult terrain; I have advantage on saving throws against being paralyzed",
		"I also have advantage on checks to escape a grapple, manacles, or rope bindings"
	]),
	source : ["UA:WnW", 4],
	prereqeval : "classes.known.warlock.subclass === 'the seeker'",
	eval : "AddString('Saving Throw advantages \/ disadvantages', 'Adv. vs. being paralyzed', '; ');",
	removeeval : "RemoveString('Saving Throw advantages \/ disadvantages', 'Adv. vs. being paralyzed');"
});
AddWarlockInvocation("Raven Queen's Blessing (prereq: the Raven Queen patron, Eldritch Blast cantrip)", {
	name : "Raven Queen's Blessing",
	description : desc([
		"When I score a critical hit with Eldritch Blast, I can choose an ally I can see within 30 ft",
		"That ally can immediately expend one HD to regain HP, just like after a short rest"
	]),
	source : ["UA:WnW", 5],
	prereqeval : "classes.known.warlock.subclass === 'warlock-the raven queen' && hasEldritchBlast"
});
AddWarlockInvocation("Relentless Hex (prereq: level 5 warlock, the Hexblade patron)", {
	name : "Relentless Hex",
	description : desc([
		"As a bonus action, I can teleport next to a target affected by my hexblade's curse",
		"To do so, I must see the target and the space I'm teleporting to, and be within 30 ft of it"
	]),
	source : ["UA:WnW", 5],
	prereqeval : "classes.known.warlock.subclass === 'warlock-the hexblade' && classes.known.warlock.level >= 5",
	action : ["bonus action", ""]
});
AddWarlockInvocation("Sea Twins' Gift (prereq: the Archfey patron)", {
	name : "Sea Twins' Gift",
	description : desc([
		"I can breathe underwater and I have a swim speed equal to my walking speed",
		"Once per long rest, I can cast Water Breathing using a warlock spell slot (PHB 287)"
	]),
	spellcastingBonus : {
		name : "Sea Twins' Gift",
		spells : ["water breathing"],
		selection : ["water breathing"],
		oncelr : true
	},
	source : ["UA:WnW", 5],
	prereqeval : "classes.known.warlock.subclass === 'the archfey'",
	speed : { swim : { spd : "walk", enc : "walk" } }
});
AddWarlockInvocation("Seeker's Speech (prereq: the Seeker patron)", {
	name : "Seeker's Speech",
	description : desc([
		"When I finish a long rest, I pick two languages that I know until I finish my next long rest"
	]),
	source : ["UA:WnW", 5],
	prereqeval : "classes.known.warlock.subclass === 'the seeker'"
});
AddWarlockInvocation("Shroud of Ulban (prereq: level 18 warlock, the Great Old One patron)", {
	name : "Shroud of Ulban",
	description : desc([
		"As an action, I can turn myself invisible for 1 minute",
		"If I attack, deal damage, or force a creature to make a save, I become visible again",
		"However, I only become visible at the end of the current turn"
	]),
	source : ["UA:WnW", 4],
	prereqeval : "classes.known.warlock.subclass === 'the great old one' && classes.known.warlock.level >= 18",
	action : ["action", ""]
});
AddWarlockInvocation("Superior Pact Weapon (prereq: level 9 warlock, Pact of the Blade)", {
	name : "Superior Pact Weapon",
	description : desc([
		"Any pact weapon I create is a +2 magic weapon, if it isn't already a magic weapon"
	]),
	source : ["UA:WnW", 5],
	prereqeval : "classes.known.warlock.level >= 9 && What('Class Features Remember').indexOf('warlock,pact boon,pact of the blade') !== -1",
	calcChanges : {
		atkCalc : ["if (!thisWeapon[1] && (/\\bpact\\b/i).test(WeaponText)) { var pactMag = pactMag !== undefined ? 2 - pactMag : 2; output.magic += pactMag; }; ", "If I include the word 'Pact' in a weapon's name or description, it will be treated as a Pact Weapon. If it doesn't already include a magical bonus in its name, the calculation will add +2 to its To Hit and Damage."]
	}
});
AddWarlockInvocation("Tomb of Levistus (prereq: the Fiend patron)", {
	name : "Tomb of Levistus",
	description : desc([
		"As a reaction when I take damage, I can entomb myself in ice until the end of my turn",
		"I get 10 temp. HP per warlock level, which can be used to absorb the triggering damage",
		"Until the ice is gone, I have vulnerability to fire damage, 0 speed, and am incapacitated"
	]),
	source : ["UA:WnW", 5],
	prereqeval : "classes.known.warlock.subclass === 'the fiend'",
	recovery : "short rest",
	usages : 1,
	action : ["reaction", ""]
});
AddWarlockInvocation("Ultimate Pact Weapon (prereq: level 15 warlock, Pact of the Blade)", {
	name : "Ultimate Pact Weapon",
	description : desc([
		"Any pact weapon I create is a +3 magic weapon, if it isn't already a magic weapon"
	]),
	source : ["UA:WnW", 5],
	prereqeval : "classes.known.warlock.level >= 15 && What('Class Features Remember').indexOf('warlock,pact boon,pact of the blade') !== -1",
	calcChanges : {
		atkCalc : ["if (!thisWeapon[1] && (/\\bpact\\b/i).test(WeaponText)) { var pactMag = pactMag !== undefined ? 3 - pactMag : 3; output.magic += pactMag; }; ", "If I include the word 'Pact' in a weapon's name or description, it will be treated as a Pact Weapon. If it doesn't already include a magical bonus in its name, the calculation will add +3 to its To Hit and Damage."]
	}
});

// Weapons specific to Warlock Invocations
WeaponsList["claw of acamar"] = {
	regExpSearch : /^(?=.*\bclaw\b)(?=.*\bacamar\b).*$/i,
	name : "Claw of Acamar",
	source : ["UA:WnW", 3],
	ability : 1,
	type : "Martial",
	damage : [1, 8, "bludgeoning"],
	range : "Melee",
	weight : 2,
	description : "Pact weapon, reach; On hit: Reduces speed to 0, Expend spell slot for +2d8 necrotic damage per slot level",
	abilitytodamage : true
};
WeaponsList["curse bringer"] = {
	regExpSearch : /^(?=.*\bcurse)(?=.*bringer\b).*$/i,
	name : "Curse Bringer",
	source : ["UA:WnW", 4],
	ability : 1,
	type : "Martial",
	damage : [2, 6, "slashing"],
	range : "Melee",
	weight : 6,
	description : "Pact weapon, heavy, two-handed; On hit: Reduces speed to 0, Expend spell slot for +2d8 slashing damage per slot level",
	abilitytodamage : true
};
WeaponsList["mace of dispater"] = {
	regExpSearch : /^(?=.*\bmace\b)(?=.*\bdispater\b).*$/i,
	name : "Mace of Dispater",
	source : ["UA:WnW", 4],
	ability : 1,
	type : "Simple",
	damage : [1, 6, "bludgeoning"],
	range : "Melee",
	weight : 4,
	description : "Pact weapon; On hit: knock Huge or smaller prone, Expend spell slot for +2d8 force damage per slot level",
	monkweapon : true,
	abilitytodamage : true
};
WeaponsList["moon bow"] = {
	regExpSearch : /^(?=.*\bmoon)(?=.*bow\b).*$/i,
	name : "Moon Bow",
	source : ["UA:WnW", 4],
	ability : 2,
	type : "Martial",
	damage : [1, 8, "piercing"],
	range : "150/600 ft",
	weight : 2,
	description : "Pact weapon, heavy, two-handed; Adv. vs. lycanthropes; On hit, expend spell slot for +2d8 radiant damage per slot level",
	abilitytodamage : true
};
var iFileName = "UA_20170313_The-Mystic-Class.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Unearthed Arcana: The Mystic Class article to MPMB's Character Record Sheet
// WARNING: there are no published multiclassing rules for Mystic; the ones provided here are extrapolated from other classes

// Define the source
SourceList["UA:TMC"] = {
	name : "Unearthed Arcana: The Mystic Class",
	abbreviation : "UA:TMC",	
	group : "Unearthed Arcana",
	url : "http://media.wizards.com/2017/dnd/downloads/UAMystic3.pdf",
	date : "2017/03/13"
};

// Adds a new class, the Mystic, with 6 subclasses
ClassList.mystic = {
	regExpSearch : /^((?=.*(psion|mystic))|(?=.*psychic)(?=.*warrior)).*$/i,
	name : "Mystic",
	source : ["UA:TMC", 1],
	primaryAbility : "\n \u2022 Mystic: Intelligence;",
	abilitySave : 4,
	prereqs : "\n \u2022 Mystic: Intelligence 13;",
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	die : 8,
	saves : ["Wis", "Int"],
	skills : ["\n\n" + toUni("Mystic") + ": Choose two from Arcana, History, Insight, Medicine, Nature, Perception, and Religion."],
	armor : [
		[true, false, false, false]
	],
	weapons : [
		[true, false]
	],
	equipment : "Mystic starting equipment:\n \u2022 A spear -or- a mace;\n \u2022 Leather mail -or- studded leather armor;\n \u2022 A light crossbow and 20 bolts -or- any simple weapon;\n \u2022 A scholar's pack -or- an explorer's pack.\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses : ["Mystic Order", ["mystic-avatar", "mystic-awakened", "mystic-immortal", "mystic-nomad", "mystic-soul knife", "mystic-wu jen"]],
	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	spellcastingFactor : "psionic0",
	spellcastingKnown : {
		cantrips : levels.map(function (n) { return n < 3 ? 1 : n < 10 ? 2 : n < 17 ? 3 : 4; }),
		spells : levels.map(function (n) { return n < 3 ? 1 : n < 5 ? 2 : n < 7 ? 3 : n < 9 ? 4 : n < 12 ? 5 : n < 15 ? 6 : n < 18 ? 7 : 8; })
	},
	features : {
		"psi points" : {
			name : "Psi Points",
			source : ["UA:TMC", 3],
			minlevel : 1,
			description : desc([
				"I use psi points to fuel my psionic disciplines, up to my psi limit per instance"
			]),
			usages : levels.map(function (n) {
				return n < 2 ? 4 : n < 3 ? 6 : n < 4 ? 14 : n < 5 ? 17 :
				n < 6 ? 27 : n < 7 ? 32 : n < 8 ? 38 : n < 9 ? 44 : n < 10 ? 57 :
				n < 18 ? 64 : 71;
			}),
			recovery : "long rest",
			additional : levels.map(function (n) {
				return (n < 3 ? 2 : n < 5 ? 3 : n < 7 ? 5 : n < 9 ? 6 : 7) + " psi limit";
			})
		},
		"psionics" : {
			name : "Psionics",
			source : ["UA:TMC", 3],
			minlevel : 1,
			description : desc([
				"I can use psionic talents/disciplines that I know, using Intelligence as my psionic ability"
			]),
			additional : levels.map(function (n) {
				var talent = n < 3 ? "1 talent" : (n < 10 ? 2 : n < 17 ? 3 : 4) + " talents";
				var discpl = n < 3 ? "1 discipline" : (n < 5 ? 2 : n < 7 ? 3 : n < 9 ? 4 : n < 12 ? 5 : n < 15 ? 6 : n < 18 ? 7 : 8) + " disciplines";
				return talent + " \u0026 " + discpl + " known";
			})
		},
		"psychic focus" : {
			name : "Psychic Focus",
			source : ["UA:TMC", 3],
			minlevel : 1,
			description : desc([
				"As a bonus action, I can choose one of my psionic disciplines and gain its focus benefit",
				"I can only focus on one at a time; It stays until I focus on another, or I'm incapacitated"
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature1" : {
			name : "Mystic Order",
			source : ["UA:TMC", 4],
			minlevel : 1,
			description : desc([
				"Choose a Mystic Order that shapes the nature of your rage and put it in the \"Class\" field"
			])
		},
		"mystical recovery" : {
			name : "Mystical Recovery",
			source : ["UA:TMC", 4],
			minlevel : 2,
			description : desc([
				"As a bonus action after using psi points on a discipline, I can regain HP per point spent"
			]),
			action : ["bonus action", ""]
		},
		"telepathy" : {
			name : "Telepathy",
			source : ["UA:TMC", 4],
			minlevel : 2,
			description : desc([
				"I can telepathically speak to creatures I can see within 120 ft, if they know a language" // 'to' not 'with', so one-way
			])
		},
		"strength of mind" : {
			name : "Strength of Mind",
			source : ["UA:TMC", 4],
			minlevel : 4,
			description : desc([
				"After a short rest, I can change my Wisdom save proficiency to another ability score"
			])
		},
		"potent psionics" : {
			name : "Potent Psionics",
			source : ["UA:TMC", 4],
			minlevel : 8,
			description : desc([
				"Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
				"In addition, I add my Intelligence modifier to my psionic talent damage rolls"
			]),
			additional : levels.map(function (n) {
				if (n < 8) return "";
				return "+" + (n < 14 ? 1 : 2) + "d8 psychic damage";
			}),
			calcChanges : {
				atkAdd : ["if (classes.known.mystic && classes.known.mystic.level > 7 && !isSpell) { fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.mystic.level < 14 ? 1 : 2) + 'd8 psychic damage'; }; ", "Once per turn, I can have one of my weapon attacks that hit do extra psychic damage.\n - My psionic talents get my Intelligence modifier added to their damage roll."],
				atkCalc : ["if (classes.known.mystic && classes.known.mystic.level > 7 && thisWeapon[4].indexOf('mystic') !== -1 && thisWeapon[3] && SpellsList[thisWeapon[3]].level === 0) { output.extraDmg += What('Int Mod'); }; ", ""]
			}
		},
		"consumptive power" : {
			name : "Consumptive Power",
			source : ["UA:TMC", 5],
			minlevel : 10,
			description : desc([
				"Once per long rest, I can use my HP to fuel a psionic discipline instead of psi points",
				"I lose the HP; My HP max is reduced with the same until I finish my next long rest"
			]),
			usages : 1,
			recovery : "long rest"
		},
		"psionic mastery" : {
			name : "Psionic Mastery",
			source : ["UA:TMC", 5],
			minlevel : 11,
			description : desc([
				"As an action, I can gain a pool of special psi points that last until I finish a long rest",
				"I can use these, without psi limit, for disciplines that require an action or bonus action",
				"I can use either these or psi points from my normal pool for a discipline, but not both",
				"I can concentrate on all disciplines that use these special points at the same time",
				"I lose concentration if I cast a discipline requiring concentration from my normal pool"
			]),
			usages : levels.map(function (n) {
				if (n < 11) return "";
				return n < 13 ? 1 : n < 15 ? 2 : n < 17 ? 3 : 4;
			}),
			recovery : "long rest",
			additional : levels.map(function (n) {
				if (n < 11) return "";
				return "pool of " + (n < 15 ? 9 : 11) + " psi points";
			}),
			action : ["action", ""]
		},
		"psionic body" : {
			name : "Psionic Body",
			source : ["UA:TMC", 5],
			minlevel : 20,
			description : desc([
				"I no longer age and I have resistance to bludgeoning, piercing, and slashing damage",
				"I'm immune to disease, poison damage, and the poisoned condition",
				"If I die, I have a 55% chance of discorporating instead and returning 1d3 days later"
			]),
			savetxt : { immune : ["poison", "disease"] },
			dmgres : ["Bludgeoning", "Piercing", "Slashing"]
		}
	}
};
// Order of the Avatar subclass for the Mystic
ClassSubList["mystic-avatar"] = {
	regExpSearch : /^((?=.*(psion|mystic))|(?=.*psychic)(?=.*warrior))(?=.*avatar).*$/i,
	subname : "Order of the Avatar",
	source : ["UA:TMC", 5],
	features : {
		"subclassfeature1" : {
			name : "Bonus Disciplines",
			source : ["UA:TMC", 5],
			minlevel : 1,
			description : "\n   " + "I know two additional psionic disciplines, chosen from the avatar disciplines",
			spellcastingBonus : {
				name : "Bonus Disciplines",
				"class" : "mystic",
				school : ["Avatar"],
				level : [1, 9],
				times : 2
			}
		},
		"subclassfeature1.1" : {
			name : "Armor Training",
			source : ["UA:TMC", 5],
			minlevel : 1,
			description : "\n   " + "I gain proficiency with medium armor and shields.",
			armor : [false, true, false, true]
		},
		"subclassfeature3" : {
			name : "Avatar of Battle",
			source : ["UA:TMC", 5],
			minlevel : 3,
			description : "\n   " + "Allies within 30 ft of me gain +2 on initiative rolls while I'm not incapacitated"
		},
		"subclassfeature6" : {
			name : "Avatar of Healing",
			source : ["UA:TMC", 6],
			minlevel : 6,
			description : desc([
				"Allies within 30 ft of me that get healed through a psionic discipline, get extra healing",
				"They add my Intelligence modifier to the HP regained, as long as I'm not incapacitated"
			])
		},
		"subclassfeature14" : {
			name : "Avatar of Speed",
			source : ["UA:TMC", 6],
			minlevel : 14,
			description : "\n   " + "Allies within 30 ft of me can use Dash as a bonus action while I'm not incapacitated"
		}
	}
};
// Order of the Awakened subclass for the Mystic
ClassSubList["mystic-awakened"] = {
	regExpSearch : /^((?=.*(psion|mystic))|(?=.*psychic)(?=.*warrior))(?=.*awakened).*$/i,
	subname : "Order of the Awakened",
	source : ["UA:TMC", 6],
	features : {
		"subclassfeature1" : {
			name : "Bonus Disciplines",
			source : ["UA:TMC", 6],
			minlevel : 1,
			description : " [+2 awakened disciplines]",
			spellcastingBonus : {
				name : "Bonus Disciplines",
				"class" : "mystic",
				school : ["Awake"],
				level : [1, 9],
				times : 2
			}
		},
		"subclassfeature1.1" : {
			name : "Awakened Talent",
			source : ["UA:TMC", 6],
			minlevel : 1,
			description : desc([
				"I gain proficiency with two skills of my choice, taken from the following list:",
				"Animal Handling, Deception, Insight, Intimidation, Investigation, Perception, Persuasion"
			]),
			skillstxt : "\n\n" + toUni("Order of the Awakened") + ": Choose two skills from: Animal Handling, Deception, Insight, Intimidation, Investigation, Perception, and Persuasion."
		},
		"subclassfeature3" : {
			name : "Psionic Investigation",
			source : ["UA:TMC", 6],
			minlevel : 3,
			description : desc([
				"By concentrating on an object I'm holding for 10 minutes, I learn the object's history",
				"I see/hear its surroundings the previous hour and know who hold it in the last 24 hours",
				"Also, for the next 24 hours, I can use an action to locate it and see its surroundings"
			]),
			usages : 1,
			recovery : "short rest"
		},
		"subclassfeature6" : {
			name : "Psionic Surge",
			source : ["UA:TMC", 6],
			minlevel : 6,
			description : desc([
				"I can end my psychic focus to impose disadv. on a save vs. a discipline or talent I use",
				"Once I do this, I can't regain psychic focus in any discipline until I can use this again"
			]),
			usages : 1,
			recovery : "short rest"
		},
		"subclassfeature14" : {
			name : "Spectral Form",
			source : ["UA:TMC", 6],
			minlevel : 14,
			description : desc([
				"As an action, I can become ghostly and move through objects and creatures for 10 min",
				"I also have resistance to all damage and move at half speed; I can end it as an action"
			]),
			usages : 1,
			recovery : "long rest",
			action : ["action", ""]
		}
	}
};
// Order of the Immortal subclass for the Mystic
ClassSubList["mystic-immortal"] = {
	regExpSearch : /^((?=.*(psion|mystic))|(?=.*psychic)(?=.*warrior))(?=.*immortal).*$/i,
	subname : "Order of the Immortal",
	source : ["UA:TMC", 6],
	features : {
		"subclassfeature1" : {
			name : "Bonus Disciplines",
			source : ["UA:TMC", 7],
			minlevel : 1,
			description : "\n   " + "I know two additional psionic disciplines, taken from the immortal disciplines",
			spellcastingBonus : {
				name : "Bonus Disciplines",
				"class" : "mystic",
				school : ["Immor"],
				level : [1, 9],
				times : 2
			}
		},
		"subclassfeature1.1" : {
			name : "Immortal Durability",
			source : ["UA:TMC", 7],
			minlevel : 1,
			description : desc([
				"My hit point maximum increases by an amount equal to my mystic level",
				"If not wearing armor or wielding a shield, my AC is 10 + my Dex mod + my Con mod"
			]),
			calcChanges : {
				hp : "if (classes.known.mystic) {extrahp += classes.known.mystic.level; extrastring += '\\n + ' + classes.known.mystic.level + ' from Immortal Durability (Mystic)'; }; "
			}
		},
		"subclassfeature3" : {
			name : "Psionic Resilience",
			source : ["UA:TMC", 7],
			minlevel : 3,
			description : desc([
				"At the start of each turn, I gain my Intelligence modifier in temporary HP (min 0)"
			])
		},
		"subclassfeature6" : {
			name : "Surge of Health",
			source : ["UA:TMC", 7],
			minlevel : 6,
			description : desc([
				"As a reaction when I take damage, I can halve that damage, but end my psychic focus",
				"Once I do this, I can't regain psychic focus in any discipline until I can use this again"
			]),
			usages : 1,
			recovery : "short rest",
			action : ["reaction", ""]
		},
		"subclassfeature14" : {
			name : "Immortal Will",
			source : ["UA:TMC", 7],
			minlevel : 14,
			description : desc([
				"If I end my turn at 0 HP, I can use 5 psi points to regain mystic level + Con mod in HP"
			]),
			additional : levels.map(function (n) {
				if (n < 14) return "";
				return "HP: " + n + " + Constitution modifier";
			})
		}
	}
};
// Order of the Nomad subclass for the Mystic
ClassSubList["mystic-nomad"] = {
	regExpSearch : /^((?=.*(psion|mystic))|(?=.*psychic)(?=.*warrior))(?=.*nomad).*$/i,
	subname : "Order of the Nomad",
	source : ["UA:TMC", 7],
	features : {
		"subclassfeature1" : {
			name : "Bonus Disciplines",
			source : ["UA:TMC", 7],
			minlevel : 1,
			description : "\n   " + "I know two additional psionic disciplines, taken from the nomad disciplines",
			spellcastingBonus : {
				name : "Bonus Disciplines",
				"class" : "mystic",
				school : ["Nomad"],
				level : [1, 9],
				times : 2
			}
		},
		"subclassfeature1.1" : {
			name : "Breadth of Knowledge",
			source : ["UA:TMC", 7],
			minlevel : 1,
			description : desc([
				"After I finish a long rest, I gain two proficiencies in chosen language, tool, or skill",
				"These proficiencies last until I finish my next long rest"
			])
		},
		"subclassfeature3" : {
			name : "Memory of One Thousand Steps",
			source : ["UA:TMC", 7],
			minlevel : 3,
			description : desc([
				"As a reaction when hit by an attack, I can teleport away, causing the attack to miss",
				"I can teleport to any empty space that I had occupied since the start of my last turn"
			]),
			usages : 1,
			recovery : "short rest",
			action : ["reaction", ""]
		},
		"subclassfeature6" : {
			name : "Superior Teleportation",
			source : ["UA:TMC", 7],
			minlevel : 6,
			description : desc([
				"When I use a psionic discipline to teleport, I can increase its distance by up to 10 ft"
			])
		},
		"subclassfeature14" : {
			name : "Effortless Journey",
			source : ["UA:TMC", 7],
			minlevel : 14,
			description : desc([
				"Once during my turn, I can teleport instead of moving, up to my movement speed ",
				"I subtracting the distance teleported from my remaining speed"
			])
		}
	}
};
// Order of the Soul Knife subclass for the Mystic
ClassSubList["mystic-soul knife"] = {
	regExpSearch : /^(?=.*soul)(?=.*knife).*$/i,
	subname : "Order of the Soul Knife",
	source : ["UA:TMC", 7],
	fullname : "Soul Knife",
	features : {
		"subclassfeature1" : {
			name : "Martial Training",
			source : ["UA:TMC", 7],
			minlevel : 1,
			description : "\n   " + "I gain proficiency with medium armor and martial weapons",
			armor : [false, true, false, false],
			weapons : [false, true]			
		},
		"subclassfeature1.1" : {
			name : "Soul Knife",
			source : ["UA:TMC", 8],
			minlevel : 1,
			description : desc([
				"As a bonus action, I can create or dismiss my soul knives on both my fists",
				"As a bonus action, I can parry with these to get +2 AC until the start of my next turn"
			]),
			action : ["bonus action", " (create/dismiss)"],
			eval : "AddAction('bonus action', 'Soul Knife Parry', 'Soul Knife'); AddWeapon('Soul Knife');",
			removeeval : "RemoveAction('bonus action', 'Soul Knife Parry'); RemoveWeapon('Soul Knife');"
		},
		"subclassfeature3" : {
			name : "Hone the Blade",
			source : ["UA:TMC", 8],
			minlevel : 3,
			description : desc([
				"I can spend psi points to give my soul knives a bonus to attack and damage for 10 min",
				"2 psi points: +1; 5 psi points: +2; 7 psi points: +4"
			])
		},
		"subclassfeature6" : {
			name : "Consumptive Knife",
			source : ["UA:TMC", 8],
			minlevel : 6,
			description : desc([
				"Whenever I slay an enemy with a soul knife attack, I immediately regain 2 psi points"
			])
		},
		"subclassfeature14" : {
			name : "Phantom Knife",
			source : ["UA:TMC", 8],
			minlevel : 14,
			description : desc([
				"As an action, I can make one attack with my soul knife, treating the target's AC as 10"
			]),
			action : ["action", ""]
		}
	}
};
// Order of the Wu Jen subclass for the Mystic
ClassSubList["mystic-wu jen"] = {
	regExpSearch : /^(?=.*wu)(?=.*jen).*$/i,
	subname : "Order of the Wu Jen",
	source : ["UA:TMC", 8],
	fullname : "Wu Jen",
	features : {
		"subclassfeature1" : {
			name : "Bonus Disciplines",
			source : ["UA:TMC", 8],
			minlevel : 1,
			description : " [+2 awakened disciplines]",
			spellcastingBonus : {
				name : "Bonus Disciplines",
				"class" : "mystic",
				school : ["Wu Jen"],
				level : [1, 9],
				times : 2
			}
		},
		"subclassfeature1.1" : {
			name : "Hermit's Study",
			source : ["UA:TMC", 8],
			minlevel : 1,
			description : desc([
				"I gain proficiency with two skills of my choice, taken from the following list:",
				"Animal Handling|Arcana|History|Insight|Medicine|Nature|Perception|Religion|Survival"
			]),
			skillstxt : "\n\n" + toUni("Order of the Awakened") + ": Choose two skills from: Animal Handling, Arcana, History, Insight, Medicine, Nature, Perception, Religion, and Survival."
		},
		"subclassfeature3" : {
			name : "Elemental Attunement",
			source : ["UA:TMC", 8],
			minlevel : 3,
			description : desc([
				"If a target's resistance reduces damage of one of my psionic disciplines, I can bypass it",
				"With 1 extra psi point for the discipline (psi limit permitting), the resistance is ignored"
			])
		},
		"subclassfeature6" : {
			name : "Arcane Dabbler",
			source : ["UA:TMC", 8],
			minlevel : 6,
			description : desc([
				"I know 3 wizard spells (1-3 level); When I gain a mystic level, I can swap one of these",
				"As a bonus action, I can use psi points to make spell slots; Last until my next long rest",
				"2 PP: 1st-level; 3 PP: 2nd-level; 5 PP: 3rd-level; 6 PP: 4th-level; 7 PP: 5th-level"
			]),
			spellcastingBonus : {
				name : "Arcane Dabbler",
				"class" : "wizard",
				level : [1, 3],
				times : 3
			}
		},
		"subclassfeature14" : {
			name : "Elemental Mastery",
			source : ["UA:TMC", 8],
			minlevel : 14,
			description : desc([
				"As a reaction when I take damage to which I have resistance, I can ignore that damage",
				"I gain immunity to that damage type until the start of my next turn"
			])
		}
	}
};

// The Psionic Talents for the Mystic (with contributions by rabidknave)
PsionicsList["beacon"] = {
	name : "Beacon",
	classes : ["mystic"],
	source : ["UA:TMC", 27],
	psionic : true,
	level : 0,
	time : "1 bns",
	range : "Self",
	duration : "1 h (D)",
	description : "Your body sheds bright light 20-ft rad and dim light 20-ft, in chosen color; dismiss as a bonus action",
	descriptionFull : "As a bonus action, you cause bright light to radiate from your body in a 20-foot radius and dim light for an additional 20 feet. The light can be colored as you like. The light lasts for 1 hour, and you can extinguish it earlier as a bonus action."
};
PsionicsList["blade meld"] = {
	name : "Blade Meld",
	classes : ["mystic"],
	source : ["UA:TMC", 27],
	psionic : true,
	level : 0,
	time : "1 bns",
	range : "Self",
	duration : "1 min",
	description : "One-handed melee weapon you're holding merges with hand; it can't be removed for the duration",
	descriptionFull : "As a bonus action, a one-handed melee weapon you hold becomes one with your hand. For the next minute, you can't let go of the weapon nor can it be forced from your grasp."
};
PsionicsList["blind spot"] = {
	name : "Blind Spot",
	classes : ["mystic"],
	source : ["UA:TMC", 27],
	psionic : true,
	level : 0,
	time : "1 a",
	range : "120 ft",
	duration : "Next turn end",
	save : "Wis",
	description : "1 creature save or treats you as invisible until the end of your next turn",
	descriptionFull : "As an action, you erase your image from the mind of one creature you can see within 120 feet of you; the target must succeed on a Wisdom saving throw, or you are invisible to it until the end of your next turn."
};
PsionicsList["delusion"] = {
	name : "Delusion",
	classes : ["mystic"],
	source : ["UA:TMC", 27],
	psionic : true,
	level : 0,
	time : "1 a",
	range : "60 ft",
	duration : "1 min",
	description : "1 crea either hears a sound (whisper-scream), or sees up to 5-ft cube object that disappears on touch",
	descriptionFull : "As an action, you plant a false belief in the mind of one creature that you can see within 60 feet of you. You can create a sound or an image. Only the target of this talent perceives the sound or image you create." + "\n   " + "If you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else's voice, a creature's roar, a musical instrument, or any other sound you pick. It lasts for 1 minute." + "\n   " + "If you create an object, it must fit within a 5-foot cube and can't move or be reflective. The image can't create any effect that influences a sense other than sight. The image lasts for 1 minute, and it disappears if the creature touches it."
};
PsionicsList["energy beam"] = {
	name : "Energy Beam",
	classes : ["mystic"],
	source : ["UA:TMC", 27],
	psionic : true,
	level : 0,
	time : "1 a",
	range : "90 ft",
	duration : "Instantaneous",
	save : "Dex",
	description : "1 crea save or 1d8 Acid, Cold, Fire, Lightning, or Thunder dmg; +1d8 at CL 5, 11, and 17",
	descriptionFull : "As an action, you target one creature you can see within 90 feet of you. The target must succeed on a Dexterity saving throw or take 1d8 acid, cold, fire, lightning, or thunder damage (your choice)." + "\n   " + "The talent's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)"
};
PsionicsList["light step"] = {
	name : "Light Step",
	classes : ["mystic"],
	source : ["UA:TMC", 27],
	psionic : true,
	level : 0,
	time : "1 bns",
	range : "Self",
	duration : "This turn end",
	description : "Your walking speed increases by 10 ft; standing up costs 0 movement, once",
	descriptionFull : "As a bonus action, you alter your density and weight to improve your mobility. For the rest of your turn, your walking speed increases by 10 feet, and the first time you stand up this turn, you do so without expending any of your movement if your speed is greater than 0."
};
PsionicsList["mind meld"] = {
	name : "Mind Meld",
	classes : ["mystic"],
	source : ["UA:TMC", 27],
	psionic : true,
	level : 0,
	time : "1 bns",
	range : "120 ft",
	duration : "This turn end",
	description : "You communicate telepathically with 1 willing crea (int > 1) and gain access to 1 memory of theirs",
	descriptionFull : "As a bonus action, you can communicate telepathically with one willing creature you can see within 120 feet of you. The target must have an Intelligence of at least 2, otherwise this talent fails and the action is wasted." + "\n   " + "This communication can occur until the end of the current turn. You don't need to share a language with the target for it to understand your telepathic utterances, and it understands you even if it lacks a language. You also gain access to one memory of the target's choice, gaining perfect recall of one thing it saw or did."
};
PsionicsList["mind slam"] = {
	name : "Mind Slam",
	classes : ["mystic"],
	source : ["UA:TMC", 28],
	psionic : true,
	level : 0,
	time : "1 a",
	range : "60 ft",
	duration : "Instantaneous",
	save : "Con",
	description : "1 crea save or 1d6 Force dmg, and knocked prone if Large or smaller; +1d6 at CL 5, 11, and 17",
	descriptionFull : "As an action, you target one creature you can see within 60 feet of you. The target must succeed on a Constitution saving throw or take 1d6 force damage. If it takes any of this damage and is Large or smaller, it is knocked prone." + "\n   " + "The talent's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)"
};
PsionicsList["mind thrust"] = {
	name : "Mind Thrust",
	classes : ["mystic"],
	source : ["UA:TMC", 28],
	psionic : true,
	level : 0,
	time : "1 a",
	range : "120 ft",
	duration : "Instantaneous",
	save : "Int",
	description : "1 crea save or 1d10 Psychic dmg; +1d10 at CL 5, 11, and 17",
	descriptionFull : "As an action, you target one creature you can see within 120 feet of you. The target must succeed on an Intelligence saving throw or take 1d10 psychic damage." + "\n   " + "The talent's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10)."
};
PsionicsList["mystic charm"] = {
	name : "Mystic Charm",
	classes : ["mystic"],
	source : ["UA:TMC", 28],
	psionic : true,
	level : 0,
	time : "1 a",
	range : "120 ft",
	duration : "Next turn end",
	save : "Cha",
	description : "1 humanoid save or charmed until end of your next turn",
	descriptionFull : "As an action, you beguile one humanoid you can see within 120 feet of you. The target must succeed on a Charisma saving throw or be charmed by you until the end of your next turn."
};
PsionicsList["mystic hand"] = {
	name : "Mystic Hand",
	classes : ["mystic"],
	source : ["UA:TMC", 28],
	psionic : true,
	level : 0,
	time : "1 a",
	range : "30 ft",
	duration : "This turn end",
	description : "Move 1 unattended object (up to 10 lbs) up to 30 ft, or manipulate an object",
	descriptionFull : "You can use your action to manipulate or move one object within 30 feet of you. The object can't weigh more than 10 pounds, and you can't affect an object being worn or carried by another creature. If the object is loose, you can move it up to 30 feet in any direction." + "\n   " + "This talent allows you to open an unlocked door, pour out a beer stein, and so on." + "\n   " + "The object falls to the ground at the end of your turn if you leave it suspended in midair."
};
PsionicsList["psychic hammer"] = {
	name : "Psychic Hammer",
	classes : ["mystic"],
	source : ["UA:TMC", 28],
	psionic : true,
	level : 0,
	time : "1 a",
	range : "120 ft",
	duration : "Instantaneous",
	save : "Str",
	description : "1 crea save or 1d6 Force dmg and moved up to 10 ft in chosen direction; +1d6 at CL 5, 11, and 17",
	descriptionFull : "As an action, you try to grasp one creature you can see within 120 feet of you, with a hand crafted from telekinetic energy. The target must succeed on a Strength saving throw or take 1d6 force damage. If it takes any of this damage and is Large or smaller, you can move it up to 10 feet in a straight line in a direction of your choice. You can't lift the target off the ground unless it is already airborne or underwater." + "\n   " + "The talent's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
};

// Psionic Disciplines for the Mystic
//the adaptive body discipline
PsionicsList["adaptive body"] = {
	name : "Adaptive Body",
	classes : ["mystic"],
	source : ["UA:TMC", 10],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "1 bns",
	range : "Self",
	components : "Psi-F.",
	duration : "While focused",
	description : "You don't need to eat, breathe, or sleep; You can long rest with 8 hours of light activity, without sleep",
	descriptionFull : "You can alter your body to match your surroundings, allowing you to withstand punishing environments. With greater psi energy, you can extend this protection to others." + PsychicFocus + "While focused on this discipline, you don't need to eat, breathe, or sleep. To gain the benefits of a long rest, you can spend 8 hours engaged in light activity, rather than sleeping during any of it.",
	firstCol : "checkbox",
	dependencies : ["ab1-environmental adaptation", "ab2-adaptive shield", "ab3-energy adaptation", "ab4-energy immunity"]
};
PsionicsList["ab1-environmental adaptation"] = {
	name : "Environmental Adaptation",
	nameShort : "Environmental Adapt.",
	source : ["UA:TMC", 10],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "1 a",
	range : "Touch",
	duration : "1 h",
	description : "1 creature ignores the effects of extreme heat or cold (but not Fire or Cold damage)",
	descriptionFull : "As an action, you or a creature you touch ignores the effects of extreme heat or cold (but not cold or fire damage) for the next hour.",
	firstCol : 2
};
PsionicsList["ab2-adaptive shield"] = {
	name : "Adaptive Shield",
	source : ["UA:TMC", 10],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "1 rea",
	range : "Self",
	duration : "Next turn end",
	description : "If taking Acid, Cold, Fire, Lightning, or Thunder damage, gain resistance to it until end of next turn",
	descriptionFull : "When you take acid, cold, fire, lightning, or thunder damage, you can use your reaction to gain resistance to damage of that type -including the triggering damage- until the end of your next turn.",
	firstCol : 3
};
PsionicsList["ab3-energy adaptation"] = {
	name : "Energy Adaptation",
	source : ["UA:TMC", 10],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "1 a",
	range : "Touch",
	duration : "Conc, 1 h",
	description : "1 creature gains resistance to either Acid, Cold, Fire, Lightning, or Thunder damage",
	descriptionFull : "As an action, you can touch one creature and give it resistance to acid, cold, fire, lightning, or thunder damage (your choice), which lasts until your concentration ends.",
	firstCol : 5
};
PsionicsList["ab4-energy immunity"] = {
	name : "Energy Immunity",
	source : ["UA:TMC", 10],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "1 a",
	range : "Touch",
	duration : "Conc, 1 h",
	description : "1 creature gains immunity to either Acid, Cold, Fire, Lightning, or Thunder damage",
	descriptionFull : "As an action, you can touch one creature and give it immunity to acid, cold, fire, lightning, or thunder damage (your choice), which lasts until your concentration ends.",
	firstCol : 7
};
//the aura sight discipline (contributed by Justin W.)
PsionicsList["aura sight"] = {
	name : "Aura Sight",
	classes : ["mystic"],
	source : ["UA:TMC", 10],
	psionic : true,
	level : 1,
	school : "Awake",
	time : "1 bns",
	range : "Self",
	components : "Psi-F.",
	duration : "While focused",
	description : "You gain advantage on Wisdom (Insight) checks",
	descriptionFull : "You refocus your sight to see the energy that surrounds all creatures. You perceive auras, energy signatures that can reveal key elements of a creature's nature." + PsychicFocus + "While focused on this discipline, you have advantage on Wisdom (Insight) checks.",
	firstCol : "checkbox",
	dependencies : ["as1-asses foe", "as2-read moods", "as3-view aura", "as4-perceive the unseen"]
};
PsionicsList["as1-asses foe"] = {
	name : "Asses Foe",
	source : ["UA:TMC", 11],
	psionic : true,
	level : 1,
	school : "Awake",
	time : "1 bns",
	range : "Sight",
	duration : "Instantaneous",
	description : "Learn one creature's current HP total and all its immunities, resistances, and vulnerabilities",
	descriptionFull : "As a bonus action, you analyze the aura of one creature you see. You learn its current hit point total and all its immunities, resistances, and vulnerabilities.",
	firstCol : 2
};
PsionicsList["as2-read moods"] = {
	name : "Read Moods",
	source : ["UA:TMC", 11],
	psionic : true,
	level : 1,
	school : "Awake",
	time : "1 bns",
	range : "Sight",
	duration : "Instantaneous",
	description : "Learn an one-word summary of the emotional state of up to 6 crea",
	descriptionFull : "As a bonus action, you learn a one-word summary of the emotional state of up to six creatures you can see, such as happy, confused, afraid, or violent.",
	firstCol : 2
};
PsionicsList["as3-view aura"] = {
	name : "View Aura",
	source : ["UA:TMC", 11],
	psionic : true,
	level : 1,
	school : "Awake",
	time : "1 a",
	range : "Sight",
	duration : "Conc, 1 h",
	description : "Monitor 1 crea: current HP, if magic effects it, basic emotional state; adv. on Insight/Cha checks vs. it",
	descriptionFull : "As an action, you study one creature's aura. Until your concentration ends, while you can see the target, you learn if it's under the effect of any magical or psionic effects, its current hit point total, and its basic emotional state. While this effect lasts, you have advantage on Wisdom (Insight) and Charisma checks you make against it.",
	firstCol : 3
};
PsionicsList["as4-perceive the unseen"] = {
	name : "Perceive the Unseen",
	source : ["UA:TMC", 11],
	psionic : true,
	level : 1,
	school : "Awake",
	time : "1 bns",
	range : "Sight",
	duration : "Conc, 1 min",
	description : "See all creatures, including hidden and invisible ones, regardless of lighting conditions",
	descriptionFull : "As a bonus action, you gain the ability to see auras even of invisible or hidden creatures. Until your concentration ends, you can see all creatures, including hidden and invisible ones, regardless of lighting conditions.",
	firstCol : 5
};
//the bestial form discipline (contributed by rabidknave)
PsionicsList["bestial form"] = {
	name : "Bestial Form",
	classes : ["mystic"],
	source : ["UA:TMC", 11],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "1 bns",
	range : "Self",
	components : "Psi-F.",
	duration : "While focused",
	description : "You gain advantage on Wisdom (Animal Handling) checks",
	descriptionFull : "You transform your body, gaining traits of different beasts." + PsychicFocus + "While focused on this discipline, you have advantage on Wisdom (Animal Handling) checks.",
	firstCol : "checkbox",
	dependencies : ["bf1-bestial claws", "bf2-bestial transformation", "bf3-bt - amphibious", "bf4-bt - climbing", "bf5-bt - flight", "bf6-bt - keen senses", "bf7-bt - perfect senses", "bf8-bt - swimming", "bf9-bt - tough hide"]
};
PsionicsList["bf1-bestial claws"] = {
	name : "Bestial Claws",
	source : ["UA:TMC", 11],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "1 a",
	range : "5 ft",
	duration : "Instantaneous",
	description : "Melee weapon attack with manifested claw, dealing 1d10/PP Slashing dmg",
	descriptionFull : "You manifest long claws for an instant and make a melee weapon attack against one creature within 5 feet of you. On a hit, this attack deals 1d10 slashing damage per psi point spent.",
	firstCol : "1-7"
};
PsionicsList["bf2-bestial transformation"] = {
	name : "Bestial Transformation",
	source : ["UA:TMC", 11],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "1 bns",
	range : "Self",
	duration : "1 hr (D)",
	description : "Alter physique to gain one or more of following effects; sum PP cost for a single use; end with bns a",
	descriptionFull : "As a bonus action, you alter your physical form to gain different characteristics. When you use this ability, you can choose one or more of the following effects. Each effect has its own psi point cost. Add them together to determine the total cost. This transformation lasts for 1 hour, until you die, or until you end it as a bonus action.",
	firstCol : "2-7"
};
PsionicsList["bf3-bt - amphibious"] = {
	name : " - Amphibious",
	source : ["UA:TMC", 11],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "",
	range : "Self",
	duration : "1 hr (D)",
	description : "You are able to breathe air and water by gaining gills",
	descriptionFull : "You gain gills; you can breathe air and water",
	firstCol : 2
};
PsionicsList["bf4-bt - climbing"] = {
	name : " - Climbing",
	source : ["UA:TMC", 11],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "",
	range : "Self",
	duration : "1 hr (D)",
	description : "You gain climbing speed equal to your walking speed by growing tiny hooked claws",
	descriptionFull : "You grow tiny hooked claws that give you gain a climbing speed equal to your walking speed.",
	firstCol : 2
};
PsionicsList["bf5-bt - flight"] = {
	name : " - Flight",
	source : ["UA:TMC", 11],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "",
	range : "Self",
	duration : "1 hr (D)",
	description : "You gain flying speed equal to your walking speed by sprouting wings",
	descriptionFull : "Wings sprout from your back. You gain a flying speed equal to your walking speed.",
	firstCol : 5
};
PsionicsList["bf6-bt - keen senses"] = {
	name : " - Keen Senses",
	source : ["UA:TMC", 11],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "",
	range : "Self",
	duration : "1 hr (D)",
	description : "You gain advantage on Wisdom (Perception) checks through more sensitive eyes and ears",
	descriptionFull : "Your eyes and ears become more sensitive. You gain advantage on Wisdom (Perception) checks.",
	firstCol : 2
};
PsionicsList["bf7-bt - perfect senses"] = {
	name : " - Perfect Senses",
	source : ["UA:TMC", 11],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "",
	range : "Self",
	duration : "1 hr (D)",
	description : "You see invisible creatures/objects within 10 ft, even when blinded, through smell",
	descriptionFull : "You gain a keen sense of smell and an instinct to detect prey. You can see invisible creatures and objects within 10 feet of you, even if you are blinded.",
	firstCol : 3
};
PsionicsList["bf8-bt - swimming"] = {
	name : " - Swimming",
	source : ["UA:TMC", 11],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "",
	range : "Self",
	duration : "1 hr (D)",
	description : "You gain swimming speed equal to your walking speed by growing fins and webbed feet/hands",
	descriptionFull : "You gain fins and webbing between your fingers and toes; you gain a swimming speed equal to your walking speed.",
	firstCol : 2
};
PsionicsList["bf9-bt - tough hide"] = {
	name : " - Tough Hide",
	source : ["UA:TMC", 11],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "",
	range : "Self",
	duration : "1 hr (D)",
	description : "You gain +2 bonus to AC through thicker skin",
	descriptionFull : "Your skin becomes as tough as leather; you gain a +2 bonus to AC.",
	firstCol : 2
};
//the brute force discipline (contributed by rabidknave)
PsionicsList["brute force"] = {
	name : "Brute Force",
	classes : ["mystic"],
	source : ["UA:TMC", 11],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "1 bns",
	range : "Self",
	components : "Psi-F.",
	duration : "While focused",
	description : "You gain advantage on Strength (Athletics) checks",
	descriptionFull : "You augment your natural strength with psionic energy, granting you the ability to achieve incredible feats of might." + PsychicFocus + "While focused on this discipline, you have advantage on Strength (Athletics) checks.",
	firstCol : "checkbox",
	dependencies : ["bf1-brute strike", "bf2-knock back", "bf3-mighty leap", "bf4-feat of strength"]
};
PsionicsList["bf1-brute strike"] = {
	name : "Brute Strike",
	source : ["UA:TMC", 11],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "1 bns",
	range : "Self",
	duration : "This turn end",
	description : "Your next melee attack during this turn deals +1d6/PP damage, of the same type as the melee attack",
	descriptionFull : "As a bonus action, you gain a bonus to your next damage roll against a target you hit with a melee attack during the current turn. The bonus equals +1d6 per psi point spent, and the bonus damage is the same type as the attack. If the attack has more than one damage type, you choose which one to use for the bonus damage.",
	firstCol : "1-7"
};
PsionicsList["bf2-knock back"] = {
	name : "Knock Back",
	source : ["UA:TMC", 11],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "1 rea",
	range : "Self",
	duration : "Instantaneous",
	save : "Str",
	description : "Use after melee atk hit; crea hit save or move 10 ft/PP away; if it then hits obj, 1d6/PP Bludg. dmg", //added the damage
	descriptionFull : "When you hit a target with a melee attack, you can activate this ability as a reaction. The target must succeed on a Strength saving throw or be knocked 10 feet away from you per psi point spent. The target moves in a straight line. If it hits an object, this movement immediately ends and the target takes 1d6 bludgeoning damage per psi point spent.",
	firstCol : "1-7"
};
PsionicsList["bf3-mighty leap"] = {
	name : "Mighty Leap",
	source : ["UA:TMC", 11],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "Move",
	range : "Self",
	duration : "Instantaneous",
	description : "As part of your movement, jump 20 ft/PP in any direction",
	descriptionFull : "As part of your movement, you jump in any direction up to 20 feet per psi point spent.",
	firstCol : "1-7"
};
PsionicsList["bf4-feat of strength"] = {
	name : "Feat of Strength",
	source : ["UA:TMC", 11],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "1 bns",
	range : "Self",
	duration : "Next turn end",
	description : "You gain +5 bonus to Strength checks until the end of next turn",
	descriptionFull : "As a bonus action, you gain a +5 bonus to Strength checks until the end of your next turn.",
	firstCol : 2
};
//the celerity discipline (contributed by rabidknave)
PsionicsList["celerity"] = {
	name : "Celerity",
	classes : ["mystic"],
	source : ["UA:TMC", 12],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "1 bns",
	range : "Self",
	components : "Psi-F.",
	duration : "While focused",
	description : "Your walking speed increases by 10 ft",
	descriptionFull : "You channel psionic power into your body, honing your reflexes and agility to an incredible degree. The world seems to slow down while you continue to move as normal." + PsychicFocus + "While focused on this discipline, your walking speed increases by 10 feet.",
	firstCol : "checkbox",
	dependencies : ["c1-rapid step", "c2-agile defense", "c3-blur of motion", "c4-surge of speed", "c5-surge of action"]
};
PsionicsList["c1-rapid step"] = {
	name : "Rapid Step",
	source : ["UA:TMC", 12],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "1 bns",
	range : "Self",
	duration : "This turn end",
	description : "Your walking, swim, and climb speeds increases by 10 ft/PP; doesn't grant new movement modes",
	descriptionFull : "As a bonus action, you increase your walking speed by 10 feet per psi point spent until the end of the current turn. If you have a climbing or swimming speed, this increase applies to that speed as well.",
	firstCol : "1-7"
};
PsionicsList["c2-agile defense"] = {
	name : "Agile Defense",
	source : ["UA:TMC", 12],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "1 bns",
	range : "Self",
	duration : "Instantaneous",
	description : "You can take the Dodge action now, as part of using this power",
	descriptionFull : "As a bonus action, you take the Dodge action.",
	firstCol : 2
};
PsionicsList["c3-blur of motion"] = {
	name : "Blur of Motion",
	source : ["UA:TMC", 12],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "1 a",
	range : "Self",
	duration : "This turn end",
	description : "Your invisible while moving during the current turn",
	descriptionFull : "As an action, you cause yourself to be invisible during any of your movement during the current turn.",
	firstCol : 2
};
PsionicsList["c4-surge of speed"] = {
	name : "Surge of Speed",
	source : ["UA:TMC", 12],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "1 bns",
	range : "Self",
	duration : "This turn end",
	description : "You don't provoke opportunity attacks and gain a climbing speed equal to your walking speed",
	descriptionFull : "As a bonus action, you gain two benefits until the end of the current turn: you don't provoke opportunity attacks, and you have a climbing speed equal to your walking speed.",
	firstCol : 2
};
PsionicsList["c5-surge of action"] = {
	name : "Surge of Action",
	source : ["UA:TMC", 12],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "1 bns",
	range : "Self",
	duration : "Instantaneous",
	description : "You can take either the Dash action or make one weapon attack now, as part of using this power",
	descriptionFull : "As a bonus action, you can Dash or make one weapon attack.",
	firstCol : 5
};
//the corrosive metabolism discipline (contributed by rabidknave)
PsionicsList["corrosive metabolism"] = {
	name : "Corrosive Metabolism",
	classes : ["mystic"],
	source : ["UA:TMC", 11],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "1 bns",
	range : "Self",
	components : "Psi-F.",
	duration : "While focused",
	description : "You gain resistance to Acid and Poison damage",
	descriptionFull : "Your control over your body allows you to deliver acid or poison attacks." + PsychicFocus + "While focused on this discipline, you have resistance to acid and poison damage.",
	firstCol : "checkbox",
	dependencies : ["cm1-corrosive touch", "cm2-venom strike", "cm3-acid spray", "cm4-breath of the black dragon", "cm5-breath of the green dragon"]
};
PsionicsList["cm1-corrosive touch"] = {
	name : "Corrosive Touch",
	source : ["UA:TMC", 12],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "1 a",
	range : "Touch", //use "Touch" instead of "5 ft" when its about reach
	duration : "Instantaneous",
	save : "Dex",
	description : "1 crea 1d10/PP Acid damage; save halves", // use "; save halves" for this kind of situations
	descriptionFull : "As an action, you deliver a touch of acid to one creature within your reach. The target must make a Dexterity saving throw, taking 1d10 acid damage per psi point spent on a failed save, or half as much damage on a successful one.",
	firstCol : "1-7"
};
PsionicsList["cm2-venom strike"] = {
	name : "Venom Strike",
	source : ["UA:TMC", 12],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "1 a",
	range : "30 ft",
	duration : "Instantaneous",
	save : "Con",
	description : "1 crea 1d6/PP Poison damage; save halves; if save failed, poisoned until end of your next turn",
	descriptionFull : "As an action, you create a poison spray that targets one creature you can see within 30 feet of you. The target must make a Constitution saving throw. On a failed save, it takes 1d6 poison damage per psi point spent and is poisoned until the end of your next turn. On a successful save, the target takes half as much damage and isn't poisoned.",
	firstCol : "1-7"
};
PsionicsList["cm3-acid spray"] = {
	name : "Acid Spray",
	source : ["UA:TMC", 12],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "1 rea",
	range : "5 ft",
	duration : "Instantaneous",
	description : "Use after you take Piercing or Slashing damage; all creatures in range take 2d6 Acid damage",
	descriptionFull : "As a reaction when you take piercing or slashing damage, you cause acid to spray from your wound; each creature within 5 feet of you takes 2d6 acid damage.",
	firstCol : 2
};
PsionicsList["cm4-breath of the black dragon"] = {
	name : "Breath of the Black Dragon",
	nameShort : "Breath o/t Black Dragon",
	source : ["UA:TMC", 12],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "1 a",
	range : "60-ft line",
	duration : "Instantaneous",
	save : "Con",
	description : "60-ft long 5-ft wide line all creatures 6d6(+1d6/extra PP) Acid dmg; save halves",
	descriptionFull : "You exhale a wave of acid in a 60-foot line that is 5 feet wide. Each creature in the line must make a Constitution saving throw, taking 6d6 acid damage on a failed save, or half as much on a successful one. You can increase the damage by 1d6 per additional psi point spent on it.",
	firstCol : "5-7"
};
PsionicsList["cm5-breath of the green dragon"] = {
	name : "Breath of the Green Dragon",
	nameShort : "Breath o/t Green Dragon",
	source : ["UA:TMC", 12],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "1 a",
	range : "90-ft cone",
	duration : "Instantaneous",
	save : "Con",
	description : "All creatures 10d6 poison damage; save halves",
	descriptionFull : "You exhale a cloud of poison in a 90-foot cone. Each creature in the line must make a Constitution saving throw, taking 10d6 poison damage on a failed save, or half as much damage on a successful one.",
	firstCol : 7
};
//the crown of despair discipline (contributed by rabidknave)
PsionicsList["crown of despair"] = {
	name : "Crown of Despair",
	classes : ["mystic"],
	source : ["UA:TMC", 12],
	psionic : true,
	level : 1,
	school : "Avatar",
	time : "1 bns",
	range : "5-ft rad",
	components : "Psi-F.",
	duration : "While focused",
	description : "You gain advantage on Charisma (Intimidation) checks",
	descriptionFull : "You have learned to harvest seeds of despair in a creature's psyche, wracking it with self-doubt and inaction." + PsychicFocus + "While focused on this discipline, you have advantage on Charisma (Intimidation) checks.",
	firstCol : "checkbox",
	dependencies : ["cd1-crowned in sorrow", "cd2-call to inaction", "cd3-visions of despair", "cd4-dolorous mind"]
};
PsionicsList["cd1-crowned in sorrow"] = {
	name : "Crowned in Sorrow",
	source : ["UA:TMC", 12],
	psionic : true,
	level : 1,
	school : "Avatar",
	time : "1 a",
	range : "60 ft",
	duration : "Next turn start",
	save : "Cha",
	description : "1 crea 1d8/PP Psychic dmg and can't take reactions; save halves damage and normal reactions",
	descriptionFull : "As an action, one creature you can see within 60 feet of you must make a Charisma saving throw. On a failed save, it takes 1d8 psychic damage per psi point spent, and it can't take reactions until the start of its next turn. On a successful save, it takes half as much damage.",
	firstCol : "1-7"
};
PsionicsList["cd2-call to inaction"] = {
	name : "Call to Inaction",
	source : ["UA:TMC", 12],
	psionic : true,
	level : 1,
	school : "Avatar",
	time : "1 min",
	range : "Self",
	duration : "Conc, 10 min",
	save : "Wis",
	description : "After 1 min conversation, 1 crea save or incapacitated; ends if it or its ally is attacked (charm effect)",
	descriptionFull : "If you spend 1 minute conversing with a creature, you can attempt to seed it with overwhelming ennui. At the end of the minute, you can use an action to force the creature to make a Wisdom saving throw. The save automatically succeeds if the target is immune to being charmed. On a failed save, it sits and is incapacitated until your concentration ends. This effect immediately ends if the target or any ally it can see is attacked or takes damage. On a successful save, the creature is unaffected and has no inkling of your attempt to bend its will.",
	firstCol : 2
};
PsionicsList["cd3-visions of despair"] = {
	name : "Visions of Despair",
	source : ["UA:TMC", 12],
	psionic : true,
	level : 1,
	school : "Avatar",
	time : "1 a",
	range : "60 ft",
	duration : "1 rnd",
	save : "Cha",
	description : "1 crea 3d6(+1d6/extra PP) Psychic dmg and speed reduced to 0; save halves and no speed reduction",
	descriptionFull : "As an action, you force one creature you can see within 60 feet of you to make a Charisma saving throw. On a failed save, it takes 3d6 psychic damage, and its speed is reduced to 0 until the end of its next turn. On a successful save, it takes half as much damage. You can increase the damage by 1d6 per additional psi point spent on it.",
	firstCol : "3-7"
};
PsionicsList["cd4-dolorous mind"] = {
	name : "Dolorous Mind",
	source : ["UA:TMC", 12],
	psionic : true,
	level : 1,
	school : "Avatar",
	time : "1 a",
	range : "60 ft",
	duration : "Conc, 1 min",
	save : "Cha",
	description : "1 crea save or incapacitated and speed 0; save at end of each turn",
	descriptionFull : "As an action, you choose one creature you can see within 60 feet of you. It must succeed on a Charisma saving throw, or it is incapacitated and has a speed of 0 until your concentration ends. It can repeat this saving throw at the end of each of its turns, ending the effect on itself on a success.",
	firstCol : 5
};
//the crown of disgust discipline
PsionicsList["crown of disgust"] = {
	name : "Crown of Disgust",
	classes : ["mystic"],
	source : ["UA:TMC", 13],
	psionic : true,
	level : 1,
	school : "Avatar",
	time : "1 bns",
	range : "5-ft rad",
	components : "Psi-F.",
	duration : "While focused",
	description : "5-ft rad around you is difficult terrain for creatures that aren't immune to being frightened",
	descriptionFull : "You cause a creature to be flooded with emotions of disgust." + PsychicFocus + "While you are focused on this discipline, the area in a 5-foot radius around you is difficult terrain for any enemy that isn't immune to being frightened.",
	firstCol : "checkbox",
	dependencies : ["cd1-eye of horror", "cd2-wall of repulsion", "cd3-visions of disgust", "cd4-world of horror"]
};
PsionicsList["cd1-eye of horror"] = {
	name : "Eye of Horror",
	source : ["UA:TMC", 13],
	psionic : true,
	level : 1,
	school : "Avatar",
	time : "1 a",
	range : "60 ft",
	duration : "Next turn end",
	save : "Cha",
	description : "1 crea save or 1d6/PP Psychic damage and can't move closer; save halves and no movement restriction",
	descriptionFull : "As an action, choose one creature you can see within 60 feet of you. The target must make a Charisma saving throw. On a failed save, it takes 1d6 psychic damage per psi point spent and can't move closer to you until the end of its next turn. On a successful save, it takes half as much damage.",
	firstCol : "1-7"
};
PsionicsList["cd2-wall of repulsion"] = {
	name : "Wall of Repulsion",
	source : ["UA:TMC", 13],
	psionic : true,
	level : 1,
	school : "Avatar",
	time : "1 a",
	range : "60 ft",
	duration : "Conc, 10 min",
	save : "Wis",
	description : "Up to 30\u00D71\u00D710 ft (l\u00D7w\u00D7h) invisible wall of energy; save to move through it, even for unwilling move",
	description : "Up to 9\u00D70,3\u00D73 m (l\u00D7w\u00D7h) invisible wall of energy; save to move through it, even for unwilling move",
	descriptionFull : "As an action, you create an invisible, insubstantial wall of energy within 60 feet of you that is up to 30 feet long, 10 feet high, and 1 foot thick. The wall lasts until your concentration ends. Any creature attempting to move through it must make a Wisdom saving throw. On a failed save, a creature can't move through the wall until the start of its next turn. On a successful save, the creature can pass through it. A creature must make this save whenever it attempts to pass through the wall, whether willingly or unwillingly.",
	firstCol : 3
};
PsionicsList["cd3-visions of disgust"] = {
	name : "Visions of Disgust",
	source : ["UA:TMC", 13],
	psionic : true,
	level : 1,
	school : "Avatar",
	time : "1 a",
	range : "60 ft",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "1 crea save or 5d6 Psychic dmg (half on save) & 1d6 Psychic dmg per crea within 5 ft at its turn end",
	descriptionFull : "You cause a creature to regard all other beings as horrid, alien entities. As an action, choose one creature you can see within 60 feet of you. The target must make a Wisdom saving throw. On a failed save, it takes 5d6 psychic damage, and until your concentration ends, it takes 1d6 psychic damage per creature within 5 feet of it at the end of each of its turns. On a successful save, the target takes only half the initial damage and suffers none of the other effects.",
	firstCol : 5
};
PsionicsList["cd4-world of horror"] = {
	name : "World of Horror",
	source : ["UA:TMC", 13],
	psionic : true,
	level : 1,
	school : "Avatar",
	time : "1 a",
	range : "60 ft",
	duration : "Conc, 1 min",
	save : "Cha",
	description : "6 crea 8d6 Psychic dmg, frightened, \u0026 do only melee atks; save halves, no other effects; save each rnd",
	descriptionFull : "As an action, choose up to six creatures within 60 feet of you. Each target must make a Charisma saving throw. On a failed save, a target takes 8d6 psychic damage, and it is frightened until your concentration ends. On a successful save, a target takes half as much damage." + "\n   " + "While frightened by this effect, a target's speed is reduced to 0, and the target can use its action, and any bonus action it might have, only to make melee attacks. The frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
	firstCol : 7
};
//the crown of rage discipline
PsionicsList["crown of rage"] = {
	name : "Crown of Rage",
	classes : ["mystic"],
	source : ["UA:TMC", 13],
	psionic : true,
	level : 1,
	school : "Avatar",
	time : "1 bns",
	range : "5-ft rad",
	components : "Psi-F.",
	duration : "While focused",
	description : "Any crea within range has disadvantage on melee attack rolls against targets other than you",
	descriptionFull : "You place a mote of pure fury within a creature's mind, causing its bloodlust to overcome its senses and for it to act as you wish it to." + PsychicFocus + "While you are focused on this discipline, any enemy within 5 feet of you that makes a melee attack roll against creatures other than you does so with disadvantage.",
	firstCol : "checkbox",
	dependencies : ["cr1-primal fury", "cr2-fighting words", "cr3-mindless courage", "cr4-punishing fury"]
};
PsionicsList["cr1-primal fury"] = {
	name : "Primal Fury",
	source : ["UA:TMC", 13],
	psionic : true,
	level : 1,
	school : "Avatar",
	time : "1 a",
	range : "60 ft",
	duration : "Instantaneous",
	save : "Cha",
	description : "1 crea save or 1d6/PP Psychic dmg, use rea to move its speed toward nearest enemy (charm effect)",
	descriptionFull : "As an action, choose one creature you can see within 60 feet of you. The target must succeed on a Charisma saving throw or take 1d6 psychic damage per psi point spent on this ability and immediately use its reaction to move its speed in a straight line toward its nearest enemy. The save automatically succeeds if the target is immune to being charmed.",
	firstCol : "1-7"
};
PsionicsList["cr2-fighting words"] = {
	name : "Fighting Words",
	source : ["UA:TMC", 13],
	psionic : true,
	level : 1,
	school : "Avatar",
	time : "1 min",
	range : "Self",
	duration : "Conc, 10 min",
	save : "Wis",
	description : "After 1 min conversation, 1 crea save or attack one other, chosen crea for 5 rnds (charm effect)",
	descriptionFull : "If you spend 1 minute conversing with a creature, you can attempt to leave a simmering violence in its mind. At the end of the minute, you can use an action to force the creature to make a Wisdom saving throw to resist feeling violent urges against one creature you describe to it or name. The save automatically succeeds if the target is immune to being charmed. On a failed save, the target attacks the chosen creature if it sees that creature before your concentration ends, using weapons or spells against a creature it was already hostile toward or unarmed strikes against an ally or a creature it was neutral toward. Once the fight starts, it continues to attack for 5 rounds before this effect ends. This effect immediately ends if the target or any ally it can see is attacked or takes damage from any creature other than the one it has been incited against. On a successful save, the creature is unaffected and has no inkling of your attempt to bend its will.",
	firstCol : 2
};
PsionicsList["cr3-mindless courage"] = {
	name : "Mindless Courage",
	source : ["UA:TMC", 13],
	psionic : true,
	level : 1,
	school : "Avatar",
	time : "1 bns",
	range : "60 ft",
	duration : "Next turn end",
	save : "Wis",
	description : "1 crea save or it can only move towards the nearest enemy it can see, or not move at all (charm effect)",
	descriptionFull : "You cause a creature's bloodlust to overcome its sense of preservation. As a bonus action, choose one creature you can see within 60 feet of you. The target must succeed on a Wisdom saving throw or, until the end of your next turn, it can't willingly move unless its movement brings it closer to its nearest enemy that it can see. The save automatically succeeds if the target is immune to being charmed.",
	firstCol : 2
};
PsionicsList["cr4-punishing fury"] = {
	name : "Punishing Fury",
	source : ["UA:TMC", 14],
	psionic : true,
	level : 1,
	school : "Avatar",
	time : "1 bns",
	range : "60 ft",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "1 crea save or when it makes melee atk, all in 5 ft of it can make melee atk vs. it as rea (charm effect)",
	descriptionFull : "You cause a creature's rage to grow so hot that it attacks without heeding its own safety. As a bonus action, choose one creature you can see within 60 feet of you. The target must succeed on a Wisdom saving throw or, until your concentration ends, any creature within 5 feet of it can use a reaction to make a melee attack against it whenever the target makes a melee attack. The save automatically succeeds if the target is immune to being charmed.",
	firstCol : 5
};
//the diminution discipline (contributed by mattohara & TheBob427)
PsionicsList["diminution"] = {
	name : "Diminution",
	classes : ["mystic"],
	source : ["UA:TMC", 14],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "1 bns",
	range : "Self",
	components : "Psi-F.",
	duration : "While focused",
	description : "You have advantage on Dexterity (Stealth) checks",
	descriptionFull : "You manipulate the matter that composes your body, drastically reducing your size without surrendering any of your might." + PsychicFocus + "While focused on this discipline, you have advantage on Dexterity (Stealth) checks.",
	firstCol : "checkbox",
	dependencies : ["d1-miniature form", "d2-toppling shift", "d3-sudden shift", "d4-microscopic form"]
};
PsionicsList["d1-miniature form"] = {
	name : "Miniature Form",
	source : ["UA:TMC", 14],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "1 bns",
	range : "Self",
	duration : "Conc, 10 min",
	description : "Become Tiny, gain +5 to Dex (Stealth) and can fit through gaps of up to 6\" without squeezing",
	descriptionMetric : "Become Tiny, gain +5 to Dex (Stealth) and can fit through gaps of up to 15 cm without squeezing",
	descriptionFull : "As a bonus action, you become Tiny until your concentration ends. While this size, you gain a +5 bonus to Dexterity (Stealth) checks and can move through gaps up to 6 inches across without squeezing.",
	firstCol : 2
};
PsionicsList["d2-toppling shift"] = {
	name : "Toppling Shift",
	source : ["UA:TMC", 14],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "1 bns",
	range : "5 ft",
	duration : "Instantaneous",
	save : "Str",
	description : "1 creature save or be knocked prone",
	descriptionFull : "As a bonus action, you shift to an incredibly small size and then suddenly return to normal, sending an opponent flying backward. Choose one creature you can see within 5 feet of you. It must succeed on a Strength saving throw or be knocked prone.",
	firstCol : 2
};
PsionicsList["d3-sudden shift"] = {
	name : "Sudden Shift",
	source : ["UA:TMC", 14],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "1 rea",
	range : "Self",
	duration : "Instantaneous",
	description : "Use when hit by an attack; it misses, and you move up to 5 ft without provoking opportunity attacks",
	descriptionFull : "As a reaction when you are hit by an attack, you shift down to minute size to avoid the attack. The attack misses, and you move up to 5 feet without provoking opportunity attacks before returning to normal size.",
	firstCol : 5
};
PsionicsList["d4-microscopic form"] = {
	name : "Microscopic Form",
	source : ["UA:TMC", 14],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "1 bns",
	range : "Self",
	duration : "Conc, 10 min",
	description : "Become diminutive, gain +5 AC, +10 to Dex (Stealth), can fit through 1\" gaps, but can't use wea atks",
	descriptionMetric : "Become diminutive, gain +5 AC, +10 to Dex (Stealth), can fit through 2,5 cm gaps, can't use wea atks",
	descriptionFull : "As a bonus action, you become smaller than Tiny until your concentration ends. While this size, you gain a +10 bonus to Dexterity (Stealth) checks and a +5 bonus to AC, you can move through gaps up to 1 inch across without squeezing, and you can't make weapon attacks.",
	firstCol : 7
};
//the giant growth discipline (contributed by mattohara & TheBob427)
PsionicsList["giant growth"] = {
	name : "Giant Growth",
	classes : ["mystic"],
	source : ["UA:TMC", 14],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "1 bns",
	range : "Touch",
	components : "Psi-F.",
	duration : "While focused",
	description : "Your reach increases by 5 ft",
	descriptionFull : "You infuse yourself with psionic energy to grow to tremendous size, bolstering your strength and durability." + PsychicFocus + "While focused on this discipline, your reach increases by 5 feet.",
	firstCol : "checkbox",
	dependencies : ["gg1-ogre form", "gg2-giant form"]
};
PsionicsList["gg1-ogre form"] = {
	name : "Ogre Form",
	source : ["UA:TMC", 14],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "1 bns",
	range : "Self",
	duration : "Conc, 1 min",
	description : "10 temp. hp; for duration: become Large, +5 ft reach, melee attacks deal +1d4 Bludgeoning dmg",
	descriptionFull : "As a bonus action, you gain 10 temporary hit points. In addition, until your concentration ends, your melee weapon attacks deal an extra 1d4 bludgeoning damage on a hit, and your reach increases by 5 feet. If you're smaller than Large, you also become Large for the duration.",
	firstCol : 2
};
PsionicsList["gg2-giant form"] = {
	name : "Giant Form",
	source : ["UA:TMC", 14],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "1 bns",
	range : "Self",
	duration : "Conc, 1 min",
	description : "30 temp. hp; for duration: become Huge, +10 ft reach, melee attacks deal +2d6 Bludgeoning dmg",
	descriptionFull : "As a bonus action, you gain 30 temporary hit points. In addition, until your concentration ends, your melee weapon attacks deal an extra 2d6 bludgeoning damage on a hit, and your reach increases by 10 feet. If you're smaller than Huge, you also become Huge for the duration.",
	firstCol : 7
};
//the intellect fortress discipline (contributed by TheBob427)
PsionicsList["intellect fortress"] = {
	name : "Intellect Fortress",
	classes : ["mystic"],
	source : ["UA:TMC", 14],
	psionic : true,
	level : 1,
	school : "Awake",
	time : "1 bns",
	range : "Self",
	components : "Psi-F",
	duration : "While focused",
	description : "You gain resistance to Psychic damage",
	descriptionFull : "You forge an indomitable wall of psionic energy around your mind-one that allows you to launch counterattacks against your opponents." + PsychicFocus + "While focused on this discipline, you have resistance to psychic damage.",
	firstCol : "checkbox",
	dependencies : ["if1-psychic backlash", "if2-psychic parry", "if3-psychic redoubt"]
};
PsionicsList["if1-psychic backlash"] = {
	name : "Psychic Backlash",
	source : ["UA:TMC", 14],
	psionic : true,
	level : 1,
	school : "Awake",
	time : "1 rea",
	range : "Sight",
	duration : "Instantaneous",
	description : "You impose dis. on an attack roll vs. you; if you're hit anyway, the attacker takes 2d10 Psychic damage",
	descriptionFull : "As a reaction, you can impose disadvantage on an attack roll against you if you can see the attacker. If the attack still hits you, the attacker takes 2d10 psychic damage.",
	firstCol : 2
};
PsionicsList["if2-psychic parry"] = {
	name : "Psychic Parry",
	source : ["UA:TMC", 14],
	psionic : true,
	level : 1,
	school : "Awake",
	time : "1 rea",
	range : "Self",
	duration : "Instantaneous",
	description : "Add +1/PP to the result of an Int, Wis, or Cha save; use after rolling, but before knowing if successful",
	descriptionFull : "As a reaction when you make an Intelligence, a Wisdom, or a Charisma saving throw, you gain a +1 bonus to that saving throw for each psi point you spend on this ability. You can use this ability after rolling the die but before suffering the results.",
	firstCol : "1-7"
};
PsionicsList["if3-psychic redoubt"] = {
	name : "Psychic Redoubt",
	source : ["UA:TMC", 14],
	psionic : true,
	level : 1,
	school : "Awake",
	time : "1 a",
	range : "30 ft",
	duration : "Conc, 10 min",
	description : "Any creatures in range gain resistance to Psychic damage and advantage on Int, Wis, and Cha saves",
	descriptionFull : "As an action, you create a field of protective psychic energy. Choose any number of creatures within 30 feet of you. Until your concentration ends, each target has resistance to psychic damage and advantage on Intelligence, Wisdom, and Charisma saving throws.",
	firstCol : 5
};
//the iron durability discipline (contributed by mattohara)
PsionicsList["iron durability"] = {
	name : "Iron Durability",
	classes : ["mystic"],
	source : ["UA:TMC", 15],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "1 bns",
	range : "Self",
	components : "Psi-F.",
	duration : "While focused",
	description : "You gain a +1 bonus to AC",
	descriptionFull : "You transform your body to become a living metal, allowing you to shrug off attacks that would cripple weaker creatures." + PsychicFocus + "While focused on this discipline, you gain a +1 bonus to AC.",
	firstCol : "checkbox",
	dependencies : ["id1-iron hide", "id2-steel hide", "id3-iron resistance"]
};
PsionicsList["id1-iron hide"] = {
	name : "Iron Hide",
	source : ["UA:TMC", 15],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "1 rea",
	range : "Self",
	duration : "Next turn end",
	description : "You gain +1/PP AC; use when hit by attack; bonus works against triggering attack",
	descriptionFull : "As a reaction when you are hit by an attack, you gain a +1 bonus to AC for each psi point you spend on this ability. The bonus lasts until the end of your next turn. This bonus applies against the triggering attack.",
	firstCol : "1-7"
};
PsionicsList["id2-steel hide"] = {
	name : "Steel Hide",
	source : ["UA:TMC", 15],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "1 bns",
	range : "Self",
	duration : "Next turn end",
	description : "You gain resistance to Bludgeoning, Piercing, and Slashing damage",
	descriptionFull : "As a bonus action, you gain resistance to bludgeoning, piercing, and slashing damage until the end of your next turn.",
	firstCol : 2
};
PsionicsList["id3-iron resistance"] = {
	name : "Iron Resistance",
	source : ["UA:TMC", 15],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "1 a",
	range : "Self",
	duration : "Conc, 1 h",
	description : "You gain resistance to bludgeoning, piercing, or slashing (your choice)",
	descriptionFull : "As an action, you gain resistance to bludgeoning, piercing, or slashing damage (your choice), which lasts until your concentration ends.",
	firstCol : 7
};
//the mantle of awe discipline (contributed by mattohara)
PsionicsList["mantle of awe"] = {
	name : "Mantle of Awe",
	classes : ["mystic"],
	source : ["UA:TMC", 15],
	psionic : true,
	level : 1,
	school : "Awake",
	time : "1 bns",
	range : "Self",
	components : "Psi-F.",
	duration : "While focused",
	description : "You gain a bonus to Charisma checks, bonus equals half you Intelligence modifier (min 1)",
	descriptionFull : "You learn to use psionic energy to manipulate others with a subtle combination of psi and your own, natural charm." + PsychicFocus + "While focused on this discipline, you gain a bonus to Charisma checks. The bonus equals half your Intelligence modifier (minimum of +1).",
	firstCol : "checkbox",
	dependencies : ["moa1-charming presence", "moa2-center of attention", "moa3-invoke awe"]
};
PsionicsList["moa1-charming presence"] = {
	name : "Charming Presence",
	source : ["UA:TMC", 15],
	psionic : true,
	level : 1,
	school : "Awake",
	time : "1 a",
	range : "30 ft",
	duration : "10 min",
	description : "2d8/PP hp of conscious, not in combat, not immune to charm crea charmed; use hp max, not current",
	descriptionFull : "As an action, you exert an aura of sympathetic power. Roll 2d8 per psi point spent on this ability; the total is how many hit points worth of creatures this option can affect. Creatures within 30 feet of you are affected in ascending order of their hit point maximums, ignoring incapacitated creatures, creatures immune to being charmed, and creatures engaged in combat." + "\n   " + "Starting with the creature that has the lowest hit point maximum, each creature affected by this option is charmed by you for 10 minutes, regarding you as a friendly acquaintance. Subtract each creature's hit point maximum from the total before moving on to the next creature. A creature's hit point maximum must be equal to or less than the remaining total for that creature to be affected.",
	firstCol : "1-7"
};
PsionicsList["moa2-center of attention"] = {
	name : "Center of Attention",
	source : ["UA:TMC", 15],
	psionic : true,
	level : 1,
	school : "Awake",
	time : "1 a",
	range : "60 ft",
	duration : "Conc, 1 min",
	save : "Cha",
	description : "1 crea save or all other creatures are invisible to it; ends if it leaves your sight/earshot or takes dmg",
	descriptionFull : "As an action, you exert an aura of power that grabs a creature's attention. Choose one creature you can see within 60 feet of you. It must make a Charisma saving throw. On a failed save, the creature is so thoroughly distracted by you that all other creatures are invisible to it until your concentration ends. This effect ends if the creature can no longer see or hear you or if it takes damage.",
	firstCol : 2
};
PsionicsList["moa3-invoke awe"] = {
	name : "Invoke Awe",
	source : ["UA:TMC", 15],
	psionic : true,
	level : 1,
	school : "Awake",
	time : "1 a",
	range : "60 ft",
	duration : "Conc, 10 min",
	save : "Int",
	description : "5 crea save or charmed, obey verbal commands; no self harm; will atk crea that atk you; save each rnd",
	descriptionFull : "As an action, you exert an aura that inspires awe in others. Choose up to 5 creatures you can see within 60 feet of you. Each target must succeed on an Intelligence saving throw or be charmed by you until your concentration ends. While charmed, the target obeys all your verbal commands to the best of its ability and without doing anything obviously self-destructive. The charmed target will attack only creatures that it has seen attack you since it was charmed or that it was already hostile toward. At the end of each of its turns, it can repeat the saving throw, ending the effect on itself on a success.",
	firstCol : 7
};
//the mantle of command discipline
PsionicsList["mantle of command"] = {
	name : "Mantle of Command",
	classes : ["mystic"],
	source : ["UA:TMC", 15],
	psionic : true,
	level : 1,
	school : "Avatar",
	time : "1 bns",
	range : "Self",
	components : "Psi-F.",
	duration : "While focused",
	description : "When ending a turn you didn't move in, use your rea to have 1 ally within 30 ft move half its speed",
	descriptionFull : "You exert an aura of trust and authority, enhancing the coordination among your allies." + PsychicFocus + "While focused on this discipline, when you end your turn and didn't move during it, you can use your reaction to allow one ally you can see within 30 feet of you to move up to half their speed, following a path of your choice. To move in this way, the ally mustn't be incapacitated.",
	firstCol : "checkbox",
	dependencies : ["mc1-coordinated movement", "mc2-commander's sight", "mc3-command to strike", "mc4-strategic mind", "mc5-overwhelming attack"]
};
PsionicsList["mc1-coordinated movement"] = {
	name : "Coordinated Movement",
	source : ["UA:TMC", 15],
	psionic : true,
	level : 1,
	school : "Avatar",
	time : "1 bns",
	range : "60 ft",
	duration : "Instantaneous",
	description : "Up to 5 allies you can see can use their reaction to move half their speed, following a path you choose",
	descriptionFull : "As a bonus action, choose up to five allies you can see within 60 feet of you. Each of those allies can use their reaction to move up to half their speed, following a path of your choice.",
	firstCol : 2
};
PsionicsList["mc2-commander's sight"] = {
	name : "Commander's Sight",
	source : ["UA:TMC", 15],
	psionic : true,
	level : 1,
	school : "Avatar",
	time : "1 a",
	range : "60 ft",
	duration : "Conc, 1 rnd",
	description : "You mark 1 crea; until the start of your next turn, your allies have adv. on attacks vs. it",
	descriptionFull : "As an action, choose one creature you can see within 60 feet of you. Until the start of your next turn, your allies have advantage on attack rolls against that target.",
	firstCol : 2
};
PsionicsList["mc3-command to strike"] = {
	name : "Command to Strike",
	source : ["UA:TMC", 15],
	psionic : true,
	level : 1,
	school : "Avatar",
	time : "1 a",
	range : "60 ft",
	duration : "Instantaneous",
	description : "1 ally you can see can use their reaction to take the Attack action, with you choosing the targets",
	descriptionFull : "As an action, choose one ally you can see within 60 feet of you. That ally can use their reaction to immediately take the Attack action. You choose the targets.",
	firstCol : 3
};
PsionicsList["mc4-strategic mind"] = {
	name : "Strategic Mind",
	source : ["UA:TMC", 15],
	psionic : true,
	level : 1,
	school : "Avatar",
	time : "1 a",
	range : "60 ft",
	duration : "Conc, 1 min",
	description : "1 ally can, on its turn, either add 1d4 to its attack rolls or take Dash or Disengage as a bonus action",
	descriptionFull : "As an action, you exert an aura of trust and command that unites your allies into a cohesive unit. Until your concentration ends, any ally within 60 feet of you on their turn can, as a bonus action, take the Dash or Disengage action or roll a d4 and add the number rolled to each attack roll they make that turn.",
	firstCol : 5
};
PsionicsList["mc5-overwhelming attack"] = {
	name : "Overwhelming Attack",
	source : ["UA:TMC", 15],
	psionic : true,
	level : 1,
	school : "Avatar",
	time : "1 a",
	range : "60 ft",
	duration : "Instantaneous",
	description : "Up to 5 allies you see can use their reactions to take the Attack action, with you choosing the targets",
	descriptionFull : "As an action, choose up to five allies you can see within 60 feet of you. Each of those allies can use their reaction to take the Attack action. You choose the targets of the attacks.",
	firstCol : 7
};
//the mantle of courage discipline
PsionicsList["mantle of courage"] = {
	name : "Mantle of Courage",
	classes : ["mystic"],
	source : ["UA:TMC", 16],
	psionic : true,
	level : 1,
	school : "Avatar",
	time : "1 bns",
	range : "Self",
	components : "Psi-F.",
	duration : "While focused",
	description : "You and allies within 10 ft of you that can see you have advantage on saves vs. being frightened",
	descriptionFull : "You focus your mind on courage, radiating confidence and bravado to your allies." + PsychicFocus + "While focused on this discipline, you and allies within 10 feet of you who can see you have advantage on saving throws against being frightened.",
	firstCol : "checkbox",
	dependencies : ["mc1-incite courage", "mc2-aura of victory", "mc3-pillar of confidence"]
};
PsionicsList["mc1-incite courage"] = {
	name : "Incite Courage",
	source : ["UA:TMC", 16],
	psionic : true,
	level : 1,
	school : "Avatar",
	time : "1 bns",
	range : "60 ft",
	duration : "Instantaneous",
	description : "Up to 6 creatures are no longer frightened",
	descriptionFull : "As a bonus action, choose up to six creatures you can see within 60 feet of you. If any of those creatures is frightened, that condition ends on that creature.",
	firstCol : 2
};
PsionicsList["mc2-aura of victory"] = {
	name : "Aura of Victory",
	source : ["UA:TMC", 16],
	psionic : true,
	level : 1,
	school : "Avatar",
	time : "1 bns",
	range : "30 ft",
	duration : "Conc, 10 min",
	description : "When an enemy you can see is reduced to 0 hp, you and allies within range gain 2/PP temporary hp",
	descriptionFull : "As a bonus action, you project psionic energy until your concentration ends. The energy fortifies you and your allies when your enemies are felled; whenever an enemy you can see is reduced to 0 hit points, you and each of your allies within 30 feet of you gain temporary hit points equal to double the psi points spent to activate this effect.",
	firstCol : "1-7"
};
PsionicsList["mc3-pillar of confidence"] = {
	name : "Pillar of Confidence",
	source : ["UA:TMC", 16],
	psionic : true,
	level : 1,
	school : "Avatar",
	time : "1 a",
	range : "60 ft",
	duration : "Next turn end",
	description : "You \u0026 up to 5 crea gain, on their turn, a special action to either make 1 wea atk, Dash, or Disengage",
	descriptionFull : "As an action, you and up to five creatures you can see within 60 feet of you each gain one extra action to use on their individual turns. The action goes away if not used before the end of your next turn. the action can be used only to make one weapon attack or to take the Dash or Disengage action.",
	firstCol : 6
};
//the mantle of fear discipline
PsionicsList["mantle of fear"] = {
	name : "Mantle of Fear",
	classes : ["mystic"],
	source : ["UA:TMC", 16],
	psionic : true,
	level : 1,
	school : "Avatar",
	time : "1 bns",
	range : "Self",
	components : "Psi-F.",
	duration : "While focused",
	description : "You gain advantage on Charisma (Intimidation) checks",
	descriptionFull : "You tap into a well of primal fear and turn yourself into a beacon of terror to your enemies." + PsychicFocus + "While focused on this discipline, you have advantage on Charisma (Intimidation) checks.",
	firstCol : "checkbox",
	dependencies : ["mf1-incite fear", "mf2-unsettling aura", "mf3-incite panic"]
};
PsionicsList["mf1-incite fear"] = {
	name : "Incite Fear",
	source : ["UA:TMC", 16],
	psionic : true,
	level : 1,
	school : "Avatar",
	time : "1 a",
	range : "60 ft",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "1 crea save or be frightened of you; repeat save each turn when out of line of sight",
	descriptionFull : "As an action, choose one creature you can see within 60 feet of you. The target must succeed on a Wisdom saving throw or become frightened of you until your concentration ends. Whenever the frightened target ends its turn in a location where it can't see you, it can repeat the saving throw, ending the effect on itself on a success.",
	firstCol : 2
};
PsionicsList["mf2-unsettling aura"] = {
	name : "Unsettling Aura",
	source : ["UA:TMC", 16],
	psionic : true,
	level : 1,
	school : "Avatar",
	time : "1 bns",
	range : "60 ft",
	duration : "Conc, 1 h",
	description : "All crea in range that can see you move only half speed when moving towards you (frightening effect)",
	descriptionFull : "As a bonus action, you cloak yourself in unsettling psychic energy. Until your concentration ends, any enemy within 60 feet of you that can see you must spend 1 extra foot of movement for every foot it moves toward you. A creature ignores this effect if immune to being frightened.",
	firstCol : 3
};
PsionicsList["mf3-incite panic"] = {
	name : "Incite Panic",
	source : ["UA:TMC", 16],
	psionic : true,
	level : 1,
	school : "Avatar",
	time : "1 a",
	range : "90 ft",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "8 crea save each rnd or frightened and spend turn on random move or melee atk; 3 saves ends; see B",
	descriptionFull : "As an action, choose up to eight creatures you can see within 90 feet of you that can see you. At the start of each of a target's turns before your concentration ends, the target must make a Wisdom saving throw. On a failed save, the target is frightened until the start of its next turn, and you roll a die. If you roll an odd number, the frightened target moves half its speed in a random direction and takes no action on that turn, other than to scream in terror. If you roll an even number, the frightened target makes one melee attack against a random target within its reach. If there is no such target, it moves half its speed in a random direction and takes no action on that turn. This effect ends on a target if it succeeds on three saving throws against it.",
	firstCol : 5
};
//the mantle of fury discipline
PsionicsList["mantle of fury"] = {
	name : "Mantle of Fury",
	classes : ["mystic"],
	source : ["UA:TMC", 16],
	psionic : true,
	level : 1,
	school : "Avatar",
	time : "1 bns",
	range : "Self",
	components : "Psi-F.",
	duration : "While focused",
	description : "You and allies within 10 ft at start of your turn gain +5 ft walking speed for that turn",
	descriptionFull : "You allow the primal fury lurking deep within your mind to burst forth, catching you and your allies in an implacable bloodthirst." + PsychicFocus + "While focused on this discipline in combat, you and any ally who starts their turn within 10 feet of you gains a 5-foot increase to their walking speed during that turn.",
	firstCol : "checkbox",
	dependencies : ["mf1-incite fury", "mf2-mindless charge", "mf3-aura of bloodletting", "mf4-overwhelming fury"]
};
PsionicsList["mf1-incite fury"] = {
	name : "Incite Fury",
	source : ["UA:TMC", 16],
	psionic : true,
	level : 1,
	school : "Avatar",
	time : "1 bns",
	range : "60 ft",
	duration : "Conc, 1 min",
	description : "3 creatures can add 1d4 to the damage of melee weapon attacks during the duration",
	descriptionFull : "As a bonus action, choose up to three allies you can see within 60 feet of you (you can choose yourself in place of one of the allies). Until your concentration ends, each target can roll a d4 when rolling damage for a melee weapon attack and add the number rolled to the damage roll.",
	firstCol : 2
};
PsionicsList["mf2-mindless charge"] = {
	name : "Mindless Charge",
	source : ["UA:TMC", 16],
	psionic : true,
	level : 1,
	school : "Avatar",
	time : "1 bns",
	range : "60 ft",
	duration : "Instantaneous",
	description : "3 creatures can use their reactions to move their speed straight towards the nearest enemy",
	descriptionFull : "As a bonus action, choose up to three creatures you can see within 60 feet of you. Each target can immediately use its reaction to move up to its speed in a straight line toward its nearest enemy.",
	firstCol : 2
};
PsionicsList["mf3-aura of bloodletting"] = {
	name : "Aura of Bloodletting",
	source : ["UA:TMC", 16],
	psionic : true,
	level : 1,
	school : "Avatar",
	time : "1 bns",
	range : "60 ft",
	duration : "Conc, 1 min",
	description : "You and all creatures within range during the duration have advantage on melee attack rolls",
	descriptionFull : "As a bonus action, you unleash an aura of rage. Until your concentration ends, you and any creature within 60 feet of you has advantage on melee attack rolls.",
	firstCol : 3
};
PsionicsList["mf4-overwhelming fury"] = {
	name : "Overwhelming Fury",
	source : ["UA:TMC", 16],
	psionic : true,
	level : 1,
	school : "Avatar",
	time : "1 a",
	range : "60 ft",
	duration : "Conc, 1 min",
	save : "Cha",
	description : "1 creature save or it can use its actions only to make melee attacks; save at the end of each of its turns",
	descriptionFull : "As an action, you flood rage into one creature you can see within 60 feet of you. The target must succeed on a Charisma saving throw, or it can use its actions only to make melee attacks until your concentration ends. It can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
	firstCol : 5
};
//the mantle of joy discipline
PsionicsList["mantle of joy"] = {
	name : "Mantle of Joy",
	classes : ["mystic"],
	source : ["UA:TMC", 17],
	psionic : true,
	level : 1,
	school : "Avatar",
	time : "1 bns",
	range : "Self",
	components : "Psi-F.",
	duration : "While focused",
	description : "You gain advantage on Charisma (Persuasion) checks",
	descriptionFull : "You tap into the joy within you, radiating it outward in soothing, psychic energy that brings hope and comfort to creatures around you." + PsychicFocus + "While focused on this discipline, you have advantage on Charisma (Persuasion) checks.",
	firstCol : "checkbox",
	dependencies : ["mj1-soothing presence", "mj2-comforting aura", "mj3-aura of jubilation", "mj4-beacon of recovery"]
};
PsionicsList["mj1-soothing presence"] = {
	name : "Soothing Presence",
	source : ["UA:TMC", 17],
	psionic : true,
	level : 1,
	school : "Avatar",
	time : "1 bns",
	range : "60 ft",
	duration : "Instantaneous",
	description : "3 creatures gain 3/PP temporary hit points",
	descriptionFull : "As a bonus action, choose up to three creatures you can see within 60 feet of you. Each target gains 3 temporary hit points per psi point spent on this effect.",
	firstCol : "1-7"
};
PsionicsList["mj2-comforting aura"] = {
	name : "Comforting Aura",
	source : ["UA:TMC", 17],
	psionic : true,
	level : 1,
	school : "Avatar",
	time : "1 bns",
	range : "Sight",
	duration : "Conc, 1 min",
	description : "3 creatures can add 1d4 on every saving throw during the duration",
	descriptionFull : "As a bonus action, choose up to three allies you can see (you can choose yourself in place of one of the allies). Until your concentration ends, each target can roll a d4 when making a saving throw and add the number rolled to the total.",
	firstCol : 2
};
PsionicsList["mj3-aura of jubilation"] = {
	name : "Aura of Jubilation",
	source : ["UA:TMC", 17],
	psionic : true,
	level : 1,
	school : "Avatar",
	time : "1 bns",
	range : "60 ft",
	duration : "Conc, 1 min",
	description : "All creatures within range that can see you have disadvantage on Perception and Investigation checks",
	descriptionFull : "As a bonus action, you radiate a distracting mirth until your concentration ends. Each creature within 60 feet of you that can see you suffers disadvantage on any checks using the Perception and Investigation skills.",
	firstCol : 3
};
PsionicsList["mj4-beacon of recovery"] = {
	name : "Beacon of Recovery",
	source : ["UA:TMC", 17],
	psionic : true,
	level : 1,
	school : "Avatar",
	time : "1 bns",
	range : "60 ft",
	duration : "Instantaneous",
	description : "You + 5 allies can make an extra save against every effect that allows a save at the start/end of a turn",
	descriptionFull : "As a bonus action, you and up to five allies you can see within 60 feet of you can immediately make saving throws against every effect they're suffering that allows a save at the start or end of their turns.",
	firstCol : 5
};
//the mastery of air discipline (contributed by mattohara)
PsionicsList["mastery of air"] = {
	name : "Mastery of Air",
	classes : ["mystic"],
	source : ["UA:TMC", 17],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 bns",
	range : "Self",
	components : "Psi-F.",
	duration : "While focused",
	description : "You take no falling damage and ignore difficult terrain when walking",
	descriptionFull : "You become one with the power of elemental air." + PsychicFocus + "While focused on this discipline, you take no falling damage, and you ignore difficult terrain when walking.",
	firstCol : "checkbox",
	dependencies : ["ma1-wind step", "ma2-wind stream", "ma3-cloak of air", "ma4-wind form", "ma5-misty form", "ma6-animate air"]
};
PsionicsList["ma1-wind step"] = {
	name : "Wind Step",
	source : ["UA:TMC", 17],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "Move",
	range : "Self",
	duration : "This turn end",
	description : "Fly 20 ft/PP as part of your move this turn; if you end your turn in the air, you fall",
	descriptionFull : "As part of your move on your turn, you can fly up to 20 feet for each psi point spent. If you end this flight in the air, you fall unless something else holds you aloft.",
	firstCol : "1-7"
};
PsionicsList["ma2-wind stream"] = {
	name : "Wind Stream",
	source : ["UA:TMC", 17],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 a",
	range : "30-ft line",
	duration : "Instantaneous",
	save: "Str",
	description : "30-ft long 5-ft wide all crea 1d8/PP Bludgeoning dmg and knocked prone; save halves and not prone",
	descriptionFull : "As an action, you create a line of focused air that is 30 feet long and 5 feet wide. Each creature in that area must make a Strength saving throw, taking 1d8 bludgeoning damage per psi point spent and being knocked prone on a failed save, or half as much damage on a successful one.",
	firstCol : "1-7"
};
PsionicsList["ma3-cloak of air"] = {
	name : "Cloak of Air",
	source : ["UA:TMC", 17],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 bns",
	range : "Self",
	duration : "Conc, 10 min",
	description : "Atks vs. you have dis.; when missed by melee atk, use rea to have attacker repeat the attack on itself",
	descriptionFull : "As a bonus action, you seize control of the air around you to create a protective veil. Until your concentration ends, attack rolls against you have disadvantage, and when a creature you can see misses you with a melee attack, you can use your reaction to force the creature to repeat the attack roll against itself.",
	firstCol : 3
};
PsionicsList["ma4-wind form"] = {
	name : "Wind Form",
	source : ["UA:TMC", 17],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 bns",
	range : "Self",
	duration : "Conc, 10 min",
	description : "You gain a flying speed of 60 ft",
	descriptionFull : "As a bonus action, you gain a flying speed of 60 feet, which lasts until your concentration ends.",
	firstCol : 5
};
PsionicsList["ma5-misty form"] = {
	name : "Misty Form",
	source : ["UA:TMC", 17],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 a",
	range : "Self",
	duration : "Conc, 1 min",
	description : "Gain resistance to Bludgeoning/Piercing/Slashing, can only take Dash actions, fit through 1\" opening",
	descriptionMetric : "Gain resistance to Bludgeoning/Piercing/Slashing, only take Dash actions, fit through 2,5 cm opening",
	descriptionFull : "As an action, your body becomes like a misty cloud until your concentration ends. In this form, you gain resistance to bludgeoning, piercing, and slashing damage, and you can't take actions other than the Dash action. You can pass through openings that are no more than 1 inch wide without squeezing.",
	firstCol : 6
};
PsionicsList["ma6-animate air"] = {
	name : "Animate Air",
	source : ["UA:TMC", 17],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 a",
	range : "120 ft",
	duration : "Conc, 1 h",
	description : "Summon an air elemental that obeys your verbal commands; See Monster Manual, page 124",
	descriptionFull : "As an action, you cause an air elemental to appear in an unoccupied space you can see within 120 feet of you. The elemental lasts until your concentration ends, and it obeys your verbal commands. In combat, roll for its initiative, and choose its behavior during its turns. When this effect ends, the elemental disappears. See the Monster Manual for its stat block.",
	firstCol : 7
};
//the mastery of fire discipline
PsionicsList["mastery of fire"] = {
	name : "Mastery of Fire",
	classes : ["mystic"],
	source : ["UA:TMC", 17],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 bns",
	range : "Self",
	components : "Psi-F.",
	duration : "While focused",
	description : "You gain resistance to Fire damage and gain a +2 bonus on rolls for Fire damage",
	descriptionFull : "You align your mind with the energy of elemental fire." + PsychicFocus + "While focused on this discipline, you gain resistance to fire damage, and you gain a +2 bonus to rolls for fire damage.",
	firstCol : "checkbox",
	dependencies : ["mf1-combustion", "mf2-rolling flame", "mf3-detonation", "mf4-fire storm", "mf5-animate fire"]
};
PsionicsList["mf1-combustion"] = {
	name : "Combustion",
	source : ["UA:TMC", 17],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 a",
	range : "120 ft",
	duration : "Conc, 1 min",
	save : "Con",
	description : "1 crea save or 1d10/PP Fire dmg, on fire: 1d6 Fire dmg/rnd, it can 1 a to end; save half \u0026 not on fire",
	descriptionFull : "As an action, choose one creature or object you can see within 120 feet of you. The target must make a Constitution save. On a failed save, the target takes 1d10 fire damage per psi point spent, and it catches on fire, taking 1d6 fire damage at the end of each of its turns until your concentration ends or until it or a creature adjacent to it extinguishes the flames with an action. On a successful save, the target takes half as much damage and doesn't catch on fire.",
	firstCol : "1-7"
};
PsionicsList["mf2-rolling flame"] = {
	name : "Rolling Flame",
	source : ["UA:TMC", 17],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 a",
	range : "5 ft",
	duration : "Conc, 1 min",
	description : "20-ft cube all 5 Fire damage and any that end their turn in it also 5 Fire damage",
	descriptionFull : "As an action, you create fire in a 20-foot-by-20-foot cube within 5 feet of you. The fire lasts until your concentration ends. Any creature in that area when you use this ability and any creature that ends its turn there takes 5 fire damage.",
	firstCol : 3
};
PsionicsList["mf3-detonation"] = {
	name : "Detonation",
	source : ["UA:TMC", 18],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 a",
	range : "120 ft",
	duration : "Instantaneous",
	description : "20-ft rad all creatures save or 7d6 Fire damage and knocked prone; save halves and not prone",
	save : "Con",
	descriptionFull : "As an action, you create a fiery explosion at a point you can see within 120 feet of you. Each creature in a 20-foot-radius sphere centered on that point must make a Constitution saving throw, taking 7d6 fire damage and being knocked prone on a failed save, or half as much damage on a successful one.",
	firstCol : 5
};
PsionicsList["mf4-fire storm"] = {
	name : "Fire Storm",
	source : ["UA:TMC", 18],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 bns",
	range : "Self",
	duration : "Conc, 1 min",
	description : "All creatures that end their turn within 5 ft of you take 3d6 Fire damage",
	descriptionFull : "As a bonus action, you become wreathed in flames until your concentration ends. Any creature that end its turn within 5 feet of you takes 3d6 fire damage.",
	firstCol : 5
};
PsionicsList["mf5-animate fire"] = {
	name : "Animate Fire",
	source : ["UA:TMC", 18],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 a",
	range : "120 ft",
	duration : "Conc, 1 h",
	description : "Summon a fire elemental that obeys your verbal commands; See Monster Manual, page 124",
	descriptionFull : "As an action, you cause a fire elemental to appear in an unoccupied space you can see within 120 feet of you. The elemental lasts until your concentration ends, and it obeys your verbal commands. In combat, roll for its initiative, and choose its behavior during its turns. When this effect ends, the elemental disappears. See the Monster Manual for its stat block.",
	firstCol : 7
};
//the mastery of force discipline
PsionicsList["mastery of force"] = {
	name : "Mastery of Force",
	classes : ["mystic"],
	source : ["UA:TMC", 18],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 bns",
	range : "Self",
	components : "Psi-F.",
	duration : "While focused",
	description : "You gain advantage on Strength checks",
	descriptionFull : "As a student of psionic power, you perceive the potential energy that flows through all things. You reach out with your mind, transforming the potential into the actual. Objects and creatures move at your command." + PsychicFocus + ". While focused on this discipline, you have advantage on Strength checks.",
	firstCol : "checkbox",
	dependencies : ["mf1-push", "mf2-move", "mf3-inertial armor", "mf4-telekinetic barrier", "mf5-grasp", "mf6-crush (with grasp)" , "mf7-move (with grasp)"]
};
PsionicsList["mf1-push"] = {
	name : "Push",
	source : ["UA:TMC", 18],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 a",
	range : "60 ft",
	duration : "Instantaneous",
	save : "Str",
	description : "1 crea save or 1d8/PP Force dmg and pushed 5 ft/PP straight away; save halves and not pushed",
	descriptionFull : "As an action, choose one creature you can see within 60 feet of you. The target must make a Strength saving throw. On a failed save, it takes 1d8 force damage per psi point spent and is pushed up to 5 feet per point spent in a straight line away from you. On a successful save, it takes half as much damage.",
	firstCol : "1-7"
};
PsionicsList["mf2-move"] = {
	name : "Move",
	source : ["UA:TMC", 18],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 a",
	range : "60 ft",
	duration : "Instantaneous",
	save : "Dex",
	description : "Move obj 60 ft, after which it falls; crea under obj DC 10 save or 1d6+1d6/PP Bludg. dmg; see book",
	descriptionFull : "Choose one object you can see within 60 feet of you that isn't being worn or carried by another creature and that isn't secured in place. It can't be larger than 20 feet on a side, and its maximum weight depends on the psi points spent on this ability, as shown below." + "\n   " + "As an action, you move the object up to 60 feet, and you must keep the object within sight during this movement. If the object ends this movement in the air, it falls. If the object would fall on a creature, the creature must succeed on a DC 10 Dexterity saving throw or take damage as listed on the table below.\n\n  " + toUni("Psi") + "\t" + toUni("Maximum") + "    " + toUni("Bludgeoning") + "\n" + toUni("Points") + "\t " + toUni("Weight") + "\t        " + toUni("Damage") + "\n    2\t     25 lbs.  \t             2d6" + "\n    3\t     50 lbs.  \t             4d6" + "\n    5\t   250 lbs.  \t             6d6" + "\n    6\t   500 lbs.  \t             7d6" + "\n    7\t 1000 lbs.  \t             8d6",
	firstCol : "2-7"
};
PsionicsList["mf3-inertial armor"] = {
	name : "Inertial Armor",
	source : ["UA:TMC", 18],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 a",
	range : "Self",
	duration : "8 h",
	description : "You gain AC 14 + Dex modifier and resistance to Force dmg if not wearing armor; ends if don armor",
	descriptionFull : "As an action, you sheathe yourself in an intangible field of magical force. For 8 hours, your base AC is 14 + your Dexterity modifier, and you gain resistance to force damage. This effect ends if you are wearing or don armor.",
	firstCol : 2
};
PsionicsList["mf4-telekinetic barrier"] = {
	name : "Telekinetic Barrier",
	source : ["UA:TMC", 18],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 a",
	range : "60 ft",
	duration : "Conc, 10 min",
	description : "40-ft long, 10-ft high, 1-inch thick transparent wall of energy; each 10-ft section has AC 10 \u0026 10 hp",
	descriptionFull : "As an action, you create a transparent wall of telekinetic energy, at least one portion of which must be within 60 feet of you. The wall is 40 feet long, 10 feet high, and 1 inch thick. The wall lasts until your concentration ends. Each 10-foot section of the wall has an AC of 10 and 10 hit points.",
	firstCol : 3
};
PsionicsList["mf5-grasp"] = {
	name : "Grasp",
	source : ["UA:TMC", 18],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 a",
	range : "60 ft",
	duration : "Conc, 1 min",
	description : "1 crea save or grappled; escape Athl./Acro. vs. your spell atk +1/PP; if grappled you can Crush/Move",
	save : "Str",
	descriptionFull : "You attempt to grasp a creature in telekinetic energy and hold it captive. As an action, choose one creature you can see within 60 feet of you. The target must succeed on a Strength saving throw or be grappled by you until your concentration ends or until the target leaves your reach, which is 60 feet for this grapple." + "\n   " + "The grappled target can escape by succeeding on a Strength (Athletics) or Dexterity (Acrobatics) check contested by your psionic ability plus your proficiency bonus. When a target attempts to escape in this way, you can spend psi points to boost your check, abiding by your psi limit. You gain a +1 bonus per psi point spent." + "\n   " + "While a target is grappled in this manner, you create one of the following effects as an action: " + toUni("Crush") + " (1–7 psi) The target takes 1d6 bludgeoning damage per psi point spent." + toUni("Move") + " (1–7 psi) You move the target up to 5 feet per psi point spent. You can move it in the air and hold it there. It falls if the grapple ends.",
	firstCol : 3
};
PsionicsList["mf6-crush (with grasp)"] = {
	name : " - Crush (with Grasp)",
	source : ["UA:TMC", 18],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 a",
	range : "60 ft",
	duration : "Instantaneous",
	description : "1 creature grappled by Grasp takes 1d6/PP Bludgeoning damage",
	descriptionFull : "While the target is grappled by Grasp from the Mastery of Force discipline, you can use Crush on it as an action:" + "\n  " + "The target takes 1d6 bludgeoning damage per psi point spent.",
	firstCol : "1-7"
};
PsionicsList["mf7-move (with grasp)"] = {
	name : " - Move (with Grasp)",
	source : ["UA:TMC", 18],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 a",
	range : "60 ft",
	duration : "Instantaneous",
	description : "1 creature grappled by Grasp moved up to 5 ft/PP; can hold it aloft, but it falls when grapple ends",
	descriptionFull : "While the target is grappled by Grasp from the Mastery of Force discipline, you can use Move on it as an action:" + "\n  " + "You move the target up to 5 feet per psi point spent. You can move it in the air and hold it there. It falls if the grapple ends.",
	firstCol : "1-7"
};
//the mastery of ice discipline (contributed by Justin W.)
PsionicsList["mastery of ice"] = {
	name : "Mastery of Ice",
	classes : ["mystic"],
	source : ["UA:TMC", 19],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 bns",
	range : "Self",
	components : "Psi-F.",
	duration : "While focused",
	description : "You gain resistance to Cold damage",
	descriptionFull : "You master the power of ice, shaping it to meet you demands." + PsychicFocus + "While focused on this discipline, you have resistance to cold damage.",
	firstCol : "checkbox",
	dependencies : ["mi1-ice spike", "mi2-ice sheet", "mi3-frozen sanctuary", "mi4-frozen rain", "mi5-ice barrier"]
};
PsionicsList["mi1-ice spike"] = {
	name : "Ice Spike",
	source : ["UA:TMC", 19],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 a",
	range : "120 ft",
	duration : "Next turn end",
	save : "Dex",
	description : "1 creature save or 1d8/PP Cold damage and speed halved; save halves and normal speed",
	descriptionFull : "As an action, you hurl a mote of ice at one creature you can see within 120 feet of you. The target must make a Dexterity saving throw. On a failed save, the target takes 1d8 cold damage per psi point spent and has its speed halved until the start of your next turn. On a successful save, the target takes half as much damage.",
	firstCol : "1-7"
};
PsionicsList["mi2-ice sheet"] = {
	name : "Ice Sheet",
	source : ["UA:TMC", 19],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 a",
	range : "60 ft",
	duration : "10 min",
	save : "Dex",
	description : "Create 20-ft rad of difficult terrain; crea move more than 10 ft save or prone; on slope slide to bottom",
	descriptionFull : "As an action, choose a point on the ground you can see within 60 feet of you. The ground in a 20-foot radius centered on that point becomes covered in ice for 10 minutes. It is difficult terrain, and any creature that moves more than 10 feet on it must succeed on a Dexterity saving throw or fall prone. If the surface is sloped, a creature that falls prone in the area immediately slides to the bottom of the slope.",
	firstCol : 2
};
PsionicsList["mi3-frozen sanctuary"] = {
	name : "Frozen Sanctuary",
	source : ["UA:TMC", 19],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 bns",
	range : "Self",
	duration : "Instantaneous",
	description : "You gain 20 temporary hit points",
	descriptionFull : "As a bonus action, you sheathe yourself with icy resilience. You gain 20 temporary hit points.",
	firstCol : 3
};
PsionicsList["mi4-frozen rain"] = {
	name : "Frozen Rain",
	source : ["UA:TMC", 19],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 a",
	range : "120 ft",
	duration : "Conc, 1 min",
	save : "Con",
	description : "20-ft rad all 6d6(+1d6/extra PP) Cold dmg \u0026 spd 0; save half \u0026 no spd 0; 1 a Athl. vs DC for no spd 0",
	descriptionFull : "As an action, choose a point you can see within 120 feet of you. The air in a 20-foot-radius sphere centered on that point becomes deathly cold and saturated with moisture. Each creature in that area must make a Constitution saving throw. On a failed save, a target takes 6d6 cold damage, and its speed is reduced to 0 until your concentration ends. On a successful save, a target takes half as much damage." + "\n   " + "As an action, a target that has its speed reduced can end the effect early if it succeeds on a Strength (Athletics) check with a DC equal to this effect's save DC." + "\n   " + "You can increase this effect's damage by 1d6 per each additional psi point spent on it.",
	firstCol : "5-7"
};
PsionicsList["mi5-ice barrier"] = {
	name : "Ice Barrier",
	source : ["UA:TMC", 19],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 a",
	range : "60-ft",
	duration : "Conc, 10 min",
	description : "60\u00D71\u00D715ft (l\u00D7w\u00D7h) wall; a 10-ft section has AC 12 & 30 hp; melee atks do same as Cold dmg back",
	descriptionMetric : "20\u00D70,3\u00D75m (l\u00D7w\u00D7h) wall; a 3-m section has AC 12 & 30 hp; melee atks do same as Cold dmg back",
	descriptionFull : "As an action, you create a wall of ice, at least one portion of which must be within 60 feet of you. The wall is 60 feet long, 15 feet high, and 1 foot thick. The wall lasts until your concentration ends. Each 10-foot section of the wall has AC 12 and 30 hit points. A creature that damages the wall with a melee attack takes cold damage equal to the damage the creature dealt to the wall.",
	firstCol : 6
};
//the mastery of light and darkness discipline (contributed by Justin W.)
PsionicsList["mastery of light and darkness"] = {
	name : "Mastery of Light and Darkness",
	nameShort : "Mastery of Light \u0026 Dark",
	classes : ["mystic"],
	source : ["UA:TMC", 19],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 bns",
	range : "Self",
	components : "Psi-F.",
	duration : "While focused",
	description : "You can see through natural and magical darkness out to 30 ft",
	descriptionFull : "You claim dominion over light and darkness with your mind." + PsychicFocus + "While focused on this discipline, natural and magical darkness within 30 feet of you has no effect on your vision.",
	firstCol : "checkbox",
	dependencies : ["mld1-darkness", "mld2-light", "mld3-shadow beasts", "mld4-radiant beam"]
};
PsionicsList["mld1-darkness"] = {
	name : "Darkness",
	source : ["UA:TMC", 19],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 a",
	range : "60 ft",
	duration : "Conc, 1 min",
	description : "10 ft/PP rad darkness from point; darkvision doesn't work; only magical light of SL 3 or higher works",
	descriptionFull : "As an action, you create an area of magical darkness, which foils darkvision. Choose a spot you can see within 60 feet of you. Magical darkness radiates from that point in a sphere with a 10-foot radius per psi point spent on this ability. The light produced by spells of 2nd level or less is suppressed in this area.",
	firstCol : "1-7"
};
PsionicsList["mld2-light"] = {
	name : "Light",
	source : ["UA:TMC", 19],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 a",
	range : "Touch",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "1 crea/obj save or sheds bright light 20-ft rad and dim light 20-ft, and can't hide, atks vs. it have adv.",
	descriptionFull : "As an action, an object you touch radiates light in a 20-foot radius and dim light for an additional 20 feet. The light lasts until your concentration ends. Alternatively, a creature you touch radiates light in the same manner if it fails a Dexterity saving throw. While lit in this manner, it can't hide, and attack rolls against it gain advantage.",
	firstCol : 2
};
PsionicsList["mld3-shadow beasts"] = {
	name : "Shadow Beasts",
	source : ["UA:TMC", 19],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 a",
	range : "60 ft",
	duration : "Conc, 1 min",
	description : "Summon 2 shadows that obeys your verbal commands; See Monster Manual, page 269",
	descriptionFull : "As an action, you cause two shadows to appear in unoccupied spaces you can see within 60 feet of you. The shadows last until your concentration ends, and they obey your verbal commands. In combat, roll for their initiative, and choose their behavior during their turns. When this effect ends, the shadows disappear. See the Monster Manual for their stat block.",
	firstCol : 3
};
PsionicsList["mld4-radiant beam"] = {
	name : "Radiant Beam",
	source : ["UA:TMC", 19],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 a",
	range : "60 ft",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "1 crea 6d6(+1d6/extra PP) Radiant dmg, blinded, save each turn to end blind; save halves \u0026 not blind",
	descriptionFull : "As an action, you project a beam of light at one creature you can see within 60 feet of you. The target must make a Dexterity saving throw. On a failed save, it takes 6d6 radiant damage and is blinded until your concentration ends. On a successful save, it takes half as much damage. A blinded target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." + "\n   " + "You can increase this effect's damage by 1d6 per each additional psi point spent on it.",
	firstCol : "5-7"
};
//the mastery of water discipline (contributed by Justin W.)
PsionicsList["mastery of water"] = {
	name : "Mastery of Water",
	classes : ["mystic"],
	source : ["UA:TMC", 19],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 bns",
	range : "Self",
	components : "Psi-F.",
	duration : "While focused",
	description : "You gain a swimming speed equal to your walking speed and you can breathe underwater",
	descriptionFull : "Your mind becomes one with elemental water, attuning your thoughts to its ebb and flow." + PsychicFocus + "While focused on this discipline, you have a swimming speed equal to your walking speed, and you can breathe underwater.",
	firstCol : "checkbox",
	dependencies : ["mwa1-dessicate", "mwa2-watery grasp", "mwa3-water whip", "mwa4-water breathing","mwa5-water sphere","mwa6-animate water"]
};
PsionicsList["mwa1-dessicate"] = {
	name : "Dessicate",
	source : ["UA:TMC", 20],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 a",
	range : "60 ft",
	duration : "Instantaneous",
	save : "Con",
	description : "1 creature 1d10/PP Necrotic damage; save halves",
	descriptionFull : "As an action, choose one creature you can see within 60 feet of you. The target must make a Constitution saving throw, taking 1d10 necrotic damage per psi point spent on this ability, or half as much damage on a successful one.",
	firstCol : "1-7"
};
PsionicsList["mwa2-watery grasp"] = {
	name : "Watery Grasp",
	source : ["UA:TMC", 20],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 a",
	range : "5 ft",
	duration : "Instantaneous",
	save : "Dex",
	description : "20-ft sq all save or 2d6(+1d6/extra PP) Bludg. dmg, prone, pulled 10 ft to you; save half \u0026 not prone",
	descriptionFull : "As an action, you unleash a wave that surges forth and then retreats to you like the rising tide. You create a wave in a 20-foot-by-20-foot square. At least some portion of the square's border must be within 5 feet of you. Any creature in that square must make a Strength saving throw. On a failed save, a target takes 2d6 bludgeoning damage, is knocked prone, and is pulled up to 10 feet closer to you. On a successful save, a target takes half as much damage. You can increase this ability's damage by 1d6 per additional psi point spent on it.",
	firstCol : "2-7"
};
PsionicsList["mwa3-water whip"] = {
	name : "Water Whip",
	source : ["UA:TMC", 20],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 a",
	range : "60-ft line",
	duration : "Instantaneous",
	save : "Str",
	description : "60\u00D75-ft (l\u00D7w) all 3d6(+1d6/extra PP) Bludg. dmg \u0026 move to empty spot on line; save half \u0026 no move",
	descriptionMetric : "20\u00D71,5m (l\u00D7w) all 3d6(+1d6/extra PP) Bludg. dmg, move to empty spot on line; save half \u0026 no move",
	descriptionFull : "As an action, you unleash a jet of water in a line that is 60 feet long and 5 feet wide. Each creature in the line must make a Strength saving throw, taking 3d6 bludgeoning damage on a failed save, or half as much damage on a successful one. In addition, you can move each target that fails its saving throw to any unoccupied space touching the line. You can increase this ability's damage by 1d6 per additional psi point spent on it.",
	firstCol : "3-7"
};
PsionicsList["mwa4-water breathing"] = {
	name : "Water Breathing",
	source : ["UA:TMC", 20],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 a",
	range : "60 ft",
	duration : "24 h",
	description : "You and up to 10 willing creatures can breathe underwater for the duration",
	descriptionFull : "As an action, you grant yourself and up to ten willing creatures you can see within 60 feet of you the ability to breathe underwater for the next 24 hours.",
	firstCol : 5
};
PsionicsList["mwa5-water sphere"] = {
	name : "Water Sphere",
	source : ["UA:TMC", 20],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 a",
	range : "60 ft",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "1 crea save or half speed, dis. on atks, can see only 10 ft, atks vs. it also dis.; save at end of each turn",
	descriptionFull : "As an action, you cause a sphere of water to form around a creature. Choose one creature you can see within 60 feet of you. The target must make a Dexterity saving throw. On a failed save, it becomes trapped in the sphere of water until your concentration ends. While the target is trapped, its speed is halved, it suffers disadvantage on attack rolls, and it can't see anything more than 10 feet away from it. However, attack rolls against it also suffer disadvantage. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a successful one.",
	firstCol : 6
};
PsionicsList["mwa6-animate water"] = {
	name : "Animate Water",
	source : ["UA:TMC", 20],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 a",
	range : "120 ft",
	duration : "Conc, 1 h",
	description : "Summon a water elemental that obeys your verbal commands; See Monster Manual, page 124",
	descriptionFull : "As an action, you cause a water elemental to appear in an unoccupied space you can see within 120 feet of you. The elemental lasts until your concentration ends, and it obeys your verbal commands. In combat, roll for its initiative, and choose its behavior during its turns. When this effect ends, the elemental disappears. See the Monster Manual for its stat block.",
	firstCol : 7
};
//the mastery of weather discipline (contributed by Justin W.)
PsionicsList["mastery of weather"] = {
	name : "Mastery of Weather",
	classes : ["mystic"],
	source : ["UA:TMC", 20],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 bns",
	range : "Self",
	components : "Psi-F.",
	duration : "While focused",
	description : "You gain resistance to Lightning and Thunder damage",
	descriptionFull : "Your mind reaches into the sky, reshaping the stuff of storms to serve your needs." + PsychicFocus + "While focused on this discipline, you have resistance to lightning and thunder damage.",
	firstCol : "checkbox",
	dependencies : ["mw1-cloud steps", "mw2-hungry lightning", "mw3-wall of clouds", "mw4-whirlwind", "mw5-lightning leap", "mw6-wall of thunder", "mw7-thunder clap"]
};
PsionicsList["mw1-cloud steps"] = {
	name : "Cloud Steps",
	source : ["UA:TMC", 20],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 a",
	range : "Self",
	duration : "Conc, 10 min",
	description : "You summon a 10 ft by 10 ft spiral staircase, that reaches 20 ft/PP upward",
	descriptionFull : "As an action, you conjure forth clouds to create a solid, translucent staircase that lasts until your concentration ends. The stairs form a spiral that fills a 10-foot-by-10-foot area and reaches upward 20 feet per psi point spent.",
	firstCol : "1-7"
};
PsionicsList["mw2-hungry lightning"] = {
	name : "Hungry Lightning",
	source : ["UA:TMC", 20],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 a",
	range : "60 ft",
	duration : "Instantaneous",
	save : "Dex",
	description : "1 creature 1d8/PP Lightning damage; save halves; disadvantage on save if wearing heavy armor",
	descriptionFull : "As an action, you lash out at one creature you can see within 60 feet of you with tendrils of lightning. The target must make a Dexterity saving throw, with disadvantage if it's wearing heavy armor. The target takes 1d8 lightning damage per psi point spent on a failed save, or half as much damage on a successful one.",
	firstCol : "1-7"
};
PsionicsList["mw3-wall of clouds"] = {
	name : "Wall of Clouds",
	source : ["UA:TMC", 20],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 a",
	range : "60 ft",
	duration : "Conc, 10 min",
	description : "You create a 60-ft long, 15-ft high, 1-ft thick wall of clouds that blocks vision; it must start in range",
	descriptionFull : "As an action, you create a wall of clouds, at least one portion of which must be within 60 feet of you. The wall is 60 feet long, 15 feet high, and 1 foot thick. The wall lasts until your concentration ends. Creatures can pass through it without hindrance, but the wall blocks vision.",
	firstCol : 2
};
PsionicsList["mw4-whirlwind"] = {
	name : "Whirlwind",
	source : ["UA:TMC", 20],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 a",
	range : "60 ft",
	duration : "Instantaneous",
	save : "Str",
	description : "20-ft rad all crea save or 1d6 Bludg. dmg & moved to chosen empty space in rad; obj moved as well",
	descriptionFull : "As an action, choose a point you can see within 60 feet of you. Winds howl in a 20-foot-radius sphere centered on that point. Each creature in the sphere must succeed on a Strength saving throw or take 1d6 bludgeoning damage and be moved to an unoccupied space of your choice in the sphere. Any loose object in the sphere is moved to an unoccupied space of your choice within it if the object weighs no more than 100 pounds.",
	firstCol : 2
};
PsionicsList["mw5-lightning leap"] = {
	name : "Lightning Leap",
	source : ["UA:TMC", 20],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 a",
	range : "60-ft line",
	duration : "Instantaneous",
	save : "Dex",
	description : "60-ft long 5-ft wide all 6d6(+1d6/extra PP) Lightning dmg; save halves; you teleport to spot on line",
	descriptionFull : "As an action, you let loose a line of lightning that is 60 feet long and 5 feet wide. Each creature in the line must make a Dexterity saving throw, taking 6d6 lightning damage on a failed save, or half as much damage on a successful one. You can then teleport to an unoccupied space touched by the line." + "\n   " + "You can increase this ability's damage by 1d6 per additional psi point spent on it.",
	firstCol : "5-7"
};
PsionicsList["mw6-wall of thunder"] = {
	name : "Wall of Thunder",
	source : ["UA:TMC", 21],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 a",
	range : "60 ft",
	duration : "Conc, 10 min",
	save : "Str",
	description : "60\u00D71\u00D715 ft (l\u00D7w\u00D7h) wall; diff. terr.; crea start/move in save or 6d6 Thunder dmg, push 30 ft, prone",
	descriptionMetric : "20×0,3×5 m (l×w×h) wall; diff. terr.; crea start/move in save or 6d6 Thunder dmg, push 10m, prone",
	descriptionFull : "As an action, you create a wall of thunder, at least one portion of which must be within 60 feet of you. The wall is 60 feet long, 15 feet high, and 1 foot thick. The wall lasts until your concentration ends. Every foot moved through the wall costs 1 extra foot of movement. When a creature moves into the wall's space for the first time on a turn or starts its turn there, that creature must succeed on a Strength saving throw, or it takes 6d6 thunder damage, is pushed in a straight line up to 30 feet away from the wall, and is knocked prone.",
	firstCol : 6
};
PsionicsList["mw7-thunder clap"] = {
	name : "Thunder Clap",
	source : ["UA:TMC", 21],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 a",
	range : "60 ft",
	duration : "Next turn end",
	save : "Con",
	description : "20-ft rad all save or 8d6 Thunder dmg and stunned until your next turn ends; save halves \u0026 no stun",
	descriptionFull : "As an action, choose a point you can see within 60 feet of you. Thunder energy erupts in a 20-foot-radius sphere centered on that point. Each creature in that area must make Constitution saving throw. On a failed save, a target takes 8d6 thunder damage, and it is stunned until the end of your next turn. On a successful save, a target takes half as much damage.",
	firstCol : 7
};
//the mastery of wood and earth discipline (contributed by Justin W.)
PsionicsList["mastery of wood and earth"] = {
	name : "Mastery of Wood and Earth",
	nameShort : "Mastery of Wood \u0026 Earth",
	classes : ["mystic"],
	source : ["UA:TMC", 21],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 bns",
	range : "Self",
	components : "Psi-F.",
	duration : "While focused",
	description : "You gain a +1 bonus to AC",
	descriptionFull : "You attune your mind to seize control of wood and earth." + PsychicFocus + "While focused on this discipline, you have a +1 bonus to AC.",
	firstCol : "checkbox",
	dependencies : ["mwe1-animate weapon", "mwe2-warp weapon", "mwe3-warp armor", "mwe4-wall of wood", "mwe5-armored form", "mwe6-animate earth"]
};
PsionicsList["mwe1-animate weapon"] = {
	name : "Animate Weapon",
	source : ["UA:TMC", 21],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 a",
	range : "30 ft",
	duration : "Instantaneous",
	description : "1 crea attacked by your 1-handed melee wea; use discipline score for atk/dmg; +1d10/PP Force dmg",
	descriptionFull : "As an action, your mind seizes control of a one-handed melee weapon you're holding. The weapon flies toward one creature you can see within 30 feet of you and makes a one-handed melee weapon attack against it, using your discipline attack modifier for the attack and damage rolls. On a hit, the weapon deals its normal damage, plus an extra 1d10 force damage per psi point spent on this ability. The weapon returns to your grasp after it attacks.",
	firstCol : "1-7"
};
PsionicsList["mwe2-warp weapon"] = {
	name : "Warp Weapon",
	source : ["UA:TMC", 21],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 a",
	range : "60 ft",
	duration : "Next turn end",
	save : "Str",
	description : "1 crea save or 1 chosen nonmagical wea it is holding can't be used to attack until your next turn ends",
	descriptionFull : "As an action, choose one nonmagical weapon held by one creature you can see within 60 feet of you. That creature must succeed on a Strength saving throw, or the chosen weapon can't be used to attack until the end of your next turn.",
	firstCol : 2
};
PsionicsList["mwe3-warp armor"] = {
	name : "Warp Armor",
	source : ["UA:TMC", 21],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 a",
	range : "60 ft",
	duration : "Next turn end",
	save : "Con",
	description : "1 crea wearing a nonmagical armor save or have AC 10 + its Dex modifier until your next turn ends",
	descriptionFull : "As an action, choose a nonmagical suit of armor worn by one creature you can see within 60 feet of you. That creature must succeed on a Constitution saving throw, or the creature's AC becomes 10 + its Dexterity modifier until the end of your next turn.",
	firstCol : 3
};
PsionicsList["mwe4-wall of wood"] = {
	name : "Wall of Wood",
	source : ["UA:TMC", 21],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 a",
	range : "60 ft",
	duration : "Conc, 1 h",
	description : "Create 60-ft long, 15-ft high, 1-ft thick wall of solid wood; each 5-ft section has AC 12 and 100 hp",
	descriptionFull : "As an action, you create a wall of wood at least one portion of which must be within 60 feet of you. The wall is 60 feet long, 15 feet high, and 1 foot thick. The wall lasts until your concentration ends. Each 5-foot wide section of the wall has AC 12 and 100 hit points. Breaking one section creates a 5-foot by 5-foot hole in it, but the wall otherwise remains intact.",
	firstCol : 3
};
PsionicsList["mwe5-armored form"] = {
	name : "Armored Form",
	source : ["UA:TMC", 21],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 bns",
	range : "Self",
	duration : "Conc, 1 min",
	description : "You gain resistance to Bludgeoning, Piercing, and Slashing damage",
	descriptionFull : "As a bonus action, you gain resistance to bludgeoning, piercing, and slashing damage, which lasts until your concentration ends.",
	firstCol : 6
};
PsionicsList["mwe6-animate earth"] = {
	name : "Animate Earth",
	source : ["UA:TMC", 21],
	psionic : true,
	level : 1,
	school : "Wu Jen",
	time : "1 a",
	range : "120 ft",
	duration : "Conc, 1 h",
	description : "Summon an earth elemental that obeys your verbal commands; See Monster Manual, page 124",
	descriptionFull : "As an action, you cause an earth elemental to appear in an unoccupied space you can see within 120 feet of you. The elemental lasts until your concentration ends, and it obeys your verbal commands. In combat, roll for its initiative, and choose its behavior during its turns. When this effect ends, the elemental disappears. See the Monster Manual for its stat block.",
	firstCol : 7
};
//the nomadic arrow discipline (contributed by mattohara)
PsionicsList["nomadic arrow"] = {
	name : "Nomadic Arrow",
	classes : ["mystic"],
	source : ["UA:TMC", 21],
	psionic : true,
	level : 1,
	school : "Nomad",
	time : "1 bns",
	range : "Self",
	components : "Psi-F.",
	duration : "While focused",
	description : "Your ranged weapon attacks ignore disadvantage, but can't get adv. if it was subject to dis.",
	descriptionFull : "You imbue a ranged weapon with a strange semblance of sentience, allowing it to unerringly find its mark." + PsychicFocus + "While you are focused on this discipline, any attack roll you make for a ranged weapon attack ignores disadvantage. If disadvantage would normally apply to the roll, that roll also can't benefit from advantage.",
	firstCol : "checkbox",
	dependencies : ["na1-speed dart", "na2-seeking missile", "na3-faithful archer"]
};
PsionicsList["na1-speed dart"] = {
	name : "Speed Dart",
	source : ["UA:TMC", 21],
	psionic : true,
	level : 1,
	school : "Nomad",
	time : "1 bns",
	range : "Self",
	duration : "This turn end",
	description : "1 ranged weapon gains psionic power; next hit with it deals +1d10/PP Psychic damage",
	descriptionFull : "As a bonus action, you imbue one ranged weapon you hold with psionic power. The next attack you make with it that hits before the end of the current turn deals an extra 1d10 psychic damage per psi point spent.",
	firstCol : "1-7"
};
PsionicsList["na2-seeking missile"] = {
	name : "Seeking Missile",
	source : ["UA:TMC", 21],
	psionic : true,
	level : 1,
	school : "Nomad",
	time : "1 rea",
	range : "Self",
	duration : "Instantaneous",
	description : "When you miss with a ranged attack, you can reroll the attack roll against the same target",
	descriptionFull : "As a reaction when you miss with a ranged weapon attack, you can repeat the attack roll against the same target.",
	firstCol : 2
};
PsionicsList["na3-faithful archer"] = {
	name : "Faithful Archer",
	source : ["UA:TMC", 21],
	psionic : true,
	level : 1,
	school : "Nomad",
	time : "1 bns",
	range : "Self",
	duration : "Conc, 1 min",
	description : "1 ranged weapon gains sentience; free attack with it at the start of each turn; thrown weapons return",
	descriptionFull : "As a bonus action, you imbue a ranged weapon with a limited sentience. Until your concentration ends, you can make an extra attack with the weapon at the start of each of your turns (no action required). If it is a thrown weapon, it returns to your grasp each time you make any attack with it.",
	firstCol : 5
};
//the nomadic chameleon discipline (contributed by mattohara)
PsionicsList["nomadic chameleon"] = {
	name : "Nomadic Chameleon",
	classes : ["mystic"],
	source : ["UA:TMC", 22],
	psionic : true,
	level : 1,
	school : "Nomad",
	time : "1 bns",
	range : "Self",
	components : "Psi-F.",
	duration : "While focused",
	description : "You gain advantage on Dexterity (Stealth) checks",
	descriptionFull : "You create a screen of psychic power that distorts your appearance, allowing you to blend into the background or even turn invisible." + PsychicFocus + "While focused on this discipline, you have advantage on Dexterity (Stealth) checks.",
	firstCol : "checkbox",
	dependencies : ["nc1-chameleon", "nc2-step from sight", "nc3-enduring invisibility"]
};
PsionicsList["nc1-chameleon"] = {
	name : "Chameleon",
	source : ["UA:TMC", 22],
	psionic : true,
	level : 1,
	school : "Nomad",
	time : "1 a",
	range : "Self",
	duration : "This turn end",
	description : "You can hide, regardless of requirements; at end of turn, remain hidden only if requirements are met",
	descriptionFull : "As an action, you can attempt to hide even if you fail to meet the requirements needed to do so. At the end of the current turn, you remain hidden only if you then meet the normal requirements for hiding.",
	firstCol : 2
};
PsionicsList["nc2-step from sight"] = {
	name : "Step from Sight",
	source : ["UA:TMC", 22],
	psionic : true,
	level : 1,
	school : "Nomad",
	time : "1 bns",
	range : "60 ft",
	duration : "Conc, 1 min",
	description : "You(+1 crea/extra PP) become invisible; attacking/targeting/affecting other crea makes a crea visible",
	descriptionFull : "As a bonus action, cloak yourself from sight. You can target one additional creature for every additional psi point you spend on this ability. The added targets must be visible to you and within 60 feet of you." + "\n   " + "Each target turns invisible and remains so until your concentration ends or until immediately after it targets, damages, or otherwise affects any creature with an attack, a spell, or another ability.",
	firstCol : "3-7"
};
PsionicsList["nc3-enduring invisibility"] = {
	name : "Enduring Invisibility",
	source : ["UA:TMC", 22],
	psionic : true,
	level : 1,
	school : "Nomad",
	time : "1 bns",
	range : "Self",
	duration : "Conc, 1 min",
	description : "You turn invisible for the duration",
	descriptionFull : "As a bonus action, you turn invisible and remain so until your concentration ends.",
	firstCol : 7
};
//the nomadic mind discipline (contributed by mattohara)
PsionicsList["nomadic mind"] = {
	name : "Nomadic Mind",
	classes : ["mystic"],
	source : ["UA:TMC", 22],
	psionic : true,
	level : 1,
	school : "Nomad",
	time : "1 bns",
	range : "Self",
	components : "Psi-F.",
	duration : "While focused",
	description : "You gain proficiency with one skill, tool, or language",
	descriptionFull : "You dispatch part of your psyche into the noosphere, the collective vista of minds and knowledge possessed by living things." + PsychicFocus + "Whenever you focus on this discipline, you choose one skill or tool and have proficiency with it until your focus ends. Alternatively, you gain the ability to read and write one language of your choice until your focus ends.",
	firstCol : "checkbox",
	dependencies : ["nm1-wandering mind", "nm2-find creature", "nm3-item lore", "nm4-psychic speech", "nm5-wandering eye", "nm6-phasing eye"]
};
PsionicsList["nm1-wandering mind"] = {
	name : "Wandering Mind",
	source : ["UA:TMC", 22],
	psionic : true,
	level : 1,
	school : "Nomad",
	time : "10 min",
	range : "Self",
	duration : "1 h",
	description : "Gain prof. with 1 skill/2PP: Animal Hand., History, Medicine, Nature, Performance, Religion, Survival",
	descriptionFull : "You enter a deep contemplation. If you concentrate for this option's full duration, you then gain proficiency with up to three of the following skills (one skill for every 2 psi points spent): Animal Handling, Arcana, History, Medicine, Nature, Performance, Religion, and Survival. The benefit lasts for 1 hour, no concentration required.",
	firstCol : "2-6"
};
PsionicsList["nm2-find creature"] = {
	name : "Find Creature",
	source : ["UA:TMC", 22],
	psionic : true,
	level : 1,
	school : "Nomad",
	time : "1 h",
	range : "Self",
	duration : "Instantaneous",
	description : "Learn general location of a creature, within 1-3 miles; if it's on other plane, learn which plane instead",
	descriptionFull : "You cast your mind about for information about a specific creature. If you concentrate for this option's full duration, you then gain a general understanding of the creature's current location. You learn the region, city, town, village, or district where it is, pinpointing an area between 1 and 3 miles on a side (DM's choice). If the creature is on another plane of existence, you instead learn which plane.",
	firstCol : 2
};
PsionicsList["nm3-item lore"] = {
	name : "Item Lore",
	source : ["UA:TMC", 22],
	psionic : true,
	level : 1,
	school : "Nomad",
	time : "1 h",
	range : "5 ft",
	duration : "Instantaneous",
	description : "1 magical item or magic-imbued crea/obj; learn properties, how to use, and spells affecting it",
	descriptionFull : "You carefully study an item. If you concentrate for this option's full duration while remaining within 5 feet of the item, you then gain the benefits of an identify spell cast on that item.",
	firstCol : 3
};
PsionicsList["nm4-psychic speech"] = {
	name : "Psychic Speech",
	source : ["UA:TMC", 22],
	psionic : true,
	level : 1,
	school : "Nomad",
	time : "1 a",
	range : "Self",
	duration : "1 h",
	description : "You understands all spoken/written languages and all with a language can understand what you say",
	descriptionFull : "As an action, you attune your mind to the psychic imprint of all language. For 1 hour, you gain the ability to understand any language you hear or attempt to read. In addition, when you speak, all creatures that can understand a language understand what you say, regardless of what language you use.",
	firstCol : 5
};
PsionicsList["nm5-wandering eye"] = {
	name : "Wandering Eye",
	source : ["UA:TMC", 22],
	psionic : true,
	level : 1,
	school : "Nomad",
	time : "1 a",
	range : "60 ft",
	duration : "Conc, 1 h",
	description : "Create invisible, moving (unlimited range, 30ft/rnd) 1\" magic eye with darkvision you see through",
	description : "Create invisible, moving (unlimited range, 10m/rnd) 2,5cm magic eye /w darkvision you see through",
	descriptionFull : "As an action, you create a psychic sensor within 60 feet of you. The sensor lasts until your concentration ends. The sensor is invisible and hovers in the air. You mentally receive visual information from it, which has normal vision and darkvision with a range of 60 feet. The sensor can look in all directions. As an action, you can move the sensor up to 30 feet in any direction. There is no limit to how far away from you the eye can move, but it can't enter another plane of existence. A solid barrier blocks the eye's movement, but the eye can pass through an opening as small as 1 inch in diameter.",
	firstCol : 6
};
PsionicsList["nm6-phasing eye"] = {
	name : "Phasing Eye",
	source : ["UA:TMC", 22],
	psionic : true,
	level : 1,
	school : "Nomad",
	time : "1 a",
	range : "60 ft",
	duration : "Conc, 1 h",
	description : "As Wandering Eye above, except the eye can move through objects but can't end its movement in one",
	descriptionFull : "As Wandering Eye above, except the eye can move through solid objects but can't end its movement in one. If it does so, the effect immediately ends.",
	firstCol : 7
};
//the nomadic step discipline (contributed by Justin W.)
PsionicsList["nomadic step"] = {
	name : "Nomadic Step",
	classes : ["mystic"],
	source : ["UA:TMC", 22],
	psionic : true,
	level : 1,
	school : "Nomad",
	time : "1 bns",
	range : "Self",
	components : "Psi-F.",
	duration : "While focused",
	description : "1/turn; after you teleport, increase speed by 10 ft until end of your turn",
	descriptionFull : "You exert your mind on the area around you, twisting the intraplanar pathways you perceive to allow instantaneous travel." + PsychicFocus + "After you teleport on your turn while focused on this discipline, your walking speed increases by 10 feet until the end of the turn, as you are propelled by the magic of your teleportation. You can receive this increase only once per turn.",
	firstCol : "checkbox",
	dependencies : ["ns1-step of a dozen paces", "ns2-nomadic anchor", "ns3-defensive step", "ns4-there and back again", "ns5-transposition", "ns6-baleful transposition", "ns7-phantom caravan", "ns8-nomad's gate"]
};
PsionicsList["ns1-step of a dozen paces"] = {
	name : "Step of a Dozen Paces",
	source : ["UA:TMC", 22],
	psionic : true,
	level : 1,
	school : "Nomad",
	time : "1 bns",
	range : "Self",
	duration : "Instantaneous",
	description : "You teleport up to 20 ft/PP to where you can see, instead of moving this turn; only if not moved yet",
	descriptionFull : "If you haven't moved yet on your turn, you take a bonus action to teleport up to 20 feet per psi point spent to an unoccupied space you can see, and your speed is reduced to 0 until the end of the turn.",
	firstCol : "1-7"
};
PsionicsList["ns2-nomadic anchor"] = {
	name : "Nomadic Anchor",
	source : ["UA:TMC", 23],
	psionic : true,
	level : 1,
	school : "Nomad",
	time : "1 a",
	range : "120 ft",
	duration : "8 h",
	description : "Create 5-ft cu teleport anchor; any teleport from this discipline can go to it if within range",
	descriptionFull : "As an action, you create an invisible, intangible teleportation anchor in a 5-foot cube you can see within 120 feet of you. For the next 8 hours, whenever you use this psionic discipline to teleport, you can instead teleport to the anchor, even if you can't see it, but it must be within range of the teleportation ability.",
	firstCol : 1
};
PsionicsList["ns3-defensive step"] = {
	name : "Defensive Step",
	source : ["UA:TMC", 23],
	psionic : true,
	level : 1,
	school : "Nomad",
	time : "1 rea",
	range : "Self",
	duration : "Instantaneous",
	description : "When hit by an attack, you gain +4 AC, and then teleport 10 ft to a space you can see",
	descriptionFull : "When you are hit by an attack, you can use your reaction to gain a +4 bonus to AC against that attack, possibly turning it into a miss. You then teleport up to 10 feet to an unoccupied space you can see.",
	firstCol : 2
};
PsionicsList["ns4-there and back again"] = {
	name : "There and Back Again",
	source : ["UA:TMC", 23],
	psionic : true,
	level : 1,
	school : "Nomad",
	time : "1 bns",
	range : "Self",
	duration : "End of Turn",
	description : "You teleport 20 ft and move half your speed; you may teleport back to starting spot at end of your turn",
	descriptionFull : "As a bonus action, you teleport up to 20 feet to an unoccupied space you can see and then move up to half your speed. At the end of your turn, you can teleport back to the spot you occupied before teleporting, unless it is now occupied or on a different plane of existence.",
	firstCol : 2
};
PsionicsList["ns5-transposition"] = {
	name : "Transposition",
	source : ["UA:TMC", 23],
	psionic : true,
	level : 1,
	school : "Nomad",
	time : "1 bns",
	range : "60 ft",
	duration : "Instantaneous",
	description : "Willing creature and you teleport, swapping places, instead of moving this turn; only if not moved yet",
	descriptionFull : "If you haven't moved yet on your turn, choose an ally you can see within 60 feet of you. As a bonus action, you and that creature teleport, swapping places, and your speed is reduced to 0 until the end of the turn. This ability fails and is wasted if either of you can't fit in the destination space.",
	firstCol : 3
};
PsionicsList["ns6-baleful transposition"] = {
	name : "Baleful Transposition",
	source : ["UA:TMC", 23],
	psionic : true,
	level : 1,
	school : "Nomad",
	time : "1 a",
	range : "120 ft",
	duration : "Instantaneous",
	save : "Wis",
	description : "1 creature save or it and you teleport, swapping places",
	descriptionFull : "As an action, choose one creature you can see within 120 feet of you. That creature must make a Wisdom saving throw. On a failed save, you and that creature teleport, swapping places. This ability fails and is wasted if either of you can't fit in the destination space.",
	firstCol : 5
};
PsionicsList["ns7-phantom caravan"] = {
	name : "Phantom Caravan",
	source : ["UA:TMC", 23],
	psionic : true,
	level : 1,
	school : "Nomad",
	time : "1 a",
	range : "60 ft",
	duration : "Instantaneous",
	description : "You and up to 6 willing creatures teleport up to 1 mile to a spot you can see",
	descriptionFull : "As an action, you and up to six willing creatures of your choice that you can see within 60 feet of you teleport up to 1 mile to a spot you can see. If there isn't an open space for all the targets to occupy at the arrival point, this ability fails and is wasted.",
	firstCol : 6
};
PsionicsList["ns8-nomad's gate"] = {
	name : "Nomad's Gate",
	source : ["UA:TMC", 23],
	psionic : true,
	level : 1,
	school : "Nomad",
	time : "1 a",
	range : "5 ft",
	duration : "Conc, 1 h",
	description : "Create a 5-ft cu in range, and another up to 1 mile away; anyone entering one, teleports to the other",
	descriptionFull : "As an action, you create a 5-foot cube of dim, gray light within 5 feet of you. You create an identical cube at any point of your choice within 1 mile that you have viewed within the past 24 hours. Until your concentration ends, anyone entering one of the cubes immediately teleports to the other one, appearing in an unoccupied space next to it. The teleportation fails if there is no space for the creature to appear in.",
	firstCol : 7
};
//the precognition discipline (contributed by Justin W.)
PsionicsList["precognition"] = {
	name : "Precognition",
	classes : ["mystic"],
	source : ["UA:TMC", 23],
	psionic : true,
	level : 1,
	school : "Awake",
	time : "1 bns",
	range : "Self",
	components : "Psi-F.",
	duration : "While focused",
	description : "You gain advangage on initiative rolls",
	descriptionFull : "By analyzing information around you, from subtle hints to seemingly disconnected facts, you learn to weave a string of probabilities in an instant that gives you extraordinary insights." + PsychicFocus + "While focused on this discipline, you have advantage on initiative rolls.",
	firstCol : "checkbox",
	dependencies : ["p1-precognitive hunch", "p2-all-around sight", "p3-danger sense", "p4-victory before battle"]
};
PsionicsList["p1-precognitive hunch"] = {
	name : "Precognitive Hunch",
	source : ["UA:TMC", 23],
	psionic : true,
	level : 1,
	school : "Awake",
	time : "1 bns",
	range : "Self",
	duration : "Conc, 1 min",
	description : "You add 1d4 to attack rolls, saving throws, and ability checks",
	descriptionFull : "As a bonus action, you open yourself to receive momentary insights that improve your odds of success; until your concentration ends, whenever you make an attack roll, a saving throw, or an ability check, you roll a d4 and add it to the total.",
	firstCol : 2
};
PsionicsList["p2-all-around sight"] = {
	name : "All-Around Sight",
	source : ["UA:TMC", 23],
	psionic : true,
	level : 1,
	school : "Awake",
	time : "1 rea",
	range : "Self",
	duration : "Instantaneous",
	description : "After an attack hits you, impose disadvantage on that attack roll",
	descriptionFull : "In response to an attack hitting you, you use your reaction to impose disadvantage on that attack roll, possibly causing it to miss.",
	firstCol : 3
};
PsionicsList["p3-danger sense"] = {
	name : "Danger Sense",
	source : ["UA:TMC", 23],
	psionic : true,
	level : 1,
	school : "Awake",
	time : "1 a",
	range : "Self",
	duration : "Conc, 8 h",
	description : "You gain +10 on the initiative roll, can't be surprised, and attacks against you can't gain advantage",
	descriptionFull : "As an action, you create a psychic model of reality in your mind and set it to show you a few seconds into the future. Until your concentration ends, you can't be surprised, attack rolls against you can't gain advantage, and you gain a +10 bonus to initiative.",
	firstCol : 5
};
PsionicsList["p4-victory before battle"] = {
	name : "Victory Before Battle",
	source : ["UA:TMC", 23],
	psionic : true,
	level : 1,
	school : "Awake",
	time : "\u2014",
	range : "60-ft rad",
	duration : "Instantaneous",
	description : "Use when rolling initiative; grant yourself and up to 5 creatures +10 on the initiative roll",
	descriptionFull : "When you roll initiative, you can use this ability to grant yourself and up to five creatures of your choice within 60 feet of you a +10 bonus to initiative.",
	firstCol : 7
};
//the psionic restoration discipline (contributed by Justin W.)
PsionicsList["psionic restoration"] = {
	name : "Psionic Restoration",
	classes : ["mystic"],
	source : ["UA:TMC", 23],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "1 bns",
	range : "Self",
	components : "Psi-F.",
	duration : "While focused",
	description : "While focused, you can touch a creature with 0 hp as a bonus action and stabilize it",
	descriptionFull : "You wield psionic energy to cure wounds and restore health to yourself and others." + PsychicFocus + "While focused on this discipline, you can use a bonus action to touch a creature that has 0 hit points and stabilize it.",
	firstCol : "checkbox",
	dependencies : ["pr1-mend wounds", "pr2-restore health", "pr3-restore life", "pr4-restore vigor"]
};
PsionicsList["pr1-mend wounds"] = {
	name : "Mend Wounds",
	source : ["UA:TMC", 23],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "1 a",
	range : "Touch",
	duration : "Instantaneous",
	description : "1 creature is healed for 1d8/PP hp",
	descriptionFull : "As an action, you can spend psi points to restore hit points to one creature you touch. The creature regains 1d8 hit points per psi point spent.",
	firstCol : "1-7"
};
PsionicsList["pr2-restore health"] = {
	name : "Restore Health",
	source : ["UA:TMC", 23],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "1 a",
	range : "Touch",
	duration : "Instantaneous",
	description : "1 creature is cured of either blindness, deafness, paralysis, poison, or 1 disease",
	descriptionFull : "As an action, you touch one creature and remove one of the following conditions from it: blinded, deafened, paralyzed, or poisoned. Alternatively, you remove one disease from the creature.",
	firstCol : 3
};
PsionicsList["pr3-restore life"] = {
	name : "Restore Life",
	source : ["UA:TMC", 23],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "1 a",
	range : "Touch",
	duration : "Instantaneous",
	description : "Resurrects 1 crea that has died in last minute to 1 hp, if not missing vital body parts or died of old age",
	descriptionFull : "As an action, you touch one creature that has died within the last minute. The creature returns to life with 1 hit point. This ability can't return to life a creature that has died of old age, nor can it restore a creature missing any vital body parts.",
	firstCol : 5
};
PsionicsList["pr4-restore vigor"] = {
	name : "Restore Vigor",
	source : ["UA:TMC", 24],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "1 a",
	range : "Touch",
	duration : "Instantaneous",
	description : "1 crea removes either 1 ability score reduction, 1 hp max reduction effect, or 1 level of exhaustion",
	descriptionFull : "As an action, you can touch one creature and choose one of the following: remove any reductions to one of its ability scores, remove one effect that reduces its hit point maximum, or reduce its exhaustion level by one.",
	firstCol : 7
};
//the psionic weapon discipline (contributed by Justin W.)
PsionicsList["psionic weapon"] = {
	name : "Psionic Weapon",
	classes : ["mystic"],
	source : ["UA:TMC", 24],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "1 bns",
	range : "Self",
	components : "Psi-F.",
	duration : "While focused",
	description : "1 weapon or unarmed strike does Psychic dmg and counts as magical; no Str or Dex to dmg until CL6",
	descriptionFull : "You have learned how to channel psionic energy into your attacks, lending them devastating power." + PsychicFocus + "Whenever you focus on this discipline, choose one weapon you're holding or your unarmed strike. When you attack with it while focused on this discipline, its damage is psychic and magical, rather than its normal damage type. Until you reach 6th level as a mystic, you don't add your Strength or Dexterity modifier to the psychic attack's damage rolls.",
	firstCol : "checkbox",
	dependencies : ["pw1-ethereal weapon", "pw2-lethal strike", "pw3-augmented weapon"]
};
PsionicsList["pw1-ethereal weapon"] = {
	name : "Ethereal Weapon",
	source : ["UA:TMC", 24],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "1 bns",
	range : "Self",
	duration : "Next turn end",
	description : "1 crea save or auto hit by your next wea/unarmed atk; save halves atk dmg \u0026 negates any side-effects",
	descriptionFull : "As a bonus action, you temporarily transform one weapon you're holding or your unarmed strike into pure psionic energy. The next attack you make with it before the end of your turn ignores the target's armor, requiring no attack roll. Instead, the target makes a Dexterity saving throw against this discipline. On a failed save, the target takes the attack's normal damage and suffers its additional effects. On a successful save, the target takes half damage from the attack but suffers no additional effects that would normally be imposed on a hit.",
	firstCol : 1
};
PsionicsList["pw2-lethal strike"] = {
	name : "Lethal Strike",
	source : ["UA:TMC", 24],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "1 bns",
	range : "Self",
	duration : "Next turn end",
	description : "Your next weapon or unarmed attack that hits does +1d10/PP Psychic damage",
	descriptionFull : "As a bonus action, you imbue a weapon you're holding or your unarmed strike with psychic energy. The next time you hit with it before the end of your turn, it deals an extra 1d10 psychic damage per psi point spent.",
	firstCol : "1-7"
};
PsionicsList["pw3-augmented weapon"] = {
	name : "Augmented Weapon",
	source : ["UA:TMC", 24],
	psionic : true,
	level : 1,
	school : "Immor",
	time : "1 bns",
	range : "Touch",
	duration : "Conc, 10 min",
	description : "1 weapon becomes a magic weapon with a +3 bonus to its attack and damage rolls",
	descriptionFull : "As a bonus action, touch one simple or martial weapon. Until your concentration ends, that weapon becomes a magic weapon with a +3 bonus to its attack and damage rolls.",
	firstCol : 5
};
//the psychic assault discipline
PsionicsList["psychic assault"] = {
	name : "Psychic Assault",
	classes : ["mystic"],
	source : ["UA:TMC", 24],
	psionic : true,
	level : 1,
	school : "Awake",
	time : "1 bns",
	range : "Self",
	components : "Psi-F.",
	duration : "While focused",
	description : "You gain a +2 bonus to damage rolls with psionic talents that deal Psychic damage",
	descriptionFull : "You wield your mind like a weapon, unleashing salvos of psionic energy." + PsychicFocus + "While focused on this discipline, you gain a +2 bonus to damage rolls with psionic talents that deal psychic damage.",
	firstCol : "checkbox",
	dependencies : ["pa1-psionic blast", "pa2-ego whip", "pa3-id insinuation", "pa4-psychic blast", "pa5-psychic crush"]
};
PsionicsList["pa1-psionic blast"] = {
	name : "Psionic Blast",
	source : ["UA:TMC", 24],
	psionic : true,
	level : 1,
	school : "Awake",
	time : "1 a",
	range : "60 ft",
	duration : "Instantaneous",
	description : "1 creature takes 1d8/PP Psychic damage",
	descriptionFull : "As an action, choose one creature you can see within 60 feet of you. The target takes 1d8 psychic damage per psi point spent on this ability.",
	firstCol : "1-7"
};
PsionicsList["pa2-ego whip"] = {
	name : "Ego Whip",
	source : ["UA:TMC", 24],
	psionic : true,
	level : 1,
	school : "Awake",
	time : "1 a",
	range : "60 ft",
	duration : "Instantaneous",
	save : "Int",
	description : "1 crea save or 3d8 Psychic dmg, next turn just Dodge/Disengage/Hide action; save half \u0026 act normal",
	descriptionFull : "As an action, choose one creature you can see within 60 feet of you. The target must make an Intelligence saving throw. On a failed save, the creature takes 3d8 psychic damage, and it is filled with self-doubt, leaving it able to use its action on its next turn only to take the Dodge, Disengage, or Hide action. On a successful saving throw, it takes half as much damage.",
	firstCol : 3
};
PsionicsList["pa3-id insinuation"] = {
	name : "Id Insinuation",
	source : ["UA:TMC", 24],
	psionic : true,
	level : 1,
	school : "Awake",
	time : "1 a",
	range : "60 ft",
	duration : "Instantaneous",
	save : "Int",
	description : "1 crea save or 5d8 Psychic dmg, next turn only Dodge/Attack action; save halves \u0026 act normal",
	descriptionFull : "As an action, choose one creature you can see within 60 feet of you. The target must make an Intelligence saving throw. On a failed save, the creature takes 5d8 psychic damage, and it goes into a fury, as its id runs rampant. On its next turn, it can use its action only to take the Dodge or Attack action. On a successful save, it takes half as much damage.",
	firstCol : 5
};
PsionicsList["pa4-psychic blast"] = {
	name : "Psychic Blast",
	source : ["UA:TMC", 24],
	psionic : true,
	level : 1,
	school : "Awake",
	time : "1 a",
	range : "60-ft cone",
	duration : "Instantaneous",
	save : "Int",
	description : "All creatures 8d8(+2d8/extra PP) Psychic dmg; save halves",
	descriptionFull : "As an action, you unleash devastating psychic energy in a 60-foot cone. Each creature in that area must make an Intelligence saving throw, taking 8d8 psychic damage on a failed save, or half as much damage on a successful one. You can increase the damage by 2d8 if you spend 1 more psi point on this ability.",
	firstCol : "6-7"
};
PsionicsList["pa5-psychic crush"] = {
	name : "Psychic Crush",
	source : ["UA:TMC", 24],
	psionic : true,
	level : 1,
	school : "Awake",
	time : "1 a",
	range : "120 ft",
	duration : "Instantaneous",
	save : "Int",
	description : "20-ft cu all crea save or 8d8 Psychic dmg \u0026 stunned until your next turn ends; save halves \u0026 no stun",
	descriptionFull : "As an action, you create a 20-foot cube of psychic energy within 120 feet of you. Each creature in that area must make an Intelligence saving throw. On a failed save, a target takes 8d8 psychic damage and is stunned until the end of your next turn. On a successful save, a target takes half as much damage.",
	firstCol : 7
};
//the psychic disruption discipline (contributed by Justin W.)
PsionicsList["psychic disruption"] = {
	name : "Psychic Disruption",
	classes : ["mystic"],
	source : ["UA:TMC", 24],
	psionic : true,
	level : 1,
	school : "Awake",
	time : "1 bns",
	range : "Self",
	components : "Psi-F.",
	duration : "While focused",
	description : "You have advantage on Charisma (Deception) checks",
	descriptionFull : "You create psychic static that disrupts other creatures' ability to think clearly." + PsychicFocus + "While focused on this discipline, you have advantage on Charisma (Deception) checks.",
	firstCol : "checkbox",
	dependencies : ["pd1-distracting haze", "pd2-daze", "pd3-mind storm"]
};
PsionicsList["pd1-distracting haze"] = {
	name : "Distracting Haze",
	source : ["UA:TMC", 24],
	psionic : true,
	level : 1,
	school : "Awake",
	time : "1 a",
	range : "60 ft",
	duration : "Conc, 1 min",
	save : "Int",
	description : "1 crea save or 1d10/PP Psychic dmg, can't see more than 10 ft; save halves and see normal",
	descriptionFull : "As an action, choose one creature you can see within 60 feet of you. That creature must make an Intelligence saving throw. On a failed save, it takes 1d10 psychic damage per psi point spent and can't see anything more than 10 feet from it until your concentration ends. On a successful save, it takes half as much damage.",
	firstCol : "1-7"
};
PsionicsList["pd2-daze"] = {
	name : "Daze",
	source : ["UA:TMC", 25],
	psionic : true,
	level : 1,
	school : "Awake",
	time : "1 a",
	range : "60 ft",
	duration : "Next turn end",
	save : "Int",
	description : "1 crea save or incapacitated until end of your next turn or it takes any damage",
	descriptionFull : "As an action, choose one creature you can see within 60 feet of you. That creature must make an Intelligence saving throw. On a failed save, the target is incapacitated until the end of your next turn or until it takes any damage.",
	firstCol : 3
};
PsionicsList["pd3-mind storm"] = {
	name : "Mind Storm",
	source : ["UA:TMC", 25],
	psionic : true,
	level : 1,
	school : "Awake",
	time : "1 a",
	range : "60 ft",
	duration : "Next turn end",
	save : "Wis",
	description : "20-ft rad all crea 6d8(+1d6/extra PP) Psychic dmg and dis. on saves; save halves and no dis. on saves",
	descriptionFull : "As an action, choose a point you can see within 60 feet of you. Each creature in a 20-foot-radius sphere centered on that point must make a Wisdom saving throw. On a failed save, a target takes 6d8 psychic damage and suffers disadvantage on all saving throws until the end of your next turn. On a successful save, a creature takes half as much damage. You can increase the damage by 1d6 per additional psi point spent on this ability.",
	firstCol : "5-7"
};
//the psychic inquisition discipline (contributed by Justin W.)
PsionicsList["psychic inquisition"] = {
	name : "Psychic Inquisition",
	classes : ["mystic"],
	source : ["UA:TMC", 25],
	psionic : true,
	level : 1,
	school : "Awake",
	time : "1 bns",
	range : "Self",
	components : "Psi-F.",
	duration : "While focused",
	description : "You know when a creature telepathically communicating with you is lying",
	descriptionFull : "You reach into a creature's mind to uncover information or plant ideas within it." + PsychicFocus + "While focused on this discipline, you know when a creature communicating with you via telepathy is lying.",
	firstCol : "checkbox",
	dependencies : ["pi1-hammer of inquisition", "pi2-forceful query", "pi3-ransack mind", "pi4-phantom idea"]
};
PsionicsList["pi1-hammer of inquisition"] = {
	name : "Hammer of Inquisition",
	source : ["UA:TMC", 25],
	psionic : true,
	level : 1,
	school : "Awake",
	time : "1 a",
	range : "60 ft",
	duration : "Instantaneous",
	save : "Int",
	description : "1 crea save or 1d10/PP Psychic dmg, dis. next Wis save before your next turn; save halves \u0026 no effects",
	descriptionFull : "As an action, choose one creature you can see within 60 feet of you. The target must make an Intelligence saving throw. On a failed save, it takes 1d10 psychic damage per psi point spent and suffers disadvantage on its next Wisdom saving throw before the end of your next turn. On a successful save, it takes half as much damage.",
	firstCol : "1-7"
};
PsionicsList["pi2-forceful query"] = {
	name : "Forceful Query",
	source : ["UA:TMC", 25],
	psionic : true,
	level : 1,
	school : "Awake",
	time : "1 a",
	range : "30 ft",
	duration : "Instantaneous",
	save : "Int",
	description : "1 crea save or they must truthfully answer a yes or no question (charm effect)",
	descriptionFull : "As an action, you ask a question of one creature that can see and hear you within 30 feet of you. The question must be phrased so that it can be answered with a yes or no, otherwise this ability fails. The target must succeed on a Wisdom saving throw, or it replies with a truthful answer. A creature is immune to this ability if it is immune to being charmed.",
	firstCol : 2
};
PsionicsList["pi3-ransack mind"] = {
	name : "Ransack Mind",
	source : ["UA:TMC", 25],
	psionic : true,
	level : 1,
	school : "Awake",
	time : "1 h",
	range : "30 ft",
	duration : "12/24/48 h",
	save : "Int",
	description : "1 crea 3 saves if in range for full duration; learn key memories from 12/24/48 h (1/2/3 failed saves)",
	descriptionFull : "While you concentrate on this ability, you probe one creature's mind. The creature must remain within 30 feet of you, and you must be able to see it. If you reach the ability's full duration, the target must make three Intelligence saving throws, and you learn information from it based on the number of saving throws it fails." + "\n   " + "With one failed saving throw, you learn its key memories from the past 12 hours." + "\n   " + "With two failed saving throws, you learn its key memories from the past 24 hours." + "\n   " + "With three failed saving throws, you learn its key memories from the past 48 hours.",
	firstCol : 5
};
PsionicsList["pi4-phantom idea"] = {
	name : "Phantom Idea",
	source : ["UA:TMC", 25],
	psionic : true,
	level : 1,
	school : "Awake",
	time : "1 h",
	range : "30 ft",
	duration : "4/24/48 h",
	save : "Int",
	description : "1 crea 3 saves if in range for full duration; implant memory lasting 4/24/48 h (1/2/3 failed saves)",
	descriptionFull : "While you concentrate on this ability, you probe one creature's mind. The creature must remain within 30 feet of you, and you must be able to see it. If you reach the ability's full duration, the target must make three Intelligence saving throws, and you plant a memory or an idea in it, which lasts for a number of hours based on the number of saving throws it fails. You choose whether the idea or memory is trivial (such as “I had porridge for breakfast” or “Ale is the worst”) or personality-defining (“I failed to save my village from orc marauders and am therefore a coward” or “Magic is a scourge, so I renounce it”)." + "\n   " + "With one failed saving throw, the idea or memory lasts for the next 4 hours. With two failed saving throws, it lasts for 24 hours. With three failed saving throws, it lasts for 48 hours.",
	firstCol : 6
};
//the psychic phantoms discipline (contributed by Justin W.)
PsionicsList["psychic phantoms"] = {
	name : "Psychic Phantoms",
	classes : ["mystic"],
	source : ["UA:TMC", 25],
	psionic : true,
	level : 1,
	school : "Awake",
	time : "1 bns",
	range : "Self",
	components : "Psi-F.",
	duration : "While focused",
	description : "You gain advantage on Charisma (Deception) checks",
	descriptionFull : "Your power reaches into a creature's mind and causes it false perceptions." + PsychicFocus + "While focused on this discipline, you have advantage on Charisma (Deception) checks.",
	firstCol : "checkbox",
	dependencies : ["pp1-distracting figment", "pp2-phantom foe", "pp3-phantom betrayal", "pp4-phantom riches"]
};
PsionicsList["pp1-distracting figment"] = {
	name : "Distracting Figment",
	source : ["UA:TMC", 25],
	psionic : true,
	level : 1,
	school : "Awake",
	time : "1 a",
	range : "60 ft",
	duration : "Next turn end",
	save : "Int",
	description : "1 crea save or 1d10/PP Psychic dmg, can't use rea, melee atks vs. it have adv.; save halves \u0026 no effects",
	descriptionFull : "As an action, choose one creature you can see within 60 feet of you. The target must make an Intelligence saving throw. On a failed save, it takes 1d10 psychic damage per psi point spent and thinks it perceives a threatening creature just out of its sight; until the end of your next turn, it can't use reactions, and melee attack rolls against it have advantage. On a successful save, it takes half as much damage.",
	firstCol : "1-7"
};
PsionicsList["pp2-phantom foe"] = {
	name : "Phantom Foe",
	source : ["UA:TMC", 25],
	psionic : true,
	level : 1,
	school : "Awake",
	time : "1 a",
	range : "60 ft",
	duration : "Conc, 1 min",
	save : "Int",
	description : "1 crea save or no rea and 1d8(+1d8/extra PP) Psychic dmg at start its turn; save at end of each turn",
	descriptionFull : "As an action, choose one creature you can see within 60 feet of you. The target must make an Intelligence saving throw. On a failed save, it perceives a horrid creature adjacent to it until your concentration ends. During this time, the target can't take reactions, and it takes 1d8 psychic damage at the start of each of its turns. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. You can increase the damage by 1d8 for each additional psi point spent on the ability.",
	firstCol : "3-7"
};
PsionicsList["pp3-phantom betrayal"] = {
	name : "Phantom Betrayal",
	source : ["UA:TMC", 26],
	psionic : true,
	level : 1,
	school : "Awake",
	time : "1 a",
	range : "60 ft",
	duration : "Conc, 1 min",
	save : "Int",
	description : "1 crea save or targets its allies with attacks/damaging effects; save at end of each turn (charm effect)",
	descriptionFull : "As an action, you plant delusional paranoia in a creature's mind. Choose one creature you can see within 60 feet of you. The target must succeed on an Intelligence saving throw, or until your concentration ends, it must target its allies with attacks and other damaging effects. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. A creature is immune to this ability if it is immune to being charmed.",
	firstCol : 5
};
PsionicsList["pp4-phantom riches"] = {
	name : "Phantom Riches",
	source : ["UA:TMC", 26],
	psionic : true,
	level : 1,
	school : "Awake",
	time : "1 a",
	range : "60 ft",
	duration : "Conc, 1 min",
	save : "Int",
	description : "1 crea save or you move it and it can't act if not taking dmg since last turn; save at end of each turn",
	descriptionFull : "As an action, you plant the phantom of a greatly desired object in a creature's mind. Choose one creature you can see within 60 feet of you. The target must make an Intelligence saving throw. On a failed save, you gain partial control over the target's behavior until your concentration ends; the target moves as you wish on each of its turns, as it thinks it pursues the phantom object it desires. If it hasn't taken damage since its last turn, it can use its action only to admire the object you created in its perception. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
	firstCol : 7
};
//the telepathic contact discipline (contributed by Justin W.)
PsionicsList["telepathic contact"] = {
	name : "Telepathic Contact",
	classes : ["mystic"],
	source : ["UA:TMC", 26],
	psionic : true,
	level : 1,
	school : "Awake",
	time : "1 bns",
	range : "Self",
	components : "Psi-F.",
	duration : "While focused",
	description : "Use telepathy class feature with up to 6 crea; If no telepathy feature, gain telepathy 120 ft instead",
	descriptionFull : "By channeling psionic power, you gain the ability to control other creatures by substituting your will for their own." + PsychicFocus + "While focused on this discipline, you gain the ability to use your Telepathy class feature with up to six creatures at once. If you don't have that feature from the mystic class, you instead gain it while focused on this discipline.",
	firstCol : "checkbox",
	dependencies : ["tc1-exacting query", "tc2-occluded mind", "tc3-broken will", "tc4-psychic grip", "tc5-psychic domination"]
};
PsionicsList["tc1-exacting query"] = {
	name : "Exacting Query",
	source : ["UA:TMC", 26],
	psionic : true,
	level : 1,
	school : "Awake",
	time : "1 a",
	range : "120 ft",
	duration : "Instantaneous",
	save : "Int",
	description : "1 crea save or answer 1 telepathically asked question; on save, target is immune until you long rest",
	descriptionFull : "As an action, you target one creature you can communicate with via telepathy. The target must make an Intelligence saving throw. On a failed save, the target truthfully answers one question you ask it via telepathy. On a successful save, the target is unaffected, and you can't use this ability on it again until you finish a long rest. A creature is immune to this ability if it is immune to being charmed.",
	firstCol : 2
};
PsionicsList["tc2-occluded mind"] = {
	name : "Occluded Mind",
	source : ["UA:TMC", 26],
	psionic : true,
	level : 1,
	school : "Awake",
	time : "1 a",
	range : "120 ft",
	duration : "5 min",
	save : "Int",
	description : "1 crea save or believes telepathic statement; on save, target immune until you long rest (charm effect)",
	descriptionFull : "As an action, you target one creature you can communicate with via telepathy. The target must make an Intelligence saving throw. On a failed save, the target believes one statement of your choice for the next 5 minutes that you communicate to it via telepathy. The statement can be up to ten words long, and it must describe you or a creature or an object the target can see. On a successful save, the target is unaffected, and you can't use this ability on it again until you finish a long rest. A creature is immune to this ability if it is immune to being charmed.",
	firstCol : 2
};
PsionicsList["tc3-broken will"] = {
	name : "Broken Will",
	source : ["UA:TMC", 26],
	psionic : true,
	level : 1,
	school : "Awake",
	time : "1 a",
	range : "120 ft",
	duration : "1 rnd",
	save : "Int",
	description : "1 crea save or you control it on its next turn; on save, target immune until you long rest (charm effect)",
	descriptionFull : "As an action, you target one creature you can communicate with via telepathy. The target must make an Intelligence saving throw. On a failed save, you choose the target's movement and action on its next turn. On a successful save, the target is unaffected, and you can't use this ability on it again until you finish a long rest. A creature is immune to this ability if it is immune to being charmed.",
	firstCol : 5
};
PsionicsList["tc4-psychic grip"] = {
	name : "Psychic Grip",
	source : ["UA:TMC", 26],
	psionic : true,
	level : 1,
	school : "Awake",
	time : "1 a",
	range : "60 ft",
	duration : "Conc, 1 min",
	save : "Int",
	description : "1 crea save or paralyzed; save at end of each turn, on failure you use rea to have it move half its speed",
	descriptionFull : "As an action, you target one creature you can see within 60 feet of you. The target must succeed on an Intelligence saving throw, or it is paralyzed until your concentration ends. At the end of each of its turns, it can repeat the saving throw. On a success, this effect ends. On a failure, you can use your reaction to force the target to move up to half its speed, even though it's paralyzed.",
	firstCol : 6
};
PsionicsList["tc5-psychic domination"] = {
	name : "Psychic Domination",
	source : ["UA:TMC", 26],
	psionic : true,
	level : 1,
	school : "Awake",
	time : "1 a",
	range : "60 ft",
	duration : "Conc, 1 min",
	save : "Int",
	description : "1 crea save or you direct its actions and move on its turns; save at end of each turn (charm effect)",
	descriptionFull : "As an action, you target one creature you can see within 60 feet of you. The target must succeed on an Intelligence saving throw, or you choose the creature's actions and movement on its turns until your concentration ends. At the end of each of its turns, it can repeat the saving throw, ending the effect on itself on a success. A creature is immune to this ability if it is immune to being charmed.",
	firstCol : 7
};
//the third eye discipline (contributed by Justin W.)
PsionicsList["third eye"] = {
	name : "Third Eye",
	classes : ["mystic"],
	source : ["UA:TMC", 26],
	psionic : true,
	level : 1,
	school : "Nomad",
	time : "1 bns",
	range : "Self",
	components : "Psi-F.",
	duration : "While focused",
	description : "You gain darkvision 60 ft; if already darkvision of 60 ft or more, increase range by 10 ft instead",
	descriptionFull : "You create a third, psychic eye in your mind which you cast out into the world. It channels thoughts and knowledge back to you, greatly enhancing your senses." + PsychicFocus + "While focused on this discipline, you have darkvision with a range of 60 feet. If you already have darkvision with that range or greater, increase its range by 10 feet.",
	firstCol : "checkbox",
	dependencies : ["te1-tremorsense", "te2-unwavering eye", "te3-piercing sight", "te4-truesight"]
};
PsionicsList["te1-tremorsense"] = {
	name : "Tremorsense",
	source : ["UA:TMC", 26],
	psionic : true,
	level : 1,
	school : "Nomad",
	time : "1 bns",
	range : "Self",
	duration : "Conc, 1 min",
	description : "You gain tremorsense with a radius of 30 ft",
	descriptionFull : "As a bonus action, you gain tremorsense with a radius of 30 feet, which lasts until your concentration ends.",
	firstCol : 2
};
PsionicsList["te2-unwavering eye"] = {
	name : "Unwavering Eye",
	source : ["UA:TMC", 26],
	psionic : true,
	level : 1,
	school : "Nomad",
	time : "1 bns",
	range : "Self",
	duration : "1 min",
	description : "You gain advantage on Wisdom checks",
	descriptionFull : "As a bonus action, you gain advantage on Wisdom checks for 1 minute",
	firstCol : 2
};
PsionicsList["te3-piercing sight"] = {
	name : "Piercing Sight",
	source : ["UA:TMC", 27],
	psionic : true,
	level : 1,
	school : "Nomad",
	time : "1 bns",
	range : "Self",
	duration : "Conc, 1 min",
	description : "You see through objects that are up to 1 ft thick within 30 ft",
	descriptionFull : "As a bonus action, you gain the ability to see through objects that are up to 1 foot thick within 30 feet of you. This sight lasts until your concentration ends.",
	firstCol : 3
};
PsionicsList["te4-truesight"] = {
	name : "Truesight",
	source : ["UA:TMC", 27],
	psionic : true,
	level : 1,
	school : "Nomad",
	time : "1 bns",
	range : "Self",
	duration : "Conc, 1 min",
	description : "You gain truesight with a radius of 30 ft",
	descriptionFull : "As a bonus action, you gain truesight with a radius of 30 feet, which lasts until your concentration ends.",
	firstCol : 5
};

// Psionic Discipline 'Mastery of Force' power 'Inertial Armour'
ArmourList["inertial armor"] = {
	regExpSearch : /^(?=.*(inertial|psychic|psionic))(?=.*armou?r).*$/i,
	name : "Inertial armor",
	source : ["UA:TMC", 18],
	type : "",
	ac : 14,
	stealthdis : false,
	strReq : 0
};
// Immortal Mystic armour
ArmourList["immortal's durability"] = {
	regExpSearch : /^(?=.*immortal)(?=.*durability).*$/i,
	name : "Immortal Durability (Con)",
	source : ["UA:TMC", 7],
	type : "",
	ac : 10,
	stealthdis : false,
	strReq : 0,
	addMod : true
};

// Psionic Talents that work like damage cantrips
WeaponsList["energy beam"] = {
	regExpSearch : /^(?=.*\benergy\b)(?=.*\bbeam\b).*$/i,
	name : "Energy Beam",
	source : ["UA:TMC", 27],
	list : "psionic",
	ability : 4,
	type : "Cantrip",
	damage : ["C", 8, "My choice"],
	range : "90 ft",
	description : "Dex save, success - no damage; Acid, cold, fire, lightning, or thunder damage [my choice] (UA:TMC 27)",
	abilitytodamage : false,
	dc : true
};
WeaponsList["mind slam"] = {
	regExpSearch : /^(?=.*\bmind\b)(?=.*\bslam\b).*$/i,
	name : "Mind Slam",
	source : ["UA:TMC", 28],
	list : "psionic",
	ability : 4,
	type : "Cantrip",
	damage : ["C", 6, "force"],
	range : "60 ft",
	description : "Con save, success - no damage, fail - Large or smaller target also knocked prone (UA:TMC 28)",
	abilitytodamage : false,
	dc : true
};
WeaponsList["mind thrust"] = {
	regExpSearch : /^(?=.*\bmind\b)(?=.*\bthrust\b).*$/i,
	name : "Mind Thrust",
	source : ["UA:TMC", 28],
	list : "psionic",
	ability : 4,
	type : "Cantrip",
	damage : ["C", 10, "psychic"],
	range : "120 ft",
	description : "Int save, success - no damage (UA:TMC 28)",
	abilitytodamage : false,
	dc : true
};
WeaponsList["psychic hammer"] = {
	regExpSearch : /^(?=.*\bpsychic\b)(?=.*\bhammer\b).*$/i,
	name : "Psychic Hammer",
	source : ["UA:TMC", 28],
	list : "psionic",
	ability : 4,
	type : "Cantrip",
	damage : ["C", 6, "force"],
	range : "120 ft",
	description : "Str save, success - no damage, fail - also move 10 ft in chosen direction (UA:TMC 28)",
	abilitytodamage : false,
	dc : true
};
WeaponsList["soul knife"] = {
	regExpSearch : /^(?=.*\bsoul)(?=.*(knives|knife|weapon)\b).*$/i,
	name : "Soul Knife",
	source : ["UA:TMC", 8],
	ability : 1,
	type : "Martial",
	damage : [1, 8, "psychic"],
	range : "Melee",
	description : "Finesse, light",
	abilitytodamage : true
};
var iFileName = "UA_20170320_Wizard-Revisited.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Unearthed Arcana: Wizard Revisited article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:WR"] = {
	name : "Unearthed Arcana: Wizard Revisited",
	abbreviation : "UA:WR",
	group : "Unearthed Arcana",
	url : "http://media.wizards.com/2017/dnd/downloads/MJ320UAWizardVF2017.pdf",
	date : "2017/03/20"
};

// Adds 1 new subclass for the Wizard (with contributions by erickrause)
AddSubClass("wizard", "war magic", {
	regExpSearch : /^(?=.*war)(?=.*(magic|mage)).*$/i,
	subname : "War Magic",
	source : ["UA:WR", 2],
	fullname : "War Mage",
	features : {
		"subclassfeature2" : { //has to be identical to a feature named in the ClassList
			name : "Arcane Deflection",
			source : ["UA:WR", 2],
			minlevel : 2,
			description : desc([
				"As a reaction when I'm hit by an attack, I can gain +2 to my AC against that attack",
				"As a reaction when I fail a Con save, I can gain +4 bonus to that saving throw",
				"After I do either, I can't cast spells other than cantrips until the end of my next turn"
			]),
			action : ["reaction", ""]
		},
		"subclassfeature2.1" : {
			name : "Tactical Wit",
			source : ["UA:WR", 2],
			minlevel : 2,
			description : desc([
				"I gain a bonus to my initiative rolls equal to my Intelligence modifier"
			]),
			addMod : { type : "skill", field : "Init", mod : "Int", text : "I can add my Intelligence modifier to initiative rolls." }
		},
		"subclassfeature6" : {
			name : "Power Surge",
			source : ["UA:WR", 2],
			minlevel : 6,
			description : desc([
				"When multiple targets have to save vs. one of my spells, I can have it do more damage",
				"On the turn I cast the spell, I can roll 2 additional damage dice for it"
			]),
			usages : 1,
			recovery : "short rest"
		},
		"subclassfeature10" : {
			name : "Durable Magic",
			source : ["UA:WR", 2],
			minlevel : 10,
			description : desc([
				"While I'm maintaining concentration on a spell, I gain +2 to AC and all saving throws"
			])
		},
		"subclassfeature14" : {
			name : "Deflecting Shroud",
			source : ["UA:WR", 2],
			minlevel : 14,
			description : desc([
				"When I use my Arcane Deflection feature, magical energy arcs from me",
				"Any creatures of my choice within 10 ft of me take half my level in force damage"
			]),
			additional : levels.map( function(n) { return n < 14 ? "" : Math.floor(n/2) + " force damage"; })
		}
	}
});
// This doesn't add the Theurgy subclass if the source UA:TF is present, as that class is identical to the one found in Unearthed Arcana: The Faithful of (2016/08/01)
if (!SourceList["UA:TF"]) {
	RunFunctionAtEnd(function() {
		var theTheurgySubclass = AddSubClass("wizard", "theurgy", {
			regExpSearch : /^((?=.*mystic)(?=.*theurge))|(?=.*(theurgy|theurgist)).*$/i,
			subname : "Theurgy",
			source : [["UA:TF", 1], ["UA:WR", 1]],
			fullname : "Theurgist",
			features : {
				"subclassfeature2" : {
					name : "Arcane Initiate",
					source : [["UA:TF", 2], ["UA:WR", 1]],
					minlevel : 2,
					description : "\n   " + "Choose a Cleric Domain using the \"Choose Feature\" button above" + "\n   " + "When I gain a wizard level I can replace one of the spells I would add to my spellbook" + "\n   " + "I can replace it with one of the chosen domain spells, if it is of a level I can cast" + "\n   " + "If my spellbook has all the domain spells, I can select any cleric spell of a level I can cast" + "\n   " + "Other wizards cannot copy cleric spells from my spellbook into their own spellbooks",
					choices : []
				},
				"subclassfeature2.1" : {
					name : "Channel Arcana",
					source : [["UA:TF", 2], ["UA:WR", 1]],
					minlevel : 2,
					description : "\n   " + "I can channel arcane energy from my deity; the save for this is my wizard spell DC",
					usages : [0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3],
					recovery : "short rest"
				},
				"subclassfeature2.2" : {
					name : "Channel Arcana: Divine Arcana",
					source : [["UA:TF", 2], ["UA:WR", 1]],
					minlevel : 2,
					description : "\n   " + "As a bonus action, I speak a prayer to control the flow of magic around me" + "\n   " + "The next spell I cast gains a +2 bonus to its attack roll or saving throw DC",
					action : ["bonus action", ""]
				},
				"subclassfeature2.3" : {
					name : "Channel Arcana: Domain",
					source : [["UA:TF", 2], ["UA:WR", 1]],
					minlevel : 2,
					description : "\n   " + "Use the \"Choose Features\" button above to select the domain",
					choices : [],
					choicesNotInMenu : true,
					eval : "if (FeaChoice === \"\") {var CFrem = What(\"Class Features Remember\"); var tReg = /.*?wizard,subclassfeature2,(.*domain).*/i; if ((tReg).test(CFrem)) {FeaChoice = CFrem.replace(tReg, \"$1\"); AddString(\"Class Features Remember\", \"wizard,subclassfeature2.2,\" + FeaChoice, false);};};"
				},
				"subclassfeature6" : {
					name : "Arcane Acolyte",
					source : [["UA:TF", 3], ["UA:WR", 1]],
					minlevel : 6,
					description : "\n   " + "Use the \"Choose Features\" button above to select the domain",
					choices : [],
					choicesNotInMenu : true,
					eval : "if (FeaChoice === \"\") {var CFrem = What(\"Class Features Remember\"); var tReg = /.*?wizard,subclassfeature2,(.*?domain).*/i; if ((tReg).test(CFrem)) {FeaChoice = CFrem.replace(tReg, \"$1\"); AddString(\"Class Features Remember\", \"wizard,subclassfeature6,\" + FeaChoice, false);};};"
				},
				"subclassfeature10" : {
					name : "Arcane Priest",
					source : [["UA:TF", 3], ["UA:WR", 2]],
					minlevel : 10,
					description : "\n   " + "Use the \"Choose Features\" button above to select the domain",
					choices : [],
					choicesNotInMenu : true,
					eval : "if (FeaChoice === \"\") {var CFrem = What(\"Class Features Remember\"); var tReg = /.*?wizard,subclassfeature2,(.*?domain).*/i; if ((tReg).test(CFrem)) {FeaChoice = CFrem.replace(tReg, \"$1\"); AddString(\"Class Features Remember\", \"wizard,subclassfeature10,\" + FeaChoice, false);};};"
				},
				"subclassfeature14" : {
					name : "Arcane High Priest",
					source : [["UA:TF", 3], ["UA:WR", 2]],
					minlevel : 14,
					description : "\n   " + "Use the \"Choose Features\" button above to select the domain",
					choices : [],
					choicesNotInMenu : true,
					eval : "if (FeaChoice === \"\") {var CFrem = What(\"Class Features Remember\"); var tReg = /.*?wizard,subclassfeature2,(.*?domain).*/i; if ((tReg).test(CFrem)) {FeaChoice = CFrem.replace(tReg, \"$1\"); AddString(\"Class Features Remember\", \"wizard,subclassfeature14,\" + FeaChoice, false);};};"
				}
			}
		});
		var MTfeat = ClassSubList[theTheurgySubclass].features;
		for (var i = 0; i < ClassList.cleric.subclasses[1].length; i++) {
			var aDomain = ClassSubList[ClassList.cleric.subclasses[1][i]];
			if (!aDomain) continue;
			var dSource = parseSource(aDomain.source);
			if (!dSource) dSource = parseSource(aDomain.features["subclassfeature1"].source);
			if (!dSource) dSource = [["UA:MC", 8]];
			
			var suffix = 1;
			var entryDoNm = cDomain.subname;
			while (MTfeat["subclassfeature2"].choices.indexOf(entryDoNm) !== -1) {
				suffix += 1;
				entryDoNm = cDomain.subname + " (" + suffix + ")";
			};
			MTfeat["subclassfeature2"].choices.push(entryDoNm);
			MTfeat["subclassfeature2"][entryDoNm.toLowerCase()] = {
				name : "Arcane Initiate: " + aDomain.subname,
				source : dSource,
				spellcastingExtra : aDomain.spellcastingExtra,
				description : "\n   " + "When I gain a wizard level I can replace one of the spells I would add to my spellbook" + "\n   " + "I can replace it with one of the " + aDomain.subname.toLowerCase() + " spells, if it is of a level I can cast" + "\n   " + "If my spellbook has all the domain spells, I can select any cleric spell of a level I can cast" + "\n   " + "Other wizards cannot copy cleric spells from my spellbook into their own spellbooks",
				eval : ""
			};
			var AIdomain = MTfeat["subclassfeature2"][entryDoNm.toLowerCase()];
			for (var aFea in aDomain.features) {
				var dFea = aDomain.features[aFea];
				if (dFea.minlevel === 2 && (/channel divinity/i).test(dFea.name)) {
					MTfeat["subclassfeature2.3"].choices.push(entryDoNm);
					MTfeat["subclassfeature2.3"][entryDoNm.toLowerCase()] = eval(dFea.toSource());
					MTfeat["subclassfeature2.3"][entryDoNm.toLowerCase()].name = MTfeat["subclassfeature2.3"][entryDoNm.toLowerCase()].name.replace(/channel divinity/i, "Channel Arcana");
					AIdomain.eval += "var ToAdd = ['wizard', 'subclassfeature2.3', \"" + entryDoNm.toLowerCase() + "\"]; if (classes.known.wizard.level >= 2 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)}; ";
				};
				if (dFea.minlevel === 1 && !dFea.armor && !dFea.weapons) {
					if (MTfeat["subclassfeature6"].choices.indexOf(entryDoNm) === -1) { //if the entry does not exist yet
						MTfeat["subclassfeature6"].choices.push(entryDoNm);
						MTfeat["subclassfeature6"][entryDoNm.toLowerCase()] = eval(dFea.toSource());
						AIdomain.eval += "var ToAdd = ['wizard', 'subclassfeature6', \"" + entryDoNm.toLowerCase() + "\"]; if (classes.known.wizard.level >= 6 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)}; ";
					} else { //add to the existing entry
						var theFea = MTfeat["subclassfeature6"][entryDoNm.toLowerCase()];
						theFea.name += " \u0026 " + dFea.name;
						theFea.description += dFea.description;
						for (var subFea in dFea) {
							if (theFea[subFea] === undefined) theFea[subFea] = dFea[subFea];
						};
					};
				};
				if (dFea.minlevel === 6 && !dFea.armor && !dFea.weapons) {
					if (MTfeat["subclassfeature10"].choices.indexOf(entryDoNm) === -1) { //if the entry does not exist yet
						MTfeat["subclassfeature10"].choices.push(entryDoNm);
						MTfeat["subclassfeature10"][entryDoNm.toLowerCase()] = eval(dFea.toSource());
						AIdomain.eval += "var ToAdd = ['wizard', 'subclassfeature10', \"" + entryDoNm.toLowerCase() + "\"]; if (classes.known.wizard.level >= 10 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)}; ";
					} else { //add to the existing entry
						var theFea = MTfeat["subclassfeature10"][entryDoNm.toLowerCase()];
						theFea.name += " \u0026 " + dFea.name;
						theFea.description += dFea.description;
						for (var subFea in dFea) {
							if (theFea[subFea] === undefined) theFea[subFea] = dFea[subFea];
						};
					};
				};
				if (dFea.minlevel === 17 && !dFea.armor && !dFea.weapons) {
					if (MTfeat["subclassfeature14"].choices.indexOf(entryDoNm) === -1) { //if the entry does not exist yet
						MTfeat["subclassfeature14"].choices.push(entryDoNm);
						MTfeat["subclassfeature14"][entryDoNm.toLowerCase()] = eval(dFea.toSource());
						AIdomain.eval += "var ToAdd = ['wizard', 'subclassfeature14', \"" + entryDoNm.toLowerCase() + "\"]; if (classes.known.wizard.level >= 14 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)}; ";
					} else { //add to the existing entry
						var theFea = MTfeat["subclassfeature14"][entryDoNm.toLowerCase()];
						theFea.name += " \u0026 " + dFea.name;
						theFea.description += dFea.description;
						for (var subFea in dFea) {
							if (theFea[subFea] === undefined) theFea[subFea] = dFea[subFea];
						};
					};
				};
			};
		};
	});
};
var iFileName = "UA_20170327_A Trio-of-Subclasses.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Unearthed Arcana: A Trio of Subclasses article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:AToS"] = {
	name : "Unearthed Arcana: A Trio of Subclasses",
	abbreviation : "UA:AToS",
	group : "Unearthed Arcana",
	url : "http://media.wizards.com/2017/dnd/downloads/UAThreeSubclasses.pdf",
	date : "2017/03/27"
};

// Adds three subclass: 1 for the Monk, 1 for the Paladin, and 1 for the Ranger
AddSubClass("monk", "way of the drunken master", {
	regExpSearch : /^((?=.*drunken)(?=.*master))|((?=.*drunk)((?=.*(monk|monastic))|((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior)))).*$/i,
	subname : "Way of the Drunken Master",
	source : ["UA:AToS", 1],
	fullname : "Drunken Master",
	features : {
		"subclassfeature3" : {
			name : "Drunken Technique",
			source : ["UA:AToS", 1],
			minlevel : 3,
			description : desc([
				"I gain proficiency with the Performance skill",
				"When using Flurry of Blows, I gain the benefits of a Disengage and +10 ft speed this turn"
			]),
			skills : ["Performance"],
			skillstxt : "\n\n" + toUni("Monk (Way of the Drunken Master)") + ": Performance."
		},
		"subclassfeature6" : {
			name : "Tipsy Sway",
			source : ["UA:AToS", 1],
			minlevel : 6,
			description : desc([
				"As a reaction when missed in melee, attacker instead hits another I can see within 5 ft"
			]),
			usages : 1,
			recovery : "short rest",
			action : ["reaction", ""]
		},
		"subclassfeature11" : {
			name : "Drunkard's Luck",
			source : ["UA:AToS", 1],
			minlevel : 11,
			description : desc([
				"Before I roll for a save, I can spend 1 ki to give myself advantage on it"
			]),
			additional : "1 ki point"
		},
		"subclassfeature17" : {
			name : "Intoxicated Frenzy",
			source : ["UA:AToS", 1],
			minlevel : 17,
			description : desc([
				"I can make 3 extra attacks with Flurry of Blows if each is used on a different target"
			])
		}
	}
});
AddSubClass("paladin", "oath of redemption", {
	regExpSearch : /^((?=.*redeemer)|((?=.*redemption)(((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper))))))).*$/i,
	subname : "Oath of Redemption",
	source : ["UA:AToS", 1],
	spellcastingExtra : ["shield", "sleep", "hold person", "ray of enfeeblement", "counterspell", "hypnotic pattern", "otiluke's resilient sphere", "stoneskin", "hold monster", "wall of force"],
	features : {
		"subclassfeature3" : {
			name : "Armor of Peace",
			source : ["UA:AToS", 2],
			minlevel : 3,
			description : desc([
				"When not wearing armor or wielding a shield, my AC is 16 + my Dexterity modifier"
			])
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Emissary of Peace",
			source : ["UA:AToS", 2],
			minlevel : 3,
			description : desc([
				"As a bonus action, I gain +5 to my next Charisma (Persuasion) check in the next min"
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature3.2" : {
			name : "Channel Divinity: Rebuke the Violent",
			source : ["UA:AToS", 2],
			minlevel : 3,
			description : desc([
				"As a reaction when a hostile within 10 ft damages another in melee, I can rebuke it",
				"It takes the same damage as it dealt but as radiant damage, with a Wis save to halve it"
			]),
			action : ["reaction", ""]
		},
		"subclassfeature3.3" : {
			name : "Warrior of Reconciliation",
			source : ["UA:AToS", 2],
			minlevel : 3,
			description : desc([
				"I can charm a creature when I reduce it to 0 HP with a simple, bludgeoning weapon",
				"It is peaceful, docile and only does what I command it to, but it can't cause harm",
				"For 1 min, until I'm incap., or I or allies attack it or have it save; after it is unconscious"
			])
		},
		"subclassfeature7" : {
			name : "Aura of the Guardian",
			source : ["UA:AToS", 2],
			minlevel : 7,
			description : desc([
				"As a reaction when an ally within 10 ft takes damage, I instead take the damage"
			]),
			action : ["reaction", ""]
		},
		"subclassfeature15" : {
			name : "Protective Spirit",
			source : ["UA:AToS", 2],
			minlevel : 15,
			description : desc([
				"At the end of my turn when I'm below half HP and not incapacitated, I regain HP"
			]),
			additional : levels.map(function (n) {
				if (n < 15) return "";
				return "1d6+" + Math.floor(n/2) + " HP";
			})
		},
		"subclassfeature20" : {
			name : "Emissary of Redemption",
			source : ["UA:AToS", 3],
			minlevel : 20,
			description : desc([
				"When taking damage from a creature, I take only half and it takes the other half",
				"If I attack or force a save on another, neither benefit work on it until I have a long rest"
			]),
			dmgres : ["All from creatures"]
		}
	}
});
// Oath of Redemption Paladin Armor of Peace
ArmourList["armor of peace"] = {
	regExpSearch : /^(?=.*armou?r)(?=.*peace).*$/i,
	name : "Armor of Peace",
	source : ["UA:AToS", 2],
	type : "",
	ac : 16,
	stealthdis : false,
	strReq : 0
};
// Add the Monster Slayer subclass to both the normal and Revised Ranger (if it is defined)
var RangeSubclassMonsterSlayer = AddSubClass("ranger", "monster slayer", {
	regExpSearch : /^(?=.*monster)(?=.*slayer).*$/i,
	subname : "Monster Slayer",
	source : ["UA:AToS", 3],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	fullname : "Monster Slayer",
	features : {
		"subclassfeature3" : {
			name : "Slayer's Mysticism",
			source : ["UA:AToS", 3],
			minlevel : 3,
			description : "\n   " + "I get bonus spells known, which do not count against the number of spells I can know",
			spellcastingExtra : ["protection from evil and good", "zone of truth", "magic circle", "banishment", "planar binding"].concat(new Array(95)).concat("AddToKnown")
		},
		"subclassfeature3.1" : {
			name : "Slayer's Eye",
			source : ["UA:AToS", 3],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can study a creature within 120 ft that I can see",
				"I learn its vulnerabilities, immunities, resistances, and the effects damaging it can have",
				"My first weapon hit on it each turn does +1d6 damage, until I study another or rest"
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature7" : {
			name : "Supernatural Defense",
			source : ["UA:AToS", 3],
			minlevel : 7,
			description : desc([
				"I add 1d6 to saves I make against abilities of the current target of my Slayer's Eye"
			])
		},
		"subclassfeature11" : {
			name : "Relentless Slayer",
			source : ["UA:AToS", 3],
			minlevel : 11,
			description : desc([
				"As a reaction, I can stop the target of my Slayer's Eye from escaping, if within 30 ft",
				"If I win a contested Wis check, it wastes it action to teleport/transform/plane shift"
			]),
			action : ["reaction", ""]
		},
		"subclassfeature15" : {
			name : "Slayer's Counter",
			source : ["UA:AToS", 3],
			minlevel : 15,
			description : desc([
				"As a reaction when the target of my Slayer's Eye has me make a save, I can attack it",
				"I can make one weapon attack; If this hits, I automatically succeed on the saving throw"
			]),
			action : ["reaction", ""]
		}
	}
});
if (ClassList.rangerua) { ClassList.rangerua.subclasses[1].push(RangeSubclassMonsterSlayer); };
var iFileName = "UA_20170403_Starter-Spells.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Unearthed Arcana: Starter Spells article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:SS"] = {
	name : "Unearthed Arcana: Starter Spells",
	abbreviation : "UA:SS",
	group : "Unearthed Arcana",
	url : "http://media.wizards.com/2017/dnd/downloads/UA-Starter-Spells.pdf",
	date : "2017/04/03"
};

/*	Adds 17 spells of lower levels to all class' spell lists
	
	This code was contributed by SoilentBrad
*/
SpellsList["cause fear"] = {
	name : "Cause Fear",
	classes : ["warlock", "wizard"],
	source : ["UA:SS", 2],
	ritual : false,
	level : 1,
	school : "Necro",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "1 crea save or frightened; crea disadvantage on save if 25 hp or less; no effect on undead/constructs",
	descriptionFull : "You awaken the sense of mortality in one creature you can see within range. The target must succeed on a Wisdom saving throw or become frightened for the duration. A target with 25 hit points or fewer makes the saving throw with disadvantage. The spell has no effect on constructs or undead."
};
SpellsList["ceremony"] = {
	name : "Ceremony",
	classes : ["cleric", "paladin"],
	source : ["UA:SS", 2],
	ritual : true,
	level : 1,
	school : "Evoc",
	time : "1 h",
	range : "Touch",
	components : "V,S,M\u0192",
	compMaterial : "25 gp worth of powdered silver",
	duration : "Instantaneous",
	description : "Perform religious ceremony on target(s) that are within 10 ft throughout the casting; see book (25gp)",
	descriptionFull : "You perform one of several religious ceremonies. When you cast the spell, choose one of the following ceremonies, the target of which must be within 10 feet of you throughout the casting." + "\n   " + toUni("Atonement") + ": You touch one willing creature whose alignment has changed, and you make a DC 20 Wisdom (Insight) check. On a success, you restore the target to its original alignment." + "\n   " + toUni("Bless Water") + ": You touch one vial of water and cause it to become holy water." + "\n   " + toUni("Coming of Age") + ": You touch one humanoid old enough to be a young adult. For the next 24 hours, whenever the target makes an ability check, it can roll a d4 and add the number rolled to the ability check. A creature can benefit from this ceremony just once." + "\n   " + toUni("Dedication") + ": You touch one humanoid who would willingly convert to your religion or who wishes to be dedicated to your god's service. For the next 24 hours, whenever the target makes a saving throw, it can roll a d4 and add the number rolled to the save. A creature can benefit from this ceremony just once." + "\n   " + toUni("Funeral Rite") + ": You bless one corpse within 5 feet of you. For the next 24 hours, the target can't become undead by any means short of a wish spell." + "\n   " + toUni("Investiture") + ": You touch one willing humanoid. Choose one 1st-level spell you have prepared and expend a spell slot and any material components as if you were casting that spell. The spell has no effect. Instead, the target can cast this spell once without having to expend a spell slot or use material components. If the target doesn't cast the spell within 1 hour, the invested spell is lost." + "\n   " + toUni("Marriage") + ": You touch adult humanoids willing to be bonded together in marriage. For the next 24 hours, each target gains a +2 bonus to AC and saving throws while they are within 30 feet of each other. A creature can benefit from this ceremony just once."
};
SpellsList["chaos bolt"] = {
	name : "Chaos Bolt",
	classes : ["sorcerer"],
	source : ["UA:SS", 2],
	ritual : false,
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Instantaneous",
	description : "Spell atk 2d8+1d6/SL dmg, d8s set dmg type, see B; double on d8s, new atk vs. crea in 30 ft of target",
	descriptionFull : "You hurl an undulating, warbling mass of chaotic energy at one creature in range. Make a ranged spell attack against the target. On a hit, the target takes 2d8 damage. Choose one of the d8s. The number it rolled determines the type of damage, as shown below." + "\n\n" + toUni("d8") + "\t" + toUni("Damage Type") + "\n  1\tAcid" + "\n  2\tCold" + "\n  3\tFire" + "\n  4\tForce" + "\n  5\tLightning" + "\n  6\tPoison" + "\n  7\tPsychic" + "\n  8\tThunder" + "\n\n   " + "If you roll the same number on both d8s, the chaotic energy leaps from the target to a different creature of your choice within 30 feet of it. Make a new attack roll against the new target, and make a new damage roll, which could cause the chaotic energy to leap again." + "\n   " + "A creature can be targeted only once by this mass of chaotic energy." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, each target takes extra damage of the type rolled. The extra damage equals 1d6 for each slot level above 1st."
};
SpellsList["guiding hand"] = {
	name : "Guiding Hand",
	classes : ["bard", "cleric", "druid", "wizard"],
	source : ["UA:SS", 3],
	ritual : true,
	level : 1,
	school : "Div",
	time : "1 min",
	range : "5 ft",
	components : "V,S",
	duration : "Conc, 8 h",
	description : "Tiny incorporeal hand directs you to one major landmark you name that is on the same plane",
	descriptionFull : "You create a Tiny incorporeal hand of shimmering light in an unoccupied space you can see within range. The hand exists for the duration, but it disappears if you teleport or you travel to a different plane of existence." + "\n   " + "When the hand appears, you name one major landmark, such as a city, mountain, castle, or battlefield on the same plane of existence as you. Someone in history must have visited the site and mapped it. If the landmark appears on no map in existence, the spell fails. Otherwise, whenever you move toward the hand, it moves away from you at the same speed you moved, and it moves in the direction of the landmark, always remaining 5 feet away from you." + "\n   " + "If you don't move toward the hand, it remains in place until you do and beckons for you to follow once every 1d4 minutes."
};
SpellsList["hand of radiance"] = {
	name : "Hand of Radiance",
	classes : ["cleric"],
	source : ["UA:SS", 3],
	ritual : false,
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "5-ft rad",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	description : "Any creatures you see in 5-ft radius save or 1d6 Radiant damage; +1d6 damage at CL 5, 11, and 17",
	descriptionFull : "You raise your hand, and burning radiance erupts from it. Each creature of your choice that you can see within 5 feet of you must succeed on a Constitution saving throw or take 1d6 radiant damage." + "\n   " + "The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
};
SpellsList["healing elixir"] = {
	name : "Healing Elixir",
	classes : ["warlock", "wizard"],
	source : ["UA:SS", 3],
	ritual : false,
	level : 1,
	school : "Conj",
	time : "1 min",
	range : "Self",
	components : "V,S,M\u0192",
	compMaterial : "Alchemist's supplies",
	duration : "24 h",
	description : "Make vial with alchemist's supplies; heals 2d4+2 hp as an action; if not used, disappears after 24 h",
	descriptionFull : "You create a healing elixir in a simple vial that appears in your hand. The elixir retains its potency for the duration or until it's consumed, at which point the vial vanishes." + "\n   " + "As an action, a creature can drink the elixir or administer it to another creature. The drinker regains 2d4 + 2 hit points."
};
SpellsList["infestation"] = {
	name : "Infestation",
	classes : ["druid", "sorcerer", "warlock", "wizard"],
	source : ["UA:SS", 3],
	ritual : false,
	level : 0,
	school : "Conj",
	time : "1 a",
	range : "30 ft",
	components : "V,S,M",
	compMaterial : "A living flea",
	duration : "Instantaneous",
	save : "Con",
	description : "1 crea save or 1d6 Piercing damage and moved 5 ft in random direction; +1d6 at CL 5, 11, and 17",
	descriptionFull : "You cause mites, fleas, and other parasites to appear momentarily on one creature you can see within range. The target must succeed on a Constitution saving throw or take 1d6 piercing damage. If the target takes any of that damage, the target moves 5 feet in a random direction. Roll a d8 for the direction:" + "\n\n" + toUni("d8") + "\t" + toUni("Direction") + "\n  1\tNorth" + "\n  2\tNortheast" + "\n  3\tEast" + "\n  4\tSoutheast" + "\n  5\tSouth" + "\n  6\tSouthwest" + "\n  7\tWest" + "\n  8\tNorthwest" + "\n\n   " + "The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
};
SpellsList["primal savagery"] = {
	name : "Primal Savagery",
	classes : ["druid"],
	source : ["UA:SS", 3],
	ritual : false,
	level : 0,
	school : "Trans",
	time : "1 a",
	range : "5 ft",
	components : "S",
	duration : "Instantaneous",
	description : "Melee spell attack deals 1d10 Piercing or Slashing dmg (your choice); +1d10 at CL 5, 11, and 17",
	descriptionFull : "Your teeth or fingernails lengthen and sharpen. You choose which. Make a melee spell attack against one creature within 5 feet of you. On a hit, the target takes 1d10 piercing or slashing damage (your choice). After you make the attack, your teeth or fingernails return to normal." + "\n   " + "The spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10)."
};
SpellsList["puppet"] = {
	name : "Puppet",
	classes : ["bard", "warlock", "wizard"],
	source : ["UA:SS", 3],
	ritual : false,
	level : 1,
	school : "Ench",
	time : "1 a",
	range : "120 ft",
	components : "S",
	duration : "Instantaneous",
	save : "Con",
	description : "1 humanoid save or move its speed to where you choose and drop held items, if chosen (charm effect)",
	descriptionFull : "Your gesture forces one humanoid you can see within range to make a Constitution saving throw. On a failed save, the target must move up to its speed in a direction you choose. In addition, you can cause the target to drop whatever it is holding. This spell has no effect on a humanoid that is immune to being charmed."
};
SpellsList["sense emotion"] = {
	name : "Sense Emotion",
	classes : ["bard", "warlock", "wizard"],
	source : ["UA:SS", 4],
	ritual : false,
	level : 1,
	school : "Div",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "Conc, 10 min",
	description : "Now and as 1 a for duration, sense emotion of humanoid in range; sense calm if not humanoid/charm",
	descriptionFull : "You attune your senses to pick up the emotions of others for the duration. When you cast the spell, and as your action on each turn until the spell ends, you can focus your senses on one humanoid you can see within 30 feet of you. You instantly learn the target's prevailing emotion, whether it's love, anger, pain, fear, calm, or something else. If the target isn't actually humanoid or it is immune to being charmed, you sense that it is calm."
};
SpellsList["snare"] = {
	name : "Snare",
	classes : ["druid", "ranger", "wizard"],
	source : ["UA:SS", 4],
	ritual : false,
	level : 1,
	school : "Abjur",
	time : "1 min",
	range : "Touch",
	components : "V,S,M\u2020",
	compMaterial : "30 feet of cord or rope, which is consumed by the spell",
	duration : "Dispel/trigger",
	save : "Dex",
	description : "5-ft rad magical trap; Int (Inv) to see; save or restrained upside down 3 ft in the air; save/rnd at dis",
	descriptionFull : "While you cast this spell, you use the cord or rope to create a circle with a 5-foot radius on a flat surface within your reach. When you finish casting, the cord or rope disappears to become a magical trap." + "\n   " + "The trap is nearly invisible and requires a successful Intelligence (Investigation) check against your spell save DC to be found." + "\n   " + "The trap triggers when a Small creature or larger moves into the area protected by the spell. The triggering creature must succeed on a Dexterity saving throw or fall prone and be hoisted into the air until it hangs upside down 3 feet above the protected surface, where it is restrained." + "\n   " + "The restrained creature can make a Dexterity saving throw with disadvantage at the end of each of its turns and ends the restrained effect on a success. Alternatively, another creature that can reach the restrained creature can use an action to make an Intelligence (Arcana) check against your spell save DC. On a success, the restrained effect also ends."
};
SpellsList["sudden awakening"] = {
	name : "Sudden Awakening",
	classes : ["bard", "ranger", "sorcerer", "wizard"],
	source : ["UA:SS", 4],
	ritual : false,
	level : 1,
	school : "Ench",
	time : "1 bns",
	range : "10 ft",
	components : "V",
	duration : "Instantaneous",
	description : "Any creatures within range awaken and can then stand up from prone without expending movement",
	descriptionFull : "Each sleeping creature you choose within range awakens, and then each prone creature within range can stand up without expending any movement."
};
SpellsList["toll the dead"] = {
	name : "Toll the Dead",
	classes : ["cleric", "warlock", "wizard"],
	source : ["UA:SS", 4],
	ritual : false,
	level : 0,
	school : "Necro",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Wis",
	description : "1 crea save or 1d12 Necrotic damage (only 1d8 if at full hp); +1d12/+1d8 at CL 5, 11, and 17",
	descriptionFull : "You point at one creature you can see within range, and the sound of a dolorous bell fills the air around it for a moment. The target must succeed on a Wisdom saving throw or take 1d8 necrotic damage. If the target is missing any of its hit points, it instead takes 1d12 necrotic damage." + "\n   " + "The spell's damage increases by one die when you reach 5th level (2d8 or 2d12), 11th level (3d8 or 3d12), and 17th level (4d8 or 4d12)."
};
SpellsList["unearthly chorus"] = {
	name : "Unearthly Chorus",
	classes : ["bard"],
	source : ["UA:SS", 4],
	ritual : false,
	level : 1,
	school : "Illus",
	time : "1 a",
	range : "30-ft rad",
	components : "V",
	duration : "Conc, 10 min",
	save: "Cha",
	description : "Use bns a to make 1 crea in range save or be friendly for 1 h; You adv on Cha (Performance) checks",
	descriptionFull : "Music of a style you choose fills the air around you in a 30-foot radius. The music spreads around corners and can be heard from up to 100 feet away. The music moves with you, centered on you for the duration." + "\n   " + "Until the spell ends, you make Charisma (Performance) checks with advantage. In addition, you can use a bonus action on each of your turns to beguile one creature you choose within 30 feet of you that can see you and hear the music. The creature must make a Charisma saving throw. If you or your companions are attacking it, the creature automatically succeeds on the saving throw. On a failure, the creature becomes friendly to you for as long as it can hear the music and for 1 hour thereafter. You make Charisma (Deception) checks and Charisma (Persuasion) checks against creatures made friendly by this spell with advantage."
};
SpellsList["virtue"] = {
	name : "Virtue",
	classes : ["cleric"],
	source : ["UA:SS", 5],
	ritual : false,
	level : 0,
	school : "Abjur",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "1 rnd",
	description : "1 creature that has at least 1 hp gets 1d4 + spellcasting ability modifier in temporary hit points",
	descriptionFull : "You touch one creature, imbuing it with vitality. If the target has at least 1 hit point, it gains a number of temporary hit points equal to 1d4 + your spellcasting ability modifier. The temporary hit points are lost when the spell ends."
};
SpellsList["wild cunning"] = {
	name : "Wild Cunning",
	classes : ["druid", "ranger"],
	source : ["UA:SS", 5],
	ritual : true,
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Instantaneous",
	description : "Call spirits of nature to aid you with finding food/drink/tracks/shelter, or camping; see book",
	descriptionFull : "You call out to the spirits of nature to aid you. When you cast this spell, choose one of the following effects:" + "\n  \u2022 " + "If there are any tracks on the ground within range, you know where they are, and you make Wisdom (Survival) checks to follow these tracks with advantage for 1 hour or until you cast this spell again." + "\n  \u2022 " + "If there is edible forage within range, you know it and where to find it." + "\n  \u2022 " + "If there is clean drinking water within range, you know it and where to find it." + "\n  \u2022 " + "If there is suitable shelter for you and your companions with range, you know it and where to find." + "\n  \u2022 " + "Send the spirits to bring back wood for a fire and to set up a campsite in the area using your supplies. The spirits build the fire in a circle of stones, put up tents, unroll bedrolls, and put out any rations and water for consumption." + "\n  \u2022 " + "Have the spirits instantly break down a campsite, which includes putting out a fire, taking down tents, packing up bags, and burying any rubbish."
};
SpellsList["zephyr strike"] = { // clarification: https://twitter.com/JeremyECrawford/status/849302527069884416
	name : "Zephyr Strike",
	classes : ["ranger"],
	source : ["UA:SS", 5],
	ritual : false,
	level : 1,
	school : "Trans",
	time : "1 bns",
	range : "Self",
	components : "V",
	duration : "Conc, 1 min",
	description : "Moving doesn't provoke opportunity atks; next wea atk has adv and gives +30 ft speed for that turn",
	descriptionFull : "You move like the wind. For the duration, your movement doesn't provoke opportunity attacks." + "\n   " + "In addition, the first time you make a weapon attack on your turn before the spell ends, you make the attack roll with advantage, and your speed increases by 30 feet until the end of that turn."
};

// Weapons (attack cantrips)
WeaponsList["hand of radiance"] = {
	regExpSearch : /^(?=.*hand)(?=.*radiance).*$/i,
	name : "Hand of Radiance",
	source : ["UA:SS", 3],
	list : "spell",
	ability : 5,
	type : "Cantrip",
	damage : ["C", 6, "radiant"],
	range : "5-ft radius",
	description : "Con save, success - no damage; Only chosen creatures I can see are affected (UA:SS 3)",
	abilitytodamage : false,
	dc : true
};
WeaponsList["infestation"] = {
	regExpSearch : /infestation/i,
	name : "Infestation",
	source : ["UA:SS", 3],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 6, "piercing"],
	range : "30 ft",
	description : "Con save, success - no damage, fail - target also moved 5 ft in random direction (UA:SS 3)",
	abilitytodamage : false,
	dc : true
};
WeaponsList["primal savagery"] = {
	regExpSearch : /^(?=.*primal)(?=.*savagery).*$/i,
	name : "Primal Savagery",
	source : ["UA:SS", 3],
	list : "spell",
	ability : 5,
	type : "Cantrip",
	damage : ["C", 10, "piercing"],
	range : "Melee (5 ft)",
	description : "Does either Piercing or Slashing damage (my choice) (UA:SS 3)",
	abilitytodamage : false
};
WeaponsList["toll the dead"] = {
	regExpSearch : /^(?=.*toll)(?=.*the)(?=.*dead).*$/i,
	name : "Toll the Dead",
	source : ["UA:SS", 4],
	list : "spell",
	ability : 5,
	type : "Cantrip",
	damage : ["C", 12, "necrotic"],
	range : "60 ft",
	description : "Wis save, success - no damage; If target is at full hp, d8 instead of d12 damage (UA:SS 4)",
	abilitytodamage : false,
	dc : true
};
var iFileName = "UA_20170417_Feats-for-Skills.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Unearthed Arcana: Feats for Skills article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:FS"] = {
	name : "Unearthed Arcana: Feats for Skills",
	abbreviation : "UA:FS",
	group : "Unearthed Arcana",
	url : "http://media.wizards.com/2017/dnd/downloads/UA-SkillFeats.pdf",
	date : "2017/04/17"
};

// Add 18 feats, corresponding with the 18 skills
FeatsList["acrobat"] = {
	name : "Acrobat",
	source : ["UA:FS", 1],
	description : "I gain expertise with Acrobatics, or proficiency if not so already. As a bonus action, I can make a DC 15 Dexterity (Acrobatics) check to have difficult terrain not cost me extra movement for this turn. [+1 Dexterity]",
	improvements : "Acrobat (feat): +1 Dexterity;",
	scores : [0, 1, 0, 0, 0, 0],
	skills : "\n\n" + toUni("Acrobat (feat)") + ": Acrobatics, or expertise if already proficient.",
	eval : "AddSkillProf('Acr', true, 'increment')",
	removeeval : "AddSkillProf('Acr', false, 'increment')",
	action : ["bonus action", ""]
};
FeatsList["animal handler"] = {
	name : "Animal Handler",
	source : ["UA:FS", 1],
	description : "I gain expertise with Animal Handling, or proficiency if not so already. As a bonus action, I can command a friendly beast not under another's command within 60 ft. If it hears me, I decide its next turn or give a general command lasting for 1 minute. [+1 Wisdom]",
	improvements : "Animal Handler (feat): +1 Wisdom;",
	scores : [0, 0, 0, 0, 1, 0],
	skills : "\n\n" + toUni("Animal Handler (feat)") + ": Animal Handling, or expertise if already proficient.",
	eval : "AddSkillProf('Ani', true, 'increment')",
	removeeval : "AddSkillProf('Ani', false, 'increment')",
	action : ["bonus action", ""]
};
FeatsList["arcanist"] = {
	name : "Arcanist",
	source : ["UA:FS", 1],
	description : "I gain expertise with Arcana, or proficiency if not so already. I learn the Prestidigitation cantrip. I can cast Detect Magic without using a spell slot. Once I do so, I can't do it again until I finish a long rest. [+1 Intelligence]",
	improvements : "Arcanist (feat): +1 Intelligence;",
	scores : [0, 0, 0, 1, 0, 0],
	skills : "\n\n" + toUni("Arcanist (feat)") + ": Arcana, or expertise if already proficient.",
	eval : "AddSkillProf('Arc', true, 'increment')",
	removeeval : "AddSkillProf('Arc', false, 'increment')",
	spellcastingBonus : [{
		name : "Arcanist",
		spellcastingAbility : 4,
		spells : ["prestidigitation"],
		selection : ["prestidigitation"],
		atwill : true
	}, {
		name : "Arcanist (1x long rest)",
		spells : ["detect magic"],
		selection : ["detect magic"],
		oncelr : true
	}]
};
FeatsList["brawny"] = {
	name : "Brawny",
	source : ["UA:FS", 1],
	description : "I gain expertise with Athletics, or proficiency if not so already. I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift. [+1 Strength]",
	improvements : "Brawny (feat): +1 Strength;",
	scores : [1, 0, 0, 0, 0, 0],
	skills : "\n\n" + toUni("Brawny (feat)") + ": Athletics, or expertise if already proficient.",
	eval : "AddSkillProf('Ath', true, 'increment'); tDoc.getField('Carrying Capacity Multiplier').value *= 2;",
	removeeval : "AddSkillProf('Ath', false, 'increment'); tDoc.getField('Carrying Capacity Multiplier').value /= 2;"
};
FeatsList["diplomat"] = {
	name : "Diplomat",
	source : ["UA:FS", 2],
	description : "I gain expertise with Persuasion, or proficiency if not so already. With a one minute long conversation outside of combat, I can make a Persuasion vs. its Insight. If successful, it is charmed by me as long as it remains within 60 ft and 1 minute after that [+1 Charisma]",
	improvements : "Diplomat (feat): +1 Charisma;",
	scores : [0, 0, 0, 0, 0, 1],
	skills : "\n\n" + toUni("Diplomat (feat)") + ": Persuasion, or expertise if already proficient.",
	eval : "AddSkillProf('Pers', true, 'increment')",
	removeeval : "AddSkillProf('Pers', false, 'increment')"
};
FeatsList["empathic"] = {
	name : "Empathic",
	source : ["UA:FS", 2],
	description : "I gain expertise with Insight, or proficiency if not so already. As an action, a humanoid within 30 ft I can see must make its Deception vs. my Insight or I gain advantage on attacks and ability checks against it until the end of my next turn. [+1 Wisdom]",
	improvements : "Empathic (feat): +1 Wisdom;",
	scores : [0, 0, 0, 0, 1, 0],
	skills : "\n\n" + toUni("Empathic (feat)") + ": Insight, or expertise if already proficient.",
	eval : "AddSkillProf('Ins', true, 'increment')",
	removeeval : "AddSkillProf('Ins', false, 'increment')"
};
FeatsList["historian"] = {
	name : "Historian",
	source : ["UA:FS", 2],
	description : "I gain expertise with History, or proficiency if not so already. When I use the Help action to help a creature that can understand me with an ability check, I can make a DC 15 Int (History) check to give a bonus equal to my proficiency bonus. [+1 Intelligence]",
	improvements : "Historian (feat): +1 Intelligence;",
	scores : [0, 0, 0, 1, 0, 0],
	skills : "\n\n" + toUni("Historian (feat)") + ": History, or expertise if already proficient.",
	eval : "AddSkillProf('His', true, 'increment')",
	removeeval : "AddSkillProf('His', false, 'increment')",
	action : ["action", ""]
};
FeatsList["investigator"] = {
	name : "Investigator",
	source : ["UA:FS", 2],
	description : "I gain expertise with Investigation, or proficiency if not so already. As a bonus action, I can take the Search action. [+1 Intelligence]",
	improvements : "Investigator (feat): +1 Intelligence;",
	scores : [0, 0, 0, 1, 0, 0],
	skills : "\n\n" + toUni("Investigator (feat)") + ": Investigation, or expertise if already proficient.",
	eval : "AddSkillProf('Inv', true, 'increment')",
	removeeval : "AddSkillProf('Inv', false, 'increment')",
	action : ["bonus action", " (Search)"]
};
FeatsList["medic"] = {
	name : "Medic",
	source : ["UA:FS", 2],
	description : "I gain expertise with Medicine, or proficiency if not so already. During a short rest, I can attend to the wounds of up to 6 creatures. With a DC 15 Wis (Medicine) check for each creature, that target gets the maximum result on one of its HD that it uses. [+1 Wisdom]",
	improvements : "Medic (feat): +1 Wisdom;",
	scores : [0, 0, 0, 0, 1, 0],
	skills : "\n\n" + toUni("Medic (feat)") + ": Medicine, or expertise if already proficient.",
	eval : "AddSkillProf('Med', true, 'increment')",
	removeeval : "AddSkillProf('Med', false, 'increment')"
};
FeatsList["menacing"] = {
	name : "Menacing",
	source : ["UA:FS", 2],
	description : "I gain expertise with Intimidation, or proficiency if not so already. Instead of 1 attack in my Attack action, a humanoid within 30 ft I can see and that can see and hear me must make its Insight vs. my Intimidation or be frightened until end of my next turn. [+1 Cha]",
	improvements : "Menacing (feat): +1 Charisma;",
	scores : [0, 0, 0, 0, 0, 1],
	skills : "\n\n" + toUni("Menacing (feat)") + ": Intimidation, or expertise if already proficient.",
	eval : "AddSkillProf('Inti', true, 'increment')",
	removeeval : "AddSkillProf('Inti', false, 'increment')"
};
FeatsList["naturalist"] = {
	name : "Naturalist",
	source : ["UA:FS", 3],
	description : "I gain expertise with Nature, or proficiency if not so already. I learn the Druidcraft cantrip. I can cast Detect Poison and Disease without using a spell slot. Once I do so, I can't do it again until I finish a long rest. [+1 Intelligence]",
	improvements : "Naturalist (feat): +1 Intelligence;",
	scores : [0, 0, 0, 1, 0, 0],
	skills : "\n\n" + toUni("Naturalist (feat)") + ": Nature, or expertise if already proficient.",
	eval : "AddSkillProf('Nat', true, 'increment')",
	removeeval : "AddSkillProf('Nat', false, 'increment')",
	spellcastingBonus : [{
		name : "Naturalist",
		spellcastingAbility : 4,
		spells : ["druidcraft"],
		selection : ["druidcraft"],
		atwill : true
	}, {
		name : "Naturalist (1x long rest)",
		spells : ["detect poison and disease"],
		selection : ["detect poison and disease"],
		oncelr : true
	}]
};
FeatsList["perceptive"] = {
	name : "Perceptive",
	source : ["UA:FS", 3],
	description : "I gain expertise with Perception, or proficiency if not so already. I don't have disadvantage on my Perception checks from being in a lightly obscured area (dim light), provided that I can still both see and hear. [+1 Wisdom]",
	improvements : "Perceptive (feat): +1 Wisdom;",
	scores : [0, 0, 0, 0, 1, 0],
	skills : "\n\n" + toUni("Perceptive (feat)") + ": Perception, or expertise if already proficient.",
	vision : [["No disadv. on Perception in lightly obscured or dim light", 0]],
	eval : "AddSkillProf('Perc', true, 'increment');",
	removeeval : "AddSkillProf('Perc', false, 'increment');"
};
FeatsList["performer"] = {
	name : "Performer",
	source : ["UA:FS", 3],
	description : "I gain expertise with Performance, or proficiency if not so already. While performing, I can distract one humanoid. It must make its Insight vs. my Performance or have disadv. on its Perception and Investigation checks until I stop performing. [+1 Charisma]",
	improvements : "Performer (feat): +1 Charisma;",
	scores : [0, 0, 0, 0, 0, 1],
	skills : "\n\n" + toUni("Performer (feat)") + ": Performance, or expertise if already proficient.",
	eval : "AddSkillProf('Perf', true, 'increment')",
	removeeval : "AddSkillProf('Perf', false, 'increment')"
};
FeatsList["quick-fingered"] = {
	name : "Quick-Fingered",
	source : ["UA:FS", 3],
	description : "I gain expertise with Sleight of Hand, or proficiency if not so already. As a bonus action, I can make a Dexterity (Sleight of Hand) check to plant something on someone else, conceal an object on a creature, lift a purse, or take something from a pocket. [+1 Dexterity]",
	improvements : "Quick-Fingered (feat): +1 Dexterity;",
	scores : [0, 1, 0, 0, 0, 0],
	skills : "\n\n" + toUni("Quick-Fingered (feat)") + ": Sleight of Hand, or expertise if already proficient.",
	eval : "AddSkillProf('Sle', true, 'increment')",
	removeeval : "AddSkillProf('Sle', false, 'increment')",
	action : ["bonus action", ""]
};
FeatsList["silver-tongued"] = {
	name : "Silver-Tongued",
	source : ["UA:FS", 3],
	description : "I gain expertise with Deception, or proficiency if not so already. Instead of 1 attack in my Attack action, a humanoid within 30 ft makes its Insight vs. my Deception or until end of my next turn, I gain adv. on attacks and don't provoke its opportunity attacks. [+1 Cha]",
	improvements : "Silver-Tongued (feat): +1 Charisma;",
	scores : [0, 0, 0, 0, 0, 1],
	skills : "\n\n" + toUni("Silver-Tongued (feat)") + ": Deception, or expertise if already proficient.",
	eval : "AddSkillProf('Dec', true, 'increment')",
	removeeval : "AddSkillProf('Dec', false, 'increment')"
};
FeatsList["stealthy"] = {
	name : "Stealthy",
	source : ["UA:FS", 4],
	description : "I gain expertise with Stealth, or proficiency if not so already. When I'm hidden, I can move 10 ft to another position without revealing myself, provided that I won't be clearly visible in this new position either. [+1 Dexterity]",
	improvements : "Stealthy (feat): +1 Dexterity;",
	scores : [0, 1, 0, 0, 0, 0],
	skills : "\n\n" + toUni("Stealthy (feat)") + ": Stealth, or expertise if already proficient.",
	eval : "AddSkillProf('Ste', true, 'increment')",
	removeeval : "AddSkillProf('Ste', false, 'increment')"
};
FeatsList["survivalist"] = {
	name : "Survivalist",
	source : ["UA:FS", 4],
	description : "I gain expertise with Survival, or proficiency if not so already. I can cast Alarm without using a spell slot. Once I do so, I can't do it again until I finish a long rest. [+1 Wisdom]",
	improvements : "Survivalist (feat): +1 Wisdom;",
	scores : [0, 0, 0, 0, 1, 0],
	skills : "\n\n" + toUni("Survivalist (feat)") + ": Survival, or expertise if already proficient.",
	eval : "AddSkillProf('Sur', true, 'increment')",
	removeeval : "AddSkillProf('Sur', false, 'increment')",
	spellcastingBonus : {
		name : "1x long rest",
		spellcastingAbility : 5,
		spells : ["alarm"],
		selection : ["alarm"],
		oncelr : true
	}
};
FeatsList["theologian"] = {
	name : "Theologian",
	source : ["UA:FS", 4],
	description : "I gain expertise with Religion, or proficiency if not so already. I learn the Thaumaturgy cantrip. I can cast Detect Evil and Good without using a spell slot. Once I do so, I can't do it again until I finish a long rest. [+1 Intelligence]",
	improvements : "Theologian (feat): +1 Intelligence;",
	scores : [0, 0, 0, 1, 0, 0],
	skills : "\n\n" + toUni("Theologian (feat)") + ": Religion, or expertise if already proficient.",
	eval : "AddSkillProf('Rel', true, 'increment')",
	removeeval : "AddSkillProf('Rel', false, 'increment')",
	spellcastingBonus : [{
		name : "Theologian",
		spellcastingAbility : 4,
		spells : ["thaumaturgy"],
		selection : ["thaumaturgy"],
		atwill : true
	}, {
		name : "Theologian (1x long rest)",
		spells : ["detect evil and good"],
		selection : ["detect evil and good"],
		oncelr : true
	}]
};
var iFileName = "UA_20170424_Feats-for-Races.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Unearthed Arcana: Feats for Races article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:FR"] = {
	name : "Unearthed Arcana: Feats for Races",
	abbreviation : "UA:FR",
	group : "Unearthed Arcana",
	url : "http://media.wizards.com/2017/dnd/downloads/RJSJC2017_04UASkillFeats_24v10.pdf",
	date : "2017/04/24"
};

// Adds 46 feats (23 + 13 variants of Grudge-Bearer), all of which have a racial prerequisite
FeatsList["barbed hide"] = {
	name : "Barbed Hide",
	source : ["UA:FR", 1],
	prerequisite : "Being a Tiefling",
	prereqeval : "CurrentRace.known.indexOf('tiefling') !== -1",
	description : "I gain expertise with Intimidation, or proficiency if not so already. As a bonus action, I can protrude/retract small barbs from my skin. With them out, at the start of each of my turns I deal 1d6 piercing damage to any I'm grappling or are grappling me. [+1 Cha]",
	improvements : "Barbed Hide (feat): +1 Charisma;",
	scores : [0, 0, 0, 0, 0, 1],
	skills : "\n\n" + toUni("Barbed Hide (feat)") + ": Intimidation, or expertise if already proficient.",
	eval : "AddSkillProf('Inti', true, 'increment')",
	removeeval : "AddSkillProf('Inti', false, 'increment')",
	action : ["bonus action", ""]
};
FeatsList["bountiful luck"] = {
	name : "Bountiful Luck",
	source : ["UA:FR", 1],
	prerequisite : "Being a Halfling",
	prereqeval : "CurrentRace.known.indexOf('halfling') !== -1",
	description : "Whenever an ally I can see within 30 feet of me rolls a 1 on the d20 for an attack roll, an ability check, or a saving throw, I can use my reaction to let the ally reroll the die. The ally must use the new roll.",
	action : ["reaction", ""]
};
FeatsList["critter friend"] = {
	name : "Critter Friend",
	source : ["UA:FR", 1],
	prerequisite : "Being a Forest Gnome",
	prereqeval : "CurrentRace.known.indexOf('forest gnome') !== -1",
	description : "I gain expertise with Animal Handling, or proficiency if I didn't have that already. I can cast Speak With Animals and Animal Friendship without using a spell slot. I can cast each of these spells like this once per long rest. Intelligence is my spellcasting ability for these.",
	skills : "\n\n" + toUni("Critter Friend (feat)") + ": Animal Handling, or expertise if already proficient.",
	eval : "AddSkillProf('Ani', true, 'increment')",
	removeeval : "AddSkillProf('Ani', false, 'increment')",
	spellcastingBonus : [{
		name : "Once per long rest",
		spellcastingAbility : 4,
		spells : ["speak with animals"],
		selection : ["speak with animals"],
		oncelr : true
	}, {
		name : "Once per long rest",
		spells : ["animal friendship"],
		selection : ["animal friendship"],
		oncelr : true
	}]
};
FeatsList["dragon fear"] = {
	name : "Dragon Fear",
	source : ["UA:FR", 2],
	prerequisite : "Being a Dragonborn",
	prereqeval : "CurrentRace.known.indexOf('dragonborn') !== -1",
	calculate : "event.value = 'I can expend a Breath Weapon use to roar instead. Each creature of my choice within 30 ft that can see or hear me must make a DC ' + (8 + Number(What('Proficiency Bonus')) + Number(What('Wis Mod'))) + ' Wis save (8 + prof. bonus + Cha mod) or be frightened for 1 min. It can repeat the save whenever it takes damage. [+1 Str or Cha]';",
	improvements : "Dragon Fear (feat): +1 Strength or Charisma;",
	eval : "AddAction('action', 'Breath Weapon or Dragon Fear', 'Dragon Fear (feat)', 'Breath Weapon');",
	removeeval : "AddAction('action', 'Breath Weapon', 'Dragonborn (Draconic Ancestry)', 'Breath Weapon or Dragon Fear'); if (CurrentRace.known !== 'dragonborn') { RemoveAction('action', 'Breath Weapon'); }; "
};
FeatsList["dragon hide"] = {
	name : "Dragon Hide",
	source : ["UA:FR", 2],
	prerequisite : "Being a Dragonborn",
	prereqeval : "CurrentRace.known.indexOf('dragonborn') !== -1",
	description : "I gain retractable claws that I can retract or extend, requiring no action. While extended, my unarmed strikes deal 1d4 slashing damage. My scales harden, giving me a +1 bonus to AC when I'm not wearing armor. [+1 Strength or Charisma]",
	improvements : "Dragon Hide (feat): +1 Strength or Charisma;",
	eval : "AddWeapon('Retractable Claws'); AddACMisc(1, 'Dragon Hide', 'While not wearing armor, the Dragon Hide feat gives a +1 bonus to AC', 'CurrentArmour.known && ArmourList[CurrentArmour.known].type');",
	removeeval : "RemoveWeapon('Retractable Claws'); AddACMisc(0, 'Dragon Hide', 'While not wearing armor, the Dragon Hide feat gives a +1 bonus to AC');"
};
FeatsList["dragon wings"] = {
	name : "Dragon Wings",
	source : ["UA:FR", 2],
	prerequisite : "Being a Dragonborn",
	prereqeval : "CurrentRace.known.indexOf('dragonborn') !== -1",
	description : "I sprout draconic wings. With my wings, I have a flying speed of 20 feet if I am not wearing heavy armor and I am not exceeding my carrying capacity or encumbered.",
	eval : "var theSpd = What('Unit System') === 'imperial' ? '20 ft' : ConvertToMetric('20 ft', 0.5); AddString('Speed', theSpd + ' fly', '\\n');",
	removeeval : "var theSpd = What('Unit System') === 'imperial' ? '20 ft' : ConvertToMetric('20 ft', 0.5); RemoveString('Speed', theSpd + ' fly');"
};
FeatsList["drow high magic"] = {
	name : "Drow High Magic",
	source : ["UA:FR", 2],
	prerequisite : "Being a Drow (Dark Elf)",
	prereqeval : "CurrentRace.known.indexOf('dark elf') !== -1",
	description : "I can cast Detect Magic at will, without expending a spell slot. I can also cast Levitate and Dispel Magic without expending a spell slot, but each only once per long rest. Charisma is my spellcasting ability for these three spells.",
	spellcastingBonus : [{
		name : "At will",
		spellcastingAbility : 6,
		spells : ["detect magic"],
		selection : ["detect magic"],
		atwill : true
	}, {
		name : "Once per long rest",
		spells : ["levitate"],
		selection : ["levitate"],
		oncelr : true
	}, {
		name : "Once per long rest",
		spells : ["dispel magic"],
		selection : ["dispel magic"],
		oncelr : true
	}]
};
FeatsList["dwarf resilience"] = {
	name : "Dwarf Resilience",
	source : ["UA:FR", 2],
	prerequisite : "Being a Dwarf",
	prereqeval : "CurrentRace.known.indexOf('dwarf') !== -1",
	description : "Whenever I take the Dodge action in combat, I can spend one Hit Die to heal myself. I roll the die, add my Constitution modifier, and regain a number of hit points equal to the total (minimum of 1). [+1 Constitution]",
	improvements : "Dwarf Resilience (feat): +1 Constitution;",
	scores : [0, 0, 1, 0, 0, 0]
};
FeatsList["elven accuracy"] = {
	name : "Elven Accuracy",
	source : ["UA:FR", 2],
	prerequisite : "Being an Elf or a Half-Elf",
	prereqeval : "(/elf|eladrin/i).test(CurrentRace.known)",
	description : "Whenever I have advantage on an attack roll, I can reroll one of the dice once. [+1 Dexterity]",
	improvements : "Elven Accuracy (feat): +1 Dexterity;",
	scores : [0, 1, 0, 0, 0, 0]
};
FeatsList["everybody's friend"] = {
	name : "Everybody's Friend",
	source : ["UA:FR", 2],
	prerequisite : "Being a Half-Elf",
	prereqeval : "(/^(?=.*half)(?=.*elf).*$/i).test(CurrentRace.known)",
	description : "I gain expertise with Deception and Persuasion, or proficiency with them if I didn't have that already. [+1 Charisma]",
	improvements : "Everybody's Friend (feat): +1 Charisma;",
	scores : [0, 0, 0, 0, 0, 1],
	skills : "\n\n" + toUni("Everybody's Friend (feat)") + ": Deception and Persuasion, or, for each, expertise if already proficient.",
	eval : "AddSkillProf('Dec', true, 'increment'); AddSkillProf('Pers', true, 'increment');",
	removeeval : "AddSkillProf('Dec', false, 'increment'); AddSkillProf('Pers', false, 'increment');"
};
FeatsList["fade away"] = {
	name : "Fade Away",
	source : ["UA:FR", 2],
	prerequisite : "Being a Gnome",
	prereqeval : "CurrentRace.known.indexOf('gnome') !== -1",
	description : "As a reaction when I take damage, I can magically become invisible until the end of my next turn or until I attack, deal damage, or force someone to make a saving throw. Once I do this, I can't do so again until I finish a short rest. [+1 Intelligence]",
	improvements : "Fade Away (feat): +1 Intelligence;",
	scores : [0, 0, 0, 1, 0, 0],
	action : ["reaction", ""],
	eval : "AddFeature('Fade Away', 1, '', 'short rest', 'the Fade Away feat');",
	removeeval : "RemoveFeature('Fade Away');"
};
FeatsList["fey teleportation"] = {
	name : "Fey Teleportation",
	source : ["UA:FR", 3],
	prerequisite : "Being a High Elf",
	prereqeval : "CurrentRace.known.indexOf('high elf') !== -1",
	description : "I can cast Misty Step without using a spell slot. I can do so once per short rest. Intelligence is my spellcasting ability for this spell. [+1 Intelligence]",
	improvements : "Fey Teleportation (feat): +1 Intelligence;",
	scores : [0, 0, 0, 1, 0, 0],
	spellcastingBonus : {
		name : "Once per short rest",
		spellcastingAbility : 4,
		spells : ["misty step"],
		selection : ["misty step"],
		oncesr : true
	},
	eval : "AddFeature('Fey Teleportation', 1, '', 'short rest', 'Fey Teleportation feat');",
	removeeval : "RemoveFeature('Fey Teleportation');"
};
FeatsList["flames of phlegethos"] = {
	name : "Flames of Phlegethos",
	source : ["UA:FR", 3],
	prerequisite : "Being a Tiefling",
	prereqeval : "CurrentRace.known.indexOf('tiefling') !== -1",
	description : "When I cast a fire damage spell, I can reroll any 1 on fire damage dice. I can then sheathe myself in flame until my next turn ends. These shed bright light in 30 ft, dim light in 30 ft and cause any within 5 ft that hit me in melee take 1d4 fire damage. [+1 Int or Cha]",
	improvements : "Flames of Phlegethos (feat): +1 Intelligence or Charisma;"	
};
FeatsList["grudge-bearer"] = {
	name : "Grudge-Bearer [2 humanoids]",
	source : ["UA:FR", 3],
	prerequisite : "Being a Dwarf",
	prereqeval : "CurrentRace.known.indexOf('dwarf') !== -1",
	description : "My hatred for 2 humanoid races gives me these benefits against them: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related Arcana/History/Nature/Religion checks [+1 Str, Con, or Wis]",
	improvements : "Grudge-Bearer [2 humanoids] (feat): +1 Strength, Constitution, or Wisdom;"	
};
FeatsList["grudge-bearer [aberrations]"] = {
	name : "Grudge-Bearer [aberrations]",
	source : ["UA:FR", 3],
	prerequisite : "Being a Dwarf",
	prereqeval : "CurrentRace.known.indexOf('dwarf') !== -1",
	description : "My hatred for aberrations gives me these benefits against them: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related Arcana, History, Nature, and Religion checks [+1 Str, Con, or Wis]",
	improvements : "Grudge-Bearer [aberrations] (feat): +1 Strength, Constitution, or Wisdom;"	
};
var AmendGrudgeBearerFeats = function() { // Create the other variants of the Grudge-bearer feat dynamically
	var GBarray = ["beasts", "celestials", "constructs", "dragons", "elementals", "fey", "fiends", "giants", "monstrosities", "oozes", "plants", "undead"];
	for (var i = 0; i < GBarray.length; i++) {
		var GBcrea = GBarray[i];
		var theNm = "grudge-bearer [" + GBcrea + "]";
		FeatsList[theNm] = newObj(FeatsList["grudge-bearer [aberrations]"]);
		FeatsList[theNm].name = FeatsList[theNm].name.replace("aberrations", GBcrea);
		FeatsList[theNm].description = FeatsList[theNm].description.replace("aberrations", GBcrea);
		FeatsList[theNm].improvements = FeatsList[theNm].improvements.replace("aberrations", GBcrea);
	};
}();
FeatsList["human determination"] = {
	name : "Human Determination",
	source : ["UA:FR", 3],
	prerequisite : "Being a Human",
	prereqeval : "CurrentRace.known.indexOf('human') !== -1",
	description : "When I make an attack roll, an ability check, or a saving throw, I can do so with advantage. Once I use this ability, I can't do so again until I finish a short rest.\n[+1 to one ability score]",
	improvements : "Human Determination (feat): +1 to one ability score of your choice;",
	eval : "AddFeature('Human Determination (attack/check/save)', 1, '', 'short rest', 'Human Determination feat');",
	removeeval : "RemoveFeature('Human Determination (attack/check/save)');"
};
FeatsList["infernal constitution"] = {
	name : "Infernal Constitution",
	source : ["UA:FR", 3],
	prerequisite : "Being a Tiefling",
	prereqeval : "CurrentRace.known.indexOf('tiefling') !== -1",
	description : "I have resistance to cold and poison damage and I have advantage on saving throws against being poisoned.\n[+1 Constitution]",
	improvements : "Infernal Constitution (feat): +1 Constitution;",
	scores : [0, 0, 1, 0, 0, 0],
	dmgres : ["Cold", "Poison"],
	savetxt : { adv_vs : ["poison"] }
};
FeatsList["orcish aggression"] = {
	name : "Orcish Aggression",
	source : ["UA:FR", 3],
	prerequisite : "Being a Half-Orc",
	prereqeval : "(/^(?=.*half)(?=.*orc).*$/i).test(CurrentRace.known)",
	description : "As a bonus action, I can move up to my speed toward an enemy of my choice that I can see or hear. I must end this move closer to the enemy than I started.",
	action : ["bonus action", ""]
};
FeatsList["orcish fury"] = {
	name : "Orcish Fury",
	source : ["UA:FR", 4],
	prerequisite : "Being a Half-Orc",
	prereqeval : "(/^(?=.*half)(?=.*orc).*$/i).test(CurrentRace.known)",
	description : "Once per short rest, I can roll an extra damage die for an attack with a simple or martial weapon. In addition, Immediately after I use my Relentless Endurance trait, I can use my reaction to make one weapon attack. [+1 Strength or Constitution]",
	improvements : "Orcish Fury (feat): +1 Strength or Constitution;",
	action : ["reaction", " (after Relentless Endurance)"],
	eval : "AddFeature('Orcish Fury (extra damage)', 1, '', 'short rest', 'Orcish Fury feat');",
	removeeval : "RemoveFeature('Orcish Fury (extra damage)');"
};
FeatsList["prodigy"] = {
	name : "Prodigy",
	source : ["UA:FR", 4],
	prerequisite : "Being a Half-Elf or a Human",
	prereqeval : "(/human|^(?=.*half)(?=.*elf).*$/i).test(CurrentRace.known)",
	description : "I gain one skill proficiency of my choice, one tool proficiency of my choice, fluency in one language of my choice, and +1 to one ability score of my choice. [+1 to one ability score]",
	improvements : "Prodigy (feat): +1 to one ability score of your choice;",
	skills : "\n\n" + toUni("Prodigy (feat)") + ": Choose any one skill.",
	languageProfs : [1],
	toolProfs : [["Any tool", 1]]
};
FeatsList["second chance"] = {
	name : "Second Chance",
	source : ["UA:FR", 4],
	prerequisite : "Being a Halfling",
	prereqeval : "CurrentRace.known.indexOf('halfling') !== -1",
	description : "When a creature I can see hits me with an attack roll, I can use my reaction to force that creature to reroll. Once I use this ability, I can't do so again until I finish a short rest.\n[+1 Dexterity, Constitution, or Charisma]",
	improvements : "Second Chance (feat): +1 Dexterity, Constitution, or Charisma;",
	eval : "AddFeature('Second Chance', 1, '', 'short rest', 'Second Chance feat');",
	removeeval : "RemoveFeature('Second Chance');",
	action : ["reaction", ""]
};
FeatsList["squat nimbleness"] = {
	name : "Squat Nimbleness",
	source : ["UA:FR", 4],
	prerequisite : "Being a Dwarf, Gnome, or Halfling",
	prereqeval : "(/dwarf|gnome|halfling/i).test(CurrentRace.known)",
	description : "My walking speed increases by 5 ft. I gain proficiency in the Acrobatics or Athletics skill. If I'm already proficient in the chosen skill, I gain expertise with it instead.\n[+1 Strength or Dexterity]",
	improvements : "Squat Nimbleness (feat): +1 Strength or Dexterity;",
	skills : "\n\n" + toUni("Squat Nimbleness (feat)") + ": Acrobatics or Athletics; Expertise if already proficient.",
	speed : { walk : {spd : "+5", enc : "+5" } }
};
FeatsList["wonder maker"] = {
	name : "Wonder Maker",
	source : ["UA:FR", 4],
	prerequisite : "Being a Rock Gnome",
	prereqeval : "CurrentRace.known.indexOf('rock gnome') !== -1",
	description : "I gain expertise with Tinker's Tools. I get additional Tinker options: Alarm (audible to 300 ft for 1 min), Calculator, Lifter (as block and tackle that multiplies max lift weight by 5), Timekeeper (pocket watch), Weather Sensor (predict for 1-mile, 4 hours) [+1 Dex or Int]",
	improvements : "Wonder Maker (feat): +1 Dexterity or Intelligence;",
	eval : "if ((/tinker/i).test(What('Too Text'))) { Checkbox('Too Exp', true); };",
	removeeval : "if ((/tinker/i).test(What('Too Text'))) { Checkbox('Too Exp', false); };"	
};
FeatsList["wood elf magic"] = {
	name : "Wood Elf Magic",
	source : ["UA:FR", 4],
	prerequisite : "Being a Wood Elf",
	prereqeval : "CurrentRace.known.indexOf('wood elf') !== -1",
	description : "I learn a druid cantrip. In addition, I can cast Longstrider and Pass Without Trace, without expending a spell slot, but each only once per long rest. Wisdom is my spellcasting ability for these three spells.",
	spellcastingBonus : [{
		name : "Druid Cantrip",
		spellcastingAbility : 5,
		"class" : "druid",
		level : [0, 0],
		atwill : true
	}, {
		name : "Once per long rest",
		spells : ["longstrider"],
		selection : ["longstrider"],
		oncelr : true
	}, {
		name : "Once per long rest",
		spells : ["pass without trace"],
		selection : ["pass without trace"],
		oncelr : true
	}]
};

var iFileName = "UA_20170501_Revised-Subclasses.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Unearthed Arcana: Revised Subclasses article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:RS"] = {
	name : "Unearthed Arcana: Revised Subclasses",
	abbreviation : "UA:RS",
	group : "Unearthed Arcana",
	url : "http://media.wizards.com/2017/dnd/downloads/UA-RevisedSubclasses.pdf",
	date : "2017/05/01"
};

// Add 5 subclasses from previous Unearthed Arcana articles: 1 for the Barbarian, 1 for the Bard, 1 for the Fighter, 1 for the Monk, and 1 for the Sorcerer
AddSubClass("barbarian", "ancestral guardian2", {
	regExpSearch : /^(?=.*ancestral)(?=.*guardian).*$/i,
	subname : "Path of the Ancestral Guardian",
	source : ["UA:RS", 1],
	fullname : "Ancestral Guardian",
	features : {
		"subclassfeature3" : {
			name : "Ancestral Protectors",
			source : ["UA:RS", 1],
			minlevel : 3,
			description : desc([
				"While raging, the first creature I hit with an attack on my turn becomes distracted",
				"While distracted, it has disadvantage on attack rolls that don't target me",
				"In addition, everybody but me counts as having resistance to all of the target's attacks",
				"This lasts until the start of my next turn, or until my rage ends"
			])
		},
		"subclassfeature6" : {
			name : "Spirit Shield",
			source : ["UA:RS", 1],
			minlevel : 6,
			description : desc([
				"As a reaction while raging when an ally I see within 30 ft is damaged, I can reduce it",
				"My guardian spirits reduce the damage by an amount equal to the roll of the dice"
			]),
			additional : levels.map(function (n) { return n < 6 ? "" : (n < 10 ? 2 : n < 14 ? 3 : 4) + "d8 damage reduced"; }),
			action : ["reaction", ""]
		},
		"subclassfeature10" : {
			name : "Consult the Spirits",
			source : ["UA:RS", 1],
			minlevel : 10,
			description : "\n   " + "Through consulting my ancestral spirits, I can cast Clairvoyance without a spell slot",
			spellcastingBonus : {
				name : "Consult the Spirits",
				spells : ["clairvoyance"],
				selection : ["clairvoyance"],
				oncesr : true
			},
			usages : 1,
			recovery : "short rest"
		},
		"subclassfeature14" : {
			name : "Vengeful Ancestors",
			source : ["UA:RS", 1],
			minlevel : 14,
			description : "\n   " + "Whenever I use Spirit Shield to reduce damage, the attacker takes the reduced damage"
		}
	}
});
AddSubClass("bard", "college of swords2", {
	regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*\bswords?\b).*$/i,
	subname : "College of Swords",
	source : ["UA:RS", 1],
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiencies",
			source : ["UA:RS", 2],
			minlevel : 3,
			description : desc([
				"I gain proficiency with medium armor and scimitars",
				"I can a simple or martial melee weapon that I'm proficient with as spellcasting focus"
			]),
			armor : [false, true, false, false],
			weapons : [false, false, ["scimitar"]]
		},
		"subclassfeature3.1" : {
			name : "Fighting Style",
			source : ["UA:RS", 2],
			minlevel : 3,
			description : "\n   " + "Select a Fighting Style for the college of swords using the \"Choose Feature\" button above",
			choices : ["Dueling", "Two-Weapon Fighting"],
			"dueling" : FightingStyles.dueling,
			"two-weapon fighting" : FightingStyles.two_weapon
		},
		"subclassfeature3.2" : {
			name : "Blade Flourish",
			source : ["UA:RS", 2],
			minlevel : 3,
			description : desc([
				"As an action, I can make one melee weapon attack and use one flourish option below",
				"In addition, I gain +10 ft to my walking speed until the end of the current turn",
				" - Defensive Flourish [one Bardic Inspiration die]",
				"    I add the result of the die to my AC until the start of my next turn",
				" - Slashing Flourish [one Bardic Inspiration die]",
				"    If the attack hits, I can use a die to deal damage to creatures next to the target",
				"    All creatures within 5 ft of the target take the result of the die in damage",
				" - Mobile Flourish [one Bardic Inspiration die]",
				"    If the attack hits, I can use a die to push the target back 5 + the die result in feet",
				"    After this, I can use my reaction to move my speed to a space next to the target"
			]),
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Cunning Flourish",
			source : ["UA:RS", 2],
			minlevel : 6,
			description : "\n   " + "When I take the Blade Flourish action, I can attack twice, but still only use one flourish"
		},
		"subclassfeature14" : {
			name : "Master Flourish",
			source : ["UA:RS", 2],
			minlevel : 14,
			description : "\n   " + "When I do a Blade Flourish, I can use a d6 instead of expending a Bardic Inspiration die"
		}
	}
});
AddSubClass("fighter", "arcane archer2", {
	regExpSearch : /^(?=.*arcane)(?=.*archer).*$/i,
	subname : "Arcane Archer",
	source : ["UA:RS", 2],
	fullname : "Arcane Archer",
	abilitySave : 4,
	features : {
		"subclassfeature3" : {
			name : "Magic Arrow",
			source : ["UA:RS", 3],
			minlevel : 3,
			description : desc([
				"Whenever I fire a nonmagical arrow from a short- or longbow I can make it magical",
				"This magical arrow gives a +1 bonus to the attack and damage rolls for the one attack"
			]),
			calcChanges : {
				atkCalc : ["if ((/longbow|shortbow/i).test(WeaponName) && !thisWeapon[1]) {output.magic += 1; }; ", "Any longbow or shortbow that doesn't include a magic bonus in its name gets a +1 magical bonus to damage and to hit as any arrows fired with it are automatically made magical."]
			}
		},
		"subclassfeature3.1" : {
			name : "Arcane Shot",
			source : ["UA:RS", 3],
			minlevel : 3,
			description : desc([
				"I can unleash magical effects when I fire a magic arrow from a short- or longbow",
				"I can use this once per turn as part of the Attack action, after an attack hits",
				"I know a number of Arcane Shot Options and learn additional at certain levels",
				"Use the \"Choose Features\" button above to add Arcane Shots Options to the third page"
			]),
			usages : 2,
			recovery : "short rest",
			additional : levels.map( function(n) { return n < 3 ? "" : (n < 7 ? 2 : n < 10 ? 3 : n < 15 ? 4 : n < 18 ? 5 : 6) + " options known"; }),
			extraname : "Arcane Shot Option",
			extrachoices : ["Banishing Arrow [Abjuration]", "Brute Bane Arrow [Necromancy]", "Bursting Arrow [Evocation]", "Grasping Arrow [Conjuration]", "Mind-Scrambling Arrow [Enchantment]", "Piercing Arrow [Transmutation]", "Seeking Arrow [Divination]", "Shadow Arrow [Illusion]"],
			"banishing arrow [abjuration]" : {
				name : "Banishing Arrow [Abjuration]",
				source : ["UA:RS", 3],
				description : desc([
					"The target makes a Cha save or is banished to the Feywild until the end of its next turn",
					"While banished, its speed is 0 and is incapacitated; It re-appearing in the same spot",
					"When I reach 18th level, this Arcane Shot Option also does an extra 2d6 force damage"
				]),
				additional : levels.map( function(n) { return n < 18 ? "" : "+2d6 force damage"; })
			},
			"brute bane arrow [necromancy]" : {
				name : "Brute Bane Arrow [Necromancy]",
				source : ["UA:RS", 3],
				description : desc([
					"The target takes extra necrotic damage and must make a Constitution save",
					"If failed, the damage of the target's attacks is halved until the start of my next turn"
				]),
				additional : levels.map( function(n) { return n < 3 ? "" : "+" + (n < 18 ? 2 : 4) + "d6 necrotic damage"; })
			},
			"bursting arrow [evocation]" : {
				name : "Bursting Arrow [Evocation]",
				source : ["UA:RS", 3],
				description : "" + "\n   " + "The target, in addition to the shot, and all creatures within 10 ft of it take damage",
				additional : levels.map( function(n) { return n < 3 ? "" : "+" + (n < 18 ? 2 : 4) + "d6 force damage"; })
			},
			"grasping arrow [conjuration]" : {
				name : "Grasping Arrow [Conjuration]",
				source : ["UA:RS", 3],
				description : desc([
					"The target takes extra poison damage as brambles wrap around it for 1 minute",
					"The brambles give it -10 ft speed and do it slashing damage every round it moves",
					"These can be removed by it or another as an action with Strength (Athletics) vs. my DC"
				]),
				additional : levels.map( function(n) { return n < 3 ? "" : (n < 18 ? 2 : 4) + "d6 poison/slash. damage"; })
			},
			"mind-scrambling arrow [enchantment]" : {
				name : "Mind-Scrambling Arrow [Enchantment]",
				source : ["UA:RS", 4],
				description : desc([
					"The target takes extra psychic damage and must succeed on a Wisdom save",
					"If failed, it can't attack or harm one of my allies within 30 ft of it that I choose",
					"This lasts until the start of my next turn or until the chosen ally harms the target"
				]),
				additional : levels.map( function(n) { return n < 3 ? "" : "+" + (n < 18 ? 2 : 4) + "d6 damage"; })
			},
			"piercing arrow [transmutation]" : {
				name : "Piercing Arrow [Transmutation]",
				source : ["UA:RS", 4],
				description : desc([
					"With this I don't roll for the attack, but shoot the arrow in a 30-ft long, 1-ft wide line",
					"It passes through objects, ignoring cover, but all creatures in the area take damage",
					"The damage is the same as a normal hit from my attack, plus extra piercing damage",
					"A creature can make a Dexterity save to reduce the damage by half"
				]),
				additional : levels.map( function(n) { return n < 3 ? "" : "+" + (n < 18 ? 1 : 2) + "d6 piercing damage"; })
			},
			"seeking arrow [divination]" : {
				name : "Seeking Arrow [Divination]",
				source : ["UA:RS", 4],
				description : desc([
					"With this I don't roll for the attack, but I choose a target I have seen in the last minute",
					"The seeking arrow moves around corners, obstacles, and ignores cover to hit the target",
					"It is hit if it is within the weapon's range and there is a path for the arrow to get to it",
					"The target takes the full damage of the attack plus extra force damage",
					"It can make a Dexterity save to reduce the damage by half; If failed, I know its location"
				]),
				additional : levels.map( function(n) { return n < 3 ? "" : "+" + (n < 18 ? 1 : 2) + "d6 force damage"; })
			},
			"shadow arrow [illusion]" : {
				name : "Shadow Arrow [Illusion]",
				source : ["UA:RS", 4],
				description : desc([
					"The target takes extra psychic damage and must succeed on a Wisdom save",
					"If failed, the target can't see anything beyond 5 ft until the end of my next turn"
				]),
				additional : levels.map( function(n) { return n < 3 ? "" : "+" + (n < 18 ? 2 : 4) + "d6 psyhic damage"; })
			}
		},
		"subclassfeature3.2" : {
			name : "Arcane Archer's Lore",
			source : ["UA:RS", 3],
			minlevel : 3,
			description : "\n   " + "I gain proficiency with either the Arcana or Nature skill",
			skillstxt : "\n\n" + toUni("Arcane Archer") + ": Choose Arcana or Nature."
		},
		"subclassfeature7" : {
			name : "Curving Shot",
			source : ["UA:RS", 3],
			minlevel : 7,
			description : desc([
				"When I miss with a magic arrow, I can use a bonus action to redirect the attack",
				"I reroll the attack against a different target within 60 ft of the original target"
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature15" : {
			name : "Ever-Ready Shot",
			source : ["UA:RS", 3],
			minlevel : 15,
			description : "\n   " + "I regain one use of Arcane Shot if I have no more remaining when I roll initiative"
		}
	}
});
AddSubClass("monk", "way of the kensei2", {
	regExpSearch : /kensei/i,
	subname : "Way of the Kensei",
	source : ["UA:RS", 4],
	features : {
		"subclassfeature3" : {
			name : "Path of the Kensei",
			source : ["UA:RS", 4],
			minlevel : 3,
			description : desc([
				"Some weapons, that don't have heavy or special property, are kensei weapons for me",
				"At least one ranged and one melee weapon, more at higher levels (longbow does qualify)",
				"With these: proficient, count as a monk weapons, special bonuses while holding them:",
				" - If I do an unarmed strike during an Attack action, +2 AC until my next turn starts",
				" - As a bonus action, ranged kensei weapon attacks deal +1d4 damage in current turn"
			]),
			action: ["bonus action", " (with ranged)"],
			additional : levels.map( function(n) { return n < 3 ? "" : (n < 6 ? 2 : n < 11 ? 3 : n < 17 ? 4 : 5) + " kensei weapons"; }),
			calcChanges : {
				atkAdd : [
					"var monkDie = function(n) {return n < 5 ? 4 : n < 11 ? 6 : n < 17 ? 8 : 10;}; if (classes.known.monk && classes.known.monk.level > 2 && theWea && !isSpell && !theWea.monkweapon && (!(/heavy|special/i).test(fields.Description) || WeaponName === 'longbow') && inputText.toLowerCase().indexOf('kensei') !== -1) {var aMonkDie = aMonkDie ? aMonkDie : monkDie(classes.known.monk.level); try {var curDie = eval(fields.Damage_Die.replace('d', '*'));} catch (e) {var curDie = 'x';}; if (isNaN(curDie) || curDie < aMonkDie) {fields.Damage_Die = '1d' + aMonkDie; }; if (theWea.ability === 1) {fields.Mod = StrDex; }; if (isRangedWeapon) {fields.Description += (fields.Description ? '; ' : '') + 'As bonus action with Attack action, +1d4 damage'; }; fields.Proficiency = true; }; ",
					"If I inlcude the word 'Kensei' in the name of a weapon that doesn't have the Heavy or Special attribute, or that is a longbow, that weapon gains the same benefits as any other 'Monk Weapon'.\nIn addition, with ranged 'Kensei Weapons', I can take a bonus action to have that hit, and any other hit after that as part of the same action, do +1d4 damage."
				]
			}
		},
		"ki-empowered strikes" : {
			name : "One with the Blade",
			source : ["UA:RS", 5],
			minlevel : 6,
			description : "\n   " + "My unarmed strikes and kensei weapon attacks count as magical",
			calcChanges : {
				atkAdd : ["if (((/unarmed strike/i).test(WeaponName) || (inputText.toLowerCase().indexOf('kensei') !== -1  && theWea && !isSpell && (!(/heavy|special/i).test(fields.Description) || WeaponName === 'longbow'))) && fields.Description.indexOf('Counts as magical') === -1 && !thisWeapon[1]) {fields.Description += (fields.Description ? '; ' : '') + 'Counts as magical';}; ", "My unarmed strikes and any Kensei Weapons count as magical for overcoming resistances and immunities."]
			},
			extraname : "Way of the Kensei 6",
			"precise strike" : {
				name : "Precise Strike",
				source : ["UA:RS", 5],
				description : " [1 ki point]" + "\n   " + "Once per turn when I hit with a kensei weapon, I can do a martial arts die extra damage",
				action : ["bonus action", ""]
			},
			eval : "ClassFeatureOptions(['monk', 'ki-empowered strikes', 'precise strike', 'extra']);",
			removeeval : "ClassFeatureOptions(['monk', 'ki-empowered strikes', 'precise strike', 'extra'], 'remove');"
		},
		"subclassfeature17" : {
			name : "Unerring Accuracy",
			source : ["UA:RS", 5],
			minlevel : 17,
			description : "\n   " + "On each of my turns, I can reroll one weapon attack roll I make that misses",
			extraname : "Way of the Kensei 11",
			"sharpen the blade" : {
				name : "Sharpen the Blade",
				source : ["UA:RS", 5],
				description : " [1 to 3 ki points]" + "\n   " + "As a bonus action, I can grant my weapon a bonus to attack and damage rolls" + "\n   " + "This bonus is equal to the number of ki points I spend; It lasts for 1 minute",
				action : ["bonus action", ""]
			},
			changeeval : "if (newClassLvl.monk >= 11 && (What('Extra.Notes') + What('Class Features')).toLowerCase().indexOf('sharpen the blade') === -1) {ClassFeatureOptions(['monk', 'subclassfeature17', 'sharpen the blade', 'extra'])} else if (newClassLvl.monk <= 11 && oldClassLvl.monk >= 11) {ClassFeatureOptions(['monk', 'subclassfeature17', 'sharpen the blade', 'extra'], 'remove')}"
		}
	}
});
AddSubClass("sorcerer", "favoured soul2", {
	regExpSearch : /^(?=.*favou?red)(?=.*soul).*$/i,
	subname : "Favored Soul",
	source : ["UA:RS", 5],
	fullname : "Favored Soul",
	spellcastingList : {
		"class" : ["cleric", "sorcerer"]
	},
	features : {
		"subclassfeature1" : {
			name : "Divine Magic",
			source : ["UA:RS", 5],
			minlevel : 1,
			description : desc([
				"When I select my 1st level or higher spells, I can also pick spells from the cleric spell list",
				"These cleric spells count as sorcerer spells for me",
				"I also learn Cure Wounds, which doesn't count against my number of spells known"
			]),
			spellcastingBonus : {
				name : "Divine Magic",
				spells : ["cure wounds"],
				selection : ["cure wounds"]
			}
		},
		"subclassfeature1.2" : {
			name : "Favored by the Gods",
			source : ["UA:RS", 5],
			minlevel : 1,
			description : "\n   " + "If I fail a saving throw or miss with an attack roll, I can add 2d4 to the total",
			recovery : "short rest",
			usages : 1
		},
		"subclassfeature6" : {
			name : "Empowered Healing",
			source : ["UA:RS", 5],
			minlevel : 6,
			description : " [1 sorcery point]" + desc([
				"When I roll dice for healing with one of my sorcerer spells, I can reroll them once",
				"By spending 1 sorcery point, I can reroll any number of those dice for that spell"
			])
		},
		"subclassfeature14" : {
			name : "Angelic Form",
			source : ["UA:RS", 5],
			minlevel : 14,
			description : desc([
				"Choose an otherworldly quality using the \"Choose Feature\" button above",
				"As a bonus action, I can manifest a pair of spectral wings that give me 30 ft fly speed",
				"These wings last until I become incapacitated or I dismiss them as a bonus action"
			]),
			choices : ["Beautiful", "Youthful", "Kind", "Imposing"],
			"beautiful" : {
				name : "Angelic Form: Beautiful",
				description : desc([
					"My appearance takes on an otherworldly quality of beauty",
					"As a bonus action, I can manifest a pair of spectral wings that give me 30 ft fly speed",
					"These wings last until I become incapacitated or I dismiss them as a bonus action"
				])
			},
			"youthful" : {
				name : "Angelic Form: Youthful",
				description : desc([
					"My appearance takes on an otherworldly quality of youthfulness",
					"As a bonus action, I can manifest a pair of spectral wings that give me 30 ft fly speed",
					"These wings last until I become incapacitated or I dismiss them as a bonus action"
				])
			},
			"kind" : {
				name : "Angelic Form: Kind",
				description : desc([
					"My appearance takes on an otherworldly quality of kindness",
					"As a bonus action, I can manifest a pair of spectral wings that give me 30 ft fly speed",
					"These wings last until I become incapacitated or I dismiss them as a bonus action"
				])
			},
			"imposing" : {
				name : "Angelic Form: Imposing",
				description : desc([
					"My appearance takes on an otherworldly quality of imposingness",
					"As a bonus action, I can manifest a pair of spectral wings that give me 30 ft fly speed",
					"These wings last until I become incapacitated or I dismiss them as a bonus action"
				])
			},
			action : ["bonus action", " Wings"],
			speed : { fly : { spd : 30, enc : 20 } }
		},
		"subclassfeature18" : {
			name : "Unearthly Recovery",
			source : ["UA:RS", 6],
			minlevel : 18,
			description : "\n   " + "As a bonus action when I have less than half of my max HP, I can heal myself" + "\n   " + "I regain a number of HP equal to half my maximum Hit Points",
			action : ["bonus action", ""],
			recovery : "long rest",
			usages : 1
		}
	}
});
var iFileName = "UA_20170605_Revised-Class-Options.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Unearthed Arcana: Revised Class Options article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:RCO"] = {
	name : "Unearthed Arcana: Revised Class Options",
	abbreviation : "UA:RCO",
	group : "Unearthed Arcana",
	url : "http://media.wizards.com/2017/dnd/downloads/June5UA_RevisedClassOptv1.pdf",
	date : "2017/06/05"
};

// Adds 4 revised subclasses from previous Unearthed Arcana articles: 1 for the Druid, 1 for the Fighter, 1 for the Paladin, and 1 for the Warlock
AddSubClass("druid", "circle of the shepherd2", {
	regExpSearch : /^(?=.*(druid|shaman))(?=.*shepherd).*$/i,
	subname : "Circle of the Shepherd",
	source : ["UA:RCO", 1],
	features : {
		"subclassfeature2" : {
			name : "Speech of the Woods",
			source : ["UA:RCO", 1],
			minlevel : 2,
			description : desc([
				"I can talk with beasts, they understand me and I them, to the limit of their intelligence",
				"This doesn't automatically make me friends with all beasts; Additionally, I learn Sylvan"
			]),
			languageProfs : ["Sylvan"]
		},
		"subclassfeature2.1" : {
			name : "Spirit Totem",
			source : ["UA:RCO", 1],
			minlevel : 2,
			description : desc([
				"As a bonus action, I can summon, or move, a spirit to a point I can see within 60 ft",
				"The spirit is a Bear, Hawk, or Unicorn (see below), which has a 30-ft radius aura",
				"It is incorporeal, immobile, doesn't counts as a creature or object, and persists for 1 min",
				" - " + "Bear: my allies in the area and I instantly gain 5 + my druid level in temp HP",
				"    " + "While in the aura, my allies and I gain advantage on Strength checks and saves",
				" - " + "Hawk: As a reaction, I can grant advantage on an attack vs. a target in the aura",
				" - " + "Unicorn: my allies and I gain advantage on ability checks to detect targets in the aura",
				"    " + "If I cast a healing spell with a spell slot, allies in the aura heal my druid level in HP"
			]),
			usages : 1,
			recovery : "short rest",
			action : ["bonus action", ""]
		},
		"subclassfeature6" : {
			name : "Mighty Summoner",
			source : ["UA:RCO", 2],
			minlevel : 6,
			description : "\n   " + "Beasts or Fey I summon with spells get +2 HP per HD and their attacks count as magical"
		},
		"subclassfeature10" : {
			name : "Guardian Spirit",
			source : ["UA:RCO", 2],
			minlevel : 10,
			description : "\n   " + "When a Beast or Fey that I summoned ends its turn in my Spirit Totem aura, it heals",
			additional : levels.map(function (n) {
				if (n < 10) return "";
				return "heals " + Math.floor(n / 2) + " HP";
			})
		},
		"subclassfeature14" : {
			name : "Faithful Summons",
			source : ["UA:RCO", 2],
			minlevel : 14,
			description : desc([
				"When I am reduced to 0 HP or incapacitated against my will, I can summon protectors",
				"I gain the benefits of a Conjure Animals spell as if cast with a 9th-level spell slot",
				"It summons 4 beast of my choice with CR 2 or lower within 20 ft of me for 1 hour",
				"If they receive no commands from me, they protect me from harm and attack my foes"
			]),
			usages : 1,
			recovery : "long rest"
		}
	}
});
AddSubClass("fighter", "cavalier2", {
	regExpSearch : /cavalier/i,
	subname : "Cavalier",
	source : ["UA:RCO", 2],
	fullname : "Cavalier",
	abilitySave : 1,
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiency",
			source : ["UA:RCO", 2],
			minlevel : 3,
			description : desc([
				"I gain proficiency with Animal Handling, History, Insight, Performance, or Persuasion",
				"Alternatively, I learn one language of my choice"
			]),
			choices : ["Language proficiency", "Skill proficiency: Animal Handling, History, Insight, Performance, or Persuasion"],
			"language proficiency" : {
				name : "Bonus Proficiency",
				description : "\n   " + "I learn one language of my choice",
				languageProfs : [1]
			},
			"skill proficiency: animal handling, history, insight, performance, or persuasion" : {
				name : "Bonus Proficiency",
				description : "\n   " + "I gain proficiency with Animal Handling, History, Insight, Performance, or Persuasion",
				skillstxt : "\n\n" + toUni("Cavalier") + ": Choose one from: Animal Handling, History, Insight, Performance, or Persuasion."
			}
		},
		"subclassfeature3.1" : {
			name : "Born in the Saddle",
			source : ["UA:RCO", 2],
			minlevel : 3,
			description : desc([
				"I have advantage on saves to avoid falling off my mount, and land on my feet if I fail",
				"Mounting or dismounting a creature costs me only 5 ft of movement instead of half"
			]),
			savetxt : { adv_vs : ["falling off my mount"] }
		},
		"subclassfeature3.2" : {
			name : "Combat Superiority",
			source : ["UA:RCO", 2],
			minlevel : 3,
			description : desc([
				"I gain a number of superiority dice that I can use to fuel special maneuvers (see below)",
				"I can use only one maneuver per attack; I regain all superiority dice after a short rest",
				" \u2022 Control Mount (Maneuver, UA:RCO 3)",
				"   Use after rolling Wis (Animal Handling) to influence an animal I or an ally is riding",
				"   I add the superiority die to the result",
				" \u2022 Precision Attack (Maneuver, UA:RCO 3)",
				"   Use after rolling to hit; I add the superiority die to my attack roll",
				" \u2022 Trip Attack (Maneuver, UA:RCO 3) [DC 8 + Prof Bonus + Str mod]",
				"   Use after hitting a creature; I add the superiority die to the attack's damage",
				"   If target is Large or smaller, it must make a Strength save or be knocked prone",
				" \u2022 Warding Maneuver (Maneuver, UA:RCO 3) [only while wielding weapon or shield]",
				"   As a reaction when I or a creature within 5 ft is hit, I add the superiority die to AC",
				"   If the attack still hits, the target counts as having resistance against the attack"
			]),
			additional : ["", "", "d8", "d8", "d8", "d8", "d8", "d8", "d8", "d10", "d10", "d10", "d10", "d10", "d10", "d10", "d10", "d12", "d12", "d12"],
			usages : [0, 0, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6],
			recovery : "short rest",
			eval : "AddAction('reaction', 'Warding Maneuver', 'Cavalier');",
			removeeval : "RemoveAction('reaction', 'Warding Maneuver');"
		},
		"subclassfeature7" : {
			name : "Ferocious Charger",
			source : ["UA:RCO", 3],
			minlevel : 7,
			description : desc([
				"I can use two superiority dice, instead of just one, when using the Trip Attack Maneuver",
				"If doing so, both dice are added to the damage and the target has disadv. on its Str save"
			])
		},
		"subclassfeature10" : {
			name : "Improved Combat Superiority",
			source : ["UA:RCO", 3],
			minlevel : 10,
			description : "\n   " + "My superiority dice turn into d10s at 10th level and into d12s at 18th level"
		},
		"subclassfeature15" : {
			name : "Relentless",
			source : ["UA:RCO", 3],
			minlevel : 15,
			description : "\n   " + "I regain one superiority die if I have no more remaining when I roll initiative"
		}
	}
});
AddSubClass("paladin", "oath of conquest2", {
	regExpSearch : /^((?=.*(knight tyrant|iron mongers))|((?=.*(conquest|tyranny|tyrant))(((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper))))))).*$/i,
	subname : "Oath of Conquest",
	source : ["UA:RCO", 3],
	spellcastingExtra : ["armor of agathys", "command", "hold person", "spiritual weapon", "bestow curse", "fear", "dominate beast", "stoneskin", "cloudkill", "dominate person"],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Conquering Presence",
			source : ["UA:RCO", 4],
			minlevel : 3,
			description : desc([
				"As an action, all creatures of my choice within 30-ft radius must make a Wisdom save",
				"If failed, a target is frightened for 1 minute; It can save again at the end of each turn"
			]),
			action : ["action", ""]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Guided Strike",
			source : ["UA:RCO", 4],
			minlevel : 3,
			description : "\n   " + "When I make an attack roll, I can add a +10 bonus to the roll after seeing the d20 roll"
		},
		"subclassfeature7" : {
			name : "Aura of Conquest",
			source : ["UA:RCO", 4],
			minlevel : 7,
			description : desc([
				"Enemies that are frightened of me have their speed reduced to 0 while in my aura",
				"Additionally, if they start their turn within my aura, the take psychic damage"
			]),
			additional : levels.map(function (n) {
				if (n < 7) return "";
				return (n < 18 ? 10 : 30) + "-foot aura; " + Math.floor(n / 2) + " psychic damage";
			})
		},
		"subclassfeature15" : {
			name : "Scornful Rebuke",
			source : ["UA:RCO", 4],
			minlevel : 15,
			description : "\n   " + "Whenever I'm hit with an attack, the attacker takes my Cha mod in psychic damage"
		},
		"subclassfeature20" : {
			name : "Invincible Conqueror",
			source : ["UA:RCO", 4],
			minlevel : 20,
			description : desc([
				"As an action, I can gain the following benefits for 1 minute:",
				" - I have resistance all damage",
				" - I can make an additional attack as part of my Attack action",
				" - My melee weapons score critical hits on a roll of 19 or 20"
			]),
			recovery : "long rest",
			usages : 1,
			action : ["action", ""]
		}
	}
});
AddSubClass("warlock", "the celestal", {
	regExpSearch : /^(?=.*warlock)(?=.*celestial).*$/i,
	subname : "the Celestial",
	source : ["UA:RCO", 4],
	spellcastingExtra : ["burning hands", "cure wounds", "flaming sphere", "lesser restoration", "daylight", "revivify", "guardian of faith", "wall of fire", "flame strike", "greater restoration"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Cantrips",
			source : ["UA:RCO", 5],
			minlevel : 1,
			description : "\n   " + "I know the Light and Sacred Flame cantrips",
			spellcastingBonus : [{
				name : "Bonus Cantrips",
				spells : ["light"],
				selection : ["light"]
			}, {
				name : "Bonus Cantrips",
				spells : ["sacred flame"],
				selection : ["sacred flame"]
			}]
		},
		"subclassfeature1.1" : {
			name : "Healing Light",
			source : ["UA:RCO", 5],
			minlevel : 1,
			description : desc([
				"As a bonus action, I can heal a creature on touch by expending dice from my pool",
				"I can expend up to my Charisma modifier (min 1) of dice at a time",
				"The target heals HP equal to the roll of the dice; I regain all expended dice on a long rest"
			]),
			usages : levels.map(function (n) {
				return (n + 1) + "d6 per ";
			}),
			usagescalc : "event.value = !classes.known.warlock ? '' : (1 + classes.known.warlock.level) + 'd6';",
			recovery : "long rest",
			action : ["bonus action", ""]
		},
		"subclassfeature6" : {
			name : "Radiant Soul",
			source : ["UA:RCO", 5],
			minlevel : 6,
			description : desc([
				"I add my Cha modifier to cantrips/spells I cast that deal fire or radiant damage",
				"Additionally, I have resistance to radiant damage"
			]),
			dmgres : ["Radiant"],
			calcChanges : {
				atkCalc : ["if (isSpell && (/fire|radiant/i).test(fields.Damage_Type)) { output.extraDmg += What('Cha Mod'); }; ", "Cantrips and spells that deal fire or radiant damage get my Charisma modifier added to the damage."]
			}
		},
		"subclassfeature10" : {
			name : "Radiant Resilience",
			source : ["UA:RCO", 5],
			minlevel : 10,
			description : desc([
				"When I finish a short or long rest, I and up to five allies gain temporary hit points",
				"I get my warlock level + Cha mod, while my allies get half my warlock level + Cha mod"
			]),
			additional : levels.map(function (n) {
				if (n < 10) return "";
				return "Me: " + n + "+Cha mod; Allies: " + Math.floor(n / 2) + "+Cha mod";
			})
		},
		"subclassfeature14" : {
			name : "Searing Vengeance",
			source : ["UA:RCO", 5],
			minlevel : 14,
			description : desc([
				"At the start of my turn when I would make a death save, I can instead spring back up",
				"I can stand up and recover HP equal to half my current HP maximum",
				"Also, creatures of my choice within 30 ft of me take 2d8 + Cha mod in radiant damage",
				"Damaged creatures are blinded until the end of my current turn"
			]),
			usages : 1,
			recovery : "long rest"
		}
	}
});

// Add Warlock invocations, revised versions from previous Unearthed Arcana articles, and new ones
AddWarlockInvocation("Aspect of the Moon (prereq: Pact of the Tome)", {
	name : "Aspect of the Moon",
	description : desc([
		"I don't need sleep nor can be forced to by any means; I can rest while doing light activity"
	]),
	source : ["UA:RCO", 5],
	prereqeval : "What('Class Features Remember').indexOf('warlock,pact boon,pact of the tome') !== -1",
	eval : "AddString('Saving Throw advantages \/ disadvantages', 'Nothing can force me to sleep', '; ');",
	removeeval : "RemoveString('Saving Throw advantages \/ disadvantages', 'Nothing can force me to sleep');"
});
AddWarlockInvocation("Cloak of Flies (prereq: level 5 warlock)", {
	name : "Cloak of Flies",
	description : desc([
		"As a bonus action, I can surround myself and a 5-ft radius with a magical aura of flies",
		"It lasts until I'm incapacitated or dismiss it as a bonus action; Total cover block the aura",
		"The aura grants me adv. on Cha (Intimidation), but disadv. on all other Cha checks",
		"Creatures starting their turn in the aura take my Cha mod (min 0) in poison damage"
	]),
	source : ["UA:RCO", 5],
	prereqeval : "classes.known.warlock.level >= 5",
	recovery : "short rest",
	usages : 1,
	action : ["bonus action", " (start/stop)"]
});
AddWarlockInvocation("Eldritch Smite (prereq: level 5 warlock, Pact of the Blade)", {
	name : "Eldritch Smite",
	description : desc([
		"Once per turn when I hit a creature with my pact weapon, I can do extra damage",
		"For this I have to expend a warlock spell slot; I do +1d8 force damage per level of the slot",
		"If the target takes any of this bonus damage, it is knocked prone if it is Huge or smaller"
	]),
	source : ["UA:RCO", 6],
	prereqeval : "classes.known.warlock.level >= 5 && What('Class Features Remember').indexOf('warlock,pact boon,pact of the blade') !== -1"
});
AddWarlockInvocation("Frost Lance (prereq: Eldritch Blast cantrip)", {
	name : "Frost Lance",
	description : desc([
		"When my Eldritch Blast hits a creature once or more, I can reduce its speed by 10 ft",
		"This speed reduction lasts until the end of my next turn"
	]),
	source : ["UA:RCO", 6],
	prereqeval : "hasEldritchBlast",
	calcChanges : {
		atkAdd : ["if (theWea && (/eldritch blast/i).test(theWea.name)) {fields.Description += '; Target -10 ft speed'; }; ", "When I hit a creature with my Eldritch Blast cantrip once or more times in a turn, I can reduce its speed by 10 ft until the end of my next turn."]
	}
});
AddWarlockInvocation("Ghostly Gaze (prereq: level 7 warlock)", {
	name : "Ghostly Gaze",
	description : desc([
		"As an action, I can see through solid objects out to 30 ft, until the end of my current turn",
		"Objects appear ghostly to me; I also gain 30 ft darkvision for the duration"
	]),
	source : ["UA:RCO", 6],
	prereqeval : "classes.known.warlock.level >= 7",
	recovery : "short rest",
	usages : 1,
	action : ["action", ""]
});
AddWarlockInvocation("Gift of the Depths (prereq: level 5 warlock)", {
	name : "Gift of the Depths",
	description : desc([
		"I can breathe underwater and I have a swim speed equal to my walking speed",
		"Once per long rest, I can cast Water Breathing without using a spell slot (PHB 287)"
	]),
	source : ["UA:RCO", 6],
	spellcastingBonus : {
		name : "Gift of the Depths",
		spells : ["water breathing"],
		selection : ["water breathing"],
		oncelr : true
	},
	prereqeval : "classes.known.warlock.level >= 5",
	speed : { swim : { spd : "walk", enc : "walk" } }
});
AddWarlockInvocation("Gift of the Ever-Living Ones (prereq: Pact of the Chain)", {
	name : "Gift of the Ever-Living Ones",
	description : desc([
		"When I regain HP while my familiar is within 100 ft, I regain the max the dice can roll"
	]),
	source : ["UA:RCO", 6],
	prereqeval : "What('Class Features Remember').indexOf('warlock,pact boon,pact of the chain') !== -1"
});
AddWarlockInvocation("Grasp of Hadar (prereq: Eldritch Blast cantrip)", {
	name : "Grasp of Hadar",
	description : desc([
		"When my Eldritch Blast hits a creature once or more, I can move it 10 ft closer to me"
	]),
	source : ["UA:RCO", 6],
	prereqeval : "hasEldritchBlast",
	calcChanges : {
		atkAdd : ["if (theWea && (/eldritch blast/i).test(theWea.name)) {fields.Description += '; Target moved 10 ft to me'; }; ", "When I hit a creature with my Eldritch Blast cantrip once or more times in a turn, I can move it in a straight line 10 ft closer to me."]
	}
});
AddWarlockInvocation("Improved Pact Weapon (prereq: Pact of the Blade)", {
	name : "Improved Pact Weapon",
	description : desc([
		"Any pact weapon I create is a +1 magic weapon, if it isn't already a magic weapon"
	]),
	source : ["UA:RCO", 6],
	prereqeval : "What('Class Features Remember').indexOf('warlock,pact boon,pact of the blade') !== -1",
	calcChanges : {
		atkCalc : ["if (!thisWeapon[1] && (/\\bpact\\b/i).test(WeaponText)) { var pactMag = pactMag !== undefined ? 1 - pactMag : 1; output.magic += pactMag; }; ", "If I include the word 'Pact' in a weapon's name or description, it will be treated as a Pact Weapon. If it doesn't already include a magical bonus in its name, the calculation will add +1 to its To Hit and Damage."]
	}
});
AddWarlockInvocation("Kiss of Mephistopheles (prereq: level 5 warlock, Eldritch Blast cantrip)", {
	name : "Kiss of Mephistopheles",
	description : desc([
		"As a bonus action when my Eldritch Blast hits, I can cast Fireball using a warlock spell slot",
		"The origin of the Fireball is the creature that was hit with my Eldritch Blast attack"
	]),
	source : ["UA:RCO", 6],
	prereqeval : "hasEldritchBlast && classes.known.warlock.level >= 5",
	action : ["bonus action", ""]
});
AddWarlockInvocation("Maddening Hex (prereq: level 5 warlock)", {
	name : "Maddening Hex",
	description : desc([
		"As a bonus action, I cause pain around a target affected by a hex of mine (spell/feature)",
		"The target and any of my choice within 5 ft of it take my Cha mod in psychic damage"
	]),
	source : ["UA:RCO", 6],
	prereqeval : "classes.known.warlock.level >= 5",
	action : ["bonus action", ""]
});
AddWarlockInvocation("Relentless Hex (prereq: level 7 warlock)", {
	name : "Relentless Hex",
	description : desc([
		"As a bonus action, I can teleport next to a target affected by a hex of mine (spell/feature)",
		"To do so, I must see the target and the space I'm teleporting to, and be within 30 ft of it"
	]),
	source : ["UA:RCO", 6],
	prereqeval : "classes.known.warlock.level >= 7",
	action : ["bonus action", ""]
});
AddWarlockInvocation("Shroud of Shadow (prereq: level 15 warlock)", {
	name : "Shroud of Shadow",
	description : desc([
		"I can cast Invisibility at will, without using spell slots (PHB 254)"
	]),
	source : ["UA:RCO", 6],
	spellcastingBonus : {
		name : "Shroud of Shadow",
		spells : ["invisibility"],
		selection : ["invisibility"],
		atwill : true
	},
	prereqeval : "classes.known.warlock.level >= 15"
});
AddWarlockInvocation("Tomb of Levistus (prereq: level 5 warlock)", {
	name : "Tomb of Levistus",
	description : desc([
		"As a reaction when I take damage, I can entomb myself in ice until the end of my turn",
		"I get 10 temp. HP per warlock level, which can be used to absorb the triggering damage",
		"Until the ice is gone, I have vulnerability to fire damage, 0 speed, and am incapacitated"
	]),
	source : ["UA:RCO", 6],
	prereqeval : "classes.known.warlock.level >= 5",
	recovery : "short rest",
	usages : 1,
	action : ["reaction", ""],
	additional : levels.map( function(n) { return (n * 10) + " temporary HP"; })
});
AddWarlockInvocation("Trickster's Escape (prereq: level 7 warlock)", {
	name : "Trickster's Escape",
	description : desc([
		"Once per long rest, I can cast Freedom of Movement on myself without using a spell slot"
	]),
	source : ["UA:RCO", 7],
	spellcastingBonus : {
		name : "Trickster's Escape",
		spells : ["freedom of movement"],
		selection : ["freedom of movement"],
		oncelr : true
	},
	prereqeval : "classes.known.warlock.level >= 7"
});
var iFileName = "UA_20170911_Eladrin-and-Gith.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Unearthed Arcana: Eladrin and Gith article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:EnG"] = {
	name : "Unearthed Arcana: Eladrin and Gith",
	abbreviation : "UA:EnG",
	group : "Unearthed Arcana",
	url : "http://media.wizards.com/2017/dnd/downloads/UA-Eladrin-Gith.pdf",
	date : "2017/09/11"
};

// Adds three races:
// Alternative version of the Eladrin
RaceList["uaeladrin"] = {
	regExpSearch : /^(?!.*half)((?=.*eladrin)|((?=.*\b(elfs?|elves|elvish|elven)\b)(?=.*\b(feys?|feywild)\b))).*$/i,
	name : "Eladrin ",
	sortname : "Elf, Fey (Eladrin)",
	source : ["UA:EnG", 1],
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
	improvements : "Eladrin: +2 Dexterity, +1 Intelligence or Charisma;",
	scores : [0, 2, 0, 0, 0, 0],
	trait : "Eladrin (+2 Dexterity, +1 Intelligence or Charisma)\nTrance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. This gives the same benefit as a human gets from 8 hours of sleep (long rest only 4 hours).\nFey Step: Once per short rest, as a bonus action, I can magically teleport up to 30 ft to an unoccupied space I can see." + (typePF ? "\n" : " ") + "Shifting Seasons: After a short or long rest, I can align myself with a season, granting me acces to a cantrip until my next rest: Friends, Chill Touch, Minor Illusion, or Fire Bolt. My spellcasting ability for this is Int or Cha, whichever is higher.",
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Shifting Seasons",
		spells : ["friends", "chill touch", "minor illusion", "fire bolt"],
		selection : ["friends", "chill touch", "minor illusion", "fire bolt"],
		firstCol : "checkbox",
		times : 4
	},
	features : {
		"fey step" : {
			name : "Fey Step",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			tooltip : "",
			action : ["bonus action", ""]
		}
	}
};
// Githyanki and its two variants
RaceList["githyanki"] = {
	regExpSearch : /githyanki/i,
	name : "Githyanki",
	source : ["UA:EnG", 2],
	plural : "Githyanki",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Gith", 1],
	armor : [true, true, false, false],
	skillstxt : "Choose any one skill or tool",
	age : " reach adulthood in their late teens and live for about a century",
	height : " are more leaner and taller than humans, most are a lean 6 feet tall (5'0\" + 2d12\")",
	weight : " weigh around 135 lb (100 + 2d12 \xD7 2d4 lb)",
	heightMetric : " are more leaner and taller than humans, most are a lean 1,8 metres tall (150 + 5d12 cm)",
	weightMetric : " weigh around 61 kg (45 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "Githyanki: +2 Strength, +1 Intelligence;",
	scores : [2, 0, 0, 1, 0, 0],
	trait : "Githyanki (+2 Strength, +1 Intelligence)\n\nGithyanki Psionics:\n   I know the Mage Hand cantrip.\n   At 3rd level, I can cast the Jump spell once per long rest.\n   At 5th level, I can also cast the Misty Step spell once per long rest.\n   Intelligence is my spellcasting ability for these spells.",
	spellcastingAbility : 4,
	spellcastingBonus : {
		name : "Githyanki Psionics",
		spells : ["mage hand"],
		selection : ["mage hand"],
		atwill : true
	},
	features : {
		"githyanki psionics (jump)" : {
			name : "Githyanki Psionics (Jump)",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Githyanki Psionics)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Githyanki Psionics",
				spells : ["jump"],
				selection : ["jump"],
				oncelr : true
			}
		},
		"githyanki psionics (misty step)" : {
			name : "Githyanki Psionics (Misty Step)",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Githyanki Psionics)",
			action : ["bonus action", ""],
			spellcastingBonus : {
				name : "Githyanki Psionics",
				spells : ["misty step"],
				selection : ["misty step"],
				oncelr : true
			}
		}
	}
};
AddRacialVariant("githyanki", "tool proficiency", {
	regExpSearch : /tool proficiency/i,
	toolProfs : [["Any tool", 1]]
});
AddRacialVariant("githyanki", "skill proficiency", {
	regExpSearch : /skill proficiency/i,
	skillstxt : "Choose any one skill"
});
// Githzerai
RaceList["githzerai"] = {
	regExpSearch : /githzerai/i,
	name : "Githzerai",
	source : ["UA:EnG", 3],
	plural : "Githzerai",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Gith"],
	age : " reach adulthood in their late teens and live for about a century",
	height : " are more leaner and taller than humans, most are a lean 6 feet tall (4'11\" + 2d12\")",
	weight : " weigh around 115 lb (90 + 2d12 \xD7 1d4 lb)",
	heightMetric : " are more leaner and taller than humans, most are a lean 1,8 metres tall (150 + 5d12 cm)",
	weightMetric : " weigh around 55 kg (40 + 5d10 \xD7 2d4 / 10 kg)",
	improvements : "Githzerai: +1 Intelligence, +2 Wisdom;",
	scores : [0, 0, 0, 1, 2, 0],
	trait : "Githzerai (+1 Intelligence, +2 Wisdom)\n" + (typePF ? "\n" : "") + "Monastic Training: I gain a +1 bonus to AC while I'm not wearing medium or heavy armor and not using a shield.\n\nGithzerai Psionics: I know the Mage Hand cantrip. At 3rd level, I can cast the Shield spell once per long rest. At 5th level, I can also cast the Detect Thoughts spell once per long rest. Wisdom is my spellcasting ability for these spells.",
	spellcastingAbility : 5,
	spellcastingBonus : {
		name : "Githzerai Psionics",
		spells : ["mage hand"],
		selection : ["mage hand"],
		atwill : true
	},
	features : {
		"githzerai psionics (shield)" : {
			name : "Githzerai Psionics (Shield)",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Githzerai Psionics)",
			action : ["reaction", ""],
			spellcastingBonus : {
				name : "Githzerai Psionics",
				spells : ["shield"],
				selection : ["shield"],
				oncelr : true
			}
		},
		"githzerai psionics (detect thoughts)" : {
			name : "Githzerai Psionics (Detect Thoughts)",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Githzerai Psionics)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Githzerai Psionics",
				spells : ["detect thoughts"],
				selection : ["detect thoughts"],
				oncelr : true
			}
		}
	},
	eval : "AddACMisc(1, 'Monastic Training', '+1 AC while not wearing medium or heavy armor and not using a shield.\\n\\nMonastic Training was gained from being a Githzerai.', \"tDoc.getField('Medium Armor').isBoxChecked(0) || tDoc.getField('Heavy Armor').isBoxChecked(0) || What('AC Shield Bonus')\")",
	removeeval : "AddACMisc(0, 'Monastic Training', '+1 AC while not wearing medium or heavy armor and not using a shield.\\n\\nMonastic Training was gained from being a Githzerai.')"
};
var iFileName = "UA_20171009_Fiendish-Options.js";
RequiredSheetVersion(12.999);
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
// Note that the Abyssal Tiefling is the same as the Tiefling in the PHB/SRD, so it is not added (again) by this code
// Much of this code was contributed by Friedrich
RaceList["baalzebul tiefling"] = {
	regExpSearch : /^(?=.*baalzebul)(?=.*tiefling|planetouched).*$/i,
	name : "Baalzebul tiefling",
	sortname : "Tiefling, Baalzebul",
	source : ["UA:FO", 1],
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
RaceList["dispater tiefling"] = {
	regExpSearch : /^(?=.*dispater)(?=.*tiefling|planetouched).*$/i,
	name : "Dispater tiefling",
	sortname : "Tiefling, Dispater",
	source : ["UA:FO", 1],
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
	trait : "Dispater Tiefling (+1 Dexterity, +2 Charisma)\n\nLegacy of Dis:\n   I know the Thaumaturgy cantrip.\n   At 3rd level, I can cast the Disguise Self spell once per long rest.\n   At 5th level, I can also cast the Invisibility spell once per long rest.\n   Charisma is my spellcasting ability for these spells.",
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
		"invisibility" : {
			name : "Invisibility",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Legacy of Dis)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Legacy of Dis (level 5)",
				spells : ["invisibility"],
				selection : ["invisibility"],
				oncelr : true
			}
		}
	}
};
RaceList["fierna tiefling"] = {
	regExpSearch : /^(?=.*fierna)(?=.*tiefling|planetouched).*$/i,
	name : "Fierna tiefling",
	sortname : "Tiefling, Fierna",
	source : ["UA:FO", 1],
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
	source : ["UA:FO", 2],
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
RaceList["levistas tiefling"] = {
	regExpSearch : /^(?=.*levistas)(?=.*tiefling|planetouched).*$/i,
	name : "Levistas tiefling",
	sortname : "Tiefling, Levistas",
	source : ["UA:FO", 2],
	plural : "Levistas tieflings",
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
	improvements : "Levistas Tiefling: +1 Constitution, +2 Charisma;",
	scores : [0, 0, 1, 0, 0, 2],
	trait : "Levistas Tiefling (+1 Constitution, +2 Charisma)\n\nLegacy of Stygia:\n   I know the Ray of Frost cantrip.\n   At 3rd level, I can cast the Armor of Agathys spell once per long rest as a 2nd-level spell.\n   At 5th level, I can also cast the Darkness spell once per long rest.\n   Charisma is my spellcasting ability for these spells.",
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
	source : ["UA:FO", 2],
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
	trait : "Mammon Tiefling (+1 Intelligence, +2 Charisma)\nLegacy of Minauros:\n   I know the Mage Hand cantrip.\n   At 3rd level, I can cast the Tenster's Floating Disk spell once per short rest.\n   At 5th level, I can also cast the Arcane Lock spell wihtout a material component once per long rest.\n   Charisma is my spellcasting ability for these spells.",
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
RaceList["mephistopheles tiefling"] = {
	regExpSearch : /^(?=.*mephistopheles)(?=.*tiefling|planetouched).*$/i,
	name : "Mephistopheles tiefling",
	sortname : "Tiefling, Mephistopheles",
	source : ["UA:FO", 2],
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
	trait : "Mephistopheles Tiefling (+1 Intelligence, +2 Charisma)\n\nLegacy of Cania:\n   I know the Mage Hand cantrip.\n   At 3rd level, I can cast the Magic Missile spell once per long rest as a 2nd-level spell.\n   At 5th level, I can also cast the Web spell once per long rest.\n   Charisma is my spellcasting ability for these spells.",
	abilitySave : 6,
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Legacy of Cania (level 1)",
		spells : ["mage hand"],
		selection : ["mage hand"],
		atwill : true
	},
	features : {
		"magic missile" : {
			name : "Magic Missile",
			additional : "2 darts",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Legacy of Cania)",
			action : ["action", " (2 darts)"],
			spellcastingBonus : {
				name : "Legacy of Cania (level 3)",
				spells : ["magic missile"],
				selection : ["magic missile"],
				oncelr : true
			}
		},
		"web" : {
			name : "Web",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Legacy of Cania)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Legacy of Cania (level 5)",
				spells : ["web"],
				selection : ["web"],
				oncelr : true
			}
		}
	}
};
RaceList["zariel tiefling"] = {
	regExpSearch : /^(?=.*zariel)(?=.*tiefling|planetouched).*$/i,
	name : "Zariel tiefling",
	sortname : "Tiefling, Zariel",
	source : ["UA:FO", 2],
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
	trait : "Zariel Tiefling (+1 Strength, +2 Charisma)\n\nLegacy of Avernus:\n   I know the Thaumaturgy cantrip.\n   At 3rd level, I can cast the Searing Smite spell once per long rest as a 2nd-level spell.\n   At 5th level, I can also cast the Web spell once per long rest.\n   Charisma is my spellcasting ability for these spells.",
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
var iFileName = "UA_20171113_Elf-Subraces.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Unearthed Arcana: Elf Subraces article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:ES"] = {
	name : "Unearthed Arcana: Elf Subraces",
	abbreviation : "UA:ES",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2017/dnd/downloads/UA-ElfSubraces.pdf",
	date : "2017/11/13"
};

// Adds 4 new subraces for the elf
RaceList["avariel"] = {
	regExpSearch : /^(?!.*half)((?=.*avariel)|((?=.*\b(elfs?|elves|elvish|elven)\b)(?=.*\b(winged?|wings?|flying|air)\b))).*$/i,
	name : "Avariel",
	sortname : "Elf, Winged (Avariel)",
	source : ["UA:ES", 1],
	plural : "Avariel",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		fly : { spd : 30, enc : 0 }
	},
	languageProfs : ["Common", "Elvish", "Auran"],
	vision : [["Darkvision", 60]],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
	skills : ["Perception"],
	age : " typically claim adulthood around age 100 and can live to be 750 years old",
	height : " range from 5 to over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 115 lb (90 + 2d10 \xD7 1d4 lb)",
	heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 55 kg (40 + 5d10 \xD7 2d4 / 10 kg)",
	improvements : "Avariel: +2 Dexterity;",
	scores : [0, 2, 0, 0, 0, 0],
	trait : "Avariel (+2 Dexterity)\nTrance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. While meditating, I can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, I gain the same benefit that a human does from 8 hours of sleep, thus needing only 4 hours for a long rest.\nFlight: I have a flying speed of 30 feet. To use this speed, I can't be wearing medium or heavy armor."
};
RaceList["grugach"] = {
	regExpSearch : /^(?!.*half)((?=.*grugach)|((?=.*\b(elfs?|elves|elvish|elven)\b)(?=.*\b(wilds?|wilderness)\b))).*$/i,
	name : "Grugach",
	sortname : "Elf, Wild (Grugach)",
	source : ["UA:ES", 1],
	plural : "Grugach",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Elvish", "Sylvan"],
	vision : [["Darkvision", 60]],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
	weaponprofs : [false, false, ["spear", "longbow", "shortbow", "net"]],
	skills : ["Perception"],
	age : " typically claim adulthood around age 100 and can live to be 750 years old",
	height : " stand around 5 feet tall (4'5\" + 2d6\")",
	weight : " weigh around 100 lb (75 + 2d6 \xD7 1d6 lb)",
	heightMetric : " range from well under to well over 1,5 metres tall (135 + 5d6 cm)",
	weightMetric : " weigh around 45 kg (35 + 5d6 \xD7 2d6 / 10 kg)",
	improvements : "Grugach: +1 Strength, +2 Dexterity;",
	scores : [1, 2, 0, 0, 0, 0],
	trait : "Grugach (+1 Strength, +2 Dexterity)\nTrance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. While meditating, I can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, I gain the same benefit that a human does from 8 hours of sleep, thus needing only 4 hours for a long rest.\nCantrip: I know one cantrip of my choice from the druid spell list. Wisdom is my spellcasting ability for it.",
	abilitySave : 5,
	spellcastingAbility : 5,
	spellcastingBonus : {
		name : "Grugach Cantrip",
		"class" : "druid",
		level : [0, 0],
		atwill : true
	},
	eval : "RemoveLangTool('language', 'Common');"
};
// Edit the Wood Elf PHB entry, if available, to not match on Grugach
if (RaceList["wood elf"]) RaceList["wood elf"].regExpSearch = /^(?!.*half)((?=.*kagonesti)|((?=.*\b(elfs?|elves|elvish|elven)\b)(?=.*\b(woodlands?|woods?|forests?||green)\b))).*$/;
RaceList["sea elf"] = {
	regExpSearch : /^(?!.*half)((?=.*\b(elfs?|elves|elvish|elven)\b)(?=.*\b(seas?|oceans?|water)\b)).*$/i,
	name : "Sea elf",
	sortname : "Elf, Sea",
	source : ["UA:ES", 1],
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
	trait : "Sea Elf (+2 Dexterity, +1 Constitution)\nTrance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. While meditating, I can dream after a fashion. After resting in this way, I gain the same benefit that a human does from 8 hours of sleep, thus needing only 4 hours for a long rest.\nChild of the Sea. I have 30 ft swimming speed and can breathe air and water.\nFriend of the Sea: Through sounds and gestures, I can communicate simple ideas with Small or smaller beasts that have an inborn swimming speed."
};
RaceList["shadar-kai"] = {
	regExpSearch : /^(?!.*half)((?=.*shadar-kai)|((?=.*\b(elfs?|elves|elvish|elven)\b)(?=.*\b(shadows?|shadowfell)\b))).*$/i,
	name : "Shadar-kai",
	sortname : "Elf, Shadow (Shadar-kai)",
	source : ["UA:ES", 2],
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
	skills : ["Perception"],
	age : " typically claim adulthood around age 100 and can live to be 750 years old",
	height : " range from under 5 to over 6 feet tall (4'8\" + 2d8\")",
	weight : " weigh around 115 lb (90 + 2d8 \xD7 1d4 lb)",
	heightMetric : " range from under 1,5 to over 1,8 metres tall (145 + 5d8 cm)",
	weightMetric : " weigh around 52 kg (40 + 5d8 \xD7 2d4 / 10 kg)",
	improvements : "Shadar-kai: +2 Dexterity, +1 Charisma;",
	scores : [0, 2, 0, 0, 0, 1],
	trait : "Shadar-kai (+2 Dexterity, +1 Charisma)\nTrance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. This gives the same benefit as a human gets from 8 hours of sleep (long rest only 4 hours).\nBlessing of the Raven Queen: Once per short rest, as a bonus action, I can magically teleport up to 15 ft to an unoccupied space I can see, and, until the start of my next turn, I have resistance to all damage and appear translucent." + (typePF ? "\n" : " ") + "Cantrip: I know one cantrip: Chill Touch, Spare the Dying, or Thaumaturgy. Charisma is my spellcasting ability for it.",
	abilitySave : 6,
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Shadar-kai Cantrip",
		spells : ["chill touch", "spare the dying", "thaumaturgy"],
		atwill : true
	},
	features : {
		"blessing of the raven queen" : {
			name : "Blessing of the Raven Queen",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			tooltip : "",
			action : ["bonus action", ""]
		}
	}
};
