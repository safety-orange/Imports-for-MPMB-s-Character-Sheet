// regex search for wrong source entries: source : \[\[?"[^(S|X)]


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
			additional : levels.map(function (n) { return n < 3 ? "" : "1 Bardic Inspiration for +" + (n < 5 ? 2 : n < 10 ? 3 : n < 15 ? 5 : 8) + "d6 damage"; })
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
	source : ["X", 22],
	features : {
		"subclassfeature2" : {
			name : "Balm of the Summer Court",
			source : ["X", 22],
			minlevel : 2,
			description : desc([
				"I have a pool of fey energy represented by a number of d6s equal to my druid level",
				"As a bonus action, I can spend dice to heal an ally within 120 ft of me that I can see",
				"I can spend up to half my druid level worth of dice from the pool at once",
				"The ally heals an amount equal to the total rolled and gains 1 temp HP per die spent"
			]),
			usages : levels.map(function (n) { return n < 2 ? "" : n + "d6 per "; }),
			recovery : "long rest",
			action : ["bonus action", ""]
		},
		"subclassfeature6" : {
			name : "Hearth of Moonlight and Shadow",
			source : ["X", 22],
			minlevel : 6,
			description : desc([
				"At the start of a rest, I can create a 30-ft radius invisible magical sphere",
				"The sphere extends from a point in space I touch, but doesn't expend through total cover",
				"Within this area, my allies and I gain +5 on Wis (Perception) and Dex (Stealth) checks",
				"Also, any light from open flames that are in the sphere is invisible from outside the area",
				"This effect lasts until the end of the rest or when I leave the sphere"
			])
		},
		"subclassfeature10" : {
			name : "Hidden Paths",
			source : ["X", 22],
			minlevel : 10,
			description : desc([
				"As a bonus action, I can teleport myself up to 60 ft to a spot I can see",
				"As an action, I can teleport a willing ally I touch up to 30 ft to a spot I can see"
			]),
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, tDoc.getField('Wis Mod').value);",
			recovery : "long rest",
			action : ["bonus action", ""],
			eval : "AddAction('action', 'Hidden Paths (on ally)', 'Druid (Circle of Dreams)');",
			removeeval : "RemoveAction('action', 'Hidden Paths (on ally)');"
		},
		"subclassfeature14" : {
			name : "Walker in Dreams",
			source : ["X", 23],
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
				oncesr : true
			}, {
				name : "Walker in Dreams",
				spells : ["scrying"],
				selection : ["scrying"],
				oncesr : true
			}, {
				name : "Walker in Dreams",
				spells : ["teleportation circle"],
				selection : ["teleportation circle"],
				oncesr : true
			}]
		}
	}
});
AddSubClass("druid", "circle of the shepherd-xgte", {
	regExpSearch : /^(?=.*(druid|shaman))(?=.*shepherd).*$/i,
	subname : "Circle of the Shepherd",
	source : ["X", 23],
	features : {
		"subclassfeature2" : {
			name : "Speech of the Woods",
			source : ["X", 23],
			minlevel : 2,
			description : desc([
				"I can talk with beasts, they understand me and I them, to the limit of their intelligence",
				"This doesn't automatically make me friends with all beasts; Additionally, I learn Sylvan"
			]),
			languageProfs : ["Sylvan"]
		},
		"subclassfeature2.1" : {
			name : "Spirit Totem",
			source : ["X", 23],
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
			action : ["bonus action", ""]
		},
		"subclassfeature6" : {
			name : "Mighty Summoner",
			source : ["X", 24],
			minlevel : 6,
			description : "\n   " + "Beasts or Fey I summon with spells get +2 HP per HD and their attacks count as magical"
		},
		"subclassfeature10" : {
			name : "Guardian Spirit",
			source : ["X", 24],
			minlevel : 10,
			description : "\n   " + "When a Beast or Fey that I summoned ends its turn in my Spirit Totem aura, it heals",
			additional : levels.map(function (n) { return n < 10 ? "" : "heals " + Math.floor(n / 2) + " HP"; })
		},
		"subclassfeature14" : {
			name : "Faithful Summons",
			source : ["X", 24],
			minlevel : 14,
			description : desc([
				"When I am reduced to 0 HP or incapacitated against my will, I can cast Conjure Animals",
				"This is done as if using a 9th-level spell slot to summon 4 beast of my choice up to CR 2",
				"They appear within 20 ft of me, last 1 hour, and protect me from harm and attack foes"
			]),
			usages : 1,
			recovery : "long rest"
		}
	}
});

