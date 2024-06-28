var iFileName = "ua_20170213_Warlock-and-Wizard.js";
RequiredSheetVersion("13.1.14");
// This file adds the content from the Unearthed Arcana: Warlock and Wizard article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:WnW"] = {
	name : "Unearthed Arcana: Warlock and Wizard",
	abbreviation : "UA:WnW",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2017/dnd/downloads/20170213_Wizrd_Wrlck_UAv2_i48nf.pdf",
	date : "2017/02/13"
};

// Adds 3 subclasses, 2 for the Warlock, and 1 for the Wizard
//this code includes contributions by Greg N.
AddSubClass("warlock", "the hexblade-ua", {
	regExpSearch : /^(?=.*hexblade)(?=.*warlock).*$/i,
	subname : "the Hexblade",
	source : [["UA:WnW", 1]],
	spellcastingExtra : ["shield", "wrathful smite", "branding smite", "magic weapon", "blink", "elemental weapon", "phantasmal killer", "staggering smite", "cone of cold", "destructive wave"],
	features : {
		"subclassfeature1" : {
			name : "Hex Warrior",
			source : [["UA:WnW", 1]],
			minlevel : 1,
			description : desc([
				"I gain proficiency with medium armor, shields, and martial weapons",
				"With one-handed melee weapons I can use Charisma instead of Strength or Dexterity"
			]),
			armorProfs : [false, true, false, true],
			weaponProfs : [false, true],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.isMeleeWeapon && !(/((^|[^+-]\b)2|\btwo).?hand(ed)?s?\b/i).test(v.WeaponText) && What('Cha Mod') > What(AbilityScores.abbreviations[fields.Mod - 1] + ' Mod')) {
							fields.Mod = 6;
						};
					},
					"For melee weapons that lack the two-handed property, I can use my Charisma instead of Strength or Dexterity."
				]
			}
		},
		"subclassfeature1.1" : {
			name : "Hexblade's Curse",
			source : [["UA:WnW", 1]],
			minlevel : 1,
			description : desc([
				"As a bonus action, I can curse a creature I can see within 30 ft of me for 1 minute",
				" - I add my proficiency bonus to damage rolls against the cursed target",
				" - My attack rolls against the curse target score a critical hit on a roll of 19 and 20",
				" - If the target dies while cursed, I regain HP equal to my warlock level + Cha mod"
			]),
			recovery : "short rest",
			usages : levels.map( function(n) { return n < 14 ? 1 : ""; }),
			action : ["bonus action", ""],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (!v.isDC && (/hexblade/i).test(v.WeaponTextName) && !v.CritChance) {
							v.CritChance = 19;
							fields.Description += (fields.Description ? '; ' : '') + 'Crit on 19-20';
						};
					},
					"If I include the word 'Hexblade' in the name of a weapon, the automation will treat the attack as being against a target of the Hexblade's Curse: adding my proficiency bonus to the damage and adding the increased chance of a critical hit to the description.",
					19
				],
				atkCalc : [
					function (fields, v, output) {
						if ((/hexblade/i).test(v.WeaponTextName)) output.extraDmg += output.prof;
					}, ""]
			}
		},
		"subclassfeature6" : {
			name : "Shadow Hound",
			source : [["UA:WnW", 1]],
			minlevel : 6,
			description : desc([
				"My shadow becomes a hound of pure darkness; Truesight reveals its nature",
				"As a bonus action, I can have it slip into the shadow of another I can see within 60 ft",
				"I know the distance/direction to the target; I ignore 1/2, 3/4 cover of the target",
				"My shadow returns to me if I use a bonus action to do so, I become incapacitated, ",
				"a spell is used to stop it, or if one of us moves to another plane of existence"
			])
		},
		"subclassfeature10" : {
			name : "Armor of Hexes",
			source : [["UA:WnW", 2]],
			minlevel : 10,
			description : "\n   " + "Targets affected by my hexblade's curse have a 50% of missing me with any attack roll"
		},
		"subclassfeature14" : {
			name : "Master of Hexes",
			source : [["UA:WnW", 2]],
			minlevel : 14,
			description : desc([
				"I no longer need to rest to be able to use my Hexblade's Curse again",
				"However, when I curse a new target, the curse immediately ends on the previous target"
			])
		}
	}
});
//this code includes contributions by Ben Y. and Wizzard
AddSubClass("warlock", "the raven queen-ua", { // Still valid 2021-09-21
	regExpSearch : /^(?=.*\braven)(?=.*queen\b).*$/i,
	subname : "the Raven Queen",
	source : [["UA:WnW", 2]],
	spellcastingExtra : ["false life", "sanctuary", "silence", "spiritual weapon", "feign death", "speak with dead", "ice storm", "locate creature", "commune", "cone of cold"],
	features : {
		"subclassfeature1" : {
			name : "Sentinel Raven",
			source : [["UA:WnW", 2]],
			minlevel : 1,
			description : desc([
				"I gain the services of a spirit in the form of a raven (using the stats of a raven)",
				"It always obeys my commands, rolls its own initiative, and can be slain",
				"While it's within 100 ft, I can telepathically speak with it and see/hear what it does",
				"While it's on my shoulder, I gain Darkvision 30 ft and add my Cha mod to Perception",
				"While it's on my shoulder, it can't be targeted, take damage, or take actions",
				"It vanishes if it is more than 5 miles away from me, it dies, or if I die",
				"If it dies, I gain advantage on all attack rolls against its killer for 24 hours",
				"After a short rest, I can recall it to me regardless of its location or if it died"
			]),
			vision : [["Darkvision", 30]],
			addMod : { type : "skill", field : "Perc", mod : "max(Cha|0)", text : "While my sentinel raven is perched on my shoulder, I can add my Charisma modifier to Perception." },
			creaturesAdd : [["Sentinel Raven"]],
			creatureOptions : [{
				name : "Sentinel Raven",
				source : [["UA:WnW", 2]],
				size : 5,
				type : "Beast",
				alignment : "Unaligned",
				ac : 12,
				hp : 1,
				hd : [1, 4],
				speed : "10 ft, fly 50 ft",
				scores : [2, 14, 8, 2, 12, 6],
				skills : {
					"perception" : 3
				},
				senses : "",
				passivePerception : 13,
				challengeRating : "0",
				proficiencyBonus : 2,
				attacksAction : 1,
				attacks : [{
					name : "Beak",
					ability : 2,
					damage : [1, "", "piercing"],
					range : "Melee (5 ft)",
					description : "",
					abilitytodamage : false
				}],
				traits : [{
					name : "Mimicry",
					description : "The raven can mimic simple sounds it has heard, such as a person whispering, a baby crying, or an animal chittering. A creature that hears the sounds can tell they are imitations with a successful DC 10 Wisdom (Insight) check."
				}, {
					name : "Sentinel",
					description : "The raven doesn't require sleep. While it is within 100 feet of me, it can awaken me from sleep as a bonus action."
				}, {
					name : "Shoulder Perch",
					description : "While perched on my shoulder, the raven can't be targeted by any attack or other harmful effect; only I can cast spells on it; it can't take damage; and it is incapacitated. It then also grants me darkvision 30 ft and a bonus to my Wisdom (Perception) equal to my Charisma modifier."
				}],
				features : [{
					name : "Sent by the Raven Queen",
					description : "The raven acts independently of me, but it always obeys my commands. In combat, it rolls its own initiative and acts on its own turn, but I control how it acts. If it is slain by a creature, I gain advantage on all attack rolls against the killer for the next 24 hours. While the raven is within 100 ft of me, I can telepathically command it and see through its eyes and hear what it hears.\n   The raven vanishes when it dies, if I die, or if we are separated by more than 5 miles. At the end of a short or long rest, I can call the raven back to reappear within 5 ft of me, regardless where it is or if it died."
				}]
			}]
		},
		"subclassfeature6" : {
			name : "Soul of the Raven",
			source : [["UA:WnW", 2]],
			minlevel : 6,
			description : desc([
				"As a bonus action, when my raven is perched on my shoulder, I can merge our bodies",
				"I become tiny and replace my speed with the raven's (10 ft, fly 50 ft)",
				"I can then use my action only to Dash, Disengage, Dodge, Help, Hide, or Search",
				"While merged, I still get all the benefits of my raven being perched on my shoulder",
				"I can end this as an action"
			]),
			action : [["bonus action", " (start)"], ['action', ' (end)']]
		},
		"subclassfeature10" : {
			name : "Raven's Shield",
			source : [["UA:WnW", 3]],
			minlevel : 10,
			description : "\n   " + "I can't be frightened, have advantage on death saves, and resistance to necrotic damage",
			savetxt : { immune : ["frightened"], adv_vs : ["death"] },
			dmgres : ["Necrotic"]
		},
		"subclassfeature14" : {
			name : "Queen's Right Hand",
			source : [["UA:WnW", 3]],
			minlevel : 14,
			description : "\n   " + "I can cast Finger of Death once per long rest",
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Queen's Right Hand",
				spells : ["finger of death"],
				selection : ["finger of death"],
				firstCol : "oncelr"
			}
		}
	}
});
//this code includes contributions by /u/magicmanfk
AddSubClass("wizard", "lore mastery-ua", { // Still valid 2021-09-21
	regExpSearch : /^(?=.*\blore)(?=.*mastery?\b).*$/i,
	subname : "Lore Mastery",
	source : [["UA:WnW", 5]],
	fullname : "Lore Master",
	features : {
		"subclassfeature2" : {
			name : "Lore Master",
			source : [["UA:WnW", 6]],
			minlevel : 2,
			description : desc([
				"I can use my Intelligence modifier for initiative instead of my Dexterity modifier",
				"I get expertise with each Arcana, History, Nature, and Religion, if I'm proficient with it"
			]),
			skills : [["Arcana", "only"], ["History", "only"], ["Nature", "only"], ["Religion", "only"]],
			addMod : { type : "skill", field : "Init", mod : "max(Int-Dex|0)", text : "I use my Intelligence modifier for initiative rolls instead of Dexterity." }
		},
		"subclassfeature2.1" : {
			name : "Spell Secrets: Elements",
			source : [["UA:WnW", 6]],
			minlevel : 2,
			description : desc([
				"I can change the damage type of spells I cast using spell slots (so not cantrips)",
				"I can swap out acid, cold, fire, force, lightning, necrotic, radiant, or thunder damage"
			])
		},
		"subclassfeature2.2" : {
			name : "Spell Secrets: Saves",
			source : [["UA:WnW", 6]],
			minlevel : 2,
			description : "\n   " + "I can change the saving throw ability score to another for a spell I cast using a spell slot",
			recovery : "short rest",
			usages : 1
		},
		"subclassfeature6" : {
			name : "Alchemical Casting",
			source : [["UA:WnW", 6]],
			minlevel : 6,
			description : desc([
				"When I cast a spell with a spell slot, I can expend one additional spell slot to augment it",
				" - 1st-level slot: one damage roll of the spell adds +2d10 force damage",
				" - 2nd-level slot: if the range of the spell is at least 30 ft, it becomes 1 mile",
				" - 3rd-level slot: the spell's save DC increases by 2"
			])
		},
		"subclassfeature10" : {
			name : "Prodigious Memory",
			source : [["UA:WnW", 6]],
			minlevel : 10,
			description : "\n   " + "As a bonus action, I can replace one of my prepared spells with another from my book",
			recovery : "short rest",
			usages : 1,
			action : ["bonus action", ""]
		},
		"subclassfeature14" : {
			name : "Master of Magic",
			source : [["UA:WnW", 6]],
			minlevel : 14,
			description : desc([
				"As a bonus action, I can call to mind one spell of my choice from any class' spell list",
				"This spell must be of a level I have spell slots for and that I don't already have prepared",
				"I can then cast it using the normal spellcasting rules, including expending a spell slot",
				"It counts a wizard spell; I can only cast the spell during the same turn I call it to mind"
			]),
			usages : 1,
			recovery : "long rest",
			action : ["bonus action", ""]
		}
	}
});

