// This file adds the content from the Unearthed Arcana 2022: Giant Options article to MPMB's Character Record Sheet
// Contains contributions by Thravieus Windhelm / PoetOfGod (GitHub) / @PoetOfGod#6077 (Discord)
var iFileName = "ua_20220523_Giant-Options.js";
RequiredSheetVersion("13.1.2");

SourceList["UA:GO"] = {
	name : "Unearthed Arcana: Giant Options",
	abbreviation : "UA:GO",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2022/dnd/downloads/UA2022-drjwf73f8n.pdf",
	date : "2022/05/23"
};

AddSubClass("barbarian", "giant-ua", {
	regExpSearch : /^((?=.*(marauder|barbarian|viking|(norse|tribes?|clans?)(wo)?m(a|e)n))|((?=.*(warrior|fighter))(?=.*(feral|tribal))))(?=.*giant).*$/i,
	subname : "Path of the Giant",
	source : [["UA:GO", 1]],
	abilitySave : 1,
	spellcastingAbility : 5,
	features : {
		"subclassfeature3" : {
			name : "Giant Power",
			source : [["UA:GO", 1]],
			minlevel : 3,
			description : desc("I learn Giant, and the Druidcraft or Thaumaturgy cantrip with Wis as spellcasting ability"),
			languageProfs : ["Giant"],
			spellcastingBonus : {
				name : "Giant Power",
				spells : ["druidcraft", "thaumaturgy"],
				firstCol : "atwill"
			}
		},
		"subclassfeature3.1" : {
			name : "Giant's Havoc",
			source : [["UA:GO", 1]],
			minlevel : 3,
			description : levels.map(function (n) {
				return desc([
					"While raging, I add the bonus damage to ranged thrown weapon attacks that use Str,",
					"I gain +" + (n < 14 ? 5 : 10) + " ft reach, and I become " + (n < 14 ? 'Large' : 'Huge') + " along with what I'm wearing, if there is room"
				]);
			})
		},
		"subclassfeature6" : {
			name : "Elemental Cleaver",
			source : [["UA:GO", 1]],
			minlevel : 6,
			description : levels.map(function (n) {
				return desc([
					"When I rage, I can infuse a weapon I'm holding with acid, cold, fire, thunder, or lightning",
					"While raging, its damage type changes to the chosen type and it deals +" + (n < 14 ? 1 : 2) + "d6 damage,",
					"it gains the thrown (20/60 ft) property, and reappears instantly after a thrown attack",
					"As a bonus action, I can change the chosen type; The bonuses only function for me"
				]);
			}),
			action : [["bonus action", " (change type)"]],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if ((v.isMeleeWeapon || v.isRangedWeapon) && classes.known.barbarian && classes.known.barbarian.level && /^(?=.*elemental)(?=.*cleaver).*$/i.test(v.WeaponTextName)) {
							fields.Damage_Type = "acid";
							var extraDmg = classes.known.barbarian.level < 14 ? '+1d6 damage' : '+2d6 damage';
							var extraProp = v.isRangedWeapon ? '' : /\bthrown\b/i.test(v.WeaponText) ? 'Returning; ' : 'Thrown, returning; ';
							fields.Description += (fields.Description ? '; ' : '') + extraProp + extraDmg;
						}
					},
					"If I include the words 'Elemental Cleaver' in a weapon's name, the Elemental Cleaver infused weapon properties will be added to it and its damage type will be set to 'Acid'. Also, my Rage's bonus damage will be added to it if it is a melee weapon."
				],
				atkCalc : [
					function (fields, v, output) {
						if (v.isMeleeWeapon && classes.known.barbarian && classes.known.barbarian.level && !/\brage\b/i.test(v.WeaponTextName) && /^(?=.*elemental)(?=.*cleaver).*$/i.test(v.WeaponTextName)) {
							output.extraDmg += classes.known.barbarian.level < 9 ? 2 : classes.known.barbarian.level < 16 ? 3 : 4;
						}
					},
					""
				]
			}
		},
		"subclassfeature10" : {
			name : "Mighty Impel",
			source : [["UA:GO", 1]],
			minlevel : 10,
			description : levels.map(function (n) {
				return " [DC 8 + Prof Bonus + Str mod]" + desc([
					"As a bonus action while raging, I can hurl a " + (n < 14 ? 'Medium' : 'Large') + " or smaller creature within my reach",
					"I move it to an empty space I can see within 30 ft; Unwilling can save to avoid this",
					"If it doesn't end this movement on a surface that can support it, it falls and lands prone"
				]);
			}),
			action : [["bonus action", ""]]
		},
		"subclassfeature14" : {
			name : "Demiurgic Colossus",
			source : [["UA:GO", 1]],
			minlevel : 14,
			description : desc([
				"While raging, my reach increases by 10 ft, and my size can increase to Huge",
				"Mighty Impel works on Large creatures; Elemental Cleaver increases to +2d6 damage",
			])
		}
	}
});

