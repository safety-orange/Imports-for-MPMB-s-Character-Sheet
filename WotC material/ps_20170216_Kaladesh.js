var iFileName = "ps_20170216_Kaladesh.js";
RequiredSheetVersion("13.0.8");
// This file adds all material from the Plane Shift: Kaladesh article (https://magic.wizards.com/en/articles/archive/feature/plane-shift-kaladesh-2017-02-16) to MPMB's Character Record Sheet
// This code contains contributions by SoilentBrad and userZynx_name

// Define the source
SourceList["PS:K"] = {
	name : "Plane Shift: Kaladesh",
	abbreviation : "PS:K",
	group : "Plane Shift",
	campaignSetting : "Magic: The Gathering",
	url : "https://media.wizards.com/2017/downloads/magic/Plane-Shift_Kaladesh.pdf",
	date : "2017/02/16"
};

// Adds a subclass for the Sorcerer
AddSubClass("sorcerer", "pyromancer", { // Includes contributions by userZynx_name
	regExpSearch : /pyromanc(er|y)/i,
	subname : "Pyromancy",
	source : ["PS:K", 9],
	fullname : "Pyromancer",
	features : {
		"subclassfeature1" : {
			name : "Heart of Fire",
			source : ["PS:K", 9],
			minlevel : 1,
			description : desc([
				"When I start casting a spell (not cantrip) that deals fire damage, flames erupt from me",
				"Chosen creatures within 10 ft that I can see take half my sorcerer level in fire damage"
			]),
			additional : levels.map( function(n) { return (n > 1 ? Math.floor(n/2) : 1) + " fire damage"; })
		},
		"subclassfeature6" : {
			name : "Fire in the Veins",
			source : ["PS:K", 9],
			minlevel : 6,
			description : "\n   " + "I have resistance to fire damage and spells I cast ignore resistance to fire damage",
			dmgres : ["Fire"]
		},
		"subclassfeature14" : {
			name : "Pyromancer's Fury",
			source : ["PS:K", 9],
			minlevel : 14,
			description : desc([
				"As a reaction when hit by a melee attack, I can deal fire damage to the attacker",
				"The damage is equal to my sorcerer level and ignores resistance to fire damage"
			]),
			action : ["reaction", ""],
			additional : levels.map( function(n) { return n < 14 ? "" : n + " fire damage"; })
		},
		"subclassfeature18" : {
			name : "Fiery Soul",
			source : ["PS:K", 9],
			minlevel : 18,
			description : desc([
				"I have immunity to fire damage",
				"Any spell or effect I create treats immunity to fire damage as resistance to fire damage"
			]),
			savetxt : { immune : ["fire"] }
		}
	}
});

