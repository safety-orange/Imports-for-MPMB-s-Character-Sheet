var iFileName = "ua_20191125_Fighter-Rogue-and-Wizard.js";
RequiredSheetVersion("13.1.14");
// This file adds the content from the Unearthed Arcana: Fighter, Rogue, and Wizard (psionics) article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:FRnW"] = {
	name : "Unearthed Arcana: Fighter, Rogue, and Wizard",
	abbreviation : "UA:FRnW",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2019/dnd/downloads/UA-PsychicSoulPsionics.pdf",
	date : "2019/11/25"
};

// Add a subclass for the Fighter
AddSubClass("fighter", "psychic warrior-ua", {
	regExpSearch : /^(?=.*psychic)(?=.*warrior).*$/i,
	subname : "Psychic Warrior",
	source : [["UA:FRnW", 1]],
	fullname : "Psychic Warrior",
	abilitySave : 4,
	features : {
		"subclassfeature3" : {
			name : "Psionic Armament",
			source : [["UA:FRnW", 1]],
			minlevel : 3,
			description : function () {
				var a = desc([
					"When I finish a long rest, I can choose to augment my defenses or strikes until the next",
					" \u2022 As a reaction, augmented defenses allow me to reduce the damage taken by 1d10",
					"   I can reduce the damage taken by myself or by a creature that I can see within 30 ft",
					" \u2022 Once per turn, augmented strikes adds +1d4 psychic damage to my weapon attack"
				]);
				return levels.map(function (n) {
					return n < 10 ? a : a.replace('1d10', '1d12').replace('1d4', '1d6');
				});
			}(),
			additional : levels.map(function (n) {
				return n < 3 ? "" : n < 10 ? "1d10 defense; 1d4 offense" : "1d12 defense; 1d6 offense";
			}),
			action : [["reaction", "Augmented Defenses"]]
		},
		"subclassfeature3.1" : {
			name : "Telekinetic Hand",
			source : [["UA:FRnW", 1]],
			minlevel : 3,
			description : "\n   I learn the Mage Hand cantrip, can cast it without components, and can make it invisible",
			spellcastingBonus : [{
				name : "Telekinetic Hand",
				spells : ["mage hand"],
				selection : ["mage hand"],
				firstCol : "atwill"
			}],
			spellChanges : {
				"mage hand" : {
					components : "",
					description : "Create invisible spectral hand for simple tasks or carry up to 10 lb; 1 a to control; can't have multiples",
					changes : "My Telekinetic Hand class feature allows me to cast Mage Hand without components and I can make the spectral hand invisible."
				}
			}
		},
		"subclassfeature7" : {
			name : "Strength of Mind",
			source : [["UA:FRnW", 1]],
			minlevel : 7,
			description : desc([
				"As a bonus action, I can have a creature I can see within 20 ft make a Strength save",
				"It takes 2d6 + Int mod psychic damage \u0026 moves 15 ft away or towards me (my choice)",
				"If its save succeeds, it takes half damage and isn't moved; DC 8 + Prof Bonus + Int mod"
			]),
			action : [["bonus action", ""]],
			usages : "Intelligence modifier per ",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));",
			recovery : "long rest"
		},
		"subclassfeature10" : {
			name : "Telekinetic Bulwark",
			source : [["UA:FRnW", 1]],
			minlevel : 10,
			description : desc([
				"When I take the Attack action, I can forgo one of the attacks to project psionic power",
				"Myself and my allies within 10 ft of me gain half cover and adv. on Strength saves",
				"This 10-ft radius bastion around me lasts for 1 minute or until I'm incapacitated",
				"I regain the usage of this feature after I use my second wind feature"
			]),
			recovery : "long rest",
			usages : 1,
			limfeaname : "Telekinetic Bulwark [Second Wind regains]"
		},
		"subclassfeature15" : {
			name : "Agonizing Strikes",
			source : [["UA:FRnW", 2]],
			minlevel : 15,
			description : desc([
				"When I hit a creature with a weapon attack, I can deal an extra +2d10 psychic damage",
				"The target also has to make a Constitution save (DC 8 + my Prof Bonus + my Int mod)",
				"If it fails, it falls prone and has disadv. on its next ability check until my next turn starts"
			]),
			usages : "Intelligence modifier per ",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));",
			recovery : "long rest"
		},
		"subclassfeature18" : {
			name : "Psychic Dreadnaught",
			source : [["UA:FRnW", 2]],
			minlevel : 18,
			description : desc([
				"As a reaction when I take damage, I can give myself the following benefits for 1 minute:",
				" \u2022 At the start of each of my turns, I regain 10 hit points",
				" \u2022 My walking speed increases by +10 ft",
				" \u2022 If I'm prone, I can stand up by spending 5 ft of movement",
				"These benefits also end when I'm incapacitated"
			]),
			recovery : "long rest",
			usages : 1,
			action : [["reaction", ""]]
		}
	}
});