// Add many new Warlock invocations
// Most probably still valid 2021-09-21, have to check
AddWarlockInvocation("Aspect of the Moon (prereq: the Archfey patron)", {
	name : "Aspect of the Moon",
	description : "\n   " + "I don't need to sleep nor can be magically forced to; I can rest while doing light activity",
	source : [["UA:WnW", 3]],
	prereqeval : function(v) { return (/\barchfey\b/).test(classes.known.warlock.subclass); },
	savetxt : { text : ["Nothing can force me to sleep"] }
});
AddWarlockInvocation("Burning Hex (prereq: the Hexblade patron)", {
	name : "Burning Hex",
	description : desc([
		"As a bonus action, I can cause a target affected by my hexblade's curse to take damage",
		"It immediately takes fire damage equal to my Charisma modifier (min 1)"
	]),
	source : [["UA:WnW", 3]],
	prereqeval : function(v) { return (/hexblade/).test(classes.known.warlock.subclass); },
	action : ["bonus action", ""]
});
AddWarlockInvocation("Caiphon's Beacon (prereq: the Great Old One patron)", {
	name : "Caiphon's Beacon",
	description : desc([
		"I gain proficiencies with the Deception and Stealth skills",
		"I have advantage on attack rolls against charmed creatures"
	]),
	source : [["UA:WnW", 3]],
	prereqeval : function(v) { return (/great old one/).test(classes.known.warlock.subclass); },
	skills : ["Deception", "Stealth"]
});
AddWarlockInvocation("Chilling Hex (prereq: the Hexblade patron)", {
	name : "Chilling Hex",
	description : desc([
		"As a bonus action, I can swirl frost around a target affected by my hexblade's curse",
		"All creatures within 5 ft of the target take cold damage equal to my Cha modifier (min 1)"
	]),
	source : [["UA:WnW", 3]],
	prereqeval : function(v) { return (/hexblade/).test(classes.known.warlock.subclass); },
	action : ["bonus action", ""]
});
AddWarlockInvocation("Chronicle of the Raven Queen (prereq: the Raven Queen patron, Pact of the Tome)", {
	name : "Chronicle of the Raven Queen",
	description : desc([
		"Within 1 minute of a creature's death, I can use my book of shadows to ask it 1 question",
		"To do this, I need to put the corpse's hand on the book and speak the question aloud",
		"Its spirit writes the answer, to the best of its knowledge, in blood in a language I choose"
	]),
	source : [["UA:WnW", 3]],
	submenu : "[improves Pact of the Tome]",
	prereqeval : function(v) { return (/raven queen/).test(classes.known.warlock.subclass) && classes.known.warlock.level >= 3 && GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the tome'; },
	action : ["bonus action", ""]
});
AddWarlockInvocation("Claw of Acamar (prereq: the Great Old One patron, Pact of the Blade)", {
	name : "Claw of Acamar",
	description : desc([
		"As a pact weapon, I can create a black, lead flail with grasping tentacles for a head",
		"It has reach and can reduce a creature's speed to 0 on a hit until the end of my next turn",
		"On a hit, I can expend a spell slot to have it do +2d8 necrotic damage per spell slot level"
	]),
	source : [["UA:WnW", 3]],
	submenu : "[improves Pact of the Blade]",
	prereqeval : function(v) { return (/great old one/).test(classes.known.warlock.subclass) && classes.known.warlock.level >= 3 && GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the blade'; },
	weaponOptions : [{
		baseWeapon : "flail",
		regExpSearch : /^(?=.*\bclaw\b)(?=.*\bacamar\b).*$/i,
		name : "Claw of Acamar",
		source : [["UA:WnW", 3]],
		pactWeapon : true,
		description : "Pact weapon, reach; On hit: Reduces speed to 0, Expend spell slot for +2d8 necrotic damage per slot level",
		selectNow : true
	}]
});
AddWarlockInvocation("Cloak of Baalzebul (prereq: the Fiend patron)", {
	name : "Cloak of Baalzebul",
	description : desc([
		"As a bonus action, I can conjure or dismiss a swarm of buzzing flies around me",
		"This gives me adv. on Cha (Intimidation) checks, but disadv. on all other Charisma checks",
		"Creatures starting their turn within 5 ft of me take poison damage equal to my Cha mod"
	]),
	source : [["UA:WnW", 3]],
	prereqeval : function(v) { return (/\bfiend\b/).test(classes.known.warlock.subclass); },
	action : ["bonus action", " (start/end)"]
});
AddWarlockInvocation("Curse Bringer (prereq: the Hexblade patron, Pact of the Blade)", {
	name : "Curse Bringer",
	description : desc([
		"As a pact weapon, I can create a silver greatsword with black runes etched in the blade",
		"If I bring a target of my hexblade's curse to 0 HP with it, I can move the curse to another",
		"It can reduce a creature's speed to 0 on a hit until the end of my next turn",
		"On a hit, I can expend a spell slot to have it do +2d8 slashing damage per spell slot level"
	]),
	source : [["UA:WnW", 4]],
	submenu : "[improves Pact of the Blade]",
	prereqeval : function(v) { return (/hexblade/).test(classes.known.warlock.subclass) && classes.known.warlock.level >= 3 && GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the blade'; },
	weaponOptions : [{
		baseWeapon : "greatsword",
		regExpSearch : /^(?=.*\bcurse)(?=.*bringer\b).*$/i,
		name : "Curse Bringer",
		source : [["UA:WnW", 4]],
		pactWeapon : true,
		description : "Pact weapon, heavy, two-handed; On hit: Reduces speed to 0, Expend spell slot for +2d8 slashing damage per slot level",
		selectNow : true
	}]
});
AddWarlockInvocation("Kiss of Mephistopheles (prereq: level 5 warlock, the Fiend patron, Eldritch Blast cantrip)", {
	name : "Kiss of Mephistopheles",
	description : desc([
		"As a bonus action when my Eldritch Blast hits, I can cast Fireball using a warlock spell slot",
		"The origin of the Fireball is the creature that was hit with my Eldritch Blast attack"
	]),
	source : [["UA:WnW", 4]],
	submenu : "[improves Eldritch Blast]",
	prereqeval : function(v) { return v.hasEldritchBlast && classes.known.warlock.level >= 5 && (/\bfiend\b/).test(classes.known.warlock.subclass); },
	action : ["bonus action", ""]
});
AddWarlockInvocation("Frost Lance (prereq: the Archfey patron, Eldritch Blast cantrip)", {
	name : "Frost Lance",
	description : desc([
		"When my Eldritch Blast hits a creature once or more, I can reduce its speed by 10 ft",
		"This speed reduction lasts until the end of my next turn"
	]),
	source : [["UA:WnW", 4]],
	submenu : "[improves Eldritch Blast]",
	prereqeval : function(v) { return v.hasEldritchBlast && (/\barchfey\b/).test(classes.known.warlock.subclass); },
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.baseWeaponName == 'eldritch blast') fields.Description += '; Target -10 ft speed';
			},
			"When I hit a creature with my Eldritch Blast cantrip once or more times in a turn, I can reduce its speed by 10 ft until the end of my next turn."
		]
	}
});
AddWarlockInvocation("Gaze of Khirad (prereq: level 7 warlock, the Great Old One patron)", {
	name : "Gaze of Khirad",
	description : desc([
		"As an action, I can see through solid object out to 30 ft until the end of my current turn"
	]),
	source : [["UA:WnW", 4]],
	submenu : "[warlock level  7+]",
	prereqeval : function(v) { return (/great old one/).test(classes.known.warlock.subclass) && classes.known.warlock.level >= 7; },
	action : ["action", ""]
});
AddWarlockInvocation("Grasp of Hadar (prereq: the Great Old One patron, Eldritch Blast cantrip)", {
	name : "Grasp of Hadar",
	description : desc("Once per turn when my Eldritch Blast hits a creature, I can move it 10 ft closer to me"),
	source : [["UA:WnW", 4]],
	submenu : "[improves Eldritch Blast]",
	prereqeval : function(v) { return v.hasEldritchBlast && (/great old one/).test(classes.known.warlock.subclass); },
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.baseWeaponName == 'eldritch blast') fields.Description += '; Target moved 10 ft to me';
			},
			"When I hit a creature with my Eldritch Blast cantrip once or more times in a turn, I can move it in a straight line 10 ft closer to me."
		]
	}
});
AddWarlockInvocation("Green Lord's Gift (prereq: the Archfey patron)", {
	name : "Green Lord's Gift",
	description : desc([
		"When I regain HP, all dice for determining the HP I heal are treated as rolling maximum"
	]),
	source : [["UA:WnW", 4]],
	prereqeval : function(v) { return (/\barchfey\b/).test(classes.known.warlock.subclass); }
});
AddWarlockInvocation("Improved Pact Weapon (prereq: level 5 warlock, Pact of the Blade)", {
	name : "Improved Pact Weapon",
	description : desc([
		"Any pact weapon I create is a +1 magic weapon, if it isn't already a magic weapon"
	]),
	source : [["UA:WnW", 4]],
	submenu : "[improves Pact of the Blade]",
	prereqeval : function(v) { return classes.known.warlock.level >= 5 && GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the blade'; },
	calcChanges : {
		atkCalc : [
			function (fields, v, output) {
				// Test if this is a pact weapon, has no + bonus from somewhere else, and isn't a magic weapon
				if (v.pactWeapon && !output.magic && !(v.theWea && v.theWea.isMagicWeapon)) {
					v.pactMag = 1;
					output.magic = 1;
				};
			},
			"If my Pact Weapon doesn't already include a magical bonus in its name or gets it from somewhere else and is not a magic weapon, the calculation will add +1 to its To Hit and Damage."
		]
	}
});
AddWarlockInvocation("Mace of Dispater (prereq: the Fiend patron, Pact of the Blade)", {
	name : "Mace of Dispater",
	description : desc([
		"As a pact weapon, I can create an iron mace forged in Dis, the 2nd layer of the Nine Hells",
		"I can knock a target prone with it on a hit, if the target's size is Huge or smaller",
		"On a hit, I can expend a spell slot to have it do +2d8 force damage per spell slot level"
	]),
	source : [["UA:WnW", 4]],
	submenu : "[improves Pact of the Blade]",
	prereqeval : function(v) { return (/\bfiend\b/).test(classes.known.warlock.subclass) && classes.known.warlock.level >= 3 && GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the blade'; },
	weaponOptions : [{
		baseWeapon : "mace",
		regExpSearch : /^(?=.*\bmace\b)(?=.*\bdispater\b).*$/i,
		name : "Mace of Dispater",
		source : [["UA:WnW", 4]],
		pactWeapon : true,
		description : "Pact weapon; On hit: knock Huge or smaller prone, Expend spell slot for +2d8 force damage per slot level",
		selectNow : true
	}]
});
AddWarlockInvocation("Moon Bow (prereq: the Archfey patron, Pact of the Blade)", {
	name : "Moon Bow",
	description : desc([
		"As a pact weapon, I can create a longbow that creates arrows of white wood when drawn",
		"Its arrows last for 1 minute; I have advantage on attack rolls against lycanthropes with it",
		"On a hit, I can expend a spell slot to have it do +2d8 radiant damage per spell slot level"
	]),
	source : [["UA:WnW", 4]],
	submenu : "[improves Pact of the Blade]",
	prereqeval : function(v) { return (/\barchfey\b/).test(classes.known.warlock.subclass) && classes.known.warlock.level >= 3 && GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the blade'; },
	weaponOptions : [{
		baseWeapon : "longbow",
		regExpSearch : /^(?=.*\bmoon)(?=.*bow\b).*$/i,
		name : "Moon Bow",
		source : [["UA:WnW", 4]],
		pactWeapon : true,
		description : "Pact weapon, heavy, two-handed; Adv. vs. lycanthropes; On hit, expend spell slot for +2d8 radiant damage per slot level",
		selectNow : true
	}]
});
AddWarlockInvocation("Path of the Seeker (prereq: the Seeker patron)", {
	name : "Path of the Seeker",
	description : desc([
		"I ignore difficult terrain; I have advantage on saving throws against being paralyzed",
		"I also have advantage on checks to escape a grapple, manacles, or rope bindings"
	]),
	source : [["UA:WnW", 4]],
	prereqeval : function(v) { return (/\bseeker\b/).test(classes.known.warlock.subclass); },
	savetxt : { adv_vs : ["paralyzed"] }
});
AddWarlockInvocation("Raven Queen's Blessing (prereq: the Raven Queen patron, Eldritch Blast cantrip)", {
	name : "Raven Queen's Blessing",
	description : desc([
		"When I score a critical hit with Eldritch Blast, I can choose an ally I can see within 30 ft",
		"That ally can immediately expend one HD to regain HP, just like after a short rest"
	]),
	source : [["UA:WnW", 5]],
	submenu : "[improves Eldritch Blast]",
	prereqeval : function(v) { return v.hasEldritchBlast && (/raven queen/).test(classes.known.warlock.subclass); }
});
AddWarlockInvocation("Relentless Hex (prereq: level 5 warlock, the Hexblade patron)", {
	name : "Relentless Hex",
	description : desc([
		"As a bonus action, I can teleport next to a target affected by my hexblade's curse",
		"To do so, I must see the target and the space I'm teleporting to, and be within 30 ft of it"
	]),
	source : [["UA:WnW", 5]],
	submenu : "[warlock level  5+]",
	prereqeval : function(v) { return (/hexblade/).test(classes.known.warlock.subclass) && classes.known.warlock.level >= 5; },
	action : ["bonus action", ""]
});
AddWarlockInvocation("Sea Twins' Gift (prereq: the Archfey patron)", {
	name : "Sea Twins' Gift",
	description : desc([
		"I can breathe underwater and I have a swim speed equal to my walking speed",
		"Once per long rest, I can cast Water Breathing using a warlock spell slot (PHB 287)"
	]),
	spellcastingBonus : {
		name : "Sea Twins' Gift",
		spells : ["water breathing"],
		selection : ["water breathing"],
		firstCol : "oncelr"
	},
	source : [["UA:WnW", 5]],
	prereqeval : function(v) { return (/\barchfey\b/).test(classes.known.warlock.subclass); },
	speed : { swim : { spd : "walk", enc : "walk" } }
});
AddWarlockInvocation("Seeker's Speech (prereq: the Seeker patron)", {
	name : "Seeker's Speech",
	description : desc([
		"When I finish a long rest, I pick two languages that I know until I finish my next long rest"
	]),
	source : [["UA:WnW", 5]],
	prereqeval : function(v) { return (/\bseeker\b/).test(classes.known.warlock.subclass); }
});
AddWarlockInvocation("Shroud of Ulban (prereq: level 18 warlock, the Great Old One patron)", {
	name : "Shroud of Ulban",
	description : desc([
		"As an action, I can turn myself invisible for 1 minute",
		"If I attack, deal damage, or force a creature to make a save, I become visible again",
		"However, I only become visible at the end of the current turn"
	]),
	source : [["UA:WnW", 4]],
	submenu : "[warlock level 18+]",
	prereqeval : function(v) { return (/great old one/).test(classes.known.warlock.subclass) && classes.known.warlock.level >= 18; },
	action : ["action", ""]
});
AddWarlockInvocation("Superior Pact Weapon (prereq: level 9 warlock, Pact of the Blade)", {
	name : "Superior Pact Weapon",
	description : desc([
		"Any pact weapon I create is a +2 magic weapon, if it isn't already a magic weapon"
	]),
	source : [["UA:WnW", 5]],
	submenu : "[improves Pact of the Blade]",
	prereqeval : function(v) { return classes.known.warlock.level >= 9 && GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the blade'; },
	calcChanges : {
		atkCalc : [
			function (fields, v, output) {
				// Test if this is a pact weapon, has no + bonus in its name, is not a magic weapon, and doesn't already have a improved pact weapon bonus
				var iPactWeaBonus = 2;
				if (v.pactWeapon && !v.thisWeapon[1] && !(v.theWea && v.theWea.isMagicWeapon) && ((!v.pactMag && !output.magic) || (v.pactMag && v.pactMag < iPactWeaBonus))) {
					if (v.pactMag) output.magic -= v.pactMag;
					v.pactMag = iPactWeaBonus;
					output.magic += v.pactMag;
				};
			},
			"If my Pact Weapon doesn't already include a magical bonus in its name or gets it from somewhere else and is not a magic weapon, the calculation will add +2 to its To Hit and Damage."
		]
	}
});
AddWarlockInvocation("Tomb of Levistus (prereq: the Fiend patron)", {
	name : "Tomb of Levistus",
	description : desc([
		"As a reaction when I take damage, I can entomb myself in ice until the end of my turn",
		"I get 10 temp. HP per warlock level, which can be used to absorb the triggering damage",
		"Until the ice is gone, I have vulnerability to fire damage, 0 speed, and am incapacitated"
	]),
	source : [["UA:WnW", 5]],
	prereqeval : function(v) { return (/\bfiend\b/).test(classes.known.warlock.subclass); },
	recovery : "short rest",
	usages : 1,
	action : ["reaction", ""]
});
AddWarlockInvocation("Ultimate Pact Weapon (prereq: level 15 warlock, Pact of the Blade)", {
	name : "Ultimate Pact Weapon",
	description : desc([
		"Any pact weapon I create is a +3 magic weapon, if it isn't already a magic weapon"
	]),
	source : [["UA:WnW", 5]],
	submenu : "[improves Pact of the Blade]",
	prereqeval : function(v) { return classes.known.warlock.level >= 15 && GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the blade'; },
	calcChanges : {
		atkCalc : [
			function (fields, v, output) {
				// Test if this is a pact weapon, has no + bonus in its name, is not a magic weapon, and doesn't already have a improved pact weapon bonus
				var iPactWeaBonus = 3;
				if (v.pactWeapon && !v.thisWeapon[1] && !(v.theWea && v.theWea.isMagicWeapon) && ((!v.pactMag && !output.magic) || (v.pactMag && v.pactMag < iPactWeaBonus))) {
					if (v.pactMag) output.magic -= v.pactMag;
					v.pactMag = iPactWeaBonus;
					output.magic += v.pactMag;
				};
			},
			"If my Pact Weapon doesn't already include a magical bonus in its name or gets it from somewhere else and is not a magic weapon, the calculation will add +3 to its To Hit and Damage."
		]
	}
});