AddSubClass("druid", "circle of the primeval-ua", {
	regExpSearch : /^(?=.*(druid|shaman))(?=.*(primeval|behemoth)).*$/i,
	subname : "Circle of the Primeval",
	source : [["UA:GO", 2]],
	features : {
		"subclassfeature2" : {
			name : "Keeper of Old",
			source : [["UA:GO", 2]],
			minlevel : 2,
			description : desc("I gain proficiency in History; I can add d4 to my Intelligence (History) checks"),
			skills : ["History"]
		},
		"subclassfeature2.1" : {
			name : "Primeval Companion",
			source : [["UA:GO", 2]],
			minlevel : 2,
			description : desc([
				"As an action, I can expend a use of wild shape to summon a primeval companion",
				"The companion appears in an empty spot within 30 ft with the appearance of my choice",
				"It vanishes when reduced to 0 hit points, when I die, and when I summon another one"
			]),
			action : [
				["action", "Summon Primeval Companion"],
				["bonus action", "Command Primeval Companion"]
			],
			creaturesAdd : [["Primeval Companion", true]],
			creatureOptions : [{
				name : "Primeval Companion",
				source : [["UA:GO", 2]],
				size : 3,
				type : "Beast",
				alignment : "Neutral",
				ac : "11+Dex+Prof",
				hp : 20,
				hd : [2, 10],
				hdLinked : ["druid"],
				minlevelLinked : ["druid"],
				speed : "30 ft",
				scores : [15, 15, 17, 6, 12, 8],
				saves : ["", 4, 5, "", "", ""],
				senses : "Darkvision 60 ft",
				passivePerception : 11,
				languages : "Understands the languages of its summoner",
				challengeRating : "0",
				proficiencyBonus : 2,
				proficiencyBonusLinked : true,
				attacksAction : 1,
				attacks : [{
					name : "Strike",
					ability : 1,
					damage : [1, 8, "bludgeoning"],
					modifiers : ["", "Prof"],
					range : "Melee (5 ft)",
					description : "My choice of bludgeoning, piercing, or slashing damage",
					abilitytodamage : false
				}],
				features : [{
					name : "Primeval Companion",
					description : "The primeval companion obeys the commands of its summoner and shares its proficiency bonus. It takes its turn immediately after that of its summoner, on the same initiative. It can move and take reactions on its own, but only takes the Dodge action on its turn unless its summoner takes a bonus action to command it to take another action. If its summoner is incapacitated, the companion can take any action, not just Dodge. The companion vanishes when it is reduced to 0 hit points, when its summoner summons another companion, or when its summoner dies."
				}],
				traits : [{
					name : "Intercept attack",
					description : "As a reaction when a creature the companion can see hits a target within 5 ft of the companion with an attack, the target instead takes half the damage. The companion takes the remainder of the damage"
				}, {
					name : "Prehistoric Conduit (Circle of the Primeval 6)",
					minlevel : 6,
					description : "Spells cast by the companion's summoner with a range other than self can originate from the companion instead. Also, the companion has advantage on saving throws against spells cast by its summoner. If the companion would normally take half damage on a successful save against these spells, instead, it takes no damage on a success and half and no other effects on a fail."
				}, {
					name : "Titanic Bond (Circle of the Primeval 10)",
					minlevel : 10,
					description : "The companion's size is now Large and it gains either a swimming or climbing speed equal to its walking speed.",
					eval : function(prefix, lvl) {
						PickDropdown(prefix + "Comp.Desc.Size", 2); // Large
						var sMoveStr = (typePF ? ",\n" : ", ") + "swim/climb 30 ft";
						if (What("Unit System") === "metric") sMoveStr = ConvertToMetric(sMoveStr, 0.5);
						tDoc.getField(prefix + "Comp.Use.Speed").value += sMoveStr;
					},
					removeeval : function(prefix, lvl) {
						PickDropdown(prefix + "Comp.Desc.Size", 3); // Medium
						var sMoveStr = (typePF ? ",\n" : ", ") + "swim or climb 30 ft";
						if (What("Unit System") === "metric") sMoveStr = ConvertToMetric(sMoveStr, 0.5);
						Value(prefix + "Comp.Use.Speed", What(prefix + "Comp.Use.Speed").replace(sMoveStr, ""));
					}
				}],
				calcChanges : {
					hp : function (totalHD, HDobj, prefix) {
						if (!classes.known.druid) return;
						var drdLvl = classes.known.druid.level;
						var drdLvlM = 5 * drdLvl;
						HDobj.alt.push(10 + drdLvlM);
						HDobj.altStr.push(" = 10 as a base\n + 5 \xD7 " + drdLvl + " from five times its summoner's druid level (" + drdLvlM + ")");
					},
					setAltHp : true
				}
			}]
		},
		"subclassfeature6" : {
			name : "Prehistoric Conduit",
			source : [["UA:GO", 2]],
			minlevel : 6,
			description : desc([
				"Spells I cast with the range of touch can originate from my primeval companion",
				"The primeval companion has advantage on saving throws against my spells",
				"If the companion would take half damage on a successful save against a spell I cast,",
				"it instead takes no damage on a success and half damage and no other effects on a fail"
			])
		},
		"subclassfeature10" : {
			name : "Titanic Bond",
			source : [["UA:GO", 2]],
			minlevel : 10,
			description : desc([
				"My companion grows to Large; it gains a climb or swim speed equal to its walking speed",
				"When I hit an attack or spell damage a creature I can see, I can have it make a Wis save",
				"If failed, the target is frightened of me until the end of my next turn",
				"I can do this only while my primeval companion is summoned, and only once per turn"
			])
		},
		"subclassfeature14" : {
			name : "Scourge of the Ancients",
			source : [["UA:GO", 3]],
			minlevel : 14,
			description : desc([
				"When I use a bonus action to command my companion, I can expend a spell slot so that:",
				" \u2022 It becomes Huge if there is room, and gains 10 times the spell slot level in temp HP",
				" \u2022 On a hit, the companion's Strike deals an extra 1d8 + the spell slot level damage",
				" \u2022 Its walking (and climbing or swimming) speed increases with 5 ft per spell slot level",
				"These benefits last for 1 hour, until the companion vanishes, or until I use this again"
			])
		}
	}
});

