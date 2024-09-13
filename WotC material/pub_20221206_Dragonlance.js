var iFileName = "pub_20221206_Dragonlance.js";
RequiredSheetVersion("13.1.14");
// This file adds the Character Options content from Dragonlance: Shadow of the Dragon Queen to MPMB's Character Record Sheet

SourceList["D:SotDQ"] = {
	name : "Dragonlance: Shadow of the Dragon Queen",
	abbreviation : "D:SotDQ",
	group : "Campaign Sourcebooks",
	campaignSetting : "Dragonlance",
	url : "https://dnd.wizards.com/products/dragonlance",
	date : "2022/12/06"
};

RaceList["kender"] = {
	regExpSearch : /kender/i,
	name : "Kender",
	source : [["D:SotDQ", 27]],
	plural : "Kender",
	size : 4,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	scoresGeneric : true,
	savetxt : { adv_vs : ["frightened"]},
	skillstxt : "Choose one from Insight, Investigation, Sleight of Hand, Stealth, or Survival",
	abilitySave : [4, 5, 6],
	features : {
		"fearless" : {
			name : "Fearless",
			minlevel : 1,
			usages : 1,
			recovery : "long rest"
		},
		"taunt" : {
			name : "Taunt",
			minlevel : 1,
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			action : [["bonus action", ""]]
		}
	},
	trait : "Kender"+
	"\n \u2022 Fearless: I have adv. on saves against the frightened condition. Once per long rest when I fail " + (typePF ? "such a save" : "a save to avoid being frightened") + ", I can choose to succeed" + (typePF ? "." : " instead")+
	"\n \u2022 Taunt: As a bonus action, I can taunt a creature within 60 ft of me that can hear and understand me. They must make a Wisdom " + (typePF ? "saving throw or have disadvantage" : "save (DC 8 + Prof B + Int/Wis/Cha mod; one-time choice) or have disadv.") + " on attack rolls not made against me until the start of my next turn. I can do this a number of times per long rest equal to my proficiency bonus." + (typePF ? " The DC equals 8 + my proficiency bonus + Intelligence, Wisdom, or Charisma modifier (one-time choice when selecting this race)." : "")
};

BackgroundList["knight of solamnia"] = {
	regExpSearch : /^(?=.*(knight|champion|warrior))(?=.*solamnia).*$/i,
	name : "Knight of Solamnia",
	source : [["D:SotDQ", 0], ["UA:HoKR", 2]],
	skills : ["Athletics", "Survival"],
	gold : 10,
	languageProfs : [2],
	equipleft : [
		["Insignia of rank", "", ""],
		["Deck of cards", "", ""]
	],
	equipright : [
		["Common clothes", "", 3],
		["Pouch (with coins)", "", 1]
	],
	feature : "Squire of Solamnia",
	trait : [ // Kept those from the UA article
		"I pledge my sword to the greater good. If I must perish in pursuit of that good, so be it.",
		"My comrades-in-arms are my family. I'll do whatever it takes to keep them safe.",
		"The protection of innocent people comes first. All other concerns come second.",
		"I joined the knights for the free meals, but their lessons grew on me over time.",
		"I wish my deeds to become the stuff of legends\xD7just like those of the knighthood's heroic founders.",
		"A dishonorable act drove me to become a knight. I have acted with honor ever since."
	],
	extra : [
		"Choose a Trinket",
		"Silver disk, recording my heroics",
		"Piece of a fallen knight's armor",
		"Pendant with a crown/rose/sword",
		"Pommel of my mentor's sword",
		"Favor from someone I defended",
		"Locket with silver dragon sketch"
	]
};
BackgroundFeatureList["squire of solamnia"] = {
	description : "I gain the Squire of Solamnia feat. In addition, the Knights of Solamnia provide me free, modest lodging and food at any of their fortresses or encampments.",
	source : [["D:SotDQ", 0], ["UA:HoKR", 2], ["UA:HoK", 3]],
	eval : function() { AddFeat("Squire of Solamnia"); },
	removeeval : function() { RemoveFeat("Squire of Solamnia"); }
};

BackgroundList["mage of high sorcery"] = {
	regExpSearch : /^(?=.*(mage|wizard|magus))(?=.*high)(?=.*sorcery).*$/i,
	name : "Mage of High Sorcery",
	source : [["D:SotDQ", 0], ["UA:HoKR", 3], ["UA:HoK", 4]],
	skills : ["Arcana", "History"],
	gold : 10,
	languageProfs : [2],
	equipleft : [
		["Bottle of colored ink", "", ""],
		["Ink pen", "", ""]
	],
	equipright : [
		["Common clothes", "", 3],
		["Pouch (with coins)", "", 1]
	],
	feature : "Initiate of High Sorcery",
	trait : [ // Kept those from the UA article
		"I wish to use my knowledge of magic to better people's lives.",
		"My study of magic might reveal all manner of secrets.",
		"Magic is a means to power, and I will use it to pursue my ambitions.",
		"I learned magic so I'd be able to protect those I care about.",
		"I use my magic to maintain the balance between all things.",
		"Whether in the past, present, or future, I will be the greatest mage ever known."
	],
	extra : [
		"Choose a Trinket",
		"Unopened letter from first teacher",
		"Broken black/red/white wooden wand",
		"Scroll with incomprehensible formula",
		"Stone-covered foldable device",
		"Pouch with triple moon symbol",
		"Spellbook with triple moon symbol",
		"Lens to see Nuitari, invisible moon"
	]
};
BackgroundFeatureList["initiate of high sorcery"] = {
	description : "I gain the Initiate of High Sorcery feat. In addition, the Mages of High Sorcery provide me with free, modest lodging and food indefinitely at any occupied Tower of High Sorcery and for one night at the home of an organization member.",
	source : [["D:SotDQ", 0], ["UA:HoKR", 3], ["UA:HoK", 4]],
	eval : function() { AddFeat("Initiate of High Sorcery"); },
	removeeval : function() { RemoveFeat("Initiate of High Sorcery"); }
};


