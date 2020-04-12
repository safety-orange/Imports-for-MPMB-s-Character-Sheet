var iFileName = "pub_20170919_ToA.js";
RequiredSheetVersion(12.999);
// This file adds the backgrounds and beasts from the Tomb of Annihilation adventure book to MPMB's Character Record Sheet

// Define the source
SourceList.ToA={
	name : "Tomb of Annihilation [backgrounds, beasts, items]",
	abbreviation : "ToA",
	group : "Adventure Books",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/tomb-annihilation",
	date : "2017/09/19"
};

// Backgrounds (with contributions by SoilentBrad and @lowbrr)
BackgroundList["anthropologist"] = {
	regExpSearch : /anthropologist/i,
	name : "Anthropologist",
	source : [["ToA", 191], ["ALbackground", 0]],
	skills : ["Insight", "Religion"],
	gold : 10,
	equipleft : [
		["Leather-bound diary", "", 5],
		["Ink, 1 ounce bottle of", 1, ""],
		["Ink pen (quill)", "", ""]
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["Trinket of special significance", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Adept Linguist",
	trait : [
		"I prefer the company of those who aren't like me, including people of other races.",
		"I'm a stickler when it comes to observing proper etiquette and local customs.",
		"I would rather observe than meddle.",
		"By living among violent people, I have become desensitized to violence.",
		"I would risk life and limb to discover a new culture or unravel the secrets of a dead one.",
		"When I arrive at a new settlement for the first time, I must learn all its customs."
	],
	ideal : [
		["Discovery",
			"Discovery: I want to be the first person to discover a lost culture. (Any)"
		],
		["Distance",
			"Distance: One must not interfere with the affairs of another culture \u2015 even one in need of aid. (Lawful)"
		],
		["Knowledge",
			"Knowledge: By understanding other races and cultures, we learn to understand ourselves. (Any)"
		],
		["Power",
			"Power: Common people crave strong leadership, and I do my utmost to provide it. (Lawful)"
		],
		["Protection",
			"Protection: I must do everything possible to save a society facing extinction. (Good)"
		],
		["Indifferent",
			"Indifferent: Life is cruel. What's the point in saving people if they're going to die anyway? (Chaotic)"
		],
	],
	bond : [
		"My mentor gave me a journal filled with lore and wisdom. Losing it would devastate me.",
		"Having lived among the people of a primeval tribe or clan, I long to return and see how they are faring.",
		"Years ago, tragedy struck the members of an isolated society I befriended, and I will honor them.",
		"I want to learn more about a particular humanoid culture that fascinates me.",
		"I seek to avenge a clan, tribe, kingdom, or empire that was wiped out.",
		"I have a trinket that I believe is the key to finding a long-lost society."
	],
	flaw : [
		"Boats make me seasick.",
		"I talk to myself, and I don't make friends easily.",
		"I believe that I'm intellectually superior to people from other cultures and have much to teach them.",
		"I've picked up some unpleasant habits living among goblins, lizardfolk, or orcs.",
		"I complain about everything.",
		"I wear a tribal mask and never take it off."
	],
	extra : [
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
	languageProfs : [2]
};
BackgroundList["archaeologist"] = {
	regExpSearch : /archa?eologist/i,
	name : "Archaeologist",
	source : [["ToA", 192], ["ALbackground", 0]],
	skills : ["History", "Survival"],
	gold : 25,
	equipleft : [
		["Map case with a map of a ruin/dungeon", "", 1],
		["Bullseye lantern", "", 2],
		["Miner's pick", "", 10],
		["Shovel", "", 5],
		["Two-person tent", "", 20]
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["Trinket recovered from a dig site", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Historical Knowledge",
	trait : [
		"I love a good puzzle or mystery.",
		"I'm a pack rat who never throws anything away.",
		"Fame is more important to me than money.",
		"I have no qualms about stealing from the dead.",
		"I'm happier in a dusty old tomb than I am in the centers of civilization.",
		"Traps don't make me nervous. Idiots who trigger traps make me nervous.",
		"I might fail, but I will never give up.",
		"You might think I'm a scholar, but I love a good brawl. These fists were made for punching."
	],
	ideal : [
		["Preservation",
			"Preservation: That artifact belongs in a museum. (Good)"
		],
		["Greed",
			"Greed: I won't risk my life for nothing. I expect some kind of payment. (Any)"
		],
		["Death Wish",
			"Death Wish: Nothing is more exhilarating than a narrow escape from the jaws of death. (Chaotic)"
		],
		["Dignity",
			"Dignity: The dead and their belongings deserve to be treated with respect. (Lawful)"
		],
		["Immortality",
			"Immortality: All my exploring is part of a plan to find the secret of everlasting life. (Any)"
		],
		["Danger",
			"Danger: With every great discovery comes grave danger. The two walk hand in hand. (Any)"
		]
	],
	bond : [
		"Ever since I was a child, I've heard stories about a lost city. I aim to find it, learn its secrets, and earn my place in the history books.",
		"I want to find my mentor, who disappeared on an expedition some time ago.",
		"I have a friendly rival. Only one of us can be the best, and I aim to prove it's me.",
		"I won't sell an art object or other treasure that has historical significance or is one of a kind.",
		"I'm secretly in love with the wealthy patron who sponsors my archaeological exploits.",
		"I hope to bring prestige to a library, a museum, or a university."
	],
	flaw : [
		"I have a secret fear of some common wild animal \u2015 and in my work, I see them everywhere.",
		"I can't leave a room without searching it for secret doors.",
		"When I'm not exploring dungeons or ruins, I get jittery and impatient.",
		"I have no time for friends or family. I spend every waking moment thinking about and preparing for my next expedition.",
		"When given the choice of going left or right, I always go left.",
		"I can't sleep except in total darkness."
	],
	extra : [
		"Select a Signature Item",
		"10-foot pole",
		"Crowbar",
		"Hat",
		"Hooded lantern",
		"Medallion",
		"Shovel",
		"Sledgehammer",
		"Whip"
	],
	toolProfs : [["Cartographer or navigator tools", 1]],
	languageProfs : [1]
};

// Background features (with contributions by SoilentBrad and @lowbrr)
BackgroundFeatureList["adept linguist"] = {
	description : "I can communicate with humanoids who don't speak any language I know. I must observe the humanoids interacting with one another for at least one day, after which I learn a handful of important words, expressions, and gestures \u2015 enough to communicate on a rudimentary level.",
	source : [["ToA", 191], ["ALbackground", 0]]
};
BackgroundFeatureList["historical knowledge"] = {
	description : "When I enter a ruin or dungeon, I can correctly ascertain its original purpose and determine its builders, whether those were dwarves, elves, humans, yuan-ti, or some other known race. In addition, I can determine the monetary value of art objects more than a century old.",
	source : [["ToA", 192], ["ALbackground", 0]]
};

// Weapon
WeaponsList["yklwa"] = {
	regExpSearch : /yklwa/i,
	name : "Yklwa",
	source : ["ToA", 32],
	list : "melee",
	ability : 1,
	type : "Simple",
	damage : [1, 8, "piercing"],
	range : "Melee, 10/30 ft",
	weight : 3,
	description : "Thrown",
	monkweapon : true,
	abilitytodamage : true
};

// Gear
GearList["rain catcher"] = {
	infoname : "Rain catcher [1 gp]",
	name : "Rain catcher",
	source : ["ToA", 32],
	amount : 1,
	weight : 5
};
GearList["insect repellent salve"] = {
	infoname : "Salve (vial) [5 sp]",
	name : "Insect Repellent Salve, applications of",
	source : ["ToA", 32],
	amount : 20,
	weight : "",
	type : "insect repellent"
};
GearList["insect repellent incense"] = {
	infoname : "Incense (block) [1 gp]",
	name : "Insect Repellent Incense, blocks of",
	source : ["ToA", 32],
	amount : 1,
	weight : "",
	type : "insect repellent"
};

// Creatures
// [dupl_start] reprints from Volo's Guide to Monsters
if (!SourceList.V) {
	CreatureList["brontosaurus"] = {
		name : "Brontosaurus",
		source : [["V", 139], ["ToA", 215]],
		size : 0, //Gargantuan
		type : "Beast",
		subtype : "",
		alignment : "Unaligned",
		ac : 15,
		hp : 121,
		hd : [9, 20], //[#, die]
		speed : "30 ft",
		scores : [21, 9, 17, 2, 10, 7], //[Str, Dex, Con, Int, Wis, Cha]
		saves : ["", "", 6, "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
		senses : "",
		passivePerception : 10,
		languages : "",
		challengeRating : "5",
		proficiencyBonus : 3,
		attacksAction : 1,
		attacks : [{
				name : "Stomp",
				ability : 1,
				damage : [5, 8, "bludgeoning"], //[#, die, type] "" for die is allowed
				range : "Melee (20 ft)",
				description : "Target must succeed on a DC 14 Strength saving throw or be knocked prone"
			}, {
				name : "Tail",
				ability : 1,
				damage : [6, 8, "bludgeoning"], //[#, die, type] "" for die is allowed
				range : "Melee (20 ft)",
				description : ""
			}
		]
	};
	CreatureList["deinonychus"] = {
		name : "Deinonychus",
		source : [["V", 139], ["ToA", 217]],
		size : 3, //Medium
		type : "Beast",
		subtype : "",
		alignment : "Unaligned",
		ac : 13,
		hp : 26,
		hd : [4, 8], //[#, die]
		speed : "40 ft",
		scores : [15, 15, 14, 4, 12, 6], //[Str, Dex, Con, Int, Wis, Cha]
		saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
		skills : {
			"perception" : 3
		},
		senses : "",
		passivePerception : 13,
		languages : "",
		challengeRating : "1",
		proficiencyBonus : 2,
		attacksAction : 3,
		attacks : [{
				name : "Claw",
				ability : 1,
				damage : [1, 8, "slashing"], //[#, die, type] "" for die is allowed
				range : "Melee (5 ft)",
				description : "Two claw and one bite as one Attack action; If used after moving 20 ft straight in the same round, see Pounce trait"
			}, {
				name : "Bite",
				ability : 1,
				damage : [1, 8, "piercing"], //[#, die, type] "" for die is allowed
				range : "Melee (5 ft)",
				description : "Two claw and one bite as one Attack action (also, see Pounce trait)"
			}
		],
		traits : [{
				name : "Multiattack",
				description : "The deinonychus makes three attacks: two with its claws and one with its bite."
			}, {
				name : "Pounce",
				description : "If the deinonychus moves at least 20 ft straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the deinonychus can make one bite attack against it as a bonus action."
			}
		]
	};
	CreatureList["dimetrodon"] = {
		name : "Dimetrodon",
		source : [["V", 139], ["ToA", 217]],
		size : 3, //Medium
		type : "Beast",
		subtype : "",
		alignment : "Unaligned",
		ac : 12,
		hp : 19,
		hd : [3, 8], //[#, die]
		speed : "30 ft, swim 20 ft",
		scores : [14, 10, 15, 2, 10, 5], //[Str, Dex, Con, Int, Wis, Cha]
		saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
		skills : {
			"perception" : 2
		},
		senses : "",
		passivePerception : 12,
		languages : "",
		challengeRating : "1/4",
		proficiencyBonus : 2,
		attacksAction : 1,
		attacks : [{
				name : "Bite",
				ability : 1,
				damage : [2, 6, "piercing"], //[#, die, type] "" for die is allowed
				range : "Melee (5 ft)",
				description : ""
			}
		]
	};
	CreatureList["hadrosaurus"] = {
		name : "Hadrosaurus",
		source : [["V", 140], ["ToA", 224]],
		size : 2, //Large
		type : "Beast",
		subtype : "",
		alignment : "Unaligned",
		ac : 11,
		hp : 19,
		hd : [3, 10], //[#, die]
		speed : "40 ft",
		scores : [15, 10, 13, 2, 10, 5], //[Str, Dex, Con, Int, Wis, Cha]
		saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
		skills : {
			"perception" : 2
		},
		senses : "",
		passivePerception : 12,
		languages : "",
		challengeRating : "1/4",
		proficiencyBonus : 2,
		attacksAction : 1,
		attacks : [{
				name : "Tail",
				ability : 1,
				damage : [1, 10, "bludgeoning"], //[#, die, type] "" for die is allowed
				range : "Melee (5 ft)",
				description : ""
			}
		]
	};
	CreatureList["quetzalcoatlus"] = {
		name : "Quetzalcoatlus",
		source : [["V", 140], ["ToA", 230]],
		size : 1, //Huge
		type : "Beast",
		subtype : "",
		alignment : "Unaligned",
		ac : 13,
		hp : 30,
		hd : [4, 12], //[#, die]
		speed : "10 ft, fly 80 ft",
		scores : [15, 13, 13, 2, 10, 5], //[Str, Dex, Con, Int, Wis, Cha]
		saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
		skills : {
			"perception" : 2
		},
		senses : "",
		passivePerception : 12,
		languages : "",
		challengeRating : "2",
		proficiencyBonus : 2,
		attacksAction : 1,
		attacks : [{
				name : "Bite",
				ability : 1,
				damage : [3, 6, "piercing"], //[#, die, type] "" for die is allowed
				range : "Melee (10 ft)",
				description : "If used after diving 30 ft towards a target, the attack deals 3d6 extra damage (Dive Attack)"
			}
		],
		traits : [{
				name : "Dive Attack",
				description : "If the quetzalcoatlus is flying and dives at least 30 ft toward a creature and then hits it with a bite attack, the attack deals an extra 10 (3d6) damage to the target."
			}, {
				name : "Flyby",
				description : "The quetzalcoatlus doesn't provoke opportunity attacks when it flies out of an enemy's reach."
			}
		]
	};
	CreatureList["stegosaurus"] = {
		name : "Stegosaurus",
		source : [["V", 140], ["ToA", 231]],
		size : 1, //Huge
		type : "Beast",
		subtype : "",
		alignment : "Unaligned",
		ac : 13,
		hp : 76,
		hd : [8, 12], //[#, die]
		speed : "40 ft",
		scores : [20, 9, 17, 2, 11, 5], //[Str, Dex, Con, Int, Wis, Cha]
		saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
		senses : "",
		passivePerception : 10,
		languages : "",
		challengeRating : "4",
		proficiencyBonus : 2,
		attacksAction : 1,
		attacks : [{
				name : "Bite",
				ability : 1,
				damage : [6, 6, "piercing"], //[#, die, type] "" for die is allowed
				range : "Melee (10 ft)",
				description : ""
			}
		]
	};
	CreatureList["velociraptor"] = {
		name : "Velociraptor",
		source : [["V", 140], ["ToA", 235]],
		size : 5, //Tiny
		type : "Beast",
		subtype : "",
		alignment : "Unaligned",
		ac : 13,
		hp : 10,
		hd : [3, 4], //[#, die]
		speed : "30 ft",
		scores : [6, 14, 13, 4, 12, 6], //[Str, Dex, Con, Int, Wis, Cha]
		saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
		skills : {
			"perception" : 3
		},
		senses : "",
		passivePerception : 13,
		languages : "",
		challengeRating : "1/4",
		proficiencyBonus : 2,
		attacksAction : 2,
		attacks : [{
				name : "Bite",
				ability : 2,
				damage : [1, 6, "piercing"], //[#, die, type] "" for die is allowed
				range : "Melee (5 ft)",
				description : "One bite and one claw attack as an Attack action"
			}, {
				name : "Claw",
				ability : 2,
				damage : [1, 4, "slashing"], //[#, die, type] "" for die is allowed
				range : "Melee (5 ft)",
				description : "One bite and one claw attack as an Attack action"
			}
		],
		traits : [{
				name : "Pack Tactics",
				description : "The velociraptor has advantage on an attack roll against a creature if at least one of the velociraptor's allies is within 5 ft of the creature and the ally isn't incapacitated."
			}
		]
	};
} // dupl_end
// The following creatures were transcribed with the help of SoilentBrand and @lowbrr
CreatureList["almiraj"] = {
	name : "Almiraj",
	source : ["ToA", 211],
	size : 4, //Small
	type : "Beast",
	subtype : "",
	companion : sheetVersion >= 13 ? "familiar_not_al" : "familiar",
	alignment : "Unaligned",
	ac : 13,
	hp : 3,
	hd : [1, 6],
	speed : "50 ft",
	scores : [2, 16, 10, 2, 14, 10],
	saves : ["", "", "", "", "", ""],
	skills : {
		"perception" : 4,
		"stealth" : 5,
	},
	senses : "Darkvision 30 ft; Adv. on Wis (Perception) checks using hearing/sight",
	passivePerception : 14,
	languages : "",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Horn",
			ability : 2,
			damage : [1, 4, "piercing"],
			range : "Melee (5 ft)",
			description : ""
		}
	],
	traits : [{
			name : "Keen Senses",
			description : "The almiraj has advantage on Wisdom (Perception) checks that rely on hearing or sight."
		}
	],
};
CreatureList["flying monkey"] = {
	name : "Flying Monkey",
	source : ["ToA", 220],
	size : 4, //Small
	type : "Beast",
	subtype : "",
	companion : sheetVersion >= 13 ? "familiar_not_al" : "familiar",
	alignment : "Unaligned",
	ac : 12,
	hp : 3,
	hd : [1, 6],
	speed : "30 ft, climb 20 ft, fly 30 ft",
	scores : [8, 14, 11, 5, 12, 6],
	saves : ["", "", "", "", "", ""],
	senses : "",
	passivePerception : 11,
	languages : "",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 1,
			damage : [1, 4, "piercing"],
			range : "Melee (5 ft)",
			description : ""
		}
	],
	traits : [{
			name : "Pack Tactics",
			description : "The flying monkey has advantage on an attack roll against a creature if at least one of the monkey's allies is within 5 ft of the creature and the ally isn't incapacitated."
		}
	],
};
CreatureList["giant snapping turtle"] = {
	name : "Giant Snapping Turtle",
	source : ["ToA", 222],
	size : 2, //Large
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 17,
	hp : 75,
	hd : [10, 10],
	speed : "30 ft, swim 40 ft",
	scores : [19, 10, 14, 2, 12, 5],
	saves : ["", "", "", "", "", ""],
	senses : "Darkvision 60 ft",
	passivePerception : 11,
	languages : "",
	challengeRating : "3",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 1,
			damage : [4, 6, "slashing"],
			range : "Melee (5 ft)",
			description : ""
		}
	],
	traits : [{
			name : "Amphibious",
			description : "The turtle can breathe air and water."
		}, {
			name : "Stable",
			description : "Whenever an effect knocks the turtle prone, it can make a DC 10 Constitution saving throw to avoid being knocked prone. A prone turtle is upside down. To stand up, it must succeed on a DC 10 Dexterity check on its turn and then use all its movement for that turn. While prone, the turtle's AC becomes 12."
		}
	]
};
CreatureList["jaculi"] = {
	name : "Jaculi",
	source : ["ToA", 225],
	size : 2, //Large
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 14,
	hp : 16,
	hd : [3, 10],
	speed : "30 ft, climb 20 ft",
	scores : [15, 14, 11, 2, 8, 3],
	saves : ["", "", "", "", "", ""],
	skills : {
		"athletics" : 4,
		"perception" : 1,
		"stealth" : 4
	},
	senses : "Blindsight 30 ft; Adv. on Wis (Perception) checks using smell",
	passivePerception : 11,
	languages : "",
	challengeRating : "1/2",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 1,
			damage : [2, 6, "piercing"],
			range : "Melee (5 ft)",
			description : "If used after at least 10 ft jump, adv. on to hit and extra 2d6 damage, see Spring trait"
		}
	],
	actions : [{
			name : "Spring",
			description : "The jaculi springs up to 30 feet in a straight line and makes a bite attack against a target within its reach. This attack has advantage if the jaculi springs at least 10 feet. If the attack hits, the bite deals an extra 7 (2d6) piercing damage."
		}
	],
	traits : [{
			name : "Camouflage",
			description : "The jaculi has advantage on Dexterity (Stealth) checks made to hide."
		}, {
			name : "Keen Smell",
			description : "The jaculi has advantage on Wisdom (Perception) checks that rely on smell."
		}
	],
	wildshapeString : "\u25C6 Senses: Blindsight 30 ft.\n\u25C6 Camouflage: advantage on Dexterity (Stealth) checks made to hide.\n\u25C6 Keen Smell: advantage on Wisdom (Perception) checks that rely on smell.\n\u25C6 Spring: 30 ft in a straight line and make a bite attack. Advantage on the attack roll if springing at least 10 ft. It deals an extra 7 (2d6) piercing damage on a hit."
};

