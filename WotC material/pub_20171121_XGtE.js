var iFileName = "pub_20171121_XGtE.js";
RequiredSheetVersion("14.0.1-beta");
// This file adds the backgrounds and beasts from Xanathar's Guide to Everything to MPMB's Character Record Sheet

// Define the source
SourceList.X={
	name : "Xanathar's Guide to Everything",
	abbreviation : "XGtE",
	abbreviationSpellsheet : "X",
	group : "Primary Sources",
	url : "https://dnd.wizards.com/products/xanathars-guide-everything",
	date : "2017/11/21"
};

// Add 3 subclasses for the Barbarian
AddSubClass("barbarian", "ancestral guardian", {
	regExpSearch : /^(?=.*ancestral)(?=.*guardian).*$/i,
	subname : "Path of the Ancestral Guardian",
	source : [["X", 9]],
	fullname : "Ancestral Guardian",
	features : {
		"subclassfeature3" : {
			name : "Ancestral Protectors",
			source : [["X", 10]],
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
			source : [["X", 10]],
			minlevel : 6,
			description : desc([
				"As a reaction while raging when an ally I see within 30 ft is damaged, I can reduce it",
				"My guardian spirits reduce the damage by an amount equal to the roll of the dice"
			]),
			additional : levels.map(function (n) { return n < 6 ? "" : (n < 10 ? 2 : n < 14 ? 3 : 4) + "d6 damage reduced"; }),
			action : [["reaction", " (in Rage)"]]
		},
		"subclassfeature10" : {
			name : "Consult the Spirits",
			source : [["X", 10]],
			minlevel : 10,
			description : desc([
				"I can cast either Clairvoyance or Augury, without a spell slot or material components",
				"Augury consults ancestral spirits; Clairvoyance summons an invisible ancestral spirit",
				"Wisdom is my spellcasting ability for these spells"
			]),
			spellcastingAbility : 5,
			spellcastingBonus : [{
				name : "Consult the Spirits",
				spells : ["augury"],
				selection : ["augury"],
				firstCol : 'oncesr'
			}, {
				name : "Consult the Spirits",
				spells : ["clairvoyance"],
				selection : ["clairvoyance"],
				firstCol : 'oncesr'
			}],
			usages : 1,
			recovery : "short rest",
			spellChanges : {
				"augury" : {
					components : "V,S",
					compMaterial : "",
					description : "Omen about specific course of action I plan to take in the next 30 min",
					changes : "My casting of Augury is a practice of consulting my ancestral spirits, thus requiring no material components."
				},
				"clairvoyance" : {
					components : "V,S",
					compMaterial : "",
					changes : "My casting of Clairvoyance is a practice of consulting my an ancestral spirit of mine, thus requiring no material components."
				}
			}
		},
		"subclassfeature14" : {
			name : "Vengeful Ancestors",
			source : [["X", 10]],
			minlevel : 14,
			description : "\n   " + "When using Spirit Shield, the attacker takes the reduced amount as force damage"
		}
	}
});
AddSubClass("barbarian", "storm herald", {
	regExpSearch : /^(?=.*storm)(?=.*herald).*$/i,
	subname : "Path of the Storm Herald",
	source : [["X", 10]],
	fullname : "Storm Herald",
	abilitySave : 3,
	features : {
		"subclassfeature3" : {
			name : "Storm Aura",
			source : [["X", 10]],
			minlevel : 3,
			description : desc([
				"While raging, I emanate a 10-ft radius aura, but not through total cover",
				"The aura's features activate when I enter my rage or as a bonus action while raging",
				'Use the "Choose Feature" button above to select the type of aura'
			]),
			choices : ["Desert", "Sea", "Tundra"],
			action : [["bonus action", " (reactivate)"]],
			"desert" : {
				name : "Storm Aura: Desert",
				description : desc([
					"While raging, I emanate a 10-ft radius aura, but not through total cover",
					"The aura's features activate when I enter my rage or as a bonus action while raging",
					"Whenever I active my aura, anybody in my aura other than me takes fire damage"
				]),
				additional : levels.map(function (n) { return n < 3 ? "" : (n < 5 ? 2 : n < 10 ? 3 : n < 15 ? 4 : n < 20 ? 5 : 6) + " fire damage"; })
			},
			"sea" : {
				name : "Storm Aura: Sea",
				description : desc([
					"While raging, I emanate a 10-ft radius aura, but not through total cover",
					"The aura's features activate when I enter my rage or as a bonus action while raging",
					"Whenever I active my aura, I can choose one creature in my aura other than me",
					"It takes lightning damage, or half as much on a successful Dexterity saving throw",
					"My Storm Herald features have DC 8 + my Proficiency Bonus + my Constitution modifier"
				]),
				additional : levels.map(function (n) { return n < 3 ? "" : (n < 10 ? 1 : n < 15 ? 2 : n < 20 ? 3 : 4) + "d6 lightning damage"; })
			},
			"tundra" : {
				name : "Storm Aura: Tundra",
				description : desc([
					"While raging, I emanate a 10-ft radius aura, but not through total cover",
					"The aura's features activate when I enter my rage or as a bonus action while raging",
					"Whenever I active my aura, all creatures of my choice in my aura gain temporary HP"
				]),
				additional : levels.map(function (n) { return n < 3 ? "" : (n < 5 ? 2 : n < 10 ? 3 : n < 15 ? 4 : n < 20 ? 5 : 6) + " temporary hit points"; })
			},
			choiceDependencies : [{
				feature : "subclassfeature6"
			}, {
				feature : "subclassfeature10"
			}, {
				feature : "subclassfeature14"
			}]
		},
		"subclassfeature6" : {
			name : "Storm Soul",
			source : [["X", 10]],
			minlevel : 6,
			description : "\n   " + 'Use the "Choose Feature" button above to select the effect',
			choices : ["desert", "sea", "tundra"],
			choicesNotInMenu : true,
			"desert" : {
				name : "Storm Soul: Desert",
				description : desc([
					"I have resistance to fire damage and don't suffer the effects of extreme heat",
					"As an action, I can set fire to an unattended flammable object I touch"
				]),
				action : [["action", " (ignite)"]],
				dmgres : ["Fire"],
				savetxt : { immune : ["effects of extreme heat"] }
			},
			"sea" : {
				name : "Storm Soul: Sea",
				description : desc([
					"I can breathe underwater and I have 30 ft swim speed",
					"In addition, I have resistance to lightning damage"
				]),
				dmgres : ["Lightning"],
				speed : { swim : { spd : 30, enc : 20 } }
			},
			"tundra" : {
				name : "Storm Soul: Tundra",
				description : desc([
					"I have resistance to cold damage and don't suffer the effects of extreme cold",
					"As an action, I can turn a 5-ft cube of water to ice, which melts after 1 minute",
					"This action fails if there are any creatures within the cube of water"
				]),
				action : [["action", " (freeze)"]],
				dmgres : ["Cold"],
				savetxt : { immune : ["effects of extreme cold"] }
			}
		},
		"subclassfeature10" : {
			name : "Shielding Storm",
			source : [["X", 10]],
			minlevel : 10,
			description : "\n   " + "In rage, creatures of my choice within my Storm Aura also gain Storm Soul resistance",
			choices : ["desert", "sea", "tundra"],
			choicesNotInMenu : true,
			"desert" : {
				name : "Shielding Storm: Desert",
				description : "\n   " + "While raging, creatures of my choice within my Storm Aura also gain resistance to fire"
			},
			"sea" : {
				name : "Shielding Storm: Sea",
				description : "\n   " + "In rage, creatures of my choice within my Storm Aura also gain resistance to lightning"
			},
			"tundra" : {
				name : "Shielding Storm: Tundra",
				description : "\n   " + "While raging, creatures of my choice within my Storm Aura also gain resistance to cold"
			}
		},
		"subclassfeature14" : {
			name : "Raging Storm",
			source : [["X", 11]],
			minlevel : 14,
			description : "\n   " + 'Use the "Choose Feature" button above to select the effect',
			choices : ["desert", "sea", "tundra"],
			choicesNotInMenu : true,
			"desert" : {
				name : "Raging Storm: Desert",
				description : desc([
					"As a reaction when hit by a creature in my Storm Aura, I can have it make a Dex save",
					"On a failed save, the attacker takes fire damage equal to half my barbarian level",
					"My Storm Herald features have DC 8 + my Proficiency Bonus + my Constitution modifier"
				]),
				action : [["reaction", " (if hit)"]],
				additional : levels.map(function (n) { return n < 14 ? "" : Math.floor(n/2) + " fire damage"; })
			},
			"sea" : {
				name : "Raging Storm: Sea",
				description : desc([
					"As a reaction when I hit a creature in my Storm Aura, I can have it make a Str save",
					"On a failed save, the creature is knocked prone, as if struck by a wave"
				]),
				action : [["reaction", " (with attack)"]]
			},
			"tundra" : {
				name : "Raging Storm: Tundra",
				description : desc([
					"Whenever I activate my Storm Aura, I can choose a creature in my aura that I can see",
					"It must make a Str save or have its speed reduced to 0 until the start of my next turn",
					"My Storm Herald features have DC 8 + my Proficiency Bonus + my Constitution modifier"
				])
			}
		}
	}
});
AddSubClass("barbarian", "zealot", {
	regExpSearch : /zealot/i,
	subname : "Path of the Zealot",
	source : [["X", 11]],
	fullname : "Zealot",
	features : {
		"subclassfeature3" : {
			name : "Divine Fury",
			source : [["X", 11]],
			minlevel : 3,
			description : desc([
				"While raging, the first creature I hit with a weapon attack in my turn gets extra damage",
				"This is necrotic or radiant damage equal to 1d6 + half my barbarian level",
				'Choose a damage type using the "Choose Feature" button above'
			]),
			additional : levels.map(function (n) { return n < 3 ? "" : "+1d6+" + Math.floor(n/2) + " damage"; }),
			choices : ["Necrotic Damage", "Radiant Damage"],
			"necrotic damage" : {
				name : "Divine Fury",
				description : desc([
					"While raging, the first creature I hit with a weapon attack in my turn gets extra damage",
					"It takes an extra 1d6 + half my barbarian level worth of necrotic damage"
				]),
				additional : levels.map(function (n) { return n < 3 ? "" : "+1d6+" + Math.floor(n/2) + " necrotic damage"; })
			},
			"radiant damage" : {
				name : "Divine Fury",
				description : desc([
					"While raging, the first creature I hit with a weapon attack in my turn gets extra damage",
					"It takes an extra 1d6 + half my barbarian level worth of radiant damage"
				]),
				additional : levels.map(function (n) { return n < 3 ? "" : "+1d6+" + Math.floor(n/2) + " radiant damage"; })
			},
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (!v.isSpell && classes.known.barbarian && classes.known.barbarian.level > 2 && (/\brage\b/i).test(v.WeaponTextName)) {
							var theDMG = GetFeatureChoice('class', 'barbarian', 'subclassfeature3');
							if (!theDMG) return;
							fields.Description += (fields.Description ? '; ' : '') + '+1d6+' + Math.floor(classes.known.barbarian.level / 2) + ' ' + GetFeatureChoice('class', 'barbarian', 'subclassfeature3') + ' on first hit each turn';
						};
					},
					"If I include the word 'Rage' in a melee weapon's name, it will show in its description that its first hit does extra damage."
				]
			}
		},
		"subclassfeature3.1" : {
			name : "Warrior of the Gods",
			source : [["X", 11]],
			minlevel : 3,
			description : "\n   " + "Spells restoring me to life (not undeath or anything else) don't require material comp."
		},
		"subclassfeature6" : {
			name : "Fanatical Focus",
			source : [["X", 11]],
			minlevel : 6,
			description : desc([
				"When I fail a saving throw while raging, I can reroll it and must use the new roll",
				"I can use this ability only once per rage"
			]),
			usages : 1,
			recovery : "rage"
		},
		"subclassfeature10" : {
			name : "Zealous Presence",
			source : [["X", 11]],
			minlevel : 10,
			description : desc([
				"As a bonus action, I choose up to 10 creatures within 60 ft that can hear my battle cry",
				"These creatures gain adv. on attacks and saves until the start of my next turn"
			]),
			usages : 1,
			recovery : "long rest",
			action : [["bonus action", ""]]
		},
		"subclassfeature14" : {
			name : "Rage Beyond Death",
			source : [["X", 11]],
			minlevel : 14,
			description : desc([
				"While raging, having 0 hit points doesn't knock me unconscious",
				"I still must make death saves, and I suffer the normal effects of taking damage",
				"I only die due to failed death saves if my rage ends while I'm at 0 HP"
			])
		}
	}
});

// Add 3 subclasses for the Bard
AddSubClass("bard", "college of glamour", {
	regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*glamour).*$/i,
	subname : "College of Glamour",
	source : [["X", 14]],
	features : {
		"subclassfeature3" : {
			name : "Mantle of Inspiration",
			source : [["X", 14]],
			minlevel : 3,
			description : desc([
				"As a bonus action, I expend one Bardic Inspiration die to aid those within 60 ft of me",
				"My Cha mod (min 1) of creatures that I can see and can see me gain temporary HP",
				"They can immediately use a reaction to move their speed, without opportunity attacks"
			]),
			additional : levels.map(function (n) { return n < 3 ? "" : "1 inspiration die; " + (n < 5 ? 5 : n < 10 ? 8 : n < 15 ? 11 : 14) + " temp HP"; }),
			action : [["bonus action", ""]]
		},
		"subclassfeature3.1" : {
			name : "Enthralling Performance",
			source : [["X", 14]],
			minlevel : 3,
			recovery : "short rest",
			usages : 1,
			description : desc([
				"By performing for at least 1 minute, I can charm humanoids within 60 ft of me",
				"After the performance, my Cha mod (min 1) number of targets must make a Wis save",
				"On a fail, a target is charmed for 1 hour; If success, it doesn't knows I tried to charm it",
				"While charmed, the target idolizes me, hinders those opposing me, and avoids violence",
				"This lasts until a target takes damage, I attack it, or if it sees me attacking its allies"
			])
		},
		"subclassfeature6" : {
			name : "Mantle of Majesty",
			source : [["X", 14]],
			minlevel : 6,
			recovery : "long rest",
			usages : 1,
			action : [["bonus action", ""]],
			description : desc([
				"As a bonus action, I appear unearthly beautiful while I concentrate, up to 1 minute",
				"At the same time, and as a bonus action during, I can cast Command without a spell slot",
				"Creatures charmed by me automatically fail their saves against these Command spells"
			]),
			spellcastingBonus : [{
				name : "Mantle of Majesty",
				spells : ["command"],
				selection : ["command"],
				firstCol : 'oncelr'
			}],
			spellChanges : {
				"command" : {
					time : "1 bns",
					description : "1 crea save or follow one word command, e.g. approach, drop, flee, halt",
					changes : "Using my Mantle of Majesty class feature, I can cast Command as a bonus action once per long rest without using a spell slot, thus only affect a single target."
				}
			}
		},
		"subclassfeature14" : {
			name : "Unbreakable Majesty",
			source : [["X", 14]],
			minlevel : 14,
			recovery : "short rest",
			usages : 1,
			action : [["bonus action", ""]],
			description : desc([
				"As a bonus action, I gain a magically majestic presence for 1 min or until incapacitated",
				"During this, the first time a creature attacks me each turn they must make a Cha save",
				"If failed, it can't attack me this turn and must choose another target or lose its attack",
				"If successful, it can attack, but has disadv. on all saves against my spells on my next turn"
			])
		}
	}
});
AddSubClass("bard", "college of swords", {
	regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*\bswords?\b).*$/i,
	subname : "College of Swords",
	source : [["X", 15]],
	attacks : [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiencies",
			source : [["X", 15]],
			minlevel : 3,
			description : desc([
				"I gain proficiency with medium armor and scimitars",
				"My bardic spellcasting focus can be any simple or martial weapon I'm proficient with"
			]),
			armorProfs : [false, true, false, false],
			weaponProfs : [false, false, ["scimitar"]]
		},
		"subclassfeature3.1" : {
			name : "Fighting Style",
			source : [["X", 15]],
			minlevel : 3,
			description : "\n   " + 'Select a Fighting Style for the college of swords using the "Choose Feature" button above',
			choices : ["Dueling", "Two-Weapon Fighting"],
			"dueling" : FightingStyles.dueling,
			"two-weapon fighting" : FightingStyles.two_weapon
		},
		"subclassfeature3.2" : {
			name : "Blade Flourish",
			source : [["X", 15]],
			minlevel : 3,
			description : desc([
				"When I take the Attack action on my turn, I gain bonus speed and special attack options",
				"I gain +10 ft to my walking speed until the end of the current turn",
				"Once per turn when I hit with a weapon attack, I can expend a Bardic Inspiration die",
				"The roll of that die is added to the weapon's damage, in addition to one of the following:",
				"\u2022 Defensive Flourish: the result is also added to my AC until the start of my next turn",
				"\u2022 Slashing Flourish: the extra damage is also dealt to any of my choosing in 5 ft of me",
				"\u2022 Mobile Flourish: the target is also pushed 5 plus the die result in feet away from me",
				"  As a reaction after this push, I can move my speed to a space within 5 ft of the target"
			])
		},
		"subclassfeature14" : {
			name : "Master Flourish",
			source : [["X", 16]],
			minlevel : 14,
			description : "\n   " + "When I do a Blade Flourish, I can use a d6 instead of expending a Bardic Inspiration die"
		}
	}
});
AddSubClass("bard", "college of whispers", {
	regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*whispers).*$/i,
	subname : "College of Whispers",
	source : [["X", 16]],
	features : {
		"subclassfeature3" : {
			name : "Psychic Blades",
			source : [["X", 16]],
			minlevel : 3,
			description : desc([
				"When I hit a creature with a weapon attack, I can expend one use of Bardic Inspiration",
				"If so, the attack does extra psychic damage; I can do so only once per round, on my turn"
			]),
			additional : levels.map(function (n) { return n < 3 ? "" : "1 Bardic Inspiration for +" + (n < 5 ? 2 : n < 10 ? 3 : n < 15 ? 5 : 8) + "d6 damage"; })
		},
		"subclassfeature3.1" : {
			name : "Words of Terror",
			source : [["X", 16]],
			minlevel : 3,
			recovery : "short rest",
			usages : 1,
			description : desc([
				"By speaking privately with a humanoid for at least 1 minute, I can try to inspire terror",
				"After the talk, it must make a Wis save or be frightened of me or someone of my choice",
				"If the save is successful, the target doesn't know I tried to frighten it",
				"This lasts for 1 hour, or until it sees its allies or itself being attacked or damaged"
			])
		},
		"subclassfeature6" : {
			name : "Mantle of Whispers",
			source : [["X", 16]],
			minlevel : 6,
			recovery : "short rest",
			usages : 1,
			action : [["reaction", ""]],
			description : desc([
				"As a reaction when a humanoid dies within 30 ft of me, I can capture its shadow",
				"As an action, I can use it to make me look just like the dead person did while it was alive",
				"While disguised, I know general information about it and its memories, but not its secrets",
				"Others can see through the disguise with a Wis (Insight) check vs. my Cha (Deception) +5",
				"A shadow lasts until used or next long rest; The disguise ends as a bonus action or 1 hour"
			]),
			action : [['action', 'Shadow Disguise (start)'], ['bonus action', 'Shadow Disguise (end)']]
		},
		"subclassfeature14" : {
			name : "Shadow Lore",
			source : [["X", 16]],
			minlevel : 14,
			recovery : "long rest",
			usages : 1,
			action : [["action", ""]],
			description : desc([
				"As an action, I whisper to a creature within 30 ft that can hear and understand me",
				"Only the target can hear me; It must make a Wis save or be charmed by me for 8 hours",
				"If failed, it thinks I know its most mortifying secret, otherwise it only hears mumbling",
				"While charmed, the target obeys my commands, but won't fight or risk its life for me",
				"This lasts for 8 hours, or until I or my allies attack it, damage it, or have it make a save"
				//"When the effect ends, the target has no idea why it was so afraid of me"
			])
		}
	}
});

// Add 2 subclasses for the Cleric
AddSubClass("cleric", "forge domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(forge|forgery|blacksmith)).*$/i,
	subname : "Forge Domain",
	source : [["X", 18]],
	spellcastingExtra : ["identify", "searing smite", "heat metal", "magic weapon", "elemental weapon", "protection from energy", "fabricate", "wall of fire", "animate objects", "creation"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Proficiency",
			source : [["X", 19]],
			minlevel : 1,
			description : "\n   " + "I gain proficiency with heavy armor and smith's tools",
			armorProfs : [false, false, true, false],
			toolProfs : ["Smith's tools"]
		},
		"subclassfeature1.1" : {
			name : "Blessing of the Forge",
			source : [["X", 19]],
			minlevel : 1,
			action : [["action", ""]],
			usages : 1,
			recovery : "long rest",
			description : desc([
				"At the end of a long rest, I can imbue magic into a nonmagical weapon or armor",
				"It becomes magical: +1 AC if armor, or +1 to attack and damage rolls if a weapon",
				"This lasts until the end of my next long rest or until I die"
			])
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Artisan's Blessing",
			source : [["X", 19]],
			minlevel : 2,
			description : desc([
				"With an hour-long ritual, I can craft a nonmagical item that is at least part metal",
				"Including: suit of armor, simple or martial weapon, set of tools, 10 pieces of ammunition",
				"The creation can be worth up to 100 gp, and I must expend metals of equal value to it",
				"The metals irretrievably coalesce into the new item, forming even nonmetal parts of it",
				"The item can be an exact duplicate of a nonmagical item if I possess the original",
				"The item comes into existence at the end of the hour in an unoccupied space within 5 ft"
			])
		},
		"subclassfeature6" : {
			name : "Soul of the Forge",
			source : [["X", 19]],
			minlevel : 6,
			description : "\n   " + "I gain resistance to fire damage and +1 to AC while wearing medium or heavy armor",
			dmgres : ["Fire"],
			extraAC : {
				mod : 1,
				text : "I gain a +1 bonus to AC while wearing Medium or Heavy armor.",
				stopeval : function (v) { return !v.mediumArmor && !v.heavyArmor; }
			}
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : [["X", 19]],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
			additional : levels.map(function (n) {
				if (n < 8) return "";
				return "+" + (n < 14 ? 1 : 2) + "d8 fire damage";
			}),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.cleric && v.isWeapon) {
							fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 fire damage';
						}
					},
					"Once per turn, I can have one of my weapon attacks that hit do extra fire damage."
				]
			}
		},
		"subclassfeature17" : {
			name : "Saint of Forge and Fire",
			source : [["X", 19]],
			minlevel : 17,
			description : desc([
				"I gain immunity to fire damage",
				"When wearing heavy armor, I'm resistant to nonmagical bludg./piercing/slashing damage"
			]),
			savetxt : { immune : ["fire"] },
			dmgres : [["Bludgeoning", "Bludg. (nonmagical)"], ["Piercing", "Pierc. (nonmagical)"], ["Slashing", "Slash. (nonmagical)"]]
		}
	}
});
AddSubClass("cleric", "grave domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*grave).*$/i,
	subname : "Grave Domain",
	source : [["X", 19]],
	spellcastingExtra : ["bane", "false life", "gentle repose", "ray of enfeeblement", "revivify", "vampiric touch", "blight", "death ward", "antilife shell", "raise dead"],
	features : {
		"subclassfeature1" : {
			name : "Circle of Mortality",
			source : [["X", 20]],
			minlevel : 1,
			action : [["bonus action", ""]],
			description : desc([
				"Spells I cast to heal a living creature at 0 HP have their dice count as their max result",
				"I learn Spare the Dying, which I can cast as a bonus action with a range of 30 ft"
			]),
			spellcastingBonus : [{
				name : "Circle of Mortality",
				spells : ["spare the dying"],
				selection : ["spare the dying"],
				firstCol : 'atwill'
			}],
			spellChanges : {
				"spare the dying" : {
					time : "1 bns",
					range : "30 ft",
					changes : "I can cast Spare the Dying as a bonus action instead of an action, and it has a range of 30 ft instead of touch."
				}
			}
		},
		"subclassfeature1.1" : {
			name : "Eyes of the Grave",
			source : [["X", 20]],
			minlevel : 1,
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
			description : desc([
				"As an action, I sense undead within 60 ft that aren't protected from divination magic",
				"Until the end of my next turn, I sense the location of any undead not behind total cover"
			])
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Path to the Grave",
			source : [["X", 20]],
			minlevel : 2,
			action : [["action", ""]],
			description : desc([
				"As an action, I can curse a creature within 30 ft until the end of my next turn",
				"It is vulnerable to all the damage from the next attack by me or my allies that hits it"
			])
		},
		"subclassfeature6" : {
			name : "Sentinel at Death's Door",
			source : [["X", 20]],
			minlevel : 6,
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
			action : [["reaction", ""]],
			description : "\n   " + "As a reaction, I turn a critical hit to me or an ally I see within 30 ft to a normal hit"
		},
		"subclassfeature8" : {
			name : "Potent Spellcasting",
			source : [["X", 20]],
			minlevel : 8,
			description : desc("I add my Wisdom modifier to the damage I deal with my cleric cantrips"),
			calcChanges : GenericClassFeatures["potent spellcasting"].calcChanges
		},
		"subclassfeature17" : {
			name : "Keeper of Souls",
			source : [["X", 20]],
			minlevel : 17,
			description : desc([
				"Once per round, if I'm not incapacitated, I can manipulate the energy of the dying",
				"When an enemy I can see dies within 60 ft of me, I or an ally within 60 ft regain HP",
				"The HP regained is equal to the enemy's number of Hit Dice"
			])
		}
	}
});

// Add 2 subclasses for the Druid
AddSubClass("druid", "circle of dreams", {
	regExpSearch : /^(?=.*(druid|shaman))(?=.*\bdreams\b).*$/i,
	subname : "Circle of Dreams",
	source : [["X", 22]],
	features : {
		"subclassfeature2" : {
			name : "Balm of the Summer Court",
			source : [["X", 22]],
			minlevel : 2,
			description : desc([
				"I have a pool of fey energy represented by a number of d6s equal to my druid level",
				"As a bonus action, I can spend dice to heal an ally within 120 ft of me that I can see",
				"I can spend up to half my druid level worth of dice from the pool at once",
				"The ally heals an amount equal to the total rolled and gains 1 temp HP per die spent"
			]),
			usages : levels.map(function (n) { return n < 2 ? "" : n + "d6 per "; }),
			recovery : "long rest",
			action : [["bonus action", ""]]
		},
		"subclassfeature6" : {
			name : "Hearth of Moonlight and Shadow",
			source : [["X", 22]],
			minlevel : 6,
			description : desc([
				"At the start of a rest, I can create a 30-ft radius invisible magical sphere",
				"The sphere extends from a point in space I touch, but doesn't extend through total cover",
				"Within this area, my allies and I gain +5 on Wis (Perception) and Dex (Stealth) checks",
				"Also, any light from open flames that are in the sphere is invisible from outside the area",
				"This effect lasts until the end of the rest or when I leave the sphere"
			])
		},
		"subclassfeature10" : {
			name : "Hidden Paths",
			source : [["X", 22]],
			minlevel : 10,
			description : desc([
				"As a bonus action, I can teleport myself up to 60 ft to a spot I can see",
				"As an action, I can teleport a willing ally I touch up to 30 ft to a spot I can see"
			]),
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
			action : [["bonus action", ""], ['action', ' (on ally)']]
		},
		"subclassfeature14" : {
			name : "Walker in Dreams",
			source : [["X", 23]],
			minlevel : 14,
			usages : 1,
			recovery : "long rest",
			description : desc([
				"When I finish a short rest, I can cast either Dream, Scrying, or Teleportation Circle",
				"This doesn't require a spell slot or material components; Dream uses me as the messenger",
				"Teleportation Circle connects to the last place I finished a long rest, if on the same plane"
			]),
			spellcastingBonus : [{
				name : "Walker in Dreams",
				spells : ["dream"],
				selection : ["dream"],
				firstCol : 'oncelr'
			}, {
				name : "Walker in Dreams",
				spells : ["scrying"],
				selection : ["scrying"],
				firstCol : 'oncelr'
			}, {
				name : "Walker in Dreams",
				spells : ["teleportation circle"],
				selection : ["teleportation circle"],
				firstCol : 'oncelr'
			}],
			spellChanges : {
				"dream" : {
					components : "V,S",
					compMaterial : "",
					changes : "Using Walker in Dreams, I can cast either Dream, Scrying, or Teleportation Circle once per long rest without requiring material components."
				},
				"scrying" : {
					components : "V,S",
					compMaterial : "",
					description : "1 crea save or sensor follows it around; or create sensor in familiar location; see book",
					changes : "Using Walker in Dreams, I can cast either Dream, Scrying, or Teleportation Circle once per long rest without requiring material components."
				},
				"teleportation circle" : {
					components : "V",
					compMaterial : "",
					description : "Create a circle to teleport to the place where I finished my last long rest, if on the same plane; see book",
					changes : "Using Walker in Dreams, I can cast either Dream, Scrying, or Teleportation Circle once per long rest without requiring material components.\n \u2022 The teleportation circle brings me back to the place where I finished my last long rest."
				}
			}
		}
	}
});
AddSubClass("druid", "circle of the shepherd", {
	regExpSearch : /^(?=.*(druid|shaman))(?=.*shepherd).*$/i,
	subname : "Circle of the Shepherd",
	source : [["X", 23]],
	features : {
		"subclassfeature2" : {
			name : "Speech of the Woods",
			source : [["X", 23]],
			minlevel : 2,
			description : desc([
				"I can talk with beasts, they understand me and I them, to the limit of their intelligence",
				"This doesn't automatically make me friends with all beasts; Additionally, I learn Sylvan"
			]),
			languageProfs : ["Sylvan"]
		},
		"subclassfeature2.1" : {
			name : "Spirit Totem",
			source : [["X", 23]],
			minlevel : 2,
			description : desc([
				"As a bonus action, I can summon, or move, a spirit to a point I can see within 60 ft",
				"It is a spectral form of a Bear, Hawk, or Unicorn (my choice), with a 30-ft radius aura",
				"It is incorporeal, immobile, doesn't counts as a creature or object, and persists for 1 min",
				"The spirit persists for 1 minute or until I'm incapacitated",
				"\u2022 Bear: my allies and I, if in the aura, immediately gain 5 + my druid level in temp HP",
				"  While in the aura, my allies and I gain advantage on Strength checks and saves",
				"\u2022 Hawk: As a reaction, I can grant advantage on an attack vs. a target in the aura",
				"  While in the aura, my allies and I gain advantage on Wisdom (Perception) checks",
				"\u2022 Unicorn: my allies and I gain advantage on ability checks to detect targets in the aura",
				"  When I cast a healing spell with a spell slot, allies in the aura heal my druid level in HP"
			]),
			usages : 1,
			recovery : "short rest",
			action : [["bonus action", ""]]
		},
		"subclassfeature6" : {
			name : "Mighty Summoner",
			source : [["X", 24]],
			minlevel : 6,
			description : "\n   " + "Beasts or Fey I summon with spells get +2 HP per HD and their attacks count as magical",
			calcChanges : {
				spellAdd : [
					function (spellKey, spellObj, spName) {
						switch (spellKey) {
							case "conjure animals" :
							case "conjure fey" :
								spellObj.description += "; each +2 HP/HD, magical natural attacks";
								return true;
							case "conjure woodland beings" :
								spellObj.description = spellObj.description.replace(/fey.*/, "fey; obeys commands if its align. agrees; breaks free if break conc.; +2 HP/HD, magic atks");
								return true;
						}
					},
					"When I use a spell that summons beast or fey creatures, those summons have +2 HP per HD and their attacks count as magical."
				]
			}
		},
		"subclassfeature10" : {
			name : "Guardian Spirit",
			source : [["X", 24]],
			minlevel : 10,
			description : "\n   " + "When a Beast or Fey that I summoned ends its turn in my Spirit Totem aura, it heals",
			additional : levels.map(function (n) { return n < 10 ? "" : "heals " + Math.floor(n / 2) + " HP"; })
		},
		"subclassfeature14" : {
			name : "Faithful Summons",
			source : [["X", 24]],
			minlevel : 14,
			description : desc([
				"When I am reduced to 0 HP or incapacitated against my will, I can cast Conjure Animals",
				"This is done as if using a 9th-level spell slot to summon 4 beast of my choice up to CR 2",
				"They appear within 20 ft of me, last 1 hour, and protect me from harm and attack foes"
			]),
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : [{
				name : "Faithful Summons",
				spells : ["conjure animals"],
				selection : ["conjure animals"],
				firstCol : "oncelr"
			}],
			spellChanges : {
				"conjure animals" : {
					nameShort : "Conjure Animals (level 9)",
					range : "20 ft",
					duration : "1 h",
					description : "Summon 4 CR 2 beasts; protect me from harm and attack foes",
					changes : "Using my Faithful Summons class feature when I'm reduced to 0 HP, I can cast Conjure Animals as if using a 9th-level spell slot. This then summons 4 beast of my choice up to CR 2 within 20 ft of me without needing concentration."
				}
			}
		}
	}
});

