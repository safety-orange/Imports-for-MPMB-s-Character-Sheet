var iFileName = "pub_20190919_LR.js";
RequiredSheetVersion("13.0.8");
// This file adds the Locathah from the Locathah Rising adventure from Extra Life to MPMB's Character Record Sheet

SourceList.LR = {
	name : "Locathah Rising",
	abbreviation : "LR",
	group : "Extra Life",
	url : "https://dnd.wizards.com/products/tabletop-games/digital-only-rpg-products/locathah-rising",
	date : "2019/09/19",
	defaultExcluded : true
};

RaceList.locathah = {
	source : [["LR", 24]],
	regExpSearch : /locathah/i,
	name : "Locathah",
	plural : "Locathah",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : 30, enc : 20 },
	},
	languageProfs : ["Common", "Aquan"],
	savetxt : {
		adv_vs : ["charmed", "frightened", "paralyzed", "poisoned", "stunned", "sleep"],
	},
	skills : ["athletics", "perception"],
	scores : [2, 1, 0, 0, 0, 0],
	armorOptions : [{
		regExpSearch : /^(?=.*natural)(?=.*armou?r).*$/i,
		name : "Natural Armor",
		source : [["LR", 24]],
		ac : 12
	}],
	armorAdd : "Natural Armor",
	age : " mature to adulthood by the age of 10 but have been known to live up to 80 years",
	height : " stand between 5 and 6 feet tall",
	weight : " average about 150 pounds",
	heightMetric : " stand between 1,5 and 1,8 metres tall",
	weightMetric : " weigh around 70 kg",
	trait : "Locathah (+2 Strength, +1 Dexterity)\n   Limited Amphibiousness: I can breathe air and water, but need to be submerged at least once every 4 hours to avoid suffocating.\n   Leviathan Will: I have advantage on saving throws against being charmed, frightened, paralyzed, poisoned, stunned, or put to sleep.\n   Natural Armor: I have an AC of 12 + Dexterity modifier + shield.\n   Observant & Athletic: I have proficiency in the Athletics and Perception skills."
};
