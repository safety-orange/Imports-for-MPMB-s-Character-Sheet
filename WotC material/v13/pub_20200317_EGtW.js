var iFileName = "pub_20200317_EGtW.js";
RequiredSheetVersion(13);

// Define the source
SourceList.W={
	name : "Explorer's Guide to Wildemount",
	abbreviation : "EGtW",
	group : "Primary Sources",
	url : "https://dnd.wizards.com/products/wildemount",
	date : "2020/03/17"
};

// Add one subclass for Fighter
AddSubClass("fighter", "echo knight-egtw", {
	regExpSearch : /^(?=.*echo)(?=.*knight).*$/i,
	subname : "Echo Knight",
	source : ["W", 183],
	fullname : "Echo Knight",
	features : {
		"subclassfeature3" : {
			name : "Manifest Echo",
			source : ["W", 183],
			minlevel : 3,
			description : desc([
			]),
			action: [["bonus action", " (summon)"], ["bonus action", " (swap)"]],
			eval : function (lvl, chc) {
				companionUtil.add("Echo");
			},
			removeeval : function (lvl, chc) {
				companionUtil.remove("echo");
				if (CreatureList.echo && CreatureList.echo.removeeval) CreatureList.echo.removeeval();
			}
		},
		"subclassfeature3.1" : {
			name : "Unleash Incarnation",
			source : ["W", 183],
			minlevel : 3,
			description : desc([
			]),
			usages : "Constitution modifier per ",
			usagescalc : usagescalcStr("Con"),
			recovery : "long rest"
		},
		"subclassfeature7" : {
			name : "Echo Avatar",
			source : ["W", 183],
			minlevel : 7,
			description : desc([
			]),
			action : [["action", ""]]
		},
		"subclassfeature10" : {
			name : "Shadow Martyr",
			source : ["W", 183],
			minlevel : 10,
			description : desc([
			]),
			action : [["reaction", ""]],
			usages : 1,
			recovery : "short rest"
		},
		"subclassfeature15" : {
			name : "Reclaim Potential",
			source : ["W", 184],
			minlevel : 15,
			description : desc([
			]),
			usages : "Constitution modifier per ",
			usagescalc : usagescalcStr("Con"),
			recovery : "long rest"
		},
		"subclassfeature18" : {
			name : "Legion of One",
			source : ["W", 184],
			minlevel : 18,
			description : desc([
			])
		}
	}
});

CreatureList.echo = {
	name : "Echo",
	source : [["W", 183]],
	size : 3,
	type : "",
	subtype : "",
	alignment : "Neutral",
	ac : 14,
	hp : 1,
	hd : [],
	speed : "0 ft",
	scores : [10, 10, 10, 10, 10, 10],
	saves : ["", "", "", "", "", ""],
	condition_immunities : "all conditions",
	passivePerception : 0,
	senses : "",
	languages : "",
	challengeRating : "0",
	proficiencyBonus : 0,
	attacksAction : 0,
	attacks : [],
	eval : function(prefix) {

		// HP is only ever 1
		var HPmaxFld = tDoc.getField(prefix + "Comp.Use.HP.Max");
		HPmaxFld.readonly = true;
		Hide(prefix + "Buttons.Comp.Use.HP.Max");

		// Echo type
		var theType = tDoc.getField(prefix + 'Comp.Type');
		theType.readonly = true;
		theType.value = 'Echo';

		// Armour class is 14 + character proficiency
		var armourClass = tDoc.getField(prefix + 'Comp.Use.AC');
		armourClass.readonly = true;
		armourClass.setAction("Calculate", "event.value = 14 + Number(How('Proficiency Bonus'));");

		// Same size as character
		PickDropdown(prefix + "Comp.Desc.Size", CurrentRace.size);

		// Saving throws are the same as the character's
		for (var i = 0; i < AbilityScores.abbreviations.length; i++) {
			var abi = AbilityScores.abbreviations[i];
			var saveModBonus = tDoc.getField(prefix + 'BlueText.Comp.Use.Ability.' + abi + '.ST.Bonus');
			saveModBonus.readonly = true;
			saveModBonus.setAction("Calculate", "event.value = What('" + abi + " ST Mod');");
		}
		// TODO: This doesn't quite work, as this bonus is unfortunately calculated after the actual save.
	}
};