// Add 3 subclasses for the Fighter
AddSubClass("fighter", "arcane archer", {
	regExpSearch : /^(?=.*arcane)(?=.*archer).*$/i,
	subname : "Arcane Archer",
	source : [["X", 28]],
	fullname : "Arcane Archer",
	abilitySave : 4,
	features : {
		"subclassfeature3" : {
			name : "Arcane Archer's Lore",
			source : [["X", 28]],
			minlevel : 3,
			description : desc([
				"I gain proficiency with either the Arcana or Nature skill",
				"I also learn either the Prestidigitation or the Druidcraft cantrip"
			]),
			skillstxt : "Arcana or Nature",
			spellcastingBonus : [{
				name : "Arcane Archer's Lore",
				spells : ["druidcraft", "prestidigitation"]
			}]
		},
		"subclassfeature3.1" : {
			name : "Arcane Shot",
			source : [["X", 28]],
			minlevel : 3,
			description : desc([
				"I can unleash magical effects when I fire an arrow from a short- or longbow",
				"I can use this once per turn as part of the Attack action, after an attack hits",
				"I know a number of Arcane Shot Options and learn additional at certain levels",
				'Use the "Choose Feature" button above to add Arcane Shots Options to the third page'
			]),
			usages : 2,
			recovery : "short rest",
			additional : levels.map( function(n) { return n < 3 ? "" : (n < 7 ? 2 : n < 10 ? 3 : n < 15 ? 4 : n < 18 ? 5 : 6) + " options known"; }),
			extraname : "Arcane Shot Option",
			extrachoices : ["Banishing Arrow [Abjuration]", "Beguiling Arrow [Enchantment]", "Bursting Arrow [Evocation]", "Enfeebling Arrow [Necromancy]", "Grasping Arrow [Conjuration]", "Piercing Arrow [Transmutation]", "Seeking Arrow [Divination]", "Shadow Arrow [Illusion]"],
			extraTimes : levels.map(function (n) {
				return n < 3 ? 0 : n < 7 ? 2 : n < 10 ? 3 : n < 15 ? 4 : n < 18 ? 5 : 6;
			}),
			"banishing arrow [abjuration]" : {
				name : "Banishing Arrow [Abjuration]",
				source : [["X", 29]],
				description : desc([
					"The target makes a Cha save or is banished to the Feywild until the end of its next turn",
					"While banished, its speed is 0 and is incapacitated; It re-appearing in the same spot",
					"When I reach 18th level, this Arcane Shot Option also does an extra 2d6 force damage"
				]),
				additional : levels.map( function(n) { return n < 18 ? "" : "+2d6 force damage"; })
			},
			"beguiling arrow [enchantment]" : {
				name : "Beguiling Arrow [Enchantment]",
				source : [["X", 29]],
				description : desc([
					"The target takes extra psychic damage and must succeed on a Wisdom save",
					"If failed, it is charmed by one of my allies within 30 ft of it that I choose",
					"This lasts until my next turn starts or until the chosen ally attacks the target in any way"
				]),
				additional : levels.map( function(n) { return n < 3 ? "" : "+" + (n < 18 ? 2 : 4) + "d6 damage"; })
			},
			"bursting arrow [evocation]" : {
				name : "Bursting Arrow [Evocation]",
				source : [["X", 29]],
				description : "\n   " + "The target, in addition to the shot, and all creatures within 10 ft of it take damage",
				additional : levels.map( function(n) { return n < 3 ? "" : "+" + (n < 18 ? 2 : 4) + "d6 force damage"; })
			},
			"enfeebling arrow [necromancy]" : {
				name : "Enfeebling Arrow [Necromancy]",
				source : [["X", 29]],
				description : desc([
					"The target takes extra necrotic damage and must make a Constitution save",
					"If failed, the damage of the target's attacks are halved until the start of my next turn"
				]),
				additional : levels.map( function(n) { return n < 3 ? "" : "+" + (n < 18 ? 2 : 4) + "d6 necrotic damage"; })
			},
			"grasping arrow [conjuration]" : {
				name : "Grasping Arrow [Conjuration]",
				source : [["X", 29]],
				description : desc([
					"The target takes extra poison damage as brambles wrap around it for 1 minute",
					"The brambles give it -10 ft speed and do it slashing damage every round it moves",
					"These can be removed by it or another as an action with Strength (Athletics) vs. my DC"
				]),
				additional : levels.map( function(n) { return n < 3 ? "" : (n < 18 ? 2 : 4) + "d6 poison/slash. damage"; })
			},
			"piercing arrow [transmutation]" : {
				name : "Piercing Arrow [Transmutation]",
				source : [["X", 29]],
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
				source : [["X", 30]],
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
				source : [["X", 30]],
				description : desc([
					"The target takes extra psychic damage and must succeed on a Wisdom save",
					"If failed, the target can't see anything beyond 5 ft until the end of my next turn"
				]),
				additional : levels.map( function(n) { return n < 3 ? "" : "+" + (n < 18 ? 2 : 4) + "d6 psychic damage"; })
			}
		},
		"subclassfeature7" : {
			name : "Magic Arrow",
			source : [["X", 28]],
			minlevel : 7,
			description : "\n   " + "Whenever I fire a nonmagical arrow from a short- or longbow, I can make it magical"
		},
		"subclassfeature7.1" : {
			name : "Curving Shot",
			source : [["X", 28]],
			minlevel : 7,
			description : desc([
				"Once per turn when I miss with a magic arrow, I can use a bonus action to redirect it",
				"I reroll the attack against a different target within 60 ft of the original target"
			]),
			action : [["bonus action", ""]]
		},
		"subclassfeature15" : {
			name : "Ever-Ready Shot",
			source : [["X", 28]],
			minlevel : 15,
			description : "\n   " + "I regain one use of Arcane Shot if I have no more remaining when I roll initiative"
		}
	}
});
AddSubClass("fighter", "cavalier", {
	regExpSearch : /cavalier/i,
	subname : "Cavalier",
	source : [["X", 30]],
	fullname : "Cavalier",
	abilitySave : 1,
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiency",
			source : [["X", 30]],
			minlevel : 3,
			description : desc([
				"I gain proficiency with Animal Handling, History, Insight, Performance, or Persuasion",
				'Alternatively, I learn one language; Use the "Choose Feature" button above for this'
			]),
			choices : ["Language proficiency", "Skill proficiency: Animal Handling, History, Insight, Performance, or Persuasion"],
			"language proficiency" : {
				name : "Bonus Proficiency",
				description : "\n   " + "I learn one language of my choice",
				languageProfs : [1]
			},
			"skill proficiency: animal handling, history, insight, performance, or persuasion" : {
				name : "Bonus Proficiency",
				description : "\n   " + "I gain proficiency with Animal Handling, History, Insight, Performance, or Persuasion",
				skillstxt : "Choose one from: Animal Handling, History, Insight, Performance, or Persuasion"
			}
		},
		"subclassfeature3.1" : {
			name : "Born in the Saddle",
			source : [["X", 30]],
			minlevel : 3,
			description : desc([
				"I have advantage on saves to avoid falling off my mount, and land on my feet if I fail",
				"Mounting or dismounting a creature costs me only 5 ft of movement instead of half"
			]),
			savetxt : { adv_vs : ["falling off my mount"] }
		},
		"subclassfeature3.2" : {
			name : "Unwavering Mark",
			source : [["X", 30]],
			minlevel : 3,
			description : desc([
				"If I hit a creature with a melee weapon attack, I mark it until the end of my next turn",
				"While it is within 5 ft of me, a marked target has disadv. on attacks not directed at me",
				"If it damages anybody but me, I can make a special melee attack vs. it in my next turn",
				"This takes a bonus action, but has adv. and adds half my fighter level to the damage",
				"A mark ends early if I'm incapacitated, die, or somebody else marks the target"
			]),
			usages : "Strength modifier per ",
			usagescalc : "event.value = Math.max(1, What('Str Mod'));",
			recovery : "long rest",
			additional : levels.map(function (n) {
				return n < 3 ? "" : "+" + Math.floor(n/2) + " damage";
			}),
			calcChanges : {
				atkCalc : [
					function (fields, v, output) {
						if (v.isMeleeWeapon && classes.known.fighter && classes.known.fighter.level > 2 && (/\b(unwavering.?mark|marked)\b/i).test(v.WeaponTextName)) {
							output.extraDmg += Math.floor(classes.known.fighter.level / 2);
						};
					},
					"If I include the words 'Unwavering Mark' or 'Marked' in the name of a melee weapon, it gets half my fighter level added to its Damage."
				]
			}
		},
		"subclassfeature7" : {
			name : "Warding Maneuver",
			source : [["X", 30]],
			minlevel : 7,
			description : desc([
				"As a reaction when I or a creature within 5 ft is hit, I can try to fend off the strike",
				"I add 1d8 to the target's AC; If the attack still hits, the target has resistance against it",
				"I can only do this while wielding a melee weapon or a shield"
			]),
			usages : "Constitution modifier per ",
			usagescalc : "event.value = Math.max(1, What('Con Mod'));",
			recovery : "long rest",
			action : [["reaction", ""]],
		},
		"subclassfeature10" : {
			name : "Hold the Line",
			source : [["X", 30]],
			minlevel : 10,
			description : desc([
				"Creatures provoke opportunity attacks when moving 5 ft or more while within my reach",
				"If I hit an opportunity attack, the target's speed is reduced to 0 until the end of the turn"
			])
		},
		"subclassfeature15" : {
			name : "Ferocious Charger",
			source : [["X", 31]],
			minlevel : 15,
			description : desc([
				"If I hit a creature after moving 10 ft in a straight line, it must make a Strength save",
				"If failed, the target is knocked prone; I can do this only once per turn"
			])
		},
		"subclassfeature18" : {
			name : "Vigilant Defender",
			source : [["X", 31]],
			minlevel : 18,
			description : desc([
				"I can make opportunity attacks without using my reaction",
				"I can do this only once on every creature's turn, except on my own turn",
				"I can't do this on the same turn that I use my normal reaction"
			])
		}
	}
});
AddSubClass("fighter", "samurai", {
	regExpSearch : /samurai/i,
	subname : "Samurai",
	source : [["X", 31]],
	fullname : "Samurai",
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiency",
			source : [["X", 31]],
			minlevel : 3,
			description : desc([
				"I gain proficiency with History, Insight, Performance, or Persuasion",
				'Alternatively, I learn one language; Use the "Choose Feature" button above for this'
			]),
			choices : ["Language proficiency", "Skill proficiency: History, Insight, Performance, or Persuasion"],
			"language proficiency" : {
				name : "Bonus Proficiency",
				description : "\n   " + "I learn one language of my choice",
				languageProfs : [1]
			},
			"skill proficiency: history, insight, performance, or persuasion" : {
				name : "Bonus Proficiency",
				description : "\n   " + "I gain proficiency with History, Insight, Performance, or Persuasion",
				skillstxt : "Choose one from: History, Insight, Performance, or Persuasion"
			}
		},
		"subclassfeature3.1" : {
			name : "Fighting Spirit",
			source : [["X", 31]],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can give myself advantage on weapon attacks and temporary HP",
				"This advantage on weapon attack rolls lasts until the end of my current turn"
			]),
			recovery : "long rest",
			usages : 3,
			additional : levels.map(function (n) { return n < 3 ? "" : (n < 10 ? 5 : n < 15 ? 10 : 15) + " temporary HP"; }),
			action : [["bonus action", ""]]
		},
		"subclassfeature7" : {
			name : "Elegant Courtier",
			source : [["X", 31]],
			minlevel : 7,
			description : desc([
				"I can add my Wisdom modifier to any Charisma (Persuasion) checks I make",
				"I gain proficiency with Wis saves, or if I'm already proficient, either Int or Cha saves"
			]),
			saves : ["Wis"],
			addMod : { type : "skill", field : "Pers", mod : "max(Wis|0)", text : "I can add my Wisdom modifier to any Charisma (Persuasion) checks I make." }
		},
		"subclassfeature10" : {
			name : "Tireless Spirit",
			source : [["X", 31]],
			minlevel : 10,
			description : "\n   " + "I regain one use of Fighting Spirit if I have no more remaining when I roll initiative"
		},
		"subclassfeature15" : {
			name : "Rapid Strike",
			source : [["X", 31]],
			minlevel : 15,
			description : desc([
				"With the Attack action, I can forgo advantage on one attack to make one extra attack",
				"This extra attack is part of the same action; I can do this only once per turn"
			])
		},
		"subclassfeature18" : {
			name : "Strength Before Death",
			source : [["X", 31]],
			minlevel : 18,
			description : desc([
				"If I'm reduced to 0 HP but not killed outright, I can delay falling unconscious",
				"I then immediately take a bonus turn, interrupting the current turn",
				"While I'm at 0 HP, I suffer damage normally and die if I have 3 failed death saves",
				"If I'm still at 0 HP at the end of this bonus turn, I fall unconscious"
			]),
			recovery : "long rest",
			usages : 1
		}
	}
});

// Add 3 subclasses for the Monk
AddSubClass("monk", "way of the drunken master", {
	regExpSearch : /^((?=.*drunken)(?=.*master))|((?=.*drunk)((?=.*(monk|monastic))|((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior)))).*$/i,
	subname : "Way of the Drunken Master",
	source : [["X", 33]],
	fullname : "Drunken Master",
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiencies",
			source : [["X", 34]],
			minlevel : 3,
			description : "\n   " + "I gain proficiency with the Performance skill and brewer's supplies",
			skills : ["Performance"],
			toolProfs : ["Brewer's supplies"]
		},
		"subclassfeature3.1" : {
			name : "Drunken Technique",
			source : [["X", 34]],
			minlevel : 3,
			description : "\n   " + "When using Flurry of Blows, I gain the benefits of a Disengage and +10 ft speed this turn"
		},
		"subclassfeature6" : {
			name : "Tipsy Sway",
			source : [["X", 34]],
			minlevel : 6,
			description : "\n   " + "1 ki point: as a reaction if missed in melee, attacker instead hits other I see within 5 ft",
			additional : "Standing up from prone costs only 5 ft",
			action : [["reaction", ""]]
		},
		"subclassfeature11" : {
			name : "Drunkard's Luck",
			source : [["X", 34]],
			minlevel : 11,
			description : "\n   " + "By spending 2 ki points, I can remove disadv. from an ability check, attack roll, or save",
			additional : "2 ki points"
		},
		"subclassfeature17" : {
			name : "Intoxicated Frenzy",
			source : [["X", 34]],
			minlevel : 17,
			description : "\n   " + "I can make 3 extra attacks with Flurry of Blows if each is used on a different target"
		}
	}
});
// Create the Kensei and its weapon options last, so we benefit of all possible weapons that were added
RunFunctionAtEnd(function () {
	var theKenseiSubclassName = AddSubClass("monk", "way of the kensei", {
		regExpSearch : /kensei/i,
		subname : "Way of the Kensei",
		source : [["X", 34]],
		fullname : "Kensei",
		features : {
			"subclassfeature3" : {
				name : "Path of the Kensei",
				source : [["X", 34]],
				minlevel : 3,
				description : desc([
					"I gain proficiency with either calligrapher's supplies or painter's supplies",
					"Some weapons, that don't have the heavy or special property, are kensei weapons for me",
					"At least one ranged and one melee weapon, more at higher levels (longbow does qualify)",
					"With these: proficient, count as a monk weapons, special bonuses depending on type held:",
					"\u2022 Melee: if I do unarmed strike during an Attack action, +2 AC until my next turn starts",
					"\u2022 Ranged: as a bonus action, ranged weapon attacks deal +1d4 damage in current turn"
				]),
				action : [["bonus action", " (with ranged)"]],
				additional : levels.map( function(n) { return n < 3 ? "" : (n < 6 ? 2 : n < 11 ? 3 : n < 17 ? 4 : 5) + " kensei weapons"; }),
				toolProfs : ["calligrapher's or painter's supplies"],
				extraname : "Kensei Weapon",
				extrachoices : [], // add these dynamically, see below
				extraTimes : levels.map( function(n) { return n < 3 ? 0 : n < 6 ? 2 : n < 11 ? 3 : n < 17 ? 4 : 5; }),
				calcChanges : {
					atkAdd : [
						function (fields, v) {
							var theKenseiWeapons = GetFeatureChoice("class", "monk", "subclassfeature3", true);
							if (theKenseiWeapons.indexOf(v.baseWeaponName) != -1 || ((/kensei/i).test(v.WeaponTextName) && !v.theWea.special && (!(/heavy|special/i).test(fields.Description) || v.baseWeaponName === 'longbow'))) {
								v.theWea.monkweapon = true;
								v.theWea.kenseiweapon = true;
								if (v.isRangedWeapon) {
									fields.Description += (fields.Description ? '; ' : '') + 'As bonus action with Attack action, +1d4 damage';
								};
								fields.Proficiency = true;
							};
						},
						"For the weapons that I select using the \"Choose Feature\" button on the second page or when I include the word 'Kensei' in the name of a weapon that doesn't have the Heavy or Special attribute, or that is a longbow, that weapon gains the same benefits as any other 'Monk Weapon'.\nIn addition, with ranged 'Kensei Weapons', I can take a bonus action to have that hit, and any other hit after that as part of the same action, do +1d4 damage.",
						1
					]
				}
			},
			"ki-empowered strikes" : {
				name : "One with the Blade",
				source : [["X", 34]],
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
				"deft strike" : {
					name : "Deft Strike",
					extraname : "Way of the Kensei 6",
					source : [["X", 35]],
					description : "\n   " + "Once per turn when I hit with a kensei weapon, I can do a martial arts die extra damage",
					additional : "1 ki point"
				},
				"sharpen the blade" : {
					name : "Sharpen the Blade",
					extraname : "Way of the Kensei 11",
					source : [["X", 35]],
					description : desc([
						"As a bonus action, I can grant my kensei weapon a bonus to attack and damage rolls",
						"This bonus is equal to the number of ki points I spend and doesn't stack with magic",
						"This lasts for 1 minute or until I use this feature again"
					]),
					additional : "1 to 3 ki points",
					action : [["bonus action", ""]]
				},
				autoSelectExtrachoices : [{
					extrachoice : "deft strike"
				}, {
					extrachoice : "sharpen the blade",
					minlevel : 11
				}]
			},
			"subclassfeature17" : {
				name : "Unerring Accuracy",
				source : [["X", 35]],
				minlevel : 17,
				description : "\n   " + "Once per turn, if I miss a monk weapon attack on my turn, I can reroll the attack roll"
			}
		}
	});
	var itsFea = ClassSubList[theKenseiSubclassName].features.subclassfeature3;
	for (var weapon in WeaponsList) {
		var aWea = WeaponsList[weapon];
		// skip attacks that are not simple or martial weapons, that have the heavy or special property, are magic weapons, or those that are spells or cantrips
		if (weapon !== "longbow" && (aWea.isMagicWeapon || !(/simple|martial/i).test(aWea.type) || (/heavy|special/i).test(aWea.description) || aWea.special || (/improvised|gear|spell|cantrip/i).test(aWea.list))) continue;
		itsFea.extrachoices.push(aWea.name);
		itsFea[aWea.name.toLowerCase()] = {
			name : aWea.name,
			description : "",
			source : aWea.source,
			weaponProfs : [false, false, [weapon]],
			weaponsAdd : { select : [aWea.name] },
			submenu : ((/simple/i).test(aWea.type) ? "\x1BSimple weapon, " : "Martial weapon, ") + ((/^(?!.*melee).*\d+.*$/i).test(aWea.range) ? "ranged" : "melee"),
			prereqeval : 'testSource("' + weapon + '", WeaponsList["' + weapon + '"], "weapExcl") ? "skip" : true;'
		}
	}
});
// dupl_start
if (!ClassSubList["monk-way of the sun soul"] && (!SourceList.S || SourceList.S.abbreviation.toLowerCase() !== "scag")) {
	// the Way of the Sun Soul subclass is identical to the one in SCAG, so only add if it that one doesn't exist yet
	AddSubClass("monk", "way of the sun soul", {
		regExpSearch : /^(?=.*\bsun)(?=.*\b(soul|spirit))((?=.*(warrior|monk|monastic))|(((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior)))).*$/i,
		subname : "Way of the Sun Soul",
		source : [["S", 131], ["X", 35]],
		features : {
			"subclassfeature3" : {
				name : "Radiant Sun Bolt",
				source : [["S", 131], ["X", 35]],
				minlevel : 3,
				additional : "1 ki point for 2 extra attacks",
				description : desc([
					"I gain a ranged spell attack that I can use as an attack in the Attack action",
					"If I do this and spend 1 ki point, I can make 2 of these attacks as a bonus action"
				]),
				action : [["bonus action", " (2\xD7 with Attack action)"]],
				weaponOptions : [{
					regExpSearch : /^(?=.*radiant)(?=.*(sun|light))(?=.*bolt).*$/i,
					name : "Radiant Sun Bolt",
					source : [["S", 131], ["X", 35]],
					ability : 2,
					type : "Spell",
					damage : [1, 4, "radiant"],
					range : "30 ft",
					description : "If used in an Attack action, spend 1 ki point to use it twice as a bonus action",
					monkweapon : true,
					abilitytodamage : true,
					selectNow : true
				}],
				"searing arc strike" : {
					name : "Searing Arc Strike",
					extraname : "Way of the Sun Soul 6",
					source : [["S", 131], ["X", 35]],
					description : desc([
						"After taking the Attack action, I can cast Burning Hands as a bonus action [PHB 220]",
						"For every additional ki point I spend, Burning hands is cast at 1 higher spell level",
						"The maximum total ki points I can spend for this (including the 2) is half my Monk level"
					]),
					additional : levels.map(function (n) {
						if (n < 3) return "";
						var xtrKi = Math.max(0,Math.floor(n/2) - 2);
						return "2 ki points + max " + xtrKi + " ki point" + (xtrKi == 1 ? "" : "s");
					}),
					action : [["bonus action", " (after Attack action)"]],
					spellcastingBonus : [{
						name : "Searing Arc Strike",
						spells : ["burning hands"],
						selection : ["burning hands"],
						firstCol : 2
					}],
					spellFirstColTitle : "Ki",
					spellChanges : {
						"burning hands" : {
							time : "1 bns",
							description : "3d6+1d6/extra Ki Fire dmg; save halves; unattended flammable objects ignite (ki max 1/2 monk lvl)",
							changes : "After I use the Attack action, I can cast Burning Hands as a bonus action by spending 2 ki points. I can even spend additional ki points to increase its spell level. The total amount of ki points I can spend on it is half my monk level."
						}
					}
				},
				autoSelectExtrachoices : [{
					extrachoice : "searing arc strike",
					minlevel : 6
				}]
			},
			"subclassfeature11" : {
				name : "Searing Sunburst",
				source : [["S", 131], ["X", 35]],
				minlevel : 11,
				description : desc([
					"As an action, anyone in a 20-ft radius light on a point within 150 ft makes a Con save",
					"If failed and not behind opaque total cover, take 2d6 (+ 2d6/ki point) radiant damage"
				]),
				action : [["action", ""]],
				additional : "0 ki points + max 3 ki points",
				weaponOptions : [{
					regExpSearch : /^(?=.*searing)(?=.*sunburst).*$/i,
					name : "Searing Sunburst",
					source : [["S", 131], ["X", 35]],
					ability : 5,
					type : "Spell",
					damage : [2, 6, "radiant"],
					range : "150 ft",
					description : "All in 20-ft radius; Con save - success no damage; +2d6 damage per ki point (max +6d6)",
					abilitytodamage : false,
					dc : true,
					useSpellMod : "monk",
					selectNow : true
				}]
			},
			"subclassfeature17" : {
				name : "Sun Shield",
				source : [["S", 131], ["X", 35]],
				minlevel : 17,
				description : desc([
					"As a reaction, when I'm hit by a melee attack, I can deal 5 + Wis mod radiant damage",
					"I can only do this while my light aura is on; I can turn it on/off as a bonus action"
				]),
				action : [["bonus action", " (start/stop)"], ["reaction", " (hit in melee)"]],
				additional : "30-ft rad bright + 30-ft dim light"
			}
		}
	});
}; // dupl_end

// Add 2 subclasses for the Paladin
AddSubClass("paladin", "oath of conquest", {
	regExpSearch : /^((?=.*(knight tyrant|iron mongers))|((?=.*(conquest|tyranny|tyrant))(((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper))))))).*$/i,
	subname : "Oath of Conquest",
	source : [["X", 37]],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Conquering Presence",
			source : [["X", 38]],
			minlevel : 3,
			description : desc([
				"As an action, all creatures of my choice within a 30-ft radius must make a Wisdom save",
				"If failed, a target is frightened for 1 minute; It can save again at the end of each turn"
			]),
			action : [["action", ""]],
			spellcastingExtra : ["armor of agathys", "command", "hold person", "spiritual weapon", "bestow curse", "fear", "dominate beast", "stoneskin", "cloudkill", "dominate person"]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Guided Strike",
			source : [["X", 38]],
			minlevel : 3,
			description : "\n   " + "When I make an attack roll, I can add a +10 bonus to the roll after seeing the d20 roll"
		},
		"subclassfeature7" : {
			name : "Aura of Conquest",
			source : [["X", 38]],
			minlevel : 7,
			description : desc([
				"Creatures that are frightened of me have their speed reduced to 0 while in my aura",
				"They also take psychic damage whenever they start theirs turn within my aura"
			]),
			additional : levels.map(function (n) {
				if (n < 7) return "";
				return (n < 18 ? 10 : 30) + "-foot aura; " + Math.floor(n / 2) + " psychic damage";
			})
		},
		"subclassfeature15" : {
			name : "Scornful Rebuke",
			source : [["X", 38]],
			minlevel : 15,
			description : desc([
				"Whenever I'm hit with an attack while I'm not incapacitated, the attacker takes damage",
				"This is psychic damage equal to my Charisma modifier (minimum of 1)"
			])
		},
		"subclassfeature20" : {
			name : "Invincible Conqueror",
			source : [["X", 38]],
			minlevel : 20,
			description : desc([
				"As an action, I can gain the following benefits for 1 minute:",
				" - I have resistance to all damage",
				" - I can make an additional attack as part of my Attack action",
				" - My melee weapons score critical hits on a roll of 19 or 20"
			]),
			recovery : "long rest",
			usages : 1,
			action : [["action", ""]]
		}
	}
});
AddSubClass("paladin", "oath of redemption", {
	regExpSearch : /^((?=.*redeemer)|((?=.*redemption)(((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper))))))).*$/i,
	subname : "Oath of Redemption",
	source : [["X", 38]],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Emissary of Peace",
			source : [["X", 39]],
			minlevel : 3,
			description : "\n   " + "As a bonus action, I grant myself +5 on Charisma (Persuasion) checks for 10 minutes",
			action : [["bonus action", ""]],
			spellcastingExtra : ["sanctuary", "sleep", "calm emotions", "hold person", "counterspell", "hypnotic pattern", "otiluke's resilient sphere", "stoneskin", "hold monster", "wall of force"]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Rebuke the Violent",
			source : [["X", 39]],
			minlevel : 3,
			description : desc([
				"As a reaction after a creature within 30 ft attacks and damages another, I can rebuke it",
				"It takes the same damage as it dealt but as radiant damage, with a Wis save to halve it"
			]),
			action : [["reaction", ""]]
		},
		"subclassfeature7" : {
			name : "Aura of the Guardian",
			source : [["X", 39]],
			minlevel : 7,
			description : desc([
				"As a reaction when an ally within my aura takes damage, I instead take the damage",
				"This damage can't be reduced in any way; Other effects might still apply to my ally"
			]),
			additional : levels.map(function (n) { return n < 7 ? "" : (n < 18 ? 10 : 30) + "-foot aura"; }),
			action : [["reaction", ""]]
		},
		"subclassfeature15" : {
			name : "Protective Spirit",
			source : [["X", 39]],
			minlevel : 15,
			description : "\n   " + "At the end of my turn when I'm below half HP and not incapacitated, I regain HP",
			additional : levels.map(function (n) { return n < 15 ? "" : "1d6+" + Math.floor(n/2) + " HP"; })
		},
		"subclassfeature20" : {
			name : "Emissary of Redemption",
			source : [["X", 39]],
			minlevel : 20,
			description : desc([
				"When taking damage from a creature, I take only half and it takes the other half",
				"This stops working on any that I attack or force to make a save, until I have a long rest"
			]),
			dmgres : ["All from creatures"]
		}
	}
});

// Add 3 subclasses for the Ranger
var XGtE_Ranger_Subclass_Gloom_Stalker = AddSubClass("ranger", "gloom stalker", {
	regExpSearch : /^(?=.*gloom)(?=.*stalker).*$/i,
	subname : "Gloom Stalker",
	source : [["X", 41]],
	fullname : "Gloom Stalker",
	features : {
		"subclassfeature3" : {
			name : "Dread Ambusher",
			source : [["X", 42]],
			minlevel : 3,
			description : desc([
				"I can add my Wisdom modifier to my initiative rolls",
				"In the first turn of combat I get +10 ft speed and an extra attack with the Attack action",
				"If I take the Attack action and that extra attack hits, it does +1d8 damage"
			]),
			addMod : { type : "skill", field : "Init", mod : "max(Wis|0)", text : "I can add my Wisdom modifier to my initiative rolls." }
		},
		"subclassfeature3.1" : {
			name : "Gloom Stalker Magic",
			source : [["X", 42]],
			minlevel : 3,
			description : desc([
				"I add a spell to my known spells at level 3, 5, 9, 13, and 17",
				"These count as ranger spells, but do not count against the number of spells I can know"
			]),
			spellcastingExtra : ["disguise self", "rope trick", "fear", "greater invisibility", "seeming"],
			spellcastingExtraApplyNonconform : true
		},
		"subclassfeature3.2" : {
			name : "Umbral Sight",
			source : [["X", 42]],
			minlevel : 3,
			description : desc([
				"I gain 60 ft darkvision, or add 30 ft to darkvision if I already had it because of my race",
				"When I'm in darkness, others gain no benefit from darkvision to detect me"
			]),
			vision : [["Darkvision", "fixed 60"], ["Darkvision", "+30"]]
		},
		"subclassfeature7" : {
			name : "Iron Mind",
			source : [["X", 42]],
			minlevel : 7,
			description : "\n   " + "I gain proficiency with Wis saves, or if I'm already proficient, either Int or Cha saves",
			saves : ["Wis"]
		},
		"subclassfeature11" : {
			name : "Stalker's Flurry",
			source : [["X", 42]],
			minlevel : 11,
			description : "\n   " + "Once on each of my turns when I miss a weapon attack, I can make an extra attack"
		},
		"subclassfeature15" : {
			name : "Shadowy Dodge",
			source : [["X", 42]],
			minlevel : 15,
			description : "\n   " + "As a reaction when I'm attacked without adv., I can impose disadv. on the attack roll",
			action : [["reaction", " (when attacked)"]]
		}
	}
});
var XGtE_Ranger_Subclass_Horizon_Walker = AddSubClass("ranger", "horizon walker", {
	regExpSearch : /^(?=.*horizon)(?=.*walker).*$/i,
	subname : "Horizon Walker",
	source : [["X", 42]],
	fullname : "Horizon Walker",
	features : {
		"subclassfeature3" : {
			name : "Detect Portal",
			source : [["X", 42]],
			minlevel : 3,
			description : "\n   " + "As an action, I sense the distance and direction to the closest planar portal within 1 mile",
			usages : 1,
			recovery : "short rest",
			action : [["action", ""]]
		},
		"subclassfeature3.1" : {
			name : "Horizon Walker Magic",
			source : [["X", 42]],
			minlevel : 3,
			description : desc([
				"I add a spell to my known spells at level 3, 5, 9, 13, and 17",
				"These count as ranger spells, but do not count against the number of spells I can know"
			]),
			spellcastingExtra : ["protection from evil and good", "misty step", "haste", "banishment", "teleportation circle"],
			spellcastingExtraApplyNonconform : true
		},
		"subclassfeature3.2" : {
			name : "Planar Warrior",
			source : [["X", 42]],
			minlevel : 3,
			description : desc([
				"As a bonus action, I choose one creature that I can see within 30 ft of me",
				"All damage from my first weapon attack that hits it on this turn becomes force damage",
				"In addition, that first hit does extra damage"
			]),
			additional : levels.map(function (n) { return n < 3 ? "" : "+" + (n < 11 ? 1 : 2) + "d8 force damage"; }),
			action : [["bonus action", ""]]
		},
		"subclassfeature7" : {
			name : "Ethereal Step",
			source : [["X", 43]],
			minlevel : 7,
			description : "\n   " + "As a bonus action, I can cast the Etherealness spell, which lasts until the end of my turn",
			usages : 1,
			recovery : "short rest",
			spellcastingBonus : [{
				name : "Ethereal Step",
				spells : ["etherealness"],
				selection : ["etherealness"],
				firstCol : 'oncesr'
			}],
			spellChanges : {
				"etherealness" : {
					time : "1 bns",
					duration : "1 rnd",
					description : "I go to Ethereal Plane; move there, but able to perceive 60 ft into the normal plane",
					changes : "Using my Ethereal Step class feature I can cast Etherealness as a bonus action once per short rest, but it only affects myself and lasts until the end of my turn."
				}
			}
		},
		"subclassfeature11" : {
			name : "Distant Strike",
			source : [["X", 43]],
			minlevel : 11,
			description : desc([
				"With the Attack action, I can teleport 10 ft before each attack, to a place I can see",
				"If I attack two different creatures with this action, I get an extra attack against a third"
			])
		},
		"subclassfeature15" : {
			name : "Spectral Defense",
			source : [["X", 43]],
			minlevel : 15,
			description : "\n   " + "As a reaction when an attack damages me, I can give myself resistance vs. that attack",
			action : [["reaction", ""]]
		}
	}
});
var XGtE_Ranger_Subclass_Monster_Slayer = AddSubClass("ranger", "monster slayer", {
	regExpSearch : /^(?=.*monster)(?=.*slayer).*$/i,
	subname : "Monster Slayer",
	source : [["X", 43]],
	fullname : "Monster Slayer",
	features : {
		"subclassfeature3" : {
			name : "Hunter's Sense",
			source : [["X", 43]],
			minlevel : 3,
			description : desc([
				"As an action, I learn vulnerabilities/immunities/resistances of a target I see within 60 ft",
				"If it is protected from divination magic, I sense it has none of these"
			]),
			action : [["action", ""]],
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest"
		},
		"subclassfeature3.1" : {
			name : "Monster Slayer Magic",
			source : [["X", 43]],
			minlevel : 3,
			description : "\n   " + "I get bonus spells known, which do not count against the number of spells I can know",
			spellcastingExtra : ["protection from evil and good", "zone of truth", "magic circle", "banishment", "hold monster"],
			spellcastingExtraApplyNonconform : true
		},
		"subclassfeature3.2" : {
			name : "Slayer's Prey",
			source : [["X", 43]],
			minlevel : 3,
			description : desc([
				"As a bonus action, I designate a creature I see within 60 ft; This lasts until I do this again",
				"My first hit to the target with a weapon attack on each of my turns does +1d6 damage"
			]),
			action : [["bonus action", ""]]
		},
		"subclassfeature7" : {
			name : "Supernatural Defense",
			source : [["X", 43]],
			minlevel : 7,
			description : desc([
				"I add 1d6 to saving throws the current target of my Slayer's Prey forces me to make",
				"In addition, I also add 1d6 to checks to escape that target's grapple"
			])
		},
		"subclassfeature11" : {
			name : "Magic-User's Nemesis",
			source : [["X", 43]],
			minlevel : 11,
			description : desc([
				"As a reaction when I see someone within 60 ft casting a spell or teleporting, I can foil it",
				"The target must make a Wisdom save or have its spell or teleport fail and be wasted"
			]),
			action : [["reaction", ""]],
			usages : 1,
			recovery : "short rest"
		},
		"subclassfeature15" : {
			name : "Slayer's Counter",
			source : [["X", 43]],
			minlevel : 15,
			description : desc([
				"As a reaction when the target of my Slayer's Prey has me make a save, I can attack it",
				"I can make one weapon attack; If this hits, I automatically succeed on the saving throw"
			]),
			action : [["reaction", ""]]
		}
	}
});
// Add all three subclasses to the revised ranger as well, if it exists
if (ClassList.rangerua) {
	ClassList.rangerua.subclasses[1].push(XGtE_Ranger_Subclass_Gloom_Stalker, XGtE_Ranger_Subclass_Horizon_Walker, XGtE_Ranger_Subclass_Monster_Slayer);
};

