var iFileName = "pub_20171121_XGtE.js";
RequiredSheetVersion(12.999);
// This file adds the backgrounds and beasts from Xanathar's Guide to Everything to MPMB's Character Record Sheet

// Define the source
SourceList.X={
	name : "Xanathar's Guide to Everything",
	abbreviation : "XGtE",
	group : "Primary Sources",
	url : "http://dnd.wizards.com/products/tabletop-games/rpg-products/xanathars-guide-everything",
	date : "2017/11/21"
};

// Add 3 subclasses for the Barbarian
AddSubClass("barbarian", "ancestral guardian-xgte", {
	regExpSearch : /^(?=.*ancestral)(?=.*guardian).*$/i,
	subname : "Path of the Ancestral Guardian",
	source : ["X", 9],
	fullname : "Ancestral Guardian",
	features : {
		"subclassfeature3" : {
			name : "Ancestral Protectors",
			source : ["X", 10],
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
			source : ["X", 10],
			minlevel : 6,
			description : desc([
				"As a reaction while raging when an ally I see within 30 ft is damaged, I can reduce it",
				"My guardian spirits reduce the damage by an amount equal to the roll of the dice"
			]),
			additional : levels.map(function (n) { return n < 6 ? "" : (n < 10 ? 2 : n < 14 ? 3 : 4) + "d6 damage reduced"; }),
			action : ["reaction", " (in Rage)"]
		},
		"subclassfeature10" : {
			name : "Consult the Spirits",
			source : ["X", 10],
			minlevel : 10,
			description : desc([
				"I can cast either Clairvoyance or Augury, without a spell slot or material components",
				"Augury consults ancestral spirits; Clairvoyance summons an invisible ancestral spirit",
				"Wisdom is my spellcasting ability for these spells"
			]),
			spellcastingBonus : [{
				name : "Consult the Spirits",
				spells : ["augury"],
				selection : ["augury"],
				oncesr : true
			}, {
				name : "Consult the Spirits",
				spells : ["clairvoyance"],
				selection : ["clairvoyance"],
				oncesr : true
			}],
			usages : 1,
			recovery : "short rest"
		},
		"subclassfeature14" : {
			name : "Vengeful Ancestors",
			source : ["X", 10],
			minlevel : 14,
			description : "\n   " + "When using Spirit Shield, the attacker takes the reduced amount as force damage"
		}
	}
});
AddSubClass("barbarian", "storm herald", {
	regExpSearch : /^(?=.*storm)(?=.*herald).*$/i,
	subname : "Path of the Storm Herald",
	source : ["X", 10],
	fullname : "Storm Herald",
	abilitySave : 3,
	features : {
		"subclassfeature3" : {
			name : "Storm Aura",
			source : ["X", 10],
			minlevel : 3,
			description : desc([
				"While raging, I emanate a 10-ft radius aura, but not through total cover",
				"The aura's features activate when I enter my rage or as a bonus action while raging",
				"Use the \"Choose Features\" button above to select the type of aura"
			]),
			choices : ["Desert", "Sea", "Tundra"],
			action : ["bonus action", " (reactivate)"],
			"desert" : {
				name : "Storm Aura: Desert",
				description : desc([
					"While raging, I emanate a 10-ft radius aura, but not through total cover",
					"The aura's features activate when I enter my rage or as a bonus action while raging",
					"Whenever I active my aura, anybody in my aura other than me takes fire damage"
				]),
				additional : levels.map(function (n) { return n < 3 ? "" : (n < 5 ? 2 : n < 10 ? 3 : n < 15 ? 4 : n < 20 ? 5 : 6) + " fire damage"; }),
				eval : "var ToAdd = ['barbarian', 'subclassfeature6', 'desert']; if (classes.known.barbarian.level >= 6 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)}; ToAdd[1] = 'subclassfeature10'; if (classes.known.barbarian.level >= 10 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)}; ToAdd[1] = 'subclassfeature14'; if (classes.known.barbarian.level >= 14 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)};"
			},
			"sea" : {
				name : "Storm Aura: Sea",
				description : desc([
					"While raging, I emanate a 10-ft radius aura, but not through total cover",
					"The aura's features activate when I enter my rage or as a bonus action while raging",
					"Whenever I active my aura, I can choose one creature in my aura other than me",
					"It takes lightning damage, or half as much on a successful Dexterity saving throw"
				]),
				additional : levels.map(function (n) { return n < 3 ? "" : (n < 10 ? 1 : n < 15 ? 2 : n < 20 ? 3 : 4) + "d6 lightning damage"; }),
				eval : "var ToAdd = ['barbarian', 'subclassfeature6', 'sea']; if (classes.known.barbarian.level >= 6 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)}; ToAdd[1] = 'subclassfeature10'; if (classes.known.barbarian.level >= 10 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)}; ToAdd[1] = 'subclassfeature14'; if (classes.known.barbarian.level >= 14 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)};"
			},
			"tundra" : {
				name : "Storm Aura: Tundra",
				description : desc([
					"While raging, I emanate a 10-ft radius aura, but not through total cover",
					"The aura's features activate when I enter my rage or as a bonus action while raging",
					"Whenever I active my aura, all creatures of my choice in my aura gain temporary HP"
				]),
				additional : levels.map(function (n) { return n < 3 ? "" : (n < 5 ? 2 : n < 10 ? 3 : n < 15 ? 4 : n < 20 ? 5 : 6) + " temporary hit points"; }),
				eval : "var ToAdd = ['barbarian', 'subclassfeature6', 'tundra']; if (classes.known.barbarian.level >= 6 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)}; ToAdd[1] = 'subclassfeature10'; if (classes.known.barbarian.level >= 10 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)}; ToAdd[1] = 'subclassfeature14'; if (classes.known.barbarian.level >= 14 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)};"
			}
		},
		"subclassfeature6" : {
			name : "Storm Soul",
			source : ["X", 10],
			minlevel : 6,
			description : "\n   " + "Use the \"Choose Features\" button above to select the effect",
			choices : ["desert", "sea", "tundra"],
			choicesNotInMenu : true,
			"desert" : {
				name : "Storm Soul: Desert",
				description : desc([
					"I have resistance to fire damage and don't suffer the effects of extreme heat",
					"As an action, I can set fire to an unattended flammable object I touch"
				]),
				action : ["action", " (ignite)"],
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
				action : ["action", " (freeze)"],
				dmgres : ["Cold"],
				savetxt : { immune : ["effects of extreme cold"] }
			},
			eval : "if (FeaChoice === '') {var CFrem = What('Class Features Remember'); var tReg = /.*?barbarian,subclassfeature3,(desert|sea|tundra).*/i; if ((tReg).test(CFrem)) {FeaChoice = CFrem.replace(tReg, '$1'); AddString('Class Features Remember', 'barbarian,subclassfeature6,' + FeaChoice, false);};};"
		},
		"subclassfeature10" : {
			name : "Shielding Storm",
			source : ["X", 10],
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
			},
			eval : "if (FeaChoice === '') {var CFrem = What('Class Features Remember'); var tReg = /.*?barbarian,subclassfeature3,(desert|sea|tundra).*/i; if ((tReg).test(CFrem)) {FeaChoice = CFrem.replace(tReg, '$1'); AddString('Class Features Remember', 'barbarian,subclassfeature10,' + FeaChoice, false);};};"
		},
		"subclassfeature14" : {
			name : "Raging Storm",
			source : ["X", 11],
			minlevel : 14,
			description : "\n   " + "Use the \"Choose Features\" button above to select the effect",
			choices : ["desert", "sea", "tundra"],
			choicesNotInMenu : true,
			"desert" : {
				name : "Raging Storm: Desert",
				description : desc([
					"As a reaction when hit by a creature in my Storm Aura, I can have it make a Dex save",
					"On a failed save, the attacker takes fire damage equal to half my barbarian level"
				]),
				action : ["reaction", " (if hit)"],
				additional : levels.map(function (n) { return n < 14 ? "" : Math.floor(n/2) + " fire damage"; })
			},
			"sea" : {
				name : "Raging Storm: Sea",
				description : desc([
					"As a reaction when I hit a creature in my Storm Aura, I can have it make a Str save",
					"On a failed save, the creature is knocked prone, as if struck by a wave"
				]),
				action : ["reaction", " (with attack)"]
			},
			"tundra" : {
				name : "Raging Storm: Tundra",
				description : desc([
					"Whenever I activate my Storm Aura, I can choose a creature in my aura that I can see",
					"It must make a Str save or have its speed reduced to 0 until the start of my next turn"
				])
			},
			eval : "if (FeaChoice === '') {var CFrem = What('Class Features Remember'); var tReg = /.*?barbarian,subclassfeature3,(desert|sea|tundra).*/i; if ((tReg).test(CFrem)) {FeaChoice = CFrem.replace(tReg, '$1'); AddString('Class Features Remember', 'barbarian,subclassfeature14,' + FeaChoice, false);};};"
		}
	}
});
AddSubClass("barbarian", "zealot", {
	regExpSearch : /zealot/i,
	subname : "Path of the Zealot",
	source : ["X", 11],
	fullname : "Zealot",
	features : {
		"subclassfeature3" : {
			name : "Divine Fury",
			source : ["X", 11],
			minlevel : 3,
			description : desc([
				"While raging, the first creature I hit with a weapon attack in my turn gets extra damage",
				"This is necrotic or radiant damage equal to 1d6 + half my barbarian level",
				"Choose a damage type using the \"Choose Feature\" button above"
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
				atkAdd : ["if(!isSpell&&classes.known.barbarian&&classes.known.barbarian.level>2&&(/\\brage\\b/i).test(inputText)){var CFrem=What('Class Features Remember');var tReg=/.*?barbarian,subclassfeature3,(necrotic damage|radiant damage).*/i;var FeaChoice=(tReg).test(CFrem)?CFrem.replace(tReg,'$1'):'damage';fields.Description+=(fields.Description?'; ':'')+'+1d6+'+Math.floor(classes.known.barbarian.level/2)+' '+FeaChoice+' on first hit each turn';};", "If I include the word 'Rage' in a melee weapon's name, it will show in its description that its first hit does extra damage."],
			}
		},
		"subclassfeature3.1" : {
			name : "Warrior of the Gods",
			source : ["X", 11],
			minlevel : 3,
			description : "\n   " + "Spells restoring me to life (not undeath or anything else) don't require material comp."
		},
		"subclassfeature6" : {
			name : "Fanatical Focus",
			source : ["X", 11],
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
			source : ["X", 11],
			minlevel : 10,
			description : desc([
				"As a bonus action, I choose up to 10 creatures within 60 ft that can hear my battle cry",
				"These creatures gain adv. on attacks and saves until the start of my next turn"
			]),
			usages : 1,
			recovery : "long rest",
			action : ["bonus action", ""]
		},
		"subclassfeature14" : {
			name : "Rage Beyond Death",
			source : ["X", 11],
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
AddSubClass("bard", "college of glamour-xgte", {
	regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*glamour).*$/i,
	subname : "College of Glamour",
	source : ["X", 14],
	features : {
		"subclassfeature3" : {
			name : "Mantle of Inspiration",
			source : ["X", 14],
			minlevel : 3,
			description : desc([
				"As a bonus action, I expend one Bardic Inspiration die to aid those within 60 ft of me",
				"My Cha mod (min 1) of creatures that I can see and can see me gain temporary HP",
				"They can immediately use a reaction to move their speed, without opportunity attacks"
			]),
			additional : levels.map(function (n) { return n < 3 ? "" : "1 inspiration die; " + (n < 5 ? 5 : n < 10 ? 8 : n < 15 ? 11 : 14) + " temp HP"; }),
			action : ["bonus action", ""]
		},
		"subclassfeature3.1" : {
			name : "Enthralling Performance",
			source : ["X", 14],
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
			source : ["X", 14],
			minlevel : 6,
			recovery : "long rest",
			usages : 1,
			action : ["bonus action", ""],
			description : desc([
				"As a bonus action, I appear unearthly beautiful while I concentrate, up to 1 minute",
				"At the same time, and as a bonus action during, I can cast Command without a spell slot",
				"Creatures charmed by me automatically fail their saves against these Command spells"
			]),
			spellcastingBonus : [{
				name : "Mantle of Majesty",
				spells : ["command"],
				selection : ["command"],
				oncelr : true
			}]
		},
		"subclassfeature14" : {
			name : "Unbreakable Majesty",
			source : ["X", 14],
			minlevel : 14,
			recovery : "short rest",
			usages : 1,
			action : ["bonus action", ""],
			description : desc([
				"As a bonus action, I gain a magically majestic presence for 1 min or until incapacitated",
				"During this, the first time a creature attacks me each turn they must make a Cha save",
				"If failed, it can't attack me this turn and must choose another target or lose its attack",
				"If successful, it can attack, but has disadv. on all saves against my spells on my next turn"
			])
		}
	}
});
AddSubClass("bard", "college of swords-xgte", {
	regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*\bswords?\b).*$/i,
	subname : "College of Swords",
	source : ["X", 15],
	attacks : [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiencies",
			source : ["X", 15],
			minlevel : 3,
			description : desc([
				"I gain proficiency with medium armor and scimitars",
				"My bardic spellcasting focus can be any simple or martial weapon I'm proficient with"
			]),
			armor : [false, true, false, false],
			weapons : [false, false, ["scimitar"]]
		},
		"subclassfeature3.1" : {
			name : "Fighting Style",
			source : ["X", 15],
			minlevel : 3,
			description : "\n   " + "Select a Fighting Style for the college of swords using the \"Choose Feature\" button above",
			choices : ["Dueling", "Two-Weapon Fighting"],
			"dueling" : FightingStyles.dueling,
			"two-weapon fighting" : FightingStyles.two_weapon
		},
		"subclassfeature3.2" : {
			name : "Blade Flourish",
			source : ["X", 15],
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
			source : ["X", 16],
			minlevel : 14,
			description : "\n   " + "When I do a Blade Flourish, I can use a d6 instead of expending a Bardic Inspiration die"
		}
	}
});
AddSubClass("bard", "college of whispers-xgte", {
	regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*whispers).*$/i,
	subname : "College of Whispers",
	source : ["X", 16],
	features : {
		"subclassfeature3" : {
			name : "Psychic Blades",
			source : ["X", 16],
			minlevel : 3,
			description : desc([
				"When I hit a creature with a weapon attack, I can expend one use of Bardic Inspiration",
				"If so, the attack does extra psychic damage; I can do so only once per round, on my turn"
			]),
			additional : levels.map(function (n) { return n < 3 ? "" : "1 Bardic Inspiration for +" + (n < 5 ? 2 : n < 10 ? 3 : n < 15 ? 5 : 8) + "d6 damage"; }),
		},
		"subclassfeature3.1" : {
			name : "Words of Terror",
			source : ["X", 16],
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
			source : ["X", 16],
			minlevel : 6,
			recovery : "short rest",
			usages : 1,
			action : ["reaction", ""],
			description : desc([
				"As a reaction when a humanoid dies within 30 ft of me, I can capture its shadow",
				"As an action, I can use it to make me look just like the dead person did while it was alive",
				"While disguised, I know general information about it and its memories, but not its secrets",
				"Others can see through the disguise with a Wis (Insight) check vs. my Cha (Deception) +5",
				"A shadow lasts until used or next long rest; The disguise ends as a bonus action or 1 hour"
			]),
			eval : "AddAction('action', 'Shadow Disguise (start)', 'Bard (College of Whispers)'); AddAction('bonus action', 'Shadow Disguise (end)', 'Bard (College of Whispers)');",
			removeeval : "RemoveAction('action', 'Shadow Disguise (start)'); RemoveAction('bonus action', 'Shadow Disguise (end)');"
		},
		"subclassfeature14" : {
			name : "Shadow Lore",
			source : ["X", 16],
			minlevel : 14,
			recovery : "long rest",
			usages : 1,
			action : ["action", ""],
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
AddSubClass("cleric", "forge domain-xgte", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(forge|forgery|blacksmith)).*$/i,
	subname : "Forge Domain",
	source : ["X", 18],
	spellcastingExtra : ["identify", "searing smite", "heat metal", "magic weapon", "elemental weapon", "protection from energy", "fabricate", "wall of fire", "animate objects", "creation"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Proficiency",
			source : ["X", 19],
			minlevel : 1,
			description : "\n   " + "I gain proficiency with heavy armor and smith's tools",
			armor : [false, false, true, false],
			toolProfs : ["Smith's tools"]
		},
		"subclassfeature1.1" : {
			name : "Blessing of the Forge",
			source : ["X", 19],
			minlevel : 1,
			action : ["action", ""],
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
			source : ["X", 19],
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
			source : ["X", 19],
			minlevel : 6,
			description : "\n   " + "I gain resistance to fire damage and +1 to AC while wearing medium or heavy armor",
			dmgres : ["Fire"],
			eval : "AddACMisc(1, 'Soul of the Forge', '+1 AC while wearing Medium or Heavy armor.\\n\\nSoul of the Forge was gained from Cleric (Forge Domain).', \"!tDoc.getField('Medium Armor').isBoxChecked(0) && !tDoc.getField('Heavy Armor').isBoxChecked(0)\");",
			removeeval : "AddACMisc(0, 'Soul of the Forge', '+1 AC while wearing Medium or Heavy armor.\\n\\nSoul of the Forge was gained from Cleric (Forge Domain).');"
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : ["X", 19],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
			additional : levels.map(function (n) {
				if (n < 8) return "";
				return "+" + (n < 14 ? 1 : 2) + "d8 fire damage";
			}),
			calcChanges : {
				atkAdd : ["if (classes.known.cleric && classes.known.cleric.level > 7 && !isSpell) {fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 fire damage'; }; ", "Once per turn, I can have one of my weapon attacks that hit do extra fire damage."]
			}
		},
		"subclassfeature17" : {
			name : "Saint of Forge and Fire",
			source : ["X", 19],
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
AddSubClass("cleric", "grave domain-xgte", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(grave)).*$/i,
	subname : "Grave Domain",
	source : ["X", 19],
	spellcastingExtra : ["bane", "false life", "gentle repose", "ray of enfeeblement", "revivify", "vampiric touch", "blight", "death ward", "antilife shell", "raise dead"],
	features : {
		"subclassfeature1" : {
			name : "Circle of Mortality",
			source : ["X", 20],
			minlevel : 1,
			action : ["bonus action", ""],
			description : desc([
				"Spells I cast to heal a living creature at 0 HP have their dice count as their max result",
				"I learn Spare the Dying, which I can cast as a bonus action with a range of 30 ft"
			]),
			spellcastingBonus : {
				name : "Circle of Mortality",
				spells : ["spare the dying"],
				selection : ["spare the dying"],
				atwill : true
			}
		},
		"subclassfeature1.1" : {
			name : "Eyes of the Grave",
			source : ["X", 20],
			minlevel : 1,
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, tDoc.getField('Wis Mod').value);",
			recovery : "long rest",
			description : desc([
				"As an action, I sense undead within 60 ft that aren't protected from divination magic",
				"Until the end of my next turn, I sense the location of any undead not behind total cover"
			])
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Path to the Grave",
			source : ["X", 20],
			minlevel : 2,
			action : ["action", ""],
			description : desc([
				"As an action, I can curse a creature within 30 ft until the end of my next turn",
				"It is vulnerable to all the damage from the next attack by me or my allies that hits it"
			])
		},
		"subclassfeature6" : {
			name : "Sentinel at Death's Door",
			source : ["X", 20],
			minlevel : 6,
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, tDoc.getField('Wis Mod').value);",
			recovery : "long rest",
			action : ["reaction", ""],
			description : "\n   " + "As a reaction, I turn a critical hit to me or an ally I see within 30 ft to a normal hit"
		},
		"subclassfeature8" : {
			name : "Potent Spellcasting",
			source : ["X", 20],
			minlevel : 8,
			description : "\n   " + "I add my Wisdom modifier to the damage I deal with my cleric cantrips",
			calcChanges : {
				atkCalc : ["if (classes.known.cleric && classes.known.cleric.level > 7 && thisWeapon[4].indexOf('cleric') !== -1 && thisWeapon[3] && SpellsList[thisWeapon[3]].level === 0) { output.extraDmg += What('Wis Mod'); }; ", "My cleric cantrips get my Wisdom modifier added to their damage."]
			}
		},
		"subclassfeature17" : {
			name : "Keeper of Souls",
			source : ["X", 20],
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
AddSubClass("druid", "circle of dreams-xgte", {
	regExpSearch : /^(?=.*(druid|shaman))(?=.*\bdreams\b).*$/i,
	subname : "Circle of Dreams",
	source : ["UA:DC", 1],
	features : {
		"subclassfeature2" : {
			name : "Balm of the Summer Court",
			source : ["UA:DC", 1],
			minlevel : 2,
			description : "\n   " + "I have a pool of fey energy represented by a number of d6s equal to my druid level" + "\n   " + "As a bonus action, I can spend dice to heal an ally within 120 ft of me that I can see " + "\n   " + "I can spend up to half my druid level worth of dice from the pool at once" + "\n   " + "The ally heals an amount equal to the total rolled and gains 1 temp HP per die spent" + "\n   " + "In addition, the ally gains +5 ft speed per die spent, which lasts for 1 minute",
			usages : ["", "2d6 per ", "3d6 per ", "4d6 per ", "5d6 per ", "6d6 per ", "7d6 per ", "8d6 per ", "9d6 per ", "10d6 per ", "11d6 per ", "12d6 per ", "13d6 per ", "14d6 per ", "15d6 per ", "16d6 per ", "17d6 per ", "18d6 per ", "19d6 per ", "20d6 per "],
			recovery : "long rest"
		},
		"subclassfeature6" : {
			name : "Hearth of Moonlight and Shadow",
			source : ["UA:DC", 1],
			minlevel : 6,
			description : "\n   " + "At the start of a short or long rest, I can create a warded area of 30-ft radius" + "\n   " + "Within this area, my allies and I gain +5 on Wis (Perception) checks to detect creatures" + "\n   " + "Also, any light from open flames is not visible from outside the area" + "\n   " + "This effect lasts until the end of the rest or when I leave the area"
		},
		"subclassfeature10" : {
			name : "Hidden Paths",
			source : ["UA:DC", 1],
			minlevel : 10,
			description : "\n   " + "On my turn, I can teleport up to 30 ft to where I can see; Moved distance costs speed" + "\n   " + "As an action, I can teleport a willing ally I touch up to 30 ft to a spot I can see" + "\n   " + "Once I used either option, I can't use this feature again until 1d4 rounds have passed",
			usages : 1,
			recovery : "1d4 rounds",
			action : ["action", " (on ally)"]
		},
		"subclassfeature14" : {
			name : "Purifying Light",
			source : ["UA:DC", 1],
			minlevel : 14,
			description : "\n   " + "When I use a spell slot with a spell to restores HP, I can use Dispel Magic on the target" + "\n   " + "The Dispel Magic counts as if being cast with the same spell slot as the healing spell" + "\n   " + "Each creature effected by the Dispel Magic costs as one use of this feature",
			usages : 3,
			recovery : "long rest"
		}
	}
});
AddSubClass("druid", "circle of the shepherd-xgte", {
	regExpSearch : /^(?=.*(druid|shaman))(?=.*shepherd).*$/i,
	subname : "Circle of the Shepherd",
	source : ["UA:RCO", 1],
	features : {
		"subclassfeature2" : {
			name : "Speech of the Woods",
			source : ["UA:RCO", 1],
			minlevel : 2,
			description : desc([
				"I can talk with beasts, they understand me and I them, to the limit of their intelligence",
				"This doesn't automatically make me friends with all beasts; Additionally, I learn Sylvan"
			]),
			languageProfs : ["Sylvan"]
		},
		"subclassfeature2.1" : {
			name : "Spirit Totem",
			source : ["UA:RCO", 1],
			minlevel : 2,
			description : desc([
				"As a bonus action, I can summon, or move, a spirit to a point I can see within 60 ft",
				"The spirit is a Bear, Hawk, or Unicorn (see below), which has a 30-ft radius aura",
				"It is incorporeal, immobile, doesn't counts as a creature or object, and persists for 1 min",
				" - " + "Bear: my allies in the area and I instantly gain 5 + my druid level in temp HP",
				"    " + "While in the aura, my allies and I gain advantage on Strength checks and saves",
				" - " + "Hawk: As a reaction, I can grant advantage on an attack vs. a target in the aura",
				" - " + "Unicorn: my allies and I gain advantage on ability checks to detect targets in the aura",
				"    " + "If I cast a healing spell with a spell slot, allies in the aura heal my druid level in HP"
			]),
			usages : 1,
			recovery : "short rest",
			action : ["bonus action", ""]
		},
		"subclassfeature6" : {
			name : "Mighty Summoner",
			source : ["UA:RCO", 2],
			minlevel : 6,
			description : "\n   " + "Beasts or Fey I summon with spells get +2 HP per HD and their attacks count as magical"
		},
		"subclassfeature10" : {
			name : "Guardian Spirit",
			source : ["UA:RCO", 2],
			minlevel : 10,
			description : "\n   " + "When a Beast or Fey that I summoned ends its turn in my Spirit Totem aura, it heals",
			additional : levels.map(function (n) {
				if (n < 10) return "";
				return "heals " + Math.floor(n / 2) + " HP";
			})
		},
		"subclassfeature14" : {
			name : "Faithful Summons",
			source : ["UA:RCO", 2],
			minlevel : 14,
			description : desc([
				"When I am reduced to 0 HP or incapacitated against my will, I can summon protectors",
				"I gain the benefits of a Conjure Animals spell as if cast with a 9th-level spell slot",
				"It summons 4 beast of my choice with CR 2 or lower within 20 ft of me for 1 hour",
				"If they receive no commands from me, they protect me from harm and attack my foes"
			]),
			usages : 1,
			recovery : "long rest"
		}
	}
});

/* SpellsList["catnap"]
SpellsList["cause fear"] // UA:SS
SpellsList["ceremony"] // UA:SS
SpellsList["chaos bolt"] // UA:SS
SpellsList["charm monster"]
SpellsList["create homunculus"]
SpellsList["crown of stars"]
SpellsList["dance macabre"]
SpellsList["dawn"]
SpellsList["dragon's breath"]
SpellsList["druid grove"]
SpellsList["enemies abound"]
SpellsList["far step"]
SpellsList["find greater steed"]
SpellsList["guardian of nature"]
SpellsList["healing spirit"]
SpellsList["holy weapon"]
SpellsList["illusory dragon"]
SpellsList["infernal calling"]
SpellsList["infestation"] // UA:SS
SpellsList["invulnerability"]
SpellsList["life transferece"]
SpellsList["maddening darkness"]
SpellsList["mass polymorph"]
SpellsList["mental prison"]
SpellsList["mighty fortress"]
SpellsList["mind spike"]
SpellsList["negative energy flood"]
SpellsList["power word pain"]
SpellsList["primal savagery"] // UA:SS
SpellsList["psychic scream"]
SpellsList["scatter"]
SpellsList["shadow blade"]
SpellsList["sickening radiance"]
SpellsList["skill empowerment"]
SpellsList["snare"] // UA:SS
SpellsList["soul cage"]
SpellsList["sleet wind strike"]
SpellsList["summon greater demon"]
SpellsList["summon lesser demon"]
SpellsList["synaptic static"]
SpellsList["temple of the gods"]
SpellsList["tenser's transformation"]
SpellsList["thunder step"]
SpellsList["tiny servant"]
SpellsList["toll the dead"] // UA:SS
SpellsList["wall of light"]
SpellsList["word of radiance"]
SpellsList["wrath of nature"]
SpellsList["zephyr strike"] // UA:SS
 */