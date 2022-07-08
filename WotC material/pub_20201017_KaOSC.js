var iFileName = "pub_20201017_KaOSC.js";
RequiredSheetVersion("13.1.0");

// Define the source
SourceList.KaOSC = {
	name : "Knuckleheads and Other Such Curiosities",
	abbreviation : "KaOSC",
	group : "Adventurers League",
	url : "https://www.dmsguild.com/product/328568/DDAL0013-Knuckleheads--Other-Such-Curiosities-A-Travelers-Guide-to-Icewind-Dale",
	date : "2020/10/17"
};

// Add subclasses
AddSubClass("warlock", "animal spirits", {
	regExpSearch : /^(?=.*(warlock|patron))(?=.*(animal|spirit|beast|nature)).*$/i,
	subname : "Animal Spirits",
	source : ["KaOSC", 7],
	spellcastingExtra : ["animal friendship", "entangle", "beast sense", "locate animals or plants", "conjure animals", "water breathing", "dominate beast", "giant insect", "awaken", "insect plague"],
	features : {
		"subclassfeature1": {
			name : "Animal Tongue",
			source : ["KaOSC", 7],
			minlevel : 1,
			description : desc([
				"I can speak to any beast that can hear me to share general knowledge or learn of its current condition and emotional state."
			])
		},
		"subclassfeature6": {
			name : "Beast's Resilience",
			source : ["KaOSC", 7],
			minlevel : 6,
			description : desc([
				"When I use an action to cast a warlock cantrip, spell, or intcantation, I can use a bonus action to add my Charisma modifier to my AC (min +1) and gain resistance to bludgeoning, piercing, and slashing dmg until the end of my next turn.",
			]),
			usages : 3,
			recovery : "short rest",
			action : ["bonus", ""]
		},
		"subclassfeature10": {
			name : "Beast's Savagery",
			source : ["KaOSC", 7],
			minlevel : 10,
			description : desc([
				"My allies gain advantage when attack enemies adjacent to me. I also gain another use of Beast's Resilience for a total of 4."
			]),
			usages : 4,
			action : ["bonus","Beast's Resilience"],
			recovery : "short rest"
		},
		"subclassfeature14": {
			name : "Full of Spirits",
			source : ["KaOSC", 7],
			minlevel : 14,
			description : desc([
				"I gain a swim speed and a climb speed equal to my walking speed."
			]),
			speed : { swim : { spd : "walk", enc : "walk" } },
			speed : { climb : { spd : "walk", enc : "walk" } }
		}
	}
});

AddSubClass("fighter", "big game hunter", {
	regExpSearch : /^(?=.*(fighter))(?=.*(beast|catious|careful|slayer)).*$/i,
	subname : "Big Game Hunter",
	source : ["KaOSC", 8],
	features : {
		"subclassfeature3": {
			name : "Catious Attacker",
			source : ["KaOSC", 8],
			minlevel : 3,
			description : desc([
				"Once per turn against a Large or larger creature, deal an additional damage when I hit with a weapon attack.",
				"I gain adv. on Str or Dex saving throws triggered by nonmagical attacks of Huge or larger creatures.",
				"I gain adv on Intelligence(Nature) and Wisdom(Survival) checks when investigating their habitats."
			]),
			action : ["action",""],
			additional : levels.map(function (n) {
				if (n < 10) return "1d6";
				return (n < 14 ? "1d8" : "1d12");
			})
		},
		"subclassfeature7": {
			name : "Careful Defense",
			source : ["KaOSC", 8],
			minlevel : 7,
			description : desc([
				"As a reaction when I would suffer a critical hit from a melee weapon attack, I can suffer a normal hit instead",
				"If the attacker is Huge or larger, I can make a weapon attack against them as part of the reaction."
			]),
			action : ["reaction",""]
		},
		"subclassfeature10": {
			name : "Coordinated Effort",
			source : ["KaOSC", 8],
			minlevel : 10,
			description : desc([
				"When I use Action Surge, all allies within 30 feet that can hear me can make a weapon attack as a reaction."
			])
		},
		"subclassfeature15": {
			name : "Beast Slayer",
			source : ["KaOSC", 8],
			minlevel : 15,
			description : desc([
				"I can use the extra damage dice from Cautious Attacker on each successful weapon attack rather than once per turn."
			])
		},
		"subclassfeature18": {
			name : "All or Nothing",
			source : ["KaOSC", 8],
			minlevel : 18,
			description : desc([
				"As a bonus action, I can expend up to 10 Hit Dice to bolster my next attack. If the attack hits, add the Hit Dice to the attack's damage.",
				"Hit Dice used this was are expended whether the attack hits or misses. They are not doubled in the event of a critical hit.",
				"I must make a Constitution saving throw with DC 10 + # of Hit Dice expended, upon failure I fall unconscious for 1 min."
			]),
			usages : 1,
			recovery : "short rest"
		}
	}
});

AddSubClass("druid", "circle of frost", {
	regExpSearch : /^(?=.*(driud|shaman))(?=.*(arctic|cold|frost)).*$/i,
	subname : "Circle of Frost",
	source : ["KaOSC", 9],
	features : {
		"subclassfeature2": {
			name : "Circle Spells",
			source : ["KaOSC", 9],
			minlevel : 2,
			description : desc ([
				"My mystical connection to frost infuses me with the ability to cast Ray of Frost and certain spells. These are always prepared, but don't count against the number of spells I can prepare"
			]),
			spellcastingBonus : {
				name : "Circle Spells",
				spells : ["ray of frost"],
				selection : ["ray of frost"]
			},
			spellcastingExtra : ["blur", "darkness", "elemental weapon", "gaseous form", "faithful hound", "resilient sphere", "cone of cold", "steel wind strike"],
			spellChanges : {
				"elemental weapon" : {
					description : "+1 magical weapon; +1d4 Cold dmg; SL5: +2/+2d4, SL7: +3/+3d4",
					descriptionFull : "A nonmagical weapon I touch becomes a magic weapon of cold. For the duration, the weapon has a +1 bonus to attack rolls and deals an extra 1d4 damage of the chosen type when it hits." + AtHigherLevels + "When I cast this spell using a spell slot of 5th or 6th level, the bonus to attack rolls increases to +2 and the extra damage increases to 2d4. When I use a spell slot of 7th level or higher, the bonus increases to +3 and the extra damage increases to 3d4."
				}
			}
		},
		"subclassfeature2.2": {
			name : "Coat of Frost",
			source : ["KaOSC", 9],
			minlevel : 2,
			description : desc([
				"I may use a reaction to deal cold damage to a creature that moves into or starts 10 feet of me, unless it succeeds on a Constitution saving throw against my spell save DC."
			]),
			action : ["reaction", ""],
			additional : levels.map(function (n) {
					if (n < 6) return "1d6";
					return (n < 10 ? "1d8" : "1d10");
			})
		},
		"subclassfeature6": {
			name : "Hibernation",
			source : ["KaOSC", 9],
			minlevel : 6,
			description : desc([
				"When I and up to 6 creatures I choose take a short rest, add 2 to the number of hit points regained per hit die rolled.",
				"In addition, a creature can remove one level of exhaustion at the end of the short rest."
			]),
		},
		"subclassfeature10": {
			name : "Invigorating Shelter",
			source : ["KaOSC", 9],
			minlevel : 10,
			description : desc([
				"As a bonus action, I can create a 30-ft radius aura around me of cool air providing resistance to all creatures within it from cold and fire dmg for 1 min.",
			]),
			usages : "Wisdom mod/per",
			usagecalc : "event.value = Math.max(1, tDoc.getField(\"Wis Mod\").value);",
			action : ["bonus", ""],
			recovery : "short rest"
		},
		"subclassfeature14": {
			name : "Bitter Zephyr",
			source : ["KaOSC", 9],
			minlevel : 14,
			description : desc([
				"If I drop to 0hp and don't die outright, I drop to 1hp instead.",
				"Each creature of my choice within 30-ft that I can see takes 2d10 + Druid level cold dmg.",
				"I also gain fly speed equal to my walking speed for 1 minute."
			]),
			usages : 1,
			action : ["action",""],
			recovery : "long rest"
		}
	}
});

