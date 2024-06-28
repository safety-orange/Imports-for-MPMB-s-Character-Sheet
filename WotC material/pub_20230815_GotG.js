var iFileName = "pub_20230815_GotG.js";
RequiredSheetVersion("13.1.14");
// This file adds the player-material from Bigby Presents: Glory of the Giants to MPMB's Character Record Sheet

SourceList["GotG"] = {
	name : "Bigby Presents: Glory of the Giants",
	abbreviation : "GotG",
	group : "Primary Sources",
	url : "https://www.dndbeyond.com/marketplace/sourcebooks/bigby-presents-glory-of-the-giants",
	date : "2023/08/15"
};

AddSubClass("barbarian", "giant", {
	regExpSearch : /^((?=.*(marauder|barbarian|viking|(norse|tribes?|clans?)(wo)?m(a|e)n))|((?=.*(warrior|fighter))(?=.*(feral|tribal))))(?=.*giant).*$/i,
	subname : "Path of the Giant",
	source : [["GotG", 11]],
	abilitySave : 1,
	spellcastingAbility : 5,
	features : {
		"subclassfeature3" : {
			name : "Giant Power",
			source : [["GotG", 11]],
			minlevel : 3,
			description : desc("I learn Giant, and the Druidcraft or Thaumaturgy cantrip with Wis as spellcasting ability"),
			languageProfs : ["Giant"],
			spellcastingBonus : [{
				name : "Giant Power",
				spells : ["druidcraft", "thaumaturgy"],
				firstCol : "atwill"
			}]
		},
		"subclassfeature3.1" : {
			name : "Giant's Havoc",
			source : [["GotG", 11]],
			minlevel : 3,
			description : levels.map(function (n) {
				return desc([
					"While raging, I add the bonus damage to ranged thrown weapon attacks that use Str,",
					"I gain +" + (n < 14 ? 5 : 10) + " ft reach, and I can become " + (n < 14 ? 'Large' : 'Huge') + " along with what I'm wearing, if there is room"
				]);
			})
		},
		"subclassfeature6" : {
			name : "Elemental Cleaver",
			source : [["GotG", 11]],
			minlevel : 6,
			description : levels.map(function (n) {
				return desc([
					"When I rage, I can infuse a weapon I'm holding with acid, cold, fire, thunder, or lightning",
					"While raging, its damage type changes to the chosen type and it deals +" + (n < 14 ? 1 : 2) + "d6 damage,",
					"it gains the thrown (20/60 ft) property, and reappears instantly after a thrown attack",
					"As a bonus action, I can change the chosen type; The bonuses only function for me"
				]);
			}),
			action : [["bonus action", " (change type)"]],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if ((v.isMeleeWeapon || v.isRangedWeapon) && classes.known.barbarian && classes.known.barbarian.level && /^(?=.*elemental)(?=.*cleaver).*$/i.test(v.WeaponTextName)) {
							fields.Damage_Type = "Varies";
							var isThrownWeapon = /\bthrown\b/i.test(v.WeaponText);
							var extraDmg = classes.known.barbarian.level < 14 ? '+1d6 damage' : '+2d6 damage';
							var extraProp = v.isRangedWeapon && !isThrownWeapon ? 'Thrown (20/60 ft), returning; ' : isThrownWeapon ? 'Returning; ' : 'Thrown, returning; ';
							var hasRange = /\d+ ?(f.{0,2}t|m)/i.test(fields.Range);
							if (!hasRange) {
								fields.Range += ', 20/60 ft';
							} else if ((!v.isRangedWeapon || isThrownWeapon) && hasRange) {
								var rangeNmbr = fields.Range.match(/\d+([.,]\d+)?/g);
								if (rangeNmbr.length === 1) {
									var longRange = Number(rangeNmbr[0].replace(',', '.'));
									if (longRange < 60) tempRange = fields.Range.replace(longRange,"long_range");
								} else {
									var shortRange = Number(rangeNmbr[0].replace(',', '.'));
									var longRange = Number(rangeNmbr[1].replace(',', '.'));
									tempRange = fields.Range;
									if (shortRange < 20) tempRange = tempRange.replace(shortRange,"short_range");
									if (longRange < 60) tempRange = tempRange.replace(longRange,"long_range");
								}
								fields.Range = tempRange.replace("short_range", 20).replace("long_range", 60);
							}
							fields.Description += (fields.Description ? '; ' : '') + extraProp + extraDmg;
						}
					},
					"If I include the words 'Elemental Cleaver' in a weapon's name, the Elemental Cleaver infused weapon properties will be added to it and its damage type will be set to 'Varies'. Also, my Rage's bonus damage will be added to it if it is a melee weapon that uses Strength."
				],
				atkCalc : [
					function (fields, v, output) {
						if (v.isMeleeWeapon && fields.Mod === 1 && classes.known.barbarian && classes.known.barbarian.level && /^(?!.*\brage\b)(?=.*elemental)(?=.*cleaver).*$/i.test(v.WeaponTextName)) {
							output.extraDmg += classes.known.barbarian.level < 9 ? 2 : classes.known.barbarian.level < 16 ? 3 : 4;
						}
					},
					""
				]
			}
		},
		"subclassfeature10" : {
			name : "Mighty Impel",
			source : [["GotG", 12]],
			minlevel : 10,
			description : levels.map(function (n) {
				return " [DC 8 + Prof Bonus + Str mod]" + desc([
					"As a bonus action while raging, I can hurl a " + (n < 14 ? 'Medium' : 'Large') + " or smaller creature within my reach",
					"I move it to an empty space I can see within 30 ft; Unwilling can save to avoid this",
					"If it doesn't end this movement on a surface that can support it, it falls and lands prone"
				]);
			}),
			action : [["bonus action", " (in rage)"]]
		},
		"subclassfeature14" : {
			name : "Demiurgic Colossus",
			source : [["GotG", 12]],
			minlevel : 14,
			description : desc([
				"While raging, my reach increases by 10 ft, and my size can increase to Huge",
				"Mighty Impel works on Large creatures; Elemental Cleaver increases to +2d6 damage",
			])
		}
	}
});

BackgroundList["giant foundling"] = {
	regExpSearch : /^(?=.*giant)(?=.*foundling).*$/i,
	name : "Giant Foundling",
	source : [["GotG", 12]],
	skills : ["Intimidation", "Survival"],
	gold : 10,
	languageProfs : ["Giant", 1],
	equipleft : [
		["Backpack", "", 5],
		["Small stone/sprig from home", "", ""]
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["Pouch (with coins)", "", 1]
	],
	feature : "Strike of the Giants",
	trait : [
		"What I lack in stature compared to giants, I make up for with sheer spite.",
		"I insist on being taken seriously as a full-grown adult. Nobody talks down to me!",
		"Crowded spaces make me uncomfortable. I'd much rather be in an open field than a bustling tavern.",
		"I embrace my shorter stature. It helps me stay unnoticed\u2014and underestimated.",
		"Every avalanche begins as a single pebble.",
		"The world always feels too big, and I'm afraid I'll never find my place in it."
	],
	extra : [
		"Choose an Origin Story",
		"Found as a baby",
		"Rescued by stone giants",
		"Lost in the jungle with frost giant",
		"Family killed in war of giants",
		"Studied with storm giant oracle",
		"Adopted by cloud giant"
	]
};
BackgroundFeatureList["strike of the giants"] = {
	description : "I grew up among giants or where they lived. Something about this environment\u2014the food, water, elemental magic, or some blessing\u2014caused me to grow to a remarkable size for my kind. I'm used to moving through a world much bigger than I, and that is reflected in my skills, attitude, and perspective on life. I gain the Strike of the Giants feat.",
	source : [["GotG", 13], ["UA:WotM", 4]],
	eval : function() { AddFeat("Strike of the Giants"); },
	removeeval : function() { RemoveFeat("Strike of the Giants"); }
};

BackgroundList["rune carver"] = {
	regExpSearch : /^(?=.*rune)(?=.*carver).*$/i,
	name : "Rune Carver",
	source : [["GotG", 14]],
	skills : ["History", "Perception"],
	gold : 10,
	toolProfs : [["Artisan's tools", 1]],
	languageProfs : ["Giant"],
	equipleft : [
		["Set of artisan's tools", "", ""],
		["Small knife", "", 0.5],
		["Whetstone", "", 1]
	],
	equipright : [
		["Common clothes", "", 3],
		["Pouch (with coins)", "", 1]
	],
	feature : "Rune Shaper",
	trait : [
		"Is it practical to learn an ancient language that is rarely spoken? No. But is it fun? Very.",
		"I learned one of my ancestors was a lauded rune carver whose story was lost to time. I seek to rekindle that legacy.",
		"The old, traditional markings of runecraft look so boring. Why not give my runes some flair?",
		"In my studies of runes, I strive to understand how great civilizations of the past fell, so I can prevent it from happening to societies of the present.",
		"Life may be a whirlwind of chaos, but whenever I create my runes, I feel at peace.",
		"My brain struggles to process words written in ink, but the feeling of carved runes makes my mind sing."
	],
	extra : [
		"Choose a Rune Style",
		"Needle in wax/clay",
		"Whittle wooden figurines",
		"Engraved glass beads",
		"Stitched into hems of clothing",
		"Carved animal bones",
		"Drawn into candles"
	]
};
BackgroundFeatureList["rune shaper"] = {
	description : "I've dedicated my life to studying runecraft, taught by a master rune carver or learned by poring over ancient engravings. I can tap into the supernatural power held within runes. The art of runecraft has been adopted by many outside of giant society and those often incorporate their native language among the Giant runes. I gain the Rune Shaper feat.",
	source : [["GotG", 14]],
	eval : function() { AddFeat("Rune Shaper"); },
	removeeval : function() { RemoveFeat("Rune Shaper"); }
};

