var iFileName = "legacy_20191022_ToD.js";
RequiredSheetVersion("24.1.3");
// This file adds the background features and magic items from the Tyranny of Dragons adventure book (reprint of Hoard of the Dragon Queen and Rise of Tiamat) to MPMB's Character Record Sheet that has not (yet) been replaced in any rulebook for the 5.5e (2024) rules

// Define the source
SourceList["ToD"] = {
	name: "Tyranny of Dragons [background features, items]",
	abbreviation: "ToD",
	group: "Legacy Adventure Books",
	campaignSetting: "Forgotten Realms",
	url: "https://marketplace.dndbeyond.com/adventures/tyranny-of-dragons?pid=SRC-00102",
	date: "2019/10/22",
	defaultExcluded: true,
}

// Background features
BackgroundFeatureList["cult of the dragon infiltrator"] = {
	description: "I have infiltrated the ranks of the Cult of the Dragon. Having spied on the organization for quite some time, I am familiar with its inner workings and customs. I have a second identity as an initiate of the cult, enough of a facade to blend in as a simple grunt or servant.",
	source: [["ToD", 176], ["HotDQ", 87]],
};
BackgroundFeatureList["dragon scholar"] = {
	description: "I have studied dragons and their lore for many years. I can automatically identify locations built or used by dragons, and I can identify dragon eggs and scales by sight. If I fail an Intelligence check to recall lore relating to dragons, I know someone or some book that I can consult for the answer unless the DM rules that the lore is unknown.",
	source: [["ToD", 176], ["HotDQ", 87]],
};

