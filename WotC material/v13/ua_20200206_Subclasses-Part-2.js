var iFileName = "ua_20200206_Subclasses-Part-2.js";
RequiredSheetVersion(13);
// This file adds the content from the Unearthed Arcana 2020: Subclasses, Part 2 article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:SP2"] = {
	name : "Unearthed Arcana: Subclasses, Part 2",
	abbreviation : "UA:SP2",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2020/dnd/downloads/UA2020_02_06_Subclasses2.pdf",
	date : "2020/02/06"
};

// Add a subclass for the Bard and the functionality for its Dancing Item
AddSubClass("bard", "college of creation-ua", {
	regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*creation).*$/i,
	subname : "College of Creation",
	source : [["UA:SP2", 1]],
	features : {
		"subclassfeature3" : {
			name : "Note of Potential",
			source : [["UA:SP2", 1]],
			minlevel : 3,
			description : desc([
				"I can also grant a note of potential to whomever I give a bardic inspiration die",
				"This tiny, invulnerable object orbits in 5 ft; It enhances the use of the inspiration die:",
				"\u2022 Note of Destruction (used for attack roll): others within 5 ft must make a Con save",
				"  If failed, they take the die roll in thunder damage; This uses my spell save DC",
				"\u2022 Note of Protection (used for save): Grants temp HP equal to the roll + my Cha mod",
				"\u2022 Note of Ingenuity (used for check): Roll the die twice and choose which result to use"
			])
		},
		"subclassfeature6" : {
			name : "Animating Performance",
			source : [["UA:SP2", 1]],
			minlevel : 6,
			description : desc([
				"As an action, I can animate a Large or smaller nonmagical item I can see within 30 ft",
				"It lasts for 1 hour or until it has 0 HP; I control it and it acts on my initiative, after me",
				"Unless I use a bonus action to command it, it only takes the Dodge action on its turn",
				"When I use bardic inspiration, I can command the item as part of the same bonus action",
				"I can't have multiple at once; Select \"Dancing Item\" on a companion page for its stats",
				"In addition to once per long rest, I can also do this with a spell slot of 3rd-level or higher"
			]),
			action : [["action", ""]],
			usages : 1,
			recovery : "long rest",
			eval : function (lvl, chc) {
				var useFunct = ClassList.artificer ? ClassList.artificer.artificerCompFunc : ClassList.bard.artificerCompFunc;
				useFunct.add("Dancing Item");
			},
			removeeval : function (lvl, chc) {
				var useFunct = ClassList.artificer ? ClassList.artificer.artificerCompFunc : ClassList.bard.artificerCompFunc;
				useFunct.remove("dancing item");
				if (CreatureList["dancing item-ua"]) CreatureList["dancing item-ua"].removeeval();
			}
		},
		"subclassfeature14" : {
			name : "Performance of Creation",
			source : [["UA:SP2", 2]],
			minlevel : 14,
			description : desc([
				"As an action, I create a Large or smaller nonmagical item in an empty space in 10 ft",
				"Its value is limited; I can't have multiple, creating more makes the first one vanish",
				"It vanishes when my next turn ends, unless I use my action to extend its life 1 extra turn",
				"If I sustain it for 1 minute this way, it continues to exists for my bard level in hours",
				"In addition to once per long rest, I can also do this with a spell slot of 5th-level or higher"
			]),
			action : [["action", ""]],
			usages : 1,
			recovery : "long rest",
			additional : levels.map(function (n) {
				return n < 14 ? "" : n * 20 + " gp";
			})
		}
	}
});
CreatureList["dancing item-ua"] = {
	name : "Dancing Item",
	source : [["UA:SP2", 2]],
	size : 4,
	type : "Construct",
	subtype : "",
	alignment : "Neutral",
	ac : 16,
	hp : 33,
	hd : [],
	speed : "40 ft",
	scores : [18, 12, 16, 4, 10, 6],
	saves : ["", "", "", "", "", ""],
	damage_immunities : "poison",
	condition_immunities : "charmed, exhaustion, poisoned, frightened",
	passivePerception : 10,
	senses : "Darkvision 60 ft",
	languages : "understands the languages of its creator but can't speak",
	challengeRating : "1",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Force-Empowered Slam",
		ability : 0,
		damage : [1, 10, "force"],
		range : "Melee (5 ft)",
		modifiers : ["", "oCha", false]
	}],
	features : [{
		name : "Creator",
		description : "The item obeys the commands of its creator and uses its creator's spell attack modifier to hit for its attack rolls. It takes its turn immediately after its creator, on the same initiative count. It can move and take reactions on its own, but only takes the Dodge action on its turn unless its creator takes a bonus action to command to do otherwise, in which case it can only take the Dash, Force-Empowered Slam (and possibly Endless Waltz), Disengage, Help, Hide, or Search action."
	}],
	actions : [{
		name : "Immutable Form",
		description : "The item is immune to any spell or effect that would alter its form."
	}, {
		name : "Endless Waltz",
		description : "Immediately after the item makes a slam attack, it can take the Dodge action as a bonus action."
	}],
	eval : function(prefix) {
		// set type in the top right
		Value(prefix + 'Comp.Type', "Animated");
		// auto calculate HP
		var HPmaxFld = tDoc.getField(prefix + "Comp.Use.HP.Max");
		HPmaxFld.setAction("Calculate", "event.value = (classes.known.bard ? classes.known.bard.level : classes.totallevel) * 5 + Number(What('Cha Mod')) + Number(What('" + prefix + "Comp.Use.Ability.Con.Mod'));");
		HPmaxFld.readonly = true;
		Hide(prefix + "Buttons.Comp.Use.HP.Max");
		// set attacks
		for (var i = 1; i <= 3; i++) {
			var ToHitFld = tDoc.getField(prefix + "BlueText.Comp.Use.Attack." + i + ".To Hit Bonus");
			ToHitFld.setAction("Calculate", "if (What(event.target.name.replace('BlueText.', '').replace('To Hit Bonus', 'Weapon Selection')).toLowerCase().indexOf('force-empowered slam') !== -1) {\n\tevent.value = (CurrentSpells.bard && CurrentSpells.bard.calcSpellScores && CurrentSpells.bard.calcSpellScores.attack ? CurrentSpells.bard.calcSpellScores.attack : 'oProf+oCha') + '-Prof';\n\tevent.target.readonly = true;\n} else {\n\tevent.target.readonly = false;\n};");
			ToHitFld.calcOrderIndex = tDoc.getField(prefix + "Comp.Use.Attack." + i + ".To Hit").calcOrderIndex - 1;
		}
		// add bonus action to first page
		processActions(true, "Dancing Item", [["bonus action", " (command)"]], "Dancing Item");
	},
	removeeval : function(prefix) {
		if (prefix) {
			// reset type in top right
			Value(prefix + 'Comp.Type', "Companion");
			// reset HP calculation
			var HPmaxFld = tDoc.getField(prefix + "Comp.Use.HP.Max");
			HPmaxFld.setAction("Calculate", "1");
			HPmaxFld.readonly = false;
			DontPrint(prefix + "Buttons.Comp.Use.HP.Max");
			// reset readonly of attack fields
			for (var i = 1; i <= 3; i++) {
				tDoc.getField(prefix + "BlueText.Comp.Use.Attack." + i + ".To Hit Bonus").readonly = false;
			}
		}
		// remove action
		var useFunct = ClassList.artificer ? ClassList.artificer.artificerCompFunc : ClassList.bard.artificerCompFunc;
		if (useFunct.find("dancing item").length < (prefix ? 2 : 1)) processActions(false, "Dancing Item", [["bonus action", " (command)"]], "Dancing Item")
	}
};
// Add the artificer companion functions to the main bard class object if the artificer is not defined
if (!ClassList.artificer) {
	ClassList.bard.artificerCompFunc = {
		add : function (compName) {
			var AScompA = isTemplVis('AScomp') ? What('Template.extras.AScomp').split(',') : false;
			var prefix = false;
			if (AScompA) {
				for (var a = 1; a < AScompA.length; a++) {
					if (!What(AScompA[a] + 'Comp.Race')) {
						prefix = AScompA[a];
						break;
					}
				}
			}
			if (!prefix) prefix = DoTemplate('AScomp', 'Add');
			Value(prefix + 'Comp.Race', compName);
			var changeMsg = "The " + compName + " has been added to the companion page at page number " + (tDoc.getField(prefix + 'Comp.Race').page + 1);
			CurrentUpdates.types.push("notes");
			if (!CurrentUpdates.notesChanges) {
				CurrentUpdates.notesChanges = [changeMsg];
			} else {
				CurrentUpdates.notesChanges.push(changeMsg);
			}
			return prefix;
		},
		remove : function (compName) {
			var AScompA = isTemplVis('AScomp') ? What('Template.extras.AScomp').split(',') : false;
			if (!AScompA) return;
			compName = compName.toLowerCase();
			for (var a = 1; a < AScompA.length; a++) {
				if (What(AScompA[a] + 'Comp.Race').toLowerCase().indexOf(compName) !== -1) {
					DoTemplate("AScomp", "Remove", AScompA[a], true);
				}
			}
		},
		find : function (compName) {
			var AScompA = isTemplVis('AScomp') ? What('Template.extras.AScomp').split(',') : false;
			var prefixes = [];
			if (!AScompA) return prefixes;
			compName = compName.toLowerCase();
			for (var a = 1; a < AScompA.length; a++) {
				if (What(AScompA[a] + 'Comp.Race').toLowerCase().indexOf(compName) !== -1) prefixes.push(AScompA[a]);
			}
			return prefixes;
		}
	}
};