AddSubClass("cleric", "cold domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(cold|frost)).*$/i,
	subname : "Cold Domain",
	source : ["KaOSC", 10],
	spellcastingExtra : ["absorb elements", "ice knife", "darkness", "gust of wind", "elemental weapon", "ice storm", "conjure minor elementals", "protection from energy", "commune with nature", "cone of cold"],
	features : {
		"subclassfeature1": {
			name : "Bonus Proficiencies",
			source : ["KaOSC", 10],
			minlevel : 1,
			skills : ["Survival", "Nature"],
			description : desc([
				"I gain proficiency in Survival and Nature skills"
			]),
			spellChanges : {
				"elemental weapon" : {
					description : "+1 magical weapon; +1d4 Cold dmg; SL5: +2/+2d4, SL7: +3/+3d4",
					descriptionFull : "A nonmagical weapon I touch becomes a magic weapon of cold. For the duration, the weapon has a +1 bonus to attack rolls and deals an extra 1d4 damage of the chosen type when it hits." + AtHigherLevels + "When I cast this spell using a spell slot of 5th or 6th level, the bonus to attack rolls increases to +2 and the extra damage increases to 2d4. When I use a spell slot of 7th level or higher, the bonus increases to +3 and the extra damage increases to 3d4."
				}
			}	
		},
		"subclassfeature1.1": {
			name : "Brilliant, Deadly Cold",
			source : ["KaOSC", 10],
			minlevel : 1,
			description : desc([
				"At first level, choose necrotic or radiant dmg. When a cantrip or spell that deals cold or the chosen type, I can interchange them."
			]),
			usages : "Wisdom mod/per",
			usagecalc : "event.value = Math.max(1, tDoc.getField(\"Wis Mod\").value);",
			recovery : "short rest"
		},
		"subclassfeature2": {
			name : "Channel Divinity : Icy Flesh",
			source : ["KaOSC", 10],
			minlevel : 2,
			description : desc([
				"As an action, I can make my AC 18 for 1 minute.",
				"Attackers that hit me with melee attacks take",
			]),
			additional : levels.map(function (n) {
				return (n < 11 ? "1d6" : "3d6") + " cold dmg";
			}),
			recovery : "short rest"
		},
		"subclassfeature6": {
			name : "Absolute Cold",
			source : ["KaOSC", 10],
			minlevel : 6,
			description : desc([
				"Cold damage dealt by cleric spells and Channel Divinity options ignore resistance to cold damage.",
				"Creatures immune to cold damage are only resistant to my cold spells."
			]),
		},
		"subclassfeature8": {
			name : "Chilling Cramps",
			source : ["KaOSC", 11],
			minlevel : 8,
			description : desc([
				"When I deal cold damage to a creature, it's speed is reduced by 10-ft until the start of my next turn."
			]),
		},
		"subclassfeature17": {
			name : "One with the Ice",
			source : ["KaOSC", 11],
			minlevel : 17,
			description : desc([
				"I gain immunity to cold and fire damage. I gained resistance to bludgeoning, piercing, and slashing dmg from nonmagical attacks."
			]),
			dmgres : ["Bludgeoning", "Piercing", "Slashing"],
			savetxt : { immune : ["Cold","Fire"] },
		}
	}
});

AddSubClass("bard", "college of respite", {
	regExpSearch : /^(?=.*(bard|performer))(?=.*(comforting|respite|college)).*$/i,
	subname : "College of Respite",
	source : ["KaOSC", 11],
	features : {
		"subclassfeature3": {
			name : "Bonus Proficiencies",
			source : ["KaOSC", 11],
			minlevel : 3,
			toolProfs : ["Cook's Utensils", "Herbalism Kit"],
			description : desc([
				"I gain proficiency with cook's utensils and herbalism kits."
			])
		},
		"subclassfeature3.1": {
			name : "Comforting Song",
			source : ["KaOSC", 11],
			minlevel : 3,
			description : desc([
				"When I cast a spell of 1st lvl or higher to restore hp, I can expend one Bardic Inspiration and add the result to the effect."
			])
		},
		"subclassfeature6": {
			name : "Reaffirming Pressure",
			source : ["KaOSC", 11],
			minlevel : 6,
			description : desc([
				"I may use a reaction, when a creature that I can see and hear within 30-ft utilizes one of my Bardinc Inspirations to allow them to reroll to die, using the new roll"
			]),
			action : ["reaction",""]
		},
		"subclassfeature14": {
			name : "Reliable Comfort",
			source : ["KaOSC", 11],
			minlevel : 14,
			description : desc([
				"When I use Comforting Song, I may roll a d6 and use it instead of expending a Bardic Inspiration die."
			])
		}
	}
});

AddSubClass("sorcerer", "frostblooded", {
	regExpSearch : /^(?=.*(sorcerer))(?=.*(frostblooded|frozen|blood)).*$/i,
	subname : "Frostblooded",
	source : ["KaOSC", 11],
	features : {
		"subclassfeature1": {
			name : "Frost Magic",
			source : ["KaOSC", 11],
			minlevel : 1,
			description : desc([
				"I learn additional spells for this domain, each spell counts as a sorcerer spell for me, but doesn't count against the number of sorcerer spells I know, nor can these spells be replaced."
			]),
			spellcastingExtra : ["armor of agathys", "ice knife", "snilloc's snowball swarm", "warding wind", "elemental weapon", "huner of hadar", "elemnetal bane", "ice storm", "cone of cold", "control winds"],
			spellChanges : {
				"elemental weapon" : {
					description : "+1 magical weapon; +1d4 Cold dmg; SL5: +2/+2d4, SL7: +3/+3d4",
					descriptionFull : "A nonmagical weapon I touch becomes a magic weapon of cold. For the duration, the weapon has a +1 bonus to attack rolls and deals an extra 1d4 damage of the chosen type when it hits." + AtHigherLevels + "When I cast this spell using a spell slot of 5th or 6th level, the bonus to attack rolls increases to +2 and the extra damage increases to 2d4. When I use a spell slot of 7th level or higher, the bonus increases to +3 and the extra damage increases to 3d4."
				}
			}
		},
		"subclassfeature1.1": {
			name : "Armor of Hoarfrost",
			source : ["KaOSC", 12],
			minlevel : 1,
			description : desc([
				"Without armor, my AC is 10 + Proficiency bonus + Dexterity modifier"
			]),
			addarmor : "Unarmored Defense (Prof)"
		},
		"subclassfeature6": {
			name : "Piercing Cold",
			source : ["KaOSC", 12],
			minlevel : 6,
			description : desc([
				"When I deal cold damage with a spell, I may add my Charisma modifier to one damage roll of the spell.",
				"At the same time, I may spend 1 sorcery point to gain resistance to that cold damage for 1 hour"
			]),
		},
		"subclassfeature14": {
			name : "Heart of the Blizzard",
			source : ["KaOSC", 12],
			minlevel : 14,
			description : desc([
				"As a bonus action, I can spend 5 sorcery points to transform myself into a floating snowy cloud for 1 min.",
				"While in this form, I have a fly speed of 20 - ft gain resistance to nonmagical damage and immunity to cold dmg.",
				"I may pass through small cracks, but treat liquid as solid. I can not fall and remain hovering even while stunned or incapacitated.",
				"I cannot talk, manipulate objects, cast spells or attack other than hurl 3d6 bludgeoning ice."
			]),
			action : ["bonus", ""]
		},
		"subclassfeature18": {
			name : "Frozen Apotheosis",
			source : ["KaOSC", 12],
			minlevel : 18,
			description : desc([
				"I have immunity to cold damage, no longer age, and can’t be aged magically.",
				"In addition, I no longer need to breathe or consume food or water"
			]),
			savetxt : { immune : ["Cold"] }
		},
	}
});

