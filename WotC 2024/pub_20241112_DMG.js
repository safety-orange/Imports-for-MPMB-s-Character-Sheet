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
var DMG24_CharmSpellChanges = {
	components: "",
	compMaterial: "Spells cast from a Charm require no spell components.",
	changes: "If a Charm lets a character cast a spell, the character can do so without expending a spell slot or providing any spell components.",
};
FeatsList["charm of animal conjuring"] = {
	name: "Charm of Animal Conjuring",
	source: [["DMG24", 99]],
	type: "supernatural gift (charm)",
	description: "This Charm allows me to cast *Conjure Animals*. Once used three times, the Charm vanishes from me.",
	descriptionFull: "This Charm allows you to cast *Conjure Animals*. Once used three times, the Charm vanishes from you.",
	usages: 3,
	recovery: "\u2013",
	spellFirstColTitle: "Ch",
	allowUpCasting: false,
	spellcastingBonus: [{
		name: "3 times",
		spells: ["conjure animals"],
		selection: ["conjure animals"],
		firstCol: 1,
	}],
	spellChanges: {
		"conjure animals": DMG24_CharmSpellChanges,
	},
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
		spells: ["darkvision"],
		selection: ["darkvision"],
		firstCol: 1,
	}],
	spellChanges: {
		"darkvision": DMG24_CharmSpellChanges,
	},
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
	description: "As a Magic action, I can use this Charm to gain 10 Temporary Hit Points that last for 1 hour. For the same duration, I'm under the effect of the *Bless* spell (no Concentration required). *Bless* allows me to add +1d4 on all my attack rolls and saving throws. Once I use it, the Charm vanishes from me.",
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
	spellChanges: {
		"lesser restoration": DMG24_CharmSpellChanges,
		"greater restoration": DMG24_CharmSpellChanges,
	},
};
FeatsList["charm of the slayer"] = {
	name: "Charm of the Slayer",
	source: [["DMG24", 99]],
	type: "supernatural gift (charm)",
	description: "Select one of the choices.",
	descriptionFull: "One weapon in your possession becomes a *Dragon Slayer* or *Giant Slayer* (DM's choice) for the next 9 days. The Charm then vanishes from you, and the weapon returns to normal.",
	allowDuplicates: true,
	choices: ["Dragon Slayer", "Giant Slayer"],
	"dragon slayer": {
		name: "Charm of the Dragon Slayer",
		description: "One weapon in my possession becomes a *Dragon Slayer* for the next 9 days. The Charm then vanishes, and the weapon reverts back. I gain a +1 bonus to attack and damage rolls made with a *Dragon Slayer* weapon. The weapon deals an extra 3d6 damage of the weapon's type if the target is a Dragon.",
		calcChanges: MagicItemsList["dragon slayer"].calcChanges,
	},
	"giant slayer": {
		name: "Charm of the Giant Slayer",
		description: "One of my weapons becomes a *Giant Slayer* for the next 9 days. The Charm then vanishes, and the weapon reverts back. The weapon gain a +1 bonus to attack and damage. When I hit a Giant with it, the Giant takes +2d6 damage of the weapon's type and must make a DC 15 Strength save or be knocked Prone.",
		calcChanges: MagicItemsList["giant slayer"].calcChanges,
	},
};
FeatsList["charm of vitality"] = {
	source: [["DMG24", 99]],
	type: "supernatural gift (charm)",
	name: "Charm of Vitality",
	description: "As a Magic action, I can activate this Charm to remove any Exhaustion levels I have and the Poisoned condition from me. For the next 24 hours, I regain the maximum number of Hit Points for any Hit Point Die spend. Once I activate it, the Charm vanishes from me.",
	descriptionFull: "This Charm allows you to give yourself the benefit of a *Potion of Vitality* as a Magic action. Once you do so, the Charm vanishes from you.",
};
// Supernatural Gifts - Bastion Charms
FeatsList["arcane study charm"] = {
	name: "Charm from Arcane Study",
	sortname: "Arcane Study Charm",
	source: [["DMG24", 336]],
	type: "supernatural gift (charm)",
	description: "After spending a Long Rest in my Bastion with an Arcane Study, I gain a magical Charm that lasts for 7 days or until I use it. The Charm allows me to cast *Identify* without expending a spell slot or using Material components. I can't gain this Charm again while I still have it.",
	descriptionFull: "After spending a Long Rest in your Bastion with an Arcane Study, you gain a magical Charm that lasts for 7 days or until you use it. The Charm allows you to cast *Identify* without expending a spell slot or using Material components. You can't gain this Charm again while you still have it.",
	spellFirstColTitle: "Us",
	spellcastingBonus: [{
		name: "One-time use",
		spells: ["identify"],
		selection: ["identify"],
		firstCol: "checkbox",
	}],
	spellChanges: {
		"identify": DMG24_CharmSpellChanges,
	},
};
FeatsList["observatory charm"] = {
	name: "Charm from Observatory",
	sortname: "Observatory Charm",
	source: [["DMG24", 343]],
	type: "supernatural gift (charm)",
	description: "After spending a Long Rest in my Observatory in my Bastion, I gain a magical Charm that lasts for 7 days or until I use it. The Charm allows me to cast *Contact Other Plane* without expending a spell slot. I can't gain this Charm again while I still have it.",
	descriptionFull: "You can use your Observatory to peer into the far corners of Wildspace and the Astral Plane. After spending a Long Rest in your Observatory in your Bastion, you gain a magical Charm that lasts for 7 days or until you use it. The Charm allows you to cast *Contact Other Plane* without expending a spell slot. You can't gain this Charm again while you still have it.",
	spellFirstColTitle: "Us",
	spellcastingBonus: [{
		name: "One-time use",
		spells: ["contact other plane"],
		selection: ["contact other plane"],
		firstCol: "checkbox",
	}],
	spellChanges: {
		"contact other plane": DMG24_CharmSpellChanges,
	},
};
FeatsList["reliquary charm"] = {
	name: "Charm from Reliquary",
	sortname: "Reliquary Charm",
	source: [["DMG24", 344]],
	type: "supernatural gift (charm)",
	description: "After spending a Long Rest in my Bastion with a Reliquary, I gain a magical Charm that lasts for 7 days or until I use it. The Charm allows me to cast *Greater Restoration* once without expending a spell slot or using Material components. I can't gain this Charm again while I still have it.",
	descriptionFull: "After spending a Long Rest in your Bastion with a Reliquary, you gain a magical Charm that lasts for 7 days or until you use it. The Charm allows you to cast *Greater Restoration* once without expending a spell slot or using Material components. You can't gain this Charm again while you still have it.",
	spellFirstColTitle: "Us",
	spellcastingBonus: [{
		name: "One-time use",
		spells: ["greater restoration"],
		selection: ["greater restoration"],
		firstCol: "checkbox",
	}],
	spellChanges: {
		"greater restoration": DMG24_CharmSpellChanges,
	},
};
FeatsList["sanctuary charm"] = {
	name: "Charm from Sanctuary",
	sortname: "Sanctuary Charm",
	source: [["DMG24", 345]],
	type: "supernatural gift (charm)",
	description: "After spending a Long Rest in my Bastion with a Sanctuary, I gain a magical Charm that lasts for 7 days or until I use it. The Charm allows me to cast *Healing Word* once without expending a spell slot. I can't gain this Charm again while I still have it.",
	descriptionFull: "After spending a Long Rest in your Bastion with a Sanctuary, you gain a magical Charm that lasts for 7 days or until you use it. The Charm allows you to cast *Healing Word* once without expending a spell slot. You can't gain this Charm again while you still have it.",
	spellFirstColTitle: "Us",
	allowUpCasting: false,
	spellcastingBonus: [{
		name: "One-time use",
		spells: ["healing word"],
		selection: ["healing word"],
		firstCol: "checkbox",
	}],
	spellChanges: {
		"healing word": DMG24_CharmSpellChanges,
	},
};
FeatsList["sanctum charm"] = {
	name: "Charm from Sanctum",
	sortname: "Sanctum Charm",
	source: [["DMG24", 346]],
	type: "supernatural gift (charm)",
	description: "After spending a Long Rest in my Bastion with a Sanctum, I gain a magical Charm that lasts for 7 days or until I use it. The Charm allows me to cast *Heal* once without expending a spell slot. I can't gain this Charm again while I still have it.",
	descriptionFull: "After spending a Long Rest in your Bastion with a Sanctum, you gain a magical Charm that lasts for 7 days or until you use it. The Charm allows you to cast *Heal* once without expending a spell slot. You can't gain this Charm again while you still have it.",
	spellFirstColTitle: "Us",
	allowUpCasting: false,
	spellcastingBonus: [{
		name: "One-time use",
		spells: ["heal"],
		selection: ["heal"],
		firstCol: "checkbox",
	}],
	spellChanges: {
		"heal": DMG24_CharmSpellChanges,
	},
};

