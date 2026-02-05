var iFileName = "pub_20210518_VRGtR.js";
RequiredSheetVersion("14.0.5-beta");
// This file adds all the player-material from Van Richten's Guide to Ravenloft to MPMB's Character Record Sheet

// Define the source
SourceList.VRGtR = {
	name : "Van Richten's Guide to Ravenloft",
	abbreviation : "VRGtR",
	group : "Campaign Sourcebooks",
	campaignSetting : "Ravenloft",
	url : "https://dnd.wizards.com/products/van-richtens-guide-ravenloft",
	date : "2021/05/18"
};

// Races
RaceList["dhampir"] = {
	regExpSearch : /dhampir/i,
	name : "Dhampir",
	source : [["VRGtR", 17]],
	plural : "Dhampirs",
	size : 3,
	speed : {
		walk : { spd : 35, enc : 25 }
	},
	scoresGeneric : true,
	trait : "Dhampir" + (typePF ? "\n " : "\t") +
	"\u2022 Deathless Nature: I don't need to breathe." +
	"\n \u2022 Spider Climb: Climbing speed equal to walking speed. At 3rd level, I can move up, down, and across vertical surfaces and upside down along ceilings, while leaving my hands free." +
	"\n \u2022 Vampiric Bite: Uses Constitution and has adv. on the attack roll if I'm at or below half HP. My Proficiency Bonus per long rest, when I hit a creature other than a construct or undead, I can empower myself. I either regain HP or gain a bonus on my next ability check or attack roll. The bonus is equal to the piercing damage dealt.",
	features : {
		"spider climb" : { // So it doesn't interfere with inherited speeds by useFromPreviousRace
			name : "Spider Climb",
			minlevel : 1,
			speed : { climb : { spd : "walk", enc : "walk" } }
		}
	},
	vision : [["Darkvision", 60]],
	weaponOptions : [{
		regExpSearch : /^(?=.*vampiric)(?=.*bite).*$/i,
		name : "Vampiric Bite",
		source : [["VRGtR", 17]],
		ability : 3,
		type : "Simple",
		damage : [1, 4, "piercing"],
		range : "Melee",
		description : "Adv. while at or below half HP; Can empower myself on hit",
		isAlwaysProf : true,
		abilitytodamage : true,
		monkweapon : true,
		selectNow : true
	}],
	extraLimitedFeatures : [{
		name : "Vampiric Bite",
		additional : "empower myself",
		usages : "Proficiency bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus')",
		recovery : "long rest"
	}],
	useFromPreviousRace : {
		message : "If you replace a race with the Dhampir lineage, you can keep the following elements of that race:"+
		desc(["its size,",
		"any skill proficiencies you gained from it,",
		"any climbing, flying, or swimming speed you gained from it, and",
		"any languages it knows."], "\n   \u2022 ")+
		"\n\nIf you don't keep any of those elements or you choose this lineage at character creation, you instead:"+
		desc(["are size Medium or Small (your choice),",
		"gain proficiency in two skills of your choice, and",
		"can speak, read, and write Common and one other language that you and your DM agree is appropriate."], "\n   \u2022 "),
		defaultTraits : {
			size : [3, 4],
			skillstxt : "Choose any two skills"
		},
		gainTraits : ["size", "age", "height", "weight", "heightMetric", "weightMetric", "languageProfs", "skillstxt", "skills", "speed.climb", "speed.fly", "speed.swim"],
		updateName : "prefix" // e.g. "Hill Dwarf Dhampir"
	}
};
RaceList["hexblood"] = {
	regExpSearch : /hexblood/i,
	name : "Hexblood",
	source : [["VRGtR", 18]],
	plural : "Hexbloods",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	scoresGeneric : true,
	trait : "Hexblood" + (typePF ? "\n " : "\t") +
	"\u2022 Fey: My creature type is fey, rather than humanoid." +
	"\n \u2022 Eerie Token: As a bonus action once per long rest, I can harmlessly remove a lock of my hair, one of my nails or teeth and imbue this token with magic until I finish a long rest. While the token is imbued in this way, I can telepathically speak to a creature holding it or see and hear around it. See the Notes page for more information." +
	"\n \u2022 Hex Magic: I known Disguise Self and Hex. I can cast each spell once per long rest without using a spell slot, or by using a spell slot as normal.",
	toNotesPage : [{
		name : "Hexblood's Eerie Token",
		note : ["As a bonus action, I can harmlessly remove a lock of my hair, one of my nails, or one of my teeth. This token is imbued with magic until I finish a long rest. While the token is imbued in this way, I can take these actions:"+
		"\n\u2022 Telepathic Message",
		"As an action, I can send a telepathic message to the creature holding or carrying the token, as long as I'm within 10 miles of it. The message can contain up to twenty-five words."+
		"\n\u2022 Remote Viewing",
		"If I'm within 10 miles of the token, I can enter a trance as an action. The trance lasts for 1 minute, but it ends early if I dismiss it (no action required) or I'm incapacitated. During this trance, I can see and hear from the token as if I were located where it is. While I'm using my senses at the token's location, I'm blinded and deafened in regard to my own surroundings. When the trance ends, the token is harmlessly destroyed.",
		"\nOnce I create a token using this feature, I can't do so again until I finish a long rest, at which point my missing part regrows."]
	}],
	vision : [["Darkvision", 60]],
	action : [["bonus action", "Eerie Token (create)"], ["action", "Eerie Token (use)"]],
	extraLimitedFeatures : [{
		name : "Eerie Token",
		usages : 1,
		recovery : "long rest"
	}],
	spellcastingAbility : [4, 5, 6],
	features : {
		"hex magic" : {
			name : "Hex Magic",
			minlevel : 1,
			spellcastingBonus : [{
				name : "Hex Magic",
				spells : ["disguise self", "hex"],
				selection : ["disguise self", "hex"],
				firstCol : 'oncelr+markedbox',
				times : 2,
				allowUpCasting : true,
			}],
		}
	},
	useFromPreviousRace : {
		message : "If you replace a race with the Hexblood lineage, you can keep the following elements of that race:"+
		desc(["its size,",
		"any skill proficiencies you gained from it,",
		"any climbing, flying, or swimming speed you gained from it, and",
		"any languages it knows."], "\n   \u2022 ")+
		"\n\nIf you don't keep any of those elements or you choose this lineage at character creation, you instead:"+
		desc(["are size Medium or Small (your choice),",
		"gain proficiency in two skills of your choice, and",
		"can speak, read, and write Common and one other language that you and your DM agree is appropriate."], "\n   \u2022 "),
		defaultTraits : {
			size : [3, 4],
			skillstxt : "Choose any two skills"
		},
		gainTraits : ["size", "age", "height", "weight", "heightMetric", "weightMetric", "languageProfs", "skillstxt", "skills", "speed.climb", "speed.fly", "speed.swim"],
		updateName : "prefix" // e.g. "Tiefling Hexblood"
	}
};
RaceList["reborn"] = {
	regExpSearch : /reborn/i,
	name : "Reborn",
	source : [["VRGtR", 21]],
	plural : "Reborns",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	scoresGeneric : true,
	trait : "Reborn" +
	"\n \u2022 Deathless Nature: I don't need to sleep, eat, drink, or breathe. I have adv. on saves vs. disease, poison, and death saves. I have resistance to poison damage. Magic can't put me to sleep and I can finish a long rest in 4 hours if I spend it in an inactive, motionless state." +
	"\n \u2022 Knowledge from a Past Life: When I make an ability check that uses a skill, I can add +1d6 to the roll after seeing the d20 result. I can do this a number of times equal to my Proficiency Bonus and regain all expended uses when I finish a long rest.",
	dmgres : ["Poison"],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["disease", "poison", "death saves"],
	},
	extraLimitedFeatures : [{
		name : "Knowledge from a Past Life",
		usages : "Proficiency bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus')",
		recovery : "long rest"
	}],
	useFromPreviousRace : {
		message : "If you replace a race with the Reborn lineage, you can keep the following elements of that race:"+
		desc(["its size,",
		"any skill proficiencies you gained from it,",
		"any climbing, flying, or swimming speed you gained from it, and",
		"any languages it knows."], "\n   \u2022 ")+
		"\n\nIf you don't keep any of those elements or you choose this lineage at character creation, you instead:"+
		desc(["are size Medium or Small (your choice),",
		"gain proficiency in two skills of your choice, and",
		"can speak, read, and write Common and one other language that you and your DM agree is appropriate."], "\n   \u2022 "),
		defaultTraits : {
			size : [3, 4],
			skillstxt : "Choose any two skills"
		},
		gainTraits : ["size", "age", "height", "weight", "heightMetric", "weightMetric", "languageProfs", "skillstxt", "skills", "speed.climb", "speed.fly", "speed.swim"],
		updateName : "suffix" // e.g. "Reborn Human"
	}
};

