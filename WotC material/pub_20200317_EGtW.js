var iFileName = "pub_20200317_EGtW.js";
RequiredSheetVersion("14.0.5-beta", 15);
// This file adds the content from Explorer's Guide to Wildemount to MPMB's Character Record Sheet

// Define the source
SourceList.W = {
	name : "Explorer's Guide to Wildemount",
	abbreviation : "EGtW",
	abbreviationSpellsheet : "W",
	group : "Campaign Sourcebooks",
	campaignSetting : "Critical Role",
	url : "https://dnd.wizards.com/products/wildemount",
	date : "2020/03/17"
};

// Races
RaceList["pallid elf"] = { // contains contributions by Smashman
	regExpSearch : /^(?!.*half)((?=.*\b(elfs?|elves|elvish|elven)\b)(?=.*\b(pallid|pale)\b)).*$/i,
	name : "Pallid Elf",
	sortname : "Elf, Pallid",
	source : [["W", 163]],
	plural : "Pallid Elves",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Elvish"],
	vision : [
		["Darkvision", 60],
		["Adv. on Int (Investigation) and Wis (Insight) checks", ""]
	],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
	skills : ["Perception"],
	advantages : [ ["Insight", true], ["Investigation", true] ],
	age : " typically claim adulthood around age 100 and can live to be 750 years old",
	height : " range from under 5 to over 6 feet tall (4'6\" + 2d10\")",
	weight : " weigh around 110 lb (90 + 2d10 \xD7 1d4 lb)",
	heightMetric : " range from under 1,5 to 1,7 metres tall (137 + 5d10 cm)",
	weightMetric : " weigh around 50 kg (40 + 5d10 \xD7 2d4 / 10 kg)",
	scores : [0, 2, 0, 0, 1, 0],
	trait : "Pallid Elf (+2 Dexterity, +1 Wisdom)\nTrance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. This gives the same benefit as a human gets from 8 hours of sleep (long rest takes only 4 hours).\nIncisive Sense: I have advantage on Intelligence (Investigation) and Wisdom (Insight) checks.\nBlessing of the Moonweaver: I know the Light cantrip. At 3rd level, I can cast Sleep once per long rest. At 5th level, I can also cast Invisibility on myself once per long rest. Spells cast using this trait require no material components and use Wisdom as spellcasting ability.",
	spellcastingAbility : 5,
	spellcastingBonus : [{
		name : "Blessing of the Moonweaver (level 1)",
		spells : ["light"],
		selection : ["light"],
		firstCol : 'atwill'
	}],
	spellChanges : {
		"light" : {
			components : "V",
			compMaterial : "",
			changes : "Using Blessing of the Moonweaver, I can cast Light without requiring a material component."
		}
	},
	features : {
		"sleep" : {
			name : "Blessing of the Moonweaver (level 3)",
			minlevel : 3,
			spellcastingBonus : [{
				name : "Blessing of the Moonweaver (level 3)",
				spells : ["sleep"],
				selection : ["sleep"],
				firstCol : 'oncelr'
			}],
			spellChanges : {
				"sleep" : {
					components : "V,S",
					compMaterial : "",
					changes : "Using Blessing of the Moonweaver, I can cast Sleep once per long rest without requiring a material component."
				}
			}
		},
		"invisibility" : {
			name : "Blessing of the Moonweaver (level 5)",
			minlevel : 5,
			spellcastingBonus : [{
				name : "Blessing of the Moonweaver (level 5)",
				spells : ["invisibility"],
				selection : ["invisibility"],
				firstCol : 'oncelr'
			}],
			spellChanges : {
				"invisibility" : {
					range : "Self",
					components : "V,S",
					compMaterial : "",
					description : "Me and my worn/carried invisible until I attack or cast; Can't cast this spell in direct sunlight",
					changes : "Using Blessing of the Moonweaver, I can cast Invisibility once per long rest without requiring a material component, but only on myself."
				}
			}
		}
	}
};
RaceList["lotusden halfling"] = { // contains contributions by Metacomet10
	regExpSearch : /^(?=.*\b(halflings?|hobbits?)\b)(?=.*lotusden).*$/i,
	name : "Lotusden Halfling",
	sortname : "Halfling, Lotusden",
	source : [["W", 164]],
	plural : "Lotusden Halflings",
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
	scores : [0, 2, 0, 0, 1, 0],
	trait : "Lotusden Halfling (+2 Dexterity, +1 Wisdom)" + (typePF ?
		"\n- Lucky: When I roll a 1 on an attack roll, ability check, or saving throw, I can reroll the die and must use the new roll."+
		"\n- Child of the Wood: I know the Druidcraft cantrip. At 3rd level, I can cast Entangle once per long rest. At 5th level, I can cast Spike Growth once per long rest without a material component. Wisdom is my spellcasting ability for these."+
		" - Halfling Nimbleness: I can move through the space of any creature that is of a size larger than me."+
		"\n- Timberwalk: Checks to track me have disadv. I need not expend extra movement to move over difficult terrain of nonmagical plants." :
		"\nChild of the Wood: I know the Druidcraft cantrip, at 3rd level: Entangle, at 5th level: Spike Growth. I can use both spells once per long rest and without material components. Wisdom is my spellcasting ability. "+
		"|Lucky: When I roll a 1 on an attack roll, ability check, or saving throw, I can reroll the die and must use the new roll. "+
		"|Halfling Nimbleness: I can move through the space of any creature that is of a size larger than me. "+
		"|Timberwalk: Disadv. on checks to track me. I require no extra movement for difficult terrain of nonmagical plants."),
	spellcastingAbility : 5,
	spellcastingBonus : [{
		name : "Child of the Wood (level 1)",
		spells : ["druidcraft"],
		selection : ["druidcraft"],
		firstCol : 'atwill'
	}],
	features : {
		"entangle" : {
			name : "Child of the Wood (level 3)",
			minlevel : 3,
			spellcastingBonus : [{
				name : "Child of the Wood (level 3)",
				spells : ["entangle"],
				selection : ["entangle"],
				firstCol : 'oncelr'
			}]
		},
		"spike growth" : {
			name : "Child of the Wood (level 5)",
			minlevel : 5,
			spellcastingBonus : [{
				name : "Child of the Wood (level 5)",
				spells : ["spike growth"],
				selection : ["spike growth"],
				firstCol : 'oncelr'
			}],
			spellChanges : {
				"spike growth" : {
					components : "V,S",
					compMaterial : "",
					changes : "Using Child of the Wood, I can cast Spike Growth once per long rest without requiring a material component."
				}
			}
		}
	}
};
{ // Dragonborn variants (almost completely made by Smashman)
	var EGtW_breathWeaponDesc = function (dmgType, shape) {
		var shapeStr = shape === "line" ? "5-ft by 30-ft line" : "15-ft cone";
		var capitailzedDmgType = dmgType.charAt(0).toUpperCase() + dmgType.slice(1);
		var saveStat = ["cold", "poison"].indexOf(dmgType) >= 0 ? "Con" : "Dex";
		return capitailzedDmgType + " Breath Weapon: As an action once per short rest, I can deal 2d6 " + dmgType + " damage to all in a " + shapeStr + ", " + saveStat + " save halves (DC 8 + Con mod + Prof Bonus).\nThis damage increases to 3d6 at level 6, 4d6 at level 11, and 5d6 at level 16.";
	};
	var EGtW_draconicAncestryFeature = {
		name : "Draconic Ancestry",
		limfeaname : "Breath Weapon",
		minlevel : 1,
		usages : 1,
		additional : levels.map(function (n) {
			return (n < 6 ? 2 : n < 11 ? 3 : n < 16 ? 4 : 5) + 'd6';
		}),
		recovery : "short rest",
		action : [['action', ""]],
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (v.theWea.dbBreathWeapon && (/dragonborn/i).test(CurrentRace.known)) {
						fields.Damage_Die = (CurrentRace.level < 6 ? 2 : CurrentRace.level < 11 ? 3 : CurrentRace.level < 16 ? 4 : 5) + 'd6';
						if (CurrentRace.variant) {
							fields.Damage_Type = CurrentRace.breathDmgType;
							fields.Description = fields.Description.replace(/(dex|con) save/i, ((/cold|poison/i).test(CurrentRace.breathDmgType) ? 'Con' : 'Dex') + ' save');
							fields.Range = (/black|blue|brass|bronze|copper/i).test(CurrentRace.variant) ? '5-ft \xD7 30-ft line' : '15-ft cone';
						}
					}
				},
				'',
				1
			]
		}
	};
	var EGtW_breathWeaponObj = {
		regExpSearch : /^(?=.*breath)(?=.*weapon).*$/i,
		name : "Breath weapon",
		source : [["W", 168]],
		ability : 3,
		type : 'Natural',
		damage : [2, 6, 'fire'],
		range : "15-ft cone",
		description : "Hits all in area; Dex save, success - half damage; Usable only once per short rest",
		abilitytodamage : false,
		dc : true,
		dbBreathWeapon : true,
		selectNow : true
	};
	var EGtW_acidBreath = EGtW_breathWeaponDesc("acid", "line");
	var EGtW_fireBreathCone = EGtW_breathWeaponDesc("fire", "cone");
	var EGtW_fireBreathLine = EGtW_breathWeaponDesc("fire", "cone");
	var EGtW_coldBreath = EGtW_breathWeaponDesc("cold", "cone");
	var EGtW_lightningBreath = EGtW_breathWeaponDesc("lightning", "line");
	var EGtW_poisonBreath = EGtW_breathWeaponDesc("poison", "cone");
	var EGtW_forcefulPresenceStr = "Forceful Presence: Once per short rest, I can give myself adv. on an Intimidation or Persuasion check.";
	var EGtW_vengefulAssaultStr = "Vengeful Assault: As a reaction when I take damage from a creature in range of a weapon that I'm holding, I can use the weapon to make an attack against the creature. I can do this once per short rest.";

	// Draconblood
	RaceList["draconblood dragonborn"] = {
		regExpSearch : /draconblood/i,
		name : "Draconblood Dragonborn",
		sortname : "Dragonborn, Draconblood",
		source : [["W", 168]],
		plural : "Draconblood Dragonborn",
		size : 3,
		speed : {
			walk : { spd : 30, enc : 20 }
		},
		languageProfs : ["Common", "Draconic"],
		vision : [["Darkvision", 60]],
		weaponOptions : [EGtW_breathWeaponObj],
		age : " reach adulthood by 15 and live around 80 years",
		height : " stand well over 6 feet tall (5'6\" + 2d8\")",
		weight : " weigh around 240 lb (175 + 2d8 \xD7 2d6 lb)",
		heightMetric : " stand well over 1,8 metres tall (170 + 5d8 cm)",
		weightMetric : " weigh around 110 kg (80 + 5d8 \xD7 4d6 / 10 kg)",
		scores : [0, 0, 0, 2, 0, 1],
		trait : "Draconblood Dragonborn (+2 Intelligence, +1 Charisma)" + desc([
			"Draconic Ancestry: Choose one type of dragon using the \"Racial Options\" button. I gain a breath weapon as determined by the dragon type chosen.",
			EGtW_forcefulPresenceStr
		]),
		features : {
			"draconic ancestry" : EGtW_draconicAncestryFeature,
			"forceful presence" : {
				name : "Forceful Presence",
				source : [["W", 168]],
				minlevel : 1,
				usages : 1,
				recovery : "short rest"
			}
		},
		variants : []
	};
	AddRacialVariant("draconblood dragonborn", "black", {
		regExpSearch : /black/i,
		name : "Black draconblood dragonborn",
		trait : "Black draconblood dragonborn (+2 Intelligence, +1 Charisma)" + desc([
			EGtW_acidBreath,
			EGtW_forcefulPresenceStr
		]),
		breathDmgType : "acid"
	});
	AddRacialVariant("draconblood dragonborn", "blue", {
		regExpSearch : /blue/i,
		name : "Blue draconblood dragonborn",
		trait : "Blue draconblood dragonborn (+2 Intelligence, +1 Charisma)" + desc([
			EGtW_lightningBreath,
			EGtW_forcefulPresenceStr
		]),
		breathDmgType : "lightning"
	});
	AddRacialVariant("draconblood dragonborn", "brass", {
		regExpSearch : /brass/i,
		name : "Brass draconblood dragonborn",
		trait : "Brass draconblood dragonborn (+2 Intelligence, +1 Charisma)" + desc([
			EGtW_fireBreathLine,
			EGtW_forcefulPresenceStr
		]),
		breathDmgType : "fire"
	});
	AddRacialVariant("draconblood dragonborn", "bronze", {
		regExpSearch : /bronze/i,
		name : "Bronze draconblood dragonborn",
		trait : "Bronze draconblood dragonborn (+2 Intelligence, +1 Charisma)" + desc([
			EGtW_lightningBreath,
			EGtW_forcefulPresenceStr
		]),
		breathDmgType : "lightning"
	});
	AddRacialVariant("draconblood dragonborn", "copper", {
		regExpSearch : /copper/i,
		name : "Copper draconblood dragonborn",
		trait : "Copper draconblood dragonborn (+2 Intelligence, +1 Charisma)" + desc([
			EGtW_acidBreath,
			EGtW_forcefulPresenceStr
		]),
		breathDmgType : "acid"
	});
	AddRacialVariant("draconblood dragonborn", "gold", {
		regExpSearch : /gold/i,
		name : "Gold draconblood dragonborn",
		trait : "Gold draconblood dragonborn (+2 Intelligence, +1 Charisma)" + desc([
			EGtW_fireBreathCone,
			EGtW_forcefulPresenceStr
		]),
		breathDmgType : "fire"
	});
	AddRacialVariant("draconblood dragonborn", "green", {
		regExpSearch : /green/i,
		name : "Green draconblood dragonborn",
		trait : "Green draconblood dragonborn (+2 Intelligence, +1 Charisma)" + desc([
			EGtW_poisonBreath,
			EGtW_forcefulPresenceStr
		]),
		breathDmgType : "poison"
	});
	AddRacialVariant("draconblood dragonborn", "red", {
		regExpSearch : /red/i,
		name : "Red draconblood dragonborn",
		trait : "Red draconblood dragonborn (+2 Intelligence, +1 Charisma)" + desc([
			EGtW_fireBreathCone,
			EGtW_forcefulPresenceStr
		]),
		breathDmgType : "fire"
	});
	AddRacialVariant("draconblood dragonborn", "silver", {
		regExpSearch : /silver/i,
		name : "Silver draconblood dragonborn",
		trait : "Silver draconblood dragonborn (+2 Intelligence, +1 Charisma)" + desc([
			EGtW_coldBreath,
			EGtW_forcefulPresenceStr
		]),
		breathDmgType : "cold"
	});
	AddRacialVariant("draconblood dragonborn", "white", {
		regExpSearch : /white/i,
		name : "White draconblood dragonborn",
		trait : "White draconblood dragonborn (+2 Intelligence, +1 Charisma)" + desc([
			EGtW_coldBreath,
			EGtW_forcefulPresenceStr
		]),
		breathDmgType : "cold"
	});

	// Ravenite
	RaceList["ravenite dragonborn"] = {
		regExpSearch : /ravenite/i,
		name : "Ravenite Dragonborn",
		sortname : "Dragonborn, Ravenite",
		source : [["W", 169]],
		plural : "Ravenite Dragonborn",
		size : 3,
		speed : {
			walk : { spd : 30, enc : 20 }
		},
		languageProfs : ["Common", "Draconic"],
		vision : [["Darkvision", 60]],
		weaponOptions : [EGtW_breathWeaponObj],
		age : " reach adulthood by 15 and live around 80 years",
		height : " stand well over 6 feet tall (5'6\" + 2d8\")",
		weight : " weigh around 240 lb (175 + 2d8 \xD7 2d6 lb)",
		heightMetric : " stand well over 1,8 metres tall (170 + 5d8 cm)",
		weightMetric : " weigh around 110 kg (80 + 5d8 \xD7 4d6 / 10 kg)",
		scores : [2, 1, 0, 0, 0, 0],
		trait : "Ravenite Dragonborn (+2 Strength, +1 Constitution)" + desc([
			"Draconic Ancestry: Choose one type of dragon using the \"Racial Options\" button. I gain a breath weapon as determined by the dragon type chosen.",
			EGtW_vengefulAssaultStr
		]),
		features : {
			"draconic ancestry" : EGtW_draconicAncestryFeature,
			"vengeful assault" : {
				name : "Vengeful Assault",
				source : [["W", 168]],
				minlevel : 1,
				usages : 1,
				action : [['reaction', ""]],
				recovery : "short rest"
			}
		},
		variants : []
	};
	AddRacialVariant("ravenite dragonborn", "black", {
		regExpSearch : /black/i,
		name : "Black ravenite dragonborn",
		trait : "Black ravenite dragonborn (+2 Strength, +1 Constitution)" + desc([
			EGtW_acidBreath,
			EGtW_vengefulAssaultStr
		]),
		breathDmgType : "acid"
	});
	AddRacialVariant("ravenite dragonborn", "blue", {
		regExpSearch : /blue/i,
		name : "Blue ravenite dragonborn",
		trait : "Blue ravenite dragonborn (+2 Strength, +1 Constitution)" + desc([
			EGtW_lightningBreath,
			EGtW_vengefulAssaultStr
		]),
		breathDmgType : "lightning"
	});
	AddRacialVariant("ravenite dragonborn", "brass", {
		regExpSearch : /brass/i,
		name : "Brass ravenite dragonborn",
		trait : "Brass ravenite dragonborn (+2 Strength, +1 Constitution)" + desc([
			EGtW_fireBreathLine,
			EGtW_vengefulAssaultStr
		]),
		breathDmgType : "fire"
	});
	AddRacialVariant("ravenite dragonborn", "bronze", {
		regExpSearch : /bronze/i,
		name : "Bronze ravenite dragonborn",
		trait : "Bronze ravenite dragonborn (+2 Strength, +1 Constitution)" + desc([
			EGtW_lightningBreath,
			EGtW_vengefulAssaultStr
		]),
		breathDmgType : "lightning"
	});
	AddRacialVariant("ravenite dragonborn", "copper", {
		regExpSearch : /copper/i,
		name : "Copper ravenite dragonborn",
		trait : "Copper ravenite dragonborn (+2 Strength, +1 Constitution)" + desc([
			EGtW_acidBreath,
			EGtW_vengefulAssaultStr
		]),
		breathDmgType : "acid"
	});
	AddRacialVariant("ravenite dragonborn", "gold", {
		regExpSearch : /gold/i,
		name : "Gold ravenite dragonborn",
		trait : "Gold ravenite dragonborn (+2 Strength, +1 Constitution)" + desc([
			EGtW_fireBreathCone,
			EGtW_vengefulAssaultStr
		]),
		breathDmgType : "fire"
	});
	AddRacialVariant("ravenite dragonborn", "green", {
		regExpSearch : /green/i,
		name : "Green ravenite dragonborn",
		trait : "Green ravenite dragonborn (+2 Strength, +1 Constitution)" + desc([
			EGtW_poisonBreath,
			EGtW_vengefulAssaultStr
		]),
		breathDmgType : "poison"
	});
	AddRacialVariant("ravenite dragonborn", "red", {
		regExpSearch : /red/i,
		name : "Red ravenite dragonborn",
		trait : "Red ravenite dragonborn (+2 Strength, +1 Constitution)" + desc([
			EGtW_fireBreathCone,
			EGtW_vengefulAssaultStr
		]),
		breathDmgType : "fire"
	});
	AddRacialVariant("ravenite dragonborn", "silver", {
		regExpSearch : /silver/i,
		name : "Silver ravenite dragonborn",
		trait : "Silver ravenite dragonborn (+2 Strength, +1 Constitution)" + desc([
			EGtW_coldBreath,
			EGtW_vengefulAssaultStr
		]),
		breathDmgType : "cold"
	});
	AddRacialVariant("ravenite dragonborn", "white", {
		regExpSearch : /white/i,
		name : "White ravenite dragonborn",
		trait : "White ravenite dragonborn (+2 Strength, +1 Constitution)" + desc([
			EGtW_coldBreath,
			EGtW_vengefulAssaultStr
		]),
		breathDmgType : "cold"
	});
}

