var iFileName = "pub_20140715_LMoP.js";
RequiredSheetVersion(13);
// This file adds the magic items from the Lost Mines of Phandelver adventure from the D&D 5e starter set to MPMB's Character Record Sheet

// Define the source
SourceList["LMoP"] = {
	name : "Lost Mines of Phandelver [items]",
	abbreviation : "LMoP",
	group : "Adventure Books",
	url : "https:/http://dnd.wizards.com/products/tabletop-games/rpg-products/rpg_starterset",
	date : "2014/07/15"
};

// Magic Items
MagicItemsList["dragonguard"] = {
	name : "Dragonguard",
	source : ["LMoP", 48],
	type : "armor (breastplate)",
	rarity : "rare",
	magicItemTable : "G",
	description : "",
	descriptionFull : "This +1 breastplate has a gold dragon motif worked into its design. Created for a human hero of Neverwinter named Tergon, it grants its wearer advantage on saving throws against the breath weapons of creatures that have the dragon type.",
	weight : 20
}
MagicItemsList["hew"] = {
	name : "Hew",
	source : ["LMoP", 33],
	type : "weapon (battleaxe)",
	rarity : "uncommon",
	magicItemTable : "F",
	description : "",
	descriptionFull : "This rusty old battleaxe has runes in Dwarvish on the axe head which read \"Hew\". It deals maximum damage when the wielder hits a plant creature or an object made of wood. The axe's creator was a dwarf smith who feuded with the dryads of a forest where he cut firewood. Whoever carries the axe feels uneasy whenever he or she travels through a forest.",
	weight : 4
}
MagicItemsList["lightbringer"] = {
	name : "Lightbringer",
	source : ["LMoP", 48],
	type : "weapon (mace)",
	rarity : "uncommon",
	magicItemTable : "F",
	description : "",
	descriptionFull : "This +1 mace was made for a cleric of Lathander, the god of dawn. The head of the mace is shaped like a sunburst and made of solid brass. Named Lightbringer, this weapon glows as bright as a torch when its wielder commands. While glowing, the mace deals an extra 1d6 radiant damage to undead creatures.",
	weight : 4
}
MagicItemsList["spider staff"] = {
	name : "Spider Staff",
	source : ["LMoP", 53],
	type : "staff",
	rarity : "rare",
	magicItemTable : "G",
	description : "",
	descriptionFull : "The top of this black, adamantine staff is shaped like a spider. The staff weighs 6 pounds. You must be attuned to the staff to gain its benefits and cast its spells. The staff can be wielded as a quarterstaff. It deals 1d6 extra poison damage on a hit when used to make a weapon attack.\n   The staff has 10 charges, which are used to fuel the spells within it. With the staff in hand, you can use your action to cast one of the following spells from the staff if the spell is on your class's spell list: Spider Climb (1 charge) or Web (2 charges, spell save DC 15). No components are required.\n   The staff regains 1d6+4 expended charges each day at dusk. If you expend the staff's last charge, roll a d20. On a 1, the staff crumbles to dust and is destroyed.",
	attunement : true,
	weight : 6
}
MagicItemsList["staff of defense"] = {
	name : "Staff of Defense",
	source : ["LMoP", 53],
	type : "staff",
	rarity : "rare",
	magicItemTable : "G",
	description : "",
	descriptionFull : "This slender, hollow staff is made of glass yet is as strong as oak. It weighs 3 pounds. You must be attuned to the staff to gain its benefits and cast its spells.\n   While holding the staff, you have a +1 bonus to your Armor Class.\n   The staff has 10 charges, which are used to fuel the spells within it. With the staff in hand, you can use your action to cast one of the following spells from the staff if the spell is on your class's spell list: Mage Armor (1 charge) or Shield (2 charges). No components are required.\n   The staff regains 1d6+4 expended charges each day at dawn. If you expend the staff's last charge, roll a d20. On a 1, the staff shatters and is destroyed.",
	attunement : true,
	weight : 3
}