// Add a subclass for the Rogue
AddSubClass("rogue", "soulknife-ua", {
	regExpSearch : /soulknife/i,
	subname : "Soulknife",
	source : [["UA:FRnW", 2]],
	fullname : "Soulknife",
	abilitySave : 4,
	features : {
		"subclassfeature3" : {
			name : "Psychic Blade",
			source : [["UA:FRnW", 2]],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can create a magical blade from one or both of my hands",
				"Disappear if I'm incapacitated, leave my hand (not thrown), or I dismiss it (no action)"
			]),
			action : [["bonus action", " (create)"]],
			weaponOptions : [{
				regExpSearch : /^(?=.*soulknife)(?=.*psychic)(?=.*blade).*$/i,
				name : "Soulknife's Psychic Blade",
				source : [["UA:FRnW", 2]],
				ability : 1,
				type : "Simple",
				damage : [1, 6, "psychic"],
				range : "Melee, 30/60 ft",
				description : "Finesse, light, thrown",
				abilitytodamage : true,
				isSoulknifePsychicBlade : true,
				selectNow : true
			}]
		},
		"subclassfeature3.1" : {
			name : "Psionic Enhancement",
			source : [["UA:FRnW", 2]],
			minlevel : 3,
			description : desc([
				"When I finish a long rest, I can choose one of these benefits until my next long rest:",
				" \u2022 Talk telepathically with those I can see in 30 ft; Can respond if they know a language",
				" \u2022 Increase my walking speed by 5 ft",
				" \u2022 Increase my maximum and current HP with my Intelligence modifier plus rogue level"
			])
		},
		"subclassfeature9" : {
			name : "Terrifying Blade",
			source : [["UA:FRnW", 3]],
			minlevel : 9,
			description : desc([
				"When I damage a creature with my psychic blade, it must make a Wisdom saving throw",
				"If it fails, it is frightened of me until my the start of my next turn",
				"If it succeeds, it is immune to this for 24 hours; DC 8 + my Prof Bonus + my Int mod"
			]),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.isSoulknifePsychicBlade) {
							fields.Description += (fields.Description ? '; ' : '') + 'Wis save or frightened for 1 round';
						};
					}
				]
			}
		},
		"subclassfeature13" : {
			name : "Psychic Veil",
			source : [["UA:FRnW", 3]],
			minlevel : 13,
			description : desc([
				"As an action, I can become invisible along with everything I'm wearing or carrying",
				"This ends after 10 minutes, if I make an attack, or if I force a creature to make a save"
			]),
			action : [["action", ""]],
			usages : "Intelligence modifier per ",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));",
			recovery : "long rest"
		},
		"subclassfeature17" : {
			name : "Rend Mind",
			source : [["UA:FRnW", 3]],
			minlevel : 17,
			description : desc([
				"As an action, I can deal 12d6 psychic damage to a creature I can see within 30 ft",
				"It also makes an Int save or is stunned until my next turn starts; Half damage on success",
				"It has disadv. on the save if I'm hidden from it; DC 10 + my Prof Bonus + my Int mod",
				"I must have a psychic blade manifested to do so and one vanishes when I use this feature"
			]),
			action : [["action", ""]],
			usages : "Intelligence modifier per ",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));",
			recovery : "long rest"
		}
	}
});

