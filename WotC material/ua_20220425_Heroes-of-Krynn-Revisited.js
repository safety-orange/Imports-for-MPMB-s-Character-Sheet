// This file adds the content from the Unearthed Arcana 2022: Heroes of Krynn Revisited article to MPMB's Character Record Sheet
// Contains contributions by Thravieus Windhelm / PoetOfGod (GitHub) / @PoetOfGod#6077 (Discord)

var iFileName = "ua_20220425_Heroes-of-Krynn-Revisited.js";
RequiredSheetVersion("14.0.1-beta");

SourceList["UA:HoKR"] = {
	name : "Unearthed Arcana: Heroes of Krynn Revisited",
	abbreviation : "UA:HoKR",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2022/dnd/downloads/UA2022-HeroesofKrynnRevisited.pdf",
	date : "2022/04/25"
};

RaceList["kender-ua2"] = {
	regExpSearch : /kender/i,
	name : "Kender",
	source : [["UA:HoKR", 1]],
	plural : "Kender",
	size : 4,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	scoresGeneric : true,
	savetxt : { immune : ["frightened"]},
	skillstxt : "Choose one from Insight, Investigation, Sleight of Hand, Stealth, or Survival",
	abilitySave : [4, 5, 6],
	features : {
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
	"\n \u2022 Fearless: I am immune to the frightened condition."+
	"\n \u2022 Taunt: As a bonus action, I can taunt a creature within 60 ft of me that can hear and understand me. They must make a Wisdom saving throw or have disadvantage on attack rolls not made against me until the start of my next turn. I can do this a number of times per long rest equal to my proficiency bonus. The DC equals 8 + proficiency bonus + Intelligence, Wisdom, or Charisma modifier (one-time choice)."
};

// [dupl_start] Backgrounds identical to Dragonlance: Shadow of the Dragon Queen
if (!SourceList["D:SotDQ"]) {
	BackgroundList["knight of solamnia"] = {
		regExpSearch : /^(?=.*(knight|champion|warrior))(?=.*solamnia).*$/i,
		name : "Knight of Solamnia",
		source : [["UA:HoKR", 2]],
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
		trait : [
			"I pledge my sword to the greater good. If I must perish in pursuit of that good, so be it.",
			"My comrades-in-arms are my family. I'll do whatever it takes to keep them safe.",
			"The protection of innocent people comes first. All other concerns come second.",
			"I joined the knights for the free meals, but their lessons grew on me over time.",
			"I wish my deeds to become the stuff of legends\xD7just like those of the knighthood's heroic founders.",
			"A dishonorable act drove me to become a knight. I have acted with honor ever since."
		]
	};
	BackgroundFeatureList["squire of solamnia"] = {
		description : "I gain the Squire of Solamnia feat. In addition, the Knights of Solamnia provide me free, modest lodging and food at any of their fortresses or encampments.",
		source : [["UA:HoKR", 2], ["UA:HoK", 3]],
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
		trait : [
			"I wish to use my knowledge of magic to better people's lives.",
			"My study of magic might reveal all manner of secrets.",
			"Magic is a means to power, and I will use it to pursue my ambitions.",
			"I learned magic so I'd be able to protect those I care about.",
			"I use my magic to maintain the balance between all things.",
			"Whether in the past, present, or future, I will be the greatest mage ever known."
		],
		extra : [
			"Choose a Trinket",
			"Silver disk, recording my heroics",
			"Piece of a fallen knight's armor",
			"Pendant with a crown/rose/sword",
			"Pommel of my mentor's sword",
			"Favor from someone I defended",
			"Locket with silver dragon sketch"
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
		source : [["D:SotDQ", 0], ["UA:HoKR", 2], ["UA:HoK", 3]],
		eval : function() { AddFeat("Initiate of High Sorcery"); },
		removeeval : function() { RemoveFeat("Initiate of High Sorcery"); }
	};

	// Feats tree for Initiate of High Sorcery
	FeatsList["initiate of high sorcery"] = {
		name : "Initiate of High Sorcery",
		source : [["D:SotDQ", 32], ["UA:HoKR", 4]],
		description : "I learn a wizard cantrip and two 1st-levels spell from a list depending on my chosen moon. I can cast each spell once per long rest at its lowest levels without expending a spell slot, or by using a spell slot as normal. I can choose Int, Wis, or Cha as my spellcasting ability for this.",
		descriptionFull : "You've received training from magic-users affiliated with the Mages of High Sorcery."+
		"\n   Choose one of three moons of Krynn to influence your magic: the black moon, Nuitari; the red moon, Lunitari; or the white moon, Solinari. You learn one cantrip of your choice from the wizard spell list and two 1st-level spells based on the moon you choose, as specified in the Lunar Spells table."+
		"\n   You can cast each of the chosen 1st-level spell without a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast the spell using any spell slots you have."+
		"\n   Your spellcasting ability for this feat's spells is Intelligence, Wisdom, or Charisma (choose when you select this feat)."+
		"\n\n" + toUni("Lunar Spells")+
		"\n" + toUni("Moon\t1st-level Spell")+
		"\nNuitari\tChoose two from dissonant whispers, false life,"+
		"\n\thex, and ray of sickness"+
		"\nLunitari\tChoose two from color spray, disguise self,"+
		"\n\tfeather fall, and longstrider"+
		"\nSolinari\tChoose two from comprehend languages, detect"+
		"\n\tevil and good, protection from evil and good, and"+
		"\n\tshield",
		prerequisite : "Sorcerer or Wizard Class or Mage of High Sorcery Background",
		prereqeval : function (v) {
			return classes.known.wizard || classes.known.sorcerer || CurrentBackground.known.indexOf('mage of high sorcery') !== -1;
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
				firstCol : "oncelr+markedbox",
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
				firstCol : "oncelr+markedbox",
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
				firstCol : "oncelr+markedbox",
				times : 2
			}]
		}
	};
	FeatsList["adept of the black robes"] = {
		name : "Adept of the Black Robes",
		source : [["D:SotDQ", 31], ["UA:HoKR", 4]],
		description : "I learn one 2nd-level Ench or Necro spell, which I can cast once per long rest at its lowest level without a spell slot, or as normal with one. When a creature I can see within 60 ft fails its save vs. my damaging spell, I can expend HD up to the spell's level and add the rolls to the damage of the spell for that one creature.",
		descriptionFull : "You chose the moon Nuitari to influence your magic, and your ambition and loyalty to the Order of the Black Robes has been recognized, granting you these benefits:"+
		"\n   " + toUni("Ambitious Magic") + ". You learn one 2nd-level spell of your choice. The 2nd-level spell must be from the evocation or necromancy school of magic. You can cast this feat's 2nd-level spell without a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast this spell using spell slots you have of the appropriate level. The spell's spellcasting ability is the one chosen when you gain the Initiate of High Sorcery feat."+
		"\n   " + toUni("Life Channel") + ". You can channel your lifeforce into the power of your magic. When a creature you can see within 60 feet fails on a saving throw against a spell that deals damage that you cast, you can expend a number of Hit Dice equal to the level of the spell. Roll the expended Hit Dice and add them together. The damage that the creature takes increases by an amount equal to that total.",
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
			firstCol : "oncelr+markedbox"
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
			firstCol : "oncelr+markedbox"
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
			firstCol : "oncelr+markedbox"
		}],
		spellcastingAbility : 'initiate of high sorcery_-_solinari',
		allowUpCasting : true
	};

	// Feat Divinely Favored
	FeatsList["divinely favored"] = {
		name : "Divinely Favored",
		source : [["D:SotDQ", 32], ["UA:HoKR", 4]],
		description : "I learn a cleric cantrip, a 1st-level spell based on my alignment, and Augury. I can cast the spells each once per long rest at their lowest level without a spell slot, or by using a spell slot as normal. I can choose Int, Wis, or Cha as my spellcasting ability for this. I can use a holy symbol as a spellcasting focus for any spell that uses the chosen ability.",
		descriptionFull : "A god has chosen you to carry a spark of their divine power."+
		"\n   You learn one cantrip of your choice from the cleric spell list and one 1st-level spell based on the alignment of your character, as specified in the table below. You also learn the augury spell."+
		"\n   You can cast the chosen 1st-level spell and the augury spell without a spell slot, and you must finish a long rest before you can cast either of these spells in this way again. You can also cast these spells using spell slots you have of the appropriate level."+
		"\n   Your spellcasting ability for this feat's spells is Intelligence, Wisdom, or Charisma (choose when you select this feat)."+
		"\n\n" + toUni("Alignment\t1st-level Spell")+
		"\n Evil\t\tChoose one 1st level warlock spell"+
		"\n Good\t\tChoose one 1st-level cleric spell"+
		"\n Neutral\t\tChoose one 1st-level druid spell"+
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
				firstCol : "oncelr+markedbox"
			}, {
				name : "Augury",
				spells : ["augury"],
				selection : ["augury"],
				firstCol : "oncelr+markedbox"
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
				firstCol : "oncelr+markedbox"
			}, {
				name : "Augury",
				spells : ["augury"],
				selection : ["augury"],
				firstCol : "oncelr+markedbox"
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
				firstCol : "oncelr+markedbox"
			}, {
				name : "Augury",
				spells : ["augury"],
				selection : ["augury"],
				firstCol : "oncelr+markedbox"
			}]
		}
	};
} // dupl_end

