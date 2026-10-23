var iFileName = "legacy_20211207_SCC.js";
RequiredSheetVersion("24.2.0");
// This file adds the player-material from Strixhaven: A Curriculum of Chaos to MPMB's Character Record Sheet that has not (yet) been replaced in any rulebook for the 5.5e (2024) rules

// Define the source
SourceList["SCC"] = {
	name: "Strixhaven: A Curriculum of Chaos",
	abbreviation: "SCC",
	abbreviationSpellsheet: "SC",
	group: "Legacy Campaign Sourcebooks",
	campaignSetting: "Magic: The Gathering",
	url: "https://dnd.wizards.com/products/strixhaven-curriculum-chaos",
	date: "2021/12/07",
	defaultExcluded: true,
};

// Race
RaceList["owlin"] = {
	regExpSearch: /owlin/i,
	name: "Owlin",
	source: [["SCC", 29]],
	plural: "Owlin",
	size: [3, 4],
	speed: {
		walk: { spd: 30, enc: 20 },
		fly: { spd: "walk", enc: 0 },
	},
	skills: ["Stealth"],
	vision: [["Darkvision", 120]],
	languageProfs: ["Common", 1],
	trait: [
		"**Owlin**",
		"##\u25C6 Flight##. Thanks to my wings, I have a Fly Speed equal to my Speed. I can't use this Fly Speed if I'm wearing Medium or Heavy armor.",
		"##\u25C6 Silent Feathers##. I have proficiency in the Stealth skill.",
	],
};