// Add two subclasses for Wizard
AddSubClass("wizard", "chronurgy magic-egtw", {
	regExpSearch : /^((?=.*chronurgy)(?=.*(wizard|magic|mage))|chronomancer|chronurgist).*$/i,
	subname : "Chronurgy Magic",
	source : ["W", 184],
	fullname : "Chronurgist",
	features : {
		"subclassfeature2" : {
			name : "Chronal Shift",
			source : ["W", 184],
			minlevel : 2,
			description : desc([
			]),
			action : [["reaction", ""]],
			usages : 2,
			recovery : "long rest"
		},
		"subclassfeature2.1" : {
			name : "Temporal Awareness",
			source : ["W", 184],
			minlevel : 2,
			description : "\n   " + "I gain a bonus to my initiative rolls equal to my Intelligence modifier",
			addMod : { type : "skill", field : "Init", mod : "max(Int|0)", text : "I can add my Intelligence modifier to initiative rolls." }
		},
		"subclassfeature6" : {
			name : "Momentary Stasis",
			source : ["W", 184],
			minlevel : 6,
			description : desc([
			]),
			action : [["action", ""]],
			usages : "Intelligence modifier per ",
			usagescalc : usagescalcStr("Int"),
			recovery : "long rest"
		},
		"subclassfeature10" : {
			name : "Arcane Abeyance",
			source : ["W", 184],
			minlevel : 10,
			description : desc([
			]),
			usages: 1,
			recovery: "short rest"
		},
		"subclassfeature14" : {
			name : "Convergent Future",
			source : ["W", 185],
			minlevel : 14,
			description : desc([
			]),
			action : [["reaction", ""]]
		}
	}
});

