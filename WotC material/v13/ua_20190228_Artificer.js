var iFileName = "ua_20190228_Artificer.js";
RequiredSheetVersion(13);
// This file adds the content from the Unearthed Arcana: Artificer 2019 article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:A2"] = {
	name : "Unearthed Arcana: Artificer 2019",
	abbreviation : "UA:A2",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2019/dnd/downloads/UA-Artificer-2019.pdf",
	date : "2019/02/28"
};

// Adds a new class, the Artificer, with 2 subclasses
ClassList['artificer-ua2'] = {
	regExpSearch : /^(?=.*artificer)(?!.*wizard).*$/i,
	name : "Artificer",
	source : ["UA:A2", 1],
	primaryAbility : "Intelligence",
	abilitySave : 4,
	prereqs : "Intelligence 13",
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	die : 8,
	saves : ["Con", "Int"],
	skillstxt : ["Choose two from Arcana, History, Investigation, Medicine, Nature, Perception, and Sleight of Hand", "Choose one from Arcana, Deception, History, Investigation, Medicine, Nature, Religion, and Sleight of Hand"],
	toolProfs : {
		primary : [["Thieves' tools", "Dex"], "Tinker's tools", ["Any artisan's tool", 1]],
		secondary : [["Thieves' tools", "Dex"], "Tinker's tools"]
	},
	armorProfs : [
		[true, true, false, true],
		[true, true, false, true]
	],
	weaponProfs : [
		[true, false, ["hand crossbow", "heavy crossbow"]]
	],
	equipment : "Artificer starting equipment:" +
		"\n \u2022 any two simple weapons;" +
		"\n \u2022 A light crossbow and 20 bolts;" +
		"\n \u2022 Studded leather armor -or- scale mail;" +
		"\n \u2022 Thieves' tools and a dungeoneer's pack;" +
		"\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses : ["Artificer Specialist", []],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	spellcastingFactor : 2,
	spellcastingTable : [[0, 0, 0, 0, 0, 0, 0, 0, 0]].concat(levels.map(function (n) {
		return defaultSpellTable[Math.ceil(n / 2)];
	})),
	spellcastingKnown : {
		cantrips : [2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4],
		spells : "list",
		prepared : true
	},
	features : {
		"magical tinkering" : {
			name : "Magical Tinkering",
			source : ["UA:A2", 2],
			minlevel : 1,
			description : desc([
// STILL TO DO
				"",
				"",
			])
		},
		"spellcasting" : {
			name : "Spellcasting",
			source : ["UA:A2", 3],
			minlevel : 1,
			description : desc([
				"I can cast prepared artificer cantrips/spells, using Intelligence as my spellcasting ability",
				"To cast, I must use thieves' or artisan's tools I'm proficient with as a spellcasting focus",
				"I can cast my prepared artificer spells as rituals if they have the ritual tag",
				"Whenever I gain an artificer level, I can swap one artificer cantrip I know for another"
			]),
			additional : levels.map(function (n, idx) {
				return [2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4][idx] + " cantrips known";
			})
		},
		"infuse item" : {
			name : "Infuse Item",
			source : ["UA:A2", 4],
			minlevel : 2,
			description : desc([
// STILL TO DO
				"By spending 1 minute, I can infuse one of my artificer spells into a nonmagical item",
				"This expends a spell slot as normal and the spell must have a casting time of 1 action",
				"An item holds max one spell for 8 hours; I can have up to my Int mod of infused items",
				"A creature holding an infused item can use an action to cast the spell, using my ability",
				"The spell's target is the creature activating it or, with area of effect spells, the item"
			]),
			additional : levels.map(function (n) {
				return n < 2 ? "" : (n < 4 ? 3 : n < 7 ? 4 : n < 11 ? 5 : n < 15 ? 6 : n < 19 ? 7 : 8) + " infusions known; max" + (n < 6 ? 2 : n < 11 ? 3 : n < 16 ? 4 : 5) + " infused items";
			})
		},
		"tool expertise" : {
			name : "Tool Expertise",
			source : ["UA:A2", 5],
			minlevel : 3,
			description : "\n   " + "I have expertise with all tools I am proficient with",
			skillstxt : "expertise with all tools I am proficient with",
			eval : function () {
				if ((/tool/i).test(What('Too Text'))) {
					Checkbox('Too Exp', true);
				};
			},
			removeeval : function () {
				if ((/tool/i).test(What('Too Text'))) {
					Checkbox('Too Exp', false);
				};
			}
		},
		"subclassfeature3" : {
			name : "Artificer Specialist",
			source : ["UA:A2", 4],
			minlevel : 3,
			description : desc([
				"Choose a specialism and put it in the \"Class\" field on the first page",
				"Choose either alchemist or artillerist"
			])
		},
		"arcane armament" : {
			name : "Arcane Armament",
			source : ["UA:A2", 4],
			minlevel : 5,
			description : " [as Extra Attack, but only with magic weapon]"
		},
		"the right cantrip for the job" : {
			name : "The Right Cantrip for the Job",
			source : ["UA:A2", 4],
			minlevel : 10,
			description : "\n   " + "Whenever I finish a short/long rest, I can swap one of my artificer cantrips for another"
		},
		"soul of artifice" : {
			name : "Soul of Artifice",
			source : ["UA:A2", 6],
			minlevel : 20,
			description : "\n   " + "I can attune to 6 magic items and gain +1 to all saves per magic item I am attuned to",
			savetxt : {
				text : ["+1 to all saves per attuned magic item"]
			}
		}
	}
};

// Set the Artificer class spell list
var SetArtificerSpells = function(){
	var artSp = [
		"acid splash",
		"dancing lights",
		"fire bolt",
		"guidance",
		"light",
		"mage hand",
		"mending",
		"message",
		"poison spray",
		"prestidigitation",
		"ray of frost",
		"resistance",
		"shocking grasp",
		"spare the dying",
		"thorn whip",
		// level 1
		"alarm",
		"arcane weapon",
		"cure wounds",
		"detect magic",
		"disguise self",
		"expeditious retreat",
		"false life",
		"grease",
		"identify",
		"jump",
		"longstrider",
		"sanctuary",
		"shield of faith",
		// level 2
		"aid",
		"alter self",
		"arcane lock",
		"blur",
		"continual flame",
		"darkvision",
		"enhance ability",
		"enlarge/reduce",
		"heat metal",
		"invisibility",
		"lesser restoration",
		"levitate",
		"magic mouth",
		"magic weapon",
		"protection from poison",
		"rope trick",
		"see invisibility",
		"spider climb",
		// level 3
		"blink",
		"dispel magic",
		"elemental weapon",
		"fly",
		"gaseous form",
		"glyph of warding",
		"haste",
		"protection from energy",
		"revivify",
		"water breathing",
		"water walk",
		// level 4
		"arcane eye",
		"fabricate",
		"freedom of movement",
		"leomund's secret chest",
		"mordenkainen's faithful hound",
		"mordenkainen's private sanctum",
		"otiluke's resilient sphere",
		"stone shape",
		"stoneskin",
		// level 5
		"animate objects",
		"bigby's hand",
		"creation",
		"greater restoration",
		"wall of stone"
	];
	for (var a = 0; a < artSp.length; a++) {
		var aArtSp = SpellsList[artSp[a]];
		if(aArtSp && aArtSp.classes && aArtSp.classes.indexOf("artificer-ua2") === -1) aArtSp.classes.push("artificer-ua2");
	};
}();