// [dupl_start] reprints from Volo's Guide to Monsters
if (!SourceList.V) {
	RaceList["fallen aasimar"] = {
		regExpSearch : /^((?=.*aasimar)|((?=.*planetouched)(?=.*(celestial|angel))))(?=.*fallen).*$/i,
		name : "Fallen Aasimar",
		source : [["V", 104], ["W", 168]],
		plural : "Fallen Aasimar",
		sortname : "Aasimar, Fallen",
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
		scores : [1, 0, 0, 0, 0, 2],
		trait : "Fallen Aasimar (+1 Strength, +2 Charisma)" + (typePF ? "\n" : " ") + "Light Bearer: I know the Light cantrip.\nHealing Hands: As an action, once per long rest, I can touch to heal for my level in HP.\nNecrotic Shroud: Once per long rest when I'm 3rd level, I can use an action to transform, causing all within 10 ft of me to make a Cha" + (typePF ? "" : "risma") + " saving throw (DC 8 + Cha mod + Prof Bonus) or be frightened of me until the end of my next turn. This lasts for 1 minute or until I end it as a bonus action. Once on my turn I can have one of my attacks or spells deals my level in extra necrotic damage to one target.",
		abilitySave : 6,
		spellcastingAbility : 6,
		spellcastingBonus : [{
			name : "Light Bearer",
			spells : ["light"],
			selection : ["light"],
			firstCol : 'atwill'
		}],
		features : {
			"healing hands" : {
				name : "Healing Hands",
				usages : 1,
				minlevel : 1,
				recovery : "long rest",
				additional : levels.map(function (n) { return n + " HP"; }),
				action : [["action", ""]]
			},
			"necrotic shroud" : {
				name : "Necrotic Shroud",
				usages : 1,
				minlevel : 3,
				recovery : "long rest",
				additional : levels.map(function (n) { return n < 3 ? "" : "+" + n + " damage"; }),
				action : [["action", " (start)"], ['bonus action', ' (end)']]
			}
		}
	};
	RaceList["protector aasimar"] = {
		regExpSearch : /^((?=.*aasimar)|((?=.*planetouched)(?=.*(celestial|angel))))(?=.*protector).*$/i,
		name : "Protector Aasimar",
		source : [["V", 104], ["W", 167]],
		plural : "Protector Aasimar",
		sortname : "Aasimar, Protector",
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
		scores : [0, 0, 0, 0, 1, 2],
		trait : "Protector Aasimar (+1 Wisdom, +2 Charisma)\nLight Bearer: I know the Light cantrip.\nHealing Hands: As an action, once per long rest, I can touch to heal for my level in HP.\nRadiant Soul: Once per long rest when I'm 3rd level, I can use an action to transform, gaining glimmer in my eyes and two incorporeal wings. For 1 minute or until I end it as a bonus action, I have 30 feet fly speed; once on my turn I can have one of my attacks or spells deal my level in extra radiant damage to one target.",
		spellcastingAbility : 6,
		spellcastingBonus : [{
			name : "Light Bearer",
			spells : ["light"],
			selection : ["light"],
			firstCol : 'atwill'
		}],
		features : {
			"healing hands" : {
				name : "Healing Hands",
				usages : 1,
				minlevel : 1,
				recovery : "long rest",
				additional : levels.map(function (n) { return n + " HP"; }),
				action : [["action", ""]]
			},
			"radiant soul" : {
				name : "Radiant Soul",
				usages : 1,
				minlevel : 3,
				recovery : "long rest",
				additional : levels.map(function (n) { return n < 3 ? "" : "+" + n + " damage"; }),
				action : [["action", " (start)"], ['bonus action', ' (end)']]
			}
		}
	};
	RaceList["scourge aasimar"] = {
		regExpSearch : /^((?=.*aasimar)|((?=.*planetouched)(?=.*(celestial|angel))))(?=.*scourge).*$/i,
		name : "Scourge Aasimar",
		source : [["V", 104], ["W", 167]],
		plural : "Scourge Aasimar",
		sortname : "Aasimar, Scourge",
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
		trait : "Scourge Aasimar (+1 Constitution, +2 Charisma)" + (typePF ? "\n" : " ") + "Light Bearer: I know the Light cantrip.\nHealing Hands: As an action, once per long rest, I can touch to heal for my level in HP.\nRadiant Consumption: Once per long rest when I'm 3rd level, I can use an action to radiate bright light in 10-ft radius and dim light for another 10-ft, for 1 minute or until I end it as a bonus action. Once on my turn my attack or spell deals my level in extra radiant damage to one target, and at the end of my turns all creatures within 10 ft of me, including myself, take half my level in radiant damage.",
		spellcastingAbility : 6,
		spellcastingBonus : [{
			name : "Light Bearer",
			spells : ["light"],
			selection : ["light"],
			firstCol : 'atwill'
		}],
		features : {
			"healing hands" : {
				name : "Healing Hands",
				usages : 1,
				minlevel : 1,
				recovery : "long rest",
				additional : levels.map(function (n) { return n + " HP"; }),
				action : [["action", ""]]
			},
			"radiant consumption" : {
				name : "Radiant Consumption",
				usages : 1,
				minlevel : 3,
				recovery : "long rest",
				additional : levels.map(function (n) {
					if (n < 3) return ""
					return Math.ceil(n/2) + "/" + n + " damage";
				}),
				action : [["action", " (start)"], ['bonus action', ' (end)']]
			}
		}
	};
	if (!RaceList["bugbear"]) {
		RaceList["bugbear"] = {
			regExpSearch : /bugbear/i,
			name : "Bugbear",
			source : [["V", 119], ["E:RLW", 25], ["W", 174]],
			plural : "Bugbears",
			size : 3,
			speed : {
				walk : { spd : 30, enc : 20 }
			},
			languageProfs : ["Common", "Goblin"],
			vision : [["Darkvision", 60]],
			skills : ["Stealth"],
			age : " reach adulthood at age 16 and live up to 80 years",
			height : " are between 6 and 8 feet tall (6'0\" + 2d12\")",
			weight : " weigh between 250 and 350 lb (200 + 2d12 \xD7 2d6 lb)",
			heightMetric : " are between 1,9 and 2,4 metres tall (185 + 5d12 cm)",
			weightMetric : " weigh between 115 and 160 kg (90 + 5d12 \xD7 4d6 / 10 kg)",
			scores : [2, 1, 0, 0, 0, 0],
			features : {
				"surprise attack" : {
					name : "Surprise Attack",
					minlevel : 1,
					usages : 1,
					recovery : "Combat",
					additional : "2d6"
				}
			},
			trait : "Bugbear (+2 Strength, +1 Dexterity)\nPowerful Build: I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift.\nLong-Limbed: I have an additional 5 feet reach with melee attacks that I make on my turn.\nSurprise Attack: If I hit a surprised creature on my first turn in combat, that attack deals an extra 2d6 damage. I can do this only once per combat.",
			carryingCapacity : 2
		};
	}
	RaceList["firbolg"] = {
		regExpSearch : /firbolg/i,
		name : "Firbolg",
		source : [["V", 106], ["W", 170]],
		plural : "Firbolg",
		size : 3,
		speed : {
			walk : { spd : 30, enc : 20 }
		},
		languageProfs : ["Common", "Elvish", "Giant", "Speech of Beast and Leaf"],
		age : " reach adulthood around 30 and can live for 500 years",
		height : " are between 6 and half and 8 feet tall (6'2\" + 2d12\")",
		weight : " weigh between 240 and 300 lb (175 + 2d12 \xD7 2d6 lb)",
		heightMetric : " are between 2 and 2,5 metres tall (190 + 5d12 cm)",
		weightMetric : " weigh between 110 and 135 kg (80 + 5d12 \xD7 4d6 / 10 kg)",
		scores : [1, 0, 0, 0, 2, 0],
		trait : "Firbolg (+1 Strength, +2 Wisdom)" + (typePF ? "\n" : " ") + "Hidden Step: Once per short rest, as a bonus action, I turn invisible until the start of my next turn as per the invisibility spell.\nPowerful Build: I count as one size larger for the weight I can carry.\nFirbolg Magic: I can cast the Detect Magic and Disguise Self spells each once per short rest. With Disguise Self I can seem up to 3 feet shorter. Wisdom is my ability for these spells.\nSpeech of Beast and Leaf: I can make my words understood, in a limited manner, by beasts and plants. I have advantage on Charisma checks to influence them.",
		spellcastingAbility : 5,
		features : {
			"firbolg magic (detect magic)" : {
				name : "Firbolg Magic",
				minlevel : 1,
				spellcastingBonus : [{
					name : "Firbolg Magic",
					spells : ["detect magic", "disguise self"],
					selection : ["detect magic", "disguise self"],
					firstCol : 'oncesr',
					times : 2
				}],
				spellChanges : {
					"disguise self" : {
						description : "Alter appearance, up to 3ft shorter/taller; Int(Investigation) check vs. spell DC to determine disguise",
						changes : "Using Firbolg Magic, I can cast Disguise Self once per short rest to also seem up to 3 feet shorter or taller."
					}
				}
			},
			"hidden step" : {
				name : "Hidden Step",
				minlevel : 1,
				usages : 1,
				recovery : "short rest",
				action : [["bonus action", ""]]
			}
		},
		carryingCapacity : 2
	};
	if (!RaceList["goblin"]) {
		RaceList["goblin"] = {
			regExpSearch : /^(?=.*\bgoblins?\b)(?!.*(hobgoblin|bugbear)).*$/i,
			name : "Goblin",
			source : [["V", 119], ["G", 17], ["E:RLW", 26], ["W", 174]],
			plural : "Goblins",
			size : 4,
			speed : {
				walk : { spd : 30, enc : 20 }
			},
			languageProfs : ["Common", "Goblin"],
			vision : [["Darkvision", 60]],
			age : " reach adulthood at age 8 and live up to 60 years",
			height : " are between 3 and a half and 4 feet tall (3'5\" + 2d4\")",
			weight : " weigh between 40 and 70 lb (35 + 2d4 \xD7 1 lb)",
			heightMetric : " are between 100 and 120 cm tall (100 + 5d4 cm)",
			weightMetric : " weigh between 20 and 30 kg (17 + 5d4 \xD7 2 / 10 kg)",
			scores : [0, 2, 1, 0, 0, 0],
			features : {
				"fury of the small" : {
					name : "Fury of the Small",
					minlevel : 1,
					usages : 1,
					recovery : "short rest",
					additional : levels.map(function (n) { return "+" + n + " damage"; })
				}
			},
			action : [["bonus action", "Nimble Escape (disengage/hide)"]],
			trait : "Goblin (+2 Dexterity, +1 Constitution)"+
			"\n \u2022 Fury of the Small: Once per short rest, when I damage a creature of a size category larger than mine with an attack or a spell, I can have it take extra damage equal to my level."+
			"\n \u2022 Nimble Escape: As a bonus action, I can take the Disengage or Hide action."
		};
	}
	if (!RaceList["goliath"]) {
		RaceList["goliath"] = {
			regExpSearch : /goliath/i,
			name : "Goliath",
			source : [["E", 11], ["V", 108], ["W", 176]],
			plural : "Goliaths",
			size : 3,
			speed : {
				walk : { spd : 30, enc : 20 }
			},
			languageProfs : ["Common", "Giant"],
			dmgres : ["Cold"],
			skills : ["Athletics"],
			age : " reach adulthood in their late teens and live less than 100 years",
			height : " are between 6 and a half and 8 feet tall (6'2\" + 2d10\")",
			weight : " weigh between 280 and 340 lb (200 + 2d10 \xD7 2d6 lb)",
			heightMetric : " are between 2 and 2,4 metres tall (190 + 5d10 cm)",
			weightMetric : " weigh between 100 and 155 kg (90 + 5d10 \xD7 4d6 / 10 kg)",
			scores : [2, 0, 1, 0, 0, 0],
			features : {
				"stone's endurance" : {
					name : "Stone's Endurance",
					minlevel : 1,
					usages : 1,
					recovery : "short rest",
					action : [["reaction", ""]]
				}
			},
			trait : "Goliath (+2 Strength, +1 Constitution)"+
			"\n \u2022 Stone's Endurance: Once per short rest, when I take damage, I can use my reaction to reduce the damage by 1d12 + my Constitution modifier."+
			"\n \u2022 Powerful Build: I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift."+
			"\n \u2022 Mountain Born: I have resistance to cold damage and I'm acclimated to high altitude, including elevations above 20000 ft."+
			(typePF ? "\n \u2022 Natural Athlete: I have proficiency in the Athletics skill." : ""),
			carryingCapacity : 2
		};
	}
	if (!RaceList["hobgoblin"]) {
		RaceList["hobgoblin"] = {
			regExpSearch : /hobgoblin/i,
			name : "Hobgoblin",
			source : [["V", 119], ["E:RLW", 26], ["W", 175]],
			plural : "Hobgoblins",
			size : 3,
			speed : {
				walk : { spd : 30, enc : 20 }
			},
			languageProfs : ["Common", "Goblin"],
			vision : [["Darkvision", 60]],
			armorProfs : [true, false, false, false],
			age : " reach adulthood in their late teens and live less than 100 years",
			height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
			weight : " weigh between 150 and 200 lb (110 + 2d10 \xD7 2d4 lb)",
			heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
			weightMetric : " weigh between 70 and 90 kg (50 + 5d10 \xD7 4d4 / 10 kg)",
			scores : [0, 0, 2, 1, 0, 0],
			features : {
				"saving face" : {
					name : "Saving Face",
					minlevel : 1,
					usages : 1,
					recovery : "short rest"
				}
			},
			trait : "Hobgoblin (+2 Constitution, +1 Intelligence)\n\nMartial Training: I am proficient with two martial weapons of my choice and light armor.\n\nSaving Face: Once per short rest, when I miss an attack roll or fail an ability check or a saving throw, I can gain a bonus to the roll equal to the number of allies I can see within 30 ft of me (max +5)."
		};
	}
	RaceList["kenku"] = {
		regExpSearch : /kenku/i,
		name : "Kenku",
		source : [["V", 109], ["W", 177]],
		plural : "Kenku",
		size : 3,
		speed : {
			walk : { spd : 30, enc : 20 }
		},
		skillstxt : "Choose two from Acrobatics, Deception, Stealth, and Sleight of Hand",
		languageProfs : ["Common", "Auran"],
		age : " reach maturity at about 12 years old and can live to 60",
		height : " are around 5 feet tall (4'4\" + 2d8\")",
		weight : " weigh between 90 and 120 lb (70 + 2d8 \xD7 1d4 lb)",
		heightMetric : " are around 1,5 metres tall (135 + 5d8 cm)",
		weightMetric : " weigh between 40 and 55 kg (35 + 5d8 \xD7 2d4 / 10 kg)",
		scores : [0, 2, 0, 0, 1, 0],
		trait : "Kenku (+2 Dexterity, +1 Wisdom)"+
			"\n \u2022 Expert Forgery: Kenku can duplicate other creatures' handwriting and craftwork. I have advantage on all checks made to produce forgeries or duplicates of existing objects."+
			"\n \u2022 Mimicry: I can mimic any sounds I have heard, including voices, but can otherwise not speak. Creatures hearing these sounds can determine they are imitations with a successful Wisdom (Insight) check opposed by my Charisma (Deception)."
	};
}
// reprints from Elemental Evil Player's Companion
if (!SourceList.E) {
	RaceList["aarakocra"] = {
		regExpSearch : /aarakocra/i,
		name : "Aarakocra",
		source : [["E", 5], ["W", 166]],
		plural : "Aarakocra",
		size : 3,
		speed : {
			walk : { spd : 25, enc : 15 },
			fly : { spd : 50, enc : 0 }
		},
		languageProfs : ["Common", "Aarakocra", "Auran"],
		weaponOptions : [{
			baseWeapon : "unarmed strike",
			regExpSearch : /talon/i,
			name : "Talons",
			source : [["E", 5], ["W", 166]],
			damage : [1, 4, "slashing"],
			selectNow : true
		}],
		age : " reach maturity by age 3 and live about 30 years",
		height : " are about 5 feet tall",
		weight : " weigh between 80 and 100 lb",
		heightMetric : " are about 1,5 metres tall",
		weightMetric : " weigh between 36 and 45 kg",
		scores : [0, 2, 0, 0, 1, 0],
		trait : "Aarakocra (+2 Dexterity, +1 Wisdom)\n\nFlight: I have a flying speed of 50 feet. To use this speed, I can't be wearing medium or heavy armor.\n\nTalons: My unarmed strikes deal 1d4 slashing damage on a hit."
	};
	RaceList["air genasi"] = {
		regExpSearch : /^(?=.*(genasi|planetouched))(?=.*\bairs?\b).*$/i,
		name : "Air genasi",
		sortname : "Genasi, Air",
		source : [["E", 9], ["W", 172]],
		plural : "Air genasi",
		size : 3,
		speed : {
			walk : { spd : 30, enc : 20 }
		},
		languageProfs : ["Common", "Primordial"],
		age : " reach adulthood in their late teens and live up to 120 years",
		height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
		weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
		heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
		weightMetric : " weigh around 75 lb (50 + 5d10 \xD7 4d4 / 10 kg)",
		scores : [0, 1, 2, 0, 0, 0],
		trait : "Air Genasi (+1 Dexterity, +2 Constitution)\n\nUnending Breath: I can hold my breath indefinitely while I am not incapacitated.\n\nMingle with the Wind: I can cast the Levitate spell once with this trait, requiring no material components, and I regain the ability to cast it this way when I finish a long rest. Constitution is my spellcasting ability for this spell.",
		spellcastingAbility : 3,
		features : {
			"levitate" : {
				name : "Mingle with the Wind",
				minlevel : 1,
				spellcastingBonus : [{
					name : "Mingle with the Wind",
					spells : ["levitate"],
					selection : ["levitate"],
					firstCol : 'oncelr'
				}],
				spellChanges : {
					"levitate" : {
						components : "V,S",
						compMaterial : "",
						changes : "Using Mingle with the Wind, I can cast Levitate once per long rest without requiring material components."
					}
				}
			}
		}
	};
	RaceList["earth genasi"] = {
		regExpSearch : /^(?=.*(genasi|planetouched))(?=.*\bearths?\b).*$/i,
		name : "Earth genasi",
		sortname : "Genasi, Earth",
		source : [["E", 9], ["W", 172]],
		plural : "Earth genasi",
		size : 3,
		speed : {
			walk : { spd : 30, enc : 20 }
		},
		languageProfs : ["Common", "Primordial"],
		age : " reach adulthood in their late teens and live up to 120 years",
		height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
		weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
		heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
		weightMetric : " weigh around 75 lb (50 + 5d10 \xD7 4d4 / 10 kg)",
		scores : [1, 0, 2, 0, 0, 0],
		trait : "Earth Genasi (+1 Strength, +2 Constitution)" + (typePF ? "\n" : "") + "\nEarth Walk: I can move across difficult terrain made of earth or stone without expending extra movement." + (typePF ? "\n" : "") + "\nMerge with Stone: I can cast the Pass without Trace spell once with this trait, requiring no material components, and I regain the ability to cast it this way when I finish a long rest. Constitution is my spellcasting ability for this spell.",
		spellcastingAbility : 3,
		features : {
			"pass without trace" : {
				name : "Merge with Stone",
				minlevel : 1,
				spellcastingBonus : [{
					name : "Merge with Stone",
					spells : ["pass without trace"],
					selection : ["pass without trace"],
					firstCol : 'oncelr'
				}],
				spellChanges : {
					"pass without trace" : {
						components : "V,S",
						compMaterial : "",
						changes : "Using Merge with Stone, I can cast Pass without Trace once per long rest without requiring material components."
					}
				}
			}
		}
	};
	RaceList["fire genasi"] = {
		regExpSearch : /^(?=.*(genasi|planetouched))(?=.*\bfires?\b).*$/i,
		name : "Fire genasi",
		sortname : "Genasi, Fire",
		source : [["E", 9], ["W", 172]],
		plural : "Fire genasi",
		vision : [["Darkvision", 60]],
		size : 3,
		speed : {
			walk : { spd : 30, enc : 20 }
		},
		languageProfs : ["Common", "Primordial"],
		dmgres : ["Fire"],
		age : " reach adulthood in their late teens and live up to 120 years",
		height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
		weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
		heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
		weightMetric : " weigh around 75 lb (50 + 5d10 \xD7 4d4 / 10 kg)",
		scores : [0, 0, 2, 1, 0, 0],
		trait : "Fire Genasi (+2 Constitution, +1 Intelligence)\n\nReach to the Blaze:\n   I know the Produce Flame cantrip.\n   Once I reach 3rd level, I can cast the Burning Hands spell once as a 1st-level spell.\n   I regain the ability to cast it this way when I finish a long rest.\n   Constitution is my spellcasting ability for these spells.",
		spellcastingAbility : 3,
		spellcastingBonus : [{
			name : "Reach to the Blaze (level 1)",
			spells : ["produce flame"],
			selection : ["produce flame"],
			firstCol : 'atwill'
		}],
		features : {
			"burning hands" : {
				name : "Reach to the Blaze (level 3)",
				minlevel : 3,
				spellcastingBonus : [{
					name : "Reach to the Blaze (level 3)",
					spells : ["burning hands"],
					selection : ["burning hands"],
					firstCol : 'oncelr'
				}]
			}
		}
	};
	RaceList["water genasi"] = {
		regExpSearch : /^(?=.*(genasi|planetouched))(?=.*\bwaters?\b).*$/i,
		name : "Water genasi",
		sortname : "Genasi, Water",
		source : [["E", 10], ["W", 172]],
		plural : "Water genasi",
		size : 3,
		speed : {
			walk : { spd : 30, enc : 20 },
			swim : { spd : 30, enc : 20 }
		},
		languageProfs : ["Common", "Primordial"],
		dmgres : ["Acid"],
		age : " reach adulthood in their late teens and live up to 120 years",
		height : " range from barely 5 to well over 6 feet tall (4'8\" + 2d10\")",
		weight : " weigh around 165 lb (110 + 2d10 \xD7 2d4 lb)",
		heightMetric : " range from barely 1,5 to well over 1,8 metres tall (145 + 5d10 cm)",
		weightMetric : " weigh around 75 lb (50 + 5d10 \xD7 4d4 / 10 kg)",
		scores : [0, 0, 2, 0, 1, 0],
		trait : "Water Genasi (+2 Constitution, +1 Wisdom)\nAmphibious: I can breathe air and water.\nSwim: I have a swimming speed of 30 feet.\nCall to the Wave: I know the Shape Water cantrip.\n   When I reach 3rd level, I can cast the Create or Destroy Water spell as a 2nd-level spell once with this trait, and I regain the ability to cast it this way when I finish a long rest.\n   Constitution is my spellcasting ability for these spells.",
		spellcastingAbility : 3,
		spellcastingBonus : [{
			name : "Call to the Wave (level 1)",
			spells : ["shape water"],
			selection : ["shape water"],
			firstCol : 'atwill'
		}],
		features : {
			"create or destroy water" : {
				name : "Call to the Wave (level 3)",
				minlevel : 3,
				spellcastingBonus : [{
					name : "Call to the Wave (level 3)",
					spells : ["create or destroy water"],
					selection : ["create or destroy water"],
					firstCol : 'oncelr'
				}]
			}
		}
	};
	SpellsList["shape water"] = {
		name : "Shape Water",
		classes : ["druid", "sorcerer", "wizard"],
		source : [["X", 164], ["E", 21], ["W", 172]],
		level : 0,
		school : "Trans",
		time : "1 a",
		range : "30 ft",
		components : "S",
		duration : "Instant. or 1 h",
		description : "5 cu ft water; instant: move/change flow; 1h: simple shapes/change color or opacity/freeze",
		descriptionFull : "You choose an area of water that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways." + "\n " + "\u2022 You instantaneously move or otherwise change the flow of the water as you direct, up to 5 feet in any direction. This movement doesn't have enough force to cause damage." + "\n " + "\u2022 You cause the water to form into simple shapes and animate at your direction. This change lasts for 1 hour." + "\n " + "\u2022 You change the water's color or opacity. The water must be changed in the same way throughout. This change lasts for 1 hour." + "\n " + "\u2022 You freeze the water, provided that there are no creatures in it. The water unfreezes in 1 hour." + "\n\n" + "If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."
	};
}
// reprint from Mordenkainen's Tome of Foes
if (!SourceList.MToF) {
	RaceList["sea elf"] = {
		regExpSearch : /^(?!.*half)((?=.*\b(elfs?|elves|elvish|elven)\b)(?=.*\b(seas?|oceans?|water)\b)).*$/i,
		name : "Sea elf",
		sortname : "Elf, Sea",
		source : [["MToF", 62], ["W", 163], ["UA:ES", 1]],
		plural : "Sea elves",
		size : 3,
		speed : {
			walk : { spd : 30, enc : 20 },
			swim : { spd : 30, enc : 20 }
		},
		weaponProfs : [false, false, ["spear", "trident", "light crossbow", "net"]],
		languageProfs : ["Common", "Elvish", "Aquan", "Friend of the Sea"],
		vision : [["Darkvision", 60]],
		savetxt : {
			text : ["Magic can't put me to sleep"],
			adv_vs : ["charmed"]
		},
		skills : ["Perception"],
		age : " typically claim adulthood around age 100 and can live to be 750 years old",
		height : " range from under 5 to almost 6 feet tall (4'6\" + 2d8\")",
		weight : " weigh around 115 lb (90 + 2d8 \xD7 1d4 lb)",
		heightMetric : " range from under 1,5 to almost 1,8 metres tall (140 + 5d8 cm)",
		weightMetric : " weigh around 52 kg (40 + 5d8 \xD7 2d4 / 10 kg)",
		scores : [0, 2, 1, 0, 0, 0],
		trait : "Sea Elf (+2 Dexterity, +1 Constitution)" + desc([
			"Trance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. While meditating, I can dream after a fashion. After resting in this way, I gain the same benefit that a human does from 8 hours of sleep, thus needing only 4 hours for a long rest.",
			"Child of the Sea. I have 30 ft swimming speed and can breathe air and water.",
			"Friend of the Sea: Through sounds and gestures, I can communicate simple ideas with any beast that has an inborn swimming speed."
		])
	};
}
// reprint from the Tortle Package
if (!RaceList.tortle) {
	RaceList.tortle = {
		regExpSearch : /tortle/i,
		name : "Tortle",
		source : [["TP", 4], ["W", 181]],
		plural : "Tortles",
		size : 3,
		speed : {
			walk : { spd : 30, enc : 20 }
		},
		languageProfs : ["Common", "Aquan"],
		skills : ["Survival"],
		armorOptions : [{
			regExpSearch : /^(?=.*tortle)(?=.*shell).*$/i,
			name : "Tortle's Shell",
			source : [["TP", 4], ["W", 181]],
			ac : 17,
			dex : -10,
			selectNow : true
		}],
		weaponOptions : [{
			baseWeapon : "unarmed strike",
			regExpSearch : /^(?=.*tortle)(?=.*\bclaws?\b).*$/i,
			name : "Tortle's Claws",
			source : [["TP", 4], ["W", 181]],
			damage : [1, 4, "slashing"],
			selectNow : true
		}],
		age : " reach adulthood by the age of 15 and live an average of 50 years",
		height : " stand between 5 and 6 feet tall (4'10\" + 2d8\")",
		weight : " weigh around 450 lb (400 + 2d8 \xD7 2d4 lb)",
		heightMetric : " stand between 1,5 and 1,8 metres tall (150 + 5d8 cm)",
		weightMetric : " weigh around 190 kg (180 + 5d8 \xD7 4d4 / 10 kg)",
		scores : [2, 0, 0, 0, 1, 0],
		action : [["action", "Shell Defense (start)"], ["bonus action", "Shell Defense (end)"]],
		trait : "Tortle (+2 Strength, +1 Wisdom)"+
		"\n \u2022 Claws: My unarmed strikes with my claws deal 1d4 slashing damage."+
		"\n \u2022 Hold Breath: I can hold my breath for up to 1 hour at a time."+
		"\n \u2022 Natural Armor: I have a base AC of 17, but I can't add my Dex to it or wear armor."+
		"\n \u2022 Shell Defense: As an action, I can withdraw into my shell and gain +4 AC and adv. on Str and Con saves, but I count as prone, have speed 0, have disadv. on Dex saves, and can't take reactions. The only action I can take is a bonus action to emerge from the shell."
	};
} // dupl_end

