var iFileName = "pub_20200721_MOT.js";
RequiredSheetVersion("13.0.7");
// This file adds the content from Mythic Odysseys of Theros to MPMB's Character Record Sheet

// Define the source
SourceList.MOT = {
	name : "Mythic Odysseys of Theros",
	abbreviation : "MOT",
	group : "Primary Sources",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/mythic-odysseys-theros",
	date : "2020/07/21"
};

RaceList["leonin"] = { // includes contributions by BraabHimself
    regExpSearch : /leonin/i,
    name : "Leonin",
    source : [["MOT", 20]],
    plural : "Leonin",
    size : 3,
    speed : {
        walk : { spd : 35, enc : 25 }
    },
    skillstxt : "Choose one from Athletics, Intimidation, Perception, or Survival",
    languageProfs : ["Common", "Leonin"],
    vision : [["Darkvision", 60]],
    weaponOptions : [{
        baseWeapon : "unarmed strike",
        regExpSearch : /^(?=.*(leonin|\bcats?\b))(?=.*claw).*$/i,
        name : "Leonin Claws",
        source : [["MoT", 21]],
        damage : [1, 4, "slashing"]
    }],
    weaponsAdd : ["Leonin Claws"],
	abilitySave : 3,
    age : " mature and age at about the same rate as humans",
    height : " are typically over 6 feet tall, with some standing over 7 feet (5'6\" + 2d10\")",
	weight : " weigh around 250 lb (180 + 2d10 \xD7 2d6 lb)",
    heightMetric : " are typically over 1,8 metres tall, with some standing over 2,1 metres (167 + 5d10 cm)",
	weightMetric : " weigh around 120 kg (80 + 5d10 \xD7 4d6 / 10 kg)",
    scores : [1, 0, 2, 0, 0, 0],
    features : {
        "daunting roar" : {
            name : "Daunting Roar",
            minlevel : 1,
            usages : 1,
            recovery : "short rest",
            action : [["bonus action", ""]]
        }
    },
	trait : "Leonin (+2 Constitution +1 Strength)" + desc([
		"Claws: I can use my claws to make unarmed strikes that deal 1d4 slashing damage.",
		"Daunting Roar: As a bonus action once per short rest, I can let out a menacing roar. Creatures of my choice within 10 ft of me that can hear me must make a Wisdom saving throw (DC 8 + Constitution modifier + Proficiency Bonus) or become frightened of me until the end of my next turn.",
		"Hunter's Instincts: I'm proficient in either Athletics, Intimidation, Perception, or Survival."
	])
};
RaceList["satyr"] = { // includes contributions by BraabHimself
	regExpSearch : /satyr|goat\s*(wo)?man/i,
	name : "Satyr",
	source : [["MOT", 24]],
	plural : "Satyr",
	size : 3,
	speed : {
		walk : { spd : 35, enc : 25 }
	},
	savetxt : { adv_vs : ["magic"] },
	languageProfs : ["Common", "Sylvan"],
	weaponOptions : {
		baseWeapon : "unarmed strike",
        regExpSearch : /^(?=.*(satyr|\bram\b))(?=.*headbutt).*$/i,
		name : "Satyr Headbutt",
		source : [["MOT", 25]],
		damage : [1, 4, "bludgeoning"]
	},
	weaponsAdd : ["Satyr Headbutt"],
	toolProfs : [["Musical instrument", 1]],
	age : " mature and age at about the same rate as humans",
	height : " range from just under 5 feet to about 6 feet in height, with generally slender builds (4'8\" + 2d8\")",
	weight : " weigh around 145 lbs (100 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from just under 1,5 metres to about 1,8 metres in height, with generally slender builds (145 + 5d8 cm)",
	weightMetric : " weigh around 66 kg (45 + 5d8 \xD7 4d4 / 10 kg)",
	scores : [0, 1, 0, 0, 0, 2],
	skills : ["Performance", "Persuasion"],
	toolProfs : [["Musical instrument", 1]],
	trait : "Satyr (+1 Dexterity, +2 Charisma)" + desc([
		"Fey: My creature type is fey, rather than humanoid.",
		"Ram: I can use my head for unarmed strikes that deal 1d4 bludgeoning damage.",
		"Magic Resistance: I have advantage on saves against spells and other magical effects.",
		"Mirthful Leaps: Whenever I make a long or high jump, I can roll a d8 and add the number rolled to the number of feet I cover, even when making a standing jump. This extra distance costs movement as normal."
	])
};
// [dupl_start] Add centaur and minotaur race from Guildmasters' Guide to Ravnica, if not already present
if (!SourceList.G) {
	RaceList["centaur"] = {
		regExpSearch : /centaur/i,
		name : "Centaur",
		sortname : "Centaur",
		source : [["MOT", 19], ["G", 15]],
		plural : "Centaurs",
		size : 3,
		speed : {
			walk : { spd : 40, enc : 30 }
		},
		languageProfs : ["Common", "Sylvan"],
		weaponOptions : {
			baseWeapon : "unarmed strike",
			regExpSearch : /\b(hoofs?|hooves)\b/i,
			name : "Hooves",
			source : [["MOT", 19], ["G", 15]],
			damage : [1, 4, "bludgeoning"],
			description : "Use as bonus action after charge 30 ft"
		},
		weaponsAdd : ["Hooves"],
		skillstxt : "Choose one from Animal Handling, Medicine, Nature, or Survival",
		age : " mature and age at about the same rate as humans",
		height : " stand between 6 and 7 feet tall, with their equine bodies reaching about 4 feet at the withers (6'0\" + 1d10\")",
		weight : " weigh around 670 lb (600 + 1d10 \xD7 2d12 lb)",
		heightMetric : " stand around 2 metres tall, with their equine bodies reaching about 1,5 metres at the withers (183 + 3d8 cm)",
		weightMetric : " weigh around 300 kg (270 + 3d8 \xD7 4d12 / 10 kg)",
		scores : [2, 0, 0, 0, 1, 0],
		trait : "Centaur (+2 Strength +1 Wisdom)" + desc([
			"Fey: My creature type is fey, rather than humanoid.",
			"Hooves: I can use my hooves for unarmed strikes that deal 1d4 bludgeoning damage.",
			"Charge: If I move 30 ft straight toward a creature and then hit it with a melee weapon attack on the same turn, I can make a hooves attack against it as a bonus action.",
			"Equine Build: I count as one size larger for my carrying capacity and the weight I can push, drag, or lift. Because of my hooves, 1 ft of movement while climbing costs me 4 ft."
		]),
		action : [["bonus action", "Hooves (after charge)"]],
		carryingCapacity : 2
	};
	RaceList["minotaur"] = {
		regExpSearch : /minotaur/i,
		name : "Minotaur",
		sortname : "Minotaur",
		source : [["MOT", 22], ["G", 19]],
		plural : "Minotaurs",
		size : 3,
		speed : {
			walk : { spd : 30, enc : 20 }
		},
		languageProfs : ["Common", "Minotaur"],
		weaponOptions : {
			baseWeapon : "unarmed strike",
			regExpSearch : /\bhorns?\b/i,
			name : "Horns",
			source : [["MOT", 23], ["G", 19]],
			damage : [1, 6, "piercing"],
			description : "Attack as a bonus action after moving 20 ft with the Dash action"
		},
		weaponsAdd : ["Horns"],
		skillstxt : "Choose one from Intimidation or Persuasion",
		age : " reach adulthood around age 17 and live up to 150 years",
		height : " stand around 6 feet tall (5'4\" + 2d8\")",
		weight : " weigh around 300 pounds (175 + 2d8 \xD7 2d6 lb)",
		heightMetric : " stand around 175 cm tall (163 + 5d8 cm)",
		weightMetric : " weigh around 135 kg (80 + 5d8 \xD7 4d6 / 10 kg)",
		scores : [2, 0, 1, 0, 0, 0],
		abilitySave : 1,
		trait : "Minotaur (+2 Strength +1 Constitution)" + desc([
			"Horns: I can use my horns for unarmed strikes that deal 1d6 piercing damage.",
			"Goring Rush: When taking a Dash action and moving at least 20 ft, I can make a horns attack as a bonus action.",
			"Hammering Horns: As a bonus action after I hit a melee attack during my Attack action, I can shove that target with my horns, if it is up to than one size larger than me. It must make a Str save (DC 8 + Str mod + Prof bonus) or be pushed up to 10 ft away from me."
		]),
		features : {
			"goring rush" : {
				name : "Goring Rush",
				minlevel : 1,
				action : ["bonus action", " (with Dash)"]
			},
			"hammering horns" : {
				name : "Hammering Horns",
				minlevel : 1,
				action : ["bonus action", " (after hit)"]
			}
		}
	};
}; // dupl_end
// [dupl_start] Add Triton race from Volo's Guide to Monsters, if not already present
if (!RaceList["triton"]) {
	RaceList["triton"] = {
		regExpSearch : /triton/i,
		name : "Triton",
		source : [["MOT", 26], ["V", 115]],
		plural : "Triton",
		size : 3,
		speed : {
			walk : { spd : 30, enc : 20 },
			swim : { spd : 30, enc : 20 }
		},
		languageProfs : ["Common", "Primordial"],
		dmgres : ["Cold"],
		vision : [["Darkvision", 60]],
		age : " reach maturity around age 15 and can live up to 200 years",
		height : " are around 5 feet tall (4'6\" + 2d10\")",
		weight : " weigh around 150 lb (90 + 2d10 \xD7 2d4 lb)",
		heightMetric : " are around 1,6 metres tall (135 + 5d10 cm)",
		weightMetric : " weigh around 70 kg (40 + 5d10 \xD7 4d4 / 10 kg)",
		scores : [1, 0, 1, 0, 0, 1],
		trait : "Triton (+1 Strength, +1 Constitution, and +1 Charisma)\nControl Air and Water: I can cast the Fog Cloud spell. Once I reach 3rd level, I can cast the Gust of Wind spell. Once I reach 5th level, I can cast the Wall of Water spell. All three spells can be used once per long rest. Charisma is my spellcasting ability for these spells.\nEmissary of the Sea: I can communicate simple ideas to beasts that can breathe water.\nGuardians of the Depths: Adapted to even the most extreme ocean depths, I have resistance to cold damage." + (typePF ? "\n" : " ") + "Amphibious: I can breathe air and water.",
		spellcastingAbility : 6,
		features : {
			"fog cloud" : {
				name : "Control Air and Water (level 1)",
				limfeaname : "Fog Cloud",
				minlevel : 1,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Control Air and Water (1)",
					spells : ["fog cloud"],
					selection : ["fog cloud"],
					firstCol : 'oncelr'
				}
			},
			"gust of wind" : {
				name : "Control Air and Water (level 3)",
				limfeaname : "Gust of Wind",
				minlevel : 3,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Control Air and Water (3)",
					spells : ["gust of wind"],
					selection : ["gust of wind"],
					firstCol : 'oncelr'
				}
			},
			"wall of water" : {
				name : "Control Air and Water (level 5)",
				limfeaname : "Wall of Water",
				minlevel : 5,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Control Air and Water (5)",
					spells : ["wall of water"],
					selection : ["wall of water"],
					firstCol : 'oncelr'
				}
			}
		}
	};
}; // dupl_end
// [dupl_start] Add Wall of Water spell, if not already present
if (!SpellsList["wall of water"]) {
	SpellsList["wall of water"] = {
		name : "Wall of Water",
		classes : ["druid", "sorcerer", "wizard"],
		source : [["X", 170], ["E", 23], ["V", 116], ["MOT", 27]],
		level : 3,
		school : "Evoc",
		time : "1 a",
		range : "60 ft",
		components : "V,S,M",
		compMaterial : "A drop of water",
		duration : "Conc, 10 min",
		description : "30\xD71\xD710ft (l\xD7w\xD7h) or 20-ft rad 20-ft high; dif. ter.; range wea dis.; Fire dmg half; Cold dmg freezes",
		descriptionMetric : "9\xD70,3\xD73m (l\xD7w\xD7h) or 6-m rad 6-m high; dif. ter.; ranged wea dis.; Fire dmg half; Cold dmg freezes",
		descriptionFull : "You conjure up a wall of water on the ground at a point you can see within range. You can make the wall up to 30 feet long, 10 feet high, and 1 foot thick, or you can make a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall vanishes when the spell ends. The wall's space is difficult terrain." + "\n   " + "Any ranged weapon attack that enters the wall's space has disadvantage on the attack roll, and fire damage is halved if the fire effect passes through the wall to reach its target. Spells that deal cold damage that pass through the wall cause the area of the wall they pass through to freeze solid (at least a 5-foot square section is frozen). Each 5-foot-square frozen section has AC 5 and 15 hit points. Reducing a frozen section to 0 hit points destroys it. When a section is destroyed, the wall's water doesn't fill it."
	};
}; // dupl_end

