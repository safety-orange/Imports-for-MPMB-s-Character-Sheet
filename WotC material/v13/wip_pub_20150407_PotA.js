var iFileName = "pub_20150407_PotA.js";
RequiredSheetVersion(13);
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
	description : "",
	descriptionFull : "This backpack contains the spirit of an air elemental and a compact leather balloon. While you're wearing the backpack, you can deploy the balloon as an action and gain the effect of the Levitate spell for 10 minutes, targeting yourself and requiring no concentration. Alternatively, you can use a reaction to deploy the balloon when you're falling and gain the effect of the Feather Fall spell for yourself.\n   When either spell ends, the balloon slowly deflates as the elemental spirit escapes and returns to the Elemental Plane of Air. As the balloon deflates, you descend gently toward the ground for up to 60 feet. IF you are still in the air at the end of this distance, you fall if you have no other means of staying aloft.\n   After the spirit departs, the backpack's property is unusable unless the backpack is recharged for 1 hour in an elemental air node, which binds another spirit to the backpack."
}
MagicItemsList["bottled breath"] = {
	name : "Bottled Breath",
	source : ["PotA", 222],
	type : "potion",
	rarity : "uncommon",
	magicItemTable : "C",
	description : "",
	descriptionFull : "This bottle contains a breath of elemental air. When you inhale it, you either exhale it or hold it.\n   If you exhale the breath, you gain the effect of the Gust of Wind spell. If you hold the breath, you don't need to breathe for 1 hour, though you can end this benefit early (for example, to speak). Ending it early doesn't give you the benefit of exhaling the breath.",
	weight : 0.5
}
MagicItemsList["claws of the umber hulk"] = {
	name : "Claws of the Umber Hulk",
	source : ["PotA", 222],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "F",
	description : "",
	descriptionFull : "These heavy gauntlets of brown iron are forged in the shape an umber hulk's claws, and they fit the wearer's hands and forearms all the way up to the elbow. While wearing both claws, you gain a burrowing speed of 20 feet, and you can tunnel through solid rock at a rate of 1 foot per round.\n   You can use a claw as a melee weapon while wearing it. You have proficiency with it, and it deals 1d8 slashing damage on a hit (your Strength modifier applies to the attack and damage rolls, as normal)\n   While wearing the claws, you can't manipulate objects or cast spells with somatic components",
	attunement : true
}
MagicItemsList["devastation orb"] = {
	name : "Devastation Orb",
	source : ["PotA", 222],
	type : "wondrous item",
	rarity : "very rare",
	magicItemTable : "G",
	description : "",
	descriptionFull : "A devastation orb is an elemental bomb that can be created at the site of an elemental node by performing a ritual with an elemental weapon. The type of orb created depends on the node used. For example, an air node creates a devastation orb of air. The ritual takes 1 hour to complete and requires 2,000 gp worth of special components, which are consumed.\n   A devastation orb measures 12 inches in diameter, weighs 10 pounds, and has a solid outer shell. The orb detonates 1d100 hours after its creation, releasing the elemental energy it contains. The orb gives no outward sign of how much time remains before it will detonate. Spells such as Identify and Divination can be used to ascertain when the orb will explode. An orb has AC 10, 15 hit points, and immunity to poison and psychic damage. Reducing it to 0 hit points causes it to explode instantly.\n   A special container can be crafted to contain a devastation orb and prevent it from detonating. The container must be inscribed with symbols of the orb's opposing element. For example, a case inscribed with earth symbols can be used to contain a devastation orb of air and keep it from detonating. While in the container, the orb thrums. If it is removed from the container after the time when it was supposed to detonate, it explodes 1d6 rounds later, unless it is returned to the container.\n   Regardless of the type of orb, its effect is contained within a sphere with a 1 mile radius. The orb is the sphere's point of origin. The orb is destroyed after one use.",
	choices : ["Air", "Earth", "Fire", "Water"],
	"air" : {
		name : "Devastation Orb of Air",
		description : "",
		descriptionFull : "A devastation orb is an elemental bomb that can be created at the site of an elemental node by performing a ritual with an elemental weapon. The type of orb created depends on the node used. For example, an air node creates a devastation orb of air. The ritual takes 1 hour to complete and requires 2,000 gp worth of special components, which are consumed.\n   A devastation orb measures 12 inches in diameter, weighs 10 pounds, and has a solid outer shell. The orb detonates 1d100 hours after its creation, releasing the elemental energy it contains. The orb gives no outward sign of how much time remains before it will detonate. Spells such as Identify and Divination can be used to ascertain when the orb will explode. An orb has AC 10, 15 hit points, and immunity to poison and psychic damage. Reducing it to 0 hit points causes it to explode instantly.\n   A special container can be crafted to contain a devastation orb and prevent it from detonating. The container must be inscribed with symbols of the orb's opposing element. For example, a case inscribed with earth symbols can be used to contain a devastation orb of air and keep it from detonating. While in the container, the orb thrums. If it is removed from the container after the time when it was supposed to detonate, it explodes 1d6 rounds later, unless it is returned to the container.\n   Regardless of the type of orb, its effect is contained within a sphere with a 1 mile radius. The orb is the sphere's point of origin. The orb is destroyed after one use.\n   " + toUni("Air Orb") + ". When this orb detonates, it creates a powerful windstorm that lasts for 1 hour. Whenever a creature ends its turn exposed to the wind, the creature must succeed on a DC 18 Constitution saving throw or take 1d4 bludgeoning damage, as the wind and debris batter it. The wind is strong enough to uproot weak trees and destroy light structures after at least 10 minutes of exposure. Otherwise, the rules for strong wind apply, as detailed in chapter 5 of the Dungeon Master's Guide."
	},
	"earth" : {
		name : "Devastation Orb of Earth",
		description : "",
		descriptionFull : "A devastation orb is an elemental bomb that can be created at the site of an elemental node by performing a ritual with an elemental weapon. The type of orb created depends on the node used. For example, an air node creates a devastation orb of air. The ritual takes 1 hour to complete and requires 2,000 gp worth of special components, which are consumed.\n   A devastation orb measures 12 inches in diameter, weighs 10 pounds, and has a solid outer shell. The orb detonates 1d100 hours after its creation, releasing the elemental energy it contains. The orb gives no outward sign of how much time remains before it will detonate. Spells such as Identify and Divination can be used to ascertain when the orb will explode. An orb has AC 10, 15 hit points, and immunity to poison and psychic damage. Reducing it to 0 hit points causes it to explode instantly.\n   A special container can be crafted to contain a devastation orb and prevent it from detonating. The container must be inscribed with symbols of the orb's opposing element. For example, a case inscribed with earth symbols can be used to contain a devastation orb of air and keep it from detonating. While in the container, the orb thrums. If it is removed from the container after the time when it was supposed to detonate, it explodes 1d6 rounds later, unless it is returned to the container.\n   Regardless of the type of orb, its effect is contained within a sphere with a 1 mile radius. The orb is the sphere's point of origin. The orb is destroyed after one use.\n   " + toUni("Earth Orb") + ". When this orb detonates, it subjects the area to the effects of the Earthquake spell for 1 minute (spell save DC 18). For the purpose of the spell's effects, the spell is cast on the turn that the orb explodes."
	},
	"fire" : {
		name : "Devastation Orb of Fire",
		description : "",
		descriptionFull : "A devastation orb is an elemental bomb that can be created at the site of an elemental node by performing a ritual with an elemental weapon. The type of orb created depends on the node used. For example, an air node creates a devastation orb of air. The ritual takes 1 hour to complete and requires 2,000 gp worth of special components, which are consumed.\n   A devastation orb measures 12 inches in diameter, weighs 10 pounds, and has a solid outer shell. The orb detonates 1d100 hours after its creation, releasing the elemental energy it contains. The orb gives no outward sign of how much time remains before it will detonate. Spells such as Identify and Divination can be used to ascertain when the orb will explode. An orb has AC 10, 15 hit points, and immunity to poison and psychic damage. Reducing it to 0 hit points causes it to explode instantly.\n   A special container can be crafted to contain a devastation orb and prevent it from detonating. The container must be inscribed with symbols of the orb's opposing element. For example, a case inscribed with earth symbols can be used to contain a devastation orb of air and keep it from detonating. While in the container, the orb thrums. If it is removed from the container after the time when it was supposed to detonate, it explodes 1d6 rounds later, unless it is returned to the container.\n   Regardless of the type of orb, its effect is contained within a sphere with a 1 mile radius. The orb is the sphere's point of origin. The orb is destroyed after one use.\n   " + toUni("Fire Orb") + ". When this orb detonates, it creates a dry heat wave that lasts for 24 hours. Within the area of effect, the rules for extreme heat apply, as detailed in chapter 5 of the Dungeon Master's Guide. At the end of each hour, there is a ten percent chance that the heat wave starts a wildfire in a random location within the area of effect. The wildfire covers a 10-foot-square area initially but expands to fill another 10-foot square each round until the fire is extinguished or burns itself out. A creature that comes within 10 feet of a wildfire for the first time on a turn or starts its turn there takes 3d6 fire damage."
	},
	"water" : {
		name : "Devastation Orb of Water",
		description : "",
		descriptionFull : "A devastation orb is an elemental bomb that can be created at the site of an elemental node by performing a ritual with an elemental weapon. The type of orb created depends on the node used. For example, an air node creates a devastation orb of air. The ritual takes 1 hour to complete and requires 2,000 gp worth of special components, which are consumed.\n   A devastation orb measures 12 inches in diameter, weighs 10 pounds, and has a solid outer shell. The orb detonates 1d100 hours after its creation, releasing the elemental energy it contains. The orb gives no outward sign of how much time remains before it will detonate. Spells such as Identify and Divination can be used to ascertain when the orb will explode. An orb has AC 10, 15 hit points, and immunity to poison and psychic damage. Reducing it to 0 hit points causes it to explode instantly.\n   A special container can be crafted to contain a devastation orb and prevent it from detonating. The container must be inscribed with symbols of the orb's opposing element. For example, a case inscribed with earth symbols can be used to contain a devastation orb of air and keep it from detonating. While in the container, the orb thrums. If it is removed from the container after the time when it was supposed to detonate, it explodes 1d6 rounds later, unless it is returned to the container.\n   Regardless of the type of orb, its effect is contained within a sphere with a 1 mile radius. The orb is the sphere's point of origin. The orb is destroyed after one use.\n   " + toUni("Water Orb") + ". When this orb detonates, it creates a torrential rainstorm that lasts for 24 hours. Within the area of effect, the rules for heavy precipitation apply, as detailed in chapter 5 of the Dungeon Master's Guide. If there is a substantial body of water in the area, it floods after 2d10 hours of heavy rain, rising 10 feet above its banks and inundating the surrounding area. The flood advances at a rate of 100 feet per round, moving away from the body of water where it began until it reaches the edge of the area of effect: at that point, the water flows downhill (and possibly recedes back to its origin). Light structures collapse and wash away. Any Large or smaller creature caught in the flood's path is swept away. The flooding destroys crops and might trigger mudslides, depending on the terrain."
	}
}
MagicItemsList["drown"] = {
	name : "Drown",
	source : ["PotA", 224],
	type : "weapon (trident)",
	rarity : "legendary",
	storyItemAL : true,
	description : "",
	descriptionFull : "A steel trident decorated with bronze barnacles along the upper part of its haft, Drown has a sea-green jewel just below the tines and a silver shell at the end of its haft. It floats on the surface if dropped onto water, and it floats in place if it is released underwater. The trident is always cool to the touch, and it is immune to any damage due to exposure to water. Drown contains a spark of Olhydra, the Princess of Evil Water.\n   You gain a +1 bonus to attack and damage rolls made with this magic weapon. When you hit with it, the targets take an extra 1d8 cold damage.\n   " + toUni("Water Mastery") + ". You gain the following benefits while you hold Drown:\n \u2022 You can speak Aquan fluently.\n \u2022 You have resistance to cold damage.\n \u2022 You can cast Dominate Monster (save DC 17) on a water elemental. Once you have done so, Drown can't be used this way again until the next dawn.\n\n" + toUni("Tears of Endless Anguish") + ". While inside a water node, you can perform a ritual called the Tears of Endless Anguish, using Drown to create a devastation orb of water. Once you perform the ritual, Drown can't be used to perform the ritual again until the next dawn.\n   " + toUni("Flaw") + ". Drown makes its wielder covetous. While attuned to the weapon, you gain the following flaw: \"I demand and deserve the largest share of the spoils, and I refuse to part with anything that's mine.\" In addition, if you are attuned to Drown for 24 consecutive hours, barnacles form on your skin. The barnacles can be removed with a Greater Restoration spell or similar magic, but not while you are attuned to the weapon.",
	attunement : true,
	weight : 4
}
MagicItemsList["ironfang"] = {
	name : "Ironfang",
	source : ["PotA", 224],
	type : "weapon (war pick)",
	rarity : "legendary",
	storyItemAL : true,
	description : "",
	descriptionFull : "A war pick forged from a single piece of iron, Ironfang has a fang-like head inscribed with ancient runes. The pick is heavy in the hand, but when the wielder swings the pick in anger, the weapon seems almost weightless. This weapon is immune to any form of rust, acid, or corrosion\u2014nothing seems to mark it. Ironfang contains a spark of Ogr\xE9moch, the Prince of Evil Earth.\n   You gain a +2 bonus to attack and damage rolls made with this magic weapon. When you hit with it, the target takes an extra 1d8 thunder damage.\n   " + toUni("Earth Mastery") + ". You gain the following benefits while you hold Ironfang:\n \u2022 You can speak Terran fluently.\n \u2022 You have resistance to acid damage.\n \u2022 You have tremorsense out to a range of 60 feet.\n \u2022 You can sense the presence of precious metals and stones within 60 feet of you, but not their exact location.\n \u2022 You can cast Dominate Monster (save DC 17) on an earth elemental. Once you have done so, Ironfang can't be used this way again until the next dawn.\n\n" + toUni("Shatter") + ". Ironfang has 3 charges. You can use your action to expend 1 charge and cast the 2nd-level version of Shatter (DC 17). Ironfang regains 1d3 expended charges daily at dawn.\n   " + toUni("The Rumbling") + ". While inside an earth node, you can perform a ritual called the Rumbling, using Ironfang to create a devastation orb of earth. Once you perform the ritual, Ironfang can't be used to perform the ritual again until the next dawn.\n   " + toUni("Flaw") + ". Ironfang heightens its wielder's destructive nature. While attuned to the weapon, you gain the following flaw: \"I like to break things and cause ruin.\"",
	attunement : true,
	weight : 2
}
MagicItemsList["lost crown of besilmer"] = {
	name : "Lost Crown of Besilmer",
	source : ["PotA", 223],
	type : "wondrous item",
	rarity : "legendary",
	storyItemAL : true,
	description : "",
	descriptionFull : "This dwarven battle-helm consists of a sturdy open-faced steel helmet, decorated with a golden circlet above the brow from which seven small gold spikes project upward. You gain the following benefits while wearing the crown:\n \u2022 You have resistance to psychic damage.\n \u2022 You have advantage on saving throws against effects that would charm you.\n \u2022 You can use a bonus action to inspire one creature you can see that is within 60 feet of you and that can see or hear you. Once before the end of your next turn, the inspired creature can roll a d6 and add the number rolled to one ability check, attack roll, or saving throw it makes. This uses 1 charge from the crown. It has 3 charges, and it regains 1d3 expended charges daily at dawn.",
	attunement : true
}
MagicItemsList["orcsplitter"] = {
	name : "Orcsplitter",
	source : ["PotA", 224],
	type : "weapon (greataxe)",
	rarity : "legendary",
	magicItemTable : "G",
	description : "",
	descriptionFull : "A mighty axe wielded long ago by the dwarf king Torhild Flametongue, Orcsplitter is a battered weapon that appears unremarkable at first glance. Its head is graven with the Dwarvish runes for \"orc,\" but the runes are depicted with a gap or slash through the markings; the word \"orc\" is literally split in two.\n   You gain the following benefits while holding this magic weapon:\n \u2022 You gain a +2 bonus to attack and damage rolls made with it.\n \u2022 When you roll a 20 on an attack roll with this weapon against an orc, that orc must succeed on a DC 17 Constitution saving throw or drop to 0 hit points.\n \u2022 You can't be surprised by orcs while you're not incapacitated. You are also aware when orcs are within 120 feet of you and aren't behind total cover, although you don't know their location.\n \u2022 You and any of your friends within 30 feet of you can't be frightened while you're not incapacitated.\n\n" + toUni("Sentience") + ". Orcsplitter is a sentient, lawful good weapon with an Intelligence of 6, a Wisdom of 15, and a Charisma of 10. It can see and hear out to 120 feet and has darkvision. It communicates by transmitting emotions to its wielder, although on rare occasions it uses a limited form of telepathy to bring to the wielder's mind a couplet or stanza of ancient Dwarvish verse.\n   " + toUni("Personality") + ". Orcsplitter is grim, taciturn, and inflexible. It knows little more than the desire to face orcs in battle and serve a courageous, just wielder. It disdains cowards and any form of duplicity, deception, or disloyalty. The weapon's purpose is to defend dwarves and to serve as a symbol of dwarven resolve. It hates the traditional foes of dwarves\u2014giants, goblins, and, most of all, orcs\u2014and silently urges its possessor to meet such creatures in battle.",
	attunement : true,
	weight : 7
}
MagicItemsList["reszur"] = {
	name : "Reszur",
	source : ["PotA", 157],
	type : "weapon (dagger)",
	rarity : "uncommon",
	description : "",
	descriptionFull : "You have a +1 bonus to attack and damage rolls made with this weapon, which doesn't make noise when it hits or cuts something.\n   The name \"Reszur\" is graven on the dagger's pommel. If the wielder speaks the name, the blade gives off a faint, cold glow, shedding dim light in a 10-foot radius until the wielder speaks the name again.",
	weight : 1
}
MagicItemsList["seeker dart"] = {
	name : "Seeker Dart",
	source : ["PotA", 223],
	type : "weapon (dart)",
	rarity : "uncommon",
	magicItemTable : "F",
	description : "",
	descriptionFull : "This small dart is decorated with designs like windy spirals that span the length of its shaft.\n   When you whisper the word \"seek\" and hurl this dart, it seeks out a target of your choice within 120 feet of you. You must have seen the target before, but you don't need to see it now. If the target isn't within range or if there is no clear path to it, the dart falls to the ground, its magic spent and wasted. Otherwise, elemental winds guide the dart instantly through the air to the target. The dart can pass though openings as narrow as 1 inch wide and can change direction to fly around corners.\n   When the dart reaches its target, the target must succeed on a DC 16 Dexterity saving throw or take 1d4 piercing damage and 3d4 lightning damage. The dart's magic is then spent, and it becomes an ordinary dart.",
	weight : 0.25
}
MagicItemsList["storm boomerang"] = {
	name : "Storm Boomerang",
	source : ["PotA", 223],
	type : "weapon (javelin)",
	rarity : "uncommon",
	magicItemTable : "F",
	description : "",
	descriptionFull : "This boomerang is a ranged weapon carved from griffon bone and etched with the symbol of elemental air. When thrown, it has a range of 60/120 feet, and any creature that is proficient with the javelin is also proficient with this weapon. On a hit, the boomerang deals 1d4 bludgeoning damage and 3d4 thunder damage, and the target must succeed on a DC 10 Constitution saving throw or be stunned until the end of its next turn. On a miss, the boomerang returns to the thrower's hand.\n   Once the boomerang deals thunder damage to a target, the weapon loses its ability to deal thunder damage and its ability to stun a target. These properties return after the boomerang spends at least 1 hour inside an elemental air node."
}
MagicItemsList["tinderstrike"] = {
	name : "Tinderstrike",
	source : ["PotA", 224],
	type : "weapon (dagger)",
	rarity : "legendary",
	storyItemAL : true,
	description : "",
	descriptionFull : "A flint dagger, Tinderstrike is uncommonly sharp, and sparks cascade off its edge whenever it strikes something solid. Its handle is always warm to the touch, and the blade smolders for 1d4 minutes after it is used to deal damage. It contains a spark of Imix, Prince of Evil Fire.\n   You gain a +2 bonus to attack and damage rolls made with this magic weapon. When you hit with it, the target takes an extra 2d6 fire damage.\n   " + toUni("Fire Mastery") + ". You gain the following benefits while you hold Tinderstrike:\n \u2022 You can speak Ignan fluently.\n \u2022 You have resistance to fire damage.\n \u2022 You can cast Dominate Monster (save DC 17) on a fire elemental. Once you have done so, Tinderstrike can't be used this way again until the next dawn.\n\n" + toUni("Dance of the All-Consuming Fire") + ". While inside a fire node, you can perform a ritual called the Dance of the All-Consuming Fire, using Tinderstrike to create a devastation orb of fire. Once you perform the ritual, Tinderstrike can't be used to perform the ritual again until the next dawn.\n   " + toUni("Flaw") + ". Tinderstrike makes its wielder impatient and rash. While attuned to the weapon, you gain the following flaw: \"I act without thinking and take risks without weighing the consequences.\"",
	attunement : true,
	weight : 1
}
MagicItemsList["weird tank"] = {
	name : "Weird Tank",
	source : ["PotA", 223],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "G",
	description : "",
	descriptionFull : "A weird tank is a ten-gallon tank of blown glass and sculpted bronze with a backpack-like carrying harness fashioned from tough leather. A water weird is contained within the tank. While wearing the tank, you can use an action to open it, allowing the water weird to emerge. The water weird acts immediately after you in the initiative order, and it is bound to the tank.\n   You can command the water weird telepathically (no action required) while you wear the tank. You can close the tank as an action only if you have first commanded the water weird to retract into it or if the water weird is dead.\n   If the water weird is killed, the tank loses its magical containment property until it spends at least 24 hours inside an elemental water node. When the tank is recharged, a new water weird forms inside it.\n   The tank has AC 15, 50 hit points, vulnerability to bludgeoning damage, and immunity to poison and psychic damage. Reducing the tank to 0 hit points destroys it and the water weird contained within it.",
	attunement : true
}
MagicItemsList["windvane"] = {
	name : "Windvane",
	source : ["PotA", 224],
	type : "weapon (spear)",
	rarity : "legendary",
	storyItemAL : true,
	description : "",
	descriptionFull : "A silver spear, Windvane has dark sapphires on the filigreed surface of its polished head. Held by its shining haft, the weapon feels insubstantial, as if clutching a cool, gently flowing breeze. The spear contains a spark of Yan-C-Bin, the Prince of Evil Air.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon, which has the finesse weapon property. When you hit with it, the target takes an extra 1d6 lightning damage.\n   " + toUni("Air Mastery") + ". You gain the following benefits while you hold Windvane:\n \u2022 You can speak Auran fluently.\n \u2022 You have resistance to lightning damage.\n \u2022 You can cast Dominate Monster (save DC 17) on an air elemental. Once you have done so, Windvane can't be used this way again until the next dawn.\n\n" + toUni("Song of the Four Winds") + ". While inside an air node, you can perform a ritual called the Song of the Four Winds, using Windvane to create a devastation orb of air. Once you perform the ritual, Windvane can't be used to perform the ritual again until the next dawn.\n   " + toUni("Flaw") + ". Windvane makes its wielder mercurial and unreliable. While attuned to the weapon, you gain the following flaw: \"I break my vows and plans. Duty and honor mean nothing to me.\"",
	attunement : true,
	weight : 3
}
MagicItemsList["wingwear"] = {
	name : "Wingwear",
	source : ["PotA", 223],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "C",
	description : "",
	descriptionFull : "This snug uniform has symbols of air stitched into it and leathery flaps that stretch along the arms, waist, and legs to create wings for gliding. A suit of wingwear has 3 charges. While you wear the suit, you can use a bonus action and expend 1 charge to gain a flying speed of 30 feet until you land. At the end of each of your turns, your altitude drops by 5 feet. Your altitude drops instantly to 0 feet at the end of your turn if you didn't fly at least 30 feet horizontally on that turn. When your altitude drops to 0 feet, you land (or fall), and you must expend another charge to use the suit again.\n   The suit regains all of its expended charges after spending at least 1 hour in an elemental air node.",
	attunement : true
}