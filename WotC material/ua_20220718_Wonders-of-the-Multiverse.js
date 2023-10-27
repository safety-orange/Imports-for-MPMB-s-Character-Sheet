// This file adds the content from the Unearthed Arcana 2022: Giant Options article to MPMB's Character Record Sheet
var iFileName = "ua_20220718_Wonders-of-the-Multiverse.js";
RequiredSheetVersion("13.1.2");

SourceList["UA:WotM"] = {
	name : "Unearthed Arcana: Wonders of the Multiverse",
	abbreviation : "UA:WotM",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2022/dnd/downloads/UA2022-WondersoftheMultiverse.pdf",
	date : "2022/07/18"
};

// Race
RaceList["glitchling-ua"] = {
	regExpSearch : /glitchling/i,
	name : "Glitchling",
	source : [["UA:WotM", 2]],
	plural : "Glitchlings",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	scoresGeneric : true,
	savetxt : { adv_vs : ["charmed"] },
	armorAdd : "Armored Plating",
	armorOptions : {
		regExpSearch : /^(?=.*armou?red)(?=.*plating).*$/i,
		name : "Armored Plating",
		source : [["UA:WotM", 2]],
		ac : 14
	},
	features : {
		"balance chaos" : {
			name : "Balance Chaos",
			minlevel : 1,
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest"
		},
		"vestigial wings" : {
			name : "Vestigial Wings",
			minlevel : 1,
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest"
		}
	},
	trait : "Glitchling (my type is Construct)"+
	"\n \u2022 Armored Plating: My base AC is 14 + my Dexterity modifier."+
	"\n \u2022 Living Construct: Life preserving spells that normally don't affect constructs work on me." + (typePF ? " (e.g. Cure Wounds, Spare the Dying)." : "")+
	"\n \u2022 Ordered Mind: I have adv. on Wis (Insight) checks and on saves against being charmed."+
	"\n \u2022 Balance Chaos: " + (typePF ? "My proficiency bonus per long rest, I can treat an attack roll or save roll of 9 or lower as a 10 instead." : "Prof Bonus per long rest, I can treat a save/attack roll below 10 as a 10.")+
	"\n \u2022 Vestigial Wings: Prof Bonus per long rest, I can gain a flying speed equal to my walking speed for 1 turn, but fall if I end my turn aloft."
};

// Subclass
AddSubClass("cleric", "fate-ua", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(fate|destiny)).*$/i,
	subname : "Fate Domain",
	source : [["UA:WotM", 2]],
	spellcastingExtra : ["dissonant whispers", "heroism", "see invisibility", "warding bond", "beacon of hope", "clairvoyance", "death ward", "divination", "commune", "geas"],
	features : {
		"subclassfeature1" : {
			name : "Omens and Portents",
			source : [["UA:WotM", 2]],
			minlevel : 1,
			description : desc([
				"I can cast Augury once per long rest without using a spell slot or requiring components",
				"Once I do, my divination spells have -25% of no/random answer until I finish a long rest"
			]),
			usages : 1,
			recovery : "long rest",
			additional : "Augury",
			spellcastingBonus : {
				name : "Omens and Portents",
				spells : ["augury"],
				selection : ["augury"],
				firstCol : 'oncelr'
			},
			spellChanges : {
				"augury" : {
					components : "",
					compMaterial : "",
					changes : "Using Omens and Portents, I can cast Augury once per long rest without expending a spell slot or requiring components."
				}
			}
		},
		"subclassfeature1.1" : {
			name : "Thies That Bind",
			source : [["UA:WotM", 2]],
			minlevel : 1,
			description : desc([
				"As an action, I can magically tie my fate to a creature or object I touch for 1 hour",
				"Unwilling creatures can make a Wisdom save to resist; It ends early if I do this again",
				"I know the direction to a bound target's location and the direction of its movement",
				"Once per turn, a spell I cast on the target using a spell slot gets +1d6 damage or healing"
			]),
			action : [["action", ""]],
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest"
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Strands of Fate",
			source : [["UA:WotM", 3]],
			minlevel : 2,
			description : desc([
				"As a bonus action, I can manipulate the strands of fate for 1 minute while concentrating",
				"As a reaction when a creature I see makes a check or attack, I can impose adv. or disadv."
			]),
			action : [["bonus action", " (activate)"], ["reaction", " (if active)"]]
		},
		"subclassfeature6" : {
			name : "Insightful Striking",
			source : [["UA:WotM", 3]],
			minlevel : 6,
			description : desc([
				"As a bonus action, I can gain a brief vision of the defenses of a creature I see within 30 ft",
				"Until the end of my next turn, I gain one of the following effects:",
				" \u2022 I add 1d6 to my next attack roll against the target ",
				" \u2022 The target subtracts 1d6 from the next saving throw it makes against a spell I cast"
			]),
			action : [["bonus action", ""]],
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest"
		},
		"subclassfeature8" : {
			name : "Potent Spellcasting",
			source : [["UA:WotM", 3]],
			minlevel : 8,
			description : desc("I add my Wisdom modifier to the damage I deal with my cleric cantrips"),
			calcChanges : {
				atkCalc : [
					function (fields, v, output) {
						if (classes.known.cleric && classes.known.cleric.level > 7 && v.thisWeapon[3] && v.thisWeapon[4].indexOf('cleric') !== -1 && SpellsList[v.thisWeapon[3]].level === 0) {
							output.extraDmg += What('Wis Mod');
						};
					},
					"My cleric cantrips get my Wisdom modifier added to their damage."
				],
				spellAdd : [
					function (spellKey, spellObj, spName) {
						if (spName.indexOf("cleric") == -1 || !What("Wis Mod") || Number(What("Wis Mod")) <= 0 || spellObj.psionic || spellObj.level !== 0) return;
						return genericSpellDmgEdit(spellKey, spellObj, "\\w+\\.?", "Wis");
					},
					"My cleric cantrips get my Wisdom modifier added to their damage."
				]
			}
		},
		"subclassfeature17" : {
			name : "Visions of the Future",
			source : [["UA:WotM", 3]],
			minlevel : 17,
			description : desc(["Once per long rest, I can cast Foresight without a spell slot with a duration of 1 minute"]),
			usages : 1,
			recovery : "long rest",
			limfeaname : "Visions of the Future (Foresight)",
			spellcastingBonus : {
				name : "Visions of the Future",
				spells : ["foresight"],
				selection : ["foresight"],
				firstCol : 'oncelr'
			},
			spellChanges : {
				"foresight" : {
					duration : "1 min",
					changes : "Using Visions of the Future, I can cast Foresight once per long rest without expending a spell slot; when I cast the spell in this way, the spell's duration is 1 minute for that casting."
				}
			}
		}
	}
});

// Backgrounds
if (!BackgroundList["gate warden"]) {
	BackgroundList["gate warden"] = {
		regExpSearch : /^(?=.*gate)(?=.*warden).*$/i,
		name : "Gate Warden",
		source : [["P:AitM", 7], ["UA:WotM", 3]],
		skills : ["Persuasion", "Survival"],
		gold : 10,
		languageProfs : [["Any (Abyssal, Celestial, or Infernal recommended)", 2]],
		equipleft : [
			["Blank book", "", 5],
			["Ink, 1 ounce bottle of", 1, ""],
			["Ink pen or quill", "", ""],
			["Ring of keys to unknown locks", "", ""]
		],
		equipright : [
			["Traveler's clothes", "", 4],
			["Pouch (with coins)", "", 1]
		],
		feature : "Planar Infusion",
		trait : [
			"Strange events and otherworldly creatures don't phase me.",
			"I think in terms of exchange; something for something, nothing for nothing.",
			"I speak with an unusual cadence.",
			"I pepper my speech with borrowed words or curses from planar languages.",
			"I've seen enough to know that you can't take anyone at face value, so I scrutinize everyone I deal with.",
			"I have a superstitious habit I picked up, such as touching iron when I'm nervous or arranging objects in a specific order."
		],
		extra : [
			"Select a Trinket",
			"Vial pendant with glowing honey",
			"Whispering lead ingot thumbprint",
			"Two chiming lodestone spheres",
			"Skin-safe smoldering pebble of coal",
			"Light up white feather",
			"Hard to remove chain-link ring"
		]
	};
}
if (!BackgroundFeatureList["planar infusion"]) {
	BackgroundFeatureList["planar infusion"] = {
		description : "I spent a good amount of time somewhere influenced by planar forces. I'm accustomed to experiences that would leave others reeling in terror or captivated by beauty, and I'm comfortable dealing with fiends and celestials. I know where to find free, modest lodging and food in the community I grew up in. Also, I gain the Scion of the Outer Planes feat.",
		source : [["P:AitM", 7], ["UA:WotM", 3]],
		eval : function() { AddFeat("Scion of the Outer Planes"); },
		removeeval : function() { RemoveFeat("Scion of the Outer Planes"); }
	};
}

BackgroundList["giant foundling-ua"] = {
	regExpSearch : /^(?=.*giant)(?=.*foundling).*$/i,
	name : "Giant Foundling",
	source : [["UA:WotM", 4]],
	skills : ["Intimidation", "Survival"],
	gold : 10,
	languageProfs : [2],
	equipleft : [
		["Backpack", "", 5],
		["Small stone/sprig reminding of home", "", ""]
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["Pouch (with coins)", "", 1]
	],
	feature : "Strike of the Giants",
	trait : [
		"What I lack in stature, I make up for with sheer spite.",
		"Sometimes size does matter, okay? If I see a beast bigger than me, I'm immediately running away.",
		"Crowded spaces make me uncomfortable. I'd much rather be in a wide-open field than a bustling tavern.",
		"I like being small. It helps me stay unnoticed\u2014and underestimated.",
		"Size is just half the story. Every avalanche begins as a single pebble.",
		"The world always feels too big, and I'm afraid I'll never find my place in it."
	],
	extra : [
		"Select an Origin Story",
		"Found as a baby" + (typePF ? "": " by nomadic giants"),
		"Rescued from mountain crag" + (typePF ? "": " by stone giants"),
		"Found as a child lost in a jungle" + (typePF ? "": " by a frost giant"),
		"Home/family killed by warring giants"
	]
};
if (!BackgroundFeatureList["strike of the giants"]) {
	BackgroundFeatureList["strike of the giants"] = {
		description : "I grew up among giants, even though I'm not one. Something about this environment ensured that I grew to a remarkable size and I have learned how to embody the titanic might of giants. I'm used to moving through a world much bigger than me, and that is reflected in my skills, attitude, and perspective on life. I gain the Strike of the Giants feat.",
		source : [["GotG", 13], ["UA:WotM", 4]],
		eval : function() { AddFeat("Strike of the Giants"); },
		removeeval : function() { RemoveFeat("Strike of the Giants"); }
	};
}