AddSubClass("Barbarian", "path of crystalline fury", {
	regExpSearch : /^(?=.*(barbarian))(?=.*(crystalline|fury)).*$/i,
	subname : "Path of Crystalline Fury",
	source : ["KaOSC", 12],
	features : {
		"subclassfeature3": {
			name : "Chardalyn Infusion",
			source : ["KaOSC", 12],
			minlevel : 3,
			description : desc([
				"My unarmed strikes may be augmented with chardalyn to deal 1d4+Str Mod slashing dmg instead of bludgeoning.",
				"While raging, I may use a bonus action to make one unarmed attack against a target within 5-ft."
			]),
			action : ["bonus action",""],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.baseWeaponName == "unarmed strike" && (/\b(chardalyn)\b/i).test(v.WeaponText)){
							fields.Description += (fields.Description ? '; ' : '') + 'slashing damage';
							fields.Damage_Die = '1d4';
						}
					},
					"My chardalyn unarmed strikes deal 1d4+Str Mod slashing damage."
				]
			}
		},
		"subclassfeature6": {
			name : "Chardalyn Regeneration",
			source : ["KaOSC", 13],
			minlevel : 6,
			description : desc([
				"If I succeed against a spell saving throw while raging, I may use a reaction to regain hp equal to the spell's level times my proficiency mod.",
				"I may only use this once per rage. Further, unarmed strikes count as magical when overcoming resistances and immunities."
			]),
			action : ["reaction", ""]
		},
		"subclassfeature10": {
			name : "Chardalyn Absorption",
			source : ["KaOSC", 13],
			minlevel : 10,
			description : desc([
				"If I succeed against a spell saving throw, I may absorb the spell as a reaction. The spell is neutralized.",
				"Before my rage ends, I can cast the absorbed spell using the slot level, spell save DC, spell attack bonus, and ability of the original caster",
				"I may only use this once per rage. The spell is lost if not cast before the end of the rage."
			]),
			action : ["reaction", ""],
		},
		"subclassfeature14": {
			name : "Chardalyn Perfection",
			source : ["KaOSC", 13],
			minlevel : 14,
			description : desc([
				"I may now use Spell Asbsorption class feature twice per rage.",
				"Also my unarmed strikes increase to 1d10."
			]),
			calcChanges : {
				atkAdd : [
					function (fiends, v) {
						if (v.baseWeaponName == "unarmed strike") {
							fields.Damage_Die = '1d10';
						}
					},
					"Chardalyn Perfection : My unarmed strikes increase to 1d10."
				]
			}
		}
	}
});

AddSubClass("barbarian", "path of the raging hearth", {
	regExpSearch : /^(?=.*(barbarian))(?=.*(raging|hearth)).*$/i,
	subname : "Path of the Raging Hearth",
	source : ["KaOSC", 13],
	features : {
		"subclassfeature3": {
			name : "Surging Heat",
			source : ["KaOSC", 13],
			minlevel : 3,
			description : desc([
				"I can channel fire through my attacks. For the duration of a rage, the first attack that hits on each turn does additional fire dmg."
			]),
			additional : levels.map(function (n) {
				return (n < 11 ? "1d4" : "1d8") + " fire dmg";
			})
		},
		"subclassfeature6": {
			name : "Flame-Souled",
			source : ["KaOSC", 13],
			minlevel : 6,
			description : desc([
				"I gain resistance to cold and fire damage  while raging. Allies within 5 feet also gain cold resistance."
			]),
			dmgres : [
				["Cold", "Cold (in rage)"],
				["Fire", "Fire (in rage)"]
			]
		},
		"subclassfeature10": {
			name : "Spark of Life",
			source : ["KaOSC", 14],
			minlevel : 10,
			description : desc([
				"I may use a reaction to expend one rage to provide comfort and healing to allies within 30-ft.",
				"A chosen ally can immediate spend a number of hit dice up to my Con mod (min 1) to regain hp as if a short rest.",
				"Alternatively, I can remove one level of exhaustion instead of regaining hps."
			]),
			usages : "Constitution mod/per ",
			usagescalc : "event.value = Math.max(1, tDoc.getField(\"Con Mod\").value);",
			recovery : "short rest",
			action : ["reaction", ""]
		},
		"subclassfeature14": {
			name : "Spiritual Conflagration",
			source : ["KaOSC", 14],
			minlevel : 14,
			description : desc([
				"If I am reduced to 0 hp, I am instead reduced to 1hp instead.",
				"In addition, creatures within 30-ft gain temporary hp equal to half my barbarian level."
			]),
			usages : 1,
			recovery : "long rest"
		},
	}
});

AddSubClass("wizard", "primal magic", {
	regExpSearch : /^(?=.*(wizard))(?=.*(primal|warcaster)).*$/i,
	subname : "Primal Magic",
	source : ["KaOSC", 14],
	features : {
		"subclassfeature2": {
			name : "Martial Training",
			source : ["KaOSC", 14],
			minlevel : 2,
			description : desc([
				"I gain proficiency with simple weapons, light armor, and gain proficiency in Constitution saving throws."
			]),
			weaponProfs : [true, false],
			armorProfs : [true, false, false, false],
			saves : ["Con"]
		},
		"subclassfeature2.1": {
			name : "Primal State",
			source : ["KaOSC", 14],
			minlevel : 1,
			description : desc([
				"I can enter a primal state for 1 minute. While transformed,I gain AC equal to my Int  modifier (min 1)",
				"Constitution saving throws to maintain concentration are at advantage",
				"Melee spell attacks against adjacent creatures are made with advantage"
			]),
			usages : "Intelligence mod/per ",
			usagecalc : "event.value = Math.max(1, tDoc.getField(\"Int Mod\").value);",
			recovery : "long rest"
		},
		"subclassfeature6": {
			name : "Primal Strie",
			source : ["KaOSC", 14],
			minlevel : 6,
			description : desc([
				"When I use an action to cast a spell or cantrip that is a melee spell, I may make a melee weapon attack as part of the action.",
				"If that attack hits, in addition to normal damage, add force damage equal to my Int modifier."
			]),
		},
		"subclassfeature10": {
			name : "Primal Shield",
			source : ["KaOSC", 14],
			minlevel : 10,
			description : desc([
				"I may use a reaction when I am hit by a melee attack from an adjacent foe to expend a spell slot of 3rd-lvl or higher.",
				"Doing so gives resistance to bludgeoning, piercing, or slashing damage.",
				"Expending a spell slot of 5th-lvl or higher gives resistance to all damage against that attack."
			]),
			action : ["reaction", ""]
		},
		"subclassfeature14": {
			name : "Refocus Energy",
			source : ["KaOSC", 14],
			minlevel : 14,
			description : desc([
				"As a reaction, when damage causes me to lose concentration on a spell due to a failed Constitution saving throw, I may channel the level of the spell into a melee attack.",
				"If the attack hits, deal 1d6 force dmg per slot level of the lost spell."
			]),
			action : ["reaction", ""],
		}
	}
});

