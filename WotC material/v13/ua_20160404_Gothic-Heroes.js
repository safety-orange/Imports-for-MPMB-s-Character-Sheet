var iFileName = "ua_20160404_Gothic-Heroes.js";
RequiredSheetVersion(13);
// This file adds the content from the Unearthed Arcana: Gothic Heroes article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:GH"] = {
	name : "Unearthed Arcana: Gothic Heroes",
	abbreviation : "UA:GH",
	group : "Unearthed Arcana",
	url : "https://dnd.wizards.com/sites/default/files/media/upload/articles/UA%20Gothic%20Characters.pdf",
	date : "2016/04/04"
};

// Adds 8 new races, the Revenant versions of the Aasimar, Dragonborn, Dwarf, Elf, Gnome, Halfling, Human, and Tiefling
RaceList["aasimar revenant"] = { // Based on the VGtM Aasimar, made with /u/RebelMage's help
	regExpSearch : /^(?=.*revenant)((?=.*aasimar)|((?=.*planetouched)(?=.*(celestial|angel)))).*$/i,
	name : "Aasimar Revenant",
	sortname : "Revenant, Aasimar",
	source : ["UA:GH", 1],
	plural : "Aasimar",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Celestial"],
	vision : [["Darkvision", 60]],
	dmgres : ["Necrotic", "Radiant"],
	age : " reach adulthood in their late teens and live around 160 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	scores : [0, 0, 1, 0, 0, 2],
	trait : "Aasimar Revenant (+1 Constitution, +2 Charisma)" + (typePF ? "\n" : " ") + "Light Bearer: I know the Light cantrip. Healing Hands: As an action, once per long rest, I can touch to heal for my level in HP.\nRelentless Nature: I have returned to life with one goal: avenge my death or finish an unresolved task. I will rest once I fulfill my goal, but until then I can't truly die. Whenever I'm below half my max HP at the start of my turn, I regain 1 HP. If I die, I return to life within 24 hours. If my body was destroyed, it is reformed within 1 mile of where I died. I always know the distance and direction to creatures involved with my goal.",
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Light Bearer",
		spells : ["light"],
		selection : ["light"],
		firstCol : 'atwill'
	},
	features : {
		"healing hands" : {
			name : "Healing Hands",
			usages : 1,
			minlevel : 1,
			recovery : "long rest",
			additional : ["1 HP", "2 HP", "3 HP", "4 HP", "5 HP", "6 HP", "7 HP", "8 HP", "9 HP", "10 HP", "11 HP", "12 HP", "13 HP", "14 HP", "15 HP", "16 HP", "17 HP", "18 HP", "19 HP", "20 HP"],
			action : ["action", ""]
		}
	}
};
RaceList["dwarf revenant"] = {
	regExpSearch : /^(?=.*revenant)(?=.*\b(dwarfs?|dwarves|dwarfish|dwarvish|dwarven)\b).*$/i,
	name : "Dwarf Revenant",
	sortname : "Revenant, Dwarf",
	source : ["UA:GH", 1],
	plural : "Dwarves",
	size : 3,
	speed : {
		walk : { spd : 25, enc : 25 }
	},
	languageProfs : ["Common", "Dwarvish"],
	vision : [["Darkvision", 60]],
	savetxt : { adv_vs : ["poison"] },
	dmgres : ["Poison"],
	weaponProfs : [false, false, ["battleaxe", "handaxe", "warhammer", "light hammer"]],
	toolProfs : [["Smith, brewer, or mason tools", 1]],
	age : " are considered young until they are 50 and live about 350 years",
	height : " stand between 4 and 5 feet tall (4' + 2d4\")",
	weight : " weigh around 150 lb (130 + 2d4 \xD7 2d6 lb)",
	heightMetric : " stand between 1,2 and 1,5 metres tall (120 + 5d4 cm)",
	weightMetric : " weigh around 75 kg (60 + 5d4 \xD7 4d6 / 10 kg)",
	scores : [0, 0, 3, 0, 0, 0],
	trait : "Dwarf Revenant (+3 Constitution)\nStonecunning: I have expertise on Int (History) checks related to the origin of stonework.\nRelentless Nature: I have returned to life with one goal: avenge my death or finish an unresolved task. I will rest once I fulfill my goal, but until then I can't truly die. Whenever I'm below half my max HP at the start of my turn, I regain 1 HP. If I die, I return to life within 24 hours. If my body was destroyed, it is reformed within 1 mile of where I died. I always know the distance and direction to creatures involved with my goal."
};
RaceList["elf revenant"] = {
	regExpSearch : /^(?!.*half)(?=.*revenant)(?=.*\b(elfs?|elves|elvish|elven)\b).*$/i,
	name : "Elf Revenant",
	sortname : "Revenant, Elf",
	source : ["UA:GH", 1],
	plural : "Elves",
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
	height : " range from under 5 to over 6 feet tall (4'6\" + 2d10\")",
	weight : " weigh around 115 lb (90 + 2d10 \xD7 1d4 lb)",
	heightMetric : " range from under 1,5 to over 1,8 metres tall (140 + 5d10 cm)",
	weightMetric : " weigh around 55 kg (40 + 5d10 \xD7 2d4 / 10 kg)",
	scores : [0, 2, 1, 0, 0, 0],
	trait : "Elf Revenant (+2 Dexterity, +1 Constitution)\nTrance: I don't sleep, but meditate for 4 hours a day, needing only 4 hours for a long rest.\nRelentless Nature: I have returned to life with one goal: avenge my death or finish an unresolved task. I will rest once I fulfill my goal, but until then I can't truly die. Whenever I'm below half my max HP at the start of my turn, I regain 1 HP. If I die, I return to life within 24 hours. If my body was destroyed, it is reformed within 1 mile of where I died. I always know the distance and direction to creatures involved with my goal."
};
RaceList["halfling revenant"] = {
	regExpSearch : /^(?=.*revenant)(?=.*\b(halflings?|hobbits?)\b).*$/i,
	name : "Halfling Revenant",
	sortname : "Revenant, Halfling",
	source : ["UA:GH", 1],
	plural : "Halflings",
	size : 4,
	speed : {
		walk : { spd : 25, enc : 15 }
	},
	languageProfs : ["Common", "Halfling"],
	savetxt : { adv_vs : ["frightened"] },
	age : " reach adulthood at age 20 and live around 150 years",
	height : " average about 3 feet tall (2'7\" + 2d4\")",
	weight : " weigh around 40 lb (35 + 2d4 lb)",
	heightMetric : " average about 90 cm tall (80 + 5d4)",
	weightMetric : " weigh around 18 kg (16 + 5d4 / 10 kg)",
	scores : [0, 2, 1, 0, 0, 0],
	trait : "Halfling Revenant (+2 Dexterity, +1 Constitution)" + (typePF ? "\n" : " ") + "Lucky: I reroll 1's on attack/check/save. Halfling Nimbleness: I can move through the space of anybody of a size larger than me.\nRelentless Nature: I have returned to life with one goal: avenge my death or finish an unresolved task. I will rest once I fulfill my goal, but until then I can't truly die. Whenever I'm below half my max HP at the start of my turn, I regain 1 HP. If I die, I return to life within 24 hours. If my body was destroyed, it is reformed within 1 mile of where I died. I always know the distance and direction to creatures involved with my goal."
};
RaceList["gnome revenant"] = {
	regExpSearch : /^(?=.*revenant)(?=.*\bgnomes?\b).*$/i,
	name : "Gnome Revenant",
	sortname : "Revenant, Gnome",
	source : ["UA:GH", 1],
	plural : "Gnomes",
	size : 4,
	speed : {
		walk : { spd : 25, enc : 15 }
	},
	languageProfs : ["Common", "Gnomish"],
	vision : [["Darkvision", 60]],
	savetxt : { text : ["Adv. on Int/Wis/Cha saves vs. magic"] },
	age : " start adult life around age 40 and can live 350 to almost 500 years",
	height : " are 3 to 4 feet tall (2'11\" + 2d4\")",
	weight : " weigh around 40 lb (35 + 2d4 lb)",
	heightMetric : " are 90 to 120 cm tall (2'11\" + 5d4)",
	weightMetric : " weigh around 18 kg (16 + 5d4 / 10 kg)",
	scores : [0, 0, 1, 2, 0, 0],
	trait : "Gnome Revenant (+1 Constitution, +2 Intelligence)\nRelentless Nature: I have returned to life with one goal: avenge my death or finish a critical, unresolved task. I will find rest once I fulfill my goal, but until then I can't truly die. Whenever I'm below half my max HP at the start of my turn, I regain 1 HP. If I die, I return to life within 24 hours. If my body was destroyed, it is reformed within 1 mile of where I died. Any destroyed equipment is not regained. I always know the distance and direction between me and any creature involved with my goal that is on the same plane."
};
RaceList["dragonborn revenant"] = {
	regExpSearch : /^(?=.*dragonborn)(?=.*revenant).*$/i,
	name : "Dragonborn Revenant",
	sortname : "Revenant, Dragonborn",
	source : ["UA:GH", 1],
	plural : "Dragonborn",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Draconic"],
	weaponOptions : {
		regExpSearch : /^(?=.*breath)(?=.*weapon).*$/i,
		name : "Breath weapon",
		source : ["UA:GH", 1],
		ability : 3,
		type : "Natural",
		damage : [2, 6, "necrotic"],
		range : '5-ft \u00D7 30-ft line',
		description : "Hits all in area; Con save, success - half damage; Usable only once per short rest",
		abilitytodamage : false,
		dc : true,
		dbBreathWeapon : true
	},
	addWeapons : ["Breath Weapon"],
	age : " reach adulthood by 15 and live around 80 years",
	height : " stand well over 6 feet tall (5'6\" + 2d8\")",
	weight : " weigh around 240 lb (175 + 2d8 \xD7 2d6 lb)",
	heightMetric : " stand well over 1,8 metres tall (170 + 5d8 cm)",
	weightMetric : " weigh around 110 kg (80 + 5d8 \xD7 4d6 / 10 kg)",
	scores : [1, 0, 1, 0, 0, 1],
	trait : "Dragonborn Revenant (+1 Strength, +1 Constitution, +1 Charisma)\nBreath Weapon: As an action, 5 ft by 30 ft line, Dex save halves, necrotic damage.\nRelentless Nature: I have returned to life with one goal: avenge my death or finish an unresolved task. I will rest once I fulfill my goal, but until then I can't truly die. Whenever I'm below half my max HP at the start of my turn, I regain 1 HP. If I die, I return to life within 24 hours. If my body was destroyed, it is reformed within 1 mile of where I died. I always know the distance and direction to creatures involved with my goal.",
	abilitySave : 3,
	dmgres : ["Necrotic"],
	features : {
		"draconic ancestry" : {
			name : "Draconic Ancestry",
			limfeaname : "Breath Weapon",
			minlevel : 1,
			usages : 1,
			additional : levels.map(function (n) {
				return (n < 6 ? 2 : n < 11 ? 3 : n < 16 ? 4 : 5) + 'd6';
			}),
			recovery : "short rest",
			action : ["action", ""],
			calcChanges : {
				atkCalc : [
					function (fields, v, output) {
						if (v.theWea.dbBreathWeapon && CurrentRace.known === 'dragonborn revenant' && CurrentRace.level > 5) {
							output.die = output.die.replace('2d6', (CurrentRace.level < 11 ? 3 : CurrentRace.level < 16 ? 4 : 5) + 'd6');
						};
					}
				]
			}
		}
	}
};
RaceList["human revenant"] = {
	regExpSearch : /^(?=.*human)(?=.*revenant).*$/i,
	name : "Human Revenant",
	sortname : "Revenant, Human",
	source : ["UA:GH", 1],
	plural : "Humans",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	age : " reach adulthood in their late teens and live less than 100 years",
	height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
	weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
	heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
	weightMetric : " weigh around 75 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
	scorestxt : "+1 Constitution and +1 to two different ability scores of my choice",
	scores : [0, 0, 1, 0, 0, 0],
	trait : "Human Revenant (+1 Constitution and +1 to two different ability scores of my choice)\nRelentless Nature: I have returned to life with one goal: avenge my death or finish a critical, unresolved task. I will find rest once I fulfill my goal, but until then I can't truly die. Whenever I'm below half my max HP at the start of my turn, I regain 1 HP. If I die, I return to life within 24 hours. If my body was destroyed, it is reformed within 1 mile of where I died. Any destroyed equipment is not regained. I always know the distance and direction between me and any creature involved with my goal that is on the same plane."
};
RaceList["tiefling revenant"] = {
	regExpSearch : /^(?=.*revenant)((?=.*tiefling)|(?=.*planetouched)(?=.*(hell|abyss|fiend|devil))).*$/i,
	name : "Tiefling Revenant",
	sortname : "Revenant, Tiefling",
	source : ["UA:GH", 1],
	plural : "Tieflings",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Infernal"],
	vision : [["Darkvision", 60]],
	age : " reach adulthood in their late teens and live around 100 years",
	height : " range from 5 to over 6 feet tall (4'9\" + 2d8\")",
	weight : " weigh around 155 lb (110 + 2d8 \xD7 2d4 lb)",
	heightMetric : " range from 1,5 to over 1,8 metres tall (145 + 5d8 cm)",
	weightMetric : " weigh around 70 kg (50 + 5d8 \xD7 4d4 / 10 kg)",
	scores : [0, 0, 1, 0, 0, 2],
	trait : "Tiefling Revenant (+1 Constitution, +2 Charisma)\nRelentless Nature: I have returned to life with one goal: avenge my death or finish a critical, unresolved task. I will find rest once I fulfill my goal, but until then I can't truly die. Whenever I'm below half my max HP at the start of my turn, I regain 1 HP. If I die, I return to life within 24 hours. If my body was destroyed, it is reformed within 1 mile of where I died. Any destroyed equipment is not regained. I always know the distance and direction between me and any creature involved with my goal that is on the same plane."
};