BackgroundList["planar philosopher-ua"] = {
	regExpSearch : /^(?=.*planar)(?=.*philosopher).*$/i,
	name : "Planar Philosopher",
	source : [["UA:WotM", 4]],
	skills : ["Arcana", "Persuasion"],
	gold : 10,
	languageProfs : [2],
	equipright : [
		["Common clothes", "", 3],
		["Pouch (with coins from different planes)", "", 1]
	],
	feature : "Conviction",
	trait : [
		"I don't venerate any gods; we can be as powerful or greater than them.",
		"Experience is everything, live in the moment.",
		"When things crumble, I find meaning in the ashes.",
		"Life thrives through order; I won't tolerate disruptions.",
		"When others make plans, the multiverse laughs and so do I.",
		"I know what's right, and no one will stand in my way."
	],
	extra : [
		"Select a Trinket",
		"Inscribed locket with image of mentor",
		"Bleached rat skull with glass eyes",
		"Torn parchment with half a puzzle",
		"Bracelet of twisted razorvine stems",
		"Fragment of verdigris bronze blade",
		"Smooth stone with holy symbols"
	]
};
if (!BackgroundFeatureList["conviction"]) {
	BackgroundFeatureList["conviction"] = {
		description : "I subscribe to a distinct philosophy that seeks to understand the nature of the planes or a hidden truth of the multiverse and spread my philosophy. I am part of a network of like-minded believers who provide me free, modest lodging and food at any of their holding or the homes of other faction members. Also, I gain the Scion of the Outer Planes feat.",
		source : [["P:AitM", 8], ["UA:WotM", 4]],
		eval : function() { AddFeat("Scion of the Outer Planes"); },
		removeeval : function() { RemoveFeat("Scion of the Outer Planes"); }
	};
}

BackgroundList["rune carver-ua"] = {
	regExpSearch : /^(?=.*rune)(?=.*carver).*$/i,
	name : "Rune Carver",
	source : [["UA:WotM", 5]],
	skills : ["History", "Perception"],
	gold : 10,
	languageProfs : ["Giant", 1],
	equipleft : [
		["Set of artisan's tools", "", ""],
		["Small knife", "", 0.5],
		["Whetstone", "", 1]
	],
	equipright : [
		["Common clothes", "", 3],
		["Pouch (with coins)", "", 1]
	],
	feature : "Rune Carver Apprentice",
	trait : [
		"Is it practical to learn an ancient language that is rarely used in everyday speech? No. But is it fun? Very.",
		"I learned one of my ancestors was a lauded rune carver whose story was lost to time. I seek to rekindle that legacy.",
		"The old, traditional markings of runecraft look so boring. Why not give your runes some flair?",
		"In my studies of runes, I strive to understand how great civilizations of the past fell, so that I may prevent it from happening to societies of the present.",
		"Life may be a whirlwind of chaos around me, but whenever I create my runes, I feel at peace.",
		"My brain struggles to process ink words written on paper, but the tactile feeling of carved runes makes my mind sing."
	],
	extra : [
		"Select a Rune Style",
		"Use fine metal needle to inscribe",
		"On small wooden figurines",
		"On glass beads in necklace/bracelet",
		"Stitched into the hems of clothing",
		"Carved on set of animal bones",
		"Drawn into candles"
	]
};
BackgroundFeatureList["rune carver apprentice"] = {
	description : "I've dedicated my life to studying the practice of runecraft. Whether I was personally taught by a master rune carver or learned by poring over engravings in ancient ruins, I understand how to tap into the supernatural power held within runes. Also, I gain the Rune Carver Apprentice feat.",
	source : [["UA:WotM", 5]],
	eval : function() { AddFeat("Rune Carver Apprentice"); },
	removeeval : function() { RemoveFeat("Rune Carver Apprentice"); }
};

// Feats
FeatsList["cartomancer-ua"] = {
	name : "Cartomancer",
	source : [["UA:WotM", 6]],
	description : 'I can use a deck of cards as a spellcasting focus. When doing so, Prof Bonus per long rest I can add +1d4 to the damage of one target of a spell I cast. I know Prestidigitation and can also cast it to do stage magic, concealing its components. When I finish a long rest, I can store a spell into a card, see "Hidden Ace" notes.',
	descriptionFull : "You have learned to channel your magic through a deck of playing cards, granting you these benefits:"+
	"\n   " + toUni("Card Focus") + ". You can use a deck of cards as your spellcasting focus. When you use the deck as a focus to cast a spell that deals damage, roll a d4. You gain a bonus to one damage roll of the spell equal to the number rolled. This bonus applies to one creature of your choice that you can see damaged by the spell; you can use this benefit a number of times equal to your proficiency bonus, and you regain all expended uses of it when you finish a long rest."+
	"\n   " + toUni("Card Tricks") + ". You learn the prestidigitation cantrip and can use it to create illusions that duplicate the effects of stage magic. When you use prestidigitation in this way, you can conceal the verbal and somatic components of the spell as mundane conversation and card-handling."+
	"\n   " + toUni("Hidden Ace") + ". When you finish a long rest, you can choose one spell you know and imbue it into a card; the chosen spell must have a casting time of 1 action, and its level must be less than or equal to your proficiency bonus. While the card is imbued with the spell, you can use your bonus action to flourish the card and cast the spell within. The card then immediately loses its magic.",
	prerequisite : "4th-level; Sorcerer, Warlock, or Wizard Class",
	prereqeval : function (v) {
		return v.characterLevel >= 4 && (classes.known.wizard || classes.known.warlock || classes.known.sorcerer);
	},
	extraLimitedFeatures : [{
		name : "Cartomancer (+1d4 spell damage)",
		usages : "Proficiency bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest"
	}],
	action : [["bonus action", "Hidden Ace (use imbued card)"]],
	toNotesPage : [{
		name : "Hidden Ace",
		page3notes : true,
		note : [
			"Whenever I finish a long rest, I can imbue a spell I know into a card until I flourish the card",
			"The spell must have a casting time of 1 action and a level no more than my Prof Bonus",
			"As a bonus action, I can flourish the card to cast the stored spell, ousting it from the card"
		]
	}]
};