// Adds 2 feats
FeatsList["quicksmithing"] = { // Includes contributions by userZynx_name
	name : "Quicksmithing",
	source : ["PS:K", 13],
	descriptionFull : "You have mastered the art of on-the-fly invention, improvement, and jury-rigging. You can use your talents to create immediate, short-term magical effects similar to spells, given time and an adequate supply of aether.\n   When you choose this feat, you master two magical effects, each of which recreates the effect of a 1st-level spell that has the ritual tag. These spells can come from any class list, but Intelligence is your spellcasting ability for them.\n   If you come across a schematic geared toward quicksmithing or study with another quicksmith, you might be able to add another spell to the effects you have mastered. The spell's level can be no higher than half your level (rounded up), and it must have the ritual tag. The process of mastering the spell takes 2 hours per level of the spell, and costs 50 gp per level. The cost represents aether you use as you experiment with the spell effect to master it.\n   In addition, you have proficiency with artisan's tools (quicksmith's tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours unless you spend 1 hour repairing it to keep it functioning. You can use your action to dismantle the device, at which point you can reclaim the materials used to create it. You can have up to three such devices active at a time.\n   When you create a device, choose one of the following options:\n   " + toUni("Clockwork Toy") + ". This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents.\n   " + toUni("Fire Starter") + ". This device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action.\n   " + toUni("Music Box") + ". When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song's end or when it is closed.",
	description : "I gain the Tinker ability of a Rock Gnome, including proficiency with tinker's tools. I learn two 1st-level ritual spells and can learn more if found and no higher spell level than half my character level. I can cast these as rituals with Intelligence as my spellcasting ability.",
	prerequisite : "Intelligence 13 or higher",
	prereqeval : function (v) { return What('Int') >= 13; },
	eval : function () {
		CurrentSpells['quicksmithing'] = {
			name : 'Quicksmithing Ritual Spells',
			ability : 4,
			list : {'class' : 'any', ritual : true},
			known : { spells : 'book' },
			refType : "feat"
		};
		SetStringifieds('spells'); CurrentUpdates.types.push('spells');
	},
	removeeval : function () {
		delete CurrentSpells['quicksmithing'];
		SetStringifieds('spells'); CurrentUpdates.types.push('spells');
	}
};
FeatsList["servo crafting"] = { // Includes contributions by userZynx_name
	name : "Servo Crafting",
	source : ["PS:K", 13],
	descriptionFull : "You are skilled in the creation of servos\u2014tiny constructs that function as personal assistants. You can cast the find familiar spell as a ritual, creating a servo to serve as your familiar instead of an animal. A servo's statistics appear in the \"Artifact Creatures\" section of the Plane Shift: Kaladesh document. In every other way, a servo familiar functions as described in the find familiar spell.\n   You can communicate telepathically with your servo familiar and perceive through its senses as long as you are on the same plane of existence. You can speak through your servo in your own voice.\n   Additionally, when you take the Attack action, you can forgo one of your own attacks to allow your servo familiar to make one attack of its own.",
	description : "I can cast Find Familiar as a ritual, creating a servo instead of an animal. I can telepathically communicate with it, perceive its senses, and speak through it in my own voice. When I use the Attack action, I can forfeit one attack for it to attack.",
	prerequisite : "Intelligence 13 or higher",
	prereqeval : function (v) { return What('Int') >= 13; },
	spellcastingBonus : {
		name : "Servo Crafting",
		spellcastingAbility : 4,
		spells : ["find familiar"],
		selection : ["find familiar"],
		firstCol : "(R)"
	}
};

