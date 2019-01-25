var iFileName = "ua_20170206_Sorcerous-Origins.js";
RequiredSheetVersion(13);
// This file adds the content from the Unearthed Arcana: Sorcerous Origins article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:SO"] = {
	name : "Unearthed Arcana: Sorcerous Origins",
	abbreviation : "UA:SO",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2017/dnd/downloads/26_UASorcererUA020617s.pdf",
	date : "2017/02/06"
};

// Adds 4 subclasses for the Sorcerer
//this code includes contributions by /u/SoilentBrad, as well as LamentingDemon on GitHub
AddSubClass("sorcerer", "favoured soul", {
	regExpSearch : /^(?=.*favou?red)(?=.*soul).*$/i,
	subname : "Favored Soul",
	source : ["UA:SO", 1],
	fullname : "Favored Soul",
	spellcastingList : {
		"class" : ["cleric", "sorcerer"]
	},
	features : {
		"subclassfeature1" : {
			name : "Divine Magic",
			source : ["UA:SO", 1],
			minlevel : 1,
			description : "\n   " + "When I select my 1st level or higher spells, I can also pick spells from the cleric spell list" + "\n   " + "These cleric spells count as sorcerer spells for me"
		},
		"subclassfeature1.1" : {
			name : "Supernatural Resilience",
			source : ["UA:SO", 1],
			minlevel : 1,
			description : "\n   " + "My hit point maximum increases by an amount equal to my sorcerer level",
			calcChanges : {
				hp : "if (classes.known.sorcerer) {extrahp += classes.known.sorcerer.level; extrastring += '\\n + ' + classes.known.sorcerer.level + ' from Supernatural Resilience (Sorcerer)'; }; "
			}
		},
		"subclassfeature1.2" : {
			name : "Favored by the Gods",
			source : ["UA:SO", 1],
			minlevel : 1,
			description : "\n   " + "If I fail a saving throw or miss with an attack roll, I can add 2d4 to the total",
			recovery : "short rest",
			usages : 1
		},
		"subclassfeature6" : {
			name : "Blessed Countenance",
			source : ["UA:SO", 1],
			minlevel : 6,
			description : "\n   " + "Choose an otherworldly quality using the \"Choose Feature\" button above" + "\n   " + "When my proficiency bonus applies to a Charisma check, I double that bonus",
			choices : ["Beautiful", "Youthful", "Kind", "Imposing"],
			"beautiful" : {
				name : "Beautiful",
				source : ["UA:SO", 1],
				description : "\n   " + "My appearance takes on an otherworldly quality of beauty" + "\n   " + "When my proficiency bonus applies to a Charisma check, I double that bonus"
			},
			"youthful" : {
				name : "Youthful",
				source : ["UA:SO", 1],
				description : "\n   " + "My appearance takes on an otherworldly quality of youthfulness" + "\n   " + "When my proficiency bonus applies to a Charisma check, I double that bonus"
			},
			"kind" : {
				name : "Kind",
				source : ["UA:SO", 1],
				description : "\n   " + "My appearance takes on an otherworldly quality of kindness" + "\n   " + "When my proficiency bonus applies to a Charisma check, I double that bonus"
			},
			"imposing" : {
				name : "Imposing",
				source : ["UA:SO", 1],
				description : "\n   " + "My appearance takes on an otherworldly quality of imposingness" + "\n   " + "When my proficiency bonus applies to a Charisma check, I double that bonus"
			},
			skillstxt : "I gain expertise in any Charisma-based skill I'm proficient with",
			skills : [["Deception", "only"], ["Intimidation", "only"], ["Performance", "only"], ["Persuasion", "only"]]
		},
		"subclassfeature14" : {
			name : "Divine Purity",
			source : ["UA:SO", 1],
			minlevel : 14,
			description : "\n   " + "I become immune to disease and poison",
			savetxt : { immune : ["poison", "disease"] }
		},
		"subclassfeature18" : {
			name : "Unearthly Recovery",
			source : ["UA:SO", 1],
			minlevel : 18,
			description : "\n   " + "As a bonus action when I have less than half of my max HP, I can heal myself" + "\n   " + "I regain a number of HP equal to half my maximum hit points",
			action : ["bonus action", ""],
			recovery : "long rest",
			usages : 1
		}
	}
});
//this code includes contributions by /u/SoilentBrad, as well as Toby L.
AddSubClass("sorcerer", "phoenix sorcery", {
	regExpSearch : /^(?=.*phoenix)(?=.*(sorcerer|sorcery|witch)).*$/i,
	subname : "Phoenix Sorcery",
	source : ["UA:SO", 1],
	fullname : "Phoenix Sorcerer",
	features : {
		"subclassfeature1" : {
			name : "Ignite",
			source : ["UA:SO", 2],
			minlevel : 1,
			description : "\n   " + "As an action, I can magically ignite a flammable object by touching it with my hand",
			action : ["action", ""]
		},
		"subclassfeature1.1" : {
			name : "Mantle of Flame",
			source : ["UA:SO", 2],
			minlevel : 1,
			description : desc([
				"As a bonus action, I can wreathe myself in fire for 1 minute, gaining these benefits:",
				" - I shed bright light in a 30-ft radius and dim light for an additional 30 ft",
				" - I deal my Charisma modifier in fire damage to all that touch me",
				" - I also deal this damage to all that hit me with a melee attack from within 5 ft",
				" - When I roll for fire damage on my turn, I add my Charisma damage to the result"
			]),
			action : ["bonus action", ""],
			recovery : "long rest",
			usages : 1
		},
		"subclassfeature6" : {
			name : "Phoenix Spark",
			source : ["UA:SO", 2],
			minlevel : 6,
			description : desc([
				"As a reaction when I am reduced to 0 HP, I can draw on the phoenix to stay at 1 HP",
				"All creatures within 10 ft of me take half my sorcerer level + my Cha mod fire damage",
				"If I have Mantle of Flame active, this damage is my sorcerer level + twice my Cha mod",
				"If I use this feature, my Mantle of Flame immediately ends"
			]),
			additional : levels.map( function(n) {
				if (n < 6) return "";
				return Math.floor(n / 2) + "+Cha \u007Cor\u007C " + n + "+2\u00D7Cha";
			}),
			action : ["reaction", ""],
			recovery : "long rest",
			usages : 1
		},
		"subclassfeature14" : {
			name : "Nourishing Fire",
			source : ["UA:SO", 2],
			minlevel : 14,
			description : desc([
				"When I cast a spell using a spell slot that includes a fire damage roll, I regain HP",
				"The HP regained is equal to the spell slot level + my Charisma modifier"
			])
		},
		"subclassfeature18" : {
			name : "Form of the Phoenix",
			source : ["UA:SO", 2],
			minlevel : 18,
			description : desc([
				"While my Mantle of Flame is active, I gain the following additional benefits:",
				"- I have a flying speed of 40 ft and can hover",
				"- I have resistance to all damage",
				"- If I use my Phoenix Spark, it deals an extra 20 fire damage to each creature"
			]),
			dmgres : [["All", "All (Mantle of Flame)"]]
		}
	}
});
//this code includes contributions by /u/SoilentBrad
AddSubClass("sorcerer", "sea sorcery", {
	regExpSearch : /^(?=.*sea)(?=.*(sorcerer|sorcery|witch)).*$/i,
	subname : "Sea Sorcery",
	source : ["UA:SO", 2],
	fullname : "Sea Sorcerer",
	features : {
		"subclassfeature1" : {
			name : "Soul of the Sea",
			source : ["UA:SO", 3],
			minlevel : 1,
			description : "\n   " + "I can breathe underwater and I have a swim speed equal to my walking speed",
			speed : { swim : { spd : "walk", enc : "walk" } }
		},
		"subclassfeature1.1" : {
			name : "Curse of the Sea",
			source : ["UA:SO", 3],
			minlevel : 1,
			description : desc([
				"I can curse a target that I hit with a cantrip or that fails its save against my cantrip",
				"This lasts until the end of my next turn or until I curse another target like this",
				"Once per turn when I cast a spell, I can trigger an active curse, if a condition is met",
				" - If spell dealt cold damage to it, its has -15 ft speed until the end of my next turn",
				" - If the spell dealt lightning damage to it, that damage is increased with my Cha mod",
				" - If the spell moved the target, it is moved an additional 15 ft",
				"Only one of these effects can be applied, even if the spell meets multiple conditions",
				"If the spell triggering the curse is a cantrip, the target stays cursed for another round"
			])
		},
		"subclassfeature6" : {
			name : "Watery Defense",
			source : ["UA:SO", 3],
			minlevel : 6,
			description : desc([
				"I gain resistance to fire damage",
				"I can protect myself when an attack deals bludgeoning, piercing, or slashing damage",
				"As a reaction when that happens, I reduce the damage by my sorcerer level + Charisma",
				"I can then also move up to 30 ft without provoking opportunity attacks"
			]),
			additional : levels.map( function(n) {
				if (n < 6) return "";
				return n + " + Charisma score";
			}),
			action : ["reaction", ""],
			recovery : "short rest",
			usages : 1,
			dmgres : ["Fire"]
		},
		"subclassfeature14" : {
			name : "Shifting Form",
			source : ["UA:SO", 3],
			minlevel : 14,
			description : desc([
				"I gain the ability to enter a liquid state while moving, squeezing through small spaces",
				"When I move on my turn, I take half damage from opportunity attacks",
				"I can move through any enemy's space, but can't willingly end my move in that space",
				"On my turn, I can move through any opening of at least 3 inches in diameter",
				"I can't end my move in a space smaller than one size category smaller than I am"
			])
		},
		"subclassfeature18" : {
			name : "Water Soul",
			source : ["UA:SO", 3],
			minlevel : 18,
			description : desc([
				"I no longer need to eat, drink, or sleep; Critical hits against me become normal hits",
				"I gain resistance to bludgeoning, piercing, and slashing damage"
			]),
			dmgres : ["Bludgeoning", "Piercing", "Slashing"]
		}
	}
});
//this code includes contributions by /u/SoilentBrad
AddSubClass("sorcerer", "stone sorcery", {
	regExpSearch : /^(?=.*stone)(?=.*(sorcerer|sorcery|witch)).*$/i,
	subname : "Stone Sorcery",
	source : ["UA:SO", 3],
	fullname : "Stone Sorcerer",
	spellcastingExtra : ["compelled duel", "searing smite", "thunderous smite", "wrathful smite", "branding smite", "magic weapon", "blinding smite", "elemental weapon", "staggering smite"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Proficiencies",
			source : ["UA:SO", 4],
			minlevel : 1,
			description : "\n   " + "I gain proficiency with shields, simple weapons and martial weapons",
			armorProfs : [false, false, false, true],
			weaponProfs : [true, true]
		},
		"subclassfeature1.1" : {
			name : "Metal Magic",
			source : ["UA:SO", 4],
			minlevel : 1,
			description : "\n   " + "My affinity for metal allows me to select from a broader range of spells"
		},
		"subclassfeature1.2" : {
			name : "Stone's Durability",
			source : ["UA:SO", 4],
			minlevel : 1,
			description : desc([
				"My hit point maximum increases by an amount equal to my sorcerer level",
				"As an action, I can gain an AC of 13 + Constitution modifier + shield",
				"This AC lasts until I don armor, I'm incapacitated, or use a bonus action to end it"
			]),
			action : [["action", " (start)"], ['bonus action', " (end)"]],
			calcChanges : {
				hp : "if (classes.known.sorcerer) {extrahp += classes.known.sorcerer.level; extrastring += '\\n + ' + classes.known.sorcerer.level + \" from Stone's Durability (Sorcerer)\"; }; "
			},
			armourOptions : {
				regExpSearch : /^(?=.*stone)(?=.*durability).*$/i,
				name : "Stone's Durability (Con)",
				source : ["UA:SO", 4],
				ac : 13,
				dex : -10,
				addMod : true
			},
			armorAdd : "Stone's Durability (Con)"
		},
		"subclassfeature6" : {
			name : "Stone Aegis",
			source : ["UA:SO", 4],
			minlevel : 6,
			description : desc([
				"As a bonus action, I can grant an aegis to an ally I can see within 60 ft of me",
				"The aegis reduces any bludgeoning, piercing, or slashing damage taken by the target",
				"This aegis lasts for 1 minute, until I use it again, or until I'm incapacitated",
				"As a reaction when the protected ally is attacked with a melee attack, I can teleport",
				"I can do this only if the attacker is within 60 ft of me and I can see it",
				"I teleport to an empty space next to it and make one melee weapon attack against it",
				"If this attack hits, the attack deals extra force damage"
			]),
			additional : levels.map( function(n) {
				if (n < 6) return "";
				return (Math.floor(n / 4) + 2) + " damage reduction; +" + (n < 11 ? 1 : n < 17 ? 2 : 3) + "d10 force damage";
			}),
			action : [["bonus action", ""], ['reaction', 'Aegis Teleport']]
		},
		"subclassfeature14" : {
			name : "Stone's Edge",
			source : ["UA:SO", 4],
			minlevel : 14,
			description : desc([
				"Once per casting of a spell that deals damage, I can choose one creature damaged by it",
				"That creature takes extra force damage equal to half my sorcerer level"
			]),
			additional : levels.map( function(n) {
				return n < 14 ? "" : Math.floor(n / 2) + " force damage";
			})
		},
		"subclassfeature18" : {
			name : "Earth Master's Aegis",
			source : ["UA:SO", 4],
			minlevel : 18,
			description : "\n   " + "My Stone's Aegis can now affect up to three creatures"
		}
	}
});