// Add 4 subclasses for the Rogue
AddSubClass("rogue", "inquisitive", {
	regExpSearch : /^(?=.*(rogue|miscreant))(?=.*inquisitive).*$/i,
	subname : "Inquisitive",
	source : [["X", 45]],
	features : {
		"subclassfeature3" : {
			name : "Ear for Deceit",
			source : [["X", 45]],
			minlevel : 3,
			description : "\n   " + "For Wis (Insight) to sense if another is lying, I can treat a die roll of 7 or lower as an 8"
		},
		"subclassfeature3.1" : {
			name : "Eye for Detail",
			source : [["X", 46]],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can do either of the following:",
				"\u2022 Make a Wisdom (Perception) check to spot a hidden creature or object",
				"\u2022 Make an Intelligence (Investigation) check to uncover or decipher clues"
			]),
			action : [["bonus action", ""]]
		},
		"subclassfeature3.2" : {
			name : "Insightful Fighting",
			source : [["X", 46]],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can decipher the tactics of another I can see that's not incapacitated",
				"I have to make a Wisdom (Insight) check vs. the target's Charisma (Deception) check",
				"If I succeed, I can use my sneak attack on it even if I don't have adv. (but not if disadv.)",
				"This benefit lasts for 1 minute or until I successfully use Insightful Fighting again"
			]),
			action : [["bonus action", ""]]
		},
		"subclassfeature9" : {
			name : "Steady Eye",
			source : [["X", 46]],
			minlevel : 9,
			description : desc([
				"I'm more perceptive when I don't move more than half my speed in the same turn",
				"If so, I gain adv. on Wis (Perception) and Int (Investigation) checks during that turn"
			])
		},
		"subclassfeature13" : {
			name : "Unerring Eye",
			source : [["X", 46]],
			minlevel : 13,
			description : desc([
				"As an action, I can sense magical deceptions within 30 feet of me, but not what it does",
				"I learn the presence of illusions, shapechanged creatures, or magic designed to deceive"
			]),
			action : [["action", ""]],
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest"
		},
		"subclassfeature17" : {
			name : "Eye for Weakness",
			source : [["X", 46]],
			minlevel : 17,
			description : "\n   " + "While my Insightful Fighting is active, I add 3d6 to sneak attacks against that target"
		}
	}
});
// dupl_start
if (!ClassSubList["rogue-mastermind"] && (!SourceList.S || SourceList.S.abbreviation.toLowerCase() !== "scag")) {
	// the Mastermind subclass is identical to the one in SCAG, so only add if it that one doesn't exist yet
	AddSubClass("rogue", "mastermind", {
		regExpSearch : /^(?!.*(barbarian|bard|cleric|druid|fighter|monk|paladin|ranger|sorcerer|warlock|wizard))(?=.*(mastermind|strategist)).*$/i,
		subname : "Mastermind",
		fullname : "Mastermind",
		source : [["S", 135], ["X", 46]],
		features : {
			"subclassfeature3" : {
				name : "Master of Intrigue",
				source : [["S", 135], ["X", 46]],
				minlevel : 3,
				description : desc([
					"I gain proficiency with disguise kits, forgery kits, one gaming set, and two languages",
					"I can mimic speech patterns and accents if I've heard them for at least 1 minute"
				]),
				languageProfs : [2],
				toolProfs : ["Disguise kit", "Forgery kit", ["Gaming set", 1]]
			},
			"subclassfeature3.1" : {
				name : "Master of Tactics",
				source : [["S", 135], ["X", 46]],
				minlevel : 3,
				description : desc([
					"I can use the Help action as a bonus action",
					"This even works if the ally attacks a target within 30 ft of me that can see or hear me"
				]),
				action : [["bonus action", ""]]
			},
			"subclassfeature9" : {
				name : "Insightful Manipulator",
				source : [["S", 135], ["X", 46]],
				minlevel : 9,
				description : desc([
					"By spending 1 minute observing/interacting outside of combat I can learn capabilities",
					"The DM tells me if the target is my equal, superior, or inferior in regard to two things:",
					" - Intelligence score    - Wisdom score    - Charisma score    - Class levels (if any)"
				])
			},
			"subclassfeature13" : {
				name : "Misdirection",
				source : [["S", 135], ["X", 46]],
				minlevel : 13,
				description : desc([
					"As a reaction, I can redirect an attack meant for me to a creature within 5 ft of me",
					"This only works if the creature is providing me with cover against the attack"
				]),
				action : [["reaction", ""]]
			},
			"subclassfeature17" : {
				name : "Soul of Deceit",
				source : [["S", 135], ["X", 46]],
				minlevel : 17,
				description : desc([
					"My thoughts can't be read by telepathy or similar means; I can project false thoughts",
					"For that, I must pass a Cha (Deception) vs. Wis (Insight) check to fool the mind reader",
					"Magic always determines I'm truthful; I can't be magically compelled to tell the truth"
				])
			}
		}
	});
}; // dupl_end
AddSubClass("rogue", "scout", {
	regExpSearch : /scout/i,
	subname : "Scout",
	source : [["X", 47]],
	features : {
		"subclassfeature3" : {
			name : "Skirmisher",
			source : [["X", 47]],
			minlevel : 3,
			description : desc([
				"As a reaction when a hostile ends its turn within 5 ft of me, I can move half my speed",
				"This movement does not provoke attacks of opportunity"
			]),
			action : [["reaction", ""]]
		},
		"subclassfeature3.1" : {
			name : "Survivalist",
			source : [["X", 47]],
			minlevel : 3,
			description : "\n   " + "I gain proficiency and expertise with the Nature and Survival skills",
			skills : [['Nature', 'full'], ['Survival', 'full']]
		},
		"subclassfeature9" : {
			name : "Superior Mobility",
			source : [["X", 47]],
			minlevel : 9,
			description : "\n   " + "I gain +10 ft to my walking speed (and swimming/climbing speed, if applicable)",
			speed : {
				allModes : { bonus : "+10", exclude : ["fly", "burrow"] }
			}
		},
		"subclassfeature13" : {
			name : "Ambush Master",
			source : [["X", 47]],
			minlevel : 13,
			description : desc([
				"I gain advantage on Initiative rolls",
				"The first creature I hit in the first round of combat becomes an easy target",
				"Until the start of my next turn, all attacks against the target have advantage"
			]),
			advantages : [["Initiative", true]]
		},
		"subclassfeature17" : {
			name : "Sudden Strike",
			source : [["X", 47]],
			minlevel : 17,
			description : desc([
				"With the Attack action, I can make one additional attack as a bonus action",
				"This attack can benefit from my Sneak Attack even if I already used it this turn",
				"However, I still can't use Sneak Attack on a single target more than once per turn"
			]),
			action : [["bonus action", " (with Attack action)"]]
		}
	}
});
// dupl_start
if (!ClassSubList["rogue-swashbuckler"] && (!SourceList.S || SourceList.S.abbreviation.toLowerCase() !== "scag")) {
	// the Swashbuckler subclass is identical to the one in SCAG, so only add if it that one doesn't exist yet
	AddSubClass("rogue", "swashbuckler", {
		regExpSearch : /^(?!.*(barbarian|bard|cleric|druid|fighter|monk|paladin|ranger|sorcerer|warlock|wizard))(?=.*swashbuckl).*$/i,
		subname : "Swashbuckler",
		fullname : "Swashbuckler",
		source : [["S", 135], ["X", 47]],
		features : {
			"subclassfeature3" : {
				name : "Fancy Footwork",
				source : [["S", 135], ["X", 47]],
				minlevel : 3,
				description : desc([
					"Enemies I make a melee attack against in my turn can't use opportunity attacks on me",
					"This lasts until the end of my current turn"
				])
			},
			"subclassfeature3.1" : {
				name : "Rakish Audacity",
				source : [["S", 136], ["X", 47]],
				minlevel : 3,
				description : desc([
					"I don't need advantage to sneak attack if my target is the only one within 5 ft of me",
					"I still can't sneak attack if I have disadv.; I add my Charisma modifier to initiative rolls"
				]),
				addMod : { type : "skill", field : "Init", mod : "max(Cha|0)", text : "I can add my Charisma modifier to initiative rolls." }
			},
			"subclassfeature9" : {
				name : "Panache",
				source : [["S", 136], ["X", 47]],
				minlevel : 9,
				description : desc([
					"As an action, I can beguile a creature that hears and understands me, for 1 minute",
					"It must succeed a Wis (Insight) check opposed by my Cha (Persuasion) or be affected as:",
					"\u2022 A hostile target gains disadv. on attacks and can't do opportunity attacks vs. not-me",
					"  This effect ends if an ally attacks or casts a spell vs. it, or if it and I are 60 ft apart",
					"\u2022 Targets that are not hostile are charmed and regard me as a friendly acquaintance",
					"  This effect ends if me or an ally do anything harmful to it"
				]),
				action : [["action", ""]]
			},
			"subclassfeature13" : {
				name : "Elegant Maneuver",
				source : [["S", 136], ["X", 47]],
				minlevel : 13,
				description : "\n   " + "As a bonus action, I can gain adv. on my next Dex (Acrobatics) or Str (Athletics) check",
				action : [["bonus action", ""]]
			},
			"subclassfeature17" : {
				name : "Master Duelist",
				source : [["S", 136], ["X", 47]],
				minlevel : 17,
				description : "\n   " + "Once per short rest, when I miss with an attack roll, I can roll again with advantage",
				recovery : "short rest",
				usages : 1
			}
		}
	});
}; // dupl_end

// Add 3 subclasses for the Sorcerer
AddSubClass("sorcerer", "divine soul", { // this code includes contributions by SoilentBrad
	regExpSearch : /^(?=.*divine)(?=.*soul).*$/i,
	subname : "Divine Soul",
	source : [["X", 50]],
	fullname : "Divine Soul",
	spellcastingList : {
		"class" : ["cleric", "sorcerer"]
	},
	features : {
		"subclassfeature1" : {
			name : "Divine Magic",
			source : [["X", 50]],
			minlevel : 1,
			description : desc([
				"When I learn spells/cantrips or replace known, I can also pick from the cleric spell list",
				"These cleric spells count as sorcerer spells for me",
				'I also learn a spell based on my affinity, use the "Choose Feature" button above for this'
			]),
			choices : ["Good", "Evil", "Law", "Chaos", "Neutrality"],
			"good" : {
				name : "Divine Magic: Good",
				description : desc([
					"When I learn spells/cantrips or replace known, I can also pick from the cleric spell list",
					"I also learn Cure Wounds, which doesn't count against my number of spells known",
					"These count as sorcerer spells for me; I can only replace the bonus spell with a cleric spell"
				]),
				spellcastingBonus : [{
					name : "Divine Magic (Good)",
					"class" : "cleric",
					level : [1,9],
					selection : ["cure wounds"]
				}],
				dependentChoices : "eagle"
			},
			"evil" : {
				name : "Divine Magic: Evil",
				description : desc([
					"When I learn spells/cantrips or replace known, I can also pick from the cleric spell list",
					"I also learn Inflict Wounds, which doesn't count against my number of spells known",
					"These count as sorcerer spells for me; I can only replace the bonus spell with a cleric spell"
				]),
				spellcastingBonus : [{
					name : "Divine Magic (Evil)",
					"class" : "cleric",
					level : [1,9],
					selection : ["inflict wounds"]
				}],
				dependentChoices : "bat"
			},
			"law" : {
				name : "Divine Magic: Law",
				description : desc([
					"When I learn spells/cantrips or replace known, I can also pick from the cleric spell list",
					"I also learn Bless, which doesn't count against my number of spells known",
					"These count as sorcerer spells for me; I can only replace the bonus spell with a cleric spell"
				]),
				spellcastingBonus : [{
					name : "Divine Magic (Law)",
					"class" : "cleric",
					level : [1,9],
					selection : ["bless"]
				}],
				dependentChoices : "eagle"
			},
			"chaos" : {
				name : "Divine Magic: Chaos",
				description : desc([
					"When I learn spells/cantrips or replace known, I can also pick from the cleric spell list",
					"I also learn Bane, which doesn't count against my number of spells known",
					"These count as sorcerer spells for me; I can only replace the bonus spell with a cleric spell"
				]),
				spellcastingBonus : [{
					name : "Divine Magic (Chaos)",
					"class" : "cleric",
					level : [1,9],
					selection : ["bane"]
				}],
				dependentChoices : "bat"
			},
			"neutrality" : {
				name : "Divine Magic: Neutrality",
				description : desc([
					"When I learn spells/cantrips or replace known, I can also pick from the cleric spell list",
					"I learn Protection from Evil \xD7 Good; It doesn't count against my number of spells known",
					"These count as sorcerer spells for me; I can only replace the bonus spell with a cleric spell"
				]),
				spellcastingBonus : [{
					name : "Divine Magic (Neutrality)",
					"class" : "cleric",
					level : [1,9],
					selection : ["protection from evil and good"]
				}],
				dependentChoices : "dragonfly"
			},
			choiceDependencies : [{
				feature : "subclassfeature14",
				choiceAttribute : true
			}]
		},
		"subclassfeature1.2" : {
			name : "Favored by the Gods",
			source : [["X", 50]],
			minlevel : 1,
			description : "\n   " + "If I fail a saving throw or miss with an attack roll, I can add 2d4 to the total",
			recovery : "short rest",
			usages : 1
		},
		"subclassfeature6" : {
			name : "Empowered Healing",
			source : [["X", 50]],
			minlevel : 6,
			description : desc([
				"Once per turn, when I or an ally in 5 ft roll dice to healing with a spell, I can reroll dice",
				"By spending 1 sorcery point; I can reroll any number of those dice for that spell once"
			]),
			additional : "1 sorcery point"
		},
		"subclassfeature14" : {
			name : "Otherworldy Wings",
			source : [["X", 50]],
			minlevel : 14,
			description : desc([
				"As a bonus action, I can manifest a pair of spectral wings that give me 30 ft fly speed",
				"These wings last until I become incapacitated or I dismiss them as a bonus action"
			]),
			choices : ["eagle", "bat", "dragonfly"],
			choicesNotInMenu : true,
			"eagle" : {
				name : "Otherworldy Wings",
				description : desc([
					"As a bonus action, I manifest a pair of spectral eagle wings, giving me 30 ft fly speed",
					"These wings last until I become incapacitated or I dismiss them as a bonus action"
				])
			},
			"bat" : {
				name : "Otherworldy Wings",
				description : desc([
					"As a bonus action, I manifest a pair of spectral bat wings, giving me 30 ft fly speed",
					"These wings last until I become incapacitated or I dismiss them as a bonus action"
				])
			},
			"dragonfly" : {
				name : "Otherworldy Wings",
				description : desc([
					"As a bonus action, I create a pair of spectral dragonfly wings, giving me 30 ft fly speed",
					"These wings last until I become incapacitated or I dismiss them as a bonus action"
				])
			},
			action : [["bonus action", ""]],
			speed : { fly : { spd : 30, enc : 20 } }
		},
		"subclassfeature18" : {
			name : "Unearthly Recovery",
			source : [["X", 50]],
			minlevel : 18,
			description : desc([
				"As a bonus action when I have less than half of my max HP remaining, I can heal myself",
				"I regain a number of HP equal to half my hit point maximum"
			]),
			action : [["bonus action", ""]],
			recovery : "long rest",
			usages : 1
		}
	}
});
AddSubClass("sorcerer", "shadow magic", {
	regExpSearch : /^(?=.*(sorcerer|witch))(?=.*shadow).*$/i,
	subname : "Shadow Magic",
	source : [["X", 50]],
	fullname : "Shadow Sorcerer",
	features : {
		"subclassfeature1" : {
			name : "Eyes of the Dark",
			source : [["X", 51]],
			minlevel : 1,
			description : "\n   " + "I gain 120 ft darkvision",
			vision : [["Darkvision", 120]]
		},
		"subclassfeature1.1" : {
			name : "Strength of the Grave",
			source : [["X", 51]],
			minlevel : 1,
			description : desc([
				"When damage reduces me to 0 HP, that isn't radiant damage or a critical hit,",
				"I can make a Charisma save (DC 5 + damage taken) to drop to 1 HP instead"
			]),
			usages : 1,
			recovery : "long rest"
		},
		"subclassfeature3" : {
			name : "Darkness",
			source : [["X", 51]],
			minlevel : 3,
			description : desc([
				"I learn Darkness, which doesn't count against my number of spells known",
				"I can also cast it by spending 2 sorcery points and then I can see through it normally"
			]),
			additional : "2 sorcery points",
			action : [["action", " (2 sorcery points)"]],
			spellcastingBonus : [{
				name : "Eyes of the Dark",
				spells : ["darkness"],
				selection : ["darkness"]
			}]
		},
		"subclassfeature6" : {
			name : "Hound of Ill Omen",
			source : [["X", 51]],
			minlevel : 6,
			description : desc([
				"As a bonus action, I summon a hound within 30 ft of a creature I see within 120 ft",
				"The hound has all the stats of a dire wolf with the following exceptions:",
				"\u2022 It is medium size and counts as a monstrosity not a beast",
				"\u2022 It starts with a number of temporary hit points equal to half my sorcerer level",
				"\u2022 At the start of its turn, it automatically knows where the (hidden) target is",
				"\u2022 It can only move towards and make (opportunity) attack against the target",
				"\u2022 It can move through other creatures and objects as if they were difficult terrain",
				"\u2022 It takes 5 force damage if it ends its turn inside an object",
				"The target has disadvantage on saves vs. my spells while the hound is within 5 ft of it",
				"It disappears if reduced to 0 HP, if the target is reduced to 0 HP, or after 5 minutes"
			]),
			additional : levels.map(function (n) { return n < 6 ? "" : "3 sorcery points; " + Math.floor(n/2) + " temporary HP"; }),
			action : [["bonus action", " (3 sorcery points)"]],
			creaturesAdd : [["Hound of Ill Omen", true]],
			creatureOptions : [{
				name : "Hound of Ill Omen",
				source : [["X", 51]],
				size : 3,
				type : "Monstrosity",
				alignment : "Unaligned",
				ac : 14,
				hp : 37,
				hd : [5, 10],
				speed : "50 ft",
				scores : [17, 15, 15, 3, 12, 7],
				skills : {
					"perception" : 3,
					"stealth" : 4
				},
				senses : "Adv. on Wis (Perception) checks using hearing/smell;\nAt the start of each turn, knows where the target is",
				passivePerception : 13,
				challengeRating : "1",
				proficiencyBonus : 2,
				attacksAction : 1,
				attacks : [{
					name : "Bite",
					ability : 1,
					damage : [2, 6, "piercing"],
					range : "Melee (5 ft)",
					description : "Target must succeed on a DC 13 Strength saving throw or be knocked prone"
				}],
				traits : [{
					name : "Keen Hearing and Smell",
					description : "The hound has advantage on Wisdom (Perception) checks that rely on hearing or smell."
				}, {
					name : "Pack Tactics",
					description : "The hound has advantage on an attack roll against a creature if at least one of the hound's allies is within 5 ft of the creature and the ally isn't incapacitated."
				}],
				features : [{
					name : "Actions",
					description : "The hound can only move towards its targets and make attacks or opportunity attacks against its target."
				}, {
					name : "Temporary Hit Points",
					description : "When the hound is summoned, it gains temporary HP equal to half my sorcerer level."
				}, {
					name : "Shadowy Form",
					description : "The hound can move through other creatures and objects as if they were difficult terrain. It takes 5 force damage if it ends its turn inside an object."
				}, {
					name : "Sign of Ill Omen",
					description : "While the hound is within 5 ft of its target, that target has disadvantage on saving throws versus my spells."
				}],
				header : "Summoned",
				eval : function(prefix, lvl) {
					AddTooltip(prefix + 'Comp.Use.HP.Temp', "The hound of ill omen gains half my sorcerer level as temporary HP when created.");
				},
				removeeval : function(prefix, lvl) {
					AddTooltip(prefix + 'Comp.Use.HP.Temp', "");
				},
				changeeval : function (prefix, lvl) {
					if (!classes.known.sorcerer) return;
					Value(prefix + 'Comp.Use.HP.Temp', Math.floor(classes.known.sorcerer.level / 2));
				}
			}]
		},
		"subclassfeature14" : {
			name : "Shadow Walk",
			source : [["X", 51]],
			minlevel : 14,
			description : desc([
				"As a bonus action when I'm in dim light or darkness, I can teleport up to 120 ft",
				"The destination has to be unoccupied, within line of sight, and in dim light or darkness"
			]),
			action : [["bonus action", ""]]
		},
		"subclassfeature18" : {
			name : "Umbral Form",
			source : [["X", 51]],
			minlevel : 18,
			additional : "6 sorcery points",
			description : desc([
				"As a bonus action, I transform into a shadow form for 1 minute",
				"While transformed, I have resistance to all damage except force and radiant damage",
				"Also, I can move through other creatures and objects as if they were difficult terrain",
				"I take 5 force damage if I end my turn inside an object",
				"This ends early if I end it as a bonus action, I die, or I'm incapacitated"
			]),
			action : [["bonus action", " (6 sorcery points)"]]
		}
	}
});
// dupl_start
if (!ClassSubList["sorcerer-storm sorcery"] && (!SourceList.S || SourceList.S.abbreviation.toLowerCase() !== "scag")) {
	// the Storm Sorcery subclass is identical to the one in SCAG, so only add if it that one doesn't exist yet
	AddSubClass("sorcerer", "storm sorcery", {
		regExpSearch : /^(?=.*(sorcerer|witch))((?=.*(storm|tempest|hurricane))|((?=.*air)(?=.*element))).*$/i,
		subname : "Storm Sorcery",
		fullname : "Storm Sorcerer",
		source : [["S", 137], ["X", 51]],
		features : {
			"subclassfeature1" : {
				name : "Wind Speaker",
				source : [["S", 137], ["X", 52]],
				minlevel : 1,
				description : "\n   " + "I can speak, read, and write Primordial (and its dialects Aquan, Auran, Ignan, Terran)",
				languageProfs : ["Primordial"]
			},
			"subclassfeature1.1" : {
				name : "Tempestuous Magic",
				source : [["S", 137], ["X", 52]],
				minlevel : 1,
				description : desc([
					"As a bonus action, before or after casting a 1st-level or higher spell, I can fly 10 ft",
					"This movement doesn't provoke opportunity attacks as whirling gust of air surround me"
				]),
				action : [["bonus action", " (with casting)"]]
			},
			"subclassfeature6" : {
				name : "Heart of the Storm",
				source : [["S", 137], ["X", 52]],
				minlevel : 6,
				description : desc([
					"I have resistance to lightning and thunder damage",
					"When I start casting a 1st-level or higher spell that deals lightning or thunder damage,",
					"I deal lightning or thunder damage to creatures of my choice that I can see within 10 ft"
				]),
				additional : levels.map(function (n) { return n < 6 ? "" : Math.floor(n/2) + " damage"; }),
				dmgres : ["Lightning", "Thunder"]
			},
			"subclassfeature6.1" : {
				name : "Storm Guide",
				source : [["S", 137], ["X", 52]],
				minlevel : 6,
				description : desc([
					"As an action, I can stop rain around me in 20-ft radius; bonus action for it to resume",
					"As a bonus action, I can choose the direction of wind around me in a 100-ft radius",
					"This lasts until the end of my next turn and doesn't alter the wind's speed"
				]),
				action : [["bonus action", ""]]
			},
			"subclassfeature14" : {
				name : "Storm's Fury",
				source : [["S", 137], ["X", 52]],
				minlevel : 14,
				description : desc([
					"As a reaction when hit by a melee attack, I can deal lightning damage to the attacker",
					"The attacker must also make a Strength save or be pushed up to 20 ft away from me"
				]),
				action : [["reaction", ""]],
				additional : levels.map(function (n) { return n < 14 ? "" : n + " lightning damage"; })
			},
			"subclassfeature18" : {
				name : "Wind Soul",
				source : [["S", 137], ["X", 52]],
				minlevel : 18,
				description : desc([
					"I have immunity to lightning and thunder damage and gain magical 60 ft fly speed",
					"As an action, I reduce my fly speed to 30 ft and give allies 30 ft fly speed for 1 hour",
					"I can do this once per short rest for up to 3 + my Charisma modifier allies within 30 ft"
				]),
				action : [["action", ""]],
				savetxt : { immune : ["lightning", "thunder"] },
				speed : { fly : { spd : "fixed 60", enc : "fixed 60" } },
				usages : 1,
				recovery : "short rest"
			}
		}
	});
}; // dupl_end

// Add 2 subclasses for the Warlock
AddSubClass("warlock", "the celestial", {
	regExpSearch : /^(?=.*warlock)(?=.*celestial).*$/i,
	subname : "the Celestial",
	source : [["X", 54]],
	spellcastingExtra : ["cure wounds", "guiding bolt", "flaming sphere", "lesser restoration", "daylight", "revivify", "guardian of faith", "wall of fire", "flame strike", "greater restoration"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Cantrips",
			source : [["X", 54]],
			minlevel : 1,
			description : "\n   " + "I learn the Light and Sacred Flame cantrips, not counting for the number I can know",
			spellcastingBonus : [{
				name : "Bonus Cantrips",
				spells : ["light"],
				selection : ["light"]
			}, {
				name : "Bonus Cantrips",
				spells : ["sacred flame"],
				selection : ["sacred flame"]
			}]
		},
		"subclassfeature1.1" : {
			name : "Healing Light",
			source : [["X", 54]],
			minlevel : 1,
			description : desc([
				"As a bonus action, I can heal a creature I can see within 60 ft by expending dice",
				"I can expend up to my Charisma modifier (min 1) of dice from my pool at a time",
				"The target heals HP equal to the roll of the dice; I regain all expended dice on a long rest"
			]),
			usages : levels.map(function (n) { return (n + 1) + "d6 per "; }),
			usagescalc : "event.value = !classes.known.warlock ? '' : (1 + classes.known.warlock.level) + 'd6';",
			recovery : "long rest",
			action : [["bonus action", ""]]
		},
		"subclassfeature6" : {
			name : "Radiant Soul",
			source : [["X", 55]],
			minlevel : 6,
			description : desc([
				"I add my Cha modifier once to the fire or radiant damage of cantrips and spells I cast",
				"This bonus only applies to one target; Also, I have resistance to radiant damage"
			]),
			dmgres : ["Radiant"],
			calcChanges : {
				atkCalc : [
					function (fields, v, output) {
						if (v.isSpell && (/fire|radiant/i).test(fields.Damage_Type)) {
							output.extraDmg += What('Cha Mod');
						};
					},
					"Cantrips and spells that fire or radiant damage get my Charisma modifier added to their damage to one target."
				],
				spellAdd : [
					function (spellKey, spellObj, spName) {
						if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "fire|radiant", "Cha", true);
					},
					"Cantrips and spells that fire or radiant damage get my Charisma modifier added to their damage to one target."
				]
			}
		},
		"subclassfeature10" : {
			name : "Celestial Resilience",
			source : [["X", 55]],
			minlevel : 10,
			description : desc([
				"When I finish a short or long rest, I and up to five allies gain temporary hit points",
				"I get my warlock level + Cha mod, while my allies get half my warlock level + Cha mod"
			]),
			additional : levels.map(function (n) { return n < 10 ? "" : "Me: " + n + "+Cha mod; Allies: " + Math.floor(n / 2) + "+Cha mod"; })
		},
		"subclassfeature14" : {
			name : "Searing Vengeance",
			source : [["X", 55]],
			minlevel : 14,
			description : desc([
				"At the start of my turn when I would make a death save, I can instead spring back up",
				"I recover HP equal to half my current HP maximum, and can then stand up if I choose",
				"When I do, creatures of my choice within 30 ft take 2d8 + Cha mod in radiant damage",
				"Damaged creatures are blinded until the end of my current turn"
			]),
			usages : 1,
			recovery : "long rest"
		}
	}
});
AddSubClass("warlock", "the hexblade", { // this code includes contributions by SoilentBrad
	regExpSearch : /^(?=.*hexblade)(?=.*warlock).*$/i,
	subname : "the Hexblade",
	source : [["X", 55]],
	spellcastingExtra : ["shield", "wrathful smite", "blur", "branding smite", "blink", "elemental weapon", "phantasmal killer", "staggering smite", "banishing smite", "cone of cold"],
	features : {
		"subclassfeature1" : {
			name : "Hexblade's Curse",
			source : [["X", 55]],
			minlevel : 1,
			description : desc([
				"As a bonus action, I can curse a creature I can see within 30 ft of me for 1 minute",
				"\u2022 I add my proficiency bonus to damage rolls against the cursed target",
				"\u2022 My attack rolls against the curse target score a critical hit on a roll of 19 and 20",
				"\u2022 If the target dies while cursed, I regain HP equal to my warlock level + Cha mod",
				"The curse ends after 1 minute, when the target dies, I die, or I'm incapacitated"
			]),
			recovery : "short rest",
			usages : 1,
			action : [["bonus action", ""]],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (!v.isDC && /curse/i.test(v.WeaponTextName) && !v.CritChance) {
							v.CritChance = 19;
							fields.Description += (fields.Description ? '; ' : '') + 'Crit on 19-20';
						}
					},
					"If I include the word 'Curse' in the name of a weapon, the automation will treat the attack as being against a target of the Hexblade's Curse: adding my proficiency bonus to the damage and adding the increased chance of a critical hit to the description.",
					19
				],
				atkCalc : [
					function (fields, v, output) {
						if ((/curse/i).test(v.WeaponTextName)) output.extraDmg += output.prof;
					}, ""]
			}
		},
		"subclassfeature1.1" : {
			name : "Hex Warrior",
			source : [["X", 55]],
			minlevel : 1,
			description : desc([
				"I gain proficiency with medium armor, shields, and martial weapons",
				"When I finish a long rest, I can imbue one weapon I touch with my will",
				"Until my next long rest, I can use it with Charisma instead of Strength or Dexterity",
				"I have to be proficient with the weapon and it can't have the two-handed property",
				"This benefit also works with every weapon from Pact of the Blade, with no restriction"
			]),
			armorProfs : [false, true, false, true],
			weaponProfs : [false, true],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (What('Cha Mod') > What(AbilityScores.abbreviations[fields.Mod - 1] + ' Mod') && (v.pactWeapon || v.theWea.pactWeapon || /^(?=.*hexblade)(?!.*((^|[^+-]\b)2|\btwo).?hand(ed)?s?\b).*$/i.test(v.WeaponText))) {
							fields.Mod = 6;
						};
					},
					"If I include the word 'Hexblade' in the name of a weapon that is not two-handed, it gets treated as the weapon I imbued to use Charisma instead of Strength or Dexterity, if my Charisma modifier is higher than the ability it would otherwise use. Alternatively, if I have the Pact of the Blade feature, this will also work for any weapons set to be my Pact Weapon."
				]
			}
		},
		"subclassfeature6" : {
			name : "Accursed Specter",
			source : [["X", 56]],
			minlevel : 6,
			description : desc([
				"When I slay a humanoid, I can curse its soul and have it rise as a specter from its corpse",
				"It has the stats of a specter with temporary hit points equal to half my warlock level",
				"It rolls initiative and has its own turns, obeying my verbal commands",
				"It gains a bonus to attack rolls equal to my Charisma modifier (min +0)",
				"The specter remains until the end of my next long rest, at which point it vanishes"
			]),
			additional : levels.map( function(n) { return n < 6 ? "" : Math.floor(n/2) + " temp HP"; }),
			usages : 1,
			recovery : "long rest",
			creaturesAdd : [["Accursed Specter", true]],
			creatureOptions : [{
				name : "Accursed Specter",
				nameAlt : ["Accursed Spectre"],
				source : [["X", 56]],
				size : 3,
				type : "Undead",
				alignment : "Chaotic Evil",
				ac : 12,
				hp : 22,
				hd : [5, 8],
				speed : "fly 50 ft (hover)",
				scores : [1, 14, 11, 10, 10, 12],
				damage_resistances : "acid; cold; fire; lightning; thunder; bludgeoning, piercing, and slashing from nonmagical weapons",
				damage_immunities : "necrotic, poison",
				condition_immunities : "charmed, exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, unconscious",
				senses : "Darkvision 60 ft; While in sunlight, disadv. on Wis (Perception) checks using sight",
				passivePerception : 10,
				languages : "all languages it knew in life, but can't speak",
				challengeRating : "1",
				proficiencyBonus : 2,
				attacksAction : 1,
				attacks : [{
					name : "Life Drain",
					ability : 2,
					damage : [3, 6, "necrotic"],
					range : "Melee (5 ft)",
					description : "DC 10 Con save or HP max reduced by same as damage taken until a long rest",
					modifiers : ["max(oCha|0)", ""],
					abilitytodamage : false,
					tooltip : "A target of the specter's life drain must succeed on a DC 10 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the creature finishes a long rest. The target dies if this effect reduces its hit point maximum to 0."
				}],
				traits : [{
					name : "Incorporeal Movement",
					description : "The specter can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
				}, {
					name : "Sunlight Sensitivity",
					description : "While in sunlight, the specter has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
				}, {
					name : "Life Drain",
					description : "A target of the specter's life drain must succeed on a DC 10 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the creature finishes a long rest. The target dies if this effect reduces its hit point maximum to 0."
				}],
				features : [{
					name : "Bound Spirit",
					description : "The specter obeys my verbal commands and remains in my service until the end of my next long rest, at which point it vanishes to the afterlife. It acts on its own turn with its own initiative."
				}],
				header : "Bound Spirit",
				eval : function(prefix) {
					AddTooltip(prefix + 'Comp.Use.HP.Temp', "The accursed specter gains half my warlock level as temporary HP when created.");
				},
				removeeval : function(prefix) {
					AddTooltip(prefix + 'Comp.Use.HP.Temp', "");
				},
				changeeval : function (prefix, newLvl) {
					if (!classes.known.warlock) return;
					Value(prefix + 'Comp.Use.HP.Temp', Math.floor(classes.known.warlock.level / 2));
				}
			}]
		},
		"subclassfeature10" : {
			name : "Armor of Hexes",
			source : [["X", 56]],
			minlevel : 10,
			description : desc([
				"As a reaction when a Hexblade's Curse recipient hits me with an attack, I can roll a d6",
				"On a result of 4 or higher, the attacks misses me instead, regardless of its d20 roll"
			])
		},
		"subclassfeature14" : {
			name : "Master of Hexes",
			source : [["X", 56]],
			minlevel : 14,
			description : desc([
				"When the target of my Hexblade's Curse dies, I can curse another I can see within 30 ft",
				"I can't do this while incapacitated and I don't regain HP from the death of the previous"
			])
		}
	}
});

// Add Warlock Invocations
AddWarlockInvocation("Aspect of the Moon (prereq: Pact of the Tome)", {
	name : "Aspect of the Moon",
	description : "\n   " + "I don't need sleep nor can be forced to by any means; I can rest while doing light activity",
	source : [["X", 56], ["UA:RCO", 5]],
	submenu : "[improves Pact of the Tome]",
	prereqeval : function(v) { return GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the tome'; },
	savetxt : { text : ["Nothing can force me to sleep"] }
});
AddWarlockInvocation("Cloak of Flies (prereq: level 5 warlock)", {
	name : "Cloak of Flies",
	description : desc([
		"As a bonus action, I can surround myself with a 5-ft radius magical aura of buzzing flies",
		"It lasts until I'm incapacitated or dismiss it as a bonus action; Total cover block the aura",
		"The aura grants me adv. on Cha (Intimidation), but disadv. on all other Cha checks",
		"Creatures starting their turn in the aura take my Cha mod (min 0) in poison damage"
	]),
	source : [["X", 56], ["UA:RCO", 5]],
	submenu : "[warlock level  5+]",
	prereqeval : function(v) { return classes.known.warlock.level >= 5; },
	recovery : "short rest",
	usages : 1,
	action : [["bonus action", " (start/stop)"]]
});
AddWarlockInvocation("Eldritch Smite (prereq: level 5 warlock, Pact of the Blade)", {
	name : "Eldritch Smite",
	description : desc([
		"Once per turn when I hit a creature with my pact weapon, I can empower the strike",
		"By expending a warlock spell slot, the creature takes extra damage and is knocked prone",
		"It takes 1d8 force damage and another 1d8 force damage per level of the spell slot",
		"The target is only knocked prone if it is Huge or smaller"
	]),
	source : [["X", 56]],
	submenu : "[improves Pact of the Blade]",
	prereqeval : function(v) { return classes.known.warlock.level >= 5 && GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the blade'; }
});
AddWarlockInvocation("Ghostly Gaze (prereq: level 7 warlock)", {
	name : "Ghostly Gaze",
	description : desc([
		"As an action, I can gain darkvision, and the ability to see through solid objects, out to 30 ft",
		"Objects appear ghostly to me; This lasts up to 1 minute, while I'm concentrating on this"
	]),
	source : [["X", 56]],
	submenu : "[warlock level  7+]",
	prereqeval : function(v) { return classes.known.warlock.level >= 7; },
	recovery : "short rest",
	usages : 1,
	action : [["action", ""]]
});
AddWarlockInvocation("Gift of the Depths (prereq: level 5 warlock)", {
	name : "Gift of the Depths",
	description : desc([
		"I can breathe underwater and I have a swim speed equal to my walking speed",
		"Once per long rest, I can cast Water Breathing without using a spell slot (PHB 287)"
	]),
	source : [["X", 57], ["UA:RCO", 6]],
	submenu : "[warlock level  5+]",
	spellcastingBonus : [{
		name : "Gift of the Depths",
		spells : ["water breathing"],
		selection : ["water breathing"],
		firstCol : 'oncelr'
	}],
	prereqeval : function(v) { return classes.known.warlock.level >= 5; },
	speed : { swim : { spd : "walk", enc : "walk" } }
});
AddWarlockInvocation("Gift of the Ever-Living Ones (prereq: Pact of the Chain)", {
	name : "Gift of the Ever-Living Ones",
	description : "\n   " + "When I regain HP while my familiar is within 100 ft, I regain the max the dice can roll",
	source : [["X", 57], ["UA:RCO", 6]],
	submenu : "[improves Pact of the Chain]",
	prereqeval : function(v) { return GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the chain'; }
});
AddWarlockInvocation("Grasp of Hadar (prereq: Eldritch Blast cantrip)", {
	name : "Grasp of Hadar",
	description : desc("Once per turn when my Eldritch Blast hits a creature, I can move it 10 ft closer to me"),
	source : [["X", 57], ["UA:RCO", 6]],
	submenu : "[improves Eldritch Blast]",
	prereqeval : function(v) { return v.hasEldritchBlast; },
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.baseWeaponName == 'eldritch blast') fields.Description += '; Target moved 10 ft to me';
			},
			"When I hit a creature with my Eldritch Blast cantrip once or more times in a turn, I can move it in a straight line 10 ft closer to me."
		]
	}
});
AddWarlockInvocation("Improved Pact Weapon (prereq: Pact of the Blade)", {
	name : "Improved Pact Weapon",
	description : desc([
		"I can use any pact weapon I create as my spellcasting focus for warlock spells",
		"Any pact weapon I create is a +1 magic weapon, if it isn't already a +1 magic weapon",
		"I can now also conjure a shortbow, longbow, or light or heavy crossbow as my pact weapon"
	]),
	source : [["X", 57]],
	submenu : "[improves Pact of the Blade]",
	prereqeval : function(v) { return GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the blade'; },
	calcChanges : {
		atkCalc : [
			function (fields, v, output) {
				if ((/^(shortbow|longbow|light crossbow|heavy crossbow)$/).test(v.baseWeaponName) && (/\bpact\b/i).test(v.WeaponTextName)) {
					v.pactWeapon = true;
				}
				// Test if this is a pact weapon, has no + bonus from somewhere else, and doesn't already have a improved pact weapon bonus
				if (v.pactWeapon && !output.magic) {
					var bContinue = true;
					// Now test if this isn't a weaponOptions addition with a static + bonus set to the modifier fields
					if (v.theWea.isMagicWeapon && v.theWea.modifiers) {
						// Test the first two modifiers to see if both offer a +1 or more. Returns `true` if one contains no numbers or is less than the improved pact weapon bonus
						var bContinue = v.theWea.modifiers.slice(0, 2).some(function (n) {
							if (!n || !/\d/.test(n)) {
								var nmbr = 0;
							} else if (isNaN(n)) {
								var nmbr = n.match(/(^|\+|-)\d+\b/g);
								nmbr = !nmbr ? 0 : nmbr.reduce(function(a, b) {return Number(a) + Number(b)});
							} else {
								var nmbr = Number(n);
							}
							return nmbr < 1;
						});
					}
					// if the continue boolean wasn't set to false, we can proceed
					if (bContinue) {
						v.pactMag = 1;
						output.magic = 1;
					}
				};
			},
			"If I include the word 'Pact' in a the name of a melee weapon, shortbow, longbow, light crossbow, or heavy crossbow, it will be treated as my Pact Weapon.\n \u2022 If my Pact Weapon doesn't already include a magical bonus in its name and is not a magic weapon with at least a +1 bonus, the calculation will add +1 to its To Hit and Damage.",
			290
		],
		atkAdd : [
			function (fields, v) {
				if ((/^(shortbow|longbow|light crossbow|heavy crossbow)$/).test(v.baseWeaponName) && (/\bpact\b/i).test(v.WeaponTextName)) {
					v.pactWeapon = true;
				};
			}, "", 90]
	}
});
AddWarlockInvocation("Lance of Lethargy (prereq: Eldritch Blast cantrip)", {
	name : "Lance of Lethargy",
	description : desc([
		"Once per turn when my Eldritch Blast hits a creature, I can reduce its speed by 10 ft",
		"This speed reduction lasts until the end of my next turn"
	]),
	source : [["X", 57]],
	submenu : "[improves Eldritch Blast]",
	prereqeval : function(v) { return v.hasEldritchBlast; },
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.baseWeaponName == 'eldritch blast') fields.Description += '; 1 target -10 ft speed';
			},
			"Once on each of my turns when I hit a creature with my Eldritch Blast cantrip, I can reduce its speed by 10 ft until the end of my next turn."
		]
	}
});
AddWarlockInvocation("Maddening Hex (prereq: level 5 warlock, Hex spell or warlock feature that curses)", {
	name : "Maddening Hex",
	description : desc([
		"As a bonus action, I cause pain around a target hexed by me that I can see within 30 ft",
		"It and any of my choice I can see in 5 ft of it take my Cha mod (min 1) in psychic damage",
		"The Hex spell and all of my warlock features that curse are considered a hex for this"
	]),
	source : [["X", 57]],
	submenu : "[improves Hex spell or warlock feature that curses]",
	prereqeval : function(v) { return classes.known.warlock.level >= 5 && (isSpellUsed('hex', true) || (/hexblade/).test(classes.known.warlock.subclass)); },
	action : [["bonus action", ""]]
});
AddWarlockInvocation("Relentless Hex (prereq: level 7 warlock, Hex spell or warlock feature that curses)", {
	name : "Relentless Hex",
	description : desc([
		"As a bonus action, I can teleport to a target hexed by me that I can see within 30 ft",
		"I teleport up to 30 ft to an unoccupied space that I can see within 5 ft of the target"
	]),
	source : [["X", 57]],
	submenu : "[improves Hex spell or warlock feature that curses]",
	prereqeval : function(v) { return classes.known.warlock.level >= 7 && (isSpellUsed('hex', true) || (/hexblade/).test(classes.known.warlock.subclass)); },
	action : [["bonus action", ""]]
});
AddWarlockInvocation("Shroud of Shadow (prereq: level 15 warlock)", {
	name : "Shroud of Shadow",
	description : "\n   " + "I can cast Invisibility at will, without using spell slots (PHB 254)",
	source : [["X", 57], ["UA:RCO", 6]],
	submenu : "[warlock level 15+]",
	spellcastingBonus : [{
		name : "Shroud of Shadow",
		spells : ["invisibility"],
		selection : ["invisibility"],
		firstCol : 'atwill'
	}],
	prereqeval : function(v) { return classes.known.warlock.level >= 15; },
	spellChanges : {
		"invisibility" : {
			description : "1 crea invisible; attacking/casting makes the crea visible; anything worn/carried also invisible",
			changes : "With the Shroud of Shadow invocation I can cast Invisibility at will, but when I do so I am unable to cast it using a higher level spell slot."
		}
	}
});
AddWarlockInvocation("Tomb of Levistus (prereq: level 5 warlock)", {
	name : "Tomb of Levistus",
	description : desc([
		"As a reaction when I take damage, I can entomb myself in ice until the end of my turn",
		"During, I get 10 temp. HP per warlock level, which I use to absorb the triggering damage",
		"After, till the ice is gone, I also get vulnerability to fire, 0 speed, and am incapacitated"
	]),
	source : [["X", 57], ["UA:RCO", 6]],
	submenu : "[warlock level  5+]",
	prereqeval : function(v) { return classes.known.warlock.level >= 5; },
	recovery : "short rest",
	usages : 1,
	action : [["reaction", ""]],
	additional : levels.map( function(n) { return (n * 10) + " temp HP"; })
});
AddWarlockInvocation("Trickster's Escape (prereq: level 7 warlock)", {
	name : "Trickster's Escape",
	description : "\n   " + "Once per long rest, I can cast Freedom of Movement on myself without using a spell slot",
	source : [["X", 57], ["UA:RCO", 7]],
	submenu : "[warlock level  7+]",
	spellcastingBonus : [{
		name : "Trickster's Escape",
		spells : ["freedom of movement"],
		selection : ["freedom of movement"],
		firstCol : 'oncelr'
	}],
	prereqeval : function(v) { return classes.known.warlock.level >= 7; },
	spellChanges : {
		"freedom of movement" : {
			range : "Self",
			description : "Magic can't reduce my speed, paralyze or restrain me; I can use 5 ft to escape nonmagical restrains",
			changes : "With the Trickster's Escape invocation I can cast Freedom of Movement, but only on myself."
		}
	}
});

