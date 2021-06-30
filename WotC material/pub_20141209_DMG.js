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
								case "cause fear" :
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
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Control Undead",
			source : ["D", 97],
			minlevel : 3,
			description : "\n   " + "As an action, one undead (CR < paladin level) I can see in 30 ft must make a Wis save" + "\n   " + "If failed, it must obey my commands for 24 hours or until I use this on another",
			action : ["action", ""],
			spellcastingExtra : ["hellish rebuke", "inflict wounds", "crown of madness", "darkness", "animate dead", "bestow curse", "blight", "confusion", "contagion", "dominate person"]
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
			additional : ["", "", "", "", "", "", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "30-foot aura", "30-foot aura", "30-foot aura"],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.isMeleeWeapon) {
							fields.Description += (fields.Description ? '; ' : '') + 'Cha mod added to damage';
						}
					},
					"I add my Charisma modifier to my melee weapon damage."
				],
				atkCalc : [
					function (fields, v, output) {
						if (v.isMeleeWeapon) {
							output.extraDmg += Number(What("Cha Mod"));
						};
					}
				]
			}
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
	type : "Martial",
	damage : [1, 10, "piercing"],
	range : "30/90 ft",
	weight : 3,
	description : "Ammunition, loading",
	abilitytodamage : true,
	ammo : "renaissance bullet",
	defaultExcluded : true
};
WeaponsList["musket"] = {
	regExpSearch : /musket/i,
	name : "Musket",
	source : ["D", 268],
	list : "firearm",
	ability : 2,
	type : "Martial",
	damage : [1, 12, "piercing"],
	range : "40/120 ft",
	weight : 10,
	description : "Ammunition, loading, two handed",
	abilitytodamage : true,
	ammo : "renaissance bullet",
	defaultExcluded : true
};
WeaponsList["pistol automatic"] = {
	regExpSearch : /^(?!.*rifle)(?=.*pistol)(?=.*automatic).*$/i,
	name : "Pistol, automatic",
	source : ["D", 268],
	list : "firearm",
	ability : 2,
	type : "Martial",
	damage : [2, 6, "piercing"],
	range : "50/150 ft",
	weight : 3,
	description : "Ammunition, reload (15 shots)",
	abilitytodamage : true,
	ammo : "modern bullet",
	defaultExcluded : true
};
WeaponsList["revolver"] = {
	regExpSearch : /revolver/i,
	name : "Revolver",
	source : ["D", 268],
	list : "firearm",
	ability : 2,
	type : "Martial",
	damage : [2, 8, "piercing"],
	range : "40/120 ft",
	weight : 3,
	description : "Ammunition, reload (6 shots)",
	abilitytodamage : true,
	ammo : "modern bullet",
	defaultExcluded : true
};
WeaponsList["rifle hunting"] = {
	regExpSearch : /^(?!=laser|antimatter)(?=.*hunting)(?=.*rifle).*$/i,
	name : "Hunting Rifle",
	source : ["D", 268],
	list : "firearm",
	ability : 2,
	type : "Martial",
	damage : [2, 10, "piercing"],
	range : "80/240 ft",
	weight : 8,
	description : "Ammunition, reload (5 shots), two handed",
	abilitytodamage : true,
	ammo : "modern bullet",
	defaultExcluded : true
};
WeaponsList["rifle automatic"] = {
	regExpSearch : /^(?!=.*laser|antimatter)(?=.*automatic)(?=.*rifle).*$/i,
	name : "Automatic Rifle",
	source : ["D", 268],
	list : "firearm",
	ability : 2,
	type : "Martial",
	damage : [2, 8, "piercing"],
	range : "80/240 ft",
	weight : 8,
	description : "Ammunition, burst fire, reload (30 shots), two handed",
	abilitytodamage : true,
	ammo : "modern bullet",
	defaultExcluded : true
};
WeaponsList["shotgun"] = {
	regExpSearch : /shotgun/i,
	name : "Shotgun",
	source : ["D", 268],
	list : "firearm",
	ability : 2,
	type : "Martial",
	damage : [2, 8, "piercing"],
	range : "30/90 ft",
	weight : 7,
	description : "Ammunition, reload (2 shots), two handed",
	abilitytodamage : true,
	ammo : "modern bullet",
	defaultExcluded : true
};
WeaponsList["laser pistol"] = {
	regExpSearch : /^(?=.*laser)(?=.*pistol).*$/i,
	name : "Laser Pistol",
	source : ["D", 268],
	list : "firearm",
	ability : 2,
	type : "Martial",
	damage : [3, 6, "radiant"],
	range : "40/120 ft",
	weight : 2,
	description : "Ammunition, reload (50 shots), two handed",
	abilitytodamage : true,
	ammo : "energy cell",
	defaultExcluded : true
};
WeaponsList["antimatter rifle"] = {
	regExpSearch : /^(?!.*laser)(?=.*antimatter)(?=.*rifle).*$/i,
	name : "Antimatter Rifle",
	source : ["D", 268],
	list : "firearm",
	ability : 2,
	type : "Martial",
	damage : [6, 8, "necrotic"],
	range : "120/360 ft",
	weight : 10,
	description : "Ammunition, reload (2 shots), two handed",
	abilitytodamage : true,
	ammo : "energy cell",
	defaultExcluded : true
};
WeaponsList["laser rifle"] = {
	regExpSearch : /^(?!.*antimatter)(?=.*laser)(?=.*rifle).*$/i,
	name : "Laser Rifle",
	source : ["D", 268],
	list : "firearm",
	ability : 2,
	type : "Martial",
	damage : [3, 8, "radiant"],
	range : "100/300 ft",
	weight : 7,
	description : "Ammunition, reload (30 shots), two handed",
	abilitytodamage : true,
	ammo : "energy cell",
	defaultExcluded : true
};
AmmoList["renaissance bullet"] = {
	name : "Bullets, Renaissance",
	source : ["D", 268],
	weight : 0.2,
	icon : "Bullets",
	checks : [".Bullet"],
	display : 50,
	invName : "Bullets, renaissance",
	alternatives : [/^(?=.*bullet)(?=.*renaissance).*$/i],
	defaultExcluded : true
};
AmmoList["modern bullet"] = {
	name : "Bullets, Modern",
	source : ["D", 268],
	weight : 0.1,
	icon : "Bullets",
	checks : [".Bullet"],
	display : 50,
	invName : "Bullets, modern",
	alternatives : [/^(?=.*bullet)(?=.*modern).*$/i],
	defaultExcluded : true
};
AmmoList["energy cell"] = {
	name : "Energy Cell",
	source : ["D", 268],
	weight : 0,
	icon : "Bullets",
	checks : [".Bullet"],
	display : 50,
	invName : "Energy Cell",
	defaultExcluded : true
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
	descriptionFull : "This ceramic jug appears to be able to hold a gallon of liquid and weighs 12 pounds whether full or empty. Sloshing sounds can be heard from within the jug when it is shaken, even if the jug is empty." + "\n   " + "You can use an action and name one liquid from the table below to cause the jug to produce the chosen liquid. Afterward, you can uncork the jug as an action and pour that liquid out, up to 2 gallons per minute. The maximum amount of liquid the jug can produce depends on the liquid you named." + "\n   " + "Once the jug starts producing a liquid, it can't produce a different one, or more of one that has reached its maximum, until the next dawn.\n\n" + toUni("Max        \tLiquid\t\tMax        \tLiquid") + "\n8 ounces  \tAcid\t\t1 quart   \tOil\n1/2 ounce\tBasic poison\t2 gallons  \tVinegar\n4 gallons  \tBeer\t\t8 gallons  \tWater, fresh\n1 gallon    \tHoney\t\t12 gallons\tWater, salt\n2 gallons \tMayonnaise\t1 gallon    \tWine"
}
MagicItemsList["cap of water breathing"] = {
	name : "Cap of Water Breathing",
	source : ["D", 157],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "B",
	description : "While wearing this cap underwater, I can speak its command word as an action to create a bubble of air around my head. It allows me to breathe normally underwater. This bubble stays with me until I speak the command word again, the cap is removed, or I am no longer underwater.",
	descriptionFull : "While wearing this cap underwater, you can speak its command word as an action to create a bubble of air around your head. It allows you to breathe normally underwater. This bubble stays with you until you speak the command word again, the cap is removed, or you are no longer underwater.",
	action : [["action", ""]]
}
MagicItemsList["cloak of invisibility"] = {
	name : "Cloak of Invisibility",
	source : ["D", 158],
	type : "wondrous item",
	rarity : "legendary",
	magicItemTable : "I",
	description : "As an action, I can pull the hood of this cloak down or up over my head, making myself invisible (down) or visible again (up). While invisible, anything I carry or wear is invisible as well. It functions for 2 hours, usable in increments of 1 minute. It regains 1 hour of duration for every 12 hours not being used.",
	descriptionFull : "While wearing this cloak, you can pull its hood over your head to cause yourself to become invisible. While you are invisible, anything you are carrying or wearing is invisible with you. You become visible when you cease wearing the hood. Pulling the hood up or down requires an action.\n   Deduct the time you are invisible, in increments of 1 minute, from the cloak's maximum duration of 2 hours. After 2 hours of use, the cloak ceases to function. For every uninterrupted period of 12 hours the cloak goes unused, it regains 1 hour of duration.",
	attunement : true,
	action : [["action", " (hood up/down)"]],
	usages : "120 min",
	recovery : "Special",
	additional : "regain 1h/12h"
}
MagicItemsList["driftglobe"] = {
	name : "Driftglobe",
	source : ["D", 166],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : ["A", "B"],
	description : "By speaking its command word while within 60 ft, this glass sphere casts Light or Daylight on itself. Daylight only works once per dawn. While lit up, I can use an action to speak another command word to make it hover 5 ft off the ground and follow me at a distance of 60 ft. It stops hovering when grasped.",
	descriptionFull : "This small sphere of thick glass weighs 1 pound. If you are within 60 feet of it, you can speak its command word and cause it to emanate the Light or Daylight spell. Once used, the Daylight effect can't be used again until the next dawn.\n   You can speak another command word as an action to make the illuminated globe rise into the air and float no more than 5 feet off the ground. The globe hovers in this way until you or another creature grasps it. If you move more than 60 feet from the hovering globe, it follows you until it is within 60 feet of you. It takes the shortest route to do so. If prevented from moving, the globe sinks gently to the ground and becomes inactive, and its light winks out.",
	weight : 1,
	action : [["action", " (hover)"]],
	usages : 1,
	recovery : "dawn",
	additional : "Daylight",
	spellcastingBonus : [{
		name : "On globe",
		spells : ["light"],
		selection : ["light"],
		firstCol : "atwill"
	}, {
		name : "On globe",
		spells : ["daylight"],
		selection : ["daylight"],
		firstCol : "oncelr"
	}],
	spellChanges : {
		"light" : {
			range : "Globe",
			description : "Driftglobe sheds bright light in a 20-ft radius and dim light in an additional 20-ft radius",
			changes : "The spell can only affect the globe."
		},
		"daylight" : {
			range : "Globe",
			description : "Driftglobe shed 60-ft rad bright light + 60-ft dim light; only magical darkness of SL 4+ works in it",
			changes : "The spell can only affect the globe."
		}
	}
}
MagicItemsList["efreeti chain"] = {
	name : "Efreeti Chain",
	source : ["D", 167],
	type : "armor (chain mail)",
	rarity : "legendary",
	magicItemTable : "I",
	description : "While wearing this armor, I gain a +3 bonus to AC, I am immune to fire damage, and I can understand and speak Primordial. In addition, I can stand on and walk across molten rock as if it were solid ground.",
	descriptionFull : "While wearing this armor, you gain a +3 bonus to AC, you are immune to fire damage, and you can understand and speak Primordial. In addition, you can stand on and walk across molten rock as if it were solid ground.",
	attunement : true,
	weight : 55,
	languageProfs : ["Primordial"],
	savetxt : { immune : ["fire"] },
	armorAdd : "Efreeti Chain",
	armorOptions : [{
		regExpSearch : /^(?=.*efreeti)(?=.*chain).*$/i,
		name : "Efreeti Chain",
		source: ["D", 167],
		type : "heavy",
		ac : 19,
		stealthdis : true,
		weight : 55,
		strReq : 13
	}]
}
MagicItemsList["elixir of health"] = {
	name : "Elixir of Health",
	source : ["D", 168],
	type : "potion",
	rarity : "rare",
	magicItemTable : "C",
	description : "Once as an action, I can drink this potion or administer it to another to cure any disease, and removing the blinded, deafened, paralyzed, and poisoned conditions. The potion's clear red liquid has tiny bubbles of light in it.",
	descriptionFull : "When you drink this potion, it cures any disease afflicting you, and it removes the blinded, deafened, paralyzed, and poisoned conditions. The clear red liquid has tiny bubbles of light in it.",
	weight : 0.5
}
MagicItemsList["gloves of thievery"] = {
	name : "Gloves of Thievery",
	source : ["D", 172],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "F",
	description : "These gloves are invisible while worn. While wearing them, I gain a +5 bonus to Dexterity (Sleight of Hand) checks and Dexterity checks made to pick locks.",
	descriptionFull : "These gloves are invisible while worn. While wearing them, you gain a +5 bonus to Dexterity (Sleight of Hand) checks and Dexterity checks made to pick locks.",
	addMod : [{ type: "skill", field : "Sleight of Hand", mod : 5, text : "I gain a +5 bonus to Dexterity (Sleight of Hand) checks while wearing Gloves of Thievery." }]
}
MagicItemsList["instrument of the bards"] = {
	name : "Instrument of the Bards",
	source : ["D", 176],
	type : "wondrous item",
	description : "If I play this exquisite, magical instruments while casting a spell that has a somatic or material component and charms on a failed save, it imposes disadvantage on that save. I can also use it to cast a set of spells, each once per dawn, using my spellcasting ability and spell save DC.",
	descriptionFull : "An instrument of the bards is an exquisite example of its kind, superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a legendary bard college. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 psychic damage.\n   You can use an action to play the instrument and cast one of its spells. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.\n   You can play the instrument while casting a spell that causes any of its targets to be charmed on a failed saving throw, thereby imposing disadvantage on the save. This effect applies only if the spell has a somatic or a material component.\n   All instruments of the bards can be used to cast the following spells: Fly, Invisibility, Levitate, and Protection from Evil and Good.",
	attunement : true,
	weight : 3, // Magic of Faerûn (2001) page 161
	prerequisite : "Requires attunement by a bard",
	prereqeval : function(v) { return classes.known.bard ? true : false; },
	choices : ["Anstruth Harp (very rare)", "Canaith Mandolin (rare)", "Cli Lyre (rare)", "Doss Lute (uncommon)", "Fochlucan Bandore (uncommon)", "Mac-Fuirmidh Cittern (uncommon)", "Ollamh Harp (legendary)"],
	"anstruth harp (very rare)" : {
		name : "Anstruth Harp [Instrument of the Bards]",
		rarity : "very rare",
		magicItemTable : "H",
		descriptionFull : "An instrument of the bards is an exquisite example of its kind, superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a legendary bard college. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 psychic damage.\n   You can use an action to play the instrument and cast one of its spells. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.\n   You can play the instrument while casting a spell that causes any of its targets to be charmed on a failed saving throw, thereby imposing disadvantage on the save. This effect applies only if the spell has a somatic or a material component.\n   All instruments of the bards can be used to cast the following spells: Fly, Invisibility, Levitate, and Protection from Evil and Good.\n   In addition, the Anstruth harp can be used to cast Control Weather, Cure Wounds (5th level), and Wall of Thorns.",
		spellcastingBonus : {
			name : "Once per long rest",
			spells : ["fly", "invisibility", "levitate", "protection from evil and good", "control weather", "cure wounds", "wall of thorns"],
			selection : ["fly", "invisibility", "levitate", "protection from evil and good", "control weather", "cure wounds", "wall of thorns"],
			firstCol : "oncelr",
			times : 7,
			spellcastingAbility : "class"
		},
		spellChanges : {
			"cure wounds" : {
				description : "1 living creature heals 5d8+spellcasting ability modifier HP",
				changes : "When using the Anstruth Harp to cast Cure Wounds, it is cast at 5th-level."
			},
			spellChanges : {
				"control weather" : {
					time : "1 a",
					changes : "Casting time is only an action."
				}
			}
		}
	},
	"canaith mandolin (rare)" : {
		name : "Canaith Mandolin [Instrument of the Bards]",
		rarity : "rare",
		magicItemTable : "G",
		descriptionFull : "An instrument of the bards is an exquisite example of its kind, superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a legendary bard college. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 psychic damage.\n   You can use an action to play the instrument and cast one of its spells. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.\n   You can play the instrument while casting a spell that causes any of its targets to be charmed on a failed saving throw, thereby imposing disadvantage on the save. This effect applies only if the spell has a somatic or a material component.\n   All instruments of the bards can be used to cast the following spells: Fly, Invisibility, Levitate, and Protection from Evil and Good.\n   In addition, the Canaith mandolin can be used to cast Cure Wounds (3rd level), Dispel Magic, and Protection from Energy (lightning only).",
		spellcastingBonus : {
			name : "Once per long rest",
			spells : ["fly", "invisibility", "levitate", "protection from evil and good", "cure wounds", "dispel magic", "protection from energy"],
			selection : ["fly", "invisibility", "levitate", "protection from evil and good", "cure wounds", "dispel magic", "protection from energy"],
			firstCol : "oncelr",
			times : 7,
			spellcastingAbility : "class"
		},
		spellChanges : {
			"cure wounds" : {
				description : "1 living creature heals 3d8+spellcasting ability modifier HP",
				changes : "When using the Canaith Mandolin to cast Cure Wounds, it is cast at 3rd-level."
			},
			"protection from energy" : {
				description : "1 creature gains resistance to Lightning damage for the duration",
				changes : "When using the Canaith Mandolin to cast Protection from Energy, it can only grant resistance to lightning damage."
			}
		}
	},
	"cli lyre (rare)" : {
		name : "Cli Lyre [Instrument of the Bards]",
		rarity : "rare",
		magicItemTable : "G",
		descriptionFull : "An instrument of the bards is an exquisite example of its kind, superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a legendary bard college. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 psychic damage.\n   You can use an action to play the instrument and cast one of its spells. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.\n   You can play the instrument while casting a spell that causes any of its targets to be charmed on a failed saving throw, thereby imposing disadvantage on the save. This effect applies only if the spell has a somatic or a material component.\n   All instruments of the bards can be used to cast the following spells: Fly, Invisibility, Levitate, and Protection from Evil and Good.\n   In addition, the Cli lyre can be used to cast Stone Shape, Wall of Fire, and Wind Wall.",
		spellcastingBonus : {
			name : "Once per long rest",
			spells : ["fly", "invisibility", "levitate", "protection from evil and good", "stone shape", "wall of fire", "wind wall"],
			selection : ["fly", "invisibility", "levitate", "protection from evil and good", "stone shape", "wall of fire", "wind wall"],
			firstCol : "oncelr",
			times : 7,
			spellcastingAbility : "class"
		}
	},
	"doss lute (uncommon)" : {
		name : "Doss Lute [Instrument of the Bards]",
		rarity : "uncommon",
		magicItemTable : "F",
		descriptionFull : "An instrument of the bards is an exquisite example of its kind, superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a legendary bard college. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 psychic damage.\n   You can use an action to play the instrument and cast one of its spells. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.\n   You can play the instrument while casting a spell that causes any of its targets to be charmed on a failed saving throw, thereby imposing disadvantage on the save. This effect applies only if the spell has a somatic or a material component.\n   All instruments of the bards can be used to cast the following spells: Fly, Invisibility, Levitate, and Protection from Evil and Good.\n   In addition, the Doss lute can be used to cast Animal Friendship, Protection from Energy (fire only), and Protection from Poison.",
		spellcastingBonus : {
			name : "Once per long rest",
			spells : ["fly", "invisibility", "levitate", "protection from evil and good", "animal friendship", "protection from energy", "protection from poison"],
			selection : ["fly", "invisibility", "levitate", "protection from evil and good", "animal friendship", "protection from energy", "protection from poison"],
			firstCol : "oncelr",
			times : 7,
			spellcastingAbility : "class"
		},
		spellChanges : {
			"protection from energy" : {
				description : "1 creature gains resistance to Fire damage for the duration",
				changes : "When using the Doss Lute to cast Protection from Energy, it can only grant resistance to fire damage."
			}
		}
	},
	"fochlucan bandore (uncommon)" : {
		name : "Fochlucan Bandore [Instrument of the Bards]",
		rarity : "uncommon",
		magicItemTable : "F",
		descriptionFull : "An instrument of the bards is an exquisite example of its kind, superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a legendary bard college. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 psychic damage.\n   You can use an action to play the instrument and cast one of its spells. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.\n   You can play the instrument while casting a spell that causes any of its targets to be charmed on a failed saving throw, thereby imposing disadvantage on the save. This effect applies only if the spell has a somatic or a material component.\n   All instruments of the bards can be used to cast the following spells: Fly, Invisibility, Levitate, and Protection from Evil and Good.\n   In addition, the Fochlucan bandore can be used to cast Entangle, Faerie Fire, Shillelagh, and Speak with Animals.",
		spellcastingBonus : {
			name : "Once per long rest",
			spells : ["fly", "invisibility", "levitate", "protection from evil and good", "entangle", "faerie fire", "shillelagh", "speak with animals"],
			selection : ["fly", "invisibility", "levitate", "protection from evil and good", "entangle", "faerie fire", "shillelagh", "speak with animals"],
			firstCol : "oncelr",
			times : 8,
			spellcastingAbility : "class"
		}
	},
	"mac-fuirmidh cittern (uncommon)" : {
		name : "Mac-Fuirmidh Cittern [Instrument of the Bards]",
		rarity : "uncommon",
		magicItemTable : "F",
		descriptionFull : "An instrument of the bards is an exquisite example of its kind, superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a legendary bard college. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 psychic damage.\n   You can use an action to play the instrument and cast one of its spells. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.\n   You can play the instrument while casting a spell that causes any of its targets to be charmed on a failed saving throw, thereby imposing disadvantage on the save. This effect applies only if the spell has a somatic or a material component.\n   All instruments of the bards can be used to cast the following spells: Fly, Invisibility, Levitate, and Protection from Evil and Good.\n   In addition, the Mac-Fuirmidh cittern can be used to cast Barkskin, Cure Wounds, and Fog Cloud.",
		spellcastingBonus : {
			name : "Once per long rest",
			spells : ["fly", "invisibility", "levitate", "protection from evil and good", "barkskin", "cure wounds", "fog cloud"],
			selection : ["fly", "invisibility", "levitate", "protection from evil and good", "barkskin", "cure wounds", "fog cloud"],
			firstCol : "oncelr",
			times : 7,
			spellcastingAbility : "class"
		}
	},
	"ollamh harp (legendary)" : {
		name : "Ollamh Harp [Instrument of the Bards]",
		rarity : "legendary",
		magicItemTable : "I",
		descriptionFull : "An instrument of the bards is an exquisite example of its kind, superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a legendary bard college. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 psychic damage.\n   You can use an action to play the instrument and cast one of its spells. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.\n   You can play the instrument while casting a spell that causes any of its targets to be charmed on a failed saving throw, thereby imposing disadvantage on the save. This effect applies only if the spell has a somatic or a material component.\n   All instruments of the bards can be used to cast the following spells: Fly, Invisibility, Levitate, and Protection from Evil and Good.\n   In addition, the Ollamh harp can be used to cast Confusion, Control Weather, and Fire Storm.",
		spellcastingBonus : {
			name : "Once per long rest",
			spells : ["fly", "invisibility", "levitate", "protection from evil and good", "confusion", "control weather", "fire storm"],
			selection : ["fly", "invisibility", "levitate", "protection from evil and good", "confusion", "control weather", "fire storm"],
			firstCol : "oncelr",
			times : 7,
			spellcastingAbility : "class"
		},
		spellChanges : {
			"control weather" : {
				time : "1 a",
				changes : "Casting time is only an action."
			}
		}
	}
}
MagicItemsList["mariner's armor"] = {
	name : "Mariner's Armor",
	nameTest : "Mariner's",
	source : ["D", 188],
	type : "armor (light, medium, or heavy)",
	rarity : "uncommon",
	magicItemTable : "B",
	description : "While wearing this armor, I have a swimming speed equal to my walking speed. In addition, whenever I start my turn underwater with 0 hit points, the armor causes me to rise 60 ft toward the surface. The armor is decorated with fish and shell motifs.",
	descriptionFull : "While wearing this armor, you have a swimming speed equal to your walking speed. In addition, whenever you start your turn underwater with 0 hit points, the armor causes you to rise 60 feet toward the surface. The armor is decorated with fish and shell motifs.",
	allowDuplicates : true,
	chooseGear : {
		type : "armor",
		prefixOrSuffix : "suffix",
		descriptionChange : ["prefix", "armor"]
	},
	speed : { swim : { spd : "walk", enc : "walk" } }
}
MagicItemsList["potion of fire breath"] = {
	name : "Potion of Fire Breath",
	source : ["D", 187],
	type : "potion",
	rarity : "uncommon",
	magicItemTable : "B",
	description : "Once as an action, I can drink this potion or administer it to another to, for 1 hour, use a bonus action to do 4d6 fire damage at a target within 30 ft, Dex save DC 13 halves. This can be done 3 times. This potion's orange liquid flickers, and smoke fills the top of the container and wafts out whenever it is opened.",
	descriptionFull : "After drinking this potion, you can use a bonus action to exhale fire at a target within 30 feet of you. The target must make a DC 13 Dexterity saving throw, taking 4d6 fire damage on a failed save, or half as much damage on a successful one. The effect ends after you exhale the fire three times or when 1 hour has passed. This potion's orange liquid flickers, and smoke fills the top of the container and wafts out whenever it is opened.",
	weight : 0.5
}
MagicItemsList["potion of invulnerability"] = {
	name : "Potion of Invulnerability",
	source : ["D", 188],
	type : "potion",
	rarity : "rare",
	magicItemTable : "C",
	description : "Once as an action, I can drink this potion or administer it to another to have resistance to all damage for 1 minute. The potion's syrupy liquid looks like liquefied iron.",
	descriptionFull : "For 1 minute after you drink this potion, you have resistance to all damage. The potion's syrupy liquid looks like liquefied iron.",
	weight : 0.5
}
MagicItemsList["potion of longevity"] = {
	name : "Potion of Longevity",
	source : ["D", 188],
	type : "potion",
	rarity : "very rare",
	magicItemTable : "D",
	description : "Once as an action, I can drink this potion or administer it to another to reduce the consumer's physical age is by 1d6+6 years, to a minimum of 13 years. Subsequent consumptions of this type of potion have a 10% cumulative chance to instead age the consumer by 1d6+6 years.",
	descriptionLong : "Once as an action, I can drink this potion or administer it to another to reduce the consumer's physical age is by 1d6+6 years, to a minimum of 13 years. Subsequent consumptions of this type of potion have a 10% cumulative chance to instead age the consumer by 1d6+6 years. Suspended in this amber liquid are a scorpion's tail, an adder's fang, a dead spider, and a tiny heart that, against all reason, is still beating. These ingredients vanish when the potion is opened.",
	descriptionFull : "When you drink this potion, your physical age is reduced by 1d6+6 years, to a minimum of 13 years. Each time you subsequently drink a potion of longevity, there is 10 percent cumulative chance that you instead age by 1d6+6 years. Suspended in this amber liquid are a scorpion's tail, an adder's fang, a dead spider, and a tiny heart that, against all reason, is still beating. These ingredients vanish when the potion is opened.",
	weight : 0.5
}
MagicItemsList["potion of vitality"] = {
	name : "Potion of Vitality",
	source : ["D", 188],
	type : "potion",
	rarity : "very rare",
	magicItemTable : "D",
	description : "Once as an action, I can drink this potion or administer it to another to remove any exhaustion, disease, and poison affecting the consumer. For the next 24 hours, the consumer regains the maximum number of HP for any HD used. The potion's crimson liquid regularly pulses with dull light, calling to mind a heartbeat.",
	descriptionFull : "When you drink this potion, it removes any exhaustion you are suffering and cures any disease or poison affecting you. For the next 24 hours, you regain the maximum number of hit points for any Hit Die you spend. The potion's crimson liquid regularly pulses with dull light, calling to mind a heartbeat.",
	weight : 0.5
}
MagicItemsList["rod of resurrection"] = {
	name : "Rod of Resurrection",
	source : ["D", 197],
	type : "rod",
	rarity : "legendary",
	magicItemTable : "I",
	description : "This rod has 5 charges and regains 1 expended charge daily at dawn. While I hold it, I can use an action to expend 1 charge and cast Heal from it, or expend 5 charges and cast Resurrection from it. If the rod is reduced to 0 charges, roll a d20. On a 1, the rod disappears in a burst of radiance.",
	descriptionFull : "The rod has 5 charges. While you hold it, you can use an action to cast one of the following spells from it: Heal (expends 1 charge) or Resurrection (expends 5 charges).\n   The rod regains 1 expended charge daily at dawn. If the rod is reduced to 0 charges, roll a d20. On a 1, the rod disappears in a burst of radiance.",
	attunement : true,
	weight : 2,
	prerequisite : "Requires attunement by a cleric, druid, or paladin",
	prereqeval : function(v) { return classes.known.cleric || classes.known.druid || classes.known.paladin ? true : false; },
	usages : 5,
	recovery : "dawn",
	additional : "regains 1",
	spellFirstColTitle: "Ch",
	spellcastingBonus : [{
		name : "1 charge",
		spells : ["heal"],
		selection : ["heal"],
		firstCol : 1
	}, {
		name : "5 charges",
		spells : ["resurrection"],
		selection : ["resurrection"],
		firstCol : 5
	}],
	spellChanges : {
		"resurrection" : {
			time : "1 a",
			changes : "Casting time is only 1 action instead of 1 hour."
		}
	}
}
MagicItemsList["rod of the pact keeper, +1, +2, or +3"] = {
	name : "Rod of the Pact Keeper, +1, +2, or +3",
	source : ["D", 197],
	type : "rod",
	description : "While holding this rod, I gain a bonus to spell attack rolls and to the saving throw DCs of my warlock spells, determined by the rod's rarity: uncommon (+1), rare (+2), or very rare (+3). As an action once per long rest, I can regain one warlock spell slot while holding the rod.",
	descriptionFull : "While holding this rod, you gain a bonus to spell attack rolls and to the saving throw DCs of your warlock spells. The bonus is determined by the rod's rarity: uncommon (+1), rare (+2), or very rare (+3).\n   In addition, you can regain one warlock spell slot as an action while holding the rod. You can't use this property again until you finish a long rest.",
	attunement : true,
	weight : 2,
	prerequisite : "Requires attunement by a warlock",
	prereqeval : function(v) { return classes.known.warlock; },
	usages : 1,
	recovery : "long rest",
	limfeaname : "Rod of the Pact Keeper (warlock spell slot)",
	action : [["action", ""]],
	choices : ["+1 Rod (uncommon)", "+2 Rod (rare)", "+3 Rod (very rare)"],
	"+1 rod (uncommon)" : {
		name : "Rod of the Pact Keeper +1",
		rarity : "uncommon",
		magicItemTable : "F",
		description : "While holding this rod, I gain a +1 bonus to spell attack rolls and to the saving throw DCs of my warlock spells. As an action once per long rest, I can regain one warlock spell slot while holding the rod.",
		calcChanges : {
			spellCalc : [
				function (type, spellcasters, ability) {
					if (type != "prepare" && (/warlock/).test(spellcasters)) return 1;
				},
				"I gain a +1 bonus to spell attack rolls and to the saving throw DCs of my warlock spells."
			]
		}
	},
	"+2 rod (rare)" : {
		name : "Rod of the Pact Keeper +2",
		rarity : "rare",
		magicItemTable : "G",
		description : "While holding this rod, I gain a +2 bonus to spell attack rolls and to the saving throw DCs of my warlock spells. As an action once per long rest, I can regain one warlock spell slot while holding the rod.",
		calcChanges : {
			spellCalc : [
				function (type, spellcasters, ability) {
					if (type != "prepare" && (/warlock/).test(spellcasters)) return 2;
				},
				"I gain a +2 bonus to spell attack rolls and to the saving throw DCs of my warlock spells."
			]
		}
	},
	"+3 rod (very rare)" : {
		name : "Rod of the Pact Keeper +3",
		rarity : "very rare",
		magicItemTable : "H",
		description : "While holding this rod, I gain a +3 bonus to spell attack rolls and to the saving throw DCs of my warlock spells. As an action once per long rest, I can regain one warlock spell slot while holding the rod.",
		calcChanges : {
			spellCalc : [
				function (type, spellcasters, ability) {
					if (type != "prepare" && (/warlock/).test(spellcasters)) return 3;
				},
				"I gain a +3 bonus to spell attack rolls and to the saving throw DCs of my warlock spells."
			]
		}
	}
}
MagicItemsList["saddle of the cavalier"] = {
	name : "Saddle of the Cavalier",
	source : ["D", 199],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "B",
	description : "While in this saddle on a mount, I can't be dismounted against my will if I am conscious, and attack rolls against the mount have disadvantage.",
	descriptionFull : "While in this saddle on a mount, you can't be dismounted against your will if you're conscious, and attack rolls against the mount have disadvantage."
}
MagicItemsList["scroll of protection"] = {
	name : "Scroll of Protection",
	source : ["D", 199],
	type : "scroll",
	rarity : "rare",
	magicItemTable : "C",
	description : "Once as an action, I can use this to make a 5-ft radius, 10-ft high invisible barrier around myself for 5 min that moves with me and stops a creature type from entering or affecting anything within. As an action, a creature can make a DC 15 Cha check to stop being affected.",
	descriptionFull : "Each scroll of protection works against a specific type of creature chosen by the DM or determined randomly by rolling on the following table.\n\n" + [
		toUni("d100\tCreature Type\td100\tCreature Type"),
		"01-10\tAberrations\t41-50\tFey",
		"11-20\tBeasts\t\t51-75\tFiends",
		"21-30\tCelestials   \t76-80\tPlants",
		"31-40\tElementals\t81-00\tUndead",
	].join("\n") + "\nUsing an action to read the scroll encloses you in an invisible barrier that extends from you to form a 5-foot-radius, 10-foot-high cylinder. For 5 minutes, this barrier prevents creatures of the specified type from entering or affecting anything within the cylinder.\n   The cylinder moves with you and remains centered on you. However, if you move in such a way that an aberration would be inside the cylinder, the effect ends.\n   A creature can attempt to overcome the barrier by using an action to make a DC 15 Charisma check. On a success, the creature ceases to be affected by the barrier.",
	choices : ["Aberrations", "Beasts", "Celestials", "Elementals", "Fey", "Fiends", "Plants", "Undead"],
	"aberrations" : {
		name : "Scroll of Protection from Aberrations",
		description : "Once as an action, I can use this to make a 5-ft radius, 10-ft high invisible barrier around myself for 5 min that moves with me and stops aberrations from entering or affecting anything within. As an action, a creature can make a DC 15 Cha check to stop being affected. If I move so the barrier includes an aberration, it ends."
	},
	"beasts" : {
		name : "Scroll of Protection from Beasts",
		description : "Once as an action, I can use this to make a 5-ft radius, 10-ft high invisible barrier around myself for 5 minutes that moves with me and stops beasts from entering or affecting anything within. As an action, a creature can make a DC 15 Charisma check to stop being affected. If I move so the barrier includes a beast, it ends."
	},
	"celestials" : {
		name : "Scroll of Protection from Celestials",
		description : "Once as an action, I can use this to make a 5-ft radius, 10-ft high invisible barrier around myself for 5 min that moves with me and stops celestials from entering or affecting anything within. As an action, a creature can make a DC 15 Cha check to stop being affected. If I move so the barrier includes a celestial, it ends."
	},
	"elementals" : {
		name : "Scroll of Protection from Elementals",
		description : "Once as an action, I can use this to make a 5-ft radius, 10-ft high invisible barrier around myself for 5 min that moves with me and stops elementals from entering or affecting anything within. As an action, a creature can make a DC 15 Cha check to stop being affected. If I move so the barrier includes an elemental, it ends."
	},
	"fey" : {
		name : "Scroll of Protection from Fey",
		description : "Once as an action, I can use this to make a 5-ft radius, 10-ft high invisible barrier around myself for 5 minutes that moves with me and stops fey from entering or affecting anything within. As an action, a creature can make a DC 15 Charisma check to stop being affected. If I move so the barrier includes a fey, it ends."
	},
	"fiends" : {
		name : "Scroll of Protection from Fiends",
		description : "Once as an action, I can use this to make a 5-ft radius, 10-ft high invisible barrier around myself for 5 minutes that moves with me and stops fiends from entering or affecting anything within. As an action, a creature can make a DC 15 Charisma check to stop being affected. If I move so the barrier includes a fiend, it ends."
	},
	"plants" : {
		name : "Scroll of Protection from Plants",
		description : "Once as an action, I can use this to make a 5-ft radius, 10-ft high invisible barrier around myself for 5 minutes that moves with me and stops plants from entering or affecting anything within. As an action, a creature can make a DC 15 Charisma check to stop being affected. If I move so the barrier includes a plant, it ends."
	},
	"undead" : {
		name : "Scroll of Protection from Undead",
		description : "Once as an action, I can use this to make a 5-ft radius, 10-ft high invisible barrier around myself for 5 minutes that moves with me and stops undead from entering or affecting anything within. As an action, a creature can make a DC 15 Cha check to stop being affected. If I move so the barrier includes a undead, it ends."
	}
}
MagicItemsList["sending stones"] = {
	name : "Sending Stones",
	source : ["D", 199],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "C",
	description : "While I touch one of this pair of stones, I can use an action to cast Sending, targeting the bearer of the other stone. If no creature has the other stone, the spell won't cast. Once it is cast, neither stone can be used again until the next dawn. Sending allows each bearer to communicate up to 25 words.",
	descriptionFull : "Sending stones come in pairs, with each smooth stone carved to match the other so the pairing is easily recognized. While you touch one stone, you can use an action to cast the Sending spell from it. The target is the bearer of the other stone. If no creature bears the other stone, you know that fact as soon as you use the stone and don't cast the spell.\n   Once Sending is cast through the stones, they can't be used again until the next dawn. If one of the stones in a pair is destroyed, the other one becomes nonmagical.",
	spellcastingBonus : {
		name : "To other stone bearer only",
		spells : ["sending"],
		selection : ["sending"],
		firstCol : "oncelr"
	},
	usages : 1, 
	recovery : "dawn",
	spellChanges : {
		"sending" : {
			description : "Send a 25 word message to the bearer of the other Sending Stone, who can respond with 25 words",
			changes : "Using one stone of a pair of Sending Stones, the spell can only target the bearer of the other stone of the pair."
		}
	}
}
MagicItemsList["sentinel shield"] = {
	name : "Sentinel Shield",
	source : ["D", 199],
	type : "shield",
	rarity : "uncommon",
	magicItemTable : "F",
	description : "While holding this shield, I have advantage on initiative rolls and Wisdom (Perception) checks. The shield is emblazoned with a symbol of an eye.",
	descriptionFull : "While holding this shield, you have advantage on initiative rolls and Wisdom (Perception) checks. The shield is emblazoned with a symbol of an eye.",
	weight : 6,
	shieldAdd : "Sentinel Shield",
	advantages : [["Initiative", true], ["Perception", true]],
	vision : [["Adv. on Perception checks", 0]]
}
MagicItemsList["staff of the adder"] = {
	name : "Staff of the Adder",
	source : ["D", 203],
	type : "staff",
	rarity : "uncommon",
	magicItemTable : "F",
	description : "As a bonus action, I can speak this staff's command word to animate its snake head for 1 minute or make it inanimate again. While animated, I can use it in melee (1d6 piercing + DC 15 Con save or 3d6 poison), but it can be attacked and has AC 15 and 20 HP (full every time). If it reaches 0 HP, the staff is destroyed.",
	descriptionFull : "You can use a bonus action to speak this staff's command word and make the head of the staff become that of an animate poisonous snake for 1 minute. By using another bonus action to speak the command word again, you return the staff to its normal inanimate form.\n   You can make a melee attack using the snake head, which has a reach of 5 feet. Your proficiency bonus applies to the attack roll. On a hit, the target takes 1d6 piercing damage and must succeed on a DC 15 Constitution saving throw or take 3d6 poison damage.\n   The snake head can be attacked while it is animate. It has an Armor Class of 15 and 20 hit points. If the head drops to 0 hit points, the staff is destroyed. As long as it's not destroyed, the staff regains all lost hit points when it reverts to its inanimate form.",
	attunement : true,
	weight : 4,
	prerequisite : "Requires attunement by a cleric, druid, or warlock",
	prereqeval : function(v) { return classes.known.cleric || classes.known.druid || classes.known.warlock ? true : false; },
	action : [["bonus action", " (animate/end)"]],
	weaponsAdd : ["Animated Snake Head from Staff of the Adder"],
	weaponOptions : {
		regExpSearch : /^(?=.*snake)(?=.*head)(?=.*staff)(?=.*adder).*$/i,
		name : "Animated Snake Head from Staff of the Adder",
		source : ["D", 203],
		list : "melee",
		ability : 1,
		type : "Natural",
		damage : [1, 6, "piercing"],
		range : "Melee",
		weight : 4,
		description : "DC 15 Constitution save or 3d6 poison damage",
		abilitytodamage : false
	}
}
MagicItemsList["sword of answering"] = {
	name : "Sword of Answering",
	source : ["D", 206],
	type : "weapon (longsword)",
	rarity : "legendary",
	magicItemTable : "I",
	description : "I gain a +3 bonus to attack and damage rolls made with this magical longsword that has a gem set in its pommel. As a reaction when a creature within my reach damages me, I can make one melee attack with this sword with advantage. This attack ignores damage immunities and resistances of the target.",
	descriptionFull : 'In the world of Greyhawk, only nine of these blades are known to exist. Each is patterned after the legendary sword Fragarach, which is variously translated as "Final Word." Each of the nine swords has its own name and alignment, and each bears a different gem in its pommel.\n   You gain a +3 bonus to attack and damage rolls made with this sword. In addition, while you hold the sword, you can use your reaction to make one melee attack with it against any creature in your reach that deals damage to you. You have advantage on the attack roll, and any damage dealt with this special attack ignores any damage immunity or resistance the target has.\n\n' + [
		toUni("Name\t\tAlignment\tGem"),
		"Answerer    \tChaotic good\tEmerald",
		"Back Talker\tChaotic evil\tJet",
		"Concluder    \tLawful neutral\tAmethyst",
		"Last Quip    \tChaotic neutral\tTourmaline",
		"Rebutter\t\tNeutral good\tTopaz",
		"Replier\t\tNeutral\t\tPeridot",
		"Retorter\t\tLawful good\tAquamarine",
		"Scather\t\tLawful evil\tGarnet",
		"Squelcher    \tNeutral evil\tSpinel"
	].join("\n"),
	attunement : true,
	weight : 3,
	action : [["reaction", ""]],
	weaponsAdd : ["Sword of Answering"],
	weaponOptions : {
		baseWeapon : "longsword",
		regExpSearch : /^(?=.*sword)(?=.*answering).*$/i,
		name : "Sword of Answering",
		source : ["D", 206],
		modifiers : [3, 3]
	},
	choices : ["Answerer (chaotic good)", "Back Talker (chaotic evil)", "Concluder (lawful neutral)", "Last Quip (chaotic neutral)", "Rebutter (neutral good)", "Replier (neutral)", "Retorter (lawful good)", "Scather (lawful evil)", "Squelcher (neutral evil)"],
	"answerer (chaotic good)" : {
		name : "Sword of Answering [Answerer]",
		prerequisite : "Requires attunement by a creature with the chaotic good alignment",
		prereqeval : function(v) { return (/^(?=.*chaotic)(?=.*good).*$/i).test(What("Alignment")); },
		description : "I gain a +3 bonus to attack and damage rolls made with this magical longsword that has an emerald set in its pommel. As a reaction when a creature within my reach damages me, I can make one melee attack with this sword with advantage. This attack ignores damage immunities and resistances of the target."
	},
	"back talker (chaotic evil)" : {
		name : "Sword of Answering [Back Talker]",
		prerequisite : "Requires attunement by a creature with the chaotic evil alignment",
		prereqeval : function(v) { return (/^(?=.*chaotic)(?=.*evil).*$/i).test(What("Alignment")); },
		description : "I gain a +3 bonus to attack and damage rolls made with this magical longsword that has jet set in its pommel. As a reaction when a creature within my reach damages me, I can make one melee attack with this sword with advantage. This attack ignores damage immunities and resistances of the target."
	},
	"concluder (lawful neutral)" : {
		name : "Sword of Answering [Concluder]",
		prerequisite : "Requires attunement by a creature with the lawful neutral alignment",
		prereqeval : function(v) { return (/^(?=.*lawful)(?=.*neutral).*$/i).test(What("Alignment")); },
		description : "I gain a +3 bonus to attack and damage rolls made with this magical longsword that has an amethyst set in its pommel. As a reaction when a creature within my reach damages me, I can make one melee attack with this sword with advantage. This attack ignores damage immunities and resistances of the target."
	},
	"last quip (chaotic neutral)" : {
		name : "Sword of Answering [Last Quip]",
		prerequisite : "Requires attunement by a creature with the chaotic neutral alignment",
		prereqeval : function(v) { return (/^(?=.*chaotic)(?=.*neutral).*$/i).test(What("Alignment")); },
		description : "I gain a +3 bonus to attack and damage rolls made with this magical longsword that has a tourmaline set in its pommel. As a reaction when a creature within my reach damages me, I can make one melee attack with this sword with advantage. This attack ignores damage immunities and resistances of the target."
	},
	"rebutter (neutral good)" : {
		name : "Sword of Answering [Rebutter]",
		prerequisite : "Requires attunement by a creature with the neutral good alignment",
		prereqeval : function(v) { return (/^(?=.*neutral)(?=.*good).*$/i).test(What("Alignment")); },
		description : "I gain a +3 bonus to attack and damage rolls made with this magical longsword that has a topaz set in its pommel. As a reaction when a creature within my reach damages me, I can make one melee attack with this sword with advantage. This attack ignores damage immunities and resistances of the target."
	},
	"replier (neutral)" : {
		name : "Sword of Answering [Replier]",
		prerequisite : "Requires attunement by a creature with the neutral alignment",
		prereqeval : function(v) { return (/^(?=.*neutral)(?!.*(chaotic|lawful|evil|good)).*$/i).test(What("Alignment")); },
		description : "I gain a +3 bonus to attack and damage rolls made with this magical longsword that has a peridot set in its pommel. As a reaction when a creature within my reach damages me, I can make one melee attack with this sword with advantage. This attack ignores damage immunities and resistances of the target."
	},
	"retorter (lawful good)" : {
		name : "Sword of Answering [Retorter]",
		prerequisite : "Requires attunement by a creature with the lawful good alignment",
		prereqeval : function(v) { return (/^(?=.*lawful)(?=.*good).*$/i).test(What("Alignment")); },
		description : "I gain a +3 bonus to attack and damage rolls made with this magical longsword that has an aquamarine set in its pommel. As a reaction when a creature within my reach damages me, I can make one melee attack with this sword with advantage. This attack ignores damage immunities and resistances of the target."
	},
	"scather (lawful evil)" : {
		name : "Sword of Answering [Scather]",
		prerequisite : "Requires attunement by a creature with the lawful evil alignment",
		prereqeval : function(v) { return (/^(?=.*lawful)(?=.*evil).*$/i).test(What("Alignment")); },
		description : "I gain a +3 bonus to attack and damage rolls made with this magical longsword that has a garnet set in its pommel. As a reaction when a creature within my reach damages me, I can make one melee attack with this sword with advantage. This attack ignores damage immunities and resistances of the target."
	},
	"squelcher (neutral evil)" : {
		name : "Sword of Answering [Squelcher]",
		prerequisite : "Requires attunement by a creature with the neutral evil alignment",
		prereqeval : function(v) { return (/^(?=.*neutral)(?=.*evil).*$/i).test(What("Alignment")); },
		description : "I gain a +3 bonus to attack and damage rolls made with this magical longsword that has a spinel set in its pommel. As a reaction when a creature within my reach damages me, I can make one melee attack with this sword with advantage. This attack ignores damage immunities and resistances of the target."
	}
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
			'If I include the words "of Vengeance" in the name of a sword, it will be treated as the magic weapon Sword of Vengeance. It has +1 to hit and damage, but also bears a curse.'
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
MagicItemsList["tentacle rod"] = {
	name : "Tentacle Rod",
	source : ["D", 208],
	type : "rod",
	rarity : "rare",
	magicItemTable : "G",
	description : "As an action, all 3 tentacles of this rod attack with 15 ft reach, +9 to hit, dealing 1d6 bludgeoning damage. If a target is hit by all 3 it must make a DC 15 Con save or have half speed, disadv. on Dex saves, no reactions, and do action or bonus action, not both, for 1 min. It can repeat the save at the end of each of its turns.",
	descriptionLong : "As an action while holding the rod, I can direct each of its three tentacles to attack a creature I can see within 15 ft. Each tentacle makes a melee attack roll, +9 to hit, dealing 1d6 bludgeoning damage. If a target is hit by all three tentacles, it must make a DC 15 Constitution saving throw. On a failure, the creature's speed is halved, it has disadvantage on Dexterity saving throws, and it can't use reactions for 1 minute. Moreover, on each of its turns, it can take either an action or a bonus action, but not both. At the end of each of its turns, it can repeat the saving throw, ending the effect on itself on a success.",
	descriptionFull : "Made by the drow, this rod is a magic weapon that ends in three rubbery tentacles. While holding the rod, you can use an action to direct each tentacle to attack a creature you can see within 15 feet of you. Each tentacle makes a melee attack roll with a +9 bonus. On a hit, the tentacle deals 1d6 bludgeoning damage. If you hit a target with all three tentacles, it must make a DC 15 Constitution saving throw. On a failure, the creature's speed is halved, it has disadvantage on Dexterity saving throws, and it can't use reactions for 1 minute. Moreover, on each of its turns, it can take either an action or a bonus action, but not both. At the end of each of its turns, it can repeat the saving throw, ending the effect on itself on a success.",
	attunement : true,
	weight : 2,
	action : [["action", ""]],
	weaponOptions : {
		regExpSearch : /^(?=.*tentacle)(?=.*rod).*$/i,
		name : "Tentacle Rod",
		source : ["D", 208],
		ability : 0,
		type : "Magic Item",
		damage : [1, 6, "bludgeoning"],
		range : "Melee (15 ft)",
		description : "Action to use, 3 attacks; If all 3 hit same target, it DC 15 Con save, see magic item",
		abilitytodamage : false,
		modifiers : [9, ""],
		weight : 2
	}
}
MagicItemsList["tome of the stilled tongue"] = {
	name : "Tome of the Stilled Tongue",
	source : ["D", 208],
	type : "wondrous item",
	rarity : "legendary",
	magicItemTable : "I",
	description : "I can use this thick leather-bound tome as a spellbook and an arcane focus. Once per dawn while holding it, I can use a bonus action to cast a spell I have written in it, without expending a spell slot or using any verbal or somatic components. Removing the tongue on the cover erases all spells within.",
	descriptionLong : "The first few pages of this thick leather-bound tome are filled with indecipherable scrawls. The remaining pages are blank and pristine. I can use it as a spellbook and an arcane focus. Once per dawn while holding it, I can use a bonus action to cast a spell I have written in the tome, without expending a spell slot or using any verbal or somatic components. While attuned to the book, I can remove the tongue from the book's cover, permanently erasing all spells within. Vecna watches the user or this tome and sometimes has cryptic messages appear in it at midnight and fade away after they are read.",
	descriptionFull : "This thick leather-bound volume has a desiccated tongue pinned to the front cover. Five of these tomes exist, and it's unknown which one is the original. The grisly cover decoration on the first tome of the stilled tongue once belonged to a treacherous former servant of the lich-god Vecna, keeper of secrets. The tongues pinned to the covers of the four copies came from other spellcasters who crossed Vecna. The first few pages of each tome are filled with indecipherable scrawls. The remaining pages are blank and pristine.\n   If you can attune to this item, you can use it as a spellbook and an arcane focus. In addition, while holding the tome, you can use a bonus action to cast a spell you have written in this tome, without expending a spell slot or using any verbal or somatic components. Once used, this property of the tome can't be used again until the next dawn.\n   While attuned to the book, you can remove the tongue from the book's cover. If you do so, all spells written in the book are permanently erased.\n   Vecna watches anyone using this tome. He can also write cryptic messages in the book. These messages appear at midnight and fade away after they are read.",
	attunement : true,
	weight : 5,
	prerequisite : "Requires attunement by a wizard",
	prereqeval : function(v) { return classes.known.wizard ? true : false; },
	action : [["bonus action", ""]],
	usages : 1,
	recovery : "dawn"
}
MagicItemsList["weapon of warning"] = {
	name : "Weapon of Warning",
	nameTest : "of Warning",
	source : ["D", 213],
	type : "weapon (any)",
	rarity : "uncommon",
	magicItemTable : "F",
	description : "While this magic weapon is on my person, I have advantage on initiative rolls. In addition, both me and my allies within 30 ft of me can't be surprised and the weapon magically awakens us when combat starts, except those incapacitated by something other than nonmagical sleep.",
	descriptionFull : "This magic weapon warns you of danger. While the weapon is on your person, you have advantage on initiative rolls. In addition, you and any of your companions within 30 feet of you can't be surprised, except when incapacitated by something other than nonmagical sleep. The weapon magically awakens you and your companions within range if any of you are sleeping naturally when combat begins.",
	attunement : true,
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "prefix",
		descriptionChange : ["replace", "weapon"]
	},
	advantages : [["Initiative", true]],
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && !v.isSpell && (/warning/i).test(v.WeaponText)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
				}
			},
			'If I include the word "Warning" in the name of a weapon, it will be treated as the magic weapon Weapon of Warning.'
		]
	},
	savetxt : { immune : ["surprised"] }
}

