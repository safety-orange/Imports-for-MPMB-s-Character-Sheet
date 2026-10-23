var iFileName = "legacy_20191119_ERftLW.js";
RequiredSheetVersion("24.2.0");
// This file adds the content from Eberron: Rising from the Last War to MPMB's Character Record Sheet that has not (yet) been replaced in any rulebook for the 5.5e (2024) rules

// Define the source
SourceList["E:RLW"] = {
	name: "Eberron: Rising from the Last War",
	abbreviation: "E:RLW",
	group: "Legacy Campaign Sourcebooks",
	campaignSetting: "Eberron",
	url: "https://dnd.wizards.com/products/eberron",
	date: "2019/11/19",
	defaultExcluded: true,
};

// Double bladed scimitar
WeaponsList["double-bladed scimitar"] = {
	regExpSearch: /^(?=.*double)(?=.*scimitar).*$/i,
	name: "Double-bladed scimitar",
	nameAlt: ["Scimitar, Double-bladed"],
	source: [["E:RLW", 22], ["WGtE", 74]],
	list: "melee",
	ability: 1,
	type: "Martial",
	damage: [2, 4, "slashing"],
	range: "Melee",
	weight: 6,
	description: "Two-Handed; With Attack action, one attack as Bonus Action for 1d4",
	special: true,
	abilitytodamage: true,
};

// Revenant blade feat
FeatsList["revenant blade"] = {
	name: "Revenant Blade",
	source: [["E:RLW", 22]],
	prerequisite: "Being an Elf",
	prereqeval: function (v) { return /^(?!.*half)(?=.*(elf|eladrin|avariel|grugach|shadar-kai)).*$/i.test(CurrentRace.known); },
	descriptionFull: [
		"You are descended from a master of the double blade and their skills have passed on to you. You gain the following benefits:",
		" \u2022 Increase your Dexterity or Strength score by 1, to a maximum of 20.",
		" \u2022 While you are holding a double-bladed scimitar with two hands, you gain a + 1 bonus to Armor Class.",
		" \u2022 A double-bladed scimitar has the finesse property when you wield it.",
	],
	description: "My mastery with the double bladed scimitar allows me to treat it as having the Finesse trait. In addition, I gain +1 AC while wielding it with two hands. [+1 Strength or Dexterity]",
	scorestxt: "+1 Strength or Dexterity",
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (v.baseWeaponName == "double-bladed scimitar" && fields.Proficiency) {
					if (!/finesse/i.test(fields.Description)) fields.Description = "Finesse, " + fields.Description.substr(0,1).toLowerCase() + fields.Description.substr(1);
					fields.Mod = v.StrDex;
				};
			},
			"Double-bladed scimitars count as having Finesse for me.",
			1,
		],
	},
	extraAC: {
		mod: 1,
		text: "I gain a +1 bonus to AC while I'm wielding a double-bladed weapon in two hands.",
		stopeval: function (v) { return v.usingShield && !/animated/i.test(What("AC Shield Bonus Description")) || !CurrentWeapons.known.some(function (n) { return n[0] == "double-bladed scimitar" || (WeaponsList[n[0]] && WeaponsList[n[0]].baseWeapon == "double-bladed scimitar"); }); },
	},
};
// [dupl_start] reprints from Volo's Guide to Monsters
if (!SourceList["V"]) {
	RaceList["bugbear"] = {
		regExpSearch: /bugbear/i,
		name: "Bugbear",
		source: [["V", 119], ["E:RLW", 25], ["W", 174]],
		plural: "Bugbears",
		size: 3,
		speed: {
			walk: { spd: 30, enc: 20 },
		},
		languageProfs: ["Common", "Goblin"],
		vision: [["Darkvision", 60]],
		skills: ["Stealth"],
		age: " reach adulthood at age 16 and live up to 80 years",
		height: " are between 6 and 8 feet tall (6'0\" + 2d12\")",
		weight: " weigh between 250 and 350 lb (200 + 2d12 \xD7 2d6 lb)",
		heightMetric: " are between 1,9 and 2,4 metres tall (185 + 5d12 cm)",
		weightMetric: " weigh between 115 and 160 kg (90 + 5d12 \xD7 4d6 / 10 kg)",
		features: {
			"surprise attack": {
				name: "Surprise Attack",
				minlevel: 1,
				usages: 1,
				recovery: "Combat",
				additional: "2d6",
			},
		},
		trait: [
			"**Bugbear**",
			"##\u25C6 Powerful Build##. I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift.",
			"##\u25C6 Long-Limbed##. I have an additional 5 ft reach with melee attacks that I make on my turn.",
			"##\u25C6 Surprise Attack##. If I hit a surprised creature on my first turn in combat, that attack deals an extra 2d6 damage. I can do this only once per combat.",
		],
		carryingCapacity: 2,
	};
	RaceList["goblin"] = {
		regExpSearch: /^(?=.*\bgoblins?\b)(?!.*(hobgoblin|bugbear)).*$/i,
		name: "Goblin",
		source: [["V", 119], ["G", 17], ["E:RLW", 26], ["W", 174]],
		plural: "Goblins",
		size: 4,
		speed: {
			walk: { spd: 30, enc: 20 },
		},
		languageProfs: ["Common", "Goblin"],
		vision: [["Darkvision", 60]],
		age: " reach adulthood at age 8 and live up to 60 years",
		height: " are between 3 and a half and 4 feet tall (3'5\" + 2d4\")",
		weight: " weigh between 40 and 70 lb (35 + 2d4 \xD7 1 lb)",
		heightMetric: " are between 100 and 120 cm tall (100 + 5d4 cm)",
		weightMetric: " weigh between 20 and 30 kg (17 + 5d4 \xD7 2 / 10 kg)",
		features: {
			"fury of the small": {
				name: "Fury of the Small",
				minlevel: 1,
				usages: 1,
				recovery: "Short Rest",
				additional: levels.map(function (n) { return "+" + n + " damage"; }),
			},
		},
		action: [["bonus action", "Nimble Escape (Disengage/Hide)"]],
		trait: [
			"**Goblin**",
			"##\u25C6 Fury of the Small##. Once per Short Rest, when I damage a creature of a size category larger than mine with an attack or a spell, I can have it take extra damage equal to my level.",
			"##\u25C6 Nimble Escape##. As a Bonus Action, I can take the Disengage or Hide action.",
		],
	};
	RaceList["hobgoblin"] = {
		regExpSearch: /hobgoblin/i,
		name: "Hobgoblin",
		source: [["V", 119], ["E:RLW", 26], ["W", 175]],
		plural: "Hobgoblins",
		size: 3,
		speed: {
			walk: { spd: 30, enc: 20 },
		},
		languageProfs: ["Common", "Goblin"],
		vision: [["Darkvision", 60]],
		armorProfs: [true, false, false, false],
		age: " reach adulthood in their late teens and live less than 100 years",
		height: " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
		weight: " weigh between 150 and 200 lb (110 + 2d10 \xD7 2d4 lb)",
		heightMetric: " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
		weightMetric: " weigh between 70 and 90 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
		features: {
			"saving face": {
				name: "Saving Face",
				minlevel: 1,
				usages: 1,
				recovery: "Short Rest",
			},
		},
		trait: [
			"**Hobgoblin**",
			"##\u25C6 Martial Training##. I am proficient with two Martial weapons of my choice and Light armor.",
			"##\u25C6 Saving Face##. Once per Short Rest, when I miss an attack roll or fail an ability check or a saving throw, I can gain a bonus to the roll equal to the number of allies I can see within 30 ft of me (max +5).",
		],
	};
} // dupl_end

