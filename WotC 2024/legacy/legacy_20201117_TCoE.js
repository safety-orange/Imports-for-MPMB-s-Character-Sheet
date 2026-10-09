var iFileName = "legacy_20201117_TCoE.js";
RequiredSheetVersion("24.1.3");
// This file adds options from Tasha's Cauldron of Everything to MPMB's Character Record Sheet that have not been replaced with new options published specifically for the 2024 (5.5e) rules

// Define the source
SourceList["T"] = {
	name: "Tasha's Cauldron of Everything",
	abbreviation: "TCoE",
	abbreviationSpellsheet: "T",
	group: "Legacy Sources",
	url: "https://marketplace.dndbeyond.com/category/tashas-cauldron-of-everything?pid=SRC-00067",
	date: "2020/11/17",
	defaultExcluded: true,
};

// Add Custom Lineage
RaceList["custom lineage"] = {
	regExpSearch: /^(?=.*custom)(?=.*lineage).*$/i,
	name: "Custom Lineage",
	source: [["T", 8]],
	plural: "Custom lineages",
	size: [3, 4],
	speed: {
		walk: { spd: 30, enc: 20 },
	},
	languageProfs: ["Common", 1],
	featsAdd: [{ type: /^(?!.*(blessing|boon|charm|gift|fighting style)).*$/i }],
};
AddRacialVariant("custom lineage", "darkvision", {
	regExpSearch: /darkvision/i,
	source: [["T", 8]],
	vision: [["Darkvision", 60]],
	trait: [
		"**Custom Lineage**",
		"##\u25C6 Size##. I am Small or Medium (my choice).",
		"##\u25C6 Feat##. I gain one feat of my choice for which I qualify.",
		"##\u25C6 Variable Trait##. I have Darkvision with a range of 60 ft.",
	],
});
AddRacialVariant("custom lineage", "skill proficiency", {
	regExpSearch: /skill proficiency/i,
	source: [["T", 8]],
	skillstxt: "Choose any one skill",
	trait: [
		"**Custom Lineage**",
		"##\u25C6 Size##. I am Small or Medium (my choice).",
		"##\u25C6 Feat##. I gain one feat of my choice for which I qualify.",
		"##\u25C6 Variable Trait##. I have proficiency with a skill of my choice.",
	],
});

// Barbarian Subclasses
AddSubClass("barbarian", "path of the beast", {
	regExpSearch: /^(?=.*\bbeast\b)(?=.*(warrior|marauder|barbarian|viking|(norse|tribes?|clans?)(wo)?m(a|e)n)).*$/i,
	subname: "Path of the Beast",
	subnameShort: "Beast",
	source: [["T", 24]],
	abilitySave: 3,
	features: {
		"subclassfeature3": {
			name: "Form of the Beast",
			source: [["T", 24]],
			minlevel: 3,
			description: desc([
				"When I enter Rage, I can transform to gain a bite, tail, or claws attack for that Rage.",
				"**Bite**. Once on each of my turns when I attack with the bite attack, I can regain a number of HP equal to my Proficiency Bonus, but only if I have less than half my Hit Points remaining.",
				"**Claws**. Attack with claw for 1d6 Slashing if empty. Extra attack with it in Attack action.",
				"**Tail**. As a Reaction when I'm hit by a creature I can see within 30 ft, I can use the tail to add 1d8 to my AC for that attack, potentially causing the attack to miss.",
			]),
			weaponOptions: [{
				regExpSearch: /^(?=.*(bestial|beast))(?=.*bite).*$/i,
				name: "Bestial Bite",
				source: [["T", 24]],
				ability: 1,
				type: "Natural",
				damage: [1, 8, "piercing"],
				range: "Melee",
				description: "Only in Rage; On a hit once on my turn, regain Prof Bonus in HP (if below 1/2 HP)",
				abilitytodamage: true,
				bestialNaturalWeapon: true,
				selectNow: true,
			}, {
				regExpSearch: /^(?=.*(bestial|beast))(?=.*claws?).*$/i,
				name: "Bestial Claws",
				source: [["T", 24]],
				ability: 1,
				type: "Natural",
				damage: [1, 6, "slashing"],
				range: "Melee",
				description: "Only in Rage; Extra attack if used as part of Attack action",
				abilitytodamage: true,
				bestialNaturalWeapon: true,
				selectNow: true,
			}, {
				regExpSearch: /^(?=.*(bestial|beast))(?=.*tail).*$/i,
				name: "Bestial Tail",
				source: [["T", 25]],
				ability: 1,
				type: "Natural",
				damage: [1, 8, "piercing"],
				range: "Melee",
				description: "Reach; Only in Rage",
				abilitytodamage: true,
				bestialNaturalWeapon: true,
				selectNow: true,
			}],
			additional: levels.map(function (n) {
				return n < 6 ? "" : "chosen weapon counts as magical";
			}),
			action: [["reaction", "Bestial Tail"]],
		},
		"subclassfeature6": {
			name: "Bestial Soul",
			source: [["T", 25]],
			minlevel: 6,
			description: desc([
				"When I finish a Short Rest, I can choose one of the following benefits until my next rest:",
				" \u2022 Swim Speed equal to my Speed and I can breathe underwater.",
				" \u2022 Climb Speed equal to my Speed and no check to climb difficult surfaces or upside down.",
				" \u2022 Once per turn when I jump, I can extend it by the result of an Athletics check in feet.",
			]),
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (v.theWea.bestialNaturalWeapon && !v.thisWeapon[1] && !v.theWea.isMagicWeapon && !/counts as( a)? magical/i.test(fields.Description)) {
							fields.Description += (fields.Description ? "; " : "") + "Counts as magical";
						};
					},
					"The natural melee weapon that I gain from Form of the Beast count as magical for the purpose of overcoming Resistance and Immunity to nonmagical attacks and damage.",
				],
			},
		},
		"subclassfeature10": {
			name: "Infectious Fury",
			source: [["T", 25]],
			minlevel: 10,
			description: desc([
				"In Rage, when I hit a creature with my natural weapon, I can have it make a Wis save. If it fails (DC 8 + my Prof Bonus + my Con mod) it suffers one effect of my choice:",
				" \u2022 It uses its Reaction to make a melee attack against one creature I can see of my choice.",
				" \u2022 It takes 2d12 Psychic damage.",
			]),
			usages: "Proficiency Bonus per ",
			usagescalc: "event.value = How('Proficiency Bonus');",
			recovery: "Long Rest",
		},
		"subclassfeature14": {
			name: "Call the Hunt",
			source: [["T", 25]],
			minlevel: 14,
			description: desc("When I enter Rage, I can choose my Con mod of willing creatures I can see within 30 ft. Once on each of their turns, if they hit an attack, they can have it deal +1d6 damage. This lasts as long as I'm in Rage. I gain 5 Temporary HP per creature that accepts this benefit."),
			usages: "Proficiency Bonus per ",
			usagescalc: "event.value = How('Proficiency Bonus');",
			recovery: "Long Rest",
		},
	},
});
AddSubClass("barbarian", "path of wild magic", {
	regExpSearch: /^(?=.*\bwild\b)(?=.*\bmagic\b).*$/i,
	subname: "Path of Wild Magic",
	subnameShort: "Wild Magic",
	source: [["T", 25]],
	abilitySave: 3,
	features: {
		"subclassfeature3": {
			name: "Magic Awareness",
			source: [["T", 25]],
			minlevel: 3,
			description: desc("As an action, I can open my awareness to the presence of concentrated magic. Until my next turn ends, I know the location of any spell or magic item within 60 ft. I also learn the school of magic of a spell. This doesn't reveal anything behind total cover."),
			usages: "Proficiency Bonus per ",
			usagescalc: "event.value = How('Proficiency Bonus')",
			recovery: "Long Rest",
			action: [["action", ""]],
		},
		"subclassfeature3.1": {
			name: "Wild Surge",
			source: [["T", 25]],
			minlevel: 3,
			description: desc("Whenever I enter Rage, I roll on the Wild Magic table (see Notes page)."),
			toNotesPage: [{
				name: "Wild Magic Table",
				source: [["T", 26]],
				note: [
					"The magical energy roiling inside me sometimes erupts from me. Whenever I enter my Rage, I have to roll on the table below to see what happens.",
					"If the effect calls for a saving throw, the DC is equal to 8 + my Proficiency Bonus + my Constitution modifier.",
					[
						["d8", "EFFECT"],
						[" 1", "Shadowy tendrils lash around me. Each creature of my choice that I can see within 30 ft of me must succeed on a Constitution saving throw or take 1d12 Necrotic damage. I also gain 1d12 Temporary Hit Points."],
						[" 2", "I teleport up to 30 ft to an unoccupied space I can see. Until my Rage ends, I can use this effect again on each of my turns as a Bonus Action."],
						[" 3", "An intangible spirit, which looks like a flumph or a pixie (my choice), appears within 5 ft of one creature of my choice that I can see within 30 ft of me. At the end of the current turn, the spirit explodes, and each creature within 5 ft of it must succeed on a Dexterity saving throw or take 1d6 Force damage. Until my Rage ends, I can use this effect again, summoning another spirit, on each of my turns as a Bonus Action."],
						[" 4", "Magic infuses one weapon of my choice that I am holding. Until my Rage ends, the weapon's damage type changes to Force, and it gains the Light and Thrown properties, with a normal range of 20 ft and a long range of 60 ft. If the weapon leaves my hand, the weapon reappears in my hand at the end of the current turn."],
						[" 5", "Whenever a creature hits me with an attack roll before my Rage ends, that creature takes 1d6 Force damage, as magic lashes out in retribution."],
						[" 6", "Until my Rage ends, I am surrounded by multicolored, protective lights; I gain a +1 bonus to AC, and while within 10 ft of me, my allies gain the same bonus."],
						[" 7", "Flowers and vines temporarily grow around me; until my Rage ends, the ground within 15 ft of me is difficult terrain for my enemies."],
						[" 8", "A bolt of light shoots from my chest. Another creature of my choice that I can see within 30 ft of me must succeed on a Constitution saving throw or take 1d6 Radiant damage and be Blinded until the start of my next turn. Until my Rage ends, I can use this effect again on each of my turns as a Bonus Action."],
					],
				],
			}],
		},
		"subclassfeature6": {
			name: "Bolstering Magic",
			source: [["T", 26]],
			minlevel: 6,
			description: desc([
				"As an action, I can touch a creature or myself and confer one of the following benefits:",
				" \u2022 For 10 minutes, they can add 1d3 to any attack roll and ability check.",
				" \u2022 Roll 1d3. They regain an expended spell slot of a level equal to or lower than the roll.",
				"A creature that receives the second benefit can't receive it again until after a Long Rest.",
			]),
			usages: "Proficiency Bonus per ",
			usagescalc: "event.value = How('Proficiency Bonus')",
			recovery: "Long Rest",
			action: [["action", ""]],
		},
		"subclassfeature10": {
			name: "Unstable Backlash",
			source: [["T", 26]],
			minlevel: 10,
			description: desc("As a Reaction in Rage when taking damage or failing a save, I can lash out with magic. I roll on the Wild Magic table and immediately apply the roll, replacing my current effect."),
			action: [["reaction", " (in Rage on damage/save fail)"]],
		},
		"subclassfeature14": {
			name: "Controlled Surge",
			source: [["T", 26]],
			minlevel: 14,
			description: desc("Whenever I roll on the Wild Magic table, I can roll two dice and choose which to use. If I roll the same on both dice, I can instead choose any effect on the Wild Magic table."),
		},
	},
});

// Bard Subclasses
// [dupl_start] reprints from Mythic Odysseys of Theros
if (!SourceList["MOT"]) {
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
} // dupl_end

// Cleric Subclasses
// [dupl_start] reprints from Guildmasters' Guide to Ravnica
if (!SourceList["G"]) {
	AddSubClass("cleric", "order domain", {
		regExpSearch: /^(?=.*(cleric|priest|clergy|acolyte))(?=.*order).*$/i,
		subname: "Order Domain",
		source: [["T", 31], ["G", 25]],
		features: {
			"subclassfeature3.0": {
				name: "Bonus Proficiency",
				source: [["T", 32], ["G", 26]],
				minlevel: 3,
				description: desc("I gain proficiency with heavy armor, and either the Intimidation or Persuasion skill."),
				armorProfs: [false, false, true, false],
				skillstxt: "Choose one from Intimidation or Persuasion",
				spellcastingExtra: ["command", "heroism", "hold person", "zone of truth", "mass healing word", "slow", "compulsion", "locate creature", "commune", "dominate person"],
			},
			"subclassfeature3.1": {
				name: "Voice of Authority",
				source: [["T", 32], ["G", 26]],
				minlevel: 3,
				description: desc("Whenever I use a spell slot to cast a spell on an ally, it can use its Reaction to attack. The ally makes one weapon attack against a target of my choice that I can see. If the spell targets multiple allies, I can choose which one can make the attack."),
			},
			"subclassfeature3.2": {
				name: "Order's Demand",
				source: [["T", 32], ["G", 26]],
				minlevel: 3,
				additional: "1 Channel Divinity",
				description: desc("As an action, I can have all creatures of my choice within 30 ft that can see or hear me make a Wisdom save or be Charmed by me until the end of my next turn or it takes any damage. I can choose to have a Charmed target drop what it's holding when it fails its save."),
				action: [["action", ""]],
			},
			"subclassfeature6": {
				name: "Embodiment of the Law",
				source: [["T", 32], ["G", 26]],
				minlevel: 6,
				description: desc("When I cast an Enchantment spell using a spell slot, I can reduce its casting time. If the spell normally has a casting time of an action, I can now cast it as a Bonus Action."),
				usages: "Wisdom " + (typePF ? "mod" : "modifier") + " per ",
				usagescalc: "event.value = Math.max(1, What('Wis Mod'));",
				recovery: "Long Rest",
				calcChanges: {
					spellAdd: [
						function (spellKey, spellObj, spName) {
							if (CurrentSpells[spName].refType == "class" && spellObj.school == "Ench" && /1 a\b|Act/.test(spellObj.time)) {
								spellObj.time = "act/bns";
								return true;
							};
						},
						"When I cast an Enchantment spell using a spell slot that normally requires an action to cast, I can reduce its casting time to a Bonus Action.",
					],
				},
			},
			"subclassfeature17": {
				name: "Order's Wrath",
				source: [["T", 32], ["G", 26]],
				minlevel: 17,
				description: desc("If I deal my Divine Strike damage to a creature, it is cursed until my next turn starts. The next time it is hit by a weapon attack from my allies, it takes +2d8 Psychic damage."),
			},
		},
	});
} // dupl_end
AddSubClass("cleric", "peace domain", {
	regExpSearch: /^(?=.*(cleric|priest|clergy|acolyte))(?=.*peace).*$/i,
	subname: "Peace Domain",
	source: [["T", 32]],
	features: {
		"subclassfeature3.0": {
			name: "Emboldening Bond",
			source: [["T", 33]],
			minlevel: 3,
			description: levels.map(function (n) {
				return desc("As an action, I can magically bond my Prof Bonus of willing creatures I can see in 30 ft. I can be one of the bonded creatures. The bond lasts for 10 min or until I use this again. While within " + (n < 17 ? 30 : 60) + " ft of another, a bonded target can add +1d4 to a save, attack, or check. Each creature can add the +1d4 only once per turn.");
			}),
			action: [["action", ""]],
			usages: "Proficiency Bonus per ",
			usagescalc: "event.value = How('Proficiency Bonus');",
			recovery: "Long Rest",
			spellcastingExtra: ["heroism", "sanctuary", "aid", "warding bond", "beacon of hope", "sending", "aura of purity", "otiluke's resilient sphere", "greater restoration", "rary's telepathic bond"],
		},
		"subclassfeature3.1": {
			name: "Implement of Peace",
			source: [["T", 33]],
			minlevel: 3,
			description: desc("I gain proficiency in the Insight, Performance, or Persuasion skill (my choice)."),
			skillstxt: "Choose one from: Insight, Performance, or Persuasion",
		},
		"subclassfeature3.2": {
			name: "Balm of Peace",
			source: [["T", 33]],
			minlevel: 3,
			additional: "1 Channel Divinity",
			description: desc("As an action, I can move up to my Speed without provoking Opportunity Attacks. During this move, I can heal each creature that I come within 5 ft of once. I restore a number of Hit Points equal to 2d6 + my Wisdom modifier (minimum 1 HP)."),
			action: [["action", ""]],
		},
		"subclassfeature6": {
			name: "Protective Bond",
			source: [["T", 33]],
			minlevel: 6,
			description: desc("My Emboldening Bond now also helps those bonded to protect each other if within range. When one is about to take damage, another bonded can use its Reaction to teleport closer. They teleport to an empty space within 5 ft of the first and take all the damage instead. From 17th-level, they count as having Resistance for this damage, thus take only half."),
			additional: levels.map(function (n) {
				return n < 6 ? "" : "the bonded must be within " + (n < 17 ? 30 : 60) + " ft";
			}),
		},
		"subclassfeature17": {
			name: "Expansive Bond",
			source: [["T", 33]],
			minlevel: 17,
			description: desc("Emboldening and Protective Bond work when the bonded are within 60 ft of each other. Protective Bond now also grants Resistance when used to take damage for another."),
		},
	},
});
AddSubClass("cleric", "twilight domain", {
	regExpSearch: /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(twilight|transition)).*$/i,
	subname: "Twilight Domain",
	subnameShort: "Twilight",
	source: [["T", 34]],
	features: {
		"subclassfeature3.0": {
			name: "Bonus Proficiency",
			source: [["T", 34]],
			minlevel: 3,
			description: desc("I gain proficiency with martial weapons and heavy armor."),
			armorProfs: [false, false, true, false],
			weaponProfs: [false, true],
			spellcastingExtra: ["faerie fire", "sleep", "moonbeam", "see invisibility", "aura of vitality", "leomund's tiny hut", "aura of life", "greater invisibility", "circle of power", "mislead"],
		},
		"subclassfeature3.1": {
			name: "Eyes of Night",
			source: [["T", 34]],
			minlevel: 3,
			description: desc("I gain Darkvision out to a range of 300 ft. As an action, I can grant others this as well. I can grant it for 1 hour to my Wis mod (min 1) of willing targets I can see within 10 ft. I can do this once per Long Rest, or by expending a spell slot (SS 1+)."),
			action: [["action", " (grant others)"]],
			vision: [["Darkvision", 300]],
			additional: "grant others",
			usages: 1,
			recovery: "Long Rest",
			altResource: "SS 1+",
		},
		"subclassfeature3.2": {
			name: "Vigilant Blessing",
			source: [["T", 35]],
			minlevel: 3,
			description: desc("As an action, I can grant myself or a creature I touch Adv on the next initiative roll. This benefit ends immediately after the roll or when I use this feature again."),
			action: [["action", ""]],
		},
		"subclassfeature3.3": {
			name: "Twilight Sanctuary",
			source: [["T", 35]],
			minlevel: 3,
			description: desc([
				"As an action, I can use my holy symbol to create a 30-ft radius sphere around myself. It moves with me, is filled with Dim Light, and lasts for 1 min or until I'm Incapacitated. When a creature, including me, ends its turn inside the sphere, I can grant it a benefit:",
				" \u2022 I grant it Temporary Hit Points equal to 1d6 + my Cleric level.",
				" \u2022 I end one effect on it causing it to be Charmed or Frightened.",
				"From 17th-level onwards, me and my allies have half cover while inside the sphere.",
			]),
			action: [["action", ""]],
			additional: levels.map(function (n) {
				return n < 2 ? "" : "1d6 + " + n + " Temp HP; 1 CD";
			}),
		},
		"subclassfeature6": {
			name: "Steps of Night",
			source: [["T", 35]],
			minlevel: 6,
			description: desc("As a Bonus Action when I'm in Dim Light or Darkness, I can magically grant myself flight. I gain a Fly Speed equal to my Speed for 1 minute."),
			action: [["bonus action", ""]],
			usages: "Proficiency Bonus per ",
			usagescalc: "event.value = How('Proficiency Bonus');",
			recovery: "Long Rest",
		},
		"subclassfeature17": {
			name: "Twilight Shroud",
			source: [["T", 35]],
			minlevel: 17,
			description: desc("Me and my allies have half cover while in the sphere created by my Twilight Sanctuary."),
		},
	},
});