// Subclasses
AddSubClass("bard", "college of spirits",{
	regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*spirits?).*$/i,
	subname : "College of Spirits",
	source : [["VRGtR", 28]],
	features : {
		"subclassfeature3" : {
			name : "Guiding Whispers",
			source : [["VRGtR", 28]],
			minlevel : 3,
			description : desc([
				"I learn the Guidance cantrip and can cast it with a range of 60 ft"
			]),
			spellcastingBonus : [{
				name : "Guiding Whispers",
				spells : ["guidance"],
				selection : ["guidance"],
			}],
			spellChanges : {
				"guidance" : {
					range : "60 ft",
					changes : "I can cast Guidance with a range of 60 ft."
				}
			}
		},
		"subclassfeature3.1" : {
			name : "Spiritual Focus",
			source : [["VRGtR", 28]],
			minlevel : 3,
			description : " [only for bard spells]" + desc([
				"I can use a candle, crystal ball, skull, spirit board, or tarokka deck as a spellcasting focus"
			])
		},
		"subclassfeature3.2" : {
			name : "Tales from Beyond",
			source : [["VRGtR", 28]],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can expend a bardic inspiration die to roll on the Spirit Tales table",
				"I retain the rolled tale in my mind until I bestow its effects or finish a short or long rest",
				"I can only retain one tale at a time; I need to hold a spiritual focus to roll on the table",
				"As an action, I can choose a creature I see in 30 ft or myself to bestow the tale's effect",
				"The tales use my spell save DC; See the Notes page for the Spirit Tales table"
			]),
			action : [["bonus action", " (roll on table)"], ["action", " (use effect)"]],
			toNotesPage : [{
				name : "Spirit Tales Table",
				note : desc([
					"As a bonus action while I'm holding my spiritual focus, I can reach out to spirits who tell their tales through me. I expend one use of my Bardic Inspiration and roll on the table below using my Bardic Inspiration die to determine the tale. I retain the tale in mind until I bestow the tale's effect or finish a short or long rest.",
					"I can retain only one of these tales in mind at a time, and rolling on the table immediately ends the effect of the previous tale.",
					"As an action, I can choose myself or one creature I can see within 30 ft to be the target of the tale's effect. If the tale requires a saving throw, the DC equals my spell save DC.",
					"\nRoll " + (typePF ? "" : " ") + "Tale"
				])+
				 desc([
					"  1    Tale of the Clever Animal: For the next 10 minutes, whenever the target makes an Intelligence, a Wisdom, or a Charisma check, the target can roll my Bardic Inspiration die immediately after rolling the d20 and add it to the check.",
					"  2    Tale of the Renowned Duelist: I make a melee spell attack against the target. On a hit, the target takes force damage equal to two rolls of my Bardic Inspiration die + my Charisma modifier.",
					"  3    Tale of the Beloved Friends: The target and another creature of its choice it can see within 5 ft of it gains temporary hit points equal to a roll of my Bardic Inspiration die + my Charisma modifier.",
					"  4    Tale of the Runaway: The target can immediately use its reaction to teleport up to 30 ft to an unoccupied space it can see. When the target teleports, it can choose a number of creatures it can see within 30 ft of it up to my Charisma modifier (minimum of 0) to immediately use the same reaction.",
					"  5    Tale of the Avenger: For 1 minute, any creature that hits the target with a melee attack takes force damage equal to a roll of my Bardic Inspiration die.",
					"  6    Tale of the Traveler: The target gains temporary hit points equal to a roll of my Bardic Inspiration die + my bard level. While it has these temporary hit points, the target's walking speed increases by 10 ft and it gains a +1 bonus to its AC.",
					"  7    Tale of the Beguiler: The target must succeed on a Wisdom saving throw or take psychic damage equal to two rolls of my Bardic Inspiration die, and the target is incapacitated until the end of its next turn.",
					"  8    Tale of the Phantom: The target becomes invisible until the end of its next turn or until it hits a creature with an attack. If the target hits a creature with an attack during this invisibility, the creature it hits takes necrotic damage equal to a roll of my Bardic Inspiration die and is frightened of the target until the end of the frightened creature's next turn.",
					"  9    Tale of the Brute: Each creature of the target's choice it can see within 30 ft of it must make a Strength saving throw. On a failed save, a creature takes thunder damage equal to three rolls of my Bardic Inspiration die and is knocked prone. A creature that succeeds on its saving throw takes half as much damage and isn't knocked prone.",
					" 10    Tale of the Dragon: The target spews fire from the mouth in a 30-ft cone. Each creature in that area must make a Dexterity saving throw, taking fire damage equal to four rolls of my Bardic Inspiration die on a failed save, or half as much damage on a successful one.",
					" 11    Tale of the Angel: The target regains hit points equal to two rolls of my Bardic Inspiration die + my Charisma modifier, and I end one condition from the following list affecting the target: blinded, deafened, paralyzed, petrified, or poisoned.",
					" 12    Tale of the Mind-Bender: I evoke an incomprehensible fable from an otherworldly being. The target must succeed on an Intelligence saving throw or take psychic damage equal to three rolls of my Bardic Inspiration die and be stunned until the end of its next turn."
				], "\n")
			}]
		},
		"subclassfeature6" : {
			name : "Spiritual Focus: Improve spells",
			source : [["VRGtR", 28]],
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
					'When I cast a bard spell, I can use my spiritual focus to add 1d6 to one damage roll or roll to restore hit points.\n   Going by rules as written (RAW), the spiritual focus has to be used as a spellcasting focus for this bonus to be added. This means that it can only be used on spells with a non-costly material component. Most DMs will forgo this technicality and that is why this sheet will add the 1d6 to any damage/healing spell by default. You can enable to use the stricter rules as written with the "Choose Feature" button on the second page.',
					1
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
			source : [["VRGtR", 29]],
			minlevel : 6,
			description : desc([
				"Using my spiritual focus, I can conduct a hour-long ritual to channel spirit during a rest",
				"The number of willing participants, me included, can be up to my Proficiency Bonus",
				"At the end, I learn a divination or necromancy spell of my choice until I start a long rest",
				"The spell can't be higher level than the number of participants and of a level I can cast"
			]),
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : [{
				name : "Spirit Session",
				school : ["Div", "Necro"],
				firstCol : "SS"
			}]
		},
		"subclassfeature14" : {
			name : "Mystical Connection",
			source : [["VRGtR", 29]],
			minlevel : 14,
			description : desc([
				"For Tales from Beyond, I now roll my bardic inspiration die twice and " + (typePF ? "choose" : "select") + " which to use",
				"If I roll the same number on both dice, I can instead choose any effect on the table"
			])
		}
	}
});
AddSubClass("warlock", "the undead",{
	regExpSearch : /^(?=.*undead)(?=.*warlock).*$/i,
	subname : "the Undead",
	source : [["VRGtR", 30]],
	spellcastingExtra : ["bane", "false life", "blindness/deafness", "phantasmal force", "phantom steed", "speak with dead", "death ward", "greater invisibility", "antilife shell", "cloudkill"],
	features : {
		"subclassfeature1" : {
			name : "Form of Dread",
			source : [["VRGtR", 30]],
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
			source : [["VRGtR", 30]],
			minlevel : 6,
			description : desc([
				"I no longer need to eat, drink, or breathe",
				"Once per turn if I damage a creature with an attack, I can change its type to necrotic",
				"While I'm in my Form of Dread, I can roll one extra damage die for this necrotic damage"
			])
		},
		"subclassfeature10" : {
			name : "Necrotic Husk",
			source : [["VRGtR", 31]],
			minlevel : 10,
			description : desc([
				"I have resistance to necrotic damage, or immunity while I'm in my Form of Dread",
				"As a reaction when reduced to 0 HP, I can drop to 1 HP instead and erupt with energy",
				"Each creature of my choice within 30 ft takes 2d10 + my warlock level necrotic damage",
				"After this, I gain 1 level of exhaustion and must complete 1d4 long rests to do so again"
			]),
			additional : levels.map(function (n) {
				return n < 10 ? "" : "2d10+" + n + " damage, 1\xD7 per 1d4 long rests"
			}),
			action : [["reaction", ""]],
			dmgres : [["Necrotic"]],
			savetxt : { immune : ["necrotic (Form of Dread)"] },
			extraLimitedFeatures : [{
				name : "Necrotic Husk (revive)",
				usages : 1,
				recovery : "1d4 LR"
			}]
		},
		"subclassfeature14" : {
			name : "Spirit Projection",
			source : [["VRGtR", 31]],
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

// Backgrounds and Background Features
BackgroundFeatureList["inheritor"] = {
	description : "I'm the clear inheritor of a famed legacy, my ancestor or mentor. I've inherited a token that marks me as their inheritor. Revealing my legacy lets me swiftly learn the local opinion of my predecessor, if they heard of it. As rumors spread swiftly, locals will consider me either a hero or a threat. Heroes are welcomed, while threats are encouraged to leave.",
	source : [["VRGtR", 31], ["ALbackground", 0]]
};
BackgroundFeatureList["mist wanderer"] = {
	description : "The Mists whisper to me and guide me through. I immediately know if an object I'm touching is a Mist talisman, a nonmagical object that resonates with the domain where it originated, allowing the creature holding it to find a path to that domain. I recognize where the talisman originates from if I have been to its domain of origin.",
	source : [["VRGtR", 31], ["ALbackground", 0]]
};
BackgroundFeatureList["spirit medium"] = {
	description : "A fateful experience made me believe I'm aligned with spirits and can serve as a conduit for their insights and goals. I have advantage on Arcana and Religion check to remember or research information about spirits and the afterlife. I have and am proficient with a device I made for communing with otherworldly forces (e.g. a spirit-board or tarokka deck).",
	source : [["VRGtR", 31], ["ALbackground", 0]]
};
BackgroundFeatureList["trauma survivor"] = {
	description : "I faced something specifically traumatic and survived. Now people view me as an expert on it and can help others make it through. I'm aware of nonmagical recovery techniques, common resources, and misinformation. I know how to speak to sympathetic doctors, clergy, and leaders to can convince them to shelter one other than myself up to one month.",
	source : [["VRGtR", 32], ["ALbackground", 0]]
};
BackgroundFeatureList["traveler"] = {
	description : "I come from another place that others couldn't begin to understand. I can find a spot to hide, rest, or recuperate among sympathetic trading caravans, itinerant families, or displaced groups, so long as I present no visible danger. Such groups will hide me, but won't risk their lives for me. I can tell if an object I can see and touch is from my homeland.",
	source : [["VRGtR", 32], ["ALbackground", 0]]
};
BackgroundList["haunted one"] = { // Reprint from Curse of Strahd, but re-define because of new "horror" background traits options
	regExpSearch : /haunted.one/i,
	name : "Haunted One",
	source : [["CoS", 209], ["VRGtR", 34], ["ALbackground", 0]],
	skillstxt : "Choose two from Arcana, Investigation, Religion, and Survival",
	languageProfs : [2],
	gold : 0.1,
	equipleft : [
		["Chest, with:", "", 25],
		["Crowbar", "", 5],
		["Hammer", "", 3],
		["Wooden Stakes", 3, 1],
		["Holy symbol", "", 1],
		["Holy water, flasks of", "", 1],
		["Manacles", "", 6],
		["Steel Mirror", "", 0.5],
		["Oil, flasks of", "", 1],
		["Tinderbox", "", 1],
		["Torch", 3, 1]
	],
	equipright : [
		["Common clothes", "", 3],
		["Trinket of special significance", "", ""]
	],
	feature : "Heart of Darkness",
	trait : [
		"I don't run from evil. Evil runs from me.",
		"I like to read and memorize poetry. It keeps me calm and brings me fleeting moments of happiness.",
		"I spend money freely and live life to the fullest, knowing that tomorrow I might die.",
		"I live for the thrill of the hunt.",
		"I don't talk about the thing that torments me. I'd rather not burden others with my curse.",
		"I expect danger around every corner.",
		"I refuse to become a victim, and I will not allow others to be victimized.",
		"I put no trust in divine beings.",
		"I had an encounter that I believe gives me a special affinity with a supernatural creature or event.",
		"A signature piece of clothing or distinct weapon serves as an emblem of who I am.",
		"I never accept that I'm out of my depth.",
		"I must know the answer to every secret. No door remains unopened in my presence.",
		"I let people underestimate me, revealing my full competency only to those close to me.",
		"I compulsively seek to collect trophies of my travels and victories.",
		"It doesn't matter if the whole world's against me. I'll always do what I think is right.",
		"I have morbid interests and a macabre aesthetic.",
		"I have a personal ritual, mantra, or relaxation method I use to deal with stress.",
		"Nothing is more important than life, and I never leave anyone in danger.",
		"I'm quick to jump to extreme solutions. Why risk a lesser option not working?",
		"I'm easily startled, but I'm not a coward."
	],
	ideal : [
		["Sacrifice", "Sacrifice: I try to help those in need, no matter what the personal cost. (Good)"],
		["Desperation", "Desperation: I'll stop the spirits that haunt me or die trying. (Any)"],
		["Cleansing", "Cleansing: I kill monsters to make the world a safer place, and to exorcise my own demons. (Good)"],
		["Vigilante", "Vigilante: I have a dark calling that puts me above the law. (Chaotic)"],
		["Preparation", "Preparation: I like to know my enemy's capabilities and weaknesses before rushing into battle. (Lawful)"],
		["Destruction", "Destruction: I'm a monster that destroys other monsters, and anything else that gets in my way. (Evil)"],
		["Adrenaline", "Adrenaline: I've experienced such strangeness that now I feel alive only in extreme situations."],
		["Balance", "Balance: I strive to counter the deeds of someone for whom I feel responsible."],
		["Bound", "Bound: I've wronged someone and must work their will to avoid their curse."],
		["Escape", "Escape: I believe there is something beyond the world I know, and I need to find it."],
		["Legacy", "Legacy: I must do something great so that I'm remembered, and my time is running out."],
		["Misdirection", "Misdirection: I work vigorously to keep others from realizing my flaws or misdeeds."],
		["Obsession", "Obsession: I've lived this way for so long that I can't imagine another way."],
		["Obligation", "Obligation: I owe it to my people, faith, family, or teacher to continue a vaunted legacy."],
		["Promise", "Promise: My life is no longer my own. I must fulfill the dream of someone who's gone."],
		["Revelation", "Revelation: I need to know what lies beyond the mysteries of death, the world, or the Mists."],
		["Sanctuary", "Sanctuary: I know the forces at work in the world and strive to create islands apart from them."],
		["Truth", "Truth: I care about the truth above all else, even if it doesn't benefit anyone."]
	],
	bond : [
		"I keep my thoughts and discoveries in a journal. My journal is my legacy.",
		"I would sacrifice my life and my soul to protect the innocent.",
		"My torment drove away the person I love. I strive to win back the love I've lost.",
		"A terrible guilt consumes me. I hope that I can find redemption through my actions.",
		"There's evil in me, I can feel it. It must never be set free.",
		"I have a child to protect. I must make the world a safer place for him (or her).",
		"I desperately need to get back to someone or someplace, but I lost them in the Mists.",
		"Everything I do is in the service of a powerful master, one I must keep a secret from everyone.",
		"I owe much to my vanished mentor. I seek to continue their work even as I search to find them.",
		"I've seen great darkness, and I'm committed to being a light against it\u2014the light of all lights.",
		"Someone I love has become a monster, murderer, or other threat. It's up to me to redeem them.",
		"The world has been convinced of a terrible lie. It's up to me to reveal the truth.",
		"I deeply miss someone and am quick to adopt people who remind me of them.",
		"A great evil dwells within me. I will fight against it and the world's other evils for as long as I can.",
		"I'm desperately seeking a cure to an affliction or a curse, either for someone close to me for myself.",
		"Spirits are drawn to me. I do all I can to help them find peace.",
		"I use my cunning mind to solve mysteries and find justice for those who've been wronged.",
		"I lost someone I care about, but I still see them in guilty visions, recurring dreams, or as a spirit."
	],
	flaw : [
		"I have certain rituals that I must follow every day. I can never break them.",
		"I assume the worst in people.",
		"I feel no compassion for the dead. They're the lucky ones.",
		"I have an addiction.",
		"I am a purveyor of doom and gloom who lives in a world without hope.",
		"I talk to spirits that no one else can see.",
		"I believe doom follows me and that anyone who gets close to me will face a tragic end.",
		"I'm convinced something is after me, appearing in mirrors, dreams, and places where no one could.",
		"I'm especially superstitious and live life seeking to avoid bad luck, wicked spirits, or the Mists.",
		"I've done unspeakable evil and will do anything to prevent others from finding out.",
		"I am exceptionally credulous and believe any story or legend immediately.",
		"I'm a skeptic and don't believe in the power of rituals, religion, superstition, or spirits.",
		"I know my future is written and that anything I do will lead to a prophesied end.",
		"I need to find the best in everyone and everything, even when that means denying obvious malice.",
		"I've seen the evil of a type of place\u2014like forests, cities, or graveyards\u2014and resist going there.",
		"I'm exceptionally cautious, planning laboriously and devising countless contingencies.",
		"I have a reputation for defeating a great evil, but that's a lie and the wicked force knows.",
		"I know the ends always justify the means and am quick to make sacrifices to attain my goals."
	],
	extra : [
		"Select a Harrowing Event",
		"Monster spared my life",
		"Born under a dark star",
		"Haunted by an apparition",
		"Dark arts in the family",
		"An oni took my sibling",
		"Memory of cured lycanthropy",
		"Raised by a hag",
		"Studied an eldritch tome",
		"Formerly possessed by a fiend",
		"Avenged a murder"
	]
};
// [dupl_start] reprints from Curse of Strahd
if (!SourceList.CoS) {
	PacksList.monsterhunter = {
		name : "Monster hunter's pack (33 gp)",
		source : [["CoS", 209], ["VRGtR", 34]],
		items : [
			["Chest, with:", "", 25],
			["Crowbar", "", 5],
			["Hammer", "", 3],
			["Wooden stake", 3, 1],
			["Amulet holy symbol", "", ""],
			["Holy water, flasks of", 1, 1],
			["Manacles", "", 6],
			["Steel mirror", "", 0.5],
			["Oil, flasks of", 1, 1],
			["Tinderbox", "", 1],
			["Torches", 3, 1]
		]
	};
	BackgroundFeatureList["heart of darkness"] = {
		description : "Those who look into my eyes can see that I have faced unimaginable horror and that I am no stranger to darkness. Though they might fear me, commoners will extend me every courtesy and do their utmost to help. Unless I have shown myself to be a danger to them, they will even take up arms to fight with me, should I find myself facing an enemy alone.",
		source : [["CoS", 209], ["VRGtR", 34], ["ALbackground", 0]]
	};
} // dupl_end
BackgroundList["investigator-vrgtr"] = {
	regExpSearch : /^((?=.*investigator)(?=.*(VRGtR|Richten|Ravenloft))|private eye).*$/i,
	name : "Investigator (VRGtR)",
	source : [["VRGtR", 35], ["ALbackground", 0]],
	skillstxt : "Choose two from Insight, Investigation, and Perception",
	toolProfs : [["Disguise kit", 1], ["Thieves' tools", "Dex"]],
	gold : 10,
	equipleft : [
		["Magnifying glass", "", ""],
		["Evidence from a past case (horror trinket)", "", ""],
	],
	equipright : [
		["Common clothes", "", 3],
		["Belt Pouch (with coins)", "", ""]
	],
	feature : "Official Inquiry",
	trait : [
		"I had an encounter that I believe gives me a special affinity with a supernatural creature or event.",
		"A signature piece of clothing or distinct weapon serves as an emblem of who I am.",
		"I never accept that I'm out of my depth.",
		"I must know the answer to every secret. No door remains unopened in my presence.",
		"I let people underestimate me, revealing my full competency only to those close to me.",
		"I compulsively seek to collect trophies of my travels and victories.",
		"It doesn't matter if the whole world's against me. I'll always do what I think is right.",
		"I have morbid interests and a macabre aesthetic.",
		"I have a personal ritual, mantra, or relaxation method I use to deal with stress.",
		"Nothing is more important than life, and I never leave anyone in danger.",
		"I'm quick to jump to extreme solutions. Why risk a lesser option not working?",
		"I'm easily startled, but I'm not a coward."
	],
	ideal : [
		["Adrenaline", "Adrenaline: I've experienced such strangeness that now I feel alive only in extreme situations."],
		["Balance", "Balance: I strive to counter the deeds of someone for whom I feel responsible."],
		["Bound", "Bound: I've wronged someone and must work their will to avoid their curse."],
		["Escape", "Escape: I believe there is something beyond the world I know, and I need to find it."],
		["Legacy", "Legacy: I must do something great so that I'm remembered, and my time is running out."],
		["Misdirection", "Misdirection: I work vigorously to keep others from realizing my flaws or misdeeds."],
		["Obsession", "Obsession: I've lived this way for so long that I can't imagine another way."],
		["Obligation", "Obligation: I owe it to my people, faith, family, or teacher to continue a vaunted legacy."],
		["Promise", "Promise: My life is no longer my own. I must fulfill the dream of someone who's gone."],
		["Revelation", "Revelation: I need to know what lies beyond the mysteries of death, the world, or the Mists."],
		["Sanctuary", "Sanctuary: I know the forces at work in the world and strive to create islands apart from them."],
		["Truth", "Truth: I care about the truth above all else, even if it doesn't benefit anyone."]
	],
	bond : [
		"I desperately need to get back to someone or someplace, but I lost them in the Mists.",
		"Everything I do is in the service of a powerful master, one I must keep a secret from everyone.",
		"I owe much to my vanished mentor. I seek to continue their work even as I search to find them.",
		"I've seen great darkness, and I'm committed to being a light against it\u2014the light of all lights.",
		"Someone I love has become a monster, murderer, or other threat. It's up to me to redeem them.",
		"The world has been convinced of a terrible lie. It's up to me to reveal the truth.",
		"I deeply miss someone and am quick to adopt people who remind me of them.",
		"A great evil dwells within me. I will fight against it and the world's other evils for as long as I can.",
		"I'm desperately seeking a cure to an affliction or a curse, either for someone close to me for myself.",
		"Spirits are drawn to me. I do all I can to help them find peace.",
		"I use my cunning mind to solve mysteries and find justice for those who've been wronged.",
		"I lost someone I care about, but I still see them in guilty visions, recurring dreams, or as a spirit."
	],
	flaw : [
		"I believe doom follows me and that anyone who gets close to me will face a tragic end.",
		"I'm convinced something is after me, appearing in mirrors, dreams, and places where no one could.",
		"I'm especially superstitious and live life seeking to avoid bad luck, wicked spirits, or the Mists.",
		"I've done unspeakable evil and will do anything to prevent others from finding out.",
		"I am exceptionally credulous and believe any story or legend immediately.",
		"I'm a skeptic and don't believe in the power of rituals, religion, superstition, or spirits.",
		"I know my future is written and that anything I do will lead to a prophesied end.",
		"I need to find the best in everyone and everything, even when that means denying obvious malice.",
		"I've seen the evil of a type of place\u2014like forests, cities, or graveyards\u2014and resist going there.",
		"I'm exceptionally cautious, planning laboriously and devising countless contingencies.",
		"I have a reputation for defeating a great evil, but that's a lie and the wicked force knows.",
		"I know the ends always justify the means and am quick to make sacrifices to attain my goals."
	],
	extra : [
		"Select a Path to Mystery",
		"Proved friend's innocence",
		"My memory loss",
		"Helped spirit find peace",
		"Uncovered magical hoax",
		"Fugitive after wrongful convicion",
		"Tracking supernatural phenomena",
		"Tried to expose mysterious cabal",
		"Investigate unsolved crimes"
	]
};
BackgroundFeatureList["official inquiry"] = {
	description : "Through a combination of fast-talking, determination, and official-looking documentation, I can gain access to a place or an individual related to a crime I'm investigating. Those who aren't involved in my investigation avoid impeding me or pass along my requests. Local law enforcement has firm opinions, viewing me as either a nuisance or one of their own.",
	source : [["VRGtR", 35], ["ALbackground", 0]]
};

// Magic Items
MagicItemsList["harkon's bite"] = {
	name : "Harkon's Bite",
	source : [["VRGtR", 137]],
	type : "wondrous item",
	rarity : "uncommon",
	attunement : true,
	description : "This necklace with a dire wolf tooth gives me a +1 on checks and saves. Curse: I can't remove it once I'm attuned to it. If I don or remove the necklace, even if I'm not attuned, I'm afflicted with werewolf lycanthropy (MM 211). This lasts until the dawn after the next full moon, unless I'm still wearing the necklace at dawn.",
	descriptionFull : "A dire wolf tooth dangles from this simple cord necklace. While you wear it, the necklace grants you a +1 bonus to ability checks and saving throws."+
	"\n   " + toUni("Curse") + ". Attuning to Harkon's Bite curses you until either Harkon Lukas removes the necklace from you or you are targeted by a remove curse spell or similar magic. As long as you remain cursed, you cannot remove the necklace."+
	"\n   Upon donning or removing the necklace, whether you are attuned to it or not, you are afflicted with werewolf lycanthropy as detailed in the Monster Manual. The curse lasts until the dawn after the next full moon. If you are still wearing the necklace at this time, you are afflicted with the lycanthropy again.",
	addMod : [
		{ type : "save", field : "all", mod : 1, text : "I gain a +1 bonus on all my saving throws." },
		{ type : "skill", field : "all", mod : 1, text : "I gain a +1 bonus on all my ability checks." },
		{ type : "skill", field : "Init", mod : 1, text : "I gain a +1 bonus on all my ability checks." }
	]
}
var VRGtR_nepentheFullDescription = [
	"You gain a +3 bonus to attack and damage rolls made with this magic weapon. When you hit a fiend or an undead with it, that creature takes an extra 2d10 radiant damage.",
	"While you hold the drawn sword, it creates an aura in a 10-foot radius around you. You and all creatures friendly to you in the aura have advantage on saving throws against spells and other magical effects. If you have 17 or more levels in the paladin class, the radius of the aura increases to 30 feet.",
	">>Sentience<<. Nepenthe is a sentient, neutral evil weapon with an Intelligence of 10, a Wisdom of 8, and a Charisma of 18. It has hearing and darkvision out to a range of 60 feet. It can read and understand Elvish. It can also speak Elvish, but only through the voice of its wielder, with whom the sword can communicate telepathically.",
	">>Personality<<. In its lifetime, the sword has beheaded thousands of criminals, not all of whom were guilty of the crimes for which they were convicted. The sword cannot distinguish the guilty from the innocent. With each beheading, it hungers for more justice and blood. The sword is corrupt and irredeemable."
]
MagicItemsList["nepenthe"] = {
	name : "Nepenthe",
	source : [["VRGtR", 137]],
	type : "weapon (any sword)",
	rarity : "legendary",
	magicItemTable : "I",
	attunement : true,
	prerequisite : "Requires attunement by a paladin",
	prereqeval : function (v) { return classes.known.paladin ? true : false; },
	description : "This sentient holy avenger longsword gives me a +3 bonus to attack and damage rolls. It does +2d10 radiant damage against fiends and undead. While holding the drawn sword, I have a 10-ft radius aura (30-ft if level 17 paladin) that grants me and my allies adv. on saves against spells and magical effects.",
	descriptionFull : VRGtR_nepentheFullDescription.join("\n   ").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
	toNotesPage : [{
		name : "Features",
		note : desc(VRGtR_nepentheFullDescription).replace(/>>(.*?)<</g, function(a, match) { return match.toUpperCase(); }).replace(/(to|around) you/ig, "$1 me").replace(/you /ig, "I ") + "\n\n" + sentientItemConflictTxt
	}],
	weaponOptions : [{
		baseWeapon : "longsword",
		regExpSearch : /nepenthe/i,
		name : "Nepenthe",
		source : [["VRGtR", 137]],
		description : "Versatile (1d10); +2d10 radiant damage vs. fiends and undead",
		modifiers : [3, 3],
		selectNow : true
	}],
	savetxt : { adv_vs : ["spells", "magical effects"] },
	choices : ["Paladin level 1-16 (10-ft aura)", "Paladin level 17+ (30-ft aura)"],
	selfChoosing : function () {
		return !classes.known.paladin ? "" : classes.known.paladin.level < 17 ? "paladin level 1-16 (10-ft aura)" : "paladin level 17+ (30-ft aura)";
	},
	"paladin level 1-16 (10-ft aura)" : {
		name : "Nepenthe\u200A",
		description : "This sentient holy avenger longsword gives me a +3 bonus to attack and damage rolls made with it. It does +2d10 radiant damage against fiends and undead. While holding the drawn sword, I have a 10-ft radius aura that grants me and my allies advantage on saving throws against spells and magical effects."
	},
	"paladin level 17+ (30-ft aura)" : {
		name : "Nepenthe\u200A\u200A",
		description : "This sentient holy avenger longsword gives me a +3 bonus to attack and damage rolls made with it. It does +2d10 radiant damage against fiends and undead. While holding the drawn sword, I have a 30-ft radius aura that grants me and my allies advantage on saving throws against spells and magical effects."
	}
}

/* Dark gift

MagicItemsList["living shadow"] = {
	name : "Living Shadow",
	source : [["VRGtR", 24]],
	type : "dark gift",
	rarity : "",
	description : "I learn the Mage Hand cantrip and require no components to cast it. My Prof Bonus per long rest, I can gain +10 ft reach for one melee attack. The first time I roll a 1 on a d20 after a short rest, my shadow will act up. The next time I or another I can see in 30 ft rolls a d20, I roll a d4. If even: add to roll, odd: subtract.",
	descriptionLong : "I learn the Mage Hand cantrip and require no components to cast it. The hand created by the spell is shadowy but is not bound to your actual shadow. My proficiency bonus per long rest, when I make a melee attack, I can gain +10 ft reach for that attack as my shadow stretches and delivers the attack. The first time after a short rest when I roll a 1 on an attack, check, or save, my shadow will act up. The next time I or a creature I can see within 30 ft rolls for an attack, check, or save, roll a d4. If the number is odd, reduce the total by that number. If it is even, increase the total by that number instead.",
	descriptionFull : "The shadow you cast is animate and ever-present, even when lighting conditions would otherwise prevent it. Your shadow occasionally moves out of sync with you. Sometimes it appears to be undertaking random but mundane tasks, while at other times it acts out your darker impulses, threatening or even attacking other shadows. With effort, you can bend this shadow puppetry to your will.\n"+
	toUni("Grasping Shadow") + ". You learn the mage hand cantrip if you don't already know it, and require no components to cast it. The hand created by the spell is shadowy but is not bound to your actual shadow. Your spellcasting ability for this spell is Intelligence, Wisdom, or Charisma (your choice when you gain this Dark Gift).\n"+
	toUni("Shadow Strike") + ". When you make a melee attack roll, you can increase your reach for that attack by 10 feet. Your shadow stretches and delivers the attack as if it were you. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.\n"+
	toUni("Ominous Will") + ". Immediately after you make an attack roll, an ability check, or a saving throw and roll a 1 on the d20, your shadow exerts a will of its own and might assist or hinder you or those around you. The next time you or a creature within 30 feet of you that you can see makes an attack roll, an ability check, or a saving throw, roll a d4. If the number is odd, reduce the total by the number rolled. If the number is even, increase the total by the number rolled. Once this effect occurs, it can't happen again until you finish a short or long rest.",
	action : [["action", "Unsettling Presence"]],
	extraLimitedFeatures : [{
		name : "Shadow Strike",
		usages : "Proficiency bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus')",
		recovery : "long rest"
	}, {
		name : "Ominous Will",
		usages : 1,
		recovery : "short rest"
	}],
	spellcastingAbility : [4, 5, 6],
	spellcastingBonus : [{
		name : "Grasping Shadow",
		spells : ["mage hand"],
		selection : ["mage hand"],
	}],
	spellChanges : {
		"mage hand" : {
			components : "",
			changes : "Using Grasping Shadow from my Living Shadow dark gift, I can cast Mage Hand without any components. The hand created by the spell is shadowy but is not bound to my actual shadow."
		}
	}
};
FeatsList["living shadow"] = MagicItemsList["living shadow"];

*/