// Magic Items
MagicItemsList["amulet of the black skull"] = {
	name : "Amulet of the Black Skull",
	source : ["ToA", 206],
	type : "wondrous item",
	rarity : "very rare",
	magicItemTable : "G",
	description : "The obsidian amulet has 6 charges, regaining 1d6 at dawn. As an action, I can expend a charge to teleport to a location within 100 ft that I'm familiar with. If I'm not undead, I must make a DC 16 Con save whenever I do so and if I fail, I'm transformed (see table on Notes page) as I arrive at the destination.",
	descriptionFull : "This amulet is carved from obsidian and shaped like a screaming humanoid skull, with ruby eyes and emeralds for teeth. It hangs from an iron chain necklace.\n   The amulet has 6 charges and regains 1d6 charges daily at dawn. While wearing the amulet, you can use an action to expend 1 of its charges to transport yourself and anything you are wearing or carrying to a location within 100 feet of you. The destination you choose doesn't need to be in your line of sight, but it must be familiar to you (in other words, a place you have seen or visited), and it must be on the same plane of existence as you. This effect isn't subject to the magic restrictions placed on the Tomb of the Nine Gods; thus, the amulet can be used to enter and exit the tomb.\n   If you aren't undead, you must make a DC 16 Constitution saving throw each time you use the amulet to teleport. On a failed saving throw, the black skull cackles as you are transformed in transit. The transformation takes effect as soon as you arrive at the destination, and is determined randomly by rolling percentile dice and consulting the Black Skull Transformation table.\n\n" + toUni("d100\tTransformation") + "\n01-20\tThe symbol of Acererak is burned into your flesh, a curse that can only be removed with a Remove Curse spell or similar magic. Until the curse ends, your hit points can't be restored by magic.\n21-35\tYou grow larger as if affected by an Enlarge/Reduce spell, except the effect lasts for 1 hour.\n36-50\tYou grow smaller as if affected by an Enlarge/Reduce spell, except the effect lasts for 1 hour.\n51-70\tYou arrive at the destination wearing nothing but the amulet of the black skull. Everything else that you were wearing or carrying appears in a random unoccupied space within 100 feet of you.\n71-95\tYou are paralyzed for 1 minute or until this effect is ended with a Lesser Restoration spell or similar magic.\n96-00\tYou become petrified. This effect can be ended only with a Greater Restoration spell or similar magic.",
	attunement : true,
	weight : 1,
	action : [["action", ""]],
	usages : 6,
	recovery : "dawn",
	additional : "regains 1d6",
	toNotesPage : [{
		name : "Transformation Table",
		popupName : "Amulet of the Black Skull Transformation Table",
		note : [
			"This amulet is carved from obsidian and shaped like a screaming humanoid skull, with ruby eyes and emeralds for teeth. It hangs from an iron chain necklace.",
			"If I'm not undead, I must make a DC 16 Constitution save each time I use the amulet to teleport. On a failure, the black skull cackles as I'm transformed in transit. The transformation is random (see table below) and takes effect as soon as I arrive at the destination.",
			"d100\tTRANSFORMATION",
			"01-20\tThe symbol of Acererak is burned into my flesh, a curse that can only be removed with a Remove Curse spell or similar magic. Until the curse ends, my hit points can't be restored by magic.",
			"21-35\tI grow larger as if affected by an Enlarge/Reduce spell, except the effect lasts for 1 hour.",
			"36-50\tI grow smaller as if affected by an Enlarge/Reduce spell, except the effect lasts for 1 hour.",
			"51-70\tI arrive at the destination wearing nothing but the amulet of the black skull. Everything else that I was wearing or carrying appears in a random unoccupied space within 100 ft.",
			"71-95\tI am paralyzed for 1 minute or until this effect is ended with a Lesser Restoration spell or similar magic.",
			"96-00\tI become petrified. This effect can be ended only with a Greater Restoration spell or similar magic."
		]
	}]
}
MagicItemsList["bookmark"] = {
	name : "Bookmark",
	source : ["ToA", 206],
	type : "weapon (dagger)",
	rarity : "legendary",
	notLegalAL : true,
	description : "This dagger adds +3 to hit and damage. As a bonus action while holding it, I can have it shed bright light in a 20-ft radius and dim light for another 20 ft, go dark, act as a compass, cast Dimension Door once per dawn, or cast Compulsion once per dawn, which effects only spiders of the beast type within 90 ft.",
	descriptionFull : "This +3 dagger belongs to Artus Cimber. While you have the dagger drawn, you can use a bonus action to activate one of the following properties:\n \u2022 Cause a blue gem set into the dagger's pommel to shed bright light in a 20-foot radius and dim light for an additional 20 feet, or make the gem go dark.\n \u2022 Turn the dagger into a compass that, while resting on your palm, points north.\n \u2022 Cast Dimension Door from the dagger. Once this property is used, it can't be used again until the next dawn.\n \u2022 Cast Compulsion (save DC 15) from the dagger. The range of the spell increases to 90 feet but it targets only spiders that are beasts. Once this property is used, it can't be used again until the next dawn.",
	attunement : true,
	weight : 1,
	action : [["bonus action", ""]],
	weaponsAdd : ["Bookmark"],
	weaponOptions : {
		baseWeapon : "dagger",
		regExpSearch : /bookmark/i,
		name : "Bookmark",
		source : ["ToA", 206],
		modifiers : [3, 3]
	},
	extraLimitedFeatures : [{
		name : "Compulsion (Bookmark)",
		usages : 1,
		recovery : "dawn"
	}, {
		name : "Dimension Door (Bookmark)",
		usages : 1,
		recovery : "dawn"
	}],
	fixedDC : 15,
	spellcastingBonus : {
		name : "Once per dawn",
		spells : ["compulsion", "dimension door"],
		selection : ["compulsion", "dimension door"],
		firstCol : "oncelr",
		times : 2
	},
	spellChanges : {
		"compulsion" : {
			time : "1 bns",
			range : "90 ft",
			description : "Any spiders that hear me save or I can, as bns, have it move fully in a direction; save again after move",
			changes : "Using Bookmark, I can cast this as a bonus action with a range of 90 ft, but it can only target spiders with the beast type."
		}
	}
}
MagicItemsList["ghost lantern"] = {
	name : "Ghost Lantern",
	source : ["ToA", 206],
	type : "wondrous item",
	rarity : "legendary",
	magicItemTable : "C",
	description : "As a bonus action, I can command the spirit in the lantern to shed bright light in 30-ft radius and dim light for another 30 ft. I can order the spirit to act as my Mage Hand. If I fall unconscious within 10 ft of the lantern, the spirit stabilizes me. Casting Dispel Evil and Good on it releases the spirit and makes it nonmagical.",
	descriptionFull : "A restless spirit is trapped inside this lantern. While holding the lantern, you can command the spirit as a bonus action to shed bright light in a 30-foot radius and dim light for an additional 30 feet.\n   While holding the lantern, you can use an action to order the spirit to leave the lantern and duplicate the effect of the Mage Hand spell. The spirit returns to the lantern when the spell ends.\n   If you fall unconscious within 10 feet of the lantern, the spirit emerges from it, magically stabilizes you with a touch, and then quickly returns to the lantern.\n   The spirit is bound to the lantern and can't be harmed, turned, or raised from the dead.\n   Casting a Dispel Evil and Good spell on the lantern releases the spirit to the afterlife and renders the lantern nonmagical.",
	attunement : true,
	weight : 1,
	action : [["bonus action", ""]],
	spellcastingBonus : {
		name : "At will",
		spells : ["mage hand"],
		selection : ["mage hand"],
		firstCol : "atwill"
	}
}
MagicItemsList["mask of the beast"] = {
	name : "Mask of the Beast",
	source : ["ToA", 207],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "C",
	description : "This wooden mask is shaped in the likeness of a beast's visage and has 3 charges. While wearing the mask I can expend 1 charge and use the mask to cast the Animal Friendship spell as an action. The mask regains all expended charges at dawn.",
	descriptionFull : "This wooden mask is shaped in the likeness of a beast's visage and has 3 charges. While wearing the mask you can expend 1 charge and use the mask to cast the Animal Friendship spell as an action. The mask regains all expended charges at dawn.",
	weight : 1,
	usages : 3,
	recovery : "dawn",
	spellFirstColTitle : "Ch",
	spellcastingBonus : {
		name : "1 charge",
		spells : ["animal friendship"],
		selection : ["animal friendship"],
		firstCol : 1
	}
}
MagicItemsList["scorpion armor"] = {
	name : "Scorpion Armor",
	source : ["ToA", 208],
	type : "armor (plate)",
	rarity : "rare",
	magicItemTable : "I",
	description : "This suit of plate armor fashioned from giant scorpion chitin doesn't impose disadv. on stealth or saves against extreme heat. It gives me +5 bonus on initiative while I'm not incapacitated. Whenever I don or doff it, I take 10d10+45 poison damage, DC 15 Con save halves. Only a Wish can remove this curse.",
	descriptionFull : "This suit of plate armor is fashioned from giant scorpion chitin. While wearing this armor, you gain the following benefits:\n \u2022 The armor improves your combat readiness, granting you a +5 bonus to initiative as long as you aren't incapacitated.\n \u2022 The armor doesn't impose disadvantage on your Dexterity (Stealth) checks.\n \u2022 The armor doesn't impose disadvantage on saving throws made to resist the effects of extreme heat (see chapter 5 of the Dungeon Master's Guide).\n\n" + toUni("Curse") + ". This armor is cursed. Whenever you don or doff it, you must make a DC 15 Constitution saving throw, taking 100 (10d10+45) poison damage on a failed save, or half as much damage on a successful one. Only a Wish spell can remove the armor's curse.",
	attunement : true,
	weight : 65,
	cursed : true,
	addMod : [{ type : "skill", field : "Init", mod : 5, text : "I gain a +5 bonus on my initiative rolls." }],
	armorAdd : "Scorpion Armor",
	armorOptions : {
		regExpSearch : /^(?=.*scorpion)(?=.*armor).*$/i,
		name : "Scorpion Armor",
		source : ["ToA", 208],
		type : "heavy",
		ac : 18,
		stealthdis : false,
		weight : 65,
		strReq : 15
	}
}