// Feats tree for Initiate of High Sorcery
FeatsList["initiate of high sorcery"] = {
	name : "Initiate of High Sorcery",
	source : [["D:SotDQ", 32], ["UA:HoKR", 4]],
	description : "I learn a wizard cantrip and two 1st-levels spell from a list depending on my chosen moon. I can cast each spell once per long rest at its lowest levels without expending a spell slot, or by using a spell slot as normal. I can choose Int, Wis, or Cha as my spellcasting ability for this.",
	descriptionFull : "You've received training from magic-users affiliated with the Mages of High Sorcery."+
	"\n   Choose one of the three moons of Krynn to influence your magic: the black moon, Nuitari; the red moon, Lunitari; or the white moon, Solinari. You learn one cantrip of your choice from the wizard spell list and two 1st-level spells based on the moon you choose, as specified in the Lunar Spells table."+
	"\n\n" + toUni("Lunar Spells")+
	"\n" + toUni("Moon\t1st-Level Spell")+
	"\nNuitari\tChoose two from dissonant whispers, false life,"+
	"\n\thex, and ray of sickness"+
	"\nLunitari\tChoose two from color spray, disguise self,"+
	"\n\tfeather fall, and longstrider"+
	"\nSolinari\tChoose two from comprehend languages, detect"+
	"\n\tevil and good, protection from evil and good, and"+
	"\n\tshield"+
	"\n\n   You can cast each of the chosen 1st-level spells without a spell slot, and you must finish a long rest before you can cast them in this way again. You can also cast the spells using any spell slots you have."+
	"\n   Your spellcasting ability for this feat's spells is Intelligence, Wisdom, or Charisma (choose when you select this feat).",
	prerequisite : "Dragonlance Campaign, plus Sorcerer, Wizard, or Mage of High Sorcery background",
	prereqeval : function (v) {
		return classes.known.wizard || classes.known.sorcerer || CurrentBackground.known.indexOf('mage of high sorcery') !== -1 || /initiate of high sorcery/i.test(What("Background Feature"));
	},
	choices : ["Nuitari", "Lunitari", "Solinari"],
	"nuitari" : {
		description : "I learn a wizard cantrip and two 1st-level spells (Dissonant Whispers, False Life, Hex, or Ray of Sickness). I can cast each spell once per long rest at its lowest level without expending a spell slot, or by using a spell slot as normal. I can choose Int, Wis, or Cha as my spellcasting ability for this.",
		spellcastingAbility : [4,5,6],
		allowUpCasting : true,
		spellcastingBonus : [{
			name : "Wizard Cantrip",
			"class" : ["wizard"],
			level : [0, 0],
			firstCol : "atwill"
		}, {
			name : "Nuitari 1st-level spell",
			spells : ["dissonant whispers", "false life", "hex", "ray of sickness"],
			firstCol : "oncelr",
			times : 2
		}]
	},
	"lunitari" : {
		description : "I learn a wizard cantrip and two 1st-level spells (Color Spray, Disguise Self, Feather Fall, Longstrider). I can cast each spell once per long rest at its lowest level without expending a spell slot, or by using a spell slot as normal. I can choose Int, Wis, or Cha as my spellcasting ability for this.",
		spellcastingAbility : [4,5,6],
		allowUpCasting : true,
		spellcastingBonus : [{
			name : "Wizard Cantrip",
			"class" : ["wizard"],
			level : [0, 0],
			firstCol : "atwill"
		}, {
			name : "Lunitari 1st-level spell",
			spells : ["color spray", "disguise self", "feather fall", "longstrider"],
			firstCol : "oncelr",
			times : 2
		}]
	},
	"solinari" : {
		description : "I learn a wizard cantrip and two 1st-level spells (Comprehend Languages, Detect Evil and Good, Protection from Evil and Good, Shield). I can cast each spell once per long rest at its lowest level without expending a spell slot, or by using a spell slot as normal. I can choose Int, Wis, or Cha as my spellcasting ability for this.",
		spellcastingAbility : [4,5,6],
		allowUpCasting : true,
		spellcastingBonus : [{
			name : "Wizard Cantrip",
			"class" : ["wizard"],
			level : [0, 0],
			firstCol : "atwill"
		}, {
			name : "Solinari 1st-level spell",
			spells : ["comprehend languages", "detect evil and good", "protection from evil and good", "shield"],
			firstCol : "oncelr",
			times : 2
		}]
	}
};
FeatsList["adept of the black robes"] = {
	name : "Adept of the Black Robes",
	source : [["D:SotDQ", 31], ["UA:HoKR", 4]],
	description : "I learn one 2nd-level Ench or Necro spell, which I can cast once per long rest at its lowest level without a spell slot, or as normal with one. When a creature I can see within 60 ft fails its save vs. my damaging spell, I can expend HD up to the spell's level and add the rolls to the damage of the spell for that one creature.",
	descriptionFull : "You chose the moon Nuitari to influence your magic, and your ambition and loyalty to the Order of the Black Robes have been recognized, granting you these benefits:"+
	"\n   " + toUni("Ambitious Magic") + ". You learn one 2nd-level spell of your choice. The 2nd-level spell must be from the evocation or necromancy school of magic. You can cast this feat's 2nd-level spell without a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast this spell using spell slots you have of the appropriate level. The spell's spellcasting ability is the one chosen when you gain the Initiate of High Sorcery feat."+
	"\n   " + toUni("Life Channel") + ". You can channel your life force into the power of your magic. When a creature you can see within 60 feet fails on a saving throw against a spell that deals damage that you cast, you can expend a number of Hit Dice equal to the level of the spell. Roll the expended Hit Dice and add them together. The damage that the creature takes increases by an amount equal to that total.",
	prerequisite : "4th level, Initiate of High Sorcery (Nuitari) feat",
	prereqeval : function(v) {
		var iHghSrcyInit = CurrentFeats.known.indexOf("initiate of high sorcery");
		return v.characterLevel >= 4 && iHghSrcyInit !== -1 && CurrentFeats.choices[iHghSrcyInit] === 'nuitari';
	},
	spellcastingBonus : [{
		name : "2nd-level Evoc/Necro spell",
		"class" : "any",
		school : ["Evoc", "Necro"],
		level : [2, 2],
		firstCol : "oncelr"
	}],
	spellcastingAbility : 'initiate of high sorcery_-_nuitari',
	allowUpCasting : true
};
FeatsList["adept of the red robes"] = {
	name : "Adept of the Red Robes",
	source : [["D:SotDQ", 32], ["UA:HoKR", 4]],
	description : "I learn a 2nd-level Illusion or Transmutation spell, which I can cast once per long rest at its lowest level without a spell slot, or as normal with one. When I roll 9 or lower on the d20 for an attack or ability check, I can treat the roll as a 10. I can do this a number of times per long rest equal to my proficiency bonus.",
	descriptionFull : "You chose the moon Lunitari to influence your magic, and your dedication to maintaining the balance between all things has been recognized by the Order of the Red Robes, granting you these benefits:"+
	"\n   " + toUni("Insightful Magic") + ". You learn one 2nd-level spell of your choice. The 2nd-level spell must be from the illusion or transmutation school of magic. You can cast this feat's 2nd-level spell without a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast this spell using spell slots you have of the appropriate level. The spell's spellcasting ability is the one chosen when you gain the Initiate of High Sorcery feat."+
	"\n   " + toUni("Magical Balance") + ". When you make an attack roll, an ability check, or a saving throw, and roll a 9 or lower on the d20, you can use your reaction to balance fate and treat the roll as a 10. you can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	prerequisite : "4th level, Initiate of High Sorcery (Lunitari) feat",
	prereqeval : function(v) {
		var iHghSrcyInit = CurrentFeats.known.indexOf("initiate of high sorcery");
		return v.characterLevel >= 4 && iHghSrcyInit !== -1 && CurrentFeats.choices[iHghSrcyInit] === 'lunitari';
	},
	usages : "Proficiency bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus');",
	recovery : "long rest",
	spellcastingBonus : [{
		name : "2nd-level Illus/Trans spell",
		"class" : "any",
		school : ["Illus", "Trans"],
		level : [2, 2],
		firstCol : "oncelr"
	}],
	spellcastingAbility : 'initiate of high sorcery_-_lunitari',
	allowUpCasting : true
};
FeatsList["adept of the white robes"] = {
	name : "Adept of the White Robes",
	source : [["D:SotDQ", 32], ["UA:HoKR", 4]],
	description : "I learn one 2nd-level Abjur or Div spell, which I can cast once per long rest at its lowest level without a spell slot, or as normal with one. As a reaction when I or a creature I can see within 30 ft is damaged, I can expend a spell slot and roll d6s equal to its level to reduce the damage by that much + my spellcasting modifier.",
	descriptionFull : "You chose the moon Solinari to influence your magic, and your oath to use magic to make the world a better place has been recognized by the Order of the White Robes, granting you these benefits:"+
	"\n   " + toUni("Protective Magic") + ". You learn one 2nd-level spell of you choice. The 2nd-level spell must be from the abjuration or divination school of magic. You can cast this feat's 2nd-level spell without a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast this spell using spell slots you have of the appropriate level. The spell's spellcasting ability is the one chosen when you gain the Initiate of High Sorcery feat."+
	"\n   " + toUni("Protective Ward") + ". When you or a creature you can see within 30 feet of you takes damage, you can use your reaction to expend a spell slot and weave protective magic around the target. Roll a number of d6s equal to the level of the spell slot expended and reduce the damage the target takes by the total rolled on those dice + your spellcasting ability modifier.",
	prerequisite : "4th level, Initiate of High Sorcery (Solinari) feat",
	prereqeval : function(v) {
		var iHghSrcyInit = CurrentFeats.known.indexOf("initiate of high sorcery");
		return v.characterLevel >= 4 && iHghSrcyInit !== -1 && CurrentFeats.choices[iHghSrcyInit] === 'solinari';
	},
	action : [["reaction", ""]],
	spellcastingBonus : [{
		name : "2nd-level Abjur/Div spell",
		"class" : "any",
		school : ["Abjur", "Div"],
		level : [2, 2],
		firstCol : "oncelr"
	}],
	spellcastingAbility : 'initiate of high sorcery_-_solinari',
	allowUpCasting : true
};

