var iFileName = "pub_20160906_SKT.js";
RequiredSheetVersion("13.0.8");
// This file adds the beasts from the Storm King's Thunder adventure book to MPMB's Character Record Sheet

// Define the source
SourceList.SKT={
	name : "Storm King's Thunder [beasts, items]",
	abbreviation : "SKT",
	group : "Adventure Books",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/storm-kings-thunder",
	date : "2016/09/06"
};

// Creatures [Crag Cat removed, because it is a monstrosity according to 2020 errata https://media.wizards.com/2020/dnd/downloads/SKT-Errata.pdf ]
CreatureList["sheep"] = {
	name : "Sheep",
	source : ["SKT", 142],
	size : 4, //Small
	type : "Beast",
	alignment : "Unaligned",
	ac : 10,
	hp : 3,
	hd : [1, 6],
	speed : "30 ft",
	scores : [12, 10, 11, 2, 10, 5],
	senses : "",
	passivePerception : 10,
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 0,
	attacks : [],
	traits : [{
		name : "Sure-Footed",
		description : "The sheep has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
	}]
};
CreatureList["pig"] = {
	name : "Pig",
	source : ["SKT", 143],
	size : 3, //Medium
	type : "Beast",
	alignment : "Unaligned",
	ac : 10,
	hp : 5,
	hd : [1, 8],
	speed : "30 ft",
	scores : [13, 11, 12, 2, 9, 5],
	senses : "",
	passivePerception : 9,
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 0,
	attacks : []
};
CreatureList["hulking crab"] = {
	name : "Hulking Crab",
	source : ["SKT", 240],
	size : 1, //Huge
	type : "Beast",
	alignment : "Unaligned",
	ac : 17,
	hp : 76,
	hd : [8, 12], //[#, die]
	speed : "20 ft, swim 30 ft",
	scores : [19, 8, 16, 3, 11, 3], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"stealth" : 2
	},
	senses : "Blindsight 30 ft",
	passivePerception : 10,
	challengeRating : "5",
	proficiencyBonus : 3,
	attacksAction : 2,
	attacks : [{
			name : "Claws",
			ability : 2,
			damage : [1, "", "slashing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "",
			modifiers : [-4, ""],
			abilitytodamage : false
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
	companion : "familiar_not_al",
	alignment : "Unaligned",
	ac : 12,
	hp : 5,
	hd : [2, 4], //[#, die]
	speed : "40 ft, climb 30 ft, fly 40 ft",
	scores : [3, 15, 10, 11, 12, 12], //[Str, Dex, Con, Int, Wis, Cha]
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
			modifiers : [-4, ""],
			abilitytodamage : false
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
	description : "As an action, I can furl or unfurl this 5 ft by 3 ft banner. While it is unfurled and I'm attuned to it, I can use its magical properties to see invisible creatures, and each once per short rest emanate courage or protect from ranged attacks. I can even transfer them over to a place, destroying the banner in the process. See Notes.",
	descriptionFull : "Crafted from a thick, red fabric, this banner measures 5 feet high and 3 feet wide. The krig (war) rune is displayed on the fabric with round, metal plates sewn into it. It can be attached to a 10-foot pole to serve as a standard. Furling or unfurling the banner requires an action. The banner has the following properties.\n   " + toUni("Mark of Courage") + ". As a bonus action, you can touch the unfurled banner and cause it to emanate courage. You and your allies are immune to the frightened condition while within 20 feet of it. This benefit lasts for 10 minutes or until the banner is furled. Once you use this property, you can't use it again until you finish a short or long rest.\n   " + toUni("Sentinel Standard") + ". You can see invisible creatures while they are within 20 feet of the unfurled banner and within your line of sight.\n   " + toUni("Standard's Shield") + ". As a bonus action, you can touch the unfurled banner and invoke this power. Any ranged attack roll that targets you or an ally of yours has disadvantage if the target is within 20 feet of the unfurled banner. This benefit lasts for 1 minute or until the banner is furled. Once you use this property, you can't use it again until you finish a short or long rest.\n   " + toUni("Gift of Battle") + ". You can transfer the banner's magic to a place by tracing the krig rune on the ground with your finger. The point where you trace it becomes the center of a spherical area of magic that has a 500-foot radius and that is fixed to the place. The transfer takes 8 hours of work that requires the banner to be within 5 feet of you and during which you choose creatures, creature types, or both that will benefit from the magic. At the end, the banner is destroyed, and the area gains the following property:\n   While in the 500-foot-radius sphere, the creatures you chose during the transfer process are immune to the frightened condition and gain a +1 bonus to attack rolls and AC.",
	attunement : true,
	action : [
		["bonus action", "Mark of Courage (Krig Banner)"],
		["bonus action", "Standard's Shield (Krig Banner)"]
	],
	extraLimitedFeatures : [{
		name : "Mark of Courage (Krig Banner)",
		usages : 1,
		recovery : "short rest"
	}, {
		name : "Standard's Shield (Krig Banner)",
		usages : 1,
		recovery : "short rest"
	}],
	toNotesPage : [{
		name : "Features",
		note : [
			"Crafted from a thick, red fabric, this banner measures 5 ft high and 3 ft wide. The krig (war) rune is displayed on the fabric with round, metal plates sewn into it. It can be attached to a 10-ft pole to serve as a standard. Furling or unfurling the banner requires an action. The banner has the following properties.",
			"As a bonus action, I can touch the unfurled banner and use the Mark of Courage, have it emanate courage. Me and my allies are immune to the frightened condition while within 20 ft of it. This benefit lasts for 10 minutes or until the banner is furled. Once I use this property, I can't use it again until I finish a short or long rest.",
			"I can see invisible creatures while they are within 20 ft of the unfurled banner and within my line of sight.",
			"As a bonus action, I can touch the unfurled banner and invoke the Standard's Shield power. While within 20 ft of the unfurled banner, me an my allies are protected from ranged attacks. Any ranged attack roll targetting those protected has disadvantage. This benefit lasts for 1 minute or until the banner is furled. Once I use this property, I can't use it again until I finish a short or long rest.\n",
			"I can transfer the banner's magic to a place by tracing the krig rune on the ground with my finger. The point where I trace it becomes the center of a spherical area of magic that has a 500-ft radius and that is fixed to the place. The transfer takes 8 hours of work that requires the banner to be within 5 ft of me and during which I choose creatures, creature types, or both that will benefit from the magic. At the end, the banner is destroyed, and the creatures I chose during the transfer process are immune to the frightened condition and gain a +1 bonus to attack rolls and AC while within the area."
		]
	}]
}
MagicItemsList["blod stone"] = {
	name : "Blod Stone",
	source : ["SKT", 233],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "D",
	description : "As an action while I carry this diamond with the blod rune, I can divine the location of the creature nearest to me that is related to the blood in the item and that isn't undead. I sense the distance and direction of the creature. The diamond is worth at least 5000 gp. If it is destroyed, the blood inside evaporates.",
	descriptionFull : "This diamond contains the blood of a creature\u2014blood that appears in the form of the blod (blood) rune. While the item is on your person, you can use your action to divine the location of the creature nearest to you that is related to the blood in the item and that isn't undead. You sense the distance and direction of the creature relative to your location. The creature is either the one whose blood is in the item or a blood relative.\n   This item is made from a large diamond worth at least 5,000 gp. When the blood of a creature is poured onto it during the creation process, the blood seeps into the heart of the gem. If the gem is destroyed, the blood evaporates and is gone forever. A vengeful being might use a blod stone to hunt down an entire bloodline. Such stones are sometimes given as gifts to siblings or handed down from parent to child.",
	attunement : true,
	action : [["action", ""]]
}
MagicItemsList["claw of the wyrm rune"] = {
	name : "Claw of the Wyrm Rune",
	source : ["SKT", 233],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "G",
	description : "This silvered dragon's claw gives me resistance to dragon breath weapons. As an action 3 times per dawn, I can have a dragon within 30 ft make a DC 15 Con save or gain vulnerability to all damage types until the end of my next turn. I can transfer its magic to a place, destroying the claw in the process. See book.",
	descriptionFull : "This dragon's claw has been covered with a coat of molten silver, upon which has been inscribed the wyrm (dragon) rune. The claw has the following properties.\n   " + toUni("Wyrmslayer") + ". As an action, you can point the claw at a dragon within 30 feet of you. The dragon must then succeed on a DC 15 Constitution saving throw or gain vulnerability to all damage types until the end of your next turn. This property can be used three times. The claw regains all expended uses at the next dawn.\n   " + toUni("Wyrm Shield") + ". While the claw is displayed on your person, you have resistance to the damage caused by any dragon's breath weapon.\n   " + toUni("Wyrm Ward") + ". You can transfer the c1aw's magic to a place by tracing the wyrm rune on the ground with your finger. The point where you trace it becomes the center of a spherical area of magic that has a 100-foot radius and that is fixed to the place. The transfer takes 8 hours of work that requires the claw to be within 5 feet of you. At the end, the claw is destroyed, and the area gains the following property:\n   While in the 100-foot-radius sphere, any dragon has disadvantage on saving throws and can have a flying speed no higher than 10 feet.",
	attunement : true,
	dmgres : ["Dragon Breath Weapons"],
	action : [["action", ""]],
	usages : 3,
	recovery : "dawn"
}
MagicItemsList["conch of teleportation"] = {
	name : "Conch of Teleportation",
	source : ["SKT", 234],
	type : "wondrous item",
	rarity : "very rare",
	storyItemAL : true,
	description : "This 2.5 ft conch shell is inscribed with the uvar rune. As an action once per dawn, I can blow into the shell, teleporting myself and up to 8 willing creatures to a predetermined location without any chance of mishap. The location is determined at creation of the item and can't be changed.",
	descriptionFull : "This item is an ordinary, albeit rather large, conch shell that has been inscribed with the uvar rune. The conch measures 2\xBD feet long and weighs 20 pounds.\n   As an action, you can cast the Teleport spell by blowing into the shell. The destination is fixed, and there is no chance of either a mishap or the spell being off target. Anyone teleported by the conch appears in a specific location designated by the item's creator at the time the uvar rune is inscribed on the conch. It doesn't allow teleportation to any other destination. Once its spell is cast, the conch can't be used again until the next dawn.",
	weight : 20,
	attunement : true,
	action : [["action", ""]],
	usages : 1,
	recovery : "dawn"
}
MagicItemsList["gavel of the venn rune"] = {
	name : "Gavel of the Venn Rune",
	source : ["SKT", 234],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "G",
	description : "This wooden gavel imposes disadv. on attacks against me before my first turn in a combat. As an action once per long rest, I can strike it on a hard surface and have the first creature that deals damage with an attack within 60 ft of the strike take half that damage itself as psychic damage. Can transfer rune, see book.",
	descriptionFull : "This wooden gavel is small by giant reckoning but nearly the size of a warhammer in human hands. The venn (friend) rune is inscribed in mithral in the base of the haft. Among giants, this item is used as part of rituals to resolve disputes. The gavel has the following properties.\n   " + toUni("Arbiters Shield") + ". At the start of every combat, attack rolls against you have disadvantage before the start of your first turn, provided that the gavel is on your person.\n   " + toUni("Bond of Amity") + ". As an action, you can use the gavel to strike a point on a hard surface. The first time in the next minute that a creature within 60 feet of that point deals damage to another creature with an attack that hits, the attacker takes psychic damage equal to half the damage it dealt to the target. Once you use this property, you can't use it again until you finish a long rest.\n   " + toUni("Gift of Truth") + ". You can transfer the gavel's magic to a place by tracing the venn rune on the ground with your finger. The point where you trace it becomes the center of a spherical area of magic that has a 30-foot radius and that is fixed to the place. The transfer takes 8 hours of work that requires the gavel to be within 5 feet of you. At the end, the gavel is destroyed, and the area gains the following property:\n   Whenever a creature utters a lie while within the 30-foot-radius sphere, that creature takes 5 psychic damage and flinches visibly.",
	attunement : true,
	action : [["action", ""]],
	usages : 1,
	recovery : "long rest"
}
MagicItemsList["gurt's greataxe"] = {
	name : "Gurt's Greataxe",
	source : ["SKT", 234],
	type : "weapon (greataxe)",
	rarity : "legendary",
	notLegalAL : true,
	description : "This giant-sized greataxe adds +1 to hit and damage and deals 3d12 slashing damage (+2d12 vs. humans). When in an area that is below 0 \u00B0F, it sheds bright light in a 20-ft radius and dim light for another 20 ft. As an action once per dawn, I can use it to cast Heat Metal (DC 13) that deals cold damage instead of fire.",
	descriptionFull : "In the Year of the Icy Axe (123 DR), the frost giant Lord Gurt fell to Uthgar Gardolfsson\u2014leader of the folk who would become the Uthgardt barbarians\u2014in a battle that marked the ascendance of humankind over the giants in the Dessarin Valley. Gurt's greataxe was buried in Morgur's Mound until it was unearthed and brought back to Waterdeep. After laying in the city's vaults for decades, the axe was given to Harshnag, a frost giant adventurer, in recognition of his service to Waterdeep. Uthgardt barbarians recognize the weapon on sight and attack any giant that wields it.\n   You gain a +1 bonus to attack and damage rolls made with this magic weapon. It is sized for a giant, weighs 325 pounds, and deals 3d12 slashing damage on a hit, plus an extra 2d12 slashing damage if the target is human.\n   The axe sheds light as a torch when the temperature around it drops below 0 degrees Fahrenheit. The light can't be shut off in these conditions.\n   As an action, you can cast a version of the Heat Metal spell (save DC 13) that deals cold damage instead of fire damage. Once this power is used, it can't be used again until the next dawn.",
	attunement : true,
	weight : 325,
	usages : 1,
	recovery : "dawn",
	weaponsAdd : ["Gurt's Greataxe"],
	weaponOptions : {
		baseWeapon : "greataxe",
		regExpSearch : /^(?=.*gurt)(?=.*greataxe).*$/i,
		name : "Gurt's Greataxe",
		source : ["SKT", 234],
		damage : [3, 12, "slashing"],
		weight : 325,
		description : "Heavy, two-handed; +2d12 damage against humans",
		modifiers : [1, 1]
	},
	fixedDC : 13,
	spellcastingBonus : {
		name : "Deals cold damage",
		spells : ["heat metal"],
		selection : ["heat metal"],
		firstCol : "oncelr"
	},
	spellChanges : {
		"heat metal" : {
			description : "1 metal obj on touch 2d8 Cold dmg; save or drop obj; if held: dis. atk/chk; bns a cool obj again",
			descriptionShorter : "1 metal obj, touch it 2d8 Cold dmg; save or drop it; if held: dis. atk/chk; bns a redo",
			changes : "Using Gurt's Greataxe, the spell deals cold damage instead of fire."
		}
	}
}
MagicItemsList["ingot of the skold rune"] = {
	name : "Ingot of the Skold Rune",
	source : ["SKT", 234],
	magicItemTable : "H",
	description : "I can use the ingot as it is, or transfer its runic properties over to a shield or two-handed melee weapon.",
	descriptionFull : "This appears to be a simple ingot of iron ore, about a foot long and a few inches across. Inspection of its surface reveals the faint, silvery outline of the skold (shield) rune. The ingot has the following properties, which work only while it's on your person.\n   " + toUni("Runic Shield") + ". You have a +1 bonus to AC.\n   " + toUni("Shield Bond") + ". As a bonus action, choose a creature that you can see within 30 feet of you, other than yourself. Until the end of your next turn, any damage the target takes is reduced to 1, but you take half the damage prevented in this way. The damage you take can't be reduced in any way. Once you use this property, you can't use it again until you finish a short or long rest.\n   " + toUni("Shield Ward") + ". You can transfer the ingot's magic to a nonmagical item\u2014a shield or a two-handed melee weapon-by tracing the skold rune there with your finger. The transfer takes 8 hours of work that requires the two items to be within 5 feet of each other. At the end, the ingot is destroyed, and the rune appears in silver on the chosen item, which gains a benefit based on its form:\n \u2022 " + toUni("Shield.") + ". The shield is now a rare magic item that requires attunement. Its magic gives you a +1 bonus to AC, and the first time after each of your long rests that damage reduces you to 0 hit points, you are instead reduced to 1 hit point. You must be wielding the shield to gain these benefits.\n \u2022 " + toUni("Weapon.") + ". The weapon is now an uncommon magic weapon. It grants you a +1 bonus to AC while you're holding it.",
	choices : ["Ingot", "Transferred to a shield", "Transferred to a two-handed melee weapon"],
	"ingot" : {
		name : "Ingot of the Skold Rune ",
		type : "wondrous item",
		rarity : "very rare",
		description : "This iron ingot gives me +1 AC. As a bonus action, I can use it to choose a creature within 30 ft other than myself. Until the end of my next turn, any damage it takes is reduced to 1, but I take half the prevented damage and this damage can't be reduced in any way. I can transfer the rune to a shield or weapon, see book.",
		attunement : true,
		extraAC : [{name : "Skold Rune", mod : 1, magic : true, text : "I gain a +1 bonus to AC while attuned."}],
		action : [["bonus action", ""]]
	},
	"transferred to a shield" : {
		name : "Skold Rune Shield",
		sortname : "Rune Shield, Skold",
		type : "shield",
		rarity : "rare",
		description : "This shield gives my +1 AC on top of its normal bonus to AC. While carrying it, the first time after a long rest that damage reduces me to 0 HP, I drop to 1 HP instead.",
		shieldAdd : ["Skold Rune Shield", 3, 6],
		usages : 1,
		recovery : "long rest"
	},
	"transferred to a two-handed melee weapon" : {
		name : "Skold Rune Weapon",
		sortname : "Rune Weapon, Skold",
		type : "weapon (any two-handed melee)",
		rarity : "uncommon",
		description : "This magic weapon grants me a +1 bonus to AC.",
		extraAC : [{name : "Skold Rune", mod : 1, magic : true, text : "I gain a +1 bonus to AC while attuned."}],
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "brackets",
			descriptionChange : ["replace", "weapon"],
			itemName1stPage : ["suffix", "Skold Rune"],
			excludeCheck : function (inObjKey, inObj) {
				return !(/melee/i).test(inObj.range) || !(/((^|[^+-]\b)2|\btwo).?hand(ed)?s?\b/i).test(inObj.description);
			}
		},
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && !v.isSpell && (/^(?=.*\bskold\b)(?=.*(rune|runic)).*$/i).test(v.WeaponTextName)) {
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					}
				},
				'If I include the words "Skold Rune" in the name of a weapon, it will be treated as the magic weapon Skold Rune Weapon.'
			]
		}
	}
}
MagicItemsList["korolnor scepter"] = {
	name : "Korolnor Scepter",
	source : ["SKT", 234],
	type : "weapon (club)",
	rarity : "legendary",
	storyItemAL : true,
	description : "This tapered mithral rod the size of a dwarf's forearm has 10 charges, regaining 1d6+4 at dawn. It can be wielded as a +3 club. As an action while below sea level, I can expend 1 charge to determine the distance to the surface. I can also use the charges to cast Sending (2 charges) and Teleport (3 charges).",
	descriptionFull : "The Korolnor Scepter is one of ten Ruling Scepters of Shanatar, forged by the dwarven gods and given to the ruling houses of the ancient dwarven empire. The Korolnor Scepter's location was unknown for the longest time until a storm giant queen, Neri, found it in a barnacle-covered shipwreck at the bottom of the Trackless Sea. The Ruling Scepters are all roughly the same size and shape, but their materials and properties vary.\n   The Korolnor Scepter is a tapered mithral rod as thick and long as a dwarf's forearm, with a small platinum knob at the bottom and a rounded disk adorned with a ring of seven tiny blue gems at the top.\n   You gain a +3 bonus to attack and damage rolls made with this scepter, which can be wielded as a magic club.\n   You can use the properties of the Wyrmskull Throne, as well as the properties of the scepter itself. The scepter has 10 charges, and it regains 1d6+4 expended charges at dawn. Its properties are as follows.\n   If you are underground or underwater, you can use an action to expend 1 charge to determine the distance to the surface.\n   As an action: you can expend 2 charges to cast the Sending spell from the scepter.\n   As an action: you can expend 3 charges to cast the Teleport spell from the scepter. If the destination is within 60 feet of the Wyrmskull Throne, there is no chance of a teleport error or mishap occurring.",
	attunement : true,
	weight : 2,
	usages : 10,
	recovery : "dawn",
	additional : "regains 1d6+4",
	spellFirstColTitle: "Ch",
	spellcastingBonus : [{
		name : "2 charges",
		spells : ["sending"],
		selection : ["sending"],
		firstCol : 2
	}, {
		name : "3 charges",
		spells : ["teleport"],
		selection : ["teleport"],
		firstCol : 3
	}],
	weaponsAdd : ["Korolnor Scepter"],
	weaponOptions : {
		baseWeapon : "club",
		regExpSearch : /^(?=.*korolnor)(?=.*scepter).*$/i,
		name : "Korolnor Scepter",
		source : ["SKT", 234],
		modifiers : [3, 3]
	}
}
MagicItemsList["navigation orb"] = {
	name : "Navigation Orb",
	source : ["SKT", 235],
	type : "wondrous item",
	rarity : "very rare",
	storyItemAL : true,
	description : "This hollow 7-ft diameter sphere of thin, polished mithral bears the skye rune and is keyed to a particular cloud castle. It only works while within that castle. As an action while touching it, I can use it to move the cloud castle 1 mph until commanded otherwise, have it stop, or turn 90 degrees.",
	descriptionFull : "A navigation orb is a hollow, 7-foot-diameter sphere of thin, polished mithral with a large skye (cloud) rune embossed on its outer surface. The orb levitates 10 feet above the ground and is keyed to a particular cloud castle, allowing you to control that castle's altitude and movement while the orb is inside the castle. If the orb is destroyed or removed from its castle, the castle's altitude and location remain fixed until the orb is returned or replaced.\n   As an action, you can cause one of the following effects to occur if you are touching the orb:\n   The castle moves at a speed of 1 mph in a straight line, in a direction of your choice, until the castle stops or is made to stop, or until another action is used to change its direction. If this movement brings the castle into contact with the ground, the castle lands gently.\n   The castle, if it is moving, comes to a gradual stop.\n   The castle makes a slow, 90-degree turn clockwise or counterclockwise (turning a northerly view into a westerly view, for example). The castle can turn while it is moving in a straight line.\n   Any creature touching the orb knows the altitude of the base of the castle above the ground or water below it.",
	attunement : true
}
MagicItemsList["opal of the ild rune"] = {
	name : "Opal of the Ild Rune",
	source : ["SKT", 235],
	magicItemTable : "G",
	description : "I can use the opal as it is, or transfer its runic properties over to a suit of armor or weapon.",
	descriptionFull : "This triangular fire opal measures about three inches on each side and is half an inch thick. The ild (fire) rune shimmers within its core, causing it to be slightly warm to the touch. The opal has the following properties, which work only while it's on your person.\n   " + toUni("Ignite") + ". As an action, you can ignite an object within 10 feet of you. The object must be flammable, and the fire starts in a circle no larger than 1 foot in diameter.\n   " + toUni("Fires Friend") + ". You have resistance to cold damage.\n   " + toUni("Fire Tamer") + ". As an action, you can extinguish any open flame within 10 feet of you. You choose how much fire to extinguish in that radius.\n   " + toUni("Gift of Flame") + ". You can transfer the opal's magic to a nonmagical item\u2014a weapon or a suit of armor\u2014by tracing the ild rune there with your finger. The transfer takes 8 hours of work that requires the two items to be within 5 feet of each other. At the end, the opal is destroyed, and the rune appears in red on the chosen item, which gains a benefit based on its form:\n \u2022 " + toUni("Weapon.") + ". The weapon is now an uncommon magic weapon. It deals an extra 1d6 fire damage to any target it hits.\n \u2022 " + toUni("Armor.") + ". The armor is now a rare magic item that requires attunement. You have resistance to cold damage while wearing the armor.",
	choices : ["Opal", "Transferred to a suit of armor", "Transferred to a weapon"],
	"opal" : {
		name : "Opal of the Ild Rune ",
		type : "wondrous item",
		rarity : "rare",
		description : "This triangular fire opal gives me resistance to cold damage. As an action, I can use it to extinguish any open flames of my choice within 10 ft, or I can ignite a flammable object within 10 ft with a fire up to 1 ft in diameter. I can undertake an 8 hour ritual to transfer the rune to a suit of armor or weapon, see book.",
		attunement : true,
		dmgres : ["Cold"],
		action : [["action", ""]]
	},
	"transferred to a suit of armor" : {
		name : "Ild Rune Armor",
		sortname : "Rune Armor, Ild",
		type : "armor (any)",
		rarity : "rare",
		description : "This magic armor gives me resistance to cold damage.",
		attunement : true,
		dmgres : ["Cold"],
		chooseGear : {
			type : "armor",
			prefixOrSuffix : "brackets",
			descriptionChange : ["prefix", "armor"],
			itemName1stPage : ["suffix", "Ild Rune"]
		}
	},
	"transferred to a weapon" : {
		name : "Ild Rune Weapon",
		sortname : "Rune Weapon, Ild",
		type : "wondrous item",
		rarity : "uncommon",
		description : "This magic weapon deals +1d6 fire damage to any target it hits.",
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "brackets",
			descriptionChange : ["replace", "weapon"],
			itemName1stPage : ["suffix", "Ild Rune"]
		},
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (!v.theWea.isMagicWeapon && !v.isSpell && (/^(?=.*\bild\b)(?=.*(rune|runic)).*$/i).test(v.WeaponTextName)) {
						v.theWea.isMagicWeapon = true;
						fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
						fields.Description += (fields.Description ? '; ' : '') + '+1d6 fire damage';
					}
				},
				'If I include the words "Ild Rune" in a the name of a weapon, it will be treated as the magic weapon Ild Rune Weapon, which deals +1d6 fire damage.'
			]
		}
	}
}
MagicItemsList["orb of the stein rune"] = {
	name : "Orb of the Stein Rune",
	source : ["SKT", 235],
	magicItemTable : "G",
	description : "I can use the orb as it is, or transfer its runic properties over to a shield or pair of boots.",
	descriptionFull : "This orb of granite is about the size of an adult human's fist. The stein (stone) rune appears on it in the form of crystalline veins that run across the surface. The orb has the following properties, which work only while it's on your person.\n   " + toUni("Indomitable Stand") + ". As an action, you can channel the orb's magic to hold your ground. For the next minute or until you move any distance, you have advantage on all checks and saving throws to resist effects that force you to move. In addition, any enemy that moves to a space within 10 feet of you must succeed on a DC 12 Strength saving throw or be unable to move any farther this turn.\n   " + toUni("Stone Soul") + ". You can't be petrified.\n   " + toUni("Earthen Step") + ". You can cast Meld into Stone as a bonus action. Once you use this property, you can't use it again until you finish a short or long rest.\n   " + toUni("Gift of Stone") + ". You can transfer the orb's magic to a nonmagical item\u2014a shield or a pair of boots\u2014by tracing the stein rune there with your finger. The transfer takes8 hours of work that requires the two items to be within 5 feet of each other. At the end, the orb is destroyed, and the rune appears in silver on the chosen item, which gains a benefit based on its form:\n \u2022 " + toUni("Shield.") + ". The shield is now a rare magic item that requires attunement. While you wield it, you have resistance to all damage dealt by ranged weapon attacks.\n \u2022 " + toUni("Boots.") + ". The pair of boots is now an uncommon magic item that requires attunement. While you wear the boots, you have advantage on Strength saving throws, and you can use your reaction to avoid being knocked prone.",
	choices : ["Orb", "Transferred to a shield", "Transferred to a pair of boots"],
	"orb" : {
		name : "Orb of the Stein Rune ",
		type : "wondrous item",
		rarity : "rare",
		description : "This orb gives me petrification immunity. As a bonus action once per short rest, I can cast Meld Into Stone. As an action, I can hold my ground for 1 min or until I move any distance, giving me adv. on saves/checks vs. moving and enemies moving to a space in 10 ft must make a DC 12 Str save or have speed 0 for this turn.",
		attunement : true,
		savetxt : { immune : ["petrified"] },
		action : [["action", ""]],
		spellcastingBonus : {
			name : "Once per short rest",
			spells : ["meld into stone"],
			selection : ["meld into stone"],
			firstCol : "oncesr"
		},
		spellChanges : {
			"meld into stone" : {
				time : "1 bns",
				changes : "Using the Orb of the Stein Rune, I can cast this as a bonus action."
			}
		}
	},
	"transferred to a shield" : {
		name : "Stein Rune Shield",
		sortname : "Rune Shield, Stein",
		type : "shield",
		rarity : "rare",
		description : "This shield gives me resistance to all damage dealt by range weapon attack.",
		attunement : true,
		shieldAdd : "Stein Rune Shield",
		dmgres : ["Ranged Weapon Attacks"]
	},
	"transferred to a pair of boots" : {
		name : "Stein Rune Boots",
		type : "wondrous item",
		rarity : "uncommon",
		description : "These pair of boots give me advantage on Strength saving throws. As a reaction, I can avoid being knocked prone.",
		attunement : true,
		savetxt : { text : ["Adv. on Str saves"] },
		advantages : ["Strength", true],
		action : [["reaction", ""]]
	}
}
MagicItemsList["pennant of the vind rune"] = {
	name : "Pennant of the Vind Rune",
	source : ["SKT", 235],
	magicItemTable : "H",
	description : "I can use the pennant as it is, or transfer its runic properties over to a suit of armor, pair of boots, or cloak.",
	descriptionFull : "This blue pennant is crafted from silk and is five feet long and whips about as if buffeted by a wind. The vind (wind) rune appears on its surface, looking almost like a cloud. The pennant has the following properties, which work only while it's on your person.\n   " + toUni("Wind Step") + ". As an action, you fly up to 20 feet. If you don't land at the end of this flight, you fall unless you have another means of staying aloft.\n   " + toUni("Comforting Wind") + ". You can't suffocate.\n   " + toUni("Winds Grasp") + ". As a reaction when you fall, you can cause yourself to take no damage from the fall. Once you use this property, you can't use it again until you finish a short or long rest.\n   " + toUni("Wind Walker") + ". While you are attuned to this rune, you can cast Levitate as a bonus action. Once you use this property, you can't use it again until you finish a short or long rest.\n   " + toUni("Gift of Wind") + ". You can transfer the pennant's magic to a nonmagical item\u2014a suit of armor, a pair of boots, or a cloak\u2014by tracing the vind rune there with your finger. The transfer takes 8 hours of work that requires the two items to be within 5 feet of each other. At the end, the pennant is destroyed, and the rune appears in silver on the chosen item, which gains a benefit based on its form:\n \u2022 " + toUni("Armor.") + ". The armor is now an uncommon magic item that requires attunement. You gain a bonus to speed of 5 feet while you wear the armor, and if it normally imposes disadvantage on Stealth checks, it no longer does so.\n \u2022 " + toUni("Boots/Cloak.") + ". The pair of boots or cloak is now a rare magic item that requires attunement. While wearing the item, you can convert up to 20 feet of your movement on each of your turns into flight. If you don't land at the end of this flight, you fall unless you have another means of staying aloft. You can also cast Feather Fall once from the item, and you regain the ability to do so when you finish a short or long rest.",
	choices : ["Pennant", "Transferred to a suit of armor", "Transferred to a pair of boots or cloak"],
	"pennant" : {
		name : "Pennant of the Vind Rune ",
		type : "wondrous item",
		rarity : "very rare",
		description : "This blue pennant stops me from suffocating. As an action, I can fly up to 20 ft, but won't stay aloft at the end of it. As a reaction once per short rest when I fall, I can use Wind Grasp to take no damage from the fall. As a bonus action once per short rest, I can cast Levitate. I can transfer this rune, see book.",
		attunement : true,
		savetxt : { immune : ["suffocation"] },
		action : [
			["action", "Wind Step (Vind Rune)"],
			["reaction", "Winds Grasp (Vind Rune)"]
		],
		extraLimitedFeatures : [{
			name : "Levitate (Vind Rune)",
			usages : 1,
			recovery : "short rest"
		}, {
			name : "Winds Grasp (Vind Rune)",
			usages : 1,
			recovery : "short rest"
		}],
		spellcastingBonus : {
			name : "Once per short rest",
			spells : ["levitate"],
			selection : ["levitate"],
			firstCol : "oncesr"
		},
		spellChanges : {
			"levitate" : {
				time : "1 bns",
				changes : "Using the Pennant of the Vind Rune, I can cast this as a bonus action."
			}
		}
	},
	"transferred to a suit of armor" : {
		name : "Vind Rune Armor",
		sortname : "Rune Armor, Vind",
		type : "armor (any)",
		rarity : "uncommon",
		description : "This magic armor doesn't impose disadvantage on stealth checks and gives me a 5 ft bonus to my speed.",
		attunement : true,
		speed : { allModes : "+5" },
		chooseGear : {
			type : "armor",
			prefixOrSuffix : "brackets",
			descriptionChange : ["prefix", "armor"],
			itemName1stPage : ["suffix", "Ild Rune"]
		}
	},
	"transferred to a pair of boots or cloak" : {
		name : "Vind Rune Boots or Cloak",
		nameAlt : "Vind Rune Boots",
		nameTest : "Vind Rune Cloak",
		type : "wondrous item",
		rarity : "rare",
		description : "While wearing this item, I can convert up to 20 ft of my movement on each of my turns into flight. If I don't land at the end of this flight, I fall unless I have other means of staying aloft. Once per short rest, I can use this item to cast Feather Fall.",
		attunement : true,
		usages : 1,
		recovery : "short rest",
		spellcastingBonus : {
			name : "Once per short rest",
			spells : ["feather fall"],
			selection : ["feather fall"],
			firstCol : "oncesr"
		}
	}
}
MagicItemsList["potion of giant size"] = {
	name : "Potion of Giant Size",
	source : ["SKT", 236],
	type : "potion",
	rarity : "legendary",
	description : "Once as an action, I can drink this potion of pale white liquid or administer it to another to grow to Huge for 24 hours. This gives Str 25, +5 ft reach, double max HP (current HP also doubles), and roll three times damage die for weapons. When its effect ends, HP above the max HP becomes temporary HP.",
	descriptionFull : "When you drink this potion, you become Huge for 24 hours if you are Medium or smaller, otherwise the potion does nothing. For that duration, your Strength becomes 25, if it isn't already higher, and your hit point maximum is doubled (your current hit points are doubled when you drink the potion). In addition, the reach of your melee attacks increases by 5 feet.\n   Everything you are carrying and wearing also increases in size for the duration. When rolling damage for weapons enlarged in this manner, roll three times the normal number of dice; for example, an enlarged longsword would deal 3d8 slashing damage (instead of1d8), or 3d10 slashing damage (instead of 1d10) when used with two hands.\n   When the effect ends, any hit points you have above your hit point maximum become temporary hit points. This potion is a pale white liquid made from the tongue of a giant clam, with a pungent aroma akin to that of rotting algae. It tastes sweet, however, when consumed.",
	weight : 0.5
}
MagicItemsList["robe of serpents"] = {
	name : "Robe of Serpents",
	source : ["SKT", 236],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "F",
	description : "As a bonus action, I can remove one of the 1d4+3 emblazoned, brightly colored snakes from this robe and have it turn into a giant poisonous snake within 5 ft of me. It acts on my initiative and attacks those hostile to me. It disappears after 1 hour, when it drops to 0 HP, or when I dismiss it (no action).",
	descriptionFull : "A robe of serpents is a stylish silk garment that is popular among wealthy nobles and retired assassins. The robe is emblazoned with 1d4+3 stylized serpents, all brightly colored.\n   As a bonus action on your turn, you can transform one of the robe's serpents into a giant poisonous snake. The snake instantly falls from the robe, slithers into an unoccupied space next to you, and acts on your initiative count. The snake can tell friendly creatures from hostile ones and attacks the latter. The snake disappears in a harmless puff of smoke after 1 hour, when it drops to 0 hit points, or when you dismiss it (no action required). Once detached, a snake can't return to the robe. When all of the robe's snakes have detached, the robe becomes a nonmagical garment.",
	attunement : true,
	action : [["bonus action", ""]],
	usages : "1d4+3",
	recovery : "Never"
}
MagicItemsList["rod of the vonindod"] = {
	name : "Rod of the Vonindod",
	source : ["SKT", 236],
	type : "rod",
	rarity : "rare",
	magicItemTable : "F",
	description : "This 4 ft adamantine rod sized for a giant has 10 charges and regains 1d6+4 expended charges daily at dawn. I can expend 1 charge to cast Locate Object from it which has a range of 10 miles when used to locate objects made of adamantine. It has two prongs at one end and a molded handle grip on the other.",
	descriptionFull : "The fire giant Duke Zalto hired a wizard to craft several of these adamantine rods. Each measures 4 feet long, weighs 100 pounds, and is sized to fit comfortably in a fire giant's hand. The rod has two prongs at one end and a molded handle grip on the opposite end.\n   The rod has 10 charges and regains 1d6+4 of its expended charges daily at dawn. As an action, you can grasp it by the handle and expend 1 charge to cast the Locate Object spell from it. When the rod is used to detect objects made of adamantine, such as fragments of the Vonindod construct, its range increases to 10 miles.",
	weight : 100,
	attunement : true,
	usages : 10,
	recovery : "dawn",
	additional : "regains 1d6+4",
	spellFirstColTitle : "Ch",
	spellcastingBonus : {
		name : "1 charge",
		spells : ["locate object"],
		selection : ["locate object"],
		firstCol : 1
	},
	spellChanges : {
		"locate object" : {
			description : "Learn direction to closest described kind or specific obj in 1000 ft (10 miles if adamantine); see book",
			changes : "Using the Rod of the Vonindod, the spell detection range increases to 10 miles when used to locate adamantine objects."
		}
	}
}
MagicItemsList["shard of the ise rune"] = {
	name : "Shard of the Ise Rune",
	type : "wondrous item",
	source : ["SKT", 236],
	magicItemTable : "H",
	description : "I can use the shard as it is, or transfer its runic properties over to a cloak or a pair of boots.",
	descriptionFull : "This shard of ice is long and slender, roughly the size of a dagger. The ise (ice) rune glows within it. The shard has the following properties, which work only while it's on your person.\n   " + toUni("Frigid Touch") + ". As an action, you can touch a body of water and freeze the water in a 10-foot-radius sphere around the spot you touched. Once you use this property, you can't use it again until you finish a short or long rest.\n   " + toUni("Frost Friend") + ". You have resistance to fire damage.\n   " + toUni("Icy Mantle") + ". As an action, you can touch yourself or another creature with water on your finger. The water creates an icy mantle of protection. The next time within the next minute that the target takes bludgeoning, slashing, or piercing damage, that damage is reduced to 0, and the mantle is destroyed. Once you use this property, you can't use it again until you finish a short or long rest.\n   " + toUni("Winter's Howl") + ". As an action, you can cast Sleet Storm (spell save DC 17). You regain this ability after you finish a short or long rest.\n   " + toUni("Gift of Frost") + ". You can transfer the shard's magic to a nonmagical item\u2014a cloak or a pair of boots-by tracing the ise rune there with your finger. The transfer takes 8 hours of work that requires the two items to be within 5 feet of each other. At the end, the shard is destroyed, and the rune appears in blue on the chosen item, which gains a benefit based on its form:\n \u2022 " + toUni("Cloak.") + ". The cloak is now a rare magic item that requires attunement. While wearing it, you have resistance to fire damage, and you have advantage on Dexterity (Stealth) checks made while in snowy terrain.\n \u2022 " + toUni("Boots.") + ". The pair of boots is now a rare magic item that requires attunement. While wearing it, you ignore difficult terrain while walking, and you can walk on water.",
	attunement : true,
	choices : ["Shard", "Transferred to a cloak", "Transferred to a pair of boots"],
	"shard" : {
		name : "Shard of the Ise Rune ",
		rarity : "very rare",
		description : "This shard of ice gives me fire resistance. As an action, I can use Frigid Touch, freezing water in a 10-ft radius where I touch it, or Icy Mantle, to prevent the first bludgeoning, slashing, or piercing damagein the next minute for a creature I touch. I can use it to cast Sleet Storm (DC 17). I can do all 3 each once per short rest.",
		dmgres : ["Fire"],
		action : [
			["action", "Frigid Touch (Ise Rune)"],
			["action", "Icy Mantle (Ise Rune)"]
		],
		extraLimitedFeatures : [{
			name : "Frigid Touch (Ise Rune)",
			usages : 1,
			recovery : "short rest"
		}, {
			name : "Icy Mantle (Ise Rune)",
			usages : 1,
			recovery : "short rest"
		}, {
			name : "Sleet Storm (Ise Rune)",
			usages : 1,
			recovery : "short rest"
		}],
		fixedDC : 17,
		spellcastingBonus : {
			name : "Once per short rest",
			spells : ["sleet storm"],
			selection : ["sleet storm"],
			firstCol : "oncesr"
		}
	},
	"transferred to a cloak" : {
		name : "Ise Rune Cloak",
		rarity : "rare",
		description : "While wearing this cloak, I have resistance to fire damage, and I have advantage on Dexterity (Stealth) checks made while in snowy terrain.",
		dmgres : ["Fire"]
	},
	"transferred to a pair of boots" : {
		name : "Ise Rune Boots",
		rarity : "rare",
		description : "While wearing these boots, I ignore difficult terrain while walking, and I can walk on water."
	}
}
MagicItemsList["ring of hardened magma"] = {
	name : "Ring of Hardened Magma",
	source : ["SKT", 105], // Raven Rock ancient relic
	type : "ring",
	rarity : "unknown",
	storyItemAL : true,
	description : "Warm orange light spills from minuscule cracks that form on this rings outer surface. It automatically resizes to fit the creature attuned to it. It has 6 charges which can be used to cast Conjure Minor Elementals (summoning 4 magma mephits or 4 magmins) or Fire Shield (warm shield version only), costing 1 charge each.",
	descriptionFull : "This ring is sized for a fire giant's finger. When a creature attunes to the ring, it magically shrinks to fit that creature's index finger, and warm orange light spills from minuscule cracks that form on its outer surface. The ring has 6 charges. While attuned to the ring, a creature can expend 1 charge to cast conjure minor elementals (summoning either four magma mephits or four magmins, as the wearer wishes) or fire shield (warm shield version only) from the ring. Once all of its charges are spent, the ring loses its spellcasting properties but retains its resizing property.",
	attunement : true,
	usages : 6,
	recovery : "never",
	spellcastingAbility : "class", // https://www.sageadvice.eu/2015/11/27/hat-of-disguise-dc/
	spellFirstColTitle : "Ch",
	spellcastingBonus : {
		name : "1 charge",
		spells : ["conjure minor elementals", "fire shield"],
		selection : ["conjure minor elementals", "fire shield"],
		firstCol : 1,
		times : 2
	},
	spellChanges : {
		"conjure minor elementals" : {
			description : "Summon 4 magma mephits or 4 magmins that obey my verbal commands",
			changes : "Using the Ring of Hardened Magma, the spell summons either four magma mephits or four magmins."
		},
		"fire shield" : {
			description : "Fiery shield gives resistance to Cold damage and deals 2d8 Fire damage to melee attackers",
			dynamicDamageBonus : false,
			changes : "Using the Ring of Hardened Magma, the spell can only produce the warm shield."
		}
	}
}
MagicItemsList["red dragon's thighbone"] = {
	name : "Red Dragon's Thighbone",
	source : ["SKT", 105], // Raven Rock ancient relic
	type : "weapon (greatclub)",
	rarity : "very rare",
	magicItemTable : "G",
	description : "This 14-ft long, 250 lb red dragon's thighbone can be used as a greatclub by a giant. It magically shrinks to a size that a creature that attunes to it can wield it effectively as a greatclub. It deals an extra 2d8 bludgeoning damage whenever it hits a creature of the dragon type.",
	descriptionFull : "This 14-ft long, 250 lb red dragon's thighbone can be used as a greatclub by a giant. If a creature attunes to the greatclub, it magically shrinks to a size that the creature can wield effectively. The greatclub is considered a magic weapon that deals an extra 2d8 bludgeoning damage whenever it hits a dragon (including any creature of the dragon type).",
	attunement : true,
	weight : 10,
	weaponsAdd : ["Red Dragon's Thighbone"],
	weaponOptions :{
		baseWeapon : "greabclub",
		regExpSearch : /^(?=.*red)(?=.*dragon)(?=.*thighbone).*$/i,
		name : "Red Dragon's Thighbone",
		source : ["SKT", 105],
		description : "Two-handed; +2d6 damage vs. dragons",
	}
}
MagicItemsList["ancient relic boulder"] = {
	name : "Ancient Relic Boulder",
	source : ["SKT", 105], // One Stone ancient relic
	type : "wondrous item",
	rarity : "unknown",
	storyItemAL : true,
	description : "As an action once per 7 days, I can use this stone to cast either Control Weather or Divination. As an action once per 24 hours, I can have it shrink to 6-inch diameter, 25 lb, or enlarge to normal, 15-ft diameter, 24000 lb. Anything the enlarged boulder falls on takes 10d10 bludgeoning damage, DC 15 Dex save to avoid.",
	descriptionFull : "This boulder is a relic of giantkind that was shaped, carved, and abandoned long ago by a stone giant earth shaman. Any character who succeeds on a DC 15 Intelligence (Arcana) check can tell that the engraved lines adorning its outer surface are carefully designed to channel magical energy. A detect magic spell reveals an aura of transmutation magic emanating from it and casting identify spell on the boulder allows one to learn its magical properties, each of which is activated by tracing specific lines on its surface:\n \u2022 A creature can use an action to cast the control weather spell or the divination spell from the stone. Once either spell is cast, this property can't be used again for 7 days.\n \u2022 A creature can use an action to shrink the stone to the size of a 6-inch-diameter orb weighing 25 pounds, or enlarge the boulder to its normal size (15-foot diameter) and weight (12 tons). Anything the enlarged boulder falls on takes 55 (10d10) bludgeoning damage. A creature can avoid taking this damage by tumbling out of the way with a successful DC 15 Dexterity saving throw. Once the reducing or enlarging effect is used, this property can't be used again for 24 hours.",
	weight : 25,
	action : [["action", " (shrink/enlarge)"]],
	extraLimitedFeatures : [{
		name : "Ancient Relic Boulder (spell)",
		usages : 1,
		recovery : "7 days"
	}, {
		name : "Ancient Relic Boulder (shrink/enlarge)",
		usages : 1,
		recovery : "24 h"
	}],
	spellcastingBonus : {
		name : "",
		spells : ["control weather", "divination"],
		selection : ["control weather", "divination"],
		times : 2
	},
	spellChanges : {
		"control weather" : {
			time : "1 a",
			changes : "Using the Ancient Relic Boulder, the spell takes only 1 action to cast."
		}
	}
}
