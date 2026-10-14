var iFileName = "legacy_20171011_One-Grung-Above.js";
RequiredSheetVersion("24.1.3");
// This file adds the Grung Race from the One Grung Above from Extra Life to MPMB's Character Record Sheet
// This file contains contributions by /u/GoldenSnurp
// Be aware that this race is not legal in adventurers league!

SourceList["OGA"] = {
	name: "One Grung Above",
	abbreviation: "OGA",
	group: "Legacy Extra Life",
	url: "https://www.dmsguild.com/product/223738/One-Grung-Above-5e",
	date: "2017/10/11",
	defaultExcluded: true,
};

RaceList["grung"] = {
	regExpSearch: /grung/i,
	name: "Grung",
	source: [["OGA", 4]],
	plural: "Grung",
	size: 4,
	speed: {
		walk: { spd: 25, enc: 15 },
		climb: { spd: 25, enc: 15 },
	},
	languageProfs: ["Grung"],
	savetxt: { immune: ["Poison"] },
	skills: ["Perception"],
	age: " reach adulthood at the age of one and live around 50 years",
	height: " range from 2 1/2 to 3 1/2 feet tall",
	weight: " weigh around 30 lb",
	trait: [
		"**Grung**",
		"##\u25C6 Poisonous Skin##. Creatures that touch me must make a DC 12 Con save or be Poisoned for 1 min, repeating the save at the end of each of its turns. My Piercing weapon attacks deal +2d4 Poison damage if the target fails a DC 12 Con save.",
		"##\u25C6 Standing Leap##. Without a running start, I can Long Jump 25 ft and High Jump 15 ft.",
		"##\u25C6 Water Dependency##. I can breathe air and water. At the end of a day on which I didn't immerse myself in water for 1 hour, I suffer 1 level of Exhaustion until I immerse " + (typePF ? "myself in water for 1 hour." : "for 1 h."),
	],
};
