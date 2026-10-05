var iFileName = "pub_20141209_DMG.js";
RequiredSheetVersion("24.1.0");
// This file adds all the player-material from the Dungeon Master's Guide to MPMB's Character Record Sheet

// Define the source
SourceList["D"] = {
	name: "2014 Dungeon Master's Guide",
	abbreviation: "DMG'14",
	group: "Legacy Sources",
	url: "https://dnd.wizards.com/products/dungeon-masters-guide",
	date: "2014/12/09",
	defaultExcluded: true,
};

// Subclasses
AddSubClass("cleric", "death domain", {
	regExpSearch: /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(death|dead|dying)).*$/i,
	subname: "Death Domain",
	source: [["D", 96]],
	features: {
		"subclassfeature3.0": {
			name: "Bonus Proficiency",
			source: [["D", 96]],
			minlevel: 3,
			description: desc("I gain proficiency with martial weapons"),
			weaponProfs: [false, true],
			spellcastingExtra: ["false life", "ray of sickness", "blindness/deafness", "ray of enfeeblement", "animate dead", "vampiric touch", "blight", "death ward", "antilife shell", "cloudkill"],
		},
		"subclassfeature3.1": {
			name: "Reaper",
			source: [["D", 96]],
			minlevel: 3,
			description: desc([
				"I learn one necromancy cantrip of my choice from any spell list",
				"My necromancy, single-target cantrips can affect two targets within 5 ft of each other",
			]),
			spellcastingBonus: [{
				name: "Reaper",
				"class": "any",
				school: ["Necro"],
				level: [0, 0],
			}],
			calcChanges: {
				spellAdd: [
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
									spellObj.description = spellObj.description.replace(/1 crea(ture)?/i, "2 crea in 5 ft").replace("disadvantage", "Disadv").replace("save halves", "save half");
							}
							return startDescr !== spellObj.description;
						};
					},
					"My necromancy, single-target cantrips can affect two targets within 5 ft of each other.",
				],
			},
		},
		"subclassfeature3.2": {
			name: "Touch of Death",
			source: [["D", 97]],
			minlevel: 3,
			description: desc("When I hit a creature with a melee attack, I can deal extra Necrotic damage"),
			additional: ["", "+9 damage; 1 CD", "+11 damage; 1 CD", "+13 damage; 1 CD", "+15 damage; 1 CD", "+17 damage; 1 CD", "+19 damage; 1 CD", "+21 damage; 1 CD", "+23 damage; 1 CD", "+25 damage; 1 CD", "+27 damage; 1 CD", "+29 damage; 1 CD", "+31 damage; 1 CD", "+33 damage; 1 CD", "+35 damage; 1 CD", "+37 damage; 1 CD", "+39 damage; 1 CD", "+41 damage; 1 CD", "+43 damage; 1 CD", "+45 damage; 1 CD"],
		},
		"subclassfeature6": {
			name: "Inescapable Destruction",
			source: [["D", 97]],
			minlevel: 6,
			description: desc("When I deal Necrotic damage with spells or Channel Divinity, I ignore resistance to it"),
		},
		"subclassfeature17": {
			name: "Improved Reaper",
			source: [["D", 97]],
			minlevel: 17,
			description: desc([
				"If I cast a 5th-level or lower necromancy spell that has one target, I can target two",
				"They need to be within 5 ft of each other; I have to provide material comp. for both",
			]),
			calcChanges: {
				spellAdd: [
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
									spellObj.description = spellObj.description.replace(/1 crea(ture)?/i, "2 crea in 5 ft").replace("disadvantage", "Disadv").replace("save halves", "save half");
							}
							return startDescr !== spellObj.description;
						};
					},
					"My necromancy, single-target 5th-level or lower spells can affect two targets within 5 ft of each other if both are within range of the spell. The spells still require material components for each target separately.",
				],
			},
		},
	},
});
AddSubClass("paladin", "oathbreaker", {
	regExpSearch: /^((?=.*blackguard)|((?=.*(oath.*breaker|breaker.*oath))((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|warrior|warlord|trooper)))))).*$/i,
	subname: "Oathbreaker",
	source: [["D", 97]],
	features: {
		"subclassfeature3": {
			name: "Control Undead",
			source: [["D", 97]],
			minlevel: 3,
			additional: "1 Channel Divinity",
			description: desc([
				"As an action, one Undead (CR < paladin level) I can see in 30 ft must make a Wis save",
				"If failed, it must obey my commands for 24 hours or until I use this on another",
			]),
			action: [["action", ""]],
			spellcastingExtra: ["hellish rebuke", "inflict wounds", "crown of madness", "darkness", "animate dead", "bestow curse", "blight", "confusion", "contagion", "dominate person"],
		},
		"subclassfeature3.1": {
			name: "Dreadful Aspect",
			source: [["D", 97]],
			minlevel: 3,
			additional: "1 Channel Divinity",
			description: desc([
				"As an action, anyone I choose within 30 ft that can see me must make a Wisdom save",
				"If failed, it is Frightened for 1 min or until it succeeds a save at the end of its turns",
				"It can't save at the end of its turn if it's still within 30 ft of me",
			]),
			action: [["action", ""]],
		},
		"subclassfeature7": {
			name: "Aura of Hate",
			source: [["D", 97]],
			minlevel: 7,
			description: desc([
				"Fiends/Undead within range and I add my Cha mod as bonus on melee weapon damage",
				"Multiple Auras of Hate don't stack; only the strongest applies",
			]),
			additional: ["", "", "", "", "", "", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "30-foot aura", "30-foot aura", "30-foot aura"],
			calcChanges: {
				atkAdd: [
					function (fields, v) {
						if (v.isMeleeWeapon) {
							fields.Description += (fields.Description ? "; " : "") + "Cha mod added to damage";
						}
					},
					"I add my Charisma modifier to my melee weapon damage.",
				],
				atkCalc: [
					function (fields, v, output) {
						if (v.isMeleeWeapon) {
							output.extraDmg += Number(What("Cha Mod"));
						};
					},
				],
			},
		},
		"subclassfeature15": {
			name: "Supernatural Resistance",
			source: [["D", 97]],
			minlevel: 15,
			description: desc("I have resistance to Bludgeoning/Piercing/Slashing damage from nonmagical weapons"),
			dmgres: [["Bludgeoning", "Bludg. (nonmagical)"], ["Piercing", "Pierc. (nonmagical)"], ["Slashing", "Slash. (nonmagical)"]],
		},
		"subclassfeature20": {
			name: "Dread Lord",
			source: [["D", 97]],
			minlevel: 20,
			description: desc([
				"As an action, I gain a 30-ft aura of gloom that reduces bright light to dim for 1 min",
				"If Frightened of me, foes starting their turn in the aura take 4d10 Psychic damage",
				"Attacks vs my allies and me inside the aura have Disadvantage if attackers need sight",
				"As a Bonus Action, I can make a melee spell attack vs a target inside the aura",
				"If this attack hits, it does 3d10 + Charisma modifier Necrotic damage",
			]),
			recovery: "Long Rest",
			usages: 1,
			action: [["action", ""]],
		},
	},
});
