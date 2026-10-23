var iFileName = "legacy_20140930_MM.js";
RequiredSheetVersion("24.2.0");
// This file adds the player-material from the 2014 Monster Manual to MPMB's Character Record Sheet that has not (yet) been replaced in any rulebook for the 5.5e (2024) rules

// Define the source
SourceList["M"] = {
	name: "2014 Monster Manual",
	abbreviation: "MM'14",
	group: "Legacy Sources",
	url: "https://dnd.wizards.com/products/monster-manual",
	date: "2014/09/30",
	defaultExcluded: true,
};

// Even though the shield guardian is in the SRD, the description for its control amulet is only found in the Monster Manual
MagicItemsList["shield guardian amulet"] = {
	name: "Shield Guardian Amulet",
	source: [["M", 271], ["RotF", 149]],
	type: "Wondrous Item",
	rarity: "Rare",
	attunement: true,
	notLegalAL: true,
	prerequisite: "Requires attunement by a humanoid",
	prereqeval: function (v) { return !CurrentRace.known || !RaceList[CurrentRace.known] || !/creature type/i.test(RaceList[CurrentRace.known].trait); },
	description: "A **Shield Guardian** is magically linked to this amulet. It has AC 10, 10 HP, and Immunity to Poison and Psychic damage. I know the distance and direction of the guardian while I'm wearing the amulet and I'm on the same plane as it. While within 10 ft of it, I can use the amulet to reactivate it with a DC 20 Arcana check.",
	descriptionFull: [
		"The amulet is a 4-inch-wide disk composed of silver-framed wood, with a rune carved into its face. A *detect magic* spell reveals a magical aura of enchantment around the amulet.",
		"Every shield guardian has an amulet magically linked to it. A shield guardian can have only one corresponding amulet, and if that amulet is destroyed, the shield guardian is incapacitated until a replacement amulet is created.",
		"A shield guardian's amulet is subject to direct attack if it isn't being worn or carried. It has AC 10, 10 hit points, and immunity to poison and psychic damage. Crafting an amulet requires 1 week and costs 1,000 gp in components.",
		"A shield guardian's solitary focus is to protect the amulet's wearer. The amulet's wearer can command the guardian to attack its enemies or to guard the wielder against attack. If an attack threatens to injure the wearer, the construct can magically absorb the blow into its own body, even at a distance.",
		"A humanoid that attunes to this amulet knows the distance and direction of the shield guardian, provided the amulet and the guardian are on the same plane of existence. As an action, the amulet's attuned wearer can try to reactivate the shield guardian, doing so with a successful DC 20 Intelligence (Arcana) check. Reactivation can only be attempted while the amulet and guardian are within 10 feet of each other.",
	],
	creaturesAdd: [["Shield Guardian"]],
	weight: 1,
};


