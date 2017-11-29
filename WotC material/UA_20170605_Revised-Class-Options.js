var iFileName = "UA_20170605_Revised-Class-Options.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Unearthed Arcana: Revised Class Options article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:RCO"] = {
	name : "Unearthed Arcana: Revised Class Options",
	abbreviation : "UA:RCO",
	group : "Unearthed Arcana",
	url : "http://media.wizards.com/2017/dnd/downloads/June5UA_RevisedClassOptv1.pdf",
	date : "2017/06/05"
};

// Adds 4 revised subclasses from previous Unearthed Arcana articles: 1 for the Druid, 1 for the Fighter, 1 for the Paladin, and 1 for the Warlock
AddSubClass("druid", "circle of the shepherd2", {
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
AddSubClass("fighter", "cavalier2", {
	regExpSearch : /cavalier/i,
	subname : "Cavalier",
	source : ["UA:RCO", 2],
	fullname : "Cavalier",
	abilitySave : 1,
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiency",
			source : ["UA:RCO", 2],
			minlevel : 3,
			description : desc([
				"I gain proficiency with Animal Handling, History, Insight, Performance, or Persuasion",
				"Alternatively, I learn one language of my choice"
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
			source : ["UA:RCO", 2],
			minlevel : 3,
			description : desc([
				"I have advantage on saves to avoid falling off my mount, and land on my feet if I fail",
				"Mounting or dismounting a creature costs me only 5 ft of movement instead of half"
			]),
			savetxt : { adv_vs : ["falling off my mount"] }
		},
		"subclassfeature3.2" : {
			name : "Combat Superiority",
			source : ["UA:RCO", 2],
			minlevel : 3,
			description : desc([
				"I gain a number of superiority dice that I can use to fuel special maneuvers (see below)",
				"I can use only one maneuver per attack; I regain all superiority dice after a short rest",
				" \u2022 Control Mount (Maneuver, UA:RCO 3)",
				"   Use after rolling Wis (Animal Handling) to influence an animal I or an ally is riding",
				"   I add the superiority die to the result",
				" \u2022 Precision Attack (Maneuver, UA:RCO 3)",
				"   Use after rolling to hit; I add the superiority die to my attack roll",
				" \u2022 Trip Attack (Maneuver, UA:RCO 3) [DC 8 + Prof Bonus + Str mod]",
				"   Use after hitting a creature; I add the superiority die to the attack's damage",
				"   If target is Large or smaller, it must make a Strength save or be knocked prone",
				" \u2022 Warding Maneuver (Maneuver, UA:RCO 3) [only while wielding weapon or shield]",
				"   As a reaction when I or a creature within 5 ft is hit, I add the superiority die to AC",
				"   If the attack still hits, the target counts as having resistance against the attack"
			]),
			additional : ["", "", "d8", "d8", "d8", "d8", "d8", "d8", "d8", "d10", "d10", "d10", "d10", "d10", "d10", "d10", "d10", "d12", "d12", "d12"],
			usages : [0, 0, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6],
			recovery : "short rest",
			eval : "AddAction('reaction', 'Warding Maneuver', 'Cavalier');",
			removeeval : "RemoveAction('reaction', 'Warding Maneuver');"
		},
		"subclassfeature7" : {
			name : "Ferocious Charger",
			source : ["UA:RCO", 3],
			minlevel : 7,
			description : desc([
				"I can use two superiority dice, instead of just one, when using the Trip Attack Maneuver",
				"If doing so, both dice are added to the damage and the target has disadv. on its Str save"
			])
		},
		"subclassfeature10" : {
			name : "Improved Combat Superiority",
			source : ["UA:RCO", 3],
			minlevel : 10,
			description : "\n   " + "My superiority dice turn into d10s at 10th level and into d12s at 18th level"
		},
		"subclassfeature15" : {
			name : "Relentless",
			source : ["UA:RCO", 3],
			minlevel : 15,
			description : "\n   " + "I regain one superiority die if I have no more remaining when I roll initiative"
		}
	}
});
AddSubClass("paladin", "oath of conquest2", {
	regExpSearch : /^((?=.*(knight tyrant|iron mongers))|((?=.*(conquest|tyranny|tyrant))(((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper))))))).*$/i,
	subname : "Oath of Conquest",
	source : ["UA:RCO", 3],
	spellcastingExtra : ["armor of agathys", "command", "hold person", "spiritual weapon", "bestow curse", "fear", "dominate beast", "stoneskin", "cloudkill", "dominate person"],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Conquering Presence",
			source : ["UA:RCO", 4],
			minlevel : 3,
			description : desc([
				"As an action, all creatures of my choice within 30-ft radius must make a Wisdom save",
				"If failed, a target is frightened for 1 minute; It can save again at the end of each turn"
			]),
			action : ["action", ""]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Guided Strike",
			source : ["UA:RCO", 4],
			minlevel : 3,
			description : "\n   " + "When I make an attack roll, I can add a +10 bonus to the roll after seeing the d20 roll"
		},
		"subclassfeature7" : {
			name : "Aura of Conquest",
			source : ["UA:RCO", 4],
			minlevel : 7,
			description : desc([
				"Enemies that are frightened of me have their speed reduced to 0 while in my aura",
				"Additionally, if they start their turn within my aura, the take psychic damage"
			]),
			additional : levels.map(function (n) {
				if (n < 7) return "";
				return (n < 18 ? 10 : 30) + "-foot aura; " + Math.floor(n / 2) + " psychic damage";
			})
		},
		"subclassfeature15" : {
			name : "Scornful Rebuke",
			source : ["UA:RCO", 4],
			minlevel : 15,
			description : "\n   " + "Whenever I'm hit with an attack, the attacker takes my Cha mod in psychic damage"
		},
		"subclassfeature20" : {
			name : "Invincible Conqueror",
			source : ["UA:RCO", 4],
			minlevel : 20,
			description : desc([
				"As an action, I can gain the following benefits for 1 minute:",
				" - I have resistance all damage",
				" - I can make an additional attack as part of my Attack action",
				" - My melee weapons score critical hits on a roll of 19 or 20"
			]),
			recovery : "long rest",
			usages : 1,
			action : ["action", ""]
		}
	}
});
AddSubClass("warlock", "the celestal", {
	regExpSearch : /^(?=.*warlock)(?=.*celestial).*$/i,
	subname : "the Celestial",
	source : ["UA:RCO", 4],
	spellcastingExtra : ["burning hands", "cure wounds", "flaming sphere", "lesser restoration", "daylight", "revivify", "guardian of faith", "wall of fire", "flame strike", "greater restoration"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Cantrips",
			source : ["UA:RCO", 5],
			minlevel : 1,
			description : "\n   " + "I know the Light and Sacred Flame cantrips",
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
			source : ["UA:RCO", 5],
			minlevel : 1,
			description : desc([
				"As a bonus action, I can heal a creature on touch by expending dice from my pool",
				"I can expend up to my Charisma modifier (min 1) of dice at a time",
				"The target heals HP equal to the roll of the dice; I regain all expended dice on a long rest"
			]),
			usages : levels.map(function (n) {
				return (n + 1) + "d6 per ";
			}),
			usagescalc : "event.value = !classes.known.warlock ? '' : (1 + classes.known.warlock.level) + 'd6';",
			recovery : "long rest",
			action : ["bonus action", ""]
		},
		"subclassfeature6" : {
			name : "Radiant Soul",
			source : ["UA:RCO", 5],
			minlevel : 6,
			description : desc([
				"I add my Cha modifier to cantrips/spells I cast that deal fire or radiant damage",
				"Additionally, I have resistance to radiant damage"
			]),
			dmgres : ["Radiant"],
			calcChanges : {
				atkCalc : ["if (isSpell && (/fire|radiant/i).test(fields.Damage_Type)) { output.extraDmg += What('Cha Mod'); }; ", "Cantrips and spells that deal fire or radiant damage get my Charisma modifier added to the damage."]
			}
		},
		"subclassfeature10" : {
			name : "Radiant Resilience",
			source : ["UA:RCO", 5],
			minlevel : 10,
			description : desc([
				"When I finish a short or long rest, I and up to five allies gain temporary hit points",
				"I get my warlock level + Cha mod, while my allies get half my warlock level + Cha mod"
			]),
			additional : levels.map(function (n) {
				if (n < 10) return "";
				return "Me: " + n + "+Cha mod; Allies: " + Math.floor(n / 2) + "+Cha mod";
			})
		},
		"subclassfeature14" : {
			name : "Searing Vengeance",
			source : ["UA:RCO", 5],
			minlevel : 14,
			description : desc([
				"At the start of my turn when I would make a death save, I can instead spring back up",
				"I can stand up and recover HP equal to half my current HP maximum",
				"Also, creatures of my choice within 30 ft of me take 2d8 + Cha mod in radiant damage",
				"Damaged creatures are blinded until the end of my current turn"
			]),
			usages : 1,
			recovery : "long rest"
		}
	}
});