// Scion of the Outer Planes feat tree
FeatsList["scion of the outer planes-ua"] = {
	name : "Scion of the Outer Planes",
	source : [["UA:WotM", 9]],
	description : "I am adept at navigating planar pathways and the strange realities of the outer planes. I can select a plane and gain resistance to a damage type and learn a cantrip associated with that plane. I can cast the cantrip without material components. I can choose Int, Wis, or Cha as my spellcasting ability for this.",
	descriptionFull : "You are influenced by and adept at navigating planar pathways and the strange realities of the Outer Planes."+
	"\n   Whether planar essence infuses you or you have extraplanar ancestry, your connection to a plane infuses you with the energies found there. Choose a type of plane listed in the table below. Your choice gives you resistance to a damage type and the ability to cast a cantrip, as specified in the table. You can cast this cantrip without material components, and your spellcasting ability for it is Intelligence, Wisdom, or Charisma (choose when you select this feat)."+
	toUni("\n\nPlane\t\tResistance\tCantrip")+
	"\nAstral\t\tPsychic\t\tMessage"+
	"\nChaotic Outer\tNecrotic\t\tMinor Illusion"+
	"\nEvil Outer  \tNecrotic\t\tChill Touch"+
	"\nGood Outer  \tRadiant\t\tSacred Flame"+
	"\nLawful Outer\tRadiant\t\tGuidance"+
	"\nThe Outlands\tPsychic\t\tMage Hand",
	spellcastingAbility : [4,5,6],
	choices : ['Astral Plane (Psychic, Message)', 'Chaotic Outer Plane (Necrotic, Minor Illusion)', 'Evil Outer Plane (Necrotic, Chill Touch)', 'Good Outer Plane (Radiant, Sacred Flame)', 'Lawful Outer Plane (Radiant, Guidance)', 'The Outlands (Psychic, Mage Hand)'],
	'astral plane (psychic, message)' : {
		name : "Scion of the Outer Planes (Astral Plane)",
		description : "I am adept at navigating planar pathways and the strange realities of the outer planes. My connection to the astral plane gives me resistance to psychic damage and I know the Message cantrip, which I can cast without material components. I can choose Int, Wis, or Cha as my spellcasting ability for this.",
		spellcastingAbility : [4,5,6],
		allowUpCasting : true,
		spellcastingBonus : {
			name : "Astral Plane",
			spell : ["message"],
			selection : ["message"],
			firstCol : "atwill"
		},
		dmgres : ["Psychic"],
		spellChanges : {
			"message" : {
				components : "V,S",
				compMaterial : "",
				changes : "Using Scion of the Outer Planes, I can cast Message without material components."
			}
		}
	},
	'chaotic outer plane (necrotic, minor illusion)' : {
		name : "Scion of the Outer Planes (Chaotic Outer Plane)",
		description : "I am adept at navigating planar pathways and the strange realities of the outer planes. My connection to a chaotic outer plane gives me resistance to necrotic damage and I know the Minor Illusion cantrip, which requires no material components. I can choose Int, Wis, or Cha as my spellcasting ability for this.",
		spellcastingAbility : [4,5,6],
		allowUpCasting : true,
		spellcastingBonus : {
			name : "Chaotic Outer Plane",
			spells : ["minor illusion"],
			selection : ["minor illusion"],
			firstCol : "atwill"
		},
		dmgres : ["Necrotic"],
		spellChanges : {
			"minor illusion" : {
				components : "S",
				compMaterial : "",
				changes : "Using Scion of the Outer Planes, I can cast Minor Illusion without material components."
			}
		}
	},
	'evil outer plane (necrotic, chill touch)' : {
		name : "Scion of the Outer Planes (Evil Outer Plane)",
		description : "I am adept at navigating planar pathways and the strange realities of the outer planes. I'm infused with or have ancestry from an evil outer plane. This connection gives me resistance to necrotic damage and I know the Chill Touch cantrip. I can choose Int, Wis, or Cha as my spellcasting ability for this.",
		spellcastingAbility : [4,5,6],
		allowUpCasting : true,
		spellcastingBonus : {
			name : "Evil Outer Plane",
			spells : ["chill touch"],
			selection : ["chill touch"],
			firstCol : "atwill"
		},
		dmgres : ["Necrotic"]
	},
	'good outer plane (radiant, sacred flame)' : {
		name : "Scion of the Outer Planes (Good Outer Plane)",
		description : "I am adept at navigating planar pathways and the strange realities of the outer planes. I'm infused with or have ancestry from an good outer plane. This connection gives me resistance to radiant damage and I know the Sacred Flame cantrip. I can choose Int, Wis, or Cha as my spellcasting ability for this.",
		spellcastingAbility : [4,5,6],
		allowUpCasting : true,
		spellcastingBonus : {
			name : "Good Outer Plane",
			spells : ["sacred flame"],
			selection : ["sacred flame"],
			firstCol : "atwill"
		},
		dmgres : ["Radiant"]
	},
	'lawful outer plane (radiant, guidance)' : {
		name : "Scion of the Outer Planes (Lawful Outer Plane)",
		description : "I am adept at navigating planar pathways and the strange realities of the outer planes. I'm infused with or have ancestry from an lawful outer plane. This connection gives me resistance to radiant damage and I know the Guidance cantrip. I can choose Int, Wis, or Cha as my spellcasting ability for this.",
		spellcastingAbility : [4,5,6],
		allowUpCasting : true,
		spellcastingBonus : {
			name : "Lawful Outer Plane",
			spells : ["guidance"],
			selection : ["guidance"],
			firstCol : "atwill"
		},
		dmgres : ["Radiant"]
	},
	'the outlands (psychic, mage hand)' : {
		name : "Scion of the Outer Planes (The Outlands)",
		description : "I am adept at navigating planar pathways and the strange realities of the outer planes. I'm infused with or have ancestry from a plane of the outlands. This gives me resistance to psychic damage and I know the Mage Hand cantrip. I can choose Int, Wis, or Cha as my spellcasting ability for this.",
		spellcastingAbility : [4,5,6],
		allowUpCasting : true,
		spellcastingBonus : {
			name : "The Outlands",
			spells : ["mage hand"],
			selection : ["mage hand"],
			firstCol : "atwill"
		},
		dmgres : ["Psychic"]
	}
};
FeatsList["agent of order-ua"] = {
	name : "Agent of Order",
	source : [["UA:WotM", 6]],
	description : "Once per turn when I damage a creature I see within 60 ft, I can deal +1d8 force damage to it, and it must succeed on a Wis save (DC 8 + Prof Bonus + the modifier of the ability score increased by this feat) or be restrained until my next turn starts. I can do this a number of times equal to my Prof Bonus per long rest.",
	descriptionFull : "You can channel cosmic forces of order that lock the multiverse into patterns. Your actions are your own to choose, but these forces grant you the following benefits:"+
	"\n   " + toUni("Ability Score Increase") + ". Increase an ability score of your choice by 1, to a maximum of 20."+
	"\n   " + toUni("Stasis Strike") + ". Once per turn when you damage a creature you can see within 60 feet of yourself, you can deal an extra 1d8 force damage to the target, and it must succeed on a Wisdom saving throw (DC equal to 8 + your proficiency bonus + the modifier of the ability score increased by this feat) or be restrained by spectral bindings until the start of your next turn. These bindings manifest as chains, gears, encasing stone, or some other symbol of stasis. You can use this benefit a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	prerequisite : "4th-level, Scion of the Outer Planes (Lawful Outer Plane) feat",
	prereqeval : function(v) {
		var iParentFeat = CurrentFeats.known.indexOf("scion of the outer planes-ua");
		return v.characterLevel >= 4 && iParentFeat !== -1 && CurrentFeats.choices[iParentFeat] === 'lawful outer plane (radiant, guidance)';
	},
	usages : "Proficiency bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus');",
	recovery : "long rest",
	choices : ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	"strength" : {
		calculate : "event.value = 'Once per turn when I damage a creature I see within 60 ft, I can deal +1d8 force damage to it, and it must succeed on a Wis save DC ' + (8 + Number(How('Proficiency Bonus')) + Number(What('Str Mod'))) + ' (8 + Prof Bonus + Str mod) or be restrained until my next turn starts. I can do this a number of times equal to my Prof Bonus per long rest. [+1 Strength]';",
		scores : [1, 0, 0, 0, 0, 0]
	},
	"dexterity" : {
		calculate : "event.value = 'Once per turn when I damage a creature I see within 60 ft, I can deal +1d8 force damage to it, and it must succeed on a Wis save DC ' + (8 + Number(How('Proficiency Bonus')) + Number(What('Dex Mod'))) + ' (8 + Prof Bonus + Dex mod) or be restrained until my next turn starts. I can do this a number of times equal to my Prof Bonus per long rest. [+1 Dexterity]';",
		scores : [0, 1, 0, 0, 0, 0]
	},
	"constitution" : {
		calculate : "event.value = 'Once per turn when I damage a creature I see within 60 ft, I can deal +1d8 force damage to it, and it must succeed on a Wis save DC ' + (8 + Number(How('Proficiency Bonus')) + Number(What('Con Mod'))) + ' (8 + Prof Bonus + Con mod) or be restrained until my next turn starts. I can do this a number of times equal to my Prof Bonus per long rest. [+1 Constitution]';",
		scores : [0, 0, 1, 0, 0, 0]
	},
	"intelligence" : {
		calculate : "event.value = 'Once per turn when I damage a creature I see within 60 ft, I can deal +1d8 force damage to it, and it must succeed on a Wis save DC ' + (8 + Number(How('Proficiency Bonus')) + Number(What('Int Mod'))) + ' (8 + Prof Bonus + Int mod) or be restrained until my next turn starts. I can do this a number of times equal to my Prof Bonus per long rest. [+1 Intelligence]';",
		scores : [0, 0, 0, 1, 0, 0]
	},
	"wisdom" : {
		calculate : "event.value = 'Once per turn when I damage a creature I see within 60 ft, I can deal +1d8 force damage to it, and it must succeed on a Wis save DC ' + (8 + Number(How('Proficiency Bonus')) + Number(What('Wis Mod'))) + ' (8 + Prof Bonus + Wis mod) or be restrained until my next turn starts. I can do this a number of times equal to my Prof Bonus per long rest. [+1 Wisdom]';",
		scores : [0, 0, 0, 0, 1, 0]
	},
	"charisma" : {
		calculate : "event.value = 'Once per turn when I damage a creature I see within 60 ft, I can deal +1d8 force damage to it, and it must succeed on a Wis save DC ' + (8 + Number(How('Proficiency Bonus')) + Number(What('Cha Mod'))) + ' (8 + Prof Bonus + Cha mod) or be restrained until my next turn starts. I can do this a number of times equal to my Prof Bonus per long rest. [+1 Charisma]';",
		scores : [0, 0, 0, 0, 0, 1]
	}
};
FeatsList["baleful scion-ua"] = {
	name : "Baleful Scion",
	source : [["UA:WotM", 6]],
	description : "Once per turn, when I hit a creature with a melee weapon attack, I can also deal 1d6 + my Proficiency Bonus necrotic damage to it. I then regain a number of hit points equal to this necrotic damage dealt. I can do this a number of times equal to my Proficiency Bonus per long rest. [+1 to any one ability score]",
	descriptionFull : "You can channel cosmic forces of evil that cause pain but invigorate your being. You can choose your own actions despite this malign connection. You gain the following benefits:"+
	"\n   " + toUni("Ability Score Increase") + ". Increase an ability score of your choice by 1, to a maximum of 20."+
	"\n   " + toUni("Life-Draining Grasp") + ". Once per turn, when you hit a creature with a melee weapon attack, you can also deal necrotic damage to it. The damage equals 1d6 + your proficiency bonus, and you regain a number of hit points equal to this necrotic damage dealt. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	prerequisite : "4th-level, Scion of the Outer Planes (Evil Outer Plane) feat",
	prereqeval : function(v) {
		var iParentFeat = CurrentFeats.known.indexOf("scion of the outer planes-ua");
		return v.characterLevel >= 4 && iParentFeat !== -1 && CurrentFeats.choices[iParentFeat] === 'evil outer plane (necrotic, chill touch)';
	},
	scorestxt : "+1 to one ability score of your choice",
	usages : "Proficiency bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus');",
	recovery : "long rest"
};
FeatsList["cohort of chaos-ua"] = {
	name : "Cohort of Chaos",
	source : [["UA:WotM", 6]],
	description : "When I roll a 1 or a 20 on an attack roll or save, a the magic of chaos flares up and I roll on the Chaotic Flare table to determine what happens (see notes for table). As a bonus action, my Proficiency Bonus per long rest, I can force a flare to happen. [+1 to any one ability score]",
	descriptionFull : "You can channel the cosmic forces of chaos that drive the multiverse toward both freedom and disarray. Your actions are still yours to choose, but you gain these benefits:"+
	"\n   " + toUni("Ability Score Increase") + ". Increase an ability score of your choice by 1, to a maximum of 20."+
	"\n   " + toUni("Chaotic Flare") + ". When you roll a 1 or a 20 on an attack roll or a saving throw, the magic of chaos flows through you. Roll on the table below to determine what happens. A flare lasts until the end of your next turn, and a new flare can't occur until after the first flare ends."+
	toUni("\n\nd4\tFlare")+
	"\n  1\tDisruption Field: Waves of energy ripple in a 10-foot sphere centered on you. Every creature other than you that starts its turn in that area, or that moves into that area for the first time on a turn, takes 1d8 force damage."+
	"\n  2\tBattle Fury: A creature of your choice that you can see is filled with reckless fury. The creature has advantage on attack rolls and disadvantage on ability checks."+
	"\n  3\tUnbound: When you move, you can use some or all of your walking speed to teleport once, along with any equipment you're wearing or carrying, up to the distance used to an unoccupied space that you can see."+
	"\n  4\tWailing Winds: Howling winds swirl around you in a 60-foot radius. You and any creature in that radius has disadvantage on Wisdom saving throws."+
	"\n\n   You can also forcibly release a chaotic flare as a bonus action, rolling on the table as normal to determine the effects. You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	prerequisite : "4th-level, Scion of the Outer Planes (Chaotic Outer Plane) feat",
	prereqeval : function(v) {
		var iParentFeat = CurrentFeats.known.indexOf("scion of the outer planes-ua");
		return v.characterLevel >= 4 && iParentFeat !== -1 && CurrentFeats.choices[iParentFeat] === 'chaotic outer plane (necrotic, minor illusion)';
	},
	scorestxt : "+1 to one ability score of your choice",
	usages : "Proficiency bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus');",
	recovery : "long rest",
	additional : "force flare",
	action : [["bonus action", " (force flare)"]],
	toNotesPage : [{
		name : "Chaotic Flare Table",
		note : [
			"When I roll a 1 or a 20 on an attack roll or a saving throw, the magic of chaos flows through me. I roll on the table below to determine what happens. A flare lasts until the end of my next turn, and a new flare can't occur until after the first flare ends.",
			"As a bonus action, I can forcibly release a chaotic flare, rolling on the table as normal to determine the effects. I can use this bonus action a number of times equal to my proficiency bonus, and I regain all expended uses when you finish a long rest.",
			"\n d4  Flare",
			"1  Disruption Field: Waves of energy ripple in a 10-ft sphere centered on me. Every creature other than me that starts its turn in that area, or that moves into that area for the first time on a turn, takes 1d8 force damage.",
			"2  Battle Fury: A creature of my choice that I can see is filled with reckless fury. The creature has advantage on attack rolls and disadvantage on ability checks.",
			"3  Unbound: When I move, I can use some or all of my walking speed to teleport once, along with any equipment I'm wearing or carrying, up to the distance used to an unoccupied space that I can see.",
			"4  Wailing Winds: Howling winds swirl around me in a 60-ft radius. I and any creature in that radius have disadvantage on Wisdom saving throws."
		]
	}]
};
FeatsList["outlands envoy-ua"] = {
	name : "Outlands Envoy",
	source : [["UA:WotM", 7]],
	description : "I can cast Misty Step and Tongues each once per long rest without requiring a spell slot or material components. I can also cast them using a spell slot as normal. My spellcasting ability for these spells is the same as the one for the Scion of the Outer Planes feat. [+1 to any one ability score]",
	descriptionFull : "You have spent significant time in Sigil or elsewhere in the Outlands, the crossroads of the multiverse. Being steeped in converging planar energies grants you these benefits:"+
	"\n   " + toUni("Ability Score Increase") + ". Increase an ability score of your choice by 1, to a maximum of 20."+
	"\n   " + toUni("Crossroads Emissary") + ". You learn the misty step and tongues spells. You can cast each spell once using this feat without a spell slot, and you must finish a long rest before you can cast that spell in this way again. When you cast tongues using this feat, you require no material components. You can also cast these spells using spell slots you have of the appropriate level. The spell's spellcasting ability is the one chosen when you gained the Scion of the Outer Planes feat.",
	prerequisite : "4th-level, Scion of the Outer Planes feat",
	prereqeval : function(v) {
		return v.characterLevel >= 4 && CurrentFeats.known.indexOf("scion of the outer planes-ua") !== -1;
	},
	scorestxt : "+1 to one ability score of your choice",
	spellcastingAbility : "scion of the outer planes-ua",
	spellcastingBonus : {
		name : "Crossroads Emissary",
		spells : ["misty step", "tongues"],
		selection : ["misty step", "tongues"],
		firstCol : "oncelr",
		times : 2
	},
	spellChanges : {
		"tongues" : {
			components : SpellsList.tongues.components.replace("M", "M*"),
			compMaterial : "When using a spell slot: "+SpellsList.tongues.compMaterial,
			changes : "Using Outlands Envoy, I can cast Tongues once per long rest without expending a spell slot or requiring material components."
		}
	}
};
FeatsList["planar wanderer-ua"] = {
	name : "Planar Wanderer",
	source : [["UA:WotM", 7]],
	description : "After each long rest, I can gain acid, cold, or fire resistance, that lasts until my next long rest ends. I know the direction to the last portal I used while on the same plane as it. As an action, I can try to open or close a portal (portal cracker). As an action once per long rest, I can detect portals (portal sense). See notes.",
	descriptionFull : "You can draw on the forces of the multiverse to survive cosmic extremes and to traverse its infinite realms. You gain these benefits:"+
	"\n   " + toUni("Planar Adaptation") + ". When you finish a long rest, you gain resistance to either acid, cold, or fire damage (your choice) until you finish your next long rest."+
	"\n   " + toUni("Portal Cracker") + ". Your experience with portals allows you to operate them without the proper portal key. As an action, you can concentrate on a portal you're aware of that is within 5 feet of you and make a DC 20 Wisdom (Survival) check. On a failure, you take 3d8 force damage and you can't use this feature on that portal again until you finish a long rest. On a success, you can force the portal open or closed for 1 hour. For that duration, a portal closed in this way doesn't respond to its portal key unless a creature employing the key succeeds on a DC 20 Intelligence (Arcana) check as an action."+
	"\n   " + toUni("Portal Sense") + ". You know the direction to the last planar portal you used while you and the portal are on the same plane. Moreover, as an action, you can detect the location of any portals within 30 feet of you that aren't behind total cover. Once you detect a portal with this action, you can't use the action again until you finish a long rest.",
	prerequisite : "4th-level, Scion of the Outer Planes feat",
	prereqeval : function(v) {
		return v.characterLevel >= 4 && CurrentFeats.known.indexOf("scion of the outer planes-ua") !== -1;
	},
	dmgres : ["Acid/Cold/Fire"],
	action : [["action", " (Portal Cracker)"], ["action", " (Portal Sense)"]],
	usages : 1,
	recovery : "long rest",
	additional : "Portal Sense",
	toNotesPage : [{
		name : "Portal Cracker",
		note : [
			"My experience with portals allows me to operate them without the proper portal key.",
			"As an action, I can concentrate on a portal I'm aware of that is within 5 ft of me and make a DC 20 Wisdom (Survival) check.",
			"On a failure, I take 3d8 force damage and I can't use this feature on that portal again until I finish a long rest.",
			"On a success, I can force the portal open or closed for 1 hour. For that duration, a portal closed in this way doesn't respond to its portal key unless a creature employing the key succeeds on a DC 20 Intelligence (Arcana) check as an action."
		]
	}, {
		name : "Portal Sense",
		additional : "1\xD7 per long rest",
		note : [
			"I know the direction to the last planar portal I used while I and the portal are on the same plane.",
			"As an action, I can detect the location of any portals within 30 ft of me that aren't behind total cover.",
			"Once I detect a portal with this action, I can't use the action again until I finish a long rest."
		],
		amendTo : "Portal Cracker"
	}]
};
FeatsList["righteous heritor-ua"] = {
	name : "Righteous Heritor",
	source : [["UA:WotM", 8]],
	description : "As a reaction when I or a creature I can see within 30 ft takes damage, I can reduce the damage taken by 1d10 + my Proficiency Bonus. I can do this a number of times equal to my Proficiency Bonus per long rest. [+1 to any one ability score]",
	descriptionFull : "You can channel the cosmic forces of good that foster serenity and fellowship. You are still free to choose your own actions, but gain these benefits:"+
	"\n   " + toUni("Ability Score Increase") + ". Increase an ability score of your choice by 1, to a maximum of 20."+
	"\n   " + toUni("Soothe Pain") + ". When you or a creature you can see within 30 feet of you takes damage, you can use your reaction to dull its suffering and reduce the damage it takes by 1d10 + your proficiency bonus. You can use this benefit a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	prerequisite : "4th-level, Scion of the Outer Planes (Good Outer Plane) feat",
	prereqeval : function(v) {
		var iParentFeat = CurrentFeats.known.indexOf("scion of the outer planes-ua");
		return v.characterLevel >= 4 && iParentFeat !== -1 && CurrentFeats.choices[iParentFeat] === 'good outer plane (radiant, sacred flame)';
	},
	scorestxt : "+1 to one ability score of your choice",
	usages : "Proficiency bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus');",
	recovery : "long rest",
	action : [["reaction", ""]]
};