// Subclasses
AddSubClass("fighter", "echo knight", { // contains contributions by Smashman, @Nod_Hero#2046 (Discord), BraabHimself, and TysonJouglet
	regExpSearch : /^(?!.*(exalted|sacred|holy|divine|nature|natural|purple.*dragon|green))(?=.*(knight|fighter|warrior|militant|warlord|phalanx|gladiator|trooper))(?=.*(echo|mirror|mirage|reflection)).*$/i,
	subname : "Echo Knight",
	source : [["W", 183]],
	fullname : "Echo Knight",
	features : {
		"subclassfeature3" : {
			name : "Manifest Echo",
			source : [["W", 183]],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can magically manifest a translucent image of myself within 15 ft",
				"My echo lasts until I dismiss it as a bonus action, I manifest another, or I'm incapacitated",
				"It is also destroyed if it is more than 30 ft away from me at the end of my turn",
				"It has 1 HP, immunity to all conditions, uses my save bonuses, and AC 14 + Prof Bonus",
				"On my turn as a free action, I can command it to move up to 30 ft in any direction",
				"As a bonus action, I can teleport to swap places with it, at a cost of 15 ft movement",
				"When I use the Attack action on my turn, I can have any attack originate from my echo",
				"I can also make opportunity attacks from the echo's location as if I were in its space"
			]),
			action : [["bonus action", " (summon/dismiss)"], ["bonus action", "Swap Location with Echo"]],
			creaturesAdd : [["Echo"]],
			creatureOptions : [{
				name : "Echo",
				source : [["W", 183]],
				size : 3,
				type : "Echo",
				alignment : "",
				ac : "14+oProf",
				hp : 1,
				hd : [],
				speed : "fly 30 ft (hover)",
				scores : ["", "", "", "", "", ""],
				savesLinked : true,
				condition_immunities : "all conditions",
				passivePerception : 0,
				languages : "",
				challengeRating : "0",
				proficiencyBonus : 0,
				attacksAction : 0,
				attacks : [],
				features : [{
					name : "Echo",
					description : "The echo is a magical, translucent, gray image of its creator that doesn't act and has no turn in combat. It lasts until it is destroyed, dismissed, another is manifested, or its creator is incapacitated. The echo is also destroyed if it is ever more than 30 ft away from its creator at the end of its creator's turn."
				}],
				traits : [{
					name : "Swap Place",
					description : "The echo's creator can, as a bonus action, teleport, magically swapping places with the echo at a cost of 15 feet of the creator's movement, regardless of the distance between the two."
				}, {
					name : "Attack Origin",
					description : "When the echo's creator takes the Attack action on their turn, any attack they make with that action can originate from the echo's space. This choice is made for each attack separately.\n   In addition, when a creature that the echo's creator can see within 5 ft of the echo moves at least 5 ft away from it, its creator can use their reaction to make an opportunity attack against that creature as if its creator was in the echo's space."
				}],
				header : "Echo",
				eval : function(prefix, lvl) {
					// Same size as character
					PickDropdown(prefix + "Comp.Desc.Size", tDoc.getField("Size Category").currentValueIndices);
					Value(prefix + "Comp.Desc.Age", What("Age"));
					Value(prefix + "Comp.Desc.Sex", What("Sex"));
					Value(prefix + "Comp.Desc.Height", What("Height"));
					Value(prefix + "Comp.Desc.Alignment", What("Alignment"));
				}
			}]
		},
		"subclassfeature3.1" : {
			name : "Unleash Incarnation",
			source : [["W", 183]],
			minlevel : 3,
			description : desc([
				"When I use the Attack action, I can make one extra melee attack from my echo's position"
			]),
			usages : "Constitution modifier per ",
			usagescalc : "event.value = Math.max(1, What('Con Mod'));",
			recovery : "long rest"
		},
		"subclassfeature7" : {
			name : "Echo Avatar",
			source : [["W", 183]],
			minlevel : 7,
			description : desc([
				"As an action, I can temporarily transfer my consciousness to my echo for up to 10 min",
				"During this time, I see and hear through its eyes and ears, but not my own eyes and ears",
				"While I use my echo this way, it can be up to 1000 ft away from me without issue",
				"I can end this at any time, requiring no action"
			]),
			action : [["action", ""]]
		},
		"subclassfeature10" : {
			name : "Shadow Martyr",
			source : [["W", 183]],
			minlevel : 10,
			description : desc([
				"As a reaction when a creature I can see is attacked, I can make my echo the target",
				"Before the attack roll, the echo teleports to an empty space within 5 ft of the creature",
				"The attack roll of the triggering attack is then made against the echo instead"
			]),
			action : [["reaction", ""]],
			usages : 1,
			recovery : "short rest"
		},
		"subclassfeature15" : {
			name : "Reclaim Potential",
			source : [["W", 184]],
			minlevel : 15,
			description : desc([
				"When my echo is destroyed by taking damage, I gain 2d6 + my Con mod in temp HP",
				"I can only gain these temporary hit points if I don't already have temporary hit points"
			]),
			usages : "Constitution modifier per ",
			usagescalc : "event.value = Math.max(1, What('Con Mod'));",
			recovery : "long rest"
		},
		"subclassfeature18" : {
			name : "Legion of One",
			source : [["W", 184]],
			minlevel : 18,
			description : desc([
				"I can now manifest two echoes instead of one with the same bonus action",
				"These two can coexist, but if I manifest a third, the previous two are destroyed",
				"Anything I can do from one echo's position can be done from the other's instead",
				"I regain one use of Unleash Incarnation if I have no more remaining when I roll initiative"
			])
		}
	}
});
AddSubClass("wizard", "chronurgy magic", { // contains contributions by bassbogan on GitHub and @Nod_Hero#2046 on Discord
	regExpSearch : /chronurgy|chronomancer|chronurgist/i,
	subname : "Chronurgy Magic",
	source : [["W", 184]],
	fullname : "Chronurgist",
	features : {
		"subclassfeature2" : {
			name : "Chronal Shift",
			source : [["W", 184]],
			minlevel : 2,
			description : desc([
				"As a reaction after I or a creature I see rolls a check, save, or attack, I can force a reroll",
				"I can do this after I see if the roll fails or succeeds; The target must use the second roll."
			]),
			action : [["reaction", ""]],
			usages : 2,
			recovery : "long rest",
			eval : function() {
				// Always have access to dunamancy spells enabled
				if (GetFeatureChoice("classes", "wizard", "spellcasting", true).indexOf("access to dunamancy spells") === -1) {
					ClassFeatureOptions(["wizard", "spellcasting", "access to dunamancy spells", true]);
				}
			},
			removeeval : function() {
				// Remove access to dunamancy spells when removing subclass
				if (GetFeatureChoice("classes", "wizard", "spellcasting", true).indexOf("access to dunamancy spells") !== -1) {
					ClassFeatureOptions(["wizard", "spellcasting", "access to dunamancy spells", true], "remove");
				}
			}
		},
		"subclassfeature2.1" : {
			name : "Temporal Awareness",
			source : [["W", 184]],
			minlevel : 2,
			description : desc([
				"I gain a bonus to my initiative rolls equal to my Intelligence modifier"
			]),
			addMod : { type : "skill", field : "Init", mod : "max(Int|0)", text : "I can add my Intelligence modifier to initiative rolls." }
		},
		"subclassfeature6" : {
			name : "Momentary Stasis",
			source : [["W", 184]],
			minlevel : 6,
			description : desc([
				"As an action, I can have a Large or smaller creature I can see in 60 ft make a Con save",
				"If failed, it is encased in a field of magical energy, incapacitated and has a speed of 0",
				"This lasts until the end of my next turn or until the creature takes any damage"
			]),
			action : [["action", ""]],
			usages : "Intelligence modifier per ",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));",
			recovery : "long rest"
		},
		"subclassfeature10" : {
			name : "Arcane Abeyance",
			source : [["W", 184]],
			minlevel : 10,
			description : desc([
				"When I use a spell slot to cast a 4th-level or lower spell, I can condense it into a mote",
				"The spell is frozen in time at the moment of casting and held within a grey bead",
				"The bead is a Tiny object with 1 HP, AC 15, and immune to poison and psychic damage",
				"After 1 hour or if it is destroyed, it vanishes with a flash of light and the spell is lost",
				"As an action, a creature holding the bead can release the spell within as if they cast it",
				"The spell still uses my spell attack bonus and save DC; The bead vanishes once used"
			]),
			usages : 1,
			recovery : "short rest"
		},
		"subclassfeature14" : {
			name : "Convergent Future",
			source : [["W", 185]],
			minlevel : 14,
			description : desc([
				"As a reaction after I or a creature I see rolls a check, save, or attack, I can choose the roll",
				"I decide the number rolled, if it is the minimum needed to succeed or 1 less than that",
				"When I use this feature, I gain a level of exhaustion which only a long rest can remove"
			]),
			action : [["reaction", ""]]
		}
	}
});
AddSubClass("wizard", "graviturgy magic", { // contains contributions by bassbogan on GitHub and @Nod_Hero#2046 on Discord
	regExpSearch : /^((?=.*graviturgy)(?=.*(wizard|magic|mage))|gravimancer|graviturgist).*$/i,
	subname : "Graviturgy Magic",
	source : [["W", 185]],
	fullname : "Graviturgist",
	features : {
		"subclassfeature2" : {
			name : "Adjust Density",
			source : [["W", 185]],
			minlevel : 2,
			description : desc([
				"As an action, I can magically double or halve the weight of a creature I can see in 30 ft",
				"If doubled, it has -10 ft speed and advantage on Strength checks and Strength saves",
				"If halved, it has +10 ft speed, can jump twice as far, and disadv. on Str checks and saves",
				"This lasts for 1 minute or until my concentration ends (like concentrating on a spell)"
			]),
			action : [["action", ""]],
			additional : levels.map(function (n) {
				return n < 2 ? "" : (n < 10 ? "Large" : "Huge") + " or smaller creatures";
			}),
			eval : function() {
				// Always have access to dunamancy spells enabled
				if (GetFeatureChoice("classes", "wizard", "spellcasting", true).indexOf("access to dunamancy spells") === -1) {
					ClassFeatureOptions(["wizard", "spellcasting", "access to dunamancy spells", true]);
				}
			},
			removeeval : function() {
				// Remove access to dunamancy spells when removing subclass
				if (GetFeatureChoice("classes", "wizard", "spellcasting", true).indexOf("access to dunamancy spells") !== -1) {
					ClassFeatureOptions(["wizard", "spellcasting", "access to dunamancy spells", true], "remove");
				}
			}
		},
		"subclassfeature6" : {
			name : "Gravity Well",
			source : [["W", 185]],
			minlevel : 6,
			description : desc([
				"Whenever I cast a spell on a creature, I can move it 5 ft to an empty space of my choice",
				"This only works if the target is willing, fails its save vs. the spell, or the spell attack hits it"
			]),
		},
		"subclassfeature10" : {
			name : "Violent Attraction",
			source : [["W", 185]],
			minlevel : 10,
			description : desc([
				"As a reaction when I or a creature I see in 60 ft hits a weapon attack, I can improve it",
				"I increase the weapon's velocity, causing it to deal an extra 1d10 damage",
				"As a reaction if a creature within 60 ft is damaged by a fall, I can increase it by 2d10"
			]),
			action : [["reaction", ""]],
			usages : "Intelligence modifier per ",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));",
			recovery : "long rest"
		},
		"subclassfeature14" : {
			name : "Event Horizon",
			source : [["W", 185]],
			minlevel : 14,
			description : desc([
				"As an action, I can magically emit powerful gravitational magic that pulls on hostiles",
				"Whenever a creature hostile to me starts it turn within 30 ft, it must make Str save",
				"If failed, it takes 2d10 force damage and its speed is 0 until the start of its next turn",
				"If successful, it takes half the damage and every foot it moves this turn costs 2 extra feet",
				"This lasts for 1 minute or until my concentration ends (like concentrating on a spell)",
				"I can do this once per long rest, or by expending a 3rd-level or higher spell slot (SS 3+)"
			]),
			action : [["action", ""]],
			usages : 1,
			recovery : "long rest",
			altResource : "SS 3+",
		}
	}
});

// Add option to allow Dunamancy spells for the other spellcastingclasses
AddFeatureChoice(ClassList.bard.features.spellcasting, true, "Access to Dunamancy Spells", {
	name : "Dunamancy Spells",
	extraname : "Optional Bard 1",
	source : [["W", 186]],
	description : desc([
		"All dunamancy spells are added to the bard spell list, each still pending DM's approval"
	]),
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Stop this is not the class' spell list or if this is for a bonus spell entry
				if (spName !== "bard" || spType.indexOf("bonus") !== -1) return;
				spList.extraspells = spList.extraspells.concat(["sapping sting", "gift of alacrity", "magnify gravity", "fortune's favor", "immovable object", "wristpocket", "pulse wave", "gravity sinkhole", "temporal shunt", "gravity fissure", "tether essence", "dark star", "reality break", "ravenous void", "time ravage"]);
			},
			"This optional class feature expands the spell list of the bard class with all dunamancy spells (spell level in brackets): Sapping Sting (cantrip), Gift of Alacrity (1), Magnify Gravity (1), Fortune's Favor (2), Immovable Object (2), Wristpocket (2), Pulse Wave (3), Gravity Sinkhole (4), Temporal Shunt (5), Gravity Fissure (6), Tether Essence (7), Dark Star (8), Reality Break (8),Ravenous Void (9), and Time Ravage (9)."
		]
	}
}, "Optional 1st-level bard features");
AddFeatureChoice(ClassList.cleric.features.spellcasting, true, "Access to Dunamancy Spells", {
	name : "Dunamancy Spells",
	extraname : "Optional Cleric 1",
	source : [["W", 186]],
	description : desc([
		"All dunamancy spells are added to the cleric spell list, each still pending DM's approval"
	]),
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Stop this is not the class' spell list or if this is for a bonus spell entry
				if (spName !== "cleric" || spType.indexOf("bonus") !== -1) return;
				spList.extraspells = spList.extraspells.concat(["sapping sting", "gift of alacrity", "magnify gravity", "fortune's favor", "immovable object", "wristpocket", "pulse wave", "gravity sinkhole", "temporal shunt", "gravity fissure", "tether essence", "dark star", "reality break", "ravenous void", "time ravage"]);
			},
			"This optional class feature expands the spell list of the cleric class with all dunamancy spells (spell level in brackets): Sapping Sting (cantrip), Gift of Alacrity (1), Magnify Gravity (1), Fortune's Favor (2), Immovable Object (2), Wristpocket (2), Pulse Wave (3), Gravity Sinkhole (4), Temporal Shunt (5), Gravity Fissure (6), Tether Essence (7), Dark Star (8), Reality Break (8),Ravenous Void (9), and Time Ravage (9)."
		]
	}
}, "Optional 1st-level cleric features");
AddFeatureChoice(ClassList.druid.features.spellcasting, true, "Access to Dunamancy Spells", {
	name : "Dunamancy Spells",
	extraname : "Optional Druid 1",
	source : [["W", 186]],
	description : desc([
		"All dunamancy spells are added to the druid spell list, each still pending DM's approval"
	]),
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Stop this is not the class' spell list or if this is for a bonus spell entry
				if (spName !== "druid" || spType.indexOf("bonus") !== -1) return;
				spList.extraspells = spList.extraspells.concat(["sapping sting", "gift of alacrity", "magnify gravity", "fortune's favor", "immovable object", "wristpocket", "pulse wave", "gravity sinkhole", "temporal shunt", "gravity fissure", "tether essence", "dark star", "reality break", "ravenous void", "time ravage"]);
			},
			"This optional class feature expands the spell list of the druid class with all dunamancy spells (spell level in brackets): Sapping Sting (cantrip), Gift of Alacrity (1), Magnify Gravity (1), Fortune's Favor (2), Immovable Object (2), Wristpocket (2), Pulse Wave (3), Gravity Sinkhole (4), Temporal Shunt (5), Gravity Fissure (6), Tether Essence (7), Dark Star (8), Reality Break (8),Ravenous Void (9), and Time Ravage (9)."
		]
	}
}, "Optional 1st-level druid features");
AddFeatureChoice(ClassList.paladin.features.spellcasting, true, "Access to Dunamancy Spells", {
	name : "Dunamancy Spells",
	extraname : "Optional Paladin 2",
	source : [["W", 186]],
	description : desc([
		"All dunamancy spells are added to the paladin spell list, each still pending DM's approval"
	]),
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Stop this is not the class' spell list or if this is for a bonus spell entry
				if (spName !== "paladin" || spType.indexOf("bonus") !== -1) return;
				spList.extraspells = spList.extraspells.concat(["gift of alacrity", "magnify gravity", "fortune's favor", "immovable object", "wristpocket", "pulse wave", "gravity sinkhole", "temporal shunt"]);
			},
			"This optional class feature expands the spell list of the paladin class with all dunamancy spells (spell level in brackets): Gift of Alacrity (1), Magnify Gravity (1), Fortune's Favor (2), Immovable Object (2), Wristpocket (2), Pulse Wave (3), Gravity Sinkhole (4), and Temporal Shunt (5)."
		]
	}
}, "Optional 2nd-level paladin features");
var EGtW_Ranger_Dunamancy_Spells = {
	name : "Dunamancy Spells",
	extraname : "Optional Ranger 2",
	source : [["W", 186]],
	description : desc([
		"All dunamancy spells are added to the ranger spell list, each still pending DM's approval"
	]),
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Stop this is not the class' spell list or if this is for a bonus spell entry
				if ((spName !== "ranger" && spName !== "rangerua") || spType.indexOf("bonus") !== -1) return;
				spList.extraspells = spList.extraspells.concat(["gift of alacrity", "magnify gravity", "fortune's favor", "immovable object", "wristpocket", "pulse wave", "gravity sinkhole", "temporal shunt"]);
			},
			"This optional class feature expands the spell list of the ranger class with all dunamancy spells (spell level in brackets): Gift of Alacrity (1), Magnify Gravity (1), Fortune's Favor (2), Immovable Object (2), Wristpocket (2), Pulse Wave (3), Gravity Sinkhole (4), and Temporal Shunt (5)."
		]
	}
};
AddFeatureChoice(ClassList.ranger.features.spellcasting, true, "Access to Dunamancy Spells", EGtW_Ranger_Dunamancy_Spells, "Optional 2nd-level ranger features");
RunFunctionAtEnd(function() {
	if (!ClassList["rangerua"]) return;
	AddFeatureChoice(ClassList.rangerua.features.spellcasting, true, "Access to Dunamancy Spells", EGtW_Ranger_Dunamancy_Spells, "Optional 2nd-level ranger features");
});
AddFeatureChoice(ClassList.sorcerer.features.spellcasting, true, "Access to Dunamancy Spells", {
	name : "Dunamancy Spells",
	extraname : "Optional Sorcerer 1",
	source : [["W", 186]],
	description : desc([
		"All dunamancy spells are added to the sorcerer spell list, each still pending DM's approval"
	]),
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Stop this is not the class' spell list or if this is for a bonus spell entry
				if (spName !== "sorcerer" || spType.indexOf("bonus") !== -1) return;
				spList.extraspells = spList.extraspells.concat(["sapping sting", "gift of alacrity", "magnify gravity", "fortune's favor", "immovable object", "wristpocket", "pulse wave", "gravity sinkhole", "temporal shunt", "gravity fissure", "tether essence", "dark star", "reality break", "ravenous void", "time ravage"]);
			},
			"This optional class feature expands the spell list of the sorcerer class with all dunamancy spells (spell level in brackets): Sapping Sting (cantrip), Gift of Alacrity (1), Magnify Gravity (1), Fortune's Favor (2), Immovable Object (2), Wristpocket (2), Pulse Wave (3), Gravity Sinkhole (4), Temporal Shunt (5), Gravity Fissure (6), Tether Essence (7), Dark Star (8), Reality Break (8),Ravenous Void (9), and Time Ravage (9)."
		]
	}
}, "Optional sorcerer features");
AddFeatureChoice(ClassList.warlock.features["pact magic"], true, "Access to Dunamancy Spells", {
	name : "Dunamancy Spells",
	extraname : "Optional Warlock 1",
	source : [["W", 186]],
	description : desc([
		"All dunamancy spells are added to the warlock spell list, each still pending DM's approval"
	]),
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Stop this is not the class' spell list or if this is for a bonus spell entry
				if (spName !== "warlock" || (spType.indexOf("bonus") !== -1 && (!spList["class"] || spList["class"] !== "warlock"))) return;
				spList.extraspells = spList.extraspells.concat(["sapping sting", "gift of alacrity", "magnify gravity", "fortune's favor", "immovable object", "wristpocket", "pulse wave", "gravity sinkhole", "temporal shunt", "gravity fissure", "tether essence", "dark star", "reality break", "ravenous void", "time ravage"]);
			},
			"This optional class feature expands the spell list of the warlock class with all dunamancy spells (spell level in brackets): Sapping Sting (cantrip), Gift of Alacrity (1), Magnify Gravity (1), Fortune's Favor (2), Immovable Object (2), Wristpocket (2), Pulse Wave (3), Gravity Sinkhole (4), Temporal Shunt (5), Gravity Fissure (6), Tether Essence (7), Dark Star (8), Reality Break (8),Ravenous Void (9), and Time Ravage (9)."
		]
	}
}, "Optional 1st-level warlock features");
AddFeatureChoice(ClassList.wizard.features.spellcasting, true, "Access to Dunamancy Spells", {
	name : "Dunamancy Spells",
	extraname : "Optional Wizard 1",
	source : [["W", 186]],
	description : desc([
		"All dunamancy spells are added to the wizard spell list, each still pending DM's approval"
	]),
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Stop this is not the class' spell list or if this is for a bonus spell entry
				if (spName !== "wizard" || spType.indexOf("bonus") !== -1) return;
				spList.extraspells = spList.extraspells.concat(["sapping sting", "gift of alacrity", "magnify gravity", "fortune's favor", "immovable object", "wristpocket", "pulse wave", "gravity sinkhole", "temporal shunt", "gravity fissure", "tether essence", "dark star", "reality break", "ravenous void", "time ravage"]);
			},
			"This optional class feature expands the spell list of the wizard class with all dunamancy spells (spell level in brackets): Sapping Sting (cantrip), Gift of Alacrity (1), Magnify Gravity (1), Fortune's Favor (2), Immovable Object (2), Wristpocket (2), Pulse Wave (3), Gravity Sinkhole (4), Temporal Shunt (5), Gravity Fissure (6), Tether Essence (7), Dark Star (8), Reality Break (8),Ravenous Void (9), and Time Ravage (9)."
		]
	}
}, "Optional 1st-level wizard features");
RunFunctionAtEnd(function() {
	if (!ClassList.artificer) return;
	AddFeatureChoice(ClassList.artificer.features.spellcasting, true, "Access to Dunamancy Spells", {
		name : "Dunamancy Spells",
		extraname : "Optional Artificer 1",
		source : [["W", 186]],
		description : desc([
			"All dunamancy spells are added to the artificer spell list, each still pending DM's approval"
		]),
		calcChanges : {
			spellList : [
				function(spList, spName, spType) {
					if (spName !== "artificer" || spType.indexOf("bonus") !== -1) return;
					spList.extraspells = spList.extraspells.concat(["sapping sting", "gift of alacrity", "magnify gravity", "fortune's favor", "immovable object", "wristpocket", "pulse wave", "gravity sinkhole", "temporal shunt"]);
				},
				"This optional class feature expands the spell list of the artificer class with all dunamancy spells (spell level in brackets): Sapping Sting (cantrip), Gift of Alacrity (1), Magnify Gravity (1), Fortune's Favor (2), Immovable Object (2), Wristpocket (2), Pulse Wave (3), Gravity Sinkhole (4), Temporal Shunt (5)."
			]
		}
	}, "Optional 1st-level artificer features");
});

