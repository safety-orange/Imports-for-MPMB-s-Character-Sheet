var iFileName = "ua_20210414_Draconic-Options.js";
RequiredSheetVersion("13.1.14");
// This file adds the content from the Unearthed Arcana 2021: Draconic Options article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:DO"] = {
	name : "Unearthed Arcana: Draconic Options",
	abbreviation : "UA:DO",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2021/downloads/Unearthed-Arcana-2021-Draconic-Options.pdf",
	date : "2021/04/14"
};

// Draconic Races
var UADO_dragonborns_add = function () { // New dragonborn variants
	var objDragonborns = {
		Chromatic : {
			regExpSearch : /^(?=.*chromatic)(?=.*dragonborn).*$/i,
			source : [["UA:DO", 2]],
			variants : [["Black", "Acid"], ["Blue", "Lightning"], ["Green", "Poison"], ["Red", "Fire"], ["White", "Cold"]],
			breathWeaponShape : "5-ft by 30-ft line",
			trait : desc([
				">>TYPE<< Breath Weapon: When I take the Attack action, I can replace one attack with a breath weapon that deals 2d8 >>type<< damage to all in a 5-ft by 30-ft line, Dex save halves (DC 8 + Con mod + Proficiency Bonus). I can do this my Proficiency Bonus per long rest. The damage increases to 3d8 at 5th level, 4d8 at 11th level, and 5d8 at 17th level.",
				"Chromatic Warding: From 3rd level, I can protect myself using my draconic energies. As an action once per long rest, I can become immune to >>type<< damage for 10 minutes."
			], "\n \u2022 "),
			features : {
				"chromatic warding" : {
					name : "Chromatic Warding",
					source : [["UA:DO", 2]],
					minlevel : 3,
					usages : 1,
					recovery : "long rest",
					action : [["action", ""]]
				}
			}
		},
		Metallic : {
			regExpSearch : /^(?=.*metallic)(?=.*dragonborn).*$/i,
			source : [["UA:DO", 2]],
			variants : [["Brass", "Fire"], ["Bronze", "Lightning"], ["Copper", "Acid"], ["Gold", "Fire"], ["Silver", "Cold"]],
			breathWeaponShape : "15-ft cone",
			trait : desc([
				">>TYPE<< Breath Weapon: When I take the Attack action, I can replace one attack with a breath weapon that deals 2d8 >>type<< damage to all in a 15-ft cone, Dex save halves (DC 8 + Con mod + Proficiency Bonus). I can do this my Proficiency Bonus per long rest.",
				"Metallic Breath Weapon: At 3rd level I gain a second breath weapon once per long rest, that works just like the first. It doesn't deal damage, but I can choose one effect: Str save or pushed 20 ft and prone, or Con save or incapacitated until my next turn starts."
			], "\n \u2022 "),
			features : {
				"metallic breath weapon" : {
					name : "Metallic Breath Weapon",
					source : [["UA:DO", 3]],
					minlevel : 3,
					usages : 1,
					recovery : "long rest",
					weaponOptions : [{
						regExpSearch : /^(?=.*metallic)(?=.*breath)(?=.*weapon).*$/i,
						name : "Metallic breath weapon",
						source : [["UA:DO", 3]],
						ability : 3,
						type : 'Natural',
						damage : ['Str save or', '', 'Con save'],
						range : "15-ft cone",
						description : "Str save or pushed 20 ft and knocked prone -or- Con save or incapacitated until my next turn starts",
						abilitytodamage : false,
						dc : true,
						selectNow : true
					}]
				}
			}
		},
		Gem : {
			regExpSearch : /^(?=.*gem)(?=.*dragonborn).*$/i,
			source : [["UA:DO", 3]],
			variants : [["Amethyst", "Force"], ["Crystal", "Radiant"], ["Emerald", "Psychic"], ["Sapphire", "Thunder"], ["Topaz", "Necrotic"]],
			breathWeaponShape : "15-ft cone",
			trait : desc([
				">>TYPE<< Breath Weapon: When I take the Attack action, I can replace one attack with a breath weapon that deals 2d8 >>type<< damage to all in a 15-ft cone, Dex save halves (DC 8 + Con mod + Proficiency Bonus). I can do this my Proficiency Bonus per long rest.",
				"Psionic Mind: I can speak telepathically to " + (typePF ? "any creature I can see within 30 ft that understands a language but it can't respond." : "a creature with a language I can see in 30 ft."),
				"Gem Flight: From 3rd level, I can temporarily fly. As a bonus action once per long rest, I can gain a flying speed equal to my walking speed and can hover. This lasts for 1 minute."
			], "\n \u2022 "),
			features : {
				"gem flight" : {
					name : "Gem Flight",
					source : [["UA:DO", 3]],
					minlevel : 3,
					usages : 1,
					recovery : "long rest"
				}
			}
		}
	}
	for (var sDrBrn in objDragonborns) {
		var sDrBrnLC = sDrBrn.toLowerCase();
		var oDrBrn = objDragonborns[sDrBrn];
		RaceList[sDrBrnLC + " dragonborn-ua"] = {
			regExpSearch : oDrBrn.regExpSearch,
			name : sDrBrn + " Dragonborn",
			sortname : "Dragonborn, " + sDrBrn,
			source : oDrBrn.source,
			plural : sDrBrn + " Dragonborn",
			size : 3,
			speed : {
				walk : { spd : 30, enc : 20 }
			},
			languageProfs : ["Common", 1],
			weaponOptions : [{
				regExpSearch : /^(?=.*breath)(?=.*weapon).*$/i,
				name : "Breath weapon",
				source : oDrBrn.source,
				ability : 3,
				type : 'Natural',
				damage : ['Q', 8, 'fire'],
				range : oDrBrn.breathWeaponShape.replace('by', '\xD7'),
				description : "Hits all in area; Dex save, success - half damage",
				abilitytodamage : false,
				dc : true,
				dbBreathWeapon : true,
				selectNow : true
			}],
			age : " reach adulthood by 15 and live around 80 years",
			height : " stand well over 6 feet tall (5'6\" + 2d8\")",
			weight : " weigh around 240 lb (175 + 2d8 \xD7 2d6 lb)",
			heightMetric : " stand well over 1,8 metres tall (170 + 5d8 cm)",
			weightMetric : " weigh around 110 kg (80 + 5d8 \xD7 4d6 / 10 kg)",
			scorestxt : "+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice",
			trait : sDrBrn + " Dragonborn"+
				"\n \u2022 " + sDrBrn + ' Ancestry: Choose a type of dragon using the "Racial Options" button. The damage type of my resistance and my breath weapon are determined by the dragon type chosen.'+
				+ oDrBrn.trait.replace(/>>type<< /ig, ""),
			features : {
				"breath weapon" : {
					name : "Breath Weapon",
					minlevel : 1,
					usages : "Proficiency bonus per ",
					usagescalc : "event.value = How('Proficiency Bonus');",
					recovery : "long rest",
					additional : levels.map(function (n) {
						return (n < 5 ? 2 : n < 11 ? 3 : n < 17 ? 4 : 5) + 'd8';
					}),
					calcChanges : {
						atkAdd : [
							function (fields, v) {
								if (v.theWea.dbBreathWeapon && (/dragonborn/i).test(CurrentRace.known) && CurrentRace.variant) {
									fields.Damage_Type = CurrentRace.dmgres[0];
								}
							},
							'',
							1
						]
					}
				}
			},
			variants : []
		};
		if (oDrBrn.features) {
			for (var sFea in oDrBrn.features) {
				RaceList[sDrBrnLC + " dragonborn-ua"].features[sFea] = oDrBrn.features[sFea];
			}
		}
		for (var i = 0; i < oDrBrn.variants.length; i++) {
			var sDrBrnVar = oDrBrn.variants[i][0];
			var sDrBrnDmg = oDrBrn.variants[i][1];
			AddRacialVariant(sDrBrnLC + " dragonborn-ua", sDrBrnVar.toLowerCase(), {
				regExpSearch : RegExp(sDrBrnVar, "i"),
				name : sDrBrnVar + " " + sDrBrnLC + " dragonborn",
				trait : sDrBrnVar + " " + sDrBrnLC + " dragonborn"+
					oDrBrn.trait.replace(/>>TYPE<</g, sDrBrnDmg).replace(/>>type<</g, sDrBrnDmg.toLowerCase()),
				dmgres : [sDrBrnDmg]
			});
		}
	}
}();
RaceList["draconic kobold-ua"] = {
	regExpSearch : /^(?=.*draconic)(?=.*kobold).*$/i,
	name : "Draconic kobold",
	sortname : "Kobold, Draconic",
	source : [["UA:DO", 4]],
	plural : "Draconic kobolds",
	size : 4,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	vision : [["Darkvision", 60]],
	age : " reach adulthood at age 6 and can live up to 120 years, but rarely do so",
	height : " are between 2 and 3 feet tall (2'1\" + 2d4\")",
	weight : " weigh between 25 and 35 lb (25 + 2d4 \xD7 1 lb)",
	heightMetric : " are between 65 and 90 cm tall (63 + 5d4 cm)",
	weightMetric : " weigh between 10 and 15 kg (11 + 5d4 \xD7 2 / 10 kg)",
	scorestxt : "+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice",
	features : {
		"draconic roar" : {
			name : "Draconic Roar",
			minlevel : 1,
			usages : "Proficiency bonus per ",
			action : [["bonus action", ""]],
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest"
		}
	},
	trait : "Draconic Kobold"+
	'\n \u2022 Draconic Legacy: Choose one of the following with the "Racial Options" button: (1) Brave: advantage on saves vs. being frightened, (2) Cantrip: I know one sorcerer cantrip of my choice, or (3) Tail: I can use my tail that deals 1d6 damage to make unarmed strikes.'+
	"\n \u2022 Draconic Roar: As a bonus action, I can let out a draconic roar at enemies within 10 ft. Until the end of my next turn, my allies and I have advantage on attack rolls against any enemies who could hear the roar. I can do this my Proficiency Bonus per long rest."
};
AddRacialVariant("draconic kobold-ua", "brave", {
	regExpSearch : /brave/i,
	name : "Draconic Kobold-Brave",
	source : [["UA:DO", 4]],
	plural : "Draconic Kobolds",
	savetxt : { adv_vs : ["frightened"] },
	trait : "Draconic Kobold"+
	'\n \u2022 Draconic Legacy (Brave): I have advantage on saving throws to avoid or end the frightened condition on myself.'+
	"\n \u2022 Draconic Roar: As a bonus action, I can let out a draconic roar at enemies within 10 ft. Until the end of my next turn, my allies and I have advantage on attack rolls against any enemies who could hear the roar. I can do this my Proficiency Bonus per long rest."
});
AddRacialVariant("draconic kobold-ua", "cantrip", {
	regExpSearch : /cantrip/i,
	source : [["UA:DO", 4]],
	spellcastingAbility : [4, 5, 6],
	allowUpCasting : true,
	spellcastingBonus : {
		name : "Draconic Legacy",
		"class" : "sorcerer",
		level : [0, 0],
		firstCol : 'atwill'
	},
	trait : "Draconic Kobold"+
	'\n \u2022 Draconic Legacy (Cantrip). I know one cantrip from the sorcerer spell list. Intelligence, Wisdom, or Charisma is my spellcasting ability for it (chosen when I select this race).'+
	"\n \u2022 Draconic Roar: As a bonus action, I can let out a draconic roar at enemies within 10 ft. Until the end of my next turn, my allies and I have advantage on attack rolls against any enemies who could hear the roar. I can do this my Proficiency Bonus per long rest."
});
AddRacialVariant("draconic kobold-ua", "tail", {
	regExpSearch : /tail/i,
	source : [["UA:DO", 4]],
	weaponOptions : [{
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*draconic)(?=.*tail).*$/i,
		name : "Draconic Tail",
		source : [["UA:DO", 4]],
		damage : [1, 6, "bludgeoning"],
		selectNow : true
	}],
	trait : "Draconic Kobold"+
	'\n \u2022 Draconic Legacy (Tail): I can make unarmed strikes with my tail. The tail deals 1d6 + my Strength modifier bludgeoning damage.'+
	"\n \u2022 Draconic Roar: As a bonus action, I can let out a draconic roar at enemies within 10 ft. Until the end of my next turn, my allies and I have advantage on attack rolls against any enemies who could hear the roar. I can do this my Proficiency Bonus per long rest."
});

