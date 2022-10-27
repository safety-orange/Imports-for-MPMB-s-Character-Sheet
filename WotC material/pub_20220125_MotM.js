var iFileName = "pub_20220125_MotM.js";
RequiredSheetVersion("13.1.1");
// This file adds all the player-material from Mordenkainen Presents: Monsters of the Multiverse to MPMB's Character Record Sheet
// Includes many contributions by Nod_Hero and BraabHimself

// Define the source
SourceList.MotM = {
	name : "Mordenkainen Presents: Monsters of the Multiverse",
	abbreviation : "MotM",
	group : "Primary Sources",
	url : "https://dnd.wizards.com/products/monsters-of-the-multiverse",
	date : "2022/01/25" // box set release date
};

//Add Races
RaceList["multiverse aarakocra"] = {
	regExpSearch : /^(?=.*(multiverse|motm\b))(?=.*aarakocra).*$/i,
	name : "Multiverse Aarakocra",
	sortname : "Aarakocra, Multiverse",
	source : [["MotM", 5]],
	plural : "Aarakocra",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		fly : { spd : "walk", enc : 0 }
	},
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /talon/i,
		name : "Talons",
		source : [["MotM", 5]],
		damage : [1, 6, "slashing"]
	},
	weaponsAdd : ["Talons"],
	spellcastingAbility : [4, 5, 6],
	features : {
		"wind caller" : {
			name : "Wind Caller",
			minlevel : 3,
			spellcastingBonus : {
				name : "Wind Caller",
				spells : ["gust of wind"],
				selection : ["gust of wind"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
			extraLimitedFeatures : [{
				name : "Gust of Wind",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 2+"
			}],
			spellChanges : {
				"gust of wind" : {
					components : SpellsList["gust of wind"].components + "*",
					compMaterial : SpellsList["gust of wind"].compMaterial + "\nMaterial component is only needed when cast using a spell slot, not when cast using the Wind Caller trait.",
					changes : "Using Wind Caller, I can cast Gust of Wind once per long rest without requiring material components. I can also cast it using a spell slot as normal, but then it does require material components."
				}
			}
		}
	},
	scoresGeneric : true,
	trait : "Aarakocra"+
		"\n \u2022 Flight: I have a flying speed equal to my walking speed. To use this speed, I can't be wearing medium or heavy armor."+
		"\n \u2022 Talons: My unarmed strikes with talons deal 1d6 slashing damage."+
		"\n \u2022 Wind Caller: At 3rd level, I can cast Gust of Wind without using a spell slot or material component once per long rest, and by using spell slots as normal. Intelligence, Wisdom, or Charisma is my spellcasting ability for this (one-time choice)."
};
var MotM_Aasimar_trait = (typePF ? "\n" : "") + " \u2022 Light Bearer: I know the Light cantrip." +
"\n \u2022 Healing Hands: As an action once per long rest, I can touch a creature and heal it for a number of d4s equal to my Prof" + (typePF ? "." : "iciency") + " Bonus.";
var MotM_Aasimar_HealingHands = {
	name : "Healing Hands",
	minlevel : 1,
	usages : 1,
	recovery : "long rest",
	additional : ProficiencyBonusList.map(function(n) { return n + "d4 healing"; }),
	action : [["action", ""]]
};
RaceList["multiverse aasimar"] = {
	regExpSearch : /^(?=.*(multiverse|motm\b))(?=.*aasimar).*$/i,
	name : "Multiverse Aasimar",
	sortname : "Aasimar, Multiverse",
	source : [["MotM", 7]],
	plural : "Aasimar",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	dmgres : ["Necrotic", "Radiant"],
	vision : [["Darkvision", 60]],
	scoresGeneric : true,
	trait : "Aasimar" + MotM_Aasimar_trait +
		"\n \u2022 Celestial Revelation: At 3rd level, I choose one option from Necrotic Shroud, Radiant Consumption, or Radiant Soul. As a bonus action once per long rest, I can transform and gain its benefits. This transformation lasts for 1 minute or until I end it as a bonus action.",
	spellcastingAbility : 6,
	spellcastingBonus : {
		name : "Light Bearer",
		spells : ["light"],
		selection : ["light"],
		firstCol : 'atwill'
	},
	features : {
		"healing hands" : MotM_Aasimar_HealingHands
	}
};
AddRacialVariant("multiverse aasimar", "necrotic shroud", {
	regExpSearch : /shroud/i,
	name : "Necrotic Shroud Aasimar",
	source : [["MotM", 7]],
	abilitySave : 6,
	trait : "Aasimar (Necrotic Shroud)" + MotM_Aasimar_trait +
		"\n \u2022 Necrotic Shroud (3rd level): Once per long rest, I can transform for 1 minute as a bonus action (start/end), causing enemies within 10 ft to make a Cha save (DC 8 + Cha mod + Prof Bonus) or become frightened of me until my next turn ends. Also, once on each of my turns, I can deal my Prof Bonus in necrotic damage to one damaged by my attack or spell.",
	features : {
		"healing hands" : MotM_Aasimar_HealingHands,
		"necrotic shroud" : {
			name : "Necrotic Shroud",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			additional : ProficiencyBonusList.map(function(n) { return "+" + n + " necrotic damage"; }),
			action : [["bonus action", " (start/end)"]]
		}
	}
});
AddRacialVariant("multiverse aasimar", "radiant consumption", {
	regExpSearch : /consumption/i,
	name : "Radiant Consumption Aasimar",
	source : [["MotM", 7]],
	plural : "Aasimar",
	trait : "Aasimar (Radiant Consumption)" + MotM_Aasimar_trait +
		"\n \u2022 Radiant Consumption (3rd level): Once per long rest, I can transform for 1 minute as a bonus action (start/end). I shed 10-ft radius bright light and 10-ft dim light. At the end of my turns, all in this bright light take my Prof Bonus in radiant damage. Also, once on my turns, I can deal Prof Bonus in radiant damage to one damaged by my attack or spell.",
	features : {
		"healing hands" : MotM_Aasimar_HealingHands,
		"radiant consumption" : {
			name : "Radiant Consumption",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			additional : ProficiencyBonusList.map(function(n) { return "+" + n + " radiant damage"; }),
			action : [["bonus action", " (start/end)"]]
		}
	}
});
AddRacialVariant("multiverse aasimar", "radiant soul", {
	regExpSearch : /soul/i,
	name : "Radiant Soul Aasimar",
	source : [["MotM", 7]],
	plural : "Aasimar",
	trait : "Aasimar (Radiant Soul)" + MotM_Aasimar_trait +
		"\n \u2022 Radiant Soul (3rd level): As a bonus action once per long rest, I can transform to gain spectral wings that give my a flying speed equal to my walking speed. These last for 1 minute or until I dismiss them as a bonus action. Once on each of my turns while active, I can deal my Prof Bonus in radiant damage to one target damaged by my attack or spell.",
	features : {
		"healing hands" : MotM_Aasimar_HealingHands,
		"radiant soul" : {
			name : "Radiant Soul",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			additional : ProficiencyBonusList.map(function(n) { return "+" + n + " radiant damage"; }),
			action : [["bonus action", " (start/end)"]]
		}
	}
});
RaceList["multiverse bugbear"] = {
	regExpSearch : /^(?=.*(multiverse|motm\b))(?=.*bugbear).*$/i,
	name : "Multiverse Bugbear",
	sortname : "Bugbear, Multiverse",
	source : [["MotM", 8]],
	plural : "Bugbears",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	vision : [["Darkvision", 60]],
	savetxt : { adv_vs : ["charmed"] },
	skills : ["Stealth"],
	scoresGeneric : true,
	carryingCapacity : 2,
	trait : "Bugbear (my creature type is humanoid, goblinoid)"+
		"\n \u2022 Fey Ancestry: I have adv. on saves to avoid or end being charmed."+
		"\n \u2022 Powerful Build: I count as one size larger for the weight I can carry."+
		"\n \u2022 Long-Limbed: I add 5 ft of reach with my melee attacks on my turn."+
		"\n \u2022 Sneaky: I am proficient in Stealth and can move through and stop in a space large enough for a Small creature without squeezing."+
		"\n \u2022 Surprise Attack: My attacks deal +2d6 damage if the target hasn't taken a turn yet" + (typePF ? " in the current combat." : ".")
};
RaceList["multiverse centaur"] = {
	regExpSearch : /^(?=.*(multiverse|motm\b))(?=.*centaur).*$/i,
	name : "Multiverse Centaur",
	sortname : "Centaur, Multiverse",
	source : [["MotM", 9]],
	plural : "Centaurs",
	size : 3,
	speed : {
		walk : { spd : 40, enc : 30 }
	},
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /\b(hoofs?|hooves)\b/i,
		name : "Hooves",
		source : [["MotM", 9]],
		damage : [1, 6, "bludgeoning"],
		description : "Use as bonus action after charge 30 ft"
	},
	weaponsAdd : ["Hooves"],
	action : [["bonus action", "Hooves (after charge)"]],
	skillstxt : "Choose one from Animal Handling, Medicine, Nature, or Survival",
	scoresGeneric : true,
	trait : "Centaur"+
		"\n \u2022 Fey: My creature type is fey, rather than humanoid."+
		"\n \u2022 Hooves: I can use my hooves for unarmed strikes that deal 1d6 bludgeoning damage."+
		"\n \u2022 Charge: If I move 30 ft straight toward a creature and then hit it with a melee weapon attack on the same turn, I can make a hooves attack against it as a bonus action."+
		"\n \u2022 Equine Build: I count as one size larger for my carrying capacity and the weight I can push, drag, or lift. Because of my hooves, 1 ft of movement while climbing costs me 4 ft.",
	carryingCapacity : 2
};
RaceList["multiverse changeling"] = {
	regExpSearch : /^(?=.*(multiverse|motm\b))(?=.*changeling).*$/i,
	name : "Multiverse Changeling",
	sortname : "Changeling, Multiverse",
	source : [["MotM", 41]],
	plural : "Changelings",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	skillstxt : "Choose two from Deception, Insight, Intimidation, Performance, and Persuasion",
	age : " typically live to be around 100 years old. While a changeling can transform to conceal their age, the effects of aging affect them similarly to humans",
	scoresGeneric : true,
	trait : "Changeling"+
		"\n \u2022 Fey: My creature type is fey, rather than humanoid."+
		"\n \u2022 Shapechanger: As an action, I can change my appearance and voice to or from a humanoid-shaped form I have seen, not changing my equipment. I determine the specifics of the form like hair length, eye color, and sex. I can adjust my height and weight between Medium and Small and can appear as a member of another race, though none of my game statistics change. I revert back when I die."+
		(typePF ? "\n \u2022 Changeling Instincts: I gain proficiency with 2 of the following skills: Deception, Insight, Intimidation, Performance, or Persuasion." : ""),
	action : [["action", "Shapechanger"]]
};
RaceList["multiverse deep gnome"] = {
	regExpSearch : /^(?=.*(multiverse|motm\b))((?=.*\b(underdarks?|deep|depths?)\b)(?=.*\bgnomes?\b)|(?=.*svirfneblin)).*$/i,
	name : "Multiverse Svirfneblin",
	sortname : "Gnome, Deep, Multiverse",
	source : [["MotM", 41]],
	plural : "Svirfneblin",
	size : 4,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	vision : [["Darkvision", 120]],
	savetxt : { text : ["Adv. on Int/Wis/Cha saves vs. spells"] },
	age : " can live to be 500 years old",
	scoresGeneric : true,
	trait : "Svirfneblin (my creature type is humanoid, gnome)"+
		"\n \u2022 Svirfneblin Camouflage: Proficiency bonus per long rest, I can gain adv. on Stealth checks."+
		"\n \u2022 Gnomish Magic Resistance: I have advantage on Int, Wis, and Cha saves vs. spells."+
		"\n \u2022 Gift of the Svirfneblin: At 3rd level, I can cast Disguise Self once per long rest without a spell slot. At 5th level, I can cast Nondetection once per long rest without a spell slot or material components. I can also cast each spell using spell slots as normal. Int, Wis, or Cha is my spellcasting ability for these (one-time choice).",
	spellcastingAbility : [4, 5, 6],
	features : {
		"svirfneblin camouflage" : {
			name : "Svirfneblin Camouflage",
			minlevel : 1,
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery: "long rest"
		},
		"gift of the svirfneblin (level 3)" : {
			name : "Gift of the Svirfneblin (level 3)",
			minlevel : 3,
			spellcastingBonus : {
				name : "Gift of the Svirfneblin",
				spells : ["disguise self"],
				selection : ["disguise self"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
			extraLimitedFeatures : [{
				name : "Disguise Self",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 1+"
			}]
		},
		"gift of the svirfneblin (level 5)" : {
			name : "Gift of the Svirfneblin (level 5)",
			minlevel : 5,
			spellcastingBonus : {
				name : "Gift of the Svirfneblin",
				spells : ["nondetection"],
				selection : ["nondetection"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
			spellChanges : {
				"nondetection" : {
					components : "V,S,M*",
					compMaterial : SpellsList["nondetection"].compMaterial + "\nMaterial component is only needed when cast using a spell slot, not when cast using the Gift of the Svirfneblin trait.",
					changes : "Using Gift of the Svirfneblin, I can cast Nondetection once per long rest without requiring material components. I can also cast it using a spell slot as normal, but then it does require material components."
				}
			},
			extraLimitedFeatures : [{
				name : "Nondetection",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 3+"
			}]
		}
	},
};
RaceList["multiverse duergar"] = {
	regExpSearch : /^(?=.*(multiverse|motm\b))((?=.*\bduergars?\b)|((?=.*\b(dwarfs?|dwarves|dwarfish|dwarvish|dwarven)\b)(?=.*\b(grey|gray|underdark)\b))).*$/i,
	name : "Multiverse Duergar",
	sortname : "Duergar, Multiverse",
	source : [["MotM", 12]],
	plural : "Duergar",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	vision : [["Darkvision", 120]],
	savetxt : { adv_vs : ["charmed", "poisoned", "stunned"] },
	dmgres : ["Poison"],
	age : " can live to be 350 years old",
	scoresGeneric : true,
	trait : "Duergar (my creature type is humanoid, dwarf)"+
		"\n \u2022 Dwarven Resilience \u0026 Psionic Fortitude: I have advantage on saving throws to avoid or end being poisoned, charmed, or stunned and I have resistance to poison damage."+
		"\n \u2022 Duergar Magic: At 3rd level, I learn the Enlarge/Reduce spell. At 5th level, I learn the Invisibility spell. I can cast each spell on myself once per long rest without using a spell slot or material components, or by using spell slots as normal. Intelligence, Wisdom, or Charisma is my spellcasting ability for these (one-time choice).",
	spellcastingAbility : [4, 5, 6],
	features : {
		"duergar magic (level 3)" : {
			name : "Duergar Magic (level 3)",
			minlevel : 3,
			spellcastingBonus : {
				name : "Duergar Magic",
				spells : ["enlarge/reduce"],
				selection : ["enlarge/reduce"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
			spellChanges : {
				"enlarge/reduce" : {
					range : "Self/" + SpellsList["enlarge/reduce"].range,
					components : SpellsList["enlarge/reduce"].components + "*",
					compMaterial : SpellsList["enlarge/reduce"].compMaterial + "\nMaterial component is only needed when cast using a spell slot, not when cast using the Duergar Magic trait.",
					changes : "Using Duergar Magic, I can cast Enlarge/Reduce on myself once per long rest without requiring material components. I can also cast it using a spell slot as normal, but then it does require material components."
				}
			},
			extraLimitedFeatures : [{
				name : "Enlarge/Reduce",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 2+"
			}]
		},
		"duergar magic (level 5)" : {
			name : "Duergar Magic (level 5)",
			minlevel : 5,
			spellcastingBonus : {
				name : "Duergar Magic",
				spells : ["invisibility"],
				selection : ["invisibility"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
			spellChanges : {
				"invisibility" : {
					range : "Self/" + SpellsList["invisibility"].range,
					components : SpellsList["invisibility"].components + "*",
					compMaterial : SpellsList["invisibility"].compMaterial + "\nMaterial component is only needed when cast using a spell slot, not when cast using the Duergar Magic trait.",
					changes : "Using Duergar Magic, I can cast Invisibility on myself once per long rest without requiring material components. I can also cast it using a spell slot as normal, but then it does require material components."
				}
			},
			extraLimitedFeatures : [{
				name : "Invisibility",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 2+"
			}]
		}
	}
};
RaceList["multiverse eladrin"] = {
	regExpSearch : /^(?!.*half)(?=.*(multiverse|motm\b))((?=.*eladrin)|((?=.*\b(elfs?|elves|elvish|elven)\b)(?=.*\b(feys?|feywild)\b))).*$/i,
	name : "Multiverse Eladrin",
	sortname : "Elf, Fey (Eladrin), Multiverse",
	source : [["MotM", 13]],
	plural : "Eladrin",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	vision : [["Darkvision", 60]],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
	skills : ["Perception"],
	toolProfs : [["Trance: tool or weapon", 2]],
	age : " can live to be 750 years old",
	scoresGeneric : true,
	abilitySave : [4, 5, 6],
	trait : "Eladrin (my creature type is humanoid, elf)"+
		"\n \u2022 Trance: I don't need to sleep, and magic can't put me to sleep. I can finish a long rest in 4 hours while meditating consciously. At the end of the trance, I gain 2 weapon/tool proficiencies until the end of my next long rest."+
		"\n \u2022 Shifting Seasons: After finish a long rest, I can align with a season."+
		"\n \u2022 Fey Step: Prof Bonus per long rest, as a bonus action, I can magically teleport up to 30 ft to an unoccupied space I can see. At 3rd level, additional effects based on my season.",
	features : {
		"fey step" : {
			name : "Fey Step",
			minlevel : 1,
			usages : "Proficiency bonus per ",
			action : [["bonus action", ""]],
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery: "long rest"
		}
	},
	toNotesPage : [{
		name : "Shifting Seasons",
		source : [["MotM", 13]],
		popupName : "Eladrin Shifting Season Features",
		additional : "save DC 8 + Prof Bonus + Int/Wis/Cha mod",
		page3notes : true,
		note : [
			"\u2022 Autumn (Eladrin Season)",
			" After using Fey Step, up to 2 creatures I can see within 10 ft of me must make a Wis save",
			" If failed, a target is charmed by me for 1 minute, or until I or my allies damage it",
			"\u2022 Winter (Eladrin Season)",
			" When I use Fey Step, one target " + (typePF ? "with" : "") + "in 5 ft of where I teleported from must make a Wis save",
			" If failed, it is frightened of me until the end of my next turn",
			"\u2022 Spring (Eladrin Season)",
			" When I use Fey Step, I can instead teleport one willing creature I touch within 5 ft of me",
			" It teleports to an unoccupied space of my choice that I can see within 30 ft of me",
			"\u2022 Summer (Eladrin Season)",
			" After using Fey Step, each creature of my choice I can see within 5 ft of me takes damage",
			" This is fire damage equal to my proficiency bonus"
		]
	}]
};
// [dupl_start] reprints from Wild Beyond the Witchlight
if (!RaceList["fairy"]) {
	RaceList["fairy"] = {
		regExpSearch : /fairy/i,
		name : "Fairy",
		source : [["WBtW", 12], ["MotM", 14]],
		plural : "Fairies",
		size : 4,
		speed : {
			walk : { spd : 30, enc : 20 },
			fly : { spd : "walk", enc : 0 }
		},
		scoresGeneric : true,
		spellcastingAbility : [4, 5, 6],
		spellcastingBonus : {
			name : "Fairy Magic",
			spells : ["druidcraft"],
			selection : ["druidcraft"],
			firstCol : "atwill"
		},
		features : {
			"fairy magic (level 3)" : {
				name : "Fairy Magic (level 3)",
				minlevel : 3,
				spellcastingBonus : {
					name : "Fairy Magic (level 3)",
					spells : ["faerie fire"],
					selection : ["faerie fire"],
					firstCol : 'oncelr',
					allowUpCasting : true
				},
				extraLimitedFeatures : [{
					name : "Faerie Fire",
					usages : 1,
					recovery: "long rest",
					altResource : "SS 1+"
				}]
			},
			"fairy magic (level 5)" : {
				name : "Fairy Magic (level 5)",
				minlevel : 5,
				spellcastingBonus : {
					name : "Fairy Magic (level 5)",
					spells : ["enlarge/reduce"],
					selection : ["enlarge/reduce"],
					firstCol : 'oncelr',
					allowUpCasting : true
				},
				extraLimitedFeatures : [{
					name : "Enlarge/Reduce",
					usages : 1,
					recovery: "long rest",
					altResource : "SS 2+"
				}]
			}
		},
		trait : "Fairy"+
			(typePF ? "\n \u2022 Fey: My " : " (") + "creature type is fey, rather than humanoid" + (typePF ? "." : ")") +
			"\n \u2022 Flight: I have a flying speed equal to my walking speed. To use this speed, I can't be wearing medium or heavy armor."+
			"\n \u2022 Fairy Magic: I know the Druidcraft cantrip. At 3rd level, I learn Faerie Fire. At 5th level, I learn Enlarge/Reduce. I can cast each spell without using a spell slot once per long rest, as well as by using spell slots as normal. Intelligence, Wisdom, or Charisma is my spellcasting ability for these (one-time choice)."
	};
}
if (!RaceList["harengon"]) {
	RaceList["harengon"] = {
		regExpSearch : /harengon/i,
		name : "Harengon",
		source : [["WBtW", 13], ["MotM", 22]],
		plural : "Harengons",
		size : [3, 4],
		speed : {
			walk : { spd : 30, enc : 20 },
		},
		skills : ["Perception"],
		addMod : [{ type : "skill", field : "Init", mod : "Prof", text : "I can add my proficiency bonus to my initiative rolls." }],
		scoresGeneric : true,
		action : [["reaction", "Lucky Footwork"], ["bonus action", "Rabbit Hop"]],
		features : {
			"rabbit hop" : {
				name : "Rabbit Hop",
				minlevel : 1,
				usages : "Proficiency Bonus per ",
				usagescalc : "event.value = How('Proficiency Bonus');",
				recovery : "long rest",
				additional : ProficiencyBonusList.map(function(n) {
					var hopDistance = n * 5 + ' ft';
					return What("Unit System") === "metric" ? ConvertToMetric(hopDistance) : hopDistance;
				})
			}
		},
		trait : "Harengon"+
			"\n \u2022 Hare-Trigger: I can add my proficiency bonus to my initiative rolls."+
			"\n \u2022 Leporine Senses: I have proficiency in the Perception skill."+
			"\n \u2022 Lucky Footwork: As a reaction when I fail a Dexterity saving throw, I can add +1d4 to the result, potentially making it a success. I can't do this if I'm prone or my speed is 0."+
			"\n \u2022 Rabbit Hop: As a bonus action if my speed isn't 0, I can jump 5 ft times my Prof Bonus without provoking opportunity attacks. I can do this my Prof Bonus times per long rest.",
	};
} // dupl_end
RaceList["multiverse firbolg"] = {
	regExpSearch : /^(?=.*(multiverse|motm\b))(?=.*firbolg).*$/i,
	name : "Multiverse Firbolg",
	sortname : "Firbolg, Multiverse",
	source : [["MotM", 15]],
	plural : "Firbolg",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Speech of Beast and Leaf", 1],
	age : " can live up to 500 years",
	scoresGeneric : true,
	trait : "Firbolg"+
		(typePF ? "\n" : "") + " \u2022 Powerful Build: I count as one size larger for my carrying capacity."+
		"\n \u2022 Hidden Step: Proficiency Bonus per long rest, as a bonus action, I can turn invisible until my next turn starts, as per the Invisibility spell."+
		"\n \u2022 Firbolg Magic: I can cast Detect Magic and Disguise Self each once per long rest, or using spell slots as normal. Int, Wis, or Cha is my spellcasting ability for these (one-time choice)."+
		"\n \u2022 Speech of Beast and Leaf: I can make my words understood, in a limited manner, by Beasts, Plants, and vegetation. I have advantage on Charisma checks to influence them.",
	spellcastingAbility : [4, 5, 6],
	features : {
		"firbolg magic " : {
			name : "Firbolg Magic",
			spellcastingBonus : {
				name : "Firbolg Magic",
				spells : ["detect magic", "disguise self"],
				selection : ["detect magic", "disguise self"],
				firstCol : 'oncelr',
				times : 2,
				allowUpCasting : true
			},
			extraLimitedFeatures : [{
				name : "Detect Magic",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 1+"
			}, {
				name : "Disguise Self",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 1+"
			}],
			spellChanges : {
				"disguise self" : {
					description : "Alter appearance, up to 3ft shorter/taller; Int(Investigation) check vs. spell DC to determine disguise",
					changes : "Using Firbolg Magic, I can cast Disguise Self once per long rest without using a spell slot. When I cast it using Firbolg Magic, I can also seem up to 3 feet shorter or taller."
				}
			}
		},
		"hidden step" : {
			name : "Hidden Step",
			minlevel : 1,
			usages : "Proficiency Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			action : [["bonus action", ""]]
		}
	},
	carryingCapacity : 2
};
RaceList["multiverse air genasi"] = {
	regExpSearch : /^(?=.*(multiverse|motm\b))(?=.*(genasi|planetouched))(?=.*\bairs?\b).*$/i,
	name : "Multiverse Air Genasi",
	sortname : "Genasi, Air, Multiverse",
	source : [["MotM", 16]],
	plural : "Air genasi",
	size : [3, 4],
	speed : {
		walk : { spd : 35, enc : 25 }
	},
	vision : [["Darkvision", 60]],
	dmgres : ["Lightning"],
	age : " can live up to 120 years",
	scoresGeneric : true,
	trait : "Air Genasi"+
	"\n \u2022 Unending Breath: I can hold my breath indefinitely while I am not incapacitated."+
	"\n \u2022 Lightning Resistance: I have resistance to lightning damage."+
	"\n \u2022 Mingle with the Wind: I know the Shocking Grasp cantrip. At 3rd level, I learn Feather Fall. At 5th level, I learn Levitate. I can cast each spell without using a spell slot or material components once per long rest, and by using spell slots as normal. Intelligence, Wisdom, or Charisma is my spellcasting ability for these (one-time choice).",
	spellcastingAbility : [4, 5, 6],
	spellcastingBonus : {
		name : "Mingle with the Wind",
		spells : ["shocking grasp"],
		selection : ["shocking grasp"],
		firstCol : "atwill"
	},
	features : {
		"mingle with the wind (level 3)" : {
			name : "Mingle with the Wind (level 3)",
			minlevel : 3,
			spellcastingBonus : {
				name : "Mingle with the Wind",
				spells : ["feather fall"],
				selection : ["feather fall"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
			extraLimitedFeatures : [{
				name : "Feather Fall",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 1+"
			}],
			spellChanges : {
				"feather fall" : {
					components : SpellsList["feather fall"].components + "*",
					compMaterial : SpellsList["feather fall"].compMaterial + "\nMaterial component is only needed when cast using a spell slot, not when cast using the Mingle with the Wind trait.",
					changes : "Using Mingle with the Wind, I can cast Feather Fall once per long rest without requiring material components. I can also cast it using a spell slot as normal, but then it does require material components."
				}
			}
		},
		"mingle with the wind (level 5)" : {
			name : "Mingle with the Wind (level 5)",
			minlevel : 5,
			spellcastingBonus : {
				name : "Mingle with the Wind",
				spells : ["levitate"],
				selection : ["levitate"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
			extraLimitedFeatures : [{
				name : "Levitate",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 2+"
			}],
			spellChanges : {
				"levitate" : {
					components : SpellsList["levitate"].components + "*",
					compMaterial : SpellsList["levitate"].compMaterial + "\nMaterial component is only needed when cast using a spell slot, not when cast using the Mingle with the Wind trait.",
					changes : "Using Mingle with the Wind, I can cast Levitate once per long rest without requiring material components. I can also cast it using a spell slot as normal, but then it does require material components."
				}
			}
		}
	}
};
RaceList["multiverse earth genasi"] = {
	regExpSearch : /^(?=.*(multiverse|motm\b))(?=.*(genasi|planetouched))(?=.*\bearths?\b).*$/i,
	name : "Multiverse Earth Genasi",
	sortname : "Genasi, Earth, Multiverse",
	source : [["MotM", 17]],
	plural : "Earth genasi",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	vision : [["Darkvision", 60]],
	age : " can live up to 120 years",
	scoresGeneric : true,
	trait : "Earth Genasi"+
	"\n \u2022 Earth Walk: I can move across difficult terrain without expending extra movement if I am using my walking speed on the ground or a floor."+
	"\n \u2022 Merge with Stone: I can cast the Blade Ward cantrip as normal and as a bonus action Prof Bonus times per long rest. At 5th level, I can cast Pass Without Trace without using a spell slot or material component once per long rest, or by using spell slots as normal. Intelligence, Wisdom, or Charisma is my spellcasting ability for these (one-time choice).",
	spellcastingAbility : [4, 5, 6],
	features : {
		"Merge with Stone (level 1)" : {
			name : "Merge with Stone",
			minlevel : 1,
			spellcastingBonus : {
				name : "Merge with Stone",
				spells : ["blade ward"],
				selection : ["blade ward"],
				firstCol : "atwill"
			},
			extraLimitedFeatures : [{
				name : "Blade Ward (as bonus action)",
				usages : "Proficiency Bonus per ",
				recovery : "long rest",
				usagescalc : "event.value = How('Proficiency Bonus');"
			}],
			action : [["bonus action", "Blade Ward"]],
			spellChanges : {
				"blade ward" : {
					time : "1 a/bns",
					changes : "Using Merge with Stone, I can cast Blade Ward as a bonus action a number of times per long rest equal to my proficiency bonus."
				}
			}
		},
		"merge with stone (level 5)" : {
			name : "Merge with Stone (level 5)",
			minlevel : 5,
			spellcastingBonus : {
				name : "Merge with Stone",
				spells : ["pass without trace"],
				selection : ["pass without trace"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
			extraLimitedFeatures : [{
				name : "Pass Without Trace",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 2+"
			}],
			spellChanges : {
				"pass without trace" : {
					components : SpellsList["pass without trace"].components + "*",
					compMaterial : SpellsList["pass without trace"].compMaterial + "\nMaterial component is only needed when cast using a spell slot, not when cast using the Merge with Stone trait.",
					changes : "Using Merge with Stone, I can cast Pass Without Trace once per long rest without requiring material components. I can also cast it using a spell slot as normal, but then it does require material components."
				}
			}
		}
	}
};
RaceList["multiverse fire genasi"] = {
	regExpSearch : /^(?=.*(multiverse|motm\b))(?=.*(genasi|planetouched))(?=.*\bfires?\b).*$/i,
	name : "Multiverse Fire Genasi",
	sortname : "Genasi, Fire, Multiverse",
	source : [["MotM", 17]],
	plural : "Fire genasi",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	vision : [["Darkvision", 60]],
	dmgres : ["Fire"],
	age : " can live up to 120 years",
	scoresGeneric : true,
	trait : "Fire Genasi"+
	"\n \u2022 Fire Resistance: I have resistance to fire damage."+
	"\n \u2022 Reach to the Blaze: I know the Produce Flame cantrip. At 3rd level, I learn Burning Hands. At 5th level, I learn Flame Blade. I can cast each spell without using a spell slot or material components once per long rest, or by using spell slots as normal. Intelligence, Wisdom, or Charisma is my spellcasting ability for these (one-time choice).",
	spellcastingAbility : [4, 5, 6],
	spellcastingBonus : {
		name : "Reach to the Blaze",
		spells : ["produce flame"],
		selection : ["produce flame"],
		firstCol : "atwill"
	},
	features : {
		"reach to the blaze (level 3)" : {
			name : "Reach to the Blaze (level 3)",
			minlevel : 3,
			spellcastingBonus : {
				name : "Reach to the Blaze",
				spells : ["burning hands"],
				selection : ["burning hands"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
			extraLimitedFeatures : [{
				name : "Burning Hands",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 1+"
			}]
		},
		"reach to the blaze (level 5)" : {
			name : "Reach to the Blaze (level 5)",
			minlevel : 5,
			spellcastingBonus : {
				name : "Reach to the Blaze",
				spells : ["flame blade"],
				selection : ["flame blade"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
			extraLimitedFeatures : [{
				name : "Flame Blade",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 2+"
			}],
			spellChanges : {
				"flame blade" : {
					components : SpellsList["flame blade"].components + "*",
					compMaterial : SpellsList["flame blade"].compMaterial + "\nMaterial component is only needed when cast using a spell slot, not when cast using the Reach to the Blaze trait.",
					changes : "Using Reach to the Blaze, I can cast Flame Blade once per long rest without requiring material components. I can also cast it using a spell slot as normal, but then it does require material components."
				}
			}
		}
	}
};
RaceList["multiverse water genasi"] = {
	regExpSearch : /^(?=.*(multiverse|motm\b))(?=.*(genasi|planetouched))(?=.*\bwaters?\b).*$/i,
	name : "Multiverse Water Genasi",
	sortname : "Genasi, Water, Multiverse",
	source : [["MotM", 17]],
	plural : "Water genasi",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : "walk", enc : "walk" }
	},
	vision : [["Darkvision", 60]],
	dmgres : ["Acid"],
	age : " can live up to 120 years",
	scoresGeneric : true,
	trait : "Water Genasi"+
	"\n \u2022 Amphibious: I can breathe air and water" + (typePF ? "and I have a swimming speed equal to my walking speed." : ", have a swimming speed equal to walking speed.")+
	"\n \u2022 Acid Resistance: I have resistance to acid damage."+
	"\n \u2022 Call to the Wave: I know the Acid Splash cantrip. At 3rd level, I can cast Create or Destroy Water without using a spell slot once per long rest. At 5th level, I can cast Water Walk without using a spell slot or material components once per long rest. I can also cast each spell using spell slots as normal. Int, Wis, or Cha is my spellcasting ability for these" + (typePF ? " (one-time choice)." : "."),
	spellcastingAbility : [4, 5, 6],
	spellcastingBonus : {
		name : "Call to the Wave",
		spells : ["acid splash"],
		selection : ["acid splash"],
		firstCol : "atwill"
	},
	features : {
		"call to the wave (level 3)" : {
			name : "Call to the Wave (level 3)",
			minlevel : 3,
			spellcastingBonus : {
				name : "Call to the Wave",
				spells : ["create or destroy water"],
				selection : ["create or destroy water"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
			extraLimitedFeatures : [{
				name : "Create or Destroy Water",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 1+"
			}]
		},
		"call to the wave (level 5)" : {
			name : "Call to the Wave (level 5)",
			minlevel : 5,
			spellcastingBonus : {
				name : "Call to the Wave",
				spells : ["water walk"],
				selection : ["water walk"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
			extraLimitedFeatures : [{
				name : "Water Walk",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 3+"
			}],
			spellChanges : {
				"water walk" : {
					components : SpellsList["water walk"].components + "*",
					compMaterial : SpellsList["water walk"].compMaterial + "\nMaterial component is only needed when cast using a spell slot, not when cast using the Call to the Wave trait.",
					changes : "Using Call to the Wave, I can cast Water Walk once per long rest without requiring material components. I can also cast it using a spell slot as normal, but then it does require material components."
				}
			}
		}
	}
};
RaceList["multiverse githyanki"] = {
	regExpSearch : /^(?=.*(multiverse|motm\b))(?=.*githyanki).*$/i,
	name : "Multiverse Githyanki",
	sortname : "Githyanki, Multiverse",
	source : [["MotM", 18]],
	plural : "Githyanki",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	dmgres : ["Psychic"],
	skillstxt : "Choose any one skill that lasts until the end of my next long rest",
	toolProfs : [["Astral Knowledge: tool/weapon", 1]],
	age : " typically live to be around 100 years old. Githyanki who reside in the Astral Plane can live indefinitely.",
	scoresGeneric : true,
	trait : "Githyanki"+
		"\n \u2022 Astral Knowledge: When I finish a long rest, I gain proficiency with 1 skill and with 1 weapon or tool from the PHB until the end of my next long rest."+
		"\n \u2022 Githyanki Psionics: I know the Mage Hand cantrip, but require no components to cast it and the hand is invisible. At 3rd level, I learn Jump. At 5th level, I learn Misty Step. I can cast each without using components or a spell slot once per long rest, as well as by using spell slots as normal. Int, Wis, or Cha is my spellcasting ability for these (one-time choice).",
	spellcastingAbility : [4, 5, 6],
	spellcastingBonus : {
		name : "Githyanki Psionics (1)",
		spells : ["mage hand"],
		selection : ["mage hand"],
		firstCol : "atwill"
	},
	spellChanges : {
		"mage hand" : {
			components : "",
			description : "Create invisible spectral hand for simple tasks or carry up to 10 lb; 1 a to control; can't have multiple",
			changes : "Using Githyanki Psionics, I can cast Mage Hand without requiring components and the spectral hand is invisible."
		}
	},
	features : {
		"githyanki psionics (level 3)" : {
			name : "Githyanki Psionics (level 3)",
			minlevel : 3,
			spellcastingBonus : {
				name : "Githyanki Psionics (3)",
				spells : ["jump"],
				selection : ["jump"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
			extraLimitedFeatures : [{
				name : "Jump",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 1+"
			}],
			spellChanges : {
				"jump" : {
					components : SpellsList["jump"].components + "*",
					compMaterial : SpellsList["jump"].compMaterial + "\nMaterial component is only needed when cast using a spell slot, not when cast using the Githyanki Psionics trait.",
					changes : "Using Githyanki Psionics, I can cast Jump once per long rest without requiring components. I can also cast it using a spell slot as normal, but then it does require components."
				}
			}
		},
		"githyanki psionics (level 5)" : {
			name : "Githyanki Psionics (level 5)",
			minlevel : 5,
			spellcastingBonus : {
				name : "Githyanki Psionics (5)",
				spells : ["misty step"],
				selection : ["misty step"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
			extraLimitedFeatures : [{
				name : "Misty Step",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 2+"
			}],
			spellChanges : {
				"misty step" : {
					components : SpellsList["misty step"].components + "*",
					changes : "Using Githyanki Psionics, I can cast Misty Step once per long rest without requiring components. I can also cast it using a spell slot as normal, but then it does require components."
				}
			}
		}
	}
};
// Githzerai
RaceList["multiverse githzerai"] = {
	regExpSearch : /^(?=.*(multiverse|motm\b))(?=.*githzerai).*$/i,
	name : "Multiverse Githzerai",
	sortname : "Githzerai, Multiverse",
	source : [["MotM", 19]],
	plural : "Githzerai",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	savetxt : { adv_vs : ["charmed", "frightened"] },
	dmgres : ["Psychic"],
	age : " typically live to be around 100 years old. Githzerai who reside in the Astral Plane can live indefinitely.",
	scoresGeneric : true,
	trait : "Githzerai"+
		"\n \u2022 Githzerai Psionics: I know the Mage Hand cantrip, but require no components to cast it and the hand is invisible. At 3rd level, I learn Shield. At 5th level, I learn Detect Thoughts. I can cast each without using components or a spell slot once per long rest, or by using spell slots as normal. Int, Wis, or Cha is my spellcasting ability for these (one-time choice)."+
		"\n \u2022 Mental Discipline: I have advantage on saving throws to avoid or end the charmed and frightened conditions on myself.",
	spellcastingAbility : [4, 5, 6],
	spellcastingBonus : {
		name : "Githzerai Psionics (1)",
		spells : ["mage hand"],
		selection : ["mage hand"],
		firstCol : "atwill"
	},
	spellChanges : {
		"mage hand" : {
			components : "",
			description : "Create invisible spectral hand for simple tasks or carry up to 10 lb; 1 a to control; can't have multiple",
			changes : "Using Githzerai Psionics, I can cast Mage Hand without requiring components and the spectral hand is invisible."
		}
	},
	features : {
		"githzerai psionics (level 3)" : {
			name : "Githzerai Psionics (level 3)",
			minlevel : 3,
			spellcastingBonus : {
				name : "Githzerai Psionics (3)",
				spells : ["shield"],
				selection : ["shield"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
			extraLimitedFeatures : [{
				name : "Shield",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 1+"
			}],
			spellChanges : {
				"shield" : {
					components : SpellsList["shield"].components + "*",
					changes : "Using Githzerai Psionics, I can cast Shield once per long rest without requiring components. I can also cast it using a spell slot as normal, but then it does require components."
				}
			}
		},
		"githzerai psionics (level 5)" : {
			name : "Githzerai Psionics (level 5)",
			minlevel : 5,
			spellcastingBonus : {
				name : "Githzerai Psionics (5)",
				spells : ["detect thoughts"],
				selection : ["detect thoughts"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
			extraLimitedFeatures : [{
				name : "Detect Thoughts",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 2+"
			}],
			spellChanges : {
				"detect thoughts" : {
					components : SpellsList["detect thoughts"].components + "*",
					compMaterial : SpellsList["detect thoughts"].compMaterial + "\nMaterial component is only needed when cast using a spell slot, not when cast using the Githzerai Psionics trait.",
					changes : "Using Githzerai Psionics, I can cast Detect Thoughts once per long rest without requiring components. I can also cast it using a spell slot as normal, but then it does require components."
				}
			}
		}
	},
};
RaceList["multiverse goblin"] = {
	regExpSearch : /^(?=.*(multiverse|motm\b))(?=.*goblin).*$/i,
	name : "Multiverse Goblin",
	sortname : "Goblin, Multiverse",
	source : [["MotM", 20]],
	plural : "Goblins",
	size : 4,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	vision : [["Darkvision", 60]],
	savetxt : { adv_vs : ["charmed"] },
	scoresGeneric : true,
	features : {
		"fury of the small" : {
			name : "Fury of the Small",
			minlevel : 1,
			usages : "Proficiency Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			additional : ProficiencyBonusList.map(function(n) { return "+" + n + " damage"; })
		}
	},
	action : [["bonus action", "Nimble Escape (disengage/hide)"]],
	trait : "Goblin (my creature type is humanoid, goblinoid)"+
		"\n \u2022 Fey Ancestry: I have advantage on saving throws to avoid or end the charmed condition on myself."+
		"\n \u2022 Fury of the Small: A number of times per long rest equal to my Proficiency Bonus, when I damage a creature of a size category larger than mine with an attack or a spell, I can have it take extra damage equal to my Proficiency Bonus."+
		"\n \u2022 Nimble Escape: As a bonus action, I can take the Disengage or Hide action."
};
RaceList["multiverse goliath"] = {
	regExpSearch : /^(?=.*(multiverse|motm\b))(?=.*goliath).*$/i,
	name : "Multiverse Goliath",
	sortname : "Goliath, Multiverse",
	source : [["MotM", 21]],
	plural : "Goliaths",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	dmgres : ["Cold"],
	skills : ["Athletics"],
	scoresGeneric : true,
	features : {
		"stone's endurance" : {
			name : "Stone's Endurance",
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery: "long rest",
			action : [["reaction", ""]]
		}
	},
	trait : "Goliath"+
		"\n \u2022 Stone's Endurance: Proficiency Bonus per long rest, when I take damage, I can use my reaction to reduce the damage by 1d12 + my Constitution modifier."+
		"\n \u2022 Little Giant: I have proficiency in the Athletics skill and count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift."+
		"\n \u2022 Mountain Born: I have resistance to cold damage and I'm acclimated to high altitude, including elevations above 20000 ft.",
	carryingCapacity : 2
};
RaceList["multiverse hobgoblin"] = {
	regExpSearch : /^(?=.*(multiverse|motm\b))(?=.*hobgoblin).*$/i,
	name : "Multiverse Hobgoblin",
	sortname : "Hobgoblin, Multiverse",
	source : [["MotM", 23]],
	plural : "Hobgoblins",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	scoresGeneric : true,
	vision : [["Darkvision", 60]],
	savetxt : { adv_vs : ["charmed"] },
	features : {
		"fey gift" : {
			name : "Fey Gift",
			minlevel : 1,
			usages : "Proficiency bonus per ",
			action : [["bonus action", " (Help action)"]],
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery: "long rest"
		},
		"fortune from the many" : {
			name : "Fortune from the Many",
			minlevel : 1,
			usages: "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery: "long rest"
		},
		"fey gift: additional effect" : {
			name : "Fey Gifts: Additional Effects",
			minlevel : 3,
			toNotesPage : [{
				page3notes : true,
				note : [
					"Whenever I use Fey Gift to take the Help action, I can choose one of these additional effects:",
					" \u2022 Hospitality: The one I help and I each gain 1d6 + my Prof Bonus in temporary HP",
					" \u2022 Passage: The one I help and I both gain +10 ft walking speed until my next turn stats",
					" \u2022 Spite: The first time the one I help hits an attack roll before my next turn starts,",
					"   the creature hit gains disadvantage on its next attack roll within the next minute"
				]
			}]
		}
	},
	trait : "Hobgoblin (my creature type is humanoid, goblinoid)"+
		"\n \u2022 Fey Ancestry: I have adv. on saves to avoid or end being charmed."+
		'\n \u2022 Fey Gift: Prof Bonus per long rest, I can take the Help action as a bonus action. From 3rd-level, I can produce an additional effect when I do this: Hospitality, Passage, or Spite.'+
		"\n \u2022 Fortune from the Many: Prof Bonus per long rest, when I miss an attack or fail an ability check or saving throw, I can gain a bonus to the roll equal to the number of allies I can see within 30 ft of me (max +3)."
};
RaceList["multiverse kenku"] = {
	regExpSearch : /^(?=.*(multiverse|motm\b))(?=.*kenku).*$/i,
	name : "Multiverse Kenku",
	sortname : "Kenku, Multiverse",
	source : [["MotM", 24]],
	plural : "Kenku",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	skillstxt : "Choose any two skills",
	abilitySave : 6,
	scoresGeneric : true,
	features : {
		"kenku recall" : {
			name : "Kenku Recall",
			minlevel : 1,
			usages : "Proficiency Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest"
		}
	},
	trait : "Kenku"+
		"\n \u2022 Expert Duplication: I have adv. on checks to produce exact copies of writing or craftwork."+
		"\n \u2022 Kenku Recall: Proficiency Bonus per long rest, I can give myself advantage on an ability check using any skill in which I have proficiency."+
		"\n \u2022 Mimicry: I can mimic sounds and voices I have heard. Creatures hearing me can determine the imitation with a successful Wisdom (Insight) check against a DC of 8 + my Proficiency Bonus + my Charisma modifier."
};
var MotM_Kobold_Draconic_Cry = "\n \u2022 Draconic Cry: As a bonus action, I can let out a cry. Until the end of my next turn, my allies and I have advantage on attack rolls against any enemies within 10 ft of me who could hear the cry. I can do this a number of times per long rest equal to my Proficiency Bonus.";
RaceList["multiverse kobold"] = {
	regExpSearch : /^(?=.*(multiverse|motm\b))(?=.*kobold).*$/i,
	name : "Multiverse Kobold",
	sortname : "Kobold, Multiverse",
	source : [["MotM", 25]],
	plural : "Kobolds",
	size : 4,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	vision : ["Darkvision", 60],
	scoresGeneric : true,
	features : {
		"draconic cry" : {
			name : "Draconic Cry",
			minlevel : 1,
			usages : "Proficiency bonus per ",
			action : [["bonus action", ""]],
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery: "long rest"
		}
	},
	trait : "Kobold"+
		'\n \u2022 Kobold Legacy: Choose one of the following with the "Racial Options" button:'+
		"\n    - Defiance: I have advantage on saves vs. being frightened"+
		"\n    - Draconic Sorcery: I know one sorcerer cantrip of my choice"+
		"\n    - Craftiness: I gain proficiency in one of the following: Arcana, Investigation, Medicine, Sleight of Hand, or Survival."+
		MotM_Kobold_Draconic_Cry
};
AddRacialVariant("multiverse kobold", "craftiness", {
	regExpSearch : /craftiness/i,
	name : "Craftiness Multiverse Kobold",
	source : [["MotM", 25]],
	skillstxt : "Choose one from Arcana, Investigation, Medicine, Sleight of Hand, or Survival",
	trait : "Kobold"+
		"\n \u2022 Kobold Legacy (Craftiness): I gain proficiency in one of the following skills of my choice: Arcana, Investigation, Medicine, Sleight of Hand, or Survival."+
		MotM_Kobold_Draconic_Cry
});
AddRacialVariant("multiverse kobold", "defiance", {
	regExpSearch : /defiance/i,
	name : "Defiance Multiverse Kobold",
	source : [["MotM", 25]],
	plural : "Kobolds",
	savetxt : { adv_vs : ["frightened"] },
	trait : "Kobold"+
		'\n \u2022 Kobold Legacy (Defiance): I have advantage on saving throws to avoid or end the frightened condition on myself.'+
		MotM_Kobold_Draconic_Cry,
});
AddRacialVariant("multiverse kobold", "draconic sorcery", {
	regExpSearch : /sorcery/i,
	name : "Draconic Sorcery Multiverse Kobold",
	source : [["MotM", 25]],
	spellcastingAbility : [4, 5, 6],
	spellcastingBonus : {
		name : "Kobold Legacy",
		"class" : "sorcerer",
		level : [0, 0],
		firstCol : 'atwill',
		allowUpCasting : true
	},
	trait : "Kobold"+
		'\n \u2022 Kobold Legacy (Draconic Sorcery): I know one cantrip from the sorcerer spell list. Intelligence, Wisdom, or Charisma is my spellcasting ability for it (one-time choice).'+
		MotM_Kobold_Draconic_Cry,
});
// Lizardfolk
RaceList["multiverse lizardfolk"] = {
	regExpSearch : /^(?=.*(multiverse|motm\b))(?=.*lizard(folk|man|men)).*$/i,
	name : "Multiverse Lizardfolk",
	sortname : "Lizardfolk, Multiverse",
	source : [["MotM", 26]],
	plural : "Lizardfolk",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : "walk", enc : "walk" }
	},
	skillstxt : "Choose two from Animal Handling, Medicine, Nature, Perception, Stealth, and Survival",
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /\bbite\b/i,
		name : "Bite",
		source : [["MotM", 26]],
		damage : [1, 6, "slashing"],
	},
	weaponsAdd : ["Bite"],
	armorOptions : {
		regExpSearch : /^(?=.*natural)(?=.*armou?r).*$/i,
		name : "Natural Armor",
		source : [["MotM", 26]],
		ac : 13
	},
	armorAdd : "Natural Armor",
	scoresGeneric : true,
	features : {
		"hungry jaws" : {
			name : "Hungry Jaws",
			minlevel : 1,
			usages : "Proficiency Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			additional : ProficiencyBonusList.map(function(n) { return n + " temp HP"; }),
			action : ["bonus action", ""]
		}
	},
	trait : "Lizardfolk"+
		"\n \u2022 Bite: My unarmed strikes with my fanged maw deal 1d6 slashing damage."+
		"\n \u2022 Hold Breath: I can hold my breath for up to 15 minutes at a time."+
		"\n \u2022 Hungry Jaws: Prof Bonus per long rest, as a bonus action, I can make a special bite attack. If it hits, it deals damage and I gain temporary HP equal to my proficiency bonus."+
		"\n \u2022 Natural Armor: I have an AC of 13 + Dexterity modifier + shield."+
		"\n \u2022 Nature's Intuition: I gain proficiency with two of the following  Animal Handling, Medicine, Nature, Perception, Stealth, or Survival."
};
RaceList["multiverse minotaur"] = {
	regExpSearch : /^(?=.*(multiverse|motm\b))(?=.*minotaur).*$/i,
	name : "Multiverse Minotaur",
	sortname : "Minotaur, Multiverse",
	source : [["MotM", 27]],
	plural : "Minotaurs",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /\bhorns?\b/i,
		name : "Horns",
		source : [["MotM", 27]],
		damage : [1, 6, "piercing"],
		description : "Attack as a bonus action after moving 20 ft with the Dash action"
	},
	weaponsAdd : ["Horns"],
	scoresGeneric : true,
	abilitySave : 1,
	vision : [["Always know north", 0], ["Adv. on Survival to navigate or track", 0]],
	action : [["bonus action", "Goring Rush (with Dash)"], ["bonus action", "Hammering Horns (after hit)"]],
	trait : "Minotaur"+(typePF ? "\n" : "")+
		" \u2022 Horns: My unarmed strikes with horns deal 1d6 piercing damage."+
		"\n \u2022 Goring Rush: When taking a Dash action and moving at least 20 ft, I can make a horns attack as a bonus action."+
		"\n \u2022 Hammering Horns: As a bonus action after I hit a melee attack on my turn during my Attack action, I can shove the target, if it's up to one size larger than me. It must make a Str save (DC 8 + Str mod + Prof Bonus) or be pushed up to 10 ft away from me."+
		"\n \u2022 Labyrinthine Recall: " + (typePF ? "I always know which direction is north, and have adv. on any Wis (Survival) check I make to navigate or track." : "I have adv. on Survival to navigate or track and always know north.")
};
RaceList["multiverse orc"] = {
	regExpSearch : /^(?!.*half)(?=.*(multiverse|motm\b))(?=.*orc).*$/i,
	name : "Multiverse Orc",
	sortname : "Orc, Multiverse",
	source : [["MotM", 28]],
	plural : "Orcs",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	vision : [["Darkvision", 60]],
	scoresGeneric : true,
	trait : "Orc"+
		"\n \u2022 Adrenaline Rush: Proficiency bonus per long rest, I can take the Dash action as a bonus action and gain my proficiency bonus in temporary hit points."+
		"\n \u2022 Powerful Build: I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift."+
		"\n \u2022 Relentless Endurance: Once per long rest, when I am reduced to 0 hit points but not killed outright, I can drop to 1 hit point instead.",
	features : {
		"adrenaline rush" : {
			name : "Adrenaline Rush",
			minlevel : 1,
			usages : "Proficiency Bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			additional : ProficiencyBonusList.map(function(n) { return "+" + n + " temp HP"; }),
			action : [["bonus action", ""]],
		},
		"relentless endurance" : {
			name : "Relentless Endurance",
			minlevel : 1,
			usages : 1,
			recovery : "long rest"
		}
	},
	carryingCapacity : 2
};
RaceList["multiverse satyr"] = {
	regExpSearch : /^(?=.*(multiverse|motm\b))(?=.*satyr).*$/i,
	name : "Multiverse Satyr",
	sortname : "Satyr, Multiverse",
	source : [["MotM", 29]],
	plural : "Satyr",
	size : 3,
	speed : {
		walk : { spd : 35, enc : 25 }
	},
	savetxt : { adv_vs : ["spells"] },
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*(satyr|\bram\b))(?=.*headbutt).*$/i,
		name : "Satyr Headbutt",
		source : [["MotM", 29]],
		damage : [1, 6, "bludgeoning"]
	},
	weaponsAdd : ["Satyr Headbutt"],
	toolProfs : [["Musical instrument", 1]],
	scoresGeneric : true,
	skills : ["Performance", "Persuasion"],
	toolProfs : [["Musical instrument", 1]],
	trait : "Satyr (my creature type is fey, rather than humanoid)"+
		"\n \u2022 Ram: My unarmed strikes with my horned head deal 1d6 bludgeoning damage."+
		"\n \u2022 Magic Resistance: I have advantage on saves against spells."+
		"\n \u2022 Mirthful Leaps: Whenever I make a long or high jump, I can roll a d8 and add the number rolled to the number of feet I cover, even when making a standing jump. This extra distance costs movement as normal."+
		"\n \u2022 Reveler: I have proficiency in Performance, Persuasion, and one musical instrument."
};
RaceList["multiverse sea elf"] = {
	regExpSearch : /^(?!.*half)(?=.*(multiverse|motm\b))((?=.*\b(elfs?|elves|elvish|elven)\b)(?=.*\b(seas?|oceans?|water)\b)).*$/i,
	name : "Multiverse Sea Elf",
	sortname : "Elf, Sea, Multiverse",
	source : [["MotM", 30]],
	plural : "Sea Elves",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : "walk", enc : "walk" }
	},
	languageProfs : ["Common", "Friend of the Sea", 1],
	vision : [["Darkvision", 60]],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
	dmgres : ["Cold"],
	skills : ["Perception"],
	toolProfs : [["Trance: tool or weapon", 2]],
	age : " can live to be 750 years old",
	scoresGeneric : true,
	trait : "Sea Elf (my creature type is humanoid, elf)"+
		"\n \u2022 Trance: I don't need to sleep, and magic can't put me to sleep. I can finish a long rest in 4 hours while meditating consciously. At the end of the trance, I gain 2 weapon/tool proficiencies until the end of my next long rest."+
		"\n \u2022 Child of the Sea. I can breathe air and water and have resistance to cold damage."+
		"\n \u2022 Friend of the Sea: I can communicate simple ideas to beasts with a swimming speed. It can understand my words, though I have no special ability to understand it in return."
};
RaceList["multiverse shadar-kai"] = {
	regExpSearch : /^(?!.*half)(?=.*(multiverse|motm\b))((?=.*shadar-kai)|((?=.*\b(elfs?|elves|elvish|elven)\b)(?=.*\b(shadows?|shadowfell)\b))).*$/i,
	name : "Multiverse Shadar-kai",
	sortname : "Elf, Shadow (Shadar-kai), Multiverse",
	source : [["MotM", 31]],
	plural : "Shadar-kai",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	vision : [["Darkvision", 60]],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
	dmgres : ["Necrotic"],
	skills : ["Perception"],
	toolProfs : [["Trance: tool or weapon", 2]],
	age : " can live to be 750 years old",
	scoresGeneric : true,
	trait : "Shadar-kai (my creature type is humanoid, elf)"+
		"\n \u2022 Trance: I don't need to sleep, and magic can't put me to sleep. I can finish a long rest in 4 hours while meditating consciously. At the end of the trance, I gain 2 weapon/tool proficiencies until the end of my next long rest."+
		"\n \u2022 Blessing of the Raven Queen: Prof Bonus per long rest, as a bonus action, I can magically teleport up to 30 ft to an unoccupied space I can see. Once I reach 3rd level, I then also appear translucent and have resistance to all damage until the start of my next turn.",
	features : {
		"blessing of the raven queen" : {
			name : "Blessing of the Raven Queen",
			minlevel : 1,
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery: "long rest",
			action : [["bonus action", ""]]
		}
	}
};
[{
	name : "Beasthide",
	regExpSearch : "(?=.*beast)(?=.*hide)",
	trait : "\n \u2022 Shifting (Beasthide): Prof Bonus per long rest, as a bonus action, I can assume a more bestial appearance. This transformation lasts for 1 minute, until I die, or until I revert back as a bonus action. When I shift, I gain 1d6 + twice my proficiency bonus in temporary hit points and a +1 bonus to my AC.",
	extra : {
		features : {
			"shift" : {
				name : "Shift",
				minlevel : 1,
				usages : "Proficiency Bonus per ",
				usagescalc : "event.value = How('Proficiency Bonus');",
				recovery : "long rest",
				additional : ProficiencyBonusList.map(function(n) { return "1d6 + " + (2 * n) + " temp HP"; })
			}
		}
	}
}, {
	name : "Longtooth",
	regExpSearch : "(?=.*long)(?=.*(tooth|teeth))",
	trait : "\n \u2022 Shifting (Longtooth): Prof Bonus per long rest, as a bonus action, I can assume a more bestial appearance for 1 minute, until I die, or until I revert back as a bonus action. When I shift, I gain twice my proficiency bonus in temporary hit points and my fangs elongate. As part of the bonus action when I shift and as a bonus action while shifted, I can make a single unarmed strike with my elongated fangs that deals 1d6 piercing damage.",
	extra : {
		action : [["bonus action", "Longtooth Fangs (while shifted)"]],
		weaponOptions : {
			baseWeapon : "unarmed strike",
			regExpSearch : /^(?=.*fangs?)(?=.*long)(?=.*(tooth|teeth)).*$/i,
			name : "Longtooth Fangs",
			source : [["MotM", 32]],
			damage : [1, 6, "piercing"],
			description : "Only while shifted; One attack as bonus action",
		},
		weaponsAdd : ["Longtooth Fangs"]
	}
}, {
	name : "Swiftstride",
	regExpSearch : "(?=.*swift)(?=.*stride)",
	trait : "\n \u2022 Shifting (Swiftstride): Prof Bonus per long rest, as a bonus action, I can assume a more bestial appearance for 1 minute, until I die, or until I revert back as a bonus action. When I shift, I gain twice my proficiency bonus in temporary hit points and +10 ft to my walking speed. Additionally, as a reaction when a creature ends its turn within 5 ft of me, I can move up to 10 ft. This reactive movement doesn't provoke opportunity attacks.",
	extra : {
		action : [['reaction', 'Reactive Stride (while shifted)']]
	}
}, {
	name : "Wildhunt",
	regExpSearch : "(?=.*wild)(?=.*hunt)",
	trait : "\n \u2022 Shifting (Wildhunt): Prof Bonus per long rest, as a bonus action, I can assume a more bestial appearance. This transformation lasts for 1 minute, until I die, or until I revert back as a bonus action. When I shift, I gain twice my proficiency bonus in temporary hit points. While I'm shifted, I have advantage on Wisdom checks and no creature within 30 ft of me can make an attack roll with advantage against me unless I'm incapacitated.",
	extra : {
		vision : [
			["Darkvision", 60],
			["While shifted, creatures within 30 ft can't attack me with adv.", 0]
		],
		savetxt : { text : ["While shifted, Adv. on Wis checks"] }
	}
}].forEach(function(o) {
	var objNm = "multiverse " + o.name.toLowerCase() + " shifter";
	RaceList[objNm] = {
		regExpSearch : RegExp("^(?=.*(multiverse|motm\\b))" + o.regExpSearch + "(?=.*shifter).*$", "i"),
		name : "Multiverse " + o.name + " Shifter",
		sortname : "Shifter, " + o.name + ", Multiverse",
		source : [["MotM", 32]],
		plural : o.name + " shifters",
		size : 3,
		speed : {
			walk : { spd : 30, enc : 20 }
		},
		vision : [["Darkvision", 60]],
		skillstxt : "Choose one skill from Acrobatics, Athletics, Intimidation, or Survival",
		scoresGeneric : true,
		trait : o.name + " Shifter"+
			"\n \u2022 Bestial Instincts: I have proficiency in Acrobatics, Athletics, Intimidation, or Survival."+
			o.trait,
		features : {
			"shift" : {
				name : "Shift",
				minlevel : 1,
				usages : "Proficiency Bonus per ",
				usagescalc : "event.value = How('Proficiency Bonus');",
				recovery : "long rest",
				additional : ProficiencyBonusList.map(function(n) { return 2 * n + " temp HP"; }),
				action : [["bonus action", " (start/end)"]]
			}
		}
	};
	for (var attr in o.extra) {
		RaceList[objNm][attr] = o.extra[attr];
	}
});
RaceList["tabaxi-motm"] = { // just a plain improvement over the previous, no need to make it a separate "multiverse" choice
	regExpSearch : /tabaxi/i,
	name : "Tabaxi",
	sortname : "Tabaxi",
	source : [["MotM", 33]],
	plural : "Tabaxi",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 },
		climb : { spd : "walk", enc : "walk" }
	},
	skills : ["Perception", "Stealth"],
	vision : [["Darkvision", 60]],
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*(tabaxi|\bcat\b))(?=.*claw).*$/i,
		name : "Tabaxi Claws",
		source : [["MotM", 33]],
		damage : [1, 6, "slashing"]
	},
	weaponsAdd : ["Tabaxi Claws"],
	scoresGeneric : true,
	age : " reach adulthood in their late teens and live less than 100 years [according to VGtM]",
	height : ", when Medium sized, range from 5 to well over 6 feet tall (4'10\" + 2d10\") [according to VGtM]",
	weight : ", when Medium sized, weigh around 150 lb (90 + 2d10 \xD7 2d4 lb) [according to VGtM]",
	heightMetric : ", when Medium sized, range from 1,5 to well over 1,8 metres tall (145 + 5d10 cm) [according to VGtM]",
	weightMetric : ", when Medium sized, weigh around 70 kg (40 + 5d10 \xD7 4d4 / 10 kg)",
	features : {
		"feline agility" : {
			name : "Feline Agility",
			minlevel : 1,
			usages : 1,
			recovery : " Turn",
			additional : "still for 1 turn to recover",
			tooltip : " (can be replenished by not moving for one whole turn)"
		}
	},
	trait : "Tabaxi"+
		"\n \u2022 Cat's Talent: I have proficiency in Perception and Stealth."+
		"\n \u2022 Cat's Claws: I can use my retractable claws to make unarmed strikes dealing 1d6 slashing damage. They also give me a climbing speed equal to my walking speed."+
		"\n \u2022 Feline Agility: When moving on my turn in combat, I can move double my speed. Once I do this, I can't do it again until I don't move at all on one of my turns."
};
RaceList["tortle-motm"] = { // just a plain improvement over the previous, no need to make it a separate "multiverse" choice
	regExpSearch : /tortle/i,
	name : "Tortle",
	sortname : "Tortle",
	source : [["MotM", 34]],
	plural : "Tortles",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	skillstxt : "Choose one from Animal Handling, Medicine, Nature, Perception, Stealth, or Survival",
	armorOptions : {
		regExpSearch : /^(?=.*tortle)(?=.*shell).*$/i,
		name : "Tortle's Shell",
		source : [["MotM", 34]],
		ac : 17,
		dex : -10
	},
	armorAdd : "Tortle's Shell",
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*tortle)(?=.*\bclaws?\b).*$/i,
		name : "Tortle's Claws",
		source : [["MotM", 34]],
		damage : [1, 6, "slashing"]
	},
	weaponsAdd : ["Tortle's Claws"],
	scoresGeneric : true,
	age : " reach adulthood by the age of 15 and live an average of 50 years [according to the Tortle Package]",
	height : ", when Medium sized, stand between 5 and 6 feet tall (4'10\" + 2d8\") [according to the Tortle Package]",
	weight : ", when Medium sized, weigh around 450 lb (400 + 2d8 \xD7 2d4 lb) [according to the Tortle Package]",
	heightMetric : ", when Medium sized, stand between 1,5 and 1,8 metres tall (150 + 5d8 cm) [according to the Tortle Package]",
	weightMetric : ", when Medium sized, weigh around 190 kg (180 + 5d8 \xD7 4d4 / 10 kg) [according to the Tortle Package]",
	action : [["action", "Shell Defense (start)"], ["bonus action", "Shell Defense (end)"]],
	trait : "Tortle"+
		"\n \u2022 Claws: My unarmed strikes with my claws deal 1d6 slashing damage."+
		"\n \u2022 Hold Breath: I can hold my breath for up to 1 hour at a time."+
		"\n \u2022 Natural Armor: I have a base AC of 17, but I can't add my Dex to it or wear armor."+
		"\n \u2022 Shell Defense: As an action, I can withdraw into my shell and gain +4 AC and adv. on Str and Con saves, but I count as prone, have speed 0, have disadv. on Dex saves, and can't take reactions. The only action I can take is a bonus action to emerge from the shell."
};
RaceList["multiverse triton"] = {
	regExpSearch : /^(?=.*(multiverse|motm\b))(?=.*triton).*$/i,
	name : "Multiverse Triton",
	sortname : "Triton, Multiverse",
	source : [["MotM", 35]],
	plural : "Triton",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : "walk", enc : "walk" }
	},
	dmgres : ["Cold"],
	languageProfs : ["Common", "Emissary of the Sea", 1],
	vision : [["Darkvision", 60]],
	scoresGeneric : true,
	trait : "Triton"+
		"\n \u2022 Control Air and Water: I can cast the Fog Cloud spell. At 3rd level, Gust of Wind. At 5th level, Water Walk. I can cast each without using a spell slot once per long rest, and by using spell slots as normal. Int, Wis, or Cha is my spellcasting ability for these (one-time choice)."+
		"\n \u2022 Emissary of the Sea: I can communicate simple ideas to beasts, elementals, and monstrosities with a swimming speed. They can understand my words, though I have no special ability to understand them in return."+
		(typePF ? "\n" : "") + " \u2022 Amphibious: I can breathe air and water.",
	spellcastingAbility : [4, 5, 6],
	features : {
		"control air and water (level 1)" : {
			name : "Control Air and Water (level 1)",
			minlevel : 1,
			spellcastingBonus : {
				name : "Control Air and Water",
				spells : ["fog cloud"],
				selection : ["fog cloud"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
			extraLimitedFeatures : [{
				name : "Fog Cloud",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 1+"
			}]
		},
		"control air and water (level 3)" : {
			name : "Control Air and Water (level 3)",
			minlevel : 3,
			spellcastingBonus : {
				name : "Control Air and Water",
				spells : ["gust of wind"],
				selection : ["gust of wind"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
			extraLimitedFeatures : [{
				name : "Gust of Wind",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 2+"
			}]
		},
		"control air and water (level 5)" : {
			name : "Control Air and Water (level 5)",
			minlevel : 5,
			spellcastingBonus : {
				name : "Control Air and Water",
				spells : ["water walk"],
				selection : ["water walk"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
			extraLimitedFeatures : [{
				name : "Water Walk",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 3+"
			}]
		}
	},
};
RaceList["multiverse yuan-ti"] = {
	regExpSearch : /^(?=.*(multiverse|motm\b))(?=.*yuan.ti).*$/i,
	name : "Multiverse Yuan-Ti",
	sortname: "Yuan-Ti, Multiverse",
	source : [["MotM", 36]],
	plural : "Yuan-Ti",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	vision : [["Darkvision", 60]],
	dmgres : ["Poison"],
	savetxt : {
		adv_vs : ["poisoned", "spells"],
	},
	scoresGeneric : true,
	trait : "Yuan-Ti"+
		"\n \u2022 Serpentine Spellcasting: I know the Poison Spray cantrip and I can cast Animal Friendship on snakes at will. Once I reach 3rd level, I can cast Suggestion once per long rest, and by using spell slots as normal. Intelligence, Wisdom, or Charisma is my spellcasting ability for these spells (one-time choice)."+
		"\n \u2022 Magic and Poison Resistance: I have advantage on saving throws against spells and on saving throws to avoid or end being poisoned. I also have resistance to poison damage.",
	spellcastingAbility : [4, 5, 6],
	spellcastingBonus : {
		name : "Serpentine Spellcasting (level 1)",
		spells : ["poison spray", "animal friendship"],
		selection : ["poison spray", "animal friendship"],
		firstCol : 'atwill',
		times : 2
	},
	spellChanges : {
		"animal friendship" : {
			description : "One snake with Intelligence 3 or less save or charmed for the duration",
			changes : "I can cast Animal Friendship at-will, but only to target snakes."
		}
	},
	features : {
		"serpentine spellcasting (level 3)" : {
			name : "Serpentine Spellcasting (level 3)",
			minlevel : 3,
			spellcastingBonus : {
				name : "Serpentine Spellcasting (level 3)",
				spells : ["suggestion"],
				selection : ["suggestion"],
				firstCol : 'oncelr',
				allowUpCasting : true
			},
			extraLimitedFeatures : [{
				name : "Suggestion",
				usages : 1,
				recovery: "long rest",
				altResource : "SS 2+"
			}]
		}
	}
};

// Creatures
// [dupl_start] reprints from Volo's Guide to Monsters
if (!SourceList["V"]) {
	CreatureList["aurochs"] = {
		name : "Aurochs",
		source : [["V", 207], ["MotM", 71]],
		size : 2, //Large
		type : "Beast",
		subtype : "cattle", // MotM addition
		alignment : "Unaligned",
		ac : 11,
		hp : 38,
		hd : [4, 10], //[#, die]
		speed : "50 ft",
		scores : [20, 10, 19, 2, 12, 5], //[Str, Dex, Con, Int, Wis, Cha]
		senses : "",
		passivePerception : 11,
		challengeRating : "2",
		proficiencyBonus : 2,
		attacksAction : 1,
		attacks : [{
			name : "Gore",
			ability : 1,
			damage : [2, 8, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "If used after moving 20 ft straight in the same round, see Charge trait"
		}],
		traits : [{
			name : "Charge",
			description : "If the aurochs moves at least 20 ft straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) piercing damage. A targeted creature must succeed on a DC 15 Strength saving throw or be knocked prone."
		}]
	};
	CreatureList["ox"] = {
		name : "Ox",
		source : [["V", 208], ["MotM", 72]],
		size : 2, //Large
		type : "Beast",
		subtype : "cattle", // MotM addition
		alignment : "Unaligned",
		ac : 10,
		hp : 15,
		hd : [2, 10], //[#, die]
		speed : "30 ft",
		scores : [18, 10, 12, 2, 10, 4], //[Str, Dex, Con, Int, Wis, Cha]
		senses : "",
		passivePerception : 10,
		challengeRating : "1/4",
		proficiencyBonus : 2,
		attacksAction : 1,
		attacks : [{
			name : "Gore",
			ability : 1,
			damage : [1, 6, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "If used after moving 20 ft straight in the same round, deals extra 2d6 damage (Charge)"
		}],
		traits : [{
			name : "Charge",
			description : "If the ox moves at least 20 ft straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 7 (2d6) piercing damage."
		}, {
			name : "Beast of Burden",
			description : "The oxen is considered to be a Huge animal for the purpose of determining its carrying capacity."
		}]
	};
	CreatureList["deep rothe"] = {
		name : "Deep Roth\xE9",
		nameAlt : ["Roth\xE9, Deep"],
		source : [["V", 208], ["MotM", 71]],
		size : 3, //Medium
		type : "Beast",
		subtype : "cattle", // MotM addition
		alignment : "Unaligned",
		ac : 10,
		hp : 13,
		hd : [2, 8], //[#, die]
		speed : "30 ft",
		scores : [18, 10, 12, 2, 10, 4], //[Str, Dex, Con, Int, Wis, Cha]
		senses : "Darkvision 60 ft",
		passivePerception : 10,
		challengeRating : "1/4",
		proficiencyBonus : 2,
		attacksAction : 1,
		attacks : [{
			name : "Gore",
			ability : 1,
			damage : [1, 6, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "If used after moving 20 ft straight in the same round, deals extra 2d6 damage (Charge)"
		}],
		traits : [{
			name : "Charge",
			description : "If the roth\xE9 moves at least 20 ft straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 7 (2d6) piercing damage."
		}, {
			name : "Dancing Lights",
			description : "The roth\xE9 casts dancing lights, requiring no spell components and using Wisdom as the spellcasting ability."
		}]
	};
	CreatureList["stench kow"] = {
		name : "Stench Kow",
		source : [["V", 208], ["MotM", 72]],
		size : 2, //Large
		type : "Fiend", // Change in MotM from Beast
		subtype : "cattle", // MotM addition
		alignment : "Unaligned",
		ac : 10,
		hp : 15,
		hd : [2, 10], //[#, die]
		speed : "30 ft",
		scores : [18, 10, 12, 2, 10, 4], //[Str, Dex, Con, Int, Wis, Cha]
		damage_resistances : "cold, fire, and poison damage",
		senses : "Darkvision 60 ft",
		passivePerception : 10,
		challengeRating : "1/4",
		proficiencyBonus : 2,
		attacksAction : 1,
		attacks : [{
			name : "Gore",
			ability : 1,
			damage : [1, 6, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "If used after moving 20 ft straight in the same round, deals extra 2d6 damage (Charge)"
		}],
		traits : [{
			name : "Charge",
			description : "If the stench kow moves at least 20 ft straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 7 (2d6) piercing damage."
		}, {
			name : "Stench",
			description : "Any creature other than a stench kow starting its turn within 5 ft of a stench kow must make a DC 12 Constitution saving throw or be poisoned until the start of the creature's next turn. On a successful saving throw, the creature is immune to the stench of all stench kows for 1 hour."
		}],
		wildshapeString : "Darkvision 60 ft | Resistant to: cold, fire, poison | Charge: If the stench kow moves at least 20 ft straight toward a target and then hits it with a gore attack on the same turn, it deals extra 2d6 piercing damage | Stench: Any creature starting its turn within 5 ft of a stench kow must make a DC 12 Con save or be poisoned until the start of the its next turn. On a success, it is immune to the stench of all stench kows for 1 hour"
	};
	CreatureList["dolphin"] = {
		name : "Dolphin",
		source : [["V", 208], ["MotM", 97]],
		size : 3, //Medium
		type : "Beast",
		alignment : "Unaligned",
		ac : 12,
		hp : 11,
		hd : [2, 8], //[#, die]
		speed : "swim 60 ft",
		scores : [14, 13, 13, 6, 12, 7], //[Str, Dex, Con, Int, Wis, Cha]
		skills : {
			"perception" : 3
		},
		senses : "Blindsight 60 ft",
		passivePerception : 13,
		challengeRating : "1/8",
		proficiencyBonus : 2,
		attacksAction : 1,
		attacks : [{
			name : "Slam",
			ability : 1,
			damage : [1, 6, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "If used after moving 30 ft straight in the same round, deals extra 1d6 damage (Charge)"
		}],
		traits : [{
			name : "Charge",
			description : "If the dolphin moves at least 30 ft straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 3 (1d6) bludgeoning damage."
		}, {
			name : "Hold Breath",
			description : "The dolphin can hold its breath for 20 minutes."
		}]
	};
	CreatureList["cranium rat"] = {
		name : "Cranium Rat",
		nameAlt : ["Rat, Cranium"],
		source : [["V", 133], ["MotM", 83]],
		size : 5, //Tiny
		type : "Aberration", // Change in MotM from Beast
		companion : "familiar_not_al",
		alignment : "Lawful Evil",
		ac : 12,
		hp : 2,
		hd : [1, 4], //[#, die]
		speed : "30 ft",
		scores : [2, 14, 10, 4, 11, 8], //[Str, Dex, Con, Int, Wis, Cha]
		senses : "Darkvision 30 ft",
		passivePerception : 10,
		challengeRating : "0",
		proficiencyBonus : 2,
		attacksAction : 1,
		attacks : [{
			name : "Bite",
			ability : 2,
			damage : [1, "", "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "",
			abilitytodamage : false
		}],
		traits : [{
			name : "Illumination",
			description : "As a bonus action, the cranium rat can shed dim light from its brain in a 5-foot radius or extinguish the light."
		}, {
			name : "Telepathic Shroud",
			description : "The cranium rat is immune to any effect that would sense its emotions or read its thoughts, as well as to all divination spells."
		}]
	};
	CreatureList["brontosaurus"] = {
		name : "Brontosaurus",
		source : [["V", 139], ["ToA", 215], ["MotM", 95]],
		size : 0, //Gargantuan
		type : "Beast",
		subtype : "dinosaur", // MotM addition
		alignment : "Unaligned",
		ac : 15,
		hp : 121,
		hd : [9, 20], //[#, die]
		speed : "30 ft",
		scores : [21, 9, 17, 2, 10, 7], //[Str, Dex, Con, Int, Wis, Cha]
		saves : ["", "", 6, "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
		senses : "",
		passivePerception : 10,
		challengeRating : "5",
		proficiencyBonus : 3,
		attacksAction : 1,
		attacks : [{
			name : "Stomp",
			ability : 1,
			damage : [5, 8, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (20 ft)",
			description : "Target must succeed on a DC 14 Strength saving throw or be knocked prone"
		}, {
			name : "Tail",
			ability : 1,
			damage : [6, 8, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (20 ft)",
			description : ""
		}]
	};
	CreatureList["deinonychus"] = {
		name : "Deinonychus",
		source : [["V", 139], ["ToA", 217], ["MotM", 95]],
		size : 3, //Medium
		type : "Beast",
		subtype : "dinosaur", // MotM addition
		alignment : "Unaligned",
		ac : 13,
		hp : 26,
		hd : [4, 8], //[#, die]
		speed : "40 ft",
		scores : [15, 15, 14, 4, 12, 6], //[Str, Dex, Con, Int, Wis, Cha]
		skills : {
			"perception" : 3
		},
		senses : "",
		passivePerception : 13,
		challengeRating : "1",
		proficiencyBonus : 2,
		attacksAction : 3,
		attacks : [{
			name : "Claw",
			ability : 1,
			damage : [1, 8, "slashing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "Two claw and one bite as one Attack action; If used after moving 20 ft straight in the same round, see Pounce trait"
		}, {
			name : "Bite",
			ability : 1,
			damage : [1, 8, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "Two claw and one bite as one Attack action (also, see Pounce trait)"
		}],
		traits : [{
			name : "Multiattack",
			description : "The deinonychus makes three attacks: two with its claws and one with its bite."
		}, {
			name : "Pounce",
			description : "If the deinonychus moves at least 20 ft straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the deinonychus can make one bite attack against it as a bonus action."
		}]
	};
	CreatureList["dimetrodon"] = {
		name : "Dimetrodon",
		source : [["V", 139], ["ToA", 217], ["MotM", 95]],
		size : 3, //Medium
		type : "Beast",
		subtype : "dinosaur", // MotM addition
		alignment : "Unaligned",
		ac : 12,
		hp : 19,
		hd : [3, 8], //[#, die]
		speed : "30 ft, swim 20 ft",
		scores : [14, 10, 15, 2, 10, 5], //[Str, Dex, Con, Int, Wis, Cha]
		skills : {
			"perception" : 2
		},
		senses : "",
		passivePerception : 12,
		challengeRating : "1/4",
		proficiencyBonus : 2,
		attacksAction : 1,
		attacks : [{
			name : "Bite",
			ability : 1,
			damage : [2, 6, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : ""
		}]
	};
	CreatureList["hadrosaurus"] = {
		name : "Hadrosaurus",
		source : [["V", 140], ["ToA", 224], ["MotM", 96]],
		size : 2, //Large
		type : "Beast",
		subtype : "dinosaur", // MotM addition
		alignment : "Unaligned",
		ac : 11,
		hp : 19,
		hd : [3, 10], //[#, die]
		speed : "40 ft",
		scores : [15, 10, 13, 2, 10, 5], //[Str, Dex, Con, Int, Wis, Cha]
		skills : {
			"perception" : 2
		},
		senses : "",
		passivePerception : 12,
		challengeRating : "1/4",
		proficiencyBonus : 2,
		attacksAction : 1,
		attacks : [{
			name : "Tail",
			ability : 1,
			damage : [1, 10, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : ""
		}]
	};
	CreatureList["quetzalcoatlus"] = {
		name : "Quetzalcoatlus",
		source : [["V", 140], ["ToA", 230], ["MotM", 96]],
		size : 1, //Huge
		type : "Beast",
		subtype : "dinosaur", // MotM addition
		alignment : "Unaligned",
		ac : 13,
		hp : 30,
		hd : [4, 12], //[#, die]
		speed : "10 ft, fly 80 ft",
		scores : [15, 13, 13, 2, 10, 5], //[Str, Dex, Con, Int, Wis, Cha]
		skills : {
			"perception" : 2
		},
		senses : "",
		passivePerception : 12,
		challengeRating : "2",
		proficiencyBonus : 2,
		attacksAction : 1,
		attacks : [{
			name : "Bite",
			ability : 1,
			damage : [3, 6, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (10 ft)",
			description : "If used after diving 30 ft towards a target, the attack deals 3d6 extra damage (Dive Attack)"
		}],
		traits : [{
			name : "Dive Attack",
			description : "If the quetzalcoatlus is flying and dives at least 30 ft toward a creature and then hits it with a bite attack, the attack deals an extra 10 (3d6) damage to the target."
		}, {
			name : "Flyby",
			description : "The quetzalcoatlus doesn't provoke opportunity attacks when it flies out of an enemy's reach."
		}]
	};
	CreatureList["stegosaurus"] = {
		name : "Stegosaurus",
		source : [["V", 140], ["ToA", 231], ["MotM", 96]],
		size : 1, //Huge
		type : "Beast",
		subtype : "dinosaur", // MotM addition
		alignment : "Unaligned",
		ac : 13,
		hp : 76,
		hd : [8, 12], //[#, die]
		speed : "40 ft",
		scores : [20, 9, 17, 2, 11, 5], //[Str, Dex, Con, Int, Wis, Cha]
		senses : "",
		passivePerception : 10,
		challengeRating : "4",
		proficiencyBonus : 2,
		attacksAction : 1,
		attacks : [{
			name : "Bite",
			ability : 1,
			damage : [6, 6, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (10 ft)",
			description : ""
		}]
	};
	CreatureList["velociraptor"] = {
		name : "Velociraptor",
		source : [["V", 140], ["ToA", 235], ["MotM", 96]],
		size : 5, //Tiny
		type : "Beast",
		subtype : "dinosaur", // MotM addition
		alignment : "Unaligned",
		ac : 13,
		hp : 10,
		hd : [3, 4], //[#, die]
		speed : "30 ft",
		scores : [6, 14, 13, 4, 12, 6], //[Str, Dex, Con, Int, Wis, Cha]
		skills : {
			"perception" : 3
		},
		senses : "",
		passivePerception : 13,
		challengeRating : "1/4",
		proficiencyBonus : 2,
		attacksAction : 2,
		attacks : [{
			name : "Bite",
			ability : 2,
			damage : [1, 6, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "One bite and one claw attack as an Attack action"
		}, {
			name : "Claw",
			ability : 2,
			damage : [1, 4, "slashing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "One bite and one claw attack as an Attack action"
		}],
		actions : [{
			name : "Multiattack",
			description : "The velociraptor makes two attacks: one with its bite and one with its claws."
		}],
		traits : [{
			name : "Pack Tactics",
			description : "The velociraptor has advantage on an attack roll against a creature if at least one of the velociraptor's allies is within 5 ft of the creature and the ally isn't incapacitated."
		}]
	};
	CreatureList["gazer"] = {
		name : "Gazer",
		source : [["V", 126], ["MotM", 134]],
		size : 5, //Tiny
		type : "Aberration",
		subtype : "Beholder", // MotM addition
		companion : "familiar_not_al",
		alignment : "Neutral Evil",
		ac : 13,
		hp : 13,
		hd : [3, 4], //[#, die]
		speed : "0 ft, fly 30 ft",
		scores : [3, 17, 14, 3, 10, 7], //[Str, Dex, Con, Int, Wis, Cha]
		saves : ["", "", "", "", 2, ""], //[Str, Dex, Con, Int, Wis, Cha]
		skills : {
			"perception" : 4,
			"stealth" : 5
		},
		senses : "Darkvision 60 ft",
		passivePerception : 14,
		challengeRating : "1/2",
		proficiencyBonus : 2,
		attacksAction : 1,
		attacks : [{
			name : "Bite",
			ability : 2,
			damage : [1, "", "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : ""
		}, {
			name : "Eye Rays",
			ability : 3,
			damage : ["Special", "", ""], //[#, die, type] "" for die is allowed
			range : "60 ft",
			description : "Shoot two randomly determined different rays as one action; Each ray has its own target; See traits",
			dc : true,
			abilitytodamage : false
		}],
		traits : [{
			name : "Aggressive",
			description : "As a bonus action, the gazer moves its speed toward an enemy that it can see."
		}, {
			name : "Mimicry",
			description : "The gazer can mimic simple speech it has heard, in any language. Any who hear this can tell it is an imitation with a successful DC 10 Wis (Insight) check."
		}],
		actions : [{
			name : "Eye Rays",
			description : "1. Dazing Ray: Wisdom saving throw or charmed until the start of the gazer's next turn. While charmed, half speed and disadv. on attacks.\n2. Fear Ray: Wisdom saving throw or frightened until the start of the gazer's next turn.\n3. Frost Ray: Target must make a Dexterity saving throw or 10 (3d6) cold damage.\n4. Telekinetic Ray: Medium or smaller creature, Strength saving throw or be moved up to 30 ft away from the gazer. If it is an unattended Tiny object, the gazer moves it up to 30 ft in any direction. It can exert fine control on objects this way." // MotM: no longer 10 lb limit, just Tiny object
		}],
		variant : [{
			name : "Variant: Familiar",
			description : "The gazer can serve another creature as a familiar, forming a telepathic bond with its willing master, provided that the master is at least a 3rd-level spellcaster. While the two are bonded, the master can sense what the gazer senses as long as they are within 1 mile of each other. If its master causes it physical harm, the gazer will end its service as a familiar, breaking the telepathic bond."
		}]
	};
} // dupl_end