// Subclasses (but add TCoE as main source, because it is more likely to be available at a table)
AddSubClass("bard", "college of eloquence", { // includes contributions by /u/Holynight6
	regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*eloquence).*$/i,
	subname : "College of Eloquence",
	source : [["T", 29], ["MOT", 28]],
	features : {
		"subclassfeature3" : {
			name : "Silver Tongue",
			source : [["T", 30], ["MOT", 28]],
			minlevel : 3,
			description : "\n   When I make a Persuasion or Deception check, I can treat a roll of 9 or lower as a 10"
		},
		"subclassfeature3.1" : {
			name : "Unsettling Words",
			source : [["T", 30], ["MOT", 28]],
			minlevel : 3,
			description : desc([
				"As a bonus action, I expend a Bardic Inspiration use & choose a target I can see in 60 ft",
				"It subtracts my inspiration die from the next save it makes before my next turn starts"
			]),
			action : [["bonus action", ""]]
		},
		"subclassfeature6" : {
			name : "Unfailing Inspiration",
			source : [["T", 30], ["MOT", 28]],
			minlevel : 6,
			description : "\n   When a creature adds my Bardic Inspiration die to a roll but fails, they can keep the die"
		},
		"subclassfeature6.1" : {
			name : "Universal Speech",
			source : [["T", 30], ["MOT", 28]],
			minlevel : 6,
			description : desc([
				"As an action, I can choose up to my Charisma modifier (min 1) creatures within 60 ft",
				"Those creatures magically understand any language I speak for an hour",
				"I can do this once per long rest, or by expending a 1st-level or higher spell slot (SS 1+)"
			]),
			recovery : "long rest",
			usages : 1,
			altResource : "SS 1+",
			action : [["action", ""]]
		},
		"subclassfeature14" : {
			name : "Infectious Inspiration",
			source : [["T", 30], ["MOT", 28]],
			minlevel : 14,
			description : desc([
				"As a reaction when a creature uses my inspiration die and succeeds, I can inspire another",
				"I give a creature within 60 ft that can hear me an inspiration die without expending any"
			]),
			action : [["reaction", ""]],
			usages : "Charisma mod per ",
			usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
			recovery : "long rest"
		}
	}
});
AddSubClass("paladin", "oath of glory", { // includes contributions by BraabHimself
	regExpSearch : /^(((?=.*glory)(((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper))))))).*$/i,
	subname : "Oath of Glory",
	source : [["T", 53], ["MOT", 29]],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Peerless Athlete",
			source : [["T", 54], ["MOT", 29]],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can get adv. on Str (Athletics) \u0026 Dex (Acrobatics) checks for 10 min",
				"In that time, I also add +10 ft to jumps, and double what I can carry, push, drag, \u0026 lift"
			]),
			action : [["bonus action", ""]],
			spellcastingExtra : ["guiding bolt", "heroism", "enhance ability", "magic weapon", "haste", "protection from energy", "compulsion", "freedom of movement", "commune", "flame strike"]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Inspiring Smite",
			source : [["T", 54], ["MOT", 29]],
			minlevel : 3,
			description : desc([
				"As a bonus action after dealing damage with Divine Strike, I can grant temporary HP",
				"I distribute the temporary HP how I choose across creatures within 30 ft, including me"
			]),
			additional : levels.map(function (n) {
				return n < 3 ? "" : "2d8 + " + n + " temporary HP";
			}),
			action : [["bonus action", ""]]
		},
		"subclassfeature7" : {
			name : "Aura of Alacrity",
			source : [["T", 54], ["MOT", 29]],
			minlevel : 7,
			description : "\n   If I'm not incapacitated, allies starting their turn in range gain bonus speed for that turn",
			speed : { walk : { spd : "+10", enc : "+10" } },
			additional : levels.map(function (n) {
				return n < 7 ? "" : (n < 18 ? 5 : 10) + "-foot aura; +10 ft walking speed";
			})
		},
		"subclassfeature15" : {
			name : "Glorious Defense",
			source : [["T", 54], ["MOT", 29]],
			minlevel : 15,
			description : desc([
				"As a reaction when I or another in 10 ft is hit with an attack roll, I can grant bonus AC",
				"I must be able to see the attacker; I add my Cha mod (min 1) to the AC for that attack",
				"If it misses, I can do a weapon attack vs. the attacker, if in reach, as part of this reaction"
			]),
			usages : "Charisma modifier per ",
			usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
			recovery : "long rest",
			action : [["reaction", ""]]
		},
		"subclassfeature20" : {
			name : "Living Legend",
			source : [["T", 54], ["MOT", 29]],
			minlevel : 20,
			description : desc([
				"As a bonus action, I can empower myself with legends, gaining the following for 1 min:",
				" \u2022 My otherworldly presence grants me advantage on Charisma checks",
				" \u2022 Once on each of my turns when I miss with a weapon attack, I can have it hit instead",
				" \u2022 As a reaction when I fail a saving throw, I can reroll it, but must use the new roll",
				"I can do this once per long rest, or by expending a 5th-level or higher spell slot (SS 5+)"
			]),
			recovery : "long rest",
			usages : 1,
			altResource : "SS 5+",
			action : [["bonus action", ""]]
		}
	}
});