// Backgrounds (includes contributions by remcovandalen)
BackgroundList["grinner"] = {
	regExpSearch : /grinner/i,
	name : "Grinner",
	source : [["W", 200]],
	skills : ["Deception", "Performance"],
	toolProfs : [["Thieves' tools", "Dex"], ["Musical instrument", 1]],
	gold : 15,
	equipleft : [
		["Disguise kit", "", 3],
		["Musical instrument", "", ""]
	],
	equipright : [
		["Fine clothes", "", 6],
		["Gold-plated ring with smiling face", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Ballad of the Grinning Fool",
	trait : [
		"I love the spotlight. Everyone, look at me!",
		"Give me a drink and I'm your friend.",
		"Talk to me about yourself. I'm a hell of a listener.",
		"I hate to start fights, but I love to finish them.",
		"I can't sit still.",
		"I'm always humming an old tune from my past.",
		"When I don't have a reason to smile, I'm miserable.",
		"I'm lucky like you wouldn't believe."
	],
	ideal : [
		["Revolution",
			"Revolution: Tyrants must fall, no matter the cost. (Chaotic)"
		],
		["Compassion",
			"Compassion: The only way to make a better world is to perform small kindnesses. (Good)"
		],
		["Justice",
			"Justice: A nation built upon just foundations will uphold freedom for all. (Law)"
		],
		["Expression",
			"Expression: Music, joy, and laughter are the keys to freedom. (Good)"
		],
		["Self-Determination",
			"Self-Determination: People should be free to do as they please. (Chaotic)"
		],
		["Vigilance",
			"Vigilance: A free people must be carefully taught, lest they be misled. (Neutral)"
		]
	],
	bond : [
		"I lost someone important to an agent of the empire. That regime will fall.",
		"The first people to be hurt by this war will be the common folk. I need to protect them.",
		"Music helped me through a dark time in my life. Now, I'll use music to change the world.",
		"I will be known as the greatest spy who ever lived.",
		"All life is precious to me. I know I can change the world without taking a humanoid life.",
		"The elite in their ivory towers don't understand how we suffer. I intend to show them."
	],
	flaw : [
		"I've never lied once in my life. What? No, I'm not crossing my fingers!",
		"I do everything big! Subtlety? I don't know the meaning of subtlety! Oh, that's a problem?",
		"Being a spy in wartime is painful. I've seen so much suffering, I think I'm losing my mind.",
		"I can't focus on my mission. I just want to carouse and sing and play!",
		"Yeah, that's my name. Yeah, I'm a Grinner spy. Who cares about staying undercover?",
		"I can't afford to trust anyone. Not. Anyone."
	],
	extra : [
		"Select Your Favorite Code-Song",
		"Zan's Coming Back",
		"Blow Fire Down the Coast",
		"Hush! Onward Come the Dragons",
		"Let the Sword Grow Rust",
		"Drink Deep, Li'l Hummingbird",
		"Dirge for the Emerald Fire"
	]
};
BackgroundFeatureList["ballad of the grinning fool"] = {
	description : "A member of the Golden Grin will find me and give shelter to me and my companions if I play the Ballad of the Grinning Fool in a major tavern or inn in a large city. This shelter might be discontinued if it becomes too dangerous to hide me. I must use the ballad with caution, for those who know the ballad can be traitors, counterspies, or agents of tyranny.",
	source : [["W", 200]]
};
BackgroundList["volstrucker agent"] = {
	regExpSearch : /^(?=.*volstrucker)(?=.*agent).*$/i,
	name : "Volstrucker Agent",
	source : [["W", 202]],
	skills : ["Deception", "Stealth"],
	toolProfs : ["Poisoner's kit"],
	languageProfs : [1],
	gold : 10,
	equipleft : [
		["Poisoner's kit", "", 2]
	],
	equipright : [
		["Common clothes", "", 3],
		["Black cloak with a hood", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Shadow Network",
	trait : [
		"I prefer to keep my thoughts to myself.",
		"I indulge vice in excess to quiet my conscience.",
		"I've left emotion behind me. I'm now perfectly placid.",
		"Some event from the past keeps worming its way into my mind, making me restless.",
		"I always keep my word\u2014except when I'm commanded to break it.",
		"I laugh off insults and never take them personally."
	],
	ideal : [
		["Order",
			"Order: The will of the crown is absolute. (Law)"
		],
		["True Loyalty",
			"True Loyalty: The Cerberus Assembly is greater than any power, even the crown. (Any)"
		],
		["Death",
			"Death: The penalty for disloyalty is death. (Evil)"
		],
		["Determination",
			"Determination: I cannot fail. Not ever. (Neutral)"
		],
		["Fear",
			"Fear: People should not respect power. They should fear it. (Evil)"
		],
		["Escape",
			"Escape: The Volstrucker are pure evil! I can't atone for what I've done for them, but I can escape with my life. (Any)"
		]
	],
	bond : [
		"The job is all that matters. I will see it through.",
		"My orders are important, but my comrades are worth more than anything. I would die for them.",
		"Everything I've done, I've done to protect someone close to me.",
		"If the empire falls, all of civilization falls with it. I will hold back chaos and barbarism at any cost."
	],
	flaw : [
		"I drink to dull the pain in the back of my head.",
		"I go a bit mad when I see blood.",
		"I can hear the voices of everyone I've killed. I see their faces. I can't be free of these ghosts.",
		"Fear is a powerful motivator. I will do whatever it takes to prevent those who know what I am from seeing me fail, and from those I care about from knowing what I am."
	],
	extra : [
		"Select Your Tragedy",
		"Familicide",
		"Amnesia",
		"Capture",
		"Starvation",
		"Disfigurement",
		"Vicissitude"
	]
};
BackgroundFeatureList["shadow network"] = {
	description : "I can use the Volstrucker shadow network to communicate with other members over long distances. I can write a letter in special arcane ink (10 gp per page), address it to another member of the Volstrucker, and cast it into a fire. It will burn and materialize whole again on the person of the addressee. This special ink is the same as used for a wizard's spellbook.",
	source : [["W", 202]]
};
AddBackgroundVariant("acolyte", "luxonborn", {
	regExpSearch : /luxonborn/i,
	name : "Luxonborn",
	source : [["W", 203]]
});
AddBackgroundVariant("criminal", "myriad operative", {
	regExpSearch : /^(?=.*myriad)(?=.*operative).*$/i,
	name : "Myriad Operative",
	source : [["W", 203]],
	extra : ""
});
AddBackgroundVariant("sailor", "revelry pirate", {
	regExpSearch : /^(?=.*revelry)(?=.*pirate).*$/i,
	name : "Revelry Pirate",
	source : [["W", 203]]
});
AddBackgroundVariant("sage", "cobalt scholar", {
	regExpSearch : /^(?=.*cobalt)(?=.*scholar).*$/i,
	name : "Cobalt Scholar",
	source : [["W", 203]],
	extra : [
		"Select Specific Role",
		"Rank-and-file",
		"Expositors",
		"Archivists"
	]
});
AddBackgroundVariant("criminal", "augen trust", {
	regExpSearch : /^(?=.*augen)(?=.*trust).*$/i,
	name : "Augen Trust",
	source : [["W", 203]],
	extra : ""
});

// Spells (contains contributions by Biggoron144)
SpellsList["sapping sting"] = {
	name : "Sapping Sting",
	classes : [],
	source : [["W", 189]],
	level : 0,
	school : "Necro",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	description : "1 creature that I can see save or 1d4 Necrotic dmg and fall prone; +1d4 at CL 5, 11, and 17",
	descriptionCantripDie : "1 creature that I can see save or `CD`d4 Necrotic dmg and fall prone",
	descriptionFull : "You sap the vitality of one creature you can see in range. The target must succeed on a Constitution saving throw or take 1d4 necrotic damage and fall prone.\n   This spell's damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4)."
};
WeaponsList["sapping sting"] = {
	regExpSearch : /^(?=.*sapping)(?=.*sting).*$/i,
	name : "Sapping Sting",
	source : [["W", 189]],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 4, "necrotic"],
	range : "30 ft",
	description : "Con save, success - no damage, fail - also fall prone",
	abilitytodamage : false,
	dc : true
};
SpellsList["gift of alacrity"] = {
	name : "Gift of Alacrity",
	classes : [],
	source : [["W", 186]],
	level : 1,
	school : "Div",
	time : "1 min",
	range : "Touch",
	components : "V,S",
	duration : "8 h",
	description : "1 willing creature can add 1d8 to its initiative rolls for the duration",
	descriptionFull : "You touch a willing creature. For the duration, the target can add 1d8 to its initiative rolls."
};
SpellsList["magnify gravity"] = {
	name : "Magnify Gravity",
	classes : [],
	source : [["W", 188]],
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "1 rnd",
	save : "Con",
	description : "10-ft rad all crea 2d8+1d8/SL Force dmg, half spd; Save halves \u0026 no spd reduce; Str check to move obj",
	descriptionShorter : "10-ft rad all 2d8+1d8/SL Force dmg, half spd; Save half, no spd reduce; Str check to move obj",
	descriptionFull : "The gravity in a 10-foot-radius sphere centered on a point you can see within range increases for a moment. Each creature in the sphere on the turn when you cast the spell must make a Constitution saving throw. On a failed save, a creature takes 2d8 force damage, and its speed is halved until the end of its next turn. On a successful save, a creature takes half as much damage and suffers no reduction to its speed.\n   Until the start of your next turn, any object that isn't being worn or carried in the sphere requires a successful Strength check against your spell save DC to pick up or move." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
};
SpellsList["fortune's favor"] = {
	name : "Fortune's Favor",
	classes : [],
	source : [["W", 186]],
	level : 2,
	school : "Div",
	time : "1 min",
	range : "Touch",
	components : "V,S,M\u2020",
	compMaterial : "A white pearl worth at least 100 gp, which the spell consumes",
	duration : "1 h",
	description : "1+1/SL crea once roll extra d20 and select which to use for atk, check, save, or atk vs. it (100gp cons.)",
	descriptionFull : "You impart latent luck to yourself or one willing creature you can see within range. When the chosen creature makes an attack roll, an ability check, or a saving throw before the spell ends, it can dismiss this spell on itself to roll an additional d20 and choose which of the d20s to use. Alternatively, when an attack roll is made against the chosen creature, it can dismiss this spell on itself to roll a d20 and choose which of the d20s to use, the one it rolled or the one the attacker rolled.\n   If the original d20 roll has advantage or disadvantage, the creature rolls the additional d20 after advantage or disadvantage has been applied to the original roll." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd."
};
SpellsList["immovable object"] = {
	name : "Immovable Object",
	classes : [],
	source : [["W", 187]],
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "V,S,M\u2020",
	compMaterial : "Gold dust worth at least 25 gp, which the spell consumes",
	duration : "1 h",
	description : "1 obj <10 lb fixed in place; holds 4k lb; Str check move, except chosen/password; See B (25gp cons.)",
	descriptionMetric : "1 obj <5 kg fixed in place; holds 2k kg; Str check move, except chosen/password; See B (25gp cons.)",
	descriptionFull : "You touch an object that weighs no more than 10 pounds and cause it to become magically fixed in place. You and the creatures you designate when you cast this spell can move the object normally. You can also set a password that, when spoken within 5 feet of the object, suppresses this spell for 1 minute.\n   If the object is fixed in the air, it can hold up to 4,000 pounds of weight. More weight causes the object to fall. Otherwise, a creature can use an action to make a Strength check against your spell save DC. On a success, the creature can move the object up to 10 feet." + AtHigherLevels + "If you cast this spell using a spell slot of 4th or 5th level, the DC to move the object increases by 5, it can carry up to 8,000 pounds of weight, and the duration increases to 24 hours. If you cast this spell using a spell slot of 6th level or higher, the DC to move the object increases by 10, it can carry up to 20,000 pounds of weight, and the effect is permanent until dispelled."
};
SpellsList["wristpocket"] = {
	name : "Wristpocket",
	classes : [],
	source : [["W", 190]],
	ritual : true,
	level : 2,
	school : "Conj",
	time : "1 a",
	range : "Self",
	components : "S",
	duration : "Conc, 1 h",
	description : "Store 1 held obj <5 lb in extradim. space; 1 a to summon obj in free hand or return; reappears at end",
	descriptionMetric : "Store 1 held obj <2,5 kg in extradim. space; 1 a summon obj in free hand or return; reappears at end",
	descriptionFull : "You flick your wrist, causing one object in your hand to vanish. The object, which only you can be holding and can weigh no more than 5 pounds, is transported to an extradimensional space, where it remains for the duration.\n   Until the spell ends, you can use your action to summon the object to your free hand, and you can use your action to return the object to the extradimensional space. An object still in the pocket plane when the spell ends appears in your space, at your feet."
};
SpellsList["pulse wave"] = {
	name : "Pulse Wave",
	classes : [],
	source : [["W", 188]],
	level : 3,
	school : "Evoc",
	time : "1 a",
	range : "S:30" + (typePF ? "-" : "") + "ft cone",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	description : "6d6+1d6/SL Force dmg, pulled/pushed 15+5/SL ft from me (also free obj); save halves, no move",
	descriptionMetric : "6d6+1d6/SL Force dmg, pull/push 4,5+1,5/SL m from me (also free obj); save halves, no move",
	descriptionShorter : "6d6+1d6/SL Force dmg, pull/push 15+5/SL ft from me (also free obj); save half, no move",
	descriptionFull : "You create intense pressure, unleash it in a 30-foot cone, and decide whether the pressure pulls or pushes creatures and objects. Each creature in that cone must make a Constitution saving throw. A creature takes 6d6 force damage on a failed save, or half as much damage on a successful one. And every creature that fails the save is either pulled 15 feet toward you or pushed 15 feet away from you, depending on the choice you made for the spell.\n   In addition, unsecured objects that are completely within the cone are likewise pulled or pushed 15 feet." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 and the distance pulled or pushed increases by 5 feet for each slot level above 3rd."
};
SpellsList["gravity sinkhole"] = {
	name : "Gravity Sinkhole",
	classes : [],
	source : [["W", 187]],
	level : 4,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	components : "V,S,M",
	compMaterial : "A black marble",
	duration : "Instantaneous",
	save : "Con",
	description : "20-ft rad all crea 5d10+1d10/SL Force dmg, pulled to center of radius; save halves and not pulled",
	descriptionFull : "A 20-foot-radius sphere of crushing force forms at a point you can see within range and tugs at the creatures there. Each creature in the sphere must make a Constitution saving throw. On a failed save, the creature takes 5d10 force damage and is pulled in a straight line toward the center of the sphere, ending in an unoccupied space as close to the center as possible (even if that space is in the air). On a successful save, the creature takes half as much damage and isn't pulled." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d10 for each slot level above 4th."
};
SpellsList["temporal shunt"] = {
	name : "Temporal Shunt",
	classes : [],
	source : [["W", 189]],
	level : 5,
	school : "Trans",
	time : "1 rea",
	timeFull : "1 reaction, taken when a creature you can see makes an attack roll or starts to cast a spell",
	range : "120 ft",
	components : "V,S",
	duration : "1 rnd",
	save : "Wis",
	description : "Cast if see atk/cast, 1+1/SL crea, each max 30 ft apart, save or vanish until next turn, atk/cast wasted",
	descriptionFull : "You target the triggering creature, which must succeed on a Wisdom saving throw or vanish, being thrown to another point in time and causing the attack to miss or the spell to be wasted. At the start of its next turn, the target reappears where it was or in the closest unoccupied space. The target doesn't remember you casting the spell or being affected by it." + AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, you can target one additional creature for each slot level above 5th. All targets must be within 30 feet of each other."
};
SpellsList["gravity fissure"] = {
	name : "Gravity Fissure",
	source : [["W", 187]],
	level : 6,
	school : "Evoc",
	time : "1 a",
	range : "S:100" + (typePF ? "-" : "") + "ft line",
	components : "V,S,M",
	compMaterial : "A fistful of iron filings",
	duration : "Instantaneous",
	save : "Con",
	description : "100-ft long 5-ft wide all 8d8+1d8/SL Force dmg, save half; all in 10 ft of line save or dmg \u0026 pull to it",
	descriptionShorter : "100-ft long 5-ft wide all 8d8+1d8/SL Force dmg, save half; all in 10 ft of it save or dmg \u0026 pulled",
	descriptionFull : "You manifest a ravine of gravitational energy in a line originating from you that is 100 feet long and 5 feet wide. Each creature in that line must make a Constitution saving throw, taking 8d8 force damage on a failed save, or half as much damage on a successful one.\n   Each creature within 10 feet of the line but not in it must succeed on a Constitution saving throw or take 8d8 force damage and be pulled toward the line until the creature is in its area." + AtHigherLevels + "When you cast this spell using a spell slot of 7th level or higher, the damage increases by 1d8 for each slot level above 6th."
};
SpellsList["tether essence"] = {
	name : "Tether Essence",
	classes : [],
	source : [["W", 189]],
	level : 7,
	school : "Necro",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M\u2020",
	compMaterial : "A spool of platinum cord worth at least 250 gp, which the spell consumes",
	duration : "Conc, 1 h",
	save : "Con",
	description : "2 crea save (dis. if in 30 ft) or if both fail take same dmg and same healing; ends if 0 hp (250gp cons.)",
	descriptionFull : "Two creatures you can see within range must make a Constitution saving throw, with disadvantage if they are within 30 feet of each other. Either creature can willingly fail the save. If either save succeeds, the spell has no effect. If both saves fail, the creatures are magically linked for the duration, regardless of the distance between them. When damage is dealt to one of them, the same damage is dealt to the other one. If hit points are restored to one of them, the same number of hit points are restored to the other one. If either of the tethered creatures is reduced to 0 hit points, the spell ends on both. If the spell ends on one creature, it ends on both."
};
SpellsList["dark star"] = {
	name : "Dark Star",
	classes : [],
	source : [["W", 186]],
	level : 8,
	school : "Evoc",
	time : "1 a",
	range : "150 ft",
	components : "V,S,M",
	compMaterial : "A shard of onyx and a drop of the caster's blood, both of which the spell consumes",
	duration : "Conc, 1 min",
	save : "Con",
	description : "Up to 40-ft rad as Darkness spell, as Silence spell, dif. ter.; enter/start turn 8d10 Force dmg, save half",
	descriptionShorter : "Up to 40-ft rad as Darkness \u0026 Silence, dif. ter.; enter/start turn 8d10 Force dmg, save half",
	descriptionFull : "This spell creates a sphere centered on a point you choose within range. The sphere can have a radius of up to 40 feet. The area within this sphere is filled with magical darkness and crushing gravitational force.\n   For the duration, the spell's area is difficult terrain. A creature with darkvision can't see through the magical darkness, and nonmagical light can't illuminate it. No sound can be created within or pass through the area. Any creature or object entirely inside the sphere is immune to thunder damage, and creatures are deafened while entirely inside it. Casting a spell that includes a verbal component is impossible there.\n   Any creature that enters the spell's area for the first time on a turn or starts its turn there must make a Constitution saving throw. The creature takes 8d10 force damage on a failed save, or half as much damage on a successful one. A creature reduced to 0 hit points by this damage is disintegrated. A disintegrated creature and everything it is wearing and carrying, except magic items, are reduced to a pile of fine gray dust."
};
SpellsList["reality break"] = {
	name : "Reality Break",
	classes : [],
	source : [["W", 189]],
	level : 8,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "A crystal prism",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "1 crea save or can't take reactions, random effect each turn, see book; extra save at end of every turn",
	descriptionFull : "You shatter the barriers between realities and timelines, thrusting a creature into turmoil and madness. The target must succeed on a Wisdom saving throw, or it can't take reactions until the spell ends. The affected target must also roll a d10 at the start of each of its turns; the number rolled determines what happens to the target, as shown on the Reality Break Effects table."+
	"\n   At the end of each of its turns, the affected target can repeat the Wisdom saving throw, ending the spell on itself on a success."+
	"\n\n d10 \tEffect"+
	"\n 1-2 \tVision of the Far Realm: The target takes 6d12 psychic damage, and it is stunned until the end of the turn."+
	"\n 3-5 \tRending Rift: The target must make a Dexterity saving throw, taking 8d12 force damage on a failed save, or half as much damage on a successful one."+
	"\n 6-8 \tWormhole: The target is teleported, along with everything it is wearing and carrying, up to 30 feet to an unoccupied space of your choice that you can see. The target also takes 10d12 force damage and is knocked prone."+
	"\n 9-10\tChill of the Dark Void: The target takes 10d12 cold damage, and it is blinded until the end of the turn."
};
SpellsList["ravenous void"] = {
	name : "Ravenous Void",
	classes : [],
	source : [["W", 188]],
	level : 9,
	school : "Evoc",
	time : "1 a",
	range : "1000 ft",
	components : "V,S,M",
	compMaterial : "A small, nine-pointed star made of iron",
	duration : "Conc, 1 min",
	save : "Str",
	description : "20-ft rad all enter/start 5d10 Force dmg, restrained; all enter/start in 100 ft save or pulled in; see B",
	descriptionShorter : "20-ft rad all enter/start 5d10 Force dmg, restrained; all start in 100 ft save or pull in; see B",
	descriptionFull : "You create a 20-foot-radius sphere of destructive gravitational force centered on a point you can see within range. For the spell's duration, the sphere and any space within 100 feet of it are difficult terrain, and nonmagical objects fully inside the sphere are destroyed if they aren't being worn or carried.\n   When the sphere appears and at the start of each of your turns until the spell ends, unsecured objects within 100 feet of the sphere are pulled toward the sphere's center, ending in an unoccupied space as close to the center as possible.\n   A creature that starts its turn within 100 feet of the sphere must succeed on a Strength saving throw or be pulled straight toward the sphere's center, ending in an unoccupied space as close to the center as possible. A creature that enters the sphere for the first time on a turn or starts its turn there takes 5d10 force damage and is restrained until it is no longer in the sphere. If the sphere is in the air, the restrained creature hovers inside the sphere. A creature can use its action to make a Strength check against your spell save DC, ending this restrained condition on itself or another creature in the sphere that it can reach. A creature reduced to 0 hit points by this spell is annihilated, along with any nonmagical items it is wearing or carrying."
};
SpellsList["time ravage"] = {
	name : "Time Ravage",
	classes : [],
	source : [["W", 189]],
	level : 9,
	school : "Necro",
	time : "1 a",
	range : "90 ft",
	components : "V,S,M\u2020",
	compMaterial : "An hourglass filled with diamond dust worth at least 5,000 gp, which the spell consumes",
	duration : "Instantaneous",
	save : "Con",
	description : "1 crea 10d12 Necrotic dmg \u0026 aged: dis. atk/chk/save, die in 30 days; save half, not aged (5k gp cons.)",
	descriptionShorter : "1 crea 10d12 Necro. dmg, aged: dis. atk/chk/save, die in 30 days; save hlf, no aged (5k gp cons)",
	descriptionFull : "You target a creature you can see within range, putting its physical form through the devastation of rapid aging. The target must make a Constitution saving throw, taking 10d12 necrotic damage on a failed save, or half as much damage on a successful one. If the save fails, the target also ages to the point where it has only 30 days left before it dies of old age. In this aged state, the target has disadvantage on attack rolls, ability checks, and saving throws, and its walking speed is halved. Only the wish spell or the greater restoration cast with a 9th-level spell slot can end these effects and restore the target to its previous age."
};

// Creatures - new beasts
CreatureList["moorbounder"] = {
	name : "Moorbounder",
	source : [["W", 295]],
	size : 2,
	type : "Beast",
	alignment : "Unaligned",
	ac : 13,
	hp : 30,
	hd : [4, 10],
	speed : "70 ft",
	scores : [18, 14, 14, 2, 13, 5],
	senses : "Darkvision 60 ft",
	passivePerception : 11,
	challengeRating : "1",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Claws",
		ability : 1,
		damage : [4, 4, "slashing"],
		range : "Melee (5 ft)",
		description : ""
	}],
	traits : [{
		name : "Standing Leap",
		description : "The moorbounder's long jump is up to 40 ft and its high jump is up to 20 ft, with or without a running start."
	}]
};
CreatureList["bristled moorbounder"] = {
	name : "Bristled Moorbounder",
	source : [["W", 295]],
	size : 2,
	type : "Beast",
	alignment : "Unaligned",
	ac : 15,
	hp : 52,
	hd : [7, 10],
	speed : "70 ft",
	scores : [18, 14, 14, 2, 13, 5],
	senses : "Darkvision 60 ft",
	passivePerception : 11,
	challengeRating : "3",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
		name : "Blades",
		ability : 1,
		damage : [2, 6, "slashing"],
		range : "Melee (5 ft)",
		description : "One blades and one claws attack as an Attack action"
	}, {
		name : "Claws",
		ability : 1,
		damage : [4, 4, "slashing"],
		range : "Melee (5 ft)",
		description : "One blades and one claws attack as an Attack action"
	}],
	actions : [{
		name : "Multiattack",
		description : "The moorbounder makes two attacks: one with its blades and one with its claws."
	}],
	traits : [{
		name : "Bladed Hide",
		description : "At the start of each of its turns, the moorbounder deals 2d4 piercing damage to any creature grappling it."
	}, {
		name : "Standing Leap",
		description : "The moorbounder's long jump is up to 40 ft and its high jump is up to 20 ft, with or without a running start."
	}]
};

