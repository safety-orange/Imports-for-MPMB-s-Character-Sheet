var iFileName = "ps_20180731_Dominaria.js";
RequiredSheetVersion("13.0.8");
// This file adds all material from the Plane Shift: Dominaria article (https://magic.wizards.com/en/articles/archive/feature/plane-shift-dominaria-2018-07-31) to MPMB's Character Record Sheet

// Define the source
SourceList["PS:D"] = {
	name : "Plane Shift: Dominaria", 
	abbreviation : "PS:D",
	group : "Plane Shift",
	url : "https://media.wizards.com/2018/downloads/magic/Plane_Shift_Dominaria.pdf",
	date : "2018/07/31"
};

// Adds the 'Aven' race, which is identical to the Hawk-Headed Aven from Plane Shift: Amonkhet
if (!SourceList["PS:A"]) {
	RaceList["aven"] = {
		regExpSearch : /aven/i,
		name : "Aven",
		source : [["PS:A", 16], ["PS:D", 6]],
		plural : "Avens",
		size : 3,
		speed : {
			walk : { spd : 25, enc : 15 },
			fly : { spd : 30, enc : 0 }
		},
		languageProfs : ["Common", "Aven"],
		age : " age like humans and can live into their 80s",
		height : " stand between 5 and 6 feet tall",
		weight : " are very slender and their bones are partially hollow to facilitate their flight",
		heightMetric : " stand between 1,5 and 1,8 metres tall",
		scores : [0, 2, 0, 0, 2, 0],
		trait : "Aven (+2 Dexterity, +2 Wisdom)\n\nHawkeyed: I have proficiency in the Perception skill.\n\nAttacking at long range doesn't impose disadvantage on my ranged weapon attack rolls."
	};
};
// Add a new human race
RaceList["keldon human"] = {
	regExpSearch : /^((?=.*\bkeldon?s?\b)|(?=.*keld)(?=.*human)).*$/i,
	name : "Keldon",
	sortname : "Human, Keldon",
	source : ["PS:D", 19],
	plural : "Keldons",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	skills : ["Athletics"],
	saves : ["Str"],
	languageProfs : ["Common", "Keldon"],
	age : " reach adulthood in their late teens and live less than a century",
	height : " stand over 6 feet tall, reaching heights of above 7 feet",
	weight : " heavier than the human norms of other cultures",
	heightMetric : " stand over 1,8 metres tall, reaching heights of above 2,1 metres",
	scores : [2, 0, 1, 0, 0, 0],
	trait : "Keldon Human (+2 Strength, +1 Constitution)\n   Natural Athlete: I am proficient with the Athletics skill.\n   Keldon Resilience: I am proficient with Strength saving throws.\n   Icehaven Born: I am naturally adapted to cold climates."
};

// Add 2 beasts
CreatureList["kavu predator"] = {
	name : "Kavu Predator",
	source : ["PS:D", 24],
	size : 2,
	type : "Beast",
	alignment : "Unaligned",
	ac : 15,
	hp : 75,
	hd : [10, 10],
	speed : "30 ft, climb 30 ft",
	scores : [18, 12, 15, 6, 14, 8],
	skills : {
		"perception" : 4,
		"stealth" : 5
	},
	senses : "Darkvision 60 ft",
	passivePerception : 14,
	languages : "understands Elvish",
	challengeRating : "2",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
		name : "Bite",
		ability : 1,
		damage : [1, 10, "piercing"],
		range : "Melee (5 ft)",
		description : "Can be used in combination with claw while pouncing (see Pounce trait)"
	}, {
		name : "Claw",
		ability : 1,
		damage : [1, 6, "slashing"],
		range : "Melee (5 ft)",
		description : "2 claw attacks as 1 action; If used after moving 20 ft straight in the same round, see Pounce trait"
	}],
	traits : [{
		name : "Pounce",
		description : "If the kavu moves at least 20 ft straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the kavu can make one bite attack against it as a bonus action."
	}]
};
CreatureList["steel leaf kavu"] = {
	name : "Steel Leaf Kavu",
	source : ["PS:D", 24],
	size : 2,
	type : "Beast",
	alignment : "Unaligned",
	ac : 16,
	hp : 142,
	hd : [15, 10],
	speed : "30 ft, climb 30 ft",
	scores : [20, 12, 18, 6, 14, 8],
	skills : {
		"perception" : 4
	},
	senses : "Darkvision 60 ft",
	passivePerception : 14,
	languages : "understands Elvish",
	challengeRating : "4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 1,
		damage : [2, 8, "piercing"],
		range : "Melee (5 ft)",
		description : "If used after moving 20 ft straight in the same round, see Raking Charge trait"
	}, {
		name : "Rend",
		ability : 1,
		damage : [4, 8, "slashing"],
		range : "Melee (5 ft)",
		description : "Can only be used if target is prone"
	}],
	traits : [{
		name : "Raking Charge",
		description : "If the kavu moves at least 20 ft straight toward a creature and then hits it with a bit attack on the same turn, that target must succeed on a DC 15 Strength saving throw or be knocked prone. If the target is prone, the kavu can make one rend attack against it as a bonus action."
	}]
};