// [dupl_start] Draconic Feats and Spell (that were virtually unchanged in Fizban's Treasury of Dragons)
if (!SourceList.FToD) {
	FeatsList["gift of the chromatic dragon"] = {
		name : "Gift of the Chromatic Dragon",
		source : [["FToD", 17], ["UA:DO", 4]],
		descriptionFull : "You've manifested some of the power of chromatic dragons, granting you the following benefits:"+
		"\n \u2022 As a bonus action, you can touch a simple or martial weapon and infuse it with one of the following damage types: acid, cold, fire, lightning, or poison. For the next minute, the weapon deals an extra 1d4 damage of the chosen type when it hits. After you use this ability, you can't do so again until you finish a long rest."+
		"\n \u2022 When you take acid, cold, fire, lightning, or poison damage, you can use your reaction to give yourself resistance to that instance of damage. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
		description : "As a bonus action once per long rest, I can touch a simple or martial weapon and infuse it to deal +1d4 acid, cold, fire, poison, or lightning damage for 1 minute. As a reaction when I take acid, cold, fire, lightning, or poison damage, I can gain resistance to that damage instance. I can do this my Prof Bonus per long rest.",
		action : [
			["bonus action", "Chromatic Gift (Infuse Weapon)"],
			["reaction", "Chromatic Gift (Resistance)"]
		],
		extraLimitedFeatures : [{
			name : "Chromatic Gift (Infuse Weapon)",
			usages : 1,
			recovery : "long rest"
		}, {
			name : "Chromatic Gift (Resistance)",
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest"
		}]
	};
	FeatsList["gift of the gem dragon"] = {
		name : "Gift of the Gem Dragon",
		source : [["FToD", 17], ["UA:DO", 5]],
		descriptionFull : "You've manifested some of the power of gem dragons, granting you the following benefits:"+
		"\n \u2022 Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20."+
		"\n \u2022 When you take damage from a creature that is within 10 feet of you, you can use your reaction to emanate telekinetic energy. The creature that dealt damage to you must succeed on a Strength saving throw (DC equals 8 + your proficiency bonus + the ability modifier of the score increased by this feat) or take 2d8 force damage and be pushed 10 feet away from you. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
		description : "As a reaction when I take damage from a creature that is within 10 ft, I can have it make a Str save (DC 8 + Prof Bonus + chosen ability score modifier) or take 2d8 force damage and be pushed 10 ft away. I can do this my Prof Bonus per long rest. [+1 Int, Wis or Cha]",
		action : [["reaction", ""]],
		usages : "Proficiency bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest",
		choices : ["Intelligence", "Wisdom", "Charisma"],
		"intelligence" : {
			calculate : "event.value = 'As a reaction when I take damage from a creature that is within 10 ft of me, I can have it make a Strength save DC ' + (8 + Number(How('Proficiency Bonus')) + Number(What('Int Mod'))) + ' (8 + Prof Bonus + Int mod) or take 2d8 force damage and be pushed 10 ft away from me. I can do this my Prof Bonus per long rest. [+1 Intelligence]';",
			scores : [0, 0, 0, 1, 0, 0]
		},
		"wisdom" : {
			calculate : "event.value = 'As a reaction when I take damage from a creature that is within 10 ft of me, I can have it make a Strength save DC ' + (8 + Number(How('Proficiency Bonus')) + Number(What('Wis Mod'))) + ' (8 + Prof Bonus + Wis mod) or take 2d8 force damage and be pushed 10 ft away from me. I can do this my Prof Bonus per long rest. [+1 Wisdom]';",
			scores : [0, 0, 0, 0, 1, 0]
		},
		"charisma" : {
			calculate : "event.value = 'As a reaction when I take damage from a creature that is within 10 ft of me, I can have it make a Strength save DC ' + (8 + Number(How('Proficiency Bonus')) + Number(What('Cha Mod'))) + ' (8 + Prof Bonus + Cha mod) or take 2d8 force damage and be pushed 10 ft away from me. I can do this my Prof Bonus per long rest. [+1 Charisma]';",
			scores : [0, 0, 0, 0, 0, 1]
		}
	};
	SpellsList["flame stride-ua"] = { // contains contributions by Nod_Hero (Ashardalon's Stride in FToD)
		name : "Flame Stride",
		classes : ["artificer", "ranger", "sorcerer", "wizard"],
		source : [["FToD", 19], ["UA:DO", 6]],
		level : 3,
		school : "Trans",
		time : "1 bns",
		range : "Self",
		components : "V,S",
		duration : "Conc, 1 min",
		description : "+20+5/SL ft speed; provoke no opp atks for moving; all crea/obj in 5 ft of path 1d6+1d6/SL Fire dmg",
		descriptionShorter : "+20+5/SL ft spd; no opp atks with move; all crea/obj in 5 ft of path 1d6+1d6/SL Fire dmg",
		descriptionMetric : "+6+1,5/SL m spd; provoke no opp atks in move; all crea/obj in 1,5 m of path 1d6+1d6/SL Fire dmg",
		descriptionShorterMetric : "+6+1,5/SL m spd; no opp atks in move; all crea/obj in 1,5 m of path 1d6+1d6/SL Fire dmg",
		descriptionFull : "The billowing flames of a dragon cover your feet, granting you explosive speed. For the duration, your speed increases by 20 feet and moving doesn't provoke opportunity attacks."+
		"\n   When you move within 5 feet of a creature or object that isn't being worn or carried, it takes 1d6 fire damage from your trail of heat. A creature or object can take this damage only once during a turn."+
		AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, increase your speed by 5 feet for each spell slot level above 3rd. Additionally, the spell deals an additional 1d6 fire damage for each slot level above 3rd."
	};
	SpellsList["nathair's mischief"] = {
		name : "Nathair's Mischief",
		nameAlt : "Mischief",
		classes : ["bard", "sorcerer", "wizard"],
		source : [["FToD", 20], ["UA:DO", 6]],
		level : 2,
		school : "Illus",
		time : "1 a",
		range : "60 ft",
		components : "S,M",
		compMaterial : "A piece of crust from an apple pie",
		duration : "Conc, 1 min",
		save : "Var",
		description : "20-ft cube of magic, roll d4 for effect; At start of my turn, move cube 10 ft and reroll effect; see book",
		descriptionFull : "You fill a 20-foot cube centered on a point you choose within range with fey and draconic magic. Roll on the Mischievous Surge table to determine the magical effect produced. At the start of each of your turns, you can move the cube up to 10 feet and reroll on the table."+
		"\n\nMischievous Surge"+
		toUni("\nd4\tEffect")+
		"\n  1\tThe smell of apple pie fills the air, and each creature in the cube must succeed on a Wisdom saving throw or become charmed by you until the start of your next turn."+
		"\n  2\tBouquets of flowers appear all around, and each creature in the cube must succeed on a Dexterity saving throw or be blinded until the start of your next turn as the flowers spray water in their faces."+
		"\n  3\tEach creature in the cube must succeed on a Wisdom saving throw or begin giggling until the start of your next turn. A giggling creature is incapacitated and uses all its movement to move in a random direction."+
		"\n  4\tDrops of molasses appear and hover in the cube, turning it into difficult terrain until the start of your next turn."
	};
	SpellsList["summon draconic spirit"] = {
		name : "Summon Draconic Spirit",
		classes : ["druid", "sorcerer", "wizard"],
		source : [["FToD", 21], ["UA:DO", 7]],
		level : 5,
		school : "Conj",
		time : "1 a",
		range : "60 ft",
		components : "V,S,M\u0192",
		compMaterial : "An art object from a dragon's hoard, worth at least 500 gp",
		duration : "Conc, 1 min",
		description : "Summon choice of Draconic Spirit; obeys commands; takes turn after mine; vanishes at 0 hp (500gp)",
		descriptionFull : "You call forth a draconic spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Draconic Spirit stat block. When you cast this spell, choose a family of dragon: Chromatic, Gem, or Metallic. The creature resembles a dragon of the chosen family, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends."+
		"\n   The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger."+
		AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, use the higher level wherever the spell's level appears in the stat block."
	};
	SpellsList["icingdeath's frost-ua"] = { // Rime's Binding Ice in FToD
		name : "Icingdeath's Frost",
		nameAlt : "Binding Ice",
		classes : ["sorcerer", "wizard"],
		source : [["FToD", 21], ["UA:DO", 6]],
		level : 2,
		school : "Evoc",
		time : "1 a",
		range : "S:15" + (typePF ? "-" : "") + "ft cone",
		components : "S,M",
		compMaterial : "A vial of meltwater",
		duration : "Instantaneous",
		save : "Con",
		description : "All in area 3d8+1d8/SL Cold dmg and speed 0 for 1 min until 1 a to undo; save halves, normal speed",
		descriptionShorter : "All in area 3d8+1d8/SL Cold dmg \u0026 spd 0 for 1 min until 1 a to undo; save halves, normal spd",
		descriptionFull : "A burst of icy cold energy emanates from you in a 30-foot cone. Each creature in that area must make a Constitution saving throw. On a failed save, a creature takes 3d8 cold damage and is covered in ice for 1 minute or until a creature uses its action to break the ice off itself or another creature. A creature covered in ice has its speed reduced to 0. On a successful save, a creature takes half as much damage with no additional effects."+
		AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, increase the cold damage by 1d8 for each slot level above 2nd."
	};
} // dupl_end