AddSubClass("wizard", "runecrafter-ua", {
	regExpSearch : /runecrafting|runecrafter/i,
	subname : "Tradition of Runecrafting",
	fullname : "Runecrafter",
	source : [["UA:GO", 3]],
	features : {
		"subclassfeature2" : {
			name : "Runes of Understanding",
			source : [["UA:GO", 3]],
			minlevel : 2,
			description : desc([
				"I always have Comprehend Languages prepared and can cast it without using a spell slot",
				"It doesn't count against the number of spells I can prepare"
			]),
			spellcastingBonus : [{
				name : "Runes of Understanding",
				spells : ["comprehend languages"],
				selection : ["comprehend languages"],
				firstCol : "atwill"
			}]
		},
		"subclassfeature2.1" : {
			name : "Runic Empowerment",
			source : [["UA:GO", 3]],
			minlevel : 2,
			description : desc([
				"When I cast a spell using a spell slot, I can invoke one of the following runes:",
				" \u2022 Life Rune: Me or a creature I can see within 30 ft gains 5 temp HP per spell slot level",
				" \u2022 War Rune: A creature I can see within 30 ft is marked until the end of my next turn",
				"   Attack rolls against it gain a bonus equal to half the spell slot level, rounded up",
				" \u2022 Wind Rune: Until my next turn starts, my speed increases by 5 ft per spell slot level",
				"   Additionally, my movement doesn't provoke opportunity attacks"
			]),
			usages : "Prof Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest"
		},
		"subclassfeature6" : {
			name : "Sigils of Warding",
			source : [["UA:GO", 3]],
			minlevel : 6,
			description : desc([
				"As a reaction when I fail a Strength, Dexterity, or Constitution save, I can call on a rune",
				"I expend a use of my Runic Empowerment feature and succeed on the save instead"
			]),
			action : [["reaction", ""]]
		},
		"subclassfeature10" : {
			name : "Rune Maven",
			source : [["UA:GO", 3]],
			minlevel : 10,
			description : desc([
				"Whenever I use Arcane Recovery, I also regain uses of Runic Empowerment",
				"I regain a number of uses equal to half my Intelligence modifier, rounded up (min 1)"
			])
		},
		"subclassfeature14" : {
			name : "Engraved Enmity",
			source : [["UA:GO", 3]],
			minlevel : 14,
			description : desc([
				"As a bonus action, I can have a creature I can see within 60 ft make a Wisdom save",
				"If failed, it is marked by an enmity rune for 1 min, or until I lose my concentration",
				"A glowing energy mote hovers over the marked and it suffers the following effects:",
				" \u2022 The marked has disadvantage on saving throws against spells I cast",
				" \u2022 The glow makes the marked visible even if invisible, and they can't become invisible",
				" \u2022 When marking and as a bonus action on subsequent turns, I can curse the creature",
				"   The next time an ally hits the cursed with an attack, it also takes 1d8 force damage",
				"I can do this once per long rest, or by expending a 3rd-level or higher spell slot (SS 3+)"
			]),
			recovery : "long rest",
			usages : 1,
			altResource : "SS 3+",
			action : [["bonus action", ""]]
		}
	}
});

