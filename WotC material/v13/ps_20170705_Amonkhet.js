var iFileName = "ps_20170705_Amonkhet.js";
RequiredSheetVersion(13);
// This file adds all material from the Plane Shift: Amonkhet article (https://dnd.wizards.com/articles/features/plane-shift-amonkhet) to MPMB's Character Record Sheet
// This code contains contributions by /u/MILKB0T and /u/juju2569

// Define the source
SourceList["PS:A"] = {
	name : "Plane Shift: Amonkhet",
	abbreviation : "PS:A",
	group : "Plane Shift",
	url : "https://media.wizards.com/2017/downloads/magic/plane-shift_amonkhet.pdf",
	date : "2017/07/05"
};

// Adds 2 backgrounds and 3 background features
BackgroundList["initiate"] = {
	regExpSearch : /initiate/i,
	name : "Initiate",
	source : ["PS:A", 8],
	skills : ["Athletics", "Intimidation"],
	gold : 15,
	equipright : [
		["Common clothes", "", 3],
		["Belt pouch (with coins)", "", 1]
	],
	equipleft : [
		["Simple puzzle box", "", 1],
		["Scroll with divine teachings", "", ""],
		["Gaming set", "", ""],
		["Earned cartouches", "", ""]
	],
	feature : "Trials of the Five Gods",
	trait : [
		"I always have a joke on hand when the mood gets too serious.",
		"I use sarcasm and insults to keep a distance between myself and my crop-mates, because I don't want to get attached to them.",
		"I'll settle for nothing less than perfection\u2014in myself, in my cropmates, in everything.",
		"I'm so focused on the glorious afterlife that nothing in this life can shake my calm resolve.",
		"I enjoy using my skills to help those who lack those same skills.",
		"I train hard so that I can play hard at the end of the day. I fully expect to play even harder in the glorious afterlife, but I'm not in a hurry to get there.",
		"I'm perfectly happy letting others pick up the slack for me while I take it easy.",
		"I'm constantly sizing up everyone around me, thinking about what kind of opponent they'll be in the final trial."
	],
	ideal : [
		["Solidarity",
			"Solidarity: The thing that matters most of all is that we're there for each other. (Lawful)"
		],
		["Knowledge",
			"Knowledge: The world is a puzzle\u2014a mystery waiting to be solved. (Neutral)"
		],
		["Strength",
			"Strength: All that matters to me is my own perfection. Let everyone else seek that perfection in their own way. (Any)"
		],
		["Ambition",
			"Ambition: I'm going to prove that I deserve only the best\u2014of everything. (Evil)"
		],
		["Zeal",
			"Zeal: Anything worth doing is worth throwing my whole self into. (Any)"
		],
		["Redemption",
			"Redemption: I will train all the harder to make up for the doubt I entertained when I was younger. (Any)"
		]
	],
	bond : [
		"One of my crop-mates is my dearest friend, and I hope we will face each other in the final trial.",
		"I am in love with a vizier.",
		"I am particularly drawn to one of the five gods, and I want nothing more than to win that god's particular favor.",
		"I am more devoted to Naktamun and its people than I am to any of the ideals of the gods.",
		"My weapon was a gift from a beloved trainer who died in an accident.",
		"I carry a memento of my time as an acolyte, and I treasure it above all other things."
	],
	flaw : [
		"I'm easily distracted by an attractive person, which could be the death of me in the trials.",
		"I really wanted to be a vizier, and I'm angry at the god who didn't choose me.",
		"Training for a lifetime to die in the end seems like a big waste of energy.",
		"I'm not at all sure I'll be able to grant a glorified death to any of my crop-mates.",
		"I have a lasting grudge against one of my crop-mates, and each of us wants to see the other fail.",
		"I think I've figured out that this world is not what it seems. Something dark is going on here."
	],
	toolProfs : [["Gaming set", 1], "Vehicles (land)"],
	variant : []
};
BackgroundList["vizier"] = {
	regExpSearch : /vizier/i,
	name : "Vizier",
	source : ["PS:A", 10],
	skills : ["History", "Religion"],
	gold : 25,
	equipright : [
		["Fine clothes", "", 6],
		["Belt pouch (with coins)", "", 1]
	],
	equipleft : [
		["Scroll with divine teachings", "", ""],
		["Artisan's tools or musical instrument", "", ""],
		["Vizier's cartouche", "", ""]
	],
	feature : "Voice of Authority",
	trait : [
		"Everything I do, I do gracefully and deliberately, and with complete confidence. (Oketra)",
		"Nothing can shake my rock-hard focus. (Oketra)",
		"When I am at peace, I am an oasis of perfect calm in the world. When I am roused to anger, I am an embodiment of terror. (Kefnet)",
		"I enjoy teasing acolytes and initiates with juicy tidbits of knowledge wrapped up in fiendishly difficult puzzles. (Kefnet)",
		"I have the utmost faith in myself and my abilities. (Rhonas)",
		"I get restless when life in the city feels too tame, too safe. (Rhonas)",
		"I enjoy solitude as an opportunity to plan my victory. (Bontu)",
		"I use satire as a way to undermine the teachings of the other gods. (Bontu)",
		"I love, fight, and feast with equal zeal. (Hazoret)",
		"I think of those in my care as my family, in a way that most people have trouble understanding. (Hazoret)"
	],
	ideal : [
		["Solidarity",
			"Solidarity: The worthy must respect the worthy. In the afterlife, all will be united in goal and action. (Oketra)"
		],
		["Knowledge",
			"Knowledge: The worthy shall cultivate a nimble mind, so as to perceive the wonders beyond imagination that wait in the afterlife. (Kefnet)"
		],
		["Strength",
			"Strength: The worthy shall hone a strong body that can withstand the boundless energies of the afterlife. (Rhonas)"
		],
		["Ambition",
			"Ambition: The worthy shall strive for greatness, for supremacy in life leads to supremacy in the afterlife. (Bontu)"
		],
		["Zeal",
			"Zeal: The worthy shall rush to the God-Pharaoh's side with relentless passion, rising to overcome every obstacle in their way. (Hazoret)"
		],
		["Naktamun",
			"Naktamun: The life of the city is ordered according to the plan of the God-Pharaoh, and that order must be preserved at all costs."
		]
	],
	bond : [
		"My loyalty to my companions embodies the ideal of loyalty to my god. (Oketra)",
		"The teachings of my god are more precious to me than any possession. (Kefnet)",
		"I would do anything to defend the temple of my god from any harm or desecration. (Rhonas)",
		"I am committed to the service of my god\u2014because it's my sure ticket into the afterlife. (Bontu)",
		"I love my god and never want my service to end. (Hazoret)",
		"I have a close friend or lover who is also a vizier."
	],
	flaw : [
		"I am in love with an initiate, and I want to shield this person from death in the trials.",
		"I secretly wish I had not been chosen as a vizier, so I could participate in the trials as an initiate.",
		"I secretly question whether the gods care at all about us or what we do.",
		"A vizier of another god seeks my death in retribution for a past insult.",
		"I am terrified of what lies beyond the Gate to the Afterlife.",
		"I secretly believe the God-Pharaoh's return will not bring blessing to this world."
	],
	toolProfs : [["Artisan's tools", 1], ["Musical instrument", 1]],
	variant : []
};
BackgroundFeatureList["trials of the five gods"] = {
	description : "I live to do the five trials to determine my worthiness in the afterlife. While preparing for these, I have access to training, a place to live, and regular meals. I can enjoy these benefits only as long as I obey the societal norms of Naktamun, obeying the orders of the gods and the instructions of their viziers. If I violate these norms, I risk being treated as a dissenter.",
	source : ["PS:I", 9]
};
BackgroundFeatureList["voice of authority"] = {
	description : "My voice is the voice of my god, at least in theory. My job might include training and instructing initiates, and they are required to obey me. In any circumstance, an initiate is expected to defer to my voice and obey my commands. If I abuse this authority, though, my god might personally punish me.",
	source : ["PS:I", 10]
};
BackgroundFeatureList["shelter of dissenters"] = {
	description : "If dissenters wish to have any hope of survival, whether hiding within the city or cast out into the desert, they must help each other. I can find a place to hide, rest, or recuperate among other dissenters. They will help shield me from those who hunt me, possibly even risking their lives for me.",
	source : ["PS:I", 11]
};

