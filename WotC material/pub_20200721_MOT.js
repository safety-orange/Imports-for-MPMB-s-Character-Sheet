var iFileName = "pub_20200721_MOT.js";
RequiredSheetVersion("13.1.14");
// This file adds the content from Mythic Odysseys of Theros to MPMB's Character Record Sheet

// Define the source
SourceList.MOT = {
	name : "Mythic Odysseys of Theros",
	abbreviation : "MOT",
	group : "Campaign Sourcebooks",
	campaignSetting : "Magic: The Gathering",
	url : "https://dnd.wizards.com/products/mythic-odysseys-theros",
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
		damage : [1, 4, "slashing"],
		selectNow : true
	}],
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
	weaponOptions : [{
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*(satyr|\bram\b))(?=.*headbutt).*$/i,
		name : "Satyr Headbutt",
		source : [["MOT", 25]],
		damage : [1, 4, "bludgeoning"],
		selectNow : true
	}],
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
		weaponOptions : [{
			baseWeapon : "unarmed strike",
			regExpSearch : /\b(hoofs?|hooves)\b/i,
			name : "Hooves",
			source : [["MOT", 19], ["G", 15]],
			damage : [1, 4, "bludgeoning"],
			description : "Use as bonus action after charge 30 ft",
			selectNow : true
		}],
		action : [["bonus action", "Hooves (after charge)"]],
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
		], "\n \u2022 "),
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
		weaponOptions : [{
			baseWeapon : "unarmed strike",
			regExpSearch : /\bhorns?\b/i,
			name : "Horns",
			source : [["MOT", 23], ["G", 19]],
			damage : [1, 6, "piercing"],
			description : "Attack as a bonus action after moving 20 ft with the Dash action",
			selectNow : true
		}],
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
			"Hammering Horns: As a bonus action after I hit a melee attack during my Attack action, I can shove that target with my horns, if it is up to than one size larger than me. It must make a Str save (DC 8 + Str mod + Prof Bonus) or be pushed up to 10 ft away from me."
		]),
		features : {
			"goring rush" : {
				name : "Goring Rush",
				minlevel : 1,
				action : [["bonus action", " (with Dash)"]]
			},
			"hammering horns" : {
				name : "Hammering Horns",
				minlevel : 1,
				action : [["bonus action", " (after hit)"]]
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
		languageProfs : ["Common", "Primordial", "Emissary of the Sea"],
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
				spellcastingBonus : [{
					name : "Control Air and Water (1)",
					spells : ["fog cloud"],
					selection : ["fog cloud"],
					firstCol : 'oncelr'
				}]
			},
			"gust of wind" : {
				name : "Control Air and Water (level 3)",
				limfeaname : "Gust of Wind",
				minlevel : 3,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : [{
					name : "Control Air and Water (3)",
					spells : ["gust of wind"],
					selection : ["gust of wind"],
					firstCol : 'oncelr'
				}]
			},
			"wall of water" : {
				name : "Control Air and Water (level 5)",
				limfeaname : "Wall of Water",
				minlevel : 5,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : [{
					name : "Control Air and Water (5)",
					spells : ["wall of water"],
					selection : ["wall of water"],
					firstCol : 'oncelr'
				}]
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
				"As a bonus action after dealing damage with Divine Smite, I can grant temporary HP",
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
	description : "I have attracted admiration among spectators, fellow athletes, and trainers in the region that hosted my past athletic victories. When visiting any settlement within 100 miles of where I grew up, there is a 50 percent change that I can find someone there who admires me and is willing to provide information or temporary shelter.",
	source : [["MOT", 31]]
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

// Magic Items (each contain contributions by BraabHimself)
MagicItemsList["flying chariot"] = {
	name : "Flying Chariot",
	source : [["MOT", 196]],
	type : "wondrous item",
	rarity : "rare",
	notLegalAL : true,
	description : "I gain +1 AC while riding this chariot, as do any passengers and the creatures pulling it. If this chariot is pulled by one or more flying creatures, they too can fly.\n(The AC bonus is not added to the automation, as it is too situational.)",
	descriptionFull : "The chariot's riders and creatures pulling the chariot gain a + 1 bonus to their AC."+
	"\n   If this magic chariot is pulled by one or more flying creatures, it too can fly.",
	weight : 100
};
MagicItemsList["helm of the gods"] = {
	name : "Helm of the Gods",
	source : [["MOT", 196]],
	type : "wondrous item",
	rarity : "rare",
	notLegalAL : true,
	attunement : true,
	description : "While wearing this helm, I know the location of all celestials and fiends within 30 ft, provided they aren't behind total cover. The helm has 3 charges, regaining 1d3 charges at dawn. I can use 1 charge to cast the spell stored in the helm (DC 13). After I finish a long rest, I can pray to a god to change the stored spell.",
	descriptionLong : "While wearing this helm, I know the location of all celestials/fiends within 30 ft not behind total cover. The helm has 3 charges, regaining 1d3 at dawn. I can use 1 charge to cast the spell stored in it (DC 13). After a long rest, I can pray to a god to change the stored spell: Athreos: Protection from Evil/Good, Ephara: Sanctuary, Erebos: Inflict Wounds, Heliod: Guiding Bolt, Iroas: Heroism, Karametra: Goodberry, Keranos: Thunderous Smite, Klothys: Entangle, Kruphix: Dissonant Whispers, Mogis: Hellish Rebuke, Nylea: Faerie Fire, Pharika: Lesser Restoration, Phenax: Charm Person, Purphoros: Searing Smite, Thassa: Identify",
	descriptionFull : "While wearing this helm, you know whether there is a celestial or fiend within 30 feet of you, as well as where the creature is located, provided the creature isn't behind total cover."+
	"\n   Whenever you finish a long rest while wearing the helm, you can pray to one of the gods listed on the Helm of the Gods table and store the listed spell in the helm, replacing any spell that is already stored there. The save DC for the spell is 13."+
	"\n   The helm has 3 charges. To cast a spell from the helm, you must expend 1 charge, and the helm regains 1d3 charges daily at dawn."+
	toUni("\n God\t\tSpell")+
	"\n Athreos\t\tprotection from evil and good"+
	"\n Ephara\t\tsanctuary"+
	"\n Erebos\t\tinflict wounds"+
	"\n Heliod\t\tguiding bolt"+
	"\n Iroas\t\theroism"+
	"\n Karametra\tgoodberry"+
	"\n Keranos\t\tthunderous smite"+
	"\n Klothys\t\tentagle"+
	"\n Kruphix\t\tdissonant whispers"+
	"\n Mogis\t\thellish rebuke"+
	"\n Nylea\t\tfaerie fire"+
	"\n Pharika\t\tlesser restoration"+
	"\n Phenax\t\tcharm person"+
	"\n Purphoros\tsearing smite"+
	"\n Thassa\t\tidentify",
	usages : 3,
	recovery : "dawn",
	additional : "regains 1d3",
	fixedDC : 13,
	spellFirstColTitle : "Ch",
	spellcastingBonus : [{
		name : "Athreos",
		spells : ["protection from evil and good"],
		selection : ["protection from evil and good"],
		firstCol : 1
	}, {
		name : "Ephara",
		spells : ["sanctuary"],
		selection : ["sanctuary"],
		firstCol : 1
	}, {
		name : "Erebos",
		spells : ["inflict wounds"],
		selection : ["inflict wounds"],
		firstCol : 1
	}, {
		name : "Heliod",
		spells : ["guiding bolt"],
		selection : ["guiding bolt"],
		firstCol : 1
	}, {
		name : "Iroas",
		spells : ["heroism"],
		selection : ["heroism"],
		firstCol : 1
	}, {
		name : "Karametra",
		spells : ["goodberry"],
		selection : ["goodberry"],
		firstCol : 1
	}, {
		name : "Keranos",
		spells : ["thunderous smite"],
		selection : ["thunderous smite"],
		firstCol : 1
	}, {
		name : "Klothys",
		spells : ["entangle"],
		selection : ["entangle"],
		firstCol : 1
	}, {
		name : "Kruphix",
		spells : ["dissonant whispers"],
		selection : ["dissonant whispers"],
		firstCol : 1
	}, {
		name : "Mogis",
		spells : ["hellish rebuke"],
		selection : ["hellish rebuke"],
		firstCol : 1
	}, {
		name : "Nylea",
		spells : ["faerie fire"],
		selection : ["faerie fire"],
		firstCol : 1
	}, {
		name : "Pharika",
		spells : ["lesser restoration"],
		selection : ["lesser restoration"],
		firstCol : 1
	}, {
		name : "Phenax",
		spells : ["charm person"],
		selection : ["charm person"],
		firstCol : 1
	}, {
		name : "Purphoros",
		spells : ["searing smite"],
		selection : ["searing smite"],
		firstCol : 1
	}, {
		name : "Thassa",
		spells : ["identify"],
		selection : ["identify"],
		firstCol : 1
	}],
	spellChanges : {
		"protection from evil and good" : {
			changes : "I can cast this spell if I prayed to Athreos after a long rest and expend 1 charge."
		},
		"sanctuary" : {
			changes : "I can cast this spell if I prayed to Ephara after a long rest and expend 1 charge."
		},
		"inflict wounds" : {
			changes : "I can cast this spell if I prayed to Erebos after a long rest and expend 1 charge."
		},
		"guiding bolt" : {
			changes : "I can cast this spell if I prayed to Heliod after a long rest and expend 1 charge."
		},
		"heroism" : {
			changes : "I can cast this spell if I prayed to Iroas after a long rest and expend 1 charge."
		},
		"goodberry" : {
			changes : "I can cast this spell if I prayed to Karametra after a long rest and expend 1 charge."
		},
		"thunderous smite" : {
			changes : "I can cast this spell if I prayed to Keranos after a long rest and expend 1 charge."
		},
		"entangle" : {
			changes : "I can cast this spell if I prayed to Klothys after a long rest and expend 1 charge."
		},
		"dissonant whispers" : {
			changes : "I can cast this spell if I prayed to Kruphix after a long rest and expend 1 charge."
		},
		"hellish rebuke" : {
			changes : "I can cast this spell if I prayed to Mogis after a long rest and expend 1 charge."
		},
		"faerie fire" : {
			changes : "I can cast this spell if I prayed to Nylea after a long rest and expend 1 charge."
		},
		"lesser restoration" : {
			changes : "I can cast this spell if I prayed to Pharika after a long rest and expend 1 charge."
		},
		"charm person" : {
			changes : "I can cast this spell if I prayed to Phenax after a long rest and expend 1 charge."
		},
		"searing smite" : {
			changes : "I can cast this spell if I prayed to Purphoros after a long rest and expend 1 charge."
		},
		"identify" : {
			ritual : false,
			changes : "I can cast this spell if I prayed to Thassa after a long rest and expend 1 charge."
		}
	}
};
MagicItemsList["molten bronze skin"] = {
	name : "Molten Bronze Skin",
	source : [["MOT", 197]],
	type : "armor (breastplate, half plate, or plate)",
	rarity : "rare",
	notLegalAL : true,
	attunement : true,
	description : "This armor appears as a jug of molten bronze. When I attune to it, it adheres and contours to my skin. It can be worn under clothes and doesn't impede bodily functions. This armor can't be removed unless I choose to do so. It grants me resistance to fire damage, and doesn't impose disadv. on Dex (Stealth) checks.",
	descriptionFull : "This magical armor appears as a jug of molten bronze. When you attune to it, the bronze adheres and contours to your skin. The armor can be worn under normal clothes, but it doesn't impede bodily functions. Once you put it on, it can't be removed unless you choose to do so."+
	"\n   While wearing the armor, you have resistance to fire damage. The armor also doesn't impose disadvantage on Dexterity (Stealth) checks.",
	dmgres : ["Fire"],
	choices : ["Breastplate", "Half Plate", "Plate"],
	choicesNotInMenu : true,
	"breastplate" : {
		description : "This breastplate appears as a jug of molten bronze. When I attune to it, it adheres and contours to my skin. It can be worn under clothes and doesn't impede bodily functions. It can't be removed unless I choose to do so, grants me resistance to fire damage, and doesn't impose disadv. on Dex (Stealth) checks.",
		armorOptions : [{
			regExpSearch : /^(?=.*molten)(?=.*bronze)(?=.*skin).*$/i,
			name : "Molten Bronze Skin",
			source : [["MOT", 197]],
			type : "medium",
			ac : 14,
			weight : 20,
			selectNow : true
		}]
	},
	"half plate" : {
		description : "This half plate armor appears as a jug of molten bronze. When I attune to it, it adheres and contours to my skin. It can be worn under clothes and doesn't impede bodily functions. It can't be removed unless I choose to do so, grants me resistance to fire damage, and doesn't impose disadv. on Dex (Stealth) checks.",
		armorOptions : [{
			regExpSearch : /^(?=.*molten)(?=.*bronze)(?=.*skin).*$/i,
			name : "Molten Bronze Skin",
			source : [["MOT", 197]],
			type : "medium",
			ac : 15,
			weight : 40,
			selectNow : true
		}]
	},
	"plate" : {
		description : "This plate armor appears as a jug of molten bronze. When I attune to it, it adheres and contours to my skin. It can be worn under clothes and doesn't impede bodily functions. It can't be removed unless I choose to do so, grants me resistance to fire damage, and doesn't impose disadv. on Dex (Stealth) checks.",
		armorOptions : [{
			regExpSearch : /^(?=.*molten)(?=.*bronze)(?=.*skin).*$/i,
			name : "Molten Bronze Skin",
			source : [["MOT", 197]],
			type : "heavy",
			ac : 18,
			weight : 65,
			strReq : 15,
			selectNow : true
		}]
	}
};
MagicItemsList["potion of aqueous form"] = {
	name : "Potion of Aqueous Form",
	source : [["MOT", 197]],
	type : "potion",
	rarity : "rare",
	notLegalAL : true,
	description : "Once as an action, I can drink this potion or administer it to another. The consumer of the potion turns into a pool of water and gains several benefits and limitations while in this form. They revert back to their true form after 10 minutes, if they become incapacitated, or if they die. See Notes page.",
	descriptionFull : "When you drink this potion, you transform into a pool of water. You return to your true form after 10 minutes or if you are incapacitated or die."+
	"\n   You're under the following effects while in this form:"+
	"\n\n" + toUni("Liquid Movement") + ". You have a swimming speed of 30 feet. You can move over or through other liquids. You can enter and occupy the space of another creature. You can rise up to your normal height, and you can pass through even Tiny openings. You extinguish nonmagical flames in any space you enter."+
	"\n\n" + toUni("Watery Resilience") + ". You have resistance to nonmagical damage. You also have advantage on Strength, Dexterity, and Constitution saving throws."+
	"\n\n" + toUni("Limitations") + ". You can't talk, attack, cast spells, or activate magic items. Any objects you were carrying or wearing meld into your new form and are inaccessible, though you continue to be affected by anything you're wearing, such as armor.",
	toNotesPage : [{
		name : "Effects",
		popupName : "Potion of Aqueous Form Effects",
		note : [
			"The consumer of the potion is under the following effects:",
			"\u2022 They have a swimming speed of 30 ft",
			"\u2022 They can move over or through other liquids",
			"\u2022 They can enter and occupy the space of another creature",
			"\u2022 They can rise up to their normal height and pass through tiny openings",
			"\u2022 They extinguish nonmagical flames in any space they enter",
			"\u2022 They have resistance to nonmagical damage",
			"\u2022 They have advantage on Strength, Dexterity, and Constitution saving throws",
			"\u2022 They can't talk, attack, cast spells, or activate magic items",
			"\u2022 Their equipment merges into their new form, but still gain their benefits"
		]
	}],
	weight : 0.5
};
var MOT_PyxisOfPandemoniumFullDescription = [
	"A creature that touches this ornate wooden vessel for 1 minute gains the benefits of a short rest. That creature also gains the effects of the bless spell until the creature finishes a short or long rest. The creature can't gain these benefits again until it finishes a long rest.",
	"If the vessel is opened, roll on the Pyxis of Pandemonium table to determine what happens. Any spells cast by the vessel have a spell save DC of 17. One minute after the vessel is opened, it disappears. It reappears, sealed, in a random location on the same plane of existence 24 hours later.",
	">>Curse<<. Any creature that gains the benefit of a short rest from the vessel hears cloying telepathic whispers emanating it. That creature must make a DC 17 Wisdom saving throw. On a failed save, the creature is charmed by the vessel for 1 hour. The charmed creature does everything it can to open the vessel as soon as possible. On a successful save, the creature is immune to the vessel's whispers for 24 hours.\n",
	toUni("d8\tCalamity"),
	" 1\t>>Androphagia<<. Each creature within 60 feet of the vessel must succeed on a DC 17 Wisdom saving throw or go berserk for l minute. The berserk creature must begin its turn using the Attack action to make one melee or ranged attack (its choice) against the creature nearest to it. The berserk creature can repeat the save at the end of its turn, ending the effect on itself on a success.",
	" 2\t>>Bile Blight<<. The vessel casts the harm spell on each creature within 30 feet of it.",
	" 3\t>>Flood<<. The vessel casts the tsunami spell at a point of the DM's choice within 120 feet of it.",
	" 4\t>>Medusa's Gaze<<. The vessel casts the flesh to stone spell on each creature within 30 feet of it.",
	" 5\t>>Labyrinth<<. The vessel casts the maze spell on each creature within 30 feet of it.",
	" 6\t>>Nightmare<<. Tendrils of shadow seep from the vessel and form into 1d4 shadow demons (see the Monster Manual for their stat block), which appear in unoccupied spaces within 30 feet of it and are hostile.",
	" 7\t>>Swarming Insects<<. The vessel casts the insect plague spell, centered on itself and with a radius of 30 feet.",
	" 8\t>>Unbridled Revel<<. The vessel casts the Otto's irresistible dance spell on each creature within 30 feet of it."
];
MagicItemsList["pyxis of pandemonium"] = {
	name : "Pyxis of Pandemonium",
	source : [["MOT", 197]],
	type : "wondrous item",
	rarity : "legendary",
	notLegalAL : true,
	description : "Once per long rest, I gain the benefits of a short rest by touching this ornate vessel for 1 minute. I also gain the benefit of Bless until I finish my next rest. After benefiting from this vessel, I have to make a DC 17 Wis save or become charmed by the vessel for 1 hour. If charmed, I must do everything to open it. See Notes.",
	descriptionLong : "Once per long rest, I can touch this ornate wooden vessel for 1 minute to gain the benefits of a short rest. I then also gain the benefit of the Bless spell until I finish my next rest. After I gain the benefits of a short rest from this vessel, I must make a DC 17 Wisdom save or become charmed by it for 1 hour. On a success, I am immune to its charm for 24 hours. If charmed, I will do everything I can to open the vessel as soon as possible. Once opened, the vessel causes a random effect to occur, then it disappears after 1 minute and reappears, sealed, in random location on the same plane. See Notes.",
	descriptionFull : MOT_PyxisOfPandemoniumFullDescription.join("\n   ").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
	toNotesPage : [{
		name : "Effects",
		source : [["MOT", 197]],
		note : desc(MOT_PyxisOfPandemoniumFullDescription).replace(/>>(.*?)<</g, function(a, match) { return match.toUpperCase(); }).replace(/\bf(oo|ee)t\b/ig, "ft")
	}],
	usages : 1,
	recovery : "long rest"
};
MagicItemsList["siren song lyre"] = {
	name : "Siren Song Lyre",
	source : [["MOT", 198]],
	type : "wondrous item (instrument)",
	rarity : "rare",
	notLegalAL : true,
	attunement : true,
	description : "As an action, I can play this lyre and cast one of the following spells from it: Animal Friendship, Charm Person, Enthrall, or Suggestion. The DC for these spells is 13. Once I cast a spell, I can't use the lyre to cast that spell again until the next dawn.",
	descriptionFull : "You can use an action to play this lyre and cast one of the following spells from it: animal friendship, charm person, enthrall, suggestion. If the spell requires a saving throw, the spell save DC is 13.\n   Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn.",
	weight : 2,
	fixedDC : 13,
	extraLimitedFeatures : [{
		name : "Siren's Song Lyre [Animal Friendship]",
		usages : 1,
		recovery : "dawn"
	}, {
		name : "Siren's Song Lyre [Charm Person]",
		usages : 1,
		recovery : "dawn"
	}, {
		name : "Siren's Song Lyre [Enthrall]",
		usages : 1,
		recovery : "dawn"
	}, {
		name : "Siren's Song Lyre [Suggestion]",
		usages : 1,
		recovery : "dawn"
	}],
	spellcastingBonus : [{
		name : "Once per dawn",
		spells : ["animal friendship", "charm person", "enthrall", "suggestion"],
		selection : ["animal friendship", "charm person", "enthrall", "suggestion"],
		firstCol : "oncelr",
		times : 4
	}]
};
var MOT_SlingBulletsOfAlthemoneFullDescription = [
	"The sling bullets come in a pouch, which contains 1d4 + 4 bullets. Roll on the Magic Sling Bullets table for each bullet to determine its magical property.",
	"You have a +2 bonus to attack and damage rolls made with each of these bullets. If a bullet misses its target, the bullet teleports back into the pouch. Once a bullet hits a target, the bullet loses its magic.\n",
	">>d4  Bullet<<",
	"1   >>Banishment<<. A creature that takes damage from this bullet must succeed on a DC 15 Charisma saving throw or be banished as though affected by the banishment spell.",
	"2   >>Fulguration<<. On a hit, this bullet deals an extra 2d8 lightning damage to its target. All other creatures within 10 feet of the target must each succeed on a DC 15 Constitution saving throw or take 1d8 thunder damage.",
	"3   >>Stunning<<. On a hit, this bullet deals an extra ldlO force damage, and the target is stunned until the end of your next turn.",
	"4   >>Tracking<<. A creature that takes damage from this bullet is marked with a glowing rune where the bullet hit. The mark lasts 24 hours. While the creature is marked, you always know the direction to it.",
];
MagicItemsList["sling bullets of althemone"] = {
	name : "Sling Bullets of Althemone",
	source : [["MOT", 198]],
	type : "weapon (sling bullet)",
	rarity : "very rare",
	notLegalAL : true,
	description : "These bullets come in a pouch containing 1d4 + 4 bullets. Attacks made with these sling bullets add +2 to hit and damage. If a bullet misses, it teleports back to its pouch. On a hit, the bullet's effect happens and the bullet loses its magic. I roll on the table to determine each bullet's magical effect, see Notes.",
	descriptionFull : MOT_SlingBulletsOfAlthemoneFullDescription.join("\n   ").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.baseWeaponName == "sling" && (/althemone/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description += (fields.Description ? '; ' : '') + 'Bullets return on a miss, special effect on hit';
				}
			},
			'If I include the word "Althemone" in the name of a sling, it will be treated as using the Sling Bullets of Althemone. It has +2 to hit and damage, bullets return on a miss, and cause a magical effect on a hit.'
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.baseWeaponName == "sling" && (/althemone/i).test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[1] + 2;
				}
			}
		]
	},
	toNotesPage : [{
		name : "Magic Sling Bullets Table",
		source : [["MOT", 198]],
		note : desc(MOT_SlingBulletsOfAlthemoneFullDescription.slice(2)).replace(/>>(.*?)<</g, function(a, match) { return match.toUpperCase(); }).replace(/\bf(oo|ee)t\b/ig, "ft").replace(/\byou\b/ig, "I").replace(/your/g, "my")
	}],
	weight : 1.5 // assuming an averyage of 6,5 bullets (0.4875) and a pouch (1)
};
MagicItemsList["two-birds sling"] = {
	name : "Two-Birds Sling",
	source : [["MOT", 198]],
	type : "weapon (sling)",
	rarity : "rare",
	notLegalAL : true,
	description : "This sling adds +1 to hit and damage rolls made with it. On a hit, I can cause the ammunition to ricochet towards a second target within 10 ft of the first, rolling a ranged attack against the second target as well.",
	descriptionFull : "You have a +l bonus to attack and damage rolls made with this weapon."+
	"\n   When you make a ranged attack with this sling and hit a target, you can cause the ammunition to ricochet toward a second target within 10 feet of the first, and then make a ranged attack against the second target.",
	weaponOptions : [{
		baseWeapon : "sling",
		regExpSearch : /^(?=.*two-birds)(?=.*sling).*$/i,
		name : "Two-Birds Sling",
		source : [["MOT", 198]],
		description : "Ammunition; On hit ricochet to another in 10 ft",
		modifiers : [1, 1],
		selectNow : true
	}]
};
