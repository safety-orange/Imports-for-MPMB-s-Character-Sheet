/*
	-KEEP IN MIND-
	Note that you can add as many custom codes as you want, either by importing consecutive files or pasting the scripts into the dialogue.
	It is recommended to enter the code in a freshly downloaded or reset sheet before adding any other information so that there won't be any conflicts.
*/

var iFileName = "ua20211008_Travelers-of-the-Multiverse.js"; 
RequiredSheetVersion(13);

// This file adds the content from the Unearthed Arcana 2021: Travelers of the Multiverse article to MPMB's Character Record Sheet
SourceList["UA:TotM"] = {
	name : "Unearthed Arcana: Travelers of the Multiverse",
	abbreviation : "UA:TotM",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2021/dnd/downloads/UA2021_TravelersoftheMultiverse.pdf",
	date : "2021/10/08"
};

RaceList["plasmoid small-ua"] = { 

	regExpSearch : /^(?=.*small)(?=.*plasmoid).*$/i, 

	name : "Small Plasmoid", 

	sortname : "Plasmoid, Small", 

	source : ["UA:TotM", 3], 

	plural : "Small Plasmoids",

	size : 4, 

	speed : { 

		walk : { spd : 30, enc : 20 } 
	},

	languageProfs : ["Common", 1], 

	vision : [["Darkvision", 60]], 

	dmgres : ["Poison", "Acid"], 

	savetxt : { 
		adv_vs : ["poison", "grapple"] 
	},

	age : " reach adulthood in their late teens and live around 80 years",

	height : " range from 2 to over 5 feet tall (2'5\" + 2d8\")",

	weight : " weigh around 55 lb (40 + 2d8 \xD7 2d4 lb)", 

	heightMetric : " range from 0,8 to over 1,4 metres tall (85 + 5d8 cm)", 

	weightMetric : " weigh around 70 kg (40 + 5d8 \xD7 4d4 / 10 kg)", 

	scores : [0, 0, 0, 0, 0, 0],

	trait : "Small Plasmoid"+
	"\n \u2022 Ooze: My creature type is ooze, rather than humanoid."+
	"\n \u2022 Hold Breath: I can hold my breath for an hour."+
	"\n \u2022 Shap Self: If I am not incapacitated, I can reshape my body to give myself bodyparts or I can revert to a limbless blob (no action required). As a bonus action, I can extrude a pseudopod that is up to 6 inches wide and 10 feet long or reabsorb it into my body. I can use this pseudopod to manipulate an object."+
	"\n \u2022 Amorphous: I can squeeze through a space as narrow as 1 inch wide. As long as I am not carrying or wearing anything."
};