// Add 1 subclass for the Wizard
AddSubClass("wizard", "war magic", {
	regExpSearch : /^(?=.*war)(?=.*(wizard|magic|mage)).*$/i,
	subname : "War Magic",
	source : [["X", 59]],
	fullname : "War Mage",
	features : {
		"subclassfeature2" : { //has to be identical to a feature named in the ClassList
			name : "Arcane Deflection",
			source : [["X", 59]],
			minlevel : 2,
			description : desc([
				"As a reaction when I'm hit by an attack, I can gain +2 to my AC against that attack",
				"As a reaction when I fail a save, I can gain +4 bonus to that saving throw",
				"After I do either, I can't cast spells other than cantrips until the end of my next turn"
			]),
			action : [["reaction", ""]]
		},
		"subclassfeature2.1" : {
			name : "Tactical Wit",
			source : [["X", 60]],
			minlevel : 2,
			description : "\n   " + "I gain a bonus to my initiative rolls equal to my Intelligence modifier",
			addMod : { type : "skill", field : "Init", mod : "max(Int|0)", text : "I can add my Intelligence modifier to initiative rolls." }
		},
		"subclassfeature6" : {
			name : "Power Surge",
			source : [["X", 60]],
			minlevel : 6,
			description : desc([
				"I have a pool of stored power surges that I can use to empower my damaging spells",
				"I gain a power surge whenever I successfully end a spell with Dispel Magic or Counterspell",
				"This pool can store a number of power surges equal to my Intelligence modifier (min 1)",
				"It resets to 1 power surge after a long rest or when I have 0 surges left after a short rest",
				"When I deal damage with a wizard spell, I can spend a power surge to do extra damage",
				"One target takes half my wizard level in force damage; I can do this only once per turn"
			]),
			usages : "Resets to 1 after ",
			usagescalc : "event.value = !event.value || event.value == 'Resets to 1 after ' ? 1 : event.value;",
			recovery : "long rest",
			additional : levels.map( function(n) { return n < 6 ? "" : "+" + Math.floor(n/2) + " force damage"; })
		},
		"subclassfeature10" : {
			name : "Durable Magic",
			source : [["X", 60]],
			minlevel : 10,
			description : "\n   " + "While I'm maintaining concentration on a spell, I gain +2 to AC and all saving throws"
		},
		"subclassfeature14" : {
			name : "Deflecting Shroud",
			source : [["X", 60]],
			minlevel : 14,
			description : desc([
				"When I use my Arcane Deflection feature, magical energy arcs from me to creatures",
				"Up to 3 targets I can see within 60 ft of me take half my wizard level in force damage"
			]),
			additional : levels.map( function(n) { return n < 14 ? "" : Math.floor(n/2) + " force damage"; })
		}
	}
});

// Add feats
FeatsList["bountiful luck"] = {
	name : "Bountiful Luck",
	source : [["X", 73]],
	prerequisite : "Being a Halfling",
	prereqeval : function(v) { return CurrentRace.known.indexOf('halfling') !== -1; },
	descriptionFull : "Your people have extraordinary luck, which you have learned to mystically lend to your companions when you see them falter. You're not sure how you do it; you just wish it, and it happens. Surely a sign of fortune's favor!\n   When an ally you can see within 30 feet of you rolls a 1 on the d20 for an attack roll, an ability check, or a saving throw, you can use your reaction to let the ally reroll the die. The ally must use the new roll\n   When you use this ability, you can't use your Lucky racial trait before the end of your next turn.",
	description : "When an ally I can see within 30 ft of me rolls a 1 on an attack roll, an ability check, or a saving throw, I can use my reaction to let the ally reroll the die. The ally must use the new roll. When I use this, I can't use my racial Lucky trait until the end of my next turn.",
	action : [["reaction", ""]]
};
FeatsList["dragon fear"] = {
	name : "Dragon Fear",
	source : [["X", 74]],
	prerequisite : "Being a Dragonborn",
	prereqeval : function(v) { return CurrentRace.known.indexOf('dragonborn') !== -1; },
	descriptionFull : "When angered, you radiate menace. You gain the following benefits:\n \u2022 Increase your Strength, Constitution, or Charisma score by 1, to a maximum of 20.\n \u2022 Instead of exhaling destructive energy, you can expend a use of your Breath Weapon trait to roar, forcing each creature of your choice within 30 feet of you to make a Wisdom saving throw (DC 8 + your proficiency bonus + your Charisma modifier). A target automatically succeeds on the save if it can't hear or see you. On a failed save, a target becomes frightened of you for 1 minute. If the frightened target takes any damage, it can repeat the saving throw, ending the effect on itself on a success.",
	calculate : "event.value = 'I can use my Breath Weapon to roar instead. Chosen creatures within 30 ft that see and hear me must make a DC ' + (8 + Number(How('Proficiency Bonus')) + Number(What('Cha Mod'))) + ' Wis save (8 + Prof Bonus + Cha mod) or be frightened of me for 1 min. A target can repeat the save whenever it takes damage. [+1 Str, Con, or Cha]';",
	scorestxt : "+1 Strength, Constitution, or Charisma",
	action : [['action', 'Breath Weapon or Dragon Fear', 'Breath Weapon']]
};
FeatsList["dragon hide"] = {
	name : "Dragon Hide",
	source : [["X", 74]],
	prerequisite : "Being a Dragonborn",
	prereqeval : function(v) { return CurrentRace.known.indexOf('dragonborn') !== -1; },
	descriptionFull : "You manifest scales and claws reminiscent of your draconic ancestors. You gain the following benefits:\n \u2022 Increase your Strength, Constitution, or Charisma score by 1, to a maximum of 20.\n \u2022 Your scales harden. While you aren't wearing armor, you can calculate your AC as 13 + your Dexterity modifier. You can use a shield and still gain this benefit.\n \u2022 You grow retractable claws from the tips of your fingers. Extending or retracting the claws requires no action. The claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the normal bludgeoning damage for an unarmed strike.",
	description : "I gain retractable claws that I can retract or extend, requiring no action. While extended, my unarmed strikes deal 1d4 slashing damage. My scales harden, giving me an AC of 13 + Dexterity modifier + shield when I'm not wearing armor. [+1 Str, Con, or Cha]",
	scorestxt : "+1 Strength, Constitution, or Charisma",
	weaponOptions : [{
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*(retractable|dragon))(?=.*claw).*$/i,
		name : "Retractable Claws",
		source : [["X", 74]],
		damage : [1, 4, "slashing"],
		selectNow : true
	}],
	armorOptions : [{
		regExpSearch : /^(?=.*(dragon|draconic|scaly))(?=.*(hide|skin|scales|resilience)).*$/i,
		name : "Dragon Hide",
		source : [["X", 74]],
		ac : 13,
		selectNow : true
	}]
};
FeatsList["drow high magic"] = {
	name : "Drow High Magic",
	source : [["X", 74]],
	prerequisite : "Being a Drow (Dark Elf)",
	prereqeval : function(v) { return CurrentRace.known.indexOf('dark elf') !== -1; },
	descriptionFull : "You learn more of the magic typical of dark elves. You learn the Detect Magic spell and can cast it at will, without expending a spell slot. You also learn Levitate and Dispel Magic, each of which you can cast once without expending a spell slot. You regain the ability to cast those two spells in this way when you finish a long rest. Charisma is your spellcasting ability for all three spells.",
	description : "I can cast Detect Magic at will, without expending a spell slot. I can also cast Levitate and Dispel Magic without expending a spell slot, but each only once per long rest. Charisma is my spellcasting ability for these three spells.",
	spellcastingBonus : [{
		name : "At will",
		spellcastingAbility : 6,
		spells : ["detect magic"],
		selection : ["detect magic"],
		firstCol : 'atwill'
	}, {
		name : "Once per long rest",
		spells : ["levitate"],
		selection : ["levitate"],
		firstCol : 'oncelr'
	}, {
		name : "Once per long rest",
		spells : ["dispel magic"],
		selection : ["dispel magic"],
		firstCol : 'oncelr'
	}]
};
FeatsList["dwarven fortitude"] = {
	name : "Dwarven Fortitude",
	source : [["X", 74]],
	prerequisite : "Being a Dwarf",
	prereqeval : function(v) { return CurrentRace.known.indexOf('dwarf') !== -1; },
	descriptionFull : "You have the blood of dwarf heroes flowing through your veins. You gain the following benefits:\n \u2022 Increase your Constitution score by 1, to a maximum of 20.\n \u2022 Whenever you take the Dodge action in combat, you can spend one Hit Die to heal yourself. Roll the die, add your Constitution modifier, and regain a number of hit points equal to the total (minimum of 1).",
	description : "Whenever I take the Dodge action in combat, I can spend one Hit Die to heal myself. I roll the die, add my Constitution modifier, and regain a number of hit points equal to the total (minimum of 1). [+1 Constitution]",
	scores : [0, 0, 1, 0, 0, 0]
};
FeatsList["elven accuracy"] = {
	name : "Elven Accuracy",
	source : [["X", 74]],
	prerequisite : "Being an Elf or a Half-Elf",
	prereqeval : function(v) { return (/elf|eladrin|avariel|grugach|shadar-kai/i).test(CurrentRace.known); },
	descriptionFull : "The accuracy of elves is legendary, especially that of elf archers and spellcasters. You have uncanny aim with attacks that rely on precision rather than brute force. You gain the following benefits:\n \u2022 Increase your Dexterity, Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.\n \u2022 Whenever you have advantage on an attack roll using Dexterity, Intelligence, Wisdom, or Charisma, you can reroll one of the dice once.",
	description : "Whenever I have advantage on an attack roll that uses Dexterity, Intelligence, Wisdom, or Charisma, I can reroll one of the dice once. [+1 Dexterity, Intelligence, Wisdom, or Charisma]",
	scorestxt : "+1 Dexterity, Intelligence, Wisdom, or Charisma"
};
FeatsList["fade away"] = {
	name : "Fade Away",
	source : [["X", 74]],
	prerequisite : "Being a Gnome",
	prereqeval : function(v) { return CurrentRace.known.indexOf('gnome') !== -1; },
	descriptionFull : "Your people are clever, with a knack for illusion magic. You have learned a magical trick for fading away when you suffer harm. You gain the following benefits:\n \u2022 Increase your Dexterity or Intelligence score by 1, to a maximum of 20.\n \u2022 Immediately after you take damage, you can use a reaction to magically become invisible until the end of your next turn or until you attack, deal damage, or force someone to make a saving throw. Once you use this ability, you can't do so again until you finish a short or long rest.",
	description : "As a reaction when I take damage, I can magically become invisible until the end of my next turn or until I attack, deal damage, or force someone to make a saving throw. Once I do this, I can't do so again until I finish a short rest. [+1 Dexterity or Intelligence]",
	scorestxt : "+1 Dexterity or Intelligence",
	action : [["reaction", ""]],
	usages : 1,
	recovery : "short rest"
};
FeatsList["fey teleportation"] = { // this code includes contributions by SoilentBrad
	name : "Fey Teleportation",
	source : [["X", 74]],
	prerequisite : "Being a High Elf",
	prereqeval : function(v) { return CurrentRace.known.indexOf('high elf') !== -1; },
	descriptionFull : "Your study of high elven lore has unlocked fey power that few other elves possess, except your eladrin cousins. Drawing on your fey ancestry, you can momentarily stride through the Feywild to shorten your path from one place to another. You gain the following benefits:\n \u2022 Increase your Intelligence or Charisma score by 1, to a maximum of 20.\n \u2022 You learn to speak, read, and write Sylvan.\n \u2022 You learn the Misty Step spell and can cast it once without expending a spell slot. You regain the ability to cast it in this way when you finish a short or long rest. Intelligence is your spellcasting ability for this spell.",
	description : "I can cast Misty Step without using a spell slot. I can do so once per short rest. Intelligence is my spellcasting ability for this spell. I also learn to speak, read, and write Sylvan. [+1 Intelligence or Charisma]",
	scorestxt : "+1 Intelligence or Charisma",
	spellcastingBonus : [{
		name : "Once per short rest",
		spellcastingAbility : 4,
		spells : ["misty step"],
		selection : ["misty step"],
		firstCol : 'oncesr'
	}],
	languageProfs : ["Sylvan"],
	usages : 1,
	recovery : "short rest"
};
FeatsList["flames of phlegethos"] = {
	name : "Flames of Phlegethos",
	source : [["X", 74]],
	prerequisite : "Being a Tiefling",
	prereqeval : function(v) { return CurrentRace.known.indexOf('tiefling') !== -1; },
	descriptionFull : "You learn to call on hellfire to serve your commands. You gain the following benefits:\n \u2022 Increase your Intelligence or Charisma score by 1, to a maximum of 20.\n \u2022 When you roll fire damage for a spell you cast, you can reroll any roll of 1 on the fire damage dice, but you must use the new roll, even if it is another 1.\n \u2022 Whenever you cast a spell that deals fire damage, you can cause flames to wreathe you until the end of your next turn. The flames don't harm you or your possessions, and they shed bright light out to 30 feet and dim light for an additional 30 feet. While the flames are present, any creature within 5 feet of you that hits you with a melee attack takes 1d4 fire damage.",
	description : "When I cast a fire damage spell, I can reroll any 1 on fire damage dice once. I then sheathe myself in flame until my next turn ends. These shed bright light in 30 ft, dim light in 30 ft and cause any within 5 ft that hit me in melee to take 1d4 fire damage. [+1 Int or Cha]",
	scorestxt : "+1 Intelligence or Charisma"	
};
FeatsList["infernal constitution"] = {
	name : "Infernal Constitution",
	source : [["X", 75]],
	prerequisite : "Being a Tiefling",
	prereqeval : function(v) { return CurrentRace.known.indexOf('tiefling') !== -1; },
	descriptionFull : "Fiendish blood runs strong in you, unlocking a resilience akin to that possessed by some fiends. You gain the following benefits:\n \u2022 Increase your Constitution score by 1, to a maximum of 20.\n \u2022 You have resistance to cold and poison damage.\n \u2022 You have advantage on saving throws against being poisoned.",
	description : "I have resistance to cold and poison damage and I have advantage on saving throws against being poisoned.\n[+1 Constitution]",
	scores : [0, 0, 1, 0, 0, 0],
	dmgres : ["Cold", "Poison"],
	savetxt : { adv_vs : ["poison"] }
};
FeatsList["orcish fury"] = {
	name : "Orcish Fury",
	source : [["X", 75]],
	prerequisite : "Being a Half-Orc",
	prereqeval : function(v) { return (/^(?=.*half)(?=.*orc).*$/i).test(CurrentRace.known); },
	descriptionFull : "Your fury burns tirelessly. You gain the following benefits:\n \u2022 Increase your Strength or Constitution score by 1, to a maximum of 20.\n \u2022 When you hit with an attack using a simple or martial weapon, you can roll one of the weapon's damage dice an additional time and add it as extra damage of the weapon's damage type. Once you use this ability, you can't use it again until you finish a short or long rest.\n \u2022 Immediately after you use your Relentless Endurance trait, you can use your reaction to make one weapon attack.",
	description : "Once per short rest, I can roll an extra damage die for an attack with a simple or martial weapon. In addition, Immediately after I use my Relentless Endurance trait, I can use my reaction to make one weapon attack. [+1 Strength or Constitution]",
	scorestxt : "+1 Strength or Constitution",
	action : [["reaction", " (after Relentless Endurance)"]],
	usages : 1,
	recovery : "short rest",
	additional : "extra damage"
};
FeatsList["prodigy"] = {
	name : "Prodigy",
	source : [["X", 75]],
	prerequisite : "Being a Half-Elf, Half-Orc, or Human",
	prereqeval : function(v) { return (/human|^(?=.*half)(?=.*(elf|orc)).*$/i).test(CurrentRace.known); },
	descriptionFull : "You have a knack for learning new things. You gain the following benefits:\n \u2022 You gain one skill proficiency of your choice, one tool proficiency of your choice, and fluency in one language of your choice.\n \u2022 Choose one skill in which you have proficiency. You gain expertise with that skill, which means your proficiency bonus is doubled for any ability check you make with it. The skill you choose must be one that isn't already benefiting from a feature, such as Expertise, that doubles your proficiency bonus.",
	description : "I gain proficiency with one skill of my choice and expertise with it, or expertise with another skill of my choice that I'm already proficient with. I also gain proficiency with one tool of my choice and fluency in one language of my choice.",
	skillstxt : "Proficiency with any one skill and Expertise with any one skill that you are already proficient with",
	languageProfs : [1],
	toolProfs : [["Any tool", 1]]
};
FeatsList["second chance"] = {
	name : "Second Chance",
	source : [["X", 75]],
	prerequisite : "Being a Halfling",
	prereqeval : function(v) { return CurrentRace.known.indexOf('halfling') !== -1; },
	descriptionFull : "Fortune favors you when someone tries to strike you. You gain the following benefits:\n \u2022 Increase your Dexterity, Constitution, or Charisma score by 1, to a maximum of 20.\n \u2022 When a creature you can see hits you with an attack roll, you can use your reaction to force that creature to reroll. Once you use this ability, you can't use it again until you roll initiative at the start of combat or until you finish a short or long rest.",
	description : "When a creature I can see hits me with an attack roll, I can use my reaction to force that creature to reroll. Once I use this ability, I can't do so again until I roll initiative at the start of combat or I finish a short rest. [+1 Dexterity, Constitution, or Charisma]",
	scorestxt : "+1 Dexterity, Constitution, or Charisma",
	action : [["reaction", ""]],
	usages : 1,
	recovery : "Combat"
};
FeatsList["squat nimbleness"] = {
	name : "Squat Nimbleness",
	source : [["X", 75]],
	prerequisite : "Being a Dwarf or a small race",
	prereqeval : function(v) { return (/dwarf/i).test(CurrentRace.known) || tDoc.getField('Size Category').currentValueIndices === 4; },
	descriptionFull : "You are uncommonly nimble for your race. You gain the following benefits:\n \u2022 Increase your Strength or Dexterity score by 1, to a maximum of 20.\n \u2022 Increase your walking speed by 5 feet.\n \u2022 You gain proficiency in the Acrobatics or Athletics skill (your choice).\n \u2022 You have advantage on any Strength (Athletics) or Dexterity (Acrobatics) check you make to escape from being grappled.",
	description : "My walking speed increases by 5 ft. I gain proficiency in either the Acrobatics or the Athletics skill. I have advantage on Dexterity (Acrobatics) and Strength (Athletics) checks I make to escape from being grappled. [+1 Strength or Dexterity]",
	scorestxt : "+1 Strength or Dexterity",
	skillstxt : "Acrobatics or Athletics",
	speed : { walk : {spd : "+5", enc : "+5" } }
};
FeatsList["wood elf magic"] = {
	name : "Wood Elf Magic",
	source : [["X", 75]],
	prerequisite : "Being a Wood Elf",
	prereqeval : function(v) { return CurrentRace.known.indexOf('wood elf') !== -1; },
	descriptionFull : "You learn the magic of the primeval woods, which are revered and protected by your people. You learn one druid cantrip of your choice. You also learn the Longstrider and Pass Without Trace spells, each of which you can cast once without expending a spell slot. You regain the ability to cast these two spells in this way when you finish a long rest. Wisdom is your spellcasting ability for all three spells.",
	description : "I learn a druid cantrip. In addition, I can cast Longstrider and Pass Without Trace, without expending a spell slot, but each only once per long rest. Wisdom is my spellcasting ability for these three spells.",
	spellcastingBonus : [{
		name : "Druid Cantrip",
		spellcastingAbility : 5,
		"class" : "druid",
		level : [0, 0],
		firstCol : 'atwill'
	}, {
		name : "Once per long rest",
		spells : ["longstrider"],
		selection : ["longstrider"],
		firstCol : 'oncelr'
	}, {
		name : "Once per long rest",
		spells : ["pass without trace"],
		selection : ["pass without trace"],
		firstCol : 'oncelr'
	}]
};

