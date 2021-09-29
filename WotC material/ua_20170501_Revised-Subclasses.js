var iFileName = "ua_20170501_Revised-Subclasses.js";
RequiredSheetVersion("13.0.8");
// This file adds the content from the Unearthed Arcana: Revised Subclasses article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:RS"] = {
	name : "Unearthed Arcana: Revised Subclasses",
	abbreviation : "UA:RS",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2017/dnd/downloads/UA-RevisedSubclasses.pdf",
	date : "2017/05/01"
};

// Add 5 subclasses from previous Unearthed Arcana articles: 1 for the Barbarian, 1 for the Bard, 1 for the Fighter, 1 for the Monk, and 1 for the Sorcerer
AddSubClass("barbarian", "ancestral guardian2-ua", {
	regExpSearch : /^(?=.*ancestral)(?=.*guardian).*$/i,
	subname : "Path of the Ancestral Guardian",
	source : ["UA:RS", 1],
	fullname : "Ancestral Guardian",
	features : {
		"subclassfeature3" : {
			name : "Ancestral Protectors",
			source : ["UA:RS", 1],
			minlevel : 3,
			description : desc([
				"While raging, the first creature I hit with an attack on my turn becomes distracted",
				"While distracted, it has disadvantage on attack rolls that don't target me",
				"In addition, everybody but me counts as having resistance to all of the target's attacks",
				"This lasts until the start of my next turn, or until my rage ends"
			])
		},
		"subclassfeature6" : {
			name : "Spirit Shield",
			source : ["UA:RS", 1],
			minlevel : 6,
			description : desc([
				"As a reaction while raging when an ally I see within 30 ft is damaged, I can reduce it",
				"My guardian spirits reduce the damage by an amount equal to the roll of the dice"
			]),
			additional : levels.map(function (n) { return n < 6 ? "" : (n < 10 ? 2 : n < 14 ? 3 : 4) + "d8 damage reduced"; }),
			action : ["reaction", ""]
		},
		"subclassfeature10" : {
			name : "Consult the Spirits",
			source : ["UA:RS", 1],
			minlevel : 10,
			description : "\n   " + "Through consulting my ancestral spirits, I can cast Clairvoyance without a spell slot",
			spellcastingBonus : {
				name : "Consult the Spirits",
				spells : ["clairvoyance"],
				selection : ["clairvoyance"],
				firstCol : 'oncesr'
			},
			usages : 1,
			recovery : "short rest"
		},
		"subclassfeature14" : {
			name : "Vengeful Ancestors",
			source : ["UA:RS", 1],
			minlevel : 14,
			description : "\n   " + "Whenever I use Spirit Shield to reduce damage, the attacker takes the reduced damage"
		}
	}
});
AddSubClass("bard", "college of swords2-ua", {
	regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*\bswords?\b).*$/i,
	subname : "College of Swords",
	source : ["UA:RS", 1],
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiencies",
			source : ["UA:RS", 2],
			minlevel : 3,
			description : desc([
				"I gain proficiency with medium armor and scimitars",
				"I can use a simple or martial melee weapon that I'm proficient with as spellcasting focus"
			]),
			armorProfs : [false, true, false, false],
			weaponProfs : [false, false, ["scimitar"]]
		},
		"subclassfeature3.1" : {
			name : "Fighting Style",
			source : ["UA:RS", 2],
			minlevel : 3,
			description : "\n   " + "Select a Fighting Style for the college of swords using the \"Choose Feature\" button above",
			choices : ["Dueling", "Two-Weapon Fighting"],
			"dueling" : FightingStyles.dueling,
			"two-weapon fighting" : FightingStyles.two_weapon
		},
		"subclassfeature3.2" : {
			name : "Blade Flourish",
			source : ["UA:RS", 2],
			minlevel : 3,
			description : desc([
				"As an action, I can make one melee weapon attack and use one flourish option below",
				"In addition, I gain +10 ft to my walking speed until the end of the current turn",
				" - Defensive Flourish [one Bardic Inspiration die]",
				"    I add the result of the die to my AC until the start of my next turn",
				" - Slashing Flourish [one Bardic Inspiration die]",
				"    If the attack hits, I can use a die to deal damage to creatures next to the target",
				"    All creatures within 5 ft of the target take the result of the die in damage",
				" - Mobile Flourish [one Bardic Inspiration die]",
				"    If the attack hits, I can use a die to push the target back 5 + the die result in feet",
				"    After this, I can use my reaction to move my speed to a space next to the target"
			]),
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Cunning Flourish",
			source : ["UA:RS", 2],
			minlevel : 6,
			description : "\n   " + "When I take the Blade Flourish action, I can attack twice, but still only use one flourish"
		},
		"subclassfeature14" : {
			name : "Master Flourish",
			source : ["UA:RS", 2],
			minlevel : 14,
			description : "\n   " + "When I do a Blade Flourish, I can use a d6 instead of expending a Bardic Inspiration die"
		}
	}
});
AddSubClass("fighter", "arcane archer2-ua", {
	regExpSearch : /^(?=.*arcane)(?=.*archer).*$/i,
	subname : "Arcane Archer",
	source : ["UA:RS", 2],
	fullname : "Arcane Archer",
	abilitySave : 4,
	features : {
		"subclassfeature3" : {
			name : "Magic Arrow",
			source : ["UA:RS", 3],
			minlevel : 3,
			description : desc([
				"Whenever I fire a nonmagical arrow from a short- or longbow I can make it magical",
				"This magical arrow gives a +1 bonus to the attack and damage rolls for the one attack"
			]),
			calcChanges : {
				atkCalc : [
					function (fields, v, output) {
						if ((/longbow|shortbow/i).test(v.baseWeaponName) && !v.theWea.isMagicWeapon) output.magic += 1;
					},
					"Any longbow or shortbow that doesn't include a magic bonus in its name gets a +1 magical bonus to damage and to hit as any arrows fired with it are automatically made magical."
				]
			}
		},
		"subclassfeature3.1" : {
			name : "Arcane Shot",
			source : ["UA:RS", 3],
			minlevel : 3,
			description : desc([
				"I can unleash magical effects when I fire a magic arrow from a short- or longbow",
				"I can use this once per turn as part of the Attack action, after an attack hits",
				"I know a number of Arcane Shot Options and learn additional at certain levels",
				"Use the \"Choose Feature\" button above to add Arcane Shots Options to the third page"
			]),
			usages : 2,
			recovery : "short rest",
			additional : levels.map( function(n) { return n < 3 ? "" : (n < 7 ? 2 : n < 10 ? 3 : n < 15 ? 4 : n < 18 ? 5 : 6) + " options known"; }),
			extraname : "Arcane Shot Option",
			extrachoices : ["Banishing Arrow [Abjuration]", "Brute Bane Arrow [Necromancy]", "Bursting Arrow [Evocation]", "Grasping Arrow [Conjuration]", "Mind-Scrambling Arrow [Enchantment]", "Piercing Arrow [Transmutation]", "Seeking Arrow [Divination]", "Shadow Arrow [Illusion]"],
			extraTimes : levels.map(function (n) {
				return n < 3 ? 0 : n < 7 ? 2 : n < 10 ? 3 : n < 15 ? 4 : n < 18 ? 5 : 6;
			}),
			"banishing arrow [abjuration]" : {
				name : "Banishing Arrow [Abjuration]",
				source : ["UA:RS", 3],
				description : desc([
					"The target makes a Cha save or is banished to the Feywild until the end of its next turn",
					"While banished, its speed is 0 and is incapacitated; It re-appearing in the same spot",
					"When I reach 18th level, this Arcane Shot Option also does an extra 2d6 force damage"
				]),
				additional : levels.map( function(n) { return n < 18 ? "" : "+2d6 force damage"; })
			},
			"brute bane arrow [necromancy]" : {
				name : "Brute Bane Arrow [Necromancy]",
				source : ["UA:RS", 3],
				description : desc([
					"The target takes extra necrotic damage and must make a Constitution save",
					"If failed, the damage of the target's attacks is halved until the start of my next turn"
				]),
				additional : levels.map( function(n) { return n < 3 ? "" : "+" + (n < 18 ? 2 : 4) + "d6 necrotic damage"; })
			},
			"bursting arrow [evocation]" : {
				name : "Bursting Arrow [Evocation]",
				source : ["UA:RS", 3],
				description : "\n   " + "The target, in addition to the shot, and all creatures within 10 ft of it take damage",
				additional : levels.map( function(n) { return n < 3 ? "" : "+" + (n < 18 ? 2 : 4) + "d6 force damage"; })
			},
			"grasping arrow [conjuration]" : {
				name : "Grasping Arrow [Conjuration]",
				source : ["UA:RS", 3],
				description : desc([
					"The target takes extra poison damage as brambles wrap around it for 1 minute",
					"The brambles give it -10 ft speed and do it slashing damage every round it moves",
					"These can be removed by it or another as an action with Strength (Athletics) vs. my DC"
				]),
				additional : levels.map( function(n) { return n < 3 ? "" : (n < 18 ? 2 : 4) + "d6 poison/slash. damage"; })
			},
			"mind-scrambling arrow [enchantment]" : {
				name : "Mind-Scrambling Arrow [Enchantment]",
				source : ["UA:RS", 4],
				description : desc([
					"The target takes extra psychic damage and must succeed on a Wisdom save",
					"If failed, it can't attack or harm one of my allies within 30 ft of it that I choose",
					"This lasts until the start of my next turn or until the chosen ally harms the target"
				]),
				additional : levels.map( function(n) { return n < 3 ? "" : "+" + (n < 18 ? 2 : 4) + "d6 damage"; })
			},
			"piercing arrow [transmutation]" : {
				name : "Piercing Arrow [Transmutation]",
				source : ["UA:RS", 4],
				description : desc([
					"With this I don't roll for the attack, but shoot the arrow in a 30-ft long, 1-ft wide line",
					"It passes through objects, ignoring cover, but all creatures in the area take damage",
					"The damage is the same as a normal hit from my attack, plus extra piercing damage",
					"A creature can make a Dexterity save to reduce the damage by half"
				]),
				additional : levels.map( function(n) { return n < 3 ? "" : "+" + (n < 18 ? 1 : 2) + "d6 piercing damage"; })
			},
			"seeking arrow [divination]" : {
				name : "Seeking Arrow [Divination]",
				source : ["UA:RS", 4],
				description : desc([
					"With this I don't roll for the attack, but I choose a target I have seen in the last minute",
					"The seeking arrow moves around corners, obstacles, and ignores cover to hit the target",
					"It is hit if it is within the weapon's range and there is a path for the arrow to get to it",
					"The target takes the full damage of the attack plus extra force damage",
					"It can make a Dexterity save to reduce the damage by half; If failed, I know its location"
				]),
				additional : levels.map( function(n) { return n < 3 ? "" : "+" + (n < 18 ? 1 : 2) + "d6 force damage"; })
			},
			"shadow arrow [illusion]" : {
				name : "Shadow Arrow [Illusion]",
				source : ["UA:RS", 4],
				description : desc([
					"The target takes extra psychic damage and must succeed on a Wisdom save",
					"If failed, the target can't see anything beyond 5 ft until the end of my next turn"
				]),
				additional : levels.map( function(n) { return n < 3 ? "" : "+" + (n < 18 ? 2 : 4) + "d6 psyhic damage"; })
			}
		},
		"subclassfeature3.2" : {
			name : "Arcane Archer's Lore",
			source : ["UA:RS", 3],
			minlevel : 3,
			description : "\n   " + "I gain proficiency with either the Arcana or Nature skill",
			skillstxt : "Choose one from: Arcana or Nature"
		},
		"subclassfeature7" : {
			name : "Curving Shot",
			source : ["UA:RS", 3],
			minlevel : 7,
			description : desc([
				"When I miss with a magic arrow, I can use a bonus action to redirect the attack",
				"I reroll the attack against a different target within 60 ft of the original target"
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature15" : {
			name : "Ever-Ready Shot",
			source : ["UA:RS", 3],
			minlevel : 15,
			description : "\n   " + "I regain one use of Arcane Shot if I have no more remaining when I roll initiative"
		}
	}
});
AddSubClass("monk", "way of the kensei2-ua", {
	regExpSearch : /kensei/i,
	subname : "Way of the Kensei",
	source : ["UA:RS", 4],
	features : {
		"subclassfeature3" : {
			name : "Path of the Kensei",
			source : ["UA:RS", 4],
			minlevel : 3,
			description : desc([
				"Some weapons, that don't have the heavy or special property, are kensei weapons for me",
				"At least one ranged and one melee weapon, more at higher levels (longbow does qualify)",
				"With these: proficient, count as a monk weapons, special bonuses while holding them:",
				" - If I do an unarmed strike during an Attack action, +2 AC until my next turn starts",
				" - As a bonus action, ranged kensei weapon attacks deal +1d4 damage in current turn"
			]),
			action: ["bonus action", " (with ranged)"],
			additional : levels.map( function(n) { return n < 3 ? "" : (n < 6 ? 2 : n < 11 ? 3 : n < 17 ? 4 : 5) + " kensei weapons"; }),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.monk && classes.known.monk.level > 2 && !v.isSpell && !v.theWea.monkweapon && (/kensei/i).test(v.WeaponTextName) && !v.theWea.special && (!(/heavy|special/i).test(fields.Description) || v.baseWeaponName === 'longbow')) {
							v.theWea.monkweapon = true;
							v.theWea.kenseiweapon = true;
							if (v.isRangedWeapon) {
								fields.Description += (fields.Description ? '; ' : '') + 'As bonus action with Attack action, +1d4 damage';
							};
							fields.Proficiency = true;
						};
					},
					"If I include the word 'Kensei' in the name of a weapon that doesn't have the Heavy or Special attribute, or that is a longbow, that weapon gains the same benefits as any other 'Monk Weapon'.\nIn addition, with ranged 'Kensei Weapons', I can take a bonus action to have that hit, and any other hit after that as part of the same action, do +1d4 damage."
				]
			}
		},
		"ki-empowered strikes" : {
			name : "One with the Blade",
			source : ["UA:RS", 5],
			minlevel : 6,
			description : "\n   " + "My unarmed strikes and kensei weapon attacks count as magical",
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (!v.isSpell && !v.thisWeapon[1] && !v.theWea.isMagicWeapon && !(/counts as( a)? magical/i).test(fields.Description) && (v.baseWeaponName === "unarmed strike" || v.theWea.kenseiweapon)) {
							fields.Description += (fields.Description ? '; ' : '') + 'Counts as magical';
						};
					},
					"My unarmed strikes and any Kensei Weapons count as magical for overcoming resistances and immunities."
				]
			},
			"precise strike" : {
				name : "Precise Strike",
				extraname : "Way of the Kensei 6",
				source : ["UA:RS", 5],
				description : "\n   " + "Once per turn when I hit with a kensei weapon, I can do a martial arts die extra damage",
				additional : "1 ki point"
			},
			"sharpen the blade" : {
				name : "Sharpen the Blade",
				extraname : "Way of the Kensei 11",
				source : ["UA:RS", 5],
				description : desc([
					"As a bonus action, I can grant my kensei weapon a bonus to attack and damage rolls",
					"This bonus is equal to the number of ki points I spend; It lasts for 1 minute"
				]),
				additional : "1 to 3 ki points",
				action : ["bonus action", ""]
			},
			autoSelectExtrachoices : [{
				extrachoice : "precise strike"
			}, {
				extrachoice : "sharpen the blade",
				minlevel : 11
			}]
		},
		"subclassfeature17" : {
			name : "Unerring Accuracy",
			source : ["UA:RS", 5],
			minlevel : 17,
			description : "\n   " + "Once per turn, if I miss a monk weapon attack on my turn, I can reroll the attack roll"
		}
	}
});
AddSubClass("sorcerer", "favoured soul-uars", {
	regExpSearch : /^(?=.*favou?red)(?=.*soul).*$/i,
	subname : "Favored Soul",
	source : ["UA:RS", 5],
	fullname : "Favored Soul",
	spellcastingList : {
		"class" : ["cleric", "sorcerer"]
	},
	features : {
		"subclassfeature1" : {
			name : "Divine Magic",
			source : ["UA:RS", 5],
			minlevel : 1,
			description : desc([
				"When I select my 1st level or higher spells, I can also pick spells from the cleric spell list",
				"These cleric spells count as sorcerer spells for me",
				"I also learn Cure Wounds, which doesn't count against my number of spells known"
			]),
			spellcastingBonus : {
				name : "Divine Magic",
				spells : ["cure wounds"],
				selection : ["cure wounds"]
			}
		},
		"subclassfeature1.2" : {
			name : "Favored by the Gods",
			source : ["UA:RS", 5],
			minlevel : 1,
			description : "\n   " + "If I fail a saving throw or miss with an attack roll, I can add 2d4 to the total",
			recovery : "short rest",
			usages : 1
		},
		"subclassfeature6" : {
			name : "Empowered Healing",
			source : ["UA:RS", 5],
			minlevel : 6,
			description : " [1 sorcery point]" + desc([
				"When I roll dice for healing with one of my sorcerer spells, I can reroll them once",
				"By spending 1 sorcery point, I can reroll any number of those dice for that spell"
			])
		},
		"subclassfeature14" : {
			name : "Angelic Form",
			source : ["UA:RS", 5],
			minlevel : 14,
			description : desc([
				"Choose an otherworldly quality using the \"Choose Feature\" button above",
				"As a bonus action, I can manifest a pair of spectral wings that give me 30 ft fly speed",
				"These wings last until I become incapacitated or I dismiss them as a bonus action"
			]),
			choices : ["Beautiful", "Youthful", "Kind", "Imposing"],
			"beautiful" : {
				name : "Angelic Form: Beautiful",
				description : desc([
					"My appearance takes on an otherworldly quality of beauty",
					"As a bonus action, I can manifest a pair of spectral wings that give me 30 ft fly speed",
					"These wings last until I become incapacitated or I dismiss them as a bonus action"
				])
			},
			"youthful" : {
				name : "Angelic Form: Youthful",
				description : desc([
					"My appearance takes on an otherworldly quality of youthfulness",
					"As a bonus action, I can manifest a pair of spectral wings that give me 30 ft fly speed",
					"These wings last until I become incapacitated or I dismiss them as a bonus action"
				])
			},
			"kind" : {
				name : "Angelic Form: Kind",
				description : desc([
					"My appearance takes on an otherworldly quality of kindness",
					"As a bonus action, I can manifest a pair of spectral wings that give me 30 ft fly speed",
					"These wings last until I become incapacitated or I dismiss them as a bonus action"
				])
			},
			"imposing" : {
				name : "Angelic Form: Imposing",
				description : desc([
					"My appearance takes on an otherworldly quality of imposingness",
					"As a bonus action, I can manifest a pair of spectral wings that give me 30 ft fly speed",
					"These wings last until I become incapacitated or I dismiss them as a bonus action"
				])
			},
			action : ["bonus action", " Wings"],
			speed : { fly : { spd : 30, enc : 20 } }
		},
		"subclassfeature18" : {
			name : "Unearthly Recovery",
			source : ["UA:RS", 6],
			minlevel : 18,
			description : desc([
				"As a bonus action when I have less than half of my max HP remaining, I can heal myself",
				"I regain a number of HP equal to half my hit point maximum"
			]),
			action : ["bonus action", ""],
			recovery : "long rest",
			usages : 1
		}
	}
});
