var iFileName = "pub_20181107_LLoK.js";
RequiredSheetVersion("13.0.8");
// This file adds the magic items from the Lost Laboratory of Kwalish adventure to MPMB's Character Record Sheet

// Define the source
SourceList["LLoK"] = {
	name : "Lost Laboratory of Kwalish [items, spells]",
	abbreviation : "LLoK",
	group : "Extra Life",
	url : "https://www.dmsguild.com/product/258047",
	date : "2018/11/07",
	defaultExcluded : true
};

// Magic Items
MagicItemsList["blade of the medusa"] = {
	name : "Blade of the Medusa",
	nameTest : "of the Medusa",
	source : [["LLoK", 53]],
	type : "weapon (any sword)",
	rarity : "very rare",
	magicItemTable : "H",
	description : "I'm unwilling to part with this magic blade. When I attack a creature with it and roll a 20 to hit, it must make a DC 15 Con save or be restrained, and on a roll of 1, I must make that save. At the end of each of the target's turns, it can save again, ending the effect with 3 successes, or petrified for 1 hour after 3 failures.",
	descriptionLong : "I'm unwilling to part with this magic sword. When I attack a creature with it and roll a 20 to hit, it must make a DC 15 Constitution save or be restrained. However, if I roll of 1 on the attack roll, I must make that same save. At the end of each of the effected target's turns, it can make the save again. If it successfully saves against this effect three times, the effect ends. However, if it failed three times, it is turned to stone and petrified for 1 hour. A creature is immune to this effect if it is immune to damage of the weapon's type, does not have a body made of flesh, or has legendary actions.",
	descriptionFull : "When you attack a creature with this magic weapon and roll a 20 on the attack roll, the creature must make a DC 15 Constitution saving throw in addition to suffering the attack's normal effects. On a failed save, the creature is restrained and must make another Constitution saving throw at the end of each of its turns. If it successfully saves against this effect three times, the effect ends. If it fails its saves three times, it is turned to stone and subjected to the petrified condition for 1 hour.\n   A creature is immune to this effect if it is immune to damage of the weapon's type, does not have a body made of flesh, or has legendary actions.\n   " + toUni("Curse") + ". This weapon is cursed, and becoming attuned to it extends the curse to you. Until the curse is broken with a remove curse spell or similar magic, you are unwilling to part with the weapon. Whenever you attack a creature with this weapon and roll a 1 on the attack roll, you must succeed on a DC 15 Constitution saving throw or be restrained and forced to make additional saves against being petrified, as above.",
	attunement : true,
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "prefix",
		descriptionChange : ["replace", "sword"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /sword|scimitar|rapier/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/of the medusa/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'On 20 to hit: DC 15 Con save or restrained, see item; On 1 to hit: I same save';
				}
			},
			'If I include the words "of the Medusa" in a the name of a sword, it will be treated as the magic weapon Blade of the Medusa.'
		]
	}
}
MagicItemsList["galder's bubble pipe"] = {
	name : "Galder's Bubble Pipe",
	source : [["LLoK", 55]],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "G",
	description : "This finely carved pipe has 3 charges, regaining all at dawn, which I can use to cast spells. As an action, I can expend all 3 charges to summon a steam mephit. It acts on its own initiative, is friendly to me, obeys my verbal commands, and disappears after 1 minute or if it ends its turn more than 60 ft from the pipe.",
	descriptionFull : "This finely carved pipe blows odorless bubbles instead of smoke when used. The pipe has 3 charges, and it regains all spent charges daily at dawn. While you hold the pipe, you can expend charges to gain access to the following properties:\n \u2022 You can cast Fog Cloud as an action (1 charge).\n \u2022 You can cast Misty Step as a bonus action (2 charges).\n \u2022 You can summon a steam mephit as an action (3 charges). The mephit is friendly to you, obeys your verbal commands, and acts on its own turn in the initiative order. It disappears in a harmless puff of steam after 1 minute or if it ends its turn more than 60 feet from the pipe.",
	attunement : true,
	usages : 3,
	recovery : "dawn",
	spellcastingBonus : [{
		name : "1 charge",
		spells : ["fog cloud"],
		selection : ["fog cloud"],
		firstCol : 1
	}, {
		name : "2 charges",
		spells : ["misty step"],
		selection : ["misty step"],
		firstCol : 2
	}]
}
MagicItemsList["gambler's blade"] = {
	name : "Gambler's Blade",
	nameTest : "Gambler's",
	source : [["LLoK", 55]],
	type : "weapon (any sword)",
	rarity : "rare",
	magicItemTable : "H",
	description : "I am unwilling to part with this sword until I'm freed of its curse. Each day at dawn, I can choose its magical bonus to attack and damage rolls of +1, +2, or +3. However, I take a corresponding penalty (-1, -2, or -3) to my death saving throws.",
	descriptionFull : "Choose a magical bonus of +1 to +3. This sword gains that bonus to its attack and damage rolls. For each point of bonus you choose for the sword, you take a corresponding penalty (-1 to -3) to your death saving throws. You can change this magical bonus each day at dawn.\n   " + toUni("Curse") + ". This weapon is cursed, and becoming attuned to it extends the curse to you. Until the curse is broken with a remove curse spell or similar magic, you are unwilling to part with the weapon.",
	attunement : true,
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "suffix",
		descriptionChange : ["replace", "sword"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /sword|scimitar|rapier/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/gambler's/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'Choose its magic bonus (1-3), but equal penalty on death saves';
				}
			},
			"If I include the word \"Gambler's\" in a the name of a sword, it will be treated as the magic weapon Gambler's Blade."
		]
	}
}
MagicItemsList["heward's hireling armor"] = {
	name : "Heward's Hireling Armor",
	nameAlt : "Hireling Armor",
	source : [["LLoK", 55]],
	type : "armor (leather)",
	rarity : "very rare",
	magicItemTable : "G",
	description : "This leather armor gives me a +1 bonus to AC and allows me to draw or stow two one-handed weapons when I would normally be able to draw or stow only one. It has 6 pockets that hold 20 lb (2 cu ft) each as they are extradimensional spaces. Retrieving an item from a pocket requires an action.",
	descriptionFull : "A number of Kwalish's experiments were attempts to research the works of the legendary mage Heward, who first crafted what he named hireling armor. While wearing this armor, you gain a +1 bonus to AC. In addition, the armor's animated straps can assist with the drawing and sheathing of weapons, such that you can draw or stow two one-handed weapons when you would normally be able to draw or stow only one.\n   This armor also has six pockets, each of which is an extradimensional space. Each pocket can hold up to 20 pounds of material, not exceeding a volume of 2 cubic feet. The armor always weighs 10 pounds, regardless of its pockets' contents. Placing an object into one of the armor's pockets follows the normal rules for interacting with objects. Retrieving an item from a pocket of the armor requires you to use an action. When you reach into a pocket for a specific item, the item is always magically on top.\n   Placing the armor inside an extradimensional space created by a bag of holding, a Heward's handy haversack, or a similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate is sucked through it and deposited in a random location on the Astral Plane. The gate then closes. The gate is one-way only and can't be reopened.",
	weight : 10,
	action : [["action", " (retrieve item)"]],
	armorAdd : "Heward's Hireling Armor",
	armorOptions : {
		regExpSearch : /^(?=.*heward)(?=.*hireling)(?=.*armor).*$/i,
		name : "Heward's Hireling Armor",
		source : [["LLoK", 55]],
		type : "light",
		ac : 12,
		weight : 10
	}
}
if (MagicItemsList["ioun stone"]) {
	MagicItemsList["ioun stone"].incrementSkill = function (aSkill, iType, forceRemove) {
		if (SkillsList.abbreviations.indexOf(aSkill) == -1) return;
		var aIndx = SkillsList.abbreviations.indexOf(aSkill);
		var aFld = (Who("Text.SkillsNames") === "alphabeta" ? aSkill : SkillsList.abbreviationsByAS[aIndx]) + " Bonus";
		var iSkill = SkillsList.names[aIndx];
		var iName = "Ioun Stone of " + iType;
		var iTxt = "While the " + iName + " orbits my head and I'm proficient with the " + iSkill + " skill, I gain a +1 bonus on checks with it.";
		var addIt = forceRemove ? false : CurrentProfs.skill[aSkill] && CurrentProfs.skill[aSkill].length > 1;
		var hasBonus = How(aFld).indexOf(iTxt) !== -1;
		if (hasBonus !== addIt) {
			processMods( addIt, iName + " (magic item)", [{ type : "skill", field : aSkill, mod : 1, text : iTxt }] );
		}
	}
	AddFeatureChoice(MagicItemsList["ioun stone"], false, "Supreme Intellect", {
		source : [["LLoK", 55]],
		rarity : "rare",
		magicItemTable : "G",
		description : "As an action, I can make this faceted sphere orbit my head at 1d3 ft or retrieve it. Others can catch it as an action with an attack or Acrobatics check (AC/DC 24). It has 10 HP and resistance to all damage. While it orbits my head, I gain a +1 bonus on Intelligence checks.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect.\n   A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.\n   You gain a +1 bonus to Intelligence checks while this faceted sphere orbits your head.",
		addMod : [
			{ type : "skill", field : "Arcana", mod : 1, text : "While the Ioun stone of Supreme Intellect orbits my head, I gain a +1 bonus on Intelligence checks." },
			{ type : "skill", field : "History", mod : 1, text : "While the Ioun stone of Supreme Intellect orbits my head, I gain a +1 bonus on Intelligence checks." },
			{ type : "skill", field : "Investigation", mod : 1, text : "While the Ioun stone of Supreme Intellect orbits my head, I gain a +1 bonus on Intelligence checks." },
			{ type : "skill", field : "Nature", mod : 1, text : "While the Ioun stone of Supreme Intellect orbits my head, I gain a +1 bonus on Intelligence checks." },
			{ type : "skill", field : "Religion", mod : 1, text : "While the Ioun stone of Supreme Intellect orbits my head, I gain a +1 bonus on Intelligence checks." }
		]
	});
	AddFeatureChoice(MagicItemsList["ioun stone"], false, "Historical Knowledge", {
		source : [["LLoK", 55]],
		rarity : "rare",
		magicItemTable : "G",
		description : "As an action, I can make this polished, steely sphere orbit my head at 1d3 ft or retrieve it. Others can catch it as an action with an attack or Acrobatics check (AC/DC 24). It has resistance to all damage and 10 HP. While it orbits my head, I gain proficiency in the History skill, or a +1 bonus with it if I'm already proficient.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect.\n   A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.\n   You gain proficiency in the History skill, or a +1 bonus to checks with that skill if already proficient, while this polished, steely sphere orbits your head.",
		skills : ["History"],
		changeeval : function () { MagicItemsList["ioun stone"].incrementSkill("His", "Historical Knowledge"); },
		removeeval : function () { MagicItemsList["ioun stone"].incrementSkill("His", "Historical Knowledge", true); }
	});
	AddFeatureChoice(MagicItemsList["ioun stone"], false, "Natural Knowledge", {
		source : [["LLoK", 55]],
		rarity : "rare",
		magicItemTable : "G",
		description : "As an action, I can make this burnished, brassy stone orbit my head at 1d3 ft or retrieve it. Others can catch it as an action with an attack or Acrobatics check (AC/DC 24). It has resistance to all damage and 10 HP. While it orbits my head, I gain proficiency in the Nature skill, or a +1 bonus with it if I'm already proficient.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect.\n   A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.\n   You gain proficiency in the Nature skill, or a +1 bonus to checks with that skill if already proficient, while this burnished, brassy stone orbits your head.",
		skills : ["Nature"],
		changeeval : function () { MagicItemsList["ioun stone"].incrementSkill("Nat", "Natural Knowledge"); },
		removeeval : function () { MagicItemsList["ioun stone"].incrementSkill("Nat", "Natural Knowledge", true); }
	});
	AddFeatureChoice(MagicItemsList["ioun stone"], false, "Religious Knowledge", {
		source : [["LLoK", 55]],
		rarity : "rare",
		magicItemTable : "G",
		description : "As an action, I can make this tiny golden gem orbit my head at 1d3 ft or retrieve it. Others can catch it as an action with an attack or Acrobatics check (AC/DC 24). It has resistance to all damage and 10 HP. While it orbits my head, I gain proficiency in the Religion skill, or a +1 bonus with it if I'm already proficient.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect.\n   A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.\n   You gain proficiency in the Religion skill, or a +1 bonus to checks with that skill if already proficient, while this tiny golden gem orbits your head.",
		skills : ["Religion"],
		changeeval : function () { MagicItemsList["ioun stone"].incrementSkill("Rel", "Religious Knowledge"); },
		removeeval : function () { MagicItemsList["ioun stone"].incrementSkill("Rel", "Religious Knowledge", true); }
	});
	AddFeatureChoice(MagicItemsList["ioun stone"], false, "Language Knowledge", {
		source : [["LLoK", 55]],
		rarity : "rare",
		magicItemTable : "G",
		description : "As an action, I can make this pulsating bit of red jeweled crystal orbit my head at 1d3 ft or retrieve it. Others can catch it as an action with an attack or Acrobatics check (AC/DC 24). It has 10 HP and resistance to all damage. While it orbits my head, I am fluent in one additional language chosen by the DM.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect.\n   A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.\n   You are fluent in one additional language while this pulsating bit of red jeweled crystal orbits your head. The DM chooses the language bestowed by the stone.",
		languageProfs : [1]
	});
	AddFeatureChoice(MagicItemsList["ioun stone"], false, "Self-Preservation", {
		source : [["LLoK", 55]],
		rarity : "rare",
		description : "As an action, I can make this silvery gem orbit my head at 1d3 ft or retrieve it. Others can catch it as an action with an attack or Acrobatics check (AC/DC 24). It has 10 HP and resistance to all damage. While it orbits my head, I gain a +1 bonus to Intelligence saving throws.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect.\n   A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.\n   You gain a +1 bonus to Intelligence saving throws while this silvery gem orbits your head.",
		addMod : [{ type : "save", field : "Int", mod : 1, text : "While the Ioun stone of Self-Preservation orbits my head, I gain a +1 bonus to Intelligence saving throws." }]
	}, false, true); // force sorting on the last one
}
var LLoK_leatherGolemArmorFullDescription = [
	"Strange rituals have repurposed the body of a flesh golem into this partially sentient suit of leather armor. While wearing this armor, you gain the following benefits:",
	"\u2022 You gain a +1 bonus to AC and to saving throws against spells and other magical effects.",
	"\u2022 >>Immutable Form<<. You are immune to any spell or effect that would alter your form.",
	"\u2022 >>Lightning Absorption<<. You gain resistance to lightning damage. Whenever you take lightning damage, you gain 5 temporary hit points.",
	">>Curse<<. This armor is cursed, and it extends to whomever becomes attuned to it. Until the curse is broken with a remove curse spell or similar magic, you are unwilling to part with the armor. In addition, while you wear the cursed armor, you gain the following properties:",
	"\u2022 >>Aversion of Fire<<. If you take fire damage, you have disadvantage on attack rolls and ability checks until the end of your next turn.",
	"\u2022 >>Berserk<<. Whenever you suffer a critical hit, roll a d6. On a 6, you go beserk because of the armor. On each of your turns while berserk, you attack the nearest creature you can see. If no creature is near enough to move to and attack, you attack an object, with preference for an object smaller than yourself. Once you go beserk because of the armor, it cannot be removed. You continue to attack until you are incapacitated or until another creature is able to change your state of mind with appropriate magic (such as a calm emotions spell) or a successful DC 15 Charisma (Persuasion) check."
];
MagicItemsList["leather golem armor"] = {
	name : "Leather Golem Armor",
	source : [["LLoK", 55]],
	type : "armor (leather)",
	rarity : "rare",
	magicItemTable : "G",
	description : "I am unwilling to part with this leather armor until its curse is lifted from me, see Notes page. The curse makes me go berserk and have an aversion to fire. It gives me a +1 bonus to AC and saves vs. spells and magical effects. I have resistance to lightning damage and when I suffer such damage, I gain 5 temporary HP.",
	descriptionFull : LLoK_leatherGolemArmorFullDescription.join("\n   ").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
	attunement : true,
	weight : 10,
	dmgres : ["Lightning"],
	cursed : true,
	armorAdd : "Leather Golem Armor",
	armorOptions : {
		regExpSearch : /^(?=.*leather)(?=.*golem)(?=.*armor).*$/i,
		name : "Leather Golem Armor",
		source : [["LLoK", 55]],
		type : "light",
		ac : 12,
		weight : 10
	},
	savetxt : { text : ["+1 vs. spells and magical effects"] },
	toNotesPage : [{
		name : "Features",
		note : desc(LLoK_leatherGolemArmorFullDescription).replace(/>>(.*?)<</g, function(a, match) { return match.toUpperCase(); }).replace(/your/g, "my").replace(/you are /ig, "I am ").replace(/you /ig, "I ")
	}]
}
var LLoK_polymorphBladeFullDescription = [
	"When you attack a creature with this magic weapon and roll a 20 on the attack roll, the creature must make a DC 15 Wisdom saving throw in addition to suffering the attack's normal effects. On a failed save, the creature also suffers the effects of a polymorph spell. Roll a d20 and consult the following table to determine the form the target creature is transformed into.",
	">>d20\tNew Form   \td20\tNew Form<<",
	"  1\tTyrannosaurus\t 11\tWolf",
	"  2\tGiant ape    \t 12\tHorse",
	"  3\tElephant     \t 13\tOx",
	"  4\tGiant scorpion\t 14\tGiant frog",
	"  5\tRhinoceros   \t 15\tPoisonous snake",
	"  6\tPolar bear   \t 16\tHawk",
	"  7\tGiant toad   \t 17\tOctopus",
	"  8\tGiant eagle  \t 18\tCat",
	"  9\tBlack bear   \t 19\tRat",
	"10\tCrocodile     \t 20\tRabbit",
	"A creature is immune to this effect if it is immune to damage of the weapon's type, is a shapechanger, or has legendary actions.",
	">>Curse<<. This weapon is cursed, and it extends to whomever becomes attuned to it. Until the curse is broken with a Remove Curse spell or similar magic, you are unwilling to part with the weapon. Whenever you attack a creature with this weapon and roll a 1 on the attack roll, you suffer the effect of a polymorph spell for 1 hour, rolling on the table to determine your new form."
];
MagicItemsList["polymorph blade"] = {
	name : "Polymorph Blade",
	nameTest : "Polymorph",
	source : [["LLoK", 59]],
	type : "weapon (any sword)",
	rarity : "very rare",
	magicItemTable : "H",
	description : "I'm unwilling to part with this magic sword. When I attack a creature with it and roll a 20 to hit, the creature must make a DC 15 Wisdom save or be polymorphed for 1 hour into a random beast (see Notes page). However, on a roll of 1 to hit, I am the one being polymorphed for 1 hour without a save.",
	descriptionFull : LLoK_polymorphBladeFullDescription.join("\n   ").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
	attunement : true,
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "suffix",
		descriptionChange : ["replace", "sword"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /sword|scimitar|rapier/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/polymorph/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'On 20 to hit: DC 15 Wis save or polymorphed, see item; On 1 to hit: I polymorph';
				}
			},
			'If I include the word "Polymorph" in a the name of a sword, it will be treated as the magic weapon Polymorph Blade.'
		]
	},
	toNotesPage : [{
		name : "Features",
		note : desc(LLoK_polymorphBladeFullDescription).replace(/>>(.*?)<</g, function(a, match) { return match.toUpperCase(); }).replace(/your/g, "my").replace(/you are /ig, "I am ").replace(/you /ig, "I ")
	}]
}
var LLoK_poweredArmorFullDescription = [
	"Powered armor resembles a suit of unusual plate armor, with finely articulated joints connected by an oily, black, leather-like material. The armor has been worked to create the appearance of a heavily muscled warrior, and its great helm is unusual in that it has no openings\u2014only a broad glass plate in the front with a second piece of glass above it. Strange plates, tubing, and large metal bosses adorn the armor in seemingly random fashion. On the back of the armor's left gauntlet is a rectangular metal box, from which projects a short rod tipped with a cone-shaped red crystal.",
	"While wearing this armor, you gain the following benefits:",
	"\u2022 You have a +1 bonus to AC.",
	"\u2022 Your Strength score is 18 (this has no effect if your Strength is already 18 or higher).",
	"\u2022 You have advantage on death saving throws.",
	"The armor has further capabilities that can be powered either by energy cells or by your own life energy. You can use a bonus action to draw power from an energy cell or sacrifice hit points to gain one of the following benefits:",
	"\u2022 Emit a force field to gain 2d6 + 5 temporary hit points (1 charge or 5 hit points).",
	"\u2022 Activate boosters to gain a flying speed of 15 feet for 1 minute (1 charge or 5 hit points).",
	"\u2022 Fire arm-mounted laser: +8 to hit, range 120 feet, one target. 2d6 radiant damage (1 charge or 5 hit points).",
	"\u2022 Translate any writing you can see in any nonmagical language, to a total of one thousand words over 1 minute (1 charge or 5 hit points).",
	"\u2022 Fill the armor with air, so you can breathe normally in any environment for up to 1 hour (1 charge or 5 hit points).",
	"u2022 Gain darkvision to a range of 60 feet for up to 1 hour (1 charge or 5 hit points).",
	"The armor can accept only one energy cell at a time. It is found with one energy cell attached, containing 2d10 charges."
];
MagicItemsList["powered armor"] = {
	name : "Powered Armor",
	source : [["LLoK", 56]],
	type : "armor (plate)",
	rarity : "legendary",
	notLegalAL : true,
	description : "This unusual plate armor looks like a heavily muscled warrior with a helm without openings. It gives me a +1 bonus to AC, increases my Strength to 18, and adv. on death saves. As a bonus action, I can use charges from its energy cell or expend my own HP to have it do various things, see Notes page.",
	descriptionFull : LLoK_poweredArmorFullDescription.join("\n   "),
	attunement : true,
	weight : 65,
	scoresOverride : [18, 0, 0, 0, 0, 0],
	savetxt : { text : ["Adv. on death saves"] },
	action : [["bonus action", " (use energy)"]],
	armorAdd : "Powered Armor",
	armorOptions : {
		regExpSearch : /^(?=.*powered)(?=.*armor).*$/i,
		name : "Powered Armor",
		source : [["LLoK", 56]],
		type : "heavy",
		ac : 19,
		stealthdis : true,
		weight : 65,
		strReq : 15
	},
	usages : "2d10",
	recovery : "Never",
	additional : "energy cell",
	toNotesPage : [{
		name : "Features",
		note : desc(LLoK_poweredArmorFullDescription).replace(/your/g, "my").replace(/you /ig, "I ")
	}],
	weaponsAdd : ["Arm-Mounted Laser"],
	weaponOptions : {
		regExpSearch : /^(?=.*arm)(?=.*mounted)(?=.*laser).*$/i,
		name : "Arm-Mounted Laser",
		source : [["LLoK", 56]],
		ability : 0,
		type : "Magic Item",
		damage : [2, 6, "radiant"],
		range : "120 ft",
		description : "Bonus action; Uses 1 charge or 5 HP",
		abilitytodamage : false,
		modifiers : [8, ""]
	}
}

