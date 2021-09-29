var iFileName = "pub_20171011_One-Grung-Above.js";
RequiredSheetVersion("13.0.8");
// This file adds the Grung Race from the One Grung Above from Extra Life to MPMB's Character Record Sheet
// This file contains contributions by /u/GoldenSnurp
// Be aware that this race is not legal in adventurers league!

SourceList["OGA"] = {
	name : "One Grung Above",
	abbreviation : "OGA",
	group : "Extra Life",
	url : "https://www.dmsguild.com/product/223738",
	date : "2017/10/11",
	defaultExcluded : true
};

RaceList["grung"] = {
	regExpSearch : /grung/i,
	name : "Grung",
	source : [["OGA", 4]],
	plural : "Grung",
	size : 4,
	speed : {
		walk : { spd: 25, enc: 15 },
		climb : { spd: 25, enc: 15 }
	},
	languageProfs : ["Grung"],
	savetxt : { immune: ["poison"] },
	skills : ["Perception"],
	age : " reach adulthood at the age of one and live around 50 years",
	height : " range from 2 1/2 to 3 1/2 feet tall",
	weight : " weigh around 30 lb",
	scores : [0, 2, 1, 0, 0, 0],
	trait : "Grung (+2 Dexterity, +1 Constitution)\nPoisonous Skin: Creatures that touch me must make a DC 12 Con save or be poisoned for 1 min, repeating the save at the end of each of its turns. My piercing weapon attacks deal +2d4 poison damage if the target fails a DC 12 Con save.\nStanding Leap: Without a running start, I can long jump to 25 ft and high jump to 15 ft.\nWater Dependency: I can breathe air and water. I need to be immersed in water for 1 hour every day or suffer 1 level of exhaustion at the end of that day until I immerse for 1 hour."
};
