var iFileName = "pub_20200317_EGtW.js";
RequiredSheetVersion("13.0.7");
// This file adds the content from Explorer's Guide to Wildemount to MPMB's Character Record Sheet

// Define the source
SourceList.W = {
	name : "Explorer's Guide to Wildemount",
	abbreviation : "EGtW",
	group : "Primary Sources",
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
	advantages : [ ["Insight", true], ["Investigation", false] ],
	age : " typically claim adulthood around age 100 and can live to be 750 years old",
	height : " range from under 5 to over 6 feet tall (4'6\" + 2d10\")",
	weight : " weigh around 110 lb (90 + 2d10 \xD7 1d4 lb)",
	heightMetric : " range from under 1,5 to 1,7 metres tall (137 + 5d10 cm)",
	weightMetric : " weigh around 50 kg (40 + 5d10 \xD7 2d4 / 10 kg)",
	improvements : "Pallid Elf: +2 Dexterity, +1 Wisdom;",
	scores : [0, 2, 0, 0, 1, 0],
	trait : "Pallid Elf (+2 Dexterity, +1 Wisdom)\nTrance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. This gives the same benefit as a human gets from 8 hours of sleep (long rest takes only 4 hours).\nIncisive Sense: I have advantage on Intelligence (Investigation) and Wisdom (Insight) checks.\nBlessing of the Moonweaver: I know the Light cantrip. At 3rd level, I can cast Sleep once per long rest. At 5th level, I can also cast Invisibility on myself once per long rest. Spells cast using this trait require no material components and use Wisdom as spellcasting ability.",
	abilitySave : 5,
	spellcastingBonus : {
		name : "Blessing of the Moonweaver (level 1)",
		spells : ["light"],
		selection : ["light"],
		firstCol : 'atwill'
	},
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
			limfeaname : "Sleep",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Blessing of the Moonweaver (level 3)",
				spells : ["sleep"],
				selection : ["sleep"],
				firstCol : 'oncelr'
			},
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
			limfeaname : "Invisibility (self only)",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Blessing of the Moonweaver (level 5)",
				spells : ["invisibility"],
				selection : ["invisibility"],
				firstCol : 'oncelr'
			},
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
	abilitySave : 5,
	spellcastingBonus : {
		name : "Child of the Wood (level 1)",
		spells : ["druidcraft"],
		selection : ["druidcraft"],
		firstCol : 'atwill'
	},
	features : {
		"entangle" : {
			name : "Child of the Wood (level 3)",
			limfeaname : "Entangle",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Child of the Wood (level 3)",
				spells : ["entangle"],
				selection : ["entangle"],
				firstCol : 'oncelr'
			}
		},
		"spike growth" : {
			name : "Child of the Wood (level 5)",
			limfeaname : "Spike Growth",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Child of the Wood (level 5)",
				spells : ["spike growth"],
				selection : ["spike growth"],
				firstCol : 'oncelr'
			},
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
		return capitailzedDmgType + " Breath Weapon: As an action once per short rest, I can deal 2d6 " + dmgType + " damage to all in a " + shapeStr + ", " + saveStat + " save halves (DC 8 + Con mod + prof bonus).\nThis damage increases to 3d6 at level 6, 4d6 at level 11, and 5d6 at level 16.";
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
				}
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
		dbBreathWeapon : true
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
		weaponOptions: [EGtW_breathWeaponObj],
		weaponsAdd : ["Breath Weapon"],
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
		features: {
			"draconic ancestry" : EGtW_draconicAncestryFeature,
			"forceful presence" : {
				name: "Forceful Presence",
				source: [["W", 168]],
				minlevel: 1,
				usages: 1,
				recovery: "short rest"
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
		weaponOptions: [EGtW_breathWeaponObj],
		weaponsAdd : ["Breath Weapon"],
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
		features: {
			"draconic ancestry" : EGtW_draconicAncestryFeature,
			"vengeful assault" : {
				name: "Vengeful Assault",
				source: [["W", 168]],
				minlevel: 1,
				usages: 1,
				action: [['reaction', ""]],
				recovery: "short rest"
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
		trait : "Fallen Aasimar (+1 Strength, +2 Charisma)" + (typePF ? "\n" : " ") + "Light Bearer: I know the Light cantrip.\nHealing Hands: As an action, once per long rest, I can touch to heal for my level in HP.\nNecrotic Shroud: Once per long rest when I'm 3rd level, I can use an action to transform, causing all within 10 ft of me to make a Cha" + (typePF ? "" : "risma") + " saving throw (DC 8 + Cha mod + Prof bonus) or be frightened of me until the end of my next turn. This lasts for 1 minute or until I end it as a bonus action. Once on my turn I can have one of my attacks or spells deals my level in extra necrotic damage to one target.",
		abilitySave : 6,
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
				additional : levels.map(function (n) { return n + " HP"; }),
				action : ["action", ""]
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
				additional : levels.map(function (n) { return n + " HP"; }),
				action : ["action", ""]
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
				additional : levels.map(function (n) { return n + " HP"; }),
				action : ["action", ""]
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
			age : " rearch adulthood at age 16 and live up to 80 years",
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
		languageProfs : ["Common", "Elvish", "Giant"],
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
				name : "Firbolg Magic (Detect Magic)",
				limfeaname : "Detect Magic",
				minlevel : 1,
				usages : 1,
				recovery : "short rest",
				spellcastingBonus : {
					name : "Firbolg Magic",
					spells : ["detect magic"],
					selection : ["detect magic"],
					firstCol : 'oncesr'
				}
			},
			"firbolg magic (disguise self)" : {
				name : "Firbolg Magic (Disguise Self)",
				limfeaname : "Disguise Self",
				minlevel : 1,
				usages : 1,
				recovery : "short rest",
				spellcastingBonus : {
					name : "Firbolg Magic",
					spells : ["disguise self"],
					selection : ["disguise self"],
					firstCol : 'oncesr'
				}
			},
			"hidden step" : {
				name : "Hidden Step",
				minlevel : 1,
				usages : 1,
				recovery : "short rest",
				action : ["bonus action", ""]
			}
		},
		carryingCapacity : 2
	};
	if (!RaceList["goblin"]) {
		RaceList["goblin"] = {
			regExpSearch : /^(?=.*\bgoblins?\b)(?!.*hobgoblin|bugbear).*$/i,
			name : "Goblin",
			source : [["V", 119], ["G", 17], ["E:RLW", 26], ["W", 174]],
			plural : "Goblins",
			size : 4,
			speed : {
				walk : { spd : 30, enc : 20 }
			},
			languageProfs : ["Common", "Goblin"],
			vision : [["Darkvision", 60]],
			age : " rearch adulthood at age 8 and live up to 60 years",
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
			trait : "Goblin (+2 Dexterity, +1 Constitution)\n\nFury of the Small: Once per short rest, when I hit a creature of a size category larger than mine, I deal extra damage equal to my level.\n\nNimble Escape: As a bonus action, I can take the Disengage or Hide action."
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
					tooltip : "",
					action : ["reaction", ""]
				}
			},
			trait : "Goliath (+2 Strength, +1 Constitution)" + (typePF ? "\n" : "") + "\nStone's Endurance: Once per short rest, when I take damage, I can use my reaction to reduce the damage by 1d12 + my Con" + (typePF ? "" : "stitution") + " modifier." + (typePF ? "\n" : "") + "\nPowerful Build: I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift." + (typePF ? "\n" : "") + "\nMountain Born: I have resistance to cold damage and I'm acclimated to high altitude, including elevations above 20000 feet.",
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
			trait : "Hobgoblin (+2 Constitution, +1 Intelligence)\n\nMartial Training: I am proficient with two martial weapons of my choice and light armor.\n\nSaving Face: Once per short rest, when I miss an attack roll or fail an ability check or a saving throw, I can gain a bonus to the roll equal to the number of allies I can see within 30 feet of me (max +5)."
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
		trait : "Kenku (+2 Dexterity, +1 Wisdom)" + (typePF ? "\n" : "") + "\nExpert Forgery: Kenku can duplicate other creatures' handwriting and craftwork. I have advantage on all checks made to produce forgeries or duplicates of existing objects." + (typePF ? "\n" : "") + "\nMimicry: I can mimic any sounds I have heard, including voices, but can otherwise not speak. Creatures hearing these sounds can determine they are imitations with a successful Wisdom (Insight) check opposed by my Charisma (Deception)."
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
		weaponOptions : {
			baseWeapon : "unarmed strike",
			regExpSearch : /talon/i,
			name : "Talons",
			source : [["E", 5], ["W", 166]],
			damage : [1, 4, "slashing"]
		},
		weaponsAdd : ["Talons"],
		age : " rearch maturity by age 3 and live about 30 years",
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
				limfeaname : "Levitate",
				minlevel : 1,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Mingle with the Wind",
					spells : ["levitate"],
					selection : ["levitate"],
					firstCol : 'oncelr'
				},
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
				limfeaname : "Pass without Trace",
				minlevel : 1,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Merge with Stone",
					spells : ["pass without trace"],
					selection : ["pass without trace"],
					firstCol : 'oncelr'
				},
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
		spellcastingBonus : {
			name : "Reach to the Blaze (level 1)",
			spells : ["produce flame"],
			selection : ["produce flame"],
			firstCol : 'atwill'
		},
		features : {
			"burning hands" : {
				name : "Reach to the Blaze (level 3)",
				limfeaname : "Burning Hands",
				minlevel : 3,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Reach to the Blaze (level 3)",
					spells : ["burning hands"],
					selection : ["burning hands"],
					firstCol : 'oncelr'
				}
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
		spellcastingBonus : {
			name : "Call to the Wave (level 1)",
			spells : ["shape water"],
			selection : ["shape water"],
			firstCol : 'atwill'
		},
		features : {
			"create or destroy water" : {
				name : "Call to the Wave (level 3)",
				limfeaname : "Create/Destroy Water (level 2)",
				minlevel : 3,
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : {
					name : "Call to the Wave (level 3)",
					spells : ["create or destroy water"],
					selection : ["create or destroy water"],
					firstCol : 'oncelr'
				}
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
		languageProfs : ["Common", "Elvish", "Aquan"],
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
		armorOptions : {
			regExpSearch : /^(?=.*tortle)(?=.*shell).*$/i,
			name : "Tortle's Shell",
			source : [["TP", 4], ["W", 181]],
			ac : 17,
			dex : -10
		},
		armorAdd : "Tortle's Shell",
		weaponOptions : {
			baseWeapon : "unarmed strike",
			regExpSearch : /^(?=.*tortle)(?=.*\bclaws?\b).*$/i,
			name : "Tortle's Claws",
			source : [["TP", 4], ["W", 181]],
			damage : [1, 4, "slashing"]
		},
		weaponsAdd : ["Tortle's Claws"],
		age : " reach adulthood by the age of 15 and live an average of 50 years",
		height : " stand between 5 and 6 feet tall (4'10\" + 2d8\")",
		weight : " weigh around 450 lb (400 + 2d8 \xD7 2d4 lb)",
		heightMetric : " stand between 1,5 and 1,8 metres tall (150 + 5d8 cm)",
		weightMetric : " weigh around 190 kg (180 + 5d8 \xD7 4d4 / 10 kg)",
		scores : [2, 0, 0, 0, 1, 0],
		features : {
			"shell defense" : {
				name : "Shell Defense",
				minlevel : 1,
				action : ["action", ""]
			}
		},
		trait : "Tortle (+2 Strength, +1 Wisdom)\nClaws: I can use my claws to make unarmed strikes dealing 1d4 slashing damage.\nHold Breath: I can hold my breath for up to 1 hour at a time.\nNatural Armor: I have a base AC of 17, but I can't add my Dex to it or wear armour.\nShell Defense: As an action, I can withdraw into my shell and gain +4 AC and adv. on Str and Con saves, but I count as prone, have speed 0, have disadv. on Dex saves, and can't take reactions. The only action I can take is a bonus action to emerge from the shell."
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
				"It has 1 HP, immunity to all conditions, uses my save bonuses, and AC 14 + Prof. Bonus",
				"On my turn as a free action, I can command it to move up to 30 ft in any direction",
				"As a bonus action, I can teleport to swap places with it, at a cost of 15 ft movement",
				"When I use the Attack action on my turn, I can have any attack originate from my echo",
				"I can also make opportunity attacks from the echo's location as if I were in its space"
			]),
			action: [["bonus action", " (summon/dismiss)"], ["bonus action", "Swap Location with Echo"]],
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
					description : "The echo is a magical, translucent, gray image of its creator that that doesn't act and has no turn in combat. It lasts until it is destroyed, dismissed, another is manifested, or its creator is incapacitated. The echo is also destroyed if it is ever more than 30 ft away from its creator at the start of its creator's turn."
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
			usages: 1,
			recovery: "short rest"
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
				"If doubled, it has -10 ft speed and disadvantage on Strength checks and Strength saves ",
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
			recovery: "long rest",
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
}, "Optional 1st-level sorcerer features");
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
		"Give me a drink and am I'm your friend.",
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
	descriptionCantripDie : "1 creature that I can see save or 1d4 Necrotic dmg and fall prone",
	descriptionFull : "You sap the vitality of one creature you can see in range. The target must succeed on a Constitution saving throw or take 1d4 necrotic damage and fall prone.\n   This spell's damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4)."
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
	range : "S:30ft cone",
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
	description : "100-ft long 5-ft wide all 8d6+1d6/SL Force dmg, save half; all in 10 ft of line save or dmg \u0026 pull to it",
	descriptionShorter : "100-ft long 5-ft wide all 8d6+1d6/SL Force dmg, save half; all in 10 ft of it save or dmg \u0026 pulled",
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
	traits : [{
		name : "Bladed Hide",
		description : "At the start of each of its turns, the moorbounder deals 2d4 piercing damage to any creature grappling it."
	}, {
		name : "Standing Leap",
		description : "The moorbounder's long jump is up to 40 ft and its high jump is up to 20 ft, with or without a running start."
	}]
};