// [dupl_start] Add spells, first those taken from the Elemental Evil Player's Companion, if not already present
if (!SourceList.E || !(/Elemental.*Evil.*Player.*Companion/i).test(SourceList.E.name)) {
	SpellsList["abi-dalzim's horrid wilting"] = {
		name : "Abi-Dalzim's Horrid Wilting",
		nameShort : "Abi-D's Horrid Wilting",
		nameAlt : "Horrid Wilting",
		classes : ["sorcerer", "wizard"],
		source : [["X", 150], ["E", 15]],
		level : 8,
		school : "Necro",
		time : "1 a",
		range : "150 ft",
		components : "V,S,M",
		compMaterial : "A bit of sponge",
		duration : "Instantaneous",
		save : "Con",
		description : "30-ft cube all crea 12d8 Necrotic dmg; save halves; plants/water elem. dis. const/undead immune",
		descriptionFull : "You draw the moisture from every creature in a 30-foot cube centered on a point you choose within range. Each creature in that area must make a Constitution saving throw. Constructs and undead aren't affected, and plants and water elementals make this saving throw with disadvantage. A creature takes 12d8 necrotic damage on a failed save, or half as much damage on a successful one." + "\n   " + "Nonmagical plants in the area that aren't creatures, such as trees and shrubs, wither and die instantly."
	};
	SpellsList["absorb elements"] = {
		name : "Absorb Elements",
		classes : ["artificer", "druid", "ranger", "sorcerer", "wizard"],
		source : [["X", 150], ["E", 15]],
		level : 1,
		school : "Abjur",
		time : "1 rea",
		timeFull : "1 reaction, which you take when you take acid, cold, fire, lightning, or thunder damage",
		range : "Self",
		components : "S",
		duration : "1 rnd",
		description : "Acid, Cold, Fire, Lightning, or Thunder resistance till next turn start; first melee hit +1d6+1d6/SL dmg",
		descriptionFull : "The spell captures some of the incoming energy, lessening its effect on you and storing it for your next melee attack. You have resistance to the triggering damage type until the start of your next turn. Also, the first time you hit with a melee attack on your next turn, the target takes an extra 1d6 damage of the triggering type, and the spell ends." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each slot level above 1st."
	};
	SpellsList["aganazzar's scorcher"] = {
		name : "Aganazzar's Scorcher",
		nameAlt : "Scorch", //as per the Spell Compandium's (DnD 3.5e) alternative name
		classes : ["sorcerer", "wizard"],
		source : [["X", 150], ["E", 15]],
		level : 2,
		school : "Evoc",
		time : "1 a",
		range : "30-ft line",
		components : "V,S,M",
		compMaterial : "A red dragon's scale",
		duration : "Instantaneous",
		save : "Dex",
		description : "30-ft long 5-ft wide line all creatures 3d8+1d8/SL Fire dmg; save halves",
		descriptionFull : "A line of roaring flame 30 feet long and 5 feet wide emanates from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 3d8 fire damage on a failed save, or half as much damage on a successful one." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd."
	};
	SpellsList["beast bond"] = {
		name : "Beast Bond",
		classes : ["druid", "ranger"],
		source : [["X", 150], ["E", 15]],
		level : 1,
		school : "Div",
		time : "1 a",
		range : "Touch",
		components : "V,S,M",
		compMaterial : "A bit of fur wrapped in a cloth",
		duration : "Conc, 10 min",
		description : "Telepathic link with 1 beast Int<4 while in line of sight; beast has adv. on attacks vs. crea I can see",
		descriptionFull : "You establish a telepathic link with one beast you touch that is friendly to you or charmed by you. The spell fails if the beast's Intelligence is 4 or higher. Until the spell ends, the link is active while you and the beast are within line of sight of each other. Through the link, the beast can understand your telepathic messages to it, and it can telepathically communicate simple emotions and concepts back to you. While the link is active, the beast gains advantage on attack rolls against any creature within 5 feet of you that you can see."
	};
	SpellsList["bones of the earth"] = {
		name : "Bones of the Earth",
		classes : ["druid"],
		source : [["X", 150], ["E", 15]],
		level : 6,
		school : "Trans",
		time : "1 a",
		range : "120 ft",
		components : "V,S",
		duration : "Instantaneous",
		save : "Dex",
		description : "6+2/SL 5-ft dia stone lift up 30 ft; \u2265Medium crea save or lifted, 6d6 Bludg. dmg if hit ceiling; see B",
		descriptionShorter : "6+2/SL 5-ft dia stone lift up 30 ft; \u2265Medium crea save or lift, 6d6 Bludg. dmg if hit ceiling; see B",
		descriptionShorterMetric : "6+2/SL 1,5-m dia stone lift 9 m; \u2265Medium crea save or lift, 6d6 Bludg. dmg if hit ceiling; see B",
		descriptionFull : "You cause up to six pillars of stone to burst from places on the ground that you can see within range. Each pillar is a cylinder that has a diameter of 5 feet and a height of up to 30 feet. The ground where a pillar appears must be wide enough for its diameter, and you can target the ground under a creature if that creature is Medium or smaller. Each pillar has AC 5 and 30 hit points. When reduced to 0 hit points, a pillar crumbles into rubble, which creates an area of difficult terrain with a 10-foot radius that lasts until the rubble is cleared. Each 5-foot-diameter portion of the area requires at least 1 minute to clear by hand.\n   If a pillar is created under a creature, that creature must succeed on a Dexterity saving throw or be lifted by the pillar. A creature can choose to fail the save.\n   If a pillar is prevented from reaching its full height because of a ceiling or other obstacle, a creature on the pillar takes 6d6 bludgeoning damage and is restrained, pinched between the pillar and the obstacle. The restrained creature can use an action to make a Strength or Dexterity check (the creature's choice) against the spell's save DC. On a success, the creature is no longer restrained and must either move off the pillar or fall off it." + AtHigherLevels + "When you cast this spell using a spell slot of 7th level or higher, you can create two additional pillars for each slot level above 6th."
	};
	SpellsList["catapult"] = {
		name : "Catapult",
		classes : ["artificer", "sorcerer", "wizard"],
		source : [["X", 150], ["E", 15]],
		level : 1,
		school : "Trans",
		time : "1 a",
		range : "60 ft",
		components : "S",
		duration : "Instantaneous",
		save : "Dex",
		description : "Send 5+5/SL lb unattended object in 90 ft straight line; if crea hit, save or 3d8+1d8/SL Bludg. dmg",
		descriptionFull : "Choose one object weighing 1 to 5 pounds within range that isn't being worn or carried. The object flies in a straight line up to 90 feet in a direction you choose before falling to the ground, stopping early if it impacts against a solid surface. If the object would strike a creature, that creature must make a Dexterity saving throw. On a failed save, the object strikes the target and stops moving. When the object strikes something, the object and what it strikes each take 3d8 bludgeoning damage." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the maximum weight of objects that you can target with this spell increases by 5 pounds, and the damage increases by 1d8, for each slot level above 1st."
	};
	SpellsList["control flames"] = {
		name : "Control Flames",
		classes : ["druid", "sorcerer", "wizard"],
		source : [["X", 152], ["E", 16]],
		level : 0,
		school : "Trans",
		time : "1 a",
		range : "60 ft",
		components : "S",
		duration : "Instant. or 1 h",
		description : "Nonmagical flame up to 5 cu ft; instant: expand/extinguish, 1h: brighten/dim/color/create shapes",
		descriptionFull : "You choose nonmagical flame that you can see within range and that fits within a 5-foot cube. You affect it in one of the following ways." + "\n \u2022 " + "You instantaneously expand the flame 5 feet in one direction, provided that wood or other fuel is present in the new location." + "\n \u2022 " + "You instantaneously extinguish the flames within the cube." + "\n \u2022 " + "You double or halve the area of bright light and dim light cast by the flame, change its color, or both. The change lasts for 1 hour." + "\n \u2022 " + "You cause simple shapes-such as the vague form of a creature, an inanimate object, or a location-to appear within the flames and animate as you like. The shapes last for 1 hour." + "\n   " + "If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."
	};
	SpellsList["control winds"] = {
		name : "Control Winds",
		classes : ["druid", "sorcerer", "wizard"],
		source : [["X", 152], ["E", 16], ["UA:D", 8]],
		level : 5,
		school : "Trans",
		time : "1 a",
		range : "300 ft",
		components : "V,S",
		duration : "Conc, 1 h",
		description : "100-ft cube of air either gusts, downdraft, or updraft; affects flying/jump/ranged; 1 a change; see B",
		descriptionFull : "You take control of the air in a 100-foot cube that you can see within range. Choose one of the following effects when you cast the spell. The effect lasts for the spell's duration, unless you use your action on a later turn to switch to a different effect. You can also use your action to temporarily halt the effect or to restart one you've halted." + "\n   " + toUni("Gusts") + ": A wind picks up within the cube, continually blowing in a horizontal direction you designate. You choose the intensity of the wind: calm, moderate, or strong. If the wind is moderate or strong, ranged weapon attacks that enter or leave the cube or pass through it have disadvantage on their attack rolls. If the wind is strong, any creature moving against the wind must spend 1 extra foot of movement for each foot moved." + "\n   " + toUni("Downdraft") + ": You cause a sustained blast of strong wind to blow downward from the top of the cube. Ranged weapon attacks that pass through the cube or that are made against targets within it have disadvantage on their attack rolls. A creature must make a Strength saving throw if it flies into the cube for the first time on a turn or starts its turn there flying. On a failed save, the creature is knocked prone." + "\n   " + toUni("Updraft") + ": You cause a sustained updraft within the cube, rising upward from the cube's bottom side. Creatures that end a fall within the cube take only half damage from the fall. When a creature in the cube makes a vertical jump, the creature can jump up to 10 feet higher than normal."
	};
	SpellsList["create bonfire"] = {
		name : "Create Bonfire",
		classes : ["artificer", "druid", "sorcerer", "warlock", "wizard"],
		source : [["X", 152], ["E", 16]],
		level : 0,
		school : "Conj",
		time : "1 a",
		range : "60 ft",
		components : "V,S",
		duration : "Conc, 1 min",
		save : "Dex",
		description : "5-ft cube all crea now/enter/end turn save or 1d8 Fire dmg; ignites flammable; +1d8 at CL 5/11/17",
		descriptionShorter : "5-ft cube all now/enter/end save or 1d8 Fire dmg; ignites flammable; +1d8 at CL 5/11/17",
		descriptionCantripDie : "5-ft cube all crea at casting, entering, or end turn in save or `CD`d8 Fire dmg; ignites flammable",
		descriptionFull : "You create a bonfire on ground that you can see within range. Until the spell ends, the magic bonfire fills a 5-foot cube. Any creature in the bonfire's space when you cast the spell must succeed on a Dexterity saving throw or take 1d8 fire damage. A creature must also make the saving throw when it moves into the bonfire's space for the first time on a turn or ends its turn there." + "\n   " + "The bonfire ignites flammable objects in its area that aren't being worn or carried." + "\n   " + "The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
	};
	SpellsList["dust devil"] = {
		name : "Dust Devil",
		classes : ["druid", "sorcerer", "wizard"],
		source : [["X", 154], ["E", 17]],
		level : 2,
		school : "Conj",
		time : "1 a",
		range : "60 ft",
		components : "V,S,M",
		compMaterial : "A pinch of dust",
		duration : "Conc, 1 min",
		save : "Str",
		description : "5-ft cube; all in 5-ft 1d8+1d8/SL Bludg. dmg and pushed 10 ft away; save halves, no push; see book",
		descriptionFull : "Choose an unoccupied 5-foot cube of air that you can see within range. An elemental force that resembles a dust devil appears in the cube and lasts for the spell's duration." + "\n   " + "Any creature that ends its turn within 5 feet of the dust devil must make a Strength saving throw. On a failed save, the creature takes 1d8 bludgeoning damage and is pushed 10 feet away from the dust devil. On a successful save, the creature takes half as much damage and isn't pushed." + "\n   " + "As a bonus action, you can move the dust devil up to 30 feet in any direction. If the dust devil moves over sand, dust, loose dirt, or light gravel, it sucks up the material and forms a 10-foot-radius cloud of debris around itself that lasts until the start of your next turn. The cloud heavily obscures its area." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd."
	};
	SpellsList["earthbind"] = {
		name : "Earthbind",
		classes : ["druid", "sorcerer", "warlock", "wizard"],
		source : [["X", 154], ["E", 17]],
		level : 2,
		school : "Trans",
		time : "1 a",
		range : "300 ft",
		components : "V",
		duration : "Conc, 1 min",
		save : "Str",
		description : "1 creatures save or fly speed is reduced to 0; airborne creatures safely descend at 60 ft per round",
		descriptionFull : "Choose one creature you can see within range. Yellow strips of magical energy loop around the creature. The target must succeed on a Strength saving throw, or its flying speed (if any) is reduced to 0 feet for the spell's duration. An airborne creature affected by this spell safely descends at 60 feet per round until it reaches the ground or the spell ends."
	};
	SpellsList["earth tremor"] = {
		name : "Earth Tremor",
		classes : ["bard", "druid", "sorcerer", "wizard"],
		source : [["X", 155], ["E", 17]],
		level : 1,
		school : "Evoc",
		time : "1 a",
		range : "10 ft",
		components : "V,S",
		duration : "Instantaneous",
		save : "Dex",
		description : "All crea in range except me save or 1d6+1d6/SL Bludgeoning dmg and prone; loose ground is dif. ter.",
		descriptionFull : "You cause a tremor in the ground within range. Each creature other than you in that area must make a Dexterity saving throw. On a failed save, a creature takes 1d6 bludgeoning damage and is knocked prone. If the ground in that area is loose earth or stone, it becomes difficult terrain until cleared, with each 5-foot-diameter portion requiring at least 1 minute to clear by hand." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
	};
	SpellsList["elemental bane"] = {
		name : "Elemental Bane",
		classes : ["artificer", "druid", "warlock", "wizard"],
		source : [["X", 155], ["E", 17]],
		level : 4,
		school : "Trans",
		time : "1 a",
		range : "90 ft",
		components : "V,S",
		duration : "Conc, 1 min",
		save : "Con",
		description : "1+1/SL crea, each max 30 ft apart, save or 1 energy: lose resist. to it \u0026 +2d6 to first dmg with it/turn",
		descriptionShorter : "1+1/SL crea, each max 30 ft apart, save or 1 energy: lose resist. \u0026 +2d6 first dmg/turn",
		descriptionFull : "Choose one creature you can see within range, and choose one of the following damage types - acid, cold, fire, lightning, or thunder. The target must succeed on a Constitution saving throw or be affected by the spell for its duration. The first time each turn the affected target takes damage of the chosen type, the target takes an extra 2d6 damage of that type. Moreover, the target loses any resistance to that damage type until the spell ends." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th. The creatures must be within 30 feet of each other when you target them.",
		dynamicDamageBonus : {
			multipleDmgTypes : {
				dmgTypes : ["acid", "cold", "fire", "lightning", "thunder"],
				inDescriptionAs : "first"
			}
		}
	};
	SpellsList["erupting earth"] = {
		name : "Erupting Earth",
		classes : ["druid", "sorcerer", "wizard"],
		source : [["X", 155], ["E", 17]],
		level : 3,
		school : "Trans",
		time : "1 a",
		range : "120 ft",
		components : "V,S,M",
		compMaterial : "A piece of obsidian",
		duration : "Instantaneous",
		save : "Dex",
		description : "20-ft cube all crea 3d12+1d12/SL Bludgeoning dmg; save halves; area becomes difficult terrain",
		descriptionFull : "Choose a point you can see on the ground within range. A fountain of churned earth and stone erupts in a 20-foot cube centered on that point. Each creature in that area must make a Dexterity saving throw. A creature takes 3d12 bludgeoning damage on a failed save, or half as much damage on a successful one. Additionally, the ground in that area becomes difficult terrain until cleared. Each 5-foot-square portion of the area requires at least 1 minute to clear by hand." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d12 for each slot level above 3rd."
	};
	SpellsList["flame arrows"] = {
		name : "Flame Arrows",
		classes : ["artificer", "druid", "ranger", "sorcerer", "wizard"],
		source : [["X", 156], ["E", 18]],
		level : 3,
		school : "Trans",
		time : "1 a",
		range : "Touch",
		components : "V,S",
		duration : "Conc, 1 h",
		description : "12+2/SL ammunition drawn from touched quiver do +1d6 Fire damage on a successful hit",
		descriptionFull : "You touch a quiver containing arrows or bolts. When a target is hit by a ranged weapon attack using a piece of ammunition drawn from the quiver, the target takes an extra 1d6 fire damage. The spell's magic ends on the piece of ammunition when it hits or misses, and the spell ends when twelve pieces of ammunition have been drawn from the quiver." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the number of pieces of ammunition you can affect with this spell increases by two for each slot level above 3rd."
	};
	SpellsList["frostbite"] = {
		name : "Frostbite",
		classes : ["artificer", "druid", "sorcerer", "warlock", "wizard"],
		source : [["X", 156], ["E", 18]],
		level : 0,
		school : "Evoc",
		time : "1 a",
		range : "60 ft",
		components : "V,S",
		duration : "Instantaneous",
		save : "Con",
		description : "1 crea save or 1d6 Cold dmg and dis. on next weapon attack roll; +1d6 at CL 5, 11, and 17",
		descriptionCantripDie : "1 crea save or `CD`d6 Cold dmg and dis. on next weapon attack roll",
		descriptionFull : "You cause numbing frost to form on one creature that you can see within range. The target must make a Constitution saving throw. On a failed save, the target takes 1d6 cold damage, and it has disadvantage on the next weapon attack roll it makes before the end of its next turn." + "\n   " + "The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
	};
	SpellsList["gust"] = {
		name : "Gust",
		classes : ["druid", "sorcerer", "wizard"],
		source : [["X", 157], ["E", 19], ["E:RLW", 50], ["UA:D", 6], ["WGtE", 107]],
		level : 0,
		school : "Trans",
		time : "1 a",
		range : "30 ft",
		components : "V,S",
		duration : "Instantaneous",
		save : "Str",
		description : "Med. or smaller crea save or push 5 ft; or push unattended 5 lb obj 10 ft; or harmless sensory effect",
		descriptionFull : "You seize the air and compel it to create one of the following effects at a point you can see within range." + "\n " + "\u2022 One Medium or smaller creature that you choose must succeed on a Strength saving throw or be pushed up to 5 feet away from you." + "\n " + "\u2022 You create a small blast of air capable of moving one object that is neither held nor carried and that weighs no more than 5 pounds. The object is pushed up to 10 feet away from you. It isn't pushed with enough force to cause damage." + "\n " + "\u2022 You create a harmless sensory affect using air, such as causing leaves to rustle, wind to slam shutters shut, or your clothing to ripple in a breeze."
	};
	SpellsList["ice knife"] = {
		name : "Ice Knife",
		classes : ["druid", "sorcerer", "wizard"],
		source : [["X", 157], ["E", 19]],
		level : 1,
		school : "Conj",
		time : "1 a",
		range : "60 ft",
		components : "S,M",
		compMaterial : "A drop of water or piece of ice",
		duration : "Instantaneous",
		save : "Dex",
		description : "Ranged atk for 1d10 Piercing dmg; hit/miss 5-ft rad on target all crea save or 2d6+1d6/SL Cold dmg",
		descriptionShorter : "Ranged atk 1d10 Piercing dmg; on target 5-ft rad all crea save or 2d6+1d6/SL Cold dmg",
		descriptionFull : "You create a shard of ice and fling it at one creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 piercing damage. Hit or miss, the shard then explodes. The target and each creature within 5 feet of it must succeed on a Dexterity saving throw or take 2d6 cold damage." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the cold damage increases by 1d6 for each slot level above 1st.",
		dynamicDamageBonus : {
			skipDmgGroupIfNotMultiple : /(atk .*piercing dmg.*?)/i
		}
	};
	SpellsList["immolation"] = {
		name : "Immolation",
		classes : ["sorcerer", "wizard"],
		source : [["X", 158], ["E", 19]],
		level : 5,
		school : "Evoc",
		time : "1 a",
		range : "90 ft",
		components : "V",
		duration : "Conc, 1 min",
		save : "Dex",
		description : "1 crea save or 8d6 Fire dmg \u0026 burns for 4d6 Fire dmg/rnd; save each rnd to end; save half, no burning",
		descriptionShorter : "1 crea save or 8d6 Fire dmg \u0026 4d6 Fire dmg/rnd; save each rnd to end; save half, no rnds",
		descriptionFull : "Flames wreathe one creature you can see within range. The target must make a Dexterity saving throw. It takes 8d6 fire damage on a failed save, or half as much damage on a successful one. On a failed save, the target also burns for the spell's duration. The burning target sheds bright light in a 30-foot radius and dim light for an additional 30 feet. At the end of each of its turns, the target repeats the saving throw. It takes 4d6 fire damage on a failed save, and the spell ends on a successful one. These magical flames can't be extinguished by nonmagical means." + "\n   " + "If damage from this spell kills a target, the target is turned to ash.",
		dynamicDamageBonus : { multipleDmgMoments : false }
	};
	SpellsList["investiture of flame"] = {
		name : "Investiture of Flame",
		classes : ["druid", "sorcerer", "warlock", "wizard"],
		source : [["X", 159], ["E", 19]],
		level : 6,
		school : "Trans",
		time : "1 a",
		range : "Self",
		components : "V,S",
		duration : "Conc, 10 min",
		save : "Dex",
		description : "Fire immune; Cold res.; 1d10 Fire dmg in 5 ft; 1 a 15-ft long 5-ft wide all crea 4d8 Fire dmg, save half",
		descriptionShorter : "Fire im.; Cold res.; 1d10 Fire dmg in 5 ft; 1a 15-ft long 5-ft wide all 4d8 Fire dmg, save half",
		descriptionShorterMetric : "Fire immune; Cold res.; 1d10 Fire dmg in 1,5 m; 1 a 4,5-m long all 4d8 Fire dmg, save half",
		descriptionFull : "Flames race across your body, shedding bright light in a 30-foot radius and dim light for an additional 30 feet for the spell's duration. The flames don't harm you. Until the spell ends, you gain the following benefits." + "\n " + "\u2022 You are immune to fire damage and have resistance to cold damage." + "\n " + "\u2022 Any creature that moves within 5 feet of you for the first time on a turn or ends its turn there takes 1d10 fire damage." + "\n " + "\u2022 You can use your action to create a line of fire 15 feet long and 5 feet wide extending from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 4d8 fire damage on a failed save, or half as much damage on a successful one."
	};
	SpellsList["investiture of ice"] = {
		name : "Investiture of Ice",
		classes : ["druid", "sorcerer", "warlock", "wizard"],
		source : [["X", 159], ["E", 19]],
		level : 6,
		school : "Trans",
		time : "1 a",
		range : "Self",
		components : "V,S",
		duration : "Conc, 10 min",
		save : "Con",
		description : "Cold im.; Fire res.; 10-ft rad dif. ter.; 1 a 15-ft cone all crea 4d6 Cold dmg, half spd; save half, no spd",
		descriptionShorter : "Cold im.; Fire res.; 10-ft rad dif. ter.; 1 a 15-ft cone all 4d6 Cold dmg, half speed; save half",
		descriptionFull : "Until the spell ends, ice rimes your body, and you gain the following benefits." + "\n " + "\u2022 You are immune to cold damage and have resistance to fire damage." + "\n " + "\u2022 You can move across difficult terrain created by ice or snow without spending extra movement." + "\n " + "\u2022 The ground in a 10-foot radius around you is icy and is difficult terrain for creatures other than you. The radius moves with you." + "\n " + "\u2022 You can use your action to create a 15-foot cone of freezing wind extending from your outstretched hand in a direction you choose. Each creature in the cone must make a Constitution saving throw. A creature takes 4d6 cold damage on a failed save, or half as much damage on a successful one. A creature that fails its save against this effect has its speed halved until the start of your next turn."
	};
	SpellsList["investiture of stone"] = {
		name : "Investiture of Stone",
		classes : ["druid", "sorcerer", "warlock", "wizard"],
		source : [["X", 159], ["E", 19]],
		level : 6,
		school : "Trans",
		time : "1 a",
		range : "Self",
		components : "V,S",
		duration : "Conc, 10 min",
		save : "Dex",
		description : "Nonmagical Bludg/Pierc/Slash resist.; 1 a 15-ft rad all crea save or prone; move through earth/stone",
		descriptionFull : "Until the spell ends, bits of rock spread across your body, and you gain the following benefits:" + "\n \u2022 " + "You have resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks." + "\n \u2022 " + "You can use your action to create a small earthquake on the ground in a 15-foot radius centered on you. Other creatures on that ground must succeed on a Dexterity saving throw or be knocked prone." + "\n \u2022 " + "You can move across difficult terrain made of earth or stone without spending extra movement. You can move through solid earth or stone as if it was air and without destabilizing it, but you can't end your movement there. If you do so, you are ejected to the nearest unoccupied space, this spell ends, and you are stunned until the end of your next turn."
	};
	SpellsList["investiture of wind"] = {
		name : "Investiture of Wind",
		classes : ["druid", "sorcerer", "warlock", "wizard"],
		source : [["X", 160], ["E", 20]],
		level : 6,
		school : "Trans",
		time : "1 a",
		range : "Self",
		components : "V,S",
		duration : "Conc, 10 min",
		save : "Con",
		description : "Rngd wea atks dis. vs. me; fly 60 ft; 1 a 15-ft cube in 60 ft all 2d10 Bludg. dmg, push 10 ft, save half",
		descriptionShorter : "Rngd wea atk dis; fly 60 ft; 1 a 15-ft cu in 60 ft all 2d10 Bludg. dmg, push 10 ft, save half",
		descriptionFull : "Until the spell ends, wind whirls around you, and you gain the following benefits." + "\n " + "\u2022 Ranged weapon attacks made against you have disadvantage on the attack roll." + "\n " + "\u2022 You gain a flying speed of 60 feet. If you are still flying when the spell ends, you fall, unless you can somehow prevent it." + "\n " + "\u2022 You can use your action to create a 15-foot cube of swirling wind centered on a point you can see within 60 feet of you. Each creature in that area must make a Constitution saving throw. A creature takes 2d10 bludgeoning damage on a failed save, or half as much damage on a successful one. If a Large or smaller creature fails the save, that creature is also pushed up to 10 feet away from the center of the cube."
	};
	SpellsList["maelstrom"] = {
		name : "Maelstrom",
		classes : ["druid"],
		source : [["X", 160], ["E", 20]],
		level : 5,
		school : "Evoc",
		time : "1 a",
		range : "120 ft",
		components : "V,S,M",
		compMaterial : "Paper or leaf in the shape of a funnel",
		duration : "Conc, 1 min",
		save : "Str",
		description : "5-ft deep 30-ft rad dif. ter.; all crea starting turn in save or 6d6 Bludg. dmg and pulled 10 ft to center",
		descriptionShorter : "5-ft deep 30-ft rad dif. ter.; all start turn in save or 6d6 Bludg. dmg \u0026 pull 10 ft to center",
		descriptionFull : "A mass of 5-foot-deep water appears and swirls in a 30-foot radius centered on a point you can see within range. The point must be on ground or in a body of water. Until the spell ends, that area is difficult terrain, and any creature that starts its turn there must succeed on a Strength saving throw or take 6d6 bludgeoning damage and be pulled 10 feet toward the center."
	};
	SpellsList["magic stone"] = {
		name : "Magic Stone",
		classes : ["artificer", "druid", "warlock"],
		source : [["X", 160], ["E", 20]],
		level : 0,
		school : "Trans",
		time : "1 bns",
		range : "Touch",
		components : "V,S",
		duration : "1 min",
		description : "Imbue 3 pebbles for spell attacks, thrown 60 ft or with sling, do 1d6+spellcasting mod Bludg. dmg",
		descriptionShorter : "Imbue 3 pebbles for spell atk, thrown 60 ft or sling, do 1d6+spellcasting mod Bludg. dmg",
		descriptionFull : "You touch one to three pebbles and imbue them with magic. You or someone else can make a ranged spell attack with one of the pebbles by throwing it or hurling it with a sling. If thrown, it has a range of 60 feet. If someone else attacks with the pebble, that attacker adds your spellcasting ability modifier, not the attacker's, to the attack roll. On a hit, the target takes bludgeoning damage equal to 1d6 + your spellcasting ability modifier. Hit or miss, the spell then ends on the stone." + "\n   " + "If you cast this spell again, the spell ends early on any pebbles still affected by it."
	};
	SpellsList["maximilian's earthen grasp"] = {
		name : "Maximilian's Earthen Grasp",
		nameShort : "Max's Earthen Grasp",
		nameAlt : "Earthen Grasp",
		classes : ["sorcerer", "wizard"],
		source : [["X", 161], ["E", 20]],
		level : 2,
		school : "Trans",
		time : "1 a",
		range : "30 ft",
		components : "V,S,M",
		compMaterial : "A miniature hand sculpted from clay",
		duration : "Conc, 1 min",
		save : "Str",
		description : "Medium hand atks 1 crea: save or 2d6 Bludg. dmg \u0026 restrained; 1 a hand moves/atks, releases; see B",
		descriptionShorter : "Medium hand atk 1 crea: save or 2d6 Bludg. dmg \u0026 restrained; 1 a move/atk, release; see B",
		descriptionFull : "You choose a 5-foot-square unoccupied space on the ground that you can see within range. A Medium hand made from compacted soil rises there and reaches for one creature you can see within 5 feet of it. The target must make a Strength saving throw. On a failed save, the target takes 2d6 bludgeoning damage and is restrained for the spell's duration." + "\n   " + "As an action, you can cause the hand to crush the restrained target, which must make a Strength saving throw. The target takes 2d6 bludgeoning damage on a failed save, or half as much damage on a successful one." + "\n   " + "To break out, the restrained target can use its action to make a Strength check against your spell save DC. On a success, the target escapes and is no longer restrained by the hand." + "\n   " + "As an action, you can cause the hand to reach for a different creature or to move to a different unoccupied space within range. The hand releases a restrained target if you do either."
	};
	SpellsList["melf's minute meteors"] = {
		name : "Melf's Minute Meteors",
		nameAlt : "Minute Meteors",
		classes : ["sorcerer", "wizard"],
		source : [["X", 161], ["E", 20]],
		level : 3,
		school : "Evoc",
		time : "1 a",
		range : "Self",
		components : "V,S,M",
		compMaterial : "Niter, sulfur, and pine tar formed into a bead",
		duration : "Conc, 10 min",
		save : "Dex",
		description : "6+2/SL meteors; at casting/bns a send up to two 120 ft for 5-ft rad all crea 2d6 Fire dmg; save half",
		descriptionShorter : "6+2/SL meteors; at cast/bns a send up to two 120 ft for 5-ft rad all 2d6 Fire dmg; save half",
		descriptionFull : "You create six tiny meteors in your space. They float in the air and orbit you for the spell's duration. When you cast the spell-and as a bonus action on each of your turns thereafter-you can expend one or two of the meteors, sending them streaking toward a point or points you choose within 120 feet of you. Once a meteor reaches its destination or impacts against a solid surface, the meteor explodes. Each creature within 5 feet of the point where the meteor explodes must make a Dexterity saving throw. A creature takes 2d6 fire damage on a failed save, or half as much damage on a successful one." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the number of meteors created increases by two for each slot level above 3rd."
	};
	SpellsList["mold earth"] = {
		name : "Mold Earth",
		classes : ["druid", "sorcerer", "wizard"],
		source : [["X", 162], ["E", 21]],
		level : 0,
		school : "Trans",
		time : "1 a",
		range : "30 ft",
		components : "S",
		duration : "Instant. or 1 h",
		description : "5 cu ft earth; instant.: excavate; 1h: change to difficult or normal terrain, or change shape and color",
		descriptionFull : "You choose a portion of dirt or stone that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways." + "\n " + "\u2022 If you target an area of loose earth, you can instantaneously excavate it, move it along the ground, and deposit it up to 5 feet away. This movement doesn't have enough force to cause damage." + "\n " + "\u2022 You cause shapes, colors, or both to appear on the dirt or stone, spelling out words, creating images, or shaping patterns. The changes last for 1 hour." + "\n " + "\u2022 If the dirt or stone you target is on the ground, you cause it to become difficult terrain. Alternatively, you can cause the ground to become normal terrain if it is already difficult terrain. This change lasts for 1 hour." + "\n\n" + "If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."
	};
	SpellsList["primordial ward"] = {
		name : "Primordial Ward",
		classes : ["druid"],
		source : [["X", 163], ["E", 21]],
		level : 6,
		school : "Abjur",
		time : "1 a",
		range : "Self",
		components : "V,S",
		duration : "Conc, 1 min",
		description : "Acid, Cold, Fire, Lightning, and Thunder resistance; use rea to gain 1 immunity for 1 rnd, spell ends",
		descriptionFull : "You have resistance to acid, cold, fire, lightning, and thunder damage for the spell's duration." + "\n   " + "When you take damage of one of those types, you can use your reaction to gain immunity to that type of damage, including against the triggering damage. If you do so, the resistances end, and you have the immunity until the end of your next turn, at which time the spell ends."
	};
	SpellsList["pyrotechnics"] = {
		name : "Pyrotechnics",
		classes : ["artificer", "bard", "sorcerer", "wizard"],
		source : [["X", 163], ["E", 21]],
		level : 2,
		school : "Trans",
		time : "1 a",
		range : "60 ft",
		components : "V,S",
		duration : "Instantaneous",
		save : "Con",
		description : "5 cu ft nonma. flame extinguish, or 10-ft rad all crea save or blind 1 rnd, or 20-ft rad hvy obsc. 1 min",
		descriptionFull : "Choose an area of nonmagical flame that you can see and that fits within a 5-foot cube within range. You can extinguish the fire in that area, and you create either fireworks or smoke when you do so." + "\n   " + toUni("Fireworks") + ": The target explodes with a dazzling display of colors. Each creature within 10 feet of the target must succeed on a Constitution saving throw or become blinded until the end of your next turn." + "\n   " + toUni("Smoke") + ": Thick black smoke spreads out from the target in a 20-foot radius, moving around corners. The area of the smoke is heavily obscured. The smoke persists for 1 minute or until a strong wind disperses it."
	};
	SpellsList["shape water"] = {
		name : "Shape Water",
		classes : ["druid", "sorcerer", "wizard"],
		source : [["X", 164], ["E", 21], ["W", 172]],
		level : 0,
		school : "Trans",
		time : "1 a",
		range : "30 ft",
		components : "S",
		duration : "Instant. or 1 h",
		description : "5 cu ft water; instant: move/change flow; 1h: simple shapes/change color or opacity/freeze",
		descriptionFull : "You choose an area of water that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways." + "\n " + "\u2022 You instantaneously move or otherwise change the flow of the water as you direct, up to 5 feet in any direction. This movement doesn't have enough force to cause damage." + "\n " + "\u2022 You cause the water to form into simple shapes and animate at your direction. This change lasts for 1 hour." + "\n " + "\u2022 You change the water's color or opacity. The water must be changed in the same way throughout. This change lasts for 1 hour." + "\n " + "\u2022 You freeze the water, provided that there are no creatures in it. The water unfreezes in 1 hour." + "\n\n" + "If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."
	};
	SpellsList["skywrite"] = {
		name : "Skywrite",
		classes : ["artificer", "bard", "druid", "wizard"],
		source : [["X", 165], ["E", 22]],
		ritual : true,
		level : 2,
		school : "Trans",
		time : "1 a",
		range : "Sight",
		components : "V,S",
		duration : "Conc, 1 h",
		description : "Write up to 10 words with clouds in a part of the sky I can see; strong wind can diperse the clouds",
		descriptionFull : "You cause up to ten words to form in a part of the sky you can see. The words appear to be made of cloud and remain in place for the spell's duration. The words dissipate when the spell ends. A strong wind can disperse the clouds and end the spell early."
	};
	SpellsList["snilloc's snowball swarm"] = {
		name : "Snilloc's Snowball Swarm",
		nameAlt : "Snowball Swarm",
		classes : ["sorcerer", "wizard"],
		source : [["X", 165], ["E", 22]],
		level : 2,
		school : "Evoc",
		time : "1 a",
		range : "90 ft",
		components : "V,S,M",
		compMaterial : "A piece of ice or a small white rock chip",
		duration : "Instantaneous",
		save : "Dex",
		description : "5-ft radius all creatures 3d6+1d6/SL Cold damage; save halves",
		descriptionFull : "A flurry of magic snowballs erupts from a point you choose within range. Each creature in a 5-foot-radius sphere centered on that point must make a Dexterity saving throw. A creature takes 3d6 cold damage on a failed save, or half as much damage on a successful one." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd."
	};
	SpellsList["storm sphere"] = {
		name : "Storm Sphere",
		classes : ["sorcerer", "wizard"],
		source : [["X", 166], ["E", 22]],
		level : 4,
		school : "Evoc",
		time : "1 a",
		range : "150 ft",
		components : "V,S",
		duration : "Conc, 1 min",
		save : "Str",
		description : "20-ft rad dif. ter., all now/end turn save or 2d6 Bludg. dmg; bns a 60 ft atk 4d6 Lightn. dmg; +1d6/SL",
		descriptionShorter : "20-ft rad dif. ter., all save/turn 2d6 Bludg. dmg; bns a 60 ft atk 4d6 Lightn. dmg; +1d6/SL",
		descriptionFull : "A 20-foot-radius sphere of whirling air springs into existence centered on a point you choose within range. The sphere remains for the spell's duration. Each creature in the sphere when it appears or that ends its turn there must succeed on a Strength saving throw or take 2d6 bludgeoning damage. The sphere's space is difficult terrain." + "\n   " + "Until the spell ends, you can use a bonus action on each of your turns to cause a bolt of lightning to leap from the center of the sphere toward one creature you choose within 60 feet of the center. Make a ranged spell attack. You have advantage on the attack roll if the target is in the sphere. On a hit, the target takes 4d6 lightning damage." + "\n   " + "Creatures within 30 feet of the sphere have disadvantage on Wisdom (Perception) checks made to listen." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the damage increases for each of its effects by 1d6 for each slot level above 4th."
	};
	SpellsList["thunderclap"] = {
		name : "Thunderclap",
		classes : ["artificer", "bard", "druid", "sorcerer", "warlock", "wizard"],
		source : [["X", 168], ["E", 22]],
		level : 0,
		school : "Evoc",
		time : "1 a",
		range : "5 ft",
		components : "S",
		duration : "Instantaneous",
		save : "Con",
		description : "100-ft rad audible; all crea but me in area save or 1d6 Thunder dmg; +1d6 at CL 5, 11, and 17",
		descriptionCantripDie : "100-ft rad audible; all crea but me in area save or `CD`d6 Thunder dmg",
		descriptionFull : "You create a burst of thunderous sound that can be heard up to 100 feet away. Each creature within range, other than you, must succeed on a Constitution saving throw or take 1d6 thunder damage." + "\n   " + "The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
	};
	SpellsList["tidal wave"] = {
		name : "Tidal Wave",
		classes : ["druid", "sorcerer", "wizard"],
		source : [["X", 168], ["E", 22]],
		level : 3,
		school : "Conj",
		time : "1 a",
		range : "120 ft",
		components : "V,S,M",
		compMaterial : "A drop of water",
		duration : "Instantaneous",
		save : "Dex",
		description : "30-ft x 10-ft, 10-ft high all crea 4d8 Bludg. dmg and prone; save halves not prone; extinguish flames",
		descriptionFull : "You conjure up a wave of water that crashes down on an area within range. The area can be up to 30 feet long, up to 10 feet wide, and up to 10 feet tall. Each creature in that area must make a Dexterity saving throw. On a failed save, a creature takes 4d8 bludgeoning damage and is knocked prone. On a successful save, a creature takes half as much damage and isn't knocked prone. The water then spreads out across the ground in all directions, extinguishing unprotected flames in its area and within 30 feet of it, and then it vanishes."
	};
	SpellsList["transmute rock"] = {
		name : "Transmute Rock",
		classes : ["artificer", "druid", "wizard"],
		source : [["X", 169], ["E", 22]],
		level : 5,
		school : "Trans",
		time : "1 a",
		range : "120 ft",
		components : "V,S,M",
		compMaterial : "Clay and water",
		duration : "Until dispelled",
		description : "40 cu ft stone to mud or mud to stone; mud and stone restrains; mud from ceiling falls; see book",
		descriptionFull : "You choose an area of stone or mud that you can see that fits within a 40-foot cube and is within range, and choose one of the following effects." + "\n   " + toUni("Transmute Rock to Mud") + ": Nonmagical rock of any sort in the area becomes an equal volume of thick, flowing mud that remains for the spell's duration." + "\n   " + "The ground in the spell's area becomes muddy enough that creatures can sink into it. Each foot that a creature moves through the mud costs 4 feet of movement, and any creature on the ground when you cast the spell must make a Strength saving throw. A creature must also make the saving throw when it moves into the area for the first time on a turn or ends its turn there. On a failed save, a creature sinks into the mud and is restrained, though it can use an action to end the restrained condition on itself by pulling itself free of the mud." + "\n   " + "If you cast the spell on a ceiling, the mud falls. Any creature under the mud when it falls must make a Dexterity saving throw. A creature takes 4d8 bludgeoning damage on a failed save, or half as much damage on a successful one." + "\n   " + toUni("Transmute Mud to Rock") + ": Nonmagical mud or quicksand in the area no more than 10 feet deep transforms into soft stone for the spell's duration. Any creature in the mud when it transforms must make a Dexterity saving throw. On a successful save, a creature is shunted safely to the surface in an unoccupied space. On a failed save, a creature becomes restrained by the rock. A restrained creature, or another creature within reach, can use an action to try to break the rock by succeeding on a DC 20 Strength check or by dealing damage to it. The rock has AC 15 and 25 hit points, and it is immune to poison and psychic damage."
	};
	SpellsList["vitriolic sphere"] = {
		name : "Vitriolic Sphere",
		classes : ["sorcerer", "wizard"],
		source : [["X", 170], ["E", 23]],
		level : 4,
		school : "Evoc",
		time : "1 a",
		range : "150 ft",
		components : "V,S,M",
		compMaterial : "A drop of giant slug bile",
		duration : "Instantaneous",
		save : "Dex",
		description : "20-ft rad all crea 10d4+2d4/SL Acid dmg, +5d4 dmg next turn end; save half \u0026 no dmg next turn",
		descriptionShorter : "20-ft rad all crea 10d4+2d4/SL Acid dmg, +5d4 dmg next turn; save half \u0026 no next turn",
		descriptionFull : "You point at a location within range, and a glowing, 1-foot-diameter ball of emerald acid streaks there and explodes in a 20-foot-radius sphere. Each creature in that area must make a Dexterity saving throw. On a failed save, a creature takes 10d4 acid damage and another 5d4 acid damage at the end of its next turn. On a successful save, a creature takes half the initial damage and no damage at the end of its next turn." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the initial damage increases by 2d4 for each slot level above 4th.",
		dynamicDamageBonus : {
			multipleDmgMoments : false,
			extraDmgGroupsSameType : /((?:\+?\d+d?\d*)+)( dmg next turn)/i
		}
	};
	SpellsList["wall of sand"] = {
		name : "Wall of Sand",
		classes : ["wizard"],
		source : [["X", 170], ["E", 23]],
		level : 3,
		school : "Evoc",
		time : "1 a",
		range : "90 ft",
		components : "V,S,M",
		compMaterial : "A handful of sand",
		duration : "Conc, 10 min",
		description : "30\xD710\xD710ft (l\xD7w\xD7h) wall on the ground; blocks line of sight; blinded while inside; 1/3 move",
		descriptionMetric : "9\xD73\xD73m (l\xD7w\xD7h) wall on the ground; blocks line of sight; blinded while inside; 1/3 move",
		descriptionFull : "You conjure up a wall of swirling sand on the ground at a point you can see within range. You can make the wall up to 30 feet long, 10 feet high, and 10 feet thick, and it vanishes when the spell ends. It blocks line of sight but not movement. A creature is blinded while in the wall's space and must spend 3 feet of movement for every 1 foot it moves there."
	};
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
	SpellsList["warding wind"] = {
		name : "Warding Wind",
		classes : ["bard", "druid", "sorcerer", "wizard"],
		source : [["X", 170], ["E", 23]],
		level : 2,
		school : "Evoc",
		time : "1 a",
		range : "S:10-ft rad",
		components : "V",
		duration : "Conc, 10 min",
		description : "Strong (20 mph) wind around me deafens/extinguishes unprotected flames/dif. ter./ranged wea dis.",
		descriptionMetric : "Strong (32 kph) wind around me deafens/extinguishes unprotected flames/dif. ter./ranged wea dis.",
		descriptionFull : "A strong wind (20 miles per hour) blows around you in a 10-foot radius and moves with you, remaining centered on you. The wind lasts for the spell's duration.\n   The wind has the following effects."+
		"\n \u2022 It deafens you and other creatures in its area."+
		"\n \u2022 It extinguishes unprotected flames in its area that are torch-sized or smaller."+
		"\n \u2022 The area is difficult terrain for creatures other than you."+
		"\n \u2022 The attack rolls of ranged weapon attacks have disadvantage if they pass in or out of the wind."+
		"\n \u2022 It hedges out vapor, gas, and fog that can be dispersed by strong wind."
	};
	SpellsList["watery sphere"] = {
		name : "Watery Sphere",
		classes : ["druid", "sorcerer", "wizard"],
		source : [["X", 170], ["E", 23]],
		level : 4,
		school : "Conj",
		time : "1 a",
		range : "90 ft",
		components : "V,S,M",
		compMaterial : "A droplet of water",
		duration : "Conc, 1 min",
		save : "Str",
		description : "5-ft rad all crea < Huge save or restrained; on save ejected; save each rnd; 1 a move sphere 30 ft",
		descriptionFull : "You conjure up a sphere of water with a 5-foot radius at a point you can see within range. The sphere can hover but no more than 10 feet off the ground. The sphere remains for the spell's duration." + "\n   " + "Any creature in the sphere's space must make a Strength saving throw. On a successful save, a creature is ejected from that space to the nearest unoccupied space of the creature's choice outside the sphere. A Huge or larger creature succeeds on the saving throw automatically, and a Large or smaller creature can choose to fail it. On a failed save, a creature is restrained by the sphere and is engulfed by the water. At the end of each of its turns, a restrained target can repeat the saving throw, ending the effect on itself on a success." + "\n   " + "The sphere can restrain as many as four Medium or smaller creatures or one Large creature. If the sphere restrains a creature that causes it to exceed this capacity, a random creature that was already restrained by the sphere falls out of it and lands prone in a space within 5 feet of it." + "\n   " + "As an action, you can move the sphere up to 30 feet in a straight line. If it moves over a pit, a cliff, or other drop-off, it safely descends until it is hovering 10 feet above the ground. Any creature restrained by the sphere moves with it. You can ram the sphere into creatures, forcing them to make the saving throw." + "\n   " + "When the spell ends, the sphere falls to the ground and extinguishes all normal flames within 30 feet of it. Any creature restrained by the sphere is knocked prone in the space where it falls. The water then vanishes."
	};
	SpellsList["whirlwind"] = {
		name : "Whirlwind",
		classes : ["druid", "sorcerer", "wizard"],
		source : [["X", 171], ["E", 24]],
		level : 7,
		school : "Evoc",
		time : "1 a",
		range : "300 ft",
		components : "V,M",
		compMaterial : "A piece of straw",
		duration : "Conc, 1 min",
		save : "Dex",
		description : "10-ft rad 30-ft high all crea 10d6 Bludg. dmg; save halves; restrains; 1 a move 30 ft; see book",
		descriptionFull : "A whirlwind howls down to a point that you can see on the ground within range. The whirlwind is a 10-foot-radius, 30-foot-high cylinder centered on that point. Until the spell ends, you can use your action to move the whirlwind up to 30 feet in any direction along the ground. The whirlwind sucks up any Medium or smaller objects that aren't secured to anything and that aren't worn or carried by anyone." + "\n   " + "A creature must make a Dexterity saving throw the first time on a turn that it enters the whirlwind or that the whirlwind enters its space, including when the whirlwind first appears. A creature takes 10d6 bludgeoning damage on a failed save, or half as much damage on a successful one. In addition, a Large or smaller creature that fails the save must succeed on a Strength saving throw or become restrained in the whirlwind until the spell ends. When a creature starts its turn restrained by the whirlwind, the creature is pulled 5 feet higher inside it, unless the creature is at the top. A restrained creature moves with the whirlwind and falls when the spell ends, unless the creature has some means to stay aloft." + "\n   " + "A restrained creature can use an action to make a Strength or Dexterity check against your spell save DC. If successful, the creature is no longer restrained by the whirlwind and is hurled 3d6 \xD7 10 feet away from it in a random direction."
	};
}; // dupl_end

