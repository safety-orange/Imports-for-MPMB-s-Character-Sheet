var iFileName = "ua_20150202_Eberron.js";
RequiredSheetVersion("13.0.8");
// This file adds the content from the Unearthed Arcana: Eberron article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:E"] = {
	name : "Unearthed Arcana: Eberron",
	abbreviation : "UA:E",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2015/downloads/dnd/UA_Eberron_v1.1.pdf",
	date : "2015/02/02"
};

// Adds three races:
// Changeling
RaceList["changeling-ua"] = {
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
	scores : [0, 1, 0, 0, 0, 1],
	trait : "Changeling (+1 Dexterity, +1 Charisma)\nShapechanger:\n   As an action, I can polymorph into any humanoid of my size that I have seen, or back into my true form.\n   However, my equipment does not change with me.\n   If I die, I revert to my natural appearance.",
	action : ['action', 'Polymorph']
};
// Warforged
RaceList["warforged-ua"] = {
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
	weightMetric : " weigh around 135 kg (125 + 5d6 \xD7 8 / 10 kg)",
	scores : [1, 0, 1, 0, 0, 0],
	trait : "Warforged (+1 Strength, +1 Constitution)\nLiving Construct:\n   Even though I was constructed, I am a living creature. I am immune to disease. I do not need to eat or breathe, but I can ingest food and drink if I wish.\n   Instead of sleeping, I enter an inactive state for 4 hours each day. I do not dream in this state; I am fully aware of my surroundings and notice approaching enemies and other events as normal. I still need 8 hours for a long rest.",
	extraAC : {
		name : "Composite Plating",
		mod : 1,
		text : "I gain a +1 bonus to AC."
	}
};
// Shifter and its 6 subraces
RaceList["shifter-ua"] = {
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
	height : " range from under 5 to almost 6 feet tall (4'6\" + 2d8\")",
	weight : " weigh around 135 lb (90 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from under 1,5 to 1,8 metres tall (4'6\" + 5d8 cm)",
	weightMetric : " weigh around 65 kg (40 + 5d8 \xD7 4d4 / 10 kg)",
	scorestxt : "+1 Dexterity and +1 to other ability score depending on type of shifter",
	scores : [0, 1, 0, 0, 0, 0],
	trait : "Shifter (+1 Dexterity and +1 to other ability score depending on type of shifter)\n   Use the \"Racial Options\" button to select type of shifter.\nShifting:\n   On my turn, I can shift as a bonus action. Shifting lasts for 1 minute or until I end it on my turn as a bonus action. I must finish a short rest before I can shift again.\n   While shifted, I gain temporary hit points equal to my level + my Constitution modifier (minimum of 1) and another bonus depending on the type of shifter.",
	features : {
		"shift" : {
			name : "Shift",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			action : ["bonus action", ""]
		}
	}
};
AddRacialVariant("shifter-ua", "beasthide", {
	regExpSearch : /beasthide/i,
	name : "Beasthide shifter",
	source : ["UA:E", 2],
	plural : "Beasthide shifters",
	scorestxt : "",
	scores : [0, 1, 1, 0, 0, 0],
	trait : "Beasthide Shifter (+1 Dexterity, +1 Constitution)\nShifting:\n   On my turn, I can shift as a bonus action. Shifting lasts for 1 minute or until I end it on my turn as a bonus action. I must finish a short rest before I can shift again.\n   While shifted, I gain temporary hit points equal to my level + my Constitution modifier (minimum of 1) and I gain a +1 bonus to my AC."
});
AddRacialVariant("shifter-ua", "cliffwalk", {
	regExpSearch : /cliffwalk/i,
	name : "Cliffwalk shifter",
	source : ["UA:E", 2],
	plural : "Cliffwalk shifters",
	scorestxt : "",
	scores : [0, 2, 0, 0, 0, 0],
	trait : "Cliffwalk Shifter (+2 Dexterity)\nShifting:\n   On my turn, I can shift as a bonus action. Shifting lasts for 1 minute or until I end it on my turn as a bonus action. I must finish a short rest before I can shift again.\n   While shifted, I gain temporary hit points equal to my level + my Constitution modifier (minimum of 1) and I gain a climb speed of 30 feet."
});
AddRacialVariant("shifter-ua", "longstride", {
	regExpSearch : /longstride/i,
	name : "Longstride shifter",
	source : ["UA:E", 2],
	plural : "Longstride shifters",
	scorestxt : "",
	scores : [0, 2, 0, 0, 0, 0],
	trait : "Longstride Shifter (+2 Dexterity)\nShifting:\n   On my turn, I can shift as a bonus action. Shifting lasts for 1 minute or until I end it on my turn as a bonus action. I must finish a short rest before I can shift again.\n   While shifted, I gain temporary hit points equal to my level + my Constitution modifier (minimum of 1) and I can use the Dash action as a bonus action."
});
AddRacialVariant("shifter-ua", "longtooth", {
	regExpSearch : /(longtooth|longteeth)/i,
	name : "Longtooth shifter",
	source : ["UA:E", 2],
	plural : "Longtooth shifters",
	weaponsAdd : ["longtooth"],
	weaponOptions : {
		regExpSearch : /\blongtooth\b/i,
		name : "Longtooth",
		source : ["UA:E", 2],
		ability : 1,
		type : "Natural",
		damage : [1, 6, "piercing"],
		range : "Melee",
		description : "Only while shifted; Target up to my size is grappled",
		abilitytodamage : true
	},
	scorestxt : "",
	scores : [1, 1, 0, 0, 0, 0],
	trait : "Longtooth Shifter (+1 Strength, +1 Dexterity)\nShifting: On my turn, I can shift as a bonus action. Shifting lasts for 1 minute or until I end it on my turn as a bonus action. I must finish a short rest before I can shift again. While shifted, I gain temporary hit points equal to my level + my Constitution modifier (minimum of 1) and, as an action, I can make can make a bite attack. This is a melee weapon attack that uses Strength and deals 1d6 piercing damage. If this attack hits a target that is my size or smaller, the target is also grappled."
});
AddRacialVariant("shifter-ua", "razorclaw", {
	regExpSearch : /razorclaw/i,
	name : "Razorclaw shifter",
	source : ["UA:E", 2],
	plural : "Razorclaw shifters",
	weaponsAdd : ["razorclaw"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /\brazorclaw\b/i,
		name : "Razorclaw",
		source : ["UA:E", 2],
		damage : [1, "", "slashing"],
		description : "Only while shifted, use instead of unarmed strike: Can use as bonus action; Finesse"
	},
	scorestxt : "",
	scores : [0, 2, 0, 0, 0, 0],
	trait : "Razorclaw Shifter (+2 Dexterity)\nShifting:\n   On my turn, I can shift as a bonus action. Shifting lasts for 1 minute or until I end it on my turn as a bonus action. I must finish a short rest before I can shift again.\n   While shifted, I gain temporary hit points equal to my level + my Constitution modifier (minimum of 1) and, as a bonus action, I can make an unarmed strike that can use my Dexterity for the attack roll and damage, dealing slashing damage."
});
AddRacialVariant("shifter-ua", "wildhunt", {
	regExpSearch : /wildhunt/i,
	name : "Wildhunt shifter",
	source : ["UA:E", 3],
	plural : "Wildhunt shifters",
	scorestxt : "",
	scores : [0, 1, 0, 0, 1, 0],
	trait : "Wildhunt Shifter (+1 Dexterity, +1 Wisdom)\nShifting:\n   On my turn, I can shift as a bonus action. Shifting lasts for 1 minute or until I end it on my turn as a bonus action. I must finish a short rest before I can shift again.\n   While shifted, I gain temporary hit points equal to my level + my Constitution modifier (minimum of 1) and I gain advantage on all Wisdom-based checks and saving throws."
});

