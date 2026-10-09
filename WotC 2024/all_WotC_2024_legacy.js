if (sheetVersion < 24001003) { throw "This add-on script was made for a newer version of the sheet (v24.1.3). Please use the latest version and try again.\n\nYou can get the different versions at www.flapkan.com.\n\nFrom v24.0.0 onwards, the sheet uses the 2024 (5.5e) rules, while lower versions use the 5e (2014) rules."; };

var iFileName = "all_WotC_2024_legacy.js";
RequiredSheetVersion("24.1.3");

// legacy_20140715_LMoP.js
// This file adds the magic items from the Lost Mines of Phandelver adventure from the D&D 5e starter set to MPMB's Character Record Sheet

// Define the source
SourceList["LMoP"] = {
	name: "Lost Mines of Phandelver [items]",
	abbreviation: "LMoP",
	group: "Legacy Adventure Books",
	campaignSetting: "Forgotten Realms",
	url: "https://www.dndbeyond.com/sources/lmop",
	date: "2014/07/15",
	defaultExcluded: true,
};

// Magic Items
MagicItemsList["dragonguard"] = {
	name: "Dragonguard",
	source: [["LMoP", 48], ["PaBTSO", 72]],
	type: "Armor (Breastplate)",
	rarity: "Rare",
	description: "This +1 breastplate has a gold dragon motif worked into its design. It grants its wearer Advantage on saving throws against the breath weapons of creatures that have the Dragon type.",
	descriptionFull: "This +1 breastplate has a gold dragon motif worked into its design. Created for a human hero of Neverwinter named Tergon, it grants its wearer advantage on saving throws against the breath weapons of creatures that have the dragon type.",
	weight: 20,
	armorOptions: [{
		regExpSearch: /dragonguard/i,
		name: "Dragonguard",
		source: [["LMoP", 48], ["PaBTSO", 72]],
		type: "medium",
		ac: "14+1",
		weight: 20,
		selectNow: true,
	}],
	savetxt: { adv_vs: ["breath weapons of Dragons"] },
}
MagicItemsList["hew"] = {
	name: "Hew",
	source: [["LMoP", 33], ["PaBTSO", 54]],
	type: "Weapon (Battleaxe)",
	rarity: "Uncommon",
	description: 'Dwarvish runes on the head of this rusty battleaxe read "Hew". It adds a +1 bonus to attack and damage rolls made with it and deals maximum damage against Plant creatures or objects made of wood. While carrying it, I feel uneasy when I travel through a forest, as its creator was a dwarf smith who feuded with dryads.',
	descriptionFull: 'This rusty old battleaxe of dwarven manufacture has runes in Dwarvish on the axe head which read "Hew". *Hew* is a +1 battleaxe that deals maximum damage when the wielder hits a plant creature or an object made of wood. The axe\'s creator was a dwarf smith who feuded with the dryads of a forest where he used it for protection while he cut firewood. Whoever carries the axe feels uneasy whenever he or she travels through a forest.',
	weight: 4,
	weaponOptions: [{
		baseWeapon: "battleaxe",
		regExpSearch: /\bhew\b/i,
		name: '"Hew"',
		source: [["LMoP", 33], ["PaBTSO", 54]],
		description: "Versatile (1d10); Max damage against Plant creatures and wooden objects",
		modifiers: [1, 1],
		selectNow: true,
	}],
}
MagicItemsList["lightbringer"] = {
	name: "Lightbringer",
	source: [["LMoP", 48], ["PaBTSO", 54]],
	type: "Weapon (Mace)",
	rarity: "Uncommon",
	description: "This mace adds a +1 bonus to attack and damage rolls made with it. It is made for a cleric of the god of dawn, with its head shaped like a sunburst and made of solid brass. I can command it to glow as bright as a torch. While glowing, the mace deals an extra 1d6 Radiant damage to Undead creatures.",
	descriptionFull: "This +1 mace was made for a cleric of Lathander, the god of dawn. The head of the mace is shaped like a sunburst and is made of solid brass. Named *Lightbringer*, this weapon glows as bright as a torch when its wielder commands. While glowing, the mace deals an extra 1d6 radiant damage to undead creatures.",
	weight: 4,
	weaponOptions: [{
		baseWeapon: "mace",
		regExpSearch: /lightbringer/i,
		name: "Lightbringer",
		source: [["LMoP", 48], ["PaBTSO", 54]],
		description: "Command to glow as torch and deal +1d6 Radiant damage to Undead",
		modifiers: [1, 1],
		selectNow: true,
	}],
}
MagicItemsList["spider staff"] = { // changed to the new version introduced in Phandelver and Below: The Shattered Obelisk with the prerequisite
	name: "Spider Staff",
	source: [["LMoP", 53], ["PaBTSO", 220]],
	type: "Staff",
	rarity: "Rare",
	description: "Attacks with this black adamantine quarterstaff topped with a spider deal +1d6 Poison damage on a hit. It has 10 charges and regains 1d6+4 expended charges at dawn. If I use its last charge, roll a d20. On a 1, it is destroyed. I can use its charges to cast *Spider Climb* (1 charge) or *Web* (2 charges, spell save DC 15).",
	descriptionFull: [
		"The top of this black, adamantine staff is shaped like a spider. The staff weighs 6 pounds. You must be attuned to the staff to gain its benefits and cast its spells. The staff can be wielded as a quarterstaff. It deals 1d6 extra poison damage on a hit when used to make a weapon attack.",
		"The staff has 10 charges, which are used to fuel the spells within it. With the staff in hand, you can use your action to cast one of the following spells from the staff if the spell is on your class's spell list: *Spider Climb* (1 charge) or *Web* (2 charges, spell save DC 15). No components are required.",
		"The staff regains 1d6+4 expended charges each day at dusk. If you expend the staff's last charge, roll a d20. On a 1, the staff crumbles to dust and is destroyed.",
	],
	attunement: true,
	prerequisite: "Requires attunement by a bard, sorcerer, warlock, or wizard",
	prereqeval: function (v) { return classes.known.bard || classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false; },
	weight: 6, // kept to the original weight
	usages: 10,
	recovery: "dawn",
	additional: "regains 1d6+4",
	weaponOptions: [{
		baseWeapon: "quarterstaff",
		regExpSearch: /^(?=.*spider)(?=.*staff).*$/i,
		name: "Spider Staff",
		source: [["LMoP", 53], ["PaBTSO", 220]],
		description: "Versatile (1d8); +1d6 Poison damage",
		selectNow: true,
	}],
	fixedDC: 15,
	spellFirstColTitle: "Ch",
	spellcastingBonus: [{
		name: "1 charge",
		spells: ["spider climb"],
		selection: ["spider climb"],
		firstCol: 1,
	}, {
		name: "2 charges",
		spells: ["web"],
		selection: ["web"],
		firstCol: 2,
	}],
}
MagicItemsList["staff of defense"] = { // changed to the new version introduced in Phandelver and Below: The Shattered Obelisk with the prerequisite
	name: "Staff of Defense",
	source: [["LMoP", 53]],
	type: "Staff",
	rarity: "Rare",
	description: "This slender, hollow staff is made of glass yet is as strong as oak. While holding it, I gain a +1 bonus to AC. It has 10 charges and regains 1d6+4 expended charges at dawn. If I use its last charge, roll a d20. On a 1, it is destroyed. I can use its charges to cast *Mage Armor* (1 charge) or *Shield* (2 charges) as an action.",
	descriptionFull: [
		"This slender, hollow staff is made of glass yet is as strong as oak. It weighs 3 pounds. You must be attuned to the staff to gain its benefits and cast its spells.",
		"While holding the staff, you have a +1 bonus to your Armor Class.",
		"The staff has 10 charges, which are used to fuel the spells within it. With the staff in hand, you can use your action to cast one of the following spells from the staff if the spell is on your class's spell list: *Mage Armor* (1 charge) or *Shield* (2 charges). No components are required.",
		"The staff regains 1d6+4 expended charges each day at dawn. If you expend the staff's last charge, roll a d20. On a 1, the staff shatters and is destroyed.",
	],
	attunement: true,
	prerequisite: "Requires attunement by a bard, sorcerer, warlock, or wizard",
	prereqeval: function (v) { return classes.known.bard || classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false; },
	weight: 3,
	usages: 10,
	recovery: "dawn",
	additional: "regains 1d6+4",
	spellcastingAbility: "class",
	spellFirstColTitle: "Ch",
	weaponsAdd: { options: ["Staff of Defense"] },
	spellcastingBonus: [{
		name: "1 charge",
		spells: ["mage armor"],
		selection: ["mage armor"],
		firstCol: 1,
	}, {
		name: "2 charges",
		spells: ["shield"],
		selection: ["shield"],
		firstCol: 2,
	}],
	spellChanges: {
		"shield": {
			time: "Act",
			timeFull: "",
			changes: "Cast as an action.",
		},
	},
	extraAC: [{ name: "Staff of Defense", mod: 1, magic: true, text: "I gain a +1 bonus to AC while holding the Staff of Defense." }],
}

// legacy_20140819_PHB.js
// This file adds options from the 2014 Player's Handbook to MPMB's Character Record Sheet that have not been replaced with new options in the 2024 Player's Handbook or other rulebooks for the 2024 rules

// Define the source
SourceList["P"] = {
	name: "2014 Player's Handbook",
	abbreviation: "PHB'14",
	abbreviationSpellsheet: "P",
	group: "Legacy Sources",
	url: "https://marketplace.dndbeyond.com/core-rules/players-handbook?pid=SRC-00002",
	date: "2014/08/19",
	defaultExcluded: true,
};

// Races
RaceList["half-elf"] = {
	regExpSearch: /^(?=.*half)(?=.*(elf|elv|drow|silvanesti|qualinesti|grugach|kagonesti)).*$/i,
	name: "Half-Elf",
	source: [["SRD", 6], ["P", 39]],
	plural: "Half-elves",
	size: 3,
	speed: {
		walk: { spd: 30, enc: 20 },
	},
	languageProfs: ["Common", "Elvish", 1],
	vision: [["Darkvision", 60]],
	savetxt: {
		text: ["Magic can't put me to sleep"],
		adv_vs: ["Charmed"],
	},
	skillstxt: "Choose any two skills",
	age: " reach adulthood around age 20 and often live over 180 years",
	height: " range from 5 to 6 feet tall (4'9\" + 2d8\")",
	weight: " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)",
	heightMetric: " range from 1,5 to 1,8 metres tall (145 + 5d8 cm)",
	weightMetric: " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)",
	trait: [
		"**Half-Elf**",
		"##\u25C6 Fey Ancestry##. I have Advantage on saving throws against being Charmed, and magic can't put me to sleep.",
		"##\u25C6 Skill Versatility##. I gain proficiency in two skills of my choice.",
	],
};
RaceList["half-orc"] = {
	regExpSearch: /^(?=.*half)(?=.*\bor(c|k)).*$/i,
	name: "Half-Orc",
	source: [["SRD", 7], ["P", 41]],
	plural: "Half-orcs",
	size: 3,
	speed: {
		walk: { spd: 30, enc: 20 },
	},
	languageProfs: ["Common", "Orc"],
	vision: [["Darkvision", 60]],
	skills: ["Intimidation"],
	age: " reach adulthood around age 14 and rarely live longer than 75 years",
	height: " range from 5 to well over 6 feet tall (4'10\" + 2d10\")",
	weight: " weigh around 215 lb (140 + 2d10 \xD7 2d6 lb)",
	heightMetric: " range from 1,5 to well over 1,8 metres tall (150 + 5d10 cm)",
	weightMetric: " weigh around 100 kg (65 + 5d10 \xD7 4d6 / 10 kg)",
	features: {
		"relentless endurance": {
			name: "Relentless Endurance",
			minlevel: 1,
			usages: 1,
			recovery: "Long Rest",
		},
		"savage attacks": {
			name: "Savage Attacks",
			minlevel: 1,
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (v.isMeleeWeapon && (/d\d+/).test(fields.Damage_Die)) {
							if (v.extraCritM) {
								v.extraCritM += 1;
								var extraCritRegex = /\d+(d\d+ extra on a crit(ical)?( hit)? in melee)/i;
								fields.Description = fields.Description.replace(extraCritRegex, v.extraCritM + "$1");
							} else {
								v.extraCritM = 1;
								fields.Description += (fields.Description ? "; " : "") + v.extraCritM + fields.Damage_Die.replace(/.*(d\d+).*/, "$1") + " extra on a crit in melee";
							};
						};
					},
					"My melee weapon attacks roll 1 additional dice on a critical hit.",
					900,
				],
			},
		},
	},
	trait: [
		"**Half-Orc**",
		"##\u25C6 Relentless Endurance##. When I am reduced to 0 Hit Points but not killed outright, I can drop to 1 Hit Point instead. I can't use this feature again until I finish a Long Rest.",
		"##\u25C6 Savage Attacks##. When I score a critical hit with a melee weapon attack, I can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit.",
	],
};

// Eldritch Invocations
AddWarlockInvocation("Beast Speech", {
	name: "Beast Speech",
	source: [["SRD", 48], ["P", 110]],
	description: desc("I can cast *Speak with Animals* without using a spell slot."),
	spellcastingBonus: [{
		name: "Beast Speech",
		spells: ["speak with animals"],
		selection: ["speak with animals"],
		firstCol: "atwill",
	}],
});
AddWarlockInvocation("Beguiling Influence", {
	name: "Beguiling Influence",
	source: [["SRD", 48], ["P", 110]],
	description: desc("I gain proficiencies with the Deception and Persuasion skills."),
	skills: ["Deception", "Persuasion"],
});
AddWarlockInvocation("Bewitching Whispers (req: lvl 7+)", {
	name: "Bewitching Whispers",
	source: [["SRD", 48], ["P", 110]],
	minlevel: 7,
	submenu: "[Warlock level  7+]",
	description: desc("Once per Long Rest, I can cast *Compulsion* using a Pact Magic spell slot."),
	spellcastingBonus: [{
		name: "Bewitching Whispers",
		spells: ["compulsion"],
		selection: ["compulsion"],
		firstCol: "oncelr",
	}],
});
AddWarlockInvocation("Book of Ancient Secrets (req: Pact of the Tome)", {
	name: "Book of Ancient Secrets",
	description: desc("My Book of Shadows is inscribed with two 1st-level Ritual spells of my choice. When I come across other Ritual spells, I can inscribe them as well. I can cast these inscribed spells as Rituals, they are not automatically prepared. (Select only these inscribed spells in the 'Spells' column.)"),
	source: [["SRD", 48], ["P", 110]],
	submenu: "[improves Pact of the Tome]",
	prereqeval: function (v) { return v.choiceActive.indexOf("pact of the tome") !== -1; },
	eval: function () {
		var oSpells = CurrentSpells["warlock-book of shadows"];
		if (!oSpells) return;
		// Change into a "book" caster that has access to ritual spells from any level
		oSpells.known.spells = "book";
		oSpells.typeSp = "book";
		oSpells.typeList = 2;
		oSpells.list.level = [0, 9];
		// Make it so that all cantrips are always displayed
		oSpells.known.cantripsPrepare = true;
		oSpells.preparedCantrips = true;
		// Add it so that all 1st-level ritual spells are always displayed
		oSpells.extra = CreateSpellList({ ritual: true, level: [1, 1] });
		oSpells.extraSpecial = true;
		SetStringifieds("spells"); CurrentUpdates.types.push("spells");
		// cleanup old versions of this invocation
		if (CurrentSpells["warlock-book of ancient secrets"] || CurrentSpells["book of ancient secrets"]) {
			var oSpellsOld = CurrentSpells["book of ancient secrets"] ? CurrentSpells["book of ancient secrets"] : CurrentSpells["warlock-book of ancient secrets"];
			if (oSpellsOld.selectSp) oSpells.selectSp = oSpellsOld.selectSp;
			if (oSpellsOld.offsetBo) oSpells.offsetBo = oSpellsOld.offsetBo;
			if (oSpellsOld.selectBo) oSpells.selectBo = oSpellsOld.selectBo;
			delete CurrentSpells["warlock-book of ancient secrets"];
			delete CurrentSpells["book of ancient secrets"];
		};
	},
	removeeval: function () {
		if (CurrentSpells["book of ancient secrets"]) delete CurrentSpells["book of ancient secrets"];
		var oSpells = CurrentSpells["warlock-book of shadows"];
		if (!oSpells) return;
		oSpells.known.spells = "list";
		oSpells.typeSp = "list";
		oSpells.list.level = [0, 1];
		delete oSpells.known.cantripsPrepare;
		delete oSpells.preparedCantrips;
		delete oSpells.extra;
		delete oSpells.extraSpecial;
		SetStringifieds("spells"); CurrentUpdates.types.push("spells");
	},
	calcChanges: {
		spellAdd: [
			function (spellKey, spellObj, spName) {
				if (spName !== "warlock-book of shadows") return;
				var oSpells = CurrentSpells[spName];
				if (oSpells.selectSp.indexOf(spellKey)) {
					spellObj.firstCol = SpellRitualTag;
					if (!/.*(\d+ ?h\b|special|see b).*/i.test(spellObj.time)) {
						var numMinutes = Number(spellObj.time.replace(/(\d+) ?min.*/, "$1"));
						if (isNaN(numMinutes)) numMinutes = 0;
						spellObj.time = (numMinutes + 10) + " min";
					};
					return true;
				};
			},
			"By the Book of Ancient Secrets invocation, I can cast any Ritual spells I've added to my Book of Shadows, but only as a Ritual. Ritual spells always have a casting time of 10 minutes or more. The sheet assumes any Ritual spells above 1st-level are manual additions.",
		],
	},
});
AddWarlockInvocation("Chains of Carceri (req: lvl 15+, Pact of the Chain)", {
	name: "Chains of Carceri",
	source: [["SRD", 49], ["P", 110]],
	minlevel: 15,
	submenu: ["[Warlock level 15+]", "[improves Pact of the Chain]"],
	prereqeval: function (v) { return v.choiceActive.indexOf("pact of the chain") !== -1; },
	description: desc("I can cast *Hold Monster* without expending a spell slot or material components, but only on a Celestial, Fiend, or Elemental. I can only target a specific individual once per Long Rest."),
	spellcastingBonus: [{
		name: "Chains of Carceri",
		spells: ["hold monster"],
		selection: ["hold monster"],
		firstCol: "atwill",
	}],
	spellChanges: {
		"hold monster": {
			components: "V,S",
			compMaterial: "",
			description: "1 Celestial, Fiend, or Elemental, save or Paralyzed; extra save at end of each turn",
			changes: "With the Chains of Carceri invocation I can cast *Hold Monster* without a material component, but only on a Celestial, Fiend, or Elemental.",
		},
	},
});
AddWarlockInvocation("Dreadful Word (req: lvl 7+)", {
	name: "Dreadful Word",
	source: [["SRD", 49], ["P", 110]],
	minlevel: 7,
	submenu: "[Warlock level  7+]",
	description: desc("Once per Long Rest, I can cast *Confusion* using a Pact Magic spell slot."),
	spellcastingBonus: [{
		name: "Dreadful Word",
		spells: ["confusion"],
		selection: ["confusion"],
		firstCol: "oncelr",
	}],
});
AddWarlockInvocation("Eldritch Sight", {
	name: "Eldritch Sight",
	source: [["SRD", 49], ["P", 110]],
	description: desc("I can cast *Detect Magic* without expending a spell slot."),
	spellcastingBonus: [{
		name: "Eldritch Sight",
		spells: ["detect magic"],
		selection: ["detect magic"],
		firstCol: "atwill",
	}],
});
AddWarlockInvocation("Eyes of the Rune Keeper", {
	name: "Eyes of the Rune Keeper",
	source: [["SRD", 49], ["P", 111]],
	description: " [I can read all writing]",
});
AddWarlockInvocation("Minions of Chaos", {
	name: "Minions of Chaos",
	source: [["SRD", 49], ["P", 111]],
	minlevel: 9,
	submenu: "[Warlock level  9+]",
	description: desc("Once per Long Rest, I can cast *Conjure Elemental* using a Pact Magic spell slot."),
	spellcastingBonus: [{
		name: "Minions of Chaos",
		spells: ["conjure elemental"],
		selection: ["conjure elemental"],
		firstCol: "oncelr",
	}],
});
AddWarlockInvocation("Mire the Mind", {
	name: "Mire the Mind",
	source: [["SRD", 49], ["P", 111]],
	minlevel: 5,
	submenu: "[Warlock level  5+]",
	description: desc("Once per Long Rest, I can cast *Slow* using a Pact Magic spell slot."),
	spellcastingBonus: [{
		name: "Mire the Mind",
		spells: ["slow"],
		selection: ["slow"],
		firstCol: "oncelr",
	}],
});
AddWarlockInvocation("Sculptor of Flesh", {
	name: "Sculptor of Flesh",
	source: [["SRD", 50], ["P", 111]],
	minlevel: 7,
	submenu: "[Warlock level  7+]",
	description: desc("Once per Long Rest, I can cast *Polymorph* using a Pact Magic spell slot."),
	spellcastingBonus: [{
		name: "Sculptor of Flesh",
		spells: ["polymorph"],
		selection: ["polymorph"],
		firstCol: "oncelr",
	}],
});
AddWarlockInvocation("Sign of Ill Omen", {
	name: "Sign of Ill Omen",
	source: [["SRD", 50], ["P", 111]],
	minlevel: 5,
	submenu: "[Warlock level  5+]",
	description: desc("Once per Long Rest, I can cast *Bestow Curse* using a Pact Magic spell slot."),
	spellcastingBonus: [{
		name: "Sign of Ill Omen",
		spells: ["bestow curse"],
		selection: ["bestow curse"],
		firstCol: "oncelr",
	}],
});
AddWarlockInvocation("Thief of Five Fates", {
	name: "Thief of Five Fates",
	source: [["SRD", 50], ["P", 111]],
	description: desc("Once per Long Rest, I can cast *Bane* using a Pact Magic spell slot."),
	spellcastingBonus: [{
		name: "Thief of Five Fates",
		spells: ["bane"],
		selection: ["bane"],
		firstCol: "oncelr",
	}],
});
AddWarlockInvocation("Voice of the Chain Master", {
	name: "Voice of the Chain Master",
	source: [["SRD", 50], ["P", 111]],
	submenu: "[improves Pact of the Chain]",
	prereqeval: function (v) { return v.choiceActive.indexOf("pact of the chain") !== -1; },
	description: desc("While on the same plane as my familiar, I can communicate telepathically with it and I can perceive through its senses. While doing the latter, I can speak through it with my voice."),
});

// Subclasses
AddSubClass("cleric", "nature domain", {
	regExpSearch: /^(?=.*(cleric|priest|clergy|acolyte))(?=.*\b(nature|natural|animal|element(s|al)?)\b).*$/i,
	subname: "Nature Domain",
	source: [["P", 62]],
	features: {
		"subclassfeature3.0": {
			name: "Bonus Proficiency",
			source: [["P", 62]],
			minlevel: 3,
			description: desc("I gain proficiency with heavy armor."),
			armorProfs: [false, false, true, false],
			spellcastingExtra: ["animal friendship", "speak with animals", "barkskin", "spike growth", "plant growth", "wind wall", "dominate beast", "grasping vine", "insect plague", "tree stride"],
		},
		"subclassfeature3.1": {
			name: "Acolyte of Nature",
			source: [["P", 62]],
			minlevel: 3,
			description: desc("I learn a druid cantrip and proficiency with a skill: Animal Handling, Nature, Survival."),
			skillstxt: "Choose one from Animal Handling, Nature, or Survival",
			spellcastingBonus: [{
				name: "Acolyte of Nature",
				"class": "druid",
				level: [0, 0],
			}],
		},
		"subclassfeature3.2": {
			name: "Charm Animals and Plants",
			source: [["P", 62]],
			minlevel: 3,
			description: desc("As an action, all Beasts and Plants within 30 ft that I can see must make a Wis save or be Charmed and friendly to allies and me for 1 min or until damaged."),
			additional: "1 Channel Divinity",
			action: [["action", ""]],
		},
		"subclassfeature6": {
			name: "Dampen Elements",
			source: [["P", 62]],
			minlevel: 6,
			description: desc("As a Reaction, if an ally in 30 ft or I takes Acid/Cold/Fire/Lightning/Thunder damage, I can grant Resistance against that instance of damage."),
			action: [["reaction", ""]],
		},
		"subclassfeature17": {
			name: "Master of Nature",
			source: [["P", 62]],
			minlevel: 17,
			description: desc("As a Bonus Action, I can command creatures that are Charmed by my Channel Divinity."),
			action: [["bonus action", ""]],
		},
	},
});
AddSubClass("cleric", "tempest domain", {
	regExpSearch: /^(?=.*(cleric|priest|clergy|acolyte))(?=.*\b(tempest|destruction|storm)\b).*$/i,
	subname: "Tempest Domain",
	source: [["P", 62]],
	features: {
		"subclassfeature3.0": {
			name: "Bonus Proficiency",
			source: [["P", 62]],
			minlevel: 3,
			description: desc("I gain proficiency with martial weapons and heavy armor."),
			armorProfs: [false, false, true, false],
			weaponProfs: [false, true],
			spellcastingExtra: ["fog cloud", "thunderwave", "gust of wind", "shatter", "call lightning", "sleet storm", "control water", "ice storm", "destructive wave", "insect plague"],
		},
		"subclassfeature3.1": {
			name: "Wrath of the Storm",
			source: [["P", 62]],
			minlevel: 3,
			description: desc("As a Reaction, when a creature I can see within 5 ft hits me, I can thunderously rebuke it. It takes 2d8 Lightning or Thunder damage (my choice) that a Dex save can halve."),
			usages: "Wisdom mod" + (typePF ? "" : "ifier") + " per ",
			usagescalc: "event.value = Math.max(1, What('Wis Mod'));",
			recovery: "Long Rest",
			action: [["reaction", ""]],
		},
		"subclassfeature3.2": {
			name: "Destructive Wrath",
			source: [["P", 62]],
			minlevel: 3,
			description: desc("Instead of rolling, I can do maximum damage when I do Lightning or Thunder damage."),
			additional: "1 Channel Divinity",
		},
		"subclassfeature6": {
			name: "Thunderbolt Strike",
			source: [["P", 62]],
			minlevel: 6,
			description: desc("When I deal Lightning damage to a Large or smaller foe, I can push it up to 10 ft away."),
		},
		"subclassfeature17": {
			name: "Stormborn",
			source: [["P", 62]],
			minlevel: 17,
			description: desc("Whenever I'm not underground or indoors, I have a Fly Speed equal to my current speed."),
			speed: { fly: { spd: "walk", enc: "walk" } },
		},
	},
});

// Background Variants
AddBackgroundVariant("entertainer", "gladiator", {
	regExpSearch: /gladiator/i,
	name: "Gladiator",
	source: [["P", 131]],
	scorestxt: null,
	equipright: !BackgroundList["entertainer"] ? null :
		BackgroundList["entertainer"].equipright.map(function (n) {
			if (/musical instrument/i.test(n[0])) n[0] = "Inexpensive, unusual weapon";
			return n;
		}),
	feature: "Are You Entertained?",
	extra: null,
});
AddBackgroundVariant("noble", "knight", {
	regExpSearch: /^(?!.*order)(?=.*knight).*$/i,
	name: "Knight",
	source: [["P", 136]],
	scorestxt: null,
	equipright: !BackgroundList["noble"] ? null :
		BackgroundList["noble"].equipright.concat([
			["Banner or token from devoted love", "", ""],
		]),
	feature: "Retainers",
});
AddBackgroundVariant("sailor", "pirate", {
	regExpSearch: /pirate/i,
	name: "Pirate",
	source: [["P", 139]],
	scorestxt: null,
	feature: "Bad Reputation",
});

// Background Features
BackgroundFeatureList["shelter of the faithful"] = { // from Acolyte
	description: "I command the respect of those who share my faith. I can perform the religious ceremonies of my faith. My companions and I can expect free healing and care at an establishment of my faith, though I must provide any material components needed for spells. Those who share my religion will support me at a modest lifestyle.",
	source: [["SRD", 61], ["P", 127]],
};
BackgroundFeatureList["false identity"] = { // from Charlatan
	description: "I have created a second identity that includes documentation, established acquaintances, and disguises that allow me to assume that persona. Additionally, I can forge documents, including official papers and personal letters, as long as I have seen an example of the kind of document or the handwriting I am trying to copy.",
	source: [["P", 128]],
};
BackgroundFeatureList["criminal contact"] = { // from Criminal
	description: "I have a reliable and trustworthy contact who acts as my liaison to a network of other criminals. I know how to get messages to and from my contact, even over great distances; specifically, I know the local messengers, corrupt caravan masters, and seedy sailors who can deliver my messages.",
	source: [["P", 129]],
};
BackgroundFeatureList["by popular demand"] = { // from Entertainer
	description: "I can always find a place to perform (inn/tavern/circus/etc.), where I receive free lodging and food of a modest or comfortable standard, as long as I perform each night. In addition, my performance makes me something of a local figure. When strangers recognize me in a town where I have performed, they typically take a liking to me.",
	source: [["P", 130]],
};
BackgroundFeatureList["are you entertained?"] = { // from Gladiator
	description: "I can always find a place to perform (arena/pit fight), where I receive free lodging and food of a modest or comfortable standard, as long as I perform each night. In addition, my performance makes me something of a local figure. When strangers recognize me in a town where I have performed, they typically take a liking to me.",
	source: [["P", 131]],
};
BackgroundFeatureList["rustic hospitality"] = { // from Folk Hero
	description: "Since I come from the ranks of the common folk, I fit in among them with ease. I can find a place to hide, rest, or recuperate among other commoners, unless I have shown myself to be a danger to them. They will shield me from the law or anyone else searching for me, though they will not risk their lives for me.",
	source: [["P", 131]],
};
BackgroundFeatureList["guild membership"] = { // from Guild Artisan
	description: "5 gp membership fees per month: The guild offers lodging if possible. In case of being accused of a crime, the guild will support me if a good case can be made for my innocence or the crime is justifiable. I can also gain access to powerful political figures through the guild, as long as I'm in good standing and the guild is paid enough.",
	source: [["P", 133]],
};
BackgroundFeatureList["discovery"] = { // from Hermit
	description: "The quiet seclusion of my extended hermitage gave me access to a unique and powerful discovery. The exact nature of this revelation depends on the nature of my seclusion. It might be a great truth, a hidden site, a long forgotten fact, or unearthed some relic of the past that could rewrite history.",
	source: [["P", 134]],
};
BackgroundFeatureList["position of privilege"] = { // from Noble
	description: "I am welcome in high society, and people assume I have the right to be wherever I am. The common folk make every effort to accommodate me and avoid my displeasure, and other people of high birth treat me as a member of the same social sphere. I can secure an audience with a local noble if I need to.",
	source: [["P", 135]],
};
BackgroundFeatureList["retainers"] = { // from Knight
	description: "I have the service of three retainers loyal to my family, one of whom is another noble and my squire. My other retainers are commoners who can perform mundane tasks for me, but they do not fight for me, will not follow me into obviously dangerous areas (such as dungeons), and will leave if they are frequently endangered or abused.",
	source: [["P", 136]],
};
BackgroundFeatureList["wanderer"] = { // from Outlander
	description: "I have an excellent memory for maps and geography, and I can always recall the general layout of terrain, settlements, and other features around me. In addition, I can find food and fresh water for myself and up to five other people each day, provided that the land offers berries, small game, water, and so forth.",
	source: [["P", 136]],
};
BackgroundFeatureList["researcher"] = { // from Researcher
	description: "When I attempt to learn or recall a piece of lore, if I do not know that information, I often know where and from whom I can obtain it. Usually, this information comes from a library, scriptorium, university, or a sage or other learned person or creature. Unearthing the deepest secrets of the multiverse can require an adventure or even a whole campaign.",
	source: [["P", 138]],
};
BackgroundFeatureList["ship's passage"] = { // from Sailor
	description: "When I need to, I can secure free passage on a sailing ship for myself and my companions. I might sail on the ship I served on, or another ship I have good relations with. Because I'm calling in a favor, I can't be certain of a schedule or route that will meet my every need. My companions and I are expected to assist the crew during the voyage.",
	source: [["P", 139]],
};
BackgroundFeatureList["bad reputation"] = { // from Pirate
	description: "No matter where I go, people are afraid of me due to my reputation. When I am in a civilized settlement, I can get away with minor criminal offenses, such as refusing to pay for food at a tavern or breaking down doors at a local shop, since most people will not report my activity to the authorities.",
	source: [["P", 139]],
};
BackgroundFeatureList["military rank"] = { // from Soldier
	description: "I have a military rank from my career as a soldier. Soldiers loyal to my former military organization still recognize my authority and influence. I can invoke my rank to influence soldiers and temporarily requisition simple equipment or horses. I can usually gain access to friendly military encampments and fortresses where my rank is recognized.",
	source: [["P", 140]],
};
BackgroundFeatureList["city secrets"] = { // from Urchin
	description: "I know the secret patterns and flow to cities and can find passages through the urban sprawl that others would miss. When I am not in combat, I (and companions I lead) can travel between any two locations in the city twice as fast as my speed would normally allow.",
	source: [["P", 141]],
};