// Player characters as Lycanthropes race - even though they are in the SRD, the rules for applying their abilities to player characters are not (added in v13.1.13)
/*
Gains:
 - speed in non-humanoid form
 - damage immunities
 - traits
 - actions that don't involve equipment

 P.S. multiattack is a weird one, going with the interpretation here: https://rpg.stackexchange.com/questions/70694
*/
var MM_lycanthrope = {
	createDefaultTraits: function (sLycanName, sLycanPlural) {
		// the traits of a human
		var obj = {
			name: "Human " + sLycanName,
			plural: "Human " + sLycanPlural,
			age: " reach adulthood in their late teens and live less than 100 years",
			height: " are about 5-7 ft tall (4'8\" + 2d10\")",
			weight: " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
			heightMetric: " are about 150-210 cm tall (145 + 5d10 cm)",
			weightMetric: " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
		}
		return obj;
	},
	createMessage: function (sLycanName, aOtherGains) {
		var aGained = [
			"Its Speed in nonhumanoid form.",
			"Natural attacks in nonhumanoid form (e.g. bite/claw).",
			"Damage Immunity to Bludgeoning, Piercing, and Slashing from nonmagical attacks that aren't silvered.",
			"Shapechanger trait.",
		].concat(aOtherGains);
		return "The lycanthrope species are template species. All features and traits of the base species are retained and all the " + sLycanName + "'s features are added to it." +
		"\nIf you choose not to use a previous species as the base species or you selected a " + sLycanName + " at character creation, a human will be used as the base species." +
		"\nThe " + sLycanName + "'s features added to the base species are:" +
		desc(aGained, "\n   \u2022 ") +
		"\n\nThe possible alignment change and moon-related limitations of a lycanthrope are not mentioned in this species. Discuss with your DM how they want to handle lycanthropy."
	},
};
RaceList["lycanthrope"] = {
	regExpSearch: /lycanthrope|were.?(bear|boar|rat|tiger|wol(f|ve))/i,
	name: "Lycanthrope",
	source: [["M", 206]],
	plural: "Lycanthropes",
	size: 3,
	speed: { walk: { spd: 30, enc: 20 } },
	variants: [], // filled by the AddSubRace() calls below
};
AddSubRace("lycanthrope", "werebear", {
	regExpSearch: /were.?bear|^(?=.*lycanthrope)(?=.*bear).*$/i,
	name: "Werebear",
	source: [["M", 208]],
	plural: "Werebears",
	trait: [
		"**Werebear** (Strength increases to 19)",
		"##\u25C6 Shapechanger##. As an action, I can polymorph into a Large bear-hybrid, into a Large bear, or back. In those forms, I gain 40 ft Speed, 30 ft Climb Speed, +1 AC, and a bite and claw attack. My stats don't otherwise change when transformed, but my equipment doesn't change and I revert back when I die. Humanoids hit by my bite must save or be cursed with werebear lycanthropy.",
		"##\u25C6 Keen Smell##. I have Adv on Wis (Perception) checks using smell.",
	],
	features: {
		lycanthrope_features: {
			name: "Lycanthrope",
			source: [["M", 208]],
			minlevel: 1,
			toNotesPage: [{
				name: "Lycanthrope",
				note: [
					"My Strength score increases to 19 unless it was already higher.",
					"As an action, I can polymorph into a Large bear-hybrid, into a Large bear, or back. In my bear and hybrid forms, I gain 40 ft Speed, 30 ft Climb Speed, and +1 AC. In these forms I also gain a bite and claw attack, but can't use bite as part of a multiattack. My stats don't otherwise change, my equipment doesn't transform and I revert back if I die. Humanoids hit by my bite must make a Con save or be cursed with werebear lycanthropy. The DC to avoid this curse is 8 + my Proficiency Bonus + my Constitution modifier.",
				],
				page3notes: true,
			}, {
				name: "Multiattack",
				note: [
					"As an Attack action, I can make two attacks, but none of these with my Werebear Bite.",
				],
				page3notes: true,
			}],
			action: [
				["action", "Shapechange (bear/hybrid/back)"],
				["action", "Multiattack (2 attacks, no bite)"],
			],
			scoresOverride: [19, 0, 0, 0, 0, 0],
			savetxt: { immune: ["Bludgeoning, Piercing, and Slashing damage unless from magic/silver"] },
			weaponOptions: [{
				name: "Werebear Bite",
				regExpSearch: /^(?=.*(werebear|lycanthrope))(?=.*bite).*$/i,
				source: [["M", 208]],
				ability: 1,
				type: "Natural",
				damage: [2, 10, "piercing"],
				range: "Melee",
				description: "Bear and Hybrid form only; Humanoids Con save or cursed",
				abilitytodamage: true,
				selectNow: true,
			}, {
				name: "Werebear Claw",
				regExpSearch: /^(?=.*(werebear|lycanthrope))(?=.*\bclaws?\b).*$/i,
				source: [["M", 208]],
				ability: 1,
				type: "Natural",
				damage: [2, 8, "slashing"],
				range: "Melee",
				description: "Bear and Hybrid form only",
				abilitytodamage: true,
				selectNow: true,
			}],
			extraAC: [{
				name: "+1 in bear/hybrid form",
				mod: 0,
				text: "I gain a +1 bonus to AC while I'm in my bear or bear-hybrid form. This bonus is not added by default, it has to be added/removed manually when changing form.",
			}],
		},
		lycanthrope_keen_senses: {
			name: "Keen Smell",
			source: [["M", 208]],
			minlevel: 1,
			toNotesPage: [{
				name: "Keen Smell",
				note: [
					"I have Advantage on Wisdom (Perception) checks that rely on smell.",
				],
				page3notes: true,
			}],
			vision: [["Keen Smell", 0]],
		},
	},
	useFromPreviousRace: {
		updateName: "prefix", // e.g. "Drow Werebear"
		message: MM_lycanthrope.createMessage("werebear", [
			"Strength increase to 19 unless it was already higher.",
			"Keen Smell trait.",
		]),
		defaultTraits: MM_lycanthrope.createDefaultTraits("Werebear", "Werebears"),
		gainTraits: ["everything"],
	},
});
AddSubRace("lycanthrope", "wereboar", {
	regExpSearch: /were.?boar|^(?=.*lycanthrope)(?=.*boar).*$/i,
	name: "Wereboar",
	source: [["M", 209]],
	plural: "Wereboars",
	trait: [
		"**Wereboar** (Strength increases to 17)",
		"##\u25C6 Shapechanger##. As an action, I can polymorph into a boar-" + (typePF ? "" : "humanoid ") + "hybrid, into a boar, or back. In those forms, I gain 40 ft Speed, +1 AC, and a tusks attack. My stats don't otherwise change when transformed, but my equipment doesn't change and I revert back when I die. Humanoids hit by my tusks must save or be cursed" + (typePF ? "." : " with lycanthropy."),
		"##\u25C6 Relentless##. If I'm reduced to 0 HP by 14 damage or less, I can instead drop to 1 HP.",
		"##\u25C6 Charge##. If I move 15 ft straight before a tusks hit, +2d6 damage and Str save or Prone.",
	],
	features: {
		lycanthrope_features: {
			name: "Lycanthrope",
			source: [["M", 209]],
			minlevel: 1,
			toNotesPage: [{
				name: "Lycanthrope",
				note: [
					"My Strength score increases to 17 unless it was already higher.",
					"As an action, I can polymorph into a boar-humanoid hybrid, into a boar, or back. In my boar and hybrid forms, I gain 40 ft Speed, a tusks attack, and +1 AC. My stats don't otherwise change, my equipment doesn't transform and I revert back if I die. Humanoids hit by my tusks must make a Con save or be cursed with wereboar lycanthropy. The DC to avoid this curse is 8 + my Proficiency Bonus + my Constitution modifier.",
				],
				page3notes: true,
			}, {
				name: "Multiattack",
				note: [
					"As an Attack action, I can make two attacks, but only one of these with my Wereboar Tusks.",
				],
				page3notes: true,
				additional: "in humanoid or hybrid form only",
			}],
			action: [
				["action", "Shapechange (boar/hybrid/back)"],
				["action", "Multiattack (2 attacks, max 1 tusks)"],
			],
			scoresOverride: [17, 0, 0, 0, 0, 0],
			savetxt: { immune: ["Bludgeoning, Piercing, and Slashing damage unless from magic/silver"] },
			weaponOptions: [{
				name: "Wereboar Tusks",
				regExpSearch: /^(?=.*(wereboar|lycanthrope))(?=.*tusks).*$/i,
				source: [["M", 209]],
				ability: 1,
				type: "Natural",
				damage: [2, 6, "slashing"],
				range: "Melee",
				description: "Boar/hybrid form only; Humanoids Con save or cursed; Charge for +2d6 damage",
				abilitytodamage: true,
				selectNow: true,
			}],
			extraAC: [{
				name: "+1 in boar/hybrid form",
				mod: 0,
				text: "I gain a +1 bonus to AC while I'm in my boar or boar-hybrid form. This bonus is not added by default, it has to be added/removed manually when changing form.",
			}],
		},
		wereboar_relentless: {
			name: "Relentless",
			source: [["M", 209]],
			minlevel: 1,
			toNotesPage: [{
				name: "Relentless",
				note: [
					"If I'm reduced to 0 HP by an effect dealing 14 damage or less, I can instead drop to 1 HP.",
				],
				page3notes: true,
				additional: "in boar or hybrid form only",
			}],
			usages: 1,
			recovery: "Short Rest",
		},
		wereboar_charge: {
			name: "Charge",
			source: [["M", 209]],
			minlevel: 1,
			toNotesPage: [{
				name: "Charge",
				note: [
					"If, in one turn, I move straight for 15 ft and then hit with my tusks, I deal +2d6 damage. Those hit like this must make a Str save or be knocked Prone (DC 8 + Prof B + Str mod).",
				],
				page3notes: true,
				additional: "in boar or hybrid form only",
			}],
		},
	},
	useFromPreviousRace: {
		updateName: "prefix", // e.g. "High Elf Wereboar"
		message: MM_lycanthrope.createMessage("wereboar", [
			"Strength increase to 17 unless it was already higher.",
			"Relentless and Charge traits.",
		]),
		defaultTraits: MM_lycanthrope.createDefaultTraits("Wereboar", "Wereboars"),
		gainTraits: ["everything"],
	},
	abilitySave: 1, // for charge trait
});
AddSubRace("lycanthrope", "wererat", {
	regExpSearch: /were.?rat|^(?=.*lycanthrope)(?=.*rat).*$/i,
	name: "Wererat",
	source: [["M", 209]],
	plural: "Wererats",
	trait: [
		"**Wererat** (Dexterity increases to 15)",
		"##\u25C6 Shapechanger##. As an action, I can transform into a rat-humanoid hybrid, into a giant rat, or back. In those forms, I gain a bite attack, which can use Strength or Dexterity. In my giant rat form, I also become small and gain Darkvision 60 ft. My stats don't otherwise change when transformed, but my equipment doesn't change and I revert back when I die. Humanoids hit by my bite must save or be cursed with wererat lycanthropy.",
		"##\u25C6 Keen Smell##. I have Adv on Wis (Perception) checks using smell.",
	],
	features: {
		lycanthrope_features: {
			name: "Lycanthrope",
			source: [["M", 209]],
			minlevel: 1,
			toNotesPage: [{
				name: "Lycanthrope",
				note: [
					"My Dexterity score increases to 15 unless it was already higher.",
					"As an action, I can transform into a rat-humanoid hybrid, into a giant rat (Small), or back. In my rat and hybrid forms, I gain a bite attack that can use either Strength or Dexterity. In my giant rat form, I also become small and gain Darkvision 60 ft. My stats don't otherwise change, my equipment doesn't transform and I revert back if I die. Humanoids hit by my bite must make a Con save or be cursed with wererat lycanthropy. The DC to avoid this curse is 8 + my Proficiency Bonus + my Constitution modifier.",
				],
				page3notes: true,
			}, {
				name: "Multiattack",
				note: [
					"As an Attack action, I can make two attacks, but only one of these with my Wererat Bite.",
				],
				page3notes: true,
				additional: "in humanoid or hybrid form only",
			}],
			action: [
				["action", "Shapechange (giant rat/hybrid/back)"],
				["action", "Multiattack (2 attacks, max 1 bite)"],
			],
			scoresOverride: [0, 15, 0, 0, 0, 0],
			savetxt: { immune: ["Bludgeoning, Piercing, and Slashing damage unless from magic/silver"] },
			weaponOptions: [{
				name: "Wererat Bite",
				regExpSearch: /^(?=.*(wererat|lycanthrope))(?=.*bite).*$/i,
				source: [["M", 209]],
				ability: 2,
				type: "Natural",
				damage: [1, 4, "piercing"],
				range: "Melee",
				description: "Rat and Hybrid form only; Humanoids Con save or cursed",
				abilitytodamage: true,
				isWereratBite: true, // for calcChanges.atkAdd
				selectNow: true,
			}],
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (v.theWea.isWereratBite) fields.Mod = v.StrDex;
					},
					"I can use Strength or Dexterity for my Wererat Bite, whichever is higher.",
				],
			},
		},
		lycanthrope_keen_senses: {
			name: "Keen Smell",
			source: [["M", 209]],
			minlevel: 1,
			toNotesPage: [{
				name: "Keen Smell",
				note: [
					"I have Advantage on Wisdom (Perception) checks that rely on smell.",
				],
				page3notes: true,
			}],
			vision: [["Keen Smell", 0]],
		},
	},
	useFromPreviousRace: {
		updateName: "prefix", // e.g. "Lizardfolk Wererat"
		message: MM_lycanthrope.createMessage("wererat", [
			"Dexterity increase to 15 unless it was already higher.",
			"Keen Smell trait.",
		]),
		defaultTraits: MM_lycanthrope.createDefaultTraits("Wererat", "Wererats"),
		gainTraits: ["everything"],
	},
});
AddSubRace("lycanthrope", "weretiger", {
	regExpSearch: /were.?tiger|^(?=.*lycanthrope)(?=.*tiger).*$/i,
	name: "Weretiger",
	source: [["M", 210]],
	plural: "Weretigers",
	trait: [
		"**Weretiger** (Strength increases to 17)",
		"##\u25C6 Shapechanger##. As an action, I can polymorph into a tiger-humanoid hybrid, into a Large tiger, or back. In those forms, I gain 40 ft Speed, a bite attack, and a claw attack. My stats don't otherwise change when transformed, but my equipment doesn't transform and I revert back when I die. Humanoids hit by my bite must save or be cursed with weretiger lycanthropy." +
		(typePF ? "\r##\u25C6 Pounce##. " : " ") + "I can pounce in my tiger and hybrid form, see notes.",
		"##\u25C6 Keen Hearing and Smell##. I have Adv on Wis (Perception) checks using hearing or smell.",
	],
	features: {
		lycanthrope_features: {
			name: "Lycanthrope",
			source: [["M", 210]],
			minlevel: 1,
			toNotesPage: [{
				name: "Lycanthrope",
				note: [
					"My Strength score increases to 17 unless it was already higher. I gain 60 ft Darkvision.",
					"As an action, I can polymorph into a tiger-humanoid hybrid, into a Large tiger, or back. In my tiger and hybrid forms, I gain 40 ft Speed, a bite attack, and a claw attack. My stats don't otherwise change, my equipment doesn't transform and I revert back if I die. Humanoids hit by my bite must make a Con save or be cursed with weretiger lycanthropy. The DC to avoid this curse is 8 + my Proficiency Bonus + my Constitution modifier.",
				],
				page3notes: true,
			}, {
				name: "Multiattack",
				note: [
					"As an Attack action, I can make two attacks, but none of these with my Weretiger Bite.",
				],
				page3notes: true,
				additional: "in humanoid or hybrid form only",
			}],
			action: [
				["action", "Shapechange (tiger/hybrid/back)"],
				["action", "Multiattack (2 attacks, no bite)"],
			],
			scoresOverride: [17, 0, 0, 0, 0, 0],
			savetxt: { immune: ["Bludgeoning, Piercing, and Slashing damage unless from magic/silver"] },
			weaponOptions: [{
				name: "Weretiger Bite",
				regExpSearch: /^(?=.*(weretiger|lycanthrope))(?=.*bite).*$/i,
				source: [["M", 210]],
				ability: 1,
				type: "Natural",
				damage: [1, 10, "piercing"],
				range: "Melee",
				description: "Tiger and Hybrid form only; Humanoids Con save or cursed",
				abilitytodamage: true,
				selectNow: true,
			}, {
				name: "Weretiger Claw",
				regExpSearch: /^(?=.*(weretiger|lycanthrope))(?=.*\bclaws?\b).*$/i,
				source: [["M", 210]],
				ability: 1,
				type: "Natural",
				damage: [1, 8, "slashing"],
				range: "Melee",
				description: "Tiger and Hybrid form only; Can be used to pounce",
				abilitytodamage: true,
				selectNow: true,
			}],
			vision: [["Darkvision", 60]],
		},
		lycanthrope_keen_senses: {
			name: "Keen Hearing and Smell",
			source: [["M", 210]],
			minlevel: 1,
			toNotesPage: [{
				name: "Keen Hearing and Smell",
				note: [
					"I have Advantage on Wisdom (Perception) checks that rely on hearing or smell.",
				],
				page3notes: true,
			}],
			vision: [["Keen Hearing and Smell", 0]],
		},
		weretiger_pounce: {
			name: "Pounce",
			source: [["M", 210]],
			minlevel: 1,
			toNotesPage: [{
				name: "Pounce",
				note: [
					"If, in one turn, I move straight for 15 ft and then hit with my claw, I can pounce a target. The creature must make a Str save or be knocked Prone (DC 8 + Prof Bonus + Str mod). If I knocked someone Prone, I can then make a bite attack against them as a Bonus Action.",
				],
				page3notes: true,
				additional: "in tiger or hybrid form only",
			}],
			action: [["bonus action", "Bite after successful Pounce"]],
		},
	},
	useFromPreviousRace: {
		updateName: "prefix", // e.g. "Mountain Dwarf Weretiger"
		message: MM_lycanthrope.createMessage("weretiger", [
			"Strength increase to 17 unless it was already higher.",
			"Keen Hearing and Smell trait.",
		]),
		defaultTraits: MM_lycanthrope.createDefaultTraits("Weretiger", "Weretigers"),
		gainTraits: ["everything"],
	},
	abilitySave: 1, // for pounce trait
});
AddSubRace("lycanthrope", "werewolf", {
	regExpSearch: /were.?wol(f|ve)|^(?=.*lycanthrope)(?=.*wol(f|ve)).*$/i,
	name: "Werewolf",
	source: [["M", 211]],
	plural: "Werewolves",
	trait: [
		"**Werewolf** (Strength increases to 15)",
		"##\u25C6 Shapechanger##. As an action, I can polymorph into a wolf-humanoid hybrid, into a wolf, or back. In those forms, I gain 40 ft Speed, a bite attack, and +1 AC. In my hybrid form, I also gain a claws attack. My stats don't otherwise change when transformed, but my equipment doesn't transform and I revert back when I die. Humanoids hit by my bite must save or be cursed with werewolf lycanthropy.",
		"##\u25C6 Keen Hearing and Smell##. I have Adv on Wis (Perception) checks using hearing or smell.",
	],
	features: {
		lycanthrope_features: {
			name: "Lycanthrope",
			source: [["M", 211]],
			minlevel: 1,
			toNotesPage: [{
				name: "Lycanthrope",
				note: [
					"My Strength score increases to 15 unless it was already higher.",
					"As an action, I can polymorph into a wolf-humanoid hybrid, into a wolf, or back. In my wolf and hybrid forms, I gain 40 ft Speed, a bite attack, and +1 AC. In my hybrid form, I also gain a claws attack. My stats don't otherwise change, my equipment doesn't transform and I revert back if I die. Humanoids hit by my bite must make a Con save or be cursed with werewolf lycanthropy. The DC to avoid this curse is 8 + my Proficiency Bonus + my Constitution modifier.",
				],
				page3notes: true,
			}, {
				name: "Multiattack",
				note: [
					"As an Attack action, I can make two attacks, but only one of these with my Werewolf Bite.",
				],
				page3notes: true,
				additional: "in humanoid or hybrid form only",
			}],
			action: [
				["action", "Shapechange (wolf/hybrid/back)"],
				["action", "Multiattack (2 attacks, max 1 bite)"],
			],
			scoresOverride: [15, 0, 0, 0, 0, 0],
			savetxt: { immune: ["Bludgeoning, Piercing, and Slashing damage unless from magic/silver"] },
			weaponOptions: [{
				name: "Werewolf Bite",
				regExpSearch: /^(?=.*(werewolf|lycanthrope))(?=.*bite).*$/i,
				source: [["M", 211]],
				ability: 1,
				type: "Natural",
				damage: [1, 8, "piercing"],
				range: "Melee",
				description: "Wolf and Hybrid form only; Humanoids Con save or cursed",
				abilitytodamage: true,
				selectNow: true,
			}, {
				name: "Wolf-hybrid Claws",
				regExpSearch: /^(?=.*wolf)(?=.*hybrid)(?=.*\bclaws?\b).*$/i,
				source: [["M", 211]],
				ability: 1,
				type: "Natural",
				damage: [2, 4, "slashing"],
				range: "Melee",
				description: "Hybrid form only",
				abilitytodamage: true,
				selectNow: true,
			}],
			extraAC: [{
				name: "+1 in wolf/hybrid form",
				mod: 0,
				text: "I gain a +1 bonus to AC while I'm in my wolf or wolf-hybrid form. This bonus is not added by default, it has to be added/removed manually when changing form.",
			}],
		},
		lycanthrope_keen_senses: {
			name: "Keen Hearing and Smell",
			source: [["M", 211]],
			minlevel: 1,
			toNotesPage: [{
				name: "Keen Hearing and Smell",
				note: [
					"I have Advantage on Wisdom (Perception) checks that rely on hearing or smell.",
				],
				page3notes: true,
			}],
			vision: [["Keen Hearing and Smell", 0]],
		},
	},
	useFromPreviousRace: {
		updateName: "prefix", // e.g. "Rock Gnome Werewolf"
		message: MM_lycanthrope.createMessage("werewolf", [
			"Strength increase to 15 unless it was already higher.",
			"Keen Hearing and Smell trait.",
		]),
		defaultTraits: MM_lycanthrope.createDefaultTraits("Werewolf", "Werewolves"),
		gainTraits: ["everything"],
	},
});