// Magic Items
// The magic cauldron on page 79 is omitted as its only magic is that it functions as the material component for the Augury spell. Not something an adventurer is likely to use, with it being 50 lb.
MagicItemsList["dragongleam"] = {
	name: "Dragongleam",
	source: [["ToD", 84], ["HotDQ", 69]],
	type: "Weapon (Spear)",
	rarity: "Rare",
	description: "This rusty spear is engraved with draconic runes on its crossguard which read \"Tiamat's Eyes Shine\". The spear has 10 charges. As an action while holding it, I can say this command and expend 1 charge to cast *Daylight*. The spear loses its magic once all charges are expended.",
	descriptionFull: "This rusty spear is engraved with draconic runes on its crossguard which read \"Tiamat's Eyes Shine\". The spear has 10 charges. While holding it, you can say the command and expend 1 charge as an action to cast the *Daylight* spell. The spear loses this property if it has no charges left.",
	weight: 3,
	usages: 10,
	recovery: "\u2013",
	spellFirstColTitle: "Ch",
	spellcastingBonus: [{
		name: "1 charge",
		spells: ["daylight"],
		selection: ["daylight"],
		firstCol: 1,
	}],
	spellChanges: {
		"daylight": {
			components: "V,M\u0192",
		},
	},
	weaponOptions: [{
		baseWeapon: "spear",
		regExpSearch: /dragongleam/i,
		name: "Dragongleam",
		source: [["ToD", 84], ["HotDQ", 69]],
		selectNow: true,
	}],
}
MagicItemsList["tankard of plenty"] = {
	name: "Tankard of Plenty",
	source: [["ToD", 178], ["HotDQ", 74]],
	type: "Wondrous Item",
	rarity: "Uncommon",
	description: 'This golden stein is decorated with dancing dwarves and grain patterns. Speaking the command word "Illefarn" while grasping the handle fills the tankard with three pints of rich dwarven ale. This power can be used up to three times per day.',
	descriptionFull: 'This golden stein is decorated with dancing dwarves and grain patterns. Speaking the command word ("Illefarn") while grasping the handle fills the tankard with three pints of rich dwarven ale. This power can be used up to three times per day.',
	usages: 3,
	recovery: "Day",
}
var HotDQ_DragonMask = [
	"***Damage Absorption***. You have resistance against DTYPE damage. If you already have resistance to DTYPE damage from another source, you instead have immunity to DTYPE damage. If you already have immunity to DTYPE damage from another source, whenever you are subjected to DTYPE damage, you take none of that damage and regain a number of hit points equal to half the damage dealt of that type.",
	"***Draconic Majesty***. While you are wearing no armor, you can add your Charisma bonus to your Armor Class.",
	"***Dragon Breath***. If you have a breath weapon that requires rest to recharge, it gains a recharge of 6.",
	"***Dragon Sight***. You gain darkvision out to 60 feet, or to an additional 60 feet if you already have that sense. Once per day, you can gain blindsight out to 30 feet for 5 minutes.",
	"***Dragon Tongue***. You can speak and understand Draconic. You also have advantage on any Charisma check you make against DCOLOUR dragons.",
	"***Legendary Resistance (1/Day)***. If you fail a saving throw, you can choose to succeed instead.",
];
MagicItemsList["dragon mask"] = {
	name: "Dragon Mask",
	source: [["ToD", 178], ["HotDQ", 94]],
	type: "Wondrous Item",
	rarity: "Legendary",
	storyItemAL: true,
	description: "This mask reshapes to fit my head. It grants me the ability to absorb associated damage type, Darkvision 60 ft, Blindsight 30 ft (1/day), Legendary Resistance (1/day), Adv on Cha checks vs a dragon type, lets me know Draconic, and lets me add my Cha mod to AC while not wearing armor, see Notes page.",
	descriptionFull: [
		"Each *dragon mask* is a legendary wondrous item that reshapes to fit the face and head of a wearer attuned to it. While you are wearing any *dragon mask* and attuned to it, you gain the following benefits.",
		"***Damage Absorption***. You have resistance against the mask's damage type. If you already have resistance to that damage type from another source, you instead have immunity to that damage type. If you already have immunity to that damage type from another source, whenever you are subjected to damage of that type, you take none of that damage and regain a number of hit points equal to half the damage dealt of that type.",
	].concat(HotDQ_DragonMask.slice(1).map(function (s) { return s.replace("DCOLOUR dragons", "dragons that share the mask's color"); })),
	attunement: true,
	languageProfs: ["Draconic"],
	vision: [["Darkvision", "fixed 60"], ["Darkvision", "+60"]],
	usages: 1,
	recovery: "Day",
	additional: "Legendary Resistance",
	extraLimitedFeatures: [{
		name: "Dragon Mask (Blindsight 30 ft, 5 min)",
		usages: 1,
		recovery: "Day",
	}],
	extraAC: [{
		mod: "Cha",
		magic: true,
		text: "I add my Charisma modifier to AC while I'm not wearing armor.",
		stopeval: function (v) { return v.wearingArmor; },
	}],
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (v.theWea.dbBreathWeapon || /^(?=.*breath)(?=.*weapon).*$/i.test(v.theWea.name)) {
					fields.Description = fields.Description.replace(/(Us(e|able)( only)? )?(once|Prof(iciency)? B(onus)?) per (short|long) rest/i, "Recharge 6");
				};
			},
		],
	},
	incrementDamageRes: function (dType, dRes) {
		SetProf(
			"savetxt",
			CurrentProfs.resistance[dRes] && CurrentProfs.resistance[dRes].src.length > 1,
			{ immune: [dRes] },
			!dType ? "Mask of the Dragon Queen (magic item)" : dType + " Dragon Mask (magic item)"
		);
	},
	choices: ["Black", "Blue", "Green", "Red", "White", "Mask of the Dragon Queen"],
	choicesNotInMenu: true,
	"black": {
		name: "Black Dragon Mask",
		source: [["ToD", 179], ["HotDQ", 94]],
		description: "This mask reshapes to fit my head. It grants me the ability to absorb Acid damage, Darkvision 60 ft, Blindsight 30 ft (1/day), Legendary Resistance (1/day), Adv on Cha checks vs black dragons, lets me know Draconic, and lets me add my Cha mod to AC while not wearing armor, and more, see Notes page.",
		descriptionLong: "This horned mask of glossy ebony has horns and a skull-like mien. The mask reshapes to fit my face and head when I attune to it. It grants me the ability to absorb Acid damage, depending on how resistant I am to it already. Additionally, it gives me Darkvision 60 ft (or +60 ft) and Blindsight 30 ft once per day for 5 min, lets me know Draconic, Advantage on Charisma checks against black dragons, lets me add my Charisma modifier to AC while I'm not wearing armor, and water breathing. Once per day when I fail a saving throw, I can use the mask to succeed on it instead. See Notes page.",
		descriptionFull: [
			"This horned mask of glossy ebony has horns and a skull-like mien. The mask reshapes to fit a wearer attuned to it. While you are wearing the mask and attuned to it, you can access the following properties.",
		].concat(HotDQ_DragonMask.map(function (s) { return s.replace(/DTYPE/g, "acid").replace("DCOLOUR", "black"); }), [
			"***Water Breathing***. You can breathe underwater.",
		]),
		dmgres: ["Acid"],
		changeeval: function () { MagicItemsList["dragon mask"].incrementDamageRes("Black", "acid"); },
		toNotesPage: [{
			name: "Black Dragon Mask",
			useDescriptionFull: true,
		}],
	},
	/*
		Although the original adventure book only included the Black Dragon Mask,
		the other colours were added in the Rise of Tiamat Online Supplement.
		https://media.wizards.com/2014/downloads/dnd/RiseTiamatSupplementv0.2_Printer.pdf
		They were also added in the reprint that combined both books, Tyranny of Dragons.
	*/
	"blue": {
		name: "Blue Dragon Mask",
		source: [["ToD", 179], ["RoTOS", 4]],
		description: "This mask reshapes to fit my head. It grants me the ability to absorb Lightning damage, Darkvision 60 ft, Blindsight 30 ft (1/day), Legendary Resistance (1/day), Adv on Cha checks vs blue dragons, lets me know Draconic, and lets me add my Cha mod to AC while not wearing armor, and more, see Notes page.",
		descriptionLong: "This mask of glossy azure has spikes around its edges and a ridged horn in its center. The mask reshapes to fit my face and head when I attune to it. It grants me the ability to absorb Lightning damage, depending on how resistant I am to it already. Additionally, it gives me Darkvision 60 ft (or +60 ft) and Blindsight 30 ft once per day for 5 min, lets me know Draconic, Advantage on Charisma checks against blue dragons, lets me add my Charisma modifier to AC while I'm not wearing armor, and Lingering Shock. Once per day when I fail a saving throw, I can use the mask to succeed on it instead. See Notes page.",
		descriptionFull: [
			"This mask of glossy azure has spikes around its edges and a ridged horn in its center. The mask reshapes to fit a wearer attuned to it. While you are wearing the mask and attuned to it, you can access the following properties.",
		].concat(HotDQ_DragonMask.map(function (s) { return s.replace(/DTYPE/g, "lightning").replace("DCOLOUR", "blue"); }), [
			"***Lingering Shock***. If you deal lightning damage to a creature, it can't take reactions until its next turn.",
		]),
		dmgres: ["Lightning"],
		changeeval: function () { MagicItemsList["dragon mask"].incrementDamageRes("Blue", "lightning"); },
		toNotesPage: [{
			name: "Blue Dragon Mask",
			useDescriptionFull: true,
		}],
	},
	"green": {
		name: "Green Dragon Mask",
		source: [["ToD", 179], ["RoTOS", 4]],
		description: "This mask reshapes to fit my head. It grants me the ability to absorb Poison damage, Darkvision 60 ft, Blindsight 30 ft (1/day), Legendary Resistance (1/day), Adv on Cha checks vs green dragons, lets me know Draconic, and lets me add my Cha mod to AC while not wearing armor, and more, see Notes page.",
		descriptionLong: "This mottled green mask is surmounted by a frilled crest and has spikes along its jaw. The mask reshapes to fit my face and head when I attune to it. It grants me the ability to absorb Poison damage, depending on how resistant I am to it already. Additionally, it gives me Darkvision 60 ft (or +60 ft) and Blindsight 30 ft once per day for 5 min, lets me know Draconic, Advantage on Charisma checks against green dragons, lets me add my Charisma modifier to AC while I'm not wearing armor, and water breathing. Once per day when I fail a saving throw, I can use the mask to succeed on it instead. See Notes page.",
		descriptionFull: [
			"This mottled green mask is surmounted by a frilled crest and has leathery spiked plates along its jaw. The mask reshapes to fit a wearer attuned to it. While you are wearing the mask and attuned to it, you can access the following properties.",
		].concat(HotDQ_DragonMask.map(function (s) { return s.replace(/DTYPE/g, "poison").replace("DCOLOUR", "green"); }), [
			"***Water Breathing***. You can breathe underwater.",
		]),
		dmgres: ["Poison"],
		changeeval: function () { MagicItemsList["dragon mask"].incrementDamageRes("Green", "poison"); },
		toNotesPage: [{
			name: "Green Dragon Mask",
			useDescriptionFull: true,
		}],
	},
	"red": {
		name: "Red Dragon Mask",
		source: [["ToD", 179], ["RoTOS", 4]],
		description: "This mask reshapes to fit my head. It grants me the ability to absorb Fire damage, Darkvision 60 ft, Blindsight 30 ft (1/day), Legendary Resistance (1/day), Adv on Cha checks vs red dragons, lets me know Draconic, and lets me add my Cha mod to AC while not wearing armor, and more, see Notes page.",
		descriptionLong: "This mask of glossy crimson has swept-back horns and spiked cheek ridges. The mask reshapes to fit my face and head when I attune to it. It grants me the ability to absorb Fire damage, depending on how resistant I am to it already. Additionally, it gives me Darkvision 60 ft (or +60 ft) and Blindsight 30 ft once per day for 5 min, lets me know Draconic, Advantage on Charisma checks against red dragons, lets me add my Charisma modifier to AC while I'm not wearing armor, and Dragon Fire. Once per day when I fail a saving throw, I can use the mask to succeed on it instead. See Notes page.",
		descriptionFull: [
			"This mask of glossy crimson has swept-back horns and spiked cheek ridges. The mask reshapes to fit a wearer attuned to it. While you are wearing the mask and attuned to it, you can access the following properties.",
		].concat(HotDQ_DragonMask.map(function (s) { return s.replace(/DTYPE/g, "fire").replace("DCOLOUR", "red"); }), [
			"***Dragon Fire***. If you deal fire damage to a creature or flammable object, it starts burning. At the start of each of its turns, a creature burning in this way takes 1d6 fire damage. A creature that can reach the burning target can use an action to extinguish the fire.",
		]),
		dmgres: ["Fire"],
		changeeval: function () { MagicItemsList["dragon mask"].incrementDamageRes("red", "fire"); },
		toNotesPage: [{
			name: "Red Dragon Mask",
			useDescriptionFull: true,
		}],
	},
	"white": {
		name: "White Dragon Mask",
		source: [["ToD", 179], ["RoTOS", 4]],
		description: "This mask reshapes to fit my head. It grants me the ability to absorb Cold damage, Darkvision 60 ft, Blindsight 30 ft (1/day), Legendary Resistance (1/day), Adv on Cha checks vs white dragons, lets me know Draconic, and lets me add my Cha mod to AC while not wearing armor, and more, see Notes page.",
		descriptionLong: "This gleaming mask is white with highlights of pale blue and is topped by a spined crest. The mask reshapes to fit my face and head when I attune to it. It grants me the ability to absorb Cold damage, depending on how resistant I am to it already. Additionally, it gives me Darkvision 60 ft (or +60 ft) and Blindsight 30 ft once per day for 5 min, lets me know Draconic, Advantage on Charisma checks against white dragons, lets me add my Charisma modifier to AC while I'm not wearing armor, and Winter's Fury. Once per day when I fail a saving throw, I can use the mask to succeed on it instead. See Notes page.",
		descriptionFull: [
			"This gleaming mask is white with highlights of pale blue and is topped by a spined crest. The mask reshapes to fit a wearer attuned to it. While you are wearing the mask and attuned to it, you can access the following properties.",
		].concat(HotDQ_DragonMask.map(function (s) { return s.replace(/DTYPE/g, "cold").replace("DCOLOUR", "white"); }), [
			"***Winter's Fury***. While your current hit points are equal to or less than half your hit point maximum, you deal an extra 1d8 cold damage with your melee attacks.",
		]),
		dmgres: ["Cold"],
		changeeval: function () { MagicItemsList["dragon mask"].incrementDamageRes("white", "cold"); },
		toNotesPage: [{
			name: "White Dragon Mask",
			useDescriptionFull: true,
		}],
	},
	"mask of the dragon queen": {
		name: "Mask of the Dragon Queen",
		rarity: "Artifact",
		source: [["ToD", 179], ["RoT", 94]],
		description: "This mask reshapes to fit my head. It lets me absorb Acid, Cold, Fire, Lightning, and Poison damage, Darkvision 60 ft, Blindsight 30 ft (1/day), Legendary Resistance (5/day), Adv on Cha checks vs Dragons, lets me know Draconic, and lets me add my Cha mod to AC while not wearing armor, and more, see Notes page.",
		descriptionLong: "This mask gives me a draconic visage and covers my face, neck, and shoulders. The mask reshapes to fit my face and head when I attune to it. It grants me the ability to absorb Acid, Cold, Fire, Lightning, and Poison damage, depending on how resistant I am already. Additionally, it gives me Darkvision 60 ft (or +60 ft) and Blindsight 30 ft once per day for 5 min, lets me know Draconic, Advantage on Charisma checks against Dragons, lets me add my Charisma modifier to AC while not wearing armor, and more. 5 times per day when I fail a saving throw, I can use the mask to succeed on it instead. See Notes page.",
		descriptionFull: [
			"When two or more of the dragon masks are assembled they magically transform into the *Mask of the Dragon Queen*. Each mask shrinks to become the modeled head of a chromatic dragon, appearing to roar its devotion to Tiamat where all the masks brought together are arranged crown-like on the wearer's head. Below the five masks, a new mask shapes itself, granting the wearer a draconic visage that covers the face, neck, and shoulders. The mask reshapes to fit a wearer attuned to it. While you are wearing the mask and attuned to it, you can access the following properties.",
			"***Damage Absorption***. You have resistance against acid, cold, fire, lightning, and poison damage. If you already have resistance to a damage type from another source, you instead have immunity to that damage type. If you already have immunity to a damage type from another source, whenever you are subjected to that damage type, you take none of that damage and regain a number of hit points equal to half the damage dealt of that type.",
		].concat(HotDQ_DragonMask.slice(1).map(function (s) { return s.replace("DCOLOUR ", "").replace("(1/Day)", "(5/Day)"); }), [
			"While you are attuned to and wear this mask, you can have any of the properties from any one colored mask.",
			" \u2022 **Water Breathing (black and green)**. You can breathe underwater.",
			" \u2022 **Lingering Shock (blue)**. If you deal lightning damage to a creature, it can't take reactions until its next turn.",
			" \u2022 **Dragon Fire (red)**. If you deal fire damage to a creature or flammable object, it starts burning. At the start of each of its turns, a creature burning in this way takes 1d6 fire damage. A creature that can reach the burning target can use an action to extinguish the fire.",
			" \u2022 **Winter's Fury (white)**. While your current hit points are equal to or less than half your hit point maximum, you deal an extra 1d8 cold damage with your melee attacks.",
		]),
		dmgres: ["Acid", "Cold", "Fire", "Lightning", "Poison"],
		changeeval: function () {
			MagicItemsList["dragon mask"].incrementDamageRes("", "acid");
			MagicItemsList["dragon mask"].incrementDamageRes("", "cold");
			MagicItemsList["dragon mask"].incrementDamageRes("", "fire");
			MagicItemsList["dragon mask"].incrementDamageRes("", "lightning");
			MagicItemsList["dragon mask"].incrementDamageRes("", "poison");
		},
		toNotesPage: [{
			name: "Mask of the Dragon Queen",
			useDescriptionFull: true,
		}],
		usages: 5,
		recovery: "Day",
		additional: "Legendary Resistance",
	},
}
MagicItemsList["hazirawn"] = {
	name: "Hazirawn",
	source: [["ToD", 178], ["HotDQ", 94]],
	type: "Weapon (Greatsword)",
	rarity: "Legendary",
	storyItemAL: true,
	description: "This sentient, neutral evil, greatsword's functions depend on whether you are attuned to it or not.",
	descriptionFull: [
		"A sentient (neutral evil) greatsword, *Hazirawn* is capable of speech in Common and Netherese. Even if you aren't attuned to the sword, you gain a +1 bonus on attack and damage rolls made with this weapon and you deal an extra 1d6 necrotic damage when you hit with the weapon.",
		"***Increased Potency***. While you are attuned to this weapon, its bonus on attack and damage rolls increases to +2, and a hit deals an extra 2d6 necrotic damage (instead of 1d6).",
		"***Spells***. *Hazirawn* has 4 charges to cast spells. As long as the sword is attuned to you and you are holding it in your hand, you can cast *Detect Magic* (1 charge), *Detect Evil and Good* (1 charge), or *Detect Thoughts* (2 charges). Each night at midnight, *Hazirawn* regains 1d4 expended charges.",
		"***Wounding***. While you are attuned to the weapon, any creature that you hit with *Hazirawn* can't regain hit points for 1 minute. The target can make a DC 15 Constitution saving throw at the end of each of its turns, ending this effect early on a success.",
	],
	weight: 6,
	choices: ["not attuned", "attuned"],
	"not attuned": {
		name: "Hazirawn \uFEFF",
		description: "A sentient (neutral evil) greatsword, Hazirawn is capable of speech in Common and Netherese. While I'm not attuned to the sword, I gain a +1 bonus on attack and damage rolls made with it. It also deals an extra 1d6 Necrotic damage on attacks made with the sword.",
		weaponOptions: [{
			baseWeapon: "greatsword",
			regExpSearch: /hazirawn/i,
			name: "Hazirawn",
			source: [["ToD", 178], ["HotDQ", 94]],
			description: "Heavy, Two-Handed; +1d6 Necrotic damage",
			modifiers: [1, 1],
			selectNow: true,
		}],
	},
	"attuned": {
		name: "Hazirawn \uFEFF\uFEFF",
		attunement: true,
		description: "This sentient, neutral evil, greatsword adds +2 to damage and to hit rolls, deals +2d6 Necrotic damage, and those hit with it can't regain HP for 1 min, but can make a DC 15 Con save at the end of each turn to stop this effect. It has 4 charges to cast spells, regaining 1d4 at midnight. It speaks Common and Netherese.",
		extraLimitedFeatures: [{
			name: "Hazirawn (regains 1d4)",
			usages: 4,
			recovery: "Midnight",
		}],
		weaponOptions: [{
			baseWeapon: "greatsword",
			regExpSearch: /hazirawn/i,
			name: "Hazirawn",
			source: [["ToD", 178], ["HotDQ", 94]],
			description: "Heavy, Two-Handed; +2d6 Necrotic damage; Wounding (can't regain HP for 1 min, DC 15 Con save to stop)",
			modifiers: [2, 2],
			selectNow: true,
		}],
		spellcastingBonus: [{
			name: "1 charge",
			spells: ["detect evil and good", "detect magic"],
			selection: ["detect evil and good", "detect magic"],
			firstCol: 1,
			times: 2,
		}, {
			name: "2 charges",
			spells: ["detect thoughts"],
			selection: ["detect thoughts"],
			firstCol: 2,
		}],
		fixedDC: 15, // assumed from the fact that its Wounding property has DC 15
		spellFirstColTitle: "Ch",
	},
}
MagicItemsList["insignia of claws"] = {
	name: "Insignia of Claws",
	source: [["ToD", 178], ["HotDQ", 94]],
	type: "Wondrous Item",
	rarity: "Uncommon",
	description: "The jewels in the insignia flare with purple light when I enter combat, empowering my fists. While wearing the insignia, I gain a +1 bonus to the attack rolls and the damage rolls of my Unarmed Strikes and natural weapons. Such attacks are considered to be magical.",
	descriptionFull: [
		"The jewels in the insignia of the Cult of the Dragon flare with purple light when you enter combat, empowering your natural fists or natural weapons.",
		"While wearing the insignia you gain a +1 bonus to the attack rolls and the damage rolls you make with unarmed strikes and natural weapons. Such attacks are considered to be magical.",
	],
	calcChanges: {
		atkCalc: [
			function (fields, v, output) {
				if (v.baseWeaponName == "unarmed strike") {
					output.magic += 1;
				}
			},
			"My Unarmed Strikes gain a +1 bonus to their attack and damage rolls, and count as magical.",
		],
		wildshapeCallback: [
			function (prefix, fieldNo, oWildshape, sCrea) {
				oWildshape.attacks.forEach(function (atk) {
					if (!atk.modifiers) {
						atk.modifiers = [1, 1];
					} else {
						atk.modifiers = atk.modifiers.map(function (n, idx) {
							if (idx > 1) return n;
							if (!n) return 1;
							if (!isNaN(n)) return Number(n) + 1;
							return n + "+" + 1;
						});
					}
				});
			},
			"I gain a +1 bonus to attack and damage rolls made with natural weapons, which include those in a wild shape.",
		],
	},
}
MagicItemsList["wand of winter"] = {
	name: "Wand of Winter",
	source: [["ToD", 178], ["HotDQ", 94]],
	type: "Wand",
	rarity: "Rare",
	attunement: true,
	description: "This wand looks and feels like an icicle and has 7 charges, regaining 1d6+1 expended charges at dawn. If I use its last charge, roll a d20. On a 20, it melts away. I can use its charges to cast spells with DC 15/+5 to hit: *Ray of Frost* (0 charges: 1d8, 1 charge: 2d8), *Sleet Storm* (3 charges), or *Ice Storm* (4 charges).",
	descriptionFull: [
		"This wand looks and feels like an icicle. You must be attuned to the wand to use it.",
		"The wand has 7 charges, which are used to fuel the spells within it. With the wand in hand, you can use your action to cast one of the following spells from the wand, even if you are incapable of casting spells: *Ray of Frost* (no charges, or 1 charge to cast at 5th level; +5 to hit with ranged spell attack), *Sleet Storm* (3 charges; spell save DC 15), or *Ice Storm* (4 charges; spell save DC 15). No components are required. The wand regains 1d6+1 expended charges each day at dawn. If you expend the wand's last charge, roll a d20. On a 20, the wand melts away, forever destroyed.",
	],
	weight: 1,
	usages: 7,
	recovery: "dawn",
	additional: "regains 1d6+1",
	fixedDC: 15,
	fixedSpAttack: 5,
	spellFirstColTitle: "Ch",
	spellcastingBonus: [{
		name: "1 charge",
		spells: ["ray of frost"],
		selection: ["ray of frost"],
		firstCol: 1,
	}, {
		name: "0 charges (at will)",
		spells: ["ray of frost"],
		selection: ["ray of frost"],
		firstCol: "atwill",
	}, {
		name: "3 charges",
		spells: ["sleet storm"],
		selection: ["sleet storm"],
		firstCol: 3,
	}, {
		name: "4 charges",
		spells: ["ice storm"],
		selection: ["ice storm"],
		firstCol: 4,
	}],
	calcChanges: {
		spellAdd: [
			function (spellKey, spellObj, spName, isDuplicate) {
				if (spellKey == "ray of frost" && spName == "wand of winter") {
					spellObj.firstCol = isDuplicate ? 1 : "atwill";
					// Cast at a fixed level: 1d8 without charges, 2d8 for 1 charge (as if cast at 5th level)
					var sDescr = getSpellShortDescription(spellKey, spellObj);
					var sNew = sDescr.replace(/\b\d+d8\b/i, (isDuplicate ? 2 : 1) + "d8")
						.replace(/; \+1d8 at CL.*?17/i, "");
					if (sNew === sDescr) return;
					spellObj.description = sNew;
					return true;
				};
			},
			"",
		],
	},
}
MagicItemsList["dragontooth dagger"] = {
	name: "Dragontooth Dagger",
	source: [["ToD", 178], ["RoT", 94]],
	type: "Weapon (Dagger)",
	rarity: "Rare",
	description: "This dagger is fashioned from the tooth of a dragon. Its handle is its leather wrapped root and there is no crossguard. It adds a +1 bonus to attack and damage rolls made with it and deals +1d6 Acid damage on a hit. Against the enemies of the Cult of the Dragon this increases to a +2 bonus and +2d6 Acid damage.",
	descriptionFull: [
		"A dagger fashioned from the tooth of a dragon. While the blade is obviously a fang or predator's tooth, the handle is leather wrapped around the root of the tooth, and there is no crossguard.",
		"You gain a +1 bonus to attack and damage rolls made with this weapon. On a hit with this weapon, the target takes an extra 1d6 acid damage.",
		"***Draconic Potency***. Against enemies of the Cult of the Dragon, the dagger's bonus to attack and damage rolls increases to 2, and the extra acid damage increases to 2d6.",
	],
	weight: 1,
	weaponOptions: [{
		baseWeapon: "dagger",
		regExpSearch: /^(?=.*dragontooth)(?=.*dagger).*$/i,
		name: "Dragontooth Dagger",
		source: [["ToD", 178], ["RoT", 94]],
		description: "Finesse, Light, Thrown; +1d6 Acid damage; Vs Cult of the Dragon enemies: +2 magic \x26 +2d6 Acid damage",
		modifiers: [1, 1],
		selectNow: true,
	}],
}

// Beast
// Sled dog is just a wolf under a different name, it has been added to the SRD code as a `nameAlt`
