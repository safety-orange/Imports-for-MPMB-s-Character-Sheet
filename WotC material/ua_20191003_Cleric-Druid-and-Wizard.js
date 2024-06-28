var iFileName = "ua_20191003_Cleric-Druid-and-Wizard.js";
RequiredSheetVersion("13.0.8");
// This file adds the content from the Unearthed Arcana: Cleric, Druid, and Wizard article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:CDnW"] = {
	name : "Unearthed Arcana: Cleric, Druid, and Wizard",
	abbreviation : "UA:CDnW",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2019/dnd/downloads/UA-TwilightFireNames.pdf",
	date : "2019/10/03"
};

// Add a subclass for the Cleric
AddSubClass("cleric", "twilight domain-ua", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(twilight|transition)).*$/i,
	subname : "Twilight Domain",
	source : [["UA:CDnW", 1]],
	spellcastingExtra : ["faerie fire", "sleep", "darkness", "invisibility", "aura of vitality", "leomund's tiny hut", "aura of life", "greater invisibility", "circle of power", "dream"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Proficiency",
			source : [["UA:CDnW", 1]],
			minlevel : 1,
			description : "\n   I gain proficiency with martial weapons and heavy armor",
			armorProfs : [false, false, true, false],
			weaponProfs : [false, true]
		},
		"subclassfeature1.1" : {
			name : "Eyes of Night",
			source : [["UA:CDnW", 1]],
			minlevel : 1,
			description : desc([
				"I gain Darkvision with unlimited range and can give this benefit to allies",
				"As an action, I can grant this to chosen creatures I can see within 10 ft for 10 minutes"
			]),
			vision : [["Darkvision", "unlimited"]],
			additional : "extend to others",
			usages : "Wis mod per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
			action : [["action", ""]]
		},
		"subclassfeature1.2" : {
			name : "Vigilant Blessing",
			source : [["UA:CDnW", 1]],
			minlevel : 1,
			description : desc([
				"As an action, I can grant myself or a creature I touch adv. on the next initiative roll",
				"This benefit ends immediately after the roll or when I use this feature again"
			]),
			action : [["action", ""]]
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Twilight Sanctuary",
			source : [["UA:CDnW", 1]],
			minlevel : 2,
			description : desc([
				"As an action, I can use my holy symbol to create a 30-ft radius sphere around myself",
				"It moves with me, is filled with dim light, and lasts for 1 min or until I'm incapacitated",
				"When a creature, including me, ends its turn inside the sphere, I can grant it a benefit",
				"It either gains 1d8 temp HP or one effect causing it to be charmed or frightened ends"
			]),
			action : [["action", ""]]
		},
		"subclassfeature6" : {
			name : "Steps of the Brave",
			source : [["UA:CDnW", 2]],
			minlevel : 6,
			description : desc([
				"I have adv. on saves against being frightened",
				"As a bonus action while I'm in dim light or darkness, I can give myself a fly speed",
				"This fly speed is equal to my walking speed and lasts until the end of my next turn"
			]),
			action : [["bonus action", ""]]
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : [["UA:CDnW", 1]],
			minlevel : 8,
			description : "\n  Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
			additional : levels.map(function (n) {
				if (n < 8) return "";
				return "+" + (n < 14 ? 1 : 2) + "d8 psychic damage";
			}),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.cleric && v.isWeapon) {
							fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 psychic damage';
						}
					},
					"Once per turn, I can have one of my weapon attacks that hit do extra psychic damage."
				]
			}
		},
		"subclassfeature17" : {
			name : "Midnight Shroud",
			source : [["UA:CDnW", 2]],
			minlevel : 17,
			description : desc([
				"When I use a spell slot to cast Darkness, I can choose my Wis mod of creatures I can see",
				"The chosen creatures can see through the Darkness; I can be one of the chosen creatures"
			]),
			calcChanges : {
				spellAdd : [
					// note that several healing spells are not present here because they don't restore hp at casting (only later)
					function (spellKey, spellObj, spName) {
						if (spellKey == "darkness" && (!spellObj.fistCol || spellObj.fistCol == "markedbox")) {
							spellObj.description = "15-ft rad darkness on point/obj; no darkvision; only magic light SL 3+ works; Wis mod of crea can see";
							return true;
						}
					},
					"When I cast Darkness using a spell slot, I can choose a number of creatures that I can see (myself included) equal to my Wisdom modifier (minimum 1).The chosen creatures can see through the Darkness."
				]
			}
		}
	}
});