// Sentient Items
var DMG_blackrazorFullDescription = [
	"Hidden in the dungeon of White Plume Mountain, Blackrazor shines like a piece of night sky filled with stars. Its black scabbard is decorated with pieces of cut obsidian.",
	"You gain a +3 bonus to attack and damage rolls made with this magic weapon. It has the following additional properties.",
	">>Devour Soul<<. Whenever you use it to reduce a creature to 0 hit points, the sword slays the creature devours its soul, unless it is a construct or an undead. A creature whose soul has been devoured by Blackrazor can be restored to life only by a Wish spell.",
	"When it devours a soul, Blackrazor grants you temporary hit points equal to the slain creature's hit point maximum. These hit points fade after 24 hours. As long as these temporary hit points last and you keep Blackrazor in hand, you have advantage on attack rolls, saving throws, and ability checks.",
	"If you hit an undead with this weapon, you take 1d10 necrotic damage and the target regains 1d10 hit points. If this necrotic damage reduces you to 0 hit points, Blackrazor devours your soul.",
	">>Soul Hunter<<. While you hold the weapon, you are aware of the presence of Tiny or larger creatures within 60 feet of you that aren't constructs or undead. You also can't be charmed or frightened.",
	"Blackrazor can cast the Haste spell on you once per day. It decides when to cast the spell and maintains concentration on it so that you don't have to.",
	">>Sentience<<. Blackrazor is a sentient chaotic neutral weapon with an Intelligence of 17, a Wisdom of 10, and a Charisma of 19. It has hearing and darkvision out to a range of 120 feet.",
	"The weapon can speak, read, and understand Common, and can communicate with its wielder telepathically. Its voice is deep and echoing. While you are attuned to it, Blackrazor also understands every language you know.",
	">>Personality<<. Blackrazor speaks with an imperious tone, as though accustomed to being obeyed.",
	"The sword's purpose is to consume souls. It doesn't care whose souls it eats, including the wielder's. The sword believes that all matter and energy sprang from a void of negative energy and will one day return to it. Blackrazor is meant to hurry that process along.",
	"Despite its nihilism, Blackrazor feels a strange kinship to Wave and Whelm, two other weapons locked away under White Plume Mountain. It wants the three weapons to be united again and wielded together in combat, even though it violently disagrees with Whelm and finds Wave tedious.",
	"Blackrazor's hunger for souls must be regularly fed. If the sword goes three days or more without consuming a soul, a conflict between it and its wielder occurs at the next sunset."
];
MagicItemsList["blackrazor"] = {
	name : "Blackrazor",
	source : ["D", 216],
	type : "weapon (greatsword)",
	rarity : "legendary",
	notLegalAL : true,
	description : "This sentient greatsword adds +3 to hit and damage and makes me immune to being charmed or frightened. Once per day it can cast Haste on me as it sees fit. If I use it to bring a creature to 0 HP, it devours the creature's soul, granting me temporary HP equal to the creature's max HP for 24 hours. See Notes page.",
	descriptionFull : DMG_blackrazorFullDescription.join("\n   ").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
	attunement : true,
	prerequisite : "Requires attunement by a creature of non-lawful alignment",
	prereqeval : function(v) { return !(/lawful/i).test(What("Alignment")); },
	action : [["bonus action", ""]],
	weight : 6,
	weaponsAdd : ["Blackrazor"],
	weaponOptions : {
		baseWeapon : "greatsword",
		regExpSearch : /blackrazor/i,
		name : "Blackrazor",
		source : ["D", 216],
		description : "Heavy, two-handed; Devours soul; Heals undead",
		modifiers : [3,3]
	},
	toNotesPage : [{
		name : "Features",
		popupName : "Features of Blackrazor",
		note : desc(DMG_blackrazorFullDescription).replace(/>>(.*?)<</g, function(a, match) { return match.toUpperCase(); }).replace(/your/g, "my").replace(/you are /ig, "I am ").replace(/(of|on|reduces|grants) you/ig, "$1 me").replace(/you /ig, "I ") + "\n\n" + sentientItemConflictTxt
	}],
	savetxt : { immune : ["charmed", "frightened"] },
	usages : 1,
	recovery : "day",
	additional : "Haste",
	spellcastingBonus : [{
		name: "Once per day",
		spells: ["haste"],
		selection: ["haste"],
		firstCol : "oncelr"
	}],
	spellChanges : {
		"command" : {
			range : "Self",
			duration : "1 min",
			description : "I get +2 AC, speed doubled, adv. on Dex saves, extra action (1 attack, dash, disengage, hide)",
			changes : "Blackrazor casts the spell on me, so I don't need to concentrate on it."
		}
	}
}
var DMG_waveFullDescription = [
	"Held in the dungeon of White Plume Mountain, this trident is an exquisite weapon engraved with images of waves, shells, and sea creatures. Although you must worship a god of the sea to attune to this weapon, Wave happily accepts new converts.",
	"You gain a +3 bonus to attack and damage rolls made with this magic weapon. If you score a critical hit with it, the target takes extra necrotic damage equal to half its hit point maximum.",
	"The weapon also functions as a trident of fish command and a weapon of warning. It can confer the benefit of a cap of water breathing while you hold it, and you can use it as a cube of force by choosing the effect, instead of pressing cube sides to select it.",
	">>Sentience<<. Wave is a sentient weapon of neutral alignment, with an Intelligence of 14, a Wisdom of 10, and a Charisma of 18. It has hearing and darkvision out to a range of 120 feet.",
	"The weapon communicates telepathically with its wielder and can speak, read, and understand Aquan. It can also speak with aquatic animals as if using a Speak with Animals spell, using telepathy to involve its wielder in the conversation.",
	">>Personality<<. When it grows restless, Wave has a habit of humming tunes that vary from sea chanteys to sacred hymns of the sea gods.",
	"Wave zealously desires to convert mortals to the worship of one or more sea gods, or else to consign the faithless to death. Conflict arises if the wielder fails to further the weapon's objectives in the world. The trident has a nostalgic attachment to the place where it was forged, a desolate island called Thunderforge. A sea god imprisoned a family of storm giants there, and the giants forged Wave in an act of devotion to\u2014or rebellion against\u2014that god.",
	"Wave harbors a secret doubt about its own nature and purpose. For all its devotion to the sea gods, Wave fears that it was intended to bring about a particular sea god's demise. This destiny is something Wave might not be able to avert."
];
if (MagicItemsList["trident of fish command"] && MagicItemsList["weapon of warning"] && MagicItemsList["cap of water breathing"] && MagicItemsList["cube of force"]) {
	MagicItemsList["wave"] = {
		name : "Wave",
		source : ["D", 218],
		type : "weapon (trident)",
		rarity : "legendary",
		notLegalAL : true,
		description : "This sentient trident adds +3 to hit and damage and if I score a critical hit with it, the target takes extra necrotic damage equal to half its max HP. It also functions as a trident of fish command, a weapon of warning, cap of water breathing while I hold it, and I can use it as a cube of force. See Notes page.",
		descriptionFull : DMG_waveFullDescription.join("\n   ").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
		attunement : true,
		prerequisite : "Requires attunement by a creature that worships a god of the sea",
		prereqeval : function(v) { return (/deep sashelas|sekolah|ulutiu|umberlee|valkur|poseidon|neptune|aegir|nehalennia|njord/i).test(What("Faith/Deity")); },
		weight : 4,
		weaponsAdd : ["Wave"],
		weaponOptions : {
			baseWeapon : "trident",
			regExpSearch : /wave/i,
			name : "Wave",
			source : ["D", 218],
			description : "Thrown, versatile (1d8); On crit: necrotic damage equal to half target max HP",
			modifiers : [3,3]
		},
		toNotesPage : [{
			name : "Features",
			popupName : "Features of Wave",
			note : desc(DMG_waveFullDescription).replace(/>>(.*?)<</g, function(a, match) { return match.toUpperCase(); }).replace(/you/ig, "I") + "\n\n" + sentientItemConflictTxt
		}, {
			name : "Contained Items",
			popupName : "Descriptions of magic items contained in Wave",
			note : [
				"\n\n\u2022 Trident of Fish Command (SRD 247, DMG 209)\n   " + MagicItemsList["trident of fish command"].description,
				"\u2022 Weapon of Warning (DMG 213)\n   " + MagicItemsList["weapon of warning"].description,
				"\u2022 Cap of Water Breathing (DMG 157)\n   " + MagicItemsList["cap of water breathing"].description,
				"\u2022 Cube of Force (SRD 215, DMG 159)" + desc(MagicItemsList["cube of force"].toNotesPage[0].note)
			].join("\n\n")
		}],
		// cube of force & cap of water breathing
		action : [["action", " (Cap of Water Breathing)"], ["action", " (Cube of Force)"]],
		extraLimitedFeatures : [{
			name : "Wave [Cube of Force] (regains 1d20)",
			usages : 36,
			recovery : "dawn"
		}, {
		// trident of fish command
			name : "Wave [Fish Command] (regains 1d3)",
			usages : 3,
			recovery : "dawn"
		}],
		fixedDC : 15,
		spellFirstColTitle : "Ch",
		spellcastingBonus : {
			name : "1 charge",
			spells : ["dominate beast"],
			selection : ["dominate beast"],
			firstCol : 1
		},
		spellChanges : {
			"dominate beast" : {
				description : "1 beast with swim speed save or charmed, follows telepathic commands, 1 a for complete control",
				changes : "Can only affect beasts with innate swim speed."
			}
		},
		// weapon of warning
		advantages : [["Initiative", true]]
	}
}
var DMG_whelmFullDescription = [
	"Whelm is a powerful warhammer forged by dwarves and lost in the dungeon of White Plume Mountain.",
	"You gain a +3 bonus to attack and damage rolls made with this magic weapon. At dawn the day after you first make an attack roll with Whelm, you develop a fear of being outdoors that persists as long as you remain attuned to the weapon. This causes you to have disadvantage on attack rolls, saving throws, and ability checks while you can see the daytime sky.",
	">>Thrown Weapon<<. Whelm has the thrown property, with a normal range of 20 feet and a long range of 60 feet. When you hit with a ranged weapon attack using it, the target takes an extra 1d8 bludgeoning damage, or an extra 2d8 bludgeoning damage if the target is a giant. Each time you throw the weapon, it flies back to your hand after the attack. If you don't have a hand free, the weapon lands at your feet.",
	">>Shock Wave<<. You can use an action to strike the ground with Whelm and send a shock wave out from the point of impact. Each creature of your choice on the ground within 60 feet of that point must succeed on a DC 15 Constitution saving throw or become stunned for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Once used, this property can't be used again until the next dawn.",
	">>Supernatural Awareness<<. While you are holding the weapon, it alerts you to the location of any secret or concealed doors within 30 feet of you. In addition, you can use an action to cast Detect Evil and Good or Locate Object from the weapon. Once you cast either spell, you can't cast it from the weapon again until the next dawn.",
	">>Sentience<<. Whelm is a sentient lawful neutral weapon with an Intelligence of 15, a Wisdom of 12, and a Charisma of 15. It has hearing and darkvision out to a range of 120 feet.",
	"The weapon communicates telepathically with its wielder and can speak, read, and understand Dwarvish. Giant, and Goblin. It shouts battle cries in Dwarvish when used in combat.",
	">>Personality<<. Whelm's purpose is to slaughter giants and goblinoids. It also seeks to protect dwarves against all enemies. Conflict arises if the wielder fails to destroy goblins and giants or to protect dwarves. Whelm has ties to the dwarf clan that created it, variously called the Dankil or the Mightyhammer clan. It longs to be returned to that clan. It would do anything to protect those dwarves from harm. The hammer also carries a secret shame. Centuries ago, a dwarf named Ctenmiir wielded it valiantly for a time. But Ctenmiir was turned into a vampire. His will was strong enough that he bent Whelm to his evil purposes, even killing members of his own clan."
];
MagicItemsList["whelm"] = {
	name : "Whelm",
	source : ["D", 218],
	type : "weapon (warhammer)",
	rarity : "legendary",
	notLegalAL : true,
	description : "This sentient warhammer adds +3 to hit and damage, has the thrown property, deals extra damage when thrown, and returns to my hand when thrown. I can use it to create a shock wave. It makes me afraid of the outdoors, so while I can see the daytime sky, I have disadv. on attacks, saves, and checks. See Notes page.",
	descriptionFull : DMG_whelmFullDescription.join("\n   ").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
	attunement : true,
	prerequisite : "Requires attunement by a dwarf",
	prereqeval : function(v) { return CurrentRace.known.indexOf('dwarf') !== -1; },
	weight : 2,
	weaponsAdd : ["Whelm"],
	weaponOptions : {
		baseWeapon : "warhammer",
		regExpSearch : /whelm/i,
		name : "Whelm",
		source : ["D", 218],
		range : "Melee, 20/60 ft",
		description : "Versatile (1d10), thrown; Returning; +1d8 damage when thrown (+2d8 vs. giants)",
		modifiers : [3,3]
	},
	toNotesPage : [{
		name : "Features",
		popupName : "Features of Whelm",
		note : desc(DMG_whelmFullDescription).replace(/>>(.*?)<</g, function(a, match) { return match.toUpperCase(); }).replace(/your/g, "my").replace(/you are /ig, "I am ").replace(/(of|on|causes|alerts) you/ig, "$1 me").replace(/you /ig, "I ") + "\n\n" + sentientItemConflictTxt
	}],
	action : [["action", " (Shock Wave)"]],
	extraLimitedFeatures : [{
		name : "Whelm [Shock Wave]",
		usages : 1,
		recovery : "dawn"
	}, {
		name : "Whelm [Detect Evil and Good]",
		usages : 1,
		recovery : "dawn"
	}, {
		name : "Whelm [Locate Object]",
		usages : 1,
		recovery : "dawn"
	}],
	vision : [["Know location of secret doors", 30]],
	spellcastingBonus : {
		name : "Once per dawn",
		spells : ["detect evil and good", "locate object"],
		selection : ["detect evil and good", "locate object"],
		firstCol : "oncelr"
	}
}
