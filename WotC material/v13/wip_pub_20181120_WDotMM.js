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
	vision : [["Blindsight", 30]]
}
MagicItemsList["professor orb"] = {
	name : "Professor Orb",
	source : ["WDotMM", 131],
	type : "wondrous item",
	rarity : "rare",
	storyItemAL : true,
	description : "",
	descriptionFull : "Each professor orb takes the form of a smooth, solid, 5-pound sphere of smoky gray quartz about the size of a grapefruit. Close examination reveals two or more pinpricks of silver light deep inside the sphere.\n   A Professor Orb is sentient and has the personality of a scholar. Its alignment is determined by rolling on the alignment table in the \"Sentient Magic Items\" section in chapter 7 of the Dungeon Master's Guide. Regardless of its disposition, the orb has an Intelligence of 18, and Wisdom and Charisma scores determined by rolling 3d6 for each ability. The orb speaks, reads, and understands four languages, and can see and hear normally out to a range of 60 feet. Unlike most sentient items, the orb has no will of its own and can't initiate a conflict with the creature in possession of it.\n   A Professor Orb has extensive knowledge of four narrow academic subjects. When making an Intelligence check to recall lore from any of its areas of expertise, the orb has a +9 bonus to its roll (including its Intelligence modifier).\n   In addition to the knowledge it possesses, a professor orb can cast the Mage Hand cantrip at will. It uses the spell only to transport itself. Its spellcasting ability is Intelligence."
}
MagicItemsList["horn of the endless maze"] = { // add as option to Horn of Valhalla?
	name : "Horn of the Endless Maze",
	source : ["WDotMM", 163],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "G", // interpretation, made it the same as Brass Horn of Valhalla
	description : "",
	descriptionFull : "You can use an action to blow this horn. In response, 3d4+3 warrior spirits from the Abyss appear within 60 feet of you. They look like Minotaurs and use the statistics of a berserker. They return to the Abyss after 1 hour or when they drop to 0 hit points. Once you use the horn, it can't be used again until 7 days have passed.\n   If you blow the horn without having proficiency with all simple weapons, the summoned berserkers attack you. If you meet the requirement, they are friendly to you and your companions and follow your commands.",
	weight : 2
}
MagicItemsList["dodecahedron of doom"] = {
	name : "Dodecahedron of Doom",
	source : ["WDotMM", 174],
	type : "wondrous item",
	rarity : "rare",
	notLegalAL : true,
	description : "",
	descriptionFull : "This twelve-sided metal die is 12 inches across and bears the numbers 1 through 12 engraved on its pentagonal sides. The dodecahedron contains arcane clockwork mechanisms that whir and click whenever the die is cast.\n   The dodecahedron can be hurled up to 60 feet as an action. A random magical effect occurs when the die comes to rest after rolling across the ground for at least 10 feet. If an effect requires a target and no eligible target is within range, nothing happens. Spells cast by the dodecahedron require no components. Roll a d12 and consult the following table to determine the effect:\n\n" + toUni("d12") + "\t" + toUni("effect") + "\n1-2\tThe dodecahedron explodes and is destroyed. Each creature within 20 feet of the exploding die must make a DC 13 Dexterity saving throw, taking 40 (9d8) force damage on a failed save, or half as much damage on a successful one.\n3-4\tThe dodecahedron casts Light on itself. The effect lasts until a creature touches the die.\n5-6\tThe dodecahedron casts Ray of Frost (+5 to hit), targeting a random creature within 60 feet of it that doesn't have total cover against the attack.\n7-8\tThe dodecahedron casts Shocking Grasp (+5 to hit) on the next creature that touches it.\n9-10\tThe dodecahedron casts Darkness on itself. The effect has a duration of 10 minutes.\n11-12\tThe next creature to touch the dodecahedron gains 1d10 temporary hit points that last for 1 hour."
}
MagicItemsList["orb of gonging"] = { // common, thus 2 treasure checkpoints
	name : "Orb of Gonging",
	source : ["WDotMM", 174],
	type : "wondrous item",
	rarity : "common",
	description : "",
	descriptionFull : "This common wondrous item is a hollow, 5-inch-diameter orb that weighs 5 pounds. Its outer shell is composed of notched bronze rings, which can be turned so that the notches line up. Aligning the notches requires an action, and doing so causes the orb to gong loudly until the notches are no longer aligned. The sounds are spaced 6 seconds apart and can be heard out to a range of 600 feet."
}
MagicItemsList["black crystal tablet"] = {
	name : "Black Crystal Tablet",
	source : ["WDotMM", 284],
	type : "wondrous item",
	rarity : "legendary",
	notLegalAL : true,
	description : "",
	descriptionFull : "Any creature that attunes to the tablet must make a DC 20 Wisdom saving throw at the end of its next long rest. On a failed save, the creature becomes afflicted with a random form of long-term madness (see \"Madness\" in chapter 8 of the Dungeon Master's Guide).\n   As an action, a creature attuned to the Black Crystal Tablet can use it to cast Eyebite or Gate (the portal created by this spell links to the Far Realm only). After the tablet is used to cast a spell, it cannot be used again until the next dawn.",
	attunement : true
}
MagicItemsList["helm of the scavenger"] = {
	name : "Helm of the Scavenger",
	source : ["WDotMM", 297],
	type : "wondrous item",
	rarity : "legendary",
	notLegalAL : true,
	description : "",
	descriptionFull : "This ornate chair is designed to propel and maneuver a ship through space.\n   " + toUni("Passive Properties") + ". The following properties of the helm come into play even when no creature is attuned to it:\n \u2022 When placed aboard a vessel weighing between 1 and 100 tons, the helm generates an envelope of fresh air around the ship while it is in the void of space (but not underwater). This envelope extends out from the edges of the hull in all directions for a distance equal in length to the vessel's beam, so that creatures aboard and near the ship can breathe normally in space. The temperature within the air envelope is 70 degrees Fahrenheit.\n \u2022 When placed aboard a vessel weighing between 1 and 100 tons, the helm generates an artificial gravity field while the ship is in the void of space, so that creatures can walk on the ship's decks as they normally would. Creatures and objects that fall overboard bob in a gravity plane that extends out from the main deck for a distance equal in length to the vessel's beam.\n\n" + toUni("Active Properties") + ". The sensation of being attuned to the helm is akin to being immersed in warm water. While attuned to the helm, you gain the following abilities while you sit in it:\n \u2022 You can use the helm to propel the vessel across or through water and other liquids at a maximum speed in miles per hour equal to your highest-level unexpended spell slot.\n \u2022 You can use the helm to propel the vessel through air or space at a maximum speed in miles per hour equal to your highest-level unexpended spell slot \xD7 10.\n \u2022 Provided you have at least one unexpended spell slot, you can steer the vessel, albeit in a somewhat clumsy fashion, in much the same way that oars or a rudder can maneuver a seafaring ship.\n \u2022 Whenever you like, you can see what's happening on and around the vessel as though you were standing in a location of your choice aboard it.\n\n" + toUni("Drawback") + ". While attuned to the helm, you cannot expend your own spell slots.",
	attunement : true
}
MagicItemsList["shield of the uven rune"] = {
	name : "Shield of the Uven Rune",
	source : ["WDotMM", 299],
	type : "shield",
	rarity : "very rare",
	storyItemAL : true,
	description : "",
	descriptionFull : "This shield is made from the scale of an ancient white dragon. It has a rune burned into its outward-facing side. A character who examines the rune and succeeds on a DC 20 Intelligence (History) check recognizes it as an uven (\"enemy\" in Giant) rune that confers great power.\n   While holding the shield, you benefit from the following properties.\n   " + toUni("Winter's Friend") + ". You are immune to cold damage.\n   " + toUni("Deadly Rebuke") + ". Immediately after a creature hits you with a melee attack, you can use your reaction to deal 3d6 necrotic damage to that creature.\n   " + toUni("Bane") + ". You can cast the Bane spell from the shield (save DC 17). The spell does not require concentration and lasts for 1 minute. Once you cast the spell from the shield, you can't do so again until you finish a short or long rest.\n   " + toUni("Gift of Vengeance") + ". You can transfer the shield's magic to a nonmagical weapon by tracing the uven rune on the weapon with one finger. The transfer takes 8 hours of work that requires the two items to be within 5 feet of each other. At the end, the shield is destroyed, and the rune is etched or burned into the chosen weapon. This weapon becomes a rare magic item that requires attunement. It has the properties of a +1 weapon. The bonus increases to +3 when the weapon is used against one of the following creature types, chosen by you at the time of the magic weapon's creation: aberrations, celestials, constructs, dragons, elementals, fey, fiends, giants, or undead.",
	attunement : true,
	weight : 6
}
MagicItemsList["blast scepter"] = {
	name : "Blast Scepter",
	source : ["WDotMM", 310],
	type : "rod",
	rarity : "very rare",
	storyItemAL : true,
	description : "",
	descriptionFull : "The Blast Scepter can be used as an arcane focus.\n   Whoever is attuned to the Blast Scepter gains resistance to fire and lightning damage and can, as an action, use it to cast Thunderwave as a 4th-level spell (save DC 16) without expending a spell slot.",
	attunement : true
}
MagicItemsList["chest of preserving"] = { // common, thus 2 treasure checkpoints
	name : "Chest of Preserving",
	source : ["WDotMM", 139],
	type : "wondrous item",
	rarity : "common",
	description : "",
	descriptionFull : "Food and other perishable items do not age or decay while inside a Chest of Preserving. The chest is 2\xBD feet long, 1\xBD feet wide, and 1 foot tall with a half-barrel lid. The chest has a lock, which can be picked with thieves' tools and a successful DC 15 Dexterity check. Smashing the lock or any other part of the chest renders it nonmagical.",
	attunement : true,
	weight : 25
}
MagicItemsList["circlet of human perfection"] = {
	name : "Circlet of Human Perfection",
	source : ["WDotMM", 30],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "F",
	prerequisite : "Requires attunement by a humanoid",
	description : "",
	descriptionFull : "The Circlet of Human Perfection transforms its attuned wearer into an attractive human of average height and weight. The circlet chooses the physical characteristics of the form, such as age, gender, skin color, hair color, and voice. Except for size, the wearer's statistics and racial traits don't change, nor do items worn or carried by the wearer. Removing the circlet ends the effect.",
	attunement : true
}
MagicItemsList["propeller helm"] = {
	name : "Propeller Helm",
	source : ["WDotMM", 251],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "F",
	prerequisite : "Requires attunement by a small humanoid",
	description : "",
	descriptionFull : "While worn, the helm allows its wearer to use an action to cast the Levitate spell, requiring no components. The helm's propeller spins and whirs loudly until the spell ends. Each time the spell ends, there is a 50 percent chance that the helm loses its magic and becomes nonmagical.",
	attunement : true
}
MagicItemsList["tearulai"] = {
	name : "Tearulai",
	source : ["WDotMM", 76],
	type : "weapon (longsword)",
	rarity : "very rare",
	storyItemAL : true,
	description : "",
	descriptionFull : "The longsword, Tearulai, is a sentient, neutral good sword of sharpness with an emerald-colored blade and precious gemstones embedded in its hilt and pommel. The sword's magical properties are suppressed until it is removed from Valdemar's skull.\n   Evil creatures can't attune to Tearulai; any evil creature that tries to do so takes 20 psychic damage. The weapon's emerald blade can't be damaged or dulled, and the sword can't be teleported anywhere without its wielder while the two are attuned to one another.\n   " + toUni("Spells") + ". The sword has 6 charges and regains 1d4 + 2 expended charges daily at dawn. A creature attuned to the sword can use an action and expend 1 or more charges to cast one of the following spells from it without material components: Fly (2 charges), Polymorph (3 charges), or Transport Via Plants (4 charges).\n   " + toUni("Sentience") + ". The sword has an Intelligence of 17, a Wisdom of 12, and a Charisma of 20. It has hearing and truesight out to a range of 120 feet. It communicates telepathically with its attuned wielder and can speak, read, and understand Common, Draconic, Elvish, and Sylvan. In addition, the sword can ascertain the true value of any gemstone brought within 5 feet of it.\n   " + toUni("Personality") + ". Tearulai admires great beauty, music, fine art, and poetry. Vain, the weapon strives to improve its appearance. It craves gemstones and seeks out better ones with which to adorn itself. Most of all, it longs to return to the forests around Myth Drannor, where it was created. If its wielder's goals run counter to its own, Tearulai attempts to take control of its wielder and escape Undermountain, whereupon it can use its Transport Via Plants spell to return whence it came.\n   When you attack an object with this magic sword and hit, maximize your weapon damage dice against the target.\n   When you attack a creature with this weapon and roll a 20 on the attack roll, that target takes an extra 14 slashing damage. Then roll another d20. If you roll a 20, you lop off one of the target's limbs, with the effect of such loss determined by the DM. If the creature has no limb to sever, you lop off a portion of its body instead.\n   In addition, you can speak the sword's command to cause the blade to shed bright light in a 10-foot radius and dim light for an additional 10 feet. Speaking the command word again or sheathing the sword puts out the light.\n\nNote: According to the SRD, it is an extra 4d6 slashing damage, although this is incorrect.",
	attunement : true,
	weight : 3
}
MagicItemsList["vial of stardust"] = {
	name : "Vial of Stardust",
	source : ["WDotMM", 251],
	type : "wondrous item",
	rarity : "unknown",
	description : "",
	descriptionFull : "Any creature that sprinkles the contents of a Vial of Stardust over itself gains the ability to cast the Dream spell once as an action (spell save DC 15), requiring no components."
}
