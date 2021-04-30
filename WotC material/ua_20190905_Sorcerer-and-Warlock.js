var iFileName = "ua_20190905_Sorcerer-and-Warlock.js";
RequiredSheetVersion(13);
// This file adds the content from the Unearthed Arcana: Sorcerer and Warlock article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:SnW"] = {
	name : "Unearthed Arcana: Sorcerer and Warlock",
	abbreviation : "UA:SnW",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2019/dnd/downloads/UA-AberrantLurk.pdf",
	date : "2019/09/05"
};

// Add a subclasses for the Sorcerer and one for the Warlock
// Both contain work by /u/KaydeArcane
var UA_abberantMindExtraSpell = ["arms of hadar", "dissonant whispers", "calm emotions", "detect thoughts", "hunger of hadar", "sending", "compulsion", "evard's black tentacles", "modify memory", "rary's telepathic bond"];
AddSubClass("sorcerer", "aberrant mind-ua", {
	regExpSearch : /^(?=.*aberrant)(?=.*mind).*$/i,
	subname : "Aberrant Mind",
	source : ["UA:SnW", 1],
	spellcastingExtra : UA_abberantMindExtraSpell,
	spellcastingExtraApplyNonconform : true,
	features : {
		"subclassfeature1" : {
			name : "Invasive Thoughts",
			source : ["UA:SnW", 1],
			minlevel : 1,
			description : desc([
				"As a bonus action, I can telepathic link myself with a creature within 30 ft that I can see",
				"This lasts for 10 minutes, until I'm incapacitated or die, or I use this ability again",
				"I can telepathically talk with the target; It can speak back if it understands a language"
			]),
			action : [["bonus action", ""]]
		},
		"subclassfeature1.1" : {
			name : "Psionic Spells",
			source : ["UA:SnW", 1],
			minlevel : 1,
			description : "\n   I learn additional spells, which do not count towards the number of spell I can know"
		},
		"subclassfeature1.2" : {
			name : "Warped Being",
			source : ["UA:SnW", 1],
			minlevel : 1,
			description : "\n   My aberrant origin gives me an AC of 13 + my Dex mod when I am not wearing armor",
			armorOptions : {
				regExpSearch : /^(?=.*warped)(?=.*being).*$/i,
				name : "Warped Being",
				source : ["UA:SnW", 1],
				ac : 13
			},
			armorAdd : "Warped Being"
		},
		"subclassfeature6" : {
			name : "Psionic Sorcery",
			source : ["UA:SnW", 2],
			minlevel : 6,
			description : desc([
				"I can expend sorcery points instead of a spell slot to cast a spell from my Psionic Spells",
				"This costs the spell's level in sorcery points, but the spell requires no other components"
			]),
			spellFirstColTitle : "SP",
			spellChanges : function () {
				var fullReObj = {};
				UA_abberantMindExtraSpell.map(function (s) {
					var spObj = SpellsList[s] ? SpellsList[s] : { level : 1 };
					fullReObj[s] = {
						firstCol : spObj.level,
						compMaterial : (spObj.compMaterial ? spObj.compMaterial + "\n" : "") + "If I cast this spell by expending Sorcery Points, it doesn't require any components",
						changes : "I can cast this spell by expending a number of Sorcery Points equal to its level instead of expending a spell slot. When I do so, the spell doesn't require any components."
					}
				})
				return fullReObj;
			}()
		},
		"subclassfeature6.1" : {
			name : "Psychic Defenses",
			source : ["UA:SnW", 2],
			minlevel : 6,
			description : "\n   I gain resistance to psychic damage and adv. on saves vs. being charmed or frightened",
			dmgres : ["Psychic"],
			savetxt : { adv_vs : ["charmed", "frightened"] }
		},
		"subclassfeature14" : {
			name : "Revelation in Flesh",
			source : ["UA:SnW", 2],
			minlevel : 14,
			description : desc([
				"As a bonus action, I can expend 1 or more sorcery points to transform for 1 minute",
				"For each sorcery point used, I gain one of the following benefits of my choice:",
				"\u2022 I gain a swimming speed equal to my walking speed and the ability to breathe water",
				"\u2022 I gain a flying speed equal to my walking speed and I can hover",
				"\u2022 I can move, with equipment, through any space as narrow as 1 inch without squeezing",
				"  I can spend 5 ft of movement to escape form a grapple or from nonmagical restraints",
				"\u2022 I am aware of the location of any hidden/invisible creatures within 60 ft of me"
			]),
			action : [["bonus action", ""]],
			additional : "1+ sorcery points"
		},
		"subclassfeature18" : {
			name : "Warp Reality",
			source : ["UA:SnW", 2],
			minlevel : 18,
			description : desc([
				"As an action, I can radiate a 20-ft radius aura of difficult terrain for 1 minute",
				"Creatures that start their turn within the aura take 2d10 psychic damage",
				"When creating it, I can choose any creatures I can see to be unaffected by this aura",
				"As a bonus action, I can end this aura to teleport myself and others away",
				"I teleport myself and any creature in the aura to a location I can see within 1 mile",
				"An unwilling creature can succeed on a Charisma saving throw to avoid being teleported"
			]),
			action : [["action", " (create)"], ["bonus action", " (end)"]],
			recovery : "long rest",
			usages : 1
		}
	}
});
AddSubClass("warlock", "the lurker in the deep-ua", {
	regExpSearch : /^(?=.*warlock)(?=.*lurker)(?=.*(deep|depth)).*$/i,
	subname : "the Lurker in the Deep",
	source : ["UA:SnW", 2],
	spellcastingExtra : ["create or destroy water", "thunderwave", "gust of wind", "shatter", "lightning bolt", "sleet storm", "control water", "evard's black tentacles", "commune with nature", "cone of cold"],
	features : {
		"subclassfeature1" : {
			name : "Grasp of the Deep",
			source : ["UA:SnW", 3],
			minlevel : 1,
			description : desc([
				"As a bonus action, I can summon or move a spectral tentacle and make an attack with it",
				"I can summon it to a space within 60 ft that I can see or move an existing one 30 ft",
				"I make melee spell attacks with 10 ft reach with it that deal cold or lightning damage",
				"Creatures hit by the tentacle suffer 10 ft speed reduction until the start of my next turn",
				"The 10-ft long tentacle lasts for 1 minute or until I summon another"
			]),
			action : [["bonus action", " (summon/move)"]],
			recovery : "long rest",
			additional : levels.map(function (n) {
				return (n < 10 ? 1 : 2) + "d8";
			}),
			usages : "Cha mod per ",
			usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
			weaponOptions : [{
				regExpSearch : /^((?=.*grasp)(?=.*deep)|(?=.*spectral)(?=.*tentacle)).*$/i,
				name : "Grasp of the Deep",
				source : ["UA:SnW", 3],
				ability : 6,
				type : "Spell",
				damage : [1, 8, "Cold/Lightning"],
				range : "Melee (10 ft)",
				description : "My choice of cold or lightning damage; Target -10 ft speed until my next turn starts",
				abilitytodamage : false,
				litdGraspOfTheDeep : true
			}],
			weaponsAdd : ['Grasp of the Deep'],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.theWea.litdGraspOfTheDeep && classes.known.warlock.level >= 10) {
							fields.Damage_Die = '2d8';
						};
					}
				]
			}
		},
		"subclassfeature1.1" : {
			name : "Scion of the Deep",
			source : ["UA:SnW", 3],
			minlevel : 1,
			description : desc([
				"I can communicate telepathically with any aberration, beast, elemental, or monstrosity",
				"The creature must be within 120 ft of me and have an innate swimming speed"
			])
		},
		"subclassfeature6" : {
			name : "Fathomless Soul",
			source : ["UA:SnW", 3],
			minlevel : 6,
			description : " [cold resistance]\n   I have a swimming speed equal to my walking speed; I can breathe both air and water",
			dmgres : ["Cold"],
			speed : { swim : { spd : "walk", enc : "walk" } }
		},
		"subclassfeature6.1" : {
			name : "Guardian Grasp",
			source : ["UA:SnW", 3],
			minlevel : 6,
			description : desc([
				"As a reaction when a creature in 10 ft of my tentacle takes damage, I can have it help",
				"One creature takes only half damage and my spectral tentacle vanishes"
			]),
			action : [["reaction", ""]]
		},
		"subclassfeature10" : {
			name : "Devouring Maw",
			source : ["UA:SnW", 3],
			minlevel : 10,
			description : desc([
				"As an action, I can summon a 10-ft radius translucent maw within 60 ft for 1 minute",
				"Creatures in the maw as it appear must Str save or be restrained, can repeat as action",
				"Creatures starting their turn in the maw take 3d6 cold or lightning damage (my choice)",
				"If a creature is in the maw at the start of my turn, I gain my warlock level in temp HP"
			]),
			action : [["action", ""]],
			additional : levels.map(function (n) {
				return n < 10 ? "" : n + " temp HP";
			}),
			recovery : "short rest",
			usages : 1
		},
		"subclassfeature14" : {
			name : "Unleash the Depths",
			source : ["UA:SnW", 4],
			minlevel : 14,
			description : desc([
				"As an action, I can choose one of the following effects to occur within 30 ft of me:",
				"\u2022 Teleport myself and up to 5 willing creatures I can see within 30 ft of the chosen point",
				"  The destination must be within 100 miles and visited by me within the last 24 hours",
				"\u2022 5 creatures within 30 ft of the chosen point that I can see are attacked by tentacles",
				"  The targets take 6d10 cold or lightning damage (my choice) and are knocked prone",
				"  Each can make a Dexterity save to halve the damage and avoid being knocked prone"
			]),
			action : [["action", ""]],
			recovery : "long rest",
			usages : 1
		}
	}
});