// Backgrounds
BackgroundList["lorehold student"] = {
	regExpSearch: /^(?=.*lorehold)(?=.*student).*$/i,
	name: "Lorehold Student",
	source: [["SCC", 31]],
	skills: ["History", "Religion"],
	languageProfs: [2],
	gold: 15,
	equipleft: [
		["Black ink, 1 ounce bottle of", 1, ""],
		["Ink pen", "", ""],
		["Tome of history", "", 5],
	],
	equipright: [
		["School uniform", "", 4], // as costume
		["Hammer", "", 3],
		["Hooded lantern", "", 2],
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Lorehold Initiate",
	trait: [
		"I thrive on esoteric lore. The more obscure the historical references I can include in everyday conversation, the better.",
		"By searching for these lost artifacts, I hope to find who I really am along the way.",
		"I can barely go a minute without talking about my research. I have so much knowledge in my head, and it needs to be let out somewhere!",
		"The spirits of the dead are so much more interesting to talk with than living classmates.",
		"I can speak eloquently about the historical ramifications of an ancient war. But ask me to add two-digit numbers together, and I'm a mess.",
		"In the end, it's all just entropy. Everything falls apart someday.",
	],
};
BackgroundFeatureList["lorehold initiate"] = {
	description: "I gain the Strixhaven Initiate feat for the Lorehold college. In addition, I add the following spells to the spell list of all my spellcasting classes, if any: *Comprehend Languages*, *Identify*, *Borrowed Knowledge*, *Locate Object*, *Speak with Dead*, *Spirit Guardians*, *Arcane Eye*, *Stone Shape*, *Flame Strike*, and *Legend Lore*.",
	source: [["SCC", 31]],
	calcChanges: {
		spellList: [
			function (spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["comprehend languages", "identify", "borrowed knowledge", "locate object", "speak with dead", "spirit guardians", "arcane eye", "stone shape", "flame strike", "legend lore"]);
			},
			"My background feature adds extra spells to the spell list(s) of my spellcasting class(es): *Comprehend Languages*, *Identify*, *Borrowed Knowledge*, *Locate Object*, *Speak with Dead*, *Spirit Guardians*, *Arcane Eye*, *Stone Shape*, *Flame Strike*, and *Legend Lore*.",
		],
	},
	featsAdd: [{ key: "strixhaven initiate", choice: "lorehold" }],
};
BackgroundList["prismari student"] = {
	regExpSearch: /^(?=.*prismari)(?=.*student).*$/i,
	name: "Prismari Student",
	source: [["SCC", 32]],
	skills: ["Acrobatics", "Performance"],
	languageProfs: [1],
	toolProfs: [["Artisan's tools or Musical instrument", 1]],
	gold: 10,
	equipleft: [
		["Black ink, 1 ounce bottle of", 1, ""],
		["Ink pen", "", ""],
		["Artisan's tools or musical instrument", "", ""],
	],
	equipright: [
		["School uniform", "", 4], // as costume
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Prismari Initiate",
	trait: [
		"I'm the life of the party, and I expect everyone's attention when I walk into a room.",
		"Two weeks ago, I was enthralled with my latest project. Now, I think it's garbage and deserves to be destroyed.",
		"I believe everyone has the ability to express their truest selves through art, and I'm happy to quietly push them in the right direction.",
		"Everyone is a critic, and I work to win them all over.",
		"I'm beset with such an overwhelming sense of ennui regarding my art. Nothing quite captures my attention anymore.",
		"Instead of confronting my negative emotions, I channel them into explosive artistic displays.",
	],
};
BackgroundFeatureList["prismari initiate"] = {
	description: "I gain the Strixhaven Initiate feat for the Prismari college. In addition, I add the following spells to the spell list of all my spellcasting classes, if any: *Chromatic Orb*, *Thunderwave*, *Flaming Sphere*, *Kinetic Jaunt*, *Haste*, *Water Walk*, *Freedom of Movement*, *Wall of Fire*, *Cone of Cold*, and *Conjure Elemental*.",
	source: [["SCC", 32]],
	calcChanges: {
		spellList: [
			function (spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["chromatic orb", "thunderwave", "flaming sphere", "kinetic jaunt", "haste", "water walk", "freedom of movement", "wall of fire", "cone of cold", "conjure elemental"]);
			},
			"My background feature adds extra spells to the spell list(s) of my spellcasting class(es): *Chromatic Orb*, *Thunderwave*, *Flaming Sphere*, *Kinetic Jaunt*, *Haste*, *Water Walk*, *Freedom of Movement*, *Wall of Fire*, *Cone of Cold*, and *Conjure Elemental*.",
		],
	},
	featsAdd: [{ key: "strixhaven initiate", choice: "prismari" }],
};
BackgroundList["quandrix student"] = {
	regExpSearch: /^(?=.*quandrix)(?=.*student).*$/i,
	name: "Quandrix Student",
	source: [["SCC", 33]],
	skills: ["Arcana", "Nature"],
	languageProfs: [1],
	toolProfs: [["Artisan's tools", 1]],
	gold: 15,
	equipleft: [
		["Black ink, 1 ounce bottle of", 1, ""],
		["Ink pen", "", ""],
		["Abacus", "", 2],
		["Book of arcane theory", "", 5],
	],
	equipright: [
		["School uniform", "", 4], // as costume
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Quandrix Initiate",
	trait: [
		"When I find a subject I'm interested in, I won't stop studying until I know everything about it. It keeps me up at night.",
		"I hope this all makes sense to me one day. Until then, I'm going to keep faking it.",
		"Equations and patterns come naturally to my mind. I wish friendship came just as easily.",
		"I believe I'm always the smartest person in the room. And I'll prove it, even if no one asks me to.",
		"If these classes have taught me anything, it's that reality is a lie, and nothing matters. So why bother?",
		"Before I graduate, I want to achieve something mathematically impossible. I must leave a legacy!",
	],
};
BackgroundFeatureList["quandrix initiate"] = {
	description: "I gain the Strixhaven Initiate feat for the Quandrix college. In addition, I add the following spells to the spell list of all my spellcasting classes, if any: *Entangle*, *Guiding Bolt*, *Enlarge/Reduce*, *Vortex Warp*, *Aura of Vitality*, *Haste*, *Control Water*, *Freedom of Movement*, *Circle of Power*, and *Passwall*.",
	source: [["SCC", 33]],
	calcChanges: {
		spellList: [
			function (spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["entangle", "guiding bolt", "enlarge/reduce", "vortex warp", "aura of vitality", "haste", "control water", "freedom of movement", "circle of power", "passwall"]);
			},
			"My background feature adds extra spells to the spell list(s) of my spellcasting class(es): *Entangle*, *Guiding Bolt*, *Enlarge/Reduce*, *Vortex Warp*, *Aura of Vitality*, *Haste*, *Control Water*, *Freedom of Movement*, *Circle of Power*, and *Passwall*.",
		],
	},
	featsAdd: [{ key: "strixhaven initiate", choice: "quandrix" }],
};
BackgroundList["silverquill student"] = {
	regExpSearch: /^(?=.*silverquill)(?=.*student).*$/i,
	name: "Silverquill Student",
	source: [["SCC", 35]],
	skills: ["Intimidation", "Persuasion"],
	languageProfs: [2],
	gold: 15,
	equipleft: [
		["Black ink, 1 ounce bottle of", 1, ""],
		["Ink pen", "", ""],
		["Book of poetry", "", 5],
	],
	equipright: [
		["School uniform", "", 4], // as costume
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Silverquill Initiate",
	trait: [
		"I'll say whatever I need to in order to maintain my high social status.",
		"I prefer saying the blunt truth over a pretty lie, and I don't particularly care whose feelings I hurt.",
		"I believe that uplifting my peers is the best way to succeed.",
		"I've mastered the art of using humor as a defense, and I always have a charming joke ready.",
		"I always wait before speaking, analyzing the situation for whichever angle is most advantageous to my goals.",
		"No one knows about the all-nighters I've pulled to keep my magic looking effortless, and I'm going to keep it that way.",
	],
};
BackgroundFeatureList["silverquill initiate"] = {
	description: "I gain the Strixhaven Initiate feat for the Silverquill college. In addition, I add the following spells to the spell list of all my spellcasting classes, if any: *Dissonant Whispers*, *Silvery Barbs*, *Calm Emotions*, *Darkness*, *Beacon of Hope*, *Daylight*, *Compulsion*, *Confusion*, *Dominate Person*, and *Rary's Telepathic Bond*.",
	source: [["SCC", 35]],
	calcChanges: {
		spellList: [
			function (spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["dissonant whispers", "silvery barbs", "calm emotions", "darkness", "beacon of hope", "daylight", "compulsion", "confusion", "dominate person", "rary's telepathic bond"]);
			},
			"My background feature adds extra spells to the spell list(s) of my spellcasting class(es): *Dissonant Whispers*, *Silvery Barbs*, *Calm Emotions*, *Darkness*, *Beacon of Hope*, *Daylight*, *Compulsion*, *Confusion*, *Dominate Person*, and *Rary's Telepathic Bond*.",
		],
	},
	featsAdd: [{ key: "strixhaven initiate", choice: "silverquill" }],
};
BackgroundList["witherbloom student"] = {
	regExpSearch: /^(?=.*witherbloom)(?=.*student).*$/i,
	name: "Witherbloom Student",
	source: [["SCC", 36]],
	skills: ["Nature", "Survival"],
	languageProfs: [1],
	toolProfs: ["Herbalism kit"],
	gold: 15,
	equipleft: [
		["Black ink, 1 ounce bottle of", 1, ""],
		["Ink pen", "", ""],
		["Book about plant identification", "", 5],
		["Iron pot", "", 10],
		["Herbalism kit", "", 3],
	],
	equipright: [
		["School uniform", "", 4], // as costume
		["Belt pouch (with coins)", "", 1],
	],
	feature: "Witherbloom Initiate",
	trait: [
		"I love brewing up a new recipe, even if some might be repulsed by my choice of ingredients. Or the final product. Or both.",
		"My fashion sense is like my garden: withered, black, and weird.",
		"I'm going to befriend every single monster in this swamp if it's the last thing I do.",
		"Everything in this world dies eventually. The question is, what will you do with the time you have left?",
		"I know we just met, but when you die, may I have your bones? For research.",
		"Don't interrupt me; I'm brooding.",
	],
};
BackgroundFeatureList["witherbloom initiate"] = {
	description: "I gain the Strixhaven Initiate feat for the Witherbloom college. In addition, I add the following spells to the spell list of all my spellcasting classes, if any: *Cure Wounds*, *Inflict Wounds*, *Lesser Restoration*, *Wither and Bloom*, *Revivify*, *Vampiric Touch*, *Blight*, *Death Ward*, *Antilife Shell*, and *Greater Restoration*.",
	source: [["SCC", 36]],
	calcChanges: {
		spellList: [
			function (spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["cure wounds", "inflict wounds", "lesser restoration", "wither and bloom", "revivify", "vampiric touch", "blight", "death ward", "antilife shell", "greater restoration"]);
			},
			"My background feature adds extra spells to the spell list(s) of my spellcasting class(es): *Cure Wounds*, *Inflict Wounds*, *Lesser Restoration*, *Wither and Bloom*, *Revivify*, *Vampiric Touch*, *Blight*, *Death Ward*, *Antilife Shell*, and *Greater Restoration*.",
		],
	},
	featsAdd: [{ key: "strixhaven initiate", choice: "witherbloom" }],
};