// Adds 5 races
RaceList["ibis-headed aven"] = { // Includes contributions by /u/MILKB0T
	regExpSearch : /^(?=.*aven)(?=.*ibis).*$/i,
	name : "Ibis-Headed Aven",
	sortname : "Aven, Ibis-Headed",
	source : ["PS:A", 16],
	plural : "Ibis-Headed Avens",
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
	scores : [0, 2, 0, 1, 0, 0],
	trait : "Ibis-Headed Aven (+2 Dexterity, +1 Intelligence)\n\nKefnet's Blessing: I can add half my proficiency bonus, rounded down, to any Intelligence check I make that doesn't already include my proficiency bonus."
};
RaceList["hawk-headed aven"] = { // Includes contributions by /u/MILKB0T
	regExpSearch : /^(?=.*aven)(?=.*hawk).*$/i,
	name : "Hawk-Headed Aven",
	sortname : "Aven, Hawk-Headed",
	source : [["PS:A", 16], ["PS:D", 6]],
	plural : "Hawk-Headed Avens",
	size : 3,
	speed : {
		walk : { spd : 25, enc : 15 },
		fly : { spd : 30, enc : 0 }
	},
	languageProfs : ["Common", "Aven"],
	skills : ["Perception"],
	age : " age like humans and can live into their 80s",
	height : " stand between 5 and 6 feet tall",
	weight : " are very slender and their bones are partially hollow to facilitate their flight",
	heightMetric : " stand between 1,5 and 1,8 metres tall",
	scores : [0, 2, 0, 0, 2, 0],
	trait : "Hawk-Headed Aven (+2 Dexterity, +2 Wisdom)\n\nHawkeyed: I have proficiency in the Perception skill.\n\nAttacking at long range doesn't impose disadvantage on my ranged weapon attack rolls."
};
RaceList["khenra"] = { // Includes contributions by /u/juju2569
	regExpSearch : /khenra/i,
	name : "Khenra",
	source : ["PS:A", 18],
	plural : "Khenra",
	size : 3,
	speed : { walk : { spd : 35, enc : 25 } },
	languageProfs : ["Common", "Khenra"],
	weaponProfs : [false, false, ["javelin", "khopesh", "spear"]],
	age : " reaching adulthood in their early teens and rarely live past 60, even without a violent death",
	height : " range from under 5 to over 6 feet tall (4'6\" + 2d10\")",
	weight : " weigh around 115 lb (90 + 2d10 \xD7 1d4 lb)",
	heightMetric : " range from under 1,5 to over 1,8 metres tall (140 + 5d10 cm)",
	weightMetric : " weigh around 55 kg (40 + 5d10 \xD7 2d4 / 10 kg)",
	scores : [1, 2, 0, 0, 0, 0],
	trait : "Khenra (+2 Dexterity, +1 Strength)\n\nKhenra Twins: If my twin is alive and I can see my twin, I can reroll the die once whenever I roll a 1 on an attack roll, ability check, or saving throw. I must then use the new roll. If my twin is dead (or if I were born without a twin), I can't be frightened."
};
RaceList["amonkhet minotaur"] = { // Includes contributions by /u/juju2569
	regExpSearch : /^(?=.*amonkhet)(?=.*minotaur).*$/i,
	name : "Amonkhet Minotaur",
	sortname : "Minotaur, Amonkhet",
	source : ["PS:A", 20],
	plural : "Amonkhet Minotaurs",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languageProfs : ["Common", "Minotaur"],
	weaponsAdd : ["Horns (unarmed strike)"],
	skills : ["Intimidation"],
	age : " reach full maturity around the age of 20, but rarely live beyond 40",
	height : " are well over 6 feet tall",
	weight : " have strong, stocky builds",
	heightMetric : " are well over 1,8 metres tall",
	scores : [2, 0, 1, 0, 0, 0],
	features : {
		"horns" : {
			name : "Horns",
			minlevel : 1,
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.baseWeaponName == "unarmed strike" && (fields.Damage_Die == 1 || fields.Damage_Die == '1d4')) {
							fields.Damage_Die = '1d6';
						};
					},
					"I can use my horns as a natural weapon to make unarmed strikes, doing 1d6 damage instead of 1."
				]
			}
		},
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
	trait : "Amonkhet Minotaur (+2 Strength, +1 Constitution)\nHorns: I can use my horns to make unarmed strikes, doing 1d6 damage instead of 1.\nRelentless Endurance: When I am reduced to 0 hit points but not killed outright, I can drop to 1 hit point instead. I can't use this feature again until I finish a long rest.\nSavage Attacks: When I score a critical hit with a melee weapon attack, I can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit."
};
RaceList["naga"] = { // Includes contributions by /u/juju2569
	regExpSearch : /naga/i,
	name : "Naga",
	source : ["PS:A", 22],
	plural : "Nagas",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languageProfs : ["Common", "Naga"],
	toolProfs : ["Poisoner's kit"],
	savetxt : { immune : ["poison"] },
	weaponOptions : [{ // Includes contributions by /u/juju2569
		regExpSearch : /^(?=.*naga)(?=.*bite).*$/i,
		name : "Naga Bite",
		source : ["PS:A", 22],
		ability : 1,
		type : "Natural",
		damage : [1, 4, "piercing"],
		range : "Melee",
		description : "Target must make Constitution save (DC 8 + Prof bonus + Con mod) or take +1d4 poison damage",
		abilitytodamage : true
	}, {
		regExpSearch : /\bconstrict\b/i,
		name : "Constrict",
		source : ["PS:A", 22],
		ability : 1,
		type : "Natural",
		damage : [1, 6, "bludgeoning"],
		range : "Melee",
		description : "Target is grappled and restrained (escape DC 8+Prof+Str mod); Can't use constrict again until grapple ends",
		abilitytodamage : true
	}],
	weaponsAdd : ["Naga Bite", "Constrict"],
	age : " reach adulthood in their late teens and show no signs of aging beyond that point except for growing larger. They could live well over a century.",
	height : " stand about 5 feet tall when upright, but the total length of their bodies, head to tail, ranges from 10 to as much as 20 feet",
	weight : " weigh around 200 lb",
	heightMetric : " stand about 1,5 metres tall when upright, but the total length of their bodies, head to tail, ranges from 3 to as much as 6 metres",
	weightMetric : " weigh around 100 kg",
	scores : [0, 0, 2, 1, 0, 0],
	trait : "Naga (+1 Intelligence, +2 Constitution)\nSpeed Burst: As a bonus action on my turn, if I have both hands free, I can increase my walking speed by 5 ft until the end of my turn. By lowering my body to the ground and propelling myself with my arms, I can move more quickly for a time.\nNatural Weapons: I can bite with my fanged maw to poison a creature and constrict with my serpentine body. If I hit with a constrict attack, the target is grappled and restrained. Until this grapple ends, I can't use constrict on another target."
};

