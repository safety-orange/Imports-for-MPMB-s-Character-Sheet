var iFileName = "pub_20141209_DMG.js";
RequiredSheetVersion(13);
// This file adds all the player-material from the Dungeon Master's Guide to MPMB's Character Record Sheet

// Define the source
SourceList.D={
	name : "Dungeon Master's Guide",
	abbreviation : "DMG",
	group : "Primary Sources",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/dungeon-masters-guide",
	date : "2014/12/09"
};

// Races
RaceList["aasimar"] = {
	regExpSearch : /^(?!.*(fallen|protector|scourge))((?=.*aasimar)|((?=.*planetouched)(?=.*(celestial|angel)))).*$/i,
	name : "Aasimar",
	source : ["D", 286],
	plural : "Aasimar",
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
	trait : "Aasimar (+1 Wisdom, +2 Charisma)\n\nCelestial Legacy:\n   I know the Light cantrip.\n   Once I reach 3rd level, I can cast the Lesser Restoration spell once per long rest.\n   Once I reach 5th level, I can cast the Daylight spell once per long rest.\n   Charisma is my spellcasting ability for these spells.",
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Celestial Legacy (level 1)",
		spells : ["light"],
		selection : ["light"],
		firstCol : 'atwill'
	},
	features : {
		"lesser restoration" : {
			name : "Celestial Legacy (level 3)",
			limfeaname : "Lesser Restoration",
			usages : 1,
			minlevel : 3,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Celestial Legacy (level 3)",
				spells : ["lesser restoration"],
				selection : ["lesser restoration"],
				firstCol : 'oncelr'
			}
		},
		"daylight" : {
			name : "Celestial Legacy (level 5)",
			limfeaname : "Daylight",
			usages : 1,
			minlevel : 5,
			recovery : "long rest",
			spellcastingBonus : {
				name : "Celestial Legacy (level 5)",
				spells : ["daylight"],
				selection : ["daylight"],
				firstCol : 'oncelr'
			}
		}
	}
};
RaceList["eladrin"] = {
	regExpSearch : /^(?!.*half)((?=.*eladrin)|((?=.*\b(elfs?|elves|elvish|elven)\b)(?=.*\b(feys?|feywild)\b))).*$/i,
	name : "Eladrin",
	sortname : "Elf, Fey (Eladrin)",
	source : ["D", 286],
	plural : "Eladrin",
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
	weaponProfs : [false, false, ["longsword", "shortsword", "longbow", "shortbow"]],
	skills : ["Perception"],
	age : " typically claim adulthood around age 100 and can live to be 750 years old",
	height : " range from under 5 to over 6 feet tall (4'6\" + 2d12\")",
	weight : " weigh around 115 lb (90 + 2d10 \xD7 1d4 lb)",
	heightMetric : " range from under 1,5 to over 1,8 metres tall (140 + 5d12 cm)",
	weightMetric : " weigh around 55 kg (40 + 5d10 \xD7 2d4 / 10 kg)",
	scores : [0, 2, 0, 1, 0, 0],
	trait : "Eladrin (+2 Dexterity, +1 Intelligence)\nTrance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. While meditating, I can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, I gain the same benefit that a human does from 8 hours of sleep, thus needing only 4 hours for a long rest.\nFey Step: I can cast the Misty Step spell once using this trait. I regain the ability to do so when I finish a short rest.",
	spellcastingAbility : 4,
	features : {
		"fey step" : {
			name : "Fey Step",
			limfeaname : "Misty Step",
			minlevel : 1,
			usages : 1,
			recovery : "short rest",
			spellcastingBonus : {
				name : "Fey Step",
				spells : ["misty step"],
				selection : ["misty step"],
				firstCol : 'oncesr'
			}
		}
	}
};

