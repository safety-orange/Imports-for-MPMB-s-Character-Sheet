var iFileName = "pub_20250218_MM.js";
RequiredSheetVersion("24.1.0");
// This file adds material from the 2025 Monster Manual that isn't in the SRD v5.2.1 to MPMB's Character Record Sheet for 5.5e

// Define the source
SourceList["MM24"] = {
	name: "2025 Monster Manual",
	abbreviation: "MM'25",
	group: "Primary Sources",
	url: "https://marketplace.dndbeyond.com/core-rules/3711000",
	date: "2025/02/18",
};

// Animated for Magic Items
CreatureList["animated broom"] = {
	name: "Animated Broom",
	nameThis: "broom",
	source: [["MM24", 16]],
	size: 4,
	type: "Construct",
	alignment: "Unaligned",
	ac: 15,
	hp: 14,
	hd: [4, 6],
	speed: "5 ft, Fly 10 ft (hover)",
	scores: [10, 17, 10, 1, 5, 1],
	immunities: "Poison, Psychic; Charmed, Deafened, Exhaustion, Frightened, Paralyzed, Petrified, Poisoned",
	senses: "Blindsight 60 ft",
	passivePerception: 7,
	challengeRating: "1/4",
	proficiencyBonus: 2,
	attacksAction: 1,
	addMod: [{
		type: "skill", field: "Init", mod: "Prof",
		text: "The broom adds its Proficiency Bonus to its Initiative rolls.",
	}],
	traits: [{
		name: "Flyby",
		description: "The [THIS] doesn't provoke an Opportunity Attack when it flies out of an enemy's reach.",
	}],
	attacks: [{
		name: "Slam",
		ability: 2,
		damage: [1, 4, "bludgeoning"],
		range: "Melee (5 ft)",
	}],
};
// Pact of the Chain familiar
CreatureList["slaad tadpole"] = {
	name: "Slaad Tadpole",
	nameThis: "slaad",
	source: [["MM24", 284]],
	size: 5,
	type: "Aberration",
	companion: ["pact_of_the_chain"],
	alignment: "Chaotic Neutral",
	ac: 12,
	hp: 7,
	hd: [3, 4],
	speed: "30 ft, Burrow 10 ft",
	scores: [7, 15, 10, 3, 5, 3],
	skills: {
		"stealth": 4,
	},
	resistances: "Acid, Cold, Fire, Lightning, Thunder",
	senses: "Darkvision 60 ft",
	passivePerception: 7,
	languages: "Understands Slaad but can't speak",
	challengeRating: "1/8",
	proficiencyBonus: 2,
	attacksAction: 1,
	traits: [{
		name: "Magic Resistance",
		description: "The [THIS] has Advantage on saving throws against spells and other magical effects.",
	}],
	attacks: [{
		name: "Bite",
		ability: 2,
		damage: [1, 6, "piercing"],
		range: "Melee (5 ft)",
	}],
};
// Undead
CreatureList["crawling claw"] = {
	name: "Crawling Claw",
	source: [["MM24", 83]],
	size: 5,
	type: "Undead",
	alignment: "Neutral Evil",
	ac: 12,
	hp: 2,
	hd: [1, 4],
	speed: "20 ft, Climb 20 ft",
	scores: [13, 14, 11, 5, 10, 4],
	immunities: "Necrotic, Poison; Charmed, Exhaustion, Frightened, Incapacitated, Poisoned",
	senses: "Blindsight 30 ft",
	passivePerception: 10,
	languages: "Understands Common but can't speak",
	challengeRating: "0",
	proficiencyBonus: 2,
	attacksAction: 1,
	attacks: [{
		name: "Slam",
		ability: 1,
		damage: [1, "", "necrotic"],
		range: "Melee (5 ft)",
	}],
};
// Beast
CreatureList["giant squid"] = {
	name: "Giant Squid",
	source: [["MM24", 360]],
	size: 1,
	type: "Beast",
	alignment: "Unaligned",
	ac: 12,
	hp: 120,
	hd: [16, 12],
	speed: "5 ft, Swim 80 ft",
	scores: [23, 14, 12, 5, 11, 4],
	saves: [9, 5, "", "", "", ""],
	skills: {
		"perception": 6,
	},
	senses: "Darkvision 120 ft",
	passivePerception: 16,
	challengeRating: "6",
	proficiencyBonus: 3,
	attacksAction: 2,
	features: [{
		name: "Water Breathing",
		description: "The [THIS] can breathe only underwater.",
	}],
	actions: [{
		name: "Multiattack",
		description: "As an Attack action, the [THIS] can make one Bite and one Tentacle attack.",
	}, {
		name: "Ink Cloud (1/Day)",
		description: "As a Reaction when the [THIS] takes damage while underwater, it can release ink that fills a 15-ft Cube centered on itself, and it moves up to its Swim Speed. The Cube is Heavily Obscured for 1 minute or until a strong current or similar effect disperses the ink.",
		wildshapeShow: "As a Reaction after taking damage underwater, can release a 15-ft Cube of ink on itself and move up to Swim Speed. The area is Heavily Obscured for 1 minute or until dispersed by a strong current.",
	}, {
		name: "Tentacle",
		description: "If the target is a Huge or smaller creature, it has the Grappled condition (escape DC 16) from one of two tentacles, and the [THIS] can pull the target up to 10 ft straight toward itself.",
		wildshapeShow: false,
	}],
	attacks: [{
		name: "Bite",
		ability: 1,
		damage: [4, 10, "piercing"],
		range: "Melee (5 ft)",
	}, {
		name: "Tentacle",
		ability: 1,
		damage: [3, 8, "bludgeoning"],
		range: "Melee (15 ft)",
		description: "\u2264Huge is Grappled (escape DC 16) \x26 pulled 10 ft closer",
	}],
};
// Exotic mounts and pets
CreatureList["peryton"] = {
	name: "Peryton",
	source: [["MM24", 360]],
	size: 3,
	type: "Monstrosity",
	alignment: "Chaotic Evil",
	ac: 13,
	hp: 33,
	hd: [6, 8],
	speed: "20 ft, Fly 60 ft",
	scores: [16, 12, 13, 9, 12, 10],
	skills: {
		"perception": 5,
		"stealth": 3,
	},
	passivePerception: 15,
	languages: "Understands Common and Elvish, but can't speak",
	challengeRating: "2",
	proficiencyBonus: 2,
	attacksAction: 2,
	addMod: [{
		type: "skill", field: "Init", mod: "Prof",
		text: "The peryton adds its Proficiency Bonus to its Initiative rolls.",
	}],
	attacks: [{
		name: "Gore",
		ability: 1,
		damage: [1, 8, "piercing"],
		range: "Melee (5 ft)",
		description: "+2d8 damage after 30 ft move straight; 1 Talons and 1 Gore as Attack action",
	}, {
		name: "Talons",
		ability: 1,
		damage: [2, 4, "piercing"],
		range: "Melee (5 ft)",
		description: "1 Talons and 1 Gore as Attack action; Target at 0 HP dies",
	}],
	actions: [{
		name: "Multiattack",
		description: "As an Attack action, the [THIS] can make one Gore and one Talons attack.",
	}, {
		name: "Gore",
		description: "If the [THIS] moved 30 ft or more straight toward the target immediately before the hit, it deals +2d8 Piercing damage.",
	}, {
		name: "Talons",
		description: "If the attack reduces a Humanoid target to 0 Hit Points, the [THIS] kills the target by removing its heart.",
	}],
	features: [{
		name: "Flyby",
		description: "The [THIS] doesn't provoke an Opportunity Attack when it flies out of an enemy's reach.",
	}],
};
