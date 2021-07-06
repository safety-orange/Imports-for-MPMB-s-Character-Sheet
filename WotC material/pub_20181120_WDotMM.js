var iFileName = "pub_20181120_WDotMM.js";
RequiredSheetVersion(13);
// This file adds the magic items from the Waterdeep: Dungeon of the Mad Mage adventure to MPMB's Character Record Sheet

// Define the source
SourceList["WDotMM"] = {
	name : "Waterdeep: Dungeon of the Mad Mage [items]",
	abbreviation : "WDotMM",
	group : "Adventure Books",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/waterdeep-dungeon-mad-mage",
	date : "2018/11/20"
};

// Magic Items
MagicItemsList["dagger of blindsight"] = {
	name : "Dagger of Blindsight",
	source : ["WDotMM", 86],
	type : "weapon (dagger)",
	rarity : "rare",
	magicItemTable : "G",
	description : "This magical dagger has a saw-toothed edge and a black pearl nested in its pommel. While I'm attuned to it, I have blindsight out to a range of 30 ft.",
	descriptionFull : "This rare magic item requires attunement. A creature attuned to it gains blindsight out to a range of 30 feet. The dagger has a saw-toothed edge and a black pearl nested in its pommel.",
	attunement : true,
	weight : 1,
	weaponsAdd : ["Dagger of Blindsight"],
	vision : [["Blindsight", 30]]
}
MagicItemsList["professor orb"] = { // contains contributions by Pengsloth
	name : "Professor Orb",
	source : ["WDotMM", 131],
	type : "wondrous item",
	rarity : "rare",
	storyItemAL : true,
	description : "This orb is sentient with the personality of a scholar, but no will of its own. It has Int 18, Wis and Cha of 3d6 each. It knows and reads 4 languages, can see/hear as a human out to 60 ft, and has extensive knowledge of 4 narrow academic subjects (+9 on checks). It knows Mage Hand, which it uses to move around.",
	descriptionFull : "Each professor orb takes the form of a smooth, solid, 5-pound sphere of smoky gray quartz about the size of a grapefruit. Close examination reveals two or more pinpricks of silver light deep inside the sphere.\n   A Professor Orb is sentient and has the personality of a scholar. Its alignment is determined by rolling on the alignment table in the \"Sentient Magic Items\" section in chapter 7 of the Dungeon Master's Guide. Regardless of its disposition, the orb has an Intelligence of 18, and Wisdom and Charisma scores determined by rolling 3d6 for each ability. The orb speaks, reads, and understands four languages, and can see and hear normally out to a range of 60 feet. Unlike most sentient items, the orb has no will of its own and can't initiate a conflict with the creature in possession of it.\n   A Professor Orb has extensive knowledge of four narrow academic subjects. When making an Intelligence check to recall lore from any of its areas of expertise, the orb has a +9 bonus to its roll (including its Intelligence modifier).\n   In addition to the knowledge it possesses, a professor orb can cast the Mage Hand cantrip at will. It uses the spell only to transport itself. Its spellcasting ability is Intelligence."
}
AddFeatureChoice(MagicItemsList["horn of valhalla"], false, "Endless Maze (rare; 3d4+3 berserkers; prereq: simple weapons prof.)", {
	name : "Horn of the Endless Maze",
	source : ["WDotMM", 163],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "G", // interpretation, made it the same as Brass Horn of Valhalla,
	description : "As an action once per 7 days, I can blow this horn to summon 3d4+3 minotaurs (use berserker stats) from the Abyss in 60 ft. They return after 1 hour or when they drop to 0 hp. They follow my commands and are friendly to me and my companions if I'm proficient with all simple weapons. Otherwise, they attack me.",
	descriptionFull : "You can use an action to blow this horn. In response, 3d4+3 warrior spirits from the Abyss appear within 60 feet of you. They look like Minotaurs and use the statistics of a berserker. They return to the Abyss after 1 hour or when they drop to 0 hit points. Once you use the horn, it can't be used again until 7 days have passed.\n   If you blow the horn without having proficiency with all simple weapons, the summoned berserkers attack you. If you meet the requirement, they are friendly to you and your companions and follow your commands."
});
MagicItemsList["dodecahedron of doom"] = {
	name : "Dodecahedron of Doom",
	source : ["WDotMM", 174],
	type : "wondrous item",
	rarity : "rare",
	notLegalAL : true,
	description : "This twelve-sided metal die is 1 ft across and bears the numbers 1 through 12 engraved on its pentagonal sides. As an action, I can hurl it up to 60 ft. A random magical effect occurs when the die comes to rest after rolling across the ground for at least 10 ft. See the Notes page for the table of effects.",
	descriptionFull : "This twelve-sided metal die is 12 inches across and bears the numbers 1 through 12 engraved on its pentagonal sides. The dodecahedron contains arcane clockwork mechanisms that whir and click whenever the die is cast.\n   The dodecahedron can be hurled up to 60 feet as an action. A random magical effect occurs when the die comes to rest after rolling across the ground for at least 10 feet. If an effect requires a target and no eligible target is within range, nothing happens. Spells cast by the dodecahedron require no components. Roll a d12 and consult the following table to determine the effect:\n\n" + toUni("d12\teffect") + "\n1-2\tThe dodecahedron explodes and is destroyed. Each creature within 20 feet of the exploding die must make a DC 13 Dexterity saving throw, taking 40 (9d8) force damage on a failed save, or half as much damage on a successful one.\n3-4\tThe dodecahedron casts Light on itself. The effect lasts until a creature touches the die.\n5-6\tThe dodecahedron casts Ray of Frost (+5 to hit), targeting a random creature within 60 feet of it that doesn't have total cover against the attack.\n7-8\tThe dodecahedron casts Shocking Grasp (+5 to hit) on the next creature that touches it.\n9-10\tThe dodecahedron casts Darkness on itself. The effect has a duration of 10 minutes.\n11-12\tThe next creature to touch the dodecahedron gains 1d10 temporary hit points that last for 1 hour.",
	weight : 2,
	toNotesPage : [{
		name : "Effect Table",
		popupName : "Dodecahedron of Doom effect table",
		note : [
			"This twelve-sided metal die is 12 inches across and bears the numbers 1 through 12 engraved on its pentagonal sides. The dodecahedron contains arcane clockwork mechanisms that whir and click whenever the die is cast.",
			"If an effect requires a target and no eligible target is within range, nothing happens.",
			"d12\tEFFECT",
			"1-2\tThe dodecahedron explodes and is destroyed. Each creature within 20 feet of the exploding die must make a DC 13 Dexterity saving throw, taking 40 (9d8) force damage on a failed save, or half as much damage on a successful one.",
			"3-4\tThe dodecahedron casts light on itself. The effect lasts until a creature touches the die.",
			"5-6\tThe dodecahedron casts ray of frost (+5 to hit), targeting a random creature within 60 feet of it that doesn't have total cover against the attack.",
			"7-8\tThe dodecahedron casts shocking grasp (+5 to hit) on the next creature that touches it.",
			"9-10\tThe dodecahedron casts darkness on itself. The effect has a duration of 10 minutes.",
			"11-12\tThe next creature to touch the dodecahedron gains 1d10 temporary hit points that last for 1 hour."
		]
	}]
}
MagicItemsList["orb of gonging"] = { // contains contributions by Pengsloth
	name : "Orb of Gonging",
	source : ["WDotMM", 174],
	type : "wondrous item",
	rarity : "common",
	description : "This item is a hollow, 5-inch-diameter orb with notches along its outside bronze rings. As an action, I can align the notches, causing the orb to gong loudly until the notches are no longer aligned. The sounds are spaced 6 seconds apart and can be heard out to a range of 600 ft.",
	descriptionFull : "This common wondrous item is a hollow, 5-inch-diameter orb that weighs 5 pounds. Its outer shell is composed of notched bronze rings, which can be turned so that the notches line up. Aligning the notches requires an action, and doing so causes the orb to gong loudly until the notches are no longer aligned. The sounds are spaced 6 seconds apart and can be heard out to a range of 600 feet."
}
MagicItemsList["black crystal tablet"] = { // contains contributions by Pengsloth
	name : "Black Crystal Tablet",
	source : ["WDotMM", 284],
	type : "wondrous item",
	rarity : "legendary",
	magicItemTable : "I",
	description : "As an action once per dawn, I can use the tablet to cast Eyebite or Gate, but the latter only links to the Far Realm. When attuning to it, I must make a DC 20 Wisdom saving throw or be afflicted by afflicted long-term madness (see table at SRD 201 or DMG 259).",
	descriptionFull : "Any creature that attunes to the tablet must make a DC 20 Wisdom saving throw at the end of its next long rest. On a failed save, the creature becomes afflicted with a random form of long-term madness (see \"Madness\" in chapter 8 of the Dungeon Master's Guide).\n   As an action, a creature attuned to the Black Crystal Tablet can use it to cast Eyebite or Gate (the portal created by this spell links to the Far Realm only). After the tablet is used to cast a spell, it cannot be used again until the next dawn.",
	attunement : true,
	prerequisite : "Requires attunement by a creature that has proficiency in the arcana skill",
	prereqeval : function(v) { return v.skillProfs.indexOf("Arcana") !== -1; },
	usages : 1,
	recovery : "dawn",
	spellFirstColTitle : "Ch",
	spellcastingBonus : {
		name : "1 charge",
		spells : ["eyebite", "gate"],
		selection : ["eyebite", "gate"],
		firstCol : 1,
		times : 2
	},
	spellChanges : {
		"gate" : {
			description : "Create a portal to a precise location in the far realm; can transport named crea to me",
			changes : "The spell can only connect to the Far Realm."
		}
	}
}
MagicItemsList["helm of the scavenger"] = {
	name : "Helm of the Scavenger",
	source : ["WDotMM", 297],
	type : "wondrous item",
	rarity : "legendary",
	notLegalAL : true,
	description : "This ornate chair can be placed on a ship weighing up to 100 tons. It generates artificial gravity and an envelope of fresh air at 70 \u00B0F around the ship when in the void of space. While attuned to it and sitting in the chair, I can propel the ship, steer it, and see what is happening anywhere on it, but I can't use spell slots.",
	descriptionFull : "This ornate chair is designed to propel and maneuver a ship through space.\n   " + toUni("Passive Properties") + ". The following properties of the helm come into play even when no creature is attuned to it:\n \u2022 When placed aboard a vessel weighing between 1 and 100 tons, the helm generates an envelope of fresh air around the ship while it is in the void of space (but not underwater). This envelope extends out from the edges of the hull in all directions for a distance equal in length to the vessel's beam, so that creatures aboard and near the ship can breathe normally in space. The temperature within the air envelope is 70 degrees Fahrenheit.\n \u2022 When placed aboard a vessel weighing between 1 and 100 tons, the helm generates an artificial gravity field while the ship is in the void of space, so that creatures can walk on the ship's decks as they normally would. Creatures and objects that fall overboard bob in a gravity plane that extends out from the main deck for a distance equal in length to the vessel's beam.\n\n" + toUni("Active Properties") + ". The sensation of being attuned to the helm is akin to being immersed in warm water. While attuned to the helm, you gain the following abilities while you sit in it:\n \u2022 You can use the helm to propel the vessel across or through water and other liquids at a maximum speed in miles per hour equal to your highest-level unexpended spell slot.\n \u2022 You can use the helm to propel the vessel through air or space at a maximum speed in miles per hour equal to your highest-level unexpended spell slot \xD7 10.\n \u2022 Provided you have at least one unexpended spell slot, you can steer the vessel, albeit in a somewhat clumsy fashion, in much the same way that oars or a rudder can maneuver a seafaring ship.\n \u2022 Whenever you like, you can see what's happening on and around the vessel as though you were standing in a location of your choice aboard it.\n\n" + toUni("Drawback") + ". While attuned to the helm, you cannot expend your own spell slots.",
	attunement : true,
	toNotesPage : [{
		name : "Features",
		popupName : "Helm of the Scavenger features",
		note : [
			"When placed aboard a vessel weighing between 1 and 100 tons, this ornate chair can propel and maneuver a ship through space.",
			"The following properties of the helm come into play even when no creature is attuned to it:",
			" \u2022 The helm generates an envelope of fresh air around the ship while it is in the void of space (but not underwater). This envelope extends out from the edges of the hull in all directions for a distance equal in length to the vessel's beam, so that creatures aboard and near the ship can breathe normally in space. The temperature within the air envelope is 70 degrees Fahrenheit.",
			" \u2022 The helm generates an artificial gravity field while the ship is in the void of space, so that creatures can walk on the ship's decks as they normally would. Creatures and objects that fall overboard bob in a gravity plane that extends out from the main deck for a distance equal in length to the vessel's beam.",
			"The sensation of being attuned to the helm is akin to being immersed in warm water. While attuned to the helm, I gain the following abilities while I sit in it:",
			" \u2022 I can use the helm to propel the vessel across or through water and other liquids at a maximum speed in miles per hour equal to my highest-level unexpended spell slot.",
			" \u2022 I can use the helm to propel the vessel through air or space at a maximum speed in miles per hour equal to my highest-level unexpended spell slot \xD7 10.",
			" \u2022 Provided I have at least one unexpended spell slot, I can steer the vessel, albeit in a somewhat clumsy fashion, in much the same way that oars or a rudder can maneuver a seafaring ship.",
			" \u2022 Whenever I like, I can see what's happening on and around the vessel as though I were standing in a location of my choice aboard it.",
			" \u2022 I cannot expend my own spell slots."
		]
	}]
}
MagicItemsList["shield of the uven rune"] = { // contains contributions by Pengsloth
	name : "Shield of the Uven Rune",
	source : ["WDotMM", 299],
	storyItemAL : true,
	description : "I can use the shield as it is, or transfer its runic properties over to a weapon.",
	descriptionFull : "This shield is made from the scale of an ancient white dragon. It has a rune burned into its outward-facing side. A character who examines the rune and succeeds on a DC 20 Intelligence (History) check recognizes it as an uven (\"enemy\" in Giant) rune that confers great power.\n   While holding the shield, you benefit from the following properties.\n   " + toUni("Winter's Friend") + ". You are immune to cold damage.\n   " + toUni("Deadly Rebuke") + ". Immediately after a creature hits you with a melee attack, you can use your reaction to deal 3d6 necrotic damage to that creature.\n   " + toUni("Bane") + ". You can cast the Bane spell from the shield (save DC 17). The spell does not require concentration and lasts for 1 minute. Once you cast the spell from the shield, you can't do so again until you finish a short or long rest.\n   " + toUni("Gift of Vengeance") + ". You can transfer the shield's magic to a nonmagical weapon by tracing the uven rune on the weapon with one finger. The transfer takes 8 hours of work that requires the two items to be within 5 feet of each other. At the end, the shield is destroyed, and the rune is etched or burned into the chosen weapon. This weapon becomes a rare magic item that requires attunement. It has the properties of a +1 weapon. The bonus increases to +3 when the weapon is used against one of the following creature types, chosen by you at the time of the magic weapon's creation: aberrations, celestials, constructs, dragons, elementals, fey, fiends, giants, or undead.",
	attunement : true,
	choices : ["Shield", "Transferred to a weapon"],
	"shield" : {
		name : "Shield of the Uven Rune ",
		type : "shield",
		rarity : "very rare",
		description : "This shield made from the scale of a white dragon gives me cold damage immunity. As a reaction when I'm hit by a melee attack, I can deal 3d6 necrotic damage to the attacker. Once per short rest, I can cast Bane (DC 16) needing no concentration. I can do an 8 hour ritual to transfer the rune to a weapon, see book.",
		weight : 6,
		usages : 1,
		recovery : "short rest",
		additional : "Bane",
		shieldAdd : "Shield of the Uven Rune",
		action : [["reaction", ""]],
		savetxt : {	immune : ["cold"] },
		fixedDC : 17,
		spellcastingBonus : {
			name : "Once per short rest",
			spells : ["bane"],
			selection : ["bane"],
			firstCol : "oncesr"
		},
		spellChanges : {
			"bane" : {
				duration : "1 min",
				changes : "The spell does not require concentration."
			}
		}
	},
	"transferred to a weapon" : {
		name : "Uven Rune Weapon",
		type : "weapon (any)",
		rarity : "rare",
		description : "This magic weapon adds a +1 bonus to attack and damage rolls made with it. This bonus increases to +3 when it is used against the creature type, chosen at the time of the magic weapon's creation: aberrations, celestials, constructs, dragons, elementals, fey, fiends, giants, or undead.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "brackets",
			descriptionChange : ["replace", "weapon"],
			itemName1stPage : ["suffix", "Uven Rune"]
		},
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && (/^(?=.*\buven\b)(?=.*(rune|runic)).*$/i).test(v.WeaponTextName)) {
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
						fields.Description += (fields.Description ? '; ' : '') + '+2 to hit/damage vs. chosen creature type';
					}
				},
				'If I include the words "Uven Rune" in a the name of a weapon, it will be treated as the magic weapon Uven Rune Weapon, which has a +1 bonus, or a +3 bonus against its chosen creature type.'
			],
			atkCalc : [
				function (fields, v, output) {
					if ((/^(?=.*\buven\b)(?=.*(rune|runic)).*$/i).test(v.WeaponTextName)) {
						output.magic = v.thisWeapon[1] + 1;
					}
				}, ''
			]
		}
	}
}
MagicItemsList["blast scepter"] = {  // contains contributions by Pengsloth
	name : "Blast Scepter",
	source : ["WDotMM", 310],
	type : "rod",
	rarity : "very rare",
	storyItemAL : true,
	description : "While attuned to the Blast Scepter, I gain resistance to fire and lightning damage and can, as an action, use it to cast Thunderwave as a 4th-level spell (save DC 16) without expending a spell slot. It can be used as an arcane focus.",
	descriptionFull : "The Blast Scepter can be used as an arcane focus.\n   Whoever is attuned to the Blast Scepter gains resistance to fire and lightning damage and can, as an action, use it to cast Thunderwave as a 4th-level spell (save DC 16) without expending a spell slot.",
	attunement : true,
	dmgres : ["Fire", "Lightning"],
	fixedDC : 16,
	spellcastingBonus : {
		name : "At will (4th level)",
		spells : ["thunderwave"],
		selection : ["thunderwave"],
		firstCol : "atwill"
	},
	spellChanges : {
		"thunderwave" : {
			nameShort : "Thunderwave (4th level)",
			description : "All crea/obj in area 5d8 Thunder dmg, pushed 10 ft away; save halves and not pushed",
			changes : "Cast as if using a 4th-level spell slot"
		}
	}
}
MagicItemsList["chest of preserving"] = {
	name : "Chest of Preserving",
	source : ["WDotMM", 139],
	type : "wondrous item",
	rarity : "common",
	description : "Food and other perishable items do not age or decay while inside this chest. It is 2.5 ft long, 1.5 ft wide, and 1 ft tall with a half-barrel lid. The chest has a lock, which can be picked with thieves' tools and a successful DC 15 Dexterity check. Smashing the lock or any other part of the chest renders it nonmagical.",
	descriptionFull : "Food and other perishable items do not age or decay while inside a Chest of Preserving. The chest is 2\xBD feet long, 1\xBD feet wide, and 1 foot tall with a half-barrel lid. The chest has a lock, which can be picked with thieves' tools and a successful DC 15 Dexterity check. Smashing the lock or any other part of the chest renders it nonmagical.",
	weight : 25
}
MagicItemsList["circlet of human perfection"] = { // contains contributions by Pengsloth
	name : "Circlet of Human Perfection",
	source : ["WDotMM", 30],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "F",
	prerequisite : "Requires attunement by a humanoid",
	description : "Wearing this circlet transforms my appearance into an attractive human of average height and weight, but otherwise doesn't change anything. The circlet chooses the physical characteristics of the form, such as age, gender, skin color, hair color, and voice. Removing the circlet ends the effect.",
	descriptionFull : "The Circlet of Human Perfection transforms its attuned wearer into an attractive human of average height and weight. The circlet chooses the physical characteristics of the form, such as age, gender, skin color, hair color, and voice. Except for size, the wearer's statistics and racial traits don't change, nor do items worn or carried by the wearer. Removing the circlet ends the effect.",
	attunement : true
}
MagicItemsList["propeller helm"] = { // contains contributions by Pengsloth
	name : "Propeller Helm",
	source : ["WDotMM", 251],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "F",
	prerequisite : "Requires attunement by a Small humanoid",
	prereqeval : function () { return tDoc.getField("Size Category").currentValueIndices == 4; },
	description : "While worn, the helm allows me to use an action to cast Levitate, requiring no components. Each time the spell ends, there is a 50 percent chance that the helm loses its magic and becomes nonmagical.",
	descriptionFull : "While worn, the helm allows its wearer to use an action to cast the Levitate spell, requiring no components. The helm's propeller spins and whirs loudly until the spell ends. Each time the spell ends, there is a 50 percent chance that the helm loses its magic and becomes nonmagical.",
	attunement : true,
	spellcastingBonus : {
		name : "At will",
		spells : ["levitate"],
		selection : ["levitate"],
		firstCol : "atwill"
	}
}
MagicItemsList["tearulai"] = { // contains contributions by Pengsloth
	name : "Tearulai",
	source : ["WDotMM", 76],
	type : "weapon (longsword)",
	rarity : "very rare",
	storyItemAL : true,
	description : "If I roll a 20 on an attack with this sword, it deals +14 slashing damage and there is a 5% chance its lobs off a limb. It deals max damage to objects and has 6 charges, regaining 1d4+2 at dawn, which it can use to cast spells. It can shed light on command and is a sentient weapon with a will of its own, see Notes page.",
	descriptionFull : "The longsword, Tearulai, is a sentient, neutral good sword of sharpness with an emerald-colored blade and precious gemstones embedded in its hilt and pommel. The sword's magical properties are suppressed until it is removed from Valdemar's skull.\n   Evil creatures can't attune to Tearulai; any evil creature that tries to do so takes 20 psychic damage. The weapon's emerald blade can't be damaged or dulled, and the sword can't be teleported anywhere without its wielder while the two are attuned to one another.\n   " + toUni("Sword of Sharpness") + "When you attack an object with this magic sword and hit, maximize your weapon damage dice against the target.\n   When you attack a creature with this weapon and roll a 20 on the attack roll, that target takes an extra 14 slashing damage. Then roll another d20. If you roll a 20, you lop off one of the target's limbs, with the effect of such loss determined by the DM. If the creature has no limb to sever, you lop off a portion of its body instead.\n   In addition, you can speak the sword's command to cause the blade to shed bright light in a 10-foot radius and dim light for an additional 10 feet. Speaking the command word again or sheathing the sword puts out the light.\n\nNote: According to the SRD, it is an extra 4d6 slashing damage, although this is incorrect.\n   " + toUni("Spells") + ". The sword has 6 charges and regains 1d4 + 2 expended charges daily at dawn. A creature attuned to the sword can use an action and expend 1 or more charges to cast one of the following spells from it without material components: Fly (2 charges), Polymorph (3 charges), or Transport Via Plants (4 charges).\n   " + toUni("Sentience") + ". The sword has an Intelligence of 17, a Wisdom of 12, and a Charisma of 20. It has hearing and truesight out to a range of 120 feet. It communicates telepathically with its attuned wielder and can speak, read, and understand Common, Draconic, Elvish, and Sylvan. In addition, the sword can ascertain the true value of any gemstone brought within 5 feet of it.\n   " + toUni("Personality") + ". Tearulai admires great beauty, music, fine art, and poetry. Vain, the weapon strives to improve its appearance. It craves gemstones and seeks out better ones with which to adorn itself. Most of all, it longs to return to the forests around Myth Drannor, where it was created. If its wielder's goals run counter to its own, Tearulai attempts to take control of its wielder and escape Undermountain, whereupon it can use its Transport Via Plants spell to return whence it came.",
	attunement : true,
	prerequisite : "Requires attunement by a creature of non-evil alignment",
	prereqeval : function(v) { return !(/evil/i).test(What("Alignment")); },
	weight : 3,
	weaponsAdd : ["Tearulai"],
	weaponOptions : {
		baseWeapon : "longsword",
		regExpSearch : /tearulai/i,
		name : "Tearulai",
		source : ["WDMM", 76],
		description : "Versatile (1d10); On 20 to hit: +14 damage \u0026 5% chance to sever limb; Max damage vs. objects"
	},
	usages: 6,
	recovery : "dawn",
	additional : "regain 1d4+2",
	spellFirstColTitle : "Ch",
	spellcastingBonus : [{
		name : "2 charges",
		spells : ["fly"],
		selection : ["fly"],
		firstCol : 2
	}, {
		name : "3 charges",
		spells : ["polymorph"],
		selection : ["polymorph"],
		firstCol : 3
	}, {
		name : "4 charges",
		spells : ["transport via plants"],
		selection : ["transport via plants"],
		firstCol : 4
	}],
	toNotesPage : [{
		name : "Traits and Personality",
		popupName : "Tearulai Traits and Personality",
		note : desc([
			"Tearulai has an emerald-colored blade and precious gemstones embedded in its hilt and pommel. Evil creatures can't attune to it and take 20 psychic damage if they try to do so. Its emerald blade can't be damaged or dulled, and the sword can't be teleported anywhere without its wielder while the two are attuned to one another.",
			"Objects hit by the sword take maximum damage from it. When I roll a 20 on the attack roll against a creature, that target takes an extra 14 slashing damage. Then roll another d20. If you roll a 20, you lop off one of the target's limbs, with the effect of such loss determined by the DM. If the creature has no limb to sever, you lop off a portion of its body instead.",
			"I can speak the sword's command to cause the blade to shed bright light in a 10-ft radius and dim light for another 10 ft. The light stops when I sheath the sword or speaking the command word again.",
			"The sword has 6 charges and regains 1d4 + 2 expended charges daily at dawn. I can use the charges to cast Fly (2 charges), Polymorph (3 charges), or Transport Via Plants (4 charges).",
			"Tearulai is sentient and has an Intelligence of 17, a Wisdom of 12, and a Charisma of 20. It has hearing and truesight out to a range of 120 ft. It communicates telepathically with its attuned wielder and can speak, read, and understand Common, Draconic, Elvish, and Sylvan. In addition, the sword can ascertain the true value of any gemstone brought within 5 ft of it.",
			"Tearulai admires great beauty, music, fine art, and poetry. Vain, the weapon strives to improve its appearance. It craves gemstones and seeks out better ones with which to adorn itself. Most of all, it longs to return to the forests around Myth Drannor, where it was created. If its wielder's goals run counter to its own, Tearulai attempts to take control of its wielder and uses Transport Via Plants to return whence it came."
		]) + "\n\n" + sentientItemConflictTxt
	}]
}
MagicItemsList["vial of stardust"] = {
	name : "Vial of Stardust",
	source : ["WDotMM", 251],
	type : "potion",
	rarity : "unknown",
	description : "Once as an action, I can sprinkles the stardust contained in this vial over myself. After I do so, I gain the ability to cast Dream once as an action (spell save DC 15), requiring no components.",
	descriptionFull : "Any creature that sprinkles the contents of a Vial of Stardust over itself gains the ability to cast the Dream spell once as an action (spell save DC 15), requiring no components."
}