AddSubClass("monk", "way of brutality", {
	regExpSearch : /^(?=.*(monk))(?=.*(brutality|frightful)).*$/i,
	subname : "Way of Brutality",
	source : ["KaOSC", 15],
	features : {
		"subclassfeature3": {
			name : "Bonus Proficiencies",
			source : ["KaOSC", 15],
			minlevel : 3,
			skills : ["Intimidation"],
			description : desc([
				"I gain proficiency with the Intimidation skill."
			])
		},
		"subclassfeature3": {
			name : "Dirty Fighting",
			source : ["KaOSC", 15],
			minlevel : 3,
			description : desc([
				"Whenever a creature is hit with an attack granted by Flurry of Blows, I may impose an additional effect until the end of my next turn.",
				"Dexterity saving throw or be blinded, Constitution saving throw or be unable to breath or vocalize, Strength saving throw or be slowed by 5-ft.",
				"Alternatively, I may use Flurry of Blows to make a ranged weapon attack against a target within 30-ft with an improvised weapon. This attack uses Martial Arts die."
			])
		},
		"subclassfeature6": {
			name : "Frightful Presence",
			source : ["KaOSC", 15],
			minlevel : 6,
			description : desc([
				"When I take this action, each creature within 30-ft must succeed a Wis saving throw or become frightened until the end of my next turn."
			]),
			action : ["action",""]
		},
		"subclassfeature11": {
			name : "Brutal Blows",
			source : ["KaOSC", 15],
			minlevel : 11,
			description : desc([
				"When I hit a creature with an attack granted by Flurry of Blows, the attack does an additional Martial Arts die of dmg"
			]),
		},
		"subclassfeature17": {
			name : "Reactive Flurry",
			source : ["KaOSC", 15],
			minlevel : 17,
			description : desc([
				"When a creature provokes an attack of opportunity from me, I may use Flurry of Blows as a reaction."
			]),
		},
	}
});

// Add backgrounds
BackgroundList["arctic guide-kaosc"] = {
	regExpSearch : /^(?=.*arctic)(?=.*guide).*$/i,
	name : "Arctic Guide",
	source : ["KaOSC", 17],
	skills : ["Perception", "Survival"],
	gold : 0,
	equipleft : [
		["Backpack", "", ""],
		["Grappling Hook", "1", ""],
		["Rescuee, Thank I note", "", ""],
		["Snowshoes", "", ""],
		["Cold weather clothing", "", ""],
		["Hemp Rope", "50", ""]
	],
	feature : "Go to Ground",
	trait : [
		"I like nature more than people.",
		"I want to see what is over the next horizon.",
		"If I say I can’t, I will prove I wrong.",
		"I collect a token to remember each place I have been.",
		"Keeping active keeps me alive. I love getting my hands dirty.",
		"I like to wake up early so I can see the sunrise over a new horizon.",
		"My smile gets bigger the more I think I am danger.",
		"I love animals."
	],
	ideal : [
		["Reliable",
			"Reliable : I strive to be the rock everyone else can rely on. (Lawful)"
		],
		["Thrill Seeker",
			"Thrill Seeker : I enjoy pitting myself against the most difficult challenge nature can offer. (Chaotic)"
		],
		["Life First",
			"Life First : Every life matters. (Good)"
		],
		["Greed",
			"Greed : Loved ones will pay anything to save their lost family. (Evil)"
		],
		["Curious",
			"Curious : Seeing new things is what really motivates me. (Any)"
		],
		["Independent",
			"Independent : I do this job because it takes me far from my family. (Chaotic)"
		]
	],
	bond : [
		"I was once rescued from the wild and I want to pay back that debt.",
		"Everyone is worth saving.",
		"Guiding and saving others is just the job I do.",
		"Relying on others is the difference between and death in the artic. I won’t let myself down.",
		"I can never forget the ones I didn’t rescue.",
		"I feel closer to my god when in the wild."
	],
	flaw : [
		"I sometimes take chances I shouldn’t.",
		"I thrive on the adoration of those I save.",
		"I am in it for the rewards offered up by the grateful.",
		"Other’s foolish risks anger me.",
		"There is a particular terrain where something bad once happened and I secretly fear returning to.",
		"If I had to choose between myself and my charge, I choose myself every time."
	],
	toolProfs : [["Land or Water Vehicles", 1], ["Navigator's Tools", "Dex"]]
};

BackgroundList["cold water fisherfolk-kaosc"] = {
	regExpSearch : /^(?=.*cold)(?=.*water)(?=.*fisherfolk).*$/i,
	name : "Cold water fisherfolk",
	source : ["KaOSC", 18],
	skills : ["Nature", "Survival"],
	gold : 0,
	equipleft : [
		["fishing pole", "", ""],
		["tackle box", "1", ""],	
		["tinder box", "", ""],
		["cook's utensils", "", ""],
		["net", "", ""],
		["frying pan", "", ""]
	],
	feature : "Secret Spot",
	trait : [
		"An old salt, I rarely have something to say.",
		"I am thrilled by pulling a big one out of the water.",
		"My lucky lure never fails.",
		"I embrace weather that others hide from.",
		"Fishing has taught me patience.",
		"Hard working folk are trustworthy. The rich can’t be trusted.",
		"Work hard, play hard.",
		"I am always looking for the next fishing spot."
	],
	ideal : [
		["Friendship",
			"Friendship : Fishing makes best friends. (Good)"
		],
		["Plunder",
			"Plunder : Catch them all and move to the next spot. (Evil)"
		],
		["Nature",
			"Nature : Treat nature with respect and she will provide for me. (Neutral)"
		],
		["Luck",
			"Luck : Everything is luck. I just have to been in the right spot and let things come my way. (Chaotic)"
		],
		["Pondering",
			"Pondering : The solitude of fishing helps me think. (Any)"
		],
		["Regimented",
			"Regimented : We’re up at dawn ‘cause I’ve got a schedule to keep. (Lawful)"
		]
	],
	bond : [
		"The water helps me find calm.",
		"My parents taught me to fish and I honor them when I teach others.",
		"My catch provides for those I care about.",
		"Honor the Old Salts, for they have seen the world through nature’s eyes.",
		"My favorite pier is my real home.",
		"My pole is a family heirloom that connects me to my past."
	],
	flaw : [
		"I secretly hate all seafood.",
		"I prefer to be alone and have trouble relating to people.",
		"I can’t abide those who don’t love fishing. I talk about fishing constantly",
		"I put a lot of stock in old wives’ tales and conventional wisdom.",
		"I find it hard to trust new people.",
		"I love a good drink. A poor one isn’t all that bad either."
	],
	toolProfs : ["Cook's utensils", ["Fishing tackle", "Dex"]]
};