// Add 3 subclasses for the Fighter
AddSubClass("fighter", "arcane archer-xgte", {
	regExpSearch : /^(?=.*arcane)(?=.*archer).*$/i,
	subname : "Arcane Archer",
	source : ["X", 28],
	fullname : "Arcane Archer",
	abilitySave : 4,
	features : {
		"subclassfeature3" : {
			name : "Arcane Archer's Lore",
			source : ["X", 28],
			minlevel : 3,
			description : desc([
				"I gain proficiency with either the Arcana or Nature skill",
				"I also learn either the Prestidigitation or the Druidcraft cantrip"
			]),
			skillstxt : "\n\n" + toUni("Arcane Archer") + ": Choose Arcana or Nature.",
			spellcastingBonus : {
				name : "Arcane Archer's Lore",
				spells : ["druidcraft", "prestidigitation"]
			},
		},
		"subclassfeature3.1" : {
			name : "Arcane Shot",
			source : ["X", 28],
			minlevel : 3,
			description : desc([
				"I can unleash magical effects when I fire an arrow from a short- or longbow",
				"I can use this once per turn as part of the Attack action, after an attack hits",
				"I know a number of Arcane Shot Options and learn additional at certain levels",
				"Use the \"Choose Features\" button above to add Arcane Shots Options to the third page"
			]),
			usages : 2,
			recovery : "short rest",
			additional : levels.map( function(n) { return n < 3 ? "" : (n < 7 ? 2 : n < 10 ? 3 : n < 15 ? 4 : n < 18 ? 5 : 6) + " options known"; }),
			extraname : "Arcane Shot Option",
			extrachoices : ["Banishing Arrow [Abjuration]", "Beguiling Arrow [Enchantment]", "Bursting Arrow [Evocation]", "Enfeebling Arrow [Necromancy]", "Grasping Arrow [Conjuration]", "Piercing Arrow [Transmutation]", "Seeking Arrow [Divination]", "Shadow Arrow [Illusion]"],
			"banishing arrow [abjuration]" : {
				name : "Banishing Arrow [Abjuration]",
				source : ["X", 29],
				description : desc([
					"The target makes a Cha save or is banished to the Feywild until the end of its next turn",
					"While banished, its speed is 0 and is incapacitated; It re-appearing in the same spot",
					"When I reach 18th level, this Arcane Shot Option also does an extra 2d6 force damage"
				]),
				additional : levels.map( function(n) { return n < 18 ? "" : "+2d6 force damage"; })
			},
			"beguiling arrow [enchantment]" : {
				name : "Beguiling Arrow [Enchantment]",
				source : ["X", 29],
				description : desc([
					"The target takes extra psychic damage and must succeed on a Wisdom save",
					"If failed, it is charmed by one of my allies within 30 ft of it that I choose",
					"This lasts until my next turn starts or until the chosen ally attacks the target in any way"
				]),
				additional : levels.map( function(n) { return n < 3 ? "" : "+" + (n < 18 ? 2 : 4) + "d6 damage"; })
			},
			"bursting arrow [evocation]" : {
				name : "Bursting Arrow [Evocation]",
				source : ["X", 29],
				description : "\n   " + "The target, in addition to the shot, and all creatures within 10 ft of it take damage",
				additional : levels.map( function(n) { return n < 3 ? "" : "+" + (n < 18 ? 2 : 4) + "d6 force damage"; })
			},
			"enfeebling arrow [necromancy]" : {
				name : "Enfeebling Arrow [Necromancy]",
				source : ["X", 29],
				description : desc([
					"The target takes extra necrotic damage and must make a Constitution save",
					"If failed, the damage of the target's attacks are halved until the start of my next turn"
				]),
				additional : levels.map( function(n) { return n < 3 ? "" : "+" + (n < 18 ? 2 : 4) + "d6 necrotic damage"; })
			},
			"grasping arrow [conjuration]" : {
				name : "Grasping Arrow [Conjuration]",
				source : ["X", 29],
				description : desc([
					"The target takes extra poison damage as brambles wrap around it for 1 minute",
					"The brambles give it -10 ft speed and do it slashing damage every round it moves",
					"These can be removed by it or another as an action with Strength (Athletics) vs. my DC"
				]),
				additional : levels.map( function(n) { return n < 3 ? "" : (n < 18 ? 2 : 4) + "d6 poison/slash. damage"; })
			},
			"piercing arrow [transmutation]" : {
				name : "Piercing Arrow [Transmutation]",
				source : ["X", 29],
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
				source : ["X", 30],
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
				source : ["X", 30],
				description : desc([
					"The target takes extra psychic damage and must succeed on a Wisdom save",
					"If failed, the target can't see anything beyond 5 ft until the end of my next turn"
				]),
				additional : levels.map( function(n) { return n < 3 ? "" : "+" + (n < 18 ? 2 : 4) + "d6 psyhic damage"; })
			}
		},
		"subclassfeature7" : {
			name : "Magic Arrow",
			source : ["X", 28],
			minlevel : 3,
			description : "\n   " + "Whenever I fire a nonmagical arrow from a short- or longbow, I can make it magical"
		},
		"subclassfeature7.1" : {
			name : "Curving Shot",
			source : ["X", 28],
			minlevel : 7,
			description : desc([
				"Once per turn when I miss with a magic arrow, I can use a bonus action to redirect it",
				"I reroll the attack against a different target within 60 ft of the original target"
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature15" : {
			name : "Ever-Ready Shot",
			source : ["X", 28],
			minlevel : 15,
			description : "\n   " + "I regain one use of Arcane Shot if I have no more remaining when I roll initiative"
		}
	}
});
AddSubClass("fighter", "cavalier-xgte", {
	regExpSearch : /cavalier/i,
	subname : "Cavalier",
	source : ["X", 30],
	fullname : "Cavalier",
	abilitySave : 1,
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiency",
			source : ["X", 30],
			minlevel : 3,
			description : desc([
				"I gain proficiency with Animal Handling, History, Insight, Performance, or Persuasion",
				"Alternatively, I learn one language; Use the \"Choose Feature\" button above for this"
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
				skillstxt : "\n\n" + toUni("Cavalier") + ": Choose one from: Animal Handling, History, Insight, Performance, or Persuasion."
			}
		},
		"subclassfeature3.1" : {
			name : "Born in the Saddle",
			source : ["X", 30],
			minlevel : 3,
			description : desc([
				"I have advantage on saves to avoid falling off my mount, and land on my feet if I fail",
				"Mounting or dismounting a creature costs me only 5 ft of movement instead of half"
			]),
			savetxt : { adv_vs : ["falling off my mount"] }
		},
		"subclassfeature3.2" : {
			name : "Unwavering Mark",
			source : ["X", 30],
			minlevel : 3,
			description : desc([
				"If I hit a creature with a melee weapon attack, I mark it until the end of my next turn",
				"While it is within 5 ft of me, a marked target has disadv. on attacks not directed at me",
				"If it damages anybody but me, I can make a special melee attack vs. it in my next turn",
				"This takes a bonus action, but has adv. and adds half my fighter level to the damage",
				"A mark ends early if I'm incapacitated, die, or somebody else marks the target"
			]),
			usages : "Strength modifier per ",
			usagescalc : "event.value = Math.max(1, tDoc.getField('Str Mod').value);",
			recovery : "long rest",
			additional : levels.map(function (n) {
				return n < 3 ? "" : "+" + Math.floor(n/2) + " damage";
			}),
			calcChanges : {
				atkCalc : ["if (isMeleeWeapon && classes.known.fighter && classes.known.fighter.level > 2 && (/\\b(unwavering.?mark|marked)\\b/i).test(WeaponText)) { output.extraDmg += Math.floor(classes.known.fighter.level/2); }; ", "If I include the words 'Unwavering Mark' or 'Marked' in the name or description of a melee weapon, it gets half my fighter level added to its Damage."]
			}
		},
		"subclassfeature7" : {
			name : "Warding Maneuver",
			source : ["X", 30],
			minlevel : 7,
			description : desc([
				"As a reaction when I or a creature within 5 ft is hit, I can try to fend off the strike",
				"I add 1d8 to the target's AC; If the attack still hits, the target has resistance against it",
				"I can only do this while wielding a melee weapon or a shield"
			]),
			usages : "Constitution modifier per ",
			usagescalc : "event.value = Math.max(1, tDoc.getField('Con Mod').value);",
			recovery : "long rest",
			action : ["reaction", ""],
		},
		"subclassfeature10" : {
			name : "Hold the Line",
			source : ["X", 30],
			minlevel : 10,
			description : desc([
				"Creatures provoke opportunity attacks when moving 5 ft or more while within my reach",
				"If I hit an opportunity attack, the target's speed is reduced to 0 until the end of the turn"
			])
		},
		"subclassfeature15" : {
			name : "Ferocious Charger",
			source : ["X", 31],
			minlevel : 15,
			description : desc([
				"If I hit a creature after moving 10 ft in a straight line, it must make a Strength save",
				"If failed, the target is knocked prone; I can do this only once per turn"
			])
		},
		"subclassfeature18" : {
			name : "Vigilant Defender",
			source : ["X", 31],
			minlevel : 18,
			description : desc([
				"I can make opportunity attacks without using my reaction",
				"I can do this only once on every creature's turn, except on my own turn",
				"I can't do this on the same turn that I use my normal reaction"
			])
		}
	}
});
AddSubClass("fighter", "samurai-xgte", {
	regExpSearch : /samurai/i,
	subname : "Samurai",
	source : ["X", 31],
	fullname : "Samurai",
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiency",
			source : ["X", 31],
			minlevel : 3,
			description : desc([
				"I gain proficiency with History, Insight, Performance, or Persuasion",
				"Alternatively, I learn one language; Use the \"Choose Feature\" button above for this"
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
				skillstxt : "\n\n" + toUni("Samurai") + ": Choose one from: History, Insight, Performance, or Persuasion."
			}
		},
		"subclassfeature3.1" : {
			name : "Fighting Spirit",
			source : ["X", 31],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can give myself advantage on weapon attacks and temporary HP",
				"This advantage on weapon attack rolls lasts until the end of my current turn"
			]),
			recovery : "long rest",
			usages : 3,
			additional : levels.map(function (n) { return n < 3 ? "" : (n < 10 ? 5 : n < 15 ? 10 : 15) + " temporary HP"; }),
			action : ["bonus action", ""]
		},
		"subclassfeature7" : {
			name : "Elegant Courtier",
			source : ["X", 31],
			minlevel : 7,
			description : desc([
				"I can add my Wisdom modifier to any Charisma (Persuasion) checks I make",
				"I gain proficiency with Wis saves, or if I'm already proficient, either Int or Cha saves"
			]),
			saves : ["Wis"],
			addMod : { type : "skill", field : "Pers", mod : "Wis", text : "I can add my Wisdom modifier to any Charisma (Persuasion) checks I make." }
		},
		"subclassfeature10" : {
			name : "Tireless Spirit",
			source : ["X", 31],
			minlevel : 10,
			description : "\n   " + "I regain one use of Fighting Spirit if I have no more remaining when I roll initiative"
		},
		"subclassfeature15" : {
			name : "Rapid Strike",
			source : ["X", 31],
			minlevel : 15,
			description : desc([
				"With the Attack action, I can forgo advantage on one attack to make one extra attack",
				"This extra attack is part of the same action; I can do this only once per turn"
			])
		},
		"subclassfeature18" : {
			name : "Strength Before Death",
			source : ["X", 31],
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
AddSubClass("monk", "way of the drunken master-xgte", {
	regExpSearch : /^((?=.*drunken)(?=.*master))|((?=.*drunk)((?=.*(monk|monastic))|((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior)))).*$/i,
	subname : "Way of the Drunken Master",
	source : ["X", 33],
	fullname : "Drunken Master",
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiencies",
			source : ["X", 34],
			minlevel : 3,
			description : "\n   " + "I gain proficiency with the Performance skill and brewer's supplies",
			skills : ["Performance"],
			skillstxt : "\n\n" + toUni("Monk (Way of the Drunken Master)") + ": Performance.",
			toolProfs : ["Brewer's supplies"]
		},
		"subclassfeature3.1" : {
			name : "Drunken Technique",
			source : ["X", 34],
			minlevel : 3,
			description : "\n   " + "When using Flurry of Blows, I gain the benefits of a Disengage and +10 ft speed this turn"
		},
		"subclassfeature6" : {
			name : "Tipsy Sway",
			source : ["X", 34],
			minlevel : 6,
			description : "\n   " + "1 ki point: as a reaction if missed in melee, attacker instead hits other I see within 5 ft",
			additional : "Standing up from prone costs only 5 ft",
			action : ["reaction", ""]
		},
		"subclassfeature11" : {
			name : "Drunkard's Luck",
			source : ["X", 34],
			minlevel : 11,
			description : "\n   " + "By spending 2 ki points, I can remove disadv. from an ability check, attack roll, or save",
			additional : "2 ki points"
		},
		"subclassfeature17" : {
			name : "Intoxicated Frenzy",
			source : ["X", 34],
			minlevel : 17,
			description : "\n   " + "I can make 3 extra attacks with Flurry of Blows if each is used on a different target"
		}
	}
});
AddSubClass("monk", "way of the kensei-xgte", {
	regExpSearch : /kensei/i,
	subname : "Way of the Kensei",
	source : ["X", 34],
	fullname : "Kensei",
	features : {
		"subclassfeature3" : {
			name : "Path of the Kensei",
			source : ["X", 34],
			minlevel : 3,
			description : desc([
				"I gain proficiency with either calligrapher's supplies or painter's supplies",
				"Some weapons, that don't have the heavy or special property, are kensei weapons for me",
				"At least one ranged and one melee weapon, more at higher levels (longbow does qualify)",
				"With these: proficient, count as a monk weapons, special bonuses depending on type held:",
				"\u2022 Melee: if I do unarmed strike during an Attack action, +2 AC until my next turn starts",
				"\u2022 Ranged: as a bonus action, ranged weapon attacks deal +1d4 damage in current turn"
			]),
			action: ["bonus action", " (with ranged)"],
			additional : levels.map( function(n) { return n < 3 ? "" : (n < 6 ? 2 : n < 11 ? 3 : n < 17 ? 4 : 5) + " kensei weapons"; }),
			toolProfs : ["calligrapher's or painter's supplies"],
			calcChanges : {
				atkAdd : [
					"var monkDie = function(n) {return n < 5 ? 4 : n < 11 ? 6 : n < 17 ? 8 : 10;}; if (classes.known.monk && classes.known.monk.level > 2 && theWea && !isSpell && !theWea.monkweapon && (!(/heavy|special/i).test(fields.Description) || WeaponName === 'longbow') && inputText.toLowerCase().indexOf('kensei') !== -1) {var aMonkDie = aMonkDie ? aMonkDie : monkDie(classes.known.monk.level); try {var curDie = eval(fields.Damage_Die.replace('d', '*'));} catch (e) {var curDie = 'x';}; if (isNaN(curDie) || curDie < aMonkDie) {fields.Damage_Die = '1d' + aMonkDie; }; if (theWea.ability === 1) {fields.Mod = StrDex; }; if (isRangedWeapon) {fields.Description += (fields.Description ? '; ' : '') + 'As bonus action with Attack action, +1d4 damage'; }; fields.Proficiency = true; }; ",
					"If I inlcude the word 'Kensei' in the name of a weapon that doesn't have the Heavy or Special attribute, or that is a longbow, that weapon gains the same benefits as any other 'Monk Weapon'.\nIn addition, with ranged 'Kensei Weapons', I can take a bonus action to have that hit, and any other hit after that as part of the same action, do +1d4 damage."
				]
			}
		},
		"ki-empowered strikes" : {
			name : "One with the Blade",
			source : ["X", 34],
			minlevel : 6,
			description : "\n   " + "My unarmed strikes and kensei weapon attacks count as magical",
			calcChanges : {
				atkAdd : ["if (((/unarmed strike/i).test(WeaponName) || (inputText.toLowerCase().indexOf('kensei') !== -1  && theWea && !isSpell && (!(/heavy|special/i).test(fields.Description) || WeaponName === 'longbow'))) && fields.Description.indexOf('Counts as magical') === -1 && !thisWeapon[1]) {fields.Description += (fields.Description ? '; ' : '') + 'Counts as magical';}; ", "My unarmed strikes and any Kensei Weapons count as magical for overcoming resistances and immunities."]
			},
			extraname : "Way of the Kensei 6",
			"deft strike" : {
				name : "Deft Strike",
				source : ["X", 35],
				description : "\n   " + "Once per turn when I hit with a kensei weapon, I can do a martial arts die extra damage",
				additional : "1 ki point"
			},
			eval : "ClassFeatureOptions(['monk', 'ki-empowered strikes', 'deft strike', 'extra']);",
			removeeval : "ClassFeatureOptions(['monk', 'ki-empowered strikes', 'deft strike', 'extra'], 'remove');"
		},
		"subclassfeature17" : {
			name : "Unerring Accuracy",
			source : ["X", 35],
			minlevel : 17,
			description : "\n   " + "Once per turn, if I miss a monk weapon attack on my turn, I can reroll the attack roll",
			extraname : "Way of the Kensei 11",
			"sharpen the blade" : {
				name : "Sharpen the Blade",
				source : ["X", 35],
				description : desc([
					"As a bonus action, I can grant my kensei weapon a bonus to attack and damage rolls",
					"This bonus is equal to the number of ki points I spend and doesn't stack with magic",
					"This lasts for 1 minute or until I use this feature again"
				]),
				additional : "1 to 3 ki points",
				action : ["bonus action", ""]
			},
			changeeval : "if (newClassLvl.monk >= 11 && (What('Extra.Notes') + What('Class Features')).toLowerCase().indexOf('sharpen the blade') === -1) {ClassFeatureOptions(['monk', 'subclassfeature17', 'sharpen the blade', 'extra'])} else if (newClassLvl.monk <= 11 && oldClassLvl.monk >= 11) {ClassFeatureOptions(['monk', 'subclassfeature17', 'sharpen the blade', 'extra'], 'remove')}"
		}
	}
});
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
				action : ["bonus action", " (2\u00D7 with Attack action)"],
				eval : "AddWeapon('Radiant Sun Bolt');",
				removeeval : "RemoveWeapon('Radiant Sun Bolt');",
				extraname : "Way of the Sun Soul 6",
				changeeval : "if (newClassLvl.monk >= 6 && (What('Extra.Notes') + What('Class Features')).toLowerCase().indexOf('searing arc strike') === -1) {ClassFeatureOptions(['monk', 'subclassfeature3', 'searing arc strike', 'extra'])} else if (newClassLvl.monk < 6 && oldClassLvl.monk >= 6) {ClassFeatureOptions(['monk', 'subclassfeature3', 'searing arc strike', 'extra'], 'remove')};",
				"searing arc strike" : {
					name : "Searing Arc Strike",
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
					action : ["bonus action", " (after Attack action)"]
				}
			},
			"subclassfeature11" : {
				name : "Searing Sunburst",
				source : [["S", 131], ["X", 35]],
				minlevel : 11,
				description : desc([
					"As an action, anyone in a 20-ft radius light on a point within 150 ft makes a Con save",
					"If failed and not behind opaque total cover, take 2d6 (+ 2d6/ki point) radiant damage"
				]),
				action : ["action", ""],
				additional : "0 ki points + max 3 ki points"
			},
			"subclassfeature17" : {
				name : "Sun Shield",
				source : [["S", 131], ["X", 35]],
				minlevel : 17,
				description : desc([
					"As a reaction, when I'm hit by a melee attack, I can deal 5 + Wis mod radiant damage",
					"I can only do this while my light aura is on; I can turn it on/off as a bonus action"
				]),
				action : ["bonus action", " (start/stop)"],
				additional : "30-ft rad bright + 30-ft dim light",
				eval : "AddAction('reaction', 'Sun Shield (hit in melee)', 'Monk (Way of the Sun Soul)')",
				removeeval : "RemoveAction('reaction', 'Sun Shield');"
			}
		}
	});
	WeaponsList["radiant sun bolt"] = {
		regExpSearch : /^(?=.*radiant)(?=.*(sun|light))(?=.*bolt).*$/i,
		name : "Radiant Sun Bolt",
		source : [["S", 131], ["X", 35]],
		ability : 2,
		type : "Spell",
		damage : [1, 4, "radiant"],
		range : "30 ft",
		description : "If used in an Attack action, spend 1 ki point to use it twice as a bonus action",
		monkweapon : true,
		abilitytodamage : true
	};
};

