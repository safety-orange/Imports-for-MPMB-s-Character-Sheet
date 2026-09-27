var iFileName = "pub_20241112_DMG.js";
RequiredSheetVersion("24.0.15-beta");
// This file adds material from the 2024 Dungeon Master's Guide that isn't in the SRD v5.2.1 to MPMB's Character Record Sheet for 5.5e

SourceList["DMG24"] = {
	name: "2024 Dungeon Master's Guide",
	abbreviation: "DMG'24",
	group: "Primary Sources",
	url: "https://marketplace.dndbeyond.com/core-rules/3710000",
	date: "2024/11/12",
};

// Supernatural Gifts
// Supernatural Gifts - Blessings
FeatsList["blessing of magic resistance"] = {
	name: "Blessing of Magic Resistance",
	source: [["DMG24", 98]],
	type: "supernatural gift (blessing)",
	description: "I have Advantage on saving throws against spells and other magical effects.",
	descriptionFull: "You have Advantage on saving throws against spells and other magical effects.",
	savetxt: { adv_vs: ["spells", "magical effects"] },
};
FeatsList["blessing of health"] = {
	name: "Blessing of Health",
	source: [["DMG24", 98]],
	type: "supernatural gift (blessing)",
	description: "My Constitution score increases by 2, up to a maximum of 22.",
	descriptionFull: "Your Constitution score increases by 2, up to a maximum of 22.",
	scores: [0, 0, 2, 0, 0, 0],
	scoresMaxLimited: [0, 0, 22, 0, 0, 0],
};
FeatsList["blessing of protection"] = {
	name: "Blessing of Protection",
	source: [["DMG24", 99]],
	type: "supernatural gift (blessing)",
	description: "I gain a +1 bonus to AC and saving throws.",
	descriptionFull: "You gain a +1 bonus to AC and saving throws.",
	extraAC: { mod: 1, misc: true },
	addMod: [{
		type: "save",
		field: "all",
		mod: 1,
		text: "I gain a +1 bonus to saving throws.",
	}],
};
FeatsList["blessing of understanding"] = {
	name: "Blessing of Understanding",
	source: [["DMG24", 99]],
	type: "supernatural gift (blessing)",
	description: "My Wisdom score increases by 2, up to a maximum of 22.",
	descriptionFull: "Your Wisdom score increases by 2, up to a maximum of 22.",
	scores: [0, 0, 0, 0, 2, 0],
	scoresMaxLimited: [0, 0, 0, 0, 22, 0],
};
FeatsList["blessing of valhalla"] = {
	name: "Blessing of Valhalla",
	source: [["DMG24", 99]],
	type: "supernatural gift (blessing)",
	description: "As a Magic action once every 7 days, I can blow this horn to summon 2 warrior spirits within 60 ft of me. They are **Berserkers** and disappear after 1 hour, or when they drop to 0 HP. They are Friendly to me and my allies and follow my commands. See Companion page.",
	descriptionFull: "This Blessing grants you the power to summon spirit warriors, as if you are blowing a silver *Horn of Valhalla*. Once you use this Blessing, you can't use it again until 7 days have passed.",
	usages: 1,
	recovery: "7 days",
	creaturesAdd: [["Warrior Spirit", true]],
	creatureOptions: [Object.assign(
		{},
		MagicItemsList["horn of valhalla"].creatureOptions[0],
		{
			eval: function (prefix) {
				Value(prefix + "Comp.Desc.Name", "Blessing of Valhalla's Warrior Spirit");
				Value(prefix + "Comp.Type", "Summon");
				Value(prefix + "Comp.Use.Attack.1.Weapon Selection", "Greataxe");
			},
		}
	)],
};
FeatsList["blessing of weapon enhancement"] = {
	name: "Blessing of Weapon Enhancement",
	source: [["DMG24", 99]],
	type: "supernatural gift (blessing)",
	description: 'One nonmagical weapon in my possession becomes a +1 Weapon while I wield it. Add "+1" to the name of a weapon on the first page to have the automation apply this benefit.',
	descriptionFull: "One nonmagical weapon in your possession becomes a *+1 Weapon* while you wield it.",
};
FeatsList["blessing of wound closure"] = {
	name: "Blessing of Wound Closure",
	source: [["DMG24", 99]],
	type: "supernatural gift (blessing)",
	description: [
		"This Blessing functions as a *Periapt of Wound Closure*" + (typePF ? "." : ", which give me the following benefits."),
		"***Life Preservation***. Whenever I make a Death Saving Throw, I can change a roll of 9 or less to a 10, turning a failure into a success. ***Natural Healing Boost***. Whenever I roll a Hit Point Die to regain Hit Points, I double the number of Hit Points it restores.",
	],
	descriptionFull: "This Blessing grants you the benefits of a *Periapt of Wound Closure*.",
};
// Supernatural Gifts - Charms
FeatsList["charm of animal conjuring"] = {
	name: "Charm of Animal Conjuring",
	source: [["DMG24", 99]],
	type: "supernatural gift (charm)",
	description: "This Charm allows me to cast *Conjure Animals*. Once used three times, the Charm vanishes from me.",
	descriptionFull: "This Charm allows you to cast *Conjure Animals*. Once used three times, the Charm vanishes from you.",
	usages: 3,
	recovery: "\u2013",
	spellFirstColTitle: "Ch",
	spellcastingBonus: [{
		name: "3 times",
		spells: "conjure animals",
		selection: "conjure animals",
		firstCol: 1,
	}],
};
FeatsList["charm of darkvision"] = {
	name: "Charm of Darkvision",
	source: [["DMG24", 99]],
	type: "supernatural gift (charm)",
	description: "This Charm allows me to cast *Darkvision*. Once used three times, the Charm vanishes from me.",
	descriptionFull: "This Charm allows you to cast *Darkvision*. Once used three times, the Charm vanishes from you.",
	usages: 3,
	recovery: "\u2013",
	spellFirstColTitle: "Ch",
	spellcastingBonus: [{
		name: "3 times",
		spells: "darkvision",
		selection: "darkvision",
		firstCol: 1,
	}],
};
FeatsList["charm of feather falling"] = {
	name: "Charm of Feather Falling",
	source: [["DMG24", 99]],
	type: "supernatural gift (charm)",
	description: "This Charm grants me the benefits of a *Ring of Feather Falling*. These benefits last for 10 days, after which the Charm vanishes from me. When I fall while having this charm, I descend 60 ft per round and take no damage from falling.",
	descriptionFull: "This Charm grants you the benefits of a *Ring of Feather Falling*. These benefits last for 10 days, after which the Charm vanishes from you.",
};
FeatsList["charm of heroism"] = {
	name: "Charm of Heroism",
	source: [["DMG24", 99]],
	type: "supernatural gift (charm)",
	description: "As a Magic action, I can use this charm to gain 10 Temporary Hit Points that last for 1 hour. For the same duration, I'm under the effect of the *Bless* spell (no Concentration required). *Bless* allows me to add +1d4 on all my attack rolls and saving throws. Once I use it, the charm vanishes from me.",
	descriptionFull: "This Charm allows you to give yourself the benefit of a *Potion of Heroism* as a Magic action. Once you do so, the Charm vanishes from you.",
	action: [["action", ""]],
};
FeatsList["charm of restoration"] = {
	name: "Charm of Restoration",
	source: [["DMG24", 99]],
	type: "supernatural gift (charm)",
	description: "This Charm has 3 charges. I can expend some of its charges to cast one of the following spells: *Greater Restoration* (2 charges) or *Lesser Restoration* (1 charge). Once all its charges have been expended, the Charm vanishes from me.",
	descriptionFull: "This Charm has 3 charges. You can expend some of its charges to cast one of the following spells: *Greater Restoration* (2 charges) or *Lesser Restoration* (1 charge). Once all its charges have been expended, the Charm vanishes from you.",
	usages: 3,
	recovery: "\u2013",
	spellFirstColTitle: "Ch",
	spellcastingBonus: [{
		name: "1 charge",
		spells: ["lesser restoration"],
		selection: ["lesser restoration"],
		firstCol: 1,
	}, {
		name: "2 charges",
		spells: ["greater restoration"],
		selection: ["greater restoration"],
		firstCol: 2,
	}],
};
FeatsList["charm of the slayer"] = {
	name: "Charm of the Slayer",
	source: [["DMG24", 99]],
	type: "supernatural gift (charm)",
	description: "Select one of the choices.",
	descriptionFull: "One weapon in your possession becomes a *Dragon Slayer* or *Giant Slayer* (DM's choice) for the next 9 days. The Charm then vanishes from you, and the weapon returns to normal.",
	choices: ["Dragon Slayer", "Giant Slayer"],
	"dragon slayer": {
		name: "Charm of the Dragon Slayer",
		description: "One weapon in my possession becomes a *Dragon Slayer* for the next 9 days. The charm then vanishes, and the weapon reverts back. I gain a +1 bonus to attack and damage rolls made with a *Dragon Slayer* weapon. The weapon deals an extra 3d6 damage of the weapon's type if the target is a Dragon.",
		calcChanges: MagicItemsList["dragon slayer"].calcChanges,
	},
	"giant slayer": {
		name: "Charm of the Giant Slayer",
		description: "One of my weapons becomes a *Giant Slayer* for the next 9 days. The charm then vanishes, and the weapon reverts back. The weapon gain a +1 bonus to attack and damage. When I hit a Giant with it, the Giant takes +2d6 damage of the weapon's type and must make a DC 15 Strength save or be knocked Prone.",
		calcChanges: MagicItemsList["giant slayer"].calcChanges,
	},
};
FeatsList["charm of vitality"] = {
	source: [["DMG24", 99]],
	type: "supernatural gift (charm)",
	name: "Charm of Vitality",
	description: "As a Magic action, I can activate this charm to remove any Exhaustion levels I have and the Poisoned condition from me. For the next 24 hours, I regain the maximum number of Hit Points for any Hit Point Die spend. Once I activate it, the charm vanishes from me.",
	descriptionFull: "This Charm allows you to give yourself the benefit of a *Potion of Vitality* as a Magic action. Once you do so, the Charm vanishes from you.",
};

