var iFileName = "ua_20190815_Barbarian-and-Monk.js";
RequiredSheetVersion("13.0.8");
// This file adds the content from the Unearthed Arcana: Barbarian and Monk article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:BnM"] = {
	name : "Unearthed Arcana: Barbarian and Monk",
	abbreviation : "UA:BnM",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2019/dnd/downloads/UA-WildAstral.pdf",
	date : "2019/08/15"
};

// Add a subclasses for the Barbarian and one for the Monk
AddSubClass("barbarian", "path of the wild soul-ua", {
	regExpSearch : /^(?=.*\bwild\b)(?=.*\bsoul\b).*$/i,
	subname : "Path of the Wild Soul",
	source : [["UA:BnM", 1]],
	fullname : "Wild Soul",
	abilitySave : 3,
	features : {
		"subclassfeature3" : {
			name : "Lingering Magic",
			source : [["UA:BnM", 1]],
			minlevel : 3,
			description : desc([
				"I can cast Detect Magic without spell slots or components, using Con for spellcasting",
				"When I do so, I faintly glow a color corresponding to the school of magic I detect"
			]),
			usages : "Con mod (min 1) per ",
			usagescalc : "event.value = Math.max(1, What('Con Mod'));",
			recovery : "long rest",
			spellcastingBonus : {
				name : "Lingering Magic",
				spells : ["detect magic"],
				selection : ["detect magic"]
			},
			spellChanges : {
				"detect magic" : {
					components : "",
					ritual : false,
					changes : "Using my Path of the Wild Soul class feature I can cast Detect Magic without requiring components or spell slots."
				}
			}
		},
		"subclassfeature3.1" : {
			name : "Wild Surge",
			source : [["UA:BnM", 1]],
			minlevel : 3,
			description : "\n   Whenever I enter my rage, I have to roll on the Wild Surge table (see Notes page)",
			toNotesPage : [{
				name : "Wild Surge Table",
				source : [["UA:BnM", 1]],
				note : [
					"Magic erupts from me while I rage. Whenever I enter my rage, I have to roll on the table below to see what happens.",
					"If the effect calls for a saving throw, the DC is equal to 8 + my proficiency bonus + my Constitution modifier.\n",
					"d8\tEFFECT",
					" 1\tNecrotic energy bursts from me. Each creature within 30 ft of me takes 1d10 necrotic damage, and I gain temporary HP equal to the sum of the necrotic damage dealt to the creatures.",
					" 2\tI teleport up to 20 ft to an unoccupied space I can see. Until my rage ends, I can activate this effect again on each of my turns as a bonus action.",
					" 3\tI conjure 1d4 intangible spirits that look like flumphs in unoccupied spaces within 30 ft of me. Each spirit immediately flies 30 ft in a random direction. At the end of my turn, all spirits explode and each creature within 5 ft of one or more of them must succeed on a Dexterity saving throw or take 2d8 force damage.",
					" 4\tArcane energy enshrouds me. Until my rage ends, I gain a +2 bonus to AC, and whenever a creature within 10 ft of me hits me with an attack, that creature takes force damage equal to my Constitution modifier.",
					" 5\tPlant life temporarily grows around me: until my rage ends, the ground within 10 ft of me is difficult terrain.",
					" 6\tArcane energy taps into the minds of those around me. Each creature within 30 ft of me must succeed on a Wisdom saving throw or I see a glimpse of the creature's thoughts, learning how it plans to attack me. As a result, the creature has disadvantage on attack rolls against me until the start of my next turn.",
					" 7\tShadows weave around a weapon of my choice I am holding. Until my rage ends, my weapon deals psychic damage instead of its bludgeoning, slashing, or piercing damage, and it gains the light and thrown properties with a normal range of 20 ft and a long range of 60 ft. If I drop the weapon or throw it, the weapon dissipates and reappears in my hand at the end of my turn.",
					" 8\tA beam of brilliant light lances from my chest in a 5-ft-wide, 60-ft-long line. Each creature in the line must succeed on a Constitution saving throw or take 2d8 radiant damage and be blinded until the start of my next turn."
				]
			}]
		},
		"subclassfeature6" : {
			name : "Magic Reserves",
			source : [["UA:BnM", 2]],
			minlevel : 6,
			description : desc([
				"As an action, I can touch a creature and roll a die to channel magic into it",
				"The target regains an expended spell slot of a level equal to or less then the die roll",
				"If it has no expended spell slots of that level, it gains 5\xD7 the die roll in temp HP instead",
				"Regardless of what happens, I take force damage equal to five times the die roll"
			]),
			additional : levels.map(function (n) {
				return n < 6 ? "" : n < 14 ? "1d4" : "1d6";
			}),
			action : [["action", ""]]
		},
		"subclassfeature10" : {
			name : "Arcane Rebuke",
			source : [["UA:BnM", 2]],
			minlevel : 10,
			description : desc([
				"As a reaction when I have to make a save while raging, the magic in my soul lashes out",
				"This causes the creature forcing me to make the save, if any, to take 3d6 force damage"
			]),
			action : [["reaction", " (in Rage after save)"]]
		},
		"subclassfeature14" : {
			name : "Chaotic Fury",
			source : [["UA:BnM", 2]],
			minlevel : 14,
			description : desc([
				"As a bonus action while raging, I can reroll the effect on the Wild Surge table",
				"This replaces the current wild surge effect with a new one"
			]),
			action : ["bonus action", " (in Rage)"]
		}
	}
});
AddSubClass("monk", "way of the astral self-ua", {
	regExpSearch : /^(?=.*astral)(?=.*(self|projection|travel))((?=.*(monk|monastic))|((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior))).*$/i,
	subname : "Way of the Astral Self",
	source : [["UA:BnM", 2]],
	features : {
		"subclassfeature3" : {
			name : "Arms of the Astral Self",
			source : [["UA:BnM", 2]],
			minlevel : 3,
			description : "\n   My ki mastery allows me to summon portions of my astral self; See 3rd page notes",
			action : [["bonus action", "Summon Astral Arms"], ["bonus action", "Astral Arm Attacks (after Attack action)"]],
			weaponsAdd : ["Astral Arms"],
			weaponOptions : {
				regExpSearch : /^(?=.*\bastral\b)(?=.*\barms?\b).*$/i,
				name : "Astral Arms",
				source : [["UA:BnM", 2]],
				ability : 5,
				type : "Natural",
				damage : [1, "", typePF ? "Necrotic/Radiant" : "necrotic|radiant"],
				range : "Melee",
				description : "10 ft reach; Uses Str, Dex, or Wis; Deals necrotic or radiant damage",
				monkweapon : true,
				abilitytodamage : true
			},
			"astral arms" : {
				name : "Astral Arms",
				extraname : "Way of the Astral Self 3",
				source : [["UA:BnM", 2]],
				description : desc([
					"As a bonus action, I can summon my astral arms for 10 minutes; I choose their appearance",
					"While they are summoned, I can use Wisdom instead of Strength for Strength checks/saves",
					"The arms are melee monk weapons with 10 ft reach that can use Wis instead of Str/Dex",
					"I can choose to have them deal either radiant or necrotic damage",
					"After I use them in my Attack action, I can use them for more attacks as a bonus action"
				]),
				additional : levels.map(function (n) {
					return n < 3 ? "" : "2 ki points; " + (n < 11 ? 1 : n < 17 ? 2 : 3) + " bonus action attack" + (n < 11 ? "" : "s");
				})
			},
			autoSelectExtrachoices : [{ extrachoice : "astral arms" }]
		},
		"subclassfeature6" : {
			name : "Visage of the Astral Self",
			source : [["UA:BnM", 3]],
			minlevel : 6,
			description : "\n   I can now also summon the visage of my astral self; See third page notes section",
			action : [["bonus action", "Summon Astral Arms and/or Visage", "Summon Astral Arms"]],
			"astral visage" : {
				name : "Astral Visage",
				extraname : "Way of the Astral Self 6",
				source : [["UA:BnM", 3]],
				description : " [1 ki point]" + desc([
					"As a bonus action (or when summoning my astral arms), I can summon my astral visage",
					"It covers my face like a helmet or mask and I choose its appearance; It lasts for 10 minutes",
					"It grants adv. on Insight \u0026 Intimidation, and the ability to see 120 ft in (magical) darkness"
				])
			},
			autoSelectExtrachoices : [{ extrachoice : "astral visage" }]
		},
		"subclassfeature11" : {
			name : "Awakening of the Astral Self",
			source : [["UA:BnM", 3]],
			minlevel : 11,
			description : "\n   While having both astral arms and visage summoned, I gain extra benefits, see 3rd page",
			"deflect energy" : {
				name : "Deflect Energy",
				extraname : "Awakening of the Astral Self",
				source : [["UA:BnM", 3]],
				description : " [if both astral arms \u0026 visage]" + desc([
					"As a reaction when I take acid, cold, fire, force, or lightning damage, I can deflect it",
					"By doing so, the damage is reduced by 1d10 + my Wisdom modifier + my Monk level"
				])
			},
			"empowered arms" : {
				name : "Empowered Arms",
				extraname : "Awakening of the Astral Self",
				source : [["UA:BnM", 3]],
				description : " [if both astral arms \u0026 visage]" + desc([
					"Once per turn when I hit an astral arms attack, I can add a martial arts die to its damage"
				])
			},
			"word of the spirit" : {
				name : "Word of the Spirit",
				extraname : "Awakening of the Astral Self",
				source : [["UA:BnM", 3]],
				description : " [if both astral arms \u0026 visage]" + desc([
					"I can direct my words to a creature I can see within 30 ft so that only it can hear me",
					"Alternatively, I can amplify my voice so that it is heard by all within 600 ft of me"
				])
			},
			autoSelectExtrachoices : [
				{ extrachoice : "deflect energy" },
				{ extrachoice : "empowered arms" },
				{ extrachoice : "word of the spirit" }
			]
		},
		"subclassfeature17" : {
			name : "Complete Astral Self",
			source : [["UA:BnM", 3]],
			minlevel : 17,
			description : desc([
				"I can now also summon the body of my astral self; See third page notes section",
				"This spectral body covers my physique like armor, connecting with the arms and visage"
			]),
			action : [["bonus action", "Summon Astral Arms and/or Visage, or Complete", "Summon Astral Arms and/or Visage"], ["reaction", "Ki Consumption (Complete Astral Self)"]],
			"astral body" : {
				name : "Astral Body",
				extraname : "Way of the Astral Self 17",
				source : [["UA:BnM", 3]],
				description : " [10 ki points]" + desc([
					"As a bonus action, I can summon the arms, visage, and body of my astral self for 10 min",
					"This gives me the arms, visage, +2 bonus to AC while not incapacitated, and as follows:",
					"When I take the Attack action I can choose to make 3 attacks with my astral arms instead",
					"As a reaction when a creature in 10 ft is reduced to 0 HP, I can regain my Wis mod in ki"
				])
			},
			autoSelectExtrachoices : [{ extrachoice : "astral body" }]
		}
	}
});