// Adds 4 races
RaceList["aetherborn"] = { // Includes contributions by SoilentBrad
	regExpSearch : /aetherborn/i,
	name : "Aetherborn",
	sortname : "Aetherborn",
	source : ["PS:K", 17],
	plural : "Aetherborn",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 2],
	vision : [["Darkvision", 60]],
	dmgres : ["Necrotic"],
	skills : ["Intimidation"],
	age : " come into being as adults and live no more than a few years",
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")",
	weight : " weigh around 100 lb, and get lighter as they age",
	heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d8 cm)",
	scorestxt : "+2 Charisma, +1 to two others of your choice",
	scores : [0, 0, 0, 0, 0, 2],
	trait : "Aetherborn (+2 Charisma, +1 to two others of your choice)\nBorn of Aether: I have resistance to necrotic damage.\nMenacing: I gain proficiency in the Intimidation skill.",
};
RaceList["kaladesh dwarf"] = { // Includes contributions by SoilentBrad
	regExpSearch : /^(?=.*\b(dwarfs?|dwarves|dwarfish|dwarvish|dwarven)\b)(?=.*\bkaladesh\b).*$/i,
	name : "Kaladesh dwarf",
	sortname : "Dwarf, Kaladesh",
	source : ["PS:K", 19],
	plural : "Kaladesh dwarves",
	size : 3,
	speed : {
		walk : { spd : 25, enc : 25 }
	},
	languageProfs : ["Common", "Dwarvish"],
	vision : [["Darkvision", 60]],
	savetxt : { adv_vs : ["poison"] },
	dmgres : ["Poison"],
	toolProfs : [["Artisan's tools", 2]],
	age : " are considered young until they are 50 and live about 350 years",
	height : " stand between 4 and 5 feet tall (3'8\" + 2d4\")",
	weight : " weigh around 150 lb (115 + 2d4 \xD7 2d6 lb)",
	heightMetric : " stand between 1,2 and 1,5 metres tall (110 + 5d4 cm)",
	weightMetric : " weigh around 70 kg (55 + 5d4 \xD7 4d6 / 10 kg)",
	scores : [0, 0, 2, 0, 1, 0],
	trait : "Kaladesh Dwarf (+2 Constitution, +1 Wisdom)\nArtisan's Expertise: I have proficiency and expertise with two artisan's tools of my choice.\n   Whenever I make an Intelligence (History) check related to the origin of any architectural construction, I am considered proficient in the History skill and add double my proficiency bonus to the check, instead of my normal proficiency bonus.\nDwarven Toughness: My hit point maximum increases by 1 for every level I have.",
	calcChanges : {
		hp : function (totalHD) { return [totalHD, "Dwarven Toughness"]; }
	}
};
RaceList["vahadar elf"] = { // Includes contributions by SoilentBrad
	regExpSearch : /^(?!.*half)((?=.*\bvahadar\b)|((?=.*\b(elfs?|elves|elvish|elven)\b)(?=.*\bcity\b))).*$/i,
	name : "Vahadar",
	sortname : "Elf, Vahadar",
	source : ["PS:K", 21],
	plural : "Vahadar",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Elvish", 1],
	vision : [["Darkvision", 60]],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
	weaponProfs : [false, false, ["longsword", "shortsword", "longbow", "shortbow"]],
	skills : ["Perception"],
	age : " typically claim adulthood around age 100 and can live to be 750 years old",
	height : " range from under 5 to over 6 feet tall (4'6\" + 2d10\")",
	weight : " weigh around 115 lb (90 + 2d10 \xD7 1d4 lb)",
	heightMetric : " range from under 1,5 to over 1,8 metres tall (140 + 5d10 cm)",
	weightMetric : " weigh around 55 kg (40 + 5d10 \xD7 2d4 / 10 kg)",
	scores : [0, 2, 0, 0, 1, 0],
	trait : "Vahadar (+2 Dexterity, +1 Wisdom)\nTrance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. While meditating, I can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, I gain the same benefit that a human does from 8 hours of sleep, but I still need 8 hours for a long rest.\nCantrip: I know one cantrip of my choice from the druid spell list. Wisdom is my spellcasting ability for it.",
	spellcastingAbility : 5,
	spellcastingBonus : {
		name : "Vahadar Cantrip",
		"class" : "druid",
		level : [0, 0],
		firstCol : 'atwill'
	}
};
RaceList["bishtahar elf"] = {
	regExpSearch : /^(?!.*half)(?=.*\bbishtahar\b).*$/i,
	name : "Bishtahar",
	sortname : "Elf, Bishtahar",
	source : ["PS:K", 21],
	plural : "Bishtahar",
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
	weaponProfs : [false, false, ["longsword", "shortsword", "longbow", "shortbow"]],
	skills : ["Perception"],
	age : " typically claim adulthood around age 100 and can live to be 750 years old",
	height : " range from under 5 to over 6 feet tall (4'6\" + 2d10\")",
	weight : " weigh around 115 lb (90 + 2d10 \xD7 1d4 lb)",
	heightMetric : " range from under 1,5 to over 1,8 metres tall (140 + 5d10 cm)",
	weightMetric : " weigh around 55 kg (40 + 5d10 \xD7 2d4 / 10 kg)",
	scores : [0, 2, 0, 0, 1, 0],
	trait : "Bishtahar (+2 Dexterity, +1 Wisdom)\nTrance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. While meditating, I can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, I gain the same benefit that a human does from 8 hours of sleep, thus needing only 4 hours for a long rest.\nMask of the Wild: I can attempt to hide even when I am only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena."
};
RaceList["tirahar elf"] = {
	regExpSearch : /^(?!.*half)(?=.*\btirahar\b).*$/i,
	name : "Tirahar",
	sortname : "Elf, Tirahar",
	source : ["PS:K", 21],
	plural : "Tirahar",
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
	weaponProfs : [false, false, ["longsword", "shortsword", "longbow", "shortbow"]],
	skills : ["Perception"],
	age : " typically claim adulthood around age 100 and can live to be 750 years old",
	height : " range from under 5 to over 6 feet tall (4'6\" + 2d10\")",
	weight : " weigh around 115 lb (90 + 2d10 \xD7 1d4 lb)",
	heightMetric : " range from under 1,5 to over 1,8 metres tall (140 + 5d10 cm)",
	weightMetric : " weigh around 55 kg (40 + 5d10 \xD7 2d4 / 10 kg)",
	scores : [0, 2, 0, 0, 1, 0],
	trait : "Tirahar (+2 Dexterity, +1 Wisdom)\nTrance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. While meditating, I can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, I gain the same benefit that a human does from 8 hours of sleep, thus needing only 4 hours for a long rest.\nMask of the Wild: I can attempt to hide even when I am only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena."
};
RaceList["vedalken-psk"] = { // Includes contributions by SoilentBrad
	regExpSearch : /vedalken/i,
	name : "Vedalken",
	sortname : "Vedalken",
	source : ["PS:K", 24],
	plural : "Vedalken",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Vedalken"],
	savetxt : { text : ["Adv. on Int/Wis/Cha saves vs. magic"] },
	age : " reach adulthood around 40 and live up to 500 years",
	height : " range from 6 to 6 1/2 feet tall",
	weight : " weigh less than 200 lb",
	scores : [0, 0, 0, 2, 1, 0],
	trait : "Vedalken (+2 Intelligence, +1 Wisdom)\nVedalken Cunning: I have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.\nAether Lore: Whenever I make an Intelligence (History) check related to magic items or aether-powered technological devices, I can add twice my proficiency bonus, instead of any proficiency bonus I normally apply."
};