// Add weapons for races
WeaponsList.khopesh = newObj(WeaponsList["longsword"]);
WeaponsList.khopesh.regExpSearch = /khopesh/i;

// Adds 4 subclasses for the Cleric
AddSubClass("cleric", "solidarity domain", { // Includes contributions by /u/juju2569
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*\b(solidarity|teamwork|oketra)\b).*$/i,
	subname : "Solidarity Domain",
	source : ["PS:A", 24],
	spellcastingExtra : ["bless", "guiding bolt", "aid", "warding bond", "beacon of hope", "crusader's mantle", "aura of life", "guardian of faith", "circle of power", "mass cure wounds"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Proficiency",
			source : ["PS:A", 24],
			minlevel : 1,
			description : "\n   " + "I gain proficiency with heavy armor",
			armorProfs : [false, false, true, false]
		},
		"subclassfeature1.1" : {
			name : "Solidarity's Action",
			source : ["PS:A", 24],
			minlevel : 1,
			description : "\n   " + "When I do the Help action to aid an ally, I can make a weapon attack as a bonus action",
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
			action : ["bonus action", " (with Help action)"]
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Preserve Life",
			source : ["PS:A", 24],
			minlevel : 2,
			description : desc([
				"As an action, I heal chosen living creatures within 30 ft of me, up to half their max HP",
				"I can heal five times my cleric level in HP, which I have to divide over the subjects."
			]),
			additional : levels.map(function (n) { return n < 2 ? "" : Math.floor(n*5) + " HP to divide"; }),
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Channel Divinity: Oketra's Blessing",
			source : ["PS:A", 24],
			minlevel : 6,
			description : desc([
				"As a reaction, when a creature within 30 ft makes an attack roll, I can grant a bonus",
				"The creature then adds a +10 bonus to the roll; I can do this after seeing the d20 roll"
			]),
			action : ["reaction", ""]
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : ["PS:A", 25],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
			additional : levels.map(function (n) { return n < 8 ? "" : "+" + (n < 14 ? 1 : 2) + "d8 weapon damage"; }),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isSpell) {
							fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 damage';
						}
					},
					"Once per turn, I can have one of my weapon attacks that hit do extra damage."
				]
			}
		},
		"subclassfeature17" : {
			name : "Supreme Healing",
			source : ["PS:A", 25],
			minlevel : 17,
			description : "\n   " + "When I cast a healing spell, all dice for determining HP are treated as rolling maximum",
		}
	}
});
AddSubClass("cleric", "strength domain", { // Includes contributions by /u/juju2569
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*\b(strength|toughness|rhonas)\b).*$/i,
	subname : "Strength Domain",
	source : ["PS:A", 25],
	spellcastingExtra : ["divine favor", "shield of faith", "enhance ability", "protection from poison", "haste", "protection from energy", "dominate beast", "stoneskin", "destructive wave", "insect plague"],
	features : {
		"subclassfeature1" : {
			name : "Acolyte of Strength",
			source : ["PS:A", 26],
			minlevel : 1,
			description : desc([
				"I learn a druid cantrip",
				"I gain proficiency with one skill: Animal Handling, Athletics, Nature, or Survival"
			]),
			skillstxt : "Choose one from: Animal Handling, Athletics, Nature, or Survival",
			spellcastingBonus : {
				name : "Acolyte of Strength",
				"class" : "druid",
				level : [0, 0],
				firstCol : 'atwill'
			}
		},
		"subclassfeature1.1" : {
			name : "Bonus Proficiency",
			source : ["PS:A", 26],
			minlevel : 1,
			description : "\n   " + "I gain proficiency with heavy armor",
			armorProfs : [false, false, true, false]
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Feat of Strength",
			source : ["PS:A", 26],
			minlevel : 2,
			description : desc([
				"When I make an attack roll, ability check, or save using Strength, I can bless it",
				"I can then add a +10 bonus to the roll; I can do this after seeing the d20 roll"
			])
		},
		"subclassfeature6" : {
			name : "Channel Divinity: Rhonas's Blessing",
			source : ["PS:A", 26],
			minlevel : 6,
			description : desc([
				"As a reaction if any within 30 ft do an attack, check, or save using Str, I can bless it",
				"The subject adds a +10 bonus to the roll; I can do this after seeing the d20 roll"
			]),
			action : ["reaction", ""]
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : ["PS:A", 26],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
			additional : levels.map(function (n) { return n < 8 ? "" : "+" + (n < 14 ? 1 : 2) + "d8 weapon damage"; }),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isSpell) {
							fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 damage';
						}
					},
					"Once per turn, I can have one of my weapon attacks that hit do extra damage."
				]
			}
		},
		"subclassfeature17" : {
			name : "Avatar of Battle",
			source : ["PS:A", 26],
			minlevel : 17,
			description : "\n   " + "I have resistance to bludgeoning/piercing/slashing damage from nonmagical weapons",
			dmgres : [["Bludgeoning", "Bludg. (nonmagical)"], ["Piercing", "Pierc. (nonmagical)"], ["Slashing", "Slash. (nonmagical)"]]
		}
	}
});
AddSubClass("cleric", "ambition domain", { // Includes contributions by /u/juju2569
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*\b(ambition|bontu)\b).*$/i,
	subname : "Ambition Domain",
	source : ["PS:A", 27],
	spellcastingExtra : ["bane", "disguise self", "mirror image", "ray of enfeeblement", "bestow curse", "vampiric touch", "death ward", "dimension door", "dominate person", "modify memory"],
	features : {
		"subclassfeature1" : {
			name : "Warding Flare",
			source : ["PS:A", 27],
			minlevel : 1,
			description : desc([
				"When a creature within 30 ft attacks me and I can see it, I can interpose divine light",
				"As a reaction, I impose disadv. on the attacker's attack roll (unless it can't be blinded)"
			]),
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
			action : ["reaction", ""]
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Invoke Duplicity",
			source : ["PS:A", 27],
			minlevel : 2,
			description : desc([
				"As an action, I create illusory duplicates of myself within 30 ft of me for 1 min (conc)",
				"As a bonus action, I can move them 30 ft to space(s) I can see within 120 ft of me",
				"I can cast spells as though I was in an duplicate's space, using my own senses",
				"I have advantage on attacks if the target is within 5 ft of a duplicate and me"
			]),
			additional : levels.map(function (n) { return n < 2 ? "" : (n < 17 ? 1 : 2) + " illusory duplicate" + (n < 17 ? "" : "s"); }),
			action : [["action", ""], ['bonus action', 'Move Duplicate(s)']]
		},
		"subclassfeature6" : {
			name : "Channel Divinity: Cloak of Shadows",
			source : ["PS:A", 27],
			minlevel : 6,
			description : "\n   " + "As an action, I become invisible until the end of my next turn or I attack/cast a spell",
			action : ["action", ""]
		},
		"subclassfeature8" : {
			name : "Potent Spellcasting",
			source : ["PS:A", 27],
			minlevel : 8,
			description : "\n   " + "I can add my Wisdom modifier to the damage I deal with my cleric cantrips",
			calcChanges : {
				atkCalc : [
					function (fields, v, output) {
						if (classes.known.cleric && classes.known.cleric.level > 7 && v.thisWeapon[3] && v.thisWeapon[4].indexOf('cleric') !== -1 && SpellsList[v.thisWeapon[3]].level === 0) {
							output.extraDmg += What('Wis Mod');
						};
					},
					"My cleric cantrips get my Wisdom modifier added to their damage."
				],
				spellAdd : [
					function (spellKey, spellObj, spName) {
						if (spName != "cleric" || !What("Wis Mod") || Number(What("Wis Mod")) <= 0 || spellObj.psionic || spellObj.level !== 0) return;
						if (spellKey == "shillelagh") {
							spellObj.description = spellObj.description.replace("1d8", "1d8+" + What("Wis Mod"));
							return true;
						}
						return genericSpellDmgEdit(spellKey, spellObj, "\\w+\\.?", "Wis", true);
					},
					"My cleric cantrips get my Wisdom modifier added to their damage."
				]
			}
		},
		"subclassfeature17" : {
			name : "Improved Duplicity",
			source : ["PS:A", 27],
			minlevel : 17,
			description : desc([
				"When I use Invoke Duplicity, I make four illusory duplicates instead of one",
				"I can move any number of the illusory duplicates as part of the same bonus action"
			])
		}
	}
});
AddSubClass("cleric", "zeal domain", { // Includes contributions by /u/MILKB0T
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*\b(zeal|hazoret)\b).*$/i,
	subname : "Zeal Domain",
	source : ["PS:A", 28],
	spellcastingExtra : ["searing smite", "thunderous smite", "magic weapon", "shatter", "haste", "fireball", "fire shield", "freedom of movement", "destructive wave", "flame strike"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Proficiency",
			source : ["PS:A", 28],
			minlevel : 1,
			description : "\n   " + "I gain proficiency with martial weapons and heavy armor",
			armorProfs : [false, false, true, false],
			weaponProfs : [false, true]
		},
		"subclassfeature1.1" : {
			name : "Priest of Zeal",
			source : ["PS:A", 28],
			minlevel : 1,
			description : "\n   " + "When I use the Attack action, I can make a weapon attack as a bonus action",
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
			action : ["bonus action", " (with Attack action)"]
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Consuming Fervor",
			source : ["PS:A", 28],
			minlevel : 2,
			description : "\n   " + "Instead of rolling, I can do maximum damage when I do fire or thunder damage"
		},
		"subclassfeature6" : {
			name : "Resounding Strike",
			source : ["PS:A", 28],
			minlevel : 6,
			description : "\n   " + "When I deal thunder damage to a Large or smaller foe, I can push it up to 10 ft away"
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : ["PS:A", 28],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
			additional : levels.map(function (n) { return n < 8 ? "" : "+" + (n < 14 ? 1 : 2) + "d8 weapon damage"; }),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isSpell) {
							fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 damage';
						}
					},
					"Once per turn, I can have one of my weapon attacks that hit do extra damage."
				]
			}
		},
		"subclassfeature17" : {
			name : "Blaze of Glory",
			source : ["PS:A", 28],
			minlevel : 17,
			description : desc([
				"As a reaction when I'm reduced to 0 HP or killed outright, I can do a final heroic act",
				"I move my speed towards my attacker and attack it once in melee with advantage",
				"If the attack hits, it does an extra 5d10 fire and extra 5d10 weapon damage",
				"After this, I suffer the consequences of the damage as I would normally do"
			]),
			usages : 1,
			recovery : "long rest",
			action : ["reaction"]
		}
	}
});