// 12 variants of the Dragonmark feat
FeatsList["dragonmark-ua"] = {
	name : "Dragonmark",
	source : ["UA:E", 6],
	description : "Select the type of dragonmark using the little square button in this feat line.",
	choices : ["Detection", "Finding", "Handling", "Healing", "Hospitality", "Making", "Passage", "Scribing", "Sentinel", "Shadow", "Storm", "Warding"],
	"detection" : {
		descriptionFull : "Your have the magical mark of Detection, the dragonmark of House Medani, and are a member of that house.\n   You gain the ability to innately cast spells and cantrips, using Wisdom as your spellcasting ability. You cast each spell at its lowest level. Once you cast a given spell this way, you must finish a long rest before you can cast it innately again. You must still expend any material components. Your dragonmark confers the following benefits:\n   " + toUni("Least Dragonmark") + ". When you first take this feat, you gain the least dragonmark. You learn the following spells: Detect Magic, Mage Hand\n   " + toUni("Lesser Dragonmark") + ". At 5th level and higher, your mark becomes more potent, improving to lesser dragonmark. You learn the following spell: Detect Thoughts\n   " + toUni("Greater Dragonmark") + ". At 9th level and higher, your mark's power increases again, becoming a greater dragonmark. You learn the following spell: Clairvoyance",
		description : "I learn the Mage Hand cantrip. I can also cast Detect Magic, Detect Thoughts (from 5th level onwards), and Clairvoyance (from 9th level onwards), each once per long rest. Wisdom is my spellcasting ability for these.",
		spellcastingBonus : {
			name : "Dragonmark",
			spellcastingAbility : 5,
			spells : ["mage hand", "detect magic", "detect thoughts", "clairvoyance"],
			selection : ["mage hand", "detect magic", "detect thoughts", "clairvoyance"],
			times : [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
			firstCol : 'oncelr'
		}
	},
	"finding" : {
		descriptionFull : "Your have the magical mark of Finding, the dragonmark of House Tharashk, and are a member of that house.\n   You gain the ability to innately cast spells and cantrips, using Wisdom as your spellcasting ability. You cast each spell at its lowest level. Once you cast a given spell this way, you must finish a long rest before you can cast it innately again. You must still expend any material components. Your dragonmark confers the following benefits:\n   " + toUni("Least Dragonmark") + ". When you first take this feat, you gain the least dragonmark. You learn the following spells: Identify, Mage Hand\n   " + toUni("Lesser Dragonmark") + ". At 5th level and higher, your mark becomes more potent, improving to lesser dragonmark. You learn the following spell: Locate Object\n   " + toUni("Greater Dragonmark") + ". At 9th level and higher, your mark's power increases again, becoming a greater dragonmark. You learn the following spell: Clairvoyance",
		description : "I learn the Mage Hand cantrip. I can also cast Identify, Locate Object (from 5th level onwards), and Clairvoyance (from 9th level onwards), each once per long rest. Wisdom is my spellcasting ability for these.",
		spellcastingBonus : {
			name : "Dragonmark",
			spellcastingAbility : 5,
			spells : ["mage hand", "identify", "locate object", "clairvoyance"],
			selection : ["mage hand", "identify", "locate object", "clairvoyance"],
			times : [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
			firstCol : 'oncelr'
		}
	},
	"handling" : {
		descriptionFull : "Your have the magical mark of Handling, the dragonmark of House Vadalis, and are a member of that house.\n   You gain the ability to innately cast spells and cantrips, using Wisdom as your spellcasting ability. You cast each spell at its lowest level. Once you cast a given spell this way, you must finish a long rest before you can cast it innately again. You must still expend any material components. Your dragonmark confers the following benefits:\n   " + toUni("Least Dragonmark") + ". When you first take this feat, you gain the least dragonmark. You learn the following spells: Druidcraft, Speak with Animals\n   " + toUni("Lesser Dragonmark") + ". At 5th level and higher, your mark becomes more potent, improving to lesser dragonmark. You learn the following spell: Beast Sense\n   " + toUni("Greater Dragonmark") + ". At 9th level and higher, your mark's power increases again, becoming a greater dragonmark. You learn the following spell: Conjure Animals",
		description : "I learn the Druidcraft cantrip. I can also cast Speak with Animals, Beast Sense (from 5th level onwards), and Conjure Animals (from 9th level onwards), each once per long rest. Wisdom is my spellcasting ability for these.",
		spellcastingBonus : {
			name : "Dragonmark",
			spellcastingAbility : 5,
			spells : ["druidcraft", "speak with animals", "beast sense", "conjure animals"],
			selection : ["druidcraft", "speak with animals", "beast sense", "conjure animals"],
			times : [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
			firstCol : 'oncelr'
		}
	},
	"healing" : {
		descriptionFull : "Your have the magical mark of Healing, the dragonmark of House Jorasco, and are a member of that house.\n   You gain the ability to innately cast spells and cantrips, using Wisdom as your spellcasting ability. You cast each spell at its lowest level. Once you cast a given spell this way, you must finish a long rest before you can cast it innately again. You must still expend any material components. Your dragonmark confers the following benefits:\n   " + toUni("Least Dragonmark") + ". When you first take this feat, you gain the least dragonmark. You learn the following spells: Cure Wounds, Spare the Dying\n   " + toUni("Lesser Dragonmark") + ". At 5th level and higher, your mark becomes more potent, improving to lesser dragonmark. You learn the following spell: Lesser Restoration\n   " + toUni("Greater Dragonmark") + ". At 9th level and higher, your mark's power increases again, becoming a greater dragonmark. You learn the following spell: Revivify",
		description : "I learn the Spare the Dying cantrip. I can also cast Cure Wounds, Lesser Restoration (from 5th level onwards), and Revivify (from 9th level onwards), each once per long rest. Wisdom is my spellcasting ability for these.",
		spellcastingBonus : {
			name : "Dragonmark",
			spellcastingAbility : 5,
			spells : ["spare the dying", "cure wounds", "lesser restoration", "revivify"],
			selection : ["spare the dying", "cure wounds", "lesser restoration", "revivify"],
			times : [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
			firstCol : 'oncelr'
		}
	},
	"hospitality" : {
		descriptionFull : "Your have the magical mark of Hospitality, the dragonmark of House Ghallanda, and are a member of that house.\n   You gain the ability to innately cast spells and cantrips, using Charisma as your spellcasting ability. You cast each spell at its lowest level. Once you cast a given spell this way, you must finish a long rest before you can cast it innately again. You must still expend any material components. Your dragonmark confers the following benefits:\n   " + toUni("Least Dragonmark") + ". When you first take this feat, you gain the least dragonmark. You learn the following spells: Friends, Unseen Servant\n   " + toUni("Lesser Dragonmark") + ". At 5th level and higher, your mark becomes more potent, improving to lesser dragonmark. You learn the following spell: Rope Trick\n   " + toUni("Greater Dragonmark") + ". At 9th level and higher, your mark's power increases again, becoming a greater dragonmark. You learn the following spell: Leomund's Tiny Hut",
		description : "I learn the Friends cantrip. I can also cast Unseen Servant, Rope Trick (from 5th level onwards), and Leomund's Tiny Hut (from 9th level onwards), each once per long rest. Charisma is my spellcasting ability for these.",
		spellcastingBonus : {
			name : "Dragonmark",
			spellcastingAbility : 6,
			spells : ["friends", "unseen servant", "rope trick", "leomund's tiny hut"],
			selection : ["friends", "unseen servant", "rope trick", "leomund's tiny hut"],
			times : [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
			firstCol : 'oncelr'
		}
	},
	"making" : {
		descriptionFull : "Your have the magical mark of Making, the dragonmark of House Cannith, and are a member of that house.\n   You gain the ability to innately cast spells and cantrips, using Intelligence as your spellcasting ability. You cast each spell at its lowest level. Once you cast a given spell this way, you must finish a long rest before you can cast it innately again. You must still expend any material components. Your dragonmark confers the following benefits:\n   " + toUni("Least Dragonmark") + ". When you first take this feat, you gain the least dragonmark. You learn the following spells: Identify, Mending\n   " + toUni("Lesser Dragonmark") + ". At 5th level and higher, your mark becomes more potent, improving to lesser dragonmark. You learn the following spell: Magic Weapon\n   " + toUni("Greater Dragonmark") + ". At 9th level and higher, your mark's power increases again, becoming a greater dragonmark. You learn the following spell: Fabricate",
		description : "I learn the Mending cantrip. I can also cast Identify, Magic Weapon (from 5th level onwards), and Fabricate (from 9th level onwards), each once per long rest. Intelligence is my spellcasting ability for these.",
		spellcastingBonus : {
			name : "Dragonmark",
			spellcastingAbility : 4,
			spells : ["mending", "identify", "magic weapon", "fabricate"],
			selection : ["mending", "identify", "magic weapon", "fabricate"],
			times : [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
			firstCol : 'oncelr'
		}
	},
	"passage" : {
		descriptionFull : "Your have the magical mark of Passage, the dragonmark of House Orien, and are a member of that house.\n   You gain the ability to innately cast spells and cantrips, using Intelligence as your spellcasting ability. You cast each spell at its lowest level. Once you cast a given spell this way, you must finish a long rest before you can cast it innately again. You must still expend any material components. Your dragonmark confers the following benefits:\n   " + toUni("Least Dragonmark") + ". When you first take this feat, you gain the least dragonmark. You learn the following spells: Expeditious Retreat, Light\n   " + toUni("Lesser Dragonmark") + ". At 5th level and higher, your mark becomes more potent, improving to lesser dragonmark. You learn the following spell: Misty Step\n   " + toUni("Greater Dragonmark") + ". At 9th level and higher, your mark's power increases again, becoming a greater dragonmark. You learn the following spell: Teleportation Circle",
		description : "I learn the Light cantrip. I can also cast Expeditious Retreat, Misty Step (from 5th level onwards), and Teleportation Circle (from 9th level onwards), each once per long rest. Intelligence is my spellcasting ability for these.",
		spellcastingBonus : {
			name : "Dragonmark",
			spellcastingAbility : 4,
			spells : ["light", "expeditious retreat", "misty step", "teleportation circle"],
			selection : ["light", "expeditious retreat", "misty step", "teleportation Circle"],
			times : [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
			firstCol : 'oncelr'
		}
	},
	"scribing" : {
		descriptionFull : "Your have the magical mark of Scribing, the dragonmark of House Sivis, and are a member of that house.\n   You gain the ability to innately cast spells and cantrips, using Intelligence as your spellcasting ability. You cast each spell at its lowest level. Once you cast a given spell this way, you must finish a long rest before you can cast it innately again. You must still expend any material components. Your dragonmark confers the following benefits:\n   " + toUni("Least Dragonmark") + ". When you first take this feat, you gain the least dragonmark. You learn the following spells: Comprehend Languages, Message\n   " + toUni("Lesser Dragonmark") + ". At 5th level and higher, your mark becomes more potent, improving to lesser dragonmark. You learn the following spell: Sending\n   " + toUni("Greater Dragonmark") + ". At 9th level and higher, your mark's power increases again, becoming a greater dragonmark. You learn the following spell: Tongues",
		description : "I learn the Message cantrip. I can also cast Comprehend Languages, Sending (from 5th level onwards), and Tongues (from 9th level onwards), each once per long rest. Intelligence is my spellcasting ability for these.",
		spellcastingBonus : {
			name : "Dragonmark",
			spellcastingAbility : 4,
			spells : ["message", "comprehend languages", "sending", "tongues"],
			selection : ["message", "comprehend languages", "sending", "tongues"],
			times : [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
			firstCol : 'oncelr'
		}
	},
	"sentinel" : {
		descriptionFull : "Your have the magical mark of Sentinel, the dragonmark of House Deneith, and are a member of that house.\n   You gain the ability to innately cast spells and cantrips, using Wisdom as your spellcasting ability. You cast each spell at its lowest level. Once you cast a given spell this way, you must finish a long rest before you can cast it innately again. You must still expend any material components. Your dragonmark confers the following benefits:\n   " + toUni("Least Dragonmark") + ". When you first take this feat, you gain the least dragonmark. You learn the following spells: Blade Ward, Compelled Duel\n   " + toUni("Lesser Dragonmark") + ". At 5th level and higher, your mark becomes more potent, improving to lesser dragonmark. You learn the following spell: Blur\n   " + toUni("Greater Dragonmark") + ". At 9th level and higher, your mark's power increases again, becoming a greater dragonmark. You learn the following spell: Protection from Energy",
		description : "I learn the Blade Ward cantrip. I can also cast Compelled Duel, Blur (from 5th level onwards), and Protection from Energy (from 9th level onwards), each once per long rest. Wisdom is my spellcasting ability for these.",
		spellcastingBonus : {
			name : "Dragonmark",
			spellcastingAbility : 5,
			spells : ["blade ward", "compelled duel", "blur", "protection from energy"],
			selection : ["blade ward", "compelled duel", "blur", "protection from energy"],
			times : [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
			firstCol : 'oncelr'
		}
	},
	"shadow" : {
		descriptionFull : "Your have the magical mark of Shadow, the dragonmark of House Phiarlan and House Thuranni, and are a member of one of those houses.\n   You gain the ability to innately cast spells and cantrips, using Charisma as your spellcasting ability. You cast each spell at its lowest level. Once you cast a given spell this way, you must finish a long rest before you can cast it innately again. You must still expend any material components. Your dragonmark confers the following benefits:\n   " + toUni("Least Dragonmark") + ". When you first take this feat, you gain the least dragonmark. You learn the following spells: Dancing Lights, Disguise Self\n   " + toUni("Lesser Dragonmark") + ". At 5th level and higher, your mark becomes more potent, improving to lesser dragonmark. You learn the following spell: Darkness\n   " + toUni("Greater Dragonmark") + ". At 9th level and higher, your mark's power increases again, becoming a greater dragonmark. You learn the following spell: Nondetection",
		description : "I learn the Dancing Lights cantrip. I can also cast Disguise Self, Darkness (from 5th level onwards), and Nondetection (from 9th level onwards), each once per long rest. Charisma is my spellcasting ability for these.",
		spellcastingBonus : {
			name : "Dragonmark",
			spellcastingAbility : 6,
			spells : ["dancing lights", "disguise self", "darkness", "nondetection"],
			selection : ["dancing lights", "disguise self", "darkness", "nondetection"],
			times : [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
			firstCol : 'oncelr'
		}
	},
	"storm" : {
		descriptionFull : "Your have the magical mark of Storm, the dragonmark of House Lyrander, and are a member of that house.\n   You gain the ability to innately cast spells and cantrips, using Intelligence as your spellcasting ability. You cast each spell at its lowest level. Once you cast a given spell this way, you must finish a long rest before you can cast it innately again. You must still expend any material components. Your dragonmark confers the following benefits:\n   " + toUni("Least Dragonmark") + ". When you first take this feat, you gain the least dragonmark. You learn the following spells: Fog Cloud, Shocking Grasp\n   " + toUni("Lesser Dragonmark") + ". At 5th level and higher, your mark becomes more potent, improving to lesser dragonmark. You learn the following spell: Gust of Wind\n   " + toUni("Greater Dragonmark") + ". At 9th level and higher, your mark's power increases again, becoming a greater dragonmark. You learn the following spell: Sleet Storm",
		description : "I learn the Shocking Grasp cantrip. I can also cast Fog Cloud, Gust of Wind (from 5th level onwards), and Sleet Storm (from 9th level onwards), each once per long rest. Intelligence is my spellcasting ability for these.",
		spellcastingBonus : {
			name : "Dragonmark",
			spellcastingAbility : 4,
			spells : ["shocking grasp", "fog cloud", "gust of wind", "sleet storm"],
			selection : ["shocking grasp", "fog cloud", "gust of wind", "sleet storm"],
			times : [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
			firstCol : 'oncelr'
		}
	},
	"warding" : {
		descriptionFull : "Your have the magical mark of Warding, the dragonmark of House Kundarak, and are a member of that house.\n   You gain the ability to innately cast spells and cantrips, using Intelligence as your spellcasting ability. You cast each spell at its lowest level. Once you cast a given spell this way, you must finish a long rest before you can cast it innately again. You must still expend any material components. Your dragonmark confers the following benefits:\n   " + toUni("Least Dragonmark") + ". When you first take this feat, you gain the least dragonmark. You learn the following spells: Alarm, Resistance\n   " + toUni("Lesser Dragonmark") + ". At 5th level and higher, your mark becomes more potent, improving to lesser dragonmark. You learn the following spell: Arcane Lock\n   " + toUni("Greater Dragonmark") + ". At 9th level and higher, your mark's power increases again, becoming a greater dragonmark. You learn the following spell: Magic Circle",
		description : "I learn the Resistance cantrip. I can also cast Alarm, Arcane Lock (from 5th level onwards), and Magic Circle (from 9th level onwards), each once per long rest. Intelligence is my spellcasting ability for these.",
		spellcastingBonus : {
			name : "Dragonmark",
			spellcastingAbility : 4,
			spells : ["resistance", "alarm", "arcane lock", "magic circle"],
			selection : ["resistance", "alarm", "arcane lock", "magic circle"],
			times : [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
			firstCol : 'oncelr'
		}
	}
}

// Adds a subclass for the Wizard, called "Tradition of the Artificer"
AddSubClass("wizard", "artificer-ua", {
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