// Feats
FeatsList["dungeon delver"] = {
	name: "Dungeon Delver",
	source: [["P", 166]],
	description: "I have Adv on Wis (Perception) and Int (Investigation) checks made to detect the presence of secret doors. I have Resistance to damage dealt by traps and Advantage on saves to avoid or resist traps. Travelling at a fast pace doesn't impose -5 on my passive Perception.",
	descriptionFull: [
		"Alert to the hidden traps and secret doors found in many dungeons, you gain the following benefits:",
		" \u2022 You have advantage on Wisdom (Perception) and Intelligence (Investigation) checks made to detect the presence of secret doors.",
		" \u2022 You have advantage on saving throws made to avoid or resist traps.",
		" \u2022 You have resistance to the damage dealt by traps.",
		" \u2022 Traveling at a fast pace doesn't impose the normal -5 penalty on your passive Wisdom (Perception) score.",
	],
	dmgres: ["Traps"],
	savetxt: { adv_vs: ["traps"] },
	vision: [
		["Adv on Perception and Investigation for secret doors", 0],
		["No -5 for travelling at fast pace", 0],
	],
};
FeatsList["linguist"] = {
	name: "Linguist",
	source: [["P", 167]],
	description: "",
	calculate: "event.value = \"I can ably create written ciphers that others can't decipher unless I teach them, they succeed on an Intelligence check DC \" + (Number(What('Int')) + Number(How('Proficiency Bonus'))) + ' (Intelligence score + proficiency bonus), or they use magic to decipher it. I learn three languages of my choice. [+1 Intelligence]';",
	descriptionFull: [
		"You have studied languages and codes, gaining the following benefits:",
		" \u2022 Increase your Intelligence score by 1, to a maximum of 20.",
		" \u2022 You learn three languages of your choice.",
		" \u2022 You can ably create written ciphers. Others can't decipher a code you create unless you teach them, they succeed on an Intelligence check (DC equal to your Intelligence score + your proficiency bonus), or they use magic to decipher it.",
	],
	scores: [0, 0, 0, 1, 0, 0],
	languageProfs: [3],
};
FeatsList["martial adept"] = {
	name: "Martial Adept",
	source: [["P", 168]],
	description: "",
	calculate: "event.value = 'I learn two maneuvers of my choice from those available to the Battle Master (2nd page \"Choose Feature\" button). The saving throw DC for this is ' + (8 + Number(How('Proficiency Bonus')) + Math.max(Number(What('Str Mod')), Number(What('Dex Mod')))) + ' (8 + proficiency bonus + Str/Dex mod). I gain one superiority die (d6), which I regain when I finish a Short Rest.';",
	descriptionFull: [
		"You have martial training that allows you to perform special combat maneuvers. You gain the following benefits:",
		" \u2022 You learn two maneuvers of your choice from among those available to the Battle Master archetype in the fighter class. If a maneuver you use requires your target to make a saving throw to resist the maneuver's effects, the saving throw DC equals 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice).",
		" \u2022 You gain one superiority die, which is a d6 (this die is added to any superiority dice you have from another source). This die is used to fuel your maneuvers. A superiority die is expended when you use it. You regain your expended superiority dice when you finish a short or long rest.",
	],
	bonusClassExtrachoices: [{
		"class": "fighter",
		subclass: "fighter-battle master",
		feature: "subclassfeature3.1",
		bonus: 2,
	}],
	extraLimitedFeatures: [{
		name: "Superiority Dice",
		usages: 1,
		additional: "d6",
		recovery: "Short Rest",
		addToExisting: true,
	}],
};

// Adventuring Gear
[{
	key: "abacus",
	infoname: "Abacus [2 gp]",
	name: "Abacus",
	weight: 2,
}, {
	key: "bit and bridle",
	infoname: "Bit and bridle [2 gp]",
	name: "Bit and bridle",
	weight: 1,
}, {
	key: "chalk (1 piece)",
	infoname: "Chalk (1 piece) [1 cp]",
	name: "Chalk, pieces of",
}, {
	key: "common",
	infoname: "Common [5 sp]",
	name: "Common clothes",
	weight: 3,
	type: "clothes",
}, {
	key: "totem",
	infoname: "Totem [1 gp]",
	name: "Totem druidic focus",
	type: "druidic focus",
}, {
	key: "fishing tackle",
	infoname: "Fishing tackle [1 gp]",
	name: "Fishing tackle",
	weight: 4,
}, {
	key: "hammer",
	infoname: "Hammer [1 gp]",
	name: "Hammer",
	weight: 3,
}, {
	key: "hammer, sledge",
	infoname: "Hammer, sledge [2 gp]",
	name: "Sledge hammer",
	weight: 10,
}, {
	key: "hourglass",
	infoname: "Hourglass [25 gp]",
	name: "Hourglass",
	weight: 1,
}, {
	key: "small knife",
	infoname: "Small Knife [1 sp]",
	name: "Small Knife",
	weight: 0.25,
}, {
	key: "mess kit",
	infoname: "Mess kit [2 sp]",
	name: "Mess kit",
	weight: 1,
}, {
	key: "pick, miner's",
	infoname: "Pick, miner's [2 gp]",
	name: "Miner's pick",
	weight: 10,
}, {
	key: "piton",
	infoname: "Piton [5 cp]",
	name: "Piton",
	weight: 0.25,
}, {
	key: "rope, hempen (50 feet)",
	infoname: "Rope, hempen (50 feet) [1 gp]",
	name: "Hempen rope, feet of",
	amount: 50,
	weight: 0.2,
}, {
	key: "rope, silk (50 feet)",
	infoname: "Rope, silk (50 feet) [10 gp]",
	name: "Silk rope, feet of",
	amount: 50,
	weight: 0.1,
}, {
	key: "saddle, pack",
	infoname: "Pack [5 gp]",
	name: "Pack saddle",
	weight: 15,
	type: "saddle",
}, {
	key: "saddlebags",
	infoname: "Saddlebags [4 gp]",
	name: "Saddlebags",
	weight: 8,
}, {
	key: "scale, merchant's",
	infoname: "Scale, merchant's [5 gp]",
	name: "Merchant's scale",
	weight: 3,
}, {
	key: "sealing wax",
	infoname: "Sealing wax [5 cp]",
	name: "Sealing wax",
}, {
	key: "signet ring",
	infoname: "Signet ring [5 gp]",
	name: "Signet ring",
}, {
	key: "soap",
	infoname: "Soap [2 cp]",
	name: "Soap",
}, {
	key: "whetstone",
	infoname: "Whetstone [1 cp]",
	name: "Whetstone",
	weight: 1,
}].forEach(function (obj) {
	GearList[obj.key] = {
		infoname: obj.infoname,
		source: [["P", 150]],
		name: obj.name,
		amount: obj.amount !== undefined ? obj.amount : "",
		weight: obj.weight !== undefined ? obj.weight : "",
	}
})

// legacy_20141209_DMG.js
// This file adds all the player-material from the Dungeon Master's Guide to MPMB's Character Record Sheet

// Define the source
SourceList["D"] = {
	name: "2014 Dungeon Master's Guide",
	abbreviation: "DMG'14",
	group: "Legacy Sources",
	url: "https://dnd.wizards.com/products/dungeon-masters-guide",
	date: "2014/12/09",
	defaultExcluded: true,
};

// Subclasses
AddSubClass("cleric", "death domain", {
	regExpSearch: /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(death|dead|dying)).*$/i,
	subname: "Death Domain",
	source: [["D", 96]],
	features: {
		"subclassfeature3.0": {
			name: "Bonus Proficiency",
			source: [["D", 96]],
			minlevel: 3,
			description: desc("I gain proficiency with martial weapons."),
			weaponProfs: [false, true],
			spellcastingExtra: ["false life", "ray of sickness", "blindness/deafness", "ray of enfeeblement", "animate dead", "vampiric touch", "blight", "death ward", "antilife shell", "cloudkill"],
		},
		"subclassfeature3.1": {
			name: "Reaper",
			source: [["D", 96]],
			minlevel: 3,
			description: desc("I learn one necromancy cantrip of my choice from any spell list. My necromancy, single-target cantrips can affect two targets within 5 ft of each other."),
			spellcastingBonus: [{
				name: "Reaper",
				"class": "any",
				school: ["Necro"],
				level: [0, 0],
			}],
			calcChanges: {
				spellAdd: [
					function (spellKey, spellObj, spName) {
						if (spellObj.school == "Necro" && spellObj.level === 0) {
							var startDescr = spellObj.description;
							switch (spellKey) {
								case "chill touch" :
									spellObj.description = spellObj.description.replace("Spell attack", "2 crea in 5 ft spell atk").replace("Necrotic", "Necro.").replace("at CL 5, 11, and 17", "CL 5/11/17");
									break;
								case "spare the dying" :
									spellObj.description = spellObj.description.replace("1 living creature", "1 living creature (or 2 within 5 ft of each other)");
									break;
								case "toll the dead" :
								default :
									spellObj.description = spellObj.description.replace(/1 crea(ture)?/i, "2 crea in 5 ft").replace("disadvantage", "Disadv").replace("save halves", "save half");
							}
							return startDescr !== spellObj.description;
						};
					},
					"My necromancy, single-target cantrips can affect two targets within 5 ft of each other.",
				],
			},
		},
		"subclassfeature3.2": {
			name: "Touch of Death",
			source: [["D", 97]],
			minlevel: 3,
			description: desc("When I hit a creature with a melee attack, I can deal extra Necrotic damage."),
			additional: ["", "+9 damage; 1 CD", "+11 damage; 1 CD", "+13 damage; 1 CD", "+15 damage; 1 CD", "+17 damage; 1 CD", "+19 damage; 1 CD", "+21 damage; 1 CD", "+23 damage; 1 CD", "+25 damage; 1 CD", "+27 damage; 1 CD", "+29 damage; 1 CD", "+31 damage; 1 CD", "+33 damage; 1 CD", "+35 damage; 1 CD", "+37 damage; 1 CD", "+39 damage; 1 CD", "+41 damage; 1 CD", "+43 damage; 1 CD", "+45 damage; 1 CD"],
		},
		"subclassfeature6": {
			name: "Inescapable Destruction",
			source: [["D", 97]],
			minlevel: 6,
			description: desc("When I deal Necrotic damage with spells or Channel Divinity, I ignore Resistance to it."),
		},
		"subclassfeature17": {
			name: "Improved Reaper",
			source: [["D", 97]],
			minlevel: 17,
			description: desc("If I cast a 5th-level or lower necromancy spell that has one target, I can target two. They need to be within 5 ft of each other and I have to provide Material components for both."),
			calcChanges: {
				spellAdd: [
					function (spellKey, spellObj, spName) {
						if (spellObj.school == "Necro" && spellObj.level && spellObj.level < 6) {
							var startDescr = spellObj.description;
							switch (spellKey) {
								case "blindness/deafness" :
									// only 2 target if not cast at higher SL
									spellObj.description = "2 crea in 5 ft or " + spellObj.description;
									break;
								case "contagion" :
								case "inflict wounds" :
								case "ray of enfeeblement" :
									spellObj.description = spellObj.description.replace(/(Melee )?spell attack/i, "2 " + "$1".toLowerCase() + "spell atk in 5 ft").replace("spell ends", "ends");
									break;
								case "cause fear" :
									spellObj.description = "2 crea in 5 ft or 1+1/SL crea max 30 ft apart (no constr/undead), save or frightened; save end of turn";
									break;
								case "feign death" :
									spellObj.description = "2 willing crea in 5 ft appear dead; Are blinded, incapacitated, dmg resist. all but Psychic, speed 0";
									break;
								case "gentle repose" :
									spellObj.description = spellObj.description.replace("1 corpse protected from", "2 corpses in 5 ft suffer no");
									break;
								case "raise dead" :
								case "revivify" :
									spellObj.description = spellObj.description.replace("a creature's body that has", "body of 2 crea in 5 ft that").replace("cons.)", "cons. \xD72)");
									spellObj.compMaterial += " (once for each target)";
									break;
								case "speak with dead" :
									spellObj.description = spellObj.description.replace("1 corpse with mouth answers 5 questions", "2 corpses in 5 ft answer 5 questions each");
									break;
								case "enervation" :
									spellObj.description = spellObj.description.replace("action", "1 a").replace("see book", "see B");
								case "bestow curse" :
								case "blight" :
								case "cause fear-uass" :
								case "life transference" :
								case "negative energy flood" :
								default :
									spellObj.description = spellObj.description.replace(/1 crea(ture)?/i, "2 crea in 5 ft").replace("disadvantage", "Disadv").replace("save halves", "save half");
							}
							return startDescr !== spellObj.description;
						};
					},
					"My necromancy, single-target 5th-level or lower spells can affect two targets within 5 ft of each other if both are within range of the spell. The spells still require material components for each target separately.",
				],
			},
		},
	},
});
AddSubClass("paladin", "oathbreaker", {
	regExpSearch: /^((?=.*blackguard)|((?=.*(oath.*breaker|breaker.*oath))((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|warrior|warlord|trooper)))))).*$/i,
	subname: "Oathbreaker",
	source: [["D", 97]],
	features: {
		"subclassfeature3": {
			name: "Control Undead",
			source: [["D", 97]],
			minlevel: 3,
			additional: "1 Channel Divinity",
			description: desc("As an action, one Undead (CR < paladin level) I can see in 30 ft must make a Wis save or obey my commands for 24 hours or until I use this on another."),
			action: [["action", ""]],
			spellcastingExtra: ["hellish rebuke", "inflict wounds", "crown of madness", "darkness", "animate dead", "bestow curse", "blight", "confusion", "contagion", "dominate person"],
		},
		"subclassfeature3.1": {
			name: "Dreadful Aspect",
			source: [["D", 97]],
			minlevel: 3,
			additional: "1 Channel Divinity",
			description: desc("As an action, any creature of my choice within 30 ft that can see me must make a Wisdom save or be Frightened for 1 min or until it succeeds on a save at the end of its turn. It can't save at the end of its turn if it's still within 30 ft of me."),
			action: [["action", ""]],
		},
		"subclassfeature7": {
			name: "Aura of Hate",
			source: [["D", 97]],
			minlevel: 7,
			description: desc("Fiends/Undead within range and I add my Cha mod as bonus on melee weapon damage. Multiple Auras of Hate don't stack, only the strongest applies."),
			additional: ["", "", "", "", "", "", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "30-foot aura", "30-foot aura", "30-foot aura"],
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (v.isMeleeWeapon) {
							fields.Description += (fields.Description ? "; " : "") + "Cha mod added to damage";
						}
					},
					"I add my Charisma modifier to my melee weapon damage.",
				],
				atkCalc: [
					function (fields, v, output) {
						if (v.isMeleeWeapon) {
							output.extraDmg += Number(What("Cha Mod"));
						};
					},
				],
			},
		},
		"subclassfeature15": {
			name: "Supernatural Resistance",
			source: [["D", 97]],
			minlevel: 15,
			description: desc("I have Resistance to Bludgeoning/Piercing/Slashing damage from nonmagical weapons."),
			dmgres: [["Bludgeoning", "Bludg. (nonmagical)"], ["Piercing", "Pierc. (nonmagical)"], ["Slashing", "Slash. (nonmagical)"]],
		},
		"subclassfeature20": {
			name: "Dread Lord",
			source: [["D", 97]],
			minlevel: 20,
			description: desc([
				"As an action, I gain a 30-ft aura of gloom that reduces Bright Light to dim for 1 min. If Frightened of me, foes starting their turn in the aura take 4d10 Psychic damage. Attacks vs my allies and me inside the aura have Disadvantage if attackers need sight.",
				"As a Bonus Action, I can make a melee spell attack vs a target inside the aura. If this attack hits, it does 3d10 + Charisma modifier Necrotic damage.",
			]),
			recovery: "Long Rest",
			usages: 1,
			action: [["action", ""]],
		},
	},
});

// legacy_20150407_PotA.js
// This file adds the magic items from the Princes of the Apocalypse adventure to MPMB's Character Record Sheet

// Define the source
SourceList["PotA"] = {
	name: "Princes of the Apocalypse [items]",
	abbreviation: "PotA",
	group: "Legacy Adventure Books",
	campaignSetting: "Forgotten Realms",
	url: "https://dnd.wizards.com/products/princes-apocalypse",
	date: "2015/04/07",
	defaultExcluded: true,
};