// Dragonmarks subraces
AddSubRace("half-elf", "mark of detection", {
	regExpSearch: /^((?=.*mark)(?=.*detection)|(?=.*house)(?=.*medani)).*$/i,
	name: "Half-Elf, Mark of Detection",
	sortname: "Half-Elf, Mark of Detection (Dragonmark)",
	source: [["E:RLW", 40]],
	skillstxt: null,
	trait: [
		"**Half-Elf, Mark of Detection**",
		"##\u25C6 Deductive Intuition##. I can add +1d4 to my Intelligence (Investigation) and Wisdom (Insight) checks.",
		"##\u25C6 Magical Detection##. I can cast *Detect Magic* and *Detect Poison and Disease* each once per Long Rest. At 3rd level, I can also cast *See Invisibility* once per Long Rest. Wisdom is my spellcasting ability for these and none of them require Material components.",
		"##\u25C6 Spells of the Mark##. I add several spells to the spell list of my spellcasting class(es).",
	],
	spellcastingAbility: 5, // changed from Int to Wis by errata
	features: {
		"magical detection": {
			name: "Magical Detection (level 1)",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Magical Detection (level 1)",
				spells: ["detect magic", "detect poison and disease"],
				selection: ["detect magic", "detect poison and disease"],
				firstCol: "oncelr",
				times: 2,
			}],
			spellChanges: {
				"detect poison and disease": {
					components: "V,S",
					compMaterial: "",
					changes: "I can cast this spell once per Long Rest without requiring Material components.",
				},
			},
		},
		"see invisibility": {
			name: "Magical Detection (level 3)",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Magical Detection (level 3)",
				spells: ["see invisibility"],
				selection: ["see invisibility"],
				firstCol: "oncelr",
			}],
			spellChanges: {
				"see invisibility": {
					components: "V,S",
					compMaterial: "",
					changes: "I can cast this spell once per Long Rest without requiring Material components.",
				},
			},
		},
	},
	calcChanges: {
		spellList: [
			function (spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["detect evil and good", "detect poison and disease", "detect thoughts", "find traps", "clairvoyance", "nondetection", "arcane eye", "divination", "legend lore"]);
			},
			"My race adds extra spells to the spell list(s) of my spellcasting class(es): *Detect Evil and Good*, *Detect Poison and Disease*, *Detect Thoughts*, *Find Traps*, *Clairvoyance*, *Nondetection*, *Arcane Eye*, *Divination*, and *Legend Lore*.",
		],
	},
});
AddSubRace("half-orc", "mark of finding", {
	regExpSearch: /^((?=.*half)(?=.*\bor(c|k))((?=.*mark)(?=.*finding)|(?=.*house)(?=.*tharashk))).*$/i,
	name: "Half-Orc, Mark of Finding",
	sortname: "Half-Orc, Mark of Finding (Dragonmark)",
	source: [["E:RLW", 41]],
	languageProfs: ["Common", "Goblin"],
	skills: null, // no Menacing
	trait: [
		"**Half-Orc, Mark of Finding**",
		"##\u25C6 Hunter's Intuition##. I can add +1d4 to my Wisdom (Perception) and Wisdom (Survival) checks.",
		"##\u25C6 Finder's Magic##. I can cast *Hunter's Mark* once per Long Rest. At 3rd level, I can also cast *Locate Object* once per Long Rest. Wisdom is my spellcasting ability for these.",
		"##\u25C6 Spells of the Mark##. I add several spells to the spell list of my spellcasting class(es).",
	],
	spellcastingAbility: 5,
	features: {
		"relentless endurance": null, // no Relentless Endurance
		"savage attacks": null, // no Savage Attacks
		"finder's magic": {
			name: "Finder's Magic (level 1)",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Finder's Magic (level 1)",
				spells: ["hunter's mark"],
				selection: ["hunter's mark"],
				firstCol: "oncelr",
			}],
		},
		"locate object": {
			name: "Finder's Magic (level 3)",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Finder's Magic (level 3)",
				spells: ["locate object"],
				selection: ["locate object"],
				firstCol: "oncelr",
			}],
		},
	},
	calcChanges: {
		spellList: [
			function (spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["faerie fire", "longstrider", "locate animals or plants", "locate object", "clairvoyance", "speak with plants", "divination", "locate creature", "commune with nature"]);
			},
			"My race adds extra spells to the spell list(s) of my spellcasting class(es): *Faerie Fire*, *Longstrider*, *Locate Animals or Plants*, *Locate Object*, *Clairvoyance*, *Speak with Plants*, *Divination*, *Locate Creature*, and *Commune with Nature*.",
		],
	},
});
AddSubRace("human", "mark of finding", {
	regExpSearch: /^((?=.*human)((?=.*mark)(?=.*finding)|(?=.*house)(?=.*tharashk))).*$/i,
	name: "Human, Mark of Finding",
	sortname: "Human, Mark of Finding (Dragonmark)",
	source: [["E:RLW", 41]],
	size: 3,
	languageProfs: ["Common", "Goblin"],
	vision: [["Darkvision", 60]],
	skillstxt: null, // no Skillful
	featsAdd: null, // no Versatile
	trait: [
		"**Human, Mark of Finding**",
		"##\u25C6 Hunter's Intuition##. I can add +1d4 to my Wisdom (Perception) and Wisdom (Survival) checks.",
		"##\u25C6 Finder's Magic##. I can cast *Hunter's Mark* once per Long Rest. At 3rd level, I can also cast *Locate Object* once per Long Rest. Wisdom is my spellcasting ability for these.",
		"##\u25C6 Spells of the Mark##. I add several spells to the spell list of my spellcasting class(es).",
	],
	spellcastingAbility: 5,
	features: {
		"finder's magic": {
			name: "Finder's Magic (level 1)",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Finder's Magic (level 1)",
				spells: ["hunter's mark"],
				selection: ["hunter's mark"],
				firstCol: "oncelr",
			}],
		},
		"locate object": {
			name: "Finder's Magic (level 3)",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Finder's Magic (level 3)",
				spells: ["locate object"],
				selection: ["locate object"],
				firstCol: "oncelr",
			}],
		},
	},
	calcChanges: {
		spellList: [
			function (spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["faerie fire", "longstrider", "locate animals or plants", "locate object", "clairvoyance", "speak with plants", "divination", "locate creature", "commune with nature"]);
			},
			"My race adds extra spells to the spell list(s) of my spellcasting class(es): *Faerie Fire*, *Longstrider*, *Locate Animals or Plants*, *Locate Object*, *Clairvoyance*, *Speak with Plants*, *Divination*, *Locate Creature*, and *Commune with Nature*.",
		],
	},
});
AddSubRace("human", "mark of handling", {
	regExpSearch: /^((?=.*mark)(?=.*handling)|(?=.*house)(?=.*vadalis)).*$/i,
	name: "Human, Mark of Handling",
	sortname: "Human, Mark of Handling (Dragonmark)",
	source: [["E:RLW", 42]],
	size: 3,
	languageProfs: ["Common", 1],
	skillstxt: null, // no Skillful
	featsAdd: null, // no Versatile
	trait: [
		"**Human, Mark of Handling**",
		"##\u25C6 Wild Intuition##. I can add +1d4 to my Wisdom (Animal Handling) and Intelligence (Nature) checks.",
		"##\u25C6 Primal Connection##. I can cast *Animal Friendship* and *Speak with Animals* each once per Short Rest. Wisdom is my spellcasting ability for these.",
		"##\u25C6 The Bigger They Are##. When I cast *Animal Friendship* or *Speak with Animals*, I can target a Monstrosity with an Intelligence of 3 or lower instead of a Beast.",
	],
	spellcastingAbility: 5,
	features: {
		"primal connection": {
			name: "Primal Connection",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Primal Connection",
				spells: ["animal friendship", "speak with animals"],
				selection: ["animal friendship", "speak with animals"],
				firstCol: "oncesr",
				times: 2,
			}],
		},
	},
	calcChanges: {
		spellAdd: [
			function (spellKey, spellObj, spName) {
				switch (spellKey) {
					case "animal friendship" :
						spellObj.description = spellObj.description.replace("Beasts", "Beasts/Int\u22643 Monstrosities").replace("the Beast is", "it's");
						return true;
					case "speak with animals" :
						spellObj.description = spellObj.description.replace("Speak with and understand Beasts", "Speak with Beasts & Int\u22643 Monstrosities").replace("nearby locations/monsters/recent sights", "nearby places/monsters/sights");
						return true;
				}
			},
			"When I cast *Animal Friendship* or *Speak with Animals*, I can target a Monstrosity with an Intelligence of 3 or lower instead of a Beast.",
		],
		spellList: [
			function (spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["animal friendship", "speak with animals", "beast sense", "calm emotions", "beacon of hope", "conjure animals", "aura of life", "dominate beast", "awaken"]);
			},
			"My race adds extra spells to the spell list(s) of my spellcasting class(es): *Animal Friendship*, *Speak with Animals*, *Beast Sense*, *Calm Emotions*, *Beacon of Hope*, *Conjure Animals*, *Aura of Life*, *Dominate Beast*, and *Awaken*.",
		],
	},
});
AddSubRace("halfling", "mark of healing", {
	regExpSearch: /^((?=.*mark)(?=.*healing)|(?=.*house)(?=.*jorasco)).*$/i,
	name: "Halfling, Mark of Healing",
	sortname: "Halfling, Mark of Healing (Dragonmark)",
	source: [["E:RLW", 43]],
	speed: { walk: { spd: 25, enc: 15 } },
	languageProfs: ["Common", "Halfling"],
	trait: [
		"**Halfling, Mark of Healing**",
		"##\u25C6 Lucky##. When I roll a 1 on an attack, check, or save, I can reroll it but must use the result." + (typePF ? " " : "\r") + "##\u25C6 Halfling Nimbleness##. I can move through the space of Medium and larger creatures.",
		"##\u25C6 Medical Intuition##. I can add +1d4 to my Wisdom (Medicine) and herbalism kit checks.",
		"##\u25C6 Healing Touch##. I can cast *Cure Wounds* once per Long Rest. At 3rd level, I can also cast *Lesser Restoration* once per Long Rest. Wisdom is my spellcasting ability for these.",
		"##\u25C6 Spells of the Mark##. I add several spells to " + (typePF ? "my class' spell list." : "the spell list of my spellcasting class(es)."),
	],
	spellcastingAbility: 5,
	features: {
		"healing touch": {
			name: "Healing Touch (level 1)",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Healing Touch (level 1)",
				spells: ["cure wounds"],
				selection: ["cure wounds"],
				firstCol: "oncelr",
			}],
		},
		"lesser restoration": {
			name: "Healing Touch (level 3)",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Healing Touch (level 3)",
				spells: ["lesser restoration"],
				selection: ["lesser restoration"],
				firstCol: "oncelr",
			}],
		},
	},
	calcChanges: {
		spellList: [
			function (spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["cure wounds", "healing word", "lesser restoration", "prayer of healing", "aura of vitality", "mass healing word", "aura of purity", "aura of life", "greater restoration"]);
			},
			"My race adds extra spells to the spell list(s) of my spellcasting class(es): *Cure Wounds*, *Healing Word*, *Lesser Restoration*, *Prayer of Healing*, *Aura of Vitality*, *Mass Healing Word*, *Aura of Purity*, *Aura of Life*, and *Greater Restoration*.",
		],
	},
});
AddSubRace("halfling", "mark of hospitality", {
	regExpSearch: /^((?=.*mark)(?=.*hospitality)|(?=.*house)(?=.*ghallanda)).*$/i,
	name: "Halfling, Mark of Hospitality",
	sortname: "Halfling, Mark of Hospitality (Dragonmark)",
	source: [["E:RLW", 44]],
	speed: { walk: { spd: 25, enc: 15 } },
	languageProfs: ["Common", "Halfling"],
	trait: [
		"**Halfling, Mark of Hospitality**",
		"##\u25C6 Lucky##. When I roll a 1 on an attack, check, or save, I can reroll it but must use the result." + (typePF ? " " : "\r") + "##\u25C6 Halfling Nimbleness##. I can move through the space of Medium and larger creatures.",
		"##\u25C6 Ever Hospitable##. I can add +1d4 to my Charisma (Persuasion), brewer's supplies, and cook's utensils checks." + (typePF ? "\r" : " ") + "##\u25C6 Innkeeper's Magic##. I know the *Prestidigitation* cantrip and I can cast *Purify Food and Drink* and *Unseen Servant* each once per Long Rest. Charisma is my spellcasting ability for these. Spells of the Mark: I add several spells to my class' spell list.",
	],
	spellcastingAbility: 6,
	features: {
		"innkeeper's magic": {
			name: "Innkeeper's Magic",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Innkeeper's Magic",
				spells: ["prestidigitation"],
				selection: ["prestidigitation"],
			}, {
				name: "Innkeeper's Magic",
				spells: ["purify food and drink", "unseen servant"],
				selection: ["purify food and drink", "unseen servant"],
				firstCol: "oncelr",
				times: 2,
			}],
		},
	},
	calcChanges: {
		spellList: [
			function (spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["goodberry", "sleep", "aid", "calm emotions", "create food and water", "leomund's tiny hut", "aura of purity", "mordenkainen's private sanctum", "hallow"]);
			},
			"My race adds extra spells to the spell list(s) of my spellcasting class(es): *Goodberry*, *Sleep*, *Aid*, *Calm Emotions*, *Create Food and Water*, *Leomund's Tiny Hut*, *Aura of Purity*, *Mordenkainen's Private Sanctum*, and *Hallow*.",
		],
	},
});
AddSubRace("human", "mark of making", {
	regExpSearch: /^((?=.*mark)(?=.*making)|(?=.*house)(?=.*cannith)).*$/i,
	name: "Human, Mark of Making",
	sortname: "Human, Mark of Making (Dragonmark)",
	source: [["E:RLW", 45]],
	size: 3,
	languageProfs: ["Common", 1],
	toolProfs: [["Artisan's tools", 1]],
	skillstxt: null, // no Skillful
	featsAdd: null, // no Versatile
	trait: [
		"**Human, Mark of Making**",
		"##\u25C6 Artisan's Intuition##. I can add +1d4 to Arcana checks and checks with artisan's tools.",
		"##\u25C6 Spellsmith##. I know the *Mending* cantrip. I can cast *Magic Weapon* once per Long Rest. Intelligence is my spellcasting ability for these.",
		"##\u25C6 Spells of the Mark##. I add several spells to the spell list of my spellcasting class(es).",
		"##\u25C6 Maker's Gift##. I gain proficiency with one type of artisan's tools of my choice.",
	],
	spellcastingAbility: 4,
	features: {
		"spellsmith": {
			name: "Spellsmith",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Spellsmith",
				spells: ["mending"],
				selection: ["mending"],
			}, {
				name: "Spellsmith",
				spells: ["magic weapon"],
				selection: ["magic weapon"],
				firstCol: "oncelr",
			}],
		},
	},
	calcChanges: {
		spellList: [
			function (spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["identify", "tenser's floating disk", "continual flame", "magic weapon", "conjure barrage", "elemental weapon", "fabricate", "stone shape", "creation"]);
			},
			"My race adds extra spells to the spell list(s) of my spellcasting class(es): *Identify*, *Tenser's Floating Disk*, *Continual Flame*, *Magic Weapon*, *Conjure Barrage*, *Elemental Weapon*, *Fabricate*, *Stone Shape*, and *Creation*.",
		],
	},
});
AddSubRace("human", "mark of passage", {
	regExpSearch: /^((?=.*mark)(?=.*passage)|(?=.*house)(?=.*orien)).*$/i,
	name: "Human, Mark of Passage",
	sortname: "Human, Mark of Passage (Dragonmark)",
	source: [["E:RLW", 46]],
	size: 3,
	speed: {
		walk: { spd: 35, enc: 25 },
	},
	languageProfs: ["Common", 1],
	skillstxt: null, // no Skillful
	featsAdd: null, // no Versatile
	trait: [
		"**Human, Mark of Passage**",
		"##\u25C6 Intuitive Motion##. I can add +1d4 to my Dexterity (Acrobatics) checks and any ability checks involving operating or maintaining a land vehicle.",
		"##\u25C6 Magical Passage##. I can cast *Misty Step* once per Long Rest, using Dexterity as my spellcasting ability.",
		"##\u25C6 Spells of the Mark##. I add several spells to the spell list of my spellcasting class(es).",
		"##\u25C6 Courier's Speed##. My base Speed is 35 ft.",
	],
	spellcastingAbility: 2,
	features: {
		"magical passage": {
			name: "Magical Passage",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Magical Passage",
				spells: ["misty step"],
				selection: ["misty step"],
				firstCol: "oncelr",
			}],
		},
	},
	calcChanges: {
		spellList: [
			function (spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["expeditious retreat", "jump", "misty step", "pass without trace", "blink", "phantom steed", "dimension door", "freedom of movement", "teleportation circle"]);
			},
			"My race adds extra spells to the spell list(s) of my spellcasting class(es): *Expeditious Retreat*, *Jump*, *Misty Step*, *Pass Without Trace*, *Blink*, *Phantom Steed*, *Dimension Door*, *Freedom of Movement*, and *Teleportation Circle*.",
		],
	},
});
AddSubRace("gnome", "mark of scribing", {
	regExpSearch: /^((?=.*mark)(?=.*scribing)|(?=.*house)(?=.*sivis)).*$/i,
	name: "Gnome, Mark of Scribing",
	sortname: "Gnome, Mark of Scribing (Dragonmark)",
	source: [["E:RLW", 47]],
	speed: { walk: { spd: 25, enc: 15 } },
	languageProfs: ["Common", "Gnomish"],
	savetxt: { text: ["Adv on Int/Wis/Cha saves vs magic"] },
	trait: [
		"**Gnome, Mark of Scribing**",
		"##\u25C6 Gifted Scribe##. I can add +1d4 to my Intelligence (History) checks and ability checks with calligrapher's supplies.",
		"##\u25C6 Scribe's Insight##. I know the *Message* cantrip. I can cast *Comprehend Languages* once per Long Rest. At 3rd level, I can also cast *Magic Mouth* once per Long Rest. Intelligence is my spellcasting ability for these spells.",
		"##\u25C6 Spells of the Mark##. I add several spells to the spell list of my spellcasting class(es).",
	],
	spellcastingAbility: 4,
	features: {
		"scribe's insight": {
			name: "Scribe's Insight (level 1)",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Scribe's Insight (level 1)",
				spells: ["message"],
				selection: ["message"],
			}, {
				name: "Scribe's Insight (level 1)",
				spells: ["comprehend languages"],
				selection: ["comprehend languages"],
				firstCol: "oncelr",
			}],
		},
		"magic mouth": {
			name: "Scribe's Insight (level 3)",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Scribe's Insight (level 3)",
				spells: ["magic mouth"],
				selection: ["magic mouth"],
				firstCol: "oncelr",
			}],
		},
	},
	calcChanges: {
		spellList: [
			function (spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["comprehend languages", "illusory script", "animal messenger", "silence", "sending", "tongues", "arcane eye", "confusion", "dream"]);
			},
			"My race adds extra spells to the spell list(s) of my spellcasting class(es): *Comprehend Languages*, *Illusory Script*, *Animal Messenger*, *Silence*, *Sending*, *Tongues*, *Arcane Eye*, *Confusion*, and *Dream*.",
		],
	},
});
AddSubRace("human", "mark of sentinel", {
	regExpSearch: /^((?=.*mark)(?=.*sentinel)|(?=.*house)(?=.*deneith)).*$/i,
	name: "Human, Mark of Sentinel",
	sortname: "Human, Mark of Sentinel (Dragonmark)",
	source: [["E:RLW", 48]],
	size: 3,
	languageProfs: ["Common", 1],
	skillstxt: null, // no Skillful
	featsAdd: null, // no Versatile
	trait: [
		"**Human, Mark of Sentinel**",
		"##\u25C6 Sentinel's Intuition##. I can add +1d4 to my Wisdom (Insight) and Wisdom (Perception) checks." + (typePF ? "\r" : " ") + "##\u25C6 Guardian's Shield##. I can cast *Shield* once per Long Rest, using Wisdom as my spellcasting ability.",
		"##\u25C6 Vigilant Guardian##. Once per Long Rest as a Reaction when a creature I can see within 5 ft is hit by an attack roll, I can swap places with it and I'm hit by the attack instead.",
		"##\u25C6 Spells of the Mark##. I add several spells to the spell list of my spellcasting class(es).",
	],
	spellcastingAbility: 5,
	features: {
		"vigilant guardian": {
			name: "Vigilant Guardian",
			minlevel: 1,
			usages: 1,
			recovery: "Long Rest",
			action: [["reaction", ""]],
		},
		"guardian's shield": {
			name: "Guardian's Shield",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Guardian's Shield",
				spells: ["shield"],
				selection: ["shield"],
				firstCol: "oncelr",
			}],
		},
	},
	calcChanges: {
		spellList: [
			function (spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["compelled duel", "shield of faith", "warding bond", "zone of truth", "counterspell", "protection from energy", "death ward", "guardian of faith", "bigby's hand"]);
			},
			"My race adds extra spells to the spell list(s) of my spellcasting class(es): *Compelled Duel*, *Shield of Faith*, *Warding Bond*, *Zone of Truth*, *Counterspell*, *Protection from Energy*, *Death Ward*, *Guardian of Faith*, and *Bigby's Hand*.",
		],
	},
});
AddSubRace("elf", "mark of shadow", {
	regExpSearch: /^((?=.*mark)(?=.*shadow)|(?=.*house)(?=.*(phiarlan|thuranni))).*$/i,
	name: "Elf, Mark of Shadow",
	sortname: "Elf, Mark of Shadow (Dragonmark)",
	source: [["E:RLW", 49]],
	languageProfs: ["Common", "Elvish"],
	skills: ["Perception"],
	skillstxt: null,
	trait: [
		"**Elf, Mark of Shadow**",
		"##\u25C6 Trance##. Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. This gives the same benefit as a human gets from 8 hours of sleep (long rest takes only 4 hours).",
		"##\u25C6 Cunning Intuition##. I can add +1d4 to my Cha" + (typePF ? "risma" : "") + " (Performance) and Dex" + (typePF ? "terity" : "") + " (Stealth) checks.",
		"##\u25C6 Shape Shadows##. I know the *Minor Illusion* cantrip. At 3rd level, I can cast *Invisibility* once per Long Rest. Charisma is my spellcasting ability for these.",
		"##\u25C6 Spells of the Mark##. I add several spells to " + (typePF ? "my class' spell list." : "the spell list of my spellcasting class(es)."),
	],
	spellcastingAbility: 6,
	spellcastingBonus: [{
		name: "Shape Shadows (level 1)",
		spells: ["minor illusion"],
		selection: ["minor illusion"],
	}],
	features: {
		"shape shadows": {
			name: "Shape Shadows (level 3)",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Shape Shadows (level 3)",
				spells: ["invisibility"],
				selection: ["invisibility"],
				firstCol: "oncelr",
			}],
		},
	},
	calcChanges: {
		spellList: [
			function (spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["disguise self", "silent image", "darkness", "pass without trace", "clairvoyance", "major image", "greater invisibility", "hallucinatory terrain", "mislead"]);
			},
			"My race adds extra spells to the spell list(s) of my spellcasting class(es): *Disguise Self*, *Silent Image*, *Darkness*, *Pass Without Trace*, *Clairvoyance*, *Major Image*, *Greater Invisibility*, *Hallucinatory Terrain*, and *Mislead*.",
		],
	},
});
AddSubRace("half-elf", "mark of storm", {
	regExpSearch: /^((?=.*mark)(?=.*storm)|(?=.*house)(?=.*lyrandar)).*$/i,
	name: "Half-Elf, Mark of Storm",
	sortname: "Half-Elf, Mark of Storm (Dragonmark)",
	source: [["E:RLW", 50]],
	dmgres: ["Lightning"],
	skillstxt: null,
	trait: [
		"**Half-Elf, Mark of Storm**",
		"##\u25C6 Windwright's Intuition##. I can add +1d4 to my Dexterity (Acrobatics) checks and any ability checks involving operating or maintaining a water or air vehicle.",
		"##\u25C6 Headwinds##. I know the *Gust* cantrip. Once I reach 3rd level, I can cast *Gust of Wind* once per Long Rest. Charisma is my spellcasting ability for these spells.",
		"##\u25C6 Spells of the Mark##. I add several spells to the spell list of my spellcasting class(es).",
	],
	spellcastingAbility: 6,
	spellcastingBonus: [{
		name: "Headwinds (level 1)",
		spells: ["gust"],
		selection: ["gust"],
	}],
	features: {
		"gust of wind": {
			name: "Headwinds (level 3)",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Headwinds (level 3)",
				spells: ["gust of wind"],
				selection: ["gust of wind"],
				firstCol: "oncelr",
			}],
		},
	},
	calcChanges: {
		spellList: [
			function (spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["feather fall", "fog cloud", "gust of wind", "levitate", "sleet storm", "wind wall", "conjure minor elementals", "control water", "conjure elemental"]);
			},
			"My race adds extra spells to the spell list(s) of my spellcasting class(es): *Feather Fall*, *Fog Cloud*, *Gust of Wind*, *Levitate*, *Sleet Storm*, *Wind Wall*, *Conjure Minor Elementals*, *Control Water*, and *Conjure Elemental*.",
		],
	},
});
AddSubRace("dwarf", "mark of warding", {
	regExpSearch: /^((?=.*mark)(?=.*warding)|(?=.*house)(?=.*kundarak)).*$/i,
	name: "Dwarf, Mark of Warding",
	sortname: "Dwarf, Mark of Warding (Dragonmark)",
	source: [["E:RLW", 51]],
	speed: { walk: { spd: 25, enc: 25 } },
	languageProfs: ["Common", "Dwarvish"],
	vision: [["Darkvision", 60]],
	weaponProfs: [false, false, ["battleaxe", "handaxe", "warhammer", "light hammer"]],
	toolProfs: [["Smith, brewer, or mason tools", 1]],
	trait: [
		"**Dwarf, Mark of Warding**",
		"##\u25C6 Warder's Intuition##. I can add +1d4 to my Intelligence (Investigation) checks and ability checks with thieves' tools." + (typePF ? "\r##\u25C6 Stonecunning##. When I make an Int (History) check related to origin of stonework, I am considered having Expertise in the History skill." : " ##\u25C6 Stonecunning##. Expertise in History when concerning stonework."),
		"##\u25C6 Wards and Seals##. I can cast *Alarm* and *Mage Armor* each once per Long Rest. At 3rd level, I can also cast *Arcane Lock* once per Long Rest. Intelligence is my spellcasting ability for these and none of them require Material components.",
		"##\u25C6 Spells of the Mark##. I add several spells to my class' spell list(s).",
	],
	spellcastingAbility: 4,
	features: {
		"stonecunning": null, // not the PHB'24 Tremorsense version
		"wards and seals": {
			name: "Wards and Seals (level 1)",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Wards and Seals (level 1)",
				spells: ["alarm", "mage armor"],
				selection: ["alarm", "mage armor"],
				firstCol: "oncelr",
				times: 2,
			}],
			spellChanges: {
				"alarm": {
					components: "V,S",
					compMaterial: "",
					changes: "I can cast this spell once per Long Rest without requiring Material components.",
				},
				"mage armor": {
					components: "V,S",
					compMaterial: "",
					changes: "I can cast this spell once per Long Rest without requiring Material components.",
				},
			},
		},
		"arcane lock": {
			name: "Wards and Seals (level 3)",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Wards and Seals (level 3)",
				spells: ["arcane lock"],
				selection: ["arcane lock"],
				firstCol: "oncelr",
			}],
		},
	},
	calcChanges: {
		spellList: [
			function (spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["alarm", "armor of agathys", "arcane lock", "knock", "glyph of warding", "magic circle", "leomund's secret chest", "mordenkainen's faithful hound", "antilife shell"]);
			},
			"My race adds extra spells to the spell list(s) of my spellcasting class(es): *Alarm*, *Armor of Agathys*, *Arcane Lock*, *Knock*, *Glyph of Warding*, *Magic Circle*, *Leomund's Secret Chest*, *Mordenkainen's Faithful Hound*, and *Antilife Shell*.",
		],
	},
});

