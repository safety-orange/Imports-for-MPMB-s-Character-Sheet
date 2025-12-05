var iFileName = "pub_20250218_MM.js";
RequiredSheetVersion("24.0.1-beta");
// This file adds material from the 2025 Monster Manual that isn't in the SRD v5.2.1 to MPMB's Character Record Sheet

// Define the source
SourceList["M24"] = {
	name: "2025 Monster Manual",
	abbreviation: "MM'25",
	group: "Primary Sources",
	url: "https://marketplace.dndbeyond.com/core-rules/3711000",
	date: "2025/02/18",
};


// Pact of the Chain familiar
CreatureList["slaad tadpole"] = {
	name: "Slaad Tadpole",
	nameThis: "slaad",
	source: [["M24", 284]],
	size: 5,
	type: "Aberration",
	companion: ["pact_of_the_chain"],
	alignment: "Chaotic Neutral",
	ac: 12,
	hp: 7,
	hd: [3, 4],
	speed: "30 ft, burrow 10 ft",
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
	source: [["M24", 83]],
	size: 5,
	type: "Undead",
	alignment: "Neutral Evil",
	ac: 12,
	hp: 2,
	hd: [1, 4],
	speed: "20 ft, climb 20 ft",
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
	source: [["M24", 360]],
	size: 1,
	type: "Beast",
	alignment: "Unaligned",
	ac: 12,
	hp: 120,
	hd: [16, 12],
	speed: "5 ft, swim 80 ft",
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
		description: "As an Action, the [THIS] can make one Bite attack and one Tentacle attack.",
	}, {
		name: "Ink Cloud (1/Day)",
		description: "As a Reaction when the [THIS] takes damage while underwater, it can release ink that fills a 15-ft Cube centered on itself, and it moves up to its Swim Speed. The Cube is Heavily Obscured for 1 minute or until a strong current or similar effect disperses the ink.",
	}, {
		name: "Tentacle",
		description: "If the target is a Huge or smaller creature, it has the Grappled condition (escape DC 16) from one of two tentacles, and the [THIS] can pull the target up to 10 ft straight toward itself.",
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
		description: "\u2264Huge is Grappled (escape DC 16) \x26 pulled 10 ft closer; Restrained while Grappled",
	}],
};