// Strike of the Giants feat tree
FeatsList["strike of the giants-ua"] = {
	name : "Strike of the Giants",
	source : [["UA:WotM", 9]],
	description : "As a bonus action, I can call on the power of my giant magic to imbue my attacks with additional power. The next time I hit a target with a melee or thrown weapon attack within the next minute, the attack has an additional effect depending on the origin of my giant magic (hill, stone, frost, fire, cloud or storm).",
	descriptionFull : "You have absorbed primeval magic that gives you an echo of the might of giants. Choose one of the kinds of giants listed below. As a bonus action, you can call on the power of your giant magic to imbue your attacks with additional power. The next time you hit a target with a melee or thrown weapon attack within the next minute, the attack has an additional effect depending on the origin of your giant magic:"+
	desc([
		toUni("Hill Giant") + ". The target takes an extra 1d6 damage of the weapon's type. If the target is a creature, it must succeed on a Strength saving throw or be knocked prone.",
		toUni("Stone Giant") + ". The target takes an extra 1d6 force damage. If the target is a creature, it must succeed on a Strength saving throw or be pushed 10 feet away from you in a straight line.",
		toUni("Frost Giant") + ". The target takes an extra 1d6 cold damage. If the target is a creature, it must succeed on a Constitution saving throw, or its speed is reduced to 0 until the start of your next turn.",
		toUni("Fire Giant") + ". The target takes an extra 1d8 fire damage.",
		toUni("Cloud Giant") + ". The target takes an extra 1d4 thunder damage. If the target is a creature, it must succeed on a Wisdom saving throw, or you become invisible to it until the start of your next turn.",
		toUni("Storm Giant") + ". The target takes an extra 1d6 lightning damage. If the target is a creature, it must succeed on a Constitution saving throw, or it has disadvantage on attack rolls until the start of your next turn.\n",
		"The saving throw DC for these effects equals 8 + your proficiency bonus + your Strength or Constitution modifier.",
		"You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
	]),
	usages : "Proficiency bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus');",
	recovery : "long rest",
	action : [["bonus action", ""]],
	choices : ["Hill Giant", "Stone Giant", "Frost Giant", "Fire Giant", "Cloud Giant", "Storm Giant"],
	"hill giant" : {
		calculate : "event.value = 'As a bonus action my Prof Bonus per long rest, I can call on the might of hill giants. The next time I hit with a melee or thrown weapon attack within the next minute, it deals +1d6 damage and if the target is a creature, it must make a Strength save DC ' + (8 + Number(How('Proficiency Bonus')) + Math.max(Number(What('Str Mod')), Number(What('Con Mod')))) + ' (8 + Prof Bonus + Str/Con mod) or be knocked prone.';"
	},
	"stone giant" : {
		calculate : "event.value = 'As a bonus action my Prof Bonus per long rest, I can call on the might of stone giants. My next hit in the next minute with a melee or thrown weapon attack deals +1d6 force damage and the target must make a Strength save DC ' + (8 + Number(How('Proficiency Bonus')) + Math.max(Number(What('Str Mod')), Number(What('Con Mod')))) + ' (8 + Prof Bonus + Str/Con mod) or be pushed 10 ft away from me in a straight line.';"
	},
	"frost giant" : {
		calculate : "event.value = 'As a bonus action my Prof Bonus per long rest, I can call on the might of frost giants. The next hit with my melee or thrown weapon attack within 1 minute deals +1d6 cold damage, and if the target is a creature, it must make a Con save DC ' + (8 + Number(How('Proficiency Bonus')) + Math.max(Number(What('Str Mod')), Number(What('Con Mod')))) + ' (8 + Prof Bonus + Str/Con mod) or its speed is 0 until my next turn starts.';"
	},
	"fire giant" : {
		description : "I have absorbed primeval magic that gives me an echo of the might of fire giants. As a bonus action, I can call on this power and the next time I hit a target with a melee or thrown weapon attack within the next minute, that attack deals +1d8 fire damage. I can do this my Proficiency Bonus per long rest."
	},
	"cloud giant" : {
		calculate : "event.value = 'As a bonus action my Prof Bonus per long rest, I can call on the might of cloud giants. My next hit within 1 minute with a melee or thrown weapon attack deals +1d4 thunder damage, and the target must make a Wisdom save DC ' + (8 + Number(How('Proficiency Bonus')) + Math.max(Number(What('Str Mod')), Number(What('Con Mod')))) + ' (8 + Prof Bonus + Str/Con mod) or I become invisible to it until my next turn starts.';"
	},
	"storm giant" : {
		calculate : "event.value = 'As a bonus action my Prof Bonus per long rest, I can call on the might of storm giants. My next hit within 1 minute with a melee or thrown weapon attack deals +1d6 lightning damage, and the target must make a Con save DC ' + (8 + Number(How('Proficiency Bonus')) + Math.max(Number(What('Str Mod')), Number(What('Con Mod')))) + ' (8 + Prof Bonus + Str/Con mod) or it has disadv. on attack rolls until my next turn starts.';"
	}
};
FeatsList["ember of the fire giant-ua2"] = {
	name : "Fury of the Fire Giant",
	source : [["UA:WotM", 7]],
	description : "I have fire resistance. My Prof Bonus per long rest, I can replace one attack of an Attack action on my turn with Searing Ignition: Chosen creatures I can see within 15 ft take 1d8+Prof Bonus fire damage & are blinded until my next turn starts. Dex save (8 + Prof B. + Str/Con/Wis mod) for half damage & not blinded.",
	descriptionFull : "You've manifested the fiery combat emblematic of fire giants, granting you the following benefits:"+
	"\n   " + toUni("Ability Score Increase") + ". Increase your Strength, Constitution, or Wisdom score by 1, to a maximum of 20."+
	"\n   " + toUni("Born of Flame") + ". You have resistance to fire damage."+
	"\n   " + toUni("Searing Ignition") + ". When you take the Attack action on your turn, you can replace a single attack with a magical burst of flame. Each creature of your choice within 15 feet of you that can see you must make a Dexterity saving throw (DC equals 8 + your proficiency bonus + the modifier of the ability increased by this feat). On a failed save, a creature takes fire damage equal to 1d8 + your proficiency bonus, and it is blinded until the start of your next turn. On a successful save, the creature takes half as much damage and isn't blinded. You can use your Searing Ignition a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	prerequisite : "4th-level, Strike of the Giants (Fire Giant) feat",
	prereqeval : function(v) {
		var iParentFeat = CurrentFeats.known.indexOf("strike of the giants-ua");
		return v.characterLevel >= 4 && iParentFeat !== -1 && CurrentFeats.choices[iParentFeat] === 'fire giant';
	},
	usages : "Proficiency bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus');",
	recovery : "long rest",
	dmgres : ["Fire"],
	choices : ["Strength", "Constitution", "Wisdom"],
	"strength" : {
		calculate : "event.value = 'I have fire resistance. My Prof Bonus per long rest, I can replace one attack of an Attack action on my turn with Searing Ignition: Chosen creatures I can see within 15 ft take 1d8+' + How('Proficiency Bonus') + ' (Prof B.) fire damage \u0026 are blinded until my next turn starts. Dex save DC ' + (8 + Number(How('Proficiency Bonus')) + Number(What('Str Mod'))) + ' (8 + Prof B. + Str mod) for half damage \u0026 not blinded. [+1 Str]';",
		scores : [1, 0, 0, 0, 0, 0],
		weaponsAdd : ["Searing Ignition"],
		weaponOptions : [{
			regExpSearch : /^(?=.*searing)(?=.*ignition).*$/i,
			name : "Searing Ignition",
			source : [["UA:WotM", 7]],
			ability : 1,
			type : "Spell",
			damage : [1, 8, "fire"],
			range : "15-ft radius",
			description : "Hits all of my choice in range; Dex save for half damage; Failed - blinded until my next turn starts",
			dc : true,
			abilitytodamage : false,
			modifiers : ["", "Prof"]
		}]
	},
	"constitution" : {
		calculate : "event.value = 'I have fire resistance. My Prof Bonus per long rest, I can replace one attack of an Attack action on my turn with Searing Ignition: Chosen creatures I can see within 15 ft take 1d8+' + How('Proficiency Bonus') + ' (Prof B.) fire damage \u0026 are blinded until my next turn starts. Dex save DC ' + (8 + Number(How('Proficiency Bonus')) + Number(What('Con Mod'))) + ' (8 + Prof B.+ Con mod) for half damage \u0026 not blinded. [+1 Con]';",
		scores : [0, 0, 1, 0, 0, 0],
		weaponsAdd : ["Searing Ignition"],
		weaponOptions : [{
			regExpSearch : /^(?=.*searing)(?=.*ignition).*$/i,
			name : "Searing Ignition",
			source : [["UA:WotM", 7]],
			ability : 3,
			type : "Spell",
			damage : [1, 8, "fire"],
			range : "15-ft radius",
			description : "Hits all of my choice in range; Dex save for half damage; Failed - blinded until my next turn starts",
			dc : true,
			abilitytodamage : false,
			modifiers : ["", "Prof"]
		}]
	},
	"wisdom" : {
		calculate : "event.value = 'I have fire resistance. My Prof Bonus per long rest, I can replace one attack of an Attack action on my turn with Searing Ignition: Chosen creatures I can see within 15 ft take 1d8+' + How('Proficiency Bonus') + ' (Prof B.) fire damage \u0026 are blinded until my next turn starts. Dex save DC ' + (8 + Number(How('Proficiency Bonus')) + Number(What('Wis Mod'))) + ' (8 + Prof B. + Wis mod) for half damage \u0026 not blinded. [+1 Wis]';",
		scores : [0, 0, 0, 0, 1, 0],
		weaponsAdd : ["Searing Ignition"],
		weaponOptions : [{
			regExpSearch : /^(?=.*searing)(?=.*ignition).*$/i,
			name : "Searing Ignition",
			source : [["UA:WotM", 7]],
			ability : 5,
			type : "Spell",
			damage : [1, 8, "fire"],
			range : "15-ft radius",
			description : "Hits all of my choice in range; Dex save for half damage; Failed - blinded until my next turn starts",
			dc : true,
			abilitytodamage : false,
			modifiers : ["", "Prof"]
		}]
	}
};
FeatsList["fury of the frost giant-ua2"] = {
	name : "Fury of the Frost Giant",
	source : [["UA:WotM", 7]],
	description : "I have cold resistance. As a reaction my Prof Bonus per long rest, when a creature I can see within 30 ft hits and deals damage with an attack, I can have it make a Con save (DC 8 + Prof B. + Str/Con/Wis mod) or take 1d8 + Prof Bonus  cold damage and have its speed reduced by half until my next turn ends.",
	descriptionFull : "You've manifested the icy might emblematic of frost giants, granting you the following benefits:"+
	"\n   " + toUni("Ability Score Increase") + ". Increase your Strength, Constitution, or Wisdom score by 1, to a maximum of 20."+
	"\n   " + toUni("Born of Ice") + ". You have resistance to cold damage."+
	"\n   " + toUni("Frigid Retaliation") + ". Immediately after a creature you can see within 30 feet of you hits you with an attack roll and deals damage, you can use your reaction to retaliate with a conjured blast of ice. The creature must make a Constitution saving throw (DC equals 8 + your proficiency bonus + the modifier of the ability increased by this feat). On a failed save, it takes 1d8 + your proficiency bonus cold damage, and its speed is halved until the end of its next turn. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	prerequisite : "4th-level, Strike of the Giants (Frost Giant) feat",
	prereqeval : function(v) {
		var iParentFeat = CurrentFeats.known.indexOf("strike of the giants-ua");
		return v.characterLevel >= 4 && iParentFeat !== -1 && CurrentFeats.choices[iParentFeat] === 'frost giant';
	},
	usages : "Proficiency bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus');",
	recovery : "long rest",
	dmgres : ["Cold"],
	action : [["reaction", ""]],
	choices : ["Strength", "Constitution", "Wisdom"],
	"strength" : {
		calculate : "event.value = 'I have cold resistance. As a reaction my Prof Bonus per long rest, when a creature I can see within 30 ft hits and deals damage with an attack, I can have it make a Constitution save DC ' + (8 + Number(How('Proficiency Bonus')) + Number(What('Str Mod'))) + ' (8 + Prof B. + Str mod) or take 1d8+' + How('Proficiency Bonus') + ' (Prof Bonus) cold damage and have its speed reduced by half until my next turn ends. [+1 Str]';",
		scores : [1, 0, 0, 0, 0, 0]
	},
	"constitution" : {
		calculate : "event.value = 'I have cold resistance. As a reaction my Prof Bonus per long rest, when a creature I can see within 30 ft hits and deals damage with an attack, I can have it make a Constitution save DC ' + (8 + Number(How('Proficiency Bonus')) + Number(What('Con Mod'))) + ' (8 + Prof B. + Con mod) or take 1d8+' + How('Proficiency Bonus') + ' (Prof B.) cold damage and have its speed reduced by half until my next turn ends. [+1 Con]';",
		scores : [0, 0, 1, 0, 0, 0]
	},
	"wisdom" : {
		calculate : "event.value = 'I have cold resistance. As a reaction my Prof Bonus per long rest, when a creature I can see within 30 ft hits and deals damage with an attack, I can have it make a Constitution save DC ' + (8 + Number(How('Proficiency Bonus')) + Number(What('Wis Mod'))) + ' (8 + Prof B. + Wis mod) or take 1d8+' + How('Proficiency Bonus') + ' (Prof Bonus) cold damage and have its speed reduced by half until my next turn ends. [+1 Wis]';",
		scores : [0, 0, 0, 0, 1, 0]
	}
};
FeatsList["guile of the cloud giant-ua2"] = {
	name : "Guile of the Cloud Giant",
	source : [["UA:WotM", 7]],
	description : "As a reaction when a creature I can see hits me with an attack roll, I can give myself resistance to that attack's damage. I then teleport to an unoccupied space that I can see within 30 ft. I can do this a number of times equal to half my Proficiency Bonus (rounded up) per long rest. [+1 Dex, Con, or Cha]",
	descriptionFull : "You've manifested the airy speech and magic emblematic of cloud giants, granting you the following benefits:"+
	"\n   " + toUni("Ability Score Increase") + ". Increase your Dexterity, Constitution, or Charisma score by 1, to a maximum of 20."+
	"\n   " + toUni("Cloudy Escape") + ". When a creature you can see hits you with an attack roll, you can use your reaction to give yourself resistance to that attack's damage. You then teleport to an unoccupied space that you can see within 30 feet of yourself. You can use this reaction a number of times equal to half your proficiency bonus (rounded up), and you regain all expended uses when you finish a long rest.",
	prerequisite : "4th-level, Strike of the Giants (Cloud Giant) feat",
	prereqeval : function(v) {
		var iParentFeat = CurrentFeats.known.indexOf("strike of the giants-ua");
		return v.characterLevel >= 4 && iParentFeat !== -1 && CurrentFeats.choices[iParentFeat] === 'cloud giant';
	},
	scorestxt : "+1 Dexterity, Constitution, or Charisma",
	usages : "Half proficiency bonus (rounded up) per ",
	usagescalc : "event.value = Math.ceil(Number(How('Proficiency Bonus'))/2);",
	recovery : "long rest",
	action : [["reaction", ""]]
};
FeatsList["keenness of the stone giant-ua2"] = {
	name : "Keenness of the Stone Giant",
	source : [["UA:WotM", 8]],
	description : "I gain +60 ft darkvision. As a bonus action my Prof Bonus per long rest, I can imbue a rock with magic until I finish a long rest or hit with it. I can use it as a proficient thrown weapon, 60/180 ft, 1d10 bludgeoning damage. Target hit must make a Str save DC 10 (8 + Prof B. + Str/Con/Wis mod) or be knocked prone.",
	descriptionFull : "You've manifested the physical talents emblematic of stone giants, granting you the following benefits:"+
	"\n   " + toUni("Ability Score Increase") + ". Increase your Strength, Constitution, or Wisdom score by 1, to a maximum of 20."+
	"\n   " + toUni("Stone Throw") + ". As a bonus action, you can touch a rock that can fit in the palm of your hand and imbue it with magic. While the rock is imbued with magic and you are wielding it, the rock is a magic ranged weapon with which you're proficient, and it has the thrown property with a normal range of 60 feet and a long range of 180 feet. On a hit, the rock deals 1d10 bludgeoning damage, and if the target is a creature, it must succeed on a Strength saving throw (DC equals 8 + your proficiency bonus + the modifier of the ability increased by this feat) or be knocked prone. The magic remains in the rock until you hit with it or finish a long rest. You can imbue a number of rocks equal to your proficiency bonus with this bonus action, and you regain all expended uses when you finish a long rest."+
	"\n   " + toUni("Cavernous Sight") + ". You gain darkvision out to a range of 60 feet. If you already have darkvision from another source, its range increases by 60 feet.",
	prerequisite : "4th-level, Strike of the Giants (Stone Giant) feat",
	prereqeval : function(v) {
		var iParentFeat = CurrentFeats.known.indexOf("strike of the giants-ua");
		return v.characterLevel >= 4 && iParentFeat !== -1 && CurrentFeats.choices[iParentFeat] === 'stone giant';
	},
	vision : [["Darkvision", "fixed 60"], ["Darkvision", "+60"]],
	usages : "Proficiency bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus');",
	recovery : "long rest",
	additional : "Imbue Stone",
	action : [["bonus action", " (Imbue Stone)"]],
	choices : ["Strength", "Constitution", "Wisdom"],
	"strength" : {
		calculate : "event.value = 'I gain +60 ft darkvision. As a bonus action my Prof Bonus per long rest, I can imbue a rock with magic until I finish a long rest or hit with it. I can use it as a proficient thrown weapon, ' + (What('Unit System') === 'metric' ? '18/54 m' : '60/180 ft') + ', 1d10 bludgeoning damage. Target hit must make a Str save DC ' + (8 + Number(How('Proficiency Bonus')) + Number(What('Str Mod'))) + ' (8 + Prof B. + Str mod) or be knocked prone. [+1 Str]';",
		scores : [1, 0, 0, 0, 0, 0],
		weaponsAdd : ["Stone Giant's Stone Throw"],
		weaponOptions : [{
			regExpSearch : /^(?=.*stone)(?=.*giant)(?=.*throw).*$/i,
			name : "Stone Giant's Stone Throw",
			source : [["UA:WotM", 8]],
			ability : 1,
			type : "AlwaysProf",
			damage : [1, 10, "bludgeoning"],
			range : "60/180 ft",
			description : "Thrown; On hit: Str save (DC 8 + To Hit) or knocked prone; Counts as magical",
			abilitytodamage : true,
			isMagicWeapon : true
		}]
	},
	"constitution" : {
		calculate : "event.value = 'I gain +60 ft darkvision. As a bonus action my Prof Bonus per long rest, I can imbue a rock with magic until I finish a long rest or hit with it. I can use it as a proficient thrown weapon, ' + (What('Unit System') === 'metric' ? '18/54 m' : '60/180 ft') + ', 1d10 bludgeoning damage. Target hit must make a Str save DC ' + (8 + Number(How('Proficiency Bonus')) + Number(What('Con Mod'))) + ' (8 + Prof B. + Con mod) or be knocked prone. [+1 Con]';",
		scores : [0, 0, 1, 0, 0, 0],
		weaponsAdd : ["Stone Giant's Stone Throw"],
		weaponOptions : [{
			regExpSearch : /^(?=.*stone)(?=.*giant)(?=.*throw).*$/i,
			name : "Stone Giant's Stone Throw",
			source : [["UA:WotM", 8]],
			ability : 3,
			type : "AlwaysProf",
			damage : [1, 10, "bludgeoning"],
			range : "60/180 ft",
			description : "Thrown; On hit: Str save (DC 8 + To Hit) or knocked prone; Counts as magical",
			abilitytodamage : true
		}]
	},
	"wisdom" : {
		calculate : "event.value = 'I gain +60 ft darkvision. As a bonus action my Prof Bonus per long rest, I can imbue a rock with magic until I finish a long rest or hit with it. I can use it as a proficient thrown weapon, ' + (What('Unit System') === 'metric' ? '18/54 m' : '60/180 ft') + ', 1d10 bludgeoning damage. Target hit must make a Str save DC ' + (8 + Number(How('Proficiency Bonus')) + Number(What('Wis Mod'))) + ' (8 + Prof B. + Wis mod) or be knocked prone. [+1 Wis]';",
		scores : [0, 0, 0, 0, 1, 0],
		weaponsAdd : ["Stone Giant's Stone Throw"],
		weaponOptions : [{
			regExpSearch : /^(?=.*stone)(?=.*giant)(?=.*throw).*$/i,
			name : "Stone Giant's Stone Throw",
			source : [["UA:WotM", 8]],
			ability : 5,
			type : "AlwaysProf",
			damage : [1, 10, "bludgeoning"],
			range : "60/180 ft",
			description : "Thrown; On hit: Str save (DC 8 + To Hit) or knocked prone; Counts as magical",
			abilitytodamage : true
		}]
	}
};
FeatsList["soul of the storm giant-ua2"] = {
	name : "Soul of the Storm Giant",
	source : [["UA:WotM", 9]],
	description : "As an action my Prof Bonus per long rest, I can give myself a 10-ft radius magical aura until my next turn starts. This imposes disadv. on attacks against me and when a creature starts its turn within, I can have it make a Str save (DC 8 + Prof Bonus + Int/Wis/Cha mod) or halve its speed until my next turn starts.",
	descriptionFull : "You've manifested divination abilities and tempest magic emblematic of storm giants, granting you the following benefits:"+
	"\n   " + toUni("Ability Score Increase") + ". Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20."+
	"\n   " + toUni("Maelstrom Aura") + ". As a bonus action, you surround yourself in an aura of magical wind and lightning that extends 10 feet from you in every direction but not through total cover. The aura lasts until the start of your next turn or until you are incapacitated. While the aura is active, attack rolls against you have disadvantage, and whenever a creature starts its turn within the aura, you can force the creature to make a Strength saving throw (DC equals 8 + your proficiency bonus + the ability modifier of the score increased by this feat). On a failed save, the creature's speed is halved until the start of its next turn. You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	prerequisite : "4th-level, Strike of the Giants (Storm Giant) feat",
	prereqeval : function(v) {
		var iParentFeat = CurrentFeats.known.indexOf("strike of the giants-ua");
		return v.characterLevel >= 4 && iParentFeat !== -1 && CurrentFeats.choices[iParentFeat] === 'storm giant';
	},
	usages : "Proficiency bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus');",
	recovery : "long rest",
	action : [["action", ""]],
	choices : ["Intelligence", "Wisdom", "Charisma"],
	"intelligence" : {
		calculate : "event.value = 'As an action my Prof Bonus per long rest, I can give myself a 10-ft radius magical aura until my next turn starts. This imposes disadv. on attacks against me and when a creature starts its turn within, I can have it make a Str save DC ' + (8 + Number(How('Proficiency Bonus')) + Number(What('Int Mod'))) + ' (8 + Prof Bonus + Int mod) or halve its speed until my next turn starts. [+1 Int]';",
		scores : [0, 0, 0, 1, 0, 0]
	},
	"wisdom" : {
		calculate : "event.value = 'As an action my Prof Bonus per long rest, I can give myself a 10-ft radius magical aura until my next turn starts. This imposes disadv. on attacks against me and when a creature starts its turn within, I can have it make a Str save DC ' + (8 + Number(How('Proficiency Bonus')) + Number(What('Wis Mod'))) + ' (8 + Prof Bonus + Wis mod) or halve its speed until my next turn starts. [+1 Wis]';",
		scores : [0, 0, 0, 0, 1, 0]
	},
	"charisma" : {
		calculate : "event.value = 'As an action my Prof Bonus per long rest, I can give myself a 10-ft radius magical aura until my next turn starts. This imposes disadv. on attacks against me and when a creature starts its turn within, I can have it make a Str save DC ' + (8 + Number(How('Proficiency Bonus')) + Number(What('Cha Mod'))) + ' (8 + Prof Bonus + Cha mod) or halve its speed until my next turn starts. [+1 Cha]';",
		scores : [0, 0, 0, 0, 0, 1]
	}
};
FeatsList["vigor of the hill giant-ua2"] = {
	name : "Vigor of the Hill Giant",
	source : [["UA:WotM", 10]],
	description : "When I'm subjected to an effect that would move me at least 5 ft or knock me prone, I can use my reaction to steady myself and stop this from happening. Whenever I eat food as part of a short rest and spend one or more HD to regain HP, I regain additional HP equal to my Con mod + my Proficiency Bonus. [+1 Con]",
	descriptionFull : "You've manifested the resilience emblematic of hill giants, granting you the following benefits:"+
	"\n   " + toUni("Ability Score Increase") + ". Increase your Constitution score by 1, to a maximum of 20."+
	"\n   " + toUni("Bulwark") + ". When you are subjected to an effect that would move you at least 5 feet or knock you prone, you can use your reaction to steady yourself. You are then neither moved nor knocked prone."+
	"\n   " + toUni("Iron Stomach") + ". Whenever you eat food as part of a short rest and spend one or more Hit Dice to regain hit points, you regain additional hit points equal to your Constitution modifier + your proficiency bonus.",
	prerequisite : "4th-level, Strike of the Giants (Hill Giant) feat",
	prereqeval : function(v) {
		var iParentFeat = CurrentFeats.known.indexOf("strike of the giants-ua");
		return v.characterLevel >= 4 && iParentFeat !== -1 && CurrentFeats.choices[iParentFeat] === 'hill giant';
	},
	scores : [0, 0, 1, 0, 0, 0],
	action : [["reaction", ""]]
};