BackgroundList["goliath seeker-kaosc"] = {
	regExpSearch : /^(?=.*goliath)(?=.*seeker).*$/i,
	name : "Goliath Seeker",
	source : ["KaOSC", 18],
	skills : ["Insight", "Perception"],
	gold : 5,
	equipleft : [
		["Cold weather clothing", "", ""],
		["Memento of my people", "", ""],
		["Snowshoes", "", ""],
		["Quarterstaff", "", ""],
		["Gaming set or musical instrument", "", ""],
		["Coin Pouch", "", ""]
	],
	feature : "Friendly Faces",
	trait : [
		"I am friendly and always look to meet new people.",
		"The spirits speak to us through signs as long as we listen",
		"Sometimes I adopt a mannerism or name common to others in order to make them more comfortable.",
		"I carry several gifts from my people that I give away to spread my tribe’s culture.",
		"I collect stories from the places I visit.",
		"I am open and easily talk about myself.",
		"I have a favorite pet that was given to me when I left home.",
		"I know I am lucky and always willing to make a bet on myself."
	],
	ideal : [
		["Greed",
			"Greed : I will forge the trade relationships to my people that will make me rich. (Evil)"
		],
		["Loyalty",
			"Loyalty : I will do whatever needs to be done to protect my people. (Lawful)."
		],
		["Compassion",
			"Compassion : We are all in this together and together we are safer. (Good)"
		],
		["Wanderlust",
			"Wanderlust : I left my tribe to see what is out there. (Chaotic)"
		],
		["Knowledge",
			"Knowledge : I scrupulously take notes on others cultures and history so my people can understand them. (Any)"
		],
		["Self-Improvement",
			"Self-Improvement : I travel and absorb experiences in order to improve myself. (Any)"
		]
	],
	bond : [
		"I do everything for my people.",
		"A friend of mine left the tribe years ago and never returned.I seek them even now.",
		"I adopt friends to be my second family.",
		"People matter more than material things or specific ideals.",
		"When I lost my first family, the tribe took me in and I owe them more than I can say.",
		"Money buys safety, and I need to gather riches so I can protect my people."
	],
	flaw : [
		"Despite my smile, I don’t trust those not of my tribe.",
		"I am easily distracted by the creature comforts.",
		"I dislike those who do not follow my religion.",
		"My culture is clearly superior to others.",
		"I dislike foods not found among my people.",
		"I follow the laws of the places I visit even if they are clearly wrong."
	],
	toolProfs : [["Gaming set or musical instrument", 1]],
	languageProfs : [1]
};

BackgroundList["prospector-kaosc"] = {
	regExpSearch : /^(?=.*prospector).*$/i,
	name : "Prospector",
	source : ["KaOSC", 20],
	skills : ["Athletics", "Nature"],
	gold : 0,
	equipleft : [
		["Mason's tools", "", ""],
		["Jeweler's Tools", "", ""],
		["Pans", "3", ""],
		["Empty Sack", "", ""],
		["Favorite Rock Hammer", "", ""]
	],
	feature : "Fool's Gold",
	trait : [
		"Living things are great, but dirt and rocks are what everything is built upon.",
		"I love shiny things.",
		"Loose lips are more dangerous than a winter storm.Stay quiet and watch.",
		"The earth speaks to me, whispering of its secrets.",
		"My attention drifts as my thoughts turn inside.",
		"I will fight to protect what is mine.",
		"I have a tendency to use technical terms from geology and mining.",
		"I have struck it rich before but squandered it and am looking for a second chance."
	],
	ideal : [
		["Logician",
			"Logician : Life is a puzzle to be solved. (Lawful)"
		],
		["Self-Reliance",
			"Self-Reliance : Rely on yourself first. (Any)"
		],
		["Gluttony",
			"Gluttony : Wealth buys comfort and I want it all. (Evil)"
		],
		["Try Anything",
			"Try Anything : There could be a find just about anywhere.Keep searching and I am bound to come across the big find. (Chaotic)"
		],
		["Share",
			"Share : Wealth is meant to be shared. (Good)"
		],
		["Steady",
			"Steady : The land is filled with patience and I try to emulate it. (Neutral)"
		]
	],
	bond : [
		"Those that reward me buy my trust.",
		"Solitude brings inner peace.",
		"I have a large family and I need to strike it rich in order to lift them out of poverty.",
		"An elderly loner left me his journal detailing a great find that I’m searching for.",
		"I believe in those who work hard.",
		"I give it rarely, but if I give my word, I always keep it."
	],
	flaw : [
		"A desire for fame calls me to take chances.",
		"I will do anything to be rich.",
		"I’ve been in the wilderness so long that I have trouble relating to others.",
		"I secretly killed someone and have travelled across the world to escape capture.",
		"I spend freely with no care for tomorrow.",
		"I will steal from others to get ahead."
	],
	toolProfs : ["Mason's tools", "Jeweler's tools"],
	languageProfs : [1]
};

BackgroundList["skald-kaosc"] = {
	regExpSearch : /^(?=.*skald).*$/i,
	name : "Skald",
	source : ["KaOSC", 21],
	skills : ["Performance", "Intimidation"],
	gold : 0,
	equipleft : [
		["Musical Instrument", "", ""],
		["Simple melee weapon decorated with trophies of deeds", "1", ""],
		["Cold weather clothing", "", ""]
	],
	feature : "Share the Fire",
	trait : [
		"I have a story about one of my clan’s great heroes for every occasion.",
		"I smile at everyone, looking to attract my next companion.",
		"The strong and fit are to be admired.",
		"The best things are said loudly.",
		"My dress is garish so that others remember me.",
		"Music is the shared language of the world. Share it.",
		"I tell bold lies about places I’ve been and people I have met to sound more important.",
		"I am easily bored."
	],
	ideal : [
		["Vanity",
			"Vanity : I need to be the prettiest or strongest in the room. (Any)"
		],
		["Tradition",
			"Tradition : The stories of the past teach us how to live today. (Lawful)"
		],
		["Bold",
			"Bold : Never shirk. Rush forward boldly. (Chaotic)"
		],
		["Bully",
			"Bully : The weak deserve what they get. (Evil))"
		],
		["Wisdom",
			"Wisdom : Teach others that they my live better lives. (Good)"
		],
		["Freedom",
			"Freedom : I believe in the freedom to travel and the chance to prove one’s self through deeds. (Chaotic)"
		]
	],
	bond : [
		"I try to live up to the examples of the heroes of legend.",
		"If my fame grows, the gods will favor me.",
		"I am hunting for another skald that stole my masterpiece and claims it to be their own.",
		"I come from a long line of famous warriors and hope to do right by their memory.",
		"My honor is my law.",
		"My weapon has been passed to me from my ancestors and I add my deeds to their saga."
	],
	flaw : [
		"I am a sucker for a pretty face.",
		"I eat and drink to excess.",
		"If I can intimidate someone in doing what I want, I will.",
		"A Jarl is hunting for me after I insulted their spouse.",
		"I can’t rely on myself.",
		"I can’t do anything quietly. I need to be the center of attention."
	],
	toolProfs : [["Musical instrument", 1]],
	languageProfs : [1]
};

BackgroundList["survivor-kaosc"] = {
	regExpSearch : /^(?=.*survivor).*$/i,
	name : "Survivor",
	source : ["KaOSC", 22],
	skills : ["Medicine", "Survival"],
	gold : 5,
	equipleft : [
		["Knife hidden in boot", "1", ""],
		["Used furs and blankets", "", ""],
		["Cold weather clothing", "", ""],
		["Hemp Rope", "1", ""]
	],
	feature : "Dark Reputation",
	tragedy : [
		"I am missing some fingers or toes from frostbite",
		"My face is scarred from a beast's claws.",
		"My skin is blemished by evil magic.",
		"My hair has been burned off and my scalp is scarred.",
		"I walk with a noticeable limp.",
		"I wear an eyepatch to cover a missing eye."
	],
	trait : [
		"I am haunted by my past and have trouble speaking about it.",
		"After living through tragedy, I run towards danger.",
		"I celebrate life with great enthusiasm.",
		"The gods may be real but they are uncaring.",
		"Some food reminds me of my torment and I can’t stomach it",
		"I put faith in rituals, symbols, and hedge magic to protect me from evil.",
		"My inner pain makes me gruff when I deal with others.",
		"I always expect the worst and jump at loud noises and sudden movements."
	],
	ideal : [
		["Intimidation",
			"Intimidation : I have seen evil and make certain that others fear me before they can hurt me or mine. (Evil)"
		],
		["Nihilism",
			"Nihilism : Nothing matters anymore and the world will burn. (Chaotic)"
		],
		["Bulwark",
			"Bulwark : I stand against chaos to prevent these things from happening again. (Lawful)"
		],
		["Runner",
			"Runner : I am running from my past and can’t stay in any place for long. (Any)"
		],
		["Compassion",
			"Compassion : I don’t want anyone else to suffer as I have. (Good)"
		],
		["Order",
			"Order : I try to gain strength by controlling my environment with rules and rituals. (Lawful)"
		]
	],
	bond : [
		"I have family or friends to protect.",
		"I am hunting for the creature that wronged me.",
		"I have a token that I believe protects me.",
		"With evil in the land, I have to appreciate beauty when I find it.",
		"I am drawn to lucky people, hoping their luck will rub off on me.",
		"I will sacrifice myself for others."
	],
	flaw : [
		"My tragedy has made me a secret coward.",
		"Evil surrounds the world and has won. I have trouble caring what happens to others.",
		"I try to forget my past through excessive drink.",
		"I covet safety and gather wealth and magic items to protect myself.",
		"I pretend to know what’s going on at all times so others don’t think I am weak.",
		"Trust is a lie."
	],
	toolProfs : ["Herbalist's kit"],
	languageProfs : [1]
};

