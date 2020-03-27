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

// Races

// Draconblood
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