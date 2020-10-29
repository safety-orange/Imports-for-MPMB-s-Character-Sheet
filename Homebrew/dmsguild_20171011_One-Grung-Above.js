/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Race: Grung
	Effect:		This script adds the Grung race from "One Grung Above" by Christopher Lindsay on DMs Guild (https://www.dmsguild.com/product/223738)
				Please support this creator on DMs Guild: https://www.dmsguild.com/browse.php?x=0&y=0&author=Christopher%20Lindsay
	Code by:	/u/GoldenSnurp (edits by /u/safety-orange)
	Date:		2020-10-29 (sheet v13)
*/

var iFileName = "Grung [Christopher Lindsay's work, transcribed by /u/GoldenSnurp].js";
RequiredSheetVersion(13);

SourceList["CL:OGA"] = {
	name : "Christopher Lindsay's One Grung Above",
	abbreviation : "CL:OGA",
	group : "Dungeon Masters Guild",
	url : "https://www.dmsguild.com/product/223738",
	date : "2017/10/11"
};

RaceList["grung"] = {
	regExpSearch : /grung/i,
	name : "Grung",
	source : [["CL:OGA", 4]],
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