// Druid Subclasses
// [dupl_start] reprints from Guildmasters' Guide to Ravnica
if (!SourceList["G"]) {
	AddSubClass("druid", "circle of spores", {
		regExpSearch: /^(?=.*(druid|shaman))(?=.*spores).*$/i,
		subname: "Circle of Spores",
		subnameShort: "Spores",
		source: [["T", 36], ["G", 26]],
		features: {
			"subclassfeature3.0": {
				name: "Circle Spells",
				source: [["T", 36], ["G", 27]],
				minlevel: 3,
				description: desc("I learn the *Chill Touch* cantrip and gain the ability to cast certain spells. These are always prepared, but don't count against the number of spells I can prepare."),
				spellcastingBonus: [{
					name: "Circle Spells",
					spells: ["chill touch"],
					selection: ["chill touch"],
				}],
				spellcastingExtra: ["blindness/deafness", "gentle repose", "animate dead", "gaseous form", "blight", "confusion", "cloudkill", "contagion"],
			},
			"subclassfeature3.1": {
				name: "Halo of Spores",
				source: [["T", 36], ["G", 27]],
				minlevel: 3,
				description: desc("As a Reaction when someone I can see in 10 ft starts its turn or moves, I can have it make a Constitution save or take Necrotic damage from my cloud of spores."),
				additional: levels.map(function (n) { return n < 2 ? "" : "Con save or 1d" + (n < 6 ? 4 : n < 10 ? 6 : n < 14 ? 8 : 10) + " Necrotic damage"; }),
				action: [["reaction", ""]],
			},
			"subclassfeature3.2": {
				name: "Symbiotic Entity",
				source: [["T", 37], ["G", 27]],
				minlevel: 3,
				description: desc("As an action, I can expend a Wild Shape use to boost my spores instead of transforming. I gain 4 Temporary Hit Points per Druid level and my Halo of Spores damage increases. Also, my melee weapon attacks do +1d6 Necrotic damage with every hit. This lasts for 10 min, until these Temporary HP run out, or until I use Wild Shape again."),
				additional: levels.map(function (n) {
					return n < 2 ? "" : Math.floor(n * 4) + " Temp HP; Halo of Spores: 2d" + (n < 6 ? 4 : n < 10 ? 6 : n < 14 ? 8 : 10);
				}),
				action: [["action", ""]],
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (v.isMeleeWeapon && /\b(spore|symbiotic)\b/i.test(v.WeaponTextName)) {
								fields.Description += (fields.Description ? "; " : "") + "+1d6 Necrotic damage";
							};
						},
						"If I include the word \"Spore\" or \"Symbiotic\" in a melee weapon's name, it gets treated as a weapon that is infused by my Symbiotic Entity feature, adding +1d6 Necrotic damage in the description.",
					],
				},
			},
			"subclassfeature6": {
				name: "Fungal Infestation",
				source: [["T", 37], ["G", 27]],
				minlevel: 6,
				description: desc("As a Reaction when a Small/Medium Beast/Humanoid dies within 10 ft, I can animate it. It rises as a **Zombie** with 1 HP that follows my mental commands and dies after 1 hour. It can only take the Attack action for one melee attack. It takes its turns after mine."),
				usages: "Wisdom modifier per ",
				usagescalc: "event.value = Math.max(1, What('Wis Mod'));",
				recovery: "Long Rest",
				action: [["reaction", ""]],
			},
			"subclassfeature10": {
				name: "Spreading Spores",
				source: [["T", 37], ["G", 27]],
				minlevel: 10,
				description: " [only while Symbiotic Entity is active]" + desc("As a Bonus Action, I create a 10-ft cube of fungal spores within 30 ft, lasting for 1 min. Any creature moving into or starting its turn in it must save against my Halo of Spores. The cube ends if I use this feature again. While it persists, I can't use my Halo of Spores."),
				action: [["bonus action", " (start/end)"]],
			},
			"subclassfeature14": {
				name: "Fungal Body",
				source: [["T", 38], ["G", 27]],
				minlevel: 14,
				description: desc("I'm Immune to being Blinded, Deafened, Frightened, Poisoned, and critical hits."),
				savetxt: { immune: ["Blinded", "Deafened", "Frightened", "Poisoned", "critical hits (unless Incapacitated)"] },
			},
		},
	});
} // dupl_end
AddSubClass("druid", "circle of wildfire", {
	regExpSearch: /^(?=.*(druid|shaman))(?=.*wild.{0,1}fire).*$/i,
	subname: "Circle of Wildfire",
	subnameShort: "Wildfire",
	source: [["T", 39]],
	features: {
		"subclassfeature3.0": {
			name: "Circle Spells",
			source: [["T", 39]],
			minlevel: 3,
			description: desc("My link to a wildfire spirit grants me access to spells, which count as Druid spells to me. These are always prepared, but don't count against the number of spells I can prepare."),
			spellcastingExtra: ["burning hands", "cure wounds", "flaming sphere", "scorching ray", "plant growth","revivify", "aura of life", "fire shield", "flame strike", "mass cure wounds"],
		},
		"subclassfeature3.1": {
			name: "Summon Wildfire Spirit",
			source: [["T", 40]],
			minlevel: 3,
			description: desc("As an action, I can expend a Wild Shape use to summon a **Wildfire Spirit** within 30 ft. All within 10 ft of where it manifests must make a Dex save or take 2d10 Fire damage. It is friendly and obeys my commands. It lasts for 1 hour, until it has 0 HP, or I die. Unless I use a Bonus Action to command it, it only takes the Dodge action on its turn. It can always take Reactions and move on its turn. It acts on my initiative, after me. It disappears if I summon another. See Wildfire Spirit on a Companion page for its stats."),
			action: [["action", ""], ["bonus action", "Command Wildfire Spirit"]],
			creaturesAdd: [["Wildfire Spirit", true]],
			creatureOptions: [{
				name: "Wildfire Spirit",
				source: [["T", 40]],
				size: 4,
				type: "Elemental",
				alignment: "",
				ac: 13,
				hp: 20,
				hd: [],
				speed: "30 ft, fly 30 ft (hover)",
				scores: [10, 14, 14, 13, 15, 11],
				immunities: "Fire; Charmed, Frightened, Grappled, Prone, Restrained",
				senses: "Darkvision 60 ft",
				passivePerception: 12,
				languages: "understands the languages of its creator",
				challengeRating: "1/2",
				proficiencyBonus: 2,
				proficiencyBonusLinked: true,
				attacksAction: 1,
				attacks: [{
					name: "Flame Seed",
					ability: 5,
					damage: [1, 6, "fire"],
					range: "60 ft",
					description: "Ranged weapon attack",
					modifiers: ["", "Prof"],
					abilitytodamage: false,
					useSpellMod: "druid",
				}, {
					name: "Fiery Teleportation",
					ability: 5,
					damage: [1, 6, "fire"],
					range: "5-ft radius",
					description: "Dex save for all within 5 ft of teleportation origin, success - no damage; See traits",
					dc: true,
					modifiers: ["", "Prof"],
					abilitytodamage: false,
					useSpellMod: "druid",
				}, {
					name: "Fiery Manifestation",
					ability: 5,
					damage: [2, 6, "fire"],
					range: "10-ft radius",
					description: "Dex save for all within 10 ft where spirit is summoned, success - no damage",
					dc: true,
					abilitytodamage: false,
					useSpellMod: "druid",
				}],
				features: [{
					name: "Creator",
					description: "The spirit obeys the commands of its creator and has the same Proficiency Bonus. It takes its turn immediately after its creator, on the same initiative count. It can move and take Reactions on its own, but only takes the Dodge action on its turn unless its creator takes a Bonus Action to command it to take another action. If its creator is Incapacitated, it can take any action, not just Dodge.",
				}],
				actions: [{
					name: "Fiery Teleportation",
					description: "The spirit and each willing creature of its creator's choice within 5 ft of it teleport up to 15 ft to unoccupied spaces its creator can see. Then each creature within 5 ft of the space that the spirit left must succeed on a Dexterity saving throw against its creator's spell save DC or take Fire damage equal to 1d6 + its Proficiency Bonus.",
				}],
				traits: [{
					name: "Fiery Manifestation",
					description: "The spirit appears in an unoccupied space of its creator's choice that its creator can see within 30 ft. Each creature within 10 ft of the spirit (other than its creator) when it appears must succeed on a Dexterity saving throw against its creator's spell save DC or take 2d6 Fire damage.",
				}],
				header: "Wildfire",
				calcChanges: {
					hp: function (totalHD, HDobj, prefix) {
						if (!classes.known.druid) return;
						var drdLvl = classes.known.druid.level;
						var drdLvl5 = 5 * drdLvl;
						HDobj.alt.push(5 + drdLvl5);
						HDobj.altStr.push(" = 10 as a base\n + 5 \xD7 " + drdLvl + " from five times its creator's druid level (" + drdLvl5 + ")");
					},
					setAltHp: true,
				},
			}],
		},
		"subclassfeature6": {
			name: "Enhanced Bond",
			source: [["T", 40]],
			minlevel: 6,
			description: desc("While my wildfire spirit is present, I can have my spells originate from it (no range 'self'). Also, I can then add 1d8 to a single roll of my spells that restore HP or deal Fire damage."),
		},
		"subclassfeature10": {
			name: "Cauterizing Flames",
			source: [["T", 40]],
			minlevel: 10,
			description: desc([
				"As a Reaction when a Small or larger creature dies within 30 ft of me or my Wildfire Spirit, I can have a spectral flame erupt in its space that lasts for 1 minute.",
				"As a Reaction when I see a creature enter the flame's space, I can extinguish the flame. This heals or deals Fire damage to the creature (my choice) equal to 2d10 + my Wis mod.",
			]),
			action: [["reaction", ""]],
			usages: "Proficiency Bonus per ",
			usagescalc: "event.value = How('Proficiency Bonus');",
			recovery: "Long Rest",
		},
		"subclassfeature14": {
			name: "Blazing Revival",
			source: [["T", 40]],
			minlevel: 14,
			description: desc("If I drop to 0 HP and don't die, and my Wildfire Spirit is within 120 ft, it can save me. I can have it drop to 0 HP. I then regain half my HP and immediately rise to my feet."),
			usages: 1,
			recovery: "Long Rest",
		},
	},
});

// Fighter Subclasses
AddSubClass("fighter", "rune knight", {
	regExpSearch: /^(?=.*rune)(?=.*knight).*$/i,
	subname: "Rune Knight",
	source: [["T", 44]],
	fullname: "Rune Knight",
	abilitySave: 3,
	features: {
		"subclassfeature3": {
			name: "Bonus Proficiencies",
			source: [["T", 44]],
			minlevel: 3,
			description: desc("I gain proficiency with Smith's Tools and I learn to speak, read, and write Giant."),
			toolProfs: ["Smith's tools"],
			languageProfs: ["Giant"],
		},
		"subclassfeature3.1": {
			name: "Rune Carver",
			source: [["T", 44]],
			minlevel: 3,
			description: desc([
				"I learn how to use magic runes to enhance my gear that I can wear or hold in my hand.",
				"Use the \"Choose Feature\" button above to select a rune and add it to the third page.",
				"When I finish a Long Rest, I can inscribe each rune I know upon a different item I touch. Each item can hold only one rune and remains there until I finish a Long Rest. Runes inscribed on a carried object grant both a passive and a limited-use active effect. Whenever I gain a Fighter level, I can swap a rune I know for another.",
				"The DC for a rune's abilities is 8 + my Proficiency Bonus + my Constitution modifier.",
			]),
			additional: levels.map(function (n){
				return n < 3 ? "" : (n < 7 ? 2 : n < 10 ? 3 : n < 15 ? 4 : 5) + " runes known"
			}),
			extraTimes: levels.map(function (n) {
				return n < 3 ? 0 : n < 7 ? 2 : n < 10 ? 3 : n < 15 ? 4 : 5;
			}),
			extraname: "Rune Knight 3",
			extrachoices: ["Cloud Rune", "Fire Rune", "Frost Rune", "Stone Rune", "Hill Rune (prereq: level 7 fighter)", "Storm Rune (prereq: level 7 fighter)"],
			"cloud rune": {
				name: "Cloud Rune",
				source: [["T", 44]],
				description: desc([
					"While I wear an object inscribed with this, I gain a deceptiveness reminiscent of cloud giants. I always gain Advantage on Dexterity (Sleight of Hand) and Charisma (Deception) checks.",
					"As a Reaction when I or another I can see within 30 ft is hit by an attack, I can invoke this. I select another target for the attack within 30 ft of me, using the same roll (ignore range).",
				]),
				action: [["reaction", " (invoke)"]],
				additional: "invoke",
				usages: ["", "", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
				recovery: "Short Rest",
				advantages: [ ["Sleight of Hand", true], ["Deception", true] ],
			},
			"fire rune": {
				name: "Fire Rune",
				source: [["T", 44]],
				description: desc([
					"While I wear an object inscribed with this, I gain craftsmanship reminiscent of great smiths. I always double my Proficiency Bonus when making an ability check with a tool.",
					"When I hit a creature with a weapon attack, I can invoke the rune to summon fiery shackles, dealing it +2d6 Fire damage and have it make a Str save or be Restrained for 1 min. While Restrained, the creature takes 2d6 Fire damage at the start of each of its turns. It can repeat the save at the end of each of its turns, banishing the shackles on a success.",
				]),
				additional: "invoke",
				usages: ["", "", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
				recovery: "Short Rest",
				skillstxt: "expertise with all tools I am proficient with",
				eval: function () { Checkbox("Too Exp", true); },
				removeeval: function () { Checkbox("Too Exp", false); },
			},
			"frost rune": {
				name: "Frost Rune",
				source: [["T", 45]],
				description: desc([
					"While I wear an object inscribed with this, I gain might of those surviving wintry wilderness. I always gain Advantage on Wisdom (Animal Handling) and Charisma (Intimidation) checks.",
					"As a Bonus Action, I can invoke this to gain +2 on Str and Con checks and saves for 10 min.",
				]),
				action: [["bonus action", " (invoke)"]],
				additional: "invoke",
				usages: ["", "", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
				recovery: "Short Rest",
				advantages: [ ["Animal Handling", true], ["Intimidation", true] ],
			},
			"stone rune": {
				name: "Stone Rune",
				source: [["T", 45]],
				description: desc([
					"While I wear an object inscribed with this, I gain judiciousness reminiscent of stone giants. I always gain Advantage on Wisdom (Insight) checks and I gain Darkvision out to 120 ft.",
					"As a Reaction when a creature I can see ends its turn within 30 ft, I can invoke this rune. This causes the creature to make a Wisdom save or be Charmed by me for 1 minute. While Charmed, it descends into a dreamy stupor, becoming Incapacitated and has 0 Speed. It can repeat the save at the end of each of its turns, ending the effect on a success.",
				]),
				action: [["reaction", " (invoke)"]],
				additional: "invoke",
				usages: ["", "", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
				recovery: "Short Rest",
				vision: [["Darkvision", 120]],
				advantages: [ ["Insight", true] ],
			},
			"hill rune (prereq: level 7 fighter)": {
				name: "Hill Rune",
				source: [["T", 45]],
				description: desc([
					"While I wear an object inscribed with this rune, I gain a resilience reminiscent of hill giants. I always gain Advantage on saves against being Poisoned and Resistance to Poison damage.",
					"As a Bonus Action, I can invoke it to gain Resistance to Bludg/Slash/Pierc damage for 1 min.",
				]),
				prereqeval: function (v) { return classes.known.fighter.level >= 7; },
				action: [["bonus action", " (invoke)"]],
				additional: "invoke",
				usages: ["", "", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
				recovery: "Short Rest",
				dmgres: ["Poison"],
				savetxt: { adv_vs: ["poison"] },
			},
			"storm rune (prereq: level 7 fighter)": {
				name: "Storm Rune",
				source: [["T", 45]],
				description: desc([
					"While I wear an object inscribed with this rune, I can glimpse the future like storm giants. I always gain Adv on Int (Arcana) checks and I can't be surprised while not Incapacitated.",
					"As a Bonus Action, I can invoke it to enter a prophetic state for 1 min or till Incapacitated. While in this state, I can use a Reaction to cause a roll to gain Advantage or Disadvantage. I can do this for attacks, saves, and checks of myself or others I can see within 60 ft of me.",
				]),
				prereqeval: function (v) { return classes.known.fighter.level >= 7; },
				action: [["bonus action", " (invoke)"]],
				additional: "invoke",
				usages: ["", "", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
				recovery: "Short Rest",
				advantages: [ ["Arcana", true] ],
				savetxt: { immune: ["surprised"] },
			},
		},
		"subclassfeature3.2": {
			name: "Giant's Might",
			source: [["T", 45]],
			minlevel: 3,
			description: desc([
				"As a Bonus Action, I can imbue myself with giant magic for 1 minute and gain benefits:",
				" \u2022 Space permitted, I grow to a larger size category along with everything I'm wearing.",
				" \u2022 I have Advantage on my Strength check and saves.",
				" \u2022 My weapon and unarmed strike attacks deal extra damage.",
			]),
			additional: levels.map(function (n) {
				if (n < 3) return "";
				var size = n < 18 ? "Large" : "Huge";
				var die = n < 10 ? 6 : n < 18 ? 8 : 10;
				var dmg = typePF ? " dmg" : " damage";
				return size + ", +1d" + die + dmg;
			}),
			action: [["bonus action", ""]],
			savetxt: { text: ["Adv on Str saves in Giant's Might"] },
			usages: "Prof Bonus per ",
			usagescalc: "event.value = How('Proficiency Bonus');",
			recovery: typePF ? "LR" : "Long Rest",
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (classes.known.fighter && classes.known.fighter.level >= 3 && (v.isWeapon || v.baseWeaponName === "unarmed strike") && /giant('s)? might/i.test(v.WeaponTextName)) {
							var GMdmgDie = classes.known.fighter.level < 10 ? "d6" : classes.known.fighter.level < 18 ? "d8" : "d10";
							var dmgDieRx = RegExp("(\\d+)" + GMdmgDie, "i");
							if (dmgDieRx.test(fields.Damage_Die)) {
								var dmgDieMatch = fields.Damage_Die.match(dmgDieRx);
								fields.Damage_Die = fields.Damage_Die.replace(dmgDieRx, Number(dmgDieMatch[1]) + 1 + GMdmgDie);
								fields.Description = fields.Description.replace(/Versatile \((\d+d\d+)\)/i, "Versatile ($1+1" + GMdmgDie + ")");
							} else if (!isNaN(fields.Damage_Die)) {
								fields.Damage_Die = 1 + GMdmgDie + "+" + fields.Damage_Die;
							} else {
								fields.Description += (fields.Description ? "; " : "") + "+1" + GMdmgDie + " damage";
							}
							if (classes.known.fighter.level >= 18 && v.isMeleeWeapon) fields.Description += (fields.Description ? "; " : "") + "+5 ft reach";
						};
					},
					"If I include the words \"Giant Might\" in the name of a weapon or unarmed strike, it gets treated as a weapon that I use while imbued by my Giant's Might feature. It adds +1d6 weapon damage. From 10th-level onwards, this increases to +1d8 damage. From 18th-level onwards, this increases to +1d10 damage and my reach increases by 5 ft (for melee weapons).",
					8,
				],
			},
		},
		"subclassfeature7": {
			name: "Runic Shield",
			source: [["T", 45]],
			minlevel: 7,
			description: desc("As a Reaction when I see a creature within 60 ft get hit by an attack, I can have the attacker reroll its attack roll and use the new roll."),
			action: [["reaction", ""]],
		},
		"subclassfeature10": {
			name: "Great Stature",
			source: [["T", 46]],
			minlevel: 10,
			description: desc("My runes permanently make me grow and I add 3d4 inches to my length. In addition, the extra weapon damage I deal with Giant Might increases to 1d8."),
		},
		"subclassfeature15": {
			name: "Master of Runes",
			source: [["T", 46]],
			minlevel: 15,
			description: desc("I can now invoke each of my runes twice per Short Rest instead of once."),
		},
		"subclassfeature18": {
			name: "Runic Juggernaut",
			source: [["T", 46]],
			minlevel: 18,
			description: desc("Giant's Might now adds +1d10 weapon damage, and can make me grow up to Huge. While I'm Huge, my reach increases by 5 ft."),
		},
	},
});

// Monk Subclasses
AddSubClass("monk", "way of the astral self", {
	regExpSearch: /^(?=.*astral)(?=.*(self|projection|travel))((?=.*(monk|monastic))|((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior))).*$/i,
	subname: "Way of the Astral Self",
	subnameShort: "Astral Self",
	source: [["T", 50]],
	features: {
		"subclassfeature3": {
			name: "Arms of the Astral Self",
			source: [["T", 50]],
			minlevel: 3,
			description: " [1 FP; see 3rd page Notes]" + desc("As a Bonus Action, I can use my FP to summon the arms of my astral self for 10 minutes."),
			action: [["bonus action", "Summon Astral Arms"]],
			weaponOptions: [{
				baseWeapon: "unarmed strike",
				regExpSearch: /^(?=.*\bastral\b)(?=.*\barms?\b).*$/i,
				name: "Astral Arms",
				source: [["T", 50]],
				ability: 5,
				range: "Melee (+5 ft)",
				damage: [1, "", "force"],
				description: "+5 ft reach; Uses Str, Dex, or Wis",
				isAstralArms: true,
				selectNow: true,
			}],
			"astral arms": {
				name: "Astral Arms",
				extraname: "Way of the Astral Self 3",
				source: [["T", 50]],
				description: desc("As a Bonus Action, I can summon my astral arms to hover next to or over my own arms. When I summon them, all creatures of my choice I can see in 10 ft must make a Dex save or take twice my martial arts die in Force damage. I can use the arms to make unarmed strikes, using Wisdom instead of Strength/Dexterity. I have +5 ft reach on attacks made with my astral arms and they deal Force damage. They last for 10 minutes or until I'm Incapacitated or die. I choose their appearance."),
				additional: levels.map(function (n) {
					return n < 3 ? "" : "1 FP; 2d" + (n < 5 ? 4 : n < 11 ? 6 : n < 17 ? 8 : 10) + " Force " + (typePF ? "dmg" : "damage") + " on summon";
				}),
			},
			autoSelectExtrachoices: [{ extrachoice: "astral arms" }],
		},
		"subclassfeature6": {
			name: "Visage of the Astral Self",
			source: [["T", 50]],
			minlevel: 6,
			description: " [1 FP; see 3rd page Notes]" + desc("As a Bonus Action, I can use my FP to summon the visage of my astral self for 10 minutes."),
			action: [["bonus action", "Summon Astral Arms and/or Visage", "Summon Astral Arms"]],
			"astral visage": {
				name: "Astral Visage",
				extraname: "Way of the Astral Self 6",
				source: [["T", 50]],
				additional: "1 Focus Point",
				description: desc([
					"As a Bonus Action (or when summoning my astral arms), I can summon my astral visage. It lasts for 10 minutes or until I'm Incapacitated or die. I choose its appearance. My astral visage covers my face like a helmet or mask and grants me the following benefits:",
					" \u2022 **Astral Sight**. I can see normally in normal and magical darkness to a distance of 120 ft.",
					" \u2022 **Wisdom of the Spirit**. I have Advantage on Wisdom (Insight) and Charisma (Intimidation).",
					" \u2022 **Word of the Spirit**. I can have only one target I can see in 60 ft hear me, or all in 300 ft.",
				]),
			},
			autoSelectExtrachoices: [{ extrachoice: "astral visage" }],
		},
		"subclassfeature11": {
			name: "Body of the Astral Self",
			source: [["T", 51]],
			minlevel: 11,
			description: " [see 3rd page Notes]" + desc("When I have both my astral arms and visage summoned, my astral body appears as well. This spectral body covers me like an armor, connecting my astral arms and astral visage."),
			action: [["reaction", "Deflect Energy"]],
			"astral body": {
				name: "Astral Body",
				extraname: "Way of the Astral Self 11",
				source: [["T", 51]],
				description: " [if both astral arms \u0026 visage are present]" + desc([
					" \u2022 **Deflect Energy**. As a Reaction when I take damage, I can reduce it by 1d10 + Wis mod. I can only do this if the damage I take is Acid, Cold, Fire, Force, Lightning, or Thunder.",
					" \u2022 **Empowered Arms**. Once per my turn, I can add martial art die to astral arms damage.",
				]),
			},
			autoSelectExtrachoices: [{ extrachoice: "astral body" }],
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (v.theWea.isAstralArms && classes.known.monk && classes.known.monk.level) {
							var aMonkDie = function (n) { return n < 5 ? 4 : n < 11 ? 6 : n < 17 ? 8 : 10; }(classes.known.monk.level);
							fields.Description += (fields.Description ? "; " : "") + "Once on each of my turns +1d" + aMonkDie + " damage";
						}
					},
					"Once on each of my turns when I hit a target with my astral arms, I can add my martial arts die to the damage dealt.",
				],
			},
		},
		"subclassfeature17": {
			name: "Awakened Astral Self",
			source: [["T", 51]],
			minlevel: 17,
			description: " [5 FP; see 3rd page Notes]" + desc("As a Bonus Action, I can use 5 FP to summon astral arms and visage with benefits."),
			action: [["bonus action", ""]],
			"astral body": {
				name: "Awakened Astral Self",
				extraname: "Way of the Astral Self 17",
				source: [["T", 50]],
				additional: "5 Focus Points",
				description: desc([
					"As a Bonus Action, I can summon my astral arms and astral visage, with extra benefits:",
					" \u2022 Armor of the Spirit: I gain a +2 bonus to my armor class.",
					" \u2022 Astral Barrage: I can do three attacks with the Attack action, if all are with astral arms.",
					"This lasts for 10 minutes or until I'm Incapacitated or die.",
				]),
			},
			autoSelectExtrachoices: [{ extrachoice: "astral body" }],
		},
	},
});

// Paladin Subclasses
AddSubClass("paladin", "oath of the watchers", {
	regExpSearch: /^(?=.*watchers)((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|warrior|warlord|trooper)))).*$/i,
	subname: "Oath of the Watchers",
	subnameShort: "Watchers",
	source: [["T", 54]],
	features: {
		"subclassfeature3": {
			name: "Watcher's Will",
			source: [["T", 55]],
			minlevel: 3,
			additional: "1 Channel Divinity",
			description: desc("As an action, Cha mod of creatures I see in 30 ft gain Adv on Int/Wis/Cha saves for 1 min."),
			action: [["action", ""]],
			spellcastingExtra: ["alarm", "detect magic", "moonbeam", "see invisibility", "counterspell", "nondetection", "aura of purity", "banishment", "hold monster", "scrying"],
		},
		"subclassfeature3.1": {
			name: "Abjure the Extraplanar",
			source: [["T", 55]],
			minlevel: 3,
			additional: "1 Channel Divinity",
			description: desc("As an action, all Aberration, Celestial, Elemental, Fey, Fiend in 30 ft must make a Wis save. Succeeds if it can't hear me. On fail, turned for 1 minute or until it takes any damage. Turned: move away, never within 30 ft of me, no Reactions or actions other than Dash. Turned: may Dodge instead of Dash when nowhere to move and unable to escape bonds."),
			action: [["action", ""]],
		},
		"subclassfeature7": {
			name: "Aura of the Sentinel",
			source: [["T", 55]],
			minlevel: 7,
			description: desc("If I'm not Incapacitated, chosen creatures in range and I add my Prof Bonus to Initiative."),
			additional: levels.map(function (n) { return n < 7 ? "" : (n < 18 ? 10 : 30) + "-foot aura"; }),
			addMod: [{ type: "skill", field: "Init", mod: "prof", text: "I can add my Proficiency Bonus to initiative rolls." }],
		},
		"subclassfeature15": {
			name: "Vigilant Rebuke",
			source: [["T", 55]],
			minlevel: 15,
			description: desc("As a Reaction when I or another I can see succeeds on an Int, Wis, or Cha save, I can rebuke. The creature that forced the saving throw takes 2d8 + my Cha mod Force damage."),
			action: [["reaction", ""]],
		},
		"subclassfeature20": {
			name: "Mortal Bulwark",
			source: [["T", 55]],
			minlevel: 20,
			description: desc([
				"As a Bonus Action, I can gain the following benefits for 1 minute:",
				" \u2022 Truesight 120 ft; Adv on attacks vs Aberrations, Celestials, Elementals, Fey, and Fiends.",
				" \u2022 When I hit and damage a creature with an attack, I can banish it if it fails a Cha save. It's banished to its native plane if not there now. It's Immune for 24 hours on a success.",
				"I can do this once per Long Rest, or by expending a 5th-level or higher spell slot (SS 5+).",
			]),
			recovery: "Long Rest",
			usages: 1,
			altResource: "SS 5+",
			action: [["bonus action", ""]],
		},
	},
});

