var iFileName = "legacy_20170919_ToA.js";
RequiredSheetVersion("24.1.3");
// This file adds the backgrounds and beasts from the Tomb of Annihilation adventure book to MPMB's Character Record Sheet that have not (yet) been replaced in any rulebook for the 5.5e (2024) rules

// Define the source
SourceList["ToA"] = {
	name: "Tomb of Annihilation [backgrounds, beasts, items]",
	abbreviation: "ToA",
	group: "Legacy Adventure Books",
	campaignSetting: "Forgotten Realms",
	url: "https://dnd.wizards.com/products/tomb-annihilation",
	date: "2017/09/19",
	defaultExcluded: true,
};

// Add Human to Yuan-ti tranformation from the ritual (excluded by default)
AddSubRace("human", "yuan-ti transformed", {
	sortname: "Yuan-Ti Transformed Human",
	defaultExcluded: true,
	regExpSearch: /^(?=.*yuan.ti)(?=.*transformed)?.*$/i,
	source: [["ToA", 119]],
	vision: [["Darkvision", 60]],
	savetxt: {
		immune: ["Poison"],
		adv_vs: ["magic"],
	},
	features: {
		"innate spellcasting (level 1)": {
			name: "Innate Spellcasting (level 1)",
			minlevel: 1,
			spellcastingAbility: 6,
			spellcastingBonus: [{
				name: "Innate Spellcasting (level 1)",
				spells: ["poison spray", "animal friendship"],
				selection: ["poison spray", "animal friendship"],
				firstCol: "atwill",
				times: 2,
			}],
			spellChanges: {
				"animal friendship": {
					description: "1 snake (Beast) save or Charmed; ends if the snake is damaged by me or my allies",
					changes: "Using Innate Spellcasting, I can cast *Animal Friendship* at will, but only to target snakes.",
				},
			},
		},
		"innate spellcasting (level 3)": {
			name: "Innate Spellcasting (level 3)",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Innate Spellcasting (level 3)",
				spells: ["suggestion"],
				selection: ["suggestion"],
				firstCol: "oncelr",
			}],
		},
	},
	trait: [
		"**Yuan-ti Human**",
		"##\u25C6 Resourceful##. I gain Heroic Inspiration when" + (typePF ? "" : "ever") + " I finish a Long Rest.",
		"##\u25C6 Skillful##. I gain proficiency in any one skill." + (typePF ? "\n" : " ") + "##\u25C6 Versatile##. I gain an origin feat of my choice.",
		"##\u25C6 Innate Spellcasting##. I know *Poison Spray* and can cast *Animal Friendship* on snakes at will. At level 3, I can cast *Suggestion* once per Long Rest. Cha" + (typePF ? "risma" : "") + " is my spellcasting ability for these.",
		"##\u25C6 Magic Resistance##. I have Advantage on saves against spells and other magical effects.",
		"##\u25C6 Madness##. I suffer from an indefinite madness (DMG'14 258).",
	],
});