// Feats - first the Strike of the Giants tree
FeatsList["strike of the giants"] = {
	name : "Strike of the Giants",
	source : [["GotG", 19]],
	prerequisite : "Martial weapon proficiency or Giant Foundling background",
	prereqeval : function (v) {
		return v.martialWeaponsProf || CurrentBackground.known.indexOf('giant foundling') !== -1 || /strike of the giants/i.test(What("Background Feature"));
	},
	descriptionFull : "You have absorbed primeval magic that gives you an echo of the might of giants. When you take this feat, choose one of the benefits listed below. Once per turn, when you hit a target with a melee weapon attack or a ranged weapon attack using a thrown weapon, you can imbue the attack with an additional effect depending on the benefit you chose:"+
	"\n   " + toUni("Cloud Strike") + ". The target takes an extra 1d4 thunder damage. If the target is a creature, it must succeed on a Wisdom saving throw, or you become invisible to it until the start of your next turn or until immediately after you make an attack roll or cast a spell."+
	"\n   " + toUni("Fire Strike") + ". The target takes an extra 1d10 fire damage."+
	"\n   " + toUni("Frost Strike") + ". The target takes an extra 1d6 cold damage. If the target is a creature, it must succeed on a Constitution saving throw, or its speed is reduced to 0 until the start of your next turn."+
	"\n   " + toUni("Hill Strike") + ". The target takes an extra 1d6 damage of the weapon's type. If the target is a creature, it must succeed on a Strength saving throw or have the prone condition."+
	"\n   " + toUni("Stone Strike") + ". The target takes an extra 1d6 force damage. If the target is a creature, it must succeed on a Strength saving throw or be pushed 10 feet from you in a straight line."+
	"\n   " + toUni("Storm Strike") + ". The target takes an extra 1d6 lightning damage. If the target is a creature, it must succeed on a Constitution saving throw, or it has disadvantage on attack rolls until the start of your next turn."+
	"\n   The saving throw DC for these effects equals 8 + your proficiency bonus + your Strength or Constitution modifier."+
	"\n   You can use this feat a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	description : "",
	usages : "Proficiency bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus');",
	recovery : "long rest",
	choices : ["Cloud Strike", "Fire Strike", "Frost Strike", "Hill Strike", "Stone Strike", "Storm Strike"],
	"cloud strike" : {
		description : "",
		calculate : "var iProfB = Number(How('Proficiency Bonus')); event.value = 'Once per turn, when I hit with a melee weapon attack or thrown weapon, the target takes +1d4 thunder damage. It must then make a Wis save DC ' + ( 8 + iProfB + Math.max( Number(What('Str Mod')), Number(What('Con Mod')) ) ) + ' (8 + Prof Bonus + Str/Con mod) or I become invisible to it until my next turn starts, I make an attack, or I cast a spell. I can do this ' + iProfB + ' (Prof Bonus) times per long rest.';"
	},
	"fire strike" : {
		description : "I have absorbed primeval magic that gives me an echo of the might of giants. Once per turn when I hit with a melee weapon attack or thrown weapon, the target takes +1d10 fire damage. I can do this a number of times per long rest equal to my proficiency bonus."
	},
	"frost strike" : {
		description : "",
		calculate : "var iProfB = Number(How('Proficiency Bonus')); event.value = 'Once per turn, when I hit with a melee weapon attack or thrown weapon, the target takes +1d6 cold damage. It must then make a Con save DC ' + (8 + iProfB + Math.max(Number(What('Str Mod')), Number(What('Con Mod')))) + ' (8 + Prof Bonus + Str/Con mod) or its speed is reduced to 0 until my next turn starts. I can do this ' + iProfB + ' (Prof Bonus) times per long rest.';"
	},
	"hill strike" : {
		description : "",
		calculate : "var iProfB = Number(How('Proficiency Bonus')); event.value = 'Once per turn, when I hit with a melee weapon attack or thrown weapon, the target takes +1d6 damage. It must then make a Str save DC ' + (8 + iProfB + Math.max(Number(What('Str Mod')), Number(What('Con Mod')))) + ' (8 + Prof Bonus + Str/Con mod) or be knocked prone. I can do this ' + iProfB + ' (Prof Bonus) times per long rest.';"
	},
	"stone strike" : {
		description : "",
		calculate : "var iProfB = Number(How('Proficiency Bonus')); event.value = 'Once per turn, when I hit with a melee weapon attack or thrown weapon, the target takes +1d6 force damage. It must then make a Wis save DC ' + (8 + iProfB + Math.max(Number(What('Str Mod')), Number(What('Con Mod')))) + ' (8 + Prof Bonus + Str/Con mod) or be pushed 10 ft away from me in a straight line. I can do this ' + iProfB + ' (Prof Bonus) times per long rest.';"
	},
	"storm strike" : {
		description : "",
		calculate : "var iProfB = Number(How('Proficiency Bonus')); event.value = 'Once per turn, when I hit with a melee weapon attack or thrown weapon, the target takes +1d6 lightning damage. It must then make a Con save DC ' + (8 + iProfB + Math.max(Number(What('Str Mod')), Number(What('Con Mod')))) + ' (8 + Prof Bonus + Str/Con mod) or it gets disadvantage on attack rolls until my next turn starts. I can do this ' + iProfB + ' (Prof Bonus) times per long rest.';"
	}
}
FeatsList["ember of the fire giant"] = {
	name : "Ember of the Fire Giant",
	source : [["GotG", 17]],
	prerequisite : "4th level, Strike of the Giants (Fire Strike) feat",
	prereqeval : function(v) {
		var iStrikeGiants = CurrentFeats.known.indexOf("strike of the giants");
		return v.characterLevel >= 4 && iStrikeGiants !== -1 && CurrentFeats.choices[iStrikeGiants] === 'fire strike';
	},
	descriptionFull : "You've manifested the fiery combat emblematic of fire giants, granting you the following benefits:"+
	"\n\n" + toUni("Ability Score Increase") + ". Increase your Strength, Constitution, or Wisdom by 1, to a maximum of 20."+
	"\n\n" + toUni("Born of Flame") + ". You have resistance to fire damage."+
	"\n" + toUni("Searing Ignition") + ". When you take the Attack action on your turn, you can replace a single attack with a magical burst of flame. Each creature of your choice in a 15-foot-radius sphere centered on you must make a Dexterity saving throw (DC equals 8 + your proficiency bonus + the modifier of the ability increased by this feat). On a failed save, a creature takes fire damage equal to 1d8 + your proficiency bonus, and it has the blinded condition until the start of your next turn. On a successful save, the creature takes half as much damage only. You can use your Searing Ignition a number of times equal to your proficiency bonus (but no more than once per turn), and you regain all expended uses when you finish a long rest.",
	description : "I get fire resistance. Prof B. per long rest, when I use the Attack action on my turn, I can replace one attack with Searing Ignition: Chosen targets in 15-ft radius sphere on me take 1d8 + Prof B. fire damage, blind until my next turn starts. Dex save DC 8 + Prof B. + Str/Con/Wis mod half damage, not blind. [+1 Str/Con/Wis]",
	extraLimitedFeatures : [{
		name : "Searing Ignition",
		usages : "Proficiency bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest"
	}],
	dmgres : ["Fire"],
	choices : ["Strength", "Constitution", "Wisdom"],
	"strength" : {
		description : "",
		calculate : "var iProfB = Number(How('Proficiency Bonus')); event.value = 'I get fire resistance. ' + iProfB + '\xD7 (Prof) per long rest, when I use the Attack action on my turn, I can replace one attack with Searing Ignition: Chosen targets in 15-ft radius sphere on me take 1d8+' + iProfB + ' (Prof B.) fire damage, blinded until my next turn starts. Dex save DC ' + ( 8 + iProfB + Number(What('Str Mod')) ) + ' (8 + Prof B. + Str mod) halves damage, not blinded. [+1 Str]';",
		weaponOptions : [{
			regExpSearch : /^(?=.*searing)(?=.*ignition).*$/i,
			name : "Searing Ignition",
			source : [["GotG", 17]],
			ability : 1,
			type : 'AlwaysProf',
			damage : [1, 8, 'fire'],
			range : "15-ft radius",
			description : "Affects only chosen targets; Dex save halves, otherwise blinded until my next turn starts",
			abilitytodamage : false,
			dc : true,
			isNotWeapon : true,
			modifiers : ["", "Prof"],
			selectNow : true
		}],
		scores : [1,0,0,0,0,0]
	},
	"constitution" : {
		description : "",
		calculate : "var iProfB = Number(How('Proficiency Bonus')); event.value = 'I get fire resistance. ' + iProfB + '\xD7 (Prof) per long rest, when I use the Attack action on my turn, I can replace one attack with Searing Ignition: Chosen targets in 15-ft radius sphere on me take 1d8+' + iProfB + ' (Prof B.) fire damage, blinded until my next turn starts. Dex save DC ' + ( 8 + iProfB + Number(What('Con Mod')) ) + ' (8 + Prof B. + Con mod) halves damage, not blinded. [+1 Con]';",
		weaponOptions : [{
			regExpSearch : /^(?=.*searing)(?=.*ignition).*$/i,
			name : "Searing Ignition",
			source : [["GotG", 17]],
			ability : 3,
			type : 'Magical',
			damage : [1, 8, 'fire'],
			range : "15-ft radius",
			description : "Affects only chosen targets; Dex save halves, otherwise blinded until my next turn starts",
			abilitytodamage : false,
			dc : true,
			isNotWeapon : true,
			modifiers : ["", "Prof"],
			selectNow : true
		}],
		scores : [0,0,1,0,0,0]
	},
	"wisdom" : {
		description : "",
		calculate : "var iProfB = Number(How('Proficiency Bonus')); event.value = 'I get fire resistance. ' + iProfB + '\xD7 (Prof) per long rest, when I use the Attack action on my turn, I can replace one attack with Searing Ignition: Chosen targets in 15-ft radius sphere on me take 1d8+' + iProfB + ' (Prof B.) fire damage, blinded until my next turn starts. Dex save DC ' + ( 8 + iProfB + Number(What('Wis Mod')) ) + ' (8 + Prof B. + Wis mod) halves damage, not blinded. [+1 Wis]';",
		weaponOptions : [{
			regExpSearch : /^(?=.*searing)(?=.*ignition).*$/i,
			name : "Searing Ignition",
			source : [["GotG", 17]],
			ability : 5,
			type : 'Magical',
			damage : [1, 8, 'fire'],
			range : "15-ft radius",
			description : "Affects only chosen targets; Dex save halves, otherwise blinded until my next turn starts",
			abilitytodamage : false,
			dc : true,
			isNotWeapon : true,
			modifiers : ["", "Prof"],
			selectNow : true
		}],
		scores : [0,0,0,0,1,0]
	}
};
FeatsList["fury of the frost giant"] = {
	name : "Fury of the Frost Giant",
	source : [["GotG", 17]],
	prerequisite : "4th level, Strike of the Giants (Frost Strike) feat",
	prereqeval : function(v) {
		var iStrikeGiants = CurrentFeats.known.indexOf("strike of the giants");
		return v.characterLevel >= 4 && iStrikeGiants !== -1 && CurrentFeats.choices[iStrikeGiants] === 'frost strike';
	},
	descriptionFull : "You've manifested the icy might emblematic of frost giants, granting you the following benefits:"+
	"\n\n" + toUni("Ability Score Increase") + ". Increase your Strength, Constitution, or Wisdom by 1, to a maximum of 20."+
	"\n\n" + toUni("Born of Ice") + ". You have resistance to cold damage."+
	"\n" + toUni("Frigid Retaliation") + ". Immediately after a creature you can see within 30 feet of you hits you with an attack roll and deals damage, you can use your reaction to retaliate with a conjured blast of ice. The creature must make a Constitution saving throw (DC equals 8 + your proficiency bonus + the modifier of the ability increased by this feat). On a failed save, the creature takes cold damage equal to 1d8 + your proficiency bonus, and its speed is reduced to 0 until the end of its next turn. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	description : "I gain cold resistance. As a reaction when a creature I see within 30 ft damages me with an attack, I can, Prof B. times per long rest, use Frigid Retaliation: it must make a Con save DC 8 + Prof B. + Str/Con/Wis mod or take 1d8 + Prof B. cold damage and have speed 0 until its next turn ends. [+1 Str/Con/Wis]",
	action : [["reaction", "Frigid Retaliation"]],
	extraLimitedFeatures : [{
		name : "Frigid Retaliation",
		usages : "Proficiency bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest"
	}],
	dmgres : ["Cold"],
	choices : ["Strength", "Constitution", "Wisdom"],
	"strength" : {
		description : "",
		calculate : "var iProfB = Number(How('Proficiency Bonus')); event.value = 'I gain cold resistance. As a reaction when a creature I see within 30 ft hits me with an attack roll and deals damage, I can, ' + iProfB + ' times (Prof B.) per long rest, use Frigid Retaliation: it must make a Con save DC ' + ( 8 + iProfB + Number(What('Str Mod')) ) + ' (8 + Prof B. + Str mod) or take 1d8+' + iProfB + ' (Prof B.) cold damage and have speed 0 until its next turn ends. [+1 Str]';",
		weaponOptions : [{
			regExpSearch : /^(?=.*frigid)(?=.*retaliation).*$/i,
			name : "Frigid Retaliation",
			source : [["GotG", 17]],
			ability : 1,
			type : 'Magical',
			damage : [1, 8, 'cold'],
			range : "30 ft",
			description : "Reaction; Con save - success: no damage, fail: also 0 speed until target's next turn ends",
			abilitytodamage : false,
			dc : true,
			isNotWeapon : true,
			modifiers : ["", "Prof"],
			selectNow : true
		}],
		scores : [1,0,0,0,0,0]
	},
	"constitution" : {
		description : "",
		calculate : "var iProfB = Number(How('Proficiency Bonus')); event.value = 'I gain cold resistance. As a reaction when a creature I see within 30 ft hits me with an attack roll and deals damage, I can, ' + iProfB + ' times (Prof B.) per long rest, use Frigid Retaliation: it must make a Con save DC ' + ( 8 + iProfB + Number(What('Con Mod')) ) + ' (8 + Prof B. + Con mod) or take 1d8+' + iProfB + ' (Prof B.) cold damage and have speed 0 until its next turn ends. [+1 Con]';",
		weaponOptions : [{
			regExpSearch : /^(?=.*frigid)(?=.*retaliation).*$/i,
			name : "Frigid Retaliation",
			source : [["GotG", 17]],
			ability : 3,
			type : 'Magical',
			damage : [1, 8, 'cold'],
			range : "30 ft",
			description : "Reaction; Con save - success: no damage, fail: also 0 speed until target's next turn ends",
			abilitytodamage : false,
			dc : true,
			isNotWeapon : true,
			modifiers : ["", "Prof"],
			selectNow : true
		}],
		scores : [0,0,1,0,0,0]
	},
	"wisdom" : {
		description : "",
		calculate : "var iProfB = Number(How('Proficiency Bonus')); event.value = 'I gain cold resistance. As a reaction when a creature I see within 30 ft hits me with an attack roll and deals damage, I can, ' + iProfB + ' times (Prof B.) per long rest, use Frigid Retaliation: it must make a Con save DC ' + ( 8 + iProfB + Number(What('Wis Mod')) ) + ' (8 + Prof B. + Wis mod) or take 1d8+' + iProfB + ' (Prof B.) cold damage and have speed 0 until its next turn ends. [+1 Wis]';",
		weaponOptions : [{
			regExpSearch : /^(?=.*frigid)(?=.*retaliation).*$/i,
			name : "Frigid Retaliation",
			source : [["GotG", 17]],
			ability : 5,
			type : 'Magical',
			damage : [1, 8, 'cold'],
			range : "30 ft",
			description : "Reaction; Con save - success: no damage, fail: also 0 speed until target's next turn ends",
			abilitytodamage : false,
			dc : true,
			isNotWeapon : true,
			modifiers : ["", "Prof"],
			selectNow : true
		}],
		scores : [0,0,0,0,1,0]
	}
};
FeatsList["guile of the cloud giant"] = {
	name : "Guile of the Cloud Giant",
	source : [["GotG", 18]],
	prerequisite : "4th level, Strike of the Giants (Cloud Strike) feat",
	prereqeval : function(v) {
		var iStrikeGiants = CurrentFeats.known.indexOf("strike of the giants");
		return v.characterLevel >= 4 && iStrikeGiants !== -1 && CurrentFeats.choices[iStrikeGiants] === 'cloud strike';
	},
	descriptionFull : "You've manifested the confounding magic emblematic of cloud giants, granting you the following benefits:"+
	"\n\n" + toUni("Ability Score Increase") + ". Increase your Strength, Constitution, or Charisma by 1, to a maximum of 20."+
	"\n\n" + toUni("Cloudy Escape") + ". When a creature you can see hits you with an attack roll, you can use your reaction to give yourself resistance to that attack's damage. You then teleport to an unoccupied space that you can see within 30 feet of yourself. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	description : "As a reaction when a creature I see within 30 ft hits me with an attack roll, I can give myself resistance to that attack's damage. I then teleport to an unoccupied space that I can see within 30 ft. I can do this reaction my proficiency bonus times per long rest.",
	action : [["reaction", "Cloudy Escape"]],
	extraLimitedFeatures : [{
		name : "Cloudy Escape",
		usages : "Proficiency bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest"
	}],
	choices : ["Strength", "Constitution", "Charisma"],
	"strength" : {
		description : "As a reaction when a creature I see within 30 ft hits me with an attack roll, I can use Cloudy Escape: I give myself resistance to that attack's damage and then I teleport to an unoccupied space that I can see within 30 ft. I can do this Proficiency Bonus per long rest. [+1 Strength]",
		scores : [1,0,0,0,0,0]
	},
	"constitution" : {
		description : "As a reaction when a creature I see within 30 ft hits me with an attack roll, I can use Cloudy Escape: I give myself resistance to that attack's damage and then I teleport to an unoccupied space that I can see within 30 ft. I can do this Proficiency Bonus per long rest. [+1 Constitution]",
		scores : [0,0,1,0,0,0]
	},
	"charisma" : {
		description : "As a reaction when a creature I see within 30 ft hits me with an attack roll, I can use Cloudy Escape: I give myself resistance to that attack's damage and then I teleport to an unoccupied space that I can see within 30 ft. I can do this Proficiency Bonus per long rest. [+1 Charisma]",
		scores : [0,0,0,0,0,1]
	}
};
FeatsList["keenness of the stone giant"] = {
	name : "Keenness of the Stone Giant",
	source : [["GotG", 18]],
	prerequisite : "4th level, Strike of the Giants (Stone Strike) feat",
	prereqeval : function(v) {
		var iStrikeGiants = CurrentFeats.known.indexOf("strike of the giants");
		return v.characterLevel >= 4 && iStrikeGiants !== -1 && CurrentFeats.choices[iStrikeGiants] === 'stone strike';
	},
	descriptionFull : "You've manifested the physical talents emblematic of stone giants, granting you the following benefits:"+
	"\n\n" + toUni("Ability Score Increase") + ". Increase your Strength, Constitution, or Wisdom by 1, to a maximum of 20."+
	"\n\n" + toUni("Cavernous Sight") + ". You gain darkvision with a range of 60 feet. If you already have darkvision from another source, its range increases by 60 feet."+
	"\n" + toUni("Stone Throw") + ". As a bonus action, you can take a rock and make a magical attack with it. The attack is a ranged spell attack with a range of 60 feet that uses the ability score you increased with this feat as the spellcasting ability. On a hit, the rock deals 1d10 force damage, and the target must succeed on a Strength saving throw (DC equals 8 + your proficiency bonus + the spellcasting ability modifier) or have the prone condition. You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	description : "I gain +60 ft Darkvision. As a bonus action, Prof Bonus times per long rest, I can make a magical Stone Throw attack. It is a spell attack with 60 ft range that deals 1d10 force damage and the target hit must make a Str save or be knocked prone. This uses the ability increased as spellcasting ability. [+1 Str/Con/Wis]",
	vision : [["Darkvision", "fixed 60"], ["Darkvision", "+60"]],
	action : [["bonus action", "Stone Throw"]],
	extraLimitedFeatures : [{
		name : "Stone Throw",
		usages : "Proficiency bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest"
	}],
	choices : ["Strength", "Constitution", "Wisdom"],
	"strength" : {
		description : "",
		calculate : "var iProfB = Number(How('Proficiency Bonus')), iMod = Number(What('Str')); event.value = 'I gain +60 ft Darkvision. As a bonus action, ' + iProfB + ' (Prof Bonus) times per long rest, I can make a magical Stone Throw attack: a spell attack (+' + (iProfB + iMod) + ') with 60 ft range that deals 1d10 force damage and the target hit must make a Strength save (DC ' + (8 + iProfB + iMod) + ') or be knocked prone. This uses Strength as spellcasting ability. [+1 Strength]';",
		weaponOptions : [{
			regExpSearch : /^(?=.*stone)(?=.*throw).*$/i,
			name : "Stone Throw",
			source : [["GotG", 18]],
			ability : 1,
			type : 'Spell',
			damage : [1, 10, 'force'],
			range : "60 ft",
			description : "Bonus action; Target Strength save (DC 8 + To Hit) or be knocked prone",
			abilitytodamage : false,
			selectNow : true
		}],
		scores : [1,0,0,0,0,0]
	},
	"constitution" : {
		description : "",
		calculate : "var iProfB = Number(How('Proficiency Bonus')), iMod = Number(What('Con')); event.value = 'I gain +60 ft Darkvision. As a bonus action, ' + iProfB + ' (Prof Bonus) times per long rest, I can make a magical Stone Throw attack: a spell attack (+' + (iProfB + iMod) + ') with 60 ft range that deals 1d10 force damage and the target hit must make a Strength save (DC ' + (8 + iProfB + iMod) + ') or be knocked prone. This uses Constitution as spellcasting ability. [+1 Con]';",
		weaponOptions : [{
			regExpSearch : /^(?=.*stone)(?=.*throw).*$/i,
			name : "Stone Throw",
			source : [["GotG", 18]],
			ability : 3,
			type : 'Spell',
			damage : [1, 10, 'force'],
			range : "60 ft",
			description : "Bonus action; Target Strength save (DC 8 + To Hit) or be knocked prone",
			abilitytodamage : false,
			selectNow : true
		}],
		scores : [0,0,1,0,0,0]
	},
	"wisdom" : {
		description : "",
		calculate : "var iProfB = Number(How('Proficiency Bonus')), iMod = Number(What('Wis')); event.value = 'I gain +60 ft Darkvision. As a bonus action, ' + iProfB + ' (Prof Bonus) times per long rest, I can make a magical Stone Throw attack: a spell attack (+' + (iProfB + iMod) + ') with 60 ft range that deals 1d10 force damage and the target hit must make a Strength save (DC ' + (8 + iProfB + iMod) + ') or be knocked prone. This uses Wisdom as spellcasting ability. [+1 Wisdom]';",
		weaponOptions : [{
			regExpSearch : /^(?=.*stone)(?=.*throw).*$/i,
			name : "Stone Throw",
			source : [["GotG", 18]],
			ability : 5,
			type : 'Spell',
			damage : [1, 10, 'force'],
			range : "60 ft",
			description : "Bonus action; Target Strength save (DC 8 + To Hit) or be knocked prone",
			abilitytodamage : false,
			selectNow : true
		}],
		scores : [0,0,0,0,1,0]
	}
};
FeatsList["soul of the storm giant"] = {
	name : "Soul of the Storm Giant",
	source : [["GotG", 19]],
	prerequisite : "4th level, Strike of the Giants (Storm Strike) feat",
	prereqeval : function(v) {
		var iStrikeGiants = CurrentFeats.known.indexOf("strike of the giants");
		return v.characterLevel >= 4 && iStrikeGiants !== -1 && CurrentFeats.choices[iStrikeGiants] === 'storm strike';
	},
	descriptionFull : "You've manifested the tempest magic emblematic of storm giants, granting you the following benefits:"+
	"\n\n" + toUni("Ability Score Increase") + ". Increase your Strength, Constitution, or Charisma by 1, to a maximum of 20."+
	"\n\n" + toUni("Maelstrom Aura") + ". As a bonus action, you surround yourself with an aura of magical wind and lightning that extends 10 feet from you in every direction but not through total cover. The aura lasts until the start of your next turn or until you are incapacitated. While the aura is active, you have resistance to lightning and thunder damage. In addition, attack rolls against you have disadvantage, and whenever another creature starts its turn within the aura, you can force the creature to make a Strength saving throw (DC equals 8 + your proficiency bonus + the modifier of the ability increased by this feat). On a failed save, the creature's speed is halved until the start of its next turn. You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	description : "As a bonus action, Prof B. per long rest, I can make a 10-ft radius Maelstrom Aura until my next turn starts: I get lightning/thunder resistance, attacks vs. me have disadv., I can force those starting their turn inside to a Str save DC 8 + Prof + Str/Con/Cha mod or halve their speed until their next turn starts. [+1 Str/Con/Cha]",
	action : [["bonus action", "Maelstrom Aura"]],
	extraLimitedFeatures : [{
		name : "Maelstrom Aura",
		usages : "Proficiency bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest"
	}],
	choices : ["Strength", "Constitution", "Charisma"],
	"strength" : {
		description : "",
		calculate : "var iProfB = Number(How('Proficiency Bonus')); event.value = 'As a bonus action, ' + iProfB + '\xD7 (Prof) per long rest, I can invoke a 10-ft radius Maelstrom Aura until my next turn starts: I get lightning \u0026 thunder resistance, attacks vs. me have disadv., I can force those starting their turn inside to make a Str save DC ' + ( 8 + iProfB + Number(What('Str Mod')) ) + ' (8+Prof+Str mod) or halve their speed until their next turn starts. [+1 Str]';",
		scores : [1,0,0,0,0,0]
	},
	"constitution" : {
		description : "",
		calculate : "var iProfB = Number(How('Proficiency Bonus')); event.value = 'As a bonus action, ' + iProfB + '\xD7 (Prof) per long rest, I can invoke a 10-ft radius Maelstrom Aura until my next turn starts: I get lightning \u0026 thunder resistance, attacks vs. me have disadv., I can force those starting their turn inside to make a Str save DC ' + ( 8 + iProfB + Number(What('Con Mod')) ) + ' (8+Prof+Con mod) or halve their speed until their next turn starts. [+1 Con]';",
		scores : [0,0,1,0,0,0]
	},
	"charisma" : {
		description : "",
		calculate : "var iProfB = Number(How('Proficiency Bonus')); event.value = 'As a bonus action, ' + iProfB + '\xD7 (Prof) per long rest, I can invoke a 10-ft radius Maelstrom Aura until my next turn starts: I get lightning \u0026 thunder resistance, attacks vs. me have disadv., I can force those starting their turn inside to make a Str save DC ' + ( 8 + iProfB + Number(What('Cha Mod')) ) + ' (8+Prof+Cha mod) or halve their speed until their next turn starts. [+1 Cha]';",
		scores : [0,0,0,0,0,1]
	}
};
FeatsList["vigor of the hill giant"] = {
	name : "Vigor of the Hill Giant",
	source : [["GotG", 19]],
	prerequisite : "4th level, Strike of the Giants (Hill Strike) feat",
	prereqeval : function(v) {
		var iStrikeGiants = CurrentFeats.known.indexOf("strike of the giants");
		return v.characterLevel >= 4 && iStrikeGiants !== -1 && CurrentFeats.choices[iStrikeGiants] === 'hill strike';
	},
	descriptionFull : "You've manifested the resilience emblematic of hill giants, granting you the following benefits:"+
	"\n\n" + toUni("Ability Score Increase") + ". Increase your Strength, Constitution, or Wisdom by 1, to a maximum of 20."+
	"\n\n" + toUni("Bulwark") + ". When you are subjected to an effect that would move you at least 5 feet or give you the prone condition, you can use your reaction to steady yourself. You aren't moved and don't have the prone condition."+
	"\n" + toUni("Iron Stomach") + ". Whenever you eat food as part of a short rest and spend one or more Hit Dice to regain hit points, you regain additional hit points equal to your Constitution modifier + your proficiency bonus.",
	description : "Bulwark: When I would be moved or knocked prone I can use my reaction to prevent that. Iron Stomach: Whenever I eat food as part of a short rest and spend HD to regain hit points, I regain additional hp equal to my Constitution modifier + my proficiency bonus. [+1 Strength/Constitution/Wisdom]",
	action : [["reaction", "Bulwark"]],
	choices : ["Strength", "Constitution", "Wisdom"],
	"strength" : {
		description : "Bulwark: When I would be moved or knocked prone I can use my reaction to prevent that. Iron Stomach: Whenever I eat food as part of a short rest and spend HD to regain hit points, I regain additional hp equal to my Con" + (typePF ? "stitution" : "") + " modifier + my proficiency bonus. [+1 St" + (typePF ? "rength" : "") + "]",
		scores : [1,0,0,0,0,0]
	},
	"constitution" : {
		description : "Bulwark: When I would be moved or knocked prone I can use my reaction to prevent that. Iron Stomach: Whenever I eat food as part of a short rest and spend HD to regain hit points, I regain additional hp equal to my Con" + (typePF ? "stitution" : "") + " modifier + my proficiency bonus. [+1 Con" + (typePF ? "stitution" : "") + "]",
		scores : [0,0,1,0,0,0]
	},
	"wisdom" : {
		description : "Bulwark: When I would be moved or knocked prone I can use my reaction to prevent that. Iron Stomach: Whenever I eat food as part of a short rest and spend HD to regain hit points, I regain additional hp equal to my Con" + (typePF ? "stitution" : "") + " modifier + my proficiency bonus. [+1 Wis" + (typePF ? "dom" : "") + "]",
		scores : [0,0,0,0,1,0]
	}
};
// Feats - Rune Shaper
var GotG_RuneShaper = [
	"You've studied the magic of Giant runes, granting you the following benefits:",
	">>Comprehend Languages<<. You learn the comprehend languages spell. You can cast this spell without expending a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast this spell using any spell slots you have.",
	">>Rune Magic<<. You know a number of runes equal to half your proficiency bonus (rounded down), chosen from the Rune Spells table. Whenever you finish a long rest, you can inscribe each rune you know onto one nonmagical weapon, armor, piece of clothing, or other object you touch. You temporarily learn the 1st-level spells that correspond to the runes you inscribed, as specified on the Rune Spells table, and you know those spells until you finish a long rest, when the runes fade. While you are wearing or carrying any rune-marked object, you can cast the spells associated with those runes using any spell slots you have.",
	"You can also invoke a rune inscribed on an object you are wearing or carrying and cast its associated spell without expending a spell slot or using material components. Once you cast the spell in this way, you can't do so again until you finish a long rest. Your spellcasting ability for this feat is Intelligence, Wisdom, or Charisma (choose when you select this feat).",
	"Each time you gain a level, you can replace one of the runes you know with another one from the Rune Spells table below.\n",
	">>Rune\tSpell<<",
	"Cloud\tFog Cloud",
	"Death\tInflict Wounds",
	"Dragon\tChromatic Orb",
	"Enemy\tDisguise Self",
	"Fire\tBurning Hands",
	"Friend\tSpeak with Animals",
	"Frost\tArmor of Agathys",
	"Hill\tGoodberry",
	"Journey\tLongstrider",
	"King\tCommand",
	"Mountain\tEntangle",
	"Stone\tSanctuary",
	"Storm\tThunderwave"
];
FeatsList["rune shaper"] = {
	name : "Rune Shaper",
	source : [["GotG", 18]],
	prerequisite : "Spellcasting feature or Rune Carver background",
	prereqeval : function(v) { return v.isSpellcastingClass || CurrentBackground.known.indexOf('rune carver') !== -1 || /rune shaper/i.test(What("Background Feature")); },
	descriptionFull : GotG_RuneShaper.join("\n   ").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
	description : "I know half my Prof Bonus, rounded down, in runes. After a long rest, I can inscribe each rune on a nonmagical objects I touch. It lasts until my next long rest. I can cast Comprehend Languages and each inscribed rune's spell once per long rest without a spell slot or material components, or by using spell slots. See Notes.",
	spellcastingAbility : [4, 5, 6],
	spellcastingBonus : [{
		name : "Comprehend languages",
		spells : ["comprehend languages"],
		selection : ["comprehend languages"],
		allowUpCasting : true,
		// checkbox first column to check of when used once per long rest without a spell slot
		spellFirstColTitle : "1\xD7",
		firstCol : "checkbox"
	}, {
		name : "Runes",
		spells : ["fog cloud", "inflict wounds", "chromatic orb", "disguise self", "burning hands", "speak with animals", "armor of agathys", "goodberry", "longstrider", "command", "entangle", "sanctuary", "thunderwave"],
		allowUpCasting : true,
		// checkbox first column to check of when used once per long rest without a spell slot
		spellFirstColTitle : "1\xD7",
		firstCol : "checkbox",
		linkTimesToHalfProf : true, // custom attribute, for use in calcChanges.spellList
		times : 1 // half proficiency bonus, so always minimum of 1
	}],
	changeeval : function() {
		if (!CurrentSpells['rune shaper']) return;
		// See if the proficiency bonus changed to trigger the changes dialog
		// Don't set the times attribute here, but instead on every call to the spell dialog
		var halfProf = Math.floor( Number(How('Proficiency Bonus')) / 2 );
		if (CurrentSpells['rune shaper'].halfProf != halfProf) {
			CurrentSpells['rune shaper'].halfProf = halfProf;
			CurrentUpdates.types.push("spells");
		}
	},
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Change the times attribute to be half proficiency, rounded down
				// Do it this way, so it is updated even if a bonus to proficiency was manually applied
				if (spName === 'rune shaper' && spType === 'feat-bonus' && spList.name === "Comprehend languages") {
					var halfProf = Math.floor( Number(How('Proficiency Bonus')) / 2 );
					CurrentSpells['rune shaper'].halfProf = halfProf;
					for (var key in CurrentSpells[spName].bonus) {
						var aBonus = CurrentSpells['rune shaper'].bonus[key];
						if (!isArray(aBonus)) aBonus = [aBonus];
						for (var i = 0; i < aBonus.length; i++) {
							if (aBonus[i].linkTimesToHalfProf) {
								aBonus[i].times = halfProf;
							}
						}
					}
					
				}
			},
			""
		]
	},
	toNotesPage : [{
		name : "Features",
		note : desc(GotG_RuneShaper).replace(/>>(.*?)<</g, function(a, match) { return match.toUpperCase(); }).replace(/Your/g, "My").replace(/your/g, "my").replace(/you are /ig, "I am ").replace(/(contact|granting) you/ig, "$1 me").replace(/you /ig, "I ")
	}]
};