// Magic Items

// Magic Items - Enspelled Armor, Staff, and Weapon
var DMG24_EnspelledItems = {
	descriptionFullTable: [
		["Spell",     "",           "", "Save",   "Attack"],
		["**Level**", "**Rarity**", "", "**DC**", "**Bonus**"],
		["Cantrip",   "Uncommon  ",     "13",      " +5"],
		["   1   ",   "Uncommon  ",     "13",      " +5"],
		["   2   ",   "Rare",       "", "13",      " +5"],
		["   3   ",   "Rare",       "", "15",      " +7"],
		["   4   ",   "Very rare     ", "15",      " +7"],
		["   5   ",   "Very rare     ", "17",      " +9"],
		["   6   ",   "Legendary     ", "17",      " +9"],
		["   7   ",   "Legendary     ", "18",      "+10"],
		["   8   ",   "Legendary     ", "18",      "+10"],
	],
	choicesEntries: [
		{ level: 0, saveDC: 13, attackBonus: 5, rarity: "Uncommon" },
		{ level: 1, saveDC: 13, attackBonus: 5, rarity: "Uncommon" },
		{ level: 2, saveDC: 13, attackBonus: 5, rarity: "Rare" },
		{ level: 3, saveDC: 15, attackBonus: 7, rarity: "Rare" },
		{ level: 4, saveDC: 15, attackBonus: 7, rarity: "Very Rare" },
		{ level: 5, saveDC: 17, attackBonus: 9, rarity: "Very Rare" },
		{ level: 6, saveDC: 17, attackBonus: 9, rarity: "Legendary" },
		{ level: 7, saveDC: 18, attackBonus: 10, rarity: "Legendary" },
		{ level: 8, saveDC: 18, attackBonus: 10, rarity: "Legendary" },
	].map(function (entry) {
		if (entry.level === 0) {
			return Object.assign(entry, {
				name: "Cantrip",
				spellCantrip: "cantrip",
				keyName: "Cantrip (Uncommon)",
				spellString: "cantrip",
				limitedFeatureName: "cantrip",
				nameTestPart: "cantrip|0.{1,3}level|level 0",
			});
		} else {
			entry.name = "Level " + entry.level;
			return Object.assign(entry, {
				spellCantrip: "spell",
				keyName: entry.name + " (" + entry.rarity + ")",
				spellString: "level " + entry.level + " spell",
				limitedFeatureName: "lvl " + entry.level,
				nameTestPart: entry.level + ".{1,3}level|level " + entry.level,
			});
		}
	}),
};
MagicItemsList["enspelled armor"] = function (){
	var obj = {
		name: "Enspelled Armor",
		source: [["DMG24", 258]],
		type: "Armor (Any Light, Medium, or Heavy)",
		magicItemTable: ["Armaments"],
		attunement: true,
		description: "Select one of the choices.",
		descriptionFull: [
			"Bound into this armor is a spell of level 8 or lower. The spell is determined when the armor is created and must belong to the Abjuration or Illusion school of magic. The armor has 6 charges and regains 1d6 expended charges daily at dawn. While wearing the armor, you can expend 1 charge to cast its spell.",
			"The level of the spell bound into the armor determines the spell's saving throw DC and attack bonus, as well as the armor's rarity, as shown in the following table.",
			DMG24_EnspelledItems.descriptionFullTable,
		],
		allowDuplicates: true,
		choicesNotInMenu: true,
		choices: [],
	};
	DMG24_EnspelledItems.choicesEntries.forEach(function (entry) {
		obj.choices.push(entry.keyName);
		obj[entry.keyName.toLowerCase()] = {
			name: "Enspelled Armor (" + entry.name + ")",
			nameTest: RegExp("^(?=.*enspelled)(?=.*(" + entry.nameTestPart + "))(?=.*\\u180C).*$", "i"),
			rarity: entry.rarity,
			description: "Bound to this armor is a " + entry.spellString + " of the Abjuration or Illusion school of magic. The armor has 6 charges and regains 1d6 expended charges daily at dawn. While wearing the armor, I can expend 1 charge to cast its " + entry.spellCantrip + ". The " + entry.spellCantrip + "'s saving throw DC is " + entry.saveDC + ", and its attack bonus is +" + entry.attackBonus + ".",
			extraLimitedFeatures: [{
				name: "Enspelled Armor: " + entry.limitedFeatureName,
				usages: 6,
				recovery: "Dawn",
				additional: "regains d6",
			}],
			fixedDC: entry.saveDC,
			spellFirstColTitle: "Ch",
			allowUpCasting: entry.level === 0 ? true : undefined,
			spellcastingBonus: [{
				name: entry.level === 0 ? "Abjuration or Illusion cantrip" : "level " + entry.level + " Abjuration or Illusion",
				level: [entry.level, entry.level],
				school: ["Abjur", "Illus"],
				firstCol: 1,
			}],
			allowDuplicates: true,
			chooseGear: {
				type: "armor",
				prefixOrSuffix: ["between", "Enspelled", "(" + entry.name + ") \u180C"],
				itemName1stPage: ["suffix", "Enspelled"],
				descriptionChange: ["replace", "armor"],
			},
		};
	});
	return obj;
}();
MagicItemsList["enspelled staff"] = function (){
	var obj = {
		name: "Enspelled Staff",
		source: [["DMG24", 258]],
		type: "Staff",
		magicItemTable: ["Arcana", "Relics"],
		attunement: true,
		prerequisite: "Requires Attunement by a Spellcaster",
		prereqeval: function (v) { return v.isSpellcaster; },
		description: "Select one of the choices.",
		descriptionFull: [
			"Bound into this staff is a spell of level 8 or lower. The spell is determined when the staff is created and can be of any school of magic. The staff has 6 charges and regains 1d6 expended charges daily at dawn. While holding the staff, you can expend 1 charge to cast its spell. If you expend the staff's last charge, roll 1d20. On a 1, the staff loses its properties and becomes a nonmagical Quarterstaff.",
			"The level of the spell bound into the staff determines the spell's saving throw DC and attack bonus, as well as the staff's rarity, as shown in the following table.",
			DMG24_EnspelledItems.descriptionFullTable,
		],
		allowDuplicates: true,
		choicesNotInMenu: true,
		choices: [],
	};
	DMG24_EnspelledItems.choicesEntries.forEach(function (entry) {
		obj.choices.push(entry.keyName);
		obj[entry.keyName.toLowerCase()] = {
			name: "Enspelled Staff (" + entry.name + ")",
			nameTest: RegExp("^(?=.*enspelled)(?=.*staff)(?=.*(" + entry.nameTestPart + ")).*$", "i"),
			rarity: entry.rarity,
			description: "Bound to this staff is a " + entry.spellString + ". It has 6 charges and regains 1d6 expended charges daily at dawn. While holding the staff, I can expend 1 charge to cast its " + entry.spellCantrip + ". The " + entry.spellCantrip + "'s saving throw DC is " + entry.saveDC + ", and its attack bonus is +" + entry.attackBonus + ". If I expend the last charge, roll 1d20. On a 1, the staff becomes a nonmagical Quarterstaff.",
			extraLimitedFeatures: [{
				name: "Enspelled Staff: " + entry.limitedFeatureName,
				usages: 6,
				recovery: "Dawn",
				additional: "regains d6",
			}],
			fixedDC: entry.saveDC,
			spellFirstColTitle: "Ch",
			allowUpCasting: entry.level === 0 ? true : undefined,
			spellcastingBonus: [{
				name: entry.spellString,
				level: [entry.level, entry.level],
				firstCol: 1,
			}],
			allowDuplicates: true,
		};
	});
	return obj;
}();
MagicItemsList["enspelled weapon"] = function (){
	var obj = {
		name: "Enspelled Weapon",
		source: [["DMG24", 258]],
		type: "Weapon (Any Simple or Martial)",
		magicItemTable: ["Armaments", "Implements"],
		attunement: true,
		description: "Select one of the choices.",
		descriptionFull: [
			"Bound into this weapon is a spell of level 8 or lower. The spell is determined when the weapon is created and must belong to the Conjuration, Divination, Evocation, Necromancy, or Transmutation school of magic. The weapon has 6 charges and regains 1d6 expended charges daily at dawn. While holding the weapon, you can expend 1 charge to cast its spell.",
			"The level of the spell bound into the weapon determines the spell's saving throw DC and attack bonus, as well as the weapon's rarity, as shown in the following table.",
			DMG24_EnspelledItems.descriptionFullTable,
		],
		allowDuplicates: true,
		choicesNotInMenu: true,
		choices: [],
	};
	DMG24_EnspelledItems.choicesEntries.forEach(function (entry) {
		obj.choices.push(entry.keyName);
		obj[entry.keyName.toLowerCase()] = {
			name: "Enspelled Weapon (" + entry.name + ")",
			nameTest: RegExp("^(?=.*enspelled)(?=.*(" + entry.nameTestPart + "))(?=.*\\uFEFF).*$", "i"),
			rarity: entry.rarity,
			description: "Bound to this weapon is a " + entry.spellString + " of the Conjuration, Divination, Evocation, Necromancy, or Transmutation school. The weapon has 6 charges and regains 1d6 daily at dawn. While holding the weapon, I can expend 1 charge to cast its " + entry.spellCantrip + ". The " + entry.spellCantrip + "'s saving throw DC is " + entry.saveDC + ", and its attack bonus is +" + entry.attackBonus + ".",
			extraLimitedFeatures: [{
				name: "Enspelled Weapon: " + entry.limitedFeatureName,
				usages: 6,
				recovery: "Dawn",
				additional: "regains d6",
			}],
			fixedDC: entry.saveDC,
			spellFirstColTitle: "Ch",
			allowUpCasting: entry.level === 0 ? true : undefined,
			spellcastingBonus: [{
				name: "Conj, Div, Evoc, Necro, or Trans",
				level: [entry.level, entry.level],
				school: ["Conj", "Div", "Evoc", "Necro", "Trans"],
				firstCol: 1,
			}],
			allowDuplicates: true,
			chooseGear: {
				type: "weapon",
				prefixOrSuffix: ["between", "Enspelled", "(" + entry.name + ") \uFEFF"],
				itemName1stPage: ["suffix", "Enspelled"],
				descriptionChange: false,
			},
		};
	});
	return obj;
}();