// [dupl_start] Gust cantrip reprint
if (!SpellsList["gust"]) {
	SpellsList["gust"] = {
		name: "Gust",
		classes: ["druid", "sorcerer", "wizard"],
		source: [["X", 157], ["E", 19], ["E:RLW", 50], ["UA:D", 6], ["WGtE", 107]],
		reqLoS: true,
		level: 0,
		school: "Trans",
		time: "Act",
		range: "30 ft",
		components: "V,S",
		duration: "Instantaneous",
		save: "Str",
		description: "Crea \u2264Medium save or push 5 ft; or push unattended 5 lb obj 10 ft; or harmless sensory effect",
		descriptionFull: [
			"You seize the air and compel it to create one of the following effects at a point you can see within range.",
			" \u2022 One Medium or smaller creature that you choose must succeed on a Strength saving throw or be pushed up to 5 feet away from you.",
			" \u2022 You create a small blast of air capable of moving one object that is neither held nor carried and that weighs no more than 5 pounds. The object is pushed up to 10 feet away from you. It isn't pushed with enough force to cause damage.",
			" \u2022 You create a harmless sensory effect using air, such as causing leaves to rustle, wind to slam shutters shut, or your clothing to ripple in a breeze.",
		],
	};
} // dupl_end

// Background Feature
BackgroundFeatureList["house connections"] = { // from House Agent
	description: "As an agent of my house, I can always get food and lodging for my friends at a house enclave. My house usually provides me with necessary supplies and transportation if it assigns me a mission. I have many old friends, mentors, and rivals in my house that I might run into and be willing to help me depending on my current standing in the house.",
	source: [["E:RLW", 53], ["WGtE", 95]],
};

