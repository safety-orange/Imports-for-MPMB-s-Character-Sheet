var iFileName = "ua_20170327_A Trio-of-Subclasses.js";
RequiredSheetVersion("13.0.8");
// This file adds the content from the Unearthed Arcana: A Trio of Subclasses article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:AToS"] = {
	name : "Unearthed Arcana: A Trio of Subclasses",
	abbreviation : "UA:AToS",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2017/dnd/downloads/UAThreeSubclasses.pdf",
	date : "2017/03/27"
};

// Adds three subclass: 1 for the Monk, 1 for the Paladin, and 1 for the Ranger
AddSubClass("monk", "way of the drunken master-ua", {
	regExpSearch : /^((?=.*drunken)(?=.*master))|((?=.*drunk)((?=.*(monk|monastic))|((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior)))).*$/i,
	subname : "Way of the Drunken Master",
	source : [["UA:AToS", 1]],
	fullname : "Drunken Master",
	features : {
		"subclassfeature3" : {
			name : "Drunken Technique",
			source : [["UA:AToS", 1]],
			minlevel : 3,
			description : desc([
				"I gain proficiency with the Performance skill",
				"When using Flurry of Blows, I gain the benefits of a Disengage and +10 ft speed this turn"
			]),
			skills : ["Performance"]
		},
		"subclassfeature6" : {
			name : "Tipsy Sway",
			source : [["UA:AToS", 1]],
			minlevel : 6,
			description : "\n   " + "As a reaction when missed in melee, attacker instead hits another I can see within 5 ft",
			usages : 1,
			recovery : "short rest",
			action : ["reaction", ""]
		},
		"subclassfeature11" : {
			name : "Drunkard's Luck",
			source : [["UA:AToS", 1]],
			minlevel : 11,
			description : "\n   " + "Before I roll for a save, I can spend 1 ki to give myself advantage on it",
			additional : "1 ki point"
		},
		"subclassfeature17" : {
			name : "Intoxicated Frenzy",
			source : [["UA:AToS", 1]],
			minlevel : 17,
			description : "\n   " + "I can make 3 extra attacks with Flurry of Blows if each is used on a different target"
		}
	}
});
AddSubClass("paladin", "oath of redemption-ua", {
	regExpSearch : /^((?=.*redeemer)|((?=.*redemption)(((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper))))))).*$/i,
	subname : "Oath of Redemption",
	source : [["UA:AToS", 1]],
	features : {
		"subclassfeature3" : {
			name : "Armor of Peace",
			source : [["UA:AToS", 2]],
			minlevel : 3,
			description : "\n   " + "When not wearing armor or wielding a shield, my AC is 16 + my Dexterity modifier",
			armorOptions : {
				regExpSearch : /^(?=.*armou?r)(?=.*peace).*$/i,
				name : "Armor of Peace",
				source : [["UA:AToS", 2]],
				ac : 16
			},
			armorAdd : "Armor of Peace",
			spellcastingExtra : ["shield", "sleep", "hold person", "ray of enfeeblement", "counterspell", "hypnotic pattern", "otiluke's resilient sphere", "stoneskin", "hold monster", "wall of force"]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Emissary of Peace",
			source : [["UA:AToS", 2]],
			minlevel : 3,
			description : "\n   " + "As a bonus action, I gain +5 to my next Charisma (Persuasion) check in the next min",
			action : ["bonus action", ""]
		},
		"subclassfeature3.2" : {
			name : "Channel Divinity: Rebuke the Violent",
			source : [["UA:AToS", 2]],
			minlevel : 3,
			description : desc([
				"As a reaction when a hostile within 10 ft damages another in melee, I can rebuke it",
				"It takes the same damage as it dealt but as radiant damage, with a Wis save to halve it"
			]),
			action : ["reaction", ""]
		},
		"subclassfeature3.3" : {
			name : "Warrior of Reconciliation",
			source : [["UA:AToS", 2]],
			minlevel : 3,
			description : desc([
				"I can charm a creature when I reduce it to 0 HP with a simple, bludgeoning weapon",
				"It is peaceful, docile and only does what I command it to, but it can't cause harm",
				"For 1 min, until I'm incap., or I or allies attack it or have it save; after it is unconscious"
			])
		},
		"subclassfeature7" : {
			name : "Aura of the Guardian",
			source : [["UA:AToS", 2]],
			minlevel : 7,
			description : desc([
				"As a reaction when an ally within 10 ft takes damage, I instead take the damage",
				"This damage can't be reduced in any way; Other effects might still apply to my ally"
			]),
			action : ["reaction", ""]
		},
		"subclassfeature15" : {
			name : "Protective Spirit",
			source : [["UA:AToS", 2]],
			minlevel : 15,
			description : "\n   " + "At the end of my turn when I'm below half HP and not incapacitated, I regain HP",
			additional : levels.map(function (n) { return n < 15 ? "" : "1d6+" + Math.floor(n/2) + " HP"; })
		},
		"subclassfeature20" : {
			name : "Emissary of Redemption",
			source : [["UA:AToS", 3]],
			minlevel : 20,
			description : desc([
				"When taking damage from a creature, I take only half and it takes the other half",
				"This stops working on any that I attack or force to make a save, until I have a long rest"
			]),
			dmgres : ["All from creatures"]
		}
	}
});
// Add the Monster Slayer subclass to both the normal and Revised Ranger (if it is defined)
var UAAToS_rangerSubclassMonsterSlayerUA = AddSubClass("ranger", "monster slayer-ua", {
	regExpSearch : /^(?=.*monster)(?=.*slayer).*$/i,
	subname : "Monster Slayer",
	source : [["UA:AToS", 3]],
	fullname : "Monster Slayer",
	features : {
		"subclassfeature3" : {
			name : "Slayer's Mysticism",
			source : [["UA:AToS", 3]],
			minlevel : 3,
			description : "\n   " + "I get bonus spells known, which do not count against the number of spells I can know",
			spellcastingExtra : ["protection from evil and good", "zone of truth", "magic circle", "banishment", "planar binding"],
			spellcastingExtraApplyNonconform : true
		},
		"subclassfeature3.1" : {
			name : "Slayer's Eye",
			source : [["UA:AToS", 3]],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can study a creature within 120 ft that I can see",
				"I learn its vulnerabilities, immunities, resistances, and the effects damaging it can have",
				"My first weapon hit on it each turn does +1d6 damage, until I study another or rest"
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature7" : {
			name : "Supernatural Defense",
			source : [["UA:AToS", 3]],
			minlevel : 7,
			description : desc([
				"I add 1d6 to saves I make against abilities of the current target of my Slayer's Eye"
			])
		},
		"subclassfeature11" : {
			name : "Relentless Slayer",
			source : [["UA:AToS", 3]],
			minlevel : 11,
			description : desc([
				"As a reaction, I can stop the target of my Slayer's Eye from escaping, if within 30 ft",
				"If I win a contested Wis check, it wastes it action to teleport/transform/plane shift"
			]),
			action : ["reaction", ""]
		},
		"subclassfeature15" : {
			name : "Slayer's Counter",
			source : [["UA:AToS", 3]],
			minlevel : 15,
			description : desc([
				"As a reaction when the target of my Slayer's Eye has me make a save, I can attack it",
				"I can make one weapon attack; If this hits, I automatically succeed on the saving throw"
			]),
			action : ["reaction", ""]
		}
	}
});
if (ClassList.rangerua) { ClassList.rangerua.subclasses[1].push(UAAToS_rangerSubclassMonsterSlayerUA); };
