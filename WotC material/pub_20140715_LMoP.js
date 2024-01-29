var iFileName = "pub_20140715_LMoP.js";
RequiredSheetVersion("13.0.8");
// This file adds the magic items from the Lost Mines of Phandelver adventure from the D&D 5e starter set to MPMB's Character Record Sheet

// Define the source
SourceList["LMoP"] = {
	name : "Lost Mines of Phandelver [items]",
	abbreviation : "LMoP",
	group : "Adventure Books",
	campaignSetting : "Forgotten Realms",
	url : "https://www.dndbeyond.com/sources/lmop",
	date : "2014/07/15"
};

// Magic Items
MagicItemsList["dragonguard"] = {
	name : "Dragonguard",
	source : [["LMoP", 48], ["PaBTSO", 72]],
	type : "armor (breastplate)",
	rarity : "rare",
	magicItemTable : "G",
	description : "This +1 breastplate has a gold dragon motif worked into its design. It grants its wearer advantage on saving throws against the breath weapons of creatures that have the dragon type.",
	descriptionFull : "This +1 breastplate has a gold dragon motif worked into its design. Created for a human hero of Neverwinter named Tergon, it grants its wearer advantage on saving throws against the breath weapons of creatures that have the dragon type.",
	weight : 20,
	armorAdd : "Dragonguard",
	armorOptions : [{
		regExpSearch : /dragonguard/i,
		name : "Dragonguard",
		source : [["LMoP", 48], ["PaBTSO", 72]],
		type : "medium",
		ac : "14+1",
		weight : 20
	}],
	savetxt : { adv_vs : ["breath weapons of dragons"] }
}
MagicItemsList["hew"] = {
	name : "Hew",
	source : [["LMoP", 33], ["PaBTSO", 54]],
	type : "weapon (battleaxe)",
	rarity : "uncommon",
	magicItemTable : "F",
	description : 'Dwarvish runes on the head of this rusty battleaxe read "Hew". It adds a +1 bonus to attack and damage rolls made with it and deals maximum damage against plant creatures or objects made of wood. While carrying it, I feel uneasy when I travel through a forest, as its creator was a dwarf smith who feuded with dryads.',
	descriptionFull : 'This rusty old battleaxe of dwarven manufacture has has runes in Dwarvish on the axe head which read "Hew". Hew is a +1 battleaxe deals maximum damage when the wielder hits a plant creature or an object made of wood. The axe\'s creator was a dwarf smith who feuded with the dryads of a forest where he used it for protection while he cut firewood. Whoever carries the axe feels uneasy whenever he or she travels through a forest.',
	weight : 4,
	weaponsAdd : ["Hew"],
	weaponOptions : {
		baseWeapon : "battleaxe",
		regExpSearch : /\bhew\b/i,
		name : "Hew",
		source : [["LMoP", 33], ["PaBTSO", 54]],
		description : "Versatile (1d10); Max damage against plant creatures and wooden objects",
		modifiers : [1, 1]
	}
}
MagicItemsList["lightbringer"] = {
	name : "Lightbringer",
	source : [["LMoP", 48], ["PaBTSO", 54]],
	type : "weapon (mace)",
	rarity : "uncommon",
	magicItemTable : "F",
	description : "This mace adds a +1 bonus to attack and damage rolls made with it. It is made for a cleric of the god of dawn, with its head of shaped like a sunburst and made of solid brass. I can command it to glow as bright as a torch. While glowing, the mace deals an extra 1d6 radiant damage to undead creatures.",
	descriptionFull : "This +1 mace was made for a cleric of Lathander, the god of dawn. The head of the mace is shaped like a sunburst and is made of solid brass. Named Lightbringer, this weapon glows as bright as a torch when its wielder commands. While glowing, the mace deals an extra 1d6 radiant damage to undead creatures.",
	weight : 4,
	weaponsAdd : ["Lightbringer"],
	weaponOptions : {
		baseWeapon : "mace",
		regExpSearch : /lightbringer/i,
		name : "Lightbringer",
		source : [["LMoP", 48], ["PaBTSO", 54]],
		description : "Command to glow as torch and deal +1d6 radiant damage to undead",
		modifiers : [1, 1]
	}
}
MagicItemsList["spider staff"] = { // changed to the new version introduced in Phandelver and Below: The Shattered Obelisk with the prerequisite
	name : "Spider Staff",
	source : [["LMoP", 53], ["PaBTSO", 220]],
	type : "staff",
	rarity : "rare",
	magicItemTable : "G",
	description : "Attacks with this black adamantine quarterstaff topped with a spider deal +1d6 poison damage on a hit. It has 10 charges and regains 1d6+4 expended charges at dawn. If I use its last charge, roll a d20. On a 1, it is destroyed. I can use its charges to cast Spider Climb (1 charge) or Web (2 charges, spell save DC 15).",
	descriptionFull : "The top of this black, adamantine staff is shaped like a spider. The staff weighs 6 pounds. You must be attuned to the staff to gain its benefits and cast its spells. The staff can be wielded as a quarterstaff. It deals 1d6 extra poison damage on a hit when used to make a weapon attack.\n   The staff has 10 charges, which are used to fuel the spells within it. With the staff in hand, you can use your action to cast one of the following spells from the staff if the spell is on your class's spell list: Spider Climb (1 charge) or Web (2 charges, spell save DC 15). No components are required.\n   The staff regains 1d6+4 expended charges each day at dusk. If you expend the staff's last charge, roll a d20. On a 1, the staff crumbles to dust and is destroyed.",
	attunement : true,
	prerequisite : "Requires attunement by a bard, sorcerer, warlock, or wizard",
	prereqeval : function(v) { return classes.known.bard || classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false; },
	weight : 6, // kept to the original weight
	usages : 10,
	recovery : "dawn",
	additional : "regains 1d6+4",
	weaponsAdd : ["Spider Staff"],
	weaponOptions : {
		baseWeapon : "quarterstaff",
		regExpSearch : /^(?=.*spider)(?=.*staff).*$/i,
		name : "Spider Staff",
		source : [["LMoP", 53], ["PaBTSO", 220]],
		description : "Versatile (1d8); +1d6 poison damage"
	},
	fixedDC : 15,
	spellFirstColTitle : "Ch",
	spellcastingBonus : [{
		name : "1 charge",
		spells : ["spider climb"],
		selection : ["spider climb"],
		firstCol : 1
	}, {
		name : "2 charges",
		spells : ["web"],
		selection : ["web"],
		firstCol : 2
	}]
}
MagicItemsList["staff of defense"] = { // changed to the new version introduced in Phandelver and Below: The Shattered Obelisk with the prerequisite
	name : "Staff of Defense",
	source : [["LMoP", 53]],
	type : "staff",
	rarity : "rare",
	magicItemTable : "G",
	description : "This slender, hollow staff is made of glass yet is as strong as oak. While holding it, I gain a +1 bonus to AC. It has 10 charges and regains 1d6+4 expended charges at dawn. If I use its last charge, roll a d20. On a 1, it is destroyed. I can use its charges to cast Mage Armor (1 charge) or Shield (2 charges) as an action.",
	descriptionFull : "This slender, hollow staff is made of glass yet is as strong as oak. It weighs 3 pounds. You must be attuned to the staff to gain its benefits and cast its spells.\n   While holding the staff, you have a +1 bonus to your Armor Class.\n   The staff has 10 charges, which are used to fuel the spells within it. With the staff in hand, you can use your action to cast one of the following spells from the staff if the spell is on your class's spell list: Mage Armor (1 charge) or Shield (2 charges). No components are required.\n   The staff regains 1d6+4 expended charges each day at dawn. If you expend the staff's last charge, roll a d20. On a 1, the staff shatters and is destroyed.",
	attunement : true,
	prerequisite : "Requires attunement by a bard, sorcerer, warlock, or wizard",
	prereqeval : function(v) { return classes.known.bard || classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false; },
	weight : 3,
	usages : 10,
	recovery : "dawn",
	additional : "regains 1d6+4",
	spellcastingAbility : "class",
	spellFirstColTitle : "Ch",
	weaponOptions : {
		baseWeapon : "quarterstaff",
		regExpSearch : /staff of defense/i,
		name : "Staff of Defense",
		weight : 3,
		source : [["LMoP", 53], ["PaBTSO", 220]]
	},
	spellcastingBonus : [{
		name : "1 charge",
		spells : ["mage armor"],
		selection : ["mage armor"],
		firstCol : 1
	}, {
		name : "2 charges",
		spells : ["shield"],
		selection : ["shield"],
		firstCol : 2
	}],
	spellChanges : {
		"shield" : {
			time : "1 a",
			changes : "Cast as an action."
		}
	},
	extraAC : [{name : "Staff of Defense", mod : 1, magic : true, text : "I gain a +1 bonus to AC while holding the Staff of Defense."}],
}
