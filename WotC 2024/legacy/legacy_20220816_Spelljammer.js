var iFileName = "legacy_20220816_Spelljammer.js";
RequiredSheetVersion("24.1.3");
/*
	This file adds the Character Options content from the "Spelljammer: Adventures in Space" set
	(the "Astral Adventurer's Guide" book and the "Boo's Astral Menagerie" book)
	to MPMB's Character Record Sheet
	that has not (yet) been replaced in any rulebook for the 5.5e (2024) rules

	Includes many contributions by Nod_Hero

	- ERRATA -
	Note that this document includes the second "Spelljammer: Adventures in Space" Errata
	https://media.dndbeyond.com/compendium-images/errata/SAiS/SJA-Errata.pdf
*/


// Unless otherwise noted, page numbers refer to the "Astral Adventurer's Guide" book
SourceList["S:AiS"] = {
	name: "Spelljammer: Adventures in Space",
	abbreviation: "S:AiS",
	abbreviationSpellsheet: "SJ",
	group: "Legacy Campaign Sourcebooks",
	campaignSetting: "Spelljammer",
	url: "https://dnd.wizards.com/products/spelljammer",
	date: "2022/08/16",
	defaultExcluded: true,
};

// Backgrounds from Astral Adventurer's Guide
BackgroundList["astral drifter"] = {
	regExpSearch: /^(?=.*astral)(?=.*drifter).*$/i,
	name: "Astral Drifter",
	source: [["S:AiS", 7]],
	skills: ["Insight", "Religion"],
	languageProfs: [["Any, Celestial or Gith recommended", 2]],
	gold: 10,
	equipleft: [
		["Diary", "", 5],
		["Ink, 1 ounce bottle of", 1, ""],
		["Ink pen (quill)", "", ""],
	],
	equipright: [
		["Traveler's clothes", "", 4],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Divine Contact",
	extra: ["Select a Divine Contact",
		"Corellon (art/magic; CG)",
		"Tymora (good fortune; CG)",
		"Fharlanghn (horizons/travel; NG)",
		"Istus (fate/destiny; N)",
		"Nuada (war/warriors; N)",
		"Zivilyn (wisdom; N)",
		"Arawn (life/death; NE)",
		"Hecate (magic/moons; CE)",
		"Celestian (stars/wanderers; N)",
		"Ptah (knowledge/secrets; LN)",
	],
};
BackgroundFeatureList["divine contact"] = {
	description: "I am 20d6 years older than I look, thanks to time spent in the Astral Sea without aging. While in the Astral Sea, I crossed paths with a wandering deity. The encounter was brief and nonviolent, yet it made a lasting impression on me. This deity saw fit to share one secret or obscure bit of cosmic lore with me. I gain the Magic Initiate [Cleric] feat.",
	source: [["S:AiS", 7]],
	featsAdd: [{ key: "magic initiate", choice: "cleric" }],
};

BackgroundList["wildspacer"] = {
	regExpSearch: /wildspacer/i,
	name: "Wildspacer",
	source: [["S:AiS", 8]],
	skills: ["Athletics", "Survival"],
	toolProfs: ["Navigator's tools", "Vehicles (space)"],
	gold: 10,
	equipleft: [
		["Hempen rope, feet of", 50, 0.2],
		["Grappling hook", "", 4],
	],
	equipright: [
		["Traveler's clothes", "", 4],
		["Belaying pin (club)", "", 2],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Wildspace Adaptation",
	extra: ["Select a Close Encounter",
		"Beholder",
		"Cosmic horror",
		"Feyr",
		"Lunar dragon",
		"Mind flayer",
		"Neh-thalggu",
		"Neogi",
		"Space clown",
		"Vampirate",
		"Void scavver",
	],
};
BackgroundFeatureList["wildspace adaptation"] = {
	description: "I was raised in the void of Wildspace, home to asteroid miners, moon farmers, and other hardy folk. Life in Wildspace has toughened me to face the terrors and other challenges of the airless night and I've learned how to adapt to zero gravity. Being weightless doesn't give me Disadvantage on any of my melee attack rolls and I gain the Tough feat.",
	source: [["S:AiS", 8]],
	featsAdd: ["Tough"],
};

// Races from Astral Adventurer's Guide
AddSubRace("elf", "astral", {
	regExpSearch: /^(?!.*half)(?=.*\b(elfs?|elves|elvish|elven)\b)(?=.*\b(astral|silver void)\b).*$/i,
	name: "Astral Elf",
	source: [["S:AiS", 10]],
	plural: "Astral elves",
	age: " typically claim adulthood around age 100 and can live to be 750 years old. Because nothing ages in the Astral Plane, astral elves from that plane can be thousands of years old.",
	savetxt: {
		text: ["Magic can't put me to sleep"],
		adv_vs: ["Charmed"],
	},
	skills: ["Perception"],
	skillstxt: "Perception and choose any one skill which lasts until the end of my next Astral Trance",
	toolProfs: [["Astral Trance: tool or weapon", 1]],
	spellcastingAbility: [4, 5, 6],
	spellcastingBonus: [{
		name: "Astral Fire",
		spells: ["dancing lights", "light", "sacred flame"],
	}],
	features: {
		"starlight step": {
			name: "Starlight Step",
			minlevel: 1,
			usages: "Proficiency Bonus per ",
			usagescalc: "event.value = How('Proficiency Bonus');",
			recovery: "Long Rest",
			action: [["bonus action", ""]],
		},
	},
	trait: [
		"**Astral Elf**" + (typePF ? "\r" : " ") + "##\u25C6 Creature Type##. Humanoid (elf).",
		"##\u25C6 Starlight Step##. A number of times per Long Rest equal to my Proficiency Bonus, as a Bonus Action, I can magically teleport up to 30 ft to an unoccupied space I can see.",
		"##\u25C6 Astral Trance##. I don't need to sleep, and magic can't put me to sleep. I can finish a Long Rest in 4 hours if I spend those hours in a trancelike meditation, during which I remain conscious. Whenever I finish this trance, I gain proficiency with one skill, and one weapon or tool of my choice. They last until I finish my next Long Rest.",
	],
});
RaceList["autognome"] = {
	regExpSearch: /autognome/i,
	name: "Autognome",
	source: [["S:AiS", 11]],
	plural: "Autognomes",
	size: 4,
	speed: {
		walk: { spd: 30, enc: 20 },
	},
	age: " can live for centuries, typically up to 500 years",
	armorOptions: [{
		regExpSearch: /^(?=.*armou?red)(?=.*casing).*$/i,
		name: "Armored Casing",
		source: [["S:AiS", 2]],
		ac: 13,
		selectNow: true,
	}],
	extraLimitedFeatures: [{
		name: "Built for Success",
		usages: "Proficiency Bonus per ",
		usagescalc: "event.value = How('Proficiency Bonus');",
		recovery: "Long Rest",
	}],
	dmgres: ["Poison"],
	savetxt: {
		adv_vs: ["Paralyzed", "Poisoned"],
		immune: ["disease"],
	},
	toolProfs: [["Tool of my choice", 2]],
	trait: typePF ? [
		"**Autognome** ##\u25C6 Construct##. My creature type is Construct.",
		"##\u25C6 Armored Casing##. My base AC is 13 + my Dexterity modifier.",
		"##\u25C6 Built for Success##. For my Prof B per Long Rest, I can add +1d4 to an attack, check, or save, after I see the roll, but before the effect.",
		"##\u25C6 Mechanical Nature##. I don't need to eat, drink or breathe.",
		"##\u25C6 Sentry's Rest##. I only need 6 hours to finish a Long Rest if I stay in an inactive and motionless state during which I'm conscious.",
		"##\u25C6 Healing Machine##. *Cure Wounds*, *Healing Word*, and *Spare the Dying* work on me. If *Mending* is cast on me, I can expend one HD like during a Short Rest to regain Hit Points.",
	] : [
		"**Autognome** (my creature type is Construct; I don't need to eat, drink or breathe)",
		"##\u25C6 Armored Casing##. While I'm not wearing armor, my AC is 13 + my Dexterity modifier.",
		"##\u25C6 Built for Success##. For my Prof B per Long Rest, I can add +1d4 to an attack, check, or save. I can do this after seeing the d20 roll, but before knowing the roll's effects.",
		"##\u25C6 Sentry's Rest##. I only need 6 hours to finish a Long Rest if I stay inactive and motionless.",
		"##\u25C6 Healing Machine##. *Cure Wounds*, *Healing Word*, and *Spare the Dying* work on me. If *Mending* is cast on me, I can expend one HD like during a Short Rest to regain Hit Points.",
	],
};
RaceList["giff"] = {
	regExpSearch: /giff|hippofolk/i,
	name: "Giff",
	source: [["S:AiS", 12]],
	plural: "Giff",
	size: 3,
	speed: {
		walk: { spd: 30, enc: 20 },
		swim: { spd: "walk", enc: "walk" },
	},
	features: {
		"astral spark": {
			name: "Astral Spark",
			minlevel: 1,
			usages: "Proficiency Bonus per ",
			usagescalc: "event.value = How('Proficiency Bonus');",
			recovery: "Long Rest",
			additional: ProficiencyBonusList.map(function (n) { return "+" + n + " Force damage"; }),
		},
	},
	weaponProfs: [false, false, ["Firearms"]],
	carryingCapacity: 2,
	savetxt: { text: ["Adv on Str saves and checks"] },
	advantages: [["Strength", true]],
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (/firearm/i.test(v.theWea.type) || /firearm/i.test(v.theWea.list)) {
					fields.Description = fields.Description.replace(/([;,]? ?loading|loading[;,]? ?)/i, "");
					fields.Description += (fields.Description ? "; " : "") + "No Disadv at long range";
				};
			},
			"I ignore the Loading quality of firearms and attacking at long range with a firearm doesn't impose Disadvantage on my attack roll.",
		],
	},
	trait: [
		"**Giff**",
		"##\u25C6 Astral Spark##. My Proficiency Bonus times per Long Rest, when I hit a target with a Simple or Martial weapon, I can once per turn deal extra Force damage equal to my Prof" + (typePF ? "iciency" : "") + " Bonus.",
		"##\u25C6 Firearms Mastery##. I am proficient with firearms, ignore their Loading property, and they don't impose Disadvantage at long range.",
		"##\u25C6 Hippo Build##. I have Advantage on Strength saves and checks. In addition, I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift.",
	],
};
RaceList["hadozee"] = {
	regExpSearch: /hadozee/i,
	name: "Hadozee",
	source: [["S:AiS", 13]],
	plural: "Hadozees",
	size: [3, 4],
	speed: {
		walk: { spd: 30, enc: 20 },
		climb: { spd: "walk", enc: "walk" },
	},
	action: [
		["bonus action", "Dexterous Feet (Use an Object)"],
		["reaction", "Glide (if 10 ft above ground)"],
	],
	features: {
		"hadozee dodge": {
			name: "Hadozee Dodge",
			minlevel: 1,
			usages: "Proficiency Bonus per ",
			usagescalc: "event.value = How('Proficiency Bonus');",
			recovery: "Long Rest",
			additional: ProficiencyBonusList.map(function (n) { return "1d6+" + n + " damage"; }),
			action: [["reaction", ""]],
		},
	},
	trait: [
		"**Hadozee**",
		"##\u25C6 Dexterous Feet##. As a Bonus Action, I can manipulate an object, open or close a door or container, or pick up or set down a Tiny object.",
		"##\u25C6 Glide##. As a Reaction when I fall at least 10 ft above the ground, I can extend my skin membranes to glide my Speed horizontally, and take 0 damage from the fall.",
		"##\u25C6 Hadozee Dodge##. A number of times equal to my Proficiency Bonus per Long Rest, as a Reaction when I take damage, I can reduce the damage by 1d6 + my Proficiency Bonus.",
	],
};
RaceList["plasmoid"] = {
	regExpSearch: /plasmoid/i,
	name: "Plasmoid",
	source: [["S:AiS", 14]],
	plural: "Plasmoids",
	size: [3, 4],
	speed: {
		walk: { spd: 30, enc: 20 },
	},
	languageProfs: ["Common", 1],
	vision: [["Darkvision", 60]],
	dmgres: ["Acid", "Poison"],
	savetxt: {
		adv_vs: ["Poisoned"],
		text: ["Adv on checks to escape grapple"],
	},
	action: [
		["action", "Reshape Body"],
		["bonus action", "Extrude/Reabsorb Pseudopod"],
	],
	trait: [
		"**Plasmoid** ##\u25C6 Ooze##. My creature type is Ooze." + (typePF ? "\r" : " ") + "##\u25C6 Hold Breath##. I can hold my breath for 1 hour.",
		"##\u25C6 Amorphous##. I can squeeze through a 1-inch wide space without my equipment or clothes. " + (typePF ? "I have Adv on checks to escape a grapple." : "I also have Advantage on ability checks I make to escape a grapple."),
		"##\u25C6 Shape Self##. As an action, I can reshape my body to have a head and limbs, or back to a limbless blob. As a Bonus Action, I can extrude/reabsorb a pseudopod up to 6 inch wide and 10 ft long. As part of the Bonus Action, it can manipulate objects, open/close doors, or pick up/set down a Tiny object. It can carry up to 10 lb, but not attack or use magic items.",
	],
};
RaceList["thri-kreen"] = {
	regExpSearch: /thri.?kreen/i,
	name: "Thri-Kreen",
	source: [["S:AiS", 15]],
	plural: "Thri-kreen",
	size: [3, 4],
	speed: {
		walk: { spd: 30, enc: 20 },
	},
	// age, height and weight taken from Shining South (2004) p17 (using the male option)
	age: " reach maturity around 7 years old and typically live around 30 years",
	height: " stand between 5 and 7 feet tall (5'2\" + 2d10\")",
	weight: " weigh between 140 and 375 pounds (135 + 2d10 \xD7 2d6 lb)",
	heightMetric: " stand from 1,6 to over 2 metres tall (160 + 5d10 cm)",
	weightMetric: " weigh between 60 and 180 kg (60 + 5d10 \xD7 4d6 / 10 kg)",
	languageProfs: ["Common", "Thri-kreen Telepathy", 1],
	vision: [["Darkvision", 60]],
	armorOptions: [{
		regExpSearch: /^(?=.*carapace)(?=.*chameleon).*$/i,
		name: "Chameleon Carapace",
		source: [["S:AiS", 4]],
		ac: 13,
		selectNow: true,
	}],
	action: [["action", "Chameleon Carapace"]],
	trait: [
		"**Thri-Kreen** ##\u25C6 Monstrosity##. My creature type is Monstrosity.",
		"##\u25C6 Chameleon Carapace##. My base AC is 13 + Dex mod. As an action, " + (typePF ? "I can gain Adv on Stealth checks to hide in my current surroundings." : "I can have it match my current surroundings, granting me Adv on Stealth checks to hide in those surroundings."),
		"##\u25C6 Secondary Arms##. " + (typePF ? "I have two slightly smaller arms below my primary pair of arms. I can use these secondary arms" : "Able") + " to manipulate objects, hold Tiny objects, or wield Light weapons.",
		"##\u25C6 Sleepless##. I don't " + (typePF ? "" : "require ") + "sleep. I rest by refraining from strenuous activity.",
		"##\u25C6 " + (typePF ? "Thri-kreen " : "") + "Telepathy##. I can't speak, but can communicate telepathically to any willing creatures within 120 ft that understand at least one language. Any can break this (no action).",
	],
};