AddSubClass("wizard", "graviturgy magic-egtw", {
	regExpSearch : /^((?=.*graviturgy)(?=.*(wizard|magic|mage))|gravimancer|graviturgist).*$/i,
	subname : "Graviturgy Magic",
	source : ["W", 185],
	fullname : "Graviturgist",
	features : {
		"subclassfeature2" : {
			name : "Adjust Density",
			source : ["W", 185],
			minlevel : 2,
			description : desc([
			]),
			action : [["action", ""]]
		},
		"subclassfeature6" : {
			name : "Gravity Well",
			source : ["W", 185],
			minlevel : 6,
			description : desc([
			])
		},
		"subclassfeature10" : {
			name : "Violent Attraction",
			source : ["W", 185],
			minlevel : 10,
			description : desc([
			]),
			action : [["reaction", ""]],
			usages : "Intelligence modifier per ",
			usagescalc : usagescalcStr("Int"),
			recovery : "long rest"
		},
		"subclassfeature14" : {
			name : "Event Horizon",
			source : ["W", 185],
			minlevel : 14,
			description : desc([
			]),
			action : [["action", ""]],
			usages : 1,
			recovery: "long rest",
			altResource : "SS 3+",
		}
	}
});
SpellsList["sapping sting"] = { 
	name : "Sapping Sting",
	classes : ["wizard"],
	source : ["EGW", 189],
	level : 0,
	school : "Necro",
	time : "1 a",
	range : "30 ft",
	components : "V/S",
	duration : "Instantaneous",
	save : "Con",
	description : "1 visible crea 1d4 Necrotic dmg and fall prone; +1d4 at CL 5, 11, and 17",
	descriptionFull :  "You sap the vitality of one creature you can see in range. The target must succeed on a Constitution saving throw or take 1d4 necrotic damage and fall prone." + "\n " + "This spell's damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4)."
};
SpellsList["gift of alacrity"] = { 
	name : "Gift of Alacrity",
	classes : ["wizard"],
	source : ["EGW", 186],
	level : 1,
	school : "Divin",
	time : "1 min",
	range : "Touch",
	components : "V/S",
	duration : "8 h",
	descriptionFull :  "You touch a willing creature. For the duration, the target can add 1d8 to its initiative rolls."
};
SpellsList["magnify gravity"] = { 
	name : "Magnify Gravity",
	classes : ["wizard"],
	source : ["EGW", 188],
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "60 ft",
	components : "V/S",
	duration : "1 r",
	description : "10-ft rad 2d8+1d8/SL Force dmg, hlf spd unt. e.o.n.t. Save half+no spd red. Str chk to move free objs.",
	descriptionFull :  "The gravity in a 10-foot-radius sphere centered on a point you can see within range increases for a moment. Each creature in the sphere on the turn when you cast the spell must make a Constitution saving throw. On a failed save, a creature takes 2d8 force damage, and its speed is halved until the end of its next turn. On a successful save, a creature takes half as much damage and suffers no reduction to its speed." + "\n " + "Until the start of your next turn, any object that isn't being worn or carried in the sphere requires a successful Strength check against your spell save DC to pick up or move." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
};
SpellsList["fortune's favor"] = { 
	name : "Fortune's Favor",
	classes : ["wizard"],
	source : ["EGW", 186],
	level : 2,
	school : "Divin",
	time : "1 min",
	range : "Touch",
	components : "V/S/M",
	compMaterial : "a white pearl worth at least 100 gp, which the spell consumes",
	duration : "1 h",
	description : "1+1/SL crea end effect to roll add. d20 for atk roll/abl. chk./sav. throw or enemy atk. roll against it.",
	descriptionFull : "You impart latent luck to yourself or one willing creature you can see within range. When the chosen creature makes an attack roll, an ability check, or a saving throw before the spell ends, it can dismiss this spell on itself to roll an additional d20 and choose which of the d20s to use. Alternatively, when an attack roll is made against the chosen creature, it can dismiss this spell on itself to roll a d20 and choose which of the d20s to use, the one it rolled or the one the attacker rolled." + "\n" + "If the original d20 roll has advantage or disadvantage, the creature rolls the additional d20 after advantage or disadvantage has been applied to the original roll." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd."
};
SpellsList["immovable object"] = { 
	name : "Immovable Object",
	classes : ["wizard"],
	source : ["EGW", 187],
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "V/S/M",
	compMaterial : "gold dust worth at least 25 gp, which the spell consumes",
	duration : "1 h",
	description : "1 obj <10lb fixed in place. Obj can hold <4000lb. Chosen move it; others str chk. DC 10. Psw. access 1m.",
	descriptionFull : "You touch an object that weighs no more than 10 pounds and cause it to become magically fixed in place. You and the creatures you designate when you cast this spell can move the object normally. You can also set a password that, when spoken within 5 feet of the object, suppresses this spell for 1 minute." + "\n" + "If the object is fixed in the air, it can hold up to 4,000 pounds of weight. More weight causes the object to fall. Otherwise, a creature can use an action to make a Strength check against your spell save DC. On a success, the creature can move the object up to 10 feet." + AtHigherLevels + "If you cast this spell using a spell slot of 4th or 5th level, the DC to move the object increases by 5, it can carry up to 8,000 pounds of weight, and the duration increases to 24 hours. If you cast this spell using a spell slot of 6th level or higher, the DC to move the object increases by 10, it can carry up to 20,000 pounds of weight, and the effect is permanent until dispelled."
};
SpellsList["wristpocket"] = { 
	name : "Wristpocket",
	classes : ["wizard"],
	source : ["EGW", 190],
	ritual : true,
	level : 2,
	school : "Conj",
	time : "1 a",
	range : "Self",
	components : "S",
	duration : "Conc, 1 h",
	description : "1 held obj <5 lb disappear to alt. dim. 1 a to summon obj to hand or return. Obj appears at feet at end.",
	descriptionFull : "You flick your wrist, causing one object in your hand to vanish. The object, which only you can be holding and can weigh no more than 5 pounds, is transported to an extradimensional space, where it remains for the duration." + "\n" + "Until the spell ends, you can use your action to summon the object to your free hand, and you can use your action to return the object to the extradimensional space. An object still in the pocket plane when the spell ends appears in your space, at your feet."
};
SpellsList["pulse wave"] = { 
	name : "Pulse Wave",
	classes : ["wizard"],
	source : ["EGW", 188],
	level : 3,
	school : "Evoc",
	time : "1 a",
	range : "Self",
	components : "V/S",
	duration : "Instantaneous",
	save : "Con",
	description : "30-ft cone 6d6+1d6/SL Force dmg, pull/push 15+5/SL ft; Save hlf/no move.",
	descriptionFull : "You create intense pressure, unleash it in a 30-foot cone, and decide whether the pressure pulls or pushes creatures and objects. Each creature in that cone must make a Constitution saving throw. A creature takes 6d6 force damage on a failed save, or half as much damage on a successful one. And every creature that fails the save is either pulled 15 feet toward you or pushed 15 feet away from you, depending on the choice you made for the spell." + "\n" + "In addition, unsecured objects that are completely within the cone are likewise pulled or pushed 15 feet." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 and the distance pulled or pushed increases by 5 feet for each slot level above 3rd."
};
SpellsList["dark star"] = { 
	name : "Dark Star",
	classes : ["wizard"],
	source : ["EGW", 186],
	level : 8,
	school : "Evoc",
	time : "1 a",
	range : "150 ft",
	components : "V/S/M",
	compMaterial : "A shard of onyx and a drop of the caster's blood, both of which the spell consumes",
	duration : "Conc, 1 m",
	save : "Con",
	description : "40-ft rad 8d10 Force dmg ea turn, save half; darkness/silence/dif. ter./hit unc. crea disintegrate",
	descriptionFull :  "This spell creates a sphere centered on a point you choose within range. The sphere can have a radius of up to 40 feet. The area within this sphere is filled with magical darkness and crushing gravitational force." + "\n " + "For the duration, the spell's area is difficult terrain. A creature with darkvision can't see through the magical darkness, and nonmagical light can't illuminate it. No sound can be created within or pass through the area. Any creature or object entirely inside the sphere is immune to thunder damage, and creatures are deafened while entirely inside it. Casting a spell that includes a verbal component is impossible there." + "\n " + "Any creature that enters the spell's area for the first time on a turn or starts its turn there must make a Constitution saving throw. The creature takes 8d10 force damage on a failed save, or half as much damage on a successful one. A creature reduced to 0 hit points by this damage is disintegrated. A disintegrated creature and everything it is wearing and carrying, except magic items, are reduced to a pile of fine gray dust. " 
};
function usagescalcStr(mod) {
	return "event.value = Math.max(1, What('" + mod + " Mod'));";
}

