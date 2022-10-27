var iFileName = "ua_20180409_Order-Domain.js";
RequiredSheetVersion("13.0.8");
// This file adds the content from the Unearthed Arcana: Order Domain article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:OD"] = {
	name : "Unearthed Arcana: Order Domain",
	abbreviation : "UA:OD",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2018/dnd/downloads/UA_OrderDomain.pdf",
	date : "2018/04/09"
};

// New Subclass for Cleric: Order Domain
AddSubClass("cleric", "order domain-ua", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*order).*$/i,
	subname : "Order Domain",
	source : [["UA:OD", 1]],
	spellcastingExtra : ["command", "heroism", "enhance ability", "hold person", "mass healing word", "slow", "compulsion", "locate creature", "commune", "dominate person"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Proficiency",
			source : [["UA:OD", 1]],
			minlevel : 1,
			description : "\n   " + "I gain proficiency with heavy armor",
			armorProfs : [false, false, true, false]
		},
		"subclassfeature1.1" : {
			name : "Voice of Authority",
			source : [["UA:OD", 1]],
			minlevel : 1,
			description : desc([
				"Whenever I use a spell slot to cast a spell on an ally, it can use its reaction to attack",
				"The ally makes one weapon attack against a target of my choice that I can see",
				"If the spell targets multiple allies, I can choose which one can make the attack"
			])
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Order's Demand",
			source : [["UA:OD", 1]],
			minlevel : 2,
			description : desc([
				"As an action, all chosen targets in 30 ft that can see or hear me must make a Wis save",
				"If failed, it is charmed by me until the end of my next turn or it takes any damage",
				"Also, I can choose to have any of the charmed targets to fall prone on a failed save"
			]),
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Order's Dominion",
			source : [["UA:OD", 2]],
			minlevel : 6,
			description : desc([
				"When I cast an enchantment spell using a spell slot, I regain one expended spell slot",
				"The regained slot must be lower level than the one used, and no higher than 5th-level"
			])
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : [["UA:OD", 2]],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
			additional : levels.map(function (n) {
				if (n < 8) return "";
				return "+" + (n < 14 ? 1 : 2) + "d8 force damage";
			}),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isSpell) {
							fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 force damage';
						}
					},
					"Once per turn, I can have one of my weapon attacks that hit do extra force damage."
				]
			}
		},
		"subclassfeature17" : {
			name : "Order's Wrath",
			source : [["UA:OD", 2]],
			minlevel : 17,
			description : desc([
				"If I deal my Divine Strike damage to a creature, it takes extra damage from my allies",
				"The first time each turn that it is hit with a weapon attack, it takes 2d8 force damage"
			])
		}
	}
});
