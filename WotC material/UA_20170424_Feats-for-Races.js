var iFileName = "UA_20170424_Feats-for-Races.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Unearthed Arcana: Feats for Races article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:FR"] = {
	name : "Unearthed Arcana: Feats for Races",
	abbreviation : "UA:FR",
	group : "Unearthed Arcana",
	url : "http://media.wizards.com/2017/dnd/downloads/RJSJC2017_04UASkillFeats_24v10.pdf",
	date : "2017/04/24"
};

// Adds 46 feats (23 + 13 variants of Grudge-Bearer), all of which have a racial prerequisite
FeatsList["barbed hide"] = {
	name : "Barbed Hide",
	source : ["UA:FR", 1],
	prerequisite : "Being a Tiefling",
	prereqeval : "CurrentRace.known.indexOf('tiefling') !== -1",
	description : "I gain expertise with Intimidation, or proficiency if not so already. As a bonus action, I can protrude/retract small barbs from my skin. With them out, at the start of each of my turns I deal 1d6 piercing damage to any I'm grappling or are grappling me. [+1 Cha]",
	improvements : "Barbed Hide (feat): +1 Charisma;",
	scores : [0, 0, 0, 0, 0, 1],
	skills : "\n\n" + toUni("Barbed Hide (feat)") + ": Intimidation, or expertise if already proficient.",
	eval : "AddSkillProf('Inti', true, 'increment')",
	removeeval : "AddSkillProf('Inti', false, 'increment')",
	action : ["bonus action", ""]
};
FeatsList["bountiful luck"] = {
	name : "Bountiful Luck",
	source : ["UA:FR", 1],
	prerequisite : "Being a Halfling",
	prereqeval : "CurrentRace.known.indexOf('halfling') !== -1",
	description : "Whenever an ally I can see within 30 feet of me rolls a 1 on the d20 for an attack roll, an ability check, or a saving throw, I can use my reaction to let the ally reroll the die. The ally must use the new roll.",
	action : ["reaction", ""]
};
FeatsList["critter friend"] = {
	name : "Critter Friend",
	source : ["UA:FR", 1],
	prerequisite : "Being a Forest Gnome",
	prereqeval : "CurrentRace.known.indexOf('forest gnome') !== -1",
	description : "I gain expertise with Animal Handling, or proficiency if I didn't have that already. I can cast Speak With Animals and Animal Friendship without using a spell slot. I can cast each of these spells like this once per long rest. Intelligence is my spellcasting ability for these.",
	skills : "\n\n" + toUni("Critter Friend (feat)") + ": Animal Handling, or expertise if already proficient.",
	eval : "AddSkillProf('Ani', true, 'increment')",
	removeeval : "AddSkillProf('Ani', false, 'increment')",
	spellcastingBonus : [{
		name : "Once per long rest",
		spellcastingAbility : 4,
		spells : ["speak with animals"],
		selection : ["speak with animals"],
		oncelr : true
	}, {
		name : "Once per long rest",
		spells : ["animal friendship"],
		selection : ["animal friendship"],
		oncelr : true
	}]
};
FeatsList["dragon fear"] = {
	name : "Dragon Fear",
	source : ["UA:FR", 2],
	prerequisite : "Being a Dragonborn",
	prereqeval : "CurrentRace.known.indexOf('dragonborn') !== -1",
	calculate : "event.value = 'I can expend a Breath Weapon use to roar instead. Each creature of my choice within 30 ft that can see or hear me must make a DC ' + (8 + Number(What('Proficiency Bonus')) + Number(What('Wis Mod'))) + ' Wis save (8 + prof. bonus + Cha mod) or be frightened for 1 min. It can repeat the save whenever it takes damage. [+1 Str or Cha]';",
	improvements : "Dragon Fear (feat): +1 Strength or Charisma;",
	eval : "AddAction('action', 'Breath Weapon or Dragon Fear', 'Dragon Fear (feat)', 'Breath Weapon');",
	removeeval : "AddAction('action', 'Breath Weapon', 'Dragonborn (Draconic Ancestry)', 'Breath Weapon or Dragon Fear'); if (CurrentRace.known !== 'dragonborn') { RemoveAction('action', 'Breath Weapon'); }; "
};
FeatsList["dragon hide"] = {
	name : "Dragon Hide",
	source : ["UA:FR", 2],
	prerequisite : "Being a Dragonborn",
	prereqeval : "CurrentRace.known.indexOf('dragonborn') !== -1",
	description : "I gain retractable claws that I can retract or extend, requiring no action. While extended, my unarmed strikes deal 1d4 slashing damage. My scales harden, giving me a +1 bonus to AC when I'm not wearing armor. [+1 Strength or Charisma]",
	improvements : "Dragon Hide (feat): +1 Strength or Charisma;",
	eval : "AddWeapon('Retractable Claws'); AddACMisc(1, 'Dragon Hide', 'While not wearing armor, the Dragon Hide feat gives a +1 bonus to AC', 'CurrentArmour.known && ArmourList[CurrentArmour.known].type');",
	removeeval : "RemoveWeapon('Retractable Claws'); AddACMisc(0, 'Dragon Hide', 'While not wearing armor, the Dragon Hide feat gives a +1 bonus to AC');"
};
FeatsList["dragon wings"] = {
	name : "Dragon Wings",
	source : ["UA:FR", 2],
	prerequisite : "Being a Dragonborn",
	prereqeval : "CurrentRace.known.indexOf('dragonborn') !== -1",
	description : "I sprout draconic wings. With my wings, I have a flying speed of 20 feet if I am not wearing heavy armor and I am not exceeding my carrying capacity or encumbered.",
	eval : "var theSpd = What('Unit System') === 'imperial' ? '20 ft' : ConvertToMetric('20 ft', 0.5); AddString('Speed', theSpd + ' fly', '\\n');",
	removeeval : "var theSpd = What('Unit System') === 'imperial' ? '20 ft' : ConvertToMetric('20 ft', 0.5); RemoveString('Speed', theSpd + ' fly');"
};
FeatsList["drow high magic"] = {
	name : "Drow High Magic",
	source : ["UA:FR", 2],
	prerequisite : "Being a Drow (Dark Elf)",
	prereqeval : "CurrentRace.known.indexOf('dark elf') !== -1",
	description : "I can cast Detect Magic at will, without expending a spell slot. I can also cast Levitate and Dispel Magic without expending a spell slot, but each only once per long rest. Charisma is my spellcasting ability for these three spells.",
	spellcastingBonus : [{
		name : "At will",
		spellcastingAbility : 6,
		spells : ["detect magic"],
		selection : ["detect magic"],
		atwill : true
	}, {
		name : "Once per long rest",
		spells : ["levitate"],
		selection : ["levitate"],
		oncelr : true
	}, {
		name : "Once per long rest",
		spells : ["dispel magic"],
		selection : ["dispel magic"],
		oncelr : true
	}]
};
FeatsList["dwarf resilience"] = {
	name : "Dwarf Resilience",
	source : ["UA:FR", 2],
	prerequisite : "Being a Dwarf",
	prereqeval : "CurrentRace.known.indexOf('dwarf') !== -1",
	description : "Whenever I take the Dodge action in combat, I can spend one Hit Die to heal myself. I roll the die, add my Constitution modifier, and regain a number of hit points equal to the total (minimum of 1). [+1 Constitution]",
	improvements : "Dwarf Resilience (feat): +1 Constitution;",
	scores : [0, 0, 1, 0, 0, 0]
};
FeatsList["elven accuracy"] = {
	name : "Elven Accuracy",
	source : ["UA:FR", 2],
	prerequisite : "Being an Elf or a Half-Elf",
	prereqeval : "(/elf|eladrin/i).test(CurrentRace.known)",
	description : "Whenever I have advantage on an attack roll, I can reroll one of the dice once. [+1 Dexterity]",
	improvements : "Elven Accuracy (feat): +1 Dexterity;",
	scores : [0, 1, 0, 0, 0, 0]
};
FeatsList["everybody's friend"] = {
	name : "Everybody's Friend",
	source : ["UA:FR", 2],
	prerequisite : "Being a Half-Elf",
	prereqeval : "(/^(?=.*half)(?=.*elf).*$/i).test(CurrentRace.known)",
	description : "I gain expertise with Deception and Persuasion, or proficiency with them if I didn't have that already. [+1 Charisma]",
	improvements : "Everybody's Friend (feat): +1 Charisma;",
	scores : [0, 0, 0, 0, 0, 1],
	skills : "\n\n" + toUni("Everybody's Friend (feat)") + ": Deception and Persuasion, or, for each, expertise if already proficient.",
	eval : "AddSkillProf('Dec', true, 'increment'); AddSkillProf('Pers', true, 'increment');",
	removeeval : "AddSkillProf('Dec', false, 'increment'); AddSkillProf('Pers', false, 'increment');"
};
FeatsList["fade away"] = {
	name : "Fade Away",
	source : ["UA:FR", 2],
	prerequisite : "Being a Gnome",
	prereqeval : "CurrentRace.known.indexOf('gnome') !== -1",
	description : "As a reaction when I take damage, I can magically become invisible until the end of my next turn or until I attack, deal damage, or force someone to make a saving throw. Once I do this, I can't do so again until I finish a short rest. [+1 Intelligence]",
	improvements : "Fade Away (feat): +1 Intelligence;",
	scores : [0, 0, 0, 1, 0, 0],
	action : ["reaction", ""],
	eval : "AddFeature('Fade Away', 1, '', 'short rest', 'the Fade Away feat');",
	removeeval : "RemoveFeature('Fade Away');"
};
FeatsList["fey teleportation"] = {
	name : "Fey Teleportation",
	source : ["UA:FR", 3],
	prerequisite : "Being a High Elf",
	prereqeval : "CurrentRace.known.indexOf('high elf') !== -1",
	description : "I can cast Misty Step without using a spell slot. I can do so once per short rest. Intelligence is my spellcasting ability for this spell. [+1 Intelligence]",
	improvements : "Fey Teleportation (feat): +1 Intelligence;",
	scores : [0, 0, 0, 1, 0, 0],
	spellcastingBonus : {
		name : "Once per short rest",
		spellcastingAbility : 4,
		spells : ["misty step"],
		selection : ["misty step"],
		oncesr : true
	},
	eval : "AddFeature('Fey Teleportation', 1, '', 'short rest', 'Fey Teleportation feat');",
	removeeval : "RemoveFeature('Fey Teleportation');"
};
FeatsList["flames of phlegethos"] = {
	name : "Flames of Phlegethos",
	source : ["UA:FR", 3],
	prerequisite : "Being a Tiefling",
	prereqeval : "CurrentRace.known.indexOf('tiefling') !== -1",
	description : "When I cast a fire damage spell, I can reroll any 1 on fire damage dice. I can then sheathe myself in flame until my next turn ends. These shed bright light in 30 ft, dim light in 30 ft and cause any within 5 ft that hit me in melee take 1d4 fire damage. [+1 Int or Cha]",
	improvements : "Flames of Phlegethos (feat): +1 Intelligence or Charisma;"	
};
FeatsList["grudge-bearer"] = {
	name : "Grudge-Bearer [2 humanoids]",
	source : ["UA:FR", 3],
	prerequisite : "Being a Dwarf",
	prereqeval : "CurrentRace.known.indexOf('dwarf') !== -1",
	description : "My hatred for 2 humanoid races gives me these benefits against them: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related Arcana/History/Nature/Religion checks [+1 Str, Con, or Wis]",
	improvements : "Grudge-Bearer [2 humanoids] (feat): +1 Strength, Constitution, or Wisdom;"	
};
FeatsList["grudge-bearer [aberrations]"] = {
	name : "Grudge-Bearer [aberrations]",
	source : ["UA:FR", 3],
	prerequisite : "Being a Dwarf",
	prereqeval : "CurrentRace.known.indexOf('dwarf') !== -1",
	description : "My hatred for aberrations gives me these benefits against them: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related Arcana, History, Nature, and Religion checks [+1 Str, Con, or Wis]",
	improvements : "Grudge-Bearer [aberrations] (feat): +1 Strength, Constitution, or Wisdom;"	
};
var AmendGrudgeBearerFeats = function() { // Create the other variants of the Grudge-bearer feat dynamically
	var GBarray = ["beasts", "celestials", "constructs", "dragons", "elementals", "fey", "fiends", "giants", "monstrosities", "oozes", "plants", "undead"];
	for (var i = 0; i < GBarray.length; i++) {
		var GBcrea = GBarray[i];
		var theNm = "grudge-bearer [" + GBcrea + "]";
		FeatsList[theNm] = newObj(FeatsList["grudge-bearer [aberrations]"]);
		FeatsList[theNm].name = FeatsList[theNm].name.replace("aberrations", GBcrea);
		FeatsList[theNm].description = FeatsList[theNm].description.replace("aberrations", GBcrea);
		FeatsList[theNm].improvements = FeatsList[theNm].improvements.replace("aberrations", GBcrea);
	};
}();
FeatsList["human determination"] = {
	name : "Human Determination",
	source : ["UA:FR", 3],
	prerequisite : "Being a Human",
	prereqeval : "CurrentRace.known.indexOf('human') !== -1",
	description : "When I make an attack roll, an ability check, or a saving throw, I can do so with advantage. Once I use this ability, I can't do so again until I finish a short rest.\n[+1 to one ability score]",
	improvements : "Human Determination (feat): +1 to one ability score of your choice;",
	eval : "AddFeature('Human Determination (attack/check/save)', 1, '', 'short rest', 'Human Determination feat');",
	removeeval : "RemoveFeature('Human Determination (attack/check/save)');"
};
FeatsList["infernal constitution"] = {
	name : "Infernal Constitution",
	source : ["UA:FR", 3],
	prerequisite : "Being a Tiefling",
	prereqeval : "CurrentRace.known.indexOf('tiefling') !== -1",
	description : "I have resistance to cold and poison damage and I have advantage on saving throws against being poisoned.\n[+1 Constitution]",
	improvements : "Infernal Constitution (feat): +1 Constitution;",
	scores : [0, 0, 1, 0, 0, 0],
	dmgres : ["Cold", "Poison"],
	savetxt : { adv_vs : ["poison"] }
};
FeatsList["orcish aggression"] = {
	name : "Orcish Aggression",
	source : ["UA:FR", 3],
	prerequisite : "Being a Half-Orc",
	prereqeval : "(/^(?=.*half)(?=.*orc).*$/i).test(CurrentRace.known)",
	description : "As a bonus action, I can move up to my speed toward an enemy of my choice that I can see or hear. I must end this move closer to the enemy than I started.",
	action : ["bonus action", ""]
};
FeatsList["orcish fury"] = {
	name : "Orcish Fury",
	source : ["UA:FR", 4],
	prerequisite : "Being a Half-Orc",
	prereqeval : "(/^(?=.*half)(?=.*orc).*$/i).test(CurrentRace.known)",
	description : "Once per short rest, I can roll an extra damage die for an attack with a simple or martial weapon. In addition, Immediately after I use my Relentless Endurance trait, I can use my reaction to make one weapon attack. [+1 Strength or Constitution]",
	improvements : "Orcish Fury (feat): +1 Strength or Constitution;",
	action : ["reaction", " (after Relentless Endurance)"],
	eval : "AddFeature('Orcish Fury (extra damage)', 1, '', 'short rest', 'Orcish Fury feat');",
	removeeval : "RemoveFeature('Orcish Fury (extra damage)');"
};
FeatsList["prodigy"] = {
	name : "Prodigy",
	source : ["UA:FR", 4],
	prerequisite : "Being a Half-Elf or a Human",
	prereqeval : "(/human|^(?=.*half)(?=.*elf).*$/i).test(CurrentRace.known)",
	description : "I gain one skill proficiency of my choice, one tool proficiency of my choice, fluency in one language of my choice, and +1 to one ability score of my choice. [+1 to one ability score]",
	improvements : "Prodigy (feat): +1 to one ability score of your choice;",
	skills : "\n\n" + toUni("Prodigy (feat)") + ": Choose any one skill.",
	languageProfs : [1],
	toolProfs : [["Any tool", 1]]
};
FeatsList["second chance"] = {
	name : "Second Chance",
	source : ["UA:FR", 4],
	prerequisite : "Being a Halfling",
	prereqeval : "CurrentRace.known.indexOf('halfling') !== -1",
	description : "When a creature I can see hits me with an attack roll, I can use my reaction to force that creature to reroll. Once I use this ability, I can't do so again until I finish a short rest.\n[+1 Dexterity, Constitution, or Charisma]",
	improvements : "Second Chance (feat): +1 Dexterity, Constitution, or Charisma;",
	eval : "AddFeature('Second Chance', 1, '', 'short rest', 'Second Chance feat');",
	removeeval : "RemoveFeature('Second Chance');",
	action : ["reaction", ""]
};
FeatsList["squat nimbleness"] = {
	name : "Squat Nimbleness",
	source : ["UA:FR", 4],
	prerequisite : "Being a Dwarf, Gnome, or Halfling",
	prereqeval : "(/dwarf|gnome|halfling/i).test(CurrentRace.known)",
	description : "My walking speed increases by 5 ft. I gain proficiency in the Acrobatics or Athletics skill. If I'm already proficient in the chosen skill, I gain expertise with it instead.\n[+1 Strength or Dexterity]",
	improvements : "Squat Nimbleness (feat): +1 Strength or Dexterity;",
	skills : "\n\n" + toUni("Squat Nimbleness (feat)") + ": Acrobatics or Athletics; Expertise if already proficient.",
	speed : { walk : {spd : "+5", enc : "+5" } }
};
FeatsList["wonder maker"] = {
	name : "Wonder Maker",
	source : ["UA:FR", 4],
	prerequisite : "Being a Rock Gnome",
	prereqeval : "CurrentRace.known.indexOf('rock gnome') !== -1",
	description : "I gain expertise with Tinker's Tools. I get additional Tinker options: Alarm (audible to 300 ft for 1 min), Calculator, Lifter (as block and tackle that multiplies max lift weight by 5), Timekeeper (pocket watch), Weather Sensor (predict for 1-mile, 4 hours) [+1 Dex or Int]",
	improvements : "Wonder Maker (feat): +1 Dexterity or Intelligence;",
	eval : "if ((/tinker/i).test(What('Too Text'))) { Checkbox('Too Exp', true); };",
	removeeval : "if ((/tinker/i).test(What('Too Text'))) { Checkbox('Too Exp', false); };"	
};
FeatsList["wood elf magic"] = {
	name : "Wood Elf Magic",
	source : ["UA:FR", 4],
	prerequisite : "Being a Wood Elf",
	prereqeval : "CurrentRace.known.indexOf('wood elf') !== -1",
	description : "I learn a druid cantrip. In addition, I can cast Longstrider and Pass Without Trace, without expending a spell slot, but each only once per long rest. Wisdom is my spellcasting ability for these three spells.",
	spellcastingBonus : [{
		name : "Druid Cantrip",
		spellcastingAbility : 5,
		"class" : "druid",
		level : [0, 0],
		atwill : true
	}, {
		name : "Once per long rest",
		spells : ["longstrider"],
		selection : ["longstrider"],
		oncelr : true
	}, {
		name : "Once per long rest",
		spells : ["pass without trace"],
		selection : ["pass without trace"],
		oncelr : true
	}]
};