CreatureList["spotted lion"] = {
	name : "Spotted Lion",
	nameAlt : ["Lion, Spotted"],
	source : [["GotG", 177]],
	size : 1,
	type : "Beast",
	alignment : "Unaligned",
	ac : 15,
	hp : 66,
	hd : [7, 12],
	speed : "60 ft",
	scores : [23, 14, 17, 5, 13, 10],
	skills : {
		"perception" : 5,
		"stealth" : 6
	},
	senses : "Darkvision 60 ft",
	passivePerception : 15,
	challengeRating : "3",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Rend",
		ability : 1,
		damage : [2, 8, "piercing"],
		range : "Melee (10 ft)",
		description : "Bonus action on prone target; If used after 20 ft straight move, see Pounce trait",
		tooltip : "If the lion moved at least 20 ft straight toward the target immediately before hitting it, the target must succeed on a DC 16 Strength saving throw or have the prone condition. If the target has the prone condition, the lion can make another Rend attack against it as a bonus action."
	}],
	traits : [{
		name : "Pack Tactics",
		description : "The lion has advantage on an attack roll against a creature if at least one of the lion's allies is within 5 feet of the target and the ally doesn't have the incapacitated condition."
	}, {
		name : "Pounce",
		description : "If the lion moved at least 20 ft straight toward the target immediately before hitting it, the target must succeed on a DC 16 Strength saving throw or have the prone condition. If the target has the prone condition, the lion can make another Rend attack against it as a bonus action."
	}],
	wildshapeString : [
		"\u25C6 Senses: Darkvision 60 ft",
		"Pack Tactics: advantage on attack rolls if at least one capable ally is within 5 ft of the target.",
		"Pounce: If moved 20 ft straight to the target before hitting it, the target must succeed on a DC 16 Strength saving throw or be knocked prone. If the target has the prone condition, the lion can make another Rend attack against it as a bonus action."
	].join("\n\u25C6 ")
};
CreatureList["titanothere"] = {
	name : "Titanothere",
	source : [["GotG", 185]],
	size : 1,
	type : "Beast",
	alignment : "Unaligned",
	ac : 16,
	hp : 136,
	hd : [13, 12],
	speed : "50 ft",
	scores : [25, 10, 19, 2, 12, 6],
	senses : "",
	passivePerception : 11,
	challengeRating : "5",
	proficiencyBonus : 3,
	attacksAction : 1,
	attacks : [{
		name : "Stomp",
		ability : 1,
		damage : [2, 8, "piercing"],
		range : "Melee (10 ft)",
		description : "If used after moving 20 ft straight in the same round, see Charge trait",
		tooltip : "If the titanothere moved at least 20 feet straight toward the target immediately before hitting it, the target takes an extra 13 (3d8) bludgeoning damage, and if the target is a creature, it must succeed on a DC 18 Strength saving throw or be knocked prone."
	}],
	traits : [{
		name : "Beast of Burden",
		description : "The titanothere is considered to be one size larger for the purpose of determining its carrying capacity."
	}, {
		name : "Charge",
		description : "If the titanothere moved at least 20 feet straight toward the target immediately before hitting it, the target takes an extra 13 (3d8) bludgeoning damage, and if the target is a creature, it must succeed on a DC 18 Strength saving throw or be knocked prone."
	}]
};