// Spells from Astral Adventurer's Guide
SpellsList["air bubble"] = {
	name: "Air Bubble",
	classes: ["artificer", "druid", "ranger", "sorcerer", "wizard"],
	source: [["S:AiS", 22]],
	reqLoS: true,
	level: 2,
	school: "Conj",
	time: "Act",
	range: "60 ft",
	components: "S",
	duration: "24 h",
	description: "Create spectral globe of fresh air around a head of 1+2/SL willing creatures, lasts for the duration",
	descriptionFull: [
		"You create a spectral globe around the head of a willing creature you can see within range. The globe is filled with fresh air that lasts until the spell ends. If the creature has more than one head, the globe of air appears around only one of its heads (which is all the creature needs to avoid suffocation, assuming that all its heads share the same respiratory system).",
		"***At Higher Levels***. When you cast this spell using a spell slot of 3rd level or higher, you can create two additional globes of fresh air for each slot level above 2nd.",
	],
};
SpellsList["create spelljamming helm"] = {
	name: "Create Spelljamming Helm",
	nameShort: typePF ? "Create spelljamming helm" : "Create spelljammin' helm", // Lowercase or won't fit, shortened for Colourful version
	classes: ["artificer", "wizard"],
	source: [["S:AiS", 22]],
	level: 5,
	school: "Trans",
	time: "Act",
	range: "Touch",
	components: "V,S,M\u2020",
	compMaterial: "A crystal rod worth at least 5,000 gp, which the spell consumes",
	duration: "Instantaneous",
	description: "One Large or smaller unoccupied chair I touch transforms into a spelljamming helm (5000gp cons.)",
	descriptionFull: "Holding the rod used in the casting of the spell, you touch a Large or smaller chair that is unoccupied. The rod disappears, and the chair is transformed into a *spelljamming helm*.",
};