// Rune Carver Apprentice feat tree
FeatsList["rune carver apprentice-ua2"] = {
	name : "Rune Carver Apprentice",
	source : [["UA:WotM", 8]],
	description : "I know Comprehend Languages and cast it once per long rest without a spell slot. I know two runes, which I can inscribe and use to cast their associated spell once per long rest without a spell slot or material components. I can also cast all three spells with spell slots as normal. See notes page.",
	descriptionFull : "You've begun studying the art of runecraft." + desc([
		"You learn the comprehend languages spell. You can cast this spell without expending a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast this spell using any spell slots you have.",
		"You know two runes of your choice from the Rune Spells table. Whenever you finish a long rest, you can mark one nonmagical weapon, armor, piece of clothing, or other object you touch with a rune you know. You temporarily learn one 1st-level spell based on the rune you inscribed, as specified in the Rune Spells table, and you know the spell until you finish a long rest, when the rune fades.\n",
		toUni("Rune\t\tSpell"),
		"Death\t\tRay of sickness",
		"Dragon\t\tChromatic orb",
		"Enemy\t\tDisguise self",
		"Friend\t\tSpeak with animals",
		"Journey   \tLongstrider",
		"King\t\tCommand",
		"Mountain\tEntangle",
		"Sacred\t\tSanctuary\n",
		"While you are wearing or carrying the rune-marked object, you can cast the spell associated with the chosen rune once without using a spell slot or material components, and you can also cast the spell using any spell slots you have.",
		"Your spellcasting ability for this feat is Intelligence, Wisdom, or Charisma (choose when you select this feat).",
		"Each time you gain a level, you can replace one of the runes you know with a different one from the Rune Spells table."
	]),
	spellcastingAbility : [4,5,6],
	spellcastingBonus : [{
		name : "Once per long rest",
		spells : ["comprehend languages"],
		selection : ["comprehend languages"],
		firstCol : "oncelr"
	}, {
		name : "Select Rune Spell",
		spells : ["ray of sickness", "chromatic orb", "disguise self", "speak with animals", "longstrider", "command", "entangle", "sanctuary"],
		firstCol : "oncelr",
		times : 2,
		allowUpCasting : true
	}],
	calcChanges : {
		spellAdd : [
			function (spellKey, spellObj, spName, isDuplicate) {
				if (spName === "rune carver apprentice-ua2" && spellKey !== "comprehend languages") {
					spellObj.components = spellObj.components.replace(/M(\u0192)?/, "M*");
					spellObj.description = spellObj.description.replace(/(\d+) ?gp/, "$1*gp");
					spellObj.ritual = false;
					return true;
				}
			},
			"If the rune spells that I know are inscribed on something in my possession, I can cast each once per long rest without without using a spell slot or material components, or I can cast them using spell slots as normal."
		]
	},
	toNotesPage : [{
		name : "Features",
		note : [
			"I know Comprehend Languages and can cast it without expending a spell slot once per long rest. I can also cast this spell using any spell slots I have.",
			"I know two runes of my choice from the list below. Whenever I finish a long rest, I can mark one nonmagical weapon, armor, piece of clothing, or other object I touch with a rune I know. I temporarily learn one 1st-level spell based on the rune I inscribed and I know the spell until I finish a long rest, when the rune fades.",
			"While I'm wearing or carrying the rune-marked object, I can cast its associated spell once per long rest without using a spell slot or material components. I can also cast the spell using any spell slots I have.",
			"My spellcasting ability for this is Intelligence, Wisdom, or Charisma (choose when selecting this feat).",
			"Each time I gain a level, I can replace one of the runes I know with a different one from the list.\n",
			"RUNE\t\tSPELL\t\tSCHOOL",
			"Death\t\tRay of Sickness\tNecromancy",
			"Dragon\t\tChromatic Orb\tEvocation",
			"Enemy\t\tDisguise Self   \tIllusion",
			"Friend\t\tSpeak With Animals\tDivination",
			"Journey\t\tLongstrider\t\tTransmutation",
			"King\t\tCommand\t\tEnchantment",
			"Mountain\t\tEntangle\t\tConjuration",
			"Sacred\t\tSanctuary\t\tAbjuration"
		]
	}]
};
FeatsList["rune carver adept-ua2"] = {
	name : "Rune Carver Adept",
	source : [["UA:WotM", 8]],
	description : "My Prof Bonus per long rest, whenever I cast a spell of a school that one of my runes belongs to, I can grant a creature I can see within 30 ft a benefit: \u2022 +10 ft walking speed and its movement provokes no opportunity attacks until its turn ends, \u2022 my level in temp HP, or \u2022 adv. on its next attack until its turn ends.",
	descriptionFull : "Your ability to draw out power from runes has grown." + desc([
		"Increase the ability score of the spellcasting ability chosen when you gained the Rune Carver Apprentice feat by 1, to a maximum of 20.",
		"Whenever you cast a spell from the Rune Spells table, or a spell of a school of magic associated with the spell you marked on an object from your Rune Carver Apprentice feat, you can invoke runic power, granting you one of these benefits of your choice:",
		toUni("Battle Runes") + ". Choose one creature you can see within 30 feet of yourself. Until the end of that creature's next turn, it has advantage on the next attack roll it makes.",
		toUni("Healing Runes") + ". Choose one creature you can see within 30 feet of yourself. That creature gains temporary hit points equal to your level.",
		toUni("Runic Winds") + ". Choose one creature you can see within 30 feet of yourself. Until the end of that creature's turn, its movement doesn't provoke opportunity attacks, and its walking speed increases by 10 feet.",
		"You can invoke runic power a number of times equal to your proficiency bonus, but no more than once per spell you cast. You regain all expended uses when you finish a long rest."
	]),
	prerequisite : "4th-level, Rune Carver Apprentice feat",
	prereqeval : function(v) {
		return v.characterLevel >= 4 && CurrentFeats.known.indexOf("rune carver apprentice-ua2") !== -1;
	},
	usages : "Proficiency bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus');",
	recovery : "long rest",
	selfChoosing : function() {
		if (CurrentSpells["rune carver apprentice-ua2"] && !isNaN(CurrentSpells["rune carver apprentice-ua2"].ability)) {
			return AbilityScores.names[CurrentSpells["rune carver apprentice-ua2"].ability - 1].toLowerCase();
		}
	},
	choices : ["Intelligence", "Wisdom", "Charisma"],
	"intelligence" : {
		description : "My Prof Bonus per long rest, whenever I cast a spell of a school that one of my runes belongs to, I can grant a creature I can see within 30 ft a benefit: \u2022 +10 ft walking speed and its movement provokes no opportunity attacks until its turn ends, \u2022 my level in temp HP, or \u2022 adv. on its next attack until its turn ends. [+1 Int]';",
		scores : [0, 0, 0, 1, 0, 0],
		scorestxt : "+1 to the ability score of the spellcasting ability chosen for the Rune Carver Apprentice feat (Intelligence)"
	},
	"wisdom" : {
		description : "My Prof Bonus per long rest, whenever I cast a spell of a school that one of my runes belongs to, I can grant a creature I can see within 30 ft a benefit: \u2022 +10 ft walking speed and its movement provokes no opportunity attacks until its turn ends, \u2022 my level in temp HP, or \u2022 adv. on its next attack until its turn ends. [+1 Wis]';",
		scores : [0, 0, 0, 0, 1, 0],
		scorestxt : "+1 to the ability score of the spellcasting ability chosen for the Rune Carver Apprentice feat (Wisdom)"
	},
	"charisma" : {
		description : "My Prof Bonus per long rest, whenever I cast a spell of a school that one of my runes belongs to, I can grant a creature I can see within 30 ft a benefit: \u2022 +10 ft walking speed and its movement provokes no opportunity attacks until its turn ends, \u2022 my level in temp HP, or \u2022 adv. on its next attack until its turn ends. [+1 Cha]';",
		scores : [0, 0, 0, 0, 0, 1],
		scorestxt : "+1 to the ability score of the spellcasting ability chosen for the Rune Carver Apprentice feat (Charisma)"
	}
};