// Feats
FeatsList["strixhaven initiate"] = {
	name: "Strixhaven Initiate",
	source: [["SCC", 36]],
	description: "I learn two cantrips and a 1st-level spell from a list depending on my Strixhaven college. I can cast the spell once per Long Rest at its lowest level without expending a spell slot, and can cast it if I have a spell slot to do so. I can choose Int, Wis, or Cha as my spellcasting ability for this.",
	descriptionFull: [
		"You have studied some magical theory and have learned a few spells associated with Strixhaven University.",
		"Choose one of Strixhaven's colleges: Lorehold, Prismari, Quandrix, Silverquill, or Witherbloom. You learn two cantrips and one 1st-level spell based on the college you choose, as specified in the Strixhaven Spells table.",
		"You can cast the chosen 1st-level spell without a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast the spell using any spell slots you have.",
		"Your spellcasting ability for this feat's spells is Intelligence, Wisdom, or Charisma (choose when you select this feat).",
	],
	choices: ["Lorehold", "Prismari", "Quandrix", "Silverquill", "Witherbloom"],
	"lorehold": {
		description: "I learn two cantrips (*Light*, *Sacred Flame*, or *Thaumaturgy*) and a 1st-level spell from the Cleric or Wizard spell list. I can cast the spell once per Long Rest at its lowest level without expending a spell slot, and can cast it if I have a spell slot to do so. I can choose Int, Wis, or Cha as my spellcasting ability for this.",
		spellcastingAbility: [4, 5, 6],
		allowUpCasting: true,
		spellcastingBonus: [{
			name: "Cantrip",
			spells: ["light", "sacred flame", "thaumaturgy"],
			times: 2,
		}, {
			name: "1st-level spell",
			"class": ["cleric", "wizard"],
			level: [1, 1],
			firstCol: "oncelr+markedbox",
		}],
	},
	"prismari": {
		description: "I learn two cantrips (*Fire Bolt*, *Prestidigitation*, or *Ray of Frost*) and a 1st-level spell from the Bard or Sorcerer spell list. I can cast the spell once per Long Rest at its lowest level without expending a spell slot, and can cast it if I have a spell slot to do so. I can choose Int, Wis, or Cha as my spellcasting ability for this.",
		spellcastingAbility: [4, 5, 6],
		allowUpCasting: true,
		spellcastingBonus: [{
			name: "Cantrip",
			spells: ["fire bolt", "prestidigitation", "ray of frost"],
			times: 2,
		}, {
			name: "1st-level spell",
			"class": ["bard", "sorcerer"],
			level: [1, 1],
			firstCol: "oncelr+markedbox",
		}],
	},
	"quandrix": {
		description: "I learn two cantrips (*Druidcraft*, *Guidance*, or *Mage Hand*) and a 1st-level spell from the Druid or Wizard spell list. I can cast the spell once per Long Rest at its lowest level without expending a spell slot, and can cast it if I have a spell slot to do so. I can choose Int, Wis, or Cha as my spellcasting ability for this.",
		spellcastingAbility: [4, 5, 6],
		allowUpCasting: true,
		spellcastingBonus: [{
			name: "Cantrip",
			spells: ["druidcraft", "guidance", "mage hand"],
			times: 2,
		}, {
			name: "1st-level spell",
			"class": ["druid", "wizard"],
			level: [1, 1],
			firstCol: "oncelr+markedbox",
		}],
	},
	"silverquill": {
		description: "I learn two cantrips (*Sacred Flame*, *Thaumaturgy*, or *Vicious Mockery*) and a 1st-level spell from the Bard or Cleric spell list. I can cast the spell once per Long Rest at its lowest level without expending a spell slot, and can cast it if I have a spell slot to do so. I can have Int, Wis, or Cha as my spellcasting ability for this.",
		spellcastingAbility: [4, 5, 6],
		allowUpCasting: true,
		spellcastingBonus: [{
			name: "Cantrip",
			spells: ["sacred flame", "thaumaturgy", "vicious mockery"],
			times: 2,
		}, {
			name: "1st-level spell",
			"class": ["bard", "cleric"],
			level: [1, 1],
			firstCol: "oncelr+markedbox",
		}],
	},
	"witherbloom": {
		description: "I learn two cantrips (*Chill Touch*, *Druidcraft*, or *Spare the Dying*) and a 1st-level spell from the Druid or Wizard spell list. I can cast the spell once per Long Rest at its lowest level without using a spell slot, and can cast it if I have a spell slot to do so. I can choose Int, Wis, or Cha as my spellcasting ability for this.",
		spellcastingAbility: [4, 5, 6],
		allowUpCasting: true,
		spellcastingBonus: [{
			name: "Cantrip",
			spells: ["chill touch", "druidcraft", "spare the dying"],
			times: 2,
		}, {
			name: "1st-level spell",
			"class": ["druid", "wizard"],
			level: [1, 1],
			firstCol: "oncelr+markedbox",
		}],
	},
};
FeatsList["strixhaven mascot"] = {
	name: "Strixhaven Mascot",
	source: [["SCC", 37]],
	description: "I can cast *Find Familiar* as a Ritual and it can take the form of my college's mascot. When I take the Attack action on my turn, I can forgo 1 attack to have it make 1 attack with its Reaction. As an action once per Long Rest (or level 2 spell slot) while it's within 60 ft, I can teleport to swap places with it, if there's space.",
	descriptionFull: [
		"You have learned how to summon a Strixhaven mascot to assist you, granting you these benefits:",
		" \u2022 You can cast the *find familiar* spell as a ritual. Your familiar can take the form of the mascot associated with the college you chose for the Strixhaven Initiate feat: a **spirit statue mascot** (Lorehold), an **art elemental mascot** (Prismari), a **fractal mascot** (Quandrix), an **inkling mascot** (Silverquill), or a **pest mascot** (Witherbloom).",
		" \u2022 When you take the Attack action on your turn, you can forgo one attack to allow your mascot familiar to make one attack of its own with its reaction.",
		" \u2022 If your mascot familiar is within 60 feet of you, you can teleport as an action, swapping places with the familiar. If your destination space is too small for you to occupy, the teleportation fails and is wasted. Once you teleport in this way, you can't do so again until you finish a long rest, unless you expend a spell slot of 2nd level or higher to do it again.",
	],
	prerequisite: "4th level, Strixhaven Initiate feat",
	prereqeval: function (v) { return v.characterLevel >= 4 && CurrentFeats.known.indexOf("strixhaven initiate") !== -1; },
	extraLimitedFeatures: [{
		name: "Swap places with Strixhaven Mascot",
		recovery: "Long Rest",
		usages: 1,
		altResource: "SS 2+",
	}],
	spellcastingBonus: [{
		name: "Strixhaven Mascot",
		spells: ["find familiar"],
		selection: ["find familiar"],
		firstCol: SpellRitualTag,
	}],
	choices: ["Lorehold", "Prismari", "Quandrix", "Silverquill", "Witherbloom"],
	selfChoosing: function () {
		var iStrixInit = CurrentFeats.known.indexOf("strixhaven initiate");
		if (iStrixInit !== -1 && CurrentFeats.choices[iStrixInit]) {
			return CurrentFeats.choices[iStrixInit];
		}
	},
	"lorehold": {
		description: "I can cast *Find Familiar* as a Ritual and it can take the form of a **Spirit Statue Mascot**. When I take the Attack action on my turn, I can forgo 1 attack to have it make 1 attack with its Reaction. As an action once per Long Rest (or level 2 spell slot) while it's within 60 ft, I can teleport to swap places with it, if there's space.",
		creaturesAdd: [["Spirit Statue Mascot", true, false, "strixhaven_mascot"]],
	},
	"prismari": {
		description: "I can cast *Find Familiar* as a Ritual and it can take the form of an **Art Elemental Mascot**. When I do the Attack action on my turn, I can forgo 1 attack to have it make 1 attack with its Reaction. As an action once per Long Rest (or level 2 spell slot) while it's within 60 ft, I can teleport to swap places with it, if there's space.",
		creaturesAdd: [["Art Elemental Mascot", true, false, "strixhaven_mascot"]],
	},
	"quandrix": {
		description: "I can cast *Find Familiar* as a Ritual and it can take the form of a **Fractal Mascot**. When I take the Attack action on my turn, I can forgo one attack to have it make one attack with its Reaction. As an action once per Long Rest (or level 2 spell slot) while it's within 60 ft, I can teleport to swap places with it, if there's space.",
		creaturesAdd: [["Fractal Mascot", true, false, "strixhaven_mascot"]],
	},
	"silverquill": {
		description: "I can cast *Find Familiar* as a Ritual and it can take the form of an **Inkling Mascot**. When I take the Attack action on my turn, I can forgo one attack to have it make one attack with its Reaction. As an action once per Long Rest (or level 2 spell slot) while it's within 60 ft, I can teleport to swap places with it, if there's space.",
		creaturesAdd: [["Inkling Mascot", true, false, "strixhaven_mascot"]],
	},
	"witherbloom": {
		description: "I can cast *Find Familiar* as a Ritual and it can take the form of a **Pest Mascot**. When I take the Attack action on my turn, I can forgo one attack to have it make one attack with its Reaction. As an action once per Long Rest (or level 2 spell slot) while it's within 60 ft, I can teleport to swap places with it, if there's space.",
		creaturesAdd: [["Pest Mascot", true, false, "strixhaven_mascot"]],
	},
};
if (CompanionList.familiar && CompanionList.pact_of_the_chain) {
	CompanionList["strixhaven_mascot"] = Object.assign({}, CompanionList.pact_of_the_chain, {
		name: "Strixhaven Mascot",
		nameTooltip: "Strixhaven Mascot (feat)",
		nameMenu: "Strixhaven Mascot familiar (feat)",
		source: [["SCC", 37]],
		action: [
			["action", "Swap places with Strixhaven Mascot"],
		].concat(CompanionList.familiar.action),
		attributesAdd: Object.assign({}, CompanionList.familiar.attributesAdd, {
			notes: [{
				name: "Strixhaven Mascot: Find Familiar",
				source: [["SCC", 37]],
				useSpellDescription: "find familiar",
				formatSpellDescription: function (str) {
					str = str.replace(
						/an animal form I choose.*?Challenge Rating of 0\./,
						"the form of a CR 0 Beast or the mascot of my Strixhaven college."
					).replace(
						"but it can take other actions as normal.",
						"but it can take other actions as normal. When I take the Attack action, I can forgo one of my attacks to allow my familiar to use its Reaction to make one attack of its own. As an action while it is within 60 ft of me, we can teleport, swapping places if there is enough space. I can do this once per Long Rest, or by expending a spell slot of 2nd level or higher."
					);
					if (typePF) {
						str = str.replace(
							"I can't have more than one familiar at a time. If I cast this spell while I have a familiar, I instead cause it to adopt a new eligible form.",
							"I can't have multiple familiars. I can cast the spell again to change its form."
						).replace(
							/When the familiar drops to 0 Hit Points, it disappears\..*?anything it was wearing or carrying\./,
							"At 0 Hit Points, it disappears until I cast this spell again. As a Magic action, I can dismiss it to a pocket dimension (temporarily or forever) or make it reappear within 30 ft of me. When it disappears, it leaves behind anything it was wearing or carrying."
						);
					};
					return str;
				},
			}],
		}),
		attributesChange: function (sCrea, objCrea) {
			if (objCrea.type.toLowerCase() === "beast") {
				objCrea.type = ["Celestial", "Fey", "Fiend"];
				objCrea.subtype = "";
			};
		},
	});
}