// Ranger Subclasses
AddSubClass("ranger", "swarmkeeper", {
	regExpSearch: /swarmkeeper/i,
	subname: "Swarmkeeper",
	source: [["T", 59]],
	fullname: "Swarmkeeper",
	features: {
		"subclassfeature3": {
			name: "Gathered Swarm",
			source: [["T", 60]],
			minlevel: 3,
			description: levels.map(function (n) {
				var a = [
					"I'm bonded to a swarm of nature spirits crawling in my space. I choose their appearance. Once on each of my turns, I can have it assist me after I hit a creature with an attack:",
					" \u2022 The target takes an extra 1d" + (n < 11 ? 6 : 8) + " Piercing damage from the swarm.",
					" \u2022 The target must make a Strength save or be moved 15 ft horizontally by the swarm." + (n < 11 ? "" : " Additionally, on a failed save, I can also have the target be knocked Prone."),
					" \u2022 The swarm moves me 5 ft horizontally" + (n < 11 ? "" : " and I have half cover until my next turn starts") + ".",
					"I get to choose the direction whenever the target or I'm moved by the swarm.",
				];
				if (n >= 20) a.pop();
				return desc(a);
			}),
		},
		"subclassfeature3.1": {
			name: "Swarmkeeper Magic",
			source: [["T", 60]],
			minlevel: 3,
			description: desc("I learn *Mage Hand*. When cast, its hand takes the form of my swarming nature spirits. I get bonus spells known, which do not count against the number of spells I can know."),
			spellcastingBonus: [{
				name: "Swarmkeeper Magic",
				spells: ["mage hand"],
				selection: ["mage hand"],
			}],
			spellcastingExtra: ["faerie fire", "web", "gaseous form", "arcane eye", "insect plague"],
			spellcastingExtraApplyNonconform: true,
		},
		"subclassfeature7": {
			name: "Writhing Tide",
			source: [["T", 60]],
			minlevel: 7,
			description: desc("As a Bonus Action, I can fly on my swarm for 1 minute: 10 ft Fly Speed and can hover."),
			action: [["bonus action", ""]],
			usages: "Proficiency Bonus per ",
			usagescalc: "event.value = How('Proficiency Bonus');",
			recovery: "Long Rest",
		},
		"subclassfeature11": {
			name: "Mighty Swarm",
			source: [["T", 60]],
			minlevel: 11,
			description: " [improves Gathered Swarm, see above]" +
				desc("Now 1d8 damage, knocks Prone on failed save, or grants me half cover until next turn."),
		},
		"subclassfeature15": {
			name: "Swarming Dispersal",
			source: [["T", 60]],
			minlevel: 15,
			description: desc("As a Reaction when I take damage, I can gain Resistance to that damage and teleport. I vanish into my swarm and teleport to an unoccupied space within 30 ft that I can see."),
			action: [["reaction", ""]],
			usages: "Proficiency Bonus per ",
			usagescalc: "event.value = How('Proficiency Bonus');",
			recovery: "Long Rest",
		},
	},
});

// Warlock Subclasses
AddSubClass("warlock", "the fathomless", {
	regExpSearch: /^(?=.*warlock)(?=.*fathomless).*$/i,
	subname: "the Fathomless",
	subnameShort: "Fathomless",
	source: [["T", 72]],
	features: {
		"subclassfeature3.0": {
			name: "Tentacle of the Deeps",
			source: [["T", 72]],
			minlevel: 3,
			description: desc("As a Bonus Action, I can summon or move a spectral tentacle and make an attack with it. I can summon it to a space within 60 ft that I can see or move an existing one 30 ft. I make melee spell attacks with 10 ft reach with it that deal Cold damage. Creatures hit by the tentacle suffer 10 ft speed reduction until the start of my next turn. The 10-ft long tentacle lasts for 1 minute or until I summon another."),
			action: [["bonus action", " (summon/move)"]],
			usages: (typePF ? "Prof" : "Proficiency") + " Bonus per ",
			usagescalc: "event.value = How('Proficiency Bonus');",
			recovery: "Long Rest",
			additional: levels.map(function (n) {
				return (n < 10 ? 1 : 2) + "d8";
			}),
			weaponOptions: [{
				regExpSearch: /^(?=.*tentacle)(?=.*\b(deeps?|spectral)\b).*$/i,
				name: "Tentacle of the Deeps",
				source: [["T", 72]],
				ability: 6,
				type: "Spell",
				damage: [1, 8, "cold"],
				range: "Melee (10 ft)",
				description: "On hit, -10 ft Speed until my next turn starts",
				abilitytodamage: false,
				tentacleOfTheDeeps: true,
				selectNow: true,
			}],
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (v.theWea.tentacleOfTheDeeps && classes.known.warlock.level >= 10) {
							fields.Damage_Die = "2d8";
						};
					},
					"",
					1,
				],
			},
			spellcastingExtra: ["create or destroy water", "thunderwave", "gust of wind", "silence", "lightning bolt", "sleet storm", "control water", "summon elemental", "bigby's hand", "cone of cold"],
		},
		"subclassfeature3.1": {
			name: "Gift of the Sea",
			source: [["T", 72]],
			minlevel: 3,
			description: desc("I have a 40 ft Swim Speed and I can breathe underwater."),
			speed: { swim: { spd: 40, enc: 30 } },
		},
		"subclassfeature6": {
			name: "Oceanic Soul",
			source: [["T", 73]],
			minlevel: 6,
			description: desc("I gain Resistance to Cold damage now that I'm even more at home in the depths. While I'm fully submerged, others who are as well can understand my speech and I theirs."),
			dmgres: ["Cold"],
			spellChanges: {
				"summon elemental": {
					description: "Summon Water Elemental Spirit; obeys commands; takes turn after mine; vanishes at 0 HP (400gp)",
					changes: "My Warlock spell *Summon Elemental* can only call forth an elemental spirit of water.",
				},
			},
		},
		"subclassfeature6.1": {
			name: "Guardian Coil",
			source: [["T", 73]],
			minlevel: 6,
			description: desc("As a Reaction when I or a creature I see in 10 ft of my tentacle is damaged, it can help. The tentacle interposes itself, reducing the damage of the attack for that creature."),
			action: [["reaction", ""]],
			additional: levels.map(function (n) {
				return (n < 10 ? 1 : 2) + "d8 damage reduced";
			}),
		},
		"subclassfeature10": {
			name: "Grasping Tentacles",
			source: [["T", 73]],
			minlevel: 10,
			description: desc("I learn *Evard's Black Tentacles*. Once per Long Rest, I can cast it without using a spell slot. It counts as a Warlock spell for me, but not towards the number of spells I can know. Whenever I cast it, I gain Temporary Hit Points equal to my Warlock level. Moreover, damage can't break my concentration on this spell."),
			action: [["action", ""]],
			additional: levels.map(function (n) {
				return n < 10 ? "" : n + " Temp HP; 1\xD7 per " + (typePF ? "LR" : "Long Rest") + " no SS";
			}),
			spellcastingBonus: [{
				name: "Grasping Tentacles",
				spells: ["evard's black tentacles"],
				selection: ["evard's black tentacles"],
				firstCol: "oncelr+markedbox",
			}],
			calcChanges: {
				spellAdd: [
					function (spellKey, spellObj, spName) {
						if (spellKey === "evard's black tentacles") {
							spellObj.description = "I temp hp; All enter/start in 20-ft rad save or Restrained \x26 3d6 Bludg. dmg/rnd; Str/Dex check escape";
							spellObj.duration = "Conc*, 1 min";
							return true;
						}
					},
					"Whenever I cast *Evard's Black Tentacles*, I gain Temporary Hit Points equal to my Warlock level.\n \u2022 Damage can't break my concentration on this spell.",
				],
			},
		},
		"subclassfeature14": {
			name: "Fathomless Plunge",
			source: [["T", 73]],
			minlevel: 14,
			description: desc("As an action, I can teleport myself and up to 5 willing creatures I can see within 30 ft. We reappear up to 1 mile away, inside or within 30 ft of a body of water I've seen."),
			action: [["action", ""]],
			recovery: "Short Rest",
			usages: 1,
		},
	},
});
AddSubClass("warlock", "the genie", {
	regExpSearch: /^(?=.*warlock)(?=.*(genie|dao|djinni|efreeti|marid)).*$/i,
	subname: "the Genie",
	source: [["T", 73], ["UA:SR", 2]],
	features: {
		"subclassfeature3.0": {
			name: "Choose Genie Kind",
			source: [["T", 73], ["UA:SR", 3]],
			minlevel: 3,
			description: desc('Use the "Choose Feature" button above to choose the kind of genie your patron is.'),
			calcChanges: {
				spellList: [
					function (spList, spName, spType) {
						if (spType.indexOf("bonus") !== -1 && spList.name && /mystic arcanum/i.test(spList.name) && spList.level[0] === 9) {
							spList.extraspells.push("wish");
						} else if (spType.indexOf("bonus") === -1 && spName === "warlock") {
							if (!spList.notspells) spList.notspells = [];
							spList.notspells.push("wish");
						}
					},
					"The Genie patron adds *Wish* as a spell available for my 9th-level Mystic Arcanum selection.",
				],
			},
			choices: ["Dao (earth)", "Djinni (air)", "Efreeti (fire)", "Marid (water)"],
			"dao (earth)": {
				name: "Dao Genie Patron",
				description: desc("My genie patron is a Dao, associated with earth."),
				spellcastingExtra: ["detect evil and good", "sanctuary", "phantasmal force", "spike growth", "create food and water", "meld into stone", "phantasmal killer", "stone shape", "creation", "wall of stone", "wish"],
			},
			"djinni (air)": {
				name: "Djinni Genie Patron",
				description: desc("My genie patron is a Djinni, associated with air."),
				spellcastingExtra: ["detect evil and good", "thunderwave", "gust of wind", "phantasmal force", "create food and water", "wind wall", "greater invisibility", "phantasmal killer", "creation", "seeming", "wish"],
			},
			"efreeti (fire)": {
				name: "Efreeti Genie Patron",
				description: desc("My genie patron is an Efreeti, associated with fire."),
				spellcastingExtra: ["burning hands", "detect evil and good", "phantasmal force", "scorching ray", "create food and water", "fireball", "fire shield", "phantasmal killer", "creation", "flame strike", "wish"],
			},
			"marid (water)": {
				name: "Marid Genie Patron",
				description: desc("My genie patron is a Marid, associated with water."),
				spellcastingExtra: ["detect evil and good", "fog cloud", "blur", "phantasmal force", "create food and water", "sleet storm", "control water", "phantasmal killer", "cone of cold", "creation", "wish"],
			},
			choiceDependencies: [{
				feature: "subclassfeature3.3",
			}, {
				feature: "subclassfeature6",
			}],
		},
		"subclassfeature3.1": {
			name: "Genie's Vessel",
			source: [["T", 73], ["UA:SR", 3]],
			minlevel: 3,
			description: desc("My patron gifts me a magical vessel, a Tiny object, granting me a measure of its power. I choose the vessel's appearance. I can use it as my spellcasting focus for Warlock spells. The vessel's AC is my spell save DC and it has my Warlock level + Proficiency Bonus in HP. If it is destroyed or lost, I can get a replacement with a 1-hour ceremony during a rest."),
		},
		"subclassfeature3.2": {
			name: "Genie's Vessel: Bottled Respite",
			source: [["T", 74], ["UA:SR", 3]],
			minlevel: 3,
			description: desc([
				"As an action, I can vanish and enter the extradimensional space inside my genie's vessel. The vessel stays in its location. The space inside is a 20-ft high, 20-ft radius cylinder.",
				"As a Bonus Action, I can exit my vessel. I exit it early if I die or the vessel is destroyed. I can remain inside for twice my Proficiency Bonus in hours. Objects can be left inside.",
			]),
			limfeaname: "Bottled Respite",
			action: [["action", " (enter)"], ["bonus action", " (eject)"]],
			usages: 1,
			recovery: "Long Rest",
		},
		"subclassfeature3.3": {
			name: "Genie's Wrath",
			source: [["T", 73], ["UA:SR", 3]],
			minlevel: 3,
			description: desc("I can deal bonus damage on my attacks, its type depending on my patron's genie kind. Use the \"Choose Feature\" button above to choose the kind of genie your patron is."),
			choices: ["dao (earth)", "djinni (air)", "efreeti (fire)", "marid (water)"],
			choicesNotInMenu: true,
			"dao (earth)": {
				name: "Dao's Wrath",
				description: " [once on each of my turns]" +
					desc("When I hit an attack, I can have it deal my Prof Bonus in extra Bludgeoning damage."),
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (!v.isDC) {
								fields.Description += (fields.Description ? "; " : "") + "Once per my turn +" + How("Proficiency Bonus") + " bludgeoning damage";
							}
						},
						"Once on each of my turns, I can have one of my attacks that hit deal extra Bludgeoning damage equal to my Proficiency Bonus.",
					],
				},
			},
			"djinni (air)": {
				name: "Djinni's Wrath",
				description: " [once on each of my turns]" +
					desc("When I hit an attack, I can have it deal my Proficiency Bonus in extra Thunder damage."),
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (!v.isDC) {
								fields.Description += (fields.Description ? "; " : "") + "Once per my turn +" + How("Proficiency Bonus") + " thunder damage";
							}
						},
						"Once on each of my turns, I can have one of my attacks that hit deal extra Thunder damage equal to my Proficiency Bonus.",
					],
				},
			},
			"efreeti (fire)": {
				name: "Efreeti's Wrath",
				description: " [once on each of my turns]" +
					desc("When I hit an attack, I can have it deal my Proficiency Bonus in extra Fire damage."),
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (!v.isDC) {
								fields.Description += (fields.Description ? "; " : "") + "Once per my turn +" + How("Proficiency Bonus") + " fire damage";
							}
						},
						"Once on each of my turns, I can have one of my attacks that hit deal extra Fire damage equal to my Proficiency Bonus.",
					],
				},
			},
			"marid (water)": {
				name: "Marid's Wrath",
				description: " [once on each of my turns]" +
					desc("When I hit an attack, I can have it deal my Proficiency Bonus in extra Cold damage."),
				calcChanges: {
					atkAdd: [
						function (fields, v) {
							if (!v.isDC) {
								fields.Description += (fields.Description ? "; " : "") + "Once per my turn +" + How("Proficiency Bonus") + " cold damage";
							}
						},
						"Once on each of my turns, I can have one of my attacks that hit deal extra Cold damage equal to my Proficiency Bonus.",
					],
				},
			},
		},
		"subclassfeature6": {
			name: "Elemental Gift",
			source: [["T", 75], ["UA:SR", 3]],
			minlevel: 6,
			description: desc([
				"I gain Resistance to a damage type depending on my patron's genie kind. Use the \"Choose Feature\" button above to choose the kind of genie your patron is.",
				"As a Bonus Action, I can gain a 30 ft Fly Speed and I can hover, for 10 minutes.",
			]),
			choices: ["dao (earth)", "djinni (air)", "efreeti (fire)", "marid (water)"],
			choicesNotInMenu: true,
			"dao (earth)": {
				name: "Dao's Elemental Gift",
				description: desc([
					"I gain Resistance to Bludgeoning damage.",
					"As a Bonus Action, I can gain a 30 ft Fly Speed and I can hover, for 10 minutes.",
				]),
				action: [["bonus action", " (start fly)"]],
				dmgres: ["Bludgeoning"],
			},
			"djinni (air)": {
				name: "Djinni's Elemental Gift",
				description: desc([
					"I gain Resistance to Thunder damage.",
					"As a Bonus Action, I can gain a 30 ft Fly Speed and I can hover, for 10 minutes.",
				]),
				action: [["bonus action", " (start fly)"]],
				dmgres: ["Thunder"],
			},
			"efreeti (fire)": {
				name: "Efreeti's Elemental Gift",
				description: desc([
					"I gain Resistance to Fire damage.",
					"As a Bonus Action, I can gain a 30 ft Fly Speed and I can hover, for 10 minutes.",
				]),
				action: [["bonus action", " (start fly)"]],
				dmgres: ["Fire"],
			},
			"marid (water)": {
				name: "Marid's Elemental Gift",
				description: desc([
					"I gain Resistance to Cold damage.",
					"As a Bonus Action, I can gain a 30 ft Fly Speed and I can hover, for 10 minutes.",
				]),
				action: [["bonus action", " (start fly)"]],
				dmgres: ["Cold"],
			},
			additional: "Fly 10 min",
			usages: "Prof Bonus per ",
			usagescalc: "event.value = How('Proficiency Bonus');",
			recovery: typePF ? "LR" : "Long Rest",
		},
		"subclassfeature10": {
			name: "Sanctuary Vessel",
			source: [["T", 75], ["UA:SR", 3]],
			minlevel: 10,
			description: desc([
				"When I enter my vessel I can have up to 5 willing creatures I can see in 30 ft join me.",
				"As a Bonus Action, I can eject any number of creatures from my genie's vessel. Everyone is ejected when I leave it, I die, or if the vessel is destroyed. Anyone who remains in the vessel for at least 10 min gains the benefits of a Short Rest. Also, HD spent as part of this Short Rest has my Proficiency Bonus added to the roll.",
			]),
		},
		"subclassfeature14": {
			name: "Limited Wish",
			source: [["T", 75], ["UA:SR", 3]],
			minlevel: 14,
			additional: "1\xD7 per 1d4 Long Rests",
			description: desc("As an action, I can cast a 6th-level or lower spell with a casting time of one action. This can be any spell. It doesn't require any costly components, it simply takes effect."),
			action: [["action", ""]],
			extraLimitedFeatures: [{
				name: "Limited Wish",
				usages: 1,
				recovery: "1d4 LR",
			}],
		},
	},
});

// Wizard Subclasses
AddSubClass("wizard","order of scribes", {
	regExpSearch: /^(?=.*wizard)(?=.*order)(?=.*scribes?).*$|scrivener/i,
	subname: "Order of Scribes",
	subnameShort: "Scribes",
	source: [["T", 77]],
	features: {
		"subclassfeature3.0": {
			name: "Wizardly Quill",
			source: [["T", 77]],
			minlevel: 3,
			description: desc([
				"As a Bonus Action, I can magically create a Tiny quill with the following properties:",
				" \u2022 It doesn't require ink and produces ink in the color of my choice when writing with it.",
				" \u2022 I require only 2 minutes per spell level to transcribe spells into my spellbook with it.",
				" \u2022 As a Bonus Action, I can use it to erase a text written with it if within 5 ft of the text.",
				"The quill disappears if I create another or if I die.",
			]),
			action: [["bonus action", " (create/erase)"]],
		},
		"subclassfeature3.1": {
			name: "Awakened Spellbook",
			source: [["T", 77]],
			minlevel: 3,
			description: desc([
				"My spellbook gains sentience and grants me the following benefits while I am holding it:",
				" \u2022 I can use the book as a spellcasting focus for my Wizard spells.",
				" \u2022 When I cast a Wizard spell using a spell slot, I can temporarily replace its damage type. The new type must appear in my spellbook in a spell of the same level as the spell slot.",
				" \u2022 Once per Long Rest, I can ritual cast a Wizard spell without 10 min extra casting time.",
				"I can replace it over a Short Rest, transferring its spells and sentience to a blank book.",
			]),
			additional: "fast ritual cast",
			usages: 1,
			recovery: "Long Rest",
		},
		"subclassfeature6": {
			name: "Manifest Mind",
			source: [["T", 78]],
			minlevel: 6,
			description: desc([
				"As a Bonus Action, I can have the mind of my awakened spellbook manifest within 60 ft. The spellbook needs to be on my person to do this. The mind is a Tiny spectral object. The mind is intangible, doesn't occupy a space, hovers, and sheds Dim Light in 10 ft. It can hear, see, has 60 ft Darkvision, and telepathically shares with me what it perceives.",
				"As a Bonus Action, I can dismiss it or move it up to 30 ft to an empty space I can see. It can pass through creatures. It stops manifesting if it's over 300 ft from me or I die. It also stops manifesting if *Dispel Magic* is cast on it or the awakened spellbook is no more. I can do this once per Long Rest, or by expending a spell slot (SS 1+) to manifest it again.",
			]),
			action: [["bonus action", " (conjure/move/dismiss)"]],
			usages: 1,
			recovery: "Long Rest",
			altResource: "SS 1+",
		},
		"subclassfeature6.1": {
			name: "Manifest Mind: Cast Spell",
			source: [["T", 78]],
			minlevel: 6,
			description: desc("I can have Wizard spells I cast on my turn originate from the mind while it's manifested."),
			usages: "Proficiency Bonus per ",
			usagescalc: "event.value = How('Proficiency Bonus');",
			recovery: "Long Rest",
		},
		"subclassfeature10": {
			name: "Master Scrivener",
			source: [["T", 78]],
			minlevel: 10,
			description: desc([
				"When I finish a Long Rest, I can write a spell in my awakened spellbook on a blank paper. It must be a level 1 or 2 spell with 1 action casting time. My spellbook must be in 5 ft.",
				"As an action, I can use this scroll to cast the spell on it at one higher level than normal. Only I can use the scroll. The scroll turns blank again when I use it or finish a Long Rest. Also, using my Wizardly Quill, the gold and time I need to craft spell scrolls is halved.",
			]),
			action: [["action", " (cast scroll)"]],
			usages: 1,
			recovery: "Long Rest",
			spellcastingBonus: [{
				name: "Master Scrivener scroll",
				"class": "wizard",
				level: [1, 2],
				firstCol: "MS",
			}],
			calcChanges: {
				spellAdd: [
					function (spellKey, spellObj, spName, isDuplicate) {
						if (!isDuplicate && spName === "wizard" && spellObj.firstCol === "MS" && (spellObj.level === 1 || spellObj.level === 2)) {
							// Calculate upcasting to be exactly 1 level higher
							var rxMatch = /(\d*d?\d+)\+(\d*d?\d+)\/(\d*SL)\b/i;
							while (rxMatch.test(spellObj.description)) {
								var aMatch = spellObj.description.match(rxMatch);
								var strDie1 = !isNaN(aMatch[1]) ? true : /\d+d\d+/i.test(aMatch[1]) ? aMatch[1].replace(/\d+(d\d+)/i, "$1") : false;
								var strDie2 = !isNaN(aMatch[2]) ? true : /\d+d\d+/i.test(aMatch[2]) ? aMatch[2].replace(/\d+(d\d+)/i, "$1") : undefined;
								if (!/^SL$/i.test(aMatch[3])) {
									// only increases if more than 1 level higher spell slot, so nothing we can do with it, just remove all upcasting
									removeSpellUpcasting(spellObj);
								} else if (/^\d/.test(aMatch[1]) && strDie1 === strDie2) {
									// identical type steps (e.g. 1d6+1d6/SL or 3+1/SL), so add the second to the first
									var strNew = (Number(aMatch[1].replace(/^(\d+).*/, "$1")) + Number(aMatch[2].replace(/^(\d+).*/, "$1"))) + aMatch[1].replace(/^\d+(.*)/, "$1");
									spellObj.description = spellObj.description.replace(rxMatch, strNew);
								} else {
									// non-identical steps, so leave the first and second along, but remove the /SL
									spellObj.description = spellObj.description.replace(rxMatch, "$1+$2");
								}
							}
							// Remove costly material components
							spellObj.description = spellObj.description.replace(/ \(\d+ ?gp( cons\.?)?\)/i, "");
							// List only the scroll as a component from the spell
							spellObj.components = "M\u2020";
							spellObj.compMaterial = "Spells cast from spell scrolls don't require any components other than the spell scroll itself.";
							return true;
						}
					},
					"When I finish a Long Rest, I can create a scroll of a spell in my spellbook using my Master Scrivener class feature. I can then cast this spell from the scroll and the spell is cast as if using a spell slot one level higher than its spell level.",
				],
			},
		},
		"subclassfeature14": {
			name: "One with the Word",
			source: [["T", 78]],
			minlevel: 14,
			description: " [see 3rd page Notes]",
			action: [["reaction", " (when damaged)"]],
			advantages: [["Arcana", true]],
			"one with the word": {
				name: "One with the Word",
				extraname: "Order of Scribes 14",
				source: [["T", 78]],
				description: desc([
					"While my awakened spellbook is on my person, I have Advantage on Int (Arcana) checks.",
					"As a Reaction when I take damage while my spellbook's mind is manifested, I can dismiss it. In dismissing the manifested mind like this, I prevent all of the damage taken by me. After doing so, I lose spells with a combined level of 3d6 from my awakened spellbook. If I do not have enough spells left to cover the number rolled, I drop to 0 HP instead. The spells vanish from my spellbook, reappearing only after I finish 1d6 Long Rests. I can't cast spells that I lost this way, even if found on a scroll or in another spellbook.",
				]),
				usages: 1,
				recovery: "Long Rest",
			},
			autoSelectExtrachoices: [{
				extrachoice: "one with the word",
			}],
		},
	},
});

