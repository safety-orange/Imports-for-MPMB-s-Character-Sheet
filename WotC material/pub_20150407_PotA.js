var iFileName = "pub_20150407_PotA.js";
RequiredSheetVersion("13.0.8");
// This file adds the magic items from the Princes of the Apocalypse adventure to MPMB's Character Record Sheet

// Define the source
SourceList["PotA"] = {
	name : "Princes of the Apocalypse [items]",
	abbreviation : "PotA",
	group : "Adventure Books",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/princes-apocalypse",
	date : "2015/04/07"
};

// Magic Items
MagicItemsList["balloon pack"] = {
	name : "Balloon Pack",
	source : ["PotA", 222],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "C",
	description : "As an action, I can deploy the balloon to gain the effects of Levitate for 10 minutes. As a reaction, I can deploy the balloon to gain the effects of Feather Fall. After either effect ends, I descend slowly for 60 ft as it deflates. Once used in either way, the backpack is useless until recharged in an air node for 1 hour.",
	descriptionFull : "This backpack contains the spirit of an air elemental and a compact leather balloon. While you're wearing the backpack, you can deploy the balloon as an action and gain the effect of the Levitate spell for 10 minutes, targeting yourself and requiring no concentration. Alternatively, you can use a reaction to deploy the balloon when you're falling and gain the effect of the Feather Fall spell for yourself.\n   When either spell ends, the balloon slowly deflates as the elemental spirit escapes and returns to the Elemental Plane of Air. As the balloon deflates, you descend gently toward the ground for up to 60 feet. If you are still in the air at the end of this distance, you fall if you have no other means of staying aloft.\n   After the spirit departs, the backpack's property is unusable unless the backpack is recharged for 1 hour in an elemental air node, which binds another spirit to the backpack.",
	weight : 5, // as backpack
	usages : 1,
	recovery : "Air Node",
	additional : "recharge: 1 h in air node",
	action : [["action", " (Levitate)"], ["reaction", " (Feather Fall)"]],
	spellFirstColTitle : "Ch",
	spellcastingBonus : {
		name : "1 charge",
		spells : ["feather fall", "levitate"],
		selection : ["feather fall", "levitate"],
		firstCol : 1,
		times : 2
	},
	spellChanges : {
		"feather fall" : {
			range : "Self",
			description : "I descent only 60 ft/rnd for duration or until landed, taking no falling damage",
			changes : "Using the Balloon Pack, I can only target myself."
		},
		"levitate" : {
			range : "Self",
			duration : "10 min",
			save : "",
			description : "I rise vertically, up to 20 ft; move up/down 20 ft instead of normal move",
			changes : "Using the Balloon Pack, I can only target myself, but the spell requires no concentration."
		}
	}
}
MagicItemsList["bottled breath"] = {
	name : "Bottled Breath",
	source : ["PotA", 222],
	type : "potion",
	rarity : "uncommon",
	magicItemTable : "C",
	description : "Once as an action, I can inhale this breath of elemental air or administer it to another. The target then either exhale it or hold it in. If exhaled immediately, it produces the effects of Gust of Wind. Holding it in removes the need to breathe for 1 hour, though this benefit can end early, by speaking for example.",
	descriptionFull : "This bottle contains a breath of elemental air. When you inhale it, you either exhale it or hold it.\n   If you exhale the breath, you gain the effect of the Gust of Wind spell. If you hold the breath, you don't need to breathe for 1 hour, though you can end this benefit early (for example, to speak). Ending it early doesn't give you the benefit of exhaling the breath.",
	weight : 0.5
}
MagicItemsList["claws of the umber hulk"] = {
	name : "Claws of the Umber Hulk",
	source : ["PotA", 222],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "F",
	description : "These brown iron gauntlets, shaped like umber hulk claws, cover my hands up to my elbows. While wearing both, I can tunnel 1 ft per round through solid rock and have a burrowing speed of 20 ft, but can't manipulate items or use somatic spell components. I can use them as melee weapons, dealing 1d8 slashing damage.",
	descriptionFull : "These heavy gauntlets of brown iron are forged in the shape of an umber hulk's claws, and they fit the wearer's hands and forearms all the way up to the elbow. While wearing both claws, you gain a burrowing speed of 20 feet, and you can tunnel through solid rock at a rate of 1 foot per round.\n   You can use a claw as a melee weapon while wearing it. You have proficiency with it, and it deals 1d8 slashing damage on a hit (your Strength modifier applies to the attack and damage rolls, as normal).\n   While wearing the claws, you can't manipulate objects or cast spells with somatic components.",
	weight : 1,
	attunement : true,
	speed : { burrow : { spd : "fixed20", enc : "fixed10" } },
	weaponsAdd : ["Claws of the Umber Hulk"],
	weaponOptions : {
		regExpSearch : /^(?=.*claws)(?=.*umber)(?=.*hulk).*$/i,
		name : "Claws of the Umber Hulk",
		source : ["PotA", 222],
		ability : 1,
		type : "Natural",
		damage : [1, 8, "slashing"],
		range : "Melee",
		description : "",
		abilitytodamage : true
	}
}
var PotA_tempDevastationOrbNoteTxt = [
	"A devastation orb is an elemental bomb that can be created at the site of an elemental node by performing a ritual with an elemental weapon. The type of orb created depends on the node used. For example, an air node creates a devastation orb of air. The ritual takes 1 hour to complete and requires 2,000 gp worth of special components, which are consumed.\n   A devastation orb measures 12 inches in diameter, weighs 10 pounds, and has a solid outer shell. The orb detonates 1d100 hours after its creation, releasing the elemental energy it contains. The orb gives no outward sign of how much time remains before it will detonate. Spells such as Identify and Divination can be used to ascertain when the orb will explode. An orb has AC 10, 15 hit points, and immunity to poison and psychic damage. Reducing it to 0 hit points causes it to explode instantly.\n   A special container can be crafted to contain a devastation orb and prevent it from detonating. The container must be inscribed with symbols of the orb's opposing element. For example, a case inscribed with earth symbols can be used to contain a devastation orb of air and keep it from detonating. While in the container, the orb thrums. If it is removed from the container after the time when it was supposed to detonate, it explodes 1d6 rounds later, unless it is returned to the container.\n   Regardless of the type of orb, its effect is contained within a sphere with a 1 mile radius. The orb is the sphere's point of origin. The orb is destroyed after one use.",
	desc([
		"This elemental bomb can be created at the site of an elemental node of tELEMENT by performing a ritual with an elemental weapon. The ritual takes 1 hour to complete and requires 2,000 gp worth of special components, which are consumed.",
		"A devastation orb measures 12 inches in diameter, weighs 10 pounds, and has a solid outer shell. The orb detonates 1d100 hours after its creation, releasing the elemental energy it contains. The orb gives no outward sign of how much time remains before it will detonate. Spells such as Identify and Divination can be used to ascertain when the orb will explode. An orb has AC 10, 15 hit points, and immunity to poison and psychic damage. Reducing it to 0 hit points causes it to explode instantly.",
		"A special container inscribed with symbols of oELEMENT can be crafted to contain a devastation orb of tELEMENT and prevent it from detonating. While in the container, the orb thrums. If it is removed from the container after the time when it was supposed to detonate, it explodes 1d6 rounds later, unless it is returned to the container."
	])
];
MagicItemsList["devastation orb"] = {
	name : "Devastation Orb",
	source : ["PotA", 222],
	type : "wondrous item",
	rarity : "very rare",
	magicItemTable : "G",
	description : "This 12 inch diameter orb has AC 10, 15 HP, and is immune to poison and psychic damage. it explodes 1d100 hours after its creation or when reduced to 0 HP. When detonated, it creates an effect in a 1-mile radius around it.",
	descriptionFull : PotA_tempDevastationOrbNoteTxt[0],
	weight : 10,
	allowDuplicates : true,
	choices : ["Air", "Earth", "Fire", "Water"],
	"air" : {
		name : "Devastation Orb of Air",
		description : "This 12 inch diameter orb has AC 10, 15 HP, and is immune to poison and psychic damage. it explodes 1d100 hours after its creation or when reduced to 0 HP. When detonated, it creates a powerful windstorm in 1 mile around it for 1 hour. Everything exposed to the wind is damage by it. See Notes page.",
		descriptionFull : PotA_tempDevastationOrbNoteTxt[0] + "\n   " + toUni("Air Orb") + ". When this orb detonates, it creates a powerful windstorm that lasts for 1 hour. Whenever a creature ends its turn exposed to the wind, the creature must succeed on a DC 18 Constitution saving throw or take 1d4 bludgeoning damage, as the wind and debris batter it. The wind is strong enough to uproot weak trees and destroy light structures after at least 10 minutes of exposure. Otherwise, the rules for strong wind apply, as detailed in chapter 5 of the Dungeon Master's Guide.",
		toNotesPage : [{
			name : "Features",
			note : PotA_tempDevastationOrbNoteTxt[1].replace(/tELEMENT/g, "air").replace(/oElement/g, "earth") + "\n  When this orb detonates, it creates a powerful windstorm within a sphere with a 1 mile radius that lasts for 1 hour. Whenever a creature ends its turn exposed to the wind, the creature must succeed on a DC 18 Constitution saving throw or take 1d4 bludgeoning damage, as the wind and debris batter it. The wind is strong enough to uproot weak trees and destroy light structures after at least 10 minutes of exposure. Otherwise, the rules for strong wind apply. A strong wind imposes disadvantage on ranged weapon attack rolls and Wisdom (Perception) checks that rely on hearing. A strong wind also extinguishes open flames, disperses fog, and makes flying by nonmagical means nearly impossible. A flying creature in a strong wind must land at the end of its turn or fall. A strong wind in a desert can create a sandstorm that imposes disadvantage on Wisdom (Perception) checks that rely on sight."
		}]
	},
	"earth" : {
		name : "Devastation Orb of Earth",
		description : "This 12 inch diameter orb has AC 10, 15 HP, and is immune to poison and psychic damage. it explodes 1d100 hours after its creation or when reduced to 0 HP. When detonated, it creates the effect of an Earthquake spell in 1 mile around it for 1 minute. See Notes page.",
		descriptionFull : PotA_tempDevastationOrbNoteTxt[0] + "\n   " + toUni("Earth Orb") + ". When this orb detonates, it subjects the area to the effects of the Earthquake spell for 1 minute (spell save DC 18). For the purpose of the spell's effects, the spell is cast on the turn that the orb explodes.",
		toNotesPage : [{
			name : "Features",
			note : PotA_tempDevastationOrbNoteTxt[1].replace(/tELEMENT/g, "earth").replace(/oElement/g, "air") + desc([
				"When this orb detonates, it subjects the area to the effects of the Earthquake spell for 1 minute (spell save DC 18). For the purpose of the spell's effects, the spell is cast on the turn that the orb explodes.",
				"The Earthquake spell creates a seismic disturbance that shakes creatures and structures in contact with the ground in that area. The ground in the area becomes difficult terrain. Each creature on the ground that is concentrating must make a Constitution saving throw. On a failed save, the creature's concentration is broken.",
				"At the end of each turn this goes on, each creature on the ground in the area must make a Dexterity saving throw. On a failed save, the creature is knocked prone.",
				"This spell can have additional effects depending on the terrain in the area, as determined by the DM.",
				"\u2022 Fissures. Fissures open throughout the spell's area at the start of the turn after the orb detonates. A total of 1d6 such fissures open in locations chosen by the DM. Each is 1d10 \xD7 10 ft deep, 10 ft wide, and extends from one edge of the area to the opposite side. A creature standing on a spot where a fissure opens must succeed on a Dexterity saving throw or fall in. A creature that successfully saves moves with the fissure's edge as it opens. A fissure that opens beneath a structure causes it to automatically collapse (see below).",
				"\u2022 Structures. The tremor deals 50 bludgeoning damage to any structure in contact with the ground in the area when the orb detonates and at the start of each of turns for the duration. If a structure drops to 0 hit points, it collapses and potentially damages nearby creatures. A creature within half the distance of a structure's height must make a Dexterity saving throw. On a failed save, the creature takes 5d6 bludgeoning damage, is knocked prone, and is buried in the rubble, requiring a DC 20 Strength (Athletics) check as an action to escape. The DM can adjust the DC higher or lower, depending on the nature of the rubble. On a successful save, the creature takes half as much damage and doesn't fall prone or become buried."
			])
		}]
	},
	"fire" : {
		name : "Devastation Orb of Fire",
		description : "This 12 inch diameter orb has AC 10, 15 HP, and is immune to poison and psychic damage. it explodes 1d100 hours after its creation or when reduced to 0 HP. When detonated, it creates a dry heat wave in 1 mile around it for 24 hours. There is extreme heat within the area and wildfires can appear within, see Notes.",
		descriptionFull : PotA_tempDevastationOrbNoteTxt[0] + "\n   " + toUni("Fire Orb") + ". When this orb detonates, it creates a dry heat wave that lasts for 24 hours. Within the area of effect, the rules for extreme heat apply, as detailed in chapter 5 of the Dungeon Master's Guide. At the end of each hour, there is a ten percent chance that the heat wave starts a wildfire in a random location within the area of effect. The wildfire covers a 10-foot-square area initially but expands to fill another 10-foot square each round until the fire is extinguished or burns itself out. A creature that comes within 10 feet of a wildfire for the first time on a turn or starts its turn there takes 3d6 fire damage.",
		toNotesPage : [{
			name : "Features",
			note : PotA_tempDevastationOrbNoteTxt[1].replace(/tELEMENT/g, "fire").replace(/oElement/g, "water") + "\n  When this orb detonates, it creates a dry heat wave within a 1-mile radius sphere that lasts for 24 hours. At the end of each hour, there is a ten percent chance that the heat wave starts a wildfire in a random location within the area of effect. The wildfire covers a 10-foot-square area initially but expands to fill another 10-foot square each round until the fire is extinguished or burns itself out. A creature that comes within 10 feet of a wildfire for the first time on a turn or starts its turn there takes 3d6 fire damage.\n   Within the area of effect, the rules for extreme heat apply, as the temperature is above 100 \u00B0F. Any creature exposed to the heat and without access to drinkable water must succeed on a Constitution saving throw at the end of each hour or gain one level of exhaustion. The DC is 5 for the first hour and increases by 1 for each additional hour. Creatures wearing medium or heavy armor, or who are clad in heavy clothing, have disadvantage on the saving throw. Creatures with resistance or immunity to fire damage automatically succeed on the saving throw, as do creatures naturally adapted to hot climates."
		}]
	},
	"water" : {
		name : "Devastation Orb of Water",
		description : "This 12 inch diameter orb has AC 10, 15 HP, and is immune to poison and psychic damage. it explodes 1d100 hours after its creation or when reduced to 0 HP. When detonated, it creates torrential rainstorm in 1 mile around it for 24 hours. If bodies of water exist in the area, they rise 10 ft and flood. See Notes page.",
		descriptionFull : PotA_tempDevastationOrbNoteTxt[0] + "\n   " + toUni("Water Orb") + ". When this orb detonates, it creates a torrential rainstorm that lasts for 24 hours. Within the area of effect, the rules for heavy precipitation apply, as detailed in chapter 5 of the Dungeon Master's Guide. If there is a substantial body of water in the area, it floods after 2d10 hours of heavy rain, rising 10 feet above its banks and inundating the surrounding area. The flood advances at a rate of 100 feet per round, moving away from the body of water where it began until it reaches the edge of the area of effect: at that point, the water flows downhill (and possibly recedes back to its origin). Light structures collapse and wash away. Any Large or smaller creature caught in the flood's path is swept away. The flooding destroys crops and might trigger mudslides, depending on the terrain.",
		toNotesPage : [{
			name : "Features",
			note : PotA_tempDevastationOrbNoteTxt[1].replace(/tELEMENT/g, "water").replace(/oElement/g, "fire") + "\n  When this orb detonates, it creates a torrential rainstorm in a 1-mile radius sphere that lasts for 24 hours. If there is a substantial body of water in the area, it floods after 2d10 hours of heavy rain, rising 10 feet above its banks and inundating the surrounding area. The flood advances at a rate of 100 feet per round, moving away from the body of water where it began until it reaches the edge of the area of effect: at that point, the water flows downhill (and possibly recedes back to its origin). Light structures collapse and wash away. Any Large or smaller creature caught in the flood's path is swept away. The flooding destroys crops and might trigger mudslides, depending on the terrain.\n   Within the area of effect, the rules for heavy precipitation apply. Everything is lightly obscured, and creatures in the area have disadvantage on Wisdom (Perception) checks that rely on sight. Heavy rain also extinguishes open flames and imposes disadvantage on Wisdom (Perception) checks that rely on hearing."
		}]
	}
}
MagicItemsList["drown"] = {
	name : "Drown",
	source : ["PotA", 224],
	type : "weapon (trident)",
	rarity : "legendary",
	storyItemAL : true,
	description : "This trident has a +1 bonus on to hit and damage and deals +1d8 cold damage. It allows me to speak Aquan, grants me resistance to cold damage, and allows me to cast Dominate Monster on a water elemental once per dawn. It gives me a flaw, see Notes page.",
	descriptionFull : "A steel trident decorated with bronze barnacles along the upper part of its haft, Drown has a sea-green jewel just below the tines and a silver shell at the end of its haft. It floats on the surface if dropped onto water, and it floats in place if it is released underwater. The trident is always cool to the touch, and it is immune to any damage due to exposure to water. Drown contains a spark of Olhydra, the Princess of Evil Water.\n   You gain a +1 bonus to attack and damage rolls made with this magic weapon. When you hit with it, the targets take an extra 1d8 cold damage.\n   " + toUni("Water Mastery") + ". You gain the following benefits while you hold Drown:\n \u2022 You can speak Aquan fluently.\n \u2022 You have resistance to cold damage.\n \u2022 You can cast Dominate Monster (save DC 17) on a water elemental. Once you have done so, Drown can't be used this way again until the next dawn.\n\n" + toUni("Tears of Endless Anguish") + ". While inside a water node, you can perform a ritual called the Tears of Endless Anguish, using Drown to create a devastation orb of water. Once you perform the ritual, Drown can't be used to perform the ritual again until the next dawn.\n   " + toUni("Flaw") + ". Drown makes its wielder covetous. While attuned to the weapon, you gain the following flaw: \"I demand and deserve the largest share of the spoils, and I refuse to part with anything that's mine.\" In addition, if you are attuned to Drown for 24 consecutive hours, barnacles form on your skin. The barnacles can be removed with a Greater Restoration spell or similar magic, but not while you are attuned to the weapon.",
	attunement : true,
	weight : 4,
	languageProfs : ["Aquan"],
	dmgres : ["Cold"],
	usages : 1,
	recovery : "dawn",
	fixedDC : 17,
	spellcastingBonus : {
		name : "Once per dawn",
		spells : ["dominate monster"],
		selection : ["dominate monster"],
		firstCol : "oncelr"
	},
	spellChanges : {
		"dominate monster" : {
			description : "Water elemental save or charmed, follows telepathic commands, 1 a for complete control; save on dmg",
			changes : "Can only affect a water elemental."
		}
	},
	weaponsAdd : ["Drown"],
	weaponOptions : {
		baseWeapon : "trident",
		regExpSearch : /drown/i,
		name : "Drown",
		source : ["PotA", 224],
		description : "Thrown, versatile (1d8); +1d8 cold damage",
		modifiers : [1,1]
	},
	toNotesPage : [{
		name : "Features",
		note : [
			"A steel trident decorated with bronze barnacles along the upper part of its haft, Drown has a sea-green jewel just below the tines and a silver shell at the end of its haft. It floats on the surface if dropped onto water, and it floats in place if it is released underwater. The trident is always cool to the touch, and it is immune to any damage due to exposure to water. Drown contains a spark of Olhydra, the Princess of Evil Water.",
			"I gain a +1 bonus to attack and damage rolls made with this magic weapon. When I hit with it, the targets take an extra 1d8 cold damage.",
			"While holding Drown, I can speak Aquan fluently, have resistance to cold damage, I can cast Dominate Monster (save DC 17) on a water elemental once per dawn.",
			"While inside a water node, I can perform a ritual called the Tears of Endless Anguish, using Drown to create a Devastation Orb of Water. The ritual takes 1 hour to complete and requires 2,000 gp worth of special components, which are consumed. Once I perform the ritual, Drown can't be used to perform the ritual again until the next dawn.",
			"Drown makes me covetous. While attuned to the weapon, I gain the following flaw: \"I demand and deserve the largest share of the spoils, and I refuse to part with anything that's mine.\" In addition, if I am attuned to Drown for 24 consecutive hours, barnacles form on my skin. The barnacles can be removed with a Greater Restoration spell or similar magic, but not while I am attuned to the weapon."
		]
	}]
}
MagicItemsList["ironfang"] = {
	name : "Ironfang",
	source : ["PotA", 224],
	type : "weapon (war pick)",
	rarity : "legendary",
	storyItemAL : true,
	description : "This war pick has a +2 bonus on to hit and damage and deals +1d8 thunder damage. It allows me to speak Terran, grants me resistance to cold damage, tremorsense 60 ft, allows me to cast Dominate Monster on an earth elemental once per dawn, and to cast Shatter using 1 of its 3 charges and more, see Notes page.",
	descriptionFull : "A war pick forged from a single piece of iron, Ironfang has a fang-like head inscribed with ancient runes. The pick is heavy in the hand, but when the wielder swings the pick in anger, the weapon seems almost weightless. This weapon is immune to any form of rust, acid, or corrosion\u2014nothing seems to mark it. Ironfang contains a spark of Ogr\xE9moch, the Prince of Evil Earth.\n   You gain a +2 bonus to attack and damage rolls made with this magic weapon. When you hit with it, the target takes an extra 1d8 thunder damage.\n   " + toUni("Earth Mastery") + ". You gain the following benefits while you hold Ironfang:\n \u2022 You can speak Terran fluently.\n \u2022 You have resistance to acid damage.\n \u2022 You have tremorsense out to a range of 60 feet.\n \u2022 You can sense the presence of precious metals and stones within 60 feet of you, but not their exact location.\n \u2022 You can cast Dominate Monster (save DC 17) on an earth elemental. Once you have done so, Ironfang can't be used this way again until the next dawn.\n\n" + toUni("Shatter") + ". Ironfang has 3 charges. You can use your action to expend 1 charge and cast the 2nd-level version of Shatter (DC 17). Ironfang regains 1d3 expended charges daily at dawn.\n   " + toUni("The Rumbling") + ". While inside an earth node, you can perform a ritual called the Rumbling, using Ironfang to create a devastation orb of earth. Once you perform the ritual, Ironfang can't be used to perform the ritual again until the next dawn.\n   " + toUni("Flaw") + ". Ironfang heightens its wielder's destructive nature. While attuned to the weapon, you gain the following flaw: \"I like to break things and cause ruin.\"",
	attunement : true,
	weight : 2,
	languageProfs : ["Terran"],
	dmgres : ["Acid"],
	usages : 1,
	recovery : "dawn",
	fixedDC : 17,
	limfeaname : "Ironfang [Rumbling ritual]",
	spellFirstColTitle : "Ch",
	extraLimitedFeatures : [{
		name : "Ironfang [Dominate Monster]",
		usages : 1,
		recovery : "dawn"
	}, {
		name : "Ironfang [Shatter] (regains 1d3)",
		usages : 3,
		recovery : "dawn",
	}],
	spellcastingBonus : [{
		name : "Once per dawn",
		spells : ["dominate monster"],
		selection : ["dominate monster"],
		firstCol : "oncelr"
	}, {
		name : "1 charge",
		spells : ["shatter"],
		selection : ["shatter"],
		firstCol : 1
	}],
	spellChanges : {
		"dominate monster" : {
			description : "Earth elemental save or charmed, follows telepathic commands, 1 a for complete control; save on dmg",
			changes : "Can only affect an earth elemental."
		},
		"shatter" : {
			description : "10-ft rad all 4d8 Thunder dmg; save halves; nonmagical unattended objects also take dmg",
			changes : "Cast as if using a 2nd-level spell slot."
		}
	},
	vision : [["Tremorsense", "fixed 60"]],
	weaponsAdd : ["Ironfang"],
	weaponOptions : {
		baseWeapon : "war pick",
		regExpSearch : /ironfang/i,
		name : "Ironfang",
		source : ["PotA", 224],
		description : "+1d8 thunder damage",
		modifiers : [2,2]
	},
	toNotesPage : [{
		name : "Features",
		note : [
			"A war pick forged from a single piece of iron, Ironfang has a fang-like head inscribed with ancient runes. The pick is heavy in the hand, but when the wielder swings the pick in anger, the weapon seems almost weightless. This weapon is immune to any form of rust, acid, or corrosion\u2014nothing seems to mark it. Ironfang contains a spark of Ogr\xE9moch, the Prince of Evil Earth.",
			"I gain a +2 bonus to attack and damage rolls made with this magic weapon. When I hit with it, the target takes an extra 1d8 thunder damage.",
			"While holding Ironfang, I can speak Terran fluently, have resistance to acid damage, have tremorsense out to a range of 60 ft, can sense the presence of precious metals and stones within 60 ft of me, but not their exact location, and can cast Dominate Monster (save DC 17) on an earth elemental once per dawn.",
			"Ironfang has 3 charges and regains 1d3 expended charges daily at dawn. I can use your action to expend 1 charge and cast the 2nd-level version of Shatter (DC 17).",
			"While inside an earth node, I can perform a ritual called the Rumbling, using Ironfang to create a Devastation Orb of Earth. The ritual takes 1 hour to complete and requires 2,000 gp worth of special components, which are consumed. Once I perform the ritual, Ironfang can't be used to perform the ritual again until the next dawn.",
			'Ironfang heightens my destructive nature. While attuned to the weapon, I gain the following flaw: "I like to break things and cause ruin."'
		]
	}]
}
MagicItemsList["lost crown of besilmer"] = {
	name : "Lost Crown of Besilmer",
	source : ["PotA", 223],
	type : "wondrous item",
	rarity : "legendary",
	storyItemAL : true,
	description : "This dwarven battle-helm gives me psychic resistance and adv. on saves against being charmed. It has 3 charges, regaining 1d3 at dawn. As a bonus action, I can use 1 charge to inspire an ally in 60 ft that I can see and that can see and hear me. Once before my next turn ends, it can add a d6 to one check, attack, or save.",
	descriptionFull : "This dwarven battle-helm consists of a sturdy open-faced steel helmet, decorated with a golden circlet above the brow from which seven small gold spikes project upward. You gain the following benefits while wearing the crown:\n \u2022 You have resistance to psychic damage.\n \u2022 You have advantage on saving throws against effects that would charm you.\n \u2022 You can use a bonus action to inspire one creature you can see that is within 60 feet of you and that can see or hear you. Once before the end of your next turn, the inspired creature can roll a d6 and add the number rolled to one ability check, attack roll, or saving throw it makes. This uses 1 charge from the crown. It has 3 charges, and it regains 1d3 expended charges daily at dawn.",
	attunement : true,
	usages : 3,
	recovery : "dawn",
	additional : "regains 1d3",
	action : [["bonus action", " (inspire)"]],
	dmgres : ["Psychic"],
	savetxt : { adv_vs : ["charmed"] }
}
MagicItemsList["orcsplitter"] = {
	name : "Orcsplitter",
	source : ["PotA", 224],
	type : "weapon (greataxe)",
	rarity : "legendary",
	magicItemTable : "G",
	prerequisite : "Requires attunement by a good-aligned dwarf, fighter, or paladin",
	description : "This sentient greataxe has a +2 bonus on to hit and damage. If I roll a 20 on an attack vs. an orc with it, the orc must make a DC 17 Con save or be reduced to 0 HP. While I'm not incapacitated, I can't be surprised by orcs, and me and my allies in 30 ft can't be frightened. I can sense orcs within 120 ft. See Notes page.",
	descriptionFull : "A mighty axe wielded long ago by the dwarf king Torhild Flametongue, Orcsplitter is a battered weapon that appears unremarkable at first glance. Its head is graven with the Dwarvish runes for \"orc,\" but the runes are depicted with a gap or slash through the markings; the word \"orc\" is literally split in two.\n   You gain the following benefits while holding this magic weapon:\n \u2022 You gain a +2 bonus to attack and damage rolls made with it.\n \u2022 When you roll a 20 on an attack roll with this weapon against an orc, that orc must succeed on a DC 17 Constitution saving throw or drop to 0 hit points.\n \u2022 You can't be surprised by orcs while you're not incapacitated. You are also aware when orcs are within 120 feet of you and aren't behind total cover, although you don't know their location.\n \u2022 You and any of your friends within 30 feet of you can't be frightened while you're not incapacitated.\n\n" + toUni("Sentience") + ". Orcsplitter is a sentient, lawful good weapon with an Intelligence of 6, a Wisdom of 15, and a Charisma of 10. It can see and hear out to 120 feet and has darkvision. It communicates by transmitting emotions to its wielder, although on rare occasions it uses a limited form of telepathy to bring to the wielder's mind a couplet or stanza of ancient Dwarvish verse.\n   " + toUni("Personality") + ". Orcsplitter is grim, taciturn, and inflexible. It knows little more than the desire to face orcs in battle and serve a courageous, just wielder. It disdains cowards and any form of duplicity, deception, or disloyalty. The weapon's purpose is to defend dwarves and to serve as a symbol of dwarven resolve. It hates the traditional foes of dwarves\u2014giants, goblins, and, most of all, orcs\u2014and silently urges its possessor to meet such creatures in battle.",
	attunement : true,
	weight : 7,
	weaponsAdd : ["Orcsplitter"],
	weaponOptions : {
		baseWeapon : "greataxe",
		regExpSearch : /orcsplitter/i,
		name : "Orcsplitter",
		source : ["PotA", 224],
		description : "Heavy, two-handed; On 20 vs. Orc: it DC 17 Con save or 0 HP",
		modifiers : [2,2]
	},
	savetxt : { immune : ["frightened"] },
	toNotesPage : [{
		name : "Features",
		note : desc([
			'A mighty axe wielded long ago by the dwarf king Torhild Flametongue, Orcsplitter is a battered weapon that appears unremarkable at first glance. Its head is graven with the Dwarvish runes for "orc," but the runes are depicted with a gap or slash through the markings; the word "orc" is literally split in two.',
			"I gain a +2 bonus to attack and damage rolls made with it. When I roll a 20 on an attack roll with this weapon against an orc, that orc must succeed on a DC 17 Constitution saving throw or drop to 0 hit points.",
			"While I am not incapacitated, I can't be surprised by orcs and I am aware when orcs are within 120 ft of meand aren't behind total cover, although I don't know their location. Also, me and any of my friends within 30 ft of can't be frightened while I am not incapacitated.",
			"Orcsplitter is a sentient, lawful good weapon with an Intelligence of 6, a Wisdom of 15, and a Charisma of 10. It can see and hear out to 120 feet and has darkvision. It communicates by transmitting emotions to its wielder, although on rare occasions it uses a limited form of telepathy to bring to the wielder's mind a couplet or stanza of ancient Dwarvish verse.",
			"Orcsplitter is grim, taciturn, and inflexible. It knows little more than the desire to face orcs in battle and serve a courageous, just wielder. It disdains cowards and any form of duplicity, deception, or disloyalty. The weapon's purpose is to defend dwarves and to serve as a symbol of dwarven resolve. It hates the traditional foes of dwarves\u2014giants, goblins, and, most of all, orcs\u2014and silently urges its possessor to meet such creatures in battle."
		]) + "\n\n" + sentientItemConflictTxt
	}]
}
MagicItemsList["reszur"] = {
	name : "Reszur",
	source : ["PotA", 157],
	type : "weapon (dagger)",
	rarity : "uncommon",
	description : "I have a +1 bonus to attack and damage rolls made with this dagger. It doesn't make noise when it hits or cuts something. If I speaks the name \"Reszur\", which is engraved on its pommel, the blade gives off a faint, cold glow, shedding dim light in a 10-foot radius until I speak the name again.",
	descriptionFull : "You have a +1 bonus to attack and damage rolls made with this weapon, which doesn't make noise when it hits or cuts something.\n   The name \"Reszur\" is graven on the dagger's pommel. If the wielder speaks the name, the blade gives off a faint, cold glow, shedding dim light in a 10-foot radius until the wielder speaks the name again.",
	weight : 1,
	weaponsAdd : ["Dragontooth Dagger"],
	weaponOptions : {
		baseWeapon : "dagger",
		regExpSearch : /reszur/i,
		name : "Reszur",
		source : ["PotA", 157],
		description : "Finesse, light, thrown; Doesn't make any noise",
		modifiers : [1,1]
	}
}
MagicItemsList["seeker dart"] = {
	name : "Seeker Dart",
	source : ["PotA", 223],
	type : "weapon (dart)",
	rarity : "uncommon",
	magicItemTable : "F",
	description : "Once as an action, when I whisper \"seek\" and hurl this dart, it seeks out a target of my choice within 120 ft that I have seen at least once. If the target isn't within range or there is no clear path to it, the dart's magic is spent. Else, the target must make a DC 16 Dex save or take 1d4 piercing and 3d4 lightning damage.",
	descriptionFull : "This small dart is decorated with designs like windy spirals that span the length of its shaft.\n   When you whisper the word \"seek\" and hurl this dart, it seeks out a target of your choice within 120 feet of you. You must have seen the target before, but you don't need to see it now. If the target isn't within range or if there is no clear path to it, the dart falls to the ground, its magic spent and wasted. Otherwise, elemental winds guide the dart instantly through the air to the target. The dart can pass though openings as narrow as 1 inch wide and can change direction to fly around corners.\n   When the dart reaches its target, the target must succeed on a DC 16 Dexterity saving throw or take 1d4 piercing damage and 3d4 lightning damage. The dart's magic is then spent, and it becomes an ordinary dart.",
	weight : 0.25
}
MagicItemsList["storm boomerang"] = {
	name : "Storm Boomerang",
	source : ["PotA", 223],
	type : "weapon (javelin)",
	rarity : "uncommon",
	magicItemTable : "F",
	description : "This ranged weapon has 60/120 ft range, deals 1d4 bludgeoning and 3d4 thunder damage, and its target must make a DC 10 Con save or be stunned until its next turn ends. On a miss, it returns to the thrower's hand. Once it deals thunder damage, it can't do so or stun again until recharged in an air node for 1 hour.",
	descriptionFull : "This boomerang is a ranged weapon carved from griffon bone and etched with the symbol of elemental air. When thrown, it has a range of 60/120 feet, and any creature that is proficient with the javelin is also proficient with this weapon. On a hit, the boomerang deals 1d4 bludgeoning damage and 3d4 thunder damage, and the target must succeed on a DC 10 Constitution saving throw or be stunned until the end of its next turn. On a miss, the boomerang returns to the thrower's hand.\n   Once the boomerang deals thunder damage to a target, the weapon loses its ability to deal thunder damage and its ability to stun a target. These properties return after the boomerang spends at least 1 hour inside an elemental air node.",
	weaponsAdd : ["Storm Boomerang"],
	weaponOptions : {
		baseWeapon : "javelin",
		name : "Storm Boomerang",
		regExpSearch : /^(?=.*storm)(?=.*boomerang).*$/i,
		list : "melee",
		ability : 2,
		damage : [1, 4, "bludgeoning"],
		range : "60/120 ft",
		weight : 2,
		description : "Returns on a miss; Once: +3d4 thunder damage, target DC 10 Con save or stunned 1 turn"
	},
	usages : 1,
	recovery : "Air Node",
	additional : "recharge: 1 h in air node"
}
MagicItemsList["tinderstrike"] = {
	name : "Tinderstrike",
	source : ["PotA", 225],
	type : "weapon (dagger)",
	rarity : "legendary",
	storyItemAL : true,
	description : "This flint dagger has a +2 bonus on to hit and damage and deals +2d6 fire damage. It allows me to speak Ignan, grants me resistance to fire damage, and allows me to cast Dominate Monster on a fire elemental once per dawn. It gives me a flaw, see Notes page.",
	descriptionFull : "A flint dagger, Tinderstrike is uncommonly sharp, and sparks cascade off its edge whenever it strikes something solid. Its handle is always warm to the touch, and the blade smolders for 1d4 minutes after it is used to deal damage. It contains a spark of Imix, Prince of Evil Fire.\n   You gain a +2 bonus to attack and damage rolls made with this magic weapon. When you hit with it, the target takes an extra 2d6 fire damage.\n   " + toUni("Fire Mastery") + ". You gain the following benefits while you hold Tinderstrike:\n \u2022 You can speak Ignan fluently.\n \u2022 You have resistance to fire damage.\n \u2022 You can cast Dominate Monster (save DC 17) on a fire elemental. Once you have done so, Tinderstrike can't be used this way again until the next dawn.\n\n" + toUni("Dance of the All-Consuming Fire") + ". While inside a fire node, you can perform a ritual called the Dance of the All-Consuming Fire, using Tinderstrike to create a devastation orb of fire. Once you perform the ritual, Tinderstrike can't be used to perform the ritual again until the next dawn.\n   " + toUni("Flaw") + '. Tinderstrike makes its wielder impatient and rash. While attuned to the weapon, you gain the following flaw: "I act without thinking and take risks without weighing the consequences."',
	attunement : true,
	weight : 1,
	languageProfs : ["Ignan"],
	dmgres : ["Fire"],
	usages : 1,
	recovery : "dawn",
	fixedDC : 17,
	spellcastingBonus : {
		name : "Once per dawn",
		spells : ["dominate monster"],
		selection : ["dominate monster"],
		firstCol : "oncelr"
	},
	spellChanges : {
		"dominate monster" : {
			description : "Fire elemental save or charmed, follows telepathic commands, 1 a for complete control; save on dmg",
			changes : "Can only affect a fire elemental."
		}
	},
	weaponsAdd : ["Tinderstrike"],
	weaponOptions : {
		baseWeapon : "dagger",
		regExpSearch : /tinderstrike/i,
		name : "Tinderstrike",
		source : ["PotA", 225],
		description : "Finesse, light, thrown; +2d6 fire damage",
		modifiers : [2,2]
	},
	toNotesPage : [{
		name : "Features",
		note : [
			"A flint dagger, Tinderstrike is uncommonly sharp, and sparks cascade off its edge whenever it strikes something solid. Its handle is always warm to the touch, and the blade smolders for 1d4 minutes after it is used to deal damage. It contains a spark of Imix, Prince of Evil Fire.",
			"I gain a +2 bonus to attack and damage rolls made with this magic weapon. When I hit with it, the target takes an extra 2d6 fire damage.",
			"While holding Tinderstrike, I can speak Ignan fluently, have resistance to fire damage, and can cast Dominate Monster (save DC 17) on a fire elemental once per dawn.",
			"While inside a fire node, I can perform a ritual called the Dance of the All-Consuming Fire, using Tinderstrike to create a Devastation Orb of Fire. The ritual takes 1 hour to complete and requires 2,000 gp worth of special components, which are consumed. Once I perform the ritual, Tinderstrike can't be used to perform the ritual again until the next dawn.",
			'Tinderstrike makes me impatient and rash. While attuned to the weapon, I gain the following flaw: "I act without thinking and take risks without weighing the consequences."'
		]
	}]
}
MagicItemsList["weird tank"] = {
	name : "Weird Tank",
	source : ["PotA", 223],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "G",
	description : "As an action, I can open (or close) this tank of water, allowing the water weird within it to act or not. The weird is bound to the tank, follows my telepathic commands, and acts after me in combat. If the weird is killed, a new one can be formed by placing the tank in a water node for 24 hours.",
	descriptionLong : "As an action, I can open (or close) this tank of water, allowing the water weird within it to act or not. The weird is bound to the tank, follows my telepathic commands, and acts after me in combat. If it is killed, a new one can be formed by placing the tank in a water node for 24 hours. I can close the tank as an action, but I can only close the tank after commanding the weird to retract into it or if it died. The tank has AC 15, 50 HP, vulnerability to bludgeoning damage, and immunity to poison and psychic damage. Reducing the tank to 0 hit points destroys it and the water weird contained within it.",
	descriptionFull : "A weird tank is a ten-gallon tank of blown glass and sculpted bronze with a backpack-like carrying harness fashioned from tough leather. A water weird is contained within the tank. While wearing the tank, you can use an action to open it, allowing the water weird to emerge. The water weird acts immediately after you in the initiative order, and it is bound to the tank.\n   You can command the water weird telepathically (no action required) while you wear the tank. You can close the tank as an action only if you have first commanded the water weird to retract into it or if the water weird is dead.\n   If the water weird is killed, the tank loses its magical containment property until it spends at least 24 hours inside an elemental water node. When the tank is recharged, a new water weird forms inside it.\n   The tank has AC 15, 50 hit points, vulnerability to bludgeoning damage, and immunity to poison and psychic damage. Reducing the tank to 0 hit points destroys it and the water weird contained within it.",
	weight : 120,
	attunement : true,
	action : [["action", ""]]
}
MagicItemsList["windvane"] = {
	name : "Windvane",
	source : ["PotA", 225],
	type : "weapon (spear)",
	rarity : "legendary",
	storyItemAL : true,
	description : "This spear with the finesse property has a +2 bonus on to hit and damage and deals +1d6 lightning damage. It allows me to speak Auran, grants me resistance to lightning damage, and allows me to cast Dominate Monster on an air elemental once per dawn. It gives me a flaw, see Notes page.",
	descriptionFull : "A silver spear, Windvane has dark sapphires on the filigreed surface of its polished head. Held by its shining haft, the weapon feels insubstantial, as if clutching a cool, gently flowing breeze. The spear contains a spark of Yan-C-Bin, the Prince of Evil Air.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon, which has the finesse weapon property. When you hit with it, the target takes an extra 1d6 lightning damage.\n   " + toUni("Air Mastery") + ". You gain the following benefits while you hold Windvane:\n \u2022 You can speak Auran fluently.\n \u2022 You have resistance to lightning damage.\n \u2022 You can cast Dominate Monster (save DC 17) on an air elemental. Once you have done so, Windvane can't be used this way again until the next dawn.\n\n" + toUni("Song of the Four Winds") + ". While inside an air node, you can perform a ritual called the Song of the Four Winds, using Windvane to create a devastation orb of air. Once you perform the ritual, Windvane can't be used to perform the ritual again until the next dawn.\n   " + toUni("Flaw") + '. Windvane makes its wielder mercurial and unreliable. While attuned to the weapon, you gain the following flaw: "I break my vows and plans. Duty and honor mean nothing to me."',
	attunement : true,
	weight : 3,
	languageProfs : ["Auran"],
	dmgres : ["Lightning"],
	usages : 1,
	recovery : "dawn",
	fixedDC : 17,
	spellcastingBonus : {
		name : "Once per dawn",
		spells : ["dominate monster"],
		selection : ["dominate monster"],
		firstCol : "oncelr"
	},
	spellChanges : {
		"dominate monster" : {
			description : "Air elemental save or charmed, follows telepathic commands, 1 a for complete control; save on dmg",
			changes : "Can only affect an air elemental."
		}
	},
	weaponsAdd : ["Windvane"],
	weaponOptions : {
		baseWeapon : "spear",
		regExpSearch : /windvane/i,
		name : "Windvane",
		source : ["PotA", 225],
		description : "Finesse, thrown, versatile (1d6); +1d6 lightning damage",
		modifiers : [2,2]
	},
	toNotesPage : [{
		name : "Features",
		note : [
			"A silver spear, Windvane has dark sapphires on the filigreed surface of its polished head. Held by its shining haft, the weapon feels insubstantial, as if clutching a cool, gently flowing breeze. The spear contains a spark of Yan-C-Bin, the Prince of Evil Air.",
			"I have a +2 bonus to attack and damage rolls made with this magic weapon, which has the finesse weapon property. When I hit with it, the target takes an extra 1d6 lightning damage.",
			"While holding Windvane, I can speak Auran fluently, have resistance to lightning damage, and can cast Dominate Monster (save DC 17) on an air elemental once per dawn.",
			"While inside an air node, I can perform a ritual called the Song of the Four Winds, using Windvane to create a Devastation Orb of Air. The ritual takes 1 hour to complete and requires 2,000 gp worth of special components, which are consumed. Once I perform the ritual, Windvane can't be used to perform the ritual again until the next dawn.",
			'Windvane makes me mercurial and unreliable. While attuned to the weapon, I gain the following flaw: "I break my vows and plans. Duty and honor mean nothing to me."'
		]
	}]
}
MagicItemsList["wingwear"] = {
	name : "Wingwear",
	source : ["PotA", 223],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "C",
	description : "This snug uniform with leathery flaps has 3 charges, regaining all when placed in an air not for 1 hour. As a bonus action, I can expend 1 charge to gain a flying speed of 30 ft until I land or have 0 altitude. At the end of each of my turns, my altitude drops by 5 ft and I must move at least 30 ft horizontally or I fall.",
	descriptionFull : "This snug uniform has symbols of air stitched into it and leathery flaps that stretch along the arms, waist, and legs to create wings for gliding. A suit of wingwear has 3 charges. While you wear the suit, you can use a bonus action and expend 1 charge to gain a flying speed of 30 feet until you land. At the end of each of your turns, your altitude drops by 5 feet. Your altitude drops instantly to 0 feet at the end of your turn if you didn't fly at least 30 feet horizontally on that turn. When your altitude drops to 0 feet, you land (or fall), and you must expend another charge to use the suit again.\n   The suit regains all of its expended charges after spending at least 1 hour in an elemental air node.",
	attunement : true,
	usages : 3,
	recovery : "Air Node",
	additional : "recharge: 1 h in air node",
	action : [["bonus action", ""]]
}