var iFileName = "ua_20200114_Subclasses-Part-1.js";
RequiredSheetVersion("13.1.14");
// This file adds the content from the Unearthed Arcana 2020: Subclasses, Part 1 article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:SP1"] = {
	name : "Unearthed Arcana: Subclasses, Part 1",
	abbreviation : "UA:SP1",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2020/dnd/downloads/UA2020-Subclasses01.pdf",
	date : "2020/01/14"
};

// Add a subclasses for the Barbarian, Monk, Paladin, and Warlock
AddSubClass("barbarian", "path of the beast-ua", {
	regExpSearch : /^(?=.*\bbeast\b)(?=.*(warrior|marauder|barbarian|viking|(norse|tribes?|clans?)(wo)?m(a|e)n)).*$/i,
	subname : "Path of the Beast",
	source : [["UA:SP1", 1]],
	abilitySave : 3,
	features : {
		"subclassfeature3" : {
			name : "Form of the Beast",
			source : [["UA:SP1", 1]],
			minlevel : 3,
			description : desc([
				"When I enter my rage, I can transform to gain a bite, tail, or claws attack for that rage",
				"The bite attack allows me to regain my Con mod in HP on a hit once on my turn",
				"The claws attack allows me to make one extra attack when I use it in my Attack action"
			]),
			weaponOptions : [{
				regExpSearch : /^(?=.*(bestial|beast))(?=.*bite).*$/i,
				name : "Bestial Bite",
				source : [["UA:SP1", 1]],
				ability : 1,
				type : "Natural",
				damage : [1, 8, "piercing"],
				range : "Melee",
				description : "Only in rage; On a hit once on my turn, regain Con mod in HP",
				abilitytodamage : true,
				bestialNaturalWeapon : true,
				selectNow : true
			}, {
				regExpSearch : /^(?=.*(bestial|beast))(?=.*claws?).*$/i,
				name : "Bestial Claws",
				source : [["UA:SP1", 1]],
				ability : 1,
				type : "Natural",
				damage : [1, 6, "slashing"],
				range : "Melee",
				description : "Only in rage; Extra attack if used as part of Attack action",
				abilitytodamage : true,
				bestialNaturalWeapon : true,
				selectNow : true
			}, {
				regExpSearch : /^(?=.*(bestial|beast))(?=.*tail).*$/i,
				name : "Bestial Tail",
				source : [["UA:SP1", 1]],
				ability : 1,
				type : "Natural",
				damage : [1, 12, "piercing"],
				range : "Melee",
				description : "Reach; Only in rage",
				abilitytodamage : true,
				bestialNaturalWeapon : true,
				selectNow : true
			}],
			additional : levels.map(function(n) {
				return n < 6 ? "" : "chosen weapon counts as magical";
			})
		},
		"subclassfeature6" : {
			name : "Bestial Soul",
			source : [["UA:SP1", 1]],
			minlevel : 6,
			description : desc([
				"When I finish a short rest, I can choose one of the following benefits until my next rest:",
				" \u2022 Swimming speed equal to my walking speed and I can breathe underwater",
				" \u2022 Climb speed (same as walking) and no check to climb difficult surfaces or upside down",
				" \u2022 Once per turn when I jump, I can extend it by the result of an Athletics check in feet"
			]),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.theWea.bestialNaturalWeapon && !v.thisWeapon[1] && !v.theWea.isMagicWeapon && !(/counts as( a)? magical/i).test(fields.Description)) {
							fields.Description += (fields.Description ? '; ' : '') + 'Counts as magical';
						};
					},
					"The natural melee weapon that I gain from Form of the Beast count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage."
				]
			}
		},
		"subclassfeature10" : {
			name : "Infectious Fury",
			source : [["UA:SP1", 2]],
			minlevel : 10,
			description : desc([
				"In rage, when I hit a creature with my natural weapon, I can have it make a Wis save",
				"If it fails (DC 8 + my Prof Bonus + my Con mod) it suffers one effect of my choice:",
				" \u2022 It uses its reaction to make a melee attack against one creature I can see of my choice",
				" \u2022 It takes 2d12 psychic damage"
			]),
			usages : "Constitution modifier per ",
			usagescalc : "event.value = Math.max(1, What('Con Mod'));",
			recovery : "long rest"
		},
		"subclassfeature14" : {
			name : "Call the Hunt",
			source : [["UA:SP1", 2]],
			minlevel : 14,
			description : desc([
				"When I enter rage, I can choose my Con mod of willing creatures I can see within 30 ft",
				"The targets gain the Reckless Attack feature and I have adv. on saves vs. being frightened",
				"I also gain 5 temporary hit points per creature that accepts this benefit"
			]),
			usages : "Constitution modifier per ",
			usagescalc : "event.value = Math.max(1, What('Con Mod'));",
			recovery : "long rest"
		}
	}
});
AddSubClass("monk", "way of mercy-ua", {
	regExpSearch : /^(?=.*mercy)((?=.*(monk|monastic))|((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior))).*$/i,
	subname : "Way of Mercy",
	source : [["UA:SP1", 2]],
	features : {
		"subclassfeature3" : {
			name : "Implements of Mercy",
			source : [["UA:SP1", 2]],
			minlevel : 3,
			description : desc([
				"I gain proficiency with the herbalism and poisoner's kit, and either Insight or Medicine",
				'Use the "Choose Feature" button above to select the skill proficiency, Insight or Medicine'
			]),
			toolProfs : ["Herbalism kit", "Poisoner's kit"],
			choices : ["proficiency with Insight", "proficiency with Medicine"],
			"proficiency with insight" : {
				name : "Implements of Mercy - Insight",
				source : [["UA:SP1", 2]],
				description : "\n   I gain proficiency in the Insight skill and with the herbalism kit and the poisoner's kit",
				skills : ["Insight"]
			},
			"proficiency with medicine" : {
				name : "Implements of Mercy - Medicine",
				source : [["UA:SP1", 2]],
				description : "\n   I gain proficiency in the Medicine skill and with the herbalism kit and the poisoner's kit",
				skills : ["Medicine"]
			},
			"hands of healing" : {
				name : "Hands of Healing",
				extraname : "Way of Mercy 3",
				source : [["UA:SP1", 2]],
				description : levels.map(function (n) {
					var a = "As an action, I can spend 1 ki point to touch a creature and restore a number of its HP";
					var b6 = "It also recovers from one disease or the blinded, deafened, paralyzed, or poisoned condition";
					var c = "When I use Flurry of Blows, I can do this instead of one unarmed strike (no extra ki cost)";
					return desc( n < 6 ? [a, c] :
						[a, b6, n < 11 ? c : c.replace("one", "each")]
					);
				}),
				action : [["action", ""]],
				additional : levels.map(function (n) {
					return n < 3 ? "" : "1 ki point; heal 1d" + (n < 5 ? 4 : n < 11 ? 6 : n < 17 ? 8 : 10) + " + Wisdom modifier";
				})
			},
			"hands of harm" : {
				name : "Hands of Harm",
				extraname : "Way of Mercy 3",
				source : [["UA:SP1", 3]],
				description : desc([
					"When I hit a creature with an unarmed strike, I can spend 1 ki point to deal extra damage",
					"Only once per turn; If the target is incapacitated or poisoned, I roll the damage die 3 times"
				]),
				additional : levels.map(function (n) {
					return n < 3 ? "" : "1 ki point; 1d" + (n < 5 ? 4 : n < 11 ? 6 : n < 17 ? 8 : 10) + " necrotic damage";
				})
			},
			autoSelectExtrachoices : [{
				extrachoice : "hands of healing"
			}, {
				extrachoice : "hands of harm"
			}]
		},
		"subclassfeature6" : {
			name : "Noxious Aura",
			source : [["UA:SP1", 3]],
			minlevel : 6,
			description : " [1 ki point]" + desc([
				"As a bonus action, I can spend 1 ki point to gain a 5-ft radius toxic aura for 1 minute",
				"While active, ranged attacks have disadv. vs. me; It ends if I'm incapacitated or dismiss it",
				"Others who start their turn in it must make a Con save or be poisoned and take damage",
				"They take my Wis mod in poison damage (min 0); Poisoned lasts until my next turn ends"
			]),
			action : [["bonus action", ""]]
		},
		"subclassfeature11" : {
			name : "Healing Technique",
			source : [["UA:SP1", 3]],
			minlevel : 11,
			description : "\n   With hands of healing I can also end: 1 disease, blinded, deafened, paralyzed, or poisoned",
			"hand of mercy" : {
				name : "Hand of Mercy",
				extraname : "Way of Mercy 17",
				source : [["UA:SP1", 3]],
				description : desc([
					"As an action, I can use 4 ki to have a touched creature make a Con save (can fail willingly)",
					"If failed, it becomes paralyzed in a state of suspended animation for my monk level in days",
					"It also has immunity to all damage, and curses, diseases, poisons affecting it are suspended",
					"The creature appears dead to all inspection and to spells used to determine its status",
					"I can end the effect at will (no action required); I can have only one affected at a time"
				]),
				action : [["action", ""]],
				additional : levels.map(function (n) {
					return n < 17 ? "" : "4 ki points; " + n + " days";
				})
			},
			autoSelectExtrachoices : [{
				extrachoice : "hand of mercy",
				minlevel : 17
			}]
		}
	}
});
AddSubClass("paladin", "oath of the watchers-ua", {
	regExpSearch : /^(?=.*watchers)((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper)))).*$/i,
	subname : "Oath of the Watchers",
	source : [["UA:SP1", 3]],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Watcher's Will",
			source : [["UA:SP1", 4]],
			minlevel : 3,
			description : "\n   As an action, Cha mod of creatures I see in 30 ft adv. on Int/Wis/Cha saves for 1 min",
			action : [["action", ""]],
			spellcastingExtra : ["alarm", "chromatic orb", "augury", "moonbeam", "counterspell", "nondetection", "aura of purity", "banishment", "hold monster", "hallow"]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Abjure the Extraplanar",
			source : [["UA:SP1", 4]],
			minlevel : 3,
			description : desc([
				"As an action, elementals, fey, fiends, and aberrations within 30 ft must make a Wis save",
				"Succeeds if it can't hear me; On fail, turned for 1 minute or until it takes any damage",
				"Turned: move away, never within 30 ft of me, no reactions or actions other than Dash",
				"Turned: may Dodge instead of Dash when nowhere to move and unable to escape bonds"
			]),
			action : [["action", ""]]
		},
		"subclassfeature7" : {
			name : "Aura of the Sentinel",
			source : [["UA:SP1", 4]],
			minlevel : 7,
			description : "\n   If I'm not incapacitated, chosen creatures in range and I add my Cha mod to Initiative",
			additional : levels.map(function (n) { return n < 7 ? "" : (n < 18 ? 10 : 30) + "-foot aura"; }),
			addMod : [{ type : "skill", field : "Init", mod : "max(Cha|1)", text : "I can add my Charisma modifier (min +1) to initiative rolls." }]
		},
		"subclassfeature15" : {
			name : "Vigilant Rebuke",
			source : [["UA:SP1", 4]],
			minlevel : 15,
			description : desc([
				"As a reaction when I or another I can see saves against a spell, I can damage the caster",
				"Has to succeed save within 30 ft of me vs. unwanted spell; 2d8 + Cha mod force damage"
			]),
			action : [["reaction", ""]]
		},
		"subclassfeature20" : {
			name : "Mortal Bulwark",
			source : [["UA:SP1", 4]],
			minlevel : 20,
			description : desc([
				"As a bonus action, I can gain the following benefits for 1 minute:",
				" \u2022 Truesight out to 120 ft and adv. on attacks vs. elementals, fey, fiends, and aberrations",
				" \u2022 I can force creatures I hit and damage with an attack to make a Charisma save",
				"   If failed, the target is banished to its native plane of existence if it's not currently there",
				"   If successful, the creature can't be banished by this feature for 24 hours"
			]),
			recovery : "long rest",
			usages : 1,
			action : [["bonus action", ""]]
		}
	}
});
AddSubClass("warlock", "the noble genie-ua", {
	regExpSearch : /^(?=.*warlock)(?=.*noble)(?=.*\b(genie|djinni|dao|efreeti)\b).*$/i,
	subname : "the Noble Genie",
	source : [["UA:SP1", 4]],
	spellcastingExtra : ["fog cloud", "sleep", "enlarge/reduce", "phantasmal force", "create food and water", "protection from energy", "polymorph", "phantasmal killer", "bigby's hand", "creation"],
	features : {
		"subclassfeature1" : {
			name : "Collector's Vessel",
			source : [["UA:SP1", 5]],
			minlevel : 1,
			description : desc([
				"My patron gives me a magical vessel, a Tiny object which I can use as a spellcasting focus",
				"If I lose it, I can perform a 1-hour ceremony during a rest to receive a replacement",
				"As an action while holding it, I can create a tether to a willing target I can see in 100 ft",
				"This lasts for 1 hour, until I do this again, or the tethered target is reduced to 0 HP",
				"It also ends when the tethered target ends its turn further than 100 ft from me",
				"While the tether lasts, I add my Cha mod (min +1) to my Wis (Perception) checks",
				"Also, I can have spells I cast originate from the tethered creature's space"
			]),
			action : [["action", ""]],
			usages : "Charisma modifier per ",
			usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
			recovery : "long rest"
		},
		"subclassfeature6" : {
			name : "Elemental Resistance",
			source : [["UA:SP1", 5]],
			minlevel : 6,
			description : desc([
				"When I finish a long rest, I can gain acid, cold, fire, or lightning resistance (my choice)",
				"This lasts until I finish my next long rest; A creature tethered to my vessel also gains this"
			])
		},
		"subclassfeature10" : {
			name : "Protective Wish",
			source : [["UA:SP1", 5]],
			minlevel : 10,
			description : desc([
				"As a reaction when I or my tethered creature is hit by an attack, we can swap places",
				"As we both teleport to each others location, the one hit by the attack switches as well"
			]),
			action : [["reaction", ""]]
		},
		"subclassfeature10.1" : {
			name : "Genie's Entertainment",
			source : [["UA:SP1", 6]],
			minlevel : 10,
			description : desc([
				"As an action, I can have a creature I can see within 90 ft make a Charisma save",
				"If failed, it is drawn into my vessel and teleported to my patron's court for 1 minute",
				"In there it is stunned but unharmed; At the end of each of its turns it can save to return"
			]),
			recovery : "long rest",
			usages : 1
		},
		"subclassfeature14" : {
			name : "Collector's Call",
			source : [["UA:SP1", 6]],
			minlevel : 14,
			description : desc([
				"As an action, I can implore my patron if I make a Persuasion check vs. my spell save DC",
				"If I fail, the use is wasted; If I succeed, I can choose one of the following effects:",
				" \u2022 A creature I can see in 60 ft heals 8d6 HP and 1 disease or condition affecting it ends",
				"   This condition can be blinded, charmed, deafened, frightened, paralyzed, or poisoned",
				" \u2022 A creature I can see in 60 ft has disadv. on attacks \u0026 saves until my next turn starts",
				" \u2022 I can cast Legend Lore without using material components",
				"I can regain a use of this by sacrificing 500 gp of nonmagical treasure to my patron"
			]),
			action : [["action", ""]],
			recovery : "long rest",
			usages : 1,
			spellcastingBonus : {
				name : "Collector's Call",
				spells : ["legend lore"],
				selection : ["legend lore"],
				firstCol : 'Sp'
			},
			spellChanges : {
				"legend lore" : {
					components : "V,S",
					compMaterial : "",
					description : "Learn summary of lore of named or described person, place, or object",
					changes : "When I use my Collector's Call feature to cast Legend Lore, it doesn't require any material components."
				}
			}
		}
	}
});