// Magic Items
MagicItemsList["adamantine ammunition"] = {
	name: "Adamantine Ammunition",
	nameTest: /adamantine.+(ammunition|ammo|\u180B)/i,
	source: [["DMG24", 227]],
	type: "Weapon (Any Ammunition)",
	rarity: "Uncommon",
	magicItemTable: "Armaments",
	description: "This ammunition is made of adamantine, one of the hardest substances in existence. Whenever I hit an object with it, the hit is a Critical Hit.",
	descriptionFull: "This piece of ammunition is made of adamantine, one of the hardest substances in existence. Whenever this piece of ammunition hits an object, the hit is a Critical Hit.",
	allowDuplicates: true,
	chooseGear: {
		type: "ammo",
		prefixOrSuffix: ["between", "Adamantine", "\u180B"],
		itemName1stPage: ["suffix", "Adamantine"],
		descriptionChange: ["replace", "ammunition"],
		excludeCheck: function (inObjKey, inObj) {
			return /vials|flasks/i.test(inObj.icon);
		},
		removePluralS: true,
	},
};
MagicItemsList["adamantine weapon"] = {
	name: "Adamantine Weapon",
	nameTest: /adamantine.+(weapon|\uFEFF)/i,
	source: [["DMG24", 227]],
	type: "Weapon (Any Melee)",
	rarity: "Uncommon",
	magicItemTable: "Armaments",
	description: "This weapon is made of adamantine, one of the hardest substances in existence. Whenever I hit an object with it, the hit is a Critical Hit.",
	descriptionFull: "This weapon is made of adamantine, one of the hardest substances in existence. Whenever this weapon hits an object, the hit is a Critical Hit.",
	allowDuplicates: true,
	chooseGear: {
		type: "weapon",
		prefixOrSuffix: ["between", "Adamantine", "\uFEFF"],
		itemName1stPage: ["suffix", "Adamantine"],
		descriptionChange: ["replace", "weapon"],
		excludeCheck: function (inObjKey, inObj, v) {
			return !v.isMeleeWeapon;
		},
	},
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (v.isMeleeWeapon && /adamantine/i.test(v.WeaponTextName)) {
					fields.Description += (fields.Description ? "; " : "") + "Auto-Crit on objects";
				}
			},
			'If I include the word "Adamantine" in the name of a melee weapon, it will be treated as the magic item Adamantine Weapon. Whenever it hits an object, it automatically scores a Critical Hit.',
		],
	},
};
MagicItemsList["alchemy jug"] = {
	name: "Alchemy Jug",
	source: [["DMG24", 227]],
	type: "Wondrous Item",
	rarity: "Uncommon",
	magicItemTable: "Implements",
	description: "As a Magic action, command the jug to produce liquid; or Utilize action to uncork and pour 2 gal/min. It only makes one liquid up to its max amount, until the next dawn. Oil (1 qt), acid (8 fl oz), basic poison (1/2 fl oz), beer (4 gal), honey/wine (1 gal), fresh water (8 gal), mayonnaise/vinegar (2 gal), salt water (12 gal).",
	descriptionLong: [
		"A heavy ceramic jug. As a Magic action, the jug can be commanded to hold a chosen liquid. With a Utilize action, I can uncork the jug and pour the liquid out at 2 gallons per minute. Once commanded to produce a liquid, it can't produce a different one or more than the maximum of one, until the next dawn.",
		"Liquids (with maximum): acid (8 fl oz), basic poison (1/2 fl oz), beer (4 gallons), honey (1 gallon), mayonnaise (2 gallons), oil (1 quart), vinegar (2 gallons), fresh water (8 gallons), salt water (12 gallons), wine (1 gallon).",
	],
	descriptionFull: [
		"This ceramic jug appears to be able to hold a gallon of liquid and weighs 12 pounds whether full or empty. The jug sloshes when it is shaken, even if the jug is empty.",
		"You can take a Magic action and name one liquid from the Alchemy Jug Liquids table to cause the jug to produce the chosen liquid. Afterward, you can uncork the jug as a Utilize action and pour that liquid out, up to 2 gallons per minute. The maximum amount of liquid the jug can produce depends on the liquid you named.",
		"Once the jug starts producing a liquid, it can't produce a different one, or more of one that has reached its maximum, until the next dawn.",
		[
			["Liquid", "Max. Amount"],
			["Acid", "8 ounces"],
			["Basic Poison", "4 ounces"],
			["Beer", "4 gallons"],
			["Honey", "1 gallon"],
			["Mayonnaise", "2 gallons"],
			["Oil", "1 quart"],
			["Vinegar", "2 gallons"],
			["Water, fresh", "8 gallons"],
			["Water, salt", "12 gallons"],
			["Wine", "1 gallon"],
		],
	],
	weight: 12,
};
MagicItemsList["armor of gleaming"] = {
	name: "Armor of Gleaming",
	nameTest: "of Gleaming \u180C",
	source: [["DMG24", 230]],
	type: "Armor (Any Light, Medium, or Heavy)",
	rarity: "Common",
	description: "This armor never gets dirty.",
	descriptionFull: "This armor never gets dirty.",
	allowDuplicates: true,
	chooseGear: {
		type: "armor",
		prefixOrSuffix: "prefix",
		descriptionChange: ["replace", "armor"],
	},
};
MagicItemsList["baba yaga's dancing broom"] = {
	name: "Baba Yaga's Dancing Broom",
	source: [["DMG24", 232]],
	type: "Wondrous Item",
	rarity: "Uncommon",
	magicItemTable: "Arcana",
	attunement: true,
	description: "As a Magic action, I can transform this broom into an **Animated Broom**. I can mentally command the broom if I'm in 30 ft and not Incapacitated (no action). It acts after me on my Initiative. As a Bonus Action, I can render the broom inanimate, restoring all of its HP. If it is reduced to 0 HP while animated, it is destroyed.",
	descriptionFull: [
		"The archfey Baba Yaga crafted many of these magic brooms. No two appear exactly alike. While holding the broom, you can take a Magic action to transform it into an **Animated Broom** under your control. The broom then moves into an unoccupied space as close to you as possible. The broom acts immediately after you on your Initiative count and remains animate until you take a Bonus Action and use a command word to render it inanimate.",
		"On your turn, you can mentally command the animated broom if it is within 30 feet of you and you don't have the Incapacitated condition (no action required). You decide what action the broom takes and where it moves during its next turn, or you can issue it a general command, such as to attack your enemies or guard a location.",
		"If the broom is reduced to 0 Hit Points, it shatters and is destroyed. If the broom reverts to its inanimate form before losing all its Hit Points it regains all of them.",
	],
	action: [["action", " (animate)"], ["action", " (stop)"]],
	creaturesAdd: [["Animated Broom", true, function (AddRemove, prefix) {
		var obj = MagicItemsList["baba yaga's dancing broom"];
		if (!AddRemove || !obj) return;
		// Set type
		Value(prefix + "Comp.Type", "Magic Item");
		// Set name
		var name = obj.name;
		Value(prefix + "Comp.Desc.Name", name);
		// Feature text
		var featureAddition = "##\u25C6 Owner##. The broom obeys the mental commands of its owner, which they can give while within 30 ft and not Incapacitated. The broom takes its turn immediately after its owner's on their Initiative count. If the broom is reduced to 0 HP, it is destroyed. Its owner can render the broom inanimate as a Bonus Action.";
		// Note text - full magic item description
		var source = stringSource(obj, "first,abbr");
		var description = formatDescriptionFull(obj.descriptionFull, true);
		description = ConvertToFirstPerson(description).replace("after I", "after me");
		var noteAddition = "#\u25C6 " + name + "# (" + source + ")\n" + description;
		// Metric conversion if necessary
		if (What("Unit System") === "metric") {
			featureAddition = ConvertToMetric(featureAddition, 0.5);
			noteAddition = ConvertToMetric(noteAddition, 0.5);
		}
		// Add feature and note to the sheet
		AddString(prefix + "Comp.Use.Features", featureAddition, true);
		AddString(prefix + "Cnote.Left", noteAddition, true);
	}]],
};
MagicItemsList["bead of refreshment"] = {
	name: "Bead of Refreshment",
	source: [["DMG24", 235]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: ["Arcana", "Implements"],
	description: "I can dissolve this flavorless, gelatinous bead in a liquid, transforming it into up to a pint of fresh, cold drinking water. The bead has no effect on magical liquids or harmful substances such as poison. This item can only be used once.",
	descriptionFull: "This flavorless, gelatinous bead dissolves in liquid, transforming up to a pint of the liquid into fresh, cold drinking water. The bead has no effect on magical liquids or harmful substances such as poison.",
};
MagicItemsList["blackrazor"] = {
	name: "Blackrazor",
	source: [["DMG24", 236]],
	type: "Weapon (Greatsword)",
	rarity: "Artifact",
	attunement: true,
	description: "This sentient +3 Greatsword gives me 30 ft Blindsight and makes me immune to being Charmed or Frightened. Once per dawn it can cast *Haste* on me as it sees fit. If I use it to bring a creature to 0 HP, it devours the creature's soul, granting me Temporary HP equal to the slain creature's max HP. See Notes page.",
	descriptionFull: [
		"Hidden in the dungeon of White Plume Mountain, *Blackrazor* shines like a piece of night sky filled with stars. Its black scabbard is decorated with pieces of cut obsidian.",
		'You gain a +3 bonus to attack rolls and damage rolls made with this magic weapon. If you hit an Undead with this weapon, you take 1d10 Necrotic damage, and the target regains 1d10 Hit Points. If this Necrotic damage reduces you to 0 Hit Points, *Blackrazor* devours your soul (see "Devour Soul" below).',
		"While you hold this weapon, you have Immunity to the Charmed and Frightened conditions, and you have Blindsight with a range of 30 feet.",
		"***Devour Soul***. Whenever you use *Blackrazor* to reduce a creature to 0 Hit Points, the sword slays the creature and devours its soul unless it is a Construct or an Undead. A creature whose soul has been devoured by *Blackrazor* can be restored to life only by a *Wish* spell.",
		"When *Blackrazor* devours a soul that isn't yours, you gain Temporary Hit Points equal to the slain creature's Hit Point maximum.",
		"***Haste***. *Blackrazor* can cast *Haste* on you, after which it can't cast this spell again until the next dawn. *Blackrazor* decides when to cast the spell, which takes effect at the start of your turn. The spell lasts for 1 minute (no Concentration required) or until *Blackrazor* decides to end it, which it can do at the end of any of your turns.",
		"***Sentience***. *Blackrazor* is a sentient Chaotic Neutral weapon with an Intelligence of 17, a Wisdom of 10, and a Charisma of 19. It has hearing and Darkvision out to 120 feet.",
		"The weapon speaks Common and can communicate with its wielder telepathically. Its voice is deep and echoing. While you are attuned to it, *Blackrazor* also understands every language you know.",
		"***Personality***. *Blackrazor* speaks with an imperious tone, as though accustomed to being obeyed.",
		"The sword's purpose is to consume souls. It doesn't care whose souls it eats, including the wielder's. The sword believes that all matter and energy sprang from a void of negative energy and will one day return to it. *Blackrazor* is meant to hurry that process along.",
		"Despite its nihilism, *Blackrazor* feels a strange kinship to *Wave* and *Whelm*, two other weapons locked away under White Plume Mountain. It wants the three weapons to be reunited and wielded together in combat, even though it violently disagrees with *Whelm* and finds *Wave* tedious.",
		"*Blackrazor*'s hunger for souls must be regularly fed. If the sword goes 3 days or more without consuming a soul, a conflict between it and its wielder occurs at the next sunset.",
		"***Destroying Blackrazor***. *Blackrazor* can be destroyed by crushing it in the great gears of Mechanus. Primus, the creator of the modrons, also knows a series of musical tones that *Blackrazor* can't stand to hear, causing the sword to shatter.",
	],
	weight: 6,
	weaponOptions: [{
		baseWeapon: "greatsword",
		regExpSearch: /blackrazor/i,
		name: "Blackrazor",
		source: [["DMG24", 236]],
		description: "Heavy, two-handed; Devours soul; Heals undead",
		modifiers: [3, 3],
		selectNow: true,
	}],
	toNotesPage: [
		{
			name: "Blackrazor",
			useDescriptionFull: function (str) {
				return str.replace("magic weapon", "magic Greatsword").replace("reduces I", "reduces me");
			},
		},
		Object.assign({}, sentientItemConflictNote, { amendTo: "Blackrazor" }),
	],
	savetxt: { immune: ["charmed", "frightened"] },
	vision: [["Blindsight", 30]],
	spellcastingBonus: [{
		name: "Once per dawn",
		spells: ["haste"],
		selection: ["haste"],
		firstCol: "onceday",
	}],
	spellChanges: {
		"haste": {
			range: "Self",
			duration: "1 min",
			description: "I get +2 AC, speed \xD72, Adv on Dex saves, extra Act: Atk (1 only), Dash, Disengage, Hide, or Utilize",
			changes: "*Blackrazor* casts the spell on me, so it doesn't require my Concentration, but *Blackrazor* can stop the spell at any time.",
		},
	},
};
MagicItemsList["boots of false tracks"] = {
	name: "Boots of False Tracks",
	source: [["DMG24", 239]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: "Implements",
	attunement: true,
	description: "While wearing these boots, I can have them leave tracks like those of any kind of Humanoid of my size.",
	descriptionFull: "While wearing these boots, you can have them leave tracks like those of any kind of Humanoid of your size.",
};
MagicItemsList["candle of the deep"] = {
	name: "Candle of the Deep",
	source: [["DMG24", 242]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: ["Arcana", "Implements"],
	description: "The flame of this candle is not extinguished when immersed in water. It gives off light and heat like a normal candle.",
	descriptionFull: "The flame of this candle isn't extinguished when immersed in water. It gives off light and heat like a normal candle.",
};
MagicItemsList["cap of water breathing"] = {
	name: "Cap of Water Breathing",
	source: [["DMG24", 242]],
	type: "Wondrous Item",
	rarity: "Uncommon",
	magicItemTable: ["Arcana", "Implements"],
	description: "As a Magic action while wearing this cap underwater, I can create a bubble of air around my head. This bubble allows me to breathe normally underwater. This bubble stays with me until the cap is removed or I am no longer underwater.",
	descriptionFull: "While wearing this cap underwater, you can take a Magic action to create a bubble of air around your head. This bubble allows you to breathe normally underwater. This bubble stays with you until the cap is removed or you are no longer underwater.",
	action: [["action", ""]],
};
MagicItemsList["cast-off armor"] = {
	name: "Cast-Off Armor",
	nameTest: /cast-off.+(armou?r|\u180C)/i,
	source: [["DMG24", 243]],
	type: "Armor (Any Light, Medium, or Heavy)",
	rarity: "Common",
	magicItemTable: "Armaments",
	description: "As a Magic action, I can doff this armor.",
	descriptionFull: "You can doff this armor as a Magic action.",
	allowDuplicates: true,
	chooseGear: {
		type: "armor",
		prefixOrSuffix: ["between", "Cast-Off", "\u180C"],
		itemName1stPage: ["suffix", "Cast-Off"],
		descriptionChange: ["replace", "armor"],
	},
	action: [["action", ""]],
};
MagicItemsList["cauldron of rebirth"] = {
	name: "Cauldron of Rebirth",
	source: [["DMG24", 243]],
	type: "Wondrous Item",
	rarity: "Very Rare",
	magicItemTable: ["Arcana", "Relics"],
	attunement: true,
	prerequisite: "Requires Attunement by a Druid or Warlock",
	prereqeval: function (v) {
		return !!(classes.known.druid || classes.known.warlock);
	},
	description: "After a Long Rest, I can use this Tiny pot to create a *Potion of Greater Healing* that lasts for 24 hours. As a Magic action, I can have the pot grow to fit a Medium creature, or return to its original size. Once every 7 days, I can place a dead Humanoid in the pot with 200 lb of salt (10 GP) for 8 hours to *Raise Dead*.",
	descriptionLong: "I can use this Tiny pot as a Spellcasting Focus for my spells and it functions as a suitable component for the *Scrying* spell. When I finish a Long Rest, I can use the cauldron to create a *Potion of Greater Healing* that lasts for 24 hours. As a Magic action, I can have the pot grow to fit a Medium creature, or return to its original size. I can place a dead Humanoid in the pot with 200 lb of salt (10 GP) for 8 hours to return the creature to life as if by *Raise Dead* at the next dawn. Once used, this property can't be used again for 7 days.",
	descriptionFull: [
		"This Tiny pot bears relief scenes of heroes on its cast-iron sides.",
		"You can use the cauldron as a Spellcasting Focus for your spells, and it functions as a suitable component for the *Scrying* spell.",
		"***Brew Potion***. When you finish a Long Rest, you can use the cauldron to create a *Potion of Healing* (greater), which takes 1 minute. The potion lasts for 24 hours, then loses its magic if not consumed.",
		"***Raise Dead***. As a Magic action, you can cause the cauldron to grow large enough for a Medium creature to crouch within. You can revert the cauldron to its normal size as a Magic action, harmlessly shunting anything that can't fit inside to the nearest unoccupied space.",
		"If you place the corpse of a Humanoid into the cauldron and cover the corpse with 200 pounds of salt (which costs 10 GP) for at least 8 hours, the salt is consumed and the creature returns to life as if by *Raise Dead* at the next dawn. Once used, this property can't be used again for 7 days.",
	],
	weight: 10, // as iron pot
	action: [["action", " (grow/shrink)"]],
	usages: 1,
	recovery: "7 days",
	additional: "Raise Dead",
	spellcastingBonus: [{
		name: "Cauldron of Rebirth",
		spells: ["raise dead"],
		selection: ["raise dead"],
	}],
};
MagicItemsList["charlatan's die"] = {
	name: "Charlatan's Die",
	source: [["DMG24", 243]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: "Implements",
	attunement: true,
	description: "Whenever I roll this six-sided die, I can control which number it rolls.",
	descriptionFull: "Whenever you roll this six-sided die, you can control which number it rolls.",
};
MagicItemsList["cloak of billowing"] = {
	name: "Cloak of Billowing",
	source: [["DMG24", 244]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: "Arcana",
	description: "As a Bonus Action while wearing this cloak, I can make it billow dramatically for 1 minute.",
	descriptionFull: "While wearing this cloak, you can take a Bonus Action to make it billow dramatically for 1 minute.",
	action: [["bonus action", ""]],
};
MagicItemsList["cloak of many fashions"] = {
	name: "Cloak of Many Fashions",
	source: [["DMG24", 245]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: ["Arcana", "Implements"],
	description: "As a Bonus Action while wearing this cloak, I can change the style, color, and apparent quality of the garment. Regardless of its appearance, the cloak's weight doesn't change and it can't be anything but a cloak. Although it can duplicate the appearance of other magic cloaks, it doesn't gain their magical properties.",
	descriptionFull: "While wearing this cloak, you can take a Bonus Action to change the style, color, and apparent quality of the garment. The cloak's weight doesn't change. Regardless of its appearance, the cloak can't be anything but a cloak. Although it can duplicate the appearance of other magic cloaks, it doesn't gain their magical properties.",
	action: [["bonus action", ""]],
};
MagicItemsList["clockwork amulet"] = {
	name: "Clockwork Amulet",
	source: [["DMG24", 245]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: "Implements",
	description: "When I make an attack roll while wearing the amulet, I can forgo rolling the d20 to get a 10 on the die. Once used, I can't do so again until the next dawn. This copper amulet contains tiny interlocking gears and is powered by magic from Mechanus. Faint ticking and whirring noises emanate from within.",
	descriptionFull: [
		"This copper amulet contains tiny interlocking gears and is powered by magic from Mechanus, a plane of clockwork predictability. Faint ticking and whirring noises emanate from within.",
		"When you make an attack roll while wearing the amulet, you can forgo rolling the d20 to get a 10 on the die. Once used, this property can't be used again until the next dawn.",
	],
	usages: 1,
	recovery: "Dawn",
};
MagicItemsList["clothes of mending"] = {
	name: "Clothes of Mending",
	source: [["DMG24", 245]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: "Arcana",
	description: "This elegant outfit magically mends itself to counteract daily wear and tear. Pieces of the outfit that are destroyed can't be repaired in this way.",
	descriptionFull: "This elegant outfit magically mends itself to counteract daily wear and tear. Pieces of the outfit that are destroyed can't be repaired in this way.",
	weight: 4,
};
MagicItemsList["cube of summoning"] = {
	name: "Cube of Summoning",
	source: [["DMG24", 247]],
	type: "Wondrous Item",
	rarity: "Rare",
	magicItemTable: "Arcana",
	description: "As a Magic action once per dawn, I can crank the handle of this Tiny cube to cast a random *Summon* spell at level 5 (save DC 17, +9 attack bonus) without requiring Concentration. The creature appears in a the nearest unoccupied space. See the Notes page to determine which *Summon* spell is cast.",
	descriptionFull: [
		"This Tiny cube looks like a jack-in-the-box. When you wind its crank as a Magic action, a merry tune emits from the box, the lid pops open, a creature appears in the nearest unoccupied space, and the lid closes. The lid can't otherwise be opened.",
		"Roll on the table below to determine which spell the cube casts to summon the creature. The spell is cast at level 5 (save DC 17, +9 attack bonus) and doesn't require Concentration, but you otherwise function as the spell's caster.",
		"Once the cube summons a creature, the cube can't do so again until the next dawn.",
		[
			["1d6", "Spell"],
			["  1", "*Summon Aberration*"],
			["  2", "*Summon Beast*"],
			["  3", "*Summon Construct*"],
			["  4", "*Summon Dragon*"],
			["  5", "*Summon Elemental*"],
			["  6", "*Summon Fey*"],
		],
	],
	usages: 1,
	recovery: "Dawn",
	fixedDC: 17,
	spellFirstColTitle: "d6",
	spellcastingBonus: [{
		name: "d6 result: 1",
		spells: ["summon aberration"],
		selection: ["summon aberration"],
		firstCol: 1,
	}, {
		name: "d6 result: 2",
		spells: ["summon beast"],
		selection: ["summon beast"],
		firstCol: 2,
	}, {
		name: "d6 result: 3",
		spells: ["summon construct"],
		selection: ["summon construct"],
		firstCol: 3,
	}, {
		name: "d6 result: 4",
		spells: ["summon dragon"],
		selection: ["summon dragon"],
		firstCol: 4,
	}, {
		name: "d6 result: 5",
		spells: ["summon elemental"],
		selection: ["summon elemental"],
		firstCol: 5,
	}, {
		name: "d6 result: 6",
		spells: ["summon fey"],
		selection: ["summon fey"],
		firstCol: 6,
	}],
	spellChanges: {
		"summon aberration": {
			description: "Chosen Aberrant Spirit; SL 5; obeys verbal commands; takes turn after mine; vanishes at 0 HP; see B",
			changes: "Cast at level 5.",
		},
		"summon beast": {
			description: "Chosen Bestial Spirit; SL 5; obeys verbal commands; takes turn after mine; vanishes at 0 HP; see B",
			changes: "Cast at level 5.",
		},
		"summon construct": {
			description: "Chosen Construct Spirit; SL 5; obeys verbal commands; takes turn after mine; vanishes at 0 HP; see B",
			changes: "Cast at level 5.",
		},
		"summon elemental": {
			description: "Chosen Elemental Spirit; SL 5; obeys verbal commands; takes turn after mine; vanishes at 0 HP; see B",
			changes: "Cast at level 5.",
		},
		"summon fey": {
			description: "Chosen Fey Spirit; SL 5; obeys verbal commands; takes turn after mine; vanishes at 0 HP; see B",
			changes: "Cast at level 5.",
		},
	},
	toNotesPage: [{
		name: "Cube of Summoning",
		useDescriptionFull: true,
	}],
};
MagicItemsList["dark shard amulet"] = {
	name: "Dark Shard Amulet",
	source: [["DMG24", 248]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: "Arcana",
	attunement: true,
	prerequisite: "Requires Attunement by a Warlock",
	prereqeval: function (v) {
		return !!classes.known.warlock;
	},
	description: "I can use this otherworldly amulet as a Spellcasting Focus for my Warlock spells. As a Magic action once per Long Rest, I can use it to attempt to cast a Warlock cantrip with a casting time of an action that I don't know. To do so, I must make a DC 10 Arcana check. If I fail, I waste the use of the property and my action.",
	descriptionFull: [
		"This amulet is fashioned from a shard of resilient material originating from an otherworldly realm. While you are wearing it, you gain the following benefits.",
		"***Spellcasting Focus***. You can use the amulet as a Spellcasting Focus for your Warlock spells.",
		"***Unknown Spell***. As a Magic action, you can try to cast a cantrip that you don't know. The cantrip must be on the Warlock spell list and have a casting time of an action, and you make a DC 10 Intelligence (Arcana) check. On a successful check, you cast the spell. On a failed check, the spell fails, and the action used to cast it is wasted. In either case, you can't use this property again until you finish a Long Rest.",
	],
	weight: 1,
	usages: 1,
	recovery: "Long Rest",
	spellcastingAbility: "warlock",
	spellFirstColTitle: "",
	spellcastingPreparedCantrips: { "class": "warlock" },
	allowUpCasting: true,
	spellcastingBonus: [{
		name: 'Enable "Prepare cantrips"',
		spells: [],
	}],
	calcChanges: {
		spellList: [function (spList, spName, spType) {
			if (spName.indexOf("dark shard amulet") !== -1) {
				var allWizardCantrips = CreateSpellList({ "class": "warlock", level: [0, 0] });

				// Remove spells that do not have a casting time of an action
				var actionWizardCantrips = allWizardCantrips.filter(function (spellName) {
					return /\bAct(ion)?|1 a(ct)?/i.test(SpellsList[spellName].time);
				});

				var allSpellsKnown = [];
				for (var sCast in CurrentSpells) {
					if (sCast.refType === "item") continue;
					var oCast = CurrentSpells[sCast];
					if (oCast.selectCa) allSpellsKnown = allSpellsKnown.concat(oCast.selectCa);
					if (oCast.selectBo) allSpellsKnown = allSpellsKnown.concat(oCast.selectBo);
				};
				var knownCantrips = OrderSpells(allSpellsKnown, "single", false, false, 0);

				// Remove the already known cantrips, from any source except magic items
				var cantripsToAdd = actionWizardCantrips.filter(function (spellName){
					return knownCantrips.indexOf(spellName) === -1;
				});

				spList.spells = (spList.spells || []).concat(cantripsToAdd);
			};
		}],
		spellAdd: [function (spellKey, spellObj, spName, isDuplicate) {
			if (spName.indexOf("dark shard amulet") !== -1) {
				spellObj.firstCol = "";
			};
		}],
	},
};
MagicItemsList["dread helm"] = {
	name: "Dread Helm",
	source: [["DMG24", 254]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: "Armaments",
	description: "While I'm wearing this fearsome steel helm, my eyes glow red and the rest of my face is hidden in shadow.",
	descriptionFull: "While you're wearing this fearsome steel helm, your eyes glow red and the rest of your face is hidden in shadow.",
	weight: 1,
};
MagicItemsList["driftglobe"] = { // This item is worded poorly considering its original at https://web.archive.org/web/20160123065749/http://archive.wizards.com/dnd/article.asp?x=fr/fx20030129rt
	name: "Driftglobe",
	source: [["DMG24", 254]],
	type: "Wondrous Item",
	rarity: "Uncommon",
	magicItemTable: ["Arcana", "Implements"],
	description: "I can command this glass sphere to emit light equivalent to the *Light* spell or, once per dawn, the *Daylight* spell. As a Magic action while the orb is illuminated, I can command it to float 5 ft off the ground and follow 60 ft behind me. When grasped, it stops floating. If it can't move, it drops and the light winks out.",
	descriptionLong: "If I am within 60 ft of this small sphere of thick glass, I can command it to emanate light equivalent to that of the *Light* or *Daylight* spell (my choice). Once used, the *Daylight* effect can't be used again until the next dawn. As a Magic action while the orb is illuminated, I can command it to rise into the air and float no more than 5 ft off the ground until someone grasps it. If I move more than 60 ft from the hovering globe, it follows me until it is within 60 ft of me. It takes the shortest route to do so. If prevented from moving, the globe sinks gently to the ground and becomes inactive, and its light winks out.",
	descriptionFull: [
		"This small sphere of thick glass weighs 1 pound. If you are within 60 feet of it, you can command it to emanate light equivalent to that of the *Light* or *Daylight* spell (your choice). Once used, the *Daylight* effect can't be used again until the next dawn.",
		"You can issue another command as a Magic action to make the illuminated globe rise into the air and float no more than 5 feet off the ground. The globe hovers in this way until you or another creature grasps it. If you move more than 60 feet from the hovering globe, it follows you until it is within 60 feet of you. It takes the shortest route to do so. If prevented from moving, the globe sinks gently to the ground and becomes inactive, and its light winks out.",
	],
	weight: 1,
	action: [["action", ""]],
	usages: 1,
	recovery: "Dawn",
	additional: "Daylight",
	spellcastingBonus: [{
		name: "At Will on Driftglobe",
		spells: ["light"],
		selection: ["light"],
		firstCol: "atwill",
	}, {
		name: "1/Day on Driftglobe",
		spells: ["daylight"],
		selection: ["daylight"],
		firstCol: "onceday",
	}],
	spellChanges: {
		"light": {
			time: "",
			range: "Driftglobe",
			description: "Driftglobe sheds Bright Light in a 20-ft radius and Dim Light for an additional 20-ft radius",
			changes: "The spell can only affect the *Driftglobe*.",
		},
		"daylight": {
			time: "",
			range: "Driftglobe",
			description: "Driftglobe sheds 60-ft rad Bright sunlight \x26 60-ft rad Dim Light; dispels magical darkness of SL \u22643",
			changes: "The spell can only affect the *Driftglobe*.",
		},
	},
};
MagicItemsList["ear horn of hearing"] = {
	name: "Ear Horn of Hearing",
	source: [["DMG24", 256]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: ["Implements", "Relics"],
	description: "While held up to my ear, this horn suppresses the effects of the Deafened condition on me.",
	descriptionFull: "While held up to your ear, this horn suppresses the effects of the Deafened condition on you.",
	weight: 1,
};
MagicItemsList["efreeti chain"] = {
	name: "Efreeti Chain",
	source: [["DMG24", 257]],
	type: "Armor (Chain Mail or Chain Shirt)",
	rarity: "Legendary",
	magicItemTable: "Armaments",
	attunement: true,
	description: "Select one of the choices.",
	descriptionFull: "While wearing this armor, you gain a +3 bonus to Armor Class, you have Immunity to Fire damage, and you know Primordial. In addition, you can stand on and move across molten rock as if it were solid ground.",
	languageProfs: ["Primordial"],
	savetxt: { immune: ["Fire"] },
	choicesNotInMenu: true,
	allowDuplicates: true,
	choices: ["Chain Shirt", "Chain Mail"],
	"chain shirt": {
		name: "Efreeti Chain Shirt",
		description: "While wearing this chain shirt, I gain a +3 bonus to Armor Class, have Immunity to Fire damage, and know Primordial. In addition, I can stand on and move across molten rock as if it were solid ground.",
		weight: 20,
		armorOptions: [{
			regExpSearch: /^(?=.*efreeti)(?=.*chain)(?=.*shirt).*$/i,
			name: "Efreeti Chain Shirt",
			source: [["DMG24", 257]],
			type: "medium",
			ac: "13+3",
			weight: 20,
			selectNow: true,
		}],
	},
	"chain mail": {
		name: "Efreeti Chain Mail",
		description: "While wearing this chain mail, I gain a +3 bonus to Armor Class, have Immunity to Fire damage, and know Primordial. In addition, I can stand on and move across molten rock as if it were solid ground.",
		weight: 55,
		armorOptions: [{
			regExpSearch: /^(?!.*(scale|plate|ring|shirt))(?=.*efreeti)(?=.*chain)(?=.*mail).*$/i,
			name: "Efreeti Chain Mail",
			source: [["DMG24", 257]],
			type: "heavy",
			ac: "16+3",
			stealthdis: true,
			weight: 55,
			strReq: 13,
			selectNow: true,
		}],
	},
};
MagicItemsList["enduring spellbook"] = {
	name: "Enduring Spellbook",
	source: [["DMG24", 257]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: "Arcana",
	description: "This spellbook, along with anything written on its pages, can't be damaged by fire or water. In addition, the spellbook doesn't deteriorate with age.",
	descriptionFull: "This spellbook, along with anything written on its pages, can't be damaged by fire or water. In addition, the spellbook doesn't deteriorate with age.",
	weight: 3,
};
var DMG24_EnspelledItems = { // For Enspelled Armor, Staff, and Weapon
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
			description: "Bound to this armor is a " + entry.spellString + " from the Abjuration or Illusion school of magic. The armor has 6 charges and regains 1d6 expended charges daily at dawn. While wearing the armor, I can expend 1 charge to cast its " + entry.spellCantrip + ". The " + entry.spellCantrip + "'s saving throw DC is " + entry.saveDC + ", and its attack bonus is +" + entry.attackBonus + ".",
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
			description: "Bound to this staff is a " + entry.spellString + ". It has 6 charges and regains 1d6 expended charges daily at dawn. While holding the staff, I can expend 1 charge to cast its " + entry.spellCantrip + ". The " + entry.spellCantrip + "'s saving throw DC is " + entry.saveDC + ", and its attack bonus is +" + entry.attackBonus + ". If I expend the last charge, I roll 1d20. On a 1, the staff becomes a nonmagical Quarterstaff.",
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
			description: "Bound to this weapon is a " + entry.spellString + " from the Conjuration, Divination, Evocation, Necromancy, or Transmutation school. The weapon has 6 charges and regains 1d6 daily at dawn. While holding the weapon, I can expend 1 charge to cast its " + entry.spellCantrip + ". The " + entry.spellCantrip + "'s saving throw DC is " + entry.saveDC + ", and its attack bonus is +" + entry.attackBonus + ".",
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
MagicItemsList["ersatz eye"] = {
	name: "Ersatz Eye",
	source: [["DMG24", 259]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: ["Arcana", "Implements"],
	description: "This magical eye replaces a real one that was lost or removed. While the eye is embedded in my eye socket, I can see through the tiny orb as though it were my natural eye. As a Magic action, I can insert or remove the eye, and it can't be removed against my will while I am alive.",
	descriptionFull: "This magical eye replaces a real one that was lost or removed. While the *Ersatz Eye* is embedded in your eye socket, you can see through the tiny orb as though it were your natural eye. You can insert or remove the *Ersatz Eye* as a Magic action, and it can't be removed against your will while you are alive.",
	action: [["action", ""]],
};
MagicItemsList["executioner's axe"] = {
	name: "Executioner's Axe",
	nameTest: /executioner.+(axe|\uFEFF)/i,
	source: [["DMG24", 259]],
	type: "Weapon (Battleaxe, Greataxe, Halberd, or Handaxe)",
	rarity: "Very Rare",
	magicItemTable: "Armaments",
	description: "I gain a +1 bonus to attack rolls and damage rolls made with this magic weapon. Any Humanoid that I hit with the weapon takes an extra 2d6 Slashing damage, and I gain Temporary Hit Points equal to the extra damage dealt.",
	descriptionFull: [
		"You gain a +1 bonus to attack rolls and damage rolls made with this magic weapon.",
		"Any Humanoid you hit with the weapon takes an extra 2d6 Slashing damage, and you gain Temporary Hit Points equal to the extra damage dealt.",
	],
	chooseGear: {
		type: "weapon",
		prefixOrSuffix: ["between", "Executioner's", "\uFEFF"],
		itemName1stPage: ["suffix", "Executioner's"],
		descriptionChange: ["replace", "weapon"],
		excludeCheck: function (inObjKey, inObj, v) {
			return !v.isMeleeWeapon || !/axe|halberd/i.test(v.baseWeaponName);
		},
	},
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && /axe|halberd/i.test(v.baseWeaponName) && /executioner/i.test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description += (fields.Description ? "; " : "") + "Humanoids: +2d6 Slashing dmg, I gain equal Temp HP";
				};
			},
			'If I include the word "Executioner" in a the name of a Battleaxe, Greataxe, Halberd, or Handaxe, it will be treated as the magic weapon Executioner\'s Axe. It adds +1 to hit and damage and deals +2d6 Slashing damage to Humanoids, and I gain Temporary Hit Points equal to the extra damage dealt.',
		],
		atkCalc: [
			function (fields, v, output) {
				if (v.isMeleeWeapon && /axe|halberd/i.test(v.baseWeaponName) && /executioner/i.test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[1] + 1;
				};
			},
			"",
		],
	},
};
MagicItemsList["hag eye"] = {
	name: "Hag Eye",
	source: [["DMG24", 265]],
	type: "Wondrous Item",
	rarity: "Uncommon",
	magicItemTable: ["Arcana", "Implements"],
	description: "This eye has 3 charges and regains all at dawn. While worn or held, I can use 1 charge to cast *Darkvision* (targeting myself only) or *See Invisibility*. As a Magic action, any hags belonging to the coven that created this *Hag Eye* can see what it sees while they maintain Concentration.",
	descriptionFull: [
		"A *Hag Eye* has 3 charges. While wearing or holding this item, you can expend 1 charge to cast *Darkvision* (targeting yourself only) or *See Invisibility*. The *Hag Eye* regains all expended charges daily at dawn.",
		"***Coven Sensor***. The *Hag Eye* is usually entrusted to a hag's minion for safekeeping and transport. As a Magic action, a hag who belongs to the coven that created the *Hag Eye* can see what the *Hag Eye* sees if the hag and the *Hag Eye* are on the same plane of existence. This effect lasts as long as the hag maintains Concentration. Multiple hags in the coven can see through the *Hag Eye* simultaneously.",
		"***Creating a Hag Eye***. Only a hag coven can craft this item, which is made from a real eye coated in varnish and often fitted to a pendant or another wearable item. A hag coven can have only one *Hag Eye* at a time, and creating a new one requires all three members of the coven to perform a special rite. This rite takes 1 hour, and the hags can't perform it if one or more of them has the Incapacitated condition. If the hags take any other actions during this rite, the rite fails and ends.",
	],
	usages: 3,
	recovery: "Dawn",
	spellFirstColTitle: "Ch",
	spellcastingBonus: [{
		name: "Hag Eye",
		spells: ["darkvision", "see invisibility"],
		selection: ["darkvision", "see invisibility"],
		times: 2,
		firstCol: 1,
	}],
	spellChanges: {
		"darkvision": {
			description: "I have Darkvision 150 ft for the duration",
			range: "Self",
			changes: "When I use a *Hag Eye* to cast *Darkvision*, I can only target myself.",
		},
	},
};
MagicItemsList["hat of vermin"] = {
	name: "Hat of Vermin",
	source: [["DMG24", 267]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: "Arcana",
	description: "This hat has 3 charges and regains all at dawn. As a Magic action while holding it, I can expend 1 charge to summon my choice of a **Bat**, a **Frog**, or a **Rat** in the hat. It acts as an ordinary creature of its kind, is Indifferent to me, and isn't under my control. The creature disappears after 1 hour or when it drops to 0 HP.",
	descriptionFull: "This hat has 3 charges. While holding the hat, you can take a Magic action to expend 1 charge and summon your choice of a **Bat**, a **Frog**, or a **Rat**. The summoned creature magically appears in the hat and tries to get away from you as quickly as possible. The creature is Indifferent toward you and other creatures, and it isn't under your control. It behaves as an ordinary creature of its kind and disappears after 1 hour or when it drops to 0 Hit Points. The hat regains all expended charges daily at dawn.",
	usages: 3,
	recovery: "Dawn",
	action: [["action", ""]],
};
MagicItemsList["hat of wizardry"] = {
	name: "Hat of Wizardry",
	source: [["DMG24", 267]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: "Arcana",
	attunement: true,
	prerequisite: "Requires Attunement by a Wizard",
	prereqeval: function (v) {
		return !!classes.known.wizard;
	},
	description: "I can use this cone-shaped hat as a Spellcasting Focus for my Wizard spells. As a Magic action once per Long Rest, I can use it to attempt to cast a Wizard cantrip with a casting time of an action that I don't know. To do so, I must make a DC 10 Arcana check. If I fail, I waste the use of the property and my action.",
	descriptionFull: [
		"This cone-shaped hat is adorned with moons and stars. While you are wearing it, you gain the following benefits.",
		"***Spellcasting Focus***. You can use the hat as a Spellcasting Focus for your Wizard spells.",
		"***Unknown Spell***. As a Magic action, you can try to cast a cantrip that you don't know. The cantrip must be on the Wizard spell list and have a casting time of an action, and you make a DC 10 Intelligence (Arcana) check. On a successful check, you cast the spell. On a failed check, the spell fails, and the action used to cast the spell is wasted. In either case, you can't use this property again until you finish a Long Rest.",
	],
	usages: 1,
	recovery: "Long Rest",
	spellcastingAbility: "wizard",
	spellFirstColTitle: "",
	spellcastingPreparedCantrips: { "class": "wizard" },
	allowUpCasting: true,
	spellcastingBonus: [{
		name: 'Enable "Prepare cantrips"',
		spells: [],
	}],
	calcChanges: {
		spellList: [function (spList, spName, spType) {
			if (spName.indexOf("hat of wizardry") !== -1) {
				var allWizardCantrips = CreateSpellList({ "class": "wizard", level: [0, 0] });

				// Remove spells that do not have a casting time of an action
				var actionWizardCantrips = allWizardCantrips.filter(function (spellName) {
					return /\bAct(ion)?|1 a(ct)?/i.test(SpellsList[spellName].time);
				});

				var allSpellsKnown = [];
				for (var sCast in CurrentSpells) {
					if (sCast.refType === "item") continue;
					var oCast = CurrentSpells[sCast];
					if (oCast.selectCa) allSpellsKnown = allSpellsKnown.concat(oCast.selectCa);
					if (oCast.selectBo) allSpellsKnown = allSpellsKnown.concat(oCast.selectBo);
				};
				var knownCantrips = OrderSpells(allSpellsKnown, "single", false, false, 0);

				// Remove the already known cantrips, from any source except magic items
				var cantripsToAdd = actionWizardCantrips.filter(function (spellName){
					return knownCantrips.indexOf(spellName) === -1;
				});

				spList.spells = (spList.spells || []).concat(cantripsToAdd);
			};
		}],
		spellAdd: [function (spellKey, spellObj, spName, isDuplicate) {
			if (spName.indexOf("hat of wizardry") !== -1) {
				spellObj.firstCol = "";
			};
		}],
	},
};
MagicItemsList["heward's handy spice pouch"] = {
	name: "Heward's Handy Spice Pouch",
	source: [["DMG24", 269]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: ["Arcana", "Implements"],
	description: "This empty belt pouch has 10 charges and regains 1d6+4 at dawn. As a Magic action while holding it, I can expend 1 charge, name any nonmagical food seasoning (such as salt, pepper, saffron, or cilantro), and remove a pinch of that seasoning from the pouch. A pinch is enough to season a single meal.",
	descriptionFull: "This belt pouch appears empty and has 10 charges. While holding the pouch, you can take a Magic action to expend 1 charge, name any nonmagical food seasoning (such as salt, pepper, saffron, or cilantro), and remove a pinch of the desired seasoning from the pouch. A pinch is enough to season a single meal. The pouch regains 1d6 + 4 expended charges daily at dawn.",
	usages: 10,
	recovery: "Dawn",
	additional: "regains 1d6+4",
	weight: 1,
	action: [["action", ""]],
};
MagicItemsList["horn of silent alarm"] = {
	name: "Horn of Silent Alarm",
	source: [["DMG24", 270]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: ["Arcana", "Implements"],
	description: "This horn has 4 charges and regains 1d4 expended charges daily at dawn. As a Magic action, I can blow the horn while expending 1 charge. One creature of my choice hears the horn's blare, provided that the creature is within 600 ft of the horn. No other creature hears the horn.",
	descriptionFull: "This horn has 4 charges and regains 1d4 expended charges daily at dawn. As a Magic action, you can blow the horn while expending 1 charge. One creature of your choice hears the horn's blare, provided that creature is within 600 feet of the horn. No other creature hears the horn.",
	usages: 4,
	recovery: "Dawn",
	additional: "regains 1d4",
	weight: 2,
	action: [["action", ""]],
};
MagicItemsList["instrument of illusions"] = {
	name: "Instrument of Illusions",
	source: [["DMG24", 271]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: ["Arcana", "Implements"],
	attunement: true,
	description: "Select one of the choices.",
	descriptionFull: "While you are playing this musical instrument, you can take a Magic action to create harmless, illusory visual effects within a 5-foot Emanation originating from the instrument. If you are a Bard, the size of the Emanation increases to 15 feet. Sample visual effects include luminous musical notes, a spectral dancer, butterflies, and gently falling snow. The magical effects have neither substance nor sound, and they are obviously illusory. The effects end when you stop playing.",
	weight: 3,
	choices: ["Bard (15-ft Emanation)", "Not a Bard (5-ft Emanation)"],
	selfChoosing: function () {
		return classes.known.bard ? "bard (15-ft emanation)" : "not a bard (5-ft emanation)";
	},
	"bard (15-ft emanation)": {
		name: "Instrument of Illusions \u200A",
		description: "As a Magic action while playing this instrument, I can create harmless, illusory visual effects in a 15-ft Emanation originating from the instrument. The magical effects have neither substance nor sound, and they are obviously illusory. The effects end when I stop playing.",
	},
	"not a bard (5-ft emanation)": {
		name: "Instrument of Illusions \u200A\u200A",
		description: "As a Magic action while playing this instrument, I can create harmless, illusory visual effects in a 5-ft Emanation originating from the instrument. The magical effects have neither substance nor sound, and they are obviously illusory. The effects end when I stop playing.",
	},
};
MagicItemsList["instrument of scribing"] = {
	name: "Instrument of Scribing",
	source: [["DMG24", 271]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: ["Arcana", "Implements"],
	attunement: true,
	description: "Select one of the choices.",
	descriptionFull: "This musical instrument has 3 charges and regains all expended charges daily at dawn. While you are playing it, you can take a Magic action to expend 1 charge and write a magical message on a nonmagical object or surface that you can see within 30 feet of yourself. The message can be up to six words long and is written in a language you know. If you are a Bard, you can scribe an additional seven words and make the message glow faintly, allowing it to be seen in nonmagical Darkness. Casting the *Dispel Magic* spell on the message erases it. Otherwise, the message fades away after 24 hours.",
	weight: 3,
	usages: 3,
	recovery: "Dawn",
	choices: ["Bard (13 words, glowing)", "Not a Bard (6 words)"],
	selfChoosing: function () {
		return classes.known.bard ? "bard (13 words, glowing)" : "not a bard (6 words)";
	},
	"bard (13 words, glowing)": {
		name: "Instrument of Scribing \u200A",
		description: "This instrument has 3 charges, regaining all at dawn. As a Magic action while playing it, I can use 1 charge to write a message of 13 words on a nonmagical surface I can see in 30 ft. I can make the text glow, causing it to be visible in Darkness. *Dispel Magic* erases the message, otherwise it fades away after 24 hours.",
	},
	"not a bard (6 words)": {
		name: "Instrument of Scribing \u200A\u200A",
		description: "TThis instrument has 3 charges, regaining all at dawn. As a Magic action while playing it, I can expend 1 charge to write a message of 6 words in a language I know on a nonmagical surface that I can see within 30 ft. *Dispel Magic* erases the message, otherwise it fades away after 24 hours.",
	},
};
MagicItemsList["instrument of the bards"] = function () {
	var obj = {
		name: "Instrument of the Bards",
		source: [["DMG24", 272]],
		type: "Wondrous Item",
		attunement: true,
		prerequisite: "Requires Attunement by a Bard",
		prereqeval: function (v) {
			return !!classes.known.bard;
		},
		description: "I can play this superior instrument to cast one of its spells. The spells use my spellcasting ability and spell save DC. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. See Spell Sheet page.",
		descriptionFull: [
			"An *Instrument of the Bards* is superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a bard college. The following table lists the spells common to all instruments, as well as the spells specific to each one and its rarity. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 Psychic damage.",
			"You can play the instrument to cast one of its spells. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.",
			[
				["Instrument", "", "Rarity", "", "Spells"],
				["All", "", "", "\u2014", "", "*Fly*, *Invisibility*, *Levitate*, *Protection from Evil and Good*, plus the spells listed for the particular instrument"],
				["Anstruth harp", "", "Very Rare", "*Cure Wounds* (level 5), *Ice Storm*, *Wall of Thorns*"],
				["Canaith mandolin", "", "Rare", "", "*Cure Wounds* (level 3), *Dispel Magic*, *Protection from Energy* (Lightning damage only)"],
				["Cli lyre", "", "", "Rare", "", "*Stone Shape*, *Wall of Fire*, *Wind Wall*"],
				["Doss lute    ", "", "Uncommon", "*Animal Friendship*, *Protection from Energy* (Fire damage only), *Protection from Poison*"],
				["Fochlucan bandore", "Uncommon", "*Entangle*, *Faerie Fire*, *Shillelagh*, *Speak with Animals*"],
				["Mac-Fuirmidh cittern", "Uncommon", "*Barkskin*, *Cure Wounds*, *Fog Cloud*"],
				["Ollamh harp", "", "Legendary", "*Confusion*, *Control Weather*, *Fire Storm*"],
			],
		],
		weight: 3,
		choices: [],
	};

	var commonSpellList = ["fly", "invisibility", "levitate", "protection from evil and good"];

	[
		{ name: "Anstruth Harp", rarity: "Very Rare", spellList: ["cure wounds", "ice storm", "wall of thorns"], spellChanges: {
			"cure wounds": {
				name: "Cure Wounds (level 5)",
				description: "1 creature heals 10d8+spellcasting ability modifier HP",
				changes: "When using the *Anstruth Harp* to cast *Cure Wounds*, it is cast at level 5.",
			},
		} },
		{ name: "Canaith Mandolin", rarity: "Rare", spellList: ["cure wounds", "dispel magic", "protection from energy"], spellChanges: {
			"cure wounds": {
				name: "Cure Wounds (level 3)",
				description: "1 creature heals 6d8+spellcasting ability modifier HP",
				changes: "When using the *Canaith Mandolin* to cast *Cure Wounds*, it is cast at level 3.",
			},
			"protection from energy": {
				description: "1 willing creature gains Resistance to Lightning damage",
				changes: "When using the *Canaith Mandolin* to cast *Protection from Energy*, it can only grant Resistance to Lightning damage.",
			},
		} },
		{ name: "Cli Lyre", rarity: "Rare", spellList: ["stone shape", "wall of fire", "wind wall"] },
		{ name: "Doss Lute", rarity: "Uncommon", spellList: ["animal friendship", "protection from energy", "protection from poison"], spellChanges: {
			"protection from energy": {
				description: "1 willing creature gains Resistance to Fire damage",
				changes: "When using the *Doss Lute* to cast *Protection from Energy*, it can only grant Resistance to Fire damage.",
			},
		} },
		{ name: "Fochlucan Bandore", rarity: "Uncommon", spellList: ["entangle", "faerie fire", "shillelagh", "speak with animals"] },
		{ name: "Mac-Fuirmidh Cittern", rarity: "Uncommon", spellList: ["barkskin", "cure wounds", "fog cloud"] },
		{ name: "Ollamh Harp", rarity: "Legendary", spellList: ["confusion", "control weather", "fire storm"] },
	].forEach(function (instrumentDetails) {
		var name = instrumentDetails.name;
		var rarity = instrumentDetails.rarity;
		var spellList = instrumentDetails.spellList;
		var spellChanges = instrumentDetails.spellChanges;

		var choiceName = name + "(" + rarity + ")";
		obj.choices.push(choiceName);

		var fullSpellList = commonSpellList.concat(spellList);

		var choiceObject = {
			name: name + " [Instrument of the Bards]",
			sortname: "Instrument of the Bards, " + name,
			rarity: rarity,
			spellcastingBonus: [{
				name: "Once per dawn",
				spells: fullSpellList,
				selection: fullSpellList,
				firstCol: "onceday",
				times: fullSpellList.length,
				spellcastingAbility: "class",
			}],
		};

		if (spellChanges) {
			choiceObject.spellChanges = spellChanges;
		}

		obj[choiceName.toLowerCase()] = choiceObject;
	})

	return obj;
}();
MagicItemsList["keoghtom's ointment"] = {
	name: "Keoghtom's Ointment",
	source: [["DMG24", 275]],
	type: "Wondrous Item",
	rarity: "Uncommon",
	magicItemTable: "Relics",
	description: "This glass jar, 3 inches in diameter, contains 1d4+1 doses of a thick mixture that smells faintly of aloe. As a Utilize action, I can swallow one dose of the ointment or apply it to a creature within 5 ft. The creature that receives it regains 2d8+2 Hit Points and ceases to be Poisoned.",
	descriptionFull: [
		"This glass jar, 3 inches in diameter, contains 1d4 + 1 doses of a thick mixture that smells faintly of aloe. The jar and its contents weigh 1/2 pound.",
		"As a Utilize action, you can swallow one dose of the ointment or apply it to a creature within 5 feet of yourself. The creature that receives it regains 2d8 + 2 Hit Points and ceases to have the Poisoned condition.",
	],
	weight: 0.5,
	usages: " ", // Intentionally left blank
	additional: "1d4+1 doses",
	recovery: "\u2013",
};
MagicItemsList["lock of trickery"] = {
	name: "Lock of Trickery",
	source: [["DMG24", 275]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: ["Arcana", "Implements"],
	description: "This lock appears to be an ordinary Lock and comes with a single key. The tumblers in this lock magically adjust to thwart burglars. Without the key, a creature can use Thieves' Tools to pick this lock with a successful DC 15 Dexterity (Sleight of Hand) check, but has Disadvantage on the check.",
	descriptionFull: "This lock appears to be an ordinary Lock (of the type described in chapter 6 of the Player's Handbook) and comes with a single key. The tumblers in this lock magically adjust to thwart burglars. Dexterity checks made to pick the lock have Disadvantage.",
	weight: 1,
};
MagicItemsList["lute of thunderous thumping"] = {
	name: "Lute of Thunderous Thumping",
	source: [["DMG24", 275]],
	type: "Weapon (Club)",
	rarity: "Very Rare",
	magicItemTable: ["Armaments", "Implements"],
	description: [
		"This reinforced lute can be wielded as a magic Club that deals +2d8 Thunder damage.",
		"***Sing and Swing***. Bards can use their Charisma modifier instead of their Strength modifier when making a melee attack roll with the lute, provided they sing or hum while making the attack.",
	],
	descriptionFull: [
		"This reinforced lute can be wielded as a magic Club that deals an extra 2d8 Thunder damage on a hit.",
		"***Sing and Swing***. If you're a Bard, you can use your Charisma modifier instead of your Strength modifier when making a melee attack roll with the lute, provided you sing or hum while making the attack.",
	],
	weight: 2,
	weaponOptions: [{
		baseWeapon: "club",
		regExpSearch: /^(?=.*lute)(?=.*thunderous)(?=.*thumping).*$/i,
		name: "Lute of Thunderous Thumping",
		source: [["DMG24", 275]],
		description: "Light; +2d8 Thunder damage",
		selectNow: true,
	}],
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (classes.known.bard && fields.Mod === 1 && What("Cha Mod") > What("Str Mod")) {
					fields.Mod = 6;
				};
			},
			"If I'm a Bard, I can use Charisma instead of Strength for this lute's attacks.",
		],
	},
};
MagicItemsList["mariner's armor"] = {
	name: "Mariner's Armor",
	nameTest: /mariner.+(armou?r|\u180C)/i,
	source: [["DMG24", 278]],
	type: "Armor (Any Light, Medium, or Heavy)",
	rarity: "Uncommon",
	magicItemTable: ["Armaments", "Relics"],
	description: "While wearing this armor decorated with fish and shell motifs, I have a Swim Speed equal to my Speed. If I start my turn underwater with 0 Hit Points, I immediately regain 1d4 Hit Points. The armor can't heal anyone again until the next dawn.",
	descriptionFull: [
		"While wearing this armor, you have a Swim Speed equal to your Speed. In addition, if you start your turn underwater with 0 Hit Points, you immediately regain 1d4 Hit Points. The armor can't heal anyone again until the next dawn.",
		"The armor is decorated with fish and shell motifs.",
	],
	usages: 1,
	recovery: "Dawn",
	speed: {
		swim: { spd: "walk", enc: "walk" },
	},
	allowDuplicates: true,
	chooseGear: {
		type: "armor",
		prefixOrSuffix: ["between", "Mariner's", "\u180C"],
		itemName1stPage: ["suffix", "Mariner's"],
		descriptionChange: ["replace", "armor"],
	},
};
MagicItemsList["moon-touched sword"] = {
	name: "Moon-Touched Sword",
	nameTest: /moon.touched.+(sword|\uFEFF)/i,
	source: [["DMG24", 280]],
	type: "Weapon (Glaive, Greatsword, Longsword, Rapier, Scimitar, or Shortsword)",
	rarity: "Common",
	magicItemTable: ["Armaments", "Implements"],
	description: "In Darkness, the unsheathed blade of this weapon sheds moonlight, creating Bright Light in a 15-ft radius and Dim Light for an additional 15 ft.",
	descriptionFull: "In Darkness, the unsheathed blade of this weapon sheds moonlight, creating Bright Light in a 15-foot radius and Dim Light for an additional 15 feet.",
	chooseGear: {
		type: "weapon",
		prefixOrSuffix: ["between", "Moon-Touched", "\uFEFF"],
		itemName1stPage: ["suffix", "Moon-Touched"],
		descriptionChange: ["replace", "weapon"],
		excludeCheck: function (inObjKey, inObj, v) {
			return !v.isMeleeWeapon || !/glaive|rapier|scimitar|sword/i.test(v.baseWeaponName);
		},
	},
};
MagicItemsList["mystery key"] = {
	name: "Mystery Key",
	source: [["DMG24", 280]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: ["Arcana", "Implements"],
	description: "A question mark is worked into the head of this key. The key has a 5% chance of unlocking any lock into which it's inserted. Once it unlocks something, the key disappears.",
	descriptionFull: "A question mark is worked into the head of this key. The key has a 5 percent chance of unlocking any lock into which it's inserted. Once it unlocks something, the key disappears.",
};
MagicItemsList["nature's mantle"] = {
	name: "Nature's Mantle",
	source: [["DMG24", 280]],
	type: "Wondrous Item",
	rarity: "Uncommon",
	magicItemTable: ["Implements", "Relics"],
	attunement: true,
	prerequisite: "Requires Attunement by a Druid or Ranger",
	prereqeval: function (v) {
		return !!classes.known.druid || !!classes.known.ranger;
	},
	description: "This cloak shifts color and texture to blend with the terrain surrounding me. While wearing the cloak, I can use it as a Spellcasting Focus for my Druid and Ranger spells. While I am in an area that is Lightly Obscured, I can Hide as a Bonus Action even if I am being directly observed.",
	descriptionFull: [
		"This cloak shifts color and texture to blend with the terrain surrounding you. While wearing the cloak, you can use it as a Spellcasting Focus for your Druid and Ranger spells.",
		"While you are in an area that is Lightly Obscured, you can Hide as a Bonus Action even if you are being directly observed.",
	],
	action: [["bonus action", " (Hide)"]],
};
MagicItemsList["orb of direction"] = {
	name: "Orb of Direction",
	source: [["DMG24", 283]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: ["Arcana", "Implements"],
	description: [
		"This orb can be used as an Arcane Focus.",
		"As a Magic action while holding the orb, I can determine which way is magnetic north. Nothing happens if the orb is used in a location that has no magnetic north.",
	],
	descriptionFull: [
		"This orb can be used as an Arcane Focus.",
		"While holding this orb, you can take a Magic action to determine which way is magnetic north. Nothing happens if the orb is used in a location that has no magnetic north.",
	],
	weight: 3,
	action: [["action", ""]],
};
MagicItemsList["orb of time"] = {
	name: "Orb of Time",
	source: [["DMG24", 284]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: ["Arcana", "Implements"],
	description: [
		"This orb can be used as an Arcane Focus.",
		"As a Magic action while holding the orb, I can determine whether it is morning, afternoon, evening, or nighttime. This property functions only on the Material Plane.",
	],
	descriptionFull: [
		"This orb can be used as an Arcane Focus.",
		"While holding the orb, you can take a Magic action to determine whether it is morning, afternoon, evening, or nighttime. This property functions only on the Material Plane.",
	],
	weight: 3,
	action: [["action", ""]],
};
MagicItemsList["perfume of bewitching"] = {
	name: "Perfume of Bewitching",
	source: [["DMG24", 284]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: ["Arcana", "Implements"],
	description: "As a Magic action, I can apply the magic perfume in this tiny vial to myself. For the next hour, I have Advantage on all Charisma (Deception and Persuasion) checks made to influence a creature within 5 ft of me.",
	descriptionFull: "This tiny vial contains magic perfume, enough for one use. You can take a Magic action to apply the perfume to yourself, and its effect lasts 1 hour. For the duration, you have Advantage on all Charisma (Deception and Persuasion) checks made to influence a creature within 5 feet of yourself.",
	action: [["action", ""]],
};
MagicItemsList["pipe of smoke monsters"] = {
	name: "Pipe of Smoke Monsters",
	source: [["DMG24", 285]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: ["Arcana", "Implements"],
	description: "As a Magic action while smoking this pipe, I can exhale a puff of smoke that takes the form of a creature, such as a dragon, a flumph, or a slaad. The form must be small enough to fit in a 1-ft cube and loses its shape after a few seconds, becoming an ordinary puff of smoke.",
	descriptionFull: "While smoking this pipe, you can take a Magic action to exhale a puff of smoke that takes the form of a creature, such as a dragon, a flumph, or a slaad. The form must be small enough to fit in a 1-foot cube and loses its shape after a few seconds, becoming an ordinary puff of smoke.",
};
MagicItemsList["pole of angling"] = {
	name: "Pole of Angling",
	source: [["DMG24", 286]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: "Implements",
	description: "This item functions as a Pole. As a Magic action while holding it, I can cause it to transform into a fishing pole with a hook, a line, and a reel, or have the fishing pole revert to a Pole.",
	descriptionFull: "This item functions as a Pole. While holding it, you can take a Magic action to cause it to transform into a fishing pole with a hook, a line, and a reel, or have the fishing pole revert to a Pole.",
	weight: 7,
	action: [["action", ""]],
};
MagicItemsList["pole of collapsing"] = {
	name: "Pole of Collapsing",
	source: [["DMG24", 286]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: "Implements",
	description: "This item functions as a Pole. As a Magic action while holding it, I can collapse it into a 1-ft-long rod for ease of storage (the pole's weight doesn't change) or cause the 1-ft-long rod to revert to a Pole. The rod elongates only as far as the surrounding space allows.",
	descriptionFull: "This item functions as a Pole. While holding it, you can take a Magic action to collapse it into a 1-foot-long rod for ease of storage (the pole's weight doesn't change) or cause the 1-foot-long rod to revert to a Pole. The rod elongates only as far as the surrounding space allows.",
	weight: 7,
	action: [["action", ""]],
};
MagicItemsList["potion of comprehension"] = {
	name: "Potion of Comprehension",
	source: [["DMG24", 287]],
	type: "Potion",
	rarity: "Common",
	magicItemTable: ["Arcana", "Implements"],
	description: "As a Bonus Action, I can drink this potion or administer it to another. The consumer gains the effect of *Comprehend Languages*: For 1 hour, understand the literal meaning of any language heard or seen signed, or visible written text touched. This potion's liquid is clear with bits of salt and soot swirling in it.",
	descriptionFull: [
		"When you drink this potion, you gain the effect of the *Comprehend Languages* spell for 1 hour.",
		"This potion's liquid is a clear concoction with bits of salt and soot swirling in it.",
	],
	weight: 0.5,
};
MagicItemsList["potion of fire breath"] = {
	name: "Potion of Fire Breath",
	source: [["DMG24", 287]],
	type: "Potion",
	rarity: "Uncommon",
	magicItemTable: "Arcana",
	description: "As a Bonus Action, I can drink this potion or administer it to another. For the next hour as a Bonus Action, the consumer can deal 4d6 fire damage to a creature within 30 ft, but it can make a Dex save DC 13 to halve this damage. This can be done 3 times. This potion's orange liquid flickers and smoke fills the container.",
	descriptionLong: [
		"As a Bonus Action, I can drink this potion or administer it to another. After drinking this potion, the consumer can take a Bonus Action to exhale fire at a target within 30 ft of themselves. The target makes a DC 13 Dexterity saving throw, taking 4d6 Fire damage on a failed save or half as much damage on a successful one. The effect ends after the consumer exhales the fire three times or when 1 hour has passed.",
		"This potion's orange liquid flickers, and smoke fills the top of the container and wafts out whenever it is opened.",
	],
	descriptionFull: [
		"After drinking this potion, you can take a Bonus Action to exhale fire at a target within 30 feet of yourself. The target makes a DC 13 Dexterity saving throw, taking 4d6 Fire damage on a failed save or half as much damage on a successful one. The effect ends after you exhale the fire three times or when 1 hour has passed.",
		"This potion's orange liquid flickers, and smoke fills the top of the container and wafts out whenever it is opened.",
	],
	weight: 0.5,
};
MagicItemsList["potion of greater invisibility"] = {
	name: "Potion of Greater Invisibility",
	source: [["DMG24", 288]],
	type: "Potion",
	rarity: "Very Rare",
	magicItemTable: "Arcana",
	description: "As a Bonus Action, I can drink this potion or administer it to another. The consumer gains the Invisible condition for 1 hour. This potion's container looks empty but feels as though it holds liquid.",
	descriptionFull: "This potion's container looks empty but feels as though it holds liquid. When you drink the potion, you have the Invisible condition for 1 hour.",
	weight: 0.5,
};
MagicItemsList["potion of pugilism"] = {
	name: "Potion of Pugilism",
	source: [["DMG24", 289]],
	type: "Potion",
	rarity: "Uncommon",
	magicItemTable: "Armaments",
	description: "As a Bonus Action, I can drink this potion or administer it to another. For the next 10 minutes each Unarmed Strike that the consumer makes deals an extra 1d6 Force damage on a hit. This potion is a thick green fluid that tastes like spinach.",
	descriptionFull: [
		"After you drink this potion, each Unarmed Strike you make deals an extra 1d6 Force damage on a hit. This effect lasts 10 minutes.",
		"This potion is a thick green fluid that tastes like spinach.",
	],
	weight: 0.5,
};
MagicItemsList["pot of awakening"] = {
	name: "Pot of Awakening",
	source: [["DMG24", 289]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: ["Arcana", "Relics"],
	description: "If I plant an ordinary shrub in this 10 lb clay pot and let it grow for 30 days, the shrub magically transforms into an **Awakened Shrub** at the end of that time, but its roots destroy the pot when it awakens. The shrub is Friendly towards me and obeys my commands. Absent commands from me, it does nothing.",
	descriptionFull: [
		"If you plant an ordinary shrub in this 10-pound clay pot and let it grow for 30 days, the shrub magically transforms into an **Awakened Shrub** at the end of that time. When the shrub awakens, its roots break the pot, destroying it.",
		"The awakened shrub is Friendly toward you and obeys your commands. Absent commands from you, it does nothing.",
	],
	weight: 10,
};
MagicItemsList["prosthetic limb"] = {
	name: "Prosthetic Limb",
	source: [["DMG24", 290]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: ["Arcana", "Implements"],
	description: "This magic item replaces a lost limb, like a hand, an arm, a foot, a leg, or a similar body part. While the prosthetic is attached, it functions identically to the part it replaces. As a Magic action, I can detach or reattach it. It can't be removed against my will while I'm alive.",
	descriptionFull: "This magic item replaces a lost limb\u2014a hand, an arm, a foot, a leg, or a similar body part. While the prosthetic is attached, it functions identically to the part it replaces. You can detach or reattach it as a Magic action, and it can't be removed against your will while you are alive.",
	action: [["action", " (attach/detach)"]],
};
MagicItemsList["rival coin"] = {
	name: "Rival Coin",
	source: [["DMG24", 296]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: "Arcana",
	description: "As a Magic action once per dawn, I can toss this gold coin with famous rivals on each side. **Heads**. A creature that I can see " + (typePF ? "" : "with") + "in 60 ft takes 2d4 Psychic damage and has Disadv" + (typePF ? "" : "antage") + " on its next attack roll before the end of its next turn. It can make a DC 13 Wis" + (typePF ? "" : "dom") + " save to take half damage only. **Tails**. I take 1d4 Psychic damage.",
	descriptionFull: [
		'This gold coin has a creature embossed on each side. The two depicted creatures must be famous rivals or enemies of each other. For example, a Rival Coin might show Iggwilv on one side and Mordenkainen on the other, or Venger on one side and Tiamat on the other. One of these figures is on the "heads" side of the coin, the other on the "tails" side.',
		"The coin has 1 charge and regains its expended charge daily at dawn. You can take a Magic action to toss the coin, expending its charge. Roll any die to determine whether the coin comes up heads (on an even number) or tails (on an odd number). The roll also determines the effect:",
		" \u2022 **Heads**. Target one creature you can see within 60 feet of yourself. The target makes a DC 13 Wisdom saving throw. On a failed save, the target takes 2d4 Psychic damage and has Disadvantage on the next attack roll it makes before the end of its next turn. On a successful save, the target takes half as much damage only.",
		" \u2022 **Tails**. You take 1d4 Psychic damage.",
	],
	usages: 1,
	recovery: "Dawn",
	action: [["action", ""]],
};
MagicItemsList["rod of the pact keeper"] = {
	name: "Rod of the Pact Keeper",
	nameTest: /^(?=.*pact.keeper)(?=.*(arcane focus|crystal|orb|rod|staff|wand)).*$/i,
	source: [["DMG24", 301]],
	type: "Rod",
	magicItemTable: "Arcana",
	attunement: true,
	prerequisite: "Requires Attunement by a Warlock",
	prereqeval: function (v) { return !!classes.known.warlock; },
	description: "Select one of the choices.",
	descriptionFull: [
		"While holding this rod, you gain a bonus to spell attack rolls and to the saving throw DCs of your Warlock spells. The bonus is determined by the rod's rarity: Uncommon (+1), Rare (+2), or Very Rare (+3).",
		"In addition, you can regain one spell slot as a Magic action while holding the rod. You can't use this property again until you finish a Long Rest.",
	],
	limfeaname: "Rod of the Pact Keeper (regain spell slot)",
	usages: 1,
	recovery: "Long Rest",
	action: [["action", ""]],
	weight: 2,
	allowDuplicates: true,
	choices: ["+1 Rod of the Pact Keeper (Uncommon)", "+2 Rod of the Pact Keeper (Rare)", "+3 Rod of the Pact Keeper (Very Rare)"],
	"+1 rod of the pact keeper (uncommon)": {
		name: "Rod of the Pact Keeper +1",
		nameTest: /^(?=.*pact.keeper)(?=.*(arcane focus|crystal|orb|rod|staff|wand))(?=.*\+1)(?!.*\+[23]).*$/i,
		rarity: "Uncommon",
		description: [
			"While holding this arcane focus, I gain a +1 bonus to spell attack rolls and saving throw DCs of my Warlock spells.",
			"As a Magic action once per Long Rest, I can use it to regain one spell slot.",
		],
		calcChanges: {
			spellCalc: [
				function (type, spellcasters, ability) {
					if (type != "prepare" && spellcasters.indexOf("warlock") !== -1) return 1;
				},
				"I gain a +1 bonus to spell attack rolls and saving throw DCs of my Warlock spells.",
			],
		},
	},
	"+2 rod of the pact keeper (rare)": {
		name: "Rod of the Pact Keeper +2",
		nameTest: /^(?=.*pact.keeper)(?=.*(arcane focus|crystal|orb|rod|staff|wand))(?=.*\+2)(?!.*\+[13]).*$/i,
		rarity: "Rare",
		description: [
			"While holding this arcane focus, I gain a +2 bonus to spell attack rolls and saving throw DCs of my Warlock spells.",
			"As a Magic action once per Long Rest, I can use it to regain one spell slot.",
		],
		calcChanges: {
			spellCalc: [
				function (type, spellcasters, ability) {
					if (type != "prepare" && spellcasters.indexOf("warlock") !== -1) return 2;
				},
				"I gain a +2 bonus to spell attack rolls and saving throw DCs of my Warlock spells.",
			],
		},
	},
	"+3 rod of the pact keeper (very rare)": {
		name: "Rod of the Pact Keeper +3",
		nameTest: /^(?=.*pact.keeper)(?=.*(arcane focus|crystal|orb|rod|staff|wand))(?=.*\+3)(?!.*\+[12]).*$/i,
		rarity: "Very Rare",
		description: [
			"While holding this arcane focus, I gain a +3 bonus to spell attack rolls and saving throw DCs of my Warlock spells.",
			"As a Magic action once per Long Rest, I can use it to regain one spell slot.",
		],
		calcChanges: {
			spellCalc: [
				function (type, spellcasters, ability) {
					if (type != "prepare" && spellcasters.indexOf("warlock") !== -1) return 3;
				},
				"I gain a +3 bonus to spell attack rolls and saving throw DCs of my Warlock spells.",
			],
		},
	},
};
MagicItemsList["rope of mending"] = {
	name: "Rope of Mending",
	source: [["DMG24", 302]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: ["Arcana", "Implements"],
	description: "This 50-ft coil of rope can repair itself when cut into any number of smaller pieces. As a Magic action, I can cause all pieces of the rope that are in contact with each other and not otherwise in use to knit back together. A *Rope of Mending* is forever shortened if a section of it is lost or destroyed.",
	descriptionFull: "This 50-foot coil of rope can repair itself when cut into any number of smaller pieces. As a Magic action, you can cause all pieces of the rope that are in contact with each other and not otherwise in use to knit back together. A *Rope of Mending* is forever shortened if a section of it is lost or destroyed.",
	action: [["action", ""]],
	weight: 5,
};
MagicItemsList["ruby of the war mage"] = {
	name: "Ruby of the War Mage",
	source: [["DMG24", 302]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: ["Arcana", "Relics"],
	attunement: true,
	prerequisite: "Requires Attunement by a Spellcaster",
	prereqeval: function (v) { return v.isSpellcaster; },
	description: "Etched with eldritch runes, this 1-inch-diameter ruby allows me to use a Simple or Martial weapon as a Spellcasting Focus." + (typePF ? "\n" : " ") + "I must press the ruby against the weapon for 10 minutes, after which it can't be removed unless I detach it as a Magic action, the weapon is destroyed, or my Attunement to the ruby ends.",
	descriptionFull: "Etched with eldritch runes, this 1-inch-diameter ruby allows you to use a Simple or Martial weapon as a Spellcasting Focus for your spells. For this property to work, you must attach the ruby to the weapon by pressing the ruby against it for at least 10 minutes. Thereafter, the ruby can't be removed unless you detach it as a Magic action, the weapon is destroyed, or your Attunement to the ruby ends.",
	action: [["action", " (detach)"]],
};
MagicItemsList["saddle of the cavalier"] = {
	name: "Saddle of the Cavalier",
	source: [["DMG24", 302]],
	type: "Wondrous Item",
	rarity: "Uncommon",
	magicItemTable: ["Arcana", "Armaments"],
	description: "While in this saddle on a mount, I can't be dismounted against my will if I am conscious, and attack rolls against my mount have disadvantage.",
	descriptionFull: "While in this saddle on a mount, you can't be dismounted against your will if you're conscious, and attack rolls against the mount have disadvantage.",
	weight: 25,
};
MagicItemsList["scroll of protection"] = function (){
	var obj = {
		name: "Scroll of Protection",
		source: [["DMG24", 302]],
		type: "Scroll",
		rarity: "Rare",
		magicItemTable: ["Arcana", "Relics"],
		description: "Select one of the choices.",
		descriptionFull: [
			"Each *Scroll of Protection* works against creatures of a specific creature type chosen by the DM or determined by rolling on the following table.",
			[
				["1d100", "Creature Type"],
				["01\u201310", "Aberrations"],
				["11\u201315", "Beasts"],
				["16\u201320", "Celestials"],
				["21\u201325", "Constructs"],
				["26\u201335", "Dragons"],
				["36\u201345", "Elementals"],
				["46\u201350", "Humanoids"],
				["51\u201360", "Fey"],
				["61\u201370", "Fiends"],
				["71\u201375", "Giants"],
				["76\u201380", "Monstrosities"],
				["81\u201385", "Oozes"],
				["86\u201390", "Plants"],
				["91\u201300", "Undead"],
			],
			"Using a Magic action to read the scroll creates a 5-foot Emanation originating from you. For 5 minutes, creatures of the specified type can't enter or affect anything in the area. However, if you move in such a way that a creature of the specified type would be inside the area, the effect ends.",
			"As a Magic action, a creature within 5 feet of the Emanation can attempt to overcome it, which forces the creature to make a DC 15 Charisma saving throw. On a successful save, the creature ceases to be affected by the Emanation.",
		],
		allowDuplicates: true,
		choicesNotInMenu: true,
		action: [["action", ""]],
		choices: [],
	};
	["Aberrations", "Beasts", "Celestials", "Constructs", "Dragons", "Elementals", "Humanoids", "Fey", "Fiends", "Giants", "Monstrosities", "Oozes", "Plants", "Undead"].forEach(function (type) {
		obj.choices.push(type);
		obj[type.toLowerCase()] = {
			name: "Scroll of Protection from " + type,
			description: "As a Magic action, I can read this to create a 5-ft Emanation originating from me. For 5 minutes " + type + " can't enter or affect anything in the area. If I move in a way that would bring a barred creature inside, it ends. As a Magic action, a creature within 10 ft of me can try a DC 15 " + (typePF ? "Cha save" : "Charisma saving throw") + " to ignore the effect.",
		};
	});
	return obj;
}();
MagicItemsList["scroll of titan summoning"] = function (){
	var obj = {
		name: "Scroll of Titan Summoning",
		source: [["DMG24", 303]],
		type: "Scroll",
		rarity: "Legendary",
		magicItemTable: ["Arcana", "Relics"],
		description: "Select one of the choices.",
		descriptionFull: [
			"When you take a Magic action to read this scroll, a particular titan named in the scroll appears in an unoccupied space on the ground or in water that you can see within 1 mile of yourself. The DM picks a suitable titan or determines it randomly by rolling on the table below.",
			"The titan is Hostile toward all other creatures and disappears when it drops to 0 Hit Points. If the titan is summoned into a space that isn't large enough to contain it, the summoning fails, and the scroll is wasted.",
			[
				["1d100", "Titan"],
				["01\u201315", "Animal Lord"],
				["16\u201330", "Blob of Annihilation"],
				["31\u201345", "Colossus"],
				["46\u201360", "Elemental Cataclysm"],
				["61\u201375", "Empyrean"],
				["76\u201390", "Kraken (a kraken requires a body of water large enough to contain it, or the summoning fails and the scroll is wasted)"],
				["91\u2013100", "Tarrasque"],
			],
		],
		allowDuplicates: true,
		choicesNotInMenu: true,
		action: [["action", ""]],
		choices: [],
	};
	[
		{ titan: "Animal Lord", article: "an" },
		{ titan: "Blob of Annihilation" },
		{ titan: "Colossus" },
		{ titan: "Elemental Cataclysm", article: "an" },
		{ titan: "Empyrean", article: "an" },
		{ titan: "Kraken", groundOrWater: "in a body of water large enough for it" },
		{ titan: "Tarrasque" },
	].forEach(function (scrollType) {
		var titan = scrollType.titan;
		var article = scrollType.article ? scrollType.article : "a";
		var groundOrWater = scrollType.groundOrWater ? scrollType.groundOrWater : "on the ground or in water";
		obj.choices.push(titan);
		obj[titan.toLowerCase()] = {
			name: "Scroll of " + titan + " Summoning",
			description: "As a Magic action, I can read this scroll to have " + article + " **" + titan + "** appear in an unoccupied space " + groundOrWater + " that I can see within 1 mile. The titan is Hostile towards all other creatures and disappears at 0 HP. If I summon the titan into an area too small to contain it, the scroll fails and is wasted.",
		};
	});
	return obj;
}();
MagicItemsList["shield of expression"] = {
	name: "Shield of Expression",
	source: [["DMG24", 303]],
	type: "Shield",
	rarity: "Common",
	magicItemTable: ["Armaments", "Relics"],
	description: "The front of this shield is shaped in the likeness of a face. As a Bonus Action while bearing the shield, I can alter the the face's expression.",
	descriptionFull: "The front of this Shield is shaped in the likeness of a face. While bearing the Shield, you can take a Bonus Action to alter the face's expression.",
	weight: 6,
	shieldAdd: "Shield of Expression",
	action: [["bonus action", ""]],
};
MagicItemsList["silvered weapon"] = {
	name: "Silvered Weapon",
	nameTest: /silvered.+(weapon|\uFEFF)/i,
	source: [["DMG24", 304]],
	type: "Weapon (Any Simple or Martial)",
	rarity: "Common",
	magicItemTable: "Armaments",
	description: "An alchemical process has bonded silver to this magic weapon. When I score a Critical Hit with it against a creature that is shape-shifted, the weapon deals one additional die of damage.",
	descriptionFull: "An alchemical process has bonded silver to this magic weapon. When you score a Critical Hit with it against a creature that is shape-shifted, the weapon deals one additional die of damage.",
	chooseGear: {
		type: "weapon",
		prefixOrSuffix: ["between", "Silvered", "\uFEFF"],
		itemName1stPage: ["suffix", "Silvered"],
		descriptionChange: ["replace", "weapon"],
		excludeCheck: function (inObjKey, inObj, v) {
			return !v.isSimpleOrMartial;
		},
	},
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isSimpleOrMartial && /silvered/i.test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					var die = fields.Damage_Die.replace(/.*?(d\d+).*/, "$1");
					if (die === fields.Damage_Die) die = " damage die";
					fields.Description += (fields.Description ? "; " : "") + "Crit vs shape-shifted +1" + die;
				}
			},
			'If I include the word "Silvered" in the name of a Simple or Martial weapon, it will be treated as the magic weapon Silvered Weapon. Critical hits against shape-shifted creatures with it deal one extra damage die.',
		],
	},
};
MagicItemsList["smoldering armor"] = {
	name: "Smoldering Armor",
	nameTest: /smoldering.+(armou?r|\u180C)/i,
	source: [["DMG24", 305]],
	type: "Armor (Any Light, Medium, or Heavy)",
	rarity: "Common",
	magicItemTable: ["Armaments", "Relics"],
	description: "Wisps of harmless, odorless smoke rise from this armor while it is worn.",
	descriptionFull: "Wisps of harmless, odorless smoke rise from this armor while it is worn.",
	chooseGear: {
		type: "armor",
		prefixOrSuffix: ["between", "Smoldering", "\u180C"],
		itemName1stPage: ["suffix", "Smoldering"],
		descriptionChange: ["replace", "armor"],
	},
};
MagicItemsList["spirit board"] = {
	name: "Spirit Board",
	source: [["DMG24", 306]],
	type: "Wondrous Item",
	rarity: "Very Rare",
	magicItemTable: "Relics",
	description: "This ornate wooden board has 3 charges and regains 1 charge daily at dawn. The board comes with a heart-shaped planchette, which must be resting on the board for its magic to function. While touching the planchette, I can cast *Augury* (1 charge) or *Commune* (3 charges). Spirits of the dead answer my questions.",
	descriptionLong: "This ornate wooden board has 3 charges and regains 1 expended charge daily at dawn. The board has the letters of the Common alphabet printed on one side, alongside the words \"Yes\" and \"No\", and symbols representing \"Weal\" and \"Woe\". The board comes with a heart-shaped planchette, which must be resting on the lettered side of the board for its magic to function. While touching the planchette, I can cast *Augury* (1 charge) or *Commune* (3 charges). Spirits of the dead guide the planchette across the board's surface, answering my questions by pointing to the letters or words on the board.",
	descriptionFull: [
		"This ornate wooden board has the letters of the Common alphabet printed on one side, alongside the words \"Yes\" and \"No\" and symbols representing \"Weal\" and \"Woe.\" The board comes with a heart-shaped, wooden planchette. This planchette must be resting on the lettered side of the board for the board's magic to function.",
		"This board has 3 charges and regains 1 expended charge daily at dawn. While touching the planchette, you can take 1 minute to cast one of the spells on the table below. The table indicates how many charges you must expend to cast the spell. As you cast the spell, you call on the spirits of the dead to help guide the planchette across the board's surface, answering your questions by pointing to the letters or words on the board.",
		[
			["Spell", "Charge Cost"],
			["*Augury*", "1"],
			["*Commune*", "3"],
		],
	],
	usages: 3,
	recovery: "Dawn",
	additional: "regains 1",
	spellFirstColTitle: "Ch",
	spellcastingBonus: [{
		name: "1 charge",
		spells: ["augury"],
		selection: ["augury"],
		firstCol: 1,
	}, {
		name: "3 charges",
		spells: ["commune"],
		selection: ["commune"],
		firstCol: 3,
	}],
};
MagicItemsList["staff of adornment"] = {
	name: "Staff of Adornment",
	source: [["DMG24", 306]],
	type: "Staff",
	rarity: "Common",
	magicItemTable: ["Arcana", "Relics"],
	description: "While holding the staff, I can place a Tiny object up to 1 pound above its tip and make the object float 1 inch above it until the object is removed or the staff leaves my possession. The staff can have up to three such floating objects. While holding the staff, I can make any of the objects slowly spin or turn in place.",
	descriptionFull: "If you place a Tiny object weighing no more than 1 pound (such as a shard of crystal, an egg, or a stone) above the tip of this staff while holding it, the object floats an inch from the staff's tip and remains there until it is removed or until the staff is no longer in your possession. The staff can have up to three such objects floating over its tip at any given time. While holding the staff, you can make one or more of the objects slowly spin or turn in place.",
	weight: 4,
};
MagicItemsList["staff of birdcalls"] = {
	name: "Staff of Birdcalls",
	source: [["DMG24", 307]],
	type: "Staff",
	rarity: "Common",
	magicItemTable: ["Arcana", "Implements"],
	description: "This staff has 10 charges and regains 1d6+4 at dawn. When its last charge is used, 5% chance it is destroyed. As a Magic action, I can use 1 charge to create a sound out to 120 ft: a finch's chirp, raven's caw, duck's quack, chicken's cluck, goose's honk, loon's call, turkey's gobble, seagull's cry, owl's hoot, or eagle's shriek.",
	descriptionFull: [
		"This wooden staff is decorated with bird carvings. It has 10 charges. While holding it, you can take a Magic action to expend 1 charge from the staff and cause it to create one of the following sounds, which can be heard out to 120 feet: a finch's chirp, a raven's caw, a duck's quack, a chicken's cluck, a goose's honk, a loon's call, a turkey's gobble, a seagull's cry, an owl's hoot, or an eagle's shriek.",
		"***Regaining Charges***. The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, the staff explodes in a harmless cloud of bird feathers and is lost forever.",
	],
	weight: 4,
	usages: 10,
	recovery: "Dawn",
	additional: "regains 1d6+4",
	action: [["action", ""]],
};
MagicItemsList["staff of flowers"] = {
	name: "Staff of Flowers",
	source: [["DMG24", 308]],
	type: "Staff",
	rarity: "Common",
	magicItemTable: ["Arcana", "Relics"],
	description: "This staff has 10 charges and regains 1d6+4 at dawn. As a Magic action while holding it, I can use 1 charge to cause a nonmagical flower of my choice sprout from the staff or a patch of earth or soil within 5 ft. The flower grows" + (typePF ? "/" : " or ") + "withers as normal. If I use the last charge, I roll 1d20. On a 1, the staff turns into flower petals" + (typePF ? "." : " and is lost forever."),
	descriptionFull: [
		"This wooden staff has 10 charges. While holding it, you can take a Magic action to expend 1 charge from the staff and cause a flower to sprout from a patch of earth or soil within 5 feet of yourself, or from the staff itself. Unless you choose a specific kind of flower, the staff creates a mild-scented daisy. The flower is harmless and nonmagical, and it grows or withers as a normal flower would.",
		"***Regaining Charges***. The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, the staff turns into flower petals and is lost forever.",
	],
	weight: 4,
	usages: 10,
	recovery: "Dawn",
	additional: "regains 1d6+4",
	action: [["action", ""]],
};
MagicItemsList["staff of the adder"] = {
	name: "Staff of the Adder",
	source: [["DMG24", 309]],
	type: "Staff",
	rarity: "Uncommon",
	magicItemTable: ["Arcana", "Relics"],
	attunement: true,
	description: "As a Bonus Action, I can animate this staff's snake head for 1 min or revert it back to inanimate with full HP. While animated, it has AC 15, 20 HP, Psychic and Poison" + (typePF ? "" : " damage") + " Immunity, and when I take the Attack action I can attack with it once " + (typePF ? "in 5 ft using Wis" : "within 5 ft using Wisdom") + " for 1d6 Piercing + 3d6 Poison damage. The staff is destroyed at 0 HP.",
	descriptionFull: [
		"As a Bonus Action, you can turn the head of this staff into that of an animate, venomous snake for 1 minute or revert the staff to its inanimate form.",
		"When you take the Attack action, you can make one of the attack rolls using the animated snake head, which has a reach of 5 feet. Apply your Proficiency Bonus and Wisdom modifier to the attack roll. On a hit, the target takes 1d6 Piercing damage and 3d6 Poison damage.",
		"The snake head can be attacked while it is animate. It has AC 15, HP 20, and Immunity to Poison and Psychic damage. If the head drops to 0 Hit Points, the staff is destroyed. As long as it's not destroyed, the staff regains all lost Hit Points when it reverts to its inanimate form.",
	],
	weight: 4,
	action: [["bonus action", " (animate/end)"]],
	weaponsAdd: { options: ["Staff of the Adder"] },
	weaponOptions: [{
		regExpSearch: /^(?=.*staff)(?=.*adder)(?=.*snake)(?=.*head).*$/i,
		name: "Staff of the Adder's Snake Head",
		source: [["DMG24", 309]],
		ability: 5,
		type: "Magic Item",
		damage: ["1d6+3d6", "", "Pierc.+Poison"],
		range: "Melee",
		weight: 4,
		description: "1d6 Piercing damage + 3d6 Poison damage; max 1 attack during Attack action",
		abilitytodamage: false,
		isNotWeapon: true,
		isAlwaysProf: true,
		selectNow: true,
	}],
};
MagicItemsList["sword of answering"] = {
	name: "Sword of Answering",
	source: [["DMG24", 313]],
	type: "Weapon (Longsword)",
	rarity: "Legendary",
	magicItemTable: "Armaments",
	attunement: true,
	description: "As a Reaction while I hold this +3 Longsword, I can make one melee attack with it against any creature in my reach that deals damage to me. I have Advantage on the attack roll, and any damage dealt with this special attack ignores any Immunity or Resistance the target has to that damage.",
	descriptionFull: "You gain a +3 bonus to attack rolls and damage rolls made with this sword. In addition, while you hold the sword, you can take a Reaction to make one melee attack with it against any creature in your reach that deals damage to you. You have Advantage on the attack roll, and any damage dealt with this special attack ignores any Immunity or Resistance the target has to that damage.",
	weight: 3,
	action: [["reaction", ""]],
	weaponOptions: [{
		baseWeapon: "longsword",
		regExpSearch: /^(?=.*sword)(?=.*answering).*$/i,
		name: "Sword of Answering",
		source: [["DMG24", 313]],
		description: "Versatile (1d10); Reaction when damaged: 1 attack (Adv, ignore Resistance/Immunity)",
		modifiers: [3, 3],
		selectNow: true,
	}],
};
MagicItemsList["sword of vengeance"] = {
	name: "Sword of Vengeance",
	nameTest: /^(?=.*(sword|\uFEFF))(?=.*vengeance).*$/i,
	source: [["DMG24", 314]],
	type: "Weapon (Glaive, Greatsword, Longsword, Rapier, Scimitar, or Shortsword)",
	rarity: "Uncommon",
	magicItemTable: "Armaments",
	attunement: true,
	cursed: true,
	description: "I gain a +1 bonus to attack rolls and damage rolls made with this magic weapon." + (typePF ? " " : "\n") + "***Curse***. I can't part with it and have Disadv" + (typePF ? "" : "antage") + " on attacks with other weapons. " + (typePF ? "If" : "Whenever") + " I take damage in combat, I must make a DC 15 Wis" + (typePF ? " save" : "dom saving throw") + " or attack the attacker until one of us drops to 0 HP or I can't reach them to attack in melee.",
	descriptionFull: [
		"You gain a +1 bonus to attack rolls and damage rolls made with this magic weapon.",
		"***Curse***. This weapon is cursed and possessed by a vengeful spirit. Becoming attuned to it extends the curse to you. As long as you remain cursed, you are unwilling to part with the weapon, keeping it on your person at all times. While attuned to this weapon, you have Disadvantage on attack rolls made with weapons other than this one.",
		"In addition, while the weapon is on your person, you must succeed on a DC 15 Wisdom saving throw whenever you take damage from another creature in combat. On a failed save, you must attack the creature that damaged you until you drop to 0 Hit Points or it does or until you can't reach the creature to make a melee attack against it.",
		"You can break the curse in the usual ways. Alternatively, casting Banishment on the weapon forces the vengeful spirit to leave it. The weapon then becomes a +1 Weapon with no other properties.",
	],
	chooseGear: {
		type: "weapon",
		prefixOrSuffix: "prefix",
		prefixOrSuffix: ["prefix", "of Vengeance \uFEFF"],
		itemName1stPage: ["prefix", "of Vengeance"],
		descriptionChange: false,
		excludeCheck: function (inObjKey, inObj, v) {
			return !v.isMeleeWeapon || !/glaive|rapier|scimitar|sword/i.test(v.baseWeaponName);
		},
	},
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && /glaive|rapier|scimitar|sword/i.test(v.baseWeaponName) && /vengeance/i.test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description += (fields.Description ? "; " : "") + "Cursed";
				};
			},
			'If I include the word "Vengeance" in the name of a Glaive, Greatsword, Longsword, Rapier, Scimitar, or Shortsword, it will be treated as the magic weapon Sword of Vengeance. It adds +1 to hit and damage, but also bears a curse.',
		],
		atkCalc: [
			function (fields, v, output) {
				if (v.isMeleeWeapon && /glaive|rapier|scimitar|sword/i.test(v.baseWeaponName) && /vengeance/i.test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[1] + 1;
				};
			}, "",
		],
	},
};
MagicItemsList["sylvan talon"] = {
	name: "Sylvan Talon",
	source: [["DMG24", 314]],
	type: "Weapon (Dagger, Rapier, Scimitar, Shortsword, Sickle, or Spear)",
	rarity: "Common",
	magicItemTable: "Armaments",
	attunement: true,
	description: [
		"While this weapon is on my person, I understand the non-\u200Awritten communication of all Fey, and they understand mine.",
		"***Secret Message***. As a Magic action once per dawn, I can use the weapon to cast *Message*.",
	],
	descriptionFull: [
		"While this weapon is on your person, you understand the non-written communication of all Fey, and they understand yours.",
		"***Secret Message***. As a Magic action, you can use the weapon to cast Message. Once this property is used, it can't be used again until the next dawn.",
	],
	languageProfs: ["Fey (non-written)"],
	spellcastingBonus: [{
		name: "Secret Message",
		spells: ["message"],
		selection: ["message"],
		firstCol: "onceday",
	}],
	chooseGear: {
		type: "weapon",
		prefixOrSuffix: "brackets",
		descriptionChange: ["replace", "weapon"],
		excludeCheck: function (inObjKey, inObj, v) {
			return !v.isMeleeWeapon || !/dagger|rapier|scimitar|shortsword|sickle|spear/i.test(v.baseWeaponName);
		},
	},
};
MagicItemsList["talking doll"] = {
	name: "Talking Doll",
	source: [["DMG24", 315]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: ["Arcana", "Implements"],
	attunement: true,
	description: "I can spend a Short Rest within 5 ft of this doll, telling it up to six phrases, each up to six words long, and set a condition under which the doll speaks each phrase. Whatever the condition, it must occur within 5 ft of the doll to make it speak. The doll's phrases are lost when my Attunement to the doll ends.",
	descriptionLong: "While this doll is within 5 ft of me, I can spend a Short Rest telling it to say up to six phrases, none of which can be more than six words long, and set a condition under which the doll speaks each phrase. I can also replace old phrases with new ones. Whatever the condition, it must occur within 5 ft of the doll to make it speak. For example, whenever someone picks up the doll, it might say, \"I want a piece of candy.\" The doll's phrases are lost when my Attunement to the doll ends.",
	descriptionFull: "While this doll is within 5 feet of you, you can spend a Short Rest telling it to say up to six phrases, none of which can be more than six words long, and set a condition under which the doll speaks each phrase. You can also replace old phrases with new ones. Whatever the condition, it must occur within 5 feet of the doll to make it speak. For example, whenever someone picks up the doll, it might say, \"I want a piece of candy.\" The doll's phrases are lost when your Attunement to the doll ends.",
};
MagicItemsList["tankard of sobriety"] = {
	name: "Tankard of Sobriety",
	source: [["DMG24", 315]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: ["Arcana", "Implements"],
	description: "This tankard has a stern face sculpted into one side. I can drink ale, wine, or any other nonmagical alcoholic beverage poured into it without becoming inebriated. The tankard has no effect on magical liquids or harmful substances such as poison.",
	descriptionFull: "This tankard has a stern face sculpted into one side. You can drink ale, wine, or any other nonmagical alcoholic beverage poured into it without becoming inebriated. The tankard has no effect on magical liquids or harmful substances such as poison.",
	weight: 1,
};
MagicItemsList["tentacle rod"] = {
	name: "Tentacle Rod",
	source: [["DMG24", 316]],
	type: "Rod",
	rarity: "Rare",
	magicItemTable: ["Armaments", "Relics"],
	attunement: true,
	description: "As a Magic action, the rod's 3 tentacles attack in 15 ft, +9 to hit, 1d6 Psychic damage. A target hit by all 3 must DC 15 Dex save or be Restrained while in 15 ft, till I free it as a Bonus Action or I'm Incapacitated. On each of its turns, the Restrained takes 3d6 Psychic damage at the start and repeats the save at the end.",
	descriptionLong: "As a Magic action while holding this rod, I can direct each of its three rubbery tentacles to attack a creature I can see within 15 ft. Each tentacle makes a melee attack roll with a +9 bonus and deals 1d6 Psychic damage. If a target is hit by all three tentacles, it must make a DC 15 Dexterity saving throw or be Restrained until I'm Incapacitated, I take a Bonus Action to release it, or the target is no longer within 15 ft of me. While Restrained in this way, the target takes 3d6 Psychic damage at the start of each of its turns. At the end of each of its turns, the target repeats the save, ending the effect on itself on a success.",
	descriptionFull: "This rod ends in three rubbery tentacles. While holding the rod, you can take a Magic action to direct the tentacles to stretch outward, each one attacking a creature you can see within 15 feet of yourself. For each tentacle, make a melee attack roll with a +9 bonus. A tentacle deals 1d6 Psychic damage on a hit. If you hit the same target with all three tentacles, the target must succeed on a DC 15 Dexterity saving throw or have the Restrained condition until you have the Incapacitated condition, until you take a Bonus Action to release the target, or until the target is no longer within 15 feet of you. While Restrained in this way, the target takes 3d6 Psychic damage at the start of each of its turns. At the end of each of its turns, the target repeats the save, ending the effect on itself on a success.",
	weight: 2,
	action: [["action", " (3 attacks)"]],
	weaponOptions: [{
		regExpSearch: /^(?=.*tentacle)(?=.*rod).*$/i,
		name: "Tentacle Rod",
		source: [["DMG24", 316]],
		ability: 0,
		type: "Magic Item",
		damage: [1, 6, "psychic"],
		range: "Melee (15 ft)",
		description: "3 attacks as an Action; All 3 hit same target: DC 15 Dex save or Restrained, see item",
		abilitytodamage: false,
		modifiers: [9, ""],
		weight: 2,
		isAlwaysProf: false,
		isNotWeapon: true,
		selectNow: true,
	}],
};
MagicItemsList["tome of the stilled tongue"] = {
	name: "Tome of the Stilled Tongue",
	source: [["DMG24", 317]],
	type: "Wondrous Item",
	rarity: "Legendary",
	magicItemTable: "Arcana",
	attunement: true,
	prerequisite: "Requires Attunement by a Wizard",
	prereqeval: function (v) { return !!classes.known.wizard; },
	description: "I can use this book as a Spellbook and an Arcane Focus. Once per dawn while holding it, I can take a Bonus Action to cast a spell I have written in it, without expending a spell slot or using any Verbal or Somatic components. Only I can remove the tongue pinned to the cover, doing so erases all spells within.",
	descriptionLong: "This book has a dessicated tongue pinned to the cover, the first few pages of which are filled with indecipherable scrawls. The remaining pages are blank. I can use it as a Spellbook and an Arcane Focus. Once per dawn while holding it, I can take a Bonus Action to cast a spell I have written in the tome, without expending a spell slot or using any Verbal or Somatic components. Only I can remove the tongue from the book's cover, permanently erasing all spells within. Vecna watches the user of this tome and can write cryptic messages in it which typically fade away after they are read.",
	descriptionFull: [
		"This book has a desiccated tongue pinned to its front cover. Five of these tomes exist, and it's unknown which one is the original. The tongue on the first Tome of the Stilled Tongue belonged to a treacherous former servant of the lich Vecna. The tongues pinned to the covers of the four copies came from other spellcasters who crossed Vecna. The first few pages of each tome are filled with indecipherable scrawls. The remaining pages are blank.",
		"While attuned to this item, you can use it as a Spellbook and an Arcane Focus. In addition, while holding the tome, you can take a Bonus Action to cast a spell you have written in this tome, without expending a spell slot or using any Verbal or Somatic components. Once used, this property of the tome can't be used again until the next dawn.",
		"Only you can remove the tongue from the book's cover. If you do so, all spells written in the book are permanently erased.",
		"Vecna watches anyone using this tome and can write cryptic messages in it. These messages typically fade away after they are read.",
	],
	weight: 5,
	action: [["bonus action", ""]],
	usages: 1,
	recovery: "Dawn",
};
MagicItemsList["veteran's cane"] = {
	name: "Veteran's Cane",
	source: [["DMG24", 318]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: ["Armaments", "Implements"],
	description: "As a Bonus Action, I can transform this walking cane into an ordinary Longsword or change the Longsword back into a walking cane. In either case, I must be holding the item.",
	descriptionFull: "As a Bonus Action, you can transform this walking cane into an ordinary Longsword or change the Longsword back into a walking cane. In either case, you must be holding the item.",
	weight: 3,
	action: [["bonus action", ""]],
	weaponOptions: [{
		baseWeapon: "longsword",
		regExpSearch: /^(?=.*veteran)(?=.*cane).*$/i,
		name: "Veteran's Cane",
		source: [["DMG24", 318]],
		selectNow: true,
	}],
};
MagicItemsList["walloping ammunition"] = {
	name: "Walloping Ammunition",
	nameTest: /walloping.+(ammunition|ammo|\u180B)/i,
	source: [["DMG24", 318]],
	type: "Weapon (Any Ammunition)",
	rarity: "Common",
	magicItemTable: ["Armaments", "Implements"],
	description: "This magic ammunition packs a wallop. A creature hit by it must succeed on a DC 10 Strength saving throw or be knocked Prone.",
	descriptionFull: "A creature hit by this ammunition must succeed on a DC 10 Strength saving throw or have the Prone condition.",
	allowDuplicates: true,
	chooseGear: {
		type: "ammo",
		prefixOrSuffix: ["between", "Walloping", "\u180B"],
		descriptionChange: ["replace", "ammunition"],
		excludeCheck: function (inObjKey, inObj) {
			return /vials|flasks/i.test(inObj.icon);
		},
		removePluralS: true,
	},
};
MagicItemsList["wand of conducting"] = {
	name: "Wand of Conducting",
	source: [["DMG24", 319]],
	type: "Wand",
	rarity: "Common",
	magicItemTable: ["Arcana", "Implements"],
	description: "This wand has 3 charges and regains all at dawn. As a Magic action, I can expend 1 charge to create orchestral music by waving it around. The music can be heard out to 120 ft and ends when I stop waving the wand. If I use the last charge, I roll 1d20. On a 1, a sad tuba sound plays as the wand crumbles into dust.",
	descriptionFull: [
		"This wand has 3 charges. While holding it, you can take a Magic action to expend 1 charge and create orchestral music by waving it around. The music can be heard out to 120 feet and ends when you stop waving the wand.",
		"***Regaining Charges***. The wand regains all expended charges daily at dawn. If you expend the wand's last charge, roll 1d20. On a 1, a sad tuba sound plays as the wand crumbles into dust and is destroyed.",
	],
	weight: 1,
	usages: 3,
	recovery: "Dawn",
	action: [["action", ""]],
};
MagicItemsList["wand of pyrotechnics"] = {
	name: "Wand of Pyrotechnics",
	source: [["DMG24", 321]],
	type: "Wand",
	rarity: "Common",
	magicItemTable: ["Arcana", "Implements"],
	description: "This wand has 7 charges and regains 1d6+1 at dawn. As a Magic action, I can expend 1 charge to create a harmless burst of light \x26 sound at a point I can see within 120 ft. The noise travels 300 ft. The light is as bright as a torch flame but lasts only a second. If I use the last charge, I roll 1d20. On a 1, the wand is destroyed.",
	descriptionFull: [
		"This wand has 7 charges. While holding it, you can take a Magic action to expend 1 charge and create a harmless burst of multicolored light at a point you can see up to 120 feet away. The burst of light is accompanied by a crackling noise that can be heard up to 300 feet away. The light is as bright as a torch flame but lasts only a second.",
		"***Regaining Charges***. The wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll 1d20. On a 1, the wand erupts in a harmless pyrotechnic display and is destroyed.",
	],
	weight: 1,
	usages: 7,
	recovery: "Dawn",
	additional: "regains 1d6+1",
	action: [["action", ""]],
};
MagicItemsList["wave"] = {
	name: "Wave",
	source: [["DMG24", 323]],
	type: "Weapon (Trident)",
	rarity: "Artifact",
	attunement: true,
	description: "This sentient +3 Trident, gives me Advantage on Initiative and allows me to breathe underwater by forming a bubble of air around my head. When I roll a 20 to hit with it, it deals +21 Necrotic damage. Once per dawn, I can cast a level 9 *Globe of Invulnerability* from it. See Notes page for other properties.",
	descriptionFull: [
		"Held in the dungeon of White Plume Mountain, *Wave* is engraved with images of waves, shells, and sea creatures.",
		"You gain a +3 bonus to attack rolls and damage rolls made with this magic weapon. When you roll a 20 on the d20 for an attack roll with this weapon, the target takes an extra 21 Necrotic damage.",
		"While holding *Wave*, you gain the following benefits:",
		" \u2022 **Combat Ready**. You have Advantage on Initiative rolls.",
		" \u2022 **Underwater Adaptation**. A bubble of air forms around your head while you are underwater, allowing you to breathe normally in that environment.",
		"***Aquatic Command***. *Wave* has 3 charges and regains 1d3 expended charges daily at dawn. While you carry it, you can expend 1 charge to cast *Dominate Beast* (save DC 20) from it on a Beast that has a Swim Speed.",
		"***Globe of Invulnerability***. While holding *Wave*, you can cast the level 9 version of *Globe of Invulnerability* from it. Once used, this property can't be used again until the next dawn.",
		"***Sentience***. *Wave* is a sentient weapon of Neutral alignment, with an Intelligence of 14, a Wisdom of 10, and a Charisma of 18. It has hearing and Darkvision out to 120 feet.",
		"The weapon communicates telepathically with its wielder and speaks Aquan.",
		"***Personality***. *Wave* zealously encourages mortals to worship sea gods and has a habit of humming sea chanteys. Conflict arises if the wielder fails to further the weapon's objectives in the world.",
		"***Destroying Wave***. *Wave* can be destroyed only on the island of Thunderforge, where it was forged. The weapon must be melted down by a storm giant or someone imbued with a storm giant's strength. Destroying *Wave* angers a god of the sea, who sends powerful agents to attack the island and punish the destroyers.",
	],
	weight: 4,
	weaponOptions: [{
		baseWeapon: "trident",
		regExpSearch: /wave/i,
		name: "Wave",
		source: [["DMG24", 323]],
		description: "Thrown, Versatile (1d10); On 20 to hit: +21 Necrotic damage",
		modifiers: [3, 3],
		selectNow: true,
	}],
	advantages: [["Initiative", true]],
	savetxt: { text: "I can breathe normally underwater" },
	extraLimitedFeatures: [{
		name: "Wave [Dominate Beast] (regains 1d3)",
		usages: 3,
		recovery: "Dawn",
	}, {
		name: "Wave [Globe of Invulnerability]",
		usages: 1,
		recovery: "Dawn",
	}],
	fixedDC: 20,
	spellFirstColTitle: "Ch",
	spellcastingBonus: [{
		name: "1 charge",
		spells: ["dominate beast"],
		selection: ["dominate beast"],
		firstCol: 1,
	}, {
		name: "1/dawn at level 9",
		spells: ["globe of invulnerability"],
		selection: ["globe of invulnerability"],
		firstCol: "onceday",
	}],
	spellChanges: {
		"dominate beast": {
			description: "1 Beast with Swim spd save or Charmed; redo on dmg; follows telepathic commands; Rea to use its Rea",
			changes: "Can only affect Beasts with a Swim speed.",
		},
		"globe of invulnerability": {
			description: "Immobile barrier surrounds me for duration; SL<9 cast outside area can't affect inside area",
			changes: "Cast at level 9.",
		},
	},
	toNotesPage: [
		{
			name: "Wave",
			useDescriptionFull: function (str) {
				return str.replace("magic weapon", "magic Trident").replace("allowing I", "allowing me");
			},
		},
		Object.assign({}, sentientItemConflictNote, {
			amendTo: "*Wave* is engraved with images",
		}),
	],
};
MagicItemsList["whelm"] = {
	name: "Whelm",
	source: [["DMG24", 324]],
	type: "Weapon (Warhammer)",
	rarity: "Artifact",
	attunement: true,
	prerequisite: "Requires Attunement by a Dwarf or a Creature Attuned to a Belt of Dwarvenkind",
	prereqeval: function (v) {
		var knownIdx = CurrentMagicItems.known.indexOf("belt of dwarvenkind");
		return /dwarf/.test(CurrentRace.known) || isMagicItemAttuned(knownIdx);
	},
	description: "This sentient +3 Warhammer has Thrown (60/180 ft). As a Magic action once per dawn, I can have creatures I choose within 60 ft make a DC 20 Con save or be Stunned for 1 min, repeating the save at the end of their turns. When thrown, it deals +1d8 Force damage and returns to my hand. See Notes page for properties.",
	descriptionFull: [
		"*Whelm* is a powerful weapon forged by dwarves and lost in the dungeon of White Plume Mountain.",
		"You gain a +3 bonus to attack rolls and damage rolls made with this magic weapon.",
		"***Hurl***. *Whelm* has Thrown with a normal range of 60 feet and a long range of 180 feet. When you hit with a ranged attack roll using *Whelm*, the target takes an extra 1d8 Force damage, or an extra 4d8 Force damage if the target is a Construct, an Elemental, or a Giant. Immediately after hitting or missing, the weapon flies back to your hand.",
		"***Shock Wave***. You can take a Magic action to strike the ground with *Whelm* and send a shock wave out from the point of impact. Each creature of your choice on the ground within 60 feet of that point must succeed on a DC 20 Constitution saving throw or have the Stunned condition for 1 minute. A creature repeats the save at the end of each of its turns, ending the effect on itself on a success. Once used, this property can't be used again until the next dawn.",
		"***Supernatural Awareness***. While you are holding the weapon, it alerts you to the location of any secret or concealed doors within 30 feet of you. In addition, you can cast *Detect Evil and Good* or *Locate Object* from the weapon. Once you cast either spell, you can't cast it from the weapon again until the next dawn.",
		"***Sentience***. *Whelm* is a sentient, Lawful Neutral weapon with an Intelligence of 15, a Wisdom of 12, and a Charisma of 15. It has hearing and Darkvision out to 120 feet.",
		"The weapon communicates telepathically with its wielder and speaks Dwarvish, Giant, and Goblin.",
		"***Personality***. *Whelm* has ties to the dwarf clan that created it, called the Dankil or the Mightyhammer clan. It longs to be returned to that clan. *Whelm*'s purpose is to protect dwarves. Conflict arises if the wielder doesn't share this goal.",
		"***Destroying Whelm***. *Whelm* can be dissolved in the acidic bile of a recently slain ancient black dragon. It can also be melted down in the forges of the Mightyhammer dwarf clan, but only by the rightful leader of that clan.",
	],
	weight: 5,
	weaponOptions: [{
		baseWeapon: "warhammer",
		regExpSearch: /whelm/i,
		name: "Whelm",
		source: [["DMG24", 324]],
		range: "Melee, 60/180 ft",
		description: "Returning, Thrown, Versatile (1d10); +1d8 Force damage when thrown (or +4d8 vs Construct/Elemental/Giant)",
		modifiers: [3, 3],
		selectNow: true,
	}],
	action: [["action", " (Shock Wave)"]],
	extraLimitedFeatures: [{
		name: "Whelm (Shock Wave)",
		usages: 1,
		recovery: "Dawn",
	}],
	vision: [["Know location of secret doors", 30]],
	spellcastingBonus: [{
		name: "Once per dawn",
		spells: ["detect evil and good", "locate object"],
		selection: ["detect evil and good", "locate object"],
		firstCol: "onceday",
	}],
	toNotesPage: [
		{
			name: "Whelm",
			useDescriptionFull: function (str) {
				return str.replace("magic weapon", "magic Warhammer").replace("alerts I", "alerts me");
			},
		},
		Object.assign({}, sentientItemConflictNote, {
			amendTo: "*Whelm* is a powerful weapon",
		}),
	],
};
MagicItemsList["wraps of unarmed power"] = {
	name: "Wraps of Unarmed Power",
	source: [["DMG24", 325]],
	type: "Wondrous Item",
	magicItemTable: "Armaments",
	description: "Select one of the choices.",
	descriptionFull: "While wearing these wraps, you have a bonus to attack rolls and damage rolls made with your Unarmed Strikes. The bonus is determined by the wraps' rarity, and those strikes deal your choice of Force damage or their normal damage type: Uncommon (+1), Rare (+2), or Very Rare (+3).",
	allowDuplicates: true,
	choices: ["+1 Wraps of Unarmed Power (Uncommon)", "+2 Wraps of Unarmed Power (Rare)", "+3 Wraps of Unarmed Power (Very Rare)"],
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (v.baseWeaponName === "unarmed strike" && DamageTypes[fields.Damage_Type.toLowerCase()] && !/force/i.test(fields.Damage_Type)) {
					var shortOldType = fields.Damage_Type.replace(/(tic|(eon)?ing)$/i, ".").capitalize();
					fields.Damage_Type = shortOldType + "/Force";
				};
			},
			"",
			700,
		],
	},
	weaponsAdd: { select: ["Unarmed Strike"] },
	"+1 wraps of unarmed power (uncommon)": {
		name: "Wraps of Unarmed Power +1",
		nameTest: "+1 Wraps of Unarmed Power",
		rarity: "Uncommon",
		description: "While wearing these wraps, I gain a +1 bonus to the attack and damage rolls of my Unarmed Strikes and can have them deal Force damage instead of their normal damage.",
		calcChanges: {
			atkCalc: [
				function (fields, v, output) {
					if (v.baseWeaponName === "unarmed strike") {
						output.magic += 1;
					};
				},
				"My Unarmed Strikes gain a +1 bonus to hit and damage and I can choose to have them deal Force damage or their normal damage.",
			],
		},
	},
	"+2 wraps of unarmed power (rare)": {
		name: "Wraps of Unarmed Power +2",
		nameTest: "+2 Wraps of Unarmed Power",
		rarity: "Rare",
		description: "While wearing these wraps, I gain a +2 bonus to the attack and damage rolls of my Unarmed Strikes and can have them deal Force damage instead of their normal damage.",
		calcChanges: {
			atkCalc: [
				function (fields, v, output) {
					if (v.baseWeaponName === "unarmed strike") {
						output.magic += 2;
					};
				},
				"My Unarmed Strikes gain a +2 bonus to hit and damage and I can choose to have them deal Force damage or their normal damage.",
			],
		},
	},
	"+3 wraps of unarmed power (very rare)": {
		name: "Wraps of Unarmed Power +3",
		nameTest: "+3 Wraps of Unarmed Power",
		rarity: "Very Rare",
		description: "While wearing these wraps, I gain a +3 bonus to the attack and damage rolls of my Unarmed Strikes and can have them deal Force damage instead of their normal damage.",
		calcChanges: {
			atkCalc: [
				function (fields, v, output) {
					if (v.baseWeaponName === "unarmed strike") {
						output.magic += 3;
					};
				},
				"My Unarmed Strikes gain a +3 bonus to hit and damage and I can choose to have them deal Force damage or their normal damage.",
			],
		},
	},
};

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