var companionUtil = {
	add : function (compName) {
		var AScompA = isTemplVis('AScomp') ? What('Template.extras.AScomp').split(',') : false;
		var prefix = false;
		if (AScompA) {
			for (var a = 1; a < AScompA.length; a++) {
				if (!What(AScompA[a] + 'Comp.Race')) {
					prefix = AScompA[a];
					break;
				}
			}
		}
		if (!prefix) prefix = DoTemplate('AScomp', 'Add');
		Value(prefix + 'Comp.Race', compName);
		var changeMsg = "The " + compName + " has been added to the companion page at page number " + (tDoc.getField(prefix + 'Comp.Race').page + 1);
		CurrentUpdates.types.push("notes");
		if (!CurrentUpdates.notesChanges) {
			CurrentUpdates.notesChanges = [changeMsg];
		} else {
			CurrentUpdates.notesChanges.push(changeMsg);
		}
		return prefix;
	},
	remove : function (compName) {
		var AScompA = isTemplVis('AScomp') ? What('Template.extras.AScomp').split(',') : false;
		if (!AScompA) return;
		compName = compName.toLowerCase();
		for (var a = 1; a < AScompA.length; a++) {
			if (What(AScompA[a] + 'Comp.Race').toLowerCase().indexOf(compName) !== -1) {
				DoTemplate("AScomp", "Remove", AScompA[a], true);
			}
		}
	},
	find : function (compName) {
		var AScompA = isTemplVis('AScomp') ? What('Template.extras.AScomp').split(',') : false;
		var prefixes = [];
		if (!AScompA) return prefixes;
		compName = compName.toLowerCase();
		for (var a = 1; a < AScompA.length; a++) {
			if (What(AScompA[a] + 'Comp.Race').toLowerCase().indexOf(compName) !== -1) prefixes.push(AScompA[a]);
		}
		return prefixes;
	}
};

