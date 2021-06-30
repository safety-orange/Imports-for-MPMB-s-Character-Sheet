var iFileName = "ua_20170116_Ranger-and-Rogue.js";
RequiredSheetVersion(13);
// This file adds the content from the Unearthed Arcana: Ranger and Rogue article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:RnR"] = {
	name : "Unearthed Arcana: Ranger and Rogue",
	abbreviation : "UA:RnR",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2016/dnd/downloads/2017_01_UA_RangerRogue_0117JCMM.pdf",
	date : "2017/01/16"
};

// Adds 3 subclasses: 2 for the Ranger (and the Revised Ranger), and 1 for the Rogue
var UARnR_theHorizonWalkerSubclass = {
	regExpSearch : /^(?=.*horizon)(?=.*walker).*$/i,
	subname : "Horizon Walker",
	source : ["UA:RnR", 1],
	fullname : "Horizon Walker",
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	features : {
		"subclassfeature3" : {
			name : "Planar magic",
			source : ["UA:RnR", 1],
			minlevel : 3,
			description : desc([
				"I add a spell to my known spells at level 3, 5, 9, 13, and 17",
				"These count as ranger spells, but do not count against the number of spells I can know"
			]),
			spellcastingExtra : ["protection from evil and good", "alter self", "protection from energy", "banishment", "teleportation circle"],
			spellcastingExtraApplyNonconform : true
		},
		"subclassfeature3.1" : {
			name : "Planar Walker",
			source : ["UA:RnR", 1],
			minlevel : 3,
			description : desc([
				"As a bonus action, I choose an enemy within 30 ft of me that I can see",
				"Until the end of this turn, my attack against that enemy ignore damage resistances",
				"In addition, the first time I hit it this turn, it takes an extra 1d6 force damage"
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature3.2" : {
			name : "Portal Lore",
			source : ["UA:RnR", 1],
			minlevel : 3,
			description : desc([
				"As an action, I sense the distance and direction to any planar portals within 1000 ft",
				"I also sense to which plane the portal leads to; I can't sense details if obscured by magic",
				"I can use this feature additional times by expending spell slots of 2nd level or higher"
			]),
			usages : 1,
			recovery : "short rest",
			action : ["action", ""]
		},
		"subclassfeature7" : {
			name : "Ethereal Step",
			source : ["UA:RnR", 1],
			minlevel : 7,
			description : "\n   " + "As a bonus action, I can cast the Etherealness spell, which lasts until the end of the turn",
			usages : 1,
			recovery : "short rest",
			action : ["bonus action", ""],
			spellcastingBonus : {
				name : "Ethereal Step",
				spells : ["etherealness"],
				selection : ["etherealness"],
				firstCol : 'oncesr'
			},
			spellChanges : {
				"etherealness" : {
					time : "1 bns",
					duration : "1 rnd",
					description : "I go to Ethereal Plane; move there, but able to perceive 60 ft into the normal plane",
					changes : "Using my Ethereal Step class feature I can cast Etherealness as a bonus action once per short rest, but it only affects myself and lasts until the end of my turn."
				}
			}
		},
		"subclassfeature11" : {
			name : "Distant Strike",
			source : ["UA:RnR", 1],
			minlevel : 11,
			description : desc([
				"With the Attack action, I can teleport 10 ft before each attack, to a place I can see",
				"If I attack two different creatures with this action, I get an extra attack against a third"
			])
		},
		"subclassfeature15" : {
			name : "Spectral Defense",
			source : ["UA:RnR", 1],
			minlevel : 15,
			description : "\n   " + "As a reaction when I take damage, I can halve that damage against me",
			action : ["reaction", ""]
		}
	}
};
AddSubClass("ranger", "horizon walker-ua", UARnR_theHorizonWalkerSubclass);
var UARnR_thePrimevalGuardianSubclass = {
	regExpSearch : /^(?=.*primeval)(?=.*guardian).*$/i,
	subname : "Primeval Guardian",
	source : ["UA:RnR", 2],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	features : {
		"subclassfeature3" : {
			name : "Guardian magic",
			source : ["UA:RnR", 2],
			minlevel : 3,
			description : "\n   " + "I get bonus spells known, which do not count against the number of spells I can know",
			spellcastingExtra : ["entangle", "enhance ability", "conjure animals", "giant insect", "insect plague"],
			spellcastingExtraApplyNonconform : true
		},
		"subclassfeature3.1" : {
			name : "Guardian Soul",
			source : ["UA:RnR", 2],
			minlevel : 3,
			description : "\n   " + "As a bonus action, I transform to or from a guardian form, changing me as follows:" + "\n    - " + "I grow to Large size, all my movement is reduced to 5 ft, and I get +5 ft reach" + "\n    - " + "I gain half my ranger level in temporary HP at the start of each of my turns" + "\n   " + "This ends when I'm incapacitated; When it ends, I lose all temporary HP I got from it",
			additional : ["", "", "1 temp HP per round", "2 temp HP per round", "2 temp HP per round", "3 temp HP per round", "3 temp HP per round", "4 temp HP per round", "4 temp HP per round", "5 temp HP per round", "5 temp HP per round", "6 temp HP per round", "6 temp HP per round", "7 temp HP per round", "7 temp HP per round", "8 temp HP per round", "8 temp HP per round", "9 temp HP per round", "9 temp HP per round", "10 temp HP per round"],
			action : ["bonus action", " (start/end)"]
		},
		"subclassfeature3.2" : {
			name : "Piercing Thorns",
			source : ["UA:RnR", 2],
			minlevel : 3,
			description : "\n   " + "Once each turn, a hit from my weapon attack can deal 1d6 extra piercing damage",
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (!v.isSpell) fields.Description += (fields.Description ? '; ' : '') + 'Once per turn, +1d6 piercing damage';
					},
					"My weapon attacks can deal 1d6 extra piercing damage once per turn."
				]
			}
		},
		"subclassfeature7" : {
			name : "Ancient Fortitude",
			source : ["UA:RnR", 2],
			minlevel : 7,
			description : "\n   " + "When I assume my guardian form, my HP \u0026 max HP increase by twice my ranger level" + "\n   " + "When I leave the form, my max HP reverts back, and any excess HP I have is lost",
			additional : ["", "", "", "", "", "", "", "+16 max HP", "+18 max HP", "+20 max HP", "+22 max HP", "+24 max HP", "+26 max HP", "+28 max HP", "+30 max HP", "+32 max HP", "+34 max HP", "+36 max HP", "+38 max HP", "+40 max HP"]
		},
		"subclassfeature11" : {
			name : "Rooted Defense",
			source : ["UA:RnR", 2],
			minlevel : 11,
			description : "\n   " + "While in guardian form, the ground within 30 ft of me is difficult terrain for hostiles"
		},
		"subclassfeature15" : {
			name : "Guardian Aura",
			source : ["UA:RnR", 2],
			minlevel : 15,
			description : "\n   " + "While I'm in my guardian form, I heal allies that start their turn within 30 ft of me" + "\n   " + "They heal half my ranger level if they are below half HP and not undead or constructs",
			additional : ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "Heals 7 HP", "Heals 8 HP", "Heals 8 HP", "Heals 9 HP", "Heals 9 HP", "Heals 10 HP"]
		}
	}
};
AddSubClass("ranger", "primeval guardian-ua", UARnR_thePrimevalGuardianSubclass);
if (ClassList["rangerua"]) { // add them to the Revised Ranger as well, if it is defined
	var UARnR_theHorizonConclaveSubclass = newObj(UARnR_theHorizonWalkerSubclass);
	UARnR_theHorizonConclaveSubclass.subname = "Horizon Conclave";
	UARnR_theHorizonConclaveSubclass.regExpSearch = /^(?=.*horizon)(?=.*conclave).*$/i
	delete UARnR_theHorizonConclaveSubclass.fullname;
	AddSubClass("rangerua", "horizon conclave-ua", UARnR_theHorizonConclaveSubclass);
	var UARnR_thePrimevalGuardianConclaveSubclass = newObj(UARnR_thePrimevalGuardianSubclass);
	UARnR_thePrimevalGuardianConclaveSubclass.subname = "Primeval Guardian Conclave";
	delete UARnR_thePrimevalGuardianConclaveSubclass.fullname;
	AddSubClass("rangerua", "primeval guardian conclave-ua", UARnR_thePrimevalGuardianConclaveSubclass);
};
AddSubClass("rogue", "scout-ua", {
	regExpSearch : /scout/i,
	subname : "Scout",
	source : ["UA:RnR", 2],
	features : {
		"subclassfeature3" : {
			name : "Skirmisher",
			source : ["UA:RnR", 3],
			minlevel : 3,
			description : desc([
				"As a reaction when a hostile ends its turn within 5 ft of me, I can move half my speed",
				"This movement does not provoke attacks of opportunity"
			]),
			action : [["reaction", ""]]
		},
		"subclassfeature3.1" : {
			name : "Survivalist",
			source : ["UA:RnR", 3],
			minlevel : 3,
			description : "\n   " + "I gain proficiency and expertise with the Nature and Survival skills",
			skills : [['Nature', 'full'], ['Survival', 'full']]
		},
		"subclassfeature9" : {
			name : "Superior Mobility",
			source : ["UA:RnR", 3],
			minlevel : 9,
			description : "\n   " + "I gain +10 ft to my walking speed (and swimming/climbing speed, if applicable)",
			speed : { 
				walk : { spd : "+10", enc : "+10" },
				climb : { spd : "_10", enc : "_10" },
				swim : { spd : "_10", enc : "_10" }
			}
		},
		"subclassfeature13" : {
			name : "Ambush Master",
			source : ["UA:RnR", 3],
			minlevel : 13,
			description : "\n   " + "As a bonus action in the first combat round with a surprised foe, I can lead the ambush" + "\n   " + "If I do so, allies who can see me gets +5 to their initiative roll, up to my initiative value" + "\n   " + "Also, each ally gains +10 ft to its speed that lasts until the end their next turn",
			action : ["bonus action", " (first round)"]
		},
		"subclassfeature17" : {
			name : "Sudden Strike",
			source : ["UA:RnR", 3],
			minlevel : 17,
			description : "\n   " + "With the Attack action, I can make one additional attack as a bonus action" + "\n   " + "This attack can benefit from my Sneak Attack even if I already used it this turn" + "\n   " + "However, I still can't use Sneak Attack on a single target more than once per turn",
			action : ["bonus action", " (with Attack action)"]
		}
	}
});