// Add a new cantrip and its weaponlist entry
SpellsList["mind sliver-ua"] = {
	name : "Mind Sliver",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["UA:SnW", 4], ["UA:FRnW", 7]],
	level : 0,
	school : "Ench",
	time : "1 a",
	range : "60 ft",
	components : "V",
	duration : "1 rnd",
	save : "Int",
	description : "1 crea save or 1d6 Psychic dmg, -1d4 on first save before my turn ends; +1d6 at CL 5, 11, and 17",
	descriptionCantripDie : "1 crea save or `CD`d6 Psychic dmg and subtract 1d4 from first saving throw before my turn ends",
	descriptionFull : "You drive a disorienting spike of psychic energy into the mind of one creature you can see within range. The target must make an Intelligence saving throw. Unless the saving throw is successful, the target takes 1d6 psychic damage, and the first time it makes a saving throw before the end of your next turn, it must roll a d4 and subtract the number rolled from the save.\n   This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
};
WeaponsList["mind sliver-ua"] = {
	regExpSearch : /^(?=.*mind)(?=.*sliver).*$/i,
	name : "Mind Sliver",
	source : [["UA:SnW", 4], ["UA:FRnW", 7]],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 6, "psychic"],
	range : "60 ft",
	description : "1 creature Int save, success - no damage, fail - also -1d4 on first save before my next turn ends",
	abilitytodamage : false,
	dc : true
};
