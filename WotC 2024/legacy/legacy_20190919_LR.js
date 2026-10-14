var iFileName = "legacy_20190919_LR.js";
RequiredSheetVersion("24.1.3");
// This file adds the Locathah from the Locathah Rising adventure from Extra Life to MPMB's Character Record Sheet

SourceList["LR"] = {
	name: "Locathah Rising",
	abbreviation: "LR",
	group: "Legacy Extra Life",
	url: "https://www.dmsguild.com/product/289261/Locathah-Rising-5e",
	date: "2019/09/19",
	defaultExcluded: true,
};

RaceList["locathah"] = {
	source: [["LR", 24]],
	regExpSearch: /locathah/i,
	name: "Locathah",
	plural: "Locathah",
	size: 3,
	speed: {
		walk: { spd: 30, enc: 20 },
		swim: { spd: 30, enc: 20 },
	},
	languageProfs: ["Common", "Aquan"],
	savetxt: {
		adv_vs: ["Charmed", "Frightened", "Paralyzed", "Poisoned", "Stunned", "sleep"],
	},
	skills: ["athletics", "perception"],
	armorOptions: [{
		regExpSearch: /^(?=.*natural)(?=.*armou?r).*$/i,
		name: "Natural Armor",
		source: [["LR", 24]],
		ac: 12,
		selectNow: true,
	}],
	age: " mature to adulthood by the age of 10 but have been known to live up to 80 years",
	height: " stand between 5 and 6 feet tall",
	weight: " average about 150 pounds",
	heightMetric: " stand between 1,5 and 1,8 metres tall",
	weightMetric: " weigh around 70 kg",
	trait: [
		"**Locathah**",
		"##\u25C6 Limited Amphibiousness##. I can breathe air and water, but need to be submerged at least once every 4 hours to avoid suffocating.",
		"##\u25C6 Leviathan Will##. I have Advantage on saving throws against being Charmed, Frightened, Paralyzed, Poisoned, Stunned, or put to sleep.",
		"##\u25C6 Natural Armor##. I have an AC of 12 + Dexterity modifier + Shield.",
		"##\u25C6 Observant & Athletic##. I have proficiency in the Athletics and Perception skills.",
	],
};
