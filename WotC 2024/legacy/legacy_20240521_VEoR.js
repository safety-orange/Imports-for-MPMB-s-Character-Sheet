var iFileName = "legacy_20240521_VEoR.js";
RequiredSheetVersion("24.1.3");
// This file adds the magic item from the Vecna: Eve of Ruin adventure to MPMB's Character Record Sheet that has not (yet) been replaced in any rulebook for the 5.5e (2024) rules

// Define the source
SourceList["VEoR"] = {
	name: "Vecna: Eve of Ruin",
	abbreviation: "VEoR",
	group: "Legacy Adventure Books",
	url: "https://dndstore.wizards.com/us/en/product/924703/vecna-eve-of-ruin-digital-plus-physical-bundle",
	date: "2024/05/21",
	defaultExcluded: true,
};

MagicItemsList["chime of exile"] = {
	name: "Chime of Exile",
	source: [["VEoR", 46]],
	type: "Wondrous Item",
	rarity: "Very Rare",
	description: "This silver chime is engraved with delicate magic sigils. As an action once per dawn, I can hold the chime and cast the *Banishment* spell (save DC 20). If the target of the spell has 50 Hit Points or fewer, it automatically fails its saving throw.",
	descriptionFull: "This silver chime is engraved with delicate magic sigils. While holding the chime, you can use an action to cast the *Banishment* spell (spell save DC 20). If the target of the spell has 50 hit points or fewer, it automatically fails its saving throw. Once the chime has been used to cast the spell, it can't be used this way again until the next dawn.",
	fixedDC: 20,
	spellcastingBonus: [{
		name: "Once per dawn",
		spells: ["banishment"],
		selection: ["banishment"],
		firstCol: "onceday",
	}],
};