// Races TODO: Page numbers

// Dragonborn
var breathWeaponDesc = function(dmgType, shape) {
	var shapeStr = shape === "line" ? "5 ft by 30 ft line" : "15 ft cone";
	var capitailzedDmgType = dmgType.charAt(0).toUpperCase() + dmgType.slice(1);
	var saveStat = ["cold", "poison"].indexOf(dmgType) >= 0 ? "Con" : "Dex";
	return capitailzedDmgType + " Breath Weapon: As an action once per short rest, I can deal 2d6 " + dmgType + " damage to all in a " + shapeStr + ", " + saveStat + " save halves (DC 8 + Con mod + prof bonus).\nThis damage increases to 3d6 at level 6, 4d6 at level 11, and 5d6 at level 16.";
};

var acidBreath = breathWeaponDesc("acid", "line");
var lightningBreath = breathWeaponDesc("lightning", "line");
var coneFireBreath = breathWeaponDesc("fire", "cone");
var coldBreath = breathWeaponDesc("cold", "cone");

// Draconblood
var forcefulPresenceStr = "Forceful Presence: Once per short rest, I can give myself adv. on an Intimidation or Persuasion check.";

RaceList["draconblood"] = {
	regExpSearch : /^(?=.*draconblood)(?=.*dragonborn)?.*$/i,
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
	weaponOptions : {
		regExpSearch : /^(?=.*breath)(?=.*weapon).*$/i,
		name : "Breath weapon",
		source : [["SRD", 5], ["P", 34]],
		ability : 3,
		type : "Natural",
		damage : [2, 6, "fire"],
		range : "15-ft cone",
		description : "Hits all in area; Dex save, success - half damage; Usable only once per short rest",
		abilitytodamage : false,
		dc : true,
		dbBreathWeapon : true
	},
	weaponsAdd : ["Breath Weapon"],
	age : " reach adulthood by 15 and live around 80 years",
	height : " stand well over 6 feet tall (5'6\" + 2d8\")",
	weight : " weigh around 240 lb (175 + 2d8 \xD7 2d6 lb)",
	heightMetric : " stand well over 1,8 metres tall (170 + 5d8 cm)",
	weightMetric : " weigh around 110 kg (80 + 5d8 \xD7 4d6 / 10 kg)",
	scores : [0, 0, 0, 2, 0, 1],
	trait : "Draconblood Dragonborn (+2 Intelligence, +1 Charisma)" + desc([
		"Draconic Ancestry: Choose one type of dragon using the \"Racial Options\" button. I gain a breath weapon as determined by the dragon type chosen.",
		forcefulPresenceStr
	]),
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
				atkAdd : [
					function (fields, v) {
						if (v.theWea.dbBreathWeapon && CurrentRace.known === 'draconblood') {
							fields.Damage_Die = (CurrentRace.level < 6 ? 2 : CurrentRace.level < 11 ? 3 : CurrentRace.level < 16 ? 4 : 5) + 'd6';
							if (CurrentRace.variant) {
								fields.Damage_Type = CurrentRace.breathDmgType;
								fields.Description = fields.Description.replace(/(dex|con) save/i, ((/cold|poison/i).test(CurrentRace.breathDmgType) ? 'Con' : 'Dex') + ' save');
								fields.Range = (/black|blue|brass|bronze|copper/i).test(CurrentRace.variant) ? '5-ft \u00D7 30-ft line' : '15-ft cone';
							}
						};
					}
				]
			}
		},
		"forceful presence" : {
			name : "Forceful Presence",
			minlevel : 1,
			usages : 1,
			recovery : "short rest"
		}
	},
	variants : []
};

