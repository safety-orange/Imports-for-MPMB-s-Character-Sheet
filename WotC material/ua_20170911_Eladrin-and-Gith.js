var iFileName = "ua_20170911_Eladrin-and-Gith.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Unearthed Arcana: Eladrin and Gith article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:EnG"] = {
	name : "Unearthed Arcana: Eladrin and Gith",
	abbreviation : "UA:EnG",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2017/dnd/downloads/UA-Eladrin-Gith.pdf",
	date : "2017/09/11"
};

// Adds three races:
// Alternative version of the Eladrin
RaceList["eladrin-uaeng"] = {
	regExpSearch : /^(?!.*half)((?=.*eladrin)|((?=.*\b(elfs?|elves|elvish|elven)\b)(?=.*\b(feys?|feywild)\b))).*$/i,
	name : tDoc.info.SheetVersion < 13 ? "Eladrin " : "Eladrin",
	sortname : "Elf, Fey (Eladrin)",
	source : ["UA:EnG", 1],
	plural : "Eladrin",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Elvish"],
	vision : [["Darkvision", 60]],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
	skills : ["Perception"],
	age : " typically claim adulthood around age 100 and can live to be 750 years old",
	height : " range from under 5 to over 6 feet tall (4'6\" + 2d12\")",
	weight : " weigh around 115 lb (90 + 2d10 \xD7 1d4 lb)",
	heightMetric : " range from under 1,5 to over 1,8 metres tall (140 + 5d12 cm)",
	weightMetric : " weigh around 55 kg (40 + 5d10 \xD7 2d4 / 10 kg)",
	improvements : "Eladrin: +2 Dexterity, +1 Intelligence or Charisma;",
	scores : [0, 2, 0, 0, 0, 0],
	trait : "Eladrin (+2 Dexterity, +1 Intelligence or Charisma)\nTrance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. This gives the same benefit as a human gets from 8 hours of sleep (long rest only 4 hours).\nFey Step: Once per short rest, as a bonus action, I can magically teleport up to 30 ft to an unoccupied space I can see." + (typePF ? "\n" : " ") + "Shifting Seasons: After a short or long rest, I can align myself with a season, granting me access to a cantrip until my next rest: Friends, Chill Touch, Minor Illusion, or Fire Bolt. My spellcasting ability for this is Int or Cha, whichever is higher.",
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Shifting Seasons",
		spells : ["friends", "chill touch", "minor illusion", "fire bolt"],
		selection : ["friends", "chill touch", "minor illusion", "fire bolt"],
		firstCol : "checkbox",
		times : 4
	},
	features : {
		"fey step" : {
			name : "Fey Step",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			tooltip : "",
			action : ["bonus action", ""]
		}
	}
};
// Githyanki and its two variants
RaceList["githyanki"] = {
	regExpSearch : /githyanki/i,
	name : "Githyanki",
	source : ["UA:EnG", 2],
	plural : "Githyanki",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Gith", 1],
	armor : [true, true, false, false],
	skillstxt : "Choose any one skill or tool",
	age : " reach adulthood in their late teens and live for about a century",
	height : " are more leaner and taller than humans, most are a slender 6 feet tall (5'0\" + 2d12\")",
	weight : " weigh around 135 lb (100 + 2d12 \xD7 2d4 lb)",
	heightMetric : " are more leaner and taller than humans, most are a slender 1,8 metres tall (150 + 5d12 cm)",
	weightMetric : " weigh around 61 kg (45 + 5d10 \xD7 4d4 / 10 kg)",
	improvements : "Githyanki: +2 Strength, +1 Intelligence;",
	scores : [2, 0, 0, 1, 0, 0],
	trait : "Githyanki (+2 Strength, +1 Intelligence)\nGithyanki Psionics:" + desc([
		"I know the Mage Hand cantrip.",
		"At 3rd level, I can cast the Jump spell once per long rest.",
		"At 5th level, I can also cast the Misty Step spell once per long rest.",
		"Intelligence is my spellcasting ability for these spells.",
		"I don't require components to cast these spells."
	]),
	spellcastingAbility : 4,
	spellcastingBonus : {
		name : "Githyanki Psionics (1)",
		spells : ["mage hand"],
		selection : ["mage hand"],
		atwill : true
	},
	features : {
		"jump" : {
			name : "Jump",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Githyanki Psionics)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Githyanki Psionics (3)",
				spells : ["jump"],
				selection : ["jump"],
				oncelr : true
			}
		},
		"misty step" : {
			name : "Misty Step",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Githyanki Psionics)",
			action : ["bonus action", ""],
			spellcastingBonus : {
				name : "Githyanki Psionics (5)",
				spells : ["misty step"],
				selection : ["misty step"],
				oncelr : true
			}
		}
	}
};
AddRacialVariant("githyanki", "tool proficiency", {
	regExpSearch : /tool proficiency/i,
	toolProfs : [["Any tool", 1]]
});
AddRacialVariant("githyanki", "skill proficiency", {
	regExpSearch : /skill proficiency/i,
	skillstxt : "Choose any one skill"
});
// Githzerai
RaceList["githzerai"] = {
	regExpSearch : /githzerai/i,
	name : "Githzerai",
	source : ["UA:EnG", 3],
	plural : "Githzerai",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Gith"],
	age : " reach adulthood in their late teens and live for about a century",
	height : " are more leaner and taller than humans, most are a slender 6 feet tall (4'11\" + 2d12\")",
	weight : " weigh around 115 lb (90 + 2d12 \xD7 1d4 lb)",
	heightMetric : " are more leaner and taller than humans, most are a slender 1,8 metres tall (150 + 5d12 cm)",
	weightMetric : " weigh around 55 kg (40 + 5d10 \xD7 2d4 / 10 kg)",
	improvements : "Githzerai: +1 Intelligence, +2 Wisdom;",
	scores : [0, 0, 0, 1, 2, 0],
	trait : "Githzerai (+1 Intelligence, +2 Wisdom)\n" + (typePF ? "\n" : "") + "Monastic Training: I gain a +1 bonus to AC while I'm not wearing medium or heavy armor and not using a shield.\n\nGithzerai Psionics: I know the Mage Hand cantrip. At 3rd level, I can cast the Shield spell once per long rest. At 5th level, I can also cast the Detect Thoughts spell once per long rest. Wisdom is my spellcasting ability for these spells.",
	spellcastingAbility : 5,
	spellcastingBonus : {
		name : "Githzerai Psionics (1)",
		spells : ["mage hand"],
		selection : ["mage hand"],
		atwill : true
	},
	features : {
		"shield" : {
			name : "Shield",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Githzerai Psionics)",
			action : ["reaction", ""],
			spellcastingBonus : {
				name : "Githzerai Psionics (3)",
				spells : ["shield"],
				selection : ["shield"],
				oncelr : true
			}
		},
		"detect thoughts" : {
			name : "Detect Thoughts",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Githzerai Psionics)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Githzerai Psionics (5)",
				spells : ["detect thoughts"],
				selection : ["detect thoughts"],
				oncelr : true
			}
		}
	},
	eval : "AddACMisc(1, 'Monastic Training', '+1 AC while not wearing medium or heavy armor and not using a shield.\\n\\nMonastic Training was gained from being a Githzerai.', \"tDoc.getField('Medium Armor').isBoxChecked(0) || tDoc.getField('Heavy Armor').isBoxChecked(0) || What('AC Shield Bonus')\")",
	removeeval : "AddACMisc(0, 'Monastic Training', '+1 AC while not wearing medium or heavy armor and not using a shield.\\n\\nMonastic Training was gained from being a Githzerai.')"
};
