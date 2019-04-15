var iFileName = "ua_20150406_Modifying-Classes.js";
RequiredSheetVersion(13);
// This file adds the content from the Unearthed Arcana: Modifying Classes article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:MC"] = {
	name : "Unearthed Arcana: Modifying Classes",
	abbreviation : "UA:MC",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2015/downloads/dnd/UA3_ClassDesignVariants.pdf",
	date : "2015/04/06"
};
// Also needs the PHB source, as the spell-less ranger uses stuff from there
if (!SourceList.P) {
	SourceList.P = {
		name : "Player's Handbook",
		abbreviation : "PHB",
		group : "Primary Sources",
		url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/rpg_playershandbook",
		date : "2014/08/19"
	};
};

// Adds a subclass for the Sorcerer, called "Favored Soul", but only have it added at the very end, after all cleric subclasses have been defined
RunFunctionAtEnd(function() {
	var SorcererSubclassFavoredSoul = AddSubClass("sorcerer", "favored soul", {
		regExpSearch : /^(?=.*favou?red)(?=.*soul).*$/i,
		subname : "Favored Soul",
		source : ["UA:MC", 8],
		fullname : "Favored Soul",
		attacks : [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
		features : {
			"subclassfeature1" : {
				name : "Bonus Proficiencies",
				source : ["UA:MC", 9],
				minlevel : 1,
				description : "\n   " + "I gain proficiency with light armor, medium armor, shields, and simple weapons",
				armorProfs : [true, true, false, true],
				weaponProfs : [true, false]
			},
			"subclassfeature1.1" : {
				name : "Chosen of the Gods",
				source : ["UA:MC", 8],
				minlevel : 1,
				description : "\n   " + "Choose a Cleric Domain using the \"Choose Feature\" button above" + "\n   " + "I add the chosen domain's spells to my known spells, when they are of a level I can cast" + "\n   " + "These count as sorcerer spells, but do not count against the number of spells I can know",
				choices : []
			},
			"subclassfeature14" : {
				name : "Divine Wings",
				source : ["UA:MC", 8],
				minlevel : 14,
				description : "\n   " + "As a bonus action, I sprout feathered or bat wings from my back unless blocked by armor" + "\n   " + "I gain a fly speed equal to my current speed until I dismiss the wings as a bonus action",
				action : ["bonus action", " (start/stop)"],
				speed : { fly : { spd : "walk", enc : "walk" } }
			},
			"subclassfeature18" : {
				name : "Power of the Chosen",
				source : ["UA:MC", 8],
				minlevel : 18,
				description : "\n   " + "When I cast a spell I gained from the Chosen of the Gods class feature, I heal myself" + "\n   " + "I regain a number of HP equal to my Charisma modifier (minimum 1) + the spell's level"
			}
		}
	});
	// Adding all cleric domain spells to the options of the first level ability "Chosen of the Gods"
	var FSfeat = ClassSubList[SorcererSubclassFavoredSoul].features["subclassfeature1.1"];
	for (var i = 0; i < ClassList.cleric.subclasses[1].length; i++) {
		var cDomain = ClassSubList[ClassList.cleric.subclasses[1][i]];
		if (cDomain && cDomain.spellcastingExtra) {
			var eSpells = eval(cDomain.spellcastingExtra.toSource());
			eSpells[100] = "AddToKnown";
			var dSource = cDomain.source ? cDomain.source : cDomain.features["subclassfeature1"] && cDomain.features["subclassfeature1"].source ? cDomain.features["subclassfeature1"].source :[["UA:MC", 8]];
			
			var suffix = 1;
			var entryDoNm = cDomain.subname;
			while (FSfeat.choices.indexOf(entryDoNm) !== -1) {
				suffix += 1;
				entryDoNm = cDomain.subname + " (" + suffix + ")";
			};
			FSfeat.choices.push(entryDoNm);
			FSfeat[entryDoNm.toLowerCase()] = {
				name : "Chosen of the Gods: " + cDomain.subname,
				source : dSource,
				spellcastingExtra : eSpells,
				description : "\n   " + "I add the " + cDomain.subname.toLowerCase() + " spells to my known spells, if they are of a level I can cast" + "\n   " + "These count as sorcerer spells, but do not count against the number of spells I can know"
			};
		};
	};
});

// A version of the ranger, the spell-less ranger
ClassList["spell-less ranger"] = {
	regExpSearch : /^(?=.*spell.?less)((?=.*(ranger|strider))|((?=.*(nature|natural))(?=.*(knight|fighter|warrior|warlord|trooper)))).*$/i,
	name : "Spell-less Ranger",
	source : ["UA:MC", 6],
	primaryAbility : "Dexterity and Wisdom",
	abilitySave : 1,
	abilitySaveAlt : 2,
	prereqs : "Dexterity 13 and Wisdom 13",
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	die : 10,
	saves : ["Str", "Dex"],
	skillstxt : {
		primary : "Choose three from Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, and Survival",
		secondary : "Choose one from Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, and Survival"
	},
	armorProfs : {
		primary : [true, true, false, true],
		secondary : [true, true, false, true]
	},
	weaponProfs : {
		primary : [true, true],
		secondary : [true, true]
	},
	equipment : "Spell-less Ranger starting equipment:\n \u2022 Scale mail -or- leather armor;\n \u2022 Two shortswords -or- two simple melee weapons;\n \u2022 A dungeoneer's pack -or- an explorer's pack;\n \u2022 A longbow and a quiver of 20 arrows.\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses : ["Ranger Archetype", []],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	features : {
		"favored enemy" : ClassList.ranger.features["favored enemy"],
		"natural explorer" : ClassList.ranger.features["natural explorer"],
		"combat superiority" : {
			name : "Combat Superiority",
			source : ["UA:MC", 6],
			minlevel : 2,
			description : "\n   " + "I gain a number of superiority dice that I can use to fuel special Maneuvers" + "\n   " + "I regain all superiority dice after a short rest",
			additional : "d8",
			usages : levels.map( function(n) {
				return n < 2 ? "" : n < 9 ? 4 : n < 17 ? 5 : 6;
			}),
			recovery : "short rest"
		},
		"combat maneuvers" : {
			name : "Combat Maneuvers",
			source : ["UA:MC", 6],
			minlevel : 2,
			description : "\n   " + "Use the \"Choose Feature\" button above to add a Maneuver to the third page" + "\n   " + "I can use a Maneuver by expending a superiority die (only one Maneuver per attack)",
			additional : levels.map( function(n) {
				if (n < 2) return "";
				return (n < 5 ? 2 : n < 9 ? 3 : n < 13 ? 4 : n < 17 ? 5 : 6) + " maneuvers known";
			}),
			extraname : "Maneuver",
			extrachoices : ["Commander's Strike", "Disarming Attack", "Distracting Strike", "Evasive Footwork", "Feinting Attack", "Goading Attack", "Lunging Attack", "Maneuvering Attack", "Menacing Attack", "Parry", "Precision Attack", "Pushing Attack", "Rally", "Riposte", "Sweeping Attack", "Trip Attack"],
			extraTimes : levels.map(function (n) {
				return n < 2 ? 0 : n < 5 ? 2 : n < 9 ? 3 : n < 13 ? 4 : n < 17 ? 5 : 6;
			}),
			"commander's strike" : {
				name : "Commander's Strike",
				source : ["P", 74],
				description : "\n   " + "I forgo one attack of my Attack action to use a bonus action to direct an ally I see/hear" + "\n   " + "The ally can use a reaction to make an attack, adding the superiority die to damage",
				action : ["bonus action", " (with Attack action)"]
			},
			"disarming attack" : {
				name : "Disarming Attack",
				source : ["P", 74],
				description : "\n   " + "Use after hitting a creature; I add the superiority die to my attack's damage" + "\n   " + "Target makes a Strength save or drops a held object of my choice to its feet"
			},
			"distracting strike" : {
				name : "Distracting Strike",
				source : ["P", 74],
				description : "\n   " + "Use after hitting a creature; I add the superiority die to my attack's damage" + "\n   " + "The next attack of an ally before my next turn has adv. against the creature"
			},
			"evasive footwork" : {
				name : "Evasive Footwork",
				source : ["P", 74],
				description : "\n   " + "Use when moving; I add the superiority die to my AC until I stop moving"
			},
			"feinting attack" : {
				name : "Feinting Attack",
				source : ["P", 74],
				description : "\n   " + "As a bonus action, I can feint to gain adv. on my next attack against a target within 5 ft" + "\n   " + "If the attack hits, I add the superiority die to my attack's damage",
				action : ["bonus action", ""]
			},
			"goading attack" : {
				name : "Goading Attack",
				source : ["P", 74],
				description : "\n   " + "Use after hitting a creature; I add the superiority die to my attack's damage" + "\n   " + "Target makes a Wis save or has disadv. vs. other targets until the end of my next turn"
			},
			"lunging attack" : {
				name : "Lunging Attack",
				source : ["P", 74],
				description : "\n   " + "I can spend a superiority die to increase the reach of a melee weapon attack by 5 ft" + "\n   " + "If the attack hits, I add the superiority die to my attack's damage"
			},
			"maneuvering attack" : {
				name : "Maneuvering Attack",
				source : ["P", 74],
				description : "\n   " + "Use after hitting a creature; I add the superiority die to my attack's damage" + "\n   " + "Ally can use reaction to move half speed without opportunity attack from the target"
			},
			"menacing attack" : {
				name : "Menacing Attack",
				source : ["P", 74],
				description : "\n   " + "Use after hitting a creature; I add the superiority die to my attack's damage" + "\n   " + "Target makes a Wisdom save or is frightened of me until the end of my next turn"
			},
			"parry" : {
				name : "Parry",
				source : ["P", 74],
				description : "\n   " + "When damaged in melee, I can use a reaction to reduce it by superiority die + Dex mod",
				action : ["reaction", " (when damaged in melee)"]
			},
			"precision attack" : {
				name : "Precision Attack",
				source : ["P", 74],
				description : "\n   " + "I add the superiority die to my attack roll, either before or after rolling"
			},
			"pushing attack" : {
				name : "Pushing Attack",
				source : ["P", 74],
				description : "\n   " + "Use after hitting a creature; I add the superiority die to the attack's damage" + "\n   " + "If target is Large or smaller, it must make a Strength save or be pushed up to 15 ft away"
			},
			"rally" : {
				name : "Rally",
				source : ["P", 74],
				description : "\n   " + "Ally that can see/hear me gets temporary HP equal to superiority die + Charisma mod",
				action : ["bonus action", ""]
			},
			"riposte" : {
				name : "Riposte",
				source : ["P", 74],
				description : "\n   " + "When missed in melee, I can use my reaction to make one melee attack vs. the attacker" + "\n   " + "If the attack hits, I add the superiority die to my attack's damage",
				action : ["reaction", " (after missed in melee)"]
			},
			"sweeping attack" : {
				name : "Sweeping Attack",
				source : ["P", 74],
				description : "\n   " + "Use after hitting a creature and a second creature is within 5 ft of the first" + "\n   " + "If the original attack roll hits this second creature, it takes the superiority die in damage"
			},
			"trip attack" : {
				name : "Trip Attack",
				source : ["P", 74],
				description : "\n   " + "Use after hitting a creature; I add the superiority die to the attack's damage" + "\n   " + "If target is Large or smaller, it must make a Strength save or be knocked prone"
			}
		},
		"fighting style" : ClassList.ranger.features["fighting style"],
		"poultices" : {
			name : "Poultices",
			source : ["UA:MC", 7],
			minlevel : 3,
			description : desc([
				"In 1 hour, I can create a number of poultices equal to my Wisdom modifier (min 1)",
				"The number of poultices I can have with me can't exceed my Wisdom modifier (min 1)",
				"I can applying a poultice in 1 minute, healing a creature; Poultices last for 24 hours"
			]),
			additional : levels.map( function(n) {
				if (n < 3) return "";
				return "heals " + Math.ceil(n/2) + "d6";
			})
		},
		"primeval awareness" : {
			name : "Primeval Awareness",
			source : ["UA:MC", 6],
			minlevel : 3,
			description : desc([
				"As an action, I can focus my awareness for 1 min, once per short rest",
				"Out to 1 mile (6 in favored terrain), I sense if certain types of creatures are present",
				"These types are: aberration, celestial, dragon, elemental, fey, fiend, and undead"
			]),
			action : ["action", ""],
			usages : 1,
			recovery : "short rest"
		},
		"subclassfeature3" : {
			name : "Ranger Archetype",
			source : ["UA:MC", 6],
			minlevel : 3,
			description : "\n   " + "Choose a Ranger Archetype you strive to emulate and put it in the \"Class\" field" + "\n   " + "Choose either Spell-less Beast Master or Spell-less Hunter"
		},
		"land's stride" : ClassList.ranger.features["land's stride"],
		"natural antivenom" : {
			name : "Natural Antivenom",
			source : ["UA:MC", 7],
			minlevel : 9,
			description : desc([
				"I have advantage on saves vs. poison and resistance to poison damage",
				"When I use a poultice, in addition to healing, I cure one poison effect on the creature"
			]),
			savetxt : { adv_vs : ["poison"] },
			dmgres : ["Poison"]
		},
		"hide in plain sight" : ClassList.ranger.features["land's stride"],
		"call natural allies" : {
			name : "Call Natural Allies",
			source : ["UA:MC", 7],
			minlevel : 13,
			description : desc([
				"While in an area that is my Favored Terrain, I can call on beasts within 1 mile to help",
				"The DM determines the beasts: 1\u00D7CR 2, 2\u00D7CR 1, 4\u00D7CR 1/2, or 8\u00D7CR 1/4",
				"They will fight alongside me, are friendly to me and my allies, and help up to 1 hour",
				"After I use these feature, I can't use it in the same general area again for 24 hours"
			])
		},
		"vanish" : ClassList.ranger.features["vanish"],
		"relentless" : {
			name : "Relentless",
			source : ["UA:MC", 7],
			minlevel : 17,
			description : "\n   " + "I regain one superiority die if I have no more remaining when I roll initiative"
		},
		"feral senses" : ClassList.ranger.features["feral senses"],
		"foe slayer" : ClassList.ranger.features["foe slayer"]
	}
};
// Create the Hunter subclass for the spell-less ranger
var SLR_Hunter = newObj(ClassSubList["ranger-hunter"]);
SLR_Hunter.source = ["UA:MC", 6];
delete SLR_Hunter.fullname;
SLR_Hunter.regExpSearch = /^(?=.*spell.?less)(?!.*(monster|barbarian|bard|cleric|druid|fighter|monk|paladin|rogue|sorcerer|warlock|wizard))(?=.*(hunter|huntress|hunts(wo)?m(e|a)n)).*$/i;
AddSubClass("spell-less ranger", "hunter", SLR_Hunter);
// Create the Beast Master subclass for the spell-less ranger
if (ClassSubList["ranger-beast master"]) {
	var SLR_Beast_Master = newObj(ClassSubList["ranger-beast master"]);
	SLR_Beast_Master.source = ["UA:MC", 6];
	delete SLR_Beast_Master.fullname;
	SLR_Beast_Master.regExpSearch = /^(?=.*spell.?less)(?=.*(animal|beast))((?=.*(master|ranger|strider))|((?=.*(nature|natural|green))(?=.*(knight|fighter|warrior|warlord|trooper)))).*$/i;
	SLR_Beast_Master.features["subclassfeature15"] = {
		name : "Beastly Coordination",
		source : ["UA:MC", 7],
		minlevel : 15,
		description : "\n   " + "My companion can, as a reaction, halve an attack's damage from an attacker that I see"
	};
	AddSubClass("spell-less ranger", "beast master", SLR_Beast_Master);
};