BackgroundList["whaler-kaosc"] = {
	regExpSearch : /^(?=.*whaler).*$/i,
	name : "Whaler",
	source : ["KaOSC", 22],
	skills : ["Athletics", "Survival"],
	gold : 0,
	equipleft : [
		["Javelin", "", ""],
		["Well-used knife", "1", ""],
		["Half-chewed piece of blubber", "", ""],
		["Lantern", "", ""],
		["Cold weather clothing", "", ""],
		["Pints of Whale Oil", "5", ""]
	],
	feature : "Go to Ground",
	trait : [
		"I am as changeable as the sea.",
		"Life is short. Eat everything I can when I can.",
		"When I have an idea, I make sure everyone knows why it’s the best idea.",
		"I put a notch in my favorite javelin for every beast I hunt.",
		"I share a fish story with everyone I meet.",
		"There is no greater meal than whale and I try to get everyone to try some.",
		"I enjoy taunting the deities of the sea.",
		"I laugh loudly and easily share a joke."
	],
	ideal : [
		["Teamwork",
			"Teamwork : Whaling is too much for one person, but as a crew we can do anything. (Good)"
		],
		["Selfish",
			"Selfish : The water is too cold to riskyourself for others. (Evil)"
		],
		["Prepared",
			"Prepared : In order to face the odds, I need a plan. (Lawful)"
		],
		["Adventure",
			"Adventure : I enjoy hunting behemoths because it is the greatest challenge I have found so far.I am always seeking the next thrill. (Chaotic)"
		],
		["Fatalistic",
			"Fatalistic : The sea gives life, but takes it just as fast.Life is short and then it ends. (Neutral)"
		],
		["Common Sense",
			"Common Sense : Be smart. I see what needs to be done and I do it. (Any)"
		]
	],
	bond : [
		"My crew comes first.",
		"I am do what I do to provide for the community",
		"Respect the sea. She is mightier than I.",
		"I have a favorite boat that needs a fortune in repairs.",
		"Never give up. Once I am committed, I never turn back.",
		"I am hunting for another fisherman that betrayed the rest of our crew.I will have my vengeance."
	],
	flaw : [
		"A man knows his worth by the number of grudges he collects.",
		"I have a rage as boundless as the sea.",
		"I am always looking to sell my catch for as much as I can, knowing that the communities depend on it.",
		"I am fascinated by fire derived from whale oil.It saves and takes lives.",
		"I secretly never learned to swim.",
		"I am glutton."
	],
	toolProfs : [["Fishing tackle", "Dex"], ["Water vehicles"]]
};

// Add background features
BackgroundFeatureList["go to ground"] = {
	description : "I have a nose for where people are likely to run to when in danger. I am adept at guessing the paths a panicked individual might take or where they might seek shelter. When in the wilderness, I always find a relatively safe place to rest if such a place exists.",
	source : [["KaOSC", 17]]
};
BackgroundFeatureList["secret spot"] = {
	description : "I know all the best spots for fishing and when to go there. When others can’t get anything to bite, I am bound to catch enough to feed a party of ten given sufficient time.",
	source : [["KaOSC", 18]]
};
BackgroundFeatureList["friendly faces"] = {
	description : "I know people throughout Icewind Dale who tell I things. I regularly hear rumors from my loose network of acquaintances that lead to adventure or warn of danger.",
	source : [["KaOSC", 19]]
};
BackgroundFeatureList["Fool's Gold"] = {
	description : "I eye for the color gold has no peer. I can appraise objects the value of precious metals. This feature might allow me to know that an idol contains 100 gp worth of silver, but not that it would be worth 1000 gp to the right antiquities collector.",
	source : [["KaOSC", 20]]
};
BackgroundFeatureList["share the fire"] = {
	description : "In exchange for my stories and songs, I am welcome at everyone’s fire. I receive free food and lodging in exchange for my performances. It may be Modest at best, but a hero take what is freely offered.",
	source : [["KaOSC", 20]]
};
BackgroundFeatureList["dark reputation"] = {
	description : "People whisper behind my back about the trials I have suffered. Some fear me. Others offer pity. But all avoid getting to close to me, worried that they will be the next loss I suffer. People are happy to see me move on so I get away with minor offenses such as rude behavior or leaving the tavern before paying my tab.",
	source : [["KaOSC", 20]]
};
BackgroundFeatureList["balanced"] = {
	description : "The tempestuous waves of the Sea of Moving Ice are made all the worse by a thrashing wounded whale. I never lose my balance due to stormy seas.",
	source : [["KaOSC", 23]]
};