// Backgrounds (with contributions by SoilentBrad and @lowbrr)
BackgroundList["anthropologist"] = {
	regExpSearch: /anthropologist/i,
	name: "Anthropologist",
	source: [["ToA", 191]],
	skills: ["Insight", "Religion"],
	gold: 10,
	equipleft: [
		["Leather-bound diary", "", 5],
		["Ink, 1 ounce bottle of", 1, ""],
		["Ink pen (quill)", "", ""],
	],
	equipright: [
		["Traveler's clothes", "", 4],
		["Trinket of special significance", "", ""],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Adept Linguist",
	trait: [
		"I prefer the company of those who aren't like me, including people of other races.",
		"I'm a stickler when it comes to observing proper etiquette and local customs.",
		"I would rather observe than meddle.",
		"By living among violent people, I have become desensitized to violence.",
		"I would risk life and limb to discover a new culture or unravel the secrets of a dead one.",
		"When I arrive at a new settlement for the first time, I must learn all its customs.",
	],
	ideal: [
		["Discovery",
			"Discovery: I want to be the first person to discover a lost culture. (Any)",
		],
		["Distance",
			"Distance: One must not interfere with the affairs of another culture \u2015 even one in need of aid. (Lawful)",
		],
		["Knowledge",
			"Knowledge: By understanding other races and cultures, we learn to understand ourselves. (Any)",
		],
		["Power",
			"Power: Common people crave strong leadership, and I do my utmost to provide it. (Lawful)",
		],
		["Protection",
			"Protection: I must do everything possible to save a society facing extinction. (Good)",
		],
		["Indifferent",
			"Indifferent: Life is cruel. What's the point in saving people if they're going to die anyway? (Chaotic)",
		],
	],
	bond: [
		"My mentor gave me a journal filled with lore and wisdom. Losing it would devastate me.",
		"Having lived among the people of a primeval tribe or clan, I long to return and see how they are faring.",
		"Years ago, tragedy struck the members of an isolated society I befriended, and I will honor them.",
		"I want to learn more about a particular humanoid culture that fascinates me.",
		"I seek to avenge a clan, tribe, kingdom, or empire that was wiped out.",
		"I have a trinket that I believe is the key to finding a long-lost society.",
	],
	flaw: [
		"Boats make me seasick.",
		"I talk to myself, and I don't make friends easily.",
		"I believe that I'm intellectually superior to people from other cultures and have much to teach them.",
		"I've picked up some unpleasant habits living among goblins, lizardfolk, or orcs.",
		"I complain about everything.",
		"I wear a tribal mask and never take it off.",
	],
	extra: [
		"Select an Adopted Culture",
		"Aarakocra",
		"Dwarf",
		"Elf",
		"Goblin",
		"Halfling",
		"Human",
		"Lizardfolk",
		"Orc",
	],
	languageProfs: [2],
};

// Background features (with contributions by SoilentBrad and @lowbrr)
BackgroundFeatureList["adept linguist"] = {
	description: "I can communicate with Humanoids who don't speak any language I know. I must observe the Humanoids interacting with one another for at least one day, after which I learn a handful of important words, expressions, and gestures \u2015 enough to communicate on a rudimentary level.",
	source: [["ToA", 191]],
};
BackgroundFeatureList["historical knowledge"] = { // from Archaeologist
	description: "When I enter a ruin or dungeon, I can correctly ascertain its original purpose and determine its builders, whether those were dwarves, elves, humans, yuan-ti, or some other known race. In addition, I can determine the monetary value of art objects more than a century old.",
	source: [["ToA", 192]],
};

// Weapon
WeaponsList["yklwa"] = {
	regExpSearch: /yklwa/i,
	name: "Yklwa",
	source: [["ToA", 32]],
	list: "melee",
	ability: 1,
	type: "Simple",
	damage: [1, 8, "piercing"],
	range: "Melee, 10/30 ft",
	weight: 3,
	description: "Thrown",
	monkweapon: true,
	abilitytodamage: true,
};

// Gear
GearList["rain catcher"] = {
	infoname: "Rain catcher [1 gp]",
	name: "Rain catcher",
	source: [["ToA", 32]],
	amount: 1,
	weight: 5,
};
GearList["insect repellent salve"] = {
	infoname: "Salve (vial) [5 sp]",
	name: "Insect Repellent Salve, applications of",
	source: [["ToA", 32]],
	amount: 20,
	weight: "",
	type: "insect repellent",
};
GearList["insect repellent incense"] = {
	infoname: "Incense (block) [1 gp]",
	name: "Insect Repellent Incense, blocks of",
	source: [["ToA", 32]],
	amount: 1,
	weight: "",
	type: "insect repellent",
};

// Creatures
// [dupl_start] reprints from Volo's Guide to Monsters
if (!SourceList["V"]) {
	CreatureList["brontosaurus"] = {
		name: "Brontosaurus",
		source: [["ToA", 215], ["V", 139], ["MotM", 95]],
		size: 0, //Gargantuan
		type: "Beast",
		subtype: "dinosaur", // MotM addition
		alignment: "Unaligned",
		ac: 15,
		hp: 121,
		hd: [9, 20],
		speed: "30 ft",
		scores: [21, 9, 17, 2, 10, 7],
		saves: ["", "", 6, "", "", ""],
		passivePerception: 10,
		challengeRating: "5",
		proficiencyBonus: 3,
		attacksAction: 1,
		attacks: [{
			name: "Stomp",
			ability: 1,
			damage: [5, 8, "bludgeoning"],
			range: "Melee (20 ft)",
			description: "Target must succeed on a DC 14 Strength saving throw or be knocked Prone",
		}, {
			name: "Tail",
			ability: 1,
			damage: [6, 8, "bludgeoning"],
			range: "Melee (20 ft)",
			description: "",
		}],
	};
	CreatureList["deinonychus"] = {
		name: "Deinonychus",
		source: [["ToA", 217], ["V", 139], ["MotM", 95]],
		size: 3, //Medium
		type: "Beast",
		subtype: "dinosaur", // MotM addition
		alignment: "Unaligned",
		ac: 13,
		hp: 26,
		hd: [4, 8],
		speed: "40 ft",
		scores: [15, 15, 14, 4, 12, 6],
		skills: {
			"perception": 3,
		},
		passivePerception: 13,
		challengeRating: "1",
		proficiencyBonus: 2,
		attacksAction: 3,
		attacks: [{
			name: "Claw",
			ability: 1,
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "Two claw and one bite as one Attack action; If used after moving 20 ft straight in the same round, see Pounce trait",
		}, {
			name: "Bite",
			ability: 1,
			damage: [1, 8, "piercing"],
			range: "Melee (5 ft)",
			description: "Two claw and one bite as one Attack action (also, see Pounce trait)",
		}],
		actions: [{
			name: "Multiattack",
			description: "As an Attack action, the [THIS] can make two Claw and one Bite attack.",
		}],
		traits: [{
			name: "Pounce",
			description: "If the [THIS] moves at least 20 ft straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked Prone. If the target is Prone, the [THIS] can make one bite attack against it as a Bonus Action.",
		}],
	};
	CreatureList["dimetrodon"] = {
		name: "Dimetrodon",
		source: [["ToA", 217], ["V", 139], ["MotM", 95]],
		size: 3, //Medium
		type: "Beast",
		subtype: "dinosaur", // MotM addition
		alignment: "Unaligned",
		ac: 12,
		hp: 19,
		hd: [3, 8],
		speed: "30 ft, swim 20 ft",
		scores: [14, 10, 15, 2, 10, 5],
		skills: {
			"perception": 2,
		},
		passivePerception: 12,
		challengeRating: "1/4",
		proficiencyBonus: 2,
		attacksAction: 1,
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [2, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "",
		}],
	};
	CreatureList["hadrosaurus"] = {
		name: "Hadrosaurus",
		source: [["ToA", 224], ["V", 140], ["MotM", 96]],
		size: 2, //Large
		type: "Beast",
		subtype: "dinosaur", // MotM addition
		alignment: "Unaligned",
		ac: 11,
		hp: 19,
		hd: [3, 10],
		speed: "40 ft",
		scores: [15, 10, 13, 2, 10, 5],
		skills: {
			"perception": 2,
		},
		passivePerception: 12,
		challengeRating: "1/4",
		proficiencyBonus: 2,
		attacksAction: 1,
		attacks: [{
			name: "Tail",
			ability: 1,
			damage: [1, 10, "bludgeoning"],
			range: "Melee (5 ft)",
			description: "",
		}],
	};
	CreatureList["quetzalcoatlus"] = {
		name: "Quetzalcoatlus",
		source: [["ToA", 230], ["V", 140], ["MotM", 96]],
		size: 1, //Huge
		type: "Beast",
		subtype: "dinosaur", // MotM addition
		alignment: "Unaligned",
		ac: 13,
		hp: 30,
		hd: [4, 12],
		speed: "10 ft, fly 80 ft",
		scores: [15, 13, 13, 2, 10, 5],
		skills: {
			"perception": 2,
		},
		passivePerception: 12,
		challengeRating: "2",
		proficiencyBonus: 2,
		attacksAction: 1,
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [3, 6, "piercing"],
			range: "Melee (10 ft)",
			description: "If used after diving 30 ft towards a target, the attack deals 3d6 extra damage (Dive Attack)",
		}],
		traits: [{
			name: "Dive Attack",
			description: "If the [THIS] is flying and dives at least 30 ft toward a creature and then hits it with a bite attack, the attack deals an extra 3d6 damage to the target.",
		}, {
			name: "Flyby",
			description: "The [THIS] doesn't provoke Opportunity Attacks when it flies out of an enemy's reach.",
		}],
	};
	CreatureList["stegosaurus"] = {
		name: "Stegosaurus",
		source: [["ToA", 231], ["V", 140], ["MotM", 96]],
		size: 1, //Huge
		type: "Beast",
		subtype: "dinosaur", // MotM addition
		alignment: "Unaligned",
		ac: 13,
		hp: 76,
		hd: [8, 12],
		speed: "40 ft",
		scores: [20, 9, 17, 2, 11, 5],
		passivePerception: 10,
		challengeRating: "4",
		proficiencyBonus: 2,
		attacksAction: 1,
		attacks: [{
			name: "Bite",
			ability: 1,
			damage: [6, 6, "piercing"],
			range: "Melee (10 ft)",
			description: "",
		}],
	};
	CreatureList["velociraptor"] = {
		name: "Velociraptor",
		source: [["ToA", 235], ["V", 140], ["MotM", 96]],
		size: 5, //Tiny
		type: "Beast",
		subtype: "dinosaur", // MotM addition
		alignment: "Unaligned",
		ac: 13,
		hp: 10,
		hd: [3, 4],
		speed: "30 ft",
		scores: [6, 14, 13, 4, 12, 6],
		skills: {
			"perception": 3,
		},
		passivePerception: 13,
		challengeRating: "1/4",
		proficiencyBonus: 2,
		attacksAction: 2,
		attacks: [{
			name: "Bite",
			ability: 2,
			damage: [1, 6, "piercing"],
			range: "Melee (5 ft)",
			description: "One bite and one claw attack as an Attack action",
		}, {
			name: "Claw",
			ability: 2,
			damage: [1, 4, "slashing"],
			range: "Melee (5 ft)",
			description: "One bite and one claw attack as an Attack action",
		}],
		actions: [{
			name: "Multiattack",
			description: "As an Attack action, the [THIS] can make one Bite and one Claw attack.",
		}],
		traits: [{
			name: "Pack Tactics",
			description: "The [THIS] has Advantage on an attack roll against a creature if at least one of the [THIS]'s allies is within 5 ft of the creature and the ally isn't Incapacitated.",
		}],
	};
} // dupl_end
// The following creatures were transcribed with the help of SoilentBrand and @lowbrr
CreatureList["almiraj"] = {
	name: "Almiraj",
	source: [["ToA", 211]],
	size: 4, //Small
	type: "Beast",
	alignment: "Unaligned",
	ac: 13,
	hp: 3,
	hd: [1, 6],
	speed: "50 ft",
	scores: [2, 16, 10, 2, 14, 10],
	skills: {
		"perception": 4,
		"stealth": 5,
	},
	senses: "Darkvision 30 ft; Adv on Wis (Perception) checks using hearing/sight",
	passivePerception: 14,
	challengeRating: "0",
	proficiencyBonus: 2,
	attacksAction: 1,
	attacks: [{
		name: "Horn",
		ability: 2,
		damage: [1, 4, "piercing"],
		range: "Melee (5 ft)",
		description: "",
	}],
	traits: [{
		name: "Keen Senses",
		description: "The [THIS] has Advantage on Wisdom (Perception) checks that rely on hearing or sight.",
	}],
};
CreatureList["flying monkey"] = {
	name: "Flying Monkey",
	nameAlt: ["Monkey, Flying"],
	nameThis: "monkey",
	source: [["ToA", 220]],
	size: 4, //Small
	type: "Beast",
	alignment: "Unaligned",
	ac: 12,
	hp: 3,
	hd: [1, 6],
	speed: "30 ft, climb 20 ft, fly 30 ft",
	scores: [8, 14, 11, 5, 12, 6],
	passivePerception: 11,
	challengeRating: "0",
	proficiencyBonus: 2,
	attacksAction: 1,
	attacks: [{
		name: "Bite",
		ability: 1,
		damage: [1, 4, "piercing"],
		range: "Melee (5 ft)",
		description: "",
	}],
	traits: [{
		name: "Pack Tactics",
		description: "The [THIS] has Advantage on an attack roll against a creature if at least one of the [THIS]'s allies is within 5 ft of the creature and the ally isn't Incapacitated.",
	}],
};
CreatureList["giant snapping turtle"] = {
	name: "Giant Snapping Turtle",
	nameAlt: ["Turtle, Giant Snapping"],
	nameThis: "turtle",
	source: [["ToA", 222]],
	size: 2, //Large
	type: "Beast",
	alignment: "Unaligned",
	ac: 17,
	hp: 75,
	hd: [10, 10],
	speed: "30 ft, swim 40 ft",
	scores: [19, 10, 14, 2, 12, 5],
	senses: "Darkvision 60 ft",
	passivePerception: 11,
	challengeRating: "3",
	proficiencyBonus: 2,
	attacksAction: 1,
	attacks: [{
		name: "Bite",
		ability: 1,
		damage: [4, 6, "slashing"],
		range: "Melee (5 ft)",
		description: "",
	}],
	traits: [{
		name: "Amphibious",
		description: "The [THIS] can breathe air and water.",
	}, {
		name: "Stable",
		description: "Whenever an effect knocks the [THIS] Prone, it can make a DC 10 Constitution saving throw to avoid being knocked Prone. A Prone turtle is upside down. To stand up, it must succeed on a DC 10 Dexterity check on its turn and then use all its movement for that turn. While Prone, the [THIS]'s AC becomes 12.",
	}],
};
CreatureList["jaculi"] = {
	name: "Jaculi",
	source: [["ToA", 225]],
	size: 2, //Large
	type: "Beast",
	alignment: "Unaligned",
	ac: 14,
	hp: 16,
	hd: [3, 10],
	speed: "30 ft, climb 20 ft",
	scores: [15, 14, 11, 2, 8, 3],
	skills: {
		"athletics": 4,
		"perception": 1,
		"stealth": 4,
	},
	senses: "Blindsight 30 ft; Adv on Wis (Perception) checks using smell",
	passivePerception: 11,
	challengeRating: "1/2",
	proficiencyBonus: 2,
	attacksAction: 1,
	attacks: [{
		name: "Bite",
		ability: 1,
		damage: [2, 6, "piercing"],
		range: "Melee (5 ft)",
		description: "If used after \u226510 ft jump: Adv to hit and +2d6 damage, see Spring trait",
	}],
	actions: [{
		name: "Spring",
		description: "The [THIS] springs up to 30 feet in a straight line and makes a bite attack against a target within its reach. This attack has Advantage if the [THIS] springs at least 10 feet. If the attack hits, the bite deals an extra 2d6 Piercing damage.",
	}],
	traits: [{
		name: "Camouflage",
		description: "The [THIS] has Advantage on Dexterity (Stealth) checks made to hide.",
	}, {
		name: "Keen Smell",
		description: "The [THIS] has Advantage on Wisdom (Perception) checks that rely on smell.",
	}],
	wildshapeString: [
		"##Senses##. Blindsight 30 ft.",
		"##Camouflage##. Advantage on Dexterity (Stealth) checks made to hide.",
		"##Keen Smell##. Advantage on Wisdom (Perception) checks that rely on smell.",
		"##Spring##. 30 ft in a straight line and make a bite attack. Advantage on the attack roll if springing at least 10 ft. It deals an extra 2d6 Piercing damage on a hit.",
	].join("\n"),
};