// Feat Divinely Favored
FeatsList["divinely favored"] = {
	name : "Divinely Favored",
	source : [["D:SotDQ", 32], ["UA:HoKR", 4]],
	description : "I learn a cleric cantrip, a 1st-level spell based on my alignment, and Augury. I can cast the spells each once per long rest at their lowest level without a spell slot, or by using a spell slot as normal. I can choose Int, Wis, or Cha as my spellcasting ability for this. I can use a holy symbol as a spellcasting focus for any spell that uses the chosen ability.",
	descriptionFull : "A god chose you to carry a spark of their power."+
	"\n   You learn one cantrip of your choice from the cleric spell list and one 1st-level spell based on the alignment of your character, as specified in the table below. You also learn the augury spell."+
	"\n\n" + toUni("Alignment\t1st-level Spell")+
	"\n Evil\t\tChoose one 1st level warlock spell"+
	"\n Good\t\tChoose one 1st-level cleric spell"+
	"\n Neutral\t\tChoose one 1st-level druid spell"+
	"\n\n   You can cast the chosen 1st-level spell and the augury spell without a spell slot, and you must finish a long rest before you can cast either of these spells in this way again. You can also cast these spells using spell slots you have of the appropriate level."+
	"\n   Your spellcasting ability for this feat's spells is Intelligence, Wisdom, or Charisma (choose when you select this feat)."+
	"\n\n   In addition, you can use a holy symbol as a spellcasting focus for any spell you cast that uses the spellcasting ability you choose when you select this feat.",
	choices : ["Evil (warlock spell)", "Good (cleric spell)", "Neutral (druid spell)"],
	"evil (warlock spell)" : {
		name : "Divinely Favored [Evil]",
		description : "I learn a cleric cantrip, a 1st-level warlock spell, and Augury. I can cast each spell once per long rest at their lowest level without a spell slot, or by using a spell slot as normal. I choose Int, Wis, or Cha as my spellcasting ability for this. I can use a holy symbol as a spellcasting focus for any spell that uses the chosen ability.",
		spellcastingAbility : [4,5,6],
		allowUpCasting : true,
		spellcastingBonus : [{
			name : "Cleric Cantrip",
			"class" : ["cleric"],
			level : [0, 0],
			firstCol : "atwill"
		}, {
			name : "1st-level Warlock Spell",
			"class" : ["warlock"],
			level : [1, 1],
			firstCol : "oncelr"
		}, {
			name : "Augury",
			spells : ["augury"],
			selection : ["augury"],
			firstCol : "oncelr"
		}]
	},
	"good (cleric spell)" : {
		name : "Divinely Favored [Good]",
		description : "I learn a cleric cantrip, a 1st-level cleric spell, and Augury. I can cast each spell once per long rest at their lowest level without a spell slot, or by using a spell slot as normal. I choose Int, Wis, or Cha as my spellcasting ability for this. I can use a holy symbol as a spellcasting focus for any spell that uses the chosen ability.",
		spellcastingAbility : [4,5,6],
		allowUpCasting : true,
		spellcastingBonus : [{
			name : "Cleric Cantrip",
			"class" : ["cleric"],
			level : [0, 0],
			firstCol : "atwill"
		}, {
			name : "1st-level Cleric Spell",
			"class" : ["cleric"],
			level : [1, 1],
			firstCol : "oncelr"
		}, {
			name : "Augury",
			spells : ["augury"],
			selection : ["augury"],
			firstCol : "oncelr"
		}]
	},
	"neutral (druid spell)" : {
		name : "Divinely Favored [Neutral]",
		description : "I learn a cleric cantrip, a 1st-level druid spell, and Augury. I can cast each spell once per long rest at their lowest level without a spell slot, or by using a spell slot as normal. I choose Int, Wis, or Cha as my spellcasting ability for this. I can use a holy symbol as a spellcasting focus for any spell that uses the chosen ability.",
		spellcastingAbility : [4,5,6],
		allowUpCasting : true,
		spellcastingBonus : [{
			name : "Cleric Cantrip",
			"class" : ["cleric"],
			level : [0, 0],
			firstCol : "atwill"
		}, {
			name : "1st-level Druid Spell",
			"class" : ["druid"],
			level : [1, 1],
			firstCol : "oncelr"
		}, {
			name : "Augury",
			spells : ["augury"],
			selection : ["augury"],
			firstCol : "oncelr"
		}]
	}
};

