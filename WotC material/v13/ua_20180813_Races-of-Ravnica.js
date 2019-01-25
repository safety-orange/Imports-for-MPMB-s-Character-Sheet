var iFileName = "ua_20180813_Races-of-Ravnica.js";
RequiredSheetVersion(13);
// This file adds the content from the Unearthed Arcana: Races of Ravnica article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:RoR"] = {
	name : "Unearthed Arcana: Races of Ravnica",
	abbreviation : "UA:RoR",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2018/dnd/downloads/UA_RavnicaRaces.pdf",
	date : "2018/08/13"
};

// Add Loxodon
RaceList["loxodon"] = {
	regExpSearch : /loxodon/i,
	name : "Loxodon",
	source : ["UA:RoR", 1],
	plural : "Loxodons",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common"],
	savetxt : { adv_vs : ["frightened"] },
	toolProfs : ["Mason's tools"],
	armorOptions : {
		regExpSearch : /^((?=.*natural)(?=.*armou?r)|(?=.*loxodon)(?=.*(hide|skin))).*$/i,
		name : "Natural Armor",
		source : ["UA:RoR", 1],
		ac : 13
	},
	armorAdd : "Natural Armor",
	vision : [["Keen Smell", 0]],
	age : " physically mature at the same rate as humans, but are considered young until they reach the age of 60 and live about 450 years",
	height : " stand between 7 and 8 feet tall",
	weight : " weigh between 300 and 400 pounds",
	heightMetric : " stand between 2 and 2,5 metres tall",
	weightMetric : " weigh between 150 to 200 kg",
	scores : [0, 0, 2, 0, 1, 0],
	trait : "Loxodon (+2 Constitution, +1 Wisdom)" + desc([
		"Powerful Build: I count as one size larger for my carrying capacity, push, drag, and lift.",
		"Stonecunning: I can add double my proficiency bonus to Intelligence (History) checks related to the origin of stonework, instead of my normal proficiency bonus.",
		"Keen Smell: I have advantage on Wisdom (Perception) and Intelligence (Investigation) checks that rely on smell.",
		"Natural Armor: " + (typePF ? "I have an AC of" : "My thick, leathery skin gives me AC") + " 13 + Dexterity modifier + shield."
	]),
	eval : "tDoc.getField('Carrying Capacity Multiplier').value *= 2;",
	removeeval : "tDoc.getField('Carrying Capacity Multiplier').value /= 2;"
};

