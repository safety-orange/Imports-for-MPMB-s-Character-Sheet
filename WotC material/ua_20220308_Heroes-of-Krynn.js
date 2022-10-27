// This file adds the content from the Unearthed Arcana 2022: Heroes of Krynn article to MPMB's Character Record Sheet
// Contains contributions by Thravieus Windhelm / PoetOfGod (GitHub) / @PoetOfGod#6077 (Discord)

var iFileName = "ua_20220308_Heroes-of-Krynn.js";
RequiredSheetVersion("13.1.2");

SourceList["UA:HoK"] = {
	name : "Unearthed Arcana: Heroes of Krynn",
	abbreviation : "UA:HoK",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2022/dnd/downloads/UA2022HeroesofKrynn.pdf",
	date : "2022/03/08"
};

// Race
RaceList["kender-ua"] = {
	regExpSearch : /kender/i,
	name : "Kender",
	source : [["UA:HoK", 1]],
	plural : "Kender",
	size : 4,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	scoresGeneric : true,
	savetxt : { adv_vs : ["frightened"]},
	abilitySave : 6,
	features : {
		"taunt" : {
			name : "Taunt",
			minlevel : 1,
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			action : [["bonus action", ""]]
		},
		"kender ace" : {
			name : "Kender Ace",
			minlevel : 3,
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			action : [["bonus action", ""]],
			toNotesPage : [{
				name : "Kender Ace Table",
				note : [
					"I possess a magical ability to pull an item out of a bag or another container.",
					"As a bonus action, I can reach into a container I'm carrying and roll a d6 to determine the item I pull out.",
					"The object glimmers softly and disappears after 1 hour.",
					"I can use this bonus action a number of times equal to my proficiency bonus, and you regain all expended uses when I finish a long rest.\n",
					"  d6\tItem",
					"   1\t5d6 gold pieces",
					"   2\t1 simple weapon of my choice that has the light property",
					"   3\t1 item of my choice from the Adventuring Gear table (PHB 148), no more than 1 gp and 1 lb",
					"   4\t1 random item from the Trinkets table (PHB 159)",
					"   5\tMy choice of a crowbar or a grappling hook",
					"   6\t1 item of my choice from the Tools table (PHB 154), no more than 10 gp"
				]
			}]
		}
	},
	trait : "Kender"+
	(typePF ? "\n " : "\t")+"\u2022 Brave: I have adv. on saves to avoid or end being frightened."+
	"\n \u2022 Taunt: As a bonus action, I can have a creature that can hear and understand me within 60 ft make a Wisdom save (DC 8 + Prof B. + Cha mod) or gain disadv. on attacks until my next turn starts. I can do this a number of times per long rest equal to my Prof Bonus."+
	'\n \u2022 Kender Ace: Starting at 3rd-level, as a bonus action, I can reach into a container and roll on the Kender Aces table to determine the item I pull out, see the "Notes" section. I can do this a number of times per long rest equal to my proficiency bonus.'
};