// Magic Items
MagicItemsList["bob"] = { // contributed by Nod_Hero
	name: "Bob",
	source: [["ToA", 89]],
	type: "Weapon (Battleaxe)",
	rarity: "Uncommon",
	description: "Dwarvish runes on the head of this rusty battleaxe read 'Bob'. It adds a +1 bonus to attack and damage rolls made with it, floats on water and other liquids, and grants me Advantage on Strength (Athletics) checks made to swim.",
	descriptionFull: "Etched into the haft of the battleaxe are Dethek (Dwarvish) runes that spell the weapon's name: *Bob*. It floats on water and other liquids, adds a +1 bonus to attack and damage rolls made with it, and grants its bearer advantage on Strength (Athletics) checks made to swim.",
	weight: 4,
	weaponOptions: [{
		baseWeapon: "battleaxe",
		regExpSearch: /\bbob\b/i,
		name: '"Bob"',
		source: [["ToA", 89]],
		description: "Versatile (1d10); Floats",
		modifiers: [1, 1],
		selectNow: true,
	}],
};
MagicItemsList["longsword of speaking draconic"] = { // contributed by Nod_Hero
	name: "Longsword of Speaking Draconic",
	source: [["ToA", 173]],
	type: "Weapon (Longsword)",
	rarity: "Common",
	description: "This longsword has a dragon-shaped hilt. While I carry it, I gain the ability to speak and understand the Draconic language.",
	descriptionFull: "This longsword has a dragon-shaped hilt. While you carry it, you gain the ability to speak and understand the Draconic language.",
	weight: 3,
	languageProfs: ["Draconic"],
	weaponsAdd: {
		select: ["Longsword of Speaking Draconic"],
		options: ["Longsword of Speaking Draconic"],
	},
};
MagicItemsList["amulet of the black skull"] = {
	name: "Amulet of the Black Skull",
	source: [["ToA", 206]],
	type: "Wondrous Item",
	rarity: "Very Rare",
	description: "The obsidian amulet has 6 charges, regaining 1d6 at dawn. As an action, I can expend a charge to teleport to a location within 100 ft that I'm familiar with. If I'm not Undead, I must make a DC 16 Con save whenever I do so and if I fail, I'm transformed (see table on Notes page) as I arrive at the destination.",
	descriptionFull: [
		"This amulet is carved from obsidian and shaped like a screaming humanoid skull, with ruby eyes and emeralds for teeth. It hangs from an iron chain necklace.",
		"The amulet has 6 charges and regains 1d6 charges daily at dawn. While wearing the amulet, you can use an action to expend 1 of its charges to transport yourself and anything you are wearing or carrying to a location within 100 feet of you. The destination you choose doesn't need to be in your line of sight, but it must be familiar to you (in other words, a place you have seen or visited), and it must be on the same plane of existence as you. This effect isn't subject to the magic restrictions placed on the Tomb of the Nine Gods; thus, the amulet can be used to enter and exit the tomb.",
		"If you aren't undead, you must make a DC 16 Constitution saving throw each time you use the amulet to teleport. On a failed saving throw, the black skull cackles as you are transformed in transit. The transformation takes effect as soon as you arrive at the destination, and is determined randomly by rolling percentile dice and consulting the Black Skull Transformation table.",
		[
			["d100", "Transformation"],
			["01-20", "The symbol of Acererak is burned into your flesh, a curse that can only be removed with a *Remove Curse* spell or similar magic. Until the curse ends, your hit points can't be restored by magic."],
			["21-35", "You grow larger as if affected by an *Enlarge/Reduce* spell, except the effect lasts for 1 hour."],
			["36-50", "You grow smaller as if affected by an *Enlarge/Reduce* spell, except the effect lasts for 1 hour."],
			["51-70", "You arrive at the destination wearing nothing but the *amulet of the black skull*. Everything else that you were wearing or carrying appears in a random unoccupied space within 100 feet of you."],
			["71-95", "You are paralyzed for 1 minute or until this effect is ended with a *Lesser Restoration* spell or similar magic."],
			["96-00", "You become petrified. This effect can be ended only with a *Greater Restoration* spell or similar magic."],
		],
	],
	attunement: true,
	weight: 1,
	action: [["action", ""]],
	usages: 6,
	recovery: "dawn",
	additional: "regains 1d6",
	toNotesPage: [{
		name: "Transformation Table",
		note: [
			"This amulet is carved from obsidian and shaped like a screaming humanoid skull, with ruby eyes and emeralds for teeth. It hangs from an iron chain necklace.",
			"If I'm not Undead, I must make a DC 16 Constitution save each time I use the amulet to teleport. On a failure, the black skull cackles as I'm transformed in transit. The transformation is random (see table below) and takes effect as soon as I arrive at the destination.",
			[
				["d100", "Transformation"],
				["01-20", "The symbol of Acererak is burned into my flesh, a curse that can only be removed with a *Remove Curse* spell or similar magic. Until the curse ends, my Hit Points can't be restored by magic."],
				["21-35", "I grow larger as if affected by an *Enlarge/Reduce* spell, except the effect lasts for 1 hour."],
				["36-50", "I grow smaller as if affected by an *Enlarge/Reduce* spell, except the effect lasts for 1 hour."],
				["51-70", "I arrive at the destination wearing nothing but the amulet of the black skull. Everything else that I was wearing or carrying appears in a random unoccupied space within 100 ft."],
				["71-95", "I am Paralyzed for 1 minute or until this effect is ended with a *Lesser Restoration* spell or similar magic."],
				["96-00", "I become Petrified. This effect can be ended only with a *Greater Restoration* spell or similar magic."],
			],
		],
	}],
}
MagicItemsList["bookmark"] = {
	name: "Bookmark",
	source: [["ToA", 206]],
	type: "Weapon (Dagger)",
	rarity: "Legendary",
	notLegalAL: true,
	description: "This dagger adds +3 to hit and damage. As a Bonus Action while holding it, I can have it shed Bright Light in a 20-ft radius and Dim Light for another 20 ft, go dark, act as a compass, cast *Dimension Door* once per dawn, or cast *Compulsion* once per dawn, which effects only spiders of the Beast type within 90 ft.",
	descriptionFull: [
		"This +3 dagger belongs to Artus Cimber. While you have the dagger drawn, you can use a bonus action to activate one of the following properties:",
		" \u2022 Cause a blue gem set into the dagger's pommel to shed bright light in a 20-foot radius and dim light for an additional 20 feet, or make the gem go dark.",
		" \u2022 Turn the dagger into a compass that, while resting on your palm, points north.",
		" \u2022 Cast *Dimension Door* from the dagger. Once this property is used, it can't be used again until the next dawn.",
		" \u2022 Cast *Compulsion* (save DC 15) from the dagger. The range of the spell increases to 90 feet but it targets only spiders that are beasts. Once this property is used, it can't be used again until the next dawn.",
	],
	attunement: true,
	weight: 1,
	action: [["bonus action", ""]],
	weaponOptions: [{
		baseWeapon: "dagger",
		regExpSearch: /bookmark/i,
		name: "Bookmark",
		source: [["ToA", 206]],
		modifiers: [3, 3],
		selectNow: true,
	}],
	fixedDC: 15,
	spellcastingBonus: [{
		name: "Once per dawn",
		spells: ["compulsion", "dimension door"],
		selection: ["compulsion", "dimension door"],
		firstCol: "onceday",
		times: 2,
	}],
	spellChanges: {
		"compulsion": {
			time: "Bns",
			range: "90 ft",
			description: "Any spiders that hear me save or I can, as bns, have it move fully in a direction; save again after move",
			changes: "Using Bookmark, I can cast this as a Bonus Action with a range of 90 ft, but it can only target spiders with the Beast type.",
		},
	},
}
MagicItemsList["ghost lantern"] = {
	name: "Ghost Lantern",
	source: [["ToA", 206]],
	type: "Wondrous Item",
	rarity: "Legendary",
	description: "As a Bonus Action, I can command the spirit in the lantern to shed Bright Light in 30 ft radius and Dim Light for another 30 ft. I can order the spirit to act as my *Mage Hand*. If I fall Unconscious within 10 ft of the lantern, the spirit stabilizes me. Casting *Dispel Evil and Good* on it releases the spirit and makes it nonmagical.",
	descriptionFull: [
		"A restless spirit is trapped inside this lantern. While holding the lantern, you can command the spirit as a bonus action to shed bright light in a 30-foot radius and dim light for an additional 30 feet.",
		"While holding the lantern, you can use an action to order the spirit to leave the lantern and duplicate the effect of the *Mage Hand* spell. The spirit returns to the lantern when the spell ends.",
		"If you fall unconscious within 10 feet of the lantern, the spirit emerges from it, magically stabilizes you with a touch, and then quickly returns to the lantern.",
		"The spirit is bound to the lantern and can't be harmed, turned, or raised from the dead.",
		"Casting a *Dispel Evil and Good* spell on the lantern releases the spirit to the afterlife and renders the lantern nonmagical.",
	],
	attunement: true,
	weight: 1,
	action: [["bonus action", ""]],
	spellcastingBonus: [{
		name: "At will",
		spells: ["mage hand"],
		selection: ["mage hand"],
		firstCol: "atwill",
	}],
}
MagicItemsList["mask of the beast"] = {
	name: "Mask of the Beast",
	source: [["ToA", 207]],
	type: "Wondrous Item",
	rarity: "Uncommon",
	description: "This wooden mask is shaped in the likeness of a beast's visage and has 3 charges. While wearing the mask I can expend 1 charge and use the mask to cast the *Animal Friendship* spell as an action. The mask regains all expended charges at dawn.",
	descriptionFull: "This wooden mask is shaped in the likeness of a beast's visage and has 3 charges. While wearing the mask you can expend 1 charge and use the mask to cast the *Animal Friendship* spell as an action. The mask regains all expended charges at dawn.",
	weight: 1,
	usages: 3,
	recovery: "dawn",
	spellFirstColTitle: "Ch",
	spellcastingBonus: [{
		name: "1 charge",
		spells: ["animal friendship"],
		selection: ["animal friendship"],
		firstCol: 1,
	}],
}
MagicItemsList["scorpion armor"] = {
	name: "Scorpion Armor",
	source: [["ToA", 208]],
	type: "Armor (Plate)",
	rarity: "Rare",
	description: "This suit of plate armor fashioned from giant scorpion chitin doesn't impose Disadv on Stealth or saves against extreme heat. It gives me +5 bonus on Initiative while I'm not Incapacitated. Whenever I don or doff it, I take 10d10+45 Poison damage, DC 15 Con save halves. Only a *Wish* can remove this curse.",
	descriptionFull: [
		"This suit of plate armor is fashioned from giant scorpion chitin. While wearing this armor, you gain the following benefits:",
		" \u2022 The armor improves your combat readiness, granting you a +5 bonus to initiative as long as you aren't incapacitated.",
		" \u2022 The armor doesn't impose disadvantage on your Dexterity (Stealth) checks.",
		" \u2022 The armor doesn't impose disadvantage on saving throws made to resist the effects of extreme heat (see chapter 5 of the Dungeon Master's Guide).",
		"***Curse***. This armor is cursed. Whenever you don or doff it, you must make a DC 15 Constitution saving throw, taking 100 (10d10+45) poison damage on a failed save, or half as much damage on a successful one. Only a *Wish* spell can remove the armor's curse.",
	],
	attunement: true,
	weight: 65,
	cursed: true,
	addMod: [{ type: "skill", field: "Init", mod: 5, text: "I gain a +5 bonus on my Initiative rolls." }],
	armorOptions: [{
		regExpSearch: /^(?=.*scorpion)(?=.*armor).*$/i,
		name: "Scorpion Armor",
		source: [["ToA", 208]],
		type: "heavy",
		ac: 18,
		stealthdis: false,
		weight: 65,
		strReq: 15,
		selectNow: true,
	}],
}
