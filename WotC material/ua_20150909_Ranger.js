// This code was contributed by Lewis Henderson
//
// Please note that the original .pdf has the hit dice as 2d6 per level.
// There isn't any way to implement this, so the hit dice is recorded as a d12.
// Also note that there is no automation for the companion page included in this.
//
// You will have to chose the ranger's animal spirit from the companion race drop-down list and add the Wisdom modifier bonus to attacks and saves manually.
var iFileName = "ua_20150909_Ranger.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Unearthed Arcana: Ranger article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:R"] = {
	name : "Unearthed Arcana: Ranger",
	abbreviation : "UA:R",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2015/downloads/dnd/DX_0907_UA_RangerOptions.pdf",
	date : "2015/09/09"
};

// Define a new class, called "Playtest Ranger" and its 3 subclasses
ClassList["ua-playtest-ranger"] = {
	regExpSearch : /^(?=.*playtest)((?=.*(ranger|strider))|((?=.*(nature|natural))(?=.*(knight|fighter|warrior|warlord|trooper)))).*$/i,
	name : "Playtest Ranger",
	source : ["UA:R", 0],
	primaryAbility : "\n \u2022 Playtest Ranger: Dexterity and Wisdom;",
	prereqs : "\n \u2022 Playtest Ranger: Dexterity 13 and Wisdom 13;",
	die : 12,
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	saves : ["Dex", "Wis"],
	skills : ["\n\n" + toUni("Ranger") + ": Choose three from Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, and Survival", "\n\n" + toUni("Multiclass Ranger") + ": Choose one from Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, and Survival"],
	toolProfs : { primary : ["Herbalism kit"] },
	armor : [
		[true, false, false, true],
		[true, false, false, true]
	],
	weapons : [
		[true, true],
		[true, true]
	],
	equipment : "Playtest Ranger starting equipment:\n \u2022 leather armor;\n \u2022 Two shortswords -or- two martial melee weapons -or- a martial weapon and a shield;\n \u2022 A dungeoneer's pack -or- an explorer's pack;\n \u2022 A longbow and a quiver of 20 arrows -or- a martial weapon.",
	subclasses : ["Ranger Path", ["ua-playtest-ranger-guardian", "ua-playtest-ranger-seeker", "ua-playtest-ranger-stalker"]],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	features : {
		"ambuscade" : {
			name : "Ambuscade",
			source : ["UA:R", 2],
			minlevel : 1,
			description : desc([
				"When I roll initiative, I gain a special turn before others can act",
				"During this bonus turn, I can only use the Attack or Hide action",
				"I can't be surprised, but if I would be surprised I don't get the bonus turn"
			])
		},
		"natural explorer" : ClassList.ranger.features["natural explorer"],
		"fighting style" : ClassList.ranger.features["fighting style"],
		"skirmisher's stealth" : {
			name : "Skirmisher's Stealth",
			source : ["UA:R", 3],
			minlevel : 2,
			description : desc([
				"At the start of my turn, I can chose a creature I'm hidden from",
				"During that turn, I remain hidden from it, regardless of my actions",
				"As a bonus action at the end of my turn, I can use the Hide action"
			]),
			action : ["bonus action", ""],
		},
		"subclassfeature3" : {
			name : "Ranger Path",
			source : ["UA:R", 3],
			minlevel : 3,
			description : desc([
				"Choose a Ranger Path you wish to follow and put it in the \"Class\" field",
				"Choose Guardian, Seeker, or Stalker"
			])
		},
		"primeval awareness" : ClassList.ranger.features["primeval awareness"]
	}
};
ClassSubList["ua-playtest-ranger-guardian"] = {
	regExpSearch : /^(?=.*guardian)((?=.*(ranger|strider))|((?=.*(nature|natural))(?=.*(knight|fighter|warrior|warlord|trooper)))).*$/i,
	subname : "Guardian",
	source : ["UA:R", 3],
	features : {
		"subclassfeature3" : {
			name : "Brown Bear Spirit Companion",
			source : ["UA:R", 3],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can have my brown bear spirit animal materialize or dismiss it",
				"It has all the stats of a brown bear and adds my Wis mod to its attacks and saves",
				"Its HP is half my ranger level or the total in its stat block, whichever is higher",
				"It takes it turn right after my initiative and is under my complete control"
			]),
			usages : 1,
			recovery : "short rest",
			action : ["bonus action", ""]
		},
		"subclassfeature3.1" : {
			name : "Guardian's Shroud",
			source : ["UA:R", 4],
			minlevel : 3,
			description :"\n   " + "When I call my spirit animal, I grant me or an ally I can see 2d6 + Wis mod temp HP"
		}
	}
};
ClassSubList["ua-playtest-ranger-seeker"] = {
	regExpSearch : /^(?=.*seeker)((?=.*(ranger|strider))|((?=.*(nature|natural))(?=.*(knight|fighter|warrior|warlord|trooper)))).*$/i,
	subname : "Seeker",
	source : ["UA:R", 4],
	features : {
		"subclassfeature3" : {
			name : "Giant Eagle Spirit Companion",
			source : ["UA:R", 3],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can have my giant eagle spirit animal materialize or dismiss it",
				"It has all the stats of a giant eagle and adds my Wis mod to its attacks and saves",
				"Its HP is half my ranger level or the total in its stat block, whichever is higher",
				"It takes it turn right after my initiative and is under my complete control"
			]),
			usages : 1,
			recovery : "short rest",
			action : ["bonus action", ""]
		},
		"subclassfeature3.1" : {
			name : "Seeker's Eye",
			source : ["UA:R", 4],
			minlevel : 3,
			description : desc([
				"When I call my spirit animal, I can chose a creature that I can see",
				"Until the end of my next turn, all attacks against the target have advantage"
			])
		}
	}
};
ClassSubList["ua-playtest-ranger-stalker"] = {
	regExpSearch : /^(?=.*stalker)((?=.*(ranger|strider))|((?=.*(nature|natural))(?=.*(knight|fighter|warrior|warlord|trooper)))).*$/i,
	subname : "Stalker",
	source : ["UA:R", 4],
	features : {
		"subclassfeature3" : {
			name : "Dire Wolf Spirit Companion",
			source : ["UA:R", 3],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can have my dire wolf spirit animal materialize or dismiss it",
				"It has all the stats of a dire wolf and adds my Wis mod to its attacks and saves",
				"Its HP is half my ranger level or the total in its stat block, whichever is higher",
				"It takes it turn right after my initiative and is under my complete control"
			]),
			usages : 1,
			recovery : "short rest",
			action : ["bonus action", ""]
		},
		"subclassfeature3.1" : {
			name : "Stalker's Fangs",
			source : ["UA:R", 4],
			minlevel : 3,
			description : desc([
				"When I call my spirit animal, I can chose a creature that I can see",
				"The target's next weapon attack hit deals 2d6 + Wis mod extra slashing damage"
			])
		}
	}
};