// Draconic Feats
FeatsList["gift of the metallic dragon-ua"] = {
	name : "Gift of the Metallic Dragon",
	source : [["UA:DO", 4]],
	descriptionFull : "You've manifested some of the power of metallic dragons, granting you the following benefits:"+
	"\n \u2022 You learn the cure wounds spell. You can cast this spell without expending a spell slot. Once you cast this spell in this way, you can't do so again until you finish a long rest. You can also cast this spell using spell slots you have. The spell's spellcasting ability is Intelligence, Wisdom, or Charisma when you cast it with this feat (choose when you gain the feat)."+
	"\n \u2022 You can manifest protective wings that can shield you or others from attacks. When you or another creature you can see within 5 feet of you is hit by an attack roll, you can use your reaction to manifest spectral wings from your back for a moment. Roll a d4 and grant a bonus to the target's AC equal to the number rolled against that attack roll, potentially causing it to miss. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	description : "I know Cure Wounds. I can cast it using spell slots and once per long rest without a spell slot. As a reaction when I or another I can see within 5 ft is hit by an attack, I can add a d4 to AC, potentially causing the attack to miss. I can do this my Prof Bonus per long rest.",
	spellcastingAbility : [4, 5, 6],
	allowUpCasting : true,
	spellcastingBonus : [{
		name : "Cure Wounds",
		spells : ["cure wounds"],
		selection : ["cure wounds"],
		firstCol : "oncelr"
	}],
	action : [["reaction", "Metallic Gift (Spectral Wings)"]],
	extraLimitedFeatures : [{
		name : "Metallic Gift (Cure Wounds)",
		usages : 1,
		recovery : "long rest"
	}, {
		name : "Metallic Gift (Spectral Wings)",
		usages : "Proficiency bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest"
	}]
};