// Add 2 subclasses for the Paladin
AddSubClass("paladin", "oath of conquest-xgte", {
	regExpSearch : /^((?=.*(knight tyrant|iron mongers))|((?=.*(conquest|tyranny|tyrant))(((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper))))))).*$/i,
	subname : "Oath of Conquest",
	source : ["X", 37],
	spellcastingExtra : ["armor of agathys", "command", "hold person", "spiritual weapon", "bestow curse", "fear", "dominate beast", "stoneskin", "cloudkill", "dominate person"],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Conquering Presence",
			source : ["X", 38],
			minlevel : 3,
			description : desc([
				"As an action, all creatures of my choice within a 30-ft radius must make a Wisdom save",
				"If failed, a target is frightened for 1 minute; It can save again at the end of each turn"
			]),
			action : ["action", ""]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Guided Strike",
			source : ["X", 38],
			minlevel : 3,
			description : "\n   " + "When I make an attack roll, I can add a +10 bonus to the roll after seeing the d20 roll"
		},
		"subclassfeature7" : {
			name : "Aura of Conquest",
			source : ["X", 38],
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
			source : ["X", 38],
			minlevel : 15,
			description : desc([
				"Whenever I'm hit with an attack while I'm not incapacitated, the attacker takes damage",
				"This is psychic damage equal to my Charisma modifier (minimum of 1)"
			])
		},
		"subclassfeature20" : {
			name : "Invincible Conqueror",
			source : ["X", 38],
			minlevel : 20,
			description : desc([
				"As an action, I can gain the following benefits for 1 minute:",
				" - I have resistance to all damage",
				" - I can make an additional attack as part of my Attack action",
				" - My melee weapons score critical hits on a roll of 19 or 20"
			]),
			recovery : "long rest",
			usages : 1,
			action : ["action", ""]
		}
	}
});
AddSubClass("paladin", "oath of redemption-xgte", {
	regExpSearch : /^((?=.*redeemer)|((?=.*redemption)(((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper))))))).*$/i,
	subname : "Oath of Redemption",
	source : ["X", 38],
	spellcastingExtra : ["sanctuary", "sleep", "calm emotions", "hold person", "counterspell", "hypnotic pattern", "otiluke's resilient sphere", "stoneskin", "hold monster", "wall of force"],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Emissary of Peace",
			source : ["X", 39],
			minlevel : 3,
			description : "\n   " + "As a bonus action, I grant myself +5 on Charisma (Persuasion) checks for 10 minutes",
			action : ["bonus action", ""]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Rebuke the Violent",
			source : ["X", 39],
			minlevel : 3,
			description : desc([
				"As a reaction after a creature within 30 ft attacks and damages another, I can rebuke it",
				"It takes the same damage as it dealt but as radiant damage, with a Wis save to halve it"
			]),
			action : ["reaction", ""]
		},
		"subclassfeature7" : {
			name : "Aura of the Guardian",
			source : ["X", 39],
			minlevel : 7,
			description : desc([
				"As a reaction when an ally within my aura takes damage, I instead take the damage",
				"This damage can't be reduced in any way; Other effects might still apply to my ally"
			]),
			additional : levels.map(function (n) { return n < 7 ? "" : (n < 18 ? 10 : 30) + "-foot aura"; }),
			action : ["reaction", ""]
		},
		"subclassfeature15" : {
			name : "Protective Spirit",
			source : ["X", 39],
			minlevel : 15,
			description : "\n   " + "At the end of my turn when I'm below half HP and not incapacitated, I regain HP",
			additional : levels.map(function (n) { return n < 15 ? "" : "1d6+" + Math.floor(n/2) + " HP"; })
		},
		"subclassfeature20" : {
			name : "Emissary of Redemption",
			source : ["X", 39],
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
AddSubClass("ranger", "gloom stalker-xgte", {
	regExpSearch : /^(?=.*gloom)(?=.*stalker).*$/i,
	subname : "Gloom Stalker",
	source : ["X", 41],
	fullname : "Gloom Stalker",
	features : {
		"subclassfeature3" : {
			name : "Dread Ambusher",
			source : ["X", 42],
			minlevel : 3,
			description : desc([
				"In the first turn of combat I get +10 ft speed and an extra attack with the Attack action",
				"If I take the Attack action and that extra attack hits, it does +1d8 damage"
			])
		},
		"subclassfeature3.1" : {
			name : "Gloom Stalker Magic",
			source : ["X", 42],
			minlevel : 3,
			description : desc([
				"I add a spell to my known spells at level 3, 5, 9, 13, and 15",
				"These count as ranger spells, but do not count against the number of spells I can know"
			]),
			spellcastingExtra : ["disguise self", "rope trick", "fear", "greater invisibility", "seeming"].concat(new Array(95)).concat("AddToKnown")
		},
		"subclassfeature3.2" : {
			name : "Umbral Sight",
			source : ["X", 42],
			minlevel : 3,
			description : desc([
				"I gain 60 ft darkvision, or add 30 ft to darkvision if I already had it because of my race",
				"When I'm hiding or trying to hide, others gain no benefit from darkvision to detect me"
			]),
			vision : [["Darkvision", "fixed 60"], ["Darkvision", "+30"]]
		},
		"subclassfeature7" : {
			name : "Iron Mind",
			source : ["X", 42],
			minlevel : 7,
			description : "\n   " + "I gain proficiency with Wis saves, or if I'm already proficient, either Int or Cha saves",
			saves : ["Wis"]
		},
		"subclassfeature11" : {
			name : "Stalker's Flurry",
			source : ["X", 42],
			minlevel : 11,
			description : "\n   " + "Once on each of my turns when I miss a weapon attack, I can make an extra attack"
		},
		"subclassfeature15" : {
			name : "Shadowy Dodge",
			source : ["X", 42],
			minlevel : 15,
			description : "\n   " + "As a reaction when I'm attacked without adv., I can impose disadv. on the attack roll",
			action : ["reaction", " (when attacked)"]
		}
	}
});
AddSubClass("ranger", "horizon walker-xgte", {
	regExpSearch : /^(?=.*horizon)(?=.*(walker|conclave)).*$/i,
	subname : "Horizon Walker",
	source : ["X", 42],
	fullname : "Horizon Walker",
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	features : {
		"subclassfeature3" : {
			name : "Detect Portal",
			source : ["X", 42],
			minlevel : 3,
			description : "\n   " + "As an action, I sense the distance and direction to the closest planar portal within 1 mile",
			usages : 1,
			recovery : "short rest",
			action : ["action", ""]
		},
		"subclassfeature3.1" : {
			name : "Horizon Walker magic",
			source : ["X", 42],
			minlevel : 3,
			description : desc([
				"I add a spell to my known spells at level 3, 5, 9, 13, and 15",
				"These count as ranger spells, but do not count against the number of spells I can know"
			]),
			spellcastingExtra : ["protection from evil and good", "misty step", "haste", "banishment", "teleportation circle"].concat(new Array(95)).concat("AddToKnown")
		},
		"subclassfeature3.2" : {
			name : "Planar Warrior",
			source : ["X", 42],
			minlevel : 3,
			description : desc([
				"As a bonus action, I choose one creature that I can see within 30 ft of me",
				"All damage from my first weapon attack that hits it on this turn becomes force damage",
				"In addition, that first hit does extra damage"
			]),
			additional : levels.map(function (n) { return n < 3 ? "" : "+" + (n < 11 ? 1 : 2) + "d8 force damage"; }),
			action : ["bonus action", ""]
		},
		"subclassfeature7" : {
			name : "Ethereal Step",
			source : ["X", 43],
			minlevel : 7,
			description : "\n   " + "As a bonus action, I can cast the Etherealness spell, which lasts until the end of my turn",
			usages : 1,
			recovery : "short rest",
			action : ["bonus action", ""],
			spellcastingBonus : {
				name : "Ethereal Step",
				spells : ["etherealness"],
				selection : ["etherealness"],
				oncesr : true
			}
		},
		"subclassfeature11" : {
			name : "Distant Strike",
			source : ["X", 43],
			minlevel : 11,
			description : desc([
				"With the Attack action, I can teleport 10 ft before each attack, to a place I can see",
				"If I attack two different creatures with this action, I get an extra attack against a third"
			])
		},
		"subclassfeature15" : {
			name : "Spectral Defense",
			source : ["X", 43],
			minlevel : 15,
			description : "\n   " + "As a reaction when an attack damages me, I can give myself resistance vs. that attack",
			action : ["reaction", ""]
		}
	}
});
AddSubClass("ranger", "monster slayer-xgte", {
	regExpSearch : /^(?=.*monster)(?=.*slayer).*$/i,
	subname : "Monster Slayer",
	source : ["X", 43],
	fullname : "Monster Slayer",
	features : {
		"subclassfeature3" : {
			name : "Hunter's Sense",
			source : ["X", 43],
			minlevel : 3,
			description : desc([
				"As an action, I learn vulnerabilities/immunities/resistances of a target I see within 60 ft",
				"If it is protected from divination magic, I sense it has none of these"
			]),
			action : ["action", ""],
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, tDoc.getField('Wis Mod').value);",
			recovery : "long rest"
		},
		"subclassfeature3.1" : {
			name : "Monster Slayer Magic",
			source : ["X", 43],
			minlevel : 3,
			description : "\n   " + "I get bonus spells known, which do not count against the number of spells I can know",
			spellcastingExtra : ["protection from evil and good", "zone of truth", "magic circle", "banishment", "hold monster"].concat(new Array(95)).concat("AddToKnown")
		},
		"subclassfeature3.2" : {
			name : "Slayer's Prey",
			source : ["X", 43],
			minlevel : 3,
			description : desc([
				"As a bonus action, I designate a creature I see within 60 ft; This lasts until I do this again",
				"My first hit to the target with a weapon attack on each of my turns does +1d6 damage"
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature7" : {
			name : "Supernatural Defense",
			source : ["X", 43],
			minlevel : 7,
			description : desc([
				"I add 1d6 to saving throws the current target of my Slayer's Prey forces me to make",
				"In addition, I also add 1d6 to checks to escape that target's grapple"
			])
		},
		"subclassfeature11" : {
			name : "Magic-User's Nemesis",
			source : ["X", 43],
			minlevel : 11,
			description : desc([
				"As a reaction when I see someone within 60 ft casting a spell or teleporting, I can foil it",
				"The target must make a Wisdom save or have its spell or teleport fail and be wasted"
			]),
			action : ["reaction", ""],
			usages : 1,
			recovery : "short rest"
		},
		"subclassfeature15" : {
			name : "Slayer's Counter",
			source : ["X", 43],
			minlevel : 15,
			description : desc([
				"As a reaction when the target of my Slayer's Prey has me make a save, I can attack it",
				"I can make one weapon attack; If this hits, I automatically succeed on the saving throw"
			]),
			action : ["reaction", ""]
		}
	}
});

// Add 4 subclasses for the Rogue
AddSubClass("rogue", "inquisitive-xgte", {
	regExpSearch : /^(?=.*(rogue|miscreant))(?=.*inquisitive).*$/i,
	subname : "Inquisitive",
	source : ["X", 45],
	features : {
		"subclassfeature3" : {
			name : "Ear for Deceit",
			source : ["X", 45],
			minlevel : 3,
			description : "\n   " + "For Wis (Insight) to sense if another is lying, I can treat a die roll of 7 or lower as an 8"
		},
		"subclassfeature3.1" : {
			name : "Eye for Detail",
			source : ["X", 46],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can do either of the following:",
				"\u2022 Make a Wisdom (Perception) check to spot a hidden creature or object",
				"\u2022 Make an Intelligence (Investigation) check to uncover or decipher clues"
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature3.2" : {
			name : "Insightful Fighting",
			source : ["X", 46],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can decipher the tactics of another I can see that's not incapacitated",
				"I have to make a Wisdom (Insight) check vs. the target's Charisma (Deception) check",
				"If I succeed, I can use my sneak attack on it even if I don't have adv. (but not if disadv.)",
				"This benefit lasts for 1 minute or until I successfully use Insightful Fighting again"
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature9" : {
			name : "Steady Eye",
			source : ["X", 46],
			minlevel : 9,
			usages : 1,
			recovery : "long rest",
			description : desc([
				"I'm more perceptive when I don't move more than half my speed in the same turn",
				"If so, I gain adv. on Wis (Perception) and Int (Investigation) checks during that turn"
			])
		},
		"subclassfeature13" : {
			name : "Unerring Eye",
			source : ["X", 46],
			minlevel : 13,
			description : desc([
				"As an action, I can sense magical deceptions within 30 feet of me, but not what it does",
				"I learn the presence of illusions, shapechanged creatures, or magic designed to deceive"
			]),
			action : ["action", ""],
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, tDoc.getField('Wis Mod').value);",
			recovery : "long rest"
		},
		"subclassfeature17" : {
			name : "Eye for Weakness",
			source : ["X", 46],
			minlevel : 17,
			description : "\n   " + "While my Insightful Fighting is active, I add 3d6 to sneak attacks against that target"
		}
	}
});
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
				action : ["bonus action", ""]
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
				action : ["reaction", ""]
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
};
AddSubClass("rogue", "scout-xgte", {
	regExpSearch : /scout/i,
	subname : "Scout",
	source : ["X", 47],
	features : {
		"subclassfeature3" : {
			name : "Skirmisher",
			source : ["X", 47],
			minlevel : 3,
			description : "\n   " + "As a reaction when a hostile ends its turn within 5 ft of me, I can move half my speed",
			action : ["reaction", ""]
		},
		"subclassfeature3.1" : {
			name : "Survivalist",
			source : ["X", 47],
			minlevel : 3,
			description : "\n   " + "I gain proficiency and expertise with the Nature and Survival skills",
			skillstxt : "\n\n" + toUni("Scout") + ": proficiency and expertise with Nature and Survival.",
			eval : "AddSkillProf('Nature', true, true); AddSkillProf('Survival', true, true);",
			removeeval : "AddSkillProf('Nature', false, true); AddSkillProf('Survival', false, true);"
		},
		"subclassfeature9" : {
			name : "Superior Mobility",
			source : ["X", 47],
			minlevel : 9,
			description : "\n   " + "I gain +10 ft to my walking speed (and swimming/climbing speed, if applicable)",
			speed : {
				walk : { spd : "+10", enc : "+10" },
				climb : { spd : "_10", enc : "_10" },
				swim : { spd : "_10", enc : "_10" }
			}
		},
		"subclassfeature13" : {
			name : "Ambush Master",
			source : ["X", 47],
			minlevel : 13,
			description : desc([
				"I gain advantage on Initiative rolls",
				"The first creature I hit in the first round of combat becomes an easy target",
				"Until the start of my next turn, all attacks against the target have advantage"
			]),
			eval : "Checkbox('Init Adv', true, 'Advantage to Initiative checks was gained from Scout (Ambush Master)');",
			removeeval : "Checkbox('Init Adv', false, '');"
		},
		"subclassfeature17" : {
			name : "Sudden Strike",
			source : ["X", 47],
			minlevel : 17,
			description : desc([
				"With the Attack action, I can make one additional attack as a bonus action",
				"This attack can benefit from my Sneak Attack even if I already used it this turn",
				"However, I still can't use Sneak Attack on a single target more than once per turn"
			]),
			action : ["bonus action", " (with Attack action)"]
		}
	}
});
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
				addMod : { type : "skill", field : "Init", mod : "Cha", text : "I can add my Charisma modifier to initiative rolls." }
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
				action : ["action", ""]
			},
			"subclassfeature13" : {
				name : "Elegant Maneuver",
				source : [["S", 136], ["X", 47]],
				minlevel : 13,
				description : "\n   " + "As a bonus action, I can gain adv. on my next Dex (Acrobatics) or Str (Athletics) check",
				action : ["bonus action", ""]
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
};

