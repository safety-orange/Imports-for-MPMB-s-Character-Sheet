var iFileName = "legacy_20141209_DMG.js";
RequiredSheetVersion("24.1.3");
// This file adds player-options from the 2014 Dungeon Master's Guide to MPMB's Character Record Sheet that have not (yet) been replaced in any rulebook for the 5.5e (2024) rules

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
		"subclassfeature3": {
			name: "Bonus Proficiency",
			source: [["D", 96]],
			minlevel: 3,
			description: desc("I gain proficiency with Martial weapons."),
			weaponProfs: [false, true],
			spellcastingExtra: ["false life", "ray of sickness", "blindness/deafness", "ray of enfeeblement", "animate dead", "vampiric touch", "blight", "death ward", "antilife shell", "cloudkill"],
		},
		"subclassfeature3.1": {
			name: "Reaper",
			source: [["D", 96]],
			minlevel: 3,
			description: desc("I learn one Necromancy cantrip of my choice from any spell list. My Necromancy, single-target cantrips can affect two targets within 5 ft of each other."),
			spellcastingBonus: [{
				name: "Reaper",
				"class": "any",
				school: ["Necro"],
				level: [0, 0],
			}],
			calcChanges: {
				spellAdd: [
					function (spellKey, spellObj, spName) {
						if (spellObj.school !== "Necro" || spellObj.level !== 0) return;
						var in5ft = "in 5 ft";
						if (What("Unit System") === "metric") in5ft = ConvertToMetric(in5ft, 0.5);
						// The shorter description if the spell has one and it wasn't changed yet, with the sheet's usual abbreviations
						var sDescr = getSpellShortDescription(spellKey, spellObj);
						var sNew = sDescr;
						switch (spellKey) {
							case "chill touch":
							case "poison spray":
								sNew = sNew.replace(/(melee|rngd) spell atk/i, "2 crea " + in5ft + " spell atk");
								break;
							case "spare the dying":
								sNew = sNew.replace(/1 living crea/i, "1 (or 2 " + in5ft + ") living crea");
								break;
							case "toll the dead":
							default:
								sNew = sNew.replace(/\b1 crea\b/i, "2 crea " + in5ft);
						}
						if (sNew === sDescr) return;
						spellObj.description = sNew.replace(/\bat CL 5(, 11,? (and |& )?|\/11\/)17\b/, "CL 5/11/17");
						return true;
					},
					"My Necromancy, single-target cantrips can affect two targets within 5 ft of each other.",
				],
			},
		},
		"subclassfeature3.2": {
			name: "Touch of Death",
			source: [["D", 97]],
			minlevel: 3,
			description: desc("When I hit a creature with a melee attack, I can deal extra Necrotic damage."),
			additional: ["", "+9 damage; 1 CD", "+11 damage; 1 CD", "+13 damage; 1 CD", "+15 damage; 1 CD", "+17 damage; 1 CD", "+19 damage; 1 CD", "+21 damage; 1 CD", "+23 damage; 1 CD", "+25 damage; 1 CD", "+27 damage; 1 CD", "+29 damage; 1 CD", "+31 damage; 1 CD", "+33 damage; 1 CD", "+35 damage; 1 CD", "+37 damage; 1 CD", "+39 damage; 1 CD", "+41 damage; 1 CD", "+43 damage; 1 CD", "+45 damage; 1 CD"],
		},
		"subclassfeature6": {
			name: "Inescapable Destruction",
			source: [["D", 97]],
			minlevel: 6,
			description: desc("When I deal Necrotic damage with spells or Channel Divinity, I ignore Resistance to it."),
		},
		"subclassfeature17": {
			name: "Improved Reaper",
			source: [["D", 97]],
			minlevel: 17,
			description: desc("If I cast a 5th-level or lower Necromancy spell that has one target, I can target two. They need to be within 5 ft of each other and I have to provide Material components for both."),
			calcChanges: {
				spellAdd: [
					function (spellKey, spellObj, spName) {
						if (spellObj.school !== "Necro" || !spellObj.level || spellObj.level > 5) return;
						var in5ft = "in 5 ft";
						if (What("Unit System") === "metric") in5ft = ConvertToMetric(in5ft, 0.5);
						// The shorter description if the spell has one and it wasn't changed yet, with the sheet's usual abbreviations
						var sDescr = getSpellShortDescription(spellKey, spellObj);
						var sNew = sDescr;
						switch (spellKey) {
							case "cause fear":
								// the description is already in metric if the sheet is set to it
								sNew = sNew.replace(/1\+1\/SL crea \(not Construct\/Undead\), each max (\d+[.,]?\d* ?(ft|m)) apart,/, "2 crea " + in5ft + " or 1+1/SL crea max $1 apart (no Construct/Undead)")
									.replace("save end of each turn", "save EoT");
								break;
							case "enervation":
								sNew = sNew.replace(/action/i, "Act").replace(/\b1 crea\b/i, "2 crea " + in5ft);
								break;
							case "feign death":
								sNew = sNew.replace(/Willing crea looks dead/i, "2 willing " + in5ft + " look dead")
									.replace(/resist\. all dmg but/i, "resist all but");
								break;
							case "gentle repose":
								sNew = sNew.replace(/1 corpse/i, "2 corpses " + in5ft)
									.replace(/add duration to time limit for raising dead/i, "add duration to raise dead time limit");
								break;
							case "raise dead":
							case "revivify":
							case "reincarnate":
								sNew = sNew
									.replace(/Bring corpse that died within the last/i, "Bring 2 corpses " + in5ft + " that died in last")
									.replace(/Bring humanoid that died in last 10 days to life in a new random adult body/i, "Bring 2 Humanoids " + in5ft + " dead \u226410 days to life in new random body")
									.replace(/(\d+k? ?gp cons)\b/i, "$1 \xD72");
								break;
							case "ray of sickness":
								sNew = sNew.replace(/rngd spell atk/i, "2 crea " + in5ft + " rngd spell atk");
								break;
							case "speak with dead":
								sNew = sNew.replace(/1 corpse with mouth .*? 10 days/i, "2 corpses " + in5ft + " with mouths each answer 5 questions with what they knew; same 1/10 days");
								break;
							case "blight":
							case "contagion":
							case "ray of enfeeblement":
							default:
								sNew = sNew.replace(/\b1 crea\b/i, "2 crea " + in5ft)
									.replace(/Plant crea auto-fails save/i, "Plants auto-fail save") // blight
									.replace(/save at end of 5 turns/i, "save EoT 5 turns") // contagion
									.replace(/deal -1d8 dmg, repeat save EoT/i, "-1d8 dmg, save EoT"); // ray of enfeeblement
						}
						if (sNew === sDescr) return;
						spellObj.description = sNew;
						// Material components that the spell consumes have to be provided for each target
						if (spellObj.compMaterial && (/consume/i.test(spellObj.compMaterial) || /\u2020/.test(spellObj.components))) {
							spellObj.compMaterial += " (once for each target)";
						}
						return true;
					},
					"My Necromancy, single-target 5th-level or lower spells can affect two targets within 5 ft of each other if both are within range of the spell. The spells still require Material components for each target separately.",
				],
			},
		},
	},
}, true);
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
			description: desc("As an action, one Undead (CR < Paladin level) I can see in 30 ft must make a Wis save or obey my commands for 24 hours or until I use this on another."),
			action: [["action", " (Channel Divinity)"]],
			spellcastingExtra: ["hellish rebuke", "inflict wounds", "crown of madness", "darkness", "animate dead", "bestow curse", "blight", "confusion", "contagion", "dominate person"],
		},
		"subclassfeature3.1": {
			name: "Dreadful Aspect",
			source: [["D", 97]],
			minlevel: 3,
			additional: "1 Channel Divinity",
			description: desc("As an action, any creature of my choice within 30 ft that can see me must make a Wisdom save or be Frightened for 1 min or until it succeeds on a save at the end of its turn. It can't save at the end of its turn if it's still within 30 ft of me."),
			action: [["action", " (Channel Divinity)"]],
		},
		"subclassfeature7": {
			name: "Aura of Hate",
			source: [["D", 97]],
			minlevel: 7,
			description: desc("Fiends/Undead within range and I add my Cha mod as bonus on melee weapon damage. Multiple Auras of Hate don't stack, only the strongest applies."),
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
			description: desc("I have Resistance to Bludgeoning/Piercing/Slashing damage from nonmagical weapons."),
			dmgres: [["Bludgeoning", "Bludg. (nonmagical)"], ["Piercing", "Pierc. (nonmagical)"], ["Slashing", "Slash. (nonmagical)"]],
		},
		"subclassfeature20": {
			name: "Dread Lord",
			source: [["D", 97]],
			minlevel: 20,
			description: desc([
				"As an action, I gain a 30-ft aura of gloom that reduces Bright Light to dim for 1 min. If Frightened of me, foes starting their turn in the aura take 4d10 Psychic damage. Attacks vs my allies and me inside the aura have Disadvantage if attackers need sight.",
				"As a Bonus Action, I can make a melee spell attack vs a target inside the aura. If this attack hits, it does 3d10 + Charisma modifier Necrotic damage.",
			]),
			recovery: "Long Rest",
			usages: 1,
			action: [["action", ""]],
		},
	},
}, true);
