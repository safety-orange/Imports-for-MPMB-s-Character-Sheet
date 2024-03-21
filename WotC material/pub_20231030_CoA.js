var iFileName = "pub_20231030_CoA.js";
RequiredSheetVersion("13.1.12");
// This file adds the magic items from the Chains of Asmodeus adventure from Extra Life to MPMB's Character Record Sheet

SourceList["CoA"] = {
	name : "Chains of Asmodeus",
	abbreviation : "CoA",
	group : "Extra Life",
	campaignSetting : "Forgotten Realms",
	url : "https://www.dmsguild.com/product/457996/Chains-of-Asmodeus",
	date : "2023/10/30",
	defaultExcluded : true
};

CoA_Corruption = {
	process : function(bAddRemove, sItem) {
		// Make a variable to remember the settings for this
		if (!CurrentVars.CoA_Corruption) {
			CurrentVars.CoA_Corruption = {
				items : [],
				present : false,
				savedAlert : false
			};
		}
		var bProcessIt = false;
		var bItemPresent = CurrentVars.CoA_Corruption.items.indexOf(sItem) !== -1;
		// If removing, test if present and the triggering item is in the list
		if (!bAddRemove && bItemPresent) {
			CurrentVars.CoA_Corruption.items.eject(sItem);
			if (CurrentVars.CoA_Corruption.items.length !== 0) {
				// Still items present, so don't change anything
				return;
			} else {
				// Removing note in final step if present 
				bProcessIt = CurrentVars.CoA_Corruption.present ? true : false;
				// Make pop-up appear at next corrupting item addition
				CurrentVars.CoA_Corruption.savedAlert = false;
			}
		} else if (bAddRemove) { // Adding
			// Add the item to the list of items processed
			if (!bItemPresent) CurrentVars.CoA_Corruption.items.push(sItem);
			if (CurrentVars.CoA_Corruption.savedAlert) {
				// The state of the alert was saved, so don't prompt and do nothing
				return;
			} else if (!CurrentVars.CoA_Corruption.present) {
				// If not present and dialog state was not saved, ask the user if the rules should be added to a notes page
				var oMsg = {
					cTitle : "Show Infernal Item Corruption (DM-only) Rules?",
					cMsg : 'The cursed infernal item "' + MagicItemsList[sItem].name + '" can cause corruption.\nDo you want to add the Infernal Item Corruption rules intended for the DM to a Notes page on your character sheet for reference?\n\nIMPORTANT: these rules are not intended to be read by players, only by the DM.\n\nThese notes will be automatically removed when you remove all corrupting items.',
					nIcon : 2, // Question
					nType : 2, // Yes,No
					oCheckbox : {
						cMsg : "Don't ask me again next time I add a corrupting item (unless I have removed all corrupting items)",
						bInitialValue : true,
						bAfterValue : false
					}
				};
				// Add the note if "Yes" was clicked
				bProcessIt = app.alert(oMsg) === 4;
				// Save the checkbox state
				CurrentVars.CoA_Corruption.savedAlert = oMsg.oCheckbox.bAfterValue;
			}
		}
		if (bProcessIt) {
			CurrentVars.CoA_Corruption.present = bAddRemove;
			processToNotesPage(bAddRemove, CoA_Corruption.toNotesPage, "items", {}, false, ["Chains of Asmodeus, page 271"]);
		}
		SetStringifieds("vars"); // Save the global variable to a field
	},
	toNotesPage : [{ // intentionally doesn't include a source
		name : "INFERNAL ITEM CORRUPTION",
		popupName : 'The "Infernal Item Corruption" rules from Chains of Asmodeus (page 271)',
		note : [
			"",
			"Cursed infernal items can be used by mortals, but they always require attunement. Once attuned, the mortal risks an increasing chance of being corrupted by the item., eventually transforming into a devil.",
			"   Mortals that receive express permission from Asmodeus, or that make an infernal contract to acquire a magic item, don't suffer these corrupting effects.",
			"",
			"1. STAGE ONE CORRUPTION: BEGINNINGS",
			"Once a character has attuned to a cursed infernal magic item or artifact, it begins the infernal corruption process. Each time that character finishes a long rest, they must make a DC 10 Wisdom save (tieflings have advantage on this save). On a success, the character suffers no effects, but the DC increases by 1 the next time they must make this save. On a failure, the character progresses to Stage Two unless Dispel Evil and Good is cast on them before their next long rest.",
			"   While in Stage One, the infernal corruption can be prevented by breaking attunement to the corrupting item. This prevents further Wisdom saves and resets the DC of the save, if the character were to attune to the item again.",
			"",
			"2. STAGE TWO CORRUPTION: SUFFERINGS",
			"While in Stage Two, the character becomes delusional, seeing plots against them where there are none. Additionally, each time they rest, they experience terrifying visions and infernal whispers. Whenever they finish a long rest, they take 1d12 necrotic damage, which ignores resistances and immunities and can't be healed until a Dispel Evil and Good or Remove Curse spell is cast on them. Once the character has taken this damage six times, they progress to Stage Three.",
			"   While in Stage Two, the infernal corruption can be removed with one of the following spells: Divine Word, Heal, Mass Heal, True Polymorph, True Resurrection, or Wish.",
			"\n3. STAGE THREE CORRUPTION: DEPARTINGS",
			"While in Stage Three, the character begins to suffer physical transformation, and slowly embraces evil. After they finish their first long rest upon entering Stage Three they must roll on the table below to determine how the infernal curse starts shaping them into a devil. In addition, a part-devil character is rendered infertile and detects as a Fiend to Detect Evil and Good spells and similar magic.",
			"",
			"   d10\tTransformation",
			"     1\tTheir fingertips elongate into claws",
			"     2\tNon-functional leathery wings sprout from their back",
			"     3\tDevilish horns grow upon their head",
			"     4\tEach night more and more of their skin burns, leaving charred patches",
			"     5\tOne eye turns milky white, the other turns yellow",
			"     6\tTheir spine painfully elongates into a skeletal tail",
			"     7\tTheir skin starts to calcify, turning portions into bone",
			"     8\tTheir feet painfully twist to resemble cloven hooves",
			"     9\tAll their hair falls out, replaced by tiny spikes",
			"   10\tAll their teeth fall out, with new jagged teeth tearing through the gums each morning",
			"",
			"The character begins to experience waking whispers pushing them towards evil and they suffer terrifying visions whenever they rest, breaking their spirit and pushing them further to evil. Each time they finish a short or long rest, they must make a DC 10 Wisdom save. If they performed at least one evil act, such as making a decision that increased the suffering of others, they make the save with disadvantage. When they fail the save, they progress to Stage Four.",
			"   While in Stage Three, the infernal corruption can be ended with one of the following spells: True Polymorph, True Resurrection or Wish.",
			"",
			"4. STAGE FOUR CORRUPTION: FINALITIES",
			"When the character finishes their first long rest after reaching Stage Four, the character's alignment shifts to lawful evil. They're now bound by the devil's code, requiring them to honor any pact made and acquire souls in service of Asmodeus. Lastly, their physical form changes, morphing to resemble a devil (DM's choice).",
			"   Once the character reaches Stage Four, the only two cures are the Wish spell, which counts as beyond the scope of the spell, or by signing an infernal contract with Asmodeus to reclaim their soul."
		].join("\n")
	}],
	description : "\n   " + toUni("Corrupting") + '. This item corrupts. See the "Infernal Item Corruption" rules (CoA 271).'
}

