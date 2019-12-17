var iFileName = "pub_al_20190917_ALPG-v9.1.js";
RequiredSheetVersion(13);
// This file adds the winged aasimar/tiefling from the Adventurers League Player's Guide v9.1: Inglorious Redemption to MPMB's Character Record Sheet

// Define the source
SourceList["ALPGs9"] = {
	name : "AL Player's Guide v9.1: Inglorious Redemption",
	abbreviation : "ALPGs9",
	group : "Adventurers League",
	url : "https://www.dmsguild.com/product/208178",
	date : "2019/09/17"
};

/*
	Add this source to the Aasimar from VGtM and the Winged Tiefling variant from SCAG
	Also, add a winged variant to the three Aasimar subraces from VGtM
*/
[
	["fallen aasimar", false],
	["protector aasimar", false],
	["scourge aasimar", false],
	["tiefling-winged", true],
	["feral tiefling-winged", true]
].forEach(function (rac) {
	var rObj = rac[1] ? RaceSubList[rac[0]] : RaceList[rac[0]];
	if (!rObj) return;
	rObj.source = (isArray(rObj.source[0]) ? rObj.source : [rObj.source]).concat([["ALPGs9", 6], ["ALbackground", 0]]);
	if (rac[0].indexOf("aasimar") !== -1) {
		AddRacialVariant(rac[0], "winged", {
			regExpSearch : /wing/i,
			name : "Winged " + rObj.name,
			source : [["ALPGs9", 6], ["ALbackground", 0]],
			plural : "Winged " + rObj.plural,
			speed : {
				walk : { spd : 30, enc : 20 },
				fly : { spd : 30, enc : 0 }
			},
			trait : "Winged " + rObj.trait.replace(/\)(\r|\n|.)+/, ")\n\nHealing Hands:\n   As an action, once per long rest, I can touch to heal for my level in HP.\nWings:\n   Once I'm 5th level, I sprout feathered wings from my shoulder blades that give me a flying speed of 30 feet when I'm not wearing heavy armor."),
			features : {
				"healing hands" : {
					name : "Healing Hands",
					usages : 1,
					minlevel : 1,
					recovery : "long rest",
					additional : levels.map(function (n) { return n + " HP"; }),
					action : ["action", ""]
				}
			},
			abilitySave : "",
			spellcastingAbility : "",
			spellcastingBonus : ""
		});
	}
});