// Subclass
AddSubClass("sorcerer", "lunar magic-ua", {
	regExpSearch : /^(?=.*(sorcerer|witch))(?=.*(lunar|moon)).*$/i,
	subname : "Lunar Magic",
	source : [["UA:HoK", 2]],
	features : {
		"subclassfeature1" : {
			name : "Moon Fire",
			source : [["UA:HoK", 2]],
			minlevel : 1,
			description : desc("I know the Sacred Flame cantrip and can use it on 2 creatures within 5 ft of each other"),
			spellcastingBonus : {
				name : "Moon Fire",
				spells : ["sacred flame"],
				selection : ["sacred flame"]
			},
			weaponsAdd : ["Sacred Flame"],
			spellChanges : {
				"sacred flame" : {
					description : "Up to 2 creas I see, max 5 ft apart, save or 1d8 Radiant dmg; no cover bonus; +1d8 at CL 5, 11, and 17",
					descriptionShorter : "Up to 2 creas I see, max 5 ft apart, save or 1d8 Radiant dmg; no cover bonus; +1d8 CL 5/11/17",
					descriptionCantripDie : "Up to 2 creas I see, max 5 ft apart, save or `CD`d8 Radiant dmg; no bonus for cover on save",
					changes : "When I cast Sacred Flame, I can target one creature as normal or target two creatures within range that are within 5 feet of each other."
				}
			},
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.baseWeaponName == 'sacred flame') {
							fields.Description = fields.Description.replace("1 creature", "up to 2 creatures within 5 ft");
						}
					},
					"When I cast Sacred Flame, I can target one creature as normal or target two creatures within range that are within 5 feet of each other."
				]
			}
		},
		"subclassfeature1.1" : {
			name : "Lunar Embodiment",
			source : [["UA:HoK", 2]],
			minlevel : 1,
			additional : levels.map(function (n) { return (n < 3 ? 3 : n < 5 ? 6 : n < 7 ? 9 : n < 9 ? 12 : 15) + " additional spells known"}),
			spellcastingExtra : ["faerie fire", "dissonant whispers", "sanctuary", "moonbeam", "darkness", "blindness/deafness", "death ward", "bestow curse", "phantom steed", "freedom of movement", "evard's black tentacles", "hallucinatory terrain", "mass cure wounds", "mislead", "dream"],
			spellcastingExtraApplyNonconform : true,
			description : levels.map(function(n) {
				var phases = {
					"\u25CB Full: " : ["Faerie Fire", "Moonbeam", "Death Ward", "Freedom of Movement", "Mass Cure Wounds"],
					"\u25CF New: " : ["Dissonant Whispers", "Darkness", "Bestow Curse", "Evard's Black Tentacles", "Mislead"],
					"\u25D6 Crescent: " : ["Sanctuary", "Blindness/deafness", "Phantom Steed", "Hallucinatory Terrain", "Dream"]
				};
				var aReturn = [
					"When I finish a long rest, I can choose a lunar phase: Full, New, or Crescent Moon",
					"I can cast the spells of the chosen lunar phase each once per long rest without a spell slot"
				];
				var iSpellsAdd = n < 3 ? 1 : n < 5 ? 2 : n < 7 ? 3 : n < 9 ? 4 : 5;
				for (var phase in phases) {
					aReturn.push(phase + phases[phase].slice(0,iSpellsAdd).join(", "));
				}
				//aReturn.push("I know all " + (iSpellsAdd * 3) + " spells above; They don't count towards the number of spells I can know");
				return desc(aReturn);
			}),
			calcChanges : {
				spellAdd : [
					function (spellKey, spellObj, spName, isDuplicate) {
						if (spName === "sorcerer" && !isDuplicate && CurrentSpells.sorcerer.extra.indexOf(spellKey) !== -1) {
							var phases = {
								"F" : ["faerie fire", "moonbeam", "death ward", "freedom of movement", "mass cure wounds"],
								"N" : ["dissonant whispers", "darkness", "bestow curse", "evard's black tentacles", "mislead"],
								"C" : ["sanctuary", "blindness/deafness", "phantom steed", "hallucinatory terrain", "dream"]
							};
							for (var phase in phases) {
								if (phases[phase].indexOf(spellKey) !== -1) {
									spellObj.firstCol = phase;
									return true;
								}
							}
						}
					},
					'The letters "F", "N", or "C" in the first column are used to indicate that a spell belongs to either the Full Moon, New Moon, or Crescent Moon lunar phase.'
				]
			},
			spellFirstColTitle : "Ph",
			spellcastingBonus : {
				// Because Death Ward is a 4th-level spell, but gained at 5th level, we need to manually add it at sorcerer level 5 and 6
				name : "Death Ward",
				spells : ["death ward"],
				selection : ["death ward"],
				firstCol : "F",
				times : levels.map(function(n){ return n === 5 || n === 6 ? 1 : 0; })
			}
		},
		"subclassfeature6" : {
			name : "Lunar Boons",
			source : [["UA:HoK", 3]],
			minlevel : 6,
			description : desc([
				"Each lunar phase is additionally associated with spells of the following schools of magic:",
				"\u25CB Full: Abjur \u0026 Conj\t\t\u25CF New: Evoc \u0026 Necro\t" + (typePF ? "\t" : Array(8).join(" ")) + "\u25D6 Crescent: Div \u0026 Trans",
				"I can reduce the sorcery point needed for Metamagic of spells of my current phase by 1"
			]),
			usages : "Proficiency Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest"
		},
		"subclassfeature6.1" : {
			name : "Waxing and Waning",
			source : [["UA:HoK", 3]],
			minlevel : 6,
			description : desc([
				"As a bonus action, I can spend 1 sorcery point to change my lunar phase"
			]),
			action : [["bonus action", ""]]
		},
		"subclassfeature14" : {
			name : "Lunar Empowerment",
			source : [["UA:HoK", 3]],
			minlevel : 14,
			description : " [passive benefits for current phase]" + desc([
				"\u25CB Full: I shed bright light in a 10-ft radius and dim light for an additional 10 ft",
				"        Myself and creatures I choose inside this bright light have advantage on saves",
				"\u25CF New: Adv. on Stealth checks; If I'm in dim light or darkness, attacks have disadv. vs me",
				"\u25D6 Crescent: I have resistance to Necrotic and Radiant damage"
			]),
			dmgres : [["Necrotic", "Necro. (in crescent)"], ["Radiant", "Rad. (in crescent)"]],
		},
		"subclassfeature18" : {
			name : "Lunar Phenomenon",
			source : [["UA:HoK", 3]],
			minlevel : 18,
			description : " [per phase: 1\xD7 per long rest or 5 SP]" + desc([
				"As a bonus action, or as part of changing phase, I can use a power of the (new) phase:",
				"\u25CB Full: Chosen creatures within 30 ft of me must make a Constitution save or be blinded",
				"   This lasts until their next turn ends; I also heal one creature within 30 ft for 3d8 HP",
				"\u25CF New: Chosen creatures within 30 ft of me must make a Dexterity save",
				"   If failed, they take 3d10 Necrotic damage and have 0 speed until their next turn ends",
				"   Also, I become invisible until the end of my next turn, or until I attack or cast a spell",
				"\u25D6 Crescent: I can magically teleport to an unoccupied space I can see within 60 ft",
				"   I gain resistance to all damage until the start of my next turn",
				"I can use each phase's bonus action 1/LR, or by spending 5 sorcery points to use it again"
			]),
			action : [["bonus action", ""]],
			extraLimitedFeatures : [{
				name : "Lunar Phenomenon (Full)",
				usages : 1,
				recovery : "long rest",
				altResource : "5 SP"
			}, {
				name : "Lunar Phenomenon (New)",
				usages : 1,
				recovery : "long rest",
				altResource : "5 SP"
			}, {
				name : "Lunar Phenomenon (Crescent)",
				usages : 1,
				recovery : "long rest",
				altResource : "5 SP"
			}]
		}
	}
});

// Backgrounds
BackgroundList["knight of solamnia-ua"] = {
	regExpSearch : /^(?=.*(knight|champion|warrior))(?=.*solamnia).*$/i,
	name : "Knight of Solamnia",
	source : [["UA:HoK", 3]],
	skills : ["Athletics", "Survival"],
	gold : 10,
	toolProfs : [["Musical instrument", 1]],
	languageProfs : [1],
	equipleft : [
		["Insignia of rank", "", ""],
		["Deck of cards", "", ""]
	],
	equipright : [
		["Common clothes", "", 3],
		["Pouch (with coins)", "", 1]
	],
	feature : "Squire of Solamnia",
	trait : [
		"I pledge my sword to the greater good. If I must perish in pursuit of that good, so be it.",
		"My comrades-in-arms are my family. I'll do whatever it takes to keep them safe.",
		"The protection of innocent people comes first. All other concerns come second.",
		"I joined the knights for the free meals, but their lessons grew on me over time.",
		"I wish my deeds to become the stuff of legends\xD7just like those of the knighthood's heroic founders.",
		"A dishonorable act drove me to become a knight. I have acted with honor ever since."
	]
};
BackgroundFeatureList["squire of solamnia"] = {
	description : "I gain the Squire of Solamnia feat. In addition, the Knights of Solamnia provide me free, modest lodging and food at any of their fortresses or encampments.",
	source : [["UA:HoKR", 2], ["UA:HoK", 3]],
	eval : function() { AddFeat("Squire of Solamnia"); },
	removeeval : function() { RemoveFeat("Squire of Solamnia"); }
};