// Firearms (weapons and ammunition) [excluded by default]
var DMG24_Reload = "***Reload***. I can make a limited number of shots with a Reload weapon. I must then reload the weapon as an action or a Bonus Action.";
WeaponsList["automatic rifle"] = {
	regExpSearch: /^(?=.*automatic)(?=.*rifle).*$/i,
	name: "Automatic rifle",
	nameAlt: ["Rifle, Automatic"],
	source: [["DMG24", 73]],
	list: "firearm",
	ability: 2,
	type: "Martial",
	damage: [2, 8, "piercing"],
	range: "80/240 ft",
	weight: 8,
	description: "Ammunition, Burst Fire, Reload (30 shots), Two-Handed",
	ammo: "firearm bullet",
	mastery: "slow",
	defaultExcluded: true,
	tooltip: [
		"***Burst Fire***. As an action, I can expend 10 pieces of a Burst Fire weapon's ammunition to spray shots in a 10-ft Cube within the weapon's normal range. Each creature in that area must succeed on a DC 15 Dexterity saving throw or take damage. I roll the weapon's damage once, and apply it to each creature that failed the save.",
		DMG24_Reload,
	],
};
WeaponsList["hunting rifle"] = {
	regExpSearch: /^((?=.*hunting)(?=.*rifle)|(?!.*(automatic|laser|antimatter))(?=.*\brifles?\b)).*$/i,
	name: "Hunting rifle",
	nameAlt: ["Rifle, Hunting"],
	source: [["DMG24", 73]],
	list: "firearm",
	ability: 2,
	type: "Martial",
	damage: [2, 10, "piercing"],
	range: "80/240 ft",
	weight: 8,
	description: "Ammunition, Reload (5 shots), Two-Handed",
	ammo: "firearm bullet",
	mastery: "slow",
	defaultExcluded: true,
	tooltip: DMG24_Reload,
};
WeaponsList["revolver"] = {
	regExpSearch: /revolver/i,
	name: "Revolver",
	source: [["DMG24", 73]],
	list: "firearm",
	ability: 2,
	type: "Martial",
	damage: [2, 8, "piercing"],
	range: "40/120 ft",
	weight: 3,
	description: "Ammunition, Reload (6 shots)",
	ammo: "firearm bullet",
	mastery: "Sap",
	defaultExcluded: true,
	tooltip: DMG24_Reload,
};
WeaponsList["semiautomatic pistol"] = {
	regExpSearch: /^(?=.*semiautomatic)(?=.*\bpistols?\b).*$/i,
	name: "Semiautomatic Pistol",
	nameAlt: ["Pistol, Semiautomatic"],
	source: [["DMG24", 73]],
	list: "firearm",
	ability: 2,
	type: "Martial",
	damage: [2, 6, "piercing"],
	range: "50/150 ft",
	weight: 3,
	description: "Ammunition, Reload (15 shots)",
	ammo: "firearm bullet",
	mastery: "vex",
	defaultExcluded: true,
	tooltip: DMG24_Reload,
};
WeaponsList["shotgun"] = {
	regExpSearch: /shotgun/i,
	name: "Shotgun",
	source: [["DMG24", 73]],
	list: "firearm",
	ability: 2,
	type: "Martial",
	damage: [2, 8, "piercing"],
	range: "30/90 ft",
	weight: 7,
	description: "Ammunition, Reload (2 shots), Two-Handed",
	ammo: "firearm bullet",
	mastery: "push",
	defaultExcluded: true,
	tooltip: DMG24_Reload,
};
WeaponsList["antimatter rifle"] = {
	regExpSearch: /^(?=.*antimatter)(?=.*rifle).*$/i,
	name: "Antimatter rifle",
	nameAlt: ["Rifle, Antimatter"],
	source: [["DMG24", 73]],
	list: "firearm",
	ability: 2,
	type: "Martial",
	damage: [6, 8, "necrotic"],
	range: "120/360 ft",
	weight: 10,
	description: "Ammunition, Reload (2 shots), Two-Handed",
	ammo: "energy cell",
	mastery: "sap",
	defaultExcluded: true,
	tooltip: DMG24_Reload,
};
WeaponsList["laser pistol"] = {
	regExpSearch: /^(?=.*laser)(?=.*pistol).*$/i,
	name: "Laser pistol",
	nameAlt: ["Pistol, Laser"],
	source: [["DMG24", 73]],
	list: "firearm",
	ability: 2,
	type: "Martial",
	damage: [3, 6, "radiant"],
	range: "40/120 ft",
	weight: 2,
	description: "Ammunition, Reload (50 shots), Two-Handed",
	ammo: "energy cell",
	mastery: "vex",
	defaultExcluded: true,
	tooltip: DMG24_Reload,
};
WeaponsList["laser rifle"] = {
	regExpSearch: /^(?=.*laser)(?=.*rifle).*$/i,
	name: "Laser rifle",
	nameAlt: ["Rifle, Laser"],
	source: [["DMG24", 73]],
	list: "firearm",
	ability: 2,
	type: "Martial",
	damage: [3, 8, "radiant"],
	range: "100/300 ft",
	weight: 7,
	description: "Ammunition, Reload (30 shots), Two-Handed",
	ammo: "energy cell",
	mastery: "slow",
	defaultExcluded: true,
	tooltip: DMG24_Reload,
};
AmmoList["energy cell"] = {
	name: "Energy Cell",
	source: [["DMG24", 72]],
	weight: 0, // An energy cell weighs 0.5 lb, but this is weight per charge
	icon: "Bullets",
	invName: "Energy Cell",
	defaultExcluded: true,
};