MagicItemsList["amulet of appearance"] = {
	name : "Amulet of Appearance",
	source : [["CoA", 267]],
	type : "wondrous item",
	rarity : "rare",
	attunement : true,
	description : "My equipment always shines as if just polished and my wounds do not appear to others. I'm immune to being frightened and poisoned. However, whenever I would otherwise be affected by these conditions, a random non-evil humanoid on the material plane whom I have met is affected instead. I know this.",
	descriptionFull : "Your armor, weapons, and other equipment always shine as if just polished. Even if you're wounded, your wounds do not appear to others. You're immune to the frightened and poisoned conditions, as these would otherwise ruin your elegant appearance. However, whenever you would otherwise have been affected by one of these conditions, a random non-evil Humanoid on the Material Plane whom you have previously met gets the condition instead. You know this.",
	savetxt : { immune : ["frightened", "poisoned"] }
}
MagicItemsList["amulet of betrayal"] = {
	name : "Amulet of Betrayal",
	source : [["CoA", 267]],
	type : "wondrous item",
	rarity : "very rare",
	attunement : true,
	description : "As a bonus action, I can move one of the following conditions from myself to an ally within 60 ft: blinded, deafened, frightened, poisoned, stunned, exhaustion. When transferring exhaustion, all my exhaustion levels are moved. If the chosen ally is immune to a transferred condition, the transfer fails.",
	descriptionFull : "You can use a bonus action to move one of the following conditions from yourself to an ally within 60 feet of you: blinded, deafened, frightened, poisoned, stunned, exhaustion. When transferring exhaustion, move all your exhaustion levels. If the chosen ally is immune to a transferred condition, the transfer fails.",
	action : [["bonus action", ""]]
}
MagicItemsList["amulet of duplicity"] = {
	name : "Amulet of Duplicity",
	source : [["CoA", 267]],
	type : "wondrous item",
	rarity : "very rare",
	attunement : true,
	cursed: true,
	description : "When I die, a copy of my naked corpse is left in my place while I'm brought to an extradimensional space. After 24 hours, I heal 1 hp and am brought back to the place I left, but with a different face. I have disadv. on Persuasion checks to reveal who I am. I can't relay this information and forget it when unattuning.",
	descriptionLong : "When I die, the amulet leaves a copy of my naked corpse in my place while I'm transported to an extradimensional space, stable at 0 hp. After 24 hours, I regain 1 hp and am returned to the place I left with different facial features. Only a Wish spell can restore my true identity. I have disadvantage on Charisma (Persuasion) checks to reveal myself. The amulet is cursed. Identifying it only shows it prevents death and one can't explain its power once attuned. When unattuned, one immediately forgets what the amulet does. A Remove Curse spell reveals the details of the curse but doesn't lift it from the amulet.",
	descriptionFull : "When you die, you're transported to an extradimensional space where you're stabilized at 0 hit points and kept in that state. The amulet creates a perfect copy of your corpse and places it where you were just before you died, but without any of your worn or carried items. After 24 hours, you regain 1 hit point and are returned to the location of your near-death. Everything about you is the same, except that your facial features are entirely different from before. Only a Wish spell can restore your true identity."+
	"\n   Until then, you have disadvantage on any Charisma (Persuasion) checks to attempt to reveal who you really are."+
	"\n   " + toUni("Curse") + ". An Identify spell or similar reveals only that the amulet can prevent death. Once you attune to the amulet, you can't describe its ability to any other creature, and if unattuned, you immediately forget what the amulet does. A Remove Curse spell reveals the details of the curse but does not remove it from the amulet."
}
MagicItemsList["bracers of asmodeus"] = {
	name : "Bracers of Asmodeus",
	source : [["CoA", 267]],
	type : "wondrous item",
	rarity : "rare",
	attunement : true,
	cursed: true,
	description : "These are cursed, corrupting, and give +2 AC while not wearing armor or using a shield. I can't unattune to them. They make me obsessed with scheming, manipulation, and always bartering for better deals, often using blackmail. If I decline an opportunity to make money at another's expense, I take 3d10 necrotic damage.",
	descriptionFull : "You have a +2 bonus to AC while wearing these bracers, if you do not wear armor or use a shield at the same time."+
	"\n   " + toUni("Curse") + ". While attuned to the bracers, you become obsessed with plotting, scheming, and manipulation. You always barter for better deals, often using secrets or leveraging other offers in the process. If you ever decline an opportunity to better yourself financially at another's expense, you immediately take 3d10 necrotic damage. Only the Remove Curse spell allows you to end attunement to this item."+
	CoA_Corruption.description,
	eval :       function() { CoA_Corruption.process(true,  "bracers of asmodeus") },
	removeeval : function() { CoA_Corruption.process(false, "bracers of asmodeus") },
	extraAC : [{
		mod : 2,
		magic : true,
		text : "I gain a +2 bonus to AC while I'm not wearing armor or using a shield.",
		stopeval : function (v) { return v.wearingArmor || v.usingShield; }
	}]
}
MagicItemsList["canian fork"] = {
	name : "Canian Fork",
	source : [["CoA", 267]],
	type : "weapon (trident)",
	rarity : "rare",
	attunement : true,
	cursed: true,
	description : "This magic, cursed, corrupting trident gives me +3 bonus to attack and damage rolls made with. I can't willing to part with it and can't unattune to it without Remove Curse. I'm vulnerable to radiant damage. When I receive magical healing I have to succeed on a DC 15 Con save or the healing has no effect.",
	descriptionFull : "You have a +3 bonus to attack and damage rolls made with this magic weapon. In addition, you can make one additional attack with it as a bonus action on each of your turns."+
	"\n   " + toUni("Curse") + ". You're unwilling to part with this weapon while attuned to it. You're also vulnerable to radiant damage and each time you receive magical healing, you must make a DC 15 Constitution saving throw."+
	"\n   On a failed save, the healing has no effect. Only the Remove Curse spell allows you to end attunement to this item."+
	CoA_Corruption.description,
	eval :       function() { CoA_Corruption.process(true,  "canian fork") },
	removeeval : function() { CoA_Corruption.process(false, "canian fork") },
	weight : 4,
	savetxt : { text : ["Vulnerable to radiant damage"] },
	action : [["bonus action", " attack"]],
	weaponsAdd : ["Canian Fork"],
	weaponOptions : [{
		baseWeapon : "trident",
		regExpSearch : /^(?=.*canian)(?=.*fork).*$/i,
		name : "Canian Fork",
		source : [["CoA", 267]],
		description : "Thrown, versatile (1d8); Bonus action: 1 attack",
		modifiers : [3, 3]
	}]
}
MagicItemsList["condensed order"] = {
	name : "Condensed Order",
	source : [["CoA", 267]],
	type : "wondrous item",
	rarity : "uncommon",
	description : "Once as an action, I can snuff this silvery powder extracted from those of a lawful persuasion, or administer it to another. The consumer is immune to the flesh warping feature of demonic ichor and gains advantage on saves against effects from a demonic source. These benefits last for 8 hours.",
	descriptionFull : "Condensed Order is a silvery powder that can be extracted from those of a lawful persuasion. Devils bound for the warfronts of Avernus take flasks and snuff boxes of the stuff to fortify themselves against exposure to the raw chaos of demons. Taking the substance requires an action and makes you immune to the flesh warping feature of demonic ichor. It also gives you advantage on saving throws against any effect from a demonic source. These benefits last for 8 hours."
}
MagicItemsList["demonbone polearm"] = {
	name : "Demonbone Polearm",
	nameTest : "Demonbone",
	source : [["CoA", 268]],
	type : "weapon (polearm)",
	rarity : "very rare",
	attunement : true,
	cursed: true,
	description : "As a reaction when damaged by a creature in reach, I can attack it once with this +2 polearm. It is cursed, I can't unattune to it and have disadv. with other weapons. If I take damage, I must make a DC 15 Wis save or go berserk: I attack those near to me until none remain in 60 ft or I'm calmed with a DC 15 Persuasion" + (typePF ? "." : "check."),
	descriptionLong : "I have a +2 bonus on attack and damage rolls made with this magic quarterstaff. As a reaction when I'm damaged by a creature in this weapon's reach, I can make one melee attack against it. This weapon is cursed, I'm unwilling to part with it, can't unattune to it without Remove Curse, and have disadvantage with other weapons. When I take damage, I must make a DC 15 Wisdom save or go berserk: I attack the nearest creature using this weapon with all my attacks, moving to the next nearest until none remain that I can sea or hear within 60 ft of me. I can also be calmed with a DC 15 Charisma (Persuasion) check.",
	descriptionFull : "You have a +2 bonus to attack and damage rolls made with this magic weapon. In addition, when you're damaged by a creature in reach, you may use your reaction to make one melee attack against it with this weapon."+
	"\n   " + toUni("Curse") + ". You're unwilling to part with this weapon while attuned to it. While attuned, you have disadvantage on attack rolls with weapons other than this one."+
	"\n   Whenever a hostile creature damages you, you must succeed on a DC 15 Wisdom saving throw or go berserk. While berserk, you must use your action on each of your turns to attack the creature nearest to you with the weapon. If you can make extra attacks as part of the Attack action, you use those extra attacks, moving to attack the next nearest creature after you fell your current target. If you have multiple possible targets, you attack one at random."+
	"\n   You're berserk until you start your turn with no creatures within 60 feet of you that you can see or hear. Alternatively, an ally can use an action to make a DC 15 Charisma (Persuasion) check and if successful, you're no longer berserk. Only the Remove Curse spell allows you to end attunement to this item."+
	CoA_Corruption.description,
	eval :       function() { CoA_Corruption.process(true,  "demonbone polearm") },
	removeeval : function() { CoA_Corruption.process(false, "demonbone polearm") },
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "suffix",
		descriptionChange : ["replace", "polearm"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /\b(polearm|glaive|halberd|lance|pike|quarterstaff|spear)\b/i;
			return !testRegex.test(inObjKey) && (!inObj.baseWeapon || !testRegex.test(inObj.baseWeapon));
		}
	},
	calcChanges : {
		atkCalc : [
			function (fields, v, output) {
				var testRegex = /\b(polearm|glaive|halberd|lance|pike|quarterstaff|spear)\b/i;
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/demonbone/i).test(v.WeaponTextName) && (testRegex.test(v.thisWeapon[0]) || ( v.theWea.baseWeapon && testRegex.test(v.theWea.baseWeapon) ))) {
					output.magic = v.thisWeapon[1] + 2;
				}
			},
			'If I include the word "Demonbone" in a the name of a polearm, it will be treated as the magic weapon Demonbone Polearm. It adds +2 to hit and damage, can be used as a reaction when I\'m damaged by a creature within reach to attack them, an is cursed causing me to go beserk when I\'m damaged.'
		]
	},
	action : [["reaction", " (when damaged)"]]
}
MagicItemsList["gauntlets of rage"] = {
	name : "Gauntlets of Rage",
	source : [["CoA", 268]],
	type : "wondrous item",
	rarity : "rare",
	attunement : true,
	prerequisite : "Requires attunement by a bard, sorcerer, warlock, or wizard",
	prereqeval : function(v) { return classes.known.bard || classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false; },
	description : "The first melee weapon attack I make after a short rest sends me into a fury for 1 minute. I can't cast spells or speak, am immune to charmed and frightened, and when I deal damage, I heal 2d8 hp and end this fury or one condition. Also, I can use a spell slot before a melee attack for +1d6 necrotic damage per spell level.",
	descriptionLong : "I gain the power of never-ending fury. The first melee weapon attack I make after I finish a short or long rest automatically send me into a special fury for 1 minute. While furious, I can't cast spells, can't verbally communicate, and am immune to the charmed and frightened conditions. Each time I deal damage, I regain 2d8 hit points and may immediately remove a condition I currently suffer from or end this fury. Also, while in this fury, I may spend a spell slot before I make a melee attack. Doing so causes the attack to deal an extra 1d6 necrotic damage per level of spell slot expended, if it hits.",
	descriptionFull : "You gain the power of never-ending fury. After you make a melee weapon attack, you automatically enter a special fury for 1 minute. While furious, you can't cast spells, can't verbally communicate, and are immune to the charmed and frightened conditions. Each time you deal damage, you regain 2d8 hit points and may immediately remove a condition you currently suffer from or end this fury. Additionally, while in this fury, you may spend a spell slot before you make a melee attack. Doing so causes the attack to deal an extra 3 (1d6) necrotic damage per level of spell slot expended, if the attack hits. Once used you may not use this fury again until you finish a short or long rest.",
	usages : 1,
	recovery : "short rest",
	savetxt : { text : ["Immune to charmed and frightened in fury"] }
}
MagicItemsList["infernal amulet"] = {
	name : "Infernal Amulet",
	source : [["CoA", 268]],
	type : "wondrous item",
	rarity : "rare",
	attunement : true,
	cursed: true,
	description : "While wearing this amulet, I can use it as a spellcasting focus for my spells, and it grants a +2 bonus to my spell save DC and spell attack bonus. It is cursed and corrupting. I'm unwilling to part with it and require Remove Curse to unattune to it. It gives me disadvantage on Strength saving throws and Strenght checks.",
	descriptionFull : "While wearing this amulet, you can use it as a spellcasting focus for your spells, and it grants a +2 bonus to your spell save DC and spell attack bonus."+
	"\n   " + toUni("Curse") + ". You're unwilling to part with this amulet while attuned to it and you wear it always. While wearing the amulet you have disadvantage on Strength saving throws and Strength checks. Only the Remove Curse spell allows you to remove the item and end attunement."+
	CoA_Corruption.description,
	eval :       function() { CoA_Corruption.process(true,  "infernal amulet") },
	removeeval : function() { CoA_Corruption.process(false, "infernal amulet") },
	calcChanges : {
		spellCalc : [
			function (type, spellcasters, ability) {
				if (type != "prepare") return 2;
			},
			"While wearing the Infernal Amulet my spell save DC and spell attack bonus each increase by 2."
		]
	},
	advantages : [["Athletics", false], ["Strength", false]]
}
if (typePF) MagicItemsList["infernal amulet"].savetxt = { text : ["Disadv. on Str saves/checks"] }
MagicItemsList["infernal plate armor"] = {
	name : "Infernal Plate Armor",
	source : [["CoA", 268]],
	type : "armor (plate)",
	rarity : "very rare",
	attunement : true,
	cursed: true,
	description : "While wearing this armor, I gain a +2 bonus to AC. This armor is cursed and corrupting. I can't take it off or unattune to it without Remove Curse. It makes me vulnerable to the following damage types: force, lightning, psychic, radiant, and thunder.",
	descriptionFull : "While wearing this armor, you gain a +2 bonus to AC."+
	"\n   " + toUni("Curse") + ". Once you wear this armor, and are attuned to it, you can't remove it. Only the Remove Curse spell allows you to end the attunement and finally doff it. While wearing the armor, you're vulnerable to the following damage types: force, lightning, psychic, radiant, and thunder."+
	CoA_Corruption.description,
	eval :       function() { CoA_Corruption.process(true,  "infernal plate armor") },
	removeeval : function() { CoA_Corruption.process(false, "infernal plate armor") },
	weight : 65,
	armorAdd : "Infernal Plate Armor",
	armorOptions : [{
		regExpSearch : /^(?=.*infernal)(?=.*plate).*$/i,
		name : "Infernal Plate Armor",
		source : [["CoA", 268]],
		type : "heavy",
		ac : "18+2",
		stealthdis : true,
		weight : 65,
		strReq : 15
	}],
	savetxt : { text : ["Vulnerable to force, lightning, psychic, radiant, and thunder damage"] },
}
MagicItemsList["knife of stolen resistance"] = {
	name : "Knife of Stolen Resistance",
	source : [["CoA", 268]],
	type : "weapon (dagger)",
	rarity : "rare",
	description : "As an action once per long rest, I can use this knife to carve a single infernal rune into the flesh of an unconscious Beast, Celestial, Dragon, Fey, or Giant. Over the next 10 minutes the creature dies in agony, only Wish can stop this. If the creature has any resistances or immunities, I gain those while its dying.",
	descriptionFull : "Using an action, you carve a single infernal rune into the flesh of an unconscious Beast, Celestial, Dragon, Fey, or Giant with this knife. Over the next 10 minutes the creature dies an agonizing death that can't be prevented short of the Wish spell. If the creature has any resistances or immunities, you gain those resistances and immunities until the creature dies or a Wish spell is used to save the creature. The knife's power can't be used again until you finish a long rest.",
	weight : 1,
	action : [["action", ""]],
	usages : 1,
	recovery : "long rest",
	weaponsAdd : ["Knife of Stolen Resistance"],
	weaponOptions : [{
		baseWeapon : "dagger",
		regExpSearch : /^(?=.*knife)(?=.*stolen)(?=.*resistance).*$/i,
		name : "Knife of Stolen Resistance",
		source : [["CoA", 268]]
	}]
}
MagicItemsList["ring of collecting"] = {
	name : "Ring of Collecting",
	source : [["CoA", 268]],
	type : "ring",
	rarity : "very rare",
	attunement : true,
	description : "As an action once per dawn, I can use this ring to cast Tiny Hut. As a bonus action, I can disintegrate an up to Medium sized, nonmagical piece of art within 60 ft. That art now appears inside the tiny hut, vanishing forever if removed from it. For every 1000 gp of art added, the tiny hut get +1 ft radius and lasts +1 hour.",
	descriptionLong : "As an action once per dawn, I can use this ring to cast Leomund's Tiny Hut. As a bonus action, I can use this ring to disintegrate an up to Medium sized, nonmagical piece of art (drawing, painting, or sculpture) within 60 ft. That art now appears inside the tiny hut, for me to appreciate whenever I desire. If I try to remove this art from the tiny hut, it vanishes forever. I can steadily improve this space, but only by denying such beauty from the rest of the world. For every 1000 gp of art acquired, the tiny hut increases in size by adding +1 ft to its radius and lasts +1 hour.",
	descriptionFull : "While wearing this ring you can use it to cast the Leomund's Tiny Hut spell as an action. Once this property is used, it can't be used again until the next dawn. Additionally, as a bonus action, you can use the ring to disintegrate any nonmagical piece of art (drawing, painting, or sculpture) within 60 feet that is no larger than Medium-sized. That art now appears inside the tiny hut, for you to appreciate whenever you desire. If you try to remove this art from the tiny hut, it vanishes forever. You can steadily improve this space, but only by denying such beauty to the rest of the world. For every 1,000 gp of art acquired, the tiny hut increases in size by adding another foot to its radius and lasts one additional hour.",
	spellcastingBonus : [{
		name : "Once per dawn",
		spells : ["leomund's tiny hut"],
		selection : ["leomund's tiny hut"],
		firstCol : "oncelr"
	}],
	spellChanges : {
		"leomund's tiny hut" : {
			time : "1 a",
			duration : "8h+1h/1k gp",
			description : "10ft+1ft/1000 gp rad immobile dome of force; 9 Medium crea; blocks magic; ends if I leave; see book",
			changes : "Using the Ring of Collecting, I can cast Leomund's Tiny Hut as an action instead of taking 1 minute. Once this property is used, it can't be used again until the next dawn. For every 1000 gp of art acquired, the tiny hut increases in size by adding +1 ft to its radius and lasts +1 hour."
		}
	},
	usages : 1,
	recovery : "dawn",
	additional : "Leomund's Tiny Hut",
	action : [["bonus action", " (steal art)"]]
}
MagicItemsList["ring of the copycat"] = {
	name : "Ring of the Copycat",
	source : [["CoA", 268]],
	type : "ring",
	rarity : "legendary",
	attunement : true,
	description : "As a reaction when an ally within 60 ft casts a spell, I can cast it as well as long as I can't normally cast it and it requires 10 gp or less material components. The cloned spell uses the original caster's abilities, originates from me and I choose its targets, but my ally can't cast this spell again until they finish a long rest.",
	descriptionFull : "You gain the ability to channel energy from allies to cast spells, even if you normally can't. When an ally within 60 feet of you casts a spell that you normally can't cast and that requires 10 gp or fewer in material components, you may use a reaction to cast that spell. When cast in this way, the spell is cast using your ally's spellcasting ability, spell save DC, and spell attack bonus, as needed. You decide this cloned spell's target, as specified in the spell's description, and the spell originates from you. After you use this ability, your ally can't cast this spell again until they finish a long rest.",
	action : [["reaction", ""]]
}
MagicItemsList["ring of treachery"] = {
	name : "Ring of Treachery",
	source : [["CoA", 269]],
	type : "ring",
	rarity : "very rare",
	attunement : true,
	description : "This ring has 3 charges, which are restored whenever I finish a long rest. As a reaction when I am damaged, I can expend one charge to transfer that damage to a random creature (allies included) within 60 ft of me.",
	descriptionFull : "This ring has 3 charges. While wearing this ring, when you're damaged, you may use a reaction to expend a charge and transfer that damage to a random creature (which could include an ally) within 60 feet. All charges are restored when you finish a long rest.",
	action : [["reaction", " (when damaged)"]],
	usages : 3
}
MagicItemsList["sage's mirror"] = {
	name : "Sage's Mirror",
	source : [["CoA", 269]],
	type : "wondrous item",
	rarity : "rare",
	description : "This mirror has 3 charges, regaining all at dusk. As an action, I can expend 1 charge to cast either Find the Path or Legend Lore. With each use, it is apparent that the information gleaned from the mirror comes from a chamber in the Nine Hells where sages and scholars are tortured for the answers to each question.",
	descriptionFull : "This item has 3 charges and regains all charges at dusk. You can use an action and expend 1 of the mirror's charges to cast one of the following spells:"+
	"\n \u2022 Find the Path"+
	"\n \u2022 Legend Lore"+
	"\n   With each use, it is apparent that the information gleaned from the mirror comes from a chamber in the Nine Hells where sages and scholars are tortured for the answers to each question.",
	usages : 3,
	recovery : "Dusk",
	spellFirstColTitle : "Ch",
	spellcastingBonus : [{
		name : "1 charge",
		spells : ["find the path", "legend lore"],
		selection : ["find the path", "legend lore"],
		firstCol : 1,
		times : 2
	}],
	spellChanges : {
		"find the path" : {
			time : "1 a",
			changes : "Using the Sage's Mirror, I can cast Find the Path as an action when I expend one of its charges."
		},
		"legend lore" : {
			time : "1 a",
			changes : "Using the Sage's Mirror, I can cast Legend Lore as an action when I expend one of its charges."
		}
	}
}
MagicItemsList["skull of selfish knowledge"] = {
	name : "Skull of Selfish Knowledge",
	source : [["CoA", 269]],
	type : "wondrous item",
	rarity : "rare",
	attunement : true,
	description : "As an action, I can make this magical skull devour a nonmagical book, map, or scroll. Once devoured, the learning is forever available to me, but I can never write the information down or communicate it to others. It is for me alone.",
	descriptionFull : "You may use an action to make the magical skull devour a nonmagical book, map, or scroll. Once devoured the learning is forever available to you, but you can never write the information down or communicate it to others. It is for you alone.",
	action : [["action", ""]]
}
if (!MagicItemsList["soul coin"]) {
	var DiA_soulCoinFullDescription = [
		"Soul coins are about 5 inches across and about 1 inch thick, minted from infernal iron. Each coin weighs one-third of a pound, and is inscribed with Infernal writing and a spell that magically binds a single soul to the coin. Because each soul coin has a unique soul trapped within it, each has a story. A creature might have been imprisoned as a result of defaulting on a deal, while another might be the victim of a night hag's curse.",
		">>Carrying Soul Coins<<. To hold a soul coin is to feel the soul bound within it\u2014overcome with rage or fraught with despair.",
		"An evil creature can carry as many soul coins as it wishes (up to its maximum weight allowance). A non-evil creature can carry a number of soul coins equal to or less than its Constitution modifier without penalty. A non-evil creature carrying a number of soul coins greater than its Constitution modifier has disadvantage on its attack rolls, ability checks, and saving throws.",
		">>Using a Soul Coin<<. A soul coin has 3 charges. A creature carrying the coin can use its action to expend 1 charge from a soul coin and use it to do one of the following:",
		"\u2022 >>Drain Life<<. You siphon away some of the soul's essence and gain 1d10 temporary hit points.",
		"\u2022 >>Query<<. You telepathically ask the soul a question and receive a brief telepathic response, which you can understand. The soul knows only what it knew in life, but it must answer you truthfully and to the best of its ability. The answer is no more than a sentence or two and might be cryptic.\n",
		">>Freeing a Soul<<. Casting a spell that removes a curse on a soul coin frees the soul trapped within it, as does expending all of the coin's charges. The coin itself rusts from within and is destroyed once the soul is released. A freed soul travels to the realm of the god it served or the outer plane most closely tied to its alignment (DM's choice). The souls of lawful evil creatures released from soul coins typically emerge from the River Styx as lemure devils.",
		"A soul can also be freed by destroying the coin that contains it. A soul coin has AC 19, 1 hit point for each charge it has remaining, and immunity to all damage except that which is dealt by a hellfire weapon or an infernal war machine's furnace.",
		"Freeing a soul from a soul coin is considered a good act, even if the soul belongs to an evil creature.",
		">>Hellish Currency<<. Soul coins are a currency of the Nine Hells and are highly valued by devils. The coins are used among the infernal hierarchy to barter for favors, bribe the unwilling, and reward the faithful for services rendered.",
		"Soul coins are created by Mammon and his greater devils on Minauros, the third layer of the Nine Hells, in a vast chamber where the captured souls of evil mortals are bound into the coins. These coins are then distributed throughout the Nine Hells to be used for goods and services, infernal deals, dark bargains, and bribes."
	];
	MagicItemsList["soul coin"] = {
		name : "Soul Coin",
		source : [["DiA", 225], ["CoA", 269]],
		type : "wondrous item",
		rarity : "uncommon",
		description : "Each coin traps a unique soul, whose rage or despair is felt by me while I hold it. A coin has 3 charges. As an action, I can expend 1 charge to either siphon the soul's essence to grant me 1d10 temporary HP or telepathically ask the soul a question which it must answer truthfully. See \"Notes\" page for more.",
		descriptionFull : DiA_soulCoinFullDescription.join("\n   ").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
		toNotesPage : [{
			name : "Features",
			note : desc(DiA_soulCoinFullDescription).replace(/>>(.*?)<</g, function(a, match) { return match.toUpperCase(); }).replace(/your/g, "my").replace(/you are /ig, "I am ").replace(/(answer) you/ig, "$1 me").replace(/you /ig, "I ")
		}],
		weight : 0.3,
		usages : 3,
		recovery : "Never",
		action : [["action", ""]]
	}
}
MagicItemsList["stygian spear"] = {
	name : "Stygian Spear",
	source : [["CoA", 270]],
	type : "weapon (spear or javelin)",
	rarity : "very rare",
	attunement : true,
	cursed: true,
	description : "This +2 weapon deals +1d6 damage when thrown. It returns to my hand immediately after it hits or misses. It is cursed and corrupting. I'm unwilling to part with it, require Remove Curse to unattune, and have disadv. with other weapons. On a 1 to hit, I attack the closest ally with adv. and deal +2d6 poison damage.",
	descriptionFull : "You have a +2 bonus to attack and damage rolls made with this magic weapon. When you throw it, it deals one extra die of damage on a hit. After you throw it and it hits or misses, it flies back to your hand immediately."+
	"\n   " + toUni("Curse") + ". You're unwilling to part with this weapon while attuned to it. In addition, you have disadvantage on attack rolls made with weapons other than this one."+
	"\n   Whenever you roll a 1 on an attack roll using this weapon, your target changes to your closest ally."+
	"\n   If there are multiple allies, randomly determine which is the target. Make a new attack roll with advantage against your ally. If the attack hits, in addition to the standard damage you deal an extra 2d6 poison damage. Only the Remove Curse spell allows you to end attunement to this item."+
	CoA_Corruption.description,
	eval :       function() { CoA_Corruption.process(true,  "stygian spear") },
	removeeval : function() { CoA_Corruption.process(false, "stygian spear") },
	choices : ["Javelin", "Spear"],
	"javelin" : {
		name : "Stygian Javelin",
		description : "This +2 javelin deals +1d6 damage when thrown. It returns to my hand immediately after it hits or misses. It is cursed and corrupting. I'm unwilling to part with it, require Remove Curse to unattune, and have disadv. with other weapons. On a 1 to hit, I attack the closest ally with adv. and deal +2d6 poison damage.",
		descriptionLong : "I have a +2 bonus to attack and damage rolls made with this magic javelin. When I throw it, it deals one extra die of damage on a hit and it flies back to my hand immediately after it hits or misses. It is cursed and corrupting. I'm unwilling to part with it, require Remove Curse to unattune to it, and gives me disadvantage on attacks with other weapons. Whenever I roll a 1 on an attack roll using this weapon, I instead attack my closest ally. I make a new attack roll with advantage against my ally and if it hits, this weapon deals an extra +2d6 poison damage. If there are multiple allies, randomly determine the target.",
		weaponsAdd : ["Stygian Javelin"],
		weaponOptions : [{
			baseWeapon : "javelin",
			regExpSearch : /^(?=.*stygian)(?=.*javelin).*$/i,
			name : "Stygian Javelin",
			source : [["CoA", 270]],
			description : "Returning, thrown; Thrown: +1d6 damage; On 1: adv. attack ally \u0026 +2d6 poison damage",
			modifiers : [2,2]
		}],
		weight : 2
	},
	"spear" : {
		name : "Stygian\u200A Spear",
		description : "This +2 spear deals +1d6 damage when thrown. It returns to my hand immediately after it hits or misses. It is cursed and corrupting. I'm unwilling to part with it, require Remove Curse to unattune, and have disadv. with other weapons. On a 1 to hit, I attack the closest ally with adv. and deal +2d6 poison damage.",
		descriptionLong : "I have a +2 bonus to attack and damage rolls made with this magic spear. When I throw it, it deals one extra die of damage on a hit and it flies back to my hand immediately after it hits or misses. It is cursed and corrupting. I'm unwilling to part with it, require Remove Curse to unattune to it, and gives me disadvantage on attacks with other weapons. Whenever I roll a 1 on an attack roll using this weapon, I instead attack my closest ally. I make a new attack roll with advantage against my ally and if it hits, this weapon deals an extra +2d6 poison damage. If there are multiple allies, randomly determine the target.",
		weaponsAdd : ["Stygian Spear"],
		weaponOptions : [{
			baseWeapon : "spear",
			regExpSearch : /^(?=.*stygian)(?=.*spear).*$/i,
			name : "Stygian Spear",
			source : [["CoA", 270]],
			description : "Returning, thrown, versatile (1d8); Thrown: +1d6 damage; On 1: adv. attack ally \u0026 +2d6 poison damage",
			modifiers : [2,2]
		}],
		weight : 3
	}
}
MagicItemsList["sword of retribution"] = {
	name : "Sword of Retribution",
	nameTest : "of Retribution",
	source : [["CoA", 270]],
	type : "weapon (any sword)",
	rarity : "very rare",
	attunement : true,
	cursed: true,
	description : "Damage from this +3 sword can be regained only through resting. It is cursed and corrupting. I'm unwilling to part with it, require Remove Curse to unattune, and have disadv. with other weapons. After a long rest, I must make a DC 11 Con save or only get the benefits of a short rest due to nightmares.",
	descriptionLong : "I gain a +3 bonus to attack and damage rolls made with this sword. Hit points lost to this weapon's damage can be regained only through a short or long rest, rather than by regeneration, magic, or any other means. It is cursed and corrupting. I'm unwilling to part with it, require Remove Curse to unattune to it, and gives me disadvantage on attacks with other weapons. When I sleep, I experience nightmares of the past of the vengeful spirit possessing the sword, culminating in its death. After a long rest, I must make a DC 11 Constitution saving throw or only gain the benefits of a short rest.",
	descriptionFull : "You gain a +3 bonus to attack and damage rolls made with this sword. Hit points lost to this weapon's damage can be regained only through a short or long rest, rather than by regeneration, magic, or any other means."+
	"\n   " + toUni("Curse") + ". You're unwilling to part with this weapon while attuned to it. While attuned to this weapon, you also have disadvantage on attack rolls made with weapons other than this one."+
	"\n   The vengeful spirit possessing the sword shares its history and lust for vengeance with the wielder. After each successful long rest, you experience nightmares of the spirit's past, culminating in its death. When you wake, you must make a DC 11 Constitution saving throw. On a failed save, you only gain the benefits of a short rest. Only the Remove Curse spell allows you to end attunement to this item."+
	CoA_Corruption.description,
	eval :       function() { CoA_Corruption.process(true,  "sword of retribution") },
	removeeval : function() { CoA_Corruption.process(false, "sword of retribution") },
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
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/of retribution/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'Only rest heals this damage; Cursed';
				}
			},
			'If I include the words "of Retribution" in the name of a sword, it will be treated as the magic weapon Sword of Retribution. It gives a +3 bonus to attack and damage. Damage it deals can\'t be healed except by resting, and it also bears a curse.'
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/of retribution/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					output.magic = v.thisWeapon[1] + 3;
				}
			}, ''
		]
	}
}
var CoA_VialOfGreed = [
	"This small glass vial can stockpile resources for use in the future. Once stored, resources last for 1 century before vanishing. As an action you make the vial store any number of the following resources, which are magically consumed and converted into a violet-colored liquid:",
	"\u2022 Up to 31 days of food and/or drink. The flavors are lost, instead becoming tasteless.",
	"\u2022 Up to 7 days of alcohol. The flavors are lost, instead becoming tasteless.",
	"\u2022 Up to 5 magic scrolls that affect a single creature. The target of the spell is you, and if the spell requires concentration, you can concentrate.",
	"\u2022 Up to 5 magic potions. No more than 2 duplicate potions can be stored at a time.",
	"You may have more than one kind of resource in the vial, up to the limits expressed above. You can use a bonus action to consume one day of food (or alcohol) or activate one scroll or magic potion. If activating a magic scroll, the effects of that scroll must end before you can activate another scroll from the Vial of Greed."
];
MagicItemsList["vial of greed"] = {
	name : "Vial of Greed",
	source : [["CoA", 270]],
	type : "wondrous item",
	rarity : "rare",
	attunement : true,
	description : "As an action, I can have this small glass vial magically store: food and drink (up to 31 days), alcohol (up to 7 days), magic scrolls that affect 1 creature (up to 5), and magic potions (up to 5, no 3 can be the same). As a bonus action, I can use or consume one of those stored, but the food, drink and alcohol is tasteless.",
	descriptionFull : CoA_VialOfGreed.join("\n   "),
	toNotesPage : [{
		name : "Vial of Greed Features",
		note : desc(CoA_VialOfGreed).replace(/is you/ig, "is me").replace(/you /ig, "I ")
	}],
	action : [
		["action", "Store in Vial of Greed"],
		["bonus action", "Use from Vial of Greed"]
	]
}
MagicItemsList["weapon of agonizing paralysis"] = {
	name : "Weapon of Agonizing Paralysis",
	nameTest : "of Agonizing Paralysis",
	source : [["CoA", 271]],
	type : "weapon (any melee)",
	rarity : "very rare",
	attunement : true,
	description : "This magic weapon has a +3 bonus to hit and damage. When it reduces a creature to 0 hp, they don't die but are instead healed to 1 hp and paralyzed. While paralyzed, infernal runes appear as if carved into their flesh and at the start of each of their turns they suffer immense pain and gain a level of exhaustion.",
	descriptionFull : "You have a +3 bonus to attack and damage rolls made with this magic weapon. When this weapon reduces a creature to 0 hit points, the creature doesn't die. Instead, infernal runes appear as if carved into their flesh and they're healed to 1 hit point. They now have the paralyzed condition until the condition is removed by a Lesser Restoration spell or similar magic. When the condition is removed, the runes disappear. At the start of each of their turns while they're paralyzed, the creature suffers immense pain and gains a level of exhaustion.",
	allowDuplicates : true,
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "prefix",
		excludeCheck : function (inObjKey, inObj) {
			return /melee/i.test(inObj.range);
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && /^(?=.*agonizing)(?=.*paralysis).*$/i.test(v.baseWeaponName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'At 0 hp: paralyzed not dead';
				}
			},
			'If I include the words "of Agonizing Paralysis" in a the name of a melee weapon, it will be treated as the magic weapon Weapon of Agonizing Paralysis. It has +3 to hit and damage and when it brings a target to 0 hp, they are healed to 1 hp and paralyzed.'
		],
		atkCalc : [
			function (fields, v, output) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && /^(?=.*agonizing)(?=.*paralysis).*$/i.test(v.baseWeaponName)) {
					v.theWea.isMagicWeapon = true;
					output.magic = v.thisWeapon[1] + 3;
				}
			}, ''
		]
	}
}