BackgroundList["mage of high sorcery-ua"] = {
	regExpSearch : /^(?=.*(mage|wizard|magus))(?=.*high)(?=.*sorcery).*$/i,
	name : "Mage of High Sorcery",
	source : [["UA:HoKR", 3], ["UA:HoK", 4]],
	skills : ["Arcana", "History"],
	gold : 10,
	languageProfs : [2],
	equipleft : [
		["Bottle of colored ink", "", ""],
		["Ink pen", "", ""]
	],
	equipright : [
		["Common clothes", "", 3],
		["Pouch (with coins)", "", 1]
	],
	feature : "Initiate of High Sorcery",
	trait : [
		"I wish to use my knowledge of magic to better people's lives.",
		"My study of magic might reveal all manner of secrets.",
		"Magic is a means to power, and I will use it to pursue my ambitions.",
		"I learned magic so I'd be able to protect those I care about.",
		"I use my magic to maintain the balance between all things.",
		"Whether in the past, present, or future, I will be the greatest mage ever known."
	]
};
BackgroundFeatureList["initiate of high sorcery"] = {
	description : "I gain the Initiate of High Sorcery feat. In addition, the Mages of High Sorcery provide me with free, modest lodging and food indefinitely at any occupied Tower of High Sorcery and for one night at the home of an organization member.",
	source : [["UA:HoKR", 3], ["UA:HoK", 4]],
	eval : function() { AddFeat("Initiate of High Sorcery"); },
	removeeval : function() { RemoveFeat("Initiate of High Sorcery"); }
};

/*	Feats
	All the below feats are the work of PoetOfGod and have not been double-checked
	by Safety-Orange, because the "Revised" article has already been published
	and that superseeds all these feats with newer versions.
*/

