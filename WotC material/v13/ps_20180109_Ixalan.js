var iFileName = "ps_20180109_Ixalan.js";
RequiredSheetVersion(13);
// This file adds all material from the Plane Shift: Ixalan article (https://magic.wizards.com/en/articles/archive/feature/plane-shift-ixalan-2018-01-09) to MPMB's Character Record Sheet

// Define the source
SourceList["PS:X"] = {
	name : "Plane Shift: Ixalan", 
	abbreviation : "PS:X",
	group : "Plane Shift",
	url : "https://media.wizards.com/2018/downloads/magic/plane-shift_ixalan.pdf",
	date : "2018/01/09"
};

// Adds 6 races
RaceList["green merfolk"] = {
	regExpSearch : /^(?=.*green)(?=.*(merfolk|mermaid|merman)\b).*$/i,
	name : "Green Merfolk",
	sortname : "Merfolk, Green",
	source : ["PS:X", 12],
	plural : "Green Merfolk",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Merfolk", 1],
	age : " reach adulthood around 20 and live considerably longer than humans, often reaching well over 100 years",
	height : " stand between 6 and 7 feet tall",
	weight : " average around 300 pounds",
	heightMetric : " stand between 1,8 and 2,2 metres tall",
	weightMetric : " average around 135 kg",
	scores : [0, 0, 0, 0, 2, 1],
	trait : "Green Merfolk (+2 Wisdom, +1 Charisma)\nAmphibious: I can breathe air and water.\nMask of the Wild: I can attempt to hide even when I am only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.\nCantrip: I know one cantrip of my choice from the druid spell list. Wisdom is my spellcasting ability for it.",
	spellcastingAbility : 5,
	spellcastingBonus : {
		name : "Cantrip",
		"class" : "druid",
		level : [0, 0],
		firstCol : 'atwill'
	}
};
RaceList["blue merfolk"] = {
	regExpSearch : /^(?=.*blue)(?=.*(merfolk|mermaid|merman)\b).*$/i,
	name : "Blue Merfolk",
	sortname : "Merfolk, Blue",
	source : ["PS:X", 12],
	plural : "Blue Merfolk",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Merfolk", 1],
	age : " reach adulthood around 20 and live considerably longer than humans, often reaching well over 100 years",
	height : " stand between 6 and 7 feet tall",
	weight : " average around 300 pounds",
	heightMetric : " stand between 1,8 and 2,2 metres tall",
	weightMetric : " average around 135 kg",
	skills : ["History", "Nature"],
	scores : [0, 0, 0, 2, 0, 1],
	trait : "Blue Merfolk (+2 Intelligence, +1 Charisma)\nAmphibious: I can breathe air and water.\nLore of the Waters: I have proficiency with the History and Nature skills.\nCantrip: I know one cantrip of my choice from the wizard spell list. Intelligence is my spellcasting ability for it.",
	spellcastingAbility : 4,
	spellcastingBonus : {
		name : "Ula Creed Cantrip",
		"class" : "wizard",
		level : [0, 0],
		firstCol : 'atwill'
	}
};

RaceList["ixalan vampire"] = {
	regExpSearch : /^(?=.*vampire)(?=.*ixalan).*$/i,
	name : "Vampire",
	sortname : "Vampire, Ixalan",
	source : ["PS:X", 14],
	plural : "Vampires",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languageProfs : ["Common", "Vampire"],
	vision : [["Darkvision", 60]],
	dmgres : ["Necrotic"],
	weaponOptions : {
		regExpSearch : /^(?=.*blood)(?=.*thirst).*$/i,
		name : "Blood Thirst",
		source : ["PS:X", 14],
		ability : 1,
		type : "Natural",
		damage : [1, 6, "necrotic"],
		range : "Melee",
		description : "+1 piercing damage; Reduces max HP by the necrotic damage, while healing me for the same",
		abilitytodamage : false,
		monkweapon : false
	},
	weaponsAdd : ["Blood Thirst"],
	age : " don't mature and age in the same way that other races do",
	scores : [0, 0, 0, 0, 1, 2],
	trait : "Vampire (+1 Wisdom, +2 Charisma)\nBlood Thirst: I can drain blood and life energy from a willing creature, or one that is grappled by me, incapacitated, or restrained. With a melee attack, I deal 1 piercing and 1d6 necrotic damage. The target's max HP is reduced by the necrotic damage amount and I regain HP for the same. This max HP reduction lasts until the target finished a long rest.\nFeast of Blood: After using my blood thirst ability to drain blood, I gain +10 ft speed and advantage on Strength and Dexterity checks and saving throws for 1 minute."
};