// Magic Items
MagicItemsList["balloon pack"] = {
	name: "Balloon Pack",
	source: [["PotA", 222]],
	type: "Wondrous Item",
	rarity: "Uncommon",
	description: "As an action, I can deploy the balloon to gain the effects of *Levitate* for 10 minutes. As a Reaction, I can deploy the balloon to gain the effects of *Feather Fall*. After either effect ends, I descend slowly for 60 ft as it deflates. Once used in either way, the backpack is useless until recharged in an air node for 1 hour.",
	descriptionFull: [
		"This backpack contains the spirit of an air elemental and a compact leather balloon. While you're wearing the backpack, you can deploy the balloon as an action and gain the effect of the *Levitate* spell for 10 minutes, targeting yourself and requiring no concentration. Alternatively, you can use a reaction to deploy the balloon when you're falling and gain the effect of the *Feather Fall* spell for yourself.",
		"When either spell ends, the balloon slowly deflates as the elemental spirit escapes and returns to the Elemental Plane of Air. As the balloon deflates, you descend gently toward the ground for up to 60 feet. If you are still in the air at the end of this distance, you fall if you have no other means of staying aloft.",
		"After the spirit departs, the backpack's property is unusable unless the backpack is recharged for 1 hour in an elemental air node, which binds another spirit to the backpack.",
	],
	weight: 5, // as backpack
	usages: 1,
	recovery: "Air Node",
	additional: "recharge: 1 h in air node",
	action: [["action", " (Levitate)"], ["reaction", " (Feather Fall)"]],
	spellFirstColTitle: "Ch",
	spellcastingBonus: [{
		name: "1 charge",
		spells: ["feather fall", "levitate"],
		selection: ["feather fall", "levitate"],
		firstCol: 1,
		times: 2,
	}],
	spellChanges: {
		"feather fall": {
			range: "Self",
			description: "I descend only 60 ft/rnd for duration or until landed, taking no falling damage",
			changes: "Using the Balloon Pack, I can only target myself.",
		},
		"levitate": {
			range: "Self",
			duration: "10 min",
			save: "",
			description: "I rise vertically, up to 20 ft; move up/down 20 ft instead of normal move",
			changes: "Using the Balloon Pack, I can only target myself, but the spell requires no concentration.",
		},
	},
}
MagicItemsList["bottled breath"] = {
	name: "Bottled Breath",
	source: [["PotA", 222]],
	type: "Potion",
	rarity: "Uncommon",
	description: "Once as an action, I can inhale this breath of elemental air or administer it to another. The target then either exhales it or holds it in. If exhaled immediately, it produces the effects of *Gust of Wind*. Holding it in removes the need to breathe for 1 hour, though this benefit can end early, by speaking for example.",
	descriptionFull: [
		"This bottle contains a breath of elemental air. When you inhale it, you either exhale it or hold it.",
		"If you exhale the breath, you gain the effect of the *Gust of Wind* spell. If you hold the breath, you don't need to breathe for 1 hour, though you can end this benefit early (for example, to speak). Ending it early doesn't give you the benefit of exhaling the breath.",
	],
	weight: 0.5,
}
MagicItemsList["claws of the umber hulk"] = {
	name: "Claws of the Umber Hulk",
	source: [["PotA", 222]],
	type: "Wondrous Item",
	rarity: "Rare",
	description: "These brown iron gauntlets, shaped like umber hulk claws, cover my hands up to my elbows. While wearing both, I can tunnel 1 ft per round through solid rock and have a 20 ft Burrow Speed, but can't use somatic spell components or manipulate items. I can use them as melee weapons, dealing 1d8 Slashing damage.",
	descriptionFull: [
		"These heavy gauntlets of brown iron are forged in the shape of an umber hulk's claws, and they fit the wearer's hands and forearms all the way up to the elbow. While wearing both claws, you gain a burrowing speed of 20 feet, and you can tunnel through solid rock at a rate of 1 foot per round.",
		"You can use a claw as a melee weapon while wearing it. You have proficiency with it, and it deals 1d8 slashing damage on a hit (your Strength modifier applies to the attack and damage rolls, as normal).",
		"While wearing the claws, you can't manipulate objects or cast spells with somatic components.",
	],
	weight: 1,
	attunement: true,
	speed: { burrow: { spd: "fixed20", enc: "fixed10" } },
	weaponOptions: [{
		regExpSearch: /^(?=.*claws)(?=.*umber)(?=.*hulk).*$/i,
		name: "Claws of the Umber Hulk",
		source: [["PotA", 222]],
		ability: 1,
		type: "Natural",
		damage: [1, 8, "slashing"],
		range: "Melee",
		description: "",
		abilitytodamage: true,
		selectNow: true,
	}],
}
var PotA_tempDevastationOrbNoteTxt = [
	"A *devastation orb* is an elemental bomb that can be created at the site of an elemental node by performing a ritual with an elemental weapon. The type of orb created depends on the node used. For example, an air node creates a *devastation orb of air*. The ritual takes 1 hour to complete and requires 2,000 gp worth of special components, which are consumed.\n   A *devastation orb* measures 12 inches in diameter, weighs 10 pounds, and has a solid outer shell. The orb detonates 1d100 hours after its creation, releasing the elemental energy it contains. The orb gives no outward sign of how much time remains before it will detonate. Spells such as *Identify* and *Divination* can be used to ascertain when the orb will explode. An orb has AC 10, 15 hit points, and immunity to poison and psychic damage. Reducing it to 0 hit points causes it to explode instantly.\n   A special container can be crafted to contain a *devastation orb* and prevent it from detonating. The container must be inscribed with symbols of the orb's opposing element. For example, a case inscribed with earth symbols can be used to contain a *devastation orb of air* and keep it from detonating. While in the container, the orb thrums. If it is removed from the container after the time when it was supposed to detonate, it explodes 1d6 rounds later, unless it is returned to the container.\n   Regardless of the type of orb, its effect is contained within a sphere with a 1 mile radius. The orb is the sphere's point of origin. The orb is destroyed after one use.",
	desc([
		"This elemental bomb can be created at the site of an elemental node of tELEMENT by performing a ritual with an elemental weapon. The ritual takes 1 hour to complete and requires 2,000 gp worth of special components, which are consumed.",
		"A devastation orb measures 12 inches in diameter, weighs 10 pounds, and has a solid outer shell. The orb detonates 1d100 hours after its creation, releasing the elemental energy it contains. The orb gives no outward sign of how much time remains before it will detonate. Spells such as *Identify* and *Divination* can be used to ascertain when the orb will explode. An orb has AC 10, 15 Hit Points, and Immunity to Poison and Psychic damage. Reducing it to 0 Hit Points causes it to explode instantly.",
		"A special container inscribed with symbols of oELEMENT can be crafted to contain a devastation orb of tELEMENT and prevent it from detonating. While in the container, the orb thrums. If it is removed from the container after the time when it was supposed to detonate, it explodes 1d6 rounds later, unless it is returned to the container.",
	]),
];
MagicItemsList["devastation orb"] = {
	name: "Devastation Orb",
	source: [["PotA", 222]],
	type: "Wondrous Item",
	rarity: "Very Rare",
	description: "This 12 inch diameter orb has AC 10, 15 HP, and is Immune to Poison and Psychic damage. It explodes 1d100 hours after its creation or when reduced to 0 HP. When detonated, it creates an effect in a 1-mile radius around it.",
	descriptionFull: PotA_tempDevastationOrbNoteTxt[0],
	weight: 10,
	allowDuplicates: true,
	choices: ["Air", "Earth", "Fire", "Water"],
	choicesNotInMenu: true,
	"air": {
		name: "Devastation Orb of Air",
		description: "This 12 inch diameter orb has AC 10, 15 HP, and is Immune to Poison and Psychic damage. It explodes 1d100 hours after its creation or when reduced to 0 HP. When detonated, it creates a powerful windstorm in 1 mile around it for 1 hour. Everything exposed to the wind is damaged by it. See Notes page.",
		descriptionFull: PotA_tempDevastationOrbNoteTxt[0] + "\n   ***Air Orb***. When this orb detonates, it creates a powerful windstorm that lasts for 1 hour. Whenever a creature ends its turn exposed to the wind, the creature must succeed on a DC 18 Constitution saving throw or take 1d4 bludgeoning damage, as the wind and debris batter it. The wind is strong enough to uproot weak trees and destroy light structures after at least 10 minutes of exposure. Otherwise, the rules for strong wind apply, as detailed in chapter 5 of the Dungeon Master's Guide.",
		toNotesPage: [{
			name: "Features",
			note: PotA_tempDevastationOrbNoteTxt[1].replace(/tELEMENT/g, "air").replace(/oELEMENT/g, "earth") + "\n  When this orb detonates, it creates a powerful windstorm within a sphere with a 1 mile radius that lasts for 1 hour. Whenever a creature ends its turn exposed to the wind, the creature must succeed on a DC 18 Constitution saving throw or take 1d4 Bludgeoning damage, as the wind and debris batter it. The wind is strong enough to uproot weak trees and destroy light structures after at least 10 minutes of exposure. Otherwise, the rules for strong wind apply. A strong wind imposes Disadvantage on ranged weapon attack rolls and Wisdom (Perception) checks that rely on hearing. A strong wind also extinguishes open flames, disperses fog, and makes flying by nonmagical means nearly impossible. A flying creature in a strong wind must land at the end of its turn or fall. A strong wind in a desert can create a sandstorm that imposes Disadvantage on Wisdom (Perception) checks that rely on sight.",
		}],
	},
	"earth": {
		name: "Devastation Orb of Earth",
		description: "This 12 inch diameter orb has AC 10, 15 HP, and is Immune to Poison and Psychic damage. It explodes 1d100 hours after its creation or when reduced to 0 HP. When detonated, it creates the effect of an *Earthquake* spell in 1 mile around it for 1 minute. See Notes page.",
		descriptionFull: PotA_tempDevastationOrbNoteTxt[0] + "\n   ***Earth Orb***. When this orb detonates, it subjects the area to the effects of the *Earthquake* spell for 1 minute (spell save DC 18). For the purpose of the spell's effects, the spell is cast on the turn that the orb explodes.",
		toNotesPage: [{
			name: "Features",
			note: PotA_tempDevastationOrbNoteTxt[1].replace(/tELEMENT/g, "earth").replace(/oELEMENT/g, "air") + desc([
				"When this orb detonates, it subjects the area to the effects of the *Earthquake* spell for 1 minute (spell save DC 18). For the purpose of the spell's effects, the spell is cast on the turn that the orb explodes.",
				"The *Earthquake* spell creates a seismic disturbance that shakes creatures and structures in contact with the ground in that area. The ground in the area becomes difficult terrain. Each creature on the ground that is concentrating must make a Constitution saving throw. On a failed save, the creature's concentration is broken.",
				"At the end of each turn this goes on, each creature on the ground in the area must make a Dexterity saving throw. On a failed save, the creature is knocked Prone.",
				"This spell can have additional effects depending on the terrain in the area, as determined by the DM.",
				"\u2022 Fissures. Fissures open throughout the spell's area at the start of the turn after the orb detonates. A total of 1d6 such fissures open in locations chosen by the DM. Each is 1d10 \xD7 10 ft deep, 10 ft wide, and extends from one edge of the area to the opposite side. A creature standing on a spot where a fissure opens must succeed on a Dexterity saving throw or fall in. A creature that successfully saves moves with the fissure's edge as it opens. A fissure that opens beneath a structure causes it to automatically collapse (see below).",
				"\u2022 Structures. The tremor deals 50 Bludgeoning damage to any structure in contact with the ground in the area when the orb detonates and at the start of each of turns for the duration. If a structure drops to 0 Hit Points, it collapses and potentially damages nearby creatures. A creature within half the distance of a structure's height must make a Dexterity saving throw. On a failed save, the creature takes 5d6 Bludgeoning damage, is knocked Prone, and is buried in the rubble, requiring a DC 20 Strength (Athletics) check as an action to escape. The DM can adjust the DC higher or lower, depending on the nature of the rubble. On a successful save, the creature takes half as much damage and doesn't fall Prone or become buried.",
			]),
		}],
	},
	"fire": {
		name: "Devastation Orb of Fire",
		description: "This 12 inch diameter orb has AC 10, 15 HP, and is Immune to Poison and Psychic damage. It explodes 1d100 hours after its creation or when reduced to 0 HP. When detonated, it creates a dry heat wave in 1 mile around it for 24 hours. There is extreme heat within the area and wildfires can appear within, see Notes.",
		descriptionFull: PotA_tempDevastationOrbNoteTxt[0] + "\n   ***Fire Orb***. When this orb detonates, it creates a dry heat wave that lasts for 24 hours. Within the area of effect, the rules for extreme heat apply, as detailed in chapter 5 of the Dungeon Master's Guide. At the end of each hour, there is a ten percent chance that the heat wave starts a wildfire in a random location within the area of effect. The wildfire covers a 10-foot-square area initially but expands to fill another 10-foot square each round until the fire is extinguished or burns itself out. A creature that comes within 10 feet of a wildfire for the first time on a turn or starts its turn there takes 3d6 fire damage.",
		toNotesPage: [{
			name: "Features",
			note: PotA_tempDevastationOrbNoteTxt[1].replace(/tELEMENT/g, "fire").replace(/oELEMENT/g, "water") + "\n  When this orb detonates, it creates a dry heat wave within a 1-mile radius sphere that lasts for 24 hours. At the end of each hour, there is a ten percent chance that the heat wave starts a wildfire in a random location within the area of effect. The wildfire covers a 10-foot-square area initially but expands to fill another 10-foot square each round until the fire is extinguished or burns itself out. A creature that comes within 10 feet of a wildfire for the first time on a turn or starts its turn there takes 3d6 Fire damage.\n   Within the area of effect, the rules for extreme heat apply, as the temperature is above 100 \u00B0F. Any creature exposed to the heat and without access to drinkable water must succeed on a Constitution saving throw at the end of each hour or gain one level of Exhaustion. The DC is 5 for the first hour and increases by 1 for each additional hour. Creatures wearing medium or heavy armor, or who are clad in heavy clothing, have Disadvantage on the saving throw. Creatures with Resistance or Immunity to Fire damage automatically succeed on the saving throw, as do creatures naturally adapted to hot climates.",
		}],
	},
	"water": {
		name: "Devastation Orb of Water",
		description: "This 12 inch diameter orb has AC 10, 15 HP, and is Immune to Poison and Psychic damage. It explodes 1d100 hours after its creation or when reduced to 0 HP. When detonated, it creates a torrential rainstorm in 1 mile around it for 24 hours. If bodies of water exist in the area, they rise 10 ft and flood. See Notes page.",
		descriptionFull: PotA_tempDevastationOrbNoteTxt[0] + "\n   ***Water Orb***. When this orb detonates, it creates a torrential rainstorm that lasts for 24 hours. Within the area of effect, the rules for heavy precipitation apply, as detailed in chapter 5 of the Dungeon Master's Guide. If there is a substantial body of water in the area, it floods after 2d10 hours of heavy rain, rising 10 feet above its banks and inundating the surrounding area. The flood advances at a rate of 100 feet per round, moving away from the body of water where it began until it reaches the edge of the area of effect: at that point, the water flows downhill (and possibly recedes back to its origin). Light structures collapse and wash away. Any Large or smaller creature caught in the flood's path is swept away. The flooding destroys crops and might trigger mudslides, depending on the terrain.",
		toNotesPage: [{
			name: "Features",
			note: PotA_tempDevastationOrbNoteTxt[1].replace(/tELEMENT/g, "water").replace(/oELEMENT/g, "fire") + "\n  When this orb detonates, it creates a torrential rainstorm in a 1-mile radius sphere that lasts for 24 hours. If there is a substantial body of water in the area, it floods after 2d10 hours of heavy rain, rising 10 feet above its banks and inundating the surrounding area. The flood advances at a rate of 100 feet per round, moving away from the body of water where it began until it reaches the edge of the area of effect: at that point, the water flows downhill (and possibly recedes back to its origin). Light structures collapse and wash away. Any Large or smaller creature caught in the flood's path is swept away. The flooding destroys crops and might trigger mudslides, depending on the terrain.\n   Within the area of effect, the rules for heavy precipitation apply. Everything is Lightly Obscured, and creatures in the area have Disadvantage on Wisdom (Perception) checks that rely on sight. Heavy rain also extinguishes open flames and imposes Disadvantage on Wisdom (Perception) checks that rely on hearing.",
		}],
	},
}
MagicItemsList["drown"] = {
	name: "Drown",
	source: [["PotA", 224]],
	type: "Weapon (Trident)",
	rarity: "Legendary",
	storyItemAL: true,
	description: "This trident has a +1 bonus on to hit and damage and deals +1d8 Cold damage. It allows me to speak Aquan, grants me Resistance to Cold damage, and allows me to cast *Dominate Monster* on a water elemental once per dawn. It gives me a flaw, see Notes page.",
	descriptionFull: [
		"A steel trident decorated with bronze barnacles along the upper part of its haft, *Drown* has a sea-green jewel just below the tines and a silver shell at the end of its haft. It floats on the surface if dropped onto water, and it floats in place if it is released underwater. The trident is always cool to the touch, and it is immune to any damage due to exposure to water. *Drown* contains a spark of Olhydra, the Princess of Evil Water.",
		"You gain a +1 bonus to attack and damage rolls made with this magic weapon. When you hit with it, the targets take an extra 1d8 cold damage.",
		"***Water Mastery***. You gain the following benefits while you hold *Drown*:",
		" \u2022 You can speak Aquan fluently.",
		" \u2022 You have resistance to cold damage.",
		" \u2022 You can cast *Dominate Monster* (save DC 17) on a water elemental. Once you have done so, *Drown* can't be used this way again until the next dawn.",
		"***Tears of Endless Anguish***. While inside a water node, you can perform a ritual called the Tears of Endless Anguish, using *Drown* to create a *devastation orb of water*. Once you perform the ritual, *Drown* can't be used to perform the ritual again until the next dawn.",
		"***Flaw***. *Drown* makes its wielder covetous. While attuned to the weapon, you gain the following flaw: \"I demand and deserve the largest share of the spoils, and I refuse to part with anything that's mine.\" In addition, if you are attuned to *Drown* for 24 consecutive hours, barnacles form on your skin. The barnacles can be removed with a *Greater Restoration* spell or similar magic, but not while you are attuned to the weapon.",
	],
	attunement: true,
	weight: 4,
	languageProfs: ["Aquan"],
	dmgres: ["Cold"],
	usages: 1,
	recovery: "dawn",
	fixedDC: 17,
	spellcastingBonus: [{
		name: "Once per dawn",
		spells: ["dominate monster"],
		selection: ["dominate monster"],
		firstCol: "onceday",
	}],
	spellChanges: {
		"dominate monster": {
			description: "Water elemental save or Charmed, obeys telepathic commands, Act for complete control; save on dmg",
			changes: "Can only affect a water elemental.",
		},
	},
	weaponOptions: [{
		baseWeapon: "trident",
		regExpSearch: /drown/i,
		name: "Drown",
		source: [["PotA", 224]],
		description: "Thrown, Versatile (1d10); +1d8 Cold damage",
		modifiers: [1, 1],
		selectNow: true,
	}],
	toNotesPage: [{
		name: "Features",
		note: [
			"A steel trident decorated with bronze barnacles along the upper part of its haft, Drown has a sea-green jewel just below the tines and a silver shell at the end of its haft. It floats on the surface if dropped onto water, and it floats in place if it is released underwater. The trident is always cool to the touch, and it is Immune to any damage due to exposure to water. Drown contains a spark of Olhydra, the Princess of Evil Water.",
			"I gain a +1 bonus to attack and damage rolls made with this magic weapon. When I hit with it, the targets take an extra 1d8 Cold damage.",
			"While holding Drown, I can speak Aquan fluently, have Resistance to Cold damage, I can cast *Dominate Monster* (save DC 17) on a water elemental once per dawn.",
			"While inside a water node, I can perform a ritual called the Tears of Endless Anguish, using Drown to create a Devastation Orb of Water. The ritual takes 1 hour to complete and requires 2,000 gp worth of special components, which are consumed. Once I perform the ritual, Drown can't be used to perform the ritual again until the next dawn.",
			"Drown makes me covetous. While attuned to the weapon, I gain the following flaw: \"I demand and deserve the largest share of the spoils, and I refuse to part with anything that's mine.\" In addition, if I am attuned to Drown for 24 consecutive hours, barnacles form on my skin. The barnacles can be removed with a *Greater Restoration* spell or similar magic, but not while I am attuned to the weapon.",
		],
	}],
}
MagicItemsList["ironfang"] = {
	name: "Ironfang",
	source: [["PotA", 224]],
	type: "Weapon (War Pick)",
	rarity: "Legendary",
	storyItemAL: true,
	description: "This war pick has a +2 bonus on to hit and damage and deals +1d8 Thunder damage. It allows me to speak Terran, grants me Resistance to Acid damage, Tremorsense 60 ft, allows me to cast *Dominate Monster* on an earth elemental once per dawn, and *Shatter* using 1 of its 3 charges and more, see Notes page.",
	descriptionFull: [
		"A war pick forged from a single piece of iron, *Ironfang* has a fang-like head inscribed with ancient runes. The pick is heavy in the hand, but when the wielder swings the pick in anger, the weapon seems almost weightless. This weapon is immune to any form of rust, acid, or corrosion\u2014nothing seems to mark it. *Ironfang* contains a spark of Ogr\xE9moch, the Prince of Evil Earth.",
		"You gain a +2 bonus to attack and damage rolls made with this magic weapon. When you hit with it, the target takes an extra 1d8 thunder damage.",
		"***Earth Mastery***. You gain the following benefits while you hold *Ironfang*:",
		" \u2022 You can speak Terran fluently.",
		" \u2022 You have resistance to acid damage.",
		" \u2022 You have tremorsense out to a range of 60 feet.",
		" \u2022 You can sense the presence of precious metals and stones within 60 feet of you, but not their exact location.",
		" \u2022 You can cast *Dominate Monster* (save DC 17) on an earth elemental. Once you have done so, *Ironfang* can't be used this way again until the next dawn.",
		"***Shatter***. *Ironfang* has 3 charges. You can use your action to expend 1 charge and cast the 2nd-level version of *Shatter* (DC 17). *Ironfang* regains 1d3 expended charges daily at dawn.",
		"***The Rumbling***. While inside an earth node, you can perform a ritual called the Rumbling, using *Ironfang* to create a *devastation orb of earth*. Once you perform the ritual, *Ironfang* can't be used to perform the ritual again until the next dawn.",
		"***Flaw***. *Ironfang* heightens its wielder's destructive nature. While attuned to the weapon, you gain the following flaw: \"I like to break things and cause ruin.\"",
	],
	attunement: true,
	weight: 2,
	languageProfs: ["Terran"],
	dmgres: ["Acid"],
	usages: 1,
	recovery: "dawn",
	fixedDC: 17,
	limfeaname: "Ironfang [Rumbling ritual]",
	spellFirstColTitle: "Ch",
	extraLimitedFeatures: [{
		name: "Ironfang [Dominate Monster]",
		usages: 1,
		recovery: "dawn",
	}, {
		name: "Ironfang [Shatter] (regains 1d3)",
		usages: 3,
		recovery: "dawn",
	}],
	spellcastingBonus: [{
		name: "Once per dawn",
		spells: ["dominate monster"],
		selection: ["dominate monster"],
		firstCol: "onceday",
	}, {
		name: "1 charge",
		spells: ["shatter"],
		selection: ["shatter"],
		firstCol: 1,
	}],
	spellChanges: {
		"dominate monster": {
			description: "Earth elemental save or Charmed, follows telepathic commands, 1 a for complete control; save on dmg",
			changes: "Can only affect an earth elemental.",
		},
		"shatter": {
			description: "10-ft rad all 4d8 Thunder dmg; save halves; nonmagical unattended objects also take dmg",
			changes: "Cast as if using a 2nd-level spell slot.",
		},
	},
	vision: [["Tremorsense", "fixed 60"]],
	weaponOptions: [{
		baseWeapon: "war pick",
		regExpSearch: /ironfang/i,
		name: "Ironfang",
		source: [["PotA", 224]],
		description: "Versatile (1d10); +1d8 Thunder damage",
		modifiers: [2, 2],
		selectNow: true,
	}],
	toNotesPage: [{
		name: "Features",
		note: [
			"A war pick forged from a single piece of iron, Ironfang has a fang-like head inscribed with ancient runes. The pick is heavy in the hand, but when the wielder swings the pick in anger, the weapon seems almost weightless. This weapon is immune to any form of rust, acid, or corrosion\u2014nothing seems to mark it. Ironfang contains a spark of Ogr\xE9moch, the Prince of Evil Earth.",
			"I gain a +2 bonus to attack and damage rolls made with this magic weapon. When I hit with it, the target takes an extra 1d8 Thunder damage.",
			"While holding Ironfang, I can speak Terran fluently, have Resistance to Acid damage, have Tremorsense out to a range of 60 ft, can sense the presence of precious metals and stones within 60 ft of me, but not their exact location, and can cast *Dominate Monster* (save DC 17) on an earth elemental once per dawn.",
			"Ironfang has 3 charges and regains 1d3 expended charges daily at dawn. I can use my action to expend 1 charge and cast the 2nd-level version of *Shatter* (DC 17).",
			"While inside an earth node, I can perform a ritual called the Rumbling, using Ironfang to create a Devastation Orb of Earth. The ritual takes 1 hour to complete and requires 2,000 gp worth of special components, which are consumed. Once I perform the ritual, Ironfang can't be used to perform the ritual again until the next dawn.",
			'Ironfang heightens my destructive nature. While attuned to the weapon, I gain the following flaw: "I like to break things and cause ruin."',
		],
	}],
}
MagicItemsList["lost crown of besilmer"] = {
	name: "Lost Crown of Besilmer",
	source: [["PotA", 223]],
	type: "Wondrous Item",
	rarity: "Legendary",
	storyItemAL: true,
	description: "This dwarven battle-helm gives me Psychic Resistance and Adv on saves against being Charmed. It has 3 charges, regaining 1d3 at dawn. As a Bonus Action, I can use 1 charge to inspire an ally that I can see in 60 ft and that can see and hear me. Before my next turn ends, it can add +1d6 to 1 ability check, attack, or save.",
	descriptionFull: [
		"This dwarven battle-helm consists of a sturdy open-faced steel helmet, decorated with a golden circlet above the brow from which seven small gold spikes project upward. You gain the following benefits while wearing the crown:",
		" \u2022 You have resistance to psychic damage.",
		" \u2022 You have advantage on saving throws against effects that would charm you.",
		" \u2022 You can use a bonus action to inspire one creature you can see that is within 60 feet of you and that can see or hear you. Once before the end of your next turn, the inspired creature can roll a d6 and add the number rolled to one ability check, attack roll, or saving throw it makes. This uses 1 charge from the crown. It has 3 charges, and it regains 1d3 expended charges daily at dawn.",
	],
	attunement: true,
	usages: 3,
	recovery: "dawn",
	additional: "regains 1d3",
	action: [["bonus action", " (inspire)"]],
	dmgres: ["Psychic"],
	savetxt: { adv_vs: ["Charmed"] },
}
MagicItemsList["orcsplitter"] = {
	name: "Orcsplitter",
	source: [["PotA", 224]],
	type: "Weapon (Greataxe)",
	rarity: "Legendary",
	prerequisite: "Requires attunement by a good-aligned dwarf, fighter, or paladin",
	description: "This sentient greataxe has a +2 bonus on to hit and damage. If I roll a 20 on an attack vs an orc with it, the orc must make a DC 17 Con save or be reduced to 0 HP. While I'm not Incapacitated, I can't be surprised by orcs, and me and my allies in 30 ft can't be Frightened. I can sense orcs within 120 ft. See Notes page.",
	descriptionFull: [
		"A mighty axe wielded long ago by the dwarf king Torhild Flametongue, *Orcsplitter* is a battered weapon that appears unremarkable at first glance. Its head is graven with the Dwarvish runes for \"orc,\" but the runes are depicted with a gap or slash through the markings; the word \"orc\" is literally split in two.",
		"You gain the following benefits while holding this magic weapon:",
		" \u2022 You gain a +2 bonus to attack and damage rolls made with it.",
		" \u2022 When you roll a 20 on an attack roll with this weapon against an orc, that orc must succeed on a DC 17 Constitution saving throw or drop to 0 hit points.",
		" \u2022 You can't be surprised by orcs while you're not incapacitated. You are also aware when orcs are within 120 feet of you and aren't behind total cover, although you don't know their location.",
		" \u2022 You and any of your friends within 30 feet of you can't be frightened while you're not incapacitated.",
		"***Sentience***. *Orcsplitter* is a sentient, lawful good weapon with an Intelligence of 6, a Wisdom of 15, and a Charisma of 10. It can see and hear out to 120 feet and has darkvision. It communicates by transmitting emotions to its wielder, although on rare occasions it uses a limited form of telepathy to bring to the wielder's mind a couplet or stanza of ancient Dwarvish verse.",
		"***Personality***. *Orcsplitter* is grim, taciturn, and inflexible. It knows little more than the desire to face orcs in battle and serve a courageous, just wielder. It disdains cowards and any form of duplicity, deception, or disloyalty. The weapon's purpose is to defend dwarves and to serve as a symbol of dwarven resolve. It hates the traditional foes of dwarves\u2014giants, goblins, and, most of all, orcs\u2014and silently urges its possessor to meet such creatures in battle.",
	],
	attunement: true,
	weight: 7,
	weaponOptions: [{
		baseWeapon: "greataxe",
		regExpSearch: /orcsplitter/i,
		name: "Orcsplitter",
		source: [["PotA", 224]],
		description: "Heavy, Two-Handed; On 20 vs Orc: it DC 17 Con save or 0 HP",
		modifiers: [2, 2],
		selectNow: true,
	}],
	savetxt: { immune: ["Frightened"] },
	toNotesPage: [
		{
			name: "Orcsplitter",
			note: [
				'A mighty axe wielded long ago by the dwarf king Torhild Flametongue, *Orcsplitter* is a battered weapon that appears unremarkable at first glance. Its head is graven with the Dwarvish runes for "orc," but the runes are depicted with a gap or slash through the markings; the word "orc" is literally split in two.',
				"I gain a +2 bonus to attack and damage rolls made with it. When I roll a 20 on an attack roll with this weapon against an orc, that orc must succeed on a DC 17 Constitution saving throw or drop to 0 Hit Points.",
				"While I am not Incapacitated, I can't be Surprised by orcs and I am aware when orcs are within 120 ft of me and aren't behind total cover, although I don't know their location. Also, me and any of my friends within 30 ft of me can't be Frightened while I am not Incapacitated.",
				"*Orcsplitter* is a sentient, lawful good weapon with an Intelligence of 6, a Wisdom of 15, and a Charisma of 10. It can see and hear out to 120 feet and has Darkvision. It communicates by transmitting emotions to its wielder, although on rare occasions it uses a limited form of telepathy to bring to the wielder's mind a couplet or stanza of ancient Dwarvish verse.",
				"*Orcsplitter* is grim, taciturn, and inflexible. It knows little more than the desire to face orcs in battle and serve a courageous, just wielder. It disdains cowards and any form of duplicity, deception, or disloyalty. The weapon's purpose is to defend dwarves and to serve as a symbol of dwarven resolve. It hates the traditional foes of dwarves\u2014giants, goblins, and, most of all, orcs\u2014and silently urges its possessor to meet such creatures in battle.",
			],
		},
		Object.assign({}, sentientItemConflictNote, { amendTo: "Orcsplitter" }),
	],
}
MagicItemsList["reszur"] = {
	name: "Reszur",
	source: [["PotA", 157]],
	type: "Weapon (Dagger)",
	rarity: "Uncommon",
	description: "I have a +1 bonus to attack and damage rolls made with this dagger. It doesn't make noise when it hits or cuts something. If I speak the name \"Reszur\", which is engraved on its pommel, the blade gives off a faint, cold glow, shedding Dim Light in a 10-foot radius until I speak the name again.",
	descriptionFull: [
		"You have a +1 bonus to attack and damage rolls made with this weapon, which doesn't make noise when it hits or cuts something.",
		"The name \"Reszur\" is graven on the dagger's pommel. If the wielder speaks the name, the blade gives off a faint, cold glow, shedding dim light in a 10-foot radius until the wielder speaks the name again.",
	],
	weight: 1,
	weaponOptions: [{
		baseWeapon: "dagger",
		regExpSearch: /reszur/i,
		name: "Reszur",
		source: [["PotA", 157]],
		description: "Finesse, Light, Thrown; Doesn't make any noise",
		modifiers: [1, 1],
		selectNow: true,
	}],
}
MagicItemsList["seeker dart"] = {
	name: "Seeker Dart",
	source: [["PotA", 223]],
	type: "Weapon (Dart)",
	rarity: "Uncommon",
	description: "Once as an action, when I whisper \"seek\" and hurl this dart, it seeks out a target of my choice within 120 ft that I have seen at least once. If the target isn't within range or there is no clear path to it, the dart's magic is spent. Else, the target must make a DC 16 Dex save or take 1d4 Piercing and 3d4 Lightning damage.",
	descriptionFull: [
		"This small dart is decorated with designs like windy spirals that span the length of its shaft.",
		"When you whisper the word \"seek\" and hurl this dart, it seeks out a target of your choice within 120 feet of you. You must have seen the target before, but you don't need to see it now. If the target isn't within range or if there is no clear path to it, the dart falls to the ground, its magic spent and wasted. Otherwise, elemental winds guide the dart instantly through the air to the target. The dart can pass through openings as narrow as 1 inch wide and can change direction to fly around corners.",
		"When the dart reaches its target, the target must succeed on a DC 16 Dexterity saving throw or take 1d4 piercing damage and 3d4 lightning damage. The dart's magic is then spent, and it becomes an ordinary dart.",
	],
	weight: 0.25,
}
MagicItemsList["storm boomerang"] = {
	name: "Storm Boomerang",
	source: [["PotA", 223]],
	type: "Weapon (Javelin)",
	rarity: "Uncommon",
	description: "This ranged weapon has 60/120 ft range, deals 1d4 Bludgeoning and 3d4 Thunder damage, and its target must make a DC 10 Con save or be Stunned until its next turn ends. On a miss, it returns to my hand. Once it deals Thunder damage, it can't do so or stun again until recharged in an air node for 1 hour.",
	descriptionFull: [
		"This boomerang is a ranged weapon carved from griffon bone and etched with the symbol of elemental air. When thrown, it has a range of 60/120 feet, and any creature that is proficient with the javelin is also proficient with this weapon. On a hit, the boomerang deals 1d4 bludgeoning damage and 3d4 thunder damage, and the target must succeed on a DC 10 Constitution saving throw or be stunned until the end of its next turn. On a miss, the boomerang returns to the thrower's hand.",
		"Once the boomerang deals thunder damage to a target, the weapon loses its ability to deal thunder damage and its ability to stun a target. These properties return after the boomerang spends at least 1 hour inside an elemental air node.",
	],
	weaponOptions: [{
		baseWeapon: "javelin",
		name: "Storm Boomerang",
		regExpSearch: /^(?=.*storm)(?=.*boomerang).*$/i,
		list: "melee",
		ability: 2,
		damage: [1, 4, "bludgeoning"],
		range: "60/120 ft",
		weight: 2,
		description: "Returns on a miss; Once: +3d4 Thunder damage, target DC 10 Con save or Stunned 1 turn",
		selectNow: true,
	}],
	usages: 1,
	recovery: "Air Node",
	additional: "recharge: 1 h in air node",
}
MagicItemsList["tinderstrike"] = {
	name: "Tinderstrike",
	source: [["PotA", 225]],
	type: "Weapon (Dagger)",
	rarity: "Legendary",
	storyItemAL: true,
	description: "This flint dagger has a +2 bonus on to hit and damage and deals +2d6 Fire damage. It allows me to speak Ignan, grants me Resistance to Fire damage, and allows me to cast *Dominate Monster* on a fire elemental once per dawn. It gives me a flaw, see Notes page.",
	descriptionFull: [
		"A flint dagger, *Tinderstrike* is uncommonly sharp, and sparks cascade off its edge whenever it strikes something solid. Its handle is always warm to the touch, and the blade smolders for 1d4 minutes after it is used to deal damage. It contains a spark of Imix, Prince of Evil Fire.",
		"You gain a +2 bonus to attack and damage rolls made with this magic weapon. When you hit with it, the target takes an extra 2d6 fire damage.",
		"***Fire Mastery***. You gain the following benefits while you hold *Tinderstrike*:",
		" \u2022 You can speak Ignan fluently.",
		" \u2022 You have resistance to fire damage.",
		" \u2022 You can cast *Dominate Monster* (save DC 17) on a fire elemental. Once you have done so, *Tinderstrike* can't be used this way again until the next dawn.",
		"***Dance of the All-Consuming Fire***. While inside a fire node, you can perform a ritual called the Dance of the All-Consuming Fire, using *Tinderstrike* to create a *devastation orb of fire*. Once you perform the ritual, *Tinderstrike* can't be used to perform the ritual again until the next dawn.",
		"***Flaw***. *Tinderstrike* makes its wielder impatient and rash. While attuned to the weapon, you gain the following flaw: \"I act without thinking and take risks without weighing the consequences.\"",
	],
	attunement: true,
	weight: 1,
	languageProfs: ["Ignan"],
	dmgres: ["Fire"],
	usages: 1,
	recovery: "dawn",
	fixedDC: 17,
	spellcastingBonus: [{
		name: "Once per dawn",
		spells: ["dominate monster"],
		selection: ["dominate monster"],
		firstCol: "onceday",
	}],
	spellChanges: {
		"dominate monster": {
			description: "Fire elemental save or Charmed, follows telepathic commands, 1 a for complete control; save on dmg",
			changes: "Can only affect a fire elemental.",
		},
	},
	weaponOptions: [{
		baseWeapon: "dagger",
		regExpSearch: /tinderstrike/i,
		name: "Tinderstrike",
		source: [["PotA", 225]],
		description: "Finesse, Light, Thrown; +2d6 Fire damage",
		modifiers: [2, 2],
		selectNow: true,
	}],
	toNotesPage: [{
		name: "Features",
		note: [
			"A flint dagger, Tinderstrike is uncommonly sharp, and sparks cascade off its edge whenever it strikes something solid. Its handle is always warm to the touch, and the blade smolders for 1d4 minutes after it is used to deal damage. It contains a spark of Imix, Prince of Evil Fire.",
			"I gain a +2 bonus to attack and damage rolls made with this magic weapon. When I hit with it, the target takes an extra 2d6 Fire damage.",
			"While holding Tinderstrike, I can speak Ignan fluently, have Resistance to Fire damage, and can cast *Dominate Monster* (save DC 17) on a fire elemental once per dawn.",
			"While inside a fire node, I can perform a ritual called the Dance of the All-Consuming Fire, using Tinderstrike to create a Devastation Orb of Fire. The ritual takes 1 hour to complete and requires 2,000 gp worth of special components, which are consumed. Once I perform the ritual, Tinderstrike can't be used to perform the ritual again until the next dawn.",
			'Tinderstrike makes me impatient and rash. While attuned to the weapon, I gain the following flaw: "I act without thinking and take risks without weighing the consequences."',
		],
	}],
}
MagicItemsList["weird tank"] = {
	name: "Weird Tank",
	source: [["PotA", 223]],
	type: "Wondrous Item",
	rarity: "Rare",
	description: "As an action, I can open (or close) this tank of water, allowing the water weird within it to act or not. The weird is bound to the tank, follows my telepathic commands, and acts after me in combat. If the weird is killed, a new one can be formed by placing the tank in a water node for 24 hours.",
	descriptionLong: "As an action, I can open (or close) this tank of water, allowing the water weird within it to act or not. The weird is bound to the tank, follows my telepathic commands, and acts after me in combat. If it is killed, a new one can be formed by placing the tank in a water node for 24 hours. I can close the tank as an action, but I can only close the tank after commanding the weird to retract into it or if it died. The tank has AC 15, 50 HP, vulnerability to Bludgeoning damage, and Immunity to Poison and Psychic damage. Reducing the tank to 0 Hit Points destroys it and the water weird contained within it.",
	descriptionFull: [
		"A *weird tank* is a ten-gallon tank of blown glass and sculpted bronze with a backpack-like carrying harness fashioned from tough leather. A water weird is contained within the tank. While wearing the tank, you can use an action to open it, allowing the water weird to emerge. The water weird acts immediately after you in the initiative order, and it is bound to the tank.",
		"You can command the water weird telepathically (no action required) while you wear the tank. You can close the tank as an action only if you have first commanded the water weird to retract into it or if the water weird is dead.",
		"If the water weird is killed, the tank loses its magical containment property until it spends at least 24 hours inside an elemental water node. When the tank is recharged, a new water weird forms inside it.",
		"The tank has AC 15, 50 hit points, vulnerability to bludgeoning damage, and immunity to poison and psychic damage. Reducing the tank to 0 hit points destroys it and the water weird contained within it.",
	],
	weight: 120,
	attunement: true,
	action: [["action", ""]],
}
MagicItemsList["windvane"] = {
	name: "Windvane",
	source: [["PotA", 225]],
	type: "Weapon (Spear)",
	rarity: "Legendary",
	storyItemAL: true,
	description: "This spear with the Finesse property has a +2 bonus on to hit and damage and deals +1d6 Lightning damage. It allows me to speak Auran, grants me Resistance to Lightning damage, and allows me to cast *Dominate Monster* on an air elemental once per dawn. It gives me a flaw, see Notes page.",
	descriptionFull: [
		"A silver spear, *Windvane* has dark sapphires on the filigreed surface of its polished head. Held by its shining haft, the weapon feels insubstantial, as if clutching a cool, gently flowing breeze. The spear contains a spark of Yan-C-Bin, the Prince of Evil Air.",
		"You have a +2 bonus to attack and damage rolls made with this magic weapon, which has the finesse weapon property. When you hit with it, the target takes an extra 1d6 lightning damage.",
		"***Air Mastery***. You gain the following benefits while you hold *Windvane*:",
		" \u2022 You can speak Auran fluently.",
		" \u2022 You have resistance to lightning damage.",
		" \u2022 You can cast *Dominate Monster* (save DC 17) on an air elemental. Once you have done so, *Windvane* can't be used this way again until the next dawn.",
		"***Song of the Four Winds***. While inside an air node, you can perform a ritual called the Song of the Four Winds, using *Windvane* to create a *devastation orb of air*. Once you perform the ritual, *Windvane* can't be used to perform the ritual again until the next dawn.",
		"***Flaw***. *Windvane* makes its wielder mercurial and unreliable. While attuned to the weapon, you gain the following flaw: \"I break my vows and plans. Duty and honor mean nothing to me.\"",
	],
	attunement: true,
	weight: 3,
	languageProfs: ["Auran"],
	dmgres: ["Lightning"],
	usages: 1,
	recovery: "dawn",
	fixedDC: 17,
	spellcastingBonus: [{
		name: "Once per dawn",
		spells: ["dominate monster"],
		selection: ["dominate monster"],
		firstCol: "onceday",
	}],
	spellChanges: {
		"dominate monster": {
			description: "Air elemental save or Charmed, follows telepathic commands, 1 a for complete control; save on dmg",
			changes: "Can only affect an air elemental.",
		},
	},
	weaponOptions: [{
		baseWeapon: "spear",
		regExpSearch: /windvane/i,
		name: "Windvane",
		source: [["PotA", 225]],
		description: "Finesse, Thrown, Versatile (1d6); +1d6 Lightning damage",
		modifiers: [2, 2],
		selectNow: true,
	}],
	toNotesPage: [{
		name: "Features",
		note: [
			"A silver spear, Windvane has dark sapphires on the filigreed surface of its polished head. Held by its shining haft, the weapon feels insubstantial, as if clutching a cool, gently flowing breeze. The spear contains a spark of Yan-C-Bin, the Prince of Evil Air.",
			"I have a +2 bonus to attack and damage rolls made with this magic weapon, which has the Finesse weapon property. When I hit with it, the target takes an extra 1d6 Lightning damage.",
			"While holding Windvane, I can speak Auran fluently, have Resistance to Lightning damage, and can cast *Dominate Monster* (save DC 17) on an air elemental once per dawn.",
			"While inside an air node, I can perform a ritual called the Song of the Four Winds, using Windvane to create a Devastation Orb of Air. The ritual takes 1 hour to complete and requires 2,000 gp worth of special components, which are consumed. Once I perform the ritual, Windvane can't be used to perform the ritual again until the next dawn.",
			'Windvane makes me mercurial and unreliable. While attuned to the weapon, I gain the following flaw: "I break my vows and plans. Duty and honor mean nothing to me."',
		],
	}],
}
MagicItemsList["wingwear"] = {
	name: "Wingwear",
	source: [["PotA", 223]],
	type: "Wondrous Item",
	rarity: "Uncommon",
	description: "This snug uniform with leathery flaps has 3 charges, regaining all when placed in an air node for 1 hour. As a Bonus Action, I can expend 1 charge to gain 30 ft Fly Speed until I land or have 0 altitude. At the end of each of my turns, my altitude drops by 5 ft and I must move at least 30 ft horizontally or I fall.",
	descriptionFull: [
		"This snug uniform has symbols of air stitched into it and leathery flaps that stretch along the arms, waist, and legs to create wings for gliding. A suit of *wingwear* has 3 charges. While you wear the suit, you can use a bonus action and expend 1 charge to gain a flying speed of 30 feet until you land. At the end of each of your turns, your altitude drops by 5 feet. Your altitude drops instantly to 0 feet at the end of your turn if you didn't fly at least 30 feet horizontally on that turn. When your altitude drops to 0 feet, you land (or fall), and you must expend another charge to use the suit again.",
		"The suit regains all of its expended charges after spending at least 1 hour in an elemental air node.",
	],
	attunement: true,
	usages: 3,
	recovery: "Air Node",
	additional: "recharge: 1 h in air node",
	action: [["bonus action", ""]],
}

// legacy_20150415_AL-EE.js
// This file adds the optional backgrounds from the Adventurers League season 2 (Elemental Evil) to MPMB's Character Record Sheet

// Define the source
SourceList["AL:EE"] = {
	name: "Elemental Evil Backgrounds [Mulmaster]",
	abbreviation: "AL:EE",
	group: "Legacy Adventurers League",
	url: "https://www.dropbox.com/s/ljtrwzmkoijb02o/Mulmaster-Bonds-and-Backgrounds.pdf?dl=1", // used to be https://dndadventurersleague.org/wp-content/uploads/2015/04/Mulmaster-Bonds-and-Backgrounds.pdf
	date: "2015/04/15",
	defaultExcluded: true,
};