// Feats tree for Initiate of High Sorcery
FeatsList["initiate of high sorcery-ua"] = {
	name : "Initiate of High Sorcery",
	source : [["UA:HoK", 6]],
	description : "I learn a cantrip and a first level spell from a list depending on my chosen moon. I can cast the spell once per long rest at its lowest level without expending a spell slot, and can cast it if I have a spell slot to do so. I can choose Int, Wis, or Cha as my spellcasting ability for this.",
	descriptionFull : "You've received training from magic-users affiliated with the Mages of High Sorcery.\n   Choose one of three moons of Krynn, each of which is associated with a distinct type of magic: the black moon, Nuitari; the red moon, Lunitari; or the white moon, Solinari. You learn one cantrip and one 1st-level spell based on the moon you choose, as specified in the Lunar Spells table.\n   You can cast the chosen 1st-level spell without a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast the spell using any spell slots you have.\n   Your spellcasting ability for this feat's spells is Intelligence, Wisdom, or Charisma (choose when you select this feat).\n\n" + toUni("Lunar Spells") + "\n" + toUni("Moon") + "\t" + toUni("Cantrips") + "\t\t" + toUni("1st-level Spell") + "\nNuitari\tChoose one from\tChoose one 1st-level wizard\n\tchill touch, mage\tspell from the evocation or\n\thand, and vicious\tnecromany school of magic.\n\tmockery\nLunitari\tChoose one from\tChoose one 1st-level wizard\n\tguidance,\t\tspell from the school of\n\tmessage, and\tdivination or transmutation.\n\tprestidigitation\nSolinari\tChoose one from\tChoose one 1st-level wizard\n\tproduce flame,\tspell from the abjuration or\n\tresistance, and\tconjuration school of magic.\n\tspare the dying",
	prerequisite : "Apprentice of High Sorcery",
	choices : ["Intelligence - Nuitari", "Intelligence - Lunitari", "Intelligence - Solinari", "Wisdom - Nuitari", "Wisdom - Lunitari", "Wisdom - Solinari", "Charisma - Nuitari", "Charisma - Lunitari", "Charisma - Solinari"],
	// nine choices, one for each ability and moon
	"intelligence - nuitari" : {
		description : "I learn a cantrip (Chill Touch, Mage Hand, or Vicious Mockery) and a 1st-level Evoc/Necro spell from wizard spell list. I can cast the spell once per long rest at its lowest level without expending a spell slot, and can cast it if I have a spell slot to do so. I use Intelligence as my spellcasting ability for this.",
		allowUpCasting : true,
		spellcastingAbility : 4,
		spellcastingBonus : [{
			name : "Nuitari Cantrip",
			spells : ["chill touch", "mage hand", "vicious mockery"],
			firstCol : "atwill"
		}, {
			name : "Nuitari 1st-level Spell",
			"class" : "wizard",
			school : ["Evoc", "Necro"],
			firstCol : "oncelr"
		}]
	},
	"intelligence - lunitari" : {
		description : "I learn a cantrip (Guidance, Message, or Prestidigitation) and a 1st-level Div/Trans spell from wizard spell list. I can cast the spell once per long rest at its lowest level without expending a spell slot, and can cast it if I have a spell slot to do so. I use Intelligence as my spellcasting ability for this.",
		allowUpCasting : true,
		spellcastingAbility : 4,
		spellcastingBonus : [{
			name : "Lunitari Cantrip",
			spells : ["guidance", "message", "prestidigitation"],
			firstCol : "atwill"
		}, {
			name : "Lunitari 1st-level Spell",
			"class" : "wizard",
			school : ["Div", "Trans"],
			firstCol : "oncelr"
		}]
	},
	"intelligence - solinari" : {
		description : "I learn a cantrip (Produce Flame, Resistance, or Spare the Dying) and a 1st-level Abjur/Conj spell from wizard spell list. I can cast the spell once per long rest at its lowest level without expending a spell slot, and can cast it if I have a spell slot to do so. I use Intelligence as my spellcasting ability for this.",
		allowUpCasting : true,
		spellcastingAbility : 4,
		spellcastingBonus : [{
			name : "Solinari Cantrip",
			spells : ["produce flame", "resistance", "spare the dying"],
			firstCol : "atwill"
		}, {
			name : "Solinari 1st-level Spell",
			"class" : "wizard",
			school : ["Abjur", "Conj"],
			firstCol : "oncelr"
		}]
	},
	"wisdom - nuitari" : {
		description : "I learn a cantrip (Chill Touch, Mage Hand, or Vicious Mockery) and a 1st-level Evoc/Necro spell from wizard spell list. I can cast the spell once per long rest at its lowest level without expending a spell slot, and can cast it if I have a spell slot to do so. I use Wisdom as my spellcasting ability for this.",
		allowUpCasting : true,
		spellcastingAbility : 5,
		spellcastingBonus : [{
			name : "Nuitari Cantrip",
			spells : ["chill touch", "mage hand", "vicious mockery"],
			firstCol : "atwill"
		}, {
			name : "Nuitari 1st-level Spell",
			"class" : "wizard",
			school : ["Evoc", "Necro"],
			firstCol : "oncelr"
		}]
	},
	"wisdom - lunitari" : {
		description : "I learn a cantrip (Guidance, Message, or Prestidigitation) and a 1st-level Div/Trans spell from wizard spell list. I can cast the spell once per long rest at its lowest level without expending a spell slot, and can cast it if I have a spell slot to do so. I use Wisdom as my spellcasting ability for this.",
		allowUpCasting : true,
		spellcastingAbility : 5,
		spellcastingBonus : [{
			name : "Lunitari Cantrip",
			spells : ["guidance", "message", "prestidigitation"],
			firstCol : "atwill"
		}, {
			name : "Lunitari 1st-level Spell",
			"class" : "wizard",
			school : ["Div", "Trans"],
			firstCol : "oncelr"
		}]
	},
	"wisdom - solinari" : {
		description : "I learn a cantrip (Produce Flame, Resistance, or Spare the Dying) and a 1st-level Abjur/Conj spell from wizard spell list. I can cast the spell once per long rest at its lowest level without expending a spell slot, and can cast it if I have a spell slot to do so. I use Wisdom as my spellcasting ability for this.",
		allowUpCasting : true,
		spellcastingAbility : 5,
		spellcastingBonus : [{
			name : "Solinari Cantrip",
			spells : ["produce flame", "resistance", "spare the dying"],
			firstCol : "atwill"
		}, {
			name : "Solinari 1st-level Spell",
			"class" : "wizard",
			school : ["Abjur", "Conj"],
			firstCol : "oncelr"
		}]
	},
	"charisma - nuitari" : {
		description : "I learn a cantrip (Chill Touch, Mage Hand, or Vicious Mockery) and a 1st-level Evoc/Necro spell from wizard spell list. I can cast the spell once per long rest at its lowest level without expending a spell slot, and can cast it if I have a spell slot to do so. I use Charisma as my spellcasting ability for this.",
		allowUpCasting : true,
		spellcastingAbility : 6,
		spellcastingBonus : [{
			name : "Nuitari Cantrip",
			spells : ["chill touch", "mage hand", "vicious mockery"],
			firstCol : "atwill"
		}, {
			name : "Nuitari 1st-level Spell",
			"class" : "wizard",
			school : ["Evoc", "Necro"],
			firstCol : "oncelr"
		}]
	},
	"charisma - lunitari" : {
		description : "I learn a cantrip (Guidance, Message, or Prestidigitation) and a 1st-level Div/Trans spell from wizard spell list. I can cast the spell once per long rest at its lowest level without expending a spell slot, and can cast it if I have a spell slot to do so. I use Charisma as my spellcasting ability for this.",
		allowUpCasting : true,
		spellcastingAbility : 6,
		spellcastingBonus : [{
			name : "Lunitari Cantrip",
			spells : ["guidance", "message", "prestidigitation"],
			firstCol : "atwill"
		}, {
			name : "Lunitari 1st-level Spell",
			"class" : "wizard",
			school : ["Div", "Trans"],
			firstCol : "oncelr"
		}]
	},
	"charisma - solinari" : {
		description : "I learn a cantrip (Produce Flame, Resistance, or Spare the Dying) and a 1st-level Abjur/Conj spell from wizard spell list. I can cast the spell once per long rest at its lowest level without expending a spell slot, and can cast it if I have a spell slot to do so. I use Charisma as my spellcasting ability for this.",
		allowUpCasting : true,
		spellcastingAbility : 6,
		spellcastingBonus : [{
			name : "Solinari Cantrip",
			spells : ["produce flame", "resistance", "spare the dying"],
			firstCol : "atwill"
		}, {
			name : "Solinari 1st-level Spell",
			"class" : "wizard",
			school : ["Abjur", "Conj"],
			firstCol : "oncelr"
		}]
	},
};
FeatsList["adept of the black robes-ua"] = {
	name : "Adept of the Black Robes",
	source : [["UA:HoK", 5]],
	description : "I learn one 2nd-level Evoc or Necro spell. I can cast this spell 1/LR w/out using a spell slot, and can cast it normally. Choose an ability for this spell. If creature I can see within 60 ft fails a save vs my spell I can spend HD equal to spell's level. I roll half that many HD and the creature takes that much additional damage.",
	descriptionFull : "Your ambition and loyalty to the Order of the Black Robes has been recognized, granting you these benefits:\n" + toUni("Ambitious Magic.") + " You learn one 2nd-level spell of your choice. The 2nd-level spell must be from the evocation or necromancy school of magic. You can cast this feat's 2nd-level spell without a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast this spell using spell slots you have of the appropriate level. The spell's spellcasting ability is the one chosen when you gain the Initiate of High Sorcery feat.\n" + toUni("Life Channel.") + " You can channel your lifeforce into the power of your magic. When a creature you can see within 60 feet fails on a saving throw against a spell you cast, you can expend a number of Hit Dice equal to the level of the spell. Roll a number of Hit Die equal to half the number of Hit Dice expended (rounded up) and the damage the triggering creature takes increases by an amount equal to the total rolled of those dice.",
	prerequisite : "4th-level, Initiate of High Sorcery feat, Any Non-Good Alignment",
	prereqeval : function(v) { return v.characterLevel >= 4 && CurrentFeats.known.indexOf("initiate of high sorcery-ua") !== -1 && !(/good/i).test(What("Alignment")); },
	spellcastingBonus : {
		name : "2nd-level Evoc/Necro spell",
		"class" : "any",
		school : ["Evoc", "Necro"],
		level : [2, 2],
		firstCol : "oncelr"
	},
	spellcastingAbility : 4,
	allowUpCasting : true,
	choices : ["Intelligence", "Wisdom", "Charisma"],
	selfChoosing : function () {
		var iHghSrcyInit = CurrentFeats.known.indexOf("initiate of high sorcery-ua");
		if (iHghSrcyInit !== -1 && CurrentFeats.choices[iHghSrcyInit]) {
			return CurrentFeats.choices[iHghSrcyInit].toString().split(" ")[0].charAt(0).toUpperCase() + CurrentFeats.choices[iHghSrcyInit].toString().split(" ")[0].slice(1);
		}
	},
	"intelligence" : {
		description : "I learn one 2nd-level Evoc or Necro spell. I can cast this spell 1/LR w/out using a spell slot, and can cast it normally. Int is my ability for this spell. If creature I can see within 60 ft fails a save vs my spell I can spend HD equal to spell's level. I roll half that many HD and the creature takes that much additional damage.",
		spellcastingAbility : 4
	},
	"wisdom" : {
		description : "I learn one 2nd-level Evoc or Necro spell. I can cast this spell 1/LR w/out using a spell slot, and can cast it normally. Wis is my ability for this spell. If creature I can see within 60 ft fails a save vs my spell I can spend HD equal to spell's level. I roll half that many HD and the creature takes that much additional damage.",
		spellcastingAbility : 5
	},
	"charisma" : {
		description : "I learn one 2nd-level Evoc or Necro spell. I can cast this spell 1/LR w/out using a spell slot, and can cast it normally. Cha is my ability for this spell. If creature I can see within 60 ft fails a save vs my spell I can spend HD equal to spell's level. I roll half that many HD and the creature takes that much additional damage.",
		spellcastingAbility : 6
	}
};
FeatsList["adept of the red robes-ua"] = {
	name : "Adept of the Red Robes",
	source : [["UA:HoK", 5]],
	description : "I learn one 2nd-level Div or Trans spell. I can cast this spell 1/LR w/out using a spell slot, and can cast it normally. Int is my ability for this spell. If I roll less than a 10 on an atk, check, or save, I can use my reaction to treat it as a 10. I can do this a number of times equal to my proficiency bonus per long rest.",
	descriptionFull : "Your pursuit of truth and dedication to maintaining the balance between all things has been recognized by the Order of the Red Robes, granting you these benefits:\n" + toUni("Insightful Magic.") + " You learn one 2nd-level spell of your choice. The 2nd-level spell must be from the divination or transmutation school of magic. You can cast this feat's 2nd-level spell without a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast this spell using spell slots you have of the appropriate level. The spell's spellcasting ability is the one chosen when you gain the Initiate of High Sorcery feat.\n" + toUni("Magical Balance.") + " When you make an attack roll, an ability check, or a saving throw, and roll a 9 or lower on the d20, you can use your reaction to balance fate and treat the roll as a 10. you can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	prerequisite : "4th level, Initiate of High Sorcery feat",
	prereqeval : function(v) { return v.characterLevel >= 4 && CurrentFeats.known.indexOf("initiate of high sorcery-ua") !== -1; },
	spellcastingBonus : {
		name : "2nd-level Div/Trans spell",
		"class" : "any",
		school : ["Div", "Trans"],
		level : [2, 2],
		firstCol : "oncelr"
	},
	action : [["reaction", "Magical Balance"]],
	usages : "Proficiency Bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus');",
	recovery : "long rest",
	spellcastingAbility : 4,
	allowUpCasting : true,
	choices : ["Intelligence", "Wisdom", "Charisma"],
	selfChoosing : function () {
		var iHghSrcyInit = CurrentFeats.known.indexOf("initiate of high sorcery-ua");
		if (iHghSrcyInit !== -1 && CurrentFeats.choices[iHghSrcyInit]) {
			return CurrentFeats.choices[iHghSrcyInit].toString().split(" ")[0].charAt(0).toUpperCase() + CurrentFeats.choices[iHghSrcyInit].toString().split(" ")[0].slice(1);
		}
	},
	"intelligence" : {
		description : "I learn one 2nd-level Div or Trans spell. I can cast this spell 1/LR w/out using a spell slot, and can cast it normally. Int is my ability for this spell. If I roll less than a 10 on an atk, check, or save, I can use my reaction to treat it as a 10. I can do this a number of times equal to my proficiency bonus per long rest.",
		spellcastingAbility : 4
	},
	"wisdom" : {
		description : "I learn one 2nd-level Div or Trans spell. I can cast this spell 1/LR w/out using a spell slot, and can cast it normally. Wis is my ability for this spell. If I roll less than a 10 on an atk, check, or save, I can use my reaction to treat it as a 10. I can do this a number of times equal to my proficiency bonus per long rest.",
		spellcastingAbility : 5
	},
	"charisma" : {
		description : "I learn one 2nd-level Div or Trans spell. I can cast this spell 1/LR w/out using a spell slot, and can cast it normally. Cha is my ability for this spell. If I roll less than a 10 on an atk, check, or save, I can use my reaction to treat it as a 10. I can do this a number of times equal to my proficiency bonus per long rest.",
		spellcastingAbility : 6
	}
};
FeatsList["adept of the white robes-ua"] = {
	name : "Adept of the White Robes",
	source : [["UA:HoK", 5]],
	description : "I learn one 2nd-level Abjur or Conj spell. I can cast this spell 1/LR w/out using a spell slot, and can cast it normally. Choose an ability for this spell. When a creature w/in 30 ft takes damage I can use a reaction to expend a spell slot and roll d4s equal to the spell's level and reduce the damage by that much + my SC ability mod.",
	descriptionFull : "Your oath to use magic to make the world a better place has been recognized by the Order of the White Robes, granting you these benefits:\n" + toUni("Protective Magic.") + " You learn one 2nd-level spell of you choice. The 2nd-level spell must be from the abjuration or conjuration school of magic. You can cast this feat's 2nd-level spell without a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast this spell using spell slots you have of the appropriate level. The spell's spellcasting ability is the one chosen when you gain the Initiate of High Sorcery feat.\n" + toUni("Protective Ward.") + " When you or a creature you can see within 30 feet of you takes damage, you can use your reaction to expend a spell slot and weave protective magic around the target. Roll a number of d4s equal to the level of the spell slot expended and reduce the damage the target takes by the total rolled on those dice + your spellcasting ability modifier.",
	prerequisite : "4th level, Initiate of High Sorcery feat, Any Non-Evil Alignment",
	prereqeval : function(v) { return v.characterLevel >= 4 && CurrentFeats.known.indexOf("initiate of high sorcery-ua") !== -1 && !(/evil/i).test(What("Alignment")); },
	spellcastingBonus : {
		name : "2nd-level Abjur/Conj spell",
		"class" : "any",
		school : ["Abjur", "Conj"],
		level : [2, 2],
		firstCol : "oncelr"
	},
	spellcastingAbility : 4,
	allowUpCasting : true,
	choices : ["Intelligence", "Wisdom", "Charisma"],
	selfChoosing : function () {
		var iHghSrcyInit = CurrentFeats.known.indexOf("initiate of high sorcery-ua");
		if (iHghSrcyInit !== -1 && CurrentFeats.choices[iHghSrcyInit]) {
			return CurrentFeats.choices[iHghSrcyInit].toString().split(" ")[0].charAt(0).toUpperCase() + CurrentFeats.choices[iHghSrcyInit].toString().split(" ")[0].slice(1);
		}
	},
	"intelligence" : {
		description : "I learn one 2nd-level Abjur or Conj spell. I can cast this spell 1/LR w/out using a spell slot, and can cast it normally. Int is my ability for this spell. When a creature w/in 30 ft takes damage I can use a reaction to expend a spell slot and roll d4s equal to the spell's level and reduce the damage by that much + my SC ability mod.",
		spellcastingAbility : 4
	},
	"wisdom" : {
		description : "I learn one 2nd-level Abjur or Conj spell. I can cast this spell 1/LR w/out using a spell slot, and can cast it normally. Wis is my ability for this spell. When a crea w/in 30 ft takes dmg I can use a reaction to expend a spell slot and roll d4s equal to the spell's level and reduce the dmg by that much + my SC ability mod.",
		spellcastingAbility : 5
	},
	"charisma" : {
		description : "I learn one 2nd-level Abjur or Conj spell. I can cast this spell 1/LR w/out using a spell slot, and can cast it normally. Cha is my ability for this spell. When a crea w/in 30 ft takes dmg I can use a reaction to expend a spell slot and roll d4s equal to the spell's level and reduce the dmg by that much + my SC ability mod.",
		spellcastingAbility : 6
	}
};