// Add a subclass for the Wizard
AddSubClass("wizard", "psionics-ua", {
	regExpSearch : /^((?=.*(wizard|mage|magus))(?=.*psionics)|(?=.*(psionicist|mentalist)))(?!.*(wild mage|\bpsion\b|mystic)).*$/i,
	subname : "Psionics",
	source : [["UA:FRnW", 3]],
	fullname : "Psionicist",
	features : {
		"subclassfeature2" : {
			name : "Psionic Focus",
			source : [["UA:FRnW", 3]],
			minlevel : 2,
			description : desc([
				"I learn to channel psionic energy through an object special to me, my psionic focus",
				"It allows me to reroll a roll of 1 on any psychic or force damage die for my wizard spells",
				"I can use this as my spellcasting focus; If lost, I can recreate it by meditating for 1 hour"
			])
		},
		"subclassfeature2.1" : {
			name : "Psionic Devotion",
			source : [["UA:FRnW", 4]],
			minlevel : 2,
			description : desc([
				'I learn one cantrip: Friends, Mage Hand, or Message; Use "Choose Feature" button above',
				"While my psionic focus is on me, I can cast it as a bonus action without components"
			]),
			choices : ["Friends", "Mage Hand", "Message"],
			"friends" : {
				name : "Psionic Devotion: Friends",
				description : desc([
					"I learn the Friends cantrip and while my psionic focus in on me, I am better at casting it",
					"I can cast it as a bonus action without components and the target doesn't become hostile"
				]),
				spellcastingBonus : [{
					name : "Psionic Devotion",
					spells : ["friends"],
					selection : ["friends"],
					firstCol : "atwill"
				}],
				spellChanges : {
					"friends" : {
						time : "1 bns",
						components : "",
						compMaterial : "",
						description : "Adv. on Cha checks vs. 1 crea currently not hostile; when spell ends, crea realizes I used magic",
						changes : "While my psionic focus is on my person, I can cast Friends as a bonus action without requiring any components and when the spell ends, the target doesn't become hostile to me."
					}
				}
			},
			"mage hand" : {
				name : "Psionic Devotion: Mage Hand",
				description : desc([
					"I learn Mage Hand and while my psionic focus in on me, I am better at casting it",
					"I can then cast it as a bonus action without components and can make the hand invisible",
					"Also, I can control the hand as a bonus action instead of an action"
				]),
				spellcastingBonus : [{
					name : "Psionic Devotion",
					spells : ["mage hand"],
					selection : ["mage hand"],
					firstCol : "atwill"
				}],
				spellChanges : {
					"mage hand" : {
						time : "1 bns",
						components : "",
						description : "Create invisible hand for simple tasks or carry up to 10 lb; 1 bns action to control; can't have multiples",
						changes : "While my psionic focus is on my person, I can cast Mage Hand as a bonus action without requiring any components, can make the hand invisible, and controlling the hand is a bonus action for me."
					}
				}
			},
			"message" : {
				name : "Psionic Devotion: Message",
				description : desc([
					"I learn the Message cantrip and while my psionic focus in on me, I'm better at casting it",
					"I can then cast it as a bonus action without components",
					"Also, I don't need to point at the target or whisper the message out loud"
				]),
				spellcastingBonus : [{
					name : "Psionic Devotion",
					spells : ["message"],
					selection : ["message"],
					firstCol : "atwill"
				}],
				spellChanges : {
					"message" : {
						time : "1 bns",
						components : "",
						compMaterial : "",
						description : "1 crea hears message I think; can reply with a whisper; nobody can overhear; needs no straight line",
						changes : "While my psionic focus is on my person, I can cast Message as a bonus action without requiring any components, don't need to point toward the target, and I don't need to whisper my message out loud."
					}
				}
			}
		},
		"subclassfeature6" : {
			name : "Thought Form",
			source : [["UA:FRnW", 4]],
			minlevel : 6,
			description : desc([
				"As a bonus action, I can use my psionic focus to transform my body into luminous energy",
				"I chose the shape (my size); It sheds 5-ft radius dim light; My equipment melds into it",
				"My psionic focus hovers within the energy; In this form, I have the following benefits:",
				" \u2022 Spells I cast require no verbal, somatic, or material components without a gold cost",
				" \u2022 I have resistance to psychic and nonmagical bludgeoning/piercing/slashing damage",
				"This lasts for 10 minutes or until I'm incapacitated, die, or use a bonus action to end it"
			]),
			action : [["bonus action", ""]],
			usages : "Intelligence modifier per ",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));",
			recovery : "long rest"
		},
		"subclassfeature10" : {
			name : "Mental Discipline",
			source : [["UA:FRnW", 4]],
			minlevel : 10,
			description : desc([
				'I learn one spell: Dominate Person, Scrying, or Telekinesis; Use "Choose Feature" button',
				"I can cast the spell without a spell slot once per long rest (and normally with a spell slot)"
			]),
			usages : 1,
			recovery : "long rest",
			choices : ["Dominate Person", "Scrying", "Telekinesis"],
			"dominate person" : {
				name : "Mental Discipline: Dominate Person",
				description : desc([
					"I add Dominate Person to my spellbook and can cast it without requiring components",
					"Once per long rest, I can cast it without using a spell slot; I can also prepare it as normal"
				]),
				limfeaname : "Dominate Person (without spell slot)",
				spellcastingBonus : [{
					name : "Mental Discipline",
					spells : ["dominate person"],
					selection : ["dominate person"]
				}],
				spellChanges : {
					"dominate person" : {
						components : "",
						changes : "I can cast Dominate Person without requiring any components. Once per long rest, I can cast it without using a spell slot. I can also cast it by using spell slots as normal."
					}
				}
			},
			"scrying" : {
				name : "Mental Discipline: Scrying",
				description : desc([
					"I add Scrying to my spellbook and can cast it without requiring components",
					"Once per long rest, I can cast it without using a spell slot; I can also prepare it as normal"
				]),
				limfeaname : "Scrying (without spell slot)",
				spellcastingBonus : [{
					name : "Mental Discipline",
					spells : ["scrying"],
					selection : ["scrying"]
				}],
				spellChanges : {
					"scrying" : {
						components : "",
						compMaterial : "",
						changes : "I can cast Scrying without requiring any components. Once per long rest, I can cast it without using a spell slot. I can also cast it by using spell slots as normal."
					}
				}
			},
			"telekinesis" : {
				name : "Mental Discipline: Telekinesis",
				description : desc([
					"I add Telekinesis to my spellbook and can cast it without requiring components",
					"Once per long rest, I can cast it without using a spell slot; I can also prepare it as normal"
				]),
				limfeaname : "Telekinesis (without spell slot)",
				spellcastingBonus : [{
					name : "Mental Discipline",
					spells : ["telekinesis"],
					selection : ["telekinesis"]
				}],
				spellChanges : {
					"telekinesis" : {
						components : "",
						changes : "I can cast Telekinesis without requiring any components. Once per long rest, I can cast it without using a spell slot. I can also cast it by using spell slots as normal."
					}
				}
			}
		},
		"subclassfeature10.1" : {
			name : "Empowered Psionics",
			source : [["UA:FRnW", 5]],
			minlevel : 10,
			description : "\n   I add my Int modifier to one target of my wizard spells that do psychic or force damage",
			calcChanges : {
				spellAdd : [
					function (spellKey, spellObj, spName) {
						if (spName.indexOf("wizard") != -1) {
							return genericSpellDmgEdit(spellKey, spellObj, "force|psychic", "Int", true);
						}
					},
					"When I deal psychic or force damage with a wizard spell, I can add my Intelligence modifier to the damage against one of the spell's targets."
				]
			}
		},
		"subclassfeature14" : {
			name : "Thought Travel",
			source : [["UA:FRnW", 5]],
			minlevel : 14,
			description : desc([
				"While in my thought form, I gain a fly speed equal to my walking speed and I can hover",
				"I can then also move through creatures and objects as if they were difficult terrain",
				"I take 1d10 force damage if I end my turn inside an object",
				"If I end my thought form while inside an object, I'm shunted to the nearest empty space",
				"I then take 1d10 force damage for every 5 ft traveled"
			])
		}
	}
});