// Subclasses
AddSubClass("cleric", "death domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(death|dead|dying)).*$/i,
	subname : "Death Domain",
	source : ["D", 96],
	spellcastingExtra : ["false life", "ray of sickness", "blindness/deafness", "ray of enfeeblement", "animate dead", "vampiric touch", "blight", "death ward", "antilife shell", "cloudkill"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Proficiency",
			source : ["D", 96],
			minlevel : 1,
			description : "\n   " + "I gain proficiency with martial weapons",
			weaponProfs : [false, true]
		},
		"subclassfeature1.1" : {
			name : "Reaper",
			source : ["D", 96],
			minlevel : 1,
			description : "\n   " + "I learn one necromancy cantrip of my choice from any spell list" + "\n   " + "My necromancy, single-target cantrips can affect two targets within 5 ft of each other",
			spellcastingBonus : {
				name : "Reaper",
				"class" : "any",
				school : ["Necro"],
				level : [0, 0]
			},
			calcChanges : {
				spellAdd : [
					function (spellKey, spellObj, spName) {
						if (spellObj.school == "Necro" && spellObj.level === 0) {
							var startDescr = spellObj.description;
							switch (spellKey) {
								case "chill touch" :
									spellObj.description = spellObj.description.replace("Spell attack", "2 crea in 5 ft spell atk").replace("Necrotic", "Necro.").replace("at CL 5, 11, and 17", "CL 5/11/17");
									break;
								case "spare the dying" :
									spellObj.description = spellObj.description.replace("1 living creature", "1 living creature (or 2 within 5 ft of each other)");
									break;
								case "toll the dead" :
								default :
									spellObj.description = spellObj.description.replace(/1 crea(ture)?/i, "2 crea in 5 ft").replace("disadvantage", "disadv.").replace("save halves", "save half");
							}
							return startDescr !== spellObj.description;
						};
					},
					"My necromancy, single-target cantrips can affect two targets within 5 ft of each other."
				]
			}
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Touch of Death",
			source : ["D", 97],
			minlevel : 2,
			description : "\n   " + "When I hit a creature with a melee attack, I can deal extra necrotic damage",
			additional : ["", "+9 damage", "+11 damage", "+13 damage", "+15 damage", "+17 damage", "+19 damage", "+21 damage", "+23 damage", "+25 damage", "+27 damage", "+29 damage", "+31 damage", "+33 damage", "+35 damage", "+37 damage", "+39 damage", "+41 damage", "+43 damage", "+45 damage"]
		},
		"subclassfeature6" : {
			name : "Inescapable Destruction",
			source : ["D", 97],
			minlevel : 6,
			description : "\n   " + "When I deal necrotic damage with spells or Channel Divinity, I ignore resistance to it"
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : ["D", 97],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
			additional : levels.map(function (n) {
				if (n < 8) return "";
				return "+" + (n < 14 ? 1 : 2) + "d8 necrotic damage";
			}),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.cleric && classes.known.cleric.level > 7 && !v.isSpell) {
							fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 necrotic damage';
						}
					},
					"Once per turn, I can have one of my weapon attacks that hit do extra necrotic damage."
				]
			}
		},
		"subclassfeature17" : {
			name : "Improved Reaper",
			source : ["D", 97],
			minlevel : 17,
			description : "\n   " + "If I cast a 5th-level or lower necromancy spell that has one target, I can target two" + "\n   " + "They need to be within 5 ft of each other; I have to provide material comp. for both",
			calcChanges : {
				spellAdd : [
					function (spellKey, spellObj, spName) {
						if (spellObj.school == "Necro" && spellObj.level && spellObj.level < 6) {
							var startDescr = spellObj.description;
							switch (spellKey) {
								case "blindness/deafness" :
									// only 2 target if not cast at higher SL
									spellObj.description = "2 crea in 5 ft or " + spellObj.description;
									break;
								case "contagion" :
								case "inflict wounds" :
								case "ray of enfeeblement" :
									spellObj.description = spellObj.description.replace(/(Melee )?spell attack/i, "2 " + "$1".toLowerCase() + "spell atk in 5 ft").replace("spell ends", "ends");
									break;
								case "cause fear-xgte" :
									spellObj.description = "2 crea in 5 ft or 1+1/SL crea max 30 ft apart (no constr/undead), save or frightened; save end of turn";
									break;
								case "feign death" :
									spellObj.description = "2 willing crea in 5 ft appear dead; Are blinded, incapacitated, dmg resist. all but Psychic, speed 0";
									break;
								case "gentle repose" :
									spellObj.description = spellObj.description.replace("1 corpse protected from", "2 corpses in 5 ft suffer no");
									break;
								case "raise dead" :
								case "revivify" :
									spellObj.description = spellObj.description.replace("a creature's body that has", "body of 2 crea in 5 ft that").replace("cons.)", "cons. \xD72)");
									spellObj.compMaterial += " (once for each target)";
									break;
								case "speak with dead" :
									spellObj.description = spellObj.description.replace("1 corpse with mouth answers 5 questions", "2 corpses in 5 ft answer 5 questions each");
									break;
								case "enervation" :
									spellObj.description = spellObj.description.replace("action", "1 a").replace("see book", "see B");
								case "bestow curse" :
								case "blight" :
								case "cause fear-uass" :
								case "life transference" :
								case "negative energy flood" :
								default :
									spellObj.description = spellObj.description.replace(/1 crea(ture)?/i, "2 crea in 5 ft").replace("disadvantage", "disadv.").replace("save halves", "save half");
							}
							return startDescr !== spellObj.description;
						};
					},
					"My necromancy, single-target 5th-level or lower spells can affect two targets within 5 ft of each other if both are within range of the spell. The spells still require material components for each target separately."
				]
			}
		}
	}
});
AddSubClass("paladin", "oathbreaker", {
	regExpSearch : /^((?=.*blackguard)|((?=.*(oath.*breaker|breaker.*oath))((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper)))))).*$/i,
	subname : "Oathbreaker",
	source : ["D", 97],
	spellcastingExtra : ["hellish rebuke", "inflict wounds", "crown of madness", "darkness", "animate dead", "bestow curse", "blight", "confusion", "contagion", "dominate person"],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Control Undead",
			source : ["D", 97],
			minlevel : 3,
			description : "\n   " + "As an action, one undead (CR < paladin level) I can see in 30 ft must make a Wis save" + "\n   " + "If failed, it must obey my commands for 24 hours or until I use this on another",
			action : ["action", ""]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Dreadful Aspect",
			source : ["D", 97],
			minlevel : 3,
			description : "\n   " + "As an action, anyone I choose within 30 ft that can see me must make a Wisdom save" + "\n   " + "If failed, it is frightened for 1 min or until it succeeds a save at the end of its turns" + "\n   " + "It can't save at the end of its turn if it's still within 30 ft of me",
			action : ["action", ""]
		},
		"subclassfeature7" : {
			name : "Aura of Hate",
			source : ["D", 97],
			minlevel : 7,
			description : "\n   " + "Fiends/undead within range and I add my Cha mod as bonus on melee weapon damage" + "\n   " + "Multiple Auras of Hate don't stack; only the strongest applies",
			additional : ["", "", "", "", "", "", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "30-foot aura", "30-foot aura", "30-foot aura"]
		},
		"subclassfeature15" : {
			name : "Supernatural Resistance",
			source : ["P", 97],
			minlevel : 15,
			description : "\n   " + "I have resistance to bludgeoning/piercing/slashing damage from nonmagical weapons",
			dmgres : [["Bludgeoning", "Bludg. (nonmagical)"], ["Piercing", "Pierc. (nonmagical)"], ["Slashing", "Slash. (nonmagical)"]]
		},
		"subclassfeature20" : {
			name : "Dread Lord",
			source : ["D", 97],
			minlevel : 20,
			description : "\n   " + "As an action, I gain a 30-ft aura of gloom that reduces bright light to dim for 1 min" + "\n   " + "If frightened of me, foes starting their turn in the aura take 4d10 psychic damage" + "\n   " + "Attacks vs. my allies and me inside the aura have disadvantage if attackers need sight" + "\n   " + "As a bonus action, I can make a melee spell attack vs. a target inside the aura" + "\n   " + "If this attack hits, it does 3d10 + Charisma modifier necrotic damage",
			recovery : "long rest",
			usages : 1,
			action : ["action", ""]
		}
	}
});

