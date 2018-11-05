var iFileName = "ua_20161212_Monk-Monastic-Traditions.js";
RequiredSheetVersion(13);
// This file adds the content from the Unearthed Arcana: Monk Monastic Traditions article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:MMT"] = {
	name : "Unearthed Arcana: Monk Monastic Traditions",
	abbreviation : "UA:MMT",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2016/dnd/downloads/M_2016_UAMonk1_12_12WKWT.pdf",
	date : "2016/12/12"
};

// Adds 2 subclasses for the Monk
AddSubClass("monk", "way of the kensei", {
	regExpSearch : /kensei/i,
	subname : "Way of the Kensei",
	source : ["UA:MMT", 1],
	features : {
		"subclassfeature3" : {
			name : "Path of the Kensei",
			source : ["UA:MMT", 1],
			minlevel : 3,
			description : " [3 martial weapons proficiencies]" + "\n   " + "Martial weapons I am proficient with count as kensei weapons for me" + "\n   " + "With these, I can use Dex instead of Str and use the Martial Arts damage die" + "\n   " + "As a bonus action, my kensei weapon deal +1d4 bludg. damage for an Attack action",
			action: ["bonus action", " (after hit)"],
			extraname : "Way of the Kensei 3",
			"kensei defense" : {
				name : "Kensei Defense",
				source : ["UA:MMT", 1],
				description : "\n   " + "If I make an unarmed strike with an Attack action, I can use my kensei weapon to defend" + "\n   " + "Until the start of my next turn, if I'm not incapacitated, I gain +2 AC while holding it"
			},
			eval : "ClassFeatureOptions(['monk', 'subclassfeature3', 'kensei defense', 'extra']);",
			calcChanges : {
				atkAdd : ["var monkDie = function(n) {return n < 5 ? 4 : n < 11 ? 6 : n < 17 ? 8 : 10;}; if (classes.known.monk && classes.known.monk.level > 2 && fields.Proficiency && theWea && !isSpell && !(/shortsword/i).test(theWea.name) && (/martial/i).test(theWea.type)) {var aMonkDie = aMonkDie ? aMonkDie : monkDie(classes.known.monk.level); try {var curDie = eval(fields.Damage_Die.replace('d', '*'));} catch (e) {var curDie = 'x';}; if (isNaN(curDie) || curDie < aMonkDie) {fields.Damage_Die = '1d' + aMonkDie; }; fields.Mod = StrDex; fields.Description += (fields.Description ? '; ' : '') + 'As bonus action with Attack action, +1d4 bludg. damage'; }; ", "I can use either Strength or Dexterity and my Martial Arts damage die in place of the normal damage die for any martial weapons I am proficient with (Kensei Weapons).\n - If I score a hit with one of these kensei weapons as part of an Attack action, I can take a bonus action to have that hit, and any other hit after that as part of the same action, do +1d4 bludgeoning damage."]
			}
		},
		"ki-empowered strikes" : {
			name : "One with the Blade",
			source : ["UA:MMT", 1],
			minlevel : 6,
			description : "\n   " + "My unarmed strikes and kensei weapon attacks count as magical",
			calcChanges : {
				atkAdd : ["if (((/unarmed strike/i).test(WeaponName) || (theWea && !isSpell && (/martial/i).test(theWea.type))) && fields.Description.indexOf('Counts as magical') === -1 && !thisWeapon[1]) {fields.Description += (fields.Description ? '; ' : '') + 'Counts as magical';}; ", "My unarmed strikes and Kensei Weapons count as magical for overcoming resistances and immunities."]
			}
		},
		"subclassfeature6" : {
			name : "Precise Strike",
			source : ["UA:MMT", 1],
			minlevel : 6,
			description : "As a bonus action, I can focus my attention on one creature I can see within 30 ft" + "\n   " + "This turn, I double my proficiency bonus on my next weapon attack against that mark",
			usages : 1,
			recovery : "short rest",
			action : ["bonus action", ""],
			calcChanges : {
				atkCalc : ["if (!isSpell && !isDC && (/precise.{0,3}strike/i).test(WeaponText)) {output.prof *= 2; }; ", "If I include the words 'Precise Strike' in a weapon's name, or description it gets twice my proficiency bonus added to its To Hit instead of only once."]
			}
		},
		"subclassfeature17" : {
			name : "Unerring Accuracy",
			source : ["UA:MMT", 1],
			minlevel : 17,
			description : "\n   " + "On each of my turns, I can reroll one weapon attack roll I make that misses",
			extraname : "Way of the Kensei 11",
			"sharpen the blade" : {
				name : "Sharpen the Blade",
				source : ["UA:MMT", 1],
				description : " [1 to 3 ki points]" + "\n   " + "As a bonus action, I can grant my weapon a bonus to attack and damage rolls" + "\n   " + "This bonus is equal to the number of ki points I spend; It lasts for 1 minute",
				action : ["bonus action", ""]
			},
			changeeval : "if (lvlH >= 11 && lvlL < 11) { ClassFeatureOptions(['monk', 'subclassfeature17', 'sharpen the blade', 'extra'], lvlA[1] < 11 ? 'remove' : false); }; "
		}
	}
});
AddSubClass("monk", "way of tranquility", {
	regExpSearch : /^(?=.*tranquility|tranquil|calm|diplomatic|diplomat)((?=.*(monk|monastic))|((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior))).*$/i,
	subname : "Way of Tranquility",
	source : ["UA:MMT", 2],
	features : {
		"subclassfeature3" : {
			name : "Path of Tranquility",
			source : ["UA:MMT", 2],
			minlevel : 3,
			description : "\n   " + "I cast Sanctuary on me, no material comp., lasts 8 hours, hostiles must save every hour",
			usages : 1,
			recovery : "1 min",
			action : ["bonus action", ""],
			spellcastingBonus : {
				name : "Way of Tranquility",
				spells : ["sanctuary"],
				selection : ["sanctuary"]
			}
		},
		"subclassfeature3.1" : {
			name : "Healing Hands",
			source : ["UA:MMT", 2],
			minlevel : 3,
			description : "\n   " + "As an action, I use points to heal living creature; or 5 points to cure one poison/disease" + "\n   " + "With Flurry of Blows, I can replace one unarmed strike with a use of this feature",
			usages : [0, 0, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200],
			recovery : "long rest",
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Emissary of Peace",
			source : ["UA:MMT", 2],
			minlevel : 6,
			description : " [Performance or Persuasion prof]" + "\n   " + "I get adv. on Cha checks to calm or counsel peace; not with Deception or Intimidation",
			skillstxt : "Choose one from: Performance or Persuasion",
			extraname : "Way of Tranquility 11",
			"douse the flames of war" : {
				name : "Douse the Flames of War",
				source : ["UA:MMT", 1],
				description : "\n   " + "As an action, a creature I touch must make a Wisdom save or have no violent impulses" + "\n   " + "If the target is missing any HP it succeeds on the save; The effect lasts for 1 minute" + "\n   " + "During this time, it can't attack or cast spells that deal damage or force a saving throw" + "\n   " + "This effect ends if the target is attacked, takes damage, or is forced to make a saving throw" + "\n   " + "It also ends if the target witnesses any of those things happening to its allies",
				action : ["action", ""]
			},
			changeeval : "if (lvlH >= 11 && lvlL < 11) { ClassFeatureOptions(['monk', 'subclassfeature17', 'douse the flames of war', 'extra'], lvlA[1] < 11 ? 'remove' : false); }; "
		},
		"subclassfeature17" : {
			name : "Anger of a Gentle Soul",
			source : ["UA:MMT", 2],
			minlevel : 17,
			description : "\n   " + "As a reaction if another I see goes to 0 HP, I get bonus damage until my next turn ends",
			usages : 1,
			recovery : "short rest",
			additional : ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "+17", "+18", "+19", "+20"],
			action : ["reaction", ""]
		}
	}
});
