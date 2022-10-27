var iFileName = "ua_20180611_Giant-Soul-Sorcerer.js";
RequiredSheetVersion("13.0.8");
// This file adds the content from the Unearthed Arcana: Giant Soul Sorcerer article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:GSS"] = {
	name : "Unearthed Arcana: Giant Soul Sorcerer",
	abbreviation : "UA:GSS",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2018/dnd/downloads/UA_GiantSoul.pdf",
	date : "2018/06/11"
};

AddSubClass("sorcerer", "giant soul-ua", {
	regExpSearch : /^(?=.*giant)(?=.*soul)(?=.*sorcerer).*$/i,
	subname : "Giant Soul",
	source : [["UA:GSS", 1]],
	fullname : "Giant Soul Sorcerer",
	features : {
		"subclassfeature1" : {
			name : "Jotun Resilience",
			source : [["UA:GSS", 1]],
			minlevel : 1,
			description : "\n   " + "My hit point maximum increases by an amount equal to my sorcerer level",
			calcChanges : {
				hp : function (totalHD) {
					if (classes.known.sorcerer) {
						return [classes.known.sorcerer.level, "Jotun Resilience (sorcerer level)"];
					}
				}
			}
		},
		"subclassfeature1.1" : {
			name : "Mark of Ordning",
			source : [["UA:GSS", 1]],
			minlevel : 1,
			description : desc([
				'Choose a giant heritage using the "Choose Feature" button above',
				"I learn spells based on my giant heritage, which I add to my known spells"
			]),
			choices : ["Cloud Giant", "Fire Giant", "Frost Giant", "Hill Giant", "Stone Giant", "Storm Giant"],
			"cloud giant" : {
				name : "Mark of Ordning: Cloud Giant",
				description : desc([
					"I add Minor Illusion, Fog Cloud and Invisibility to my known sorcerer spells",
					"These do not count against the number of cantrips/spells I can know"
				]),
				spellcastingBonus : {
					name : "Mark of Ordning",
					spells : ["minor illusion", "fog cloud", "invisibility"],
					selection : ["minor illusion", "fog cloud", "invisibility"],
					times : [2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
				}
			},
			"fire giant" : {
				name : "Mark of Ordning: Fire Giant",
				description : desc([
					"I add Fire Bolt, Burning Hands, and Flaming Sphere to my known sorcerer spells",
					"These do not count against the number of cantrips/spells I can know"
				]),
				spellcastingBonus : {
					name : "Mark of Ordning",
					spells : ["fire bolt", "burning hands", "flaming sphere"],
					selection : ["fire bolt", "burning hands", "flaming sphere"],
					times : [2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
				}
			},
			"frost giant" : {
				name : "Mark of Ordning: Frost Giant",
				description : desc([
					"I add Ray of Frost, Armor of Agathys, and Hold Person to my known sorcerer spells",
					"These do not count against the number of cantrips/spells I can know"
				]),
				spellcastingBonus : {
					name : "Mark of Ordning",
					spells : ["ray of frost", "armor of agathys", "hold person"],
					selection : ["ray of frost", "armor of agathys", "hold person"],
					times : [2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
				}
			},
			"hill giant" : {
				name : "Mark of Ordning: Hill Giant",
				description : desc([
					"I add Shillelagh, Heroism, and Enlarge/Reduce to my known sorcerer spells",
					"These do not count against the number of cantrips/spells I can know"
				]),
				spellcastingBonus : {
					name : "Mark of Ordning",
					spells : ["shillelagh", "heroism", "enlarge/reduce"],
					selection : ["shillelagh", "heroism", "enlarge/reduce"],
					times : [2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
				}
			},
			"stone giant" : {
				name : "Mark of Ordning: Stone Giant",
				description : desc([
					"I add Resistance, Entangle, and Spike Growth to my known sorcerer spells",
					"These do not count against the number of cantrips/spells I can know"
				]),
				spellcastingBonus : {
					name : "Mark of Ordning",
					spells : ["resistance", "entangle", "spike growth"],
					selection : ["resistance", "entangle", "spike growth"],
					times : [2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
				}
			},
			"storm giant" : {
				name : "Mark of Ordning: Storm Giant",
				description : desc([
					"I add Thunderwave, Shocking Grasp, and Gust of Wind to my known sorcerer spells",
					"These do not count against the number of cantrips/spells I can know"
				]),
				spellcastingBonus : {
					name : "Mark of Ordning",
					spells : ["thunderwave", "shocking grasp", "gust of wind"],
					selection : ["thunderwave", "shocking grasp", "gust of wind"],
					times : [2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
				}
			},
			choiceDependencies : [{ feature : "subclassfeature6" }]
		},
		"subclassfeature6" : {
			name : "Soul of Lost Ostoria",
			source : [["UA:GSS", 1]],
			minlevel : 6,
			description : "\n   " + 'Use the "Choose Feature" button above to select the giant heritage',
			choices : ["Cloud Giant", "Fire Giant", "Frost Giant", "Hill Giant", "Stone Giant", "Storm Giant"],
			choicesNotInMenu : true,
			"cloud giant" : {
				name : "Soul of Lost Ostoria: Cloud Giant",
				description : desc([
					"As a bonus action after casting any of my Mark of Ordning spells, I can teleport",
					"I teleport to an unoccupied space that I can see up to my Con mod + 10 ft away"
				]),
				action : ["bonus action", ""]
			},
			"fire giant" : {
				name : "Soul of Lost Ostoria: Fire Giant",
				description : "\n   " + "I add my Constitution modifier (min 1) to the damage of my Mark of Ordning spells",
				calcChanges : {
					atkCalc : [
						function (fields, v, output) {
							if (v.baseWeaponName == 'fire bolt') output.extraDmg += Math.max(What('Con Mod'), 1);
						},
						"I add my Constitution modifier (min 1) to the damage of my Mark of Ordning spells: Fire Bolt, Burning Hands, and Flaming Sphere"
					],
					spellAdd : [
						function (spellKey, spellObj, spName) {
							if (spName == "sorcerer" && (/^(fire bolt|burning hands|flaming sphere)$/i).test(spellKey)) {
								spellObj.description = spellObj.description.replace(/d(6|10)/, "d$1+" + Math.max(1, What("Con Mod")));
								return true;
							};
						},
						"I add my Constitution modifier (min 1) to the damage of my Mark of Ordning spells: Fire Bolt, Burning Hands, and Flaming Sphere"
					]
				}
			},
			"frost giant" : {
				name : "Soul of Lost Ostoria: Frost Giant",
				description : desc([
					"Immediately after casting any of my Mark of Ordning spells, I gain temporary HP",
					"I gain my Con mod in temporary HP (min 1) and its added to that of the spell (if any)"
				])
			},
			"hill giant" : {
				name : "Soul of Lost Ostoria: Hill Giant",
				source : [["UA:GSS", 2]],
				description : desc([
					"Immediately after casting any of my Mark of Ordning spells, I can magically push others",
					"I can select up to two creatures within 5 ft of me that each have to make a Str save",
					"If failed, it is pushed my Con mod (min 1) + 5 ft away from me; It can choose to fail"
				])
			},
			"stone giant" : {
				name : "Soul of Lost Ostoria: Stone Giant",
				source : [["UA:GSS", 2]],
				description : desc([
					"Immediately after casting any of my Mark of Ordning spells, I gain a bonus to AC",
					"My AC increases with my Constitution modifier (min +1) until the end of my next turn"
				])
			},
			"storm giant" : {
				name : "Soul of Lost Ostoria: Storm Giant",
				source : [["UA:GSS", 2]],
				description : desc([
					"Immediately after casting any of my Mark of Ordning spells, I shoot lightning",
					"Up to 3 targets in 30 ft that I can see take my Con mod (min 1) in lightning damage"
				])
			}
		},
		"subclassfeature14" : {
			name : "Rage of Fallen Ostoria",
			source : [["UA:GSS", 2]],
			minlevel : 14,
			description : desc([
				"When I start casting a sorcerer spell using a spell slot on my turn, I can grow in size",
				"It lasts for 1 min or until I die or am incapacitated; I can activate it only once per turn",
				"While it lasts, I enjoy the following benefits (which are cumulative, except the damage):",
				"\u2022 I increase size by one category (from Medium to Large, for example)",
				"\u2022 My current HP and maximum HP increase by a number equal to my sorcerer level",
				"\u2022 My reach and walking speed both increase by 5 ft",
				"\u2022 I gain advantage on Strength checks and Strength saving throws",
				"\u2022 I add my Constitution modifier to the damage of my melee weapon attacks (min +1)"
			]),
			additional : levels.map(function(n) {
				return n < 14 ? "" : "+" + n + " HP";
			}),
			usages : levels.map(function(n) {
				return n < 14 ? "" : n < 18 ? 1 : 2;
			}),
			recovery : "short rest"
		},
		"subclassfeature18" : {
			name : "Blessing of the All Father",
			source : [["UA:GSS", 2]],
			minlevel : 18,
			description : "\n   " + "I add +2 to my Constitution and its maximums increases to 22",
			scores : [0, 0, 2, 0, 0, 0],
			scoresMaximum : [0, 0, 22, 0, 0, 0]
		}
	}
});
