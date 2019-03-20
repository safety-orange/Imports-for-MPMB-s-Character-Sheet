var iFileName = "pub_20160906_SKT.js";
RequiredSheetVersion(13);
// This file adds the beasts from the Storm King's Thunder adventure book to MPMB's Character Record Sheet

// Define the source
SourceList.SKT={
	name : "Storm King's Thunder [beasts, items]",
	abbreviation : "SKT",
	group : "Adventure Books",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/storm-kings-thunder",
	date : "2016/09/06"
};

// Creatures
CreatureList["crag cat"] = {
	name : "Crag Cat",
	source : ["SKT", 240],
	size : 2, //Large
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 13,
	hp : 34,
	hd : [4, 10], //[#, die]
	speed : "40 ft",
	scores : [16, 17, 16, 4, 14, 8], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 4,
		"stealth" : 7
	},
	senses : "Darkvision 60 ft",
	passivePerception : 14,
	languages : "",
	challengeRating : "1",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Claw",
			ability : 1,
			damage : [1, 8, "slashing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "If used after moving 20 ft straight in the same round, see Pounce trait"
		}, {
			name : "Bite",
			ability : 1,
			damage : [1, 10, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "Can be used in combination with claw while pouncing (see Pounce trait)"
		}
	],
	traits : [{
			name : "Nondetection",
			description : "The crag cat can't be targeted or detected by any divination magic or perceived through magical scrying sensors."
		}, {
			name : "Pounce",
			description : "If the crag cat moves at least 20 ft straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the crag cat can make one bite attack against it as a bonus action."
		}, {
			name : "Spell Turning",
			description : "The crag cat has advantage on saving throws against any spell that targets only the cat (not an area). If the crag cat's saving throw succeeds and the spell is of 7th level or lower, the spell has no effect on the crag cat and instead targets the caster."
		}
	],
	wildshapeString : "Darkvision 60 ft| Nondetection: can't be targeted or detected by divination magic or scrying| Pounce: if target is hit with a claw attack after moving 20 ft straight on the same turn, DC 13 Str save or knocked prone and can make one bite attack against it as a bonus action| Spell Turning: adv. on saves vs. spells that targets only me (not area). If successful and spell is 7th level or lower, no effect and instead targets the caster"
};
CreatureList["hulking crab"] = {
	name : "Hulking Crab",
	source : ["SKT", 240],
	size : 1, //Huge
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 17,
	hp : 76,
	hd : [8, 12], //[#, die]
	speed : "20 ft, swim 30 ft",
	scores : [19, 8, 16, 3, 11, 3], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"stealth" : 2
	},
	senses : "Blindsight 30 ft",
	passivePerception : 10,
	languages : "",
	challengeRating : "5",
	proficiencyBonus : 3,
	attacksAction : 2,
	attacks : [{
			name : "Claws",
			ability : 2,
			damage : [1, "", "slashing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "",
			modifiers : [-4, "", false], //[to hit, to damage, add ability to damage] "" means ignore
		}
	],
	traits : [{
			name : "Amphibious",
			description : "The hulking crab can breate air and water."
		}, {
			name : "Shell Camouflage",
			description : "While the hulking crab remains motionless with its eyestalks and pincers tucked close to its body, it resembles a natural formation or a pile of detritus. A creature within 30 feet of it can discern its true nature with a DC 15 Intelligence (Nature) check."
		}
	]
};
CreatureList["tressym"] = {
	name : "Tressym",
	source : ["SKT", 242],
	size : 5, //Tiny
	type : "Beast",
	subtype : "",
	companion : sheetVersion >= 13 ? "familiar_not_al" : "familiar",
	alignment : "Unaligned",
	ac : 12,
	hp : 5,
	hd : [2, 4], //[#, die]
	speed : "40 ft, climb 30 ft, fly 40 ft",
	scores : [3, 15, 10, 11, 12, 12], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 5,
		"stealth" : 4
	},
	damage_immunities : "poison",
	condition_immunities : "poisoned",
	senses : "Darkvision 60 ft; Adv. on Wis (Perception) checks using smell",
	passivePerception : 15,
	languages : "understands Common but can't speak",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Claws",
			ability : 2,
			damage : [1, "", "slashing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "",
			modifiers : [-4, "", false], //[to hit, to damage, add ability to damage] "" means ignore
		}
	],
	traits : [{
			name : "Detect Invisibility",
			description : "Within 60 feet of the tressym, magical invisibility fails to conceal anything from the tressym's sight."
		}, {
			name : "Keen Smell",
			description : "The tressym has advantage on Wisdom (Perception) checks that rely on smell."
		}, {
			name : "Poison Sense",
			description : "The tressym can detect whether a substance is poisonous by taste, touch, or smell."
		}
	],
	wildshapeString : "\u25C6 Languages: understands Common but can't speak.\n\u25C6 Senses: Darkvision 60 ft; Advantage on Wisdom (Perception) checks that rely on smell.\n\u25C6 Detect Invisibility: Magical invisibility fails to conceal anything from sight, out to 60 ft.\n\u25C6 Immune to: poison damage, poisoned condition.\n\u25C6 Poison Sense: Detect whether a substance is poisonous by taste, touch, or smell."
};