// Backgrounds
BackgroundList["caravan specialist"] = {
	regExpSearch: /^(?=.*caravan)(?=.*specialist).*$/i,
	name: "Caravan Specialist",
	source: [["AL:EE", 2]],
	skills: ["Animal Handling", "Survival"],
	gold: 10,
	equipleft: [
		["Two-person tent", "", 20],
		["Regional map", "", ""],
	],
	equipright: [
		["Traveler's clothes", "", 4],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Wagonmaster",
	trait: [
		"Any group is only as strong as its weakest link. Everyone has to pull their own weight.",
		"There's always someone out there trying to take what I've got. Always be vigilant.",
		"Anything can be learned if you have the right teacher. Most folks just need a chance.",
		"Early to bed and early to rise; this much at least is under my control.",
		"You can listen to me or don't and wish you had. Everyone ends up on one side of that fence.",
		"Eventually my hard work will be rewarded. Maybe that time has finally come.",
		"A strong ox or horse is more reliable than most people I've met.",
		"I never had time for books, but wish I had. I admire folks who have taken the time to learn.",
	],
	ideal: [
		["Service",
			"Service: Using my talents to help others is the best way of helping myself. (Good)",
		],
		["Selfish",
			"Selfish: What people don't know WILL hurt them, but why is that my problem? (Evil)",
		],
		["Wanderer",
			"Wanderer: I go where the road takes me. Sometimes that's a good thing… (Chaotic)",
		],
		["Fittest",
			"Fittest: On the open road, the law of nature wins. Victims are the unprepared. (Lawful)",
		],
		["Focused",
			"Focused: I simply have a job to do, and I'm going to do it. (Neutral)",
		],
		["Motivated",
			"Motivated: There's a reason I'm good at what I do, I pay attention to the details. (Any)",
		],
	],
	bond: [
		"My brother has a farm in Elmwood and I've helped him and his neighbors move their goods to Mulmaster and other surrounding towns. Those are good people.",
		"A caravan I lead was attacked by bandits and many innocents died. I swear that I will avenge them by killing any bandits I encounter.",
		"The Soldiery are mostly good guys who understand the importance of protecting the roads. The City Watch is who you have to look out for. If they are inspecting your goods, get ready to pay a fine.",
		"The new commander of Southroad Tower, Capt. Holke, understands the importance of safe roads. He's hired me for several jobs and I'm grateful.",
		"There's always a road I haven't traveled before. I'm always looking for new places to explore.",
		"Wealth and power mean little without the freedom to go where and when you want.",
	],
	flaw: [
		"I have trouble trusting people I've just met.",
		"I enjoy the open road. Underground and tight spaces make me very nervous.",
		"I expect others to heed my orders and have little respect or sympathy if they don't.",
		"I am very prideful and have trouble admitting when I'm wrong.",
		"Once I decide on a course of action, I do not waver.",
		"I like to explore, and my curiosity will sometimes get me into trouble.",
	],
	toolProfs: ["Vehicles (land)"],
	languageProfs: [1],
	lifestyle: "poor",
};
BackgroundList["earthspur miner"] = {
	regExpSearch: /^(?=.*earthspur)(?=.*miner).*$/i,
	name: "Earthspur Miner",
	source: [["AL:EE", 3]],
	skills: ["Athletics", "Survival"],
	gold: 5,
	equipleft: [
		["Shovel or miner's pick", "", 5],
		["Block and tackle", "", 5],
		["Climber's kit", "", 12],
	],
	equipright: [
		["Common clothes", "", 3],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Deep Miner",
	trait: [
		"Nothing bothers me for long.",
		"I hate the horrors of the Underdark with a passion. They took my friends and family and almost got me.",
		"Anything worth doing takes time and patience. I have learned to plan and wait for the things I want and to be patient to achieve my goals.",
		"I can party with everyone. Whether with dwarves, or goliaths, or deep gnomes, I can find a way to have a good time.",
		"I'd rather be mining. This is okay; mining is better.",
		"I think that I will stumble upon great riches if I just keep looking.",
		"People who don't work with their hands and who live in houses are soft and weak.",
		"I wish I were more educated. I look up to people who are.",
	],
	ideal: [
		["Generosity",
			"Generosity: The riches of the earth are to be shared by all. (Good)",
		],
		["Greed",
			"Greed: Gems and precious metals, I want them all for myself. (Evil)",
		],
		["Mooch",
			"Mooch: Property, schmoperty. If I need it, I take and use it. If I don't, I leave it for someone else. (Chaotic)",
		],
		["Boundaries",
			"Boundaries: Everything and everyone has its prescribed place; I respect that and expect others to do the same. (Lawful) ",
		],
		["Let it Be",
			"Let it Be: I don't meddle in the affairs of others if I can avoid it. They're none of my business. (Neutral)",
		],
		["Materialist",
			"Materialist: I want riches to improve my life. (Any)",
		],
	],
	bond: [
		"The people of the Earthspur mines are my family. I will do anything to protect them.",
		"A deep gnome saved my life when I was injured and alone. I owe his people a great debt.",
		"I must behold and preserve the natural beauty of places below the earth.",
		"Gems hold a special fascination for me, more than gold, land, magic, or power.",
		"I want to explore new depths and scale new heights.",
		"Someday I'm going to find the mother lode, then I'll spend the rest of my life in luxury.",
	],
	flaw: [
		"I'm uncomfortable spending time under the open sky. I'd rather be indoors or underground.",
		"I'm not used to being around other people much and sometimes get grouchy about it.",
		"Good tools are more reliable than people. In a cave in, I would save a sturdy pick before a stranger.",
		"I jealously guard my secrets, because I think others will take advantage of me if they learn what I know.",
		"I am obsessed with getting rich. I always have a scheme brewing for making it big.",
		"I'm afraid of the dark.",
	],
	languageProfs: ["Dwarvish", "Undercommon"],
	lifestyle: "poor",
};
BackgroundList["harborfolk"] = {
	regExpSearch: /harborfolk/i,
	name: "Harborfolk",
	source: [["AL:EE", 4]],
	skills: ["Athletics", "Sleight of Hand"],
	gold: 5,
	equipleft: [
		["Fishing tackle", "", 4],
		["Set of dice, playing cards, or three-dragon ante", "", ""],
	],
	equipright: [
		["Common clothes", "", 3],
		["Belt pouch (with coins)", "", 1],
		["Rowboat", "", 100],
	],
	feature: "Harborfolk",
	trait: [
		"I am curious. I want to know why things are the way they are and why people do the things that they do.",
		"I can't sing, but that never stops me from doing it, loudly. Everyone loves a good sea chanty!",
		"I think the High Blade is doing a terrific job, don't you?",
		"I'm very excited that the House Built on Gold is being restored. I am a zealous worshipper of Waukeen.",
		"I am quite superstitious. I see portents in everyday occurrences.",
		"I resent the rich and enjoy thwarting their plans and spoiling their fun in small ways.",
		"I have a sea story to fit every occasion.",
		"I'm a fisher, but I secretly detest eating fish. I will do anything to avoid it.",
	],
	ideal: [
		["Calm",
			"Calm: For all things, there is a tide. I set sail when it is right, and mend my nets when it is not. (Lawful)",
		],
		["Windblown",
			"Windblown: I go where the winds blow. No man or woman tells me where or when to sail. (Chaotic)",
		],
		["Aspiring",
			"Aspiring: I will gain the favor of a Zor or Zora patron, maybe even one of the Blades! (Any)",
		],
		["Salty",
			"Salty: I want people to look to me as an expert on plying Mulmaster Harbor. (Any)",
		],
		["Selfless",
			"Selfless: We are all children of the sea. I help everyone in peril afloat and ashore. (Good)",
		],
		["Let them Drown",
			"Let them Drown: I refuse to risk my hide to help others. They wouldn't help me if roles were reversed. (Evil)",
		],
	],
	bond: [
		"I once lost everything but my rowboat. I'll do anything to protect it.",
		"My brother was in the Soldiery, but he was killed. I really look up to the men and women who serve.",
		"The Cloaks killed my friend for spellcasting. I'll get them back somehow, someday.",
		"The High House of Hurting helped me when I was hurt and asked nothing in return. I owe them my life.",
		"I was robbed in the Zhent ghetto once. It will not happen again.",
		"I would do anything to protect the other harborfolk. They are my family.",
	],
	flaw: [
		"I drink too much, which causes me to miss the tide.",
		"I killed a drunk member of the City Watch in a brawl. I am terrified that they might find out.",
		"I oversell myself and make promises I can't keep when I want to impress someone.",
		"Book learning is a waste of time. I have no patience for people who don't speak from experience.",
		"I almost always cheat. I can't help myself.",
		"I am a secret informant for the Hawks. I send them reports about everything I see and hear, even what my friends and allies are up to.",
	],
	toolProfs: [["Gaming set", 1], "Vehicles (water)"],
	lifestyle: "poor",
};
BackgroundList["mulmaster aristocrat"] = {
	regExpSearch: /^(?=.*mulmaster)(?=.*aristocrat).*$/i,
	name: "Mulmaster Aristocrat",
	source: [["AL:EE", 5]],
	skills: ["Deception", "Performance"],
	gold: 10,
	equipleft: [
		["Artisan's tools or musical instrument", "", ""],
	],
	equipright: [
		["Fine clothes", "", 6],
		["Purse (with coins)", "", 1],
	],
	feature: "Highborn",
	trait: [
		"My ambitions are boundless. I will be a Zor or Zora one day!",
		"I must always look my best.",
		"Beauty is everywhere. I can find it in even the homeliest person and the most horrible tragedy.",
		"Décorum must be preserved at all costs.",
		"I will not admit I am wrong if I can avoid it.",
		"I am extremely well-educated and frequently remind others of that fact.",
		"I take what I can today, because I do not know what tomorrow holds.",
		"My life is full of dance, song, drink, and love.",
	],
	ideal: [
		["Generous",
			"Generous: I have a responsibility to help and protect the less fortunate. (Good)",
		],
		["Loyal",
			"Loyal: My word, once given, is my bond. (Lawful)",
		],
		["Callous",
			"Callous: I am unconcerned with any negative effects my actions may have on the lives and fortunes of others. (Evil)",
		],
		["Impulsive",
			"Impulsive: I follow my heart. (Chaotic)",
		],
		["Ignorant",
			"Ignorant: Explanations bore me. (Neutral)",
		],
		["Isolationist",
			"Isolationist: I am concerned with the fortunes of my friends and family. Others must see to themselves. (Any)",
		],
	],
	bond: [
		"I have dedicated my wealth and my talents to the service of one of the city's many temples.",
		"My family and I are loyal supporters of High Blade Jaseen Drakehorn. Our fortunes are inexorably tied to hers. I would do anything to support her.",
		"Like many families who were close to High Blade Selfaril Uoumdolphin, mine has suffered greatly since his fall. We honor his memory in secret.",
		"My family plotted with Rassendyll Uoumdolphin brother usurped brother as High Blade. Betrayal is the quickest route to power.",
		"Wealth and power are nothing. Fulfillment can only be found in artistic expression.",
		"It's not how you feel, who you know, or what you can do - it's how you look, and I look fabulous.",
	],
	flaw: [
		"I have difficulty caring about anyone or anything other than myself.",
		"Having grown up with wealth, I am careless with my finances. I overspend and am overly generous.",
		"The ends (my advancement) justify any means.",
		"I must have what I want and will brook no delay.",
		"My family has lost everything. I must keep up appearances, lest we become a laughingstock.",
		"I have no artistic sense. I hide that fact behind extreme opinions and have become a trendsetter.",
	],
	toolProfs: [["Artisan's tools", 1], ["Musical instrument", 1]],
	lifestyle: "wealthy",
};
BackgroundList["phlan refugee"] = {
	regExpSearch: /^(?=.*phlan)(?=.*refugee).*$/i,
	name: "Phlan Refugee",
	source: [["AL:EE", 6]],
	skills: ["Insight", "Athletics"],
	gold: 15,
	equipleft: [
		["Set of artisan's tools", "", ""],
		["Token of the life I once knew", "", ""],
	],
	equipright: [
		["Traveler's clothes", "", 4],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Phlan Survivor",
	trait: [
		"I may have lost everything I worked for most of my life, but there's work to be done, no time to linger on the past.",
		"I worked hard to get where I am and I refuse to let a little hardship stop me from succeeding.",
		"I protect those around me, you never know when one of them will be useful.",
		"I have always gotten ahead by giving, why change now?",
		"I prepare for everything, it paid off in Phlan and it will pay off again.",
		"I will reclaim my home, though the path may be long, I will never give up hope.",
		"I never cared for personal hygiene, and am amazed that it bothers others.",
		"I am always willing to volunteer my services, just as long as I don't have to do anything.",
	],
	ideal: [
		["Justice",
			"Justice: Corruption brought Phlan down, I will not tolerate that any longer. (Lawful)",
		],
		["Acceptance",
			"Acceptance: Stability is a myth, to think you can control your future is futile. (Chaotic)",
		],
		["Hope",
			"Hope: I am guided by a higher power and I trust that everything will be right in the end. (Good)",
		],
		["Restraint",
			"Restraint: I hate those who caused my loss. It is all I can do not to lash out at them. (Any)",
		],
		["Strength",
			"Strength: As shown in Phlan, the strong survive. If you are weak you deserve what you get (Evil)",
		],
		["Openness",
			"Openness: I am always willing to share my life story with anyone who will listen. (Any)",
		],
	],
	bond: [
		"I have the chance at a new life and this time I am going to do things right.",
		"The Lord Regent brought this suffering upon his people. I will see him brought to justice.",
		"I await the day I will be able to return to my home in Phlan.",
		"I will never forget the debt owed to Glevith of the Welcomers. I will be ready to repay that debt when called upon.",
		"There was someone I cared about in Phlan, I will find out what happened to them.",
		"Some say my life wasn't worth saving, I will prove them wrong.",
	],
	flaw: [
		"I used the lives of children to facilitate my escape from Phlan.",
		"I am a sucker for the underdog, and always bet on the losing team.",
		"I am incapable of standing up for myself.",
		"I will borrow money from friends with no intention to repay it.",
		"I am unable to keep secrets. A secret is just an untold story.",
		"When something goes wrong, it's never my fault.",
	],
	toolProfs: [["Artisan's tools", 1]],
	languageProfs: [1],
	lifestyle: "modest",
};

// Background features
BackgroundFeatureList["wagonmaster"] = {
	description: "I'm used to being in charge. My reputation has me on a short list for critical jobs, allows me to attract two more loyal workers for caravaning, and causes others to look to me for direction. I can identify the most defensible locations for camping. I have a great memory for maps and geography. While travelling, I can always find my cardinal directions.",
	source: [["AL:EE", 2]],
};
BackgroundFeatureList["deep miner"] = {
	description: "I am used to navigating the deep places of the earth. I never get lost in caves or mines if I have either seen an accurate map of them or have been through them before. Furthermore, I am able to scrounge fresh water and food for myself and as many as five other people each day if I am in a mine or natural caves.",
	source: [["AL:EE", 3]],
};
BackgroundFeatureList["harborfolk"] = {
	description: "I grew up on the docks and waters of Mulmaster Harbor. The harborfolk remember me and still treat me as one of them. They welcome me and my companions. While they might charge me for it, they'll always offer what food and shelter they have; they'll even hide me if the City Watch is after me (but not if the Hawks are).",
	source: [["AL:EE", 4]],
};
BackgroundFeatureList["highborn"] = {
	description: "Mulmaster is run by and for its aristocracy. Every other class of citizen in the city defers to me, and even the priesthood, Soldiery, Hawks, and Cloaks treat me with deference. Other aristocrats and nobles accept me in their circles and likely know me or of me. My connections can get me the ear of a Zor or Zora under the right circumstances.",
	source: [["AL:EE", 5]],
};
BackgroundFeatureList["phlan survivor"] = {
	description: "Whatever my prior standing I'm now one of the many refugees that came to Mulmaster. I'm able to find refuge with others from Phlan and those who sympathize with my plight. Within Mulmaster this means that I can find a place to sleep, recover, and hide from the watch with either other refugees from Phlan, or the Zhents within the ghettos.",
	source: [["AL:EE", 6]],
};

// legacy_20150416_EE.js
// This file adds all the player-material from the Elemental Evil Player's Companion (November 2017, after the XGtE update) to MPMB's Character Record Sheet

// Define the source
SourceList["E"] = {
	name: "Elemental Evil Player's Companion", // November 2017 version
	abbreviation: "EE",
	abbreviationSpellsheet: "EE",
	group: "Legacy Sources",
	campaignSetting: "Forgotten Realms",
	url: "https://www.dropbox.com/scl/fi/h3rt7296724s6p8xgr1w2/Elemental-Evil-Players-Companion-v2017.pdf?rlkey=99p2n6gpk0qcz9r3hdjka0b9y&dl=1", // used to be https://media.dnd.wizards.com/EE-Players-Companion_0_0.pdf
	date: "2015/04/16",
	defaultExcluded: true,
};

// Races
RaceList["aarakocra"] = {
	regExpSearch: /aarakocra/i,
	name: "Aarakocra",
	source: [["E", 5], ["W", 166]],
	plural: "Aarakocra",
	size: 3,
	speed: {
		walk: { spd: 25, enc: 15 },
		fly: { spd: 50, enc: 0 },
	},
	languageProfs: ["Common", "Aarakocra", "Auran"],
	weaponOptions: [{
		baseWeapon: "unarmed strike",
		regExpSearch: /talon/i,
		name: "Talons",
		source: [["E", 5], ["W", 166]],
		damage: [1, 4, "slashing"],
		selectNow: true,
	}],
	age: " reach maturity by age 3 and live about 30 years",
	height: " are about 5 feet tall",
	weight: " weigh between 80 and 100 lb",
	heightMetric: " are about 1,5 metres tall",
	weightMetric: " weigh between 36 and 45 kg",
	trait: [
		"**Aarakocra**",
		"##\u25C6 Flight##. I have a 50 ft Fly Speed. To use this speed, I can't be wearing medium or heavy armor.",
		"##\u25C6 Talons##. My unarmed strikes deal 1d4 Slashing damage on a hit.",
	],
};
RaceList["deep gnome"] = {
	regExpSearch: /^((?=.*svirfneblin)|((?=.*\bgnomes?\b)(?=.*\b(underdarks?|deep|depths?)\b))).*$/i,
	name: "Svirfneblin",
	sortname: "Gnome, Deep (Svirfneblin)",
	source: [["E", 7], ["S", 115], ["MToF", 113]],
	plural: "Svirfneblin",
	size: 4,
	speed: {
		walk: { spd: 25, enc: 15 },
	},
	languageProfs: ["Common", "Gnomish", "Undercommon"],
	vision: [["Darkvision", 120]],
	savetxt: { text: ["Adv on Int/Wis/Cha saves vs magic"] },
	age: " are considered full-grown adults when they reach 25 and live 200 to 250 years",
	height: " stand between 3 and 3 1/2 feet tall (2'9\" + 2d4\")",
	weight: " weigh around 90 lb (80 + 2d4 \xD7 1d4 lb)",
	heightMetric: " stand between 90 and 105 cm tall (85 + 5d4 cm)",
	weightMetric: " weigh around 50 kg (35 + 5d4 \xD7 4d4 / 10 kg)",
	trait: [
		"**Svirfneblin**",
		"##\u25C6 Stone Camouflage##. I have Advantage on Dexterity (Stealth) checks to hide in rocky terrain.",
	],
};
RaceList["genasi"] = {
	regExpSearch: /genasi|planetouched/i,
	name: "Genasi",
	source: [["E", 9], ["W", 172]],
	plural: "Genasi",
	size: 3,
	speed: { walk: { spd: 30, enc: 20 } },
	languageProfs: ["Common", "Primordial"],
	spellcastingAbility: 3,
	variants: [], // filled by the AddRacialVariant() calls below
	age: " reach adulthood in their late teens and live up to 120 years",
	height: " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight: " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric: " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric: " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
};
AddRacialVariant("genasi", "air", {
	regExpSearch: /^(?=.*(genasi|planetouched))(?=.*\bairs?\b).*$/i,
	name: "Air Genasi",
	source: [["E", 9], ["W", 172]],
	plural: "Air genasi",
	trait: [
		"**Air Genasi**",
		"##\u25C6 Unending Breath##. I can hold my breath indefinitely while I am not Incapacitated.",
		"##\u25C6 Mingle with the Wind##. I can cast the *Levitate* spell once with this trait, requiring no material components, and I regain the ability to cast it this way when I finish a Long Rest. Constitution is my spellcasting ability for this spell.",
	],
	features: {
		"levitate": {
			name: "Mingle with the Wind",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Mingle with the Wind",
				spells: ["levitate"],
				selection: ["levitate"],
				firstCol: "oncelr",
			}],
			spellChanges: {
				"levitate": {
					components: "V,S",
					compMaterial: "",
					changes: "Using Mingle with the Wind, I can cast *Levitate* once per Long Rest without requiring material components.",
				},
			},
		},
	},
});
AddRacialVariant("genasi", "earth", {
	regExpSearch: /^(?=.*(genasi|planetouched))(?=.*\bearths?\b).*$/i,
	name: "Earth Genasi",
	source: [["E", 9], ["W", 172]],
	plural: "Earth genasi",
	trait: [
		"**Earth Genasi**",
		"##\u25C6 Earth Walk##. I can move across difficult terrain made of earth or stone without expending extra movement.",
		"##\u25C6 Merge with Stone##. I can cast the *Pass without Trace* spell once with this trait, requiring no material components, and I regain the ability to cast it this way when I finish a Long Rest. Constitution is my spellcasting ability for this spell.",
	],
	features: {
		"pass without trace": {
			name: "Merge with Stone",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Merge with Stone",
				spells: ["pass without trace"],
				selection: ["pass without trace"],
				firstCol: "oncelr",
			}],
			spellChanges: {
				"pass without trace": {
					components: "V,S",
					compMaterial: "",
					changes: "Using Merge with Stone, I can cast *Pass without Trace* once per Long Rest without requiring material components.",
				},
			},
		},
	},
});
AddRacialVariant("genasi", "fire", {
	regExpSearch: /^(?=.*(genasi|planetouched))(?=.*\bfires?\b).*$/i,
	name: "Fire Genasi",
	source: [["E", 9], ["W", 172]],
	plural: "Fire genasi",
	vision: [["Darkvision", 60]],
	dmgres: ["Fire"],
	trait: [
		"**Fire Genasi**",
		"##\u25C6 Reach to the Blaze##. I know the *Produce Flame* cantrip.",
		"Once I reach 3rd level, I can cast the *Burning Hands* spell once as a 1st-level spell.",
		"I regain the ability to cast it this way when I finish a Long Rest.",
		"Constitution is my spellcasting ability for these spells.",
	],
	spellcastingBonus: [{
		name: "Reach to the Blaze (level 1)",
		spells: ["produce flame"],
		selection: ["produce flame"],
		firstCol: "atwill",
	}],
	features: {
		"burning hands": {
			name: "Reach to the Blaze (level 3)",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Reach to the Blaze (level 3)",
				spells: ["burning hands"],
				selection: ["burning hands"],
				firstCol: "oncelr",
			}],
		},
	},
});
AddRacialVariant("genasi", "water", {
	regExpSearch: /^(?=.*(genasi|planetouched))(?=.*\bwaters?\b).*$/i,
	name: "Water Genasi",
	source: [["E", 10], ["W", 172]],
	plural: "Water genasi",
	speed: {
		walk: { spd: 30, enc: 20 },
		swim: { spd: 30, enc: 20 },
	},
	dmgres: ["Acid"],
	trait: [
		"**Water Genasi**",
		"##\u25C6 Amphibious##. I can breathe air and water.",
		"##\u25C6 Swim##. I have a 30 ft Swim Speed.",
		"##\u25C6 Call to the Wave##. I know the *Shape Water* cantrip.",
		"When I reach 3rd level, I can cast the *Create or Destroy Water* spell as a 2nd-level spell once with this trait, and I regain the ability to cast it this way when I finish a Long Rest.",
		"Constitution is my spellcasting ability for these spells.",
	],
	spellcastingBonus: [{
		name: "Call to the Wave (level 1)",
		spells: ["shape water"],
		selection: ["shape water"],
		firstCol: "atwill",
	}],
	features: {
		"create or destroy water": {
			name: "Call to the Wave (level 3)",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Call to the Wave (level 3)",
				spells: ["create or destroy water"],
				selection: ["create or destroy water"],
				firstCol: "oncelr",
			}],
		},
	},
});

// Feat
FeatsList["svirfneblin magic"] = {
	name: "Svirfneblin Magic",
	source: [["E", 7], ["S", 115], ["MToF", 114]],
	prerequisite: "Being a Svirfneblin (Deep Gnome)",
	prereqeval: function (v) { return CurrentRace.known === "deep gnome"; },
	descriptionFull: [
		"You have inherited the innate spellcasting ability of your ancestors. This ability allows you to cast *Nondetection* on yourself at will, without needing a material component. You can also cast each of the following spells once with this ability: *Blindness/Deafness*, *Blur*, and *Disguise Self*. You regain the ability to cast these spells when you finish a long rest.",
		"Intelligence is your spellcasting ability for these spells, and you cast them at their lowest possible levels.",
	],
	description: "I can cast *Nondetection* on myself at will, without a material component. I can also cast the spells *Blindness/Deafness*, *Blur*, and *Disguise Self* once each. I regain the ability to cast these spells when I finish a Long Rest. Intelligence is my spellcasting ability for these spells.",
	spellcastingBonus: [{
		name: "at will (self only)",
		spellcastingAbility: 4,
		spells: ["nondetection"],
		selection: ["nondetection"],
		firstCol: "atwill",
	}, {
		name: "1\xD7 Long Rest (self only)",
		spells: ["blindness/deafness", "blur", "disguise self"],
		selection: ["blindness/deafness", "blur", "disguise self"],
		firstCol: "oncelr",
		times: 3,
	}],
	spellChanges: {
		"nondetection": {
			range: "Self",
			components: "V,S",
			compMaterial: "",
			description: "I am hidden from all divination magic",
			changes: "Using Svirfneblin Magic, I can cast *Nondetection* without a material component, but only on myself.",
		},
	},
};