// Adds 2 subclasses, 1 for the Fighter and 1 for the rogue
AddSubClass("fighter", "monster hunter", {
	regExpSearch : /^(?=.*monster)(?=.*hunter).*$/i,
	subname : "Monster Hunter",
	source : ["UA:GH", 2],
	fullname : "Monster Hunter",
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiencies",
			source : ["UA:GH", 2],
			minlevel : 3,
			description : "\n   " + "I gain proficiency with two skills or one skill and any one tool" + "\n   " + "For skills I can choose Arcana, History, Insight, Investigation, Nature, or Perception",
			choices : ["1 Skill and 1 Tool proficiencies", "2 Skill proficiencies"],
			"1 skill and 1 tool proficiencies" : {
				name : "Bonus Proficiencies",
				description : "\n   " + "I gain proficiency with one skill and any one tool of my choice" + "\n   " + "For the skill, I can choose Arcana, History, Insight, Investigation, Nature, or Perception",
				skillstxt : "Choose one from: Arcana, History, Insight, Investigation, Nature, or Perception",
				toolProfs : [["Any tool", 1]]
			},
			"2 skill proficiencies" : {
				name : "Bonus Proficiencies",
				description : "\n   " + "I gain 2 skill proficiencies: Arcana, History, Insight, Investigation, Nature, or Perception",
				skillstxt : "Choose two from: Arcana, History, Insight, Investigation, Nature, and Perception"
			}
		},
		"subclassfeature3.1" : {
			name : "Combat Superiority",
			source : ["UA:GH", 2],
			minlevel : 3,
			description : "\n   " + "I gain a number of superiority dice that I can use to fuel special maneuvers (see below)" + "\n   " + "I can use only one maneuver per attack; I regain all superiority dice after a short rest" + "\n    - " + "Use after rolling to hit; I add the superiority die to my attack roll" + "\n    - " + "Use after damaging a creature; I add the superiority die to the damage roll" + "\n       " + "Also, the attack imposes disadvantage on any concentration save resulting from it" + "\n    - " + "Use after Int/Wis/Cha save, before knowing success/fail; add the die to the save total" + "\n    - " + "Use with Wis (Perception) to detect hidden or Wis (Insight) to see if lying to me" + "\n       " + "After rolling but before knowing if success/fail; I add the superiority die to the check",
			additional : ["", "", "d8", "d8", "d8", "d8", "d8", "d8", "d8", "d10", "d10", "d10", "d10", "d10", "d10", "d10", "d10", "d12", "d12", "d12"],
			usages : [0, 0, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6],
			recovery : "short rest"
		},
		"subclassfeature3.2" : {
			name : "Hunter's Mysticism",
			source : ["UA:GH", 2],
			minlevel : 3,
			usages : 1,
			recovery : "long rest",			
			description : "\n   " + "I can cast Detect Magic as a ritual and Protection from Evil & Good once per long rest" + "\n   " + "I gain the ability to speak one of the following languages: Abyssal, Celestial, or Infernal",
			action : ["action", " (Prot vs. Evil/Good)"],
			languageProfs : [["Abyssal, Celestial, or Infernal", 1]]
		},
		"subclassfeature7" : {
			name : "Monster Slayer",
			source : ["UA:GH", 2],
			minlevel : 7,
			usages : 1,
			recovery : "long rest",
			description : "\n   " + "Whenever I use a superiority die, I can choose to expend two, adding both to the roll" + "\n   " + "If the target is an aberration, fey, fiend, or undead, both dice deal maximum damage",
			action : ["action", ""]
		},
		"subclassfeature10" : {
			name : "Improved Combat Superiority",
			source : ["UA:GH", 2],
			minlevel : 10,
			description : "\n   " + "My superiority dice turn into d10s at 10th level and into d12s at 18th level"
		},
		"subclassfeature15" : {
			name : "Relentless",
			source : ["UA:GH", 2],
			minlevel : 15,
			description : "\n   " + "I regain one superiority die if I have no more remaining when I roll initiative"
		}
	}
});
AddSubClass("rogue", "inquisitive", {
	regExpSearch : /^(?=.*(rogue|miscreant))(?=.*inquisitive).*$/i,
	subname : "Inquisitive",
	source : ["UA:GH", 3],
	features : {
		"subclassfeature3" : {
			name : "Ear for Deceit",
			source : ["UA:GH", 3],
			minlevel : 3,
			description : "\n   " + "When using Wis (Insight) to sense if someone is lying, I can choose to use a fixed total" + "\n   " + "This total is 8 + Wis modifier + proficiency bonus (if proficient, or twice if expertise)"
		},
		"subclassfeature3.1" : {
			name : "Eye for Detail",
			source : ["UA:GH", 3],
			minlevel : 3,
			description : "\n   " + "I can use the bonus action granted by Cunning Action for the following as well:" + "\n    - " + "To make a Wisdom (Perception) check to spot a hidden creature or object" + "\n    - " + "To make an Intelligence (Investigation) check to uncover and decipher clues" + "\n    - " + "To use Insightful Fighting (see below)"
		},
		"subclassfeature3.2" : {
			name : "Insightful Fighting",
			source : ["UA:GH", 3],
			minlevel : 3,
			description : "\n   " + "As an action or bonus action, I can decipher the tactics of an active opponent I can see" + "\n   " + "I have to make a Wisdom (Insight) check vs. the target's Charisma (Deception) check" + "\n   " + "If I succeed, I can use sneak attack on the target regardless of advantage/disadvantage" + "\n   " + "This benefit lasts for 1 minute or until I successfully use Insightful Fighting again",
			action : ["action", ""]
		},
		"subclassfeature9" : {
			name : "Steady Eye",
			source : ["UA:GH", 3],
			minlevel : 9,
			usages : 1,
			recovery : "long rest",
			description : "\n   " + "If not moving during my turn, I gain adv. on Wis (Perception) to find hidden things"
		},
		"subclassfeature13" : {
			name : "Unerring Eye",
			source : ["UA:GH", 3],
			minlevel : 13,
			description : "\n   " + "As an action, I can sense magical deceptions within 30 feet of me, but not what it does" + "\n   " + "I learn the presence of illusions, shapechanged creatures, or magic designed to deceive",
			action : ["action", ""]
		},
		"subclassfeature17" : {
			name : "Eye for Weakness",
			source : ["UA:GH", 3],
			minlevel : 17,
			description : "\n   " + "While my Insightful Fighting is active, I add 2d6 to sneak attacks against that target"
		}
	}
});