// Firearms [weapons and ammunition] (includes contributions by grungydan)
WeaponsList["pistol"] = {
	regExpSearch : /^(?=.*pistol)(?!.*automatic).*$/i,
	name : "Pistol",
	source : ["D", 268],
	list : "firearm",
	ability : 2,
	type: "Martial",
	damage : [1, 10, "piercing"],
	range : "30/90 ft",
	weight : 3,
	description : "Ammunition, loading",
	abilitytodamage : true,
	ammo : "renaissance bullet"
};
WeaponsList["musket"] = {
	regExpSearch : /musket/i,
	name : "Musket",
	source : ["D", 268],
	list : "firearm",
	ability : 2,
	type: "Martial",
	damage : [1, 12, "piercing"],
	range : "40/120 ft",
	weight : 10,
	description : "Ammunition, loading, two handed",
	abilitytodamage : true,
	ammo : "renaissance bullet"
};
WeaponsList["pistol automatic"] = {
	regExpSearch : /^(?!.*rifle)(?=.*pistol)(?=.*automatic).*$/i,
	name : "Pistol, automatic",
	source : ["D", 268],
	list : "firearm",
	ability : 2,
	type: "Martial",
	damage : [2, 6, "piercing"],
	range : "50/150 ft",
	weight : 3,
	description : "Ammunition, reload (15 shots)",
	abilitytodamage : true,
	ammo : "modern bullet"
};
WeaponsList["revolver"] = {
	regExpSearch : /revolver/i,
	name : "Revolver",
	source : ["D", 268],
	list : "firearm",
	ability : 2,
	type: "Martial",
	damage : [2, 8, "piercing"],
	range : "40/120 ft",
	weight : 3,
	description : "Ammunition, reload (6 shots)",
	abilitytodamage : true,
	ammo : "modern bullet"
};
WeaponsList["rifle hunting"] = {
	regExpSearch : /^(?!=laser|antimatter)(?=.*hunting)(?=.*rifle).*$/i,
	name : "Hunting Rifle",
	source : ["D", 268],
	list : "firearm",
	ability : 2,
	type: "Martial",
	damage : [2, 10, "piercing"],
	range : "80/240 ft",
	weight : 8,
	description : "Ammunition, reload (5 shots), two handed",
	abilitytodamage : true,
	ammo : "modern bullet"
};
WeaponsList["rifle automatic"] = {
	regExpSearch : /^(?!=.*laser|antimatter)(?=.*automatic)(?=.*rifle).*$/i,
	name : "Automatic Rifle",
	source : ["D", 268],
	list : "firearm",
	ability : 2,
	type: "Martial",
	damage : [2, 8, "piercing"],
	range : "80/240 ft",
	weight : 8,
	description : "Ammunition, burst fire, reload (30 shots), two handed",
	abilitytodamage : true,
	ammo : "modern bullet"
};
WeaponsList["shotgun"] = {
	regExpSearch : /shotgun/i,
	name : "Shotgun",
	source : ["D", 268],
	list : "firearm",
	ability : 2,
	type: "Martial",
	damage : [2, 8, "piercing"],
	range : "30/90 ft",
	weight : 7,
	description : "Ammunition, reload (2 shots), two handed",
	abilitytodamage : true,
	ammo : "modern bullet"
};
WeaponsList["laser pistol"] = {
	regExpSearch : /^(?=.*laser)(?=.*pistol).*$/i,
	name : "Laser Pistol",
	source : ["D", 268],
	list : "firearm",
	ability : 2,
	type: "Martial",
	damage : [3, 6, "radiant"],
	range : "40/120 ft",
	weight : 2,
	description : "Ammunition, reload (50 shots), two handed",
	abilitytodamage : true,
	ammo : "energy cell"
};
WeaponsList["antimatter rifle"] = {
	regExpSearch : /^(?!.*laser)(?=.*antimatter)(?=.*rifle).*$/i,
	name : "Antimatter Rifle",
	source : ["D", 268],
	list : "firearm",
	ability : 2,
	type: "Martial",
	damage : [6, 8, "necrotic"],
	range : "120/360 ft",
	weight : 10,
	description : "Ammunition, reload (2 shots), two handed",
	abilitytodamage : true,
	ammo : "energy cell"
};
WeaponsList["laser rifle"] = {
	regExpSearch : /^(?!.*antimatter)(?=.*laser)(?=.*rifle).*$/i,
	name : "Laser Rifle",
	source : ["D", 268],
	list : "firearm",
	ability : 2,
	type: "Martial",
	damage : [3, 8, "radiant"],
	range : "100/300 ft",
	weight : 7,
	description : "Ammunition, reload (30 shots), two handed",
	abilitytodamage : true,
	ammo : "energy cell"
};
AmmoList["renaissance bullet"] = {
	name : "Bullets, Renaissance",
	source : ["D", 268],
	weight : 0.2,
	icon : "Bullets",
	checks : [".Bullet"],
	display : 50,
	invName : "Bullets, renaissance",
	alternatives : [/^(?=.*bullet)(?=.*renaissance).*$/i]
};
AmmoList["modern bullet"] = {
	name : "Bullets, Modern",
	source : ["D", 268],
	weight : 0.1,
	icon : "Bullets",
	checks : [".Bullet"],
	display : 50,
	invName : "Bullets, modern",
	alternatives : [/^(?=.*bullet)(?=.*modern).*$/i]
};
AmmoList["energy cell"] = {
	name : "Energy Cell",
	source : ["D", 268],
	weight : 0,
	icon : "Bullets",
	checks : [".Bullet"],
	display : 50,
	invName : "Energy Cell"
};