// Add a subclass for the Druid
AddSubClass("druid", "circle of wildfire-ua", {
	regExpSearch : /^(?=.*(druid|shaman))(?=.*wild.{0,1}fire).*$/i,
	subname : "Circle of Wildfire",
	source : [["UA:CDnW", 2]],
	features : {
		"subclassfeature2" : {
			name : "Circle Spells",
			source : [["UA:CDnW", 2]],
			minlevel : 2,
			description : desc([
				"My mystical bond with a wildfire spirit gives me the ability to cast certain spells",
				"These are always prepared, but don't count against the number of spells I can prepare",
				"In addition, I learn the Fire Bolt cantrip"
			]),
			spellcastingBonus : {
				name : "Circle Spells",
				spells : ["fire bolt"],
				selection : ["fire bolt"],
				firstCol : "atwill"
			},
			spellcastingExtra : ["locate animals or plants", "scorching ray", "fireball", "plant growth", "aura of life", "fire shield", "flame strike", "raise dead"]
		},
		"subclassfeature2.1" : {
			name : "Summon Wildfire",
			source : [["UA:CDnW", 2]],
			minlevel : 2,
			description : desc([
				"As an action, I can expend a use of wild shape to summon a wildfire spirit within 30 ft",
				"All within 10 ft of where it manifests must make a Dex save or take 2d10 fire damage",
				"It disappears after 1 hour, when it is reduced to 0 HP, or I summon another",
				"It obeys my commands, is friendly to my allies and I, and acts on my initiative, after me",
				"Unless I use a bonus action to command it, it only takes the Dodge action on its turn",
				"Its HP maximum is equal to its Con mod + my Wis mod + five times my druid level"
			]),
			action : [["action", ""], ["bonus action", "Command Wildfire"]],
			creaturesAdd : [["Wildfire Spirit"]],
			creatureOptions : [{
				name : "Wildfire Spirit",
				source : [["UA:CDnW", 3]],
				size : 4,
				type : "Elemental",
				alignment : "Chaotic",
				ac : 13,
				hp : 12,
				hd : [2, 6],
				speed : "20 ft, fly 30 ft (hover)",
				scores : [10, 14, 14, 13, 15, 11],
				saves : ["", 4, 4, "", 4, ""],
				skills : {
					"nature" : 4
				},
				damage_immunities : "fire",
				condition_immunities : "charmed, frightened, grappled, prone, restrained",
				senses : "Darkvision 60 ft",
				passivePerception : 12,
				languages : "understands the languages of its creator",
				challengeRating : "0",
				proficiencyBonus : 2,
				proficiencyBonusLinked : true,
				attacksAction : 1,
				attacks : [{
					name : "Flame Seed",
					ability : 2,
					damage : [1, 6, "fire"],
					range : "30 ft",
					description : "Ranged weapon attack",
					modifiers : ["", "Prof"],
					abilitytodamage : false
				}, {
					name : "Fiery Teleportation",
					ability : 5,
					damage : [1, 6, "fire"],
					range : "10 ft",
					description : "Dex save for all within 10 ft of teleportation origin, success - no damage; See traits",
					dc : true,
					modifiers : ["", "Prof"],
					abilitytodamage : false,
					useSpellMod : "druid"
				}, {
					name : "Fiery Manifestation",
					ability : 5,
					damage : [2, 10, "fire"],
					range : "10 ft",
					description : "Dex save for all within 10 ft where spirit is summoned, success - no damage",
					dc : true,
					abilitytodamage : false,
					useSpellMod : "druid"
				}],
				features : [{
					name : "Creator",
					description : "The spirit obeys the commands of its creator and has the same proficiency bonus. It takes its turn immediately after its creator, on the same initiative count. It only takes the Dodge action, unless its creator takes a bonus action to command to do otherwise, in which case it can only take the Flame Seed, Fiery Teleportation, Dash, Disengage, Help, or Hide action."
				}],
				actions : [{
					name : "Fiery Teleportation (1\xD7 per short rest)",
					description : "The spirit and each willing creature of its creator's choice within 5 ft of it teleport up to 30 ft to unoccupied spaces its creator can see. Each creature within 10 ft of the space that the spirit left must succeed on a Dexterity saving throw against its creator's spell save DC or take fire damage equal to 1d6 + its proficiency bonus."
				}],
				header : "Wildfire",
				calcChanges : {
					hp : function (totalHD, HDobj, prefix) {
						if (!classes.known.druid) return;
						var wisMod = Number(What('Wis Mod'));
						var drdLvl = classes.known.druid.level;
						var drdLvl5 = 5 * drdLvl;
						HDobj.alt.push(HDobj.conMod + wisMod + drdLvl5);
						HDobj.altStr.push(" = " + HDobj.conMod + " from its Constitution modifier\n + " + wisMod + " from its creator's Intelligence modifier\n + 5 \xD7 " + drdLvl + " from five times its creator's druid level (" + drdLvl5 + ")");
					},
					setAltHp : true,
					hpForceRecalc : true
				}
			}]
		},
		"subclassfeature6" : {
			name : "Enhanced Bond",
			source : [["UA:CDnW", 3]],
			minlevel : 6,
			description : desc([
				"While my wildfire spirit is present, I can have my spells originate from it (no range 'self')",
				"Also, I can then add 1d8 to a single roll of my spells that restore HP or deal fire damage"
			])
		},
		"subclassfeature10" : {
			name : "Flames of Life",
			source : [["UA:CDnW", 3]],
			minlevel : 10,
			description : desc([
				"As a reaction when a creature dies in 30 ft of me/wildfire spirit, I can have flames erupt",
				"The creature has to be Small or larger; The flames last for 1 minute or until touched",
				"When I see someone touch the flames, it heals or takes fire damage for 2d10 + Wis mod"
			]),
			action : [["reaction", ""]],
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest"
		},
		"subclassfeature14" : {
			name : "Blazing Endurance",
			source : [["UA:CDnW", 3]],
			minlevel : 14,
			description : desc([
				"If I drop to 0 HP and don't die, I can stay at 1 HP instead with 5\xD7 druid level temp HP",
				"Also, all chosen creatures that I can see within 30 ft take 2d10 + druid level fire damage"
			]),
			usages : 1,
			recovery : "long rest"
		}
	}
});

