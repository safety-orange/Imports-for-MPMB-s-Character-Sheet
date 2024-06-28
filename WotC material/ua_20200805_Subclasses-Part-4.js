var iFileName = "ua_20200805_Subclasses-Part-4.js";
RequiredSheetVersion("13.0.8");
// This file adds the content from the Unearthed Arcana 2020: Subclasses, Part 4 article to MPMB's Character Record Sheet
// This file contains contributions by AelarTheElfRogue

// Define the source
SourceList["UA:SP4"] = {
	name : "Unearthed Arcana: Subclasses, Part 4",
	abbreviation : "UA:SP4",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2020/dnd/downloads/UA2020_Subclasses04.pdf",
	date : "2020/08/05"
};

AddSubClass("bard", "college of spirits-ua",{
	regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*spirits?).*$/i,
	subname : "College of Spirits",
	source : [["UA:SP4", 1]],
	features : {
		"subclassfeature3" : {
			name : "Guiding Whispers",
			source : [["UA:SP4", 1]],
			minlevel : 3,
			description : desc([
				"I learn the Guidance cantrip and can cast it with a range of 60 ft"
			]),
			spellcastingBonus : {
				name : "Guiding Whispers",
				spells : ["guidance"],
				selection : ["guidance"],
				firstCol : "atwill"
			},
			spellChanges : {
				"guidance" : {
					range : "60 ft",
					changes : "I can cast Guidance with a range of 60 ft."
				}
			}
		},
		"subclassfeature3.1" : {
			name : "Spiritual Focus",
			source : [["UA:SP4", 1]],
			minlevel : 3,
			description : " [only for bard spells]" + desc([
				"I can use a candle, crystal ball, skull, spirit board, or tarokka deck as a spellcasting focus"
			])
		},
		"subclassfeature3.2" : {
			name : "Tales from Beyond",
			source : [["UA:SP4", 1]],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can expend a bardic inspiration die to roll on the Spirits' Tales table",
				"I retain the rolled tale in my mind until I bestow its effects or finish a short or long rest",
				"I can only retain one tale at a time; I need to hold a spiritual focus to roll on the table",
				"As an action, I can choose a creature I see in 30 ft or myself to bestow the tale's effect",
				"The tales use my spell save DC; See the Notes page for the Spirits' Tales table"
			]),
			action : [["bonus action", " (roll on table)"], ["action", " (use effect)"]],
			toNotesPage : [{
				name : "Spirits' Tales Table",
				note : desc([
					"As a bonus action while I'm holding my spiritual focus, I can reach out to spirits who tell their tales through me. I expend one use of my Bardic Inspiration and roll on the table below using my Bardic Inspiration die to determine the tale. I retain the tale in mind until I bestow the tale's effect or finish a short or long rest.",
					"I can retain only one of these tales in mind at a time, and rolling on the table immediately ends the effect of the previous tale.",
					"As an action, I can choose myself or one creature I can see within 30 ft to be the target of the tale's effect. If the tale requires a saving throw, the DC equals my spell save DC.",
					"\nRoll " + (typePF ? "" : " ") + "Tale"
				])+
				desc([
					"  1    Beast: I recite the tale of a clever animal. For 1 minute, the target has advantage on Wisdom (Perception) checks and advantage on attack rolls against a creature if another enemy is within 5 ft of it, and that enemy isn't incapacitated.",
					"  2    Warrior: I recount the story of a renowned duelist. Make a melee spell attack against the target as an attacking spectral warrior briefly appears in a unoccupied space within 5 ft of the target before vanishing. On a hit, the target takes force damage equal to two rolls of my Bardic Inspiration die + my Charisma modifier.",
					"  3    Friends: I recite the tale of friends who found each other in the afterlife. The target and another creature of its choice it can see within 5 ft of it regains hit points equal to a roll of my Bardic Inspiration die + my Charisma modifier.",
					"  4    Runaway: I tell the tale of an adventurer that could escape any confinement. The target can immediately use its reaction to teleport up to 30 ft to an unoccupied space it can see. When the target teleports, it can choose a number of creatures it can see within 30 ft of it up to my Charisma modifier (minimum of 1) to immediately use the same reaction.",
					"  5    Avenger: I recount the tale of an avenging knight. For 1 minute, whenever a creature the target can see within 30 ft of it is damaged by a creature, the target can use its reaction to deal force damage equal to a roll of my Bardic Inspiration die to the attacker.",
					"  6    Hero: I speak the tale of an epic hero. The target gains temporary hit points equal to a roll of my Bardic Inspiration die + my bard level. While it has these temporary hit points, the target's walking speed increases by 10 ft.",
					"  7    Fey: I recount the tale of a mischievous fey. The target must succeed on a Wisdom saving throw or become charmed by me until the end of its next turn. The charmed target must use its action to make a melee attack against a creature other than itself that I mentally choose. The target can act normally on its turn if I choose no other creature.",
					"  8    Dark Spirit: I speak a dreadful tale of a slayer in the dark. The target becomes invisible until the end of its next turn or until it hits a creature with an attack. If it hits a creature with an attack during this invisibility, that creature takes necrotic damage equal to a roll of my Bardic Inspiration die and is frightened of the target until the end of its next turn.",
					"  9    Giant: I speak of the deeds of a mighty giant. Each creature of the target's choice it can see within 30 ft of it must make a Strength saving throw, taking force damage equal to two rolls of my Bardic Inspiration die on a failed save and is knocked prone. A creature that succeeds on its saving throw takes half as much damage and isn't knocked prone.",
					" 10    Dragon: I breathe a poem of a wrathful dragon. The target magically spews fire from their mouth in a 30-ft cone. Each creature in that area must make a Dexterity saving throw, taking fire damage equal to three rolls of my Bardic Inspiration die on a failed save, or half as much damage on a successful one.",
					" 11    Celestial: I speak of the exalted deeds of a celestial. The target regains hit points equal to two rolls of my Bardic Inspiration die + my bard level, and I end one disease or a condition from the following list affecting the target: blinded, deafened, paralyzed, petrified, or poisoned.",
					" 12    Unknown: I utter an incomprehensible fable from a being beyond the stars. The target must succeed on an Intelligence saving throw or take psychic damage equal to three rolls of my Bardic Inspiration die, and the target is unable to speak any language for 1 minute."
				], "\n")
			}]
		},
		"subclassfeature6" : {
			name : "Spiritual Focus: Improve spells",
			source : [["UA:SP4", 2]],
			minlevel : 6,
			description : desc([
				"While holding a spiritual focus, I can add 1d6 to one damage or healing roll of bard spells"
			]),
			calcChanges : {
				atkAdd : [
					function (fields, v, output) {
						if (v.thisWeapon[3] && SpellsList[v.thisWeapon[3]] && v.thisWeapon[4].indexOf("bard") !== -1) {
							// If RAW is selected, first test if this spell is eligible to use with a spellcasting focus
							var isRAW = GetFeatureChoice("classes", "bard", "subclassfeature6") === "raw: only +1d6 for spells with non-costly material components";
							var spellObj = SpellsList[v.thisWeapon[3]];
							if (isRAW && (!spellObj.components || !/\bM\b/.test(spellObj.components) || /M\u0192|M\u2020/.test(spellObj.components))) return;
							fields.Damage_Die = fields.Damage_Die.replace(/D/g, 'd');
							var d6Regex = /(\d+)d6/;
							if (fields.Damage_Die.indexOf('Bd6') != -1) {
								fields.Damage_Die = fields.Damage_Die.replace('Bd6', 'Cd6');
							} else if (fields.Damage_Die.indexOf('Cd6') != -1) {
								fields.Damage_Die = fields.Damage_Die.replace('Cd6', 'Qd6');
							} else if (d6Regex.test(fields.Damage_Die)) {
								fields.Damage_Die = fields.Damage_Die.replace(d6Regex, Number(fields.Damage_Die.replace(d6Regex, '$1')) + 1 + 'd6');
							} else if (v.thisWeapon[3] == "eldritch blast") {
								fields.Description += (fields.Description ? '; ' : '') + "One ray +1d6 dmg";
							} else {
								fields.Damage_Die += '+1d6';
							}
						}
					},
					'When I cast a bard spell, I can use my spiritual focus to add 1d6 to one damage roll or roll to restore hit points.\n   Going by rules as written (RAW), the spiritual focus has to be used as a spellcasting focus for this bonus to be added. This means that it can only be used on spells with a non-costly material component. Most DMs will forgo this technicality and that is why this sheet will add the 1d6 to any damage/healing spell by default. You can enable to use the stricter rules as written with the "Choose Feature" button on the second page.'
				],
				spellAdd : [
					function (spellKey, spellObj, spName) {
						// Do not process if a psionic, not a bard spell, or, if RAW is selected, not eligible to use with a spellcasting focus
						var isRAW = GetFeatureChoice("classes", "bard", "subclassfeature6") === "raw: only +1d6 for spells with non-costly material components";
						if (spellObj.psionic || spName !== "bard" || (isRAW && (!spellObj.components || !/\bM\b/.test(spellObj.components) || /M\u0192|M\u2020/.test(spellObj.components)))) return;
						if (genericSpellDmgEdit(spellKey, spellObj, "\\w+\\.?", "1d6", true, true) || genericSpellDmgEdit(spellKey, spellObj, "heal", "1d6", true, true)) {
							return true;
						}
					},
					'When I cast a bard spell, I can use my spiritual focus to add 1d6 to one damage roll or roll to restore hit points.\n   Going by rules as written (RAW), the spiritual focus has to be used as a spellcasting focus for this bonus to be added. This means that it can only be used on spells with a non-costly material component. Most DMs will forgo this technicality and that is why this sheet will add the 1d6 to any damage/healing spell by default. You can enable to use the stricter rules as written with the "Choose Feature" button on the second page.'
				]
			},
			choices : ["RAW: only +1d6 for spells with non-costly material components", "Allow +1d6 for any bard spell"],
			"raw: only +1d6 for spells with non-costly material components" : {
				name : "Spiritual Focus: Improve spells",
				description : desc([
					"If I use a spiritual focus to cast a bard spell, I can add 1d6 to one damage or healing roll"
				])
			},
			"allow +1d6 for any bard spell" : {
				name : "Spiritual Focus: Improve spells",
				description : desc([
					"While holding a spiritual focus, I can add 1d6 to one damage or healing roll of bard spells"
				])
			},
			defaultChoice : "allow +1d6 for any bard spell"
		},
		"subclassfeature6.1" : {
			name : "Spirit Session",
			source : [["UA:SP4", 2]],
			minlevel : 6,
			description : desc([
				"Using my spiritual focus, I can conduct a hour-long ritual to channel spirit during a rest",
				"The number of willing participants, me included, can be up to my Proficiency Bonus",
				"At the end, I learn a divination or necromancy spell of my choice until I start a long rest",
				"The spell can't be higher level than the number of participants and of a level I can cast"
			]),
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Spirit Session",
				school : ["Div", "Necro"],
				firstCol : "SS"
			}
		},
		"subclassfeature14" : {
			name : "Mystical Connection",
			source : [["UA:SP4", 3]],
			minlevel : 14,
			description : desc([
				"I can roll a d6 instead of expending a bardic inspiration die when I do Tales from Beyond",
				"Even if I roll a d6, I still roll my bardic inspiration die for the effect, but not expend it"
			])
		}
	}
});
AddSubClass("warlock", "the undead-ua",{
	regExpSearch : /^(?=.*undead)(?=.*warlock).*$/i,
	subname : "the Undead",
	source : [["UA:SP4", 1]],
	spellcastingExtra : ["bane", "false life", "blindness/deafness", "phantasmal force", "phantom steed", "speak with dead", "death ward", "greater invisibility", "antilife shell", "cloudkill"],
	features : {
		"subclassfeature1" : {
			name : "Form of Dread",
			source : [["UA:SP4", 3]],
			minlevel : 1,
			description : desc([
				"As a bonus action, I can transform for 1 minute and gain the following benefits:",
				" \u2022 I gain temporary hit points equal to 1d10 + my warlock level",
				" \u2022 I am immune to the frightened condition",
				" \u2022 Once per turns when I hit an attack, I can force the target to make a Wis save",
				"   If the target fails this save, it is frightened of me until the end of my next turn"
			]),
			additional : levels.map(function (n) {
				return "1d10+" + n + " temp HP";
			}),
			usages : "Prof Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			action : [["bonus action", ""]],
			savetxt : { immune : ["frightened (Form of Dread)"] }
		},
		"subclassfeature6" : {
			name : "Grave Touched",
			source : [["UA:SP4", 3]],
			minlevel : 3,
			description : desc([
				"I no longer need to eat, drink, or breathe",
				"When I damage a creature with an attack, I can change the damage type to necrotic",
				"While I'm in my Form of Dread, I can roll one extra damage die for this necrotic damage"
			])
		},
		"subclassfeature10" : {
			name : "Mortal Husk",
			source : [["UA:SP4", 4]],
			minlevel : 10,
			description : desc([
				"I have resistance to necrotic damage, or immunity while I'm in my Form of Dread",
				"When I'm reduced to 0 HP, I can cause my body to explode and I revive with 1 HP after",
				"Each creature of my choice within 30 ft takes 2d10 + my warlock level necrotic damage",
				"After this, I gain 1 level of exhaustion and must complete 1d4 long rests to do so again"
			]),
			additional : levels.map(function (n) {
				return n < 10 ? "" : "2d10+" + n + " damage, 1\xD7 per 1d4 long rests"
			}),
			dmgres : [["Necrotic"]],
			savetxt : { immune : ["necrotic (Form of Dread)"] },
			extraLimitedFeatures : [{
				name : "Mortal Husk (revive)",
				usages : 1,
				recovery : "1d4 LR"
			}]
		},
		"subclassfeature14" : {
			name : "Spirit Projection",
			source : [["UA:SP4", 4]],
			minlevel : 14,
			description : desc([
				"As an action, I can project my spirit from my body, leaving it suspended and unconscious",
				"This lasts 1 hour or until my concentration is broken; Damage and effects affect both",
				"When it ends, I can have my spirit return to my body or my body teleport to my spirit",
				"My spirit has my abilities, but no gear; While projecting I gain the following benefits:",
				" \u2022 My spirit and body gain resistance to bludgeoning, piercing, and slashing damage",
				" \u2022 My conjuration/necromancy spells need no verbal, somatic, non-costly material comp.",
				" \u2022 I gain a flying speed equal to my walking speed and can hover",
				" \u2022 Move through creatures/objects as difficult terrain; 1d10 force damage if end turn in",
				" \u2022 While in my Form of Dread, once per turns when I deal necrotic damage, I can heal",
				"   I regain hit points equal to half the amount of necrotic damage dealt"
			]),
			usages : 1,
			recovery : "long rest",
			action : [["action", ""]]
		}
	}
});
