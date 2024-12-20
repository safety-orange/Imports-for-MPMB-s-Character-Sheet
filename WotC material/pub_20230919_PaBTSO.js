var iFileName = "pub_20230919_PaBTSO.js";
RequiredSheetVersion("13.2.0");
// This file adds the magic items from the Phandelver and Below: The Shattered Obelisk adventure from the D&D 5e starter set to MPMB's Character Record Sheet

// Define the source
SourceList["PaBTSO"] = {
	name : "Phandelver and Below: The Shattered Obelisk [items]",
	abbreviation : "PaBTSO",
	group : "Adventure Books",
	campaignSetting : "Forgotten Realms",
	url : "https://dndstore.wizards.com/us/product/820931/phandelver-and-below-the-shattered-obelisk-digital-plus-physical-bundle",
	date : "2023/09/19"
};

// Magic Items
// [dupl_start] reprint from Lost Mines of Phandelver
if (!SourceList["LMoP"]) {
	MagicItemsList["dragonguard"] = {
		name : "Dragonguard",
		source : [["PaBTSO", 72], ["LMoP", 48]],
		type : "armor (breastplate)",
		rarity : "rare",
		magicItemTable : "G",
		description : "This +1 breastplate has a gold dragon motif worked into its design. It grants its wearer advantage on saving throws against the breath weapons of creatures that have the dragon type.",
		descriptionFull : "This +1 breastplate has a gold dragon motif worked into its design. Created for a human hero of Neverwinter named Tergon, it grants its wearer advantage on saving throws against the breath weapons of creatures that have the dragon type.",
		weight : 20,
		armorOptions : [{
			regExpSearch : /dragonguard/i,
			name : "Dragonguard",
			source : [["PaBTSO", 72], ["LMoP", 48]],
			type : "medium",
			ac : "14+1",
			weight : 20,
			selectNow : true
		}],
		savetxt : { adv_vs : ["breath weapons of dragons"] }
	}
	MagicItemsList["hew"] = {
		name : "Hew",
		source : [["PaBTSO", 54], ["LMoP", 33]],
		type : "weapon (battleaxe)",
		rarity : "uncommon",
		magicItemTable : "F",
		description : 'Dwarvish runes on the head of this rusty battleaxe read "Hew". It adds a +1 bonus to attack and damage rolls made with it and deals maximum damage against plant creatures or objects made of wood. While carrying it, I feel uneasy when I travel through a forest, as its creator was a dwarf smith who feuded with dryads.',
		descriptionFull : 'This rusty old battleaxe of dwarven manufacture has runes in Dwarvish on the axe head which read "Hew". Hew is a +1 battleaxe that deals maximum damage when the wielder hits a plant creature or an object made of wood. The axe\'s creator was a dwarf smith who feuded with the dryads of a forest where he used it for protection while he cut firewood. Whoever carries the axe feels uneasy whenever he or she travels through a forest.',
		weight : 4,
		weaponOptions : [{
			baseWeapon : "battleaxe",
			regExpSearch : /\bhew\b/i,
			name : '"Hew"',
			source : [["LMoP", 33], ["PaBTSO", 54]],
			description : "Versatile (1d10); Max damage against plant creatures and wooden objects",
			modifiers : [1, 1],
			selectNow : true
		}]
	}
	MagicItemsList["lightbringer"] = {
		name : "Lightbringer",
		source : [["PaBTSO", 54], ["LMoP", 48]],
		type : "weapon (mace)",
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This mace adds a +1 bonus to attack and damage rolls made with it. It is made for a cleric of the god of dawn, with its head shaped like a sunburst and made of solid brass. I can command it to glow as bright as a torch. While glowing, the mace deals an extra 1d6 radiant damage to undead creatures.",
		descriptionFull : "This +1 mace was made for a cleric of Lathander, the god of dawn. The head of the mace is shaped like a sunburst and is made of solid brass. Named Lightbringer, this weapon glows as bright as a torch when its wielder commands. While glowing, the mace deals an extra 1d6 radiant damage to undead creatures.",
		weight : 4,
		weaponOptions : [{
			baseWeapon : "mace",
			regExpSearch : /lightbringer/i,
			name : "Lightbringer",
			source : [["PaBTSO", 54], ["LMoP", 48]],
			description : "Command to glow as torch and deal +1d6 radiant damage to undead",
			modifiers : [1, 1],
			selectNow : true
		}]
	}
	MagicItemsList["spider staff"] = {
		name : "Spider Staff",
		source : [["PaBTSO", 220], ["LMoP", 53]],
		type : "staff",
		rarity : "rare",
		magicItemTable : "G",
		description : "Attacks with this black adamantine quarterstaff topped with a spider deal +1d6 poison damage on a hit. It has 10 charges and regains 1d6+4 expended charges at dawn. If I use its last charge, roll a d20. On a 1, it is destroyed. I can use its charges to cast Spider Climb (1 charge) or Web (2 charges, spell save DC 15).",descriptionFull : "The top of this magic quarterstaff is shaped like a spider. It deals an extra 1d6 poison damage on a hit when used to make a weapon attack."+
		toUni("\n   Spells") + ". The staff has 10 charges. While holding it, you can expend the requisite number of charges to cast one of the following spells from the staff: spider climb (1 charge) or web (2 charges; spell save DC 15)."+
		"\n   The staff regains 1d6+4 expended charges daily at dusk. If you expend the staff's last charge, roll a d20. On a 1, the staff crumbles to dust and is destroyed.",
		attunement : true,
		prerequisite : "Requires attunement by a bard, sorcerer, warlock, or wizard",
		prereqeval : function(v) { return classes.known.bard || classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false; },
		weight : 4,
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
		weaponOptions : [{
			baseWeapon : "quarterstaff",
			regExpSearch : /^(?=.*spider)(?=.*staff).*$/i,
			name : "Spider Staff",
			source : [["PaBTSO", 220], ["LMoP", 53]],
			description : "Versatile (1d8); +1d6 poison damage",
			selectNow : true
		}],
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
	MagicItemsList["staff of defense"] = {
		name : "Staff of Defense",
		source : [["PaBTSO", 220], ["LMoP", 53]],
		type : "staff",
		rarity : "rare",
		magicItemTable : "G",
		description : "This slender, hollow staff is made of glass yet is as strong as oak. While holding it, I gain a +1 bonus to AC. It has 10 charges and regains 1d6+4 expended charges at dawn. If I use its last charge, roll a d20. On a 1, it is destroyed. I can use its charges to cast Mage Armor (1 charge) or Shield (2 charges) as an action.",
		descriptionFull : "This slender, hollow staff is made of glass yet is as strong as oak. It weighs 3 pounds. While holding the staff, you have a +1 bonus to your Armor Class."+
		toUni("\n   Spells") + ". The staff has 10 charges. While holding it, you can expend the requisite number of charges to cast one of the following spells from the staff: mage armor (1 charge) or shield (2 charges)."+
		"\n   The staff regains 1d6+4 expended charges daily at dawn. If you expend the staff's last charge, roll a d20. On a 1, the staff shatters and is destroyed.",
		attunement : true,
		prerequisite : "Requires attunement by a bard, sorcerer, warlock, or wizard",
		prereqeval : function(v) { return classes.known.bard || classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false; },
		weight : 3,
		usages : 10,
		recovery : "dawn",
		additional : "regains 1d6+4",
		spellcastingAbility : "class",
		spellFirstColTitle : "Ch",
		weaponsAdd : { options : ["Staff of Defense"] },
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
} // dupl_end
MagicItemsList["netherese ring of protection"] = {
	name : "Netherese Ring of Protection",
	source : [["PaBTSO", 50]],
	type : "ring",
	rarity : "rare",
	description : "This ring is made from a single piece of mystical green glass that's stronger than steel. It grants me a +1 bonus to AC and saving throws. It also gives me a +4 bonus to saves and checks made to avoid dropping or being disarmed of any item held in the hand this ring is on.",
	descriptionFull : "You gain a +1 bonus to AC and saving throws while wearing this ring."+
	"\n   The ring is made from a single piece of mystical green glass that's stronger than steel. It has the added property of making the wearer less likely to drop or lose anything held in the hand the ring is on. The wearer receives a +4 bonus to saving throws or checks made to avoid dropping or being disarmed of any item held in that hand.",
	attunement : true,
	extraAC : [{name : "Netherese Ring of Protection", mod : 1, magic : true, text : "I gain a +1 bonus to AC while attuned."}],
	addMod : [{ type : "save", field : "all", mod : 1, text : "While I wear the Netherese Ring of Protection, I gain a +1 bonus to all my saving throws." }],
	savetxt : { text : ["+4 to avoid disarm/drop held"] }
}
MagicItemsList["statuette of augury"] = {
	name : "Statuette of Augury",
	source : [["PaBTSO", 62]],
	type : "wondrous item",
	rarity : "unknown",
	description : "This gold statuette of an elf is imbued with divination magic. A non-evil creature grasping the statue can ask it a question and receive a telepathic response, as though the creature had cast Augury. Once a creature has asked its question and received a response, it can never activate the statuette again.",
	descriptionFull : "This gold statuette of an elf is worth 100 gp, and is imbued with divination magic. A non-evil creature grasping the statue can ask it a question and receive a telepathic response, as though the creature had cast augury. Once a creature has asked its question and received a response, it can never activate the statuette again.",
	spellcastingBonus : [{
		name : "Statuette of Augury",
		spells : ["augury"],
		selection : ["augury"],
		firstCol : "1\xD7"
	}]
}
MagicItemsList["bracers of celerity"] = {
	name : "Bracers of Celerity",
	source : [["PaBTSO", 217]],
	type : "wondrous item",
	rarity : "rare",
	description : "This pair of lightweight bronze bracers is lined with soft, purple velvet and engraved with swirling designs. While I'm wearing these bracers, all my speeds increase by 10 ft, and I have advantage on saving throws I make to avoid or end the paralyzed or restrained condition on myself.",
	descriptionFull : "This pair of lightweight bronze bracers is lined with soft, purple velvet and engraved with swirling designs."+
	"\n   While you're wearing these bracers, all your speeds increase by 10 feet, and you have advantage on saving throws you make to avoid or end the paralyzed or restrained condition on yourself.",
	attunement : true,
	speed : { allModes : { bonus : "+10" } },
	savetxt : { adv_vs : ["paralyzed", "restrained"] }
}
MagicItemsList["cape of enlargement"] = {
	name : "Cape of Enlargement",
	source : [["PaBTSO", 217]],
	type : "wondrous item",
	rarity : "very rare",
	description : "This cape has 3 charges, regaining 1d3 daily at dawn. As a bonus action, I can use 1 charge to enlarge myself for 10 min or end this effect. While enlarged, my size increases by one category as space allows, I have adv. on Strength checks and saves, and I add my Prof Bonus to my weapon and unarmed strike damage.",
	descriptionFull : "Ancient runes are stitched in silver thread along the hem of this grayish-purple cape."+
	"\n   The cape has 3 charges. As a bonus action while wearing the cape, you can expend 1 of its charges to enlarge yourself, granting yourself the following benefits:"+
	"\n   \u2022 Your size increases by one category\u2014from Medium to Large, for example. If there isn't enough room for your size to increase by one category, you instead become the maximum possible size in the space available."+
	"\n   \u2022 You have advantage on Strength checks and Strength saving throws."+
	"\n   \u2022 When you hit with an attack roll using a weapon or an unarmed strike, you can add your proficiency bonus to the attack's damage."+
	"\n   These benefits last for 10 minutes or until you use another bonus action to dismiss them. The cape regains 1d3 expended charges daily at dawn.",
	attunement : true,
	usages : 3,
	recovery : "dawn",
	additional : "regains 1d3",
	action : [["bonus action", " (enlarge/stop)"]],
}
MagicItemsList["flayer slayer"] = {
	name : "Flayer Slayer",
	source : [["PaBTSO", 217]],
	type : "weapon (greataxe)",
	rarity : "rare",
	description : "I gain a +1 bonus to attack and damage rolls made with this greataxe adorned with carvings of decapitated mind flayers. An aberration hit with this greataxe takes +1d12 slashing damage and if it is currently grappling a creature, it must succeed on a DC 15 Strength save or release each creature it is grappling.",
	descriptionFull : "Carvings of decapitated mind flayers adorn this greataxe's metal blade. You gain a +1 bonus to attack and damage rolls made with this greataxe."+
	"\n   An Aberration hit with this greataxe takes an extra 1d12 slashing damage. If the Aberration is currently grappling a creature, the Aberration must succeed on a DC 15 Strength saving throw or release each creature it is grappling.",
	attunement : true,
	weight : 7,
	weaponOptions : [{
		baseWeapon : "greataxe",
		regExpSearch : /flayer slayer/i,
		name : "Flayer Slayer",
		source : [["PaBTSO", 217]],
		description : "Heavy, two-handed; Aberrations: +1d12 damage \u0026 DC 15 Str save or release all grappled",
		modifiers : [1, 1],
		selectNow : true
	}]
}
MagicItemsList["luminous war pick"] = {
	name : "Luminous War Pick",
	source : [["PaBTSO", 217]],
	type : "weapon (war pick)",
	rarity : "rare",
	description : "I gain a +1 bonus to attack and damage rolls made with this war pick inlaid with crushed pearlescent stones that imbue it with a faint luminescence. As a bonus action once per dawn, I can use it to cast the daylight spell, choosing a point on the war pick as a target for the spell.",
	descriptionFull : "The haft of this war pick is inlaid with crushed pearlescent stones that imbue the weapon with a faint luminescence. You gain a +1 bonus to attack and damage rolls made with this war pick."+
	"\n   While wielding the war pick, you can use a bonus action to cast the daylight spell, choosing a point on the war pick. Once you use this bonus action, it can't be used again until the next dawn.",
	attunement : true,
	weight : 2,
	weaponOptions : [{
		baseWeapon : "war pick",
		regExpSearch : /^(?=.*\bluminous\b)((?=.*\bkuwas?\b)|((?=.*pick)(?=.*war))|((?!.*(heavy|great|light))(?=.*\bpicks?\b))).*$/i,
		name : "Luminous War Pick",
		source : [["PaBTSO", 217]],
		description : "",
		modifiers : [1, 1],
		selectNow : true
	}],
	spellcastingBonus : [{
		name : "Once per dawn",
		spells : ["daylight"],
		selection : ["daylight"],
		firstCol : "oncelr"
	}],
	usages : 1,
	recovery : "dawn",
	additional : "Daylight",
	action : [["bonus action", " (Daylight)"]],
	spellChanges : {
		"daylight" : {
			time : "1 bns",
			description : "60-ft rad bright light + 60-ft dim light from point on pick; only magical darkness of SL 4+ works in it",
			changes : "While wielding the Luminous War Pick, I can use a bonus action to cast the daylight spell, choosing a point on the war pick."
		}
	}
}
MagicItemsList["mind crystal"] = {
	name : "Mind Crystal",
	source : [["PaBTSO", 218]],
	type : "wondrous item",
	rarity : "rare",
	description : "When you cast a spell that has a casting time of 1 action while holding a mind crystal, I can modify it in a specific way determined by the type of mind crystal. I can't use a mind crystal and a Metamagic option on the same spell. Once a mind crystal is used, it becomes a nonmagical gem worth 50 gp.",
	descriptionFull : "These gemstones contain a crystallized bit of spellcasting magic. Different types of mind crystals exist, each with a different single-use effect."+
	"\n   When you cast a spell that has a casting time of 1 action while holding a mind crystal, you can modify the spell in a specific way. You can use only a single mind crystal to modify the spell, and you can't use a mind crystal and a Metamagic option on the same spell. Once you use a mind crystal, it becomes a nonmagical gem worth 50 gp."+
	toUni("\n   Careful") + ". (Uncommon) Choose up to three creatures affected by the spell. The chosen creatures automatically succeed on their saving throws against the spell."+
	toUni("\n   Distant") + ". (Uncommon) If the spell has a range of 5 feet or more and doesn't have a range of self, the spell's range increases by 100 feet. If the spell has a range of touch, its range becomes 30 feet."+
	toUni("\n   Empowered") + ". (Uncommon) When you roll damage for the spell, you can reroll up to three damage dice. You must use the new rolls."+
	toUni("\n   Extended") + ". (Uncommon) If the spell has a duration of 1 minute or longer, double the spell's duration, to a maximum duration of 24 hours."+
	toUni("\n   Heightened") + ". (Rare) Choose one creature affected by the spell. That creature has disadvantage on the first saving throw it makes against the spell."+
	toUni("\n   Quickened") + ". (Rare) You change the spell's casting time to 1 bonus action for this casting."+
	toUni("\n   Subtle") + ". (Common) You cast the spell without any somatic or verbal components for this casting.",
	allowDuplicates : true,
	choices : ['Careful', 'Distant', 'Empowered', 'Extended', 'Heightened', 'Quickened', 'Subtle'],
	"careful" : {
		rarity : "uncommon",
		description : "I can use this crystal once while holding it and casting a spell with a casting time of 1 action. Choose up to three creatures affected by the spell. The chosen creatures automatically succeed on their saving throws against the spell. A spell can be modified only by a single mind crystal or metamagic, not both."
	},
	"distant" : {
		rarity : "uncommon",
		description : "I can use this crystal once while holding it and casting a spell with a casting time of 1 action and a range other then self. If the spell has a range of touch, its range becomes 30 ft. If the spell has a range of 5 ft or more, it increases by 100 ft. A spell can be modified only by a single mind crystal or metamagic, not both."
	},
	"empowered" : {
		rarity : "uncommon",
		description : "I can use this crystal once while holding it and casting a spell with a casting time of 1 action. When you roll damage for the spell, you can reroll up to three damage dice. You must use the new rolls. A spell can be modified only by a single mind crystal or metamagic, not both."
	},
	"extended" : {
		rarity : "uncommon",
		description : "I can use this crystal once while holding it and casting a spell with a casting time of 1 action. If the spell has a duration of 1 minute or longer, double the spell's duration, to a maximum duration of 24 hours. A spell can be modified only by a single mind crystal or metamagic, not both."
	},
	"heightened" : {
		rarity : "rare",
		description : "I can use this crystal once while holding it and casting a spell with a casting time of 1 action. Choose one creature affected by the spell. That creature has disadvantage on the first saving throw it makes against the spell. A spell can be modified only by a single mind crystal or metamagic, not both."
	},
	"quickened" : {
		rarity : "rare",
		description : "I can use this crystal once while holding it and casting a spell with a casting time of 1 action. The spell's casting time is changed to 1 bonus action for this casting. A spell can be modified only by a single mind crystal or metamagic, not both."
	},
	"subtle" : {
		rarity : "common",
		description : "I can use this crystal once while holding it and casting a spell with a casting time of 1 action. The spell doesn't require any somatic or verbal components for this casting. A spell can be modified only by a single mind crystal or metamagic, not both."
	}
}
MagicItemsList["mindblasting cap"] = {
	name : "Mindblasting Cap",
	source : [["PaBTSO", 218]],
	type : "wondrous item",
	rarity : "very rare",
	description : "As a bonus action once per dawn, I can use this cap to project psychic energy in a 60-ft cone. All in the area must make a DC 15 Int save or take 5d8 psychic damage and be stunned for 1 min. If saved, deals half damage and not stunned. Stunned creatures can repeat the save at the end of each of their turns.",
	descriptionFull : "This soft, violet cap bears stitching in the pattern of folds on a brain."+
	"\n   As a bonus action while wearing the cap, you can project psychic energy in a 60-foot cone. Each creature in that area must make a DC 15 Intelligence saving throw. On a failed save, a creature takes 5d8 psychic damage and has the stunned condition for 1 minute. On a successful save, the creature takes half as much damage only. At the end of each of its turns, a stunned creature can repeat the saving throw, ending the stunned condition on itself on a success."+
	"\n   Once this bonus action is used, it can't be used again until the next dawn.",
	attunement : true,
	action : [["bonus action", ""]],
	usages : 1,
	recovery : "dawn",
	weaponOptions : [{
		regExpSearch : /^(?=.*mindblasting)(?=.*cap).*$/i,
		name : "Mindblasting Cap",
		source : [["PaBTSO", 218]],
		ability : 0,
		type : "Magic Item",
		damage : [5, 8, "psychic"],
		range : "60-ft cone",
		description : "Int save or stunned for 1 min, re-save end of turn; Success - half damage, not stunned",
		abilitytodamage : false,
		modifiers : [7, 0],
		dc : true,
		selectNow : true
	}]
}
MagicItemsList["mindguard crown"] = {
	name : "Mindguard Crown",
	source : [["PaBTSO", 218]],
	type : "wondrous item",
	rarity : "very rare",
	description : "While I wear this adamantine crown, I have advantage on Intelligence, Wisdom, and Charisma saving throws, and I have resistance to psychic damage.",
	descriptionFull : "While you wear this adamantine crown, you have advantage on Intelligence, Wisdom, and Charisma saving throws, and you have resistance to psychic damage.",
	attunement : true,
	dmgres : ["Psychic"],
	savetxt : { text : ["Adv. on Int/Wis/Cha saves"] },
	advantages : [["Intelligence", true], ["Wisdom", true], ["Charisma", true]]
}
var PaBTSO_mudslickTowerFullDescription = [
	'You can use an action to place this 1-inch-diameter granite sphere on the ground and speak its command word, which is "petrification" in Terran. The sphere rapidly grows into a stout tower that remains until you use an action to touch the tower and speak the command word again, whereupon the tower shrinks back to a 1-inch-diameter granite sphere. The tower must be empty to shrink in this way. The tower bristles with muddy knobs that constantly extrude and retract across its surface, as though the tower were breathing through a coating of thick mud.',
	"Each creature in the area where the tower appears must make a DC 15 Dexterity saving throw, taking 10d10 bludgeoning damage on a failed save, or half as much damage on a successful one. In either case, the creature is pushed to an unoccupied space outside but next to the tower. Objects in the area that aren't being worn or carried take this damage and are pushed automatically."+
	"Whenever it expands, the mudslick tower merges with any natural stone it touches, awkwardly tipping and wedging itself to touch as much natural stone as it can.",
	"The tower is 20 feet on a side and 30 feet high, with arrow slits on all sides and a battlement atop it. Its interior is divided into two floors, with a ladder running along one wall to connect them. The ladder ends at a trapdoor leading to the roof. When activated, the tower has a small door on the side facing you. The door opens only at your command, which you can speak as a bonus action. It is immune to the knock spell and similar magic, such as that of a chime of opening.",
	"Although it looks like stone, the tower is made of adamantine, and its magic prevents creatures from tipping it over. The roof, the door, and the walls each have 100 hit points, immunity to damage from nonmagical weapons excluding siege weapons, and resistance to all other damage. While merged with natural stone, the mudslick tower has immunity to all damage. Only a wish spell can repair the tower (this use of the spell counts as replicating a spell of 8th level or lower). Each casting of wish causes the roof, the door, or one wall to regain 50 hit points."
];
MagicItemsList["mudslick tower"] = {
	name : "Mudslick Tower",
	source : [["PaBTSO", 218]],
	type : "wondrous item",
	rarity : "very rare",
	description : "As an action, I can command this granite sphere to expand to a 20-ft square, 30-ft high tower of adamantine. If it is empty, I can command it to shrink back down as an action. It has two floors  and a roof with battlements, connected by ladders. The front door only opens on my command, as a bonus action.",
	descriptionFull : PaBTSO_mudslickTowerFullDescription.join("\n   "),
	toNotesPage : [{
		name : "Features",
		note : desc(PaBTSO_mudslickTowerFullDescription).replace(/feet/ig, "ft").replace(/your/g, "my").replace(/(facing) you/ig, "$1 me").replace(/you /ig, "I ")
	}],
	action : [["action", " (expand/shrink)"]]
}
MagicItemsList["potion of psionic fortitude"] = {
	name : "Potion of Psionic Fortitude",
	source : [["PaBTSO", 219]],
	type : "potion",
	rarity : "uncommon",
	description : "Once as an action, I can drink this potion or administer it to another to grant, for 1 hour, advantage on saving throws to avoid or end the charmed or stunned condition. This black potion swirls with shimmering flecks of pink and purple.",
	descriptionFull : "When you drink this potion, you have advantage for 1 hour on saving throws you make to avoid or end the charmed or stunned condition on yourself."+
	"\n   This black potion swirls with shimmering flecks of pink and purple.",
	weight : 0.5
}
MagicItemsList["ring of the orator"] = {
	name : "Ring of the Orator",
	source : [["PaBTSO", 219]],
	type : "ring",
	rarity : "uncommon",
	description : "This ring has 6 charges, regaining 1d6 daily at dawn. I can use 1 charge to project my voice to be heard clearly by all within 1 mile, for 1 min. Magical silence, 1 ft stone, 1 inch metal, lead, or 3 ft wood blocks this. During this, I can have creatures I can see understand me even if they don't know the language I speak.",
	descriptionFull : "This ring has 6 charges. While you wear it, you can expend 1 of its charges to project your voice to be heard clearly by all creatures within 1 mile of yourself, regardless of intervening noise, for 1 minute. Magical silence, 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood blocks this projection. If you project your voice while speaking a language the listening creatures don't understand, you can make the creatures understand what you're saying. You must be able to see the creatures to make them understand. The ring regains 1d6 expended charges daily at dawn.",
	attunement : true,
	usages : 6,
	recovery : "dawn",
	additional : "regains 1d6"
}
