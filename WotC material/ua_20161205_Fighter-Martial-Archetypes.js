var iFileName = "ua_20161205_Fighter-Martial-Archetypes.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Unearthed Arcana: Eberron article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:FMA"] = {
	name : "Unearthed Arcana: Fighter Martial Archetypes",
	abbreviation : "UA:FMA",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2016/dnd/downloads/2016_Fighter_UA_1205_1.pdf",
	date : "2016/12/05"
};

// Adds 4 subclasses for the Fighter
AddSubClass("fighter", "arcane archer", {
	regExpSearch : /^(?=.*arcane)(?=.*archer).*$/i,
	subname : "Arcane Archer",
	source : ["UA:FMA", 1],
	fullname : "Arcane Archer",
	features : {
		"subclassfeature3" : {
			name : "Arcane Arrow",
			source : ["UA:FMA", 1],
			minlevel : 3,
			description : "\n   " + "As a bonus action, I can create one magical arrow that I can fire with a bow" + "\n   " + "A shot with the arrow counts as magical and does additional force damage on a hit" + "\n   " + "When I create the arrow, I can apply one of my known Arcane Shots on it" + "\n   " + "This arrow lasts until the end of my turn or until I hit or miss a target with it",
			additional : levels.map(function (n) {
				return n < 3 ? "" :
					(n < 18 ? "+2" : "+4") + "d6 force damage";
			}),
			additional : ["", "", "+2d6 force damage", "+2d6 force damage", "+2d6 force damage", "+2d6 force damage", "+2d6 force damage", "+2d6 force damage", "+2d6 force damage", "+2d6 force damage", "+2d6 force damage", "+2d6 force damage", "+2d6 force damage", "+2d6 force damage", "+2d6 force damage", "+2d6 force damage", "+2d6 force damage", "+4d6 force damage", "+4d6 force damage", "+4d6 force damage"],
			usages : 2,
			recovery : "short rest",
			eval : "AddAction('bonus action', 'Create Magical Arrow', 'Arcane Archer (Arcane Arrow)');",
			removeeval : "RemoveAction('bonus action', 'Create Magical Arrow')",
			calcChanges : {
				atkAdd : ["if ((/longbow|shortbow/i).test(WeaponName) && (/^(?=.*arcane)(?=.*arrow).*$/i).test(WeaponText) && classes.known.fighter && classes.known.fighter.level) {fields.Description += (fields.Description ? '; +' : '+') + (classes.known.fighter.level < 18 ? 2 : 4) + 'd6 force damage' + (thisWeapon[1] ? '' : '; Counts as magical'); }; ", "If I include the words 'Arcane Arrow' in a longbow or shortbow's name, it gets an added description of the damage this Arcane Arrow adds."]
			}
		},
		"subclassfeature3.1" : {
			name : "Arcane Shot",
			source : ["UA:FMA", 1],
			minlevel : 3,
			description : "\n   " + "Use the \"Choose Feature\" button above to add Arcane Shots to the third page",
			additional : ["", "", "2 known", "2 known", "2 known", "2 known", "3 known", "3 known", "3 known", "4 known", "4 known", "4 known", "4 known", "4 known", "5 known", "5 known", "5 known", "6 known", "6 known", "6 known"],
			extraname : "Arcane Shot",
			extrachoices : ["Beguiling Arrow", "Brute Bane Arrow", "Bursting Arrow", "Defending Arrow", "Grasping Arrow", "Piercing Arrow", "Seeking Arrow", "Shadow Arrow"],
			"beguiling arrow" : {
				name : "Beguiling Arrow",
				source : ["UA:FMA", 1],
				description : " [Enchantment]" + "\n   " + "If the arrow hits, I choose an ally withing 30 feet of the target" + "\n   " + "The target can't attack the chosen ally or include the ally in any harmful area of effects" + "\n   " + "This effect stops if the target is immune to charm effects or the ally damages the target"
			},
			"brute bane arrow" : {
				name : "Brute Bane Arrow",
				source : ["UA:FMA", 1],
				description : " [Necromancy]" + "\n   " + "If the arrow hits, the target's attacks deal half damage until the end of my next turn" + "\n   " + "Only attacks that deal bludgeoning, piercing or slashing damage are halved"
			},
			"bursting arrow" : {
				name : "Bursting Arrow",
				source : ["UA:FMA", 2],
				description : " [Evocation]" + "\n   " + "If the arrow hits, all creatures within 10 ft of the target creature take 2d6 force damage"
			},
			"defending arrow" : {
				name : "Defending Arrow",
				source : ["UA:FMA", 2],
				description : " [Abjuration]" + "\n   " + "If the arrow hits, the target has disadv. on its next attack before the end of my next turn"
			},
			"grasping arrow" : {
				name : "Grasping Arrow",
				source : ["UA:FMA", 2],
				description : " [Conjuration]" + "\n   " + "If the arrow hits, the target is wrapped with grasping, thorny brambles for 1 minute" + "\n   " + "The target has -10 ft speed; It takes 2d6 slashing damage when moving more than 1 ft" + "\n   " + "As an action, the target or a creature can remove the brambles with a DC 10 Str check"
			},
			"piercing arrow" : {
				name : "Piercing Arrow",
				source : ["UA:FMA", 2],
				description : " [Transmutation]" + "\n   " + "The arrow transform into an ethereal dart that creates a line of 1 ft wide and 30 ft long" + "\n   " + "I then make a separate attack using my Arcane Arrow against each creature in that line"
			},
			"seeking arrow" : {
				name : "Seeking Arrow",
				source : ["UA:FMA", 2],
				description : " [Divination]" + "\n   " + "As an action, I can make a ranged attack against a creature I have seen in the last minute" + "\n   " + "The seeking arrow moves around corners and obstacles to hit the target" + "\n   " + "The attack ignores 1/2 and 3/4 cover and disadvantage from range or being out of sight" + "\n   " + "The attack misses if the target is too far away or there is no path for the arrow to travel" + "\n   " + "I know if the arrow hits the target, but don't learn the location unless it's in line of sight",
				action : ["action", ""]
			},
			"shadow arrow" : {
				name : "Shadow Arrow",
				source : ["UA:FMA", 2],
				description : " [Illusion]" + "\n   " + "If the arrow hits, the target can't see beyond 30 ft until the end of my next turn"
			}
		},
		"subclassfeature3.2" : {
			name : "Archer's Lore",
			source : ["UA:FMA", 1],
			minlevel : 3,
			description : "\n   " + "I gain proficiency with two skills" + "\n   " + "I can choose from: Arcana, Athletics, Nature, Perception, Stealth, or Survival",
			skillstxt : "\n\n" + toUni("Arcane Archer") + ": Choose two from Arcana, Athletics, Nature, Perception, Stealth, and Survival."
		},
		"subclassfeature7" : {
			name : "Conjure Arrows",
			source : ["UA:FMA", 1],
			minlevel : 7,
			description : "\n   " + "As an action, I can create up to 20 nonmagical arrows that remain for 10 minutes" + "\n   " + "The arrows vanish if I use this feature again with 10 minutes",
			action : ["action", ""]
		},
		"subclassfeature15" : {
			name : "Ever-Ready Arrow",
			source : ["UA:FMA", 1],
			minlevel : 15,
			description : "\n   " + "I regain one use of Arcane Arrow one minute after I expend my last remaining use of it"
		}
	}
});
AddSubClass("fighter", "knight", {
	regExpSearch : /^(?!.*(exalted|sacred|holy|divine|nature|natural|purple.*dragon|green|fey|horned))(?=.*knight).*$/i,
	subname : "Knight",
	source : ["UA:FMA", 2],
	fullname : "Knight",
	features : {
		"subclassfeature3" : {
			name : "Born in the Saddle",
			source : ["UA:FMA", 2],
			minlevel : 3,
			description : "\n   " + "Mounting or dismounting a creature costs me only 5 ft of movement" + "\n   " + "I have advantage on saving throws made to avoid falling off my mount" + "\n   " + "If I fall off my mount for less than 10 ft while not incapacitated, I land on my feet",
			savetxt : { adv_vs : ["falling off my mount"] }
		},
		"subclassfeature3.1" : {
			name : "Implacable Mark",
			source : ["UA:FMA", 2],
			minlevel : 3,
			description : "\n   " + "If I hit a creature with a melee weapon attack, I mark it until the end of my next turn" + "\n   " + "A marked target has disadv. on any attacks vs. those that didn't mark it" + "\n   " + "I can attack the target I marked if it is within 5 ft of me and does one of the following:" + "\n    - " + "It moves at least 1 foot on its turn" + "\n    - " + "It makes an attack that it suffers disadv. on from being marked" + "\n   " + "This attack uses my reaction, has adv., and adds my fighter level as extra damage" + "\n   " + "I can still do this if I already used my reaction this round, but not this turn",
			recovery : "short rest",
			usages : 3,
			additional : levels.map(function (n) {
				return n < 3 ? "" : "+" + n + " damage";
			}),
			action : ["reaction", ""],
			calcChanges : {
				atkCalc : ["if (isMeleeWeapon && classes.known.fighter && classes.known.fighter.level > 2 && (/\\b(implacable.?mark|marked)\\b/i).test(WeaponText)) { output.extraDmg += classes.known.fighter.level; }; ", "If I include the words 'Implacable Mark' or 'Marked' in the name or description of a melee weapon, it gets my fighter level added to its Damage."]
			}
		},
		"subclassfeature7" : {
			name : "Noble Cavalry",
			source : ["UA:FMA", 2],
			minlevel : 7,
			description : "\n   " + "I gain proficiency with two skills or one language" + "\n   " + "I can choose the skills from: Animal Handling, History, Insight, Persuasion, and Religion",
			choices : ["Language proficiency", "2 Skill proficiencies: Animal Handling, History, Insight, Persuasion, or Religion"],
			"language proficiency" : {
				name : "Noble Cavalry",
				description : "\n   " + "I learn one language of my choice",
				languageProfs : [1]
			},
			"2 skill proficiencies: animal handling, history, insight, persuasion, or religion" : {
				name : "Noble Cavalry",
				description : "\n   " + "I gain 2 skill proficiencies: Animal Handling, History, Insight, Persuasion, or Religion",
				skillstxt : "\n\n" + toUni("Knight") + ": Choose two from: Animal Handling, History, Insight, Persuasion, or Religion."
			}
		},
		"subclassfeature10" : {
			name : "Hold the Line",
			source : ["UA:FMA", 2],
			minlevel : 10,
			description : "\n   " + "As a reaction when a creature within 5 ft of me moves at least 1 ft, I can attack it" + "\n   " + "This attack is made with a melee weapon attack and deals extra damage on a hit" + "\n   " + "If this hits, the attack reduces the target's speed to 0 until the end of this turn",
			additional : levels.map(function (n) {
				return n < 10 ? "" : "+" + Math.floor(n / 2) + " damage";
			}),
			action : ["reaction", ""],
			calcChanges : {
				atkCalc : ["if (isMeleeWeapon && classes.known.fighter && classes.known.fighter.level > 9 && (/holds?.the.line/i).test(WeaponText)) { output.extraDmg += Math.floor(classes.known.fighter.level / 2); }; ", "If I include the words 'Hold the Line' in the name or description of a melee weapon, it gets half my fighter level added to its Damage."]
			}
		},
		"subclassfeature15" : {
			name : "Rapid Strike",
			source : ["UA:FMA", 3],
			minlevel : 15,
			description : "\n   " + "If I have adv. on an attack, I can forgo it to make an extra attack as a bonus action" + "\n   " + "This attack has to be with the same weapon against the same target",
			action : ["bonus action", ""]
		},
		"subclassfeature18" : {
			name : "Defender's Blade",
			source : ["UA:FMA", 3],
			minlevel : 18,
			description : "\n   " + "I can do opportunity attacks if I already used my reaction this round, but not this turn" + "\n   " + "I gain +1 bonus to AC when I'm wearing heavy armor",
			eval : "AddACMisc(1, \"Defender's Blade\", \"When wearing heavy armor, the class feature Defender's Blade gives a +1 bonus to AC\", \"!tDoc.getField('Heavy Armor').isBoxChecked(0)\")",
			removeeval : "AddACMisc(0, \"Defender's Blade\", \"When wearing heavy armor, the class feature Defender's Blade gives a +1 bonus to AC\")"
		}
	}
});
AddSubClass("fighter", "samurai", {
	regExpSearch : /samurai/i,
	subname : "Samurai",
	source : ["UA:FMA", 3],
	fullname : "Samurai",
	features : {
		"subclassfeature3" : {
			name : "Fighting Spirit",
			source : ["UA:FMA", 3],
			minlevel : 3,
			description : "\n   " + "As a bonus action, I can give myself benefits that last until the end of my next turn" + "\n   " + "I then gain adv. on my attacks and resistance to bludgeoning/piercing/slashing damage",
			recovery : "short rest",
			usages : 3,
			action : ["bonus action", ""]
		},
		"subclassfeature7" : {
			name : "Elegant Courtier",
			source : ["UA:FMA", 3],
			minlevel : 7,
			description : "\n   " + "I can add my Wis modifier to any Cha check to persuade anyone of a high social station" + "\n   " + "I gain proficiency with either one language or the History, Insight, or Persuasion skill",
			choices : ["Language proficiency", "Skill proficiency: History, Insight, or Persuasion"],
			"language proficiency" : {
				name : "Elegant Courtier",
				description : "\n   " + "I can add my Wis modifier to any Cha check to persuade anyone of a high social station" + "\n   " + "I gain proficiency with one language of my choice",
				languageProfs : [1]
			},
			"skill proficiency: history, insight, or persuasion" : {
				name : "Elegant Courtier",
				description : "\n   " + "I can add my Wis modifier to any Cha check to persuade anyone of a high social station" + "\n   " + "I gain proficiency with one skill: History, Insight, or Persuasion",
				skillstxt : "\n\n" + toUni("Samurai") + ": History, Insight, or Persuasion.",
			}
		},
		"subclassfeature10" : {
			name : "Unbreakable Will",
			source : ["UA:FMA", 3],
			minlevel : 10,
			description : "\n   " + "I gain proficiency with Wis saves, or if I'm already proficient, either Int or Cha saves",
			saves : ["Wis"]
		},
		"subclassfeature15" : {
			name : "Rapid Strike",
			source : ["UA:FMA", 3],
			minlevel : 15,
			description : "\n   " + "If I have adv. on an attack, I can forgo it to make an extra attack as a bonus action" + "\n   " + "This attack has to be with the same weapon against the same target",
			action : ["bonus action", ""]
		},
		"subclassfeature18" : {
			name : "Strength Before Death",
			source : ["UA:FMA", 3],
			minlevel : 18,
			description : "\n   " + "If I take damage that would reduce me to 0 HP, I can delay that damage" + "\n   " + "I then immediately take a bonus turn, interrupting the current turn" + "\n   " + "I don't take the delayed damage until the bonus turn ends and can affect that damage",
			recovery : "long rest",
			usages : 1
		}
	}
});
AddSubClass("fighter", "sharpshooter", {
	regExpSearch : /sharpshooter/i,
	subname : "Sharpshooter",
	source : ["UA:FMA", 3],
	fullname : "Sharpshooter",
	features : {
		"subclassfeature3" : {
			name : "Steady Aim",
			source : ["UA:FMA", 3],
			minlevel : 3,
			description : "\n   " + "As a bonus action, I can carefully aim my ranged weapon on a target I can see in range" + "\n   " + "Until the end of my turn, my attacks with this weapon on that target get to:" + "\n   " + "Ignore half and three-quarter cover; Add 2 + half fighter level damage per hit",
			recovery : "short rest",
			usages : 3,
			additional : levels.map(function (n) {
				return n < 3 ? "" : "+" + (2 + Math.floor(n / 2)) + " damage";
			}),
			action : ["bonus action", ""],
			calcChanges : {
				atkAdd : ["if (isRangedWeapon && classes.known.fighter && classes.known.fighter.level > 2 && (/steady.{0,3}aim/i).test(WeaponText)) { fields.Description += (fields.Description ? '; ' : '') + 'Ignores 1/2 and 3/4 cover'; }; ", "If I include the words 'Steady Aim' in the name of a ranged weapon, it gets 2 + half my fighter level added to its Damage, and the fact that it ignores half and three-quarter cover added to its description."],
				atkCalc : ["if (isRangedWeapon && classes.known.fighter && classes.known.fighter.level > 2 && (/steady.{0,3}aim/i).test(WeaponText)) { output.extraDmg += 2 + Math.floor(classes.known.fighter.level / 2); }; ", ""]
			}
		},
		"subclassfeature7" : {
			name : "Careful Eyes",
			source : ["UA:FMA", 4],
			minlevel : 7,
			description : "\n   " + "As a bonus action, I can take the Search action" + "\n   " + "I gain proficiency with one skill, Perception, Investigation, or Survival",
			skillstxt : "\n\n" + toUni("Sharpshooter") + ": Perception, Investigation, or Survival.",
			action : ["bonus action", ""]
		},
		"subclassfeature10" : {
			name : "Close-Quarters Shooting",
			source : ["UA:FMA", 4],
			minlevel : 10,
			description : "\n   " + "I don't have disadvantage when making a ranged attack while within 5 ft of a hostile" + "\n   " + "A hostile within 5 ft that I hit with a ranged attack on my turn, can't take reactions" + "\n   " + "This lasts until the end of my turn"
		},
		"subclassfeature15" : {
			name : "Rapid Strike",
			source : ["UA:FMA", 4],
			minlevel : 15,
			description : "\n   " + "If I have adv. on an attack, I can forgo it to make an extra attack as a bonus action" + "\n   " + "This attack has to be with the same weapon against the same target",
			action : ["bonus action", ""]
		},
		"subclassfeature18" : {
			name : "Snap Shot",
			source : ["UA:FMA", 4],
			minlevel : 18,
			description : "\n   " + "I can make one more ranged attack with my Attack action on my first turn of combat"
		}
	}
});
