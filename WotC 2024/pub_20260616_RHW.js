var iFileName = "pub_20260616_RHW.js";
RequiredSheetVersion("24.0.9-beta");
// This file adds material from Ravenloft: The Horrors Within to MPMB's Character Record Sheet for 5.5e

SourceList["RHW"] = {
	name: "Ravenloft: The Horrors Within (incomplete)",
	abbreviation: "RHW",
	group: "Supplements",
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
					changes: "I can cast Summon Beast only by expending 3 Sorcery Points, not by using spell slots. It then doesn't require a Material component and enemies within 5 ft of the summoned spirit have Disadvantage on saves against my spells. I can also choose to cast it in a way that it doesn't require concentration, but then it has a duration of 1 minute and ends early if I cast it again.",
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

