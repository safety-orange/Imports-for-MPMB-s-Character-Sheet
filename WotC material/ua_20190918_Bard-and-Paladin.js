var iFileName = "ua_20190918_Bard-and-Paladin.js";
RequiredSheetVersion("13.0.8");
// This file adds the content from the Unearthed Arcana: Bard and Paladin article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:BnP"] = {
	name : "Unearthed Arcana: Bard and Paladin",
	abbreviation : "UA:BnP",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2019/dnd/downloads/UA-EloquentHeroics.pdf",
	date : "2019/09/18"
};

// Add a subclasses for the bard and one for the paladin
AddSubClass("bard", "college of eloquence-ua", {
	regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*eloquence).*$/i,
	subname : "College of Eloquence",
	source : [["UA:BnP", 1]],
	features : {
		"subclassfeature3" : {
			name : "Universal Speech",
			source : [["UA:BnP", 1]],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can expend one bardic inspiration die to make me understood by all",
				"I roll the die, that many creatures I can see within 60 ft of me are affected for 10 min",
				"Those affected magically understand me and I gain adv. on Cha checks to influence them"
			]),
			additional : "1 bardic inspiration die",
			action : [["bonus action", ""]]
		},
		"subclassfeature3.1" : {
			name : "Soothing Words",
			source : [["UA:BnP", 1]],
			minlevel : 3,
			description : "\n   I can cast Calm Emotions without expending a spell slot",
			spellcastingBonus : [{
				name : "Soothing Words",
				spells : ["calm emotions"],
				selection : ["calm emotions"],
				firstCol : 'Sp'
			}],
			usages : "Charisma modifier per ",
			usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
			recovery : "long rest"
		},
		"subclassfeature6" : {
			name : "Undeniable Logic",
			source : [["UA:BnP", 1]],
			minlevel : 6,
			description : desc([
				"As a bonus action, I can expend one bardic inspiration die to encourage or befuddle",
				"One creature I can see within 60 ft that can hear me gets one of the following effects:",
				" \u2022 It heals HP equal to the die roll and has adv. on its next save before my next turn ends",
				" \u2022 It suffers psychic damage equal to the die roll and must make an Intelligence save",
				"   On a failed save, it also suffers disadv. on its next save before the end of my next turn"
			]),
			additional : "1 bardic inspiration die",
			action : [["bonus action", ""]]
		},
		"subclassfeature14" : {
			name : "Infectious Inspiration",
			source : [["UA:BnP", 2]],
			minlevel : 14,
			description : desc([
				"My bardic inspiration dice are not lost if the check, attack, or save it was added to fails",
				"As a reaction when the same thing happens but the roll succeeds, I can inspire another",
				"I give a creature within 60 ft that can hear me an inspiration die without expending any",
				"I can use this reaction a number of times per long rest equal to my Cha mod (min 1)"
			]),
			action : [["reaction", ""]],
			usages : "Charisma mod per ",
			usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
			recovery : "long rest"
		}
	}
});
AddSubClass("paladin", "oath of heroism-ua", {
	regExpSearch : /^(?=.*\bhero)((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper)))).*$/i,
	subname : "Oath of Heroism",
	source : [["UA:BnP", 2]],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Peerless Athlete",
			source : [["UA:BnP", 2]],
			minlevel : 3,
			description : "\n   As a bonus action, I gain adv. on Str (Athletics) and Dex (Acrobatics) checks for 10 min",
			action : [["bonus action", ""]],
			spellcastingExtra : ["expeditious retreat", "guiding bolt", "enhance ability", "enthrall", "haste", "protection from energy", "compulsion", "freedom of movement", "commune", "conjure volley"]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Legendary Strike",
			source : [["UA:BnP", 2]],
			minlevel : 3,
			description : "\n   As a bonus action, my weapon attacks score a critical hit on a roll of 19 or 20 for 1 min",
			action : [["bonus action", ""]]
		},
		"subclassfeature7" : {
			name : "Mighty Deed",
			source : [["UA:BnP", 2]],
			minlevel : 7,
			description : desc([
				"When I score a critical hit or reduce a target to 0 HP, I can bolster morale or demoralize",
				"Up to my Cha mod (min 1) of creatures I can see in 30 ft suffer the same chosen effect:",
				" \u2022 All creatures gain temp HP equal to 1d6 + my Charisma modifier (min 1 temp HP)",
				" \u2022 All creatures must make a Wis save or be frightened of me until my next turn starts"
			]),
			recovery : "Round",
			usages : 1
		},
		"subclassfeature15" : {
			name : "Glorious Defense",
			source : [["UA:BnP", 2]],
			minlevel : 15,
			description : desc([
				"As a reaction when a creature I can see hits me with an attack roll, I can gain bonus AC",
				"I add my Cha mod (min 1) to my AC for that attack, potentially causing it to miss me",
				"If it misses, I can make one weapon attack against the attacker as part of this reaction"
			]),
			action : [["reaction", ""]]
		},
		"subclassfeature20" : {
			name : "Living Myth",
			source : [["UA:BnP", 3]],
			minlevel : 20,
			description : desc([
				"As a bonus action, I can gain the following benefits for 1 minute:",
				" \u2022 I have advantage on all Charisma checks",
				" \u2022 Once on each of my turns when I miss with a weapon attack, I can cause it to hit",
				" \u2022 As a reaction when I fail a saving throw, I can choose to succeed instead"
			]),
			recovery : "long rest",
			usages : 1,
			action : [["bonus action", ""]]
		}
	}
});