AddRacialVariant("draconblood", "black", {
	regExpSearch : /black/i,
	name : "Black draconblood dragonborn",
	trait : "Black draconblood dragonborn (+2 Intelligence, +1 Charisma)" + desc([
		acidBreath,
		forcefulPresenceStr
	]),
	breathDmgType : "acid"
});
AddRacialVariant("draconblood", "blue", {
	regExpSearch : /blue/i,
	name : "Blue draconblood dragonborn",
	trait : "Blue draconblood dragonborn (+2 Intelligence, +1 Charisma)" + desc([
		lightningBreath,
		forcefulPresenceStr
	]),
	breathDmgType : "lightning"
});
AddRacialVariant("draconblood", "brass", {
	regExpSearch : /brass/i,
	name : "Brass draconblood dragonborn",
	trait : "Brass draconblood dragonborn (+2 Intelligence, +1 Charisma)" + desc([
		breathWeaponDesc("fire", "line"),
		forcefulPresenceStr
	]),
	breathDmgType : "fire"
});
AddRacialVariant("draconblood", "bronze", {
	regExpSearch : /bronze/i,
	name : "Bronze draconblood dragonborn",
	trait : "Bronze draconblood dragonborn (+2 Intelligence, +1 Charisma)" + desc([
		lightningBreath,
		forcefulPresenceStr
	]),
	breathDmgType : "lightning"
});
AddRacialVariant("draconblood", "copper", {
	regExpSearch : /copper/i,
	name : "Copper draconblood dragonborn",
	trait : "Copper draconblood dragonborn (+2 Intelligence, +1 Charisma)" + desc([
		acidBreath,
		forcefulPresenceStr
	]),
	breathDmgType : "acid"
});
AddRacialVariant("draconblood", "gold", {
	regExpSearch : /gold/i,
	name : "Gold draconblood dragonborn",
	trait : "Gold draconblood dragonborn (+2 Intelligence, +1 Charisma)" + desc([
		coneFireBreath,
		forcefulPresenceStr
	]),
	breathDmgType : "fire"
});
AddRacialVariant("draconblood", "green", {
	regExpSearch : /green/i,
	name : "Green draconblood dragonborn",
	trait : "Green draconblood dragonborn (+2 Intelligence, +1 Charisma)" + desc([
		breathWeaponDesc("poison", "cone"),
		forcefulPresenceStr
	]),
	breathDmgType : "poison"
});
AddRacialVariant("draconblood", "red", {
	regExpSearch : /red/i,
	name : "Red draconblood dragonborn",
	trait : "Red draconblood dragonborn (+2 Intelligence, +1 Charisma)" + desc([
		coneFireBreath,
		forcefulPresenceStr
	]),
	breathDmgType : "fire"
});
AddRacialVariant("draconblood", "silver", {
	regExpSearch : /silver/i,
	name : "Silver draconblood dragonborn",
	trait : "Silver draconblood dragonborn (+2 Intelligence, +1 Charisma)" + desc([
		coldBreath,
		forcefulPresenceStr
	]),
	breathDmgType : "cold"
});
AddRacialVariant("draconblood", "white", {
	regExpSearch : /white/i,
	name : "White draconblood dragonborn",
	trait : "White draconblood dragonborn (+2 Intelligence, +1 Charisma)" + desc([
		coldBreath,
		forcefulPresenceStr
	]),
	breathDmgType : "cold"
});

// Ravenite
var vengefulAssaultStr = "Vengeful Assault: When I take damage from a creature in range of a weapon that I'm holding, I can use my reaction to make an attack. This can be used once per short rest.";