// Background
BackgroundList["athlete"] = { // includes contributions by Smashman
	regExpSearch : /athlete/i,
	name : "Athlete",
	source : [["MOT", 31]],
	skills : ["Acrobatics", "Athletics"],
	languageProfs : [1],
	toolProfs : ["Vehicles (land)"],
	gold : 10,
	equipleft : [
        ["A bronze discus or leather ball", "", ""],
    ],
	equipright : [
        ["Traveler's clothes", "", 4],
        ["A lucky charm or past trophy", "", ""],
        ["Belt pouch (with coins)", "", 1]
    ],
	feature : "Echoes of Victory",
	trait : [
        "I feel most at peace during physical exertion, be it exercise or battle.",
        "I don't like to sit idle.",
        "I have a daily exercise routine that I refuse to break.",
        "Obstacles exist to be overcome.",
        "When I see others struggling, I offer to help.",
        "I love to trade banter and gibes.",
        "Anything worth doing is worth doing best.",
        "I get irritated if people praise someone else and not me.",
    ],
	ideal : [
        ["Competition", "Competition: I strive to test myself in all things. (Chaotic)"],
        ["Triumph", "Triumph: The best part of winning is seeing my rivals brought low. (Evil)"],
        ["Camaraderie", "Camaraderie: The strongest bonds are forged through struggle. (Good)"],
        ["People", "People: I strive to inspire my spectators. (Neutral)"],
        ["Tradition", "Tradition: Every game has rules, and the playing field must be level. (Lawful)"],
        ["Growth", "Growth: Lessons hide in victory and defeat. (Any)"],
    ],
	bond : [
        "My teammates are my family.",
        "I will overcome a rival and prove myself their better.",
        "My mistake got someone hurt. I'll never make that mistake again.",
        "I will be the best for the honor and glory of my home.",
        "The person who trained me is the most important person in my world.",
        "I strive to live up to a specific hero's example.",
    ],
	flaw : [
        "I indulge in a habit that threatens my reputation or my health.",
        "I'll do absolutely anything to win.",
        "I ignore anyone who doesn't compete and anyone who loses to me.",
        "I have lingering pain from old injuries.",
        "Any defeat or failure on my part is because my opponent cheated.",
        "I must be the captain of any group I join.",
    ]
};
BackgroundFeatureList["echoes of victory"] = { // includes contributions by Smashman
    description: "I have attracted admiration among spectators, fellow athletes, and trainers in the region that hosted my past athletic victories. When visiting any settlement within 100 miles of where I grew up, there is a 50 percent change that I can find someone there who admires me and is willing to provide information or temporary shelter.",
    source: [["MOT", 31]]
};