// Scion of Elemental X
FeatsList["scion of elemental air-ua"] = {
	name : "Scion of Elemental Air",
	source : [["UA:WotM", 8]],
	description : "I know the Minor Illusion cantrip (choice of Int, Wis, or Cha spellcasting ability). As a bonus action, I can gain a flying speed equal to my walking speed until my turn ends, but fall after this movement if I'm airborne and not held aloft by other means. I can do this bonus action my Proficiency Bonus per long rest.",
	descriptionFull : "You've been exposed to the primordial magic of the Elemental Plane of Air, granting you the following benefits:"+
	"\n   " + toUni("Elemental Magic") + ". You learn the minor illusion cantrip, using Intelligence, Wisdom, or Charisma as the spellcasting ability (choose when you select this feat)."+
	"\n   " + toUni("Wind's Glide") + ". You can use a bonus action to gain a flying speed equal to your walking speed until the end of your turn. If you are airborne at the end of your turn after using this movement and aren't held aloft by other means, you fall. You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	usages : "Proficiency bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus');",
	recovery : "long rest",
	spellcastingAbility : [4,5,6],
	spellcastingBonus : {
		name : "Elemental Magic",
		spell : ["minor illusion"],
		selection : ["minor illusion"],
		firstCol : "atwill"
	},
	action : [["bonus action", ""]]
};
FeatsList["scion of elemental earth-ua"] = {
	name : "Scion of Elemental Earth",
	source : [["UA:WotM", 8]],
	description : "I know the Druidcraft cantrip (choice of Int, Wis, or Cha spellcasting ability). As a bonus action, I can conjure a bulwark of earth that provides half cover to me or a creature of my choice within 30 ft of myself, until the start of my next turn. I can create this bulwark my Proficiency Bonus per long rest.",
	descriptionFull : "You've been exposed to the primordial magic of the Elemental Plane of Earth, granting you the following benefits:"+
	"\n   " + toUni("Elemental Magic") + ". You learn the druidcraft cantrip, using Intelligence, Wisdom, or Charisma as the spellcasting ability (choose when you select this feat)."+
	"\n   " + toUni("Earthen Shield") + ". You can use a bonus action to conjure a bulwark of earth that provides half cover to you or a creature of your choice within 30 feet of yourself. The bulwark remains until the start of your next turn. You can create this bulwark a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	usages : "Proficiency bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus');",
	recovery : "long rest",
	spellcastingAbility : [4,5,6],
	spellcastingBonus : {
		name : "Elemental Magic",
		spell : ["druidcraft"],
		selection : ["druidcraft"],
		firstCol : "atwill"
	},
	action : [["bonus action", ""]]
};
FeatsList["scion of elemental fire-ua"] = {
	name : "Scion of Elemental Fire",
	source : [["UA:WotM", 9]],
	description : "I know the Dancing Lights and Produce Flame cantrips. I can choose Int, Wis, or Cha as my spellcasting ability for this.. I can cast Produce Flame as normal, and I can also cast it as a bonus action a number of times equal to my Proficiency Bonus, regaining all expended uses when I finish a long rest.",
	descriptionFull : "You've been exposed to the primordial magic of the Elemental Plane of Fire, granting you the following benefits:"+
	"\n   " + toUni("Elemental Magic") + ". You learn the dancing lights cantrip, using Intelligence, Wisdom, or Charisma as the spellcasting ability (choose when you select this feat)."+
	"\n   " + toUni("Fervent Blaze") + ". You learn the produce flame cantrip, using the same spellcasting ability chosen for this feat's Elemental Magic benefit. You can cast produce flame as normal, and you can also cast it as a bonus action a number of times equal to your proficiency bonus, regaining all expended uses when you finish a long rest.",
	usages : "Proficiency bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus');",
	recovery : "long rest",
	spellcastingAbility : [4,5,6],
	spellcastingBonus : [{
		name : "Elemental Magic",
		spell : ["dancing lights"],
		selection : ["dancing lights"],
		firstCol : "atwill"
	}, {
		name : "Fervent Blaze",
		spell : ["produce flame"],
		selection : ["produce flame"]
	}, {
		name : "Fervent Blaze (bonus action)",
		spell : ["produce flame"],
		selection : ["produce flame"]
	}],
	calcChanges : {
		spellAdd : [
			function (spellKey, spellObj, spName, isDuplicate) {
				if (spName === "scion of elemental fire-ua" && spellKey === "produce flame") {
					if (isDuplicate) {
						spellObj.firstCol = "SP";
						spellObj.time = "1 bns";
						return true;
					} else {
						spellObj.firstCol = "atwill";
					}
				}
			},
			"I can cast Produce Flame as a bonus action a number of times equal to my proficiency bonus, regaining all expended uses when I finish a long rest."
		]
	}
};
FeatsList["scion of elemental water-ua"] = {
	name : "Scion of Elemental Water",
	source : [["UA:WotM", 9]],
	description : "",
	descriptionFull : "You've been exposed to the primordial magic of the Elemental Plane of Water, granting you the following benefits:"+
	"\n   " + toUni("Elemental Magic") + ". You learn the thaumaturgy cantrip, using Intelligence, Wisdom, or Charisma as the spellcasting ability (choose when you select this feat)."+
	"\n   " + toUni("Wave Surge") + ". You can use a bonus action to create a forceful surge of water directed at a creature within 15 feet of you that you can see. The target must make a Strength saving throw; the DC for this save is equal to 8 + your proficiency bonus + the spellcasting ability modifier chosen for this feat, and a creature can choose to fail this saving throw. On a failure, the target is pushed up to 10 feet away from you or pulled up to 10 feet toward you (your choice). The water vanishes immediately after the creature succeeds or fails. You can create this effect a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	usages : "Proficiency bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus');",
	recovery : "long rest",
	spellcastingBonus : {
		name : "Elemental Magic",
		spell : ["thaumaturgy"],
		selection : ["thaumaturgy"],
		firstCol : "atwill"
	},
	action : [["bonus action", ""]],
	choices : ["Intelligence", "Wisdom", "Charisma"],
	"intelligence" : {
		calculate : "event.value = 'I know the Thaumaturgy cantrip using Int as spellcasting ability. As a bonus action my Proficiency Bonus per long rest, I can have a creature within 15 ft that I can see make a Str save DC ' + (8 + Number(How('Proficiency Bonus')) + Number(What('Int Mod'))) + ' (8 + Prof Bonus + Int mod) or be pushed away from me or pulled towards me for up to 10 ft (my choice). The target can opt to fail.';",
		spellcastingBonus : {
			name : "Elemental Magic",
			spell : ["thaumaturgy"],
			selection : ["thaumaturgy"],
			firstCol : "atwill"
		},
		spellcastingAbility : 4
	},
	"wisdom" : {
		calculate : "event.value = 'I know the Thaumaturgy cantrip using Wis as spellcasting ability. As a bonus action my Proficiency Bonus per long rest, I can have a creature within 15 ft that I can see make a Str save DC ' + (8 + Number(How('Proficiency Bonus')) + Number(What('Wis Mod'))) + ' (8 + Prof Bonus + Wis mod) or be pushed away from me or pulled towards me for up to 10 ft (my choice). The target can opt to fail.';",
		spellcastingBonus : {
			name : "Elemental Magic",
			spell : ["thaumaturgy"],
			selection : ["thaumaturgy"],
			firstCol : "atwill"
		},
		spellcastingAbility : 5
	},
	"charisma" : {
		calculate : "event.value = 'I know the Thaumaturgy cantrip using Cha as spellcasting ability. As a bonus action my Proficiency Bonus per long rest, I can have a creature within 15 ft that I can see make a Str save DC ' + (8 + Number(How('Proficiency Bonus')) + Number(What('Cha Mod'))) + ' (8 + Prof Bonus + Cha mod) or be pushed away from me or pulled towards me for up to 10 ft (my choice). The target can opt to fail.';",
		spellcastingBonus : {
			name : "Elemental Magic",
			spell : ["thaumaturgy"],
			selection : ["thaumaturgy"],
			firstCol : "atwill"
		},
		spellcastingAbility : 6
	}
};