// Feats tree for Squire of Solamnia
FeatsList["squire of solamnia"] = {
	name : "Squire of Solamnia",
	source : [["D:SotDQ", 34]],
	description : "Mounting or dismounting costs me only 5-ft of movement. Once per turn, I can grant myself advantage on a weapon attack, adding +1d8 to the damage roll if it hits. I can use this benefit my proficiency bonus per long rest, but a use is expended only if the attack hits.",
	descriptionFull : "Your training in the ways of the Knights of Solamnia grants you these benefits:"+
	"\n   " + toUni("Mount Up") + ". Mounting or dismounting costs you only 5 feet of movement."+
	"\n   " + toUni("Precise Strike") + ". Once per turn, when you make a weapon attack roll against a creature, you can cause the attack roll to have advantage. If the attack hits, you roll a d8 and add the number rolled as a bonus to the attack's damage roll. You can use this benefit a number of times equal to your proficiency bonus, but a use is expended only if the attack hits. You regain all expended uses when you finish a long rest.",
	prerequisite : "Dragonlance Campaign, plus Fighter, Paladin, or Knight of Solamnia background",
	prereqeval : function (v) {
		return classes.known.fighter || classes.known.paladin || CurrentBackground.known.indexOf('knight of solamnia') !== -1 || /squire of solamnia/i.test(What("Background Feature"));
	},
	limfeaname : "Precise Strike (Squire of Solamnia)",
	usages : "Proficiency bonus per ",
	usagescalc : "event.value = Number(How('Proficiency Bonus'));",
	recovery : "long rest"
};
FeatsList["knight of the crown"] = {
	name : "Knight of the Crown",
	source : [["D:SotDQ", 32]],
	description : "As a bonus action, I can use Commanding Rally on one ally within 30 ft that can see or hear me to immediately make one weapon attack as a reaction. +1d8 is added to the damage roll, if it hits. I can do this my proficiency bonus per long rest. [+1 Strength, Dexterity, or Constitution]",
	descriptionFull : "You are a Knight of Solamnia aligned with the Order of the Crown, a group that extols the virtues of cooperation, loyalty, and obedience. You excel in group combat and gain these benefits:"+
	"\n   " + toUni("Ability Score Increase") + ". Increase your Strength, Dexterity, or Constitution by 1, to a maximum of 20."+
	"\n   " + toUni("Commanding Rally") + ". As a bonus action, you can command one ally within 30 feet of yourself to attack. If that ally can see or hear you, they can immediately make one weapon attack as a reaction. If the attack hits, the ally can roll a d8 and add the number rolled as a bonus to the attack's damage roll. You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	prerequisite : "4th level, Squire of Solamnia feat",
	prereqeval : function(v) { return v.characterLevel >= 4 && CurrentFeats.known.indexOf("squire of solamnia") !== -1; },
	limfeaname : "Commanding Rally (Knight of the Crown)",
	usages : "Proficiency bonus per ",
	usagescalc : "event.value = Number(How('Proficiency Bonus'));",
	recovery : "long rest",
	action : [["bonus action", ""]],
	choices : ["Strength", "Dexterity", "Constitution"],
	"strength" : {
		description : "As a bonus action, I can use Commanding Rally on one ally within 30 ft that can see or hear me to immediately make one weapon attack as a reaction. +1d8 is added to the damage roll, if it hits. I can do this my proficiency bonus per long rest. [+1 Strength]",
		scores : [1,0,0,0,0,0]
	},
	"dexterity" : {
		description : "As a bonus action, I can use Commanding Rally on one ally within 30 ft that can see or hear me to immediately make one weapon attack as a reaction. +1d8 is added to the damage roll, if it hits. I can do this my proficiency bonus per long rest. [+1 Dexterity]",
		scores : [0,1,0,0,0,0]
	},
	"constitution" : {
		description : "As a bonus action, I can use Commanding Rally on one ally within 30 ft that can see or hear me to immediately make one weapon attack as a reaction. +1d8 is added to the damage roll, if it hits. I can do this my proficiency bonus per long rest. [+1 Constitution]",
		scores : [0,0,1,0,0,0]
	}
};
FeatsList["knight of the rose"] = {
	name : "Knight of the Rose",
	source : [["D:SotDQ", 33]],
	description : "As a bonus action, I can use Bolstering Rally on myself or an ally within 30 ft that I can see and can see or hear me. They gain 1d8 + my proficiency bonus + the modifier of the ability chosen to increase temporary hit points. I can do this my proficiency bonus per long rest. [+1 Constitution, Wisdom, or Charisma]",
	descriptionFull : "You are a Knight of Solamnia aligned with the Order of the Rose, a group known for leadership, justice, and wisdom. Your resolve grants you these benefits:"+
	"\n   " + toUni("Ability Score Increase") + ". Increase your Constitution, Wisdom, or Charisma by 1, to a maximum of 20."+
	"\n   " + toUni("Bolstering Rally") + ". As a bonus action, you can encourage one creature you can see within 30 feet of yourself (you can choose yourself). If the target can see or hear you, the target gains temporary hit points equal to 1d8 + your proficiency bonus + the ability modifier of the ability score increased by this feat. You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	prerequisite : "4th level, Squire of Solamnia feat",
	prereqeval : function(v) { return v.characterLevel >= 4 && CurrentFeats.known.indexOf("squire of solamnia") !== -1; },
	limfeaname : "Bolstering Rally (Knight of the Rose)",
	usages : "Proficiency bonus per ",
	usagescalc : "event.value = Number(How('Proficiency Bonus'));",
	recovery : "long rest",
	action : [["bonus action", ""]],
	choices : ["Constitution", "Wisdom", "Charisma"],
	"constitution" : {
		calculation : 'event.value = "As a bonus action, I can use Bolstering Rally on myself or an ally within 30 ft that I can see and can see or hear me. They gain 1d8 + " + (Number(How("Proficiency Bonus")) + Number(What("Con Mod"))) + " temporary hit points (1d8 + proficiency bonus + Constitution modifier). I can do this my proficiency bonus per long rest. [+1 Constitution]";',
		scores : [0,0,1,0,0,0]
	},
	"wisdom" : {
		calculation : 'event.value = "As a bonus action, I can use Bolstering Rally on myself or an ally within 30 ft that I can see and can see or hear me. They gain 1d8 + " + (Number(How("Proficiency Bonus")) + Number(What("Wis Mod"))) + " temporary hit points (1d8 + proficiency bonus + Wisdom modifier). I can do this my proficiency bonus per long rest. [+1 Wisdom]";',
		scores : [0,0,0,0,1,0]
	},
	"charisma" : {
		calculation : 'event.value = "As a bonus action, I can use Bolstering Rally on myself or an ally within 30 ft that I can see and can see or hear me. They gain 1d8 + " + (Number(How("Proficiency Bonus")) + Number(What("Cha Mod"))) + " temporary hit points (1d8 + proficiency bonus + Charisma modifier). I can do this my proficiency bonus per long rest. [+1 Charisma]";',
		scores : [0,0,0,0,0,1]
	}
};
FeatsList["knight of the sword"] = {
	name : "Knight of the Sword",
	source : [["D:SotDQ", 33]],
	description : "Once per turn, when I hit a creature with a weapon attack, I can have it make a Wisdom save DC (8 + Prof Bonus + mod of the ability increased by this feat) or be frightened of me until my next turn ends. On a successful save, the target has disadv. on its next attack before its next turn ends. I can do this my proficiency bonus per long rest. [+1 Int/Wis/Cha]",
	descriptionFull : "You are a Knight of Solamnia aligned with the Order of the Sword, a group devoted to heroism and courage. Bravery steels your spirit, granting you these benefits:"+
	"\n   " + toUni("Ability Score Increase") + ". Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20."+
	"\n   " + toUni("Demoralizing Strike") + ". Once per turn, when you hit a creature with a weapon attack roll, you can attempt to frighten that target. The target must make a Wisdom saving throw (DC equals 8 + your proficiency bonus + the ability modifier of the score increased by this feat). On a failed save, the target is frightened of you until the end of your next turn. On a successful save, the target has disadvantage on the next attack roll it makes before the end of its next turn. You can use this benefit a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	prerequisite : "4th level, Squire of Solamnia feat",
	prereqeval : function(v) { return v.characterLevel >= 4 && CurrentFeats.known.indexOf("squire of solamnia") !== -1; },
	limfeaname : "Demoralizing Strike (Knight of the Sword)",
	usages : "Proficiency bonus per ",
	usagescalc : "event.value = Number(How('Proficiency Bonus'));",
	recovery : "long rest",
	choices : ["Intelligence", "Wisdom", "Charisma"],
	"intelligence" : {
		calculation : 'event.value = "Once per turn, when I hit a creature with a weapon attack, I can have it make a Wisdom save DC " + (8 + Number(How("Proficiency Bonus")) + Number(What("Int Mod"))) + " (8 + Prof Bonus + Int mod) or be frightened of me until my next turn ends. On a successful save, the target has disadv. on its next attack before its next turn ends. I can do this my proficiency bonus per long rest. [+1 Int]";',
		scores : [0,0,0,1,0,0]
	},
	"wisdom" : {
		calculation : 'event.value = "Once per turn, when I hit a creature with a weapon attack, I can have it make a Wisdom save DC " + (8 + Number(How("Proficiency Bonus")) + Number(What("Wis Mod"))) + " (8 + Prof Bonus + Wis mod) or be frightened of me until my next turn ends. On a successful save, the target has disadv. on its next attack before its next turn ends. I can do this my proficiency bonus per long rest. [+1 Wis]";',
		scores : [0,0,0,0,1,0]
	},
	"charisma" : {
		calculation : 'event.value = "Once per turn, when I hit a creature with a weapon attack, I can have it make a Wisdom save DC " + (8 + Number(How("Proficiency Bonus")) + Number(What("Cha Mod"))) + " (8 + Prof Bonus + Cha mod) or be frightened of me until my next turn ends. On a successful save, the target has disadv. on its next attack before its next turn ends. I can do this my proficiency bonus per long rest. [+1 Cha]";',
		scores : [0,0,0,0,0,1]
	}
};