// Spells
SpellsList["abi-dalzim's horrid wilting"] = {
	name: "Abi-Dalzim's Horrid Wilting",
	nameShort: "Abi-D's Horrid Wilting",
	nameAlt: "Horrid Wilting",
	classes: ["sorcerer", "wizard"],
	source: [["X", 150], ["E", 15]],
	level: 8,
	school: "Necro",
	time: "Act",
	range: "150 ft",
	components: "V,S,M",
	compMaterial: "A bit of sponge",
	duration: "Instantaneous",
	save: "Con",
	description: "30-ft cube all crea 12d8 Necrotic dmg; save halves; Plants/water elem. dis. const/Undead Immune",
	descriptionFull: [
		"You draw the moisture from every creature in a 30-foot cube centered on a point you choose within range. Each creature in that area must make a Constitution saving throw. Constructs and undead aren't affected, and plants and water elementals make this saving throw with disadvantage. A creature takes 12d8 necrotic damage on a failed save, or half as much damage on a successful one.",
		"Nonmagical plants in the area that aren't creatures, such as trees and shrubs, wither and die instantly.",
	],
};
SpellsList["absorb elements"] = {
	name: "Absorb Elements",
	classes: ["artificer", "druid", "ranger", "sorcerer", "wizard"],
	source: [["X", 150], ["E", 15]],
	level: 1,
	school: "Abjur",
	time: "React",
	timeFull: "Reaction, which you take when you take Acid, Cold, Fire, Lightning, or Thunder damage",
	range: "Self",
	components: "S",
	duration: "1 rnd",
	description: "Acid, Cold, Fire, Lightning, or Thunder Resistance till next turn start; first melee hit +1d6+1d6/SL dmg",
	descriptionFull: [
		"The spell captures some of the incoming energy, lessening its effect on you and storing it for your next melee attack. You have resistance to the triggering damage type until the start of your next turn. Also, the first time you hit with a melee attack on your next turn, the target takes an extra 1d6 damage of the triggering type, and the spell ends.",
		"***At Higher Levels***. When you cast this spell using a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each slot level above 1st.",
	],
};
SpellsList["aganazzar's scorcher"] = {
	name: "Aganazzar's Scorcher",
	nameAlt: "Scorch", //as per the Spell Compendium's (DnD 3.5e) alternative name
	classes: ["sorcerer", "wizard"],
	source: [["X", 150], ["E", 15]],
	level: 2,
	school: "Evoc",
	time: "Act",
	range: "30-ft line",
	components: "V,S,M",
	compMaterial: "A red dragon's scale",
	duration: "Instantaneous",
	save: "Dex",
	description: "30-ft long 5-ft wide line all creatures 3d8+1d8/SL Fire dmg; save halves",
	descriptionFull: [
		"A line of roaring flame 30 feet long and 5 feet wide emanates from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 3d8 fire damage on a failed save, or half as much damage on a successful one.",
		"***At Higher Levels***. When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd.",
	],
};
SpellsList["beast bond"] = {
	name: "Beast Bond",
	classes: ["druid", "ranger"],
	source: [["X", 150], ["E", 15]],
	level: 1,
	school: "Div",
	time: "Act",
	range: "Touch",
	components: "V,S,M",
	compMaterial: "A bit of fur wrapped in a cloth",
	duration: "Conc, 10 min",
	description: "Telepathic link with 1 Beast Int<4 while in line of sight; Beast has Adv on attacks vs crea I can see",
	descriptionFull: "You establish a telepathic link with one beast you touch that is friendly to you or charmed by you. The spell fails if the beast's Intelligence is 4 or higher. Until the spell ends, the link is active while you and the beast are within line of sight of each other. Through the link, the beast can understand your telepathic messages to it, and it can telepathically communicate simple emotions and concepts back to you. While the link is active, the beast gains advantage on attack rolls against any creature within 5 feet of you that you can see.",
};
SpellsList["bones of the earth"] = {
	name: "Bones of the Earth",
	classes: ["druid"],
	source: [["X", 150], ["E", 15]],
	level: 6,
	school: "Trans",
	time: "Act",
	range: "120 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: "Dex",
	description: "6+2/SL 5-ft dia stone lift up 30 ft; \u2265Medium crea save or lifted, 6d6 Bludg. dmg if hit ceiling; see B",
	descriptionShorter: "6+2/SL 5-ft dia stone lift up 30 ft; \u2265Medium crea save or lift, 6d6 Bludg. dmg if hit ceiling; see B",
	descriptionShorterMetric: "6+2/SL 1,5-m dia stone lift 9 m; \u2265Medium crea save or lift, 6d6 Bludg. dmg if hit ceiling; see B",
	descriptionFull: [
		"You cause up to six pillars of stone to burst from places on the ground that you can see within range. Each pillar is a cylinder that has a diameter of 5 feet and a height of up to 30 feet. The ground where a pillar appears must be wide enough for its diameter, and you can target the ground under a creature if that creature is Medium or smaller. Each pillar has AC 5 and 30 hit points. When reduced to 0 hit points, a pillar crumbles into rubble, which creates an area of difficult terrain with a 10-foot radius that lasts until the rubble is cleared. Each 5-foot-diameter portion of the area requires at least 1 minute to clear by hand.",
		"If a pillar is created under a creature, that creature must succeed on a Dexterity saving throw or be lifted by the pillar. A creature can choose to fail the save.",
		"If a pillar is prevented from reaching its full height because of a ceiling or other obstacle, a creature on the pillar takes 6d6 bludgeoning damage and is restrained, pinched between the pillar and the obstacle. The restrained creature can use an action to make a Strength or Dexterity check (the creature's choice) against the spell's save DC. On a success, the creature is no longer restrained and must either move off the pillar or fall off it.",
		"***At Higher Levels***. When you cast this spell using a spell slot of 7th level or higher, you can create two additional pillars for each slot level above 6th.",
	],
};
SpellsList["catapult"] = {
	name: "Catapult",
	classes: ["artificer", "sorcerer", "wizard"],
	source: [["X", 150], ["E", 15]],
	level: 1,
	school: "Trans",
	time: "Act",
	range: "60 ft",
	components: "S",
	duration: "Instantaneous",
	save: "Dex",
	description: "Send 5+5/SL lb unattended object in 90 ft straight line; if crea hit, save or 3d8+1d8/SL Bludg. dmg",
	descriptionFull: [
		"Choose one object weighing 1 to 5 pounds within range that isn't being worn or carried. The object flies in a straight line up to 90 feet in a direction you choose before falling to the ground, stopping early if it impacts against a solid surface. If the object would strike a creature, that creature must make a Dexterity saving throw. On a failed save, the object strikes the target and stops moving. When the object strikes something, the object and what it strikes each take 3d8 bludgeoning damage.",
		"***At Higher Levels***. When you cast this spell using a spell slot of 2nd level or higher, the maximum weight of objects that you can target with this spell increases by 5 pounds, and the damage increases by 1d8, for each slot level above 1st.",
	],
};
SpellsList["control flames"] = {
	name: "Control Flames",
	classes: ["druid", "sorcerer", "wizard"],
	source: [["X", 152], ["E", 16]],
	level: 0,
	school: "Trans",
	time: "Act",
	range: "60 ft",
	components: "S",
	duration: "Instant. or 1 h",
	description: "Nonmagical flame up to 5 cu ft; instant: expand/extinguish, 1h: brighten/dim/color/create shapes",
	descriptionFull: [
		"You choose nonmagical flame that you can see within range and that fits within a 5-foot cube. You affect it in one of the following ways.",
		" \u2022 You instantaneously expand the flame 5 feet in one direction, provided that wood or other fuel is present in the new location.",
		" \u2022 You instantaneously extinguish the flames within the cube.",
		" \u2022 You double or halve the area of bright light and dim light cast by the flame, change its color, or both. The change lasts for 1 hour.",
		" \u2022 You cause simple shapes-such as the vague form of a creature, an inanimate object, or a location-to appear within the flames and animate as you like. The shapes last for 1 hour.",
		"If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.",
	],
};
SpellsList["control winds"] = {
	name: "Control Winds",
	classes: ["druid", "sorcerer", "wizard"],
	source: [["X", 152], ["E", 16], ["UA:D", 8]],
	level: 5,
	school: "Trans",
	time: "Act",
	range: "300 ft",
	components: "V,S",
	duration: "Conc, 1 h",
	description: "100-ft cube of air either gusts, downdraft, or updraft; affects flying/jump/ranged; 1 a change; see B",
	descriptionFull: [
		"You take control of the air in a 100-foot cube that you can see within range. Choose one of the following effects when you cast the spell. The effect lasts for the spell's duration, unless you use your action on a later turn to switch to a different effect. You can also use your action to temporarily halt the effect or to restart one you've halted.",
		"***Gusts***: A wind picks up within the cube, continually blowing in a horizontal direction you designate. You choose the intensity of the wind: calm, moderate, or strong. If the wind is moderate or strong, ranged weapon attacks that enter or leave the cube or pass through it have disadvantage on their attack rolls. If the wind is strong, any creature moving against the wind must spend 1 extra foot of movement for each foot moved.",
		"***Downdraft***: You cause a sustained blast of strong wind to blow downward from the top of the cube. Ranged weapon attacks that pass through the cube or that are made against targets within it have disadvantage on their attack rolls. A creature must make a Strength saving throw if it flies into the cube for the first time on a turn or starts its turn there flying. On a failed save, the creature is knocked prone.",
		"***Updraft***: You cause a sustained updraft within the cube, rising upward from the cube's bottom side. Creatures that end a fall within the cube take only half damage from the fall. When a creature in the cube makes a vertical jump, the creature can jump up to 10 feet higher than normal.",
	],
};
SpellsList["create bonfire"] = {
	name: "Create Bonfire",
	classes: ["artificer", "druid", "sorcerer", "warlock", "wizard"],
	source: [["X", 152], ["E", 16]],
	level: 0,
	school: "Conj",
	time: "Act",
	range: "60 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	save: "Dex",
	description: "5-ft cube all crea now/enter/end turn save or 1d8 Fire dmg; ignites flammable; +1d8 at CL 5/11/17",
	descriptionMetric: "1,5m cube all crea now/enter/end turn save or 1d8 Fire dmg; ignites flammable; +1d8 at CL 5/11/17",
	descriptionShorter: "5-ft cube all now/enter/end save or 1d8 Fire dmg; ignites flammable; +1d8 at CL 5,11,17",
	descriptionCantripDie: "5-ft cube all crea at casting, entering, or end turn in save or `CD`d8 Fire dmg; ignites flammable",
	descriptionFull: [
		"You create a bonfire on ground that you can see within range. Until the spell ends, the magic bonfire fills a 5-foot cube. Any creature in the bonfire's space when you cast the spell must succeed on a Dexterity saving throw or take 1d8 fire damage. A creature must also make the saving throw when it moves into the bonfire's space for the first time on a turn or ends its turn there.",
		"The bonfire ignites flammable objects in its area that aren't being worn or carried.",
		"The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
	],
};
SpellsList["dust devil"] = {
	name: "Dust Devil",
	classes: ["druid", "sorcerer", "wizard"],
	source: [["X", 154], ["E", 17]],
	level: 2,
	school: "Conj",
	time: "Act",
	range: "60 ft",
	components: "V,S,M",
	compMaterial: "A pinch of dust",
	duration: "Conc, 1 min",
	save: "Str",
	description: "5-ft cube; all in 5-ft 1d8+1d8/SL Bludg. dmg and pushed 10 ft away; save halves, no push; see B",
	descriptionShorterMetric: "1,5m cube; all in 1,5 m 1d8+1d8/SL Bludg. dmg \x26 push 3 m away; save half, no push; see B",
	descriptionFull: [
		"Choose an unoccupied 5-foot cube of air that you can see within range. An elemental force that resembles a dust devil appears in the cube and lasts for the spell's duration.",
		"Any creature that ends its turn within 5 feet of the dust devil must make a Strength saving throw. On a failed save, the creature takes 1d8 bludgeoning damage and is pushed 10 feet away from the dust devil. On a successful save, the creature takes half as much damage and isn't pushed.",
		"As a bonus action, you can move the dust devil up to 30 feet in any direction. If the dust devil moves over sand, dust, loose dirt, or light gravel, it sucks up the material and forms a 10-foot-radius cloud of debris around itself that lasts until the start of your next turn. The cloud heavily obscures its area.",
		"***At Higher Levels***. When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd.",
	],
};
SpellsList["earthbind"] = {
	name: "Earthbind",
	classes: ["druid", "sorcerer", "warlock", "wizard"],
	source: [["X", 154], ["E", 17]],
	level: 2,
	school: "Trans",
	time: "Act",
	range: "300 ft",
	components: "V",
	duration: "Conc, 1 min",
	save: "Str",
	description: "1 creature save or Fly Speed is reduced to 0; airborne creatures safely descend at 60 ft per round",
	descriptionFull: "Choose one creature you can see within range. Yellow strips of magical energy loop around the creature. The target must succeed on a Strength saving throw, or its flying speed (if any) is reduced to 0 feet for the spell's duration. An airborne creature affected by this spell safely descends at 60 feet per round until it reaches the ground or the spell ends.",
};
SpellsList["earth tremor"] = {
	name: "Earth Tremor",
	classes: ["bard", "druid", "sorcerer", "wizard"],
	source: [["X", 155], ["E", 17]],
	level: 1,
	school: "Evoc",
	time: "Act",
	range: "10 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: "Dex",
	description: "All crea in range except me save or 1d6+1d6/SL Bludgeoning dmg and Prone; loose ground is dif. ter.",
	descriptionFull: [
		"You cause a tremor in the ground within range. Each creature other than you in that area must make a Dexterity saving throw. On a failed save, a creature takes 1d6 bludgeoning damage and is knocked prone. If the ground in that area is loose earth or stone, it becomes difficult terrain until cleared, with each 5-foot-diameter portion requiring at least 1 minute to clear by hand.",
		"***At Higher Levels***. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.",
	],
};
SpellsList["elemental bane"] = {
	name: "Elemental Bane",
	classes: ["artificer", "druid", "warlock", "wizard"],
	source: [["X", 155], ["E", 17]],
	level: 4,
	school: "Trans",
	time: "Act",
	range: "90 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	save: "Con",
	description: "1+1/SL crea, each max 30 ft apart, save or 1 energy: lose resist. to it \u0026 +2d6 to first dmg with it/turn",
	descriptionShorter: "1+1/SL crea, each max 30 ft apart, save or 1 energy: lose resist. \u0026 +2d6 first dmg/turn",
	descriptionFull: [
		"Choose one creature you can see within range, and choose one of the following damage types - acid, cold, fire, lightning, or thunder. The target must succeed on a Constitution saving throw or be affected by the spell for its duration. The first time each turn the affected target takes damage of the chosen type, the target takes an extra 2d6 damage of that type. Moreover, the target loses any resistance to that damage type until the spell ends.",
		"***At Higher Levels***. When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th. The creatures must be within 30 feet of each other when you target them.",
	],
	dynamicDamageBonus: {
		multipleDmgTypes: {
			dmgTypes: ["acid", "cold", "fire", "lightning", "thunder"],
			inDescriptionAs: "first",
		},
	},
};
SpellsList["erupting earth"] = {
	name: "Erupting Earth",
	classes: ["druid", "sorcerer", "wizard"],
	source: [["X", 155], ["E", 17]],
	level: 3,
	school: "Trans",
	time: "Act",
	range: "120 ft",
	components: "V,S,M",
	compMaterial: "A piece of obsidian",
	duration: "Instantaneous",
	save: "Dex",
	description: "20-ft cube all crea 3d12+1d12/SL Bludgeoning dmg; save halves; area becomes difficult terrain",
	descriptionFull: [
		"Choose a point you can see on the ground within range. A fountain of churned earth and stone erupts in a 20-foot cube centered on that point. Each creature in that area must make a Dexterity saving throw. A creature takes 3d12 bludgeoning damage on a failed save, or half as much damage on a successful one. Additionally, the ground in that area becomes difficult terrain until cleared. Each 5-foot-square portion of the area requires at least 1 minute to clear by hand.",
		"***At Higher Levels***. When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d12 for each slot level above 3rd.",
	],
};
SpellsList["flame arrows"] = {
	name: "Flame Arrows",
	classes: ["artificer", "druid", "ranger", "sorcerer", "wizard"],
	source: [["X", 156], ["E", 18]],
	level: 3,
	school: "Trans",
	time: "Act",
	range: "Touch",
	components: "V,S",
	duration: "Conc, 1 h",
	description: "12+2/SL ammunition drawn from touched quiver do +1d6 Fire damage on a successful hit",
	descriptionFull: [
		"You touch a quiver containing arrows or bolts. When a target is hit by a ranged weapon attack using a piece of ammunition drawn from the quiver, the target takes an extra 1d6 fire damage. The spell's magic ends on the piece of ammunition when it hits or misses, and the spell ends when twelve pieces of ammunition have been drawn from the quiver.",
		"***At Higher Levels***. When you cast this spell using a spell slot of 4th level or higher, the number of pieces of ammunition you can affect with this spell increases by two for each slot level above 3rd.",
	],
};
SpellsList["frostbite"] = {
	name: "Frostbite",
	classes: ["artificer", "druid", "sorcerer", "warlock", "wizard"],
	source: [["X", 156], ["E", 18]],
	level: 0,
	school: "Evoc",
	time: "Act",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: "Con",
	description: "1 crea save or 1d6 Cold dmg and dis. on next weapon attack roll; +1d6 at CL 5, 11, and 17",
	descriptionCantripDie: "1 crea save or `CD`d6 Cold dmg and dis. on next weapon attack roll",
	descriptionFull: [
		"You cause numbing frost to form on one creature that you can see within range. The target must make a Constitution saving throw. On a failed save, the target takes 1d6 cold damage, and it has disadvantage on the next weapon attack roll it makes before the end of its next turn.",
		"The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
	],
};
SpellsList["gust"] = {
	name: "Gust",
	classes: ["druid", "sorcerer", "wizard"],
	source: [["X", 157], ["E", 19], ["E:RLW", 50], ["UA:D", 6], ["WGtE", 107]],
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
SpellsList["immolation"] = {
	name: "Immolation",
	classes: ["sorcerer", "wizard"],
	source: [["X", 158], ["E", 19]],
	level: 5,
	school: "Evoc",
	time: "Act",
	range: "90 ft",
	components: "V",
	duration: "Conc, 1 min",
	save: "Dex",
	description: "1 crea save or 8d6 Fire dmg \u0026 burns for 4d6 Fire dmg/rnd; save each rnd to end; save half, no burning",
	descriptionShorter: "1 crea save or 8d6 Fire dmg \u0026 4d6 Fire dmg/rnd; save each rnd to end; save half, no rnds",
	descriptionFull: [
		"Flames wreathe one creature you can see within range. The target must make a Dexterity saving throw. It takes 8d6 fire damage on a failed save, or half as much damage on a successful one. On a failed save, the target also burns for the spell's duration. The burning target sheds bright light in a 30-foot radius and dim light for an additional 30 feet. At the end of each of its turns, the target repeats the saving throw. It takes 4d6 fire damage on a failed save, and the spell ends on a successful one. These magical flames can't be extinguished by nonmagical means.",
		"If damage from this spell kills a target, the target is turned to ash.",
	],
	dynamicDamageBonus: { multipleDmgMoments: false },
};
SpellsList["investiture of flame"] = {
	name: "Investiture of Flame",
	classes: ["druid", "sorcerer", "warlock", "wizard"],
	source: [["X", 159], ["E", 19]],
	level: 6,
	school: "Trans",
	time: "Act",
	range: "Self",
	components: "V,S",
	duration: "Conc, 10 min",
	save: "Dex",
	description: "Fire Immune; Cold res.; 1d10 Fire dmg in 5 ft; 1 a 15-ft long 5-ft wide all crea 4d8 Fire dmg, save half",
	descriptionMetric: "Fire im.; Cold res.; 1d10 Fire dmg in 1,5 m; 1 a 4,5-m long 1,5-m wide all crea 4d8 Fire dmg, save half",
	descriptionShorter: "Fire im.; Cold res.; 1d10 Fire dmg in 5 ft; 1a 15-ft long 5-ft wide all 4d8 Fire dmg, save half",
	descriptionShorterMetric: "Fire Immune; Cold res.; 1d10 Fire dmg in 1,5 m; 1 a 4,5-m long all 4d8 Fire dmg, save half",
	descriptionFull: [
		"Flames race across your body, shedding bright light in a 30-foot radius and dim light for an additional 30 feet for the spell's duration. The flames don't harm you. Until the spell ends, you gain the following benefits.",
		" \u2022 You are immune to fire damage and have resistance to cold damage.",
		" \u2022 Any creature that moves within 5 feet of you for the first time on a turn or ends its turn there takes 1d10 fire damage.",
		" \u2022 You can use your action to create a line of fire 15 feet long and 5 feet wide extending from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 4d8 fire damage on a failed save, or half as much damage on a successful one.",
	],
};
SpellsList["investiture of ice"] = {
	name: "Investiture of Ice",
	classes: ["druid", "sorcerer", "warlock", "wizard"],
	source: [["X", 159], ["E", 19]],
	level: 6,
	school: "Trans",
	time: "Act",
	range: "Self",
	components: "V,S",
	duration: "Conc, 10 min",
	save: "Con",
	description: "Cold im.; Fire res.; 10-ft rad dif. ter.; 1 a 15-ft cone all crea 4d6 Cold dmg, half spd; save half, no spd",
	descriptionShorter: "Cold im.; Fire res.; 10-ft rad dif. ter.; 1 a 15-ft cone all 4d6 Cold dmg, half speed; save half",
	descriptionFull: [
		"Until the spell ends, ice rimes your body, and you gain the following benefits.",
		" \u2022 You are immune to cold damage and have resistance to fire damage.",
		" \u2022 You can move across difficult terrain created by ice or snow without spending extra movement.",
		" \u2022 The ground in a 10-foot radius around you is icy and is difficult terrain for creatures other than you. The radius moves with you.",
		" \u2022 You can use your action to create a 15-foot cone of freezing wind extending from your outstretched hand in a direction you choose. Each creature in the cone must make a Constitution saving throw. A creature takes 4d6 cold damage on a failed save, or half as much damage on a successful one. A creature that fails its save against this effect has its speed halved until the start of your next turn.",
	],
};
SpellsList["investiture of stone"] = {
	name: "Investiture of Stone",
	classes: ["druid", "sorcerer", "warlock", "wizard"],
	source: [["X", 159], ["E", 19]],
	level: 6,
	school: "Trans",
	time: "Act",
	range: "Self",
	components: "V,S",
	duration: "Conc, 10 min",
	save: "Dex",
	description: "Nonmagical Bludg/Pierc/Slash resist.; 1 a 15-ft rad all crea save or Prone; move through earth/stone",
	descriptionFull: [
		"Until the spell ends, bits of rock spread across your body, and you gain the following benefits:",
		" \u2022 You have resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks.",
		" \u2022 You can use your action to create a small earthquake on the ground in a 15-foot radius centered on you. Other creatures on that ground must succeed on a Dexterity saving throw or be knocked prone.",
		" \u2022 You can move across difficult terrain made of earth or stone without spending extra movement. You can move through solid earth or stone as if it was air and without destabilizing it, but you can't end your movement there. If you do so, you are ejected to the nearest unoccupied space, this spell ends, and you are stunned until the end of your next turn.",
	],
};
SpellsList["investiture of wind"] = {
	name: "Investiture of Wind",
	classes: ["druid", "sorcerer", "warlock", "wizard"],
	source: [["X", 160], ["E", 20]],
	level: 6,
	school: "Trans",
	time: "Act",
	range: "Self",
	components: "V,S",
	duration: "Conc, 10 min",
	save: "Con",
	description: "Rngd wea atks dis. vs me; fly 60 ft; 1 a 15-ft cube in 60 ft all 2d10 Bludg. dmg, push 10 ft, save half",
	descriptionShorter: "Rngd wea atk dis; fly 60 ft; 1 a 15-ft cu in 60 ft all 2d10 Bludg. dmg, push 10 ft, save half",
	descriptionFull: [
		"Until the spell ends, wind whirls around you, and you gain the following benefits.",
		" \u2022 Ranged weapon attacks made against you have disadvantage on the attack roll.",
		" \u2022 You gain a flying speed of 60 feet. If you are still flying when the spell ends, you fall, unless you can somehow prevent it.",
		" \u2022 You can use your action to create a 15-foot cube of swirling wind centered on a point you can see within 60 feet of you. Each creature in that area must make a Constitution saving throw. A creature takes 2d10 bludgeoning damage on a failed save, or half as much damage on a successful one. If a Large or smaller creature fails the save, that creature is also pushed up to 10 feet away from the center of the cube.",
	],
};
SpellsList["maelstrom"] = {
	name: "Maelstrom",
	classes: ["druid"],
	source: [["X", 160], ["E", 20]],
	level: 5,
	school: "Evoc",
	time: "Act",
	range: "120 ft",
	components: "V,S,M",
	compMaterial: "Paper or leaf in the shape of a funnel",
	duration: "Conc, 1 min",
	save: "Str",
	description: "5-ft deep 30-ft rad dif. ter.; all crea starting turn in save or 6d6 Bludg. dmg and pulled 10 ft to center",
	descriptionShorter: "5-ft deep 30-ft rad dif. ter.; all start turn in save or 6d6 Bludg. dmg \u0026 pull 10 ft to center",
	descriptionFull: "A mass of 5-foot-deep water appears and swirls in a 30-foot radius centered on a point you can see within range. The point must be on ground or in a body of water. Until the spell ends, that area is difficult terrain, and any creature that starts its turn there must succeed on a Strength saving throw or take 6d6 bludgeoning damage and be pulled 10 feet toward the center.",
};
SpellsList["magic stone"] = {
	name: "Magic Stone",
	classes: ["artificer", "druid", "warlock"],
	source: [["X", 160], ["E", 20]],
	level: 0,
	school: "Trans",
	time: "Bns",
	range: "Touch",
	components: "V,S",
	duration: "1 min",
	description: "Imbue 3 pebbles for spell attacks, thrown 60 ft or with sling, do 1d6+spellcasting mod Bludg. dmg",
	descriptionShorter: "Imbue 3 pebbles for spell atk, thrown 60 ft or sling, do 1d6+spellcasting mod Bludg. dmg",
	descriptionFull: [
		"You touch one to three pebbles and imbue them with magic. You or someone else can make a ranged spell attack with one of the pebbles by throwing it or hurling it with a sling. If thrown, it has a range of 60 feet. If someone else attacks with the pebble, that attacker adds your spellcasting ability modifier, not the attacker's, to the attack roll. On a hit, the target takes bludgeoning damage equal to 1d6 + your spellcasting ability modifier. Hit or miss, the spell then ends on the stone.",
		"If you cast this spell again, the spell ends early on any pebbles still affected by it.",
	],
};
SpellsList["maximilian's earthen grasp"] = {
	name: "Maximilian's Earthen Grasp",
	nameShort: "Max's Earthen Grasp",
	nameAlt: "Earthen Grasp",
	classes: ["sorcerer", "wizard"],
	source: [["X", 161], ["E", 20]],
	level: 2,
	school: "Trans",
	time: "Act",
	range: "30 ft",
	components: "V,S,M",
	compMaterial: "A miniature hand sculpted from clay",
	duration: "Conc, 1 min",
	save: "Str",
	description: "Medium hand atks 1 crea: save or 2d6 Bludg. dmg \u0026 Restrained; 1 a hand moves/atks, releases; see B",
	descriptionShorter: "Medium hand atk 1 crea: save or 2d6 Bludg. dmg \u0026 Restrained; 1 a move/atk, release; see B",
	descriptionFull: [
		"You choose a 5-foot-square unoccupied space on the ground that you can see within range. A Medium hand made from compacted soil rises there and reaches for one creature you can see within 5 feet of it. The target must make a Strength saving throw. On a failed save, the target takes 2d6 bludgeoning damage and is restrained for the spell's duration.",
		"As an action, you can cause the hand to crush the restrained target, which must make a Strength saving throw. The target takes 2d6 bludgeoning damage on a failed save, or half as much damage on a successful one.",
		"To break out, the restrained target can use its action to make a Strength check against your spell save DC. On a success, the target escapes and is no longer restrained by the hand.",
		"As an action, you can cause the hand to reach for a different creature or to move to a different unoccupied space within range. The hand releases a restrained target if you do either.",
	],
};
SpellsList["melf's minute meteors"] = {
	name: "Melf's Minute Meteors",
	nameAlt: "Minute Meteors",
	classes: ["sorcerer", "wizard"],
	source: [["X", 161], ["E", 20]],
	level: 3,
	school: "Evoc",
	time: "Act",
	range: "Self",
	components: "V,S,M",
	compMaterial: "Niter, sulfur, and pine tar formed into a bead",
	duration: "Conc, 10 min",
	save: "Dex",
	description: "6+2/SL meteors; at casting/bns a send up to two 120 ft for 5-ft rad all crea 2d6 Fire dmg; save half",
	descriptionShorter: "6+2/SL meteors; at cast/bns a send up to two 120 ft for 5-ft rad all 2d6 Fire dmg; save half",
	descriptionFull: [
		"You create six tiny meteors in your space. They float in the air and orbit you for the spell's duration. When you cast the spell-and as a bonus action on each of your turns thereafter-you can expend one or two of the meteors, sending them streaking toward a point or points you choose within 120 feet of you. Once a meteor reaches its destination or impacts against a solid surface, the meteor explodes. Each creature within 5 feet of the point where the meteor explodes must make a Dexterity saving throw. A creature takes 2d6 fire damage on a failed save, or half as much damage on a successful one.",
		"***At Higher Levels***. When you cast this spell using a spell slot of 4th level or higher, the number of meteors created increases by two for each slot level above 3rd.",
	],
};
SpellsList["mold earth"] = {
	name: "Mold Earth",
	classes: ["druid", "sorcerer", "wizard"],
	source: [["X", 162], ["E", 21]],
	level: 0,
	school: "Trans",
	time: "Act",
	range: "30 ft",
	components: "S",
	duration: "Instant. or 1 h",
	description: "5 cu ft earth; instant.: excavate; 1h: change to difficult or normal terrain, or change shape and color",
	descriptionFull: [
		"You choose a portion of dirt or stone that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways.",
		" \u2022 If you target an area of loose earth, you can instantaneously excavate it, move it along the ground, and deposit it up to 5 feet away. This movement doesn't have enough force to cause damage.",
		" \u2022 You cause shapes, colors, or both to appear on the dirt or stone, spelling out words, creating images, or shaping patterns. The changes last for 1 hour.",
		" \u2022 If the dirt or stone you target is on the ground, you cause it to become difficult terrain. Alternatively, you can cause the ground to become normal terrain if it is already difficult terrain. This change lasts for 1 hour.",
		"If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.",
	],
};
SpellsList["primordial ward"] = {
	name: "Primordial Ward",
	classes: ["druid"],
	source: [["X", 163], ["E", 21]],
	level: 6,
	school: "Abjur",
	time: "Act",
	range: "Self",
	components: "V,S",
	duration: "Conc, 1 min",
	description: "Acid, Cold, Fire, Lightning, and Thunder Resistance; use rea to gain 1 Immunity for 1 rnd, spell ends",
	descriptionFull: [
		"You have resistance to acid, cold, fire, lightning, and thunder damage for the spell's duration.",
		"When you take damage of one of those types, you can use your reaction to gain immunity to that type of damage, including against the triggering damage. If you do so, the resistances end, and you have the immunity until the end of your next turn, at which time the spell ends.",
	],
};
SpellsList["pyrotechnics"] = {
	name: "Pyrotechnics",
	classes: ["artificer", "bard", "sorcerer", "wizard"],
	source: [["X", 163], ["E", 21]],
	level: 2,
	school: "Trans",
	time: "Act",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: "Con",
	description: "5 cu ft nonma. flame extinguish, or 10-ft rad all crea save or blind 1 rnd, or 20-ft rad hvy obsc. 1 min",
	descriptionFull: [
		"Choose an area of nonmagical flame that you can see and that fits within a 5-foot cube within range. You can extinguish the fire in that area, and you create either fireworks or smoke when you do so.",
		"***Fireworks***: The target explodes with a dazzling display of colors. Each creature within 10 feet of the target must succeed on a Constitution saving throw or become blinded until the end of your next turn.",
		"***Smoke***: Thick black smoke spreads out from the target in a 20-foot radius, moving around corners. The area of the smoke is heavily obscured. The smoke persists for 1 minute or until a strong wind disperses it.",
	],
};
SpellsList["shape water"] = {
	name: "Shape Water",
	classes: ["druid", "sorcerer", "wizard"],
	source: [["X", 164], ["E", 21], ["W", 172]],
	level: 0,
	school: "Trans",
	time: "Act",
	range: "30 ft",
	components: "S",
	duration: "Instant. or 1 h",
	description: "5 cu ft water; instant: move/change flow; 1h: simple shapes/change color or opacity/freeze",
	descriptionFull: [
		"You choose an area of water that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways.",
		" \u2022 You instantaneously move or otherwise change the flow of the water as you direct, up to 5 feet in any direction. This movement doesn't have enough force to cause damage.",
		" \u2022 You cause the water to form into simple shapes and animate at your direction. This change lasts for 1 hour.",
		" \u2022 You change the water's color or opacity. The water must be changed in the same way throughout. This change lasts for 1 hour.",
		" \u2022 You freeze the water, provided that there are no creatures in it. The water unfreezes in 1 hour.",
		"If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.",
	],
};
SpellsList["skywrite"] = {
	name: "Skywrite",
	classes: ["artificer", "bard", "druid", "wizard"],
	source: [["X", 165], ["E", 22]],
	ritual: true,
	level: 2,
	school: "Trans",
	time: "Act",
	range: "Sight",
	components: "V,S",
	duration: "Conc, 1 h",
	description: "Write up to 10 words with clouds in a part of the sky I can see; strong wind can disperse the clouds",
	descriptionFull: "You cause up to ten words to form in a part of the sky you can see. The words appear to be made of cloud and remain in place for the spell's duration. The words dissipate when the spell ends. A strong wind can disperse the clouds and end the spell early.",
};
SpellsList["snilloc's snowball swarm"] = {
	name: "Snilloc's Snowball Swarm",
	nameAlt: "Snowball Swarm",
	classes: ["sorcerer", "wizard"],
	source: [["X", 165], ["E", 22]],
	level: 2,
	school: "Evoc",
	time: "Act",
	range: "90 ft",
	components: "V,S,M",
	compMaterial: "A piece of ice or a small white rock chip",
	duration: "Instantaneous",
	save: "Dex",
	description: "5-ft radius all creatures 3d6+1d6/SL Cold damage; save halves",
	descriptionFull: [
		"A flurry of magic snowballs erupts from a point you choose within range. Each creature in a 5-foot-radius sphere centered on that point must make a Dexterity saving throw. A creature takes 3d6 cold damage on a failed save, or half as much damage on a successful one.",
		"***At Higher Levels***. When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd.",
	],
};
SpellsList["storm sphere"] = {
	name: "Storm Sphere",
	classes: ["sorcerer", "wizard"],
	source: [["X", 166], ["E", 22]],
	level: 4,
	school: "Evoc",
	time: "Act",
	range: "150 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	save: "Str",
	description: "20-ft rad dif. ter., all now/end turn save or 2d6 Bludg. dmg; bns a 60 ft atk 4d6 Lightn. dmg; +1d6/SL",
	descriptionShorter: "20-ft rad dif. ter., all save/turn 2d6 Bludg. dmg; bns a 60 ft atk 4d6 Lightn. dmg; +1d6/SL",
	descriptionFull: [
		"A 20-foot-radius sphere of whirling air springs into existence centered on a point you choose within range. The sphere remains for the spell's duration. Each creature in the sphere when it appears or that ends its turn there must succeed on a Strength saving throw or take 2d6 bludgeoning damage. The sphere's space is difficult terrain.",
		"Until the spell ends, you can use a bonus action on each of your turns to cause a bolt of lightning to leap from the center of the sphere toward one creature you choose within 60 feet of the center. Make a ranged spell attack. You have advantage on the attack roll if the target is in the sphere. On a hit, the target takes 4d6 lightning damage.",
		"Creatures within 30 feet of the sphere have disadvantage on Wisdom (Perception) checks made to listen.",
		"***At Higher Levels***. When you cast this spell using a spell slot of 5th level or higher, the damage increases for each of its effects by 1d6 for each slot level above 4th.",
	],
};
SpellsList["tidal wave"] = {
	name: "Tidal Wave",
	classes: ["druid", "sorcerer", "wizard"],
	source: [["X", 168], ["E", 22]],
	level: 3,
	school: "Conj",
	time: "Act",
	range: "120 ft",
	components: "V,S,M",
	compMaterial: "A drop of water",
	duration: "Instantaneous",
	save: "Dex",
	description: "30-ft x 10-ft, 10-ft high all crea 4d8 Bludg. dmg and Prone; save halves not Prone; extinguish flames",
	descriptionFull: "You conjure up a wave of water that crashes down on an area within range. The area can be up to 30 feet long, up to 10 feet wide, and up to 10 feet tall. Each creature in that area must make a Dexterity saving throw. On a failed save, a creature takes 4d8 bludgeoning damage and is knocked prone. On a successful save, a creature takes half as much damage and isn't knocked prone. The water then spreads out across the ground in all directions, extinguishing unprotected flames in its area and within 30 feet of it, and then it vanishes.",
};
SpellsList["transmute rock"] = {
	name: "Transmute Rock",
	classes: ["artificer", "druid", "wizard"],
	source: [["X", 169], ["E", 22]],
	level: 5,
	school: "Trans",
	time: "Act",
	range: "120 ft",
	components: "V,S,M",
	compMaterial: "Clay and water",
	duration: "Until dispelled",
	description: "40 cu ft stone to mud or mud to stone; mud and stone restrains; mud from ceiling falls; see book",
	descriptionFull: [
		"You choose an area of stone or mud that you can see that fits within a 40-foot cube and is within range, and choose one of the following effects.",
		"***Transmute Rock to Mud***: Nonmagical rock of any sort in the area becomes an equal volume of thick, flowing mud that remains for the spell's duration.",
		"The ground in the spell's area becomes muddy enough that creatures can sink into it. Each foot that a creature moves through the mud costs 4 feet of movement, and any creature on the ground when you cast the spell must make a Strength saving throw. A creature must also make the saving throw when it moves into the area for the first time on a turn or ends its turn there. On a failed save, a creature sinks into the mud and is restrained, though it can use an action to end the restrained condition on itself by pulling itself free of the mud.",
		"If you cast the spell on a ceiling, the mud falls. Any creature under the mud when it falls must make a Dexterity saving throw. A creature takes 4d8 bludgeoning damage on a failed save, or half as much damage on a successful one.",
		"***Transmute Mud to Rock***: Nonmagical mud or quicksand in the area no more than 10 feet deep transforms into soft stone for the spell's duration. Any creature in the mud when it transforms must make a Dexterity saving throw. On a successful save, a creature is shunted safely to the surface in an unoccupied space. On a failed save, a creature becomes restrained by the rock. A restrained creature, or another creature within reach, can use an action to try to break the rock by succeeding on a DC 20 Strength check or by dealing damage to it. The rock has AC 15 and 25 hit points, and it is immune to poison and psychic damage.",
	],
};
SpellsList["wall of sand"] = {
	name: "Wall of Sand",
	classes: ["wizard"],
	source: [["X", 170], ["E", 23]],
	level: 3,
	school: "Evoc",
	time: "Act",
	range: "90 ft",
	components: "V,S,M",
	compMaterial: "A handful of sand",
	duration: "Conc, 10 min",
	description: "30\xD710\xD710ft (l\xD7w\xD7h) wall on the ground; blocks line of sight; Blinded while inside; 1/3 move",
	descriptionMetric: "9\xD73\xD73m (l\xD7w\xD7h) wall on the ground; blocks line of sight; Blinded while inside; 1/3 move",
	descriptionFull: "You conjure up a wall of swirling sand on the ground at a point you can see within range. You can make the wall up to 30 feet long, 10 feet high, and 10 feet thick, and it vanishes when the spell ends. It blocks line of sight but not movement. A creature is blinded while in the wall's space and must spend 3 feet of movement for every 1 foot it moves there.",
};
SpellsList["wall of water"] = {
	name: "Wall of Water",
	classes: ["druid", "sorcerer", "wizard"],
	source: [["X", 170], ["E", 23], ["V", 116], ["MOT", 27]],
	level: 3,
	school: "Evoc",
	time: "Act",
	range: "60 ft",
	components: "V,S,M",
	compMaterial: "A drop of water",
	duration: "Conc, 10 min",
	description: "30\xD71\xD710ft (l\xD7w\xD7h) or 20-ft rad 20-ft high; dif. ter.; range wea dis.; Fire dmg half; Cold dmg freezes",
	descriptionMetric: "9\xD70,3\xD73m (l\xD7w\xD7h) or 6-m rad 6-m high; dif. ter.; ranged wea dis.; Fire dmg half; Cold dmg freezes",
	descriptionFull: [
		"You conjure up a wall of water on the ground at a point you can see within range. You can make the wall up to 30 feet long, 10 feet high, and 1 foot thick, or you can make a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall vanishes when the spell ends. The wall's space is difficult terrain.",
		"Any ranged weapon attack that enters the wall's space has disadvantage on the attack roll, and fire damage is halved if the fire effect passes through the wall to reach its target. Spells that deal cold damage that pass through the wall cause the area of the wall they pass through to freeze solid (at least a 5-foot square section is frozen). Each 5-foot-square frozen section has AC 5 and 15 hit points. Reducing a frozen section to 0 hit points destroys it. When a section is destroyed, the wall's water doesn't fill it.",
	],
};
SpellsList["warding wind"] = {
	name: "Warding Wind",
	classes: ["bard", "druid", "sorcerer", "wizard"],
	source: [["X", 170], ["E", 23]],
	level: 2,
	school: "Evoc",
	time: "Act",
	range: "S:10-ft rad",
	components: "V",
	duration: "Conc, 10 min",
	description: "Strong (20 mph) wind around me deafens/extinguishes unprotected flames/dif. ter./ranged wea dis.",
	descriptionMetric: "Strong (32 kph) wind around me deafens/extinguishes unprotected flames/dif. ter./ranged wea dis.",
	descriptionFull: [
		"A strong wind (20 miles per hour) blows around you in a 10-foot radius and moves with you, remaining centered on you. The wind lasts for the spell's duration.",
		"The wind has the following effects.",
		" \u2022 It deafens you and other creatures in its area.",
		" \u2022 It extinguishes unprotected flames in its area that are torch-sized or smaller.",
		" \u2022 The area is difficult terrain for creatures other than you.",
		" \u2022 The attack rolls of ranged weapon attacks have disadvantage if they pass in or out of the wind.",
		" \u2022 It hedges out vapor, gas, and fog that can be dispersed by strong wind.",
	],
};
SpellsList["watery sphere"] = {
	name: "Watery Sphere",
	classes: ["druid", "sorcerer", "wizard"],
	source: [["X", 170], ["E", 23]],
	level: 4,
	school: "Conj",
	time: "Act",
	range: "90 ft",
	components: "V,S,M",
	compMaterial: "A droplet of water",
	duration: "Conc, 1 min",
	save: "Str",
	description: "5-ft rad all crea < Huge save or Restrained; on save ejected; save each rnd; 1 a move sphere 30 ft",
	descriptionFull: [
		"You conjure up a sphere of water with a 5-foot radius at a point you can see within range. The sphere can hover but no more than 10 feet off the ground. The sphere remains for the spell's duration.",
		"Any creature in the sphere's space must make a Strength saving throw. On a successful save, a creature is ejected from that space to the nearest unoccupied space of the creature's choice outside the sphere. A Huge or larger creature succeeds on the saving throw automatically, and a Large or smaller creature can choose to fail it. On a failed save, a creature is restrained by the sphere and is engulfed by the water. At the end of each of its turns, a restrained target can repeat the saving throw, ending the effect on itself on a success.",
		"The sphere can restrain as many as four Medium or smaller creatures or one Large creature. If the sphere restrains a creature that causes it to exceed this capacity, a random creature that was already restrained by the sphere falls out of it and lands prone in a space within 5 feet of it.",
		"As an action, you can move the sphere up to 30 feet in a straight line. If it moves over a pit, a cliff, or other drop-off, it safely descends until it is hovering 10 feet above the ground. Any creature restrained by the sphere moves with it. You can ram the sphere into creatures, forcing them to make the saving throw.",
		"When the spell ends, the sphere falls to the ground and extinguishes all normal flames within 30 feet of it. Any creature restrained by the sphere is knocked prone in the space where it falls. The water then vanishes.",
	],
};
SpellsList["whirlwind"] = {
	name: "Whirlwind",
	classes: ["druid", "sorcerer", "wizard"],
	source: [["X", 171], ["E", 24]],
	level: 7,
	school: "Evoc",
	time: "Act",
	range: "300 ft",
	components: "V,M",
	compMaterial: "A piece of straw",
	duration: "Conc, 1 min",
	save: "Dex",
	description: "10-ft rad 30-ft high all crea 10d6 Bludg. dmg; save halves; restrains; 1 a move 30 ft; see book",
	descriptionFull: [
		"A whirlwind howls down to a point that you can see on the ground within range. The whirlwind is a 10-foot-radius, 30-foot-high cylinder centered on that point. Until the spell ends, you can use your action to move the whirlwind up to 30 feet in any direction along the ground. The whirlwind sucks up any Medium or smaller objects that aren't secured to anything and that aren't worn or carried by anyone.",
		"A creature must make a Dexterity saving throw the first time on a turn that it enters the whirlwind or that the whirlwind enters its space, including when the whirlwind first appears. A creature takes 10d6 bludgeoning damage on a failed save, or half as much damage on a successful one. In addition, a Large or smaller creature that fails the save must succeed on a Strength saving throw or become restrained in the whirlwind until the spell ends. When a creature starts its turn restrained by the whirlwind, the creature is pulled 5 feet higher inside it, unless the creature is at the top. A restrained creature moves with the whirlwind and falls when the spell ends, unless the creature has some means to stay aloft.",
		"A restrained creature can use an action to make a Strength or Dexterity check against your spell save DC. If successful, the creature is no longer restrained by the whirlwind and is hurled 3d6 \xD7 10 feet away from it in a random direction.",
	],
};

// Weapons (attack cantrips)
WeaponsList["create bonfire"] = {
	regExpSearch: /^(?=.*create)(?=.*bonfire).*$/i,
	name: "Create Bonfire",
	source: [["X", 152], ["E", 16]],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage: ["C", 8, "fire"],
	range: "60 ft",
	description: "5-ft cube; Dex save at casting or when moved into, success - no damage; Conc, 1 min",
	abilitytodamage: false,
	dc: true,
};
WeaponsList["frostbite"] = {
	regExpSearch: /frostbite/i,
	name: "Frostbite",
	source: [["X", 156], ["E", 18]],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage: ["C", 6, "cold"],
	range: "60 ft",
	description: "Con save, success - no damage, fail - also Disadv on next weapon attack roll in next turn; 1 creature",
	abilitytodamage: false,
	dc: true,
};
WeaponsList["magic stone"] = {
	regExpSearch: /^(?=.*magic)(?=.*stone).*$/i,
	name: "Magic Stone",
	source: [["X", 160], ["E", 20]],
	list: "spell",
	ability: 5,
	type: "Cantrip",
	damage: [1, 6, "bludgeoning"],
	range: "60/120 ft",
	description: "Produces 3 stones that each can be thrown (60 ft) or hurled with a sling (120 ft) as a spell attack",
	abilitytodamage: true,
};

// legacy_20150714_AL-RoD.js
// This file adds the optional backgrounds from the Adventurers League season 3 (Rage of Demons) to MPMB's Character Record Sheet

// Define the source
SourceList["AL:RoD"] = {
	name: "Rage of Demons Backgrounds [Hillsfar]",
	abbreviation: "AL:RoD",
	group: "Legacy Adventurers League",
	campaignSetting: "Forgotten Realms",
	url: "https://www.dropbox.com/s/h4ijcnfun1cn580/Hillsfar-Regional-Character-Options.pdf?dl=1", // used to be https://dndadventurersleague.org/wp-content/uploads/2015/07/Hillsfar-Regional-Character-Options.pdf
	date: "2015/07/14",
	defaultExcluded: true,
};

// Backgrounds (with contributions by AggieBear)
BackgroundList["cormanthor refugee"] = {
	regExpSearch: /^(?=.*cormanthor)(?=.*refugee).*$/i,
	name: "Cormanthor Refugee",
	source: [["AL:RoD", 5]],
	skills: ["Nature", "Survival"],
	gold: 5,
	equipleft: [
		["Two-person tent", "", 20],
		["Set of artisan's tools", "", ""],
	],
	equipright: [
		["Traveler's clothes", "", 4],
		["Holy symbol (type)", "", 1],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Shelter of the Elven Clergy",
	trait: [
		"I long for a home that never really existed, whether in the camps, Hillsfar, or Myth Drannor.",
		"Though I am not an elf, I am a fervent, radical worshipper of the elven gods.",
		"I live in the moment, knowing my life could be turned upside down any day.",
		"I appreciate beauty in all of its forms.",
		"I hate the dark elves and the Netherese for each driving the elves out of Cormanthyr in the past.",
		"I am a forest bumpkin who grew up in a tent in the woods and is wholly ignorant of city life.",
		"I was raised alongside children of many other races. I harbor no racial prejudices at all.",
		"The elves have just the right word for so many things that cannot be expressed as well in other languages. I pepper my speech with elven words, phrases, and sayings.",
	],
	ideal: [
		["Patient",
			"Patient: The elves have taught me to think and plan for the long-term. (Lawful)",
		],
		["Rebellious",
			"Rebellious: Governments and politicians drove my family to the camps. I subtly defy authority whenever I think I can get away with it. (Chaotic)",
		],
		["Self-Absorbed",
			"Self-Absorbed: I've had to look out for number one so long that it has become second nature. (Any)",
		],
		["Wanderlust",
			"Wanderlust: I want to see as much of the world beyond the camps as I can. (Any)",
		],
		["Generous",
			"Generous: I give everything I can to help those in need, regardless of who they are. (Good)",
		],
		["To the Abyss with Them",
			"To the Abyss with Them: The people of Hillsfar cast me out. I won't risk my hide to help them. (Evil)",
		],
	],
	bond: [
		"The elves took me in when I had nowhere else to go. In return, I do what I can to help elves in need.",
		"I seek revenge against the people of Hillsfar for driving my family into the forest.",
		"My family lost everything when they were driven from Hillsfar. I strive to rebuild that fortune.",
		"The forest has provided me with food and shelter. In return, I protect forests and those who dwell within.",
		"I am deeply, tragically in love with someone whose racial lifespan is far longer or shorter than mine.",
		"Members of my extended family did not make it to the camps or have been kidnapped to fight in the Arena. I search for them tirelessly.",
	],
	flaw: [
		"I am very uncomfortable indoors and underground",
		"I am haughty. I grew up among the elves and emulate them. Other races are crude in comparison.",
		"Elf this, elf that. I am sick and tired of the elves.",
		"I am a miser. Having lost everything once before, I clutch my possessions and wealth very tightly.",
		"I am a moocher. I am so used to others providing for me that I have come to expect everyone to do it.",
		"I believe the gods have cursed me, my family, and all of the Cormanthor refugees. We are all doomed, doomed I tell you!",
	],
	toolProfs: [["Artisan's tools", 1]],
	languageProfs: ["Elvish"],
	lifestyle: "poor",
};
BackgroundList["gate urchin"] = {
	regExpSearch: /^(?=.*gate)(?=.*urchin).*$/i,
	name: "Gate Urchin",
	source: [["AL:RoD", 6]],
	skills: ["Deception", "Sleight of Hand"],
	gold: 10,
	equipleft: [
		["Battered alms box", "", 1],
	],
	equipright: [
		["Common clothes", "", 3],
		["Cast-off military jacket, cap, or scarf", "", ""],
		["Belt pouch (with coins)", "", 1],
		["Musical instrument of my choice", "", ""],
	],
	feature: "Red Plume and Mage Guild Contacts",
	trait: [
		"I appreciate the simple things in life: a song, a warm meal, a sunny day. I don't need any more.",
		"My problems are always caused by others. I'm never to blame.",
		"I am afraid I could wind up back on the streets any day.",
		"I get along with everyone.",
		"I see people as marks for a con and have difficulty feeling true empathy for them.",
		"I have a real flair for matchmaking. I can find anyone a spouse!",
		"I think money is the true measure of appreciation and affection. Everything else is talk or an act.",
		"I don't like having a lot of stuff, just a few simple things I need. I don't like being tied down and tend to leave things behind when I don't need them anymore.",
	],
	ideal: [
		["Loyal",
			"Loyal: I never rat out any of my friends, even when the Red Plumes or the Rogues Guild ask. (Lawful)",
		],
		["Adventurous",
			"Adventurous: I don't like doing the same thing every day. I crave variety. (Chaotic)",
		],
		["Strong",
			"Strong: Only the strong survive. I respect those who are strong and powerful. (Any)",
		],
		["Witty",
			"Witty: Brains are better than brawn. I rely on my wits and respect others who do the same. (Any)",
		],
		["Honest",
			"Honest: Others can do what they want, but I won't lie or steal, even to feed my family. (Good)",
		],
		["Ungrateful",
			"Ungrateful: Those who give, only do it to make themselves feel better. I steal from them. (Evil)",
		],
	],
	bond: [
		"The Joydancers of Lliira gave me my instrument when I really needed food. I hate them for that.",
		"Busking has taught me to love music above all else.",
		"The Rogues Guild spared me when I did a job without cutting them in. I owe them a great debt.",
		"I know people hate the Red Plumes, but some of them were really good to me. I help Red Plumes whenever I can, and I respect them. They're just doing what they have to do to get by in this world.",
		"I will be wealthy some day. My descendants will live in comfort and style.",
		"I know how hard life on the streets is. I do everything I can for those who have less than me.",
	],
	flaw: [
		"Though I no longer live at the Gate, I am still always concerned about where I will get my next meal.",
		"Years of thieving have become habit. I sometimes steal from strangers without thinking about it.",
		"I am ashamed of my origins. I pretend I am higher-born and fear others will find out the truth.",
		"I think people who grew up in houses are soft, spoiled, and ungrateful. I frequently tell them so.",
		"I am still very uncomfortable wearing nice clothes, sleeping in a warm bed, and eating fine food.",
		"I do not trust anyone who has not had a hard life.",
	],
	toolProfs: [["Thieves' tools", "Dex"], ["Musical instrument", 1]],
	lifestyle: "poor",
};
BackgroundList["hillsfar merchant"] = {
	regExpSearch: /^(?=.*hillsfar)(?=.*merchant).*$/i,
	name: "Hillsfar Merchant",
	source: [["AL:RoD", 7]],
	skills: ["Insight", "Persuasion"],
	gold: 25,
	equipright: [
		["Fine clothes", "", 6],
		["Signet ring", "", ""],
		["Purse (with coins)", "", 1],
		["Letter of introduction from family's trading house", "", 1],
	],
	feature: "Factor",
	featureAlt: "Trade Contact",
	trait: [
		"I fill my evenings with wine or mead and song.",
		"I greatly admire gladiators and enjoy the Arena.",
		"I take my wealth for granted. It seldom occurs to me that others aren't rich themselves.",
		"I leave broken hearts all around the Moonsea and up and down the Sword Coast.",
		"I work hard and seldom make time for fun.",
		"I am particularly devout and pray often.",
		"The Red Plumes caught me once. I hate them.",
		"I ask a lot of questions to get information about those with whom I am working and dealing.",
	],
	ideal: [
		["Frugal",
			"Frugal: I spend my money very carefully. (Lawful)",
		],
		["Profligate",
			"Profligate: I tend to spend extravagantly. (Chaotic)",
		],
		["Honest",
			"Honest: I deal with others above board. (Any)",
		],
		["Sharp",
			"Sharp: I seek to make the best deal possible. (Any)",
		],
		["Charitable",
			"Charitable: I give generously to others. (Good)",
		],
		["Greedy",
			"Greedy: I do not share my wealth with others. (Evil)",
		],
	],
	bond: [
		"I am fiercely loyal to those with whom I work.",
		"I must uphold the good name of my family.",
		"I will prove myself to my family as an adventurer.",
		"Deals are sacrosanct. I never go back on my word.",
		"I love making deals and negotiating agreements.",
		"I guard my wealth jealously.",
	],
	flaw: [
		"I am a braggart. I promote myself shamelessly.",
		"I am vain. I always wear the latest fashions.",
		"I am a glutton. I eat and drink to excess.",
		"I am a snob. I want only the finest things in life.",
		"I am lazy. I want others to take care of everything.",
		"I am overconfident. I overestimate my abilities.",
	],
	toolProfs: ["Vehicles (land)", "Vehicles (water)"],
	lifestyle: "wealthy",
};
BackgroundList["hillsfar smuggler"] = {
	regExpSearch: /^(?=.*hillsfar)(?=.*smuggler).*$/i,
	name: "Hillsfar Smuggler",
	source: [["AL:RoD", 8]],
	skills: ["Perception", "Stealth"],
	gold: 5,
	equipleft: [
		["Forgery kit", "", 5],
	],
	equipright: [
		["Common clothes", "", 3],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Secret Passage",
	trait: [
		"When I'm not smuggling, I gamble.",
		"I just love Halfling cooking and baking!",
		"I party with dwarves whenever I can.",
		"I'm a terrible singer, but I love to do it.",
		"I was raised to honor Chauntea and still do.",
		"The blood sports of the Arena sicken me.",
		"I think non-humans are really interesting.",
		"I exaggerate the tales of my exploits.",
	],
	ideal: [
		["Fair",
			"Fair: I think everyone deserves to be treated fairly. I don't play favorites. (Lawful)",
		],
		["Impulsive",
			"Impulsive: Planning is often a waste of time. No plan survives contact with reality. It's easier to dive in and deal with the consequences. (Chaotic)",
		],
		["Curious",
			"Curious: I want to learn as much as I can about the people and places I encounter. (Any)",
		],
		["Prepared",
			"Prepared: I think success depends on preparing as much as possible in advance. (Any)",
		],
		["Respectful",
			"Respectful: I think everyone deserves to be treated with respect and dignity, regardless of their race, creed, color, or origin. (Good)",
		],
		["Corrupt",
			"Corrupt: I will break the law or act dishonestly if the money is right. (Evil)",
		],
	],
	bond: [
		"I am loyal to the Rogues Guild and would do anything for them.",
		"I love the city of Hillsfar and my fellow Hillsfarians, despite the recent problems.",
		"I admire the elves. I help them whenever I can.",
		"A gnome helped me once. I pay the favor forward.",
		"I enjoy tricking the Red Plumes at every opportunity.",
		"I smuggled agricultural goods for non-human farmers. I try to help them when I can.",
	],
	flaw: [
		"My hatred for the Red Plumes burns so brightly that I have difficulty suppressing it around them.",
		"The Red Plumes caught me once before, and I was branded for my crime. If they catch me again, for any offense, the punishment will be dire.",
		"I treat all Hillsfarans poorly. I am disgusted with their failure to revolt against the Great Law of Humanity.",
		"I have difficulty trusting strangers. Anyone could be a spy for the authorities.",
		"I am greedy. There isn't much I won't do for money.",
		"I'm an informant for the Red Plumes. They let me continue my activities, so long as I pass them information about illegal activity in Hillsfar.",
	],
	toolProfs: ["Forgery kit"],
	languageProfs: [1],
	lifestyle: "modest",
};
BackgroundList["secret identity"] = {
	regExpSearch: /^(?=.*secret)(?=.*identity).*$/i,
	name: "Secret Identity",
	source: [["AL:RoD", 9]],
	skills: ["Deception", "Stealth"],
	gold: 5,
	equipleft: [
		["Disguise kit", "", 3],
		["Forgery kit", "", 5],
	],
	equipright: [
		["Common clothes", "", 3],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Secret Identity",
	trait: [
		"Despite its problems, I love Hillsfar, it's the greatest city in the world. The only one for me.",
		"I move from place to place, never staying anywhere long and leaving nothing behind.",
		"I think flattery is the best way to direct attention away from me.",
		"I don't make friends easily. They're a liability I cannot afford.",
		"Risk and danger exhilarate me. Pulling off schemes and deceptions is a rush.",
		"The First Lord is right, humans are superior. I really admire them, despite the atrocities.",
		"I avoid people of my own race, as well as things associated with my race, lest they give me away.",
		"I live for the Arena. I admire gladiators and enjoy the thrill of blood on the sands!",
	],
	ideal: [
		["Quisling",
			"Quisling: Supporting the rulers of the land and following the laws is the road to salvation. (Lawful)",
		],
		["Scofflaw",
			"Scofflaw: The laws and lawmakers are corrupt. I follow laws only when it suits me. (Chaotic)",
		],
		["Optimist",
			"Optimist: Everyone is basically good. Though the government is misguided it will all be okay. (Any)",
		],
		["Secretive",
			"Secretive: I am in the habit of not talking about myself. My business is none of yours. (Any)",
		],
		["Heroic",
			"Heroic: I do everything I can to help non-humans, regardless of the personal cost to me. (Good)",
		],
		["Depraved",
			"Depraved: I have lost my moral compass. The ends justify most any means. (Evil)",
		],
	],
	bond: [
		"The humans of Hillsfar have inflicted terrible harm on me, my family, and my race. I will have revenge.",
		"I am part of an underground network that smuggles non-humans into and out of the city.",
		"I am a partisan. I commit minor acts of defiance against the First Lord and Red Plumes when I can.",
		"I am a spy. I report on events in and around Hillsfar.",
		"My secret identity is the only thing protecting me from the Arena. I will stop at nothing to maintain it.",
		"I am madly in love with a human who does not know my true identity, and I fear rejection if I reveal it.",
	],
	flaw: [
		"After years of denying who I am, I now despise myself and other members of my pathetic race.",
		"Years of hiding have made me somewhat paranoid. I trust no one.",
		"I've been lying so often and for so long that I can't help it anymore. I frequently lie for no reason at all.",
		"I am ashamed. I failed to protect a member of my family who was seized and thrown into the Arena.",
		"I am struggling with maintaining my secret identity. I subconsciously want to get caught and therefore sometimes let my secret identity slip.",
		"Years of successfully deceiving others have made me cocky. I think no one can see through my lies.",
	],
	toolProfs: ["Disguise kit", "Forgery kit"],
	lifestyle: "modest",
};
BackgroundList["shade fanatic"] = {
	regExpSearch: /^(?=.*shade)(?=.*fanatic).*$/i,
	name: "Shade Fanatic",
	source: [["AL:RoD", 10]],
	skills: ["Deception", "Intimidation"],
	gold: 15,
	equipleft: [
		["Forgery kit", "", 5],
		["Transparent shadow cylinder", "", ""],
	],
	equipright: [
		["Fine clothes", "", 6],
		["Signet ring", "", ""],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Secret Society",
	trait: [
		"I am a bully; I try to hide it though.",
		"I let my actions speak for themselves",
		"I am important; I will not let anyone forget that.",
		"You are either with me or against me.",
		"I know it is only a matter of time before I am betrayed by those I care for.",
		"I never understand why people get so emotional.",
		"They are out to get me. It is only my cunning that keeps me ahead of them",
		"Everyone has a choice, the one I make is always right though.",
	],
	ideal: [
		["Hope",
			"Hope: I know even if I need do evil acts, history will be my redemption. (Chaos)",
		],
		["Dedicated",
			"Dedicated: I can do anything I put my mind to (Lawful)",
		],
		["Exciting",
			"Exciting: I have found the truth of the Shadovar and want to share it with everyone. (Any)",
		],
		["Frugal",
			"Frugal: I hoard my possessions knowing that someday I will be called upon to give everything I have to the cause (Any)",
		],
		["Eloquent",
			"Eloquent: I use my words to sway others to my beliefs. (Any)",
		],
		["Compassionate",
			"Compassionate: It is through love that others will join in our cause. (Good)",
		],
	],
	bond: [
		"They say the Shade broke the bonds of mortality; I want to find out how.",
		"The whispers in my head remind me that there is power to be found in the shadows.",
		"For the glory of Netheril, I will grow in power.",
		"I once lived in Hillsfar, I was chased out before I was able to say farewell.",
		"My true love was killed by the Red Plumes; I plot to make them suffer.",
		"I had a loved one die in the arena at Hillsfar; I am out to prove I am stronger than them!",
	],
	flaw: [
		"I always over exaggerate my abilities.",
		"I cannot bear to let those I care for out of my sight.",
		"I am incapable of standing up for myself.",
		"The group I am with has committed atrocities; I am always worried their actions will become public.",
		"I always enjoy a good mug of ale … or five.",
		"I know what I do is wrong, but am afraid to speak up about it.",
	],
	toolProfs: ["Forgery kit"],
	languageProfs: ["Netherese"],
	lifestyle: "moderate",
};
BackgroundList["trade sheriff"] = {
	regExpSearch: /^(?=.*trade)(?=.*sheriff).*$/i,
	name: "Trade Sheriff",
	source: [["AL:RoD", 11]],
	skills: ["Investigation", "Persuasion"],
	gold: 17,
	equipleft: [
		["Thieves' tools", "", 1],
	],
	equipright: [
		["Fine clothes", "", 6],
		["Gray cloak", "", ""],
		["Sheriff's insignia", "", ""],
	],
	feature: "Investigative Services",
	trait: [
		"I am always polite and respectful.",
		"I let my actions speak for themselves.",
		"I am haunted by my past having seen the murder of a close friend or family member and it is the one case I always needed to solve but have not been able to.",
		"I am quick to judge and slow to vindicate.",
		"I can be very persuasive and am able to ask questions where others might not be able to.",
		"I have a quirky personality that seems to take others off their guard.",
		"My sense of humor is considered by most to be awkward.",
		"Everyone has a choice, and they can always make the right choice, mine!",
	],
	ideal: [
		["Hope",
			"Hope: my job is to speak for the victim. (Good)",
		],
		["Dedicated",
			"Dedicated: Once I start an investigation, until told to do so, I do not quit, no matter where it leads. (Lawful)",
		],
		["Nation",
			"Nation: My city, nation, or people are all that matter. (Any)",
		],
		["Mercenary",
			"Mercenary: When I do investigations, I expect answers immediately. (Any)",
		],
		["Eloquent",
			"Eloquent: I use my words to sway others to give me answers. (Good)",
		],
		["Might",
			"Might: It is through threats and force that I get my answers. (Lawful)",
		],
	],
	bond: [
		"To this day an unsolved case will always leave me haunted and bother me.",
		"Through the might of my personality I will solve an investigation or puzzle.",
		"It is my right to believe what I will, just try and stop me.",
		"I need to prove my worth to my fellow Sheriffs.",
		"Someone I cared for died under suspicious circumstances. I will find out what happened to them and bring their killer to justice.",
		"I speak for those that cannot speak for themselves.",
	],
	flaw: [
		"I always over exaggerate my abilities.",
		"I cannot bear to let those I care for out of my sight.",
		"I took a bribe to tank an investigation and I would do anything to keep it secret.",
		"I have little respect for those that are of \"low\" intelligence/race.",
		"I always enjoy a good mug of ale … or five to cover up my past.",
		"I speak for the First Lord of Hillsfar and make sure everyone knows it.",
	],
	toolProfs: [["Thieves' tools", "Dex"]],
	languageProfs: ["Elvish"],
	lifestyle: "moderate",
};

// Background features
BackgroundFeatureList["factor"] = {
	description: "My family has assigned me the services of a loyal retainer from the business. This person can perform mundane tasks for me such as making purchases, delivering messages, and running errands. He or she will not fight for me or follow me into danger, and will leave if frequently endangered or abused. If killed, my family assigns me another within days.",
	source: [["AL:RoD", 7]],
};
BackgroundFeatureList["investigative services"] = {
	description: "I have a way of communicating with others that puts them at ease. I can invoke my rank to allow me access to a crime scene or to requisition equipment or horses on a temporary basis. When entering a settlement around Hillsfar, I can identify a contact who will give me information and would help me because I want to stop anyone from disrupting trade.",
	source: [["AL:RoD", 11]],
};
BackgroundFeatureList["red plume and mage guild contacts"] = {
	description: "I made friends among the Red Plumes and Mage's Guild when I lived at the Hillsfar Gate. They remember me fondly and help me in little ways when they can. I can invoke their assistance in and around Hillsfar to obtain food, simple equipment for temporary use, and to gain access to the low-security areas of their garrisons, halls, and encampments.",
	source: [["AL:RoD", 6]],
};
BackgroundFeatureList["secret identity"] = {
	description: "I have created a secret identity that I use to conceal my true race and that offers a covering explanation for my presence in Hillsfar. In addition, I can forge documents, including official papers and personal letters, as long as I have seen an example of the kind of document or the handwriting I am trying to copy.",
	source: [["AL:RoD", 9]],
};
BackgroundFeatureList["secret passage"] = {
	description: "I can call on my smuggler contacts to secure secret passage into or out of Hillsfar for myself and my friends, no questions asked, and no Red Plume entanglements. Because I'm calling in a favor, I can't be certain when or if they can help. In return for passage, my companions and I may owe the Rogue's Guild a favor and/or may have to pay bribes.",
	source: [["AL:RoD", 8]],
};
BackgroundFeatureList["secret society"] = {
	description: "I have a special way of communicating with others who feel the same way I do about the Shade. When I enter a village or larger city, I can identify a contact who will give me information on those that would hinder my goals and those who would help me simply because of my desire to see the Shade Enclave return in all its glory.",
	source: [["AL:RoD", 10]],
};
BackgroundFeatureList["shelter of the elven clergy"] = {
	description: "The clerics of Elventree have vowed to care for the Cormanthor refugees. They will help me when they can, including providing me and my companions with free healing and care at temples, shrines, and other established presences in Elventree. They will also provide me (but only me) with a poor lifestyle.",
	source: [["AL:RoD", 5]],
};
BackgroundFeatureList["trade contact"] = {
	description: "My family and I have trade contacts such as caravan masters, sailors, artisans, farmers, and shopkeepers throughout the Moonsea region and all along the Sword Coast. When adventuring in either of those areas, I can use those contacts to get information about the local area or to pass a message to someone in those areas, even across great distance.",
	source: [["AL:RoD", 7]],
};

// legacy_20150915_OotA.js
// This file adds all the beasts and background features from the Out of the Abyss adventure book to MPMB's Character Record Sheet

// Define the source
SourceList["OotA"] = {
	name: "Out of the Abyss [beasts, background features, items]",
	abbreviation: "OotA",
	group: "Legacy Adventure Books",
	campaignSetting: "Forgotten Realms",
	url: "https://dnd.wizards.com/products/outoftheabyss",
	date: "2015/09/15",
	defaultExcluded: true,
};

// Background features
BackgroundFeatureList["deep delver"] = {
	description: "I have a knack for finding my way in the Underdark, recalling all twists and turns with ease, such that I can always retrace my steps underground. I can determine which sources of food and water are safe to consume. I can always find sufficient food and water for myself and up to five other people in the Underdark, if sustenance is available in the area.",
	source: [["OotA", 221]],
};
BackgroundFeatureList["underdark experience"] = {
	description: "I'm no casual visitor to the Underdark, but have spent considerable time there learning its ways. I'm familiar with the various races, civilizations, settlements, and travel routes of the Underdark. If I fail an Intelligence check to recall some piece of Underdark lore, I know a source I can consult for the answer unless the DM rules that the lore is unknown.",
	source: [["OotA", 221]],
};

// Creatures
CreatureList["cave badger"] = { // contributed by Nod_Hero
	name: "Cave Badger",
	nameAlt: ["Badger, Cave"],
	source: [["OotA", 96]],
	size: 3,
	type: "Beast",
	alignment: "Unaligned",
	ac: 12,
	hp: 13,
	hd: [2, 8],
	speed: "30 ft, burrow 15 ft",
	scores: [13, 10, 15, 2, 12, 5],
	senses: "Darkvision 30 ft, Tremorsense 60 ft; Adv on Wis (Perception) checks using smell",
	passivePerception: 11,
	languages: "",
	challengeRating: "1/4",
	proficiencyBonus: 2,
	attacksAction: 2,
	attacks: [{
		name: "Bite",
		ability: 1,
		damage: [1, 6, "piercing"],
		range: "Melee (5 ft)",
		description: "One bite and one claws attack as an Attack action",
	}, {
		name: "Claws",
		ability: 1,
		damage: [2, 4, "slashing"],
		range: "Melee (5 ft)",
		description: "One claws and one bite attack as an Attack action",
	}],
	actions: [{
		name: "Multiattack",
		description: "As an Attack action, the badger can make one Bite and one Claws attack.",
	}],
	traits: [{
		name: "Keen Smell",
		description: "The badger has Advantage on Wisdom (Perception) checks that rely on smell.",
	}],
};
CreatureList["steeder, female"] = {
	name: "Female Steeder",
	nameAlt: ["Steeder, Female", "Steeder"],
	source: [["OotA", 231]],
	size: 2,
	type: "Beast",
	alignment: "Unaligned",
	ac: 14,
	hp: 30,
	hd: [4, 10],
	speed: "30 ft, climb 30 ft",
	scores: [15, 16, 14, 2, 10, 3],
	skills: {
		"stealth": 7,
	},
	senses: "Darkvision 120 ft",
	passivePerception: 10,
	challengeRating: "1",
	proficiencyBonus: 2,
	attacksAction: 1,
	attacks: [{
		name: "Bite",
		ability: 2,
		damage: [1, 8, "piercing"],
		range: "Melee (5 ft)",
		description: "Target also takes 2d8 Acid damage, half on a DC 12 Constitution saving throw",
	}, {
		name: "Sticky Leg",
		ability: 2,
		damage: ["\u2015", "", "Grappled"],
		range: "Melee (5 ft)",
		description: "Medium or smaller is stuck to the steeder's leg and Grappled (escape DC 12); Can't use again until grapple ends",
		abilitytodamage: false,
	}],
	traits: [{
		name: "Spider Climb",
		description: "The steeder can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
	}, {
		name: "Leap",
		description: "The steeder can expend all its movement on its turn to jump up to 90 ft vertically or horizontally, provided that its speed is at least 30 feet.",
	}],
};
CreatureList["steeder, male"] = {
	name: "Male Steeder",
	nameAlt: ["Steeder, Male"],
	source: [["OotA", 231]],
	size: 3,
	type: "Beast",
	alignment: "Unaligned",
	ac: 12,
	hp: 13,
	hd: [2, 8],
	speed: "30 ft, climb 30 ft",
	scores: [15, 12, 14, 2, 10, 3],
	skills: {
		"stealth": 5,
	},
	senses: "Darkvision 120 ft",
	passivePerception: 10,
	challengeRating: "1/4",
	proficiencyBonus: 2,
	attacksAction: 1,
	attacks: [{
		name: "Bite",
		ability: 1,
		damage: [1, 8, "piercing"],
		range: "Melee (5 ft)",
		description: "Target also takes 1d8 Acid damage, half on a DC 12 Constitution saving throw",
	}, {
		name: "Sticky Leg",
		ability: 1,
		damage: ["\u2015", "", "Grappled"],
		range: "Melee (5 ft)",
		description: "Small or smaller is stuck to the steeder's leg and Grappled (escape DC 12); Can't use again until grapple ends",
		abilitytodamage: false,
	}],
	traits: [{
		name: "Spider Climb",
		description: "The steeder can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
	}, {
		name: "Leap",
		description: "The steeder can expend all its movement on its turn to jump up to 60 ft vertically or horizontally, provided that its speed is at least 30 feet.",
	}],
};

// Magic Items
MagicItemsList["dawnbringer"] = {
	name: "Dawnbringer",
	source: [["OotA", 222]],
	type: "Weapon (Longsword)",
	rarity: "Legendary",
	storyItemAL: true,
	prerequisite: "Requires attunement by a creature of non-evil alignment",
	prereqeval: function (v) { return !/evil/i.test(What("Alignment")); },
	description: "As a Bonus Action, I can have this hilt create a blade of radiance. It acts like a longsword that does +2 to attack and damage rolls, Radiant damage (+1d8 to Undead), has Finesse, emits bright sunlight in a 15-ft radius and Dim Light in another 15 ft. I can use it to cast *Lesser Restoration* and it is sentient, see Notes.",
	descriptionLong: "As a Bonus Action, I can have this longsword hilt create or dismiss a blade of pure radiance. It acts like a longsword that grants a +2 bonus to attack and damage rolls, does Radiant damage and has the Finesse property. It deals +1d8 Radiant damage to Undead and emits sunlight, Bright Light in a 15-ft radius and Dim Light in an additional 15ft. As an action, I can expand or reduce both the Bright and Dim Light's radius by 5 ft each, to a maximum of 30 feet each or a minimum of 10 feet each. Once per dawn, I can use it to cast *Lesser Restoration*. Also, it is sentient, see Notes page.",
	descriptionFull: [
		"Lost for ages in the Underdark, *Dawnbringer* appears to be a gilded longsword hilt. While grasping the hilt, you can use a bonus action to make a blade of pure radiance spring from the hilt, or cause the blade to disappear. While the blade exists, this magic longsword has the finesse property. If you are proficient with shortswords or longswords, you are proficient with *Dawnbringer*.",
		"You gain a +2 bonus to attack and damage rolls made with this weapon, which deals radiant damage instead of slashing damage. When you hit an undead with it, that target takes an extra 1d8 radiant damage.",
		"The sword's luminous blade emits bright light in a 15-foot radius and dim light for an additional 15 feet. The light is sunlight. While the blade persists, you can use an action to expand or reduce its radius of bright and dim light by 5 feet each, to a maximum of 30 feet each or a minimum of 10 feet each.",
		"While holding the weapon, you can use an action to touch a creature with the blade and cast *Lesser Restoration* on that creature. Once used, this ability can't be used again until the next dawn.",
		"***Sentience***. *Dawnbringer* is a sentient neutral good weapon with an Intelligence of 12, a Wisdom of 15, and a Charisma of 14. It has hearing and darkvision out to a range of 120 feet.",
		"The sword can speak, read, and understand Common, and it can communicate with its wielder telepathically. Its voice is kind and feminine. It knows every language you know while attuned to it.",
		"***Personality***. Forged by ancient sun worshippers, *Dawnbringer* is meant to bring light into darkness and to fight creatures of darkness. It is kind and compassionate to those in need, but fierce and destructive to its enemies.",
		"Long years lost in darkness have made *Dawnbringer* frightened of both the dark and abandonment. It prefers that its blade always be present and shedding light in areas of darkness, and it strongly resists being parted from its wielder for any length of time.",
		// Addition from Adventurers League Content Catalogue 8.07
		"If an evil creature attempts to attune to the weapon, it not only finds it impossible, but *Dawnbringer* attempts to take control of its wielder (DC 14 Charisma saving throw). If the weapon is successful, it insists on being taken to the surface or willingly given to the first creature it comes across that is not a member of a race indigenous to the Underdark. *Dawnbringer* will not allow its relinquishment to a creature that it or its wielder knows is evil, and instead compels its wielder to find a new recipient.",
	],
	attunement: true,
	weight: 3,
	action: [["bonus action", " (start/stop)"], ["action", " (change light)"]],
	weaponOptions: [{
		baseWeapon: "longsword",
		regExpSearch: /dawnbringer/i,
		name: "Dawnbringer",
		source: [["OotA", 222]],
		damage: [1, 8, "radiant"],
		description: "Finesse, Versatile (1d10); +1d8 damage to Undead",
		modifiers: [2, 2],
		selectNow: true,
	}],
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (v.theWea.name == "Dawnbringer" && !fields.Proficiency) {
					fields.Proficiency = CurrentProfs.weapon.otherWea && CurrentProfs.weapon.otherWea.finalProfs.indexOf("shortsword") !== -1;
				}
			}, "",
		],
	},
	usages: 1,
	recovery: "dawn",
	additional: "Lesser Restoration",
	spellcastingBonus: [{
		name: "Once per dawn",
		spells: ["lesser restoration"],
		selection: ["lesser restoration"],
		firstCol: "onceday",
	}],
	toNotesPage: [
		{
			name: "Dawnbringer",
			note: [
				"Lost for ages in the Underdark, Dawnbringer appears to be a gilded longsword hilt. While grasping the hilt, I can use a Bonus Action to make a blade of pure radiance spring from the hilt, or cause the blade to disappear. While the blade exists, it functions as a magic longsword that has the Finesse property. I'm proficient with it if I'm proficient with either shortswords or longswords.",
				"I gain a +2 bonus to attack and damage rolls made with this weapon, which deals Radiant damage instead of Slashing damage. When I hit an Undead with it, that target takes an extra 1d8 Radiant damage.",
				"The sword's luminous blade emits Bright Light in a 15-foot radius and Dim Light for an additional 15 ft. The light is sunlight. As an action while the blade persists, I can expand or reduce its radius of Bright and Dim Light by 5 ft each, to a maximum of 30 ft each or a minimum of 10 ft each.",
				"As an action while holding the weapon, I can touch a creature with the blade and cast *Lesser Restoration* on that creature. Once used, this ability can't be used again until the next dawn.",
				"Dawnbringer is a sentient neutral good weapon with an Intelligence of 12, a Wisdom of 15, and a Charisma of 14. It has hearing and Darkvision out to a range of 120 feet. The sword can speak, read, and understand Common, and it can communicate with its wielder telepathically. Its voice is kind and feminine. It knows every language I know while attuned to it.",
				"Forged by ancient sun worshippers, Dawnbringer is meant to bring light into darkness and to fight creatures of darkness. It is kind and compassionate to those in need, but fierce and destructive to its enemies. Long years lost in darkness have made Dawnbringer frightened of both the dark and abandonment. It prefers that its blade always be present and shedding light in areas of darkness, and it strongly resists being parted from its wielder for any length of time.",
			],
		},
		Object.assign({}, sentientItemConflictNote, { amendTo: "Dawnbringer" }),
	],
}
MagicItemsList["piwafwi (cloak of elvenkind)"] = {
	name: "Piwafwi",
	source: [["OotA", 222]],
	type: "Wondrous Item",
	rarity: "Uncommon",
	description: "While I wear this dark spider-silk cloak with its hood up, Wisdom (Perception) checks made to see me have Disadv, and I have Adv on Dex (Stealth) checks made to hide, as its color shifts to camouflage me. Pulling the hood up or down requires an action. It loses its magic if exposed to sunlight for 1 uninterrupted hour.",
	descriptionFull: [
		"This dark spider-silk cloak is made by drow. It is a *cloak of elvenkind*. It loses its magic if exposed to sunlight for 1 hour without interruption.",
		"While you wear this cloak with its hood up, Wisdom (Perception) checks made to see you have disadvantage, and you have advantage on Dexterity (Stealth) checks made to hide, as the cloak's color shifts to camouflage you. Pulling the hood up or down requires an action.",
	],
	attunement: true,
	action: [["action", " (hood up/down)"]],
	eval: function () {
		if (CurrentMagicItems.known.indexOf("boots of elvenkind") !== -1) {
			SetProf("advantage", true, ["Stealth", true], "Cloak and Boots of Elvenkind (magic items)");
		}
	},
	removeeval: function () {
		SetProf("advantage", false, ["Stealth", true], "Cloak and Boots of Elvenkind (magic items)");
	},
}
MagicItemsList["piwafwi of fire resistance (cloak of elvenkind)"] = {
	name: "Piwafwi of Fire Resistance",
	source: [["OotA", 222]],
	type: "Wondrous Item",
	rarity: "Rare",
	description: "While I wear this dark spider-silk cloak with its hood up, Wisdom (Perception) checks made to see me have Disadv, and I get Adv on Dex (Stealth) checks made to hide. Pulling the hood up or down requires an action. It also grants me Fire Resistance. It loses its magic if exposed to sunlight for 1 hour uninterrupted.",
	descriptionFull: [
		"This dark spider-silk cloak is made by drow. It is a *cloak of elvenkind*. It also grants resistance to fire damage while you wear it. It loses its magic if exposed to sunlight for 1 hour without interruption.",
		"While you wear this cloak with its hood up, Wisdom (Perception) checks made to see you have disadvantage, and you have advantage on Dexterity (Stealth) checks made to hide, as the cloak's color shifts to camouflage you. Pulling the hood up or down requires an action.",
	],
	attunement: true,
	dmgres: ["Fire"],
	action: [["action", " (hood up/down)"]],
	eval: function () {
		if (CurrentMagicItems.known.indexOf("boots of elvenkind") !== -1) {
			SetProf("advantage", true, ["Stealth", true], "Cloak and Boots of Elvenkind (magic items)");
		}
	},
	removeeval: function () {
		SetProf("advantage", false, ["Stealth", true], "Cloak and Boots of Elvenkind (magic items)");
	},
}
MagicItemsList["spell gem"] = { // not legal in AL
	name: "Spell Gem",
	source: [["OotA", 223]],
	type: "Wondrous Item",
	notLegalAL: true,
	description: "This gem can store 1 spell in it. If it is empty, I can cast a spell as normal, but have it stored in the gem. As an action, I can cast a stored spell from it, if that spell is on my class' spell list.",
	descriptionFull: [
		"A *spell gem* can contain one spell from any class's spell list. You become aware of the spell when you learn the gem's properties. While holding the gem, you can cast the spell from it as an action if you know the spell or if the spell is on your class's spell list. Doing so doesn't require any components, and doesn't require attunement. The spell then disappears from the gem.",
		"If the spell is of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC equals 10 + the spell's level. On a failed check, the spell disappears from the gem with no other effect.",
		"Each *spell gem* has a maximum level for the spell it can store. The spell level determines the gem's rarity, the stored spell's saving throw DC, and attack bonus, as shown in the table below.",
		"You can imbue the gem with a spell if you're attuned to it and it's empty. To do so, you cast the spell while holding the gem. The spell is stored in the gem instead of having any effect. Casting the spell must require either 1 action or 1 minute or longer, and the spell's level must be no higher than the gem's maximum. If the spell belongs to the school of abjuration and requires material components that are consumed, you must provide them, but they can be worth half as much as normal.",
		"Once imbued with a spell, the gem can't be imbued again until the next dawn.",
		"Deep gnomes created these magic gemstones and keep the creation process a secret.",
		[
			["Level", "Stone", "", "Rarity", "", "DC/Atk"],
			["Cantrip", "Obsidian", "", "Uncommon", "13/+5"],
			["1st", "Lapis Lazuli", "Uncommon", "13/+5"],
			["2nd", "Quartz", "", "Rare", "", "13/+5"],
			["3rd", "Bloodstone", "Rare", "", "15/+7"],
			["4th", "Amber", "", "Very Rare   ", "15/+9"],
			["5th", "Jade", "", "Very Rare   ", "17/+9"],
			["6th", "Topaz", "", "Very Rare   ", "17/+10"],
			["7th", "Star Ruby  ", "Legendary ", "18/+10"],
			["8th", "Ruby", "", "Legendary ", "18/+10"],
			["9th", "Diamond", "", "Legendary ", "19/+11"],
		],
	],
	attunement: true,
	allowDuplicates: true,
	calcChanges: {
		spellAdd: [
			function (spellKey, spellObj, spName) {
				if (/spell gem/i.test(spName) && spellObj.time != "1 a") {
					spellObj.time = "1 a";
					return true;
				}
			},
			"Spells cast into a Spell Gem can only have a casting time of either 1 action or 1 minute or longer.\n \u2022 Spells cast from a Spell Gem always require 1 action to cast.",
		],
		spellList: [
			function (spList, spName, spType) {
				// only continue for spell gems
				if (spList.spellGemProcessed || !/spell gem/i.test(CurrentSpells[spName].name)) return;
				// create the notspells array if it didn't already exist
				if (!spList.notspells) spList.notspells = [];
				// now add all the spells of this spell gem's level that have a casting time of 1 Reaction or 1 Bonus Action
				for (var spell in SpellsList) {
					var aSp = SpellsList[spell];
					if (aSp.level <= spList.level[1] && aSp.time && /1 (rea|bns)/i.test(aSp.time)) spList.notspells.push(spell);
				}
				spList.spellGemProcessed = true;
			}, "",
		],
	},
	toNotesPage: [{
		name: "Storing Spells",
		page3notes: true,
		note: [
			"Casting a spell stored from a spell gem doesn't require attunement",
			"Only spells with a casting time of 1 action or 1 min or more can be stored in a spell gem",
			"Imbuing a spell gem requires casting a spell as normal, but the spell produces no effect",
			"I only need to provide half the costly material components for abjuration spells to imbue",
		],
	}],
	choices: ["Obsidian (cantrip, uncommon)", "Lapis Lazuli (1st-level, uncommon)", "Quartz (2nd-level, rare)", "Bloodstone (3rd-level, rare)", "Amber (4th-level, very rare)", "Jade (5th-level, very rare)", "Topaz (6th-level, very rare)", "Star Ruby (7th-level, legendary)", "Ruby (8th-level, legendary)", "Diamond (9th-level, legendary)"],
	"obsidian (cantrip, uncommon)": {
		name: "Spell Gem [Obsidian]",
		sortname: "Spell Gem  (cantrip) [Obsidian]",
		rarity: "Uncommon",
		description: "This gem can store one cantrip. I can cast such a spell into the empty gem. As an action, I can cast the spell stored in it (if it's on my class' spell list), with DC 13 and +5 spell attack.",
		fixedDC: 13,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: [{
			level: [0,0],
			psionic: false,
			firstCol: "checkbox",
			times: 20,
		}],
	},
	"lapis lazuli (1st-level, uncommon)": {
		name: "Spell Gem [Lapis Lazuli]",
		sortname: "Spell Gem (1st-level) [Lapis Lazuli]",
		rarity: "Uncommon",
		description: "This gem can store one spell up to 1st-level. I can cast such a spell into the empty gem. As an action, I can cast the spell stored in it (if it's on my class' spell list), with DC 13 and +5 spell attack. If the spell's level is higher than I can cast, I need to make a DC 11 check with my spellcasting ability or the spell has no effect.",
		fixedDC: 13,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: [{
			level: [0,1],
			psionic: false,
			firstCol: "checkbox",
			times: 20,
		}],
	},
	"quartz (2nd-level, rare)": {
		name: "Spell Gem [Quartz]",
		sortname: "Spell Gem (2nd-level) [Quartz]",
		rarity: "Rare",
		description: "This gem can store one spell up to 2nd-level. I can cast such a spell into the empty gem. As an action, I can cast the spell stored in it (if it's on my class' spell list), with DC 13 and +5 spell attack. If the spell's level is higher than I can cast, I need to make a DC 12 check with my spellcasting ability or the spell has no effect.",
		fixedDC: 13,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: [{
			level: [0,2],
			psionic: false,
			firstCol: "checkbox",
			times: 20,
		}],
	},
	"bloodstone (3rd-level, rare)": {
		name: "Spell Gem [Bloodstone]",
		sortname: "Spell Gem (3rd-level) [Bloodstone]",
		rarity: "Rare",
		description: "This gem can store one spell up to 3rd-level. I can cast such a spell into the empty gem. As an action, I can cast the spell stored in it (if it's on my class' spell list), with DC 15 and +7 spell attack. If the spell's level is higher than I can cast, I need to make a DC 13 check with my spellcasting ability or the spell has no effect.",
		fixedDC: 15,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: [{
			level: [0,3],
			psionic: false,
			firstCol: "checkbox",
			times: 20,
		}],
	},
	"amber (4th-level, very rare)": {
		name: "Spell Gem [Amber]",
		sortname: "Spell Gem (4th-level) [Amber]",
		rarity: "Very Rare",
		description: "This gem can store one spell up to 4th-level. I can cast such a spell into the empty gem. As an action, I can cast the spell stored in it (if it's on my class' spell list), with DC 15 and +9 spell attack. If the spell's level is higher than I can cast, I need to make a DC 14 check with my spellcasting ability or the spell has no effect.",
		fixedDC: 15,
		fixedSpAttack: 9,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: [{
			level: [0,4],
			psionic: false,
			firstCol: "checkbox",
			times: 20,
		}],
	},
	"jade (5th-level, very rare)": {
		name: "Spell Gem [Jade]",
		sortname: "Spell Gem (5th-level) [Jade]",
		rarity: "Very Rare",
		description: "This gem can store one spell up to 5th-level. I can cast such a spell into the empty gem. As an action, I can cast the spell stored in it (if it's on my class' spell list), with DC 17 and +9 spell attack. If the spell's level is higher than I can cast, I need to make a DC 15 check with my spellcasting ability or the spell has no effect.",
		fixedDC: 17,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: [{
			level: [0,5],
			psionic: false,
			firstCol: "checkbox",
			times: 20,
		}],
	},
	"topaz (6th-level, very rare)": {
		name: "Spell Gem [Topaz]",
		sortname: "Spell Gem (6th-level) [Topaz]",
		rarity: "Very Rare",
		description: "This gem can store one spell up to 6th-level. I can cast such a spell into the empty gem. As an action, I can cast the spell stored in it (if it's on my class' spell list), with DC 17, +10 spell attack. If the spell's level is higher than I can cast, I need to make a DC 16 check with my spellcasting ability or the spell has no effect.",
		fixedDC: 17,
		fixedSpAttack: 10,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: [{
			level: [0,6],
			psionic: false,
			firstCol: "checkbox",
			times: 20,
		}],
	},
	"star ruby (7th-level, legendary)": {
		name: "Spell Gem [Star Ruby]",
		sortname: "Spell Gem (7th-level) [Star Ruby]",
		rarity: "Legendary",
		description: "This gem can store one spell up to 7th-level. I can cast such a spell into the empty gem. As an action, I can cast the spell stored in it (if it's on my class' spell list), with DC 18, +10 spell attack. If the spell's level is higher than I can cast, I need to make a DC 17 check with my spellcasting ability or the spell has no effect.",
		fixedDC: 18,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: [{
			level: [0,7],
			psionic: false,
			firstCol: "checkbox",
			times: 20,
		}],
	},
	"ruby (8th-level, legendary)": {
		name: "Spell Gem [Ruby]",
		sortname: "Spell Gem (8th-level) [Ruby]",
		rarity: "Legendary",
		description: "This gem can store one spell up to 8th-level. I can cast such a spell into the empty gem. As an action, I can cast the spell stored in it (if it's on my class' spell list), with DC 18, +10 spell attack. If the spell's level is higher than I can cast, I need to make a DC 18 check with my spellcasting ability or the spell has no effect.",
		fixedDC: 18,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: [{
			level: [0,8],
			psionic: false,
			firstCol: "checkbox",
			times: 20,
		}],
	},
	"diamond (9th-level, legendary)": {
		name: "Spell Gem [Diamond]",
		sortname: "Spell Gem (9th-level) [Diamond]",
		rarity: "Legendary",
		description: "This gem can store one spell up to 9th-level. I can cast such a spell into the empty gem. As an action, I can cast the spell stored in it (if it's on my class' spell list), with DC 19, +11 spell attack. If the spell's level is higher than I can cast, I need to make a DC 19 check with my spellcasting ability or the spell has no effect.",
		fixedDC: 19,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: [{
			level: [0,9],
			psionic: false,
			firstCol: "checkbox",
			times: 20,
		}],
	},
}
MagicItemsList["stonespeaker crystal"] = {
	name: "Stonespeaker Crystal",
	source: [["OotA", 223]],
	type: "Wondrous Item",
	rarity: "Rare",
	description: "This crystal has 10 charges, regaining 1d6+4 at dawn, which I can use to cast its spells. When I use its last charge, roll a d20. On a 1, it vanishes. It gives me Adv on Int (Investigation) checks. When I cast an divination spell, I can expend 1 charge per level of the spell to substitute one material component of the spell.",
	descriptionFull: [
		"Created by the stone giant librarians of Gravenhollow, this nineteen-inch-long shard of quartz grants you advantage on Intelligence (Investigation) checks while it is on your person.",
		"The crystal has 10 charges. While holding it, you can use an action to expend some of its charges to cast one of the following spells from it: *Speak with Animals* (2 charges), *Speak with Dead* (4 charges), or *Speak with Plants* (3 charges).",
		"When you cast a divination spell, you can use the crystal in place of one material component that would normally be consumed by the spell, at a cost of 1 charge per level of the spell. The crystal is not consumed when used in this way.",
		"The crystal regains 1d6+4 expended charges daily at dawn. If you expend the crystal's last charge, roll a d20. On a 1, the crystal vanishes, lost forever.",
	],
	attunement: true,
	weight: 1,
	usages: 10,
	recovery: "dawn",
	additional: "regains 1d6+4",
	spellFirstColTitle: "Ch",
	spellcastingBonus: [{
		name: "2 charges",
		spells: ["speak with animals"],
		selection: ["speak with animals"],
		firstCol: 2,
	}, {
		name: "3 charges",
		spells: ["speak with plants"],
		selection: ["speak with plants"],
		firstCol: 3,
	}, {
		name: "4 charges",
		spells: ["speak with dead"],
		selection: ["speak with dead"],
		firstCol: 4,
	}],
	advantages: [["Investigation", true]],
}
MagicItemsList["wand of viscid globs"] = {
	name: "Wand of Viscid Globs",
	source: [["OotA", 223]],
	type: "Wand",
	rarity: "Rare",
	attunement: true,
	description: "This black wand has 7 charges, regaining 1d6+1 at midnight. If its last charge is used, roll a d20. On a 1, it melts. As an action, I can expend 1 charge to make a ranged attack roll on a target in 60 ft (with my spellcasting ability). On a hit, it is Restrained for 1 hour. The wand is destroyed if exposed to sunlight for 1 hour.",
	descriptionFull: [
		"Crafted by the drow, this slim black wand has 7 charges. While holding it, you can use an action to expend 1 of its charges to cause a small glob of viscous material to launch from the tip at one creature within 60 feet of you. Make a ranged attack roll against the target, with a bonus equal to your spellcasting modifier (or your Intelligence modifier, if you don't have a spellcasting modifier) plus your proficiency bonus. On a hit, the glob expands and dries on the target, which is restrained for 1 hour. After that time, the viscous material cracks and falls away.",
		"Applying a pint or more of alcohol to the restrained creature dissolves the glob instantly, as does the application of *oil of etherealness* or *universal solvent*. The glob also dissolves instantly if exposed to sunlight. No other nonmagical process can remove the viscous material until it deteriorates on its own.",
		"The wand regains 1d6+1 expended charges daily at midnight. If you expend the wand's last charge, roll a d20. On a 1, the wand melts into harmless slime and is destroyed.",
		"A *wand of viscid globs* is destroyed if exposed to sunlight for 1 hour without interruption.",
	],
	weight: 1,
	usages: 7,
	recovery: "Midnight",
	additional: "regains 1d6+1",
	action: [["action", ""]],
	weaponOptions: [{
		regExpSearch: /^(?=.*wand)(?=.*viscid)(?=.*globs).*$/i,
		name: "Wand of Viscid Globs",
		source: [["OotA", 223]],
		ability: 4,
		type: "Spell",
		damage: ["\u2015", "", "Restrained"],
		range: "60 ft",
		description: "1 charge; Lasts 1 hour or until exposed to sunlight, a pint of alcohol, oil of etherealness, or universal solvent",
		abilitytodamage: false,
		useSpellcastingAbility: true,
		selectNow: true,
	}],
}

// legacy_20151103_SCAG.js
// This file adds all the player-material from Sword Coast Adventure Guide to MPMB's Character Record Sheet

// Define the source
SourceList["S"] = {
	name: "Sword Coast Adventure Guide",
	abbreviation: "SCAG",
	group: "Legacy Campaign Sourcebooks",
	campaignSetting: "Forgotten Realms",
	url: "https://dnd.wizards.com/products/sword-coast-adventurers-guide",
	date: "2015/11/03",
	defaultExcluded: true,
};

// Races
RaceList["ghostwise halfling"] = {
	regExpSearch: /^(?=.*\b(halflings?|hobbits?)\b)(?=.*ghostwise).*$/i,
	name: "Ghostwise Halfling",
	sortname: "Halfling, Ghostwise",
	plural: "Ghostwise halflings",
	source: [["S", 110]],
	size: 4,
	speed: {
		walk: { spd: 25, enc: 15 },
	},
	languageProfs: ["Common", "Halfling"],
	savetxt: { adv_vs: ["Frightened"] },
	age: " reach adulthood at age 20 and live around 150 years",
	height: " average about 3 feet tall (2'7\" + 2d4\")",
	weight: " weigh around 40 lb (35 + 2d4 lb)",
	heightMetric: " average about 90 cm tall (80 + 5d4)",
	weightMetric: " weigh around 18 kg (16 + 5d4 / 10 kg)",
	trait: [
		"**Ghostwise Halfling**",
		"##\u25C6 Lucky##. When I roll a 1 on an attack roll, ability check, or saving throw, I can reroll the die and must use the new roll.",
		"##\u25C6 Halfling Nimbleness##. I can move through the space of any creature that is of a size larger than me.",
		"##\u25C6 Silent Speech##. I can speak telepathically to any one creature within 30 ft of me. It only understands me if we share a language.",
	],
};
RaceList["gray dwarf"] = {
	regExpSearch: /^((?=.*\bduergars?\b)|((?=.*\b(dwarfs?|dwarves|dwarfish|dwarvish|dwarven)\b)(?=.*\b(grey|gray|underdark)\b))).*$/i,
	name: "Duergar",
	sortname: "Dwarf, Gray (Duergar)",
	source: [["S", 104], ["MToF", 81]],
	plural: "Duergar",
	size: 3,
	speed: {
		walk: { spd: 25, enc: 25 },
	},
	languageProfs: ["Common", "Dwarvish", "Undercommon"],
	vision: [["Darkvision", 120], ["Sunlight Sensitivity", 0]],
	savetxt: { adv_vs: ["Charmed", "Illusions", "Paralyzed", "Poison"] },
	dmgres: ["Poison"],
	weaponProfs: [false, false, ["battleaxe", "handaxe", "warhammer", "light hammer"]],
	toolProfs: [["Smith, brewer, or mason tools", 1]],
	age: " are considered young until they are 50 and live about 350 years",
	height: " stand between 4 and 5 feet tall (3'8\" + 2d4\")",
	weight: " weigh around 150 lb (115 + 2d4 \xD7 2d6 lb)",
	heightMetric: " stand between 1,2 and 1,5 metres tall (110 + 5d4 cm)",
	weightMetric: " weigh around 70 kg (55 + 5d4 \xD7 4d6 / 10 kg)",
	trait: [
		"**Duergar**",
		"##\u25C6 Stonecunning##. Whenever I make an Int (History) check related to the origin of stonework, I am considered proficient in the skill and add double my proficiency bonus to the check.",
		"##\u25C6 Sunlight Sensitivity##. Disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight when I or what I am trying to attack/perceive is in direct sunlight.",
		"##\u25C6 Duergar Magic##. 3rd: *Enlarge/Reduce* to enlarge; 5th: *Invisibility*. If not in direct sunlight, I can cast both spells on myself once per Long Rest without material components, using Int.",
	],
	spellcastingAbility: 4,
	features: {
		"enlarge": {
			name: "Duergar Magic (level 3)",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Duergar Magic (level 3)",
				spells: ["enlarge/reduce"],
				selection: ["enlarge/reduce"],
				firstCol: "oncelr",
			}],
			spellChanges: {
				"enlarge/reduce": {
					name: "Enlarge",
					range: "Self",
					components: "V,S",
					compMaterial: "",
					description: "I'm enlarged, Adv on Str checks/saves and +1d4 on weapon dmg; Can't cast this in direct sunlight",
					changes: "Using Duergar Magic, I cast *Enlarge/Reduce* while I'm not in direct sunlight, but only to enlarge myself.",
				},
			},
		},
		"invisibility": {
			name: "Duergar Magic (level 5)",
			minlevel: 5,
			spellcastingBonus: [{
				name: "Duergar Magic (level 5)",
				spells: ["invisibility"],
				selection: ["invisibility"],
				firstCol: "oncelr",
			}],
			spellChanges: {
				"invisibility": {
					range: "Self",
					components: "V,S",
					compMaterial: "",
					description: "Me and my worn/carried Invisible until I attack or cast; Can't cast this spell in direct sunlight",
					changes: "Using Duergar Magic, I can cast *Invisibility* while I'm not in direct sunlight, but only on myself.",
				},
			},
		},
	},
};
// Racial variants
AddRacialVariant("half-elf", "aquatic", {
	regExpSearch: /aquatic/i,
	name: "Half-Aquatic Elf",
	source: [["S", 116]],
	plural: "Half-aquatic elves",
	speed: {
		walk: { spd: 30, enc: 20 },
		swim: { spd: 30, enc: 20 },
	},
	skillstxt: "",
	trait: [
		"**Half-Aquatic Elf**",
		"##\u25C6 Swimming Speed##. My aquatic heritage gives me a 30 ft Swim Speed.",
	],
});
AddRacialVariant("half-elf", "cantrip", {
	regExpSearch: /cantrip/i,
	name: "Half-High Elf",
	sortname: "Half-High Elf (Cantrip)",
	source: [["S", 116]],
	plural: "Half-high elves",
	skillstxt: "",
	trait: [
		"**Half-High Elf**",
		"##\u25C6 Cantrip##. I know one cantrip of my choice from the wizard spell list. Intelligence is my spellcasting ability for it.",
	],
	spellcastingAbility: 4,
	spellcastingBonus: [{
		name: "High Elf Cantrip",
		"class": "wizard",
		level: [0, 0],
		firstCol: "atwill",
	}],
});
AddRacialVariant("half-elf", "drow magic", {
	regExpSearch: /^(?=.*drow)(?=.*magic).*$/i,
	name: "Half-Drow",
	sortname: "Half-Drow (Drow Magic)",
	source: [["S", 116]],
	plural: "Half-drow",
	skillstxt: "",
	trait: [
		"**Half-drow**",
		"##\u25C6 Drow Magic##. I know the *Dancing Lights* cantrip.",
		"Once I reach 3rd level, I can cast the *Faerie Fire* spell once per Long Rest.",
		"Once I reach 5th level, I can also cast the *Darkness* spell once per Long Rest.",
		"Charisma is my spellcasting ability for these spells.",
	],
	spellcastingAbility: 6,
	spellcastingBonus: [{
		name: "Drow Magic (level 1)",
		spells: ["dancing lights"],
		selection: ["dancing lights"],
		firstCol: "atwill",
	}],
	features: {
		"faerie fire": {
			name: "Drow Magic (level 3)",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Drow Magic (level 3)",
				spells: ["faerie fire"],
				selection: ["faerie fire"],
				firstCol: "oncelr",
			}],
		},
		"darkness": {
			name: "Drow Magic (level 5)",
			minlevel: 5,
			spellcastingBonus: [{
				name: "Drow Magic (level 5)",
				spells: ["darkness"],
				selection: ["darkness"],
				firstCol: "oncelr",
			}],
		},
	},
});
AddRacialVariant("half-elf", "elf weapon training", {
	sortname: "Half-Elf (Elf Weapon Training)",
	regExpSearch: /^(?=.*\b(elf|elven)\b)(?=.*weapon)(?=.*training).*$/i,
	source: [["S", 116]],
	skillstxt: "",
	trait: "**Half-Elf**",
	weaponProfs: [false, false, ["longsword", "shortsword", "longbow", "shortbow"]],
});
AddRacialVariant("half-elf", "fleet of foot", {
	regExpSearch: /^(?=.*fleet)(?=.*\b(foot|feet)\b).*$/i,
	name: "Half-Wood Elf",
	sortname: "Half-Wood Elf (Fleet of Foot)",
	source: [["S", 116]],
	plural: "Half-wood elves",
	speed: {
		walk: { spd: 35, enc: 25 },
	},
	skillstxt: "",
	trait: "**Half-Wood Elf**",
});
AddRacialVariant("half-elf", "mask of the wild", {
	regExpSearch: /^(?=.*\bmasks?\b)(?=.*\bwilds?\b).*$/i,
	name: "Half-Wood Elf",
	sortname: "Half-Wood Elf (Mask of the Wild)",
	source: [["S", 116]],
	plural: "Half-wood elves",
	skillstxt: "",
	trait: [
		"**Half-Wood Elf**",
		"##\u25C6 Mask of the Wild##. I can attempt to hide even when I am only Lightly Obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.",
	],
});
AddRacialVariant("tiefling", "winged", {
	regExpSearch: /wing/i,
	name: "Winged Tiefling",
	source: [["S", 118]],
	plural: "Winged tieflings",
	speed: {
		walk: { spd: 30, enc: 20 },
		fly: { spd: 30, enc: 0 },
	},
	trait: [
		"**Winged Tiefling**",
		"##\u25C6 Wings##. I have bat-like wings sprouting from my shoulder blades that give me 30 ft Fly Speed when I'm not wearing Heavy Armor.",
	].concat(RaceList.tiefling.trait),
});

