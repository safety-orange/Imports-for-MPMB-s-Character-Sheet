var iFileName = "pub_20140819_HotDQ.js";
RequiredSheetVersion(13);
// This file adds the background features and Magic Items from the Hoard of the Dragon Queen adventure book to MPMB's Character Record Sheet

// Define the source
SourceList.HotDQ={
	name : "Hoard of the Dragon Queen [background features, items]",
	abbreviation : "HotDQ",
	group : "Adventure Books",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/hoard-dragon-queen",
	date : "2014/08/19"
};

// Background features
BackgroundFeatureList["cult of the dragon infiltrator"] = {
	description : "I have infiltrated the ranks of the Cult of the Dragon. Having spied on the organization for quite some time, I am familiar with its inner workings and customs. I have a second identity as an initiate of the cult, enough of a facade to blend in as a simple grunt or servant.",
	source : [["HotDQ", 87], ["ALbackground", 0]]
};
BackgroundFeatureList["dragon scholar"] = {
	description : "I have studied dragons and their lore for many years. I can automatically identify locations built or used by dragons, and I can identify dragon eggs and scales by sight. If I fail an Intelligence check to recall lore relating to dragons, I know someone or some book that I can consult for the answer unless the DM rules that the lore is unknown.",
	source : [["HotDQ", 87], ["ALbackground", 0]]
};

