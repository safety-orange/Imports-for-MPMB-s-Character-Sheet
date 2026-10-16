var iFileName = "legacy_20210518_VRGtR.js";
RequiredSheetVersion("24.1.3");
// This file adds the player-material from Van Richten's Guide to Ravenloft to MPMB's Character Record Sheet that has not (yet) been replaced in any rulebook for the 5.5e (2024) rules

// Define the source
SourceList["VRGtR"] = {
	name: "Van Richten's Guide to Ravenloft",
	abbreviation: "VRGtR",
	group: "Legacy Campaign Sourcebooks",
	campaignSetting: "Ravenloft",
	url: "https://dnd.wizards.com/products/van-richtens-guide-ravenloft",
	date: "2021/05/18",
	defaultExcluded: true,
};

// Backgrounds and Background Features
BackgroundFeatureList["inheritor"] = {
	description: "I'm the clear inheritor of a famed legacy, my ancestor or mentor. I've inherited a token that marks me as their inheritor. Revealing my legacy lets me swiftly learn the local opinion of my predecessor, if they heard of it. As rumors spread swiftly, locals will consider me either a hero or a threat. Heroes are welcomed, while threats are encouraged to leave.",
	source: [["VRGtR", 31]],
};
BackgroundFeatureList["mist wanderer (legacy)"] = {
	description: "The Mists whisper to me and guide me through. I immediately know if an object I'm touching is a Mist talisman, a nonmagical object that resonates with the domain where it originated, allowing the creature holding it to find a path to that domain. I recognize where the talisman originates from if I have been to its domain of origin.",
	source: [["VRGtR", 31]],
};
BackgroundFeatureList["spirit medium (legacy)"] = {
	description: "A fateful experience made me believe I'm aligned with spirits and can serve as a conduit for their insights and goals. I have Advantage on Arcana and Religion check to remember or research information about spirits and the afterlife. I have and am proficient with a device I made for communing with otherworldly forces (e.g. a spirit-board or tarokka deck).",
	source: [["VRGtR", 31]],
};
BackgroundFeatureList["trauma survivor"] = {
	description: "I faced something specifically traumatic and survived. Now people view me as an expert on it and can help others make it through. I'm aware of nonmagical recovery techniques, common resources, and misinformation. I know how to speak to sympathetic doctors, clergy, and leaders to convince them to shelter one other than myself up to one month.",
	source: [["VRGtR", 32]],
};
BackgroundFeatureList["traveler"] = {
	description: "I come from another place that others couldn't begin to understand. I can find a spot to hide, rest, or recuperate among sympathetic trading caravans, itinerant families, or displaced groups, so long as I present no visible danger. Such groups will hide me, but won't risk their lives for me. I can tell if an object I can see and touch is from my homeland.",
	source: [["VRGtR", 32]],
};
BackgroundFeatureList["official inquiry"] = { // from Investigator
	description: "Through a combination of fast-talking, determination, and official-looking documentation, I can gain access to a place or an individual related to a crime I'm investigating. Those who aren't involved in my investigation avoid impeding me or pass along my requests. Local law enforcement has firm opinions, viewing me as either a nuisance or one of their own.",
	source: [["VRGtR", 35]],
};
// [dupl_start] reprints from Curse of Strahd
if (!SourceList["CoS"]) {
	PacksList.monsterhunter = {
		name: "Monster hunter's pack (33 gp)",
		source: [["CoS", 209], ["VRGtR", 34]],
		items: [
			["Chest, with:", "", 25],
			["Crowbar", "", 5],
			["Hammer", "", 3],
			["Wooden stake", 3, 1],
			["Amulet holy symbol", "", ""],
			["Holy water, flasks of", 1, 1],
			["Manacles", "", 6],
			["Steel mirror", "", 0.5],
			["Oil, flasks of", 1, 1],
			["Tinderbox", "", 1],
			["Torches", 3, 1],
		],
	};
	BackgroundFeatureList["heart of darkness"] = { // from Haunted One
		description: "Those who look into my eyes can see that I have faced unimaginable horror and that I am no stranger to darkness. Though they might fear me, commoners will extend me every courtesy and do their utmost to help. Unless I have shown myself to be a danger to them, they will even take up arms to fight with me, should I find myself facing an enemy alone.",
		source: [["CoS", 209], ["VRGtR", 34]],
	};
} // dupl_end