// Subclasses
AddSubClass("barbarian", "battlerager", {
	regExpSearch: /(battlerager|kuldjargh)/i,
	subname: "Path of the Battlerager",
	subnameShort: "Battlerager",
	fullname: "Battlerager",
	source: [["S", 121]],
	abilitySave: 6,
	features: {
		"subclassfeature3": {
			name: "Battlerager Armor",
			source: [["S", 121]],
			minlevel: 3,
			description: desc([
				"I gain proficiency with Spiked Armor both as an armor and as a weapon.",
				"As a Bonus Action while in Rage, I can attack once with my armor spikes. With my Spiked Armor I do 3 Piercing damage when I use my Attack action to grapple.",
			]),
			action: [["bonus action", "Armor Spikes attack (in rage)"]],
			armorOptions: [{
				regExpSearch: /^(?!.*(dragon|draconic|beast))(?=.*spike(d|s))(?=.*armou?r).*$/i,
				name: "Spiked armor",
				source: [["S", 121]],
				type: "medium",
				ac: 14,
				stealthdis: true,
				weight: 45,
			}],
			weaponOptions: [{
				regExpSearch: /^(?=.*armou?r)(?=.*spike).*$/i,
				name: "Armor spikes",
				source: [["S", 121]],
				ability: 1,
				type: "armor spikes",
				damage: [1, 4, "piercing"],
				range: "Melee",
				description: "Does 3 Piercing damage when grappling during my Attack action",
				abilitytodamage: true,
				selectNow: true,
			}],
			weaponProfs: [false, false, ["armor spikes"]],
			eval: function () {
				AddString("Proficiency Armor Other Description", "Spiked Armor", ", ");
			},
			removeeval: function () {
				RemoveString("Proficiency Armor Other Description", "Spiked Armor");
			},
		},
		"subclassfeature6": {
			name: "Reckless Abandon",
			source: [["S", 121]],
			minlevel: 6,
			description: desc("If I use Reckless Attack during rage, I also gain Temporary HP equal to my Con mod."),
		},
		"subclassfeature10": {
			name: "Battlerager Charge",
			source: [["S", 121]],
			minlevel: 10,
			description: desc("As a Bonus Action while raging, I can use the Dash action."),
			action: [["bonus action", " (in rage)"]],
		},
		"subclassfeature14": {
			name: "Spiked Retribution",
			source: [["S", 121]],
			minlevel: 14,
			description: desc("When I'm hit in melee by an attacker within 5 ft, it takes 3 Piercing damage. This only works while I'm wearing spiked armor, in rage, and I'm not Incapacitated."),
		},
	},
});
AddSubClass("monk", "way of the long death", {
	regExpSearch: /^(?=.*\blong)(?=.*\b(death|dead))((?=.*(monk|monastic))|(((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior)))).*$/i,
	subname: "Way of the Long Death",
	subnameShort: "Long Death",
	source: [["S", 130]],
	features: {
		"subclassfeature3": {
			name: "Touch of Death",
			source: [["S", 130]],
			minlevel: 3,
			description: desc("If I reduce someone within 5 ft to 0 HP, I gain Wis mod + monk level Temporary HP."),
		},
		"subclassfeature6": {
			name: "Hour of Reaping",
			source: [["S", 130]],
			minlevel: 6,
			description: desc("As an action, all creatures within 30 feet of me must make a Wisdom saving throw or be Frightened until the end of my next turn."),
			action: [["action", ""]],
		},
		"subclassfeature11": {
			name: "Mastery of Death",
			source: [["S", 131]],
			minlevel: 11,
			additional: "1 ki point",
			description: desc("When I'm reduced to 0 HP, I can expend 1 ki point to have 1 HP instead."),
			"touch of the long death": {
				name: "Touch of the Long Death",
				extraname: "Way of the Long Death 17",
				source: [["S", 131]],
				additional: "1-10 ki points",
				description: desc("As an action, a target within 5 ft takes 2d10 Necrotic damage per ki point I spent. It can make a Constitution saving throw to halve the damage."),
				action: [["action", ""]],
			},
			autoSelectExtrachoices: [{
				extrachoice: "touch of the long death",
				minlevel: 17,
			}],
		},
	},
});
AddSubClass("monk", "way of the sun soul", {
	regExpSearch: /^(?=.*\bsun)(?=.*\b(soul|spirit))((?=.*(warrior|monk|monastic))|(((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior)))).*$/i,
	subname: "Way of the Sun Soul",
	subnameShort: "Sun Soul",
	source: [["S", 131], ["X", 35]],
	features: {
		"subclassfeature3": {
			name: "Radiant Sun Bolt",
			source: [["S", 131], ["X", 35]],
			minlevel: 3,
			additional: "1 ki point for 2 extra attacks",
			description: desc("I gain a ranged spell attack that I can use as an attack in the Attack action. If I do this and spend 1 ki point, I can make 2 of these attacks as a Bonus Action."),
			action: [["bonus action", " (2\xD7 with Attack action)"]],
			weaponOptions: [{
				regExpSearch: /^(?=.*radiant)(?=.*(sun|light))(?=.*bolt).*$/i,
				name: "Radiant Sun Bolt",
				source: [["S", 131], ["X", 35]],
				ability: 2,
				type: "Spell",
				damage: [1, 4, "radiant"],
				range: "30 ft",
				description: "If used in an Attack action, spend 1 ki point to use it twice as a Bonus Action",
				monkweapon: true,
				abilitytodamage: true,
				selectNow: true,
			}],
			"searing arc strike": {
				name: "Searing Arc Strike",
				extraname: "Way of the Sun Soul 6",
				source: [["S", 131], ["X", 35]],
				description: desc("After taking the Attack action, I can cast *Burning Hands* as a Bonus Action. For every additional ki point I spend, *Burning Hands* is cast at 1 higher spell level. The maximum total ki points I can spend for this (including the 2) is half my Monk level."),
				additional: levels.map(function (n) {
					if (n < 3) return "";
					var xtrKi = Math.max(0,Math.floor(n / 2) - 2);
					return "2 ki points + max " + xtrKi + " ki point" + (xtrKi == 1 ? "" : "s");
				}),
				action: [["bonus action", " (after Attack action)"]],
				spellcastingBonus: [{
					name: "Searing Arc Strike",
					spells: ["burning hands"],
					selection: ["burning hands"],
					firstCol: 2,
				}],
				spellFirstColTitle: "Ki",
				spellChanges: {
					"burning hands": {
						time: "Bns",
						description: "3d6+1d6/extra Ki Fire dmg; save halves; unattended flammable objects ignite (ki max 1/2 monk lvl)",
						changes: "After I use the Attack action, I can cast *Burning Hands* as a Bonus Action by spending 2 ki points. I can even spend additional ki points to increase its spell level. The total amount of ki points I can spend on it is half my monk level.",
					},
				},
			},
			autoSelectExtrachoices: [{
				extrachoice: "searing arc strike",
				minlevel: 6,
			}],
		},
		"subclassfeature11": {
			name: "Searing Sunburst",
			source: [["S", 131], ["X", 35]],
			minlevel: 11,
			description: desc("As an action, anyone in a 20-ft radius light on a point within 150 ft makes a Con save. If failed and not behind opaque total cover, it takes 2d6 (+ 2d6/ki point) Radiant damage."),
			action: [["action", ""]],
			additional: "0 ki points + max 3 ki points",
			weaponOptions: [{
				regExpSearch: /^(?=.*searing)(?=.*sunburst).*$/i,
				name: "Searing Sunburst",
				source: [["S", 131], ["X", 35]],
				ability: 5,
				type: "Spell",
				damage: [2, 6, "radiant"],
				range: "150 ft",
				description: "All in 20-ft radius; Con save - success no damage; +2d6 damage per ki point (max 3 ki)",
				abilitytodamage: false,
				dc: true,
				useSpellMod: "monk",
				selectNow: true,
			}],
		},
		"subclassfeature17": {
			name: "Sun Shield",
			source: [["S", 131], ["X", 35]],
			minlevel: 17,
			description: desc("As a Reaction, when I'm hit by a melee attack, I can deal 5 + Wis mod Radiant damage. I can only do this while my light aura is on, which I can turn on/off as a Bonus Action."),
			action: [["bonus action", " (start/stop)"], ["reaction", " (hit in melee)"]],
			additional: "30-ft rad Bright + 30-ft Dim Light",
		},
	},
});
AddSubClass("paladin", "oath of the crown", {
	regExpSearch: /^(?=.*(crown|king|country))(((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|warrior|warlord|trooper))))).*$/i,
	subname: "Oath of the Crown",
	subnameShort: "Crown",
	source: [["S", 133]],
	features: {
		"subclassfeature3": {
			name: "Champion Challenge",
			source: [["S", 133]],
			minlevel: 3,
			additional: "1 Channel Divinity",
			description: desc("As a Bonus Action, I can have any chosen creatures within 30 ft of me make a Wis save or be unable to willingly move more than 30 ft away from me. The effect ends if I'm Incapacitated, die, or it is moved more than 30 ft away from me."),
			action: [["bonus action", ""]], // changed to Bonus Action per errata (v1.0, 2017)
			spellcastingExtra: ["command", "compelled duel", "warding bond", "zone of truth", "aura of vitality", "spirit guardians", "banishment", "guardian of faith", "circle of power", "geas"],
		},
		"subclassfeature3.1": {
			name: "Turn the Tide",
			source: [["S", 133]],
			minlevel: 3,
			additional: "1 Channel Divinity",
			description: desc("As a Bonus Action, any chosen creatures within 30 ft that can hear me each regain 1d6 + my Charisma modifier HP, up to half of its total HP."),
			action: [["bonus action", ""]],
		},
		"subclassfeature7": {
			name: "Divine Allegiance",
			source: [["S", 133]],
			minlevel: 7,
			description: desc("When a creature within 5 feet of me takes damage, I can substitute my HP for it. The creature takes no damage and I take all of it. This damage can't be prevented."),
			action: [["reaction", ""]],
		},
		"subclassfeature15": {
			name: "Unyielding Spirit",
			source: [["S", 133]],
			minlevel: 15,
			description: desc("I have Advantage on saving throws against effects that paralyze or stun."),
			savetxt: { adv_vs: ["Paralyzed", "Stunned"] },
		},
		"subclassfeature20": {
			name: "Exalted Champion",
			source: [["S", 133]],
			minlevel: 20,
			description: desc([
				"As an action, I gain the following benefits for 1 hour or until I'm Incapacitated:",
				" \u2022 " + "Resistance to Bludgeoning, Piercing, and Slashing damage from nonmagical weapons.",
				" \u2022 " + "My allies within 30 ft of me and I have Advantage on Wisdom and Death saves.",
			]),
			recovery: "Long Rest",
			usages: 1,
			action: [["action", ""]],
		},
	},
});
AddSubClass("rogue", "mastermind", {
	regExpSearch: /^(?!.*(barbarian|bard|cleric|druid|fighter|monk|paladin|ranger|sorcerer|warlock|wizard))(?=.*(mastermind|strategist)).*$/i,
	subname: "Mastermind",
	fullname: "Mastermind",
	source: [["S", 135], ["X", 46]],
	features: {
		"subclassfeature3": {
			name: "Master of Intrigue",
			source: [["S", 135], ["X", 46]],
			minlevel: 3,
			description: desc("I gain proficiency with disguise kits, forgery kits, one gaming set, and two languages. I can mimic speech patterns and accents if I've heard them for at least 1 minute."),
			languageProfs: [2],
			toolProfs: ["Disguise kit", "Forgery kit", ["Gaming set", 1]],
		},
		"subclassfeature3.1": {
			name: "Master of Tactics",
			source: [["S", 135], ["X", 46]],
			minlevel: 3,
			description: desc("I can use the Help action as a Bonus Action. This even works if the ally attacks a target within 30 ft of me that can see or hear me."),
			action: [["bonus action", ""]],
		},
		"subclassfeature9": {
			name: "Insightful Manipulator",
			source: [["S", 135], ["X", 46]],
			minlevel: 9,
			description: desc([
				"By spending 1 minute observing/interacting outside of combat I can learn capabilities. The DM tells me if the target is my equal, superior, or inferior in regard to two things:",
				" - Intelligence score    - Wisdom score    - Charisma score    - Class levels (if any)",
			]),
		},
		"subclassfeature13": {
			name: "Misdirection",
			source: [["S", 135], ["X", 46]],
			minlevel: 13,
			description: desc("As a Reaction, I can redirect an attack meant for me to a creature within 5 ft of me. This only works if the creature is providing me with cover against the attack."),
			action: [["reaction", ""]],
		},
		"subclassfeature17": {
			name: "Soul of Deceit",
			source: [["S", 135], ["X", 46]],
			minlevel: 17,
			description: desc("My thoughts can't be read by telepathy or similar means and I can project false thoughts. For that, I must pass a Cha (Deception) vs Wis (Insight) check to fool the mind reader. Magic always determines I'm truthful and I can't be magically compelled to tell the truth."),
		},
	},
});
AddSubClass("rogue", "swashbuckler", {
	regExpSearch: /^(?!.*(barbarian|bard|cleric|druid|fighter|monk|paladin|ranger|sorcerer|warlock|wizard))(?=.*swashbuckl).*$/i,
	subname: "Swashbuckler",
	fullname: "Swashbuckler",
	source: [["S", 135], ["X", 47]],
	features: {
		"subclassfeature3": {
			name: "Fancy Footwork",
			source: [["S", 135], ["X", 47]],
			minlevel: 3,
			description: desc("Enemies I make a melee attack against in my turn can't use opportunity attacks on me. This lasts until the end of my current turn."),
		},
		"subclassfeature3.1": {
			name: "Rakish Audacity",
			source: [["S", 136], ["X", 47]],
			minlevel: 3,
			description: desc("I don't need Advantage to sneak attack if my target is the only one within 5 ft of me. I still can't sneak attack if I have Disadv. I add my Charisma modifier to initiative rolls."),
			addMod: { type: "skill", field: "Init", mod: "max(Cha|0)", text: "I can add my Charisma modifier to initiative rolls." },
		},
		"subclassfeature9": {
			name: "Panache",
			source: [["S", 136], ["X", 47]],
			minlevel: 9,
			description: desc([
				"As an action, I can beguile a creature that hears and understands me, for 1 minute. It must succeed on a Wis (Insight) check opposed by my Cha (Persuasion) or be affected as:",
				"\u2022 A hostile target gains Disadv on attacks and can't do opportunity attacks vs not-me. This effect ends if an ally attacks or casts a spell vs it, or if it and I are 60 ft apart.",
				"\u2022 Targets that are not hostile are Charmed and regard me as a friendly acquaintance. This effect ends if me or an ally do anything harmful to it.",
			]),
			action: [["action", ""]],
		},
		"subclassfeature13": {
			name: "Elegant Maneuver",
			source: [["S", 136], ["X", 47]],
			minlevel: 13,
			description: desc("As a Bonus Action, I can gain Adv on my next Dex (Acrobatics) or Str (Athletics) check."),
			action: [["bonus action", ""]],
		},
		"subclassfeature17": {
			name: "Master Duelist",
			source: [["S", 136], ["X", 47]],
			minlevel: 17,
			description: desc("Once per Short Rest, when I miss with an attack roll, I can roll again with Advantage."),
			recovery: "Short Rest",
			usages: 1,
		},
	},
});
AddSubClass("sorcerer", "storm sorcery", {
	regExpSearch: /^(?=.*(sorcerer|witch))((?=.*(storm|tempest|hurricane))|((?=.*air)(?=.*element))).*$/i,
	subname: "Storm Sorcery",
	fullname: "Storm Sorcerer",
	source: [["S", 137], ["X", 51]],
	features: {
		"subclassfeature3.0": {
			name: "Wind Speaker",
			source: [["S", 137], ["X", 52]],
			minlevel: 3,
			description: desc("I can speak, read, and write Primordial (and its dialects Aquan, Auran, Ignan, Terran)."),
			languageProfs: ["Primordial"],
		},
		"subclassfeature3.1": {
			name: "Tempestuous Magic",
			source: [["S", 137], ["X", 52]],
			minlevel: 3,
			description: desc("As a Bonus Action, before or after casting a 1st-level or higher spell, I can fly 10 ft. This movement doesn't provoke opportunity attacks as whirling gusts of air surround me."),
			action: [["bonus action", " (with casting)"]],
		},
		"subclassfeature6": {
			name: "Heart of the Storm",
			source: [["S", 137], ["X", 52]],
			minlevel: 6,
			description: desc("I have Resistance to Lightning and Thunder damage. When I start casting a 1st-level or higher spell that deals Lightning or Thunder damage, I deal Lightning or Thunder damage to creatures of my choice that I can see within 10 ft."),
			additional: levels.map(function (n) { return n < 6 ? "" : Math.floor(n / 2) + " damage"; }),
			dmgres: ["Lightning", "Thunder"],
		},
		"subclassfeature6.1": {
			name: "Storm Guide",
			source: [["S", 137], ["X", 52]],
			minlevel: 6,
			description: desc("As an action, I can stop rain around me in a 20-ft radius, and as a Bonus Action have it resume. As a Bonus Action, I can choose the direction of wind around me in a 100-ft radius. This lasts until the end of my next turn and doesn't alter the wind's speed."),
			action: [["bonus action", ""]],
		},
		"subclassfeature14": {
			name: "Storm's Fury",
			source: [["S", 137], ["X", 52]],
			minlevel: 14,
			description: desc("As a Reaction when hit by a melee attack, I can deal Lightning damage to the attacker. The attacker must also make a Strength save or be pushed up to 20 ft away from me."),
			action: [["reaction", ""]],
			additional: levels.map(function (n) { return n < 14 ? "" : n + " Lightning damage"; }),
		},
		"subclassfeature18": {
			name: "Wind Soul",
			source: [["S", 137], ["X", 52]],
			minlevel: 18,
			description: desc([
				"I have Immunity to Lightning and Thunder damage and gain magical 60 ft Fly Speed.",
				"As an action, I reduce my Fly Speed to 30 ft and give allies 30 ft Fly Speed for 1 hour.",
				"I can do this once per Short Rest for up to 3 + my Charisma modifier allies within 30 ft.",
			]),
			action: [["action", ""]],
			savetxt: { immune: ["Lightning", "Thunder"] },
			speed: { fly: { spd: "fixed 60", enc: "fixed 60" } },
			usages: 1,
			recovery: "Short Rest",
		},
	},
});
AddSubClass("warlock", "the undying", {
	regExpSearch: /^(?!.*light)(?=.*warlock)(?=.*(immortal|undying|neverending|unending)).*$/i,
	subname: "the Undying",
	source: [["S", 139]],
	features: {
		"subclassfeature3.0": {
			name: "Among the Dead",
			source: [["S", 139]],
			minlevel: 3,
			spellcastingExtra: ["false life", "ray of sickness", "blindness/deafness", "silence", "feign death", "speak with dead", "aura of life", "death ward", "contagion", "legend lore"],
			description: desc("I learn the *Spare the Dying* cantrip and gain Advantage on saving throws vs diseases. If an Undead targets me directly with an attack or spell, it must make a Wisdom save. On a fail, it must choose a new target or forfeit its attack or harmful spell. On a success or if I attack or cast a harmful spell on it, it is Immune for 24 hours."),
			savetxt: { adv_vs: ["disease"] },
			spellcastingBonus: [{
				name: "Among the Dead",
				spells: ["spare the dying"],
				selection: ["spare the dying"],
			}],
		},
		"subclassfeature6": {
			name: "Defy Death",
			source: [["S", 140]],
			minlevel: 6,
			description: desc("I regain 1d8 + my Constitution modifier in HP when I succeed on a Death saving throw. I also regain this amount whenever I use *Spare the Dying* to stabilize a creature."),
			recovery: "Long Rest",
			usages: 1,
		},
		"subclassfeature10": {
			name: "Undying Nature",
			source: [["S", 140]],
			minlevel: 10,
			description: desc("I can hold my breath indefinitely and I don't require food, water, or sleep (I still need rest). I age more slowly, only 1 year for every 10 years that pass, and I can't be magically aged."),
		},
		"subclassfeature14": {
			name: "Indestructible Life",
			source: [["S", 140]],
			minlevel: 14,
			description: desc("As a Bonus Action, I can regain HP and reattach severed body parts."),
			action: [["bonus action", ""]],
			recovery: "Short Rest",
			usages: 1,
			additional: levels.map(function (n) { return n < 14 ? "" : "1d8 + " + n + " HP"; }),
		},
	},
});

