var iFileName = "not-reprinted_20201117_TCoE.js";
RequiredSheetVersion("24.0.5-beta");
// This file adds options from Tasha's Cauldron of Everything to MPMB's Character Record Sheet that have not been replaced with new options published specifically for the 2024 (5.5e) rules

// Define the source
SourceList.T = {
	name: "Tasha's Cauldron of Everything",
	abbreviation: "TCoE",
	abbreviationSpellsheet: "T",
	group: "Legacy Sources",
	url: "https://dnd.wizards.com/products/tashas-cauldron-everything",
	date: "2020/11/17",
	defaultExcluded: true,
};

AddSubClass("bard", "college of eloquence", {
	regExpSearch: /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*eloquence).*$/i,
	subname: "College of Eloquence",
	source: [["T", 29], ["MOT", 28]],
	features: {
		"subclassfeature3": {
			name: "Silver Tongue",
			source: [["T", 30], ["MOT", 28]],
			minlevel: 3,
			description: desc("When I make a Persuasion or Deception check, I can treat a roll of 9 or lower as a 10."),
		},
		"subclassfeature3.1": {
			name : "Unsettling Words",
			source : [["T", 30], ["MOT", 28]],
			minlevel : 3,
			description: desc("As a Bonus Action, I can expend and roll a Bardic Inspiration Die to have a creature I can see within 60 ft subtract the result from the next save it makes before my next turn starts."),
			action: [["bonus action", ""]],
		},
		"subclassfeature6": {
			name: "Unfailing Inspiration",
			source: [["T", 30], ["MOT", 28]],
			minlevel: 6,
			description: desc("When a creature adds my Bardic Inspiration Die to a roll but fails, they can keep the die."),
		},
		"subclassfeature6.1": {
			name: "Universal Speech",
			source: [["T", 30], ["MOT", 28]],
			minlevel: 6,
			description: desc([
				"As an Action, I can choose a number of creatures equal to my Charisma modifier (min 1). They can magically understand me, regardless of the language I speak, for 1 hour.",
				"I can do this once per Long Rest, or by expending a 1st-level or higher spell slot (SS 1+).",
			]),
			recovery: "long rest",
			usages: 1,
			altResource: "SS 1+",
			action: [["action", ""]],
		},
		"subclassfeature14": {
			name: "Infectious Inspiration",
			source: [["T", 30], ["MOT", 28]],
			minlevel: 14,
			description: desc("As a Reaction when a creature uses my inspiration die and succeeds, I can  give another creature within 60 ft that can hear me an inspiration die without expending any"),
			action: [["reaction", ""]],
			usages: "Charisma mod per ",
			usagescalc: "event.value = Math.max(1, What('Cha Mod'));",
			recovery: "long rest",
		},
	},
});