// Magic Items
MagicItemsList["arcane propulsion arm"] = {
	name: "Arcane Propulsion Arm",
	source: [["E:RLW", 276]],
	type: "Wondrous Item",
	rarity: "Very Rare",
	description: "Once attached to my wrist, elbow, or shoulder, this prosthetic magically forms a copy of the appendage it's replacing. It can't be removed against my will, but I can as an action. I can use it as a proficient Melee weapon with the Thrown property. After a throwing attack with it, it returns and reattaches immediately.",
	descriptionFull: [
		"This prosthetic appendage was developed by artificers of House Cannith. To attune to this item, you must attach it to your arm at the wrist, elbow, or shoulder, at which point the prosthetic magically forms a copy of the appendage it's replacing.",
		"While attached, the prosthetic provides these benefits:",
		" \u2022 The prosthetic is a fully capable part of your body.",
		" \u2022 You can take an action to remove the prosthetic, and it removes itself if your attunement to it ends. It can't be removed against your will.",
		" \u2022 The prosthetic is a magic melee weapon with which you're proficient. It deals 1d8 force damage on a hit and has the thrown property, with a normal range of 20 feet and a long range of 60 feet. When thrown, the prosthetic detaches and flies at the target of the attack, then immediately returns to you and reattaches.",
	],
	attunement: true,
	prerequisite: "Requires attunement by a creature missing a hand or an arm",
	prereqeval: function (v) { return false; },
	weaponOptions: [{
		regExpSearch: /^(?=.*arcane)(?=.*propulsion)(?=.*arm).*$/i,
		name: "Arcane Propulsion Arm",
		source: [["E:RLW", 276]],
		ability: 1,
		type: "AlwaysProf",
		damage: [1, 8, "force"],
		range: "Melee, 20/60 ft",
		description: "Thrown; Returns immediately after thrown",
		abilitytodamage: true,
		selectNow: true,
	}],
}
MagicItemsList["armblade"] = {
	name: "Armblade",
	source: [["E:RLW", 276]],
	type: "Weapon (Any One-Handed Melee Weapon)",
	rarity: "Common",
	description: "While attuned to it, this magic weapon is attached to my arm and inseparable from me. As a Bonus Action, I can retract it into my forearm or extend it from there. While it is extended, I can use the weapon as if I was holding it, and I can't use that hand for other purposes.",
	descriptionFull: [
		"An *armblade* is a magic weapon that attaches to your arm, becoming inseparable from you as long as you're attuned to it. To attune to this item, you must hold it against your forearm for the entire attunement period.",
		"As a bonus action, you can retract the *armblade* into your forearm or extend it from there. While it is extended, you can use the weapon as if you were holding it, and you can't use that hand for other purposes.",
	],
	attunement: true,
	prerequisite: "Requires attunement by a warforged",
	prereqeval: function (v) { return CurrentRace.known.indexOf("warforged") !== -1; },
	allowDuplicates: true,
	chooseGear: {
		type: "weapon",
		prefixOrSuffix: "brackets",
		descriptionChange: ["replace", "weapon"],
		excludeCheck: function (inObjKey, inObj) {
			return (!inObj.description || /two.{0,3}handed/i.test(inObj.description)) || (!inObj.range || !/melee/i.test(inObj.range));
		},
	},
}
MagicItemsList["belashyrra's beholder crown"] = {
	name: "Belashyrra's Beholder Crown",
	nameAlt: "Beholder Crown",
	source: [["E:RLW", 276]],
	type: "Wondrous Item",
	rarity: "Legendary",
	description: "This symbiotic crown of dark purple and mauve stone attaches to my skull and removing it requires ending a curse. It allows me to see normally in magical and normal Darkness (devil's sight) out to 120 ft. It has 10 charges, regaining 1d6+3 at dawn, which I can use to cast several spells with spell save DC 16.",
	descriptionLong: "This symbiotic crown of dark purple and mauve stone attaches to my skull once I attune to it and removing it requires ending a curse. It allows me to see normally in magical and normal Darkness (devil's sight) out to 120 ft. It has 10 charges, regaining 1d6+3 at dawn, which I can use to cast several spells with spell save DC 16. These are: *Charm Person* (1 charge), *Disintegrate* (6 charges), *Fear* (3 charges), *Finger of Death* (7 charges), *Flesh to Stone* (6 charges), *Hold Person* (2 charges), *Ray of Enfeeblement* (2 charges), *Sleep* (1 charge), *Slow* (3 charges), and *Telekinesis* (5 charges).",
	descriptionFull: [
		"This symbiotic crown is carved from dark purple and mauve stone, with ten points like stalks set with gemstones resembling the eyestalks of a beholder. To attune to this item, you must wear it on your head for the entire attunement period, during which the crown's hidden tendrils burrow into your scalp to bond with your skull.",
		"While wearing the crown, you can see normally in darkness, both magical and nonmagical, to a distance of 120 feet.",
		"***Spells***. The crown has 10 charges. While wearing it, you can use an action to expend some of its charges to cast one of the following spells from it (spell save DC 16): *charm person* (1 charge), *disintegrate* (6 charges), *fear* (3 charges), *finger of death* (7 charges), *flesh to stone* (6 charges), *hold person* (2 charges), *ray of enfeeblement* (2 charges), *sleep* (1 charge), *slow* (3 charges), *telekinesis* (5 charges).",
		"The crown regains 1d6 + 3 expended charges daily at dawn.",
		"***Symbiotic Nature***. The crown can't be removed from you while you're attuned to it, and you can't voluntarily end your attunement to it. If you're targeted by a spell that ends a curse, your attunement to the crown ends, and it detaches from you.",
		"The daelkyr Belashyrra made these crowns. While on the same plane of existence as the crown, Belashyrra can see through its eyestalks.",
	],
	attunement: true,
	usages: 10,
	recovery: "dawn",
	additional: "regains 1d6+3",
	fixedDC: 16,
	spellFirstColTitle: "Ch",
	spellcastingBonus: [{
		name: "1 charge",
		spells: ["charm person", "sleep"],
		selection: ["charm person", "sleep"],
		firstCol: 1,
		times: 2,
	}, {
		name: "2 charges",
		spells: ["hold person", "ray of enfeeblement"],
		selection: ["hold person", "ray of enfeeblement"],
		firstCol: 2,
		times: 2,
	}, {
		name: "3 charges",
		spells: ["fear", "slow"],
		selection: ["fear", "slow"],
		firstCol: 3,
		times: 2,
	}, {
		name: "5 charges",
		spells: ["telekinesis"],
		selection: ["telekinesis"],
		firstCol: 5,
	}, {
		name: "6 charges",
		spells: ["disintegrate", "flesh to stone"],
		selection: ["disintegrate", "flesh to stone"],
		firstCol: 6,
		times: 2,
	}, {
		name: "7 charges",
		spells: ["finger of death"],
		selection: ["finger of death"],
		firstCol: 7,
	}],
}
MagicItemsList["cleansing stone"] = {
	name: "Cleansing Stone",
	source: [["E:RLW", 276], ["WGtE", 115], ["UA:MIoE", 2]],
	type: "Wondrous Item",
	rarity: "Common",
	description: "This stone sphere is 1 ft in diameter and engraved with mystic sigils. As an action while touching it, I can activate it to remove dirt and grime from my garments and my person.",
	descriptionFull: [
		"A *cleansing stone* is a sphere 1 foot in diameter, engraved with mystic sigils. When touching the stone, you can use an action to activate it and remove dirt and grime from your garments and your person.",
		"Such stones are often embedded in pedestals in public squares in Aundair or in high-end Ghallanda inns.",
	],
	action: [["action", ""]],
	weight: 88, // using average marble/limestone density of 2.711 g/cm3
}
MagicItemsList["docent"] = {
	name: "Docent",
	source: [["E:RLW", 276]],
	type: "Wondrous Item",
	rarity: "Rare",
	description: "I can embed this sentient small metal sphere studded with dragonshards into my chest or eye socket. I can communicate telepathically with it and it uses my senses. It can serve me as an advisor and a translator. It knows 6 languages, a spell, an Intelligence skill, and can stabilize me. See Notes page.",
	descriptionFull: [
		"A *docent* is a small metal sphere, about 2 inches across, studded with dragonshards. To attune to a *docent*, you must embed the item somewhere on your body, such as your chest or your eye socket.",
		'***Sentience***. A *docent* is a sentient item of any alignment with an Intelligence of 16, a Wisdom of 14, and a Charisma of 14. It perceives the world through your senses. It communicates telepathically with you and can speak, read, and understand any language it knows (see "Random Properties" below).',
		"***Life Support***. Whenever you end your turn with 0 hit points, the *docent* can make a Wisdom (Medicine) check with a +6 bonus. If this check succeeds, the *docent* stabilizes you.",
		"***Random Properties***. A *docent* has the following properties:",
		" \u2022 **Languages**. The *docent* knows Common, Giant, and 1d4 additional languages chosen by the DM. If a *docent* knows fewer than six languages, it can learn a new language after it hears or reads the language through your senses.",
		" \u2022 **Skills**. The *docent* has a +7 bonus to one of the following skills (roll a d4): (1) Arcana, (2) History, (3) Investigation, or (4) Nature.",
		" \u2022 **Spells**. The *docent* knows one of the following spells and can cast it at will, requiring no components (roll a d6): (1\u20132) *Detect Evil and Good* or (3\u20136) *Detect Magic*. The *docent* decides when to cast the spell.",
		"***Personality***. A *docent* is designed to advise and assist the warforged it's attached to. One of the simple functions of a *docent* is to serve as a translator. The *docent*'s properties are under its control, and if you have a bad relationship with your *docent*, it might refuse to assist you.",
	],
	attunement: true,
	prerequisite: "Requires attunement by a warforged",
	prereqeval: function (v) { return CurrentRace.known.indexOf("warforged") !== -1; },
	toNotesPage: [
		{
			name: "Docent",
			useDescriptionFull: function (str) {
				return str.replace(/(stabilizes|assist) I\b/ig, "$1 me");
			},
		},
		Object.assign({}, sentientItemConflictNote, {
			amendTo: "The *docent* knows",
		}),
	],
}
MagicItemsList["dyrrn's tentacle whip"] = {
	name: "Dyrrn's Tentacle Whip",
	nameAlt: "Tentacle Whip",
	source: [["E:RLW", 276]],
	type: "Weapon (Whip)",
	rarity: "Very Rare",
	description: "This magic whip embeds itself in my arm once I attune to it and removing it requires ending a curse. The +2 Whip deals +1d6 Psychic damage, but has Disadvantage against Aberrations. On a roll of 20 to hit, the target is Stunned until the end of its next turn. As a Bonus Action, I can draw or sheath it in my arm.",
	descriptionFull: [
		"This long, whip-like strand of tough muscle bears a sharp stinger at one end. To attune to this symbiotic weapon, you wrap the whip around your wrist for the entire attunement period, during which time the whip painfully embeds its tendrils into your arm.",
		"You gain a +2 bonus to attack and damage rolls made with this magic whip, but attack rolls made against aberrations with this weapon have disadvantage. A creature hit by this weapon takes an extra 1d6 psychic damage. When you roll a 20 on the d20 for an attack roll with this weapon, the target is stunned until the end of its next turn.",
		"As a bonus action, you can sheathe the whip by causing it to retract into your arm, or draw the whip out of your arm again.",
		"***Symbiotic Nature***. The whip can't be removed from you while you're attuned to it, and you can't voluntarily end your attunement to it. If you're targeted by a spell that ends a curse, your attunement to the whip ends, and it detaches from you.",
	],
	attunement: true,
	weight: 3,
	action: [["bonus action", "Tentacle Whip (draw/sheath)"]],
	weaponOptions: [{
		baseWeapon: "whip",
		regExpSearch: /^(?=.*tentacle)(?=.*whip).*$/i,
		name: "Dyrrn's Tentacle Whip",
		source: [["E:RLW", 276]],
		description: "Finesse, Reach; +1d6 Psychic dmg; On 20 to hit: stun until its next turn ends; Disadv vs Aberrations",
		modifiers: [2, 2],
		selectNow: true,
	}],
}
MagicItemsList["earworm"] = {
	name: "Earworm",
	source: [["E:RLW", 277]],
	type: "Wondrous Item",
	rarity: "Uncommon",
	description: "This symbiont bonds to my skull once I attune to it and removing it to end the attunement requires ending a curse. It has 4 charges, regaining 1d4 at dawn, which I can use to cast *Detect Thoughts* (2 charges) or *Dissonant Whispers* (1 charge) with DC 15. It allows me to speak, read, and write Deep Speech.",
	descriptionFull: [
		"To attune to this symbiont, you must hold it against the skin behind your ear for the entire attunement period, whereupon it burrows into your head and bonds to your skull. While the *earworm* is inside you, you can speak, read, and write Deep Speech.",
		"***Spells***. The *earworm* has 4 charges. You can cast the following spells from it, expending the necessary number of charges (spell save DC 15): *detect thoughts* (2 charges) or *dissonant whispers* (1 charge). Each time you use the *earworm* to cast the *detect thoughts* spell, it sends the information gleaned to the nearest daelkyr, or to the next nearest *earworm* until it reaches a daelkyr.",
		"The *earworm* regains 1d4 expended charges daily at dawn.",
		"***Symbiotic Nature***. The *earworm* can't be removed from you while you're attuned to it, and you can't voluntarily end your attunement to it. If you're targeted by a spell that ends a curse, your attunement to the *earworm* ends, and it exits your body.",
	],
	attunement: true,
	languageProfs: ["Deep Speech"],
	usages: 4,
	recovery: "dawn",
	additional: "regains 1d4",
	fixedDC: 15,
	spellFirstColTitle: "Ch",
	spellcastingBonus: [{
		name: "1 charge",
		spells: ["dissonant whispers"],
		selection: ["dissonant whispers"],
		firstCol: 1,
	}, {
		name: "2 charges",
		spells: ["detect thoughts"],
		selection: ["detect thoughts"],
		firstCol: 2,
	}],
}
MagicItemsList["everbright lantern"] = {
	name: "Everbright Lantern",
	source: [["E:RLW", 277], ["WGtE", 115], ["UA:MIoE", 2]],
	type: "Wondrous Item",
	rarity: "Common",
	description: "This bullseye lantern is powered by a dragonshard that sheds light comparable to that produced by a *Continual Flame* spell. The light never goes out, but it can be shuttered off. It sheds light in a 120-ft Cone; the closest 60 ft is Bright Light, and the farthest 60 ft is Dim Light.",
	descriptionFull: "This bullseye lantern contains an Eberron dragonshard that sheds light comparable to that produced by a *continual flame* spell. An *everbright lantern* sheds light in a 120-foot cone; the closest 60 feet is bright light, and the farthest 60 feet is dim light.",
	weight: 2,
}
MagicItemsList["feather token"] = {
	name: "Feather Token",
	source: [["E:RLW", 277]],
	type: "Wondrous Item",
	rarity: "Common",
	description: "This small metal disk is inscribed with the image of a feather. When I fall at least 20 ft while the token is on my person, I descend 60 ft per round and take no damage from falling. The token's magic is expended after landing, whereupon the disk becomes nonmagical.",
	descriptionFull: "This small metal disk is inscribed with the image of a feather. When you fall at least 20 feet while the token is on your person, you descend 60 feet per round and take no damage from falling. The token's magic is expended after you land, whereupon the disk becomes nonmagical.",
}
MagicItemsList["finder's goggles"] = {
	name: "Finder's Goggles",
	source: [["E:RLW", 277]],
	type: "Wondrous Item",
	rarity: "Uncommon",
	description: "These goggles with dragonshard lenses grant me +1d4 on Wis (Insight) checks. As an action once per dawn, I can use them to find the last creature to touch an object with a Wis (Insight) check DC 13 + days since last contact. I learn the creature's type and can immediately cast *Locate Creature* to find the creature.",
	descriptionFull: [
		"The lenses of these garish goggles are carved from Siberys dragonshards. While wearing these lenses, you gain the following benefits:",
		" \u2022 When you make a Wisdom (Insight) check, you can roll a d4 and add the number rolled to the check.",
		" \u2022 As an action, you can use the goggles to examine an object to identify the aura of the last creature that touched it. Make a Wisdom (Insight) check against a DC of 13 + the number of days since the last contact occurred. On a success, you learn the creature's type and can immediately use the goggles to cast *locate creature* to find that creature. This property can't be used again until the next dawn.",
	],
	action: [["action", ""]],
	attunement: true,
	prerequisite: "Requires attunement by a creature with the Dragonmark of Finding",
	prereqeval: function (v) {
		return CurrentRace.variant.indexOf("mark of finding") !== -1 || CurrentFeats.known.indexOf("mark of finding") !== -1;
	},
	action: [["action", " (examine object)"]],
	usages: 1,
	recovery: "dawn",
	additional: "examine object",
	spellcastingBonus: [{
		name: "After examining object",
		spells: ["locate creature"],
		selection: ["locate creature"],
		firstCol: "Sp",
	}],
}
MagicItemsList["glamerweave"] = {
	name: "Glamerweave",
	source: [["E:RLW", 277]],
	type: "Wondrous Item",
	description: "Glamerweave is clothing imbued with harmless illusory magic. As a Bonus Action while wearing these clothes, I can turn the pattern within the cloth into a moving illusory pattern. For the uncommon version, this pattern extends beyond the cloth and gives me +1d4 on a Performance or Persuasion check.",
	descriptionFull: [
		"*Glamerweave* is clothing imbued with harmless illusory magic. While wearing the common version of these clothes, you can use a bonus action to create a moving illusory pattern within the cloth.",
		"*Uncommon glamerweave* can have the pattern rise from the cloth. For example, a *glamerweave* gown might be wreathed in harmless, illusory flames, while a *glamerweave* hat might have illusory butterflies fluttering around it.",
		"When you make a Charisma (Performance) or Charisma (Persuasion) check while wearing the uncommon version of *glamerweave*, you can roll a d4 and add the number rolled to the check. Once you use this property, it can't be used again until the next dawn. ",
	],
	action: [["bonus action", ""]],
	choices: ["Common (moving illusory pattern)", "Uncommon (pattern rises from the cloth)"],
	"common (moving illusory pattern)": {
		name: "Glamerweave ",
		rarity: "Common",
		description: "Glamerweave is clothing imbued with harmless illusory magic. As a Bonus Action while wearing these clothes, I can create a moving illusory pattern within the cloth.",
		descriptionFull: "*Glamerweave* is clothing imbued with harmless illusory magic. While wearing the common version of these clothes, you can use a bonus action to create a moving illusory pattern within the cloth.",
	},
	"uncommon (pattern rises from the cloth)": {
		name: "Uncommon Glamerweave",
		rarity: "Uncommon",
		description: "Glamerweave is clothing imbued with harmless illusory magic. As a Bonus Action while wearing these clothes, I can have the pattern within them rise as an illusory visage (e.g. wreathed in flames). Once per dawn, I can use this to give me +1d4 on a Charisma (Performance) or Charisma (Persuasion) check.",
		descriptionFull: [
			"*Glamerweave* is clothing imbued with harmless illusory magic. While wearing these clothes, you can use a bonus action to create a moving illusory pattern within the cloth.",
			"You can have the pattern rise from the cloth. For example, a *glamerweave* gown might be wreathed in harmless, illusory flames, while a *glamerweave* hat might have illusory butterflies fluttering around it.",
			"When you make a Charisma (Performance) or Charisma (Persuasion) check while wearing the *glamerweave*, you can roll a d4 and add the number rolled to the check. Once you use this property, it can't be used again until the next dawn.",
		],
		usages: 1,
		recovery: "dawn",
	},
}
MagicItemsList["imbued wood focus"] = {
	// Note that this item is implemented here against RAW,
	// because according to PHB page 203 a spellcasting focus can only be used for
	// spells with a material component that is neither costly nor consumed.
	// See also https://dnd.wizards.com/articles/sage-advice/rules-spellcasting
	// This would mean that the Imbued Wood Focus in only useful for a limited number of spells.
	// Instead, this code just applies the damage bonus to all damage spells that roll for their damage.
	name: "Imbued Wood Focus",
	source: [["E:RLW", 277], ["WGtE", 114], ["UA:MIoE", 1]],
	type: "Wondrous Item",
	rarity: "Common",
	description: "This rod, wand, or staff is cut from a tree infused with extraplanar energy. I can use it as spellcasting focus for all my spells. If I do so, spells I cast that deal the associated damage type add a +1 bonus to one of their damage rolls.",
	descriptionFull: [
		"An *imbued wood focus* is a rod, staff, or wand cut from a tree infused with extraplanar energy. If you're a spellcaster, you can use this orb as a spellcasting focus.",
		"When you cast a damage-dealing spell using this item as your spellcasting focus, you gain a +1 bonus to one damage roll of the spell, provided the damage is of the type associated with the item's wood. The types of wood and their associated damage types are listed in the table below.",
		[
			["Wood", "", "", "Damage Type"],
			["Fernian Ash", "", "Fire"],
			["Irian Rosewood", "", "Radiant"],
			["Kythrian Manchineel  ", "Acid or Poison"],
			["Lamannian Oak", "", "Lightning or Thunder"],
			["Mabaran Ebony", "", "Necrotic"],
			["Risian Pine", "", "Cold"],
			["Shavarran Birch", "", "Force"],
			["Xorian Wenge", "", "Psychic"],
		],
	],
	attunement: true,
	allowDuplicates: true,
	weight: 2,
	choices: ["Fernian Ash (Fire)", "Irian Rosewood (Radiant)", "Kythrian Manchineel (Acid and Poison)", "Lamannian Oak (Lightning and Thunder)", "Mabaran Ebony (Necrotic)", "Risian Pine (Cold)", "Shavarran Birch (Force)", "Xorian Wenge (Psychic)"],
	"fernian ash (fire)": {
		name: "Fernian Ash Rod, Wand, or Staff",
		sortname: "Imbued Wood Focus, Fernian Ash (Fire)",
		nameTest: /^(?=.*fernian)(?=.*ash)(?=.*(rod|wand|staff)).*$/i,
		description: "This rod, wand, or staff made of Fernian ash, wood infused with extraplanar energy. I can use it as spellcasting focus for all my spells. If I do so, spells I cast that deal Fire damage add a +1 bonus to one of their damage rolls.",
		calcChanges: {
			atkCalc: [
				function (fields, v, output) {
					if (v.thisWeapon[3] && /fire/i.test(fields.Damage_Type)) output.extraDmg += 1;
				},
				"When I use this as my spellcasting focus, spells I cast that deal Fire damage get a +1 bonus added to one of their damage rolls.",
			],
			spellAdd: [
				function (spellKey, spellObj, spName) {
					if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "fire", 1, true, true);
				},
				"When I use this as my spellcasting focus, spells I cast that deal Fire damage get a +1 bonus added to one of their damage rolls.",
			],
		},
	},
	"irian rosewood (radiant)": {
		name: "Irian Rosewood Rod, Wand, or Staff",
		sortname: "Imbued Wood Focus, Irian Rosewood (Radiant)",
		nameTest: /^(?=.*irian)(?=.*rosewood)(?=.*(rod|wand|staff)).*$/i,
		description: "This rod, wand, or staff made of Irian rosewood, wood infused with extraplanar energy. I can use it as spellcasting focus for all my spells. If I do so, spells I cast that deal Radiant damage add a +1 bonus to one of their damage rolls.",
		calcChanges: {
			atkCalc: [
				function (fields, v, output) {
					if (v.thisWeapon[3] && /radiant/i.test(fields.Damage_Type)) output.extraDmg += 1;
				},
				"When I use this as my spellcasting focus, spells I cast that deal Radiant damage get a +1 bonus added to one of their damage rolls.",
			],
			spellAdd: [
				function (spellKey, spellObj, spName) {
					if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "radiant", 1, true, true);
				},
				"When I use this as my spellcasting focus, spells I cast that deal Radiant damage get a +1 bonus added to one of their damage rolls.",
			],
		},
	},
	"kythrian manchineel (acid and poison)": {
		name: "Kythrian Manchineel Rod, Wand, or Staff",
		sortname: "Imbued Wood Focus, Kythrian Manchineel (Acid and Poison)",
		nameTest: /^(?=.*kythrian)(?=.*manchineel)(?=.*(rod|wand|staff)).*$/i,
		description: "This rod, wand, or staff made of Kythrian manchineel, wood infused with extraplanar energy. I can use it as spellcasting focus for all my spells. If I do so, spells I cast that deal Acid or Poison damage add a +1 bonus to one of their damage rolls.",
		calcChanges: {
			atkCalc: [
				function (fields, v, output) {
					if (v.thisWeapon[3] && /acid|poison/i.test(fields.Damage_Type)) output.extraDmg += 1;
				},
				"When I use this as my spellcasting focus, spells I cast that deal Acid or Poison damage get a +1 bonus added to one of their damage rolls.",
			],
			spellAdd: [
				function (spellKey, spellObj, spName) {
					if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "acid|poison", 1, true, true);
				},
				"When I use this as my spellcasting focus, spells I cast that deal Acid or Poison damage get a +1 bonus added to one of their damage rolls.",
			],
		},
	},
	"lamannian oak (lightning and thunder)": {
		name: "Lamannian Oak Rod, Wand, or Staff",
		sortname: "Imbued Wood Focus, Lamannian Oak (Lightning and Thunder)",
		nameTest: /^(?=.*lamannian)(?=.*oak)(?=.*(rod|wand|staff)).*$/i,
		description: "This rod, wand, or staff made of Lamannian oak, wood infused with extraplanar energy. I can use it as spellcasting focus for all my spells. If I do so, spells I cast that deal Lightning or Thunder damage add a +1 bonus to one of their damage rolls.",
		calcChanges: {
			atkCalc: [
				function (fields, v, output) {
					if (v.thisWeapon[3] && /lightning|lightn\.?|thunder/i.test(fields.Damage_Type)) output.extraDmg += 1;
				},
				"When I use this as my spellcasting focus, spells I cast that deal Lightning or Thunder damage get a +1 bonus added to one of their damage rolls.",
			],
			spellAdd: [
				function (spellKey, spellObj, spName) {
					if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "lightning|lightn\\.?|thunder", 1, true, true);
				},
				"When I use this as my spellcasting focus, spells I cast that deal Lightning or Thunder damage get a +1 bonus added to one of their damage rolls.",
			],
		},
	},
	"mabaran ebony (necrotic)": {
		name: "Mabaran Ebony Rod, Wand, or Staff",
		sortname: "Imbued Wood Focus, Mabaran Ebony (Necrotic)",
		nameTest: /^(?=.*mabaran)(?=.*ebony)(?=.*(rod|wand|staff)).*$/i,
		description: "This rod, wand, or staff made of Mabaran ebony, wood infused with extraplanar energy. I can use it as spellcasting focus for all my spells. If I do so, spells I cast that deal Necrotic damage add a +1 bonus to one of their damage rolls.",
		calcChanges: {
			atkCalc: [
				function (fields, v, output) {
					if (v.thisWeapon[3] && /necrotic/i.test(fields.Damage_Type)) output.extraDmg += 1;
				},
				"When I use this as my spellcasting focus, spells I cast that deal Necrotic damage get a +1 bonus added to one of their damage rolls.",
			],
			spellAdd: [
				function (spellKey, spellObj, spName) {
					if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "necro\\.?|necrotic", 1, true, true);
				},
				"When I use this as my spellcasting focus, spells I cast that deal Necrotic damage get a +1 bonus added to one of their damage rolls.",
			],
		},
	},
	"risian pine (cold)": {
		name: "Risian Pine Rod, Wand, or Staff",
		sortname: "Imbued Wood Focus, Risian Pine (Cold)",
		nameTest: /^(?=.*risian)(?=.*pine)(?=.*(rod|wand|staff)).*$/i,
		description: "This rod, wand, or staff made of Risian pine, wood infused with extraplanar energy. I can use it as spellcasting focus for all my spells. If I do so, spells I cast that deal Cold damage add a +1 bonus to one of their damage rolls.",
		calcChanges: {
			atkCalc: [
				function (fields, v, output) {
					if (v.thisWeapon[3] && /cold/i.test(fields.Damage_Type)) output.extraDmg += 1;
				},
				"When I use this as my spellcasting focus, spells I cast that deal Cold damage get a +1 bonus added to one of their damage rolls.",
			],
			spellAdd: [
				function (spellKey, spellObj, spName) {
					if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "cold", 1, true, true);
				},
				"When I use this as my spellcasting focus, spells I cast that deal Cold damage get a +1 bonus added to one of their damage rolls.",
			],
		},
	},
	"shavarran birch (force)": {
		name: "Shavarran Birch Rod, Wand, or Staff",
		sortname: "Imbued Wood Focus, Shavarran Birch (Force)",
		nameTest: /^(?=.*shavarran)(?=.*birch)(?=.*(rod|wand|staff)).*$/i,
		description: "This rod, wand, or staff made of Shavarran birch, wood infused with extraplanar energy. I can use it as spellcasting focus for all my spells. If I do so, spells I cast that deal Force damage add a +1 bonus to one of their damage rolls.",
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					if (v.thisWeapon[3] && v.thisWeapon[3] == "eldritch blast") {
						fields.Description += (fields.Description ? "; " : "") + "One ray +1 dmg";
					}
				},
				"When I use this as my spellcasting focus, spells I cast that deal Force damage get a +1 bonus added to one of their damage rolls.",
			],
			atkCalc: [
				function (fields, v, output) {
					if (v.thisWeapon[3] && v.thisWeapon[3] != "eldritch blast" && /force/i.test(fields.Damage_Type)) output.extraDmg += 1;
				},
			],
			spellAdd: [
				function (spellKey, spellObj, spName) {
					if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "force", 1, true, true);
				},
				"When I use this as my spellcasting focus, spells I cast that deal Force damage get a +1 bonus added to one of their damage rolls.",
			],
		},
	},
	"xorian wenge (psychic)": {
		name: "Xorian Wenge Rod, Wand, or Staff",
		sortname: "Imbued Wood Focus, Xorian Wenge (Psychic)",
		nameTest: /^(?=.*xorian)(?=.*wenge)(?=.*(rod|wand|staff)).*$/i,
		description: "This rod, wand, or staff made of Xorian wenge, wood infused with extraplanar energy. I can use it as spellcasting focus for all my spells. If I do so, spells I cast that deal Psychic damage add a +1 bonus to one of their damage rolls.",
		calcChanges: {
			atkCalc: [
				function (fields, v, output) {
					if (v.thisWeapon[3] && /psychic/i.test(fields.Damage_Type)) output.extraDmg += 1;
				},
				"When I use this as my spellcasting focus, spells I cast that deal Psychic damage get a +1 bonus added to one of their damage rolls.",
			],
			spellAdd: [
				function (spellKey, spellObj, spName) {
					if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "psychic", 1, true, true);
				},
				"When I use this as my spellcasting focus, spells I cast that deal Psychic damage get a +1 bonus added to one of their damage rolls.",
			],
		},
	},
}
MagicItemsList["keycharm"] = {
	name: "Keycharm",
	source: [["E:RLW", 277]],
	type: "Wondrous Item",
	rarity: "Common",
	description: "When I cast *Alarm*, *Arcane Lock*, or *Glyph of Warding*, I can tie the effect to the keycharm. Its holder receives the notification from *Alarm*, bypasses the *Arcane Lock*, or avoids triggering the *Glyph of Warding*. It can have up to 3 tied spells at one time. As an action, the holder can speak the command to end a tied spell.",
	descriptionFull: "This small stylized key plays a vital role in the work of House Kundarak. If you cast the *alarm*, *arcane lock*, or *glyph of warding* spell, you can tie the effect to the *keycharm* so that whoever holds it receives the notification from the *alarm* spell, bypasses the lock of the *arcane lock* spell, or avoids triggering the glyph placed by the *glyph of warding* spell. In addition, the holder (who needn't be attuned to the item) can take an action to end any one spell tied to it, provided the holder knows the command word you set for ending the tied spells. The *keycharm* can have up to three tied spells at one time.",
	attunement: true,
	prerequisite: "Requires attunement by a creature with the Dragonmark of Warding",
	prereqeval: function (v) {
		return CurrentRace.variant.indexOf("mark of warding") !== -1 || CurrentFeats.known.indexOf("mark of warding") !== -1;
	},
}
MagicItemsList["kyrzin's ooze"] = {
	name: "Kyrzin's Ooze",
	source: [["E:RLW", 278]],
	type: "Wondrous Item",
	rarity: "Very Rare",
	description: "Once I attune to this opalescent goo by drinking it, it can only be removed by ending a curse. It gives me Resistance to Acid and Poison damage and Immunity to the Poisoned condition. Each as an action once per dawn, I can exhale acid breath or become amorphous for 1 minute along with my equipment.",
	descriptionLong: "I can only attune to this opalescent, symbiotic goo by drinking it. I can't remove it or end the attunement voluntarily, but it seeps out of me if the curse is removed. It gives me Resistance to Acid and Poison damage and Immunity to the Poisoned condition. As an action once per dawn, I can become amorphous for 1 minute along with my equipment and can move through a space as narrow as 1 inch wide. As an action once per dawn, I can exhale a 30-ft Line, 5-ft wide acid breath that deals 8d8 Acid damage (Dexterity save DC 15 halves). If I die while it is inside me, it turns my corpse into a black pudding.",
	descriptionFull: [
		"This opalescent, symbiotic goo comes sealed in a jar and slowly shifts and moves, as if endlessly exploring the jar's interior. To attune to this item, you must first drink the contents of the jar, unlocking the following properties.",
		"***Resistant***. While attuned to *Kyrzin's ooze*, you have resistance to poison and acid damage, and you're immune to the poisoned condition.",
		"***Amorphous***. As an action, you can speak a command word and cause your body to assume the amorphous qualities of an ooze. For the next minute, you (along with any equipment you're wearing or carrying) can move through a space as narrow as 1 inch wide without squeezing. Once you use this property, it can't be used again until the next dawn.",
		"***Acid Breath***. As an action, you can exhale acid in a 30-foot line that is 5 feet wide. Each creature in that line must make a DC 15 Dexterity saving throw, taking 36 (8d8) acid damage on a failed save, or half as much damage on a successful one. Once you use this property, it can't be used again until the next dawn.",
		"***Symbiotic Nature***. The ooze can't be removed from you while you're attuned to it, and you can't voluntarily end your attunement to it. If you're targeted by a spell that ends a curse, your attunement to the ooze ends, as it seeps out of you.",
		"If you die while the ooze is inside you, it bursts out and engulfs you, turning your corpse into a black pudding allied with the daelkyr.",
	],
	attunement: true,
	dmgres: ["Acid", "Poison"],
	savetxt: { immune: ["Poisoned"] },
	action: [["action", " (amorphous/acid breath)"]],
	extraLimitedFeatures: [{
		name: "Kyrzin's Ooze [Amorphous]",
		usages: 1,
		recovery: "dawn",
	}, {
		name: "Kyrzin's Ooze [Acid Breath]",
		usages: 1,
		recovery: "dawn",
	}],
	weaponOptions: [{
		regExpSearch: /^(?=.*ooze)(?=.*acid)(?=.*breath).*$/i,
		name: "Kyrzin's Ooze Acid Breath",
		source: [["E:RLW", 278]],
		ability: 0,
		type: "Magic Item",
		damage: [8, 8, "acid"],
		range: "5-ft \xD7 30-ft Line",
		description: "Hits all in area; Dex save, success - half damage; Usable only once per dawn",
		abilitytodamage: false,
		dc: true,
		modifiers: [7, ""],
		selectNow: true,
	}],
}
MagicItemsList["living armor"] = {
	name: "Living Armor",
	nameTest: /living.*armou?r/i,
	source: [["E:RLW", 278]],
	type: "Armor (Any)",
	rarity: "Very Rare",
	description: "This armor of black chitin attaches itself to me once I attune to it and removing it requires ending a curse. It gives me +1 AC and Resistance to Necrotic, Poison, and Psychic damage. Whenever I finish a Long Rest, I must either feed it half my remaining HD (rounding up) or take 1 level of Exhaustion.",
	descriptionFull: [
		"This hideous armor is formed from black chitin, beneath which veins pulse and red sinews glisten. To attune to this item, you must wear it for the entire attunement period, during which tendrils on the inside burrow into you.",
		"While wearing this armor, you have a +1 bonus to Armor Class, and you have resistance to the following damage types: necrotic, poison, and psychic.",
		"***Symbiotic Nature***. The armor can't be removed from you while you're attuned to it, and you can't voluntarily end your attunement to it. If you're targeted by a spell that ends a curse, your attunement to the armor ends, and it detaches from you.",
		"The armor requires fresh blood be fed to it. Immediately after you finish any long rest, you must either feed half of your remaining Hit Dice to the armor (round up) or take 1 level of exhaustion.",
	],
	attunement: true,
	dmgres: ["Necrotic", "Poison", "Psychic"],
	chooseGear: {
		type: "armor",
		prefixOrSuffix: ["between", "Living", "Armor"],
		descriptionChange: ["replace", "armor"],
		itemName1stPage: ["suffix", "+1 Living"],
	},
}
MagicItemsList["living gloves"] = {
	name: "Living Gloves",
	source: [["E:RLW", 278]],
	type: "Wondrous Item",
	rarity: "Uncommon",
	description: "These gloves made of thin chitin and sinew bond with my skin once I attune to them and removing them requires ending a curse. Once I attune to them, I can choose to become proficient and gain Expertise with either Sleight of Hand, thieves' tools, or an artisan's tools or musical instrument of my choice.",
	descriptionFull: [
		"These symbiotic gloves\u2014made of thin chitin and sinew\u2014pulse with a life of their own. To attune to them, you must wear them for the entire attunement period, during which the gloves bond with your skin.",
		"While attuned to these gloves, you gain one of the following proficiencies (your choice when you attune to the gloves):",
		" \u2022 Sleight of Hand",
		" \u2022 Thieves' tools",
		" \u2022 One kind of artisan's tools of your choice",
		" \u2022 One kind of musical instrument of your choice",
		"When you make an ability check using the chosen proficiency, you add double your proficiency bonus to the check, instead of your normal proficiency bonus.",
		"***Symbiotic Nature***. The gloves can't be removed from you while you're attuned to them, and you can't voluntarily end your attunement to them. If you're targeted by a spell that ends a curse, your attunement to the gloves ends, and they can be removed.",
	],
	attunement: true,
	choices: ["Proficiency and Expertise with Sleight of Hand", "Proficiency and Expertise with Thieves' Tools", "Proficiency and Expertise with chosen artisan's tools", "Proficiency and Expertise with chosen musical instrument"],
	choicesNotInMenu: true,
	"proficiency and expertise with sleight of hand": {
		name: "Living Gloves [Sleight of Hand]",
		description: "These symbiotic gloves made of thin chitin and sinew bond with my skin once I attune to them. Removing them requires ending a curse, I can't do so or end the attunement voluntarily. They give me proficiency and Expertise with Sleight of Hand.",
		skills: [["Sleight of Hand", "full"]],
	},
	"proficiency and expertise with thieves' tools": {
		name: "Living Gloves [Thieves' Tools]",
		description: "These symbiotic gloves made of thin chitin and sinew bond with my skin once I attune to them. Removing them requires ending a curse, I can't do so or end the attunement voluntarily. They give me proficiency and Expertise with thieves' tools.",
		toolProfs: [["Thieves' tools", "Dex"]],
		eval: function () {
			if (/thieve.?s.*tools/i.test(What("Too Text"))) {
				Checkbox("Too Exp", true);
			};
		},
		removeeval: function () {
			if (/thieve.?s.*tools/i.test(What("Too Text"))) {
				Checkbox("Too Exp", false);
			};
		},
	},
	"proficiency and expertise with chosen artisan's tools": {
		name: "Living Gloves [Artisan's Tools]",
		description: "These symbiotic gloves made of thin chitin and sinew bond with my skin once I attune to them. Removing them requires ending a curse, I can't do so or end the attunement voluntarily. They give me proficiency and Expertise with a set of artisan's tools of my choice (chosen when I attune to them).",
		toolProfs: [["Artisan's tools", 1]],
	},
	"proficiency and expertise with chosen musical instrument": {
		name: "Living Gloves [Musical Instrument]",
		description: "These symbiotic gloves made of thin chitin and sinew bond with my skin once I attune to them. Removing them requires ending a curse, I can't do so or end the attunement voluntarily. They give me proficiency and Expertise with a musical instrument of my choice (chosen when I attune to them).",
		toolProfs: [["Musical instrument", 1]],
	},
}
MagicItemsList["orb of shielding"] = {
	name: "Orb of Shielding",
	source: [["E:RLW", 278], ["WGtE", 114], ["UA:MIoE", 1]],
	type: "Wondrous Item",
	rarity: "Common",
	description: "An orb of shielding is made from crystal or stone aligned to one of the planes. I can use it as my spellcasting focus. While I am holding the orb and take damage of the type associated with the material the orb is made from, I can use my Reaction to reduce the damage by 1d4 (to a minimum of 0).",
	descriptionFull: [
		"An *orb of shielding* is a polished, spherical chunk of crystal or stone aligned to one of the planes of existence. If you're a spellcaster, you can use this orb as a spellcasting focus.",
		"If you're holding the orb when you take damage of the type associated with the orb's material, you can use your reaction to reduce the damage by 1d4 (to a minimum of 0). The materials and their associated damage types are listed in the Orb of Shielding table.",
		[
			["Planar Material", "Damage Type"],
			["Fernian Basalt", "", "Fire"],
			["Irian Quartz", "", "Radiant"],
			["Kythrian Skarn", "", "Acid or Poison"],
			["Lamannian Flint", "", "Lightning or Thunder"],
			["Mabaran Obsidian      ", "Necrotic"],
			["Risian Shale", "", "Cold"],
			["Shavarran Chert", "", "Force"],
			["Xorian Marble", "", "Psychic"],
		],
	],
	attunement: true,
	allowDuplicates: true,
	weight: 3,
	action: [["reaction", ""]],
	choices: ["Fernian Basalt (Fire)", "Irian Quartz (Radiant)", "Kythrian Skarn (Acid or Poison)", "Lamannian Flint (Lightning or Thunder)", "Mabaran Obsidian (Necrotic)", "Risian Shale (Cold)", "Shavaran Chert (Force)", "Xorian Marble (Psychic)"],
	"fernian basalt (fire)": {
		name: "Orb of Shielding [Fernian Basalt]",
		description: "This stone orb is made from fernian basalt. I can use it as my spellcasting focus. As a Reaction while I am holding the orb and take Fire damage, I can reduce the damage by 1d4 (to a minimum of 0).",
	},
	"irian quartz (radiant)": {
		name: "Orb of Shielding [Irian Quartz]",
		description: "This crystal orb is made from irian quartz. I can use it as my spellcasting focus. As a Reaction while I am holding the orb and take Radiant damage, I can reduce the damage by 1d4 (to a minimum of 0).",
	},
	"kythrian skarn (acid or poison)": {
		name: "Orb of Shielding [Kythrian Skarn]",
		description: "This stone orb is made from kythrian skarn. I can use it as my spellcasting focus. As a Reaction while I am holding the orb and take Acid or Poison damage, I can reduce the damage by 1d4 (to a minimum of 0).",
	},
	"lamannian flint (lightning or thunder)": {
		name: "Orb of Shielding [Lamannian Flint]",
		description: "This stone orb is made from lamannian flint. I can use it as my spellcasting focus. As a Reaction while I am holding the orb and take Lightning or Thunder damage, I can reduce the damage by 1d4 (to a minimum of 0).",
	},
	"mabaran obsidian (necrotic)": {
		name: "Orb of Shielding [Mabaran Obsidian]",
		description: "This crystal orb is made from mabaran obsidian. I can use it as my spellcasting focus. As a Reaction while I am holding the orb and take Necrotic damage, I can reduce the damage by 1d4 (to a minimum of 0).",
	},
	"risian shale (cold)": {
		name: "Orb of Shielding [Risian Shale]",
		description: "This stone orb is made from risian shale. I can use it as my spellcasting focus. As a Reaction while I am holding the orb and take Cold damage, I can reduce the damage by 1d4 (to a minimum of 0).",
	},
	"shavaran chert (force)": {
		name: "Orb of Shielding [Shavaran Chert]",
		description: "This stone orb is made from shavaran chert. I can use it as my spellcasting focus. As a Reaction while I am holding the orb and take Force damage, I can reduce the damage by 1d4 (to a minimum of 0).",
	},
	"xorian marble (psychic)": {
		name: "Orb of Shielding [Xorian Marble]",
		description: "This stone orb is made from xorian marble. I can use it as my spellcasting focus. As a Reaction while I am holding the orb and take Psychic damage, I can reduce the damage by 1d4 (to a minimum of 0).",
	},
}
MagicItemsList["scribe's pen"] = {
	name: "Scribe's Pen",
	source: [["E:RLW", 278]],
	type: "Wondrous Item",
	rarity: "Common",
	description: "I can use this pen to write on any surface. I decide whether the writing is visible or invisible, but it is always visible to creatures with the Mark of Scribing. As an action, I or others with the Mark of Scribing can touch the writing and make it visible to all. Writing on creatures other than Constructs fades after 7 days.",
	descriptionFull: [
		"You can use this pen to write on any surface. You decide whether the writing is visible or invisible, but the writing is always visible to a person with the Mark of Scribing.",
		"Any creature with the Mark of Scribing can use an action to touch the invisible writing, making it visible to all.",
		"If you use the pen to write on a creature that isn't a construct, the writing fades after 7 days.",
	],
	attunement: true,
	prerequisite: "Requires attunement by a creature with the Dragonmark of Scribing",
	prereqeval: function (v) {
		return CurrentRace.variant.indexOf("mark of scribing") !== -1 || CurrentFeats.known.indexOf("mark of scribing") !== -1;
	},
}
MagicItemsList["shiftweave"] = {
	name: "Shiftweave",
	source: [["E:RLW", 279]],
	type: "Wondrous Item",
	rarity: "Common",
	description: "Up to five different outfits are embedded into these clothes. As a Bonus Action, I can speak its command word to transform the outfit into one of the other designs contained within. Regardless of its appearance, the outfit can't be anything but clothing or gain properties of other magical clothing.",
	descriptionFull: "When a suit of *shiftweave* is created, up to five different outfits can be embedded into the cloth. While wearing the clothing, you can speak its command word as a bonus action to transform your outfit into your choice of one of the other designs contained within it. Regardless of its appearance, the outfit can't be anything but clothing. Although it can duplicate the look of other magical clothing, it doesn't gain their magical properties.",
	action: [["bonus action", ""]],
}
MagicItemsList["speaking stone"] = {
	name: "Speaking Stone",
	source: [["E:RLW", 279]],
	type: "Wondrous Item",
	rarity: "Very Rare",
	description: "This dragonshard is inscribed with arcane symbols that uniquely identify it. By touching it, I can cast *Sending* to any other speaking stone whose location or unique sequence of symbols I know. A creature within 5 ft of the receiving speaking stone hears the message as if they were the target of the *Sending*.",
	descriptionFull: [
		"The key to long-distance, virtually instantaneous communication across Khorvaire is House Sivis's network of message stations. Each station contains at least one *speaking stone*, which is carved from a Siberys dragonshard and inscribed with arcane symbols that uniquely identify it. If you're a gnome with the Mark of Scribing, you can touch the stone and use an action to cast the *sending* spell from it. The target is any other *speaking stone* whose location or unique sequence of symbols you know. A creature within 5 feet of the stone hears the message as if they were the target.",
		"In a Sivis message station, a gnome is always on duty by the *speaking stone*, listening for messages that might come in and transcribing them for delivery to their intended recipients.",
	],
	prerequisite: "Can only be used by a gnome with the Dragonmark of Scribing",
	prereqeval: function (v) {
		return CurrentRace.variant.indexOf("mark of scribing") !== -1 || CurrentFeats.known.indexOf("mark of scribing") !== -1;
	},
	spellcastingBonus: [{
		name: "At will",
		spells: ["sending"],
		selection: ["sending"],
		firstCol: "atwill",
	}],
}
MagicItemsList["spellshard"] = {
	name: "Spellshard",
	source: [["E:RLW", 279], ["WGtE", 115], ["UA:MIoE", 3]],
	type: "Wondrous Item",
	rarity: "Common",
	description: "This dragonshard can store up to 320 pages of text or spells. As an action while holding it (and speaking its passphrase if it has one), I can open my mind to its content and concentrate on it to subsequently read from and write to it in the same amount of time as a normal book (same cost as a normal spellbook).",
	descriptionFull: [
		"This polished Eberron dragonshard fits in the hand and stores information similar to a book. The shard can hold the equivalent of one book that's no more than 320 pages long. A shard can be created blank or already filled with information. When the shard is created, the creator can set a passphrase that must be spoken to access the information stored within.",
		"While holding the shard, you can use an action to open your mind to the shard, seeing its content in your mind. On subsequent rounds, reading the text or scribing new text on blank \"pages\" in the shard requires concentration (as if concentrating on a spell) and takes the same amount of time it takes you to read and write normally. Thinking of a particular phrase or topic draws you to the first section in the shard that addresses it.",
		"A wizard can use a *spellshard* as a spellbook, with the usual cost in gold and time to \"scribe\" a spell into the shard.",
	],
	action: [["action", ""]],
}
MagicItemsList["ventilating lungs"] = {
	name: "Ventilating Lungs",
	source: [["E:RLW", 279]],
	type: "Wondrous Item",
	rarity: "Very Rare",
	description: "These lungs replace those in my chest while I'm attuned to them. Their function can't be suppressed by (anti)magic. They allow me to breathe normally in any environment and give me Advantage on saves against harmful gases and vapors. Once per dawn, I can use them to cast *Gust of Wind* (save DC 15) by exhaling.",
	descriptionFull: [
		"These metallic nodules were created in response to the poisonous gases used on the battlefields of the Last War. When you attune to these lungs, they replace the lungs in your chest, which disappear. The lungs allow you to breathe normally, even in an *antimagic field*, and their breathing function can't be suppressed by magic.",
		"Outside an *antimagic field* or any other effect that suppresses magic, these lungs allow you to breathe normally in any environment (including a vacuum), and you have advantage on saving throws against harmful gases such as those created by a *cloudkill* spell, a *stinking cloud* spell, inhaled poisons, and gaseous breath weapons.",
		"As an action, you can use these lungs to exhale a *gust of wind*, as if you had cast the *gust of wind* spell (spell save DC 15) with no components. This property of the lungs can't be used again until the next dawn.",
		"If your attunement to the lungs ends, your original lungs reappear.",
	],
	attunement: true,
	fixedDC: 15,
	spellcastingBonus: [{
		name: "Once per dawn",
		spells: ["gust of wind"],
		selection: ["gust of wind"],
		firstCol: "onceday",
	}],
	savetxt: { adv_vs: ["gases", "vapors"] },
}
MagicItemsList["wand sheath"] = {
	name: "Wand Sheath",
	source: [["E:RLW", 279]],
	type: "Wondrous Item",
	rarity: "Common",
	description: "This sheath clamps onto my arm and can't be removed while I'm attuned to it. As an action, I can insert a wand in it, which then doesn't count to the number of items I can attune to. As a Bonus Action, I can then retract the wand or extend the wand and use it as if holding it, while keeping my hand free.",
	descriptionFull: [
		"A *wand sheath* clamps onto your arm and imparts the following benefits:",
		" \u2022 The *wand sheath* can't be removed from you while you're attuned to it.",
		" \u2022 You can insert a wand into the sheath as an action. The sheath can hold only one wand at a time.",
		" \u2022 You can retract or extend a wand from the sheath as a bonus action. While the wand is extended, you can use it as if you were holding it, but your hand remains free.",
		"If a sheathed wand requires attunement, you must attune to the wand before you can use it. However, the *wand sheath* and the attached wand count as a single magic item with regard to the number of magic items you can attune to. If you remove the wand from the sheath, your attunement to the wand ends.",
	],
	attunement: true,
	prerequisite: "Requires attunement by a warforged",
	prereqeval: function (v) { return CurrentRace.known.indexOf("warforged") !== -1; },
	action: [["action", " (insert)"], ["bonus action", " (extend/retract)"]],
}
MagicItemsList["wheel of wind and water"] = {
	name: "Wheel of Wind and Water",
	source: [["E:RLW", 280], ["WGtE", 115]],
	type: "Wondrous Item",
	rarity: "Uncommon",
	description: "I can telepathically control the Elemental bound into the elemental galleon or airship that has this wheel mounted at its helm. If I use a wheel of wind and water that is mounted on a mundane sailing ship, I can create an area of ideal conditions around the vessel, increasing its speed by 5 miles per hour.",
	descriptionFull: [
		"When mounted at the helm of an elemental galleon or airship, this wheel allows a creature that possesses the Mark of Storm to telepathically control the elemental bound inside the vessel.",
		"If a *wheel of wind and water* is mounted on a mundane sailing ship, a creature with the Mark of Storm who is using the wheel can create an area of ideal conditions around the vessel, increasing its speed by 5 miles per hour.",
	],
	prerequisite: "Can only be used by a creature with the Dragonmark of Storm",
	prereqeval: function (v) {
		return CurrentRace.variant.indexOf("mark of storm") !== -1 || CurrentFeats.known.indexOf("mark of storm") !== -1;
	},
}