// Spells
SpellsList["antagonize-ua"] = {
	name : "Antagonize",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : [["UA:WotM", 10]],
	level : 3,
	school : "Ench",
	time : "1 a",
	range : "30 ft",
	components : "V,S,M",
	compMaterial : "A playing card depicting a rogue",
	duration : "Instantaneous",
	save : "Wis",
	description : "1 crea save or 4d4+1d4/SL Psychic dmg & melee atk vs. chosen crea; if none in range, dis. on next atk",
	descriptionShorter : "1 crea save or 4d4+1d4/SL Psychic dmg & melee atk vs. chosen crea; if no in range, dis. next atk",
	descriptionFull : "You whisper magical words that antagonize one creature of your choice within range. The target must make a Wisdom saving throw. On a failed save, it takes 4d4 psychic damage and must immediately use its reaction, if available, to make a melee attack against another creature of your choice that you can see. If no other creature is within range, the target has disadvantage on the next attack roll it makes before the start of your next turn."+
		AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d4 for each slot level above 4th."
};
SpellsList["house of cards-ua"] = {
	name : "House of Cards",
	classes : ["artificer", "bard", "sorcerer", "wizard"],
	source : [["UA:WotM", 10]],
	level : 3,
	school : "Conj",
	time : "1 min",
	range : "Touch",
	components : "V,S,M\u0192",
	compMaterial : "A deck of cards",
	duration : "24 h",
	description : "30-ft high tower, lifts up; 3 floors, 10-ft sq top floor; 5\xD710 ft card: AC 10, 1 HP; all in half cover (5 sp)",
	descriptionMetric : "10-m high tower, lifts up; 3 floors, 3-m sq top floor; 1,5\xD73m card: AC 10, 1 HP; all in half cover (5 sp)",
	descriptionFull : "You touch the ground and conjure forth a defensive structure made of enormous playing cards. The structure rises with you at its center, harmlessly lifting you and any creatures in the area. The house of cards has a square base that is 30 feet on each side, and it has three floors with 10-foot-high ceilings. The second floor is 20 feet on each side, and the top floor is 10 feet on each side\u2014both centered above the bottom floor. Ramps connect the interior of each floor, and empty doorframes connect the interior and exterior of each level. Creatures inside or on top of the structure have half cover."+
	"\n   Each card that comprises the house is 5 feet wide and 10 feet tall and is very fragile. A card has AC 10 and 1 hit point. The cards are immune to poison and psychic damage. Reducing a card to 0 hit points destroys it. Every time a card is destroyed, roll 1d6. If you roll a 5 or a 6, the house collapses, ending the spell."+
	"\n   The house and all its cards vanish when the spell ends."
};
SpellsList["spirit of death-ua"] = {
	name : "Spirit of Death",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["UA:WotM", 10]],
	level : 4,
	school : "Necro",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M\u0192",
	compMaterial : "A gilded playing card depicting an avatar of death worth at least 400 gp",
	duration : "Conc, 1 min",
	description : "Summon spirit to atk 1 crea; obeys commands; takes turn after me; ends if it or target at 0 hp (400gp)",
	descriptionFull : "You call forth a spirit that embodies death itself. Choose a creature you can see within range. The spirit manifests in an unoccupied space that you can see within 10 feet of the target, and the target becomes haunted by the spirit. The spirit uses the Reaper Spirit stat block. The spirit disappears when it or the haunted creature is reduced to 0 hit points, or when the spell ends."+
	"\n   The reaper spirit is an ally to you and your companions. In combat, the spirit shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you), but it will only attack the haunted creature. If you don't issue the spirit any commands, it takes the Dodge action and uses its move to avoid danger."+
	AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, use the higher level wherever the spell's level appears in the stat block."
};
SpellsList["spray of cards-ua"] = {
	name : "Spray of Cards",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : [["UA:WotM", 11]],
	level : 2,
	school : "Conj",
	time : "1 a",
	range : "15-ft cone",
	components : "V,S,M\u0192",
	compMaterial : "A deck of cards",
	duration : "Instantaneous",
	save : typePF ? "W/D" : "W/d",
	description : "All in area either: Wis save or blinded 1 rnd; or 2d10+1d10/2SL Force dmg, Dex save halves (5sp)",
	descriptionFull : "You spray spectral cards from your hands or sleeve; the cards blind or slash at your enemies, and then vanish. Choose one of the following effects for the cards."+
	"\n   " + toUni("Blinding Cards") + ". Each creature in a 15-foot cone must succeed on a Wisdom saving throw or be blinded until the end of their next turn."+
	"\n   " + toUni("Cutting Cards") + ". Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes 2d10 force damage on a failed save or half as much damage on a successful one."+
	AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage of cutting cards increases by 1d10 for every two slot levels above 2nd."
};
SpellsList["summon warrior spirit-ua"] = {
	name : "Summon Warrior Spirit",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["UA:WotM", 11]],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "90 ft",
	components : "V,S,M\u0192",
	compMaterial : "A gilded playing card depicting a knight worth at least 300 gp",
	duration : "Conc, 1 h",
	description : "Summon choice of Warrior Spirit; obeys commands; takes turn after mine; disappears at 0 hp (300gp)",
	descriptionFull : "You call forth a warrior spirit from the legendary Deck of Many Things. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Warrior Spirit stat block. When you cast the spell, choose a type of warrior: barbarian, fighter, or monk. The warrior resembles a humanoid armed appropriately to the chosen class, which determines certain traits in its stat block. The warrior disappears when it drops to 0 hit points or when the spell ends."+
	"\n   The warrior is an ally to you and your companions. In combat, the warrior shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger."+
	AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the creature assumes the higher level for that casting wherever it uses the spell's level in its stat block."
};
