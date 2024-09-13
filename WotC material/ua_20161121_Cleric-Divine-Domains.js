var iFileName = "ua_20161121_Cleric-Divine-Domains.js";
RequiredSheetVersion("13.0.8");
// This file adds the content from the Unearthed Arcana: Cleric Divine Domains article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:CDD"] = {
	name : "Unearthed Arcana: Cleric Divine Domains",
	abbreviation : "UA:CDD",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2016/dnd/downloads/UA_Cleric.pdf",
	date : "2016/11/21"
};

// Adds 3 subclasses for the Cleric
AddSubClass("cleric", "forge domain-ua", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(forge|forgery|blacksmith)).*$/i,
	subname : "Forge Domain",
	source : [["UA:CDD", 1]],
	spellcastingExtra : ["searing smite", "shield", "heat metal", "magic weapon", "elemental weapon", "protection from energy", "fabricate", "wall of fire", "animate objects", "creation"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Proficiency",
			source : [["UA:CDD", 1]],
			minlevel : 1,
			description : "\n   " + "I gain proficiency with heavy armor",
			armorProfs : [false, false, true, false]
		},
		"subclassfeature1.1" : {
			name : "Blessing of the Forge",
			source : [["UA:CDD", 1]],
			minlevel : 1,
			action : [["action", ""]],
			usages : 1,
			recovery : "long rest",
			description : "\n   " + "At the end of a long rest, I can imbue magic into a nonmagical weapon or armor" + "\n   " + "It becomes magical: +1 AC if armor, or +1 to attack and damage rolls if a weapon" + "\n   " + "This lasts until the end of my next long rest"
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Artisan's Blessing",
			source : [["UA:CDD", 1]],
			minlevel : 2,
			description : "\n   " + "During a short rest, I can conduct a ritual to craft an item that is at least part metal" + "\n   " + "The object can be worth up to 100 gp, and I must expend metals of equal value to it" + "\n   " + "The item can be an exact duplicate of a nonmagical item if I possess the original"
		},
		"subclassfeature6" : {
			name : "Soul of the Forge",
			source : [["UA:CDD", 1]],
			minlevel : 6,
			additional : ["", "", "", "", "", "+6 force damage", "+7 force damage", "+8 force damage", "+9 force damage", "+10 force damage", "+11 force damage", "+12 force damage", "+13 force damage", "+14 force damage", "+15 force damage", "+16 force damage", "+17 force damage", "+18 force damage", "+19 force damage", "+20 force damage"],
			description : "\n   " + "I gain a +1 AC while wearing medium or heavy armor, and resistance to fire damage" + "\n   " + "When I hit a construct with an attack, I deal my cleric level in additional force damage",
			dmgres : ["Fire"],
			extraAC : {
				mod : 1,
				text : "I gain a +1 bonus to AC while I'm wearing medium or heavy armor.",
				stopeval : function (v) { return !v.heavyArmor && !v.mediumArmor; }
			}
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : [["UA:CDD", 1]],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
			additional : levels.map(function (n) {
				if (n < 8) return "";
				return "+" + (n < 14 ? 1 : 2) + "d8 fire damage";
			}),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.cleric && v.isWeapon) {
							fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 fire damage';
						}
					},
					"Once per turn, I can have one of my weapon attacks that hit do extra fire damage."
				]
			}
		},
		"subclassfeature17" : {
			name : "Saint of Forge and Fire",
			source : [["UA:CDD", 1]],
			minlevel : 17,
			description : "\n   " + "I gain immunity to fire damage" + "\n   " + "If wearing heavy armor, I'm resistant to nonmagical bludg./piercing/slashing damage",
			savetxt : { immune : ["fire"] },
			dmgres : [["Bludgeoning", "Bludg. (nonmagical)"], ["Piercing", "Pierc. (nonmagical)"], ["Slashing", "Slash. (nonmagical)"]]
		}
	}
});
AddSubClass("cleric", "grave domain-ua", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(grave)).*$/i,
	subname : "Grave Domain",
	source : [["UA:CDD", 2]],
	spellcastingExtra : ["bane", "false life", "gentle repose", "ray of enfeeblement", "revivify", "vampiric touch", "blight", "death ward", "antilife shell", "raise dead"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Proficiency",
			source : [["UA:CDD", 2]],
			minlevel : 1,
			description : "\n   " + "I gain proficiency with heavy armor",
			armorProfs : [false, false, true, false]
		},
		"subclassfeature1.1" : {
			name : "Circle of Mortality",
			source : [["UA:CDD", 2]],
			minlevel : 1,
			action : [["bonus action", ""]],
			description : "\n   " + "Spells I cast to heal a living creature at 0 HP have their dice count as their max result" + "\n   " + "As a bonus action, I can cast the Spare the Dying cantrip, if I know it",
			spellChanges : {
				"spare the dying" : {
					time : "1 bns",
					range : "Touch",
					changes : "I can cast spare the dying as a bonus action instead of an action."
				}
			}
		},
		"subclassfeature1.2" : {
			name : "Eyes of the Grave",
			source : [["UA:CDD", 2]],
			minlevel : 1,
			usages : 1,
			recovery : "long rest",
			description : "\n   " + "By spending 1 min in uninterrupted contemplation, I sense undead within 1 mile" + "\n   " + "I learn their number, distance, and direction from me" + "\n   " + "In addition, I know the creature type of the one with the highest CR"
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Path to the Grave",
			source : [["UA:CDD", 2]],
			minlevel : 2,
			action : [["action", ""]],
			description : "\n   " + "As an action, I can touch a creature to make it take extra damage from one attack" + "\n   " + "It is vulnerable to all the damage from the next spell or attack from me or an ally" + "\n   " + "This only applies to the first time that source inflicts damage, and then ends" + "\n   " + "If the creature has resistance or is immune to the damage, it instead loses it"
		},
		"subclassfeature6" : {
			name : "Sentinel at Death's Door",
			source : [["UA:CDD", 2]],
			minlevel : 6,
			usages : 1,
			recovery : "short rest",
			action : [["reaction", ""]],
			description : "\n   " + "As a reaction, I turn a critical hit to me or an ally I see within 30 ft to a normal hit"
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : [["UA:CDD", 2]],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
			additional : levels.map(function (n) {
				if (n < 8) return "";
				return "+" + (n < 14 ? 1 : 2) + "d8 necrotic damage";
			}),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.cleric && v.isWeapon) {
							fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 necrotic damage';
						}
					},
					"Once per turn, I can have one of my weapon attacks that hit do extra necrotic damage."
				]
			}
		},
		"subclassfeature17" : {
			name : "Keeper of Souls",
			source : [["UA:CDD", 2]],
			minlevel : 17,
			description : "\n   " + "Once per round, if I'm not incapacitated, I can manipulate the energy of the dying" + "\n   " + "When an enemy I can see dies within 30 ft of me, I or an ally within 30 ft regain HP" + "\n   " + "The HP regained is equal to the enemy's number of Hit Dice"
		}
	}
});
AddSubClass("cleric", "protection domain-ua", { // Still valid 2021-09-21
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(protection|protect|defend|defense)).*$/i,
	subname : "Protection Domain",
	source : [["UA:CDD", 3]],
	spellcastingExtra : ["compelled duel", "protection from evil and good", "aid", "protection from poison", "protection from energy", "slow", "guardian of faith", "otiluke's resilient sphere", "antilife shell", "wall of force"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Proficiency",
			source : [["UA:CDD", 3]],
			minlevel : 1,
			description : "\n   " + "I gain proficiency with heavy armor",
			armorProfs : [false, false, true, false]
		},
		"subclassfeature1.1" : {
			name : "Shield of the Faithful",
			source : [["UA:CDD", 3]],
			minlevel : 1,
			action : [["reaction", ""]],
			description : "\n   " + "As a reaction, when someone within 5 ft of me is attacked, I impose disadv. on the roll" + "\n   " + "To do this, I must be able to see both the attacker and the target"
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Radiant Defense",
			source : [["UA:CDD", 3]],
			minlevel : 2,
			action : [["action", ""]],
			description : "\n   " + "As an action, I channel blessed energy into an ally that I can see within 30 ft of me" + "\n   " + "The first time the ally is hit within the next minute, the attacker takes radiant damage",
			additional : ["", "2d10+2", "2d10+3", "2d10+4", "2d10+5", "2d10+6", "2d10+7", "2d10+8", "2d10+9", "2d10+10", "2d10+11", "2d10+12", "2d10+13", "2d10+14", "2d10+15", "2d10+16", "2d10+17", "2d10+18", "2d10+19", "2d10+20"]
		},
		"subclassfeature6" : {
			name : "Blessed Healer",
			source : [["UA:CDD", 3]],
			minlevel : 6,
			description : "\n   " + "When I restore HP to another with a spell, I regain 2 + the spell (slot) level in HP",
			calcChanges : {
				spellAdd : [
					// note that several healing spells are not present here because they don't restore hp at casting (only later)
					function (spellKey, spellObj, spName) {
						var startDescr = spellObj.description;
						switch (spellKey) {
							case "life transference" :
								spellObj.description = spellObj.description.replace("Necrotic", "Necro").replace(", and", ",") + "; I then regain 2+SL HP";
								break;
							case "mass heal" :
								spellObj.description = "Heal 700 HP, split over crea in range, each then +11 HP; also cures blind, deaf, diseases; I heal +11 HP";
								break;
							case "power word heal" :
								spellObj.description = spellObj.description.replace(/heals all.*/i, "full HP; not charmed, frightened, paralyzed, stunned; can stand up as rea; if other, I heal 2+SL");
								break;
							case "regenerate" :
								spellObj.description = spellObj.description.replace(" for rest of duration", "");
							case "heal" :
								spellObj.description = spellObj.description.replace("all diseases", "diseases");
							case "cure wounds" :
							case "healing word" :
							case "mass cure wounds" :
							case "mass healing word" :
							case "prayer of healing" :
								spellObj.description = spellObj.description.replace(/creatures?/i, "crea").replace("within", "in").replace("spellcasting ability modifier", "spellcasting ability mod") + "; if other, I heal 2+SL";
						}
						return startDescr !== spellObj.description;
					},
					"When I cast a spell that restores hit points to another creature than myself at the moment of casting, I also heal 2 + the level of the spell slot (or spell slot equivalent) hit points."
				]
			}
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : [["UA:CDD", 3]],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
			additional : levels.map(function (n) {
				if (n < 8) return "";
				return "+" + (n < 14 ? 1 : 2) + "d8 radiant damage";
			}),
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.cleric && v.isWeapon) {
							fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 radiant damage';
						}
					},
					"Once per turn, I can have one of my weapon attacks that hit do extra radiant damage."
				]
			}
		},
		"subclassfeature17" : {
			name : "Indomitable Defense",
			source : [["UA:CDD", 3]],
			minlevel : 17,
			usages : 1,
			recovery : "short rest",
			action : [["action", " (transfer)"], ['bonus action', ' (return)']],
			description : "\n   " + "I gain resistance to two of: bludgeoning, necrotic, piercing, radiant, or slashing damage" + "\n   " + "Whenever I finish a short or long rest, I can change the damage types chosen" + "\n   " + "As an action, I can transfer both resistances to one creature I touch" + "\n   " + "As a bonus action, I can transfer the resistances back to myself" + "\n   " + "Otherwise, the creature keeps this resistance until the end of my next short or long rest"
		}
	}
});