// Feat tree for Divinely Favored
FeatsList["divinely favored-ua"] = {
	name : "Divinely Favored",
	source : [["UA:HoK", 5]],
	description : "I learn Thaumaturgy and one 1st-level spell based on my alignment. I can cast the 1st level spell once per long rest without a spell slot, and I can cast it normally. I choose Int, Wis, or Cha as my spellcasting ability for this. I can use a holy symbol as a spellcasting focus for any spells that use the chosen ability.",
	descriptionFull : "A god has chosen you to carry a spark of their divine power.\n   You learn the thaumaturgy cantrip and one 1st-level spell based on the alignment of your character, as specified in the Alignment Spells table.\n   You can cast the chosen 1st-level spell without a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast the spell using any spell slots you have.\n   Your spellcasting ability for this feat's spells is Intelligence, Wisdom, or Charisma (choose when you select this feat).\n\n" + toUni("Alignment Spells") + "\n" + toUni("Alignment") + "   " + toUni("1st-level Spell") + "\nEvil\t	 Choose one 1st level warlock or wizard spell.\nGood\t	 Choose one 1st-level cleric or wizard spell.\nNeutral\t	 Choose one 1st-level druid or wizard spell.\n\n   In addition, you can use a holy symbol as a spellcasting focus for any spell you cast that uses the spellcasting ability you choose when you select this feat.",
	choices : ["Intelligence - Good", "Intelligence - Neutral", "Intelligence - Evil", "Wisdom - Good", "Wisdom - Neutral", "Wisdom - Evil", "Charisma - Good", "Charisma - Neutral", "Charisma - Evil"],
	// nine choices, one for each alignment and ability pair
	"intelligence - good" : {
		description : "I learn Thaumaturgy and one 1st-level cleric or wizard spell. I can cast the 1st level spell once per long rest without a spell slot, and I can cast it normally. Intelligence is my spellcasting ability for these spells. I can use a holy symbol as a spellcasting focus for all my spells that use Intelligence.",
		allowUpCasting : true,
		spellcastingAbility : 4,
		spellcastingBonus : [{
			name : "Thaumaturgy",
			spells : ["thaumaturgy"],
			selection : ["thaumaturgy"],
			firstCol : "atwill"
		}, {
			name : "1st-level Cleric/Wizard Spell",
			"class" : ["cleric", "wizard"],
			level : [1, 1],
			firstCol : "oncelr"
		}]
	},
	"intelligence - neutral" : {
		description : "I learn Thaumaturgy and one 1st-level druid or wizard spell. I can cast the 1st level spell once per long rest without a spell slot, and I can cast it normally. Intelligence is my spellcasting ability for these spells. I can use a holy symbol as a spellcasting focus for all my spells that use Intelligence.",
		allowUpCasting : true,
		spellcastingAbility : 4,
		spellcastingBonus : [{
			name : "Thaumaturgy",
			spells : ["thaumaturgy"],
			selection : ["thaumaturgy"],
			firstCol : "atwill"
		}, {
			name : "1st-level Druid/Wizard Spell",
			"class" : ["druid", "wizard"],
			level : [1, 1],
			firstCol : "oncelr"
		}]
	},
	"intelligence - evil" : {
		description : "I learn Thaumaturgy and one 1st-level warlock or wizard spell. I can cast the 1st level spell once per long rest without a spell slot, and I can cast it normally. Intelligence is my spellcasting ability for these spells. I can use a holy symbol as a spellcasting focus for all my spells that use Intelligence.",
		allowUpCasting : true,
		spellcastingAbility : 4,
		spellcastingBonus : [{
			name : "Thaumaturgy",
			spells : ["thaumaturgy"],
			selection : ["thaumaturgy"],
			firstCol : "atwill"
		}, {
			name : "1st-level Warlock/Wizard Spell",
			"class" : ["warlock", "wizard"],
			level : [1, 1],
			firstCol : "oncelr"
		}]
	},
	"wisdom - good" : {
		description : "I learn Thaumaturgy and one 1st-level cleric or wizard spell. I can cast the 1st level spell once per long rest without a spell slot, and I can cast it normally. Wisdom is my spellcasting ability for these spells. I can use a holy symbol as a spellcasting focus for all my spells that use Wisdom.",
		allowUpCasting : true,
		spellcastingAbility : 5,
		spellcastingBonus : [{
			name : "Thaumaturgy",
			spells : ["thaumaturgy"],
			selection : ["thaumaturgy"],
			firstCol : "atwill"
		}, {
			name : "1st-level Cleric/Wizard Spell",
			"class" : ["cleric", "wizard"],
			level : [1, 1],
			firstCol : "oncelr"
		}]
	},
	"wisdom - neutral" : {
		description : "I learn Thaumaturgy and one 1st-level druid or wizard spell. I can cast the 1st level spell once per long rest without a spell slot, and I can cast it normally. Wisdom is my spellcasting ability for these spells. I can use a holy symbol as a spellcasting focus for all my spells that use Wisdom.",
		allowUpCasting : true,
		spellcastingAbility : 5,
		spellcastingBonus : [{
			name : "Thaumaturgy",
			spells : ["thaumaturgy"],
			selection : ["thaumaturgy"],
			firstCol : "atwill"
		}, {
			name : "1st-level Druid/Wizard Spell",
			"class" : ["druid", "wizard"],
			level : [1, 1],
			firstCol : "oncelr"
		}]
	},
	"wisdom - evil" : {
		description : "I learn Thaumaturgy and one 1st-level warlock or wizard spell. I can cast the 1st level spell once per long rest without a spell slot, and I can cast it normally. Wisdom is my spellcasting ability for these spells. I can use a holy symbol as a spellcasting focus for all my spells that use Wisdom.",
		allowUpCasting : true,
		spellcastingAbility : 5,
		spellcastingBonus : [{
			name : "Thaumaturgy",
			spells : ["thaumaturgy"],
			selection : ["thaumaturgy"],
			firstCol : "atwill"
		}, {
			name : "1st-level Warlock/Wizard Spell",
			"class" : ["warlock", "wizard"],
			level : [1, 1],
			firstCol : "oncelr"
		}]
	},
	"charisma - good" : {
		description : "I learn Thaumaturgy and one 1st-level cleric or wizard spell. I can cast the 1st level spell once per long rest without a spell slot, and I can cast it normally. Charisma is my spellcasting ability for these spells. I can use a holy symbol as a spellcasting focus for all my spells that use Charisma.",
		allowUpCasting : true,
		spellcastingAbility : 6,
		spellcastingBonus : [{
			name : "Thaumaturgy",
			spells : ["thaumaturgy"],
			selection : ["thaumaturgy"],
			firstCol : "atwill"
		}, {
			name : "1st-level Cleric/Wizard Spell",
			"class" : ["cleric", "wizard"],
			level : [1, 1],
			firstCol : "oncelr"
		}]
	},
	"charisma - neutral" : {
		description : "I learn Thaumaturgy and one 1st-level druid or wizard spell. I can cast the 1st level spell once per long rest without a spell slot, and I can cast it normally. Charisma is my spellcasting ability for these spells. I can use a holy symbol as a spellcasting focus for all my spells that use Charisma.",
		allowUpCasting : true,
		spellcastingAbility : 6,
		spellcastingBonus : [{
			name : "Thaumaturgy",
			spells : ["thaumaturgy"],
			selection : ["thaumaturgy"],
			firstCol : "atwill"
		}, {
			name : "1st-level Druid/Wizard Spell",
			"class" : ["druid", "wizard"],
			level : [1, 1],
			firstCol : "oncelr"
		}]
	},
	"charisma - evil" : {
		description : "I learn Thaumaturgy and one 1st-level warlock or wizard spell. I can cast the 1st level spell once per long rest without a spell slot, and I can cast it normally. Charisma is my spellcasting ability for these spells. I can use a holy symbol as a spellcasting focus for all my spells that use Charisma.",
		allowUpCasting : true,
		spellcastingAbility : 6,
		spellcastingBonus : [{
			name : "Thaumaturgy",
			spells : ["thaumaturgy"],
			selection : ["thaumaturgy"],
			firstCol : "atwill"
		}, {
			name : "1st-level Warlock/Wizard Spell",
			"class" : ["warlock", "wizard"],
			level : [1, 1],
			firstCol : "oncelr"
		}]
	}
};
FeatsList["divine communications-ua"] = {
	name : "Divine Communications",
	source : [["UA:HoK", 5]],
	description : "I learn Augury and Commune. I can cast these spells without a spell slot, then must wait 1d4 long rests before doing so again, and I can cast it normally. My chosen ability from Divinely Favored is my spellcasting ability for these spells",
	descriptionFull : "Your connection to your god deepens, granting you these benefits:\n" + toUni("Ability Score Increase.") + " Increase the ability score of the spellcasting ability chosen when you gained the Divinely Favored feat by 1, to a maximum of 20.\n" + toUni("Celestial Tongues.") + " You learn to speak, read, and write Celestial, and two other languages of your choice.\n" + toUni("Divine Omens.") + " You can cast the augury and commune spell without a spell slot, and you must finish 1d4 long rests before you can cast it in this way again. You can also cast the spell using the spell slots you have of the appropriate level. The spell's spellcasting ability is the one chosen when you gained the Divinely Favored feat.",
	prerequisite : "4th level, Divinely Favored feat",
	prereqeval : function(v) { return v.characterLevel >= 4 && CurrentFeats.known.indexOf("divinely favored-ua") !== -1; },
	languageProfs : ["Celestial", 2],
	spellcastingBonus : {
		name : "Augury and Commune",
		spells : ["augury", "commune"],
		selection : ["augury", "commune"],
		times : 2
	},
	choices : ["Intelligence", "Wisdom", "Charisma"],
	selfChoosing : function () {
		// extract just the ability from the divinely favored choices
		var iDvnFav = CurrentFeats.known.indexOf("divinely favored-ua");
		if (iDvnFav !== -1 && CurrentFeats.choices[iDvnFav]) {
			return CurrentFeats.choices[iDvnFav].toString().split(" ")[0].charAt(0).toUpperCase() + CurrentFeats.choices[iDvnFav].toString().split(" ")[0].slice(1);
		}
	},
	"intelligence" : {
		description : "I learn Augury and Commune. I can cast these spells without a spell slot, then must wait 1d4 long rests before doing so again, and I can cast it normally. Intelligence is my spellcasting ability for these spells",
		spellcastingAbility : 4,
		scores : [0, 0, 0, 1, 0, 0]
	},
	"wisdom" : {
		description : "I learn Augury and Commune. I can cast these spells without a spell slot, then must wait 1d4 long rests before doing so again, and I can cast it normally. Wisdom is my spellcasting ability for these spells",
		spellcastingAbility : 5,
		scores : [0, 0, 0, 0, 1, 0]
	},
	"charisma" : {
		description : "I learn Augury and Commune. I can cast these spells without a spell slot, then must wait 1d4 long rests before doing so again, and I can cast it normally. Charisma is my spellcasting ability for these spells",
		spellcastingAbility : 6,
		scores : [0, 0, 0, 0, 0, 1]
	}
};