// Then add the new spells from XGtE (contains contributions by SoilentBrad)
SpellsList["catnap"] = {
	name : "Catnap",
	classes : ["artificer", "bard", "sorcerer", "wizard"],
	source : [["X", 151]],
	level : 3,
	school : "Ench",
	time : "1 a",
	range : "30 ft",
	components : "S,M",
	compMaterial : "A pinch of sand",
	duration : "10 min",
	description : "3+1/SL willing crea unconscious for 10 min to gain benefits of short rest; Ends if dmg or 1 a to wake",
	descriptionFull : "You make a calming gesture, and up to three willing creatures of your choice that you can see within range fall unconscious for the spell's duration. The spell ends on a target early if it takes damage or someone uses an action to shake or slap it awake. If a target remains unconscious for the full duration, that target gains the benefit of a short rest, and it can't be affected by this spell again until it finishes a long rest." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, you can target one additional willing creature for each slot level above 3rd."
};
SpellsList["cause fear"] = {
	name : "Cause Fear",
	classes : ["warlock", "wizard"],
	source : [["X", 151]],
	level : 1,
	school : "Necro",
	time : "1 a",
	range : "60 ft",
	components : "V",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "1+1/SL crea (not construct/undead), each max 30 ft apart, save or frightened; save end of each turn",
	descriptionFull : "You awaken the sense of mortality in one creature you can see within range. A construct or an undead is immune to this effect. The target must succeed on a Wisdom saving throw or become frightened of you until the spell ends. The frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them."
};
SpellsList["ceremony"] = {
	name : "Ceremony",
	classes : ["cleric", "paladin"],
	source : [["X", 151]],
	ritual : true,
	level : 1,
	school : "Abjur",
	time : "1 h",
	range : "Touch",
	components : "V,S,M\u2020",
	compMaterial : "25 gp worth of powdered silver, which the spell consumes",
	duration : "Instantaneous",
	description : "Perform religious ceremony on target(s) within 10 ft throughout the casting; see book (25gp cons.)",
	descriptionFull : "You perform a special religious ceremony that is infused with magic. When you cast the spell, choose one of the following rites, the target of which must be within 10 feet of you throughout the casting." + "\n   " + toUni("Atonement") + ": You touch one willing creature whose alignment has changed, and you make a DC 20 Wisdom (Insight) check. On a successful check, you restore the target to its original alignment." + "\n   " + toUni("Bless Water") + ": You touch one vial of water and cause it to become holy water." + "\n   " + toUni("Coming of Age") + ": You touch one humanoid who is a young adult. For the next 24 hours, whenever the target makes an ability check, it can roll a d4 and add the number rolled to the ability check. A creature can benefit from this rite only once." + "\n   " + toUni("Dedication") + ": You touch one humanoid who wishes to be dedicated to your god's service. For the next 24 hours, whenever the target makes a saving throw, it can roll a d4 and add the number rolled to the save. A creature can benefit from this rite only once." + "\n   " + toUni("Funeral Rite") + ": You touch one corpse, and for the next 7 days, the target can't become undead by any means short of a wish spell." + "\n   " + toUni("Wedding") + ": You touch adult humanoids willing to be bonded together in marriage. For the next 7 days, each target gains a +2 bonus to AC while they are within 30 feet of each other. A creature can benefit from this rite again only if widowed."
};
SpellsList["chaos bolt"] = {
	name : "Chaos Bolt",
	classes : ["sorcerer"],
	source : [["X", 151], ["G", 67]],
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Instantaneous",
	description : "Spell atk 2d8+1d6+1d6/SL dmg, d8s set dmg type, see B; double on d8s: new atk vs. crea in 30 ft",
	descriptionShorter : "Spell atk 2d8+1d6+1d6/SL dmg, d8s set type, see B; double on d8s: new atk vs. crea in 30 ft",
	descriptionFull : "You hurl an undulating, warbling mass of chaotic energy at one creature in range. Make a ranged spell attack against the target. On a hit, the target takes 2d8 + 1d6 damage. Choose one of the d8s. The number rolled on that die determines the attack's damage type, as shown below." + "\n\n" + toUni("d8") + "\t" + toUni("Damage Type") + "\n  1\tAcid" + "\n  2\tCold" + "\n  3\tFire" + "\n  4\tForce" + "\n  5\tLightning" + "\n  6\tPoison" + "\n  7\tPsychic" + "\n  8\tThunder" + "\n\n   " + "If you roll the same number on both d8s, the chaotic energy leaps from the target to a different creature of your choice within 30 feet of it. Make a new attack roll against the new target, and make a new damage roll, which could cause the chaotic energy to leap again." + "\n   " + "A creature can be targeted only once by each casting of this spell." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, each target takes 1d6 extra damage of the type rolled for each slot level above 1st.",
	dynamicDamageBonus : {
		multipleDmgTypes : {
			dmgTypes : ["acid", "cold", "fire", "force", "lightning", "poison", "psychic", "thunder"],
			inDescriptionAs : ''
		}
	}
};
SpellsList["charm monster"] = {
	name : "Charm Monster",
	classes : ["bard", "druid", "sorcerer", "warlock", "wizard"],
	source : [["X", 151]],
	level : 4,
	school : "Ench",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "1 h",
	save : "Wis",
	description : "1+1/SL creatures, each max 30 ft apart, save or charmed; adv. on save if me/ally is fighting it",
	descriptionFull : "You attempt to charm a creature you can see within range. It must make a Wisdom saving throw, and it does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature is friendly to you. When the spell ends, the creature knows it was charmed by you." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th. The creatures must be within 30 feet of each other when you target them."
};
SpellsList["create homunculus"] = {
	name : "Create Homunculus",
	classes : ["wizard"],
	source : [["X", 152]],
	level : 6,
	school : "Trans",
	time : "1 h",
	range : "Touch",
	components : "V,S,M\u0192",
	compMaterial : "Clay, ash, and mandrake root, all of which the spell consumes, and a jewel-encrusted dagger worth at least 1,000 gp", 
	duration : "Instantaneous",
	description : "I take 2d4 piercing dmg to create a homunculus as my faithful companion; see book (1000gp)",
	descriptionFull : "While speaking an intricate incantation, you cut yourself with a jewel-encrusted dagger, taking 2d4 piercing damage that can't be reduced in any way. You then drip your blood on the spell's other components and touch them, transforming them into a special construct called a homunculus." + "\n   " + "The statistics of the homunculus are in the Monster Manual. It is your faithful companion, and it dies if you die. Whenever you finish a long rest, you can spend up to half your Hit Dice if the homunculus is on the same plane of existence as you. When you do so, roll each die and add your Constitution modifier to it. Your hit point maximum is reduced by the total, and the homunculus's hit point maximum and current hit points are both increased by it. This process can reduce you to no lower than 1 hit point, and the change to your and the homunculus's hit points ends when you finish your next long rest. The reduction to your hit point maximum can't be removed by any means before then, except by the homunculus's death." + "\n   " + "You can have only one homunculus at a time. If you cast this spell while your homunculus lives, the spell fails.",
	dynamicDamageBonus : { doNotProcess : true } // You don't want to do yourself more damage do you?
};
SpellsList["crown of stars"] = {
	name : "Crown of Stars",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["X", 152]],
	level : 7,
	school : "Evoc",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "1 h",
	description : "7+2/SL motes shed 30-ft light; bonus action to fire one as 120 ft ranged atk for 4d12 Radiant dmg",
	descriptionShorter : "7+2/SL motes shed 30-ft light; bns a to fire one as 120 ft ranged atk for 4d12 Radiant dmg",
	descriptionFull : "Seven star-like motes of light appear and orbit your head until the spell ends. You can use a bonus action to send one of the motes streaking toward one creature or object within 120 feet of you. When you do so, make a ranged spell attack. On a hit, the target takes 4d12 radiant damage. Whether you hit or miss, the mote is expended. The spell ends early if you expend the last mote." + "\n   " + "If you have four or more motes remaining, they shed bright light in a 30-foot radius and dim light for an additional 30 feet. If you have one to three motes remaining, they shed dim light in a 30-foot radius." + AtHigherLevels + "When you cast this spell using a spell slot of 8th level or higher, the number of motes created increases by two for each slot level above 7th."
};
SpellsList["danse macabre"] = {
	name : "Danse Macabre",
	classes : ["warlock", "wizard"],
	source : [["X", 153]],
	level : 5,
	school : "Necro",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 h",
	description : "5+2/SL small/medium corpses as zombie/skeleton; spellc. mod to atk/dmg; bns a command in 60 ft",
	descriptionFull : "Threads of dark power leap from your fingers to pierce up to five Small or Medium corpses you can see within range. Each corpse immediately stands up and becomes undead. You decide whether it is a zombie or a skeleton (the statistics for zombies and skeletons are in the Monster Manual), and it gains a bonus to its attack and damage rolls equal to your spellcasting ability modifier." + "\n   " + "You can use a bonus action to mentally command the creatures you make with this spell, issuing the same command to all of them. To receive the command, a creature must be within 60 feet of you. You decide what action the creatures will take and where they will move during their next turn, or you can issue a general command, such as to guard a chamber or passageway against your foes. If you issue no commands, the creatures do nothing except defend themselves against hostile creatures. Once given an order, the creatures continue to follow it until their task is complete." + "\n   " + "The creatures are under your control until the spell ends, after which they become inanimate once more" + AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, you animate up to two additional corpses for each slot level above 5th."
};
SpellsList["dawn"] = {
	name : "Dawn",
	classes : ["cleric", "wizard"],
	source : [["X", 153]],
	level : 5,
	school : "Evoc",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M\u0192",
	compMaterial : "A sunburst pendant worth at least 100 gp", 
	duration : "Conc, 1 min",
	save : "Con",
	description : "30-ft rad 40-ft high all crea 4d10 Radiant dmg at cast/end turn; bns a move it 60 ft (100gp)",
	descriptionFull : "The light of dawn shines down on a location you specify within range. Until the spell ends, a 30-foot-radius, 40-foot-high cylinder of bright light glimmers there. This light is sunlight." + "\n   " + "When the cylinder appears, each creature in it must make a Constitution saving throw, taking 4d10 radiant damage on a failed save, or half as much damage on a successful one. A creature must also make this saving throw whenever it ends its turn in the cylinder." + "\n   " + "If you're within 60 feet of the cylinder, you can move it up to 60 feet as a bonus action on your turn."
};
SpellsList["dragon's breath"] = {
	name : "Dragon's Breath",
	classes : ["sorcerer", "wizard"],
	source : [["X", 154]],
	level : 2,
	school : "Trans",
	time : "1 bns",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "A hot pepper",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "1 willing crea: 1 a breathe 15-ft cone all 3d6+1d6/SL Acid/Cold/Fire/Lightn./Poison dmg; save half",
	descriptionShorter : "1 willing crea: 1 a 15-ft cone 3d6+1d6/SL Acid/Cold/Fire/Lightn/Poison dmg; save half",
	descriptionFull : "You touch one willing creature and imbue it with the power to spew magical energy from its mouth, provided it has one. Choose acid, cold, fire, lightning, or poison. Until the spell ends, the creature can use an action to exhale energy of the chosen type in a 15-foot cone. Each creature in that area must make a Dexterity saving throw, taking 3d6 damage of the chosen type on a failed save, or half as much damage on a successful one." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd.",
	dynamicDamageBonus : {
		multipleDmgTypes : {
			dmgTypes : ["acid", "cold", "fire", "lightning", "poison"],
			inDescriptionAs : "Acid/Cold/Fire/Lightn.?/Poison"
		}
	}
};
SpellsList["druid grove"] = {
	name : "Druid Grove",
	classes : ["druid"],
	source : [["X", 154]],
	level : 6,
	school : "Abjur",
	time : "10 min",
	range : "Touch",
	components : "V,S,M\u2020",
	compMaterial : "Mistletoe, which the spell consumes, that was harvested with a golden sickle under the light of a full moon",
	duration : "24 h",
	description : "Protect 30-ft to 90-ft cube outdoors or underground; see book for effects",
	descriptionFull : "You invoke the spirits of nature to protect an area outdoors or underground. The area can be as small as a 30-foot cube or as large as a 90-foot cube. Buildings and other structures are excluded from the affected area. If you cast this spell in the same area every day for a year, the spell lasts until dispelled." + "\n   " + "The spell creates the following effects within the area. When you cast this spell, you can specify creatures as friends who are immune to the effects. You can also specify a password that, when spoken aloud, makes the speaker immune to these effects." + "\n   " + "The entire warded area radiates magic. A dispel magic cast on the area, if successful, removes only one of the following effects, not the entire area. That spell's caster chooses which effect to end. Only when all its effects are gone is this spell dispelled." + "\n   " + toUni("Solid Fog") + ": You can fill any number of 5-foot squares on the ground with thick fog, making them heavily obscured. The fog reaches 10 feet high. In addition, every foot of movement through the fog costs 2 extra feet. To a creature immune to this effect, the fog obscures nothing and looks like soft mist, with motes of green light floating in the air." + "\n   " + toUni("Grasping Undergrowth") + ": You can fill any number of 5-foot squares on the ground that aren't filled with fog with grasping weeds and vines, as if they were affected by an entangle spell. To a creature immune to this effect, the weeds and vines feel soft and reshape themselves to serve as temporary seats or beds." + "\n   " + toUni("Grove Guardians") + ": You can animate up to four trees in the area, causing them to uproot themselves from the ground. These trees have the same statistics as an awakened tree, which appears in the Monster Manual, except they can't speak, and their bark is covered with druidic symbols. If any creature not immune to this effect enters the warded area, the grove guardians fight until they have driven off or slain the intruders. The grove guardians also obey your spoken commands (no action required by you) that you issue while in the area. If you don't give them commands and no intruders are present, the grove guardians do nothing. The grove guardians can't leave the warded area. When the spell ends, the magic animating them disappears, and the trees take root again if possible." + "\n   " + toUni("Additional Spell Effects") + ": You can place your choice of one of the following magical effects within the warded area:" + "\n \u2022 " + "A constant gust of wind in two locations of your choice" + "\n \u2022 " + "Spike growth in one location of your choice" + "\n \u2022 " + "Wind wall in two locations of your choice" + "\n   " + "To a creature immune to this effect, the winds are a fragrant, gentle breeze, and the area of spike growth is harmless."
};
SpellsList["enemies abound"] = {
	name : "Enemies Abound",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : [["X", 155]],
	level : 3,
	school : "Ench",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Int",
	description : "1 crea save or regard all creatures it can see as enemies, random targeting; save when damaged to end",
	descriptionFull : "You reach into the mind of one creature you can see and force it to make an Intelligence saving throw. A creature automatically succeeds if it is immune to being frightened. On a failed save, the target loses the ability to distinguish friend from foe, regarding all creatures it can see as enemies until the spell ends. Each time the target takes damage, it can repeat the saving throw, ending the effect on itself on a success." + "\n   " + "Whenever the affected creature chooses another creature as a target, it must choose the target at random from among the creatures it can see within range of the attack, spell, or other ability it's using. If an enemy provokes an opportunity attack from the affected creature, the creature must make that attack if it is able to."
};
SpellsList["enervation"] = {
	name : "Enervation",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["X", 155]],
	level : 5,
	school : "Necro",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "1 crea 2d8+1d8/SL Necrotic dmg, saved: ends; fail: +2d8 dmg and Act to repeat; I heal half; see B",
	descriptionShorter : "1 crea 2d8+1d8/SL Necro. dmg, save: ends; fail: +2d8 dmg & Act repeat; I heal half; see B",
	descriptionFull : "A tendril of inky darkness reaches out from you, touching a creature you can see within range to drain life from it. The target must make a Dexterity saving throw. On a successful save, the target takes 2d8 necrotic damage, and the spell ends. On a failed save, the target takes 4d8 necrotic damage, and until the spell ends, you can use your action on each of your turns to automatically deal 4d8 necrotic damage to the target. The spell ends if you use your action to do anything else, if the target is ever outside the spell's range, or if the target has total cover from you." + "\n   " + "Whenever the spell deals damage to a target, you regain hit points equal to half the amount of necrotic damage the target takes." + AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th.",
};
SpellsList["far step"] = {
	name : "Far Step",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["X", 155]],
	level : 5,
	school : "Conj",
	time : "1 bns",
	range : "Self",
	components : "V",
	duration : "Conc, 1 min",
	description : "At casting and as bonus action for duration, I can teleport 60 ft to a space I can see",
	descriptionFull : "You teleport up to 60 feet to an unoccupied space you can see. On each of your turns before the spell ends, you can use a bonus action to teleport in this way again."
};
SpellsList["find greater steed"] = {
	name : "Find Greater Steed",
		classes : ["paladin"],
		source : [["X", 156]],
		level : 4,
		school : "Conj",
		time : "10 min",
		range : "30 ft",
		components : "V,S",
		duration : "Instantaneous",
		description : "Gain the services of a steed; can communicate with it telepathically; can share spells with it; see book",
		descriptionFull : "You summon a spirit that assumes the form of a loyal, majestic mount. Appearing in an unoccupied space within range, the spirit takes on a form you choose: a griffon, a pegasus, a peryton, a dire wolf, a rhinoceros, or a saber-toothed tiger. The creature has the statistics provided in the Monster Manual for the chosen form, though it is a celestial, a fey, or a fiend (your choice) instead of its normal creature type. Additionally, if it has an Intelligence score of 5 or lower, its Intelligence becomes 6, and it gains the ability to understand one language of your choice that you speak." + "\n   " + "You control the mount in combat. While the mount is within 1 mile of you, you can communicate with it telepathically. While mounted on it, you can make any spell you cast that targets only you also target the mount." + "\n   " + "The mount disappears temporarily when it drops to 0 hit points or when you dismiss it as an action. Casting this spell again re-summons the bonded mount, with all its hit points restored and any conditions removed." + "\n   " + "You can't have more than one mount bonded by this spell or find steed at the same time. As an action, you can release a mount from its bond, causing it to disappear permanently." + "\n   " + "Whenever the mount disappears, it leaves behind any objects it was wearing or carrying."
};
SpellsList["guardian of nature"] = {
	name : "Guardian of Nature",
	classes : ["druid", "ranger"],
	source : [["X", 157]],
	level : 4,
	school : "Trans",
	time : "1 bns",
	range : "Self",
	components : "V",
	duration : "Conc, 1 min",
	description : "I transform into a Primal Beast (offensive bonuses) or a Great Tree (defensive bonuses); see book",
	descriptionFull : "A nature spirit answers your call and transforms you into a powerful guardian. The transformation lasts until the spell ends. You choose one of the following forms to assume: Primal Beast or Great Tree." + "\n\n" + toUni("Primal Beast") + ": Bestial fur covers your body, your facial features become feral, and you gain the following benefits:" + "\n \u2022 " + "Your walking speed increases by 10 feet." + "\n \u2022 " + "You gain darkvision with a range of 120 feet." + "\n \u2022 " + "You make Strength-based attack rolls with advantage." + "\n \u2022 " + "Your melee weapon attacks deal an extra 1d6 force damage on a hit." + "\n\n" + toUni("Great Tree") + ": Your skin appears barky, leaves sprout from your hair, and you gain the following benefits:" + "\n \u2022 " + "You gain 10 temporary hit points." + "\n \u2022 " + "You make Constitution saving throws with advantage." + "\n \u2022 " + "You make Dexterity- and Wisdom-based attack rolls with advantage." + "\n \u2022 " + "While you are on the ground, the ground within 15 feet of you is difficult terrain for your enemies."
};
SpellsList["healing spirit"] = { // limited usages (https://media.wizards.com/2020/dnd/downloads/XGtE-Errata.pdf)
	name : "Healing Spirit",
	classes : ["druid", "ranger"],
	source : [["X", 157]],
	level : 2,
	school : "Conj",
	time : "1 bns",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	description : "5-ft cube; any living crea I see start/enter heals 1d6+1d6/SL HP; 1+spell mod uses; bns a move it 30 ft",
	descriptionShorter : "5-ft cube; any living start/enter heals 1d6+1d6/SL HP; 1+spell mod uses; bns a move 30 ft",
	descriptionFull : "You call forth a nature spirit to soothe the wounded. The intangible spirit appears in a space that is a 5-foot cube you can see within range. The spirit looks like a transparent beast or fey (your choice)." + "\n   " + "Until the spell ends, whenever you or a creature you can see moves into the spirit's space for the first time on a turn or starts its turn there, you can cause the spirit to restore 1d6 hit points to that creature (no action required). The spirit can't heal constructs or undead. The spirit can heal a number of times equal to 1 + your spellcasting ability modifier (minimum of twice). After healing that number of times, the spirit disappears." + "\n   " + "As a bonus action on your turn, you can move the spirit up to 30 feet to a space you can see." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the healing increases by 1d6 for each slot level above 2nd."
};
SpellsList["holy weapon"] = { 
	name : "Holy Weapon",
	classes : ["cleric", "paladin"],
	source : [["X", 157]],
	level : 5,
	school : "Evoc",
	time : "1 bns",
	range : "Touch",
	components : "V,S",
	duration : "Conc, 1 h",
	save : "Con",
	description : "Wea +2d8 Radiant dmg; bns a end spell: 30-ft rad all crea 4d8 Radiant dmg, blind; save half, no blind",
	descriptionShorter : "wea +2d8 Radiant dmg; bns a end: 30-ft rad all 4d8 Radiant dmg, blind; save half, no blind",
	descriptionFull : "You imbue a weapon you touch with holy power. Until the spell ends, the weapon emits bright light in a 30-foot radius and dim light for an additional 30 feet. In addition, weapon attacks made with it deal an extra 2d8 radiant damage on a hit. If the weapon isn't already a magic weapon, it becomes one for the duration." + "\n   " + "As a bonus action on your turn, you can dismiss this spell and cause the weapon to emit a burst of radiance. Each creature of your choice that you can see within 30 feet of the weapon must make a Constitution saving throw. On a failed save, a creature takes 4d8 radiant damage, and it is blinded for 1 minute. On a successful save, a creature takes half as much damage and isn't blinded. At the end of each of its turns, a blinded creature can make a Constitution saving throw, ending the effect on itself on a success.",
	dynamicDamageBonus : {
		multipleDmgMoments : false,
		skipDmgGroupIfNotMultiple : /(wea .*?radiant dmg.*?)/i
	}
};
SpellsList["illusory dragon"] = {
	name : "Illusory Dragon",
	classes : ["wizard"],
	source : [["X", 157]],
	level : 8,
	school : "Illus",
	time : "1 a",
	range : "120 ft",
	components : "S",
	duration : "Conc, 1 min",
	save : "W/I",
	description : "Huge shadowy dragon; see: Wis save or fright.; bns a move 60 ft \u0026 breath wea 7d6 dmg; Int save half",
	descriptionShorter : "Huge illus.; see: Wis save or fright.; bns a move 60 ft \u0026 breath wea 7d6 dmg; Int save half",
	descriptionFull : "By gathering threads of shadow material from the Shadowfell, you create a Huge shadowy dragon in an unoccupied space that you can see within range. The illusion lasts for the spell's duration and occupies its space, as if it were a creature." + "\n   " + "When the illusion appears, any of your enemies that can see it must succeed on a Wisdom saving throw or become frightened of it for 1 minute. If a frightened creature ends its turn in a location where it doesn't have line of sight to the illusion, it can repeat the saving throw, ending the effect on itself on a success." + "\n   " + "As a bonus action on your turn, you can move the illusion up to 60 feet. At any point during its movement, you can cause it to exhale a blast of energy in a 60-foot cone originating from its space. When you create the dragon, choose a damage type: acid, cold, fire, lightning, necrotic, or poison. Each creature in the cone must make an Intelligence saving throw, taking 7d6 damage of the chosen damage type on a failed save, or half as much damage on a successful one." + "\n   " + "The illusion is tangible because of the shadow stuff used to create it, but attacks miss it automatically, it succeeds on all saving throws, and it is immune to all damage and conditions. A creature that uses an action to examine the dragon can determine that it is an illusion by succeeding on an Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through it and has advantage on saving throws against its breath.",
	dynamicDamageBonus : {
		multipleDmgTypes : {
			dmgTypes : ["radiant", "necrotic"],
			inDescriptionAs : ''
		}
	}
};
SpellsList["infernal calling"] = {
	name : "Infernal Calling",
	classes : ["warlock", "wizard"],
	source : [["X", 158]],
	level : 5,
	school : "Conj",
	time : "1 min",
	range : "90 ft",
	components : "V,S,M\u0192",
	compMaterial : "A ruby worth at least 999 gp",
	duration : "Conc, 1 h",
	description : "Summon 1 devil of CR 6+1/SL; hostile to all, obeys my command if to its liking or Cha check; see B",
	descriptionFull : "Uttering a dark incantation, you summon a devil from the Nine Hells. You choose the devil's type, which must be one of challenge rating 6 or lower, such as a barbed devil or a bearded devil. The devil appears in an unoccupied space that you can see within range. The devil disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The devil is unfriendly toward you and your companions. Roll initiative for the devil, which has its own turns. It is under the Dungeon Master's control and acts according to its nature on each of its turns, which might result in its attacking you if it thinks it can prevail, or trying to tempt you to undertake an evil act in exchange for limited service. The DM has the creature's statistics." + "\n   " + "On each of your turns, you can try to issue a verbal command to the devil (no action required by you). It obeys the command if the likely outcome is in accordance with its desires, especially if the result would draw you toward evil. Otherwise, you must make a Charisma (Deception, Intimidation, or Persuasion) check contested by its Wisdom (Insight) check. You make the check with advantage if you say the devil's true name. If your check fails, the devil becomes immune to your verbal commands for the duration of the spell, though it can still carry out your commands if it chooses. If your check succeeds, the devil carries out your command \u2014 such as “attack my enemies,” “explore the room ahead,” or “bear this message to the queen” \u2014 until it completes the activity, at which point it returns to you to report having done so." + "\n   " + "If your concentration ends before the spell reaches its full duration, the devil doesn't disappear if it has become immune to your verbal commands. Instead, it acts in whatever manner it chooses for 3d6 minutes, and then it disappears." + "\n   " + "If you possess an individual devil's talisman, you can summon that devil if it is of the appropriate challenge rating plus 1, and it obeys all your commands, with no Charisma checks required." + AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, the challenge rating increases by 1 for each slot level above 5th."
};
SpellsList["infestation"] = {
	name : "Infestation",
	classes : ["druid", "sorcerer", "warlock", "wizard"],
	source : [["X", 158]],
	level : 0,
	school : "Conj",
	time : "1 a",
	range : "30 ft",
	components : "V,S,M",
	compMaterial : "A living flea",
	duration : "Instantaneous",
	save : "Con",
	description : "1 crea save or 1d6 Poison dmg and moved 5 ft in random direction; +1d6 at CL 5, 11, and 17",
	descriptionCantripDie : "1 crea save or `CD`d6 Poison dmg and moved 5 ft in random direction",
	descriptionFull : "You cause a cloud of mites, fleas, and other parasites to appear momentarily on one creature you can see within range. The target must succeed on a Constitution saving throw, or it takes 1d6 poison damage and moves 5 feet in a random direction if it can move and its speed is at least 5 feet. Roll a d4 for the direction:" + "\n\n" + toUni("d4") + "\t" + toUni("Direction") + "\n  1\tNorth" + "\n  2\tSouth" + "\n  3\tEast" + "\n  4\tWest" + "\n\n   " + "This movement doesn't provoke opportunity attacks, and if the direction rolled is blocked, the target doesn't move." + "\n   " + "The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
};
SpellsList["invulnerability"] = {
	name : "Invulnerability",
	classes : ["wizard"],
	source : [["X", 160]],
	level : 9,
	school : "Abjur",
	time : "1 a",
	range : "Self",
	components : "V,S,M\u2020",
	compMaterial : "A small piece of adamantine worth at least 500 gp, which the spell consumes",
	duration : "Conc, 10 min",
	description : "Immune to all damage until the spell ends (500gp cons.)",
	descriptionFull : "You are immune to all damage until the spell ends."
};
SpellsList["life transference"] = { // can't reduce damage taken (https://media.wizards.com/2020/dnd/downloads/XGtE-Errata.pdf)
	name : "Life Transference",
	classes : ["cleric", "wizard"],
	source : [["X", 160]],
	level : 3,
	school : "Necro",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "Instantaneous",
	description : "I take 4d8+1d8/SL Necrotic dmg (in full) and 1 crea in range I can see heals twice that in HP",
	descriptionFull : "You sacrifice some of your health to mend another creature's injuries. You take 4d8 necrotic damage, which can't be reduced in any way, and one creature of your choice that you can see within range regains a number of hit points equal to twice the necrotic damage you take." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd."
};
SpellsList["maddening darkness"] = {
	name : "Maddening Darkness",
	classes : ["warlock", "wizard"],
	source : [["X", 160]],
	level : 8,
	school : "Evoc",
	time : "1 a",
	range : "150 ft",
	components : "V,M",
	compMaterial : "A drop of pitch mixed with a drop of mercury",
	duration : "Conc, 10 min",
	save : "Wis",
	description : "60-ft rad darkness; darkvision, no light works; all crea starting turn in 8d8 Psychic dmg, save halves",
	descriptionShorter : "60-ft rad darkness; darkvision, no light works; all start turn in 8d8 Psychic dmg, save half",
	descriptionFull : "Magical darkness spreads from a point you choose within range to fill a 60-foot-radius sphere until the spell ends. The darkness spreads around corners. A creature with darkvision can't see through this darkness. Nonmagical light, as well as light created by spells of 8th level or lower, can't illuminate the area." + "\n   " + "Shrieks, gibbering, and mad laughter can be heard within the sphere. Whenever a creature starts its turn in the sphere, it must make a Wisdom saving throw, taking 8d8 psychic damage on a failed save, or half as much damage on a successful one."
};
SpellsList["mass polymorph"] = {
	name : "Mass Polymorph",
	classes : ["bard", "sorcerer", "wizard"],
	source : [["X", 160]],
	level : 9,
	school : "Trans",
	time : "1 a",
	range : "120 ft",
	components : "V,S,M",
	compMaterial : "A caterpillar cocoon",
	duration : "Conc, 1 h",
	save : "Wis",
	description : "10 crea save or take chosen beast form of CR \u2264 its CR or half its char. level; can only act as beast; see B",
	descriptionFull : "You transform up to ten creatures of your choice that you can see within range. An unwilling target must succeed on a Wisdom saving throw to resist the transformation. An unwilling shapechanger automatically succeeds on the save." + "\n   " + "Each target assumes a beast form of your choice, and you can choose the same form or different ones for each target. The new form can be any beast you have seen whose challenge rating is equal to or less than the target's (or half the target's level, if the target doesn't have a challenge rating). The target's game statistics, including mental ability scores, are replaced by the statistics of the chosen beast, but the target retains its hit points, alignment, and personality." + "\n   " + "Each target gains a number of temporary hit points equal to the hit points of its new form. These temporary hit points can't be replaced by temporary hit points from another source. A target reverts to its normal form when it has no more temporary hit points or it dies. If the spell ends before then, the creature loses all its temporary hit points and reverts to its normal form." + "\n   " + "The creature is limited in the actions it can perform by the nature of its new form. It can't speak, cast spells, or do anything else that requires hands or speech." + "\n   " + "The target's gear melds into the new form. The target can't activate, use, wield, or otherwise benefit from any of its equipment."
};
SpellsList["mental prison"] = {
	name : "Mental Prison",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["X", 161]],
	level : 6,
	school : "Illus",
	time : "1 a",
	range : "60 ft",
	components : "S",
	duration : "Conc, 1 min",
	save : "Int",
	description : "1 crea 5d10 Psychic dmg; save or restrained, blind, deaf, and if moved: 10d10 dmg, ends; charm effect",
	descriptionShorter : "1 crea 5d10 Psychic dmg; save or restrained, blind, deaf, if move: 10d10 dmg, ends; charm",
	descriptionFull : "You attempt to bind a creature within an illusory cell that only it perceives. One creature you can see within range must make an Intelligence saving throw. The target succeeds automatically if it is immune to being charmed. On a successful save, the target takes 5d10 psychic damage, and the spell ends. On a failed save, the target takes 5d10 psychic damage, and you make the area immediately around the target's space appear dangerous to it in some way. You might cause the target to perceive itself as being surrounded by fire, floating razors, or hideous maws filled with dripping teeth. Whatever form the illusion takes, the target can't see or hear anything beyond it and is restrained for the spell's duration. If the target is moved out of the illusion, makes a melee attack through it, or reaches any part of its body through it, the target takes 10d10 psychic damage, and the spell ends.",
	dynamicDamageBonus : {
		multipleDmgMoments : false,
		extraDmgGroupsSameType : /(if moved?: )((?:\+?\d+d?\d*)+)/i
	}
};
SpellsList["mighty fortress"] = {
	name : "Mighty Fortress",
	classes : ["wizard"],
	source : [["X", 161]],
	level : 8,
	school : "Conj",
	time : "1 min",
	range : "1 mile",
	components : "V,S,M\u2020",
	compMaterial : "A diamond worth at least 500 gp, which the spell consumes",
	duration : "Instantaneous",
	description : "Create a stone fortress 120 ft on a side for 7 days; see book for effects (500gp cons.)",
	descriptionFull : "A fortress of stone erupts from a square area of ground of your choice that you can see within range. The area is 120 feet on each side, and it must not have any buildings or other structures on it. Any creatures in the area are harmlessly lifted up as the fortress rises." + "\n   " + "The fortress has four turrets with square bases, each one 20 feet on a side and 30 feet tall, with one turret on each corner. The turrets are connected to each other by stone walls that are each 80 feet long, creating an enclosed area. Each wall is 1 foot thick and is composed of panels that are 10 feet wide and 20 feet tall. Each panel is contiguous with two other panels or one other panel and a turret. You can place up to four stone doors in the fortress's outer wall." + "\n   " + "A small keep stands inside the enclosed area. The keep has a square base that is 50 feet on each side, and it has three floors with 10-foot-high ceilings. Each of the floors can be divided into as many rooms as you like, provided each room is at least 5 feet on each side. The floors of the keep are connected by stone staircases, its walls are 6 inches thick, and interior rooms can have stone doors or open archways as you choose. The keep is furnished and decorated however you like, and it contains sufficient food to serve a nine-course banquet for up to 100 people each day. Furnishings, food, and other objects created by this spell crumble to dust if removed from the fortress." + "\n   " + "A staff of one hundred invisible servants obeys any command given to them by creatures you designate when you cast the spell. Each servant functions as if created by the unseen servant spell." + "\n   " + "The walls, turrets, and keep are all made of stone that can be damaged. Each 10-foot-by-10-foot section of stone has AC 15 and 30 hit points per inch of thickness. It is immune to poison and psychic damage. Reducing a section of stone to 0 hit points destroys it and might cause connected sections to buckle and collapse at the DM's discretion." + "\n   " + "After 7 days or when you cast this spell somewhere else, the fortress harmlessly crumbles and sinks back into the ground, leaving any creatures that were inside it safely on the ground." + "\n   " + "Casting this spell on the same spot once every 7 days for a year makes the fortress permanent."
};
SpellsList["mind spike"] = { // +1d8 at higher levels errata (https://media.wizards.com/2020/dnd/downloads/XGtE-Errata.pdf)
	name : "Mind Spike",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["X", 162]],
	level : 2,
	school : "Div",
	time : "1 a",
	range : "60 ft",
	components : "S",
	duration : "Conc, 1 h",
	save : "Wis",
	description : "1 crea 3d8+1d8/SL Psychic dmg, know its location, can't be invis for me; save half, no other benefits",
	descriptionShorter : "1 crea 3d8+1d8/SL Psychic dmg, know its location, can't be invis for me; save half, not rest",
	descriptionFull : "You reach into the mind of one creature you can see within range. The target must make a Wisdom saving throw, taking 3d8 psychic damage on a failed save, or half as much damage on a successful one. On a failed save, you also always know the target's location until the spell ends, but only while the two of you are on the same plane of existence. While you have this knowledge, the target can't become hidden from you, and if it's invisible, it gains no benefit from that condition against you." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd.",
	dynamicDamageBonus : { multipleDmgMoments : false }
};
SpellsList["negative energy flood"] = {
	name : "Negative Energy Flood",
	classes : ["warlock", "wizard"],
	source : [["X", 163]],
	level : 5,
	school : "Necro",
	time : "1 a",
	range : "60 ft",
	components : "V,M",
	compMaterial : "A broken bone and a square of black silk",
	duration : "Instantaneous",
	save : "Con",
	description : "1 crea: living 5d12 Necrotic dmg, save halves, rises as zombie if killed; undead 5d12/2 temp HP",
	descriptionFull : "You send ribbons of negative energy at one creature you can see within range. Unless the target is undead, it must make a Constitution saving throw, taking 5d12 necrotic damage on a failed save, or half as much damage on a successful one. A target killed by this damage rises up as a zombie at the start of your next turn. The zombie pursues whatever creature it can see that is closest to it. Statistics for the zombie are in the Monster Manual." + "\n   " + "If you target an undead with this spell, the target doesn't make a saving throw. Instead, roll 5d12. The target gains half the total as temporary hit points."
};
SpellsList["power word pain"] = {
	name : "Power Word Pain",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["X", 163]],
	level : 7,
	school : "Ench",
	time : "1 a",
	range : "60 ft",
	components : "V",
	duration : "Instantaneous",
	description : "1 crea with 100 HP or less disadv. atk/check/save, conc. save to cast; save/rnd to end; charm effect",
	descriptionFull : "You speak a word of power that causes waves of intense pain to assail one creature you can see within range. If the target has 100 hit points or fewer, it is subject to crippling pain. Otherwise, the spell has no effect on it. A target is also unaffected if it is immune to being charmed." + "\n   " + "While the target is affected by crippling pain, any speed it has can be no higher than 10 feet. The target also has disadvantage on attack rolls, ability checks, and saving throws, other than Constitution saving throws. Finally, if the target tries to cast a spell, it must first succeed on a Constitution saving throw, or the casting fails and the spell is wasted." + "\n   " + "A target suffering this pain can make a Constitution saving throw at the end of each of its turns. On a successful save, the pain ends."
};
SpellsList["primal savagery"] = { 
	name : "Primal Savagery",
	classes : ["druid"],
	source : [["X", 163]],
	level : 0,
	school : "Trans",
	time : "1 a",
	range : "Self",
	components : "S",
	duration : "Instantaneous",
	description : "Melee spell attack, 5 ft range, for 1d10 Acid dmg; +1d10 at CL 5, 11, and 17",
	descriptionCantripDie : "Melee spell attack, 5 ft range, for `CD`d10 Acid dmg",
	descriptionFull : "You channel primal magic to cause your teeth or fingernails to sharpen, ready to deliver a corrosive attack. Make a melee spell attack against one creature within 5 feet of you. On a hit, the target takes 1d10 acid damage. After you make the attack, your teeth or fingernails return to normal." + "\n   " + "The spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10)."
};
SpellsList["psychic scream"] = {
	name : "Psychic Scream",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : [["X", 163]],
	level : 9,
	school : "Ench",
	time : "1 a",
	range : "90 ft",
	components : "S",
	duration : "Instantaneous",
	save : "Int",
	description : "10 crea Int>2 save or 14d6 Psychic dmg and stunned; save halves, no stun; end of turn save to stop",
	descriptionFull : "You unleash the power of your mind to blast the intellect of up to ten creatures of your choice that you can see within range. Creatures that have an Intelligence score of 2 or lower are unaffected." + "\n   " + "Each target must make an Intelligence saving throw. On a failed save, a target takes 14d6 psychic damage and is stunned. On a successful save, a target takes half as much damage and isn't stunned. If a target is killed by this damage, its head explodes, assuming it has one." + "\n   " + "A stunned target can make an Intelligence saving throw at the end of each of its turns. On a successful save, the stunning effect ends."
};
SpellsList["scatter"] = {
	name : "Scatter",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["X", 164]],
	level : 6,
	school : "Conj",
	time : "1 a",
	range : "30 ft",
	components : "V",
	duration : "Instantaneous",
	save : "Wis",
	description : "Up to 5 creatures in range, save or teleported 120 ft to a different space I can see on the ground",
	descriptionFull : "The air quivers around up to five creatures of your choice that you can see within range. An unwilling creature must succeed on a Wisdom saving throw to resist this spell. You teleport each affected target to an unoccupied space that you can see within 120 feet of you. That space must be on the ground or on a floor."
};
SpellsList["shadow blade"] = {
	name : "Shadow Blade",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["X", 164]],
	level : 2,
	school : "Illus",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
	description : "Sword 2d8 Psychic dmg, finesse, light, thrown (20/60 ft), adv. if target in dim/dark; +1d8 at SL3/5/7",
	descriptionMetric : "Sword: 2d8 Psychic dmg, finesse, light, thrown (6/18 m), adv. if target in dim/dark; +1d8 at SL3/5/7",
	descriptionShorter : "Sword 2d8 Psychic dmg, finesse, light, thrown (20/60ft), adv. in dim/dark; +1d8 SL3/5/7",
	descriptionShorterMetric : "Sword 2d8 Psychic dmg, finesse, light, thrown (6/18 m), adv. in dim/dark; +1d8 SL3/5/7",
	descriptionFull : "You weave together threads of shadow to create a sword of solidified gloom in your hand. This magic sword lasts until the spell ends. It counts as a simple melee weapon with which you are proficient. It deals 2d8 psychic damage on a hit and has the finesse, light, and thrown properties (range 20/60). In addition, when you use the sword to attack a target that is in dim light or darkness, you make the attack roll with advantage." + "\n   " + "If you drop the weapon or throw it, it dissipates at the end of the turn. Thereafter, while the spell persists, you can use a bonus action to cause the sword to reappear in your hand." + AtHigherLevels + "When you cast this spell using a 3rd- or 4th-level spell slot, the damage increases to 3d8. When you cast it using a 5th- or 6th-level spell slot, the damage increases to 4d8. When you cast it using a spell slot of 7th level or higher, the damage increases to 5d8."
};
WeaponsList["shadow blade"] = {
	regExpSearch : /(?=.*shadow)(?=.*blade).*$/i,
	name : "Shadow Blade",
	source : [["X", 164]],
	list : "spell",
	ability : 1,
	type : "Simple",
	damage : [2, 8, "psychic"],
	range : "Melee, 20/60 ft",
	description : "Finesse, light, thrown; +1d8 at SL3/5/7; Adv. if target in dim light/darkness",
	abilitytodamage : true,
	isAlwaysProf : true,
	useSpellcastingAbility : false
};
SpellsList["shadow of moil"] = {
	name : "Shadow of Moil",
	classes : ["warlock"],
	source : [["X", 164]],
	level : 4,
	school : "Necro",
	time : "1 a",
	range : "Self",
	components : "V,S,M\u0192",
	compMaterial : "An undead eyeball encased in a gem worth at least 150 gp",
	duration : "Conc, 1 min",
	description : "Me: heavy obsc., Radiant resistance; 10-ft rad: 1 step darker, hit vs. me get 2d8 Necrotic dmg (150gp)",
	descriptionShorter : "Me: hvy obsc., Radiant resist; 10-ft rad: 1 step darker, hit vs. me 2d8 Necrotic dmg (150gp)",
	descriptionFull : "Flame-like shadows wreathe your body until the spell ends, causing you to become heavily obscured to others. The shadows turn dim light within 10 feet of you into darkness, and bright light in the same area to dim light." + "\n   " + "Until the spell ends, you have resistance to radiant damage. In addition, whenever a creature within 10 feet of you hits you with an attack, the shadows lash out at that creature, dealing it 2d8 necrotic damage."
};
SpellsList["sickening radiance"] = {
	name : "Sickening Radiance",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["X", 164]],
	level : 4,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Conc, 10 min",
	save : "Con",
	description : "30-ft rad all enter/start turn save or 4d10 Radiant dmg, 1 level of exhaustion, and emit 5-ft rad light",
	descriptionShorter : "30-ft rad all enter/start turn save or 4d10 Radiant dmg, 1 lvl exhaust., emit 5-ft rad light",
	descriptionFull : "Dim, greenish light spreads within a 30-foot-radius sphere centered on a point you choose within range. The light spreads around corners, and it lasts until the spell ends." + "\n   " + "When a creature moves into the spell's area for the first time on a turn or starts its turn there, that creature must succeed on a Constitution saving throw or take 4d10 radiant damage, and it suffers one level of exhaustion and emits a dim, greenish light in a 5-foot radius. This light makes it impossible for the creature to benefit from being invisible. The light and any levels of exhaustion caused by this spell go away when the spell ends."
};
SpellsList["skill empowerment"] = {
	name : "Skill Empowerment",
	classes : ["artificer", "bard", "sorcerer", "wizard"],
	source : [["X", 165]],
	level : 5,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Conc, 1 h",
	description : "1 willing creature gains expertise in one skill of my choice that it is proficient with for the duration",
	descriptionFull : "Your magic deepens a creature's understanding of its own talent. You touch one willing creature and give it expertise in one skill of your choice; until the spell ends, the creature doubles its proficiency bonus for ability checks it makes that use the chosen skill." + "\n   " + "You must choose a skill in which the target is proficient and that isn't already benefiting from an effect, such as Expertise, that doubles its proficiency bonus."
};
SpellsList["snare"] = {
	name : "Snare",
	classes : ["artificer", "druid", "ranger", "wizard"],
	source : [["X", 165]],
	level : 1,
	school : "Abjur",
	time : "1 min",
	range : "Touch",
	components : "S,M\u2020",
	compMaterial : "25 feet of rope, which the spell consumes",
	duration : "8 h, till trigger",
	save : "Dex",
	description : "5-ft rad trap; Investigation vs spell DC to see; save or restrained 3 ft in the air; save each rnd (5sp)",
	descriptionFull : "As you cast this spell, you use the rope to create a circle with a 5-foot radius on the ground or the floor. When you finish casting, the rope disappears and the circle becomes a magic trap." + "\n   " + "This trap is nearly invisible, requiring a successful Intelligence (Investigation) check against your spell save DC to be discerned." + "\n   " + "The trap triggers when a Small, Medium, or Large creature moves onto the ground or the floor in the spell's radius. That creature must succeed on a Dexterity saving throw or be magically hoisted into the air, leaving it hanging upside down 3 feet above the ground or the floor. The creature is restrained there until the spell ends." + "\n   " + "A restrained creature can make a Dexterity saving throw at the end of each of its turns, ending the effect on itself on a success. Alternatively, the creature or someone else who can reach it can use an action to make an Intelligence (Arcana) check against your spell save DC. On a success, the restrained effect ends." + "\n   " + "After the trap is triggered, the spell ends when no creature is restrained by it."
};
SpellsList["soul cage"] = {
	name : "Soul Cage",
	classes : ["warlock", "wizard"],
	source : [["X", 165]],
	level : 6,
	school : "Necro",
	time : "1 rea",
	timeFull : "1 reaction, which you take when a humanoid you can see within 60 feet of you dies",
	range : "60 ft",
	components : "V,S,M\u0192",
	compMaterial : "A tiny silver cage worth 100 gp",
	duration : "8 h",
	description : "As a reaction when humanoid in range dies, I capture their soul in a tiny cage; see book (100gp)",
	descriptionFull : "This spell snatches the soul of a humanoid as it dies and traps it inside the tiny cage you use for the material component. A stolen soul remains inside the cage until the spell ends or until you destroy the cage, which ends the spell. While you have a soul inside the cage, you can exploit it in any of the ways described below. You can use a trapped soul up to six times. Once you exploit a soul for the sixth time, it is released, and the spell ends. While a soul is trapped, the dead humanoid it came from can't be revived." + "\n   " + toUni("Steal Life") + ": You can use a bonus action to drain vigor from the soul and regain 2d8 hit points." + "\n   " + toUni("Query Soul") + ": You ask the soul a question (no action required) and receive a brief telepathic answer, which you can understand regardless of the language used. The soul knows only what it knew in life, but it must answer you truthfully and to the best of its ability. The answer is no more than a sentence or two and might be cryptic." + "\n   " + toUni("Borrow Experience") + ": You can use a bonus action to bolster yourself with the soul's life experience, making your next attack roll, ability check, or saving throw with advantage. If you don't use this benefit before the start of your next turn, it is lost." + "\n   " + toUni("Eyes of the Dead") + ": You can use an action to name a place the humanoid saw in life, which creates an invisible sensor somewhere in that place if it is on the plane of existence you're currently on. The sensor remains for as long as you concentrate, up to 10 minutes (as if you were concentrating on a spell). You receive visual and auditory information from the sensor as if you were in its space using your senses" + "\n   " + "A creature that can see the sensor (such as one using see invisibility or truesight) sees a translucent image of the tormented humanoid whose soul you caged."
};
SpellsList["steel wind strike"] = {
	name : "Steel Wind Strike",
	classes : ["ranger", "wizard"],
	source : [["X", 166]],
	level : 5,
	school : "Conj",
	time : "1 a",
	range : "30 ft",
	components : "S,M\u0192",
	compMaterial : "A melee weapon worth at least 1 sp",
	duration : "Instantaneous",
	description : "Melee spell attack vs. 5 crea in range; 6d10 Force dmg on hit; after, I teleport next to one target",
	descriptionFull : "You flourish the weapon used in the casting and then vanish to strike like the wind. Choose up to five creatures you can see within range. Make a melee spell attack against each target. On a hit, a target takes 6d10 force damage." + "\n   " + "You can then teleport to an unoccupied space you can see within 5 feet of one of the targets you hit or missed."
};
SpellsList["summon greater demon"] = {
	name : "Summon Greater Demon",
	classes : ["warlock", "wizard"],
	source : [["X", 166]],
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "A vial of blood from a humanoid killed within the past 24 hours",
	duration : "Conc, 1 h",
	save : "Cha",
	description : "Summon 1 demon of CR 5+1/SL that obeys me; end of each of its turn, save to break free; see book",
	descriptionFull : "You utter foul words, summoning one demon from the chaos of the Abyss. You choose the demon's type, which must be one of challenge rating 5 or lower, such as a shadow demon or a barlgura. The demon appears in an unoccupied space you can see within range, and the demon disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "Roll initiative for the demon, which has its own turns. When you summon it and on each of your turns thereafter, you can issue a verbal command to it (requiring no action on your part), telling it what it must do on its next turn. If you issue no command, it spends its turn attacking any creature within reach that has attacked it." + "\n   " + "At the end of each of the demon's turns, it makes a Charisma saving throw. The demon has disadvantage on this saving throw if you say its true name. On a failed save, the demon continues to obey you. On a successful save, your control of the demon ends for the rest of the duration, and the demon spends its turns pursuing and attacking the nearest non-demons to the best of its ability. If you stop concentrating on the spell before it reaches its full duration, an uncontrolled demon doesn't disappear for 1d6 rounds if it still has hit points." + "\n   " + "As part of casting the spell, you can form a circle on the ground with the blood used as a material component. The circle is large enough to encompass your space. While the spell lasts, the summoned demon can't cross the circle or harm it, and it can't target anyone within it. Using the material component in this manner consumes it when the spell ends." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the challenge rating increases by 1 for each slot level above 4th."
};
SpellsList["summon lesser demons"] = {
	name : "Summon Lesser Demons",
	classes : ["warlock", "wizard"],
	source : [["X", 167]],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "A vial of blood from a humanoid killed within the past 24 hours",
	duration : "Conc, 1 h",
	description : "Summon up to 8 (16 at SL6, 24 at SL8) CR \u22641 1 demons, DM choice; attack nearest non-demons",
	descriptionFull : "You utter foul words, summoning demons from the chaos of the Abyss. Roll on the following table to determine what appears." + "\n\n " + toUni("d6") + "\t" + toUni("Demons Summoned") + "\n  1-2\tTwo demons of challenge rating 1 or lower" + "\n  3-4\tFour demons of challenge rating 1/2 or lower" + "\n  5-6\tEight demons of challenge rating 1/4 or lower" + "\n\n   " + "The DM chooses the demons, such as manes or dretches, and you choose the unoccupied spaces you can see within range where they appear. A summoned demon disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The demons are hostile to all creatures, including you. Roll initiative for the summoned demons as a group, which has its own turns. The demons pursue and attack the nearest non-demons to the best of their ability." + "\n   " + "As part of casting the spell, you can form a circle on the ground with the blood used as a material component. The circle is large enough to encompass your space. While the spell lasts, the summoned demons can't cross the circle or harm it, and they can't target anyone within it. Using the material component in this manner consumes it when the spell ends." + AtHigherLevels + "When you cast this spell using a spell slot of 6th or 7th level, you summon twice as many demons. If you cast it using a spell slot of 8th or 9th level, you summon three times as many demons."
};
SpellsList["synaptic static"] = {
	name : "Synaptic Static",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : [["X", 167]],
	level : 5,
	school : "Ench",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Instant, 1 min",
	save : "Int",
	description : "20-ft rad all crea Int>2 save or 8d6 Psychic dmg, -1d6 on atks/check/conc. save; save half, no -1d6",
	descriptionShorter : "20-ft rad all crea Int>2 save or 8d6 Psychic dmg, -1d6 on atk/chk/conc save; save half, no -1d6",
	descriptionFull : "You choose a point within range and cause psychic energy to explode there. Each creature in a 20-foot-radius sphere centered on that point must make an Intelligence saving throw. A creature with an Intelligence score of 2 or lower can't be affected by this spell. A target takes 8d6 psychic damage on a failed save, or half as much damage on a successful one." + "\n   " + "After a failed save, a target has muddled thoughts for 1 minute. During that time, it rolls a d6 and subtracts the number rolled from all its attack rolls and ability checks, as well as its Constitution saving throws to maintain concentration. The target can make an Intelligence saving throw at the end of each of its turns, ending the effect on itself on a success."
};
SpellsList["temple of the gods"] = {
	name : "Temple of the Gods",
	classes : ["cleric"],
	source : [["X", 167]],
	level : 7,
	school : "Conj",
	time : "1 h",
	range : "120 ft",
	components : "V,S,M\u0192",
	compMaterial : "A holy symbol worth at least 5 gp",
	duration : "24 h",
	description : "Create a temple 120 ft on a side to the deity of a holy symbol used; see book for effects",
	descriptionFull : "You cause a temple to shimmer into existence on ground you can see within range. The temple must fit within an unoccupied cube of space, up to 120 feet on each side. The temple remains until the spell ends. It is dedicated to whatever god, pantheon, or philosophy is represented by the holy symbol used in the casting." + "\n   " + "You make all decisions about the temple's appearance. The interior is enclosed by a floor, walls, and a roof, with one door granting access to the interior and as many windows as you wish. Only you and any creatures you designate when you cast the spell can open or close the door." + "\n   " + "The temple's interior is an open space with an idol or altar at one end. You decide whether the temple is illuminated and whether that illumination is bright light or dim light. The smell of burning incense fills the air within, and the temperature is mild." + "\n   " + "The temple opposes types of creatures you choose when you cast this spell. Choose one or more of the following: celestials, elementals, fey, fiends, or undead. If a creature of the chosen type attempts to enter the temple, that creature must make a Charisma saving throw. On a failed save, it can't enter the temple for 24 hours. Even if the creature can enter the temple, the magic there hinders it; whenever it makes an attack roll, an ability check, or a saving throw inside the temple, it must roll a d4 and subtract the number rolled from the d20 roll." + "\n   " + "In addition, the sensors created by divination spells can't appear inside the temple, and creatures within can't be targeted by divination spells." + "\n   " + "Finally, whenever any creature in the temple regains hit points from a spell of 1st level or higher, the creature regains additional hit points equal to your Wisdom modifier (minimum 1 hit point)." + "\n   " + "The temple is made from opaque magical force that extends into the Ethereal Plane, thus blocking ethereal travel into the temple's interior. Nothing can physically pass through the temple's exterior. It can't be dispelled by dispel magic, and antimagic field has no effect on it. A disintegrate spell destroys the temple instantly." + "\n   " + "Casting this spell on the same spot once every 7 days for a year makes this effect permanent."
};
SpellsList["tenser's transformation"] = {
	name : "Tenser's Transformation",
	classes : ["wizard"],
	source : [["X", 168]],
	level : 6,
	school : "Trans",
	time : "1 a",
	range : "Self",
	components : "V,S,M",
	compMaterial : "A few hairs from a bull",
	duration : "Conc, 10 min",
	description : "50 temp HP; prof Str/Con save, all wea/arm; extra atk; adv., wea atks +2d12 Force dmg; no spellc.",
	descriptionShorter : "50 temp HP; prof Str/Con save, wea/arm; +1 atk; adv, wea atks +2d12 Force dmg; no spellc",
	descriptionFull : "You endow yourself with endurance and martial prowess fueled by magic. Until the spell ends, you can't cast spells, and you gain the following benefits:" + "\n \u2022 " + "You gain 50 temporary hit points. If any of these remain when the spell ends, they are lost." + "\n \u2022 " + "You have advantage on attack rolls that you make with simple and martial weapons." + "\n \u2022 " + "When you hit a target with a weapon attack, that target takes an extra 2d12 force damage." + "\n \u2022 " + "You have proficiency with all armor, shields, simple weapons, and martial weapons." + "\n \u2022 " + "You have proficiency in Strength and Constitution saving throws." + "\n \u2022 " + "You can attack twice, instead of once, when you take the Attack action on your turn. You ignore this benefit if you already have a feature, like Extra Attack, that gives you extra attacks." + "\n   " + "Immediately after the spell ends, you must succeed on a DC 15 Constitution saving throw or suffer one level of exhaustion."
};
SpellsList["thunder step"] = {
	name : "Thunder Step",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["X", 168]],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "90 ft",
	components : "V",
	duration : "Instantaneous",
	save : "Con",
	description : "Me + 1 willing crea teleport 90 ft; all crea in 10 ft of origin 3d10+1d10/SL Thunder dmg; save half",
	descriptionShorter : "Me + 1 willing crea teleport 90 ft; all in 10 ft of origin 3d10+1d10/SL Thunder dmg; save half",
	descriptionFull : "You teleport yourself to an unoccupied space you can see within range. Immediately after you disappear, a thunderous boom sounds, and each creature within 10 feet of the space you left must make a Constitution saving throw, taking 3d10 thunder damage on a failed save, or half as much damage on a successful one. The thunder can be heard from up to 300 feet away." + "\n   " + "You can bring along objects as long as their weight doesn't exceed what you can carry. You can also teleport one willing creature of your size or smaller who is carrying gear up to its carrying capacity. The creature must be within 5 feet of you when you cast this spell, and there must be an unoccupied space within 5 feet of your destination space for the creature to appear in; otherwise, the creature is left behind." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d10 for each slot level above 3rd."
};
SpellsList["tiny servant"] = {
	name : "Tiny Servant",
	classes : ["artificer", "wizard"],
	source : [["X", 168]],
	level : 3,
	school : "Trans",
	time : "1 min",
	range : "Touch",
	components : "V,S",
	duration : "8 h",
	description : "Animate 1+2/SL Tiny, nonmagical, unattended obj as tiny servants; bns a to command telepathically",
	descriptionFull : "You touch one Tiny, nonmagical object that isn't attached to another object or a surface and isn't being carried by another creature. The target animates and sprouts little arms and legs, becoming a creature under your control until the spell ends or the creature drops to 0 hit points. See the Tiny Servant stat block for its statistics." + "\n   " + "As a bonus action, you can mentally command the creature if it is within 120 feet of you. (If you control multiple creatures with this spell, you can command any or all of them at the same time, issuing the same command to each one.) You decide what action the creature will take and where it will move during its next turn, or you can issue a simple, general command, such as to fetch a key, stand watch, or stack some books. If you issue no commands, the servant does nothing other than defend itself against hostile creatures. Once given an order, the servant continues to follow that order until its task is complete." + "\n   " + "When the creature drops to 0 hit points, it reverts to its original form, and any remaining damage carries over to that form." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, you can animate two additional objects for each slot level above 3rd."
};
SpellsList["toll the dead"] = {
	name : "Toll the Dead",
	classes : ["cleric", "warlock", "wizard"],
	source : [["X", 169], ["UA:SS", 4]],
	level : 0,
	school : "Necro",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Wis",
	description : "1 crea save or 1d12 Necrotic dmg (d8 instead of d12 if at full HP); +1d12/1d8 at CL 5, 11, \u0026 17",
	descriptionCantripDie : "1 crea save or `CD`d12 Necrotic damage (d8 instead of d12 if at full HP)",
	descriptionFull : "You point at one creature you can see within range, and the sound of a dolorous bell fills the air around it for a moment. The target must succeed on a Wisdom saving throw or take 1d8 necrotic damage. If the target is missing any of its hit points, it instead takes 1d12 necrotic damage." + "\n   " + "The spell's damage increases by one die when you reach 5th level (2d8 or 2d12), 11th level (3d8 or 3d12), and 17th level (4d8 or 4d12)."
};
SpellsList["wall of light"] = {
	name : "Wall of Light",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["X", 170]],
	level : 5,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	components : "V,S,M",
	compMaterial : "A hand mirror",
	duration : "Conc, 10 min",
	save : "Con",
	description : "60\xD75\xD710ft (l\xD7w\xD7h) 4d8+1d8/SL Radiant dmg \u0026 blind; save half, not blind; 1 a rngd spell atk; see B",
	descriptionShorter : "60|5|10ft (l|w|h) 4d8+1d8/SL Radiant dmg, blind; save half, no blind; 1 a rngd atk; see B",
	descriptionMetric : "18\xD71,5\xD73m (l\xD7w\xD7h) 4d8+1d8/SL Radiant dmg \u0026 blind; save half, not blind; 1 a rngd spell atk; see B",
	descriptionShorterMetric : "18|1,5|3m (l|w|h) 4d8+1d8/SL Radiant dmg, blind; save half, no blind; 1 a rngd atk; see B",
	descriptionFull : "A shimmering wall of bright light appears at a point you choose within range. The wall appears in any orientation you choose: horizontally, vertically, or diagonally. It can be free floating, or it can rest on a solid surface. The wall can be up to 60 feet long, 10 feet high, and 5 feet thick. The wall blocks line of sight, but creatures and objects can pass through it. It emits bright light out to 120 feet and dim light for an additional 120 feet." + "\n   " + "When the wall appears, each creature in its area must make a Constitution saving throw. On a failed save, a creature takes 4d8 radiant damage, and it is blinded for 1 minute. On a successful save, it takes half as much damage and isn't blinded. A blinded creature can make a Constitution saving throw at the end of each of its turns, ending the effect on itself on a success." + "\n   " + "A creature that ends its turn in the wall's area takes 4d8 radiant damage." + "\n   " + "Until the spell ends, you can use an action to launch a beam of radiance from the wall at one creature you can see within 60 feet of it. Make a ranged spell attack. On a hit, the target takes 4d8 radiant damage. Whether you hit or miss, reduce the length of the wall by 10 feet. If the wall's length drops to 0 feet, the spell ends." + AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th."
};
SpellsList["word of radiance"] = {
	name : "Word of Radiance",
	classes : ["cleric"],
	source : [["X", 171]],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "5 ft",
	components : "V,M",
	compMaterial : "A holy symbol",
	duration : "Instantaneous",
	save : "Con",
	description : "Any crea within range save or 1d6 Radiant damage; +1d6 at CL 5, 11, and 17",
	descriptionCantripDie : "Any crea within range save or `CD`d6 Radiant damage",
	descriptionFull : "You utter a divine word, and burning radiance erupts from you. Each creature of your choice that you can see within range must succeed on a Constitution saving throw or take 1d6 radiant damage." + "\n   " + "The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
};
SpellsList["wrath of nature"] = {
	name : "Wrath of Nature",
	classes : ["druid", "ranger"],
	source : [["X", 171]],
	level : 5,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	description : "60-ft cu dif. ter.; rock: rngd atk 3d8 Bludg. dmg; tree: Dex or 4d6 Slash. dmg; root: Str or restr.; see B",
	descriptionShorter : "60-ft cu dif. ter.; rock: atk 3d8 Bludg. dmg; tree: Dex or 4d6 Slash. dmg; root: Str or restrain",
	descriptionFull : "You call out to the spirits of nature to rouse them against your enemies. Choose a point you can see within range. The spirits cause trees, rocks, and grasses in a 60-foot cube centered on that point to become animated until the spell ends." + "\n   " + toUni("Grasses and Undergrowth") + ": Any area of ground in the cube that is covered by grass or undergrowth is difficult terrain for your enemies." + "\n   " + toUni("Trees") + ": At the start of each of your turns, each of your enemies within 10 feet of any tree in the cube must succeed on a Dexterity saving throw or take 4d6 slashing damage from whipping branches." + "\n   " + toUni("Roots and Vines") + ": At the end of each of your turns, one creature of your choice that is on the ground in the cube must succeed on a Strength saving throw or become restrained until the spell ends. A restrained creature can use an action to make a Strength (Athletics) check against your spell save DC, ending the effect on itself on a success." + "\n   " + toUni("Rocks") + ": As a bonus action on your turn, you can cause a loose rock in the cube to launch at a creature you can see in the cube. Make a ranged spell attack against the target. On a hit, the target takes 3d8 nonmagical bludgeoning damage, and it must succeed on a Strength saving throw or fall prone."
};
SpellsList["zephyr strike"] = { 
	name : "Zephyr Strike",
	classes : ["ranger"],
	source : [["X", 171]],
	level : 1,
	school : "Trans",
	time : "1 bns",
	range : "Self",
	components : "V",
	duration : "Conc, 1 min",
	description : "Moving doesn't provoke opportunity atks; once: adv. on wea atk, +1d8 Force dmg, +30 ft spd for turn",
	descriptionShorter : "Moving doesn't provoke opport. atks; once: adv. on wea atk, +1d8 Force dmg, +30 ft spd for turn",
	descriptionFull : "You move like the wind. Until the spell ends, your movement doesn't provoke opportunity attacks." + "\n   " + "Once before the spell ends, you can give yourself advantage on one weapon attack roll on your turn. That attack deals an extra 1d8 force damage on a hit. Whether you hit or miss, your walking speed increases by 30 feet until the end of that turn.",
	dynamicDamageBonus : { multipleDmgMoments : false }
};