// Feats
FeatsList["artificer initiate"] = {
	name: "Artificer Initiate",
	source: [["T", 79], ["UA:F2", 1]],
	descriptionFull: [
		"You've learned some of an artificer's inventiveness:",
		" \u2022 You learn one cantrip of your choice from the artificer spell list, and you learn one 1st-level spell of your choice from that list. Intelligence is your spellcasting ability for these spells.",
		" \u2022 You can cast this feat's 1st-level spell without a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast the spell using any spell slots you have.",
		" \u2022 You gain proficiency with one type of artisan's tools of your choice, and you can use that type of tool as a spellcasting focus for any spell you cast that uses Intelligence as its spellcasting ability.",
	],
	description: typePF ? "I learn a cantrip and a 1st-level spell from the Artificer's spell list. Int is my spellcasting ability for these. Once per Long Rest, I can cast the 1st-level spell at its lowest level without using a spell slot. I gain proficiency in one artisan's tool, which I can use as a spellcasting focus for spells I cast with Int as spellcasting ability." : "I learn one cantrip and one 1st-level spell from the Artificer's spell list. Intelligence is my spellcasting ability for these. I can cast the 1st-level spell at its lowest level once per Long Rest without using a spell slot. I gain proficiency in one artisan's tool, which I can use as a spellcasting focus for any spell I cast that uses Intelligence as its spellcasting ability.",
	spellcastingBonus: [{
		name: "Artificer cantrip",
		spellcastingAbility: 4,
		allowUpCasting: true,
		"class": "artificer",
		level: [0, 0],
	}, {
		name: "1st-level Artificer spell",
		"class": "artificer",
		level: [1, 1],
		firstCol: "oncelr",
	}],
	toolProfs: [["Artisan's tools", 1]],
};
FeatsList["eldritch adept"] = {
	name: "Eldritch Adept",
	source: [["T", 79], ["UA:F2", 1]],
	descriptionFull: [
		"Studying occult lore, you have unlocked eldritch power within yourself: you learn one Eldritch Invocation option of your choice from the warlock class. If the invocation has a prerequisite of any kind, you can choose that invocation only if you're a warlock who meets the prerequisite.",
		"Whenever you gain a level, you can replace the invocation with another one from the warlock class.",
	],
	description: 'I learn one Eldritch Invocation from the Warlock class for which I meet the prerequisites (2nd page "Choose Feature" button). I can replace this invocation for another whenever I gain a level.',
	bonusClassExtrachoices: [{
		"class": "warlock",
		feature: "eldritch invocations",
		bonus: 1,
	}],
	prerequisite: "Spellcasting or Pact Magic feature",
	prereqeval: function (v) { return v.isSpellcastingClass; },
};
// Fighting Initiate gets every Fighting Style feat as a choice, so it has to be made after all feats are known
RunFunctionAtEnd(function () {
	var oFightingInitiate = {
		name: "Fighting Initiate",
		source: [["T", 80], ["UA:F2", 2]],
		descriptionFull: [
			"Your martial training has helped you develop a particular style of fighting. As a result, you learn one Fighting Style option of your choice from the fighter class. If you already have a style, the one you choose must be different.",
			"Whenever you reach a level that grants the Ability Score Improvement feature, you can replace this feat's fighting style with another one from the fighter class that you don't have.",
		],
		description: "I gain one Fighting Style feat of my choice, which must be one that I don't yet have. I can replace this Fighting Style with another whenever I gain an Ability Score Improvement.",
		prerequisite: "Proficiency with a Martial weapon",
		prereqeval: function (v) {
			return v.martialWeaponsProf || v.otherWeaponsProf.some(function (n) {
				return WeaponsList[n] && /Martial/i.test(WeaponsList[n].type);
			});
		},
		choices: [],
		choicesFightingStyles: true, // To tell the sheet to include this when testing which fighting styles were selected
	};
	// The choice is named like the choices of a class' Fighting Style feature, so that GetFightingStyleSelection() returns the same key for both
	var prereqevalFightingStyle = function (v) {
		var oSelected = GetFightingStyleSelection();
		var oChoice = FeatsList["fighting initiate"] ? FeatsList["fighting initiate"][v.choice] : false;
		var aKeys = oChoice && oChoice.fightingStyleFeat && oChoice.fightingStyleFeat !== v.choice ? [v.choice, oChoice.fightingStyleFeat] : [v.choice];
		for (var i = 0; i < aKeys.length; i++) {
			var aFound = oSelected[aKeys[i]];
			// Found, and not as the current selection of this feat itself
			if (aFound && !(aFound[0] === "feats" && aFound[1] === "fighting initiate")) return false;
		}
		return true;
	};
	for (var sFeat in FeatsList) {
		var oFeat = FeatsList[sFeat];
		if (!/fighting style/i.test(oFeat.type)) continue;
		var sChoice = oFeat.sortname ? oFeat.sortname : oFeat.name;
		var sChoiceLC = sChoice.toLowerCase();
		if (oFightingInitiate[sChoiceLC]) continue;
		oFightingInitiate.choices.push(sChoice);
		oFightingInitiate[sChoiceLC] = {
			name: "Fighting Initiate: " + oFeat.name,
			// The note about replacing it is left out if the description of the Fighting Style is too long to fit with it
			description: oFeat.description + (oFeat.description.length > 250 ? "" : " I can replace this Fighting Style when I gain an ASI."),
			prerequisite: "The " + oFeat.name + " Fighting Style is not selected anywhere else",
			prereqeval: prereqevalFightingStyle,
			fightingStyleFeat: sFeat,
		};
		// Copy everything else the Fighting Style feat does
		for (var sAttr in oFeat) {
			if (oFightingInitiate[sChoiceLC][sAttr] !== undefined || /^(type|sortname|choices|selfChoosing|defaultExcluded|allowDuplicates|description(ClassFeature|Full)|calculate)$/.test(sAttr)) continue;
			oFightingInitiate[sChoiceLC][sAttr] = oFeat[sAttr];
		}
	}
	oFightingInitiate.choices.sort();
	FeatsList["fighting initiate"] = oFightingInitiate;
});
FeatsList["gunner"] = {
	name: "Gunner",
	source: [["T", 80], ["UA:F2", 2]],
	descriptionFull: [
		"You have a quick hand and keen eye when employing firearms, granting you the following benefits:",
		" \u2022 Increase your Dexterity score by 1, to a maximum of 20.",
		" \u2022 You gain proficiency with firearms (see \"Firearms\" in the Dungeon Master's Guide).",
		" \u2022 You ignore the loading property of firearms.",
		" \u2022 Being within 5 feet of a hostile creature doesn't impose disadvantage on your ranged attack rolls.",
	],
	description: "I gain proficiency with firearms. I ignore the Loading property of firearms. I don't suffer Disadvantage on ranged attack rolls for being within 5 ft of a hostile creature. [+1 Dexterity]",
	scores: [0, 1, 0, 0, 0, 0],
	weaponProfs: [false, false, ["Firearms"]],
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (/firearm/i.test(v.theWea.type) || /firearm/i.test(v.theWea.list) || /firearm/i.test(v.theWea.ammo)) {
					fields.Description = fields.Description.replace(/([;,]? ?loading|loading[;,]? ?)/i, "");
				};
			},
			"I ignore the Loading property of firearms.",
		],
	},
};
FeatsList["metamagic adept"] = {
	name: "Metamagic Adept",
	source: [["T", 80], ["UA:F2", 2]],
	descriptionFull: [
		"You've learned how to exert your will on your spells to alter how they function:",
		" \u2022 You learn two Metamagic options of your choice from the sorcerer class. You can use only one Metamagic option on a spell when you cast it, unless the option says otherwise. Whenever you reach a level that grants the Ability Score Improvement feature, you can replace one of these Metamagic options with another one from the sorcerer class.",
		" \u2022 You gain 2 sorcery points to spend on Metamagic (these points are added to any sorcery points you have from another source but can be used only on Metamagic). You regain all spent sorcery points when you finish a long rest.",
	],
	description: 'I learn two Metamagic options from the Sorcerer class (2nd page "Choose Feature" button). I can use only one option on a spell unless it says otherwise. I gain 2 sorcery points, which I can only use for Metamagic. I regain all expended sorcery points when I finish a Long Rest. I can change one ' + (typePF ? "" : "Metamagic option ") + "whenever I gain an " + (typePF ? "ASI" : "Ability Score Improvement") + ".",
	bonusClassExtrachoices: [{
		"class": "sorcerer",
		feature: "metamagic",
		bonus: 2,
	}],
	extraLimitedFeatures: [{
		name: "Sorcery Points",
		usages: 2,
		recovery: "Long Rest",
		addToExisting: true,
	}],
	prerequisite: "Spellcasting or Pact Magic feature",
	prereqeval: function (v) { return v.isSpellcastingClass; },
};

// Spells
// [dupl_start] reprint spells from Sword Coast Adventure Guide (after 2020 errata)
if (!SourceList["S"]) {
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
} // dupl_end
SpellsList["dream of the blue veil"] = {
	name: "Dream of the Blue Veil",
	classes: ["bard", "sorcerer", "warlock", "wizard"],
	source: [["T", 106]],
	level: 7,
	school: "Conj",
	time: "10 min",
	range: "20 ft",
	components: "V,S,M\u0192",
	compMaterial: "A magic item or a willing creature from the destination world",
	duration: "6 hours",
	description: "9 willing crea Unconscious for duration, after that travel to origin material plane of magic item or crea",
	descriptionFull: [
		"You and up to eight willing creatures within range fall unconscious for the spell's duration and experience visions of another world on the Material Plane, such as Oerth, Toril, Krynn, or Eberron. If the spell reaches its full duration, the visions conclude with each of you encountering and pulling back a mysterious blue curtain. The spell then ends with you mentally and physically transported to the world that was in the visions.",
		"To cast this spell, you must have a magic item that originated on the world you wish to reach, and you must be aware of the world's existence, even if you don't know the world's name. Your destination in the other world is a safe location within 1 mile of where the magic item was created. Alternatively, you can cast the spell if one of the affected creatures was born on the other world, which causes your destination to be a safe location within 1 mile of where that creature was born.",
		"The spell ends early on a creature if that creature takes any damage, and the creature isn't transported. If you take any damage, the spell ends for you and all the other creatures, with none of you being transported.",
	],
};
SpellsList["intellect fortress"] = {
	name: "Intellect Fortress",
	classes: ["artificer", "bard", "sorcerer", "warlock", "wizard"],
	source: [["T", 107]],
	level: 3,
	school: "Abjur",
	time: "1 a",
	range: "30 ft",
	components: "V",
	duration: "Conc, 1 h",
	description: "1+1/SL crea, each max 30 ft apart, has Psychic damage Resistance and Adv on Int, Wis, and Cha saves",
	descriptionFull: [
		"For the duration, you or one willing creature you can see within range has resistance to psychic damage, as well as advantage on Intelligence, Wisdom, and Charisma saving throws.",
		"***At Higher Levels***. When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd. The creatures must be within 30 feet of each other when you target them.",
	],
};
SpellsList["spirit shroud"] = {
	name: "Spirit Shroud",
	classes: ["cleric", "paladin", "warlock", "wizard"],
	source: [["T", 108]],
	level: 3,
	school: "Necro",
	time: "1 bns",
	range: "S:10-ft rad",
	components: "V,S",
	duration: "Conc, 1 min",
	description: "My atks +1d8+1d8/2SL Cold/Necro/Radiant dmg, no heal until next turn; any crea I see -10 ft spd",
	descriptionShorter: "My atks +1d8+1d8/2SL Cold/Necro/Radiant dmg, no heal 1 rnd; any crea -10 ft spd",
	descriptionFull: [
		"You call forth spirits of the dead, which flit around you for the spell's duration. The spirits are intangible and invulnerable.",
		"Until the spell ends, any attack you make deals 1d8 extra damage when you hit a creature within 10 feet of you. This damage is radiant, necrotic, or cold (your choice when you cast the spell). Any creature that takes this damage can't regain hit points until the start of your next turn.",
		"In addition, any creature of your choice that you can see that starts its turn within 10 feet of you has its speed reduced by 10 feet until the start of your next turn.",
		"***At Higher Levels***. When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for every two slot levels above 3rd.",
	],
	dynamicDamageBonus: {
		multipleDmgTypes: {
			dmgTypes: ["cold", "necrotic", "radiant"],
			inDescriptionAs: "Cold/Necro/Radiant",
		},
	},
};
SpellsList["summon shadowspawn"] = {
	name: "Summon Shadowspawn",
	classes: ["warlock", "wizard"],
	source: [["T", 113]],
	level: 3,
	school: "Conj",
	time: "Act",
	range: "90 ft",
	components: "V,S,M\u0192",
	compMaterial: "Tears inside a gem worth at least 300 gp",
	duration: "Conc, 1 h",
	description: "Summon choice of Shadow Spirit; obeys commands; takes turn after mine; disappears at 0 hp (300gp)",
	descriptionFull: [
		"You call forth a shadowy spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Shadow Spirit stat block. When you cast the spell, choose an emotion: Fury, Despair, or Fear. The creature resembles a misshapen biped marked by the chosen emotion, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.",
		"The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger.",
		"***At Higher Levels***. When you cast this spell using a spell slot of 5th level or higher, use the higher level wherever the spell's level appears in the stat block.",
	],
};
SpellsList["tasha's caustic brew"] = {
	name: "Tasha's Caustic Brew",
	nameAlt: "Caustic Brew",
	classes: ["artificer", "sorcerer", "wizard"],
	source: [["T", 115]],
	level: 1,
	school: "Evoc",
	time: "Act",
	range: "S:30-ft line",
	components: "V,S,M",
	compMaterial: "A bit of rotten food",
	duration: "Conc, 1 min",
	save: "Dex",
	description: "30-ft long 5-ft wide all save or 2d4+2d4/SL Acid dmg at start of turn; action to clean self or adjacent",
	descriptionShorter: "30-ft long 5-ft wide all save or 2d4+2d4/SL Acid dmg at turn start; 1 a clean self/adjacent",
	descriptionFull: [
		"A stream of acid emanates from you in a line 30 feet long and 5 feet wide in a direction you choose. Each creature in the line must succeed on a Dexterity saving throw or be covered in acid for the spell's duration or until a creature uses its action to scrape or wash the acid off itself or another creature. A creature covered in the acid takes 2d4 acid damage at start of each of its turns.",
		"***At Higher Levels***. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 2d4 for each slot level above 1st.",
	],
};
SpellsList["tasha's mind whip"] = {
	name: "Tasha's Mind Whip",
	nameAlt: "Mind Whip",
	regExpSearch: /^(?=.*mind)(?=.*(whip|thrust)).*$/i, // "Mind Thrust" in UA:POR
	classes: ["sorcerer", "wizard"],
	source: [["T", 115], ["UA:POR", 8]],
	level: 2,
	school: "Ench",
	time: "Act",
	range: "90 ft",
	components: "V",
	duration: "1 rnd",
	save: "Int",
	description: "1+1/SL crea, max 30 ft apart; 3d6 Psychic dmg; no rea; only move, act, or bns; save half, no act limit",
	descriptionShorter: "1+1/SL crea, max 30 ft apart; 3d6 Psychic dmg; no rea; move, act, or bns; save half, no act limit",
	descriptionFull: [
		"You psychically lash out at one creature you can see within range. The target must make an Intelligence saving throw. On a failed save, the target takes 3d6 psychic damage, and it can't take a reaction until the end of its next turn. Moreover, on its next turn, it must choose whether it gets a move, an action, or a bonus action; it gets only one of the three. On a successful save, the target takes half as much damage and suffers none of the spell's other effects.",
		"***At Higher Levels***. When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd. The creatures must be within 30 feet of each other when you target them.",
	],
};
SpellsList["tasha's otherworldly guise"] = {
	name: "Tasha's Otherworldly Guise",
	nameShort: "T's Otherworldly Guise",
	nameAlt: "Otherworldly Guise",
	classes: ["sorcerer", "warlock", "wizard"],
	source: [["T", 116]],
	level: 6,
	school: "Trans",
	time: "Bns",
	range: "Self",
	components: "V,S,M\u0192",
	compMaterial: "An object engraved with a symbol of the Outer Planes, worth at least 500 gp",
	duration: "Conc, 1 min",
	description: "Fire/Poison or Radiant/Necrotic/Charm Immune; 40 ft fly; +2 AC; 2 atks; spellcast. abi atks (500gp)",
	descriptionFull: [
		"Uttering an incantation, you draw on the magic of the Lower Planes or Upper Planes (your choice) to transform yourself. You gain the following benefits until the spell ends:",
		" \u2022 You are immune to fire and poison damage (Lower Planes) or radiant and necrotic damage (Upper Planes).",
		" \u2022 You are immune to the poisoned condition (Lower Planes) or the charmed condition (Upper Planes).",
		" \u2022 Spectral wings appear on your back, giving you a flying speed of 40 feet.",
		" \u2022 You have a +2 bonus to AC.",
		" \u2022 All your weapon attacks are magical, and when you make a weapon attack, you can use your spellcasting ability modifier, instead of Strength or Dexterity, for the attack and damage rolls.",
		" \u2022 You can attack twice, instead of once, when you take the Attack action on your turn. You ignore this benefit if you already have a feature, like Extra Attack, that lets you attack more than once when you take the Attack action on your turn.",
	],
};