// Explosives [excluded by default]
// Explosives - Bomb
WeaponsList["bomb"] = {
	regExpSearch: /bomb/i,
	name: "Bomb",
	infoname: "Bomb [100 gp]",
	source: [["DMG24", 72]],
	list: "explosive",
	ability: 0,
	type: "Explosive",
	damage: [3, 6, "fire"],
	range: "60 ft",
	weight: 1,
	description: "All within 5-ft radius Sphere, Dex save for half damage",
	abilitytodamage: false,
	modifiers: [4, ""],
	dc: true,
	ammo: "bomb",
	isNotWeapon: true,
	isAlwaysProf: false,
	tooltip: "As an action, I can light a Bomb and throw it at a point up to 60 ft away, where it explodes. Each creature in a 5-ft radius Sphere centered on that point makes a DC 12 Dexterity saving throw, taking 3d6 Fire damage on a failed save or half as much damage on a successful one.",
	defaultExcluded: true,
};
AmmoList["bomb"] = {
	name: "Bomb",
	source: [["DMG24", 72]],
	weight: 1,
	icon: "Flasks",
	defaultExcluded: true,
};
MagicItemsList["bomb"] = {
	name: "Bomb",
	source: [["DMG24", 72]],
	type: "Explosive",
	rarity: "100 GP",
	defaultExcluded: true,
	description: "As an action, I can light a Bomb and throw it at a point up to 60 ft away, where it explodes. Each creature in a 5-ft radius Sphere centered on that point makes a DC 12 Dexterity saving throw, taking 3d6 Fire damage on a failed save or half as much damage on a successful one.",
	descriptionFull: "As an action, you can light a Bomb and throw it at a point up to 60 feet away, where it explodes. Each creature in a 5-foot-radius Sphere centered on that point makes a DC 12 Dexterity saving throw, taking 3d6 Fire damage on a failed save or half as much damage on a successful one.",
	action: [["action", "Throw Explosive"]],
	weaponsAdd: { select: ["Bomb"] },
	eval: function () { // make sure the weapon and ammo are not excluded
		if (CurrentSources.weapExcl.eject("bomb") !== -1) SetWeaponsdropdown();
		if (CurrentSources.ammoExcl.eject("bomb") !== -1) SetAmmosdropdown();
	},
};
// Explosives - Dynamite Stick
WeaponsList["dynamite stick"] = {
	regExpSearch: /^(?=.*dynamite)(?=.*stick).*$/i,
	name: "Dynamite stick",
	source: [["DMG24", 72]],
	list: "explosive",
	ability: 0,
	type: "Explosive",
	damage: [3, 6, "force"],
	range: "60 ft",
	weight: 1,
	description: "All within 5-ft radius Sphere, Dex save halves; +1d6 damage \x26 +5 ft radius per extra stick used (max 10d6/20 ft)",
	abilitytodamage: false,
	modifiers: [4, ""],
	dc: true,
	ammo: "dynamite stick",
	isNotWeapon: true,
	isAlwaysProf: false,
	defaultExcluded: true,
	tooltip: [
		"An an action, I can light a Dynamite Stick and throw it at a point up to 60 ft away, where it explodes. Each creature in a 5-ft radius Sphere centered on that point makes a DC 12 Dexterity saving throw, taking 3d6 Force damage on a failed save or half as much damage on a successful one.",
		"It takes 1 minute to bind two or more Dynamite Sticks together so they explode at the same time. Each stick after the first increases the damage by 1d6 (to a maximum of 10d6) and the effect's radius by 5 ft (to a maximum of 20 ft).",
		"It takes 1 minute to rig dynamite with a longer fuse so it explodes after a longer period of time, such as 1 minute or 10 minutes.",
	],
};
AmmoList["dynamite stick"] = {
	name: "Dynamite stick",
	source: [["DMG24", 72]],
	weight: 1,
	icon: "Flasks",
	defaultExcluded: true,
};
MagicItemsList["dynamite stick"] = {
	name: "Dynamite stick",
	source: [["DMG24", 72]],
	type: "Explosive",
	rarity: "Rare",
	defaultExcluded: true,
	description: "As an action, I can light a (bundle of) dynamite stick(s) and throw them at a point up to 60 ft away. All creatures within 5-ft/stick radius of that point take 2d6+1d6/stick fire damage, DC 12 Dex save for half. Maximum 10d6 damage and 20-ft radius. If I take 1 min to rig it, I can have the stick(s) explode after 1-10 minutes.",
	descriptionFull: [
		"An an action, you can light a Dynamite Stick and throw it at a point up to 60 feet away, where it explodes. Each creature in a 5-foot-radius Sphere centered on that point makes a DC 12 Dexterity saving throw, taking 3d6 Force damage on a failed save or half as much damage on a successful one.",
		"It takes 1 minute to bind two or more Dynamite Sticks together so they explode at the same time. Each stick after the first increases the damage by 1d6 (to a maximum of 10d6) and the effect's radius by 5 feet (to a maximum of 20 feet).",
		"It takes 1 minute to rig dynamite with a longer fuse so it explodes after a longer period of time, such as 1 minute or 10 minutes.",
	],
	action: [["action", "Throw Explosive"]],
	weaponsAdd: { select: ["Dynamite Stick"] },
	eval: function () { // make sure the weapon and ammo are not excluded
		if (CurrentSources.weapExcl.eject("dynamite stick") !== -1) SetWeaponsdropdown();
		if (CurrentSources.ammoExcl.eject("dynamite stick") !== -1) SetAmmosdropdown();
	},
};
// Explosives - Grenades
WeaponsList["fragmentation grenade"] = {
	regExpSearch: /^(?=.*grenade)(?=.*frag(\b|mentation)).*$/i,
	name: "Fragmentation Grenade",
	nameAlt: ["Grenade, Fragmentation"],
	source: [["DMG24", 73]],
	list: "explosive",
	ability: 0,
	type: "Explosive",
	damage: [5, 6, "piercing"],
	range: "60 ft",
	weight: 1,
	description: "All within 20-ft radius Sphere, Dex save halves; 1,000 ft range with Grenade Launcher",
	abilitytodamage: false,
	modifiers: [7, ""],
	dc: true,
	ammo: "grenade",
	isNotWeapon: true,
	isAlwaysProf: false,
	tooltip: [
		"As an action, I can either throw a grenade at a point up to 60 ft away or use a Grenade Launcher to propel the grenade to a point up to 1,000 ft away. The grenade explodes at that point, creating a particular effect in a 20-ft-radius Sphere.",
		"Each creature in the Sphere makes a DC 15 Dexterity saving throw, taking 17 (5d6) Piercing damage on a failed save or half as much damage on a successful one.",
	],
	defaultExcluded: true,
};
AmmoList["grenade"] = {
	name: "Grenade",
	source: [["DMG24", 73]],
	weight: 1,
	icon: "Flasks",
	defaultExcluded: true,
};
MagicItemsList["grenade"] = {
	name: "Grenade",
	source: [["DMG24", 73]],
	type: "Explosive",
	defaultExcluded: true,
	description: "Select one of the choices.",
	descriptionFull: [
		"As an action, you can either throw a grenade at a point up to 60 feet away or use a Grenade Launcher to propel the grenade to a point up to 1,000 feet away. The grenade explodes at that point, creating a particular effect in a 20-foot-radius Sphere.",
		"***Fragmentation Grenade***. Each creature in the Sphere makes a DC 15 Dexterity saving throw, taking 17 (5d6) Piercing damage on a failed save or half as much damage on a successful one.",
		"***Smoke Grenade***. The area of the Sphere is Heavily Obscured by smoke for 1 minute. A strong wind (such as the *Gust of Wind* spell) disperses the smoke.",
	],
	action: [["action", "Throw Explosive"]],
	choices: ["Fragmentation Grenade (Rare)", "Smoke Grenade (50 gp)"],
	"fragmentation grenade (rare)": {
		name: "Fragmentation Grenade",
		sortname: "Grenade, Fragmentation",
		rarity: "Rare",
		description: "As an action, I can throw a grenade at a point up to 60 ft away or 1,000 ft with a Grenade Launcher, where it explodes. Each creatures within a 20-ft radius Sphere of that point makes a DC 15 Dexterity saving throw, taking 5d6 Piercing damage on a failed save or half as much damage on a successful one.",
		weight: 1,
		weaponsAdd: { select: ["Fragmentation Grenade"] },
		eval: function () { // make sure the weapon and ammo are not excluded
			if (CurrentSources.weapExcl.eject("grenade, fragmentation") !== -1) SetWeaponsdropdown();
			if (CurrentSources.ammoExcl.eject("grenade") !== -1) SetAmmosdropdown();
		},
	},
	"smoke grenade (50 gp)": {
		name: "Smoke Grenade",
		sortname: "Grenade, Smoke",
		rarity: "50 GP",
		description: "As an action, I can throw a grenade at a point up to 60 ft away or 1,000 ft with a Grenade Launcher, where it explodes. A 20-ft radius Sphere centered on that point is Heavily Obscured by smoke for 1 minute. A strong wind (such as the *Gust of Wind* spell) disperses the smoke.",
		weight: 2,
	},
};
// Explosives - Gunpowder
MagicItemsList["gunpowder"] = {
	name: "Gunpowder",
	source: [["DMG24", 73]],
	type: "Explosive",
	defaultExcluded: true,
	description: "Select one of the choices.",
	descriptionFull: "Setting fire to a container full of Gunpowder causes it to explode. When a container explodes, each creature in a 10-foot-radius Sphere centered on the container makes a DC 12 Dexterity saving throw, taking 10 (3d6) Fire damage (for a powder horn) or 24 (7d6) Fire damage (for a keg) on a failed save or half as much damage on a successful one.",
	allowDuplicates: true,
	choices: ["Powder Horn (35 gp)", "Keg (250 gp)"],
	"powder horn (35 gp)": {
		name: "Gunpowder (Powder Horn)",
		rarity: "50 GP",
		description: "This water-resistant horn contains explosive powder. If set on fire, the horn explodes. Each creature in a 10 ft radius Sphere centered on the horn makes a DC 12 Dexterity saving throw, taking 3d6 Fire damage on a failed save or half as much damage on a successful one.",
		weight: 2,
	},
	"keg (250 gp)": {
		name: "Gunpowder Keg",
		rarity: "250 GP",
		description: "This small wooden keg contains explosive powder. If set on fire, the keg explodes. Each creature in a 10 ft radius Sphere centered on the keg makes a DC 12 Dexterity saving throw, taking 7d6 Fire damage on a failed save or half as much damage on a successful one.",
		weight: 20,
	},
};