// Magic Items
MagicItemsList["banner of the krig rune"] = {
	name : "Banner of the Krig Rune",
	source : ["SKT", 233],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "G",
	description : "",
	descriptionFull : "Crafted from a thick, red fabric, this banner measures 5 feet high and 3 feet wide. The krig (war) rune is displayed on the fabric with round, metal plates sewn into it. It can be attached to a 10-foot pole to serve as a standard. Furling or unfurling the banner requires an action. The banner has the following properties.\n   " + toUni("Mark of Courage") + ". As a bonus action, you can touch the unfurled banner and cause it to emanate courage. You and your allies are immune to the frightened condition while within 20 feet of it. This benefit lasts for 10 minutes or until the banner is furled. Once you use this property, you can't use it again until you finish a short or long rest.\n   " + toUni("Sentinel Standard") + ". You can see invisible creatures while they are within 20 feet of the unfurled banner and within your line of sight.\n   " + toUni("Standard's Shield") + ". As a bonus action, you can touch the unfurled banner and invoke this power. Any ranged attack roll that targets you or an ally of yours has disadvantage if the target is within 20 feet of the unfurled banner. This benefit lasts for 1 minute or until the banner is furled. Once you use this property, you can't use it again until you finish a short or long rest.\n   " + toUni("Gift of Battle") + ". You can transfer the banner's magic to a place by tracing the krig rune on the ground with your finger. The point where you trace it becomes the center of a spherical area of magic that has a 500-foot radius and that is fixed to the place. The transfer takes 8 hours of work that requires the banner to be within 5 feet of you and during which you choose creatures, creature types, or both that will benefit from the magic. At the end, the banner is destroyed, and the area gains the following property:\n   While in the 500-foot-radius sphere, the creatures you chose during the transfer process are immune to the frightened condition and gain a +1 bonus to attack rolls and AC.",
	attunement : true
}
MagicItemsList["blod stone"] = {
	name : "Blod Stone",
	source : ["SKT", 233],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "D",
	description : "",
	descriptionFull : "This diamond contains the blood of a creature\u2014blood that appears in the form of the blod (blood) rune. While the item is on your person, you can use your action to divine the location of the creature nearest to you that is related to the blood in the item and that isn't undead. You sense the distance and direction of the creature relative to your location. The creature is either the one whose blood is in the item or a blood relative.\n   This item is made from a large diamond worth at least 5,000 gp. When the blood of a creature is poured onto it during the creation process, the blood seeps into the heart of the gem. If the gem is destroyed, the blood evaporates and is gone forever. A vengeful being might use a blod stone to hunt down an entire bloodline. Such stones are sometimes given as gifts to siblings or handed down from parent to child.",
	attunement : true
}
MagicItemsList["claw of the wyrm rune"] = {
	name : "Claw of the Wyrm Rune",
	source : ["SKT", 233],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "G",
	description : "",
	descriptionFull : "This dragon's claw has been covered with a coat of molten silver, upon which has been inscribed the wyrm (dragon) rune. The claw has the following properties.\n   " + toUni("Wyrmslayer") + ". As an action, you can point the claw at a dragon within 30 feet of you. The dragon must then succeed on a DC 15 Constitution saving throw or gain vulnerability to all damage types until the end of your next turn. This property can be used three times. The claw regains all expended uses at the next dawn.\n   " + toUni("Wyrm Shield") + ". While the claw is displayed on your person, you have resistance to the damage caused by any dragon's breath weapon.\n   " + toUni("Wyrm Ward") + ". You can transfer the c1aw's magic to a place by tracing the wyrm rune on the ground with your finger. The point where you trace it becomes the center of a spherical area of magic that has a 100-foot radius and that is fixed to the place. The transfer takes 8 hours of work that requires the claw to be within 5 feet of you. At the end, the claw is destroyed, and the area gains the following property:\n   While in the 100-foot-radius sphere, any dragon has disadvantage on saving throws and can have a flying speed no higher than 10 feet.",
	attunement : true
}
MagicItemsList["conch of teleportation"] = {
	name : "Conch of Teleportation",
	source : ["SKT", 234],
	type : "wondrous item",
	rarity : "very rare",
	storyItemAL : true,
	description : "",
	descriptionFull : "This item is an ordinary, albeit rather large, conch shell that has been inscribed with the uvar rune. The conch measures 2\xBD feet long and weighs 20 pounds.\n   As an action, you can cast the Teleport spell by blowing into the shell. The destination is fixed, and there is no chance of either a mishap or the spell being off target. Anyone teleported by the conch appears in a specific location designated by the item's creator at the time the uvar rune is inscribed on the conch. It doesn't allow teleportation to any other destination. Once its spell is cast, the conch can't be used again until the next dawn.",
	attunement : true
}
MagicItemsList["gavel of the venn rune"] = {
	name : "Gavel of the Venn Rune",
	source : ["SKT", 234],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "G",
	description : "",
	descriptionFull : "This wooden gavel is small by giant reckoning but nearly the size of a warhammer in human hands. The venn (friend) rune is inscribed in mithral in the base of the haft. Among giants, this item is used as part of rituals to resolve disputes. The gavel has the following properties.\n   " + toUni("Arbiters Shield") + ". At the start of every combat, attack rolls against you have disadvantage before the start of your first turn, provided that the gavel is on your person.\n   " + toUni("Bond of Amity") + ". As an action, you can use the gavel to strike a point on a hard surface. The first time in the next minute that a creature within 60 feet of that point deals damage to another creature with an attack that hits, the attacker takes psychic damage equal to half the damage it dealt to the target. Once you use this property, you can't use it again until you finish a long rest.\n   " + toUni("Gift of Truth") + ". You can transfer the gavel's magic to a place by tracing the venn rune on the ground with your finger. The point where you trace it becomes the center of a spherical area of magic that has a 30-foot radius and that is fixed to the place. The transfer takes 8 hours of work that requires the gavel to be within 5 feet of you. At the end, the gavel is destroyed, and the area gains the following property:\n   Whenever a creature utters a lie while within the 30-foot-radius sphere, that creature takes 5 psychic damage and flinches visibly.",
	attunement : true
}
MagicItemsList["gurt's greataxe"] = {
	name : "Gurt's Greataxe",
	source : ["SKT", 234],
	type : "weapon (greataxe)",
	rarity : "legendary",
	description : "",
	descriptionFull : "In the Year of the Icy Axe (123 DR), the frost giant Lord Gurt fell to Uthgar Gardolfsson\u2014leader of the folk who would become the Uthgardt barbarians\u2014in a battle that marked the ascendance of humankind over the giants in the Dessarin Valley. Gurt's greataxe was buried in Morgur's Mound until it was unearthed and brought back to Waterdeep. After laying in the city's vaults for decades, the axe was given to Harshnag, a frost giant adventurer, in recognition of his service to Waterdeep. Uthgardt barbarians recognize the weapon on sight and attack any giant that wields it.\n   You gain a +1 bonus to attack and damage rolls made with this magic weapon. It is sized for a giant, weighs 325 pounds, and deals 3d12 slashing damage on a hit, plus an extra 2d12 slashing damage if the target is human.\n   The axe sheds light as a torch when the temperature around it drops below 0 degrees Fahrenheit. The light can't be shut off in these conditions.\n   As an action, you can cast a version of the Heat Metal spell (save DC 13) that deals cold damage instead of fire damage. Once this power is used, it can't be used again until the next dawn.",
	attunement : true,
	weight : 325
}
MagicItemsList["ingot of the skold rune"] = {
	name : "Ingot of the Skold Rune",
	source : ["SKT", 234],
	type : "wondrous item",
	rarity : "very rare",
	magicItemTable : "H",
	description : "",
	descriptionFull : "This appears to be a simple ingot of iron ore, about a foot long and a few inches across. Inspection of its surface reveals the faint, silvery outline of the skold (shield) rune. The ingot has the following properties, which work only while it's on your person.\n   " + toUni("Runic Shield") + ". You have a +1 bonus to AC.\n   " + toUni("Shield Bond") + ". As a bonus action, choose a creature that you can see within 30 feet of you, other than yourself. Until the end of your next turn, any damage the target takes is reduced to 1, but you take half the damage prevented in this way. The damage you take can't be reduced in any way. Once you use this property, you can't use it again until you finish a short or long rest.\n   " + toUni("Shield Ward") + ". You can transfer the ingot's magic to a nonmagical item\u2014a shield or a two-handed melee weapon-by tracing the skold rune there with your finger. The transfer takes 8 hours of work that requires the two items to be within 5 feet of each other. At the end, the ingot is destroyed, and the rune appears in silver on the chosen item, which gains a benefit based on its form:\n \u2022 " + toUni("Shield.") + ". The shield is now a rare magic item that requires attunement. Its magic gives you a +1 bonus to AC, and the first time after each of your long rests that damage reduces you to 0 hit points, you are instead reduced to 1 hit point. You must be wielding the shield to gain these benefits.\n \u2022 " + toUni("Weapon.") + ". The weapon is now an uncommon magic weapon. It grants you a +1 bonus to AC while you're holding it.",
	attunement : true
}
MagicItemsList["korolnor scepter"] = {
	name : "Korolnor Scepter",
	source : ["SKT", 234],
	type : "weapon (club)",
	rarity : "legendary",
	storyItemAL : true,
	description : "",
	descriptionFull : "The Korolnor Scepter is one of ten Ruling Scepters of Shanatar, forged by the dwarven gods and given to the ruling houses of the ancient dwarven empire. The Korolnor Scepter's location was unknown for the longest time until a storm giant queen, Neri, found it in a barnacle-covered shipwreck at the bottom of the Trackless Sea. The Ruling Scepters are all roughly the same size and shape, but their materials and properties vary.\n   The Korolnor Scepter is a tapered mithral rod as thick and long as a dwarf's forearm, with a small platinum knob at the bottom and a rounded disk adorned with a ring of seven tiny blue gems at the top.\n   You gain a +3 bonus to attack and damage rolls made with this scepter, which can be wielded as a magic club.\n   You can use the properties of the Wyrmskull Throne, as well as the properties of the scepter itself. The scepter has 10 charges, and it regains 1d6+4 expanded charges at dawn. Its properties are as follows.\n   If you are underground or underwater, you can use an action to expend 1 charge to determine the distance to the surface.\n   As an action: you can expend 2 charges to cast the Sending spell from the scepter.\n   As an action: you can expend 3 charges to cast the Teleport spell from the scepter. If the destination is within 60 feet of the Wyrmskull Throne, there is no chance of a teleport error or mishap occurring.",
	attunement : true,
	weight : 2
}
MagicItemsList["navigation orb"] = {
	name : "Navigation Orb",
	source : ["SKT", 235],
	type : "wondrous item",
	rarity : "very rare",
	storyItemAL : true,
	description : "",
	descriptionFull : "A navigation orb is a hollow, 7-foot-diameter sphere of thin, polished mithral with a large skye (cloud) rune embossed on its outer surface. The orb levitates 10 feet above the ground and is keyed to a particular cloud castle, allowing you to control that castle's altitude and movement while the orb is inside the castle. If the orb is destroyed or removed from its castle, the castle's altitude and location remain fixed until the orb is returned or replaced.\n   As an action, you can cause one of the following effects to occur if you are touching the orb:\n   The castle moves at a speed of 1 mph in a straight line, in a direction of your choice, until the castle stops or is made to stop, or until another action is used to change its direction. If this movement brings the castle into contact with the ground, the castle lands gently.\n   The castle, if it is moving, comes to a gradual stop.\n   The castle makes a slow, 90-degree turn clockwise or counterclockwise (turning a northerly view into a westerly view, for example). The castle can turn while it is moving in a straight line.\n   Any creature touching the orb knows the altitude of the base of the castle above the ground or water below it.",
	attunement : true
}
MagicItemsList["opal of the ild rune"] = {
	name : "Opal of the Ild Rune",
	source : ["SKT", 235],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "G",
	description : "",
	descriptionFull : "This triangular fire opal measures about three inches on each side and is half an inch thick. The ild (fire) rune shimmers within its core, causing it to be slightly warm to the touch. The opal has the following properties, which work only while it's on your person.\n   " + toUni("Ignite") + ". As an action, you can ignite an object within 10 feet of you. The object must be flammable, and the fire starts in a circle no larger than 1 foot in diameter.\n   " + toUni("Fires Friend") + ". You have resistance to cold damage.\n   " + toUni("Fire Tamer") + ". As an action, you can extinguish any open flame within 10 feet of you. You choose how much fire to extinguish in that radius.\n   " + toUni("Gift of Flame") + ". You can transfer the opal's magic to a nonmagical item\u2014a weapon or a suit of armor\u2014by tracing the ild rune there with your finger. The transfer takes 8 hours of work that requires the two items to be within 5 feet of each other. At the end, the opal is destroyed, and the rune appears in red on the chosen item, which gains a benefit based on its form:\n \u2022 " + toUni("Weapon.") + ". The weapon is now an uncommon magic weapon. It deals an extra 1d6 fire damage to any target it hits.\n \u2022 " + toUni("Armor.") + ". The armor is now a rare magic item that requires attunement. You have resistance to cold damage while wearing the armor.",
	attunement : true
}
MagicItemsList["orb of the stein rune"] = {
	name : "Orb of the Stein Rune",
	source : ["SKT", 235],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "G",
	description : "",
	descriptionFull : "This orb of granite is about the size of an adult human's fist. The stein (stone) rune appears on it in the form of crystalline veins that run across the surface. The orb has the following properties, which work only while it's on your person.\n   " + toUni("Indomitable Stand") + ". As an action, you can channel the orb's magic to hold your ground. For the next minute or until you move any distance, you have advantage on all checks and saving throws to resist effects that force you to move. In addition, any enemy that moves to a space within 10 feet of you must succeed on a DC 12 Strength saving throw or be unable to move any farther this turn.\n   " + toUni("Stone Soul") + ". You can't be petrified.\n   " + toUni("Earthen Step") + ". You can cast Meld into Stone as a bonus action. Once you use this property, you can't use it again until you finish a short or long rest.\n   " + toUni("Gift of Stone") + ". You can transfer the orb's magic to a nonmagical item\u2014a shield or a pair of boots\u2014by tracing the stein rune there with your finger. The transfer takes8 hours of work that requires the two items to be within 5 feet of each other. At the end, the orb is destroyed, and the rune appears in silver on the chosen item, which gains a benefit based on its form:\n \u2022 " + toUni("Shield.") + ". The shield is now a rare magic item that requires attunement. While you wield it, you have resistance to all damage dealt by ranged weapon attacks.\n \u2022 " + toUni("Boots.") + ". The pair of boots is now an uncommon magic item that requires attunement. While you wear the boots, you have advantage on Strength saving throws, and you can use your reaction to avoid being knocked prone.",
	attunement : true
}
MagicItemsList["pennant of the vind rune"] = {
	name : "Pennant of the Vind Rune",
	source : ["SKT", 235],
	type : "wondrous item",
	rarity : "very rare",
	magicItemTable : "H",
	description : "",
	descriptionFull : "This blue pennant is crafted from silk and is five feet long and whips about as if buffeted by a wind. The vind (wind) rune appears on its surface, looking almost like a cloud. The pennant has the following properties, which work only while it's on your person.\n   " + toUni("Wind Step") + ". As an action, you fly up to 20 feet. If you don't land at the end of this flight, you fall unless you have another means of staying aloft.\n   " + toUni("Comforting Wind") + ". You can't suffocate.\n   " + toUni("Winds Grasp") + ". As a reaction when you fall, you can cause yourself to take no damage from the fall. Once you use this property, you can't use it again until you finish a short or long rest.\n   " + toUni("Wind Walker") + ". While you are attuned to this rune, you can cast Levitate as a bonus action. Once you use this property, you can't use it again until you finish a short or long rest.\n   " + toUni("Gift of Wind") + ". You can transfer the pennant's magic to a nonmagical item\u2014a suit of armor, a pair of boots, or a cloak\u2014by tracing the vind rune there with your finger. The transfer takes 8 hours of work that requires the two items to be within 5 feet of each other. At the end, the pennant is destroyed, and the rune appears in silver on the chosen item, which gains a benefit based on its form:\n \u2022 " + toUni("Armor.") + ". The armor is now an uncommon magic item that requires attunement. You gain a bonus to speed of 5 feet while you wear the armor, and if it normally imposes disadvantage on Stealth checks, it no longer does so.\n \u2022 " + toUni("Boots/Cloak.") + ". The pair of boots or cloak is now a rare magic item that requires attunement. While wearing the item, you can convert up to 20 feet of your movement on each of your turns into flight. If you don't land at the end of this flight, you fall unless you have another means of staying aloft. You can also cast Feather Fall once from the item, and you regain the ability to do so when you finish a short or long rest.",
	attunement : true
}
MagicItemsList["potion of giant size"] = {
	name : "Potion of Giant Size",
	source : ["SKT", 236],
	type : "potion",
	rarity : "legendary",
	description : "",
	descriptionFull : "When you drink this potion, you become Huge for 24 hours if you are Medium or smaller, otherwise the potion does nothing. For that duration, your Strength becomes 25, if it isn't already higher, and your hit point maximum is doubled (your current hit points are doubled when you drink the potion). In addition, the reach of your melee attacks increases by 5 feet.\n   Everything you are carrying and wearing also increases in size for the duration. When rolling damage for weapons enlarged in this manner, roll three times the normal number of dice; for example, an enlarged longsword would deal 3d8 slashing damage (instead of1d8), or 3d10 slashing damage (instead of 1d10) when used with two hands.\n   When the effect ends, any hit points you have above your hit point maximum become temporary hit points. This potion is a pale white liquid made from the tongue of a giant clam, with a pungent aroma akin to that of rotting algae. It tastes sweet, however, when consumed."
}
MagicItemsList["robe of serpents"] = {
	name : "Robe of Serpents",
	source : ["SKT", 236],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "F",
	description : "",
	descriptionFull : "A robe of serpents is a stylish silk garment that is popular among wealthy nobles and retired assassins. The robe is emblazoned with 1d4+3 stylized serpents, all brightly colored.\n   As a bonus action on your turn, you can transform one of the robe's serpents into a giant poisonous snake. The snake instantly falls from the robe, slithers into an unoccupied space next to you, and acts on your initiative count. The snake can tell friendly creatures from hostile ones and attacks the latter. The snake disappears in a harmless puff of smoke after 1 hour, when it drops to 0 hit points, or when you dismiss it (no action required). Once detached, a snake can't return to the robe. When all of the robe's snakes have detached, the robe becomes a nonmagical garment.",
	attunement : true
}
MagicItemsList["rod of the vonindod"] = {
	name : "Rod of the Vonindod",
	source : ["SKT", 236],
	type : "rod",
	rarity : "rare",
	magicItemTable : "F",
	description : "",
	descriptionFull : "The fire giant Duke Zalto hired a wizard to craft several of these adamantine rods. Each measures 4 feet long, weighs 100 pounds, and is sized to fit comfortably in a fire giant's hand. The rod has two prongs at one end and a molded handle grip on the opposite end.\n   The rod has 10 charges and regains 1d6+4 of its expended charges daily at dawn. As an action, you can grasp it by the handle and expend 1 charge to cast the Locate Object spell from it. When the rod is used to detect objects made of adamantine, such as fragments of the Vonindod construct, its range increases to 10 miles.",
	attunement : true
}
MagicItemsList["shard of the ise rune"] = {
	name : "Shard of the Ise Rune",
	source : ["SKT", 236],
	type : "wondrous item",
	rarity : "very rare",
	magicItemTable : "H",
	description : "",
	descriptionFull : "This shard of ice is long and slender, roughly the size of a dagger. The ise (ice) rune glows within it. The shard has the following properties, which work only while it's on your person.\n   " + toUni("Frigid Touch") + ". As an action, you can touch a body of water and freeze the water in a 10-foot-radius sphere around the spot you touched. Once you use this property, you can't use it again until you finish a short or long rest.\n   " + toUni("Frost Friend") + ". You have resistance to fire damage.\n   " + toUni("Icy Mantle") + ". As an action, you can touch yourself or another creature with water on your finger. The water creates an icy mantle of protection. The next time within the next minute that the target takes bludgeoning, slashing, or piercing damage, that damage is reduced to 0, and the mantle is destroyed. Once you use this property, you can't use it again until you finish a short or long rest.\n   " + toUni("Winters Howl") + ". As an action, you can cast Sleet Storm (spell save DC 17). You regain this ability after you finish a short or long rest.\n   " + toUni("Gift of Frost") + ". You can transfer the shard's magic to a nonmagical item\u2014a cloak or a pair of boots-by tracing the ise rune there with your finger. The transfer takes 8 hours of work that requires the two items to be within 5 feet of each other. At the end, the shard is destroyed, and the rune appears in blue on the chosen item, which gains a benefit based on its form:\n \u2022 " + toUni("Cloak.") + ". The cloak is now a rare magic item that requires attunement. While wearing it, you have resistance to fire damage, and you have advantage on Dexterity (Stealth) checks made while in snowy terrain.\n \u2022 " + toUni("Boots.") + ". The pair of boots is now a rare magic item that requires attunement. While wearing it, you ignore difficult terrain while walking, and you can walk on water.",
	attunement : true
}
MagicItemsList["wyrmskull throne"] = {
	name : "Wyrmskull Throne",
	source : ["SKT", 237],
	type : "wondrous item",
	rarity : "artifact",
	notLegalAL : true,
	description : "",
	descriptionFull : "Built by dwarven gods and entrusted to the rulers of Shanatar, an ancient dwarven empire. The Wyrmskull Throne was a symbol of dwarven power and pride for ages untold. The throne hovers a foot off the ground and is a massive thing made of polished obsidian with oversized feet\u2014the impaled skulls of four ancient blue dragons. Runes glisten in the carved obsidian winking to life with blue energy when the throne's powers are activated.\n   After the fall of Shanatar, the Wyrmskull Throne fell into the clutches of less honorable creatures. A band of adventurers wrested the throne from the aquatic elf tyrant Gantar Kraok and sold it to the storm giant Neri for a considerable fortune. Neri had the throne magically enlarged and gave it to her husband, King Hekaton, as a gift, along with one of the Ruling Scepters of Shanatar, which she had found in a wreck at the bottom of the Trackless Sea. Only a creature attuned to a Ruling Scepter and in possession of it can harness the powers of the Wyrmskull Throne, which has become the centerpiece of King Hekaton's throne room in the undersea citadel of Maelstrom. Fear of the throne's power has helped prevent evil giants from challenging or threatening Hekaton's leadership.\n   Any creature not attuned to a Ruling Scepter who sits on the throne is paralyzed and encased in a magical force field. While encased, the creature can't be touched or moved from the throne. Touching a Ruling Scepter to the force field dispels the field, though the creature remains paralyzed until it is separated from the throne.\n   Any creature seated on the throne can hear faint Whispers in Draconic\u2014the whisperings of four blue dragons whose skulls adorn the throne. Although powerless, these spirits try to influence the decisions of the throne's master\n   " + toUni("Properties of the Throne") + ". The throne has 9 charges and regains all expended charges daily at dawn. A creature that sits on the throne while attuned to a Ruling Sceptor in its possession can harness the throne's properties, which are as follows:\n   The throne gains a flying speed of 30 feet and can hover and flies where the creature wills. This property doesn't expend any charges.\n   Both the throne and the creature sitting on it can move through earth and stone without disturbing the material they move through. This property doesn't expend any charges.\n   As an action, the creature can expend 1 charge to cast Lightning Bolt (spell save DC 19) from the throne. The spell is cast as though using a 9th-level spell slot and deals 49 (14d6) lightning damage. The bolt discharges from the mouth of one of the throne's blue dragon skulls.\n   As an action, the creature can expend 2 charges to cast the Globe of Invulnerability spell from the throne. The globe encloses both the creature and the throne.\n   As an action, the creature can expend 3 charges to create a spectral image of an ancient blue dragon that surrounds both it and the throne. The spectral dragon lasts for 1 minute. At the end of each of the creature's turns, the spectral dragon makes one bite attack and two claw attacks against targets of the creature's choice. These attacks have the same attack bonus, reach, and damage as an ancient blue dragon's bite and claw attacks.\n   " + toUni("Destroying the Throne") + ". The Wyrmskull Throne can be destroyed by breaking at least five Ruling Scepters of Shanatar simultaneously on it. This fact has never been recorded or sung of among the dwarves or any bards or storytellers, and it can't be discovered with an ability check. Characters who want to destroy the throne must go on a quest to learn the method for doing so. The throne's destruction triggers an explosion, as shards of obsidian fly out in all directions. Each creature and object within a 30-foot-radius sphere centered on the throne must succeed on a DC 21 Dexterity saving throw, taking 70 (20d6) slashing damage on a failed save, or half as much damage on a successful one."
}