SpellsList["auroral winds"] = {
	name : "Auroral Winds",
	classes : ["druid", "warlock", "wizard"],
	source : ["KaOSC", 33],
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "150 ft",
	components : "V,S,M",
	compMaterial : "A candle wrapped in silver wire",
	duration : "Conc, 1 min",
	save : "Con",
	description : "30-ft rad sphere all crea 6d6+1d6/SL Radiant dmg start turn in; Con save half; all crea in the area disadv on Wis(Perception) hearing and snared 10-ft; crea immune to cold are immune to snare",
	descriptionMetric : "30-ft rad sphere all crea 6d6+1d6/SL Radiant dmg start turn in; Con save to avoid snare",
	descriptionFull : "30-ft radius of flickering light and howling winds. Creatures in the area have disadvantage on Wisdom(Perception) checks based on hearing. Any creature that starts its turn in the area takes 6d6+1d6/SL Radiant damage. Any creature that ends its turn in the area must succeed on a Constitution saving throw or have its speed reduced by 10-ft until the end of their next turn. Creatures immune to cold are immune to this reduction in speed."
};
SpellsList["brittle"] = {
	name : "Brittle",
	classes : ["cleric", "druid", "paladin", "wizard"],
	source : ["KaOSC", 33],
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "15 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "1 crea w/ non-magic weapon save or weapon is destroyed after its next use",
	descriptionFull : "I freeze a non-magical weapon held by a creature. The next time the weapon is used to make an attack, the creature holding it must succeed a Dexterity saving throw or the weapon shatters and is destroyed after the attack is resolved. If the save succeeds, the weapon is unharmed and the spell ends."
};
SpellsList["buffeting eddies"] = {
	name : "Buffeting Eddies",
	classes : ["bard","cleric","druid","paladin","ranger","sorcerer","warlock","wizard"],
	source : ["KaOSC", 33],
	level : 2,
	school : "Trans",
	time : "1 bns",
	range : "Self",
	components : "V,S,M",
	compMaterial : "A tiny paper fan",
	duration : "Conc, 1 min",
	save : "Str",
	description : "self 5ft-rd aura. ranged wea disadv., bns action to push a crea 10-ft and prone",
	descriptionFull : "A (5-ft radius) aura moves centered upon I until the spell ends. Any creature has disadvantage on ranged weapon attacks made against creatures within the aura. As a bonus action, I can assail one creature of my choice within the aura with a blast of wind. The creature must succeed on a Strength saving throw or be pushed away 10 feet and fall prone."
};
SpellsList["chardalyn hide"] = {
	name : "Chardalyn Hide",
	classes : ["cleric", "druid", "sorcerer", "wizard"],
	source : ["KaOSC", 33],
	level : 7,
	school : "Abjur",
	time : "1 a",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "a small shard of chardalyn worth 500gp",
	duration : "Conc, 1 hr",
	description : "1 crea, gain resist bludg., pierce, slash dmg. adv on saves vs magic effects. disadv for spell attack vs the crea",
	descriptionFull : "This spell turns the flesh of a willing creature into crystal that is as hard as steel and repels all but the most potent spells.Until the spell ends, the target has resistance to nonmagical bludgeoning, piercing, 	and slashing damage.They also have advantage on saving throws against spells and other magical effects, and spell attacks have disadvantage against them."
};
SpellsList["charm elemental"] = {
	name : "Charm Elemental",
	classes : ["bard","druid","ranger","sorcerer","warlock","wizard"],
	source : ["KaOSC", 33],
	level : 3,
	school : "Ench",
	time : "1 a",
	range : "30-ft",
	components : "V,S",
	duration : "1 hr",
	save : "Wis",
	description : "1+1/SL elmentals, each 30-ft apart, save or charmed; adv on save if me/ally is fighting it",
	descriptionFull : "I attempt to charm an elemental I can see within range.It must make a Wisdom saving throw, and does so with advantage if I or my companions do anything harmful to it.The charmed creature regards me as a friendly acquaintance. When the spell ends, the creature knows it was charmed by I." + "\n   " + AtHigherLevels + "When I cast this spell using a spell slot of 4th or higher level, I can target one additional elemental for each slot level above 3rd. The creatures must be within 30 feet of each other when I target them."
};
SpellsList["climbing spikes"] = {
	name : "Climbing Spikes",
	classes : ["druid","ranger","wizard"],
	source : ["KaOSC", 33],
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "a nail",
	duration : "8 hr",
	description : "1 crea's boots and gloves, gain adv on checks to climb/balance on icy or rocky terrain, ignore difficult terrain of ice or snow.",
	descriptionFull : "Icy spikes grow from the boots and gloves of a creature I touch.Until the spell ends, the creature has advantage on any checks made to climb or maintain their balance on icy or rocky terrain, and they ignore difficult terrain created by ice or deep snow.The spell ends early if the boots or gloves are removed." + "\n   " + AtHigherLevels + "When I cast this spell using a spell slot of 2nd or higher level, I can target one additional creature for each slot level above 1st."
};
SpellsList["conjure compass"] = {
	name : "Conjure Compass",
	classes : ["druid", "ranger","wizard"],
	source : ["KaOSC", 34],
	level : 1,
	school : "Conj",
	time : "1 min",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "a small stone",
	duration : "8 hr",
	description : "Ench a stone that tugs north in a creature's hand",
	descriptionFull : "I temporarily enchant a small stone to emit a gentle tug when the creature holding it faces north."
};
SpellsList["freezing blast"] = {
	name : "Freezing Blast",
	classes : ["druid","sorcerer","warlock","wizard"],
	source : ["KaOSC", 34],
	level : 2,
	school : "Evoc",
	time : "1 a",
	range : "Self",
	components : "V,S,M",
	compMaterial : "a white dragon's scale",
	save : "Con",
	description : "30-ft line, 5-ft wide. 2d10 cold dmg, Con save half. Dex save prone. Creates difficult terrain 1 min.",
	descriptionFull : "A line of frigid air 30 feet long and 5 feet wide emanates from I in a direction I choose.Each creature in the line must succeed on a Constitution saving throw.A creature takes 2d10 cold damage on a failed save, or half as much damage on a successful one. The ground in the area of the spell is also covered in a thick coating of slippery ice for 1 minute.The ice is difficult terrain and a creature that enters the area or starts their turn there must succeed on a Dexterity saving throw or fall prone."
};
SpellsList["frozen flame"] = {
	name : "Frozen Flame (R)",
	classes : ["druid","ranger","wizard"],
	source : ["KaOSC", 34],
	level : 2,
	school : "Trans",
	time : "1 min",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "a source of fire as large as a torch",
	duration : "8 hr",
	description : "transmute a flame into unextinquishable radiating crystal",
	descriptionFull : "The fire’s flames solidify into translucent orange, red, and yellow crystals. For the duration of the spell, the fire continues to radiate heat and light without consuming fuel, and can’t be extinguished by heavy winds."
};
SpellsList["heart of ice"] = {
	name : "Heart of Ice",
	classes : ["druid","ranger","sorcerer","wizard"],
	source : ["KaOSC", 33],
	level : 4,
	school : "Abjur",
	time : "1 rea",
	range : "Self",
	components : "S",
	compMaterial : "a small shard of chardalyn worth 500gp",
	description : "After taking cold dmg, heal 1/2dmg taken and gain immunity to cold dmg for 1 rnd",
	descriptionFull : "I have immunity to cold damage until the start of my next turn.Also, I regain a number of hit points equal to half of the cold damage that triggered the spell."
};
SpellsList["hibernate"] = {
	name : "Hibernate",
	classes : ["bard","cleric","druid","wizard"],
	source : ["KaOSC", 34],
	level : 6,
	school : "Ench",
	time : "1 min",
	range : "30-ft",
	components : "V,S,M",
	compMaterial : "pinch of sand",
	duration : "Conc, 1 hr",
	description : "1 crea, fall unconscious, gain the benefit of a long rest in a short rest",
	descriptionFull : "With a casual wave of my hand, a willing creature of my choice that I can see within range falls unconscious for the spell’s duration. The spell ends on a target early if it takes damage or someone uses an action to shake or slap it awake.If a target remains unconscious for the full duration that target gains the benefit of a long rest and it can’t be affected by this spell again until it finishes a long rest."
};
SpellsList["ice barrage"] = {
	name : "Ice Barrage",
	classes : ["druid","sorcerer","warlock","wizard"],
	source : ["KaOSC", 34],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "90",
	components : "V,S",
	description : "Fling razor ice 2d4 Piercing dmg; shards at same or different targets; CL5:2, CL11:3, CL17:4 shards",
	descriptionCantripDie : "`CD`x additional shards",
	descriptionFull : "I conjure razor-sharp shards of frigid ice and fling it at a creature within range.Make a ranged spell attack against the target.On a hit, the target takes 2d4 piercing damage." + "\n   " + AtHigherLevels + "The spell creates more than one shard when I reach higher levels : two shards at 5th level, three shards at 11th level, and four shards at 17th level.I can direct the shards at the same target or at different ones.Make a separate attack roll for each shard."
};
SpellsList["icicle trap"] = {
	name : "Icicle Trap",
	classes : ["druid","ranger","wizard"],
	source : ["KaOSC", 33],
	level : 2,
	school : "Abjur",
	time : "10 min",
	range : "15 ft",
	components : "V,S,M",
	compMaterial : "a piece of glass shaped like an icicle",
	duration : "till trigger",
	description : "create a 10-ft trap. 4d6 Piercing dmg, Dex save halves.",
	descriptionFull : "When I cast this spell, I create a 10-foot square area of icicles on a ceiling, doorway, or similar overhang.The icicles fall when a creature or creatures walk beneath them, dealing 4d6 piercing damage.Creatures that succeed on a Dexterity saving throw take half damage.I can set 		conditions for creatures that don’t trigger the icicle trap, such as exempting yourself or those who say a certain password. A successful Intelligence(Investigation) check against my spell save DC recognizes the icicles as dangerous and likely to fall.The icicles are destroyed if they take 15 points of fire damage." + "\n   " + AtHigherLevels + "When I cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd."
};
SpellsList["invigorate"] = {
	name : "Invigorate",
	classes : ["bard","cleric","druid","paladin"],
	source : ["KaOSC", 35],
	level : 4,
	school : "Abjur",
	time : "1 a",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "powdered silver worth at least 50gp",
	duration : "8 hr",
	description : "3+1/SL crea, gain advantage for saving throws vs exhaustion",
	descriptionFull : "I imbue up to three creatures with protection against weariness, granting them advantage on any saving throws made to resist gaining levels of exhaustion." + "\n   " + AtHigherLevels + "When I cast this spell using a spell slot of 5th level or higher level, I can target one additional creature for each slot level above 4th."
};
SpellsList["leomunds tinier tent"] = {
	name : "Leomund's Tinier Tent (R)",
	classes : ["druid","ranger","wizard"],
	source : ["KaOSC", 35],
	level : 1,
	school : "Evoc",
	time : "1 min",
	range : "Self",
	components : "V,S,M",
	compMaterial : "a stake and a short length of twine",
	duration : "8 hr",
	description : "Personal immobile area; blocks magic; ends if I leave or another crea enters",
	descriptionFull : "An immobile dome of force springs into existence around and above I and remains stationary for the duration.The spell ends if I leave the area. The dome adjusts in area to allow I to lay down comfortably, but no other creatures can fit inside. The spell fails if any other creatures are within the area.I can move through the dome freely, but all other creatures and objects are barred from passing through it.Spells and other magical effects can’t extend through the dome or be cast through it. The atmosphere inside the space is comfortable and dry, 	regardless of the weather outside. Until the spell ends, I can command the interior to become dimly lit or dark.The dome is opaque from the outside, of any color I choose, but is transparent from the inside."
};
SpellsList["shackling smite"] = {
	name : "Shackling Smite",
	classes : ["paladin"],
	source : ["KaOSC", 35],
	level : 2,
	school : "Evoc",
	time : "1 bns",
	range : "Self",
	components : "V",
	duration : "Conc, 1 min",
	save : "Str",
	description : "adds 3d8 Cold dmg to next melee weapon attack hit; Target save Str or be restrained",
	descriptionFull : "The next time I hit a creature with a melee weapon attack during this spell’s duration, my weapon emits a blast of cold air and the attack deals an extra 3d8 cold damage to the target.Additionally, 	the target must succeed on a Strength saving throw or be restrained until the spell ends. A creature restrained by this spell makes another Strength saving throw at the end of each of its turns. On a successful save, it is no longer restrained."
};
SpellsList["shivering touch"] = {
	name : "Shivering Touch",
	classes : ["cleric","sorcerer","warlock", "wizard"],
	source : ["KaOSC", 35],
	level : 3,
	school : "Necro",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Con",
	description : "Melee spell attack vs crea, cause disadv on Dex saving throws and attacks. Subject to Cold or Exhaustion immunity",
	descriptionFull : "Make a melee spell attack against a creature I can reach.On a hit the creature becomes chilled to the bone and begin to shiver uncontrollably.While affected, the creature has disadvantage on Dexterity saving throws and attack rolls.At the end of each of its turns, the target can make a Constitution saving throw. On a success, the spell ends on the target. Creatures immune to cold or exhaustion are immune to this spell."
};
SpellsList["snillocs single snowball"] = {
	name : "Snilloc’s Single Snowball",
	classes : ["sorcerer", "wizard"],
	source : ["KaOSC", 35],
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "90",
	components : "V,S,M",
	compMaterial : "a piece of ice or a small white rock chip",
	save : "Dex",
	description : "1 crea 3d6+1d6/SL Cold dmg. Dex save halves dmg",
	descriptionFull : "A snowball erupts from my hand and hurtles towards the target who must make a Dexterity saving throw. A creature takes 3d6 cold damage n a failed save, or half as much damage on a successful one." + "\n   " + AtHigherLevels + "When I cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
};
SpellsList["snow shoes"] = {
	name : "Snow Shoes",
	classes : ["bard","druid","ranger"],
	source : ["KaOSC", 33],
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "1 hr",
	description : "1 crea (+1/SL crea or hr) gains snow/ice walk or climb without check and leaves no tracks.",
	descriptionFull : "A creature that I touch becomes able to walk in snow rather than sink into it.The creature can move across and climb icy or snowy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn’t cost extra movement. A creature benefiting from this spell leaves behind no tracks or other traces of its passage and can’t be tracked except by magical means." + "\n   " + AtHigherLevels + "When I cast this spell using a spell slot of 3rd level or higher, I may affect an additional creature or extend the duration by 1 hour for each slot level above 2nd."
};
SpellsList["thaw"] = {
	name : "Thaw",
	classes : ["cleric", "druid", "sorcerer", "wizard"],
	source : ["KaOSC", 36],
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "30-ft",
	components : "V,S",
	duration : "1 hr",
	description : "Melt 3+1/SL x 10-ft cubes or deal 1 ice/snow-noid crea 3d6+1d6/SL Fire dmg, Dex save to halve",
	descriptionFull : "I melt an area of ice and snow that I can see within range.Three 10-ft.cubes anywhere within 30 feet of I am instantaneously melted.The resulting ater is not magical and will refreeze normally. Instead of melting ice and snow, I may choose to instead target a single creature with 30 feet that is made of ice or snow such as an ice mephit or a simulacrum.The creature must make a Constitution saving throw.On a failed save the creature takes 3d6 fire damage, or half as much damage on a successful one." + "\n   " + AtHigherLevels + "When I cast this spell using a spell slot of 2nd level or higher, I may affect an additional 10 - ft.cube or increase the damage by 1d6 for each slot level above 1st."
};
SpellsList["winters mantle"] = {
	name : "Winter's Mantle",
	classes : ["paladin"],
	source : ["KaOSC", 36],
	level : 4,
	school : "Evoc",
	time : "1 a",
	range : "Self",
	components : "V",
	duration : "1 min",
	description : "30-ft rad aura from self. ally crea's gain advant on save throws vs cold & wea deal +1d4 Cold dmg.",
	descriptionFull : "With a quick prayer, I wrap yourself in bitter cold which radiates from I in an aura with a 30-foot radius, inuring friendly creatures to low temperatures.Until the spell ends, the aura moves with I, centered on I.While in the aura, each nonhostile creature in the aura(including I) makes saving throws against spells and effects that do cold damage with advantage.In addition, an affected creature deals an extra 1d4 cold damage when it hits with a weapon attack."
};

WeaponsList["ice barrage"] = {
	regExpSearch : /^ice(?=.*barrage).*$/i,
	name : "Ice Barrage",
	source : ["KaOSC", 34],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C\u00D7" + 2, 4, "piercing"],
	range : "90 ft",
	description : "Each 2d4 is a separate shard requiring separate rolls (KaOSC 34)",
	abilitytodamage : false,
	SpellsList : "ice barrage"
};