// Magic Items (each contain contributions by kat9137 [Discord] aka sophiechiabatta [GitHub])
MagicItemsList["acheron blade"] = {
	name : "Acheron Blade",
	nameTest : "Acheron",
	source : [["W", 265]],
	type : "weapon (any sword)",
	rarity : "rare",
	notLegalAL : true,
	attunement : true,
	description : "This sword gives a +1 to hit and damage rolls. While I'm holding it, I'm immune to effects that turn undead. As an action, once per dusk, I can use it to gain 1d4+4 temporary HP. Once per dusk, I can give a creature hit with it disadvantage on their next save until the end of my next turn (frighten effect).",
	descriptionFull : "The black blade of this sword is crafted from a mysterious arcane alloy. You gain a +1 bonus to attack and damage rolls made with this magic weapon. While the sword is on your person, you are immune to effects that turn undead."+
	"\n   " + toUni("Dark Blessing") + ". While holding the sword, you can use an action to give yourself 1d4 + 4 temporary hit points. This property can't be used again until the next dusk."+
	"\n   " + toUni("Disheartening Strike") + ". When you hit a creature with an attack using this weapon, you can fill the target with unsettling dread: the target has disadvantage on the next saving throw it makes before the end of your next turn. The creature ignores this effect if it's immune to the frightened condition. Once you use this property, you can't do so again until the next dusk",
	action : [["action", " (Dark Blessing)"]],
	savetxt : { immune : ["Effects that turn undead"] },
	extraLimitedFeatures : [{
		name : "Acheron Blade (Dark Blessing)",
		usages : 1,
		recovery : "Dusk"
	}, {
		name : "Acheron Blade (Disheartening Strike)",
		usages : 1,
		recovery : "Dusk"
	}],
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
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/acheron/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'Once per dusk, target disadv. on next save until my next turn ends';
				}
			},
			'If I include the words "Acheron" in a the name of a sword, it will be treated as the magic weapon Acheron Blade.'
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/acheron/i).test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[1] + 1;
				}
			},
			''
		]
	}
};

MagicItemsList["amulet of the drunkard"] = {
	name : "Amulet of the Drunkard",
	source : [["W", 266]],
	type : "wondrous item",
	rarity : "uncommon",
	notLegalAL : true,
	description : "This amulet smells of old, ale-stained wood. While wearing it, I can regain 4d4 + 4 hit points when I drink a pint of beer, ale, mead, or wine. Once the amulet has restored hit points, it can't do so again until the next dawn.",
	descriptionFull : "This amulet smells of old, ale-stained wood. While wearing it, you can regain 4d4 + 4 hit points when you drink a pint of beer, ale, mead, or wine. Once the amulet has restored hit points, it can't do so again until the next dawn.",
	usages : 1,
	recovery : "dawn"
};
var EGtW_ArcaneCannonFullDescription = [
	"This Large cannon is imbued with magic. It requires no ammunition and doesn't need to be loaded. It takes one action to aim the cannon and one action to fire it. After the cannon has fired, it must recharge for 5 minutes before it can be fired again. The creature firing the cannon chooses the effect from the following options:",
	">>Acid Jet<<. The cannon discharges acid in a line 300 feet long and 5 feet wide. Each creature in that line must make a DC 15 Dexterity saving throw, taking 4d10 acid damage on a failed save, or half as much damage on a successful one. In addition, a creature that fails its saving throw takes 2d10 acid damage at the start of each of its turns; a creature can end this damage by using its action to wash off the acid with a pint or more of water.",
	">>Fire Jet<<. The cannon discharges fire in a line 300 feet long and 5 feet wide. Each creature in the area must make a DC 15 Dexterity saving throw, taking 6d10 fire damage on a failed save, or half as much damage on a successful one. The fire ignites any flammable objects in the area that aren't being worn or carried.",
	">>Frost Shot<<. The cannon shoots a ball of frost to a point you can see within 1200 feet of the cannon. The ball then expands to form a 30-foot-radius sphere centered on that point. Each creature in that area must make a DC 15 Constitution saving throw. On a failed save, a creature takes 4d10 cold damage, and its speed is reduced by 10 feet for 1 minute. On a successful save, the creature takes half as much damage, and its speed isn't reduced. A creature whose speed is reduced by this effect can repeat the save at the end of each of its turns, ending the effect on itself on a success.",
	">>Lightning Shot<<. The cannon shoots a ball of lightning to a point you can see within 1200 feet of the cannon. The lightning then expands to form a 20-foot-radius sphere centered on that point. Each creature in that area must make a DC 15 Dexterity saving throw, taking 6d10 lightning damage on a failed save, or half as much damage on a successful one. Creatures wearing metal armor have disadvantage on the save.",
	">>Poison Spray<<. The cannon expels poison gas in a 60-foot cone. Each creature in that area must make a DC 15 Constitution saving throw. On a failed save, the creature takes 4d10 poison damage and is poisoned for 1 minute. On a successful save, the creature takes half as much damage and isn't poisoned. A creature poisoned in this way can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
];
MagicItemsList["arcane cannon"] = {
	name : "Arcane Cannon",
	source : [["W", 265]],
	type : "wondrous item",
	rarity : "very rare",
	notLegalAL : true,
	description : "This Large magical cannon requires no ammunition and doesn't need to be loaded, but takes 5 minutes to recharge once fired. It takes one action to aim it and another action to fire it. When I fire it, I can choose the effect, an acid jet, fire jet, frost shot, lightning shot, or poison spray. See Notes page.",
	descriptionFull : EGtW_ArcaneCannonFullDescription.join("\n   ").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
	action : [["action", " (Aim or Fire)"]],
	toNotesPage : [{
		name : "Effects",
		note : "\n" + EGtW_ArcaneCannonFullDescription.join("\n \u2022 ").replace(/>>(.*?)<<\./g, function(a, match) { return match.toUpperCase() + ":"; }).replace(/\byou\b/ig, "I").replace(/\bf(oo|ee)t\b/ig, "ft")
	}]
};
MagicItemsList["battering shield"] = {
	name : "Battering Shield",
	source : [["W", 266]],
	type : "shield",
	rarity : "uncommon",
	notLegalAL : true,
	attunement : true,
	description : "This iron tower shield gives me a +1 bonus to AC, in addition to the shield's normal bonus to AC. It has 3 charges, regaining 1d3 expended charges daily at dawn. When I am holding the shield and push a creature 5 ft away, I can expend 1 charge to push that creature an additional 10 ft, knock it prone, or both.",
	descriptionFull : "While holding this iron tower shield, you gain a +1 bonus to AC. This bonus is in addition to the shield's normal bonus to AC.\n   Additionally, the shield has 3 charges, and it regains 1d3 expended charges daily at dawn. If you are holding the shield and push a creature within your reach at least 5 feet away, you can expend 1 charge to push that creature an additional 10 feet, knock it prone, or both.",
	usages : 3,
	recovery : "dawn",
	additional : "regains 1d3",
	shieldAdd : ["Battering Shield", 3],
	weight : 6
};
MagicItemsList["bloodaxe"] = {
	name : "Bloodaxe",
	source : [["W", 266]],
	type : "weapon (greataxe)",
	rarity : "very rare",
	notLegalAL : true,
	attunement : true,
	description : "This rust-colored magical greataxe grants a +2 bonus to attack and damage rolls made with it. The axe deals an additional 1d6 necrotic damage to creature's that aren't constructs or undead. If I reduce a creature to 0 hit points with this axe, I gain 10 temporary hit points.",
	descriptionFull : "You gain a +2 bonus to attack and damage rolls made with this magic axe. The axe deals an extra 1d6 necrotic damage to creatures that aren't constructs or undead. If you reduce such a creature to 0 hit points with an attack using this axe, you gain 10 temporary hit points.\n   This axe is forged from a dark, rust-colored metal and once belonged to the goliath barbarian Grog Strongjaw of Vox Machina.",
	weaponOptions : [{
		baseWeapon : "greataxe",
		regExpSearch : /bloodaxe/i,
		name : "Bloodaxe",
		source : [["W", 266]],
		description : "Heavy, two-handed; +1d6 necrotic damage to living targets",
		modifiers : [2, 2],
		selectNow : true
	}],
	weight : 7
};
MagicItemsList["breathing bubble"] = {
	name : "Breathing Bubble",
	source : [["W", 266], ["CotN", 212]],
	type : "wondrous item",
	rarity : "common",
	notLegalAL : true,
	description : "This translucent, bubble-like sphere has a slightly tacky outer surface. I gain its benefits only while wearing it over my head like a helmet. The bubble contains 1 hour of breathable air. The bubble regains all its expended air daily at dawn.",
	descriptionFull : "This translucent, bubble-like sphere has a slightly tacky outer surface, and you gain the item's benefits only while wearing it over your head like a helmet. The bubble contains 1 hour of breathable air. The bubble regains all its expended air daily at dawn.",
	usages : 1,
	recovery : "dawn"
};
MagicItemsList["brooch of living essence"] = {
	name : "Brooch of Living Essence",
	source : [["W", 266]],
	type : "wondrous item",
	rarity : "uncommon",
	notLegalAL : true,
	attunement : true,
	description : "While wearing this nondescript brooch, spells and anything else that would detect or reveal my creature type treat me as humanoid, and those that would reveal my alignment treat it as neutral.",
	descriptionFull : "While wearing this nondescript brooch, spells and anything else that would detect or reveal your creature type treat you as humanoid, and those that would reveal your alignment treat it as neutral."
};
MagicItemsList["butcher's bib"] = {
	name : "Butcher's Bib",
	source : [["W", 266]],
	type : "wondrous item",
	rarity : "rare",
	notLegalAL : true,
	attunement : true,
	description : "This black leather apron is perpetually covered by blood. Once per turn when I roll damage for a melee attack with a weapon, I can use it to reroll the weapon's damage dice, but must use the new roll. While wearing the bib, my weapon attacks that deal slashing damage score a critical hit on a roll of 19 or 20.",
	descriptionFull : "This black leather apron is perpetually covered by blood, even after being washed off. You gain the following benefits while wearing the apron:"+
	"\n \u2022 Once per turn when you roll damage for a melee attack with a weapon, you can reroll the weapon's damage dice. If you do so, you must use the second total."+
	"\n \u2022 Your weapon attacks that deal slashing damage score a critical hit on a roll of 19 or 20 on the d20.",
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.isDC && !v.isSpell && !v.CritChance && /slash/i.test(v.theWea.damage[2])) {
					fields.Description += (fields.Description ? '; ' : '') + 'Crit on 19-20';
					v.CritChance = 19;
				}
				if (!v.isDC && v.isMeleeWeapon) {
					fields.Description += (fields.Description ? '; ' : '') + 'Reroll damage once per turn';
				}
			},
			"My weapon attacks that deal slashing damage score a critical on a to hit roll of both 19 and 20. Once per turn, I can reroll the damage of a melee weapon attack and must use the second result.",
			19
		]
	}
};
MagicItemsList["coin of delving"] = {
	name : "Coin of Delving",
	source : [["W", 266]],
	type : "wondrous item",
	rarity : "common",
	notLegalAL : true,
	description : "This scintillating copper coin sheds dim light in a 5-ft radius. If dropped a distance greater than 5 ft, the coin issues a melodious ringing sound when it hits a surface. Any creature that can hear the chime can determine the distance the coin dropped based on the tone.",
	descriptionFull : "This scintillating copper coin sheds dim light in a 5-foot radius. If dropped a distance greater than 5 feet, the coin issues a melodious ringing sound when it hits a surface. Any creature that can hear the chime can determine the distance the coin dropped based on the tone."
};
MagicItemsList["corpse slayer"] = {
	name : "Corpse Slayer",
	nameTest : "Corpse Slaying",
	source : [["W", 266]],
	type : "weapon (any)",
	rarity : "rare",
	notLegalAL : true,
	attunement : true,
	description : "I gain a +1 bonus to attack and damage rolls made with this magic weapon. Undead hit by it take an additional 1d8 damage and gain disadvantage on saving throws against effects that turn undead until the start of my next turn.",
	descriptionFull : "You gain a +1 bonus to attack and damage rolls made with this magic weapon.\n   When you hit an undead creature with an attack using this weapon, the attack deals an extra 1d8 damage of the weapon's type, and the creature has disadvantage on saving throws against effects that turn undead until the start of your next turn.",
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : ["between", "Corpse Slaying", ""],
		itemName1stPage : ["suffix", "Corpse Slaying"],
		descriptionChange : ["replace", "weapon"]
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.isSpell && !v.theWea.isMagicWeapon && (/corpse slay(er|ing)/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + '+1d8 damage vs. undead; Target disadv. vs. turn undead';
				}
			},
			'If I include the words "Corpse Slayer" or "Corpse Slaying" in a the name of a weapon, it will be treated as the magic weapon Corpse Slayer, which has a +1 to hit and damage and deals +1d8 damage vs. undead.'
		],
		atkCalc : [
			function (fields, v, output) {
				if (!v.isSpell && (/corpse slay(er|ing)/i).test(v.WeaponTextName)) {
					output.magic = v.thisWeapon[1] + 1;
				}
			}, ''
		]
	}
};
MagicItemsList["dispelling stone"] = {
	name : "Dispelling Stone",
	source : [["W", 266]],
	type : "wondrous item",
	rarity : "very rare",
	notLegalAL : true,
	description : "This smooth, rainbow-colored, egg-shaped stone can be thrown up to 30 ft and explodes in a 10-ft-radius sphere of magical energy on impact, destroying the stone. Any active spell of 5th level or lower in the sphere ends.",
	descriptionFull : "This smooth, rainbow-colored, egg-shaped stone can be thrown up to 30 feet and explodes in a 10-foot-radius sphere of magical energy on impact, destroying the stone. Any active spell of 5th level or lower in the sphere ends.",
	usages : 1,
	recovery : "Never"
};
MagicItemsList["duskcrusher"] = {
	name : "Duskcrusher",
	source : [["W", 266]],
	type : "weapon (warhammer)",
	rarity : "very rare",
	notLegalAL : true,
	attunement : true,
	description : "This rod caries the symbol of Pelor. As a bonus action, I can activate its crackling head of sunlight, that shines bright light in 15 ft and dim for another 15 ft. While active, I can use it as a +2 warhammer that deals radiant damage and +1d8 damage to undead. Once per dawn, I can cast Sunbeam with it (DC 15).",
	descriptionLong : "This leather-wrapped metal rod caries the symbol of Pelor on top. As a bonus action, I can cause a warhammer head of crackling radiance to spring into existence. It emits emits bright light in a 15-foot radius and dim light for an additional 15 feet. The light is sunlight. While the radiant head is active, the rod functions as a +2 warhammer that deals radiant damage and +1d8 damage to undead. Once per dawn while its radiant head is active, I can use it to cast Sunbeam (DC 15). I can deactivate the head as an action.",
	descriptionFull : "This item takes the form of a leather-wrapped metal rod emblazoned with the symbol of Pelor, the Dawn Father. While grasping the rod, you can use a bonus action to cause a warhammer head of crackling radiance to spring into existence. The warhammer's radiant head emits bright light in a 15-foot radius and dim light for an additional 15 feet. The light is sunlight. You can use an action to make the radiant head disappear."+
	"\n   While the radiant head is active, you gain a +2 bonus to attack and damage rolls made with this magic weapon, and attacks with the weapon deal radiant damage instead of bludgeoning damage. An undead creature hit by the weapon takes an extra 1d8 radiant damage."+
	"\n   While you are holding Duskcrusher and its radiant head is active, you can use an action to cast the sunbeam spell (save DC 15) from the weapon, and this action can't be used again until the next dawn.",
	action : [ ["bonus action", " (activate)"], ["action", " (deactivate)"] ],
	extraLimitedFeatures : [{
		name : "Duskcrusher (Sunbeam)",
		usages : 1,
		recovery : "dawn"
	}],
	weaponOptions : [{
		baseWeapon : "warhammer",
		regExpSearch : /duskcrusher/i,
		name : "Duskcrusher",
		source : [["W", 266]],
		damage : [1, 8, "radiant"],
		description : "Versatile (1d10); +1d8 damage vs. undead",
		modifiers : [2, 2],
		selectNow : true
	}],
	weight : 2,
	fixedDC : 15,
	spellcastingBonus : [{
		name : "Once per dawn",
		spells : ["sunbeam"],
		selection : ["sunbeam"],
		firstCol : 'oncelr'
	}]
};
MagicItemsList["dust of deliciousness"] = {
	name : "Dust of Deliciousness",
	source : [["W", 267]],
	type : "wondrous item",
	rarity : "uncommon",
	notLegalAL : true,
	description : "This reddish brown dust can be sprinkled over any edible substance to greatly improve the flavor. The dust also dulls the eater's senses: anyone eating food treated with this dust has disadvantage on Wisdom ability checks and Wisdom saving throws for 1 hour. There is enough dust to flavor six servings.",
	descriptionFull : "This reddish brown dust can be sprinkled over any edible substance to greatly improve the flavor. The dust also dulls the eater's senses: anyone eating food treated with this dust has disadvantage on Wisdom ability checks and Wisdom saving throws for 1 hour. There is enough dust to flavor six servings.",
	usages : 6,
	recovery : "Never"
};
// [dupl_start] reprint from Xanathar's Guide to Everything
if (!MagicItemsList["ersatz eye"]) {
	MagicItemsList["ersatz eye"] = {
		name : "Ersatz Eye",
		source : [["X", 137], ["W", 267]],
		type : "wondrous item",
		rarity : "common",
		notLegalAL : true,
		description : "This artificial eye replaces a real one that was lost or removed. While the ersatz eye is embedded in my eye socket, it can't be removed by anyone other than me, and I can see through the tiny orb as though it were a normal eye.",
		descriptionFull : "This artificial eye replaces a real one that was lost or removed. While the ersatz eye is embedded in your eye socket, it can't be removed by anyone other than you, and you can see through the tiny orb as though it were a normal eye.",
		attunement : true
	}
} // dupl_end
MagicItemsList["goggles of object reading"] = {
	name : "Goggles of Object Reading",
	source : [["W", 267]],
	type : "wondrous item",
	rarity : "uncommon",
	notLegalAL : true,
	attunement : true,
	description : "While wearing these leather-framed goggles feature purple crystal lenses, I have advantage on Intelligence (Arcana) checks made to reveal information about a creature or object I can see. Once per dawn, I can cast Identify using the goggles.",
	descriptionFull : "These leather-framed goggles feature purple crystal lenses. While wearing the goggles, you have advantage on Intelligence (Arcana) checks made to reveal information about a creature or object you can see. In addition, you can cast the identify spell using the goggles. Once you do so, you can't do so again until the next dawn.", // Changed googles to goggles, as this is clearly a typo in the book
	additional : "Identify",
	usages : 1,
	recovery : "dawn",
	spellcastingBonus : [{
		name : "Once per dawn",
		spells : ["identify"],
		selection : ["identify"],
		firstCol : 'oncelr'
	}]
};
MagicItemsList["hunter's coat"] = {
	name : "Hunter's Coat",
	source : [["W", 267]],
	type : "armor (leather)",
	rarity : "very rare",
	notLegalAL : true,
	attunement : true,
	description : "I have a +1 bonus to AC while wearing this leather armor. The coat has 3 charges. When I hit a creature with an attack and that creature doesn't have all its hit points, I can expend 1 charge to deal an extra 1d10 necrotic damage to the target. The coat regains 1d3 expended charges at dawn.",
	descriptionFull : "You have a +1 bonus to AC while wearing this armor. The coat has 3 charges. When you hit a creature with an attack and that creature doesn't have all its hit points, you can expend 1 charge to deal an extra 1d10 necrotic damage to the target. The coat regains 1d3 expended charges daily at dawn.",
	usages : 3,
	recovery : "dawn",
	additional : "regains 1d3",
	armorOptions : [{
		regExpSearch : /^(?=.*hunter)(?=.*coat).*$/i,
		name : "Hunter's Coat",
		source : [["W", 267]],
		type : "light",
		ac : "11+1",
		weight : 10,
		selectNow : true
	}],
	weight : 10
};
MagicItemsList["last stand armor"] = {
	name : "Last Stand Armor",
	nameTest : /last.stand.*armou?r/i,
	source : [["W", 267]],
	type : "armor (any)",
	rarity : "very rare",
	notLegalAL : true,
	description : "I have a +1 bonus to AC while wearing this magic armor. If I die while wearing this armor, it is destroyed, and each celestial, fey, and fiend with 30 ft of me must succeed on a DC 15 Charisma saving throw or be banished to their home plane of existence, unless they are already there.",
	descriptionFull : "You have a +1 bonus to AC while wearing this armor, which shimmers softly. If you die while wearing the armor, it is destroyed, and each celestial, fey, and fiend with 30 feet of you must succeed on a DC 15 Charisma saving throw or be banished to its home plane of existence, unless it is already there.",
	chooseGear : {
		type : "armor",
		prefixOrSuffix : ["between", "Last Stand", "Armor"],
		descriptionChange : ["prefix", "armor"],
		itemName1stPage : ["between", "Last Stand", "(+1)"]
	},
	extraLimitedFeatures : [{
		name : "Last Stand Armor",
		usages : 1,
		recovery : "Never"
	}]
};

