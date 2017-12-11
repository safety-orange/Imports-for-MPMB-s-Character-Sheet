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
			description : "\n   " + "Spells I cast to heal a living creature at 0 HP have their dice count as their max result" + "\n   " + "I learn Spare the Dying, which I can cast as a bonus action with a range of 30 ft",
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
			description : "\n   " + "As an action, I sense undead within 60 ft that aren't protected from divination magic" + "\n   " + "Until the end of my next turn, I sense the location of any undead not behind total cover"
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Path to the Grave",
			source : ["X", 20],
			minlevel : 2,
			action : ["action", ""],
			description : "\n   " + "As an action, I can curse a creature within 30 ft until the end of my next turn" + "\n   " + "It is vulnerable to all the damage from the next attack by me or my allies that hits it"
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
			description : "\n   " + "Once per round, if I'm not incapacitated, I can manipulate the energy of the dying" + "\n   " + "When an enemy I can see dies within 60 ft of me, I or an ally within 60 ft regain HP" + "\n   " + "The HP regained is equal to the enemy's number of Hit Dice"
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