// Subclass
AddSubClass("sorcerer", "lunar sorcery", {
	regExpSearch : /^(?=.*(sorcerer|sorcery|witch))(?=.*(lunar|moon)).*$/i,
	subname : "Lunar Sorcery",
	fullname : "Lunar Sorcerer",
	source : [["D:SotDQ", 0]],
	features : {
		"subclassfeature1" : {
			name : "Lunar Embodiment",
			source : [["D:SotDQ", 0]],
			minlevel : 1,
			additional : levels.map(function (n) { return (n < 3 ? 3 : n < 5 ? 6 : n < 7 ? 9 : n < 9 ? 12 : 15) + " additional spells known"}),
			spellcastingExtra : [
				// full moon
				"shield", "lesser restoration", "dispel magic", "death ward", "rary's telepathic bond",
				// new moon
				"ray of sickness", "blindness/deafness", "vampiric touch", "confusion", "hold monster",
				// crescent moon
				"color spray", "alter self", "phantom steed", "hallucinatory terrain", "mislead"
			],
			spellcastingExtraApplyNonconform : true,
			description : levels.map(function(n) {
				var phases = {
					"\u25CB Full: " : ["Shield", "Lesser Restoration", "Dispel Magic", "Death Ward", "Rary's Telepathic Bond"],
					"\u25CF New: " : ["Ray of Sickness", "Blindness/deafness", "Vampiric Touch", "Confusion", "Hold Monster"],
					"\u25D6 Crescent: " : ["Color Spray", "Alter Self", "Phantom Steed", "Hallucinatory Terrain", "Mislead"]
				};
				var aReturn = [
					"When I finish a long rest, I can choose a lunar phase: Full, New, or Crescent Moon",
					"I can cast the 1st-level spell of that lunar phase once per long rest without a spell slot"
				];
				var iSpellsAdd = n < 3 ? 1 : n < 5 ? 2 : n < 7 ? 3 : n < 9 ? 4 : 5;
				for (var phase in phases) {
					aReturn.push(phase + phases[phase].slice(0,iSpellsAdd).join(", "));
				}
				//aReturn.push("I know all " + (iSpellsAdd * 3) + " spells above; They don't count towards the number of spells I can know");
				return desc(aReturn);
			}),
			calcChanges : {
				spellAdd : [
					function (spellKey, spellObj, spName, isDuplicate) {
						if (spName === "sorcerer" && !isDuplicate && CurrentSpells.sorcerer.extra.indexOf(spellKey) !== -1) {
							var phases = {
								"F" : ["shield", "lesser restoration", "dispel magic", "death ward", "rary's telepathic bond"],
								"N" :  ["ray of sickness", "blindness/deafness", "vampiric touch", "confusion", "hold monster"],
								"C" : ["color spray", "alter self", "phantom steed", "hallucinatory terrain", "mislead"]
							};
							for (var phase in phases) {
								if (phases[phase].indexOf(spellKey) !== -1) {
									spellObj.firstCol = phase;
									return true;
								}
							}
						}
					},
					'The letters "F", "N", or "C" in the first column are used to indicate that a spell belongs to either the Full Moon, New Moon, or Crescent Moon lunar phase.'
				]
			},
			spellFirstColTitle : "Ph",
			extraLimitedFeatures : [{
				name : "1st-level lunar phase spell",
				usages : 1,
				recovery : "long rest"
			}]
		},
		"subclassfeature1.1" : {
			name : "Moon Fire",
			source : [["D:SotDQ", 0]],
			minlevel : 1,
			description : desc("I know the Sacred Flame cantrip and can use it on 2 creatures within 5 ft of each other"),
			spellcastingBonus : [{
				name : "Moon Fire",
				spells : ["sacred flame"],
				selection : ["sacred flame"]
			}],
			weaponsAdd : { select : ["Sacred Flame"] },
			spellChanges : {
				"sacred flame" : {
					description : "Up to 2 creas I see, max 5 ft apart, save or 1d8 Radiant dmg; no cover bonus; +1d8 at CL 5, 11, and 17",
					descriptionShorter : "Up to 2 creas I see, max 5 ft apart, save or 1d8 Radiant dmg; no cover bonus; +1d8 CL 5/11/17",
					descriptionCantripDie : "Up to 2 creas I see, max 5 ft apart, save or `CD`d8 Radiant dmg; no bonus for cover on save",
					changes : "When I cast Sacred Flame, I can target one creature as normal or target two creatures within range that are within 5 feet of each other."
				}
			},
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.baseWeaponName == 'sacred flame') {
							fields.Description = fields.Description.replace("1 creature", "up to 2 creatures within 5 ft");
						}
					},
					"When I cast Sacred Flame, I can target one creature as normal or target two creatures within range that are within 5 feet of each other."
				]
			}
		},
		"subclassfeature6" : {
			name : "Lunar Boons",
			source : [["D:SotDQ", 0]],
			minlevel : 6,
			description : desc([
				"Each lunar phase is additionally associated with spells of the following schools of magic:",
				"\u25CB Full: Abjur \u0026 Div\t\t\u25CF New: Ench \u0026 Necro\t" + (typePF ? "\t" : Array(8).join(" ")) + "\u25D6 Crescent: Illus \u0026 Trans",
				"I can reduce the sorcery point needed for Metamagic of spells of my current phase by 1"
			]),
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest"
		},
		"subclassfeature6.1" : {
			name : "Waxing and Waning",
			source : [["D:SotDQ", 0]],
			minlevel : 6,
			description : " [1 sorcery point]" + desc([
				"As a bonus action, I can spend 1 sorcery point to change my lunar phase",
				"I can cast each lunar phase's 1st-level spells once per long rest, if it is my current phase"
			]),
			action : [["bonus action", ""]],
			extraLimitedFeatures : [{
				name : "Shield (in Full lunar phase)",
				usages : 1,
				recovery : "long rest"
			}, {
				name : "Ray of Sickness (in New lunar phase)",
				usages : 1,
				recovery : "long rest"
			}, {
				name : "Color Spray (in Crescent lunar phase)",
				usages : 1,
				recovery : "long rest"
			}],
			eval : function () {
				RemoveFeature("1st-level lunar phase spell", 0, "", "", "Lunar Sorcerer: Lunar Embodiment");
			},
			removeeval : function () {
				AddFeature("1st-level lunar phase spell", 1, "", "long rest", "Lunar Sorcerer: Lunar Embodiment");
			}
		},
		"subclassfeature14" : {
			name : "Lunar Empowerment",
			source : [["D:SotDQ", 0]],
			minlevel : 14,
			description : " [passive benefits for current phase]" + desc([
				"\u25CB Full: I shed bright light in a 10-ft radius \u0026 dim light for extra 10 ft",
				"  Myself and creatures I choose in 10 ft have adv. on Investigation and Perception checks",
				"\u25CF New: I have adv. on Stealth checks; While I'm in darkness, attacks have disadv. vs me",
				"\u25D6 Crescent: I have resistance to Necrotic and Radiant damage"
			]),
			dmgres : [
				["Necrotic", "Necro. (in crescent)"],
				["Radiant", "Rad. (in crescent)"]
			]
		},
		"subclassfeature18" : {
			name : "Lunar Phenomenon",
			source : [["D:SotDQ", 0]],
			minlevel : 18,
			description : " [per phase: 1\xD7 per long rest or 5 SP]" + desc([
				"As a bonus action, or as part of changing phase, I can use a power of the (new) phase:",
				"\u25CB Full: Chosen creatures within 30 ft of me must make a Constitution save or be blinded",
				"  This lasts until their next turn ends; I also heal one creature within 30 ft for 3d8 HP",
				"\u25CF New: Chosen creatures within 30 ft of me must make a Dexterity save",
				"  If failed, they take 3d10 Necrotic damage and have 0 speed until their next turn ends",
				"  Also, I become invisible until the end of my next turn, or until I attack or cast a spell",
				"\u25D6 Crescent: I can magically teleport to an unoccupied space I can see within 60 ft",
				"  Both of us gain resistance to all damage until the start of my next turn",
				"I can use each phase's bonus action 1/LR, or by spending 5 sorcery points to use it again"
			]),
			action : [["bonus action", ""]],
			extraLimitedFeatures : [{
				name : "Lunar Phenomenon (Full)",
				usages : 1,
				recovery : "long rest",
				altResource : "5 SP"
			}, {
				name : "Lunar Phenomenon (New)",
				usages : 1,
				recovery : "long rest",
				altResource : "5 SP"
			}, {
				name : "Lunar Phenomenon (Crescent)",
				usages : 1,
				recovery : "long rest",
				altResource : "5 SP"
			}]
		}
	}
});