// Add weapons (attack cantrips)
WeaponsList["create bonfire"] = {
	regExpSearch : /^(?=.*create)(?=.*bonfire).*$/i,
	name : "Create Bonfire",
	source : [["X", 152], ["E", 16]],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 8, "fire"],
	range : "60 ft",
	description : "5-ft cube; Dex save at casting or when moved into, success - no damage; Conc, 1 min",
	abilitytodamage : false,
	dc : true
};
WeaponsList["frostbite"] = {
	regExpSearch : /frostbite/i,
	name : "Frostbite",
	source : [["X", 156], ["E", 18]],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 6, "cold"],
	range : "60 ft",
	description : "Con save, success - no damage, fail - also disadv. on next weapon attack roll in next turn; 1 creature",
	abilitytodamage : false,
	dc : true
};
WeaponsList["infestation"] = {
	regExpSearch : /infestation/i,
	name : "Infestation",
	source : [["X", 158]],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 6, "poison"],
	range : "30 ft",
	description : "Con save, success - no damage, fail - target also moved 5 ft in random direction",
	abilitytodamage : false,
	dc : true
};
WeaponsList["magic stone"] = {
	regExpSearch : /^(?=.*magic)(?=.*stone).*$/i,
	name : "Magic Stone",
	source : [["X", 160], ["E", 20]],
	list : "spell",
	ability : 5,
	type : "Cantrip",
	damage : [1, 6, "bludgeoning"],
	range : "60/120 ft",
	description : "Produces 3 stones that each can be thrown (60 ft) or hurled with a sling (120 ft) as a spell attack",
	abilitytodamage : true
};
WeaponsList["primal savagery"] = {
	regExpSearch : /^(?=.*primal)(?=.*savagery).*$/i,
	name : "Primal Savagery",
	source : [["X", 169]],
	list : "spell",
	ability : 5,
	type : "Cantrip",
	damage : ["C", 10, "acid"],
	range : "Melee (5 ft)",
	description : "",
	abilitytodamage : false
};
WeaponsList["thunderclap"] = {
	regExpSearch : /thunderclap/i,
	name : "Thunderclap",
	source : [["X", 168], ["E", 22]],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 6, "thunder"],
	range : "5-ft radius",
	description : "Con save, success - no damage; all creatures in area; audible in 100 ft",
	abilitytodamage : false,
	dc : true
};
WeaponsList["toll the dead"] = {
	regExpSearch : /^(?=.*toll)(?=.*the)(?=.*dead).*$/i,
	name : "Toll the Dead",
	source : [["X", 169], ["UA:SS", 4]],
	list : "spell",
	ability : 5,
	type : "Cantrip",
	damage : ["C", 12, "necrotic"],
	range : "60 ft",
	description : "Wis save, success - no damage; If target is at full HP, d8 instead of d12 damage",
	abilitytodamage : false,
	dc : true
};
WeaponsList["word of radiance"] = {
	regExpSearch : /^(?=.*word)(?=.*radiance).*$/i,
	name : "Word of Radiance",
	source : [["X", 171]],
	list : "spell",
	ability : 5,
	type : "Cantrip",
	damage : ["C", 6, "radiant"],
	range : "5-ft radius",
	description : "Con save, success - no damage; Only chosen creatures I can see are affected",
	abilitytodamage : false,
	dc : true
};

// Companion options (Find Greater Steed spell)
CompanionList.steed = {
	name : "Find Greater Steed",
	nameTooltip : "the Find Greater Steed spell",
	nameOrigin : "4th-level conjuration spell",
	nameMenu : "Greater steed (Find Greater Steed spell)",
	source : [["X", 156]],
	action : [["action", "Find Greater Steed (dismiss)"]],
	attributesAdd : {
		header : "Mount",
		type : ["Celestial", "Fey", "Fiend"],
		subtype : "",
		features : [{
			name : "Find Greater Steed",
			description : "If dropped to 0 HP, the steed disappears, leaving behind no physical form."
		}],
		languages : "understands one language its master speaks (master's choice)"
	},
	attributesChange : function(sCrea, objCrea) {
		if (objCrea.scores[3] < 6) objCrea.scores[3] = 6;
	},
	notes : function() {
		if (!CompanionList.mount) return;
		var a = newObj(CompanionList.mount.notes);
		a[0].description = a[0].description.replace(/It assumes a chosen form.*/i, "It has the chosen form: griffon, pegasus, peryton, dire wolf, rhinoceros, or saber-toothed tiger");
		return a;
	}()
};

// Add creatures
CreatureList["tiny servant"] = { // Stats for the Tiny Servant spell (contains contributions by SoilentBrad)
	name : "Tiny Servant",
	source : [["X", 169]],
	size : 5,
	type : "Construct",
	alignment : "Unaligned",
	ac : 15,
	hp : 10,
	hd : [4, 4],
	speed : "30 ft, climb 30 ft",
	scores : [4, 16, 10, 2, 10, 1],
	damage_immunities : "poison, psychic",
	condition_immunities : "blinded, charmed, deafened, exhaustion, frightened, paralyzed, petrified, poisoned",
	senses : "Blindsight 60 ft (blind beyond this radius)",
	passivePerception : 10,
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Slam",
		ability : 2,
		damage : [1, 4, "bludgeoning"],
		range : "Melee (5 ft)",
		description : ""
	}]
};