// Beasts
CreatureList["clawfoot"] = {
	name: "Clawfoot",
	source: [["E:RLW", 289]],
	size: 3,
	type: "Beast",
	alignment: "Unaligned",
	ac: 13,
	hp: 19,
	hd: [3, 8],
	speed: "40 ft",
	scores: [12, 16, 14, 4, 12, 6],
	skills: {
		"perception": 3,
		"stealth": 5,
	},
	passivePerception: 13,
	challengeRating: "1",
	proficiencyBonus: 2,
	attacksAction: 2,
	attacks: [{
		name: "Bite",
		ability: 2,
		damage: [1, 8, "piercing"],
		range: "Melee (5 ft)",
		description: "1 bite \u0026 1 claws attack as Attack action",
	}, {
		name: "Claws",
		ability: 2,
		damage: [1, 8, "slashing"],
		range: "Melee (5 ft)",
		description: "If used after moving 20 ft straight in the same round, see Pounce trait; 1 bite \u0026 1 claws attack as Attack action",
	}],
	actions: [{
		name: "Multiattack",
		description: "As an Attack action, the [THIS] can make one Bite and one Claws attack.",
	}],
	traits: [{
		name: "Pack Tactics",
		description: "The [THIS] has Advantage on an attack roll against a creature if at least one of the [THIS]'s allies is within 5 ft of the creature and the ally isn't Incapacitated.",
	}, {
		name: "Pounce",
		description: "If the [THIS] moves at least 20 ft straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 11 Strength saving throw or be knocked Prone. If the target is Prone, the [THIS] can make one bite attack against it as a Bonus Action.",
	}],
	wildshapeString: "##Multiattack##. On its turn, 1 Bite and 1 Claws attack.\n##Pack Tactics##. Advantage on an attack roll if at least one ally, that isn't Incapacitated, is within 5 ft of the target. ##Pounce##. If the clawfoot moves at least 20 ft straight toward a creature and then hits it with a claw attack on the same turn, that target makes a DC 11 Str save or is knocked Prone and the clawfoot can make one bite attack against it as a Bonus Action.",
};
CreatureList["fastieth"] = {
	name: "Fastieth",
	source: [["E:RLW", 289]],
	size: 3,
	type: "Beast",
	alignment: "Unaligned",
	ac: 14,
	hp: 9,
	hd: [2, 8],
	speed: "50 ft",
	scores: [12, 18, 10, 4, 11, 4],
	passivePerception: 10,
	challengeRating: "1/4",
	proficiencyBonus: 2,
	attacksAction: 1,
	attacks: [{
		name: "Bite",
		ability: 2,
		damage: [1, 8, "piercing"],
		range: "Melee (5 ft)",
		description: "",
	}],
	traits: [{
		name: "Quickness (Recharge 5-6)",
		description: "The [THIS] can take the Dodge action as a Bonus Action.",
	}],
};
CreatureList["valenar hawk"] = { // contributed by Nod_Hero
	name: "Valenar Hawk",
	nameThis: "hawk",
	source: [["E:RLW", 312]],
	size: 5,
	type: "Fey",
	alignment: "Neutral",
	ac: 14,
	hp: 10,
	hd: [4, 4],
	speed: "10 ft, fly 60 ft",
	scores: [8, 18, 10, 9, 16, 11],
	skills: {
		"perception": 5,
	},
	senses: "Adv on Wis (Perception) checks using sight",
	passivePerception: 15,
	languages: "understands Common, Elvish, and Sylvan but can't speak",
	challengeRating: "1/8",
	proficiencyBonus: 2,
	attacksAction: 1,
	attacks: [{
		name: "Talons",
		ability: 2,
		damage: [1, 4, "slashing"],
		range: "Melee (5 ft)",
	}],
	traits: [{
		name: "Keen Sight",
		description: "The [THIS] has Advantage on Wisdom (Perception) checks that rely on sight.",
	}, {
		name: "Bonding",
		description: "The [THIS] can magically bond with one creature it can see, immediately after spending at least 1 hour observing that creature while within 30 ft of it. The bond lasts until the [THIS] bonds with a different creature or until the bonded creature dies. While bonded, the [THIS] and the bonded creature can communicate telepathically with each other at a distance of up to 100 ft.",
	}],
	notes: [{
		name: "[Variant] Ancestral Traits (E:RLW 313)",
		description: [
			"Each Valenar animal can be customized with an ancestral gift, a supernatural trait granted by its ancestral spirit. Choose a trait or roll on the table below for each Valenar animal.",
			" **d8**\t**Trait**",
			"  1\t***Bestow Luck (1/Day)***. As a Bonus Action, the animal chooses one creature it can see",
			"    \twithin 30 ft of it. The next ability check, attack roll, or saving throw the target",
			"    \tmakes in the next hour has Advantage.",
			"  2\t***Burst of Speed (Recharge 6)***. The animal can take the Dash action as a Bonus Action.",
			"  3\t***Camouflage***. The animal has Advantage on Dexterity (Stealth) checks it makes while",
			"    \toutdoors.",
			"  4\t***Lie Detector***. The animal knows when a creature within 15 ft of it tells a lie.",
			"  5\t***Fey Ancestry***. The animal has Advantage on saving throws against being Charmed or",
			"    \tFrightened, and magic can't put it to sleep.",
			"  6\t***Fey Step (1/Day)***. The animal, along with anything it is wearing or carrying,",
			"    \tteleports up to 30 ft to an unoccupied space it can see.",
			"  7\t***Quickness (Recharge 6)***. The animal can take the Dodge action as a Bonus Action.",
			"  8\t***Shrouded Step***. The animal can't be tracked except by magical means, and it leaves",
			"    \tbehind no tracks or other traces of its passage.",
		].join("\n"),
		joinString: "\n",
	}],
};
CreatureList["valenar hound"] = { // contributed by Nod_Hero
	name: "Valenar Hound",
	nameThis: "hound",
	source: [["E:RLW", 312]],
	size: 3,
	type: "Fey",
	alignment: "Neutral",
	ac: 14,
	hp: 19,
	hd: [3, 8],
	speed: "40 ft",
	scores: [17, 15, 14, 10, 15, 11],
	skills: {
		"perception": 4,
	},
	senses: "Adv on Wis (Perception) checks using hearing/smell",
	passivePerception: 14,
	languages: "understands Common, Elvish, and Sylvan but can't speak",
	challengeRating: "1/2",
	proficiencyBonus: 2,
	attacksAction: 1,
	attacks: [{
		name: "Bite",
		ability: 1,
		damage: [1, 6, "piercing"],
		range: "Melee (5 ft)",
		description: "Target must succeed on a DC 13 Strength saving throw or be knocked Prone",
	}],
	traits: [{
		name: "Keen Hearing and Smell",
		description: "The [THIS] has Advantage on Wisdom (Perception) checks that rely on hearing or smell.",
	}, {
		name: "Bonding",
		description: "The [THIS] can magically bond with one creature it can see, immediately after spending at least 1 hour observing that creature while within 30 ft of it. The bond lasts until the [THIS] bonds with a different creature or until the bonded creature dies. While bonded, the [THIS] and the bonded creature can communicate telepathically with each other at a distance of up to 100 ft.",
	}],
	notes: CreatureList["valenar hawk"].notes,
};
CreatureList["valenar steed"] = { // contributed by Nod_Hero
	name: "Valenar Steed",
	nameThis: "steed",
	source: [["E:RLW", 313]],
	size: 2,
	type: "Fey",
	alignment: "Neutral",
	ac: 13,
	hp: 22,
	hd: [3, 10],
	speed: "60 ft",
	scores: [14, 16, 14, 10, 15, 11],
	skills: {
		"perception": 4,
	},
	passivePerception: 14,
	languages: "understands Common, Elvish, and Sylvan but can't speak",
	challengeRating: "1/2",
	proficiencyBonus: 2,
	attacksAction: 1,
	attacks: [{
		name: "Hooves",
		ability: 2,
		damage: [2, 6, "bludgeoning"],
		range: "Melee (5 ft)",
	}],
	traits: [{
		name: "Bonding",
		description: "The [THIS] can magically bond with one creature it can see, immediately after spending at least 1 hour observing that creature while within 30 ft of it. The bond lasts until the [THIS] bonds with a different creature or until the bonded creature dies. While bonded, the [THIS] and the bonded creature can communicate telepathically with each other at a distance of up to 100 ft.",
	}],
	notes: CreatureList["valenar hawk"].notes,
};
