var iFileName = "ua_20210126_Gothic-Lineages.js";
RequiredSheetVersion("13.0.8");
// This file adds the content from the Unearthed Arcana 2021: Gothic Lineages article to MPMB's Character Record Sheet
// This file contains contributions by Metacomet10, MarvinTheParanoidAndroid, and CountVladmir

SourceList["UA:GL"] = {
	name : "Unearthed Arcana: Gothic Lineages",
	abbreviation : "UA:GL",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2021/dnd/downloads/UA2021_GothicLineages.pdf",
	date : "2021/01/26"
};

RaceList["dhampir-ua"] = {
	regExpSearch : /dhampir/i,
	name : "Dhampir",
	source : [["UA:GL", 2]],
	plural : "Dhampirs",
	size : [3, 4],
	speed : {
		walk : { spd : 35, enc : 25 },
		climb : { spd : "walk", enc : "walk" }
	},
	languageProfs : ["Common", 1],
	vision : [["Darkvision", 60]],
	weaponsAdd : ["Vampiric Bite"],
	weaponOptions : [{
		regExpSearch : /^(?=.*vampiric)(?=.*bite).*$/i,
		name : "Vampiric Bite",
		source : [["VRGtR", 17]],
		ability : 3,
		type : "Simple",
		damage : [1, 4, "piercing"],
		range : "Melee",
		description : "Adv. while at or below half HP; Can empower myself on hit",
		isAlwaysProf : true,
		abilitytodamage : true,
		monkweapon : true
	}],
	extraLimitedFeatures : [{
		name : "Vampiric Bite",
		additional : "empower myself",
		usages: "Proficiency bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus')",
		recovery: "long rest"
	}],
	scorestxt : "+2 to one ability score, and +1 to a different score of my choice",
	trait : "Dhampir" + (typePF ? "\n " : "\t") +
	"\u2022 Type: My creature type is both Humanoid and Undead." +
	"\n \u2022 Spider Climb: Climbing speed equal to walking speed. At 3rd level, I can move up, down, and across vertical surfaces and upside down along ceilings, while leaving my hands free." +
	"\n \u2022 Vampiric Bite: Uses Constitution and has adv. on the attack roll if I'm at or below half HP. My Proficiency Bonus per long rest, when I hit a creature other than a construct or undead, I can empower myself. I either regain HP or gain a bonus on my next ability check or attack roll. The bonus is equal to the piercing damage dealt."
};
RaceList["hexblood-ua"] = {
	regExpSearch : /hexblood/i,
	name : "Hexblood",
	source : [["UA:GL", 4]],
	plural : "Hexbloods",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	scorestxt : "+2 to one ability score, and +1 to a different score of my choice",
	trait : "Hexblood" + (typePF ? "\n " : "\t") +
	"\u2022 Fey Resilience: I'm both Humanoid and Fey. I have adv. on saves vs. charms." +
	"\n \u2022 Magic Token: As an action once per long rest, I can harmlessly remove a lock of my hair, one of my nails or teeth and imbue this token with magic until I finish a long rest. While the token is imbued in this way, I can telepathically speak to a creature holding it or see and hear around it. See the Notes page for more information." +
	"\n \u2022 Hex Magic: I known Disguise Self and Hex. I can cast each spell once per long rest without using a spell slot, or by using a spell slot.",
	toNotesPage : [{
		name : "Hexblood's Magic Token",
		note : ["As an action, I can harmlessly pull out one of my nails, a tooth, or a lock of hair. This token is imbued with magic until I finish a long rest.",
		"While the token is imbued in this way, I can use an action to send a telepathic message to the creature holding or carrying the token, as long as I'm on the same plane of existence and are within 10 miles of it. The message can contain up to twenty-five words.",
		"In addition, while I'm within 10 miles of the token, I can use an action to enter a trance for 1 minute, during which I can see and hear from the token as if I were located where it is. While I'm using my senses at the token's location, I'm blinded and deafened in regard to my own surroundings. Afterward, the token is harmlessly destroyed.",
		"Once I create a token using this feature, I can't do so again until I finish a long rest, at which point my missing part regrows."]
	}],
	savetxt : {
		adv_vs : ["charmed"]
	},
	languageProfs : ["Common", 1],
	vision : [["Darkvision", 60]],
	action : [["action", "Magic Token"]],
	extraLimitedFeatures : [{
		name : "Magic Token",
		usages : 1,
		recovery: "long rest"
	}],
	spellcastingAbility : [4, 5, 6],
	features : {
		"hex magic" : {
			name : "Hex Magic",
			minlevel : 1,
			spellcastingBonus : {
				name : "Hex Magic",
				spells : ["disguise self", "hex"],
				selection : ["disguise self", "hex"],
				firstCol : 'oncelr',
				times : 2,
				allowUpCasting : true
			},
			extraLimitedFeatures : [{
				name : "Disguise Self",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 1+"
			}, {
				name : "Hex",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 1+"
			}]
		}
	}
};
RaceList["reborn-ua"] = {
	regExpSearch : /reborn/i,
	name : "Reborn",
	source : [["UA:GL", 5]],
	plural : "Reborns",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	scorestxt : "+2 to one ability score, and +1 to a different score of my choice",
	trait : "Reborn" + (typePF ? "\n " : "  ") +
	"\u2022 Type: My creature type is Humanoid, as well as Construct or Undead (my choice)." +
	"\n \u2022 Deathless Nature: I don't need to sleep, eat, drink, or breathe. I have adv. on saves vs. disease, poison, and death saves. I have resistance to poison damage. Magic can't put me to sleep and I can finish a long rest in 4 hours if I spend it inactive and motionless." +
	"\n \u2022 Knowledge from a Past Life: When I make an ability check that uses a skill, I can add +1d6 to the roll after seeing the d20 result. I can do this a number of times equal to my Proficiency Bonus and regain all expended uses when I finish a long rest.",
	languageProfs : ["Common", 1],
	vision : [["Darkvision", 60]],
	dmgres : ["Poison"],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["disease", "poison", "death saves"],
	},
	extraLimitedFeatures : [{
		name : "Knowledge from a Past Life",
		usages: "Proficiency bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus')",
		recovery: "long rest"
	}],
	useFromPreviousRace : {
		message : "If you replace a race with the Reborn lineage, you can keep the following elements of that race:"+
		desc(["its size,",
		"any skill proficiencies you gained from it,",
		"any climbing, flying, or swimming speed you gained from it, and",
		"any languages it knows and gain no new languages."], "\n   \u2022 ")+
		"\n\nIf you don't keep any of those elements or you choose this lineage at character creation, you instead:"+
		desc(["are size Medium or Small (your choice),",
		"gain proficiency in two skills of your choice, and",
		"can speak, read, and write Common and one other language that you and your DM agree is appropriate."], "\n   \u2022 "),
		defaultTraits : {
			skillstxt : "Choose any two skills"
		},
		gainTraits : ["size", "plural", "age", "height", "weight", "heightMetric", "weightMetric", "languageProfs", "skillstxt", "skills", "speed.climb", "speed.fly", "speed.swim"],
		replaceNameInTrait : ["Reborn", "suffix"]
	}
};
AddRacialVariant("reborn-ua", "undead", {
	regExpSearch : /undead/i,
	source : [["UA:GL", 5]],
	trait : RaceList["reborn-ua"].trait.replace("Humanoid, as well as Construct or Undead (my choice)", "both Humanoid and Undead").replace("  ", "\t")
});
AddRacialVariant("reborn-ua", "construct", {
	regExpSearch : /construct/i,
	source : [["UA:GL", 5]],
	trait : RaceList["reborn-ua"].trait.replace("Humanoid, as well as Construct or Undead (my choice)", "both Humanoid and Construct").replace("  ", "\t")
});