/*	Feats
	All the below feats are the work of PoetOfGod and have not been double-checked
	by Safety-Orange, because the "Revised" article "Wonders of the Multiverse"
	has already been published, superseding all these feats with newer versions.
*/
FeatsList["elemental touched-ua"] = {
	name : "Elemental Touched",
	source : [["UA:GO", 4]],
	descriptionFull : "You've been exposed to the primordial magic of the Elemental Planes, granting you a measure of control over the natural world around you. You learn either the druidcraft or thaumaturgy cantrip, using Intelligence, Wisdom, or Charisma as the spellcasting ability (choose when you gain this feat).\n   Whenever you finish a long rest, you can choose which element you are attuned to: Air, Earth, Fire, or Water. Depending on your choice, you can use a bonus action to cause one of the following effects:"+
	"\n\n" + toUni("Air") + ". You gain a fly speed equal to your walking speed until the end of your turn. If you are airborne at the end of your turn after using this movement and aren't held aloft by other means, you fall."+
	"\n" + toUni("Earth") + ". You cause the ground within 30 feet of you to become difficult terrain for 1 minute or until you create this effect again. During that time, you can move across ground that is difficult terrain without spending extra movement."+
	"\n" + toUni("Fire") + ". You surround yourself in a cloud of ash and smoke. Until the end of your turn, your movement doesn't provoke opportunity attacks."+
	"\n" + toUni("Water") + ". You can create a forceful surge of water directed at a creature within 15 feet of you that you can see. The creature must succeed on a Strength saving throw (which it can choose to fail) against a DC equal to 8 + your spellcasting ability modifier + your proficiency bonus or be pushed up to 10 feet away from you. The water vanishes immediately after the creature succeeds or fails."+
	"\n\nYou can create this effect a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	description : "I learn druidcraft or thaumaturgy. End of a LR pick Air, Earth, Fire, Water, as a bns action: Air. Gain fly spd = to walk spd, fall at end of turn; Earth. 30 ft rad diff terr for 1 min, move freely through diff terr; Fire. No opp atks this turn; Water. 1 visible crea w/in 15 ft Str save DC 8 + SC mod + Prof or pushed 10 ft away. Prof Uses / LR.",
	spellcastingAbility : [4, 5, 6],
	action : [["bonus action", ""]],
	usages : "Proficiency bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus');",
	recovery : "long rest",
	choices : ["Druidcraft", "Thaumaturgy"],
	"druidcraft" : {
		description : "I learn druidcraft. End of a LR pick Air, Earth, Fire, Water, as a bns action: Air. Gain fly spd = to walk spd, fall at end of turn; Earth. 30 ft rad diff terr for 1 min, move freely through diff terr; Fire. No opp atks this turn; Water. 1 visible crea w/in 15 ft Str save DC 8 + SC mod + Prof or pushed 10 ft away. Prof Uses / LR.",
		spellcastingBonus : [{
			name : "Elemental Touched",
			spells : ["druidcraft"],
			selection : ["druidcraft"]
		}]
	},
	"thaumaturgy" : {
		description : "I learn thaumaturgy. End of a LR pick Air, Earth, Fire, Water, as a bns action: Air. Gain fly spd = to walk spd, fall at end of turn; Earth. 30 ft rad diff terr for 1 min, move freely through diff terr; Fire. No opp atks this turn; Water. 1 visible crea w/in 15 ft Str save DC 8 + SC mod + Prof or pushed 10 ft away. Prof Uses / LR.",
		spellcastingBonus : [{
			name : "Elemental Touched",
			spells : ["thaumaturgy"],
			selection : ["thaumaturgy"]
		}]
	}
};
FeatsList["outsized might-ua"] = {
	name : "Outsized Might",
	source : [["UA:GO", 5]],
	descriptionFull : "You have absorbed primeval magic that allows you, despite your relatively small stature, to embody the might of titanic creatures. This grants you the following benefits:"+
	"\n\n" + toUni("Little but Mighty") + ". You gain proficiency in either the Athletics or Acrobatics skill."+
	"\n" + toUni("Powerful Build") + ". You count as one size larger when determining your carrying capacity and the amount you can push, drag, or lift."+
	"\n" + toUni("Stalwart") + ".You have advantage on saving throws against being moved or knocked prone.",
	description : "I gain proficiency in Athletics or Acrobatics. I count as one size larger when determining my carrying capacity and the amount I can push, drag, or lift. I have advantage on saving throws against being moved or knocked prone.",
	skillstxt : "Choose Athletics or Acrobatics",
	carryingCapacity : 2,
	savetxt : { adv_vs : ["moved", "prone"]}
};