// The new spells
SpellsList["ego whip-ua"] = {
	name : "Ego Whip",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : [["UA:FRnW", 7]],
	level : 4,
	school : "Ench",
	time : "1 a",
	range : "30 ft",
	components : "V",
	duration : "Conc, 1 min",
	save : "Int",
	description : "1 crea save or can't cast spells and disadv. on atks, checks, and saves; save end of each turn to end",
	descriptionFull : "You lash the mind of one creature you can see within range, filling it with despair. The target must succeed on an Intelligence saving throw or suffer disadvantage on attack rolls, ability checks, and saving throws, and it can't cast spells. At the end of each of its turns, the target can make another Intelligence saving throw. On a success, the spell ends on the target."
};
SpellsList["id insinuation-ua"] = {
	name : "Id Insinuation",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : [["UA:FRnW", 7]],
	level : 1,
	school : "Ench",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "1 crea save or incapacitated and end of each turn 1d12 Psychic damage, after which it can save to end",
	descriptionShorter : "1 crea save or incapacitated \u0026 end of each turn 1d12 Psychic damage, can save to end after",
	descriptionFull : "You unleash a torrent of conflicting desires in the mind of one creature you can see within range, impairing its ability to make decisions. The target must succeed on a Wisdom saving throw or be incapacitated. At the end of each of its turns, it takes 1d12 psychic damage, and it can then make another Wisdom saving throw. On a success, the spell ends on the target."
};
SpellsList["intellect fortress-ua_frnw"] = { // completely different than later iterations in UA:POR and TCoE
	name : "Intellect Fortress",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : [["UA:FRnW", 7]],
	level : 5,
	school : "Abjur",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Conc, 10 min",
	description : "I have advantage on all saves and I can use my reaction to have a creature in 30 ft reroll a failed save",
	descriptionFull : "You create a faintly shimmering barrier of protective psychic power around you. For the duration, you have advantage on all saving throws.\n   When another creature that you can see within 30 feet of you fails a saving throw, you can use your reaction to allow them to reroll the save. They must use the new roll."
};
SpellsList["mental barrier-ua"] = {
	name : "Mental Barrier",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : [["UA:FRnW", 7]],
	level : 2,
	school : "Abjur",
	time : "1 rea",
	timeFull : "1 reaction, which you take when you are forced to make an Intelligence, a Wisdom, or a Charisma saving throw",
	range : "Self",
	components : "V",
	duration : "1 rnd",
	description : "I have Psychic damage resistance and adv. on Int, Wis, and Cha saves until the start of my next turn",
	descriptionFull : "You protect your mind with a wall of looping, repetitive thought. Until the start of your next turn, you have advantage on Intelligence, Wisdom, and Charisma saving throws, and you have resistance to psychic damage."
};
// [dupl_start] (mostly) the same as in Tasha's Cauldron of Everything
if (!SourceList.T) {
	// almost duplicate from UA:SnW, but now also on the Bard's spell list
	// too much alike to the final TCoE version, so don't include it if TCoE is available
	SpellsList["mind sliver"] = { 
		name : "Mind Sliver",
		classes : ["bard", "sorcerer", "warlock", "wizard"],
		source : [["T", 108], ["UA:SnW", 4], ["UA:FRnW", 7], ["UA:POR", 7]],
		level : 0,
		school : "Ench",
		time : "1 a",
		range : "60 ft",
		components : "V",
		duration : "1 rnd",
		save : "Int",
		description : "1 crea save or 1d6 Psychic dmg, -1d4 on first save before my next turn ends; +1d6 at CL 5, 11, and 17",
		descriptionCantripDie : "1 crea save or `CD`d6 Psychic dmg and subtract 1d4 from first saving throw before my next turn ends",
		descriptionFull : "You drive a disorienting spike of psychic energy into the mind of one creature you can see within range. The target must make an Intelligence saving throw. Unless the saving throw is successful, the target takes 1d6 psychic damage, and the first time it makes a saving throw before the end of your next turn, it must roll a d4 and subtract the number rolled from the save.\n   This spell's damage increases by 1d6 when you reach certain levels: 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
	};
	WeaponsList["mind sliver"] = {
		regExpSearch : /^(?=.*mind)(?=.*sliver).*$/i,
		name : "Mind Sliver",
		source : [["T", 108], ["UA:SnW", 4], ["UA:FRnW", 7], ["UA:POR", 7]],
		list : "spell",
		ability : 6,
		type : "Cantrip",
		damage : ["C", 6, "psychic"],
		range : "60 ft",
		description : "1 creature Int save, success - no damage, fail - also -1d4 on first save before my next turn ends",
		abilitytodamage : false,
		dc : true
	};
} // dupl_end
SpellsList["mind thrust-ua"] = { // rather different than later iterations in UA:POR and TCoE
	name : "Mind Thrust",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : [["UA:FRnW", 7]],
	level : 2,
	school : "Ench",
	time : "1 bns",
	range : "60 ft",
	components : "V,S",
	duration : "1 rnd",
	save : "Int",
	description : "1+1/SL crea, all max 30 ft apart, 3d6 Psychic dmg, only Dash/Diseng. next turn; save half, any action",
	descriptionFull : "You propel a lance of psionic disruption into the mind of one creature you can see within range. The target must make an Intelligence saving throw. On a failed save, the target takes 3d6 psychic damage, and it can use its action only to Dash or Disengage on its next turn. On a successful save, the target takes half as much damage, and this spell doesn't limit its action options." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd. The creatures must be within 30 feet of each other when you target them."
};
SpellsList["psionic blast-ua"] = {
	name : "Psionic Blast",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : [["UA:FRnW", 8]],
	level : 3,
	school : "Evoc",
	time : "1 a",
	range : "30-ft cone",
	components : "V",
	duration : "Instantaneous",
	save : "Dex",
	description : "All crea 5d8+1d8/SL Force dmg, 20 ft pushed away, knocked prone; save half, not pushed or prone",
	descriptionShorter : "All 5d8+1d8/SL Force dmg, 20 ft pushed away, knocked prone; save half, not pushed or prone",
	descriptionFull : "You unleash a destructive wave of mental power in a 30-foot cone. Each creature in the area must make a Dexterity saving throw. On a failed save, a target takes 5d8 force damage, is pushed 20 feet directly away from you, and is knocked prone. On a successful save, a target takes half as much damage and isn't pushed or knocked prone." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd."
};
SpellsList["psychic crush-ua"] = {
	name : "Psychic Crush",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : [["UA:FRnW", 8]],
	level : 6,
	school : "Ench",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "1 min",
	save : "Int",
	description : "1 crea 12d6 Psychic damage and stunned for 1 min; save half, not stunned; save at turn end to stop",
	descriptionFull : "You overload the mind of one creature you can see within range, filling its psyche with discordant emotions. The target must make an Intelligence saving throw. On a failed save, the target takes 12d6 psychic damage and is stunned for 1 minute. On a successful save, the target takes half as much damage and isn't stunned.\n   The stunned target can make an Intelligence saving throw at the end of each of its turns. On a successful save, the spell ends on the target.",
	dynamicDamageBonus : { multipleDmgMoments : false }
};
SpellsList["thought shield-ua"] = {
	name : "Thought Shield",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : [["UA:FRnW", 8]],
	level : 2,
	school : "Abjur",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "8 h",
	description : "1 crea's mind can't be read/detected, telepathy only if wanted, adv. on saves vs. lie detecting effects",
	descriptionFull : "You weave a clouding veil over the mind of one creature you touch. For the duration, the target's mind can't be read or detected, creatures can't telepathically communicate with the target unless the target allows it, and the target has advantage on saving throws against any effect that would determine whether it is telling the truth."
};