// Add Warlock invocations, revised versions from previous Unearthed Arcana articles, and new ones
AddWarlockInvocation("Aspect of the Moon (prereq: Pact of the Tome)", {
	name : "Aspect of the Moon",
	description : desc([
		"I don't need sleep nor can be forced to by any means; I can rest while doing light activity"
	]),
	source : ["UA:RCO", 5],
	prereqeval : "What('Class Features Remember').indexOf('warlock,pact boon,pact of the tome') !== -1",
	eval : "AddString('Saving Throw advantages \/ disadvantages', 'Nothing can force me to sleep', '; ');",
	removeeval : "RemoveString('Saving Throw advantages \/ disadvantages', 'Nothing can force me to sleep');"
});
AddWarlockInvocation("Cloak of Flies (prereq: level 5 warlock)", {
	name : "Cloak of Flies",
	description : desc([
		"As a bonus action, I can surround myself and a 5-ft radius with a magical aura of flies",
		"It lasts until I'm incapacitated or dismiss it as a bonus action; Total cover block the aura",
		"The aura grants me adv. on Cha (Intimidation), but disadv. on all other Cha checks",
		"Creatures starting their turn in the aura take my Cha mod (min 0) in poison damage"
	]),
	source : ["UA:RCO", 5],
	prereqeval : "classes.known.warlock.level >= 5",
	recovery : "short rest",
	usages : 1,
	action : ["bonus action", " (start/stop)"]
});
AddWarlockInvocation("Eldritch Smite (prereq: level 5 warlock, Pact of the Blade)", {
	name : "Eldritch Smite",
	description : desc([
		"Once per turn when I hit a creature with my pact weapon, I can do extra damage",
		"For this I have to expend a warlock spell slot; I do +1d8 force damage per level of the slot",
		"If the target takes any of this bonus damage, it is knocked prone if it is Huge or smaller"
	]),
	source : ["UA:RCO", 6],
	prereqeval : "classes.known.warlock.level >= 5 && What('Class Features Remember').indexOf('warlock,pact boon,pact of the blade') !== -1"
});
AddWarlockInvocation("Frost Lance (prereq: Eldritch Blast cantrip)", {
	name : "Frost Lance",
	description : desc([
		"When my Eldritch Blast hits a creature once or more, I can reduce its speed by 10 ft",
		"This speed reduction lasts until the end of my next turn"
	]),
	source : ["UA:RCO", 6],
	prereqeval : "hasEldritchBlast",
	calcChanges : {
		atkAdd : ["if (theWea && (/eldritch blast/i).test(theWea.name)) {fields.Description += '; Target -10 ft speed'; }; ", "When I hit a creature with my Eldritch Blast cantrip once or more times in a turn, I can reduce its speed by 10 ft until the end of my next turn."]
	}
});
AddWarlockInvocation("Ghostly Gaze (prereq: level 7 warlock)", {
	name : "Ghostly Gaze",
	description : desc([
		"As an action, I can see through solid objects out to 30 ft, until the end of my current turn",
		"Objects appear ghostly to me; I also gain 30 ft darkvision for the duration"
	]),
	source : ["UA:RCO", 6],
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
	source : ["UA:RCO", 6],
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
	description : desc([
		"When I regain HP while my familiar is within 100 ft, I regain the max the dice can roll"
	]),
	source : ["UA:RCO", 6],
	prereqeval : "What('Class Features Remember').indexOf('warlock,pact boon,pact of the chain') !== -1"
});
AddWarlockInvocation("Grasp of Hadar (prereq: Eldritch Blast cantrip)", {
	name : "Grasp of Hadar",
	description : desc([
		"When my Eldritch Blast hits a creature once or more, I can move it 10 ft closer to me"
	]),
	source : ["UA:RCO", 6],
	prereqeval : "hasEldritchBlast",
	calcChanges : {
		atkAdd : ["if (theWea && (/eldritch blast/i).test(theWea.name)) {fields.Description += '; Target moved 10 ft to me'; }; ", "When I hit a creature with my Eldritch Blast cantrip once or more times in a turn, I can move it in a straight line 10 ft closer to me."]
	}
});
AddWarlockInvocation("Improved Pact Weapon (prereq: Pact of the Blade)", {
	name : "Improved Pact Weapon",
	description : desc([
		"Any pact weapon I create is a +1 magic weapon, if it isn't already a magic weapon"
	]),
	source : ["UA:RCO", 6],
	prereqeval : "What('Class Features Remember').indexOf('warlock,pact boon,pact of the blade') !== -1",
	calcChanges : {
		atkCalc : ["if (!thisWeapon[1] && (/\\bpact\\b/i).test(WeaponText)) { var pactMag = pactMag !== undefined ? 1 - pactMag : 1; output.magic += pactMag; }; ", "If I include the word 'Pact' in a weapon's name or description, it will be treated as a Pact Weapon. If it doesn't already include a magical bonus in its name, the calculation will add +1 to its To Hit and Damage."]
	}
});
AddWarlockInvocation("Kiss of Mephistopheles (prereq: level 5 warlock, Eldritch Blast cantrip)", {
	name : "Kiss of Mephistopheles",
	description : desc([
		"As a bonus action when my Eldritch Blast hits, I can cast Fireball using a warlock spell slot",
		"The origin of the Fireball is the creature that was hit with my Eldritch Blast attack"
	]),
	source : ["UA:RCO", 6],
	prereqeval : "hasEldritchBlast && classes.known.warlock.level >= 5",
	action : ["bonus action", ""]
});
AddWarlockInvocation("Maddening Hex (prereq: level 5 warlock)", {
	name : "Maddening Hex",
	description : desc([
		"As a bonus action, I cause pain around a target affected by a hex of mine (spell/feature)",
		"The target and any of my choice within 5 ft of it take my Cha mod in psychic damage"
	]),
	source : ["UA:RCO", 6],
	prereqeval : "classes.known.warlock.level >= 5",
	action : ["bonus action", ""]
});
AddWarlockInvocation("Relentless Hex (prereq: level 7 warlock)", {
	name : "Relentless Hex",
	description : desc([
		"As a bonus action, I can teleport next to a target affected by a hex of mine (spell/feature)",
		"To do so, I must see the target and the space I'm teleporting to, and be within 30 ft of it"
	]),
	source : ["UA:RCO", 6],
	prereqeval : "classes.known.warlock.level >= 7",
	action : ["bonus action", ""]
});
AddWarlockInvocation("Shroud of Shadow (prereq: level 15 warlock)", {
	name : "Shroud of Shadow",
	description : desc([
		"I can cast Invisibility at will, without using spell slots (PHB 254)"
	]),
	source : ["UA:RCO", 6],
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
	source : ["UA:RCO", 6],
	prereqeval : "classes.known.warlock.level >= 5",
	recovery : "short rest",
	usages : 1,
	action : ["reaction", ""],
	additional : levels.map( function(n) { return (n * 10) + " temporary HP"; })
});
AddWarlockInvocation("Trickster's Escape (prereq: level 7 warlock)", {
	name : "Trickster's Escape",
	description : desc([
		"Once per long rest, I can cast Freedom of Movement on myself without using a spell slot"
	]),
	source : ["UA:RCO", 7],
	spellcastingBonus : {
		name : "Trickster's Escape",
		spells : ["freedom of movement"],
		selection : ["freedom of movement"],
		oncelr : true
	},
	prereqeval : "classes.known.warlock.level >= 7"
});