RaceList["ravenite"] = {
	regExpSearch : /^(?=.*ravenite)(?=.*dragonborn)?.*$/i,
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
	weaponOptions : {
		regExpSearch : /^(?=.*breath)(?=.*weapon).*$/i,
		name : "Breath weapon",
		source : [["SRD", 5], ["P", 34]],
		ability : 3,
		type : "Natural",
		damage : [2, 6, "fire"],
		range : "15-ft cone",
		description : "Hits all in area; Dex save, success - half damage; Usable only once per short rest",
		abilitytodamage : false,
		dc : true,
		dbBreathWeapon : true
	},
	weaponsAdd : ["Breath Weapon"],
	age : " reach adulthood by 15 and live around 80 years",
	height : " stand well over 6 feet tall (5'6\" + 2d8\")",
	weight : " weigh around 240 lb (175 + 2d8 \xD7 2d6 lb)",
	heightMetric : " stand well over 1,8 metres tall (170 + 5d8 cm)",
	weightMetric : " weigh around 110 kg (80 + 5d8 \xD7 4d6 / 10 kg)",
	scores : [2, 1, 0, 0, 0, 0],
	trait : "Ravenite Dragonborn (+2 Strength, +1 Constitution)" + desc([
		"Draconic Ancestry: Choose one type of dragon using the \"Racial Options\" button. I gain a breath weapon as determined by the dragon type chosen.",
		vengefulAssaultStr
	]),
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
				atkAdd : [
					function (fields, v) {
						if (v.theWea.dbBreathWeapon && CurrentRace.known === 'ravenite') {
							fields.Damage_Die = (CurrentRace.level < 6 ? 2 : CurrentRace.level < 11 ? 3 : CurrentRace.level < 16 ? 4 : 5) + 'd6';
							if (CurrentRace.variant) {
								fields.Damage_Type = CurrentRace.breathDmgType;
								fields.Description = fields.Description.replace(/(dex|con) save/i, ((/cold|poison/i).test(CurrentRace.breathDmgType) ? 'Con' : 'Dex') + ' save');
								fields.Range = (/black|blue|brass|bronze|copper/i).test(CurrentRace.variant) ? '5-ft \u00D7 30-ft line' : '15-ft cone';
							}
						};
					}
				]
			}
		},
		"vengeful assault" : {
			name : "Vengeful Assault",
			minlevel : 1,
			usages : 1,
			action : [["reaction", ""]],
			recovery : "short rest"
		}
	},
	variants : []
};

AddRacialVariant("ravenite", "black", {
	regExpSearch : /black/i,
	name : "Black ravenite dragonborn",
	trait : "Black ravenite dragonborn (+2 Strength, +1 Constitution)" + desc([
		acidBreath,
		vengefulAssaultStr
	]),
	breathDmgType : "acid"
});
AddRacialVariant("ravenite", "blue", {
	regExpSearch : /blue/i,
	name : "Blue ravenite dragonborn",
	trait : "Blue ravenite dragonborn (+2 Strength, +1 Constitution)" + desc([
		lightningBreath,
		vengefulAssaultStr
	]),
	breathDmgType : "lightning"
});
AddRacialVariant("ravenite", "brass", {
	regExpSearch : /brass/i,
	name : "Brass ravenite dragonborn",
	trait : "Brass ravenite dragonborn (+2 Strength, +1 Constitution)" + desc([
		breathWeaponDesc("fire", "line"),
		vengefulAssaultStr
	]),
	breathDmgType : "fire"
});
AddRacialVariant("ravenite", "bronze", {
	regExpSearch : /bronze/i,
	name : "Bronze ravenite dragonborn",
	trait : "Bronze ravenite dragonborn (+2 Strength, +1 Constitution)" + desc([
		lightningBreath,
		vengefulAssaultStr
	]),
	breathDmgType : "lightning"
});
AddRacialVariant("ravenite", "copper", {
	regExpSearch : /copper/i,
	name : "Copper ravenite dragonborn",
	trait : "Copper ravenite dragonborn (+2 Strength, +1 Constitution)" + desc([
		acidBreath,
		vengefulAssaultStr
	]),
	breathDmgType : "acid"
});
AddRacialVariant("ravenite", "gold", {
	regExpSearch : /gold/i,
	name : "Gold ravenite dragonborn",
	trait : "Gold ravenite dragonborn (+2 Strength, +1 Constitution)" + desc([
		coneFireBreath,
		vengefulAssaultStr
	]),
	breathDmgType : "fire"
});
AddRacialVariant("ravenite", "green", {
	regExpSearch : /green/i,
	name : "Green ravenite dragonborn",
	trait : "Green ravenite dragonborn (+2 Strength, +1 Constitution)" + desc([
		breathWeaponDesc("poison", "cone"),
		vengefulAssaultStr
	]),
	breathDmgType : "poison"
});
AddRacialVariant("ravenite", "red", {
	regExpSearch : /red/i,
	name : "Red ravenite dragonborn",
	trait : "Red ravenite dragonborn (+2 Strength, +1 Constitution)" + desc([
		coneFireBreath,
		vengefulAssaultStr
	]),
	breathDmgType : "fire"
});
AddRacialVariant("ravenite", "silver", {
	regExpSearch : /silver/i,
	name : "Silver ravenite dragonborn",
	trait : "Silver ravenite dragonborn (+2 Strength, +1 Constitution)" + desc([
		coldBreath,
		vengefulAssaultStr
	]),
	breathDmgType : "cold"
});
AddRacialVariant("ravenite", "white", {
	regExpSearch : /white/i,
	name : "White ravenite dragonborn",
	trait : "White ravenite dragonborn (+2 Strength, +1 Constitution)" + desc([
		coldBreath,
		vengefulAssaultStr
	]),
	breathDmgType : "cold"
});