// Draconic Spells
SpellsList["draconic transformation-ua"] = {
	name : "Draconic Transformation",
	classes : ["druid", "sorcerer", "wizard"],
	source : [["UA:DO", 5]],
	level : 7,
	school : "Trans",
	time : "1 bns",
	range : "Self",
	components : "V,S,M\u0192",
	compMaterial : "A statuette of a dragon, worth at least 500 gp",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "Blindsight 30 ft; 40 ft fly speed; at cast and 1 bns: 30-ft cone all 3d8 Force damage, save half (500gp)",
	descriptionShorter : "Blindsight 30 ft; 40 ft fly; at cast and 1 bns: 30-ft cone all 3d8 Force dmg, save half (500gp)",
	descriptionFull : "With a roar, you draw on the magic of dragons to transform yourself, taking on various draconic features. You gain the following benefits until the spell ends:"+
	"\n \u2022 You have blindsight with a range of 30 feet. Within that range, you can effectively see anything that isn't behind total cover, even if you're blinded or in darkness. Moreover, you can see an invisible creature, unless the creature successfully hides from you."+
	"\n \u2022 Incorporeal wings sprout from your back, giving you a flying speed of 40 feet."+
	"\n \u2022 When you cast this spell, and as a bonus action on subsequent turns for the duration, you can exhale a breath of shimmering energy in a 30-foot cone. Each creature in the area must make a Dexterity saving throw, taking 3d8 force damage on a failed save or half as much damage on a successful one."
};
SpellsList["fizban's platinum shield-ua"] = {
	name : "Fizban's Platinum Shield",
	nameAlt : "Platinum Shield",
	classes : ["sorcerer", "wizard"],
	source : [["UA:DO", 5]],
	level : 6,
	school : "Abjur",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M\u0192",
	compMaterial : "A platinum-plated dragon scale, worth at least 500 gp",
	duration : "Conc, 1 min",
	description : "1 crea Acid, Cold, Fire, Lightn. \u0026 Poison resist., half cover, better Dex saves; 1 bns change crea (500gp)",
	descriptionFull : "You create a field of silvery light that surrounds a creature of your choice within range (you can choose yourself). The field sheds dim light out to 5 feet."+
	"\n   As a bonus action on subsequent turns, you can move the field to another creature within 60 feet of the field."+
	"\n   The creature protected by the field gains the following benefits:"+
	"\n \u2022 The creature has half cover."+
	"\n \u2022 The creature has resistance to acid, cold, fire, lightning, and poison damage."+
	"\n \u2022 If the creature is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, the creature instead takes no damage if it succeeds on the saving throw, and only half damage if it fails."
};
SpellsList["raulothim's psychic lance-ua"] = {
	name : "Raulothim's Psychic Lance",
	nameAlt : "Psychic Lance",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : [["UA:DO", 6]],
	level : 4,
	school : "Ench",
	time : "1 a",
	range : "120 ft",
	components : "V",
	duration : "Instantaneous",
	save : "Int",
	description : "1 crea I see or name I know save or 10d6+1d6/SL Psychic dmg \u0026 incapacitated till my next turn starts",
	descriptionShorter : "1 crea I see or name I know save or 10d6+1d6/SL Psychic dmg \u0026 incapacitated for 1 rnd",
	descriptionFull : "You unleash a shimmering lance of psychic power from your forehead at a creature that you can see within range. Alternatively, you can utter the creature's name. If the named target is within range, it gains no benefit from cover or invisibility as the lance homes in on it. If the named target isn't within range, the lance dissipates, and the spell slot is not expended."+
	"\n   The target must succeed on an Intelligence saving throw or take 10d6 psychic damage and be incapacitated until the start of your next turn."+
	AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d6 for each slot level above 4th."
};