var EGtW_LuxonBeaconFullDescription = [
	"This dodecahedron of faintly glowing crystal is heavier than it appears. A set of handles are affixed to its sides, and it pulsates and thrums when touched.",
	">>Fragment of Possibility<<. A creature that touches the beacon and concentrates for 1 minute receives a Fragment of Possibility, which looks like a Tiny, grayish bead of energy that follows the creature around, staying within 1 foot of it at all times. The fragment lasts for 8 hours or until used. Once the beacon grants a Fragment of Possibility, it can't grant another until the next dawn. A creature with a Fragment of Possibility from a Luxon Beacon can't gain another Fragment of Possibility from any source.",
	"When a creature with a Fragment of Possibility makes an attack roll, an ability check, or a saving throw, it can expend its fragment to roll an additional d20 and choose which of the d20s to use. Alternatively, when an attack roll is made against the creature, it can expend its fragment to roll a d20 and choose which of the d20s to use, the one it rolled or the one the attacker rolled.",
	"If the original d20 roll has advantage or disadvantage, the creature rolls its d20 after advantage or disadvantage has been applied to the original roll.",
	">>Soul Snare<<. If a follower of the Luxon who has undergone a ritual of consecution dies within 100 miles of a Luxon Beacon, their soul is ensnared by it. This soul will be reincarnated within the body of a random humanoid baby developing within 100 miles of the beacon."
];
MagicItemsList["luxon beacon"] = {
	name : "Luxon Beacon",
	source : [["W", 268]],
	type : "wondrous item",
	rarity : "legendary",
	notLegalAL : true,
	description : "Once per dawn, a creature can touch this crystal for 1 minute to gain a Fragment of Possibility. Once for the next 8 hours, it can roll an extra d20 for an attack, check, save, or being attacked, before the outcome is determined. Creatures consecuted to the Luxon that die within 100 miles of it are reincarnated. See notes.",
	descriptionFull : EGtW_LuxonBeaconFullDescription.join("\n   ").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
	extraLimitedFeatures : [{
		name : "Luxon Beacon (Fragment of Possibility)",
		usages : 1,
		recovery : "dawn"
	}],
	toNotesPage : [{
		name : "Features",
		note : desc(EGtW_LuxonBeaconFullDescription).replace(/   >>(.*?)<<\. /g, function(a, match) { return match.toUpperCase() + "\n   "; })
	}]
};
MagicItemsList["needle of mending"] = {
	name : "Needle of Mending",
	source : [["W", 268]],
	type : "weapon (dagger)",
	rarity : "rare",
	notLegalAL : true,
	attunement : true,
	description : "This weapon is a magic dagger disguised as a sewing needle. As a bonus action, I can speak its command word to transform it into a dagger or back into a needle. I gain a +1 bonus to attack and damage rolls made with the dagger. As an action while holding it, I can cast the mending cantrip from it.",
	descriptionFull : "This weapon is a magic dagger disguised as a sewing needle. When you hold it and use a bonus action to speak its command word, it transforms into a dagger or back into a needle.\n   You gain a +1 bonus to attack and damage rolls made with the dagger. While holding it, you can use an action to cast the mending cantrip from it.",
	action : [["bonus action", " (transform)"]],
	weaponOptions : [{
		baseWeapon : "dagger",
		regExpSearch : /^(?=.*needle)(?=.*mending).*$/i,
		name : "Needle of Mending",
		source : [["W", 268]],
		modifiers : [1, 1],
		selectNow : true
	}],
	spellcastingBonus : [{
		name : "At will",
		spells : ["mending"],
		selection : ["mending"],
		firstCol : 'atwill'
	}],
	spellChanges : {
		"mending" : {
			time : "1 a",
			changes : "Using the Needle of Mending, I can cast Mending as an action."
		}
	},
	weight : 1
};
MagicItemsList["nightfall pearl"] = {
	name : "Nightfall Pearl",
	source : [["W", 268]],
	type : "wondrous item",
	rarity : "legendary",
	notLegalAL : true,
	attunement : true,
	description : "I can spend 10 minutes to activate this his 6-inch-diameter, jet-black orb, causing the area within 10 miles of it to become night even if it is daytime. This night lasts for 24 hours, until I cancel it as an action, or until my attunement to the pearl ends. Once used, the pearl can't be used again for 24 hours.",
	descriptionFull : "Used to summon night, this 6-inch-diameter, jet-black orb is cold to the touch. You can spend 10 minutes to activate it, causing the area within 10 miles of it at the moment of activation to become night even if it is daytime. This night lasts for 24 hours, until you cancel it as an action, or until your attunement to the pearl ends. Once used, the pearl can't be used again for 24 hours.",
	action : [["action", " (end)"]],
	usages : 1,
	recovery : "24 hrs"
};
MagicItemsList["orb of the veil"] = { // no automation for halving the fire damage, because it is very complex, error prone, and the curse could (and will) be removed
	name : "Orb of the Veil",
	source : [["W", 268]],
	type : "wondrous item",
	rarity : "very rare",
	notLegalAL : true,
	attunement : true,
	description : "This orb increases my Wisdom and maximum by 2, grants me +60 ft darkvision, and adv. on Wisdom checks to find hidden doors and paths. It is cursed and once attuned to it, I become unwilling to part with it, nonmagical flames within 30 ft of me extinguish, and fire damage I deal is halved (not automated).",
	descriptionFull : "This onyx sphere bears deep, spiraling grooves and dangles from an iron chain. While the orb is on your person, you gain the following benefits:\n Your Wisdom score increases by 2, as does your maximum for that score.\n You gain darkvision out to a range of 60 feet. If you already have darkvision, the orb increases its range by 60 feet.\n You have advantage on Wisdom checks to find hidden doors and paths.\n   " + toUni("Curse") + ". The orb is cursed, and becoming attuned to it extends the curse to you. As long as you remain cursed, you are unwilling to part with the orb, keeping it on your person at all times. All nonmagical flames within 30 feet of you automatically extinguish, and fire damage dealt by you is halved.",
	vision : [["Darkvision", "fixed 60"], ["Darkvision", "+60"]],
	scores : [0, 0, 0, 0, 2, 0],
	scoresMaximum : [0, 0, 0, 0, "+2", 0],
	weight : 3
};
MagicItemsList["potion of maximum power"] = {
	name : "Potion of Maximum Power",
	source : [["W", 268]],
	type : "potion",
	rarity : "rare",
	notLegalAL : true,
	description : "Once as an action, I can drink this potion of glowing purple liquid that smells of sugar and plum or administer it to another. The next time the recipient casts a damage-dealing spell of 4th-level or lower within 1 minute, instead of rolling the damage die, the highest number possible for each die is used.",
	descriptionFull : "The first time you cast a damage-dealing spell of 4th level or lower within 1 minute after drinking the potion, instead of rolling dice to determine the damage dealt, you can instead use the highest number possible for each die.\n This glowing purple liquid smells of sugar and plum, but it has a muddy taste.",
	weight : 0.5
};
MagicItemsList["potion of possibility"] = {
	name : "Potion of Possibility",
	source : [["W", 268]],
	type : "potion",
	rarity : "very rare",
	notLegalAL : true,
	description : "Once as an action, I can drink this potion of glowing purple liquid that smells of sugar and plum or administer it to another. Twice for the next 8 hours, the consumer can roll an extra d20 for an attack, check, save, or being attacked, before the outcome is determined.",
	descriptionFull : "When you drink this clear potion, you gain two Fragments of Possibility, each of which looks like a Tiny, grayish bead of energy that follows you around, staying within 1 foot of you at all times. Each fragment lasts for 8 hours or until used."+
	"\n   When you make an attack roll, an ability check, or a saving throw, you can expend your fragment to roll an additional d20 and choose which of the d20s to use. Alternatively, when an attack roll is made against you, you can expend your fragment to roll a d20 and choose which of the d20s to use, the one you rolled or the one the attacker rolled."+
	"\n   If the original d20 roll has advantage or disadvantage, you roll your d20 after advantage or disadvantage has been applied to the original roll."+
	"\n   While you have one or more Fragments of Possibility from this potion, you can't gain another Fragment of Possibility from any source.",
	weight : 0.5
};
// [dupl_start] reprint from Eberron: Rising from the Last War
if (!MagicItemsList["prosthetic limb"]) {
	MagicItemsList["prosthetic limb"] = {
		name : "Prosthetic Limb",
		source : [["E:RLW", 278], ["W", 268], ["T", 134]],
		type : "wondrous item",
		rarity : "common",
		notLegalAL : true,
		description : "This artificial limb replaces a lost limb, like a hand, an arm, a foot, a leg, or a similar body part. While the prosthetic is attached, it functions identically to the part it replaces. As an action, I can detach or reattach it. It can't be removed against my will. It detaches if I die.",
		descriptionFull : "This item replaces a lost limb\u2014a hand, an arm, a foot, a leg, or a similar body part. While the prosthetic is attached, it functions identically to the part it replaces. You can detach or reattach it as an action, and it can't be removed against your will. It detaches if you die.",
		action : [["action", " (attach/detach)"]]
	}
} // dupl_end
MagicItemsList["reincarnation dust"] = {
	name : "Reincarnation Dust",
	source : [["W", 268]],
	type : "wondrous item",
	rarity : "very rare",
	notLegalAL : true,
	usages : 1,
	recovery : "Never",
	description : "Once I can sprinkle the purple dust in this small pouch on a dead humanoid or a piece of a dead humanoid. The dust is absorbed by the remains. If willing, the dead creature returns to life with a new body as if the reincarnate spell had been cast on the remains.",
	descriptionFull : "When this small pouch of purple dust is sprinkled on a dead humanoid or a piece of a dead humanoid, the dust is absorbed by the remains. If willing, the dead creature returns to life with a new body as if the reincarnate spell had been cast on the remains.",
	spellcastingBonus : [{
		name : "Use once",
		spells : ["reincarnate"],
		selection : ["reincarnate"]
	}]
};
MagicItemsList["ring of obscuring"] = {
	name : "Ring of Obscuring",
	source : [["W", 269]],
	type : "ring",
	rarity : "uncommon",
	notLegalAL : true,
	attunement : true,
	description : "This band of iron resembling a skull has 3 charges, regaining 1d3 expended charges at dawn. As an action, I can expend 1 charge to cast Fog Cloud from it, with the following changes: the cloud is centered on me when it first appears, the spell lasts for 1 minute, and the spell requires no concentration.",
	descriptionFull : "This band of iron resembles a skull and is cold to the touch. It has 3 charges and regains 1d3 expended charges daily at dawn. As an action while wearing the ring, you can expend 1 of its charges to cast the fog cloud spell from it, with the following changes: the cloud is centered on you when it first appears, and the spell lasts for 1 minute (no concentration required).",
	extraLimitedFeatures : [{
		name : "Ring of Obscuring",
		usages : 3,
		recovery : "Dawn"
	}],
	spellcastingAbility : "class",
	spellFirstColTitle : "Ch",
	spellcastingBonus : [{
		name : "1 charge",
		spells : ["fog cloud"],
		selection : ["fog cloud"],
		firstCol : '1'
	}],
	spellChanges : {
		"fog cloud" : {
			range : "Self",
			duration : "1 min",
			changes : "When I cast fog cloud with the Ring of Obscuring, the spell is centered on me, lasts for 1 minute, and the requires no concentration."
		}
	}
};
MagicItemsList["ring of temporal salvation"] = {
	name : "Ring of Temporal Salvation",
	source : [["W", 269]],
	type : "ring",
	rarity : "rare",
	notLegalAL : true,
	attunement : true,
	description : "If I die while wearing this gray crystal ring, I vanish and reappear in an empty space within 5 ft, with 3d6 + my Con mod in HP, and 1 less level of exhaustion (if any). If my maximum HP is less than the amount rolled, my max rises to a similar amount. Once this ring is used, it turns to dust and is destroyed.",
	descriptionFull : "If you die while wearing this gray crystal ring, you vanish and reappear in an unoccupied space within 5 feet of the space you left (or the nearest unoccupied space). You have a number of hit points equal to 3d6 + your Constitution modifier. If your hit point maximum is lower than the number of hit points you regain, your hit point maximum rises to a similar amount. If you have any levels of exhaustion, reduce your level of exhaustion by 1. Once the ring is used, it turns to dust and is destroyed."
};
MagicItemsList["rod of retribution"] = {
	name : "Rod of Retribution",
	source : [["W", 269]],
	type : "rod",
	rarity : "uncommon",
	notLegalAL : true,
	attunement : true,
	description : "This adamantine rod with a glowing crystalline tip has 3 charges, regaining all daily at dawn. As a reaction when a creature I can see within 60 ft damages me, I can expend a charge to force it to make a DC 13 Dexterity save. It takes a 2d10 lightning damage on a failed save, or half as much on a successful one.",
	descriptionFull : "This adamantine rod is tipped with a glowing crystalline eye. The rod has 3 charges and regains all its expended charges daily at dawn.\n   When a creature you can see within 60 feet of you damages you while you are holding this rod, you can use your reaction to expend 1 of the rod's charges to force the creature to make a DC 13 Dexterity saving throw. The creature takes 2d10 lightning damage on a failed save, or half as much damage on a successful one.",
	usages : 3,
	recovery : "dawn",
	action : [["reaction", " (if damaged)"]],
	weight : 2
};
MagicItemsList["spell bottle"] = {
	name : "Spell Bottle",
	source : [["W", 269]],
	type : "wondrous item",
	rarity : "legendary",
	notLegalAL : true,
	attunement : true,
	description : "While holding this bottle, I can cast a 5th-level or lower spell into it if empty, or cast the stored spell from it (slot level, DC, and spell attack as original casting). As a reaction when I see a spell being cast in 60 ft, I can try to store it in the empty bottle. Works if 3rd-level or lower, otherwise Int check DC 10 + spell level.",
	descriptionFull : "This glass bottle can store one spell of up to 5th level at a time. When found, roll a d6 and subtract 1; the total determines the level of spell in the bottle (the DM chooses the spell, and 0 means the bottle is empty). A swirling blue vapor fills the bottle while it contains a spell."+
	"\n   When the bottle is empty, any creature can cast a spell of 1st through 5th level into it by touching it while casting. The spell has no effect other than to be stored in the bottle."+
	"\n   While holding the bottle, you can cast the spell stored in it. The spell uses the slot level, spell save DC, spell attack bonus, and spellcasting ability of the original caster, but is otherwise treated as if you cast the spell. The bottle becomes empty once the spell is cast."+
	"\n   If you're holding the empty bottle when you see a creature casting a spell within 60 feet of you, you can open the bottle as a reaction in an attempt to interrupt the spell. If the creature is casting a spell of 3rd level or lower, the spell has no effect, and it is stored in the bottle. If it is casting a spell of 4th level or higher, make an Intelligence check. The DC equals 10 + the spell's level. On a success, the spell has no effect, and it is stored in the bottle."
};
MagicItemsList["staff of dunamancy"] = {
	name : "Staff of Dunamancy",
	source : [["W", 270]],
	type : "staff",
	rarity : "very rare",
	notLegalAL : true,
	attunement : true,
	prerequisite : "Requires attunement by a wizard",
	prereqeval : function (v) { return classes.known.wizard ? true : false; },
	description : "This staff has 10 charges, regains 1d6+4 at dawn. If I use its last charge, roll a d20. On a 1, it is destroyed. As an action, I can use its charges to cast Fortune's Favor (2), Pulse Wave (3), or Gravity Sinkhole (4), using my spellcasting ability. Once per dawn, I can turn a failed save vs. a spell that targets only me into a success.",
	descriptionFull : "This staff of polished gray wood bears numerous runes carved along its length. The staff has 10 charges and regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff turns into dust and is destroyed."+
	"\n   While holding the staff, you can use an action to expend 2 or more of its charges to cast one of the following spells from it, using your spell save DC and spell attack bonus: fortune's favor (2 charges), pulse wave (3 charges), or gravity sinkhole (4 charges)."+
	"\n   " + toUni("New Possibility") + ". If you are holding the staff and fail a saving throw against a spell that targets only you, you can turn your failed save into a successful one. This property can't be used again until the next dawn.",
	extraLimitedFeatures : [{
		name : "Staff of Dunamancy (regains 1d6+4)",
		usages : 10,
		recovery : "dawn"
	}, {
		name : "Staff of Dunamancy (New Possibility)",
		usages : 1,
		recovery : "dawn"
	}],
	spellcastingAbility : "class",
	spellFirstColTitle : "Ch",
	spellcastingBonus : [{
		name : "2 charges",
		spells : ["fortune's favor"],
		selection : ["fortune's favor"],
		firstCol : 2
	}, {
		name : "3 charges",
		spells : ["pulse wave"],
		selection : ["pulse wave"],
		firstCol : 3
	}, {
		name : "4 charges",
		spells : ["gravity sinkhole"],
		selection : ["gravity sinkhole"],
		firstCol : 4
	}],
	spellChanges : {
		"fortune's favor" : {
			time : "1 a",
			changes : "Using the Staff of Dunamancy, I can cast Fortune's Favor as an action."
		}
	},
	weight : 4
};
MagicItemsList["staff of the ivory claw"] = {
	name : "Staff of the Ivory Claw",
	source : [["W", 270]],
	type : "staff",
	rarity : "rare",
	notLegalAL : true,
	attunement : true,
	description : "This gray-and-cerulean staff is topped with a small dragon claw carved from ivory. While holding the staff, I gain a +1 bonus to spell attack rolls. Whenever you score a critical hit with a spell attack, the target takes an extra 3d6 radiant damage.",
	descriptionFull : "This gray-and-cerulean staff is topped with a small dragon claw carved from ivory. While holding the staff, you gain a +1 bonus to spell attack rolls. Whenever you score a critical hit with a spell attack, the target takes an extra 3d6 radiant damage.",
	prerequisite : "Requires attunement by a spellcaster",
	prereqeval : function(v) { return v.isSpellcaster; },
	calcChanges : {
		spellCalc : [
			function (type, spellcasters, ability) {
				if (type == "attack") return 1;
			},
			"While holding the Staff of the Ivory Claw, I have a +1 bonus to spell attack rolls."
		],
		atkAdd : [
			function (fields, v) {
				if (v.isSpell && !v.theWea.dc) {
					fields.Description += (fields.Description ? '; ' : '') + 'On crit, +3d6 radiant damage';
				}
			},
			"While holding the Staff of the Ivory Claw whenever I score a critical hit with a spell attack, the target takes an extra 3d6 radiant damage."
		]
	},
	weight : 4
};
MagicItemsList["vox seeker"] = {
	name : "Vox Seeker",
	source : [["W", 270]],
	type : "wondrous item",
	rarity : "common",
	notLegalAL : true,
	description : "This clockwork device resembles a metal crab the size of a dinner plate. Every action used to wind up this clockwork device allows it to operate for 1 minute, to a maximum of 10 minutes. See the vox seeker on a companion page. This creature is under the DM's control. If reduced to 0 HP, it is destroyed.",
	descriptionFull : "This clockwork device resembles a metal crab the size of a dinner plate. Every action used to wind up the device allows it to operate for 1 minute, to a maximum of 10 minutes. While operational, the item uses the accompanying Vox Seeker stat block. This automaton is under the DM's control. A vox seeker reduced to 0 hit points is destroyed.",
	action : [["action", " (wind up)"]],
	creaturesAdd : [["Vox Seeker"]],
	creatureOptions : [{
		name : "Vox Seeker",
		source : [["W", 270]],
		size : 5,
		type : "Construct",
		alignment : "",
		ac : 14,
		hp : 7,
		hd : [2, 4],
		speed : "20 ft, climb 20 ft",
		scores : [2, 10, 12, 1, 10, 1],
		damage_immunities : "poison, psychic",
		condition_immunities : "blinded, charmed, deafened, exhaustion, frightened, paralyzed, petrified, poisoned",
		senses : "Blindsight 60 ft (blind beyond this radius",
		passivePerception : 10,
		languages : "",
		challengeRating : "0",
		proficiencyBonus : 2,
		attacksAction : 1,
		attacks : [{
			name : "Pincer",
			ability : 2,
			damage : [1, 4, "piercing"],
			range : "Melee (5 ft)",
			description : "+3 lightning damage",
			abilitytodamage : false
		}],
		features : [{
			name : "Creator",
			description : "The homunculus obeys the commands of its creator and has the same proficiency bonus. It takes its turn immediately after its creator, on the same initiative count. It can move and take reactions on its own, but only takes the Dodge action on its turn unless its creator takes a bonus action to command it to take another action. If its creator is incapacitated, it can take any action, not just Dodge."
		}],
		traits : [{
			name : "Spider Climb",
			description : "The vox seeker can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
		}, {
			name : "Voice Lock",
			description : "The vox seeker must move toward and attack the source of the nearest voice within 60 ft of it, to the exclusion of all other targets, for as long as it remains operational."
		}]
	}]
};
MagicItemsList["weapon of certain death"] = {
	name : "Weapon of Certain Death",
	nameTest : "of Certain Death",
	source : [["W", 270]],
	type : "weapon (any)",
	rarity : "rare",
	notLegalAL : true,
	description : "When I damage a creature with an attack using this magic weapon, the target can't regain hit points until the start of my next turn.",
	descriptionFull : "When you damage a creature with an attack using this magic weapon, the target can't regain hit points until the start of your next turn.",
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "prefix",
		descriptionChange : ["replace", "weapon"]
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && (/of certain death/i).test(v.WeaponTextName)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + "On hit, target can't heal until my next turn starts";
				}
			},
			'If I include the words "of Certain Death" in a the name of a weapon, it will be treated as the magic weapon "Weapon of Certain Death". On a hit, the target can\'t regain hit points until the start of my next turn.'
		]
	}
};

