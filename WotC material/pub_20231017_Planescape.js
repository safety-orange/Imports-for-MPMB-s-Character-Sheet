var iFileName = "pub_20231017_Planescape.js";
RequiredSheetVersion("14.0.5-beta");
// This file adds the Character Options content from the "Planescape: Adventures in the Multiverse" set (the "Sigil and the Outlands" book) to MPMB's Character Record Sheet

// Define the source
SourceList["P:AitM"] = {
	name : "Planescape: Adventures in the Multiverse",
	abbreviation : "P:AitM",
	abbreviationSpellsheet : "PS",
	group : "Campaign Sourcebooks",
	campaignSetting : "Planescape",
	url : "https://dndstore.wizards.com/us/product/820944/planescape-adventures-in-the-multiverse-digital-plus-physical-bundle",
	date : "2023/10/17"
};

// Backgrounds from Sigil and the Outlands
BackgroundList["gate warden"] = {
	regExpSearch : /^(?=.*gate)(?=.*warden).*$/i,
	name : "Gate Warden",
	source : [["P:AitM", 7], ["UA:WotM", 3]],
	skills : ["Persuasion", "Survival"],
	gold : 10,
	languageProfs : [["Any (Abyssal, Celestial, or Infernal recommended)", 2]],
	equipleft : [
		["Blank book", "", 5],
		["Ink, 1 ounce bottle of", 1, ""],
		["Ink pen or quill", "", ""],
		["Ring of keys to unknown locks", "", ""]
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["Pouch (with coins)", "", 1]
	],
	feature : "Planar Infusion",
	trait : [
		"Strange events and otherworldly creatures don't phase me.",
		"I think in terms of exchange; something for something, nothing for nothing.",
		"I speak with an unusual cadence.",
		"I pepper my speech with borrowed words or curses from planar languages.",
		"I've seen enough to know that you can't take anyone at face value, so I scrutinize everyone.",
		"I have a superstitious habit I picked up from my gate-town, such as touching iron when I'm nervous or arranging objects in a specific order."
	],
	extra : [
		"Select a Trinket",
		"Vial pendant with glowing honey",
		"Whispering lead ingot thumbprint",
		"Two chiming lodestone spheres",
		"Skin-safe smoldering pebble of coal",
		"Light up white feather",
		"Hard to remove chain-link ring"
	]
};
BackgroundFeatureList["planar infusion"] = {
	description : "I spent a good amount of time somewhere influenced by planar forces. I'm accustomed to experiences that would leave others reeling in terror or captivated by beauty, and I'm comfortable dealing with fiends and celestials. I know where to find free, modest lodging and food in the community I grew up in. Also, I gain the Scion of the Outer Planes feat.",
	source : [["P:AitM", 7], ["UA:WotM", 3]],
	featsAdd: ["Scion of the Outer Planes"],
};

