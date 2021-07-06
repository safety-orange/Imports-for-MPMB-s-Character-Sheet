var iFileName = "ua_20210311_Folk-of-the-Feywild.js";
RequiredSheetVersion(13);
// This file adds the content from the Unearthed Arcana 2021: Folk of the Feywild article to MPMB's Character Record Sheet
// This file contains contributions by CountVladmir

SourceList["UA:FotF"] = {
	name : "Unearthed Arcana: Folk of the Feywild",
	abbreviation : "UA:FotF",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2021/dnd/downloads/UA2021_FeyFolk.pdf",
	date : "2021/03/11"
};

RaceList["fairy-ua"] = {
	regExpSearch : /fairy/i,
	name : "Fairy",
	source : [["UA:FotF", 2]],
	plural : "Faries",
	size : 4,
	speed : {
		walk : { spd : 30, enc : 20 },
		fly : { spd : "walk", enc : "walk" }
	},
	languageProfs : ["Common", 1],
	scorestxt : "+2 to one ability score and +1 to two other scores of my choice, -or- +1 to three different scores of my choice",
	spellcastingAbility : [4, 5, 6],
	spellcastingBonus : {
		name : "Fairy Magic",
		spells : ["druidcraft"],
		selection : ["druidcraft"],
		firstCol : "atwill"
	},
	features : {
		"fairy magic" : {
			name : "Fairy Magic",
			minlevel : 1,
			spellcastingBonus : {
				name : "Fairy Magic",
				spells : ["faerie fire"],
				selection : ["faerie fire"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
			extraLimitedFeatures : [{
				name : "Faerie Fire",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 1+"
			}]
		}
	},
	trait : "Fairy"+
	"\n \u2022 Fey: My creature type is fey, rather than humanoid."+
	"\n \u2022 Fairy Flight: I have a magical flying speed equal to my walking speed and can hover."+
	"\n \u2022 Fairy Magic: I know the Druidcraft and Faerie Fire spells, and can cast the latter without using a spell slot once per long rest, as well as using slots as normal."+
	"\n \u2022 Fey Passage: I can squeeze through a space as narrow as 1 inch wide."
};

RaceList["feywild hobgoblin-ua"] = {
	regExpSearch : /^(?=.*feywild)(?=.*hobgoblin).*$/i,
	name : "Feywild hobgoblin",
	sortname : "Hobgoblin, Feywild",
	source : [["UA:FotF", 2]],
	plural : "Feywild hobgoblins",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	scorestxt : "+2 to one ability score and +1 to two other scores of my choice, -or- +1 to three different scores of my choice",
	vision : [["Darkvision", 60]],
	savetxt : {
		adv_vs : ["charmed"]
	},
	features : {
		"fey gift" : {
			name : "Fey Gift",
			minlevel : 1,
			usages : "Proficiency bonus per ",
			action : [["bonus action", " (Help action)"]],
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery: "long rest"
		},
		"fortune from the many" : {
			name : "Fortune from the Many",
			minlevel : 1,
			usages: "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery: "long rest"
		},
		"fey gift - additional effect" : {
			name : "Fey Gifts - Additional Effects",
			popupName : "Feywild hobgoblin's additional effects for Fey Gifts",
			minlevel : 3,
			toNotesPage : [{
				name : "Fey Gifts - Additional Effects",
				page3notes : true,
				note : [
					"Whenever I take the Help action, I can choose one of the following effects:",
					" \u2022 Hospitality: The target and I each gain 1d6 + my Proficiency Bonus in temporary HP",
					" \u2022 Passage: The target and I gain +10 ft walking speed until my next turn starts",
					" \u2022 Spite: Enhances the first attack by the target or me that hits before my next turn starts",
					"   The creature hit has disadvantage on its next attack roll it makes within the next minute"
				]
			}]
		}
	},
	trait : "Feywild hobgoblin"+
	"\n \u2022 Fey Gift: I can take the Help action as a bonus action my Proficiency Bonus per long rest."+
	"\n \u2022 Fortune from the Many: When I miss an attack or fail an ability check or a save, I can gain a bonus to the roll equal to the number of allies I can see within 30 ft of me (max +5). I can do this a number of times per long rest equal to my Proficiency Bonus."+
	'\n \u2022 From 3rd-level onwards, whenever I take the Help action, I can choose to produce an additional effect: Hospitality, Passage, or Spite. See the 3rd page "Notes" section.'
};

RaceList["owlfolk-ua"] = {
	regExpSearch : /owlfolk/i,
	name : "Owlfolk",
	source : [["UA:FotF", 3]],
	plural : "Owlfolk",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 },
		fly : { spd : "walk", enc : "walk" }
			},
	skills : ["Stealth"],
	vision : [["Darkvision", 90]],
	languageProfs : ["Common", 1],
	scorestxt : "+2 to one ability score and +1 to two other scores of my choice, -or- +1 to three different scores of my choice",
	spellcastingAbility : [4, 5, 6],
	spellcastingBonus : {
		name : "Magic Sight",
		spells : ["detect magic"],
		selection : ["detect magic"]
	},
	trait : "Owlfolk"+
	"\n \u2022 Magic Sight: I know the spell Detect Magic and can cast as a ritual or by using spell slots as normal."+
	"\n \u2022 Nimble Flight: My wings give me a flying speed equal to my walking speed. As a reaction when I fall, I can make a Dexterity saving throw (DC 10) to stop falling and fly in place until the start of my next turn."+
	"\n \u2022 Silent Feathers: I have proficiency in the Stealth skill."
};

RaceList["rabbitfolk-ua"] = {
	regExpSearch : /rabbitfolk/i,
	name : "Rabbitfolk",
	source : [["UA:FotF", 3]],
	plural : "Rabbitfolk",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	skills : ["Perception"],
	addMod : [{ type : "skill", field : "Init", mod : "Prof", text : "I can add my proficiency bonus to initiative rolls." }],
	languageProfs : ["Common", 1],
	scorestxt : "+2 to one ability score and +1 to two other scores of my choice, -or- +1 to three different scores of my choice",
	action : [["reaction", "Lucky Footwork"]],
	trait : "Rabbitfolk"+
	"\n \u2022 Hare-Trigger: I add my proficiency bonus to initiative rolls."+
	"\n \u2022 Leporine Senses: I have proficiency in the Perception skill."+
	"\n \u2022 Lucky Footwork: As a reaction when I fail a Dexterity saving throw, I can add +1d4 to the result, potentially making it a success."+
	"\n \u2022 Rabbit Hop: Once during each of my turns when I walk at least 5 ft, I can hop an extra 1d12 ft without it costing any extra movement. I can only do this if my speed isn't 0."
};