// Vestiges of Divergence (contains contributions by kat9137 [Discord] aka sophiechiabatta [GitHub])
var EGtW_Vestiges_Replace = function (sDescr) {
	return desc(sDescr).replace(/\bf(oo|ee)t\b/ig, "ft")
		.replace(/you are/ig, "I am").replace(/\byou\b/ig, "I")
		.replace(/(by|giving|grants|of|to|for) I\b/ig, "$1 me")
		.replace(/your/g, "my").replace(/Your/g, "My")
		.replace(/   >>(.*?)<<\. /g, function(a, match) { return "\n" + match.toUpperCase() + "\n   "; });
}
var EGtW_DanothsVisorFullDescription = [
	"These mithral-frame goggles with clear diamond lenses were used by the evoker Danoth Oro to spot invisible enemies and scout areas from afar.",
	">>Dormant<<. While wearing the goggles in their dormant state, you can see normally in darkness, both magical and nonmagical, to a distance of 60 feet. Additionally, you have advantage on Intelligence (Investigation) and Wisdom (Perception) checks that rely on sight.",
	">>Awakened<<. When Danoth's Visor reaches an awakened state, it gains the following properties:",
	"\u2022 You see invisible creatures and objects within 60 feet of you as if they were visible, and you can see into the Ethereal Plane. Ethereal creatures and objects appear ghostly and translucent.",
	"\u2022 As a bonus action, you can speak a command word and use the goggles to see into and through solid matter. This vision has a radius of 60 feet and lasts for 1 minute. To you, solid objects within that radius appear transparent. The vision can penetrate 1 foot of stone, 1 inch of common metal, or up to 3 feet of wood or dirt. Thicker substances block the vision, as does a thin sheet of lead. This property can't be used again until the next dawn.",
	"\u2022 As a bonus action, you can speak a command word to switch the goggles into spyglass mode. While in this mode, creatures and objects viewed through the goggles are magnified to twice their size. Speaking the command word again reverts the goggles to their normal operation.",
	">>Exalted<<.",
	"When Danoth's Visor reaches an exalted state, it gains the following properties:",
	"\u2022 You automatically detect illusions you can see and automatically succeed on saving throws against them. In addition, you see a bright aura around any creature that isn't in its true form.",
	"\u2022 As an action, you can cast the antimagic field spell from the visor. This property can't be used again until the next dawn."
];
MagicItemsList["danoth's visor"] = {
	name : "Danoth's Visor",
	source : [["W", 270]],
	type : "wondrous item",
	rarity : "legendary",
	notLegalAL : true,
	attunement : true,
	description : "These mithral-frame goggles with clear diamond lenses were used by the evoker Danoth Oro to spot invisible enemies and scout areas from afar. See notes page for more information.",
	descriptionFull : EGtW_DanothsVisorFullDescription.join("\n   ").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
	toNotesPage : [{
		name : "Features",
		note : EGtW_Vestiges_Replace(EGtW_DanothsVisorFullDescription)
	}],
	vision : [["Devil's Sight", "fixed 60"], ["Adv. on Investigation and Perception check that rely on sight", 0]],
	choices : ["Dormant", "Awakened", "Exalted"],
	choicesNotInMenu : true,
	"dormant" : {
		name : "Danoth's Visor [dormant]",
		description : "These mithral-frame goggles with clear diamond lenses grant me the ability to see in normally in nonmagical and magical darkness out to 60 ft. Also, they grant me advantage on Intelligence (Investigation) and Wisdom (Perception) checks that rely on sight."
	},
	"awakened" : {
		name : "Danoth's Visor [awakened]",
		description : "These mithral-frame goggles with clear diamond lenses grant me the ability to see, out to 60 ft, in nonmagical and magical darkness, invisible creatures and objects, and into the Ethereal plane. They give me adv. on Investigation and Perception checks that rely on sight. I can active them to see more, see Notes page.",
		action : [
			["bonus action", "Danoth's Visor (see through matter)"]
			["bonus action", "Danoth's Visor (spyglass mode)"],
		],
		extraLimitedFeatures : [{
			name : "Danoth's Visor (see through matter)",
			usages : 1,
			recovery : "dawn"
		}]
	},
	"exalted" : {
		name : "Danoth's Visor [exalted]",
		description : "These goggles grant me the ability to see, out to 60 ft, in normal and magical darkness, invisible creatures and objects, and into the Ethereal plane. They allow me to automatically detect illusions for what they are, succeed on saves against them, and see if creatures aren't in their true form. See Notes for more.",
		action : [
			["bonus action", "Danoth's Visor (see through matter)"]
			["bonus action", "Danoth's Visor (spyglass mode)"],
		],
		extraLimitedFeatures : [{
			name : "Danoth's Visor (see through matter)",
			usages : 1,
			recovery : "dawn"
		}, {
			name : "Danoth's Visor (Antimagic Field)",
			usages : 1,
			recovery : "dawn"
		}],
		spellcastingAbility : "class",
		spellcastingBonus : [{
			name : "Once per dawn",
			spells : ["antimagic field"],
			selection : ["antimagic field"],
			firstCol : 'oncelr'
		}],
		savetxt : { immune : ["illusions"] },
	}
};
var EGtW_GrimoireInfinitusFullDescription = [
	"Several of these spellbooks with gilded pages and silver-plated covers were created during the Age of Arcanum, but only one has been found since the Calamity ended. The book has an infinite number of pages, is three inches thick, eight inches wide, twelve inches long, and weighs three pounds.",
	">>Dormant<<. Most of the book is blank, but the following spells are recorded in the first pages of the tome: alarm, antimagic field, Bigby's hand, blight, charm person, confusion, control weather, create undead, detect thoughts, enlarge/reduce, fear, foresight, gaseous form, glyph of warding, legend lore, Leomund's tiny hut, mass suggestion, mislead, misty step, Mordenkainen's faithful hound, prismatic spray, ray of enfeeblement, silent image, teleport, and thunderwave.",
	"You can use the grimoire as your spellbook, and you can scribe new spells into it as normal. When you prepare wizard spells using the grimoire, the number of wizard spells you can prepare increases by 1.",
	">>Awakened<<. When the Grimoire Infinitus reaches an awakened state, it gains the following properties:",
	"\u2022 While you carry the spellbook, you have advantage on saving throws against spells and magical effects.",
	"\u2022 When you prepare wizard spells using the grimoire as your spellbook, the number of spells you can prepare increases by 1 again.",
	">>Exalted<<. When the Grimoire Infinitus reaches an exalted state, it gains the following properties:",
	"\u2022 You can now use your Arcane Recovery feature twice between long rests, rather than once.",
	"\u2022 When you prepare wizard spells using the grimoire as your spellbook, the number of spells you can prepare increases by 1 again."
];
MagicItemsList["grimoire infinitus"] = {
	name : "Grimoire Infinitus",
	source : [["W", 271]],
	type : "wondrous item",
	rarity : "legendary",
	notLegalAL : true,
	attunement : true,
	description : "This spellbook with unlimited gilded pages and silver-plated covers can be used by a wizard to prepare and store spells. It holds several spells already. When I use to prepare wizards spells, I can prepare 1 additional spell.",
	descriptionFull : EGtW_GrimoireInfinitusFullDescription.join("\n   ").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
	weight : 3,
	toNotesPage : [{
		name : "Features",
		note : EGtW_Vestiges_Replace(EGtW_GrimoireInfinitusFullDescription)
	}],
	prerequisite : "Requires attunement by a wizard",
	prereqeval : function (v) { return classes.known.wizard ? true : false; },
	spellcastingBonusElsewhere : {
		addTo : "wizard",
		addToKnown : ["alarm", "antimagic field", "bigby's hand", "blight", "charm person", "confusion", "control weather", "create undead", "detect thoughts", "enlarge/reduce", "fear", "foresight", "gaseous form", "glyph of warding", "legend lore", "leomund's tiny hut", "mass suggestion", "mislead", "misty step", "mordenkainen's faithful hound", "prismatic spray", "ray of enfeeblement", "silent image", "teleport", "thunderwave"]
	},
	choices : ["Dormant", "Awakened", "Exalted"],
	choicesNotInMenu : true,
	"dormant" : {
		name : "Grimoire Infinitus [dormant]",
		description : "This spellbook with unlimited gilded pages and silver-plated covers can be used by a wizard to prepare and store spells. It holds several spells already. When I use to prepare wizard spells, I can prepare 1 additional spell. See Notes page for more information.",
		calcChanges : {
			spellCalc : [
				function (type, spellcasters, ability) {
					if (type === "prepare" && spellcasters.indexOf("wizard") !== -1) return 1;
				},
				"When I prepare wizard spells using the grimoire, the number of wizard spells I can prepare increases by 1."
			]
		}
	},
	"awakened" : {
		name : "Grimoire Infinitus [awakened]",
		description : "This spellbook with unlimited gilded pages and silver-plated covers can be used by a wizard to prepare and store spells. It holds several spells already. When I use it to prepare wizard spells, I can prepare 2 extra spells. It also grants me advantage on saves against spells and magical effects. See Notes page.",
		calcChanges : {
			spellCalc : [
				function (type, spellcasters, ability) {
					if (type === "prepare" && spellcasters.indexOf("wizard") !== -1) return 2;
				},
				"When I prepare wizard spells using the grimoire, the number of wizard spells I can prepare increases by 2."
			]
		},
		savetxt : { adv_vs : ["magic"] }
	},
	"exalted" : {
		name : "Grimoire Infinitus [exalted]",
		description : "This spellbook with unlimited pages can be used by a wizard to prepare and store spells. When I use it to prepare wizard spells, I can prepare 3 more. It also grants me adv. on saves vs. spells and magical effects and allows me to use Arcane Recovery an extra time per long rest. See Notes page for more information.",
		calcChanges : {
			spellCalc : [
				function (type, spellcasters, ability) {
					if (type === "prepare" && spellcasters.indexOf("wizard") !== -1) return 3;
				},
				"When I prepare wizard spells using the grimoire, the number of wizard spells I can prepare increases by 3."
			]
		},
		savetxt : { adv_vs : ["magic"] },
		extraLimitedFeatures : [{
			name : "Arcane Recovery",
			usages : 1,
			recovery : "long rest",
			addToExisting : true
		}]
	}
};
var EGtW_HideFeralGuardianFullDescription = [
	"It is believed that this polished and beautifully detailed leather armor was a gift from Melora, bestowed on a long-forgotten archdruid and champion of the natural world before the terrors of the Calamity.",
	">>Dormant<<. While wearing the armor in its dormant state, you gain the following benefits:",
	"\u2022 The armor grants you a +1 bonus to AC.",
	"\u2022 While you are transformed by an effect that replaces any of your game statistics with those of another creature, you have a +1 bonus to melee attack and damage rolls, and you retain the benefits of this armor.",
	"\u2022 As an action, you can use the armor to cast polymorph on yourself, transforming into a giant owl while retaining your Intelligence, Wisdom, and Charisma scores. This property can't be used again until the next dawn.",
	">>Awakened<<. When the armor reaches an awakened state, it gains the following properties:",
	"\u2022 The AC bonus of the armor increases to +2.",
	"\u2022 While you are transformed by an effect that replaces any of your game statistics with those of another creature, your bonus to melee attack and damage rolls increases by 1 (to +2).",
	"\u2022 When you cast the polymorph spell using this armor, you can transform into a cave bear.",
	">>Exalted<<. When the armor reaches an exalted state, it gains the following properties:",
	"\u2022 The AC bonus of the armor increases to +3.",
	"\u2022 While you are transformed by an effect that replaces any of your game statistics with those of another creature, your bonus to melee attack and damage rolls increases by 1 (to +3).",
	"\u2022 When you cast the polymorph spell using this armor, you can transform into a guardian wolf."
];
MagicItemsList["hide of the feral guardian"] = {
	name : "Hide of the Feral Guardian",
	source : [["W", 271]],
	type : "armor (studded leather)",
	rarity : "legendary",
	notLegalAL : true,
	attunement : true,
	description : "This magic studded leather armor retains it benefits even when I'm transformed by an effect that replaces any of my game statistics with those of another creature and then also grants me a bonus to melee attack and damage rolls. Once per dawn, I can use it to cast Polymorph on myself.",
	descriptionFull : EGtW_HideFeralGuardianFullDescription.join("\n   ").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
	weight : 13,
	toNotesPage : [{
		name : "Features",
		note : EGtW_Vestiges_Replace(EGtW_HideFeralGuardianFullDescription) + "\n\nNOTE\n   Be aware that the bonus to melee attacks and damage in wild shape are not automated."
	}],
	extraLimitedFeatures : [{
		name : "Hide of the Feral Guardian (Polymorph)",
		usages : 1,
		recovery : "dawn"
	}],
	spellcastingAbility : "class",
	spellcastingBonus : [{
		name : "Once per dawn",
		spells : ["polymorph"],
		selection : ["polymorph"],
		firstCol : "oncelr"
	}],
	choices : ["Dormant", "Awakened", "Exalted"],
	choicesNotInMenu : true,
	"dormant" : {
		name : "Hide of the Feral Guardian [dormant]",
		description : "This +1 studded leather armor retains it benefits even when I'm transformed by an effect that replaces any of my game statistics with those of another creature and then also grants me a +1 bonus to melee attack and damage rolls. Once per dawn, I can cast Polymorph on myself to transform into a giant owl.",
		armorOptions : [{
			regExpSearch : /^(?=.*hide)(?=.*feral guardian).*$/i,
			name : "Hide of the Feral Guardian",
			source : [["W", 271]],
			type : "light",
			ac : "12+1",
			weight : 13,
			selectNow : true
		}],
		spellChanges : {
			"polymorph" : {
				name : "Polymorph (special)",
				range : "Self",
				description : "I transform into a giant owl; I retain my Int, Wis, Cha",
				changes : "Using the Hide of the Feral Guardian, I can cast Polymorph on myself once per dawn to transform myself into a giant owl, while retaining my Intelligence, Wisdom, and Charisma scores as well as the benefits of the armor."
			}
		}
	},
	"awakened" : {
		name : "Hide of the Feral Guardian [awakened]",
		description : "This +2 studded leather armor retains it benefits even when I'm transformed by an effect that replaces any of my game statistics with those of another creature and then also grants me a +2 bonus to melee attack and damage rolls. Once per dawn, I can cast Polymorph on myself to become a giant owl or cave bear.",
		armorOptions : [{
			regExpSearch : /^(?=.*hide)(?=.*feral guardian).*$/i,
			name : "Hide of the Feral Guardian",
			source : [["W", 271]],
			type : "light",
			ac : "12+2",
			weight : 13,
			selectNow : true
		}],
		spellChanges : {
			"polymorph" : {
				name : "Polymorph (special)",
				range : "Self",
				description : "I transform into a giant owl or cave bear; I retain my Int, Wis, Cha",
				changes : "Using the Hide of the Feral Guardian, I can cast Polymorph on myself once per dawn to transform myself into a giant owl or a cave bear, while retaining my Intelligence, Wisdom, and Charisma scores as well as the benefits of the armor."
			}
		}
	},
	"exalted" : {
		name : "Hide of the Feral Guardian [exalted]",
		description : "This +3 studded leather armor retains it benefits even when I'm transformed by an effect that replaces any of my game statistics with those of another creature and then grants a +2 to melee attack and damage rolls. Once per dawn, I can cast Polymorph on myself to become a giant owl, cave bear or guardian wolf.",
		armorOptions : [{
			regExpSearch : /^(?=.*hide)(?=.*feral guardian).*$/i,
			name : "Hide of the Feral Guardian",
			source : [["W", 271]],
			type : "light",
			ac : "12+3",
			weight : 13,
			selectNow : true
		}],
		spellChanges : {
			"polymorph" : {
				name : "Polymorph (special)",
				range : "Self",
				description : "I transform into a giant owl, cave bear, or guardian wolf; I retain my Int, Wis, Cha",
				changes : "Using the Hide of the Feral Guardian, I can cast Polymorph on myself once per dawn to transform myself into a giant owl, cave bear, or guardian wolf, while retaining my Intelligence, Wisdom, and Charisma scores as well as the benefits of the armor."
			}
		},
		creatureOptions : [{
			name : "Guardian Wolf",
			source : [["W", 272]],
			size : 1,
			type : "Monstrosity",
			alignment : "",
			ac : 14,
			hp : 66,
			hd : [7, 12],
			speed : "60 ft",
			scores : [22, 14, 16, 5, 12, 8],
			skills : {
				"perception" : 3
			},
			senses : "Adv. on Wis (Perception) checks using hearing/smell",
			passivePerception : 15,
			languages : "Common, Elvish",
			challengeRating : "4",
			proficiencyBonus : 2,
			attacksAction : 2,
			attacks : [{
				name : "Bite",
				ability : 1,
				damage : [1, 10, "piercing"],
				range : "Melee (5 ft)",
				description : "Target DC 16 Str save or knocked prone; One bite and one claw attack as an Attack action"
			}, {
				name : "Claws",
				ability : 1,
				damage : [2, 8, "slashing"],
				range : "Melee (5 ft)",
				description : "One bite and one claw attack as an Attack action"
			}],
			actions : [{
				name : "Multiattack",
				description : "The wolf makes two attacks: one with its bite and one with its claws."
			}],
			traits : [{
				name : "Keen Hearing and Smell",
				description : "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell."
			}, {
				name : "Pack Tactics",
				description : "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 ft of the creature and the ally isn't incapacitated."
			}]
		}]
	}
};
var EGtW_InfiltratorsKeyFullDescription = [
	"This mithral skeleton key was forged using the blood of twelve master thieves executed for trying to steal magic items during the Age of Arcanum.",
	">>Dormant<<. The Infiltrator's Key grants the following benefits in its dormant state:",
	"\u2022 The key can be used as thieves' tools for the purpose of opening locks. When using the key, you are considered proficient in thieves' tools and you have advantage on ability checks made to open locks.",
	"\u2022 While holding the key, your steps are muffled, giving you advantage on Dexterity (Stealth) checks made to move silently.",
	">>Awakened<<. When the Infiltrator's Key reaches an awakened state, it gains the following properties:",
	"\u2022 While holding the key, you can use a bonus action to transform the key into a magic dagger or back into a key. While the key is in the form of a dagger, you gain a +1 bonus to attack and damage rolls made with it, and it returns to your hand immediately after it is used to make a ranged attack.",
	"\u2022 While holding the key, you can use an action to cast one of the following spells from it: alter self, invisibility, knock, or pass without trace. Once a spell has been cast using the key, it can't be used to cast that spell again until the next dawn.",
	">>Exalted<<. When the Infiltrator's Key reaches an exalted state, it gains the following properties:",
	"\u2022 As a bonus action, you can touch the key to a floor, wall, or ceiling that is no more than 5 feet thick and cause a magical opening to appear in the surface. When you create the opening, you choose its length and width, up to 10 feet for each dimension. The opening lasts until the key passes through it to the other side, at which point it disappears (if a creature is in the opening when the doorway closes, the creature is safely shunted to the nearest unoccupied space). The key can't be used to create another opening until the next dawn.",
	"\u2022 While holding the key, you can use an action to cast one of the following spells from it: dimension door, gaseous form, or mislead. Once a spell has been cast using the key, it can't be used to cast that spell again until the next dawn."
];
MagicItemsList["infiltrator's key"] = {
	name : "Infiltrator's Key",
	source : [["W", 273]],
	type : "wondrous item",
	rarity : "legendary",
	notLegalAL : true,
	attunement : true,
	description : "This mithral skeleton key was forged using the blood of twelve master thieves executed for trying to steal magic items during the Age of Arcanum. See notes page for more information.",
	descriptionFull : EGtW_InfiltratorsKeyFullDescription.join("\n   ").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
	toNotesPage : [{
		name : "Features",
		note : EGtW_Vestiges_Replace(EGtW_InfiltratorsKeyFullDescription)
	}],
	toolProfs : [["Thieves' tools", "Dex"]],
	choices : ["Dormant", "Awakened", "Exalted"],
	choicesNotInMenu : true,
	"dormant" : {
		name : "Infiltrator's Key [dormant]",
		description : "This mithral skeleton key was forged using the blood of twelve master thieves executed for trying to steal magic items. It can be used as thieves' tools for the purpose of opening locks. I'm considered proficient when I do so with this key and gain adv. While holding it, I have adv. on Stealth checks to move silently."
	},
	"awakened" : {
		name : "Infiltrator's Key [awakened]",
		description : "I can use this mithral skeleton key as thieves' tools to open locks. I'm proficient with it and gain adv. on the roll. While holding it, I have adv. on Stealth checks to move silently. As a bonus action, I can transform it into a +1 dagger that returns immediately when thrown. I can use it to cast several spells, each once per dawn.",
		action : [["bonus action", "Infiltrator's Key (transform dagger)"]],
		weaponOptions : [{
			baseWeapon : "dagger",
			regExpSearch : /infiltrator's key|key of the infiltrator/i,
			name : "Infiltrator's Key",
			source : [["W", 273]],
			description : "Finesse, light, thrown; Returns when thrown",
			modifiers : [1, 1],
			selectNow : true
		}],
		spellcastingAbility : "class",
		spellcastingBonus : [{
			name : "Once per dawn",
			spells : ["alter self", "invisibility", "knock", "pass without trace"],
			selection : ["alter self", "invisibility", "knock", "pass without trace"],
			firstCol : 'oncelr',
			times : 4
		}]
	},
	"exalted" : {
		name : "Infiltrator's Key [exalted]",
		description : "I can use this mithral skeleton key as thieves' tools to open locks. I'm proficient with it and gain adv. on the roll. While holding it, I have adv. on Stealth checks to move silently. As a bonus action, I can transform it into a +1 dagger that returns when thrown. I can use it to cast several spells, each once per dawn. See Notes.",
		action : [
			["bonus action", "Infiltrator's Key (transform dagger)"],
			["bonus action", "Infiltrator's Key (create opening)"]
		],
		weaponOptions : [{
			baseWeapon : "dagger",
			regExpSearch : /infiltrator's key|key of the infiltrator/i,
			name : "Infiltrator's Key",
			source : [["W", 273]],
			description : "Finesse, light, thrown; Returns when thrown",
			modifiers : [1, 1],
			selectNow : true
		}],
		spellcastingAbility : "class",
		spellcastingBonus : [{
			name : "Once per dawn",
			spells : ["alter self", "invisibility", "knock", "pass without trace", "dimension door", "gaseous form", "mislead"],
			selection : ["alter self", "invisibility", "knock", "pass without trace", "dimension door", "gaseous form", "mislead"],
			firstCol : 'oncelr',
			times : 7
		}],
		extraLimitedFeatures : [{
			name : "Infiltrator's Key (create opening)",
			usages : 1,
			recovery : "dawn"
		}]
	}
};
var EGtW_StormgirdleFullDescription = [
	"A Stormgirdle is a wide belt made of thick leather branded with the symbol of Kord. The girdle's clasps are made from dragon ivory.",
	">>Dormant<<. While wearing the Stormgirdle in its dormant state, you have resistance to lightning damage and thunder damage, and your Strength score becomes 21 if it isn't already 21 or higher. In addition, you can use an action to become a Storm Avatar for 1 minute, gaining the following benefits for the duration:",
	"\u2022 You have immunity to lightning damage and thunder damage.",
	"\u2022 When you hit with a weapon attack that normally deals bludgeoning damage, it deals thunder damage instead. When you hit with a weapon attack that normally deals piercing or slashing damage, it deals lightning damage instead.",
	"\u2022 As a bonus action, you can choose one creature you can see within 30 feet of you to be struck by lightning. The target must make a DC 15 Dexterity saving throw, taking 3d6 lightning damage on a failed save, or half as much damage on a successful one.",
	"Once you use the girdle's Storm Avatar property, that property can't be used again until the next dawn.",
	">>Awakened<<. While wearing the Stormgirdle in its awakened state, you gain the following benefits:",
	"\u2022 Your Strength score becomes 23 if it isn't already 23 or higher.",
	"\u2022 Your Storm Avatar's lightning strike deals 4d6 lightning damage (instead of 3d6).",
	"\u2022 While transformed into a Storm Avatar, you gain a flying speed of 30 feet and can hover.",
	">>Exalted<<. While wearing the Stormgirdle in its exalted state, you gain the following benefits:",
	"\u2022 Your Strength score becomes 25 if it isn't already 25 or higher.",
	"\u2022 Your Storm Avatar's lightning strike deals 5d6 lightning damage (instead of 3d6).",
	"\u2022 You can cast the control weather spell from the girdle. This property can't be used again until the next dawn."
];
MagicItemsList["stormgirdle"] = {
	name : "Stormgirdle",
	source : [["W", 273]],
	type : "wondrous item",
	rarity : "legendary",
	notLegalAL : true,
	attunement : true,
	description : "A wide belt of leather branded with the symbol of Kord. While attuned to and wearing this belt, I am resistant to lightning and thunder damage. My Strength score becomes 21, provided my Strength is not already 21 or higher. As an action, I can become a Storm Avatar for 1 minute. See notes page for more info.",
	descriptionFull : EGtW_StormgirdleFullDescription.join("\n   ").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
	toNotesPage : [{
		name : "Features",
		note : EGtW_Vestiges_Replace(EGtW_StormgirdleFullDescription)
	}],
	dmgres : ["Lightning", "Thunder"],
	action : [["action", " (Storm Avatar)"]],
	extraLimitedFeatures : [{
		name : "Storm Girdle (Storm Avatar)",
		usages : 1,
		recovery : "dawn"
	}],
	weaponOptions : [{
		regExpSearch : /^(?=.*storm avatar)(?=.*lightning strike).*$/i,
		name : "Storm Avatar's Lightning Strike",
		source : [["W", 273]],
		ability : 0,
		type : "Magic Item",
		damage : [3, 6, "lightning"],
		range : '30 ft',
		description : "Bonus action; Dex save, success - half damage",
		modifiers : [7, ""],
		dc : true,
		stormAvatarLightningStrike : true
	}],
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.theWea.stormAvatarLightningStrike && CurrentMagicItems.known.indexOf('stormgirdle') !== -1) {
					var stormgirdleType = CurrentMagicItems.choices[CurrentMagicItems.known.indexOf('stormgirdle')];
					fields.Damage_Die = (stormgirdleType === "exalted" ? 5 : stormgirdleType === "awakened" ? 4 : 3) + 'd6';
				};
			},
			"",
			1
		]
	},
	choices : ["Dormant", "Awakened", "Exalted"],
	choicesNotInMenu : true,
	"dormant" : {
		name : "Stormgirdle [dormant]",
		description : "This wide belt of thick leather branded with the symbol of Kord grants me resistance to lightning and thunder damage and increases my Strength to 21. As an action once per dawn, I can use it to become a Storm Avatar for 1 minute. See Notes page for more information.",
		scoresOverride : [21, 0, 0, 0, 0, 0]
	},
	"awakened" : {
		name : "Stormgirdle [awakened]",
		description : "This wide belt of thick leather branded with the symbol of Kord grants me resistance to lightning and thunder damage and increases my Strength to 23. As an action once per dawn, I can use it to become a Storm Avatar for 1 minute. See Notes page for more information.",
		scoresOverride : [23, 0, 0, 0, 0, 0]
	},
	"exalted" : {
		name : "Stormgirdle [exalted]",
		description : "This wide belt of thick leather branded with the symbol of Kord grants me resistance to lightning and thunder damage and increases my Strength to 25. As an action once per dawn, I can use it to become a Storm Avatar for 1 minute. Once per dawn, I can cast Control Weather. See Notes page for more information.",
		scoresOverride : [25, 0, 0, 0, 0, 0],
		spellcastingAbility : "class",
		spellcastingBonus : [{
			name : "Once per dawn",
			spells : ["control weather"],
			selection : ["control weather"],
			firstCol : 'oncelr'
		}]
	}
};
var EGtW_VerminshroudFullDescription = [
	"This patchy cloak was pieced together from the pelts of rats found feasting on the dead in Blightshore and is dotted with the bloated corpses of magically preserved insects along its seams.",
	">>Dormant<<. While wearing the Verminshroud in its dormant state, you gain the following benefits:",
	"\u2022 You have advantage on Wisdom (Perception) checks that rely on smell, you are immune to disease, and you have darkvision out to a range of 60 feet. If you already have darkvision, wearing the cloak increases the range of your darkvision by 60 feet.",
	"\u2022 As an action, you can use the Verminshroud to cast polymorph on yourself, transforming into a giant rat or rat while retaining your Intelligence, Wisdom, and Charisma scores, as well as the properties of the cloak. This property can't be used again until the next dawn.",
	">>Awakened<<. While wearing the Verminshroud in its awakened state, you gain the following benefits:",
	"\u2022 You have resistance to poison damage.",
	"\u2022 You can use an action to cast the insect plague spell (save DC 15) from the Verminshroud, requiring no material components. This property can't be used again until the next dawn.",
	"\u2022 When you cast the polymorph spell using the Verminshroud, you can transform into a giant wasp.",
	">>Exalted<<. While wearing the Verminshroud in its exalted state, you gain the following benefits:",
	"\u2022 You gain a climbing speed equal to your walking speed.",
	"\u2022 Your teeth become razor-sharp natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal piercing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike. You can make this attack as a bonus action. When you bite a creature and deal damage to it, the creature must succeed on a DC 17 Constitution saving throw or be poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the condition on itself on a success.",
	"\u2022 When you cast the polymorph spell using the Verminshroud, you can transform into a giant scorpion."
];
MagicItemsList["verminshroud"] = {
	name : "Verminshroud",
	source : [["W", 273]],
	type : "wondrous item",
	rarity : "legendary",
	notLegalAL : true,
	attunement : true,
	description : "This patchy cloak was pieced together from the pelts of rats found feasting on the dead in Blightshore and is dotted with the bloated corpses of magically preserved insects along its seams. See notes page for more info.",
	descriptionFull : EGtW_VerminshroudFullDescription.join("\n   ").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
	toNotesPage : [{
		name : "Features",
		note : EGtW_Vestiges_Replace(EGtW_VerminshroudFullDescription)
	}],
	savetxt : { immune : ["disease"] },
	vision : [["Darkvision", "fixed 60"], ["Darkvision", "+60"], ["Adv. on Perception check that rely on smell", 0]],
	extraLimitedFeatures : [{
		name : "Verminshroud (Polymorph)",
		usages : 1,
		recovery : "dawn"
	}],
	choices : ["Dormant", "Awakened", "Exalted"],
	choicesNotInMenu : true,
	"dormant" : {
		name : "Verminshroud [dormant]",
		description : "This patchy cloak of rat pelts grants me immunity to disease, darkvision out to 60 ft, or extends it by 60 ft, and advantage on Perception checks that rely on smell. Once per dawn, I can use it to cast Polymorph on myself to become a rat or a giant rat, but I retain my Int, Wis, and Cha, as well as the benefits of this cloak.",
		spellcastingAbility : "class",
		spellcastingBonus : [{
			name : "Once per dawn",
			spells : ["polymorph"],
			selection : ["polymorph"],
			firstCol : "oncelr"
		}],
		spellChanges : {
			"polymorph" : {
				name : "Polymorph (special)",
				range : "Self",
				description : "I transform into a rat or giant rat; I retain my Int, Wis, Cha",
				changes : "Using Verminshroud, I can cast Polymorph on myself once per dawn to transform myself into a rat or giant rat, while retaining my Intelligence, Wisdom, and Charisma scores as well as the benefits of the cloak."
			}
		}
	},
	"awakened" : {
		name : "Verminshroud [awakened]",
		description : "This patchy cloak of rat pelts grants me immunity to disease, darkvision out to 60 ft, or extends it by 60 ft, adv. on Perception checks that rely on smell, and resistance to poison. Once per dawn, I can use it to cast Polymorph on myself to become a rat, giant rat, or giant wasp. I can cast Insect Plague. See Notes page",
		dmgres : ["Poison"],
		extraLimitedFeatures : [{
			name : "Verminshroud (Insect Plague)",
			usages : 1,
			recovery : "dawn"
		}],
		fixedDC : 15,
		spellcastingBonus :[{
			name : "Once per dawn",
			spells : ["polymorph", "insect plague"],
			selection : ["polymorph", "insect plague"],
			firstCol : "oncelr",
			times : 2
		}],
		spellChanges : {
			"polymorph" : {
				name : "Polymorph (special)",
				range : "Self",
				description : "I transform into a rat, giant rat, or giant wasp; I retain my Int, Wis, Cha",
				changes : "Using Verminshroud, I can cast Polymorph on myself once per dawn to transform myself into a rat, giant rat, or giant wasp, while retaining my Intelligence, Wisdom, and Charisma scores as well as the benefits of the cloak."
			}
		}
	},
	"exalted" : {
		name : "Verminshroud [exalted]",
		description : "This patchy cloak grants me immunity to disease, darkvision out to 60 ft, or extends it by 60 ft, adv. on Perception checks that rely on smell, resistance to poison, and a climbing speed. Once per dawn, I can use it to cast Polymorph on myself to become a rat, giant rat, giant wasp, or giant scorpion. See Notes page.",
		dmgres : ["Poison"],
		extraLimitedFeatures : [{
			name : "Verminshroud (Insect Plague)",
			usages : 1,
			recovery : "dawn"
		}],
		fixedDC : 15,
		spellcastingBonus : [{
			name : "Once per dawn",
			spells : ["polymorph", "insect plague"],
			selection : ["polymorph", "insect plague"],
			firstCol : "oncelr",
			times : 2
		}],
		spellChanges : {
			"polymorph" : {
				name : "Polymorph (special)",
				range : "Self",
				description : "I transform into a rat, giant rat, giant wasp, or giant scorpion; I retain my Int, Wis, Cha",
				changes : "Using Verminshroud, I can cast Polymorph on myself once per dawn to transform myself into a rat, giant rat, giant wasp, or giant scorpion, while retaining my Intelligence, Wisdom, and Charisma scores as well as the benefits of the cloak."
			}
		},
		speed : { climb : { spd : "walk", enc : "walk" } },
		action : [["bonus action", "Verminshroud: Bite"]],
		weaponOptions : [{
			baseWeapon : "unarmed strike",
			regExpSearch : /^(?=.*verminshroud)(?=.*bite).*$/i,
			name : "Verminshroud: Bite",
			source : [["W", 273]],
			damage : [1, 6, "piercing"],
			description : "Bonus action; DC17 Con save or poisoned 1 min, repeat save end of their turns",
			abilitytodamage : true,
			selectNow : true
		}]
	}
};
var EGtW_WreathPrismFullDescription = [
	"This loop of golden thorns is inset with dozens of gems representing the five colors of Tiamat.",
	">>Dormant<<. While wearing the wreath in its dormant state, you have darkvision out to a range of 60 feet. If you already have darkvision, wearing the wreath increases the range of your darkvision by 60 feet.",
	"When you hit a beast, dragon, or monstrosity of challenge rating 5 or lower with an attack, or when you grapple it, you can use the wreath to cast dominate monster on the creature (save DC 13). On a successful save, the target is immune to the power of the wreath for 24 hours. On a failure, a shimmering, golden image of the wreath appears as a collar around the target's neck or as a crown on its head (your choice) until it is no longer charmed by the spell. If you use the wreath to charm a second creature, the first spell immediately ends. When the spell ends, the target knows it was charmed by you.",
	">>Awakened<<. Once the Wreath of the Prism reaches an awakened state, it gains the following benefits:",
	"\u2022 You can affect creatures of challenge rating 10 or lower with the wreath.",
	"\u2022 The save DC of the wreath's spell increases to 15.",
	">>Exalted<<. Once the Wreath of the Prism reaches an exalted state, it gains the following benefits:",
	"\u2022 You can affect creatures of challenge rating 15 or lower with the wreath.",
	"\u2022 The save DC of the wreath's spell increases to 17."
];
MagicItemsList["wreath of the prism"] = {
	name : "Wreath of the Prism",
	source : [["W", 274]],
	type : "wondrous item",
	rarity : "legendary",
	notLegalAL : true,
	attunement : true,
	description : "This loop of golden thorns is inset with dozens of gems that represent the five colors of Tiamat. I gain darkvision to 60 ft, or extend my darkvision by 60 ft. When I hit a beast, dragon, or monstrosity with an attack, I can cast dominate monster on that creature, depending on its CR. See notes page for info.",
	descriptionFull : EGtW_WreathPrismFullDescription.join("\n   ").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
	toNotesPage : [{
		name : "Features",
		note : EGtW_Vestiges_Replace(EGtW_WreathPrismFullDescription)
	}],
	vision : [["Darkvision", "fixed 60"], ["Darkvision", "+60"]],
	choices : ["Dormant", "Awakened", "Exalted"],
	choicesNotInMenu : true,
	"dormant" : {
		name : "Wreath of the Prism [dormant]",
		description : "This loop of golden thorns is inset with dozens of gems that represent the five colors of Tiamat. I gain darkvision out to 60 ft, or extend it by 60 ft. When I hit a beast, dragon, or monstrosity of CR 5 or lower with an attack, I can cast dominate monster on that creature (save DC 13). See notes page for more information.",
		fixedDC : 13,
		spellcastingBonus : [{
			name : "CR 5 or lower, DC 13",
			spells : ["dominate monster"],
			selection : ["dominate monster"]
		}],
		spellChanges : {
			"dominate monster" : {
				name : "Dominate Monster (special)",
				description : "Cast on attack hit on CR 5 or lower beast, dragon, or monstrosity; spell ends if I do this again",
				changes : "I can cast dominate monster on a beast, dragon, or monstrosity of CR 5 when I hit it with an attack (save DC 13). If I use the wreath to charm a second creature, the first spell immediately ends. When the spell ends, the target knows it was charmed by me."
			}
		}
	},
	"awakened" : {
		name : "Wreath of the Prism [awakened]",
		description : "This loop of golden thorns is inset with dozens of gems that represent the five colors of Tiamat. I gain darkvision out to 60 ft, or extend it by 60 ft. When I hit a beast, dragon, or monstrosity of CR 10 or lower with an attack, I can cast dominate monster on that creature (save DC 15). See notes page for more information.",
		fixedDC : 15,
		spellcastingBonus : [{
			name : "CR 10 or lower, DC 15",
			spells : ["dominate monster"],
			selection : ["dominate monster"]
		}],
		spellChanges : {
			"dominate monster" : {
				name : "Dominate Monster (special)",
				description : "Cast on attack hit on CR 10 or lower beast, dragon, or monstrosity; spell ends if I do this again",
				changes : "I can cast dominate monster on a beast, dragon, or monstrosity of CR 10 when I hit it with an attack (save DC 15). If I use the wreath to charm a second creature, the first spell immediately ends. When the spell ends, the target knows it was charmed by me."
			}
		}
	},
	"exalted" : {
		name : "Wreath of the Prism [exalted]",
		description : "This loop of golden thorns is inset with dozens of gems that represent the five colors of Tiamat. I gain darkvision out to 60 ft, or extend it by 60 ft. When I hit a beast, dragon, or monstrosity of CR 15 or lower with an attack, I can cast dominate monster on that creature (save DC 17). See notes page for more information.",
		fixedDC : 17,
		spellcastingBonus : [{
			name : "CR 15 or lower, DC 17",
			spells : ["dominate monster"],
			selection : ["dominate monster"]
		}],
		spellChanges : {
			"dominate monster" : {
				name : "Dominate Monster (special)",
				description : "Cast on attack hit on CR 15 or lower beast, dragon, or monstrosity; spell ends if I do this again",
				changes : "I can cast dominate monster on a beast, dragon, or monstrosity of CR 15 when I hit it with an attack (save DC 17). If I use the wreath to charm a second creature, the first spell immediately ends. When the spell ends, the target knows it was charmed by me."
			}
		}
	}
};

