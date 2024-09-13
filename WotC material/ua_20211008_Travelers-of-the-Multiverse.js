var iFileName = "ua_20211008_Travelers-of-the-Multiverse.js";
RequiredSheetVersion("13.1.14");
// This file adds the content from the Unearthed Arcana 2021: Travelers of the Multiverse article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:TotM"] = {
	name : "Unearthed Arcana: Travelers of the Multiverse",
	abbreviation : "UA:TotM",
	group : "Unearthed Arcana",
	campaignSetting : "Spelljammer",
	url : "https://media.wizards.com/2021/dnd/downloads/UA2021_TravelersoftheMultiverse.pdf",
	date : "2021/10/08"
};

// New races
RaceList["astral elf-ua"] = {
	regExpSearch : /^(?!.*half)(?=.*\b(elfs?|elves|elvish|elven)\b)(?=.*\b(astral|silver void)\b).*$/i,
	name : "Astral elf",
	sortname : "Elf, Astral",
	source : [["UA:TotM", 2]],
	plural : "Astral elves",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", ["Elvish or other", 1]],
	scoresGeneric : true,
	age : " typically claim adulthood around age 100 and can live to be 750 years old. Because nothing ages in the Astral Plane, astral elves from that plane can be thousands of years old.",
	vision : [["Darkvision", 60]],
	savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
	skills : ["Perception"],
	spellcastingAbility : [4, 5, 6],
	spellcastingBonus : [{
		name : "Astral Fire",
		spells : ["dancing lights", "light", "sacred flame"],
		firstCol : "atwill"
	}],
	extraLimitedFeatures : [{
		name : "Radiant Soul",
		usages : 1,
		recovery : "short rest"
	}],
	trait : "Astral Elf"+
	"\n \u2022 Radiant Soul: Once per short rest when I succeed on a death save, I can regain HP equal to my proficiency bonus + my Int, Wis, or Cha mod (choose when selecting this race)."+
	"\n \u2022 Trance: I don't need to sleep, and magic can't put me to sleep. I can finish a long rest in 4 hours if I spend those hours in a trancelike meditation, during which I remain conscious."+
	"\n \u2022 Trance Proficiencies. Whenever I finish a long rest using Trance, I gain two proficiencies, each one with a weapon or a tool of my choice. They last until I finish my next long rest."
};
RaceList["autognome-ua"] = {
	regExpSearch : /autognome/i,
	name : "Autognome",
	source : [["UA:TotM", 2]],
	plural : "Autognomes",
	size : 4,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", ["Gnomish or other", 1]],
	scoresGeneric : true,
	age : " can live for centuries, up to 500 years",
	armorOptions : [{
		regExpSearch : /^(?=.*armou?red)(?=.*casing).*$/i,
		name : "Armored Casing",
		source : [["UA:TotM", 2]],
		ac : 13,
		selectNow : true
	}],
	extraLimitedFeatures : [{
		name : "Built for Success",
		usages : "Proficiency bonus per ",
		usagescalc : "event.value = How('Proficiency Bonus');",
		recovery : "long rest"
	}],
	dmgres : ["Poison"],
	savetxt : {
		adv_vs : ["paralyzed", "poison"],
		immune : ["disease"]
	},
	toolProfs : [["Tool of my choice", 2]],
	trait : typePF ?
		"Autognome (my type is Construct)"+
		"\n \u2022 Cure Wounds, Healing Word, and Spare the Dying work on me."+
		"\n \u2022 Armored Casing: My base AC is 13 + my Dexterity modifier."+
		"\n \u2022 Built for Success: For my Prof B. per long rest, I can add +1d4 to an attack, check, or save, after I see the roll, but before the effect."+
		"\n \u2022 Mechanical Nature: I don't need to eat, drink or breathe."+
		"\n \u2022 Sentry's Rest: I only need 6 hours to finish a long rest if I stay in an inactive and motionless state during which I'm conscious."+
		"\n \u2022 True Life: If Mending is cast on me, I can expend one HD like during a short rest to regain hit points."
		:
		"Autognome (type is Construct; Cure Wounds, Healing Word, Spare the Dying work on me)"+
		"\n \u2022 Armored Casing: While I'm not wearing armor, my AC is 13 + my Dexterity modifier."+
		"\n \u2022 Built for Success: For my Prof B. per long rest, I can add +1d4 to an attack, check, or save. I can do this after seeing the d20 roll, but before knowing the roll's effects."+
		"\n \u2022 Mechanical Nature: I have immunities/resistances and don't need to eat, drink or breathe"+
		"\n \u2022 Sentry's Rest: I only need 6 hours to finish a long rest if I stay inactive and motionless."+
		"\n \u2022 True Life: If Mending is cast on me, I can expend one HD like during a short rest."
};
RaceList["giff-ua"] = {
	regExpSearch : /giff|hippofolk/i,
	name : "Giff",
	source : [["UA:TotM", 3]],
	plural : "Giff",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	scoresGeneric : true,
	carryingCapacity : 2,
	savetxt : { text : ["Adv. on Str saves and checks"] },
	advantages : [["Strength", true]],
	trait : "Giff"+
	"\n \u2022 Damage Dealer: Like a hippopotamus in a crystalware shop, I am naturally adept at damaging things. When I roll a 1 on a damage die for a melee attack, I can reroll the die and use the new roll. I can do so no more than once per turn."+
	"\n \u2022 Hippo Build: I have advantage on Strength-based ability checks and Strength saving throws. In addition, I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift."
};
RaceList["hadozee-ua"] = {
	regExpSearch : /hadozee/i,
	name : "Hadozee",
	source : [["UA:TotM", 3]],
	plural : "Hadozees",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 },
		climb : { spd : "walk", enc : "walk" }
	},
	scoresGeneric : true,
	action : [
		["bonus action", "Dexterous Feet (Use an Object)"],
		["reaction", "Glide (negate falling damage)"]
	],
	trait : "Hadozee"+
	"\n \u2022 Dexterous Feet: As a bonus action, I can do the Use an Object action."+
	"\n \u2022 Glide: If I'm not incapacitated or wearing heavy armor, I can extend my skin membranes and glide. When I do so, I can perform the following aerial maneuvers:"+
	"   - When I fall, I can move up to 5 ft horizontally for every 1 ft I descend."+
	"   - As a reaction when I would take damage from a fall, I can reduce this damage to 0."
};
RaceList["plasmoid-ua"] = {
	regExpSearch : /plasmoid/i,
	name : "Plasmoid",
	source : [["UA:TotM", 3]],
	plural : "Plasmoids",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	scoresGeneric : true,
	vision : [["Darkvision", 60]],
	dmgres : ["Acid", "Poison"],
	savetxt : {
		adv_vs : ["poison"],
		text : ["Adv. on grapple checks"]
	},
	action : [["bonus action", "Extrude/Reabsorb Pseudopod"]],
	trait : "Plasmoid (my type is Ooze)"+
	(typePF ? "\n" : "") + " \u2022 Hold Breath: I can hold my breath for 1 hour."+
	"\n \u2022 Amorphous: I can squeeze through a 1-inch wide space without my equipment or clothes. " + (typePF ? "I have advantage on grapple checks." : "I also have advantage on ability checks I make to initiate or escape a grapple.")+
	"\n \u2022 Shape Self: While not incapacitated, I can reshape my body to have a head and limbs, or back to a limbless blob (no action). As a bonus action, I can extrude/reabsorb a pseudopod up to 6 inch wide and 10 ft long. It can carry up to 10 lb. I can use it to manipulate objects, open unlocked doors, stow/retrieve objects, or pour out contents of a container." + (typePF ? " It can't attack or use magic items." : "")
};
RaceList["thri-kreen-ua"] = {
	regExpSearch : /thri.?kreen/i,
	name : "Thri-kreen",
	source : [["UA:TotM", 4]],
	plural : "Thri-kreen",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	scoresGeneric : true,
	// age, height and weight taken from Shining South (2004) p17 (using the male option)
	age : " reach maturity around 7 years old and typically live around 30 years",
	height : " stand between 5 and 7 feet tall (5'2\" + 2d10\")",
	weight : " weigh between 140 and 375 pounds (135 + 2d10 \xD7 2d6 lb)",
	heightMetric : " stand from 1,6 to over 2 metres tall (160 + 5d10 cm)",
	weightMetric : " weigh between 60 and 180 kg (60 + 5d10 \xD7 4d6 / 10 kg)",
	languageProfs : ["Common", "Thri-kreen Telepathy", 1],
	vision : [["Darkvision", 60]],
	armorOptions : [{
		regExpSearch : /^(?=.*carapace)(?=.*chameleon).*$/i,
		name : "Chameleon Carapace",
		source : [["UA:TotM", 4]],
		ac : 13,
		selectNow : true
	}],
	action : [["action", "Chameleon Carapace"]],
	trait : "Thri-kreen (my type is Monstrosity)"+
	"\n \u2022 Chameleon Carapace: " + (typePF ? "AC 13 + Dex," : "My base AC is 13 + Dex mod. I have") + " adv. on Stealth checks to hide."+
	"\n \u2022 Secondary Arms: I have two slightly smaller arms below my primary pair of arms." + (typePF ? " " : "\n   ") + "I can't use these secondary arms to wield a shield or weapons other than light weapons."+
	"\n \u2022 Sleepless: I don't " + (typePF ? "" : "require ") + "sleep. I rest by refraining from strenuous activity."+
	"\n \u2022 " + (typePF ? "Thri-kreen " : "") + "Telepathy: I can communicate telepathically to any number of willing creatures I can see that understand at least one language, while within 120 ft. Any can break this (no action)."
};