// Weapon, Hoopak
WeaponsList["hoopak, melee"] = {
	regExpSearch : /hoopak/i,
	name : "Hoopak, melee",
	source : [["D:SotDQ", 0]],
	list : "melee",
	ability : 1,
	type : "Martial",
	damage : [1, 6, "piercing"],
	range : "Melee",
	weight : 2,
	description : "Finesse, two-handed; Can be used ranged (40/160 ft) with ammo, for 1d4 bludgeoning damage",
	special : true,
	abilitytodamage : true
};
WeaponsList["hoopak, ranged"] = {
	regExpSearch : /^(?=.*hoopak)(?=.*ranged).*$/i,
	name : "Hoopak, ranged",
	source : [["D:SotDQ", 0]],
	list : "ranged",
	ability : 1,
	type : "Martial",
	damage : [1, 4, "bludgeoning"],
	range : "40/160 ft",
	weight : 2,
	description : "Ammunition, finesse, two-handed; Can be used in melee without ammo, for 1d6 piercing damage",
	special : true,
	abilitytodamage : true
};

// Magic Items
MagicItemsList["flying citadel helm"] = {
	name : "Flying Citadel Helm",
	source : [["D:SotDQ", 190]],
	type : "wondrous item",
	rarity : "very rare",
	attunement : true,
	prerequisite : "Requires attunement by a spellcaster",
	prereqeval : function(v) { return v.isSpellcaster; },
	description : "This ornate chair allows me to maneuver a flying citadel while concentrating (as if a spell). I can move the citadel through the air 80 ft/round or 8 miles/h, steer it, and see and hear from its highest point as though I were at that location. As an action or bonus action, I can transfer attunement to a willing spellcaster.",
	descriptionFull : "The function of this ornate chair is to propel and maneuver a flying citadel on which it has been installed. The chair has AC 15, 18 hit points, and immunity to poison and psychic damage. It is destroyed if reduced to 0 hit points."+
	"\n   The sensation of being attuned to a flying citadel helm is akin to the pins-and-needles effect one experiences after one's arm or leg falls asleep, but not as intense."+
	"\n   While attuned to a flying citadel helm and sitting in it, you gain the following abilities for as long as you maintain concentration (as if concentrating on a spell):"+
	"\n \u2022 You can use the flying citadel helm to move the citadel through the air, up to 80 feet per round, or up to 8 miles per hour."+
	"\n \u2022 You can steer the citadel, albeit in a somewhat clumsy fashion, in much the way that a rudder or oars can be used to maneuver a seafaring ship."+
	"\n \u2022 At any time, you can see and hear from the highest point outside the citadel as though you were at that location."+
	"\n\n   If no creature attuned to the helm is maintaining concentration, the citadel remains motionless in its space."+
	"\n   "+toUni("Transfer Attunement")+". You can use an action or a bonus action to touch a willing spellcaster, whereupon that creature attunes to the flying citadel helm immediately, and your attunement to the flying citadel helm ends."+
	"\n   "+toUni("Crash")+". Should the flying citadel helm be destroyed, the citadel it is installed on loses power and begins to crumble. If the crumbling citadel is in the air, it descends at a rate of 30 feet per round, or 300 feet per minute. Any creature on the citadel or on the ground within 120 feet of the citadel when it lands must make a DC 20 Dexterity saving throw, taking 39 (6d12) bludgeoning damage on a failed save, or half as much damage on a successful one.",
	action : [
		["action", " (Transfer Attunement)"],
		["bonus action", " (Transfer Attunement)"]
	]
};
MagicItemsList["kagonesti forest shroud"] = {
	name : "Kagonesti Forest Shroud",
	source : [["D:SotDQ", 190]],
	type : "wondrous item",
	rarity : "rare",
	attunement : true,
	description : "This cloak of autumnal leaves woven together grants me advantage on Dexterity (Stealth) checks. As a bonus action once per dawn, I can use it to magically teleport to an unoccupied space I can see within 30 ft. I then have advantage on the next attack roll I make before the end of the turn.",
	descriptionFull : "This cloak appears to be made of autumnal leaves woven together. While you wear this cloak, you have advantage on Dexterity (Stealth) checks, and you can use a bonus action to magically teleport, along with any equipment you are wearing or carrying, to an unoccupied space you can see within 30 feet of yourself. You then have advantage on the next attack roll you make before the end of the turn. Once this bonus action is used, it can't be used again until the next dawn.",
	advantages : [["Stealth", true]],
	action : [["bonus action", " (teleport)"]],
	usages : 1,
	recovery : "Dawn",
	additional : "teleport"
};
MagicItemsList["mirror of reflected pasts"] = {
	name : "Mirror of Reflected Pasts",
	source : [["D:SotDQ", 190]],
	type : "wondrous item",
	rarity : "very rare",
	attunement : true,
	description : "As an action, I can (de)activate this mirror. It can be activated once per dawn, making it hover in the air, can't be moved, and when a non-construct sees its reflection in it while within 30 ft, it must make a DC 15 Wis save. It is paralyzed until the mirror is deactivated. It can retry the save at the end of each of its turns.",
	descriptionLong : "As an action, I can activate this mirror of elven design once per dawn, or deactive it. While active, it hovers in the air and can't be moved. When a non-construct creature within 30 ft of the mirror sees its reflection in it, the creature must make a DC 15 Wisdom save or become paralyzed. The creature can repeat the save at the end of each of its turns, but is otherwise paralyzed until the  mirror is deactivated. A successful save makes a creature immune for 24 hours. While paralyzed by the mirror, the creature sees idealized versions of events from their past reflected in the mirror's glass.",
	descriptionFull : "This mirror of elven design allows those who stare into it to reflect on positive memories. The 3-foot-tall mirror weighs 25 pounds, and it has AC 11, 10 hit points, and vulnerability to bludgeoning damage. It shatters and is destroyed if reduced to 0 hit points."+
	"While holding the mirror upright, you can use an action to speak its command word and activate it. While activated, the mirror hovers in the air, and it can be destroyed but not moved. It remains activated until you use an action to speak the command word again or your attunement to the mirror ends, at which point the mirror harmlessly floats to the ground. Once the mirror has been deactivated, it can't be activated again until the next dawn."+
	"If a non-Construct creature other than you sees its reflection in the activated mirror while within 30 feet of it, that creature must succeed on a DC 15 Wisdom saving throw or become paralyzed until the mirror is deactivated or until that creature can no longer see the mirror. A creature paralyzed by the mirror can repeat the saving throw at the end of each of its turns, ending the effect on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to this mirror's effect for the next 24 hours."+
	"While paralyzed by the mirror, the creature sees events from their past reflected in the mirror's glass. These memories aren't real, but rather idealized versions of those occurrences. Nearby observers can glimpse flashes of these memories if looking indirectly at the mirror.",
	weight : 25,
	action : [["action", " [(de)activate]"]],
	usages : 1,
	recovery : "Dawn"
};