// Add a subclass for the Cleric
AddSubClass("cleric", "unity domain-ua", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*unity).*$/i,
	subname : "Unity Domain",
	source : [["UA:SP2", 2]],
	spellcastingExtra : ["heroism", "shield of faith", "aid", "warding bond", "beacon of hope", "sending", "aura of purity", "guardian of faith", "greater restoration", "rary's telepathic bond"],
	features : {
		"subclassfeature1" : {
			name : "Emboldening Bond",
			source : [["UA:SP2", 3]],
			minlevel : 1,
			action : ["bonus action", ""],
			description : function () {
				var descr = desc([
					"As an action, I can magically bond two willing targets I can see in 30 ft (can be me)",
					"While within 30 ft of the other, a bonded target can add +d4 to a save, attack, or check",
					"The +d4 can only be added once per turn; The bond lasts 1 hour or until I use this again",
					"In addition to once per long rest, I can also use this feature by expending a spell slot"
				]);
				var descr17 = descr.replace('While within 30 ft of the other', 'While on the same plane');
				return levels.map(function (n) {
					return n < 17 ? descr : descr17;
				});
			}(),
			action : [["action", ""]],
			usages : 1,
			recovery : "long rest"
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Shared Burden",
			source : [["UA:SP2", 3]],
			minlevel : 2,
			description : desc([
				"As a reaction when a creature I can see in 30 ft takes damage, I can divide that damage",
				"I then choose a number of willing creatures that I can see equal to my Wis mod (min 1)",
				"I distribute the damage over these and the original target, each taking at least 1 damage",
				"Damage resistances and vulnerabilities are only applied after the damage is distributed"
			]),
			action : ["reaction", ""]
		},
		"subclassfeature6" : {
			name : "Protective Bond",
			source : [["UA:SP2", 3]],
			minlevel : 6,
			description : desc([
				"My emboldening bond now also allows the two bonded to shield each other of damage",
				"When the other takes damage, one can use its reaction to give it resistance to all damage",
				"This resistance lasts until the end of the current turn"
			]),
			additional : levels.map(function (n) {
				return n < 6 ? "" : n < 17 ? "the bonded must be within 30 ft" : "the bonded must be on the same plane";
			})
		},
		"subclassfeature8" : {
			name : "Potent Spellcasting",
			source : [["UA:SP2", 3]],
			minlevel : 8,
			description : "\n   I add my Wisdom modifier to the damage I deal with my cleric cantrips",
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
						if (spellKey == "shillelagh") {
							spellObj.description = spellObj.description.replace("1d8", "1d8+" + What("Wis Mod"));
							return true;
						}
						return genericSpellDmgEdit(spellKey, spellObj, "\\w+\\.?", "Wis", true);
					},
					"My cleric cantrips get my Wisdom modifier added to their damage."
				]
			}
		},
		"subclassfeature17" : {
			name : "Enduring Unity",
			source : [["UA:SP2", 3]],
			minlevel : 17,
			description : desc([
				"The 30 ft restriction no longer applies to my emboldening and protective bond features",
				"My emboldening bond now also empowers a bonded if the other is reduced to 0 HP",
				"If that happens, the bonded creature above 0 HP gains the following benefits:",
				" \u2022 Advantage on attack rolls, ability checks, and saving throws; Resistance to all damage",
				" \u2022 As an action, it can touch its bonded partner to expend and roll HD to heal",
				"These benefits lasts for 1 minute or until the downed creature regains at least 1 HP"
			])
		}
	}
});