// Add Simic Hybrid
RaceList["simic hybrid"] = {
	regExpSearch : /^(?=.*(simic|elf|dwarf|human|orc))(?=.*hybrid).*$/i,
	name : "Simic hybrid",
	source : ["UA:RoR", 3],
	plural : "Simic hybrids",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Elvish"],
	vision : [["Darkvision", 60]],
	weaponOptionsSp : [{
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*grappling)(?=.*(appendage|tentacle|claw)).*$/i,
		name : "Grappling Appendages",
		source : ["UA:RoR", 3],
		damage : [1, 6, "bludgeoning"],
		description : "After hitting, start grapple on target as a bonus action"
	}, {
		regExpSearch : /^(?=.*acid)(?=.*spit).*$/i,
		name : "Acid Spit",
		source : ["UA:RoR", 3],
		ability : 3,
		type : "Natural",
		damage : ["C", 10, "acid"],
		range : "30 ft",
		description : "Dex save, success - no damage",
		abilitytodamage : false,
		dc : true
	}],
	extraACSp : {
		name : "Carapace",
		mod : 1,
		text : "I gain a +1 bonus to AC while I'm not wearing heavy armor.",
		stopeval : function (v) { return v.heavyArmor; }
	},
	age : " age the same as the base humanoid race, although the maximum lifespan is somewhat reduced",
	height : " are of the same height as another of its humanoid race",
	weight : " are of the same weight as another of its humanoid race",
	scorestxt : "+2 Constitution and +1 to one other ability score of my choice",
	scores : [0, 0, 2, 0, 0, 0],
	trait : "Simic Hybrid (+2 Constitution and +1 to one other ability score of my choice)\n   Animal Enhancement (1st level): Choose one to three types of enhancement using the \"Racial Options\" button: Manta Glide, Nimble Climber, or Underwater Adaptation.\n   Animal Enhancement (5th level): At 5th level, I gain another animal enhancement. I can either choose one I didn't take at 1st level or choose Grappling Appendages, Carapace, or Acid Spit.",
	features : {
		"animal enhancement" : {
			name : "Animal Enhancement",
			minlevel : 5,
			eval : 'RaceList["simic hybrid"].set5thLvlAE();',
			removeeval : 'RaceList["simic hybrid"].remove5thLvlAE();'
		}
	},
	set5thLvlAE : function() {
		var curChoice = ParseRace(What('Race Remember'))[1].capitalize();
		var AEoptions = ["Manta Glide", "Nimble Climber", "Underwater Adaptation", "Grappling Appendages", "Carapace", "Acid Spit"];
		if (curChoice && AEoptions.indexOf(curChoice) !== -1) AEoptions.splice(AEoptions.indexOf(curChoice), 1);
		var theChoice = AskUserOptions('Simic Hybrid 5th-level Animal Enhancement', (sheetVersion > 12.999 ? 'The Simic Hybrid race offers a choice of animal enhancement at 5th-level. ' : '') + 'Make a selection to update the sheet accordingly. You can only change this selection by removing the Simic Hybrid race or changing its variant.', AEoptions, 'radio', true);
		var feaTxt = '';
		var rObjNm = "simic hybrid";
		var rObj = RaceList[rObjNm];
		var rNm = rObj.name;
		switch (theChoice) {
			case "Manta Glide":
				feaTxt = "Animal Enhancement (Manta Glide): I have manta ray-like wings that I can use to slow my fall. I subtract 100 ft when calculating falling damage and I can move 2 ft horizontally for every 1 ft I descend.";
				break;
			case "Nimble Climber":
				feaTxt = "Animal Enhancement (Nimble Climber): I have a climbing speed equal to my walking speed.";
				SetProf("speed", true, { climb : { spd : 'walk', enc : 'walk' } }, rNm);
				break;
			case "Underwater Adaptation":
				feaTxt = "Animal Enhancement (Underwater Adaptation): I can breathe air and water, and I have a swimming speed equal to my walking speed.";
				SetProf("speed", true, { swim : { spd : 'walk', enc : 'walk' } }, rNm);
				break;
			case "Grappling Appendages":
				feaTxt = "Animal Enhancement (Grappling Appendages): I have two extra appendages which I can use to make unarmed strikes for 1d6 bludgeoning damage. As a bonus action after hitting with them, I can try to grapple the target. I can't use these appendages to wield anything.";
				processWeaponOptions(true, rObjNm, rObj.weaponOptionsSp[0]);
				AddWeapon("Grappling Appendages");
				AddAction("bonus action", "Grappling Appendages (after hit)", "being a " + rNm);
				break;
			case "Carapace":
				feaTxt = "Animal Enhancement (Carapace): My skin is covered by a thick shell, giving my a +1 to AC whenever I'm not wearing heavy armor.";
				processExtraAC(true, rNm + ": Animal Enhancement (Carapace)", rObj.extraACSp, rNm);
				break;
			case "Acid Spit":
				feaTxt = "Animal Enhancement (Acid Spit): As an action, I can spit acid at a single creature within 30 ft that I can see. It must make a Dexterity saving throw with DC 8 + Con modifier + prof bonus or take 2d10 acid damage. This increases with 1d10 at 11th and 17th level.";
				processWeaponOptions(true, rObjNm, rObj.weaponOptionsSp[1]);
				AddWeapon("Acid Spit");
				break;
		};
		if (What("Unit System") !== "imperial") feaTxt = ConvertToMetric(feaTxt, 0.5);
		Value("Racial Traits", What("Racial Traits").replace(/Animal Enhancement \(5th level\):.*/, '') + feaTxt);
		Value("Race Remember", What("Race Remember") + "-*" + theChoice.replace(' ', '_') + "*");
	},
	remove5thLvlAE : function() {
		var theRegex = /\*(Manta_Glide|Nimble_Climber|Underwater_Adaptation|Grappling_Appendages|Carapace|Acid_Spit)\*/i;
		var raceRem = What("Race Remember");
		if (!theRegex.test(raceRem)) return;
		var theChoice = raceRem.match(theRegex)[1].replace('_', ' ').capitalize();
		var rObjNm = "simic hybrid";
		var rObj = RaceList[rObjNm];
		var rNm = rObj.name;
		switch (theChoice) {
			case "Nimble Climber":
				SetProf("speed", false, { climb : { spd : 'walk', enc : 'walk' } }, rNm);
				break;
			case "Underwater Adaptation":
				SetProf("speed", false, { swim : { spd : 'walk', enc : 'walk' } }, rNm);
				break;
			case "Grappling Appendages":
				RemoveWeapon("Grappling Appendages");
				processWeaponOptions(false, rObjNm, rObj.weaponOptionsSp[0]);
				RemoveAction("bonus action", "Grappling Appendages (after hit)", "being a " + rNm);
				break;
			case "Carapace":
				processExtraAC(false, rNm + ": Animal Enhancement (Carapace)", rObj.extraACSp, rNm);
				break;
			case "Acid Spit":
				RemoveWeapon("Acid Spit");
				processWeaponOptions(false, rObjNm, rObj.weaponOptionsSp[1]);
				break;
		};
		Value("Racial Traits", What("Unit System") === "imperial" ? CurrentRace.trait : ConvertToMetric(CurrentRace.trait, 0.5));
	}
};
AddRacialVariant("simic hybrid", "manta glide", {
	regExpSearch : /manta glide/i,
	source : ["UA:RoR", 3],
	trait : "Simic Hybrid (+2 Constitution and +1 to one other ability score of my choice)\n   Animal Enhancement (Manta Glide): I have manta ray-like wings that I can use to slow my fall. I subtract 100 ft when calculating falling damage and I can move 2 ft horizontally for every 1 ft I descend.\n   Animal Enhancement (5th level): At 5th level, I gain another animal enhancement. I can choose Nimble Climber, Underwater Adaptation, Grappling Appendages, Carapace, or Acid Spit."
});
AddRacialVariant("simic hybrid", "nimble climber", {
	regExpSearch : /nimble climber/i,
	source : ["UA:RoR", 3],
	speed : {
		walk : { spd : 30, enc : 20 },
		climb : { spd : 'walk', enc : 'walk' }
	},
	trait : "Simic Hybrid (+2 Constitution and +1 to one other ability score of my choice)\n   Animal Enhancement (Nimble Climber): I have a climbing speed equal to my walking speed.\n   Animal Enhancement (5th level): At 5th level, I gain another animal enhancement. I can choose Manta Glide, Underwater Adaptation, Grappling Appendages, Carapace, or Acid Spit."
});
AddRacialVariant("simic hybrid", "underwater adaptation", {
	regExpSearch : /underwater adaptation/i,
	source : ["UA:RoR", 3],
	speed : {
		walk : { spd : 30, enc : 20 },
		swim : { spd : 'walk', enc : 'walk' }
	},
	trait : "Simic Hybrid (+2 Constitution and +1 to one other ability score of my choice)\n   Animal Enhancement (Underwater Adaptation): I can breathe air and water, and I have a swimming speed equal to my walking speed.\n   Animal Enhancement (5th level): At 5th level, I gain another animal enhancement. I can choose Manta Glide, Nimble Climber, Grappling Appendages, Carapace, or Acid Split."
});