// Magic Items
// Magic Items - Tattoos
var TCoE_magicTattoosDescription = [
	"***Tattoo Attunement***. To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin.",
	"If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in your space.",
	"***Magic Tattoos*** (TCoE 118)",
	"Blending magic and artistry with ink and needles, magic tattoos imbue their bearers with wondrous abilities. Magic tattoos are initially bound to magic needles, which transfer their magic to a creature.",
	"Once inscribed on a creature's body, damage or injury doesn't impair the tattoo's function, even if the tattoo is defaced. When applying a magic tattoo, a creature can customize the tattoo's appearance. A magic tattoo can look like a brand, scarification, a birthmark, patterns of scale, or any other cosmetic alteration.",
	"The rarer a magic tattoo is, the more space it typically occupies on a creature's skin. The table below offers guidelines for how large a given tattoo is.",
	[
		["Tattoo Rarity", "Area Covered"],
		["  Common     ", "One hand or foot or a quarter of a limb"],
		["  Uncommon   ", "Half a limb or the scalp"],
		["  Rare", "", "One limb"],
		["  Very Rare  ", "Two limbs or the chest or upper back"],
		["  Legendary  ", "Two limbs and the torso"],
	],
];
MagicItemsList["absorbing tattoo"] = function () {
	var oObj = {
		name: "Absorbing Tattoo",
		source: [["T", 119]],
		type: "Wondrous Item (Tattoo)",
		rarity: "Very Rare",
		attunement: true,
		description: "When I attune to this magic needle, it disappears and I gain a magical tattoo of a design of my choosing. It grants me Resistance to a damage type. As a Reaction once per dawn when I take that type of damage, I can gain Immunity against that instance of damage and recover half the damage as HP.",
		descriptionFull: [
			"Produced by a special needle, this magic tattoo features designs that emphasize one color.",
			"***Damage Resistance***. While the tattoo is on your skin, you have resistance to a type of damage associated with that color, as shown on the table below. The DM chooses the color or determines it randomly.",
			[
				["d10", "Damage Type", "Color"],
				["   1", "Acid", "", "Green"],
				["   2", "Cold", "", "Blue"],
				["   3", "Fire", "", "Red"],
				["   4", "Force", "", "White"],
				["   5", "Lightning  ", "Yellow"],
				["   6", "Necrotic", "", "Black"],
				["   7", "Poison", "", "Violet"],
				["   8", "Psychic", "", "Silver"],
				["   9", "Radiant", "", "Gold"],
				[" 10", "Thunder", "", "Orange"],
			],
			"***Damage Absorption***. When you take damage of the chosen type, you can use your reaction to gain immunity against that instance of the damage, and you regain a number of hit points equal to half the damage you would have taken. Once this reaction is used, it can't be used again until the next dawn.",
		].concat(TCoE_magicTattoosDescription),
		usages: 1,
		recovery: "dawn",
		additional: "Immunity",
		choices: ["Acid (green)", "Cold (blue)", "Fire (red)", "Force (white)", "Lightning (yellow)", "Necrotic (black)", "Poison (violet)", "Psychic (silver)", "Radiant (gold)", "Thunder (orange)"],
	};
	var sDescr = "When I attune to this magic needle, it disappears and I gain a COLOR magical tattoo of a design of my choosing. It grants me Resistance to TYPE damage. As a Reaction once per dawn when I take TYPE damage, I can gain Immunity against that instance of damage and recover half the damage as HP.";
	for (var i = 0; i < oObj.choices.length; i++) {
		var aType = oObj.choices[i].split(/ \(|\)/g);
		oObj[oObj.choices[i].toLowerCase()] = {
			name: aType[0] + " Absorbing Tattoo",
			sortname: "Absorbing Tattoo, " + aType[0],
			description: sDescr.replace(/TYPE/g, aType[0]).replace(/COLOR/g, aType[1]),
			dmgres: [aType[0]],
			action: [["reaction", " (Immunity)"]],
		}
	}
	return oObj;
}();
MagicItemsList["barrier tattoo"] = {
	name: "Barrier Tattoo",
	source: [["T", 122]],
	type: "Wondrous Item (Tattoo)",
	description: "This magic tattoo depicts protective imagery and uses ink that resembles liquid metal. While not wearing armor, this tattoo grants me an Armor Class related to the rarity of the tattoo.",
	descriptionFull: [
		"Produced by a special needle, this magic tattoo depicts protective imagery and uses ink that resembles liquid metal.",
		"***Protection***. While you aren't wearing armor, the tattoo grants you an Armor Class depending on the tattoo's rarity, as shown below. You can use a shield and still gain this benefit.",
		[
			["Tattoo Rarity", "AC"],
			["  Uncommon", "12 + your Dexterity modifier"],
			["  Rare", "", "15 + your Dexterity modifier (maximum of +2)"],
			["  Very Rare", "18"],
		],
	].concat(TCoE_magicTattoosDescription),
	attunement: true,
	choices: ["AC 12+Dex (uncommon)", "AC 15+Dex (rare)", "AC 18 (very rare)"],
	"ac 12+dex (uncommon)": {
		name: "Barrier Tattoo (uncommon)",
		rarity: "Uncommon",
		description: "When I attune to this magic needle, it disappears and I gain a magical tattoo of a design of my choosing featuring protective imagery. While I'm not wearing armor, the tattoo grants me an AC of 12 + my Dexterity modifier. I can use a shield and still gain this benefit.",
		armorOptions: [{
			regExpSearch: /^(?=.*barrier)(?=.*tattoo).*$/i,
			name: "Barrier Tattoo",
			source: [["T", 122]],
			ac: 12,
			affectsWildShape: true,
			selectNow: true,
		}],
	},
	"ac 15+dex (rare)": {
		name: "Barrier Tattoo (rare)",
		rarity: "Rare",
		description: "When I attune to this magic needle, it disappears and I gain a magical tattoo of a design of my choosing featuring protective imagery. While I'm not wearing armor, the tattoo grants me an AC of 15 + my Dexterity modifier (maximum of +2). I can use a shield and still gain this benefit.",
		armorOptions: [{
			regExpSearch: /^(?=.*barrier)(?=.*tattoo).*$/i,
			name: "Barrier Tattoo",
			source: [["T", 122]],
			ac: 15,
			dex: 2,
			affectsWildShape: true,
			selectNow: true,
		}],
	},
	"ac 18 (very rare)": {
		name: "Barrier Tattoo (very rare)",
		rarity: "Very Rare",
		description: "When I attune to this magic needle, it disappears and I gain a magical tattoo of a design of my choosing featuring protective imagery. While I'm not wearing armor, the tattoo grants me an AC of 18. I can use a shield and still gain this benefit.",
		armorOptions: [{
			regExpSearch: /^(?=.*barrier)(?=.*tattoo).*$/i,
			name: "Barrier Tattoo",
			source: [["T", 122]],
			ac: 18,
			dex: -10,
			affectsWildShape: true,
			selectNow: true,
		}],
	},
}
MagicItemsList["blood fury tattoo"] = {
	name: "Blood Fury Tattoo",
	source: [["T", 122]],
	type: "Wondrous Item (Tattoo)",
	rarity: "Legendary",
	attunement: true,
	description: "This magical tattoo has 10 charges, regaining all at dawn. As a Reaction when a creature I can see damages me, I can use 1 charge to make a melee attack with Advantage against it. When I hit a creature with a melee attack, I can use 1 charge to deal it 4d6 Necrotic damage and regain the same amount in Hit Points.",
	descriptionFull: [
		"Produced by a special needle, this magic tattoo evokes fury in its form and colors.",
		"***Bloodthirsty Strikes***. The tattoo has 10 charges, and it regains all expended charges daily at dawn. While this tattoo is on your skin, you gain the following benefits:",
		" \u2022 When you hit a creature with a weapon attack, you can expend a charge to deal an extra 4d6 necrotic damage to the target, and you regain a number of hit points equal to the necrotic damage dealt.",
		" \u2022 When a creature you can see damages you, you can expend a charge and use your reaction to make a melee attack against that creature, with advantage on your attack roll.",
	].concat(TCoE_magicTattoosDescription),
	usages: 10,
	recovery: "dawn",
	action: [["reaction", " (after taking damage)"]],
}
MagicItemsList["coiling grasp tattoo"] = {
	name: "Coiling Grasp Tattoo",
	source: [["T", 123]],
	type: "Wondrous Item (Tattoo)",
	rarity: "Uncommon",
	attunement: true,
	description: "This magical tattoo features intertwining designs. As an action, I can have a creature I can see within 15 ft make a DC 14 Str save or take 3d6 Force damage and be Grappled. It can use its action to try and escape (DC 14 Athletics/Acrobatics). Grapple ends if I halt it, use it again, or if the target is more than 15 ft away.",
	descriptionFull: [
		"Produced by a special needle, this magic tattoo has long intertwining designs.",
		"***Grasping Tendrils***. While the tattoo is on your skin, you can, as an action, cause the tattoo to extrude into inky tendrils, which reach for a creature you can see within 15 feet of you. The creature must succeed on a DC 14 Strength saving throw or take 3d6 force damage and be grappled by you. As an action, the creature can escape the grapple by succeeding on a DC 14 Strength (Athletics) or Dexterity (Acrobatics) check. The grapple also ends if you halt it (no action required), if the creature is ever more than 15 feet away from you, or if you use this tattoo on a different creature.",
	].concat(TCoE_magicTattoosDescription),
	action: [["action", ""]],
	weaponOptions: [{
		regExpSearch: /^(?=.*coiling grasp)(?=.*tattoo).*$/i,
		name: "Coiling Grasp Tattoo",
		source: [["T", 123]],
		ability: 0,
		type: "Magic Item",
		damage: [3, 6, "force"],
		range: "15 ft",
		description: "Str save, success - no damage, fail - Grappled; Escape DC 14 Athletics/Acrobatics",
		abilitytodamage: false,
		dc: true,
		modifiers: [6, ""],
		selectNow: true,
	}],
}
MagicItemsList["eldritch claw tattoo"] = {
	name: "Eldritch Claw Tattoo",
	source: [["T", 126]],
	type: "Wondrous Item (Tattoo)",
	rarity: "Uncommon",
	attunement: true,
	description: "This magical tattoo featuring clawlike forms makes my unarmed strikes magical with a +1 bonus to attack and damage. As a Bonus Action once per dawn, I can have it empower me for 1 minute so that all my melee attacks with weapons and unarmed strikes have 15 ft reach and deal an extra 1d6 Force damage.",
	descriptionFull: [
		"Produced by a special needle, this magic tattoo depicts clawlike forms and other jagged shapes.",
		"***Magical Strikes***. While the tattoo is on your skin, your unarmed strikes are considered magical for the purpose of overcoming immunity and resistance to nonmagical attacks, and you gain a +1 bonus to attack and damage rolls with unarmed strikes.",
		"***Eldritch Maul***. As a bonus action, you can empower the tattoo for 1 minute. For the duration, each of your melee attacks with a weapon or an unarmed strike can reach a target up to 15 feet away from you, as inky tendrils launch toward the target. In addition, your melee attacks deal an extra 1d6 force damage on a hit. Once used, this bonus action can't be used again until the next dawn.",
	].concat(TCoE_magicTattoosDescription),
	usages: 1,
	recovery: "dawn",
	additional: "Eldritch Maul",
	action: [["bonus action", " (Eldritch Maul)"]],
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if ((v.baseWeaponName === "unarmed strike" || v.isMeleeWeapon) && /eldritch (claw|maul)/i.test(v.WeaponTextName)) {
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, "");
					if (fields.Range.toLowerCase() === "melee") {
						fields.Range = "Melee (15 ft reach)";
						fields.Description += (fields.Description ? "; " : "") + "+1d6 force damage";
					} else {
						fields.Description += (fields.Description ? "; " : "") + "15 ft reach; +1d6 force damage";
					}
				};
			},
			"If I include the words 'Eldritch Maul' or 'Eldritch Claw' in the name of a melee weapon or an unarmed strike, it gets +10 ft reach and +1d6 Force damage.",
			700,
		],
		atkCalc: [
			function (fields, v, output) {
				if (v.baseWeaponName === "unarmed strike") {
					output.magic += 1;
				}
			}, "",
		],
	},
}
MagicItemsList["ghost step tattoo"] = {
	name: "Ghost Step Tattoo",
	source: [["T", 128]],
	type: "Wondrous Item (Tattoo)",
	rarity: "Very Rare",
	attunement: true,
	description: "As a Bonus Action 3 times per day, I can become incorporeal until my next turn ends. While incorporeal, I can't be Grappled or Restrained, gain nonmagical Bludgeoning, Piercing, and Slashing damage Resistance, and can move through creatures or objects as difficult terrain (1d10 Force damage if I end my turn in one).",
	descriptionFull: [
		"Produced by a special needle, this tattoo shifts and wavers on the skin, parts of it appearing blurred.",
		"***Ghostly Form***. The tattoo has 3 charges, and it regains all expended charges daily at dawn. As a bonus action while the tattoo is on your skin, you can expend 1 of the tattoo's charges to become incorporeal until the end of your next turn. For the duration, you gain the following benefits:",
		" \u2022 You have resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks.",
		" \u2022 You can't be grappled or restrained.",
		" \u2022 You can move through creatures and solid objects as if they were difficult terrain. If you end your turn in a solid object, you take 1d10 force damage. If the effect ends while you are inside a solid object, you instead are shunted to the nearest unoccupied space, and you take 1d10 force damage for every 5 feet traveled.",
	].concat(TCoE_magicTattoosDescription),
	usages: 3,
	recovery: "dawn",
	action: [["bonus action", ""]],
}
MagicItemsList["illuminator's tattoo"] = { // contains contributions by lizrdgizrd
	name: "Illuminator's Tattoo",
	source: [["T", 129]],
	type: "Wondrous Item (Tattoo)",
	rarity: "Common",
	attunement: true,
	description: "While this beautiful calligraphy tattoo is on my skin, I can write with my fingertip as if it is an ink pen that never runs out of ink. As an action, I can touch writing up to one page and speak a creature's name, making it invisible to everyone else but me and the creature for up to 24 hours or until I or the creature touch it.",
	descriptionFull: [
		"Produced by a special needle, this magic tattoo features beautiful calligraphy, images of writing implements, and the like.",
		"***Magical Scribing***. While this tattoo is on your skin, you can write with your fingertip as if it were an ink pen that never runs out of ink.",
		"As an action, you can touch a piece of writing up to one page in length and speak a creature's name. The writing becomes invisible to everyone other than you and the named creature for the next 24 hours. Either of you can dismiss the invisibility by touching the script (no action required). Once used, this action can't be used again until the next dawn.",
	].concat(TCoE_magicTattoosDescription),
	usages: 1,
	recovery: "dawn",
	action: [["action", ""]],
}
MagicItemsList["lifewell tattoo"] = {
	name: "Lifewell Tattoo",
	source: [["T", 129]],
	type: "Wondrous Item (Tattoo)",
	rarity: "Very Rare",
	attunement: true,
	description: "When I attune to this magic needle, it disappears and I gain a magical tattoo of a design of my choosing featuring symbols of life and rebirth. It grants me Resistance to Necrotic damage. The first time per dawn when I would be reduced to 0 Hit Points, I drop to 1 Hit Point instead.",
	descriptionFull: [
		"Produced by a special needle, this magic tattoo features symbols of life and rebirth.",
		"***Necrotic Resistance***. You have resistance to necrotic damage.",
		"***Life Ward***. When you would be reduced to 0 hit points, you drop to 1 hit point instead. Once used, this property can't be used again until the next dawn.",
	].concat(TCoE_magicTattoosDescription),
	usages: 1,
	recovery: "dawn",
	dmgres: ["Necrotic"],
}
MagicItemsList["masquerade tattoo"] = {
	name: "Masquerade Tattoo",
	source: [["T", 131]],
	type: "Wondrous Item (Tattoo)",
	rarity: "Common",
	attunement: true,
	description: "When I attune to this magic needle, it disappears and I gain a magical tattoo. As a Bonus Action, I can change its size, color, pattern, and location on my skin to whatever I want, but it's always obviously a tattoo. As an action once per dawn, I can use the tattoo to cast *Disguise Self* (DC 13 to discern the disguise).",
	descriptionFull: [
		"Produced by a special needle, this magic tattoo appears on your body as whatever you desire.",
		"***Fluid Ink***. As a bonus action, you can shape the tattoo into any color or pattern and move it to any area of your skin. Whatever form it takes, it is always obviously a tattoo. It can range in size from no smaller than a copper piece to an intricate work of art that covers all your skin.",
		"***Disguise Self***. As an action, you can use the tattoo to cast the *disguise self* spell (DC 13 to discern the disguise). Once the spell is cast from the tattoo, it can't be cast from the tattoo again until the next dawn.",
	].concat(TCoE_magicTattoosDescription),
	usages: 1,
	recovery: "dawn",
	additional: "Disguise Self",
	action: [["bonus action", " (change)"]],
	fixedDC: 13,
	spellcastingBonus: [{
		name: "Disguise Self",
		spells: ["disguise self"],
		selection: ["disguise self"],
		firstCol: "onceday",
	}],
}
MagicItemsList["shadowfell brand tattoo"] = { // contains contributions by lizrdgizrd
	name: "Shadowfell Brand Tattoo",
	source: [["T", 134]],
	type: "Wondrous Item (Tattoo)",
	rarity: "Rare",
	attunement: true,
	description: "When I attune to this magic needle, it disappears and I gain a dark, abstract magical tattoo. It gives me Darkvision with a range of 60 ft and Advantage on Dexterity (Stealth) checks. As a Reaction once per sunset when I take damage, I can become insubstantial for a moment, halving the damage I take.",
	descriptionFull: [
		"Produced by a special needle, this magic tattoo is dark in color and abstract.",
		"***Shadow Essence***. You gain darkvision with a range of 60 feet, and you have advantage on Dexterity (Stealth) checks.",
		"***Shadowy Defense***. When you take damage, you can use your reaction to become insubstantial for a moment, halving the damage you take. Then the reaction can't be used again until the next sunset.",
	].concat(TCoE_magicTattoosDescription),
	usages: 1,
	recovery: "sunset",
	action: [["reaction", " (halve damage)"]],
	advantages: ["Stealth", true],
	vision: [["Darkvision", 60]],
}
MagicItemsList["spellwrought tattoo"] = {
	name: "Spellwrought Tattoo",
	source: [["T", 135]],
	type: "Wondrous Item (Tattoo)",
	description: "When I hold this magic needle against my skin and speak the command word, it disappears and I gain a magical tattoo. I can use this tattoo to cast its spell, requiring no material components. The tattoo glows faintly while I cast the spell and for the spell's duration. Once the spell ends, the tattoo vanishes.",
	descriptionFull: [
		"Produced by a special needle, this magic tattoo contains a single spell of up to 5th level, wrought on your skin by a magic needle. To use the tattoo, you must hold the needle against your skin and speak the command word. The needle turns into ink that becomes the tattoo, which appears on the skin in whatever design you like. Once the tattoo is there, you can cast its spell, requiring no material components. The tattoo glows faintly while you cast the spell and for the spell's duration. Once the spell ends, the tattoo vanishes from your skin.",
		"The level of the spell in the tattoo determines the spell's saving throw DC, attack bonus, spellcasting ability modifier, and the tattoo's rarity, as shown in the table below.",
		[
			[" Spell", "", "     Spellcasting", "Save", "Attack"],
			" **Level**\t**Rarity**\t     **Ability Mod.**\t **DC**\t**Bonus**",
			["Cantrip", "Common", "", "+3", " 13", "  +5"],
			["  1st", "Common", "", "+3", " 13", "  +5"],
			["  2nd", "Uncommon", "+3", " 13", "  +5"],
			["  3rd", "Uncommon", "+4", " 15", "  +7"],
			["  4th", "Rare", "", "+4", " 15", "  +7"],
			["  5th", "Rare", "", "+5", " 17", "  +9"],
		],
	].concat(TCoE_magicTattoosDescription.slice(2)),
	allowDuplicates: true,
	calcChanges: {
		spellAdd: [
			function (spellKey, spellObj, spName) {
				if (/^spellwrought tattoo/i.test(spName) && !spellObj.spellwroughtTattooProcessed) {
					if (spellObj.components) spellObj.components = spellObj.components.replace(/,?[RM][\u0192\u2020]?/ig, "");
					if (spellObj.compMaterial) spellObj.compMaterial = "Spell cast using a Spellwrought Tattoo, require no material components";
					spellObj.ritual = false;
					["description", "descriptionMetric", "descriptionShorter", "descriptionShorterMetric"].forEach (function (attr) {
						if (!spellObj[attr]) return;
						spellObj[attr] = spellObj[attr].replace(/ \([\d.,k]+ ?gp( cons\.?)?\)/i, "");
					});
					spellObj.spellwroughtTattooProcessed = true;
					return true;
				}
			},
			"When casting a spell using a Spellwrought Tattoo, no material components are needed, and can't be cast as a ritual.",
		],
	},
	choices: ["Cantrip (common)", "1st-level (common)", "2nd-level (uncommon)", "3rd-level (uncommon)", "4th-level (rare)", "5th-level (rare)"],
	choicesNotInMenu: true,
	"cantrip (common)": {
		name: "Spellwrought Tattoo (cantrip)",
		sortname: "Spellwrought Tattoo  (cantrip)",
		rarity: "Common",
		description: "When I put this needle on my skin and speak its command word, it disappears and I gain a magical tattoo. I can use this tattoo to cast its cantrip, requiring no material components, with DC 13, +5 spell attack. It glows faintly while I cast the spell and for the spell's duration. Once the spell ends, the tattoo vanishes.",
		fixedDC: 13,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: [{
			level: [0,0],
			psionic: false,
			times: 20,
			firstCol: "checkbox",
			magicItemComponents: false,
		}],
	},
	"1st-level (common)": {
		name: "Spellwrought Tattoo (1st-level)",
		rarity: "Common",
		description: "When I put this needle on my skin and speak its command word, it disappears and I gain a magical tattoo. I can use this tattoo to cast its 1st-level spell, requiring no material components, with DC 13, +5 spell attack. It glows faintly while I cast the spell and for the spell's duration. Once the spell ends, the tattoo vanishes.",
		fixedDC: 13,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: [{
			level: [1,1],
			psionic: false,
			times: 20,
			firstCol: "checkbox",
			magicItemComponents: false,
		}],
	},
	"2nd-level (uncommon)": {
		name: "Spellwrought Tattoo (2nd-level)",
		rarity: "Uncommon",
		description: "When I put this needle on my skin and speak its command word, it disappears and I gain a magical tattoo. I can use this tattoo to cast its 2nd-level spell, requiring no material components, with DC 13, +5 spell attack. It glows faintly while I cast the spell and for the spell's duration. Once the spell ends, the tattoo vanishes.",
		fixedDC: 13,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: [{
			level: [2,2],
			psionic: false,
			times: 20,
			firstCol: "checkbox",
			magicItemComponents: false,
		}],
	},
	"3rd-level (uncommon)": {
		name: "Spellwrought Tattoo (3rd-level)",
		rarity: "Uncommon",
		description: "When I put this needle on my skin and speak its command word, it disappears and I gain a magical tattoo. I can use this tattoo to cast its 3rd-level spell, requiring no material components, with DC 15, +7 spell attack. It glows faintly while I cast the spell and for the spell's duration. Once the spell ends, the tattoo vanishes.",
		fixedDC: 15,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: [{
			level: [3,3],
			psionic: false,
			times: 20,
			firstCol: "checkbox",
			magicItemComponents: false,
		}],
	},
	"4th-level (rare)": {
		name: "Spellwrought Tattoo (4th-level)",
		rarity: "Rare",
		description: "When I put this needle on my skin and speak its command word, it disappears and I gain a magical tattoo. I can use this tattoo to cast its 4th-level spell, requiring no material components, with DC 15, +7 spell attack. It glows faintly while I cast the spell and for the spell's duration. Once the spell ends, the tattoo vanishes.",
		fixedDC: 15,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: [{
			level: [4,4],
			psionic: false,
			times: 20,
			firstCol: "checkbox",
			magicItemComponents: false,
		}],
	},
	"5th-level (rare)": {
		name: "Spellwrought Tattoo (5th-level)",
		rarity: "Rare",
		description: "When I put this needle on my skin and speak its command word, it disappears and I gain a magical tattoo. I can use this tattoo to cast its 5th-level spell, requiring no material components, with DC 17, +9 spell attack. It glows faintly while I cast the spell and for the spell's duration. Once the spell ends, the tattoo vanishes.",
		fixedDC: 17,
		spellFirstColTitle: "Us", // used
		spellcastingBonus: [{
			level: [5,5],
			psionic: false,
			times: 20,
			firstCol: "checkbox",
			magicItemComponents: false,
		}],
	},
}
// Magic Items - Bonus to spell attack rolls and saving throw DCs
MagicItemsList["all-purpose tool"] = {
	name: "All-Purpose Tool",
	source: [["T", 119]],
	type: "Wondrous Item",
	attunement: true,
	prerequisite: "Requires attunement by an artificer",
	prereqeval: function (v) { return classes.known.artificer ? true : false; },
	description: "As an action, I can transform this simple screwdriver into any set of artisan's tools and be proficient with them. While holding this tool, I gain a bonus to my Artificer spell attacks and save DCs. As an action once per dawn, I can choose any cantrip that I don't know and cast it as an Artificer cantrip for the next 8 hours.",
	descriptionFull: [
		"This simple screwdriver can transform into a variety of tools; as an action, you can touch the item and transform it into any type of artisan's tool of your choice (see the \"Equipment\" chapter in the Player's Handbook for a list of artisan's tools). Whatever form the tool takes, you are proficient with it.",
		"While holding this tool, you gain a bonus to the spell attack rolls and the saving throw DCs of your artificer spells. The bonus is determined by the tool's rarity.",
		"As an action, you can focus on the tool to channel your creative forces. Choose a cantrip that you don't know from any class list. For 8 hours, you can cast that cantrip, and it counts as an artificer cantrip for you. Once this property is used, it can't be used again until the next dawn.",
	],
	usages: 1,
	recovery: "dawn",
	additional: "choose cantrip",
	spellcastingAbility: "artificer",
	spellFirstColTitle: "8h",
	spellcastingPreparedCantrips: { "class": "any" },
	allowUpCasting: true,
	spellcastingBonus: [{
		name: "Select 1 cantrip or enable",
		"class": "any",
		level: [0, 0],
	}, {
		name: '"Prepare cantrips just like',
		spells: [],
	}, {
		name: 'spells" on the bottom left.',
		spells: [],
	}],
	calcChanges: {
		spellList: [
			function (spList, spName, spType) {
				// Remove the already known cantrips, from any source except magic items
				if (spName.indexOf("all-purpose tool") !== -1) {
					var allSpellsKnown = [];
					for (var sCast in CurrentSpells) {
						if (sCast.refType === "item") continue;
						var oCast = CurrentSpells[sCast];
						if (oCast.selectCa) allSpellsKnown = allSpellsKnown.concat(oCast.selectCa);
						if (oCast.selectBo) allSpellsKnown = allSpellsKnown.concat(oCast.selectBo);
					}
					var knownCantrips = OrderSpells(allSpellsKnown, "single", false, false, 0);
					if (!spList.notspells) spList.notspells = [];
					spList.notspells = spList.notspells.concat(knownCantrips);
				}
			},
		],
	},
	action: [["action", " (transform tool)"], ["action", " (choose cantrip)"]],
	choices: ["+1 to spell attacks and DCs (uncommon)", "+2 to spell attacks and DCs (rare)", "+3 to spell attacks and DCs (very rare)"],
	"+1 to spell attacks and dcs (uncommon)": {
		name: "All-Purpose Tool +1",
		rarity: "Uncommon",
		description: "As an action, I can transform this simple screwdriver into any set of artisan's tools and be proficient with them. While holding this tool, I gain a +1 bonus to my Artificer spell attacks and save DCs. As an action once per dawn, I can choose any cantrip that I don't know and cast it as an Artificer cantrip for the next 8 hours.",
		calcChanges: {
			spellCalc: [
				function (type, spellcasters, ability, spell) {
					if (type !== "prepare" && (spellcasters.indexOf("artificer") !== -1 || (!spellcasters.length && ability === 4 && spell && SpellsList[spell] && SpellsList[spell].level === 0))) return 1;
				},
				"While holding the All-Purpose Tool, I gain a +1 bonus to spell attack rolls and to the saving throw DCs of my Artificer spells.",
			],
		},
	},
	"+2 to spell attacks and dcs (rare)": {
		name: "All-Purpose Tool +2",
		rarity: "Rare",
		description: "As an action, I can transform this simple screwdriver into any set of artisan's tools and be proficient with them. While holding this tool, I gain a +2 bonus to my Artificer spell attacks and save DCs. As an action once per dawn, I can choose any cantrip that I don't know and cast it as an Artificer cantrip for the next 8 hours.",
		calcChanges: {
			spellCalc: [
				function (type, spellcasters, ability, spell) {
					if (type !== "prepare" && (spellcasters.indexOf("artificer") !== -1 || (!spellcasters.length && ability === 4 && spell && SpellsList[spell] && SpellsList[spell].level === 0))) return 2;
				},
				"While holding the All-Purpose Tool, I gain a +2 bonus to spell attack rolls and to the saving throw DCs of my Artificer spells.",
			],
		},
	},
	"+3 to spell attacks and dcs (very rare)": {
		name: "All-Purpose Tool +3",
		rarity: "Very Rare",
		description: "As an action, I can transform this simple screwdriver into any set of artisan's tools and be proficient with them. While holding this tool, I gain a +3 bonus to my Artificer spell attacks and save DCs. As an action once per dawn, I can choose any cantrip that I don't know and cast it as an Artificer cantrip for the next 8 hours.",
		calcChanges: {
			spellCalc: [
				function (type, spellcasters, ability, spell) {
					if (type !== "prepare" && (spellcasters.indexOf("artificer") !== -1 || (!spellcasters.length && ability === 4 && spell && SpellsList[spell] && SpellsList[spell].level === 0))) return 3;
				},
				"While holding the All-Purpose Tool, I gain a +3 bonus to spell attack rolls and to the saving throw DCs of my Artificer spells.",
			],
		},
	},
}
MagicItemsList["amulet of the devout"] = { // contains contributions by lizrdgizrd
	name: "Amulet of the Devout",
	source: [["T", 119]],
	type: "Wondrous Item",
	attunement: true,
	prerequisite: "Requires attunement by a cleric or paladin",
	prereqeval: function (v) {
		return classes.known.cleric || classes.known.paladin ? true : false;
	},
	description: "This amulet bears the symbol of a deity inlaid with precious stones or metals. While I wear this holy symbol, I gain a bonus to spell attack rolls and saving throw DCs of my spells. Once per dawn, it allows me to use my Channel Divinity feature without expending one of the feature's uses.",
	descriptionFull: [
		"This amulet bears the symbol of a deity inlaid with precious stones or metals. While you wear the holy symbol you gain a bonus to spell attack rolls and the saving throw DCs of your spells. The bonus is determined by the amulet's rarity.",
		"While you wear this amulet, you can use your Channel Divinity feature without expending one of the feature's uses. Once this property is used, it can't be used again until the next dawn.",
	],
	weight: 1, // as amulet holy symbol
	usages: 1,
	recovery: "dawn",
	additional: "Channel Divinity",
	choices: ["+1 to spell attacks and DCs (uncommon)", "+2 to spell attacks and DCs (rare)", "+3 to spell attacks and DCs (very rare)"],
	"+1 to spell attacks and dcs (uncommon)": {
		name: "Amulet of the Devout +1",
		nameTest: "+1 Amulet of the Devout",
		rarity: "Uncommon",
		description: "This amulet bears the symbol of a deity inlaid with precious stones or metals. While I wear this holy symbol, I gain a +1 bonus to spell attack rolls and saving throw DCs of my spells. Once per dawn, it allows me to use my Channel Divinity feature without expending one of the feature's uses.",
		calcChanges: {
			spellCalc: [
				function (type, spellcasters, ability) {
					if (type !== "prepare") return 1;
				},
				"While wearing the Amulet of the Devout, I gain a +1 bonus to spell attack rolls and to the saving throw DCs of my spells.",
			],
		},
	},
	"+2 to spell attacks and dcs (rare)": {
		name: "Amulet of the Devout +2",
		nameTest: "+2 Amulet of the Devout",
		rarity: "Rare",
		description: "This amulet bears the symbol of a deity inlaid with precious stones or metals. While I wear this holy symbol, I gain a +2 bonus to spell attack rolls and saving throw DCs of my spells. Once per dawn, it allows me to use my Channel Divinity feature without expending one of the feature's uses.",
		calcChanges: {
			spellCalc: [
				function (type, spellcasters, ability) {
					if (type !== "prepare") return 2;
				},
				"While wearing the Amulet of the Devout, I gain a +2 bonus to spell attack rolls and to the saving throw DCs of my spells.",
			],
		},
	},
	"+3 to spell attacks and dcs (very rare)": {
		name: "Amulet of the Devout +3",
		nameTest: "+3 Amulet of the Devout",
		rarity: "Very Rare",
		description: "This amulet bears the symbol of a deity inlaid with precious stones or metals. While I wear this holy symbol, I gain a +3 bonus to spell attack rolls and saving throw DCs of my spells. Once per dawn, it allows me to use my Channel Divinity feature without expending one of the feature's uses.",
		calcChanges: {
			spellCalc: [
				function (type, spellcasters, ability) {
					if (type !== "prepare") return 3;
				},
				"While wearing the Amulet of the Devout, I gain a +3 bonus to spell attack rolls and to the saving throw DCs of my spells.",
			],
		},
	},
}
MagicItemsList["arcane grimoire"] = { // contains contributions by lizrdgizrd
	name: "Arcane Grimoire",
	source: [["T", 120]],
	type: "Wondrous Item",
	attunement: true,
	prerequisite: "Requires attunement by a wizard",
	prereqeval: function (v) { return classes.known.wizard ? true : false; },
	description: "I can use this leather-bound book as a spellbook and it allows me to regain 1 extra spell slot level when I use Arcane Recovery (included in Limited Features). While holding it, I can use it as a spellcasting focus for my Wizard spells and gain a bonus to spell attack rolls and the saving throw DCs of my Wizard spells.",
	descriptionFull: [
		"While you are holding this leather-bound book, you can use it as a spellcasting focus for your wizard spells, and you gain a bonus to spell attack rolls and the saving throw DCs of your wizard spells. The bonus is determined by the book's rarity.",
		"You can use this book as a spellbook. In addition, when you use your Arcane Recovery feature, you can increase the number of spell slot levels you regain by 1.",
	],
	weight: 3, // as spellbook
	changeeval: function () {
		// Update the limited feature "Arcane Recovery" to display 1 more spell level than for the wizard level (unless there is no wizard level)
		if (!classes.known.wizard) return;
		// This changeeval is called before the class feature updates the limited feature, so we need to use setTimeOut to do the change after
		var func = function () {
			if (!classes.known.wizard) return;
			var hasAG = CurrentMagicItems.known.indexOf("arcane grimoire") !== -1;
			var lvls = Math.ceil(classes.known.wizard.level / 2);
			if (hasAG) lvls++;
			var additional = " (" + lvls + " levels of spell slots)";
			var tooltip = "Arcane Grimoire (recover +1 level)";
			var UpdateOrReplace = hasAG ? "replace" : "replaceUndo";
			AddFeature("Arcane Recovery", 1, additional, "long rest", tooltip, UpdateOrReplace);
		}
		var timeout = app.setTimeOut(func.toSource() + "();", 300);
	},
	choices: ["+1 to spell attacks and DCs (uncommon)", "+2 to spell attacks and DCs (rare)", "+3 to spell attacks and DCs (very rare)"],
	"+1 to spell attacks and dcs (uncommon)": {
		name: "Arcane Grimoire +1",
		rarity: "Uncommon",
		description: "I can use this leather-bound book as a spellbook and it allows me to regain 1 extra spell slot level when I use Arcane Recovery (included in Limited Features). While holding it, I can use it as a spellcasting focus for my Wizard spells and gain a +1 bonus to the spell attack rolls and saving throw DCs of my Wizard spells.",
		calcChanges: {
			spellCalc: [
				function (type, spellcasters, ability) {
					if (type !== "prepare" && spellcasters.indexOf("wizard") !== -1) return 1;
				},
				"While holding the Arcane Grimoire, I gain a +1 bonus to the spell attack rolls and saving throw DCs of my Wizard spells.",
			],
		},
	},
	"+2 to spell attacks and dcs (rare)": {
		name: "Arcane Grimoire +2",
		rarity: "Rare",
		description: "I can use this leather-bound book as a spellbook and it allows me to regain 1 extra spell slot level when I use Arcane Recovery (included in Limited Features). While holding it, I can use it as a spellcasting focus for my Wizard spells and gain a +2 bonus to the spell attack rolls and saving throw DCs of my Wizard spells.",
		calcChanges: {
			spellCalc: [
				function (type, spellcasters, ability) {
					if (type !== "prepare" && spellcasters.indexOf("wizard") !== -1) return 2;
				},
				"While holding the Arcane Grimoire, I gain a +2 bonus to the spell attack rolls and saving throw DCs of my Wizard spells.",
			],
		},
	},
	"+3 to spell attacks and dcs (very rare)": {
		name: "Arcane Grimoire +3",
		rarity: "Very Rare",
		description: "I can use this leather-bound book as a spellbook and it allows me to regain 1 extra spell slot level when I use Arcane Recovery (included in Limited Features). While holding it, I can use it as a spellcasting focus for my Wizard spells and gain a +3 bonus to the spell attack rolls and saving throw DCs of my Wizard spells.",
		calcChanges: {
			spellCalc: [
				function (type, spellcasters, ability) {
					if (type !== "prepare" && spellcasters.indexOf("wizard") !== -1) return 3;
				},
				"While holding the Arcane Grimoire, I gain a +3 bonus to the spell attack rolls and saving throw DCs of my Wizard spells.",
			],
		},
	},
}
MagicItemsList["bloodwell vial"] = { // contains contributions by lizrdgizrd
	name: "Bloodwell Vial",
	source: [["T", 122]],
	type: "Wondrous Item",
	attunement: true,
	prerequisite: "Requires attunement by a sorcerer",
	prereqeval: function (v) { return classes.known.sorcerer ? true : false; },
	description: "While I wear or hold this vial to which I added a few drops of my blood, I gain a bonus to my spell attack rolls and to the saving throw DCs of my Sorcerer spells. While I'm attuned to it, it can't be opened. Once per dawn, when I roll any Hit Dice to recover HP while carrying this vial, I can regain 5 sorcery points.",
	descriptionFull: [
		"To attune to this vial, you must place a few drops of your blood into it. The vial can't be opened while your attunement to it lasts. If your attunement to the vial ends, the contained blood turns to ash. You can use the vial as a spellcasting focus for your spells while wearing or holding it, and you gain a bonus to spell attack rolls and to the saving throw DCs of your sorcerer spells. The bonus is determined by the vial's rarity.",
		"In addition, when you roll any Hit Dice to recover hit points while you are carrying the vial, you can regain 5 sorcery points. This property of the vial can't be used again until the next dawn.",
	],
	usages: 1,
	recovery: "dawn",
	additional: "recover 5 Sorcery Points",
	choices: ["+1 to spell attacks and DCs (uncommon)", "+2 to spell attacks and DCs (rare)", "+3 to spell attacks and DCs (very rare)"],
	"+1 to spell attacks and dcs (uncommon)": {
		name: "Bloodwell Vial +1",
		rarity: "Uncommon",
		description: "While I wear or hold this vial to which I added a few drops of my blood, I gain a +1 bonus to my spell attack rolls and to the saving throw DCs of my Sorcerer spells. While I'm attuned to it, it can't be opened. Once per dawn, when I roll any Hit Dice to recover HP while carrying this vial, I can regain 5 sorcery points.",
		calcChanges: {
			spellCalc: [
				function (type, spellcasters, ability) {
					if (type !== "prepare" && spellcasters.indexOf("sorcerer") !== -1) return 1;
				},
				"While wearing or holding the Bloodwell Vial, I gain a +1 bonus to the spell attack rolls and saving throw DCs of my Sorcerer spells.",
			],
		},
	},
	"+2 to spell attacks and dcs (rare)": {
		name: "Bloodwell Vial +2",
		rarity: "Rare",
		description: "While I wear or hold this vial to which I added a few drops of my blood, I gain a +1 bonus to my spell attack rolls and to the saving throw DCs of my Sorcerer spells. While I'm attuned to it, it can't be opened. Once per dawn, when I roll any Hit Dice to recover HP while carrying this vial, I can regain 5 sorcery points.",
		calcChanges: {
			spellCalc: [
				function (type, spellcasters, ability) {
					if (type !== "prepare" && spellcasters.indexOf("sorcerer") !== -1) return 2;
				},
				"While wearing or holding the Bloodwell Vial, I gain a +2 bonus to the spell attack rolls and saving throw DCs of my Sorcerer spells.",
			],
		},
	},
	"+3 to spell attacks and dcs (very rare)": {
		name: "Bloodwell Vial +3",
		rarity: "Very Rare",
		description: "While I wear or hold this vial to which I added a few drops of my blood, I gain a +3 bonus to my spell attack rolls and to the saving throw DCs of my Sorcerer spells. While I'm attuned to it, it can't be opened. Once per dawn, when I roll any Hit Dice to recover HP while carrying this vial, I can regain 5 sorcery points.",
		calcChanges: {
			spellCalc: [
				function (type, spellcasters, ability) {
					if (type !== "prepare" && spellcasters.indexOf("sorcerer") !== -1) return 3;
				},
				"While wearing or holding the Bloodwell Vial, I gain a +3 bonus to the spell attack rolls and saving throw DCs of my Sorcerer spells.",
			],
		},
	},
}
MagicItemsList["moon sickle"] = {
	name: "Moon Sickle",
	source: [["T", 133]],
	type: "Weapon (Sickle)",
	attunement: true,
	prerequisite: "Requires attunement by a druid or ranger",
	prereqeval: function (v) {
		return classes.known.druid || classes.known.ranger || classes.known.rangerua ? true : false;
	},
	description: "This silver-bladed sickle glimmers softly with moonlight. I gain a bonus to attack and damage rolls made with it. While I'm holding it, I gain a bonus to spell attack rolls and saving throw DCs of my Druid and Ranger spells, and spells I cast that restore HP add 1d4 to the number of HP restored.",
	descriptionFull: [
		"This silver-bladed sickle glimmers softly with moonlight. While holding this magic weapon, you gain a bonus to attack and damage rolls made with it, and you gain a bonus to spell attack rolls and the saving throw DCs of your druid and ranger spells. The bonus is determined by the weapon's rarity. In addition, you can use the sickle as a spellcasting focus for your druid and ranger spells.",
		"When you cast a spell that restores hit points, you can roll a d4 and add the number rolled to the amount of hit points restored, provided you are holding the sickle.",
	],
	weight: 2,
	calcChanges: {
		spellAdd: [
			function (spellKey, spellObj, spName) {
				if (spellObj.psionic || !spellObj.level) return;
				switch (spellKey) {
					case "enervation" :
					case "life transference" :
					case "vampiric touch" :
						var useSpellDescr = getSpellShortDescription(spellKey, spellObj);
						var strAdd = " +1d4";
						spellObj.description = useSpellDescr.replace(/(heals? (half|twice)( the damage dealt| that)?)( in HP)?/, "$1" + strAdd);
						return true;
					default :
						return genericSpellDmgEdit(spellKey, spellObj, "heal", "1d4");
				}
			},
			"While holding the Moon Sickle when I cast a spell that restores Hit Points, I can roll a d4 and add the number rolled to the amount of Hit Points restored.",
		],
	},
	choices: ["+1 weapon, +1 to spell attacks and DCs (uncommon)", "+2 weapon, +2 to spell attacks and DCs (rare)", "+3 weapon, +3 to spell attacks and DCs (very rare)"],
	"+1 weapon, +1 to spell attacks and dcs (uncommon)": {
		name: "Moon Sickle +1",
		rarity: "Uncommon",
		description: "This silver-bladed sickle glimmers softly with moonlight. I gain a +1 bonus to attack and damage rolls made with it. While I'm holding it, I gain a +1 bonus to spell attack rolls and saving throw DCs of my Druid and Ranger spells, and spells I cast that restore HP add 1d4 to the number of HP restored.",
		calcChanges: {
			spellCalc: [
				function (type, spellcasters, ability) {
					if (type !== "prepare" && (spellcasters.indexOf("druid") !== -1 || spellcasters.indexOf("ranger") !== -1)) return 1;
				},
				"While holding the Moon Sickle, I gain a +1 bonus to the spell attack rolls and saving throw DCs of my Druid and Ranger spells.",
			],
		},
		weaponsAdd: { select: ["Moon Sickle +1"], options: ["Moon Sickle +1"] },
	},
	"+2 weapon, +2 to spell attacks and dcs (rare)": {
		name: "Moon Sickle +2",
		rarity: "Rare",
		description: "This silver-bladed sickle glimmers softly with moonlight. I gain a +2 bonus to attack and damage rolls made with it. While I'm holding it, I gain a +2 bonus to spell attack rolls and saving throw DCs of my Druid and Ranger spells, and spells I cast that restore HP add 1d4 to the number of HP restored.",
		calcChanges: {
			spellCalc: [
				function (type, spellcasters, ability) {
					if (type !== "prepare" && (spellcasters.indexOf("druid") !== -1 || spellcasters.indexOf("ranger") !== -1)) return 2;
				},
				"While holding the Moon Sickle, I gain a +2 bonus to the spell attack rolls and saving throw DCs of my Druid and Ranger spells.",
			],
		},
		weaponsAdd: { select: ["Moon Sickle +2"], options: ["Moon Sickle +2"] },
	},
	"+3 weapon, +3 to spell attacks and dcs (very rare)": {
		name: "Moon Sickle +3",
		rarity: "Very Rare",
		description: "This silver-bladed sickle glimmers softly with moonlight. I gain a +3 bonus to attack and damage rolls made with it. While I'm holding it, I gain a +3 bonus to spell attack rolls and saving throw DCs of my Druid and Ranger spells, and spells I cast that restore HP add 1d4 to the number of HP restored.",
		calcChanges: {
			spellCalc: [
				function (type, spellcasters, ability) {
					if (type !== "prepare" && (spellcasters.indexOf("druid") !== -1 || spellcasters.indexOf("ranger") !== -1)) return 3;
				},
				"While holding the Moon Sickle, I gain a +3 bonus to the spell attack rolls and saving throw DCs of my Druid and Ranger spells.",
			],
		},
		weaponsAdd: { select: ["Moon Sickle +3"], options: ["Moon Sickle +3"] },
	},
}
MagicItemsList["rhythm maker's drum"] = {
	name: "Rhythm Maker's Drum",
	source: [["T", 134]],
	type: "Wondrous Item (Instrument)",
	attunement: true,
	prerequisite: "Requires attunement by a bard",
	prereqeval: function (v) { return classes.known.bard ? true : false; },
	description: "While holding this drum, I gain a bonus to spell attack rolls and to the spell saving throw DCs of my Bard spells.\nAs an action once per dawn, I can play the drum to regain one use of my Bardic Inspiration feature.",
	descriptionFull: [
		"While holding this drum, you gain a bonus to spell attack rolls and to the spell saving throw DCs or your bard spells. The bonus is determined by the drum's rarity.",
		"As an action, you can play the drum to regain one use of your Bardic Inspiration feature. This property of the drum can't be used again until the next dawn.",
	],
	weight: 3,
	usages: 1,
	recovery: "dawn",
	action: [["action", " (bardic inspiration)"]],
	choices: ["+1 to spell attacks and DCs (uncommon)", "+2 to spell attacks and DCs (rare)", "+3 to spell attacks and DCs (very rare)"],
	"+1 to spell attacks and dcs (uncommon)": {
		name: "Rhythm Maker's Drum +1",
		rarity: "Uncommon",
		description: "While holding this drum, I gain a +1 bonus to spell attack rolls and to the spell saving throw DCs of my Bard spells.\nAs an action once per dawn, I can play the drum to regain one use of my Bardic Inspiration feature.",
		calcChanges: {
			spellCalc: [
				function (type, spellcasters, ability) {
					if (type !== "prepare" && spellcasters.indexOf("bard") !== -1) return 1;
				},
				"While holding the Rhythm Maker's Drum, I gain a +1 bonus to the spell attack rolls and saving throw DCs of my Bard spells.",
			],
		},
	},
	"+2 to spell attacks and dcs (rare)": {
		name: "Rhythm Maker's Drum +2",
		rarity: "Rare",
		description: "While holding this drum, I gain a +2 bonus to spell attack rolls and to the spell saving throw DCs of my Bard spells.\nAs an action once per dawn, I can play the drum to regain one use of my Bardic Inspiration feature.",
		calcChanges: {
			spellCalc: [
				function (type, spellcasters, ability) {
					if (type !== "prepare" && spellcasters.indexOf("bard") !== -1) return 2;
				},
				"While holding the Rhythm Maker's Drum, I gain a +2 bonus to the spell attack rolls and saving throw DCs of my Bard spells.",
			],
		},
	},
	"+3 to spell attacks and dcs (very rare)": {
		name: "Rhythm Maker's Drum +3",
		rarity: "Very Rare",
		description: "While holding this drum, I gain a +3 bonus to spell attack rolls and to the spell saving throw DCs of my Bard spells.\nAs an action once per dawn, I can play the drum to regain one use of my Bardic Inspiration feature.",
		calcChanges: {
			spellCalc: [
				function (type, spellcasters, ability) {
					if (type !== "prepare" && spellcasters.indexOf("bard") !== -1) return 3;
				},
				"While holding the Rhythm Maker's Drum, I gain a +3 bonus to the spell attack rolls and saving throw DCs of my Bard spells.",
			],
		},
	},
}
// Magic Items - Spellbook alternatives
MagicItemsList["alchemical compendium"] = {
	name: "Alchemical Compendium",
	source: [["T", 119]],
	type: "Wondrous Item",
	rarity: "Rare",
	attunement: true,
	prerequisite: "Requires attunement by a wizard",
	prereqeval: function (v) { return classes.known.wizard ? true : false; },
	description: "I can use this tome with spells as my spellbook and spellcasting focus. It has 3 charges, regaining 1d3 at dawn. With 1 charge \u0026 1 min of study, I can change a prepared spell to a Transmutation spell within. As an action, I can touch an unattended, nonmagical object and use charges to transform it into another. See tooltip.",
	descriptionLong: "I can use this acrid smelling, stained, heavy book with metal fittings as my spellbook and, while held, as my spellcasting focus. It contains several spells and has 3 charges, regaining 1d3 at dawn. I can study the book for 1 minute and expend 1 charge to change one of my prepared spells to a Transmutation spell within. As an action, I can touch an unattended, nonmagical object and use charges to transform it into another. For 1 charge, the object can be up to 1 ft on a side. I can spend additional charges to increase these dimensions by 2 ft per charge. The new object must have no higher gp value than the original.",
	descriptionFull: [
		"Acrid odors cling to this stained, heavy volume. The book's metal fittings are copper, iron, lead, silver, and gold, some frozen mid-transition from one metal to another. When found, the book contains the following spells: *enlarge/reduce*, *feather fall*, *flesh to stone*, *gaseous form*, *magic weapon*, and *polymorph*. It functions as a spellbook for you.",
		"While you are holding the book, you can use it as a spellcasting focus for your wizard spells.",
		"The book has 3 charges, and it regains 1d3 expended charges daily at dawn. You can use the charges in the following ways while holding it:",
		" \u2022 If you spend 1 minute studying the book, you can expend 1 charge to replace one of your prepared wizard spells with a different spell in the book. The new spell must be of the transmutation school.",
		" \u2022 As an action, you can touch a nonmagical object that isn't being worn or carried and spend a number of charges to transform the target into another object. For 1 charge, the object can be no larger than 1 foot on a side. You can spend additional charges to increase the maximum dimensions by 2 feet per charge. The new object must have a gold value equal to or less than the original.",
	],
	weight: 3, // as spellbook
	usages: 3,
	recovery: "dawn",
	additional: "regains 1d3",
	spellcastingBonusElsewhere: {
		addTo: "wizard",
		addToKnown: ["enlarge/reduce", "feather fall", "flesh to stone", "gaseous form", "magic weapon", "polymorph"],
	},
	action: [["action", " (transform object)"]],
}
MagicItemsList["astromancy archive"] = {
	name: "Astromancy Archive",
	source: [["T", 120]],
	type: "Wondrous Item",
	rarity: "Rare",
	attunement: true,
	prerequisite: "Requires attunement by a wizard",
	prereqeval: function (v) { return classes.known.wizard ? true : false; },
	description: "As Bonus Action, I can (un)fold this disc into an armillary sphere. I can use it as a spellcasting focus and spellbook with 3 charges, regains 1d3 at dawn. For 1 charge \u0026 1 min of study, I can swap a prepared spell for a Divination spell within. As a Reaction, I can use 1 charge to add/subtract d4 from attack/check/save in 30 ft.",
	descriptionLong: "As a Bonus Action, I can unfold this brass disc of articulated, concentric rings into an armillary sphere or back into a disc. I can use it as my spellbook and, while held, as a spellcasting focus for my Wizard spells. It contains several spells and has 3 charges, regaining 1d3 at dawn. I can study the book for 1 minute and expend 1 charge to change one of my prepared spells to a Divination spell within. As a Reaction when I see a creature within 30 ft roll for an attack, check, or save, I can expend 1 change to add or subtract 1d4 from the roll. This happens after I see the roll but before the roll's effects are applied.",
	descriptionFull: [
		"This brass disc of articulated, concentric rings unfolds into an armillary sphere. As a bonus action, you can unfold it into the sphere or back into a disc. When found, it contains the following spells, which are wizard spells for you while you are attuned to it: *augury*, *divination*, *find the path*, *foresight*, *locate creature*, and *locate object*. It functions as a spellbook for you, with spells encoded on the rings.",
		"While you are holding the archive, you can use it as a spellcasting focus for your wizard spells.",
		"The archive has 3 charges, and it regains 1d3 expended charges daily at dawn. You can use the charges in the following ways while holding it:",
		" \u2022 If you spend 1 minute studying the archive, you can expend 1 charge to replace one of your prepared wizard spells with a different spell in the archive. The new spell must be of the divination school.",
		" \u2022 When a creature you can see within 30 feet of you makes an attack roll, an ability check, or a saving throw, you can use your reaction to expend 1 charge and force the creature to roll a d4 and apply the number rolled as a bonus or penalty (your choice) to the original roll. You can do this after you see the roll but before its effects are applied.",
	],
	weight: 3, // as spellbook
	usages: 3,
	recovery: "dawn",
	additional: "regains 1d3",
	spellcastingBonusElsewhere: {
		addTo: "wizard",
		spellcastingBonus: [{
			name: "Astromancy Archive",
			spells: ["augury", "divination", "find the path"], // not wizard spells!
			selection: ["augury", "divination", "find the path"],
			times: 3,
		}],
		addToKnown: ["foresight", "locate creature", "locate object"],
	},
	action: [
		["bonus action", " (fold/unfold)"],
		["reaction", " (add/subtract d4)"],
	],
}
MagicItemsList["atlas of endless horizons"] = {
	name: "Atlas of Endless Horizons",
	source: [["T", 120]],
	type: "Wondrous Item",
	rarity: "Rare",
	attunement: true,
	prerequisite: "Requires attunement by a wizard",
	prereqeval: function (v) { return classes.known.wizard ? true : false; },
	description: "This spellbook starts with 7 spells and is a Wizard spellcasting focus. It has 3 charges, regaining 1d3 at dawn. For 1 charge \u0026 1 min of study, I can change a prepared spell to a Conjuration spell within. As a Reaction when hit by an attack, I can use 1 charge to teleport up to 10 ft, making it miss if I'm out of range.",
	descriptionLong: "This thick book is bound in dark leather, crisscrossed with inlaid silver lines suggesting a map or chart. I can use it as my spellbook and, while held, as a spellcasting focus for my Wizard spells. It contains several spells and has 3 charges, regaining 1d3 expended charges daily at dawn. I can study the book for 1 minute and expend 1 charge to replace one of my prepared Wizard spells with a Conjuration spell in this book. As a Reaction when I am hit by an attack, I can expend 1 charge to teleport up to 10 ft to an unoccupied space I can see. If my new position is out of range of the attack, it misses me.",
	descriptionFull: [
		"This thick book is bound in dark leather, crisscrossed with inlaid silver lines suggesting a map or chart. When found, the book contains the following spells, which are wizard spells for you while you are attuned to the book: *arcane gate*, *dimension door*, *gate*, *misty step*, *plane shift*, *teleportation circle*, and *word of recall*. It functions as a spellbook for you.",
		"While you are holding the book, you can use it as a spellcasting focus for your wizard spells.",
		"The book has 3 charges, and it regains 1d3 expended charges daily at dawn. You can use the charges in the following ways while holding it:",
		" \u2022 If you spend 1 minute studying the book, you can expend 1 charge to replace one of your prepared wizard spells with a different spell in the book. The new spell must be of the conjuration school.",
		" \u2022 When you are hit by an attack, you can use your reaction to expend 1 charge to teleport up to 10 feet to an unoccupied space you can see. If your new position is out of range of the attack, it misses you.",
	],
	weight: 3, // as spellbook
	usages: 3,
	recovery: "dawn",
	additional: "regains 1d3",
	spellcastingBonusElsewhere: {
		addTo: "wizard",
		spellcastingBonus: [{
			name: "Atlas of Endless Horizons",
			spells: ["word of recall"], // not a wizard spell!
			selection: ["word of recall"],
		}],
		addToKnown: ["arcane gate", "dimension door", "gate", "misty step", "plane shift", "teleportation circle"],
	},
	action: [["reaction", "Teleport 10ft (1 charge)"]],
}
MagicItemsList["crystalline chronicle"] = {
	name: "Crystalline Chronicle",
	source: [["T", 124]],
	type: "Wondrous Item",
	rarity: "Very Rare",
	attunement: true,
	prerequisite: "Requires attunement by a wizard",
	prereqeval: function (v) { return classes.known.wizard ? true : false; },
	description: "I can use this orb with spells as a Wizard spellcasting focus and spellbook. It lets me use *Mage Hand*, *Mind Sliver*, and *Message*. It has 3 charges, regaining 1d3 at dawn. For 1 charge \u0026 1 min of study, I can change a prepared spell to another within. I can use 1 charge to ignore components of a Wizard spell (max 100 gp).",
	descriptionLong: "This grapefruit sized, etched crystal sphere hums pulses with irregular flares of inner light. I can retrieve and store information within the crystal as a spellbook by touching it. It contains several spells and has 3 charges, regaining 1d3 at dawn. While holding it, I can use it as a spellcasting focus for my Wizard spells, I know the *Mage Hand*, *Mind Sliver*, and *Message* cantrips, I can study the book for 1 minute and expend 1 charge to change one of my prepared spells to another within, and when I cast a Wizard spell, I can expend 1 charge to cast it without verbal, somatic, or material components of up to 100 gp value.",
	descriptionFull: [
		"An etched crystal sphere the size of a grapefruit hums faintly and pulses with irregular flares of inner light. While you are touching the crystal, you can retrieve and store information and spells within the crystal at the same rate as reading and writing. When found, the crystal contains the following spells: *detect thoughts*, *intellect fortress*, *Rary's telepathic bond*, *sending*, *telekinesis*, *Tasha's mind whip*, and *Tenser's floating disk*. It functions as a spellbook for you, with its spells and other writing psychically encoded within it.",
		"While you are holding the crystal, you can use it as a spellcasting focus for your wizard spells, and you know the *mage hand*, *mind sliver*, and *message* cantrips if you don't already know them.",
		"The crystal has 3 charges, and it regains 1d3 expended charges daily at dawn. You can use the charges in the following ways while holding it:",
		" \u2022 If you spend 1 minute studying the information within the crystal, you can expend 1 charge to replace one of your prepared wizard spells with a different spell in the book.",
		" \u2022 When you cast a wizard spell, you can expend 1 charge to cast the spell without verbal, somatic, or material components of up to 100 gp value.",
	],
	weight: 3, // As orb arcane focus
	usages: 3,
	recovery: "dawn",
	additional: "regains 1d3",
	spellcastingBonusElsewhere: {
		addTo: "wizard",
		addToKnown: ["mage hand", "mind sliver", "message", "detect thoughts", "intellect fortress", "rary's telepathic bond", "sending", "telekinesis", "tasha's mind whip", "tenser's floating disk"],
	},
}
MagicItemsList["duplicitous manuscript"] = {
	name: "Duplicitous Manuscript",
	source: [["T", 126]],
	type: "Wondrous Item",
	rarity: "Rare",
	attunement: true,
	prerequisite: "Requires attunement by a wizard",
	prereqeval: function (v) { return classes.known.wizard ? true : false; },
	description: "This spellbook starts with 7 spells and is a Wizard spellcasting focus. It has 3 charges, regaining 1d3 at dawn. For 1 charge \u0026 1 min of study, I can change a prepared spell to an Illusion spell within. As a Reaction when a save or Investigation check is made vs my Illusion spells, I can use 1 charge to impose Disadv.",
	descriptionLong: "This book appears to be a volume of romance fiction to anyone but me. As an action, I can change its appearance and plot. I can use it as my spellbook and, while held, as a spellcasting focus for my Wizard spells. It contains several spells and has 3 charges, regaining 1d3 expended charges at dawn. I can study the book for 1 minute and expend 1 charge to change one of my prepared spells to an Illusion spell within. As a Reaction while holding it when a creature I can see makes a save or an Intelligence (Investigation) check against an Illusion spell I cast, I can expend 1 charge to impose Disadvantage on the roll.",
	descriptionFull: [
		"To you, this book is a magical spellbook. To anyone else, the book appears to be a volume of verbose romance fiction. As an action, you can change the book's appearance and alter the plot of the romance.",
		"When found, the book contains the following spells: *hallucinatory terrain*, *major image*, *mirror image*, *mislead*, *Nystul's magic aura*, *phantasmal force*, and *silent image*. It functions as a spellbook for you.",
		"While you are holding the book, you can use it as a spellcasting focus for your wizard spells.",
		"The book has 3 charges, and it regains 1d3 expended charges daily at dawn. You can use the charges in the following ways while holding it:",
		" \u2022 If you spend 1 minute studying the book, you can expend 1 charge to replace one of your prepared wizard spells with a different spell in the book. The new spell must be of the illusion school.",
		" \u2022 When a creature you can see makes an Intelligence (Investigation) check to discern the true nature of an illusion spell you cast, or makes a saving throw against an illusion spell you cast, you can use your reaction and expend 1 charge to impose disadvantage on the roll.",
	],
	weight: 3, // as spellbook
	usages: 3,
	recovery: "dawn",
	additional: "regains 1d3",
	spellcastingBonusElsewhere: {
		addTo: "wizard",
		addToKnown: ["hallucinatory terrain", "major image", "mirror image", "mislead", "nystul's magic aura", "phantasmal force", "silent image"],
	},
	action: [
		["reaction", " (impose Disadv)"],
		["action", " (change book)"],
	],
}
MagicItemsList["fulminating treatise"] = {
	name: "Fulminating Treatise",
	source: [["T", 128]],
	type: "Wondrous Item",
	rarity: "Rare",
	attunement: true,
	prerequisite: "Requires attunement by a wizard",
	prereqeval: function (v) { return classes.known.wizard ? true : false; },
	description: "I can use this tome as a spellcasting focus and spellbook. It has 3 charges and regains 1d3 at dawn. For 1 charge and 1 min study, I can change a prepared spell to an Evocation spell within. As a Reaction when my Evocation spell damages a creature, I can use 1 charge to deal it 2d6 Force damage and knock it Prone.",
	descriptionLong: "This thick, scorched book reeks of smoke and ozone, and sparks of energy crackles along the edges of its pages. I can use it as my spellbook and, while held, as a spellcasting focus for my Wizard spells. It contains several spells and has 3 charges, regaining 1d3 expended charges at dawn. I can study the book for 1 minute and expend 1 charge to change one of my prepared spells to an Evocation spell within. As a Reaction while holding it when a creature I can see takes damage from an Evocation spell I cast, I can expend 1 charge to deal the creature an extra 2d6 Force damage and knock it Prone if it's Large or smaller.",
	descriptionFull: [
		"This thick, scorched spellbook reeks of smoke and ozone, and sparks of energy crackles along the edges of its pages. When found, the book contains the following spells: *contingency*, *fireball*, *gust of wind*, *Leomund's tiny hut*, *magic missile*, *thunderwave*, and *wall of force*. It functions as a spellbook for you.",
		"While you are holding the book, you can use it as a spellcasting focus for your wizard spells.",
		"The book has 3 charges, and it regains 1d3 expended charges daily at dawn. You can use the charges in the following ways while holding it:",
		" \u2022 If you spend 1 minute studying the book, you can expend 1 charge to replace one of your prepared wizard spells with a different spell in the book. The new spell must be of the evocation school.",
		" \u2022 When one creature you can see takes damage from an evocation spell you cast, you can use your reaction and expend 1 charge to deal an extra 2d6 force damage to the creature and knock the creature prone if it is Large or smaller.",
	],
	weight: 3, // as spellbook
	usages: 3,
	recovery: "dawn",
	additional: "regains 1d3",
	spellcastingBonusElsewhere: {
		addTo: "wizard",
		addToKnown: ["contingency", "fireball", "gust of wind", "leomund's tiny hut", "magic missile", "thunderwave", "wall of force"],
	},
	action: [["reaction", "Add 2d6 Force Dmg (1 chg)"]],
}
MagicItemsList["heart weaver's primer"] = {
	name: "Heart Weaver's Primer",
	source: [["T", 128]],
	type: "Wondrous Item",
	rarity: "Rare",
	attunement: true,
	prerequisite: "Requires attunement by a wizard",
	prereqeval: function (v) { return classes.known.wizard ? true : false; },
	description: "I can use this book as a Wizard spellcasting focus and spellbook. It has 3 charges, regaining 1d3 at dawn. For 1 charge \u0026 1 min of study, I can change a prepared spell to an Enchantment spell in it. When I cast an Enchantment spell, I can use 1 charge to grant Disadv on the first save one target makes against the spell.",
	descriptionLong: "This pristine book smells faintly of a random scent I find pleasing. I can use it as my spellbook and, while held, as a spellcasting focus for my Wizard spells. It contains several spells that I can prepare as Wizard spells. It has 3 charges and it regains 1d3 expended charges daily at dawn. I can study the book for 1 minute and expend 1 charge to change one of my prepared spells to an Enchantment spell within the book. When I cast an Enchantment spell while holding the book, I can expend 1 charge to impose Disadvantage on the first saving throw one target makes against the spell.",
	descriptionFull: [
		"This pristine book smells faintly of a random scent you find pleasing. When found, the book contains the following spells: *antipathy/sympathy*, *charm person*, *dominate person*, *enthrall*, *hypnotic pattern*, *modify memory*, and *suggestion*. It functions as a spellbook for you.",
		"While you are holding the book, you can use it as a spellcasting focus for your wizard spells.",
		"The book has 3 charges, and it regains 1d3 expended charges daily at dawn. You can use the charges in the following ways while holding it:",
		" \u2022 If you spend 1 minute studying the book, you can expend 1 charge to replace one of your prepared wizard spells with a different spell in the book. The new spell must be of the enchantment school.",
		" \u2022 When you cast an enchantment spell, you can expend 1 charge to impose disadvantage on the first saving throw one target makes against the spell.",
	],
	weight: 3, // as spellbook
	usages: 3,
	recovery: "dawn",
	additional: "regains 1d3",
	spellcastingBonusElsewhere: {
		addTo: "wizard",
		spellcastingBonus: [{
			name: "Heart Weaver's Primer",
			spells: ["enthrall"], // not a wizard spell!
			selection: ["enthrall"],
		}],
		addToKnown: ["antipathy/sympathy", "charm person", "dominate person", "hypnotic pattern", "modify memory", "suggestion"],
	},
}
MagicItemsList["libram of souls and flesh"] = {
	name: "Libram of Souls and Flesh",
	source: [["T", 129]],
	type: "Wondrous Item",
	rarity: "Rare",
	attunement: true,
	prerequisite: "Requires attunement by a wizard",
	prereqeval: function (v) { return classes.known.wizard ? true : false; },
	description: "This spellbook starts with 7 spells and is a Wizard spellcasting focus. It has 3 charges, regaining 1d3 at dawn. For 1 charge \u0026 1 min of study, I can change a prepared spell to a Necromancy spell within. As an action, I can use 1 charge to appear undead for 10 min, causing undead I haven't damage to be indifferent.",
	descriptionLong: "With covers made of skin and fittings of bone, this tome is cold to the touch, and faintly whispers. I can use it as my spellbook and, while held, as a spellcasting focus for my Wizard spells. It contains several spells and has 3 charges, regaining 1d3 at dawn. I can study the book for 1 minute and expend 1 charge to change one of my prepared spells to a Necromancy spell within. As an action, I can expend 1 charge to appear undead for 10 minutes, fooling even spells. For the duration, undead are indifferent to me, unless I have damaged them. The effect ends early if I deal damage or force a creature to make a save.",
	descriptionFull: [
		"With covers made of skin and fittings of bone, this tome is cold to the touch, and it whispers faintly. When found, the book contains the following spells, which are wizard spells for you while you are attuned to the book: *animate dead*, *circle of death*, *false life*, *finger of death*, *speak with dead*, *summon undead*, and *vampiric touch*. It functions as a spellbook for you.",
		"While you are holding the book, you can use it as a spellcasting focus for your wizard spells.",
		"The book has 3 charges, and it regains 1d3 expended charges daily at dawn. You can use the charges in the following ways while holding it:",
		" \u2022 If you spend 1 minute studying the book, you can expend 1 charge to replace one of your prepared wizard spells with a different spell in the book. The new spell must be of the necromancy school.",
		" \u2022 As an action, you can expend 1 charge to take on a semblance of undeath for 10 minutes. For the duration, you take on a deathly appearance, and undead creatures are indifferent to you, unless you have damaged them. You also appear undead to all outward inspection and to spells used to determine the target's status. The effect ends if you deal damage or force a creature to make a saving throw.",
	],
	weight: 3, // as spellbook
	usages: 3,
	recovery: "dawn",
	additional: "regains 1d3",
	spellcastingBonusElsewhere: {
		addTo: "wizard",
		spellcastingBonus: [{
			name: "Libram of Souls and Flesh",
			spells: ["speak with dead"], // not a wizard spell!
			selection: ["speak with dead"],
		}],
		addToKnown: ["animate dead", "circle of death", "false life", "finger of death", "summon undead", "vampiric touch"],
	},
	action: [["action", "Semblance of Undeath"]],
}
MagicItemsList["planecaller's codex"] = {
	name: "Planecaller's Codex",
	source: [["T", 134]],
	type: "Wondrous Item",
	rarity: "Rare",
	attunement: true,
	prerequisite: "Requires attunement by a wizard",
	prereqeval: function (v) { return classes.known.wizard ? true : false; },
	description: "This spellbook starts with 6 spells and is a Wizard spellcasting focus. It has 3 charges, regaining 1d3 at dawn. For 1 charge \x26 1 min of study, I can swap a prepared spell for a Conjuration spell within. When I cast a Conjuration spell to summon or create one creature, I can use 1 charge to give it Adv on attacks for 1 min.",
	descriptionLong: "The pages of this book are bound in fiend hide, and its cover is embossed with a diagram of the multiverse. I can use it as my spellbook and, while held, as a spellcasting focus for my Wizard spells. It contains several spells and has 3 charges, regaining 1d3 expended charges daily at dawn. I can study the book for 1 minute and expend 1 charge to change one of my prepared spells to a Conjuration spell within the book. When I hold the book and cast a Conjuration spell that summons or creates one creature, I can expend 1 charge to grant that creature Advantage on attack rolls for 1 minute.",
	descriptionFull: [
		"The pages of this book are bound in fiend hide, and its cover is embossed with a diagram of the Great Wheel of the multiverse. When found, the book contains the following spells: *banishment*, *find familiar*, *gate*, *magic circle*, *planar binding*, and *summon elemental*. It functions as a spellbook for you.",
		"While you are holding the book, you can use it as a spellcasting focus for your wizard spells.",
		"The book has 3 charges, and it regains 1d3 expended charges daily at dawn. You can use the charges in the following ways while holding it:",
		" \u2022 If you spend 1 minute studying the book, you can expend 1 charge to replace one of your prepared wizard spells with a different spell in the book. The new spell must be of the conjuration school.",
		" \u2022 When you cast a conjuration spell that summons or creates one creature, you can expend 1 charge to grant that creature advantage on attack rolls for 1 minute.",
	],
	weight: 3, // as spellbook
	usages: 3,
	recovery: "dawn",
	additional: "regains 1d3",
	spellcastingBonusElsewhere: {
		addTo: "wizard",
		addToKnown: ["banishment", "find familiar", "gate", "magic circle", "planar binding", "summon elemental"],
	},
}
MagicItemsList["protective verses"] = {
	name: "Protective Verses",
	source: [["T", 134]],
	type: "Wondrous Item",
	rarity: "Rare",
	attunement: true,
	prerequisite: "Requires attunement by a wizard",
	prereqeval: function (v) { return classes.known.wizard ? true : false; },
	description: "I can use this spellbook with an iron lock as a spellcasting focus. As an action, I can *Arcane Lock* it. It has 3 charges and regains 1d3 at dawn. When I cast an Abjuration spell, I can use 1 charge to give a creature in 30 ft 2d10 Temp HP. For 1 charge and 1 min of study, I can change a prepared spell to an Abjuration within. ",
	descriptionLong: "This leather-bound spellbook is reinforced with iron and silver fittings and an iron lock (DC 20 to open). As an action, I can touch the book's cover and cause it to lock as if I cast *Arcane Lock* on it. I can use it as my spellbook and, while held, as a spellcasting focus for my Wizard spells. It contains several spells, has 3 charges, and regains 1d3 charges at dawn. When I hold the book and cast an Abjuration spell, I can expend 1 charge to grant 2d10 Temporary HP to a creature I can see within 30 ft. I can study the book for 1 minute and expend 1 charge to change one of my prepared spells to an Abjuration spell within. ",
	descriptionFull: [
		"This leather-bound spellbook is reinforced with iron and silver fittings and an iron lock (DC 20 to open). As an action, you can touch the book's cover and cause it to lock as if you cast *arcane lock* on it. When found, the book contains the following spells: *arcane lock*, *dispel magic*, *globe of invulnerability*, *glyph of warding*, *Mordenkainen's private sanctum*, *protection from evil and good*, and *symbol*. It functions as a spellbook for you.",
		"While you are holding the book, you can use it as a spellcasting focus for your wizard spells.",
		"The book has 3 charges, and it regains 1d3 expended charges daily at dawn. You can use the charges in the following ways while holding it:",
		" \u2022 If you spend 1 minute studying the book, you can expend 1 charge to replace one of your prepared wizard spells with a different spell in the book. The new spell must be of the abjuration school.",
		" \u2022 When you cast an abjuration spell, you can expend 1 charge to grant a creature you can see within 30 feet of you 2d10 temporary hit points.",
	],
	weight: 3, // as spellbook
	usages: 3,
	recovery: "dawn",
	additional: "regains 1d3",
	spellcastingBonusElsewhere: {
		addTo: "wizard",
		addToKnown: ["arcane lock", "dispel magic", "globe of invulnerability", "glyph of warding", "mordenkainen's private sanctum", "protection from evil and good", "symbol"],
	},
	action: [["action", " (Arcane Lock itself)"]],
}
// Magic Items - Sorcerer stones
MagicItemsList["astral shard"] = {
	name: "Astral Shard",
	source: [["T", 120]],
	type: "Wondrous Item",
	rarity: "Rare",
	attunement: true,
	prerequisite: "Requires attunement by a sorcerer",
	prereqeval: function (v) { return classes.known.sorcerer ? true : false; },
	description: "I can use this crystal swirling with silver mist as a spellcasting focus for my Sorcerer spells while I hold or wear it. As an action, I can attach or detach it to a Tiny object. Immediately after I cast a spell with a metamagic option while I hold or wear this shard, I can teleport to an unoccupied space I can see within 30 ft.",
	descriptionFull: [
		"This crystal is a solidified shard of the Astral Plane, swirling with silver mist. As an action, you can attach the shard to a Tiny object (such as a weapon or a piece of jewelry) or detach it. It falls off if your attunement to it ends. You can use the shard as a spellcasting focus for your sorcerer spells while you hold or wear it.",
		"When you use a Metamagic option on a spell while you are holding or wearing the shard, immediately after casting the spell you can teleport to an unoccupied space you can see within 30 feet of you.",
	],
	weight: 1, // as crystal arcane focus
	action: [["action", " (attach/detach)"]],
}
MagicItemsList["elemental essence shard"] = {
	name: "Elemental Essence Shard",
	source: [["T", 127]],
	type: "Wondrous Item",
	rarity: "Rare",
	attunement: true,
	prerequisite: "Requires attunement by a sorcerer",
	prereqeval: function (v) { return classes.known.sorcerer ? true : false; },
	description: "I can use this flickering crystal as a spellcasting focus for my Sorcerer spells while I hold or wear it. As an action, I can attach or detach it to a Tiny object. It holds the essence of an Elemental Plane, which grants me additional benefits when I use a Metamagic option on a spell.",
	descriptionFull: [
		"This crackling crystal contains the essence of an elemental plane. As an action, you can attach the shard to a Tiny object (such as a weapon or a piece of jewelry) or detach it. It falls off if your attunement to it ends. You can use the shard as a spellcasting focus while you hold or wear it.",
		"Roll a d4 and consult the Elemental Essence Shards table to determine the shard's essence and property. When you use a Metamagic option on a spell while you are holding or wearing the shard, you can use that property.",
		[
			[" d4", "Essence"],
			["  1", "Air"],
			["  2", "Earth"],
			["  3", "Fire"],
			["  4", "Water"],
		],
		"***Air***. You can immediately fly up to 60 feet without provoking opportunity attacks.",
		"***Earth***. You gain resistance to a damage type of your choice until the start of your next turn.",
		"***Fire***. One target of the spell that you can see catches fire. The burning target takes 2d10 fire damage at the start of its next turn, and then the flames go out.",
		"***Water***. You create a wave of water that bursts out from you in a 10-foot radius. Each creature of your choice that you can see in that area takes 2d6 cold damage and must succeed on a Strength saving throw against your spell save DC or be pushed 10 feet away from you and fall prone.",
	],
	weight: 1, // as crystal arcane focus
	action: [["action", " (attach/detach)"]],
	choices: ["Air Essence", "Earth Essence", "Fire Essence", "Water Essence"],
	"air essence": {
		name: "Air Elemental Essence Shard",
		sortname: "Elemental Essence Shard, Air",
		description: "As an action, I can attach or detach this crackling crystal to a Tiny object. While I hold or wear it, I can use this crystal as a spellcasting focus for my Sorcerer spells, and when I use a Metamagic option on a spell, I can immediately fly up to 60 ft without provoking Opportunity Attacks.",
	},
	"earth essence": {
		name: "Earth Elemental Essence Shard",
		sortname: "Elemental Essence Shard, Earth",
		description: "As an action, I can attach or detach this crackling crystal to a Tiny object. While I hold or wear it, I can use this crystal as a spellcasting focus for my Sorcerer spells, and when I use a Metamagic option on a spell, I gain Resistance to a damage type of my choice until the start of my next turn.",
	},
	"fire essence": {
		name: "Fire Elemental Essence Shard",
		sortname: "Elemental Essence Shard, Fire",
		description: "As an action, I can attach/detach this crackling crystal to a Tiny object. While I hold or wear it, I can use it as a spellcasting focus for my Sorcerer spells, and when I use a Metamagic option on a spell, one target of that spell that I can see catches fire for a round, taking 2d10 Fire damage at the start of its next turn.",
	},
	"water essence": {
		name: "Water Elemental Essence Shard",
		sortname: "Elemental Essence Shard, Water",
		description: "As an action, I can attach/detach this crackling crystal to a Tiny object. While I hold or wear it, I can use it as a spellcasting focus for my Sorcerer spells, and when I use a Metamagic option on a spell, all chosen creatures in 10 ft of me take 2d6 Cold damage and must make a Str save or fall Prone \u0026 be pushed back 10 ft",
	},
}
MagicItemsList["far realm shard"] = {
	name: "Far Realm Shard",
	source: [["T", 127]],
	type: "Wondrous Item",
	rarity: "Rare",
	attunement: true,
	prerequisite: "Requires attunement by a sorcerer",
	prereqeval: function (v) { return classes.known.sorcerer ? true : false; },
	description: "As an action, I can attach/detach this crystal to an object. While I hold or wear it, it works as a spellcasting focus for my Sorcerer spells, and when I use a Metamagic option, I can have a creature I can see in 30 ft make a Cha save (my spell save DC) or take 3d6 Psychic damage \u0026 be Frightened of me until my next turn starts.",
	descriptionFull: [
		"This writhing crystal is steeped in the warped essence of the Far Realm. As an action, you can attach the shard to a Tiny object (such as a weapon or a piece of jewelry) or detach it. It falls off if your attunement to it ends. You can use the shard as a spellcasting focus while you hold or wear it.",
		"When you use a Metamagic option on a spell while you are holding or wearing the shard, you can cause a slimy tentacle to rip through the fabric of reality and strike one creature you can see within 30 feet of you. The creature must succeed on a Charisma saving throw against your spell save DC or take 3d6 psychic damage and become frightened of you until the start of your next turn.",
	],
	weight: 1, // as crystal arcane focus
	action: [["action", " (attach/detach)"]],
}
MagicItemsList["outer essence shard"] = {
	name: "Outer Essence Shard",
	source: [["T", 133]],
	type: "Wondrous Item",
	rarity: "Rare",
	attunement: true,
	prerequisite: "Requires attunement by a sorcerer",
	prereqeval: function (v) { return classes.known.sorcerer ? true : false; },
	description: "I can use this flickering crystal as a spellcasting focus for my Sorcerer spells while I hold or wear it. As an action, I can attach or detach it to a Tiny object. It holds the essence of an Outer Plane, which grants me additional benefits when I use a Metamagic option on a spell.",
	descriptionFull: [
		"This flickering crystal holds the essence of an Outer Plane. As an action, you can attach the shard to a Tiny object (such as a weapon or a piece of jewelry) or detach it. It falls off if your attunement to it ends. You can use the shard as a spellcasting focus while you hold or wear it.",
		"Roll a d4 and consult the Outer Essence Shards table to determine the shard's essence and property. When you use a Metamagic option on a spell while you are holding or wearing the shard, you can use that property.",
		[
			[" d4", "Essence"],
			["  1", "Lawful"],
			["  2", "Chaotic"],
			["  3", "Good"],
			["  4", "Evil"],
		],
		"***Lawful***. You can end one of the following conditions affecting yourself or one creature you can see within 30 feet of you: charmed, blinded, deafened, frightened, poisoned, or stunned.",
		"***Chaotic***. Choose one creature who takes damage from the spell. That target has disadvantage on attack rolls and ability checks made before the start of your next turn.",
		"***Good***. You or one creature of your choice that you can see within 30 feet of you gains 3d6 temporary hit points.",
		"***Evil***. Choose one creature who takes damage from the spell. That target takes an extra 3d6 necrotic damage.",
	],
	weight: 1, // as crystal arcane focus
	action: [["action", " (attach/detach)"]],
	choices: ["Lawful Essence", "Chaotic Essence", "Good Essence", "Evil Essence"],
	"lawful essence": {
		name: "Lawful Outer Essence Shard",
		sortname: "Outer Essence Shard, Lawful",
		description: "As an action, I can attach/detach this flickering crystal to a Tiny object. While I hold or wear it, I can use it as a spellcasting focus for my Sorcerer spells, and when I use a Metamagic option on a spell, I can have myself or another I can see in 30 ft no longer be Charmed, Blinded, Deafened, Frightened, Poisoned, or Stunned.",
	},
	"chaotic essence": {
		name: "Chaotic Outer Essence Shard",
		sortname: "Outer Essence Shard, Chaotic",
		description: "As an action, I can attach/detach this flickering crystal to a Tiny object. While I hold or wear it, I can use it as a spellcasting focus for my Sorcerer spells, and when I use a Metamagic option on a spell, I can have one creature that was damaged by that spell have Disadv on its attacks and checks until my next turn starts.",
	},
	"good essence": {
		name: "Good Outer Essence Shard",
		sortname: "Outer Essence Shard, Good",
		description: "As an action, I can attach or detach this flickering crystal to a Tiny object. While I hold or wear it, I can use this crystal as a spellcasting focus for my Sorcerer spells, and when I use a Metamagic option on a spell, I can have one creature that I can see within 30 ft or myself gain 3d6 Temporary Hit Points.",
	},
	"evil essence": {
		name: "Evil Outer Essence Shard",
		sortname: "Outer Essence Shard, Evil",
		description: "As an action, I can attach or detach this flickering crystal to a Tiny object. While I hold or wear it, I can use this crystal as a spellcasting focus for my Sorcerer spells, and when I use a Metamagic option on a spell, I can have one creature that took damage from that spell take an extra 3d6 Necrotic damage.",
	},
}
MagicItemsList["shadowfell shard"] = {
	name: "Shadowfell Shard",
	source: [["T", 135]],
	type: "Wondrous Item",
	rarity: "Rare",
	attunement: true,
	prerequisite: "Requires attunement by a sorcerer",
	prereqeval: function (v) { return classes.known.sorcerer ? true : false; },
	description: "As an action, I can attach/detach this dull crystal to a Tiny object. While I hold or wear it, I can use it as a spellcasting focus for my Sorcerer spells, and when I use a Metamagic option on a spell, I can curse a target of that spell to have Disadv on checks and saves with an ability score of my choice until my next turn ends.",
	descriptionFull: [
		"This dull, cold crystal sits heavy and leaden, saturated by the Shadowfell's despair. As an action, you can attach the shard to a Tiny object (such as a weapon or a piece of jewelry) or detach it. It falls off if your attunement to it ends. You can use the shard as a spellcasting focus while you hold or wear it.",
		"When you use a Metamagic option on a spell while you are holding or wearing the shard, you can momentarily curse one creature targeted by the spell; choose one ability score, and until the end of your next turn, the creature has disadvantage on ability checks and saving throws that use that ability.",
	],
	weight: 1, // as crystal arcane focus
	action: [["action", " (attach/detach)"]],
}
MagicItemsList["feywild shard"] = {
	name: "Feywild Shard",
	source: [["T", 127]],
	type: "Wondrous Item",
	rarity: "Uncommon",
	attunement: true,
	prerequisite: "Requires attunement by a sorcerer",
	prereqeval: function (v) { return classes.known.sorcerer ? true : false; },
	description: "As an action, I can attach/detach this warm crystal that glints with sunset colors to a Tiny object. While I hold or wear it, I can use it as a spellcasting focus for my Sorcerer spells, and once per dawn when I use a Metamagic option on a spell, I can choose to roll on the Wild Magic Surge table (see Notes for the table).",
	descriptionFull: [
		"This warm crystal glints with the sunset colors of the Feywild sky and evokes whispers of emotional memory. As an action, you can attach the shard to a Tiny object (such as a weapon or a piece of jewelry) or detach it. It falls off if your attunement to it ends. You can use the shard as a spellcasting focus while you hold or wear it.",
		"When you use a Metamagic option on a spell while you are holding or wearing the shard, you can roll on the Wild Magic Surge table in the Player's Handbook. If the result is a spell, it is too wild to be affected by your Metamagic, and if it normally requires concentration, it doesn't require concentration in this case; the spell lasts for its full duration.",
		"If you don't have the Wild Magic Sorcerous Origin, once this property is used to roll on the Wild Magic Surge table, it can't be used again until the next dawn.",
	],
	weight: 1, // as crystal arcane focus
	action: [["action", " (attach/detach)"]],
	choices: ["As a wild magic sorcerer (Wild Mage)", "As any other sorcerer"],
	selfChoosing: function () {
		return classes.known.sorcerer && /wild mag(ic|e)/i.test(classes.known.sorcerer.subclass) ? "as a wild magic sorcerer (wild mage)" : "as any other sorcerer";
	},
	"as a wild magic sorcerer (wild mage)": {
		name: "Feywild Shard (Wild Mage)",
		description: "As an action, I can attach/detach this warm crystal that glints with sunset colors to a Tiny object. It falls off if my attunement ends. While I hold or wear it, I can use it as a spellcasting focus for my Sorcerer spells, and when I use a Metamagic option on a spell, I can choose to roll on the Wild Magic Surge table.",
		toNotesPage: !ClassSubList["sorcerer-wild magic"] || !ClassSubList["sorcerer-wild magic"].features.subclassfeature3 ? null : ClassSubList["sorcerer-wild magic"].features.subclassfeature3.toNotesPage.map(function (obj) {
			return Object.assign({}, obj, { origin: "Feywild Shard" });
		}),
	},
	"as any other sorcerer": {
		name: "Feywild Shard  ", // spaces are intentional
		description: "As an action, I can attach/detach this warm crystal that glints with sunset colors to a Tiny object. While I hold or wear it, I can use it as a spellcasting focus for my Sorcerer spells, and once per dawn when I use a Metamagic option on a spell, I can choose to roll on the Wild Magic Surge table (see Notes for the table).",
		extraLimitedFeatures: [{
			name: "Feywild Shard (wild magic surge)",
			usages: 1,
			recovery: "dawn",
		}],
	},
}
// Magic Items - Bard instruments
MagicItemsList["reveler's concertina"] = {
	name: "Reveler's Concertina",
	source: [["T", 134]],
	type: "Wondrous Item (Instrument)",
	rarity: "Rare",
	attunement: true,
	prerequisite: "Requires attunement by a bard",
	prereqeval: function (v) { return classes.known.bard ? true : false; },
	description: "While holding this concertina, I gain a +2 bonus to the saving throw DC of my Bard spells.\nOnce per dawn, I can use the concertina to cast *Otto's Irresistible Dance*.",
	descriptionFull: [
		"While holding this concertina, you gain a +2 bonus to the saving throw DC of your bard spells.",
		"As an action, you can use the concertina to cast *Otto's irresistible dance* from the item. This property of the concertina can't be used again until the next dawn.",
	],
	usages: 1,
	recovery: "dawn",
	additional: "Irresistible Dance",
	spellcastingAbility: "class", // https://www.sageadvice.eu/2015/11/27/hat-of-disguise-dc/
	spellcastingBonus: [{
		name: "Otto's Irresistible Dance",
		spells: ["otto's irresistible dance"],
		selection: ["otto's irresistible dance"],
		firstCol: "onceday",
	}],
	calcChanges: {
		spellCalc: [
			function (type, spellcasters, ability) {
				if (type === "dc" && spellcasters.indexOf("bard") !== -1) return 2;
			},
			"While holding the Reveler's Concertina, I gain a +2 bonus to the saving throw DCs of my Bard spells.",
		],
	},
}
MagicItemsList["lyre of building"] = {
	name: "Lyre of Building",
	source: [["T", 131]],
	type: "Wondrous Item (Instrument)",
	rarity: "Rare",
	attunement: true,
	prerequisite: "Requires attunement by a bard",
	prereqeval: function (v) { return classes.known.bard ? true : false; },
	description: "While holding this lyre, I can cast *mending* as an action. As a Reaction, I can protect a structure or object that takes damage from that damage type until the my next turn starts. As an action, I can play the lyre to cast *Fabricate*, *Move Earth*, *Passwall*, or *Summon Construct* from it, each spell once per dawn.",
	descriptionFull: [
		"While holding this lyre, you can cast *mending* as an action. You can also play the lyre as a reaction when an object or a structure you can see within 300 feet of you takes damage, causing it to be immune to that damage and any further damage of the same type until the start of your next turn.",
		"In addition, you can play the lyre as an action to cast *fabricate*, *move earth*, *passwall*, or *summon construct*, and that spell can't be cast from it again until the next dawn.",
	],
	weight: 2,
	spellcastingAbility: "class",
	spellcastingBonus: [{
		name: "At will",
		spells: ["mending"],
		selection: ["mending"],
		firstCol: "atwill",
	}, {
		name: "Once per dawn",
		spells: ["fabricate", "move earth", "passwall", "summon construct"],
		selection: ["fabricate", "move earth", "passwall", "summon construct"],
		firstCol: "onceday",
		times: 4,
	}],
	spellChanges: {
		"fabricate": {
			time: "1 a",
			changes: "Using the Lyre of Building, I can cast *Fabricate* as an action.",
		},
		"mending": {
			time: "1 a",
			changes: "Using the Lyre of Building, I can cast *Mending* as an action.",
		},
	},
	action: [["reaction", " (protect object)"]],
}
// Magic Items - Others
MagicItemsList["bell branch"] = {
	name: "Bell Branch",
	source: [["T", 122]],
	type: "Wondrous Item",
	rarity: "Rare",
	attunement: true,
	prerequisite: "Requires attunement by a druid or warlock",
	prereqeval: function (v) {
		return classes.known.druid || classes.known.warlock ? true : false;
	},
	description: "This silver branch with bells has 3 charges, regains 1d3 at dawn. I can use it as a spellcasting focus. As a Bonus Action, I can use 1 charge to detect if any Aberration, Celestial, Fey, Fiend, Undead, Construct, or Elemental are within 60 ft and not behind total cover. I can use 1 charge to cast *Protection from Evil and Good*.",
	descriptionFull: [
		"This silver implement is shaped like a tree branch and is strung with small golden bells. The branch is a spellcasting focus for your spells while you hold it.",
		"The branch has 3 charges, and it regains 1d3 expended charges daily at dawn. You can use the charges in the following ways while holding it.",
		" \u2022 As a bonus action, you can expend 1 charge to detect the presence of aberrations, celestials, constructs, elementals, fey, fiends, or undead within 60 feet of you. If such creatures are present and don't have total cover from you, the bells ring softly, their tone indicating the creature types present.",
		" \u2022 As an action, you can expend 1 charge to cast *protection from evil and good*.",
	],
	usages: 3,
	recovery: "dawn",
	additional: "regains 1d3",
	action: [["bonus action", " (detect)"]],
	spellFirstColTitle: "Ch",
	spellcastingAbility: "class",
	spellcastingBonus: [{
		name: "Protection from Evil/Good",
		spells: ["protection from evil and good"],
		selection: ["protection from evil and good"],
		firstCol: 1,
	}],
}
MagicItemsList["devotee's censer"] = {
	name: "Devotee's Censer",
	source: [["T", 126]],
	type: "Weapon",
	rarity: "Rare",
	attunement: true,
	prerequisite: "Requires attunement by a cleric or paladin",
	prereqeval: function (v) {
		return classes.known.cleric || classes.known.paladin ? true : false;
	},
	description: "I can use this magic flail, perforated with tiny holes, as a holy symbol. Attacks with it deal +1d8 Radiant damage. As a Bonus Action once per dawn, I can speak the command word to cause it to emanate incense out to 10 ft for 1 minute. At the start of each of my turns, all creatures in the incense heal 1d4 Hit Points.",
	descriptionFull: [
		"The rounded head of this flail is perforated with tiny holes, arranged in symbols and patterns. The flail counts as a holy symbol for you. When you hit with an attack using this magic flail, the target takes an extra 1d8 radiant damage.",
		"As a bonus action, you can speak the command word to cause the flail to emanate a thin cloud of incense out to 10 feet for 1 minute. At the start of each of your turns, you and any other creatures in the incense each regain 1d4 hit points. This property can't be used again until the next dawn.",
	],
	weight: 2,
	usages: 1,
	recovery: "dawn",
	action: [["bonus action", " (incense cloud)"]],
	weaponOptions: [{
		baseWeapon: "flail",
		regExpSearch: /^(?=.*devotee)(?=.*censer).*$/i,
		name: "Devotee's Censer",
		source: [["T", 126]],
		description: "+1d8 Radiant damage",
		selectNow: true,
	}],
}
MagicItemsList["guardian emblem"] = {
	name: "Guardian Emblem",
	source: [["T", 128]],
	type: "Wondrous Item",
	rarity: "Uncommon",
	attunement: true,
	prerequisite: "Requires attunement by a cleric or paladin",
	prereqeval: function (v) {
		return classes.known.cleric || classes.known.paladin ? true : false;
	},
	description: "As an action, I can attach or detach this symbol of a deity to a shield or a suit of armor. It has 3 charges, regaining all at dawn. As a Reaction when I or a creature I can see within 30 ft suffers a critical hit while I wear the armor or wield the shield that bears the emblem, I can expend 1 charge to turn it into a normal hit.",
	descriptionFull: [
		"This emblem is the symbol of a deity or a spiritual tradition. As an action, you can attach the emblem to a suit of armor or a shield or remove it.",
		"The emblem has 3 charges. When you or a creature you can see within 30 feet of you suffers a critical hit while you're wearing the armor or wielding the shield that bears the emblem, you can use your reaction to expend 1 charge to turn the critical hit into a normal hit instead.",
		"The emblem regains all expended charges daily at dawn.",
	],
	usages: 3,
	recovery: "dawn",
	additional: "stop critical",
	action: [
		["action", " (attach/detach)"],
		["reaction", " (stop critical)"],
	],
}
