/*	-ABOUT-
	Subject:	Race: Gnoll
	Effect:		This script adds the Gnoll race from the Tome of Monstrous Races by /u/revlid on /r/UnearthedArcana (https://reddit.com/7uzdvb)
				This homebrew was created by revlid and is available here: http://homebrewery.naturalcrit.com/share/S1x4kCFv-
	Code by:	/u/sea__ (edits by /u/safety-orange)
	Date:		2018-02-12 (sheet v12.999)
*/

var iFileName = "Tome of Monstrous Races: Gnoll [revlid's work, transcribed by /u/sea__].js";
RequiredSheetVersion(12.999);

SourceList["ToMR"] = {
	name : "/u/revlid's Tome of Monstrous Races",
	abbreviation : "ToMR",
	group : "Reddit/r/UnearthedArcana",
	url : "http://homebrewery.naturalcrit.com/share/S1x4kCFv-",
	date : "2018/02/03"
};

RaceList["gnoll-cult"] = {
	regExpSearch : /^(?=.*gnoll)(?=.*cult).*$/i,
	name : "Cult Gnoll",
	sortname : "Gnoll, Cult",
	source : ["ToMR", 8],
	plural : "Gnolls",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languageProfs : ["Common", "Abyssal"],
	weapons: ["gnoll bite"],
	vision : [["Darkvision", 60]],
	age : " rarely live longer than 30 years, but mature to adulthood in their first few years, and show no signs of age until a sudden collapse in their last year of life.",
	height : " normally stand between 7 and 8 feet tall, even in their characteristic hunched posture.",
	weight : " weigh around 300 pounds.",
	savetxt : { immune : ["disease"] },
	skills : ["Intimidation"],
	improvements : "Cult Gnoll: +1 Strength, +2 Constitution;",
	scores : [1, 0, 2, 0, 0, 0],
	features : {
		"carrion eater" : {
			name : "Carrion Eater",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			tooltip : ""
		},
		"rampage" : {
			name : "Rampage",
			minlevel : 1,
			action : ["bonus action",""],
			tooltip : ""
		}
	},
	trait : "Cult Gnoll (+1 Strength, +2 Constitution)\nBite: I can bite for 1d6 piercing damage instead of using unarmed strikes.\nCarrion Eater: Once per long rest, I can feed on a corpse during a short rest. At the end of the rest, I regain HP equal to the consumed creature's HD + my Constitution modifier.\nRampage: As a bonus action when I reduce a creature to 0 HP with a melee attack on my turn, I can move up to half my speed and make a bite attack."
};

RaceList["gnoll-spotted"] = {
	regExpSearch : /^(?=.*gnoll)(?=.*spotted).*$/i,
	name : "Spotted Gnoll",
	sortname : "Gnoll, Spotted",
	source : ["ToMR", 8],
	plural : "Gnolls",
	size : 3,
	speed : { walk : { spd : 30, enc : 20 } },
	languageProfs : ["Common", "Abyssal", 1],
	weapons: ["gnoll bite"],
	vision : [["Darkvision", 60]],
	age : " rarely live longer than 30 years, but mature to adulthood in their first few years, and show no signs of age until a sudden collapse in their last year of life.",
	height : " normally stand between 7 and 8 feet tall, even in their characteristic hunched posture.",
	weight : " weigh around 300 pounds.",
	savetxt : { immune : ["disease"] },
	skills : ["Intimidation", "Deception"],
	improvements : "Spotted Gnoll: +2 Constitution, +1 Charisma;",
	scores : [0, 0, 2, 0, 0, 1],
	spellcastingAbility : 6,
	features : {
		"carrion eater" : {
			name : "Carrion Eater",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			tooltip : ""
		},
		"butchers lure" : {
			name : "Butcher's Lure",
			minlevel : 1,
			action : ["action",""],
			tooltip : ", and can only be used to create illusory sounds",
			spellcastingBonus : {
				name : "Butcher's Lure",
				spells : ["minor illusion"],
				selection : ["minor illusion"]
			}
		}
	},
	trait : "Spotted Gnoll (+2 Constitution, +1 Charisma)\nBite: I can bite for 1d6 piercing damage instead of using unarmed strikes.\nCarrion Eater: Once per long rest, I can feed on a corpse during a short rest. At the end of the rest, I regain HP equal to the consumed creature's HD + my Constitution modifier.\nButcher's Lure: I know the Minor Illusion cantrip and can cast it without components. I can only use it to create illusory sounds, but others have disadvantage on checks to determine they are illusions. Charisma is my spellcasting ability for this."
};

RaceList["gnoll-tearer"] = {
	regExpSearch : /^(?=.*gnoll)(?=.*tearer).*$/i,
	name : "Tearer Gnoll",
	sortname : "Gnoll, Tearer",
	source : ["ToMR", 8],
	plural : "Gnolls",
	size : 3,
	speed : { walk : { spd : 35, enc : 25 } },
	languageProfs : ["Common", "Abyssal"],
	weapons: ["gnoll tearer bite"],
	vision : [["Darkvision", 60]],
	age : " rarely live longer than 30 years, but mature to adulthood in their first few years, and show no signs of age until a sudden collapse in their last year of life.",
	height : " normally stand between 7 and 8 feet tall, even in their characteristic hunched posture.",
	weight : " weigh around 300 pounds.",
	savetxt : { immune : ["disease"] },
	skills : ["Intimidation"],
	improvements : "Tearer Gnoll: +1 Dexterity, +2 Constitution;",
	scores : [0, 1, 2, 0, 0, 0],
	features : {
		"carrion eater" : {
			name : "Carrion Eater",
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			tooltip : ""
		}
	},
	trait : "Tearer Gnoll (+1 Dexterity, +2 Constitution)\nBite: I can bite for 1d6 piercing damage instead of using unarmed strikes. This bite attack is treated as a finesse weapon and as a light weapon for the purpose of two-weapon fighting.\nCarrion Eater: Once per long rest, I can feed on a corpse during a short rest. At the end of the rest, I regain HP equal to the consumed creature's HD + my Constitution modifier."
};

WeaponsList["gnoll bite"] = {
	regExpSearch : /^(?=.*gnoll)(?=.*bite).*$/i,
	name : "Bite (Gnoll)",
	source : ["ToMR", 9],
	list : "melee",
	ability : 1,
	type : "Natural",
	damage : [1, 6, "piercing"],
	range : "Melee",
	description : "",
	abilitytodamage : true
};

WeaponsList["gnoll tearer bite"] = {
	regExpSearch : /^(?=.*gnoll)(?=.*bite)(?=.*tearer).*$/i,
	name : "Bite (Gnoll, Tearer)",
	source : ["ToMR", 9],
	list : "melee",
	ability : 2,
	type : "Natural",
	damage : [1, 6, "piercing"],
	range : "Melee",
	description : "Finesse, Light",
	abilitytodamage : true
};