// Spells
SpellsList["borrowed knowledge"] = {
	name: "Borrowed Knowledge",
	classes: ["bard", "cleric", "warlock", "wizard"],
	source: [["SCC", 37]],
	level: 2,
	school: "Div",
	time: "Act",
	range: "Self",
	components: "V,S,M\u0192",
	compMaterial: "A book worth at least 25 gp.",
	duration: "1 h",
	description: "Gain proficiency with one skill; ends early if cast again (25gp)",
	descriptionFull: "You draw on knowledge from spirits of the past. Choose one skill in which you lack proficiency. For the spell's duration, you have proficiency in the chosen skill. The spell ends early if you cast it again.",
};
SpellsList["kinetic jaunt"] = {
	name: "Kinetic Jaunt",
	classes: ["artificer", "bard", "sorcerer", "wizard"],
	source: [["SCC", 37]],
	level: 2,
	school: "Trans",
	time: "Bns",
	range: "Self",
	components: "S",
	duration: "Conc, 1 min",
	description: "+10 ft Speed; provoke no Opportunity atks; move through crea space, counts not as difficult terrain",
	descriptionFull: [
		"You magically empower your movement with dance-like steps, giving yourself the following benefits for the duration.",
		" \u2022 Your walking speed increases by 10 feet.",
		" \u2022 You don't provoke opportunity attacks.",
		" \u2022 You can move through the space of another creature, and it doesn't count as difficult terrain. If you end your turn in another creature's space, you are shunted to the last unoccupied space you occupied, and you take 1d8 force damage.",
	],
};
SpellsList["silvery barbs"] = {
	name: "Silvery Barbs",
	classes: ["bard", "sorcerer", "wizard"],
	source: [["SCC", 38]],
	reqLoS: true,
	level: 1,
	school: "Ench",
	time: "React",
	timeFull: "Reaction, which you take when a creature you can see within 60 feet of yourself succeeds on an attack roll, an ability check, or a saving throw",
	range: "60 ft",
	components: "V",
	duration: "Instantaneous",
	description: "1 crea reroll d20 and use lowest for atk, check, or save; 1 crea Adv next atk, check, or save in 1 min",
	descriptionFull: [
		"You magically distract the triggering creature and turn its momentary uncertainty into encouragement for another creature. The triggering creature must reroll the d20 and use the lower roll.",
		"You can then choose a different creature you can see within range (you can choose yourself). The chosen creature has advantage on the next attack roll, ability check, or saving throw it makes within 1 minute. A creature can be empowered by only one use of this spell at a time.",
	],
};
SpellsList["vortex warp"] = {
	name: "Vortex Warp",
	classes: ["artificer", "sorcerer", "wizard"],
	source: [["SCC", 38]],
	reqLoS: true,
	level: 2,
	school: "Conj",
	time: "Act",
	range: "90 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: "Con",
	description: "1 crea save or teleported to a sufficiently empty space of my choice within range; +30 ft/SL range",
	descriptionFull: [
		"You magically twist space around another creature you can see within range. The target must succeed on a Constitution saving throw (the target can choose to fail), or the target is teleported to an unoccupied space of your choice that you can see within range. The chosen space must be on a surface or in a liquid that can support the target without the target having to squeeze.",
		"***At Higher Levels***. When you cast this spell using a spell slot of 3rd level or higher, the range of the spell increases by 30 feet for each slot level above 2nd.",
	],
};