// Add a subclass for the Wizard
AddSubClass("wizard", "onomancy-ua", {
	regExpSearch : /onomancy|onomancer/i,
	subname : "Onomancy",
	source : [["UA:CDnW", 4]],
	fullname : "Onomancer",
	features : {
		"subclassfeature2" : {
			name : "Bonus Proficiencies",
			source : [["UA:CDnW", 4]],
			minlevel : 2,
			description : "\n   I learn a language of my choice and gain proficiency with calligrapher's tools",
			toolProfs : ["Calligrapher's tools"],
			languageProfs : [1]
		},
		"subclassfeature2.1" : {
			name : "Extract Name",
			source : [["UA:CDnW", 4]],
			minlevel : 2,
			description : desc([
				"As a bonus action, I can have a creature I can see within 60 ft make a Wisdom save",
				"If failed, it is charmed by me until my next turn ends and I mentally learn its true name",
				"If successful, I know that my magic failed and can't use this feature again on it"
			]),
			usages : "Intelligence modifier per ",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));",
			recovery : "long rest",
			action : [["bonus action", ""]]
		},
		"subclassfeature2.2" : {
			name : "Fateful Naming",
			source : [["UA:CDnW", 4]],
			minlevel : 2,
			description : desc([
				"I add Bane and Bless to my spellbook and they count as wizard spells for me",
				"These are always prepared, but don't count against the number of spells I can prepare",
				"I can cast either spell without using a spell slot by speaking the true name of a target"
			]),
			spellcastingBonus : {
				name : "Fateful Naming",
				spells : ["bane", "bless"],
				selection : ["bane", "bless"],
				times : 2,
				firstCol : "markedbox"
			},
			additional : "with true name",
			usages : "Int mod per ",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));",
			recovery : "long rest",
		},
		"subclassfeature6" : {
			name : "Resonants",
			source : [["UA:CDnW", 4]],
			minlevel : 6,
			description : desc([
				'Use the "Choose Feature" button above to add Resonants to the third page',
				"Whenever I gain a wizard level, I can replace a Resonant I know with another"
			]),
			additional : levels.map(function (n) {
				return n < 6 ? "" : (n < 10 ? 2 : 4) + " resonants known";
			}),
			extraTimes : levels.map(function (n) {
				return n < 6 ? 0 : n < 10 ? 2 : 4;
			}),
			extraname : "Resonant",
			extrachoices : ["Absorption", "Devastation", "Dissolution", "Nullification", "Puppetry", "Sympathy"],
			"absorption" : {
				name : "Absorption",
				source : [["UA:CDnW", 5]],
				description : "\n   When the spell deals damage to the named target, I gain a number of temporary hit points",
				additional : levels.map(function (n) {
					return (n < 10 ? 3 : n < 14 ? 4 : 5) + "d6 temporary hit points";
				})
			},
			"devastation" : {
				name : "Devastation",
				source : [["UA:CDnW", 5]],
				description : "\n   The named creature has disadvantage on its first saving throw against the spell"
			},
			"dissolution" : {
				name : "Dissolution",
				source : [["UA:CDnW", 5]],
				description : "\n   The first time the named creature takes damage from the spell, it takes extra damage",
				additional : levels.map(function (n) {
					return "+" + (n < 10 ? 2 : n < 14 ? 3 : 4) + "d8 force damage";
				})
			},
			"nullification" : {
				name : "Nullification",
				source : [["UA:CDnW", 5]],
				description : desc([
					"If the named creature is affected by any other spells, I know what those spells are",
					"In addition, I can try to end one of my choice with an Int check (DC 10 + spell level)"
				])
			},
			"puppetry" : {
				name : "Puppetry",
				source : [["UA:CDnW", 5]],
				description : desc([
					"The first time the named creature takes damage from the spell, it is moved as well",
					"I choose to knock it prone or move it up to 10 ft directly towards me or away from me"
				])
			},
			"sympathy" : {
				name : "Sympathy",
				source : [["UA:CDnW", 5]],
				description : "\n   I can target the named creature with the spell even if I can't see it or it is has total cover"
			}
		},
		"subclassfeature6.1" : {
			name : "Resonant Utterance",
			source : [["UA:CDnW", 4]],
			minlevel : 6,
			description : desc([
				"When I use a spell slot to cast a wizard spell, I can use one resonant that I know",
				"The resonant will only work if I speak the true name of a creature targeted by the spell"
			]),
			usages : "half wizard level per ",
			usagescalc : "event.value = classes.known.wizard ? Math.floor(classes.known.wizard.level / 2) : 0;",
			recovery : "long rest"
		},
		"subclassfeature14" : {
			name : "Relentless Naming",
			source : [["UA:CDnW", 5]],
			minlevel : 14,
			description : desc([
				"When I speak the true name of a creature when I cast a damage dealing spell at it,",
				"I can have that spell deal force or psychic damage instead of its normal damage type"
			])
		}
	}
});