// Add a subclass for the Sorcerer
AddSubClass("sorcerer", "clockwork soul", {
	regExpSearch : /^((?=.*(sorcerer|witch))(?=.*mechanus)|(?=.*clockwork)(?=.*soul)).*$/i,
	subname : "Clockwork Soul",
	source : [["UA:SP2", 4]],
	fullname : "Clockwork Soul",
	spellcastingExtra : ["alarm", "protection from evil and good", "find traps", "heat metal", "counterspell", "glyph of warding", "arcane eye", "otiluke's resilient sphere", "animate objects", "wall of force"].concat(new Array(90)).concat("AddToKnown"),
	features : {
		"subclassfeature1" : {
			name : "Clockwork Magic",
			source : [["UA:SP2", 4]],
			minlevel : 1,
			description : "\n   I learn additional spells, which do not count towards the number of spell I can know"
		},
		"subclassfeature1.1" : {
			name : "Restore Balance",
			source : [["UA:SP2", 4]],
			minlevel : 1,
			description : desc([
				"As a reaction when a creature I can see in 60 ft is about to roll a d20 with adv./disadv.,",
				"I can prevent that roll from being affected by advantage and disadvantage."
			]),
			usages : "Charisma modifier per ",
			usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
			recovery : "long rest",
			action : [["reaction", ""]]
		},
		"subclassfeature6" : {
			name : "Bulwark of Law",
			source : [["UA:SP2", 4]],
			minlevel : 6,
			description : desc([
				"As an action, I can imbue a creature I can see within 30 ft with a magical ward",
				"I grant it a number of d8s equal to the number of sorcery points I expend when I do this",
				"When it takes damage, it can use its reaction to spend and roll any number of those dice",
				"The dice roll reduces the damage; The ward lasts until I finish a long rest or do this again"
			]),
			additional : "1-5 sorcery points; 1d8 per point",
			action : [["action", ""]]
		},
		"subclassfeature14" : {
			name : "Trance of Order",
			source : [["UA:SP2", 4]],
			minlevel : 14,
			description : desc([
				"As a bonus action, I can enter a state of clockwork consciousness for 1 minute",
				"While in this state, attack rolls against me can't benefit from advantage",
				"Also, I can then treat a d20 roll below 9 as a 10 for my attack rolls, checks, and saves",
				"In addition to once per long rest, I can also do this feature by expending 5 sorcery points"
			]),
			action : [["bonus action", ""]],
			additional : "or 5 sorcery points",
			usages : 1,
			recovery : "long rest"
		},
		"subclassfeature18" : {
			name : "Clockwork Cavalcade",
			source : [["UA:SP2", 5]],
			minlevel : 18,
			description : desc([
				"As an action, I can call spirits to bring balance in a 30-ft cube originating from me",
				"Inside the cube, the intangible spirits do all the following before vanishing:",
				" \u2022 Restore up to 100 HP, divided among the creatures in the cube as I see fit",
				" \u2022 Repair all damaged objects in the cube",
				" \u2022 End spells of my choice of 6th-level or lower on objects or creatures in the cube",
				"In addition to once per long rest, I can also do this feature by expending 7 sorcery points"
			]),
			action : [["action", ""]],
			additional : "or 7 sorcery p.",
			usages : 1,
			recovery : "long rest"
		}
	}
});