// Creature: possible familiar
CreatureList["anvilwrought raptor"] = {
	name : "Anvilwrought Raptor",
	source : [["MOT", 209]],
	size : 5,
	type : "Construct",
	companion : "familiar_not_al",
	alignment : "Unaligned",
	ac : 14,
	hp : 18,
	hd : [4, 4],
	speed : "10 ft, fly 60 ft",
	scores : [12, 16, 14, 3, 14, 1],
	skills : {
		"perception" : 4
	},
	damage_immunities : "fire, poison",
	condition_immunities : "charmed, exhaustion, paralyzed, petrified, poisoned",
	senses : "Darkvision 120 ft; Adv. on Wis (Perception) checks using sight",
	passivePerception : 14,
	languages : "understands one language of its creator but can't speak",
	challengeRating : "1/2",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
		name : "Beak",
		ability : 2,
		damage : [1, 4, "piercing"],
		range : "Melee (5 ft)",
		description : "Two beak attacks as one Attack action"
	}],
	traits : [{
		name : "Keen Sight",
		description : "The raptor has advantage on Wisdom (Perception) checks that rely on sight."
	}, {
		name : "Recorded Mimicry",
		description : "The raptor can mimic any sound, including voices, it has heard in the last 24 hours. A creature that hears the sounds can tell they are imitations with a successful DC 12 Wisdom (Insight) check."
	}],
	actions : [{
		name : "Multiattack",
		description : "The raptor makes two attacks with its beak."
	}],
	variant : [{
		name : "Variant: Familiar",
		description : "The anvilwrought can serve another creature as a familiar, forming a magical, telepathic bond with its willing master. While the two are bonded, the master can sense what the anvilwrought senses, as long as they are within 1 mile of each other."
	}]
};
