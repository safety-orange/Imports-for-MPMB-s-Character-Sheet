var iFileName = "legacy_20210316_CM.js";
RequiredSheetVersion("24.2.0");
// This file adds the content from the Candlekeep Mysteries adventure to MPMB's Character Record Sheet that has not (yet) been replaced in any rulebook for the 5.5e (2024) rules
// All content in this file contains contributions by Ratatoskr589

SourceList["CM"] = {
	name: "Candlekeep Mysteries",
	abbreviation: "CM",
	group: "Legacy Adventure Books",
	campaignSetting: "Forgotten Realms",
	url: "https://dnd.wizards.com/products/candlekeep-mysteries",
	date: "2021/03/16",
	defaultExcluded: true,
};

MagicItemsList["orcus figurine"] = {
	name: "Orcus Figurine",
	source: [["CM", 44]],
	type: "Wondrous Item",
	rarity: "",
	storyItemAL: true,
	attunement: false,
	description: "This Tiny figurine smells of decaying flesh, detectable out to 5 ft. Within 30 ft of it, Undead can't be turned and dead can't be brought back to life. If I hold it and pray for 1 hour, I have a 10% chance to call a wraith for 1 hour that attacks all non-Undead. Once summoned, the figurine can't do so again for 30 days.",
	descriptionFull: [
		"Carved from an ogre's petrified heart, the gray figurine depicts the Demon Prince of Undeath in ghastly detail, clutching his skull-topped wand in one hand and three severed heads by the hair in the other. The figurine smells like decaying flesh, and this scent is detectable out to a range of 5 feet.",
		"The figurine is a Tiny object with AC 17, 3 hit points, and immunity to all types of damage except radiant damage. A *detect evil and good* spell or similar magic reveals that the figurine has been desecrated. As long as it has at least 1 hit point, the figurine has the following magical properties:",
		" \u2022 Undead within 30 feet of the figurine can't be turned.",
		" \u2022 Dead creatures within 30 feet of the figurine can't be brought back to life.",
		" \u2022 A creature that holds the figurine while praying to Orcus for at least 1 hour has a 10 percent chance of summoning a smoky avatar of the demon lord. Once this avatar is summoned, it can't be summoned again for 30 days. Orcus's avatar has the statistics of a wraith except that it's chaotic evil. It attacks all non-undead creatures it encounters, and it disappears after 1 hour or when reduced to 0 hit points.",
	],
};
MagicItemsList["radiance (wand)"] = {
	name: "Radiance (wand)",
	source: [["CM", 87]],
	type: "Wand",
	rarity: "Rare", // inferred, as it is a wand of the war mage +1 (uncommon) with extra's
	attunement: true,
	description: "While I am holding this exquisite golden hand mirror, I gain a +1 bonus to spell attack rolls and I ignore Half Cover when making a spell attack. This arcane focus sheds Dim Light in a 5-ft radius while in Darkness. As a Bonus Action once per dawn, I can use Radiance to cast *Enhance Ability* on myself.",
	descriptionFull: [
		"While holding this wand, you gain a +1 bonus to spell attack rolls. In addition, you ignore half cover when making a spell attack. *Radiance* is in the form of an exquisite golden hand mirror.",
		"While surrounded by darkness, it sheds dim light in a 5-foot radius. A creature that is attuned to *Radiance* can use a bonus action while holding the mirror to cast the *enhance ability* spell, choosing itself and no other creature as the spell's target. Once this property of the wand is used, it can't be used again until the next dawn.",
	],
	prerequisite: "Requires attunement by a spellcaster",
	prereqeval: function (v) { return v.isSpellcaster; },
	spellcastingBonus: [{
		name: "Once per dawn, self only",
		spells: ["enhance ability"],
		selection: ["enhance ability"],
		firstCol: "onceday",
	}],
	spellChanges: {
		"enhance ability": {
			time: "Bns",
			range: "Self",
			description: "I gain Adv on checks with 1 ability score: Str, Dex, Int, Wis, or Cha",
			changes: "Using Radiance, I can cast *Enhance Ability* once per dawn as a Bonus Action instead of an action, but only on myself.",
		},
	},
	calcChanges: {
		spellCalc: [
			function (type, spellcasters, ability) {
				if (type == "attack") return 1;
			},
			"I gain a +1 bonus to spell attack rolls.",
		],
	},
};
MagicItemsList["serpent scale armor"] = {
	name: "Serpent Scale Armor",
	source: [["CM", 98]],
	type: "Armor (Scale Mail)",
	rarity: "Uncommon",
	attunement: false,
	description: "This suit of magical scale mail is made from shimmering scales. Unlike normal scale mail, it does not impose Disadvantage on my Dexterity (Stealth) checks and allows me to apply my full Dexterity modifier instead of the normal maximum of +2 for Medium armor.",
	descriptionFull: "This suit of magic armor is made from shimmering scales. While wearing it, you can apply your full Dexterity modifier (instead of a maximum of +2) when determining your Armor Class. In addition, this armor does not impose disadvantage on your Dexterity (Stealth) checks.",
	armorOptions: [{
		regExpSearch: /serpent scale/i,
		name: "Serpent Scale Armor",
		source: [["CM", 98]],
		type: "medium",
		ac: 14,
		weight: 45,
		dex: 100,
		selectNow: true,
	}],
};
MagicItemsList["serpent's fang"] = {
	name: "Serpent's Fang",
	source: [["CM", 98]],
	type: "Weapon (Longsword)",
	rarity: "Rare",
	attunement: false,
	description: "This single-edged magic sword is made from the scrimshawed fang of a giant serpent. Its hilt changes shape to adjust to the grasp of any creature that picks it up. The weapon deals an extra 1d10 Poison damage to any target it hits.",
	descriptionFull: "This single-edged magic sword is made from the scrimshawed fang of a giant serpent. Its hilt changes shape to adjust to the grasp of any creature that picks it up. The weapon deals an extra 1d10 poison damage to any target it hits.",
	weight: 2,
	weaponOptions: [{
		baseWeapon: "longsword",
		regExpSearch: /^(?=.*serpent)(?=.*fang).*$/i,
		name: "Serpent's Fang",
		source: [["CM", 98]],
		description: "Versatile (d10); +1d10 Poison damage",
		selectNow: true,
	}],
};
if (MagicItemsList["alchemy jug"]) {
	// Make the default into a choice (if not done so already)
	if (!MagicItemsList["alchemy jug"].choices) {
		if (!isArray(MagicItemsList["alchemy jug"].source[0])) { // Make sure the source is an array of sources
			MagicItemsList["alchemy jug"].source = [MagicItemsList["alchemy jug"].source];
		}
		MagicItemsList["alchemy jug"].allowDuplicates = true;
		AddFeatureChoice(MagicItemsList["alchemy jug"], false, "Regular (acid and poison)", {
			name: "Alchemy Jug \uFEFF",
			source: MagicItemsList["alchemy jug"].source.slice(0),
			description: MagicItemsList["alchemy jug"].description,
			descriptionLong: MagicItemsList["alchemy jug"].descriptionLong,
			descriptionFull: MagicItemsList["alchemy jug"].descriptionFull,
		}, true);
	};
	// Add CM to the source of the main Alchemy Jug object
	var CM_AlchemyJugHasCM = MagicItemsList["alchemy jug"].source.some(function (arr) {
		return arr[0] === "CM";
	});
	if (!CM_AlchemyJugHasCM) {
		MagicItemsList["alchemy jug"].source.push(["CM", 144]);
	}
	// Add the blue and orange jugs as choices
	AddFeatureChoice(MagicItemsList["alchemy jug"], false, "Blue (hot tea)", {
		name: "Alchemy Jug (Blue)",
		source: [["CM", 144]],
		description: MagicItemsList["alchemy jug"].description.replace(/acid \(.*basic poison.*?\)/i, "boiling hot tea (1 qt)"),
		descriptionLong: MagicItemsList["alchemy jug"].descriptionLong.map(function (s) { return s.replace(/acid \(.*basic poison.*?\)/i, "boiling hot tea (1 quart)"); }),
		descriptionFull: MagicItemsList["alchemy jug"].descriptionFull.slice(0, -1).concat([[
			["Liquid",      "", "Max. Amount"],
			["Beer",        "", "4 gallons"],
			["Boiling hot tea", "1 quart"],
			["Honey",       "", "1 gallon"],
			["Mayonnaise",      "2 gallons"],
			["Oil",         "", "1 quart"],
			["Vinegar",     "", "2 gallons"],
			["Water, fresh",    "8 gallons"],
			["Water, salt  ",   "12 gallons"],
			["Wine",        "", "1 gallon"],
		]]),
	});
	AddFeatureChoice(MagicItemsList["alchemy jug"], false, "Orange (soy sauce)", {
		name: "Alchemy Jug (Orange)",
		source: [["CM", 144]],
		description: MagicItemsList["alchemy jug"].description.replace(/acid \(.*basic poison.*?\)/i, "soy sauce (1 gal)"),
		descriptionLong: MagicItemsList["alchemy jug"].descriptionLong.map(function (s) { return s.replace(/acid \(.*basic poison.*?\)/i, "soy sauce (1 gallon)"); }),
		descriptionFull: MagicItemsList["alchemy jug"].descriptionFull.slice(0, -1).concat([[
			["Liquid",      "", "Max. Amount"],
			["Beer",        "", "4 gallons"],
			["Honey",       "", "1 gallon"],
			["Mayonnaise",      "2 gallons"],
			["Oil",         "", "1 quart"],
			["Soy sauce     ",  "1 gallon"],
			["Vinegar",     "", "2 gallons"],
			["Water, fresh",    "8 gallons"],
			["Water, salt  ",   "12 gallons"],
			["Wine",        "", "1 gallon"],
		]]),
	});
};
MagicItemsList["gloves of soul catching"] = {
	name: "Gloves of Soul Catching",
	source: [["CM", 169]],
	type: "Wondrous Item",
	rarity: "Legendary",
	notLegalAL: true,
	attunement: true,
	description: "While wearing these gloves, my Con increases to 20. After hitting with an Unarmed Strike with them on, I can deal +2d10 Force damage to the target and regain an equal amount of HP, or, instead of regaining HP, I can choose to gain Adv on one attack roll, ability check, or save I make before the end of my next turn.",
	descriptionFull: [
		"Your Constitution score is 20 while you wear these gloves. This property of the gloves has no effect on you if your Constitution is already 20 or higher.",
		"After making a successful unarmed strike while wearing these gloves, you can use the gloves to deal an extra 2d10 force damage to the target, and you regain a number of hit points equal to the force damage dealt. Alternatively, instead of regaining hit points in this way, you can choose to gain advantage on one attack roll, ability check, or saving throw you make before the end of your next turn.",
	],
	scoresOverride: [0, 0, 20, 0, 0, 0],
	weaponOptions: [{
		baseWeapon: "unarmed strike",
		regExpSearch: /^(?=.*gloves)(?=.*soul)(?=.*catching).*$/i,
		name: "Gloves of Soul Catching",
		source: [["CM", 169]],
		description: "+2d10 Force damage, heal for same amount or 1\xD7 Adv",
		selectNow: true,
	}],
};
MagicItemsList["watchful helm"] = {
	name: "Watchful Helm",
	source: [["CM", 183]],
	type: "Wondrous Item",
	rarity: "Very Rare",
	attunement: true,
	description: "While I wear this helm, I gain a +1 bonus to AC, remain aware of my surroundings even while asleep, and have Advantage on Wisdom (Perception) checks that rely on sight. As a Bonus Action once per dawn, I can use it to cast *See Invisibility*.",
	descriptionFull: [
		"While you wear this helm, you gain a +1 bonus to AC and remain aware of your surroundings even while you're asleep, and you have advantage on Wisdom (Perception) checks that rely on sight.",
		"As a bonus action, you can cast the *see invisibility* spell from the helm. Once this property of the helm is used, it can't be used again until the next dawn.",
	],
	weight: 1,
	extraAC: [{ name: "Watchful Helm", mod: 1, magic: true, text: "I gain a +1 bonus to AC while attuned." }],
	vision: [["Adv on Perception checks that rely on sight", 0]],
	spellcastingBonus: [{
		name: "Once per dawn",
		spells: ["see invisibility"],
		selection: ["see invisibility"],
		firstCol: "onceday",
	}],
	spellChanges: {
		"see invisibility": {
			time: "Bns",
			changes: "Using the Watchful Helm, I can cast *See Invisibility* once per dawn as a Bonus Action instead of an action.",
		},
	},
};
MagicItemsList["staff of fate"] = {
	name: "Staff of Fate",
	source: [["CM", 183]],
	type: "Staff",
	rarity: "Very Rare",
	attunement: true,
	description: "This +3 crystal quarterstaff has 6 charges. If I use its last charge, I roll a d20. On a 10+ it regains 1d6 charges, but on a 9 or less it becomes nonmagical. As a Bonus Action, I can expend 1 charge to give myself or a creature I can see a d4 that can be added to a check, save, attack, or damage roll before my next turn starts.",
	descriptionFull: [
		"This transparent crystal staff can be wielded as a magic quarterstaff that grants a +3 bonus to attack and damage rolls made with it.",
		"***Altered Outcome***. The staff has 6 charges. As a bonus action, you can expend 1 of the staff's charges to give yourself or one other creature that you can see a d4. The recipient can roll this d4 and add the number rolled to one ability check, attack roll, damage roll, or saving throw it makes before the start of your next turn. If this extra die is not used before then, it is lost.",
		"If you expend the staff's last charge, roll a d20. On a roll of 9 or lower, the staff becomes a nonmagical quarterstaff that breaks the first time it scores a hit and deals damage. On a roll of 10 or higher, the staff regains 1d6 of its expended charges.",
	],
	weight: 4,
	extraLimitedFeatures: [{
		name: "Staff of Fate (Alter Outcome)",
		usages: 6,
		recovery: "Special",
	}],
	action: [["bonus action", ""]],
	weaponOptions: [{
		baseWeapon: "quarterstaff",
		regExpSearch: /\bstaff of fate\b/i,
		name: "Staff of Fate",
		source: [["CM", 183]],
		modifiers: [3, 3],
		selectNow: true,
	}],
};
MagicItemsList["nether scroll of azumar"] = {
	name: "Nether Scroll of Azumar",
	source: [["CM", 210]],
	type: "Scroll",
	rarity: "Legendary",
	storyItemAL: true,
	choicesNotInMenu: true,
	description: "After 30 days of studying 8 h/day, I make a DC 25 Int (Arcana) check. If failed, I take 16d10 Psychic damage and start anew. On a success, I gain +2 Int to a max of 22, I gain Advantage on saves against spells and magical effects, and a **stone golem** appears within 60 ft that acts as ally. If I die, the golem turns to dust.",
	descriptionFull: [
		"Unlike most scrolls, a *Nether Scroll of Azumar* is not a consumable magic item. It takes 30 days of concentrated study\u2014at least 8 hours per day\u2014to attempt to understand this scroll. After completing this study, you must make a DC 25 Intelligence (Arcana) check. If this check fails, you take 16d10 psychic damage, and you can attempt the check again after another 30 days of concentrated study.",
		"When you succeed on the check, you gain the following benefits:",
		" \u2022 Your Intelligence score increases by 2, to a maximum of 22. Once you gain this benefit, you can't use this scroll to increase your Intelligence again.",
		" \u2022 You gain advantage on saving throws against spells and other magical effects.",
		"When you gain the scroll's benefits, a **stone golem** magically appears in an unoccupied space within 60 feet of you and acts as your ally. If you die, the golem turns to dust.",
	],
	scores: [0, 0, 0, 2, 0, 0],
	scoresMaximum: [0, 0, 0, 22, 0, 0],
	scoresStackable: true,
	eval: function () {
		var src = "Nether Scroll of Azumar";
		if (Who("Saving Throw advantages / disadvantages").indexOf(src) !== -1) return; // already exists
		var iResponse = app.alert({
			nIcon: 2, // Question
			nType: 2, // Yes/No
			nTitle: "Read Nether Scroll?",
			cMsg: toUni("Do you want to apply the benefits of reading the scroll?", "**") +
				"\n\nBecause the scroll gives a permanent effect after being used, the sheet doesn't simply apply this effect when the scroll is selected and remove it when the scroll is deselected. Instead, you get to decide.\nWhen selecting or removing the Nether Scroll of Azumar, you get this pop-up asking about the Advantage on Saves vs Magic and the Stone Golem, and you'll get another asking about the Intelligence increase." +
				'\n\nClick "Yes" to add Advantage on Saves vs Magic to the first page and a Stone Golem to a companion page.' +
				'\nClick "No" for nothing to change.',
		});
		if (iResponse == 4) { // Yes
			SetProf("savetxt", true, { adv_vs: ["magic"] }, src);
			processAddCompanions(true, src, [["Stone Golem"]]);
		}
	},
	removeeval: function () {
		var src = "Nether Scroll of Azumar";
		if (Who("Saving Throw advantages / disadvantages").indexOf(src) === -1) return; // doesn't exists
		var iResponse = app.alert({
			nIcon: 2, // Question
			nType: 2, // Yes/No
			nTitle: "Keep Nether Scroll Bonuses?",
			cMsg: toUni("Do you want to remove the benefits of reading the scroll?", "**") +
				"\n\nBecause the scroll gives a permanent effect after being used, the sheet doesn't simply apply this effect when the scroll is selected and remove it when the scroll is deselected. Instead, you get to decide.\nWhen selecting or removing the Nether Scroll of Azumar, you get this pop-up asking about the Advantage on Saves vs Magic and the Stone Golem, and you'll get another asking about the Intelligence increase." +
				'\n\nClick "Yes" for nothing to change.' +
				'\nClick "No" to remove Advantage on Saves vs Magic from the first page and remove the Stone Golem from a companion page.',
		});
		if (iResponse == 3) { // No
			SetProf("savetxt", false, { adv_vs: ["magic"] }, src);
			processAddCompanions(false, src, [["Stone Golem"]]);
		}
	},
};