// X of the X Giant feats
FeatsList["ember of the fire giant-ua"] = {
	name : "Ember of the Fire Giant",
	source : [["UA:GO", 4]],
	prerequisite : "8th level",
	prereqeval : function(v) { return v.characterLevel >= 8; },
	descriptionFull : "You've manifested the fiery combat emblematic of fire giants, granting you the following benefits:"+
	"\n\n" + toUni("Born of Flame") + ". You have resistance to fire damage."+
	"\n" + toUni("Searing Ignition") + ". When you take the Attack action on your turn, you can replace one of your attacks with a magical burst of flame. Each creature of your choice within 15 feet of you that can see you must make a Dexterity saving throw (DC equals 8 + your proficiency bonus + your Constitution modifier). On a failed save, a creature takes fire damage equal to 2d6 + your proficiency bonus and is blinded until the start of your next turn; on a successful save, the creature takes half as much damage with no additional effects. You can use your Searing Ignition a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	description : "I gain resistance to fire damage. When I take the Attack action on my turn I can use an attack to instead make each creature I choose within 15 ft roll a Dex save DC 8 + Prof + Con mod. On a fail they take 2d6 + Prof Fire dmg, blinded until the start of my next turn. Success halves and no other effect. Prof Uses / LR.",
	action : ["action", "Searing Ignition (as Attack action)"],
	usages : "Proficiency bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus');",
	recovery : "long rest",
	dmgres : ["Fire"]
};
FeatsList["fury of the frost giant-ua"] = {
	name : "Fury of the Frost Giant",
	source : [["UA:GO", 4]],
	prerequisite : "4th level",
	prereqeval : function(v) { return v.characterLevel >= 4; },
	descriptionFull : "You've manifested the icy might emblematic of frost giants, granting you the following benefits:"+
	"\n\n" + toUni("Born of Ice") + ". You have resistance to cold damage."+
	"\n" + toUni("Frigid Vengeance") + ". When a creature hits you with an attack roll, you can use your reaction to retaliate with a burst of magical ire. The creature must succeed on a Wisdom saving throw (DC equals 8 + your proficiency bonus + your Consitution modifier) or be frightened of you until the start of its next turn. You can use your reaction in this way a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	description : "I gain resistance to cold damage. When I am hit with an attack roll I can use my reaction to make them roll a Wis save DC 8 + Prof + Con mod. On a failure they are frightened until the start of their next turn. Prof Uses / LR.",
	action : ["reaction", "Frigid Vengeance"],
	usages : "Proficiency bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus');",
	recovery : "long rest",
	dmgres : ["Cold"]
};
FeatsList["guile of the cloud giant-ua"] = {
	name : "Guile of the Cloud Giant",
	source : [["UA:GO", 4]],
	prerequisite : "8th level",
	prereqeval : function(v) { return v.characterLevel >= 8; },
	descriptionFull : "You've manifested the airy speech and magic emblematic of cloud giants, granting you the following benefits:"+
	"\n\n" + toUni("Misty Form") + ". You can cast the blur spell without using a spell slot or material components. When you cast the spell in this way, the spell doesn't require you to maintain concentration on it. Once you cast the spell in this way, you can't do so again until you finish a long rest. You can also cast this spell in the normal way using spell slots you have of appropriate level."+
	"\nIntelligence, Wisdom, or Charisma is your spellcasting ability for this feature (choose when you gain this feat)."+
	"\n" + toUni("Silver Tongue") + ". You gain proficiency in either the Deception or Persuasion skill. Your proficiency bonus is doubled for any ability check you make using this skill.",
	description : "I gain proficiency and expertise in Deception or Persuasion. Once per long rest I can cast Blur without using a spell slot, material components, or concentration. I can also cast it normally with spell slots.",
	skillstxt : "Choose Deception or Persuasion. You also gain expertise with that skill",
	spellcastingAbility : [4, 5, 6],
	spellcastingBonus : [{
		name : "Guile of the Cloud Giant",
		spells : ["blur"],
		selection : ["blur"],
		firstCol : "oncelr",
		allowUpCasting : true
	}]
};
FeatsList["keenness of the stone giant-ua"] = {
	name : "Keenness of the Stone Giant",
	source : [["UA:GO", 5]],
	prerequisite : "4th level",
	prereqeval : function(v) { return v.characterLevel >= 4; },
	descriptionFull : "You've manifested the protection and spellcasting emblematic of stone giants, granting you the following benefits:"+
	"\n\n" + toUni("Dreamer's Magic") + " You learn the detect thoughts spell and one 1st-level spell of your choice. The 1st-level spell must be from the abjuration or the divination school of magic. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level."+
	"\nIntelligence, Wisdom, or Charisma is your spellcasting ability for this feature (choose when you gain this feat)."+
	"\n" + toUni("Mountain Sight") + " You gain darkvision out to a range of 60 feet. If you already have darkvision from another source, its range increases by 30 feet",
	description : "I learn detect thoughts and a 1st level Abjur or Div spell. I can cast these without a spell slot once per long rest, or as normal. I gain 60 ft of Darkvision or if I already have darkvision I get an extra 30 feet of Darkvision.",
	spellcastingAbility : [4, 5, 6],
	spellcastingBonus : [{
		name : "Keenness of the Stone Giant",
		spells : ["detect thoughts"],
		selection : ["detect thoughts"],
		firstCol : "oncelr",
		allowUpCasting : true
	}, {
		name : "1st-level Abjur/Div spell",
		"class" : "any",
		school : ["Abjur", "Div"],
		level : [1, 1],
		firstCol : "oncelr",
		allowUpCasting : true
	}],
	vision : [["Darkvision", "fixed 60"], ["Darkvision", "+30"]]
};
FeatsList["soul of the storm giant-ua"] = {
	name : "Soul of the Storm Giant",
	source : [["UA:GO", 5]],
	prerequisite : "8th level",
	prereqeval : function(v) { return v.characterLevel >= 8; },
	descriptionFull : "You've manifested divination abilities and tempest magic emblematic of storm giants, granting you the following benefits:"+
	"\n\n" + toUni("Maelstrom Aura") + ". As a bonus action, you surround yourself in an aura of magical wind and lightning that extends 10 feet from you in every direction but not through total cover. The aura lasts for 1 minute or until you are incapacitated. While the aura is active, attack rolls against you have disadvantage, and whenever a creature starts its turn within the sphere, you can force the creature's speed to be halved until the start of its next turn. Once you use this bonus action, you can't do so again until you finish a long rest."+
	"\n" + toUni("Storm's Oracle") + ". You can cast the divination spell as a ritual, without needing amterial components.\n Intelligence, Wisdom, or Charisma is your spellcasting ability for this feature (choose when you gain this feat). Once you cast the spell in this way, you can't do so again until you finish a long rest.",
	description : "I learn Divination and can cast it once per long rest as a ritual without using a spell slot or materials. Once per long rest as a bonus action I create a 10 ft rad that lasts for 1 min or until I am incapacitated. Atks against me have disadv, when creas start their turn in the area I can halve their spd until their next turn.",
	action : ["bonus action", "Maelstrom Aura"],
	usages : 1,
	recovery : "long rest",
	spellcastingAbility : [4, 5, 6],
	spellcastingBonus : {
		name : "Storm's Oracle",
		spells : ["divination"],
		selection : ["divination"],
		firstCol : "oncelr"
	},
	spellChanges : {
		"divination" : {
			components : "V,S",
			compMaterial : ""
		}
	}
};
FeatsList["vigor of the hill giant-ua"] = {
	name : "Vigor of the Hill Giant",
	source : [["UA:GO", 5]],
	prerequisite : "4th level",
	prereqeval : function(v) { return v.characterLevel >= 4; },
	descriptionFull : "You've manifested the resilience emblematic of hill giants, granting you the following benefits:"+
	"\n\n" + toUni("Bulwark") + ". When you are subjected to an effect that would move you at least 5 feet or knock you prone, you can use your reaction to steady yourself. You are then neither moved nor knocked prone."+
	"\n" + toUni("Hearty Health") + ". When you are subjected to a spell that restores your hit points, you can regain additional hit points equal to your Constitution modifier. You can regain these additional hit points a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	description : "When I would be moved or knocked prone I can use my reaction to not. When I would restore hit points from a spell I can regain an additional Con mod hit points, I can regain hit points this way Prof Uses / LR.",
	action : [["reaction", "Bulwark"]]
};