// Add the two psionic-themed feats
FeatsList["telekinetic-ua"] = {
	name : "Telekinetic",
	source : [["UA:FRnW", 8]],
	descriptionFull : "You learn to move things with your mind. You gain the following benefits:\n \u2022 Increase your Intelligence score by 1, to a maximum of 20.\n \u2022 You learn the mage hand cantrip. You can cast it without verbal or somatic components, and you can make the spectral hand invisible.\n \u2022 As a bonus action, you can try to shove one creature you can see within 5 feet of the spectral hand created by your mage hand spell. When you do so, the target must succeed on a Strength saving throw (DC 8 + your proficiency bonus + your Intelligence modifier) or be pushed 5 feet away from you.",
	description : "I learn the Mage Hand cantrip, can cast it without components, and can make it invisible. As a bonus action, I can use it to try and shove a creature I can see within 5 ft of it. The target must make a Str save (Int based) or be shoved 5 ft away from me. [+1 Intelligence]",
	scores : [0, 0, 0, 1, 0, 0],
	spellcastingBonus : [{
		name : "Telekinetic",
		spellcastingAbility : 4,
		spells : ["mage hand"],
		selection : ["mage hand"],
		firstCol : "atwill"
	}],
	spellChanges : {
		"mage hand" : {
			components : "",
			save : "Str",
			description : "Invisible hand, simple tasks, carries 10 lb; 1 a to control; not multiple; 1 bns 1 crea save or shove 5 ft",
			changes : "My Telekinetic feat allows me to cast Mage Hand without verbal or somatic components and I can make the spectral hand invisible."
		}
	}
};
FeatsList["telepathic-ua"] = {
	name : "Telepathic",
	source : [["UA:FRnW", 8]],
	descriptionFull : "You awaken the ability to mentally connect with others. You gain the following benefits:\n \u2022 Increase your Intelligence score by 1, to a maximum of 20.\n \u2022 You gain proficiency in one skill of your choice from the following list: Deception, Insight, Intimidation, or Persuasion.\n \u2022 You can communicate telepathically with any creature you can see within 30 feet of you. If it understands at least one language, it can respond to you telepathically.",
	description : "I gain proficiency with one skill chosen from Deception, Insight, Intimidation, or Persuasion. I can communicate telepathically with any creature I can see within 30 feet of me. If it understands at least one language, it can respond to me telepathically. [+1 Intelligence]",
	scores : [0, 0, 0, 1, 0, 0],
	choices : ["Deception", "Insight", "Intimidation", "Persuasion"],
	"deception" : {
		description : "I gain proficiency with Deception. I can communicate telepathically with any creature I can see within 30 ft of me. If the creature understands at least one language, it can respond to me telepathically. [+1 Intelligence]",
		skills : ["Deception"]
	},
	"insight" : {
		description : "I gain proficiency with Insight. I can communicate telepathically with any creature I can see within 30 ft of me. If the creature understands at least one language, it can respond to me telepathically. [+1 Intelligence]",
		skills : ["Insight"]
	},
	"intimidation" : {
		description : "I gain proficiency with Intimidation. I can communicate telepathically with any creature I can see within 30 ft of me. If the creature understands at least one language, it can respond to me telepathically. [+1 Intelligence]",
		skills : ["Intimidation"]
	},
	"persuasion" : {
		description : "I gain proficiency with Persuasion. I can communicate telepathically with any creature I can see within 30 ft of me. If the creature understands at least one language, it can respond to me telepathically. [+1 Intelligence]",
		skills : ["Persuasion"]
	}
};