// Adds 1 creature
CreatureList["serpopard"] = {
	name : "Serpopard",
	source : ["PS:A", 37],
	size : 2,
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 12,
	hp : 52,
	hd : [7, 10],
	speed : "40 ft",
	scores : [18, 14, 15, 3, 12, 8],
	saves : ["", "", "", "", "", ""],
	skills : {
		"perception" : 3,
		"stealth" : 6
	},
	senses : "Adv. on Wis (Perception) checks using smell",
	passivePerception : 13,
	languages : "",
	challengeRating : "3",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
			name : "Claw", // No Claw attack in the stat block, but logical considering the Pounce trait and CR 3
			ability : 1,
			damage : [1, 8, "slashing"],
			range : "Melee (5 ft)",
			description : "If used after moving 20 ft straight in the same round, see Pounce trait"
		}, {
			name : "Bite",
			ability : 1,
			damage : [1, 10, "piercing"],
			range : "Melee (5 ft)",
			description : "Target also takes 3d6 poison damage, half on a DC 14 Constitution saving throw"
		}
	],
	traits : [{
			name : "Keen Smell",
			description : "The serpopard has advantage on Wisdom (Perception) checks that rely on smell."
		}, {
			name : "Pounce",
			description : "If the serpopard moves at least 20 ft straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the serpopard can make one bite attack against it as a bonus action."
		}
	]
};
CreatureList["cerodon"] = {
	name : "Cerodon",
	source : ["PS:A", 37],
	size : 1,
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 13,
	hp : 126,
	hd : [11, 12],
	speed : "40 ft",
	scores : [24, 9, 21, 3, 11, 6],
	saves : ["", "", "", "", "", ""],
	senses : "",
	passivePerception : 10,
	languages : "",
	challengeRating : "6",
	proficiencyBonus : 3,
	attacksAction : 1,
	attacks : [{
			name : "Gore",
			ability : 1,
			damage : [4, 8, "bludgeoning"],
			range : "Melee (10 ft)",
			description : "If used after moving 20 ft straight in the same round, see Trampling Charge trait"
		}, {
			name : "Stomp",
			ability : 1,
			damage : [4, 10, "bludgeoning"],
			range : "Melee (5 ft)",
			description : "Can only be used on prone creatures (also see Trampling Charge trait)"
		}
	],
	traits : [{
			name : "Trampling Charge",
			description : "If the cerodon moves at least 20 ft straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 18 Strength saving throw or be knocked prone. If the target is prone, the cerodon can make one stomp attack against it as a bonus action."
		}, {
			name : "Siege Monster",
			description : "The cerodon deals double damage to objects and structures."
		}
	]
};
CreatureList["hippopotamus"] = {
	name : "Hippopotamus",
	source : ["PS:A", 37],
	size : 1,
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 12,
	hp : 76,
	hd : [8, 12],
	speed : "40 ft, swim 30 ft",
	scores : [22, 9, 17, 3, 11, 6],
	saves : ["", "", "", "", "", ""],
	senses : "",
	passivePerception : 10,
	languages : "",
	challengeRating : "4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 1,
			damage : [3, 8, "piercing"],
			range : "Melee (5 ft)",
			description : "If used after moving 20 ft straight in the same round, see Trampling Charge trait"
		}, {
			name : "Stomp",
			ability : 1,
			damage : [3, 10, "bludgeoning"],
			range : "Melee (5 ft)",
			description : "Can only be used on prone creatures (also see Trampling Charge trait)"
		}
	],
	traits : [{
			name : "Hold Breath",
			description : "The hippopotamus can hold its breath for 30 minutes."
		}, {
			name : "Trampling Charge",
			description : "If the hippopotamus moves at least 20 ft straight toward a creature and then hits it with a Bit attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the hippopotamus can make one stomp attack against it as a bonus action."
		}
	]
};
