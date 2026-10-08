if (sheetVersion < 24001000) { throw "This add-on script was made for a newer version of the sheet (v24.1.0). Please use the latest version and try again.\n\nYou can get the different versions at www.flapkan.com.\n\nFrom v24.0.0 onwards, the sheet uses the 2024 (5.5e) rules, while lower versions use the 5e (2014) rules."; };
var iFileName = "all_WotC_2024_pub+legacy.js";
RequiredSheetVersion("24.1.0");

// pub_20240917_PHB.js
// This file adds material from the 2024 Player's Handbook that isn't in the SRD v5.2.1 to MPMB's Character Record Sheet for 5.5e

/* Star characters that work well on the sheet
 https://symbl.cc/en/unicode-table/#dingbats
 ★  "\u2605"	Star (five-point)			Monk
 ✦  "\u2726"	Four-point star
 ✱  "\u2731"	Heavy Asterisk (very similar to six-point star at a distance)
 ✶  "\u2736"	Six-point star				Sorcerer
 ✸  "\u2738"	Heavy Eight-point star		Wizard
 ❋  "\u274B"	Heavy Eight Teardrop-Spoked Propeller Asterisk
 ✽  "\u273D"	Heavy Teardrop-Spoked Asterisk	Ranger
 ♥  "\u2665"	Heart Suit
 ♦  "\u2666"	Diamond Suit
 ♪  "\u266A"	Eight Note					Bard
 */

// Define the source
SourceList["PHB24"] = {
	name: "2024 Player's Handbook",
	abbreviation: "PHB'24",
	abbreviationSpellsheet: "PH",
	group: "Primary Sources",
	url: "https://marketplace.dndbeyond.com/core-rules/3709000",
	date: "2024/09/17",
};

// Barbarian Subclasses
AddSubClass("barbarian", "wild heart", {
	regExpSearch: /^(?=.*barbarian)(?=.*wild)(?=.*heart).*$/i,
	subname: "Path of the Wild Heart",
	subnameShort: "Wild Heart",
	source: [["PHB24", 55]],
	abilitySave: 5,
	features: {
		"subclassfeature3": {
			name: "Animal Speaker",
			source: [["PHB24", 55]],
			minlevel: 3,
			description: levels.map(function (n) {
				return n < 14 ? desc("I can cast *Beast Sense* and *Speak with Animals* using Wisdom, but only as Rituals.") : " [*Beast Sense* \x26 *Speak with Animals* as Ritual]";
			}),
			spellcastingBonus: [{
				name: "Animal Speaker",
				spells: ["beast sense", "speak with animals"],
				selection: ["beast sense", "speak with animals"],
				times: 2,
				firstCol: SpellRitualTag,
				spellcastingAbility: 5,
			}],
		},
		"subclassfeature3.1": {
			name: "Rage of the Wilds",
			source: [["PHB24", 55]],
			minlevel: 3,
			description: desc([
				"Whenever I enter Rage, I can gain one of the following benefits during that Rage.",
				" \u2022 ***Bear***. Resistance to all damage types except Force, Necrotic, Psychic, and Radiant.",
				" \u2022 ***Eagle***. Can Disengage or Dash when entering Rage. As Bonus Action, take both actions.",
				" \u2022 ***Wolf***. Allies have Advantage on attack rolls against any enemy within 5 ft of me.",
			]),
		},
		"subclassfeature6": {
			name: "Aspect of the Wilds",
			source: [["PHB24", 55]],
			minlevel: 6,
			description: ' #[Select option with "Choose Feature"]#' + desc('Use the "Choose Feature" button to select which aspect (Owl, Panther, or Salmon) is currently active and automated, or select to show all of them but have none of them added to the automation.'),
			choices: ["Owl", "Panther", "Salmon", "show all (bonuses not automated)"],
			"owl": {
				name: "Owl Aspect of the Wilds",
				description: desc([
					"I have Darkvision 60 ft. If I already have Darkvision, its range increases with 60 ft instead.",
					"After I finish a Long Rest, I can switch to: ***Panther*** (Climb Speed) or ***Salmon*** (Swim Speed).",
				]),
				vision: [["Darkvision", "fixed 60"], ["Darkvision", "+60"]],
			},
			"panther": {
				name: "Panther Aspect of the Wilds",
				description: desc([
					"I have a Climb Speed equal to my Speed.",
					"After I finish a Long Rest, I can switch to: ***Owl*** (+60 ft Darkvision) or ***Salmon*** (Swim Speed).",
				]),
				speed: { climb: { spd: "walk", enc: "walk" } },
			},
			"salmon": {
				name: "Salmon Aspect of the Wilds",
				description: desc([
					"I have a Swim Speed equal to my Speed.",
					"After I finish a Long Rest, I can switch to: ***Owl*** (+60ft Darkvision) or ***Panther*** (Climb Speed).",
				]),
				speed: { swim: { spd: "walk", enc: "walk" } },
			},
			"show all (bonuses not automated)": {
				name: "Aspect of the Wilds",
				description: desc("I gain one option, which I can change when I finish a Long Rest. ***Owl***. +60 ft Darkvision. ***Panther***. Climb Speed equal to my Speed. ***Salmon***. Swim Speed equal to my Speed."),
			},
		},
		"subclassfeature10": {
			name: "Nature Speaker",
			source: [["PHB24", 55]],
			minlevel: 10,
			description: levels.map(function (n) {
				return n < 10 ? "" : n < 14 ? desc("I can cast *Commune with Nature* using Wisdom, but only as a Ritual.") : " [*Commune with Nature* as Ritual]";
			}),
			spellcastingBonus: [{
				name: "Nature Speaker",
				spells: ["commune with nature"],
				selection: ["commune with nature"],
				firstCol: SpellRitualTag,
			}],
		},
		"subclassfeature14": {
			name: "Power of the Wilds",
			source: [["PHB24", 55]],
			minlevel: 14,
			description: " [choose one benefit per Rage]" + desc([
				" \u2022 ***Falcon***. I have a Fly Speed equal to my Speed if I'm not wearing any armor.",
				" \u2022 ***Lion***. Any enemy within 5 ft of me has Disadvantage on attacks against others than me.",
				" \u2022 ***Ram***. When I hit a Large or smaller creature with a melee attack, I can knock it Prone.",
			]),
		},
	},
});
AddSubClass("barbarian", "world tree", {
	regExpSearch: /^(?=.*barbarian)((?=.*world)(?=.*tree)|(?=.*yggdrasil)).*$/i,
	subname: "Path of the World Tree",
	subnameShort: "World Tree",
	source: [["PHB24", 56]],
	features: {
		"subclassfeature3": {
			name: "Vitality of the Tree",
			source: [["PHB24", 56]],
			minlevel: 3,
			description: levels.map(function (n) {
				var rageDamage = n < 9 ? 2 : n < 16 ? 3 : 4;
				return desc("When I enter Rage, I gain " + n + " Temp HP (level). At the start of my turn while in Rage, I can give another within 10 ft " + rageDamage + "d6 Temp HP (1d6 per Rage damage) until my Rage ends.");
			}),
			additional: levels.map(function (n) {
				return n < 3 ? "" : "me " + n + ", others " + (n < 9 ? 2 : n < 16 ? 3 : 4) + "d6 Temp HP";
			}),
		},
		"subclassfeature6": {
			name: "Branches of the Tree",
			source: [["PHB24", 56]],
			minlevel: 6,
			description: desc("As a Reaction while in Rage when a creature I can see starts its turn within 30 ft, I can have it make a Strength save or teleport it to the empty space of my choice nearest to me that I can see. After it teleports, I can reduce its Speed to 0 until the end of its turn."),
			action: [["reaction", " (in Rage)"]],
			additional: "DC 8 + Str mod + Prof Bonus",
		},
		"subclassfeature10": {
			name: "Battering Roots",
			source: [["PHB24", 56]],
			minlevel: 10,
			description: desc("On my turn, I have +10 ft reach with Heavy and Versatile melee weapons. With those, I can use the Push or Topple mastery in addition to a different mastery I'm using with it."),
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (v.isMeleeWeapon && /heavy|versatile/i.test(fields.Description)) {
							var text = "+10 ft reach on my turn";
							if (!/\b(topple|push)\b/i.test(fields.Description)) {
								text = "Push or Topple; " + text;
							} else if (!/\bpush\b/i.test(fields.Description)) {
								text = "Push; " + text;
							} else if (!/\btopple\b/i.test(fields.Description)) {
								text = "Topple; " + text;
							}
							fields.Description += (fields.Description ? "; " : "") + text;
						}
					},
					"Heavy and Versatile melee weapons get the Push and Topple masteries added to their description if they don't already have it. With those weapons, I have +10 ft reach on my turn.",
				],
			},
		},
		"subclassfeature14": {
			name: "Travel along the Tree",
			source: [["PHB24", 56]],
			minlevel: 14,
			description: desc("When I enter Rage and as a Bonus Action during, I can teleport up to 60 ft to an empty space I can see. Once per Rage, I can teleport up to 150 ft and bring along up to 6 willing creatures within 10 ft, who each arrive in an empty space of my choice within 10 ft of " + (typePF ? "where I arrive." : "me.")),
			action: [["bonus action", " (in Rage)"]],
			usages: 1,
			recovery: "Rage",
			additional: "150 ft \x26 bring 6",
		},
	},
});
AddSubClass("barbarian", "zealot", {
	regExpSearch: /zealot/i,
	subname: "Path of the Zealot",
	subnameShort: "Zealot",
	fullname: "Zealot",
	source: [["PHB24", 57]],
	features: {
		"subclassfeature3": {
			name: "Divine Fury",
			source: [["PHB24", 57]],
			minlevel: 3,
			description: levels.map(function (n) {
				return desc("While in Rage, the first creature I hit with a weapon or Unarmed Strike on my turn takes +1d6 + " + Math.floor(n / 2) + " (half level) Necrotic or Radiant damage; I choose the type each time.");
			}),
			additional: levels.map(function (n) {
				return n < 3 ? "" : "+1d6 + " + Math.floor(n / 2) + " damage";
			}),
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						var lvl = classes.known.barbarian ? classes.known.barbarian.level : false;
						if (lvl && (v.isWeapon || v.baseWeaponName === "unarmed strike") && /\brage\b/i.test(v.WeaponTextName)) {
							fields.Description += (fields.Description ? "; " : "") + "1/turn +1d6+" + Math.floor(lvl / 2) + " Necrotic/Radiant dmg";
						}
					},
					"",
				],
			},
		},
		"subclassfeature3.1": {
			name: "Warrior of the Gods",
			source: [["PHB24", 57]],
			minlevel: 3,
			description: desc("As a Bonus Action, I can expend dice from my pool of d12s to regain HP equal to their roll."),
			usages: levels.map(function (n) {
				return n < 3 ? "" : (n < 6 ? 4 : n < 12 ? 5 : n < 17 ? 6 : 7) + "d12 per ";
			}),
			recovery: "Long Rest",
			action: [["bonus action", ""]],
		},
		"subclassfeature6": {
			name: "Fanatical Focus",
			source: [["PHB24", 57]],
			minlevel: 6,
			description: levels.map(function (n) {
				var rageDamageBonus = n < 9 ? 2 : n < 16 ? 3 : 4;
				return n < 6 ? "" : desc("Once per Rage, I can reroll a failed save with a +" + rageDamageBonus + " (Rage damage), but must use the result.");
			}),
			additional: levels.map(function (n) {
				var rageDamageBonus = n < 9 ? 2 : n < 16 ? 3 : 4;
				return n < 6 ? "" : "reroll save with +" + rageDamageBonus;
			}),
			usages: "1\xD7 each ",
			recovery: "Rage",
		},
		"subclassfeature10": {
			name: "Zealous Presence",
			source: [["PHB24", 57]],
			minlevel: 10,
			description: desc("As a Bonus Action, I can give up to 10 creatures of my choice within 60 ft Adv on attacks and saves until my next turn starts. I can expend a use of Rage to restore use of this action."),
			usages: 1,
			recovery: "Long Rest",
			altResource: "Rage",
			action: [["bonus action", ""]],
		},
		"subclassfeature14": {
			name: "Rage of the Gods",
			source: [["PHB24", 57]],
			minlevel: 14,
			description: levels.map(function (n) {
				return n < 14 ? "" : desc("When I enter Rage, I can gain benefits for 1 minute or until I'm at 0 HP. ***Fly Speed*** equal to my Speed. ***Resistance*** to Necrotic, Psychic, and Radiant. ***Revivification***. As a Reaction when a creature within 30 ft drops to 0 HP, I can expend a Rage use to give it " + n + " HP (level).");
			}),
			usages: 1,
			recovery: "Long Rest",
			action: [["reaction", " (Revivification)"]],
		},
	},
});

// Bard Subclasses
AddSubClass("bard", "dance", {
	regExpSearch: /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*dance).*$/i,
	subname: "College of Dance",
	subnameShort: "Dance",
	source: [["PHB24", 64]],
	features: {
		"subclassfeature3": {
			name: "Dazzling Footwork",
			source: [["PHB24", 64]],
			minlevel: 3,
			description: desc([
				"While I'm not wearing armor or wielding a Shield, I gain the following benefits.",
				"***Dance Virtuoso***. I have Advantage on any Charisma (Performance) checks involving dancing.",
				"***Unarmored Defense***. My AC is 10 + Dexterity modifier + Charisma modifier.",
				"***Agile Strikes***. When I use Bardic Inspiration as part of an action, Bonus Action, or Reaction, I can make one Unarmed Strike as part of that action, Bonus Action, or Reaction.",
				"***Bardic Damage***. My Unarmed Strikes can use Dexterity and deal damage equal to my BID.",
			]),
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						var n = classes.known.bard ? classes.known.bard.level : false;
						if (n && v.baseWeaponName.indexOf("unarmed strike") !== -1) {
							// Set the ability to the highest of Str and Dex, if currently one of those or lower than Str or Dex
							if (fields.Mod === 1 || fields.Mod === 2 || What(AbilityScores.abbreviations[fields.Mod - 1] + " Mod") < What(AbilityScores.abbreviations[v.StrDex - 1] + " Mod")) {
								fields.Mod = v.StrDex;
							}
							// Improve the damage die if there is one and the Bardic Inspiration Die is better
							var bardInspDie = n < 5 ? 6 : n < 10 ? 8 : n < 15 ? 10 : 12;
							var rxDice = /(\d+)d?(\d*)/;
							if (rxDice.test(fields.Damage_Die)) {
								var curDie = fields.Damage_Die.match(rxDice);
								var curDieSize = Math.max(Number(curDie[1]), 1) * Math.max(Number(curDie[2]), 1);
								if (curDieSize < bardInspDie) {
									fields.Damage_Die = fields.Damage_Die.replace(curDie[0], "1d" + bardInspDie);
								}
							}
						}
					},
					"Unarmed Strikes can use Dexterity and deal Bardic Inspiration Die damage.",
				],
			},
			armorOptions: [{
				regExpSearch: /justToAddToDropDownAndAffectWildShape/,
				name: "Unarmored Defense (Cha)",
				source: [["PHB24", 64]],
				ac: "10+Cha",
				affectsWildShape: true,
				selectNow: true,
			}],
		},
		"subclassfeature6": {
			name: "Inspiring Movement",
			source: [["PHB24", 64]],
			minlevel: 6,
			description: desc("As a Reaction when an enemy I can see ends its turn within 5 ft, I can expend a use of Bardic Inspiration to move up to half my Speed without provoking Opportunity Attacks. Then one ally of my choice within 30 ft can do the same with their Reaction."),
			additional: "1 Bardic Inspiration",
			action: [["reaction", " (1 BID)"]],
		},
		"subclassfeature6.1": {
			name: "Tandem Footwork",
			source: [["PHB24", 64]],
			minlevel: 6,
			description: desc("When I roll Initiative and I'm not Incapacitated, I can expend and roll one Bardic Inspiration Die and add it to the Initiative of every ally within 30 ft that can see or hear me."),
			additional: "1 Bardic Inspiration",
		},
		"subclassfeature14": {
			name: "Leading Evasion",
			source: [["PHB24", 65]],
			minlevel: 14,
			description: " [if not Incapacitated]" + desc([
				"When I make a Dex save to halve damage, I instead take none if I succeed and half if I fail.",
				"I can share this benefit with creatures within 5 ft making the same save.",
			]),
			savetxt: { text: ["**Dex Save for Half**. *Failure:* half dmg, *Success:* no dmg"] },
		},
	},
});
AddSubClass("bard", "glamour", {
	regExpSearch: /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*glamour).*$/i,
	subname: "College of Glamour",
	subnameShort: "Glamour",
	source: [["PHB24", 65]],
	features: {
		"subclassfeature3": {
			name: "Beguiling Magic",
			source: [["PHB24", 65]],
			minlevel: 3,
			description: desc("Immediately after I use a spell slot to cast an Enchantment or Illusion spell, I can have a creature I can see within 60 ft make a Wisdom save or be either Charmed or Frightened for 1 minute, repeating the save as each of its turns end. I can expend a Bardic Inspiration Die to restore use of this feature. I always have *Charm Person* and *Mirror Image* prepared."),
			usages: 1,
			recovery: "Long Rest",
			altResource: "BID",
			spellcastingBonus: [{
				name: "Beguiling Magic",
				spells: ["charm person", "mirror image"],
				selection: ["charm person", "mirror image"],
				times: 2,
				firstCol: "markedbox",
			}],
		},
		"subclassfeature3.1": {
			name: "Mantle of Inspiration",
			source: [["PHB24", 65]],
			minlevel: 3,
			description: desc([
				"As a Bonus Action, I can expend and roll a Bardic Inspiration Die to grant other creatures within 60 ft of me Temporary Hit Points equal to twice the number rolled, and then each can use its Reaction to move up to its Speed without provoking Opportunity Attacks.",
				"I can choose up to my Charisma modifier (minimum 1) number of creatures to affect.",
			]),
			additional: levels.map(function (n) {
				var bardInspDie = n < 5 ? 6 : n < 10 ? 8 : n < 15 ? 10 : 12;
				return n < 3 ? "" : "1 BID; 1d" + bardInspDie + " \xD7 2 Temp HP";
			}),
			action: [["bonus action", ""]],
		},
		"subclassfeature6": {
			name: "Mantle of Majesty",
			source: [["PHB24", 65]],
			minlevel: 6,
			description: desc("As a Bonus Action, I can take on an unearthly appearance for 1 minute, requiring Concentration. When I do so and as a Bonus Action during, I can cast *Command* without using a spell slot. Creatures Charmed by me automatically fail their save against it. I can expend a level 3+ spell slot (SS 3+) to restore use of this. I always have *Command* prepared."),
			usages: 1,
			recovery: "Long Rest",
			altResource: "SS 3+",
			spellcastingBonus: [{
				name: "Mantle of Majesty",
				spells: ["command"],
				selection: ["command"],
				firstCol: "markedbox",
			}],
			action: [["bonus action", ""]],
		},
		"subclassfeature14": {
			name: "Unbreakable Majesty",
			source: [["PHB24", 66]],
			minlevel: 14,
			description: desc([
				"As a Bonus Action, I can gain a majestic presence for 1 minute or until I'm Incapacitated.",
				"While active, whenever any creature hits me with an attack roll for the first time on a turn, it has to make a Charisma save or miss instead.",
			]),
			usages: 1,
			recovery: "Short Rest",
			action: [["bonus action", ""]],
		},
	},
});
AddSubClass("bard", "valor", {
	regExpSearch: /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*valor).*$/i,
	subname: "College of Valor",
	subnameShort: "Valor",
	source: [["PHB24", 67]],
	attacks: [1, 1, 1, 1, 2],
	features: {
		"subclassfeature3": {
			name: "Combat Inspiration",
			source: [["PHB24", 67]],
			minlevel: 3,
			description: desc([
				"A creature that has a Bardic Inspiration Die (BID) from me can use it in one of these ways.",
				"***Defense***. As a Reaction when hit by an attack, it can add the BID to " + (typePF ? "its " : "") + "AC against that attack.",
				"***Offense***. After it hits with an attack roll, it can add the BID to that attack's damage.",
			]),
		},
		"subclassfeature3.1": {
			name: "Martial Training",
			source: [["PHB24", 67]],
			minlevel: 3,
			description: desc([
				"I have proficiency with Martial weapons, Medium armor, and Shields.",
				"I can use a Simple or Martial weapon as a Spellcasting Focus for my Bard spells.",
			]),
			armorProfs: [false, true, false, true],
			weaponProfs: [false, true],
		},
		"subclassfeature6": {
			name: "Extra Attack",
			source: [["PHB24", 67]],
			minlevel: 6,
			description: desc([
				"I can attack twice instead of once when I take the Attack action on my turn.",
				"I can cast a cantrip with a casting time of one action in place of one of those attacks.",
			]),
			action: [["action", "1 Attack and cast Cantrip"]],
		},
		"subclassfeature14": {
			name: "Battle Magic",
			source: [["PHB24", 67]],
			minlevel: 14,
			description: desc("As a Bonus Action after I cast a spell that takes an action, I can make one weapon attack."),
			action: [["bonus action", "Weapon attack (after cast spell)"]],
		},
	},
});

// Cleric subclasses
AddSubClass("cleric", "light", {
	regExpSearch: /^(?=.*(cleric|priest|clergy|acolyte))(?=.*\b(light|sun|shining)\b).*$/i,
	subname: "Light Domain",
	source: [["PHB24", 74]],
	features: {
		"subclassfeature3": {
			name: "Radiance of the Dawn",
			source: [["PHB24", 74]],
			minlevel: 3,
			description: levels.map(function (n) {
				return desc(
					"As a Magic action, I can use 1 CD and my Holy Symbol to emit a 30-ft Emanation of light that dispels magical Darkness within. Creatures of my choice in that area take 2d10 + " + n + " (Cleric level) Radiant damage. They can make a Constitution save to halve the damage."
				);
			}),
			spellcastingExtra: ["burning hands", "faerie fire", "scorching ray", "see invisibility", "daylight", "fireball", "arcane eye", "wall of fire", "flame strike", "scrying"],
			additional: levels.map(function (n) {
				return n < 3 ? "" : "1 Channel Divinity; 2d10+" + n;
			}),
			action: [["action", " (Channel Divinity)"]],
		},
		"subclassfeature3.1": { // includes Improved Warding Flame
			name: "Warding Flame",
			source: [["PHB24", 74]],
			minlevel: 3,
			description: levels.map(function (n) {
				return desc(n < 6 ?
					"As a Reaction when a creature that I can see within 30 ft makes an attack, I can impose Disadvantage on the roll, causing light to flare before it hits or misses."
					:
					"As a Reaction when a creature that I can see within 30 ft makes an attack, I can impose Disadvantage on the roll and grant its target 2d6 + my Wisdom modifier Temporary HP."
				);
			}),
			action: [["reaction", ""]],
			usages: "Wisdom modifier per ",
			usagescalc: "event.value = Math.max(1, What('Wis Mod'));",
			recovery: levels.map(function (n) {
				return n < 3 ? "" : n < 6 ? "Long Rest" : "Short Rest";
			}),
		},
		"subclassfeature6": {
			name: "Improved Warding Flame",
			source: [["PHB24", 75]],
			minlevel: 6,
			description: " [see Warding Flame]",
		},
		"subclassfeature17": {
			name: "Corona of Light",
			source: [["PHB24", 75]],
			minlevel: 17,
			description: desc([
				"As a Magic action, I can emit sunlight for 1 minute or until I dismiss it (no action).",
				"This sunlight is 60-ft radius Bright Light and 30 ft Dim Light beyond that.",
				"Enemies in the Bright Light have Disadvantage on their saving throws against my Radiance of the Dawn and any spell that deals Fire or Radiant damage.",
			]),
			action: [["action", ""]],
			usages: "Wisdom modifier per ",
			usagescalc: "event.value = Math.max(1, What('Wis Mod'));",
			recovery: "Long Rest",
		},
	},
});
AddSubClass("cleric", "trickery", {
	regExpSearch: /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(trickery|trickster|illusion)).*$/i,
	subname: "Trickery Domain",
	source: [["PHB24", 75]],
	features: {
		"subclassfeature3": {
			name: "Blessing of the Trickster",
			source: [["PHB24", 75]],
			minlevel: 3,
			description: desc("As a Magic action, I can give myself or an ally within 30 ft Advantage on Dexterity (Stealth) checks until I finish a Long Rest or use this feature again."),
			spellcastingExtra: ["charm person", "disguise self", "invisibility", "pass without trace", "hypnotic pattern", "nondetection", "confusion", "dimension door", "dominate person", "modify memory"],
			action: [["action", ""]],
		},
		"subclassfeature3.1": { // includes Trickster's Transposition and Improved Duplicity
			name: "Invoke Duplicity",
			source: [["PHB24", 75]],
			minlevel: 3,
			description: levels.map(function (n) {
				var txt = [
					"As a Bonus Action, I can expend a Channel Divinity to create a perfect visual illusionary duplicate of myself (VID) in an unoccupied space that I can see within 30 ft.",
					"The VID is intangible, doesn't occupy its space, is animated, and mimics my expressions and gestures. The VID lasts for 1 minute or until I dismiss it (no action) or I'm Incapacitated.",
					" \u2022 ***Cast Spells***. I can cast spells as though I were in the VID's space, but use my own senses.",
					" \u2022 ***Distract***. When both I and the ID are within 5 ft of a creature that can see the ID, I have Advantage on attack rolls against the creature.",
					" \u2022 ***Move***. As a Bonus Action, I can move the VID up to 30 ft to an unoccupied space I can see within 120 ft.",
				];
				if (n >= 6) { // Trickster's Transposition
					txt[0] = "As a Bonus Action, I can expend 1 CD to create a visual illusionary duplicate of myself (VID) in an empty space that I can see within 30 ft. I can then teleport, swapping places with it.";
					txt[4] = txt[4].slice(0, -1) + " and, optionally, teleport to swap places with it.";
				}
				if (n >= 17) { // Improved Duplicity
					txt.splice(3, 1);
					txt = txt.concat([
						" \u2022 ***Shared Distraction***. Allies and I have Adv on attacks vs creatures within 5 ft of the VID.",
						" \u2022 ***Healing Illusion***. When the VID ends, I or another within 5 ft of it heals "  + n  + " HP (" + (typePF ? "Cleric " : "") + "level).",
					]);
				}
				return desc(txt);
			}),
			additional: "1 Channel Divinity",
			action: [["bonus action", " (1 CD/move)"]],
		},
		"subclassfeature6": {
			name: "Trickster's Transposition",
			source: [["PHB24", 76]],
			minlevel: 6,
			description: " [swap with VID, see above]" + desc(
				"Whenever I create or move the VID, I can teleport, swapping places with the VID."
			),
		},
		"subclassfeature17": {
			name: "Improved Duplicity",
			source: [["PHB24", 76]],
			minlevel: 17,
			description: " [improves Invoke Duplicity]",
		},
	},
});
AddSubClass("cleric", "war", {
	regExpSearch: /^(?=.*(cleric|priest|clergy|acolyte))(?=.*\b(war|fighting|conflict)\b).*$/i,
	subname: "War Domain",
	source: [["PHB24", 76]],
	features: {
		"subclassfeature3": {
			name: "Guided Strike",
			source: [["PHB24", 77]],
			minlevel: 3,
			description: desc("When I or a creature within 30 ft misses an attack, I can use 1 CD to give a +10 bonus to the roll, potentially causing it to hit. I must take a Reaction to use feature this on another."),
			spellcastingExtra: ["guiding bolt", "shield of faith", "magic weapon", "spiritual weapon", "crusader's mantle", "spirit guardians", "fire shield", "freedom of movement", "hold monster", "steel wind strike"],
			additional: "1 Channel Divinity",
			action: [["reaction", " on other (CD)"]],
		},
		"subclassfeature3.1": {
			name: "War Priest",
			source: [["PHB24", 77]],
			minlevel: 3,
			description: desc("As a Bonus Action, I can make one attack with a weapon or an Unarmed Strike."),
			action: [["bonus action", ""]],
			usages: "Wisdom modifier per ",
			usagescalc: "event.value = Math.max(1, What('Wis Mod'));",
			recovery: "Short Rest",
		},
		"subclassfeature6": {
			name: "War God's Blessing",
			source: [["PHB24", 77]],
			minlevel: 6,
			description: desc([
				"I can cast *Shield of Faith* or *Spiritual Weapon* by expending 1 CD instead of a spell slot.",
				"When I cast either spell this way, it doesn't require Concentration and lasts for 1 minute or until I cast it again, become Incapacitated, or die.",
			]),
			additional: "1 Channel Divinity",
			spellcastingBonus: [{
				name: "War God's Blessing",
				spells: ["shield of faith", "spiritual weapon"],
				selection: ["shield of faith", "spiritual weapon"],
				times: 2,
				firstCol: "CD",
			}],
			spellChanges: {
				"shield of faith": {
					duration: "1 min/recast",
					changes: "Using War God's Blessing, I can cast this spell by expending a Channel Divinity instead of a spell slot. When cast this way, the spell doesn't require Concentration and lasts for 1 minute or until I cast it again, become Incapacitated, or die.",
				},
				"spiritual weapon": {
					duration: "1 min/recast",
					changes: "Using War God's Blessing, I can cast this spell by expending a Channel Divinity instead of a spell slot. When cast this way, the spell doesn't require Concentration, is cast at its lowest level, and lasts for 1 minute or until I cast it again, become Incapacitated, or die.",
					allowUpCasting: false,
				},
			},
		},
		"subclassfeature17": {
			name: "Avatar of Battle",
			source: [["PHB24", 77]],
			minlevel: 17,
			description: desc("I gain Resistance to Bludgeoning, Piercing, and Slashing damage."),
			dmgres: ["Bludgeoning", "Piercing", "Slashing"],
		},
	},
});

// Druid Subclasses
AddSubClass("druid", "moon", {
	regExpSearch: /^(?=.*druid)((?=.*\bmoon\b)|((?=.*\bmany\b)(?=.*\bforms?\b))).*$/i,
	subname: "Circle of the Moon",
	subnameShort: "Moon",
	source: [["PHB24", 86]],
	features: {
		"subclassfeature3": {
			name: "Circle Forms",
			source: [["PHB24", 86]],
			minlevel: 3,
			description: desc("The max CR for my Wild Shape forms is my Druid level divided by 3. While in WS, my AC can be 13 + my Wisdom modifier. I gain 3\xD7 my Druid level in temp HP when I shape-shift."),
			wildshapePageInfo: {
				duration: ClassList.druid.features["wild shape"].wildshapePageInfo.duration,
				knownForms: ClassList.druid.features["wild shape"].wildshapePageInfo.knownForms,
				tempHP: levels.map(function (n) {
					return n < 3 ? n : n * 3;
				}),
				limitations: levels.map(function (n) {
					var CR = n < 3 ? "1/4" : Math.floor(n / 3);
					return n < 8 ? "max CR " + CR + ", no Fly Speed" : "CR " + CR + " or lower";
				}),
			},
			"wild shape rules": {
				name: "Circle Forms Wild Shape Rules",
				source: [["PHB24", "80-86"]],
				extraname: "Moon 3",
				description: levels.map(function (n) {
					if (n < 3) return "";
					var tempHP = n * 3;
					var duration = Math.floor(n / 2) + " hour" + (n > 3 ? "s" : "");
					var knownForms = n < 4 ? 4 : n < 8 ? 6 : 8;
					var CR = Math.floor(n / 3);
					var canFly = n < 8 ? "can't" : "can";
					return desc([
						"As a Bonus Action, I can expend a Wild Shape (WS) use to shape-shift into a known Beast form and gain **" + tempHP + " Temp HP** (3\xD7 Druid level). I stay in that form for **" + duration + "** (half Druid level), until I use Wild Shape again, end it as a Bonus Action, become Incapacitated, or die.",
						"I know **" + knownForms + " forms** of **max CR " + CR + "** (one-third Druid level) that **" + canFly + " have a Fly Speed**. " + (typePF ? "Whenever I finish" : "After") + " a Long Rest, I can change one known form for another eligible Beast form.",
						"In Wild Shape, I use the Beast's stats, but retain my type, HP, HD, Int, Wis, Cha, feats, class features, and ability to speak. I retain my skill and save proficiencies with my Prof Bonus and gain the beast's, using its bonus if higher. My AC is 13 + Wisdom modifier, unless the Beast's AC is higher. I can't cast spells except my Circle of the Moon Spells, but shape-shifting doesn't break concentration. I choose what equipment falls to the ground, merges, or stays worn.",
						"Use the Wild Shape page to track known forms and their stats.",
					]);
				}),
			},
			autoSelectExtrachoices: [{
				extrachoice: "wild shape rules",
			}],
			eval: function () {
				// Remove the Wild Shape Rules set by the default Wild Shape feature so they can be replaced by the ones from this feature
				ClassFeatureOptions(["druid", "wild shape", "wild shape rules", true], "remove");
			},
			removeeval: function (lvlA) {
				// Return the Wild Shape Rules from the default Wild Shape feature as the ones from this feature are removed, but the new level is still 2 or higher
				if (lvlA[1] >= 2) ClassFeatureOptions(["druid", "wild shape", "wild shape rules", true], "add");
			},
			calcChanges: {
				wildshapeCallback: [
					function (prefix, fieldNo, oWildshape, sCrea) {
						oWildshape.acOptions.push({
							name: "Circle of the Moon: Circle Forms",
							ac: "13+Wis",
						});
					},
					"While in Wild Shape, my AC equals 13 plus my Wisdom modifier if that total is higher than the Beast's AC.",
				],
			},
		},
		"subclassfeature3.1": {
			name: "Circle of the Moon Spells",
			source: [["PHB24", 86]],
			minlevel: 3,
			description: desc("I always have these spells prepared and can cast them even when I'm in a Wild Shape form."),
			spellcastingExtra: ["starry wisp", "cure wounds", "moonbeam", "conjure animals", "fount of moonlight", "mass cure wounds"],
		},
		"subclassfeature6": {
			name: "Improved Circle Forms",
			source: [["PHB24", 87]],
			minlevel: 6,
			description: desc("While in Wild Shape form, I gain ***Lunar Radiance***: my attacks can deal Radiant damage, and ***Increased Toughness***: I add my Wisdom modifier to my Constitution saving throws."),
			calcChanges: {
				wildshapeCallback: [
					function (prefix, fieldNo, oWildshape, sCrea) {
						oWildshape.save.Con.creature.bonus += "+Wis";
						if (!classes.known.druid) return;
						var regularLunarRadiance = classes.known.druid.level < 14;
						oWildshape.wildshapeTraits.push({
							name: "Lunar Radiance",
							description: regularLunarRadiance ? "(Moon 6). Attacks can deal Radiant." : "(Moon 14). Attacks can deal Radiant. Once per turn after a hit, deal +2d10 Radiant damage.",
							joinString: " ",
						});
					},
					"While in a Wild Shape form, I can have my attacks deal Radiant damage and I can add my Wisdom modifier to my Constitution saving throws. Once per turn from level 14 onwards, I can deal an extra 2d10 Radiant damage to a target I hit with a Wild Shape form's attack.",
				],
			},
		},
		"subclassfeature10": {
			name: "Moonlight Step",
			source: [["PHB24", 87]],
			minlevel: 10,
			description: levels.map(function (n) {
				return n < 10 ? "" : n < 14 ?
					desc("As a Bonus Action, I can teleport up to 30 ft to an empty space I can see, and I gain Adv on my next attack roll this turn. I can expend a level 2+ spell slot (SS 2+) to regain 1 use.") :
					desc("As a Bonus Action, I and a willing creature within 10 ft can teleport up to 30 ft to an empty space I can see, with the creature appearing within 10 ft of me. I then gain Adv on my next attack roll this turn. I can expend a level 2+ spell slot (SS 2+) to regain 1 use.");
			}),
			usages: typePF ? "" : "Wisdom modifier per ",
			usagescalc: "event.value = Math.max(1, What('Wis Mod'));",
			altResource: "SS 2+",
			recovery: "Long Rest",
			action: [["bonus action", ""]],
		},
		"subclassfeature14": {
			name: "Lunar Form",
			source: [["PHB24", 87]],
			minlevel: 14,
			description: desc("***Improved Lunar Radiance***. Once per turn, I can deal +2d10 Radiant damage on a hit with a WS attack. ***Shared Moonlight***. I can bring along an ally with Moonlight Step, see above."),
		},
	},
});
AddSubClass("druid", "sea", {
	regExpSearch: /^(?=.*druid)(?=.*\b(sea|waves|tides)\b).*$/i,
	subname: "Circle of the Sea",
	subnameShort: "Sea",
	source: [["PHB24", 87]],
	features: {
		"subclassfeature3": {
			name: "Wrath of the Sea",
			source: [["PHB24", 87]],
			minlevel: 3,
			description: levels.map(function (n) {
				var part = {
					range: n < 6 ? 5 : 10,
					target: n < 14 ? "" : " or around an ally within 60 ft that I can see, or around both by expending 2 WS uses",
					turn: n < 14 ? "my turn" : "turns",
					bearer: n < 14 ? "I" : "the bearer",
					subject: n < 14 ? "I" : "they",
				}
				var text = [
					"As a Bonus Action, I can expend 1 Wild Shape use to create a " + part.range + "-ft Emanation of ocean spray around me" + part.target + ". When manifested and as a Bonus Actions on " + part.turn + " thereafter, " + part.bearer + " can have a creature " + part.subject + " can see in the area make a Constitution save or take 1d6 Cold damage per my Wisdom modifier and, if it's Large or smaller, be pushed 15 ft away.",
					"This lasts for 10 " + (typePF ? "minutes" : "min") + " or until I dismiss it (no action), manifest it again, or I'm Incapacitated.",
				];
				return desc(text);
			}),
			spellcastingExtra: ["ray of frost", "fog cloud", "thunderwave", "gust of wind", "shatter", "lightning bolt", "water breathing", "control water", "ice storm", "conjure elemental", "hold monster"],
			action: [["bonus action", " (1 WS to create)"]],
			additional: levels.map(function (n) {
				var WSuses = n < 14 ? "1 WS use" : "1-2 WS uses";
				var emanation = n < 6 ? 5 : 10;
				return n < 3 ? "" : WSuses + "; Wis mod \xD7 d6 dmg; " + emanation + "-ft rad"
			}),
		},
		"subclassfeature6": {
			name: "Aquatic Affinity",
			source: [["PHB24", 87]],
			minlevel: 6,
			description: desc("I gain a Swim Speed equal to my Speed and Wrath of the Sea is now a 10-ft Emanation."),
			speed: { swim: { spd: "walk", end: "walk" } },
		},
		"subclassfeature10": {
			name: "Stormborn",
			source: [["PHB24", 87]],
			minlevel: 10,
			description: desc("While my Wrath of the Sea is active, it now also grants: ***Resistance*** to Cold, Lightning, and Thunder damage, and ***Flight***. A Fly Speed equal to my Speed."),
			dmgres: [
				["Cold",      "Cold (in WotS)"],
				["Lightning", "Lightn. (in WotS)"],
				["Thunder",   "Thunder (in WotS)"],
			],
		},
		"subclassfeature14": {
			name: "Oceanic Gift",
			source: [["PHB24", 88]],
			minlevel: 14,
			description: desc([
				"I can create Wrath of the Sea around an ally within 60 ft that I can see instead of myself, or around both my and the ally by expending 2 Wild Shape uses.",
				"It grants all benefits to the bearer, but always uses my spell save DC and my " + (typePF ? "Wisdom" : "Wis") + " modifier.",
			]),
		},
	},
});
AddSubClass("druid", "stars", {
	regExpSearch: /^(?=.*druid)(?=.*\b(stars?|constellations?)\b).*$/i,
	subname: "Circle of the Stars",
	subnameShort: "Stars",
	source: [["PHB24", 88]],
	features: {
		"subclassfeature3": {
			name: "Star Map",
			source: [["PHB24", 88]],
			minlevel: 3,
			description: desc("I can use this Tiny object as my spellcasting focus. While holding it, I know *Guidance* and always have *Guiding Bolt* prepared, which I can cast my " + (typePF ? "Wisdom" : "Wis") + " modifier times per Long Rest without a spell slot. I can recreate it with a 1-hour ceremony during a Short or Long Rest."),
			additional: "Guiding Bolt",
			usages: "Wisdom modifier per ",
			usagescalc: "event.value = Math.max(1, What('Wis Mod'));",
			recovery: "Long Rest",
			spellcastingBonus: [{
				name: "Star Map",
				spells: ["guidance"],
				selection: ["guidance"],
			}, {
				name: "Star Map",
				spells: ["guiding bolt"],
				selection: ["guiding bolt"],
				firstCol: "oncelr+markedbox",
			}],
		},
		"subclassfeature3.1": {
			name: "Starry Form",
			source: [["PHB24", 88]],
			minlevel: 3,
			description: desc([
				"As a Bonus Action, I can expend a WS use to take on a glowing form with the benefits of a constellation (3rd page). I shed Bright Light in " + (typePF ? "10-ft radius" : "10 ft") + " and Dim Light for an additional 10 ft.",
				"This lasts for 10 minutes or until I dismiss it (no action), use it again, or I'm Incapacitated.",
			]),
			action: [["bonus action", " (1 WS)"]],
			additional: "1 Wild Shape use",
			weaponOptions: [{
				regExpSearch: /^(?=.*luminous)(?=.*arrow).*$/i,
				name: "Luminous Arrow",
				source: [["PHB24", 89]],
				ability: 5,
				type: "Spell",
				damage: [1, 8, "radiant"],
				range: "60 ft",
				description: "Use as a Bonus Action",
				abilitytodamage: true,
				useSpellMod: "druid",
				selectNow: true,
				isLuminousArrow: true,
			}],
			extraname: "Starry Form",
			"archer constellation": {
				name: "Archer Constellation",
				source: [["PHB24", 89]],
				description: levels.map(function (n) {
					return desc("As a Bonus Action, including the one to take this Starry Form, I can make a ranged spell attack to hurl a luminous arrow 60 ft that deals " + (n < 10 ? 1 : 2) + "d8 + Wisdom modifier Radiant damage.");
				}),
				additional: levels.map(function (n) {
					return n < 3 ? "" : (n < 10 ? 1 : 2) + "d8 damage";
				}),
				action: [["bonus action", "Archer (Luminous Arrow)"]],
			},
			"chalice constellation": {
				name: "Chalice Constellation",
				source: [["PHB24", 89]],
				description: levels.map(function (n) {
					return desc("Whenever I cast a healing spell using a spell slot, I can also heal myself or another within 30 ft for " + (n < 10 ? 1 : 2) + "d8 + Wisdom modifier HP.");
				}),
				additional: levels.map(function (n) {
					return n < 3 ? "" : (n < 10 ? 1 : 2) + "d8 healing";
				}),
			},
			"dragon constellation": {
				name: "Dragon Constellation",
				source: [["PHB24", 89]],
				description: levels.map(function (n) {
					var text = [
						"When I make an Intelligence or Wisdom check, or make a Con save to maintain Concentration,",
						"I can treat a roll of 9 or lower on the d20 as a 10.",
					];
					if (n >= 10) text[1] += " I also gain 20 ft Fly Speed and can hover.";
					return desc(text);
				}),
				additional: levels.map(function (n) {
					return n < 10 ? "" : "gain Fly Speed";
				}),
			},
			autoSelectExtrachoices: [{
				extrachoice: "archer constellation",
			}, {
				extrachoice: "chalice constellation",
			}, {
				extrachoice: "dragon constellation",
			}],
		},
		"subclassfeature6": {
			name: "Cosmic Omen",
			source: [["PHB24", 89]],
			minlevel: 6,
			description: desc([
				"When I finish a Long Rest, I roll a die to determine which omen I can use until my next LR.",
				"As a Reaction when I see a creature within 30 ft about to make a D20 test, I can use it to:",
				"**Weal (even)**. Add 1d6 to the total. **Woe (odd)**. Subtract 1d6 from the total.",
			]),
			action: [["reaction", ""]],
			usages: "Wisdom modifier per ",
			usagescalc: "event.value = Math.max(1, What('Wis Mod'));",
			recovery: "Long Rest",
		},
		"subclassfeature10": {
			name: "Twinkling Constellations",
			source: [["PHB24", 89]],
			minlevel: 10,
			description: " [improves constellations, see 3rd page]" + desc("While in my Starry Form, I can change the constellation at the start of each of my turns."),
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (v.theWea.isLuminousArrow && fields.Damage_Die.indexOf("1d8") !== -1) {
							fields.Damage_Die = fields.Damage_Die.replace("1d8", "2d8");
						}
					},
					"",
				],
			},
		},
		"subclassfeature14": {
			name: "Full of Stars",
			source: [["PHB24", 89]],
			minlevel: 14,
			description: desc("While in my Starry Form, I have Resistance to Bludgeoning, Piercing, and Slashing damage."),
			dmgres: [
				["Bludgeoning", "Bludgeon. (in SF)"],
				["Piercing",    "Piercing (in SF)"],
				["Slashing",    "Slashing (in SF)"],
			],
		},
	},
});

// Fighter Subclasses
AddSubClass("fighter", "battle master", {
	regExpSearch: /^(?=.*(war|fighter|battle|martial))(?=.*master).*$/i,
	subname: "Battle Master",
	fullname: "Battle Master",
	source: [["PHB24", 93]],
	abilitySave: 1,
	abilitySaveAlt: 2,
	features: {
		"subclassfeature3": { // includes the level 10 and 18 Improved/Ultimate Combat Superiority features
			name: "Combat Superiority",
			source: [["PHB24", 93]],
			minlevel: 3,
			description: desc("I gain a number of Superiority Dice (SD) that I can use to fuel special Maneuvers."),
			additional: levels.map(function (n) {
				if (n < 3) return "";
				return "d" + (n < 10 ? 8 : n < 18 ? 10 : 12);
			}),
			limfeaname: "Superiority Dice",
			usages: levels.map(function (n) {
				return n < 3 ? 0 : n < 7 ? 4 : n < 15 ? 5 : 6;
			}),
			recovery: "Short Rest",
		},
		"subclassfeature3.1": {
			name: "Maneuvers",
			source: [["PHB24", 93]],
			minlevel: 3,
			description: desc([
				"I can expend one Superiority Die to do a Maneuver I know, but only one per attack.",
				"The save DC for my Maneuvers is 8 + PB + Strength or Dexterity modifier (my choice).",
			]),
			additional: levels.map(function (n) {
				return n < 3 ? "" : (n < 7 ? 3 : n < 10 ? 5 : n < 15 ? 7 : 9) + " known";
			}),
			extraTimes: levels.map(function (n) {
				return n < 3 ? 0 : n < 7 ? 3 : n < 10 ? 5 : n < 15 ? 7 : 9;
			}),
			extraname: "Maneuver Options",
			extrachoices: ["Ambush", "Bait and Switch", "Commander's Strike", "Commanding Presence", "Disarming Attack", "Distracting Strike", "Evasive Footwork", "Feinting Attack", "Goading Attack", "Lunging Attack", "Maneuvering Attack", "Menacing Attack", "Parry", "Precision Attack", "Pushing Attack", "Rally", "Riposte", "Sweeping Attack", "Tactical Assessment", "Trip Attack"],
			"ambush": {
				name: "Ambush",
				extraname: "Maneuver",
				source: [["PHB24", 94]],
				description: desc("When I roll for Initiative or Dex (Stealth), I can expend and add 1 SD unless I'm Incapacitated."),
				additional: "add SD to Stealth or Initiative",
			},
			"bait and switch": {
				name: "Bait and Switch",
				extraname: "Maneuver",
				source: [["PHB24", 94]],
				description: desc([
					"On my turn, I can expend 1 SD to switch places with a willing, not-Incapacitated creature within 5 ft, if I spend at least 5 ft of movement. This doesn't provoke Opportunity Attacks.",
					"The other creature or I (my choice) can add the SD to AC until the start of my next turn.",
				]),
				additional: "add SD to my/ally's AC",
			},
			"commander's strike": {
				name: "Commander's Strike",
				extraname: "Maneuver",
				source: [["PHB24", 94]],
				description: desc("When I take the Attack action on my turn, I can forgo one attack to direct a willing creature I can see or hear to strike. I expend 1 SD and that creature can immediately use its Reaction to make one attack with a weapon or Unarmed Strike, adding the SD to the attack's damage."),
				additional: "ally adds SD to damage",
			},
			"commanding presence": {
				name: "Commanding Presence",
				extraname: "Maneuver",
				source: [["PHB24", 95]],
				description: desc("When I make an Intimidation, Performance, or Persuasion check, I can expend and add 1 SD."),
				additional: "add SD to Charisma skill check",
			},
			"disarming attack": {
				name: "Disarming Attack",
				extraname: "Maneuver",
				source: [["PHB24", 95]],
				description: desc("When I hit a creature with an attack, I can expend and add 1 SD to the damage. The target must make a Strength save or drop one object of my choice that it's holding in its space."),
				additional: "add SD to damage",
			},
			"distracting strike": {
				name: "Distracting Strike",
				extraname: "Maneuver",
				source: [["PHB24", 95]],
				description: desc("When I hit a creature with an attack, I can expend and add 1 SD to the damage. The next attack vs the target by another than me has Advantage, if made before my next turn starts."),
				additional: "add SD to damage",
			},
			"evasive footwork": {
				name: "Evasive Footwork",
				extraname: "Maneuver",
				source: [["PHB24", 95]],
				description: desc([
					"As a Bonus Action, I can expend 1 SD to take the Disengage action.",
					"I add the Superiority Die to my AC until the start of my next turn.",
				]),
				additional: "add SD to AC",
				action: [["bonus action", ""]],
			},
			"feinting attack": {
				name: "Feinting Attack",
				extraname: "Maneuver",
				source: [["PHB24", 95]],
				description: desc("As a Bonus Action, I can expend 1 SD to gain Advantage on my next attack this turn against a creature within 5 ft. If that attack hits, I add the Superiority Die to its damage."),
				additional: "add SD to damage",
				action: [["bonus action", ""]],
			},
			"goading attack": {
				name: "Goading Attack",
				extraname: "Maneuver",
				source: [["PHB24", 95]],
				description: desc("When I hit a creature with an attack, I can expend and add 1 SD to the damage. The target must make a Wis save or have Disadvantage on attacks not vs me until my next turn ends."),
				additional: "add SD to damage",
			},
			"lunging attack": {
				name: "Lunging Attack",
				extraname: "Maneuver",
				source: [["PHB24", 95]],
				description: desc("As a Bonus Action, I can expend 1 SD to take the Dash action. If I move 5 ft in a straight line before hitting a melee attack in the same turn's Attack action, I add the SD to the damage."),
				additional: "add SD to melee damage",
				action: [["bonus action", ""]],
			},
			"maneuvering attack": {
				name: "Maneuvering Attack",
				extraname: "Maneuver",
				source: [["PHB24", 95]],
				description: desc([
					"When I hit a creature with an attack, I can expend and add 1 SD to the damage.",
					"A willing creature of my choice who can see or hear me can then use its Reaction to move up to half its Speed without provoking an Opportunity Attack from the target of my attack.",
				]),
				additional: "add SD to damage",
			},
			"menacing attack": {
				name: "Menacing Attack",
				extraname: "Maneuver",
				source: [["PHB24", 95]],
				description: desc("When I hit a creature with an attack, I can expend and add 1 SD to the damage. The target must make a Wisdom save or have the Frightened condition until the end of my next turn."),
				additional: "add SD to damage",
			},
			"parry": {
				name: "Parry",
				extraname: "Maneuver",
				source: [["PHB24", 95]],
				description: desc("As a Reaction when I take damage from a melee attack, I can expend and roll 1 SD to reduce the damage by it plus my Strength or Dexterity modifier (my choice)."),
				additional: "reduce damage taken by SD + Str/Dex mod",
				action: [["reaction", ""]],
			},
			"precision attack": {
				name: "Precision Attack",
				extraname: "Maneuver",
				source: [["PHB24", 95]],
				description: desc("When I miss an attack, I can expend and add 1 SD to the roll, potentially causing it to hit."),
				additional: "add SD to attack roll",
			},
			"pushing attack": {
				name: "Pushing Attack",
				extraname: "Maneuver",
				source: [["PHB24", 95]],
				description: desc("When I hit a creature with a weapon or Unarmed Strike, I can expend and add 1 SD to the damage. If Large or smaller, it must make a Str save or be pushed up to 15 ft back from me."),
				additional: "add SD to damage",
			},
			"rally": {
				name: "Rally",
				extraname: "Maneuver",
				source: [["PHB24", 95]],
				description: desc("As a Bonus Action, I can expend 1 SD to grant an ally within 30 ft who can see or hear me Temporary Hit Points equal to the SD roll plus half my Fighter level."),
				additional: levels.map(function (n) {
					return "ally gains SD + " + Math.floor(n / 2) + " Temp HP";
				}),
				action: [["bonus action", ""]],
			},
			"riposte": {
				name: "Riposte",
				extraname: "Maneuver",
				source: [["PHB24", 95]],
				description: desc("As a Reaction when a creature misses me with a melee attack, I can expend 1 SD to make a melee attack with a weapon or Unarmed Strike against it, adding the SD to the damage."),
				additional: "add SD to melee damage",
				action: [["reaction", ""]],
			},
			"sweeping attack": {
				name: "Sweeping Attack",
				extraname: "Maneuver",
				source: [["PHB24", 95]],
				description: desc("When I hit a creature with a melee weapon or Unarmed Strike, I can expend 1 SD to damage another creature within reach and within 5 ft of the first. If the original attack roll would hit the second creature, it takes 1 SD damage of the same type as the original attack."),
				additional: "deal SD damage",
			},
			"tactical assessment": {
				name: "Tactical Assessment",
				extraname: "Maneuver",
				source: [["PHB24", 95]],
				description: desc("When I make a History, Investigation, or Insight check, I can expend and add 1 SD to it."),
				additional: "add SD to certain skill checks",
			},
			"trip attack": {
				name: "Trip Attack",
				extraname: "Maneuver",
				source: [["PHB24", 95]],
				description: desc("When I hit a creature with a weapon or Unarmed Strike, I can expend and add 1 SD to the damage. If the target is Large or smaller, it must make a Strength save or be knocked Prone."),
				additional: "add SD to damage",
			},
		},
		"subclassfeature3.2": function () {
			var a = {
				name: "Student of War",
				source: [["PHB24", 94]],
				minlevel: 3,
				description: ' #[Select option with "Choose Feature"]#' + desc("I gain proficiency with one type of Artisan's Tools and in one skill from the Fighter list. Use the \"Choose Feature\" button to select a skill."),
				toolProfs: [["Artisan's tools", 1]],
				choices: ["Acrobatics", "Animal Handling", "Athletics", "History", "Insight", "Intimidation", "Persuasion", "Perception", "Survival"],
			};
			for (var i = 0; i < a.choices.length; i++) {
				var attr = a.choices[i].toLowerCase();
				var skill = a.choices[i];
				a[attr] = {
					name: "Student of War: " + skill,
					description: desc("I gain proficiency with one type of Artisan's Tools of my choice and " + skill + "."),
					skills: [skill],
					prereqeval: function (v) {
						return v.skillProfsLC.indexOf(v.choice) === -1 ? true : "markButDisable";
					},
				};
			}
			return a;
		}(),
		"subclassfeature7": {
			name: "Know Your Enemy",
			source: [["PHB24", 94]],
			minlevel: 7,
			description: desc("As a Bonus Action, I can learn the Immunities, Resistances, and Vulnerabilities of a creature I can see within 30 ft. I can expend a Superiority Die to restore use of this feature."),
			action: [["bonus action", ""]],
			usages: 1,
			recovery: "Long Rest",
			altResource: "1 SD",
		},
		"subclassfeature15": {
			name: "Relentless",
			source: [["PHB24", 94]],
			minlevel: 15,
			description: desc("Once per turn when I do a Maneuver, I can use a d8 instead of expending a Superiority Die."),
		},
	},
});
var PHB_EldritchKnight = {
	cantrips: levels.map(function (n) {
		return n < 3 ? 0 : n < 10 ? 2 : 3;
	}),
	spells: [0, 0, 3, 4, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 10, 11, 11, 11, 12, 13],
};
AddSubClass("fighter", "eldritch knight", {
	regExpSearch:
		/^(?!.*(exalted|sacred|holy|divine|nature|natural|purple.*dragon|green|arcane archer))(?=.*(knight|fighter|warrior|militant|warlord|phalanx|gladiator|trooper))(?=.*\b(eldritch|arcane|magic|mage|witch)\b).*$/i,
	subname: "Eldritch Knight",
	fullname: "Eldritch Knight",
	source: [["PHB24", 96]],
	abilitySave: 4,
	spellcastingFactor: 3,
	spellcastingList: {
		class: "wizard",
		level: [0, 4],
	},
	spellcastingKnown: {
		cantrips: PHB_EldritchKnight.cantrips,
		spells: PHB_EldritchKnight.spells,
	},
	features: {
		"subclassfeature3": {
			name: "Spellcasting",
			source: [["PHB24", 97]],
			minlevel: 3,
			description: desc(
				"I can cast Wizard cantrips/spells I know, using Intelligence as spellcasting ability. I can use Arcane Focus as Spellcasting Focus for them. I can swap 1 spell when I gain a Fighter level."
			),
			additional: levels.map(function (n, i) {
				return n < 3 ? "" : PHB_EldritchKnight.cantrips[i] + " cantrips \x26 " + PHB_EldritchKnight.spells[i] + " spells known";
			}),
		},
		"subclassfeature3.1": {
			name: "War Bond",
			source: [["PHB24", 98]],
			minlevel: 3,
			description: desc([
				"I can bond with up to two weapons by spending a Short Rest with each.",
				"The bond fails if another Fighter is bonded or someone else is attuned to the weapon.",
				"I can't be disarmed of a bonded weapon and I can summon one as a Bonus Action.",
			]),
			action: [["bonus action", " (summon)"]],
		},
		"subclassfeature7": {
			name: "War Magic",
			source: [["PHB24", 98]],
			minlevel: 7,
			description: desc("When I take the Attack action, I can replace one of the attacks with casting one of my Wizard cantrips that has a casting time of one action."),
		},
		"subclassfeature10": {
			name: "Eldritch Strike",
			source: [["PHB24", 98]],
			minlevel: 10,
			description: desc("A creature hit by my weapon attack has Disadvantage on the next save it makes against a spell that I cast before the end of my next turn."),
		},
		"subclassfeature15": {
			name: "Arcane Charge",
			source: [["PHB24", 98]],
			minlevel: 15,
			description: desc([
				"When I use Action Surge, I can also teleport up to 30 ft to an empty space I can see.",
				"I can do so before or after the extra action.",
			]),
		},
		"action surge": Object.assign({}, ClassList.fighter.features["action surge"], {
			additional: levels.map(function (n) {
				return n < 15 ? "" : "30 ft teleport";
			}),
		}),
		"subclassfeature18": {
			name: "Improved War Magic",
			source: [["PHB24", 98]],
			minlevel: 18,
			description: desc("When I take the Attack action, I can replace two of the attacks with casting one of my level 1 or level 2 Wizard spells that has a casting time of one action."),
		},
	},
});
var PHB_PsiDSize = levels.map(function (n) {
	return n < 5 ? 6 : n < 11 ? 8 : n < 17 ? 10 : 12;
});
AddSubClass("fighter", "psi warrior", {
	regExpSearch: /^(?=.*\bpsi(onic)?s?\b)(?=.*warrior).*$/i,
	subname: "Psi Warrior",
	fullname: "Psi Warrior",
	source: [["PHB24", 98]],
	abilitySave: 4,
	features: {
		"subclassfeature3": {
			name: "Psionic Energy Dice",
			source: [["PHB24", 98]],
			minlevel: 3,
			description: levels.map(function (n) {
				var txt = "";
				if (n < 18) {
					txt = desc([
						"I gain a pool of Psionic Energy Dice (PsiD) that fuel my Psi Warrior abilities.",
						"I regain one expended PsiD on a Short Rest and regain all PsiD after a Long Rest.",
					]);
				} else if (n < 20) {
					txt = desc("I regain one expended Psionic Energy Die (PsiD) on a Short Rest, and all after a Long Rest.");
				}
				return txt;
			}),
			additional: "regain 1/SR",
			usages: levels.map(function (n, i) {
				if (n < 3) return "";
				var diceNumber =  n < 5 ? 4 : n < 9 ? 6 : n < 13 ? 8 : n < 17 ? 10 : 12;
				return diceNumber + "d" + PHB_PsiDSize[i] + " per ";
			}),
			recovery: "Long Rest",
		},
		"subclassfeature3.1": {
			name: "Protective Field",
			source: [["PHB24", 98]],
			minlevel: 3,
			description: levels.map(function (n, i) {
				return desc("As a Reaction when I or a creature that I can see within 30 ft takes damage, I can expend 1 Psionic Energy Die to reduce the damage by 1d" + PHB_PsiDSize[i] + " (PsiD) + my Intelligence modifier.");
			}),
			action: [["reaction", ""]],
			additional: "1 PsiD",
		},
		"subclassfeature3.2": {
			name: "Psionic Strike",
			source: [["PHB24", 98]],
			minlevel: 3,
			description: levels.map(function (n, i) {
				var txt = "";
				if (n < 7) {
					txt = "Once per turn when I damage a target within 30 ft with a weapon attack, I can expend 1 Psionic Energy Die to deal it Force damage equal to 1d" + PHB_PsiDSize[i] + " (PsiD) + my Intelligence modifier.";
				} else {
					txt = "Once per turn when I damage a target within 30 ft with a weapon attack, I can expend 1 PsiD to deal it 1d" + PHB_PsiDSize[i] + " (PsiD) + " + (typePF ? "Intelligence" : "Int") + " modifier Force damage. I can then also have it make a " + (typePF ? "Strength" : "Str") + " save (DC 8 + PB + Int mod) or be knocked Prone or transported 10 ft horizontally.";
				}
				return desc(txt);
			}),
			additional: "1 PsiD",
		},
		"subclassfeature3.3": {
			name: "Telekinetic Movement",
			source: [["PHB24", 98]],
			minlevel: 3,
			description: desc(
				"As a Magic action, I can choose a \u2264Large object or one willing creature that I can see within 30 ft and teleport it up to 30 ft to an empty space that I can see. If it's a Tiny object, I can teleport it to or from my hand. I can expend a " + (typePF ? "Psionic Energy Die" : "PsiD") + " to restore use of this feature."
			),
			action: [["action", ""]],
			usages: 1,
			recovery: "Short Rest",
			altResource: "PsiD",
		},
		"subclassfeature7": {
			name: "Telekinetic Thrust",
			source: [["PHB24", 99]],
			minlevel: 7,
			description: " [improves Psionic Strike, see above]",
		},
		"subclassfeature7.1": {
			name: "Psi-Powered Leap",
			source: [["PHB24", 99]],
			minlevel: 7,
			description: desc(
				"As a Bonus Action, I can gain a Fly Speed equal to twice my Speed until the end of the turn." + (typePF ? "\n" : " ") + "I can expend a Psionic Energy Die to restore use of this feature."
			),
			action: [["bonus action", ""]],
			usages: 1,
			recovery: "Short Rest",
			altResource: "PsiD",
		},
		"subclassfeature10": {
			name: "Guarded Mind",
			source: [["PHB24", 99]],
			minlevel: 10,
			description: desc(
				"If I start my turn being Charmed or Frightened, I can expend 1 PsiD (no action) to end every effect on myself giving me those conditions. I gain Resistance to Psychic damage."
			),
			additional: "1 PsiD",
			dmgres: ["Psychic"],
		},
		"subclassfeature15": {
			name: "Bulwark of Force",
			source: [["PHB24", 99]],
			minlevel: 15,
			description: desc(
				"As a Bonus Action, I can choose Int mod of creatures within 30 ft, including myself, to have Half Cover for 1 min or until I'm Incapacitated. I can expend a PsiD to restore use of this" + (typePF ? " feature." : ".")
			),
			action: [["bonus action", ""]],
			usages: 1,
			recovery: "Long Rest",
			altResource: "PsiD",
		},
		"subclassfeature18": {
			name: "Telekinetic Master",
			source: [["PHB24", 99]],
			minlevel: 18,
			description: desc(
				"I always have Telekinesis prepared. I can cast it without using a spell slot or components, with Intelligence as spellcasting ability. As a Bonus Action on my turns while Concentrating on this, I can make one attack with a weapon. I can expend a PsiD to restore use of this" + (typePF ? " feature." : ".")
			),
			spellcastingBonus: [{
				name: "Telekinetic Master",
				spells: ["telekinesis"],
				selection: ["telekinesis"],
				firstCol: "oncelr",
			}],
			spellChanges: {
				telekinesis: {
					components: "",
					changes: "My Telekinetic Master feature allows me to cast *Telekinesis* without requiring components or expending a spell slot once per Long Rest or by expending a Psionic Energy Die.",
				},
			},
			action: [["bonus action", "Weapon attack if conc on Telekinesis"]],
			usages: 1,
			recovery: "Long Rest",
			altResource: "PsiD",
		},
	},
});

// Monk Subclasses
var PHB_WarriorMercy = {
	handOfHarm: {
		description: desc("Once per turn when I damage a creature with an Unarmed Strike, I can expend 1 Focus Point to deal it extra Necrotic damage equal to a Martial Arts die + my Wisdom modifier."),
		description6: desc("Once per turn when I damage a creature with an Unarmed Strike, I can " + (typePF ? "expend" : "use") + " 1 FP to deal it Martial Arts die + Wis mod Necrotic damage and make it Poisoned until my next turn ends."),
		additional: levels.map(function (n) {
			var die = n < 5 ? 6 : n < 11 ? 8 : n < 17 ? 10 : 12;
			return "1 Focus Point; 1d" + die + " + Wis mod Necrotic" + (typePF ? "" : " dmg");
		}),
	},
	handOfHealing: {
		description: desc("As a Magic action, I can expend 1 Focus Point to heal a creature I touch for Martial Arts die + my Wisdom modifier Hit Points. When I use Flurry of Blows, I can replace one of its Unarmed Strikes with a use of this feature without expending a Focus Point for the healing."),
		description6: desc([
			"As a Magic action, I can use 1 FP to heal a creature I touch for Martial Arts die + Wis mod HP and cure it of one of the following: Blinded, Deafened, Paralyzed, Poisoned, or Stunned.",
			"When I use Flurry of Blows, I can swap one Unarmed Strike for this without using more FP.",
		]),
		additional: levels.map(function (n) {
			var die = n < 5 ? 6 : n < 11 ? 8 : n < 17 ? 10 : 12;
			return "1 Focus Point; 1d" + die + " + Wis mod HP";
		}),
	},
};
AddSubClass("monk", "mercy", {
	regExpSearch: /^(?=.*mercy)((?=.*(monk|monastic))|(((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior)))).*$/i,
	subname: "Warrior of Mercy",
	subnameShort: "Mercy",
	source: [["PHB24", 104]],
	features: {
		"subclassfeature3": { // includes Physician's Touch; moves to third page from level 15 onwards
			name: "Hand of Harm",
			minlevel: 3,
			source: [["PHB24", 104]],
			description: levels.map(function (n, idx) {
				return n < 6 ? PHB_WarriorMercy.handOfHarm.description :
					n < 15 ? PHB_WarriorMercy.handOfHarm.description6 : undefined;
			}),
			autoSelectExtrachoices: [{
				extrachoice: "hand of harm",
				minlevel: 15,
			}],
			"hand of harm": {
				name: "Hand of Harm",
				extraname: "Mercy 3",
				source: [["PHB24", 104]],
				description: PHB_WarriorMercy.handOfHarm.description6,
				additional: PHB_WarriorMercy.handOfHarm.additional,
			},
		},
		"subclassfeature3.1": { // includes Physician's Touch; moves to third page from level 15 onwards
			name: "Hand of Healing",
			minlevel: 3,
			source: [["PHB24", 104]],
			description: levels.map(function (n, idx) {
				return n < 6 ? PHB_WarriorMercy.handOfHealing.description :
					n < 15 ? PHB_WarriorMercy.handOfHealing.description6 : undefined;
			}),
			action: [["action", " (1 FP)"]],
			autoSelectExtrachoices: [{
				extrachoice: "hand of healing",
				minlevel: 15,
			}],
			"hand of healing": {
				name: "Hand of Healing",
				extraname: "Mercy 3",
				source: [["PHB24", 104]],
				description: PHB_WarriorMercy.handOfHealing.description6,
				additional: PHB_WarriorMercy.handOfHealing.additional,
			},
		},
		"subclassfeature3.2": {
			name: "Hand of Harm \x26 Hand of Healing",
			source: [["PHB24", 104]],
			minlevel: 3,
			description: levels.map(function (n) {
				return n < 15 ? undefined : " [see third page]";
			}),
		},
		"subclassfeature3.3": {
			name: "Implements of Mercy",
			source: [["PHB24", 104]],
			minlevel: 3,
			description: " [Insight, Medicine, and Herbalism Kit prof]",
			skills: ["Insight", "Medicine"],
			toolProfs: ["Herbalism kit"],
		},
		"subclassfeature6": {
			name: "Physician's Touch",
			source: [["PHB24", 104]],
			minlevel: 6,
			autoSelectExtrachoices: [{ extrachoice: "physician's touch" }],
			"physician's touch": {
				name: "Physician's Touch",
				extraname: "Mercy 6",
				source: [["PHB24", 104]],
				description: " [improves Hand of Healing \x26 Hand of Harm]",
			},
		},
		"subclassfeature11": {
			name: "Flurry of Healing and Harm",
			source: [["PHB24", 104]],
			minlevel: 11,
			description: desc(
				"When I use Flurry of Blows, I can replace each of its Unarmed Strikes with a use of Hand of Healing, and I can use Hand of Harm when I deal damage with one of its Unarmed Strikes. I can still use Hand of Harm only once per turn. When I use this feature, I only need to expend a Focus Point for Flurry of Blows, not for Hand of Healing or Hand of Harm."
			),
			usages: typePF ? "Wis mod per " : "Wisdom modifier per ",
			usagescalc: "event.value = Math.max(1, What('Wis Mod'));",
			recovery: "Long Rest",
		},
		"subclassfeature17": {
			name: "Hand of Ultimate Mercy",
			source: [["PHB24", 105]],
			minlevel: 17,
			description: desc(
				"As a Magic action, I can touch a creature that died within the past 24 hours and expend 5 Focus Points. The creature then returns to life with 4d10 + my Wisdom modifier Hit Points and is cured of all of the following: Blinded, Deafened, Paralyzed, Poisoned, and Stunned."
			),
			usages: 1,
			recovery: "Long Rest",
			additional: "5 FP",
			action: [["action", " (5 FP)"]],
		},
	},
});
AddSubClass("monk", "shadow", {
	regExpSearch: /^(?=.*shadow)((?=.*(monk|monastic))|(((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior)))).*$/i,
	subname: "Warrior of Shadow",
	subnameShort: "Shadow",
	source: [["PHB24", 105]],
	features: {
		"subclassfeature3": {
			name: "Shadow Arts",
			source: [["PHB24", 105]],
			minlevel: 3,
			description: desc("I gain +60 ft Darkvision. I know the *Minor Illusion* cantrip, using Wis as spellcasting ability."),
			vision: [["Darkvision", "fixed 60"], ["Darkvision", "+60"]],
			spellFirstColTitle: "Ki",
			spellcastingBonus: [{
				name: "Shadow Arts",
				spells: ["minor illusion"],
				selection: ["minor illusion"],
				firstCol: "atwill",
			}, {
				name: "Shadow Arts",
				spells: ["darkness"],
				selection: ["darkness"],
				firstCol: 1,
			}],
			spellChanges: {
				"darkness": {
					components: "",
					compMaterial: "",
					description: "15-ft rad darkness; blocks other's vision/nonmagical light; dispels magical light SL \u22642; my SoT move it",
					descriptionMetric: "4,5m rad darkness; blocks other's vision/nonmagical light; dispels magical light SL \u22642; my SoT move it",
					changes: "With the Shadow Arts feature I can cast *Darkness* without spell components, can see through it, and can move it to a space within 60 ft of me at the start of each of my turns.",
				},
			},
			"shadow arts: darkness": {
				name: "Shadow Arts: Darkness",
				extraname: "Warrior of Shadow 3",
				source: [["PHB24", 105]],
				description: desc("I can expend 1 Focus Point to cast *Darkness* without spell components. When I do so, I can see within its area and I can move it to a space within 60 ft at the start of each of my turns."),
				additional: "1 Focus Point",
			},
			autoSelectExtrachoices: [{ extrachoice: "shadow arts: darkness" }],
		},
		"subclassfeature6": {
			name: "Shadow Step",
			source: [["PHB24", 105]],
			minlevel: 6,
			description: desc("As a Bonus Action while in Dim Light or Darkness, I can teleport up to 60 ft to an empty " + (typePF ? "space" : "spot") + " I can see in Dim Light or Darkness. I then gain Adv" + (typePF ? "antage" : "") + " on my next melee attack this turn."),
			action: [["bonus action", ""]],
		},
		"subclassfeature11": {
			name: "Improved Shadow Step",
			source: [["PHB24", 105]],
			minlevel: 11,
			"improved shadow step": {
				name: "Improved Shadow Step",
				extraname: "Warrior of Shadow 11",
				source: [["PHB24", 105]],
				description: desc("When I use Shadow Step, I can expend 1 Focus Point to remove the need to start and end in Dim Light or Darkness, and I can make an Unarmed Strike immediately after I teleport."),
				additional: "1 Focus Point",
			},
			autoSelectExtrachoices: [{ extrachoice: "improved shadow step" }],
		},
		"subclassfeature17": {
			name: "Cloak of Shadows",
			source: [["PHB24", 105]],
			minlevel: 17,
			action: [["action", " (3 FP)"]],
			"cloak of shadows": {
				name: "Cloak of Shadows",
				extraname: "Warrior of Shadow 17",
				source: [["PHB24", 105]],
				description: desc([
					"As a Magic action while in Dim Light or Darkness, I can expend 3 Focus Points to shroud myself in shadows for 1 min, until I'm Incapacitated, or I end my turn in Bright Light.",
					"While shrouded, I'm Invisible, using Flurry of Blows requires no Focus Points, and I can move through occupied spaces as if they were Difficult Terrain, but can't end my turn in one.",
				]),
				additional: "3 Focus Points",
			},
			autoSelectExtrachoices: [{ extrachoice: "cloak of shadows" }],
		},
	},
});
var PHB_WarriorOfTheElements = {
	elementalBurst: {
		description: desc("As a Magic action, I can " + (typePF ? "expend" : "use") + " 2 Focus Points to create a 20-ft-radius Sphere within 120 ft that deals three Martial Art dice damage (\u2605) to all within. Each can Dex save for half damage."),
		descriptionCF: desc("As a Magic action, I can use 2 Focus Points to create a 20-ft-radius Sphere within 120 ft that deals 3 Martial Art dice damage (\u2605) to all within. Each can Dex save for half damage."),
		additional: levels.map(function (n) {
			var die = n < 5 ? 6 : n < 11 ? 8 : n < 17 ? 10 : 12;
			return "2 Focus Points; 3d" + die + " damage";
		}),
	},
};
AddSubClass("monk", "elements", {
	regExpSearch: /^(?=.*(elements|elemental))((?=.*(monk|monastic))|(((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior)))).*$/i,
	subname: "Warrior of the Elements",
	subnameShort: "Elements",
	source: [["PHB24", 106]],
	features: {
		"subclassfeature3": { // includes Stride of the Elements and Elemental Epitome
			name: "Elemental Attunement",
			source: [["PHB24", 106]],
			minlevel: 3,
			description: levels.map(function (n) {
				var text = [
					typePF ? "As my turn starts, I can expend 1 FP to gain these benefits for 10 min or until I'm Incapacitated." :
						"As my turn starts, I can use 1 FP to gain these benefits for 10 min or till I'm Incapacitated.",
					"***Reach***. When I make an Unarmed Strike, my reach increases by 10 ft.",
					"***Elemental Strikes***. I can change the damage type (\u2605) of my Unarmed Strike. If I do and deal damage, I can have the target make a Str save or move it " + (typePF ? "up to " : "\u2264") + "10 ft toward or away from me.",
					"(\u2605) This can be my choice of Acid, Cold, Fire, Lightning, or Thunder.",
				];
				if (n >= 11) { // Stride of the Elements
					text.splice(text.length - 1, 0, "***Stride of the Elements***. I gain a Fly Speed and a Swim Speed equal to my Speed.");
				}
				if (n >= 17) { // Elemental Epitome
					var die = n < 5 ? 6 : n < 11 ? 8 : n < 17 ? 10 : 12;
					text.splice(text.length - 1,
						1,
						"***Damage Resistance***. I gain a Resistance (\u2605). I can change its type at the start of my turns.",
						"***Destructive Stride***. On a turn that I use Step of the Wind, I have +20 ft Speed and I can deal 1d" + die + " (MA die) damage (\u2605) to each creature of my choice that I come within 5 ft of.",
						"***Empowered Strikes***. I can add 1d" + die + " (MA die) " + (typePF ? "damage" : "dmg") + " to one Unarmed Strike hit on my turn.",
						"(\u2605) My choice of Acid, Cold, Fire, Lightning, or Thunder. (MA die) Martial Arts die."
					);
				}
				return desc(text);
			}),
			additional: "1 Focus Point",
			weaponOptions: [{
				baseWeapon: "unarmed strike",
				regExpSearch: /^(?=.*elemental)(?=.*strike).*$/i,
				name: "Elemental Strike",
				source: [["PHB24", 106]],
				damage: [1, "", "Elemental (\u2605)"],
				description: "+10 ft reach; Str save or moved 10 ft toward/away",
				selectNow: true,
				isElementalStrike: true,
			}],
		},
		"subclassfeature3.1": {
			name: "Manipulate Elements",
			source: [["PHB24", 106]],
			minlevel: 3,
			description: levels.map(function (n) {
				return n < 15 ? desc("I know the *Elementalism* cantrip. Wisdom is my spellcasting ability for it.") : " [know *Elementalism*, using Wisdom]";
			}),
			spellcastingBonus: [{
				name: "Manipulate Elements",
				spells: ["elementalism"],
				selection: ["elementalism"],
				firstCol: "atwill",
			}],
		},
		"subclassfeature6": { // moves to third page from level 17 onwards
			name: "Elemental Burst",
			source: [["PHB24", 106]],
			minlevel: 6,
			description: levels.map(function (n) {
				var obj = PHB_WarriorOfTheElements.elementalBurst;
				var text = typePF ? obj.description : obj.descriptionCF;
				return n < 17 ? text : undefined;
			}),
			additional: PHB_WarriorOfTheElements.elementalBurst.additional,
			action: [["action", " (2 FP)"]],
			weaponOptions: [{
				regExpSearch: /^(?=.*elemental)(?=.*burst).*$/i,
				name: "Elemental Burst",
				source: [["PHB24", 106]],
				ability: 5,
				type: "Magic",
				damage: [3, 8, "Elemental (\u2605)"],
				range: "120 ft",
				description: "2 FP; 20-ft radius Sphere; Dex save for half; (\u2605) Acid, Cold, Fire, Lightning, or Thunder",
				abilitytodamage: false,
				monkweapon: false,
				dc: true,
				selectNow: true,
				isAlwaysProf: true,
				isElementalBurst: true,
			}],
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (v.theWea.isElementalBurst && classes.known.monk) {
							var n = classes.known.monk.level;
							var die = n < 5 ? 6 : n < 11 ? 8 : n < 17 ? 10 : 12;
							fields.Damage_Die = "3d" + die;
						}
					},
					"",
					20,
				],
			},
			autoSelectExtrachoices: [{
				extrachoice: "elemental burst",
				minlevel: 17,
			}],
			"elemental burst": {
				name: "Elemental Burst",
				extraname: "Elements 6",
				source: [["PHB24", 106]],
				description: PHB_WarriorOfTheElements.elementalBurst.description,
				additional: PHB_WarriorOfTheElements.elementalBurst.additional,
			},
		},
		"subclassfeature11": { // only on third page, description included in Elemental Attunement
			name: "Stride of the Elements",
			source: [["PHB24", 106]],
			minlevel: 11,
			autoSelectExtrachoices: [{ extrachoice: "stride of the elements" }],
			"stride of the elements": {
				name: "Stride of the Elements",
				extraname: "Elements 11",
				source: [["PHB24", 106]],
				description: " [improves Elemental Attunement]",
			},
		},
		"subclassfeature17": { // only on third page, description included in Elemental Attunement
			name: "Elemental Epitome",
			source: [["PHB24", 106]],
			minlevel: 17,
			dmgres: ["Elemental (\u2605)"],
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (v.theWea.isElementalStrike && classes.known.monk && classes.known.monk.level >= 17) {
							fields.Description += "; 1/my turn +1d12 damage";
						}
					},
					"",
				],
			},
			autoSelectExtrachoices: [{ extrachoice: "elemental epitome" }],
			"elemental epitome": {
				name: "Elemental Epitome",
				extraname: "Elements 17",
				source: [["PHB24", 106]],
				description: " [improves Elemental Attunement]",
			},
		},
	},
});

// Paladin Subclasses
AddSubClass("paladin", "glory", {
	regExpSearch: /^(?=.*glory)(((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|warrior|warlord|trooper))))).*$/i,
	subname: "Oath of Glory",
	subnameShort: "Glory",
	source: [["PHB24", 114]],
	features: {
		"weapon mastery": Object.assign({}, ClassList.paladin.features["weapon mastery"], typeA4 ? {} : {
			description: levels.map(function (n) {
				return n < 18 ? ClassList.paladin.features["weapon mastery"].description : " (change 2/LR)";
			}),
		}),
		"subclassfeature3": {
			name: "Inspiring Smite",
			source: [["PHB24", 114]],
			minlevel: 3,
			description: levels.map(function (n) {
				return desc("After I cast *Divine Smite*, I can expend 1 Channel Divinity to distribute 2d8 + " + n + " (Paladin level) Temporary Hit Points among creatures within 30 ft and myself however I like.");
			}),
			additional: levels.map(function (n) {
				return "1 Channel Divinity, 2d8+" + n + " Temp HP";
			}),
			spellcastingExtra: ["guiding bolt", "heroism", "enhance ability", "magic weapon", "haste", "protection from energy", "compulsion", "freedom of movement", "legend lore", "yolande's regal presence"],
			toNotesPage: [
				{
					name: "Tenets of the Oath of Glory", // needs to start with "Tenets of the Oath"
					origin: "",
					note: [
						"Paladins who take the Oath of Glory believe they and their companions are destined to achieve glory through deeds of heroism and share the following tenets.",
						" \u2022 Endeavor to be known by your deeds.",
						" \u2022 Face hardships with courage.",
						" \u2022 Inspire others to strive for glory.",
					],
				},
				GenericClassFeatures["paladin's oath"].toNotesPage,
			],
		},
		"subclassfeature3.1": {
			name: "Peerless Athlete",
			source: [["PHB24", 115]],
			minlevel: 3,
			description: desc(
				"As a Bonus Action, I can expend a Channel Divinity to get Advantage on my Athletics and Acrobatics checks and increase my Long and High jumps by 10 ft for 1 hour."
			),
			action: [["bonus action", " (Channel Divinity)"]],
			additional: "1 Channel Divinity",
		},
		"subclassfeature7": {
			name: "Aura of Alacrity",
			source: [["PHB24", 115]],
			minlevel: 7,
			description: " [+10 ft Speed]" +
				desc("Allies in my aura on their turn gain +10 ft Speed until the end of their next turn."),
			speed: { allModes: "+10" },
		},
		"subclassfeature15": {
			name: "Glorious Defense",
			source: [["PHB24", 115]],
			minlevel: 15,
			description: desc(
				"As a Reaction when an attack hits me or a creature " + (typePF ? "within" : "in") + " 10 ft, I can increase their AC by my Cha modifier vs that attack. If this causes it to miss, I can attack the attacker if " + (typePF ? "within my" : "in") + " reach."
			),
			usages: "Charisma modifier per ",
			usagescalc: "event.value = Math.max(1, What('Cha Mod'));",
			recovery: "Long Rest",
			action: [["reaction", ""]],
		},
		"subclassfeature20": {
			name: "Living Legend",
			source: [["PHB24", 115]],
			minlevel: 20,
			description: desc([
				"As a Bonus Action, I can gain the following benefits for 10 minutes.",
				" \u2022 ***Charismatic***. I have advantage on all Charisma checks.",
				" \u2022 ***Saving Throw Reroll***. As a Reaction " + (typePF ? "when" : "if") + " I fail a save, I can reroll it but must use that roll.",
				" \u2022 ***Unerring Strike***. Once on each of my turns I can turn an attack that I missed into a hit.",
				"I can expend a level 5+ spell slot (SS 5+) to restore my use of this feature.",
			]),
			recovery: "Long Rest",
			usages: 1,
			altResource: "SS 5+",
			action: [
				["bonus action", " (activate)"],
				["reaction", " (reroll save)"],
			],
		},
	},
});
AddSubClass("paladin", "ancients", {
	regExpSearch: /^(?=.*(ancient|nature|natural|green|fey|horned))(((?=.*paladin)|((?=.*(exalted|sacred|holy|divine|green))(?=.*(knight|warrior|warlord|trooper))))).*$/i,
	subname: "Oath of the Ancients",
	subnameShort: "Ancients",
	source: [["PHB24", 115]],
	features: {
		"subclassfeature3": {
			name: "Nature's Wrath",
			source: [["PHB24", 115]],
			minlevel: 3,
			description: desc(
				"As a Magic action, I can use 1 CD to have all creatures of my choice that I can see " + (typePF ? "within" : "in") + " 15 ft make a Strength save or be Restrained for 1 min, repeating the save at the end of " + (typePF ? "their" : "its") + " turns."
			),
			additional: "1 Channel Divinity",
			action: [["action", " (Channel Divinity)"]],
			spellcastingExtra: ["ensnaring strike", "speak with animals", "misty step", "moonbeam", "plant growth", "protection from energy", "ice storm", "stoneskin", "commune with nature", "tree stride"],
			toNotesPage: [
				{
					name: "Tenets of the Oath of the Ancients", // needs to start with "Tenets of the Oath"
					origin: "",
					note: [
						"This oath binds Paladins to preserve life and light in the world with the following tenets.",
						" \u2022 Kindle the light of hope.",
						" \u2022 Shelter life.",
						" \u2022 Delight in art and laughter.",
					],
				},
				GenericClassFeatures["paladin's oath"].toNotesPage,
			],
		},
		"subclassfeature7": {
			name: "Aura of Warding",
			source: [["PHB24", 116]],
			minlevel: 7,
			description: desc(
				"While in my aura, my allies and I have Resistance to Necrotic, Psychic and Radiant damage."
			),
			dmgres: ["Necrotic", "Psychic", "Radiant"],
		},
		"subclassfeature15": {
			name: "Undying Sentinel",
			source: [["PHB24", 116]],
			minlevel: 15,
			description: levels.map(function (n) {
				return desc([
					"When I am reduced to 0 Hit Points and not killed, I can drop to 1 HP and regain " + (n * 3) + " HP.",
					"Additionally, I can't be aged magically and cease visibly aging.",
				]);
			}),
			usages: 1,
			recovery: "Long Rest",
			additional: levels.map(function (n) {
				return (n * 3 + 1) + " HP";
			}),
		},
		"subclassfeature20": {
			name: "Elder Champion",
			source: [["PHB24", 116]],
			minlevel: 20,
			description: desc([
				"As a Bonus Action, I can give my Aura of Protection these benefits for 1 minute.",
				" \u2022 ***Diminish Defiance***. Enemies in my aura have Disadv on saves vs my spells and CD options.",
				" \u2022 ***Regeneration***. At the start of each of my turns I regain 10 Hit Points.",
				" \u2022 ***Swift Spells***. I can cast spells with a casting time of an action " + (typePF ? "using" : "as") + " a Bonus Action instead.",
				"I can end it for free. I can expend a level 5+ spell slot (SS 5+) to restore use of this feature.",
			]),
			recovery: "Long Rest",
			usages: 1,
			altResource: "SS 5+",
			action: [["bonus action", ""]],
		},
	},
});
AddSubClass("paladin", "vengeance", {
	regExpSearch: /^(((?=.*(vengeance|wrath|justice))((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|warrior|warlord|trooper)))))|((?=.*dark)(?=.*knight))|(?=.*avenger)).*$/i,
	subname: "Oath of Vengeance",
	subnameShort: "Vengeance",
	source: [["PHB24", 116]],
	features: {
		"subclassfeature3": { // includes Soul of Vengeance
			name: "Vow of Enmity",
			source: [["PHB24", 117]],
			minlevel: 3,
			description: levels.map(function (n) {
				var text = [
					"When I take the Attack action, I can expend 1 CD to utter a vow against a creature I can see within 30 ft. I have Adv on attack rolls against it for 1 min or until I use this again.",
					"If the creature drops to 0 HP, I can move the vow to another within 30 ft (no action).",
				];
				if (n >= 15) text.splice(1, 0, "As a Reaction after it attacks, I can make a melee attack against it, if it's within range.");
				return desc(text);
			}),
			additional: "1 Channel Divinity",
			spellcastingExtra: ["bane", "hunter's mark", "hold person", "misty step", "haste", "protection from energy", "banishment", "dimension door", "hold monster", "scrying"],
			toNotesPage: [
				{
					name: "Tenets of the Oath of Vengeance", // needs to start with "Tenets of the Oath"
					origin: "",
					note: [
						"This oath binds Paladins to punish those who have committed grievously evil acts with the following tenets.",
						" \u2022 Show the wicked no mercy.",
						" \u2022 Fight injustice and its causes.",
						" \u2022 Aid those harmed by injustice.",
					],
				},
				GenericClassFeatures["paladin's oath"].toNotesPage,
			],
		},
		"subclassfeature7": {
			name: "Relentless Avenger",
			source: [["PHB24", 117]],
			minlevel: 7,
			description: desc(
				"When I hit a creature with an Opportunity Attack, I can reduce its Speed to 0 until the end of the turn. I can then move up to half my Speed without provoking Opportunity Attacks."
			),
		},
		"subclassfeature15": {
			name: "Soul of Vengeance",
			source: [["PHB24", 117]],
			minlevel: 15,
			description: " [adds Reaction to Vow of Enmity]",
			action: [["reaction", ""]],
		},
		"subclassfeature20": {
			name: "Avenging Angel",
			source: [["PHB24", 117]],
			minlevel: 20,
			description: desc([
				"As a Bonus Action, I can gain the following benefits for 10 min or until I end it (no action).",
				" \u2022 ***Flight***. Spectral wings give me 60 ft Fly Speed, and I can hover.",
				" \u2022 ***Frightful Aura***. When an enemy starts its turn in my aura they must make a Wis save or be Frightened for 1 min or until damaged. While Frightened, attack rolls have Adv vs them.",
				"I can expend a level 5+ spell slot (SS 5+) to restore my use of this feature.",
			]),
			recovery: "Long Rest",
			usages: 1,
			altResource: "SS 5+",
			action: [["bonus action", ""]],
		},
	},
});

// Ranger Subclasses
var PHB_BeastMaster = {
	baseCreature: {
		type: "Beast",
		alignment: "Neutral",
		ac: "13+oWis",
		hdLinked: ["ranger"],
		minlevelLinked: ["ranger"],
		passivePerception: 12,
		languages: "Understands the languages of its master but can't speak",
		challengeRating: "0",
		proficiencyBonus: 2,
		proficiencyBonusLinked: true,
		attacksAction: 1,
		addMod: [{
			type: "skill", field: "all", mod: "Prof",
			text: "The Primal Companion adds its Proficiency Bonus to all its ability checks and saving throws.",
		}, {
			type: "skill", field: "Init", mod: "Prof",
			text: "The Primal Companion adds its Proficiency Bonus to all its ability checks and saving throws.",
		}, {
			type: "save", field: "all", mod: "Prof",
			text: "The Primal Companion adds its Proficiency Bonus to all its ability checks and saving throws.",
		}],
		calcChanges: {
			hp: function (totalHD, HDobj, prefix) {
				if (!classes.known.ranger) return;
				var rngrLvl = classes.known.ranger.level;
				if (What(prefix + "Comp.Use.HD.Die") == 6) {
					var multiplier = { die: 4, text: "four" };
				} else {
					var multiplier = { die: 5, text: "five" };
				}
				var total = multiplier.die * rngrLvl;
				HDobj.alt.push(multiplier.die + total);
				HDobj.altStr.push([
					" = " + multiplier.die + " as a base",
					" + " + multiplier.die + " \xD7 " + rngrLvl + " from " + multiplier.text + " times my Ranger level (" + total + ")",
				].join("\n"));
			},
			setAltHp: true,
		},
		features: [{
			name: "Master",
			description: "The beast obeys the commands of its master and shares its Proficiency Bonus. It takes its turn during that of its master, on the same initiative count. It can move and take Reactions on its own, but only takes the Dodge action on its turn unless its master takes a Bonus Action to command it to take another action. Its master can also forgo one attack during their Attack action to command the beast to do a Beast's Strike. If its master is incapacitated, the beast can take any action, not just Dodge. The beast vanishes if its master dies.",
		}],
		traits: [{
			name: "Primal Rebirth",
			description: "Within an hour of the beast's death, its master can take a Magic action to touch it and expend a spell slot to have it return to life after " + (typePF ? "1 min with full HP." : "1 minute with all its HP."),
		}, {
			name: "Primal Bond",
			description: "The beast adds its Proficiency Bonus to all its ability checks and saving throws.",
		}, {
			name: "Exceptional Training",
			minlevel: 7,
			description: "(Beast Master 7). As a Bonus Action if commanded to do so, the beast can take the Dash, Disengage, Dodge, or Help action. Its attacks can deal Force damage" + (typePF ? " instead of their normal damage type." : "."),
			joinString: " ",
			eval: function (prefix, lvl) {
				var field = prefix + "Comp.Use.Attack.1.Damage Type";
				var currentVal = What(field);
				if (/force/i.test(currentVal)) return;
				var newVal = "Force/" + currentVal
					.replace(/(Bludg|Pierc|Slash)(eon)?ing/ig, "$1.")
					.replace("Bludg./Pierc.", "B/P");
				Value(field, newVal);
			},
			removeeval: function (prefix, lvl) {
				var field = prefix + "Comp.Use.Attack.1.Damage Type";
				var currentVal = What(field);
				if (!/force/i.test(currentVal)) return;
				var newVal = currentVal.replace(/Force\/?/ig, "")
					.replace("Bludg.", "Bludgeoning")
					.replace("Pierc.", "Piercing")
					.replace("Slash.", "Slashing")
					.replace(/^B\/P$/i, "Bludg./Pierc.");
				Value(field, newVal);
			},
		}, {
			name: "Bestial Fury",
			minlevel: 11,
			description: "(Beast Master 11). When commanded to do a Beast's Strike, the beast can make two Beast's Strikes. Once per turn, the beast can benefit from its master's *Hunter's Mark* bonus damage when it attacks a creature affected by that spell.",
			joinString: " ",
			eval: function (prefix, lvl) {
				Value(prefix + "Comp.Use.Attack.perAction", 2);
			},
			removeeval: function (prefix, lvl) {
				Value(prefix + "Comp.Use.Attack.perAction", 1);
			},
		}],
	},
};
AddSubClass("ranger", "beast master", {
	regExpSearch: /^(?=.*beast)(?=.*master).*$/i,
	subname: "Beast Master",
	fullname: "Beast Master",
	source: [["PHB24", 122]],
	features: {
		"subclassfeature3": {
			name: "Primal Companion",
			source: [["PHB24", 122]],
			minlevel: 3,
			description: desc([
				"When I finish a Long Rest, I can summon a Beast of the Land, Sea, or Sky within 5 ft.",
				"I choose what kind of animal it is, fitting with its stats, but it always has primal markings.",
				"If I already have a Primal Companion, the old one vanishes when the new one appears.",
				"The beast is friendly to me and my allies and obeys my commands. It vanishes if I die.",
				"***The Beast in Combat***. It acts during my turn and can move and use its Reaction on its own.",
				"Unless I use a Bonus Action to command it, it only takes the Dodge action.",
				"I can forgo one attack of my Attack action to command it to take the Beast's Strike action.",
				"If I'm Incapacitated, the beast acts on its own and isn't limited to the Dodge action.",
				"***Restoring the Beast***. As a Magic action if the beast died within the last hour, I can touch it and expend a spell slot to have it return to life with all its Hit Points restored.",
			]),
			action: [
				["bonus action", " (command)"],
				["action", " (revive)"],
			],
			creaturesAdd: [
				["Beast of the Land", true],
				["Beast of the Sea",  true],
				["Beast of the Sky",  true],
			],
			creatureOptions: [
				Object.assign({}, PHB_BeastMaster.baseCreature, {
					name: "Beast of the Land",
					source: [["PHB24", 123]],
					size: 3,
					hp: 20,
					hd: [3, 8],
					speed: "40 ft, Climb 40 ft",
					scores: [14, 14, 15, 8, 14, 11],
					senses: "Darkvision 60 ft",
					attacks: [{
						name: "Beast's Strike (\u273D)",
						ability: 1, // will be overridden by useSpellMod
						damage: [1, 8, "B/P/S"],
						modifiers: ["", "Str+oWis"],
						range: "Melee (5 ft)",
						description: "If moved 20 ft and hit: +1d6 damage \x26 \u2264Large knocked Prone, see Charge",
						abilitytodamage: false,
						tooltip: "The Beast of the Land's Strike can deal Bludgeoning, Piercing, or Slashing damage (my choice when I summon the beast).\n\nIf the beast moved at least 20 ft straight toward the target before the hit, the target takes an extra 1d6 damage of the same type, and the target has the Prone condition if it is a Large or smaller creature.",
						useSpellMod: "ranger",
					}],
					actions: [{
						name: "Charge",
						description: "If the beast moves at least 20 ft straight toward a target and hits it with a Beast's Strike, " + (typePF ? "it" : "the target") + " takes +1d6 damage, and is knocked Prone if it's Large or smaller.",
					}],
					notes: [{
						name: "Beast's Strike Damage Type",
						description: "The damage type of the beast's attack can be Bludgeoning, Piercing, or Slashing damage, which is chosen by its master when they summon the beast.",
						bulletString: "(\u273D)",
					}],
				}),
				Object.assign({}, PHB_BeastMaster.baseCreature, {
					name: "Beast of the Sky",
					source: [["PHB24", 124]],
					size: 4,
					hp: 16,
					hd: [3, 6],
					speed: "10 ft, Fly 60 ft",
					scores: [6, 16, 13, 8, 14, 11],
					senses: "Darkvision 60 ft",
					attacks: [{
						name: "Beast's Strike",
						ability: 2, // will be overridden by useSpellMod
						damage: [1, 4, "slashing"],
						modifiers: ["", "Dex+oWis"],
						range: "Melee (5 ft)",
						description: "",
						abilitytodamage: false,
						useSpellMod: "ranger",
					}],
					actions: [{
						name: "Flyby",
						description: "The beast doesn't provoke Opportunity Attacks when it flies out of an enemy's reach.",
					}],
				}),
				Object.assign({}, PHB_BeastMaster.baseCreature, {
					name: "Beast of the Sea",
					source: [["PHB24", 124]],
					size: 3,
					hp: 20,
					hd: [3, 8],
					speed: "5 ft, Swim 60 ft",
					scores: [14, 14, 15, 8, 14, 11],
					senses: "Darkvision 90 ft",
					attacks: [{
						name: "Beast's Strike (\u273D)",
						ability: 1, // will be overridden by useSpellMod
						damage: [1, 6, "Bludg./Pierc."],
						modifiers: ["", "Str+oWis"],
						range: "Melee (5 ft)",
						abilitytodamage: false,
						description: "Hit: Grappled (Ranger spell save DC to escape)",
						tooltip: "The Beast of the Sky's Strike can deal Bludgeoning or Piercing damage (my choice when I summon the beast).\n\nAny target hit by the Beast's Strike has the Grappled condition (escape DC equals my spell save DC).",
						useSpellMod: "ranger",
					}],
					actions: [{
						name: "Amphibious",
						description: "The beast can breathe air and water.",
					}],
					notes: [{
						name: "Beast's Strike Damage Type",
						description: "The damage type of the beast's attack can be Bludgeoning or Piercing damage, which is chosen by its master when they summon the beast.",
						bulletString: "(\u273D)",
					}],
				}),
			],
		},
		"subclassfeature7": {
			name: "Exceptional Training",
			source: [["PHB24", 123]],
			minlevel: 7,
			description: desc([
				"When I take a Bonus Action to command my Primal Companion to take an action, I can also command it to take the Dash, Disengage, Dodge, or Help action using its Bonus Action.",
				"I can have the beast deal my choice of Force or its normal damage type with its attacks.",
			]),
		},
		"subclassfeature11": {
			name: "Bestial Fury",
			source: [["PHB24", 123]],
			minlevel: 11,
			description: desc([
				"When I command my Primal Companion to do a Beast's Strike, the beast can do so twice.",
				"Once per turn, it can deal my Hunter's Mark bonus damage when it hits an affected target.",
			]),
		},
		"subclassfeature15": {
			name: "Share Spells",
			source: [["PHB24", 123]],
			minlevel: 15,
			description: desc("When I cast a spell on myself, I can also affect my Primal Companion if it is within 30 ft."),
		},
	},
});
AddSubClass("ranger", "fey wanderer", {
	regExpSearch: /^(?=.*fey)(?=.*wanderer).*$/i,
	subname: "Fey Wanderer",
	fullname: "Fey Wanderer",
	source: [["PHB24", 124]],
	features: {
		"subclassfeature3": {
			name: "Dreadful Strikes",
			source: [["PHB24", 125]],
			minlevel: 3,
			description: levels.map(function (n) {
				return desc([
					"When I hit a creature with a weapon, I can deal an extra 1d" + (n < 11 ? 4 : 6) + " Psychic damage.",
					"A creature can only take this extra damage once per turn.",
				]);
			}),
			spellcastingExtra: ["charm person", "misty step", "summon fey", "dimension door", "mislead"],
			additional: levels.map(function (n) {
				return "1d" + (n < 11 ? 4 : 6) + " Psychic damage";
			}),
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (v.isWeapon && classes.known.ranger) {
							var die = classes.known.ranger.level < 11 ? 4 : 6;
							fields.Description += (fields.Description ? "; " : "") + "1/turn/target +1d" + die + " Psychic dmg";
						}
					},
					"All weapons get the bonus damage from my Dreadful Strikes added to their description. This is +1d4 Psychic damage that I can deal when I hit a creature with a weapon, but a creature can only take this extra damage once per turn. The damage increases to 1d6 at Ranger level 11.",
				],
			},
		},
		"subclassfeature3.1": function () {
			var choices = ["Deception", "Performance", "Persuasion"];
			var addMods = choices.concat(["Intimidation"]);
			var a = {
				name: "Otherworldly Glamour",
				source: [["PHB24", 124]],
				minlevel: 3,
				description: ' #[Select option with "Choose Feature"]#' + desc(
					"I can add my Wisdom modifier to Charisma checks (min 1) and gain proficiency in my choice of Deception, Performance, or Persuasion."
				),
				addMod: addMods.map(function (skillName) {
					return {
						type: "skill", field: skillName, mod: "max(1|Wis)",
						text: "I can add my Wisdom modifier to Charisma checks (min 1).",
					};
				}),
				choices: choices,
			};
			for (var i = 0; i < choices.length; i++) {
				var skill = choices[i];
				var attr = skill.toLowerCase();
				var wisdom = skill === "Performance" && !typePF ? "Wis" : "Wisdom";
				a[attr] = {
					name: "Otherworldly Glamour: " + skill,
					description: desc("I can add my " + wisdom + " modifier to Charisma checks (min 1). I gain proficiency in " + skill + "."),
					skills: [skill],
				}
			};
			return a;
		}(),
		"subclassfeature7": {
			name: "Beguiling Twist",
			source: [["PHB24", 125]],
			minlevel: 7,
			description: desc([
				"As a Reaction when a creature that I can see within 120 ft or I succeeds on a save against being Charmed or Frightened, I can force another creature within 120 ft to make a Wisdom save or be Charmed or Frightened (my choice) for 1 min.",
				"An affected creature can repeat its save at the end of each of its turns to end the condition.",
				"I have Advantage on saves against being Charmed or Frightened.",
			]),
			action: [["reaction", ""]],
			savetxt: { adv_vs: ["Charmed", "Frightened"] },
		},
		"subclassfeature11": {
			name: "Fey Reinforcements",
			source: [["PHB24", 125]],
			minlevel: 11,
			description: desc([
				"I can cast *Summon Fey* without a Material component.",
				"I can choose to cast it without requiring Concentration, but then its duration is 1 minute.",
				"Once per Long Rest, I can cast *Summon Fey* without expending a spell slot.",
			]),
			usages: 1,
			recovery: "Long Rest",
			spellChanges: {
				"summon fey": {
					components: "V,S",
					compMaterial: "",
					duration: "1min/conc,1h",
					description: "Chosen Fey Spirit; obeys verbal commands; takes turn after mine; vanishes at 0 HP; see book",
					changes: "I can cast *Summon Fey* without a Material component. I can also choose to cast it in a way that it doesn't require concentration, but then it has a duration of 1 minute. Once per Long Rest, I can cast it without expending a spell slot.",
					firstCol: "oncelr+markedbox",
				},
			},
		},
		"subclassfeature15": {
			name: "Misty Wanderer",
			source: [["PHB24", 125]],
			minlevel: 15,
			description: desc([
				"I can cast *Misty Step* without using a spell slot several times per Long Rest.",
				"When I cast *Misty Step*, I can bring along one willing creature that I can see within 5 ft.",
			]),
			usages: "Wisdom modifier per ",
			usagescalc: "event.value = Math.max(1, What('Wis Mod'));",
			recovery: "Long Rest",
			spellChanges: {
				"misty step": {
					description: "Teleport myself and 1 willing crea I can see within 5 ft up to 30 ft to an unoccupied space I can see",
					changes: "I can bring along one willing creature that I can see within 5 ft when I cast *Misty Step*. I can cast *Misty Step* without using a spell slot a number of times equal to my Wisdom modifier (min 1) per Long Rest.",
					firstCol: "oncelr+markedbox",
				},
			},
		},
	},
});
AddSubClass("ranger", "gloom stalker", {
	regExpSearch: /^(?=.*gloom)(?=.*stalker).*$/i,
	subname: "Gloom Stalker",
	fullname: "Gloom Stalker",
	source: [["PHB24", 125]],
	features: {
		"subclassfeature3": {
			name: "Dread Ambusher",
			source: [["PHB24", 125]],
			minlevel: 3,
			description: desc([
				"***Ambusher's Leap***. My Speed is increased by 10 ft during my first turn each combat.",
				"***Initiative Bonus***. I can add my Wisdom modifier to my Initiative rolls.",
			]),
			addMod: [{
				type: "skill", field: "Init", mod: "Wis",
				text: "I can add my Wisdom modifier to my Initiative rolls.",
			}],
			spellcastingExtra: ["disguise self", "rope trick", "fear", "greater invisibility", "seeming"],
		},
		"subclassfeature3.1": { // includes Stalker's Flurry
			name: "Dreadful Strike",
			source: [["PHB24", 125]],
			minlevel: 3,
			description: levels.map(function (n) {
				var lines = [
					"Once per turn when I hit a creature with a weapon, I can deal it +2d" + (n < 11 ? 6 : 8) + " Psychic damage.",
				];
				if (n >= 11) {
					lines.push(
						"When I use this feature I can cause one of the following additional effects.",
						" \u2022 ***Sudden Strike***. I can make another attack with the same weapon against a different creature within 5 ft of the original target if that creature is within the weapon's range.",
						" \u2022 ***Mass Fear***. The target and each creature within 10 ft of it must make a Wisdom save or be Frightened until the start of my next turn."
					);
				}
				return desc(lines);
			}),
			usages: levels.map(function (n) {
				return n < 3 ? "" : n < 11 ? "Wisdom modifier per " : "Wis mod per ";
			}),
			usagescalc: "event.value = Math.max(1, What('Wis Mod'));",
			recovery: typePF ? "LR" : "Long Rest",
			additional: levels.map(function (n) {
				return n < 11 ? "2d6" : "2d8 \x26 effect";
			}),
		},
		"subclassfeature3.2": {
			name: "Umbral Sight",
			source: [["PHB24", 125]],
			minlevel: 3,
			description: desc([
				"I gain 60 ft Darkvision, or increase my Darkvision by 60 ft if I already have it.",
				"While in Darkness, I gain the Invisible condition to creatures relying on Darkvision to see me.",
			]),
			vision: [["Darkvision", "fixed 60"], ["Darkvision", "+60"]],
		},
		"subclassfeature7": {
			name: "Iron Mind",
			source: [["PHB24", 126]],
			minlevel: 7,
			description: " [auto-selected]",
			choices: [
				"Wisdom save proficiency [default]",
				"Intelligence save proficiency (req: Wis save prof)",
				"Charisma save proficiency (req: Wis save prof)",
			],
			defaultChoice: "wisdom save proficiency [default]",
			"wisdom save proficiency [default]": {
				name: "Iron Mind",
				description: desc("I gain proficiency with Wisdom saves unless I already have it, in which case I can choose proficiency in Intelligence or Charisma saves instead."),
				saves: ["Wis"],
			},
			"intelligence save proficiency (req: wis save prof)": {
				name: "Iron Mind: Intelligence",
				description: desc("I gain proficiency with Intelligence saves."),
				saves: ["Int"],
				prereqeval: function () {
					var oField = tDoc.getField("Wis ST Prof");
					if (!oField.isBoxChecked(0) || !oField.userName) return false;
					var otherSources = oField.userName.replace(/[\n\r]+.*\bIron Mind\b.*/ig, "").match(/\n/g);
					return otherSources && otherSources.length;
				},
			},
			"charisma save proficiency (req: wis save prof)": {
				name: "Iron Mind: Charisma",
				description: desc("I gain proficiency with Charisma saves."),
				saves: ["Cha"],
				prereqeval: function () {
					var oField = tDoc.getField("Wis ST Prof");
					if (!oField.isBoxChecked(0) || !oField.userName) return false;
					var otherSources = oField.userName.replace(/[\n\r]+.*\bIron Mind\b.*/ig, "").match(/\n/g);
					return otherSources && otherSources.length;
				},
			},
		},
		"subclassfeature11": {
			name: "Stalker's Flurry",
			source: [["PHB24", 126]],
			minlevel: 11,
			description: " [improves Dreadful Strike]",
		},
		"subclassfeature15": {
			name: "Shadowy Dodge",
			source: [["PHB24", 126]],
			minlevel: 15,
			description: desc([
				"As a Reaction when a creature attacks me, I can impose Disadvantage on its attack roll.",
				"After the attack, hit or miss, I can teleport up to 30 ft to an unoccupied space I can see.",
			]),
			action: [["reaction", ""]],
		},
	},
});

// Rogue Subclasses
var PHB_ArcaneTrickster = {
	cantrips: levels.map(function (n) {
		return n < 3 ? 0 : n < 10 ? 2 : 3;
	}),
	spells: [0, 0, 3, 4, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 10, 11, 11, 11, 12, 13],
};
AddSubClass("rogue", "arcane trickster", {
	regExpSearch: /^(?=.*(trickster|rogue|miscreant))(?=.*\b(eldritch|arcane|magic|mage|witch)\b).*$/i,
	subname: "Arcane Trickster",
	fullname: "Arcane Trickster",
	source: [["PHB24", 132]],
	spellcastingAbility: 4,
	spellcastingFactor: 3,
	spellcastingList: {
		class: "wizard",
		level: [0, 4],
	},
	spellcastingKnown: {
		cantrips: PHB_ArcaneTrickster.cantrips,
		spells: PHB_ArcaneTrickster.spells,
	},
	features: {
		"subclassfeature3": {
			name: "Spellcasting",
			source: [["PHB24", 132]],
			minlevel: 3,
			description: desc(
				"I can cast Wizard cantrips/spells I know, using Intelligence as spellcasting ability. I can use Arcane Focus as Spellcasting Focus for them. I can swap 1 spell when I gain a Rogue level."
			),
			additional: levels.map(function (n, i) {
				return n < 3 ? "" : PHB_ArcaneTrickster.cantrips[i] + " cantrips \x26 " + PHB_ArcaneTrickster.spells[i] + " spells known";
			}),
		},
		"subclassfeature3.1": {
			name: "Mage Hand Legerdemain",
			source: [["PHB24", 133]],
			minlevel: 3,
			description: desc(
				"I can cast *Mage Hand* as a Bonus Action and can make the hand Invisible. I can control it as a Bonus Action and through it can make Dexterity (Sleight of Hand) checks."
			),
			spellChanges: {
				"mage hand": {
					time: "Bns",
					description: "(In)visible hand, carries \u226410lb; Bns to control \x26 move 30ft; make Sleight of Hand checks; ends if recast",
					changes: "My Mage Hand Legerdemain class feature makes *Mage Hand* a Bonus Action to cast and control, enables Dexterity (Sleight of Hand) checks and can make the spectral hand invisible.",
				},
			},
			spellcastingBonus: [{
				name: "Mage Hand cantrip",
				spells: ["mage hand"],
				selection: ["mage hand"],
			}],
		},
		"subclassfeature9": {
			name: "Magical Ambush",
			source: [["PHB24", 133]],
			minlevel: 9,
			description: desc(
				"If I have the Invisible condition when I cast a spell on a creature, it has Disadvantage on any saving throw it makes against the spell on the same turn."
			),
		},
		"subclassfeature13": {
			name: "Versatile Trickster",
			source: [["PHB24", 133]],
			minlevel: 13,
			description: " [improves Cunning Strike: Trip]",
		},
		// Update Trip cunning strike option
		"cunning strike": Object.assign({}, ClassList.rogue.features["cunning strike"], {
			trip: Object.assign({}, ClassList.rogue.features["cunning strike"].trip, {
				description: levels.map(function (n) {
					var originalDescription = ClassList.rogue.features["cunning strike"].trip.description;
					return n < 13 ? originalDescription : originalDescription + " I can also do the same to a target within 5 ft of my *Mage Hand*.";
				}),
			}),
		}),
		"subclassfeature17": {
			name: "Spell Thief",
			source: [["PHB24", 133]],
			minlevel: 17,
			description: desc(
				"As a Reaction after a creature casts a spell that targets me or includes me in its area, I can have the creature make an Intelligence save (spell save DC) or I negate the spell's effect against me. If the spell is at least level 1 and of a level I can cast, I steal its knowledge and for the next 8 hours, I have it prepared and the creature can't cast it during that time."
			),
			additional: "if spell stolen",
			usages: 1,
			recovery: "Long Rest",
			action: [["reaction", ""]],
		},
	},
});
AddSubClass("rogue", "assassin", {
	regExpSearch: /^(?!.*(barbarian|bard|cleric|druid|fighter|monk|paladin|ranger|sorcerer|warlock|wizard))(?=.*assassin).*$/i,
	subname: "Assassin",
	fullname: "Assassin",
	source: [["PHB24", 134]],
	abilitySave: 2,
	features: {
		"subclassfeature3": {
			name: "Assassinate",
			source: [["PHB24", 134]],
			minlevel: 3,
			description: levels.map(function (n) {
				return desc([
					"***Surprising Strikes***. During the first round of combat, my Sneak Attack deals +" + n + " damage (Rogue level), and I have Advantage on attacks against creatures that haven't taken a turn.",
					"***Initiative***. I have Advantage on Initiative rolls.",
				]);
			}),
			advantages: [["Initiative", true]],
			additional: levels.map(function (n) {
				return n < 3 ? "" : "+" + n + " Sneak Attack damage on 1st round"
			}),
		},
		"subclassfeature3.1": {
			name: "Assassin's Tools",
			source: [["PHB24", 134]],
			minlevel: 3,
			description: desc("I gain a Disguise Kit and a Poisoner's Kit and have proficiency with them."),
			toolProfs: ["Disguise Kit", "Poisoner's Kit"],
			eval: function () {
				// Perhaps first ask the user if they want these added and include a warning that they aren't automatically removed when this feature is removed...
				[ToolsList["disguise kit"], ToolsList["poisoner's kit"]].forEach(function (kit) {
					AddToInv("gear", "l", kit.name, "", kit.weight);
				});
			},
		},
		"subclassfeature9": {
			name: "Infiltration Expertise",
			source: [["PHB24", 134]],
			minlevel: 9,
			description: desc(
				"***Masterful Mimicry***. I can mimic another person's speech and handwriting if I spend 1 hour studying them. ***Roving Aim***. My Speed isn't reduced to 0 by using Steady Aim."
			),
		},
		// Update Steady Aim to remove the Speed = 0 sentence from level 9 onwards
		"steady aim": Object.assign({}, ClassList.rogue.features["steady aim"], {
			description: levels.map(function (n) {
				var originalDescription = ClassList.rogue.features["steady aim"].description;
				return n < 9 ? originalDescription : originalDescription.match(/[\s\S]*?\./)[0];
			}),
		}),
		"subclassfeature13": {
			name: "Envenom Weapons",
			source: [["PHB24", 134]],
			minlevel: 13,
			description: " [improves Cunning Strike: Poison]",
		},
		// Update Cunning Strike: Poison option to include the extra damage from level 13 onwards
		"cunning strike": Object.assign({}, ClassList.rogue.features["cunning strike"], {
			poison: Object.assign({}, ClassList.rogue.features["cunning strike"].poison, {
				description: levels.map(function (n) {
					return n < 13 ? ClassList.rogue.features["cunning strike"].poison.description : desc(
						"If I have a Poisoner's Kit on my person, I can add a toxin to my strike. The target must make a Constitution save or be Poisoned for 1 min and take 2d6 Poison damage. It can repeat the save at the end of each of its turns to end this or take 2d6 Poison damage on a failure. Damage from this feature ignores Resistance to Poison damage."
					);
				}),
			}),
		}),
		"subclassfeature17": {
			name: "Death Strike",
			source: [["PHB24", 134]],
			minlevel: 17,
			description: desc(
				"When I hit with my Sneak Attack on the first round of a combat, the target must succeed on a Constitution saving throw (DC 8 + Dexterity modifier + Proficiency Bonus), or the attack's damage is doubled."
			),
		},
	},
});
AddSubClass("rogue", "soulknife", {
	regExpSearch: /soulknife/i,
	subname: "Soulknife",
	fullname: "Soulknife",
	source: [["PHB24", 135]],
	features: {
		"subclassfeature3": {
			name: "Psionic Energy Dice",
			source: [["PHB24", 135]],
			minlevel: 3,
			description: levels.map(function (n) {
				return n >= 18 ? "" : desc([
					"I gain a pool of Psionic Energy Dice (PsiD) that fuel my Soulknife abilities.",
					"I regain one expended PsiD on a Short Rest and regain all PsiD after a Long Rest.",
				]);
			}),
			additional: "regain 1/SR",
			usages: levels.map(function (n, i) {
				if (n < 3) return "";
				var diceNumber = n < 5 ? 4 : n < 9 ? 6 : n < 13 ? 8 : n < 17 ? 10 : 12;
				return diceNumber + "d" + PHB_PsiDSize[i] + " per ";
			}),
			recovery: "Long Rest",
		},
		"subclassfeature3.1": {
			name: "Psionic Power",
			source: [["PHB24", 135]],
			minlevel: 3,
			description: levels.map(function (n, i) {
				return desc([
					"***Psi-Bolstered Knack***. If I fail an ability check using a skill or tool with which I am proficient, I can add +1d" + PHB_PsiDSize[i] + " (PsiD) to the check. The PsiD is only expended if the check then succeeds.",
					"***Psychic Whispers (1/LR or PsiD)***. As a Magic action, I can choose up to Prof Bonus creatures that I can see. For 1d" + PHB_PsiDSize[i] + " (PsiD) hours, while within 1 mile, I can communicate telepathically with each. Each can end (no action). I can expend a PsiD to restore use of this feature.",
				]);
			}),
			action: [["action", "Psychic Whispers"]],
			extraLimitedFeatures: [{
				name: "Psychic Whispers",
				usages: 1,
				recovery: "Long Rest",
				altResource: "PsiD",
			}],
		},
		"subclassfeature3.2": {
			name: "Psychic Blades",
			source: [["PHB24", 136]],
			minlevel: 3,
			description: levels.map(function (n) {
				return n < 17 ? " (see third page)" : undefined;
			}),
			action: [["bonus action", "Psychic Blade 1d4 (after Attack action)"]],
			weaponOptions: [{
				regExpSearch: /^(?=.*psychic)(?=.*blade).*$/i,
				name: "Psychic Blade",
				source: [["PHB24", 136]],
				ability: 1,
				type: "Simple",
				damage: [1, 6, "psychic"],
				range: "Melee, 60/120 ft",
				description: "Finesse, Thrown; Bonus Action: 1d4 instead of 1d6",
				abilitytodamage: true,
				selectNow: true,
				mastery: "vex",
				masteryAlways: true,
			}],
			"psychic blades": {
				name: "Psychic Blades",
				extraname: "Soulknife 3",
				description: desc([
					"Whenever I take the Attack action or make an Opportunity Attack, I can make the attack with a Psychic Blade. I require a free hand to manifest a blade. The blade disappears after the attack and leaves no mark.",
					"As a Bonus Action after I attack with the blade on my turn, I can make an attack with a second psychic blade on the same turn if I have my other hand free to create it. The damage die of this attack is 1d4.",
				]),
			},
			"psychic blade: vex": {
				name: "Psychic Blade: Vex",
				extraname: "Psychic Blades, Soulknife 3",
				description: desc(WeaponMasteriesList.vex.description),
			},
			autoSelectExtrachoices: [{
				extrachoice: "psychic blades",
			}, {
				extrachoice: "psychic blade: vex",
			}],
		},
		"subclassfeature9": {
			name: "Soul Blades",
			source: [["PHB24", 136]],
			minlevel: 9,
			description: levels.map(function (n, i) {
				return desc([
					"***Homing Strikes***. If I make an attack with Psychic Blade and miss, I can add +1d" + PHB_PsiDSize[i] + " (PsiD) to the attack roll. The PsiD is only expended if it causes the attack to hit.",
					"***Psychic Teleportation (1 PsiD)***. As a Bonus Action if I have an empty hand, I can expend 1 PsiD to teleport to an unoccupied space that I can see up to 1d" + PHB_PsiDSize[i] + " (PsiD) times 10 ft away.",
				]);
			}),
			action: [["bonus action", "Psychic Teleportation"]],
		},
		subclassfeature13: {
			name: "Psychic Veil",
			source: [["PHB24", 136]],
			minlevel: 13,
			description: desc(
				"As a Magic action, I can become Invisible for 1 hour or until I dismiss this effect, damage a creature, or force one to make a save. I can expend a PsiD to restore use of this feature."
			),
			action: [["action", ""]],
			usages: 1,
			recovery: "Long Rest",
			altResource: "PsiD",
		},
		subclassfeature17: {
			name: "Rend Mind",
			source: [["PHB24", 136]],
			minlevel: 17,
			description: desc(
				"When I hit a Sneak Attack with Psychic Blades, I can have the target make a Wis save (DC 8 + Dex mod + PB) or be Stunned for 1 min. It can repeat the save at the end of its turns."
			),
			usages: 1,
			recovery: "Long Rest",
			altResource: "3 PsiD",
		},
		// Shorten/hide core Rogue abilities to allow all Soulknife abilities to fit
		"devious strikes": Object.assign({}, ClassList.rogue.features["devious strikes"], {
			description: levels.map(function (n) {
				return n < 17 ? ClassList.rogue.features["devious strikes"].description : undefined;
			}),
		}),
		"cunning strike": Object.assign({}, ClassList.rogue.features["cunning strike"], {
			description: levels.map(function (n) {
				return n < 20 ? ClassList.rogue.features["cunning strike"].description : " (" + (typePF ? "" : "see ") + "third page)";
			}),
		}),
	},
});

// Sorcerer Subclasses
var PHB_AberrantSorcerer = AddSubClass("sorcerer", "aberrant", {
	regExpSearch: /^(?=.*aberrant)(?=.*(sorcerer|sorcery|mind)).*$/i,
	subname: "Aberrant Sorcery",
	subnameShort: "Aberrant",
	fullname: "Aberrant Sorcerer",
	source: [["PHB24", 145]],
	features: {
		"subclassfeature3": {
			name: "Psionic Spells",
			source: [["PHB24", 145]],
			minlevel: 3,
			spellcastingExtra: ["mind sliver", "arms of hadar", "dissonant whispers", "calm emotions", "detect thoughts", "hunger of hadar", "sending", "evard's black tentacles", "summon aberration", "rary's telepathic bond", "telekinesis"],
			spellcastingExtraApplyNonconform: true,
			autoSelectExtrachoices: [{
				extrachoice: "psionic spells",
			}],
			"psionic spells": {
				name: "Psionic Spells",
				extraname: "Aberrant Sorcerer 3",
				description: "Will be set below, at the end of this add-on script.",
				// See bottom of this file
			},
		},
		"subclassfeature3.1": {
			name: "Telepathic Speech",
			source: [["PHB24", 145]],
			minlevel: 3,
			description: levels.map(function (n) {
				return desc("As a Bonus Action, I can choose one creature that I can see within 30 ft. While we are within Charisma modifier miles (min 1) we can telepathically communicate in a language we both know. This lasts for " + n + " minutes (Sorcerer level) or until I use this feature again.");
			}),
			additional: levels.map(function (n) {
				return n + " minutes";
			}),
			action: [["bonus action", ""]],
		},
		"subclassfeature6": {
			name: "Psionic Sorcery",
			source: [["PHB24", 146]],
			minlevel: 6,
			description: desc([
				"When I cast a Psionic Spell (see third page), I can cast it by spending a number of Sorcery Points equal to its level instead of using a spell slot. If I do so, it requires no Verbal, Somatic, or Material components, unless they are consumed or have a cost specified.",
			]),
			additional: "1-9 Sorcery Points",
		},
		"subclassfeature6.1": {
			name: "Psychic Defenses",
			source: [["PHB24", 146]],
			minlevel: 6,
			description: desc(
				"I have Resistance to Psychic damage and Adv on saves against being Charmed or Frightened."
			),
			dmgres: ["Psychic"],
			savetxt: { adv_vs: ["Charmed", "Frightened"] },
		},
		"subclassfeature14": {
			name: "Revelation in Flesh",
			source: [["PHB24", 146]],
			minlevel: 14,
			description: desc([
				"As a Bonus Action, I can spend Sorcery Points to gain a benefit of my choice per Sorcery Point spent. These benefits last for 10 minutes. See third page for possible benefits.",
			]),
			"revelation in flesh": {
				name: "Revelation in Flesh Benefits",
				extraname: "Aberrant Sorcerer 14",
				description: desc([
					"***Aquatic Adaptation***. I gain a Swim Speed equal to twice my Speed. I can breathe underwater.",
					"***Glistening Flight***. I gain a Fly Speed equal to my Speed, and can hover.",
					"***See the Invisible***. I can see any Invisible creature within 60 ft that isn't behind Total Cover.",
					"***Wormlike Movement***. I can move through any space as narrow as 1 inch, and can spend 5 ft of movement to escape from nonmagical restraints or the Grappled condition.",
				]),
				additional: "1-4 Sorcery Points",
			},
			autoSelectExtrachoices: [{
				extrachoice: "revelation in flesh",
			}],
		},
		"subclassfeature18": {
			name: "Warping Implosion",
			source: [["PHB24", 146]],
			minlevel: 18,
			description: desc([
				"As a Magic action, I teleport to an unoccupied space that I can see within 120 ft.",
				"After I disappear, each creature within 30 ft of the space that I left takes 3d10 Force damage and is pulled straight toward that space, ending in an empty space as close to it as possible. Each creature can make a Strength save to halve the damage and not be pulled in.",
				"I can expend 5 Sorcery Points to restore use of this feature.",
			]),
			action: [["action", ""]],
			usages: 1,
			recovery: "Long Rest",
			altResource: "5 SP",
		},
	},
});
AddSubClass("sorcerer", "clockwork", {
	regExpSearch: /^((?=.*(sorcerer|witch))(?=.*mechanus)|(?=.*clockwork)(?=.*(sorcerer|sorcery|soul))).*$/i,
	subname: "Clockwork Sorcery",
	subnameShort: "Clockwork",
	fullname: "Clockwork Sorcerer",
	source: [["PHB24", 146]],
	features: {
		"subclassfeature3": {
			name: "Restore Balance",
			source: [["PHB24", 146]],
			minlevel: 3,
			description: desc(
				"As a Reaction when I see a creature within 60 ft about to roll a d20 with Advantage or Disadvantage, I can prevent the roll from being affected by Advantage or Disadvantage."
			),
			action: ["Reaction", ""],
			usages: "Charisma modifier per ",
			usagescalc: "event.value = Math.max(1, What('Cha Mod'));",
			recovery: "Long Rest",
			spellcastingExtra: ["alarm", "protection from evil and good", "aid", "lesser restoration", "dispel magic", "protection from energy", "freedom of movement", "summon construct", "greater restoration", "wall of force" ],
			spellcastingExtraApplyNonconform: true,
		},
		"subclassfeature6": {
			name: "Bastion of Law",
			source: [["PHB24", 147]],
			minlevel: 6,
			description: desc([
				"As a Magic action, I can expend 1 to 5 Sorcery Points to create a magical ward around me or another creature that I can see within 30 feet of me. The ward is represented by a number of d8s equal to the number of Sorcery Points spent to create it. When the warded creature takes damage, it can expend a number of those dice, roll them, and reduce the damage taken by the total rolled on those dice.",
				"The ward lasts until I finish a Long Rest or until I use this feature again.",
			]),
			additional: "1-5 Sorcery Points",
			action: [["action", ""]],
		},
		"subclassfeature14": {
			name: "Trance of Order",
			source: [["PHB24", 147]],
			minlevel: 14,
			description: desc(
				"As a Bonus Action, I can enter a state for 1 minute. For the duration, attack rolls against me can't benefit from Advantage, and whenever I make a D20 Test, I can treat a roll of 9 or lower on the d20 as a 10. I can expend 5 Sorcery Points to restore use of this feature."
			),
			action: [["bonus action", ""]],
			usages: 1,
			recovery: "Long Rest",
			altResource: "5 SP",
		},
		"subclassfeature18": {
			name: "Clockwork Cavalcade",
			source: [["PHB24", 147]],
			minlevel: 18,
			description: desc([
				"As a Magic action, I create the following effects in a 30-ft Cube originating from me.",
				" \u2022 ***Heal***. Restore 100 Hit Points divided as I choose among any creatures in the Cube.",
				" \u2022 ***Repair***. Any damaged objects entirely in the Cube are repaired instantly.",
				" \u2022 ***Dispel***. Every spell of level \u22646 ends on creatures and objects of my choice in the Cube.",
				"I can expend 7 Sorcery Points to restore use of this feature.",
			]),
			usages: 1,
			recovery: "Long Rest",
			altResource: "7 SP",
			action: [["action", ""]],
		},
	},
});
AddSubClass("sorcerer", "wild magic", {
	regExpSearch: /^(?=.*(mage|magus|sorcerer|witch))(?=.*(wild|chaos|chaotic|limbo)).*$/i,
	subname: "Wild Magic",
	fullname: "Wild Mage",
	source: [["PHB24", 149]],
	features: {
		"subclassfeature3": {
			name: "Wild Magic Surge",
			source: [["PHB24", 149]],
			minlevel: 3,
			description: " [see Notes page for table]" + desc([
				"Once per turn, I can roll 1d20 immediately after I cast a Sorcerer spell with a spell slot.",
				"If I roll a 20, I roll on the Wild Magic Surge table to create a magical effect.",
				"If the magical effect is a spell, it cannot be affected by my Metamagic.",
			]),
			toNotesPage: [{
				name: "Wild Magic Surge Table",
				source: [["PHB24", 150]],
				popupName: "Wild Mage's Wild Magic Surge Table, part 1",
				additional: "results 01-44",
				note: [
					"My spellcasting can unleash surges of untamed magic. Once per turn, I can roll 1d20 immediately after I cast a Sorcerer spell with a spell slot. If I roll a 20, roll on the Wild Magic Surge table to create a magical effect.",
					"If the magical effect is a spell, it is too wild to be affected by my Metamagic.",
					[
						["1d100", "Effect"],
						["01\u201304", "For the next minute, I roll on this table at the start of each of my turns,"],
						["", "ignoring this result on subsequent rolls."],
						["05\u201308", "A creature that is Friendly towards me appears in a random " + (typePF ? "empty" : "unoccupied")],
						["", "space within 60 ft of me. The creature is under the DM's control and"],
						["", "disappears 1 minute later."],
						["", "**1d4**  **Creature**"],
						["", "  1    Modron Duodrone"],
						["", "  2    Flumph"],
						["", "  3    Modron Monodrone"],
						["", "  4    Unicorn"],
						["09\u201312", "For the next minute, I regain 5 " + (typePF ? "HP" : "Hit Points") + " at the start of each of my turns."],
						["13\u201316", "Creatures have Disadvantage on saving throws against the next spell"],
						["", "that I cast in the next minute that involves a saving throw."],
						["17\u201320", "I am subjected to an effect that lasts for 1 minute unless"],
						["", "its description says otherwise."],
						["", "**1d8**  **Effect**"],
						["", "  1    I am surrounded by faint, ethereal music that only creatures"],
						["", "        within 5 ft of me and I can hear."],
						["", "  2    My size increases by one size category."],
						["", "  3    I grow a long beard made of feathers that remains until I sneeze,"],
						["", "        at which point the feathers explode from my face and vanish."],
						["", "  4    I must shout when I speak."],
						["", "  5    Illusory butterflies flutter in the air within 10 ft of me."],
						["", "  6    An eye appears on my forehead, granting me Advantage on"],
						["", "        Wisdom (Perception) checks."],
						["", "  7    Pink bubbles float out of my mouth whenever I speak."],
						["", "  8    My skin turns a vibrant shade of blue for 24 hours or until"],
						["", "        the effect is ended by a *Remove Curse* spell."],
						["21\u201324", "For the next minute, all of my spells with a casting time of an action"],
						["", "have a casting time of a Bonus Action."],
						["25\u201328", "I am transported to the Astral Plane until the end of my next turn."],
						["", "I then return to the space that I previously occupied or the nearest"],
						["", "unoccupied space if that space is occupied."],
						["29\u201332", "The next time that I cast a spell that deals damage within the"],
						["", "next minute, don't roll the spell's damage dice for the damage."],
						["", "Instead use the highest number possible for each damage die."],
						["33\u201336", "I have Resistance to all damage for the next minute."],
						["37\u201340", "I turn into a potted plant until the start of my next turn. While I'm a",
						],
						["", "plant, I have the Incapacitated condition and have Vulnerability to all"],
						["", "damage. If I drop to 0 Hit Points, my pot breaks, and my form reverts."],
						["41\u201344", "For the next minute, I can teleport up to 20 ft as a Bonus Action"],
						["", "on each of my turns."],
					],
				],
			}, {
				name: "Wild Magic Surge Table",
				source: [["PHB24", 150]],
				popupName: "Wild Mage's Wild Magic Surge Table, part 2",
				additional: "results 45-00",
				note: [[
					["1d100", "Effect"],
					["45\u201348", "Up to three creatures that I choose within 30 ft of me and I have the"],
					["", "Invisible condition for 1 minute. This invisibility ends on a creature"],
					["", "immediately after it makes an attack, deals damage, or casts a spell."],
					["49\u201352", "A spectral shield hovers near me for the next minute,"],
					["", "granting me a +2 bonus to AC and immunity to Magic Missile."],
					["53\u201356", "I can take one extra action on this turn."],
					["57\u201360", "I cast a random spell. If the spell normally requires Concentration,"],
					["", "it doesn't require " + (typePF ? "it" : "Concentration") + " in this case; the spell lasts for its full duration."],
					["", "**1d10** **Spell**"],
					["", "  1    *Confusion*"],
					["", "  2    *Fireball*"],
					["", "  3    *Fog Cloud*"],
					["", "  4    *Fly* (cast on a random creature within 60 ft of me)"],
					["", "  5    *Grease*"],
					["", "  6    *Levitate* (cast on me)"],
					["", "  7    *Magic Missile* (cast as a level 5 spell)"],
					["", "  8    *Mirror Image*"],
					["", "  9    *Polymorph* (cast on me and if I fail the save, I turn into a Goat)"],
					["", "10    *See Invisibility*"],
					["61\u201364", "For the next minute, any flammable, nonmagical object that I touch"],
					["", "that isn't being worn or carried by another creature bursts into flame,"],
					["", "takes 1d4 Fire damage, and is burning."],
					["65\u201368", "If I die within the next hour, I immediately revive as if by the" + (typePF ? "\n\t" : " ") + "*Reincarnate* spell."],
					["69\u201372", "I have the Frightened condition until the end of my next turn."],
					["", "The DM determines the source of my fear."],
					["73\u201376", "I teleport up to 60 ft to an unoccupied space that I can see."],
					["77\u201380", "A random creature within 60 ft of me " + (typePF ? "is Poisoned" : "has the Poisoned condition") + " for 1d4 hours."],
					["81\u201384", "I radiate Bright Light in a 30-ft radius for the next minute."],
					["", "Any creature that ends its turn within 5 ft of me has the Blinded"],
					["", "condition until the end of its next turn."],
					["85\u201388", "Up to three creatures of my choice that I can see within 30 ft of me"],
					["", "take 1d10 Necrotic damage. I regain Hit Points equal to the sum of"],
					["", "the Necrotic damage dealt."],
					["89\u201392", "Up to three creatures of my choice that I can see within 30 ft of me"],
					["", "take 4d10 Lightning damage."],
					["93\u201396", "All creatures within 30 ft of me and I have Vulnerability to Piercing"],
					["", "damage for the next minute."],
					["97\u201300", "**1d6**  **Effect**"],
					["", "  1    I regain 2d10 Hit Points"],
					["", "  2    One ally of my choice within 300 ft of me regains 2d10 Hit Points"],
					["", "  3    I regain my lowest-level expended spell slot"],
					["", "  4    One ally of my choice within 300 ft of me regains their"],
					["", "        lowest-level expended spell slot"],
					["", "  5    I regain all expended Sorcery Points"],
					["", "  6    All the effects of row 17\u201320 affect me simultaneously."],
				]],
			}],
		},
		"subclassfeature3.1": {
			name: "Tides of Chaos",
			source: [["PHB24", 149]],
			minlevel: 3,
			description: desc([
				"I can give myself Advantage on one D20 Test before I roll the d20.",
				"(\u2736) When I cast a Sorcerer spell with a spell slot, I regain use of this feature.",
				"If I regain use of this feature by casting a spell, I roll on the Wild Magic Surge table.",
			]),
			usages: 1,
			recovery: "Long Rest",
			altResource: "\u2736",
		},
		"subclassfeature6": {
			name: "Bend Luck",
			source: [["PHB24", 149]],
			minlevel: 6,
			description: desc(
				"As a Reaction, after another creature that I can see rolls the d20 for a D20 Test, I can spend 1 Sorcery Point to apply 1d4 as a bonus or penalty (my choice) to the d20 roll."
			),
			action: [["reaction", ""]],
			additional: "1 Sorcery Point",
		},
		"subclassfeature14": {
			name: "Controlled Chaos",
			source: [["PHB24", 149]],
			minlevel: 14,
			description: desc("Whenever I roll on the Wild Magic Surge table, I can roll twice and use either number."),
		},
		"subclassfeature18": {
			name: "Tamed Surge",
			source: [["PHB24", 150]],
			minlevel: 18,
			description: desc([
				"After I cast a Sorcerer spell with a spell slot, I can create an effect of my choice from the Wild Magic Surge table instead of rolling on that table. I can choose any effect in the table except for the final row, and if the chosen effect involves a roll, I must make it.",
			]),
			usages: 1,
			recovery: "Long Rest",
		},
	},
});

// Warlock Subclasses
AddSubClass("warlock", "archfey", {
	regExpSearch: /^(?=.*fey)(?=.*warlock).*$/i,
	subname: "Archfey Patron",
	source: [["PHB24", 159]],
	features: {
		"subclassfeature3": {
			name: "Steps of the Fey",
			source: [["PHB24", 159]],
			minlevel: 3,
			description: levels.map(function (n) {
				var lines = [
					"I can cast *Misty Step* without expending a spell slot.",
					"Whenever I cast *Misty Step* this way, I can choose one of the following additional effects.",
					" \u2022 ***Refreshing Step***. After I teleport, either one creature that I can see within 10 ft or I gains 1d10 Temporary Hit Points.",
					" \u2022 ***Taunting Step***. Creatures within 5 ft of the space that I left must make a Wisdom save or have Disadv on attack rolls against creatures other than me until the start of my next turn.",
				];
				if (n >= 6) {
					lines.push(
						" \u2022 ***Disappearing Step***. I am Invisible until the start of my next turn or until I make an attack roll, deal damage, or cast a spell.",
						" \u2022 ***Dreadful Step***. Creatures within 5 feet of the space that I left or appeared in must make a Wisdom save or take 2d10 Psychic damage."
					);
				}
				return desc(lines);
			}),
			recovery: "Long Rest",
			usages: "Charisma modifier per ",
			usagescalc: "event.value = Math.max(1, What('Cha Mod'));",
			spellcastingExtra: ["calm emotions", "faerie fire", "misty step", "phantasmal force", "sleep", "blink", "plant growth", "dominate beast", "greater invisibility", "dominate person", "seeming"],
			spellcastingExtraApplyNonconform: true,
		},
		"subclassfeature6": {
			name: "Misty Escape",
			source: [["PHB24", 159]],
			minlevel: 6,
			description: " [improves Steps of the Fey]" +
				desc("As a Reaction when I take damage, I can cast *Misty Step*."),
			action: [["reaction", ""]],
		},
		"subclassfeature10": {
			name: "Beguiling Defenses",
			source: [["PHB24", 159]],
			minlevel: 10,
			description: desc([
				"As a Reaction after a creature that I can see hits me with an attack, I can halve the damage and force the attacker to make a Wisdom save or take Psychic damage equal to the damage that I took. I can expend a Pact Magic spell slot (PSS) to restore use of this feature.",
				"I am immune to the Charmed condition.",
			]),
			action: [["reaction", ""]],
			savetxt: { immune: ["Charmed"] },
			usages: 1,
			recovery: "Long Rest",
			altResource: "PSS",
		},
		"subclassfeature14": {
			name: "Bewitching Magic",
			source: [["PHB24", 160]],
			minlevel: 14,
			description: desc(
				"After I cast an Enchantment or Illusion spell using an action and a spell slot, I can cast *Misty Step* as part of the same action and without expending a spell slot."
			),
		},
	},
});
AddSubClass("warlock", "celestial", {
	regExpSearch: /^(?=.*warlock)(?=.*celestial).*$/i,
	subname: "Celestial Patron",
	source: [["PHB24", 160]],
	features: {
		"subclassfeature3": {
			name: "Healing Light",
			source: [["PHB24", 160]],
			minlevel: 3,
			description: desc([
				"I have a pool of d6s equal to my Warlock level plus 1 that I can use to heal.",
				"As a Bonus Action, I can expend and roll up to my " + (typePF ? "Charisma" : "Cha") + " modifier number of dice from it.",
				"I restore Hit Points equal to the result to myself or a creature that I can see within 60 ft.",
			]),
			action: [["bonus action", ""]],
			usages: levels.map(function (n) {
				return n < 3 ? "" : n + 1 + "d6 per ";
			}),
			recovery: "Long Rest",
			spellcastingExtra: ["aid", "cure wounds", "guiding bolt", "lesser restoration", "light", "sacred flame", "daylight", "revivify", "guardian of faith", "wall of fire", "greater restoration", "summon celestial"],
			spellcastingExtraApplyNonconform: true,
		},
		"subclassfeature6": {
			name: "Radiant Soul",
			source: [["PHB24", 160]],
			minlevel: 6,
			description: desc([
				"Once per turn, when a spell that I cast deals Radiant or Fire damage, I can add my Charisma modifier to that spell's damage against one of the spell's targets.",
				"I have Resistance to Radiant damage.",
			]),
			dmgres: ["Radiant"],
			calcChanges: {
				atkCalc: [
					function (fields, v, output) {
						if (v.isSpell && /fire|radiant/i.test(fields.Damage_Type)) {
							output.extraDmg += What("Cha Mod");
						};
					},
					"Cantrips and spells that deal Radiant or Fire damage get my Charisma modifier added to their damage to one target.",
				],
				spellAdd: [
					function (spellKey, spellObj, spName) {
						if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "fire|radiant", "Cha", true);
					},
					"Cantrips and spells that deal Radiant or Fire damage get my Charisma modifier added to their damage to one target.",
				],
			},
		},
		"subclassfeature10": {
			name: "Celestial Resilience",
			source: [["PHB24", 161]],
			minlevel: 10,
			description: levels.map(function (n) {
				return desc([
					"Whenever I use my Magical Cunning feature or finish a Short or Long Rest, I gain a number of Temporary Hit Points equal to " + n + " (Warlock level) plus my Charisma modifier.",
					"When I gain these, up to five creatures that I can see each gain a number of Temporary Hit Points equal to " + Math.floor(n / 2) + " (half Warlock level) plus my Charisma modifier.",
				]);
			}),
		},
		"subclassfeature14": {
			name: "Searing Vengeance",
			source: [["PHB24", 161]],
			minlevel: 14,
			description: desc([
				"When an ally within 60 ft or I are about to make a Death Saving Throw, I can cause them to regain Hit Points equal to half their Hit Point maximum and end their Prone condition.",
				"Each creature of my choice that is within 30 ft of the healed creature takes Radiant damage equal to 2d8 + my Charisma modifier, and they gain the Blinded condition until the end of the turn.",
			]),
			usages: 1,
			recovery: "Long Rest",
		},
	},
});
AddSubClass("warlock", "great old one", {
	regExpSearch: /^(((?=.*(tharizdun|cthulhu))(?=.*warlock))|((?=.*(great|dread))(?=.*(ancient|old))(?=.*\b(one|entity)\b))).*$/i,
	subname: "Great Old One Patron",
	subnameShort: "Great Old One",
	source: [["PHB24", 162]],
	features: {
		"subclassfeature3": {
			name: "Awakened Mind",
			source: [["PHB24", 162]],
			minlevel: 3,
			description: levels.map(function (n) {
				return desc(
					"As a Bonus Action, I can choose one creature that I can see within 30 ft. While we are within Charisma modifier miles (min 1) we can telepathically communicate in a language we both know. This lasts for " + n + " minutes (Warlock level) or until I use this feature again."
				);
			}),
			additional: levels.map(function (n) {
				return n + " minutes";
			}),
			action: [["bonus action", ""]],
		},
		"subclassfeature3.1": {
			name: "Psychic Spells",
			source: [["PHB24", 163]],
			minlevel: 3,
			description: desc([
				"When I cast a Warlock spell that deals damage, I can change its damage type to Psychic.",
				"I don't need Verbal or Somatic components to cast Enchantment and Illusion Warlock spells.",
			]),
			spellcastingExtra: ["detect thoughts", "dissonant whispers", "phantasmal force", "tasha's hideous laughter", "clairvoyance", "hunger of hadar", "confusion", "summon aberration", "modify memory", "telekinesis"],
			spellcastingExtraApplyNonconform: true,
			calcChanges: {
				spellAdd: [
					function (spellKey, spellObj, spName) {
						if (spName.indexOf("warlock") !== -1 && (spellObj.school === "Illus" || spellObj.school === "Ench")) {
							var newComponents = spellObj.components.replace(/,?[VS],?/g, "");
							if (newComponents !== spellObj.components) {
								spellObj.components = newComponents;
								return true;
							}
						}
					},
					"I can cast Enchantment and Illusion Warlock spells without Verbal or Somatic components.",
				],
			},
		},
		"subclassfeature6": {
			name: "Clairvoyant Combatant",
			source: [["PHB24", 163]],
			minlevel: 6,
			description: desc(
				"When I use Awakened Mind on a creature, I can have them make a Wisdom save or they have Disadvantage on attack rolls against me and I have Advantage on attack rolls against them while bonded. I can expend a Pact Magic spell slot (PSS) to restore use of this feature."
			),
			usages: 1,
			recovery: "Short Rest",
			altResource: "PSS",
		},
		"subclassfeature10": {
			name: "Eldritch Hex",
			source: [["PHB24", 163]],
			minlevel: 10,
			description: desc("I always have *Hex* prepared and it also imposes Disadvantage on saves of the chosen ability."),
			spellcastingBonus: [{
				name: "Eldritch Hex",
				spells: ["hex"],
				selection: ["hex"],
				firstCol: "markedbox",
			}],
			spellChanges: {
				"hex": {
					description: "1 crea +1d6 Necro. dmg my atks, Dis 1 abi chks/saves; if 0HP: Bns change crea; SL2: 4h, 3: 8h; 5: 24h",
					descriptionShorter: "1 crea +1d6 Necro. dmg my atks, Dis 1 abi chks/saves; 0HP: Bns change; SL2:4h, 3:8h; 5:24h",
					changes: "My Eldritch Hex class feature causes *Hex* to also impose Disadvantage on the ability that I chose.",
				},
			},
		},
		"subclassfeature10.1": {
			name: "Thought Shield",
			source: [["PHB24", 163]],
			minlevel: 10,
			description: desc([
				"My thoughts can't be read by telepathy or other means unless I allow it.",
				"I have Resistance to Psychic damage, and whenever a creature deals Psychic damage to me, that creature takes the same amount of damage that I took.",
			]),
			dmgres: ["Psychic"],
		},
		"subclassfeature14": {
			name: "Create Thrall",
			source: [["PHB24", 163]],
			minlevel: 14,
			description: levels.map(function (n) {
				return desc([
					"When I cast *Summon Aberration*, I can modify it so that it doesn't require Concentration.",
					"When I do, the spell's duration becomes 1 minute and the summoned creature gains a number of Temporary Hit Points equal to " + n + " (Warlock level) plus my Charisma modifier.",
					"In addition, when the Aberration hits a creature under the effects of my *Hex* for the first time on a turn, they also deal the *Hex* bonus damage as Psychic damage.",
				]);
			}),
			additional: levels.map(function (n) {
				return n + " + Cha mod Temp HP";
			}),
			spellcastingBonus: [{
				name: "Create Thrall",
				spells: ["summon aberration"],
				selection: ["summon aberration"],
				firstCol: "oncelr", // trick the sheet into keeping this as a duplicate
			}],
			calcChanges: {
				spellAdd: [
					function (spellKey, spellObj, spName, isDuplicate, isBonusSpell) {
						if (spName === "warlock" && spellKey === "summon aberration") {
							spellObj.firstCol = CurrentSpells[spName].typeList === 4 ? "markedbox" : "";
							if (isDuplicate) { // Second line
								spellObj.name = "Summon Aber. Thrall";
								spellObj.duration = "1 min";
								if (CurrentCasters.amendSpDescr) {
									var lvl = classes.known.warlock ? classes.known.warlock.level : classes.totallevel;
									var cha = Number(What("Cha Mod"));
									spellObj.description = "As Summon Aberration, but with " + (lvl + cha) + " Temp HP (CL+Cha), benefits from Hex; see Create Thrall (400gp)";
								} else {
									spellObj.description = "As Summon Aberration, but with CL+Cha mod Temp HP, benefits from Hex; see Create Thrall (400gp)";
								}
								return true;
							}
						}
					},
					"I can cast Summon Aberration in a way that it doesn't require concentration, but then it lasts for 1 minute, the summon has extra Temporary Hit Points, and it benefits from the Hex bonus damage as Psychic damage.",
				],
			},
		},
	},
});

// Wizard Subclasses
AddSubClass("wizard", "abjurer", {
	regExpSearch: /abjuration|abjurer/i,
	subname: "Abjurer",
	fullname: "Abjurer",
	source: [["PHB24", 172]],
	features: {
		"subclassfeature3": {
			name: "Abjuration Savant",
			source: [["PHB24", 172]],
			minlevel: 3,
			description: desc(
				"I add two Wizard Abjuration spells, up to level 2, to my spellbook. Whenever I gain access to a new level of spell slots in this class, I can add one Wizard Abjuration spell to my spellbook."
			),
		},
		"subclassfeature3.1": {
			name: "Arcane Ward",
			source: [["PHB24", 172]],
			minlevel: 3,
			description: desc([
				"Once per Long Rest when I cast an Abjuration spell with a spell slot, I can create a ward that lasts until my next Long Rest. Whenever I take damage, the ward takes the damage instead. If I have any Resistances or Vulnerabilities, those are applied before reducing the HP of the ward. If the damage reduces the ward to 0 HP, I take any remaining damage.",
				"While the ward has 0 HP, it can't absorb damage, but its magic remains active.",
				"(\u2738) When I cast an Abjuration spell with a spell slot while the ward is active, it regains HP equal to " + (typePF ? "twice" : "2\xD7") + " the spell slot level. I can also do this by expending a spell slot as a Bonus Action.",
			]),
			action: [["bonus action", " (regain ward HP)"]],
			additional: levels.map(function (n) {
				return "Ward max HP: " + n * 2 + " + Int mod";
			}),
			extraLimitedFeatures: [{
				name: "Arcane Ward Hit Points",
				usages: "Twice Wizard level + Intelligence modifier",
				usagescalc: "event.value = (classes.known.wizard ? classes.known.wizard.level * 2 : 0) + Number(What('Int Mod'));",
				recovery: "Long Rest",
				altResource: "\u2738",
			}],
		},
		"subclassfeature6": {
			name: "Projected Ward",
			source: [["PHB24", 172]],
			minlevel: 6,
			description: desc(
				"As a Reaction when a creature in 30 ft takes damage, I can cause my Arcane Ward to absorb the damage, after applying their Resistances and Vulnerabilities. If the damage reduces the ward to 0 HP, the creature takes any excess damage."
			),
			action: [["reaction", ""]],
		},
		"subclassfeature10": {
			name: "Spell Breaker",
			source: [["PHB24", 173]],
			minlevel: 10,
			description: desc(
				"I always have *Counterspell* and *Dispel Magic* prepared. I can cast *Dispel Magic* as a Bonus Action and add my Proficiency Bonus to its ability check. When I cast either spell with a spell slot, that slot isn't expended if the spell fails to stop a spell."
			),
			spellcastingBonus: [{
				name: "Spell Breaker",
				spells: ["counterspell", "dispel magic"],
				selection: ["counterspell", "dispel magic"],
				firstCol: "markedbox",
				times: 2,
			}],
			calcChanges: {
				spellAdd: [
					function (spellKey, spellObj, spName) {
						if (spellKey === "dispel magic") {
							var newDesr = applySpellcastingAbility(spellObj, CurrentSpells[spName]);
							if (newDesr) spellObj.description = newDesr;
							var profB = Number(How("Proficiency Bonus"));
							spellObj.time = "Bns";
							spellObj.description = spellObj.description.replace("check DC", "check with +" + profB + " (PB) DC");
						};
					},
					"My Spell Breaker class feature allows me to cast *Dispel Magic* as a Bonus Action and add my Proficiency Bonus to its ability check. This is reflected in the short description by removing the Proficiency Bonus from the base 10 of the DC.",
				],
			},
		},
		"subclassfeature14": {
			name: "Spell Resistance",
			source: [["PHB24", 173]],
			minlevel: 14,
			description: desc("I have Advantage on saves against spells, and have Resistance to the damage of spells."),
			dmgres: ["Damage from spells"],
			savetxt: { adv_vs: ["spells"] },
		},
	},
});
AddSubClass("wizard", "diviner", {
	regExpSearch: /divination|diviner|divinator/i,
	subname: "Diviner",
	fullname: "Diviner",
	source: [["PHB24", 173]],
	features: {
		"subclassfeature3": {
			name: "Divination Savant",
			source: [["PHB24", 173]],
			minlevel: 3,
			description: desc(
				"I add two Wizard Divination spells, up to level 2, to my spellbook. Whenever I gain access to a new level of spell slots in this class, I can add one Wizard Divination spell to my spellbook."
			),
		},
		"subclassfeature3.1": { // includes Greater Portent
			name: "Portent",
			source: [["PHB24", 173]],
			minlevel: 3,
			description: levels.map(function (n) {
				var portentCount = n < 14 ? "two" : "three";
				return desc([
					"When I finish a Long Rest, I roll " + portentCount + " d20s and record the numbers rolled. I can replace any D20 Test made by me or by a creature that I can see with one of these foretelling rolls.",
					"I must choose to do so before the roll, and can replace a roll in this way only once per turn.",
					"Each foretelling roll can be used only once and is lost if not used before I finish a Long Rest.",
				]);
			}),
			usages: levels.map(function (n) {
				return n < 3 ? "" : (n < 14 ? 2 : 3) + "d20 per ";
			}),
			recovery: "Long Rest",
		},
		"subclassfeature6": {
			name: "Expert Divination",
			source: [["PHB24", 173]],
			minlevel: 6,
			description: desc(
				"When I cast a Divination spell using a level 2+ spell slot, I regain one expended spell slot of a level lower than the slot used for the spell and can't be higher than level 5."
			),
		},
		"subclassfeature10": {
			name: "The Third Eye",
			source: [["PHB24", 173]],
			minlevel: 10,
			description: desc([
				"As a Bonus Action, I can choose one of the following benefits, which lasts until I start a Short or Long Rest.",
				" \u2022 ***Darkvision***. I gain Darkvision with a range of 120 ft.",
				" \u2022 ***Greater Comprehension***. I can read any language.",
				" \u2022 ***See Invisibility***. I can cast *See Invisibility* without expending a spell slot.",
			]),
			usages: 1,
			recovery: "Short Rest",
		},
		"subclassfeature14": {
			name: "Greater Portent",
			source: [["PHB24", 173]],
			minlevel: 14,
			description: " [improves Portent]",
		},
	},
});
AddSubClass("wizard", "illusionist", {
	regExpSearch: /illusion|illusionist|illusionary/i,
	subname: "Illusionist",
	fullname: "Illusionist",
	source: [["PHB24", 175]],
	features: {
		"subclassfeature3": {
			name: "Illusion Savant",
			source: [["PHB24", 175]],
			minlevel: 3,
			description: desc(
				"I add two Wizard Illusion spells, up to level 2, to my spellbook. Whenever I gain access to a new level of spell slots in this class, I can add one Wizard Illusion spell to my spellbook."
			),
		},
		"subclassfeature3.1": {
			name: "Improved Illusions",
			source: [["PHB24", 175]],
			minlevel: 3,
			description: desc([
				"I can cast Illusion spells without providing Verbal components and Illusion spells with a range of 10 ft or more have their range increased by 60 ft.",
				"I know the *Minor Illusion* cantrip, can cast it as a Bonus Action, and can create both a sound and an image with a single casting of it.",
			]),
			spellcastingBonus: [{
				name: "Improved Illusions",
				spells: ["minor illusion"],
				selection: ["minor illusion"],
			}],
			spellChanges: {
				"minor illusion": {
					time: "Bns",
					description: "5-ft cube illusion includes visible and audible; Int(Investigation) check vs. Spell DC; see book",
					changes: "My Improved Illusions class feature allows me to make both a sound and an image with a single casting and can cast it as a Bonus Action.",
				},
			},
			calcChanges: {
				spellAdd: [
					function (spellKey, spellObj, spName) {
						var changed = false;
						// Stop if no wizard levels present or spell is not illusion
						if ( spellObj.school !== "Illus" ) return changed;
						// Add the +60 ft range
						var useRange = spellObj.rangeObject ? spellObj.rangeObject : spellObj.range;
						var stopFunction = function (sRange, nRangeFT) {
							return nRangeFT < 10 || sRange.indexOf("S:") !== -1;
						};
						spellObj.rangeObject = amendRangeObject( useRange, "improved illusions", "+60", stopFunction );
						// Only apply if something changed
						if ( spellObj.rangeObject && spellObj.rangeObject.result !== spellObj.range ) {
							spellObj.range = spellObj.rangeObject.result;
							changed = true;
						}
						// Remove verbal component, if any
						var newComponents = spellObj.components.replace(/V,?/g, "");
						if ( newComponents !== spellObj.components ) {
							spellObj.components = newComponents;
							changed = true;
						}
						return changed;
					},
					"I can cast Illusion spells without Verbal components and spells with a range of 10+ ft have their range increased by 60 ft.",
					700,
				],
			},
		},
		"subclassfeature6": {
			name: "Phantasmal Creatures",
			source: [["PHB24", 175]],
			minlevel: 6,
			description: desc(
				"I always have *Summon Beast* and *Summon Fey* prepared. When I cast either, I can change its school to Illusion, causing the summon to appear spectral and to have only halve its Hit Points. I can cast each spell as an Illusion once per Long Rest without expending a spell slot."
			),
			spellcastingExtra: ["summon beast", "summon fey"],
			spellcastingExtraApplyNonconform: true,
			spellcastingBonus: [{
				name: "Phantasmal Creatures",
				spells: ["summon beast", "summon fey"],
				selection: ["summon beast", "summon fey"],
				firstCol: "oncelr", // trick the sheet into keeping these as a duplicates
				times: 2,
			}],
			calcChanges: {
				spellAdd: [
					function (spellKey, spellObj, spName, isDuplicate, isBonusSpell) {
						if (spName !== "wizard" || (spellKey !== "summon beast" && spellKey !== "summon fey")) return;
						if (isDuplicate) {
							// Make the second entry the Illusion variant
							spellObj.description = spellObj.description.replace("obeys verbal commands; takes turn after mine", "has half HP; obeys commands; turn after mine");
							spellObj.school = "Illus";
							spellObj.firstCol = "oncelr+markedbox";
							return true;
						} else {
							// The regular version, which is always prepared
							spellObj.firstCol = "markedbox";
						}
					},
					"I always have Summon Beast and Summon Fey prepared and can cast them as an Illusion spell, but if I do so the summon appears spectral and only has half its Hit Points. I can cast each once per Long Rest without expending a spell slot as an Illusion spell.",
				],
			},
		},
		"subclassfeature10": {
			name: "Illusory Self",
			source: [["PHB24", 175]],
			minlevel: 10,
			description: desc(
				"As a Reaction when a creature hits me with an attack roll, I can summon an illusion to cause that attack to miss. I can expend a level 2+ spell slot (SS 2+) to restore use of this."
			),
			action: [["reaction", ""]],
			usages: 1,
			recovery: "Short Rest",
			altResource: "SS 2+",
		},
		"subclassfeature14": {
			name: "Illusory Reality",
			source: [["PHB24", 175]],
			minlevel: 14,
			description: desc(
				"As a Bonus Action, I can choose one inanimate, nonmagical object that is part of an illusion that I have cast using a spell slot and make it real for 1 minute. The object cannot deal damage or inflict any conditions."
			),
			action: [["bonus action", ""]],
		},
	},
});


// Backgrounds and their corresponding Background Features (which grant the origin feats)
BackgroundList["artisan"] = {
	regExpSearch: /artisan/i,
	name: "Artisan",
	source: [["PHB24", 178]],
	scorestxt: "+2 to one and +1 to another -or- +1 to all three: Strength, Dexterity, and Intelligence",
	skills: ["Investigation", "Persuasion"],
	toolProfs: [["Artisan's tools", 1]],
	gold: 32,
	equipleft: [
		["Artisan's tools (same as proficiency)", "", 5],
	],
	equipright: [
		["Traveler's clothes", "", 4],
		["Pouch", "", 1],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Artisan",
	// from PHB'14 (Guild Artisan):
	traitsOriginName: "Guild Artisan",
	traitsSourceString: "PHB'14 133",
	trait: [
		"I believe that anything worth doing is worth doing right. I can't help it\u2015 I'm a perfectionist.",
		"I'm a snob who looks down on those who can't appreciate fine art.",
		"I always want to know how things work and what makes people tick.",
		"I'm full of witty aphorisms and have a proverb for every occasion.",
		"I'm rude to people who lack my commitment to hard work and fair play.",
		"I like to talk at length about my profession.",
		"I don't part with my money easily and will haggle tirelessly to get the best deal possible.",
		"I'm well known for my work, and I want to make sure everyone appreciates it. I'm always taken aback when people haven't heard of me.",
	],
	ideal: [
		"**Community**. It is the duty of all civilized people to strengthen the bonds of community and the security of civilization. (Lawful)",
		"**Generosity**. My talents were given to me so that I could use them to benefit the world. (Good)",
		"**Freedom**. Everyone should be free to pursue his or her own livelihood. (Chaotic)",
		"**Greed**. I'm only in it for the money. (Evil)",
		"**People**. I'm committed to the people I care about, not to ideals. (Neutral)",
		"**Aspiration**. I work hard to be the best there is at my craft. (Any)",
	],
	bond: [
		"The workshop where I learned my trade is the most important place in the world to me.",
		"I created a great work for someone, and then found them unworthy to receive it. I'm still looking for someone worthy.",
		"I owe my guild a great debt for forging me into the person I am today.",
		"I pursue wealth to secure someone's love.",
		"One day I will return to my guild and prove that I am the greatest artisan of them all.",
		"I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood.",
	],
	flaw: [
		"I'll do anything to get my hands on something rare or priceless.",
		"I'm quick to assume that someone is trying to cheat me.",
		"No one must ever learn that I once stole money from guild coffers.",
		"I'm never satisfied with what I have\u2015 I always want more.",
		"I would kill to acquire a noble title.",
		"I'm horribly jealous of anyone who can outshine my handiwork. Everywhere I go, I'm surrounded by rivals.",
	],
	extra: [
		"Select a Artisan Business",
		"Alchemists and apothecaries",
		"Armorers, locksmiths, and finesmiths",
		"Brewers, distillers, and vintners",
		"Calligraphers, scribes, and scriveners",
		"Carpenters, roofers, and plasterers",
		"Cartographers, surveyors, and chart-makers",
		"Cobblers and shoemakers",
		"Cooks and bakers",
		"Glassblowers and glaziers",
		"Jewelers and gemcutters",
		"Leatherworkers, skinners, and tanners",
		"Masons and stonecutters",
		"Painters, limners, and sign-makers",
		"Potters and tile-makers",
		"Shipwrights and sailmakers",
		"Smiths and metal-forgers",
		"Tinkers, pewterers, and casters",
		"Wagon-makers and wheelwrights",
		"Weavers and dyers",
		"Woodcarvers, coopers, and bowyers",
	],
};
BackgroundFeatureList["artisan"] = {
	description: "I began mopping floors and scrubbing counters in an artisan's workshop for a few coppers per day as soon as I was strong enough to carry a bucket. When I was old enough to apprentice, I learned to create basic crafts of my own, as well as how to sweet talk the occasional demanding customer. My trade has also given me a keen eye for detail.",
	source: [["PHB24", 178]],
	featsAdd: ["Crafter"],
};
BackgroundList["charlatan"] = {
	regExpSearch: /charlatan/i,
	name: "Charlatan",
	source: [["PHB24", 179]],
	scorestxt: "+2 to one and +1 to another -or- +1 to all three: Dexterity, Constitution, and Charisma",
	skills: ["Deception", "Sleight of Hand"],
	toolProfs: [["Forgery Kit", "Dex"]],
	gold: 15,
	equipleft: [
		["Forgery kit", "", 5],
		["Costume clothes", "", 1],
	],
	equipright: [
		["Fine clothes", "", 6],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Charlatan",
	// from PHB'14:
	traitsSourceString: "PHB'14 128",
	trait: [
		"I fall in and out of love easily, and am always pursuing someone.",
		"I have a joke for every occasion, especially occasions where humor is inappropriate.",
		"Flattery is my preferred trick for getting what I want.",
		"I'm a born gambler who can't resist taking a risk for a potential payoff.",
		"I lie about almost everything, even when there's no good reason to.",
		"Sarcasm and insults are my weapons of choice.",
		"I keep multiple holy symbols on me and invoke whatever deity might come in useful at any given moment.",
		"I pocket anything I see that might have some value.",
	],
	ideal: [
		"**Independence**. I am a free spirit \u2015 no one tells me what to do. (Chaotic)",
		"**Fairness**. I never target people who can't afford to lose a few coins. (Lawful)",
		"**Charity**. I distribute the money I acquire to the people who really need it. (Good)",
		"**Creativity**. I never run the same con twice. (Chaotic)",
		"**Friendship**. Material goods come and go. Bonds of friendship last forever. (Good)",
		"**Aspiration**. I'm determined to make something of myself. (Any)",
	],
	bond: [
		"I fleeced the wrong person and must work to ensure that this individual never crosses paths with me or those I care about.",
		"I owe everything to my mentor \u2015 a horrible person who's probably rotting in jail somewhere.",
		"Somewhere out there, I have a child who doesn't know me. I'm making the world better for him or her.",
		"I come from a noble family, and one day I'll reclaim my lands and title from those who stole them from me.",
		"A powerful person killed someone I love. Someday soon, I'll have my revenge.",
		"I swindled and ruined a person who didn't deserve it. I seek to atone for my misdeeds but might never be able to forgive myself.",
	],
	flaw: [
		"I can't resist a pretty face.",
		"I'm always in debt. I spend my ill-gotten gains on decadent luxuries faster than I bring them in.",
		"I'm convinced that no one could ever fool me the way I fool others.",
		"I'm too greedy for my own good. I can't resist taking a risk if there's money involved.",
		"I can't resist swindling people who are more powerful than me.",
		"I hate to admit it and will hate myself for it, but I'll run and preserve my own hide if the going gets tough.",
	],
	extra: [
		"Select a Favorite Scheme",
		"Cheat at games of chance",
		"Shave coins, forge documents",
		"User/manipulator",
		"Change identity",
		"Sleight-of-hand cons",
		"Sell junk as expensive necessities",
	],
};
BackgroundFeatureList["charlatan"] = {
	description: "Once I was old enough to order an ale, I soon had a favorite stool in every tavern within ten miles of where I was born. As I traveled the circuit from public house to watering hole, I learned to prey on unfortunates who were in the market for a comforting lie or two - perhaps a sham potion or forged ancestry records.",
	source: [["PHB24", 179]],
	featsAdd: ["Skilled"],
};
BackgroundList["entertainer"] = {
	regExpSearch: /(entertainer|actor|dancer|fire.?eater|jester|juggler|instrumentalist|poet|singer|storyteller|tumbler)/i,
	name: "Entertainer",
	source: [["PHB24", 180]],
	scorestxt: "+2 to one and +1 to another -or- +1 to all three: Strength, Dexterity, and Charisma",
	skills: ["Acrobatics", "Performance"],
	toolProfs: [["Musical Instrument", 1]],
	gold: 11,
	equipleft: [
		["Costume clothes", 2, 1],
		["Mirror", "", 0.5],
		["Perfume", "", ""],
	],
	equipright: [
		["Traveler's clothes", "", 4],
		["Musical instrument (choose one)", "", 1],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Entertainer",
	// from PHB'14:
	traitsSourceString: "PHB'14 130",
	trait: [
		"I know a story relevant to almost every situation.",
		"Whenever I come to a new place, I collect local rumors and spread gossip.",
		"I'm a hopeless romantic, always searching for that 'special someone'.",
		"Nobody stays angry at me or around me for long, since I can defuse any amount of tension.",
		"I love a good insult, even one directed at me.",
		"I get bitter if I'm not the center of attention.",
		"I'll settle for nothing less than perfection.",
		"I change my mood or my mind as quickly as I change key in a song.",
	],
	ideal: [
		"**Beauty**. When I perform, I make the world better than it was. (Good)",
		"**Tradition**. The stories, legends, and songs of the past must never be forgotten, for they teach us who we are. (Lawful)",
		"**Creativity**. The world is in need of new ideas and bold action. (Chaotic)",
		"**Greed**. I'm only in it for the money and fame. [Evil]",
		"**People**. I like seeing the smiles on people's faces when I perform. That's all that matters. (Neutral)",
		"**Honesty**. Art should reflect the soul; it should come from within and reveal who we really are. (Any)",
	],
	bond: [
		"My instrument is my most treasured possession, and it reminds me of someone I love.",
		"Someone stole my precious instrument, and someday I'll get it back.",
		"I want to be famous, whatever it takes.",
		"I idolize a hero of the old tales and measure my deeds against that person's.",
		"I will do anything to prove myself superior to my hated rival.",
		"I would do anything for the other members of my old troupe.",
	],
	flaw: [
		"I'll do anything to win fame and renown.",
		"I'm a sucker for a pretty face.",
		"A scandal prevents me from ever going home again. That kind of trouble seems to follow me around.",
		"I once satirized a noble who still wants my head. It was a mistake that I will likely repeat.",
		"I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble.",
		"Despite my best efforts, I am unreliable to my friends.",
	],
	extra: [
		"Select an Entertainer Routine",
		"Actor",
		"Dancer",
		"Fire-eater",
		"Jester",
		"Juggler",
		"Instrumentalist",
		"Poet",
		"Singer",
		"Storyteller",
		"Tumbler",
	],
};
BackgroundFeatureList["entertainer"] = {
	description: "I spent much of my youth following roving fairs and carnivals, performing odd jobs for musicians and acrobats in exchange for lessons. I may have learned how to walk a tightrope, how to play a lute in a distinct style, or how to recite poetry with impeccable diction. To this day, I thrive on applause and long for the stage.",
	source: [["PHB24", 180]],
	featsAdd: ["Musician"],
};
BackgroundList["farmer"] = {
	regExpSearch: /farmer|folk hero/i,
	name: "Farmer",
	source: [["PHB24", 180]],
	scorestxt: "+2 to one and +1 to another -or- +1 to all three: Strength, Constitution, and Wisdom",
	skills: ["Animal Handling", "Nature"],
	toolProfs: [["Carpenter's Tools", "Str"]],
	gold: 30,
	equipleft: [
		["Iron pot", "", 10],
		["Shovel", "", 5],
		["Healer's kit", "", 3],
		["Carpenter's tools", "", 6],
	],
	equipright: [
		["Traveler's clothes", "", 4],
		["Belt pouch (with coins)", "", 1],
		["Sickle", "", 2],
	],
	equip1stPage: {
		weapons: ["Sickle"],
	},
	feature: "Farmer",
	// from PHB'14 (Folk Hero):
	traitsOriginName: "Folk Hero",
	traitsSourceString: "PHB'14 131",
	trait: [
		"I judge people by their actions, not their words.",
		"If someone is in trouble, I'm always ready to lend help.",
		"When I set my mind to something, I follow through no matter what gets in my way.",
		"I have a strong sense of fair play and always try to find the most equitable solution to arguments.",
		"I'm confident in my own abilities and do what I can to instill confidence in others.",
		"Thinking is for other people. I prefer action.",
		"I misuse long words in an attempt to sound smarter.",
		"I get bored easily. When am I going to get on with my destiny?",
	],
	ideal: [
		"**Respect**. People deserve to be treated with dignity and respect. (Good)",
		"**Fairness**. No one should get preferential treatment before the law, and no one is above the law. (Lawful)",
		"**Freedom**. Tyrants must not be allowed to oppress the people. (Chaotic)",
		"**Might**. If I become strong, I can take what I want\u2015 what I deserve. (Evil)",
		"**Sincerity**. There's no good in pretending to be something I'm not. (Neutral)",
		"**Destiny**. Nothing and no one can steer me away from my higher calling. (Any)",
	],
	bond: [
		"I have a family, but I have no idea where they are. One day, I hope to see them again.",
		"I worked the land, I love the land, and I will protect the land.",
		"A proud noble once gave me a horrible beating, and I will take my revenge on any bully I encounter.",
		"My tools are symbols of my past life, and I carry them so that I will never forget my roots.",
		"I protect those who cannot protect themselves.",
		"I wish my childhood sweetheart had come with me to pursue my destiny.",
	],
	flaw: [
		"The tyrant who rules my land will stop at nothing to see me killed.",
		"I'm convinced of the significance of my destiny, and blind to my shortcomings and the risk of failure.",
		"The people who knew me when I was young know my shameful secret, so I can never go home again.",
		"I have a weakness for the vices of the city, especially hard drink.",
		"Secretly, I believe that things would be better if I were a tyrant lording over the land.",
		"I have trouble trusting in my allies.",
	],
	extra: [
		"Select a Defining Event",
		"I stood up to a tyrant's agents",
		"I saved people during a natural disaster",
		"I stood alone against a terrible monster",
		"I stole from a corrupt merchant for the poor",
		"I led a militia to fight off an invading army",
		"I stole weapons from a tyrant to arm the people",
		"I trained peasantry to fight a tyrant with farm tools",
		"A decree was rescinded after I led a protest against it",
		"A magical creature gave me a blessing or insight",
		"I rose to leadership in a lord's army",
	],
};
BackgroundFeatureList["farmer"] = {
	description: "I grew up close to the land. Years tending animals and cultivating the earth rewarded me with patience and good health. I have a keen appreciation for nature's bounty alongside a healthy respect for nature's wrath.",
	source: [["PHB24", 180]],
	featsAdd: ["Tough"],
};
BackgroundList["guard"] = {
	regExpSearch: /guard/i,
	name: "Guard",
	source: [["PHB24", 181]],
	scorestxt: "+2 to one and +1 to another -or- +1 to all three: Strength, Intelligence, and Wisdom",
	skills: ["Athletics", "Perception"],
	toolProfs: [["Gaming Set", 1]],
	gold: 12,
	equipleft: [
		["Manacles", "", 6],
		["Hooded lantern", "", 2],
		["Gaming set (same as proficiency)", "", ""],
	],
	equipright: [
		["Traveler's clothes", "", 4],
		["Belt pouch (with coins)", "", 1],
		["Spear", "", 3],
		["Light crossbow", "", 5],
		["Crossbow bolt case, with:", "", 1],
		["- Crossbow bolts", 20, 0.075],
	],
	equip1stPage: {
		weapons: ["Spear", "Light Crossbow"],
		ammo: [["Bolts", 20]],
	},
	feature: "Guard",
};
BackgroundFeatureList["guard"] = {
	description: "My feet ache when I remember the countless hours I spent at my post in the tower. I was trained to keep one eye looking outside the wall watching for marauders sweeping from the nearby forest, and my other eye looking inside the wall searching for cut purses and troublemakers.",
	source: [["PHB24", 181]],
	featsAdd: ["Alert"],
};
BackgroundList["guide"] = {
	regExpSearch: /^(?!.*urban)(?=.*(guide|outlander|forester|trapper|homesteader|exile|outcast|bounty.?hunter|tribal nomad|hunter.?gatherer|tribal.?marauder)).*$/i,
	name: "Guide",
	source: [["PHB24", 181]],
	scorestxt: "+2 to one and +1 to another -or- +1 to all three: Dexterity, Constitution, and Wisdom",
	skills: ["Stealth", "Survival"],
	toolProfs: [["Cartographer's Tools", "Wis"]],
	gold: 3,
	equipleft: [
		["Bedroll", "", 7],
		["Cartographer's tools", "", 6],
		["Two-person tent", "", 20],
	],
	equipright: [
		["Traveler's clothes", "", 4],
		["Belt pouch (with coins)", "", 1],
		["Shortbow", "", 2],
		["Quiver, with:", "", 1],
		["- Arrows", 20, 0.05],
	],
	equip1stPage: {
		weapons: ["Shortbow"],
		ammo: [["Arrows", 20]],
	},
	feature: "Guide",
	// from PHB'14 (Outlander):
	traitsOriginName: "Outlander",
	traitsSourceString: "PHB'14 137",
	trait: [
		"I'm driven by a wanderlust that led me away from home.",
		"I watch over my friends as if they were a litter of newborn pups.",
		"I once ran twenty-five miles without stopping to warn to my clan of an approaching orc horde. I'd do it again if I had to.",
		"I have a lesson for every situation, drawn from observing nature.",
		"I place no stock in wealthy or well-mannered folk. Money and manners won't save you from a hungry owlbear.",
		"I'm always picking things up, absently fiddling with them, and sometimes accidentally breaking them.",
		"I feel far more comfortable around animals than people.",
		"I was, in fact, raised by wolves.",
	],
	ideal: [
		"**Change**. Life is like the seasons, in constant change, and we must change with it. (Chaotic)",
		"**Greater Good**. It is each person's responsibility to make the most happiness for the whole tribe. (Good)",
		"**Honor**. If I dishonor myself, I dishonor my whole clan. (Lawful)",
		"**Might**. The strongest are meant to rule. (Evil)",
		"**Nature**. The natural world is more important than all the constructs of civilization. (Neutral)",
		"**Glory**. I must earn glory in battle, for myself and my clan. (Any)",
	],
	bond: [
		"My family, clan, or tribe is the most important thing in my life, even when they are far from me.",
		"An injury to the unspoiled wilderness of my home is an injury to me.",
		"I will bring terrible wrath down on the evildoers who destroyed my homeland.",
		"I am the last of my tribe, and it is up to me to ensure their names enter legend.",
		"I suffer awful visions of a coming disaster and will do anything to prevent it.",
		"It is my duty to provide children to sustain my tribe.",
	],
	flaw: [
		"I am too enamored of ale, wine, and other intoxicants.",
		"There's no room for caution in a life lived to the fullest.",
		"I remember every insult I've received and nurse a silent resentment toward anyone who's ever wronged me.",
		"I am slow to trust members of other races, tribes, and societies.",
		"Violence is my answer to almost any challenge.",
		"Don't expect me to save those who can't save themselves. It is nature's way that the strong thrive and the weak perish.",
	],
	extra: ["Select an Origin",
		"Forester",
		"Trapper",
		"Homesteader",
		"Guide",
		"Exile or outcast",
		"Bounty hunter",
		"Pilgrim",
		"Tribal nomad",
		"Hunter-gatherer",
		"Tribal marauder",
	],
};
BackgroundFeatureList["guide"] = {
	description: "I came of age outdoors, far from settled lands. My home was anywhere I chose to spread my bedroll. The wilderness has wonders like strange monsters, pristine forests, streams, overgrown ruins, and I learned to fend for myself as I explored them. From time to time, I guided nature priests who taught me the fundamentals of using the magic of the wild.",
	source: [["PHB24", 181]],
	featsAdd: [{ key: "magic initiate", choice: "druid" }],
};
BackgroundList["hermit"] = {
	regExpSearch: /hermit/i,
	name: "Hermit",
	source: [["PHB24", 182]],
	scorestxt: "+2 to one and +1 to another -or- +1 to all three: Constitution, Wisdom, and Charisma",
	skills: ["Medicine", "Religion"],
	toolProfs: [["Herbalism Kit", "Int"]],
	gold: 16,
	equipleft: [
		["Bedroll", "", 7],
		["Book (philosophy)", "", 5],
		["Herbalism kit", "", 3],
		["Lamp", "", 1],
		["Oil, flasks of", 3, 1],
	],
	equipright: [
		["Traveler's clothes", "", 4],
		["Belt pouch (with coins)", "", 1],
		["Quarterstaff", "", 4],
	],
	equip1stPage: {
		weapons: ["Quarterstaff"],
	},
	feature: "Hermit",
	// from PHB'14:
	traitsSourceString: "PHB'14 134",
	trait: [
		"I've been isolated for so long that I rarely speak, preferring gestures and the occasional grunt.",
		"I am utterly serene, even in the face of disaster.",
		"The leader of my community had something wise to say on every topic, and I am eager to share that wisdom.",
		"I feel tremendous empathy for all who suffer.",
		"I'm oblivious to etiquette and social expectations.",
		"I connect everything that happens to me to a grand, cosmic plan.",
		"I often get lost in my own thoughts and contemplation, becoming oblivious to my surroundings.",
		"I am working on a grand philosophical theory and love sharing my ideas.",
	],
	ideal: [
		"**Greater Good**. My gifts are meant to be shared with all, not used for my own benefit. (Good)",
		"**Logic**. Emotions must not cloud our sense of what is right and true, or our logical thinking. (Lawful)",
		"**Free Thinking**. Inquiry and curiosity are the pillars of progress. (Chaotic)",
		"**Power**. Solitude and contemplation are paths toward mystical or magical power. (Evil)",
		"**Live and Let Live**. Meddling in the affairs of others only causes trouble. (Neutral)",
		"**Self-Knowledge**. If you know yourself, there's nothing left to know. (Any)",
	],
	bond: [
		"Nothing is more important than the other members of my hermitage, order, or association.",
		"I entered seclusion to hide from the ones who might still be hunting me. I must someday confront them.",
		"I'm still seeking the enlightenment I pursued in my seclusion, and it still eludes me.",
		"I entered seclusion because I loved someone I could not have.",
		"Should my discovery come to light, it could bring ruin to the world.",
		"My isolation gave me great insight into a great evil that only I can destroy.",
	],
	flaw: [
		"Now that I've returned to the world, I enjoy its delights a little too much.",
		"I harbor dark, bloodthirsty thoughts that my isolation and meditation failed to quell.",
		"I am dogmatic in my thoughts and philosophy.",
		"I let my need to win arguments overshadow friendships and harmony.",
		"I'd risk too much to uncover a lost bit of knowledge.",
		"I like keeping secrets and won't share them with anyone.",
	],
	extra: [
		"Select a Life of Seclusion",
		"Searching for spiritual enlightenment",
		"Living in accordance with a religious order",
		"Exiled for a crime I didn't commit",
		"Retreated from society after a life-altering event",
		"Worked on my art, literature, music, or manifesto",
		"Commune with nature, far from civilization",
		"Caretaker of an ancient ruin or relic",
		"Pilgrim in search of a thing of spiritual significance",
	],
};
BackgroundFeatureList["hermit"] = {
	description: "I spent my early years secluded in a hut or monastery located well beyond the outskirts of the nearest settlement. In those days, my only companions were the creatures of the forest and those who would occasionally visit to bring news of the outside world and supplies. The solitude allowed me to spend many hours pondering the mysteries of creation.",
	source: [["PHB24", 182]],
	featsAdd: ["Healer"],
};
BackgroundList["merchant"] = {
	regExpSearch: /merchant/i,
	name: "Merchant",
	source: [["PHB24", 182]],
	scorestxt: "+2 to one and +1 to another -or- +1 to all three: Constitution, Intelligence, and Charisma",
	skills: ["Animal Handling", "Persuasion"],
	toolProfs: [["Navigator's Tools", "Wis"]],
	gold: 22,
	equipleft: [
		["Navigator's tools", "", 2],
	],
	equipright: [
		["Traveler's clothes", "", 4],
		["Pouch", "", 1],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Merchant",
	// from PHB'14 (Guild Merchant variant for the Guild Artisan):
	traitsOriginName: "Guild Merchant",
	traitsSourceString: "PHB'14 133",
	extra: [
		"Select a Business",
		"Trader",
		"Caravan master",
		"Shopkeeper",
	],
};
BackgroundFeatureList["merchant"] = {
	description: "I was apprenticed to a trader, caravan master, or shopkeeper, learning the fundamentals of commerce. I traveled broadly and earned a living by buying and selling raw materials artisans need to practice their craft, or their finished works. I transported goods from one place to another or bought them from traveling traders and sold them in my own shop.",
	source: [["PHB24", 182]],
	featsAdd: ["Lucky"],
};
BackgroundList["noble"] = {
	regExpSearch: /^(?!.*(waterdhavian|waterdeep|knight))(?=.*noble).*$/i,
	name: "Noble",
	source: [["PHB24", 183]],
	scorestxt: "+2 to one and +1 to another -or- +1 to all three: Strength, Intelligence, and Charisma",
	skills: ["History", "Persuasion"],
	toolProfs: [["Gaming Set", 1]],
	gold: 25,
	equipleft: [
		["Gaming set (same as proficiency)", "", ""],
		["Perfume", "", ""],
	],
	equipright: [
		["Fine clothes", "", 6],
		["Purse (with coins)", "", 1],
	],
	feature: "Noble",
	// from PHB'14:
	traitsSourceString: "PHB'14 135",
	trait: [
		"My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.",
		"The common folk love me for my kindness and generosity.",
		"No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.",
		"I take great pains to always look my best and follow the latest fashions.",
		"I don't like to get my hands dirty, and I won't be caught dead in unsuitable accommodations.",
		"Despite my noble birth, I do not place myself above other folk. We all have the same blood.",
		"My favor, once lost, is lost forever.",
		"If you do me an injury, I will crush you, ruin your name, and salt your fields.",
	],
	ideal: [
		"**Respect**. Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity. (Good)",
		"**Responsibility**. It is my duty to respect the authority of those above me, just as those below me must respect mine. (Lawful)",
		"**Independence**. I must prove that I can handle myself without the coddling of my family. (Chaotic)",
		"**Power**. If I can attain more power, no one will tell me what to do. (Evil)",
		"**Family**. Blood runs thicker than water. (Any)",
		"**Noble Obligation**. It is my duty to protect and care for the people beneath me. (Good)",
	],
	bond: [
		"I will face any challenge to win the approval of my family.",
		"My house's alliance with another noble family must be sustained at all costs.",
		"Nothing is more important than the other members of my family.",
		"I am in love with the heir of a family that my family despises.",
		"My loyalty to my sovereign is unwavering.",
		"The common folk must see me as a hero of the people.",
	],
	flaw: [
		"I secretly believe that everyone is beneath me.",
		"I hide a truly scandalous secret that could ruin my family forever.",
		"I too often hear veiled insults and threats in every word addressed to me, and I'm quick to anger.",
		"I have an insatiable desire for carnal pleasures.",
		"In fact, the world does revolve around me.",
		"By my words and actions, I often bring shame to my family.",
	],
};
BackgroundFeatureList["noble"] = {
	description: "I was raised in a castle, surrounded by wealth, power, and privilege. My family of minor aristocrats ensured that I received a first-class education, some of which I appreciated and some of which I resented. My time in the castle, especially the many hours I spent observing my family at court, also taught me a great deal about leadership.",
	source: [["PHB24", 183]],
	featsAdd: ["Skilled"],
};
BackgroundList["sailor"] = {
	regExpSearch: /sailor/i,
	name: "Sailor",
	source: [["PHB24", 184]],
	scorestxt: "+2 to one and +1 to another -or- +1 to all three: Strength, Dexterity, and Wisdom",
	skills: ["Acrobatics", "Perception"],
	toolProfs: [["Navigator's Tools", "Wis"]],
	gold: 20,
	equipleft: [
		["Navigator's tools", "", 2],
		["Rope", "", 5],
	],
	equipright: [
		["Traveler's clothes", "", 4],
		["Belt pouch (with coins)", "", 1],
		["Dagger", "", 1],
	],
	equip1stPage: {
		weapons: ["Dagger"],
	},
	feature: "Sailor",
	// from PHB'14:
	traitsSourceString: "PHB'14 139",
	trait: [
		"My friends know they can rely on me, no matter what.",
		"I work hard so that I can play hard when the work is done.",
		"I enjoy sailing into new ports and making new friends over a flagon of ale.",
		"I stretch the truth for the sake of a good story.",
		"To me, a tavern brawl is a nice way to get to know a new city.",
		"I never pass up a friendly wager.",
		"My language is as foul as an otyugh nest.",
		"I like a job well done, especially if I can convince someone else to do it.",
	],
	ideal: [
		"**Respect**. The thing that keeps a ship together is mutual respect between captain and crew. (Good)",
		"**Fairness**. We all do the work, so we all share in the rewards. (Lawful)",
		"**Freedom**. The sea is freedom\u2015 the freedom to go anywhere and do anything. (Chaotic)",
		"**Mastery**. I'm a predator, and the other ships on the sea are my prey. (Evil)",
		"**People**. I'm committed to my crewmates, not to ideals. (Neutral)",
		"**Aspiration**. Someday I'll own my own ship and chart my own destiny. (Any)",
	],
	bond: [
		"I'm loyal to my captain first, everything else second.",
		"The ship is most important\u2015 crewmates and captains come and go.",
		"I'll always remember my first ship.",
		"In a harbor town, I have a paramour whose eyes nearly stole me from the sea.",
		"I was cheated out of my fair share of the profits, and I want to get my due.",
		"Ruthless pirates murdered my captain and crewmates, plundered our ship, and left me to die. Vengeance will be mine.",
	],
	flaw: [
		"I follow orders, even if I think they're wrong.",
		"I'll say anything to avoid having to do extra work.",
		"Once someone questions my courage, I never back down no matter how dangerous the situation.",
		"Once I start drinking, it's hard for me to stop.",
		"I can't help but pocket loose coins and other trinkets I come across.",
		"My pride will probably lead to my destruction.",
	],
};
BackgroundFeatureList["sailor"] = {
	description: "I lived as a seafarer, wind at my back and decks swaying beneath my feet. I've perched on bar stools in more ports of call than I can remember, faced mighty storms, and swapped stories with folk who live beneath the waves.",
	source: [["PHB24", 184]],
	featsAdd: ["Tavern Brawler"],
};
BackgroundList["scribe"] = {
	regExpSearch: /scribe/i,
	name: "Scribe",
	source: [["PHB24", 184]],
	scorestxt: "+2 to one and +1 to another -or- +1 to all three: Dexterity, Intelligence, and Wisdom",
	skills: ["Investigation", "Perception"],
	toolProfs: [["Calligrapher's Supplies", "Dex"]],
	gold: 23,
	equipleft: [
		["Calligrapher's supplies", "", 5],
		["Lamp", "", 1],
		["Oil, flasks of", 3, 1],
		["Parchment, sheets of", 12, ""],
	],
	equipright: [
		["Fine clothes", "", 6],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Scribe",
};
BackgroundFeatureList["scribe"] = {
	description: "I spent formative years in a scriptorium, monastery, or government agency, where I learned to write with a clear hand and produce finely written texts. Perhaps I scribed government documents, or copied tomes, or perhaps I've written poetry, prose, or scholarly research. I have an attention to detail, helping me avoid mistakes in that I copy or create.",
	source: [["PHB24", 184]],
	featsAdd: ["Skilled"],
};
BackgroundList["wayfarer"] = {
	regExpSearch: /wayfarer|urchin/i,
	name: "Wayfarer",
	source: [["PHB24", 185]],
	scorestxt: "+2 to one and +1 to another -or- +1 to all three: Dexterity, Wisdom, and Charisma",
	skills: ["Insight", "Stealth"],
	toolProfs: [["Thieves' Tools", "Dex"]],
	gold: 16,
	equipleft: [
		["Bedroll", "", 7],
		["Gaming set (choose one)", "", ""],
		["Thieves' tools", "", 1],
	],
	equipright: [
		["Traveler's clothes", "", 4],
		["Pouch", "", 1],
		["Belt pouch (with coins)", "", 1],
		["Dagger", 2, 1],
	],
	equip1stPage: {
		weapons: ["Dagger", "Dagger (off-hand)"],
	},
	feature: "Wayfarer",
	// from PHB'14 (Urchin):
	traitsOriginName: "Urchin",
	traitsSourceString: "PHB'14 141",
	trait: [
		"I keep scraps of food and trinkets hidden away in my pockets.",
		"I ask questions all the time.",
		"I like to squeeze into compact places where nobody can harm me.",
		"I sleep with my back to solid surface, with all that I own embraced tightly in my arms.",
		"I have bad manners and eat like a pig.",
		"I expect that anybody who's nice to me is hiding malicious intent.",
		"I eschew bathing.",
		"I say, without reserve, what other people are implying or masking.",
	],
	ideal: [
		"**Respect**. Everybody, no matter their riches, deserves respect. (Good)",
		"**Community**. We have to take look out for each other, because nobody else will do it for us. (Lawful)",
		"**Change**. The low rise up, and the high and mighty come down. Change is natural. (Chaotic)",
		"**Retribution**. The rich need to be shown how it is to live and die in the poor quarters. (Evil)",
		"**People**. I help those who help me\u2015 that is what lets us stay alive. (Neutral)",
		"**Aspiration**. I'm going to prove that I'm worthy of a better life. (Any)",
	],
	bond: [
		"My town or city is my home, and I'll battle those that threaten it.",
		"I'm the benefactor of an orphanage so others may be kept from enduring what I was forced to endure.",
		"I owe my life to another urchin who taught me the ways of living in the gutters.",
		"I owe a debt I can never repay to the person who showed me sympathy.",
		"I got away from my life of poverty by robbing an influential person, and I'm wanted for it.",
		"No one else should have to suffer the difficulties I've been through.",
	],
	flaw: [
		"I will run away from a fight if I'm outnumbered.",
		"A gold piece already has a lot of value to me, and I'll do just about anything for more of it.",
		"I will never completely trust another. I only trust myself.",
		"I would rather use an unfair advantage than fight honorably.",
		"It's not theft if I have more use for it than someone else.",
		"People who are incapable of taking care of themselves get what they deserve.",
	],
};
BackgroundFeatureList["wayfarer"] = {
	description: "I grew up on the streets surrounded by similarly ill-fated castoffs, a few of them friends and a few of them rivals. I slept where I could and did odd jobs for food. At times, when the hunger became unbearable, I resorted to theft. Still, I never lost my pride and never abandoned hope. Fate is not yet finished with me.",
	source: [["PHB24", 185]],
	featsAdd: ["Lucky"],
};

// Species
RaceList["aasimar"] = {
	regExpSearch: /^((?=.*aasimar)|((?=.*planetouched)(?=.*(celestial|angel)))).*$/i,
	name: "Aasimar",
	source: [["PHB24", 186]],
	plural: "Aasimar",
	size: [3, 4],
	speed: { walk: { spd: 30, enc: 20 } },
	vision: [["Darkvision", 60]],
	dmgres: ["Necrotic", "Radiant"],
	spellcastingAbility: 6,
	spellcastingBonus: [{
		name: "Light Bearer",
		spells: ["light"],
		selection: ["light"],
	}],
	features: {
		"healing hands": {
			name: "Healing Hands",
			source: [["PHB24", 186]],
			minlevel: 1,
			usages: 1,
			recovery: "Long Rest",
			action: [["action", ""]],
			additional: ProficiencyBonusList.map(function (n) { return n + "d4 healing"; }),
		},
		"celestial revelation": {
			name: "Celestial Revelation",
			source: [["PHB24", 186]],
			minlevel: 3,
			usages: 1,
			recovery: "Long Rest",
			additional: ProficiencyBonusList.map(function (n) { return "+" + n + " damage"; }),
			action: [["bonus action", ""]],
			toNotesPage: [{
				name: "Celestial Revelation",
				note: [
					"As a Bonus Action once per Long Rest, I can transform using one of the options below (choose the option each time). This lasts for 1 min or until I end it (no action).",
					"While transformed, once on each of my turns when I deal damage with an attack or spell, I can deal my Proficiency Bonus in extra damage to one target. This extra damage's type is Necrotic for Necrotic Shroud, or Radiant for Heavenly Wings and Inner Radiance.",
					" **\u2022 Heavenly Wings**. Two spectral wings sprout from my back temporarily. Until the transformation ends, I have a Fly Speed equal to my Speed.",
					"While transformed like this, the extra damage on attacks/spells mentioned above is Radiant.",
					" **\u2022 Inner Radiance**. Searing light temporarily radiates from my eyes and mouth. For the duration, I shed Bright Light in a 10-ft radius and Dim Light for an additional 10 ft, and at the end of each of my turns, each creature within 10 ft of me takes Radiant damage equal to my Proficiency Bonus",
					"While transformed like this, the extra damage on attacks/spells mentioned above is Radiant.",
					" **\u2022 Necrotic Shroud**. My eyes briefly become pools of darkness, and flightless wings sprout from my back temporarily. Creatures other than my allies within 10 ft of me must succeed on a Charisma saving throw (DC 8 + Cha mod + Prof Bonus) or have the Frightened condition until the end of my next turn.",
					"While transformed like this, the extra damage on attacks/spells mentioned above is Necrotic.",
				],
				additional: "1\xD7 per Long Rest",
			}],
		},
	},
	trait: [
		"**Aasimar**",
		"##\u25C6 Healing Hands##. As a Magic action once per Long Rest, I can touch a creature and restore HP to it for a number of d4s equal to my Proficiency Bonus.",
		"##\u25C6 Light Bearer##. I know the *Light* cantrip. Charisma is my spellcasting ability for it.",
		"##\u25C6 Celestial Revelation## (level 3). As a Bonus Action once per Long Rest, I can transform for 1 min or until I end it (no action). Once on each of my turns while transformed, I can deal my Prof Bonus in extra damage. I choose how I transform each time. See Notes page.",
	].join("\n"),
	// from VGM:
	age: " reach adulthood in their late teens and live around 160 years",
	height: " are about 2-4 ft (small) or 4-7 ft (medium) tall (4'8\" + 2d10\")",
	weight: " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric: " are about 60-120 cm (small) or 120-210 cm (medium) tall (145 + 5d10 cm)",
	weightMetric: " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
};

// Origin feats
FeatsList["crafter"] = {
	name: "Crafter",
	source: [["PHB24", 200]],
	type: "origin",
	description: "I received a 20% discount on nonmagical items. I'm proficient with three Artisan's Tools of choice from the Fast Crafting table. Fast Crafting. I can craft one item from that table during a Long Rest, which lasts until I finish another Long Rest. I need to have the associated tools and proficiency to do this. [See Notes page]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Tool Proficiency***. You gain proficiency with three different Artisan's Tools of your choice from the Fast Crafting table.",
		"***Discount***. Whenever you buy a nonmagical item, you receive a 20 percent discount on it.",
		"***Fast Crafting***. When you finish a Long Rest, you can craft one piece of gear from the Fast Crafting table, provided you have the Artisan's Tools associated with that item and have proficiency with those tools. The item lasts until you finish another Long Rest, at which point the item falls apart.",
		[
			["Artisan's Tools", "Crafted Gear"],
			["Carpenter's Tools", "Ladder, Torch"],
			["Leatherworker's Tools", "Crossbow Bolt Case, Map or Scroll Case, Pouch"],
			["Mason's Tools", "Block and Tackle"],
			["Potter's Tools", "Jug, Lamp"],
			["Smith's Tools", "Ball Bearings, Bucket, Caltrops, Grappling Hook, Iron Pot"],
			["Tinker's Tools", "Bell, Shovel, Tinderbox"],
			["Weaver's Tools", "Basket, Rope, Net, Tent"],
			["Woodcarver's Tools", "Club, Greatclub, Quarterstaff"],
		],
	],
	toolProfs: [["Artisan's tools", 3]],
	toNotesPage: [
		{
			name: "Fast Crafting",
			note: [
				"When I finish a Long Rest, I can craft one piece of gear from the table below, provided I have the Artisan's Tools associated with that item and have proficiency with those tools. The item lasts until I finish another Long Rest, at which point the item falls apart.",
				[
					["Artisan's Tools", "Crafted Gear"],
					["Carpenter's Tools", "Ladder, Torch"],
					["Leatherworker's Tools", "Crossbow Bolt Case, Map or Scroll Case, Pouch"],
					["Mason's Tools", "Block and Tackle"],
					["Potter's Tools", "Jug, Lamp"],
					["Smith's Tools", "Ball Bearings, Bucket, Caltrops, Grappling Hook, Iron Pot"],
					["Tinker's Tools", "Bell, Shovel, Tinderbox"],
					["Weaver's Tools", "Basket, Rope, Net, Tent"],
					["Woodcarver's Tools", "Club, Greatclub, Quarterstaff"],
				],
			],
		},
	],
};
FeatsList["healer"] = {
	name: "Healer",
	source: [["PHB24", 201]],
	type: "origin",
	description: "##Battle Medic##. As a Utilize action, I can expend 1 use of a Healer's Kit to allow a creature within 5 ft to expend 1 Hit Die and regain HP equal to the HD's roll plus my Proficiency Bonus. ##Healing Rerolls##. Whenever I roll a 1 on the die to heal using a spell or this feat, I can reroll the die but must use the new roll.",
	descriptionFull: [
		"You gain the following benefits.",
		"***Battle Medic***. If you have a Healer's Kit, you can expend one use of it and tend to a creature within 5 feet of yourself as a Utilize action. That creature can expend one of its Hit Point Dice, and you then roll that die. The creature regains a number of Hit Points equal to the roll plus your Proficiency Bonus.",
		"***Healing Rerolls***. Whenever you roll a die to determine the number of Hit Points you restore with a spell or with this feat's Battle Medic benefit, you can reroll the die if it rolls a 1, and you must use the new roll.",
	],
	action: [["action", "Battle Medic"]],
};
FeatsList["lucky"] = {
	name: "Lucky",
	source: [["PHB24", 201]],
	type: "origin",
	description: [
		"I gain a number of ##Luck Points## equal to my Proficiency Bonus that I regain " + (typePF ? "after" : "when") + " I finish a Long Rest. I can expend 1 of them to:",
		" \u2022 Give myself Advantage on a D20 Test.",
		" \u2022 Impose Disadvantage on an attack roll against me.",
	].join("\n"),
	descriptionFull: [
		"You gain the following benefits.",
		"***Luck Points***. You have a number of Luck Points equal to your Proficiency Bonus and can spend the points on the benefits below. You regain your expended Luck Points when you finish a Long Rest.",
		"***Advantage***. When you roll a d20 for a D20 Test, you can spend 1 Luck Point to give yourself Advantage on the roll.",
		"***Disadvantage***. When a creature rolls a d20 for an attack roll against you, you can spend 1 Luck Point to impose Disadvantage on that roll.",
	],
	limfeaname: "Luck Points",
	usages: "Proficiency Bonus per ",
	usagescalc: "event.value = Number(How('Proficiency Bonus'));",
	recovery: "Long Rest",
};
FeatsList["musician"] = {
	name: "Musician",
	source: [["PHB24", 201]],
	type: "origin",
	description: [
		"At the end of a Short or Long Rest, I can play an instrument I'm proficient with to give Heroic Inspiration to a number of allies up to my Proficiency Bonus, if they hear the song.",
		"I gain proficiency with three Musical Instruments of my choice.",
	].join("\n"),
	descriptionFull: [
		"You gain the following benefits.",
		"***Instrument Training***. You gain proficiency with three Musical Instruments of your choice.",
		"***Encouraging Song***. As you finish a Short or Long Rest, you can play a song on a Musical Instrument with which you have proficiency and give Heroic Inspiration to allies who hear the song. The number of allies you can affect in this way equals your Proficiency Bonus.",
	],
	toolProfs: [["Musical Instrument", 3]],
};
FeatsList["tavern brawler"] = {
	name: "Tavern Brawler",
	source: [["PHB24", 202]],
	type: "origin",
	description: "Once per turn when I hit a creature with an Unarmed Strike as part of the Attack action on my turn, I can deal damage to the target and also push it 5 ft away from me. My Unarmed Strike deals 1d4 damage and I can reroll a 1 on its damage die, but must use the new roll. I'm proficient with improvised weapons. ",
	descriptionFull: [
		"You gain the following benefits.",
		"***Enhanced Unarmed Strike***. When you hit with your Unarmed Strike and deal damage, you can deal Bludgeoning damage equal to 1d4 plus your Strength modifier instead of the normal damage of an Unarmed Strike.",
		"***Damage Rerolls***. Whenever you roll a damage die for your Unarmed Strike, you can reroll the die if it rolls a 1, and you must use the new roll.",
		"***Improvised Weaponry***. You have proficiency with improvised weapons.",
		"***Push***. When you hit a creature with an Unarmed Strike as part of the Attack action on your turn, you can deal damage to the target and also push it 5 feet away from you. You can use this benefit only once per turn.",
	],
	weaponProfs: [false, false, ["Improvised weapons"]],
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (v.baseWeaponName == "improvised weapon" || /improvised/i.test(v.WeaponName + v.baseWeaponName) || /improvised weapon/i.test(v.theWea.type)) {
					fields.Proficiency = true;
				};
				if (v.baseWeaponName == "unarmed strike") {
					fields.Description += (fields.Description ? "; " : "") + "1/turn also push 5 ft; reroll 1 on damage";
					if (fields.Damage_Die == 1) fields.Damage_Die = "1d4";
				};
			},
			"My Unarmed Strike deals 1d4 damage instead of 1.\n \u2022 Whenever I roll a 1 on the damage die of an Unarmed Strike, I can reroll it but must use the new roll.\n \u2022 Once per turn as part of the Attack action on my turn, I can deal damage and push the target 5 ft away from me.",
		],
	},
};
FeatsList["tough"] = {
	name: "Tough",
	source: [["PHB24", 202]],
	type: "origin",
	description: "My Hit Point maximum increases by an amount equal to twice my character level when I gain this feat. Whenever I gain a character level thereafter, my Hit Point maximum increases by an additional 2 Hit Points.",
	descriptionFull: "Your Hit Point maximum increases by an amount equal to twice your character level when you gain this feat. Whenever you gain a character level thereafter, your Hit Point maximum increases by an additional 2 Hit Points.",
	calcChanges: {
		hp: function (totalHD) {
			return [totalHD * 2, "\n + " + totalHD + " \xD7 2 from the Tough feat (" + (totalHD * 2) + ")", true];
		},
	},
};
// General feats
FeatsList["actor"] = {
	name: "Actor",
	source: [["PHB24", 202]],
	type: "general",
	prerequisite: "Level 4+, Charisma 13+",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && What("Cha") >= 13;
	},
	description: "While disguised as a specific person, I have Advantage on Charisma (Deception or Performance) checks to convince others that I am that person. I am able to mimic the sounds and speech of others. Wisdom (Insight) check (DC 8 + Cha mod + Prof Bonus) to determine the effect is faked. [+1 Charisma]",
	calculate: 'var dc = 8 + Number(How("Proficiency Bonus")) + Number(What("Cha Mod")); event.value = "While disguised as a specific person, I have Advantage on Charisma (Deception or Performance) checks to convince others that I am that person. I am able to mimic the sounds and speech of others. DC " + dc + " (8 + Cha mod + Prof Bonus) Wisdom (Insight) check to determine the effect is faked. [+1 Charisma]"',
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Charisma score by 1, to a maximum of 20.",
		"***Impersonation***. While you're disguised as a real or fictional person, you have Advantage on Charisma (Deception or Performance) checks to convince others that you are that person.",
		"***Mimicry***. You can mimic the sounds of other creatures, including speech. A creature that hears the mimicry must succeed on a Wisdom (Insight) check to determine the effect is faked (8 plus your Charisma modifier and Proficiency Bonus).",
	],
	scores: [0, 0, 0, 0, 0, 1],
};
FeatsList["athlete"] = {
	name: "Athlete",
	source: [["PHB24", 202]],
	type: "general",
	prerequisite: "Level 4+, Strength or Dexterity 13+",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && (What("Str") >= 13 || What("Dex") >= 13);
	},
	description: [
		"I gain a Climb Speed equal to my Speed.",
		"I can make a running Long or High Jump after moving only 5 ft.",
		"I can right myself from the Prone condition with only 5 ft of movement. [+1 Str or Dex]",
	].join("\n"),
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Strength or Dexterity score by 1, to a maximum of 20.",
		"***Climb Speed***. You gain a Climb Speed equal to your Speed.",
		"***Hop Up***. When you have the Prone condition, you can right yourself with only 5 feet of movement.",
		"***Jumping***. You can make a running Long or High Jump after moving only 5 feet.",
	],
	speed: { climb: { spd: "walk", enc: "walk" } },
	choices: ["Strength", "Dexterity"],
	choicesNotInMenu: true,
	"strength": {
		description: [
			"I gain a Climb Speed equal to my Speed.",
			"I can make a running Long or High Jump after moving only 5 ft.",
			"I can right myself from the Prone condition with only 5 ft of movement. [+1 Strength]",
		].join("\n"),
		scores: [1, 0, 0, 0, 0, 0],
	},
	"dexterity": {
		description: [
			"I gain a Climb Speed equal to my Speed.",
			"I can make a running Long or High Jump after moving only 5 ft.",
			"I can right myself from the Prone condition with only 5 ft of movement. [+1 Dexterity]",
		].join("\n"),
		scores: [0, 1, 0, 0, 0, 0],
	},
};
FeatsList["charger"] = {
	name: "Charger",
	source: [["PHB24", 202]],
	type: "general",
	prerequisite: "Level 4+, Strength or Dexterity 13+",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && (What("Str") >= 13 || What("Dex") >= 13);
	},
	description: "When I take the Dash action, my Speed increases by 10 ft for that action. If I move at least 10 ft in a straight line towards an enemy and hit it with a melee attack as part of the Attack action, once per turn I may either deal it +1d8 damage or push it 10 ft away from me if it's no more than 1 size larger. [+1 Str or Dex]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Strength or Dexterity score by 1, to a maximum of 20.",
		"***Improved Dash***. When you take the Dash action, your Speed increases by 10 feet for that action.",
		"***Charge Attack***. If you move at least 10 feet in a straight line toward a target immediately before hitting it with a melee attack roll as part of the Attack action, choose one of the following effects: gain a 1d8 bonus to the attack's damage roll, or push the target up to 10 feet away if it is no more than one size larger than you. You can use this benefit only once on each of your turns.",
	],
	choices: ["Strength", "Dexterity"],
	choicesNotInMenu: true,
	"strength": {
		description: "When I take the Dash action, my Speed increases by 10 ft for that action. If I move at least 10 ft in a straight line towards an enemy and hit it with a melee attack as part of the Attack action, once per turn I may either deal +1d8 damage or push the target 10 ft away from me if it's no more than 1 size larger. [+1 Str" + (typePF ? "]" : "ength]"),
		scores: [1, 0, 0, 0, 0, 0],
	},
	"dexterity": {
		description: "When I take the Dash action, my Speed increases by 10 ft for that action. If I move at least 10 ft in a straight line towards an enemy and hit it with a melee attack as part of the Attack action, once per turn I may either deal +1d8 damage or push the target 10 ft away from me if it's no more than 1 size larger. [+1 Dex" + (typePF ? "]" : "terity]"),
		scores: [0, 1, 0, 0, 0, 0],
	},
};
FeatsList["chef"] = {
	name: "Chef",
	source: [["PHB24", 202]],
	type: "general",
	prerequisite: "Level 4+",
	prereqeval: function (v) {
		return v.characterLevel >= 4;
	},
	description: "I'm proficient with Cook's Utensils. In a Short Rest I can cook for 4+Prof Bonus creatures. If they eat and spend 1+ HD in that rest, they heal +1d8 HP. In 1 hour or after a Long Rest, I can cook Prof Bonus of special treats that last for 8 hours. As a Bonus Action, one can eat a treat to gain my Prof Bonus of Temp HP.",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Constitution or Wisdom score by 1, to a maximum of 20.",
		"***Cook's Utensils***. You gain proficiency with Cook's Utensils if you don't already have it.",
		"***Replenishing Meal***. As part of a Short Rest, you can cook special food if you have ingredients and Cook's Utensils on hand. You can prepare enough of this food for a number of creatures equal to 4 plus your Proficiency Bonus. At the end of the Short Rest, any creature who eats the food and spends one or more Hit Dice to regain Hit Points regains an extra 1d8 Hit Points.",
		"***Bolstering Treats***. With 1 hour of work or when you finish a Long Rest, you can cook a number of treats equal to your Proficiency Bonus if you have ingredients and Cook's Utensils on hand. These special treats last 8 hours after being made. A creature can use a Bonus Action to eat one of those treats to gain a number of Temporary Hit Points equal to your Proficiency Bonus.",
	],
	toolProfs: ["Cook's Utensils"],
	toNotesPage: [{
		name: "Replenishing Meal",
		note: ["As part of a Short Rest, I can cook special food if I have ingredients and Cook's Utensils on hand. I can prepare enough of this food for a number of creatures equal to 4 plus my Proficiency Bonus. At the end of the Short Rest, any creature who eats the food and spends one or more Hit Dice to regain Hit Points regains an extra 1d8 Hit Points."],
	}, {
		name: "Bolstering Treats",
		note: [
			"With 1 hour of work or when I finish a Long Rest, I can cook a number of treats equal to my Proficiency Bonus if I have ingredients and Cook's Utensils on hand. These special treats last 8 hours after being made.",
			"As a Bonus Action, a creature can eat one of those treats to gain a number of Temporary Hit Points equal to my Proficiency Bonus.",
		],
		amendTo: "Replenishing Meal",
	}],
	choices: ["Constitution", "Wisdom"],
	choicesNotInMenu: true,
	"constitution": {
		description: "I'm proficient with Cook's Utensils. In a Short Rest I can cook for 4+Prof Bonus creatures. If they eat and spend 1+ HD in that rest, they heal +1d8 HP. In 1 hour or after a Long Rest, I can cook Prof Bonus of special treats that last for 8 hours. As a Bonus Action, one can eat a treat to gain my Prof Bonus of Temp HP." + (typePF ? "" : " [+1 Constitution]"),
		scores: [0, 0, 1, 0, 0, 0],
	},
	"wisdom": {
		description: "I'm proficient with Cook's Utensils. In a Short Rest I can cook for 4+Prof Bonus creatures. If they eat and spend 1+ HD in that rest, they heal +1d8 HP. In 1 hour or after a Long Rest, I can cook Prof Bonus of special treats that last for 8 hours. As a Bonus Action, one can eat a treat to gain my Prof Bonus of Temp HP." + (typePF ? "" : " [+1 Wisdom]"),
		scores: [0, 0, 0, 0, 1, 0],
	},
};
FeatsList["crossbow expert"] = {
	name: "Crossbow Expert",
	source: [["PHB24", 203]],
	type: "general",
	prerequisite: "Level 4+, Dexterity 13+",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && What("Dex") >= 13;
	},
	description: "I ignore the Loading property of Hand, Light, and Heavy Crossbows. Being within 5 ft of an enemy doesn't impose Disadvantage on my crossbow attacks. I can add my ability modifier to the damage of off-hand attacks I make with crossbows that have the light property. [+1 Dexterity]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Dexterity score by 1, to a maximum of 20.",
		"***Ignore Loading***. You ignore the Loading property of the Hand Crossbow, Heavy Crossbow, and Light Crossbow (all called crossbows elsewhere in this feat). If you're holding one of them, you can load a piece of ammunition into it even if you lack a free hand.",
		"***Firing in Melee***. Being within 5 feet of an enemy doesn't impose Disadvantage on your attack rolls with crossbows.",
		"***Dual Wielding***. When you make the extra attack of the Light property, you can add your ability modifier to the damage of the extra attack if that attack is with a crossbow that has the Light property and you aren't already adding that modifier to the damage.",
	],
	scores: [0, 1, 0, 0, 0, 0],
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (/(hand|heavy|light) crossbow/i.test(v.baseWeaponName)) {
					fields.Description = fields.Description.replace(/([,;]? ?loading|loading[,;]? ?)/i, "");
					if (v.isOffHand && /\blight\b/i.test(fields.Description))  {
						output.modToDmg = true;
					};
				};
			},
			"I ignore the Loading property of the Hand Crossbow, Heavy Crossbow, and Light Crossbow.",
		],
	},
};
FeatsList["crusher"] = {
	name: "Crusher",
	source: [["PHB24", 203]],
	type: "general",
	prerequisite: "Level 4+",
	prereqeval: function (v) {
		return v.characterLevel >= 4;
	},
	description: "Once per turn when my attack deals Bludgeoning damage to a creature up to one size larger than me, I can move it 5 ft to an empty space. When I score a Critical Hit that deals Bludgeoning damage to a creature, attack rolls against that creature have Advantage until the start of my next turn. [+1 Str or Con]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Strength or Constitution score by 1, to a maximum of 20.",
		"***Push***. Once per turn, when you hit a creature with an attack that deals Bludgeoning damage, you can move it 5 feet to an unoccupied space if the target is no more than one size larger than you.",
		"***Enhanced Critical***. When you score a Critical Hit that deals Bludgeoning damage to a creature, attack rolls against that creature have Advantage until the start of your next turn.",
	],
	choices: ["Strength", "Constitution"],
	choicesNotInMenu: true,
	"strength": {
		description: "Once per turn when my attack deals Bludgeoning damage to a creature up to one size larger than me, I can move it 5 ft to an empty space. When I score a Critical Hit that deals Bludgeoning damage to a creature, attack rolls against that creature have Advantage until the start of my next turn. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	"constitution": {
		description: "Once per turn when my attack deals Bludgeoning damage to a creature up to one size larger than me, I can move it 5 ft to an empty space. When I score a Critical Hit that deals Bludgeoning damage to a creature, attack rolls against that creature have Advantage until the start of my next turn. [+1 Constitution]",
		scores: [0, 0, 1, 0, 0, 0],
	},
};
FeatsList["defensive duelist"] = {
	name: "Defensive Duelist",
	source: [["PHB24", 203]],
	type: "general",
	prerequisite: "Level 4+, Dexterity 13+",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && What("Dex") >= 13;
	},
	description: "##Parry##. As a reaction when I'm holding a Finesse weapon and another creature hits me with a melee attack, I can add my Proficiency Bonus to my Armor Class, potentially causing the attack to miss me. I gain this bonus to my AC against melee attacks until the start of my next turn. [+1 Dexterity]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Dexterity score by 1, to a maximum of 20.",
		"***Parry***. If you're holding a Finesse weapon and another creature hits you with a melee attack, you can take a Reaction to add your Proficiency Bonus to your Armor Class, potentially causing the attack to miss you. You gain this bonus to your AC against melee attacks until the start of your next turn.",
	],
	scores: [0, 1, 0, 0, 0, 0],
	action: [["reaction", "Parry"]],
};
FeatsList["dual wielder"] = {
	name: "Dual Wielder",
	source: [["PHB24", 203]],
	type: "general",
	prerequisite: "Level 4+, Strength or Dexterity 13+",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && (What("Str") >= 13 || What("Dex") >= 13);
	},
	description: "I can draw and stow 2 non-Two-Handed weapons at a time. If I take the Attack action on my turn to attack with a Light weapon, I can make an off-hand attack with another non-Two-Handed weapon as a Bonus Action. I don't add my ability modifier to this attack's damage unless it is negative. [+1 Str or Dex]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Strength or Dexterity score by 1, to a maximum of 20.",
		"***Enhanced Dual Wielding***. When you take the Attack action on your turn and attack with a weapon that has the Light property, you can make one extra attack as a Bonus Action later on the same turn with a different weapon, which must be a Melee weapon that lacks the Two-Handed property. You don't add your ability modifier to the extra attack's damage unless that modifier is negative.",
		"***Quick Draw***. You can draw or stow two weapons that lack the Two-Handed property when you would normally be able to draw or stow only one.",
	],
	choices: ["Strength", "Dexterity"],
	choicesNotInMenu: true,
	"strength": {
		description: "I can draw and stow 2 non-Two-Handed weapons at a time. If I take the Attack action on my turn to attack with a Light weapon, I can make an off-hand attack with another non-Two-Handed weapon as a Bonus Action. I don't add my ability modifier to this attack's damage unless it is negative. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	"dexterity": {
		description: "I can draw and stow 2 non-Two-Handed weapons at a time. If I take the Attack action on my turn to attack with a Light weapon, I can make an off-hand attack with another non-Two-Handed weapon as a Bonus Action. I don't add my ability modifier to this attack's damage unless it is negative. [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
	},
};
FeatsList["durable"] = {
	name: "Durable",
	source: [["PHB24", 203]],
	type: "general",
	prerequisite: "Level 4+",
	prereqeval: function (v) {
		return v.characterLevel >= 4;
	},
	description: [
		"##Defy Death##. I have Advantage on Death Saving Throws.",
		"##Speedy Recovery##. As a Bonus Action, I can expend and roll one of my Hit Dice to regain a number of Hit Points equal to the roll. [+1 Constitution]",
	].join("\n"),
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Constitution score by 1, to a maximum of 20.",
		"***Defy Death***. You have Advantage on Death Saving Throws.",
		"***Speedy Recovery***. As a Bonus Action, you can expend one of your Hit Point Dice, roll the die, and regain a number of Hit Points equal to the roll.",
	],
	scores: [0, 0, 1, 0, 0, 0],
	savetxt: {
		text: ["Adv on Death Saves"],
	},
	action: [["bonus action", "Speedy Recovery (1 HD)"]],
};
FeatsList["elemental adept"] = {
	name: "Elemental Adept",
	source: [["PHB24", 203]],
	type: "general",
	prerequisite: "Level 4+, Spellcasting or Pact Magic Feature",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && v.isSpellcastingClass;
	},
	description: "Choose one of the damage types: Acid, Cold, Fire, Lightning, or Thunder. Spells I cast ignore resistance to damage from this damage type. For any spell I cast that deals this damage type, I can treat any 1 on a damage die as a 2. [+1 Int, Wis, or Cha]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.",
		"***Energy Mastery***. Choose one of the following damage types: Acid, Cold, Fire, Lightning, or Thunder. Spells you cast ignore Resistance to damage of the chosen type. In addition, when you roll damage for a spell you cast that deals damage of that type, you can treat any 1 on a damage die as a 2.",
		"***Repeatable***. You can take this feat more than once, but you must choose a different damage type each time for Energy Mastery.",
	],
	scorestxt: "+1 Intelligence, Wisdom, or Charisma",
	allowDuplicates: true,
	choices: ["Acid Energy Mastery", "Cold Energy Mastery", "Fire Energy Mastery", "Lightning Energy Mastery", "Thunder Energy Mastery"],
	"acid energy mastery": {
		name: "Elemental Adept [Acid]",
		description: [
			"Spells cast by me ignore Resistance to Acid damage.",
			"When I roll damage for a spell casted by me that deals Acid damage, I can treat any 1 on a damage die as a 2.",
			"[+1 Intelligence, Wisdom, or Charisma]",
		].join("\n"),
	},
	"cold energy mastery": {
		name: "Elemental Adept [Cold]",
		description: [
			"Spells cast by me ignore Resistance to Cold damage.",
			"When I roll damage for a spell casted by me that deals Cold damage, I can treat any 1 on a damage die as a 2.",
			"[+1 Intelligence, Wisdom, or Charisma]",
		].join("\n"),
	},
	"fire energy mastery": {
		name: "Elemental Adept [Fire]",
		description: [
			"Spells cast by me ignore Resistance to Fire damage.",
			"When I roll damage for a spell casted by me that deals Fire damage, I can treat any 1 on a damage die as a 2.",
			"[+1 Intelligence, Wisdom, or Charisma]",
		].join("\n"),
	},
	"lightning energy mastery": {
		name: "Elemental Adept [Lightning]",
		description: [
			"Spells cast by me ignore Resistance to Lightning damage.",
			"When I roll damage for a spell casted by me that deals Lightning damage, I can treat any 1 on a damage die as a 2.",
			"[+1 Intelligence, Wisdom, or Charisma]",
		].join("\n"),
	},
	"thunder energy mastery": {
		name: "Elemental Adept [Thunder]",
		description: [
			"Spells cast by me ignore Resistance to Thunder damage.",
			"When I roll damage for a spell casted by me that deals Thunder damage, I can treat any 1 on a damage die as a 2.",
			"[+1 Intelligence, Wisdom, or Charisma]",
		].join("\n"),
	},
};
FeatsList["fey-touched"] = {
	name: "Fey-Touched",
	source: [["PHB24", 204]],
	type: "general",
	prerequisite: "Level 4+",
	prereqeval: function (v) {
		return v.characterLevel >= 4;
	},
	description: "I learn *Misty Step* and one 1st-level Divination or Enchantment spell. I always have these spells prepared. I can cast each once per Long Rest at their lowest level without expending a spell slot and by expending a spell slot as normal. The spells' spellcasting ability is the ability increased by this feat. [+1 Int, Wis, or Cha]",
	descriptionFull: [
		"Your exposure to the Feywild's magic grants you the following benefits.",
		"***Ability Score Increase***. Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.",
		"***Fey Magic***. Choose one level 1 spell from the Divination or Enchantment school of magic. You always have that spell and the *Misty Step* spell prepared. You can cast each of these spells without expending a spell slot. Once you cast either spell in this way, you can't cast that spell in this way again until you finish a Long Rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat.",
	],
	spellFirstColTitle: "PR",
	spellcastingBonus: [{
		name: "Misty Step",
		spells: ["misty step"],
		selection: ["misty step"],
		firstCol: "oncelr+markedbox",
	}, {
		name: "1st-level Ench/Div spell",
		school: ["Ench", "Div"],
		level: [1, 1],
		firstCol: "oncelr+markedbox",
	}],
	choices: ["Intelligence", "Wisdom", "Charisma"],
	choicesNotInMenu: true,
	"intelligence": {
		description: "I learn Misty Step and one 1st-level Divination or Enchantment spell. I always have these spell prepared. I can cast each once per Long Rest at their lowest level without expending a spell slot and can cast them by expending a spell slot as normal. Intelligence is my spellcasting ability for these spells. [+1 Int" + (typePF ? "]" : "elligence]"),
		spellcastingAbility: 4,
		scores: [0, 0, 0, 1, 0, 0],
	},
	"wisdom": {
		description: "I learn Misty Step and one 1st-level Divination or Enchantment spell. I always have these spell prepared. I can cast each once per Long Rest at their lowest level without expending a spell slot and can cast them by expending a spell slot as normal. Wisdom is my spellcasting ability for these spells. [+1 Wisdom]",
		spellcastingAbility: 5,
		scores: [0, 0, 0, 0, 1, 0],
	},
	"charisma": {
		description: "I learn Misty Step and one 1st-level Divination or Enchantment spell. I always have these spell prepared. I can cast each once per Long Rest at their lowest level without expending a spell slot and can cast them by expending a spell slot as normal. Charisma is my spellcasting ability for these spells. [+1 Charisma]",
		spellcastingAbility: 6,
		scores: [0, 0, 0, 0, 0, 1],
	},
};
FeatsList["great weapon master"] = {
	name: "Great Weapon Master",
	source: [["PHB24", 204]],
	type: "general",
	prerequisite: "Level 4+, Strength 13+",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && What("Str") >= 13;
	},
	description: [
		"##Heavy Weapon Mastery##. During the Attack action on my turn, I can add my Proficiency Bonus to the damage of " + (typePF ? "Heavy weapons. " : "weapons with the Heavy property."),
		"##Hew##. Immediately after I reduce a creature to 0 HP with a melee weapon or score a Critical Hit with one, I can make another attack with that weapon as a Bonus Action. [+1 Str]",
	].join("\n"),
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Strength score by 1, to a maximum of 20.",
		"***Heavy Weapon Mastery***. When you hit a creature with a weapon that has the Heavy property as part of the Attack action on your turn, you can cause the weapon to deal extra damage to the target. The extra damage equals your Proficiency Bonus.",
		"***Hew***. Immediately after you score a Critical Hit with a Melee weapon or reduce a creature to 0 Hit Points with one, you can make one attack with the same weapon as a Bonus Action.",
	],
	scores: [1, 0, 0, 0, 0, 0],
	action: [["bonus action", "Hew (Great Weapon Master)"]],
	calcChanges: {
		atkCalc: [
			function (fields, v, output) {
				if (v.isWeapon && /heavy/i.test(fields.Description) && /\bgwm\b|power.{0,3}attack|great.{0,3}weapon.{0,3}master/i.test(v.WeaponTextName)) {
					output.extraDmg += Number(How("Proficiency Bonus"));
				};
			},
			"If I include the words 'Power Attack', 'Great Weapon Master', or 'GWM' in the name of a weapon with the Heavy property, my Proficiency Bonus is added to its damage.",
		],
	},
};
FeatsList["heavily armored"] = {
	name: "Heavily Armored",
	source: [["PHB24", 204]],
	type: "general",
	prerequisite: "Level 4+, Medium Armor Training",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && v.mediumArmorProf;
	},
	description: "I gain training with Heavy armor. [+1 Strength or Constitution]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Constitution or Strength score by 1, to a maximum of 20.",
		"***Armor Training***. You gain training with Heavy armor.",
	],
	armorProfs: [false, false, true, false],
	choices: ["Constitution", "Strength"],
	choicesNotInMenu: true,
	"strength": {
		description: "I gain training with Heavy armor. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	"constitution": {
		description: "I gain training with Heavy armor. [+1 Constitution]",
		scores: [0, 0, 1, 0, 0, 0],
	},
};
FeatsList["heavy armor master"] = {
	name: "Heavy Armor Master",
	source: [["PHB24", 204]],
	type: "general",
	prerequisite: "Level 4+, Heavy Armor Training",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && v.heavyArmorProf;
	},
	description: "When I'm hit by an attack while I'm wearing Heavy armor, any Bludgeoning, Piercing, and Slashing damage dealt to me by that attack is reduced by an amount equal to my Proficiency Bonus. [+1 Strength or Constitution]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Constitution or Strength score by 1, to a maximum of 20.",
		"***Damage Reduction***. When you're hit by an attack while you're wearing Heavy armor, any Bludgeoning, Piercing, and Slashing damage dealt to you by that attack is reduced by an amount equal to your Proficiency Bonus.",
	],
	choices: ["Constitution", "Strength"],
	choicesNotInMenu: true,
	"strength": {
		description: "When I'm hit by an attack while I'm wearing Heavy armor, any Bludgeoning, Piercing, and Slashing damage dealt to me by that attack is reduced by an amount equal to my Proficiency Bonus. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	"constitution": {
		description: "When I'm hit by an attack while I'm wearing Heavy armor, any Bludgeoning, Piercing, and Slashing damage dealt to me by that attack is reduced by an amount equal to my Proficiency Bonus. [+1 Constitution]",
		scores: [0, 0, 1, 0, 0, 0],
	},
};
FeatsList["inspiring leader"] = {
	name: "Inspiring Leader",
	source: [["PHB24", 204]],
	type: "general",
	prerequisite: "Level 4+, Wisdom or Charisma 13+",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && (What("Wis") >= 13 || What("Cha") >= 13);
	},
	description: "When I finish a Short or Long Rest, I can give an inspiring performance. Up to six allies (which can include myself) within 30 ft who witness this performance each gain Temporary Hit Points equal to my character level plus the modifier of the ability increased by this feat. [+1 Wisdom or Charisma]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Wisdom or Charisma score by 1, to a maximum of 20.",
		"***Bolstering Performance***. When you finish a Short or Long Rest, you can give an inspiring performance: a speech, song, or dance. When you do so, choose up to six allies (which can include yourself) within 30 feet of yourself who witness the performance. The chosen creatures each gain Temporary Hit Points equal to your character level plus the modifier of the ability you increased with this feat.",
	],
	choices: ["Wisdom", "Charisma"],
	choicesNotInMenu: true,
	"wisdom": {
		calculate: 'event.value = "When I finish a Short or Long Rest, I can give an inspiring performance. I can choose up to six allies (or five and myself) within 30 ft of myself who witness this performance to each gain " + ( Number(What("Character Level")) + Number(What("Wis Mod")) ) + " Temporary Hit Points (= character level + Wisdom modifier). [+1 Wisdom]";',
		scores: [0, 0, 0, 0, 1, 0],
	},
	"charisma": {
		calculate: 'event.value = "When I finish a Short or Long Rest, I can give an inspiring performance. I can choose up to six allies (or five and myself) within 30 ft of myself who witness this performance to each gain " + ( Number(What("Character Level")) + Number(What("Cha Mod")) ) + " Temporary Hit Points (= character level + Charisma modifier). [+1 Charisma]";',
		scores: [0, 0, 0, 0, 0, 1],
	},
};
FeatsList["keen mind"] = {
	name: "Keen Mind",
	source: [["PHB24", 205]],
	type: "general",
	prerequisite: "Level 4+, Intelligence 13+",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && What("Int") >= 13;
	},
	description: "##Quick Study##. I can take the Study action as a Bonus Action. ##Lore Knowledge##. I gain proficiency in one Intelligence skill of my choice. If I already have proficiency in it, I gain Expertise in it. [+1 Intelligence]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Intelligence score by 1, to a maximum of 20.",
		"***Lore Knowledge***. Choose one of the following skills: Arcana, History, Investigation, Nature, or Religion. If you lack proficiency in the chosen skill, you gain proficiency in it, and if you already have proficiency in it, you gain Expertise in it.",
		"***Quick Study***. You can take the Study action as a Bonus Action.",
	],
	scores: [0, 0, 0, 1, 0, 0],
	action: [["bonus action", "Study"]],
	choices: ["Arcana", "History", "Investigation", "Nature", "Religion"],
	choicesNotInMenu: true,
	"arcana": {
		description: [
			"##Quick Study##. I can take the Study action as a Bonus Action.",
			"##Lore Knowledge##. I gain proficiency in the Arcana skill. If I already have proficiency in it, I gain Expertise in it.",
			"[+1 Intelligence]",
		].join("\n"),
		skills: [["Arcana", "increment"]],
	},
	"history": {
		description: [
			"##Quick Study##. I can take the Study action as a Bonus Action.",
			"##Lore Knowledge##. I gain proficiency in the History skill. If I already have proficiency in it, I gain Expertise in it.",
			"[+1 Intelligence]",
		].join("\n"),
		skills: [["History", "increment"]],
	},
	"investigation": {
		description: [
			"##Quick Study##. I can take the Study action as a Bonus Action.",
			"##Lore Knowledge##. I gain proficiency in the Investigation skill. If I already have proficiency in it, I gain Expertise in it.",
			"[+1 Intelligence]",
		].join("\n"),
		skills: [["Investigation", "increment"]],
	},
	"nature": {
		description: [
			"##Quick Study##. I can take the Study action as a Bonus Action.",
			"##Lore Knowledge##. I gain proficiency in the Nature skill. If I already have proficiency in it, I gain Expertise in it.",
			"[+1 Intelligence]",
		].join("\n"),
		skills: [["Nature", "increment"]],
	},
	"religion": {
		description: [
			"##Quick Study##. I can take the Study action as a Bonus Action.",
			"##Lore Knowledge##. I gain proficiency in the Religion skill. If I already have proficiency in it, I gain Expertise in it.",
			"[+1 Intelligence]",
		].join("\n"),
		skills: [["Religion", "increment"]],
	},
};
FeatsList["lightly armored"] = {
	name: "Lightly Armored",
	source: [["PHB24", 205]],
	type: "general",
	prerequisite: "Level 4+",
	prereqeval: function (v) {
		return v.characterLevel >= 4;
	},
	description: "I gain training with Light armor and Shields. [+1 Strength or Dexterity]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Strength or Dexterity score by 1, to a maximum of 20.",
		"***Armor Training***. You gain training with Light armor and Shields.",
	],
	armorProfs: [true, false, false, true],
	choices: ["Strength", "Dexterity"],
	choicesNotInMenu: true,
	"strength": {
		description: "I gain training with Light armor and Shields. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	"dexterity": {
		description: "I gain training with Light armor and Shields. [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
	},
};
FeatsList["mage slayer"] = {
	name: "Mage Slayer",
	source: [["PHB24", 205]],
	type: "general",
	prerequisite: "Level 4+",
	prereqeval: function (v) {
		return v.characterLevel >= 4;
	},
	description: "##Concentration Breaker##. When I damage a creature that is Concentrating, they have Disadvantage on their save to maintain it." + (typePF ? " " : "\n") + "##Guarded Mind##. Once per Short or Long Rest when I fail an Intelligence, Wisdom, or Charisma saving throw, I can cause myself to succeed instead. [+1 Strength or Dexterity]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Strength or Dexterity score by 1, to a maximum of 20.",
		"***Concentration Breaker***. When you damage a creature that is Concentrating, it has Disadvantage on the saving throw it makes to maintain Concentration.",
		"***Guarded Mind***. If you fail an Intelligence, a Wisdom, or a Charisma saving throw, you can cause yourself to succeed instead. Once you use this benefit, you can't use it again until you finish a Short or Long Rest.",
	],
	extraLimitedFeatures: [{
		name: "Guarded Mind (Mage Slayer)",
		usages: 1,
		recovery: "Short Rest",
	}],
	choices: ["Strength", "Dexterity"],
	choicesNotInMenu: true,
	"strength": {
		description: "##Concentration Breaker##. When I damage a creature that is Concentrating, they have Disadvantage on their save to maintain it." + (typePF ? " " : "\n") + "##Guarded Mind##. Once per Short or Long Rest when I fail an Intelligence, Wisdom, or Charisma saving throw, I can cause myself to succeed instead. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	"dexterity": {
		description: "##Concentration Breaker##. When I damage a creature that is Concentrating, they have Disadvantage on their save to maintain it." + (typePF ? " " : "\n") + "##Guarded Mind##. Once per Short or Long Rest when I fail an Intelligence, Wisdom, or Charisma saving throw, I can cause myself to succeed instead. [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
	},
};
FeatsList["martial weapon training"] = {
	name: "Martial Weapon Training",
	source: [["PHB24", 205]],
	type: "general",
	prerequisite: "Level 4+",
	prereqeval: function (v) {
		return v.characterLevel >= 4;
	},
	description: "I gain proficiency with Martial weapons. [+1 Strength or Dexterity]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Strength or Dexterity score by 1, to a maximum of 20.",
		"***Weapon Proficiency***. You gain proficiency with Martial weapons.",
	],
	weaponProfs: [false, true],
	choices: ["Strength", "Dexterity"],
	choicesNotInMenu: true,
	"strength": {
		description: "I gain proficiency with Martial weapons. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	"dexterity": {
		description: "I gain proficiency with Martial weapons. [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
	},
};
FeatsList["medium armor master"] = {
	name: "Medium Armor Master",
	source: [["PHB24", 205]],
	type: "general",
	prerequisite: "Level 4+, Medium Armor Training",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && v.mediumArmorProf;
	},
	description: "While I'm wearing Medium armor, I can add 3, rather than 2 to my AC if I have a Dexterity score of 16 or higher. [+1 Strength or Dexterity]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Strength or Dexterity score by 1, to a maximum of 20.",
		"***Dexterous Wearer***. While you're wearing Medium armor, you can add 3, rather than 2 to your AC if you have a Dexterity score of 16 or higher.",
	],
	eval: function () {
		Value("Medium Armor Max Mod", 3);
		ApplyArmor(What("AC Armor Description"));
	},
	removeeval: function () {
		tDoc.resetForm(["Medium Armor Max Mod"]);
		ApplyArmor(What("AC Armor Description"));
	},
	choices: ["Strength", "Dexterity"],
	choicesNotInMenu: true,
	"strength": {
		description: "While I'm wearing Medium armor, I can add 3, rather than 2 to my AC if I have a Dexterity score of 16 or higher. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	"dexterity": {
		description: "While I'm wearing Medium armor, I can add 3, rather than 2 to my AC if I have a Dexterity score of 16 or higher. [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
	},
};
FeatsList["moderately armored"] = {
	name: "Moderately Armored",
	source: [["PHB24", 205]],
	type: "general",
	prerequisite: "Level 4+, Light Armor Training",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && v.lightArmorProf;
	},
	description: "I gain training with Medium armor. [+1 Strength or Dexterity]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Strength or Dexterity score by 1, to a maximum of 20.",
		"***Armor Training***. You gain training with Medium armor.",
	],
	armorProfs: [false, true, false, false],
	choices: ["Strength", "Dexterity"],
	choicesNotInMenu: true,
	"strength": {
		description: "I gain training with Medium armor. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	"dexterity": {
		description: "I gain training with Medium armor. [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
	},
};
FeatsList["mounted combatant"] = {
	name: "Mounted Combatant",
	source: [["PHB24", 205]],
	type: "general",
	prerequisite: "Level 4+",
	prereqeval: function (v) {
		return v.characterLevel >= 4;
	},
	description: "Select one of the choices.",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Strength, Dexterity, or Wisdom score by 1, to a maximum of 20.",
		"***Mounted Strike***. While mounted, you have Advantage on attack rolls against any unmounted creature within 5 feet of your mount that is at least one size smaller than the mount.",
		"***Leap Aside***. If your mount is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw and only half damage if it fails. For your mount to gain this benefit, you must be riding it, and neither of you can have the Incapacitated condition.",
		"***Veer***. While mounted, you can force an attack that hits your mount to hit you instead if you don't have the Incapacitated condition.",
	],
	choices: ["Strength", "Dexterity", "Wisdom"],
	choicesNotInMenu: true,
	"strength": {
		description: "While I'm mounted and not Incapacitated:" +
			(typePF ? " \u2022 I have Adv on attacks vs unmounted within 5 ft that are smaller than my mount." : " ##\u2022 Mounted Strike##. I have Advantage on attacks vs unmounted within 5 ft that are smaller than my mount.") +
			(typePF ? " \u2022 " : " ##\u2022 Leap Aside##. ") + "If my mount is not Incapacitated and makes a Dex save to halve the damage, it takes none on a pass and half on a fail." +
			(typePF ? "\n\u2022 " : " ##\u2022 Veer##. ") + "When an attack hits my mount, I can have it hit me instead." +
			(typePF ? "" : " [+1 Str]"),
		scores: [1, 0, 0, 0, 0, 0],
	},
	"dexterity": {
		description: "While I'm mounted and not Incapacitated:" +
			(typePF ? " \u2022 " : " ##\u2022 Mounted Strike##. ") + "I have Advantage on attacks vs unmounted within 5 ft that are smaller than my mount." +
			(typePF ? " \u2022 " : " ##\u2022 Leap Aside##. ") + "If my mount is not Incapacitated and makes a Dex save to halve the damage, it takes none on a pass and half on a fail." +
			(typePF ? "\n\u2022 " : " ##\u2022 Veer##. ") + "When an attack hits my mount, I can have it hit me instead." +
			(typePF ? "" : " [+1 Dex]"),
		scores: [0, 1, 0, 0, 0, 0],
	},
	"wisdom": {
		description: "While I'm mounted and not Incapacitated:" +
			(typePF ? " \u2022 " : " ##\u2022 Mounted Strike##. ") + "I have Advantage on attacks vs unmounted within 5 ft that are smaller than my mount." +
			(typePF ? " \u2022 " : " ##\u2022 Leap Aside##. ") + "If my mount is not Incapacitated and makes a Dex save to halve the damage, it takes none on a pass and half on a fail." +
			(typePF ? "\n\u2022 " : " ##\u2022 Veer##. ") + "When an attack hits my mount, I can have it hit me instead." +
			(typePF ? "" : " [+1 Wis]"),
		scores: [0, 0, 0, 0, 1, 0],
	},
};
FeatsList["observant"] = {
	name: "Observant",
	source: [["PHB24", 205]],
	type: "general",
	prerequisite: "Level 4+, Intelligence or Wisdom 13+",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && (What("Int") >= 13 || What("Wis") >= 13);
	},
	description: "##Quick Search##. I can take the Search action as a Bonus Action. ##Keen Observer##. I gain proficiency in Insight, Investigation, or Perception. If I already have proficiency in it, I gain Expertise in it. [+1 Intelligence or Wisdom]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Intelligence or Wisdom score by 1, to a maximum of 20.",
		"***Keen Observer***. Choose one of the following skills: Insight, Investigation, or Perception. If you lack proficiency with the chosen skill, you gain proficiency in it, and if you already have proficiency in it, you gain Expertise in it.",
		"***Quick Search***. You can take the Search action as a Bonus Action.",
	],
	action: [["bonus action", "Search"]],
	choices: [
		"Intelligence, Insight",
		"Intelligence, Investigation",
		"Intelligence, Perception",
		"Wisdom, Insight",
		"Wisdom, Investigation",
		"Wisdom, Perception",
	],
	choicesNotInMenu: true,
	"intelligence, insight": {
		description: [
			"##Quick Search##. I can take the Search action as a Bonus Action.",
			"##Keen Observer##. I gain proficiency in the Insight skill. If I already have proficiency in it, I gain Expertise in it.",
			"[+1 Intelligence]",
		].join("\n"),
		scores: [0, 0, 0, 1, 0, 0],
		skills: [["Insight", "increment"]],
	},
	"intelligence, investigation": {
		description: [
			"##Quick Search##. I can take the Search action as a Bonus Action.",
			"##Keen Observer##. I gain proficiency in the Investigation skill. If I already have proficiency in it, I gain Expertise in it.",
			"[+1 Intelligence]",
		].join("\n"),
		scores: [0, 0, 0, 1, 0, 0],
		skills: [["Investigation", "increment"]],
	},
	"intelligence, perception": {
		description: [
			"##Quick Search##. I can take the Search action as a Bonus Action.",
			"##Keen Observer##. I gain proficiency in the Perception skill. If I already have proficiency in it, I gain Expertise in it.",
			"[+1 Intelligence]",
		].join("\n"),
		scores: [0, 0, 0, 1, 0, 0],
		skills: [["Perception", "increment"]],
	},
	"wisdom, insight": {
		description: [
			"##Quick Search##. I can take the Search action as a Bonus Action.",
			"##Keen Observer##. I gain proficiency in the Insight skill. If I already have proficiency in it, I gain Expertise in it.",
			"[+1 Wisdom]",
		].join("\n"),
		scores: [0, 0, 0, 0, 1, 0],
		skills: [["Insight", "increment"]],
	},
	"wisdom, investigation": {
		description: [
			"##Quick Search##. I can take the Search action as a Bonus Action.",
			"##Keen Observer##. I gain proficiency in the Investigation skill. If I already have proficiency in it, I gain Expertise in it.",
			"[+1 Wisdom]",
		].join("\n"),
		scores: [0, 0, 0, 0, 1, 0],
		skills: [["Investigation", "increment"]],
	},
	"wisdom, perception": {
		description: [
			"##Quick Search##. I can take the Search action as a Bonus Action.",
			"##Keen Observer##. I gain proficiency in the Perception skill. If I already have proficiency in it, I gain Expertise in it.",
			"[+1 Wisdom]",
		].join("\n"),
		scores: [0, 0, 0, 0, 1, 0],
		skills: [["Perception", "increment"]],
	},
};
FeatsList["piercer"] = {
	name: "Piercer",
	source: [["PHB24", 206]],
	type: "general",
	prerequisite: "Level 4+",
	prereqeval: function (v) {
		return v.characterLevel >= 4;
	},
	description: "##Puncture##. Once per turn when I hit a creature with an attack that deals Piercing damage, I can reroll one of its damage dice and must use this new roll. ##Enhanced Critical##. When I score a Critical Hit that deals Piercing damage to a creature, I add one extra damage die to the Piercing damage. [+1 Strength or Dexterity]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Strength or Dexterity score by 1, to a maximum of 20.",
		"***Puncture***. Once per turn, when you hit a creature with an attack that deals Piercing damage, you can reroll one of the attack's damage dice, and you must use the new roll.",
		"***Enhanced Critical***. When you score a Critical Hit that deals Piercing damage to a creature, you can roll one additional damage die when determining the extra Piercing damage the target takes.",
	],
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (/pierc/i.test(fields.Damage_Type)) {
					var descrAdd = "1/turn reroll 1 dmg die";
					var dmgDice = fields.Damage_Die.match(/(\b\w|\b\d+|\b)d\d+/ig);
					if (dmgDice && !v.isDC) {
						var dieSize = dmgDice.reduce(function (acc, val) {
							var size = Number(val.replace(/.+d/, ""));
							return size > acc ? size : acc;
						}, 0);
						descrAdd += "; Crit: +1" + dieSize + " dmg";
					};
					fields.Description += (fields.Description ? "; " : "") + descrAdd;
				};
			},
			"Attacks that deal Piercing damage get the benefits from the Piercer feat added to their description: Once per turn reroll 1 damage die, and to roll an extra damage die on a Critical Hit.",
		],
	},
	choices: ["Strength", "Dexterity"],
	choicesNotInMenu: true,
	"strength": {
		description: "##Puncture##. Once per turn, when I hit a creature with an attack that deals Piercing damage, I can reroll one of its damage dice and must use this new roll." +
			(typePF ? " " : "\n") + "##Enhanced Critical##. When I score a Critical Hit that deals Piercing damage to a creature, I add one extra damage die to the Piercing damage. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	"dexterity": {
		description: "##Puncture##. Once per turn, when I hit a creature with an attack that deals Piercing damage, I can reroll one of its damage dice and must use this new roll." +
			(typePF ? " " : "\n") + "##Enhanced Critical##. When I score a Critical Hit that deals Piercing damage to a creature, I add one extra damage die to the Piercing damage. [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
	},
};
FeatsList["poisoner"] = {
	name: "Poisoner",
	source: [["PHB24", 206]],
	type: "general",
	prerequisite: "Level 4+",
	prereqeval: function (v) {
		return v.characterLevel >= 4;
	},
	description: "As a Bonus Action, I can apply poison to weapon/ammo, lasting for 1 min or until used to damage. Creatures damaged this way must make a Con save (DC 8 + PB + mod) or take 2d8 Poison dmg and be Poisoned until my next turn ends. Poison dmg I deal ignores Resistance. I can create poisons. See Notes page.",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Dexterity or Intelligence score by 1, to a maximum of 20.",
		"***Potent Poison***. When you make a damage roll that deals Poison damage, it ignores Resistance to Poison damage.",
		"***Brew Poison***. You gain proficiency with the Poisoner's Kit. With 1 hour of work using such a kit and expending 50 GP worth of materials, you can create a number of poison doses equal to your Proficiency Bonus. As a Bonus Action, you can apply a poison dose to a weapon or piece of ammunition. Once applied, the poison retains its potency for 1 minute or until you deal damage with the poisoned item, whichever is shorter. When a creature takes damage from the poisoned item, that creature must succeed on a Constitution saving throw (8 plus the modifier of the ability increased by this feat and your Proficiency Bonus) or take 2d8 Poison damage and have the Poisoned condition until the end of your next turn.",
	],
	toolProfs: [["Poisoner's Kit"]],
	action: [["bonus action", "Apply Poison"]],
	toNotesPage: [{
		name: "Potent Poison",
		note: ["When I make a damage roll that deals Poison damage, it ignores Resistance to Poison damage."],
	}],
	choices: ["Dexterity", "Intelligence"],
	choicesNotInMenu: true,
	"dexterity": {
		calculate: 'var abi = "Dex";\n var dc = 8 + Number(How("Proficiency Bonus")) + Number(What(abi + " Mod"));\n event.value = "As a Bonus Action, I can apply poison to weapon/ammo, lasting for 1 min or until used to damage. Creatures damaged this way must make a DC " + dc + " Con save or take 2d8 Poison damage and be Poisoned until my next turn ends. Poison damage I deal ignores Resistance. I can create poisons. See Notes page. [+1 " + abi + "]";',
		scores: [0, 1, 0, 0, 0, 0],
		toNotesPage: [{
			name: "Brew Poison",
			note: [
				"I gain proficiency with the Poisoner's Kit. With 1 hour of work using such a kit and expending 50 GP worth of materials, I can create a number of poison doses equal to my Proficiency Bonus.",
				"As a Bonus Action, I can apply a poison dose to a weapon or piece of ammunition. Once applied, the poison retains its potency for 1 minute or until I deal damage with the poisoned item, whichever is shorter.",
				"When a creature takes damage from the poisoned item, that creature must succeed on a Constitution saving throw (8 + my Proficiency Bonus + my Dexterity modifier) or take 2d8 Poison damage and have the Poisoned condition until the end of my next turn.",
			],
			amendTo: "Potent Poison",
		}],
	},
	"intelligence": {
		calculate: 'var abi = "Int";\n var dc = 8 + Number(How("Proficiency Bonus")) + Number(What(abi + " Mod"));\n event.value = "As a Bonus Action, I can apply poison to weapon/ammo, lasting for 1 min or until used to damage. Creatures damaged this way must make a DC " + dc + " Con save or take 2d8 Poison damage and be Poisoned until my next turn ends. Poison damage I deal ignores Resistance. I can create poisons. See Notes page. [+1 " + abi + "]";',
		scores: [0, 0, 0, 1, 0, 0],
		toNotesPage: [{
			name: "Brew Poison",
			note: [
				"I gain proficiency with the Poisoner's Kit. With 1 hour of work using such a kit and expending 50 GP worth of materials, I can create a number of poison doses equal to my Proficiency Bonus.",
				"As a Bonus Action, I can apply a poison dose to a weapon or piece of ammunition. Once applied, the poison retains its potency for 1 minute or until I deal damage with the poisoned item, whichever is shorter.",
				"When a creature takes damage from the poisoned item, that creature must succeed on a Constitution saving throw (8 + my Proficiency Bonus + my Intelligence modifier) or take 2d8 Poison damage and have the Poisoned condition until the end of my next turn.",
			],
			amendTo: "Potent Poison",
		}],
	},
};
FeatsList["polearm master"] = {
	name: "Polearm Master",
	source: [["PHB24", 206]],
	type: "general",
	prerequisite: "Level 4+, Strength or Dexterity 13+",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && (What("Str") >= 13 || What("Dex") >= 13);
	},
	description: "Select one of the choices.",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Dexterity or Strength score by 1, to a maximum of 20.",
		"***Pole Strike***. Immediately after you take the Attack action and attack with a Quarterstaff, a Spear, or a weapon that has the Heavy and Reach properties, you can use a Bonus Action to make a melee attack with the opposite end of the weapon. The weapon deals Bludgeoning damage, and the weapon's damage die for this attack is a d4.",
		"***Reactive Strike***. While you're holding a Quarterstaff, a Spear, or a weapon that has the Heavy and Reach properties, you can take a Reaction to make one melee attack against a creature that enters the reach you have with that weapon.",
	],
	weaponOptions: [{
		name: "Pole Strike",
		regExpSearch: /pole strike|polearm master|^(?=.*(polearm|(quarterstaff|\bstaff\b|\bbo\b)|(spear|qiang|\byaris?\b)|(glaive|guandao|bisento|naginata)|(halberd|\bji\b|kamayari)|(lance|umayari)|(pike|\bmaos?\b|nagaeyari)))(?=.*butt)(?=.*end).*$/i,
		source: [["PHB24", 206]],
		ability: 1,
		type: "polearm master",
		damage: [1, 4, "bludgeoning"],
		range: "Melee",
		description: "As Bonus Action after Attack action with Quarterstaff, Spear, or Heavy Reach weapon",
		abilitytodamage: true,
		selectNow: true,
		isAlwaysProf: true,
	}],
	action: [
		["bonus action", "Pole Strike (after Attack action)"],
		["reaction", "Reactive Strike (if enters my reach)"],
	],
	choices: ["Strength", "Dexterity"],
	choicesNotInMenu: true,
	"strength": {
		description: "While wielding a Quarterstaff, Spear, or Heavy Reach weapon: ##Pole Strike##. As a Bonus Action directly after an Attack action with it, I can make a 1d4 Bludgeoning attack with its other end. ##Reactive Strike##. As a Reaction when a creature enters my reach with it, I can make one melee attack against them." + (typePF ? "" : " [+1 Strength]"),
		scores: [1, 0, 0, 0, 0, 0],
	},
	"dexterity": {
		description: "While wielding a Quarterstaff, Spear, or Heavy Reach weapon: ##Pole Strike##. As a Bonus Action directly after an Attack action with it, I can make a 1d4 Bludgeoning attack with its other end. ##Reactive Strike##. As a Reaction when a creature enters my reach with it, I can make one melee attack against them." + (typePF ? "" : " [+1 Dexterity]"),
		scores: [0, 1, 0, 0, 0, 0],
	},
};
FeatsList["resilient"] = {
	name: "Resilient",
	source: [["PHB24", 206]],
	type: "general",
	prerequisite: "Level 4+",
	prereqeval: function (v) {
		return v.characterLevel >= 4;
	},
	description: "Select an ability score using the square button on this feat line. I gain proficiency with the saving throw of that ability score and a +1 added to it.",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase one ability score of your choice by 1, to a maximum of 20.",
		"***Saving Throw Proficiency***. You gain saving throw proficiency with the chosen ability.",
	],
	choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	choicesNotInMenu: true,
	"strength": {
		description: "I gain proficiency with Strength saving throws. [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
		saves: ["Str"],
	},
	"dexterity": {
		description: "I gain proficiency with Dexterity saving throws. [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
		saves: ["Dex"],
	},
	"constitution": {
		description: "I gain proficiency with Constitution saving throws. [+1 Constitution]",
		scores: [0, 0, 1, 0, 0, 0],
		saves: ["Con"],
	},
	"intelligence": {
		description: "I gain proficiency with Intelligence saving throws. [+1 Intelligence]",
		scores: [0, 0, 0, 1, 0, 0],
		saves: ["Int"],
	},
	"wisdom": {
		description: "I gain proficiency with Wisdom saving throws. [+1 Wisdom]",
		scores: [0, 0, 0, 0, 1, 0],
		saves: ["Wis"],
	},
	"charisma": {
		description: "I gain proficiency with Charisma saving throws. [+1 Charisma]",
		scores: [0, 0, 0, 0, 0, 1],
		saves: ["Cha"],
	},
};
var PHB_RitualCasterDescription = [
	"##Ritual Spells##. I know a number of 1st-level Ritual spells equal to my Proficiency Bonus." + (typePF ? " " : "\n") + "I always have these spells prepared and can cast them as a Ritual or using spell slots.",
	"##Quick Ritual##. Once per Long Rest, I can cast a prepared Ritual spell using its regular casting time without " + (typePF ? "using" : "expending") + " a spell slot.",
]; if (typePF) PHB_RitualCasterDescription.reverse();
FeatsList["ritual caster"] = {
	name: "Ritual Caster",
	source: [["PHB24", 206]],
	type: "general",
	prerequisite: "Level 4+; Intelligence, Wisdom, or Charisma 13+",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && (What("Int") >= 13 || What("Wis") >= 13 || What("Cha") >= 13);
	},
	description: "Select one of the choices.",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.",
		"***Ritual Spells***. Choose a number of level 1 spells equal to your Proficiency Bonus that have the Ritual tag. You always have those spells prepared, and you can cast them with any spell slots you have. The spells' spellcasting ability is the ability increased by this feat. Whenever your Proficiency Bonus increases thereafter, you can add an additional level 1 spell with the Ritual tag to the spells always prepared with this feature.",
		"***Quick Ritual***. With this benefit, you can cast a Ritual spell that you have prepared using its regular casting time rather than the extended time for a Ritual. Doing so doesn't require a spell slot. Once you cast the spell in this way, you can't use this benefit again until you finish a Long Rest.",
	],
	spellcastingBonus: [{
		name: "1st-level Ritual spell",
		ritual: true,
		level: [1, 1],
		times: ProficiencyBonusList,
		firstCol: "markedbox",
	}],
	extraLimitedFeatures: [{
		name: "Quick Ritual",
		usages: 1,
		recovery: "Long Rest",
	}],
	choices: ["Intelligence", "Wisdom", "Charisma"],
	choicesNotInMenu: true,
	"intelligence": {
		description: PHB_RitualCasterDescription.join("\n") + (typePF ? " [+1 Int]" : " [+1 Intelligence]"),
		scores: [0, 0, 0, 1, 0, 0],
		spellcastingAbility: 4,
	},
	"wisdom": {
		description: PHB_RitualCasterDescription.join("\n") + (typePF ? " [+1 Wis]" : " [+1 Wisdom]"),
		scores: [0, 0, 0, 0, 1, 0],
		spellcastingAbility: 5,
	},
	"charisma": {
		description: PHB_RitualCasterDescription.join("\n") + (typePF ? " [+1 Cha]" : " [+1 Charisma]"),
		scores: [0, 0, 0, 0, 0, 1],
		spellcastingAbility: 6,
	},
};
FeatsList["sentinel"] = {
	name: "Sentinel",
	source: [["PHB24", 207]],
	type: "general",
	prerequisite: "Level 4+, Strength or Dexterity 13+",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && (What("Str") >= 13 || What("Dex") >= 13);
	},
	description: "Select one of the choices.",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Strength or Dexterity score by 1, to a maximum of 20.",
		"***Guardian***. Immediately after a creature within 5 feet of you takes the Disengage action or hits a target other than you with an attack, you can make an Opportunity Attack against that creature.",
		"***Halt***. When you hit a creature with an Opportunity Attack, the creature's Speed becomes 0 for the rest of the current turn.",
	],
	action: [["reaction", "Guardian (ally hit/enemy Disengages)"]],
	choices: ["Strength", "Dexterity"],
	choicesNotInMenu: true,
	"strength": {
		description: [
			"##Guardian##. When a creature within 5 ft of me takes the Disengage action or hits a target other than me with an attack, I can make an Opportunity Attack against them.",
			"##Halt##. When I make an Opportunity Attack against a creature, its Speed becomes 0 for the rest of the current turn. [+1 Strength]",
		].join("\n"),
		scores: [1, 0, 0, 0, 0, 0],
	},
	"dexterity": {
		description: [
			"##Guardian##. When a creature within 5 ft of me takes the Disengage action or hits a target other than me with an attack, I can make an Opportunity Attack against them.",
			"##Halt##. When I make an Opportunity Attack against a creature, its Speed becomes 0 for the rest of the current turn. [+1 Dexterity]",
		].join("\n"),
		scores: [0, 1, 0, 0, 0, 0],
	},
};
FeatsList["shadow-touched"] = {
	name: "Shadow-Touched",
	source: [["PHB24", 207]],
	type: "general",
	prerequisite: "Level 4+",
	prereqeval: function (v) {
		return v.characterLevel >= 4;
	},
	description: "I learn *Invisibility* and one 1st-level Illusion or Necromancy spell. I always have these spells prepared. I can cast each once per Long Rest at their lowest level without expending a spell slot and by expending a spell slot as normal. The spells' spellcasting ability is the ability increased by this feat. [+1 Int, Wis, or Cha]",
	descriptionFull: [
		"Your exposure to the Shadowfell's magic grants you the following benefits.",
		"***Ability Score Increase***. Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.",
		"***Shadow Magic***. Choose one level 1 spell from the Illusion or Necromancy school of magic. You always have that spell and the *Invisibility* spell prepared. You can cast each of these spells without expending a spell slot. Once you cast either spell in this way, you can't cast that spell in this way again until you finish a Long Rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat.",
	],
	spellFirstColTitle: "PR",
	spellcastingBonus: [{
		name: "Invisibility",
		spells: ["invisibility"],
		selection: ["invisibility"],
		firstCol: "oncelr+markedbox",
	}, {
		name: "1st-level Illus/Necro spell",
		school: ["Illus", "Necro"],
		level: [1, 1],
		firstCol: "oncelr+markedbox",
	}],
	choices: ["Intelligence", "Wisdom", "Charisma"],
	choicesNotInMenu: true,
	"intelligence": {
		description: "I learn Invisibility and one 1st-level Illusion or Necromancy spell. I always have these spell prepared. I can cast each once per Long Rest at their lowest level without expending a spell slot and can cast them by expending a spell slot as normal. Intelligence is my spellcasting ability for these spells. [+1 Intelligence]",
		spellcastingAbility: 4,
		scores: [0, 0, 0, 1, 0, 0],
	},
	"wisdom": {
		description: "I learn Invisibility and one 1st-level Illusion or Necromancy spell. I always have these spell prepared. I can cast each once per Long Rest at their lowest level without expending a spell slot and can cast them by expending a spell slot as normal. Wisdom is my spellcasting ability for these spells. [+1 Wisdom]",
		spellcastingAbility: 5,
		scores: [0, 0, 0, 0, 1, 0],
	},
	"charisma": {
		description: "I learn Invisibility and one 1st-level Illusion or Necromancy spell. I always have these spell prepared. I can cast each once per Long Rest at their lowest level without expending a spell slot and can cast them by expending a spell slot as normal. Charisma is my spellcasting ability for these spells. [+1 Charisma]",
		spellcastingAbility: 6,
		scores: [0, 0, 0, 0, 0, 1],
	},
};
FeatsList["sharpshooter"] = {
	name: "Sharpshooter",
	source: [["PHB24", 207]],
	type: "general",
	prerequisite: "Level 4+, Dexterity 13+",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && What("Dex") >= 13;
	},
	description: [
		"My attack rolls with Ranged weapons:",
		"\n##Bypass Cover##. Ignore Half Cover and Three-Quarters Cover.",
		"\n##Firing in Melee##. Suffer no Disadvantage when I'm within 5 ft of an enemy.",
		"\n##Long Shots##. Suffer no Disadvantage when used at long range.",
		" [+1 Dexterity]",
	].map(function (n, idx, arr) {
		// Swap 'Firing in Melee' with 'Long Shots' lines on the Printer Friendly sheet
		return typePF && idx === 2 ? arr[3] : typePF && idx === 3 ? arr[2] : n;
	}).join(""),
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Dexterity score by 1, to a maximum of 20.",
		"***Bypass Cover***. Your ranged attacks with weapons ignore Half Cover and Three-Quarters Cover.",
		"***Firing in Melee***. Being within 5 feet of an enemy doesn't impose Disadvantage on your attack rolls with Ranged weapons.",
		"***Long Shots***. Attacking at long range doesn't impose Disadvantage on your attack rolls with Ranged weapons.",
	],
	scores: [0, 1, 0, 0, 0, 0],
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (v.isRangedWeapon || v.isThrownWeapon) {
					fields.Description += (fields.Description ? "; " : "") + "No Disadv at long range; Ignores \u00BD \x26 \u00BE cover";
				};
			},
			"My attack rolls with Ranged weapons suffer no Disadvantage from being used at long range nor from me being within 5 ft of an enemy. They also ignore Half Cover and Three-Quarters Cover.",
		],
	},
};
FeatsList["shield master"] = {
	name: "Shield Master",
	source: [["PHB24", 207]],
	type: "general",
	prerequisite: "Level 4+, Shield Training",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && v.shieldProf;
	},
	description: "##Shield Bash##. Once per turn after I hit a creature in 5 ft during the Attack action, I can have it make a Str save (DC 8 + Str mod + PB) or be pushed 5 ft away or knocked Prone. ##Interpose Shield##. As a Reaction when I succeed on a Dex save to halve damage, I can interpose my shield to avoid all damage. [+1 Str]",
	calculate: 'var dc = 8 + Number(How("Proficiency Bonus")) + Number(What("Str Mod"));\n var txt = ["##Shield Bash##. Once per turn after I hit a creature in 5 ft during the Attack action, I can have it make a DC " + dc + " (8+Str+PB) Str save or be pushed 5 ft away or knocked Prone.", "##Interpose Shield##. As a Reaction when I succeed on a Dex save to halve damage, I can interpose my shield to avoid all the damage."];\n if (typePF) { txt.reverse(); };\n event.value = txt.join("\\n") + " [+1 Strength]";',
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Strength score by 1, to a maximum of 20.",
		"***Shield Bash***. If you attack a creature within 5 feet of you as part of the Attack action and hit with a Melee weapon, you can immediately bash the target with your Shield if it's equipped, forcing the target to make a Strength saving throw (8 plus your Strength modifier and Proficiency Bonus). On a failed save, you either push the target 5 feet from you or cause it to have the Prone condition (your choice). You can use this benefit only once on each of your turns.",
		"***Interpose Shield***. If you're subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you can take a Reaction to take no damage if you succeed on the saving throw and are holding a Shield.",
	],
	scores: [1, 0, 0, 0, 0, 0],
	weaponOptions: [{
		name: "Shield Bash",
		regExpSearch: /^(?=.*shield)(?=.*bash).*$/i,
		source: [["PHB24", 207]],
		ability: 1,
		type: "shield master",
		damage: ["Str save", "", "Shove/Prone"],
		range: "Melee",
		description: "1/turn after Melee weapon hit during Attack action",
		abilitytodamage: false,
		dc: true,
		selectNow: true,
		isNotWeapon: true,
		isAlwaysProf: true,
	}],
	action: [["reaction", "Interpose Shield"]],
};
FeatsList["skill expert"] = {
	name: "Skill Expert",
	source: [["PHB24", 207]],
	type: "general",
	prerequisite: "Level 4+",
	prereqeval: function (v) {
		return v.characterLevel >= 4;
	},
	description: [
		"I gain proficiency in one skill of my choice.",
		"I also gain Expertise in one skill of my choice in which I have proficiency (can be the same skill).",
		"Neither are automated. [+1 to one ability score of my choice]",
	].join("\n"),
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase one ability score of your choice by 1, to a maximum of 20.",
		"***Skill Proficiency***. You gain proficiency in one skill of your choice.",
		"***Expertise***. Choose one skill in which you have proficiency but lack Expertise. You gain Expertise with that skill.",
	],
	skillstxt: "Proficiency in one skill, and Expertise with one skill I'm proficient with.",
	choices: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	choicesNotInMenu: true,
	"strength": {
		description: [
			"I gain proficiency in one skill of my choice.",
			"I also gain Expertise in one skill of my choice in which I have proficiency (can be the same skill).",
			"Neither are automated. [+1 Strength]",
		].join("\n"),
		scores: [1, 0, 0, 0, 0, 0],
	},
	"dexterity": {
		description: [
			"I gain proficiency in one skill of my choice.",
			"I also gain Expertise in one skill of my choice in which I have proficiency (can be the same skill).",
			"Neither are automated. [+1 Dexterity]",
		].join("\n"),
		scores: [0, 1, 0, 0, 0, 0],
	},
	"constitution": {
		description: [
			"I gain proficiency in one skill of my choice.",
			"I also gain Expertise in one skill of my choice in which I have proficiency (can be the same skill).",
			"Neither are automated. [+1 Constitution]",
		].join("\n"),
		scores: [0, 0, 1, 0, 0, 0],
	},
	"intelligence": {
		description: [
			"I gain proficiency in one skill of my choice.",
			"I also gain Expertise in one skill of my choice in which I have proficiency (can be the same skill).",
			"Neither are automated. [+1 Intelligence]",
		].join("\n"),
		scores: [0, 0, 0, 1, 0, 0],
	},
	"wisdom": {
		description: [
			"I gain proficiency in one skill of my choice.",
			"I also gain Expertise in one skill of my choice in which I have proficiency (can be the same skill).",
			"Neither are automated. [+1 Wisdom]",
		].join("\n"),
		scores: [0, 0, 0, 0, 1, 0],
	},
	"charisma": {
		description: [
			"I gain proficiency in one skill of my choice.",
			"I also gain Expertise in one skill of my choice in which I have proficiency (can be the same skill).",
			"Neither are automated. [+1 Charisma]",
		].join("\n"),
		scores: [0, 0, 0, 0, 0, 1],
	},
};
FeatsList["skulker"] = {
	name: "Skulker",
	source: [["PHB24", 208]],
	type: "general",
	prerequisite: "Level 4+, Dexterity 13+",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && What("Dex") >= 13;
	},
	description: [
		"##Fog of War##. I have Advantage on Dexterity (Stealth) checks when using the Hide action during combat.",
		"##Sniper##. If I miss an attack while hidden, making the attack doesn't reveal my location.",
		"##Blindsight##. I have Blindsight with a range of 10 ft. [+1 Dexterity]",
	].join("\n"),
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Dexterity score by 1, to a maximum of 20.",
		"***Blindsight***. You have Blindsight with a range of 10 feet.",
		"***Fog of War***. You exploit the distractions of battle, gaining Advantage on any Dexterity (Stealth) check you make as part of the Hide action during combat.",
		"***Sniper***. If you make an attack roll while hidden and the roll misses, making the attack roll doesn't reveal your location.",
	],
	scores: [0, 1, 0, 0, 0, 0],
	vision: [["Blindsight", 10]],
};
FeatsList["slasher"] = {
	name: "Slasher",
	source: [["PHB24", 208]],
	type: "general",
	prerequisite: "Level 4+",
	prereqeval: function (v) {
		return v.characterLevel >= 4;
	},
	description: "Select one of the choices.",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Strength or Dexterity score by 1, to a maximum of 20.",
		"***Hamstring***. Once per turn when you hit a creature with an attack that deals Slashing damage, you can reduce the Speed of that creature by 10 feet until the start of your next turn.",
		"***Enhanced Critical***. When you score a Critical Hit that deals Slashing damage to a creature, it has Disadvantage on attack rolls until the start of your next turn.",
	],
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (/slash/i.test(fields.Damage_Type)) {
					fields.Description += (fields.Description ? "; " : "") + "1/turn target -10 ft Spd till my next SoT, Crit: also Disadv on atks";
				};
			},
			"Attacks that deal Slashing damage get the benefits from the Slasher feat added to their description: Once per turn -10 ft Speed, and on a Critical Hit target gets Disadvantage on attacks. Each effect lasts until the start of my next turn.",
		],
	},
	choices: ["Strength", "Dexterity"],
	choicesNotInMenu: true,
	"strength": {
		description: "##Hamstring##. Once per turn when I hit a creature with an attack that deals Slashing damage, I can reduce its Speed by 10 ft" + (typePF ? "." : " until the start of my next turn.") +
			"\n##Enhanced Critical##. When I score a Critical Hit that deals Slashing damage to a creature, it gets Disadvantage on attack rolls" + (typePF ? "." : " until the start of my next turn.") +
			(typePF ? "\nEach effect lasts until the start of my next turn." : "") +
			" [+1 Strength]",
		scores: [1, 0, 0, 0, 0, 0],
	},
	"dexterity": {
		description: "##Hamstring##. Once per turn when I hit a creature with an attack that deals Slashing damage, I can reduce its Speed by 10 ft" + (typePF ? "." : " until the start of my next turn.") +
			"\n##Enhanced Critical##. When I score a Critical Hit that deals Slashing damage to a creature, it gets Disadvantage on attack rolls" + (typePF ? "." : " until the start of my next turn.") +
			(typePF ? "\nEach effect lasts until the start of my next turn." : "") +
			" [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
	},
};
FeatsList["speedy"] = {
	name: "Speedy",
	source: [["PHB24", 208]],
	type: "general",
	prerequisite: "Level 4+, Dexterity or Constitution 13+",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && (What("Dex") >= 13 || What("Con") >= 13);
	},
	description: "Select one of the choices.",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Dexterity or Constitution score by 1, to a maximum of 20.",
		"***Speed Increase***. Your Speed increases by 10 feet.",
		"***Dash over Difficult Terrain***. When you take the Dash action on your turn, Difficult Terrain doesn't cost you extra movement for the rest of that turn.",
		"***Agile Movement***. Opportunity Attacks have Disadvantage against you.",
	],
	speed: { allModes: { bonus: "+10" } },
	choices: ["Dexterity", "Constitution"],
	choicesNotInMenu: true,
	"dexterity": {
		description: [
			"##Agile Movement##. Opportunity Attacks have Disadvantage against me.",
			"##Dash over Difficult Terrain##. When I take the Dash action on my turn, Difficult Terrain doesn't cost me extra movement that turn.",
			"##Speed Increase##. I have +10 ft Speed. [+1 Dexterity]",
		].join("\n"),
		scores: [0, 1, 0, 0, 0, 0],
	},
	"constitution": {
		description: [
			"##Agile Movement##. Opportunity Attacks have Disadvantage against me.",
			"##Dash over Difficult Terrain##. When I take the Dash action on my turn, Difficult Terrain doesn't cost me extra movement that turn.",
			"##Speed Increase##. I have +10 ft Speed. [+1 Constitution]",
		].join("\n"),
		scores: [0, 0, 1, 0, 0, 0],
	},
};
var PHB_SpellSniperDescription = [
	"My attack rolls with spells:",
	"##Bypass Cover##. Ignore Half Cover and Three-Quarters Cover.",
	"##Casting in Melee##. Suffer no Disadvantage when I'm within 5 ft of an enemy.",
	"##Increased Range##. Gain +60 ft range if the spell's range is " + (typePF ? "\u226510 ft." : "10 ft or more."),
].map(function (n, idx, arr) {
	// Swap 'Increased Range' with 'Casting in Melee' lines on the Printer Friendly sheet
	return typePF && idx === 2 ? arr[3] : typePF && idx === 3 ? arr[2] : n;
}).join("\n");
FeatsList["spell sniper"] = {
	name: "Spell Sniper",
	source: [["PHB24", 208]],
	type: "general",
	prerequisite: "Level 4+, Spellcasting or Pact Magic Feature",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && v.isSpellcastingClass;
	},
	description: "Select one of the choices.",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.",
		"***Bypass Cover***. Your attack rolls for spells ignore Half Cover and Three-Quarters Cover.",
		"***Casting in Melee***. Being within 5 feet of an enemy doesn't impose Disadvantage on your attack rolls with spells.",
		"***Increased Range***. When you cast a spell that has a range of at least 10 feet and requires you to make an attack roll, you can increase the spell's range by 60 feet.",
	],
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (!v.isDC && v.isSpell) {
					var name = "spell sniper", addition = "+60";
					var useRange = v.rangeObject ? v.rangeObject : fields.Range;
					var stopFunction = function (sRange, nRangeFT) { return nRangeFT < 10; };
					v.rangeObject = amendRangeObject(useRange, name, addition, stopFunction);
					// Test if something changed
					if (v.rangeObject && v.rangeObject.result !== fields.Range) {
						fields.Range = v.rangeObject.result;
					};
				};
			},
			"My spells and cantrips that require an attack roll and have a range of 10 ft or more gain +60 ft range.",
			700,
		],
		spellAdd: [
			function (spellKey, spellObj, spName) {
				if ( !spellObj.psionic && /spell at(tac)?k/i.test(spellObj.description + spellObj.descriptionFull) && /^(?!.*(S:|rad|touch|self|cone|cube)).*\d+([.,]\d+)?.?(f.{0,2}t|m).*$/i.test(spellObj.range) ) {
					var name = "spell sniper", addition = "+60";
					var useRange = spellObj.rangeObject ? spellObj.rangeObject : spellObj.range;
					var stopFunction = function (sRange, nRangeFT) { return nRangeFT < 10; };
					spellObj.rangeObject = amendRangeObject(useRange, name, addition, stopFunction);
					// Test if something changed
					if (spellObj.rangeObject && spellObj.rangeObject.result !== spellObj.range) {
						spellObj.range = spellObj.rangeObject.result;
						return true;
					};
				};
			},
			"My spells and cantrips that require an attack roll and have a range of 10 ft or more gain +60 ft range.",
			700,
		],
	},
	choices: ["Intelligence", "Wisdom", "Charisma"],
	choicesNotInMenu: true,
	"intelligence": {
		description: PHB_SpellSniperDescription + " [+1 Intelligence]",
		scores: [0, 0, 0, 1, 0, 0],
	},
	"wisdom": {
		description: PHB_SpellSniperDescription + " [+1 Wisdom]",
		scores: [0, 0, 0, 0, 1, 0],
	},
	"charisma": {
		description: PHB_SpellSniperDescription + " [+1 Charisma]",
		scores: [0, 0, 0, 0, 0, 1],
	},
};
FeatsList["telekinetic"] = {
	name: "Telekinetic",
	source: [["PHB24", 208]],
	type: "general",
	prerequisite: "Level 4+",
	prereqeval: function (v) {
		return v.characterLevel >= 4;
	},
	description: "Select one of the choices.",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.",
		"***Minor Telekinesis***. You learn the *Mage Hand* spell. You can cast it without Verbal or Somatic components, you can make the spectral hand Invisible, and its range and the distance it can be away from you both increase by 30 feet when you cast it. The spell's spellcasting ability is the ability increased by this feat.",
		"***Telekinetic Shove***. As a Bonus Action, you can telekinetically shove one creature you can see within 30 feet of yourself. When you do so, the target must succeed on a Strength saving throw (8 plus the ability modifier of the score increased by this feat and your Proficiency Bonus) or be moved 5 feet toward or away from you.",
	],
	action: [["bonus action", "Telekinetic Shove"]],
	spellcastingBonus: [{
		name: "Mage Hand",
		spells: ["mage hand"],
		selection: ["mage hand"],
	}],
	spellChanges: {
		"mage hand": {
			components: "",
			range: "60 ft",
			description: "(in)visible hand does simple task, carry \u226410lb; Act: control again \x26 move 30ft; ends if recast/out range",
			changes: "I can cast *Mage Hand* without Verbal or Somatic components, can make the spectral hand Invisible, and can the range and distance it can be away from me increases by +30 ft.",
		},
	},
	choices: ["Intelligence", "Wisdom", "Charisma"],
	choicesNotInMenu: true,
	"intelligence": {
		description: (typePF ? "" : "##Minor Telekinesis##. ") + "I know the Mage Hand cantrip, can cast it without components, can make it invisible, and with +30 ft range. Intelligence is my spellcasting ability for it. " +
			(typePF ? "" : "##Telekinetic Shove##. ") + "As a Bonus Action, I can have one creature I can see within 30 ft make a Strength save (vs this feat's spell save DC) or move it 5 ft from or towards me. [+1 Int]",
		spellcastingAbility: 4,
		scores: [0, 0, 0, 1, 0, 0],
	},
	"wisdom": {
		description: (typePF ? "" : "##Minor Telekinesis##. ") + "I know the Mage Hand cantrip, can cast it without components, can make it invisible, and with +30 ft range. Wisdom is my spellcasting ability for it. " +
			(typePF ? "" : "##Telekinetic Shove##. ") + "As a Bonus Action, I can have one creature I can see within 30 ft make a Strength save (vs this feat's spell save DC) or move it 5 ft from or towards me. [+1 Wis]",
		spellcastingAbility: 5,
		scores: [0, 0, 0, 0, 1, 0],
	},
	"charisma": {
		description: (typePF ? "" : "##Minor Telekinesis##. ") + "I know the Mage Hand cantrip, can cast it without components, can make it invisible, and with +30 ft range. Charisma is my spellcasting ability for it. " +
			(typePF ? "" : "##Telekinetic Shove##. ") + "As a Bonus Action, I can have one creature I can see within 30 ft make a Strength save (vs this feat's spell save DC) or move it 5 ft from or towards me. [+1 Cha]",
		spellcastingAbility: 6,
		scores: [0, 0, 0, 0, 0, 1],
	},
};
FeatsList["telepathic"] = {
	name: "Telepathic",
	source: [["PHB24", 208]],
	type: "general",
	prerequisite: "Level 4+",
	prereqeval: function (v) {
		return v.characterLevel >= 4;
	},
	description: "Select one of the choices.",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.",
		"***Telepathic Utterance***. You can speak telepathically to any creature you can see within 60 feet of yourself. Your telepathic utterances are in a language you know, and the creature understands you only if it knows that language. Your communication doesn't give the creature the ability to respond to you telepathically.",
		"***Detect Thoughts***. You always have the *Detect Thoughts* spell prepared. You can cast it without a spell slot or spell components, and you must finish a Long Rest before you can cast it in this way again. You can also cast it using spell slots you have of the appropriate level. Your spellcasting ability for the spell is the ability increased by this feat.",
	],
	spellcastingBonus: [{
		name: "Detect Thoughts",
		spells: ["detect thoughts"],
		selection: ["detect thoughts"],
		firstCol: "oncelr+markedbox",
	}],
	spellChanges: {
		"detect thoughts": {
			components: "(V,S,M)",
			changes: "My Telepathic feat allows me to cast *Detect Thoughts* once per Long Rest without requiring a spell slot or components, or by using a spell slot to cast it with components as normal.",
		},
	},
	choices: ["Intelligence", "Wisdom", "Charisma"],
	choicesNotInMenu: true,
	"intelligence": {
		description: (typePF ? "" : "##Telepathic Utterance##. ") + "I can telepathically speak to a creature I can see within 60 ft in a language I know, but they can't respond telepathically. I always have ##Detect Thoughts## prepared. I can cast it once per Long Rest without a spell slot or components and by expending a spell slot as normal. Intelligence is my spellcasting ability for it. [+1 Int]",
		spellcastingAbility: 4,
		scores: [0, 0, 0, 1, 0, 0],
	},
	"wisdom": {
		description: (typePF ? "" : "##Telepathic Utterance##. ") + "I can telepathically speak to a creature I can see within 60 ft in a language I know, but they can't respond telepathically. I always have ##Detect Thoughts## prepared. I can cast it once per Long Rest without a spell slot or components and by expending a spell slot as normal. Wisdom is my spellcasting ability for it. [+1 Wis]",
		spellcastingAbility: 5,
		scores: [0, 0, 0, 0, 1, 0],
	},
	"charisma": {
		description: (typePF ? "" : "##Telepathic Utterance##. ") + "I can telepathically speak to a creature I can see within 60 ft in a language I know, but they can't respond telepathically. I always have ##Detect Thoughts## prepared. I can cast it once per Long Rest without a spell slot or components and by expending a spell slot as normal. Charisma is my spellcasting ability for it. [+1 Cha]",
		spellcastingAbility: 6,
		scores: [0, 0, 0, 0, 0, 1],
	},
};
FeatsList["war caster"] = {
	name: "War Caster",
	source: [["PHB24", 209]],
	type: "general",
	prerequisite: "Level 4+, Spellcasting or Pact Magic Feature",
	prereqeval: function (v) {
		return v.characterLevel >= 4 && v.isSpellcastingClass;
	},
	description: "I have Advantage on Con saves to maintain ##Concentration##. I can do ##Somatic components## even when I have weapons or a Shield in both hands. ##Reactive Spell##. instead of an Opportunity Attack when a creature leaves my reach, I can cast a spell on it, a spell with a one action casting time that targets only that creature.",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.",
		"***Concentration***. You have Advantage on Constitution saving throws that you make to maintain Concentration.",
		"***Reactive Spell***. When a creature provokes an Opportunity Attack from you by leaving your reach, you can take a Reaction to cast a spell at the creature rather than making an Opportunity Attack. The spell must have a casting time of one action and must target only that creature.",
		"***Somatic Components***. You can perform the Somatic components of spells even when you have weapons or a Shield in one or both hands.",
	],
	action: [["reaction", "Reactive Spell"]],
	savetxt: { text: "Adv on Con (Concentration) saves" },
	choices: ["Intelligence", "Wisdom", "Charisma"],
	choicesNotInMenu: true,
	"intelligence": {
		description: "I have Advantage on Con saves to maintain ##Concentration##. I can " + (typePF ? "do" : "perform") + " ##Somatic components## " + (typePF ? "" : "of spells ") + "even when I have weapons or a Shield in both hands. ##Reactive Spell##. instead of an Opportunity Attack when a creature leaves my reach, I can cast a spell on it, a spell with a one action casting time that targets only that creature." + (typePF ? "" : " [+1 Intelligence]"),
		scores: [0, 0, 0, 1, 0, 0],
	},
	"wisdom": {
		description: "I have Advantage on Con saves to maintain ##Concentration##. I can " + (typePF ? "do" : "perform") + " ##Somatic components## " + (typePF ? "" : "of spells ") + "even when I have weapons or a Shield in both hands. ##Reactive Spell##. instead of an Opportunity Attack when a creature leaves my reach, I can cast a spell on it, a spell with a one action casting time that targets only that creature." + (typePF ? "" : " [+1 Wisdom]"),
		scores: [0, 0, 0, 0, 1, 0],
	},
	"charisma": {
		description: "I have Advantage on Con saves to maintain ##Concentration##. I can " + (typePF ? "do" : "perform") + " ##Somatic components## " + (typePF ? "" : "of spells ") + "even when I have weapons or a Shield in both hands. ##Reactive Spell##. instead of an Opportunity Attack when a creature leaves my reach, I can cast a spell on it, a spell with a one action casting time that targets only that creature." + (typePF ? "" : " [+1 Charisma]"),
		scores: [0, 0, 0, 0, 0, 1],
	},
};
FeatsList["weapon master"] = {
	name: "Weapon Master",
	source: [["PHB24", 209]],
	type: "general",
	prerequisite: "Level 4+",
	prereqeval: function (v) { return v.characterLevel >= 4; },
	description: 'I gain mastery with one Simple or Martial weapon. Whenever I finish a Long Rest, I can change my choice. Use 2nd page "Choose Feature" button to select this. [+1 Strength or Dexterity]',
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Strength or Dexterity score by 1, to a maximum of 20.",
		"***Mastery Property***. Your training with weapons allows you to use the mastery property of one kind of Simple or Martial weapon of your choice, provided you have proficiency with it. Whenever you finish a Long Rest, you can change the kind of weapon to another eligible kind.",
	],
	bonusClassExtrachoices: [{
		"class": "fighter",
		"feature": "weapon mastery",
		"bonus": 1,
	}],
	choices: ["Strength", "Dexterity"],
	choicesNotInMenu: true,
	"strength": {
		description: 'I gain mastery with one Simple or Martial weapon. Whenever I finish a Long Rest, I can change my choice. Use 2nd page "Choose Feature" button to select this. [+1 Strength]',
		scores: [1, 0, 0, 0, 0, 0],
	},
	"dexterity": {
		description: 'I gain mastery with one Simple or Martial weapon. Whenever I finish a Long Rest, I can change my choice. Use 2nd page "Choose Feature" button to select this. [+1 Dexterity]',
		scores: [0, 1, 0, 0, 0, 0],
	},
};
// Fighting Style feats
FeatsList["blind fighting"] = {
	name: "Blind Fighting",
	source: [["PHB24", 209]],
	type: "fighting style",
	description: "I have Blindsight with a range of 10 ft.",
	descriptionFull: "You have Blindsight with a range of 10 feet.",
	vision: [["Blindsight", 10]],
};
FeatsList["dueling"] = {
	name: "Dueling",
	source: [["PHB24", 209]],
	type: "fighting style",
	description: "When I'm holding a Melee weapon in one hand and no other weapons, I gain a +2 bonus to damage rolls with that weapon.",
	descriptionClassFeature: desc("I add +2 to damage rolls when wielding a Melee weapon in one hand and no other weapons."),
	descriptionFull: "When you're holding a Melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.",
	calcChanges: {
		atkCalc: [
			function (fields, v, output) {
				for (var i = 1; i <= FieldNumbers.actions; i++) {
					if (/off.hand.attack/i.test(What("Bonus Action " + i))) return;
				};
				if (v.isMeleeWeapon && !/((^|[^+-]\b)2|\btwo).?hand(ed)?s?\b/i.test(fields.Description)) output.extraDmg += 2;
			},
			"When I'm holding a Melee weapon in one hand and no other weapons, I gain a +2 bonus to damage rolls with that weapon. This condition will always be false if the bonus action 'Off-hand Attack' exists.",
		],
	},
};
FeatsList["interception"] = {
	name: "Interception",
	source: [["PHB24", 209]],
	type: "fighting style",
	description: "As a Reaction when a creature I can see hits another creature within 5 ft of me with an attack, I can reduce the damage dealt by 1d10 plus my Proficiency Bonus. I must be holding a Shield or a Simple or Martial weapon to do this.",
	calculate: 'event.value = "As a Reaction when a creature I can see hits another creature within 5 ft of me with an attack, I can reduce the damage dealt by 1d10 plus my Proficiency Bonus (1d10+" + Number(How("Proficiency Bonus")) + "). I must be holding a Shield or a Simple or Martial weapon to do this.";',
	descriptionClassFeature: desc("As a Reaction when a creature I can see hits another within 5 ft of me, I can use a Shield or Simple/Martial weapon I'm holding to reduce the damage done by 1d10 + Prof" + (typePF ? "iciency" : "") + " Bonus."),
	descriptionFull: "When a creature you can see hits another creature within 5 feet of you with an attack roll, you can take a Reaction to reduce the damage dealt to the target by 1d10 plus your Proficiency Bonus. You must be holding a Shield or a Simple or Martial weapon to use this Reaction.",
	action: [["reaction", "Interception Fighting Style"]],
};
FeatsList["protection"] = {
	name: "Protection",
	source: [["PHB24", 209]],
	type: "fighting style",
	description: "As a Reaction when a creature I can see attacks a target other than me within 5 ft of me, I can interpose my Shield if I'm holding one. This imposes Disadvantage to the triggering attack and all other attacks against the target until the start of my next turn while I stay within 5 ft of the target.",
	descriptionClassFeature: desc("As a Reaction when a creature I can see attacks a creature within 5 ft of me, I can use a shield I'm holding to impose Disadv" + (typePF ? "antage" : "") + " on this and attacks " + (typePF ? "against" : "vs") + " them until my next turn starts."),
	descriptionFull: "When a creature you can see attacks a target other than you that is within 5 feet of you, you can take a Reaction to interpose your Shield if you're holding one. You impose Disadvantage on the triggering attack roll and all other attack rolls against the target until the start of your next turn if you remain within 5 feet of the target.",
	action: [["reaction", "Protection Fighting Style"]],
};
FeatsList["thrown weapon fighting"] = {
	name: "Thrown Weapon Fighting",
	source: [["PHB24", 210]],
	type: "fighting style",
	description: "I add +2 to the damage roll when I hit with a ranged attack roll using a weapon that has the Thrown property.",
	descriptionClassFeature: desc("I add +2 damage to ranged attacks made with weapons with the Thrown property."),
	descriptionFull: "When you hit with a ranged attack roll using a weapon that has the Thrown property, you gain a +2 bonus to the damage roll.",
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (v.isThrownWeapon && v.isMeleeWeapon) {
					fields.Description += (fields.Description ? "; " : "") + "+2 damage when thrown";
				};
			},
			"I deal +2 damage when I hit a ranged attack made with a thrown weapon.",
		],
		atkCalc: [
			function (fields, v, output) {
				if (v.isThrownWeapon && !v.isMeleeWeapon) {
					output.extraDmg += 2;
				};
			},
			"",
		],
	},
};
FeatsList["unarmed fighting"] = {
	name: "Unarmed Fighting",
	source: [["PHB24", 210]],
	type: "fighting style",
	description: "My Unarmed Strikes deal 1d6 damage instead of 1. If I'm not holding any weapons or a Shield when I make the attack roll, the d6 becomes a d8. At the start of each of my turns, I can deal 1d4 Bludgeoning damage to one creature Grappled by me.",
	descriptionClassFeature: desc([
		"My unarmed strikes deal 1d6 damage, or 1d8 when I'm not holding any weapons or Shield.",
		"At the start of my turn, I can deal 1d4 Bludgeoning damage to a creature I'm Grappling.",
	]),
	descriptionFull: [
		"When you hit with your Unarmed Strike and deal damage, you can deal Bludgeoning damage equal to 1d6 plus your Strength modifier instead of the normal damage of an Unarmed Strike. If you aren't holding any weapons or a Shield when you make the attack roll, the d6 becomes a d8.",
		"At the start of each of your turns, you can deal 1d4 Bludgeoning damage to one creature Grappled by you.",
	],
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (v.baseWeaponName == "unarmed strike") {
					if (fields.Damage_Die == 1 || fields.Damage_Die == "1d4") fields.Damage_Die = "1d6";
					fields.Description += (fields.Description ? "; " : "") + "Versatile (d8)";
				};
			},
			"My unarmed strikes deal 1d6 damage instead of 1, which increases to 1d8 if I'm not holding any weapons or a Shield when I make the attack roll.",
			1,
		],
	},
};
// Epic Boons feats
FeatsList["boon of energy resistance"] = {
	name: "Boon of Energy Resistance",
	source: [["PHB24", 210]],
	type: "epic boon",
	prerequisite: "Level 19+",
	prereqeval: function (v) { return v.characterLevel >= 19; },
	description: "I gain ***Resistance*** to two non-physical damage types, which I can change after a Long Rest. ***Energy Redirection***. As a reaction when I take these types of damage, I can have a creature I can see within 60 ft make a Dex save DC 8 + Con mod + Prof Bonus, or take 2d12+Con mod damage of the same type.",
	calculate: 'var conMod = Number(What("Con Mod")), profB = Number(How("Proficiency Bonus")); var conModStr = conMod > 0 ? "+" + conMod : conMod === 0 ? "" : conMod; event.value = "I gain ***Resistance*** to two non-physical damage types, which I can change after a Long Rest. ***Energy Redirection***. As a reaction when I take these types of damage, I can have a creature I can see within 60 ft make a Dex save DC " + (8+conMod+profB) + " (8 + Con mod + Prof Bonus) or take 2d12" + conModStr + " (Con mod) damage of the same type.";',
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase one ability score of your choice by 1, to a maximum of 30.",
		"***Energy Resistances***. You gain Resistance to two of the following damage types of your choice: Acid, Cold, Fire, Lightning, Necrotic, Poison, Psychic, Radiant, or Thunder. Whenever you finish a Long Rest, you can change your choices.",
		"***Energy Redirection***. When you take damage of one of the types chosen for the Energy Resistances benefit, you can take a Reaction to direct damage of the same type toward another creature you can see within 60 feet of yourself that isn't behind Total Cover. If you do so, that creature must succeed on a Dexterity saving throw (8 plus your Constitution modifier and Proficiency Bonus) or take damage equal to 2d12 plus your Constitution modifier.",
	],
	action: [["reaction", "Energy Redirection"]],
};
FeatsList["boon of fortitude"] = {
	name: "Boon of Fortitude",
	source: [["PHB24", 210]],
	type: "epic boon",
	prerequisite: "Level 19+",
	prereqeval: function (v) {
		return v.characterLevel >= 19;
	},
	description: "My Hit Point maximum increases by 40. When I regain Hit Points, I can add my Constitution modifier to the amount of HP regained. Once I've regained these additional HP, I can't do so again until the start of my next turn.",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase one ability score of your choice by 1, to a maximum of 30.",
		"***Fortified Health***. Your Hit Point maximum increases by 40. In addition, whenever you regain Hit Points, you can regain additional Hit Points equal to your Constitution modifier. Once you've regained these additional Hit Points, you can't do so again until the start of your next turn.",
	],
	calcChanges: {
		hp: function (totalHD, HDobj, prefix) { return [40, "Boon of Fortitude"]; },
	},
};
FeatsList["boon of recovery"] = {
	name: "Boon of Recovery",
	source: [["PHB24", 211]],
	type: "epic boon",
	prerequisite: "Level 19+",
	prereqeval: function (v) {
		return v.characterLevel >= 19;
	},
	description: [
		"##Last Stand##. Once per Long Rest when I would be reduced to 0 HP, I can instead drop to 1 HP and regain half my max HP.",
		"n##Recover Vitality##. I have a pool of ten d10s, which replenish after a Long Rest. As a Bonus Action, I can expend and roll a number of dice from this pool to regain HP.",
	].join("\n"),
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase one ability score of your choice by 1, to a maximum of 30.",
		"***Last Stand***. When you would be reduced to 0 Hit Points, you can drop to 1 Hit Point instead and regain a number of Hit Points equal to half your Hit Point maximum. Once you use this benefit, you can't use it again until you finish a Long Rest.",
		"***Recover Vitality***. You have a pool of ten d10s. As a Bonus Action, you can expend dice from the pool, roll those dice, and regain a number of Hit Points equal to the roll's total. You regain all the expended dice when you finish a Long Rest.",
	],
	action: [["bonus action", "Recover Vitality"]],
	extraLimitedFeatures: [{
		name: "Last Stand",
		usages: 1,
		recovery: "Long Rest",
	}, {
		name: "Recover Vitality (d10)",
		usages: 10,
		recovery: "Long Rest",
	}],
};
FeatsList["boon of skill"] = {
	name: "Boon of Skill",
	source: [["PHB24", 211]],
	type: "epic boon",
	prerequisite: "Level 19+",
	prereqeval: function (v) { return v.characterLevel >= 19; },
	description: "I gain proficiency in all skills and Expertise in one skill of my choice.",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase one ability score of your choice by 1, to a maximum of 30.",
		"***All-Around Adept***. You gain proficiency in all skills.",
		"***Expertise***. Choose one skill in which you lack Expertise. You gain Expertise in that skill.",
	],
	skills: ["Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight of Hand", "Stealth", "Survival"],
	skillstxt: "I gain proficiency in all skills and Expertise in one skill of my choice.",
};
FeatsList["boon of speed"] = {
	name: "Boon of Speed",
	source: [["PHB24", 211]],
	type: "epic boon",
	prerequisite: "Level 19+",
	prereqeval: function (v) { return v.characterLevel >= 19; },
	description: "***Escape Artist***. As a Bonus Action, I can take the Disengage action, which also ends the Grappled condition on me.\n***Quickness***. My Speed increases by 30 ft.",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase one ability score of your choice by 1, to a maximum of 30.",
		"***Escape Artist***. As a Bonus Action, you can take the Disengage action, which also ends the Grappled condition on you.",
		"***Quickness***. Your Speed increases by 30 feet.",
	],
	speed: { allModes: { bonus: "+30" } },
	action: [["bonus action", "Escape Artist (Disengage \x26 Escape Grapple)"]],
};

[ // Add ability score choices to the epic boons
	["boon of energy resistance", true, false],
	["boon of fortitude", true, false],
	["boon of recovery", true, true],
	["boon of skill", false, false],
	["boon of speed", false, false],
].forEach(function (entry) {
	addAbilityScoreChoicesToFeat(FeatsList[entry[0]], false, 30, entry[1], entry[2]);
});


// Weapons (cantrips not in the free rules)
WeaponsList["mind sliver"] = {
	regExpSearch: /^(?=.*mind)(?=.*sliver).*$/i,
	name: "Mind Sliver",
	source: [["PHB24", 298]],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage: ["C", 6, "psychic"],
	range: "60 ft",
	description: "Int save to avoid; Target has -1d4 on next save before my next turn ends",
	abilitytodamage: false,
	dc: true,
};
WeaponsList["thorn whip"] = {
	regExpSearch: /^(?=.*thorn)(?=.*whip).*$/i,
	name: "Thorn Whip",
	source: [["PHB24", 333]],
	list: "spell",
	ability: 5,
	type: "Cantrip",
	damage: ["C", 6, "piercing"],
	range: "Melee, 30 ft",
	description: "Melee spell attack; Pull up to Large target up to 10 ft closer",
	abilitytodamage: false,
};
WeaponsList["thunderclap"] = {
	regExpSearch: /thunderclap/i,
	name: "Thunderclap",
	source: [["PHB24", 333]],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage: ["C", 6, "thunder"],
	range: "5-ft radius",
	description: "Con save to avoid; All creatures in area; Audible in 100 ft",
	abilitytodamage: false,
	dc: true,
};
WeaponsList["toll the dead"] = {
	regExpSearch: /^(?=.*toll)(?=.*dead).*$/i,
	name: "Toll the Dead",
	source: [["PHB24", 334]],
	list: "spell",
	ability: 5,
	type: "Cantrip",
	damage: ["C", 12, "necrotic"],
	range: "60 ft",
	description: "Wis save to avoid; If target is at full HP, d8 instead of d12 damage",
	abilitytodamage: false,
	dc: true,
};
WeaponsList["word of radiance"] = {
	regExpSearch: /^(?=.*word)(?=.*radiance).*$/i,
	name: "Word of Radiance",
	source: [["PHB24", 343]],
	list: "spell",
	ability: 5,
	type: "Cantrip",
	damage: ["C", 6, "radiant"],
	range: "5-ft radius",
	description: "Con save to avoid; Only chosen creatures I can see are affected",
	abilitytodamage: false,
	dc: true,
};

// Spells
SpellsList["arcane gate"] = {
	name: "Arcane Gate",
	classes: ["sorcerer", "warlock", "wizard"],
	source: [["PHB24", 242]],
	reqLoS: true,
	level: 6,
	school: "Conj",
	time: "Act",
	range: "500 ft",
	components: "V,S",
	duration: "Conc, 10 min",
	description: "Two portals up to 500 ft apart filled with opaque mist; teleport any between; Bns change orientation",
	descriptionFull: [
		"You create linked teleportation portals. Choose two Large, unoccupied spaces on the ground that you can see, one space within range and the other one within 10 feet of you. A circular portal opens in each of those spaces and remains for the duration.",
		"The portals are two-dimensional glowing rings filled with mist that blocks sight. They hover inches from the ground and are perpendicular to it.",
		"A portal is open on only one side (you choose which). Anything entering the open side of a portal exits from the open side of the other portal as if the two were adjacent to each other. As a Bonus Action, you can change the facing of the open sides.",
	],
};
SpellsList["arcane vigor"] = {
	name: "Arcane Vigor",
	classes: ["sorcerer", "wizard"],
	source: [["PHB24", 242]],
	level: 2,
	school: "Abjur",
	time: "Bns",
	range: "Self",
	components: "V,S",
	duration: "Instantaneous",
	description: "Expend and roll up to 2+1/SL unused Hit Dice; Heal roll + spellcasting ability modifier in HP",
	descriptionFull: [
		"You tap into your life force to heal yourself. Roll one or two of your unexpended Hit Point Dice, and regain a number of Hit Points equal to the roll's total plus your spellcasting ability modifier. Those dice are then expended.",
		UsingHigherLvl + "The number of unexpended Hit Dice you can roll increases by one for each spell slot level above 2.",
	],
};
SpellsList["armor of agathys"] = {
	name: "Armor of Agathys",
	classes: ["warlock"],
	source: [["PHB24", 243]],
	level: 1,
	school: "Abjur",
	time: "Bns",
	range: "Self",
	components: "V,S,M",
	compMaterial: "A shard of blue glass",
	duration: "1 h",
	description: "5+5/SL temp HP; crea that hit me with melee atk take 5+5/SL Cold dmg; spell ends if 0 temp HP left",
	descriptionShorter: "5+5/SL temp HP; melee attackers vs me take 5+5/SL Cold dmg; spell ends if 0 temp HP",
	descriptionFull: [
		"Protective magical frost surrounds you. You gain 5 Temporary Hit Points. If a creature hits you with a melee attack roll before the spell ends, the creature takes 5 Cold damage. The spell ends early if you have no Temporary Hit Points.",
		UsingHigherLvl + "The Temporary Hit Points and the Cold damage both increase by 5 for each spell slot level above 1.",
	],
};
SpellsList["arms of hadar"] = {
	name: "Arms of Hadar",
	classes: ["warlock"],
	source: [["PHB24", 243]],
	level: 1,
	school: "Conj",
	time: "Act",
	range: "S:10-ft rad",
	components: "V,S",
	duration: "Instantaneous",
	save: "Str",
	description: "All crea in range 2d6+1d6/SL Necrotic dmg; save halves; on failed save no reactions until next turn",
	descriptionFull: [
		"Invoking Hadar, you cause tendrils to erupt from yourself. Each creature in a 10-foot Emanation originating from you makes a Strength saving throw. On a failed save, a target takes 2d6 Necrotic damage and can't take Reactions until the start of its next turn. On a successful save, a target takes half as much damage only.",
		UsingHigherLvl + "The damage increases by 1d6 for each spell slot level above 1.",
	],
};
SpellsList["aura of purity"] = {
	name: "Aura of Purity",
	classes: ["cleric", "paladin"],
	source: [["PHB24", 244]],
	level: 4,
	school: "Abjur",
	time: "Act",
	range: "S:30-ft rad",
	components: "V",
	duration: "Conc, 10 min",
	description: "Me \x26 allies resist Poison dmg, Adv on saves vs blind, charm, deaf, fright, paralysis, poison, and stun",
	descriptionFull: "An aura radiates from you in a 30-foot Emanation for the duration. While in the aura, you and your allies have Resistance to Poison damage and Advantage on saving throws to avoid or end effects that include the Blinded, Charmed, Deafened, Frightened, Paralyzed, Poisoned, or Stunned condition.",
};
SpellsList["aura of vitality"] = {
	name: "Aura of Vitality",
	classes: ["cleric", "druid", "paladin"],
	source: [["PHB24", 244]],
	level: 3,
	school: "Abjur",
	time: "Act",
	range: "S:30-ft rad",
	components: "V",
	duration: "Conc, 1 min",
	description: "On cast and at the start of each of my turns, 1 creature in aura heals 2d6 HP",
	descriptionFull: "An aura radiates from you in a 30-foot Emanation for the duration. When you create the aura and at the start of each of your turns while it persists, you can restore 2d6 Hit Points to one creature in it.",
};
SpellsList["banishing smite"] = {
	name: "Banishing Smite",
	classes: ["paladin"],
	source: [["PHB24", 245]],
	level: 5,
	school: "Conj",
	time: "Bns",
	timeFull: "Bonus Action, which you take immediately after hitting a creature with a Melee weapon or an Unarmed Strike",
	range: "Self",
	components: "V",
	duration: "Conc, 1 min",
	description: "Cast on melee wea hit; +5d10 Force dmg; if this brings target HP\u226450, banished until spell ends",
	descriptionFull: "The target hit by the attack roll takes an extra 5d10 Force damage from the attack. If the attack reduces the target to 50 Hit Points or fewer, the target must succeed on a Charisma saving throw or be transported to a harmless demiplane for the duration. While there, the target has the Incapacitated condition. When the spell ends, the target reappears in the space it left or in the nearest unoccupied space if that space is occupied.",
	dynamicDamageBonus: {
		multipleDmgMoments: false,
	},
};
SpellsList["beast sense"] = {
	name: "Beast Sense",
	classes: ["druid", "ranger"],
	source: [["PHB24", 245]],
	ritual: true,
	level: 2,
	school: "Div",
	time: "Act",
	range: "Touch",
	components: "S",
	duration: "Conc, 1 h",
	description: "Use 1 willing Beast's senses as well as my own for the duration",
	descriptionFull: "You touch a willing Beast. For the duration, you can perceive through the Beast's senses as well as your own. When perceiving through the Beast's senses, you benefit from any special senses it has.",
};
SpellsList["blade ward"] = {
	name: "Blade Ward",
	classes: ["bard", "sorcerer", "warlock", "wizard"],
	source: [["PHB24", 247]],
	level: 0,
	school: "Abjur",
	time: "Act",
	range: "Self",
	components: "V,S",
	duration: "Conc, 1 min",
	description: "Creatures subtract 1d4 from attack rolls made against me for the duration",
	descriptionFull: ["Whenever a creature makes an attack roll against you before the spell ends, the attacker subtracts 1d4 from the attack roll."],
};
SpellsList["blinding smite"] = {
	name: "Blinding Smite",
	classes: ["paladin"],
	source: [["PHB24", 247]],
	level: 3,
	school: "Evoc",
	time: "Bns",
	timeFull: "Bonus Action, which you take immediately after hitting a creature with a Melee weapon or an Unarmed Strike",
	range: "Self",
	components: "V",
	duration: "1 min",
	save: "Con",
	description: "Cast on melee wea hit; +3d8+1d8/SL Radiant dmg and Blinded; save at end of its turns to stop",
	descriptionFull: [
		"The target hit by the strike takes an extra 3d8 Radiant damage from the attack, and the target has the Blinded condition until the spell ends. At the end of each of its turns, the Blinded target makes a Constitution saving throw, ending the spell on itself on a success.",
		UsingHigherLvl + "The extra damage increases by 1d8 for each spell slot level above 3.",
	],
	dynamicDamageBonus: { multipleDmgMoments: false },
};
SpellsList["circle of power"] = {
	name: "Circle of Power",
	classes: ["cleric", "paladin", "wizard"],
	source: [["PHB24", 250]],
	level: 5,
	school: "Abjur",
	time: "Act",
	range: "S:30-ft rad",
	components: "V",
	duration: "Conc, 10 min",
	description: "While in aura, me \x26 allies Adv on saves vs magical effects; if save would half dmg, we take no dmg",
	descriptionFull: "An aura radiates from you in a 30-foot Emanation for the duration. While in the aura, you and your allies have Advantage on saving throws against spells and other magical effects. When an affected creature makes a saving throw against a spell or magical effect that allows a save to take only half damage, it takes no damage if it succeeds on the save.",
};
SpellsList["cloud of daggers"] = {
	name: "Cloud of Daggers",
	classes: ["bard", "sorcerer", "warlock", "wizard"],
	source: [["PHB24", 251]],
	level: 2,
	school: "Conj",
	time: "Act",
	range: "60 ft",
	components: "V,S,M",
	compMaterial: "A sliver of glass",
	duration: "Conc, 1 min",
	description: "5-ft cube all in it on cast/enter/end 4d4+2d4/SL Slashing dmg; Act to teleport cube 30 ft",
	descriptionFull: [
		"You conjure spinning daggers in a 5-foot Cube centered on a point within range. Each creature in that area takes 4d4 Slashing damage. A creature also takes this damage if it enters the Cube or ends its turn there or if the Cube moves into its space. A creature takes this damage only once per turn.",
		"On your later turns, you can take a Magic action to teleport the Cube up to 30 feet.",
		UsingHigherLvl + "The damage increases by 2d4 for each spell slot level above 2.",
	],
};
SpellsList["compelled duel"] = {
	name: "Compelled Duel",
	classes: ["paladin"],
	source: [["PHB24", 252]],
	reqLoS: true,
	level: 1,
	school: "Ench",
	time: "Bns",
	range: "30 ft",
	components: "V",
	duration: "Conc, 1 min",
	save: "Wis",
	description: "1 crea save or Dis atk vs not-me, can't move >30ft away; ends if ally dmg, I atk other or move >30ft",
	descriptionFull: [
		"You try to compel a creature into a duel. One creature that you can see within range makes a Wisdom saving throw. On a failed save, the target has Disadvantage on attack rolls against creatures other than you, and it can't willingly move to a space that is more than 30 feet away from you.",
		"The spell ends if you make an attack roll against a creature other than the target, if you cast a spell on an enemy other than the target, if an ally of yours damages the target, or if you end your turn more than 30 feet away from the target.",
	],
};
SpellsList["conjure barrage"] = {
	name: "Conjure Barrage",
	classes: ["ranger"],
	source: [["PHB24", 254]],
	reqLoS: true,
	level: 3,
	school: "Conj",
	time: "Act",
	range: "S:60-ft cone",
	components: "V,S,M\u0192",
	compMaterial: "A Melee or Ranged weapon worth at least 1 CP",
	duration: "Instantaneous",
	save: "Dex",
	description: "Conjure more of held weapon (or its ammo); any creatures in area 5d8+1d8/SL Force dmg; save half",
	descriptionFull: [
		"You brandish the weapon used to cast the spell and conjure similar spectral weapons (or ammunition appropriate to the weapon) that launch forward and then disappear. Each creature of your choice that you can see in a 60-foot Cone makes a Dexterity saving throw, taking 5d8 Force damage on a failed save or half as much damage on a successful one.",
		UsingHigherLvl + "The damage increases by 1d8 for each spell slot level above 3.",
	],
};
SpellsList["conjure volley"] = {
	name: "Conjure Volley",
	classes: ["ranger"],
	source: [["PHB24", 255]],
	reqLoS: true,
	level: 5,
	school: "Conj",
	time: "Act",
	range: "150 ft",
	components: "V,S,M\u0192",
	compMaterial: "A Melee or Ranged weapon worth at least 1 CP",
	duration: "Instantaneous",
	save: "Dex",
	description: "Volley falls in 40-ft rad 20-ft high cylinder; any seen creatures in it take 8d8 Force dmg; save halves",
	descriptionFull: "You brandish the weapon used to cast the spell and choose a point within range. Hundreds of similar spectral weapons (or ammunition appropriate to the weapon) fall in a volley and then disappear. Each creature of your choice that you can see in a 40-foot-radius, 20-foot-high Cylinder centered on that point makes a Dexterity saving throw. A creature takes 8d8 Force damage on a failed save or half as much damage on a successful one.",
};
SpellsList["cordon of arrows"] = {
	name: "Cordon of Arrows",
	classes: ["ranger"],
	source: [["PHB24", 258]],
	level: 2,
	school: "Trans",
	time: "Act",
	range: "Touch",
	components: "V,S,M\u2020",
	compMaterial: "Four or more arrows or bolts",
	duration: "8 h",
	save: "Dex",
	description: "4+2/SL ammo in space; undesignated crea enter/end in 30 ft: 1 ammo atk, save or 2d4 Piercing dmg",
	descriptionShorter: "4+2/SL ammo; undesignated crea enter/end in 30 ft: 1 ammo atk, save or 2d4 Piercing dmg",
	descriptionFull: [
		"You touch up to four nonmagical Arrows or Bolts and plant them in the ground in your space. Until the spell ends, the ammunition can't be physically uprooted, and whenever a creature other than you enters a space within 30 feet of the ammunition for the first time on a turn or ends its turn there, one piece of ammunition flies up to strike it. The creature must succeed on a Dexterity saving throw or take 2d4 Piercing damage. The piece of ammunition is then destroyed. The spell ends when none of the ammunition remains planted in the ground.",
		"When you cast this spell, you can designate any creatures you choose, and the spell ignores them.",
		UsingHigherLvl + "The amount of ammunition that can be affected increases by two for each spell slot level above 2.",
	],
};
SpellsList["crown of madness"] = {
	name: "Crown of Madness",
	classes: ["bard", "sorcerer", "warlock", "wizard"],
	source: [["PHB24", 259]],
	reqLoS: true,
	level: 2,
	school: "Ench",
	time: "Act",
	range: "120 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	save: "Wis",
	description: "1 Humanoid save or Charmed \x26 melee atk chosen crea before move; Act to keep; repeat save turn end",
	descriptionFull: [
		"One creature that you can see within range must succeed on a Wisdom saving throw or have the Charmed condition for the duration. The creature succeeds automatically if it isn't Humanoid.",
		"A spectral crown appears on the Charmed target's head, and it must use its action before moving on each of its turns to make a melee attack against a creature other than itself that you mentally choose. The target can act normally on its turn if you choose no creature or if no creature is within its reach. The target repeats the save at the end of each of its turns, ending the spell on itself on a success.",
		"On your later turns, you must take the Magic action to maintain control of the target, or the spell ends.",
	],
};
SpellsList["crusader's mantle"] = {
	name: "Crusader's Mantle",
	classes: ["paladin"],
	source: [["PHB24", 259]],
	level: 3,
	school: "Evoc",
	time: "Act",
	range: "S:30-ft rad",
	components: "V",
	duration: "Conc, 1 min",
	description: "Allies within the aura and I deal +1d4 Radiant dmg with weapons and unarmed strikes",
	descriptionFull: "You radiate a magical aura in a 30-foot Emanation. While in the aura, you and your allies each deal an extra 1d4 Radiant damage when hitting with a weapon or an Unarmed Strike.",
};
SpellsList["destructive wave"] = {
	name: "Destructive Wave",
	classes: ["paladin"],
	source: [["PHB24", 261]],
	level: 5,
	school: "Evoc",
	time: "Act",
	range: "S:30-ft rad",
	components: "V",
	duration: "Instantaneous",
	save: "Con",
	description: "Any crea 5d6 Thunder dmg \x26 5d6 Radiant or Necrotic dmg \x26 knocked prone; save halves, not prone",
	descriptionShorter: "Any crea 5d6 Thunder dmg \x26 5d6 Radiant or Necrotic dmg \x26 prone; save half, not prone",
	descriptionFull: "Destructive energy ripples outward from you in a 30-foot Emanation. Each creature you choose in the Emanation makes a Constitution saving throw. On a failed save, a target takes 5d6 Thunder damage and 5d6 Radiant or Necrotic damage (your choice) and has the Prone condition. On a successful save, a target takes half as much damage only.",
	dynamicDamageBonus: {
		allDmgTypesSingleMoment: true,
		multipleDmgTypes: {
			dmgTypes: ["radiant", "necrotic"],
			inDescriptionAs: "Radiant or Necrotic",
		},
	},
};
SpellsList["elemental weapon"] = {
	name: "Elemental Weapon",
	classes: ["artificer", "druid", "paladin", "ranger"],
	source: [["PHB24", 267]],
	level: 3,
	school: "Trans",
	time: "Act",
	range: "Touch",
	components: "V,S",
	duration: "Conc, 1 h",
	description: "Nonmagical to +1 wea \x26 +1d4 Acid/Cold/Fire/Lightn./Thunder dmg; SL5: +2/+2d4, SL7: +3/+3d4",
	descriptionShorter: "+1 wea \x26 +1d4 Acid/Cold/Fire/Lightning/Thunder dmg; SL5: +2/+2d4, SL7: +3/+3d4",
	descriptionFull: [
		"A nonmagical weapon you touch becomes a magic weapon. Choose one of the following damage types: Acid, Cold, Fire, Lightning, or Thunder. For the duration, the weapon has a +1 bonus to attack rolls and deals an extra 1d4 damage of the chosen type when it hits.",
		UsingHigherLvl + "If you use a level 5-6 spell slot, the bonus to attack rolls increases to +2, and the extra damage increases to 2d4. If you use a level 7+ spell slot, the bonus increases to +3, and the extra damage increases to 3d4.",
	],
	dynamicDamageBonus: {
		multipleDmgTypes: {
			dmgTypes: ["acid", "cold", "fire", "lightning", "thunder"],
			inDescriptionAs: "Acid/Cold/Fire/Lightning/Thunder|Acid/Cold/Fire/Lightn\./Thunder",
		},
	},
};
SpellsList["feign death"] = {
	name: "Feign Death",
	classes: ["bard", "cleric", "druid", "wizard"],
	source: [["PHB24", 271]],
	ritual: true,
	level: 3,
	school: "Necro",
	time: "Act",
	range: "Touch",
	components: "V,S,M",
	compMaterial: "A pinch of graveyard dirt",
	duration: "1 h",
	description: "Willing crea looks dead: Blinded, Incapacitated, speed 0, resist. all dmg but Psychic, Poisoned immune",
	descriptionFull: [
		"You touch a willing creature and put it into a cataleptic state that is indistinguishable from death.",
		"For the duration, the target appears dead to outward inspection and to spells used to determine the target's status. The target has the Blinded and Incapacitated conditions, and its Speed is 0.",
		"The target also has Resistance to all damage except Psychic damage, and it has Immunity to the Poisoned condition.",
	],
};
SpellsList["fount of moonlight"] = {
	name: "Fount of Moonlight",
	classes: ["bard", "druid"],
	source: [["PHB24", 277]],
	level: 4,
	school: "Evoc",
	time: "Act",
	range: "Self",
	components: "V,S",
	duration: "Conc, 10 min",
	save: "Con",
	description: "Radiant dmg resistance; melee atk +2d6 Radiant dmg; 20-ft rad bright/20-ft dim light; Reaction below",
	descriptionShorter: "Radiant resistance; melee atk +2d6 Radiant dmg; 20-ft bright/20-ft dim light; React below",
	descriptionFull: [
		"A cool light wreathes your body for the duration, emitting Bright Light in a 20-foot radius and Dim Light for an additional 20 feet.",
		"Until the spell ends, you have Resistance to Radiant damage, and your melee attacks deal an extra 2d6 Radiant damage on a hit.",
		"In addition, immediately after you take damage from a creature you can see within 60 feet of yourself, you can take a Reaction to force the creature to make a Constitution saving throw. On a failed save, the creature has the Blinded condition until the end of your next turn.",
	],
	dependencies: ["fount of moonlight-1-reaction"],
	withoutDependencies: {
		description: "Radiant resist; melee atk +2d6 Radiant dmg; 60ft React vis. crea dmg me: save or Blind to my next EoT",
		descriptionShorter: "Radiant resist; melee atk+2d6 Radiant dmg; 60ft React vis. crea dmg me: save or Blind to EoT",
	},
};
SpellsList["fount of moonlight-1-reaction"] = {
	name: "Fount of Moonlight: Reaction",
	nameShort: "Fount of Moon: reaction", // capitalized Reacton doesn't fit
	classes: ["bard", "druid"],
	source: [["PHB24", 277]],
	reqLoS: true,
	level: 4,
	school: "Evoc",
	time: "React",
	range: "60 ft",
	components: "option",
	duration: "My next EoT",
	save: "Con",
	description: "Reaction if crea I can see within 60 ft damages me: save or Blinded until the end of my next turn",
	descriptionFull: [
		"Immediately after you take damage from a creature you can see within 60 feet of yourself, you can take a Reaction to force the creature to make a Constitution saving throw. On a failed save, the creature has the Blinded condition until the end of your next turn.",
		"This is an option of the *Fount of Moonlight* spell, see the line above for its full description.",
	],
	dynamicDamageBonus: {
		doNotProcess: true, // sheet makes mistake because "damage" comes after a numerical
	},
};
SpellsList["friends"] = {
	name: "Friends",
	classes: ["bard", "sorcerer", "warlock", "wizard"],
	source: [["PHB24", 277]],
	reqLoS: true,
	level: 0,
	school: "Ench",
	time: "Act",
	range: "10 ft",
	components: "S,M",
	compMaterial: "Some makeup",
	duration: "Conc, 1 min",
	save: "Wis",
	description: "1 humanoid save or Charmed; once/24h; ends if dmged or if I atk, dmg, force save a crea; knows after",
	descriptionFull: [
		"You magically emanate a sense of friendship toward one creature you can see within range. The target must succeed on a Wisdom saving throw or have the Charmed condition for the duration. The target succeeds automatically if it isn't a Humanoid, if you're fighting it, or if you have cast this spell on it within the past 24 hours.",
		"The spell ends early if the target takes damage or if you make an attack roll, deal damage, or force anyone to make a saving throw. When the spell ends, the target knows it was Charmed by you.",
	],
};
SpellsList["grasping vine"] = {
	name: "Grasping Vine",
	classes: ["druid", "ranger"],
	source: [["PHB24", 280]],
	reqLoS: true,
	level: 4,
	school: "Conj",
	time: "Bns",
	range: "60 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	description: "Place vine; at cast/Bns: 30 ft melee spell atk: 4d8 Bludg. dmg, pull \u226430 ft, \u2264Huge Grappled (1+1/SL)",
	descriptionShorter: "Place vine; cast/Bns: 30 ft melee spell atk: 4d8 Bludg. dmg, pull \u226430 ft, Grappled (1+1/SL)",
	descriptionFull: [
		"You conjure a vine that sprouts from a surface in an unoccupied space that you can see within range. The vine lasts for the duration.",
		"Make a melee spell attack against a creature within 30 feet of the vine. On a hit, the target takes 4d8 Bludgeoning damage and is pulled up to 30 feet toward the vine; if the target is Huge or smaller, it has the Grappled condition (escape DC equal to your spell save DC). The vine can grapple only one creature at a time, and you can cause the vine to release a Grappled creature (no action required).",
		"As a Bonus Action on your later turns, you can repeat the attack against a creature within 30 feet of the vine.",
		UsingHigherLvl + "The number of creatures the vine can grapple increases by one for each spell slot level above 4.",
	],
};
SpellsList["hail of thorns"] = {
	name: "Hail of Thorns",
	classes: ["ranger"],
	source: [["PHB24", 283]],
	level: 1,
	school: "Conj",
	time: "Bns",
	timeFull: "Bonus Action, which you take immediately after hitting a creature with a Ranged weapon",
	range: "Self",
	components: "V",
	duration: "Instantaneous",
	save: "Dex",
	description: "Cast on ranged wea hit: target and all crea in 5 ft take 1d10+1d10/SL Piercing dmg; save halves",
	descriptionFull: [
		"As you hit the creature, this spell creates a rain of thorns that sprouts from your Ranged weapon or ammunition. The target of the attack and each creature within 5 feet of it make a Dexterity saving throw, taking 1d10 Piercing damage on a failed save or half as much damage on a successful one.",
		UsingHigherLvl + "The damage increases by 1d10 for each spell slot level above 1.",
	],
};
/*
	Hunger of Hadar doesn't behave correctly with `genericSpellDmgEdit`,
	if adding a bonus that matches both damage types (Cold and Acid) and not
	restricted to a single roll. There is no setting to prevent both damage types
	getting the bonus added.,
	However, no official feature allows for adding damage to multiple rolls of a spell.
*/
SpellsList["hunger of hadar"] = {
	name: "Hunger of Hadar",
	classes: ["warlock"],
	source: [["PHB24", 286]],
	level: 3,
	school: "Conj",
	time: "Act",
	range: "150 ft",
	components: "V,S,M",
	compMaterial: "A pickled tentacle",
	duration: "Conc, 1 min",
	save: "Dex",
	description: "20-ft rad all in area Blinded; start in: 2d6 Cold dmg; end in: save or 2d6 Acid dmg; +1d6/SL one type",
	descriptionShorter: "20-ft rad all in: Blinded; start: 2d6 Cold dmg; end save or 2d6 Acid dmg; +1d6/SL one type",
	descriptionFull: [
		"You open a gateway to the Far Realm, a region infested with unspeakable horrors. A 20-foot-radius Sphere of Darkness appears, centered on a point within range and lasting for the duration. The Sphere is Difficult Terrain, and it is filled with strange whispers and slurping noises, which can be heard up to 30 feet away. No light, magical or otherwise, can illuminate the area, and creatures fully within it have the Blinded condition.",
		"Any creature that starts its turn in the area takes 2d6 Cold damage. Any creature that ends its turn there must succeed on a Dexterity saving throw or take 2d6 Acid damage from otherworldly tentacles.",
		UsingHigherLvl + "The Cold or Acid damage (your choice) increases by 1d6 for each spell slot level above 3.",
	],
};
SpellsList["jallarzi's storm of radiance"] = {
	name: "Jallarzi's Storm of Radiance",
	nameShort: "J's Storm of Radiance",
	nameAlt: "Storm of Radiance",
	classes: ["warlock", "wizard"],
	source: [["PHB24", 289]],
	reqLoS: true,
	level: 5,
	school: "Evoc",
	time: "Act",
	range: "120 ft",
	components: "V,S,M",
	compMaterial: "A pinch of phosphorus",
	duration: "Conc, 1 min",
	save: "Con",
	description: "10\xD740ft all cast/enter/end 2d10+1d10/SL Radiant \x26 again Thunder dmg; save \xBD; all in Blind \x26 Deaf",
	descriptionMetric: "3\xD712m all cast/enter/end 2d10+1d10/SL Radiant \x26 again Thunder dmg; save \xBD; all in Blind \x26 Deaf",
	descriptionShorter: "10\xD740ft all cast/enter/end 2d10+1d10/SL Radiant \x26 Thndr dmg; save \xBD; all in blind, deaf",
	descriptionShorterMetric: "3\xD712m all cast/enter/end 2d10+1d10/SL Radiant \x26 Thndr dmg; save \xBD; all in blind, deaf",
	descriptionFull: [
		"You unleash a storm of flashing light and raging thunder in a 10-foot-radius, 40-foot-high Cylinder centered on a point you can see within range. While in this area, creatures have the Blinded and Deafened conditions, and they can't cast spells with a Verbal component.",
		"When the storm appears, each creature in it makes a Constitution saving throw, taking 2d10 Radiant damage and 2d10 Thunder damage on a failed save or half as much damage on a successful one. A creature also makes this save when it enters the spell's area for the first time on a turn or ends its turn there. A creature makes this save only once per turn.",
		UsingHigherLvl + "The Radiant and Thunder damage increase by 1d10 for each spell slot level above 5.",
	],
	dynamicDamageBonus: {
		multipleDmgTypes: {
			dmgTypes: ["radiant", "thunder"],
			inDescriptionAs: "Radiant \x26 again Thunder dmg|Radiant \x26 Thndr dmg",
		},
	},
};
SpellsList["lightning arrow"] = {
	name: "Lightning Arrow",
	classes: ["ranger"],
	source: [["PHB24", 292]],
	level: 3,
	school: "Trans",
	time: "Bns",
	timeFull: "Bonus Action, which you take immediately after hitting or missing a target with a ranged attack using a weapon",
	range: "Self",
	components: "V,S",
	duration: "Instantaneous",
	save: "Dex",
	description: "After rngd wea atk: 4d8+1d8/SL Lightn. dmg, miss half; all in 10ft 2d8+1d8/SL Lightn. dmg, save \xBD",
	descriptionShorter: "Aftr rng wea atk: 4d8+1d8/SL Lightn. dmg, miss half; 10ft all 2d8+1d8/SL Lightn. dmg, save \xBD",
	descriptionFull: [
		"As your attack hits or misses the target, the weapon or ammunition you're using transforms into a lightning bolt. Instead of taking any damage or other effects from the attack, the target takes 4d8 Lightning damage on a hit or half as much damage on a miss. Each creature within 10 feet of the target then makes a Dexterity saving throw, taking 2d8 Lightning damage on a failed save or half as much damage on a successful one.",
		"The weapon or ammunition then returns to its normal form.",
		UsingHigherLvl + "The damage for both effects of the spell increases by 1d8 for each spell slot level above 3.",
	],
	dynamicDamageBonus: {
		multipleDmgMoments: false,
		skipDmgGroupIfNotMultiple: /(atk .*?lightn\. dmg.*?)/i,
	},
};
SpellsList["mind sliver"] = {
	name: "Mind Sliver",
	classes: ["sorcerer", "warlock", "wizard"],
	source: [["PHB24", 298]],
	reqLoS: true,
	level: 0,
	school: "Ench",
	time: "Act",
	range: "60 ft",
	components: "V",
	duration: "Instantaneous",
	save: "Int",
	description: "1 crea save or 1d6 Psychic dmg \x26 -1d4 on first save before my next EoT; +1d6 at CL 5, 11, \x26 17",
	descriptionCantripDie: "1 crea save or `CD`d6 Psychic dmg and -1d4 on first saving throw before my next turn ends",
	descriptionFull: [
		"You try to temporarily sliver the mind of one creature you can see within range. The target must succeed on an Intelligence saving throw or take 1d6 Psychic damage and subtract 1d4 from the next saving throw it makes before the end of your next turn.",
		CantripUpgrade + "The damage increases by 1d6 when you reach levels 5 (2d6), 11 (3d6), and 17 (4d6).",
	],
};
SpellsList["power word fortify"] = {
	name: "Power Word Fortify",
	classes: ["bard", "cleric"],
	source: [["PHB24", 306]],
	reqLoS: true,
	level: 7,
	school: "Ench",
	time: "Act",
	range: "60 ft",
	components: "V",
	duration: "Instantaneous",
	description: "Divide 120 Temporary HP equally among up to 6 visible creatures in range",
	descriptionFull: ["You fortify up to six creatures you can see within range. The spell bestows 120 Temporary Hit Points, which you divide among the spell's recipients."],
};
SpellsList["staggering smite"] = {
	name: "Staggering Smite",
	classes: ["paladin"],
	source: [["PHB24", 320]],
	level: 4,
	school: "Ench",
	time: "Bns",
	timeFull: "Bonus Action, which you take immediately after hitting a creature with a Melee weapon or an Unarmed Strike",
	range: "Self",
	components: "V",
	duration: "Instantaneous",
	save: "Wis",
	description: "Cast on melee wea hit; +4d6+1d6/SL Psychic dmg; target save or Stunned until my next EoT",
	descriptionFull: [
		"The target takes an extra 4d6 Psychic damage from the attack, and the target must succeed on a Wisdom saving throw or have the Stunned condition until the end of your next turn.",
		UsingHigherLvl + "The extra damage increases by 1d6 for each spell slot level above 4.",
	],
};
SpellsList["steel wind strike"] = {
	name: "Steel Wind Strike",
	classes: ["ranger", "wizard"],
	source: [["PHB24", 320]],
	reqLoS: true,
	level: 5,
	school: "Conj",
	time: "Act",
	range: "30 ft",
	components: "S,M\u0192",
	compMaterial: "A Melee weapon worth 1+ SP",
	duration: "Instantaneous",
	description: "Melee spell atk vs 5 visible creature for each 6d10 Force dmg; after, I teleport next to 1 target",
	descriptionFull: [
		"You flourish the weapon used in the casting and then vanish to strike like the wind. Choose up to five creatures you can see within range. Make a melee spell attack against each target. On a hit, a target takes 6d10 Force damage.",
		"You then teleport to an unoccupied space you can see within 5 feet of one of the targets.",
	],
	dynamicDamageBonus: { multipleDmgMoments: true },
};
SpellsList["summon aberration"] = {
	name: "Summon Aberration",
	classes: ["warlock", "wizard"],
	source: [["PHB24", 322]],
	reqLoS: true,
	level: 4,
	school: "Conj",
	time: "Act",
	range: "90 ft",
	components: "V,S,M\u0192",
	compMaterial: "A pickled tentacle and an eyeball in a platinum-inlaid vial worth 400+ GP",
	duration: "Conc, 1 h",
	description: "Chosen Aberrant spirit; obeys verbal commands; takes turn after mine; vanishes at 0 HP; see B (400gp)",
	descriptionFull: [
		"You call forth an aberrant spirit. It manifests in an unoccupied space that you can see within range and uses the **Aberrant Spirit** stat block. When you cast the spell, choose Beholderkin, Mind Flayer, or Slaad. The creature resembles an Aberration of that kind, which determines certain details in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.",
		"The creature is an ally to you and your allies. In combat, it shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its movement to avoid danger.",
		UsingHigherLvl + "Use the spell slot's level for the spell's level in the stat block.",
	],
};
SpellsList["summon beast"] = {
	name: "Summon Beast",
	classes: ["druid", "ranger"],
	source: [["PHB24", 322]],
	reqLoS: true,
	level: 2,
	school: "Conj",
	time: "Act",
	range: "90 ft",
	components: "V,S,M\u0192",
	compMaterial: "A feather, tuft of fur, and fish tail inside a gilded acorn worth 200+ GP",
	duration: "Conc, 1 h",
	description: "Chosen Bestial Spirit; obeys verbal commands; takes turn after mine; vanishes at 0 HP; see B (200gp)",
	descriptionFull: [
		"You call forth a bestial spirit. It manifests in an unoccupied space that you can see within range and uses the **Bestial Spirit** stat block. When you cast the spell, choose an environment: Air, Land, or Water. The creature resembles an animal of your choice that is native to the chosen environment, which determines certain details in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.",
		"The creature is an ally to you and your allies. In combat, the creature shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its movement to avoid danger.",
		UsingHigherLvl + "Use the spell slot's level for the spell's level in the stat block.",
	],
};
SpellsList["summon celestial"] = {
	name: "Summon Celestial",
	classes: ["cleric", "paladin"],
	source: [["PHB24", 323]],
	reqLoS: true,
	level: 5,
	school: "Conj",
	time: "Act",
	range: "90 ft",
	components: "V,S,M\u0192",
	compMaterial: "A reliquary worth 500+ GP",
	duration: "Conc, 1 h",
	description: "Chosen Celestial Spirit; obeys verbal commands; takes turn after mine; vanishes at 0 HP; see B (500gp)",
	descriptionFull: [
		"You call forth a Celestial spirit. It manifests in an angelic form in an unoccupied space that you can see within range and uses the **Celestial Spirit** stat block. When you cast the spell, choose Avenger or Defender. Your choice determines certain details in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.",
		"The creature is an ally to you and your allies. In combat, the creature shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its movement to avoid danger.",
		UsingHigherLvl + "Use the spell slot's level for the spell's level in the stat block.",
	],
};
SpellsList["summon construct"] = {
	name: "Summon Construct",
	classes: ["artificer", "wizard"],
	source: [["PHB24", 324]],
	reqLoS: true,
	level: 4,
	school: "Conj",
	time: "Act",
	range: "90 ft",
	components: "V,S,M\u0192",
	compMaterial: "A lockbox worth 400+ GP",
	duration: "Conc, 1 h",
	description: (typePF ? "C" : "c") + "hosen Construct " + (typePF ? "S" : "s") + "pirit; obeys verbal commands; takes turn after mine; vanishes at 0 HP; see B (400gp)",
	descriptionFull: [
		"You call forth the spirit of a Construct. It manifests in an unoccupied space that you can see within range and uses the **Construct Spirit** stat block. When you cast the spell, choose a material: Clay, Metal, or Stone. The creature resembles an animate statue (you determine the appearance) made of the chosen material, which determines certain details in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.",
		"The creature is an ally to you and your allies. In combat, the creature shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its movement to avoid danger.",
		UsingHigherLvl + "Use the spell slot's level for the spell's level in the stat block.",
	],
};
SpellsList["summon elemental"] = {
	name: "Summon Elemental",
	classes: ["druid", "ranger", "wizard"],
	source: [["PHB24", 325]],
	reqLoS: true,
	level: 4,
	school: "Conj",
	time: "Act",
	range: "90 ft",
	components: "V,S,M\u0192",
	compMaterial: "Air, a pebble, ash, and water inside a gold-inlaid vial worth 400+ GP",
	duration: "Conc, 1 h",
	description: (typePF ? "C" : "c") + "hosen Elemental " + (typePF ? "S" : "s") + "pirit; obeys verbal commands; takes turn after mine; vanishes at 0 HP; see B (400gp)",
	descriptionFull: [
		"You call forth an Elemental spirit. It manifests in an unoccupied space that you can see within range and uses the **Elemental Spirit** stat block. When you cast the spell, choose an element: Air, Earth, Fire, or Water. The creature resembles a bipedal form wreathed in the chosen element, which determines certain details in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.",
		"The creature is an ally to you and your allies. In combat, the creature shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its movement to avoid danger.",
		UsingHigherLvl + "Use the spell slot's level for the spell's level in the stat block.",
	],
};
SpellsList["summon fey"] = {
	name: "Summon Fey",
	classes: ["druid", "ranger", "warlock", "wizard"],
	source: [["PHB24", 326]],
	reqLoS: true,
	level: 3,
	school: "Conj",
	time: "Act",
	range: "90 ft",
	components: "V,S,M\u0192",
	compMaterial: "A gilded flower worth 300+ GP",
	duration: "Conc, 1 h",
	description: "Chosen Fey Spirit; obeys verbal commands; takes turn after mine; vanishes at 0 HP; see B (300gp)",
	descriptionFull: [
		"You call forth a Fey spirit. It manifests in an unoccupied space that you can see within range and uses the **Fey Spirit** stat block. When you cast the spell, choose a mood: Fuming, Mirthful, or Tricksy. The creature resembles a Fey creature of your choice marked by the chosen mood, which determines certain details in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.",
		"The creature is an ally to you and your allies. In combat, the creature shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its movement to avoid danger.",
		UsingHigherLvl + "Use the spell slot's level for the spell's level in the stat block.",
	],
};
SpellsList["summon fiend"] = {
	name: "Summon Fiend",
	classes: ["warlock", "wizard"],
	source: [["PHB24", 326]],
	reqLoS: true,
	level: 6,
	school: "Conj",
	time: "Act",
	range: "90 ft",
	components: "V,S,M\u0192",
	compMaterial: "A bloody vial worth 600+ GP",
	duration: "Conc, 1 h",
	description: "Chosen Fiend Spirit; obeys verbal commands; takes turn after mine; vanishes at 0 HP; see B (600gp)",
	descriptionFull: [
		"You call forth a fiendish spirit. It manifests in an unoccupied space that you can see within range and uses the **Fiendish Spirit** stat block. When you cast the spell, choose Demon, Devil, or Yugoloth. The creature resembles a Fiend of the chosen type, which determines certain details in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.",
		"The creature is an ally to you and your allies. In combat, the creature shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its movement to avoid danger.",
		UsingHigherLvl + "Use the spell slot's level for the spell's level in the stat block.",
	],
};
SpellsList["summon undead"] = {
	name: "Summon Undead",
	classes: ["warlock", "wizard"],
	source: [["PHB24", 328]],
	reqLoS: true,
	level: 3,
	school: "Necro",
	time: "Act",
	range: "90 ft",
	components: "V,S,M\u0192",
	compMaterial: "A gilded skull worth 300+ GP",
	duration: "Conc, 1 h",
	description: "Chosen Undead Spirit; obeys verbal commands; takes turn after mine; vanishes at 0 HP; see B (300gp)",
	descriptionFull: [
		"You call forth an Undead spirit. It manifests in an unoccupied space that you can see within range and uses the **Undead Spirit** stat block. When you cast the spell, choose the creature's form: Ghostly, Putrid, or Skeletal. The spirit resembles an Undead creature with the chosen form, which determines certain details in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.",
		"The creature is an ally to you and your allies. In combat, the creature shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its movement to avoid danger.",
		UsingHigherLvl + "Use the spell slot's level for the spell's level in the stat block.",
	],
};
SpellsList["swift quiver"] = {
	name: "Swift Quiver",
	classes: ["ranger"],
	source: [["PHB24", 329]],
	level: 5,
	school: "Trans",
	time: "Bns",
	range: "Self",
	components: "V,S,M\u0192",
	compMaterial: "A Quiver worth 1+ GP",
	duration: "Conc, 1 min",
	description: "At cast \x26 Bns after: attack twice with weapon that uses arrows or bolts; spell creates nonmagical ammo",
	descriptionFull: "When you cast the spell and as a Bonus Action until it ends, you can make two attacks with a weapon that fires Arrows or Bolts, such as a Longbow or a Light Crossbow. The spell magically creates the ammunition needed for each attack. Each Arrow or Bolt created by the spell deals damage like a nonmagical piece of ammunition of its kind and disintegrates immediately after it hits or misses.",
};
SpellsList["synaptic static"] = {
	name: "Synaptic Static",
	classes: ["bard", "sorcerer", "warlock", "wizard"],
	source: [["PHB24", 330]],
	level: 5,
	school: "Ench",
	time: "Act",
	range: "120 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: "Int",
	description: "20-ft rad all save or 8d6 Psychic dmg, 1 min -1d6 on atk/chk/conc save; save half only; redo save EoT",
	descriptionShorter: "20ft rad all save or 8d6+1d8 Psychic dmg, 1 min -1d6 to atks/check/conc save; save \xBD only; EoT save",
	descriptionFull: [
		"You cause psychic energy to erupt at a point within range. Each creature in a 20-foot-radius Sphere centered on that point makes an Intelligence saving throw, taking 8d6 Psychic damage on a failed save or half as much damage on a successful one.",
		"On a failed save, a target also has muddled thoughts for 1 minute. During that time, it subtracts 1d6 from all its attack rolls and ability checks, as well as any Constitution saving throws to maintain Concentration. The target makes an Intelligence saving throw at the end of each of its turns, ending the effect on itself on a success.",
	],
};
SpellsList["tasha's bubbling cauldron"] = {
	name: "Tasha's Bubbling Cauldron",
	nameAlt: "Bubbling Cauldron",
	nameShort: "T's Bubbling Cauldron",
	classes: ["warlock", "wizard"],
	source: [["PHB24", 330]],
	level: 6,
	school: "Conj",
	time: "Act",
	range: "5 ft",
	components: "V,S,M\u0192",
	compMaterial: "A gilded ladle worth 500+ GP",
	duration: "10 min",
	description: "Conjure immobile pot with spell mod of (un)common potion; Bns to take 1, lasting till recast (500 gp)",
	descriptionFull: [
		"You conjure a claw-footed cauldron filled with bubbling liquid. The cauldron appears in an unoccupied space on the ground within 5 feet of you and lasts for the duration. The cauldron can't be moved and disappears when the spell ends, along with the bubbling liquid inside it.",
		"The liquid in the cauldron duplicates the properties of a Common or an Uncommon potion of your choice (such as a *Potion of Healing*). As a Bonus Action, you or an ally can reach into the cauldron and withdraw one potion of that kind. The potion is contained in a vial that disappears when the potion is consumed. The cauldron can produce a number of these potions equal to your spellcasting ability modifier (minimum 1). When the last of these potions is withdrawn from the cauldron, the cauldron disappears, and the spell ends.",
		"Potions obtained from the cauldron that aren't consumed disappear when you cast this spell again.",
	],
};
SpellsList["telepathy"] = {
	name: "Telepathy",
	classes: ["wizard"],
	source: [["PHB24", 331]],
	level: 8,
	school: "Div",
	time: "Act",
	range: "Unlimited",
	components: "V,S,M",
	compMaterial: "A pair of linked silver rings",
	duration: "24 h",
	description: "1 familiar willing crea \x26 I telepathic link; share \x26 understand words, images, sounds and sensory info",
	descriptionFull: [
		"You create a telepathic link between yourself and a willing creature with which you are familiar. The creature can be anywhere on the same plane of existence as you. The spell ends if you or the target are no longer on the same plane.",
		"Until the spell ends, you and the target can instantly share words, images, sounds, and other sensory messages with each other through the link, and the target recognizes you as the creature it is communicating with. The spell enables a creature to understand the meaning of your words and any sensory messages you send to it.",
	],
};
SpellsList["thorn whip"] = {
	name: "Thorn Whip",
	classes: ["artificer", "druid"],
	source: [["PHB24", 333]],
	level: 0,
	school: "Trans",
	time: "Act",
	range: "30 ft",
	components: "V,S,M",
	compMaterial: "The stem of a plant with thorns",
	duration: "Instantaneous",
	description: "Melee spell atk for 1d6 Piercing dmg \x26 can pull \u2264Large crea up to 10 ft closer; +1d6 at CL 5, 11, \x26 17",
	descriptionShorter: "Melee spell atk for 1d6 Piercing dmg \x26 pull \u2264Large crea up to 10 ft closer; +1d6 at CL 5, 11, 17",
	descriptionCantripDie: "Melee spell atk for `CD`d6 Piercing dmg and can pull up to Large crea up to 10 ft closer",
	descriptionFull: [
		"You create a vine-like whip covered in thorns that lashes out at your command toward a creature in range. Make a melee spell attack against the target. On a hit, the target takes 1d6 Piercing damage, and if it is Large or smaller, you can pull it up to 10 feet closer to you.",
		CantripUpgrade + "The damage increases by 1d6 when you reach levels 5 (2d6), 11 (3d6), and 17 (4d6).",
	],
};
SpellsList["thunderclap"] = {
	name: "Thunderclap",
	classes: ["artificer", "bard", "druid", "sorcerer", "warlock", "wizard"],
	source: [["PHB24", 333]],
	level: 0,
	school: "Evoc",
	time: "Act",
	range: "S:5-ft rad",
	components: "S",
	duration: "Instantaneous",
	save: "Con",
	description: "All creatures but me save or 1d6 Thunder dmg; 100-ft rad audible; +1d6 at CL 5, 11, and 17",
	descriptionCantripDie: "All creatures but me save or `CD`d6 Thunder dmg; 100-ft rad audible",
	descriptionFull: [
		"Each creature in a 5-foot Emanation originating from you must succeed on a Constitution saving throw or take 1d6 Thunder damage. The spell's thunderous sound can be heard up to 100 feet away.",
		CantripUpgrade + "The damage increases by 1d6 when you reach levels 5 (2d6), 11 (3d6), and 17 (4d6).",
	],
};
SpellsList["thunderous smite"] = {
	name: "Thunderous Smite",
	classes: ["paladin"],
	source: [["PHB24", 334]],
	level: 1,
	school: "Evoc",
	time: "Bns",
	timeFull: "Bonus Action, which you take immediately after hitting a target with a Melee weapon or an Unarmed Strike",
	range: "Self",
	components: "V",
	duration: "Instantaneous",
	save: "Str",
	description: "Cast on melee wea hit; +2d6+1d6/SL Thunder dmg; save or 10 ft push \x26 Prone; audible in 300" + (typePF ? " " : "") + "ft",
	descriptionFull: [
		"Your strike rings with thunder that is audible within 300 feet of you, and the target takes an extra 2d6 Thunder damage from the attack. Additionally, if the target is a creature, it must succeed on a Strength saving throw or be pushed 10 feet away from you and have the Prone condition.",
		UsingHigherLvl + "The damage increases by 1d6 for each spell slot level above 1.",
	],
};
SpellsList["toll the dead"] = {
	name: "Toll the Dead",
	classes: ["cleric", "warlock", "wizard"],
	source: [["PHB24", 334]],
	reqLoS: true,
	level: 0,
	school: "Necro",
	time: "Act",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: "Wis",
	description: "1 crea save or 1d12 Necrotic dmg (d8 if full HP); bell audible in 10 ft; +1d12/1d8 at CL 5, 11, \x26 17",
	descriptionShorter: "1 crea save or 1d12 Necrotic dmg (d8 not d12 if full HP); bell audible 10ft; +1d at CL 5, 11, 17",
	descriptionCantripDie: "1 crea save or `CD`d12 Necrotic damage (d8 not d12 if at full HP); bell audible in 10 ft",
	descriptionFull: [
		"You point at one creature you can see within range, and the single chime of a dolorous bell is audible within 10 feet of the target. The target must succeed on a Wisdom saving throw or take 1d8 Necrotic damage. If the target is missing any of its Hit Points, it instead takes 1d12 Necrotic damage.",
		CantripUpgrade + "The damage increases by one die when you reach levels 5 (2d8 or 2d12), 11 (3d8 or 3d12), and 17 (4d8 or 4d12).",
	],
};
SpellsList["witch bolt"] = {
	name: "Witch Bolt",
	classes: ["sorcerer", "warlock", "wizard"],
	source: [["PHB24", 343]],
	level: 1,
	school: "Evoc",
	time: "Act",
	range: "60 ft",
	components: "V,S,M",
	compMaterial: "A twig struck by lightning",
	duration: "Conc, 1 min",
	description: "Rngd atk 2d12+1d12/SL Lightn. dmg; rnds after: Bns 1d12 Lightn. dmg; end: out of range/total cover",
	descriptionShorter: "Rngd atk 2d12+1d12/SL Lightn. dmg; Bns 1d12 Lightn. dmg; end: out of range/total cover",
	descriptionFull: [
		"A beam of crackling energy lances toward a creature within range, forming a sustained arc of lightning between you and the target. Make a ranged spell attack against it. On a hit, the target takes 2d12 Lightning damage.",
		"On each of your subsequent turns, you can take a Bonus Action to deal 1d12 Lightning damage to the target automatically, even if the first attack missed.",
		"The spell ends if the target is ever outside the spell's range or if it has Total Cover from you.",
		UsingHigherLvl + "The initial damage increases by 1d12 for each spell slot level above 1.",
	],
	dynamicDamageBonus: {
		multipleDmgMoments: false,
		extraDmgGroupsSameType: /(Bns )(.*?)( Lightn. dmg)/i, // WERKT DIT???
	},
};
SpellsList["word of radiance"] = {
	name: "Word of Radiance",
	classes: ["cleric"],
	source: [["PHB24", 343]],
	reqLoS: true,
	level: 0,
	school: "Evoc",
	time: "Act",
	range: "S:5-ft rad",
	components: "V,M",
	compMaterial: "A sunburst token",
	duration: "Instantaneous",
	save: "Con",
	description: "Any creature save or 1d6 Radiant damage; +1d6 at CL 5, 11, and 17",
	descriptionCantripDie: "Any creature save or `CD`d6 Radiant damage",
	descriptionFull: [
		"Burning radiance erupts from you in a 5-foot Emanation. Each creature of your choice that you can see in it must succeed on a Constitution saving throw or take 1d6 Radiant damage.",
		CantripUpgrade + "The damage increases by 1d6 when you reach levels 5 (2d6), 11 (3d6), and 17 (4d6).",
	],
};
SpellsList["wrathful smite"] = {
	name: "Wrathful Smite",
	classes: ["paladin"],
	source: [["PHB24", 343]],
	level: 1,
	school: "Necro",
	time: "Bns",
	timeFull: "Bonus Action, which you take immediately after hitting a creature with a Melee weapon or an Unarmed Strike",
	range: "Self",
	components: "V",
	duration: "1 min",
	save: "Wis",
	description: "Cast on melee wea hit; +1d6 Necrotic dmg and save or Frightened; repeat save EoT to end",
	descriptionFull: [
		"The target takes an extra 1d6 Necrotic damage from the attack, and it must succeed on a Wisdom saving throw or have the Frightened condition until the spell ends. At the end of each of its turns, the Frightened target repeats the save, ending the spell on itself on a success.",
		UsingHigherLvl + "The damage increases by 1d6 for each spell slot level above 1.",
	],
};
SpellsList["yolande's regal presence"] = {
	name: "Yolande's Regal Presence",
	nameShort: "Y's Regal Presence",
	classes: ["bard", "wizard"],
	source: [["PHB24", 343]],
	reqLoS: true,
	level: 5,
	school: "Ench",
	time: "Act",
	range: "S:10-ft rad",
	components: "V,S,M",
	compMaterial: "A miniature tiara",
	duration: "Conc, 1 min",
	save: "Wis",
	description: "Any crea cast/enter/end 4d6 Psychic dmg, Prone, and can push it up to 10 ft away; save half dmg only",
	descriptionShorter: "Any crea cast/enter/end 4d6 Psychic dmg, Prone, can push it up to 10 ft; save half dmg only",
	descriptionFull: "You surround yourself with unearthly majesty in a 10-foot Emanation. Whenever the Emanation enters the space of a creature you can see and whenever a creature you can see enters the Emanation or ends its turn there, you can force that creature to make a Wisdom saving throw. On a failed save, the target takes 4d6 Psychic damage and has the Prone condition, and you can push it up to 10 feet away. On a successful save, the target takes half as much damage only. A creature makes this save only once per turn.",
};

/** Create the Aberrant Sorcerer's "Psionic Spells" feature description
 * This can only be done after all the spells have been defined
 */
(function () {
	var subclass = ClassSubList[PHB_AberrantSorcerer];
	var extraSpells = subclass.features.subclassfeature3.spellcastingExtra;
	var feature = subclass.features.subclassfeature3["psionic spells"];
	feature.description = levels.map(function (n) {
		var maxSpellLvl = Math.min(9, Math.ceil(n / 2));
		var spells = extraSpells.filter(function (spell) {
			return SpellsList[spell] && SpellsList[spell].level <= maxSpellLvl;
		}).map(function (spell) {
			return "*" + SpellsList[spell].name + "*";
		});
		return desc(formatLineList("I know the following spells:", spells) + ".");
	});
})();

// pub_20241112_DMG.js
// This file adds material from the 2024 Dungeon Master's Guide that isn't in the SRD v5.2.1 to MPMB's Character Record Sheet for 5.5e

SourceList["DMG24"] = {
	name: "2024 Dungeon Master's Guide",
	abbreviation: "DMG'24",
	group: "Primary Sources",
	url: "https://marketplace.dndbeyond.com/core-rules/3710000",
	date: "2024/11/12",
};

// Supernatural Gifts
// Supernatural Gifts - Blessings
FeatsList["blessing of magic resistance"] = {
	name: "Blessing of Magic Resistance",
	source: [["DMG24", 98]],
	type: "supernatural gift (blessing)",
	description: "I have Advantage on saving throws against spells and other magical effects.",
	descriptionFull: "You have Advantage on saving throws against spells and other magical effects.",
	savetxt: { adv_vs: ["spells", "magical effects"] },
};
FeatsList["blessing of health"] = {
	name: "Blessing of Health",
	source: [["DMG24", 98]],
	type: "supernatural gift (blessing)",
	description: "My Constitution score increases by 2, up to a maximum of 22.",
	descriptionFull: "Your Constitution score increases by 2, up to a maximum of 22.",
	scores: [0, 0, 2, 0, 0, 0],
	scoresMaxLimited: [0, 0, 22, 0, 0, 0],
};
FeatsList["blessing of protection"] = {
	name: "Blessing of Protection",
	source: [["DMG24", 99]],
	type: "supernatural gift (blessing)",
	description: "I gain a +1 bonus to AC and saving throws.",
	descriptionFull: "You gain a +1 bonus to AC and saving throws.",
	extraAC: { mod: 1, misc: true },
	addMod: [{
		type: "save",
		field: "all",
		mod: 1,
		text: "I gain a +1 bonus to saving throws.",
	}],
};
FeatsList["blessing of understanding"] = {
	name: "Blessing of Understanding",
	source: [["DMG24", 99]],
	type: "supernatural gift (blessing)",
	description: "My Wisdom score increases by 2, up to a maximum of 22.",
	descriptionFull: "Your Wisdom score increases by 2, up to a maximum of 22.",
	scores: [0, 0, 0, 0, 2, 0],
	scoresMaxLimited: [0, 0, 0, 0, 22, 0],
};
FeatsList["blessing of valhalla"] = {
	name: "Blessing of Valhalla",
	source: [["DMG24", 99]],
	type: "supernatural gift (blessing)",
	description: "As a Magic action once every 7 days, I can blow this horn to summon 2 warrior spirits within 60 ft of me. They are **Berserkers** and disappear after 1 hour, or when they drop to 0 HP. They are Friendly to me and my allies and follow my commands. See Companion page.",
	descriptionFull: "This Blessing grants you the power to summon spirit warriors, as if you are blowing a silver *Horn of Valhalla*. Once you use this Blessing, you can't use it again until 7 days have passed.",
	usages: 1,
	recovery: "7 days",
	creaturesAdd: [["Warrior Spirit", true]],
	creatureOptions: [Object.assign(
		{},
		MagicItemsList["horn of valhalla"].creatureOptions[0],
		{
			eval: function (prefix) {
				Value(prefix + "Comp.Desc.Name", "Blessing of Valhalla's Warrior Spirit");
				Value(prefix + "Comp.Type", "Summon");
				Value(prefix + "Comp.Use.Attack.1.Weapon Selection", "Greataxe");
			},
		}
	)],
};
FeatsList["blessing of weapon enhancement"] = {
	name: "Blessing of Weapon Enhancement",
	source: [["DMG24", 99]],
	type: "supernatural gift (blessing)",
	description: 'One nonmagical weapon in my possession becomes a +1 Weapon while I wield it. Add "+1" to the name of a weapon on the first page to have the automation apply this benefit.',
	descriptionFull: "One nonmagical weapon in your possession becomes a *+1 Weapon* while you wield it.",
};
FeatsList["blessing of wound closure"] = {
	name: "Blessing of Wound Closure",
	source: [["DMG24", 99]],
	type: "supernatural gift (blessing)",
	description: [
		"This Blessing functions as a *Periapt of Wound Closure*" + (typePF ? "." : ", which give me the following benefits."),
		"***Life Preservation***. Whenever I make a Death Saving Throw, I can change a roll of 9 or less to a 10, turning a failure into a success. ***Natural Healing Boost***. Whenever I roll a Hit Point Die to regain Hit Points, I double the number of Hit Points it restores.",
	],
	descriptionFull: "This Blessing grants you the benefits of a *Periapt of Wound Closure*.",
};
// Supernatural Gifts - Charms
var DMG24_CharmSpellChanges = {
	components: "",
	compMaterial: "Spells cast from a Charm require no spell components.",
	changes: "If a Charm lets a character cast a spell, the character can do so without expending a spell slot or providing any spell components.",
};
FeatsList["charm of animal conjuring"] = {
	name: "Charm of Animal Conjuring",
	source: [["DMG24", 99]],
	type: "supernatural gift (charm)",
	description: "This Charm allows me to cast *Conjure Animals*. Once used three times, the Charm vanishes from me.",
	descriptionFull: "This Charm allows you to cast *Conjure Animals*. Once used three times, the Charm vanishes from you.",
	usages: 3,
	recovery: "\u2013",
	spellFirstColTitle: "Ch",
	allowUpCasting: false,
	spellcastingBonus: [{
		name: "3 times",
		spells: ["conjure animals"],
		selection: ["conjure animals"],
		firstCol: 1,
	}],
	spellChanges: {
		"conjure animals": DMG24_CharmSpellChanges,
	},
};
FeatsList["charm of darkvision"] = {
	name: "Charm of Darkvision",
	source: [["DMG24", 99]],
	type: "supernatural gift (charm)",
	description: "This Charm allows me to cast *Darkvision*. Once used three times, the Charm vanishes from me.",
	descriptionFull: "This Charm allows you to cast *Darkvision*. Once used three times, the Charm vanishes from you.",
	usages: 3,
	recovery: "\u2013",
	spellFirstColTitle: "Ch",
	spellcastingBonus: [{
		name: "3 times",
		spells: ["darkvision"],
		selection: ["darkvision"],
		firstCol: 1,
	}],
	spellChanges: {
		"darkvision": DMG24_CharmSpellChanges,
	},
};
FeatsList["charm of feather falling"] = {
	name: "Charm of Feather Falling",
	source: [["DMG24", 99]],
	type: "supernatural gift (charm)",
	description: "This Charm grants me the benefits of a *Ring of Feather Falling*. These benefits last for 10 days, after which the Charm vanishes from me. When I fall while having this charm, I descend 60 ft per round and take no damage from falling.",
	descriptionFull: "This Charm grants you the benefits of a *Ring of Feather Falling*. These benefits last for 10 days, after which the Charm vanishes from you.",
};
FeatsList["charm of heroism"] = {
	name: "Charm of Heroism",
	source: [["DMG24", 99]],
	type: "supernatural gift (charm)",
	description: "As a Magic action, I can use this Charm to gain 10 Temporary Hit Points that last for 1 hour. For the same duration, I'm under the effect of the *Bless* spell (no Concentration required). *Bless* allows me to add +1d4 on all my attack rolls and saving throws. Once I use it, the Charm vanishes from me.",
	descriptionFull: "This Charm allows you to give yourself the benefit of a *Potion of Heroism* as a Magic action. Once you do so, the Charm vanishes from you.",
	action: [["action", ""]],
};
FeatsList["charm of restoration"] = {
	name: "Charm of Restoration",
	source: [["DMG24", 99]],
	type: "supernatural gift (charm)",
	description: "This Charm has 3 charges. I can expend some of its charges to cast one of the following spells: *Greater Restoration* (2 charges) or *Lesser Restoration* (1 charge). Once all its charges have been expended, the Charm vanishes from me.",
	descriptionFull: "This Charm has 3 charges. You can expend some of its charges to cast one of the following spells: *Greater Restoration* (2 charges) or *Lesser Restoration* (1 charge). Once all its charges have been expended, the Charm vanishes from you.",
	usages: 3,
	recovery: "\u2013",
	spellFirstColTitle: "Ch",
	spellcastingBonus: [{
		name: "1 charge",
		spells: ["lesser restoration"],
		selection: ["lesser restoration"],
		firstCol: 1,
	}, {
		name: "2 charges",
		spells: ["greater restoration"],
		selection: ["greater restoration"],
		firstCol: 2,
	}],
	spellChanges: {
		"lesser restoration": DMG24_CharmSpellChanges,
		"greater restoration": DMG24_CharmSpellChanges,
	},
};
FeatsList["charm of the slayer"] = {
	name: "Charm of the Slayer",
	source: [["DMG24", 99]],
	type: "supernatural gift (charm)",
	description: "Select one of the choices.",
	descriptionFull: "One weapon in your possession becomes a *Dragon Slayer* or *Giant Slayer* (DM's choice) for the next 9 days. The Charm then vanishes from you, and the weapon returns to normal.",
	allowDuplicates: true,
	choices: ["Dragon Slayer", "Giant Slayer"],
	"dragon slayer": {
		name: "Charm of the Dragon Slayer",
		description: "One weapon in my possession becomes a *Dragon Slayer* for the next 9 days. The Charm then vanishes, and the weapon reverts back. I gain a +1 bonus to attack and damage rolls made with a *Dragon Slayer* weapon. The weapon deals an extra 3d6 damage of the weapon's type if the target is a Dragon.",
		calcChanges: MagicItemsList["dragon slayer"].calcChanges,
	},
	"giant slayer": {
		name: "Charm of the Giant Slayer",
		description: "One of my weapons becomes a *Giant Slayer* for the next 9 days. The Charm then vanishes, and the weapon reverts back. The weapon gain a +1 bonus to attack and damage. When I hit a Giant with it, the Giant takes +2d6 damage of the weapon's type and must make a DC 15 Strength save or be knocked Prone.",
		calcChanges: MagicItemsList["giant slayer"].calcChanges,
	},
};
FeatsList["charm of vitality"] = {
	source: [["DMG24", 99]],
	type: "supernatural gift (charm)",
	name: "Charm of Vitality",
	description: "As a Magic action, I can activate this Charm to remove any Exhaustion levels I have and the Poisoned condition from me. For the next 24 hours, I regain the maximum number of Hit Points for any Hit Point Die spend. Once I activate it, the Charm vanishes from me.",
	descriptionFull: "This Charm allows you to give yourself the benefit of a *Potion of Vitality* as a Magic action. Once you do so, the Charm vanishes from you.",
};
// Supernatural Gifts - Bastion Charms
FeatsList["arcane study charm"] = {
	name: "Charm from Arcane Study",
	sortname: "Arcane Study Charm",
	source: [["DMG24", 336]],
	type: "supernatural gift (charm)",
	description: "After spending a Long Rest in my Bastion with an Arcane Study, I gain a magical Charm that lasts for 7 days or until I use it. The Charm allows me to cast *Identify* without expending a spell slot or using Material components. I can't gain this Charm again while I still have it.",
	descriptionFull: "After spending a Long Rest in your Bastion with an Arcane Study, you gain a magical Charm that lasts for 7 days or until you use it. The Charm allows you to cast *Identify* without expending a spell slot or using Material components. You can't gain this Charm again while you still have it.",
	spellFirstColTitle: "Us",
	spellcastingBonus: [{
		name: "One-time use",
		spells: ["identify"],
		selection: ["identify"],
		firstCol: "checkbox",
	}],
	spellChanges: {
		"identify": DMG24_CharmSpellChanges,
	},
};
FeatsList["observatory charm"] = {
	name: "Charm from Observatory",
	sortname: "Observatory Charm",
	source: [["DMG24", 343]],
	type: "supernatural gift (charm)",
	description: "After spending a Long Rest in my Observatory in my Bastion, I gain a magical Charm that lasts for 7 days or until I use it. The Charm allows me to cast *Contact Other Plane* without expending a spell slot. I can't gain this Charm again while I still have it.",
	descriptionFull: "You can use your Observatory to peer into the far corners of Wildspace and the Astral Plane. After spending a Long Rest in your Observatory in your Bastion, you gain a magical Charm that lasts for 7 days or until you use it. The Charm allows you to cast *Contact Other Plane* without expending a spell slot. You can't gain this Charm again while you still have it.",
	spellFirstColTitle: "Us",
	spellcastingBonus: [{
		name: "One-time use",
		spells: ["contact other plane"],
		selection: ["contact other plane"],
		firstCol: "checkbox",
	}],
	spellChanges: {
		"contact other plane": DMG24_CharmSpellChanges,
	},
};
FeatsList["reliquary charm"] = {
	name: "Charm from Reliquary",
	sortname: "Reliquary Charm",
	source: [["DMG24", 344]],
	type: "supernatural gift (charm)",
	description: "After spending a Long Rest in my Bastion with a Reliquary, I gain a magical Charm that lasts for 7 days or until I use it. The Charm allows me to cast *Greater Restoration* once without expending a spell slot or using Material components. I can't gain this Charm again while I still have it.",
	descriptionFull: "After spending a Long Rest in your Bastion with a Reliquary, you gain a magical Charm that lasts for 7 days or until you use it. The Charm allows you to cast *Greater Restoration* once without expending a spell slot or using Material components. You can't gain this Charm again while you still have it.",
	spellFirstColTitle: "Us",
	spellcastingBonus: [{
		name: "One-time use",
		spells: ["greater restoration"],
		selection: ["greater restoration"],
		firstCol: "checkbox",
	}],
	spellChanges: {
		"greater restoration": DMG24_CharmSpellChanges,
	},
};
FeatsList["sanctuary charm"] = {
	name: "Charm from Sanctuary",
	sortname: "Sanctuary Charm",
	source: [["DMG24", 345]],
	type: "supernatural gift (charm)",
	description: "After spending a Long Rest in my Bastion with a Sanctuary, I gain a magical Charm that lasts for 7 days or until I use it. The Charm allows me to cast *Healing Word* once without expending a spell slot. I can't gain this Charm again while I still have it.",
	descriptionFull: "After spending a Long Rest in your Bastion with a Sanctuary, you gain a magical Charm that lasts for 7 days or until you use it. The Charm allows you to cast *Healing Word* once without expending a spell slot. You can't gain this Charm again while you still have it.",
	spellFirstColTitle: "Us",
	allowUpCasting: false,
	spellcastingBonus: [{
		name: "One-time use",
		spells: ["healing word"],
		selection: ["healing word"],
		firstCol: "checkbox",
	}],
	spellChanges: {
		"healing word": DMG24_CharmSpellChanges,
	},
};
FeatsList["sanctum charm"] = {
	name: "Charm from Sanctum",
	sortname: "Sanctum Charm",
	source: [["DMG24", 346]],
	type: "supernatural gift (charm)",
	description: "After spending a Long Rest in my Bastion with a Sanctum, I gain a magical Charm that lasts for 7 days or until I use it. The Charm allows me to cast *Heal* once without expending a spell slot. I can't gain this Charm again while I still have it.",
	descriptionFull: "After spending a Long Rest in your Bastion with a Sanctum, you gain a magical Charm that lasts for 7 days or until you use it. The Charm allows you to cast *Heal* once without expending a spell slot. You can't gain this Charm again while you still have it.",
	spellFirstColTitle: "Us",
	allowUpCasting: false,
	spellcastingBonus: [{
		name: "One-time use",
		spells: ["heal"],
		selection: ["heal"],
		firstCol: "checkbox",
	}],
	spellChanges: {
		"heal": DMG24_CharmSpellChanges,
	},
};

// Magic Items
MagicItemsList["adamantine ammunition"] = {
	name: "Adamantine Ammunition",
	nameTest: /adamantine.+(ammunition|ammo|\u180B)/i,
	source: [["DMG24", 227]],
	type: "Weapon (Any Ammunition)",
	rarity: "Uncommon",
	magicItemTable: "Armaments",
	description: "This ammunition is made of adamantine, one of the hardest substances in existence. Whenever I hit an object with it, the hit is a Critical Hit.",
	descriptionFull: "This piece of ammunition is made of adamantine, one of the hardest substances in existence. Whenever this piece of ammunition hits an object, the hit is a Critical Hit.",
	allowDuplicates: true,
	chooseGear: {
		type: "ammo",
		prefixOrSuffix: ["between", "Adamantine", "\u180B"],
		itemName1stPage: ["suffix", "Adamantine"],
		descriptionChange: ["replace", "ammunition"],
		excludeCheck: function (inObjKey, inObj) {
			return /vials|flasks/i.test(inObj.icon);
		},
		removePluralS: true,
	},
};
MagicItemsList["adamantine weapon"] = {
	name: "Adamantine Weapon",
	nameTest: /adamantine.+(weapon|\uFEFF)/i,
	source: [["DMG24", 227]],
	type: "Weapon (Any Melee)",
	rarity: "Uncommon",
	magicItemTable: "Armaments",
	description: "This weapon is made of adamantine, one of the hardest substances in existence. Whenever I hit an object with it, the hit is a Critical Hit.",
	descriptionFull: "This weapon is made of adamantine, one of the hardest substances in existence. Whenever this weapon hits an object, the hit is a Critical Hit.",
	allowDuplicates: true,
	chooseGear: {
		type: "weapon",
		prefixOrSuffix: ["between", "Adamantine", "\uFEFF"],
		itemName1stPage: ["suffix", "Adamantine"],
		descriptionChange: ["replace", "weapon"],
		excludeCheck: function (inObjKey, inObj, v) {
			return !v.isMeleeWeapon;
		},
	},
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (v.isMeleeWeapon && /adamantine/i.test(v.WeaponTextName)) {
					fields.Description += (fields.Description ? "; " : "") + "Auto-Crit on objects";
				}
			},
			'If I include the word "Adamantine" in the name of a melee weapon, it will be treated as the magic item Adamantine Weapon. Whenever it hits an object, it automatically scores a Critical Hit.',
		],
	},
};
MagicItemsList["alchemy jug"] = {
	name: "Alchemy Jug",
	source: [["DMG24", 227]],
	type: "Wondrous Item",
	rarity: "Uncommon",
	magicItemTable: "Implements",
	description: "As a Magic action, command the jug to produce liquid; or Utilize action to uncork and pour 2 gal/min. It only makes one liquid up to its max amount, until the next dawn. Oil (1 qt), acid (8 fl oz), basic poison (1/2 fl oz), beer (4 gal), honey/wine (1 gal), fresh water (8 gal), mayonnaise/vinegar (2 gal), salt water (12 gal).",
	descriptionLong: [
		"A heavy ceramic jug. As a Magic action, the jug can be commanded to hold a chosen liquid. With a Utilize action, I can uncork the jug and pour the liquid out at 2 gallons per minute. Once commanded to produce a liquid, it can't produce a different one or more than the maximum of one, until the next dawn.",
		"Liquids (with maximum): acid (8 fl oz), basic poison (1/2 fl oz), beer (4 gallons), honey (1 gallon), mayonnaise (2 gallons), oil (1 quart), vinegar (2 gallons), fresh water (8 gallons), salt water (12 gallons), wine (1 gallon).",
	],
	descriptionFull: [
		"This ceramic jug appears to be able to hold a gallon of liquid and weighs 12 pounds whether full or empty. The jug sloshes when it is shaken, even if the jug is empty.",
		"You can take a Magic action and name one liquid from the Alchemy Jug Liquids table to cause the jug to produce the chosen liquid. Afterward, you can uncork the jug as a Utilize action and pour that liquid out, up to 2 gallons per minute. The maximum amount of liquid the jug can produce depends on the liquid you named.",
		"Once the jug starts producing a liquid, it can't produce a different one, or more of one that has reached its maximum, until the next dawn.",
		[
			["Liquid", "Max. Amount"],
			["Acid", "8 ounces"],
			["Basic Poison", "4 ounces"],
			["Beer", "4 gallons"],
			["Honey", "1 gallon"],
			["Mayonnaise", "2 gallons"],
			["Oil", "1 quart"],
			["Vinegar", "2 gallons"],
			["Water, fresh", "8 gallons"],
			["Water, salt", "12 gallons"],
			["Wine", "1 gallon"],
		],
	],
	weight: 12,
};
MagicItemsList["armor of gleaming"] = {
	name: "Armor of Gleaming",
	nameTest: "of Gleaming \u180C",
	source: [["DMG24", 230]],
	type: "Armor (Any Light, Medium, or Heavy)",
	rarity: "Common",
	description: "This armor never gets dirty.",
	descriptionFull: "This armor never gets dirty.",
	allowDuplicates: true,
	chooseGear: {
		type: "armor",
		prefixOrSuffix: "prefix",
		descriptionChange: ["replace", "armor"],
	},
};
MagicItemsList["baba yaga's dancing broom"] = {
	name: "Baba Yaga's Dancing Broom",
	source: [["DMG24", 232]],
	type: "Wondrous Item",
	rarity: "Uncommon",
	magicItemTable: "Arcana",
	attunement: true,
	description: "As a Magic action, I can transform this broom into an **Animated Broom**. I can mentally command the broom if I'm in 30 ft and not Incapacitated (no action). It acts after me on my Initiative. As a Bonus Action, I can render the broom inanimate, restoring all of its HP. If it is reduced to 0 HP while animated, it is destroyed.",
	descriptionFull: [
		"The archfey Baba Yaga crafted many of these magic brooms. No two appear exactly alike. While holding the broom, you can take a Magic action to transform it into an **Animated Broom** under your control. The broom then moves into an unoccupied space as close to you as possible. The broom acts immediately after you on your Initiative count and remains animate until you take a Bonus Action and use a command word to render it inanimate.",
		"On your turn, you can mentally command the animated broom if it is within 30 feet of you and you don't have the Incapacitated condition (no action required). You decide what action the broom takes and where it moves during its next turn, or you can issue it a general command, such as to attack your enemies or guard a location.",
		"If the broom is reduced to 0 Hit Points, it shatters and is destroyed. If the broom reverts to its inanimate form before losing all its Hit Points it regains all of them.",
	],
	action: [["action", " (animate)"], ["action", " (stop)"]],
	creaturesAdd: [["Animated Broom", true, function (AddRemove, prefix) {
		var obj = MagicItemsList["baba yaga's dancing broom"];
		if (!AddRemove || !obj) return;
		// Set type
		Value(prefix + "Comp.Type", "Magic Item");
		// Set name
		var name = obj.name;
		Value(prefix + "Comp.Desc.Name", name);
		// Feature text
		var featureAddition = "##\u25C6 Owner##. The broom obeys the mental commands of its owner, which they can give while within 30 ft and not Incapacitated. The broom takes its turn immediately after its owner's on their Initiative count. If the broom is reduced to 0 HP, it is destroyed. Its owner can render the broom inanimate as a Bonus Action.";
		// Note text - full magic item description
		var source = stringSource(obj, "first,abbr");
		var description = formatDescriptionFull(obj.descriptionFull, true);
		description = ConvertToFirstPerson(description).replace("after I", "after me");
		var noteAddition = "#\u25C6 " + name + "# (" + source + ")\n" + description;
		// Metric conversion if necessary
		if (What("Unit System") === "metric") {
			featureAddition = ConvertToMetric(featureAddition, 0.5);
			noteAddition = ConvertToMetric(noteAddition, 0.5);
		}
		// Add feature and note to the sheet
		AddString(prefix + "Comp.Use.Features", featureAddition, true);
		AddString(prefix + "Cnote.Left", noteAddition, true);
	}]],
};
MagicItemsList["bead of refreshment"] = {
	name: "Bead of Refreshment",
	source: [["DMG24", 235]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: ["Arcana", "Implements"],
	description: "I can dissolve this flavorless, gelatinous bead in a liquid, transforming it into up to a pint of fresh, cold drinking water. The bead has no effect on magical liquids or harmful substances such as poison. This item can only be used once.",
	descriptionFull: "This flavorless, gelatinous bead dissolves in liquid, transforming up to a pint of the liquid into fresh, cold drinking water. The bead has no effect on magical liquids or harmful substances such as poison.",
};
MagicItemsList["blackrazor"] = {
	name: "Blackrazor",
	source: [["DMG24", 236]],
	type: "Weapon (Greatsword)",
	rarity: "Artifact",
	attunement: true,
	description: "This sentient +3 Greatsword gives me 30 ft Blindsight and makes me immune to being Charmed or Frightened. Once per dawn it can cast *Haste* on me as it sees fit. If I use it to bring a creature to 0 HP, it devours the creature's soul, granting me Temporary HP equal to the slain creature's max HP. See Notes page.",
	descriptionFull: [
		"Hidden in the dungeon of White Plume Mountain, *Blackrazor* shines like a piece of night sky filled with stars. Its black scabbard is decorated with pieces of cut obsidian.",
		'You gain a +3 bonus to attack rolls and damage rolls made with this magic weapon. If you hit an Undead with this weapon, you take 1d10 Necrotic damage, and the target regains 1d10 Hit Points. If this Necrotic damage reduces you to 0 Hit Points, *Blackrazor* devours your soul (see "Devour Soul" below).',
		"While you hold this weapon, you have Immunity to the Charmed and Frightened conditions, and you have Blindsight with a range of 30 feet.",
		"***Devour Soul***. Whenever you use *Blackrazor* to reduce a creature to 0 Hit Points, the sword slays the creature and devours its soul unless it is a Construct or an Undead. A creature whose soul has been devoured by *Blackrazor* can be restored to life only by a *Wish* spell.",
		"When *Blackrazor* devours a soul that isn't yours, you gain Temporary Hit Points equal to the slain creature's Hit Point maximum.",
		"***Haste***. *Blackrazor* can cast *Haste* on you, after which it can't cast this spell again until the next dawn. *Blackrazor* decides when to cast the spell, which takes effect at the start of your turn. The spell lasts for 1 minute (no Concentration required) or until *Blackrazor* decides to end it, which it can do at the end of any of your turns.",
		"***Sentience***. *Blackrazor* is a sentient Chaotic Neutral weapon with an Intelligence of 17, a Wisdom of 10, and a Charisma of 19. It has hearing and Darkvision out to 120 feet.",
		"The weapon speaks Common and can communicate with its wielder telepathically. Its voice is deep and echoing. While you are attuned to it, *Blackrazor* also understands every language you know.",
		"***Personality***. *Blackrazor* speaks with an imperious tone, as though accustomed to being obeyed.",
		"The sword's purpose is to consume souls. It doesn't care whose souls it eats, including the wielder's. The sword believes that all matter and energy sprang from a void of negative energy and will one day return to it. *Blackrazor* is meant to hurry that process along.",
		"Despite its nihilism, *Blackrazor* feels a strange kinship to *Wave* and *Whelm*, two other weapons locked away under White Plume Mountain. It wants the three weapons to be reunited and wielded together in combat, even though it violently disagrees with *Whelm* and finds *Wave* tedious.",
		"*Blackrazor*'s hunger for souls must be regularly fed. If the sword goes 3 days or more without consuming a soul, a conflict between it and its wielder occurs at the next sunset.",
		"***Destroying Blackrazor***. *Blackrazor* can be destroyed by crushing it in the great gears of Mechanus. Primus, the creator of the modrons, also knows a series of musical tones that *Blackrazor* can't stand to hear, causing the sword to shatter.",
	],
	weight: 6,
	weaponOptions: [{
		baseWeapon: "greatsword",
		regExpSearch: /blackrazor/i,
		name: "Blackrazor",
		source: [["DMG24", 236]],
		description: "Heavy, two-handed; Devours soul; Heals undead",
		modifiers: [3, 3],
		selectNow: true,
	}],
	toNotesPage: [
		{
			name: "Blackrazor",
			useDescriptionFull: function (str) {
				return str.replace("magic weapon", "magic Greatsword").replace("reduces I", "reduces me");
			},
		},
		Object.assign({}, sentientItemConflictNote, { amendTo: "Blackrazor" }),
	],
	savetxt: { immune: ["charmed", "frightened"] },
	vision: [["Blindsight", 30]],
	spellcastingBonus: [{
		name: "Once per dawn",
		spells: ["haste"],
		selection: ["haste"],
		firstCol: "onceday",
	}],
	spellChanges: {
		"haste": {
			range: "Self",
			duration: "1 min",
			description: "I get +2 AC, speed \xD72, Adv on Dex saves, extra Act: Atk (1 only), Dash, Disengage, Hide, or Utilize",
			changes: "*Blackrazor* casts the spell on me, so it doesn't require my Concentration, but *Blackrazor* can stop the spell at any time.",
		},
	},
};
MagicItemsList["boots of false tracks"] = {
	name: "Boots of False Tracks",
	source: [["DMG24", 239]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: "Implements",
	attunement: true,
	description: "While wearing these boots, I can have them leave tracks like those of any kind of Humanoid of my size.",
	descriptionFull: "While wearing these boots, you can have them leave tracks like those of any kind of Humanoid of your size.",
};
MagicItemsList["candle of the deep"] = {
	name: "Candle of the Deep",
	source: [["DMG24", 242]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: ["Arcana", "Implements"],
	description: "The flame of this candle is not extinguished when immersed in water. It gives off light and heat like a normal candle.",
	descriptionFull: "The flame of this candle isn't extinguished when immersed in water. It gives off light and heat like a normal candle.",
};
MagicItemsList["cap of water breathing"] = {
	name: "Cap of Water Breathing",
	source: [["DMG24", 242]],
	type: "Wondrous Item",
	rarity: "Uncommon",
	magicItemTable: ["Arcana", "Implements"],
	description: "As a Magic action while wearing this cap underwater, I can create a bubble of air around my head. This bubble allows me to breathe normally underwater. This bubble stays with me until the cap is removed or I am no longer underwater.",
	descriptionFull: "While wearing this cap underwater, you can take a Magic action to create a bubble of air around your head. This bubble allows you to breathe normally underwater. This bubble stays with you until the cap is removed or you are no longer underwater.",
	action: [["action", ""]],
};
MagicItemsList["cast-off armor"] = {
	name: "Cast-Off Armor",
	nameTest: /cast-off.+(armou?r|\u180C)/i,
	source: [["DMG24", 243]],
	type: "Armor (Any Light, Medium, or Heavy)",
	rarity: "Common",
	magicItemTable: "Armaments",
	description: "As a Magic action, I can doff this armor.",
	descriptionFull: "You can doff this armor as a Magic action.",
	allowDuplicates: true,
	chooseGear: {
		type: "armor",
		prefixOrSuffix: ["between", "Cast-Off", "\u180C"],
		itemName1stPage: ["suffix", "Cast-Off"],
		descriptionChange: ["replace", "armor"],
	},
	action: [["action", ""]],
};
MagicItemsList["cauldron of rebirth"] = {
	name: "Cauldron of Rebirth",
	source: [["DMG24", 243]],
	type: "Wondrous Item",
	rarity: "Very Rare",
	magicItemTable: ["Arcana", "Relics"],
	attunement: true,
	prerequisite: "Requires Attunement by a Druid or Warlock",
	prereqeval: function (v) {
		return !!(classes.known.druid || classes.known.warlock);
	},
	description: "After a Long Rest, I can use this Tiny pot to create a *Potion of Greater Healing* that lasts for 24 hours. As a Magic action, I can have the pot grow to fit a Medium creature, or return to its original size. Once every 7 days, I can place a dead Humanoid in the pot with 200 lb of salt (10 GP) for 8 hours to *Raise Dead*.",
	descriptionLong: "I can use this Tiny pot as a Spellcasting Focus for my spells and it functions as a suitable component for the *Scrying* spell. When I finish a Long Rest, I can use the cauldron to create a *Potion of Greater Healing* that lasts for 24 hours. As a Magic action, I can have the pot grow to fit a Medium creature, or return to its original size. I can place a dead Humanoid in the pot with 200 lb of salt (10 GP) for 8 hours to return the creature to life as if by *Raise Dead* at the next dawn. Once used, this property can't be used again for 7 days.",
	descriptionFull: [
		"This Tiny pot bears relief scenes of heroes on its cast-iron sides.",
		"You can use the cauldron as a Spellcasting Focus for your spells, and it functions as a suitable component for the *Scrying* spell.",
		"***Brew Potion***. When you finish a Long Rest, you can use the cauldron to create a *Potion of Healing* (greater), which takes 1 minute. The potion lasts for 24 hours, then loses its magic if not consumed.",
		"***Raise Dead***. As a Magic action, you can cause the cauldron to grow large enough for a Medium creature to crouch within. You can revert the cauldron to its normal size as a Magic action, harmlessly shunting anything that can't fit inside to the nearest unoccupied space.",
		"If you place the corpse of a Humanoid into the cauldron and cover the corpse with 200 pounds of salt (which costs 10 GP) for at least 8 hours, the salt is consumed and the creature returns to life as if by *Raise Dead* at the next dawn. Once used, this property can't be used again for 7 days.",
	],
	weight: 10, // as iron pot
	action: [["action", " (grow/shrink)"]],
	usages: 1,
	recovery: "7 days",
	additional: "Raise Dead",
	spellcastingBonus: [{
		name: "Cauldron of Rebirth",
		spells: ["raise dead"],
		selection: ["raise dead"],
	}],
};
MagicItemsList["charlatan's die"] = {
	name: "Charlatan's Die",
	source: [["DMG24", 243]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: "Implements",
	attunement: true,
	description: "Whenever I roll this six-sided die, I can control which number it rolls.",
	descriptionFull: "Whenever you roll this six-sided die, you can control which number it rolls.",
};
MagicItemsList["cloak of billowing"] = {
	name: "Cloak of Billowing",
	source: [["DMG24", 244]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: "Arcana",
	description: "As a Bonus Action while wearing this cloak, I can make it billow dramatically for 1 minute.",
	descriptionFull: "While wearing this cloak, you can take a Bonus Action to make it billow dramatically for 1 minute.",
	action: [["bonus action", ""]],
};
MagicItemsList["cloak of many fashions"] = {
	name: "Cloak of Many Fashions",
	source: [["DMG24", 245]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: ["Arcana", "Implements"],
	description: "As a Bonus Action while wearing this cloak, I can change the style, color, and apparent quality of the garment. Regardless of its appearance, the cloak's weight doesn't change and it can't be anything but a cloak. Although it can duplicate the appearance of other magic cloaks, it doesn't gain their magical properties.",
	descriptionFull: "While wearing this cloak, you can take a Bonus Action to change the style, color, and apparent quality of the garment. The cloak's weight doesn't change. Regardless of its appearance, the cloak can't be anything but a cloak. Although it can duplicate the appearance of other magic cloaks, it doesn't gain their magical properties.",
	action: [["bonus action", ""]],
};
MagicItemsList["clockwork amulet"] = {
	name: "Clockwork Amulet",
	source: [["DMG24", 245]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: "Implements",
	description: "When I make an attack roll while wearing the amulet, I can forgo rolling the d20 to get a 10 on the die. Once used, I can't do so again until the next dawn. This copper amulet contains tiny interlocking gears and is powered by magic from Mechanus. Faint ticking and whirring noises emanate from within.",
	descriptionFull: [
		"This copper amulet contains tiny interlocking gears and is powered by magic from Mechanus, a plane of clockwork predictability. Faint ticking and whirring noises emanate from within.",
		"When you make an attack roll while wearing the amulet, you can forgo rolling the d20 to get a 10 on the die. Once used, this property can't be used again until the next dawn.",
	],
	usages: 1,
	recovery: "Dawn",
};
MagicItemsList["clothes of mending"] = {
	name: "Clothes of Mending",
	source: [["DMG24", 245]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: "Arcana",
	description: "This elegant outfit magically mends itself to counteract daily wear and tear. Pieces of the outfit that are destroyed can't be repaired in this way.",
	descriptionFull: "This elegant outfit magically mends itself to counteract daily wear and tear. Pieces of the outfit that are destroyed can't be repaired in this way.",
	weight: 4,
};
MagicItemsList["cube of summoning"] = {
	name: "Cube of Summoning",
	source: [["DMG24", 247]],
	type: "Wondrous Item",
	rarity: "Rare",
	magicItemTable: "Arcana",
	description: "As a Magic action once per dawn, I can crank the handle of this Tiny cube to cast a random *Summon* spell at level 5 (save DC 17, +9 attack bonus) without requiring Concentration. The creature appears in a the nearest unoccupied space. See the Notes page to determine which *Summon* spell is cast.",
	descriptionFull: [
		"This Tiny cube looks like a jack-in-the-box. When you wind its crank as a Magic action, a merry tune emits from the box, the lid pops open, a creature appears in the nearest unoccupied space, and the lid closes. The lid can't otherwise be opened.",
		"Roll on the table below to determine which spell the cube casts to summon the creature. The spell is cast at level 5 (save DC 17, +9 attack bonus) and doesn't require Concentration, but you otherwise function as the spell's caster.",
		"Once the cube summons a creature, the cube can't do so again until the next dawn.",
		[
			["1d6", "Spell"],
			["  1", "*Summon Aberration*"],
			["  2", "*Summon Beast*"],
			["  3", "*Summon Construct*"],
			["  4", "*Summon Dragon*"],
			["  5", "*Summon Elemental*"],
			["  6", "*Summon Fey*"],
		],
	],
	usages: 1,
	recovery: "Dawn",
	fixedDC: 17,
	spellFirstColTitle: "d6",
	spellcastingBonus: [{
		name: "d6 result: 1",
		spells: ["summon aberration"],
		selection: ["summon aberration"],
		firstCol: 1,
	}, {
		name: "d6 result: 2",
		spells: ["summon beast"],
		selection: ["summon beast"],
		firstCol: 2,
	}, {
		name: "d6 result: 3",
		spells: ["summon construct"],
		selection: ["summon construct"],
		firstCol: 3,
	}, {
		name: "d6 result: 4",
		spells: ["summon dragon"],
		selection: ["summon dragon"],
		firstCol: 4,
	}, {
		name: "d6 result: 5",
		spells: ["summon elemental"],
		selection: ["summon elemental"],
		firstCol: 5,
	}, {
		name: "d6 result: 6",
		spells: ["summon fey"],
		selection: ["summon fey"],
		firstCol: 6,
	}],
	spellChanges: {
		"summon aberration": {
			description: "Chosen Aberrant Spirit; SL 5; obeys verbal commands; takes turn after mine; vanishes at 0 HP; see B",
			changes: "Cast at level 5.",
		},
		"summon beast": {
			description: "Chosen Bestial Spirit; SL 5; obeys verbal commands; takes turn after mine; vanishes at 0 HP; see B",
			changes: "Cast at level 5.",
		},
		"summon construct": {
			description: "Chosen Construct Spirit; SL 5; obeys verbal commands; takes turn after mine; vanishes at 0 HP; see B",
			changes: "Cast at level 5.",
		},
		"summon elemental": {
			description: "Chosen Elemental Spirit; SL 5; obeys verbal commands; takes turn after mine; vanishes at 0 HP; see B",
			changes: "Cast at level 5.",
		},
		"summon fey": {
			description: "Chosen Fey Spirit; SL 5; obeys verbal commands; takes turn after mine; vanishes at 0 HP; see B",
			changes: "Cast at level 5.",
		},
	},
	toNotesPage: [{
		name: "Cube of Summoning",
		useDescriptionFull: true,
	}],
};
MagicItemsList["dark shard amulet"] = {
	name: "Dark Shard Amulet",
	source: [["DMG24", 248]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: "Arcana",
	attunement: true,
	prerequisite: "Requires Attunement by a Warlock",
	prereqeval: function (v) {
		return !!classes.known.warlock;
	},
	description: "I can use this otherworldly amulet as a Spellcasting Focus for my Warlock spells. As a Magic action once per Long Rest, I can use it to attempt to cast a Warlock cantrip with a casting time of an action that I don't know. To do so, I must make a DC 10 Arcana check. If I fail, I waste the use of the property and my action.",
	descriptionFull: [
		"This amulet is fashioned from a shard of resilient material originating from an otherworldly realm. While you are wearing it, you gain the following benefits.",
		"***Spellcasting Focus***. You can use the amulet as a Spellcasting Focus for your Warlock spells.",
		"***Unknown Spell***. As a Magic action, you can try to cast a cantrip that you don't know. The cantrip must be on the Warlock spell list and have a casting time of an action, and you make a DC 10 Intelligence (Arcana) check. On a successful check, you cast the spell. On a failed check, the spell fails, and the action used to cast it is wasted. In either case, you can't use this property again until you finish a Long Rest.",
	],
	weight: 1,
	usages: 1,
	recovery: "Long Rest",
	spellcastingAbility: "warlock",
	spellFirstColTitle: "",
	spellcastingPreparedCantrips: { "class": "warlock" },
	allowUpCasting: true,
	spellcastingBonus: [{
		name: 'Enable "Prepare cantrips"',
		spells: [],
	}],
	calcChanges: {
		spellList: [function (spList, spName, spType) {
			if (spName.indexOf("dark shard amulet") !== -1) {
				var allWizardCantrips = CreateSpellList({ "class": "warlock", level: [0, 0] });

				// Remove spells that do not have a casting time of an action
				var actionWizardCantrips = allWizardCantrips.filter(function (spellName) {
					return /\bAct(ion)?|1 a(ct)?/i.test(SpellsList[spellName].time);
				});

				var allSpellsKnown = [];
				for (var sCast in CurrentSpells) {
					if (sCast.refType === "item") continue;
					var oCast = CurrentSpells[sCast];
					if (oCast.selectCa) allSpellsKnown = allSpellsKnown.concat(oCast.selectCa);
					if (oCast.selectBo) allSpellsKnown = allSpellsKnown.concat(oCast.selectBo);
				};
				var knownCantrips = OrderSpells(allSpellsKnown, "single", false, false, 0);

				// Remove the already known cantrips, from any source except magic items
				var cantripsToAdd = actionWizardCantrips.filter(function (spellName){
					return knownCantrips.indexOf(spellName) === -1;
				});

				spList.spells = (spList.spells || []).concat(cantripsToAdd);
			};
		}],
		spellAdd: [function (spellKey, spellObj, spName, isDuplicate) {
			if (spName.indexOf("dark shard amulet") !== -1) {
				spellObj.firstCol = "";
			};
		}],
	},
};
MagicItemsList["dread helm"] = {
	name: "Dread Helm",
	source: [["DMG24", 254]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: "Armaments",
	description: "While I'm wearing this fearsome steel helm, my eyes glow red and the rest of my face is hidden in shadow.",
	descriptionFull: "While you're wearing this fearsome steel helm, your eyes glow red and the rest of your face is hidden in shadow.",
	weight: 1,
};
MagicItemsList["driftglobe"] = { // This item is worded poorly considering its original at https://web.archive.org/web/20160123065749/http://archive.wizards.com/dnd/article.asp?x=fr/fx20030129rt
	name: "Driftglobe",
	source: [["DMG24", 254]],
	type: "Wondrous Item",
	rarity: "Uncommon",
	magicItemTable: ["Arcana", "Implements"],
	description: "I can command this glass sphere to emit light equivalent to the *Light* spell or, once per dawn, the *Daylight* spell. As a Magic action while the orb is illuminated, I can command it to float 5 ft off the ground and follow 60 ft behind me. When grasped, it stops floating. If it can't move, it drops and the light winks out.",
	descriptionLong: "If I am within 60 ft of this small sphere of thick glass, I can command it to emanate light equivalent to that of the *Light* or *Daylight* spell (my choice). Once used, the *Daylight* effect can't be used again until the next dawn. As a Magic action while the orb is illuminated, I can command it to rise into the air and float no more than 5 ft off the ground until someone grasps it. If I move more than 60 ft from the hovering globe, it follows me until it is within 60 ft of me. It takes the shortest route to do so. If prevented from moving, the globe sinks gently to the ground and becomes inactive, and its light winks out.",
	descriptionFull: [
		"This small sphere of thick glass weighs 1 pound. If you are within 60 feet of it, you can command it to emanate light equivalent to that of the *Light* or *Daylight* spell (your choice). Once used, the *Daylight* effect can't be used again until the next dawn.",
		"You can issue another command as a Magic action to make the illuminated globe rise into the air and float no more than 5 feet off the ground. The globe hovers in this way until you or another creature grasps it. If you move more than 60 feet from the hovering globe, it follows you until it is within 60 feet of you. It takes the shortest route to do so. If prevented from moving, the globe sinks gently to the ground and becomes inactive, and its light winks out.",
	],
	weight: 1,
	action: [["action", ""]],
	usages: 1,
	recovery: "Dawn",
	additional: "Daylight",
	spellcastingBonus: [{
		name: "At Will on Driftglobe",
		spells: ["light"],
		selection: ["light"],
		firstCol: "atwill",
	}, {
		name: "1/Day on Driftglobe",
		spells: ["daylight"],
		selection: ["daylight"],
		firstCol: "onceday",
	}],
	spellChanges: {
		"light": {
			time: "",
			range: "Driftglobe",
			description: "Driftglobe sheds Bright Light in a 20-ft radius and Dim Light for an additional 20-ft radius",
			changes: "The spell can only affect the *Driftglobe*.",
		},
		"daylight": {
			time: "",
			range: "Driftglobe",
			description: "Driftglobe sheds 60-ft rad Bright sunlight \x26 60-ft rad Dim Light; dispels magical darkness of SL \u22643",
			changes: "The spell can only affect the *Driftglobe*.",
		},
	},
};
MagicItemsList["ear horn of hearing"] = {
	name: "Ear Horn of Hearing",
	source: [["DMG24", 256]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: ["Implements", "Relics"],
	description: "While held up to my ear, this horn suppresses the effects of the Deafened condition on me.",
	descriptionFull: "While held up to your ear, this horn suppresses the effects of the Deafened condition on you.",
	weight: 1,
};
MagicItemsList["efreeti chain"] = {
	name: "Efreeti Chain",
	source: [["DMG24", 257]],
	type: "Armor (Chain Mail or Chain Shirt)",
	rarity: "Legendary",
	magicItemTable: "Armaments",
	attunement: true,
	description: "Select one of the choices.",
	descriptionFull: "While wearing this armor, you gain a +3 bonus to Armor Class, you have Immunity to Fire damage, and you know Primordial. In addition, you can stand on and move across molten rock as if it were solid ground.",
	languageProfs: ["Primordial"],
	savetxt: { immune: ["Fire"] },
	choicesNotInMenu: true,
	allowDuplicates: true,
	choices: ["Chain Shirt", "Chain Mail"],
	"chain shirt": {
		name: "Efreeti Chain Shirt",
		description: "While wearing this chain shirt, I gain a +3 bonus to Armor Class, have Immunity to Fire damage, and know Primordial. In addition, I can stand on and move across molten rock as if it were solid ground.",
		weight: 20,
		armorOptions: [{
			regExpSearch: /^(?=.*efreeti)(?=.*chain)(?=.*shirt).*$/i,
			name: "Efreeti Chain Shirt",
			source: [["DMG24", 257]],
			type: "medium",
			ac: "13+3",
			weight: 20,
			selectNow: true,
		}],
	},
	"chain mail": {
		name: "Efreeti Chain Mail",
		description: "While wearing this chain mail, I gain a +3 bonus to Armor Class, have Immunity to Fire damage, and know Primordial. In addition, I can stand on and move across molten rock as if it were solid ground.",
		weight: 55,
		armorOptions: [{
			regExpSearch: /^(?!.*(scale|plate|ring|shirt))(?=.*efreeti)(?=.*chain)(?=.*mail).*$/i,
			name: "Efreeti Chain Mail",
			source: [["DMG24", 257]],
			type: "heavy",
			ac: "16+3",
			stealthdis: true,
			weight: 55,
			strReq: 13,
			selectNow: true,
		}],
	},
};
MagicItemsList["enduring spellbook"] = {
	name: "Enduring Spellbook",
	source: [["DMG24", 257]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: "Arcana",
	description: "This spellbook, along with anything written on its pages, can't be damaged by fire or water. In addition, the spellbook doesn't deteriorate with age.",
	descriptionFull: "This spellbook, along with anything written on its pages, can't be damaged by fire or water. In addition, the spellbook doesn't deteriorate with age.",
	weight: 3,
};
var DMG24_EnspelledItems = { // For Enspelled Armor, Staff, and Weapon
	descriptionFullTable: [
		["Spell",     "",           "", "Save",   "Attack"],
		["**Level**", "**Rarity**", "", "**DC**", "**Bonus**"],
		["Cantrip",   "Uncommon  ",     "13",      " +5"],
		["   1   ",   "Uncommon  ",     "13",      " +5"],
		["   2   ",   "Rare",       "", "13",      " +5"],
		["   3   ",   "Rare",       "", "15",      " +7"],
		["   4   ",   "Very rare     ", "15",      " +7"],
		["   5   ",   "Very rare     ", "17",      " +9"],
		["   6   ",   "Legendary     ", "17",      " +9"],
		["   7   ",   "Legendary     ", "18",      "+10"],
		["   8   ",   "Legendary     ", "18",      "+10"],
	],
	choicesEntries: [
		{ level: 0, saveDC: 13, attackBonus: 5, rarity: "Uncommon" },
		{ level: 1, saveDC: 13, attackBonus: 5, rarity: "Uncommon" },
		{ level: 2, saveDC: 13, attackBonus: 5, rarity: "Rare" },
		{ level: 3, saveDC: 15, attackBonus: 7, rarity: "Rare" },
		{ level: 4, saveDC: 15, attackBonus: 7, rarity: "Very Rare" },
		{ level: 5, saveDC: 17, attackBonus: 9, rarity: "Very Rare" },
		{ level: 6, saveDC: 17, attackBonus: 9, rarity: "Legendary" },
		{ level: 7, saveDC: 18, attackBonus: 10, rarity: "Legendary" },
		{ level: 8, saveDC: 18, attackBonus: 10, rarity: "Legendary" },
	].map(function (entry) {
		if (entry.level === 0) {
			return Object.assign(entry, {
				name: "Cantrip",
				spellCantrip: "cantrip",
				keyName: "Cantrip (Uncommon)",
				spellString: "cantrip",
				limitedFeatureName: "cantrip",
				nameTestPart: "cantrip|0.{1,3}level|level 0",
			});
		} else {
			entry.name = "Level " + entry.level;
			return Object.assign(entry, {
				spellCantrip: "spell",
				keyName: entry.name + " (" + entry.rarity + ")",
				spellString: "level " + entry.level + " spell",
				limitedFeatureName: "lvl " + entry.level,
				nameTestPart: entry.level + ".{1,3}level|level " + entry.level,
			});
		}
	}),
};
MagicItemsList["enspelled armor"] = function (){
	var obj = {
		name: "Enspelled Armor",
		source: [["DMG24", 258]],
		type: "Armor (Any Light, Medium, or Heavy)",
		magicItemTable: ["Armaments"],
		attunement: true,
		description: "Select one of the choices.",
		descriptionFull: [
			"Bound into this armor is a spell of level 8 or lower. The spell is determined when the armor is created and must belong to the Abjuration or Illusion school of magic. The armor has 6 charges and regains 1d6 expended charges daily at dawn. While wearing the armor, you can expend 1 charge to cast its spell.",
			"The level of the spell bound into the armor determines the spell's saving throw DC and attack bonus, as well as the armor's rarity, as shown in the following table.",
			DMG24_EnspelledItems.descriptionFullTable,
		],
		allowDuplicates: true,
		choicesNotInMenu: true,
		choices: [],
	};
	DMG24_EnspelledItems.choicesEntries.forEach(function (entry) {
		obj.choices.push(entry.keyName);
		obj[entry.keyName.toLowerCase()] = {
			name: "Enspelled Armor (" + entry.name + ")",
			nameTest: RegExp("^(?=.*enspelled)(?=.*(" + entry.nameTestPart + "))(?=.*\\u180C).*$", "i"),
			rarity: entry.rarity,
			description: "Bound to this armor is a " + entry.spellString + " from the Abjuration or Illusion school of magic. The armor has 6 charges and regains 1d6 expended charges daily at dawn. While wearing the armor, I can expend 1 charge to cast its " + entry.spellCantrip + ". The " + entry.spellCantrip + "'s saving throw DC is " + entry.saveDC + ", and its attack bonus is +" + entry.attackBonus + ".",
			extraLimitedFeatures: [{
				name: "Enspelled Armor: " + entry.limitedFeatureName,
				usages: 6,
				recovery: "Dawn",
				additional: "regains d6",
			}],
			fixedDC: entry.saveDC,
			spellFirstColTitle: "Ch",
			allowUpCasting: entry.level === 0 ? true : undefined,
			spellcastingBonus: [{
				name: entry.level === 0 ? "Abjuration or Illusion cantrip" : "level " + entry.level + " Abjuration or Illusion",
				level: [entry.level, entry.level],
				school: ["Abjur", "Illus"],
				firstCol: 1,
			}],
			allowDuplicates: true,
			chooseGear: {
				type: "armor",
				prefixOrSuffix: ["between", "Enspelled", "(" + entry.name + ") \u180C"],
				itemName1stPage: ["suffix", "Enspelled"],
				descriptionChange: ["replace", "armor"],
			},
		};
	});
	return obj;
}();
MagicItemsList["enspelled staff"] = function (){
	var obj = {
		name: "Enspelled Staff",
		source: [["DMG24", 258]],
		type: "Staff",
		magicItemTable: ["Arcana", "Relics"],
		attunement: true,
		prerequisite: "Requires Attunement by a Spellcaster",
		prereqeval: function (v) { return v.isSpellcaster; },
		description: "Select one of the choices.",
		descriptionFull: [
			"Bound into this staff is a spell of level 8 or lower. The spell is determined when the staff is created and can be of any school of magic. The staff has 6 charges and regains 1d6 expended charges daily at dawn. While holding the staff, you can expend 1 charge to cast its spell. If you expend the staff's last charge, roll 1d20. On a 1, the staff loses its properties and becomes a nonmagical Quarterstaff.",
			"The level of the spell bound into the staff determines the spell's saving throw DC and attack bonus, as well as the staff's rarity, as shown in the following table.",
			DMG24_EnspelledItems.descriptionFullTable,
		],
		allowDuplicates: true,
		choicesNotInMenu: true,
		choices: [],
	};
	DMG24_EnspelledItems.choicesEntries.forEach(function (entry) {
		obj.choices.push(entry.keyName);
		obj[entry.keyName.toLowerCase()] = {
			name: "Enspelled Staff (" + entry.name + ")",
			nameTest: RegExp("^(?=.*enspelled)(?=.*staff)(?=.*(" + entry.nameTestPart + ")).*$", "i"),
			rarity: entry.rarity,
			description: "Bound to this staff is a " + entry.spellString + ". It has 6 charges and regains 1d6 expended charges daily at dawn. While holding the staff, I can expend 1 charge to cast its " + entry.spellCantrip + ". The " + entry.spellCantrip + "'s saving throw DC is " + entry.saveDC + ", and its attack bonus is +" + entry.attackBonus + ". If I expend the last charge, I roll 1d20. On a 1, the staff becomes a nonmagical Quarterstaff.",
			extraLimitedFeatures: [{
				name: "Enspelled Staff: " + entry.limitedFeatureName,
				usages: 6,
				recovery: "Dawn",
				additional: "regains d6",
			}],
			fixedDC: entry.saveDC,
			spellFirstColTitle: "Ch",
			allowUpCasting: entry.level === 0 ? true : undefined,
			spellcastingBonus: [{
				name: entry.spellString,
				level: [entry.level, entry.level],
				firstCol: 1,
			}],
			allowDuplicates: true,
		};
	});
	return obj;
}();
MagicItemsList["enspelled weapon"] = function (){
	var obj = {
		name: "Enspelled Weapon",
		source: [["DMG24", 258]],
		type: "Weapon (Any Simple or Martial)",
		magicItemTable: ["Armaments", "Implements"],
		attunement: true,
		description: "Select one of the choices.",
		descriptionFull: [
			"Bound into this weapon is a spell of level 8 or lower. The spell is determined when the weapon is created and must belong to the Conjuration, Divination, Evocation, Necromancy, or Transmutation school of magic. The weapon has 6 charges and regains 1d6 expended charges daily at dawn. While holding the weapon, you can expend 1 charge to cast its spell.",
			"The level of the spell bound into the weapon determines the spell's saving throw DC and attack bonus, as well as the weapon's rarity, as shown in the following table.",
			DMG24_EnspelledItems.descriptionFullTable,
		],
		allowDuplicates: true,
		choicesNotInMenu: true,
		choices: [],
	};
	DMG24_EnspelledItems.choicesEntries.forEach(function (entry) {
		obj.choices.push(entry.keyName);
		obj[entry.keyName.toLowerCase()] = {
			name: "Enspelled Weapon (" + entry.name + ")",
			nameTest: RegExp("^(?=.*enspelled)(?=.*(" + entry.nameTestPart + "))(?=.*\\uFEFF).*$", "i"),
			rarity: entry.rarity,
			description: "Bound to this weapon is a " + entry.spellString + " from the Conjuration, Divination, Evocation, Necromancy, or Transmutation school. The weapon has 6 charges and regains 1d6 daily at dawn. While holding the weapon, I can expend 1 charge to cast its " + entry.spellCantrip + ". The " + entry.spellCantrip + "'s saving throw DC is " + entry.saveDC + ", and its attack bonus is +" + entry.attackBonus + ".",
			extraLimitedFeatures: [{
				name: "Enspelled Weapon: " + entry.limitedFeatureName,
				usages: 6,
				recovery: "Dawn",
				additional: "regains d6",
			}],
			fixedDC: entry.saveDC,
			spellFirstColTitle: "Ch",
			allowUpCasting: entry.level === 0 ? true : undefined,
			spellcastingBonus: [{
				name: "Conj, Div, Evoc, Necro, or Trans",
				level: [entry.level, entry.level],
				school: ["Conj", "Div", "Evoc", "Necro", "Trans"],
				firstCol: 1,
			}],
			allowDuplicates: true,
			chooseGear: {
				type: "weapon",
				prefixOrSuffix: ["between", "Enspelled", "(" + entry.name + ") \uFEFF"],
				itemName1stPage: ["suffix", "Enspelled"],
				descriptionChange: false,
			},
		};
	});
	return obj;
}();
MagicItemsList["ersatz eye"] = {
	name: "Ersatz Eye",
	source: [["DMG24", 259]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: ["Arcana", "Implements"],
	description: "This magical eye replaces a real one that was lost or removed. While the eye is embedded in my eye socket, I can see through the tiny orb as though it were my natural eye. As a Magic action, I can insert or remove the eye, and it can't be removed against my will while I am alive.",
	descriptionFull: "This magical eye replaces a real one that was lost or removed. While the *Ersatz Eye* is embedded in your eye socket, you can see through the tiny orb as though it were your natural eye. You can insert or remove the *Ersatz Eye* as a Magic action, and it can't be removed against your will while you are alive.",
	action: [["action", ""]],
};
MagicItemsList["executioner's axe"] = {
	name: "Executioner's Axe",
	nameTest: /executioner.+(axe|\uFEFF)/i,
	source: [["DMG24", 259]],
	type: "Weapon (Battleaxe, Greataxe, Halberd, or Handaxe)",
	rarity: "Very Rare",
	magicItemTable: "Armaments",
	description: "I gain a +1 bonus to attack rolls and damage rolls made with this magic weapon. Any Humanoid that I hit with the weapon takes an extra 2d6 Slashing damage, and I gain Temporary Hit Points equal to the extra damage dealt.",
	descriptionFull: [
		"You gain a +1 bonus to attack rolls and damage rolls made with this magic weapon.",
		"Any Humanoid you hit with the weapon takes an extra 2d6 Slashing damage, and you gain Temporary Hit Points equal to the extra damage dealt.",
	],
	chooseGear: {
		type: "weapon",
		prefixOrSuffix: ["between", "Executioner's", "\uFEFF"],
		itemName1stPage: ["suffix", "Executioner's"],
		descriptionChange: ["replace", "weapon"],
		excludeCheck: function (inObjKey, inObj, v) {
			return !v.isMeleeWeapon || !/axe|halberd/i.test(v.baseWeaponName);
		},
	},
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && /axe|halberd/i.test(v.baseWeaponName) && /executioner/i.test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description += (fields.Description ? "; " : "") + "Humanoids: +2d6 Slashing dmg, I gain equal Temp HP";
				};
			},
			'If I include the word "Executioner" in a the name of a Battleaxe, Greataxe, Halberd, or Handaxe, it will be treated as the magic weapon Executioner\'s Axe. It adds +1 to hit and damage and deals +2d6 Slashing damage to Humanoids, and I gain Temporary Hit Points equal to the extra damage dealt.',
		],
		atkCalc: [
			function (fields, v, output) {
				if (v.isMeleeWeapon && /axe|halberd/i.test(v.baseWeaponName) && /executioner/i.test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[1] + 1;
				};
			},
			"",
		],
	},
};
MagicItemsList["hag eye"] = {
	name: "Hag Eye",
	source: [["DMG24", 265]],
	type: "Wondrous Item",
	rarity: "Uncommon",
	magicItemTable: ["Arcana", "Implements"],
	description: "This eye has 3 charges and regains all at dawn. While worn or held, I can use 1 charge to cast *Darkvision* (targeting myself only) or *See Invisibility*. As a Magic action, any hags belonging to the coven that created this *Hag Eye* can see what it sees while they maintain Concentration.",
	descriptionFull: [
		"A *Hag Eye* has 3 charges. While wearing or holding this item, you can expend 1 charge to cast *Darkvision* (targeting yourself only) or *See Invisibility*. The *Hag Eye* regains all expended charges daily at dawn.",
		"***Coven Sensor***. The *Hag Eye* is usually entrusted to a hag's minion for safekeeping and transport. As a Magic action, a hag who belongs to the coven that created the *Hag Eye* can see what the *Hag Eye* sees if the hag and the *Hag Eye* are on the same plane of existence. This effect lasts as long as the hag maintains Concentration. Multiple hags in the coven can see through the *Hag Eye* simultaneously.",
		"***Creating a Hag Eye***. Only a hag coven can craft this item, which is made from a real eye coated in varnish and often fitted to a pendant or another wearable item. A hag coven can have only one *Hag Eye* at a time, and creating a new one requires all three members of the coven to perform a special rite. This rite takes 1 hour, and the hags can't perform it if one or more of them has the Incapacitated condition. If the hags take any other actions during this rite, the rite fails and ends.",
	],
	usages: 3,
	recovery: "Dawn",
	spellFirstColTitle: "Ch",
	spellcastingBonus: [{
		name: "Hag Eye",
		spells: ["darkvision", "see invisibility"],
		selection: ["darkvision", "see invisibility"],
		times: 2,
		firstCol: 1,
	}],
	spellChanges: {
		"darkvision": {
			description: "I have Darkvision 150 ft for the duration",
			range: "Self",
			changes: "When I use a *Hag Eye* to cast *Darkvision*, I can only target myself.",
		},
	},
};
MagicItemsList["hat of vermin"] = {
	name: "Hat of Vermin",
	source: [["DMG24", 267]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: "Arcana",
	description: "This hat has 3 charges and regains all at dawn. As a Magic action while holding it, I can expend 1 charge to summon my choice of a **Bat**, a **Frog**, or a **Rat** in the hat. It acts as an ordinary creature of its kind, is Indifferent to me, and isn't under my control. The creature disappears after 1 hour or when it drops to 0 HP.",
	descriptionFull: "This hat has 3 charges. While holding the hat, you can take a Magic action to expend 1 charge and summon your choice of a **Bat**, a **Frog**, or a **Rat**. The summoned creature magically appears in the hat and tries to get away from you as quickly as possible. The creature is Indifferent toward you and other creatures, and it isn't under your control. It behaves as an ordinary creature of its kind and disappears after 1 hour or when it drops to 0 Hit Points. The hat regains all expended charges daily at dawn.",
	usages: 3,
	recovery: "Dawn",
	action: [["action", ""]],
};
MagicItemsList["hat of wizardry"] = {
	name: "Hat of Wizardry",
	source: [["DMG24", 267]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: "Arcana",
	attunement: true,
	prerequisite: "Requires Attunement by a Wizard",
	prereqeval: function (v) {
		return !!classes.known.wizard;
	},
	description: "I can use this cone-shaped hat as a Spellcasting Focus for my Wizard spells. As a Magic action once per Long Rest, I can use it to attempt to cast a Wizard cantrip with a casting time of an action that I don't know. To do so, I must make a DC 10 Arcana check. If I fail, I waste the use of the property and my action.",
	descriptionFull: [
		"This cone-shaped hat is adorned with moons and stars. While you are wearing it, you gain the following benefits.",
		"***Spellcasting Focus***. You can use the hat as a Spellcasting Focus for your Wizard spells.",
		"***Unknown Spell***. As a Magic action, you can try to cast a cantrip that you don't know. The cantrip must be on the Wizard spell list and have a casting time of an action, and you make a DC 10 Intelligence (Arcana) check. On a successful check, you cast the spell. On a failed check, the spell fails, and the action used to cast the spell is wasted. In either case, you can't use this property again until you finish a Long Rest.",
	],
	usages: 1,
	recovery: "Long Rest",
	spellcastingAbility: "wizard",
	spellFirstColTitle: "",
	spellcastingPreparedCantrips: { "class": "wizard" },
	allowUpCasting: true,
	spellcastingBonus: [{
		name: 'Enable "Prepare cantrips"',
		spells: [],
	}],
	calcChanges: {
		spellList: [function (spList, spName, spType) {
			if (spName.indexOf("hat of wizardry") !== -1) {
				var allWizardCantrips = CreateSpellList({ "class": "wizard", level: [0, 0] });

				// Remove spells that do not have a casting time of an action
				var actionWizardCantrips = allWizardCantrips.filter(function (spellName) {
					return /\bAct(ion)?|1 a(ct)?/i.test(SpellsList[spellName].time);
				});

				var allSpellsKnown = [];
				for (var sCast in CurrentSpells) {
					if (sCast.refType === "item") continue;
					var oCast = CurrentSpells[sCast];
					if (oCast.selectCa) allSpellsKnown = allSpellsKnown.concat(oCast.selectCa);
					if (oCast.selectBo) allSpellsKnown = allSpellsKnown.concat(oCast.selectBo);
				};
				var knownCantrips = OrderSpells(allSpellsKnown, "single", false, false, 0);

				// Remove the already known cantrips, from any source except magic items
				var cantripsToAdd = actionWizardCantrips.filter(function (spellName){
					return knownCantrips.indexOf(spellName) === -1;
				});

				spList.spells = (spList.spells || []).concat(cantripsToAdd);
			};
		}],
		spellAdd: [function (spellKey, spellObj, spName, isDuplicate) {
			if (spName.indexOf("hat of wizardry") !== -1) {
				spellObj.firstCol = "";
			};
		}],
	},
};
MagicItemsList["heward's handy spice pouch"] = {
	name: "Heward's Handy Spice Pouch",
	source: [["DMG24", 269]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: ["Arcana", "Implements"],
	description: "This empty belt pouch has 10 charges and regains 1d6+4 at dawn. As a Magic action while holding it, I can expend 1 charge, name any nonmagical food seasoning (such as salt, pepper, saffron, or cilantro), and remove a pinch of that seasoning from the pouch. A pinch is enough to season a single meal.",
	descriptionFull: "This belt pouch appears empty and has 10 charges. While holding the pouch, you can take a Magic action to expend 1 charge, name any nonmagical food seasoning (such as salt, pepper, saffron, or cilantro), and remove a pinch of the desired seasoning from the pouch. A pinch is enough to season a single meal. The pouch regains 1d6 + 4 expended charges daily at dawn.",
	usages: 10,
	recovery: "Dawn",
	additional: "regains 1d6+4",
	weight: 1,
	action: [["action", ""]],
};
MagicItemsList["horn of silent alarm"] = {
	name: "Horn of Silent Alarm",
	source: [["DMG24", 270]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: ["Arcana", "Implements"],
	description: "This horn has 4 charges and regains 1d4 expended charges daily at dawn. As a Magic action, I can blow the horn while expending 1 charge. One creature of my choice hears the horn's blare, provided that the creature is within 600 ft of the horn. No other creature hears the horn.",
	descriptionFull: "This horn has 4 charges and regains 1d4 expended charges daily at dawn. As a Magic action, you can blow the horn while expending 1 charge. One creature of your choice hears the horn's blare, provided that creature is within 600 feet of the horn. No other creature hears the horn.",
	usages: 4,
	recovery: "Dawn",
	additional: "regains 1d4",
	weight: 2,
	action: [["action", ""]],
};
MagicItemsList["instrument of illusions"] = {
	name: "Instrument of Illusions",
	source: [["DMG24", 271]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: ["Arcana", "Implements"],
	attunement: true,
	description: "Select one of the choices.",
	descriptionFull: "While you are playing this musical instrument, you can take a Magic action to create harmless, illusory visual effects within a 5-foot Emanation originating from the instrument. If you are a Bard, the size of the Emanation increases to 15 feet. Sample visual effects include luminous musical notes, a spectral dancer, butterflies, and gently falling snow. The magical effects have neither substance nor sound, and they are obviously illusory. The effects end when you stop playing.",
	weight: 3,
	choices: ["Bard (15-ft Emanation)", "Not a Bard (5-ft Emanation)"],
	selfChoosing: function () {
		return classes.known.bard ? "bard (15-ft emanation)" : "not a bard (5-ft emanation)";
	},
	"bard (15-ft emanation)": {
		name: "Instrument of Illusions \u200A",
		description: "As a Magic action while playing this instrument, I can create harmless, illusory visual effects in a 15-ft Emanation originating from the instrument. The magical effects have neither substance nor sound, and they are obviously illusory. The effects end when I stop playing.",
	},
	"not a bard (5-ft emanation)": {
		name: "Instrument of Illusions \u200A\u200A",
		description: "As a Magic action while playing this instrument, I can create harmless, illusory visual effects in a 5-ft Emanation originating from the instrument. The magical effects have neither substance nor sound, and they are obviously illusory. The effects end when I stop playing.",
	},
};
MagicItemsList["instrument of scribing"] = {
	name: "Instrument of Scribing",
	source: [["DMG24", 271]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: ["Arcana", "Implements"],
	attunement: true,
	description: "Select one of the choices.",
	descriptionFull: "This musical instrument has 3 charges and regains all expended charges daily at dawn. While you are playing it, you can take a Magic action to expend 1 charge and write a magical message on a nonmagical object or surface that you can see within 30 feet of yourself. The message can be up to six words long and is written in a language you know. If you are a Bard, you can scribe an additional seven words and make the message glow faintly, allowing it to be seen in nonmagical Darkness. Casting the *Dispel Magic* spell on the message erases it. Otherwise, the message fades away after 24 hours.",
	weight: 3,
	usages: 3,
	recovery: "Dawn",
	choices: ["Bard (13 words, glowing)", "Not a Bard (6 words)"],
	selfChoosing: function () {
		return classes.known.bard ? "bard (13 words, glowing)" : "not a bard (6 words)";
	},
	"bard (13 words, glowing)": {
		name: "Instrument of Scribing \u200A",
		description: "This instrument has 3 charges, regaining all at dawn. As a Magic action while playing it, I can use 1 charge to write a message of 13 words on a nonmagical surface I can see in 30 ft. I can make the text glow, causing it to be visible in Darkness. *Dispel Magic* erases the message, otherwise it fades away after 24 hours.",
	},
	"not a bard (6 words)": {
		name: "Instrument of Scribing \u200A\u200A",
		description: "TThis instrument has 3 charges, regaining all at dawn. As a Magic action while playing it, I can expend 1 charge to write a message of 6 words in a language I know on a nonmagical surface that I can see within 30 ft. *Dispel Magic* erases the message, otherwise it fades away after 24 hours.",
	},
};
MagicItemsList["instrument of the bards"] = function () {
	var obj = {
		name: "Instrument of the Bards",
		source: [["DMG24", 272]],
		type: "Wondrous Item",
		attunement: true,
		prerequisite: "Requires Attunement by a Bard",
		prereqeval: function (v) {
			return !!classes.known.bard;
		},
		description: "I can play this superior instrument to cast one of its spells. The spells use my spellcasting ability and spell save DC. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. See Spell Sheet page.",
		descriptionFull: [
			"An *Instrument of the Bards* is superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a bard college. The following table lists the spells common to all instruments, as well as the spells specific to each one and its rarity. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 Psychic damage.",
			"You can play the instrument to cast one of its spells. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.",
			[
				["Instrument", "", "Rarity", "", "Spells"],
				["All", "", "", "\u2014", "", "*Fly*, *Invisibility*, *Levitate*, *Protection from Evil and Good*, plus the spells listed for the particular instrument"],
				["Anstruth harp", "", "Very Rare", "*Cure Wounds* (level 5), *Ice Storm*, *Wall of Thorns*"],
				["Canaith mandolin", "", "Rare", "", "*Cure Wounds* (level 3), *Dispel Magic*, *Protection from Energy* (Lightning damage only)"],
				["Cli lyre", "", "", "Rare", "", "*Stone Shape*, *Wall of Fire*, *Wind Wall*"],
				["Doss lute    ", "", "Uncommon", "*Animal Friendship*, *Protection from Energy* (Fire damage only), *Protection from Poison*"],
				["Fochlucan bandore", "Uncommon", "*Entangle*, *Faerie Fire*, *Shillelagh*, *Speak with Animals*"],
				["Mac-Fuirmidh cittern", "Uncommon", "*Barkskin*, *Cure Wounds*, *Fog Cloud*"],
				["Ollamh harp", "", "Legendary", "*Confusion*, *Control Weather*, *Fire Storm*"],
			],
		],
		weight: 3,
		choices: [],
	};

	var commonSpellList = ["fly", "invisibility", "levitate", "protection from evil and good"];

	[
		{ name: "Anstruth Harp", rarity: "Very Rare", spellList: ["cure wounds", "ice storm", "wall of thorns"], spellChanges: {
			"cure wounds": {
				name: "Cure Wounds (level 5)",
				description: "1 creature heals 10d8+spellcasting ability modifier HP",
				changes: "When using the *Anstruth Harp* to cast *Cure Wounds*, it is cast at level 5.",
			},
		} },
		{ name: "Canaith Mandolin", rarity: "Rare", spellList: ["cure wounds", "dispel magic", "protection from energy"], spellChanges: {
			"cure wounds": {
				name: "Cure Wounds (level 3)",
				description: "1 creature heals 6d8+spellcasting ability modifier HP",
				changes: "When using the *Canaith Mandolin* to cast *Cure Wounds*, it is cast at level 3.",
			},
			"protection from energy": {
				description: "1 willing creature gains Resistance to Lightning damage",
				changes: "When using the *Canaith Mandolin* to cast *Protection from Energy*, it can only grant Resistance to Lightning damage.",
			},
		} },
		{ name: "Cli Lyre", rarity: "Rare", spellList: ["stone shape", "wall of fire", "wind wall"] },
		{ name: "Doss Lute", rarity: "Uncommon", spellList: ["animal friendship", "protection from energy", "protection from poison"], spellChanges: {
			"protection from energy": {
				description: "1 willing creature gains Resistance to Fire damage",
				changes: "When using the *Doss Lute* to cast *Protection from Energy*, it can only grant Resistance to Fire damage.",
			},
		} },
		{ name: "Fochlucan Bandore", rarity: "Uncommon", spellList: ["entangle", "faerie fire", "shillelagh", "speak with animals"] },
		{ name: "Mac-Fuirmidh Cittern", rarity: "Uncommon", spellList: ["barkskin", "cure wounds", "fog cloud"] },
		{ name: "Ollamh Harp", rarity: "Legendary", spellList: ["confusion", "control weather", "fire storm"] },
	].forEach(function (instrumentDetails) {
		var name = instrumentDetails.name;
		var rarity = instrumentDetails.rarity;
		var spellList = instrumentDetails.spellList;
		var spellChanges = instrumentDetails.spellChanges;

		var choiceName = name + "(" + rarity + ")";
		obj.choices.push(choiceName);

		var fullSpellList = commonSpellList.concat(spellList);

		var choiceObject = {
			name: name + " [Instrument of the Bards]",
			sortname: "Instrument of the Bards, " + name,
			rarity: rarity,
			spellcastingBonus: [{
				name: "Once per dawn",
				spells: fullSpellList,
				selection: fullSpellList,
				firstCol: "onceday",
				times: fullSpellList.length,
				spellcastingAbility: "class",
			}],
		};

		if (spellChanges) {
			choiceObject.spellChanges = spellChanges;
		}

		obj[choiceName.toLowerCase()] = choiceObject;
	})

	return obj;
}();
MagicItemsList["keoghtom's ointment"] = {
	name: "Keoghtom's Ointment",
	source: [["DMG24", 275]],
	type: "Wondrous Item",
	rarity: "Uncommon",
	magicItemTable: "Relics",
	description: "This glass jar, 3 inches in diameter, contains 1d4+1 doses of a thick mixture that smells faintly of aloe. As a Utilize action, I can swallow one dose of the ointment or apply it to a creature within 5 ft. The creature that receives it regains 2d8+2 Hit Points and ceases to be Poisoned.",
	descriptionFull: [
		"This glass jar, 3 inches in diameter, contains 1d4 + 1 doses of a thick mixture that smells faintly of aloe. The jar and its contents weigh 1/2 pound.",
		"As a Utilize action, you can swallow one dose of the ointment or apply it to a creature within 5 feet of yourself. The creature that receives it regains 2d8 + 2 Hit Points and ceases to have the Poisoned condition.",
	],
	weight: 0.5,
	usages: " ", // Intentionally left blank
	additional: "1d4+1 doses",
	recovery: "\u2013",
};
MagicItemsList["lock of trickery"] = {
	name: "Lock of Trickery",
	source: [["DMG24", 275]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: ["Arcana", "Implements"],
	description: "This lock appears to be an ordinary Lock and comes with a single key. The tumblers in this lock magically adjust to thwart burglars. Without the key, a creature can use Thieves' Tools to pick this lock with a successful DC 15 Dexterity (Sleight of Hand) check, but has Disadvantage on the check.",
	descriptionFull: "This lock appears to be an ordinary Lock (of the type described in chapter 6 of the Player's Handbook) and comes with a single key. The tumblers in this lock magically adjust to thwart burglars. Dexterity checks made to pick the lock have Disadvantage.",
	weight: 1,
};
MagicItemsList["lute of thunderous thumping"] = {
	name: "Lute of Thunderous Thumping",
	source: [["DMG24", 275]],
	type: "Weapon (Club)",
	rarity: "Very Rare",
	magicItemTable: ["Armaments", "Implements"],
	description: [
		"This reinforced lute can be wielded as a magic Club that deals +2d8 Thunder damage.",
		"***Sing and Swing***. Bards can use their Charisma modifier instead of their Strength modifier when making a melee attack roll with the lute, provided they sing or hum while making the attack.",
	],
	descriptionFull: [
		"This reinforced lute can be wielded as a magic Club that deals an extra 2d8 Thunder damage on a hit.",
		"***Sing and Swing***. If you're a Bard, you can use your Charisma modifier instead of your Strength modifier when making a melee attack roll with the lute, provided you sing or hum while making the attack.",
	],
	weight: 2,
	weaponOptions: [{
		baseWeapon: "club",
		regExpSearch: /^(?=.*lute)(?=.*thunderous)(?=.*thumping).*$/i,
		name: "Lute of Thunderous Thumping",
		source: [["DMG24", 275]],
		description: "Light; +2d8 Thunder damage",
		selectNow: true,
	}],
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (classes.known.bard && fields.Mod === 1 && What("Cha Mod") > What("Str Mod")) {
					fields.Mod = 6;
				};
			},
			"If I'm a Bard, I can use Charisma instead of Strength for this lute's attacks.",
		],
	},
};
MagicItemsList["mariner's armor"] = {
	name: "Mariner's Armor",
	nameTest: /mariner.+(armou?r|\u180C)/i,
	source: [["DMG24", 278]],
	type: "Armor (Any Light, Medium, or Heavy)",
	rarity: "Uncommon",
	magicItemTable: ["Armaments", "Relics"],
	description: "While wearing this armor decorated with fish and shell motifs, I have a Swim Speed equal to my Speed. If I start my turn underwater with 0 Hit Points, I immediately regain 1d4 Hit Points. The armor can't heal anyone again until the next dawn.",
	descriptionFull: [
		"While wearing this armor, you have a Swim Speed equal to your Speed. In addition, if you start your turn underwater with 0 Hit Points, you immediately regain 1d4 Hit Points. The armor can't heal anyone again until the next dawn.",
		"The armor is decorated with fish and shell motifs.",
	],
	usages: 1,
	recovery: "Dawn",
	speed: {
		swim: { spd: "walk", enc: "walk" },
	},
	allowDuplicates: true,
	chooseGear: {
		type: "armor",
		prefixOrSuffix: ["between", "Mariner's", "\u180C"],
		itemName1stPage: ["suffix", "Mariner's"],
		descriptionChange: ["replace", "armor"],
	},
};
MagicItemsList["moon-touched sword"] = {
	name: "Moon-Touched Sword",
	nameTest: /moon.touched.+(sword|\uFEFF)/i,
	source: [["DMG24", 280]],
	type: "Weapon (Glaive, Greatsword, Longsword, Rapier, Scimitar, or Shortsword)",
	rarity: "Common",
	magicItemTable: ["Armaments", "Implements"],
	description: "In Darkness, the unsheathed blade of this weapon sheds moonlight, creating Bright Light in a 15-ft radius and Dim Light for an additional 15 ft.",
	descriptionFull: "In Darkness, the unsheathed blade of this weapon sheds moonlight, creating Bright Light in a 15-foot radius and Dim Light for an additional 15 feet.",
	chooseGear: {
		type: "weapon",
		prefixOrSuffix: ["between", "Moon-Touched", "\uFEFF"],
		itemName1stPage: ["suffix", "Moon-Touched"],
		descriptionChange: ["replace", "weapon"],
		excludeCheck: function (inObjKey, inObj, v) {
			return !v.isMeleeWeapon || !/glaive|rapier|scimitar|sword/i.test(v.baseWeaponName);
		},
	},
};
MagicItemsList["mystery key"] = {
	name: "Mystery Key",
	source: [["DMG24", 280]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: ["Arcana", "Implements"],
	description: "A question mark is worked into the head of this key. The key has a 5% chance of unlocking any lock into which it's inserted. Once it unlocks something, the key disappears.",
	descriptionFull: "A question mark is worked into the head of this key. The key has a 5 percent chance of unlocking any lock into which it's inserted. Once it unlocks something, the key disappears.",
};
MagicItemsList["nature's mantle"] = {
	name: "Nature's Mantle",
	source: [["DMG24", 280]],
	type: "Wondrous Item",
	rarity: "Uncommon",
	magicItemTable: ["Implements", "Relics"],
	attunement: true,
	prerequisite: "Requires Attunement by a Druid or Ranger",
	prereqeval: function (v) {
		return !!classes.known.druid || !!classes.known.ranger;
	},
	description: "This cloak shifts color and texture to blend with the terrain surrounding me. While wearing the cloak, I can use it as a Spellcasting Focus for my Druid and Ranger spells. While I am in an area that is Lightly Obscured, I can Hide as a Bonus Action even if I am being directly observed.",
	descriptionFull: [
		"This cloak shifts color and texture to blend with the terrain surrounding you. While wearing the cloak, you can use it as a Spellcasting Focus for your Druid and Ranger spells.",
		"While you are in an area that is Lightly Obscured, you can Hide as a Bonus Action even if you are being directly observed.",
	],
	action: [["bonus action", " (Hide)"]],
};
MagicItemsList["orb of direction"] = {
	name: "Orb of Direction",
	source: [["DMG24", 283]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: ["Arcana", "Implements"],
	description: [
		"This orb can be used as an Arcane Focus.",
		"As a Magic action while holding the orb, I can determine which way is magnetic north. Nothing happens if the orb is used in a location that has no magnetic north.",
	],
	descriptionFull: [
		"This orb can be used as an Arcane Focus.",
		"While holding this orb, you can take a Magic action to determine which way is magnetic north. Nothing happens if the orb is used in a location that has no magnetic north.",
	],
	weight: 3,
	action: [["action", ""]],
};
MagicItemsList["orb of time"] = {
	name: "Orb of Time",
	source: [["DMG24", 284]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: ["Arcana", "Implements"],
	description: [
		"This orb can be used as an Arcane Focus.",
		"As a Magic action while holding the orb, I can determine whether it is morning, afternoon, evening, or nighttime. This property functions only on the Material Plane.",
	],
	descriptionFull: [
		"This orb can be used as an Arcane Focus.",
		"While holding the orb, you can take a Magic action to determine whether it is morning, afternoon, evening, or nighttime. This property functions only on the Material Plane.",
	],
	weight: 3,
	action: [["action", ""]],
};
MagicItemsList["perfume of bewitching"] = {
	name: "Perfume of Bewitching",
	source: [["DMG24", 284]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: ["Arcana", "Implements"],
	description: "As a Magic action, I can apply the magic perfume in this tiny vial to myself. For the next hour, I have Advantage on all Charisma (Deception and Persuasion) checks made to influence a creature within 5 ft of me.",
	descriptionFull: "This tiny vial contains magic perfume, enough for one use. You can take a Magic action to apply the perfume to yourself, and its effect lasts 1 hour. For the duration, you have Advantage on all Charisma (Deception and Persuasion) checks made to influence a creature within 5 feet of yourself.",
	action: [["action", ""]],
};
MagicItemsList["pipe of smoke monsters"] = {
	name: "Pipe of Smoke Monsters",
	source: [["DMG24", 285]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: ["Arcana", "Implements"],
	description: "As a Magic action while smoking this pipe, I can exhale a puff of smoke that takes the form of a creature, such as a dragon, a flumph, or a slaad. The form must be small enough to fit in a 1-ft cube and loses its shape after a few seconds, becoming an ordinary puff of smoke.",
	descriptionFull: "While smoking this pipe, you can take a Magic action to exhale a puff of smoke that takes the form of a creature, such as a dragon, a flumph, or a slaad. The form must be small enough to fit in a 1-foot cube and loses its shape after a few seconds, becoming an ordinary puff of smoke.",
};
MagicItemsList["pole of angling"] = {
	name: "Pole of Angling",
	source: [["DMG24", 286]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: "Implements",
	description: "This item functions as a Pole. As a Magic action while holding it, I can cause it to transform into a fishing pole with a hook, a line, and a reel, or have the fishing pole revert to a Pole.",
	descriptionFull: "This item functions as a Pole. While holding it, you can take a Magic action to cause it to transform into a fishing pole with a hook, a line, and a reel, or have the fishing pole revert to a Pole.",
	weight: 7,
	action: [["action", ""]],
};
MagicItemsList["pole of collapsing"] = {
	name: "Pole of Collapsing",
	source: [["DMG24", 286]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: "Implements",
	description: "This item functions as a Pole. As a Magic action while holding it, I can collapse it into a 1-ft-long rod for ease of storage (the pole's weight doesn't change) or cause the 1-ft-long rod to revert to a Pole. The rod elongates only as far as the surrounding space allows.",
	descriptionFull: "This item functions as a Pole. While holding it, you can take a Magic action to collapse it into a 1-foot-long rod for ease of storage (the pole's weight doesn't change) or cause the 1-foot-long rod to revert to a Pole. The rod elongates only as far as the surrounding space allows.",
	weight: 7,
	action: [["action", ""]],
};
MagicItemsList["potion of comprehension"] = {
	name: "Potion of Comprehension",
	source: [["DMG24", 287]],
	type: "Potion",
	rarity: "Common",
	magicItemTable: ["Arcana", "Implements"],
	description: "As a Bonus Action, I can drink this potion or administer it to another. The consumer gains the effect of *Comprehend Languages*: For 1 hour, understand the literal meaning of any language heard or seen signed, or visible written text touched. This potion's liquid is clear with bits of salt and soot swirling in it.",
	descriptionFull: [
		"When you drink this potion, you gain the effect of the *Comprehend Languages* spell for 1 hour.",
		"This potion's liquid is a clear concoction with bits of salt and soot swirling in it.",
	],
	weight: 0.5,
};
MagicItemsList["potion of fire breath"] = {
	name: "Potion of Fire Breath",
	source: [["DMG24", 287]],
	type: "Potion",
	rarity: "Uncommon",
	magicItemTable: "Arcana",
	description: "As a Bonus Action, I can drink this potion or administer it to another. For the next hour as a Bonus Action, the consumer can deal 4d6 fire damage to a creature within 30 ft, but it can make a Dex save DC 13 to halve this damage. This can be done 3 times. This potion's orange liquid flickers and smoke fills the container.",
	descriptionLong: [
		"As a Bonus Action, I can drink this potion or administer it to another. After drinking this potion, the consumer can take a Bonus Action to exhale fire at a target within 30 ft of themselves. The target makes a DC 13 Dexterity saving throw, taking 4d6 Fire damage on a failed save or half as much damage on a successful one. The effect ends after the consumer exhales the fire three times or when 1 hour has passed.",
		"This potion's orange liquid flickers, and smoke fills the top of the container and wafts out whenever it is opened.",
	],
	descriptionFull: [
		"After drinking this potion, you can take a Bonus Action to exhale fire at a target within 30 feet of yourself. The target makes a DC 13 Dexterity saving throw, taking 4d6 Fire damage on a failed save or half as much damage on a successful one. The effect ends after you exhale the fire three times or when 1 hour has passed.",
		"This potion's orange liquid flickers, and smoke fills the top of the container and wafts out whenever it is opened.",
	],
	weight: 0.5,
};
MagicItemsList["potion of greater invisibility"] = {
	name: "Potion of Greater Invisibility",
	source: [["DMG24", 288]],
	type: "Potion",
	rarity: "Very Rare",
	magicItemTable: "Arcana",
	description: "As a Bonus Action, I can drink this potion or administer it to another. The consumer gains the Invisible condition for 1 hour. This potion's container looks empty but feels as though it holds liquid.",
	descriptionFull: "This potion's container looks empty but feels as though it holds liquid. When you drink the potion, you have the Invisible condition for 1 hour.",
	weight: 0.5,
};
MagicItemsList["potion of pugilism"] = {
	name: "Potion of Pugilism",
	source: [["DMG24", 289]],
	type: "Potion",
	rarity: "Uncommon",
	magicItemTable: "Armaments",
	description: "As a Bonus Action, I can drink this potion or administer it to another. For the next 10 minutes each Unarmed Strike that the consumer makes deals an extra 1d6 Force damage on a hit. This potion is a thick green fluid that tastes like spinach.",
	descriptionFull: [
		"After you drink this potion, each Unarmed Strike you make deals an extra 1d6 Force damage on a hit. This effect lasts 10 minutes.",
		"This potion is a thick green fluid that tastes like spinach.",
	],
	weight: 0.5,
};
MagicItemsList["pot of awakening"] = {
	name: "Pot of Awakening",
	source: [["DMG24", 289]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: ["Arcana", "Relics"],
	description: "If I plant an ordinary shrub in this 10 lb clay pot and let it grow for 30 days, the shrub magically transforms into an **Awakened Shrub** at the end of that time, but its roots destroy the pot when it awakens. The shrub is Friendly towards me and obeys my commands. Absent commands from me, it does nothing.",
	descriptionFull: [
		"If you plant an ordinary shrub in this 10-pound clay pot and let it grow for 30 days, the shrub magically transforms into an **Awakened Shrub** at the end of that time. When the shrub awakens, its roots break the pot, destroying it.",
		"The awakened shrub is Friendly toward you and obeys your commands. Absent commands from you, it does nothing.",
	],
	weight: 10,
};
MagicItemsList["prosthetic limb"] = {
	name: "Prosthetic Limb",
	source: [["DMG24", 290]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: ["Arcana", "Implements"],
	description: "This magic item replaces a lost limb, like a hand, an arm, a foot, a leg, or a similar body part. While the prosthetic is attached, it functions identically to the part it replaces. As a Magic action, I can detach or reattach it. It can't be removed against my will while I'm alive.",
	descriptionFull: "This magic item replaces a lost limb\u2014a hand, an arm, a foot, a leg, or a similar body part. While the prosthetic is attached, it functions identically to the part it replaces. You can detach or reattach it as a Magic action, and it can't be removed against your will while you are alive.",
	action: [["action", " (attach/detach)"]],
};
MagicItemsList["rival coin"] = {
	name: "Rival Coin",
	source: [["DMG24", 296]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: "Arcana",
	description: "As a Magic action once per dawn, I can toss this gold coin with famous rivals on each side. **Heads**. A creature that I can see " + (typePF ? "" : "with") + "in 60 ft takes 2d4 Psychic damage and has Disadv" + (typePF ? "" : "antage") + " on its next attack roll before the end of its next turn. It can make a DC 13 Wis" + (typePF ? "" : "dom") + " save to take half damage only. **Tails**. I take 1d4 Psychic damage.",
	descriptionFull: [
		'This gold coin has a creature embossed on each side. The two depicted creatures must be famous rivals or enemies of each other. For example, a Rival Coin might show Iggwilv on one side and Mordenkainen on the other, or Venger on one side and Tiamat on the other. One of these figures is on the "heads" side of the coin, the other on the "tails" side.',
		"The coin has 1 charge and regains its expended charge daily at dawn. You can take a Magic action to toss the coin, expending its charge. Roll any die to determine whether the coin comes up heads (on an even number) or tails (on an odd number). The roll also determines the effect:",
		" \u2022 **Heads**. Target one creature you can see within 60 feet of yourself. The target makes a DC 13 Wisdom saving throw. On a failed save, the target takes 2d4 Psychic damage and has Disadvantage on the next attack roll it makes before the end of its next turn. On a successful save, the target takes half as much damage only.",
		" \u2022 **Tails**. You take 1d4 Psychic damage.",
	],
	usages: 1,
	recovery: "Dawn",
	action: [["action", ""]],
};
MagicItemsList["rod of the pact keeper"] = {
	name: "Rod of the Pact Keeper",
	nameTest: /^(?=.*pact.keeper)(?=.*(arcane focus|crystal|orb|rod|staff|wand)).*$/i,
	source: [["DMG24", 301]],
	type: "Rod",
	magicItemTable: "Arcana",
	attunement: true,
	prerequisite: "Requires Attunement by a Warlock",
	prereqeval: function (v) { return !!classes.known.warlock; },
	description: "Select one of the choices.",
	descriptionFull: [
		"While holding this rod, you gain a bonus to spell attack rolls and to the saving throw DCs of your Warlock spells. The bonus is determined by the rod's rarity: Uncommon (+1), Rare (+2), or Very Rare (+3).",
		"In addition, you can regain one spell slot as a Magic action while holding the rod. You can't use this property again until you finish a Long Rest.",
	],
	limfeaname: "Rod of the Pact Keeper (regain spell slot)",
	usages: 1,
	recovery: "Long Rest",
	action: [["action", ""]],
	weight: 2,
	allowDuplicates: true,
	choices: ["+1 Rod of the Pact Keeper (Uncommon)", "+2 Rod of the Pact Keeper (Rare)", "+3 Rod of the Pact Keeper (Very Rare)"],
	"+1 rod of the pact keeper (uncommon)": {
		name: "Rod of the Pact Keeper +1",
		nameTest: /^(?=.*pact.keeper)(?=.*(arcane focus|crystal|orb|rod|staff|wand))(?=.*\+1)(?!.*\+[23]).*$/i,
		rarity: "Uncommon",
		description: [
			"While holding this arcane focus, I gain a +1 bonus to spell attack rolls and saving throw DCs of my Warlock spells.",
			"As a Magic action once per Long Rest, I can use it to regain one spell slot.",
		],
		calcChanges: {
			spellCalc: [
				function (type, spellcasters, ability) {
					if (type != "prepare" && spellcasters.indexOf("warlock") !== -1) return 1;
				},
				"I gain a +1 bonus to spell attack rolls and saving throw DCs of my Warlock spells.",
			],
		},
	},
	"+2 rod of the pact keeper (rare)": {
		name: "Rod of the Pact Keeper +2",
		nameTest: /^(?=.*pact.keeper)(?=.*(arcane focus|crystal|orb|rod|staff|wand))(?=.*\+2)(?!.*\+[13]).*$/i,
		rarity: "Rare",
		description: [
			"While holding this arcane focus, I gain a +2 bonus to spell attack rolls and saving throw DCs of my Warlock spells.",
			"As a Magic action once per Long Rest, I can use it to regain one spell slot.",
		],
		calcChanges: {
			spellCalc: [
				function (type, spellcasters, ability) {
					if (type != "prepare" && spellcasters.indexOf("warlock") !== -1) return 2;
				},
				"I gain a +2 bonus to spell attack rolls and saving throw DCs of my Warlock spells.",
			],
		},
	},
	"+3 rod of the pact keeper (very rare)": {
		name: "Rod of the Pact Keeper +3",
		nameTest: /^(?=.*pact.keeper)(?=.*(arcane focus|crystal|orb|rod|staff|wand))(?=.*\+3)(?!.*\+[12]).*$/i,
		rarity: "Very Rare",
		description: [
			"While holding this arcane focus, I gain a +3 bonus to spell attack rolls and saving throw DCs of my Warlock spells.",
			"As a Magic action once per Long Rest, I can use it to regain one spell slot.",
		],
		calcChanges: {
			spellCalc: [
				function (type, spellcasters, ability) {
					if (type != "prepare" && spellcasters.indexOf("warlock") !== -1) return 3;
				},
				"I gain a +3 bonus to spell attack rolls and saving throw DCs of my Warlock spells.",
			],
		},
	},
};
MagicItemsList["rope of mending"] = {
	name: "Rope of Mending",
	source: [["DMG24", 302]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: ["Arcana", "Implements"],
	description: "This 50-ft coil of rope can repair itself when cut into any number of smaller pieces. As a Magic action, I can cause all pieces of the rope that are in contact with each other and not otherwise in use to knit back together. A *Rope of Mending* is forever shortened if a section of it is lost or destroyed.",
	descriptionFull: "This 50-foot coil of rope can repair itself when cut into any number of smaller pieces. As a Magic action, you can cause all pieces of the rope that are in contact with each other and not otherwise in use to knit back together. A *Rope of Mending* is forever shortened if a section of it is lost or destroyed.",
	action: [["action", ""]],
	weight: 5,
};
MagicItemsList["ruby of the war mage"] = {
	name: "Ruby of the War Mage",
	source: [["DMG24", 302]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: ["Arcana", "Relics"],
	attunement: true,
	prerequisite: "Requires Attunement by a Spellcaster",
	prereqeval: function (v) { return v.isSpellcaster; },
	description: "Etched with eldritch runes, this 1-inch-diameter ruby allows me to use a Simple or Martial weapon as a Spellcasting Focus." + (typePF ? "\n" : " ") + "I must press the ruby against the weapon for 10 minutes, after which it can't be removed unless I detach it as a Magic action, the weapon is destroyed, or my Attunement to the ruby ends.",
	descriptionFull: "Etched with eldritch runes, this 1-inch-diameter ruby allows you to use a Simple or Martial weapon as a Spellcasting Focus for your spells. For this property to work, you must attach the ruby to the weapon by pressing the ruby against it for at least 10 minutes. Thereafter, the ruby can't be removed unless you detach it as a Magic action, the weapon is destroyed, or your Attunement to the ruby ends.",
	action: [["action", " (detach)"]],
};
MagicItemsList["saddle of the cavalier"] = {
	name: "Saddle of the Cavalier",
	source: [["DMG24", 302]],
	type: "Wondrous Item",
	rarity: "Uncommon",
	magicItemTable: ["Arcana", "Armaments"],
	description: "While in this saddle on a mount, I can't be dismounted against my will if I am conscious, and attack rolls against my mount have disadvantage.",
	descriptionFull: "While in this saddle on a mount, you can't be dismounted against your will if you're conscious, and attack rolls against the mount have disadvantage.",
	weight: 25,
};
MagicItemsList["scroll of protection"] = function (){
	var obj = {
		name: "Scroll of Protection",
		source: [["DMG24", 302]],
		type: "Scroll",
		rarity: "Rare",
		magicItemTable: ["Arcana", "Relics"],
		description: "Select one of the choices.",
		descriptionFull: [
			"Each *Scroll of Protection* works against creatures of a specific creature type chosen by the DM or determined by rolling on the following table.",
			[
				["1d100", "Creature Type"],
				["01\u201310", "Aberrations"],
				["11\u201315", "Beasts"],
				["16\u201320", "Celestials"],
				["21\u201325", "Constructs"],
				["26\u201335", "Dragons"],
				["36\u201345", "Elementals"],
				["46\u201350", "Humanoids"],
				["51\u201360", "Fey"],
				["61\u201370", "Fiends"],
				["71\u201375", "Giants"],
				["76\u201380", "Monstrosities"],
				["81\u201385", "Oozes"],
				["86\u201390", "Plants"],
				["91\u201300", "Undead"],
			],
			"Using a Magic action to read the scroll creates a 5-foot Emanation originating from you. For 5 minutes, creatures of the specified type can't enter or affect anything in the area. However, if you move in such a way that a creature of the specified type would be inside the area, the effect ends.",
			"As a Magic action, a creature within 5 feet of the Emanation can attempt to overcome it, which forces the creature to make a DC 15 Charisma saving throw. On a successful save, the creature ceases to be affected by the Emanation.",
		],
		allowDuplicates: true,
		choicesNotInMenu: true,
		action: [["action", ""]],
		choices: [],
	};
	["Aberrations", "Beasts", "Celestials", "Constructs", "Dragons", "Elementals", "Humanoids", "Fey", "Fiends", "Giants", "Monstrosities", "Oozes", "Plants", "Undead"].forEach(function (type) {
		obj.choices.push(type);
		obj[type.toLowerCase()] = {
			name: "Scroll of Protection from " + type,
			description: "As a Magic action, I can read this to create a 5-ft Emanation originating from me. For 5 minutes " + type + " can't enter or affect anything in the area. If I move in a way that would bring a barred creature inside, it ends. As a Magic action, a creature within 10 ft of me can try a DC 15 " + (typePF ? "Cha save" : "Charisma saving throw") + " to ignore the effect.",
		};
	});
	return obj;
}();
MagicItemsList["scroll of titan summoning"] = function (){
	var obj = {
		name: "Scroll of Titan Summoning",
		source: [["DMG24", 303]],
		type: "Scroll",
		rarity: "Legendary",
		magicItemTable: ["Arcana", "Relics"],
		description: "Select one of the choices.",
		descriptionFull: [
			"When you take a Magic action to read this scroll, a particular titan named in the scroll appears in an unoccupied space on the ground or in water that you can see within 1 mile of yourself. The DM picks a suitable titan or determines it randomly by rolling on the table below.",
			"The titan is Hostile toward all other creatures and disappears when it drops to 0 Hit Points. If the titan is summoned into a space that isn't large enough to contain it, the summoning fails, and the scroll is wasted.",
			[
				["1d100", "Titan"],
				["01\u201315", "Animal Lord"],
				["16\u201330", "Blob of Annihilation"],
				["31\u201345", "Colossus"],
				["46\u201360", "Elemental Cataclysm"],
				["61\u201375", "Empyrean"],
				["76\u201390", "Kraken (a kraken requires a body of water large enough to contain it, or the summoning fails and the scroll is wasted)"],
				["91\u2013100", "Tarrasque"],
			],
		],
		allowDuplicates: true,
		choicesNotInMenu: true,
		action: [["action", ""]],
		choices: [],
	};
	[
		{ titan: "Animal Lord", article: "an" },
		{ titan: "Blob of Annihilation" },
		{ titan: "Colossus" },
		{ titan: "Elemental Cataclysm", article: "an" },
		{ titan: "Empyrean", article: "an" },
		{ titan: "Kraken", groundOrWater: "in a body of water large enough for it" },
		{ titan: "Tarrasque" },
	].forEach(function (scrollType) {
		var titan = scrollType.titan;
		var article = scrollType.article ? scrollType.article : "a";
		var groundOrWater = scrollType.groundOrWater ? scrollType.groundOrWater : "on the ground or in water";
		obj.choices.push(titan);
		obj[titan.toLowerCase()] = {
			name: "Scroll of " + titan + " Summoning",
			description: "As a Magic action, I can read this scroll to have " + article + " **" + titan + "** appear in an unoccupied space " + groundOrWater + " that I can see within 1 mile. The titan is Hostile towards all other creatures and disappears at 0 HP. If I summon the titan into an area too small to contain it, the scroll fails and is wasted.",
		};
	});
	return obj;
}();
MagicItemsList["shield of expression"] = {
	name: "Shield of Expression",
	source: [["DMG24", 303]],
	type: "Shield",
	rarity: "Common",
	magicItemTable: ["Armaments", "Relics"],
	description: "The front of this shield is shaped in the likeness of a face. As a Bonus Action while bearing the shield, I can alter the the face's expression.",
	descriptionFull: "The front of this Shield is shaped in the likeness of a face. While bearing the Shield, you can take a Bonus Action to alter the face's expression.",
	weight: 6,
	shieldAdd: "Shield of Expression",
	action: [["bonus action", ""]],
};
MagicItemsList["silvered weapon"] = {
	name: "Silvered Weapon",
	nameTest: /silvered.+(weapon|\uFEFF)/i,
	source: [["DMG24", 304]],
	type: "Weapon (Any Simple or Martial)",
	rarity: "Common",
	magicItemTable: "Armaments",
	description: "An alchemical process has bonded silver to this magic weapon. When I score a Critical Hit with it against a creature that is shape-shifted, the weapon deals one additional die of damage.",
	descriptionFull: "An alchemical process has bonded silver to this magic weapon. When you score a Critical Hit with it against a creature that is shape-shifted, the weapon deals one additional die of damage.",
	chooseGear: {
		type: "weapon",
		prefixOrSuffix: ["between", "Silvered", "\uFEFF"],
		itemName1stPage: ["suffix", "Silvered"],
		descriptionChange: ["replace", "weapon"],
		excludeCheck: function (inObjKey, inObj, v) {
			return !v.isSimpleOrMartial;
		},
	},
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isSimpleOrMartial && /silvered/i.test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					var die = fields.Damage_Die.replace(/.*?(d\d+).*/, "$1");
					if (die === fields.Damage_Die) die = " damage die";
					fields.Description += (fields.Description ? "; " : "") + "Crit vs shape-shifted +1" + die;
				}
			},
			'If I include the word "Silvered" in the name of a Simple or Martial weapon, it will be treated as the magic weapon Silvered Weapon. Critical hits against shape-shifted creatures with it deal one extra damage die.',
		],
	},
};
MagicItemsList["smoldering armor"] = {
	name: "Smoldering Armor",
	nameTest: /smoldering.+(armou?r|\u180C)/i,
	source: [["DMG24", 305]],
	type: "Armor (Any Light, Medium, or Heavy)",
	rarity: "Common",
	magicItemTable: ["Armaments", "Relics"],
	description: "Wisps of harmless, odorless smoke rise from this armor while it is worn.",
	descriptionFull: "Wisps of harmless, odorless smoke rise from this armor while it is worn.",
	chooseGear: {
		type: "armor",
		prefixOrSuffix: ["between", "Smoldering", "\u180C"],
		itemName1stPage: ["suffix", "Smoldering"],
		descriptionChange: ["replace", "armor"],
	},
};
MagicItemsList["spirit board"] = {
	name: "Spirit Board",
	source: [["DMG24", 306]],
	type: "Wondrous Item",
	rarity: "Very Rare",
	magicItemTable: "Relics",
	description: "This ornate wooden board has 3 charges and regains 1 charge daily at dawn. The board comes with a heart-shaped planchette, which must be resting on the board for its magic to function. While touching the planchette, I can cast *Augury* (1 charge) or *Commune* (3 charges). Spirits of the dead answer my questions.",
	descriptionLong: "This ornate wooden board has 3 charges and regains 1 expended charge daily at dawn. The board has the letters of the Common alphabet printed on one side, alongside the words \"Yes\" and \"No\", and symbols representing \"Weal\" and \"Woe\". The board comes with a heart-shaped planchette, which must be resting on the lettered side of the board for its magic to function. While touching the planchette, I can cast *Augury* (1 charge) or *Commune* (3 charges). Spirits of the dead guide the planchette across the board's surface, answering my questions by pointing to the letters or words on the board.",
	descriptionFull: [
		"This ornate wooden board has the letters of the Common alphabet printed on one side, alongside the words \"Yes\" and \"No\" and symbols representing \"Weal\" and \"Woe.\" The board comes with a heart-shaped, wooden planchette. This planchette must be resting on the lettered side of the board for the board's magic to function.",
		"This board has 3 charges and regains 1 expended charge daily at dawn. While touching the planchette, you can take 1 minute to cast one of the spells on the table below. The table indicates how many charges you must expend to cast the spell. As you cast the spell, you call on the spirits of the dead to help guide the planchette across the board's surface, answering your questions by pointing to the letters or words on the board.",
		[
			["Spell", "Charge Cost"],
			["*Augury*", "1"],
			["*Commune*", "3"],
		],
	],
	usages: 3,
	recovery: "Dawn",
	additional: "regains 1",
	spellFirstColTitle: "Ch",
	spellcastingBonus: [{
		name: "1 charge",
		spells: ["augury"],
		selection: ["augury"],
		firstCol: 1,
	}, {
		name: "3 charges",
		spells: ["commune"],
		selection: ["commune"],
		firstCol: 3,
	}],
};
MagicItemsList["staff of adornment"] = {
	name: "Staff of Adornment",
	source: [["DMG24", 306]],
	type: "Staff",
	rarity: "Common",
	magicItemTable: ["Arcana", "Relics"],
	description: "While holding the staff, I can place a Tiny object up to 1 pound above its tip and make the object float 1 inch above it until the object is removed or the staff leaves my possession. The staff can have up to three such floating objects. While holding the staff, I can make any of the objects slowly spin or turn in place.",
	descriptionFull: "If you place a Tiny object weighing no more than 1 pound (such as a shard of crystal, an egg, or a stone) above the tip of this staff while holding it, the object floats an inch from the staff's tip and remains there until it is removed or until the staff is no longer in your possession. The staff can have up to three such objects floating over its tip at any given time. While holding the staff, you can make one or more of the objects slowly spin or turn in place.",
	weight: 4,
};
MagicItemsList["staff of birdcalls"] = {
	name: "Staff of Birdcalls",
	source: [["DMG24", 307]],
	type: "Staff",
	rarity: "Common",
	magicItemTable: ["Arcana", "Implements"],
	description: "This staff has 10 charges and regains 1d6+4 at dawn. When its last charge is used, 5% chance it is destroyed. As a Magic action, I can use 1 charge to create a sound out to 120 ft: a finch's chirp, raven's caw, duck's quack, chicken's cluck, goose's honk, loon's call, turkey's gobble, seagull's cry, owl's hoot, or eagle's shriek.",
	descriptionFull: [
		"This wooden staff is decorated with bird carvings. It has 10 charges. While holding it, you can take a Magic action to expend 1 charge from the staff and cause it to create one of the following sounds, which can be heard out to 120 feet: a finch's chirp, a raven's caw, a duck's quack, a chicken's cluck, a goose's honk, a loon's call, a turkey's gobble, a seagull's cry, an owl's hoot, or an eagle's shriek.",
		"***Regaining Charges***. The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, the staff explodes in a harmless cloud of bird feathers and is lost forever.",
	],
	weight: 4,
	usages: 10,
	recovery: "Dawn",
	additional: "regains 1d6+4",
	action: [["action", ""]],
};
MagicItemsList["staff of flowers"] = {
	name: "Staff of Flowers",
	source: [["DMG24", 308]],
	type: "Staff",
	rarity: "Common",
	magicItemTable: ["Arcana", "Relics"],
	description: "This staff has 10 charges and regains 1d6+4 at dawn. As a Magic action while holding it, I can use 1 charge to cause a nonmagical flower of my choice sprout from the staff or a patch of earth or soil within 5 ft. The flower grows" + (typePF ? "/" : " or ") + "withers as normal. If I use the last charge, I roll 1d20. On a 1, the staff turns into flower petals" + (typePF ? "." : " and is lost forever."),
	descriptionFull: [
		"This wooden staff has 10 charges. While holding it, you can take a Magic action to expend 1 charge from the staff and cause a flower to sprout from a patch of earth or soil within 5 feet of yourself, or from the staff itself. Unless you choose a specific kind of flower, the staff creates a mild-scented daisy. The flower is harmless and nonmagical, and it grows or withers as a normal flower would.",
		"***Regaining Charges***. The staff regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll 1d20. On a 1, the staff turns into flower petals and is lost forever.",
	],
	weight: 4,
	usages: 10,
	recovery: "Dawn",
	additional: "regains 1d6+4",
	action: [["action", ""]],
};
MagicItemsList["staff of the adder"] = {
	name: "Staff of the Adder",
	source: [["DMG24", 309]],
	type: "Staff",
	rarity: "Uncommon",
	magicItemTable: ["Arcana", "Relics"],
	attunement: true,
	description: "As a Bonus Action, I can animate this staff's snake head for 1 min or revert it back to inanimate with full HP. While animated, it has AC 15, 20 HP, Psychic and Poison" + (typePF ? "" : " damage") + " Immunity, and when I take the Attack action I can attack with it once " + (typePF ? "in 5 ft using Wis" : "within 5 ft using Wisdom") + " for 1d6 Piercing + 3d6 Poison damage. The staff is destroyed at 0 HP.",
	descriptionFull: [
		"As a Bonus Action, you can turn the head of this staff into that of an animate, venomous snake for 1 minute or revert the staff to its inanimate form.",
		"When you take the Attack action, you can make one of the attack rolls using the animated snake head, which has a reach of 5 feet. Apply your Proficiency Bonus and Wisdom modifier to the attack roll. On a hit, the target takes 1d6 Piercing damage and 3d6 Poison damage.",
		"The snake head can be attacked while it is animate. It has AC 15, HP 20, and Immunity to Poison and Psychic damage. If the head drops to 0 Hit Points, the staff is destroyed. As long as it's not destroyed, the staff regains all lost Hit Points when it reverts to its inanimate form.",
	],
	weight: 4,
	action: [["bonus action", " (animate/end)"]],
	weaponsAdd: { options: ["Staff of the Adder"] },
	weaponOptions: [{
		regExpSearch: /^(?=.*staff)(?=.*adder)(?=.*snake)(?=.*head).*$/i,
		name: "Staff of the Adder's Snake Head",
		source: [["DMG24", 309]],
		ability: 5,
		type: "Magic Item",
		damage: ["1d6+3d6", "", "Pierc.+Poison"],
		range: "Melee",
		weight: 4,
		description: "1d6 Piercing damage + 3d6 Poison damage; max 1 attack during Attack action",
		abilitytodamage: false,
		isNotWeapon: true,
		isAlwaysProf: true,
		selectNow: true,
	}],
};
MagicItemsList["sword of answering"] = {
	name: "Sword of Answering",
	source: [["DMG24", 313]],
	type: "Weapon (Longsword)",
	rarity: "Legendary",
	magicItemTable: "Armaments",
	attunement: true,
	description: "As a Reaction while I hold this +3 Longsword, I can make one melee attack with it against any creature in my reach that deals damage to me. I have Advantage on the attack roll, and any damage dealt with this special attack ignores any Immunity or Resistance the target has to that damage.",
	descriptionFull: "You gain a +3 bonus to attack rolls and damage rolls made with this sword. In addition, while you hold the sword, you can take a Reaction to make one melee attack with it against any creature in your reach that deals damage to you. You have Advantage on the attack roll, and any damage dealt with this special attack ignores any Immunity or Resistance the target has to that damage.",
	weight: 3,
	action: [["reaction", ""]],
	weaponOptions: [{
		baseWeapon: "longsword",
		regExpSearch: /^(?=.*sword)(?=.*answering).*$/i,
		name: "Sword of Answering",
		source: [["DMG24", 313]],
		description: "Versatile (1d10); Reaction when damaged: 1 attack (Adv, ignore Resistance/Immunity)",
		modifiers: [3, 3],
		selectNow: true,
	}],
};
MagicItemsList["sword of vengeance"] = {
	name: "Sword of Vengeance",
	nameTest: /^(?=.*(sword|\uFEFF))(?=.*vengeance).*$/i,
	source: [["DMG24", 314]],
	type: "Weapon (Glaive, Greatsword, Longsword, Rapier, Scimitar, or Shortsword)",
	rarity: "Uncommon",
	magicItemTable: "Armaments",
	attunement: true,
	cursed: true,
	description: "I gain a +1 bonus to attack rolls and damage rolls made with this magic weapon." + (typePF ? " " : "\n") + "***Curse***. I can't part with it and have Disadv" + (typePF ? "" : "antage") + " on attacks with other weapons. " + (typePF ? "If" : "Whenever") + " I take damage in combat, I must make a DC 15 Wis" + (typePF ? " save" : "dom saving throw") + " or attack the attacker until one of us drops to 0 HP or I can't reach them to attack in melee.",
	descriptionFull: [
		"You gain a +1 bonus to attack rolls and damage rolls made with this magic weapon.",
		"***Curse***. This weapon is cursed and possessed by a vengeful spirit. Becoming attuned to it extends the curse to you. As long as you remain cursed, you are unwilling to part with the weapon, keeping it on your person at all times. While attuned to this weapon, you have Disadvantage on attack rolls made with weapons other than this one.",
		"In addition, while the weapon is on your person, you must succeed on a DC 15 Wisdom saving throw whenever you take damage from another creature in combat. On a failed save, you must attack the creature that damaged you until you drop to 0 Hit Points or it does or until you can't reach the creature to make a melee attack against it.",
		"You can break the curse in the usual ways. Alternatively, casting Banishment on the weapon forces the vengeful spirit to leave it. The weapon then becomes a +1 Weapon with no other properties.",
	],
	chooseGear: {
		type: "weapon",
		prefixOrSuffix: "prefix",
		prefixOrSuffix: ["prefix", "of Vengeance \uFEFF"],
		itemName1stPage: ["prefix", "of Vengeance"],
		descriptionChange: false,
		excludeCheck: function (inObjKey, inObj, v) {
			return !v.isMeleeWeapon || !/glaive|rapier|scimitar|sword/i.test(v.baseWeaponName);
		},
	},
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && /glaive|rapier|scimitar|sword/i.test(v.baseWeaponName) && /vengeance/i.test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description += (fields.Description ? "; " : "") + "Cursed";
				};
			},
			'If I include the word "Vengeance" in the name of a Glaive, Greatsword, Longsword, Rapier, Scimitar, or Shortsword, it will be treated as the magic weapon Sword of Vengeance. It adds +1 to hit and damage, but also bears a curse.',
		],
		atkCalc: [
			function (fields, v, output) {
				if (v.isMeleeWeapon && /glaive|rapier|scimitar|sword/i.test(v.baseWeaponName) && /vengeance/i.test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[1] + 1;
				};
			}, "",
		],
	},
};
MagicItemsList["sylvan talon"] = {
	name: "Sylvan Talon",
	source: [["DMG24", 314]],
	type: "Weapon (Dagger, Rapier, Scimitar, Shortsword, Sickle, or Spear)",
	rarity: "Common",
	magicItemTable: "Armaments",
	attunement: true,
	description: [
		"While this weapon is on my person, I understand the non-\u200Awritten communication of all Fey, and they understand mine.",
		"***Secret Message***. As a Magic action once per dawn, I can use the weapon to cast *Message*.",
	],
	descriptionFull: [
		"While this weapon is on your person, you understand the non-written communication of all Fey, and they understand yours.",
		"***Secret Message***. As a Magic action, you can use the weapon to cast Message. Once this property is used, it can't be used again until the next dawn.",
	],
	languageProfs: ["Fey (non-written)"],
	spellcastingBonus: [{
		name: "Secret Message",
		spells: ["message"],
		selection: ["message"],
		firstCol: "onceday",
	}],
	chooseGear: {
		type: "weapon",
		prefixOrSuffix: "brackets",
		descriptionChange: ["replace", "weapon"],
		excludeCheck: function (inObjKey, inObj, v) {
			return !v.isMeleeWeapon || !/dagger|rapier|scimitar|shortsword|sickle|spear/i.test(v.baseWeaponName);
		},
	},
};
MagicItemsList["talking doll"] = {
	name: "Talking Doll",
	source: [["DMG24", 315]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: ["Arcana", "Implements"],
	attunement: true,
	description: "I can spend a Short Rest within 5 ft of this doll, telling it up to six phrases, each up to six words long, and set a condition under which the doll speaks each phrase. Whatever the condition, it must occur within 5 ft of the doll to make it speak. The doll's phrases are lost when my Attunement to the doll ends.",
	descriptionLong: "While this doll is within 5 ft of me, I can spend a Short Rest telling it to say up to six phrases, none of which can be more than six words long, and set a condition under which the doll speaks each phrase. I can also replace old phrases with new ones. Whatever the condition, it must occur within 5 ft of the doll to make it speak. For example, whenever someone picks up the doll, it might say, \"I want a piece of candy.\" The doll's phrases are lost when my Attunement to the doll ends.",
	descriptionFull: "While this doll is within 5 feet of you, you can spend a Short Rest telling it to say up to six phrases, none of which can be more than six words long, and set a condition under which the doll speaks each phrase. You can also replace old phrases with new ones. Whatever the condition, it must occur within 5 feet of the doll to make it speak. For example, whenever someone picks up the doll, it might say, \"I want a piece of candy.\" The doll's phrases are lost when your Attunement to the doll ends.",
};
MagicItemsList["tankard of sobriety"] = {
	name: "Tankard of Sobriety",
	source: [["DMG24", 315]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: ["Arcana", "Implements"],
	description: "This tankard has a stern face sculpted into one side. I can drink ale, wine, or any other nonmagical alcoholic beverage poured into it without becoming inebriated. The tankard has no effect on magical liquids or harmful substances such as poison.",
	descriptionFull: "This tankard has a stern face sculpted into one side. You can drink ale, wine, or any other nonmagical alcoholic beverage poured into it without becoming inebriated. The tankard has no effect on magical liquids or harmful substances such as poison.",
	weight: 1,
};
MagicItemsList["tentacle rod"] = {
	name: "Tentacle Rod",
	source: [["DMG24", 316]],
	type: "Rod",
	rarity: "Rare",
	magicItemTable: ["Armaments", "Relics"],
	attunement: true,
	description: "As a Magic action, the rod's 3 tentacles attack in 15 ft, +9 to hit, 1d6 Psychic damage. A target hit by all 3 must DC 15 Dex save or be Restrained while in 15 ft, till I free it as a Bonus Action or I'm Incapacitated. On each of its turns, the Restrained takes 3d6 Psychic damage at the start and repeats the save at the end.",
	descriptionLong: "As a Magic action while holding this rod, I can direct each of its three rubbery tentacles to attack a creature I can see within 15 ft. Each tentacle makes a melee attack roll with a +9 bonus and deals 1d6 Psychic damage. If a target is hit by all three tentacles, it must make a DC 15 Dexterity saving throw or be Restrained until I'm Incapacitated, I take a Bonus Action to release it, or the target is no longer within 15 ft of me. While Restrained in this way, the target takes 3d6 Psychic damage at the start of each of its turns. At the end of each of its turns, the target repeats the save, ending the effect on itself on a success.",
	descriptionFull: "This rod ends in three rubbery tentacles. While holding the rod, you can take a Magic action to direct the tentacles to stretch outward, each one attacking a creature you can see within 15 feet of yourself. For each tentacle, make a melee attack roll with a +9 bonus. A tentacle deals 1d6 Psychic damage on a hit. If you hit the same target with all three tentacles, the target must succeed on a DC 15 Dexterity saving throw or have the Restrained condition until you have the Incapacitated condition, until you take a Bonus Action to release the target, or until the target is no longer within 15 feet of you. While Restrained in this way, the target takes 3d6 Psychic damage at the start of each of its turns. At the end of each of its turns, the target repeats the save, ending the effect on itself on a success.",
	weight: 2,
	action: [["action", " (3 attacks)"]],
	weaponOptions: [{
		regExpSearch: /^(?=.*tentacle)(?=.*rod).*$/i,
		name: "Tentacle Rod",
		source: [["DMG24", 316]],
		ability: 0,
		type: "Magic Item",
		damage: [1, 6, "psychic"],
		range: "Melee (15 ft)",
		description: "3 attacks as an action; All 3 hit same target: DC 15 Dex save or Restrained, see item",
		abilitytodamage: false,
		modifiers: [9, ""],
		weight: 2,
		isAlwaysProf: false,
		isNotWeapon: true,
		selectNow: true,
	}],
};
MagicItemsList["tome of the stilled tongue"] = {
	name: "Tome of the Stilled Tongue",
	source: [["DMG24", 317]],
	type: "Wondrous Item",
	rarity: "Legendary",
	magicItemTable: "Arcana",
	attunement: true,
	prerequisite: "Requires Attunement by a Wizard",
	prereqeval: function (v) { return !!classes.known.wizard; },
	description: "I can use this book as a Spellbook and an Arcane Focus. Once per dawn while holding it, I can take a Bonus Action to cast a spell I have written in it, without expending a spell slot or using any Verbal or Somatic components. Only I can remove the tongue pinned to the cover, doing so erases all spells within.",
	descriptionLong: "This book has a dessicated tongue pinned to the cover, the first few pages of which are filled with indecipherable scrawls. The remaining pages are blank. I can use it as a Spellbook and an Arcane Focus. Once per dawn while holding it, I can take a Bonus Action to cast a spell I have written in the tome, without expending a spell slot or using any Verbal or Somatic components. Only I can remove the tongue from the book's cover, permanently erasing all spells within. Vecna watches the user of this tome and can write cryptic messages in it which typically fade away after they are read.",
	descriptionFull: [
		"This book has a desiccated tongue pinned to its front cover. Five of these tomes exist, and it's unknown which one is the original. The tongue on the first Tome of the Stilled Tongue belonged to a treacherous former servant of the lich Vecna. The tongues pinned to the covers of the four copies came from other spellcasters who crossed Vecna. The first few pages of each tome are filled with indecipherable scrawls. The remaining pages are blank.",
		"While attuned to this item, you can use it as a Spellbook and an Arcane Focus. In addition, while holding the tome, you can take a Bonus Action to cast a spell you have written in this tome, without expending a spell slot or using any Verbal or Somatic components. Once used, this property of the tome can't be used again until the next dawn.",
		"Only you can remove the tongue from the book's cover. If you do so, all spells written in the book are permanently erased.",
		"Vecna watches anyone using this tome and can write cryptic messages in it. These messages typically fade away after they are read.",
	],
	weight: 5,
	action: [["bonus action", ""]],
	usages: 1,
	recovery: "Dawn",
};
MagicItemsList["veteran's cane"] = {
	name: "Veteran's Cane",
	source: [["DMG24", 318]],
	type: "Wondrous Item",
	rarity: "Common",
	magicItemTable: ["Armaments", "Implements"],
	description: "As a Bonus Action, I can transform this walking cane into an ordinary Longsword or change the Longsword back into a walking cane. In either case, I must be holding the item.",
	descriptionFull: "As a Bonus Action, you can transform this walking cane into an ordinary Longsword or change the Longsword back into a walking cane. In either case, you must be holding the item.",
	weight: 3,
	action: [["bonus action", ""]],
	weaponOptions: [{
		baseWeapon: "longsword",
		regExpSearch: /^(?=.*veteran)(?=.*cane).*$/i,
		name: "Veteran's Cane",
		source: [["DMG24", 318]],
		selectNow: true,
	}],
};
MagicItemsList["walloping ammunition"] = {
	name: "Walloping Ammunition",
	nameTest: /walloping.+(ammunition|ammo|\u180B)/i,
	source: [["DMG24", 318]],
	type: "Weapon (Any Ammunition)",
	rarity: "Common",
	magicItemTable: ["Armaments", "Implements"],
	description: "This magic ammunition packs a wallop. A creature hit by it must succeed on a DC 10 Strength saving throw or be knocked Prone.",
	descriptionFull: "A creature hit by this ammunition must succeed on a DC 10 Strength saving throw or have the Prone condition.",
	allowDuplicates: true,
	chooseGear: {
		type: "ammo",
		prefixOrSuffix: ["between", "Walloping", "\u180B"],
		descriptionChange: ["replace", "ammunition"],
		excludeCheck: function (inObjKey, inObj) {
			return /vials|flasks/i.test(inObj.icon);
		},
		removePluralS: true,
	},
};
MagicItemsList["wand of conducting"] = {
	name: "Wand of Conducting",
	source: [["DMG24", 319]],
	type: "Wand",
	rarity: "Common",
	magicItemTable: ["Arcana", "Implements"],
	description: "This wand has 3 charges and regains all at dawn. As a Magic action, I can expend 1 charge to create orchestral music by waving it around. The music can be heard out to 120 ft and ends when I stop waving the wand. If I use the last charge, I roll 1d20. On a 1, a sad tuba sound plays as the wand crumbles into dust.",
	descriptionFull: [
		"This wand has 3 charges. While holding it, you can take a Magic action to expend 1 charge and create orchestral music by waving it around. The music can be heard out to 120 feet and ends when you stop waving the wand.",
		"***Regaining Charges***. The wand regains all expended charges daily at dawn. If you expend the wand's last charge, roll 1d20. On a 1, a sad tuba sound plays as the wand crumbles into dust and is destroyed.",
	],
	weight: 1,
	usages: 3,
	recovery: "Dawn",
	action: [["action", ""]],
};
MagicItemsList["wand of pyrotechnics"] = {
	name: "Wand of Pyrotechnics",
	source: [["DMG24", 321]],
	type: "Wand",
	rarity: "Common",
	magicItemTable: ["Arcana", "Implements"],
	description: "This wand has 7 charges and regains 1d6+1 at dawn. As a Magic action, I can expend 1 charge to create a harmless burst of light \x26 sound at a point I can see within 120 ft. The noise travels 300 ft. The light is as bright as a torch flame but lasts only a second. If I use the last charge, I roll 1d20. On a 1, the wand is destroyed.",
	descriptionFull: [
		"This wand has 7 charges. While holding it, you can take a Magic action to expend 1 charge and create a harmless burst of multicolored light at a point you can see up to 120 feet away. The burst of light is accompanied by a crackling noise that can be heard up to 300 feet away. The light is as bright as a torch flame but lasts only a second.",
		"***Regaining Charges***. The wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll 1d20. On a 1, the wand erupts in a harmless pyrotechnic display and is destroyed.",
	],
	weight: 1,
	usages: 7,
	recovery: "Dawn",
	additional: "regains 1d6+1",
	action: [["action", ""]],
};
MagicItemsList["wave"] = {
	name: "Wave",
	source: [["DMG24", 323]],
	type: "Weapon (Trident)",
	rarity: "Artifact",
	attunement: true,
	description: "This sentient +3 Trident, gives me Advantage on Initiative and allows me to breathe underwater by forming a bubble of air around my head. When I roll a 20 to hit with it, it deals +21 Necrotic damage. Once per dawn, I can cast a level 9 *Globe of Invulnerability* from it. See Notes page for other properties.",
	descriptionFull: [
		"Held in the dungeon of White Plume Mountain, *Wave* is engraved with images of waves, shells, and sea creatures.",
		"You gain a +3 bonus to attack rolls and damage rolls made with this magic weapon. When you roll a 20 on the d20 for an attack roll with this weapon, the target takes an extra 21 Necrotic damage.",
		"While holding *Wave*, you gain the following benefits:",
		" \u2022 **Combat Ready**. You have Advantage on Initiative rolls.",
		" \u2022 **Underwater Adaptation**. A bubble of air forms around your head while you are underwater, allowing you to breathe normally in that environment.",
		"***Aquatic Command***. *Wave* has 3 charges and regains 1d3 expended charges daily at dawn. While you carry it, you can expend 1 charge to cast *Dominate Beast* (save DC 20) from it on a Beast that has a Swim Speed.",
		"***Globe of Invulnerability***. While holding *Wave*, you can cast the level 9 version of *Globe of Invulnerability* from it. Once used, this property can't be used again until the next dawn.",
		"***Sentience***. *Wave* is a sentient weapon of Neutral alignment, with an Intelligence of 14, a Wisdom of 10, and a Charisma of 18. It has hearing and Darkvision out to 120 feet.",
		"The weapon communicates telepathically with its wielder and speaks Aquan.",
		"***Personality***. *Wave* zealously encourages mortals to worship sea gods and has a habit of humming sea chanteys. Conflict arises if the wielder fails to further the weapon's objectives in the world.",
		"***Destroying Wave***. *Wave* can be destroyed only on the island of Thunderforge, where it was forged. The weapon must be melted down by a storm giant or someone imbued with a storm giant's strength. Destroying *Wave* angers a god of the sea, who sends powerful agents to attack the island and punish the destroyers.",
	],
	weight: 4,
	weaponOptions: [{
		baseWeapon: "trident",
		regExpSearch: /wave/i,
		name: "Wave",
		source: [["DMG24", 323]],
		description: "Thrown, Versatile (1d10); On 20 to hit: +21 Necrotic damage",
		modifiers: [3, 3],
		selectNow: true,
	}],
	advantages: [["Initiative", true]],
	savetxt: { text: "I can breathe normally underwater" },
	extraLimitedFeatures: [{
		name: "Wave [Dominate Beast] (regains 1d3)",
		usages: 3,
		recovery: "Dawn",
	}, {
		name: "Wave [Globe of Invulnerability]",
		usages: 1,
		recovery: "Dawn",
	}],
	fixedDC: 20,
	spellFirstColTitle: "Ch",
	spellcastingBonus: [{
		name: "1 charge",
		spells: ["dominate beast"],
		selection: ["dominate beast"],
		firstCol: 1,
	}, {
		name: "1/dawn at level 9",
		spells: ["globe of invulnerability"],
		selection: ["globe of invulnerability"],
		firstCol: "onceday",
	}],
	spellChanges: {
		"dominate beast": {
			description: "1 Beast with Swim spd save or Charmed; redo on dmg; follows telepathic commands; Rea to use its Rea",
			changes: "Can only affect Beasts with a Swim speed.",
		},
		"globe of invulnerability": {
			description: "Immobile barrier surrounds me for duration; SL<9 cast outside area can't affect inside area",
			changes: "Cast at level 9.",
		},
	},
	toNotesPage: [
		{
			name: "Wave",
			useDescriptionFull: function (str) {
				return str.replace("magic weapon", "magic Trident").replace("allowing I", "allowing me");
			},
		},
		Object.assign({}, sentientItemConflictNote, {
			amendTo: "*Wave* is engraved with images",
		}),
	],
};
MagicItemsList["whelm"] = {
	name: "Whelm",
	source: [["DMG24", 324]],
	type: "Weapon (Warhammer)",
	rarity: "Artifact",
	attunement: true,
	prerequisite: "Requires Attunement by a Dwarf or a Creature Attuned to a Belt of Dwarvenkind",
	prereqeval: function (v) {
		var knownIdx = CurrentMagicItems.known.indexOf("belt of dwarvenkind");
		return /dwarf/.test(CurrentRace.known) || isMagicItemAttuned(knownIdx);
	},
	description: "This sentient +3 Warhammer has Thrown (60/180 ft). As a Magic action once per dawn, I can have creatures I choose within 60 ft make a DC 20 Con save or be Stunned for 1 min, repeating the save at the end of their turns. When thrown, it deals +1d8 Force damage and returns to my hand. See Notes page for properties.",
	descriptionFull: [
		"*Whelm* is a powerful weapon forged by dwarves and lost in the dungeon of White Plume Mountain.",
		"You gain a +3 bonus to attack rolls and damage rolls made with this magic weapon.",
		"***Hurl***. *Whelm* has Thrown with a normal range of 60 feet and a long range of 180 feet. When you hit with a ranged attack roll using *Whelm*, the target takes an extra 1d8 Force damage, or an extra 4d8 Force damage if the target is a Construct, an Elemental, or a Giant. Immediately after hitting or missing, the weapon flies back to your hand.",
		"***Shock Wave***. You can take a Magic action to strike the ground with *Whelm* and send a shock wave out from the point of impact. Each creature of your choice on the ground within 60 feet of that point must succeed on a DC 20 Constitution saving throw or have the Stunned condition for 1 minute. A creature repeats the save at the end of each of its turns, ending the effect on itself on a success. Once used, this property can't be used again until the next dawn.",
		"***Supernatural Awareness***. While you are holding the weapon, it alerts you to the location of any secret or concealed doors within 30 feet of you. In addition, you can cast *Detect Evil and Good* or *Locate Object* from the weapon. Once you cast either spell, you can't cast it from the weapon again until the next dawn.",
		"***Sentience***. *Whelm* is a sentient, Lawful Neutral weapon with an Intelligence of 15, a Wisdom of 12, and a Charisma of 15. It has hearing and Darkvision out to 120 feet.",
		"The weapon communicates telepathically with its wielder and speaks Dwarvish, Giant, and Goblin.",
		"***Personality***. *Whelm* has ties to the dwarf clan that created it, called the Dankil or the Mightyhammer clan. It longs to be returned to that clan. *Whelm*'s purpose is to protect dwarves. Conflict arises if the wielder doesn't share this goal.",
		"***Destroying Whelm***. *Whelm* can be dissolved in the acidic bile of a recently slain ancient black dragon. It can also be melted down in the forges of the Mightyhammer dwarf clan, but only by the rightful leader of that clan.",
	],
	weight: 5,
	weaponOptions: [{
		baseWeapon: "warhammer",
		regExpSearch: /whelm/i,
		name: "Whelm",
		source: [["DMG24", 324]],
		range: "Melee, 60/180 ft",
		description: "Returning, Thrown, Versatile (1d10); +1d8 Force damage when thrown (or +4d8 vs Construct/Elemental/Giant)",
		modifiers: [3, 3],
		selectNow: true,
	}],
	action: [["action", " (Shock Wave)"]],
	extraLimitedFeatures: [{
		name: "Whelm (Shock Wave)",
		usages: 1,
		recovery: "Dawn",
	}],
	vision: [["Know location of secret doors", 30]],
	spellcastingBonus: [{
		name: "Once per dawn",
		spells: ["detect evil and good", "locate object"],
		selection: ["detect evil and good", "locate object"],
		firstCol: "onceday",
	}],
	toNotesPage: [
		{
			name: "Whelm",
			useDescriptionFull: function (str) {
				return str.replace("magic weapon", "magic Warhammer").replace("alerts I", "alerts me");
			},
		},
		Object.assign({}, sentientItemConflictNote, {
			amendTo: "*Whelm* is a powerful weapon",
		}),
	],
};
MagicItemsList["wraps of unarmed power"] = {
	name: "Wraps of Unarmed Power",
	source: [["DMG24", 325]],
	type: "Wondrous Item",
	magicItemTable: "Armaments",
	description: "Select one of the choices.",
	descriptionFull: "While wearing these wraps, you have a bonus to attack rolls and damage rolls made with your Unarmed Strikes. The bonus is determined by the wraps' rarity, and those strikes deal your choice of Force damage or their normal damage type: Uncommon (+1), Rare (+2), or Very Rare (+3).",
	allowDuplicates: true,
	choices: ["+1 Wraps of Unarmed Power (Uncommon)", "+2 Wraps of Unarmed Power (Rare)", "+3 Wraps of Unarmed Power (Very Rare)"],
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (v.baseWeaponName === "unarmed strike" && DamageTypes[fields.Damage_Type.toLowerCase()] && !/force/i.test(fields.Damage_Type)) {
					var shortOldType = fields.Damage_Type.replace(/(tic|(eon)?ing)$/i, ".").capitalize();
					fields.Damage_Type = shortOldType + "/Force";
				};
			},
			"",
			700,
		],
	},
	weaponsAdd: { select: ["Unarmed Strike"] },
	"+1 wraps of unarmed power (uncommon)": {
		name: "Wraps of Unarmed Power +1",
		nameTest: "+1 Wraps of Unarmed Power",
		rarity: "Uncommon",
		description: "While wearing these wraps, I gain a +1 bonus to the attack and damage rolls of my Unarmed Strikes and can have them deal Force damage instead of their normal damage.",
		calcChanges: {
			atkCalc: [
				function (fields, v, output) {
					if (v.baseWeaponName === "unarmed strike") {
						output.magic += 1;
					};
				},
				"My Unarmed Strikes gain a +1 bonus to hit and damage and I can choose to have them deal Force damage or their normal damage.",
			],
		},
	},
	"+2 wraps of unarmed power (rare)": {
		name: "Wraps of Unarmed Power +2",
		nameTest: "+2 Wraps of Unarmed Power",
		rarity: "Rare",
		description: "While wearing these wraps, I gain a +2 bonus to the attack and damage rolls of my Unarmed Strikes and can have them deal Force damage instead of their normal damage.",
		calcChanges: {
			atkCalc: [
				function (fields, v, output) {
					if (v.baseWeaponName === "unarmed strike") {
						output.magic += 2;
					};
				},
				"My Unarmed Strikes gain a +2 bonus to hit and damage and I can choose to have them deal Force damage or their normal damage.",
			],
		},
	},
	"+3 wraps of unarmed power (very rare)": {
		name: "Wraps of Unarmed Power +3",
		nameTest: "+3 Wraps of Unarmed Power",
		rarity: "Very Rare",
		description: "While wearing these wraps, I gain a +3 bonus to the attack and damage rolls of my Unarmed Strikes and can have them deal Force damage instead of their normal damage.",
		calcChanges: {
			atkCalc: [
				function (fields, v, output) {
					if (v.baseWeaponName === "unarmed strike") {
						output.magic += 3;
					};
				},
				"My Unarmed Strikes gain a +3 bonus to hit and damage and I can choose to have them deal Force damage or their normal damage.",
			],
		},
	},
};

// Firearms (weapons and ammunition) [excluded by default]
var DMG24_Reload = "***Reload***. I can make a limited number of shots with a Reload weapon. I must then reload the weapon as an action or a Bonus Action.";
WeaponsList["automatic rifle"] = {
	regExpSearch: /^(?=.*automatic)(?=.*rifle).*$/i,
	name: "Automatic rifle",
	nameAlt: ["Rifle, Automatic"],
	source: [["DMG24", 73]],
	list: "firearm",
	ability: 2,
	type: "Martial",
	damage: [2, 8, "piercing"],
	range: "80/240 ft",
	weight: 8,
	description: "Ammunition, Burst Fire, Reload (30 shots), Two-Handed",
	ammo: "firearm bullet",
	mastery: "slow",
	defaultExcluded: true,
	tooltip: [
		"***Burst Fire***. As an action, I can expend 10 pieces of a Burst Fire weapon's ammunition to spray shots in a 10-ft Cube within the weapon's normal range. Each creature in that area must succeed on a DC 15 Dexterity saving throw or take damage. I roll the weapon's damage once, and apply it to each creature that failed the save.",
		DMG24_Reload,
	],
};
WeaponsList["hunting rifle"] = {
	regExpSearch: /^((?=.*hunting)(?=.*rifle)|(?!.*(automatic|laser|antimatter))(?=.*\brifles?\b)).*$/i,
	name: "Hunting rifle",
	nameAlt: ["Rifle, Hunting"],
	source: [["DMG24", 73]],
	list: "firearm",
	ability: 2,
	type: "Martial",
	damage: [2, 10, "piercing"],
	range: "80/240 ft",
	weight: 8,
	description: "Ammunition, Reload (5 shots), Two-Handed",
	ammo: "firearm bullet",
	mastery: "slow",
	defaultExcluded: true,
	tooltip: DMG24_Reload,
};
WeaponsList["revolver"] = {
	regExpSearch: /revolver/i,
	name: "Revolver",
	source: [["DMG24", 73]],
	list: "firearm",
	ability: 2,
	type: "Martial",
	damage: [2, 8, "piercing"],
	range: "40/120 ft",
	weight: 3,
	description: "Ammunition, Reload (6 shots)",
	ammo: "firearm bullet",
	mastery: "Sap",
	defaultExcluded: true,
	tooltip: DMG24_Reload,
};
WeaponsList["semiautomatic pistol"] = {
	regExpSearch: /^(?=.*semiautomatic)(?=.*\bpistols?\b).*$/i,
	name: "Semiautomatic Pistol",
	nameAlt: ["Pistol, Semiautomatic"],
	source: [["DMG24", 73]],
	list: "firearm",
	ability: 2,
	type: "Martial",
	damage: [2, 6, "piercing"],
	range: "50/150 ft",
	weight: 3,
	description: "Ammunition, Reload (15 shots)",
	ammo: "firearm bullet",
	mastery: "vex",
	defaultExcluded: true,
	tooltip: DMG24_Reload,
};
WeaponsList["shotgun"] = {
	regExpSearch: /shotgun/i,
	name: "Shotgun",
	source: [["DMG24", 73]],
	list: "firearm",
	ability: 2,
	type: "Martial",
	damage: [2, 8, "piercing"],
	range: "30/90 ft",
	weight: 7,
	description: "Ammunition, Reload (2 shots), Two-Handed",
	ammo: "firearm bullet",
	mastery: "push",
	defaultExcluded: true,
	tooltip: DMG24_Reload,
};
WeaponsList["antimatter rifle"] = {
	regExpSearch: /^(?=.*antimatter)(?=.*rifle).*$/i,
	name: "Antimatter rifle",
	nameAlt: ["Rifle, Antimatter"],
	source: [["DMG24", 73]],
	list: "firearm",
	ability: 2,
	type: "Martial",
	damage: [6, 8, "necrotic"],
	range: "120/360 ft",
	weight: 10,
	description: "Ammunition, Reload (2 shots), Two-Handed",
	ammo: "energy cell",
	mastery: "sap",
	defaultExcluded: true,
	tooltip: DMG24_Reload,
};
WeaponsList["laser pistol"] = {
	regExpSearch: /^(?=.*laser)(?=.*pistol).*$/i,
	name: "Laser pistol",
	nameAlt: ["Pistol, Laser"],
	source: [["DMG24", 73]],
	list: "firearm",
	ability: 2,
	type: "Martial",
	damage: [3, 6, "radiant"],
	range: "40/120 ft",
	weight: 2,
	description: "Ammunition, Reload (50 shots), Two-Handed",
	ammo: "energy cell",
	mastery: "vex",
	defaultExcluded: true,
	tooltip: DMG24_Reload,
};
WeaponsList["laser rifle"] = {
	regExpSearch: /^(?=.*laser)(?=.*rifle).*$/i,
	name: "Laser rifle",
	nameAlt: ["Rifle, Laser"],
	source: [["DMG24", 73]],
	list: "firearm",
	ability: 2,
	type: "Martial",
	damage: [3, 8, "radiant"],
	range: "100/300 ft",
	weight: 7,
	description: "Ammunition, Reload (30 shots), Two-Handed",
	ammo: "energy cell",
	mastery: "slow",
	defaultExcluded: true,
	tooltip: DMG24_Reload,
};
AmmoList["energy cell"] = {
	name: "Energy Cell",
	source: [["DMG24", 72]],
	weight: 0, // An energy cell weighs 0.5 lb, but this is weight per charge
	icon: "Bullets",
	invName: "Energy Cell",
	defaultExcluded: true,
};

// Explosives [excluded by default]
// Explosives - Bomb
WeaponsList["bomb"] = {
	regExpSearch: /bomb/i,
	name: "Bomb",
	infoname: "Bomb [100 gp]",
	source: [["DMG24", 72]],
	list: "explosive",
	ability: 0,
	type: "Explosive",
	damage: [3, 6, "fire"],
	range: "60 ft",
	weight: 1,
	description: "All within 5-ft radius Sphere, Dex save for half damage",
	abilitytodamage: false,
	modifiers: [4, ""],
	dc: true,
	ammo: "bomb",
	isNotWeapon: true,
	isAlwaysProf: false,
	tooltip: "As an action, I can light a Bomb and throw it at a point up to 60 ft away, where it explodes. Each creature in a 5-ft radius Sphere centered on that point makes a DC 12 Dexterity saving throw, taking 3d6 Fire damage on a failed save or half as much damage on a successful one.",
	defaultExcluded: true,
};
AmmoList["bomb"] = {
	name: "Bomb",
	source: [["DMG24", 72]],
	weight: 1,
	icon: "Flasks",
	defaultExcluded: true,
};
MagicItemsList["bomb"] = {
	name: "Bomb",
	source: [["DMG24", 72]],
	type: "Explosive",
	rarity: "100 GP",
	defaultExcluded: true,
	description: "As an action, I can light a Bomb and throw it at a point up to 60 ft away, where it explodes. Each creature in a 5-ft radius Sphere centered on that point makes a DC 12 Dexterity saving throw, taking 3d6 Fire damage on a failed save or half as much damage on a successful one.",
	descriptionFull: "As an action, you can light a Bomb and throw it at a point up to 60 feet away, where it explodes. Each creature in a 5-foot-radius Sphere centered on that point makes a DC 12 Dexterity saving throw, taking 3d6 Fire damage on a failed save or half as much damage on a successful one.",
	action: [["action", "Throw Explosive"]],
	weaponsAdd: { select: ["Bomb"] },
	eval: function () { // make sure the weapon and ammo are not excluded
		if (CurrentSources.weapExcl.eject("bomb") !== -1) SetWeaponsdropdown();
		if (CurrentSources.ammoExcl.eject("bomb") !== -1) SetAmmosdropdown();
	},
};
// Explosives - Dynamite Stick
WeaponsList["dynamite stick"] = {
	regExpSearch: /^(?=.*dynamite)(?=.*stick).*$/i,
	name: "Dynamite stick",
	source: [["DMG24", 72]],
	list: "explosive",
	ability: 0,
	type: "Explosive",
	damage: [3, 6, "force"],
	range: "60 ft",
	weight: 1,
	description: "All within 5-ft radius Sphere, Dex save halves; +1d6 damage \x26 +5 ft radius per extra stick used (max 10d6/20 ft)",
	abilitytodamage: false,
	modifiers: [4, ""],
	dc: true,
	ammo: "dynamite stick",
	isNotWeapon: true,
	isAlwaysProf: false,
	defaultExcluded: true,
	tooltip: [
		"An an action, I can light a Dynamite Stick and throw it at a point up to 60 ft away, where it explodes. Each creature in a 5-ft radius Sphere centered on that point makes a DC 12 Dexterity saving throw, taking 3d6 Force damage on a failed save or half as much damage on a successful one.",
		"It takes 1 minute to bind two or more Dynamite Sticks together so they explode at the same time. Each stick after the first increases the damage by 1d6 (to a maximum of 10d6) and the effect's radius by 5 ft (to a maximum of 20 ft).",
		"It takes 1 minute to rig dynamite with a longer fuse so it explodes after a longer period of time, such as 1 minute or 10 minutes.",
	],
};
AmmoList["dynamite stick"] = {
	name: "Dynamite stick",
	source: [["DMG24", 72]],
	weight: 1,
	icon: "Flasks",
	defaultExcluded: true,
};
MagicItemsList["dynamite stick"] = {
	name: "Dynamite stick",
	source: [["DMG24", 72]],
	type: "Explosive",
	rarity: "Rare",
	defaultExcluded: true,
	description: "As an action, I can light a (bundle of) dynamite stick(s) and throw them at a point up to 60 ft away. All creatures within 5-ft/stick radius of that point take 2d6+1d6/stick fire damage, DC 12 Dex save for half. Maximum 10d6 damage and 20-ft radius. If I take 1 min to rig it, I can have the stick(s) explode after 1-10 minutes.",
	descriptionFull: [
		"An an action, you can light a Dynamite Stick and throw it at a point up to 60 feet away, where it explodes. Each creature in a 5-foot-radius Sphere centered on that point makes a DC 12 Dexterity saving throw, taking 3d6 Force damage on a failed save or half as much damage on a successful one.",
		"It takes 1 minute to bind two or more Dynamite Sticks together so they explode at the same time. Each stick after the first increases the damage by 1d6 (to a maximum of 10d6) and the effect's radius by 5 feet (to a maximum of 20 feet).",
		"It takes 1 minute to rig dynamite with a longer fuse so it explodes after a longer period of time, such as 1 minute or 10 minutes.",
	],
	action: [["action", "Throw Explosive"]],
	weaponsAdd: { select: ["Dynamite Stick"] },
	eval: function () { // make sure the weapon and ammo are not excluded
		if (CurrentSources.weapExcl.eject("dynamite stick") !== -1) SetWeaponsdropdown();
		if (CurrentSources.ammoExcl.eject("dynamite stick") !== -1) SetAmmosdropdown();
	},
};
// Explosives - Grenades
WeaponsList["fragmentation grenade"] = {
	regExpSearch: /^(?=.*grenade)(?=.*frag(\b|mentation)).*$/i,
	name: "Fragmentation Grenade",
	nameAlt: ["Grenade, Fragmentation"],
	source: [["DMG24", 73]],
	list: "explosive",
	ability: 0,
	type: "Explosive",
	damage: [5, 6, "piercing"],
	range: "60 ft",
	weight: 1,
	description: "All within 20-ft radius Sphere, Dex save halves; 1,000 ft range with Grenade Launcher",
	abilitytodamage: false,
	modifiers: [7, ""],
	dc: true,
	ammo: "grenade",
	isNotWeapon: true,
	isAlwaysProf: false,
	tooltip: [
		"As an action, I can either throw a grenade at a point up to 60 ft away or use a Grenade Launcher to propel the grenade to a point up to 1,000 ft away. The grenade explodes at that point, creating a particular effect in a 20-ft-radius Sphere.",
		"Each creature in the Sphere makes a DC 15 Dexterity saving throw, taking 17 (5d6) Piercing damage on a failed save or half as much damage on a successful one.",
	],
	defaultExcluded: true,
};
AmmoList["grenade"] = {
	name: "Grenade",
	source: [["DMG24", 73]],
	weight: 1,
	icon: "Flasks",
	defaultExcluded: true,
};
MagicItemsList["grenade"] = {
	name: "Grenade",
	source: [["DMG24", 73]],
	type: "Explosive",
	defaultExcluded: true,
	description: "Select one of the choices.",
	descriptionFull: [
		"As an action, you can either throw a grenade at a point up to 60 feet away or use a Grenade Launcher to propel the grenade to a point up to 1,000 feet away. The grenade explodes at that point, creating a particular effect in a 20-foot-radius Sphere.",
		"***Fragmentation Grenade***. Each creature in the Sphere makes a DC 15 Dexterity saving throw, taking 17 (5d6) Piercing damage on a failed save or half as much damage on a successful one.",
		"***Smoke Grenade***. The area of the Sphere is Heavily Obscured by smoke for 1 minute. A strong wind (such as the *Gust of Wind* spell) disperses the smoke.",
	],
	action: [["action", "Throw Explosive"]],
	choices: ["Fragmentation Grenade (Rare)", "Smoke Grenade (50 gp)"],
	"fragmentation grenade (rare)": {
		name: "Fragmentation Grenade",
		sortname: "Grenade, Fragmentation",
		rarity: "Rare",
		description: "As an action, I can throw a grenade at a point up to 60 ft away or 1,000 ft with a Grenade Launcher, where it explodes. Each creatures within a 20-ft radius Sphere of that point makes a DC 15 Dexterity saving throw, taking 5d6 Piercing damage on a failed save or half as much damage on a successful one.",
		weight: 1,
		weaponsAdd: { select: ["Fragmentation Grenade"] },
		eval: function () { // make sure the weapon and ammo are not excluded
			if (CurrentSources.weapExcl.eject("grenade, fragmentation") !== -1) SetWeaponsdropdown();
			if (CurrentSources.ammoExcl.eject("grenade") !== -1) SetAmmosdropdown();
		},
	},
	"smoke grenade (50 gp)": {
		name: "Smoke Grenade",
		sortname: "Grenade, Smoke",
		rarity: "50 GP",
		description: "As an action, I can throw a grenade at a point up to 60 ft away or 1,000 ft with a Grenade Launcher, where it explodes. A 20-ft radius Sphere centered on that point is Heavily Obscured by smoke for 1 minute. A strong wind (such as the *Gust of Wind* spell) disperses the smoke.",
		weight: 2,
	},
};
// Explosives - Gunpowder
MagicItemsList["gunpowder"] = {
	name: "Gunpowder",
	source: [["DMG24", 73]],
	type: "Explosive",
	defaultExcluded: true,
	description: "Select one of the choices.",
	descriptionFull: "Setting fire to a container full of Gunpowder causes it to explode. When a container explodes, each creature in a 10-foot-radius Sphere centered on the container makes a DC 12 Dexterity saving throw, taking 10 (3d6) Fire damage (for a powder horn) or 24 (7d6) Fire damage (for a keg) on a failed save or half as much damage on a successful one.",
	allowDuplicates: true,
	choices: ["Powder Horn (35 gp)", "Keg (250 gp)"],
	"powder horn (35 gp)": {
		name: "Gunpowder (Powder Horn)",
		rarity: "50 GP",
		description: "This water-resistant horn contains explosive powder. If set on fire, the horn explodes. Each creature in a 10 ft radius Sphere centered on the horn makes a DC 12 Dexterity saving throw, taking 3d6 Fire damage on a failed save or half as much damage on a successful one.",
		weight: 2,
	},
	"keg (250 gp)": {
		name: "Gunpowder Keg",
		rarity: "250 GP",
		description: "This small wooden keg contains explosive powder. If set on fire, the keg explodes. Each creature in a 10 ft radius Sphere centered on the keg makes a DC 12 Dexterity saving throw, taking 7d6 Fire damage on a failed save or half as much damage on a successful one.",
		weight: 20,
	},
};

// pub_20250218_MM.js
// This file adds material from the 2025 Monster Manual that isn't in the SRD v5.2.1 to MPMB's Character Record Sheet for 5.5e

// Define the source
SourceList["MM24"] = {
	name: "2025 Monster Manual",
	abbreviation: "MM'25",
	group: "Primary Sources",
	url: "https://marketplace.dndbeyond.com/core-rules/3711000",
	date: "2025/02/18",
};

// Animated for Magic Items
CreatureList["animated broom"] = {
	name: "Animated Broom",
	nameThis: "broom",
	source: [["MM24", 16]],
	size: 4,
	type: "Construct",
	alignment: "Unaligned",
	ac: 15,
	hp: 14,
	hd: [4, 6],
	speed: "5 ft, Fly 10 ft (hover)",
	scores: [10, 17, 10, 1, 5, 1],
	immunities: "Poison, Psychic; Charmed, Deafened, Exhaustion, Frightened, Paralyzed, Petrified, Poisoned",
	senses: "Blindsight 60 ft",
	passivePerception: 7,
	challengeRating: "1/4",
	proficiencyBonus: 2,
	attacksAction: 1,
	addMod: [{
		type: "skill", field: "Init", mod: "Prof",
		text: "The broom adds its Proficiency Bonus to its Initiative rolls.",
	}],
	traits: [{
		name: "Flyby",
		description: "The [THIS] doesn't provoke an Opportunity Attack when it flies out of an enemy's reach.",
	}],
	attacks: [{
		name: "Slam",
		ability: 2,
		damage: [1, 4, "bludgeoning"],
		range: "Melee (5 ft)",
	}],
};
// Pact of the Chain familiar
CreatureList["slaad tadpole"] = {
	name: "Slaad Tadpole",
	nameThis: "slaad",
	source: [["MM24", 284]],
	size: 5,
	type: "Aberration",
	companion: ["pact_of_the_chain"],
	alignment: "Chaotic Neutral",
	ac: 12,
	hp: 7,
	hd: [3, 4],
	speed: "30 ft, Burrow 10 ft",
	scores: [7, 15, 10, 3, 5, 3],
	skills: {
		"stealth": 4,
	},
	resistances: "Acid, Cold, Fire, Lightning, Thunder",
	senses: "Darkvision 60 ft",
	passivePerception: 7,
	languages: "Understands Slaad but can't speak",
	challengeRating: "1/8",
	proficiencyBonus: 2,
	attacksAction: 1,
	traits: [{
		name: "Magic Resistance",
		description: "The [THIS] has Advantage on saving throws against spells and other magical effects.",
	}],
	attacks: [{
		name: "Bite",
		ability: 2,
		damage: [1, 6, "piercing"],
		range: "Melee (5 ft)",
	}],
};
// Undead
CreatureList["crawling claw"] = {
	name: "Crawling Claw",
	source: [["MM24", 83]],
	size: 5,
	type: "Undead",
	alignment: "Neutral Evil",
	ac: 12,
	hp: 2,
	hd: [1, 4],
	speed: "20 ft, Climb 20 ft",
	scores: [13, 14, 11, 5, 10, 4],
	immunities: "Necrotic, Poison; Charmed, Exhaustion, Frightened, Incapacitated, Poisoned",
	senses: "Blindsight 30 ft",
	passivePerception: 10,
	languages: "Understands Common but can't speak",
	challengeRating: "0",
	proficiencyBonus: 2,
	attacksAction: 1,
	attacks: [{
		name: "Slam",
		ability: 1,
		damage: [1, "", "necrotic"],
		range: "Melee (5 ft)",
	}],
};
// Beast
CreatureList["giant squid"] = {
	name: "Giant Squid",
	source: [["MM24", 360]],
	size: 1,
	type: "Beast",
	alignment: "Unaligned",
	ac: 12,
	hp: 120,
	hd: [16, 12],
	speed: "5 ft, Swim 80 ft",
	scores: [23, 14, 12, 5, 11, 4],
	saves: [9, 5, "", "", "", ""],
	skills: {
		"perception": 6,
	},
	senses: "Darkvision 120 ft",
	passivePerception: 16,
	challengeRating: "6",
	proficiencyBonus: 3,
	attacksAction: 2,
	features: [{
		name: "Water Breathing",
		description: "The [THIS] can breathe only underwater.",
	}],
	actions: [{
		name: "Multiattack",
		description: "As an Attack action, the [THIS] can make one Bite and one Tentacle attack.",
	}, {
		name: "Ink Cloud (1/Day)",
		description: "As a Reaction when the [THIS] takes damage while underwater, it can release ink that fills a 15-ft Cube centered on itself, and it moves up to its Swim Speed. The Cube is Heavily Obscured for 1 minute or until a strong current or similar effect disperses the ink.",
		wildshapeShow: "As a Reaction after taking damage underwater, can release a 15-ft Cube of ink on itself and move up to Swim Speed. The area is Heavily Obscured for 1 minute or until dispersed by a strong current.",
	}, {
		name: "Tentacle",
		description: "If the target is a Huge or smaller creature, it has the Grappled condition (escape DC 16) from one of two tentacles, and the [THIS] can pull the target up to 10 ft straight toward itself.",
		wildshapeShow: false,
	}],
	attacks: [{
		name: "Bite",
		ability: 1,
		damage: [4, 10, "piercing"],
		range: "Melee (5 ft)",
	}, {
		name: "Tentacle",
		ability: 1,
		damage: [3, 8, "bludgeoning"],
		range: "Melee (15 ft)",
		description: "\u2264Huge is Grappled (escape DC 16) \x26 pulled 10 ft closer",
	}],
};

// pub_20260616_RHW.js
// This file adds material from Ravenloft: The Horrors Within to MPMB's Character Record Sheet for 5.5e

SourceList["RHW"] = {
	name: "Ravenloft: The Horrors Within (incomplete)",
	abbreviation: "RHW",
	group: "Campaign Sourcebook",
	campaignSetting: "Ravenloft",
	url: "https://marketplace.dndbeyond.com/rulebooks/6015000",
	date: "2026/06/16",
};

// Subclasses
AddSubClass("sorcerer", "shadow", {
	regExpSearch: /^(?=.*shadow)(?=.*(sorcerer|sorcery)).*$/i,
	subname: "Shadow Sorcery",
	subnameShort: "Shadow",
	fullname: "Shadow Sorcerer",
	source: [["RHW", 23]],
	features: {
		"subclassfeature3": {
			name: "Eyes of the Dark",
			source: [["RHW", 24]],
			minlevel: 3,
			description: desc([
				"I can see normally through areas of Darkness created by spells that I cast.",
				"I have 120 ft Darkvision and 10 ft Blindsight.",
			]),
			vision: [["Darkvision", 120], ["Blindsight", 10]],
			spellcastingExtra: ["bane", "inflict wounds", "darkness", "pass without trace", "hunger of hadar", "nondetection", "greater invisibility", "phantasmal killer", "contagion", "creation"],
			spellcastingExtraApplyNonconform: true,
		},
		"subclassfeature3.1": {
			name: "Strength of the Grave",
			source: [["RHW", 24]],
			minlevel: 3,
			description: levels.map(function (n) {
				return desc([
					"If I would drop to 0 Hit Points and not die outright, I can make a Charisma save (DC 5 + damage taken) to instead have my Charisma modifier plus " + n + " (Sorcerer level) Hit Points.",
					"Once I succeed on this save, I can't use this feature again until I finish a Long Rest.",
				]);
			}),
			additional: levels.map(function (n) {
				return n < 3 ? "" : n + "+Cha mod";
			}),
			usages: 1,
			recovery: "Long Rest",
		},
		"subclassfeature6": {
			name: "Beasts of Ill Omen",
			source: [["RHW", 24]],
			minlevel: 6,
			description: desc([
				"As a Bonus Action, I can spend 3 Sorcery Points to cast *Summon Beast* without Material components. When I cast this spell, I can have it not require Concentration, but then its duration becomes 1 minute and it ends early if I recast it. (\u2736) I can't cast it with spell slots.",
				"Enemies within 5 ft of the summoned beast have Disadvantage on saves against my spells.",
			]),
			action: [["bonus action", " (3 SP)"]],
			additional: "3 Sorcery Points",
			spellcastingBonus: [{
				name: "Beasts of Ill Omen",
				spells: ["summon beast"],
				selection: ["summon beast"],
			}],
			spellFirstColTitle: "SP",
			spellChanges: {
				"summon beast": {
					name: "Summon Beast (\u2736)",
					time: "Bns",
					components: "V,S",
					compMaterial: "",
					duration: "1min/conc,1h",
					description: "Bestial Spirit; obeys commands; enemies in 5 ft Disadv on saves vs my spells; see Beasts of Ill Omen",
					changes: "I can cast *Summon Beast* only by expending 3 Sorcery Points, not by using spell slots. It then doesn't require a Material component and enemies within 5 ft of the summoned spirit have Disadvantage on saves against my spells. I can also choose to cast it in a way that it doesn't require concentration, but then it has a duration of 1 minute and ends early if I cast it again.",
					firstCol: 3,
				},
			},
		},
		"subclassfeature14": {
			name: "Shadow Walk",
			source: [["RHW", 24]],
			minlevel: 14,
			description: desc(
				"As a Bonus Action while I'm in Dim Light or Darkness, I can teleport up to 120 ft to an empty space that I can see that is also in Dim Light or Darkness."
			),
			actions: [["bonus action", ""]],
		},
		"subclassfeature18": {
			name: "Umbral Form",
			source: [["RHW", 24]],
			minlevel: 18,
			description: desc([
				"When I use Innate Sorcery, I can gain these benefits. I can expend 6 SP to regain use of this.",
				"***Incorporeal Movement***. I can move through creatures and objects as if they were Difficult Terrain, but I take 1d10 Force damage if I end my turn inside a creature or an object.",
				"***Shadow Resilience***. I have Resistance to all damage except Force and Radiant damage.",
			]),
			usages: 1,
			recovery: "Long Rest",
			altResource: "6 SP",
		},
	},
});
AddSubClass("warlock", "undead", {
	regExpSearch: /^(?=.*undead)(?=.*warlock).*$/i,
	subname: "Undead Patron",
	source: [["RHW", 24]],
	features: {
		"subclassfeature3": { // includes improvements from Grave Touched, Necrotic Husk and Superior Dread.
			name: "Form of Dread",
			source: [["RHW", 24]],
			minlevel: 3,
			description: levels.map(function (n) {
				var lines = [
					"As a Bonus Action, I can transform into an avatar of my patron, gaining the following benefits for 1 minute, until I am Incapacitated, or I end the form (no action).",
					"***Facsimile of Life***. I gain 1d10 + " + n + " (Warlock level) Temporary Hit Points.",
					"***Fearless Form***. I have Immunity to being Frightened. Frightened ends on transformation.",
					"***Frightful Avatar***. Once per turn when I hit a creature, I can have it make a Wisdom save or be Frightened until the end of my next turn.",
				];
				if (n >= 6) {
					lines.push("***Dreaded Necrosis***. Once per turn when I hit a creature and deal Necrotic damage, I can roll an additional damage die when determining the Necrotic damage the target takes.");
				}
				if (n >= 10) {
					lines.push("***Necrotic Resilience***. I have Immunity to Necrotic damage.");
				}
				if (n >= 14) {
					lines.push(
						"***Dread Resistance***. I have Resistance to Bludgeoning, Piercing, and Slashing damage.",
						"***Ghostly Flight***. I have a hover Fly Speed equal to my Speed. I can move through objects and creatures as if they are Difficult Terrain, taking 1d10 Force damage if I end my turn inside.",
						"***Profane Casting***. When I cast a Conjuration or Necromancy Warlock spell, I cast it without any Verbal, Somatic, or Material components, except those that are costly or consumed."
					);
				}
				return desc(lines);
			}),
			usages: "Charisma modifier per ",
			usagescalc: "event.value = Math.max(1, What('Cha Mod'));",
			recovery: "Long Rest",
			spellcastingExtra: ["bane", "blindness/deafness", "phantasmal force", "ray of sickness", "speak with dead", "summon undead", "greater invisibility", "phantasmal killer", "antilife shell", "cloudkill"],
			spellcastingExtraApplyNonconform: true,
		},
		"subclassfeature6": {
			name: "Grave Touched",
			source: [["RHW", 24]],
			minlevel: 6,
			description: " [also improves Form of Dread]" + desc([
				"***Arcane Necrosis***. Once per turn when I cast a spell that deals damage, I can change that spell's damage type to Necrotic.",
				"Necrotic damage from my attacks, Warlock spells, and Warlock features ignores Resistance.",
				"***Undead Endurance***. I don't gain Exhaustion levels from dehydration, malnutrition, or suffocation. I don't need to sleep and magic can't put me to sleep.",
			]),
			savetxt: { immune: ["Sleep magic"] },
		},
		"subclassfeature10": {
			name: "Necrotic Husk",
			source: [["RHW", 25]],
			minlevel: 10,
			description: levels.map(function (n) {
				return " [also improves Form of Dread]" + desc([
					"***Necrotic Resilience***. I have Resistance to Necrotic damage.",
					"***Unholy Resuscitation*** (1\xD7 per Short Rest). If I drop to 0 HP and don't die outright, I can cause each creature of my choice within a 30 ft Emanation to take 2d10 plus my Charisma modifier Necrotic damage. They can make a Constitution save to halve the damage.",
					"My Hit Points then change to " + (2 * n) + " (twice Warlock level) and I gain 1 Exhaustion level.",
				]);
			}),
			extraLimitedFeatures: [{
				name: "Unholy Resuscitation",
				usages: 1,
				recovery: "Short Rest",
			}],
			dmgres: ["Necrotic"],
		},
		"subclassfeature14": {
			name: "Superior Dread",
			source: [["RHW", 25]],
			minlevel: 14,
			description: " [improves Form of Dread]",
		},
	},
});

// Backgrounds


// Feats - Origin


// Feats - Dark Gift


// Magic Items


// pub_20140715_LMoP.js
// This file adds the magic items from the Lost Mines of Phandelver adventure from the D&D 5e starter set to MPMB's Character Record Sheet

// Define the source
SourceList["LMoP"] = {
	name: "Lost Mines of Phandelver [items]",
	abbreviation: "LMoP",
	group: "Legacy Adventure Books",
	campaignSetting: "Forgotten Realms",
	url: "https://www.dndbeyond.com/sources/lmop",
	date: "2014/07/15",
	defaultExcluded: true,
};

// Magic Items
MagicItemsList["dragonguard"] = {
	name: "Dragonguard",
	source: [["LMoP", 48], ["PaBTSO", 72]],
	type: "Armor (Breastplate)",
	rarity: "Rare",
	description: "This +1 breastplate has a gold dragon motif worked into its design. It grants its wearer Advantage on saving throws against the breath weapons of creatures that have the Dragon type.",
	descriptionFull: "This +1 breastplate has a gold dragon motif worked into its design. Created for a human hero of Neverwinter named Tergon, it grants its wearer advantage on saving throws against the breath weapons of creatures that have the dragon type.",
	weight: 20,
	armorOptions: [{
		regExpSearch: /dragonguard/i,
		name: "Dragonguard",
		source: [["LMoP", 48], ["PaBTSO", 72]],
		type: "medium",
		ac: "14+1",
		weight: 20,
		selectNow: true,
	}],
	savetxt: { adv_vs: ["breath weapons of Dragons"] },
}
MagicItemsList["hew"] = {
	name: "Hew",
	source: [["LMoP", 33], ["PaBTSO", 54]],
	type: "Weapon (Battleaxe)",
	rarity: "Uncommon",
	description: 'Dwarvish runes on the head of this rusty battleaxe read "Hew". It adds a +1 bonus to attack and damage rolls made with it and deals maximum damage against plant creatures or objects made of wood. While carrying it, I feel uneasy when I travel through a forest, as its creator was a dwarf smith who feuded with dryads.',
	descriptionFull: 'This rusty old battleaxe of dwarven manufacture has runes in Dwarvish on the axe head which read "*Hew*". Hew is a +1 battleaxe that deals maximum damage when the wielder hits a plant creature or an object made of wood. The axe\'s creator was a dwarf smith who feuded with the dryads of a forest where he used it for protection while he cut firewood. Whoever carries the axe feels uneasy whenever he or she travels through a forest.',
	weight: 4,
	weaponOptions: [{
		baseWeapon: "battleaxe",
		regExpSearch: /\bhew\b/i,
		name: '"Hew"',
		source: [["LMoP", 33], ["PaBTSO", 54]],
		description: "Versatile (1d10); Max damage against Plant creatures and wooden objects",
		modifiers: [1, 1],
		selectNow: true,
	}],
}
MagicItemsList["lightbringer"] = {
	name: "Lightbringer",
	source: [["LMoP", 48], ["PaBTSO", 54]],
	type: "Weapon (Mace)",
	rarity: "Uncommon",
	description: "This mace adds a +1 bonus to attack and damage rolls made with it. It is made for a cleric of the god of dawn, with its head shaped like a sunburst and made of solid brass. I can command it to glow as bright as a torch. While glowing, the mace deals an extra 1d6 Radiant damage to Undead creatures.",
	descriptionFull: "This +1 mace was made for a cleric of Lathander, the god of dawn. The head of the mace is shaped like a sunburst and is made of solid brass. Named *Lightbringer*, this weapon glows as bright as a torch when its wielder commands. While glowing, the mace deals an extra 1d6 radiant damage to undead creatures.",
	weight: 4,
	weaponOptions: [{
		baseWeapon: "mace",
		regExpSearch: /lightbringer/i,
		name: "Lightbringer",
		source: [["LMoP", 48], ["PaBTSO", 54]],
		description: "Command to glow as torch and deal +1d6 Radiant damage to Undead",
		modifiers: [1, 1],
		selectNow: true,
	}],
}
MagicItemsList["spider staff"] = { // changed to the new version introduced in Phandelver and Below: The Shattered Obelisk with the prerequisite
	name: "Spider Staff",
	source: [["LMoP", 53], ["PaBTSO", 220]],
	type: "Staff",
	rarity: "Rare",
	description: "Attacks with this black adamantine quarterstaff topped with a spider deal +1d6 Poison damage on a hit. It has 10 charges and regains 1d6+4 expended charges at dawn. If I use its last charge, roll a d20. On a 1, it is destroyed. I can use its charges to cast *Spider Climb* (1 charge) or *Web* (2 charges, spell save DC 15).",
	descriptionFull: "The top of this black, adamantine staff is shaped like a spider. The staff weighs 6 pounds. You must be attuned to the staff to gain its benefits and cast its spells. The staff can be wielded as a quarterstaff. It deals 1d6 extra poison damage on a hit when used to make a weapon attack.\n   The staff has 10 charges, which are used to fuel the spells within it. With the staff in hand, you can use your action to cast one of the following spells from the staff if the spell is on your class's spell list: *Spider Climb* (1 charge) or *Web* (2 charges, spell save DC 15). No components are required.\n   The staff regains 1d6+4 expended charges each day at dusk. If you expend the staff's last charge, roll a d20. On a 1, the staff crumbles to dust and is destroyed.",
	attunement: true,
	prerequisite: "Requires attunement by a bard, sorcerer, warlock, or wizard",
	prereqeval: function (v) { return classes.known.bard || classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false; },
	weight: 6, // kept to the original weight
	usages: 10,
	recovery: "dawn",
	additional: "regains 1d6+4",
	weaponOptions: [{
		baseWeapon: "quarterstaff",
		regExpSearch: /^(?=.*spider)(?=.*staff).*$/i,
		name: "Spider Staff",
		source: [["LMoP", 53], ["PaBTSO", 220]],
		description: "Versatile (1d8); +1d6 Poison damage",
		selectNow: true,
	}],
	fixedDC: 15,
	spellFirstColTitle: "Ch",
	spellcastingBonus: [{
		name: "1 charge",
		spells: ["spider climb"],
		selection: ["spider climb"],
		firstCol: 1,
	}, {
		name: "2 charges",
		spells: ["web"],
		selection: ["web"],
		firstCol: 2,
	}],
}
MagicItemsList["staff of defense"] = { // changed to the new version introduced in Phandelver and Below: The Shattered Obelisk with the prerequisite
	name: "Staff of Defense",
	source: [["LMoP", 53]],
	type: "Staff",
	rarity: "Rare",
	description: "This slender, hollow staff is made of glass yet is as strong as oak. While holding it, I gain a +1 bonus to AC. It has 10 charges and regains 1d6+4 expended charges at dawn. If I use its last charge, roll a d20. On a 1, it is destroyed. I can use its charges to cast *Mage Armor* (1 charge) or *Shield* (2 charges) as an action.",
	descriptionFull: "This slender, hollow staff is made of glass yet is as strong as oak. It weighs 3 pounds. You must be attuned to the staff to gain its benefits and cast its spells.\n   While holding the staff, you have a +1 bonus to your Armor Class.\n   The staff has 10 charges, which are used to fuel the spells within it. With the staff in hand, you can use your action to cast one of the following spells from the staff if the spell is on your class's spell list: *Mage Armor* (1 charge) or *Shield* (2 charges). No components are required.\n   The staff regains 1d6+4 expended charges each day at dawn. If you expend the staff's last charge, roll a d20. On a 1, the staff shatters and is destroyed.",
	attunement: true,
	prerequisite: "Requires attunement by a bard, sorcerer, warlock, or wizard",
	prereqeval: function (v) { return classes.known.bard || classes.known.sorcerer || classes.known.warlock || classes.known.wizard ? true : false; },
	weight: 3,
	usages: 10,
	recovery: "dawn",
	additional: "regains 1d6+4",
	spellcastingAbility: "class",
	spellFirstColTitle: "Ch",
	weaponsAdd: { options: ["Staff of Defense"] },
	spellcastingBonus: [{
		name: "1 charge",
		spells: ["mage armor"],
		selection: ["mage armor"],
		firstCol: 1,
	}, {
		name: "2 charges",
		spells: ["shield"],
		selection: ["shield"],
		firstCol: 2,
	}],
	spellChanges: {
		"shield": {
			time: "Act",
			timeFull: "",
			changes: "Cast as an action.",
		},
	},
	extraAC: [{ name: "Staff of Defense", mod: 1, magic: true, text: "I gain a +1 bonus to AC while holding the Staff of Defense." }],
}

// legacy_20140819_PHB.js
// This file adds options from the 2014 Player's Handbook to MPMB's Character Record Sheet that have not been replaced with new options in the 2024 Player's Handbook or other rulebooks for the 2024 rules

// Define the source
SourceList["P"] = {
	name: "2014 Player's Handbook",
	abbreviation: "PHB'14",
	abbreviationSpellsheet: "P",
	group: "Legacy Sources",
	url: "https://marketplace.dndbeyond.com/core-rules/players-handbook?pid=SRC-00002",
	date: "2014/08/19",
	defaultExcluded: true,
};

// Races
RaceList["half-elf"] = {
	regExpSearch: /^(?=.*half)(?=.*(elf|elv|drow|silvanesti|qualinesti|grugach|kagonesti)).*$/i,
	name: "Half-elf",
	source: [["SRD", 6], ["P", 39]],
	plural: "Half-elves",
	size: 3,
	speed: {
		walk: { spd: 30, enc: 20 },
	},
	languageProfs: ["Common", "Elvish", 1],
	vision: [["Darkvision", 60]],
	savetxt: {
		text: ["Magic can't put me to sleep"],
		adv_vs: ["Charmed"],
	},
	skillstxt: "Choose any two skills",
	age: " reach adulthood around age 20 and often live over 180 years",
	height: " range from 5 to 6 feet tall (4'9\" + 2d8\")",
	weight: " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)",
	heightMetric: " range from 1,5 to 1,8 metres tall (145 + 5d8 cm)",
	weightMetric: " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)",
	trait: [
		"**Half-Elf**",
		"##\u25C6 Fey Ancestry##. I have Advantage on saving throws against being Charmed, and magic can't put me to sleep.",
		"##\u25C6 Skill Versatility##. I gain proficiency in two skills of my choice.",
	].join("\n"),
};
RaceList["half-orc"] = {
	regExpSearch: /^(?=.*half)(?=.*\bor(c|k)).*$/i,
	name: "Half-orc",
	source: [["SRD", 7], ["P", 41]],
	plural: "Half-orcs",
	size: 3,
	speed: {
		walk: { spd: 30, enc: 20 },
	},
	languageProfs: ["Common", "Orc"],
	vision: [["Darkvision", 60]],
	skills: ["Intimidation"],
	age: " reach adulthood around age 14 and rarely live longer than 75 years",
	height: " range from 5 to well over 6 feet tall (4'10\" + 2d10\")",
	weight: " weigh around 215 lb (140 + 2d10 \xD7 2d6 lb)",
	heightMetric: " range from 1,5 to well over 1,8 metres tall (150 + 5d10 cm)",
	weightMetric: " weigh around 100 kg (65 + 5d10 \xD7 4d6 / 10 kg)",
	features: {
		"relentless endurance": {
			name: "Relentless Endurance",
			minlevel: 1,
			usages: 1,
			recovery: "Long Rest",
		},
		"savage attacks": {
			name: "Savage Attacks",
			minlevel: 1,
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (v.isMeleeWeapon && (/d\d+/).test(fields.Damage_Die)) {
							if (v.extraCritM) {
								v.extraCritM += 1;
								var extraCritRegex = /\d+(d\d+ extra on a crit(ical)?( hit)? in melee)/i;
								fields.Description = fields.Description.replace(extraCritRegex, v.extraCritM + "$1");
							} else {
								v.extraCritM = 1;
								fields.Description += (fields.Description ? "; " : "") + v.extraCritM + fields.Damage_Die.replace(/.*(d\d+).*/, "$1") + " extra on a crit in melee";
							};
						};
					},
					"My melee weapon attacks roll 1 additional dice on a critical hit.",
					900,
				],
			},
		},
	},
	trait: [
		"**Half-Orc**",
		"##\u25C6 Relentless Endurance##. When I am reduced to 0 hit points but not killed outright, I can drop to 1 hit point instead. I can't use this feature again until I finish a Long Rest.",
		"##\u25C6 Savage Attacks##. When I score a critical hit with a melee weapon attack, I can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit.",
	].join("\n"),
};

// Eldritch Invocations
AddWarlockInvocation("Beast Speech", {
	name: "Beast Speech",
	source: [["SRD", 48], ["P", 110]],
	description: desc("I can cast *Speak with Animals* without using a spell slot."),
	spellcastingBonus: [{
		name: "Beast Speech",
		spells: ["speak with animals"],
		selection: ["speak with animals"],
		firstCol: "atwill",
	}],
});
AddWarlockInvocation("Beguiling Influence", {
	name: "Beguiling Influence",
	source: [["SRD", 48], ["P", 110]],
	description: desc("I gain proficiencies with the Deception and Persuasion skills."),
	skills: ["Deception", "Persuasion"],
});
AddWarlockInvocation("Bewitching Whispers (req: lvl 7+)", {
	name: "Bewitching Whispers",
	source: [["SRD", 48], ["P", 110]],
	minlevel: 7,
	submenu: "[Warlock level  7+]",
	description: desc("Once per Long Rest, I can cast *Compulsion* using a Pact Magic spell slot."),
	spellcastingBonus: [{
		name: "Bewitching Whispers",
		spells: ["compulsion"],
		selection: ["compulsion"],
		firstCol: "oncelr",
	}],
});
AddWarlockInvocation("Book of Ancient Secrets (req: Pact of the Tome)", {
	name: "Book of Ancient Secrets",
	description: desc("My Book of Shadows is inscribed with two 1st-level Ritual spells of my choice. When I come across other Ritual spell, I can inscribe them as well. I can cast these inscribed spells as Rituals, they are not automatically prepared. (Select only these inscribed spells in the 'Spells' column.)"),
	source: [["SRD", 48], ["P", 110]],
	submenu: "[improves Pact of the Tome]",
	prereqeval: function (v) { return v.choiceActive.indexOf("pact of the tome") !== -1; },
	eval: function () {
		var oSpells = CurrentSpells["warlock-book of shadows"];
		if (!oSpells) return;
		// Change into a "book" caster that has access to ritual spells from any level
		oSpells.known.spells = "book";
		oSpells.typeSp = "book";
		oSpells.typeList = 2;
		oSpells.list.level = [0, 9];
		// Make it so that all cantrips are always displayed
		oSpells.known.cantripsPrepare = true;
		oSpells.preparedCantrips = true;
		// Add it so that all 1st-level ritual spells are always displayed
		oSpells.extra = CreateSpellList({ ritual: true, level: [1, 1] });
		oSpells.extraSpecial = true;
		SetStringifieds("spells"); CurrentUpdates.types.push("spells");
		// cleanup old versions of this invocation
		if (CurrentSpells["warlock-book of ancient secrets"] || CurrentSpells["book of ancient secrets"]) {
			var oSpellsOld = CurrentSpells["book of ancient secrets"] ? CurrentSpells["book of ancient secrets"] : CurrentSpells["warlock-book of ancient secrets"];
			if (oSpellsOld.selectSp) oSpells.selectSp = oSpellsOld.selectSp;
			if (oSpellsOld.offsetBo) oSpells.offsetBo = oSpellsOld.offsetBo;
			if (oSpellsOld.selectBo) oSpells.selectBo = oSpellsOld.selectBo;
			delete CurrentSpells["warlock-book of ancient secrets"];
			delete CurrentSpells["book of ancient secrets"];
		};
	},
	removeeval: function () {
		if (CurrentSpells["book of ancient secrets"]) delete CurrentSpells["book of ancient secrets"];
		var oSpells = CurrentSpells["warlock-book of shadows"];
		if (!oSpells) return;
		oSpells.known.spells = "list";
		oSpells.typeSp = "list";
		oSpells.list.level = [0, 1];
		delete oSpells.known.cantripsPrepare;
		delete oSpells.preparedCantrips;
		delete oSpells.extra;
		delete oSpells.extraSpecial;
		SetStringifieds("spells"); CurrentUpdates.types.push("spells");
	},
	calcChanges: {
		spellAdd: [
			function (spellKey, spellObj, spName) {
				if (spName !== "warlock-book of shadows") return;
				var oSpells = CurrentSpells[spName];
				if (oSpells.selectSp.indexOf(spellKey)) {
					spellObj.firstCol = SpellRitualTag;
					if (!/.*(\d+ ?h\b|special|see b).*/i.test(spellObj.time)) {
						var numMinutes = Number(spellObj.time.replace(/(\d+) ?min.*/, "$1"));
						if (isNaN(numMinutes)) numMinutes = 0;
						spellObj.time = (numMinutes + 10) + " min";
					};
					return true;
				};
			},
			"By the Book of Ancient Secrets invocation, I can cast any Ritual spells I've added to my Book of Shadows, but only as a Ritual. Ritual spell always have a casting time of 10 minutes or more. The sheet assumes any Ritual spells above 1st-level are manual additions.",
		],
	},
});
AddWarlockInvocation("Chains of Carceri (req: lvl 15+, Pact of the Chain)", {
	name: "Chains of Carceri",
	source: [["SRD", 49], ["P", 110]],
	minlevel: 15,
	submenu: ["[Warlock level 15+]", "[improves Pact of the Chain]"],
	prereqeval: function (v) { return v.choiceActive.indexOf("pact of the chain") !== -1; },
	description: desc("I can cast *Hold Monster* without expending a spell slot or material components, but only on a Celestial, Fiend, or Elemental. I can only target a specific individual once per Long Rest."),
	spellcastingBonus: [{
		name: "Chains of Carceri",
		spells: ["hold monster"],
		selection: ["hold monster"],
		firstCol: "atwill",
	}],
	spellChanges: {
		"hold monster": {
			components: "V,S",
			compMaterial: "",
			description: "1 Celestial, Fiend, or Elemental, save or Paralyzed; extra save at end of each turn",
			changes: "With the Chains of Carceri invocation I can cast *Hold Monster* without a material component, but only on a Celestial, Fiend, or Elemental.",
		},
	},
});
AddWarlockInvocation("Dreadful Word (req: lvl 7+)", {
	name: "Dreadful Word",
	source: [["SRD", 49], ["P", 110]],
	minlevel: 7,
	submenu: "[Warlock level  7+]",
	description: desc("Once per Long Rest, I can cast *Confusion* using a Pact Magic spell slot."),
	spellcastingBonus: [{
		name: "Dreadful Word",
		spells: ["confusion"],
		selection: ["confusion"],
		firstCol: "oncelr",
	}],
});
AddWarlockInvocation("Eldritch Sight", {
	name: "Eldritch Sight",
	source: [["SRD", 49], ["P", 110]],
	description: desc("I can cast *Detect Magic* without expending a spell slot."),
	spellcastingBonus: [{
		name: "Eldritch Sight",
		spells: ["detect magic"],
		selection: ["detect magic"],
		firstCol: "atwill",
	}],
});
AddWarlockInvocation("Eyes of the Rune Keeper", {
	name: "Eyes of the Rune Keeper",
	source: [["SRD", 49], ["P", 111]],
	description: " [I can read all writing]",
});
AddWarlockInvocation("Minions of Chaos", {
	name: "Minions of Chaos",
	source: [["SRD", 49], ["P", 111]],
	minlevel: 9,
	submenu: "[Warlock level  9+]",
	description: desc("Once per Long Rest, I can cast *Conjure Elemental* using a Pact Magic spell slot."),
	spellcastingBonus: [{
		name: "Minions of Chaos",
		spells: ["conjure elemental"],
		selection: ["conjure elemental"],
		firstCol: "oncelr",
	}],
});
AddWarlockInvocation("Mire the Mind", {
	name: "Mire the Mind",
	source: [["SRD", 49], ["P", 111]],
	minlevel: 5,
	submenu: "[Warlock level  5+]",
	description: desc("Once per Long Rest, I can cast *Slow* using a Pact Magic spell slot."),
	spellcastingBonus: [{
		name: "Mire the Mind",
		spells: ["slow"],
		selection: ["slow"],
		firstCol: "oncelr",
	}],
});
AddWarlockInvocation("Sculptor of Flesh", {
	name: "Sculptor of Flesh",
	source: [["SRD", 50], ["P", 111]],
	minlevel: 7,
	submenu: "[Warlock level  7+]",
	description: desc("Once per Long Rest, I can cast *Polymorph* using a Pact Magic spell slot."),
	spellcastingBonus: [{
		name: "Sculptor of Flesh",
		spells: ["polymorph"],
		selection: ["polymorph"],
		firstCol: "oncelr",
	}],
});
AddWarlockInvocation("Sign of Ill Omen", {
	name: "Sign of Ill Omen",
	source: [["SRD", 50], ["P", 111]],
	minlevel: 5,
	submenu: "[Warlock level  5+]",
	description: desc("Once per Long Rest, I can cast *Bestow Curse* using a Pact Magic spell slot."),
	spellcastingBonus: [{
		name: "Sign of Ill Omen",
		spells: ["bestow curse"],
		selection: ["bestow curse"],
		firstCol: "oncelr",
	}],
});
AddWarlockInvocation("Thief of Five Fates", {
	name: "Thief of Five Fates",
	source: [["SRD", 50], ["P", 111]],
	description: desc("Once per Long Rest, I can cast *Bane* using a Pact Magic spell slot."),
	spellcastingBonus: [{
		name: "Thief of Five Fates",
		spells: ["bane"],
		selection: ["bane"],
		firstCol: "oncelr",
	}],
});
AddWarlockInvocation("Voice of the Chain Master", {
	name: "Voice of the Chain Master",
	source: [["SRD", 50], ["P", 111]],
	submenu: "[improves Pact of the Chain]",
	prereqeval: function (v) { return v.choiceActive.indexOf("pact of the chain") !== -1; },
	description: desc("While on the same plane as my familiar, I can communicate telepathically with it and I can perceive through its senses. While doing the latter, I can speak through it with my voice."),
});

// Subclasses
AddSubClass("cleric", "nature domain", {
	regExpSearch: /^(?=.*(cleric|priest|clergy|acolyte))(?=.*\b(nature|natural|animal|element(s|al)?)\b).*$/i,
	subname: "Nature Domain",
	source: [["P", 62]],
	features: {
		"subclassfeature3.0": {
			name: "Bonus Proficiency",
			source: [["P", 62]],
			minlevel: 3,
			description: desc("I gain proficiency with heavy armor"),
			armorProfs: [false, false, true, false],
			spellcastingExtra: ["animal friendship", "speak with animals", "barkskin", "spike growth", "plant growth", "wind wall", "dominate beast", "grasping vine", "insect plague", "tree stride"],
		},
		"subclassfeature3.1": {
			name: "Acolyte of Nature",
			source: [["P", 62]],
			minlevel: 3,
			description: desc("I learn a druid cantrip and proficiency with a skill: Animal Handling, Nature, Survival"),
			skillstxt: "Choose one from Animal Handling, Nature, or Survival",
			spellcastingBonus: [{
				name: "Acolyte of Nature",
				"class": "druid",
				level: [0, 0],
			}],
		},
		"subclassfeature3.2": {
			name: "Charm Animals and Plants",
			source: [["P", 62]],
			minlevel: 3,
			description: desc([
				"As an action, all Beasts and Plants within 30 ft that I can see must make a Wis save",
				"If failed, each is Charmed and friendly to allies and me for 1 min or until damaged",
			]),
			additional: "1 Channel Divinity",
			action: [["action", ""]],
		},
		"subclassfeature6": {
			name: "Dampen Elements",
			source: [["P", 62]],
			minlevel: 6,
			description: desc([
				"As a Reaction, if an ally in 30 ft or I takes Acid/Cold/Fire/Lightning/Thunder damage,",
				"I can grant resistance against that instance of damage",
			]),
			action: [["reaction", ""]],
		},
		"subclassfeature17": {
			name: "Master of Nature",
			source: [["P", 62]],
			minlevel: 17,
			description: desc("As a Bonus Action, I can command creatures that are Charmed by my Channel Divinity"),
			action: [["bonus action", ""]],
		},
	},
});
AddSubClass("cleric", "tempest domain", {
	regExpSearch: /^(?=.*(cleric|priest|clergy|acolyte))(?=.*\b(tempest|destruction|storm)\b).*$/i,
	subname: "Tempest Domain",
	source: [["P", 62]],
	features: {
		"subclassfeature3.0": {
			name: "Bonus Proficiency",
			source: [["P", 62]],
			minlevel: 3,
			description: desc("I gain proficiency with martial weapons and heavy armor"),
			armorProfs: [false, false, true, false],
			weaponProfs: [false, true],
			spellcastingExtra: ["fog cloud", "thunderwave", "gust of wind", "shatter", "call lightning", "sleet storm", "control water", "ice storm", "destructive wave", "insect plague"],
		},
		"subclassfeature3.1": {
			name: "Wrath of the Storm",
			source: [["P", 62]],
			minlevel: 3,
			description: desc([
				"As a Reaction, when a creature I can see within 5 ft hits me, I can thunderously rebuke",
				"It takes 2d8 Lightning or Thunder damage (my choice) that a Dex save can halve",
			]),
			usages: "Wisdom modifier per ",
			usagescalc: "event.value = Math.max(1, What('Wis Mod'));",
			recovery: "Long Rest",
			action: [["reaction", ""]],
		},
		"subclassfeature3.2": {
			name: "Destructive Wrath",
			source: [["P", 62]],
			minlevel: 3,
			description: desc("Instead of rolling, I can do maximum damage when I do Lightning or Thunder damage"),
			additional: "1 Channel Divinity",
		},
		"subclassfeature6": {
			name: "Thunderbolt Strike",
			source: [["P", 62]],
			minlevel: 6,
			description: desc("When I deal Lightning damage to a Large or smaller foe, I can push it up to 10 ft away"),
		},
		"subclassfeature17": {
			name: "Stormborn",
			source: [["P", 62]],
			minlevel: 17,
			description: desc("Whenever I'm not underground or indoors, I have a Fly Speed equal to my current speed"),
			speed: { fly: { spd: "walk", enc: "walk" } },
		},
	},
});

// Background Features
BackgroundFeatureList["shelter of the faithful"] = { // from Acolyte
	description: "I command the respect of those who share my faith. I can perform the religious ceremonies of my faith. My companions and I can expect free healing and care at an establishment of my faith, though I must provide any material components needed for spells. Those who share my religion will support me at a modest lifestyle.",
	source: [["SRD", 61], ["P", 127]],
};
BackgroundFeatureList["false identity"] = { // from Charlatan
	description: "I have created a second identity that includes documentation, established acquaintances, and disguises that allow me to assume that persona. Additionally, I can forge documents, including official papers and personal letters, as long as I have seen an example of the kind of document or the handwriting I am trying to copy.",
	source: [["P", 128]],
};
BackgroundFeatureList["criminal contact"] = { // from Criminal
	description: "I have a reliable and trustworthy contact who acts as my liaison to a network of other criminals. I know how to get messages to and from my contact, even over great distances; specifically, I know the local messengers, corrupt caravan masters, and seedy sailors who can deliver my messages.",
	source: [["P", 129]],
};
BackgroundFeatureList["by popular demand"] = { // from Entertainer
	description: "I can always find a place to perform (inn/tavern/circus/etc.), where I receive free lodging and food of a modest or comfortable standard, as long as I perform each night. In addition, my performance makes me something of a local figure. When strangers recognize me in a town where I have performed, they typically take a liking to me.",
	source: [["P", 130]],
};
BackgroundFeatureList["are you entertained?"] = { // from Gladiator
	description: "I can always find a place to perform (arena/pit fight), where I receive free lodging and food of a modest or comfortable standard, as long as I perform each night. In addition, my performance makes me something of a local figure. When strangers recognize me in a town where I have performed, they typically take a liking to me.",
	source: [["P", 131]],
};
BackgroundFeatureList["rustic hospitality"] = { // from Folk Hero
	description: "Since I come from the ranks of the common folk, I fit in among them with ease. I can find a place to hide, rest, or recuperate among other commoners, unless I have shown myself to be a danger to them. They will shield me from the law or anyone else searching for me, though they will not risk their lives for me.",
	source: [["P", 131]],
};
BackgroundFeatureList["guild membership"] = { // from Guild Artisan
	description: "5 gp membership fees per month: The guild offers lodging if possible. In case of being accused of a crime, the guild will support me if a good case can be made for my innocence or the crime is justifiable. I can also gain access to powerful political figures through the guild, as long as I'm in good standing and the guild is paid enough.",
	source: [["P", 133]],
};
BackgroundFeatureList["discovery"] = { // from Hermit
	description: "The quiet seclusion of my extended hermitage gave me access to a unique and powerful discovery. The exact nature of this revelation depends on the nature of my seclusion. It might be a great truth, a hidden site, a long forgotten fact, or unearthed some relic of the past that could rewrite history.",
	source: [["P", 134]],
};
BackgroundFeatureList["position of privilege"] = { // from Noble
	description: "I am welcome in high society, and people assume I have the right to be wherever I am. The common folk make every effort to accommodate me and avoid my displeasure, and other people of high birth treat me as a member of the same social sphere. I can secure an audience with a local noble if I need to.",
	source: [["P", 135]],
};
BackgroundFeatureList["retainers"] = { // from Knight
	description: "I have the service of three retainers loyal to my family, one of whom is another noble and my squire. My other retainers are commoners who can perform mundane tasks for me, but they do not fight for me, will not follow me into obviously dangerous areas (such as dungeons), and will leave if they are frequently endangered or abused.",
	source: [["P", 136]],
};
BackgroundFeatureList["wanderer"] = { // from Outlander
	description: "I have an excellent memory for maps and geography, and I can always recall the general layout of terrain, settlements, and other features around me. In addition, I can find food and fresh water for myself and up to five other people each day, provided that the land offers berries, small game, water, and so forth.",
	source: [["P", 136]],
};
BackgroundFeatureList["researcher"] = { // from Researcher
	description: "When I attempt to learn or recall a piece of lore, if I do not know that information, I often know where and from whom I can obtain it. Usually, this information comes from a library, scriptorium, university, or a sage or other learned person or creature. Unearthing the deepest secrets of the multiverse can require an adventure or even a whole campaign.",
	source: [["P", 138]],
};
BackgroundFeatureList["ship's passage"] = { // from Sailor
	description: "When I need to, I can secure free passage on a sailing ship for myself and my companions. I might sail on the ship I served on, or another ship I have good relations with. Because I'm calling in a favor, I can't be certain of a schedule or route that will meet my every need. My companions and I are expected to assist the crew during the voyage.",
	source: [["P", 139]],
};
BackgroundFeatureList["bad reputation"] = { // from Pirate
	description: "No matter where I go, people are afraid of me due to my reputation. When I am in a civilized settlement, I can get away with minor criminal offenses, such as refusing to pay for food at a tavern or breaking down doors at a local shop, since most people will not report my activity to the authorities.",
	source: [["P", 139]],
};
BackgroundFeatureList["military rank"] = { // from Soldier
	description: "I have a military rank from my career as a soldier. Soldiers loyal to my former military organization still recognize my authority and influence. I can invoke my rank to influence soldiers and temporarily requisition simple equipment or horses. I can usually gain access to friendly military encampments and fortresses where my rank is recognized.",
	source: [["P", 140]],
};
BackgroundFeatureList["city secrets"] = { // from Urchin
	description: "I know the secret patterns and flow to cities and can find passages through the urban sprawl that others would miss. When I am not in combat, I (and companions I lead) can travel between any two locations in the city twice as fast as my speed would normally allow.",
	source: [["P", 141]],
};

// Feats
FeatsList["dungeon delver"] = {
	name: "Dungeon Delver",
	source: [["P", 166]],
	description: "I have Adv on Wis (Perception) and Int (Investigation) checks made to detect the presence of secret doors. I have resistance to damage dealt by traps and Advantage on saves to avoid or resist traps. Travelling at a fast pace doesn't impose -5 on my passive Perception.",
	descriptionFull: [
		"Alert to the hidden traps and secret doors found in many dungeons, you gain the following benefits:",
		" \u2022 You have advantage on Wisdom (Perception) and Intelligence (Investigation) checks made to detect the presence of secret doors.",
		" \u2022 You have advantage on saving throws made to avoid or resist traps.",
		" \u2022 You have resistance to the damage dealt by traps.",
		" \u2022 Traveling at a fast pace doesn't impose the normal -5 penalty on your passive Wisdom (Perception) score.",
	],
	dmgres: ["Traps"],
	savetxt: { adv_vs: ["traps"] },
	vision: [
		["Adv on Perception and Investigation for secret doors", 0],
		["No -5 for travelling at fast pace", 0],
	],
};
FeatsList["linguist"] = {
	name: "Linguist",
	source: [["P", 167]],
	description: "",
	calculate: "event.value = \"I can ably create written ciphers that others can't decipher unless I teach them, they succeed on an Intelligence check DC \" + (Number(What('Int')) + Number(How('Proficiency Bonus'))) + ' (Intelligence score + proficiency bonus), or they use magic to decipher it. I learn three languages of my choice. [+1 Intelligence]';",
	descriptionFull: [
		"You have studied languages and codes, gaining the following benefits:",
		" \u2022 Increase your Intelligence score by 1, to a maximum of 20.",
		" \u2022 You learn three languages of your choice.",
		" \u2022 You can ably create written ciphers. Others can't decipher a code you create unless you teach them, they succeed on an Intelligence check (DC equal to your Intelligence score + your proficiency bonus), or they use magic to decipher it.",
	],
	scores: [0, 0, 0, 1, 0, 0],
	languageProfs: [3],
};
FeatsList["martial adept"] = {
	name: "Martial Adept",
	source: [["P", 168]],
	description: "",
	calculate: "event.value = 'I learn two maneuvers of my choice from those available to the Battle Master (2nd page \"Choose Feature\" button). The saving throw DC for this is ' + (8 + Number(How('Proficiency Bonus')) + Math.max(Number(What('Str Mod')), Number(What('Dex Mod')))) + ' (8 + proficiency bonus + Str/Dex mod). I gain one superiority die (d6), which I regain when I finish a Short Rest.';",
	descriptionFull: [
		"You have martial training that allows you to perform special combat maneuvers. You gain the following benefits:",
		" \u2022 You learn two maneuvers of your choice from among those available to the Battle Master archetype in the fighter class. If a maneuver you use requires your target to make a saving throw to resist the maneuver's effects, the saving throw DC equals 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice).",
		" \u2022 You gain one superiority die, which is a d6 (this die is added to any superiority dice you have from another source). This die is used to fuel your maneuvers. A superiority die is expended when you use it. You regain your expended superiority dice when you finish a short or long rest.",
	],
	bonusClassExtrachoices: [{
		"class": "fighter",
		subclass: "fighter-battle master",
		feature: "subclassfeature3.1",
		bonus: 2,
	}],
	extraLimitedFeatures: [{
		name: "Superiority Dice",
		usages: 1,
		additional: "d6",
		recovery: "Short Rest",
		addToExisting: true,
	}],
};

// Adventuring Gear
[{
	key: "abacus",
	infoname: "Abacus [2 gp]",
	name: "Abacus",
	weight: 2,
}, {
	key: "bit and bridle",
	infoname: "Bit and bridle [2 gp]",
	name: "Bit and bridle",
	weight: 1,
}, {
	key: "chalk (1 piece)",
	infoname: "Chalk (1 piece) [1 cp]",
	name: "Chalk, pieces of",
}, {
	key: "common",
	infoname: "Common [5 sp]",
	name: "Common clothes",
	weight: 3,
	type: "clothes",
}, {
	key: "totem",
	infoname: "Totem [1 gp]",
	name: "Totem druidic focus",
	type: "druidic focus",
}, {
	key: "fishing tackle",
	infoname: "Fishing tackle [1 gp]",
	name: "Fishing tackle",
	weight: 4,
}, {
	key: "hammer",
	infoname: "Hammer [1 gp]",
	name: "Hammer",
	weight: 3,
}, {
	key: "hammer, sledge",
	infoname: "Hammer, sledge [2 gp]",
	name: "Sledge hammer",
	weight: 10,
}, {
	key: "hourglass",
	infoname: "Hourglass [25 gp]",
	name: "Hourglass",
	weight: 1,
}, {
	key: "small knife",
	infoname: "Small Knife [1 sp]",
	name: "Small Knife",
	weight: 0.25,
}, {
	key: "mess kit",
	infoname: "Mess kit [2 sp]",
	name: "Mess kit",
	weight: 1,
}, {
	key: "pick, miner's",
	infoname: "Pick, miner's [2 gp]",
	name: "Miner's pick",
	weight: 10,
}, {
	key: "piton",
	infoname: "Piton [5 cp]",
	name: "Piton",
	weight: 0.25,
}, {
	key: "rope, hempen (50 feet)",
	infoname: "Rope, hempen (50 feet) [1 gp]",
	name: "Hempen rope, feet of",
	amount: 50,
	weight: 0.2,
}, {
	key: "rope, silk (50 feet)",
	infoname: "Rope, silk (50 feet) [10 gp]",
	name: "Silk rope, feet of",
	amount: 50,
	weight: 0.1,
}, {
	key: "saddle, pack",
	infoname: "Pack [5 gp]",
	name: "Pack saddle",
	weight: 15,
	type: "saddle",
}, {
	key: "saddlebags",
	infoname: "Saddlebags [4 gp]",
	name: "Saddlebags",
	weight: 8,
}, {
	key: "scale, merchant's",
	infoname: "Scale, merchant's [5 gp]",
	name: "Merchant's scale",
	weight: 3,
}, {
	key: "sealing wax",
	infoname: "Sealing wax [5 cp]",
	name: "Sealing wax",
}, {
	key: "signet ring",
	infoname: "Signet ring [5 gp]",
	name: "Signet ring",
}, {
	key: "soap",
	infoname: "Soap [2 cp]",
	name: "Soap",
}, {
	key: "whetstone",
	infoname: "Whetstone [1 cp]",
	name: "Whetstone",
	weight: 1,
}].forEach(function (obj) {
	GearList[obj.key] = {
		infoname: obj.infoname,
		source: [["P", 150]],
		name: obj.name,
		amount: obj.amount !== undefined ? obj.amount : "",
		weight: obj.weight !== undefined ? obj.weight : "",
	}
})

// pub_20141209_DMG.js
// This file adds all the player-material from the Dungeon Master's Guide to MPMB's Character Record Sheet

// Define the source
SourceList["D"] = {
	name: "2014 Dungeon Master's Guide",
	abbreviation: "DMG'14",
	group: "Legacy Sources",
	url: "https://dnd.wizards.com/products/dungeon-masters-guide",
	date: "2014/12/09",
	defaultExcluded: true,
};

// Subclasses
AddSubClass("cleric", "death domain", {
	regExpSearch: /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(death|dead|dying)).*$/i,
	subname: "Death Domain",
	source: [["D", 96]],
	features: {
		"subclassfeature3.0": {
			name: "Bonus Proficiency",
			source: [["D", 96]],
			minlevel: 3,
			description: desc("I gain proficiency with martial weapons"),
			weaponProfs: [false, true],
			spellcastingExtra: ["false life", "ray of sickness", "blindness/deafness", "ray of enfeeblement", "animate dead", "vampiric touch", "blight", "death ward", "antilife shell", "cloudkill"],
		},
		"subclassfeature3.1": {
			name: "Reaper",
			source: [["D", 96]],
			minlevel: 3,
			description: desc([
				"I learn one necromancy cantrip of my choice from any spell list",
				"My necromancy, single-target cantrips can affect two targets within 5 ft of each other",
			]),
			spellcastingBonus: [{
				name: "Reaper",
				"class": "any",
				school: ["Necro"],
				level: [0, 0],
			}],
			calcChanges: {
				spellAdd: [
					function (spellKey, spellObj, spName) {
						if (spellObj.school == "Necro" && spellObj.level === 0) {
							var startDescr = spellObj.description;
							switch (spellKey) {
								case "chill touch" :
									spellObj.description = spellObj.description.replace("Spell attack", "2 crea in 5 ft spell atk").replace("Necrotic", "Necro.").replace("at CL 5, 11, and 17", "CL 5/11/17");
									break;
								case "spare the dying" :
									spellObj.description = spellObj.description.replace("1 living creature", "1 living creature (or 2 within 5 ft of each other)");
									break;
								case "toll the dead" :
								default :
									spellObj.description = spellObj.description.replace(/1 crea(ture)?/i, "2 crea in 5 ft").replace("disadvantage", "Disadv").replace("save halves", "save half");
							}
							return startDescr !== spellObj.description;
						};
					},
					"My necromancy, single-target cantrips can affect two targets within 5 ft of each other.",
				],
			},
		},
		"subclassfeature3.2": {
			name: "Touch of Death",
			source: [["D", 97]],
			minlevel: 3,
			description: desc("When I hit a creature with a melee attack, I can deal extra Necrotic damage"),
			additional: ["", "+9 damage; 1 CD", "+11 damage; 1 CD", "+13 damage; 1 CD", "+15 damage; 1 CD", "+17 damage; 1 CD", "+19 damage; 1 CD", "+21 damage; 1 CD", "+23 damage; 1 CD", "+25 damage; 1 CD", "+27 damage; 1 CD", "+29 damage; 1 CD", "+31 damage; 1 CD", "+33 damage; 1 CD", "+35 damage; 1 CD", "+37 damage; 1 CD", "+39 damage; 1 CD", "+41 damage; 1 CD", "+43 damage; 1 CD", "+45 damage; 1 CD"],
		},
		"subclassfeature6": {
			name: "Inescapable Destruction",
			source: [["D", 97]],
			minlevel: 6,
			description: desc("When I deal Necrotic damage with spells or Channel Divinity, I ignore resistance to it"),
		},
		"subclassfeature17": {
			name: "Improved Reaper",
			source: [["D", 97]],
			minlevel: 17,
			description: desc([
				"If I cast a 5th-level or lower necromancy spell that has one target, I can target two",
				"They need to be within 5 ft of each other; I have to provide material comp. for both",
			]),
			calcChanges: {
				spellAdd: [
					function (spellKey, spellObj, spName) {
						if (spellObj.school == "Necro" && spellObj.level && spellObj.level < 6) {
							var startDescr = spellObj.description;
							switch (spellKey) {
								case "blindness/deafness" :
									// only 2 target if not cast at higher SL
									spellObj.description = "2 crea in 5 ft or " + spellObj.description;
									break;
								case "contagion" :
								case "inflict wounds" :
								case "ray of enfeeblement" :
									spellObj.description = spellObj.description.replace(/(Melee )?spell attack/i, "2 " + "$1".toLowerCase() + "spell atk in 5 ft").replace("spell ends", "ends");
									break;
								case "cause fear" :
									spellObj.description = "2 crea in 5 ft or 1+1/SL crea max 30 ft apart (no constr/undead), save or frightened; save end of turn";
									break;
								case "feign death" :
									spellObj.description = "2 willing crea in 5 ft appear dead; Are blinded, incapacitated, dmg resist. all but Psychic, speed 0";
									break;
								case "gentle repose" :
									spellObj.description = spellObj.description.replace("1 corpse protected from", "2 corpses in 5 ft suffer no");
									break;
								case "raise dead" :
								case "revivify" :
									spellObj.description = spellObj.description.replace("a creature's body that has", "body of 2 crea in 5 ft that").replace("cons.)", "cons. \xD72)");
									spellObj.compMaterial += " (once for each target)";
									break;
								case "speak with dead" :
									spellObj.description = spellObj.description.replace("1 corpse with mouth answers 5 questions", "2 corpses in 5 ft answer 5 questions each");
									break;
								case "enervation" :
									spellObj.description = spellObj.description.replace("action", "1 a").replace("see book", "see B");
								case "bestow curse" :
								case "blight" :
								case "cause fear-uass" :
								case "life transference" :
								case "negative energy flood" :
								default :
									spellObj.description = spellObj.description.replace(/1 crea(ture)?/i, "2 crea in 5 ft").replace("disadvantage", "Disadv").replace("save halves", "save half");
							}
							return startDescr !== spellObj.description;
						};
					},
					"My necromancy, single-target 5th-level or lower spells can affect two targets within 5 ft of each other if both are within range of the spell. The spells still require material components for each target separately.",
				],
			},
		},
	},
});
AddSubClass("paladin", "oathbreaker", {
	regExpSearch: /^((?=.*blackguard)|((?=.*(oath.*breaker|breaker.*oath))((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|warrior|warlord|trooper)))))).*$/i,
	subname: "Oathbreaker",
	source: [["D", 97]],
	features: {
		"subclassfeature3": {
			name: "Control Undead",
			source: [["D", 97]],
			minlevel: 3,
			additional: "1 Channel Divinity",
			description: desc([
				"As an action, one Undead (CR < paladin level) I can see in 30 ft must make a Wis save",
				"If failed, it must obey my commands for 24 hours or until I use this on another",
			]),
			action: [["action", ""]],
			spellcastingExtra: ["hellish rebuke", "inflict wounds", "crown of madness", "darkness", "animate dead", "bestow curse", "blight", "confusion", "contagion", "dominate person"],
		},
		"subclassfeature3.1": {
			name: "Dreadful Aspect",
			source: [["D", 97]],
			minlevel: 3,
			additional: "1 Channel Divinity",
			description: desc([
				"As an action, anyone I choose within 30 ft that can see me must make a Wisdom save",
				"If failed, it is Frightened for 1 min or until it succeeds a save at the end of its turns",
				"It can't save at the end of its turn if it's still within 30 ft of me",
			]),
			action: [["action", ""]],
		},
		"subclassfeature7": {
			name: "Aura of Hate",
			source: [["D", 97]],
			minlevel: 7,
			description: desc([
				"Fiends/Undead within range and I add my Cha mod as bonus on melee weapon damage",
				"Multiple Auras of Hate don't stack; only the strongest applies",
			]),
			additional: ["", "", "", "", "", "", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "30-foot aura", "30-foot aura", "30-foot aura"],
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (v.isMeleeWeapon) {
							fields.Description += (fields.Description ? "; " : "") + "Cha mod added to damage";
						}
					},
					"I add my Charisma modifier to my melee weapon damage.",
				],
				atkCalc: [
					function (fields, v, output) {
						if (v.isMeleeWeapon) {
							output.extraDmg += Number(What("Cha Mod"));
						};
					},
				],
			},
		},
		"subclassfeature15": {
			name: "Supernatural Resistance",
			source: [["D", 97]],
			minlevel: 15,
			description: desc("I have resistance to Bludgeoning/Piercing/Slashing damage from nonmagical weapons"),
			dmgres: [["Bludgeoning", "Bludg. (nonmagical)"], ["Piercing", "Pierc. (nonmagical)"], ["Slashing", "Slash. (nonmagical)"]],
		},
		"subclassfeature20": {
			name: "Dread Lord",
			source: [["D", 97]],
			minlevel: 20,
			description: desc([
				"As an action, I gain a 30-ft aura of gloom that reduces bright light to dim for 1 min",
				"If Frightened of me, foes starting their turn in the aura take 4d10 Psychic damage",
				"Attacks vs my allies and me inside the aura have Disadvantage if attackers need sight",
				"As a Bonus Action, I can make a melee spell attack vs a target inside the aura",
				"If this attack hits, it does 3d10 + Charisma modifier Necrotic damage",
			]),
			recovery: "Long Rest",
			usages: 1,
			action: [["action", ""]],
		},
	},
});

// pub_20150407_PotA.js
// This file adds the magic items from the Princes of the Apocalypse adventure to MPMB's Character Record Sheet

// Define the source
SourceList["PotA"] = {
	name: "Princes of the Apocalypse [items]",
	abbreviation: "PotA",
	group: "Legacy Adventure Books",
	campaignSetting: "Forgotten Realms",
	url: "https://dnd.wizards.com/products/princes-apocalypse",
	date: "2015/04/07",
	defaultExcluded: true,
};

// Magic Items
MagicItemsList["balloon pack"] = {
	name: "Balloon Pack",
	source: [["PotA", 222]],
	type: "Wondrous Item",
	rarity: "Uncommon",
	description: "As an action, I can deploy the balloon to gain the effects of *Levitate* for 10 minutes. As a Reaction, I can deploy the balloon to gain the effects of *Feather Fall*. After either effect ends, I descend slowly for 60 ft as it deflates. Once used in either way, the backpack is useless until recharged in an air node for 1 hour.",
	descriptionFull: "This backpack contains the spirit of an air elemental and a compact leather balloon. While you're wearing the backpack, you can deploy the balloon as an action and gain the effect of the *Levitate* spell for 10 minutes, targeting yourself and requiring no concentration. Alternatively, you can use a reaction to deploy the balloon when you're falling and gain the effect of the *Feather Fall* spell for yourself.\n   When either spell ends, the balloon slowly deflates as the elemental spirit escapes and returns to the Elemental Plane of Air. As the balloon deflates, you descend gently toward the ground for up to 60 feet. If you are still in the air at the end of this distance, you fall if you have no other means of staying aloft.\n   After the spirit departs, the backpack's property is unusable unless the backpack is recharged for 1 hour in an elemental air node, which binds another spirit to the backpack.",
	weight: 5, // as backpack
	usages: 1,
	recovery: "Air Node",
	additional: "recharge: 1 h in air node",
	action: [["action", " (Levitate)"], ["reaction", " (Feather Fall)"]],
	spellFirstColTitle: "Ch",
	spellcastingBonus: [{
		name: "1 charge",
		spells: ["feather fall", "levitate"],
		selection: ["feather fall", "levitate"],
		firstCol: 1,
		times: 2,
	}],
	spellChanges: {
		"feather fall": {
			range: "Self",
			description: "I descent only 60 ft/rnd for duration or until landed, taking no falling damage",
			changes: "Using the Balloon Pack, I can only target myself.",
		},
		"levitate": {
			range: "Self",
			duration: "10 min",
			save: "",
			description: "I rise vertically, up to 20 ft; move up/down 20 ft instead of normal move",
			changes: "Using the Balloon Pack, I can only target myself, but the spell requires no concentration.",
		},
	},
}
MagicItemsList["bottled breath"] = {
	name: "Bottled Breath",
	source: [["PotA", 222]],
	type: "Potion",
	rarity: "Uncommon",
	description: "Once as an action, I can inhale this breath of elemental air or administer it to another. The target then either exhale it or hold it in. If exhaled immediately, it produces the effects of *Gust of Wind*. Holding it in removes the need to breathe for 1 hour, though this benefit can end early, by speaking for example.",
	descriptionFull: "This bottle contains a breath of elemental air. When you inhale it, you either exhale it or hold it.\n   If you exhale the breath, you gain the effect of the *Gust of Wind* spell. If you hold the breath, you don't need to breathe for 1 hour, though you can end this benefit early (for example, to speak). Ending it early doesn't give you the benefit of exhaling the breath.",
	weight: 0.5,
}
MagicItemsList["claws of the umber hulk"] = {
	name: "Claws of the Umber Hulk",
	source: [["PotA", 222]],
	type: "Wondrous Item",
	rarity: "Rare",
	description: "These brown iron gauntlets, shaped like umber hulk claws, cover my hands up to my elbows. While wearing both, I can tunnel 1 ft per round through solid rock and have a 20 ft Burrow Speed, but can't use somatic spell components or manipulate items. I can use them as melee weapons, dealing 1d8 slashing damage.",
	descriptionFull: "These heavy gauntlets of brown iron are forged in the shape of an umber hulk's claws, and they fit the wearer's hands and forearms all the way up to the elbow. While wearing both claws, you gain a burrowing speed of 20 feet, and you can tunnel through solid rock at a rate of 1 foot per round.\n   You can use a claw as a melee weapon while wearing it. You have proficiency with it, and it deals 1d8 slashing damage on a hit (your Strength modifier applies to the attack and damage rolls, as normal).\n   While wearing the claws, you can't manipulate objects or cast spells with somatic components.",
	weight: 1,
	attunement: true,
	speed: { burrow: { spd: "fixed20", enc: "fixed10" } },
	weaponOptions: [{
		regExpSearch: /^(?=.*claws)(?=.*umber)(?=.*hulk).*$/i,
		name: "Claws of the Umber Hulk",
		source: [["PotA", 222]],
		ability: 1,
		type: "Natural",
		damage: [1, 8, "slashing"],
		range: "Melee",
		description: "",
		abilitytodamage: true,
		selectNow: true,
	}],
}
var PotA_tempDevastationOrbNoteTxt = [
	"A *devastation orb* is an elemental bomb that can be created at the site of an elemental node by performing a ritual with an elemental weapon. The type of orb created depends on the node used. For example, an air node creates a *devastation orb of air*. The ritual takes 1 hour to complete and requires 2,000 gp worth of special components, which are consumed.\n   A *devastation orb* measures 12 inches in diameter, weighs 10 pounds, and has a solid outer shell. The orb detonates 1d100 hours after its creation, releasing the elemental energy it contains. The orb gives no outward sign of how much time remains before it will detonate. Spells such as *Identify* and *Divination* can be used to ascertain when the orb will explode. An orb has AC 10, 15 hit points, and immunity to poison and psychic damage. Reducing it to 0 hit points causes it to explode instantly.\n   A special container can be crafted to contain a *devastation orb* and prevent it from detonating. The container must be inscribed with symbols of the orb's opposing element. For example, a case inscribed with earth symbols can be used to contain a *devastation orb of air* and keep it from detonating. While in the container, the orb thrums. If it is removed from the container after the time when it was supposed to detonate, it explodes 1d6 rounds later, unless it is returned to the container.\n   Regardless of the type of orb, its effect is contained within a sphere with a 1 mile radius. The orb is the sphere's point of origin. The orb is destroyed after one use.",
	desc([
		"This elemental bomb can be created at the site of an elemental node of tELEMENT by performing a ritual with an elemental weapon. The ritual takes 1 hour to complete and requires 2,000 gp worth of special components, which are consumed.",
		"A devastation orb measures 12 inches in diameter, weighs 10 pounds, and has a solid outer shell. The orb detonates 1d100 hours after its creation, releasing the elemental energy it contains. The orb gives no outward sign of how much time remains before it will detonate. Spells such as *Identify* and *Divination* can be used to ascertain when the orb will explode. An orb has AC 10, 15 hit points, and immunity to Poison and Psychic damage. Reducing it to 0 hit points causes it to explode instantly.",
		"A special container inscribed with symbols of oELEMENT can be crafted to contain a devastation orb of tELEMENT and prevent it from detonating. While in the container, the orb thrums. If it is removed from the container after the time when it was supposed to detonate, it explodes 1d6 rounds later, unless it is returned to the container.",
	]),
];
MagicItemsList["devastation orb"] = {
	name: "Devastation Orb",
	source: [["PotA", 222]],
	type: "Wondrous Item",
	rarity: "Very Rare",
	description: "This 12 inch diameter orb has AC 10, 15 HP, and is immune to Poison and Psychic damage. it explodes 1d100 hours after its creation or when reduced to 0 HP. When detonated, it creates an effect in a 1-mile radius around it.",
	descriptionFull: PotA_tempDevastationOrbNoteTxt[0],
	weight: 10,
	allowDuplicates: true,
	choices: ["Air", "Earth", "Fire", "Water"],
	choicesNotInMenu: true,
	"air": {
		name: "Devastation Orb of Air",
		description: "This 12 inch diameter orb has AC 10, 15 HP, and is immune to Poison and Psychic damage. it explodes 1d100 hours after its creation or when reduced to 0 HP. When detonated, it creates a powerful windstorm in 1 mile around it for 1 hour. Everything exposed to the wind is damage by it. See Notes page.",
		descriptionFull: PotA_tempDevastationOrbNoteTxt[0] + "\n   ***Air Orb***. When this orb detonates, it creates a powerful windstorm that lasts for 1 hour. Whenever a creature ends its turn exposed to the wind, the creature must succeed on a DC 18 Constitution saving throw or take 1d4 bludgeoning damage, as the wind and debris batter it. The wind is strong enough to uproot weak trees and destroy light structures after at least 10 minutes of exposure. Otherwise, the rules for strong wind apply, as detailed in chapter 5 of the Dungeon Master's Guide.",
		toNotesPage: [{
			name: "Features",
			note: PotA_tempDevastationOrbNoteTxt[1].replace(/tELEMENT/g, "air").replace(/oElement/g, "earth") + "\n  When this orb detonates, it creates a powerful windstorm within a sphere with a 1 mile radius that lasts for 1 hour. Whenever a creature ends its turn exposed to the wind, the creature must succeed on a DC 18 Constitution saving throw or take 1d4 Bludgeoning damage, as the wind and debris batter it. The wind is strong enough to uproot weak trees and destroy light structures after at least 10 minutes of exposure. Otherwise, the rules for strong wind apply. A strong wind imposes Disadvantage on ranged weapon attack rolls and Wisdom (Perception) checks that rely on hearing. A strong wind also extinguishes open flames, disperses fog, and makes flying by nonmagical means nearly impossible. A flying creature in a strong wind must land at the end of its turn or fall. A strong wind in a desert can create a sandstorm that imposes Disadvantage on Wisdom (Perception) checks that rely on sight.",
		}],
	},
	"earth": {
		name: "Devastation Orb of Earth",
		description: "This 12 inch diameter orb has AC 10, 15 HP, and is immune to Poison and Psychic damage. it explodes 1d100 hours after its creation or when reduced to 0 HP. When detonated, it creates the effect of an *Earthquake* spell in 1 mile around it for 1 minute. See Notes page.",
		descriptionFull: PotA_tempDevastationOrbNoteTxt[0] + "\n   ***Earth Orb***. When this orb detonates, it subjects the area to the effects of the *Earthquake* spell for 1 minute (spell save DC 18). For the purpose of the spell's effects, the spell is cast on the turn that the orb explodes.",
		toNotesPage: [{
			name: "Features",
			note: PotA_tempDevastationOrbNoteTxt[1].replace(/tELEMENT/g, "earth").replace(/oElement/g, "air") + desc([
				"When this orb detonates, it subjects the area to the effects of the *Earthquake* spell for 1 minute (spell save DC 18). For the purpose of the spell's effects, the spell is cast on the turn that the orb explodes.",
				"The *Earthquake* spell creates a seismic disturbance that shakes creatures and structures in contact with the ground in that area. The ground in the area becomes difficult terrain. Each creature on the ground that is concentrating must make a Constitution saving throw. On a failed save, the creature's concentration is broken.",
				"At the end of each turn this goes on, each creature on the ground in the area must make a Dexterity saving throw. On a failed save, the creature is knocked Prone.",
				"This spell can have additional effects depending on the terrain in the area, as determined by the DM.",
				"\u2022 Fissures. Fissures open throughout the spell's area at the start of the turn after the orb detonates. A total of 1d6 such fissures open in locations chosen by the DM. Each is 1d10 \xD7 10 ft deep, 10 ft wide, and extends from one edge of the area to the opposite side. A creature standing on a spot where a fissure opens must succeed on a Dexterity saving throw or fall in. A creature that successfully saves moves with the fissure's edge as it opens. A fissure that opens beneath a structure causes it to automatically collapse (see below).",
				"\u2022 Structures. The tremor deals 50 Bludgeoning damage to any structure in contact with the ground in the area when the orb detonates and at the start of each of turns for the duration. If a structure drops to 0 hit points, it collapses and potentially damages nearby creatures. A creature within half the distance of a structure's height must make a Dexterity saving throw. On a failed save, the creature takes 5d6 Bludgeoning damage, is knocked Prone, and is buried in the rubble, requiring a DC 20 Strength (Athletics) check as an action to escape. The DM can adjust the DC higher or lower, depending on the nature of the rubble. On a successful save, the creature takes half as much damage and doesn't fall Prone or become buried.",
			]),
		}],
	},
	"fire": {
		name: "Devastation Orb of Fire",
		description: "This 12 inch diameter orb has AC 10, 15 HP, and is immune to Poison and Psychic damage. it explodes 1d100 hours after its creation or when reduced to 0 HP. When detonated, it creates a dry heat wave in 1 mile around it for 24 hours. There is extreme heat within the area and wildfires can appear within, see Notes.",
		descriptionFull: PotA_tempDevastationOrbNoteTxt[0] + "\n   ***Fire Orb***. When this orb detonates, it creates a dry heat wave that lasts for 24 hours. Within the area of effect, the rules for extreme heat apply, as detailed in chapter 5 of the Dungeon Master's Guide. At the end of each hour, there is a ten percent chance that the heat wave starts a wildfire in a random location within the area of effect. The wildfire covers a 10-foot-square area initially but expands to fill another 10-foot square each round until the fire is extinguished or burns itself out. A creature that comes within 10 feet of a wildfire for the first time on a turn or starts its turn there takes 3d6 fire damage.",
		toNotesPage: [{
			name: "Features",
			note: PotA_tempDevastationOrbNoteTxt[1].replace(/tELEMENT/g, "fire").replace(/oElement/g, "water") + "\n  When this orb detonates, it creates a dry heat wave within a 1-mile radius sphere that lasts for 24 hours. At the end of each hour, there is a ten percent chance that the heat wave starts a wildfire in a random location within the area of effect. The wildfire covers a 10-foot-square area initially but expands to fill another 10-foot square each round until the fire is extinguished or burns itself out. A creature that comes within 10 feet of a wildfire for the first time on a turn or starts its turn there takes 3d6 Fire damage.\n   Within the area of effect, the rules for extreme heat apply, as the temperature is above 100 \u00B0F. Any creature exposed to the heat and without access to drinkable water must succeed on a Constitution saving throw at the end of each hour or gain one level of Exhaustion. The DC is 5 for the first hour and increases by 1 for each additional hour. Creatures wearing medium or heavy armor, or who are clad in heavy clothing, have Disadvantage on the saving throw. Creatures with resistance or immunity to Fire damage automatically succeed on the saving throw, as do creatures naturally adapted to hot climates.",
		}],
	},
	"water": {
		name: "Devastation Orb of Water",
		description: "This 12 inch diameter orb has AC 10, 15 HP, and is immune to Poison and Psychic damage. it explodes 1d100 hours after its creation or when reduced to 0 HP. When detonated, it creates torrential rainstorm in 1 mile around it for 24 hours. If bodies of water exist in the area, they rise 10 ft and flood. See Notes page.",
		descriptionFull: PotA_tempDevastationOrbNoteTxt[0] + "\n   ***Water Orb***. When this orb detonates, it creates a torrential rainstorm that lasts for 24 hours. Within the area of effect, the rules for heavy precipitation apply, as detailed in chapter 5 of the Dungeon Master's Guide. If there is a substantial body of water in the area, it floods after 2d10 hours of heavy rain, rising 10 feet above its banks and inundating the surrounding area. The flood advances at a rate of 100 feet per round, moving away from the body of water where it began until it reaches the edge of the area of effect: at that point, the water flows downhill (and possibly recedes back to its origin). Light structures collapse and wash away. Any Large or smaller creature caught in the flood's path is swept away. The flooding destroys crops and might trigger mudslides, depending on the terrain.",
		toNotesPage: [{
			name: "Features",
			note: PotA_tempDevastationOrbNoteTxt[1].replace(/tELEMENT/g, "water").replace(/oElement/g, "fire") + "\n  When this orb detonates, it creates a torrential rainstorm in a 1-mile radius sphere that lasts for 24 hours. If there is a substantial body of water in the area, it floods after 2d10 hours of heavy rain, rising 10 feet above its banks and inundating the surrounding area. The flood advances at a rate of 100 feet per round, moving away from the body of water where it began until it reaches the edge of the area of effect: at that point, the water flows downhill (and possibly recedes back to its origin). Light structures collapse and wash away. Any Large or smaller creature caught in the flood's path is swept away. The flooding destroys crops and might trigger mudslides, depending on the terrain.\n   Within the area of effect, the rules for heavy precipitation apply. Everything is lightly obscured, and creatures in the area have Disadvantage on Wisdom (Perception) checks that rely on sight. Heavy rain also extinguishes open flames and imposes Disadvantage on Wisdom (Perception) checks that rely on hearing.",
		}],
	},
}
MagicItemsList["drown"] = {
	name: "Drown",
	source: [["PotA", 224]],
	type: "Weapon (Trident)",
	rarity: "Legendary",
	storyItemAL: true,
	description: "This trident has a +1 bonus on to hit and damage and deals +1d8 Cold damage. It allows me to speak Aquan, grants me resistance to Cold damage, and allows me to cast *Dominate Monster* on a water elemental once per dawn. It gives me a flaw, see Notes page.",
	descriptionFull: "A steel trident decorated with bronze barnacles along the upper part of its haft, *Drown* has a sea-green jewel just below the tines and a silver shell at the end of its haft. It floats on the surface if dropped onto water, and it floats in place if it is released underwater. The trident is always cool to the touch, and it is immune to any damage due to exposure to water. *Drown* contains a spark of Olhydra, the Princess of Evil Water.\n   You gain a +1 bonus to attack and damage rolls made with this magic weapon. When you hit with it, the targets take an extra 1d8 cold damage.\n   ***Water Mastery***. You gain the following benefits while you hold *Drown*:\n \u2022 You can speak Aquan fluently.\n \u2022 You have resistance to cold damage.\n \u2022 You can cast *Dominate Monster* (save DC 17) on a water elemental. Once you have done so, *Drown* can't be used this way again until the next dawn.\n\n***Tears of Endless Anguish***. While inside a water node, you can perform a ritual called the Tears of Endless Anguish, using *Drown* to create a *devastation orb of water*. Once you perform the ritual, *Drown* can't be used to perform the ritual again until the next dawn.\n   ***Flaw***. *Drown* makes its wielder covetous. While attuned to the weapon, you gain the following flaw: \"I demand and deserve the largest share of the spoils, and I refuse to part with anything that's mine.\" In addition, if you are attuned to *Drown* for 24 consecutive hours, barnacles form on your skin. The barnacles can be removed with a *Greater Restoration* spell or similar magic, but not while you are attuned to the weapon.",
	attunement: true,
	weight: 4,
	languageProfs: ["Aquan"],
	dmgres: ["Cold"],
	usages: 1,
	recovery: "dawn",
	fixedDC: 17,
	spellcastingBonus: [{
		name: "Once per dawn",
		spells: ["dominate monster"],
		selection: ["dominate monster"],
		firstCol: "onceday",
	}],
	spellChanges: {
		"dominate monster": {
			description: "Water elemental save or Charmed, follows telepathic commands, 1 a for complete control; save on dmg",
			changes: "Can only affect a water elemental.",
		},
	},
	weaponOptions: [{
		baseWeapon: "trident",
		regExpSearch: /drown/i,
		name: "Drown",
		source: [["PotA", 224]],
		description: "Thrown, Versatile (1d10); +1d8 Cold damage",
		modifiers: [1, 1],
		selectNow: true,
	}],
	toNotesPage: [{
		name: "Features",
		note: [
			"A steel trident decorated with bronze barnacles along the upper part of its haft, Drown has a sea-green jewel just below the tines and a silver shell at the end of its haft. It floats on the surface if dropped onto water, and it floats in place if it is released underwater. The trident is always cool to the touch, and it is immune to any damage due to exposure to water. Drown contains a spark of Olhydra, the Princess of Evil Water.",
			"I gain a +1 bonus to attack and damage rolls made with this magic weapon. When I hit with it, the targets take an extra 1d8 Cold damage.",
			"While holding Drown, I can speak Aquan fluently, have resistance to Cold damage, I can cast *Dominate Monster* (save DC 17) on a water elemental once per dawn.",
			"While inside a water node, I can perform a ritual called the Tears of Endless Anguish, using Drown to create a Devastation Orb of Water. The ritual takes 1 hour to complete and requires 2,000 gp worth of special components, which are consumed. Once I perform the ritual, Drown can't be used to perform the ritual again until the next dawn.",
			"Drown makes me covetous. While attuned to the weapon, I gain the following flaw: \"I demand and deserve the largest share of the spoils, and I refuse to part with anything that's mine.\" In addition, if I am attuned to Drown for 24 consecutive hours, barnacles form on my skin. The barnacles can be removed with a *Greater Restoration* spell or similar magic, but not while I am attuned to the weapon.",
		],
	}],
}
MagicItemsList["ironfang"] = {
	name: "Ironfang",
	source: [["PotA", 224]],
	type: "Weapon (War Pick)",
	rarity: "Legendary",
	storyItemAL: true,
	description: "This war pick has a +2 bonus on to hit and damage and deals +1d8 Thunder damage. It allows me to speak Terran, grants me resistance to Acid damage, Tremorsense 60 ft, allows me to cast *Dominate Monster* on an earth elemental once per dawn, and to cast *Shatter* using 1 of its 3 charges and more, see Notes page.",
	descriptionFull: "A war pick forged from a single piece of iron, *Ironfang* has a fang-like head inscribed with ancient runes. The pick is heavy in the hand, but when the wielder swings the pick in anger, the weapon seems almost weightless. This weapon is immune to any form of rust, acid, or corrosion\u2014nothing seems to mark it. *Ironfang* contains a spark of Ogr\xE9moch, the Prince of Evil Earth.\n   You gain a +2 bonus to attack and damage rolls made with this magic weapon. When you hit with it, the target takes an extra 1d8 thunder damage.\n   ***Earth Mastery***. You gain the following benefits while you hold *Ironfang*:\n \u2022 You can speak Terran fluently.\n \u2022 You have resistance to acid damage.\n \u2022 You have tremorsense out to a range of 60 feet.\n \u2022 You can sense the presence of precious metals and stones within 60 feet of you, but not their exact location.\n \u2022 You can cast *Dominate Monster* (save DC 17) on an earth elemental. Once you have done so, *Ironfang* can't be used this way again until the next dawn.\n\n***Shatter***. *Ironfang* has 3 charges. You can use your action to expend 1 charge and cast the 2nd-level version of *Shatter* (DC 17). *Ironfang* regains 1d3 expended charges daily at dawn.\n   ***The Rumbling***. While inside an earth node, you can perform a ritual called the Rumbling, using *Ironfang* to create a *devastation orb of earth*. Once you perform the ritual, *Ironfang* can't be used to perform the ritual again until the next dawn.\n   ***Flaw***. *Ironfang* heightens its wielder's destructive nature. While attuned to the weapon, you gain the following flaw: \"I like to break things and cause ruin.\"",
	attunement: true,
	weight: 2,
	languageProfs: ["Terran"],
	dmgres: ["Acid"],
	usages: 1,
	recovery: "dawn",
	fixedDC: 17,
	limfeaname: "Ironfang [Rumbling ritual]",
	spellFirstColTitle: "Ch",
	extraLimitedFeatures: [{
		name: "Ironfang [Dominate Monster]",
		usages: 1,
		recovery: "dawn",
	}, {
		name: "Ironfang [Shatter] (regains 1d3)",
		usages: 3,
		recovery: "dawn",
	}],
	spellcastingBonus: [{
		name: "Once per dawn",
		spells: ["dominate monster"],
		selection: ["dominate monster"],
		firstCol: "onceday",
	}, {
		name: "1 charge",
		spells: ["shatter"],
		selection: ["shatter"],
		firstCol: 1,
	}],
	spellChanges: {
		"dominate monster": {
			description: "Earth elemental save or Charmed, follows telepathic commands, 1 a for complete control; save on dmg",
			changes: "Can only affect an earth elemental.",
		},
		"shatter": {
			description: "10-ft rad all 4d8 Thunder dmg; save halves; nonmagical unattended objects also take dmg",
			changes: "Cast as if using a 2nd-level spell slot.",
		},
	},
	vision: [["Tremorsense", "fixed 60"]],
	weaponOptions: [{
		baseWeapon: "war pick",
		regExpSearch: /ironfang/i,
		name: "Ironfang",
		source: [["PotA", 224]],
		description: "Versatile (1d10); +1d8 Thunder damage",
		modifiers: [2, 2],
		selectNow: true,
	}],
	toNotesPage: [{
		name: "Features",
		note: [
			"A war pick forged from a single piece of iron, Ironfang has a fang-like head inscribed with ancient runes. The pick is heavy in the hand, but when the wielder swings the pick in anger, the weapon seems almost weightless. This weapon is immune to any form of rust, acid, or corrosion\u2014nothing seems to mark it. Ironfang contains a spark of Ogr\xE9moch, the Prince of Evil Earth.",
			"I gain a +2 bonus to attack and damage rolls made with this magic weapon. When I hit with it, the target takes an extra 1d8 Thunder damage.",
			"While holding Ironfang, I can speak Terran fluently, have resistance to Acid damage, have Tremorsense out to a range of 60 ft, can sense the presence of precious metals and stones within 60 ft of me, but not their exact location, and can cast *Dominate Monster* (save DC 17) on an earth elemental once per dawn.",
			"Ironfang has 3 charges and regains 1d3 expended charges daily at dawn. I can use your action to expend 1 charge and cast the 2nd-level version of *Shatter* (DC 17).",
			"While inside an earth node, I can perform a ritual called the Rumbling, using Ironfang to create a Devastation Orb of Earth. The ritual takes 1 hour to complete and requires 2,000 gp worth of special components, which are consumed. Once I perform the ritual, Ironfang can't be used to perform the ritual again until the next dawn.",
			'Ironfang heightens my destructive nature. While attuned to the weapon, I gain the following flaw: "I like to break things and cause ruin."',
		],
	}],
}
MagicItemsList["lost crown of besilmer"] = {
	name: "Lost Crown of Besilmer",
	source: [["PotA", 223]],
	type: "Wondrous Item",
	rarity: "Legendary",
	storyItemAL: true,
	description: "This dwarven battle-helm gives me Psychic resistance and Adv on saves against being Charmed. It has 3 charges, regaining 1d3 at dawn. As a Bonus Action, I can use 1 charge to inspire an ally that I can see in 60 ft and that can see and hear me. Before my next turn ends, it can add +1d6 to 1 ability check, attack, or save.",
	descriptionFull: "This dwarven battle-helm consists of a sturdy open-faced steel helmet, decorated with a golden circlet above the brow from which seven small gold spikes project upward. You gain the following benefits while wearing the crown:\n \u2022 You have resistance to psychic damage.\n \u2022 You have advantage on saving throws against effects that would charm you.\n \u2022 You can use a bonus action to inspire one creature you can see that is within 60 feet of you and that can see or hear you. Once before the end of your next turn, the inspired creature can roll a d6 and add the number rolled to one ability check, attack roll, or saving throw it makes. This uses 1 charge from the crown. It has 3 charges, and it regains 1d3 expended charges daily at dawn.",
	attunement: true,
	usages: 3,
	recovery: "dawn",
	additional: "regains 1d3",
	action: [["bonus action", " (inspire)"]],
	dmgres: ["Psychic"],
	savetxt: { adv_vs: ["Charmed"] },
}
MagicItemsList["orcsplitter"] = {
	name: "Orcsplitter",
	source: [["PotA", 224]],
	type: "Weapon (Greataxe)",
	rarity: "Legendary",
	prerequisite: "Requires attunement by a good-aligned dwarf, fighter, or paladin",
	description: "This sentient greataxe has a +2 bonus on to hit and damage. If I roll a 20 on an attack vs an orc with it, the orc must make a DC 17 Con save or be reduced to 0 HP. While I'm not Incapacitated, I can't be surprised by orcs, and me and my allies in 30 ft can't be Frightened. I can sense orcs within 120 ft. See Notes page.",
	descriptionFull: "A mighty axe wielded long ago by the dwarf king Torhild Flametongue, *Orcsplitter* is a battered weapon that appears unremarkable at first glance. Its head is graven with the Dwarvish runes for \"orc,\" but the runes are depicted with a gap or slash through the markings; the word \"orc\" is literally split in two.\n   You gain the following benefits while holding this magic weapon:\n \u2022 You gain a +2 bonus to attack and damage rolls made with it.\n \u2022 When you roll a 20 on an attack roll with this weapon against an orc, that orc must succeed on a DC 17 Constitution saving throw or drop to 0 hit points.\n \u2022 You can't be surprised by orcs while you're not incapacitated. You are also aware when orcs are within 120 feet of you and aren't behind total cover, although you don't know their location.\n \u2022 You and any of your friends within 30 feet of you can't be frightened while you're not incapacitated.\n\n***Sentience***. *Orcsplitter* is a sentient, lawful good weapon with an Intelligence of 6, a Wisdom of 15, and a Charisma of 10. It can see and hear out to 120 feet and has darkvision. It communicates by transmitting emotions to its wielder, although on rare occasions it uses a limited form of telepathy to bring to the wielder's mind a couplet or stanza of ancient Dwarvish verse.\n   ***Personality***. *Orcsplitter* is grim, taciturn, and inflexible. It knows little more than the desire to face orcs in battle and serve a courageous, just wielder. It disdains cowards and any form of duplicity, deception, or disloyalty. The weapon's purpose is to defend dwarves and to serve as a symbol of dwarven resolve. It hates the traditional foes of dwarves\u2014giants, goblins, and, most of all, orcs\u2014and silently urges its possessor to meet such creatures in battle.",
	attunement: true,
	weight: 7,
	weaponOptions: [{
		baseWeapon: "greataxe",
		regExpSearch: /orcsplitter/i,
		name: "Orcsplitter",
		source: [["PotA", 224]],
		description: "Heavy, two-handed; On 20 vs Orc: it DC 17 Con save or 0 HP",
		modifiers: [2, 2],
		selectNow: true,
	}],
	savetxt: { immune: ["Frightened"] },
	toNotesPage: [
		{
			name: "Orcsplitter",
			note: [
				'A mighty axe wielded long ago by the dwarf king Torhild Flametongue, *Orcsplitter* is a battered weapon that appears unremarkable at first glance. Its head is graven with the Dwarvish runes for "orc," but the runes are depicted with a gap or slash through the markings; the word "orc" is literally split in two.',
				"I gain a +2 bonus to attack and damage rolls made with it. When I roll a 20 on an attack roll with this weapon against an orc, that orc must succeed on a DC 17 Constitution saving throw or drop to 0 hit points.",
				"While I am not Incapacitated, I can't be Surprised by orcs and I am aware when orcs are within 120 ft of me and aren't behind total cover, although I don't know their location. Also, me and any of my friends within 30 ft of can't be Frightened while I am not incapacitated.",
				"*Orcsplitter* is a sentient, lawful good weapon with an Intelligence of 6, a Wisdom of 15, and a Charisma of 10. It can see and hear out to 120 feet and has Darkvision. It communicates by transmitting emotions to its wielder, although on rare occasions it uses a limited form of telepathy to bring to the wielder's mind a couplet or stanza of ancient Dwarvish verse.",
				"*Orcsplitter* is grim, taciturn, and inflexible. It knows little more than the desire to face orcs in battle and serve a courageous, just wielder. It disdains cowards and any form of duplicity, deception, or disloyalty. The weapon's purpose is to defend dwarves and to serve as a symbol of dwarven resolve. It hates the traditional foes of dwarves\u2014giants, goblins, and, most of all, orcs\u2014and silently urges its possessor to meet such creatures in battle.",
			],
		},
		Object.assign({}, sentientItemConflictNote, { amendTo: "Orcsplitter" }),
	],
}
MagicItemsList["reszur"] = {
	name: "Reszur",
	source: [["PotA", 157]],
	type: "Weapon (Dagger)",
	rarity: "Uncommon",
	description: "I have a +1 bonus to attack and damage rolls made with this dagger. It doesn't make noise when it hits or cuts something. If I speaks the name \"Reszur\", which is engraved on its pommel, the blade gives off a faint, cold glow, shedding dim light in a 10-foot radius until I speak the name again.",
	descriptionFull: "You have a +1 bonus to attack and damage rolls made with this weapon, which doesn't make noise when it hits or cuts something.\n   The name \"Reszur\" is graven on the dagger's pommel. If the wielder speaks the name, the blade gives off a faint, cold glow, shedding dim light in a 10-foot radius until the wielder speaks the name again.",
	weight: 1,
	weaponOptions: [{
		baseWeapon: "dagger",
		regExpSearch: /reszur/i,
		name: "Reszur",
		source: [["PotA", 157]],
		description: "Finesse, light, thrown; Doesn't make any noise",
		modifiers: [1, 1],
		selectNow: true,
	}],
}
MagicItemsList["seeker dart"] = {
	name: "Seeker Dart",
	source: [["PotA", 223]],
	type: "Weapon (Dart)",
	rarity: "Uncommon",
	description: "Once as an action, when I whisper \"seek\" and hurl this dart, it seeks out a target of my choice within 120 ft that I have seen at least once. If the target isn't within range or there is no clear path to it, the dart's magic is spent. Else, the target must make a DC 16 Dex save or take 1d4 Piercing and 3d4 Lightning damage.",
	descriptionFull: "This small dart is decorated with designs like windy spirals that span the length of its shaft.\n   When you whisper the word \"seek\" and hurl this dart, it seeks out a target of your choice within 120 feet of you. You must have seen the target before, but you don't need to see it now. If the target isn't within range or if there is no clear path to it, the dart falls to the ground, its magic spent and wasted. Otherwise, elemental winds guide the dart instantly through the air to the target. The dart can pass though openings as narrow as 1 inch wide and can change direction to fly around corners.\n   When the dart reaches its target, the target must succeed on a DC 16 Dexterity saving throw or take 1d4 piercing damage and 3d4 lightning damage. The dart's magic is then spent, and it becomes an ordinary dart.",
	weight: 0.25,
}
MagicItemsList["storm boomerang"] = {
	name: "Storm Boomerang",
	source: [["PotA", 223]],
	type: "Weapon (Javelin)",
	rarity: "Uncommon",
	description: "This ranged weapon has 60/120 ft range, deals 1d4 Bludgeoning and 3d4 Thunder damage, and its target must make a DC 10 Con save or be Stunned until its next turn ends. On a miss, it returns to the thrower's hand. Once it deals Thunder damage, it can't do so or stun again until recharged in an air node for 1 hour.",
	descriptionFull: "This boomerang is a ranged weapon carved from griffon bone and etched with the symbol of elemental air. When thrown, it has a range of 60/120 feet, and any creature that is proficient with the javelin is also proficient with this weapon. On a hit, the boomerang deals 1d4 bludgeoning damage and 3d4 thunder damage, and the target must succeed on a DC 10 Constitution saving throw or be stunned until the end of its next turn. On a miss, the boomerang returns to the thrower's hand.\n   Once the boomerang deals thunder damage to a target, the weapon loses its ability to deal thunder damage and its ability to stun a target. These properties return after the boomerang spends at least 1 hour inside an elemental air node.",
	weaponOptions: [{
		baseWeapon: "javelin",
		name: "Storm Boomerang",
		regExpSearch: /^(?=.*storm)(?=.*boomerang).*$/i,
		list: "melee",
		ability: 2,
		damage: [1, 4, "bludgeoning"],
		range: "60/120 ft",
		weight: 2,
		description: "Returns on a miss; Once: +3d4 Thunder damage, target DC 10 Con save or Stunned 1 turn",
		selectNow: true,
	}],
	usages: 1,
	recovery: "Air Node",
	additional: "recharge: 1 h in air node",
}
MagicItemsList["tinderstrike"] = {
	name: "Tinderstrike",
	source: [["PotA", 225]],
	type: "Weapon (Dagger)",
	rarity: "Legendary",
	storyItemAL: true,
	description: "This flint dagger has a +2 bonus on to hit and damage and deals +2d6 Fire damage. It allows me to speak Ignan, grants me resistance to Fire damage, and allows me to cast *Dominate Monster* on a fire elemental once per dawn. It gives me a flaw, see Notes page.",
	descriptionFull: "A flint dagger, *Tinderstrike* is uncommonly sharp, and sparks cascade off its edge whenever it strikes something solid. Its handle is always warm to the touch, and the blade smolders for 1d4 minutes after it is used to deal damage. It contains a spark of Imix, Prince of Evil Fire.\n   You gain a +2 bonus to attack and damage rolls made with this magic weapon. When you hit with it, the target takes an extra 2d6 fire damage.\n   ***Fire Mastery***. You gain the following benefits while you hold *Tinderstrike*:\n \u2022 You can speak Ignan fluently.\n \u2022 You have resistance to fire damage.\n \u2022 You can cast *Dominate Monster* (save DC 17) on a fire elemental. Once you have done so, *Tinderstrike* can't be used this way again until the next dawn.\n\n***Dance of the All-Consuming Fire***. While inside a fire node, you can perform a ritual called the Dance of the All-Consuming Fire, using *Tinderstrike* to create a *devastation orb of fire*. Once you perform the ritual, *Tinderstrike* can't be used to perform the ritual again until the next dawn.\n   " + '***Flaw***. Tinderstrike makes its wielder impatient and rash. While attuned to the weapon, you gain the following flaw: "I act without thinking and take risks without weighing the consequences."',
	attunement: true,
	weight: 1,
	languageProfs: ["Ignan"],
	dmgres: ["Fire"],
	usages: 1,
	recovery: "dawn",
	fixedDC: 17,
	spellcastingBonus: [{
		name: "Once per dawn",
		spells: ["dominate monster"],
		selection: ["dominate monster"],
		firstCol: "onceday",
	}],
	spellChanges: {
		"dominate monster": {
			description: "Fire elemental save or Charmed, follows telepathic commands, 1 a for complete control; save on dmg",
			changes: "Can only affect a fire elemental.",
		},
	},
	weaponOptions: [{
		baseWeapon: "dagger",
		regExpSearch: /tinderstrike/i,
		name: "Tinderstrike",
		source: [["PotA", 225]],
		description: "Finesse, light, thrown; +2d6 Fire damage",
		modifiers: [2, 2],
		selectNow: true,
	}],
	toNotesPage: [{
		name: "Features",
		note: [
			"A flint dagger, Tinderstrike is uncommonly sharp, and sparks cascade off its edge whenever it strikes something solid. Its handle is always warm to the touch, and the blade smolders for 1d4 minutes after it is used to deal damage. It contains a spark of Imix, Prince of Evil Fire.",
			"I gain a +2 bonus to attack and damage rolls made with this magic weapon. When I hit with it, the target takes an extra 2d6 Fire damage.",
			"While holding Tinderstrike, I can speak Ignan fluently, have resistance to Fire damage, and can cast *Dominate Monster* (save DC 17) on a fire elemental once per dawn.",
			"While inside a fire node, I can perform a ritual called the Dance of the All-Consuming Fire, using Tinderstrike to create a Devastation Orb of Fire. The ritual takes 1 hour to complete and requires 2,000 gp worth of special components, which are consumed. Once I perform the ritual, Tinderstrike can't be used to perform the ritual again until the next dawn.",
			'Tinderstrike makes me impatient and rash. While attuned to the weapon, I gain the following flaw: "I act without thinking and take risks without weighing the consequences."',
		],
	}],
}
MagicItemsList["weird tank"] = {
	name: "Weird Tank",
	source: [["PotA", 223]],
	type: "Wondrous Item",
	rarity: "Rare",
	description: "As an action, I can open (or close) this tank of water, allowing the water weird within it to act or not. The weird is bound to the tank, follows my telepathic commands, and acts after me in combat. If the weird is killed, a new one can be formed by placing the tank in a water node for 24 hours.",
	descriptionLong: "As an action, I can open (or close) this tank of water, allowing the water weird within it to act or not. The weird is bound to the tank, follows my telepathic commands, and acts after me in combat. If it is killed, a new one can be formed by placing the tank in a water node for 24 hours. I can close the tank as an action, but I can only close the tank after commanding the weird to retract into it or if it died. The tank has AC 15, 50 HP, vulnerability to Bludgeoning damage, and immunity to Poison and Psychic damage. Reducing the tank to 0 hit points destroys it and the water weird contained within it.",
	descriptionFull: "A *weird tank* is a ten-gallon tank of blown glass and sculpted bronze with a backpack-like carrying harness fashioned from tough leather. A water weird is contained within the tank. While wearing the tank, you can use an action to open it, allowing the water weird to emerge. The water weird acts immediately after you in the initiative order, and it is bound to the tank.\n   You can command the water weird telepathically (no action required) while you wear the tank. You can close the tank as an action only if you have first commanded the water weird to retract into it or if the water weird is dead.\n   If the water weird is killed, the tank loses its magical containment property until it spends at least 24 hours inside an elemental water node. When the tank is recharged, a new water weird forms inside it.\n   The tank has AC 15, 50 hit points, vulnerability to bludgeoning damage, and immunity to poison and psychic damage. Reducing the tank to 0 hit points destroys it and the water weird contained within it.",
	weight: 120,
	attunement: true,
	action: [["action", ""]],
}
MagicItemsList["windvane"] = {
	name: "Windvane",
	source: [["PotA", 225]],
	type: "Weapon (Spear)",
	rarity: "Legendary",
	storyItemAL: true,
	description: "This spear with the finesse property has a +2 bonus on to hit and damage and deals +1d6 Lightning damage. It allows me to speak Auran, grants me resistance to Lightning damage, and allows me to cast *Dominate Monster* on an air elemental once per dawn. It gives me a flaw, see Notes page.",
	descriptionFull: "A silver spear, *Windvane* has dark sapphires on the filigreed surface of its polished head. Held by its shining haft, the weapon feels insubstantial, as if clutching a cool, gently flowing breeze. The spear contains a spark of Yan-C-Bin, the Prince of Evil Air.\n   You have a +2 bonus to attack and damage rolls made with this magic weapon, which has the finesse weapon property. When you hit with it, the target takes an extra 1d6 lightning damage.\n   ***Air Mastery***. You gain the following benefits while you hold *Windvane*:\n \u2022 You can speak Auran fluently.\n \u2022 You have resistance to lightning damage.\n \u2022 You can cast *Dominate Monster* (save DC 17) on an air elemental. Once you have done so, *Windvane* can't be used this way again until the next dawn.\n\n***Song of the Four Winds***. While inside an air node, you can perform a ritual called the Song of the Four Winds, using *Windvane* to create a *devastation orb of air*. Once you perform the ritual, *Windvane* can't be used to perform the ritual again until the next dawn.\n   " + '***Flaw***. Windvane makes its wielder mercurial and unreliable. While attuned to the weapon, you gain the following flaw: "I break my vows and plans. Duty and honor mean nothing to me."',
	attunement: true,
	weight: 3,
	languageProfs: ["Auran"],
	dmgres: ["Lightning"],
	usages: 1,
	recovery: "dawn",
	fixedDC: 17,
	spellcastingBonus: [{
		name: "Once per dawn",
		spells: ["dominate monster"],
		selection: ["dominate monster"],
		firstCol: "onceday",
	}],
	spellChanges: {
		"dominate monster": {
			description: "Air elemental save or Charmed, follows telepathic commands, 1 a for complete control; save on dmg",
			changes: "Can only affect an air elemental.",
		},
	},
	weaponOptions: [{
		baseWeapon: "spear",
		regExpSearch: /windvane/i,
		name: "Windvane",
		source: [["PotA", 225]],
		description: "Finesse, thrown, versatile (1d6); +1d6 Lightning damage",
		modifiers: [2, 2],
		selectNow: true,
	}],
	toNotesPage: [{
		name: "Features",
		note: [
			"A silver spear, Windvane has dark sapphires on the filigreed surface of its polished head. Held by its shining haft, the weapon feels insubstantial, as if clutching a cool, gently flowing breeze. The spear contains a spark of Yan-C-Bin, the Prince of Evil Air.",
			"I have a +2 bonus to attack and damage rolls made with this magic weapon, which has the finesse weapon property. When I hit with it, the target takes an extra 1d6 Lightning damage.",
			"While holding Windvane, I can speak Auran fluently, have resistance to Lightning damage, and can cast *Dominate Monster* (save DC 17) on an air elemental once per dawn.",
			"While inside an air node, I can perform a ritual called the Song of the Four Winds, using Windvane to create a Devastation Orb of Air. The ritual takes 1 hour to complete and requires 2,000 gp worth of special components, which are consumed. Once I perform the ritual, Windvane can't be used to perform the ritual again until the next dawn.",
			'Windvane makes me mercurial and unreliable. While attuned to the weapon, I gain the following flaw: "I break my vows and plans. Duty and honor mean nothing to me."',
		],
	}],
}
MagicItemsList["wingwear"] = {
	name: "Wingwear",
	source: [["PotA", 223]],
	type: "Wondrous Item",
	rarity: "Uncommon",
	description: "This snug uniform with leathery flaps has 3 charges, regaining all when placed in an air not for 1 hour. As a Bonus Action, I can expend 1 charge to gain 30 ft Fly Speed until I land or have 0 altitude. At the end of each of my turns, my altitude drops by 5 ft and I must move at least 30 ft horizontally or I fall.",
	descriptionFull: "This snug uniform has symbols of air stitched into it and leathery flaps that stretch along the arms, waist, and legs to create wings for gliding. A suit of *wingwear* has 3 charges. While you wear the suit, you can use a bonus action and expend 1 charge to gain a flying speed of 30 feet until you land. At the end of each of your turns, your altitude drops by 5 feet. Your altitude drops instantly to 0 feet at the end of your turn if you didn't fly at least 30 feet horizontally on that turn. When your altitude drops to 0 feet, you land (or fall), and you must expend another charge to use the suit again.\n   The suit regains all of its expended charges after spending at least 1 hour in an elemental air node.",
	attunement: true,
	usages: 3,
	recovery: "Air Node",
	additional: "recharge: 1 h in air node",
	action: [["bonus action", ""]],
}

// pub_20150415_AL-EE.js
// This file adds the optional backgrounds from the Adventurers League season 2 (Elemental Evil) to MPMB's Character Record Sheet

// Define the source
SourceList["AL:EE"] = {
	name: "Elemental Evil Backgrounds [Mulmaster]",
	abbreviation: "AL:EE",
	group: "Legacy Adventurers League",
	url: "https://www.dropbox.com/s/ljtrwzmkoijb02o/Mulmaster-Bonds-and-Backgrounds.pdf?dl=1", // used to be https://dndadventurersleague.org/wp-content/uploads/2015/04/Mulmaster-Bonds-and-Backgrounds.pdf
	date: "2015/04/15",
	defaultExcluded: true,
};

// Backgrounds
BackgroundList["caravan specialist"] = {
	regExpSearch: /^(?=.*caravan)(?=.*specialist).*$/i,
	name: "Caravan Specialist",
	source: [["AL:EE", 2]],
	skills: ["Animal Handling", "Survival"],
	gold: 10,
	equipleft: [
		["Two-person tent", "", 20],
		["Regional map", "", ""],
	],
	equipright: [
		["Traveler's clothes", "", 4],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Wagonmaster",
	trait: [
		"Any group is only as strong as its weakest link. Everyone has to pull their own weight.",
		"There's always someone out there trying to take what I've got. Always be vigilant.",
		"Anything can be learned if you have the right teacher. Most folks just need a chance.",
		"Early to bed and early to rise; this much at least is under my control.",
		"You can listen to me or don't and wish you had. Everyone ends up on one side of that fence.",
		"Eventually my hard work will be rewarded. Maybe that time has finally come.",
		"A strong ox or horse is more reliable than most people I've met.",
		"I never had time for books, but wish I had. I admire folks who have taken the time to learn.",
	],
	ideal: [
		["Service",
			"Service: Using my talents to help others is the best way of helping myself. (Good)",
		],
		["Selfish",
			"Selfish: What people don't know WILL hurt them, but why is that my problem? (Evil)",
		],
		["Wanderer",
			"Wanderer: I go where the road takes me. Sometimes that's a good thing… (Chaotic)",
		],
		["Fittest",
			"Fittest: On the open road, the law of nature wins. Victims are the unprepared. (Lawful)",
		],
		["Focused",
			"Focused: I simply have a job to do, and I'm going to do it. (Neutral)",
		],
		["Motivated",
			"Motivated: There's a reason I'm good at what I do, I pay attention to the details. (Any)",
		],
	],
	bond: [
		"My brother has a farm In Elmwood and I've helped him and his neigbors move their goods to Mulmaster and other surrounding towns. Those are good people.",
		"A caravan I lead was attacked by bandits and many innocents died. I swear that I will avenge them by killing any bandits I encounter.",
		"The Soldiery are mostly good guys who understand the importance of protecting the roads. The City Watch is who you have to look out for. If they are inspecting your goods, get ready to pay a fine.",
		"The new commander of Southroad Tower, Capt. Holke, understands the importance of safe roads. He's hired me for several jobs and I'm grateful.",
		"There's always a road I haven't traveled before. I'm always looking for new places to explore.",
		"Wealth and power mean little without the freedom to go where and when you want.",
	],
	flaw: [
		"I have trouble trusting people I've just met.",
		"I enjoy the open road. Underground and tight spaces make me very nervous.",
		"I expect others to heed my orders and have little respect or sympathy if they don't.",
		"I am very prideful and have trouble admitting when I'm wrong.",
		"Once I decide on a course of action, I do not waver.",
		"I like to explore, and my curiosity will sometimes get me into trouble.",
	],
	toolProfs: ["Vehicles (land)"],
	languageProfs: [1],
	lifestyle: "poor",
};
BackgroundList["earthspur miner"] = {
	regExpSearch: /^(?=.*earthspur)(?=.*miner).*$/i,
	name: "Earthspur Miner",
	source: [["AL:EE", 3]],
	skills: ["Athletics", "Survival"],
	gold: 5,
	equipleft: [
		["Shovel or miner's pick", "", 5],
		["Block and tackle", "", 5],
		["Climber's kit", "", 12],
	],
	equipright: [
		["Common clothes", "", 3],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Deep Miner",
	trait: [
		"Nothing bothers me for long.",
		"I hate the horrors of the Underdark with a passion. They took my friends and family and almost got me.",
		"Anything worth doing takes time and patience. I have learned to plan and wait for the things I want and to be patient to achieve my goals.",
		"I can party with everyone. Whether with dwarves, or goliaths, or deep gnomes, I can find a way to have a good time.",
		"I'd rather be mining. This is okay; mining is better.",
		"I think that I will stumble upon great riches if I just keep looking.",
		"People who don't work with their hands and who live in houses are soft and weak.",
		"I wish I were more educated. I look up to people who are.",
	],
	ideal: [
		["Generosity",
			"Generosity: The riches of the earth are to be shared by all. (Good)",
		],
		["Greed",
			"Greed: Gems and precious metals, I want them all for myself. (Evil)",
		],
		["Mooch",
			"Mooch: Property, schmoperty. If I need it, I take and use it. If I don't, I leave it for someone else. (Chaotic)",
		],
		["Boundaries",
			"Boundaries: Everything and everyone has its prescribed place; I respect that and expect others to do the same. (Lawful) ",
		],
		["Let it Be",
			"Let it Be: I don't meddle in the affairs of others if I can avoid it. They're none of my business. (Neutral)",
		],
		["Materialist",
			"Materialist: I want riches to improve my life. (Any)",
		],
	],
	bond: [
		"The people of the Earthspur mines are my family. I will do anything to protect them.",
		"A deep gnome saved my life when I was injured and alone. I owe his people a great debt.",
		"I must behold and preserve the natural beauty of places below the earth.",
		"Gems hold a special fascination for me, more than gold, land, magic, or power.",
		"I want to explore new depths and scale new heights.",
		"Someday I'm going to find the mother lode, then I'll spend the rest of my life in luxury.",
	],
	flaw: [
		"I'm uncomfortable spending time under the open sky. I'd rather be indoors or underground.",
		"I'm not used to being around other people much and sometimes get grouchy about it.",
		"Good tools are more reliable than people. In a cave in, I would save a sturdy pick before a stranger.",
		"I jealously guard my secrets, because I think others will take advantage of me if they learn what I know.",
		"I am obsessed with getting rich. I always have a scheme brewing for making it big.",
		"I'm afraid of the dark.",
	],
	languageProfs: ["Dwarvish", "Undercommon"],
	lifestyle: "poor",
};
BackgroundList["harborfolk"] = {
	regExpSearch: /harborfolk/i,
	name: "Harborfolk",
	source: [["AL:EE", 4]],
	skills: ["Athletics", "Sleight of Hand"],
	gold: 5,
	equipleft: [
		["Fishing tackle", "", 4],
		["Set of dice, playing cards, or three-dragon ante", "", ""],
	],
	equipright: [
		["Common clothes", "", 3],
		["Belt pouch (with coins)", "", 1],
		["Rowboat", "", 100],
	],
	feature: "Harborfolk",
	trait: [
		"I am curious. I want to know why things are the way they are and why people do the things that they do.",
		"I can't sing, but that never stops me from doing it, loudly. Everyone loves a good sea chanty!",
		"I think the High Blade is doing a terrific job, don't you?",
		"I'm very excited that the House Built on Gold is being restored. I am a zealous worshipper of Waukeen.",
		"I am quite superstitious. I see portents in everyday occurances.",
		"I resent the rich and enjoy thwarting their plans and spoiling their fun in small ways.",
		"I have a sea story to fit every occasion.",
		"I'm a fisher, but I secretly detest eating fish. I will do anything to avoid it.",
	],
	ideal: [
		["Calm",
			"Calm: For all things, there is a tide. I set sail when it is right, and mend my nets when it is not. (Lawful)",
		],
		["Windblown",
			"Windblown: I go where the winds blow. No man or woman tells me where or when to sail. (Chaotic)",
		],
		["Aspiring",
			"Aspiring: I will gain the favor of a Zor or Zora patron, maybe even one of the Blades! (Any)",
		],
		["Salty",
			"Salty: I want people to look to me as an expert on plying Mulmaster Harbor. (Any)",
		],
		["Selfless",
			"Selfless: We are all children of the sea. I help everyone in peril afloat and ashore. (Good)",
		],
		["Let them Drown",
			"Let them Drown: I refuse to risk my hide to help others. They wouldn't help me if roles were reversed. (Evil)",
		],
	],
	bond: [
		"I once lost everything but my rowboat. I'll do anything to protect it.",
		"My brother was in the Soldiery, but he was killed. I really look up to the men and women who serve.",
		"The Cloaks killed my friend for spellcasting. I'll get them back somehow, someday.",
		"The High House of Hurting helped me when I was hurt and asked nothing in return. I owe them my life.",
		"I was robbed in the Zhent ghetto once. It will not happen again.",
		"I would do anything to protect the other harborfolk. They are my family.",
	],
	flaw: [
		"I drink too much, which causes me to miss the tide.",
		"I killed a drunk member of the City Watch in a brawl. I am terrified that they might find out.",
		"I oversell myself and make promises I can't keep when I want to impress someone.",
		"Book learning is a waste of time. I have no patience for people who don't speak from experience.",
		"I almost always cheat. I can't help myself.",
		"I am a secret informant for the Hawks. I send them reports about everything I see and hear, even what my friends and allies are up to.",
	],
	toolProfs: [["Gaming set", 1], "Vehicles (water)"],
	lifestyle: "poor",
};
BackgroundList["mulmaster aristocrat"] = {
	regExpSearch: /^(?=.*mulmaster)(?=.*aristocrat).*$/i,
	name: "Mulmaster Aristocrat",
	source: [["AL:EE", 5]],
	skills: ["Deception", "Performance"],
	gold: 10,
	equipleft: [
		["Artisan's tools or musical instrument", "", ""],
	],
	equipright: [
		["Fine clothes", "", 6],
		["Purse (with coins)", "", 1],
	],
	feature: "Highborn",
	trait: [
		"My ambitions are boundless. I will be a Zor or Zora one day!",
		"I must alwayss look my best.",
		"Beauty is everywhere. I can find it in even the homliest person and the most horrible tragedy.",
		"Décorum must be preserved at all costs.",
		"I will not admit I am wrong if I can avoid it.",
		"I am extremely well-educated and frequently remind others of that fact.",
		"I take what I can today, because I do not know what tomorrow holds.",
		"My life is full of dance, song, drink, and love.",
	],
	ideal: [
		["Generous",
			"Generous: I have a responsibility to help and protect the less fortunate. (Good)",
		],
		["Loyal",
			"Loyal: My word, once given, is my bond. (Lawful)",
		],
		["Callous",
			"Callous: I am unconcerned with any negative effects my actions may have on the lives and fortunes of others. (Evil)",
		],
		["Impulsive",
			"Impulsive: I follow my heart. (Chaotic)",
		],
		["Ignorant",
			"Ignorant: Explanations bore me. (Neutral)",
		],
		["Isolationist",
			"Isolationist: I am concerned with the fortunes of my friends and family. Others must see to themselves. (Any)",
		],
	],
	bond: [
		"I have dedicated my wealth and my talents to the service of one of the city's many temples.",
		"My family and I are loyal supporters of High Blade Jaseen Drakehorn. Our fortunes are inexorably tied to hers. I would do anything to support her.",
		"Like many families who were close to High Blade Selfaril Uoumdolphin, mine has suffered greatly since his fall. We honor his memory in secret.",
		"My family plotted with Rassendyll Uoumdolphin brother usurped brother as High Blade. Betrayal is the quickest route to power.",
		"Wealth and power are nothing. Fulfillment can only be found in artistic expression.",
		"It's not how you feel, who you know, or what you can do - it's how you look, and I look fabulous.",
	],
	flaw: [
		"I have difficulty caring about anyone or anything other than myself.",
		"Having grown up with wealth, I am careless with my finances. I overspend and am overly generous.",
		"The ends (my advancement) justify any means.",
		"I must have what I want and will brook no delay.",
		"My family has lost everything. I must keep up appearances, lest we become a laughingstock.",
		"I have no artistic sense. I hide that fact behind extreme opinons and have become a trendsetter.",
	],
	toolProfs: [["Artisan's tools", 1], ["Musical instrument", 1]],
	lifestyle: "wealthy",
};
BackgroundList["phlan refugee"] = {
	regExpSearch: /^(?=.*phlan)(?=.*refugee).*$/i,
	name: "Phlan Refugee",
	source: [["AL:EE", 6]],
	skills: ["Insight", "Athletics"],
	gold: 15,
	equipleft: [
		["Set of artisan's tools", "", ""],
		["Token of the life I once knew", "", ""],
	],
	equipright: [
		["Traveler's clothes", "", 4],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Phlan Survivor",
	trait: [
		"I may have lost everything I worked for most of my life, but there's work to be done, no time to linger on the past.",
		"I worked hard to get where I am and I refuse to let a little hardship stop me from succeeding.",
		"I protect those around me, you never know when one of them will be useful.",
		"I have always gotten ahead by giving, why change now?",
		"I prepare for everything, it paid off in Phlan and it will pay off again.",
		"I will reclaim my home, though the path may be long, I will never give up hope.",
		"I never cared for personal hygiene, and am amazed that It bothers others.",
		"I am always willing to volunteer my services, just as long as don't have to do anything.",
	],
	ideal: [
		["Justice",
			"Justice: Corruption brought Phlan down, I will not tolerate that any longer. (Lawful)",
		],
		["Acceptance",
			"Acceptance: Stability is a myth, to think you can control your future is futile. (Chaotic)",
		],
		["Hope",
			"Hope: I am guided by a higher power and I trust that everything will be right in the end. (Good)",
		],
		["Restraint",
			"Restraint: I hate those who caused my loss. It is all I can do not to lash out at them. (Any)",
		],
		["Strength",
			"Strength: As shown in Phlan, the strong survive. If you are weak you deserve what you get (Evil)",
		],
		["Openness",
			"Openness: I am always willing to share my life story with anyone who will listen. (Any)",
		],
	],
	bond: [
		"I have the chance at a new life and this time I am going to do things right.",
		"The Lord Regent brought this suffering upon his people. I will see him brought to justice.",
		"I await the day I will be able to return to my home in Phlan.",
		"I will never forget the debt owed to Glevith of the Welcomers. I will be ready to repay that debt when called upon.",
		"There was someone I cared about in Phlan, I will find out what happened to them.",
		"Some say my life wasn't worth saving, I will prove them wrong.",
	],
	flaw: [
		"I used the lives of children to facilitate my escape from Phlan.",
		"I am a sucker for the underdog, and always bet on the loosing team.",
		"I am incapable of standing up for myself.",
		"I will borrow money from friends with no intention to repay it.",
		"I am unable to keep secrets. A secret is just an untold story.",
		"When something goes wrong, it's never my fault.",
	],
	toolProfs: [["Artisan's tools", 1]],
	languageProfs: [1],
	lifestyle: "modest",
};

// Background features
BackgroundFeatureList["wagonmaster"] = {
	description: "I'm used to being in charge. My reputation has me on a short list for critical jobs, allows me to attract two more loyal workers for caravaning, and causes others to look to me for direction. I can identify the most defensible locations for camping. I have a great memory for maps and geography. While travelling, I can always find my cardinal directions.",
	source: [["AL:EE", 2]],
};
BackgroundFeatureList["deep miner"] = {
	description: "I am used to navigating the deep places of the earth. I never get lost in caves or mines if I have either seen an accurate map of them or have been through them before. Furthermore, I am able to scrounge fresh water and food for myself and as many as five other people each day if I am in a mine or natural caves.",
	source: [["AL:EE", 3]],
};
BackgroundFeatureList["harborfolk"] = {
	description: "I grew up on the docks and waters of Mulmaster Harbor. The harborfolk remember me and still treat me as one of them. They welcome me and my companions. While they might charge me for it, they'll always offer what food and shelter they have; they'll even hide me if the City Watch is after me (but not if the Hawks are).",
	source: [["AL:EE", 4]],
};
BackgroundFeatureList["highborn"] = {
	description: "Mulmaster is run by and for its aristoracy. Every other class of citizen in the city defers to me, and even the priesthood, Soldiery, Hawks, and Cloaks treat me with deference. Other aristocrats and nobles accept me in their circles and likely know me or of me. My connections can get me the ear of a Zor or Zora under the right circumstances.",
	source: [["AL:EE", 5]],
};
BackgroundFeatureList["phlan survivor"] = {
	description: "Whatever my prior standing I'm now one of the many refugees that came to Mulmaster. I'm able to find refuge with others from Phlan and those who sympathize with my plight. Within Mulmaster this means that I can find a place to sleep, recover, and hide from the watch with either other refugees from Phlan, or the Zhents within the ghettos.",
	source: [["AL:EE", 6]],
};

// pub_20150416_EE.js
// This file adds all the player-material from the Elemental Evil Player's Companion (November 2017, after the XGtE update) to MPMB's Character Record Sheet

// Define the source
SourceList["E"] = {
	name: "Elemental Evil Player's Companion", // November 2017 version
	abbreviation: "EE",
	abbreviationSpellsheet: "EE",
	group: "Legacy Sources",
	campaignSetting: "Forgotten Realms",
	url: "https://www.dropbox.com/scl/fi/h3rt7296724s6p8xgr1w2/Elemental-Evil-Players-Companion-v2017.pdf?rlkey=99p2n6gpk0qcz9r3hdjka0b9y&dl=1", // used to be https://media.dnd.wizards.com/EE-Players-Companion_0_0.pdf
	date: "2015/04/16",
	defaultExcluded: true,
};

// Races
RaceList["aarakocra"] = {
	regExpSearch: /aarakocra/i,
	name: "Aarakocra",
	source: [["E", 5], ["W", 166]],
	plural: "Aarakocra",
	size: 3,
	speed: {
		walk: { spd: 25, enc: 15 },
		fly: { spd: 50, enc: 0 },
	},
	languageProfs: ["Common", "Aarakocra", "Auran"],
	weaponOptions: [{
		baseWeapon: "unarmed strike",
		regExpSearch: /talon/i,
		name: "Talons",
		source: [["E", 5], ["W", 166]],
		damage: [1, 4, "slashing"],
		selectNow: true,
	}],
	age: " reach maturity by age 3 and live about 30 years",
	height: " are about 5 feet tall",
	weight: " weigh between 80 and 100 lb",
	heightMetric: " are about 1,5 metres tall",
	weightMetric: " weigh between 36 and 45 kg",
	trait: [
		"**Aarakocra**",
		"##\u25C6 Flight##. I have a Fly Speed of 50 ft. To use this speed, I can't be wearing medium or heavy armor.",
		"##\u25C6 Talons##. My unarmed strikes deal 1d4 Slashing damage on a hit.",
	].join("\n"),
};
RaceList["deep gnome"] = {
	regExpSearch: /^((?=.*svirfneblin)|((?=.*\bgnomes?\b)(?=.*\b(underdarks?|deep|depths?)\b))).*$/i,
	name: "Svirfneblin",
	sortname: "Gnome, Deep (Svirfneblin)",
	source: [["E", 7], ["S", 115], ["MToF", 113]],
	plural: "Svirfneblin",
	size: 4,
	speed: {
		walk: { spd: 25, enc: 15 },
	},
	languageProfs: ["Common", "Gnomish", "Undercommon"],
	vision: [["Darkvision", 120]],
	savetxt: { text: ["Adv on Int/Wis/Cha saves vs magic"] },
	age: " are considered full-grown adults when they reach 25 and live 200 to 250 years",
	height: " stand between 3 and 3 1/2 feet tall (2'9\" + 2d4\")",
	weight: " weigh around 90 lb (80 + 2d4 \xD7 1d4 lb)",
	heightMetric: " stand between 90 and 105 cm tall (85 + 5d4 cm)",
	weightMetric: " weigh around 50 kg (35 + 5d4 \xD7 4d4 / 10 kg)",
	trait: [
		"**Svirfneblin**",
		"##\u25C6 Stone Camouflage##. I have Advantage on Dexterity (stealth) checks to hide in rocky terrain.",
	].join("\n"),
};
RaceList["air genasi"] = {
	regExpSearch: /^(?=.*(genasi|planetouched))(?=.*\bairs?\b).*$/i,
	name: "Air genasi",
	sortname: "Genasi, Air",
	source: [["E", 9], ["W", 172]],
	plural: "Air genasi",
	size: 3,
	speed: {
		walk: { spd: 30, enc: 20 },
	},
	languageProfs: ["Common", "Primordial"],
	age: " reach adulthood in their late teens and live up to 120 years",
	height: " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight: " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric: " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric: " weigh around 75 lb (50 + 5d10 \xD7 4d4 / 10 kg)",
	trait: [
		"**Air Genasi**",
		"##\u25C6 Unending Breath##. I can hold my breath indefinitely while I am not Incapacitated.",
		"##\u25C6 Mingle with the Wind##. I can cast the *Levitate* spell once with this trait, requiring no material components, and I regain the ability to cast it this way when I finish a Long Rest. Constitution is my spellcasting ability for this spell.",
	].join("\n"),
	spellcastingAbility: 3,
	features: {
		"levitate": {
			name: "Mingle with the Wind",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Mingle with the Wind",
				spells: ["levitate"],
				selection: ["levitate"],
				firstCol: "oncelr",
			}],
			spellChanges: {
				"levitate": {
					components: "V,S",
					compMaterial: "",
					changes: "Using Mingle with the Wind, I can cast *Levitate* once per Long Rest without requiring material components.",
				},
			},
		},
	},
};
RaceList["earth genasi"] = {
	regExpSearch: /^(?=.*(genasi|planetouched))(?=.*\bearths?\b).*$/i,
	name: "Earth genasi",
	sortname: "Genasi, Earth",
	source: [["E", 9], ["W", 172]],
	plural: "Earth genasi",
	size: 3,
	speed: {
		walk: { spd: 30, enc: 20 },
	},
	languageProfs: ["Common", "Primordial"],
	age: " reach adulthood in their late teens and live up to 120 years",
	height: " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight: " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric: " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric: " weigh around 75 lb (50 + 5d10 \xD7 4d4 / 10 kg)",
	trait: [
		"**Earth Genasi**",
		"##\u25C6 Earth Walk##. I can move across difficult terrain made of earth or stone without expending extra movement.",
		"##\u25C6 Merge with Stone##. I can cast the *Pass without Trace* spell once with this trait, requiring no material components, and I regain the ability to cast it this way when I finish a Long Rest. Constitution is my spellcasting ability for this spell.",
	].join("\n"),
	spellcastingAbility: 3,
	features: {
		"pass without trace": {
			name: "Merge with Stone",
			minlevel: 1,
			spellcastingBonus: [{
				name: "Merge with Stone",
				spells: ["pass without trace"],
				selection: ["pass without trace"],
				firstCol: "oncelr",
			}],
			spellChanges: {
				"pass without trace": {
					components: "V,S",
					compMaterial: "",
					changes: "Using Merge with Stone, I can cast *Pass without Trace* once per Long Rest without requiring material components.",
				},
			},
		},
	},
};
RaceList["fire genasi"] = {
	regExpSearch: /^(?=.*(genasi|planetouched))(?=.*\bfires?\b).*$/i,
	name: "Fire genasi",
	sortname: "Genasi, Fire",
	source: [["E", 9], ["W", 172]],
	plural: "Fire genasi",
	vision: [["Darkvision", 60]],
	size: 3,
	speed: {
		walk: { spd: 30, enc: 20 },
	},
	languageProfs: ["Common", "Primordial"],
	dmgres: ["Fire"],
	age: " reach adulthood in their late teens and live up to 120 years",
	height: " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight: " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric: " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric: " weigh around 75 lb (50 + 5d10 \xD7 4d4 / 10 kg)",
	trait: [
		"**Fire Genasi**",
		"##\u25C6 Reach to the Blaze##. I know the *Produce Flame* cantrip.",
		"Once I reach 3rd level, I can cast the *Burning Hands* spell once as a 1st-level spell.",
		"I regain the ability to cast it this way when I finish a Long Rest.",
		"Constitution is my spellcasting ability for these spells.",
	].join("\n"),
	spellcastingAbility: 3,
	spellcastingBonus: [{
		name: "Reach to the Blaze (level 1)",
		spells: ["produce flame"],
		selection: ["produce flame"],
		firstCol: "atwill",
	}],
	features: {
		"burning hands": {
			name: "Reach to the Blaze (level 3)",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Reach to the Blaze (level 3)",
				spells: ["burning hands"],
				selection: ["burning hands"],
				firstCol: "oncelr",
			}],
		},
	},
};
RaceList["water genasi"] = {
	regExpSearch: /^(?=.*(genasi|planetouched))(?=.*\bwaters?\b).*$/i,
	name: "Water genasi",
	sortname: "Genasi, Water",
	source: [["E", 10], ["W", 172]],
	plural: "Water genasi",
	size: 3,
	speed: {
		walk: { spd: 30, enc: 20 },
		swim: { spd: 30, enc: 20 },
	},
	languageProfs: ["Common", "Primordial"],
	dmgres: ["Acid"],
	age: " reach adulthood in their late teens and live up to 120 years",
	height: " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight: " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric: " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric: " weigh around 75 lb (50 + 5d10 \xD7 4d4 / 10 kg)",
	trait: [
		"**Water Genasi**",
		"##\u25C6 Amphibious##. I can breathe air and water.",
		"##\u25C6 Swim##. I have a Swim Speed of 30 ft.",
		"##\u25C6 Call to the Wave##. I know the *Shape Water* cantrip.",
		"When I reach 3rd level, I can cast the *Create or Destroy Water* spell as a 2nd-level spell once with this trait, and I regain the ability to cast it this way when I finish a Long Rest.",
		"Constitution is my spellcasting ability for these spells.",
	].join("\n"),
	spellcastingAbility: 3,
	spellcastingBonus: [{
		name: "Call to the Wave (level 1)",
		spells: ["shape water"],
		selection: ["shape water"],
		firstCol: "atwill",
	}],
	features: {
		"create or destroy water": {
			name: "Call to the Wave (level 3)",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Call to the Wave (level 3)",
				spells: ["create or destroy water"],
				selection: ["create or destroy water"],
				firstCol: "oncelr",
			}],
		},
	},
};

// Feat
FeatsList["svirfneblin magic"] = {
	name: "Svirfneblin Magic",
	source: [["E", 7], ["S", 115], ["MToF", 114]],
	prerequisite: "Being a Svirfneblin (Deep Gnome)",
	prereqeval: function (v) { return CurrentRace.known === "deep gnome"; },
	descriptionFull: "You have inherited the innate spellcasting ability of your ancestors. This ability allows you to cast *Nondetection* on yourself at will, without needing a material component. You can also cast each of the following spells once with this ability: *Blindness/Deafness*, *Blur*, and *Disguise Self*. You regain the ability to cast these spells when you finish a long rest.\n   Intelligence is your spellcasting ability for these spells, and you cast them at their lowest possible levels.",
	description: "I can cast *Nondetection* on myself at will, without a material component. I can also cast the spells *Blindness/Deafness*, *Blur*, and *Disguise Self* once each. I regain the ability to cast these spells when I finish a Long Rest. Intelligence is my spellcasting ability for these spells.",
	spellcastingBonus: [{
		name: "at will (self only)",
		spellcastingAbility: 4,
		spells: ["nondetection"],
		selection: ["nondetection"],
		firstCol: "atwill",
	}, {
		name: "1\xD7 long rest (self only)",
		spells: ["blindness/deafness", "blur", "disguise self"],
		selection: ["blindness/deafness", "blur", "disguise self"],
		firstCol: "oncelr",
		times: 3,
	}],
	spellChanges: {
		"nondetection": {
			range: "Self",
			components: "V,S",
			compMaterial: "",
			description: "I am hidden from all divination magic",
			changes: "Using Svirfneblin Magic, I can cast *Nondetection* without a material component, but only on myself.",
		},
	},
};

// Spells
SpellsList["abi-dalzim's horrid wilting"] = {
	name: "Abi-Dalzim's Horrid Wilting",
	nameShort: "Abi-D's Horrid Wilting",
	nameAlt: "Horrid Wilting",
	classes: ["sorcerer", "wizard"],
	source: [["X", 150], ["E", 15]],
	level: 8,
	school: "Necro",
	time: "Act",
	range: "150 ft",
	components: "V,S,M",
	compMaterial: "A bit of sponge",
	duration: "Instantaneous",
	save: "Con",
	description: "30-ft cube all crea 12d8 Necrotic dmg; save halves; Plants/water elem. dis. const/Undead immune",
	descriptionFull: "You draw the moisture from every creature in a 30-foot cube centered on a point you choose within range. Each creature in that area must make a Constitution saving throw. Constructs and undead aren't affected, and plants and water elementals make this saving throw with disadvantage. A creature takes 12d8 necrotic damage on a failed save, or half as much damage on a successful one." + "\n   " + "Nonmagical plants in the area that aren't creatures, such as trees and shrubs, wither and die instantly.",
};
SpellsList["absorb elements"] = {
	name: "Absorb Elements",
	classes: ["artificer", "druid", "ranger", "sorcerer", "wizard"],
	source: [["X", 150], ["E", 15]],
	level: 1,
	school: "Abjur",
	time: "React",
	timeFull: "Reaction, which you take when you take Acid, Cold, Fire, Lightning, or Thunder damage",
	range: "Self",
	components: "S",
	duration: "1 rnd",
	description: "Acid, Cold, Fire, Lightning, or Thunder resistance till next turn start; first melee hit +1d6+1d6/SL dmg",
	descriptionFull: "The spell captures some of the incoming energy, lessening its effect on you and storing it for your next melee attack. You have resistance to the triggering damage type until the start of your next turn. Also, the first time you hit with a melee attack on your next turn, the target takes an extra 1d6 damage of the triggering type, and the spell ends." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each slot level above 1st.",
};
SpellsList["aganazzar's scorcher"] = {
	name: "Aganazzar's Scorcher",
	nameAlt: "Scorch", //as per the Spell Compendium's (DnD 3.5e) alternative name
	classes: ["sorcerer", "wizard"],
	source: [["X", 150], ["E", 15]],
	level: 2,
	school: "Evoc",
	time: "Act",
	range: "30-ft line",
	components: "V,S,M",
	compMaterial: "A red dragon's scale",
	duration: "Instantaneous",
	save: "Dex",
	description: "30-ft long 5-ft wide line all creatures 3d8+1d8/SL Fire dmg; save halves",
	descriptionFull: "A line of roaring flame 30 feet long and 5 feet wide emanates from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 3d8 fire damage on a failed save, or half as much damage on a successful one." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd.",
};
SpellsList["beast bond"] = {
	name: "Beast Bond",
	classes: ["druid", "ranger"],
	source: [["X", 150], ["E", 15]],
	level: 1,
	school: "Div",
	time: "Act",
	range: "Touch",
	components: "V,S,M",
	compMaterial: "A bit of fur wrapped in a cloth",
	duration: "Conc, 10 min",
	description: "Telepathic link with 1 Beast Int<4 while in line of sight; Beast has Adv on attacks vs crea I can see",
	descriptionFull: "You establish a telepathic link with one beast you touch that is friendly to you or charmed by you. The spell fails if the beast's Intelligence is 4 or higher. Until the spell ends, the link is active while you and the beast are within line of sight of each other. Through the link, the beast can understand your telepathic messages to it, and it can telepathically communicate simple emotions and concepts back to you. While the link is active, the beast gains advantage on attack rolls against any creature within 5 feet of you that you can see.",
};
SpellsList["bones of the earth"] = {
	name: "Bones of the Earth",
	classes: ["druid"],
	source: [["X", 150], ["E", 15]],
	level: 6,
	school: "Trans",
	time: "Act",
	range: "120 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: "Dex",
	description: "6+2/SL 5-ft dia stone lift up 30 ft; \u2265Medium crea save or lifted, 6d6 Bludg. dmg if hit ceiling; see B",
	descriptionShorter: "6+2/SL 5-ft dia stone lift up 30 ft; \u2265Medium crea save or lift, 6d6 Bludg. dmg if hit ceiling; see B",
	descriptionShorterMetric: "6+2/SL 1,5-m dia stone lift 9 m; \u2265Medium crea save or lift, 6d6 Bludg. dmg if hit ceiling; see B",
	descriptionFull: "You cause up to six pillars of stone to burst from places on the ground that you can see within range. Each pillar is a cylinder that has a diameter of 5 feet and a height of up to 30 feet. The ground where a pillar appears must be wide enough for its diameter, and you can target the ground under a creature if that creature is Medium or smaller. Each pillar has AC 5 and 30 hit points. When reduced to 0 hit points, a pillar crumbles into rubble, which creates an area of difficult terrain with a 10-foot radius that lasts until the rubble is cleared. Each 5-foot-diameter portion of the area requires at least 1 minute to clear by hand.\n   If a pillar is created under a creature, that creature must succeed on a Dexterity saving throw or be lifted by the pillar. A creature can choose to fail the save.\n   If a pillar is prevented from reaching its full height because of a ceiling or other obstacle, a creature on the pillar takes 6d6 bludgeoning damage and is restrained, pinched between the pillar and the obstacle. The restrained creature can use an action to make a Strength or Dexterity check (the creature's choice) against the spell's save DC. On a success, the creature is no longer restrained and must either move off the pillar or fall off it." + AtHigherLevels + "When you cast this spell using a spell slot of 7th level or higher, you can create two additional pillars for each slot level above 6th.",
};
SpellsList["catapult"] = {
	name: "Catapult",
	classes: ["artificer", "sorcerer", "wizard"],
	source: [["X", 150], ["E", 15]],
	level: 1,
	school: "Trans",
	time: "Act",
	range: "60 ft",
	components: "S",
	duration: "Instantaneous",
	save: "Dex",
	description: "Send 5+5/SL lb unattended object in 90 ft straight line; if crea hit, save or 3d8+1d8/SL Bludg. dmg",
	descriptionFull: "Choose one object weighing 1 to 5 pounds within range that isn't being worn or carried. The object flies in a straight line up to 90 feet in a direction you choose before falling to the ground, stopping early if it impacts against a solid surface. If the object would strike a creature, that creature must make a Dexterity saving throw. On a failed save, the object strikes the target and stops moving. When the object strikes something, the object and what it strikes each take 3d8 bludgeoning damage." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the maximum weight of objects that you can target with this spell increases by 5 pounds, and the damage increases by 1d8, for each slot level above 1st.",
};
SpellsList["control flames"] = {
	name: "Control Flames",
	classes: ["druid", "sorcerer", "wizard"],
	source: [["X", 152], ["E", 16]],
	level: 0,
	school: "Trans",
	time: "Act",
	range: "60 ft",
	components: "S",
	duration: "Instant. or 1 h",
	description: "Nonmagical flame up to 5 cu ft; instant: expand/extinguish, 1h: brighten/dim/color/create shapes",
	descriptionFull: "You choose nonmagical flame that you can see within range and that fits within a 5-foot cube. You affect it in one of the following ways." + "\n \u2022 " + "You instantaneously expand the flame 5 feet in one direction, provided that wood or other fuel is present in the new location." + "\n \u2022 " + "You instantaneously extinguish the flames within the cube." + "\n \u2022 " + "You double or halve the area of bright light and dim light cast by the flame, change its color, or both. The change lasts for 1 hour." + "\n \u2022 " + "You cause simple shapes-such as the vague form of a creature, an inanimate object, or a location-to appear within the flames and animate as you like. The shapes last for 1 hour." + "\n   " + "If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.",
};
SpellsList["control winds"] = {
	name: "Control Winds",
	classes: ["druid", "sorcerer", "wizard"],
	source: [["X", 152], ["E", 16], ["UA:D", 8]],
	level: 5,
	school: "Trans",
	time: "Act",
	range: "300 ft",
	components: "V,S",
	duration: "Conc, 1 h",
	description: "100-ft cube of air either gusts, downdraft, or updraft; affects flying/jump/ranged; 1 a change; see B",
	descriptionFull: "You take control of the air in a 100-foot cube that you can see within range. Choose one of the following effects when you cast the spell. The effect lasts for the spell's duration, unless you use your action on a later turn to switch to a different effect. You can also use your action to temporarily halt the effect or to restart one you've halted." + "\n   ***Gusts***: A wind picks up within the cube, continually blowing in a horizontal direction you designate. You choose the intensity of the wind: calm, moderate, or strong. If the wind is moderate or strong, ranged weapon attacks that enter or leave the cube or pass through it have disadvantage on their attack rolls. If the wind is strong, any creature moving against the wind must spend 1 extra foot of movement for each foot moved." + "\n   ***Downdraft***: You cause a sustained blast of strong wind to blow downward from the top of the cube. Ranged weapon attacks that pass through the cube or that are made against targets within it have disadvantage on their attack rolls. A creature must make a Strength saving throw if it flies into the cube for the first time on a turn or starts its turn there flying. On a failed save, the creature is knocked prone." + "\n   ***Updraft***: You cause a sustained updraft within the cube, rising upward from the cube's bottom side. Creatures that end a fall within the cube take only half damage from the fall. When a creature in the cube makes a vertical jump, the creature can jump up to 10 feet higher than normal.",
};
SpellsList["create bonfire"] = {
	name: "Create Bonfire",
	classes: ["artificer", "druid", "sorcerer", "warlock", "wizard"],
	source: [["X", 152], ["E", 16]],
	level: 0,
	school: "Conj",
	time: "Act",
	range: "60 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	save: "Dex",
	description: "5-ft cube all crea now/enter/end turn save or 1d8 Fire dmg; ignites flammable; +1d8 at CL 5/11/17",
	descriptionMetric: "1,5m cube all crea now/enter/end turn save or 1d8 Fire dmg; ignites flammable; +1d8 at CL 5/11/17",
	descriptionShorter: "5-ft cube all now/enter/end save or 1d8 Fire dmg; ignites flammable; +1d8 at CL 5,11,17",
	descriptionCantripDie: "5-ft cube all crea at casting, entering, or end turn in save or `CD`d8 Fire dmg; ignites flammable",
	descriptionFull: "You create a bonfire on ground that you can see within range. Until the spell ends, the magic bonfire fills a 5-foot cube. Any creature in the bonfire's space when you cast the spell must succeed on a Dexterity saving throw or take 1d8 fire damage. A creature must also make the saving throw when it moves into the bonfire's space for the first time on a turn or ends its turn there." + "\n   " + "The bonfire ignites flammable objects in its area that aren't being worn or carried." + "\n   " + "The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
};
SpellsList["dust devil"] = {
	name: "Dust Devil",
	classes: ["druid", "sorcerer", "wizard"],
	source: [["X", 154], ["E", 17]],
	level: 2,
	school: "Conj",
	time: "Act",
	range: "60 ft",
	components: "V,S,M",
	compMaterial: "A pinch of dust",
	duration: "Conc, 1 min",
	save: "Str",
	description: "5-ft cube; all in 5-ft 1d8+1d8/SL Bludg. dmg and pushed 10 ft away; save halves, no push; see B",
	descriptionShorterMetric: "1,5m cube; all in 1,5 m 1d8+1d8/SL Bludg. dmg \x26 push 3 m away; save half, no push; see B",
	descriptionFull: "Choose an unoccupied 5-foot cube of air that you can see within range. An elemental force that resembles a dust devil appears in the cube and lasts for the spell's duration." + "\n   " + "Any creature that ends its turn within 5 feet of the dust devil must make a Strength saving throw. On a failed save, the creature takes 1d8 bludgeoning damage and is pushed 10 feet away from the dust devil. On a successful save, the creature takes half as much damage and isn't pushed." + "\n   " + "As a bonus action, you can move the dust devil up to 30 feet in any direction. If the dust devil moves over sand, dust, loose dirt, or light gravel, it sucks up the material and forms a 10-foot-radius cloud of debris around itself that lasts until the start of your next turn. The cloud heavily obscures its area." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd.",
};
SpellsList["earthbind"] = {
	name: "Earthbind",
	classes: ["druid", "sorcerer", "warlock", "wizard"],
	source: [["X", 154], ["E", 17]],
	level: 2,
	school: "Trans",
	time: "Act",
	range: "300 ft",
	components: "V",
	duration: "Conc, 1 min",
	save: "Str",
	description: "1 creatures save or Fly Speed is reduced to 0; airborne creatures safely descend at 60 ft per round",
	descriptionFull: "Choose one creature you can see within range. Yellow strips of magical energy loop around the creature. The target must succeed on a Strength saving throw, or its flying speed (if any) is reduced to 0 feet for the spell's duration. An airborne creature affected by this spell safely descends at 60 feet per round until it reaches the ground or the spell ends.",
};
SpellsList["earth tremor"] = {
	name: "Earth Tremor",
	classes: ["bard", "druid", "sorcerer", "wizard"],
	source: [["X", 155], ["E", 17]],
	level: 1,
	school: "Evoc",
	time: "Act",
	range: "10 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: "Dex",
	description: "All crea in range except me save or 1d6+1d6/SL Bludgeoning dmg and Prone; loose ground is dif. ter.",
	descriptionFull: "You cause a tremor in the ground within range. Each creature other than you in that area must make a Dexterity saving throw. On a failed save, a creature takes 1d6 bludgeoning damage and is knocked prone. If the ground in that area is loose earth or stone, it becomes difficult terrain until cleared, with each 5-foot-diameter portion requiring at least 1 minute to clear by hand." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.",
};
SpellsList["elemental bane"] = {
	name: "Elemental Bane",
	classes: ["artificer", "druid", "warlock", "wizard"],
	source: [["X", 155], ["E", 17]],
	level: 4,
	school: "Trans",
	time: "Act",
	range: "90 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	save: "Con",
	description: "1+1/SL crea, each max 30 ft apart, save or 1 energy: lose resist. to it \u0026 +2d6 to first dmg with it/turn",
	descriptionShorter: "1+1/SL crea, each max 30 ft apart, save or 1 energy: lose resist. \u0026 +2d6 first dmg/turn",
	descriptionFull: "Choose one creature you can see within range, and choose one of the following damage types - acid, cold, fire, lightning, or thunder. The target must succeed on a Constitution saving throw or be affected by the spell for its duration. The first time each turn the affected target takes damage of the chosen type, the target takes an extra 2d6 damage of that type. Moreover, the target loses any resistance to that damage type until the spell ends." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th. The creatures must be within 30 feet of each other when you target them.",
	dynamicDamageBonus: {
		multipleDmgTypes: {
			dmgTypes: ["acid", "cold", "fire", "lightning", "thunder"],
			inDescriptionAs: "first",
		},
	},
};
SpellsList["erupting earth"] = {
	name: "Erupting Earth",
	classes: ["druid", "sorcerer", "wizard"],
	source: [["X", 155], ["E", 17]],
	level: 3,
	school: "Trans",
	time: "Act",
	range: "120 ft",
	components: "V,S,M",
	compMaterial: "A piece of obsidian",
	duration: "Instantaneous",
	save: "Dex",
	description: "20-ft cube all crea 3d12+1d12/SL Bludgeoning dmg; save halves; area becomes difficult terrain",
	descriptionFull: "Choose a point you can see on the ground within range. A fountain of churned earth and stone erupts in a 20-foot cube centered on that point. Each creature in that area must make a Dexterity saving throw. A creature takes 3d12 bludgeoning damage on a failed save, or half as much damage on a successful one. Additionally, the ground in that area becomes difficult terrain until cleared. Each 5-foot-square portion of the area requires at least 1 minute to clear by hand." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d12 for each slot level above 3rd.",
};
SpellsList["flame arrows"] = {
	name: "Flame Arrows",
	classes: ["artificer", "druid", "ranger", "sorcerer", "wizard"],
	source: [["X", 156], ["E", 18]],
	level: 3,
	school: "Trans",
	time: "Act",
	range: "Touch",
	components: "V,S",
	duration: "Conc, 1 h",
	description: "12+2/SL ammunition drawn from touched quiver do +1d6 Fire damage on a successful hit",
	descriptionFull: "You touch a quiver containing arrows or bolts. When a target is hit by a ranged weapon attack using a piece of ammunition drawn from the quiver, the target takes an extra 1d6 fire damage. The spell's magic ends on the piece of ammunition when it hits or misses, and the spell ends when twelve pieces of ammunition have been drawn from the quiver." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the number of pieces of ammunition you can affect with this spell increases by two for each slot level above 3rd.",
};
SpellsList["frostbite"] = {
	name: "Frostbite",
	classes: ["artificer", "druid", "sorcerer", "warlock", "wizard"],
	source: [["X", 156], ["E", 18]],
	level: 0,
	school: "Evoc",
	time: "Act",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: "Con",
	description: "1 crea save or 1d6 Cold dmg and dis. on next weapon attack roll; +1d6 at CL 5, 11, and 17",
	descriptionCantripDie: "1 crea save or `CD`d6 Cold dmg and dis. on next weapon attack roll",
	descriptionFull: "You cause numbing frost to form on one creature that you can see within range. The target must make a Constitution saving throw. On a failed save, the target takes 1d6 cold damage, and it has disadvantage on the next weapon attack roll it makes before the end of its next turn." + "\n   " + "The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
};
SpellsList["gust"] = {
	name: "Gust",
	classes: ["druid", "sorcerer", "wizard"],
	source: [["X", 157], ["E", 19], ["E:RLW", 50], ["UA:D", 6], ["WGtE", 107]],
	level: 0,
	school: "Trans",
	time: "Act",
	range: "30 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: "Str",
	description: "Crea \u2264Medium save or push 5 ft; or push unattended 5 lb obj 10 ft; or harmless sensory effect",
	descriptionFull: "You seize the air and compel it to create one of the following effects at a point you can see within range." + "\n " + "\u2022 One Medium or smaller creature that you choose must succeed on a Strength saving throw or be pushed up to 5 feet away from you." + "\n " + "\u2022 You create a small blast of air capable of moving one object that is neither held nor carried and that weighs no more than 5 pounds. The object is pushed up to 10 feet away from you. It isn't pushed with enough force to cause damage." + "\n " + "\u2022 You create a harmless sensory affect using air, such as causing leaves to rustle, wind to slam shutters shut, or your clothing to ripple in a breeze.",
};
SpellsList["immolation"] = {
	name: "Immolation",
	classes: ["sorcerer", "wizard"],
	source: [["X", 158], ["E", 19]],
	level: 5,
	school: "Evoc",
	time: "Act",
	range: "90 ft",
	components: "V",
	duration: "Conc, 1 min",
	save: "Dex",
	description: "1 crea save or 8d6 Fire dmg \u0026 burns for 4d6 Fire dmg/rnd; save each rnd to end; save half, no burning",
	descriptionShorter: "1 crea save or 8d6 Fire dmg \u0026 4d6 Fire dmg/rnd; save each rnd to end; save half, no rnds",
	descriptionFull: "Flames wreathe one creature you can see within range. The target must make a Dexterity saving throw. It takes 8d6 fire damage on a failed save, or half as much damage on a successful one. On a failed save, the target also burns for the spell's duration. The burning target sheds bright light in a 30-foot radius and dim light for an additional 30 feet. At the end of each of its turns, the target repeats the saving throw. It takes 4d6 fire damage on a failed save, and the spell ends on a successful one. These magical flames can't be extinguished by nonmagical means." + "\n   " + "If damage from this spell kills a target, the target is turned to ash.",
	dynamicDamageBonus: { multipleDmgMoments: false },
};
SpellsList["investiture of flame"] = {
	name: "Investiture of Flame",
	classes: ["druid", "sorcerer", "warlock", "wizard"],
	source: [["X", 159], ["E", 19]],
	level: 6,
	school: "Trans",
	time: "Act",
	range: "Self",
	components: "V,S",
	duration: "Conc, 10 min",
	save: "Dex",
	description: "Fire immune; Cold res.; 1d10 Fire dmg in 5 ft; 1 a 15-ft long 5-ft wide all crea 4d8 Fire dmg, save half",
	descriptionMetric: "Fire im.; Cold res.; 1d10 Fire dmg in 1,5 m; 1 a 4,5-m long 1,5-m wide all crea 4d8 Fire dmg, save half",
	descriptionShorter: "Fire im.; Cold res.; 1d10 Fire dmg in 5 ft; 1a 15-ft long 5-ft wide all 4d8 Fire dmg, save half",
	descriptionShorterMetric: "Fire immune; Cold res.; 1d10 Fire dmg in 1,5 m; 1 a 4,5-m long all 4d8 Fire dmg, save half",
	descriptionFull: "Flames race across your body, shedding bright light in a 30-foot radius and dim light for an additional 30 feet for the spell's duration. The flames don't harm you. Until the spell ends, you gain the following benefits." + "\n " + "\u2022 You are immune to fire damage and have resistance to cold damage." + "\n " + "\u2022 Any creature that moves within 5 feet of you for the first time on a turn or ends its turn there takes 1d10 fire damage." + "\n " + "\u2022 You can use your action to create a line of fire 15 feet long and 5 feet wide extending from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 4d8 fire damage on a failed save, or half as much damage on a successful one.",
};
SpellsList["investiture of ice"] = {
	name: "Investiture of Ice",
	classes: ["druid", "sorcerer", "warlock", "wizard"],
	source: [["X", 159], ["E", 19]],
	level: 6,
	school: "Trans",
	time: "Act",
	range: "Self",
	components: "V,S",
	duration: "Conc, 10 min",
	save: "Con",
	description: "Cold im.; Fire res.; 10-ft rad dif. ter.; 1 a 15-ft cone all crea 4d6 Cold dmg, half spd; save half, no spd",
	descriptionShorter: "Cold im.; Fire res.; 10-ft rad dif. ter.; 1 a 15-ft cone all 4d6 Cold dmg, half speed; save half",
	descriptionFull: "Until the spell ends, ice rimes your body, and you gain the following benefits." + "\n " + "\u2022 You are immune to cold damage and have resistance to fire damage." + "\n " + "\u2022 You can move across difficult terrain created by ice or snow without spending extra movement." + "\n " + "\u2022 The ground in a 10-foot radius around you is icy and is difficult terrain for creatures other than you. The radius moves with you." + "\n " + "\u2022 You can use your action to create a 15-foot cone of freezing wind extending from your outstretched hand in a direction you choose. Each creature in the cone must make a Constitution saving throw. A creature takes 4d6 cold damage on a failed save, or half as much damage on a successful one. A creature that fails its save against this effect has its speed halved until the start of your next turn.",
};
SpellsList["investiture of stone"] = {
	name: "Investiture of Stone",
	classes: ["druid", "sorcerer", "warlock", "wizard"],
	source: [["X", 159], ["E", 19]],
	level: 6,
	school: "Trans",
	time: "Act",
	range: "Self",
	components: "V,S",
	duration: "Conc, 10 min",
	save: "Dex",
	description: "Nonmagical Bludg/Pierc/Slash resist.; 1 a 15-ft rad all crea save or Prone; move through earth/stone",
	descriptionFull: "Until the spell ends, bits of rock spread across your body, and you gain the following benefits:" + "\n \u2022 " + "You have resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks." + "\n \u2022 " + "You can use your action to create a small earthquake on the ground in a 15-foot radius centered on you. Other creatures on that ground must succeed on a Dexterity saving throw or be knocked prone." + "\n \u2022 " + "You can move across difficult terrain made of earth or stone without spending extra movement. You can move through solid earth or stone as if it was air and without destabilizing it, but you can't end your movement there. If you do so, you are ejected to the nearest unoccupied space, this spell ends, and you are stunned until the end of your next turn.",
};
SpellsList["investiture of wind"] = {
	name: "Investiture of Wind",
	classes: ["druid", "sorcerer", "warlock", "wizard"],
	source: [["X", 160], ["E", 20]],
	level: 6,
	school: "Trans",
	time: "Act",
	range: "Self",
	components: "V,S",
	duration: "Conc, 10 min",
	save: "Con",
	description: "Rngd wea atks dis. vs me; fly 60 ft; 1 a 15-ft cube in 60 ft all 2d10 Bludg. dmg, push 10 ft, save half",
	descriptionShorter: "Rngd wea atk dis; fly 60 ft; 1 a 15-ft cu in 60 ft all 2d10 Bludg. dmg, push 10 ft, save half",
	descriptionFull: "Until the spell ends, wind whirls around you, and you gain the following benefits." + "\n " + "\u2022 Ranged weapon attacks made against you have disadvantage on the attack roll." + "\n " + "\u2022 You gain a flying speed of 60 feet. If you are still flying when the spell ends, you fall, unless you can somehow prevent it." + "\n " + "\u2022 You can use your action to create a 15-foot cube of swirling wind centered on a point you can see within 60 feet of you. Each creature in that area must make a Constitution saving throw. A creature takes 2d10 bludgeoning damage on a failed save, or half as much damage on a successful one. If a Large or smaller creature fails the save, that creature is also pushed up to 10 feet away from the center of the cube.",
};
SpellsList["maelstrom"] = {
	name: "Maelstrom",
	classes: ["druid"],
	source: [["X", 160], ["E", 20]],
	level: 5,
	school: "Evoc",
	time: "Act",
	range: "120 ft",
	components: "V,S,M",
	compMaterial: "Paper or leaf in the shape of a funnel",
	duration: "Conc, 1 min",
	save: "Str",
	description: "5-ft deep 30-ft rad dif. ter.; all crea starting turn in save or 6d6 Bludg. dmg and pulled 10 ft to center",
	descriptionShorter: "5-ft deep 30-ft rad dif. ter.; all start turn in save or 6d6 Bludg. dmg \u0026 pull 10 ft to center",
	descriptionFull: "A mass of 5-foot-deep water appears and swirls in a 30-foot radius centered on a point you can see within range. The point must be on ground or in a body of water. Until the spell ends, that area is difficult terrain, and any creature that starts its turn there must succeed on a Strength saving throw or take 6d6 bludgeoning damage and be pulled 10 feet toward the center.",
};
SpellsList["magic stone"] = {
	name: "Magic Stone",
	classes: ["artificer", "druid", "warlock"],
	source: [["X", 160], ["E", 20]],
	level: 0,
	school: "Trans",
	time: "Bns",
	range: "Touch",
	components: "V,S",
	duration: "1 min",
	description: "Imbue 3 pebbles for spell attacks, thrown 60 ft or with sling, do 1d6+spellcasting mod Bludg. dmg",
	descriptionShorter: "Imbue 3 pebbles for spell atk, thrown 60 ft or sling, do 1d6+spellcasting mod Bludg. dmg",
	descriptionFull: "You touch one to three pebbles and imbue them with magic. You or someone else can make a ranged spell attack with one of the pebbles by throwing it or hurling it with a sling. If thrown, it has a range of 60 feet. If someone else attacks with the pebble, that attacker adds your spellcasting ability modifier, not the attacker's, to the attack roll. On a hit, the target takes bludgeoning damage equal to 1d6 + your spellcasting ability modifier. Hit or miss, the spell then ends on the stone." + "\n   " + "If you cast this spell again, the spell ends early on any pebbles still affected by it.",
};
SpellsList["maximilian's earthen grasp"] = {
	name: "Maximilian's Earthen Grasp",
	nameShort: "Max's Earthen Grasp",
	nameAlt: "Earthen Grasp",
	classes: ["sorcerer", "wizard"],
	source: [["X", 161], ["E", 20]],
	level: 2,
	school: "Trans",
	time: "Act",
	range: "30 ft",
	components: "V,S,M",
	compMaterial: "A miniature hand sculpted from clay",
	duration: "Conc, 1 min",
	save: "Str",
	description: "Medium hand atks 1 crea: save or 2d6 Bludg. dmg \u0026 Restrained; 1 a hand moves/atks, releases; see B",
	descriptionShorter: "Medium hand atk 1 crea: save or 2d6 Bludg. dmg \u0026 Restrained; 1 a move/atk, release; see B",
	descriptionFull: "You choose a 5-foot-square unoccupied space on the ground that you can see within range. A Medium hand made from compacted soil rises there and reaches for one creature you can see within 5 feet of it. The target must make a Strength saving throw. On a failed save, the target takes 2d6 bludgeoning damage and is restrained for the spell's duration." + "\n   " + "As an action, you can cause the hand to crush the restrained target, which must make a Strength saving throw. The target takes 2d6 bludgeoning damage on a failed save, or half as much damage on a successful one." + "\n   " + "To break out, the restrained target can use its action to make a Strength check against your spell save DC. On a success, the target escapes and is no longer restrained by the hand." + "\n   " + "As an action, you can cause the hand to reach for a different creature or to move to a different unoccupied space within range. The hand releases a restrained target if you do either.",
};
SpellsList["melf's minute meteors"] = {
	name: "Melf's Minute Meteors",
	nameAlt: "Minute Meteors",
	classes: ["sorcerer", "wizard"],
	source: [["X", 161], ["E", 20]],
	level: 3,
	school: "Evoc",
	time: "Act",
	range: "Self",
	components: "V,S,M",
	compMaterial: "Niter, sulfur, and pine tar formed into a bead",
	duration: "Conc, 10 min",
	save: "Dex",
	description: "6+2/SL meteors; at casting/bns a send up to two 120 ft for 5-ft rad all crea 2d6 Fire dmg; save half",
	descriptionShorter: "6+2/SL meteors; at cast/bns a send up to two 120 ft for 5-ft rad all 2d6 Fire dmg; save half",
	descriptionFull: "You create six tiny meteors in your space. They float in the air and orbit you for the spell's duration. When you cast the spell-and as a bonus action on each of your turns thereafter-you can expend one or two of the meteors, sending them streaking toward a point or points you choose within 120 feet of you. Once a meteor reaches its destination or impacts against a solid surface, the meteor explodes. Each creature within 5 feet of the point where the meteor explodes must make a Dexterity saving throw. A creature takes 2d6 fire damage on a failed save, or half as much damage on a successful one." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the number of meteors created increases by two for each slot level above 3rd.",
};
SpellsList["mold earth"] = {
	name: "Mold Earth",
	classes: ["druid", "sorcerer", "wizard"],
	source: [["X", 162], ["E", 21]],
	level: 0,
	school: "Trans",
	time: "Act",
	range: "30 ft",
	components: "S",
	duration: "Instant. or 1 h",
	description: "5 cu ft earth; instant.: excavate; 1h: change to difficult or normal terrain, or change shape and color",
	descriptionFull: "You choose a portion of dirt or stone that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways." + "\n " + "\u2022 If you target an area of loose earth, you can instantaneously excavate it, move it along the ground, and deposit it up to 5 feet away. This movement doesn't have enough force to cause damage." + "\n " + "\u2022 You cause shapes, colors, or both to appear on the dirt or stone, spelling out words, creating images, or shaping patterns. The changes last for 1 hour." + "\n " + "\u2022 If the dirt or stone you target is on the ground, you cause it to become difficult terrain. Alternatively, you can cause the ground to become normal terrain if it is already difficult terrain. This change lasts for 1 hour." + "\n\n" + "If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.",
};
SpellsList["primordial ward"] = {
	name: "Primordial Ward",
	classes: ["druid"],
	source: [["X", 163], ["E", 21]],
	level: 6,
	school: "Abjur",
	time: "Act",
	range: "Self",
	components: "V,S",
	duration: "Conc, 1 min",
	description: "Acid, Cold, Fire, Lightning, and Thunder resistance; use rea to gain 1 immunity for 1 rnd, spell ends",
	descriptionFull: "You have resistance to acid, cold, fire, lightning, and thunder damage for the spell's duration." + "\n   " + "When you take damage of one of those types, you can use your reaction to gain immunity to that type of damage, including against the triggering damage. If you do so, the resistances end, and you have the immunity until the end of your next turn, at which time the spell ends.",
};
SpellsList["pyrotechnics"] = {
	name: "Pyrotechnics",
	classes: ["artificer", "bard", "sorcerer", "wizard"],
	source: [["X", 163], ["E", 21]],
	level: 2,
	school: "Trans",
	time: "Act",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: "Con",
	description: "5 cu ft nonma. flame extinguish, or 10-ft rad all crea save or blind 1 rnd, or 20-ft rad hvy obsc. 1 min",
	descriptionFull: "Choose an area of nonmagical flame that you can see and that fits within a 5-foot cube within range. You can extinguish the fire in that area, and you create either fireworks or smoke when you do so." + "\n   ***Fireworks***: The target explodes with a dazzling display of colors. Each creature within 10 feet of the target must succeed on a Constitution saving throw or become blinded until the end of your next turn." + "\n   ***Smoke***: Thick black smoke spreads out from the target in a 20-foot radius, moving around corners. The area of the smoke is heavily obscured. The smoke persists for 1 minute or until a strong wind disperses it.",
};
SpellsList["shape water"] = {
	name: "Shape Water",
	classes: ["druid", "sorcerer", "wizard"],
	source: [["X", 164], ["E", 21], ["W", 172]],
	level: 0,
	school: "Trans",
	time: "Act",
	range: "30 ft",
	components: "S",
	duration: "Instant. or 1 h",
	description: "5 cu ft water; instant: move/change flow; 1h: simple shapes/change color or opacity/freeze",
	descriptionFull: "You choose an area of water that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways." + "\n " + "\u2022 You instantaneously move or otherwise change the flow of the water as you direct, up to 5 feet in any direction. This movement doesn't have enough force to cause damage." + "\n " + "\u2022 You cause the water to form into simple shapes and animate at your direction. This change lasts for 1 hour." + "\n " + "\u2022 You change the water's color or opacity. The water must be changed in the same way throughout. This change lasts for 1 hour." + "\n " + "\u2022 You freeze the water, provided that there are no creatures in it. The water unfreezes in 1 hour." + "\n\n" + "If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.",
};
SpellsList["skywrite"] = {
	name: "Skywrite",
	classes: ["artificer", "bard", "druid", "wizard"],
	source: [["X", 165], ["E", 22]],
	ritual: true,
	level: 2,
	school: "Trans",
	time: "Act",
	range: "Sight",
	components: "V,S",
	duration: "Conc, 1 h",
	description: "Write up to 10 words with clouds in a part of the sky I can see; strong wind can diperse the clouds",
	descriptionFull: "You cause up to ten words to form in a part of the sky you can see. The words appear to be made of cloud and remain in place for the spell's duration. The words dissipate when the spell ends. A strong wind can disperse the clouds and end the spell early.",
};
SpellsList["snilloc's snowball swarm"] = {
	name: "Snilloc's Snowball Swarm",
	nameAlt: "Snowball Swarm",
	classes: ["sorcerer", "wizard"],
	source: [["X", 165], ["E", 22]],
	level: 2,
	school: "Evoc",
	time: "Act",
	range: "90 ft",
	components: "V,S,M",
	compMaterial: "A piece of ice or a small white rock chip",
	duration: "Instantaneous",
	save: "Dex",
	description: "5-ft radius all creatures 3d6+1d6/SL Cold damage; save halves",
	descriptionFull: "A flurry of magic snowballs erupts from a point you choose within range. Each creature in a 5-foot-radius sphere centered on that point must make a Dexterity saving throw. A creature takes 3d6 cold damage on a failed save, or half as much damage on a successful one." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd.",
};
SpellsList["storm sphere"] = {
	name: "Storm Sphere",
	classes: ["sorcerer", "wizard"],
	source: [["X", 166], ["E", 22]],
	level: 4,
	school: "Evoc",
	time: "Act",
	range: "150 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	save: "Str",
	description: "20-ft rad dif. ter., all now/end turn save or 2d6 Bludg. dmg; bns a 60 ft atk 4d6 Lightn. dmg; +1d6/SL",
	descriptionShorter: "20-ft rad dif. ter., all save/turn 2d6 Bludg. dmg; bns a 60 ft atk 4d6 Lightn. dmg; +1d6/SL",
	descriptionFull: "A 20-foot-radius sphere of whirling air springs into existence centered on a point you choose within range. The sphere remains for the spell's duration. Each creature in the sphere when it appears or that ends its turn there must succeed on a Strength saving throw or take 2d6 bludgeoning damage. The sphere's space is difficult terrain." + "\n   " + "Until the spell ends, you can use a bonus action on each of your turns to cause a bolt of lightning to leap from the center of the sphere toward one creature you choose within 60 feet of the center. Make a ranged spell attack. You have advantage on the attack roll if the target is in the sphere. On a hit, the target takes 4d6 lightning damage." + "\n   " + "Creatures within 30 feet of the sphere have disadvantage on Wisdom (Perception) checks made to listen." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the damage increases for each of its effects by 1d6 for each slot level above 4th.",
};
SpellsList["tidal wave"] = {
	name: "Tidal Wave",
	classes: ["druid", "sorcerer", "wizard"],
	source: [["X", 168], ["E", 22]],
	level: 3,
	school: "Conj",
	time: "Act",
	range: "120 ft",
	components: "V,S,M",
	compMaterial: "A drop of water",
	duration: "Instantaneous",
	save: "Dex",
	description: "30-ft x 10-ft, 10-ft high all crea 4d8 Bludg. dmg and Prone; save halves not Prone; extinguish flames",
	descriptionFull: "You conjure up a wave of water that crashes down on an area within range. The area can be up to 30 feet long, up to 10 feet wide, and up to 10 feet tall. Each creature in that area must make a Dexterity saving throw. On a failed save, a creature takes 4d8 bludgeoning damage and is knocked prone. On a successful save, a creature takes half as much damage and isn't knocked prone. The water then spreads out across the ground in all directions, extinguishing unprotected flames in its area and within 30 feet of it, and then it vanishes.",
};
SpellsList["transmute rock"] = {
	name: "Transmute Rock",
	classes: ["artificer", "druid", "wizard"],
	source: [["X", 169], ["E", 22]],
	level: 5,
	school: "Trans",
	time: "Act",
	range: "120 ft",
	components: "V,S,M",
	compMaterial: "Clay and water",
	duration: "Until dispelled",
	description: "40 cu ft stone to mud or mud to stone; mud and stone restrains; mud from ceiling falls; see book",
	descriptionFull: "You choose an area of stone or mud that you can see that fits within a 40-foot cube and is within range, and choose one of the following effects." + "\n   ***Transmute Rock to Mud***: Nonmagical rock of any sort in the area becomes an equal volume of thick, flowing mud that remains for the spell's duration." + "\n   " + "The ground in the spell's area becomes muddy enough that creatures can sink into it. Each foot that a creature moves through the mud costs 4 feet of movement, and any creature on the ground when you cast the spell must make a Strength saving throw. A creature must also make the saving throw when it moves into the area for the first time on a turn or ends its turn there. On a failed save, a creature sinks into the mud and is restrained, though it can use an action to end the restrained condition on itself by pulling itself free of the mud." + "\n   " + "If you cast the spell on a ceiling, the mud falls. Any creature under the mud when it falls must make a Dexterity saving throw. A creature takes 4d8 bludgeoning damage on a failed save, or half as much damage on a successful one." + "\n   ***Transmute Mud to Rock***: Nonmagical mud or quicksand in the area no more than 10 feet deep transforms into soft stone for the spell's duration. Any creature in the mud when it transforms must make a Dexterity saving throw. On a successful save, a creature is shunted safely to the surface in an unoccupied space. On a failed save, a creature becomes restrained by the rock. A restrained creature, or another creature within reach, can use an action to try to break the rock by succeeding on a DC 20 Strength check or by dealing damage to it. The rock has AC 15 and 25 hit points, and it is immune to poison and psychic damage.",
};
SpellsList["wall of sand"] = {
	name: "Wall of Sand",
	classes: ["wizard"],
	source: [["X", 170], ["E", 23]],
	level: 3,
	school: "Evoc",
	time: "Act",
	range: "90 ft",
	components: "V,S,M",
	compMaterial: "A handful of sand",
	duration: "Conc, 10 min",
	description: "30\xD710\xD710ft (l\xD7w\xD7h) wall on the ground; blocks line of sight; Blinded while inside; 1/3 move",
	descriptionMetric: "9\xD73\xD73m (l\xD7w\xD7h) wall on the ground; blocks line of sight; Blinded while inside; 1/3 move",
	descriptionFull: "You conjure up a wall of swirling sand on the ground at a point you can see within range. You can make the wall up to 30 feet long, 10 feet high, and 10 feet thick, and it vanishes when the spell ends. It blocks line of sight but not movement. A creature is blinded while in the wall's space and must spend 3 feet of movement for every 1 foot it moves there.",
};
SpellsList["wall of water"] = {
	name: "Wall of Water",
	classes: ["druid", "sorcerer", "wizard"],
	source: [["X", 170], ["E", 23], ["V", 116], ["MOT", 27]],
	level: 3,
	school: "Evoc",
	time: "Act",
	range: "60 ft",
	components: "V,S,M",
	compMaterial: "A drop of water",
	duration: "Conc, 10 min",
	description: "30\xD71\xD710ft (l\xD7w\xD7h) or 20-ft rad 20-ft high; dif. ter.; range wea dis.; Fire dmg half; Cold dmg freezes",
	descriptionMetric: "9\xD70,3\xD73m (l\xD7w\xD7h) or 6-m rad 6-m high; dif. ter.; ranged wea dis.; Fire dmg half; Cold dmg freezes",
	descriptionFull: "You conjure up a wall of water on the ground at a point you can see within range. You can make the wall up to 30 feet long, 10 feet high, and 1 foot thick, or you can make a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall vanishes when the spell ends. The wall's space is difficult terrain." + "\n   " + "Any ranged weapon attack that enters the wall's space has disadvantage on the attack roll, and fire damage is halved if the fire effect passes through the wall to reach its target. Spells that deal cold damage that pass through the wall cause the area of the wall they pass through to freeze solid (at least a 5-foot square section is frozen). Each 5-foot-square frozen section has AC 5 and 15 hit points. Reducing a frozen section to 0 hit points destroys it. When a section is destroyed, the wall's water doesn't fill it.",
};
SpellsList["warding wind"] = {
	name: "Warding Wind",
	classes: ["bard", "druid", "sorcerer", "wizard"],
	source: [["X", 170], ["E", 23]],
	level: 2,
	school: "Evoc",
	time: "Act",
	range: "S:10-ft rad",
	components: "V",
	duration: "Conc, 10 min",
	description: "Strong (20 mph) wind around me deafens/extinguishes unprotected flames/dif. ter./ranged wea dis.",
	descriptionMetric: "Strong (32 kph) wind around me deafens/extinguishes unprotected flames/dif. ter./ranged wea dis.",
	descriptionFull: "A strong wind (20 miles per hour) blows around you in a 10-foot radius and moves with you, remaining centered on you. The wind lasts for the spell's duration.\n   The wind has the following effects." +
	"\n \u2022 It deafens you and other creatures in its area." +
	"\n \u2022 It extinguishes unprotected flames in its area that are torch-sized or smaller." +
	"\n \u2022 The area is difficult terrain for creatures other than you." +
	"\n \u2022 The attack rolls of ranged weapon attacks have disadvantage if they pass in or out of the wind." +
	"\n \u2022 It hedges out vapor, gas, and fog that can be dispersed by strong wind.",
};
SpellsList["watery sphere"] = {
	name: "Watery Sphere",
	classes: ["druid", "sorcerer", "wizard"],
	source: [["X", 170], ["E", 23]],
	level: 4,
	school: "Conj",
	time: "Act",
	range: "90 ft",
	components: "V,S,M",
	compMaterial: "A droplet of water",
	duration: "Conc, 1 min",
	save: "Str",
	description: "5-ft rad all crea < Huge save or Restrained; on save ejected; save each rnd; 1 a move sphere 30 ft",
	descriptionFull: "You conjure up a sphere of water with a 5-foot radius at a point you can see within range. The sphere can hover but no more than 10 feet off the ground. The sphere remains for the spell's duration." + "\n   " + "Any creature in the sphere's space must make a Strength saving throw. On a successful save, a creature is ejected from that space to the nearest unoccupied space of the creature's choice outside the sphere. A Huge or larger creature succeeds on the saving throw automatically, and a Large or smaller creature can choose to fail it. On a failed save, a creature is restrained by the sphere and is engulfed by the water. At the end of each of its turns, a restrained target can repeat the saving throw, ending the effect on itself on a success." + "\n   " + "The sphere can restrain as many as four Medium or smaller creatures or one Large creature. If the sphere restrains a creature that causes it to exceed this capacity, a random creature that was already restrained by the sphere falls out of it and lands prone in a space within 5 feet of it." + "\n   " + "As an action, you can move the sphere up to 30 feet in a straight line. If it moves over a pit, a cliff, or other drop-off, it safely descends until it is hovering 10 feet above the ground. Any creature restrained by the sphere moves with it. You can ram the sphere into creatures, forcing them to make the saving throw." + "\n   " + "When the spell ends, the sphere falls to the ground and extinguishes all normal flames within 30 feet of it. Any creature restrained by the sphere is knocked prone in the space where it falls. The water then vanishes.",
};
SpellsList["whirlwind"] = {
	name: "Whirlwind",
	classes: ["druid", "sorcerer", "wizard"],
	source: [["X", 171], ["E", 24]],
	level: 7,
	school: "Evoc",
	time: "Act",
	range: "300 ft",
	components: "V,M",
	compMaterial: "A piece of straw",
	duration: "Conc, 1 min",
	save: "Dex",
	description: "10-ft rad 30-ft high all crea 10d6 Bludg. dmg; save halves; restrains; 1 a move 30 ft; see book",
	descriptionFull: "A whirlwind howls down to a point that you can see on the ground within range. The whirlwind is a 10-foot-radius, 30-foot-high cylinder centered on that point. Until the spell ends, you can use your action to move the whirlwind up to 30 feet in any direction along the ground. The whirlwind sucks up any Medium or smaller objects that aren't secured to anything and that aren't worn or carried by anyone." + "\n   " + "A creature must make a Dexterity saving throw the first time on a turn that it enters the whirlwind or that the whirlwind enters its space, including when the whirlwind first appears. A creature takes 10d6 bludgeoning damage on a failed save, or half as much damage on a successful one. In addition, a Large or smaller creature that fails the save must succeed on a Strength saving throw or become restrained in the whirlwind until the spell ends. When a creature starts its turn restrained by the whirlwind, the creature is pulled 5 feet higher inside it, unless the creature is at the top. A restrained creature moves with the whirlwind and falls when the spell ends, unless the creature has some means to stay aloft." + "\n   " + "A restrained creature can use an action to make a Strength or Dexterity check against your spell save DC. If successful, the creature is no longer restrained by the whirlwind and is hurled 3d6 \xD7 10 feet away from it in a random direction.",
};

// Weapons (attack cantrips)
WeaponsList["create bonfire"] = {
	regExpSearch: /^(?=.*create)(?=.*bonfire).*$/i,
	name: "Create Bonfire",
	source: [["X", 152], ["E", 16]],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage: ["C", 8, "fire"],
	range: "60 ft",
	description: "5-ft cube; Dex save at casting or when moved into, success - no damage; Conc, 1 min",
	abilitytodamage: false,
	dc: true,
};
WeaponsList["frostbite"] = {
	regExpSearch: /frostbite/i,
	name: "Frostbite",
	source: [["X", 156], ["E", 18]],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage: ["C", 6, "cold"],
	range: "60 ft",
	description: "Con save, success - no damage, fail - also Disadv on next weapon attack roll in next turn; 1 creature",
	abilitytodamage: false,
	dc: true,
};
WeaponsList["magic stone"] = {
	regExpSearch: /^(?=.*magic)(?=.*stone).*$/i,
	name: "Magic Stone",
	source: [["X", 160], ["E", 20]],
	list: "spell",
	ability: 5,
	type: "Cantrip",
	damage: [1, 6, "bludgeoning"],
	range: "60/120 ft",
	description: "Produces 3 stones that each can be thrown (60 ft) or hurled with a sling (120 ft) as a spell attack",
	abilitytodamage: true,
};

// pub_20150714_AL-RoD.js
// This file adds the optional backgrounds from the Adventurers League season 3 (Rage of Demons) to MPMB's Character Record Sheet

// Define the source
SourceList["AL:RoD"] = {
	name: "Rage of Demons Backgrounds [Hillsfar]",
	abbreviation: "AL:RoD",
	group: "Legacy Adventurers League",
	campaignSetting: "Forgotten Realms",
	url: "https://www.dropbox.com/s/h4ijcnfun1cn580/Hillsfar-Regional-Character-Options.pdf?dl=1", // used to be https://dndadventurersleague.org/wp-content/uploads/2015/07/Hillsfar-Regional-Character-Options.pdf
	date: "2015/07/14",
	defaultExcluded: true,
};

// Backgrounds (with contributions by AggieBear)
BackgroundList["cormanthor refugee"] = {
	regExpSearch: /^(?=.*cormanthor)(?=.*refugee).*$/i,
	name: "Cormanthor Refugee",
	source: [["AL:RoD", 5]],
	skills: ["Nature", "Survival"],
	gold: 5,
	equipleft: [
		["Two-person tent", "", 20],
		["Set of artisan's tools", "", ""],
	],
	equipright: [
		["Traveler's clothes", "", 4],
		["Holy symbol (type)", "", 1],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Shelter of the Elven Clergy",
	trait: [
		"I long for a home that never really existed, whether in the camps, Hillsfar, or Myth Drannor.",
		"Though I am not an elf, I am a fervent, radical worshipper of the elven gods.",
		"I live in the moment, knowing my life could be turned upside down any day.",
		"I appreciate beauty in all of its forms.",
		"I hate the dark elves and the Netherese for each driving the elves out of Cormanthyr in the past.",
		"I am a forest bumpkin who grew up in a tent in the woods and is wholly ignorant of city life.",
		"I was raised alongside children of many other races. I harbor no racial prejudices at all.",
		"The elves have just the right word for so many things that cannot be expressed as well in other languages. I pepper my speech with elven words, phrases, and sayings.",
	],
	ideal: [
		["Patient",
			"Patient: The elves have taught me to think and plan for the long-term. (Lawful)",
		],
		["Rebellious",
			"Rebellious: Governments and politicians drove my family to the camps. I subtly defy authority whenever I think I can get away with it. (Chaotic)",
		],
		["Self-Absorbed",
			"Self-Absorbed: I've had to look out for number one so long that it has become second nature. (Any)",
		],
		["Wanderlust",
			"Wanderlust: I want to see as much of the world beyond the camps as I can. (Any)",
		],
		["Generous",
			"Generous: I give everything I can to help those in need, regardless of who they are. (Good)",
		],
		["To the Abyss with Them",
			"To the Abyss with Them: The people of Hillsfar cast me out. I won't risk my hide to help them. (Evil)",
		],
	],
	bond: [
		"The elves took me in when I had nowhere else to go. In return, I do what I can to help elves in need.",
		"I seek revenge against the people of Hillsfar for driving my family into the forest.",
		"My family lost everything when they were driven from Hillsfar. I strive to rebuild that fortune.",
		"The forest has provided me with food and shelter. In return, I protect forests and those who dwell within.",
		"I am deeply, tragically in love with someone whose racial lifespan is far longer or shorter than mine.",
		"Members of my extended family did not make it to the camps or have been kidnapped to fight in the Arena. I search for them tirelessly.",
	],
	flaw: [
		"I am very uncomfortable indoors and underground",
		"I am haughty. I grew up among the elves and emulate them. Other races are crude in comparison.",
		"Elf this, elf that. I am sick and tired of the elves.",
		"I am a miser. Having lost everything once before, I clutch my possessions and wealth very tightly.",
		"I am a moocher. I am so used to others providing for me that I have come to expect everyone to do it.",
		"I believe the gods have cursed me, my family, and all of the Cormanthor refugees. We are all doomed, doomed I tell you!",
	],
	toolProfs: [["Artisan's tools", 1]],
	languageProfs: ["Elvish"],
	lifestyle: "poor",
};
BackgroundList["gate urchin"] = {
	regExpSearch: /^(?=.*gate)(?=.*urchin).*$/i,
	name: "Gate Urchin",
	source: [["AL:RoD", 6]],
	skills: ["Deception", "Sleight of Hand"],
	gold: 10,
	equipleft: [
		["Battered alms box", "", 1],
	],
	equipright: [
		["Common clothes", "", 3],
		["Cast-off military jacket, cap, or scarf", "", ""],
		["Belt pouch (with coins)", "", 1],
		["Musical instrument of my choice", "", ""],
	],
	feature: "Red Plume and Mage Guild Contacts",
	trait: [
		"I appreciate the simple things in life: a song, a warm meal, a sunny day. I don't need any more.",
		"My problems are always caused by others. I'm never to blame.",
		"I am afraid I could wind up back on the streets any day.",
		"I get along with everyone.",
		"I see people as marks for a con and have difficulty feeling true empathy for them.",
		"I have a real flair for matchmaking. I can find anyone a spouse!",
		"I think money is the true measure of appreciation and affection. Everything else is talk or an act.",
		"I don't like having a lot of stuff, just a few simple things I need. I don't like being tied down and tend to leave things behind when I don't need them anymore.",
	],
	ideal: [
		["Loyal",
			"Loyal: I never rat out any of my friends, even when the Red Plumes or the Rogues Guild ask. (Lawful)",
		],
		["Adventurous",
			"Adventurous: I don't like doing the same thing every day. I crave variety. (Chaotic)",
		],
		["Strong",
			"Strong: Only the strong survive. I respect those who are strong and powerful. (Any)",
		],
		["Witty",
			"Witty: Brains are better than brawn. I rely on my wits and respect others who do the same. (Any)",
		],
		["Honest",
			"Honest: Others can do what they want, but I won't lie or steal, even to feed my family. (Good)",
		],
		["Ungrateful",
			"Ungrateful: Those who give, only do it to make themselves feel better. I steal from them. (Evil)",
		],
	],
	bond: [
		"The Joydancers of Lliira gave me my instrument when I really needed food. I hate them for that.",
		"Busking has taught me to love music above all else.",
		"The Rogues Guild spared me when I did a job without cutting them in. I owe them a great debt.",
		"I know people hate the Red Plumes, but some of them were really good to me. I help Red Plumes whenever I can, and I respect them. They're just doing what they have to do to get by in this world.",
		"I will be wealthy some day. My descendants will live in comfort and style.",
		"I know how hard life on the streets is. I do everything I can for those who have less than me.",
	],
	flaw: [
		"Though I no longer live at the Gate, I am still always concerned about where I will get my next meal.",
		"Years of thieving have become habit. I sometimes steal from strangers without thinking about it.",
		"I am ashamed of my origins. I pretend I am higher-born and fear others will find out the truth.",
		"I think people who grew up in houses are soft, spoiled, and ungrateful. I frequently tell them so.",
		"I am still very uncomfortable wearing nice clothes, sleeping in a warm bed, and eating fine food.",
		"I do not trust anyone who has not had a hard life.",
	],
	toolProfs: [["Thieves' tools", "Dex"], ["Musical instrument", 1]],
	lifestyle: "poor",
};
BackgroundList["hillsfar merchant"] = {
	regExpSearch: /^(?=.*hillsfar)(?=.*merchant).*$/i,
	name: "Hillsfar Merchant",
	source: [["AL:RoD", 7]],
	skills: ["Insight", "Persuasion"],
	gold: 25,
	equipright: [
		["Fine clothes", "", 6],
		["Signet ring", "", ""],
		["Purse (with coins)", "", 1],
		["Letter of introduction from family's trading house", "", 1],
	],
	feature: "Factor",
	featureAlt: "Trade Contact",
	trait: [
		"I fill my evenings with wine or mead and song.",
		"I greatly admire gladiators and enjoy the Arena.",
		"I take my wealth for granted. It seldom occurs to me that others aren't rich themselves.",
		"I leave broken hearts all around the Moonsea and up and down the Sword Coast.",
		"I work hard and seldom make time for fun.",
		"I am a particularly devout and pray often.",
		"The Red Plumes caught me once. I hate them.",
		"I ask a lot of questions to get information about those with whom I am working and dealing.",
	],
	ideal: [
		["Frugal",
			"Frugal: I spend my money very carefully. (Lawful)",
		],
		["Profligate",
			"Profligate: I tend to spend extravagantly. (Chaotic)",
		],
		["Honest",
			"Honest: I deal with others above board. (Any)",
		],
		["Sharp",
			"Sharp: I seek to make the best deal possible. (Any)",
		],
		["Charitable",
			"Charitable: I give generously to others. (Good)",
		],
		["Greedy",
			"Greedy: I do not share my wealth with others. (Evil)",
		],
	],
	bond: [
		"I am fiercely loyal to those with whom I work.",
		"I must uphold the good name of my family.",
		"I will prove myself to my family as an adventurer.",
		"Deals are sacrosanct. I never go back on my word.",
		"I love making deals and negotiating agreements.",
		"I guard my wealth jealously.",
	],
	flaw: [
		"I am a braggart. I promote myself shamelessly.",
		"I am vain. I always wear the latest fashions.",
		"I am a glutton. I eat and drink to excess.",
		"I am a snob. I want only the finest things in life.",
		"I am lazy. I want others to take care of everything.",
		"I am overconfident. I overestimate my abilities.",
	],
	toolProfs: ["Vehicles (land)", "Vehicles (water)"],
	lifestyle: "wealthy",
};
BackgroundList["hillsfar smuggler"] = {
	regExpSearch: /^(?=.*hillsfar)(?=.*smuggler).*$/i,
	name: "Hillsfar Smuggler",
	source: [["AL:RoD", 8]],
	skills: ["Perception", "Stealth"],
	gold: 5,
	equipleft: [
		["Forgery kit", "", 5],
	],
	equipright: [
		["Common clothes", "", 3],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Secret Passage",
	trait: [
		"When I'm not smuggling, I gamble.",
		"I just love Halfling cooking and baking!",
		"I party with dwarves whenever I can.",
		"I'm a terrible singer, but I love to do it.",
		"I was raised to honor Chauntea and still do.",
		"The blood sports of the Arena sicken me.",
		"I think non-humans are really interesting.",
		"I exaggerate the tales of my exploits.",
	],
	ideal: [
		["Fair",
			"Fair: I think everyone deserves to be treated fairly. I don't play favorites. (Lawful)",
		],
		["Impulsive",
			"Impulsive: Planning is often a waste of time. No plan survives contact with reality. It's easier to dive in and deal with the consequences. (Chaotic)",
		],
		["Curious",
			"Curious: I want to learn as much as I can about the people and places I encounter. (Any)",
		],
		["Prepared",
			"Prepared: I think success depends on preparing as much as possible in advance. (Any)",
		],
		["Respectful",
			"Respectful: I think everyone deserves to be treated with respect and dignity, regardless of their race, creed, color, or origin. (Good)",
		],
		["Corrupt",
			"Corrupt: I will break the law or act dishonestly if the money is right. (Evil)",
		],
	],
	bond: [
		"I am loyal to the Rogues Guild and would do anything for them.",
		"I love the city of Hillsfar and my fellow Hillsfarians, despite the recent problems.",
		"I admire the elves. I help them whenever I can.",
		"A gnome helped me once. I pay the favor forward.",
		"I enjoy tricking the Red Plumes at every opportunity.",
		"I smuggled agricultural goods for non-human farmers. I try to help them when I can.",
	],
	flaw: [
		"My hatred for the Red Plumes burns so brightly that I have difficulty suppressing It around them.",
		"The Red Plumes caught me once before, and I was branded for my crime. If they catch me again, for any offense, the punishment will be dire.",
		"I treat all Hillsfarans poorly. I am disgusted with their failure to revolt against the Great Law of Humanity.",
		"I have difficulty trusting strangers. Anyone could be a spy for the authorities.",
		"I am greedy. There Isn't much I won't do for money.",
		"I'm an informant for the Red Plumes. They let me continue my activities, so long as I pass them information about illegal activity in Hillsfar.",
	],
	toolProfs: ["Forgery kit"],
	languageProfs: [1],
	lifestyle: "modest",
};
BackgroundList["secret identity"] = {
	regExpSearch: /^(?=.*secret)(?=.*identity).*$/i,
	name: "Secret Identity",
	source: [["AL:RoD", 9]],
	skills: ["Deception", "Stealth"],
	gold: 5,
	equipleft: [
		["Disguise kit", "", 3],
		["Forgery kit", "", 5],
	],
	equipright: [
		["Common clothes", "", 3],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Secret Identity",
	trait: [
		"Despite its problems, I love Hillsfar, it's the greatest city in the world. The only one for me.",
		"I move from place to place, never staying anywhere long and leaving nothing behind.",
		"I think flattery is the best way to direct attention away from me.",
		"I don't make friends easily. They're a liability I cannot afford.",
		"Risk and danger are exhilarate me. Pulling off schemes and deceptions is a rush.",
		"The First Lord is right, humans are superior. I really admire them, despite the atrocities.",
		"I avoid people of my own race, as well as things associated with my race, lest they give me away.",
		"I live for the Arena. I admire gladiators and enjoy the thrill of blood on the sands!",
	],
	ideal: [
		["Quisling",
			"Quisling: Supporting the rulers of the land and following the laws is the road to salvation. (Lawful)",
		],
		["Scoflaw",
			"Scoflaw: The laws and lawmakers are corrupt. I follow laws only when it suits me. (Chaotic))",
		],
		["Optimist",
			"Optimist: Everyone Is basically good. Though the government is misguided it will all be okay. (Any)",
		],
		["Secretive",
			"Secretive: I am in the habit of not talking about myself. My business is none of yours. (Any)",
		],
		["Heroic",
			"Heroic: I do everything I can to help non-humans, regardless of the personal cost to me. (Good)",
		],
		["Depraved",
			"Depraved: I have lost my moral compass. The ends justify most any means. (Evil)",
		],
	],
	bond: [
		"The humans of Hillsfar have inflicted terrible harm on me, my family, and my race. I will have revenge.",
		"I am part of an underground network that smuggles non-humans into and out of the city.",
		"I am a partisan. I commit minor acts of defiance against the First Lord and Red Plumes when I can.",
		"I am a spy. I report on events in and around Hillfar.",
		"My secret identity is the only thing protecting me from the Arena. I will stop at nothing to maintain it.",
		"I am madly in love with a human who does not know my true identity, and I fear rejection if I reveal it.",
	],
	flaw: [
		"After years of denying who I am, I now despise myself and other members of my pathetic race.",
		"Years of hiding have made me somewhat paranoid. I trust no one.",
		"I've been lying so often and for so long that I can't help it anymore. I frequently lie for no reason at all.",
		"I am ashamed. I failed to protect a member of my family who was seized and thrown into the Area.",
		"I am struggling with maintaining my secret identity. I subconsciously want to get caught and therefore sometimes let my secret identity slip.",
		"Years of successfully deceiving others have made me cocky. I think no one can see through my lies.",
	],
	toolProfs: ["Disguise kit", "Forgery kit"],
	lifestyle: "modest",
};
BackgroundList["shade fanatic"] = {
	regExpSearch: /^(?=.*shade)(?=.*fanatic).*$/i,
	name: "Shade Fanatic",
	source: [["AL:RoD", 10]],
	skills: ["Deception", "Intimidation"],
	gold: 15,
	equipleft: [
		["Forgery kit", "", 5],
		["Transparent shadow cylinder", "", ""],
	],
	equipright: [
		["Fine clothes", "", 6],
		["Signet ring", "", ""],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Secret Society",
	trait: [
		"I am a bully; I try to hide it though.",
		"I let my actions speak for themselves",
		"I am important; I will not let anyone forget that.",
		"You are either with me or against me.",
		"I know it is only a time before I am betrayed by those I care for.",
		"I never understand why people get so emotional.",
		"They are out to get me. It is only my cunning that keeps me ahead of them",
		"Everyone has a choice, the one I make is always right though.",
	],
	ideal: [
		["Hope",
			"Hope: I know even if I need do evil acts, history will be my redemption. (Chaos)",
		],
		["Dedicated",
			"Dedicated: I can do anything I put my mind to (Lawful)",
		],
		["Exciting",
			"Exciting: I have found the truth of the Shadovar and want to share it with everyone. (Any)",
		],
		["Frugal",
			"Frugal: I horde my possessions knowing that someday I will be called upon to give everything I have to the cause (Any)",
		],
		["Eloquent",
			"Eloquent: I use my words to sway others to my beliefs. (Any)",
		],
		["Compassionate",
			"Compassionate: It is through love that others will join In our cause. (Good)",
		],
	],
	bond: [
		"They say the Shade broke the bonds of mortality; I want to find out how.",
		"The whispers in my head remind me that there is power to be found in the shadows.",
		"For the glory of Netheril, I will grow in power.",
		"I once lived in Hillsfar, I was chased out before I was able to say farewell.",
		"My true love was a killed by the Red Plumes; I plot to make them suffer.",
		"I had a loved one die in the arena at Hillsfar; I am out to prove I am stronger than them!",
	],
	flaw: [
		"I always over exaggerate my abilities.",
		"I cannot bear to let those I care for out of my sight.",
		"I am incapable of standing up for myself.",
		"The group I am with has committed atrocities; I am always worried their actions will become public.",
		"I always enjoy a good mug of ale … or five.",
		"I know what I do is wrong, but am afraid to speak up about it.",
	],
	toolProfs: ["Forgery kit"],
	languageProfs: ["Netherese"],
	lifestyle: "moderate",
};
BackgroundList["trade sheriff"] = {
	regExpSearch: /^(?=.*trade)(?=.*sheriff).*$/i,
	name: "Trade Sheriff",
	source: [["AL:RoD", 11]],
	skills: ["Investigation", "Persuasion"],
	gold: 17,
	equipleft: [
		["Thieves' tools", "", 1],
	],
	equipright: [
		["Fine clothes", "", 6],
		["Gray cloak", "", ""],
		["Sheriff's insignia", "", ""],
	],
	feature: "Investigative Services",
	trait: [
		"I am always polite and respectful",
		"I let my actions speak for themselves",
		"I am haunted by my past having seen the murder of a close friend or family member and it is the one case I always needed to solve but have not been able to.",
		"I am quick to judge and slow to vindicate",
		"I can be very persuasive and am able to ask questions where others might not be able to.",
		"I have a quirky personality that seems to take others off their guard.",
		"My sense of humor is considered by most to be awkward",
		"Everyone has a choice, and they can always make the right choice, mine!",
	],
	ideal: [
		["Hope",
			"Hope: my job is to speak for the victim (good)",
		],
		["Dedicated",
			"Dedicated: Once I start an investigation, until told to do so, I do not quit, not matter where it leads. (Lawful)",
		],
		["Nation",
			"Nation: My city, nation, or people are all that matter (any)",
		],
		["Mercenary",
			"Mercenary: When I do investigations, I expect answers immediately (Any)",
		],
		["Eloquent",
			"Eloquent: I use my words to sway others to give me answers.(good)",
		],
		["Might",
			"Might: It is through threats and force that I get my answers (lawful)",
		],
	],
	bond: [
		"To this day an unsolved case will always leave me haunted and bother me.",
		"Through the might of my personality I will solve an investigation or puzzle.",
		"It is my right to believe what I will, just try and stop me.",
		"I need to prove my worth to my fellow Sheriffs.",
		"Someone I cared for died under suspicious circumstances. I will find out what happened to them and bring their killer to justice.",
		"I speak for those that cannot speak for themselves.",
	],
	flaw: [
		"I always over exaggerate my abilities.",
		"I cannot bear to let those I care for out of my sight.",
		"I took a bribe to tank an investigation and I would do anything to keep it secret.",
		"I have little respect for those that are of \"low\" intelligence/race.",
		"I always enjoy a good mug of ale … or five to cover up my past.",
		"I speak for the First Lord of Hillsfar and make sure everyone knows it.",
	],
	toolProfs: [["Thieves' tools", "Dex"]],
	languageProfs: ["Elvish"],
	lifestyle: "moderate",
};

// Background features
BackgroundFeatureList["factor"] = {
	description: "My family has assigned me the services of a loyal retainer from the business. This person can perform mundane tasks for me such as making purchases, delivering messages, and running errands. He or she will not fight for me or follow me into danger, and will leave if frequently endangered or abused. If killed, my family assigns me another within days.",
	source: [["AL:RoD", 7]],
};
BackgroundFeatureList["investigative services"] = {
	description: "I have a way of communicating with others that puts them at ease. I can invoke my rank to allow me access to a crime scene or to requisition equipment or horses on a temporary basis. When entering a settlement around Hillsfar, I can identify a contact who will give me information and would help me because I want to stop anyone from disrupting trade.",
	source: [["AL:RoD", 11]],
};
BackgroundFeatureList["red plume and mage guild contacts"] = {
	description: "I made friends among the Red Plumes and Mage's Guild when I lived at the Hillsfar Gate. They remember me fondly and help me in little ways when they can. I can invoke their assistance in and around Hillsfar to obtain food, simple equipment for temporary use, and to gain access to the low-security areas of their garrisons, halls, and encampments.",
	source: [["AL:RoD", 6]],
};
BackgroundFeatureList["secret identity"] = {
	description: "I have created a secret identity that I use to conceal my true race and that offers a covering explanation for my presence in Hillsfar. In addition, I can forge documents, including official papers and personal letters, as long as I have seen an example of the kind of document or the handwriting I am trying to copy.",
	source: [["AL:RoD", 9]],
};
BackgroundFeatureList["secret passage"] = {
	description: "I can call on my smuggler contacts to secure secret passage into or out of Hillsfar for myself and my friends, no questions asked, and no Red Plume entanglements. Because I'm calling in a favor, I can't be certain when or if they can help. In return for passage, my companions and I may owe the Rogue's Guild a favor and/or may have to pay bribes.",
	source: [["AL:RoD", 8]],
};
BackgroundFeatureList["secret society"] = {
	description: "I have a special way of communicating with others who feel the same way I do about the Shade. When I enter a village or larger city, I can identify a contact who will give me information on those that would hinder my goals and those would help me simply because of my desire to see the Shade Enclave return in all its glory.",
	source: [["AL:RoD", 10]],
};
BackgroundFeatureList["shelter of the elven clergy"] = {
	description: "The clerics of Elventree have vowed to care for the Cormanthor refugees. They will help me when they can, including providing me and my companions with free healing and care at temples, shrines, and other established presences in Elventree. They will also provide me (but only me) with a poor lifestyle.",
	source: [["AL:RoD", 5]],
};
BackgroundFeatureList["trade contact"] = {
	description: "My family and I have trade contacts such as caravan masters, sailors, artisans, farmers, and shopkeepers throughout the Moonsea region and all along the Sword Coast. When adventuring in either of those areas, I can use those contacts to get information about the local area or to pass a message to someone in those areas, even across great distance.",
	source: [["AL:RoD", 7]],
};

// pub_20150915_OotA.js
// This file adds all the beasts and background features from the Out of the Abyss adventure book to MPMB's Character Record Sheet

// Define the source
SourceList["OotA"] = {
	name: "Out of the Abyss [beasts, background features, items]",
	abbreviation: "OotA",
	group: "Legacy Adventure Books",
	campaignSetting: "Forgotten Realms",
	url: "https://dnd.wizards.com/products/outoftheabyss",
	date: "2015/09/15",
	defaultExcluded: true,
};

// Background features
BackgroundFeatureList["deep delver"] = {
	description: "I have a knack for finding my way in the Underdark, recalling all twists and turns with ease, such that I can always retrace my steps underground. I can determine which sources of food and water are safe to consume. I can always find sufficient food and water for myself and up to five other people in the Underdark, if sustenance is available in the area.",
	source: [["OotA", 221]],
};
BackgroundFeatureList["underdark experience"] = {
	description: "I'm no casual visitor to the Underdark, but have spent considerable time there learning its ways. I'm familiar with the various races, civilizations, settlements, and travel routes of the Underdark. If I fail an Intelligence check to recall some piece of Underdark lore, I know a source I can consult for the answer unless the DM rules that the lore is unknown.",
	source: [["OotA", 221]],
};

// Creatures
CreatureList["cave badger"] = { // contributed by Nod_Hero
	name: "Cave Badger",
	nameAlt: ["Badger, Cave"],
	source: [["OotA", 96]],
	size: 3,
	type: "Beast",
	alignment: "Unaligned",
	ac: 12,
	hp: 13,
	hd: [2, 8],
	speed: "30 ft, burrow 15 ft",
	scores: [13, 10, 15, 2, 12, 5],
	senses: "Darkvision 30 ft, Tremorsense 60 ft; Adv on Wis (Perception) checks using smell",
	passivePerception: 11,
	languages: "",
	challengeRating: "1/4",
	proficiencyBonus: 2,
	attacksAction: 2,
	attacks: [{
		name: "Bite",
		ability: 1,
		damage: [1, 6, "piercing"],
		range: "Melee (5 ft)",
		description: "One bite and one claws attack as an Attack action",
	}, {
		name: "Claws",
		ability: 1,
		damage: [2, 4, "slashing"],
		range: "Melee (5 ft)",
		description: "One claws and one bite attack as an Attack action",
	}],
	actions: [{
		name: "Multiattack",
		description: "As an action on its turn, the badger can make one Bite and one Claws attack.",
	}],
	traits: [{
		name: "Keen Smell",
		description: "The badger has Advantage on Wisdom (Perception) checks that rely on smell.",
	}],
};
CreatureList["steeder, female"] = {
	name: "Female Steeder",
	nameAlt: ["Steeder, Female", "Steeder"],
	source: [["OotA", 231]],
	size: 2,
	type: "Beast",
	alignment: "Unaligned",
	ac: 14,
	hp: 30,
	hd: [4, 10],
	speed: "30 ft, climb 30 ft",
	scores: [15, 16, 14, 2, 10, 3],
	skills: {
		"stealth": 7,
	},
	senses: "Darkvision 120 ft",
	passivePerception: 10,
	challengeRating: "1",
	proficiencyBonus: 2,
	attacksAction: 1,
	attacks: [{
		name: "Bite",
		ability: 2,
		damage: [1, 8, "piercing"],
		range: "Melee (5 ft)",
		description: "Target also takes 2d8 Acid damage, half on a DC 12 Constitution saving throw",
	}, {
		name: "Sticky Leg",
		ability: 2,
		damage: ["\u2015", "", "Grappled"],
		range: "Melee (5 ft)",
		description: "Medium or smaller is stuck to the steeder's leg and Grappled (escape DC 12); Can't use again until grapple ends",
		abilitytodamage: false,
	}],
	traits: [{
		name: "Spider Climb",
		description: "The steeder can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
	}, {
		name: "Leap",
		description: "The steeder can expend all its movement on its turn to jump up to 90 ft vertically or horizontally, provided that its speed is at least 30 feet.",
	}],
};
CreatureList["steeder, male"] = {
	name: "Male Steeder",
	nameAlt: ["Steeder, Male"],
	source: [["OotA", 231]],
	size: 3,
	type: "Beast",
	alignment: "Unaligned",
	ac: 12,
	hp: 13,
	hd: [2, 8],
	speed: "30 ft, climb 30 ft",
	scores: [15, 12, 14, 2, 10, 3],
	skills: {
		"stealth": 5,
	},
	senses: "Darkvision 120 ft",
	passivePerception: 10,
	challengeRating: "1/4",
	proficiencyBonus: 2,
	attacksAction: 1,
	attacks: [{
		name: "Bite",
		ability: 1,
		damage: [1, 8, "piercing"],
		range: "Melee (5 ft)",
		description: "Target also takes 1d8 Acid damage, half on a DC 12 Constitution saving throw",
	}, {
		name: "Sticky Leg",
		ability: 1,
		damage: ["\u2015", "", "Grappled"],
		range: "Melee (5 ft)",
		description: "Small or smaller is stuck to the steeder's leg and Grappled (escape DC 12); Can't use again until grapple ends",
		abilitytodamage: false,
	}],
	traits: [{
		name: "Spider Climb",
		description: "The steeder can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
	}, {
		name: "Leap",
		description: "The steeder can expend all its movement on its turn to jump up to 60 ft vertically or horizontally, provided that its speed is at least 30 feet.",
	}],
};

// Magic Items
MagicItemsList["dawnbringer"] = {
	name: "Dawnbringer",
	source: [["OotA", 222]],
	type: "Weapon (Longsword)",
	rarity: "Legendary",
	storyItemAL: true,
	prerequisite: "Requires attunement by a creature of non-evil alignment",
	prereqeval: function (v) { return !/evil/i.test(What("Alignment")); },
	description: "As a Bonus Action, I can have this hilt create a blade of radiance. It acts like a longsword that does +2 to attack and damage rolls, Radiant damage (+1d8 to Undead), has finesse, emits bright sunlight in a 15-ft radius and dim light in another 15 ft. I can use it to cast *Lesser Restoration* and it is sentient, see Notes.",
	descriptionLong: "As a Bonus Action, I can have this longsword hilt create or dismiss a blade of pure radiance. It acts like a longsword that grants a +2 bonus to attack and damage rolls, does Radiant damage and has the finesse property. It deals +1d8 Radiant damage to Undead and emits sunlight, bright light in a 15-ft radius and dim light in an additional 15ft. As an action, I can expand or reduce both the bright and dim light's radius by 5 ft each, to a maximum of 30 feet each or a minimum of 10 feet each. Once per dawn, I can use it to cast *Lesser Restoration*. Also, it is sentient, see Notes page.",
	descriptionFull: "Lost for ages in the Underdark, *Dawnbringer* appears to be a gilded longsword hilt. While grasping the hilt, you can use a bonus action to make a blade of pure radiance spring from the hilt, or cause the blade to disappear. While the blade exists, this magic longsword has the finesse property. If you are proficient with shortswords or longswords, you are proficient with *Dawnbringer*.\n   You gain a +2 bonus to attack and damage rolls made with this weapon, which deals radiant damage instead of slashing damage. When you hit an undead with it, that target takes an extra 1d8 radiant damage.\n   The sword's luminous blade emits bright light in a 15-foot radius and dim light for an additional 15 feet. The light is sunlight. While the blade persists, you can use an action to expand or reduce its radius of bright and dim light by 5 feet each, to a maximum of 30 feet each or a minimum of 10 feet each.\n   While holding the weapon, you can use an action to touch a creature with the blade and cast *Lesser Restoration* on that creature. Once used, this ability can't be used again until the next dawn.\n   ***Sentience***. *Dawnbringer* is a sentient neutral good weapon with an Intelligence of 12, a Wisdom of 15, and a Charisma of 14. It has hearing and darkvision out to a range of 120 feet.\n   The sword can speak, read, and understand Common, and it can communicate with its wielder telepathically. Its voice is kind and feminine. It knows every language you know while attuned to it.\n   ***Personality***. Forged by ancient sun worshippers, *Dawnbringer* is meant to bring light into darkness and to fight creatures of darkness. It is kind and compassionate to those in need, but fierce and destructive to its enemies.\n   Long years lost in darkness have made *Dawnbringer* frightened of both the dark and abandonment. It prefers that its blade always be present and shedding light in areas of darkness, and it strongly resists being parted from its wielder for any length of time." +
	// Addition from Adventurers League Content Catalogue 8.07
	"\n   If an evil creature attempts to attune to the weapon, it not only finds it impossible, but *Dawnbringer* attempts to take control of its wielder (DC 14 Charisma saving throw). If the weapon is successful, it insists on being taken to the surface or willingly given to the first creature it comes across that is not a member of a race indigenous to the Underdark. *Dawnbringer* will not allow its relinquishment to a creature that it or its wielder knows is evil, and instead compels its wielder to find a new recipient.",
	attunement: true,
	weight: 3,
	action: [["bonus action", " (start/stop)"], ["action", " (change light)"]],
	weaponOptions: [{
		baseWeapon: "longsword",
		regExpSearch: /dawnbringer/i,
		name: "Dawnbringer",
		source: [["OotA", 222]],
		damage: [1, 8, "radiant"],
		description: "Finesse, versatile (1d10); +1d8 damage to Undead",
		modifiers: [2, 2],
		selectNow: true,
	}],
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (v.theWea.name == "Dawnbringer" && !fields.Proficiency) {
					fields.Proficiency = CurrentProfs.weapon.otherWea && CurrentProfs.weapon.otherWea.finalProfs.indexOf("shortsword") !== -1;
				}
			}, "",
		],
	},
	usages: 1,
	recovery: "dawn",
	additional: "Lesser Restoration",
	spellcastingBonus: [{
		name: "Once per dawn",
		spells: ["lesser restoration"],
		selection: ["lesser restoration"],
		firstCol: "onceday",
	}],
	toNotesPage: [
		{
			name: "Dawnbringer",
			note: [
				"Lost for ages in the Underdark, Dawnbringer appears to be a gilded longsword hilt. While grasping the hilt, I can use a Bonus Action to make a blade of pure radiance spring from the hilt, or cause the blade to disappear. While the blade exists, it functions as a magic longsword that has the finesse property. I'm proficient with it if I'm proficient with either shortswords or longswords.",
				"I gain a +2 bonus to attack and damage rolls made with this weapon, which deals Radiant damage instead of Slashing damage. When I hit an Undead with it, that target takes an extra 1d8 Radiant damage.",
				"The sword's luminous blade emits bright light in a 15-foot radius and dim light for an additional 15 ft. The light is sunlight. As an action while the blade persists, I can expand or reduce its radius of bright and dim light by 5 ft each, to a maximum of 30 ft each or a minimum of 10 ft each.",
				"As an action while holding the weapon, I can touch a creature with the blade and cast *Lesser Restoration* on that creature. Once used, this ability can't be used again until the next dawn.",
				"Dawnbringer is a sentient neutral good weapon with an Intelligence of 12, a Wisdom of 15, and a Charisma of 14. It has hearing and Darkvision out to a range of 120 feet. The sword can speak, read, and understand Common, and it can communicate with its wielder telepathically. Its voice is kind and feminine. It knows every language you know while attuned to it.",
				"Forged by ancient sun worshippers, Dawnbringer is meant to bring light into darkness and to fight creatures of darkness. It is kind and compassionate to those in need, but fierce and destructive to its enemies. Long years lost in darkness have made Dawnbringer frightened of both the dark and abandonment. It prefers that its blade always be present and shedding light in areas of darkness, and it strongly resists being parted from its wielder for any length of time.",
			],
		},
		Object.assign({}, sentientItemConflictNote, { amendTo: "Dawnbringer" }),
	],
}
MagicItemsList["piwafwi (cloak of elvenkind)"] = {
	name: "Piwafwi",
	source: [["OotA", 222]],
	type: "Wondrous Item",
	rarity: "Uncommon",
	description: "While I wear this dark spider-silk cloak with its hood up, Wisdom (Perception) checks made to see me have Disadv, and I have Adv on Dex (Stealth) checks made to hide, as its color shifts to camouflage me. Pulling the hood up or down requires an action. It loses its magic if exposed to sunlight for 1 uninterrupted hour.",
	descriptionFull: "This dark spider-silk cloak is made by drow. It is a *cloak of elvenkind*. It loses its magic if exposed to sunlight for 1 hour without interruption.\n   While you wear this cloak with its hood up, Wisdom (Perception) checks made to see you have disadvantage. and you have advantage on Dexterity (Stealth) checks made to hide, as the cloak's color shifts to camouflage you. Pulling the hood up or down requires an action.",
	attunement: true,
	action: [["action", " (hood up/down)"]],
	eval: function () {
		if (CurrentMagicItems.known.indexOf("boots of elvenkind") !== -1) {
			SetProf("advantage", true, ["Stealth", true], "Cloak and Boots of Elvenkind (magic items)");
		}
	},
	removeeval: function () {
		SetProf("advantage", false, ["Stealth", true], "Cloak and Boots of Elvenkind (magic items)");
	},
}
MagicItemsList["piwafwi of fire resistance (cloak of elvenkind)"] = {
	name: "Piwafwi of Fire Resistance",
	source: [["OotA", 222]],
	type: "Wondrous Item",
	rarity: "Rare",
	description: "While I wear this dark spider-silk cloak with its hood up, Wisdom (Perception) checks made to see me have Disadv, and I get Adv on Dex (Stealth) checks made to hide. Pulling the hood up or down requires an action. It also grants me Fire resistance. It loses its magic if exposed to sunlight for 1 hour without interruption.",
	descriptionFull: "This dark spider-silk cloak is made by drow. It is a *cloak of elvenkind*. It also grants resistance to fire damage while you wear it. It loses its magic if exposed to sunlight for 1 hour without interruption.\n   While you wear this cloak with its hood up, Wisdom (Perception) checks made to see you have disadvantage. and you have advantage on Dexterity (Stealth) checks made to hide, as the cloak's color shifts to camouflage you. Pulling the hood up or down requires an action.",
	attunement: true,
	dmgres: ["Fire"],
	action: [["action", " (hood up/down)"]],
	eval: function () {
		if (CurrentMagicItems.known.indexOf("boots of elvenkind") !== -1) {
			SetProf("advantage", true, ["Stealth", true], "Cloak and Boots of Elvenkind (magic items)");
		}
	},
	removeeval: function () {
		SetProf("advantage", false, ["Stealth", true], "Cloak and Boots of Elvenkind (magic items)");
	},
}
MagicItemsList["spell gem"] = { // not legal in AL
	name: "Spell Gem",
	source: [["OotA", 223]],
	type: "Wondrous Item",
	notLegalAL: true,
	description: "This gem can store 1 spell in it. If it is empty, I can cast a spell as normal, but have it stored in the gem. As an action, I can cast a stored spell from it, if that spell is on my class' spell list.",
	descriptionFull: "A *spell gem* can contain one spell from any class's spell list. You become aware of the spell when you learn the gem's properties. While holding the gem, you can cast the spell from it as an action if you know the spell or if the spell is on your class's spell list. Doing so doesn't require any components, and doesn't require attunement. The spell then disappears from the gem.\n   If the spell is of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC equals 10 + the spell's level. On a failed check, the spell disappears from the gem with no other effect\n   Each *spell gem* has a maximum level for the spell it can store. The spell level determines the gem's rarity, the stored spell's saving throw DC, and attack bonus, as shown in the table below.\n   You can imbue the gem with a spell if you're attuned to it and it's empty. To do so, you cast the spell while holding the gem. The spell is stored in the gem instead of having any effect. Casting the spell must require either 1 action or 1 minute or longer, and the spell's level must be no higher than the gem's maximum. If the spell belongs to the school of abjuration and requires material components that are consumed, you must provide them, but they can be worth half as much as normal.\n   Once imbued with a spell, the gem can't be imbued again until the next dawn.\n   Deep gnomes created these magic gemstones and keep the creation process a secret.\n\n" + [
		"**Level**\t**Stone**\t\t**Rarity**\t\t**DC/Atk**",
		"Cantrip\tObsidian\t\tUncommon\t13/+5",
		"1st\tLapis Lazuli\tUncommon\t13/+5",
		"2nd\tQuartz\t\tRare\t\t13/+5",
		"3rd\tBloodstone\tRare\t\t15/+7",
		"4th\tAmber\t\tVery Rare   \t15/+9",
		"5th\tJade\t\tVery Rare   \t17/+9",
		"6th\tTopaz\t\tVery Rare   \t17/+10",
		"7th\tStar Ruby  \tLegendary \t18/+10",
		"8th\tRuby\t\tLegendary \t18/+10",
		"9th\tDiamond\t\tLegendary \t19/+11",
	].join("\n"),
	attunement: true,
	allowDuplicates: true,
	calcChanges: {
		spellAdd: [
			function (spellKey, spellObj, spName) {
				if (/spell gem/i.test(spName) && spellObj.time != "1 a") {
					spellObj.time = "1 a";
					return true;
				}
			},
			"Spells cast into a Spell Gem can only have a casting time of either 1 action or 1 minute or longer.\n \u2022 Spells cast from a Spell Gem always require 1 action to cast.",
		],
		spellList: [
			function (spList, spName, spType) {
				// only continue for spell gems
				if (spList.spellGemProcessed || !/spell gem/i.test(CurrentSpells[spName].name)) return;
				// create the notspells array if it didn't already exist
				if (!spList.notspells) spList.notspells = [];
				// now add all the spells of this spell gem's level that have a casting time of 1 Reaction or 1 Bonus Action
				for (var spell in SpellsList) {
					var aSp = SpellsList[spell];
					if (aSp.level <= spList.level[1] && aSp.time && /1 (rea|bns)/i.test(aSp.time)) spList.notspells.push(spell);
				}
				spList.spellGemProcessed = true;
			}, "",
		],
	},
	toNotesPage: [{
		name: "Storing Spells",
		page3notes: true,
		note: [
			"Casting a spell stored from a spell gem doesn't require attunement",
			"Only spells with a casting time of 1 action or 1 min or more can be stored in a spell gem",
			"Imbuing a spell gem requires casting a spell as normal, but the spell produces no effect",
			"I only need to provide half the costly material components for abjuration spells to imbue",
		],
	}],
	choices: ["Obsidian (cantrip, uncommon)", "Lapis Lazuli (1st-level, uncommon)", "Quartz (2nd-level, rare)", "Bloodstone (3rd-level, rare)", "Amber (4th-level, very rare)", "Jade (5th-level, very rare)", "Topaz (6th-level, very rare)", "Star Ruby (7th-level, legendary)", "Ruby (8th-level, legendary)", "Diamond (9th-level, legendary)"],
	"obsidian (cantrip, uncommon)": {
		name: "Spell Gem [Obsidian]",
		sortname: "Spell Gem  (cantrip) [Obsidian]",
		rarity: "Uncommon",
		description: "This gem can store one cantrip. I can cast such a spell into the empty gem. As an action, I can cast the spell stored in it (if it's on my class' spell list), with DC 13 and +5 spell attack.",
		fixedDC: 13,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: [{
			level: [0,0],
			psionic: false,
			firstCol: "checkbox",
			times: 20,
		}],
	},
	"lapis lazuli (1st-level, uncommon)": {
		name: "Spell Gem [Lapis Lazuli]",
		sortname: "Spell Gem (1st-level) [Lapis Lazuli]",
		rarity: "Uncommon",
		description: "This gem can store one spell up to 1st-level. I can cast such a spell into the empty gem. As an action, I can cast the spell stored in it (if it's on my class' spell list), with DC 13 and +5 spell attack. If the spell's level is higher than I can cast, I need to make a DC 11 check with my spellcasting ability or the spell has no effect.",
		fixedDC: 13,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: [{
			level: [0,1],
			psionic: false,
			firstCol: "checkbox",
			times: 20,
		}],
	},
	"quartz (2nd-level, rare)": {
		name: "Spell Gem [Quartz]",
		sortname: "Spell Gem (2nd-level) [Quartz]",
		rarity: "Rare",
		description: "This gem can store one spell up to 2nd-level. I can cast such a spell into the empty gem. As an action, I can cast the spell stored in it (if it's on my class' spell list), with DC 13 and +5 spell attack. If the spell's level is higher than I can cast, I need to make a DC 12 check with my spellcasting ability or the spell has no effect.",
		fixedDC: 13,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: [{
			level: [0,2],
			psionic: false,
			firstCol: "checkbox",
			times: 20,
		}],
	},
	"bloodstone (3rd-level, rare)": {
		name: "Spell Gem [Bloodstone]",
		sortname: "Spell Gem (3rd-level) [Bloodstone]",
		rarity: "Rare",
		description: "This gem can store one spell up to 3rd-level. I can cast such a spell into the empty gem. As an action, I can cast the spell stored in it (if it's on my class' spell list), with DC 15 and +7 spell attack. If the spell's level is higher than I can cast, I need to make a DC 13 check with my spellcasting ability or the spell has no effect.",
		fixedDC: 15,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: [{
			level: [0,3],
			psionic: false,
			firstCol: "checkbox",
			times: 20,
		}],
	},
	"amber (4th-level, very rare)": {
		name: "Spell Gem [Amber]",
		sortname: "Spell Gem (4th-level) [Amber]",
		rarity: "Very Rare",
		description: "This gem can store one spell up to 4th-level. I can cast such a spell into the empty gem. As an action, I can cast the spell stored in it (if it's on my class' spell list), with DC 15 and +9 spell attack. If the spell's level is higher than I can cast, I need to make a DC 14 check with my spellcasting ability or the spell has no effect.",
		fixedDC: 15,
		fixedSpAttack: 9,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: [{
			level: [0,4],
			psionic: false,
			firstCol: "checkbox",
			times: 20,
		}],
	},
	"jade (5th-level, very rare)": {
		name: "Spell Gem [Jade]",
		sortname: "Spell Gem (5th-level) [Jade]",
		rarity: "Very Rare",
		description: "This gem can store one spell up to 5th-level. I can cast such a spell into the empty gem. As an action, I can cast the spell stored in it (if it's on my class' spell list), with DC 17 and +9 spell attack. If the spell's level is higher than I can cast, I need to make a DC 15 check with my spellcasting ability or the spell has no effect.",
		fixedDC: 17,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: [{
			level: [0,5],
			psionic: false,
			firstCol: "checkbox",
			times: 20,
		}],
	},
	"topaz (6th-level, very rare)": {
		name: "Spell Gem [Topaz]",
		sortname: "Spell Gem (6th-level) [Topaz]",
		rarity: "Very Rare",
		description: "This gem can store one spell up to 6th-level. I can cast such a spell into the empty gem. As an action, I can cast the spell stored in it (if it's on my class' spell list), with DC 17, +10 spell attack. If the spell's level is higher than I can cast, I need to make a DC 16 check with my spellcasting ability or the spell has no effect.",
		fixedDC: 17,
		fixedSpAttack: 10,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: [{
			level: [0,6],
			psionic: false,
			firstCol: "checkbox",
			times: 20,
		}],
	},
	"star ruby (7th-level, legendary)": {
		name: "Spell Gem [Star Ruby]",
		sortname: "Spell Gem (7th-level) [Star Ruby]",
		rarity: "Legendary",
		description: "This gem can store one spell up to 7th-level. I can cast such a spell into the empty gem. As an action, I can cast the spell stored in it (if it's on my class' spell list), with DC 18, +10 spell attack. If the spell's level is higher than I can cast, I need to make a DC 17 check with my spellcasting ability or the spell has no effect.",
		fixedDC: 18,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: [{
			level: [0,7],
			psionic: false,
			firstCol: "checkbox",
			times: 20,
		}],
	},
	"ruby (8th-level, legendary)": {
		name: "Spell Gem [Ruby]",
		sortname: "Spell Gem (8th-level) [Ruby]",
		rarity: "Legendary",
		description: "This gem can store one spell up to 8th-level. I can cast such a spell into the empty gem. As an action, I can cast the spell stored in it (if it's on my class' spell list), with DC 18, +10 spell attack. If the spell's level is higher than I can cast, I need to make a DC 18 check with my spellcasting ability or the spell has no effect.",
		fixedDC: 18,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: [{
			level: [0,8],
			psionic: false,
			firstCol: "checkbox",
			times: 20,
		}],
	},
	"diamond (9th-level, legendary)": {
		name: "Spell Gem [Diamond]",
		sortname: "Spell Gem (9th-level) [Diamond]",
		rarity: "Legendary",
		description: "This gem can store one spell up to 9th-level. I can cast such a spell into the empty gem. As an action, I can cast the spell stored in it (if it's on my class' spell list), with DC 19, +11 spell attack. If the spell's level is higher than I can cast, I need to make a DC 19 check with my spellcasting ability or the spell has no effect.",
		fixedDC: 19,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: [{
			level: [0,9],
			psionic: false,
			firstCol: "checkbox",
			times: 20,
		}],
	},
}
MagicItemsList["stonespeaker crystal"] = {
	name: "Stonespeaker Crystal",
	source: [["OotA", 223]],
	type: "Wondrous Item",
	rarity: "Rare",
	description: "This crystal has 10 charges, regaining 1d6+4 at dawn, which I can use to cast its spells. When I use its last charge, roll a d20. On a 1, it vanishes. It gives me Adv on Int (Investigation) checks. When I cast an abjuration spell, I can expend 1 charge per level of the spell to substitute one material component of the spell.",
	descriptionFull: "Created by the stone giant librarians of Gravenhollow, this nineteen-inch-long shard of quartz grants you advantage on Intelligence (Investigation) checks while it is on your person.\n   The crystal has 10 charges. While holding it, you can use an action to expend some of its charges to cast one of the following spells from it: *Speak with Animals* (2 charges), *Speak with Dead* (4 charges), or *Speak with Plants* (3 charges).\n   When you cast a Divination spell, you can use the crystal in place of one material component that would normally be consumed by the spell, at a cost of 1 charge per level of the spell. The crystal is not consumed when used in this way.\n   The crystal regains 1d6+4 expended charges daily at dawn. If you expend the crystal's last charge, roll a d20. On a 1, the crystal vanishes, lost forever.",
	attunement: true,
	weight: 1,
	usages: 10,
	recovery: "dawn",
	additional: "regains 1d6+4",
	spellFirstColTitle: "Ch",
	spellcastingBonus: [{
		name: "2 charges",
		spells: ["speak with animals"],
		selection: ["speak with animals"],
		firstCol: 2,
	}, {
		name: "3 charges",
		spells: ["speak with plants"],
		selection: ["speak with plants"],
		firstCol: 3,
	}, {
		name: "4 charges",
		spells: ["speak with dead"],
		selection: ["speak with dead"],
		firstCol: 4,
	}],
	advantages: [["Investigation", true]],
}
MagicItemsList["wand of viscid globs"] = {
	name: "Wand of Viscid Globs",
	source: [["OotA", 223]],
	type: "Wand",
	rarity: "Rare",
	attunement: true,
	description: "This black wand has 7 charges, regaining 1d6+1 at midnight. If its last charge is used, roll a d20. On a 1, it melts. As an action, I can expend 1 charge to make a ranged attack roll on a target in 60 ft (with my spellcasting ability). On a hit, it is Restrained for 1 hour. The wand is destroyed if exposed to sunlight for 1 hour.",
	descriptionFull: "Crafted by the drow, this slim black wand has 7 charges. While holding it, you can use an action to expend 1 of its charges to cause a small glob of viscous material to launch from the tip at one creature within 60 feet of you. Make a ranged attack roll against the target, with a bonus equal to your spellcasting modifier (or your Intelligence modifier, if you don't have a spellcasting modifier) plus your proficiency bonus. On a hit, the glob expands and dries on the target, which is restrained for 1 hour. After that time, the viscous material cracks and falls away.\n   Applying a pint or more of alcohol to the restrained creature dissolves the glob instantly, as does the application of *oil of etherealness* or *universal solvent*. The glob also dissolves instantly if exposed to sunlight. No other nonmagical process can remove the viscous material until it deteriorates on its own.\n   The wand regains 1d6+1 expended charges daily at midnight. If you expend the wands last charge, roll a d20. On a 1, the wand melts into harmless slime and is destroyed.\n   A wand of viscous globs is destroyed if exposed to sunlight for 1 hour without interruption.",
	weight: 1,
	usages: 7,
	recovery: "Midnight",
	additional: "regains 1d6+1",
	action: [["action", ""]],
	weaponOptions: [{
		regExpSearch: /^(?=.*wand)(?=.*viscid)(?=.*globs).*$/i,
		name: "Wand of Viscid Globs",
		source: [["OotA", 223]],
		ability: 4,
		type: "Spell",
		damage: ["\u2015", "", "Restrained"],
		range: "60 ft",
		description: "1 charge; Lasts 1 hour or until exposed to sunlight, a pint of alcohol, oil of etherealness, or universal solvent",
		abilitytodamage: false,
		useSpellcastingAbility: true,
		selectNow: true,
	}],
}

// pub_20151103_SCAG.js
// This file adds all the player-material from Sword Coast Adventure Guide to MPMB's Character Record Sheet

// Define the source
SourceList["S"] = {
	name: "Sword Coast Adventure Guide",
	abbreviation: "SCAG",
	group: "Legacy Campaign Sourcebooks",
	campaignSetting: "Forgotten Realms",
	url: "https://dnd.wizards.com/products/sword-coast-adventurers-guide",
	date: "2015/11/03",
	defaultExcluded: true,
};

// Races
RaceList["ghostwise halfling"] = {
	regExpSearch: /^(?=.*\b(halflings?|hobbits?)\b)(?=.*ghostwise).*$/i,
	name: "Ghostwise halfling",
	sortname: "Halfling, Ghostwise",
	plural: "Ghostwise halflings",
	source: [["S", 110]],
	size: 4,
	speed: {
		walk: { spd: 25, enc: 15 },
	},
	languageProfs: ["Common", "Halfling"],
	savetxt: { adv_vs: ["Frightened"] },
	age: " reach adulthood at age 20 and live around 150 years",
	height: " average about 3 feet tall (2'7\" + 2d4\")",
	weight: " weigh around 40 lb (35 + 2d4 lb)",
	heightMetric: " average about 90 cm tall (80 + 5d4)",
	weightMetric: " weigh around 18 kg (16 + 5d4 / 10 kg)",
	trait: [
		"**Ghostwise Halfling**",
		"##\u25C6 Lucky##. When I roll a 1 on an attack roll, ability check, or saving throw, I can reroll the die and must use the new roll.",
		"##\u25C6 Halfling Nimbleness##. I can move through the space of any creature that is of a size larger than me.",
		"##\u25C6 Silent Speech##. I can speak telepathically to any one creature within 30 ft of me. It only understands me if we share a language.",
	].join("\n"),
};
RaceList["gray dwarf"] = {
	regExpSearch: /^((?=.*\bduergars?\b)|((?=.*\b(dwarfs?|dwarves|dwarfish|dwarvish|dwarven)\b)(?=.*\b(grey|gray|underdark)\b))).*$/i,
	name: "Duergar",
	sortname: "Dwarf, Gray (Duergar)",
	source: [["S", 104], ["MToF", 81]],
	plural: "Duergar",
	size: 3,
	speed: {
		walk: { spd: 25, enc: 25 },
	},
	languageProfs: ["Common", "Dwarvish", "Undercommon"],
	vision: [["Darkvision", 120], ["Sunlight Sensitivity", 0]],
	savetxt: { adv_vs: ["Charmed", "Illusions", "Paralyzed", "Poison"] },
	dmgres: ["Poison"],
	weaponProfs: [false, false, ["battleaxe", "handaxe", "warhammer", "light hammer"]],
	toolProfs: [["Smith, brewer, or mason tools", 1]],
	age: " are considered young until they are 50 and live about 350 years",
	height: " stand between 4 and 5 feet tall (3'8\" + 2d4\")",
	weight: " weigh around 150 lb (115 + 2d4 \xD7 2d6 lb)",
	heightMetric: " stand between 1,2 and 1,5 metres tall (110 + 5d4 cm)",
	weightMetric: " weigh around 70 kg (55 + 5d4 \xD7 4d6 / 10 kg)",
	trait: [
		"**Duergar**",
		"##\u25C6 Stonecunning##. Whenever I make an Int (History) check related to the origin of stonework, I am considered proficient in the skill and add double my proficiency bonus to the check.",
		"##\u25C6 Sunlight Sensitivity##. Disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight when I or what I am trying to attack/perceive is in direct sunlight.",
		"##\u25C6 Duergar Magic##. 3rd: *Enlarge/Reduce* to enlarge; 5th: *Invisibility*. If not in direct sunlight, I can cast both spells on myself once per Long Rest without material components, using Int.",
	].join("\n"),
	spellcastingAbility: 4,
	features: {
		"enlarge": {
			name: "Duergar Magic (level 3)",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Duergar Magic (level 3)",
				spells: ["enlarge/reduce"],
				selection: ["enlarge/reduce"],
				firstCol: "oncelr",
			}],
			spellChanges: {
				"enlarge/reduce": {
					name: "Enlarge",
					range: "Self",
					components: "V,S",
					compMaterial: "",
					description: "I'm enlarged, Adv on Str checks/aves and +1d4 on weapon dmg; Can't cast this in direct sunlight",
					changes: "Using Duergar Magic, I cast *Enlarge/Reduce* while I'm not in direct sunlight, but only to enlarge myself.",
				},
			},
		},
		"invisibility": {
			name: "Duergar Magic (level 5)",
			minlevel: 5,
			spellcastingBonus: [{
				name: "Duergar Magic (level 5)",
				spells: ["invisibility"],
				selection: ["invisibility"],
				firstCol: "oncelr",
			}],
			spellChanges: {
				"invisibility": {
					range: "Self",
					components: "V,S",
					compMaterial: "",
					description: "Me and my worn/carried Invisible until I attack or cast; Can't cast this spell in direct sunlight",
					changes: "Using Duergar Magic, I can cast *Invisibility* while I'm not in direct sunlight, but only on myself.",
				},
			},
		},
	},
};
// Racial variants
AddRacialVariant("half-elf", "aquatic", {
	regExpSearch: /aquatic/i,
	name: "Half-aquatic elf",
	source: [["S", 116]],
	plural: "Half-aquatic elves",
	speed: {
		walk: { spd: 30, enc: 20 },
		swim: { spd: 30, enc: 20 },
	},
	skillstxt: "",
	trait: [
		"**Half-Aquatic Elf**",
		"##\u25C6 Swimming Speed##. My aquatic heritage gives me a 30 ft Swim Speed.",
	].join("\n"),
});
AddRacialVariant("half-elf", "cantrip", {
	regExpSearch: /cantrip/i,
	name: "Half-high elf",
	source: [["S", 116]],
	plural: "Half-high elves",
	skillstxt: "",
	trait: [
		"**Half-High Elf**",
		"##\u25C6 Cantrip##. I know one cantrip of my choice from the wizard spell list. Intelligence is my spellcasting ability for it.",
	].join("\n"),
	spellcastingAbility: 4,
	spellcastingBonus: [{
		name: "High Elf Cantrip",
		"class": "wizard",
		level: [0, 0],
		firstCol: "atwill",
	}],
});
AddRacialVariant("half-elf", "drow magic", {
	regExpSearch: /^(?=.*drow)(?=.*magic).*$/i,
	name: "Half-drow",
	source: [["S", 116]],
	plural: "Half-drow",
	skillstxt: "",
	trait: [
		"**Half-drow**",
		"##\u25C6 Drow Magic##. I know the *Dancing Lights* cantrip.",
		"Once I reach 3rd level, I can cast the *Faerie Fire* spell once per Long Rest.",
		"Once I reach 5th level, I can also cast the *Darkness* spell once per Long Rest.",
		"Charisma is my spellcasting ability for these spells.",
	].join("\n"),
	spellcastingAbility: 6,
	spellcastingBonus: [{
		name: "Drow Magic (level 1)",
		spells: ["dancing lights"],
		selection: ["dancing lights"],
		firstCol: "atwill",
	}],
	features: {
		"faerie fire": {
			name: "Drow Magic (level 3)",
			minlevel: 3,
			spellcastingBonus: [{
				name: "Drow Magic (level 3)",
				spells: ["faerie fire"],
				selection: ["faerie fire"],
				firstCol: "oncelr",
			}],
		},
		"darkness": {
			name: "Drow Magic (level 5)",
			minlevel: 5,
			spellcastingBonus: [{
				name: "Drow Magic (level 5)",
				spells: ["darkness"],
				selection: ["darkness"],
				firstCol: "oncelr",
			}],
		},
	},
});
AddRacialVariant("half-elf", "elf weapon training", {
	regExpSearch: /^(?=.*\b(elf|elven)\b)(?=.*weapon)(?=.*training).*$/i,
	source: [["S", 116]],
	skillstxt: "",
	trait: "**Half-Elf**",
	weaponProfs: [false, false, ["longsword", "shortsword", "longbow", "shortbow"]],
});
AddRacialVariant("half-elf", "fleet of foot", {
	regExpSearch: /^(?=.*fleet)(?=.*\b(foot|feet)\b).*$/i,
	name: "Half-wood elf",
	source: [["S", 116]],
	plural: "Half-wood elves",
	speed: {
		walk: { spd: 35, enc: 25 },
	},
	skillstxt: "",
	trait: "**Half-Wood Elf**",
});
AddRacialVariant("half-elf", "mask of the wild", {
	regExpSearch: /^(?=.*\bmasks?\b)(?=.*\bwilds?\b).*$/i,
	name: "Half-wood elf",
	source: [["S", 116]],
	plural: "Half-wood elves",
	skillstxt: "",
	trait: [
		"**Half-Wood Elf**",
		"##\u25C6 Mask of the Wild##. I can attempt to hide even when I am only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.",
	].join("\n"),
});
AddRacialVariant("tiefling", "winged", {
	regExpSearch: /wing/i,
	name: "Winged tiefling",
	source: [["S", 118]],
	plural: "Winged tieflings",
	speed: {
		walk: { spd: 30, enc: 20 },
		fly: { spd: 30, enc: 0 },
	},
	trait: [
		"**Winged Tiefling**",
		"##\u25C6 Wings##. I have bat-like wings sprouting from my shoulder blades that give me 30 ft Fly Speed when I'm not wearing Heavy Armor.",
	].join("\n"),
});

// Subclasses
AddSubClass("barbarian", "battlerager", {
	regExpSearch: /(battlerager|kuldjargh)/i,
	subname: "Path of the Battlerager",
	subnameShort: "Battlerager",
	fullname: "Battlerager",
	source: [["S", 121]],
	abilitySave: 6,
	features: {
		"subclassfeature3": {
			name: "Battlerager Armor",
			source: [["S", 121]],
			minlevel: 3,
			description: desc([
				"I gain proficiency with spiked armor both as an armor and as a weapon",
				"As a Bonus Action while raging, I can attack once with my armor spikes",
				"With my spiked armor I do 3 Piercing damage when I use my Attack action to grapple",
			]),
			action: [["bonus action", "Armor Spikes attack (in rage)"]],
			armorOptions: [{
				regExpSearch: /^(?!.*(dragon|draconic|beast))(?=.*spike(d|s))(?=.*armou?r).*$/i,
				name: "Spiked armor",
				source: [["S", 121]],
				type: "medium",
				ac: 14,
				stealthdis: true,
				weight: 45,
			}],
			weaponOptions: [{
				regExpSearch: /^(?=.*armou?r)(?=.*spike).*$/i,
				name: "Armor spikes",
				source: [["S", 121]],
				ability: 1,
				type: "armor spikes",
				damage: [1, 4, "piercing"],
				range: "Melee",
				description: "Does 3 Piercing damage when grappling during my Attack action",
				abilitytodamage: true,
				selectNow: true,
			}],
			weaponProfs: [false, false, ["armor spikes"]],
			eval: function () {
				AddString("Proficiency Armor Other Description", "Spiked Armor", ", ");
			},
			removeeval: function () {
				RemoveString("Proficiency Armor Other Description", "Spiked Armor");
			},
		},
		"subclassfeature6": {
			name: "Reckless Abandon",
			source: [["S", 121]],
			minlevel: 6,
			description: desc("If I use Reckless Attack during rage, I also gain temporary HP equal to my Con mod"),
		},
		"subclassfeature10": {
			name: "Battlerager Charge",
			source: [["S", 121]],
			minlevel: 10,
			description: desc("As a Bonus Action while raging, I can use the Dash action"),
			action: [["bonus action", " (in rage)"]],
		},
		"subclassfeature14": {
			name: "Spiked Retribution",
			source: [["S", 121]],
			minlevel: 14,
			description: desc([
				"When I'm hit in melee by an attacker within 5 ft, it takes 3 Piercing damage",
				"This only works while I'm wearing spiked armor, in rage, and I'm not Incapacitated",
			]),
		},
	},
});
AddSubClass("monk", "way of the long death", {
	regExpSearch: /^(?=.*\blong)(?=.*\b(death|dead))((?=.*(monk|monastic))|(((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior)))).*$/i,
	subname: "Way of the Long Death",
	subnameShort: "Long Death",
	source: [["S", 130]],
	features: {
		"subclassfeature3": {
			name: "Touch of Death",
			source: [["S", 130]],
			minlevel: 3,
			description: desc("If I reduce someone within 5 ft to 0 HP, I gain Wis mod + monk level temporary HP"),
		},
		"subclassfeature6": {
			name: "Hour of Reaping",
			source: [["S", 130]],
			minlevel: 6,
			description: desc([
				"As an action, all creatures within 30 feet of me must make a Wisdom saving throw",
				"On a failed save the creature is Frightened until the end of my next turn",
			]),
			action: [["action", ""]],
		},
		"subclassfeature11": {
			name: "Mastery of Death",
			source: [["S", 131]],
			minlevel: 11,
			additional: "1 ki point",
			description: desc("When I'm reduced to 0 HP, I can expend 1 ki point to have 1 HP instead"),
			"touch of the long death": {
				name: "Touch of the Long Death",
				extraname: "Way of the Long Death 17",
				source: [["S", 131]],
				additional: "1-10 ki points",
				description: desc([
					"As an action, a target within 5 ft takes 2d10 Necrotic damage per ki point I spent",
					"It can make a Constitution saving throw to half the damage",
				]),
				action: [["action", ""]],
			},
			autoSelectExtrachoices: [{
				extrachoice: "touch of the long death",
				minlevel: 17,
			}],
		},
	},
});
AddSubClass("monk", "way of the sun soul", {
	regExpSearch: /^(?=.*\bsun)(?=.*\b(soul|spirit))((?=.*(warrior|monk|monastic))|(((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior)))).*$/i,
	subname: "Way of the Sun Soul",
	subnameShort: "Sun Soul",
	source: [["S", 131], ["X", 35]],
	features: {
		"subclassfeature3": {
			name: "Radiant Sun Bolt",
			source: [["S", 131], ["X", 35]],
			minlevel: 3,
			additional: "1 ki point for 2 extra attacks",
			description: desc([
				"I gain a ranged spell attack that I can use as an attack in the Attack action",
				"If I do this and spend 1 ki point, I can make 2 of these attacks as a Bonus Action",
			]),
			action: [["bonus action", " (2\xD7 with Attack action)"]],
			weaponOptions: [{
				regExpSearch: /^(?=.*radiant)(?=.*(sun|light))(?=.*bolt).*$/i,
				name: "Radiant Sun Bolt",
				source: [["S", 131], ["X", 35]],
				ability: 2,
				type: "Spell",
				damage: [1, 4, "radiant"],
				range: "30 ft",
				description: "If used in an Attack action, spend 1 ki point to use it twice as a Bonus Action",
				monkweapon: true,
				abilitytodamage: true,
				selectNow: true,
			}],
			"searing arc strike": {
				name: "Searing Arc Strike",
				extraname: "Way of the Sun Soul 6",
				source: [["S", 131], ["X", 35]],
				description: desc([
					"After taking the Attack action, I can cast *Burning Hands* as a Bonus Action [PHB 220]",
					"For every additional ki point I spend, Burning hands is cast at 1 higher spell level",
					"The maximum total ki points I can spend for this (including the 2) is half my Monk level",
				]),
				additional: levels.map(function (n) {
					if (n < 3) return "";
					var xtrKi = Math.max(0,Math.floor(n / 2) - 2);
					return "2 ki points + max " + xtrKi + " ki point" + (xtrKi == 1 ? "" : "s");
				}),
				action: [["bonus action", " (after Attack action)"]],
				spellcastingBonus: [{
					name: "Searing Arc Strike",
					spells: ["burning hands"],
					selection: ["burning hands"],
					firstCol: 2,
				}],
				spellFirstColTitle: "Ki",
				spellChanges: {
					"burning hands": {
						time: "Bns",
						description: "3d6+1d6/extra Ki Fire dmg; save halves; unattended flammable objects ignite (ki max 1/2 monk lvl)",
						changes: "After I use the Attack action, I can cast *Burning Hands* as a Bonus Action by spending 2 ki points. I can even spend additional ki points to increase its spell level. The total amount of ki points I can spend on it is half my monk level.",
					},
				},
			},
			autoSelectExtrachoices: [{
				extrachoice: "searing arc strike",
				minlevel: 6,
			}],
		},
		"subclassfeature11": {
			name: "Searing Sunburst",
			source: [["S", 131], ["X", 35]],
			minlevel: 11,
			description: desc([
				"As an action, anyone in a 20-ft radius light on a point within 150 ft makes a Con save",
				"If failed and not behind opaque total cover, take 2d6 (+ 2d6/ki point) Radiant damage",
			]),
			action: [["action", ""]],
			additional: "0 ki points + max 3 ki points",
			weaponOptions: [{
				regExpSearch: /^(?=.*searing)(?=.*sunburst).*$/i,
				name: "Searing Sunburst",
				source: [["S", 131], ["X", 35]],
				ability: 5,
				type: "Spell",
				damage: [2, 6, "radiant"],
				range: "150 ft",
				description: "All in 20-ft radius; Con save - success no damage; +2d6 damage per ki point (max 3 ki)",
				abilitytodamage: false,
				dc: true,
				useSpellMod: "monk",
				selectNow: true,
			}],
		},
		"subclassfeature17": {
			name: "Sun Shield",
			source: [["S", 131], ["X", 35]],
			minlevel: 17,
			description: desc([
				"As a Reaction, when I'm hit by a melee attack, I can deal 5 + Wis mod Radiant damage",
				"I can only do this while my light aura is on; I can turn it on/off as a Bonus Action",
			]),
			action: [["bonus action", " (start/stop)"], ["reaction", " (hit in melee)"]],
			additional: "30-ft rad bright + 30-ft dim light",
		},
	},
});
AddSubClass("paladin", "oath of the crown", {
	regExpSearch: /^(?=.*(crown|king|country))(((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|warrior|warlord|trooper))))).*$/i,
	subname: "Oath of the Crown",
	subnameShort: "Crown",
	source: [["S", 133]],
	features: {
		"subclassfeature3": {
			name: "Champion Challenge",
			source: [["S", 133]],
			minlevel: 3,
			additional: "1 Channel Divinity",
			description: desc([
				"As a Bonus Action, I can have any chosen creatures within 30 ft of me make a Wis save",
				"If failed, a target is unable to willingly move more than 30 ft away from me",
				"The effect ends if I'm Incapacitated, die, or it is moved more than 30 ft away from me",
			]),
			action: [["bonus action", ""]], // changed to Bonus Action per errata (v1.0, 2017)
			spellcastingExtra: ["command", "compelled duel", "warding bond", "zone of truth", "aura of vitality", "spirit guardians", "banishment", "guardian of faith", "circle of power", "geas"],
		},
		"subclassfeature3.1": {
			name: "Turn the Tide",
			source: [["S", 133]],
			minlevel: 3,
			additional: "1 Channel Divinity",
			description: desc([
				"As a Bonus Action, any chosen creatures within 30 ft that can hear me regains HP",
				"Each regain 1d6 + my Charisma modifier HP, up to half of its total HP",
			]),
			action: [["bonus action", ""]],
		},
		"subclassfeature7": {
			name: "Divine Allegiance",
			source: [["S", 133]],
			minlevel: 7,
			description: desc([
				"When a creature within 5 feet of me takes damage, I can substitute my HP for it",
				"The creature takes no damage and I take all of it; this damage can't be prevented",
			]),
			action: [["reaction", ""]],
		},
		"subclassfeature15": {
			name: "Unyielding Spirit",
			source: [["S", 133]],
			minlevel: 15,
			description: desc("I have Advantage on saving throws against effects that paralyze or stun"),
			savetxt: { adv_vs: ["Paralyzed", "Stunned"] },
		},
		"subclassfeature20": {
			name: "Exalted Champion",
			source: [["S", 133]],
			minlevel: 20,
			description: desc([
				"As an action, I gain the following benefits for 1 hour or until I'm Incapacitated:",
				" \u2022 " + "Resistance to Bludgeoning, Piercing, and Slashing damage from nonmagical weapons",
				" \u2022 " + "My allies within 30 ft of me and I have Advantage on Wisdom and Death saves",
			]),
			recovery: "Long Rest",
			usages: 1,
			action: [["action", ""]],
		},
	},
});
AddSubClass("rogue", "mastermind", {
	regExpSearch: /^(?!.*(barbarian|bard|cleric|druid|fighter|monk|paladin|ranger|sorcerer|warlock|wizard))(?=.*(mastermind|strategist)).*$/i,
	subname: "Mastermind",
	fullname: "Mastermind",
	source: [["S", 135], ["X", 46]],
	features: {
		"subclassfeature3": {
			name: "Master of Intrigue",
			source: [["S", 135], ["X", 46]],
			minlevel: 3,
			description: desc([
				"I gain proficiency with disguise kits, forgery kits, one gaming set, and two languages",
				"I can mimic speech patterns and accents if I've heard them for at least 1 minute",
			]),
			languageProfs: [2],
			toolProfs: ["Disguise kit", "Forgery kit", ["Gaming set", 1]],
		},
		"subclassfeature3.1": {
			name: "Master of Tactics",
			source: [["S", 135], ["X", 46]],
			minlevel: 3,
			description: desc([
				"I can use the Help action as a Bonus Action",
				"This even works if the ally attacks a target within 30 ft of me that can see or hear me",
			]),
			action: [["bonus action", ""]],
		},
		"subclassfeature9": {
			name: "Insightful Manipulator",
			source: [["S", 135], ["X", 46]],
			minlevel: 9,
			description: desc([
				"By spending 1 minute observing/interacting outside of combat I can learn capabilities",
				"The DM tells me if the target is my equal, superior, or inferior in regard to two things:",
				" - Intelligence score    - Wisdom score    - Charisma score    - Class levels (if any)",
			]),
		},
		"subclassfeature13": {
			name: "Misdirection",
			source: [["S", 135], ["X", 46]],
			minlevel: 13,
			description: desc([
				"As a Reaction, I can redirect an attack meant for me to a creature within 5 ft of me",
				"This only works if the creature is providing me with cover against the attack",
			]),
			action: [["reaction", ""]],
		},
		"subclassfeature17": {
			name: "Soul of Deceit",
			source: [["S", 135], ["X", 46]],
			minlevel: 17,
			description: desc([
				"My thoughts can't be read by telepathy or similar means; I can project false thoughts",
				"For that, I must pass a Cha (Deception) vs Wis (Insight) check to fool the mind reader",
				"Magic always determines I'm truthful; I can't be magically compelled to tell the truth",
			]),
		},
	},
});
AddSubClass("rogue", "swashbuckler", {
	regExpSearch: /^(?!.*(barbarian|bard|cleric|druid|fighter|monk|paladin|ranger|sorcerer|warlock|wizard))(?=.*swashbuckl).*$/i,
	subname: "Swashbuckler",
	fullname: "Swashbuckler",
	source: [["S", 135], ["X", 47]],
	features: {
		"subclassfeature3": {
			name: "Fancy Footwork",
			source: [["S", 135], ["X", 47]],
			minlevel: 3,
			description: desc([
				"Enemies I make a melee attack against in my turn can't use opportunity attacks on me",
				"This lasts until the end of my current turn",
			]),
		},
		"subclassfeature3.1": {
			name: "Rakish Audacity",
			source: [["S", 136], ["X", 47]],
			minlevel: 3,
			description: desc([
				"I don't need Advantage to sneak attack if my target is the only one within 5 ft of me",
				"I still can't sneak attack if I have Disadv; I add my Charisma modifier to initiative rolls",
			]),
			addMod: { type: "skill", field: "Init", mod: "max(Cha|0)", text: "I can add my Charisma modifier to initiative rolls." },
		},
		"subclassfeature9": {
			name: "Panache",
			source: [["S", 136], ["X", 47]],
			minlevel: 9,
			description: desc([
				"As an action, I can beguile a creature that hears and understands me, for 1 minute",
				"It must succeed a Wis (Insight) check opposed by my Cha (Persuasion) or be affected as:",
				"\u2022 A hostile target gains Disadv on attacks and can't do opportunity attacks vs not-me",
				"  This effect ends if an ally attacks or casts a spell vs it, or if it and I are 60 ft apart",
				"\u2022 Targets that are not hostile are Charmed and regard me as a friendly acquaintance",
				"  This effect ends if me or an ally do anything harmful to it",
			]),
			action: [["action", ""]],
		},
		"subclassfeature13": {
			name: "Elegant Maneuver",
			source: [["S", 136], ["X", 47]],
			minlevel: 13,
			description: desc("As a Bonus Action, I can gain Adv on my next Dex (Acrobatics) or Str (Athletics) check"),
			action: [["bonus action", ""]],
		},
		"subclassfeature17": {
			name: "Master Duelist",
			source: [["S", 136], ["X", 47]],
			minlevel: 17,
			description: desc("Once per Short Rest, when I miss with an attack roll, I can roll again with Advantage"),
			recovery: "Short Rest",
			usages: 1,
		},
	},
});
AddSubClass("sorcerer", "storm sorcery", {
	regExpSearch: /^(?=.*(sorcerer|witch))((?=.*(storm|tempest|hurricane))|((?=.*air)(?=.*element))).*$/i,
	subname: "Storm Sorcery",
	fullname: "Storm Sorcerer",
	source: [["S", 137], ["X", 51]],
	features: {
		"subclassfeature3.0": {
			name: "Wind Speaker",
			source: [["S", 137], ["X", 52]],
			minlevel: 3,
			description: desc("I can speak, read, and write Primordial (and its dialects Aquan, Auran, Ignan, Terran)"),
			languageProfs: ["Primordial"],
		},
		"subclassfeature3.1": {
			name: "Tempestuous Magic",
			source: [["S", 137], ["X", 52]],
			minlevel: 3,
			description: desc([
				"As a Bonus Action, before or after casting a 1st-level or higher spell, I can fly 10 ft",
				"This movement doesn't provoke opportunity attacks as whirling gust of air surround me",
			]),
			action: [["bonus action", " (with casting)"]],
		},
		"subclassfeature6": {
			name: "Heart of the Storm",
			source: [["S", 137], ["X", 52]],
			minlevel: 6,
			description: desc([
				"I have resistance to Lightning and Thunder damage",
				"When I start casting a 1st-level or higher spell that deals Lightning or Thunder damage,",
				"I deal Lightning or Thunder damage to creatures of my choice that I can see within 10 ft",
			]),
			additional: levels.map(function (n) { return n < 6 ? "" : Math.floor(n / 2) + " damage"; }),
			dmgres: ["Lightning", "Thunder"],
		},
		"subclassfeature6.1": {
			name: "Storm Guide",
			source: [["S", 137], ["X", 52]],
			minlevel: 6,
			description: desc([
				"As an action, I can stop rain around me in 20-ft radius; Bonus Action for it to resume",
				"As a Bonus Action, I can choose the direction of wind around me in a 100-ft radius",
				"This lasts until the end of my next turn and doesn't alter the wind's speed",
			]),
			action: [["bonus action", ""]],
		},
		"subclassfeature14": {
			name: "Storm's Fury",
			source: [["S", 137], ["X", 52]],
			minlevel: 14,
			description: desc([
				"As a Reaction when hit by a melee attack, I can deal Lightning damage to the attacker",
				"The attacker must also make a Strength save or be pushed up to 20 ft away from me",
			]),
			action: [["reaction", ""]],
			additional: levels.map(function (n) { return n < 14 ? "" : n + " Lightning damage"; }),
		},
		"subclassfeature18": {
			name: "Wind Soul",
			source: [["S", 137], ["X", 52]],
			minlevel: 18,
			description: desc([
				"I have immunity to Lightning and Thunder damage and gain magical 60 ft Fly Speed",
				"As an action, I reduce my Fly Speed to 30 ft and give allies 30 ft Fly Speed for 1 hour",
				"I can do this once per Short Rest for up to 3 + my Charisma modifier allies within 30 ft",
			]),
			action: [["action", ""]],
			savetxt: { immune: ["Lightning", "Thunder"] },
			speed: { fly: { spd: "fixed 60", enc: "fixed 60" } },
			usages: 1,
			recovery: "Short Rest",
		},
	},
});
AddSubClass("warlock", "the undying", {
	regExpSearch: /^(?!.*light)(?=.*warlock)(?=.*(immortal|undying|neverending|unending)).*$/i,
	subname: "the Undying",
	source: [["S", 139]],
	features: {
		"subclassfeature3.0": {
			name: "Among the Dead",
			source: [["S", 139]],
			minlevel: 3,
			spellcastingExtra: ["false life", "ray of sickness", "blindness/deafness", "silence", "feign death", "speak with dead", "aura of life", "death ward", "contagion", "legend lore"],
			description: desc([
				"I learn the *Spare the Dying* cantrip and gain Advantage on saving throws vs diseases",
				"If an Undead targets me directly with an attack or spell, it must make a Wisdom save",
				"On a fail, it must choose a new target or forfeit its attack or harmful spell",
				"On a success or if I attack or cast a harmful spell on it, it is immune for 24 hours",
			]),
			savetxt: { adv_vs: ["disease"] },
			spellcastingBonus: [{
				name: "Among the Dead",
				spells: ["spare the dying"],
				selection: ["spare the dying"],
			}],
		},
		"subclassfeature6": {
			name: "Defy Death",
			source: [["S", 140]],
			minlevel: 6,
			description: desc([
				"I regain 1d8 + my Constitution modifier in HP when I succeed on a Death saving throw",
				"I also regain this amount whenever I use *Spare the Dying* to stabilize a creature",
			]),
			recovery: "Long Rest",
			usages: 1,
		},
		"subclassfeature10": {
			name: "Undying Nature",
			source: [["S", 140]],
			minlevel: 10,
			description: desc([
				"I can hold my breath indefinitely; I don't require food, water, or sleep (I still need rest)",
				"I age more slowly, only 1 year for every 10 years that pass; I can't be magically aged",
			]),
		},
		"subclassfeature14": {
			name: "Indestructible Life",
			source: [["S", 140]],
			minlevel: 14,
			description: desc("As a Bonus Action, I can regain HP and reattach severed body parts"),
			action: [["bonus action", ""]],
			recovery: "Short Rest",
			usages: 1,
			additional: levels.map(function (n) { return n < 14 ? "" : "1d8 + " + n + " HP"; }),
		},
	},
});

// Backgrounds
BackgroundList["far traveler"] = {
	regExpSearch: /^(?=.*far)(?=.*traveler).*$/i,
	name: "Far Traveler",
	source: [["S", 148]],
	skills: ["Insight", "Perception"],
	gold: 5,
	equipleft: [
		["Gaming set or musical instrument", "", ""],
		["Poorly wrought maps", "", ""],
	],
	equipright: [
		["Traveler's clothes", "", 4],
		["Piece of jewelry worth 10 gp", "", ""],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "All Eyes on You",
	trait: [
		"I have different assumptions from those around me concerning personal space, blithely invading others' space in innocence, or reacting to ignorant invasion of my own.",
		"I have my own ideas about what is and is not food, and I find the eating habits of those around me fascinating, confusing, or revolting.",
		"I have a strong code of honor or sense of propriety that others don't comprehend.",
		"I express affection or contempt in ways that are unfamiliar to others.",
		"I honor my deities through practices that are foreign to this land.",
		"I begin or end my day with small traditional rituals that are unfamiliar to those around me.",
	],
	ideal: [
		["Open",
			"Open: I have much to learn from the kindly folk I meet along my way. (Good)",
		],
		["Reserved",
			"Reserved: As someone new to these strange lands, I am cautious and respectful in my dealings. (Lawful)",
		],
		["Adventure",
			"Adventure: I'm far from home, and everything is strange and wonderful! (Chaotic)",
		],
		["Cunning",
			"Cunning: Though I may not know their ways, neither do they know mine, which can be to my advantage. (Evil)",
		],
		["Inquisitive",
			"Inquisitive: Everything is new, but I have a thirst to learn. (Neutral)",
		],
		["Suspicious",
			"Suspicious: I must be careful, for I have no way of telling friend from foe here. (Any)",
		],
	],
	bond: [
		"So long as I have this token from my homeland, I can face any adversity in this strange land.",
		"The gods of my people are a comfort to me so far from home.",
		"I hold no greater cause than my service to my people.",
		"My freedom is my most precious possession. I'll never let anyone take it from me again.",
		"I'm fascinated by the beauty and wonder of this new land.",
		"Though I had no choice, I lament having to leave my loved one(s) behind. I hope to see them again one day.",
	],
	flaw: [
		"I am secretly (or not so secretly) convinced of the superiority of my own culture over that of this foreign land.",
		"I pretend not to understand the local language in order to avoid interactions I would rather not have.",
		"I have a weakness for the new intoxicants and other pleasures of this land.",
		"I don't take kindly to some of the actions and motivations of the people of this land, because these folk are different from me.",
		"I consider the adherents of other gods to be deluded innocents at best, or ignorant fools at worst.",
		"I have a weakness for the exotic beauty of the people of these lands.",
	],
	extra: [
		"Select Why You Are Here",
		"Emissary",
		"Exile",
		"Fugitive",
		"Pilgrim",
		"Sightseer",
		"Wanderer",
	],
	toolProfs: [["Gaming set or musical instrument", 1]],
	languageProfs: [1],
	lifestyle: "modest",
};

// Background variants
AddBackgroundVariant("soldier", "city watch", {
	regExpSearch: /^(?=.*city)(?=.*(watch|guard)).*$/i,
	name: "City Watch",
	source: [["S", 145]],
	skills: ["Athletics", "Insight"],
	equipright: [
		["Uniform of my unit", "", 3],
		["Insignia of rank", "", ""],
		["Horn", "", 2],
		["Manacles", "", 6],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Watcher's Eye",
	extra: "",
	toolProfs: "",
	languageProfs: [2],
	lifestyle: "modest",
});
AddBackgroundVariant("guild artisan", "clan crafter", {
	regExpSearch: /^(?=.*clan)(?=.*(crafter|smith|builder|miner)).*$/i,
	name: "Clan Crafter",
	source: [["S", 145]],
	skills: ["History", "Insight"],
	equipleft: [
		["Set of artisan's tools", "", ""],
		["Maker's mark chisel", "", 0.5],
	],
	equipright: [
		["Traveler's clothes", "", 4],
		["Belt pouch (with coins and 10 gp gem)", "", 1],
	],
	feature: "Respect of the Stout Folk",
	extra: "",
	languageProfs: ["Dwarvish"],
	lifestyle: "comfortable",
});
AddBackgroundVariant("sage", "cloistered scholar", {
	regExpSearch: /^(?=.*cloistered)(?=.*scholar).*$/i,
	name: "Cloistered Scholar",
	source: [["S", 146]],
	skills: ["History"],
	skillstxt: "History and choose one from Arcana, Nature, and Religion",
	gold: 10,
	equipleft: [
		["Ink, 1 ounce bottle of", 1, ""],
		["Quill", "", ""],
		["Parchment, sheets of", 1, ""],
		["Small penknife", "", 0.5],
		["Borrowed book", "", 5],
	],
	equipright: [
		["Scholar's robes", "", 3],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Library Access",
	extra: ["Name your Library"],
	languageProfs: [2],
	lifestyle: "modest",
});
AddBackgroundVariant("guild artisan", "courtier", {
	regExpSearch: /courtier/i,
	name: "Courtier",
	source: [["S", 146]],
	skills: ["Insight", "Persuasion"],
	gold: 5,
	equipleft: "",
	equipright: [
		["Fine clothes", "", 3],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Court Functionary",
	extra: "",
	toolProfs: "",
	languageProfs: [2],
	lifestyle: "comfortable",
});
AddBackgroundVariant("acolyte", "faction agent", {
	regExpSearch: /^(?=.*agent)(?=.*(faction|harper|order of the gauntlet|emerald enclave|lord.?s alliance|zhentarim)).*$/i,
	name: "Faction Agent",
	source: [["S", 147]],
	skills: ["Insight"],
	skillstxt: "Insight and choose one Intelligence, Wisdom, or Charisma skill",
	gold: 15,
	equipleft: [
		["Copy of seminal faction's text", "", ""],
	],
	equipright: [
		["Common clothes", "", 3],
		["Badge or emblem of faction", "", ""],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Safe Haven",
	extra: [
		"Select a Faction",
		"The Harpers",
		"The Order of the Gauntlet",
		"The Emerald Enclave",
		"The Lord's Alliance",
		"The Zhentarim",
	],
	languageProfs: [2],
	lifestyle: "modest",
});
AddBackgroundVariant("folk hero", "inheritor", {
	regExpSearch: /inheritor/i,
	name: "Inheritor",
	source: [["S", 150]],
	skills: ["Survival"],
	skillstxt: "Survival and choose one from Arcana, History, and Religion",
	gold: 15,
	equipleft: [
		["Gaming set or musical instrument", "", ""],
	],
	equipright: [
		["Traveler's clothes", "", 4],
		["The inheritance", "", ""],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Inheritance",
	extra: [
		"Select an Inheritance",
		"Document such as a map, letter, or journal",
		"A trinket",
		"Article of clothing",
		"Piece of jewelry",
		"Arcane book or formulary",
		"Written story, song, poem, or secret",
		"Tattoo or other body marking",
	],
	toolProfs: [["Gaming set or musical instrument", 1]],
	languageProfs: [1],
	lifestyle: "wealthy",
});
AddBackgroundVariant("soldier", "investigator", {
	regExpSearch: /investigator/i,
	name: "Investigator",
	source: [["S", 145]],
	skills: ["Insight", "Investigation"],
	equipright: [
		["Uniform", "", 3],
		["Insignia of rank", "", ""],
		["Horn", "", 2],
		["Manacles", "", 6],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Watcher's Eye",
	extra: "",
	toolProfs: "",
	languageProfs: [2],
});
AddBackgroundVariant("soldier", "knight of the order", {
	regExpSearch: /^(?=.*knight)(?=.*order).*$/i,
	name: "Knight of the Order",
	source: [["S", 151]],
	skills: ["Persuasion"],
	skillstxt: "Persuasion and choose one from Arcana, History, Nature, and Religion",
	equipright: [
		["Traveler's clothes", "", 4],
		["Signet, banner, or seal of rank", "", ""],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Knightly Regard",
	extra: ["Name your Knightly Order"],
	toolProfs: [["Gaming set or musical instrument", 1]],
	languageProfs: [1],
	lifestyle: "comfortable",
});
AddBackgroundVariant("soldier", "mercenary veteran", {
	regExpSearch: /^(?=.*mercenary)(?=.*(veteran|soldier)).*$/i,
	name: "Mercenary Veteran",
	source: [["S", 152]],
	skills: ["Athletics", "Persuasion"],
	equipright: [
		["Uniform of my company", "", 4],
		["Insignia of rank", "", ""],
		["Gaming set", "", ""],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Mercenary Life",
	extra: ["Name your Mercenary Company"],
	lifestyle: "modest",
});
AddBackgroundVariant("criminal", "urban bounty hunter", {
	regExpSearch: /^(?=.*urban)(?=.*bounty)(?=.*hunter).*$/i,
	name: "Urban Bounty Hunter",
	source: [["S", 153]],
	skills: "",
	skillstxt: "Choose two from Deception, Insight, Persuasion, and Stealth",
	gold: 20,
	equipright: [
		["Appropriate Clothes", "", 3],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Ear to the Ground",
	extra: "",
	toolProfs: [["Gaming set, instrument, or thieves' tools", 2]],
	lifestyle: "poor",
});
AddBackgroundVariant("outlander", "uthgardt tribe member", {
	regExpSearch: /^(?=.*(uthgardt|barbarian|nomad|clan))(?=.*tribe)(?=.*member).*$/i,
	name: "Uthgardt Tribe Member",
	source: [["S", 153]],
	equipright: [
		["Traveler's clothes", "", 4],
		["Hunting trap", "", 25],
		["Totemic token or tattoos of tribal totem", "", ""],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Uthgardt Heritage",
	extra: "",
	toolProfs: [["Artisan's tools or musical instrument", 1]],
	languageProfs: [1],
	lifestyle: "poor",
});
AddBackgroundVariant("noble", "waterdhavian noble", {
	regExpSearch: /^(?=.*(waterdhavian|waterdeep))(?=.*noble).*$/i,
	name: "Waterdhavian Noble",
	source: [["S", 154]],
	gold: 20,
	equipleft: [
		["Scroll of pedigree", "", ""],
		["Skin of fine zzar or wine", "", 5], // weight based on waterskin
	],
	equipright: [
		["Fine clothes", "", 6],
		["Signet ring or brooch", "", ""],
		["Purse (with coins)", "", 1],
	],
	feature: "Kept in Style",
	toolProfs: [["Gaming set or musical instrument", 1]],
	languageProfs: [1],
	lifestyle: "wealthy",
});

// Background features
BackgroundFeatureList["court functionary"] = {
	description: "My knowledge of how bureaucracies function lets me gain access to the records and inner workings of any noble court or government I encounter. I know or can easily acquire the knowledge who the movers and shakers are, whom to go to for the favors I seek, and what the current intrigues of interest in the group are.",
	source: [["S", 147]],
};
BackgroundFeatureList["all eyes on you"] = {
	description: "My accent, mannerisms, figures of speech all mark me as foreign. Curious glances are directed my way wherever I go. A nuisance, but I also gain the friendly interest of the curious. I can parley this attention into access I might not otherwise have, for me and my companions. Nobles, scholars, merchants, and guilds, might be among the interested.",
	source: [["S", 149]],
};
BackgroundFeatureList["ear to the ground"] = {
	description: "I am in frequent contact with people in my chosen segment of society. These people might be associated with the criminal underworld, the rough-and-tumble folk of the streets, or members of high society. This connection comes in the form of a contact in any city I visit, a person who provides information about the people and places of the local area.",
	source: [["S", 153]],
};
BackgroundFeatureList["inheritance"] = {
	description: "The item I inherited has a special significance, history, power, and/or important value. When I begin my adventuring career, I can decide whether to tell my companions about it right away. Rather than attracting attention to myself, I could decide to keep it a secret until I learn more about what it means to me and what it can do for me.",
	source: [["S", 150]],
};
BackgroundFeatureList["kept in style"] = {
	description: "While I am in Waterdeep or elsewhere in the North my house sees to my everyday needs. My name and signet are sufficient to cover most of my expenses; the inns, taverns, and festhalls I frequent are glad to record my debt and send an accounting to my family's estate. This advantage enables me to take 2 gp of my daily lifestyle costs down to 0 gp.",
	source: [["S", 154]],
};
BackgroundFeatureList["knightly regard"] = {
	description: "I receive shelter and succor from members of my knightly order and its sympathizers. Religious knightly orders get aid from temples and communities of my deity. Civic order knights get help from the community they serve. Philosophical order knights can find help from those they have aided in pursuit of their ideals, and those who share those ideals.",
	source: [["S", 151]],
};
BackgroundFeatureList["library access"] = {
	description: "I have free access to most of the library I work at, though it might have repositories of lore that are too valuable, magical, or secret to permit anyone immediate access. I have a working knowledge of my cloister's personnel and bureaucracy, and I know how to navigate those connections. I am likely to gain preferential treatment at other libraries.",
	source: [["S", 146]],
};
BackgroundFeatureList["mercenary life"] = {
	description: "I know the mercenary life well. I am able to identify mercenary company emblems, and I know a little about any such company, including the leaders, reputation, and who hired them recently. I can find the locales where mercenaries abide anywhere, as long as I speak the language. My mercenary work between adventures affords me a comfortable lifestyle.",
	source: [["S", 152]],
};
BackgroundFeatureList["respect of the stout folk"] = {
	description: "No one esteems clan crafters quite so highly as dwarves do. I always have free room and board in any place where shield dwarves or gold dwarves dwell, and the individuals in such a settlement might vie among themselves to determine who can offer me (and possibly my compatriots) the finest accommodations and assistance.",
	source: [["S", 145]],
};
BackgroundFeatureList["safe haven"] = {
	description: "As a faction agent, I have access to a secret network of support and operatives who can provide assistance on my adventures. I know secret signs and passwords to identify such operatives, who can provide me with access to a hidden safe house, free room and board, or assistance in finding information. These agents never risk their lives or identity for me.",
	source: [["S", 147]],
};
BackgroundFeatureList["uthgardt heritage"] = {
	description: "I have an excellent knowledge of my tribe's territory, and surrounding terrain and natural resources. I am familiar enough with any wilderness area that I can find twice as much food and water as one normally would. I can call upon the hospitality of my people, and those allied, often including members of druid circles, nomadic elves, and priesthoods.",
	source: [["S", 154]],
};
BackgroundFeatureList["watcher's eye"] = {
	description: "My experience in enforcing the law, and dealing with lawbreakers, gives me a feel for local laws and criminals. I can easily find the local outpost of the watch, guards or a similar organization, and just as easily pick out the dens of criminal activity in a community. I am far more likely to be welcome in the former locations rather than the latter, however.",
	source: [["S", 145]],
};

// Spells
SpellsList["booming blade"] = {
	name: "Booming Blade",
	classes: ["artificer", "sorcerer", "warlock", "wizard"],
	source: [["T", 106], ["S", 142]],
	level: 0,
	school: "Evoc",
	time: "Act",
	range: "S:5-ft rad",
	components: "S,M\u0192",
	compMaterial: "A melee weapon worth at least 1 sp",
	duration: "1 round",
	description: "Melee wea atk with cast; hit: 0d8 Thunder dmg, if it moves next round +1d8; +1d8 at CL5, 11, \u0026 17",
	descriptionShorter: "melee wea atk with cast; hit: 0d8 Thunder dmg, if move next rnd +1d8; +1d8 CL 5/11/17 ",
	descriptionCantripDie: "Melee wea atk with cast; if hit: `CD-1`d8 Thunder dmg and if moves next round +`CD`d8 Thunder dmg",
	descriptionFull: [
		"You brandish the weapon used in the spell's casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack's normal effects and then becomes sheathed in booming energy until the start of your next turn. If the target willingly moves 5 feet or more before then, the target takes 1d8 thunder damage, and the spell ends.",
		"This spell's damage increases when you reach certain levels. At 5th level, the melee attack deals an extra 1d8 thunder damage to the target on a hit, and the damage the target takes for moving increases to 2d8. Both damage rolls increase by 1d8 at 11th level (2d8 and 3d8) and again at 17th level (3d8 and 4d8).",
	],
	dynamicDamageBonus: {
		extraDmgGroupsSameType: /(next r(?:ou)?nd )((?:\+?\d+d?\d*)+)/i,
	},
};
SpellsList["green-flame blade"] = {
	name: "Green-Flame Blade",
	classes: ["artificer", "sorcerer", "warlock", "wizard"],
	source: [["T", 107], ["S", 143]],
	level: 0,
	school: "Evoc",
	time: "Act",
	range: "S:5-ft rad",
	components: "S,M\u0192",
	compMaterial: "A melee weapon worth at least 1 sp",
	duration: "Instantaneous",
	description: "Melee wea atk at cast; hit: 0d8 Fire dmg, 1 crea in 5 ft 0d8+spell mod Fire dmg; +1d8 CL5/11/17",
	descriptionShorter: "Melee wea atk; hit: 0d8 Fire dmg, 1 crea in 5 ft 0d8+spell mod Fire dmg; +1d8 CL5/11/17",
	descriptionCantripDie: "Melee wea atk with cast; if hit: `CD-1`d8 Fire dmg, 1 crea in 5 ft `CD-1`d8+spellcasting ability modifier Fire dmg",
	descriptionFull: [
		"You brandish the weapon used in the spell's casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack's normal effects, and you can cause green fire to leap from the target to a different creature of your choice that you can see within 5 feet of it. The second creature takes fire damage equal to your spellcasting ability modifier.",
		"This spell's damage increases when you reach certain levels. At 5th level, the melee attack deals an extra 1d8 fire damage to the target on a hit, and the fire damage to the second creature increases to 1d8 + your spellcasting ability modifier. Both damage rolls increase by 1d8 at 11th level (2d8 and 2d8) and 17th level (3d8 and 3d8).",
	],
};
SpellsList["lightning lure"] = {
	name: "Lightning Lure",
	classes: ["artificer", "sorcerer", "warlock", "wizard"],
	source: [["T", 107], ["S", 143]],
	level: 0,
	school: "Evoc",
	time: "Act",
	range: "S:15-ft rad",
	components: "V",
	duration: "Instantaneous",
	save: "Str",
	description: "1 crea in 15 ft save or pulled 10 ft to me; if it ends in 5 ft, 1d8 Lightning dmg; +1d8 at CL 5/11/17",
	descriptionShorter: "1 crea in 15 ft save or pulled 10 ft to me; if end in 5 ft, 1d8 Lightn. dmg; +1d8 at CL 5/11/17",
	descriptionCantripDie: "1 crea I see save or pulled 10 ft to me; if it ends in 5 ft, `CD`d8 Lightning dmg",
	descriptionFull: [
		"You create a lash of lightning energy that strikes at one creature of your choice that you can see within 15 feet of you. The target must succeed on a Strength saving throw or be pulled up to 10 feet in a straight line toward you and then take 1d8 lightning damage if it is within 5 feet of you.",
		"This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
	],
};
SpellsList["sword burst"] = {
	name: "Sword Burst",
	classes: ["artificer", "sorcerer", "warlock", "wizard"],
	source: [["T", 115], ["S", 143]],
	level: 0,
	school: "Conj",
	time: "Act",
	range: "S:5-ft rad",
	components: "V",
	duration: "Instantaneous",
	save: "Dex",
	description: "All crea in range save or 1d6 Force damage; +1d6 at CL 5, 11, and 17",
	descriptionCantripDie: "All crea in range save or `CD`d6 Force damage",
	descriptionFull: [
		"You create a momentary circle of spectral blades that sweep around you. All other creatures within 5 feet of you must succeed on a Dexterity saving throw or take 1d6 force damage.",
		"This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
	],
};

WeaponsList["booming blade"] = {
	regExpSearch: /^(?=.*booming)(?=.*blade).*$/i,
	name: "Booming Blade",
	source: [["T", 106], ["S", 142]],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage: ["Bd8/Cd8", "", "thunder"],
	range: "With melee wea",
	description: "First damage added to the attack; second to the target if it moves next round",
	abilitytodamage: false,
};
WeaponsList["green-flame blade"] = {
	regExpSearch: /^(?=.*green)(?=.*flame)(?=.*blade).*$/i,
	name: "Green-Flame Blade",
	source: [["T", 107], ["S", 143]],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage: ["Bd8/Bd8", "", "fire"],
	range: "With melee wea",
	description: "First damage added to the attack; second to a target within 5 ft",
	abilitytodamage: true,
};
WeaponsList["lightning lure"] = {
	regExpSearch: /^(?=.*lightning)(?=.*lure).*$/i,
	name: "Lightning Lure",
	source: [["T", 107], ["S", 143]],
	list: "spell",
	ability: 5,
	type: "Cantrip",
	damage: ["C", 8, "lightning"],
	range: "15 ft",
	description: "Str save; success - nothing; fail - pulled 10 ft closer to me, only take damage if end within 5 ft of me",
	abilitytodamage: false,
	dc: true,
};
WeaponsList["sword burst"] = {
	regExpSearch: /^(?=.*sword)(?=.*burst).*$/i,
	name: "Sword Burst",
	source: [["T", 115], ["S", 143]],
	list: "spell",
	ability: 6,
	type: "Cantrip",
	damage: ["C", 6, "force"],
	range: "5-ft radius",
	description: "Dex save, success - no damage; all creatures in range",
	abilitytodamage: false,
	dc: true,
};

// legacy_20201117_TCoE.js
// This file adds options from Tasha's Cauldron of Everything to MPMB's Character Record Sheet that have not been replaced with new options published specifically for the 2024 (5.5e) rules

// Define the source
SourceList["T"] = {
	name: "Tasha's Cauldron of Everything (incomplete)",
	abbreviation: "TCoE",
	abbreviationSpellsheet: "T",
	group: "Legacy Sources",
	url: "https://marketplace.dndbeyond.com/category/tashas-cauldron-of-everything?pid=SRC-00067",
	date: "2020/11/17",
	defaultExcluded: true,
};

AddSubClass("bard", "college of eloquence", {
	regExpSearch: /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*eloquence).*$/i,
	subname: "College of Eloquence",
	subnameShort: "Eloquence",
	source: [["T", 29], ["MOT", 28]],
	features: {
		"subclassfeature3": {
			name: "Silver Tongue",
			source: [["T", 30], ["MOT", 28]],
			minlevel: 3,
			description: desc("When I make a Persuasion or Deception check, I can treat a roll of 9 or lower as a 10."),
		},
		"subclassfeature3.1": {
			name: "Unsettling Words",
			source: [["T", 30], ["MOT", 28]],
			minlevel: 3,
			description: desc("As a Bonus Action, I can expend and roll a Bardic Inspiration Die to have a creature I can see within 60 ft subtract the result from the next save it makes before my next turn starts."),
			action: [["bonus action", ""]],
		},
		"subclassfeature6": {
			name: "Unfailing Inspiration",
			source: [["T", 30], ["MOT", 28]],
			minlevel: 6,
			description: desc("When a creature adds my Bardic Inspiration Die to a roll but fails, they can keep the die."),
		},
		"subclassfeature6.1": {
			name: "Universal Speech",
			source: [["T", 30], ["MOT", 28]],
			minlevel: 6,
			description: desc([
				"As an Action, I can choose a number of creatures equal to my Charisma modifier (min 1). They can magically understand me, regardless of the language I speak, for 1 hour.",
				"I can do this once per Long Rest, or by expending a 1st-level or higher spell slot (SS 1+).",
			]),
			recovery: "Long Rest",
			usages: 1,
			altResource: "SS 1+",
			action: [["action", ""]],
		},
		"subclassfeature14": {
			name: "Infectious Inspiration",
			source: [["T", 30], ["MOT", 28]],
			minlevel: 14,
			description: desc("As a Reaction when a creature uses my Bardic Inspiration Die and succeeds, I can give another creature within 60 ft that can hear me a " + (typePF ? "Bardic Inspiration Die" : "BID") + " without expending any."),
			action: [["reaction", ""]],
			usages: "Charisma modifier per ",
			usagescalc: "event.value = Math.max(1, What('Cha Mod'));",
			recovery: "Long Rest",
		},
	},
});
