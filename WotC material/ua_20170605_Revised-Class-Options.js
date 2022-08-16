var iFileName = "ua_20170605_Revised-Class-Options.js";
RequiredSheetVersion("13.0.8");
// This file adds the content from the Unearthed Arcana: Revised Class Options article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:RCO"] = {
	name : "Unearthed Arcana: Revised Class Options",
	abbreviation : "UA:RCO",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2017/dnd/downloads/June5UA_RevisedClassOptv1.pdf",
	date : "2017/06/05"
};

// Adds 4 revised subclasses from previous Unearthed Arcana articles: 1 for the Druid, 1 for the Fighter, 1 for the Paladin, and 1 for the Warlock
AddSubClass("druid", "circle of the shepherd2-ua", {
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
					"When I use a spell that restores hit points, it restores an additional 2 + the level of the spell slot (or spell slot equivalent) used to cast the spell."
				]
			}
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
				"When I am reduced to 0 HP or incapacitated against my will, I can cast Conjure Animals",
				"This is done as if using a 9th-level spell slot to summon 4 beast of my choice up to CR 2",
				"They appear within 20 ft of me, last 1 hour, and protect me from harm and attack foes"
			]),
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Faithful Summons",
				spells : ["conjure animals"],
				selection : ["conjure animals"],
				firstCol : "oncelr"
			},
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
AddSubClass("fighter", "cavalier2-ua", {
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
				skillstxt : "Choose one from: Animal Handling, History, Insight, Performance, or Persuasion"
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
			action : ['reaction', 'Warding Maneuver']
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
AddSubClass("paladin", "oath of conquest2-ua", {
	regExpSearch : /^((?=.*(knight tyrant|iron mongers))|((?=.*(conquest|tyranny|tyrant))(((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper))))))).*$/i,
	subname : "Oath of Conquest",
	source : ["UA:RCO", 3],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Conquering Presence",
			source : ["UA:RCO", 4],
			minlevel : 3,
			description : desc([
				"As an action, all creatures of my choice within 30-ft radius must make a Wisdom save",
				"If failed, a target is frightened for 1 minute; It can save again at the end of each turn"
			]),
			action : ["action", ""],
			spellcastingExtra : ["armor of agathys", "command", "hold person", "spiritual weapon", "bestow curse", "fear", "dominate beast", "stoneskin", "cloudkill", "dominate person"]
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
				"They also take psychic damage whenever they start theirs turn within my aura"
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
			description : desc([
				"Whenever I'm hit with an attack while I'm not incapacitated, the attacker takes damage",
				"This is psychic damage equal to my Charisma modifier (minimum of 0)"
			])
		},
		"subclassfeature20" : {
			name : "Invincible Conqueror",
			source : ["UA:RCO", 4],
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
AddSubClass("warlock", "the celestial-ua", {
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
				atkCalc : [
					function (fields, v, output) {
						if (v.isSpell && (/fire|radiant/i).test(fields.Damage_Type)) {
							output.extraDmg += What('Cha Mod');
						}
					},
					"Cantrips and spells that fire or radiant damage get my Charisma modifier added to their damage."
				],
				spellAdd : [
					function (spellKey, spellObj, spName) {
						if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "fire|radiant", "Cha");
					},
					"Cantrips and spells that fire or radiant damage get my Charisma modifier added to their damage."
				]
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
// Most probably still valid 2021-09-21, have to check
// dupl_start
if (!SourceList.X || SourceList.X.abbreviation !== "XGtE") {
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
		action : ["bonus action", " (start/stop)"]
	});
	AddWarlockInvocation("Gift of the Depths (prereq: level 5 warlock)", {
		name : "Gift of the Depths",
		description : desc([
			"I can breathe underwater and I have a swim speed equal to my walking speed",
			"Once per long rest, I can cast Water Breathing without using a spell slot (PHB 287)"
		]),
		source : [["X", 57], ["UA:RCO", 6]],
		submenu : "[warlock level  5+]",
		spellcastingBonus : {
			name : "Gift of the Depths",
			spells : ["water breathing"],
			selection : ["water breathing"],
			firstCol : 'oncelr'
		},
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
		description : "\n   " + "When my Eldritch Blast hits a creature once or more, I can move it 10 ft closer to me",
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
	AddWarlockInvocation("Shroud of Shadow (prereq: level 15 warlock)", {
		name : "Shroud of Shadow",
		description : "\n   " + "I can cast Invisibility at will, without using spell slots (PHB 254)",
		source : [["X", 57], ["UA:RCO", 6]],
		submenu : "[warlock level 15+]",
		spellcastingBonus : {
			name : "Shroud of Shadow",
			spells : ["invisibility"],
			selection : ["invisibility"],
			firstCol : 'atwill'
		},
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
		action : ["reaction", ""],
		additional : levels.map( function(n) { return (n * 10) + " temp HP"; })
	});
	AddWarlockInvocation("Trickster's Escape (prereq: level 7 warlock)", {
		name : "Trickster's Escape",
		description : "\n   " + "Once per long rest, I can cast Freedom of Movement on myself without using a spell slot",
		source : [["X", 57], ["UA:RCO", 7]],
		submenu : "[warlock level  7+]",
		spellcastingBonus : {
			name : "Trickster's Escape",
			spells : ["freedom of movement"],
			selection : ["freedom of movement"],
			firstCol : 'oncelr'
		},
		prereqeval : function(v) { return classes.known.warlock.level >= 7; },
		spellChanges : {
			"freedom of movement" : {
				range : "Self",
				description : "Magic can't reduce my speed, paralyze or restrain me; I can use 5 ft to escape nonmagical restrains",
				changes : "With the Trickster's Escape invocation I can cast Freedom of Movement, but only on myself."
			}
		}
	});
} // dupl_end
AddWarlockInvocation("Eldritch Smite (prereq: level 5 warlock, Pact of the Blade)", {
	name : "Eldritch Smite",
	description : desc([
		"Once per turn when I hit a creature with my pact weapon, I can do extra damage",
		"By expending a warlock spell slot, the creature takes extra damage and is knocked prone",
		"It takes 1d8 force damage and another 1d8 force damage per level of the spell slot",
		"If the target takes any of this bonus damage, it is knocked prone if it is Huge or smaller"
	]),
	source : ["UA:RCO", 6],
	submenu : "[improves Pact of the Blade]",
	prereqeval : function(v) { return classes.known.warlock.level >= 5 && GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the blade'; }
});
AddWarlockInvocation("Frost Lance (prereq: Eldritch Blast cantrip)", { // Still valid 2021-09-21
	name : "Frost Lance",
	description : desc([
		"Once per turn when my Eldritch Blast hits a creature, I can reduce its speed by 10 ft",
		"This speed reduction lasts until the end of my next turn"
	]),
	source : [["UA:RCO", 6]],
	submenu : "[improves Eldritch Blast]",
	prereqeval : function(v) { return v.hasEldritchBlast; },
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.baseWeaponName == 'eldritch blast') fields.Description += '; 1 target -10 ft speed';
			},
			"When I hit a creature with my Eldritch Blast cantrip once or more times in a turn, I can reduce its speed by 10 ft until the end of my next turn."
		]
	}
});
AddWarlockInvocation("Ghostly Gaze (prereq: level 7 warlock)", {
	name : "Ghostly Gaze",
	description : desc([
		"As an action, I can see through solid objects out to 30 ft, until the end of my current turn",
		"Objects appear ghostly to me; I also gain 30 ft darkvision for the duration"
	]),
	source : ["UA:RCO", 6],
	submenu : "[warlock level  7+]",
	prereqeval : function(v) { return classes.known.warlock.level >= 7; },
	recovery : "short rest",
	usages : 1,
	action : ["action", ""]
});
AddWarlockInvocation("Improved Pact Weapon (prereq: Pact of the Blade)", {
	name : "Improved Pact Weapon",
	description : desc([
		"I can use any pact weapon I create as my spellcasting focus for warlock spells",
		"Any pact weapon I create is a +1 magic weapon, if it isn't already a +1 magic weapon"
	]),
	source : ["UA:RCO", 6],
	submenu : "[improves Pact of the Blade]",
	prereqeval : function(v) { return GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the blade'; },
	calcChanges : {
		atkCalc : [
			function (fields, v, output) {
				// Test if this is a pact weapon, has no + bonus in its name, and doesn't already have a improved pact weapon bonus
				if (v.pactWeapon && !v.thisWeapon[1] && !v.pactMag) {
					var iPactWeaBonus = 1;
					var bContinue = true;
					// Now test if this isn't a magic weapon with a static + bonus set to the modifier fields
					if (v.theWea && v.theWea.isMagicWeapon && v.theWea.modifiers) {
						// Test the first two modifiers to see if both offer a +1 or more. Returns `true` if one contains no numbers or is less than the improved pact weapon bonus
						var bContinue = v.theWea.modifiers.slice(0, 2).some(function (n) {
							if (!n) {
								var nmbr = 0;
							} else if (isNaN(n)) {
								var nmbr = n.match(/($|\+|-)\d+\b/g);
								nmbr = !nmbr ? 0 : nmbr.reduce(function(a, b) {return Number(a) + Number(b)});
							} else {
								var nmbr = Number(n);
							}
							return nmbr < iPactWeaBonus;
						});
					}
					// if the continue boolean wasn't set to false, we can proceed
					if (bContinue) {
						v.pactMag = iPactWeaBonus;
						output.magic += v.pactMag;
					}
				};
			},
			"If my Pact Weapon doesn't already include a magical bonus in its name and is not a magic weapon with at least a +1 bonus, the calculation will add +1 to its To Hit and Damage."
		]
	}
});
AddWarlockInvocation("Kiss of Mephistopheles (prereq: level 5 warlock, Eldritch Blast cantrip)", {
	name : "Kiss of Mephistopheles",
	description : desc([
		"As a bonus action when my Eldritch Blast hits, I can cast Fireball using a warlock spell slot",
		"The origin of the Fireball is the creature that was hit with my Eldritch Blast attack"
	]),
	source : ["UA:RCO", 6],
	submenu : "[improves Eldritch Blast]",
	prereqeval : function(v) { return v.hasEldritchBlast && classes.known.warlock.level >= 5; },
	action : ["bonus action", ""]
});
AddWarlockInvocation("Maddening Hex (prereq: level 5 warlock)", {
	name : "Maddening Hex",
	description : desc([
		"As a bonus action, I cause pain around a target affected by a hex of mine (spell/feature)",
		"It and any of my choice within 5 ft of it take my Cha mod (min 0) in psychic damage"
	]),
	source : ["UA:RCO", 6],
	submenu : "[warlock level  5+]",
	prereqeval : function(v) { return classes.known.warlock.level >= 5; },
	action : ["bonus action", ""]
});
AddWarlockInvocation("Relentless Hex (prereq: level 7 warlock)", {
	name : "Relentless Hex",
	description : desc([
		"As a bonus action, I can teleport next to a target affected by a hex of mine (spell/feature)",
		"To do so, I must see the target and the space I'm teleporting to, and be within 30 ft of it"
	]),
	source : ["UA:RCO", 6],
	submenu : "[warlock level  7+]",
	prereqeval : function(v) { return classes.known.warlock.level >= 7; },
	action : ["bonus action", ""]
});