// Magic Items (excluding Horizon Puzzle Cube, because that's really just a storytelling device)
MagicItemsList["elven thrower"] = { // spear, but otherwise identical to Dwarven Thrower
	name : "Elven Thrower",
	source : [["GotG", 64]],
	type : "weapon (spear)",
	rarity : "very rare",
	attunement : true,
	prerequisite : "Requires attunement by an Elf",
	prereqeval : function(v) { return (/elf|eladrin|avariel|grugach|shadar-kai/i).test(CurrentRace.known); },
	descriptionFull : "You gain a +3 bonus to attack and damage rolls made with this magic weapon. When you hit with a ranged attack using this weapon, it deals an extra 1d8 damage or, if the target is a Giant, 2d8 damage. Immediately after the attack, the weapon flies back to your hand.",
	description : "I gain a +3 bonus to attack and damage rolls made with this magic spear. When I hit with a ranged attack using this weapon, it deals an extra 1d8 damage or, if the target is a Giant, 2d8 damage. Immediately after the attack, the weapon flies back to my hand.",
	weight : 3,
	weaponOptions : [{
		baseWeapon : "spear",
		regExpSearch : /^(?=.*elven)(?=.*thrower).*$/i,
		name : "Elven Thrower",
		source : [["SRD", 220], ["D", 167]],
		range : "Melee, 20/60 ft",
		description : "Thrown, versatile (1d8); +1d8 damage when thrown (2d8 vs. giants) and returns immediately",
		modifiers : [3, 3],
		selectNow : true
	}]
};