// Add Vedalken
RaceList["vedalken"] = {
	regExpSearch : /vedalken/i,
	name : "Vedalken",
	source : ["UA:RoR", 4],
	plural : "Vedalken",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	savetxt : { text : ["Adv. on Int/Wis/Cha saves"] },
	skillstxt : "Choose one from Arcana, History, Investigation, Medicine, Performance, or Sleight of Hand. I add 1d4 to a check with the chosen skill",
	languageProfs : ["Common"],
	toolProfs : [["Any tool", 1]],
	age : " age at the same rate as humans and typically live 350 to 500 years",
	height : " stand between 6 and 6 and a half feet tall",
	weight : " weigh around 200 pounds",
	heightMetric : " stand between 1,8 and 2 metres tall",
	weightMetric : " weigh around 100 kg",
	scores : [0, 0, 0, 2, 1, 0],
	trait : "Vedalken (+2 Intelligence, +1 Wisdom)\n   Vedalken Dispassion: I have advantage on all Intelligence, Wisdom, and Charisma saving throws.\n   Tireless Precision: I am proficient with any one tool and one skill of my choice: Arcana, History, Investigation, Medicine, Performance, or Sleight of Hand. Whenever I make an ability check with the chose tool or skill, I can add 1d4 to the check's total."
};

// Add Viashino
RaceList["viashino"] = {
	regExpSearch : /viashino/i,
	name : "Viashino",
	source : ["UA:RoR", 5],
	plural : "Viashino",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	skillstxt : "Choose one from Acrobatics or Stealth",
	languageProfs : ["Common", "Draconic"],
	weaponOptions : [{
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*viashino)(?=.*bite).*$/i,
		name : "Viashino bite",
		source : ["UA:RoR", 5],
		damage : [1, 4, "piercing"]
	}, {
		regExpSearch : /^(?=.*lashing)(?=.*tail).*$/i,
		name : "Lashing tail",
		source : ["UA:RoR", 5],
		ability : 1,
		type : "Natural",
		damage : [1, 4, "slashing"],
		range : "Melee",
		description : "Only as reaction",
		abilitytodamage : true,
		monkweapon : true
	}],
	weaponsAdd : ["Viashino Bite", "Lashing Tail"],
	age : " reach adulthood in their early teens and rarely live past 60 due to their violent lives",
	height : " stand about as tall as humans",
	weight : " have lithe, wiry frames and are thus lighter than a human of the same height",
	scores : [1, 2, 0, 0, 0, 0],
	action : ["reaction", "Lashing Tail (after being hit)"],
	trait : "Viashino (+1 Strength, +2 Dexterity)\n\nBite: I can use my fanged maw to make unarmed strikes dealing 1d4 piercing damage.\n\nLashing Tail: I have semi-prehensile tail that is tipped with a bony blade. As a reaction when a creature I can see within 5 ft damages me with a melee attack, I can use my tail to make an unarmed strike against it dealing 1d4 slashing damage."
};