// Rune Carver Apprentice feat tree
FeatsList["rune carver apprentice-ua"] = {
	name : "Rune Carver Apprentice",
	source : [["UA:GO", 5]],
	descriptionFull : "You've begun studying the art of runecraft, which allows you to temporarily mark your items and imbue them with magic."+
	"\n   Whenever you finish a long rest, you can mark one nonmagical weapon, armor, piece of clothing, or other object you can touch with a rune of your choice. You temporarily learn one 1st-level spell based on the rune you choose, as specified in the table below, and you know the spell until you finish a long rest, when the rune fades."+
	"\n\n" + toUni("Rune\tSpell")+
	"\nBlood\tFalse life"+
	"\nCloud\tFog cloud"+
	"\nDeath\tRay of sickness"+
	"\nDragon\tChromatic orb"+
	"\nEnemy\tBane"+
	"\nFire\tBurning hands"+
	"\nFriend\tBless"+
	"\nFrost\tArmor of Agathys"+
	"\nHill\tGoodberry"+
	"\nJourney\tLongstrider"+
	"\nKing\tCommand"+
	"\nLight\tGuiding bolt"+
	"\nLife\tCure wounds"+
	"\nMountain\tJump"+
	"\nShield\tShield"+
	"\nStone\tSanctuary"+
	"\nStorm\tThunderwave"+
	"\nWar\tHeroism"+
	"\nWind\tFeather fall"+
	"\n\nWhile you are wearing or carrying the rune-marked object, you can cast the chosen spell associated with the rune once without using a spell slot or material components, and you can also cast the spell using any spell slots you have."+
	"\n   Your spellcasting ability for this feat is Intelligence, Wisdom, or Charisma (choose when you gain this feat).",
	description : "At the end of a long rest, I can mark a nonmagical object I can touch with a rune. I learn a 1st-level spell until I finish a long rest when the rune fades. While wearing or carrying the object I can cast the spell once without using a spell slot or material components, or as normal.",
	spellcastingAbility : [4, 5, 6],
	spellcastingBonus : {
		name : "Rune Carver",
		spells : ["false life", "fog cloud", "ray of sickness", "chromatic orb", "bane", "burning hands", "bless", "armor of agathys", "goodberry", "longstrider", "command", "guiding bolt", "cure wounds", "jump", "shield", "sanctuary", "thunderwave", "heroism", "feather fall"],
		selection : ["false life", "fog cloud", "ray of sickness", "chromatic orb", "bane", "burning hands", "bless", "armor of agathys", "goodberry", "longstrider", "command", "guiding bolt", "cure wounds", "jump", "shield", "sanctuary", "thunderwave", "heroism", "feather fall"],
		times : 19,
		firstCol : "R",
		allowUpCasting : true
	}
};
FeatsList["rune carver adept-ua"] = {
	name : "Rune Carver Adept",
	source : [["UA:GO", 5]],
	prerequisite : "4th level, Rune Carver Apprentice feat",
	prereqeval : function(v) { return v.characterLevel >= 4 && CurrentFeats.known.indexOf("rune carver apprentice") !== -1; },
	descriptionFull : "Your skill with the art of runecraft has increased.\n   Whenever you finish a long rest, you can now mark a number of objects equal to your proficiency bonus with a rune from the Rune Carver Apprentice feat. An object can have only one rune at a time, and you must inscribe a different rune on each object.",
	description : "At the end of a long rest, when using the Rune Carver apprentice feat, I can now inscribe a number of objects up to my Proficiency Bonus. Each object can only have one rune, and each rune must be different."
};
