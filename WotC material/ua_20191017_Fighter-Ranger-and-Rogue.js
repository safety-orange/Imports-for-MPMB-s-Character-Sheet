var iFileName = "ua_20191017_Fighter-Ranger-and-Rogue.js";
RequiredSheetVersion("13.0.7");
// This file adds the content from the Unearthed Arcana: Fighter, Ranger, and Rogue article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:FRnR"] = {
	name : "Unearthed Arcana: Fighter, Ranger, and Rogue",
	abbreviation : "UA:FRnR",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2019/dnd/downloads/UA-RuneSwarmRevived.pdf",
	date : "2019/10/17"
};

// Add a subclass for the Fighter
AddSubClass("fighter", "rune knight-ua", {
	regExpSearch : /^(?=.*rune)(?=.*knight).*$/i,
	subname : "Rune Knight",
	source : ["UA:FRnR", 1],
	fullname : "Rune Knight",
	abilitySave : 4,
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiencies",
			source : ["UA:FRnR", 1],
			minlevel : 3,
			description : "\n   I gain proficiency with smith's tools and I learn to speak, read, and write Giant",
			toolProfs : ["Smith's tools"],
			languageProfs : ["Giant"]
		},
		"subclassfeature3.1" : {
			name : "Rune Magic",
			source : ["UA:FRnR", 1],
			minlevel : 3,
			description : desc([
				"I learn how to use runes to enhance my weapons, armor, and shields",
				'Use the "Choose Feature" button above to select a rune and add it to the third page',
				"When I finish a long rest, I can inscribe each rune I know upon a different item I touch",
				"Each item can hold only one rune and remains there until I finish a long rest",
				"Runes inscribed on a carried object grant both a passive and a limited-use active effect",
				"Whenever I gain a fighter level, I can swap a rune I know for another",
				"The DC for a rune's abilities is 8 + my Proficiency bonus + my Intelligence modifier"
			]),
			additional : levels.map(function (n){
				return n < 3 ? "" : (n < 7 ? 2 : n < 10 ? 3 : n < 15 ? 4 : 5) + " runes known"
			}),
			extraTimes : levels.map(function (n) {
				return n < 3 ? 0 : n < 7 ? 2 : n < 10 ? 3 : n < 15 ? 4 : 5;
			}),
			extraname : "Rune",
			extrachoices : ["Haug (Hill Rune)", "Ild (Fire Rune)", "Ise (Frost Rune)", "Skye (Cloud Rune)", "Stein (Stone Rune)", "Uvar (Storm Rune)"],
			"haug (hill rune)" : {
				name : "Haug",
				source : ["UA:FRnR", 1],
				description : desc([
					"While I wear an object inscribed with this rune, I gain a resilience reminiscent of hill giants",
					"I always gain advantage on saves against being poisoned and resistance to poison damage",
					"As a bonus action, I can invoke it to gain resistance to bludg/slash/pierc damage for 1 min"
				]),
				action : [["bonus action", " (invoke)"]],
				limfeaname : "Haug Rune",
				additional : "invoke",
				usages : ["", "", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
				recovery : "short rest",
				dmgres : ["Poison"],
				savetxt : { adv_vs : ["poison"] }
			},
			"ild (fire rune)" : {
				name : "Ild",
				source : ["UA:FRnR", 1],
				description : desc([
					"While I wear an object inscribed with this, I gain craftsmanship reminiscent of fire giants",
					"I always double my proficiency bonus when making an ability check with a tool",
					"When I hit a creature with a weapon attack, I can invoke it to summon fiery shackles",
					"It must make a Str save or be restrained for 1 min; Repeat save at end of each of its turns",
					"While restrained, the creature takes 2d6 fire damage at the start of each of its turns"
				]),
				limfeaname : "Ild Rune",
				additional : "invoke",
				usages : ["", "", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
				recovery : "short rest",
				skillstxt : "expertise with all tools I am proficient with",
				eval : function () { Checkbox('Too Exp', true); },
				removeeval : function () { Checkbox('Too Exp', false); }
			},
			"ise (frost rune)" : {
				name : "Ise",
				source : ["UA:FRnR", 2],
				description : desc([
					"While I wear an object inscribed with this, I gain a stoic calm reminiscent of frost giants",
					"I always gain advantage on Wisdom (Animal Handling) and Charisma (Intimidation) checks",
					"As a bonus action, I can invoke this rune to gain +2 Strength (max 30) for 10 minutes"
				]),
				action : [["bonus action", " (invoke)"]],
				limfeaname : "Ise Rune",
				additional : "invoke",
				usages : ["", "", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
				recovery : "short rest",
				advantages : [ ["Animal Handling", true], ["Intimidation", true] ]
			},
			"skye (cloud rune)" : {
				name : "Skye",
				source : ["UA:FRnR", 2],
				description : desc([
					"While I wear an object inscribed with this, I gain a deceptiveness reminiscent of cloud giants",
					"I always gain advantage on Dexterity (Sleight of Hand) and Charisma (Deception) checks",
					"As a reaction when I or a target I see get hit by an attack within 30 ft, I can invoke this",
					"This causes the attack to target another within 30 ft with the same roll (ignore range)"
				]),
				action : [["reaction", " (invoke)"]],
				limfeaname : "Skye Rune",
				additional : "invoke",
				usages : ["", "", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
				recovery : "short rest",
				advantages : [ ["Sleight of Hand", true], ["Deception", true] ]
			},
			"stein (stone rune)" : {
				name : "Stein",
				source : ["UA:FRnR", 2],
				description : desc([
					"While I wear an object inscribed with this, I gain insightfulness reminiscent of stone giants",
					"I always gain adv. on Wisdom (Insight) checks and I gain darkvision 60 ft (or +30 ft)",
					"As a reaction when a creature I can see ends it turn within 30 ft, I can invoke this rune",
					"This causes the creature to make a Wisdom save or be charmed by me for 1 minute",
					"While charmed, it descends into a dreamy stupor, becoming incapacitated and has speed 0",
					"This ends early if it takes damage or someone uses an action to shake it out of this state"
				]),
				action : [["reaction", " (invoke)"]],
				limfeaname : "Stein Rune",
				additional : "invoke",
				usages : ["", "", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
				recovery : "short rest",
				vision : [["Darkvision", "fixed 60"], ["Darkvision", "+30"]],
				advantages : [ ["Insight", true] ]
			},
			"uvar (storm rune)" : {
				name : "Uvar",
				source : ["UA:FRnR", 2],
				description : desc([
					"While I wear an object inscribed with this rune, I can glimpse the future like storm giants",
					"I always gain adv. on Int (Arcana) checks and I can't be surprised while not incapacitated",
					"As a bonus action, I can invoke it to enter a prophetic state for 1 min or till incapacitated",
					"While in this state, I can use a reaction to cause a roll to gain advantage or disadvantage",
					"I can do this for attacks, saves, and checks of myself or others I can see within 60 ft of me"
				]),
				action : [["bonus action", " (invoke)"]],
				limfeaname : "Uvar Rune",
				additional : "invoke",
				usages : ["", "", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
				recovery : "short rest",
				advantages : [ ["Arcana", true] ],
				savetxt : { immune : ["surprised"] },
			}
		},
		"subclassfeature3.2" : {
			name : "Giant Might",
			source : ["UA:FRnR", 2],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can imbue myself with giant magic for 1 minute and gain benefits:",
				" \u2022 Space permitted, I grow to Large size along with everything I'm wearing",
				" \u2022 Advantage on Strength check and saves; My weapon attacks deal extra damage"
			]),
			usages : 2,
			recovery : "long rest",
			additional : levels.map(function (n){
				return n < 3 ? "" : "+1d" + (n < 10 ? 6 : 8) + " weapon damage"
			}),
			action : [["bonus action", ""]],
			savetxt : { text : ["Adv. on Str saves in giant might"] }
		},
		"subclassfeature7" : {
			name : "Defensive Runes",
			source : ["UA:FRnR", 2],
			minlevel : 7,
			description : desc([
				"As a reaction when I see a creature get hit by an attack within 60 ft, I can grant it AC",
				"The creature adds 1 + my Int mod (min 2) to its AC for the attack; I learn another rune"
			]),
			action : [["reaction", ""]]
		},
		"subclassfeature10" : {
			name : "Great Stature",
			source : ["UA:FRnR", 2],
			minlevel : 10,
			description : desc([
				"My runes permanently make me grow; I add 3d4 inches to my length",
				"In addition, my Giant Might adds more weapon damage and I learn another rune"
			])
		},
		"subclassfeature15" : {
			name : "Rune Magic Mastery",
			source : ["UA:FRnR", 3],
			minlevel : 15,
			description : " \n  I can use each of my runes twice instead of once per short rest and I learn another rune"
		},
		"subclassfeature18" : {
			name : "Blessing of the All Father",
			source : ["UA:FRnR", 3],
			minlevel : 18,
			description : "\n   When I use Giant Might, I can have it also affect a willing ally that I can see within 60 ft"
		}
	}
});

// Add a subclass for the Ranger (and also to the Revised Ranger)
var UAFRnR_rangerSubclassSwarmkeeperUA = AddSubClass("ranger", "swarmkeeper-ua", {
	regExpSearch : /swarmkeeper/i,
	subname : "Swarmkeeper",
	source : ["UA:FRnR", 3],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	fullname : "Swarmkeeper",
	features : {
		"subclassfeature3" : {
			name : "Swarmkeeper Magic",
			source : ["UA:FRnR", 3],
			minlevel : 3,
			description : desc([
				"I learn Mage Hand; When I cast it, the hand takes the form of swarming nature spirits",
				"I get bonus spells known, which do not count against the number of spells I can know"
			]),
			spellcastingBonus : {
				name : "Swarmkeeper Magic",
				spells : ["mage hand"],
				selection : ["mage hand"],
				firstCol : "atwill"
			},
			spellcastingExtra : ["faerie fire", "web", "gaseous form", "giant insect", "insect plague"],
			spellcastingExtraApplyNonconform : true
		},
		"subclassfeature3.1" : {
			name : "Gathered Swarm",
			source : ["UA:FRnR", 3],
			minlevel : 3,
			description : desc([
				"I constantly have a swarm of fey spirits crawling in my space, they look like Tiny beasts",
				"As a bonus action, I can agitate that swarm for 1 minute, empowering my attacks",
				"Once per turn when I hit with a weapon attack, I can have it deal extra force damage",
				"In addition, the creature hit is moved 5 ft towards or away from me (my choice)"
			]),
			action : [["bonus action", ""]],
			additional : levels.map(function (n) {
				return n < 3 ? "" : "+" + (n < 11 ? 1 : 2) + "d6 force dmg";
			}),
			usages : "Wis mod per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
		},
		"subclassfeature7" : {
			name : "Writhing Tide",
			source : ["UA:FRnR", 3],
			minlevel : 7,
			description : desc([
				"Whenever I activate Gathered Swarm, I gain one additional benefit of my choice:",
				" \u2022 I gain +10 ft walking speed and I can take the Disengage action as a bonus action",
				" \u2022 I gain climb speed equal to walk speed & need no check for difficult surfaces or ceilings",
				" \u2022 I gain a 10 ft fly speed and I can hover"
			]),
			autoSelectExtrachoices : [{
				extrachoice : "scuttling eyes",
				minlevel : 11
			}, {
				extrachoice : "storm of minions",
				minlevel : 15
			}],
			"scuttling eyes" : {
				name : "Scuttling Eyes",
				extraname : "Swarmkeeper 11",
				source : ["UA:FRnR", 4],
				description : desc([
					"As an action, I can from a spirit of my swarm into a Tiny beast of my choice for 1 hour",
					"It has AC 18, my senses, and 40 ft speed it can use to walk, climb, fly, or swim",
					"It telepathically relays what it sees and hears to me and I can speak through it",
					"During my turn, I can telepathically command it and it can hide using my Stealth",
					"If it is damaged, I must make a Wis save (DC 10 or half damage if higher) or it vanishes",
					"As an action, I can dismiss it early and I can teleport to an empty space within 5 ft of it",
					"I can also invoke this ability by spending a spell slot of 3rd level or higher"
				]),
				action : [["action", " (summon/dismiss)"]],
				additional : "or level 3 spell slot",
				usages : 1,
				recovery : "long rest",
			},
			"storm of minions" : {
				name : "Storm of Minions",
				extraname : "Swarmkeeper 15",
				source : ["UA:FRnR", 4],
				description : desc([
					"As an action, I can create a 10-ft radius swarm-filled sphere on a point within 120 ft",
					"I can choose any number of creatures that I can see to be unaffected by it",
					"It lasts minute, is difficult terrain for others, and I can move it 30 ft as a bonus action",
					"Others that start their turn in it take 2d8 necrotic damage and must make a Con save",
					"On a success, they take half damage, but if failed, are blinded until their next turn starts",
					"At the start of my turn, if a Small or larger creature was damaged by it, I heal 1d8 HP",
					"I can also invoke this ability by spending a spell slot of 4th level or higher"
				]),
				action : [["action", ""]],
				additional : "or level 4 spell slot",
				usages : 1,
				recovery : "long rest"
			}
		}
	}
});
if (ClassList.rangerua) { ClassList.rangerua.subclasses[1].push(UAFRnR_rangerSubclassSwarmkeeperUA); };

// Add a subclass for the Rogue
AddSubClass("rogue", "the revived-ua", {
	regExpSearch : /^(?=.*(rogue|miscreant))(?=.*revived).*$/i,
	subname : "the Revived",
	source : ["UA:FRnR", 4],
	features : {
		"subclassfeature3" : {
			name : "Tokens of Past Lives",
			source : ["UA:FRnR", 4],
			minlevel : 3,
			description : "\n   I gain a chosen skill or tool proficiency and can change it whenever I finish a long rest",
			skillstxt : "Choose one skill or tool; I can change the choice whenever I finish a long rest"
		},
		"subclassfeature3.1" : {
			name : "Revived Nature",
			source : ["UA:FRnR", 4],
			minlevel : 3,
			description : desc([
				"I have resistance to poison damage and adv. on saves against disease and being poisoned",
				"I don't need to eat, drink, breathe, or sleep; I must spend 4 hours inactive for a long rest",
				"I'm motionless during this inactive state, remain semiconscious, and can hear as normal"
			]),
			dmgres : ["Poison"],
			savetxt : { adv_vs : ["disease", "poison"] }
		},
		"subclassfeature3.2" : {
			name : "Bolts from the Grave",
			source : ["UA:FRnR", 5],
			minlevel : 3,
			description : desc([
				"Immediately after I use my cunning action, I can unleash bolts of necrotic energy",
				"This is a ranged spell attack with 30 ft range, which I'm proficient with, using Dexterity",
				"If it hits, it deals my sneak attack damage, provided I didn't use sneak attack this turn"
			]),
			weaponsAdd : ["Bolts from the Grave"],
			weaponOptions : [{
				regExpSearch : /^(?=.*bolts?)(?=.*grave).*$/i,
				name : "Bolts from the Grave",
				source : ["UA:FRnR", 5],
				ability : 2,
				type : "Spell",
				damage : [1, 6, "necrotic"],
				range : "30 ft",
				description : "Immediately after using cunning action; Only if I not yet used sneak attack this turn",
				abilitytodamage : true,
				isBoltsFromTheGrave : true
			}],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.rogue && classes.known.rogue.level && v.theWea.isBoltsFromTheGrave) {
							fields.Damage_Die = Math.ceil(classes.known.rogue.level / 2) + 'd6';
						};
					}
				]
			}
		},
		"subclassfeature9" : {
			name : "Connect with the Dead",
			source : ["UA:FRnR", 5],
			minlevel : 9,
			description : desc([
				"I can cast Speak with Dead without a spell slot or material components using Intelligence",
				"Doing this gives me a random proficiency (roll 1d3) that lasts until I finish my next rest:",
				"[1] language of my choice; [2] skill or tool of my choice; [3] saving throw of my choice"
			]),
			spellcastingBonus : {
				name : "Connect with the Dead",
				spells : ["speak with dead"],
				selection : ["speak with dead"],
				firstCol : "oncesr",
				spellcastingAbility : 4
			},
			spellChanges : {
				"speak with dead" : {
					components : "V,S",
					compMaterial : "",
					changes : "Using Connect with the Dead, I can cast Speak with Dead once per short rest without using a spell slot or material component."
				}
			},
			usages : 1,
			recovery : "short rest"
		},
		"subclassfeature13" : {
			name : "Audience with Death",
			source : ["UA:FRnR", 5],
			minlevel : 13,
			description : desc([
				"I have adv. on death saves; Whenever I make one, I can ask a question to a death entity",
				'It answers truthfully with "yes", "no", or "unknown", using the knowledge of all that died',
				"When at 0 HP and healed or stabilized, I can change any of my traits/ideals/bonds/flaws"
			]),
			savetxt : { text : ["Adv. on death saves"] },
			autoSelectExtrachoices : [{
				extrachoice : "ethereal jaunt",
				minlevel : 17
			}],
			"ethereal jaunt" : {
				name : "Ethereal Jaunt",
				source : ["UA:FRnR", 5],
				extraname : "the Revived 17",
				description : desc([
					"I can now use my cunning action to teleport to an unoccupied space within 30 ft",
					"I don't need to see where I'm going, but it fails if I'd go through a magical force effect",
					"I'm shunted if I appear in an occupied space and take force damage of 2\xD7 the ft moved"
				])
			}
		}
	}
});