/* Supernatural gift

MagicItemsList["hollow one"] = {
	name : "Hollow One",
	source : [["W", 182]],
	type : "supernatural gift",
	rarity : "",
	notLegalAL : true,
	description : "I don't age and aging effects don't work on me. When I roll a 16 or higher on a death save, I regain 1 HP. I register as undead for spells and other effects. As an action once per long rest, I can unsettle a creature I can see within 15 ft, giving it disadv. on the next save it makes in the next minute (frightening effect).",
	descriptionLong : "The void left behind by my departed soul is filled with the strange magic of Blightshore.\nI don't age and aging effects don't work on me. When I roll a 16 or higher on a death save, I regain 1 HP. Although my creature type is unchanged, I register as undead for spells and other effects. As an action once per long rest, I can unsettle a creature I can see within 15 ft, giving it disadvantage on the next save it makes in the next minute. Constructs, undead, and creatures that can't be frightened are immune to this feature.",
	descriptionFull : "As a Hollow One, the void left behind by your departed soul is filled with the strange magic of Blightshore. Becoming a Hollow One is a supernatural gift that bestows upon you the following traits.\n"+
	toUni("Ageless") + ". You don't age, and effects that would cause you to age don't work on you.\n"+
	toUni("Cling to Life") + ". When you make a death saving throw and roll 16 or higher, you regain 1 hit point.\n"+
	toUni("Revenance") + ". You retain your creature type, yet you register as undead to spells and other effects that detect the presence of the undead creature type.\n"+
	toUni("Unsettling Presence") + ". As an action, you can unsettle a creature you can see within 15 feet of you. The target has disadvantage on the next saving throw it makes within the next minute. Constructs, undead, and creatures that can't be frightened are immune to this feature. Once you use this feature, you can't use it again until you finish a long rest.",
	savetxt : { text : ["Can't be aged", "Regain 1 HP on 16+ death save"] },
	action : [["action", "Unsettling Presence"]],
	extraLimitedFeatures : [{
		name : "Unsettling Presence",
		usages : 1,
		recovery : "long rest"
	}]
};
FeatsList["hollow one"] = MagicItemsList["hollow one"];

*/