// Spells (contain contributions by /u/KittenWithMittens)
SpellsList["flock of familiars"] = {
	name: "Flock of Familiars",
	classes: ["warlock", "wizard"],
	source: ["LLoK", 57],
	level: 2,
	school: "Conj",
	time: "1 min",
	range: "Touch",
	components: "V,S",
	duration: "Conc, 1 h",
	description : "Summon 3+1/SL familiars as Find Familiar; can see through their eyes and deliver touch spells; see B",
	descriptionFull: "You temporarily summon three familiars\u2014spirits that take animal forms of your choice. Each familiar uses the same rules and options for a familiar conjured by the find familiar spell. All the familiars conjured by this spell must be the same type of creature (celestials, fey, or fiends; your choice). If you already have a familiar conjured by the find familiar spell or similar means, then one fewer familiars are conjured by this spell.\n   Familiars summoned by this spell can telepathically communicate with you and share their visual or auditory senses while they are within 1 mile of you.\n   When you cast a spell with a range of touch, one of the familiars conjured by this spell can deliver the spell, as normal. However, you can cast a touch spell through only one familiar per turn." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, you conjure an additional familiar for each slot level above 2nd."
}
SpellsList["galder's speedy courier"] = {
	name: "Galder's Speedy Courier",
	classes: ["warlock", "wizard"],
	source: ["LLoK", 57],
	level: 4,
	school: "Conj",
	time: "1 a",
	range: "10 ft",
	components: "V,S,M\u2020",
	compMaterial: "25 gp, or mineral goods of equivalent value, which the spell consumes",
	duration: "10 min",
	description: "Send 3\xD73\xD73 ft chest of items I put in it to named crea on same plane; SL8: other plane (25gp cons.)",
	descriptionMetric : "Send 1\xD71\xD71 m chest of items I put in it to named crea on same plane; SL8: other plane (25gp cons.)",
	descriptionFull: "You summon a Small air elemental to a spot within range. The air elemental is formless, nearly transparent, immune to all damage, and cannot interact with other creatures or objects. It carries an open, empty chest whose interior dimensions are 3 feet on each side. While the spell lasts, you can deposit as many items inside the chest as will fit. You can then name a living creature you have met and seen at least once before, or any creature for which you possess a body part, lock of hair, clipping from a nail, or similar portion of the creature's body.\n   As soon as the lid of the chest is closed, the elemental and the chest disappear, then reappear adjacent to the target creature. If the target creature is on another plane, or if it is proofed against magical detection or location, the contents of the chest reappear on the ground at your feet.\n   The target creature is made aware of the chest's contents before it chooses whether or not to open it, and knows how much of the spell's duration remains in which it can retrieve them. No other creature can open the chest and retrieve its contents. When the spell expires or when all the contents of the chest have been removed, the elemental and the chest disappear. The elemental also disappears if the target creature orders it to return the items to you. When the elemental disappears, any items not taken from the chest reappear on the ground at your feet." + AtHigherLevels + "When you cast this spell using an 8th-level spell slot, you can send the chest to a creature on a different plane of existence from you."
}
SpellsList["galder's tower"] = {
	name: "Galder's Tower",
	classes: ["wizard"],
	source: ["LLoK", 57],
	level: 3,
	school: "Conj",
	time: "10 min",
	range: "30 ft",
	components: "V,S,M",
	compMaterial: "A fragment of stone, wood, or other building material",
	duration: "24 h",
	description: "Conjure round or square tower with 2+1/Sl stories, each 100 sq ft and 10 ft high; see book",
	descriptionFull: "You conjure a two-story tower made of stone, wood, or similar suitably sturdy materials. The tower can be round or square in shape. Each level of the tower is 10 feet tall and has an area of up to 100 square feet. Access between levels consists of a simple ladder and hatch. Each level takes one of the following forms, chosen by you when you cast the spell:" +
	"\n \u2022 A bedroom with a bed, chairs, chest, and magical fireplace" +
	"\n \u2022 A study with desks, books, bookshelves, parchments, ink, and ink pens" +
	"\n \u2022 A dining space with a table, chairs, magical fireplace, containers, and cooking utensils" +
	"\n \u2022 A lounge with couches, armchairs, side tables and footstools" +
	"\n \u2022 A washroom with toilets, washtubs, a magical brazier, and sauna benches" +
	"\n \u2022 An observatory with a telescope and maps of the night sky" +
	"\n \u2022 An unfurnished, empty room" +
	"\n\nThe interior of the tower is warm and dry, regardless of conditions outside. Any equipment or furnishings conjured with the tower dissipate into smoke if removed from it. At the end of the spell's duration, all creatures and objects within the tower that were not created by the spell appear safely outside on the ground, and all traces of the tower and its furnishings disappear." +
	"\n   You can cast this spell again while it is active to maintain the tower's existence for another 24 hours. You can create a permanent tower by casting this spell in the same location and with the same configuration every day for one year." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the tower can have one additional story for each slot level beyond 3rd."
}