// Magic Items from Astral Adventurer's Guide
MagicItemsList["fish suit"] = {
	name: "Fish Suit",
	source: [["S:AiS", 22]],
	type: "Wondrous Item",
	rarity: "Very Rare",
	savetxt: { immune: ["surrounding gas"] },
	speed: { swim: { spd: "walk", enc: "walk" } }, // flying speed is more situational, so not added to the listing
	description: "This bulky suit takes 1 minute to don or doff. While worn, I can breathe in an airless environment and am Immune to any gas that surrounds me. The suit grants me a Swim Speed equal to my Speed while underwater, or a Fly Speed equal to my Speed in an environment with no gravity.",
	descriptionFull: "This bulky suit, which fully encases your head and body, takes 1 minute to don or doff. While worn, it enables you to breathe in an airless environment and renders you immune to the harmful effects of any gas that surrounds you. The suit also grants you a swimming speed equal to your walking speed while underwater, or a flying speed equal to your walking speed in an environment with no gravity.",
};
MagicItemsList["spelljamming helm"] = {
	name: "Spelljamming Helm",
	source: [["S:AiS", 23]],
	type: "Wondrous Item",
	rarity: "Rare",
	attunement: true,
	prerequisite: "Requires attunement by a spellcaster",
	prereqeval: function (v) { return v.isSpellcaster; },
	description: "While attuned to this ornate chair and sitting in it, I can propel and maneuver the ship on which it has been installed through space, air, or water up to the ship's speed. I need to maintain Concentration as if concentrating on a spell to do so. The ship can move faster in space if nothing is nearby. See Notes page.",
	descriptionFull: [
		"The function of this ornate chair is to propel and maneuver a ship on which it has been installed through space and air. It can also propel and maneuver a ship on water or underwater, provided the ship is built for such travel. The ship in question must weigh 1 ton or more.",
		"The sensation of being attuned to a *spelljamming helm* is akin to the pins-and-needles effect one experiences after one's arm or leg falls asleep, but not as painful.",
		"While attuned to a *spelljamming helm* and sitting in it, you gain the following abilities for as long as you maintain concentration (as if concentrating on a spell):",
		" \u2022 You can use the *spelljamming helm* to move the ship through space, air, or water up to the ship's speed. If the ship is in space and no other objects weighing 1 ton or more are within 1 mile of it, you can use the *spelljamming helm* to move the vessel fast enough to travel 100 million miles in 24 hours.",
		" \u2022 You can steer the vessel, albeit in a somewhat clumsy fashion, in much the way that a rudder or oars can be used to maneuver a seafaring ship.",
		" \u2022 At any time, you can see and hear what's happening on and around the vessel as though you were standing in a location of your choice aboard it.",
		"***Transfer Attunement***. You can use an action to touch a willing spellcaster. That creature attunes to the *spelljamming helm* immediately, and your attunement to it ends.",
	],
	action: [["action", " (Transfer Attunement)"]],
	toNotesPage: [{
		name: "Spelljamming Helm",
		useDescriptionFull: function (str) {
			return str.replace("as long as me maintain", "as long as I maintain");
		},
	}],
};
MagicItemsList["wildspace orrery"] = {
	name: "Wildspace Orrery",
	source: [["S:AiS", 23]],
	type: "Wondrous Item",
	rarity: "Uncommon",
	description: "Inside a Wildspace system, this portable arcane device automatically tracks the positions and movements of all suns, planets, moons, and comets within that system, projecting a display of all these bodies in the space above its current location, marking itself as a white, pulsating pinprick of light.",
	descriptionFull: "Inside a Wildspace system, this portable arcane device automatically tracks the positions and movements of all suns, planets, moons, and comets within that system, projecting a display of all these bodies in the space above its current location. In that display, a white, pulsating pinprick of light marks the orrery's location.",
};