// Magic Items
MagicItemsList["bottle of boundless coffee"] = {
	name: "Bottle of Boundless Coffee",
	source: [["SCC", 38]],
	type: "Wondrous Item",
	rarity: "Common",
	description: "This metal bottle is full with delicious, comfortably warm coffee, but I can't feel the heat. It has a stopper on a little chain. It will accept only the coffee it produces. Each time I drink the coffee, I roll a d20. On a 1, the bottle stops dispensing coffee for 1 hour. Unless drunk, the coffee vanishes when it leaves the bottle.",
	descriptionFull: [
		"This metal bottle carries delicious, warm coffee. The bottle comes with a stopper, which is attached to the bottle by a little chain. Even when open, the bottle won't accept any liquid other than the coffee it produces. The coffee inside is always comfortably warm, and none of the heat can be felt through the bottle.",
		"Each time you drink the coffee, roll a d20. On a 1, the bottle refuses to dispense coffee for the next hour. If you pour coffee from the bottle, rather than drinking from it, the coffee vanishes the moment it leaves the bottle.",
	],
}
MagicItemsList["cuddly strixhaven mascot"] = {
	name: "Cuddly Strixhaven Mascot",
	source: [["SCC", 38]],
	type: "Wondrous Item",
	rarity: "Common",
	description: "This soft, Tiny, magic toy represents a Strixhaven mascot. As an action, I can press it to my arm, shoulder, or leg, and it attaches there for 1 hour or until I remove it as an action. Once per Long Rest while this toy is on my person, I can give myself Advantage on the save to avoid or end the Frightened condition on myself.",
	descriptionFull: [
		"Representing one of the mascots of Strixhaven, this soft, Tiny, magic toy is perfect for cuddling. If you press it to your arm, shoulder, or leg as an action, the toy stays attached there for 1 hour or until you use an action to remove it.",
		"The toy can also be used to fight off fear. When you make a saving throw to avoid or end the frightened condition on yourself, you can give yourself advantage on the roll if the toy is on your person. You must decide to do so before rolling the d20. If the save succeeds, you can't use the toy in this way until you finish a long rest.",
	],
	action: [["action", " (attach/remove)"]],
	usages: 1,
	recovery: "Long Rest",
}
MagicItemsList["lorehold primer"] = {
	name: "Lorehold Primer",
	source: [["SCC", 39]],
	type: "Wondrous Item",
	rarity: "Uncommon",
	attunement: true,
	prerequisite: "Requires attunement by a spellcaster",
	prereqeval: function (v) { return v.isSpellcaster; },
	description: "This magic textbook has 3 charges, regaining 1d3 used charges at dawn. While holding it, I can use 1 charge to add +1d4 to a History or Religion check, after the d20 roll. If I study it during a Long Rest, I can pick a level 1 Cleric or Wizard spell, which I can cast once without a spell slot before my next Long Rest ends.",
	descriptionFull: [
		"The *Lorehold Primer* is a magic textbook created at Strixhaven's Lorehold College. The primer has 3 charges, and it regains 1d3 expended charges daily at dawn. If you make an Intelligence (History) or Intelligence (Religion) check while holding the primer, you can expend 1 charge to give yourself 1d4 bonus to the check, immediately after you roll the d20.",
		"In addition, if you study the primer at the end of a long rest, you can choose one 1st-level spell from the cleric or wizard spell list. Before you finish your next long rest, you can cast the chosen spell once without a spell slot if you are holding the primer. Your spellcasting ability for this spell is your choice of Intelligence, Wisdom, or Charisma.",
	],
	extraLimitedFeatures: [{
		name: "Lorehold Primer (charges; regains 1d3)",
		usages: 3,
		recovery: "dawn",
	}, {
		name: "Lorehold Primer (cast spell)",
		usages: 1,
		recovery: "Long Rest",
	}],
	spellcastingAbility: [4, 5, 6],
	fCreateSCCPrimerSpellsEntry: function (bAddIt, sName, aClasses) {
		var sNameLC = sName.toLowerCase();
		if (bAddIt) {
			CurrentSpells[sNameLC] = {
				name: sName + " (item)",
				list: { "class": aClasses, level: [1, 1] },
				known: { spells: 1 },
				bonus: {
					bon0: {
						name: "Either select a spell",
						spells: [],
					},
					bon1: {
						name: 'or just select "Full List"',
						spells: [],
					},
					bon2: {
						name: "on the bottom left",
						spells: [],
					},
				},
				typeList: 4,
				refType: "item",
				allowUpCasting: false,
				firstCol: "LR",
			};
		} else {
			delete CurrentSpells[sNameLC];
		}
		SetStringifieds("spells"); CurrentUpdates.types.push("spells");
	},
	eval: function () {
		MagicItemsList["lorehold primer"].fCreateSCCPrimerSpellsEntry(true, "Lorehold Primer", ["cleric", "wizard"]);
	},
	removeeval: function () {
		MagicItemsList["lorehold primer"].fCreateSCCPrimerSpellsEntry(false, "Lorehold Primer");
	},
}
MagicItemsList["prismari primer"] = {
	name: "Prismari Primer",
	source: [["SCC", 39]],
	type: "Wondrous Item",
	rarity: "Uncommon",
	attunement: true,
	prerequisite: "Requires attunement by a spellcaster",
	prereqeval: function (v) { return v.isSpellcaster; },
	description: "This magic textbook has 3 charges, regaining 1d3 used charges at dawn. While holding it, I can use 1 charge to add +1d4 to an Acrobatics or Performance check, after the d20 roll. If I study it in a Long Rest, I can pick a level 1 Bard or Sorcerer spell, that I can cast once without a spell slot before my next Long Rest ends.",
	descriptionFull: [
		"The *Prismari Primer* is a magic textbook created at Strixhaven's Prismari College. The primer has 3 charges, and it regains 1d3 expended charges daily at dawn. If you make a Dexterity (Acrobatics) or a Charisma (Performance) check while holding the primer, you can expend 1 charge to give yourself a 1d4 bonus to the check, immediately after you roll the d20.",
		"In addition, if you study the primer at the end of a long rest, you can choose one 1st-level spell from the bard or sorcerer spell list. Before you finish your next long rest, you can cast the chosen spell once without a spell slot if you are holding the primer. Your spellcasting ability for this spell is your choice of Intelligence, Wisdom, or Charisma.",
	],
	extraLimitedFeatures: [{
		name: "Prismari Primer charges (regains 1d3)",
		usages: 3,
		recovery: "dawn",
	}, {
		name: "Prismari Primer (cast spell)",
		usages: 1,
		recovery: "Long Rest",
	}],
	spellcastingAbility: [4, 5, 6],
	eval: function () {
		if (MagicItemsList["lorehold primer"])
			MagicItemsList["lorehold primer"].fCreateSCCPrimerSpellsEntry(true, "Prismari Primer", ["bard", "sorcerer"]);
	},
	removeeval: function () {
		if (MagicItemsList["lorehold primer"])
			MagicItemsList["lorehold primer"].fCreateSCCPrimerSpellsEntry(false, "Prismari Primer");
	},
}
MagicItemsList["quandrix primer"] = {
	name: "Quandrix Primer",
	source: [["SCC", 39]],
	type: "Wondrous Item",
	rarity: "Uncommon",
	attunement: true,
	prerequisite: "Requires attunement by a spellcaster",
	prereqeval: function (v) { return v.isSpellcaster; },
	description: "This magic textbook has 3 charges, regaining 1d3 used charges at dawn. While holding it, I can use 1 charge to add +1d4 to an Arcana or Nature check, after the d20 roll. If I study it during a Long Rest, I can pick a level 1 Druid or Wizard spell, which I can cast once without a spell slot before my next Long Rest ends.",
	descriptionFull: [
		"The *Quandrix Primer* is a magic textbook created at Strixhaven's Quandrix College. The primer has 3 charges, and it regains 1d3 expended charges daily at dawn. If you make an Intelligence (Arcana) or an Intelligence (Nature) check while holding the primer, you can expend 1 charge to give yourself a 1d4 bonus to the check, immediately after you roll the d20.",
		"In addition, if you study the primer at the end of a long rest, you can choose one 1st-level spell from the druid or wizard spell list. Before you finish your next long rest, you can cast the chosen spell once without a spell slot if you are holding the primer. Your spellcasting ability for this spell is your choice of Intelligence, Wisdom, or Charisma.",
	],
	extraLimitedFeatures: [{
		name: "Quandrix Primer charges (regains 1d3)",
		usages: 3,
		recovery: "dawn",
	}, {
		name: "Quandrix Primer (cast spell)",
		usages: 1,
		recovery: "Long Rest",
	}],
	spellcastingAbility: [4, 5, 6],
	eval: function () {
		if (MagicItemsList["lorehold primer"])
			MagicItemsList["lorehold primer"].fCreateSCCPrimerSpellsEntry(true, "Quandrix Primer", ["druid", "wizard"]);
	},
	removeeval: function () {
		if (MagicItemsList["lorehold primer"])
			MagicItemsList["lorehold primer"].fCreateSCCPrimerSpellsEntry(false, "Quandrix Primer");
	},
}
MagicItemsList["silverquill primer"] = {
	name: "Silverquill Primer",
	source: [["SCC", 39]],
	type: "Wondrous Item",
	rarity: "Uncommon",
	attunement: true,
	prerequisite: "Requires attunement by a spellcaster",
	prereqeval: function (v) { return v.isSpellcaster; },
	description: "This magic textbook has 3 charges, regaining 1d3 used charges at dawn. While holding it, I can use 1 charge to add +1d4 to an Intimidation or Persuasion check, after the d20 roll. If I study it in a Long Rest, I can pick a level 1 Bard or Cleric spell. I can cast the spell once without a spell slot before my next Long Rest ends.",
	descriptionFull: [
		"The *Silverquill Primer* is a magic textbook created at Strixhaven's Silverquill College. The primer has 3 charges, and it regains 1d3 expended charges daily at dawn. If you make a Charisma (Intimidation) or a Charisma (Persuasion) check while holding the primer, you can expend 1 charge to give yourself a 1d4 bonus to the check, immediately after you roll the d20.",
		"In addition, if you study the primer at the end of a long rest, you can choose one 1st-level spell from the bard or cleric spell list. Before you finish your next long rest, you can cast the chosen spell once without a spell slot if you are holding the primer. Your spellcasting ability for this spell is your choice of Intelligence, Wisdom, or Charisma.",
	],
	extraLimitedFeatures: [{
		name: "Silverquill Primer charges (regains 1d3)",
		usages: 3,
		recovery: "dawn",
	}, {
		name: "Silverquill Primer (cast spell)",
		usages: 1,
		recovery: "Long Rest",
	}],
	spellcastingAbility: [4, 5, 6],
	eval: function () {
		if (MagicItemsList["lorehold primer"])
			MagicItemsList["lorehold primer"].fCreateSCCPrimerSpellsEntry(true, "Silverquill Primer", ["bard", "cleric"]);
	},
	removeeval: function () {
		if (MagicItemsList["lorehold primer"])
			MagicItemsList["lorehold primer"].fCreateSCCPrimerSpellsEntry(false, "Silverquill Primer");
	},
}
MagicItemsList["strixhaven pennant"] = {
	name: "Strixhaven Pennant",
	source: [["SCC", 39]],
	type: "Wondrous Item",
	rarity: "Common",
	description: "This magic pennant bears the symbol of Strixhaven or one of its colleges: Lorehold, Prismari, Quandrix, Silverquill, or Witherbloom. While I wave the pennant, the symbol on it glitters, and the pennant sheds Bright Light in a 10-ft radius and Dim Light for an additional 10 ft.",
	descriptionFull: "This magic pennant bears the symbol of Strixhaven or one of its colleges: Lorehold, Prismari, Quandrix, Silverquill, or Witherbloom. While you wave the pennant, the symbol on it glitters, and the pennant sheds bright light in a 10-foot-radius and dim light for an additional 10 feet.",
}
MagicItemsList["witherbloom primer"] = {
	name: "Witherbloom Primer",
	source: [["SCC", 39]],
	type: "Wondrous Item",
	rarity: "Uncommon",
	attunement: true,
	prerequisite: "Requires attunement by a spellcaster",
	prereqeval: function (v) { return v.isSpellcaster; },
	description: "This magic textbook has 3 charges, regaining 1d3 used charges at dawn. While holding it, I can use 1 charge to add +1d4 to a Nature or Survival check, after the d20 roll. If I study it during a Long Rest, I can pick a level 1 Druid or Wizard spell, which I can cast once without a spell slot before my next Long Rest ends.",
	descriptionFull: [
		"The *Witherbloom Primer* is a magic textbook created at Strixhaven's Witherbloom College. The primer has 3 charges, and it regains 1d3 expended charges daily at dawn. If you make an Intelligence (Nature) or Wisdom (Survival) check while holding the primer, you can expend 1 charge to give yourself a 1d4 bonus to the check, immediately after you roll the d20.",
		"In addition, if you study the primer at the end of a long rest, you can choose one 1st-level spell from the druid or wizard spell list. Before you finish your next long rest, you can cast the chosen spell once without a spell slot if you are holding the primer. Your spellcasting ability for this spell is your choice of Intelligence, Wisdom, or Charisma.",
	],
	extraLimitedFeatures: [{
		name: "Witherbloom Primer charges (regains 1d3)",
		usages: 3,
		recovery: "dawn",
	}, {
		name: "Witherbloom Primer (cast spell)",
		usages: 1,
		recovery: "Long Rest",
	}],
	spellcastingAbility: [4, 5, 6],
	eval: function () {
		if (MagicItemsList["lorehold primer"])
			MagicItemsList["lorehold primer"].fCreateSCCPrimerSpellsEntry(true, "Witherbloom Primer", ["druid", "wizard"]);
	},
	removeeval: function () {
		if (MagicItemsList["lorehold primer"])
			MagicItemsList["lorehold primer"].fCreateSCCPrimerSpellsEntry(false, "Witherbloom Primer");
	},
}
MagicItemsList["murgaxor's orb"] = {
	name: "Murgaxor's Orb",
	source: [["SCC", 126]],
	type: "Wondrous Item",
	rarity: "Legendary",
	attunement: true,
	description: "This sentient, chaotic evil orb bears a curse. It can communicate telepathically with any creature touching it. It can cast *Suggestion* on my turn, possibly on me. I have no control over it. Any Humanoid I touch while holding the orb must make a DC 10 Wisdom save or become cursed. See the Notes page.",
	descriptionFull: [
		"Roiling green mist fills this glass orb, which the exiled Strixhaven mage Murgaxor once used in foul magical experiments. Murgaxor's spirit has infused the orb, which he uses to spread a terrible curse among Strixhaven's students.",
		"***Sentience***. *Murgaxor's orb* is a sentient, chaotic evil magic item with the following properties:",
		" \u2022 The orb has an Intelligence of 20, a Wisdom of 16, and a Charisma of 16, as well as hearing and darkvision out to a range of 30 feet.",
		" \u2022 The orb can speak, read, and understand Common, and it can communicate telepathically with any creature touching it.",
		" \u2022 At any time during your turn, the orb can cast the *suggestion* spell (save DC 17), targeting you or one other creature that touched the orb within the last 24 hours. This isn't a power of the orb that you control.",
		"***Curse***. Any Humanoid you touch while holding the orb must succeed on a DC 10 Wisdom saving throw or become cursed. Each creature cursed by the orb bears an echo of Murgaxor's hateful thoughts, and that creature suffers from headaches that are persistent but not debilitating until the curse ends. On your turn, the orb can use an action to produce one of the following effects, targeting one or more creatures it has cursed:",
		" \u2022 **Unconsciousness**. The cursed creature falls unconscious for 1 hour. The creature is roused if it takes damage or someone uses an action to shake or slap it awake.",
		" \u2022 **Visions of Terror**. The cursed creature sees terrifying visions, causing it to view all creatures that aren't also cursed as dangerous monsters for 10 minutes. The cursed creature must use its action each round to make one attack against the nearest non-cursed creature. If the cursed creature has multiple possible targets, it attacks one at random. This effect ends if the cursed creature is incapacitated.",
		"After either of these effects ends, the affected creature is no longer cursed. The curse can also be removed from a creature with a *remove curse* spell or similar magic. All cases of the curse end if *Murgaxor's orb* is destroyed.",
		"***Magical Signature***. As a side effect of the orb's curse, the spell *detect magic* reveals an aura of enchantment surrounding creatures bearing the curse. This aura is distinctive, but in a way *detect magic* offers no further details about.",
		"***Destroying the Orb***. *Murgaxor's orb* has AC 18; 20 hit points; immunity to necrotic, poison, and psychic damage; and resistance to all other types of damage. If reduced to 0 hit points, the orb shatters.",
	],
	toNotesPage: [
		{
			name: "Murgaxor's Orb",
			useDescriptionFull: function (str) {
				return str.replace("targeting I", "targeting me");
			},
		},
		Object.assign({}, sentientItemConflictNote, { amendTo: "Murgaxor's Orb" }),
	],
}
MagicItemsList["masque charm"] = {
	name: "Masque Charm",
	source: [["SCC", 127]],
	type: "Wondrous Item",
	rarity: "Common",
	description: "While wearing this small silver pin, I can cast *Disguise Self* once per sunset. It has DC 13 to discern the disguise. I can have the spell last its normal 1 hour duration, or 6 hours. If I choose 6 hours, the charm becomes nonmagical when the spell ends. In either case, the spell ends if the pin is removed from me.",
	descriptionFull: "A *masque charm* is a small silver pin. While wearing this charm, you can use an action to cast the *disguise self* spell (DC 13 to discern the disguise). Once the spell is cast, it can't be cast from the charm again until the next sunset. When casting the spell, you can have the spell last for its normal 1 hour duration or for 6 hours. If you choose the 6-hour duration, the charm becomes nonmagical when the spell ends. In either case, the spell ends if the charm is removed from you.",
	spellcastingBonus: [{
		name: "Once per sunset",
		spells: ["disguise self"],
		selection: ["disguise self"],
		firstCol: "onceday",
	}],
	fixedDC: 13,
}