// Magic Items
// The magic cauldron on page 79 is omitted as its only magic is that it functions as the material component for the Augury spell. Not something an adventurer is likely to use, with it being 50 lb.
MagicItemsList["dragongleam"] = {
	name : "Dragongleam",
	source : ["HotDQ", 69],
	type : "weapon (spear)",
	rarity : "rare",
	magicItemTable : "F",
	description : "This rusty spear is engraved with draconic runes on its crossguard which read \"Tiamat's Eyes Shine\". The spear has 10 charges. As an action while holding it, I can say this command and expend 1 charge to cast Daylight. The spear loses its magic once all charges are expended.",
	descriptionFull : "This rusty spear is engraved with draconic runes on its crossguard which read \"Tiamat's Eyes Shine\". The spear has 10 charges. While holding it, you can say the command and expend 1 charge as an action to cast the Daylight spell. The spear loses this property if it has no charges left.",
	weight : 3,
	usages : 10,
	recovery : "Never",
	spellFirstColTitle : "Ch",
	spellcastingBonus : {
		name : "1 charge",
		spells : ["daylight"],
		selection : ["daylight"],
		firstCol : 1
	},
	spellChanges : {
		"daylight" : {
			component : "V,M\u0192"
		}
	},
	weaponsAdd : ["Dragongleam"],
	weaponOptions : {
		baseWeapon : "spear",
		regExpSearch : /dragongleam/i,
		name : "Dragongleam",
		source : ["HotDQ", 69]
	}
}
MagicItemsList["tankard of plenty"] = {
	name : "Tankard of Plenty",
	source : ["HotDQ", 74],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "A",
	description : "This golden stein is decorated with dancing dwarves and grain patterns. Speaking the command word 'Illefarn' while grasping the handle fills the tankard with three pints of rich dwarven ale. This power can be used up to three times per day.",
	descriptionFull : 'This golden stein is decorated with dancing dwarves and grain patterns. Speaking the command word ("Illefarn") while grasping the handle fills the tankard with three pints of rich dwarven ale. This power can be used up to three times per day.',
	usages : 3,
	recovery : "Day"
}
MagicItemsList["dragon mask"] = {
	name : "Dragon Mask",
	source : ["HotDQ", 94],
	type : "wondrous item",
	rarity : "legendary",
	storyItemAL : true,
	description : "",
	descriptionFull : "Each dragon mask is a legendary wondrous item that reshapes to fit the face and head of a wearer attuned to it. While you are wearing any dragon mask and attuned to it, you gain the following benefits.\n   " + toUni("Damage Absorption") + ". You have resistance against the mask's damage type. If you already have resistance to that damage type from another source, you instead have immunity to that damage type. If you already have immunity to that damage type from another source, whenever you are subjected to damage of that type, you take none of that damage and regain a number of hit points equal to half the damage dealt of that type.\n   " + toUni("Draconic Majesty") + ". While you are wearing no armor, you can add your Charisma bonus to your Armor Class.\n   " + toUni("Dragon Breath") + ". If you have a breath weapon that requires rest to recharge, it gains a recharge of 6.\n   " + toUni("Dragon Sight") + ". You gain darkvision out to 60 feet, or to an additional 60 feet if you already have that sense. Once per day, you can gain blindsight out to 30 feet for 5 minutes.\n   " + toUni("Dragon Tongue") + ". You can speak and understand Draconic. You also have advantage on any Charisma check you make against dragons that share the mask's color.\n   " + toUni("Legendary Resistance (1/Day)") + ". If you fail a saving throw, you can choose to succeed instead.",
	attunement : true,
	choices : ["Black", "Blue", "Green", "Red", "White"],
	"black" : {
		name : "Black Dragon Mask",
		description : "",
		descriptionFull : "This horned mask of glossy ebony has horns and a skull-like mien. The mask reshapes to fit a wearer attuned to it. While you are wearing the mask and attuned to it, you can access the following properties.\n   " + toUni("Damage Absorption") + ". You have damage resistance to acid. If you already have damage resistance to acid from another source, you gain immunity to acid damage. If you already have immunity to acid damage from another source, you regain hit points equal to half of any acid damage you are dealt.\n   " + toUni("Draconic Majesty") + ". While you are wearing no armor, you can add your Charisma bonus to your Armor Class.\n   " + toUni("Dragon Breath") + ". If you have a breath weapon that requires rest to recharge, it gains a recharge of 6.\n   " + toUni("Dragon Sight") + ". You gain darkvision with a radius of 60 feet, or an additional 60 feet of darkvision if you already have that sense. Once per day, you can gain blindsight out to a range of 30 feet for 5 minutes.\n   " + toUni("Dragon Tongue") + ". You can speak and understand Draconic. You also have advantage on any Charisma check you make against Black dragons.\n   " + toUni("Legendary Resistance (1/Day)") + ". If you fail a saving throw, you can choose to succeed instead.\n   " + toUni("Water Breathing") + ". You can breathe underwater."
	},
	/*
		Although the adventure book only includes the Black Dragon Mask,
		this code also includes the Blue, Green, Red, and White Dragon Masks.
		The rules for these are found in the Rise of Tiamat Online Supplement,
		here: https://media.wizards.com/2014/downloads/dnd/RiseTiamatSupplementv0.2_Printer.pdf
	*/
	"blue" : {
		name : "Blue Dragon Mask",
		source : [["HotDQ", 0], ["RoTOS", 4]],
		description : "",
		descriptionFull : "This mask of glossy azure has spikes around its edges and a ridged horn in its center. The mask reshapes to fit a wearer attuned to it. While you are wearing the mask and attuned to it, you can access the following properties.\n   " + toUni("Damage Absorption") + ". You have resistance against lightning damage. If you already have resistance to lightning damage from another source, you instead have immunity to lightning damage. If you already have immunity to lightning damage from another source, whenever you are subjected to lightning damage, you take none of that damage and regain a number of hit points equal to half the damage dealt of that type.\n   " + toUni("Draconic Majesty") + ". While you are wearing no armor, you can add your Charisma bonus to your Armor Class.\n   " + toUni("Dragon Breath") + ". If you have a breath weapon that requires rest to recharge, it gains a recharge of 6.\n   " + toUni("Dragon Sight") + ". You gain darkvision out to 60 feet, or to an additional 60 feet if you already have that sense. Once per day, you can gain blindsight out to 30 feet for 5 minutes.\n   " + toUni("Dragon Tongue") + ". You can speak and understand Draconic. You also have advantage on any Charisma check you make against Blue Dragons.\n   " + toUni("Legendary Resistance (1/Day)") + ". If you fail a saving throw, you can choose to succeed instead.\n   " + toUni("Lingering Shock") + ". If you deal lightning damage to a creature, it can't take reactions until its next turn."
	},
	"green" : {
		name : "Green Dragon Mask",
		source : [["HotDQ", 0], ["RoTOS", 4]],
		description : "",
		descriptionFull : "This mottled green mask is surmounted by a frilled crest and has leathery spiked plates along its jaw. The mask reshapes to fit a wearer attuned to it. While you are wearing the mask and attuned to it, you can access the following properties\n   " + toUni("Damage Absorption") + ". You have resistance against poison damage. If you already have resistance to poison damage from another source, you instead have immunity to poison damage. If you already have immunity to poison damage from another source, whenever you are subjected to poison damage, you take none of that damage and regain a number of hit points equal to half the damage dealt of that type.\n   " + toUni("Draconic Majesty") + ". While you are wearing no armor, you can add your Charisma bonus to your Armor Class.\n   " + toUni("Dragon Breath") + ". If you have a breath weapon that requires rest to recharge, it gains a recharge of 6.\n   " + toUni("Dragon Sight") + ". You gain darkvision out to 60 feet, or to an additional 60 feet if you already have that sense. Once per day, you can gain blindsight out to 30 feet for 5 minutes.\n   " + toUni("Dragon Tongue") + ". You can speak and understand Draconic. You also have advantage on any Charisma check you make against Green Dragons.\n   " + toUni("Legendary Resistance (1/Day)") + ". If you fail a saving throw, you can choose to succeed instead.\n   " + toUni("Water Breathing") + ". You can breathe underwater."
	},
	"red" : {
		name : "Red Dragon Mask",
		source : [["HotDQ", 0], ["RoTOS", 4]],
		description : "",
		descriptionFull : "This mask of glossy crimson has swept-back horns and spiked cheek ridges. The mask reshapes to fit a wearer attuned to it. While you are wearing the mask and attuned to it, you can access the following properties.\n   " + toUni("Damage Absorption") + ". You have resistance against fire damage. If you already have resistance to fire damage from another source, you instead have immunity to fire damage. If you already have immunity to fire damage from another source, whenever you are subjected to fire damage, you take none of that damage and regain a number of hit points equal to half the damage dealt of that type.\n   " + toUni("Draconic Majesty") + ". While you are wearing no armor, you can add your Charisma bonus to your Armor Class.\n   " + toUni("Dragon Breath") + ". If you have a breath weapon that requires rest to recharge, it gains a recharge of 6.\n   " + toUni("Dragon Sight") + ". You gain darkvision out to 60 feet, or to an additional 60 feet if you already have that sense. Once per day, you can gain blindsight out to 30 feet for 5 minutes.\n   " + toUni("Dragon Tongue") + ". You can speak and understand Draconic. You also have advantage on any Charisma check you make against Red Dragons.\n   " + toUni("Legendary Resistance (1/Day)") + ". If you fail a saving throw, you can choose to succeed instead.\n   " + toUni("Dragon Fire") + ". If you deal fire damage to a creature or flammable object, it starts burning. At the start of each of its turns, a creature burning in this way takes 1d6 fire damage. A creature that can reach the burning target can use an action to extinguish the fire."
	},
	"white" : {
		name : "White Dragon Mask",
		source : [["HotDQ", 0], ["RoTOS", 4]],
		description : "",
		descriptionFull : "This gleaming mask is white with highlights of pale blue and is topped by a spined crest. The mask reshapes to fit a wearer attuned to it. While you are wearing the mask and attuned to it, you can access the following properties.\n   " + toUni("Damage Absorption") + ". You have resistance against cold damage. If you already have resistance to cold damage from another source, you instead have immunity to cold damage. If you already have immunity to cold damage from another source, whenever you are subjected to cold damage, you take none of that damage and regain a number of hit points equal to half the damage dealt of that type.\n   " + toUni("Draconic Majesty") + ". While you are wearing no armor, you can add your Charisma bonus to your Armor Class.\n   " + toUni("Dragon Breath") + ". If you have a breath weapon that requires rest to recharge, it gains a recharge of 6.\n   " + toUni("Dragon Sight") + ". You gain darkvision out to 60 feet, or to an additional 60 feet if you already have that sense. Once per day, you can gain blindsight out to 30 feet for 5 minutes.\n   " + toUni("Dragon Tongue") + ". You can speak and understand Draconic. You also have advantage on any Charisma check you make against White Dragons.\n   " + toUni("Legendary Resistance") + ". (1/Day) If you fail a saving throw, you can choose to succeed instead.\n   " + toUni("Winter's Fury") + ". While your current hit points are equal to or less than half your hit point maximum, you deal an extra 1d8 cold damage with your melee attacks."
	}
}
MagicItemsList["hazirawn"] = {
	name : "Hazirawn",
	source : ["HotDQ", 94],
	type : "weapon (greatsword)",
	rarity : "legendary",
	storyItemAL : true,
	description : "",
	descriptionFull : "A sentient (neutral evil) greatsword, Hazirawn is capable of speech in Common and Netherese. Even if you aren't attuned to the sword, you gain a +1 bonus on attack and damage rolls made with this weapon. If you are attuned to Hazirawn, you deal an extra 1d6 necrotic damage when you hit with the weapon.\n   " + toUni("Increased Potency") + ". While you are attuned to this weapon, its bonus on attack and damage rolls increases to +2, and a hit deals an extra 2d6 necrotic damage (instead of 1d6)\n   " + toUni("Spells") + ". Hazirawn has 4 charges to cast spells. As long as the sword is attuned to you and you are holding it in your hand, you can cast Detect Magic (1 charge), Detect Evil and Good (1 charge), or Detect Thoughts (2 charges). Each night at midnight, Hazirawn regains 1d4 expended charges.\n   " + toUni("Wounding") + ". While you are attuned to the weapon, any creature that you hit with Hazirawn can't regain hit points for 1 minute. The target can make a DC 15 Constitution saving throw at the end of each of its turns, ending this effect early on a success.",
	attunement : true,
	weight : 6
}
MagicItemsList["insignia of claws"] = {
	name : "Insignia of Claws",
	source : ["HotDQ", 94],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "F",
	description : "",
	descriptionFull : "The jewels in the insignia of the Cult of the Dragon flare with purple light when you enter combat, empowering your natural fists or natural weapons.\n   While wearing the insignia you gain a +1 bonus to the attack rolls and the damage rolls you make with unarmed strikes and natural weapons. Such attacks are considered to be magical."
}
MagicItemsList["wand of winter"] = {
	name : "Wand of Winter",
	source : ["HotDQ", 94],
	type : "wand",
	rarity : "rare",
	magicItemTable : "G",
	description : "",
	descriptionFull : "This wand looks and feels like an icicle. You must be attuned to the wand to use it.\n   The wand has 7 charges, which are used to fuel the spells within it. With the wand in hand, you can use your action to cast one of the following spells from the wand, even if you are incapable of casting spells: Ray of Frost (no charges, or 1 charge to cast at 5th level; +5 to hit with ranged spell attack), Sleet Storm (3 charges; spell save DC 15), or Ice Storm (4 charges; spell save DC 15). No components are required. The wand regains 1d6+1 expended charges each day at dawn. If you expend the wand's last charge, roll a d20. On a 20, the wand melts away, forever destroyed.",
	attunement : true
}