RaceList["ixalan orc"] = {
	regExpSearch : /^(?=.*ixalan)(?=.*orc).*$/i,
	name : "Ixalan orc",
	sortname : "Orc, Ixalan",
	source : ["PS:X", 15],
	plural : "Ixalan orcs",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languageProfs : ["Common", "Orc"],
	vision : [["Darkvision", 60]],
	skills : ["Intimidation"],
	age : " reach adulthood at age 14 and rarely live longer than 75 years",
	height : " are usually over 6 feet tall (5'4\" + 2d8\")",
	weight : " weigh between 230 and 280 lb (175 + 2d8 \xD7 2d6 lb)",
	heightMetric : " are usually over 1,8 metres tall (160 + 5d8 cm)",
	weightMetric : " weigh between 100 and 125 kg (80 + 5d8 \xD7 4d6 / 10 kg)",
	scores : [2, 0, 1, 0, 0, 0],
	features : {
		"relentless endurance" : {
			name : "Relentless Endurance",
			minlevel : 1,
			usages : 1,
			recovery : "long rest"
		},
		"savage attacks" : {
			name : "Savage Attacks",
			minlevel : 1,
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.isMeleeWeapon && (/d\d+/).test(fields.Damage_Die)) {
							if (v.extraCritM) {
								v.extraCritM += 1;
								var extraCritRegex = /\d+(d\d+ extra on a crit(ical)?( hit)? in melee)/i;
								fields.Description = fields.Description.replace(extraCritRegex, v.extraCritM + '$1');
							} else {
								v.extraCritM = 1;
								fields.Description += (fields.Description ? '; ' : '') + v.extraCritM + fields.Damage_Die.replace(/.*(d\d+).*/, '$1') + ' extra on a crit in melee';
							}
						}
					},
					"My melee weapon attacks roll 1 additional dice on a critical hit."
				]
			}
		}
	},
	trait : "Ixalan Orc (+2 Strength, +1 Constitution)" + (typePF ? "\n" : " ") + "\nRelentless Endurance: When I am reduced to 0 hit points but not killed outright, I can drop to 1 hit point instead. I can't use this feature again until I finish a long rest.\n\nSavage Attacks: When I score a critical hit with a melee weapon attack, I can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit."
};

RaceList["ixalan goblin"] = {
	regExpSearch : /^(?=.*ixalan)(?=.*goblin).*$/i,
	name : "Ixalan goblin",
	sortname : "Goblin, Ixalan",
	source : ["PS:X", 16],
	plural : "Ixalan goblins",
	size : 4,
	speed : {
		walk : { spd : 25, enc : 15 },
		climb : { spd : 25, enc : 0 }
	},
	languageProfs : ["Common", "Goblin"],
	vision : [["Darkvision", 60]],
	age : " reach adulthood at around 12 and rarely live longer than 50 years",
	height : " average about 3 feet tall (3'\" + 2d4\")",
	weight : " weigh about 40 lb (35 + 2d4 \xD7 1d4 lb)",
	heightMetric : " average about 100 cm tall (100 + 5d4 cm)",
	weightMetric : " weigh about 20 kg (17 + 5d4 \xD7 2d4 / 10 kg)",
	scores : [0, 2, 0, 0, 0, 0],
	trait : "Ixalan Goblin (+2 Dexterity)\nAgile Climber: I have a climbing speed of 25 ft, but can't use this while encumbered or wearing medium or heavy armor."
};

RaceList["siren"] = {
	regExpSearch : /\bsiren\b/i,
	name : "Siren",
	source : ["PS:X", 17],
	plural : "Sirens",
	size : 3,
	speed : {
		walk : { spd : 25, enc : 15 },
		fly : { spd : 30, enc : 0 }
	},
	languageProfs : ["Common", "Siren"],
	height : " range from 5 to 6 feet tall (4'9\" + 2d8\")",
	weight : " have slender bodies and their bones partially hollow to facilitate their flight",
	heightMetric : " range from 1,5 to 1,8 metres tall (145 + 5d8 cm)",
	scores : [0, 2, 0, 0, 0, 0],
	trait : "Siren (+2 Charisma)\n\nFlight: I have a flying speed of 30 ft, but can't use this while encumbered or wearing medium or heavy armor.\n\nSiren's Song: I know the friends cantrip and can cast it without material components.",
	spellcastingBonus : {
		name : "Siren's Song",
		spells : ["friends"],
		selection : ["friends"],
		firstCol : 'atwill'
	}
};

FeatsList["vampiric exultation"] = {
	name : "Vampiric Exultation",
	source : ["PS:X", 14],
	prerequisite : "Being an Ixalan Vampire",
	prereqeval : function () { return CurrentRace.known == 'ixalan vampire' },
	descriptionFull : "As an action, you can transform the lower half of your body into an inky black vapor, allowing you to float through the air. While transformed, you have a flying speed of 30 feet. You can maintain this form for up to 10 minutes. Once you use this ability, you can't use it again until you finish a short or long rest.",
	description : "As an action, I can transform the lower half of my body into an inky black vapor for up to 10 minutes. While transformed, I have a flying speed of 30 ft. Once I use this ability, I can’t use it again until you finish a short or long rest.",
	action : ["action", ""],
	usages : 1,
	recovery : "short rest"
};

// Adds 1 creature, a beast
CreatureList["frilled deathspitter"] = {
	name : "Frilled Deathspitter",
	source : ["PS:X", 30],
	size : 4,
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 13,
	hp : 18,
	hd : [4, 6],
	speed : "40 ft",
	scores : [12, 16, 13, 4, 12, 6],
	saves : ["", "", "", "", "", ""],
	skills : {
		"perception" : 3
	},
	senses : "",
	passivePerception : 13,
	languages : "",
	challengeRating : "1/2",
	proficiencyBonus : 2,
	attacksAction : 3,
	attacks : [{
			name : "Bite",
			ability : 2,
			damage : [1, 6, "piercing"],
			range : "Melee (5 ft)",
			description : "One bite and two claw attacks as an Attack action"
		}, {
			name : "Claw",
			ability : 2,
			damage : [1, 6, "slashing"],
			range : "Melee (5 ft)",
			description : "One bite and two claw attacks as an Attack action"
		}, {
			name : "Spit Poison",
			ability : 2,
			damage : [4, 8, "poison"],
			range : "15/30 ft",
			description : "Target blinded til end of next turn; DC 13 Con save for half damage and not blinded",
			modifiers : ["", "", false]
		}
	],
	traits : [{
			name : "Multiattack",
			description : "The deathspitter makes three attacks: one with its bite and two with its claws."
		}
	]
};