// Magic Items not found in the SRD
MagicItemsList["alchemy jug"] = {
	name : "Alchemy Jug",
	source : [["D", 150]],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "B",
	description : "As an action, command the jug to produce liquid; or an action to uncorked it and pour 2 gal/min. After producing, it only makes the same up to its max, until next dawn. Oil (1 qt), acid (8 fl oz), basic poison (1/2 fl oz), beer (4 gal), honey/wine (1 gal), fresh water (8 gal), mayonnaise/vinegar (2 gal), salt water (12 gal).",
	weight : 12,
	descriptionLong : "A heavy ceramic jug. As an action, the jug can be commanded to hold a chosen liquid. With another action, I can uncork the jug and pour the liquid out at 2 gallons per minute. Once commanded to produce a liquid, it can't produce a different one or more than the maximum of one, until the next dawn.\rLiquids (with maximum): acid (8 fl. oz.), basic poison (1/2 fl. oz.), beer (4 gallons), honey (1 gallon), mayonnaise (2 gallons), oil (1 quart), vinegar (2 gallons), fresh water (8 gallons), salt water (12 gallons), wine (1 gallon).",
	descriptionFull : "This ceramic jug appears to be able to hold a gallon of liquid and weighs 12 pounds whether full or empty. Sloshing sounds can be heard from within the jug when it is shaken, even if the jug is empty." + "\n   " + "You can use an action and name one liquid from the table below to cause the jug to produce the chosen liquid. Afterward, you can uncork the jug as an action and pour that liquid out, up to 2 gallons per minute. The maximum amount of liquid the jug can produce depends on the liquid you named." + "\n   " + "Once the jug starts producing a liquid, it can't produce a different one, or more of one that has reached its maximum, until the next dawn.\n\n" + toUni("Max\tLiquid\t\tMax\tLiquid") + "\n8 ounces\tAcid\t\t1 quart\tOil\n1/2 ounce\tBasic poison\t2 gallons\tVinegar\n4 gallons\tBeer\t\t8 gallons\tWater, fresh\n1 gallon\tHoney\t\t12 gallons\tWater, salt\n2 gallons\tMayonnaise\t1 gallon\tWine"
}
MagicItemsList["sword of vengeance"] = {
	name : "Sword of Vengeance",
	nameTest : "of Vengeance",
	source : [["D", 206]],
	type : "weapon (any sword)",
	rarity : "uncommon",
	magicItemTable : "F",
	attunement : true,
	description : "This sword gives +1 to hit and damage and is cursed. I can't part with this sword and have disadv. on attacks with other weapons. If I take damage in combat, I must make a DC 15 Wis save or I will attack the attacker until it drops to 0 HP or I can't attack it in melee anymore.",
	descriptionFull : "You gain a +1 bonus to attack and damage rolls made with this magic weapon.\n   " + toUni("Curse") + ". This sword is cursed and possessed by a vengeful spirit. Becoming attuned to it extends the curse to you. As long as you remain cursed, you are unwilling to part with the sword, keeping it on your person at all times. While attuned to this weapon, you have disadvantage on attack rolls made with weapons other than this one.\n   In addition, while the sword is on your person, you must succeed on a DC 15 Wisdom saving throw whenever you take damage in combat. On a failed save you must attack the creature that damaged you until you drop to 0 hit points or it does, or until you can't reach the creature to make a melee attack against it.\n   You can break the curse in the usual ways. Alternatively, casting banishment on the sword forces the vengeful spirit to leave it. The sword then becomes a +1 weapon with no other properties.",
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "prefix",
		descriptionChange : ["replace", "sword"],
		excludeCheck : function (inObjKey, inObj) {
			var testRegex = /sword|scimitar|rapier/i;
			return !(testRegex).test(inObjKey) && (!inObj.baseWeapon || !(testRegex).test(inObj.baseWeapon));
		}
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/of vengeance/i).test(v.WeaponText)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'Cursed';
				}
			},
			'If I include the words "of Vengeance" in a the name of a sword, it will be treated as the magic weapon Sword of Vengeance. It has +1 to hit and damage, but also bears a curse.'
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.isMeleeWeapon && (/sword|scimitar|rapier/i).test(v.baseWeaponName) && (/of vengeance/i).test(v.WeaponText)) {
					output.magic = v.thisWeapon[1] + 1;
				}
			}, ''
		]
	}
}