// Feats tree for Squire of Solamnia
FeatsList["squire of solamnia-ua"] = {
	name : "Squire of Solamnia",
	source : [["UA:HoK", 6]],
	description : "As a reaction once per long rest when I see another creature 30 ft make a save, I can give them advantage if they can hear and understand me. I gain proficiency with with medium armor and martial weapons. I have advantage on saves to avoid falling off a mount.",
	descriptionFull : "Your training in the ways of the Knights of Solamnia grants you these benefits:\n" + toUni("Martial Training.") + " You gain proficiency with medium armor and martial weapons.\n" + toUni("Defensive Rider.") + " You have advantage on saving throws made to avoid falling off a mount.\n" + toUni("Encouraging Rally.") + " When another creature you can see within 30 feet of you makes a saving throw, you can use your reaction to inspire them. If the target can hear you and understands you, it gains advantage on the saving throw. Once you use this reaction, you can't do so again until you finish a long rest.",
	prerequisite : "Squireship in the Knights of Solamnia",
	armorProfs : [false, true, false, false],
	weaponProfs : [false, true],
	savetxt : { adv_vs : ["falling off a mount"]},
	action : [["reaction", "Encouraging Rally (Squire of Solamnia)"]],
	extraLimitedFeatures : [{
		name : "Encouraging Rally (Squire of Solamnia)",
		usages : 1,
		recovery: "long rest"
	}]
};
FeatsList["knight of the crown-ua"] = {
	name : "Knight of the Crown",
	source : [["UA:HoK", 6]],
	description : "When a creature within 30 ft makes an attack roll against another creature within 5 ft, I can use my reaction to grant advantage on the attack roll. I can do this a number of times equal to my Proficiency Bonus and regain all expended uses when I finish a long rest.",
	descriptionFull : "You are a Knight of Solamnia aligned with the Order of the Crown, a group that extols the virtues of cooperation, loyalty, and obedience. You excel in group combat and gain these benefits:\n" + toUni("Ability Score Increase.") + " Increase your Strength or Dexterity score by 1, to a maximum of 20.\n" + toUni("Tactical Teamwork.") + " When a creature you can see within 30 feet of you makes an attack roll against another creature that is within 5 feet of you, you can use your reaction to grant advantage on the attack roll. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	prerequisite : "4th level, Squire of Solamnia feat",
	prereqeval : function(v) { return v.characterLevel >= 4 && CurrentFeats.known.indexOf("squire of solamnia-ua") !== -1; },
	scorestxt : "+1 Strength or Dexterity",
	action : [["reaction", "Tactical Teamwork (Knight of the Crown)"]],
	usages : "Proficiency Bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus');",
	recovery : "long rest"
};
FeatsList["knight of the sword-ua"] = {
	name : "Knight of the Sword",
	source : [["UA:HoK", 6]],
	description : "I gain proficiency in the chosen ability saving throw. After I or a creature I can see within 30 feet fails an Int, Wis, or Cha save, I can expend a HD. I roll that die and increase the save by that much. Once I change a fail into a success, I can't do so again until a long rest.",
	descriptionFull : "You are a Knight of Solamnia aligned with the Order of the Sword, a group devoted to heroism and courage. Bravery steels your spirit, granting you these benefits:\n" + toUni("Disciplined Spirit.") + " You gain proficiency in Intelligence, Wisdom, or Charisma saving throws (your choice when you take this feat).\n" + toUni("Willpower.") + " Immediately after you or a creature you can see within 30 feet of you fail an Intelligence, Wisdom, or Charisma saving throw, you can expend a Hit Die. The saving throw increases by an amount equal to a roll of that Hit Die, potentially turning a failure into a success. Once you turn a failed saving throw into a successful one using this feat, you can't do so again until you finish a long rest.",
	prerequisite : "4th level, Squire of Solamnia feat",
	prereqeval : function(v) { return v.characterLevel >= 4 && CurrentFeats.known.indexOf("squire of solamnia-ua") !== -1; },
	choices : ["Intelligence", "Wisdom", "Charisma"],
	"intelligence" : {
		saves : ["Int"]
	},
	"wisdom" : {
		saves : ["Wis"]
	},
	"charisma" : {
		saves : ["Cha"]
	},
	usages : 1,
	recovery : "long rest"
};
FeatsList["knight of the rose-ua"] = {
	name : "Knight of the Rose",
	source : [["UA:HoK", 6]],
	description : "When I roll initiative I can choose up to 3 other creatures I can see within 30 ft. They gain temp HP equal to a roll of my HD + my proficiency bonus + the modifier of the score increased by this feat. I can do this a number of times equal to my Proficiency Bonus and regain all expended uses when I finish a long rest.",
	descriptionFull : "You are a Knight of Solamnia aligned with the Order of the Rose, a group known for leadership, justice, and wisdom. Your resolve grants you these benefits:\n" + toUni("Ability Score Increase.") + " Increase your Constitution or Charisma score by 1, to a maximum of 20.\n" + toUni("Bolstering Rally.") + " When you roll initiative, you can choose up to three other creatures you can see within 30 feet of you. Each creature can gain temporary hit points equal to a roll of your Hit Die + your proficiency bonus + the ability modifier of the ability score increased by this feat. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	prerequisite : "4th level, Squire of Solamnia feat",
	prereqeval : function(v) { return v.characterLevel >= 4 && CurrentFeats.known.indexOf("squire of solamnia-ua") !== -1; },
	scorestxt : "+1 Constitution or Charisma",
	choices : ["Constitution", "Charisma"],
	"constitution" : {
		description : "When I roll initiative I can choose up to 3 other creatures I can see within 30 ft. They gain temp HP equal to a roll of my HD + my proficiency bonus + my Constitution modifier. I can do this a number of times equal to my Proficiency Bonus and regain all expended uses when I finish a long rest.",
		scores : [0, 0, 1, 0, 0, 0]
	},
	"charisma" : {
		description : "When I roll initiative I can choose up to 3 other creatures I can see within 30 ft. They gain temp HP equal to a roll of my HD + my proficiency bonus + my Charisma modifier. I can do this a number of times equal to my Proficiency Bonus and regain all expended uses when I finish a long rest.",
		scores : [0, 0, 0, 0, 0, 1]
	},
	usages : "Proficiency Bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus');",
	recovery : "long rest"
};