// Feats tree for Squire of Solamnia
var UA_HoKR_KnightlyManeuvers_Notes = function (n) {
	// Get the name, source, and description from the maneuver of the Battle Master subclass, if that subclass is present
	if (ClassSubList["fighter-battle master"] && ClassSubList["fighter-battle master"].features["subclassfeature3.1"] && ClassSubList["fighter-battle master"].features["subclassfeature3.1"][n]) {
		var sourceObj = ClassSubList["fighter-battle master"].features["subclassfeature3.1"][n];
	} else {
		// Subclass or maneuver not found, thus only add the name
		var sourceObj = {
			name : n.capitalize(),
			source : [["P", 74]],
			description : ""
		};
	}
	return {
		name : sourceObj.name,
		source : sourceObj.source,
		note : sourceObj.description,
		page3notes : true,
		additional : "Knightly Maneuver"
	};
};
FeatsList["squire of solamnia-ua2"] = {
	name : "Squire of Solamnia",
	source : [["UA:HoKR", 5]],
	description : "Mounting/dismounting costs a 5-ft move. I learn one Knightly Maneuver: Lunging Attack, Precision Attack, or Pushing Attack. I can change which I know after each long rest. The DC is 8 + Prof B + Str or Dex mod (my choice). I gain Prof Bonus of Superiority Dice (d6) to use with these, regaining them after a long rest.",
	calculate : "event.value = 'Mounting/dismounting costs a 5-ft move. I learn one Knightly Maneuver: Lunging Attack, Precision Attack, or Pushing Attack. DC is ' + (8 + Number(How('Proficiency Bonus')) + Math.max(Number(What('Str Mod')), Number(What('Dex Mod')))) + ' (8 + Prof Bonus + Str/Dex mod). I can change which I know after each long rest. I gain Prof Bonus of Superiority Dice (d6) to use with these, regaining them after a long rest.';",
	descriptionFull : "Your training in the ways of the Knights of Solamnia grants you these benefits:"+
	"\n   " + toUni("Mount Up") + ". Mounting or dismounting costs you only 5 feet of movement."+
	"\n   " + toUni("Squire Maneuvers") + ". You learn the Lunging Attack, Precision Attack, or Pushing Attack maneuver from the Battle Master subclass of the fighter in the Player's Handbook (choose the maneuver when you gain this feat). If the maneuver requires a saving throw, the save's DC equals 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice). Whenever you finish a long rest, you can replace the maneuver you learned from this feat with another one from the list above."+
	"\n   " + toUni("Superiority Dice") + ". You gain a number of superiority dice equal to your proficiency bonus. These dice are d6s, and you can use them only with the maneuver you gain from this feat and with any maneuvers you gain from feats that have this feat as a prerequisite. A superiority die is expended when you use it, and you regain all expended superiority dice when you finish a long rest.",
	prerequisite : "Fighter or Paladin Class or Knight of Solamnia Background",
	prereqeval : function (v) {
		return classes.known.fighter || classes.known.paladin || CurrentBackground.known.indexOf('knight of solamnia') !== -1;
	},
	limfeaname : "Knightly Superiority Dice",
	usages : "Proficiency bonus per ",
	usagescalc : "var total = CurrentFeats.known.indexOf('squire of solamnia-ua2') === -1 ? 0 : Number(How('Proficiency Bonus')); for (var i = 0; i < CurrentFeats.known.length; i++) { var oFeat = FeatsList[CurrentFeats.known[i]]; if (oFeat && oFeat.knightlySuperiority && oFeat.knightlySuperiority.use) { total += oFeat.knightlySuperiority.use; }; }; event.value = total;", // complex because it works for all feats
	recovery : "long rest",
	additional : 'd6',
	knightlySuperiority : {
		die : 6,
		prereq : true
	},
	toNotesPage : ["lunging attack", "precision attack", "pushing attack"].map(UA_HoKR_KnightlyManeuvers_Notes)
};
FeatsList["knight of the crown-ua2"] = {
	name : "Knight of the Crown",
	source : [["UA:HoKR", 5]],
	description : "I learn one extra Knightly Maneuver: Distracting Strike or Goading Attack. I can change which one of these I know after each long rest. I gain two extra Knightly Superiority Dice and the dice become d8s. [+1 Strength or Dexterity]",
	descriptionFull : "You are a Knight of Solamnia aligned with the Order of the Crown, a group that extols the virtues of cooperation, loyalty, and obedience. You excel in group combat and gain these benefits:"+
	"\n   " + toUni("Ability Score Increase") + ". Increase your Strength or Dexterity score by 1, to a maximum of 20."+
	"\n   " + toUni("Crown Maneuvers") + ". You learn the Distracting Strike or the Goading Attack maneuver from the Battle Master subclass of the fighter in the Player's Handbook (choose the maneuver when you gain this feat). If the maneuver requires a saving throw, the save's DC equals 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice). Whenever you finish a long rest, you can replace the maneuver you learned from this feat with the other maneuver offered by it."+
	"\n   " + toUni("Superiority Dice") + ". You gain two superiority dice, which you add to the dice you have from the Squire of Solamnia feat. All the dice are now d8s.",
	prerequisite : "4th level, Squire of Solamnia feat",
	prereqeval : function(v) { return v.characterLevel >= 4 && CurrentFeats.known.indexOf("squire of solamnia-ua2") !== -1; },
	scorestxt : "+1 Strength or Dexterity",
	knightlySuperiority : {
		die : 8,
		use : 2
	},
	toNotesPage : ["distracting strike", "goading attack"].map(UA_HoKR_KnightlyManeuvers_Notes)
};
FeatsList["knight of the sword-ua2"] = {
	name : "Knight of the Sword",
	source : [["UA:HoKR", 5]],
	description : "I learn one extra Knightly Maneuver: Maneuvering Attack or Menacing Attack. I can change which one of these I know after each long rest. I gain two extra Knightly Superiority Dice and the dice become d8s. [+1 Intelligence, Wisdom, or Charisma]",
	descriptionFull : "You are a Knight of Solamnia aligned with the Order of the Sword, a group devoted to heroism and courage. Bravery steels your spirit, granting you these benefits:"+
	"\n   " + toUni("Ability Score Increase") + ". Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20."+
	"\n   " + toUni("Sword Maneuvers") + ". You learn the Maneuvering Attack or the Menacing Attack maneuver from the Battle Master subclass of the fighter in the Player's Handbook (choose the maneuver when you gain this feat). If the maneuver requires a saving throw, the save's DC equals 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice). Whenever you finish a long rest, you can replace the maneuver you learned from this feat with the other maneuver offered by it."+
	"\n   " + toUni("Superiority Dice") + ". You gain two superiority dice, which you add to the dice you have from the Squire of Solamnia feat. All the dice are now d8s.",
	prerequisite : "4th level, Squire of Solamnia feat",
	prereqeval : function(v) { return v.characterLevel >= 4 && CurrentFeats.known.indexOf("squire of solamnia-ua2") !== -1; },
	scorestxt : "+1 Intelligence, Wisdom, or Charisma",
	knightlySuperiority : {
		die : 8,
		use : 2
	},
	toNotesPage : ["maneuvering attack", "menacing attack"].map(UA_HoKR_KnightlyManeuvers_Notes)
};
FeatsList["knight of the rose-ua2"] = {
	name : "Knight of the Rose",
	source : [["UA:HoKR", 5]],
	description : "I learn one extra Knightly Maneuver: Commander's Strike or Rally. I can change which one of these I know after each long rest. I gain two extra Knightly Superiority Dice and the dice become d8s. [+1 Constitution or Charisma]",
	descriptionFull : "You are a Knight of Solamnia aligned with the Order of the Rose, a group known for leadership, justice, and wisdom. Your resolve grants you these benefits:"+
	"\n   " + toUni("Ability Score Increase") + ". Increase your Constitution or Charisma score by 1, to a maximum of 20."+
	"\n   " + toUni("Rose Maneuvers") + ". You learn the Commander's Strike or Rally maneuver from the Battle Master subclass of the fighter in the Player's Handbook (choose the maneuver when you gain this feat). Whenever you finish a long rest, you can replace the maneuver you learned from this feat with the other maneuver offered by it."+
	"\n   " + toUni("Superiority Dice") + ". You gain two superiority dice, which you add to the dice you have from the Squire of Solamnia feat. All the dice are now d8s.",
	prerequisite : "4th level, Squire of Solamnia feat",
	prereqeval : function(v) { return v.characterLevel >= 4 && CurrentFeats.known.indexOf("squire of solamnia-ua2") !== -1; },
	scorestxt : "+1 Constitution or Charisma",
	knightlySuperiority : {
		die : 8,
		use : 2
	},
	action : [
		["bonus action", "Commander's Strike (with Attack action)"],
		["bonus action", "Rally"]
	],
	toNotesPage : ["commander's strike", "rally"].map(UA_HoKR_KnightlyManeuvers_Notes)
};