MagicItemsList["armor of safeguarding"] = {
	name : "Armor of Safeguarding",
	nameTest : "of Safeguarding",
	source : [["GotG", 111]],
	type : "armor (heavy)",
	rarity : "very rare",
	attunement : true,
	descriptionFull : "Set in the center of this armor's chest is a citrine engraved with the shield rune."+
	"\n   While wearing this armor, your hit point maximum increases by an amount equal to 10 + your level."+
	"\n   " + toUni("Invoking the Rune") + ". As an action, you can invoke the armor's rune to cast the beacon of hope spell with it; the spell has a duration of 1 minute and doesn't require concentration. Once the rune has been invoked, it can't be invoked again until the next dawn.",
	description : "Set in the center of this armor's chest is a citrine engraved with the shield rune. While wearing this armor, my max hp increases by my level + 10. As an action once per dawn, I can invoke its shield rune to cast Beacon of Hope with a duration of 1 minute without requiring concentration.",
	usages : 1,
	recovery : "dawn",
	additional : "Beacon of Hope",
	chooseGear : {
		type : "armor",
		prefixOrSuffix : "prefix",
		descriptionChange : ["prefix", "armor"],
		excludeCheck : function (inObjKey, inObj) {
			return !/heavy/i.test(inObj.type);
		}
	},
	spellcastingBonus : [{
		name : "Beacon of Hope",
		spells : ["beacon of hope"],
		selection : ["beacon of hope"],
		firstCol : 'oncelr'
	}],
	spellChanges : {
		"beacon of hope" : {
			duration : "1 min",
			changes : "I can cast Beacon of Hope once per dawn without it requiring concentration."
		}
	},
	calcChanges : {
		hp : function (totalHD, HDobj, prefix) {
			return [10 + (classes.totallevel ? classes.totallevel : 0)];
		}
	}
};
MagicItemsList["bloodshed blade"] = {
	name : "Bloodshed Blade",
	nameTest : "Bloodshed",
	source : [["GotG", 111]],
	type : "weapon (any sword)",
	rarity : "very rare",
	attunement : true,
	descriptionFull : "The hilt of this sword bears a carnelian engraved with the blood rune."+
	"\n   You can add your Constitution modifier (minimum of +1) to the damage rolls of attacks made with this weapon."+
	"\n   " + toUni("Invoking the Rune") + ". When you target a creature with an attack using this weapon, you can invoke the sword's rune, causing it to flare with crimson light and infusing your attack with bloodthirsty precision. You then spend and roll one of your unspent Hit Dice and add the number rolled to the attack roll. You can choose to invoke the rune after rolling the d20."+
	"\n   If this attack hits, you can also spend and roll any number of your unspent Hit Dice and add the total rolled to the weapon's damage."+
	"\n   Once the rune has been invoked, it can't be invoked again until the next dawn.",
	description : "This sword with a carnelian engraved hilt adds my Con mod to damage rolls (min +1). Once per dawn after I roll to hit against a creature with it, I can invoke its blood rune and expend one HD to add to the to hit total. If this attack hits, I can expend any HD I have left and add them to the damage roll.",
	usages : 1,
	recovery : "dawn",
	additional : "invoke rune",
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "suffix",
		descriptionChange : ["replace", "sword"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /sword|scimitar|rapier/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges : {
		atkCalc : [
			function (fields, v, output) {
				if (v.isMeleeWeapon && /sword|scimitar|rapier/i.test(v.baseWeaponName) && /\bbloodshed\b/i.test(v.WeaponTextName)) {
					output.extraDmg += Math.max(1, Number(What("Con Mod")));
				}
			},
			'If I include the word "Bloodshed" in a the name of a sword, it will be treated as the magic weapon Bloodshed Blade, which adds my Constitution modifier (minimum of +1) to its damage rolls.'
		]
	}
};
MagicItemsList["crown of the wrath bringer"] = {
	name : "Crown of the Wrath Bringer",
	source : [["GotG", 111]],
	type : "wondrous item",
	rarity : "rare",
	attunement : true,
	descriptionFull : "This jagged iron circlet bears ornaments in the shape of the enemy rune. When worn, the crown glows with pale light as it draws upon the wearer's fury to strike opponents with vicious terror."+
	"\n   When you make an attack roll against a creature and hit it while wearing this crown, you can spend and roll one of your unspent Hit Dice. The creature takes extra psychic damage equal to the number rolled."+
	"\n   " + toUni("Invoking the Rune") + ". As an action, you can invoke the crown's rune to cast the fear spell (save DC 15) with it; the spell has a duration of 1 minute and doesn't require concentration. Once the rune has been invoked, it can't be invoked again until the next dawn.",
	description : "When I hit a creature with an attack roll while wearing this jagged icon circlet, I can spend one HD to have the attack deal that much extra psychic damage. As an action once per dawn, I can invoke its enemy rune to cast Fear (DC 15) with a duration of 1 minute without requiring concentration.",
	usages : 1,
	recovery : "dawn",
	additional : "Fear",
	fixedDC : 15,
	spellcastingBonus : [{
		name : "Fear",
		spells : ["fear"],
		selection : ["fear"],
		firstCol : 'oncelr'
	}],
	spellChanges : {
		"fear" : {
			duration : "1 min",
			changes : "I can cast Fear once per dawn without it requiring concentration."
		}
	}
};
MagicItemsList["delver's claws"] = {
	name : "Delver's Claws",
	source : [["GotG", 112]],
	type : "wondrous item",
	rarity : "rare",
	attunement : true,
	descriptionFull : "The back of this weatherworn leather glove is adorned with three large metal hooks shaped like a mole's claws. Stitched into the glove's palm is the mountain rune."+
	"\n   The glove is considered a simple melee weapon with the finesse and light properties, and it deals 1d4 slashing damage on a hit. While attuned to the glove, you gain a burrowing speed equal to your walking speed and blindsight to 15 feet."+
	"\n   " + toUni("Invoking the Rune") + "As an action, you can invoke the glove's rune to bolster yourself with the sturdiness of the earth. Spend and roll a number of your unspent Hit Dice up to a maximum equal to your proficiency bonus. You then regain a number of hit points equal to the total roll plus your Constitution modifier."+
	"\n   Once the rune has been invoked, it can't be invoked again until the next dawn.",
	description : "This weatherworn leather glove is a simple, finesse, light melee weapon, dealing 1d4 slashing damage. While attuned, I gain 15 ft blindsight and a burrow speed equal to my walking speed. As an action once per dawn, I can invoke its mountain rune to spend up to Prof Bonus HD to regain hp (total roll + Con mod).",
	weaponOptions : [{
		regExpSearch : /^(?=.*delver)(?=.*claw).*$/i,
		name : "Delver's Claws",
		source : [["GotG", 112]],
		ability : 1,
		type : "Simple",
		damage : [1, 4, "slashing"],
		range : "Melee",
		description : "Finesse, light",
		abilitytodamage : true,
		monkweapon : true,
		selectNow : true
	}],
	speed : { burrow : { spd : "walk", enc : "walk" } },
	vision : [["Blindsight", 15]],
	action : [["action", " (invoke rune)"]],
	usages : 1,
	recovery : "dawn",
	additional : "invoke rune"
};
MagicItemsList["glowrune pigment"] = {
	name : "Glowrune Pigment",
	source : [["GotG", 112]],
	type : "wondrous item",
	rarity : "rare",
	descriptionFull : "This set of 1d4 + 2 small paint pots contains pigments mixed from crushed luminescent gemstones. This magical paint bestows temporary magical gifts on creatures with runes drawn on their skin with this paint."+
	"\n   One paint pot contains enough pigment to paint one rune. A creature can spend 10 minutes to paint one of the following runes onto itself or another creature:"+
	"\n   " + toUni("Journey Rune") + ". Difficult terrain doesn't cost the painted creature extra movement."+
	"\n   " + toUni("Life Rune") + ". The painted creature gains 10 temporary hit points and has advantage on death saving throws."+
	"\n   " + toUni("Light Rune") + ". The painted creature gains darkvision to a range of 30 feet. If the painted creature already has darkvision from another source, the range of its darkvision increases by 30 feet."+
	"\n   " + toUni("Mountain Rune") + ". The painted creature is immune to being knocked prone and has advantage on Strength and Constitution saving throws."+
	"\n   " + toUni("Shield Rune") + ". The painted creature has advantage on Dexterity saving throws against effects that deal damage."+
	"\n   A creature can benefit from only one painted rune at a time, so a new rune painted on a creature has no effect unless the old one is removed first. The rune's benefits last for 8 hours or until the painted creature uses its action to wipe away the rune.",
	description : "This set of 1d4+2 paint pots can each be used to draw one rune on a creature in 10 min, which lasts for 8 hours: \u2022 No penalty from difficult terrain. \u2022 10 temp hp and adv. on death saves. \u2022 +30 ft darkvision. \u2022 Can't be knocked prone and adv. on Str saves and Con saves. \u2022 Adv. on Dex save vs. damaging effects."
};
var GotG_HarpOfGildedPlenty = [
	"This golden harp is sculpted in the image of the god Iallanis, depicted as a young cloud giant woman. When a creature comes within 5 feet of the harp, the instrument animates and is capable of speaking, singing, and playing by itself.",
	"Whenever you attempt to attune to the harp, you must first make either a DC 15 Charisma (Performance) check or a DC 20 Charisma (Persuasion) check to convince the harp that you are worthy, attuning to the harp on a success. If you fail, you can't attempt to attune to the harp again until the next dawn. Once you have successfully attuned to the harp, the harp resizes to suit you.",
	">>Stalwart Song<<. Whenever you make a Charisma check while attuned to the harp, you can treat a roll of 9 or lower on the die as a 10.",
	">>Feast of Plenty<<. If you spend 10 minutes playing the harp, you can cast the heroes' feast spell from it. Once this property is used, it can't be used again until 1d10 + 10 days have passed.",
	">>Soothing Melody<<. As an action, you can use the harp to cast the calm emotions spell (save DC 19). When the spell is cast using the harp, its duration increases to 1 hour, provided you maintain concentration on the spell. This property can be used five times, and it regains all uses at dawn.",
	">>Sentience<<. The harp is a sentient, chaotic good object with an Intelligence of 13, a Wisdom of 15, and a Charisma of 20. It has hearing and darkvision to a range of 120 feet.",
	"The harp can speak, read, and understand Common and Giant. It can also communicate telepathically with the creature attuned to it.",
	"The harp has a dramatic and pompous personality, taking extreme pride in the quality of music produced from its strings. If the harp is shorter than 6 feet tall, it bemoans its height."
];
MagicItemsList["harp of gilded plenty"] = {
	name : "Harp of Gilded Plenty",
	source : [["GotG", 112]],
	type : "wondrous item",
	rarity : "legendary",
	attunement : true,
	descriptionFull : GotG_HarpOfGildedPlenty.join("\n   ").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
	toNotesPage : [{
		name : "Features",
		note : desc(GotG_HarpOfGildedPlenty).replace(/>>(.*?)<</g, function(a, match) { return match.toUpperCase(); }).replace(/\bf(oo|ee)t\b/ig, "ft").replace(/your/g, "my").replace(/you are /ig, "I am ").replace(/(suit) you/ig, "$1 me").replace(/you /ig, "I ") + "\n\n" + sentientItemConflictTxt
	}],
	prerequisite : "To attune to the harp, you must first make either a DC 15 Charisma (Performance) check or a DC 20 Charisma (Persuasion) check to convince the harp that you are worthy. You can retry after the next dawn.",
	prereqeval : function() { return false; }, // so that everyone reads the prerequisite before adding the item
	description : "This sentient harp is dramatic and pompous, see notes. I can treat a roll of 9 or lower as a 10 for Charisma checks. I can cast Heroes' Feast by playing it for 10 min, but can't do so again until 1d10+10 days have passed. Five times per dawn, I can use it to cast Calm Emotions (DC 19) with a 1 hour duration.",
	extraLimitedFeatures : [{
		name : "Harp of Gilded Plenty: Calm Emotions",
		usages : 5,
		recovery : "dawn"
	}, {
		name : "Harp: Heroes' Feast",
		usages : 1,
		recovery : "Special",
		additional : "1d10+10 days"
	}],
	spellFirstColTitle : "Ch",
	fixedDC : 19,
	spellcastingBonus : [{
		name : "5\xD7 per dawn",
		spells : ["calm emotions"],
		selection : ["calm emotions"],
		firstCol : 1
	}, {
		name : "1\xD7 per 1d10+10 days",
		spells : ["heroes' feast"],
		selection : ["heroes' feast"],
		firstCol : "Sp"
	}]
};
MagicItemsList["lash of immolation"] = {
	name : "Lash of Immolation",
	source : [["GotG", 113]],
	type : "weapon (whip)",
	rarity : "rare",
	descriptionFull : "The handle of this dark leather whip bears the fire rune, and embers dance around the whip's tail."+
	"\n   You gain a +1 bonus to attack and damage rolls made with this weapon, and on a hit, the whip deals an extra 1d6 fire damage. When you score a critical hit with an attack using this whip, the target also has the restrained condition until the start of your next turn, as fiery bands lash around the target."+
	"\n   " + toUni("Invoking the Rune") + ". When you make an attack with the whip and hit, you can use your reaction to invoke the whip's rune. Doing so increases the extra fire damage dealt by the whip to 2d6."+
	"\n   Once the rune has been invoked, it can't be invoked again until the next dawn.",
	description : "This +1 dark leather whip ha embers dancing around its tail. It deals +1d6 fire damage. When I score a critical hit with it, the target is restrained until my next turn starts, as fiery bands lash around it. As a reaction once per dawn when I hit with it, I can invoke its fire rune to increase the fire damage to 2d6.",
	weight : 3,
	weaponOptions : [{
		baseWeapon : "whip",
		regExpSearch : /^(?=.*last)(?=.*immolation).*$/i,
		name : "Lash of Immolation",
		source : [["GotG", 113]],
		description : "Finesse, reach; +1d6 fire damage (1/dawn +2d6); Critical hit: restrained until my next turn starts",
		modifiers : [1, 1],
		selectNow : true
	}],
	action : [["reaction", " (invoke rune)"]],
	usages : 1,
	recovery : "dawn",
	additional : "invoke rune"
};
MagicItemsList["longbow of the healing hearth"] = {
	name : "Longbow of the Healing Hearth",
	nameAlt : typePF ? "" : "Healing Hearth", // shorter for the colourful spell sheet
	source : [["GotG", 113]],
	type : "weapon (longbow)",
	rarity : "legendary",
	attunement : true,
	descriptionFull : "This ivory longbow is inscribed with a prayer to the god Hiatea, the runes of which are entwined with gilded engravings of wheat stalks and deer antlers."+
	"\n   You gain a +3 bonus to attack and damage rolls made with this weapon. If you load no ammunition in the weapon, it produces its own, automatically creating one magic arrow when you pull back the string. The arrow created by the bow vanishes the instant after it hits or misses a target."+
	"\n   The bow has 8 charges for the following properties, which you can use while wielding the bow. The bow regains 1d4 + 1 charges daily at dawn."+
	"\n   " + toUni("Curative Arrow") + ". When you take the Attack action using the bow, you can expend 1 charge to replace one of your attacks with a blazing arrow of curative magic, which automatically hits one creature you can see within 150 feet of you. The target can then immediately spend and roll one of its unspent Hit Dice and regain a number of hit points equal to the roll plus your Wisdom modifier (minimum of +1)."+
	"\n   If the target has no unspent Hit Dice remaining, nothing happens. You can use a curative arrow only once per turn."+
	"\n   " + toUni("Spellcasting") + ". While holding the bow, you can use an action to expend 1 or more of its charges to cast one of the following spells from it (save DC 18): create food and water (1 charge), warding bond (2 charges), guardian of faith (3 charges).",
	description : "This +3 ivory longbow creates its own ammo if needed and has 8 charges, regaining 1d4+1 at dawn. Instead of one attack in my Attack action, I can use 1 charge to have a target I see in 150 ft use 1 HD to regain hp + my Wis mod. I can use charges to cast (DC 18): Create Food " + (typePF ? "\u0026" : "and") + " Water, Warding Bond, Guardian of Faith.",
	weight : 2,
	weaponOptions : [{
		baseWeapon : "longbow",
		regExpSearch : /^(?=.*longbow)(?=.*healing)(?=.*hearth).*$/i,
		name : "Longbow of the Healing Hearth",
		source : [["GotG", 113]],
		description : "Ammunition, heavy, two-handed; Creates own ammo",
		modifiers : [3, 3],
		ammo : "",
		selectNow : true
	}],
	usages : 8,
	recovery : "dawn",
	additional : "regains 1d4+1",
	fixedDC : 18,
	spellFirstColTitle : "Ch",
	spellcastingBonus : [{
		name : "1 charge",
		spells : ["create food and water"],
		selection : ["create food and water"],
		firstCol : 1
	}, {
		name : "2 charges",
		spells : ["warding bond"],
		selection : ["warding bond"],
		firstCol : 2
	}, {
		name : "3 charges",
		spells : ["guardian of faith"],
		selection : ["guardian of faith"],
		firstCol : 3
	}]
};
MagicItemsList["lucent destroyer"] = {
	name : "Lucent Destroyer",
	source : [["GotG", 113]],
	type : "weapon (musket)",
	rarity : "very rare",
	attunement : true,
	descriptionFull : "This magic weapon is a triple-barreled bronze musket. You gain a +1 bonus to attack and damage rolls made with it. It requires no ammunition, its damage is radiant instead of piercing, and it doesn't have the loading property. The base of the weapon is emblazoned with the light rune."+
	"\n   Additionally, while attuned to the weapon, you can cast dancing lights from the musket at will."+
	"\n   " + toUni("Invoking the Rune") + ". As an action, you can invoke the weapon's rune to cast the sunbeam spell (save DC 17) with it. Once the rune has been invoked, it can't be invoked again until the next dawn."+
	"\n\nIt's up to the DM to decide whether a character has proficiency with a firearm. Characters in most D\u0026D worlds wouldn't have such proficiency. During their downtime, characters can use the training rules in the Player's Handbook to acquire proficiency, assuming that they have enough ammunition to keep the weapons working while mastering their use.",
	description : "I gain a +1 bonus to attack and damage rolls made with this magical musket emblazoned with the light rune. It deals radiant damage and doesn't need to be loaded with ammunition. It allows me to cast Dancing Lights at will and Sunbeam (DC 17) once per dawn by invoking the rune.",
	weight : 10,
	weaponOptions : [{
		baseWeapon : "musket",
		regExpSearch : /^(?=.*lucent)(?=.*destroyer).*$/i,
		name : "Lucent Destroyer",
		source : [["GotG", 113]],
		damage : [1, 12, "radiant"],
		description : "Two-handed",
		modifiers : [1, 1],
		ammo : "",
		selectNow : true
	}],
	usages : 1,
	recovery : "dawn",
	additional : "invoke rune: Sunbeam",
	fixedDC : 17,
	spellcastingBonus : [{
		name : "At will",
		spells : ["dancing lights"],
		selection : ["dancing lights"],
		firstCol : "atwill"
	}, {
		name : "Once per dawn",
		spells : ["sunbeam"],
		selection : ["sunbeam"],
		firstCol : "oncelr"
	}]
};
MagicItemsList["mistral mantle"] = {
	name : "Mistral Mantle",
	source : [["GotG", 114]],
	type : "wondrous item",
	rarity : "very rare",
	attunement : true,
	descriptionFull : "This thick, fur-lined cloak has the frost rune stitched on the hem in silvery blue thread. Frigid wind swirls around the cloak, regardless of the weather."+
	"\n   While wearing this cloak, you have resistance to cold damage. Additionally, when you move within 5 feet of a creature, you can cause the cloak's cold wind to buffet the creature. The creature must succeed on a DC 14 Dexterity saving throw or take 1d6 cold damage and have the prone condition. A creature can be affected by the mantle only once during a turn."+
	"\n   " + toUni("Invoking the Rune") + ". As an action, you can invoke the mantle's rune to cast the sleet storm spell (save DC 14) with it. When you use the mantle to cast the spell, the area of the spell isn't difficult terrain for you, and you can see through the storm, ignoring the normal penalties of a heavily obscured area."+
	"\n   Once the rune has been invoked, it can't be invoked again until the next dawn.",
	description : "This thick, fur-lined cloak gives me cold resistance. When I move within 5 ft of a creature, I can have it make a DC 14 Dex save once per turn or take 1d6 cold damage and become prone. As an action once per dawn, I can invoke its frost rune to cast Sleet Storm (DC 14), which I can move and see through normally.",
	dmgres : ["Cold"],
	fixedDC : 14,
	spellcastingBonus : [{
		name : "Sleet Storm",
		spells : ["sleet storm"],
		selection : ["sleet storm"],
		firstCol : 'oncelr'
	}],
	usages : 1,
	recovery : "dawn",
	additional : "Sleet Storm"
};
MagicItemsList["nimbus coronet"] = {
	name : "Nimbus Coronet",
	source : [["GotG", 114]],
	type : "wondrous item",
	rarity : "very rare",
	attunement : true,
	descriptionFull : "The design of this bronze circlet resembles swirling clouds. At its center is set a deep-blue stone, upon which is inscribed the cloud rune."+
	"\n   While wearing this circlet, you take no damage from falling. Additionally, as a bonus action, you and everything you are wearing or carrying can teleport to an unoccupied space you can see within 15 feet of yourself, reappearing in a puff of shimmering clouds."+
	"\n   " + toUni("Invoking the Rune") + ". As an action, you can invoke the circlet's rune to assume a cloudlike form. The form lasts for 1 minute, until you are incapacitated, or until you dismiss it (no action required)."+
	"\n   While in cloud form, you have a flying speed of 60 feet and resistance to bludgeoning, piercing, and slashing damage."+
	"\n   Once the rune has been invoked, it can't be invoked again until the next dawn.",
	description : "I take no damage from falling while wearing this bronze circlet. As a bonus action, I can use it to teleport to an empty space I see within 15 ft. As an action once per dawn, I can invoke its cloud rune to become cloudlike for up to 1 minute. I then gain 60 ft fly speed, bludgeoning, slashing and piercing resistance.",
	action : [["bonus action", " (teleport 15 ft)"], ["action", " (invoke rune)"]],
	savetxt : { immune : ["falling damage"] },
	usages : 1,
	recovery : "dawn",
	additional : "invoke rune"
};
MagicItemsList["orb of skoraeus"] = {
	name : "Orb of Skoraeus",
	source : [["GotG", 114]],
	type : "wondrous item",
	rarity : "legendary",
	attunement : true,
	prerequisite : "Requires attunement by a spellcaster",
	prereqeval : function(v) { return v.isSpellcaster; },
	descriptionFull : "Said to be infused with the wisdom and power of the god Skoraeus, this polished stone orb is veined with iridescent crystal that seems to glow from within. The orb is 8 inches in diameter and weighs 8 pounds, making it a palm-sized trinket for a stone giant but a more unwieldy item for a Medium creature to use."+
	"\n   While holding this orb, you can use it as a spellcasting focus for your spells. You also gain the following benefits:"+
	"\n   " + toUni("Abundant Components") + ". The orb has 3 charges and regains all expended charges at dawn. When you cast a spell while holding this orb, you can expend up to 3 charges to ignore the spell's material components with a gold piece cost, up to 300 gp per charge expended."+
	"\n   " + toUni("Astute Mind") + ". You gain a +2 bonus to any Constitution saving throw you make to maintain your concentration on a spell."+
	"\n   " + toUni("Divine Sight") + ". You can see normally in darkness, both magical and nonmagical, to a distance of 120 feet.",
	description : 'I can use this polished stone orb as a spellcasting focus that grants me +2 to concentration saves and "Divine Sight", the ability to see in normal and magical darkness out to 120 ft. It has 3 charges per dawn. When I cast a spell, I can expend charges to ignore 300 gp worth of material components per charge used.',
	weight : 8,
	usages : 3,
	recovery : "dawn",
	vision : [["Divine Sight", 120]],
	savetxt : {
		text : ["+2 on concentration saves"]
	}
};
MagicItemsList["prehistoric figurine of wondrous power"] = {
	name : "Prehistoric Figurine of Wondrous Power",
	source : [["GotG", 114]],
	type : "wondrous item",
	descriptionFull : "Larger and more roughly hewn than typical figurines of wondrous power, these statuettes depict dinosaurs and related creatures from the earliest days of the world."+
	"\n   As an action, you can throw a prehistoric figurine of wondrous power to a point on the ground within 60 feet of yourself while speaking a command word, whereupon the figurine magically transforms into a living creature. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature."+
	"\n   The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions. See the Monster Manual for the creature's statistics."+
	"\n   The creature exists for a duration specific to each figurine. At the end of the duration, the creature reverts to its statuette form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until a certain amount of time has passed, as specified in the figurine's description.",
	description : "As an action, I can speak the command word and throw one or more statuettes to an unoccupied space within 60 ft where it becomes a specific creature for a certain amount of time. It is friendly, understands my languages, and obeys my commands.",
	action : [["action", ""]],
	choices : ["Carnelian Triceratops", "Jasper Tyrannosaurus Rex", "Kyanite Pteranodon", "Pyrite Plesiosaurus"],
	"carnelian triceratops" : {
		rarity : "very rare",
		description : "As an action, I can speak the command word and throw this carnelian statuette to an unoccupied space within 60 ft, where it becomes a triceratops for 6 hours, until I use the command word again, or it reaches 0 HP. It can be ridden as a mount, is friendly, understands my languages, and obeys my commands.",
		descriptionLong : "As an action, I can speak the command word and throw this carnelian statuette of a triceratops to an unoccupied space within 60 ft, where it becomes a triceratops for up to 6 hours, until I use an action to repeat the command word, or it reaches 0 HP. It can be ridden as a mount, is friendly to me and my allies, understands my languages, and obeys my spoken commands. If I issue no commands, the triceratops defends itself but takes no other actions. When it reverts back to a figurine, it can't be used again until 10 days have passed.",
		descriptionFull : "Larger and more roughly hewn than typical figurines of wondrous power, this carnelian statuette depicts a triceratops."+
		"\n   As an action, you can throw the prehistoric figurine of wondrous power to a point on the ground within 60 feet of yourself while speaking a command word, whereupon the figurine magically transforms into a living triceratops. If the space where the triceratops would appear is occupied by other creatures or objects, or if there isn't enough space for the triceratops, the figurine doesn't become a triceratops."+
		"\n   The triceratops is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the triceratops defends itself but takes no other actions. It can be ridden as a mount. See the Monster Manual for the triceratops's statistics."+
		"\n   The triceratops exists for up to 6 hours. At the end of the duration, the triceratops reverts to its statuette form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the triceratops becomes a figurine again, its property can't be used again until 10 days have passed.",
		usages : 1,
		recovery : "10 days"
	},
	"jasper tyrannosaurus rex" : {
		rarity : "legendary",
		description : "As an action, I can speak the command word and throw this jasper statuette to an unoccupied space within 60 ft, where it becomes a T-rex for up to 1 hour, until I use the command word again, or it reaches 0 HP. It is friendly, obeys my commands, and understands my languages. I can lose control of it, see notes.",
		descriptionLong : "As an action, I can speak the command word and throw this jasper statuette of a T-rex to an unoccupied space within 60 ft, where it becomes a T-rex for up to 1 hour, until I use an action to repeat the command word, or it reaches 0 HP. It is friendly to me and my allies, understands my languages, and obeys my spoken commands. If I issue no commands, the creature defends itself but takes no other actions. When it reverts back to a figurine, it can't be used again until 14 days have passed. Whenever I command it (even if reverting back), roll a d20. On a 1, I lose control and it becomes hostile until it drops to 0 hp.",
		descriptionFull : "Larger and more roughly hewn than typical figurines of wondrous power, this jasper statuette depicts a tyrannosaurus rex."+
		"\n   As an action, you can throw the prehistoric figurine of wondrous power to a point on the ground within 60 feet of yourself while speaking a command word, whereupon the figurine magically transforms into a living tyrannosaurus rex. If the space where the tyrannosaurus rex would appear is occupied by other creatures or objects, or if there isn't enough space for the tyrannosaurus rex, the figurine doesn't become a tyrannosaurus rex."+
		"\n   The tyrannosaurus rex is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the tyrannosaurus rex defends itself but takes no other actions. See the Monster Manual for the tyrannosaurus rex's statistics."+
		"\n   The tyrannosaurus rex exists for up to 1 hour. At the end of the duration, the tyrannosaurus rex reverts to its statuette form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the tyrannosaurus rex becomes a figurine again, its property can't be used again until 14 days have passed."+
		"\n   Whenever you command the figurine while it's in tyrannosaurus rex form (including commanding it to revert to figurine form), you must roll a d20. On a 1, you lose control of the figurine, and it becomes hostile to you and your companions until it is reduced to 0 hit points, at which point it reverts to figurine form.",
		usages : 1,
		recovery : "14 days",
		toNotesPage : [{
			name : "Lose Control",
			note : desc("Whenever I command the figurine while it's in tyrannosaurus rex form (including commanding it to revert to figurine form), I must roll a d20. On a 1, I lose control of the figurine, and it becomes hostile to me and my companions until it is reduced to 0 hit points, at which point it reverts to figurine form.")
		}]
	},
	"kyanite pteranodon" : {
		rarity : "rare",
		description : "As an action, I can speak the command word and throw this kyanite statuette to an unoccupied space within 60 ft, where it becomes a pteranodon for 8 hours, until I use the command word again, or it reaches 0 HP. It can be ridden as a mount, is friendly, understands my languages, and obeys my commands.",
		descriptionLong : "As an action, I can speak the command word and throw this kyanite statuette of a pteranodon to an unoccupied space within 60 ft, where it becomes a pteranodon for up to 8 hours, until I use an action to repeat the command word, or it reaches 0 HP. It can be ridden as a mount if I'm Medium or smaller, is friendly to me and my allies, understands my languages, and obeys my spoken commands. If I issue no commands, the creature defends itself but takes no other actions. When it reverts back to a figurine, it can't be used again until 7 days have passed.",
		descriptionFull : "Larger and more roughly hewn than typical figurines of wondrous power, this kyanite statuette depicts a pteranodon."+
		"\n   As an action, you can throw the prehistoric figurine of wondrous power to a point on the ground within 60 feet of yourself while speaking a command word, whereupon the figurine magically transforms into a living pteranodon. If the space where the pteranodon would appear is occupied by other creatures or objects, or if there isn't enough space for the pteranodon, the figurine doesn't become a pteranodon."+
		"\n   The pteranodon is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the pteranodon defends itself but takes no other actions. If your size is Medium or smaller, you can ride the pteranodon as a mount. See the Monster Manual for the pteranodon's statistics."+
		"\n   The pteranodon exists for up to 8 hours. At the end of the duration, the pteranodon reverts to its statuette form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the pteranodon becomes a figurine again, its property can't be used again until 7 days have passed.",
		usages : 1,
		recovery : "7 days"
	},
	"pyrite plesiosaurus" : {
		rarity : "uncommon",
		description : "As an action, I can speak the command word and throw this pyrite statuette to an unoccupied space within 60 ft, where it becomes a plesiosaurus for 12 hours, until I use the command word again, or it reaches 0 HP. It can be ridden as a mount, is friendly, understands my languages, and obeys my commands.",
		descriptionLong : "As an action, I can speak the command word and throw this pyrite statuette of a plesiosaurus to an unoccupied space within 60 ft, where it becomes a plesiosaurus for up to 12 hours, until I use an action to repeat the command word, or it reaches 0 HP. It can be ridden as a mount, is friendly to me and my allies, understands my languages, and obeys my spoken commands. If I issue no commands, the creature defends itself but takes no other actions. When it reverts back to a figurine, it can't be used again until 4 days have passed. While I'm riding it, I can use it to cast Water Breathing at will.",
		descriptionFull : "Larger and more roughly hewn than typical figurines of wondrous power, this pyrite statuette depicts a plesiosaurus."+
		"\n   As an action, you can throw the prehistoric figurine of wondrous power to a point on the ground within 60 feet of yourself while speaking a command word, whereupon the figurine magically transforms into a living plesiosaurus. If the space where the plesiosaurus would appear is occupied by other creatures or objects, or if there isn't enough space for the plesiosaurus, the figurine doesn't become a plesiosaurus."+
		"\n   The plesiosaurus is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the plesiosaurus defends itself but takes no other actions. It can be ridden as a mount. While you are riding the plesiosaurus, you can use it to cast water breathing at will. See the Monster Manual for the plesiosaurus's statistics."+
		"\n   The plesiosaurus exists for up to 12 hours. At the end of the duration, the plesiosaurus reverts to its statuette form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the plesiosaurus becomes a figurine again, its property can't be used again until 4 days have passed.",
		usages : 1,
		recovery : "4 days",
		spellcastingBonus : [{
			name : "At will while riding it",
			spells : ["water breathing"],
			selection : ["water breathing"],
			firstCol : "atwill"
		}]
	}
};
MagicItemsList["reaper's scream"] = {
	name : "Reaper's Scream",
	source : [["GotG", 115]],
	type : "weapon (morningstar)",
	rarity : "legendary",
	attunement : true,
	descriptionFull : "The spikes of this iron morningstar glow with sickly, pale light. The death rune is inscribed on its shaft and inlaid with pearl."+
	"\n   You gain a +2 bonus to attack and damage rolls made with this weapon, and attacks with this weapon deal necrotic damage instead of piercing damage."+
	"\n   When you attack a creature with this weapon and roll a 20 on the attack roll, you gain 10 temporary hit points. Any creature that hits you with a melee attack while you have 1 or more of these temporary hit points takes 10 necrotic damage."+
	"\n   " + toUni("Invoking the Rune") + ". As a bonus action, you can invoke the weapon's rune, unleashing the screams of every creature slain by the weapon in one cacophonous burst. Each creature of your choice within 60 feet of you must succeed on a DC 15 Wisdom saving throw or have the stunned condition until the start of your next turn."+
	"\n   Once the rune has been invoked, it can't be invoked again until the next dawn.",
	description : "This +2 morningstar deals necrotic damage. When I roll a 20 to hit vs. a creature, I gain 10 " + (typePF ? "temp" : "temporary") + " hp. Melee attackers that hit me take 10 necrotic " + (typePF ? "dmg" : "damage") + " while these last. As a bonus action once per dawn, I can invoke its death rune to have chosen " + (typePF ? "" : "creatures ") + "within 60 ft make a Wis save DC 15 or be stunned until my next turn starts.",
	weight : 4,
	weaponOptions : [{
		baseWeapon : "morningstar",
		regExpSearch : /^(?=.*reaper)(?=.*scream).*$/i,
		name : "Reaper's Scream",
		source : [["GotG", 115]],
		description : "On 20 to hit: 10 temp hp (see magic item)",
		modifiers : [2, 2],
		selectNow : true
	}],
	action : [["bonus action", " (invoke rune)"]],
	usages : 1,
	recovery : "dawn",
	additional : "invoke rune"
};
MagicItemsList["ring of amity"] = {
	name : "Ring of Amity",
	source : [["GotG", 115]],
	type : "ring",
	rarity : "very rare",
	attunement : true,
	descriptionFull : "This ring is carved from hematite and bears an engraving of the friend rune."+
	"\n   When you first attune to this ring, you can touch one willing creature and form a magical bond between the two of you. While this bond lasts, whenever you are subjected to a spell or magical effect that restores hit points, the bonded creature also receives the benefits of the spell or effect."+
	"\n   You can bond with a different creature whenever you finish a long rest, provided that you can touch the creature and the creature is willing."+
	"\n   A creature can benefit from only one ring of amity's bond at a time. The bond ends if either you or the creature travels to a different plane of existence, if you bond with a different creature at the end of a long rest, or if you sever the bond as a bonus action."+
	"\n   " + toUni("Invoking the Rune") + ". When the bonded creature hits a target with an attack roll, you can use your reaction to invoke the ring's rune if you are within 60 feet of the bonded creature. The bonded creature's attack is then turned into a critical hit."+
	"\n   Once the rune has been invoked, it can't be invoked again until the next dawn.",
	description : "This hematite ring allows me to bond to one willing creature I touch, which I can change every long rest. When a magical effect restores my hp, my bond also benefits from this effect. As a reaction once per dawn when my bond is within 60 ft and hits an attack, I can invoke the ring's friend rune to make it a critical hit.",
	descriptionLong : "This hematite ring allows me to bond to one willing creature I touch, which I can change every long rest. A creature can only benefit from one such bond at the same time. The bond ends if we are no longer on the same plane, if I bond with another, or if I sever it as a bonus action. While this bond lasts, whenever I'm subjected to a spell or magical effect that restores hp, the bonded creature also receives the benefits of the spell or effect. As a reaction once per dawn when my bond is within 60 ft and hits with an attack roll, I can invoke the ring's friend rune to turn the hit into a critical hit.",
	action : [["reaction", " (invoke rune)"]],
	usages : 1,
	recovery : "dawn",
	additional : "invoke rune"
};
MagicItemsList["sanctum amulet"] = {
	name : "Sanctum Amulet",
	source : [["GotG", 116]],
	type : "wondrous item",
	rarity : "very rare",
	attunement : true,
	descriptionFull : "A black opal pendant hangs at the base of this pearlescent chain. The sacred rune is inscribed on the back of the pendant."+
	"\n   While wearing this item, you have resistance to necrotic damage. Additionally, you can cast the spare the dying cantrip using either an action or a bonus action."+
	"\n   " + toUni("Invoking the Rune") + ". When a creature you can see within 60 feet of you is reduced to 0 hit points as a result of taking damage, you can use your reaction to invoke the item's rune, causing the pendant to flash with pale light. The creature then instead drops to 1 hit point."+
	"\n   Once the rune has been invoked, it can't be invoked again until the next dawn.",
	description : "While wearing this black opal pendant on a pearlescent chain, I have resistance to necrotic damage and can cast Spare the Dying as an action or bonus action. As a reaction once per dawn when I see a creature within 60 ft drop to 0 hp by damage, I can invoke the pendant's sacred rune to restore it to 1 hp.",
	dmgres : ["Necrotic"],
	spellcastingBonus : [{
		name : "Spare the Dying",
		spells : ["spare the dying"],
		selection : ["spare the dying"],
		firstCol : 'atwill'
	}],
	spellChanges : {
		"spare the dying" : {
			time : "1 a/bns",
			changes : "I can cast Spare the Dying either as an action or as a bonus action."
		}
	},
	action : [["reaction", " (invoke rune)"]],
	usages : 1,
	recovery : "dawn",
	additional : "invoke rune"
};
MagicItemsList["shield of the blazing dreadnought"] = {
	name : "Shield of the Blazing Dreadnought",
	source : [["GotG", 116]],
	type : "shield",
	rarity : "legendary",
	attunement : true,
	descriptionFull : "Modeled after the formidable spiked tower shields wielded by some fire giants, this iron shield emanates a constant warmth."+
	"\n   You can use a bonus action to activate the shield, causing glowing lava to flow through the shield's grooves for 1 minute. While the shield is active, you gain the following benefits:"+
	"\n   " + toUni("Blazing Soul") + ". You have immunity to fire damage."+
	"\n   " + toUni("Cleansing Fire") + ". As an action, you can cause the shield to flare with the cleansing fire of the god Surtur. Choose one creature you can see within 30 feet of yourself (you can choose yourself). One disease or condition of your choice affecting this creature ends immediately; the condition can be blinded, charmed, deafened, or poisoned."+
	"\n   " + toUni("Shield Bash") + ". When you take the Attack action on your turn, you can replace one of your attacks with a shield bash, targeting one creature you can see within 5 feet of yourself. The target must make a Strength saving throw (DC equals 8 + your proficiency bonus + your Strength modifier). On a failed save, the target takes 3d6 bludgeoning damage plus 3d6 fire damage and is knocked prone. On a successful save, the target takes half as much damage only. You can use Shield Bash only once per turn."+
	"\n   Once the shield has been activated, it can't be activated again until the next dawn.",
	description : "As a bonus action once per dawn, I can activate this iron shield to grant me the following for 1 minute: \u2022 Immune to fire. \u2022 As an action, I can remove disease, blinded, charmed, deafened, or poisoned from myself a creature I can see within 30 ft (Cleansing Fire). \u2022 I can make a shield bash attack once per turn (see attack).",
	descriptionLong : "As a bonus action once per dawn, I can activate this iron shield to grant me the following benefits for 1 minute: \u2022 Blazing Soul: Immunity to fire damage."+
	"\n\u2022 Cleansing Fire: As an action, I can remove a disease from myself or a creature I can see within 30 ft or the blinded, charmed, deafened, or poisoned condition."+
	"\n\u2022 Shield Bash: When I take the Attack action on my turn, I can replace one attack with a shield bash to deal 3d6 bludgeoning and 3d6 fire damage and knock prone one creature within 5 ft. It can make a Str save (DC 8 + Prof B. + Str mod) to take half the damage only.",
	weight : 6,
	shieldAdd : "Shield of the Blazing Dreadnought",
	savetxt : { immune : ["fire (while Blazing Dreadnought active)"] },
	action : [
		["bonus action", " (activate)"],
		["action", "Cleansing Fire (while Blazing Dreadnought active)"],
	],
	usages : 1,
	recovery : "dawn",
	additional : "activate",
	weaponOptions : [{
		regExpSearch : /^(?=.*blazing)(?=.*dreadnought)(?=.*shield).*$/i,
		name : "Blazing Dreadnought Shield Bash",
		source : [["GotG", 116]],
		ability : 1,
		type : 'AlwaysProf',
		damage : ['3d8 Fire + 3d8', '', 'bludgeoning'],
		range : "Melee",
		description : "Str save for half damage; If failed, also knocked prone; Once per Attack action while shield is active",
		abilitytodamage : false,
		dc : true,
		isNotWeapon : true,
		selectNow : true
	}]
};
MagicItemsList["staff of the rooted hills"] = {
	name : "Staff of the Rooted Hills",
	source : [["GotG", 116]],
	type : "staff",
	rarity : "rare",
	attunement : true,
	descriptionFull : "The hill rune is carved into this gnarled wooden staff. The staff magically resizes to match the height of any creature that attunes to it."+
	"\n   The staff can be wielded as a magic quarterstaff that grants a +1 bonus to attack and damage rolls made with it. The first time you hit any creature with the staff on your turn, the creature must succeed on a DC 12 Strength saving throw or be restrained by spectral vines until the start of your next turn."+
	"\n   " + toUni("Invoking the Rune") + ". As an action, you can invoke the staff's rune to cast either hold person (save DC 12) or speak with plants with the staff. When you cast hold person using the staff, the target is wreathed in spectral vines."+
	"\n   Once the rune has been invoked to cast either spell, it can't be invoked again until the next dawn.",
	description : "A creature hit with this +1 quarterstaff must make a DC 12 Str save or be restrained by spectral vines until my next turn starts. As an action once per dawn, I can invoke its hill rune to cast either Hold Person (DC 12) or Speak with Plants with it. The target of this Hold Person is wreathed in spectral vines.",
	weight : 4,
	weaponOptions : [{
		baseWeapon : "quarterstaff",
		regExpSearch : /^(?=.*staff)(?=.*rooted)(?=.*hills).*$/i,
		name : "Staff of the Rooted Hills",
		source : [["GotG", 116]],
		description : "Versatile (1d8); On hit, DC 12 Str save or restrained until my next turn starts",
		modifiers : [1, 1],
		selectNow : true
	}],
	usages : 1,
	recovery : "dawn",
	additional : "Hold Person or Speak with Plants",
	fixedDC : 12,
	spellFirstColTitle : "Ch",
	spellcastingBonus : [{
		name : "Hold Person",
		spells : ["hold person"],
		selection : ["hold person"],
		firstCol : 1
	}, {
		name : "Speak with Plants",
		spells : ["speak with plants"],
		selection : ["speak with plants"],
		firstCol : 1
	}]
};
MagicItemsList["stonebreaker's breastplate"] = {
	name : "Stonebreaker's Breastplate",
	source : [["GotG", 116]],
	type : "armor (breastplate)",
	rarity : "legendary",
	attunement : true,
	descriptionFull : "This breastplate is made from marbled granite, though it feels no heavier than a typical metal breastplate. Its chest is emblazoned with the stone rune."+
	"\n   While wearing this breastplate, you have resistance to bludgeoning, piercing, and slashing damage and are immune to being knocked prone."+
	"\n   " + toUni("Invoking the Rune") + ". As an action, you can invoke the breastplate's rune to cast the wall of stone spell (save DC 14) with it. When you cast the spell in this way, you have advantage on saving throws made to maintain concentration on the spell."+
	"\n   Once the rune has been invoked, it can't be invoked again until the next dawn.",
	description : "While wearing this marbled granite breastplate, I have resistance to bludgeoning, piercing, and slashing damage and can't be knocked prone. As an action once per dawn, I can invoke its stone rune to cast Wall of Stone (DC 14) with it. It also grants me advantage on concentration saves for the spell cast in this way.",
	armorAdd : { select : "Stonebreaker's Breastplate", options : ["Stonebreaker's Breastplate"] },
	weight : 20,
	dmgres : ["Bludgeoning", "Slashing", "Piercing"],
	savetxt : { immune : ["knocked prone"] },
	action : [["action", ""]],
	fixedDC : 14,
	spellcastingBonus : [{
		name : "Wall of Stone",
		spells : ["wall of stone"],
		selection : ["wall of stone"],
		firstCol : "oncelr"
	}],
	usages : 1,
	recovery : "dawn",
	additional : "Wall of Stone"
};
MagicItemsList["thunderbuss"] = {
	name : "Thunderbuss",
	source : [["GotG", 116]],
	type : "weapon (pistol)",
	rarity : "very rare",
	attunement : true,
	descriptionFull : "This magic ranged weapon is a flared pistol with the storm rune engraved along the barrel. You gain a +1 bonus to attack and damage rolls made with it. It requires no ammunition, its damage is thunder instead of piercing, and it doesn't have the loading property."+
	"\n   " + toUni("Invoking the Rune") + ". As a bonus action, you can invoke the weapon's rune to launch a ball of energy to a point you can see within 30 feet of yourself. The energy then detonates into a 10-foot-radius sphere of turbulent wind and thunder centered on that point, and each creature in that sphere must make a DC 14 Constitution saving throw. On a failed save, a creature takes 3d6 thunder damage, and it can't take reactions until the end of your next turn. On a successful save, a creature takes half as much damage only."+
	"\n   Once the rune has been invoked, it can't be invoked again until the next dawn."+
	"\n\nIt's up to the DM to decide whether a character has proficiency with a firearm. Characters in most D\u0026D worlds wouldn't have such proficiency. During their downtime, characters can use the training rules in the Player's Handbook to acquire proficiency, assuming that they have enough ammunition to keep the weapons working while mastering their use.",
	description : "This +1 pistol deals thunder damage and requires loading nor ammunition. As a bonus action once per dawn, I can invoke its storm rune on a point within 30 ft. All creatures in a 10-ft radius must make a DC 14 Con save or take 3d6 thunder damage and no reactions until my next turn ends. Only half damage if saved.",
	weight : 3,
	weaponOptions : [{
		baseWeapon : "pistol",
		regExpSearch : /thunderbuss/i,
		name : "Thunderbuss",
		source : [["GotG", 116]],
		damage : [1, 10, "thunder"],
		description : "",
		modifiers : [1, 1],
		ammo : "",
		selectNow : true
	}],
	usages : 1,
	recovery : "dawn",
	additional : "invoke rune",
	action : [["bonus action", " (invoke rune)"]]
};
MagicItemsList["war horn of valor"] = {
	name : "War Horn of Valor",
	source : [["GotG", 117]],
	type : "wondrous item",
	rarity : "rare",
	descriptionFull : "This brass war horn is engraved with the war rune, which glows purple when the horn is blown."+
	"\n   You can blow the horn as a bonus action. When you do, if you have the frightened condition, you immediately end that condition on yourself. You also have advantage on saving throws against being frightened until the start of your next turn."+
	"\n   " + toUni("Invoking the Rune") + ". When you blow the horn, you can also invoke the rune, imbuing the horn's deep call with protective magic that affects creatures of your choice within 30 feet of yourself. You and all affected creatures gain a +1 bonus to AC until the start of your next turn."+
	"\n   Once the rune has been invoked, it can't be invoked again until the next dawn.",
	description : "As a bonus action, I can blow this brass war horn with the war rune to stop being frightened and gain adv. on saves against being frightened until my next turn starts. Once per dawn when I blow it, I can also invoke its rune, imbuing all chosen creatures within 30 ft with a +1 bonus to AC until my next turn starts.",
	action : [["bonus action", ""]],
	usages : 1,
	recovery : "dawn",
	additional : "invoke rune"
};
MagicItemsList["wayfarer's boots"] = {
	name : "Wayfarer's Boots",
	source : [["GotG", 117]],
	type : "wondrous item",
	rarity : "rare",
	attunement : true,
	descriptionFull : "This pair of boots is made of durable cloth, with the journey rune stitched in golden thread above each heel. While you are wearing this item, your walking speed increases by 10 feet, and you have advantage on Wisdom (Survival) checks."+
	"\n   " + toUni("Invoking the Runes") + ". As a bonus action, you can invoke the boots' runes to cast the expeditious retreat spell with them. Once the runes have been invoked, they can't be invoked again until the next dawn.",
	description : "While I'm wearing this pair of durable cloth boots with the journey rune stitched in golden thread above each heel, I have +10 ft walking speed and advantage on Wisdom (Survival) checks. As a bonus action once per dawn, I can invoke the boots' runes to cast Expeditious Retreat with them.",
	speed : { walk : { spd : "+10", enc : "+10" } },
	advantages : [["Survival", true]],
	spellcastingBonus : [{
		name : "Expeditious Retreat",
		spells : ["expeditious retreat"],
		selection : ["expeditious retreat"],
		firstCol : "oncelr"
	}],
	usages : 1,
	recovery : "dawn",
	additional : "Expeditious Retreat"
};
MagicItemsList["wyrmreaver gauntlets"] = {
	name : "Wyrmreaver Gauntlets",
	source : [["GotG", 117]],
	type : "wondrous item",
	rarity : "very rare",
	attunement : true,
	descriptionFull : "Originally crafted for ground-bound giant brawlers to fight against dragons and other enormous predators of the sky, these studded gauntlets are engraved with the dragon rune."+
	"\n   While you are wearing these gauntlets, your unarmed strike deals an additional 1d6 force damage on a hit. Additionally, whenever you finish a long rest, choose one of the following damage types: acid, cold, fire, lightning, or poison. You have resistance to the chosen damage type until you finish another long rest."+
	"\n   " + toUni("Invoking the Runes") + ". As a bonus action, you can invoke the gauntlets' runes and summon two enormous spectral fists that envelop the gauntlets and mimic your hand motions. The fists can also launch themselves to strike distant opponents, returning immediately to your space after they hit or miss."+
	"\n   The fists last for 1 minute or until you are incapacitated. While the spectral fists are active, unarmed strikes you make on your turn have a reach of 30 feet, and when you hit a creature with an opportunity attack made with your unarmed strike, the creature must succeed on a Strength saving throw (DC equals 8 + your proficiency bonus + your Strength modifier) or have the prone condition."+
	"\n   Once the runes have been invoked, they can't be invoked again until the next dawn.",
	description : "+1d6 force damage to unarmed strikes. Each long rest, choose a resistance it grants me: acid, cold, fire, lightning, or poison. As a bonus action once per dawn, invoke the rune for 1 min: 30 ft range unarmed strikes, target hit with opportunity attacks with it must make Str save DC 8+Prof B.+Str mod or be knocked prone.",
	calculate : "event.value = (typePF ? '' : 'These gauntlets add ') + '+1d6 force damage to unarmed strikes. Each long rest, choose a resistance it grants me: acid, cold, fire, lightning, or poison. As a bonus action once per dawn, invoke the rune for 1 min: 30 ft range unarmed strikes, target hit with opportunity attacks with it must make Str save DC ' + (8 + Number(How('Proficiency Bonus')) + Number(What('Str Mod'))) + ' (8+Prof+Str) or be knocked prone.';",
	dmgres : ["acid,cold,fire,lightn.,or poison"],
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.baseWeaponName == "unarmed strike") {
					fields.Description += (fields.Description ? '; ' : '') + '+1d6 force damage; Opportunity attack: Str save or prone';
				};
			},
			"My unarmed strike deals an additional 1d6 force damage on a hit."
		]
	},
	action : [["bonus action", " (invoke rune)"]],
	usages : 1,
	recovery : "dawn",
	additional : "invoke rune"
};
MagicItemsList["zephyr armor"] = {
	name : "Zephyr Armor",
	source : [["GotG", 117]],
	type : "armor (light)",
	rarity : "rare",
	attunement : true,
	descriptionFull : "This fine set of white-and-silver armor bears the wind rune upon its chest."+
	"\n   While wearing this armor, you have advantage on Dexterity (Acrobatics) checks and Dexterity saving throws as your movements are bolstered by gentle currents of wind."+
	"\n   " + toUni("Invoking the Rune") + ". As an action, you can invoke the armor's rune to cast the wind wall spell (save DC 15) with it. Once the rune has been invoked, it can't be invoked again until the next dawn.",
	description : "While wearing this white-and-silver armor with the wind rune on its chest, I have advantage on Dex (Acrobatics) checks and Dexterity saves as my movements are bolstered by gentle currents of wind. As an action once per dawn, I can invoke the armor's rune to cast Wind Wall (DC 15) with it.",
	chooseGear : {
		type : "armor",
		prefixOrSuffix : "brackets",
		descriptionChange : ["prefix", "armor"],
		itemName1stPage : ["between", "Zephyr", "Armor"],
		excludeCheck : function (inObjKey, inObj) {
			return !/light/i.test(inObj.type);
		}
	},
	advantages : [["Acrobatics", true], ["Dexterity", true]],
	savetxt : { text : ["Adv. on Dex saves"] },
	fixedDC : 13,
	spellcastingBonus : [{
		name : "Wind Wall",
		spells : ["wind wall"],
		selection : ["wind wall"],
		firstCol : "oncelr"
	}],
	usages : 1,
	recovery : "dawn",
	additional : "Wind Wall"
};