// Backgrounds
BackgroundList["city watch"] = {
	regExpSearch: /^(?=.*city)(?=.*(watch|guard)).*$/i,
	name: "City Watch",
	source: [["S", 145]],
	skills: ["Athletics", "Insight"],
	gold: 10,
	equipright: [
		["Uniform of my unit", "", 3],
		["Insignia of rank", "", ""],
		["Horn", "", 2],
		["Manacles", "", 6],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Watcher's Eye",
	languageProfs: [2],
	lifestyle: "modest",
};
BackgroundList["clan crafter"] = {
	regExpSearch: /^(?=.*clan)(?=.*(crafter|smith|builder|miner)).*$/i,
	name: "Clan Crafter",
	source: [["S", 145]],
	skills: ["History", "Insight"],
	gold: 5,
	equipleft: [
		["Set of artisan's tools", "", ""],
		["Maker's mark chisel", "", 0.5],
	],
	equipright: [
		["Traveler's clothes", "", 4],
		["Belt pouch (with coins and 10 gp gem)", "", 1],
	],
	feature: "Respect of the Stout Folk",
	toolProfs: [["Artisan's tools", 1]],
	languageProfs: ["Dwarvish"],
	lifestyle: "comfortable",
};
BackgroundList["cloistered scholar"] = {
	regExpSearch: /^(?=.*cloistered)(?=.*scholar).*$/i,
	name: "Cloistered Scholar",
	source: [["S", 146]],
	skills: ["History"],
	skillstxt: "History and choose one from Arcana, Nature, and Religion",
	gold: 10,
	equipleft: [
		["Ink, 1 ounce bottle of", 1, ""],
		["Quill", "", ""],
		["Parchment, sheets of", 1, ""],
		["Small penknife", "", 0.5],
		["Borrowed book", "", 5],
	],
	equipright: [
		["Scholar's robes", "", 3],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Library Access",
	extra: ["Name your Library"],
	languageProfs: [2],
	lifestyle: "modest",
};
BackgroundList["courtier"] = {
	regExpSearch: /courtier/i,
	name: "Courtier",
	source: [["S", 146]],
	skills: ["Insight", "Persuasion"],
	gold: 5,
	equipright: [
		["Fine clothes", "", 3],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Court Functionary",
	languageProfs: [2],
	lifestyle: "comfortable",
};
BackgroundList["faction agent"] = {
	regExpSearch: /^(?=.*agent)(?=.*(faction|harper|order of the gauntlet|emerald enclave|lord.?s alliance|zhentarim)).*$/i,
	name: "Faction Agent",
	source: [["S", 147]],
	skills: ["Insight"],
	skillstxt: "Insight and choose one Intelligence, Wisdom, or Charisma skill",
	gold: 15,
	equipleft: [
		["Copy of seminal faction's text", "", ""],
	],
	equipright: [
		["Common clothes", "", 3],
		["Badge or emblem of faction", "", ""],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Safe Haven",
	extra: [
		"Select a Faction",
		"The Harpers",
		"The Order of the Gauntlet",
		"The Emerald Enclave",
		"The Lord's Alliance",
		"The Zhentarim",
	],
	languageProfs: [2],
	lifestyle: "modest",
};
BackgroundList["far traveler"] = {
	regExpSearch: /^(?=.*far)(?=.*traveler).*$/i,
	name: "Far Traveler",
	source: [["S", 148]],
	skills: ["Insight", "Perception"],
	gold: 5,
	equipleft: [
		["Gaming set or musical instrument", "", ""],
		["Poorly wrought maps", "", ""],
	],
	equipright: [
		["Traveler's clothes", "", 4],
		["Piece of jewelry worth 10 gp", "", ""],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "All Eyes on You",
	trait: [
		"I have different assumptions from those around me concerning personal space, blithely invading others' space in innocence, or reacting to ignorant invasion of my own.",
		"I have my own ideas about what is and is not food, and I find the eating habits of those around me fascinating, confusing, or revolting.",
		"I have a strong code of honor or sense of propriety that others don't comprehend.",
		"I express affection or contempt in ways that are unfamiliar to others.",
		"I honor my deities through practices that are foreign to this land.",
		"I begin or end my day with small traditional rituals that are unfamiliar to those around me.",
	],
	ideal: [
		["Open",
			"Open: I have much to learn from the kindly folk I meet along my way. (Good)",
		],
		["Reserved",
			"Reserved: As someone new to these strange lands, I am cautious and respectful in my dealings. (Lawful)",
		],
		["Adventure",
			"Adventure: I'm far from home, and everything is strange and wonderful! (Chaotic)",
		],
		["Cunning",
			"Cunning: Though I may not know their ways, neither do they know mine, which can be to my advantage. (Evil)",
		],
		["Inquisitive",
			"Inquisitive: Everything is new, but I have a thirst to learn. (Neutral)",
		],
		["Suspicious",
			"Suspicious: I must be careful, for I have no way of telling friend from foe here. (Any)",
		],
	],
	bond: [
		"So long as I have this token from my homeland, I can face any adversity in this strange land.",
		"The gods of my people are a comfort to me so far from home.",
		"I hold no greater cause than my service to my people.",
		"My freedom is my most precious possession. I'll never let anyone take it from me again.",
		"I'm fascinated by the beauty and wonder of this new land.",
		"Though I had no choice, I lament having to leave my loved one(s) behind. I hope to see them again one day.",
	],
	flaw: [
		"I am secretly (or not so secretly) convinced of the superiority of my own culture over that of this foreign land.",
		"I pretend not to understand the local language in order to avoid interactions I would rather not have.",
		"I have a weakness for the new intoxicants and other pleasures of this land.",
		"I don't take kindly to some of the actions and motivations of the people of this land, because these folk are different from me.",
		"I consider the adherents of other gods to be deluded innocents at best, or ignorant fools at worst.",
		"I have a weakness for the exotic beauty of the people of these lands.",
	],
	extra: [
		"Select Why You Are Here",
		"Emissary",
		"Exile",
		"Fugitive",
		"Pilgrim",
		"Sightseer",
		"Wanderer",
	],
	toolProfs: [["Gaming set or musical instrument", 1]],
	languageProfs: [1],
	lifestyle: "modest",
};
BackgroundList["inheritor"] = {
	regExpSearch: /inheritor/i,
	name: "Inheritor",
	source: [["S", 150]],
	skills: ["Survival"],
	skillstxt: "Survival and choose one from Arcana, History, and Religion",
	gold: 15,
	equipleft: [
		["Gaming set or musical instrument", "", ""],
	],
	equipright: [
		["Traveler's clothes", "", 4],
		["The inheritance", "", ""],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Inheritance",
	extra: [
		"Select an Inheritance",
		"Document such as a map, letter, or journal",
		"A trinket",
		"Article of clothing",
		"Piece of jewelry",
		"Arcane book or formulary",
		"Written story, song, poem, or secret",
		"Tattoo or other body marking",
	],
	toolProfs: [["Gaming set or musical instrument", 1]],
	languageProfs: [1],
	lifestyle: "wealthy",
};
BackgroundList["investigator"] = {
	regExpSearch: /investigator/i,
	name: "Investigator",
	source: [["S", 145]],
	skills: ["Insight", "Investigation"],
	gold: 10,
	equipright: [
		["Uniform", "", 3],
		["Insignia of rank", "", ""],
		["Horn", "", 2],
		["Manacles", "", 6],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Watcher's Eye",
	languageProfs: [2],
	lifestyle: "modest",
};
BackgroundList["knight of the order"] = {
	regExpSearch: /^(?=.*knight)(?=.*order).*$/i,
	name: "Knight of the Order",
	source: [["S", 151]],
	skills: ["Persuasion"],
	skillstxt: "Persuasion and choose one from Arcana, History, Nature, and Religion",
	gold: 10,
	equipright: [
		["Traveler's clothes", "", 4],
		["Signet, banner, or seal of rank", "", ""],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Knightly Regard",
	extra: ["Name your Knightly Order"],
	toolProfs: [["Gaming set or musical instrument", 1]],
	languageProfs: [1],
	lifestyle: "comfortable",
};
BackgroundList["mercenary veteran"] = {
	regExpSearch: /^(?=.*mercenary)(?=.*(veteran|soldier)).*$/i,
	name: "Mercenary Veteran",
	source: [["S", 152]],
	skills: ["Athletics", "Persuasion"],
	gold: 10,
	equipright: [
		["Uniform of my company", "", 4],
		["Insignia of rank", "", ""],
		["Gaming set", "", ""],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Mercenary Life",
	extra: ["Name your Mercenary Company"],
	toolProfs: [["Gaming set", 1], "Vehicles (land)"],
	lifestyle: "modest",
};
BackgroundList["urban bounty hunter"] = {
	regExpSearch: /^(?=.*urban)(?=.*bounty)(?=.*hunter).*$/i,
	name: "Urban Bounty Hunter",
	source: [["S", 153]],
	skills: "",
	skillstxt: "Choose two from Deception, Insight, Persuasion, and Stealth",
	gold: 20,
	equipright: [
		["Appropriate Clothes", "", 3],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Ear to the Ground",
	toolProfs: [["Gaming set, instrument, or thieves' tools", 2]],
	lifestyle: "poor",
};
BackgroundList["uthgardt tribe member"] = {
	regExpSearch: /^(?=.*(uthgardt|barbarian|nomad|clan))(?=.*tribe)(?=.*member).*$/i,
	name: "Uthgardt Tribe Member",
	source: [["S", 153]],
	skills: ["Athletics", "Survival"],
	gold: 10,
	equipright: [
		["Traveler's clothes", "", 4],
		["Hunting trap", "", 25],
		["Totemic token or tattoos of tribal totem", "", ""],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Uthgardt Heritage",
	toolProfs: [["Artisan's tools or musical instrument", 1]],
	languageProfs: [1],
	lifestyle: "poor",
};
BackgroundList["waterdhavian noble"] = {
	regExpSearch: /^(?=.*(waterdhavian|waterdeep))(?=.*noble).*$/i,
	name: "Waterdhavian Noble",
	source: [["S", 154]],
	skills: ["History", "Persuasion"],
	gold: 20,
	equipleft: [
		["Scroll of pedigree", "", ""],
		["Skin of fine zzar or wine", "", 5], // weight based on waterskin
	],
	equipright: [
		["Fine clothes", "", 6],
		["Signet ring or brooch", "", ""],
		["Purse (with coins)", "", 1],
	],
	feature: "Kept in Style",
	toolProfs: [["Gaming set or musical instrument", 1]],
	languageProfs: [1],
	lifestyle: "wealthy",
};

// Background features
BackgroundFeatureList["court functionary"] = {
	description: "My knowledge of how bureaucracies function lets me gain access to the records and inner workings of any noble court or government I encounter. I know or can easily acquire the knowledge who the movers and shakers are, whom to go to for the favors I seek, and what the current intrigues of interest in the group are.",
	source: [["S", 147]],
};
BackgroundFeatureList["all eyes on you"] = {
	description: "My accent, mannerisms, figures of speech all mark me as foreign. Curious glances are directed my way wherever I go. A nuisance, but I also gain the friendly interest of the curious. I can parley this attention into access I might not otherwise have, for me and my companions. Nobles, scholars, merchants, and guilds, might be among the interested.",
	source: [["S", 149]],
};
BackgroundFeatureList["ear to the ground"] = {
	description: "I am in frequent contact with people in my chosen segment of society. These people might be associated with the criminal underworld, the rough-and-tumble folk of the streets, or members of high society. This connection comes in the form of a contact in any city I visit, a person who provides information about the people and places of the local area.",
	source: [["S", 153]],
};
BackgroundFeatureList["inheritance"] = {
	description: "The item I inherited has a special significance, history, power, and/or important value. When I begin my adventuring career, I can decide whether to tell my companions about it right away. Rather than attracting attention to myself, I could decide to keep it a secret until I learn more about what it means to me and what it can do for me.",
	source: [["S", 150]],
};
BackgroundFeatureList["kept in style"] = {
	description: "While I am in Waterdeep or elsewhere in the North my house sees to my everyday needs. My name and signet are sufficient to cover most of my expenses; the inns, taverns, and festhalls I frequent are glad to record my debt and send an accounting to my family's estate. This advantage enables me to take 2 gp of my daily lifestyle costs down to 0 gp.",
	source: [["S", 154]],
};
BackgroundFeatureList["knightly regard"] = {
	description: "I receive shelter and succor from members of my knightly order and its sympathizers. Religious knightly orders get aid from temples and communities of my deity. Civic order knights get help from the community they serve. Philosophical order knights can find help from those they have aided in pursuit of their ideals, and those who share those ideals.",
	source: [["S", 151]],
};
BackgroundFeatureList["library access"] = {
	description: "I have free access to most of the library I work at, though it might have repositories of lore that are too valuable, magical, or secret to permit anyone immediate access. I have a working knowledge of my cloister's personnel and bureaucracy, and I know how to navigate those connections. I am likely to gain preferential treatment at other libraries.",
	source: [["S", 146]],
};
BackgroundFeatureList["mercenary life"] = {
	description: "I know the mercenary life well. I am able to identify mercenary company emblems, and I know a little about any such company, including the leaders, reputation, and who hired them recently. I can find the locales where mercenaries abide anywhere, as long as I speak the language. My mercenary work between adventures affords me a comfortable lifestyle.",
	source: [["S", 152]],
};
BackgroundFeatureList["respect of the stout folk"] = {
	description: "No one esteems clan crafters quite so highly as dwarves do. I always have free room and board in any place where shield dwarves or gold dwarves dwell, and the individuals in such a settlement might vie among themselves to determine who can offer me (and possibly my compatriots) the finest accommodations and assistance.",
	source: [["S", 145]],
};
BackgroundFeatureList["safe haven"] = {
	description: "As a faction agent, I have access to a secret network of support and operatives who can provide assistance on my adventures. I know secret signs and passwords to identify such operatives, who can provide me with access to a hidden safe house, free room and board, or assistance in finding information. These agents never risk their lives or identity for me.",
	source: [["S", 147]],
};
BackgroundFeatureList["uthgardt heritage"] = {
	description: "I have an excellent knowledge of my tribe's territory, and surrounding terrain and natural resources. I am familiar enough with any wilderness area that I can find twice as much food and water as one normally would. I can call upon the hospitality of my people, and those allied, often including members of druid circles, nomadic elves, and priesthoods.",
	source: [["S", 154]],
};
BackgroundFeatureList["watcher's eye"] = {
	description: "My experience in enforcing the law, and dealing with lawbreakers, gives me a feel for local laws and criminals. I can easily find the local outpost of the watch, guards or a similar organization, and just as easily pick out the dens of criminal activity in a community. I am far more likely to be welcome in the former locations rather than the latter, however.",
	source: [["S", 145]],
};

// Spells
SpellsList["booming blade"] = {
	name: "Booming Blade",
	classes: ["artificer", "sorcerer", "warlock", "wizard"],
	source: [["T", 106], ["S", 142]],
	level: 0,
	school: "Evoc",
	time: "Act",
	range: "S:5-ft rad",
	components: "S,M\u0192",
	compMaterial: "A melee weapon worth at least 1 sp",
	duration: "1 round",
	description: "Melee wea atk with cast; hit: 0d8 Thunder dmg, if it moves next round +1d8; +1d8 at CL5, 11, \u0026 17",
	descriptionShorter: "melee wea atk with cast; hit: 0d8 Thunder dmg, if move next rnd +1d8; +1d8 CL 5/11/17 ",
	descriptionCantripDie: "Melee wea atk with cast; if hit: `CD-1`d8 Thunder dmg and if moves next round +`CD`d8 Thunder dmg",
	descriptionFull: [
		"You brandish the weapon used in the spell's casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack's normal effects and then becomes sheathed in booming energy until the start of your next turn. If the target willingly moves 5 feet or more before then, the target takes 1d8 thunder damage, and the spell ends.",
		"This spell's damage increases when you reach certain levels. At 5th level, the melee attack deals an extra 1d8 thunder damage to the target on a hit, and the damage the target takes for moving increases to 2d8. Both damage rolls increase by 1d8 at 11th level (2d8 and 3d8) and again at 17th level (3d8 and 4d8).",
	],
	dynamicDamageBonus: {
		extraDmgGroupsSameType: /(next r(?:ou)?nd )((?:\+?\d+d?\d*)+)/i,
	},
};
SpellsList["green-flame blade"] = {
	name: "Green-Flame Blade",
	classes: ["artificer", "sorcerer", "warlock", "wizard"],
	source: [["T", 107], ["S", 143]],
	level: 0,
	school: "Evoc",
	time: "Act",
	range: "S:5-ft rad",
	components: "S,M\u0192",
	compMaterial: "A melee weapon worth at least 1 sp",
	duration: "Instantaneous",
	description: "Melee wea atk at cast; hit: 0d8 Fire dmg, 1 crea in 5 ft 0d8+spell mod Fire dmg; +1d8 CL5/11/17",
	descriptionShorter: "Melee wea atk; hit: 0d8 Fire dmg, 1 crea in 5 ft 0d8+spell mod Fire dmg; +1d8 CL5/11/17",
	descriptionCantripDie: "Melee wea atk with cast; if hit: `CD-1`d8 Fire dmg, 1 crea in 5 ft `CD-1`d8+spellcasting ability modifier Fire dmg",
	descriptionFull: [
		"You brandish the weapon used in the spell's casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack's normal effects, and you can cause green fire to leap from the target to a different creature of your choice that you can see within 5 feet of it. The second creature takes fire damage equal to your spellcasting ability modifier.",
		"This spell's damage increases when you reach certain levels. At 5th level, the melee attack deals an extra 1d8 fire damage to the target on a hit, and the fire damage to the second creature increases to 1d8 + your spellcasting ability modifier. Both damage rolls increase by 1d8 at 11th level (2d8 and 2d8) and 17th level (3d8 and 3d8).",
	],
};
SpellsList["lightning lure"] = {
	name: "Lightning Lure",
	classes: ["artificer", "sorcerer", "warlock", "wizard"],
	source: [["T", 107], ["S", 143]],
	level: 0,
	school: "Evoc",
	time: "Act",
	range: "S:15-ft rad",
	components: "V",
	duration: "Instantaneous",
	save: "Str",
	description: "1 crea in 15 ft save or pulled 10 ft to me; if it ends in 5 ft, 1d8 Lightning dmg; +1d8 at CL 5/11/17",
	descriptionShorter: "1 crea in 15 ft save or pulled 10 ft to me; if end in 5 ft, 1d8 Lightn. dmg; +1d8 at CL 5/11/17",
	descriptionCantripDie: "1 crea I see save or pulled 10 ft to me; if it ends in 5 ft, `CD`d8 Lightning dmg",
	descriptionFull: [
		"You create a lash of lightning energy that strikes at one creature of your choice that you can see within 15 feet of you. The target must succeed on a Strength saving throw or be pulled up to 10 feet in a straight line toward you and then take 1d8 lightning damage if it is within 5 feet of you.",
		"This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
	],
};
SpellsList["sword burst"] = {
	name: "Sword Burst",
	classes: ["artificer", "sorcerer", "warlock", "wizard"],
	source: [["T", 115], ["S", 143]],
	level: 0,
	school: "Conj",
	time: "Act",
	range: "S:5-ft rad",
	components: "V",
	duration: "Instantaneous",
	save: "Dex",
	description: "All crea in range save or 1d6 Force damage; +1d6 at CL 5, 11, and 17",
	descriptionCantripDie: "All crea in range save or `CD`d6 Force damage",
	descriptionFull: [
		"You create a momentary circle of spectral blades that sweep around you. All other creatures within 5 feet of you must succeed on a Dexterity saving throw or take 1d6 force damage.",
		"This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
	],
};

WeaponsList["booming blade"] = {
	regExpSearch: /^(?=.*booming)(?=.*blade).*$/i,
	name: "Booming Blade",
	source: [["T", 106], ["S", 142]],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage: ["Bd8/Cd8", "", "thunder"],
	range: "With melee wea",
	description: "First damage added to the attack; second to the target if it moves next round",
	abilitytodamage: false,
};
WeaponsList["green-flame blade"] = {
	regExpSearch: /^(?=.*green)(?=.*flame)(?=.*blade).*$/i,
	name: "Green-Flame Blade",
	source: [["T", 107], ["S", 143]],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage: ["Bd8/Bd8", "", "fire"],
	range: "With melee wea",
	description: "First damage added to the attack; second to a target within 5 ft",
	abilitytodamage: true,
};
WeaponsList["lightning lure"] = {
	regExpSearch: /^(?=.*lightning)(?=.*lure).*$/i,
	name: "Lightning Lure",
	source: [["T", 107], ["S", 143]],
	list: "spell",
	ability: 5,
	type: "Cantrip",
	damage: ["C", 8, "lightning"],
	range: "15 ft",
	description: "Str save; success - nothing; fail - pulled 10 ft closer to me, only take damage if end within 5 ft of me",
	abilitytodamage: false,
	dc: true,
};
WeaponsList["sword burst"] = {
	regExpSearch: /^(?=.*sword)(?=.*burst).*$/i,
	name: "Sword Burst",
	source: [["T", 115], ["S", 143]],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage: ["C", 6, "force"],
	range: "5-ft radius",
	description: "Dex save, success - no damage; all creatures in range",
	abilitytodamage: false,
	dc: true,
};

// legacy_20201117_TCoE.js
// This file adds options from Tasha's Cauldron of Everything to MPMB's Character Record Sheet that have not been replaced with new options published specifically for the 2024 (5.5e) rules

// Define the source
SourceList["T"] = {
	name: "Tasha's Cauldron of Everything (incomplete)",
	abbreviation: "TCoE",
	abbreviationSpellsheet: "T",
	group: "Legacy Sources",
	url: "https://marketplace.dndbeyond.com/category/tashas-cauldron-of-everything?pid=SRC-00067",
	date: "2020/11/17",
	defaultExcluded: true,
};

AddSubClass("bard", "college of eloquence", {
	regExpSearch: /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*eloquence).*$/i,
	subname: "College of Eloquence",
	subnameShort: "Eloquence",
	source: [["T", 29], ["MOT", 28]],
	features: {
		"subclassfeature3": {
			name: "Silver Tongue",
			source: [["T", 30], ["MOT", 28]],
			minlevel: 3,
			description: desc("When I make a Persuasion or Deception check, I can treat a roll of 9 or lower as a 10."),
		},
		"subclassfeature3.1": {
			name: "Unsettling Words",
			source: [["T", 30], ["MOT", 28]],
			minlevel: 3,
			description: desc("As a Bonus Action, I can expend and roll a Bardic Inspiration Die to have a creature I can see within 60 ft subtract the result from the next save it makes before my next turn starts."),
			action: [["bonus action", ""]],
		},
		"subclassfeature6": {
			name: "Unfailing Inspiration",
			source: [["T", 30], ["MOT", 28]],
			minlevel: 6,
			description: desc("When a creature adds my Bardic Inspiration Die to a roll but fails, they can keep the die."),
		},
		"subclassfeature6.1": {
			name: "Universal Speech",
			source: [["T", 30], ["MOT", 28]],
			minlevel: 6,
			description: desc([
				"As an Action, I can choose a number of creatures equal to my Charisma modifier (min 1). They can magically understand me, regardless of the language I speak, for 1 hour.",
				"I can do this once per Long Rest, or by expending a 1st-level or higher spell slot (SS 1+).",
			]),
			recovery: "Long Rest",
			usages: 1,
			altResource: "SS 1+",
			action: [["action", ""]],
		},
		"subclassfeature14": {
			name: "Infectious Inspiration",
			source: [["T", 30], ["MOT", 28]],
			minlevel: 14,
			description: desc("As a Reaction when a creature uses my Bardic Inspiration Die and succeeds, I can give another creature within 60 ft that can hear me a " + (typePF ? "Bardic Inspiration Die" : "BID") + " without expending any."),
			action: [["reaction", ""]],
			usages: "Charisma modifier per ",
			usagescalc: "event.value = Math.max(1, What('Cha Mod'));",
			recovery: "Long Rest",
		},
	},
});