// Adds 3 creatures, 2 beast and 1 optional familiar
CreatureList["gremlin"] = { // Includes contributions by SoilentBrad
	name : "Gremlin",
	source : ["PS:K", 26],
	size : 4,
	type : "Beast",
	alignment : "Unaligned",
	ac : 11,
	hp : 27,
	hd : [5, 8],
	speed : "40 ft",
	scores : [12, 13, 13, 3, 13, 6],
	passivePerception : 11,
	senses : "Darkvision 60 ft",
	challengeRating : "1/2",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Claws",
			ability : 1,
			damage : [1, 8, "slashing"],
			range : "Melee (5 ft)",
			description : ""
		}
	],
	traits : [{
			name : "Aether Scent",
			description : "The gremlin can pinpoint, by scent, the location of refined or unrefined aether within 30 feet of it.",
		}
	],
	actions : [{
			name : "Siphon",
			description : "The gremlin drains aether from an aether-powered device it can see within 5 feet of it. If the object isn't being worn or carried, the touch automatically drains aether. If the object is being worn or carried by a creature, the creature must succeed on a DC 11 Dexterity saving throw to keep it out of the gremlin's reach. If the aether-powered device grants any bonus (to attack rolls, damage rolls, Armor Class, and so on), that bonus is reduced by 1. If the device has charges, it loses 1 charge. Otherwise, it stops functioning for 1 round. Left unhindered, a gremlin can completely destroy an aether-powered device."
		}
	]
};
CreatureList["sky whale"] = { // Includes contributions by SoilentBrad
	name : "Sky Whale",
	source : ["PS:K", 28],
	size : 1,
	type : "Beast",
	alignment : "Unaligned",
	ac : 14,
	hp : 85,
	hd : [9, 12],
	speed : "fly 50 ft (hover)",
	scores : [21, 9, 17, 2, 10, 7],
	skills : {
		"stealth" : 5
	},
	senses : "",
	passivePerception : 10,
	challengeRating : "5",
	proficiencyBonus : 3,
	attacksAction : 2,
	attacks : [{
			name : "Flipper",
			ability : 1,
			damage : [2, 8, "bludgeoning"],
			range : "Melee (10 ft)",
			description : "Target must succeed on a DC 16 Strength saving throw or be knocked prone"
		}, {
			name : "Tail",
			ability : 1,
			damage : [2, 8, "bludgeoning"],
			range : "Melee (10 ft)",
			description : "Target must succeed on a DC 16 Strength saving throw or be knocked prone"
		}
	],
	traits : [{
			name : "Hold Breath",
			description : "The whale can hold its breath for 30 minutes."
		}, {
			name : "Multiattack",
			description : "The whale makes two attacks: one with its flipper and one with its tail."
		}
	]
};
CreatureList["servo"] = { // Includes contributions by userZynx_name
	name : "Servo",
	source : ["PS:K", 32],
	size : 5,
	type : "Construct",
	companion : "familiar_not_al",
	alignment : "Unaligned",
	ac : 11,
	hp : 10,
	hd : [3, 4],
	speed : "20 ft",
	scores : [4, 11, 12, 3, 10, 7],
	passivePerception : 10,
	damage_immunities : "poison",
	condition_immunities : "charmed, poisoned",
	senses : "",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Claw",
			ability : 1,
			damage : [1, "", "slashing"],
			range : "Melee",
			description : "",
			modifiers : [1, ""],
			abilitytodamage : false
		}
	]
};