BackgroundList["planar philosopher"] = {
	regExpSearch : /^(?=.*planar)(?=.*philosopher).*$/i,
	name : "Planar Philosopher",
	source : [["P:AitM", 8]],
	skills : ["Arcana"],
	skillstxt : "Arcana, and one skill determined by your faction or one skill of your choice.",
	gold : 10,
	languageProfs : [2],
	equipleft : [
		["Portal key (e.g. bag of golden tea leaves)", "", 3],
		["Manifesto of my guiding philosophy", "", 1]
	],
	equipright : [
		["Common clothes in faction's style", "", 3],
		["Pouch (with coins from different planes)", "", 1]
	],
	feature : "Conviction",
	trait : [
		"I don't venerate any gods. With time, we can be as powerful as them or greater.",
		"Experience is everything, I live in the moment.",
		"When things crumble, I find meaning in the dust.",
		"Life thrives through order, and I seek to maintain that order.",
		"When others make plans, the multiverse laughs and so do I.",
		"I know what's right, and none will stand in my way."
	],
	extra : [
		"Select a Trinket",
		"Inscribed locket with image of mentor",
		"Cranium rat skull with glass eyes",
		"Torn parchment with half a puzzle",
		"Bracelet of twisted razorvine stems",
		"Fragment of verdigris bronze blade",
		"Broken symbol of forgotten god"
	]
};
AddBackgroundVariant("planar philosopher", "planar philosopher of athar", {
	regExpSearch : /^(?=.*planar)(?=.*philosopher)(?=.*athar).*$/i,
	name : "Planar Philosopher of Athar",
	source : [["P:AitM", 8]],
	skills : ["Arcana", "Religion"],
	equipright : [
		["Common clothes in Athar style", "", 3],
		["Pouch (with coins from different planes)", "", 1]
	]
});
AddBackgroundVariant("planar philosopher", "planar philosopher of bleak cabal", {
	regExpSearch : /^(?=.*planar)(?=.*philosopher)(?=.*bleak cabal).*$/i,
	name : "Planar Philosopher of Bleak Cabal",
	source : [["P:AitM", 8]],
	skills : ["Arcana", "Insight"],
	equipright : [
		["Common clothes in Bleak Cabal style", "", 3],
		["Pouch (with coins from different planes)", "", 1]
	]
});
AddBackgroundVariant("planar philosopher", "planar philosopher of doomguard", {
	regExpSearch : /^(?=.*planar)(?=.*philosopher)(?=.*doomguard).*$/i,
	name : "Planar Philosopher of Doomguard",
	source : [["P:AitM", 8]],
	skills : ["Arcana", "Nature"],
	equipright : [
		["Common clothes in Doomguard style", "", 3],
		["Pouch (with coins from different planes)", "", 1]
	]
});
AddBackgroundVariant("planar philosopher", "planar philosopher of fated", {
	regExpSearch : /^(?=.*planar)(?=.*philosopher)(?=.*fated).*$/i,
	name : "Planar Philosopher of Fated",
	source : [["P:AitM", 8]],
	skills : ["Arcana", "Intimidation"],
	equipright : [
		["Common clothes in Fated style", "", 3],
		["Pouch (with coins from different planes)", "", 1]
	]
});
AddBackgroundVariant("planar philosopher", "planar philosopher of fraternity of order", {
	regExpSearch : /^(?=.*planar)(?=.*philosopher)(?=.*fraternity of order).*$/i,
	name : "Planar Philosopher of Fraternity of Order",
	source : [["P:AitM", 8]],
	skills : ["Arcana", "History"],
	equipright : [
		["Common clothes in Fraternity of Order style", "", 3],
		["Pouch (with coins from different planes)", "", 1]
	]
});
AddBackgroundVariant("planar philosopher", "planar philosopher of hands of havoc", {
	regExpSearch : /^(?=.*planar)(?=.*philosopher)(?=.*hands of havoc).*$/i,
	name : "Planar Philosopher of Hands of Havoc",
	source : [["P:AitM", 8]],
	skills : ["Arcana", "Stealth"],
	equipright : [
		["Common clothes in Hands of Havoc style", "", 3],
		["Pouch (with coins from different planes)", "", 1]
	]
});
AddBackgroundVariant("planar philosopher", "planar philosopher of harmonium", {
	regExpSearch : /^(?=.*planar)(?=.*philosopher)(?=.*harmonium).*$/i,
	name : "Planar Philosopher of Harmonium",
	source : [["P:AitM", 8]],
	skills : ["Arcana", "Perception"],
	equipright : [
		["Common clothes in Harmonium style", "", 3],
		["Pouch (with coins from different planes)", "", 1]
	]
});
AddBackgroundVariant("planar philosopher", "planar philosopher of heralds of dust", {
	regExpSearch : /^(?=.*planar)(?=.*philosopher)(?=.*heralds of dust).*$/i,
	name : "Planar Philosopher of Heralds of Dust",
	source : [["P:AitM", 8]],
	skills : ["Arcana", "Medicine"],
	equipright : [
		["Common clothes in Heralds of Dust style", "", 3],
		["Pouch (with coins from different planes)", "", 1]
	]
});
AddBackgroundVariant("planar philosopher", "planar philosopher of mercykillers", {
	regExpSearch : /^(?=.*planar)(?=.*philosopher)(?=.*mercykillers).*$/i,
	name : "Planar Philosopher of Mercykillers",
	source : [["P:AitM", 8]],
	skills : ["Arcana", "Survival"],
	equipright : [
		["Common clothes in Mercykillers style", "", 3],
		["Pouch (with coins from different planes)", "", 1]
	]
});
AddBackgroundVariant("planar philosopher", "planar philosopher of mind's eye", {
	regExpSearch : /^(?=.*planar)(?=.*philosopher)(?=.*mind's eye).*$/i,
	name : "Planar Philosopher of Mind's Eye",
	source : [["P:AitM", 8]],
	skills : ["Arcana", "Persuasion"],
	equipright : [
		["Common clothes in Mind's Eye style", "", 3],
		["Pouch (with coins from different planes)", "", 1]
	]
});
AddBackgroundVariant("planar philosopher", "planar philosopher of society of sensation", {
	regExpSearch : /^(?=.*planar)(?=.*philosopher)(?=.*society of sensation).*$/i,
	name : "Planar Philosopher of Society of Sensation",
	source : [["P:AitM", 8]],
	skills : ["Arcana", "Performance"],
	equipright : [
		["Common clothes in Society of Sensation style", "", 3],
		["Pouch (with coins from different planes)", "", 1]
	]
});
AddBackgroundVariant("planar philosopher", "planar philosopher of transcendent order", {
	regExpSearch : /^(?=.*planar)(?=.*philosopher)(?=.*transcendent order).*$/i,
	name : "Planar Philosopher of Transcendent Order",
	source : [["P:AitM", 8]],
	skills : ["Arcana", "Athletics"],
	equipright : [
		["Common clothes in Transcendent Order style", "", 3],
		["Pouch (with coins from different planes)", "", 1]
	]
});
BackgroundFeatureList["conviction"] = {
	description : "I subscribe to a distinct philosophy that seeks to understand the nature of the planes or a hidden truth of the multiverse and spread my philosophy. I am part of a network of like-minded believers who provide me free, modest lodging and food at any of their holding or the homes of other faction members. Also, I gain the Scion of the Outer Planes feat.",
	source : [["P:AitM", 8], ["UA:WotM", 4]],
	featsAdd: ["Scion of the Outer Planes"],
};

// Feats from Sigil and the Outlands
FeatsList["scion of the outer planes"] = {
	name : "Scion of the Outer Planes",
	source : [["P:AitM", 12]],
	description : "I am adept at navigating planar pathways and the strange realities of the outer planes. I can select a plane and gain resistance to a damage type and learn a cantrip associated with that plane. I can cast the cantrip without material components. I can choose Int, Wis, or Cha as my spellcasting ability for this.",
	descriptionFull : "Your connection to an Outer Plane infuses you with the energy there. Choose a type of plane listed in the Planar Infusion table. Your choice gives you resistance to a damage type and the ability to cast a cantrip, as specified in the table. You can cast this cantrip without material components, and your spellcasting ability for it is Intelligence, Wisdom, or Charisma (choose when you select this feat)."+
	toUni("\n\nPlane\t\tResistance\tCantrip")+
	"\nChaotic Outer\tPoison\t\tMinor Illusion"+
	"\nEvil Outer  \tNecrotic\t\tChill Touch"+
	"\nGood Outer  \tRadiant\t\tSacred Flame"+
	"\nLawful Outer\tForce\t\tGuidance"+
	"\nThe Outlands\tPsychic\t\tMage Hand",
	prerequisite : "Planescape Campaign",
	spellcastingAbility : [4,5,6],
	choices : ['Chaotic Outer Plane (Poison, Minor Illusion)', 'Evil Outer Plane (Necrotic, Chill Touch)', 'Good Outer Plane (Radiant, Sacred Flame)', 'Lawful Outer Plane (Force, Guidance)', 'The Outlands (Psychic, Mage Hand)'],
	'chaotic outer plane (poison, minor illusion)' : {
		name : "Scion of the Outer Planes (Chaotic Outer Plane)",
		description : "I am adept at navigating planar pathways and the strange realities of the outer planes. My connection to a chaotic outer plane gives me resistance to poison damage and I know the Minor Illusion cantrip, which requires no material components. I can choose Int, Wis, or Cha as my spellcasting ability for this.",
		spellcastingAbility : [4,5,6],
		allowUpCasting : true,
		spellcastingBonus : [{
			name : "Chaotic Outer Plane",
			spells : ["minor illusion"],
			selection : ["minor illusion"],
		}],
		dmgres : ["Poison"],
		spellChanges : {
			"minor illusion" : {
				components : "S",
				compMaterial : "",
				changes : "Using Scion of the Outer Planes, I can cast Minor Illusion without material components."
			}
		}
	},
	'evil outer plane (necrotic, chill touch)' : {
		name : "Scion of the Outer Planes (Evil Outer Plane)",
		description : "I am adept at navigating planar pathways and the strange realities of the outer planes. I'm infused with or have ancestry from an evil outer plane. This connection gives me resistance to necrotic damage and I know the Chill Touch cantrip. I can choose Int, Wis, or Cha as my spellcasting ability for this.",
		spellcastingAbility : [4,5,6],
		allowUpCasting : true,
		spellcastingBonus : [{
			name : "Evil Outer Plane",
			spells : ["chill touch"],
			selection : ["chill touch"],
		}],
		dmgres : ["Necrotic"]
	},
	'good outer plane (radiant, sacred flame)' : {
		name : "Scion of the Outer Planes (Good Outer Plane)",
		description : "I am adept at navigating planar pathways and the strange realities of the outer planes. I'm infused with or have ancestry from an good outer plane. This connection gives me resistance to radiant damage and I know the Sacred Flame cantrip. I can choose Int, Wis, or Cha as my spellcasting ability for this.",
		spellcastingAbility : [4,5,6],
		allowUpCasting : true,
		spellcastingBonus : [{
			name : "Good Outer Plane",
			spells : ["sacred flame"],
			selection : ["sacred flame"],
		}],
		dmgres : ["Radiant"]
	},
	'lawful outer plane (force, guidance)' : {
		name : "Scion of the Outer Planes (Lawful Outer Plane)",
		description : "I am adept at navigating planar pathways and the strange realities of the outer planes. I'm infused with or have ancestry from an lawful outer plane. This connection gives me resistance to force damage and I know the Guidance cantrip. I can choose Int, Wis, or Cha as my spellcasting ability for this.",
		spellcastingAbility : [4,5,6],
		allowUpCasting : true,
		spellcastingBonus : [{
			name : "Lawful Outer Plane",
			spells : ["guidance"],
			selection : ["guidance"],
		}],
		dmgres : ["Force"]
	},
	'the outlands (psychic, mage hand)' : {
		name : "Scion of the Outer Planes (the Outlands)",
		description : "I am adept at navigating planar pathways and the strange realities of the outer planes. I'm infused with or have ancestry from a plane of the outlands. This gives me resistance to psychic damage and I know the Mage Hand cantrip. I can choose Int, Wis, or Cha as my spellcasting ability for this.",
		spellcastingAbility : [4,5,6],
		allowUpCasting : true,
		spellcastingBonus : [{
			name : "The Outlands",
			spells : ["mage hand"],
			selection : ["mage hand"],
		}],
		dmgres : ["Psychic"]
	}
};
FeatsList["agent of order"] = {
	name : "Agent of Order",
	source : [["P:AitM", 10]],
	description : "Once per turn when I damage a creature I see within 60 ft, I can deal +1d8 force damage to it, and it must succeed on a Wis save (DC 8 + Prof Bonus + spellcasting ability mod of Scion of the Outer Planes) or be restrained until my next turn starts. I can do this a number of times equal to my Prof Bonus per long rest.",
	calculate : "try { var a = Object.keys(CurrentSpells); var b = a.find(/scion of the outer planes/i); var c = CurrentSpells[a[b]]; var dc = c && c.calcSpellScores ? c.calcSpellScores.dc : '[Error: generate spell sheet first]'; } catch(e) { var dc = '[Error: select Scion of the Outer Planes feat]'; }; event.value = 'Once per turn when I damage a creature I see within 60 ft, I can deal +1d8 force damage to it, and it must succeed on a Wis save DC ' + dc + ' (= Scion of the Outer Planes spell DC) or be restrained until my next turn starts. I can do this a number of times equal to my Prof Bonus per long rest. [+1 to any one ability score].';",
	descriptionFull : "You can channel cosmic forces of order to gain these benefits:"+
	"\n   " + toUni("Ability Score Increase") + ". Increase one ability score of your choice by 1, to a maximum of 20."+
	"\n   " + toUni("Stasis Strike") + ". Once per turn, when you damage a creature you can see within 60 feet of yourself, you can deal an extra 1d8 force damage to the target, and it must make a Wisdom saving throw (DC equal to 8 + your proficiency bonus + the modifier of the spellcasting ability you chose for the Scion of the Outer Planes feat) as spectral bindings try to ensnare it. On a successful save, the target escapes. On a failed save, the target has the restrained condition until the start of your next turn. These bindings manifest as chains or some other symbol of stasis. You can use this benefit a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	prerequisite : "4th-level, Scion of the Outer Planes (Lawful Outer Plane) feat",
	prereqeval : function(v) {
		var iParentFeat = CurrentFeats.known.indexOf("scion of the outer planes");
		return v.characterLevel >= 4 && iParentFeat !== -1 && CurrentFeats.choices[iParentFeat] === 'lawful outer plane (force, guidance)';
	},
	scorestxt : "+1 to one ability score of your choice",
	usages : "Proficiency bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus');",
	recovery : "long rest"
};
FeatsList["baleful scion"] = {
	name : "Baleful Scion",
	source : [["P:AitM", 10]],
	description : "Once per turn, when I damage a creature I can see within 60 ft, I can also deal 1d6 + my Proficiency Bonus necrotic damage to it. I then regain a number of hit points equal to this necrotic damage dealt. I can do this a number of times equal to my Proficiency Bonus per long rest. [+1 to any one ability score]",
	descriptionFull : "You can channel cosmic forces of evil to gain these benefits:"+
	"\n   " + toUni("Ability Score Increase") + ". Increase one ability score of your choice by 1, to a maximum of 20."+
	"\n   " + toUni("Life-Draining Grasp") + ". Once per turn, when you damage a creature you can see within 60 feet of yourself, you can also deal necrotic damage to it. The necrotic damage equals 1d6 + your proficiency bonus, and you regain a number of hit points equal to this necrotic damage dealt. You can use this benefit a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	prerequisite : "4th-level, Scion of the Outer Planes (Evil Outer Plane) feat",
	prereqeval : function(v) {
		var iParentFeat = CurrentFeats.known.indexOf("scion of the outer planes");
		return v.characterLevel >= 4 && iParentFeat !== -1 && CurrentFeats.choices[iParentFeat] === 'evil outer plane (necrotic, chill touch)';
	},
	scorestxt : "+1 to one ability score of your choice",
	usages : "Proficiency bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus');",
	recovery : "long rest"
};
FeatsList["cohort of chaos"] = {
	name : "Cohort of Chaos",
	source : [["P:AitM", 10]],
	description : "When I roll a 1 or a 20 on an attack roll or save, a the magic of chaos flares up and I roll on the Chaotic Flare table to determine what happens (see notes for table). As a bonus action, my Proficiency Bonus per long rest, I can force a flare to happen. [+1 to any one ability score]",
	descriptionFull : "You can channel cosmic forces of chaos to gain these benefits:"+
	"\n   " + toUni("Ability Score Increase") + ". Increase one ability score of your choice by 1, to a maximum of 20."+
	"\n   " + toUni("Chaotic Flare") + ". When you roll a 1 or a 20 on an attack roll or a saving throw, the magic of chaos flows through you. Roll a d4 and consult the table below to determine what happens. A flare lasts until the end of your next turn, and a new flare can't occur until after the first flare ends."+
	toUni("\n\nd4\tFlare")+
	"\n  1\tBattle Fury: A creature of your choice that you can see is filled with reckless fury. It has advantage on attack rolls and disadvantage on ability checks."+
	"\n  2\tDisruption Field: Waves of energy ripple around you. Every creature that starts its turn within 5 feet of you, or that moves into that area for the first time on a turn, takes 1d8 force damage."+
	"\n  3\tUnbound: When you move, you can use some or all of your walking speed to teleport yourself once, along with any equipment you're wearing or carrying, up to the distance used to an unoccupied space that you can see."+
	"\n  4\tWailing Winds: Winds swirl in a 15-foot-radius sphere centered on you. You and any other creatures in that area have disadvantage on Wisdom saving throws."+
	"\n\n   You can also forcibly release a chaotic flare as a bonus action, rolling on the table as normal to determine the effects. You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	prerequisite : "4th-level, Scion of the Outer Planes (Chaotic Outer Plane) feat",
	prereqeval : function(v) {
		var iParentFeat = CurrentFeats.known.indexOf("scion of the outer planes");
		return v.characterLevel >= 4 && iParentFeat !== -1 && CurrentFeats.choices[iParentFeat] === 'chaotic outer plane (poison, minor illusion)';
	},
	scorestxt : "+1 to one ability score of your choice",
	usages : "Proficiency bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus');",
	recovery : "long rest",
	additional : "force flare",
	action : [["bonus action", " (force flare)"]],
	toNotesPage : [{
		name : "Chaotic Flare Table",
		note : [
			"When I roll a 1 or a 20 on an attack roll or a saving throw, the magic of chaos flows through Me. I roll a d4 on the table below to determine what happens. A flare lasts until the end of my next turn, and a new flare can't occur until after the first flare ends.",
			"As a bonus action, I can forcibly release a chaotic flare, rolling on the table as normal to determine the effects. I can use this bonus action a number of times equal to my proficiency bonus, and I regain all expended uses when you finish a long rest.",
			"\n d4  Flare",
			"1  Battle Fury: A creature of my choice that I can see is filled with reckless fury. It has advantage on attack rolls and disadvantage on ability checks.",
			"2  Disruption Field: Waves of energy ripple around me. Every creature that starts its turn within 5 ft of me, or that moves into that area for the first time on a turn, takes 1d8 force damage.",
			"3  Unbound: When I move, I can use some or all of my walking speed to teleport once, along with any equipment I'm wearing or carrying, up to the distance used to an unoccupied space that I can see.",
			"4  Wailing Winds: Winds swirl in a 15-ft radius sphere centered on me. Creatures in that area, myself included, have disadvantage on Wisdom saving throws."
		]
	}]
};
FeatsList["outlands envoy"] = {
	name : "Outlands Envoy",
	source : [["P:AitM", 10]],
	description : "I can cast Misty Step and Tongues each once per long rest without requiring a spell slot or material components. I can also cast them using a spell slot as normal. My spellcasting ability for these spells is the same as the one for the Scion of the Outer Planes feat. [+1 to any one ability score]",
	descriptionFull : "You have spent significant time in Sigil or the Outlands, the crossroads of the multiverse. Being steeped in converging planar energies grants you these benefits:"+
	"\n   " + toUni("Ability Score Increase") + ". Increase one ability score of your choice by 1, to a maximum of 20."+
	"\n   " + toUni("Crossroads Emissary") + ". You learn the misty step and tongues spells. You can cast each spell once using this feat without a spell slot, and you must finish a long rest before you can cast that spell in this way again. When you cast tongues using this feat, you require no material components. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the one chosen when you gained the Scion of the Outer Planes feat.",
	prerequisite : "4th-level, Scion of the Outer Planes (the Outlands) feat",
	prereqeval : function(v) {
		var iParentFeat = CurrentFeats.known.indexOf("scion of the outer planes");
		return v.characterLevel >= 4 && iParentFeat !== -1 && CurrentFeats.choices[iParentFeat] === 'the outlands (psychic, mage hand)';
	},
	scorestxt : "+1 to one ability score of your choice",
	spellcastingAbility : "scion of the outer planes",
	spellcastingBonus : [{
		name : "Crossroads Emissary",
		spells : ["misty step", "tongues"],
		selection : ["misty step", "tongues"],
		firstCol : "oncelr+markedbox",
		times : 2
	}],
	spellChanges : {
		"tongues" : {
			components : SpellsList.tongues.components.replace("M", "M*"),
			compMaterial : "When using a spell slot: "+SpellsList.tongues.compMaterial,
			changes : "Using Outlands Envoy, I can cast Tongues once per long rest without expending a spell slot or requiring material components."
		}
	}
};
FeatsList["planar wanderer"] = {
	name : "Planar Wanderer",
	source : [["P:AitM", 11]],
	description : "After each long rest, I can gain acid, cold, or fire resistance, that lasts until my next long rest ends. I know the direction to the last portal I used while on the same plane as it. As an action, I can try to open or close a portal (portal cracker). As an action once per long rest, I can detect portals (portal sense). See notes.",
	descriptionFull : "You can draw on the forces of the multiverse to survive cosmic extremes and to traverse its infinite realms, granting you these benefits:"+
	"\n   " + toUni("Planar Adaptation") + ". When you finish a long rest, you gain resistance to either acid, cold, or fire damage (your choice) until you finish your next long rest."+
	"\n   " + toUni("Portal Cracker") + ". Your experience with portals allows you to open them without a portal key. As an action, you can concentrate on a portal you're aware of that is within 5 feet of yourself and make a DC 20 Intelligence (Arcana) check. On a failed check, you take 3d8 psychic damage and can't use this benefit on that portal again until you finish a long rest. On a successful check, you can force the portal open or closed for 1 hour. For that duration, the portal doesn't respond to its portal key unless a creature employing the key succeeds on a DC 20 Intelligence (Arcana) check as an action."+
	"\n   " + toUni("Portal Sense") + ". You know the direction to the last planar portal you used while you and the portal are on the same plane of existence. Moreover, as an action, you can detect the location of any portals within 30 feet of you that aren't behind total cover. Once you detect a portal with this action, you can't use the action again until you finish a long rest.",
	prerequisite : "4th-level, Scion of the Outer Planes feat",
	prereqeval : function(v) {
		return v.characterLevel >= 4 && CurrentFeats.known.indexOf("scion of the outer planes") !== -1;
	},
	dmgres : ["Acid/Cold/Fire"],
	action : [["action", " (Portal Cracker)"], ["action", " (Portal Sense)"]],
	usages : 1,
	recovery : "long rest",
	additional : "Portal Sense",
	toNotesPage : [{
		name : "Portal Cracker",
		note : [
			"My experience with portals allows me to open them without a portal key.",
			"As an action, I can concentrate on a portal I'm aware of that is within 5 ft of me and make a DC 20 Intelligence (Arcana) check.",
			"On a failed check, I take 3d8 psychic damage and can't do this on that portal again until I finish a long rest.",
			"On a successful check, I can force the portal open or closed for 1 hour. For that duration, the portal doesn't respond to its portal key unless a creature employing the key succeeds on a DC 20 Intelligence (Arcana) check as an action."
		]
	}, {
		name : "Portal Sense",
		additional : "1\xD7 per long rest",
		note : [
			"I know the direction to the last planar portal I used while I and the portal are on the same plane of existence.",
			"As an action, I can detect the location of any portals within 30 ft of me that aren't behind total cover.",
			"Once I detect a portal with this action, I can't use the action again until I finish a long rest."
		],
		amendTo : "Portal Cracker"
	}]
};
FeatsList["righteous heritor"] = {
	name : "Righteous Heritor",
	source : [["P:AitM", 11]],
	description : "As a reaction when I or a creature I can see within 30 ft takes damage, I can reduce the damage taken by 1d10 + my Proficiency Bonus. I can do this a number of times equal to my Proficiency Bonus per long rest. [+1 to any one ability score]",
	descriptionFull : "You can channel cosmic forces of good to gain these benefits:"+
	"\n   " + toUni("Ability Score Increase") + ". Increase one ability score of your choice by 1, to a maximum of 20."+
	"\n   " + toUni("Soothe Pain") + ". When you or a creature within 30 feet of you takes damage, you can use your reaction to reduce that damage by 1d10 + your proficiency bonus. You can use this benefit a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	prerequisite : "4th-level, Scion of the Outer Planes (Good Outer Plane) feat",
	prereqeval : function(v) {
		var iParentFeat = CurrentFeats.known.indexOf("scion of the outer planes");
		return v.characterLevel >= 4 && iParentFeat !== -1 && CurrentFeats.choices[iParentFeat] === 'good outer plane (radiant, sacred flame)';
	},
	scorestxt : "+1 to one ability score of your choice",
	usages : "Proficiency bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus');",
	recovery : "long rest",
	action : [["reaction", ""]]
};


// Magic Items from Sigil and the Outlands
MagicItemsList["mimir"] = {
	name : "Mimir",
	source : [["P:AitM", 13]],
	type : "wondrous item",
	rarity : "rare",
	attunement : true,
	description : "As a bonus action, I can stow or toss this skull-shaped device in the air to activate it, making it float 1d3 ft near me. Once per dawn as an action while active, I can use it to cast Legend Lore. It speaks the revieled lore aloud. While active, it answers questions about the planes of existence I or someone I designate ask it.",
	descriptionLong : "As a bonus action, I can toss this skull-shaped device covered with planar sigils into the air to activate it, causing it to float 1d3 ft near me but considered worn by me. I can use another bonus action to seize and stow it. It has AC 22, 25 HP, immunity to poison and psychic damage, and resistance to all other damage. Another can use an action to grab it with a successful unarmed strike or DC 22 Acrobatics check. Once per dawn as an action while active, I can use it to cast Legend Lore. It speaks the revealed lore aloud. While active, it answers questions about the planes of existence I or someone I designate ask it.",
	descriptionFull : "This skull-shaped device is filled with knowledge. The device weighs 5 pounds and is covered with subtle etchings of planar sigils."+
	"As a bonus action, you can toss the device into the air, whereupon it floats at a distance of 1d3 feet from you and you can access its properties. While the mimir is floating, a creature other than you can use an action to grasp or net the device, either by making a successful unarmed strike against AC 22 or a successful DC 22 Dexterity (Acrobatics) check. You can use a bonus action to seize and stow the device."+
	"The device has AC 22, 25 hit points, immunity to poison and psychic damage, and resistance to all other damage. It is considered to be an object that is being worn while it is floating near you."+
	toUni("\n   Esoteric Knowledge") + ". While the device is floating, you can use an action to cast legend lore from the device. The device speaks the revealed lore aloud. Once this property has been used, it can't be used again until the next dawn."+
	toUni("\n   Planar Knowledge") + ". The device knows basic, useful information about the planes of existence. While the device is floating, it verbally answers questions you or anyone you designate poses to it about that topic. It knows the information about the planes in the Dungeon Master's Guide, as well as basic information about the gate-towns of the Outlands (presented in chapter 3 of Sigil and the Outlands).",
	action : [["bonus action", " (activate/stow)"]],
	weight : 5,
	usages : 1,
	recovery : "dawn",
	additional : "Legend Lore",
	spellcastingBonus : [{
		name : "once per dawn",
		spells : ["legend lore"],
		selection : ["legend lore"],
		firstCol : "oncelr"
	}]
};
MagicItemsList["portal compass"] = {
	name : "Portal Compass",
	source : [["P:AitM", 13]],
	type : "wondrous item",
	rarity : "uncommon",
	description : "This portable arcane instrument points in the direction of the last portal it passed through while it and the portal are on the same plane of existence. If that portal no longer exists, the needle becomes static until the compass passes through a new portal.",
	descriptionFull : "This portable arcane instrument points in the direction of the last portal it passed through while it and the portal are on the same plane of existence. If that portal no longer exists, the needle becomes static until the compass passes through a new portal."
};
MagicItemsList["sensory stone"] = {
	name : "Sensory Stone",
	source : [["P:AitM", 13]],
	type : "wondrous item",
	rarity : "uncommon",
	description : "This stone stores a single experience. As an action, one touching the stone can experience it harmlessly. As a reaction, I can replace the experience within with a new, six-second sensation experienced by a creature within 30 ft. As a bonus action, I can destroy it to end the charmed or frightened effect on myself.",
	descriptionFull : "This small, smooth stone contains the essence of a single experience."+
	"As an action, you or a willing creature you designate can touch the stone and experience the sensation as if it happened to the designated creature. The illusory experience is fleeting and harmless, however real it might feel in the moment."+
	toUni("\n   Record Sensation") + ". You can use your reaction to record a short sensation lasting no longer than 6 seconds experienced by a creature of your choice within 30 feet of yourself, infusing the essence of that experience into the stone. This replaces any sensation already stored within the stone."+
	toUni("\n   Siphon Sensation") + ". As a bonus action, you can draw on the stone's magic to end the charmed or frightened condition on yourself, destroying the stone in the process.",
	action : [
		["action", " (experience)"],
		["reaction", " (record)"],
		["bonus action", " (destroy to end charmed/frightened)"]
	]
};


// Spells from Sigil and the Outlands
SpellsList["gate seal"] = {
	name : "Gate Seal",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["P:AitM", 12]],
	level : 4,
	school : "Abjur",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M\u2020",
	compMaterial : "A broken portal key, which the spell consumes",
	duration : "24 h",
	description : "30-ft cube wherein all portals close and can't be opened, and no planar travel; SL6: until dispelled",
	descriptionFull : "You fortify the fabric of the planes in a 30-foot cube you can see within range. Within that area, portals close and can't be opened for the duration. Spells and other effects that allow planar travel or open portals, such as gate or plane shift, fail if used to enter or leave the area. The cube is stationary."+
		AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, the spell lasts until dispelled."
};
SpellsList["warp sense"] = {
	name : "Warp Sense",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["P:AitM", 12]],
	level : 2,
	school : "Div",
	time : "1 a",
	range : "Self",
	components : "V,S,M",
	compMaterial : "A razorvine leaf",
	duration : "Conc, 1 min",
	description : "Know presence of portals in 30 ft; 1 a DC 15 spell ability chk to see destination \u0026 portal key, ends spell",
	descriptionFull : "For the duration, you sense the presence of portals, even inactive ones, within 30 feet of yourself."+
	"\n   If you detect a portal in this way, you can use your action to study it. Make a DC 15 ability check using your spellcasting ability. On a successful check, you learn the destination plane of the portal and what portal key it requires, then the spell ends. On a failed check, you learn nothing and can't study that portal again using this spell until you cast it again."+
	"\n   The spell can penetrate most barriers but is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt."
};

// Beast from Turn of Fortune's Wheel
// Whirlwyrm is just a giant crocodile under a different name, it has been added to the SRD code as a `nameAlt`