// Add 3 subclasses for the Sorcerer
AddSubClass("sorcerer", "divine soul-xgte", { // this code includes contributions by SoilentBrad
	regExpSearch : /^(?=.*divine)(?=.*soul).*$/i,
	subname : "Divine Soul",
	source : ["X", 50],
	fullname : "Divine Soul",
	spellcastingList : {
		"class" : ["cleric", "sorcerer"]
	},
	features : {
		"subclassfeature1" : {
			name : "Divine Magic",
			source : ["X", 50],
			minlevel : 1,
			description : desc([
				"When I select my 1st level or higher spells, I can also pick spells from the cleric spell list",
				"These cleric spells count as sorcerer spells for me",
				"I also learn a spell based on my affinity, use the \"Choose Feature\" button above for this"
			]),
			choices : ["Good", "Evil", "Law", "Chaos", "Neutrality"],
			"good" : {
				name : "Divine Magic: Good",
				description : desc([
					"When I select my 1st level or higher spells, I can also pick spells from the cleric spell list",
					"I also learn Cure Wounds, which doesn't count against my number of spells known",
					"These count as sorcerer spells for me; I can only replace the bonus spell with a cleric spell"
				]),
				spellcastingBonus : {
					name : "Divine Magic (Good)",
					spells : ["cure wounds"],
					selection : ["cure wounds"]
				},
				eval : "if (classes.known.sorcerer && classes.known.sorcerer.level >= 14 && !(/.*?sorcerer,subclassfeature14,eagle.*/i).test(What('Class Features Remember'))) { ClassFeatureOptions(['sorcerer', 'subclassfeature14', 'eagle']); };"
			},
			"evil" : {
				name : "Divine Magic: Evil",
				description : desc([
					"When I select my 1st level or higher spells, I can also pick spells from the cleric spell list",
					"I also learn Inflict Wounds, which doesn't count against my number of spells known",
					"These count as sorcerer spells for me; I can only replace the bonus spell with a cleric spell"
				]),
				spellcastingBonus : {
					name : "Divine Magic (Evil)",
					spells : ["inflict wounds"],
					selection : ["inflict wounds"]
				},
				eval : "if (classes.known.sorcerer && classes.known.sorcerer.level >= 14 && !(/.*?sorcerer,subclassfeature14,bat.*/i).test(What('Class Features Remember'))) { ClassFeatureOptions(['sorcerer', 'subclassfeature14', 'bat']); };"
			},
			"law" : {
				name : "Divine Magic: Law",
				description : desc([
					"When I select my 1st level or higher spells, I can also pick spells from the cleric spell list",
					"I also learn Bless, which doesn't count against my number of spells known",
					"These count as sorcerer spells for me; I can only replace the bonus spell with a cleric spell"
				]),
				spellcastingBonus : {
					name : "Divine Magic (Law)",
					spells : ["bless"],
					selection : ["bless"]
				},
				eval : "if (classes.known.sorcerer && classes.known.sorcerer.level >= 14 && !(/.*?sorcerer,subclassfeature14,eagle.*/i).test(What('Class Features Remember'))) { ClassFeatureOptions(['sorcerer', 'subclassfeature14', 'eagle']); };"
			},
			"chaos" : {
				name : "Divine Magic: Chaos",
				description : desc([
					"When I select my 1st level or higher spells, I can also pick spells from the cleric spell list",
					"I also learn Bane, which doesn't count against my number of spells known",
					"These count as sorcerer spells for me; I can only replace the bonus spell with a cleric spell"
				]),
				spellcastingBonus : {
					name : "Divine Magic (Chaos)",
					spells : ["bane"],
					selection : ["bane"]
				},
				eval : "if (classes.known.sorcerer && classes.known.sorcerer.level >= 14 && !(/.*?sorcerer,subclassfeature14,bat.*/i).test(What('Class Features Remember'))) { ClassFeatureOptions(['sorcerer', 'subclassfeature14', 'bat']); };"
			},
			"neutrality" : {
				name : "Divine Magic: Neutrality",
				description : desc([
					"When I select my 1st level or higher spells, I can also pick spells from the cleric spell list",
					"I also learn Protection from Evil and Good; It isn't count to my number of spells known",
					"These count as sorcerer spells for me; I can only replace the bonus spell with a cleric spell"
				]),
				spellcastingBonus : {
					name : "Divine Magic (Neutrality)",
					spells : ["protection from evil and good"],
					selection : ["protection from evil and good"]
				},
				eval : "if (classes.known.sorcerer && classes.known.sorcerer.level >= 14) { ClassFeatureOptions(['sorcerer','subclassfeature14','dragonfly']); };"
			}
		},
		"subclassfeature1.2" : {
			name : "Favored by the Gods",
			source : ["X", 50],
			minlevel : 1,
			description : "\n   " + "If I fail a saving throw or miss with an attack roll, I can add 2d4 to the total",
			recovery : "short rest",
			usages : 1
		},
		"subclassfeature6" : {
			name : "Empowered Healing",
			source : ["X", 50],
			minlevel : 6,
			description : desc([
				"Once per turn, when I or an ally in 5 ft roll dice to healing with a spell, I can reroll dice",
				"By spending 1 sorcery point; I can reroll any number of those dice for that spell once"
			]),
			additional : "1 sorcery point"
		},
		"subclassfeature14" : {
			name : "Otherworldy Wings",
			source : ["X", 50],
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
			action : ["bonus action", ""],
			speed : { fly : { spd : 30, enc : 20 } },
			eval : "if(FeaChoice===''){var CFrem=What('Class Features Remember');var tReg=/.*?sorcerer,subclassfeature1,(good|evil|law|chaos|neutrality).*/i;if((tReg).test(CFrem)){var CFchoice=CFrem.replace(tReg,'$1');FeaChoice=(/good|law/).test(CFchoice)?'eagle':(/evil|chaos/).test(CFchoice)?'bat':'dragonfly';AddString('Class Features Remember','sorcerer,subclassfeature14,'+FeaChoice,false);};};"
		},
		"subclassfeature18" : {
			name : "Unearthly Recovery",
			source : ["X", 50],
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
AddSubClass("sorcerer", "shadow magic-xgte", {
	regExpSearch : /^(?=.*(sorcerer|witch))(?=.*shadow).*$/i,
	subname : "Shadow Magic",
	source : ["X", 50],
	fullname : "Shadow Sorcerer",
	features : {
		"subclassfeature1" : {
			name : "Eyes of the Dark",
			source : ["X", 51],
			minlevel : 1,
			description : "\n   " + "I gain 120 ft darkvision",
			vision : [["Darkvision", 120]]
		},
		"subclassfeature1.1" : {
			name : "Strength of the Grave",
			source : ["X", 51],
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
			source : ["X", 51],
			minlevel : 1,
			description : desc([
				"I learn Darkness, which doesn't count against my number of spells known",
				"I can also cast it by spending 2 sorcery points and then I can see through it normally"
			]),
			additional : "2 sorcery points",
			action : ["action", " (2 sorcery points)"],
			spellcastingBonus : {
				name : "Eyes of the Dark",
				spells : ["darkness"],
				selection : ["darkness"]
			}
		},
		"subclassfeature6" : {
			name : "Hound of Ill Omen",
			source : ["X", 51],
			minlevel : 6,
			description : desc([
				"As a bonus action, I summon a hound within 30 ft of a creature I see within 120 ft",
				"The hound has all the stats of a dire wolf with the following exceptions:",
				"\u2022 It is medium size and counts as a monstrosity not a beast",
				"\u2022 It start with a number of temporary hit points equal to half my sorcerer level",
				"\u2022 At the start of its turn, it automatically knows where the (hidden) target is",
				"\u2022 It can only move towards and make (opportunity) attack against the target",
				"\u2022 It can move through other creatures and objects as if they were difficult terrain",
				"\u2022 It takes 5 force damage if it ends its turn inside an object",
				"The target has disadvantage on saves vs. my spells while the hound is within 5 ft of it",
				"It disappears if reduced to 0 HP, if the target is reduced to 0 HP, or after 5 minutes"
			]),
			additional : levels.map(function (n) { return n < 6 ? "" : "3 sorcery points; " + Math.floor(n/2) + " temporary HP"; }),
			action : ["bonus action", " (3 sorcery points)"]
		},
		"subclassfeature14" : {
			name : "Shadow Walk",
			source : ["X", 51],
			minlevel : 14,
			description : desc([
				"As a bonus action when I'm in dim light or darkness, I can teleport up to 120 ft",
				"The destination has to be unoccupied, within line of sight, and in dim light or darkness"
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature18" : {
			name : "Umbral Form",
			source : ["X", 51],
			minlevel : 18,
			additional : "6 sorcery points",
			description : desc([
				"As a bonus action, I transform into a shadow form for 1 minute",
				"While transformed, I have resistance to all damage except force and radiant damage",
				"Also, I can move through other creatures and objects as if they were difficult terrain",
				"I take 5 force damage if I end my turn inside an object",
				"This ends early if I end it as a bonus action, I die, or I'm incapacitated"
			]),
			action : ["bonus action", " (6 sorcery points)"]
		}
	}
});
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
					"As a bonus action, after casting a 1st-level or higher spell, I can control elemental air",
					"I can use this control to fly up to 10 feet without provoking opportunity attacks"
				]),
				action : ["bonus action", " (after casting)"]
			},
			"subclassfeature6" : {
				name : "Heart of the Storm",
				source : [["S", 137], ["X", 52]],
				minlevel : 6,
				description : desc([
					"I have resistance to lightning and thunder damage",
					"When I start casting a 1st-level or higher spell that deals lightning or thunder damage,",
					"I deal lightning or thunder damage to a creature within 10 ft of me that I can see"
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
				action : ["bonus action", ""]
			},
			"subclassfeature14" : {
				name : "Storm's Fury",
				source : [["S", 137], ["X", 52]],
				minlevel : 14,
				description : desc([
					"As a reaction when hit by a melee attack, I can deal lightning damage to the attacker",
					"The attacker must also make a Strength save or be pushed up to 20 ft away from me"
				]),
				action : ["reaction", ""],
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
				action : ["action", ""],
				savetxt : { immune : ["lightning", "thunder"] },
				speed : { fly : { spd : "fixed 60", enc : "fixed 60" } },
				usages : 1,
				recovery : "short rest"
			}
		}
	});
};

// Add 2 subclasses for the Warlock
AddSubClass("warlock", "the celestal-xgte", {
	regExpSearch : /^(?=.*warlock)(?=.*celestial).*$/i,
	subname : "the Celestial",
	source : ["X", 54],
	spellcastingExtra : ["cure wounds", "guiding bolt", "flaming sphere", "lesser restoration", "daylight", "revivify", "guardian of faith", "wall of fire", "flame strike", "greater restoration"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Cantrips",
			source : ["X", 54],
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
			source : ["X", 54],
			minlevel : 1,
			description : desc([
				"As a bonus action, I can heal a creature I can see within 60 ft by expending dice",
				"I can expend up to my Charisma modifier (min 1) of dice from my pool at a time",
				"The target heals HP equal to the roll of the dice; I regain all expended dice on a long rest"
			]),
			usages : levels.map(function (n) { return (n + 1) + "d6 per "; }),
			usagescalc : "event.value = !classes.known.warlock ? '' : (1 + classes.known.warlock.level) + 'd6';",
			recovery : "long rest",
			action : ["bonus action", ""]
		},
		"subclassfeature6" : {
			name : "Radiant Soul",
			source : ["X", 55],
			minlevel : 6,
			description : desc([
				"I add my Cha modifier once to the fire or radiant damage of cantrips and spells I cast",
				"This bonus only applies to one damage roll; Also, I have resistance to radiant damage"
			]),
			dmgres : ["Radiant"],
			calcChanges : {
				atkCalc : ["if (isSpell && (/fire|radiant/i).test(fields.Damage_Type)) { output.extraDmg += What('Cha Mod'); }; ", "Cantrips and spells that deal fire or radiant damage get my Charisma modifier added to the damage once."]
			}
		},
		"subclassfeature10" : {
			name : "Celestial Resilience",
			source : ["X", 55],
			minlevel : 10,
			description : desc([
				"When I finish a short or long rest, I and up to five allies gain temporary hit points",
				"I get my warlock level + Cha mod, while my allies get half my warlock level + Cha mod"
			]),
			additional : levels.map(function (n) { return n < 10 ? "" : "Me: " + n + "+Cha mod; Allies: " + Math.floor(n / 2) + "+Cha mod"; })
		},
		"subclassfeature14" : {
			name : "Searing Vengeance",
			source : ["X", 55],
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
AddSubClass("warlock", "the hexblade-xgte", { // this code includes contributions by SoilentBrad
	regExpSearch : /^(?=.*hexblade)(?=.*warlock).*$/i,
	subname : "the Hexblade",
	source : ["X", 55],
	spellcastingExtra : ["shield", "wrathful smite", "blur", "branding smite", "blink", "elemental weapon", "phantasmal killer", "staggering smite", "banishing smite", "cone of cold"],
	features : {
		"subclassfeature1" : {
			name : "Hexblade's Curse",
			source : ["X", 55],
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
			action : ["bonus action", ""],
			calcChanges : {
				atkAdd : ["if (!isDC && (/curse/i).test(WeaponText) && !CritChance) {var CritChance = 19; fields.Description += (fields.Description ? '; ' : '') + 'Crit on 19-20'; }; ", "If I include the word 'Curse' in the name of a weapon, the automation will treat the attack as being against a target of the Hexblade's Curse: adding my proficiency bonus to the damage and adding the increased chance of a critical hit to the description."],
				atkCalc : ["if ((/curse/i).test(WeaponText)) {output.extraDmg += output.prof; }; ", ""]
			}
		},
		"subclassfeature1.1" : {
			name : "Hex Warrior",
			source : ["X", 55],
			minlevel : 1,
			description : desc([
				"I gain proficiency with medium armor, shields, and martial weapons",
				"When I finish a long rest, I can imbue one weapon I touch with my will",
				"Until my next long rest, I can use it with Charisma instead of Strength or Dexterity",
				"I have to be proficient with the weapon and that is can't have the two-handed property",
				"This benefit also works with every weapon from Pact of the Blade, with no restriction"
			]),
			armor : [false, true, false, true],
			weapons : [false, true],
			calcChanges : {
				atkAdd : ["if ((/\\bpact\\b/i).test(inputText) || ((/hexblade/i).test(inputText) && !(/\\b(2|two).?hand(ed)?s?\\b/i).test(WeaponText))) { fields.Mod = What('Cha Mod') > What(AbilityScores.abbreviations[fields.Mod - 1] + ' Mod') ? 6 : fields.Mod; }; ", "If I include either the word 'Hexblade' or 'Pact' in a weapon's name, it gets treated as my the weapon I imbued to use Charisma instead of Strength or Dexterity, if my Charisma modifier is higher than it would otherwise use. For a 'Pact' weapon, this will with any type. For 'Hexblade', this will only work if the weapon doesn't have the two-handed property."]
			}
		},
		"subclassfeature6" : {
			name : "Accursed Specter",
			source : ["X", 56],
			minlevel : 6,
			description : desc([
				"When I slay a humanoid, I can curse its soul and have it rise as a specter from its corpse",
				"It has the stats of a specter (MM 279) with temporary HP equal to half my warlock level",
				"It rolls initiative and has its own turns, obeying my verbal commands",
				"It gains a bonus to attack rolls equal to my Charisma modifier (min +0)",
				"The specter remains until the end of my next long rest, at which point it vanishes"
			]),
			additional : levels.map( function(n) { return n < 6 ? "" : Math.floor(n/2) + " temp HP"; }),
			usages : 1,
			recovery : "long rest"
		},
		"subclassfeature10" : {
			name : "Armor of Hexes",
			source : ["X", 56],
			minlevel : 10,
			description : desc([
				"As a reaction when a Hexblade's Curse recipient hits me with an attack, I can roll a d6",
				"On a result of 4 or higher, the attacks misses me instead, regardless of its d20 roll"
			])
		},
		"subclassfeature14" : {
			name : "Master of Hexes",
			source : ["X", 56],
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
	prereqeval : "What('Class Features Remember').indexOf('warlock,pact boon,pact of the tome') !== -1",
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
	prereqeval : "classes.known.warlock.level >= 5",
	recovery : "short rest",
	usages : 1,
	action : ["bonus action", " (start/stop)"]
});
AddWarlockInvocation("Eldritch Smite (prereq: level 5 warlock, Pact of the Blade)", {
	name : "Eldritch Smite",
	description : desc([
		"Once per turn when I hit a creature with my pact weapon, I can empower the strike",
		"By expending a warlock spell slot, the creature takes extra damage and is knocked prone",
		"It takes 1d8 force damage and another 1d8 force damage per level of the spell slot",
		"The target is only knocked prone if it is Huge or smaller"
	]),
	source : ["X", 56],
	prereqeval : "classes.known.warlock.level >= 5 && What('Class Features Remember').indexOf('warlock,pact boon,pact of the blade') !== -1"
});
AddWarlockInvocation("Ghostly Gaze (prereq: level 7 warlock)", {
	name : "Ghostly Gaze",
	description : desc([
		"As an action, I can gain darkvision, and the ability to see through solid objects, out to 30 ft",
		"Objects appear ghostly to me; This lasts up to 1 minute, while I'm concentrating on this"
	]),
	source : ["X", 56],
	prereqeval : "classes.known.warlock.level >= 7",
	recovery : "short rest",
	usages : 1,
	action : ["action", ""]
});
AddWarlockInvocation("Gift of the Depths (prereq: level 5 warlock)", {
	name : "Gift of the Depths",
	description : desc([
		"I can breathe underwater and I have a swim speed equal to my walking speed",
		"Once per long rest, I can cast Water Breathing without using a spell slot (PHB 287)"
	]),
	source : [["X", 57], ["UA:RCO", 6]],
	spellcastingBonus : {
		name : "Gift of the Depths",
		spells : ["water breathing"],
		selection : ["water breathing"],
		oncelr : true
	},
	prereqeval : "classes.known.warlock.level >= 5",
	speed : { swim : { spd : "walk", enc : "walk" } }
});
AddWarlockInvocation("Gift of the Ever-Living Ones (prereq: Pact of the Chain)", {
	name : "Gift of the Ever-Living Ones",
	description : "\n   " + "When I regain HP while my familiar is within 100 ft, I regain the max the dice can roll",
	source : [["X", 57], ["UA:RCO", 6]],
	prereqeval : "What('Class Features Remember').indexOf('warlock,pact boon,pact of the chain') !== -1"
});
AddWarlockInvocation("Grasp of Hadar (prereq: Eldritch Blast cantrip)", {
	name : "Grasp of Hadar",
	description : "\n   " + "When my Eldritch Blast hits a creature once or more, I can move it 10 ft closer to me",
	source : [["X", 57], ["UA:RCO", 6]],
	prereqeval : "hasEldritchBlast",
	calcChanges : {
		atkAdd : ["if (theWea && (/eldritch blast/i).test(theWea.name)) {fields.Description += '; Target moved 10 ft to me'; }; ", "When I hit a creature with my Eldritch Blast cantrip once or more times in a turn, I can move it in a straight line 10 ft closer to me."]
	}
});
AddWarlockInvocation("Improved Pact Weapon (prereq: Pact of the Blade)", {
	name : "Improved Pact Weapon",
	description : desc([
		"I can use any pact weapon I create as my spellcasting focus for warlock spells",
		"Any pact weapon I create has a +1 magic weapon, if it isn't already a magic weapon",
		"I can now also conjure a shortbow, longbow, or light or heavy crossbow as my pact weapon"
	]),
	source : ["X", 57],
	prereqeval : "What('Class Features Remember').indexOf('warlock,pact boon,pact of the blade') !== -1",
	calcChanges : {
		atkCalc : ["if (!thisWeapon[1] && (/\\bpact\\b/i).test(inputText)) { var pactMag = pactMag !== undefined ? 1 - pactMag : 1; output.magic += pactMag; }; if ((/^(shortbow|longbow|light crossbow|heavy crossbow)$/).test(WeaponName) && (/\\bpact\\b/i).test(inputText)) {fields.Proficiency = true; fields.Description += thisWeapon[1] ? '' : (fields.Description ? '; ' : '') + 'Counts as magical'; }; ", "If I include the word 'Pact' in a the name of a melee weapon, shortbow, longbow, light crossbow, or heavy crossbow, it will be treated as my Pact Weapon. If it doesn't already include a magical bonus in its name, the calculation will add +1 to its To Hit and Damage."]
	}
});
AddWarlockInvocation("Lance of Lethargy (prereq: Eldritch Blast cantrip)", {
	name : "Lance of Lethargy",
	description : desc([
		"Once per turn when my Eldritch Blast hits a creature, I can reduce its speed by 10 ft",
		"This speed reduction lasts until the end of my next turn"
	]),
	source : ["X", 57],
	prereqeval : "hasEldritchBlast",
	calcChanges : {
		atkAdd : ["if (theWea && (/eldritch blast/i).test(theWea.name)) {fields.Description += '; 1 target -10 ft speed'; }; ", "Once on each of my turns when I hit a creature with my Eldritch Blast cantrip, I can reduce its speed by 10 ft until the end of my next turn."]
	}
});
AddWarlockInvocation("Maddening Hex (prereq: level 5 warlock, Hex spell or warlock feature that curses)", {
	name : "Maddening Hex",
	description : desc([
		"As a bonus action, I cause pain around a target affected by a hex of mine (spell/feature)",
		"The target and any of my choice within 5 ft of it take my Cha mod in psychic damage"
	]),
	source : ["X", 57],
	prereqeval : "classes.known.warlock.level >= 5 && ()",
	action : ["bonus action", ""]
});
AddWarlockInvocation("Relentless Hex (prereq: level 7 warlock)", {
	name : "Relentless Hex",
	description : desc([
		"As a bonus action, I can teleport next to a target affected by a hex of mine (spell/feature)",
		"To do so, I must see the target and the space I'm teleporting to, and be within 30 ft of it"
	]),
	source : ["X", 57],
	prereqeval : "classes.known.warlock.level >= 7",
	action : ["bonus action", ""]
});
AddWarlockInvocation("Shroud of Shadow (prereq: level 15 warlock)", {
	name : "Shroud of Shadow",
	description : "\n   " + "I can cast Invisibility at will, without using spell slots (PHB 254)",
	source : [["X", 57], ["UA:RCO", 6]],
	spellcastingBonus : {
		name : "Shroud of Shadow",
		spells : ["invisibility"],
		selection : ["invisibility"],
		atwill : true
	},
	prereqeval : "classes.known.warlock.level >= 15"
});
AddWarlockInvocation("Tomb of Levistus (prereq: level 5 warlock)", {
	name : "Tomb of Levistus",
	description : desc([
		"As a reaction when I take damage, I can entomb myself in ice until the end of my turn",
		"I get 10 temp. HP per warlock level, which can be used to absorb the triggering damage",
		"Until the ice is gone, I have vulnerability to fire damage, 0 speed, and am incapacitated"
	]),
	source : [["X", 57], ["UA:RCO", 6]],
	prereqeval : "classes.known.warlock.level >= 5",
	recovery : "short rest",
	usages : 1,
	action : ["reaction", ""],
	additional : levels.map( function(n) { return (n * 10) + " temporary HP"; })
});
AddWarlockInvocation("Trickster's Escape (prereq: level 7 warlock)", {
	name : "Trickster's Escape",
	description : "\n   " + "Once per long rest, I can cast Freedom of Movement on myself without using a spell slot",
	source : [["X", 57], ["UA:RCO", 7]],
	spellcastingBonus : {
		name : "Trickster's Escape",
		spells : ["freedom of movement"],
		selection : ["freedom of movement"],
		oncelr : true
	},
	prereqeval : "classes.known.warlock.level >= 7"
});

// Add 1 subclass for the Wizard
AddSubClass("wizard", "war magic-xgte", {
	regExpSearch : /^(?=.*war)(?=.*(wizard|magic|mage)).*$/i,
	subname : "War Magic",
	source : ["X", 59],
	fullname : "War Mage",
	features : {
		"subclassfeature2" : { //has to be identical to a feature named in the ClassList
			name : "Arcane Deflection",
			source : ["X", 59],
			minlevel : 2,
			description : desc([
				"As a reaction when I'm hit by an attack, I can gain +2 to my AC against that attack",
				"As a reaction when I fail a save, I can gain +4 bonus to that saving throw",
				"After I do either, I can't cast spells other than cantrips until the end of my next turn"
			]),
			action : ["reaction", ""]
		},
		"subclassfeature2.1" : {
			name : "Tactical Wit",
			source : ["X", 60],
			minlevel : 2,
			description : "\n   " + "I gain a bonus to my initiative rolls equal to my Intelligence modifier",
			addMod : { type : "skill", field : "Init", mod : "Int", text : "I can add my Intelligence modifier to initiative rolls." }
		},
		"subclassfeature6" : {
			name : "Power Surge",
			source : ["X", 60],
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
			source : ["X", 60],
			minlevel : 10,
			description : "\n   " + "While I'm maintaining concentration on a spell, I gain +2 to AC and all saving throws"
		},
		"subclassfeature14" : {
			name : "Deflecting Shroud",
			source : ["X", 60],
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
FeatsList["bountiful luck-xgte"] = {
	name : "Bountiful Luck",
	source : ["X", 73],
	prerequisite : "Being a Halfling",
	prereqeval : "CurrentRace.known.indexOf('halfling') !== -1",
	description : "When an ally I can see within 30 ft of me rolls a 1 on an attack roll, an ability check, or a saving throw, I can use my reaction to let the ally reroll the die. The ally must use the new roll. When I use this, I can't use my racial Lucky trait until the end of my next turn.",
	action : ["reaction", ""]
};
FeatsList["dragon fear-xgte"] = {
	name : "Dragon Fear",
	source : ["X", 74],
	prerequisite : "Being a Dragonborn",
	prereqeval : "CurrentRace.known.indexOf('dragonborn') !== -1",
	calculate : "event.value = 'I can use my Breath Weapon to roar instead. Chosen creatures within 30 ft that can see or hear me must make a DC ' + (8 + Number(What('Proficiency Bonus')) + Number(What('Wis Mod'))) + ' Wis save (8 + prof. bonus + Cha mod) or be frightened of me for 1 min. A target can repeat the save whenever it takes damage. [+1 Str, Con, or Cha]';",
	improvements : "Dragon Fear (feat): +1 Strength, Constitution, or Charisma;",
	eval : "AddAction('action', 'Breath Weapon or Dragon Fear', 'Dragon Fear (feat)', 'Breath Weapon');",
	removeeval : "AddAction('action', 'Breath Weapon', 'Dragonborn (Draconic Ancestry)', 'Breath Weapon or Dragon Fear'); if (CurrentRace.known !== 'dragonborn') { RemoveAction('action', 'Breath Weapon'); }; "
};
FeatsList["dragon hide-xgte"] = {
	name : "Dragon Hide",
	source : ["X", 74],
	prerequisite : "Being a Dragonborn",
	prereqeval : "CurrentRace.known.indexOf('dragonborn') !== -1",
	description : "I gain retractable claws that I can retract or extend, requiring no action. While extended, my unarmed strikes deal 1d4 slashing damage. My scales harden, giving me an AC of 13 + Dexterity modifier + shield when I'm not wearing armor. [+1 Str, Con, or Cha]",
	improvements : "Dragon Hide (feat): +1 Strength, Constitution, or Charisma;",
	eval : "AddWeapon('Retractable Claws');",
	removeeval : "RemoveWeapon('Retractable Claws');"
};
FeatsList["drow high magic-xgte"] = {
	name : "Drow High Magic",
	source : ["X", 74],
	prerequisite : "Being a Drow (Dark Elf)",
	prereqeval : "CurrentRace.known.indexOf('dark elf') !== -1",
	description : "I can cast Detect Magic at will, without expending a spell slot. I can also cast Levitate and Dispel Magic without expending a spell slot, but each only once per long rest. Charisma is my spellcasting ability for these three spells.",
	spellcastingBonus : [{
		name : "At will",
		spellcastingAbility : 6,
		spells : ["detect magic"],
		selection : ["detect magic"],
		atwill : true
	}, {
		name : "Once per long rest",
		spells : ["levitate"],
		selection : ["levitate"],
		oncelr : true
	}, {
		name : "Once per long rest",
		spells : ["dispel magic"],
		selection : ["dispel magic"],
		oncelr : true
	}]
};
FeatsList["dwarven fortitude-xgte"] = {
	name : "Dwarven Fortitude",
	source : ["X", 74],
	prerequisite : "Being a Dwarf",
	prereqeval : "CurrentRace.known.indexOf('dwarf') !== -1",
	description : "Whenever I take the Dodge action in combat, I can spend one Hit Die to heal myself. I roll the die, add my Constitution modifier, and regain a number of hit points equal to the total (minimum of 1). [+1 Constitution]",
	improvements : "Dwarf Fortitude (feat): +1 Constitution;",
	scores : [0, 0, 1, 0, 0, 0]
};
FeatsList["elven accuracy-xgte"] = {
	name : "Elven Accuracy",
	source : ["X", 74],
	prerequisite : "Being an Elf or a Half-Elf",
	prereqeval : "(/elf|eladrin|avariel|grugach|shadar-kai/i).test(CurrentRace.known)",
	description : "Whenever I have advantage on an attack roll that uses Dexterity, Intelligence, Wisdom, or Charisma, I can reroll one of the dice once. [+1 Dexterity, Intelligence, Wisdom, or Charisma]",
	improvements : "Elven Accuracy (feat): +1 Dexterity, Intelligence, Wisdom, or Charisma;"
};
FeatsList["fade away-xgte"] = {
	name : "Fade Away",
	source : ["X", 74],
	prerequisite : "Being a Gnome",
	prereqeval : "CurrentRace.known.indexOf('gnome') !== -1",
	description : "As a reaction when I take damage, I can magically become invisible until the end of my next turn or until I attack, deal damage, or force someone to make a saving throw. Once I do this, I can't do so again until I finish a short rest. [+1 Dexterity or Intelligence]",
	improvements : "Fade Away (feat): +1 Dexterity or Intelligence;",
	action : ["reaction", ""],
	usages : 1,
	recovery : "short rest"
};
FeatsList["fey teleportation-xgte"] = { // this code includes contributions by SoilentBrad
	name : "Fey Teleportation",
	source : ["X", 74],
	prerequisite : "Being a High Elf",
	prereqeval : "CurrentRace.known.indexOf('high elf') !== -1",
	description : "I can cast Misty Step without using a spell slot. I can do so once per short rest. Intelligence is my spellcasting ability for this spell. I also learn to speak, read, and write Sylvan. [+1 Intelligence or Charisma]",
	improvements : "Fey Teleportation (feat): +1 Intelligence or Charisma;",
	spellcastingBonus : {
		name : "Once per short rest",
		spellcastingAbility : 4,
		spells : ["misty step"],
		selection : ["misty step"],
		oncesr : true
	},
	languageProfs : ["Sylvan"],
	usages : 1,
	recovery : "short rest"
};
FeatsList["flames of phlegethos-xgte"] = {
	name : "Flames of Phlegethos",
	source : ["X", 74],
	prerequisite : "Being a Tiefling",
	prereqeval : "CurrentRace.known.indexOf('tiefling') !== -1",
	description : "When I cast a fire damage spell, I can reroll any 1 on fire damage dice once. I then sheathe myself in flame until my next turn ends. These shed bright light in 30 ft, dim light in 30 ft and cause any within 5 ft that hit me in melee to take 1d4 fire damage. [+1 Int or Cha]",
	improvements : "Flames of Phlegethos (feat): +1 Intelligence or Charisma;"	
};
FeatsList["infernal constitution-xgte"] = {
	name : "Infernal Constitution",
	source : ["X", 75],
	prerequisite : "Being a Tiefling",
	prereqeval : "CurrentRace.known.indexOf('tiefling') !== -1",
	description : "I have resistance to cold and poison damage and I have advantage on saving throws against being poisoned.\n[+1 Constitution]",
	improvements : "Infernal Constitution (feat): +1 Constitution;",
	scores : [0, 0, 1, 0, 0, 0],
	dmgres : ["Cold", "Poison"],
	savetxt : { adv_vs : ["poison"] }
};
FeatsList["orcish fury-xgte"] = {
	name : "Orcish Fury",
	source : ["X", 75],
	prerequisite : "Being a Half-Orc",
	prereqeval : "(/^(?=.*half)(?=.*orc).*$/i).test(CurrentRace.known)",
	description : "Once per short rest, I can roll an extra damage die for an attack with a simple or martial weapon. In addition, Immediately after I use my Relentless Endurance trait, I can use my reaction to make one weapon attack. [+1 Strength or Constitution]",
	improvements : "Orcish Fury (feat): +1 Strength or Constitution;",
	action : ["reaction", " (after Relentless Endurance)"],
	usages : 1,
	recovery : "short rest",
	additional : "extra damage"
};
FeatsList["prodigy-xgte"] = {
	name : "Prodigy",
	source : ["X", 75],
	prerequisite : "Being a Half-Elf or a Human",
	prereqeval : "(/human|^(?=.*half)(?=.*elf).*$/i).test(CurrentRace.known)",
	description : "I gain proficiency with one skill of my choice, expertise with one skill of my choice that I'm already proficient with, proficiency with one tool of my choice, fluency in one language of my choice, and +1 to one ability score of my choice. [+1 to one ability score]",
	improvements : "Prodigy (feat): +1 to one ability score of your choice;",
	skills : "\n\n" + toUni("Prodigy (feat)") + ": Proficiency with any one skill and Expertise with any one skill that you are already proficient with.",
	languageProfs : [1],
	toolProfs : [["Any tool", 1]]
};
FeatsList["second chance-xgte"] = {
	name : "Second Chance",
	source : ["X", 75],
	prerequisite : "Being a Halfling",
	prereqeval : "CurrentRace.known.indexOf('halfling') !== -1",
	description : "When a creature I can see hits me with an attack roll, I can use my reaction to force that creature to reroll. Once I use this ability, I can't do so again until I roll initiative at the start of combat or I finish a short rest. [+1 Dexterity, Constitution, or Charisma]",
	improvements : "Second Chance (feat): +1 Dexterity, Constitution, or Charisma;",
	action : ["reaction", ""],
	usages : 1,
	recovery : "Combat"
};
FeatsList["squat nimbleness-xgte"] = {
	name : "Squat Nimbleness",
	source : ["X", 75],
	prerequisite : "Being a Dwarf or a small race",
	prereqeval : "(/dwarf/i).test(CurrentRace.known) || tDoc.getField('Size Category').currentValueIndices === 4",
	description : "My walking speed increases by 5 ft. I gain proficiency in either the Acrobatics or the Athletics skill. I have advantage on Dexterity (Acrobatics) and Strength (Athletics) checks I make to escape from being grappled. [+1 Strength or Dexterity]",
	improvements : "Squat Nimbleness (feat): +1 Strength or Dexterity;",
	skills : "\n\n" + toUni("Squat Nimbleness (feat)") + ": Acrobatics or Athletics.",
	speed : { walk : {spd : "+5", enc : "+5" } }
};
FeatsList["wood elf magic-xgte"] = {
	name : "Wood Elf Magic",
	source : ["X", 75],
	prerequisite : "Being a Wood Elf",
	prereqeval : "CurrentRace.known.indexOf('wood elf') !== -1",
	description : "I learn a druid cantrip. In addition, I can cast Longstrider and Pass Without Trace, without expending a spell slot, but each only once per long rest. Wisdom is my spellcasting ability for these three spells.",
	spellcastingBonus : [{
		name : "Druid Cantrip",
		spellcastingAbility : 5,
		"class" : "druid",
		level : [0, 0],
		atwill : true
	}, {
		name : "Once per long rest",
		spells : ["longstrider"],
		selection : ["longstrider"],
		oncelr : true
	}, {
		name : "Once per long rest",
		spells : ["pass without trace"],
		selection : ["pass without trace"],
		oncelr : true
	}]
};

// Add weapon for the Dragon Hide feat
WeaponsList["claws"] = {
	regExpSearch : /^(?=.*\b(sharp|cat|dragon|retractable|tortle))(?=.*\bclaws?\b).*$/i,
	name : "Sharp Claws",
	source : [["V", 115], ["UA:FR", 2], ["TP", 4], ["X", 74]],
	ability : 1,
	type : "Natural",
	damage : [1, 4, "slashing"],
	range : "Melee",
	description : "",
	abilitytodamage : true,
	monkweapon : true
};


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


// Add creatures
CreatureList["hound of ill omen"] = { // Stats for the Sorcerer (Shadow Magic) feature
	name : "Hound of Ill Omen",
	source : ["X", 51],
	size : 3,
	type : "Monstrosity",
	subtype : "",
	alignment : "Unaligned",
	ac : 14,
	hp : 37,
	hd : [5, 10],
	speed : "50 ft",
	scores : [17, 15, 15, 3, 12, 7],
	saves : ["", "", "", "", "", ""],
	skills : {
		"perception" : 3,
		"stealth" : 4
	},
	senses : "Adv. on Wis (Perception) checks using hearing/smell;\nAt the start of each turn, knows where the target is",
	passivePerception : 13,
	languages : "",
	challengeRating : "1",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 1,
			damage : [2, 6, "piercing"],
			range : "Melee (5 ft)",
			description : "Target must succeed on a DC 13 Strength saving throw or be knocked prone"
		}
	],
	traits : [{
			name : "Keen Hearing and Smell",
			description : "The hound has advantage on Wisdom (Perception) checks that rely on hearing or smell."
		}, {
			name : "Pack Tactics",
			description : "The hound has advantage on an attack roll against a creature if at least one of the hound's allies is within 5 ft of the creature and the ally isn't incapacitated."
		}
	],
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
		}
	]
};
CreatureList["accursed specter"] = { // Stats for the Warlock (the Hexblade) feature
	name : "Accursed Specter",
	source : ["X", 56],
	size : 3,
	type : "Undead",
	subtype : "",
	alignment : "Chaotic Evil",
	ac : 12,
	hp : 22,
	hd : [5, 8],
	speed : "fly 50 ft (hover)",
	scores : [1, 14, 11, 10, 10, 12],
	saves : ["", "", "", "", "", ""],
	damage_resistances : "acid; cold; fire; lightning; thunder; bludgeoning, piercing, and slashing from nonmagical weapons",
	damage_immunities : "necrotic, poison",
	condition_immunities : "charmed, exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, unconscious",
	senses : "Darkvision 60 ft",
	passivePerception : 10,
	languages : "all languages it knew in life, but can't speak",
	challengeRating : "1",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
			name : "Life Drain",
			ability : 2,
			damage : [3, 6, "necrotic"],
			range : "Melee (5 ft)",
			description : "DC 10 Con save or HP max reduced by same as damage taken until a long rest",
			modifiers : ["oCha", "", false],
			tooltip : "Life Drain\n\nThe target must succeed on a DC 10 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the creature finishes a long rest. The target dies if this effect reduces its hit point maximum to 0."
		}
	],
	traits : [{
			name : "Incorporeal Movement",
			description : "The specter can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
		}, {
			name : "Sunlight Sensitivity",
			description : "While in sunlight, the specter has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
		}, {
			name : "Life Drain",
			description : "The target must succeed on a DC 10 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the creature finishes a long rest. The target dies if this effect reduces its hit point maximum to 0."
		}
	],
	features : [{
			name : "Temporary Hit Points",
			description : "When the accursed specter rises from a corpse, it gains temporary HP equal to half my warlock level."
		}, {
			name : "Attack Bonus",
			description : "The accursed specter adds the warlock's Charisma modifier (minimum +0) to its attack rolls."
		}
	]
};
CreatureList["tiny servant"] = { // Stats for the Tiny Servant spell (contains contributions by SoilentBrad)
	name : "Tiny Servant",
	source : ["X", 169],
	size : 5,
	type : "Construct",
	subtype : "",
	alignment : "Unaligned",
	ac : 15,
	hp : 10,
	hd : [4, 4],
	speed : "30 ft, climb 30 ft",
	scores : [4, 16, 10, 2, 10, 1],
	saves : ["", "", "", "", "", ""],
	damage_immunities : "poison, psychic",
	condition_immunities : "blinded, charmed, deafened, exhaustion, frightened, paralyzed, petrified, poisoned",
	senses : "Blindsight 60 ft (blind beyond this radius)",
	passivePerception : 10,
	languages : "",
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