// Magic Items
MagicItemsList["adamantine ammunition"] = {
	name : "Adamantine Ammunition",
	source : [["X", 78]],
	type : "weapon (any ammunition)",
	rarity : "unknown",
	description : "Whenever a ammunition made or coated with adamantine hits an object, the hit is a critical hit. The adamantine version of ten pieces of ammunition costs 500 gp more than the normal version, whether the ammunition is made of the metal or coated with it.",
	descriptionFull : "Ammunition made of or coated with adamantine is unusually effective when used to break objects. Whenever a piece of adamantine ammunition hits an object, the hit is a critical hit.\n   The adamantine version of ten pieces of ammunition costs 500 gp more than the normal version, whether the ammunition is made of the metal or coated with it.",
	allowDuplicates : true,
	chooseGear : {
		type : "ammo",
		prefixOrSuffix : "brackets",
		itemName1stPage : ["suffix", "Adamantine"],
		descriptionChange : ["replace", "ammunition"],
		excludeCheck : function (inObjKey, inObj) {
			return /vials|flasks/i.test(inObj.icon);
		}
	}
}
MagicItemsList["adamantine weapon"] = {
	name : "Adamantine Weapon",
	source : [["X", 78]],
	type : "weapon (any melee)",
	rarity : "unknown",
	description : "Whenever a weapon made or coated with adamantine hits an object, the hit is a critical hit. The adamantine version of a melee weapon costs 500 gp more than the normal version, whether the weapon is made of the metal or coated with it.",
	descriptionFull : "Melee weapons made of or coated with adamantine are unusually effective when used to break objects. Whenever an adamantine weapon hits an object, the hit is a critical hit.\n   The adamantine version of a melee weapon costs 500 gp more than the normal version, whether the weapon is made of the metal or coated with it.",
	allowDuplicates : true,
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "brackets",
		itemName1stPage : ["suffix", "Adamantine"],
		descriptionChange : ["replace", "weapon"],
		excludeCheck : function (inObjKey, inObj) {
			return inObj.list != "melee";
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.theWea.list == "melee" && /adamantine/i.test(v.WeaponTextName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Always critical hits on objects';
				}
			},
			'If I include the word "Adamantine" in the name of a melee weapon, it will be treated as the magic item Adamantine Weapon. Whenever it hits an object, it automatically scores a critical hit.'
		]
	}
}
MagicItemsList["armor of gleaming"] = {
	name : "Armor of Gleaming",
	nameTest : "of Gleaming",
	source : [["X", 136]],
	type : "armor (medium, or heavy)",
	rarity : "common",
	description : "This armor never gets dirty.",
	descriptionFull : "This armor never gets dirty.",
	allowDuplicates : true,
	chooseGear : {
		type : "armor",
		prefixOrSuffix : "prefix",
		descriptionChange : ["prefix", "armor"],
		excludeCheck : function (inObjKey, inObj) {
			return !(/medium|heavy/i).test(inObj.type);
		}
	}
}
MagicItemsList["bead of nourishment"] = {
	name : "Bead of Nourishment",
	source : [["X", 136]],
	type : "wondrous item",
	rarity : "common",
	description : "Once I can eat this spongy, flavorless, gelatinous bead. It dissolves on my tongue and provides as much nourishment as 1 day of rations.",
	descriptionFull : "This spongy, flavorless, gelatinous bead dissolves on your tongue and provides as much nourishment as 1 day of rations."
}
MagicItemsList["bead of refreshment"] = {
	name : "Bead of Refreshment",
	source : [["X", 136]],
	type : "wondrous item",
	rarity : "common",
	description : "Once I can drop this spongy, flavorless, gelatinous bead in liquid. It dissolves in the liquid and transforms up to a pint of it into fresh, cold drinking water. The bead has no effect on magical liquids or harmful substances such as poison.",
	descriptionFull : "This spongy, flavorless, gelatinous bead dissolves in liquid, transforming up to a pint of the liquid into fresh, cold drinking water. The bead has no effect on magical liquids or harmful substances such as poison."
}
MagicItemsList["boots of false tracks"] = {
	name : "Boots of False Tracks",
	source : [["X", 136]],
	type : "wondrous item",
	rarity : "common",
	description : "Only humanoids can wear these boots. While wearing the boots, I can choose to have them leave tracks like those of another kind of humanoid of my size.",
	descriptionFull : "Only humanoids can wear these boots. While wearing the boots, you can choose to have them leave tracks like those of another kind of humanoid of your size."
}
MagicItemsList["candle of the deep"] = {
	name : "Candle of the Deep",
	source : [["X", 136]],
	type : "wondrous item",
	rarity : "common",
	description : "The flame of this candle is not extinguished when immersed in water. It gives off light and heat like a normal candle.",
	descriptionFull : "The flame of this candle is not extinguished when immersed in water. It gives off light and heat like a normal candle."
}
MagicItemsList["cast-off armor"] = {
	name : "Cast-Off Armor",
	nameTest : "Cast-Off",
	source : [["X", 136]],
	type : "armor (light, medium, or heavy)",
	rarity : "common",
	description : "As an action, I can doff this armor.",
	descriptionFull : "You can doff this armor as an action.",
	chooseGear : {
		type : "armor",
		prefixOrSuffix : "suffix",
		descriptionChange : ["prefix", "armor"]
	},
	action : [["action", ""]]
}
MagicItemsList["charlatan's die"] = {
	name : "Charlatan's Die",
	source : [["X", 136]],
	type : "wondrous item",
	rarity : "common",
	description : "Whenever I roll this six-sided die, I can control which number it rolls.",
	descriptionFull : "Whenever you roll this six-sided die, you can control which number it rolls.",
	attunement : true
}
MagicItemsList["cloak of billowing"] = {
	name : "Cloak of Billowing",
	source : [["X", 136]],
	type : "wondrous item",
	rarity : "common",
	description : "As a bonus action while wearing this cloak, I can make it billow dramatically.",
	descriptionFull : "While wearing this cloak, you can use a bonus action to make it billow dramatically.",
	action : [["bonus action", ""]]
}
MagicItemsList["cloak of many fashions"] = {
	name : "Cloak of Many Fashions",
	source : [["X", 136], ["WBtW", 208]],
	type : "wondrous item",
	rarity : "common",
	description : "As a bonus action while wearing this cloak, I can change its style, color, and apparent qualities. The cloak's weight doesn't change. Regardless of its appearance, the cloak can't be anything but a cloak. Although it can duplicate the appearance of other magic cloaks, it doesn't gain their magical properties.",
	descriptionFull : "While wearing this cloak, you can use a bonus action to change the style, color, and apparent quality of the garment. The cloak's weight doesn't change. Regardless of its appearance, the cloak can't be anything but a cloak. Although it can duplicate the appearance of other magic cloaks, it doesn't gain their magical properties.",
	action : [["bonus action", ""]]
}
MagicItemsList["clockwork amulet"] = {
	name : "Clockwork Amulet",
	source : [["X", 137]],
	type : "wondrous item",
	rarity : "common",
	description : "Once per dawn when I make an attack roll while wearing this copper amulet, I can forgo rolling the d20 to get a 10 on the die. The amulet contains tiny interlocking gears powered by magic from Mechanus, a plane of clockwork predictability. When I hold it up to my ear, I can hear faint ticking and whirring noises.",
	descriptionFull : "This copper amulet contains tiny interlocking gears and is powered by magic from Mechanus, a plane of clockwork predictability. A creature that puts an ear to the amulet can hear faint ticking and whirring noises coming from within.\n   When you make an attack roll while wearing the amulet, you can forgo rolling the d20 to get a 10 on the die. Once used, this property can't be used again until the next dawn.",
	usages : 1,
	recovery : "dawn"
}
MagicItemsList["clothes of mending"] = {
	name : "Clothes of Mending",
	source : [["X", 137]],
	type : "wondrous item",
	rarity : "common",
	description : "This elegant outfit of traveler's clothes magically mends itself to counteract daily wear and tear. Pieces of the outfit that are destroyed can't be repaired in this way.",
	descriptionFull : "This elegant outfit of traveler's clothes magically mends itself to counteract daily wear and tear. Pieces of the outfit that are destroyed can't be repaired in this way.",
	weight : 4
}
MagicItemsList["dark shard amulet"] = {
	name : "Dark Shard Amulet",
	source : [["X", 137]],
	type : "wondrous item",
	rarity : "common",
	description : "I can use this amulet of extraplanar material from the realm of my warlock patron as a spellcasting focus for my warlock spells. Once per long rest, I can use it to cast a warlock cantrip that I don't know. To do so, I must make a DC 10 Intelligence (Arcana) check, wasting the attempt as well as my action if I fail.",
	descriptionFull : "This amulet is fashioned from a single shard of resilient extraplanar material originating from the realm of your warlock patron. While you are wearing it, you gain the following benefits:\n \u2022 You can use the amulet as a spellcasting focus for your warlock spells.\n \u2022 You can try to cast a cantrip that you don't know. The cantrip must be on the warlock spell list, and you must make a DC 10 Intelligence (Arcana) check. If the check succeeds, you cast the spell. If the check fails, so does the spell, and the action used to cast the spell is wasted. In either case, you can't use this property again until you finish a long rest.",
	attunement : true,
	prerequisite : "Requires attunement by a warlock",
	prereqeval : function (v) { return classes.known.warlock ? true : false; },
	usages : 1,
	recovery : "long rest",
	spellcastingAbility: "warlock",
	spellFirstColTitle: "",
	spellcastingPreparedCantrips: { 'class': 'warlock' },
	allowUpCasting: true,
	spellcastingBonus: [{
		name: 'Select 1 cantrip or enable',
		'class': 'warlock',
		level: [0, 0],
	}, {
		name: '"Prepare cantrips just like',
		spells: [],
	}, {
		name: 'spells" on the bottom left.',
		spells: [],
	}],
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Remove the already known cantrips, from any source except magic items
				if (spName.indexOf('dark shard amulet') !== -1) {
					var allSpellsKnown = [];
					for (var sCast in CurrentSpells) {
						if (sCast.refType === "item") continue;
						var oCast = CurrentSpells[sCast];
						if (oCast.selectCa) allSpellsKnown = allSpellsKnown.concat(oCast.selectCa);
						if (oCast.selectBo) allSpellsKnown = allSpellsKnown.concat(oCast.selectBo);
					}
					var knownCantrips = OrderSpells(allSpellsKnown, "single", false, false, 0);
					if (!spList.notspells) spList.notspells = [];
					spList.notspells = spList.notspells.concat(knownCantrips);
				}
			},
		],
		spellAdd : [
			function (spellKey, spellObj, spName, isDuplicate) {
				if (spName.indexOf('dark shard amulet') !== -1) {
					spellObj.firstCol = "";
				};
			},
		],
	},
}
MagicItemsList["dread helm"] = {
	name : "Dread Helm",
	source : [["X", 137], ["WBtW", 209]],
	type : "wondrous item",
	rarity : "common",
	description : "This fearsome steel helm makes my eyes glow red while I wear it.",
	descriptionFull : "This fearsome steel helm makes your eyes glow red while you wear it.",
	weight : 1
}
MagicItemsList["ear horn of hearing"] = {
	name : "Ear Horn of Hearing",
	source : [["X", 137]],
	type : "wondrous item",
	rarity : "common",
	description : "While held up to my ear, this horn suppresses the effects of the deafened condition on me, allowing me to hear normally.",
	descriptionFull : "While held up to your ear, this horn suppresses the effects of the deafened condition on you, allowing you to hear normally.",
	savetxt : { immune : ["deafened"] },
	weight : 1
}
MagicItemsList["enduring spellbook"] = {
	name : "Enduring Spellbook",
	source : [["X", 137]],
	type : "wondrous item",
	rarity : "common",
	description : "This spellbook, along with anything written on its pages, can't be damaged by fire or immersion in water. In addition, the spellbook doesn't deteriorate with age.",
	descriptionFull : "This spellbook, along with anything written on its pages, can't be damaged by fire or immersion in water. In addition, the spellbook doesn't deteriorate with age.",
	weight : 5
}
MagicItemsList["ersatz eye"] = {
	name : "Ersatz Eye",
	source : [["X", 137], ["W", 267]],
	type : "wondrous item",
	rarity : "common",
	description : "This artificial eye replaces a real one that was lost or removed. While the ersatz eye is embedded in my eye socket, it can't be removed by anyone other than me, and I can see through the tiny orb as though it were a normal eye.",
	descriptionFull : "This artificial eye replaces a real one that was lost or removed. While the ersatz eye is embedded in your eye socket, it can't be removed by anyone other than you, and you can see through the tiny orb as though it were a normal eye.",
	attunement : true
}
MagicItemsList["hat of vermin"] = {
	name : "Hat of Vermin",
	source : [["X", 137]],
	type : "wondrous item",
	rarity : "common",
	description : "This hat has 3 charges, regaining all at dawn. As an action while holding it, I can expend 1 charge and speak a command word to have one bat, frog, or rat appear in the hat. The creature acts as an ordinary member of its kind and disappears after 1 hour or when it has 0 HP. It is not under my control.",
	descriptionFull : "This hat has 3 charges. While holding the hat, you can use an action to expend 1 of its charges and speak a command word that summons your choice of a bat, a frog, or a rat. The summoned creature magically appears in the hat and tries to get away from you as quickly as possible. The creature is neither friendly nor hostile, and it isn't under your control. It behaves as an ordinary creature of its kind and disappears after 1 hour or when it drops to 0 hit points. The hat regains all expended charges daily at dawn.",
	action : [["action", ""]],
	usages : 3,
	recovery : "dawn"
}
MagicItemsList["hat of wizardry"] = {
	name : "Hat of Wizardry",
	source : [["X", 137]],
	type : "wondrous item",
	rarity : "common",
	description : "I can use this antiquated, cone-shaped hat adorned with gold crescent moons and stars as a spellcasting focus for my wizard spells. Once per long rest, I can use it to cast a wizard cantrip that I don't know. To do so, I must make a DC 10 Intelligence (Arcana) check, wasting the attempt as well as my action if I fail.",
	descriptionFull : "This antiquated, cone-shaped hat is adorned with gold crescent moons and stars. While you are wearing it, you gain the following benefits:\n \u2022 You can use the hat as a spellcasting focus for your wizard spells.\n \u2022 You can try to cast a cantrip that you don't know. The cantrip must be on the wizard spell list, and you must make a DC 10 Intelligence (Arcana) check. If the check succeeds, you cast the spell. If the check fails, so does the spell, and the action used to cast the spell is wasted. In either case, you can't use this property again until you finish a long rest.",
	attunement : true,
	prerequisite : "Requires attunement by a wizard",
	prereqeval : function (v) { return classes.known.wizard ? true : false; },
	usages : 1,
	recovery : "long rest",
	spellcastingAbility: "wizard",
	spellFirstColTitle: "",
	spellcastingPreparedCantrips: { 'class': 'wizard' },
	allowUpCasting: true,
	spellcastingBonus: [{
		name: 'Select 1 cantrip or enable',
		'class': 'wizard',
		level: [0, 0],
	}, {
		name: '"Prepare cantrips just like',
		spells: [],
	}, {
		name: 'spells" on the bottom left.',
		spells: [],
	}],
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Remove the already known cantrips, from any source except magic items
				if (spName.indexOf('hat of wizardry') !== -1) {
					var allSpellsKnown = [];
					for (var sCast in CurrentSpells) {
						if (sCast.refType === "item") continue;
						var oCast = CurrentSpells[sCast];
						if (oCast.selectCa) allSpellsKnown = allSpellsKnown.concat(oCast.selectCa);
						if (oCast.selectBo) allSpellsKnown = allSpellsKnown.concat(oCast.selectBo);
					}
					var knownCantrips = OrderSpells(allSpellsKnown, "single", false, false, 0);
					if (!spList.notspells) spList.notspells = [];
					spList.notspells = spList.notspells.concat(knownCantrips);
				}
			}
		],
		spellAdd : [
			function (spellKey, spellObj, spName, isDuplicate) {
				if (spName.indexOf('hat of wizardry') !== -1) {
					spellObj.firstCol = "";
				};
			}
		]
	},
}
MagicItemsList["heward's handy spice pouch"] = {
	name : "Heward's Handy Spice Pouch",
	source : [["X", 137]],
	type : "wondrous item",
	rarity : "common",
	description : "This belt pouch appears empty. It has 10 charges, regaining 1d6+4 expended charges at dawn. As an action while holding it, I can speak the name of any nonmagical food seasoning (e.g. salt, pepper, or saffron), and remove a pinch of the desired seasoning from the pouch. A pinch is enough to season a single meal.",
	descriptionFull : "This belt pouch appears empty and has 10 charges. While holding the pouch, you can use an action to expend 1 of its charges, speak the name of any nonmagical food seasoning (such as salt, pepper, saffron, or cilantro), and remove a pinch of the desired seasoning from the pouch. A pinch is enough to season a single meal. The pouch regains 1d6+4 expended charges daily at dawn.",
	weight : 1,
	usages : 10,
	recovery : "dawn",
	additional : "regains 1d6+4",
	action : [["action", ""]]
}
MagicItemsList["horn of silent alarm"] = {
	name : "Horn of Silent Alarm",
	source : [["X", 137]],
	type : "wondrous item",
	rarity : "common",
	description : "This horn has 4 charges, regaining 1d4 expended charges daily at dawn. As an action, I can expend 1 charge and blow it, have only one creature within 600 ft of my choice hear the horn's blare, provided it isn't deafened. No other creature hears sound coming from the horn.",
	descriptionFull : "This horn has 4 charges. When you use an action to blow it, one creature of your choice can hear the horn's blare, provided the creature is within 600 feet of the horn and not deafened. No other creature hears sound coming from the horn. The horn regains 1d4 expended charges daily at dawn.",
	weight : 2,
	usages : 4,
	recovery : "dawn",
	additional : "regains 1d4",
	action : [["action", ""]]
}
MagicItemsList["instrument of illusions"] = { // contains contributions by AelarTheElFRogue
	name : "Instrument of Illusions",
	source : [["X", 137]],
	type : "wondrous item (instrument)",
	rarity : "common",
	description : "While I am playing this musical instrument, I can create harmless, illusory visual effects within a 5-ft-radius (15-ft for bards) sphere centered on the instrument. The magical effects have neither substance nor sound, and they are obviously illusory. The effects end when I stop playing.",
	descriptionFull : "While you are playing this musical instrument, you can create harmless, illusory visual effects within a 5-foot-radius sphere centered on the instrument. If you are a bard, the radius increases to 15 feet. Sample visual effects include luminous musical notes, a spectral dancer, butterflies, and gently falling snow. The magical effects have neither substance nor sound, and they are obviously illusory. The effects end when you stop playing.",
	attunement : true,
	weight : 3, // same as instrument of the bards
	choices : ["Bard (15-ft radius)", "Not a Bard (5-ft radius)"],
	selfChoosing : function () {
		return classes.known.bard ? "bard (15-ft radius)" : "not a bard (5-ft radius)";
	},
	"bard (15-ft radius)" : {
		name : "Instrument\u200A of Illusions",
		description : "While I am playing this musical instrument, I can create harmless, illusory visual effects within a 15-ft-radius sphere centered on the instrument. The magical effects have neither substance nor sound, and they are obviously illusory. The effects end when I stop playing."
	},
	"not a bard (5-ft radius)" : {
		name : "Instrument\u200A\u200A of Illusions",
		description : "While I am playing this musical instrument, I can create harmless, illusory visual effects within a 5-ft-radius sphere centered on the instrument. The magical effects have neither substance nor sound, and they are obviously illusory. The effects end when I stop playing."
	}
}
MagicItemsList["instrument of scribing"] = {
	name : "Instrument of Scribing",
	source : [["X", 138], ["WBtW", 212]],
	type : "wondrous item (instrument)",
	rarity : "common",
	description : "As an action while I'm playing this musical instrument, I can write a magical message on a nonmagical surface that I can see within 30 ft. The message can be up to 6 (or 7) words in a language I know and fades away after 24 hours or when Dispel Magic is cast on it. The instrument can be used like this 3 times per dawn.",
	descriptionFull : "This musical instrument has 3 charges. While you are playing it, you can use an action to expend 1 charge from the instrument and write a magical message on a nonmagical object or surface that you can see within 30 feet of you. The message can be up to six words long and is written in a language you know. If you are a bard, you can scribe an additional seven words and choose to make the message glow faintly, allowing it to be seen in nonmagical darkness. Casting Dispel Magic on the message erases it. Otherwise, the message fades away after 24 hours.\n   The instrument regains all expended charges daily at dawn.",
	attunement : true,
	weight : 3, // same as instrument of the bards
	choices : ["Bard (15-ft radius)", "Not a Bard (5-ft radius)"],
	selfChoosing : function () {
		return classes.known.bard ? "bard (15-ft radius)" : "not a bard (5-ft radius)";
	},
	"bard (15-ft radius)" : {
		name : "Instrument\u200A of Scribing",
		description : "As an action while I'm playing this musical instrument, I can write a magical message on a nonmagical surface that I can see within 30 ft. The message can be up to 7 words in a language I know and I can have it glow faintly. Dispel Magic erases it, otherwise it fades away after 24 hours. This can be used 3 times per dawn."
	},
	"not a bard (5-ft radius)" : {
		name : "Instrument\u200A\u200A of Scribing",
		description : "As an action while I'm playing this musical instrument, I can write a magical message on a nonmagical surface that I can see within 30 ft. The message can be up to 6 words in a language I know and fades away after 24 hours or when Dispel Magic is cast on it. The instrument can be used like this 3 times per dawn."
	}
}
MagicItemsList["lock of trickery"] = {
	name : "Lock of Trickery",
	source : [["X", 138]],
	type : "wondrous item",
	rarity : "common",
	description : "This lock appears to be an ordinary lock and comes with a single key. The tumblers in this lock magically adjust to thwart burglars. Without the key, a creature proficient with thieves' tools can pick this lock with a successful DC 15 Dexterity check, but has disadvantage on that check.",
	descriptionFull : "This lock appears to be an ordinary lock and comes with a single key. The tumblers in this lock magically adjust to thwart burglars. Dexterity checks made to pick the lock have disadvantage. Thus, without the key, a creature proficient with thieves' tools can pick this lock with a successful DC 15 Dexterity check, but has disadvantage on that check.",
	weight : 1
}
MagicItemsList["moon-touched sword"] = {
	name : "Moon-Touched Sword",
	nameTest : "Moon-Touched",
	source : [["X", 138]],
	type : "weapon (any sword)",
	rarity : "common",
	description : "In darkness, the unsheathed blade of this sword sheds moonlight, creating bright light in a 15-ft radius and dim light for an additional 15 ft.",
	descriptionFull : "In darkness, the unsheathed blade of this sword sheds moonlight, creating bright light in a 15-foot radius and dim light for an additional 15 feet.",
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "suffix",
		descriptionChange : ["replace", "sword"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /sword|scimitar|rapier/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && /sword|scimitar|rapier/i.test(v.baseWeaponName) && /moon.touched/i.test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
				}
			},
			'If I include the words "Moon-Touched" in the name of a sword, it will be treated as the magic weapon Moon-Touched Sword.'
		]
	}
}
MagicItemsList["mystery key"] = {
	name : "Mystery Key",
	source : [["X", 138]],
	type : "wondrous item",
	rarity : "common",
	description : "A question mark is worked into the head of this key. The key has a 5% chance of unlocking any lock into which it's inserted. Once it unlocks something, the key disappears.",
	descriptionFull : "A question mark is worked into the head of this key. The key has a 5% chance of unlocking any lock into which it's inserted. Once it unlocks something, the key disappears."
}
MagicItemsList["orb of direction"] = {
	name : "Orb of Direction",
	source : [["X", 138], ["WBtW", 212]],
	type : "wondrous item",
	rarity : "common",
	description : "As an action while holding this orb, I can determine which way is north. This property functions only on the Material Plane.",
	descriptionFull : "While holding this orb, you can use an action to determine which way is north. This property functions only on the Material Plane.",
	weight : 3,
	action : [["action", ""]]
}
MagicItemsList["orb of time"] = {
	name : "Orb of Time",
	source : [["X", 138]],
	type : "wondrous item",
	rarity : "common",
	description : "As an action while holding this orb, I can determine whether it is morning, afternoon, evening, or nighttime outside. This property functions only on the Material Plane.",
	descriptionFull : "While holding this orb, you can use an action to determine whether it is morning, afternoon, evening, or nighttime outside. This property functions only on the Material Plane.",
	weight : 3,
	action : [["action", ""]]
}
MagicItemsList["perfume of bewitching"] = {
	name : "Perfume of Bewitching",
	source : [["X", 138]],
	type : "wondrous item",
	rarity : "common",
	description : "Once as an action, I can apply the perfume in this tiny vial to myself and its effect lasts 1 hour. For the duration, I have advantage on all Charisma checks directed at humanoids of challenge rating 1 or lower. Those subjected to the perfume's effect are not aware that they've been influenced by magic.",
	descriptionFull : "This tiny vial contains magic perfume, enough for one use. You can use an action to apply the perfume to yourself, and its effect lasts 1 hour. For the duration, you have advantage on all Charisma checks directed at humanoids of challenge rating 1 or lower. Those subjected to the perfume's effect are not aware that they've been influenced by magic."
}
MagicItemsList["pipe of smoke monsters"] = {
	name : "Pipe of Smoke Monsters",
	source : [["X", 138], ["WBtW", 212]],
	type : "wondrous item",
	rarity : "common",
	description : "As an action while smoking this pipe, I can exhale a puff of smoke that takes the form of a single creature, such as a dragon, a flumph, or a froghemoth. The form must be small enough to fit in a 1-ft cube and loses its shape after a few seconds, becoming an ordinary puff of smoke.",
	descriptionFull : "While smoking this pipe, you can use an action to exhale a puff of smoke that takes the form of a single creature, such as a dragon, a flumph, or a froghemoth. The form must be small enough to fit in a 1-foot cube and loses its shape after a few seconds, becoming an ordinary puff of smoke."
}
MagicItemsList["pole of angling"] = {
	name : "Pole of Angling",
	source : [["X", 138]],
	type : "wondrous item",
	rarity : "common",
	description : "While holding this 10 ft pole, I can speak a command word and transform it into a fishing pole with a hook, a line, and a reel. Speaking the command word again changes the fishing pole back into a normal 10 ft pole.",
	descriptionFull : "While holding this 10-foot pole, you can speak a command word and transform it into a fishing pole with a hook, a line, and a reel. Speaking the command word again changes the fishing pole back into a normal 10-foot pole.",
	weight : 7
}
MagicItemsList["pole of collapsing"] = {
	name : "Pole of Collapsing",
	source : [["X", 138], ["WBtW", 212]],
	type : "wondrous item",
	rarity : "common",
	description : "As an action while holding this 10 ft pole, I can speak a command word to have it collapse into a 1-ft-long rod. The pole's weight doesn't change. As an action while holding the rod, I can speak a different command word to have it elongate back to a pole, but only as long as the surrounding space allows.",
	descriptionFull : "While holding this 10-foot pole, you can use an action to speak a command word and cause it to collapse into a 1-foot-long rod, for ease of storage. The pole's weight doesn't change. You can use an action to speak a different command word and cause the rod to revert to a pole; however, the rod will elongate only as far as the surrounding space allows.",
	weight : 7,
	action : [["action", ""]]
}
MagicItemsList["pot of awakening"] = {
	name : "Pot of Awakening",
	source : [["X", 138]],
	type : "wondrous item",
	rarity : "common",
	description : "If I plant an ordinary shrub in this 10 lb clay pot and let it grow for 30 days, the shrub magically transforms into an awakened shrub at the end of that time. When the shrub awakens, its roots break the pot, destroying it. The awakened shrub is friendly toward me. Absent commands from me, it does nothing.",
	descriptionFull : "If you plant an ordinary shrub in this 10-pound clay pot and let it grow for 30 days, the shrub magically transforms into an awakened shrub at the end of that time. When the shrub awakens, its roots break the pot, destroying it.\n   The awakened shrub is friendly toward you. Absent commands from you, it does nothing.",
	weight : 10
}
MagicItemsList["rope of mending"] = {
	name : "Rope of Mending",
	source : [["X", 138]],
	type : "wondrous item",
	rarity : "common",
	description : "I can cut this 50-foot coil of hempen rope into any number of smaller pieces, and then use an action to speak a command word and cause the pieces to knit back together. The pieces must be in contact with each other and not otherwise in use. A rope of mending is forever shortened if a section of it is lost.",
	descriptionFull : "You can cut this 50-foot coil of hempen rope into any number of smaller pieces, and then use an action to speak a command word and cause the pieces to knit back together. The pieces must be in contact with each other and not otherwise in use. A rope of mending is forever shortened if a section of it is lost or destroyed.",
	action : [["action", ""]],
	weight : 10
}
MagicItemsList["ruby of the war mage"] = {
	name : "Ruby of the War Mage",
	source : [["X", 138]],
	type : "wondrous item",
	rarity : "common",
	description : "By pressing this 1-inch-diameter ruby etched with eldritch runes to a simple or martial weapon for 10 minutes, it attaches itself to the weapon. I can then use that weapon as a spellcasting focus. Once attached, it can't be removed unless my attunement ends, I detach it as an action, or the weapon is destroyed.",
	descriptionFull : "Etched with eldritch runes, this 1-inch-diameter ruby allows you to use a simple or martial weapon as a spellcasting focus for your spells. For this property to work, you must attach the ruby to the weapon by pressing the ruby against it for at least 10 minutes. Thereafter, the ruby can't be removed unless you detach it as an action or the weapon is destroyed. Not even an Antimagic Field causes it to fall off. The ruby does fall off the weapon if your attunement to the ruby ends.",
	attunement : true,
	prerequisite : "Requires attunement by a spellcaster",
	prereqeval : function(v) { return v.isSpellcaster; }
}
MagicItemsList["shield of expression"] = {
	name : "Shield of Expression",
	source : [["X", 139]],
	type : "shield",
	rarity : "common",
	description : "The front of this shield is shaped in the likeness of a face. As a bonus action while bearing the shield, I can have the shield alter the expression of the face.",
	descriptionFull : "The front of this shield is shaped in the likeness of a face. While bearing the shield, you can use a bonus action to alter the face's expression.",
	weight : 6,
	shieldAdd : "Shield of Expression",
	action : [["bonus action", ""]]
}
MagicItemsList["smoldering armor"] = {
	name : "Smoldering Armor",
	nameTest : "Smoldering",
	source : [["X", 139]],
	type : "armor (light, medium, or heavy)",
	rarity : "common",
	description : "Wisps of harmless, odorless smoke rise from this armor while it is worn.",
	descriptionFull : "Wisps of harmless, odorless smoke rise from this armor while it is worn.",
	chooseGear : {
		type : "armor",
		prefixOrSuffix : "suffix",
		descriptionChange : ["prefix", "armor"]
	}
}
MagicItemsList["staff of adornment"] = {
	name : "Staff of Adornment",
	source : [["X", 139]],
	type : "staff",
	rarity : "common",
	description : "If I place an object up to 1 lb above the tip of the staff while holding it, the object floats 1 inch from its tip and remains there until it is removed or until I no longer possess the staff. It can have up to three objects floating over its tip at any given time and I can make one or more objects slowly spin or turn in place.",
	descriptionFull : "If you place an object weighing no more than 1 pound (such as a shard of crystal, an egg, or a stone) above the tip of the staff while holding it, the object floats an inch from the staff's tip and remains there until it is removed or until the staff is no longer in your possession. The staff can have up to three such objects floating over its tip at any given time. While holding the staff, you can make one or more of the objects slowly spin or turn in place.",
	weight : 4
}
MagicItemsList["staff of birdcalls"] = {
	name : "Staff of Birdcalls",
	source : [["X", 139]],
	type : "staff",
	rarity : "common",
	description : "This staff has 10 charges, regaining 1d6+4 at dawn, 5% chance it is destroyed when its last charge is used. As an action, I can use 1 charge to create a sound out to a range of 60 ft: a finch's chirp, raven's caw, duck's quack, chicken's cluck, goose's honk, loon's call, turkey's gobble, seagull's cry, owl's hoot, or eagle's shriek.",
	descriptionFull : "This wooden staff is decorated with bird carvings. It has 10 charges. While holding it, you can use an action to expend 1 charge from the staff and cause it to create one of the following sounds out to a range of 60 feet: a finch's chirp, a raven's caw, a duck's quack, a chicken's cluck, a goose's honk, a loon's call, a turkey's gobble, a seagull's cry, an owl's hoot, or an eagle's shriek.\n   The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff explodes in a harmless cloud of bird feathers and is lost forever.",
	weight : 4,
	usages : 10,
	recovery : "dawn",
	additional : "regains 1d6+4",
	action : [["action", ""]]
}
MagicItemsList["staff of flowers"] = {
	name : "Staff of Flowers",
	source : [["X", 139]],
	type : "staff",
	rarity : "common",
	description : "This staff has 10 charges, regaining 1d6+4 at dawn, 5% chance it is destroyed when its last charge is used. As an action, I can use 1 charge to cause a flower of my choice to sprout from a patch of earth or soil within 5 ft or from the staff itself. The flower is nonmagical and grows or withers as a normal flower would.",
	descriptionFull : "This wooden staff has 10 charges. While holding it, you can use an action to expend 1 charge from the staff and cause a flower to sprout from a patch of earth or soil within 5 feet of you, or from the staff itself. Unless you choose a specific kind of flower, the staff creates a mildscented daisy. The flower is harmless and nonmagical, and it grows or withers as a normal flower would. The staff regains 1d6+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff turns into flower petals and is lost forever.",
	weight : 4,
	usages : 10,
	recovery : "dawn",
	additional : "regains 1d6+4",
	action : [["action", ""]]
}
MagicItemsList["talking doll"] = {
	name : "Talking Doll",
	source : [["X", 139], ["WBtW", 214]],
	type : "wondrous item",
	rarity : "common",
	attunement : true,
	description : "During a short rest with this doll within 5 ft of me, I can tell it to say up to 6 phrases of up to 6 words each, and set an observable condition under which the doll speaks each phrase. Conditions must happen within 5 ft of the doll. The doll can remember only 6 phrases that are lost when my attunement to it ends.",
	descriptionFull : "While this stuffed doll is within 5 feet of you, you can spend a short rest telling it to say up to six phrases, none of which can be more than six words long, and set an observable condition under which the doll speaks each phrase. You can also replace old phrases with new ones. Whatever the condition, it must occur within 5 feet of the doll to make it speak. For example, whenever someone picks up the doll, it might say, \"I want a piece of candy.\" The doll's phrases are lost when your attunement to the doll ends."
}
MagicItemsList["tankard of sobriety"] = {
	name : "Tankard of Sobriety",
	source : [["X", 139]],
	type : "wondrous item",
	rarity : "common",
	description : "This tankard has a stern face sculpted into one side. I can drink ale, wine, or any other nonmagical alcoholic beverage poured into it without becoming inebriated. The tankard has no effect on magical liquids or harmful substances such as poison.",
	descriptionFull : "This tankard has a stern face sculpted into one side. You can drink ale, wine, or any other nonmagical alcoholic beverage poured into it without becoming inebriated. The tankard has no effect on magical liquids or harmful substances such as poison.",
	weight : 1
}
MagicItemsList["unbreakable arrow"] = {
	name : "Unbreakable Arrow",
	source : [["X", 139]],
	type : "weapon (arrow)",
	rarity : "common",
	description : "This arrow can't be broken, except when it is within an Antimagic Field.",
	descriptionFull : "This arrow can't be broken, except when it is within an Antimagic Field.",
	weight : 0.05
}
MagicItemsList["veteran's cane"] = {
	name : "Veteran's Cane",
	source : [["X", 139]],
	type : "wondrous item",
	rarity : "common",
	description : "Once as a bonus action, I can grasp this walking cane and speak its command word to have it transform into an ordinary longsword. Once transformed, the longsword is nonmagical and can't revert back to a walking cane.",
	descriptionFull : "When you grasp this walking cane and use a bonus action to speak the command word, it transforms into an ordinary longsword and ceases to be magical.",
	weight : 4,
	action : [["bonus action", ""]]
}
MagicItemsList["walloping ammunition"] = {
	name : "Walloping Ammunition",
	nameTest : "Walloping",
	source : [["X", 139]],
	type : "weapon (any ammunition)",
	rarity : "common",
	description : "This magic ammunition packs a wallop. A creature hit by the ammunition must succeed on a DC 10 Strength saving throw or be knocked prone.",
	descriptionFull : "This ammunition packs a wallop. A creature hit by the ammunition must succeed on a DC 10 Strength saving throw or be knocked prone.",
	allowDuplicates : true,
	chooseGear : {
		type : "ammo",
		prefixOrSuffix : "suffix",
		descriptionChange : ["replace", "ammunition"],
		excludeCheck : function (inObjKey, inObj) {
			return /vials|flasks/i.test(inObj.icon);
		}
	}
}
MagicItemsList["wand of conducting"] = {
	name : "Wand of Conducting",
	source : [["X", 140]],
	type : "wand",
	rarity : "common",
	description : "This wand has 3 charges, regaining all at dawn. As an action, I can wave it around and expend 1 charge to create orchestral music that can be heard out to a range of 60 ft and ends when I stop waving the wand. If I use its last charge, roll a d20. On a 1, a sad tuba sound plays as the wand crumbles to dust.",
	descriptionFull : "This wand has 3 charges. While holding it, you can use an action to expend 1 of its charges and create orchestral music by waving it around. The music can be heard out to a range of 60 feet and ends when you stop waving the wand.\n   The wand regains all expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, a sad tuba sound plays as the wand crumbles to dust and is destroyed.",
	weight : 1,
	action : [["action", ""]],
	usages : 3,
	recovery : "dawn"
}
MagicItemsList["wand of pyrotechnics"] = {
	name : "Wand of Pyrotechnics",
	source : [["X", 140]],
	type : "wand",
	rarity : "common",
	description : "This wand has 7 charges, regaining 1d6+1 at dawn, 5% chance it is destroyed when its last charge is used. As an action, I can expend 1 charge to create a harmless burst of sound light at a point I can see up to 60 ft away, with the noise travelling 300 ft. The light is as bright as a torch flame but lasts only a second.",
	descriptionFull : "This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges and create a harmless burst of multicolored light at a point you can see up to 60 feet away. The burst of light is accompanied by a crackling noise that can be heard up to 300 feet away. The light is as bright as a torch flame but lasts only a second.\n   The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand erupts in a harmless pyrotechnic display and is destroyed.",
	weight : 1,
	action : [["action", ""]],
	usages : 7,
	recovery : "dawn",
	additional : "regains 1d6+1"
}
MagicItemsList["wand of scowls"] = {
	name : "Wand of Scowls",
	source : [["X", 140], ["WBtW", 214]],
	type : "wand",
	rarity : "common",
	description : "This wand has 3 charges, regain all at dawn. As an action, I can expend 1 of its charges and target a humanoid I can see within 30 ft. The target must succeed on a DC 10 Charisma save or be forced to scowl for 1 minute. If I expend the wand's last charge, roll a d20. On a 1, the wand transforms into a wand of smiles.",
	descriptionFull : "This wand has 3 charges. While holding it, you can use an action to expend 1 of its charges and target a humanoid you can see within 30 feet of you. The target must succeed on a DC 10 Charisma saving throw or be forced to scowl for 1 minute.\n   The wand regains all expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand transforms into a wand of smiles.",
	weight : 1,
	action : [["action", ""]],
	usages : 3,
	recovery : "dawn"
}
MagicItemsList["wand of smiles"] = {
	name : "Wand of Smiles",
	source : [["X", 140], ["WBtW", 214]],
	type : "wand",
	rarity : "common",
	description : "This wand has 3 charges, regain all at dawn. As an action, I can expend 1 of its charges and target a humanoid I can see within 30 ft. The target must succeed on a DC 10 Charisma save or be forced to smile for 1 minute. If I expend the wand's last charge, roll a d20. On a 1, the wand transforms into a wand of scowls.",
	descriptionFull : "This wand has 3 charges. While holding it, you can use an action to expend 1 of its charges and target a humanoid you can see within 30 feet of you. The target must succeed on a DC 10 Charisma saving throw or be forced to smile for 1 minute.\n   The wand regains all expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand transforms into a wand of scowls.",
	weight : 1,
	action : [["action", ""]],
	usages : 3,
	recovery : "dawn"
}