// Beasts from Boo's Astral Menagerie
CreatureList["space eel"] = {
	name: "Space Eel",
	nameAlt: ["Eel, Space"],
	nameThis: "eel",
	source: [["S:AiS", 55]], // page number in Boo's Astral Menagerie
	size: 4,
	type: "Beast",
	alignment: "Unaligned",
	ac: 14,
	hp: 7,
	hd: [2, 6],
	speed: "10 ft, fly 30 ft",
	scores: [12, 18, 11, 1, 10, 1],
	senses: "Darkvision 60 ft",
	passivePerception: 10,
	challengeRating: "1/2",
	proficiencyBonus: 2,
	attacksAction: 2,
	attacks: [{
		name: "Bite",
		ability: 1,
		damage: [1, 6, "piercing"],
		range: "Melee (5 ft)",
		description: "Attaches on hit; While attached, auto-damage at turn start, but can't make bite attacks",
		tooltip: "On a hit, the eel attaches to the target. While attached, the eel can't make bite attacks. Instead, the target takes the bite damage at the start of each of the eel's turns. The eel can detach itself as a Bonus Action. A creature, including the target, can use its action to detach the eel.",
	}, {
		name: "Tail Spine",
		ability: 1,
		damage: [1, 4, "piercing"],
		range: "Melee (5 ft)",
		description: "Target DC 10 Con save or Poisoned and Paralyzed for 1 min (can save as each turn ends)",
		tooltip: "The target must succeed on a DC 10 Constitution saving throw or be Poisoned for 1 minute. Until this poison ends, the target is Paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
	}],
	features: [{
		name: "Unusual Nature",
		description: "The [THIS] doesn't require air.",
	}],
	actions: [{
		name: "Multiattack",
		description: "As an Attack action if not attached to a creature, the [THIS] can make one Bite and one Tail Spine attack.",
	}, {
		name: "Attach",
		description: "If the [THIS] hits with its bite attack, it attaches to the target. While attached, the [THIS] can't make bite attacks. Instead, the target takes the bite damage at the start of each of the [THIS]'s turns. The [THIS] can detach itself as a Bonus Action. A creature, including the target, can use its action to detach the [THIS].",
	}, {
		name: "Tail Spine",
		description: "If the [THIS] hits with its tail spine, the target must succeed on a DC 10 Constitution saving throw or be Poisoned for 1 minute. Until this poison ends, the target is Paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
	}],
	wildshapeString: [
		"##Senses##. Darkvision 60 ft",
		"##Unusual Nature##. Doesn't require air.",
		"##Multiattack##. 1 bite and 1 tail spine attack if not attached to a creature.",
		"##Bite##. Attaches to the target hit by its bite attack, dealing bite damage at the start of each turn. The eel can detach itself as a Bonus Action. A creature, including the target, can use its action to detach the eel.",
	].join("\n"),
};
CreatureList["space guppy"] = {
	name: "Space Guppy",
	nameAlt: ["Guppy, Space"],
	nameThis: "guppy",
	source: [["S:AiS", 55]], // page number in Boo's Astral Menagerie
	size: 4,
	type: "Beast",
	alignment: "Unaligned",
	ac: 13,
	hp: 3,
	hd: [1, 6],
	speed: "0 ft, fly 30 ft",
	scores: [3, 16, 10, 1, 10, 1],
	senses: "Darkvision 60 ft",
	passivePerception: 10,
	challengeRating: "0",
	proficiencyBonus: 2,
	attacksAction: 1,
	attacks: [{
		name: "Tail Slap",
		ability: 2,
		damage: [1, "", "bludgeoning"],
		range: "Melee (5 ft)",
	}],
	traits: [{
		name: "Air Envelope",
		description: "If it has at least 1 Hit Point, the [THIS] can generate an air envelope around itself when in a vacuum. This air envelope can sustain the [THIS] and one other Tiny creature in its space indefinitely.",
	}, {
		name: "Flyby",
		description: "The [THIS] doesn't provoke Opportunity Attacks when it flies out of an enemy's reach.",
	}],
};
CreatureList["giant space hamster"] = {
	name: "Giant Space Hamster",
	nameAlt: ["Hamster, Giant Space"],
	source: [["S:AiS", 56]], // page number in Boo's Astral Menagerie
	size: 2,
	type: "Beast",
	alignment: "Unaligned",
	ac: 11,
	hp: 22,
	hd: [4, 10],
	speed: "30 ft, burrow 10 ft",
	scores: [14, 12, 10, 2, 12, 4],
	passivePerception: 11,
	challengeRating: "1/4",
	proficiencyBonus: 2,
	attacksAction: 1,
	attacks: [{
		name: "Bite",
		ability: 1,
		damage: [2, 4, "piercing"],
		range: "Melee (5 ft)",
	}],
};
CreatureList["space mollymawk"] = {
	name: "Space Mollymawk",
	nameAlt: ["Mollymawk, Space"],
	nameThis: "mollymawk",
	source: [["S:AiS", 57]], // page number in Boo's Astral Menagerie
	size: 4,
	type: "Beast",
	alignment: "Unaligned",
	ac: 12,
	hp: 3,
	hd: [1, 6],
	speed: "10 ft, fly 50 ft",
	scores: [6, 14, 11, 3, 12, 3],
	skills: {
		"perception": 5,
	},
	passivePerception: 15,
	challengeRating: "0",
	proficiencyBonus: 2,
	attacksAction: 1,
	attacks: [{
		name: "Bite",
		ability: 2,
		damage: [1, 4, "piercing"],
		range: "Melee (5 ft)",
	}],
	traits: [{
		name: "Flyby",
		description: "The [THIS] doesn't provoke Opportunity Attacks when it flies out of an enemy's reach.",
	}, {
		name: "Hold Breath",
		description: "The [THIS] can hold its breath for 15 minutes.",
	}],
};
CreatureList["space swine"] = {
	name: "Space Swine",
	nameAlt: ["Swine, Space"],
	source: [["S:AiS", 57]], // page number in Boo's Astral Menagerie
	size: 3,
	type: "Beast",
	alignment: "Unaligned",
	ac: 11,
	hp: 22,
	hd: [4, 8],
	speed: "40 ft, fly 40 ft",
	scores: [14, 12, 10, 2, 12, 4],
	skills: {
		"perception": 4,
		"survival": 4,
	},
	passivePerception: 14,
	challengeRating: "1/4",
	proficiencyBonus: 2,
	attacksAction: 1,
	attacks: [{
		name: "Bite",
		ability: 1,
		damage: [1, 6, "piercing"],
		range: "Melee (5 ft)",
	}],
	traits: [{
		name: "Barding",
		description: "Space swine that are trained for battle are typically outfitted with half-plate barding and are referred to as death squealers. This barding gives them an AC of 16.",
	}],
	wildshapeString: " ", // the barding trait is not applicable to wild shapes
};