// Elves
// Sea
RaceList["sea elf"] = {
	regExpSearch : /^(?!.*half)((?=.*\b(elfs?|elves|elvish|elven)\b)(?=.*\b(seas?|oceans?|water)\b)).*$/i,
	name : "Sea elf",
	sortname : "Elf, Sea",
	source : [["MToF", 62], ["UA:ES", 1], ["W", 0]],
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

// Pallid
RaceList["pallid elf"] = {
	regExpSearch : /^(?!.*half)((?=.*\b(elfs?|elves|elvish|elven)\b)(?=.*\b(pallid|pale)\b)).*$/i,
	name : "Pallid elf",
	sortname : "Elf, Pallid",
	source : [["MToF", 62], ["UA:ES", 1], ["W", 0]],
	plural : "Pallid elves",
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
	height : " range from under 5 to almost 6 feet tall (4'6\" + 2d8\")",
	weight : " weigh around 115 lb (90 + 2d8 \xD7 1d4 lb)",
	heightMetric : " range from under 1,5 to almost 1,8 metres tall (140 + 5d8 cm)",
	weightMetric : " weigh around 52 kg (40 + 5d8 \xD7 2d4 / 10 kg)",
	scores : [0, 2, 0, 0, 1, 0],
	trait : "Pallid Elf (+2 Dexterity, +1 Wisdom)" + (typePF ? "\n   " : " ") + [
		"Trance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. While meditating, I can dream after a fashion. After resting in this way, I gain the same benefit that a human does from 8 hours of sleep, thus needing only 4 hours for a long rest.",
		"Incisive Sense. I have adv. on Investigation and Insight checks.",
		"Blessing of the Moon Weaver: I know the Light cantrip. At 3rd level, I can cast the Sleep spell once per long rest. At 5th level, I can cast the Invisibility spell on myself once per long rest. Wisdom is my spellcasting ability for these spells."
	].join(typePF ? "\n   ": " "),
	spellcastingAbility : 5,
	spellcastingBonus : {
		name : "Blessing of the Moon Weaver (1)",
		spells : ["light"],
		selection : ["light"],
		firstCol : 'atwill'
	},
	features : {
		"sleep" : {
			name : "Blessing of the Moon Weaver (level 3)",
			limfeaname : "Sleep",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Blessing of the Moon Weaver (3)",
				spells : ["sleep"],
				selection : ["sleep"],
				firstCol : 'oncelr'
			}
		},
		"invisibility" : {
			name : "Blessing of the Moon Weaver (level 5)",
			limfeaname : "Invisibility",
			minlevel : 5,
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Blessing of the Moon Weaver (5)",
				spells : ["invisibility"],
				selection : ["invisibility"],
				firstCol : 'oncelr'
			}
		}
	}
};