// Creatures (for Strixhaven Mascot feat)
CreatureList["art elemental mascot"] = { // Prismari
	name: "Art Elemental Mascot",
	nameAlt: ["Mascot, Art Elemental"],
	nameThis: "elemental",
	source: [["SCC", 185]],
	size: 4,
	type: "Elemental",
	companion: ["strixhaven_mascot"],
	alignment: "Neutral",
	ac: 11,
	hp: 18,
	hd: [4, 6],
	speed: "30 ft",
	scores: [6, 13, 12, 8, 11, 15],
	skills: {
		"performance": 4,
	},
	resistances: "Cold, Fire",
	immunities: "Poison; Poisoned",
	passivePerception: 10,
	languages: "understands the languages of its creator but can't speak",
	challengeRating: "1/4",
	proficiencyBonus: 2,
	attacksAction: 1,
	attacks: [{
		name: "Joyful Flare",
		ability: 2,
		damage: [2, 4, "fire"],
		range: "Melee (5 ft)",
		description: "",
	}, {
		name: "Melancholic Bolt",
		ability: 2,
		damage: [2, 4, "cold"],
		range: "30 ft",
		description: "",
	}],
	actions: [{
		name: "Captivating Artistry (1/Day)",
		description: "As an action, the [THIS] can target one creature it can see within 30 ft of itself. The target must succeed on a DC 12 Charisma saving throw or be Charmed for 1 minute. The Charmed target can repeat the save at the end of each of its turns, ending the effect on itself on a success.",
	}],
	traits: [{
		name: "Death Burst",
		description: "When the [THIS] dies, it explodes in a burst of colored light. Each creature within 5 ft of the [THIS] must succeed on a DC 11 Constitution saving throw or be Blinded for 1 minute. A Blinded creature can repeat the save at the end of each of its turns, ending the effect on itself on a success.",
	}],
};
CreatureList["fractal mascot"] = { // Quandrix
	name: "Fractal Mascot",
	nameAlt: ["Mascot, Fractal"],
	nameThis: "fractal",
	source: [["SCC", 192]],
	size: 4,
	type: "Construct",
	companion: ["strixhaven_mascot"],
	alignment: "Neutral",
	ac: 12,
	hp: 27,
	hd: [6, 6],
	speed: "30 ft",
	scores: [12, 14, 13, 7, 10, 5],
	immunities: "Poison; Poisoned",
	passivePerception: 10,
	languages: "understands the languages of its creator but can't speak",
	challengeRating: "1/4",
	proficiencyBonus: 2,
	attacksAction: 1,
	attacks: [{
		name: "Quantum Strike",
		ability: 1,
		damage: [1, 4, "force"],
		range: "30 ft",
		description: "+1d4 damage if the fractal is Medium or bigger",
	}],
	actions: [{
		name: "Augment",
		description: "As a Bonus Action, the [THIS] can increase its size by one category. While the [THIS] is Medium or bigger, it makes Strength checks and Strength saving throws with Advantage. The [THIS] can become no larger than Huge via this Bonus Action.",
	}, {
		name: "Diminish",
		description: "As a Bonus Action, the [THIS] can decrease its size by one category. While the [THIS] is Tiny, it makes attack rolls, Dexterity checks, and Dexterity saving throws with Advantage. The [THIS] can become no smaller than 1 ft in height via this Bonus Action.",
	}],
	traits: [{
		name: "Relative Density",
		description: "The [THIS] can move through creatures and objects as if they were difficult terrain. It takes 1d10 Force damage if it ends its turn inside an object.",
	}],
};
CreatureList["inkling mascot"] = { // Silverquill
	name: "Inkling Mascot",
	nameAlt: ["Mascot, Inkling"],
	nameThis: "inkling",
	source: [["SCC", 195]],
	size: 5,
	type: "Ooze",
	companion: ["strixhaven_mascot"],
	alignment: "Neutral",
	ac: 13,
	hp: 18,
	hd: [4, 4],
	speed: "10 ft, fly 30 ft (hover)",
	scores: [10, 16, 14, 6, 7, 11],
	skills: {
		"stealth": 5,
	},
	immunities: "Psychic; Blinded, Charmed, Deafened, Exhaustion, Prone",
	senses: "Blindsight 60 ft",
	passivePerception: 8,
	languages: "understands the languages of its creator but can't speak",
	challengeRating: "1/4",
	proficiencyBonus: 2,
	attacksAction: 1,
	attacks: [{
		name: "Blot",
		ability: 2,
		damage: [1, 4, "psychic"],
		range: "Melee (5 ft)",
		description: "",
	}],
	actions: [{
		name: "Ink Spray (1/Day)",
		description: "As an action, the [THIS] can spray viscous ink at one creature within 15 ft of itself. The target must succeed on a DC 12 Constitution saving throw or be Blinded until the end of the [THIS]'s next turn.",
	}, {
		name: "Shadow Stealth",
		description: "As a Bonus Action while in Dim Light or Darkness, the [THIS] can take the Hide action.",
	}],
	traits: [{
		name: "Amorphous",
		description: "The [THIS] can move through a space as narrow as 1 inch wide without squeezing.",
	}],
};
CreatureList["pest mascot"] = { // Witherbloom
	name: "Pest Mascot",
	nameAlt: ["Mascot, Pest"],
	nameThis: "pest",
	source: [["SCC", 203]],
	size: 5,
	type: "Monstrosity",
	companion: ["strixhaven_mascot"],
	alignment: "Unaligned",
	ac: 13,
	hp: 22,
	hd: [4, 4],
	speed: "30 ft",
	scores: [11, 14, 17, 5, 13, 4],
	skills: {
		"perception": 3,
	},
	senses: "Darkvision 60 ft",
	passivePerception: 13,
	challengeRating: "1/4",
	proficiencyBonus: 2,
	attacksAction: 1,
	attacks: [{
		name: "Bite",
		ability: 2,
		damage: [1, 4, "piercing"],
		range: "Melee (5 ft)",
		description: "",
	}],
	traits: [{
		name: "Regeneration",
		description: "The [THIS] regains 5 Hit Points at the start of its turn if it has at least 1 Hit Point. If it takes Fire damage, this trait doesn't function at the start of the [THIS]'s next turn.",
	}, {
		name: "Spiny Hide",
		description: "At the start of each of its turns, the [THIS] deals 1d4 Piercing damage to any creature grappling it or that it is grappling.",
	}],
};
CreatureList["spirit statue mascot"] = { // Lorehold
	name: "Spirit Statue Mascot",
	nameAlt: ["Mascot, Spirit Statue"],
	nameThis: "spirit statue",
	source: [["SCC", 216]],
	size: 3,
	type: "Construct",
	companion: ["strixhaven_mascot"],
	alignment: "Any alignment",
	ac: 14,
	hp: 26,
	hd: [4, 8],
	speed: "30 ft",
	scores: [14, 9, 15, 12, 13, 8],
	skills: {
		"arcana": 5,
		"history": 5,
		"perception": 3,
	},
	passivePerception: 13,
	languages: "any languages it knew in life",
	challengeRating: "1/4",
	proficiencyBonus: 2,
	attacksAction: 1,
	attacks: [{
		name: "Slam",
		ability: 1,
		damage: [1, 6, "bludgeoning"],
		range: "Melee (5 ft)",
		description: "",
	}],
	actions: [{
		name: "Counsel of the Past (2/Day)",
		description: "The [THIS] touches one creature. Once within the next 10 minutes, that creature can roll a d4 and add the number rolled to one ability check of its choice, immediately after rolling the d20.",
	}],
	traits: [{
		name: "Death Burst",
		description: "When the [THIS] is reduced to 0 Hit Points, the statue crumbles, and the spirit returns to the afterlife in a burst of ghostly white flame. Each creature within 5 ft of it must succeed on a DC 12 Constitution saving throw or take 1d6 Radiant damage.",
	}],
};