// Magic Items
MagicItemsList["nepenthe"] = {
	name: "Nepenthe",
	source: [["VRGtR", 137]],
	type: "Weapon (Any Sword)",
	rarity: "Legendary",
	attunement: true,
	prerequisite: "Requires attunement by a paladin",
	prereqeval: function (v) { return classes.known.paladin ? true : false; },
	description: "This sentient holy avenger longsword gives me a +3 bonus to attack and damage rolls. It does +2d10 Radiant damage against Fiends and Undead. While holding the drawn sword, I have a 10-ft radius aura (30-ft if level 17 Paladin) that grants me and my allies Adv on saves against spells and magical effects.",
	descriptionFull: [
		"You gain a +3 bonus to attack and damage rolls made with this magic weapon. When you hit a fiend or an undead with it, that creature takes an extra 2d10 radiant damage.",
		"While you hold the drawn sword, it creates an aura in a 10-foot radius around you. You and all creatures friendly to you in the aura have advantage on saving throws against spells and other magical effects. If you have 17 or more levels in the paladin class, the radius of the aura increases to 30 feet.",
		"***Sentience***. *Nepenthe* is a sentient, neutral evil weapon with an Intelligence of 10, a Wisdom of 8, and a Charisma of 18. It has hearing and darkvision out to a range of 60 feet. It can read and understand Elvish. It can also speak Elvish, but only through the voice of its wielder, with whom the sword can communicate telepathically.",
		"***Personality***. In its lifetime, the sword has beheaded thousands of criminals, not all of whom were guilty of the crimes for which they were convicted. The sword cannot distinguish the guilty from the innocent. With each beheading, it hungers for more justice and blood. The sword is corrupt and irredeemable.",
	],
	toNotesPage: [
		{
			name: "Nepenthe",
			useDescriptionFull: true,
		},
		Object.assign({}, sentientItemConflictNote, { amendTo: "Nepenthe" }),
	],
	weaponOptions: [{
		baseWeapon: "longsword",
		regExpSearch: /nepenthe/i,
		name: "Nepenthe",
		source: [["VRGtR", 137]],
		description: "Versatile (1d10); +2d10 Radiant damage vs Fiends and Undead",
		modifiers: [3, 3],
		selectNow: true,
	}],
	savetxt: { adv_vs: ["spells", "magical effects"] },
	choices: ["Paladin level 1-16 (10-ft aura)", "Paladin level 17+ (30-ft aura)"],
	selfChoosing: function () {
		return !classes.known.paladin ? "" : classes.known.paladin.level < 17 ? "paladin level 1-16 (10-ft aura)" : "paladin level 17+ (30-ft aura)";
	},
	"paladin level 1-16 (10-ft aura)": {
		name: "Nepenthe \uFEFF",
		description: "This sentient holy avenger longsword gives me a +3 bonus to attack and damage rolls made with it. It does +2d10 Radiant damage against Fiends and Undead. While holding the drawn sword, I have a 10-ft radius aura that grants me and my allies Advantage on saving throws against spells and magical effects.",
	},
	"paladin level 17+ (30-ft aura)": {
		name: "Nepenthe \uFEFF\uFEFF",
		description: "This sentient holy avenger longsword gives me a +3 bonus to attack and damage rolls made with it. It does +2d10 Radiant damage against Fiends and Undead. While holding the drawn sword, I have a 30-ft radius aura that grants me and my allies Advantage on saving throws against spells and magical effects.",
	},
}
