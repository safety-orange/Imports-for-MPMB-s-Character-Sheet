var iFileName = "ua_20170424_Feats-for-Races.js";
RequiredSheetVersion("13.0.8");
// This file adds the content from the Unearthed Arcana: Feats for Races article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:FR"] = {
	name : "Unearthed Arcana: Feats for Races",
	abbreviation : "UA:FR",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2017/dnd/downloads/RJSJC2017_04UASkillFeats_24v10.pdf",
	date : "2017/04/24"
};

// Adds 46 feats (23 + 13 variants of Grudge-Bearer), all of which have a racial prerequisite
FeatsList["barbed hide-ua"] = {
	name : "Barbed Hide",
	source : ["UA:FR", 1],
	prerequisite : "Being a Tiefling",
	prereqeval : function(v) { return CurrentRace.known.indexOf('tiefling') !== -1; },
	descriptionFull : "One of your ancestors was a barbed devil or other spiky fiend. Barbs protrude from your head. You gain the following benefits:\n \u2022 Increase your Charisma score by 1, to a maximum of 20.\n \u2022 As a bonus action, you can cause small barbs to protrude all over your body or cause them to retract. At the start of each of your turns while the barbs are out, you deal 1d6 piercing damage to any creature grappling you or any creature grappled by you.\n \u2022 You gain proficiency in the Intimidation skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.",
	description : "I gain expertise with Intimidation, or proficiency if not so already. As a bonus action, I can protrude/retract small barbs from my skin. With them out, at the start of each of my turns I deal 1d6 piercing damage to any I'm grappling or are grappling me. [+1 Cha]",
	scores : [0, 0, 0, 0, 0, 1],
	skills : [["Intimidation", "increment"]],
	action : ["bonus action", ""]
};
FeatsList["bountiful luck-ua"] = {
	name : "Bountiful Luck",
	source : ["UA:FR", 1],
	prerequisite : "Being a Halfling",
	prereqeval : function(v) { return CurrentRace.known.indexOf('halfling') !== -1; },
	descriptionFull : "Whenever an ally you can see within 30 feet of you rolls a 1 on the d20 for an attack roll, an ability check, or a saving throw, you can use your reaction to let the ally reroll the die. The ally must use the new roll.",
	description : "Whenever an ally I can see within 30 feet of me rolls a 1 on the d20 for an attack roll, an ability check, or a saving throw, I can use my reaction to let the ally reroll the die. The ally must use the new roll.",
	action : ["reaction", ""]
};
FeatsList["critter friend-ua"] = {
	name : "Critter Friend",
	source : ["UA:FR", 1],
	prerequisite : "Being a Forest Gnome",
	prereqeval : function(v) { return CurrentRace.known.indexOf('forest gnome') !== -1; },
	descriptionFull : "Your friendship with animals mystically deepens. You gain the following benefits:\n \u2022 You gain proficiency in the Animal Handling skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.\n \u2022 You learn the Speak with Animals spell and can cast it at will, without expending a spell slot. You also learn the Animal Friendship spell, and you can cast it once with this feat, without expending a spell slot. You regain the ability to cast it in this way when you finish a long rest. Intelligence is your spellcasting ability for these spells.",
	description : "I gain expertise with Animal Handling, or proficiency if I didn't have that already. I can cast Speak With Animals and Animal Friendship without using a spell slot. I can cast each of these spells like this once per long rest. Intelligence is my spellcasting ability for these.",
	skills : [["Animal Handling", "increment"]],
	spellcastingBonus : [{
		name : "Once per long rest",
		spellcastingAbility : 4,
		spells : ["speak with animals"],
		selection : ["speak with animals"],
		firstCol : 'oncelr'
	}, {
		name : "Once per long rest",
		spells : ["animal friendship"],
		selection : ["animal friendship"],
		firstCol : 'oncelr'
	}]
};
FeatsList["dragon fear-ua"] = {
	name : "Dragon Fear",
	source : ["UA:FR", 2],
	prerequisite : "Being a Dragonborn",
	prereqeval : function(v) { return CurrentRace.known.indexOf('dragonborn') !== -1; },
	descriptionFull : "When angered, you radiate menace. You gain the following benefits:\n \u2022 Increase your Strength or Charisma score by 1, to a maximum of 20.\n \u2022 Instead of exhaling destructive energy, you can roar and expend a use of your breath weapon to force each creature of your choice within 30 feet of you to make a Wisdom saving throw (DC 8 + your proficiency bonus + your Charisma modifier). A target automatically succeeds if it can't hear or see you. On a failed save, a target becomes frightened for 1 minute. If the frightened target takes any damage, it can repeat the saving throw, ending the effect on itself on a success.",
	calculate : "event.value = 'I can expend a Breath Weapon use to roar instead. Each creature of my choice within 30 ft that can see and hear me must make a DC ' + (8 + Number(What('Proficiency Bonus')) + Number(What('Cha Mod'))) + ' Wis save (8 + prof. bonus + Cha mod) or be frightened for 1 min. It can repeat the save whenever it takes damage. [+1 Str or Cha]';",
	scorestxt : "+1 Strength or Charisma",
	action : [['action', 'Breath Weapon or Dragon Fear', 'Breath Weapon']]
};
FeatsList["dragon hide-ua"] = {
	name : "Dragon Hide",
	source : ["UA:FR", 2],
	prerequisite : "Being a Dragonborn",
	prereqeval : function(v) { return CurrentRace.known.indexOf('dragonborn') !== -1; },
	descriptionFull : "You inherited the might and majesty of your dragon ancestors. You gain the following benefits:\n \u2022 Increase your Strength or Charisma score by 1, to a maximum of 20.\n \u2022 You grow retractable claws from the tips of your fingers. Extending or retracting the claws requires no action. The claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.\n \u2022 Your scales harden; you gain a +1 bonus to AC while you aren't wearing armor.",
	description : "I gain retractable claws that I can retract or extend, requiring no action. While extended, my unarmed strikes deal 1d4 slashing damage. My scales harden, giving me a +1 bonus to AC when I'm not wearing armor. [+1 Strength or Charisma]",
	scorestxt : "+1 Strength or Charisma",
	weaponOptions : {
		baseWeapon : "unarmed strike",
		regExpSearch : /^(?=.*(retractable|dragon))(?=.*claw).*$/i,
		name : "Retractable Claws",
		source : ["UA:FR", 2],
		damage : [1, 4, "slashing"]
	},
	weaponsAdd : ['Retractable Claws'],
	extraAC : {
		mod : 1,
		text : "I gain a +1 bonus to AC while I'm not wearing armor.",
		stopeval : function (v) { return v.wearingArmor; }
	}
};
FeatsList["dragon wings-ua"] = {
	name : "Dragon Wings",
	source : ["UA:FR", 2],
	prerequisite : "Being a Dragonborn",
	prereqeval : function(v) { return CurrentRace.known.indexOf('dragonborn') !== -1; },
	descriptionFull : "You sprout draconic wings. With your wings, you have a flying speed of 20 feet if you aren't wearing heavy armor and aren't exceeding your carrying capacity.",
	description : "I sprout draconic wings. With my wings, I have a flying speed of 20 feet if I am not wearing heavy armor and I am not exceeding my carrying capacity or encumbered.",
	speed : { fly : { spd : 20, enc : 0 } }
};
FeatsList["drow high magic-ua"] = {
	name : "Drow High Magic",
	source : ["UA:FR", 2],
	prerequisite : "Being a Drow (Dark Elf)",
	prereqeval : function(v) { return CurrentRace.known.indexOf('dark elf') !== -1; },
	descriptionFull : "You learn more of the spells typical for your people. You learn Detect Magic and can cast it at will, without expending a spell slot. You also learn Levitate and Dispel Magic, each of which you can cast once without expending a spell slot. You regain the ability to cast the spell in this way when you finish a long rest. Charisma is your spellcasting ability for these spells.",
	description : "I can cast Detect Magic at will, without expending a spell slot. I can also cast Levitate and Dispel Magic without expending a spell slot, but each only once per long rest. Charisma is my spellcasting ability for these three spells.",
	spellcastingBonus : [{
		name : "At will",
		spellcastingAbility : 6,
		spells : ["detect magic"],
		selection : ["detect magic"],
		firstCol : 'atwill'
	}, {
		name : "Once per long rest",
		spells : ["levitate"],
		selection : ["levitate"],
		firstCol : 'oncelr'
	}, {
		name : "Once per long rest",
		spells : ["dispel magic"],
		selection : ["dispel magic"],
		firstCol : 'oncelr'
	}]
};
FeatsList["dwarf resilience-ua"] = {
	name : "Dwarf Resilience",
	source : ["UA:FR", 2],
	prerequisite : "Being a Dwarf",
	prereqeval : function(v) { return CurrentRace.known.indexOf('dwarf') !== -1; },
	descriptionFull : "You have the blood of dwarf heroes flowing through your veins. You gain the following benefits:\n \u2022 Increase your Constitution score by 1, to a maximum of 20.\n \u2022 Whenever you take the Dodge action in combat, you can spend one Hit Die to heal yourself. Roll the die, add your Constitution modifier, and regain a number of hit points equal to the total (minimum of 1).",
	description : "Whenever I take the Dodge action in combat, I can spend one Hit Die to heal myself. I roll the die, add my Constitution modifier, and regain a number of hit points equal to the total (minimum of 1). [+1 Constitution]",
	scores : [0, 0, 1, 0, 0, 0]
};
FeatsList["elven accuracy-ua"] = {
	name : "Elven Accuracy",
	source : ["UA:FR", 2],
	prerequisite : "Being an Elf or a Half-Elf",
	prereqeval : function(v) { return (/elf|eladrin|avariel|grugach|shadar-kai/i).test(CurrentRace.known); },
	descriptionFull : "You have uncanny aim. You gain the following benefits:\n \u2022 Increase your Dexterity score by 1, to a maximum of 20.\n \u2022 Whenever you have advantage on an attack roll, you can reroll one of the dice once.",
	description : "Whenever I have advantage on an attack roll, I can reroll one of the dice once. [+1 Dexterity]",
	scores : [0, 1, 0, 0, 0, 0]
};
FeatsList["everybody-ua's friend"] = {
	name : "Everybody's Friend",
	source : ["UA:FR", 2],
	prerequisite : "Being a Half-Elf",
	prereqeval : function(v) { return (/^(?=.*half)(?=.*elf).*$/i).test(CurrentRace.known); },
	descriptionFull : "You develop your magnetic personality to ease your way through the world. You gain the following benefits:\n \u2022 You gain proficiency in the Deception and Persuasion skills. If you're already proficient in either skill, your proficiency bonus is doubled for any check you make with that skill.",
	description : "I gain expertise with Deception and Persuasion, or proficiency with them if I didn't have that already. [+1 Charisma]",
	scores : [0, 0, 0, 0, 0, 1],
	skills : [["Deception", "increment"], ["Persuasion", "increment"]]
};
FeatsList["fade away-ua"] = {
	name : "Fade Away",
	source : ["UA:FR", 2],
	prerequisite : "Being a Gnome",
	prereqeval : function(v) { return CurrentRace.known.indexOf('gnome') !== -1; },
	descriptionFull : "You can draw on your magical heritage to escape danger. You gain the following benefits:\n \u2022 Increase your Intelligence score by 1, to a maximum of 20.\n \u2022 When you take damage, you can use a reaction to magically become invisible until the end of your next turn or until you attack, deal damage, or force someone to make a saving throw. Once you use this ability, you can't do so again until you finish a short or long rest.",
	description : "As a reaction when I take damage, I can magically become invisible until the end of my next turn or until I attack, deal damage, or force someone to make a saving throw. Once I do this, I can't do so again until I finish a short rest. [+1 Intelligence]",
	scores : [0, 0, 0, 1, 0, 0],
	action : ["reaction", ""],
	usages : 1,
	recovery : "short rest"
};
FeatsList["fey teleportation-ua"] = {
	name : "Fey Teleportation",
	source : ["UA:FR", 3],
	prerequisite : "Being a High Elf",
	prereqeval : function(v) { return CurrentRace.known.indexOf('high elf') !== -1; },
	descriptionFull : "Drawing on your fey ancestry, you have learned how to teleport. You gain the following benefits:\n \u2022 Increase your Intelligence score by 1, to a maximum of 20.\n \u2022 You learn the Misty Step spell and can cast it once without expending a spell slot. You regain the ability to cast it in this way when you finish a short or long rest. Intelligence is your spellcasting ability for this spell.",
	description : "I can cast Misty Step without using a spell slot. I can do so once per short rest. Intelligence is my spellcasting ability for this spell. [+1 Intelligence]",
	scores : [0, 0, 0, 1, 0, 0],
	spellcastingBonus : {
		name : "Once per short rest",
		spellcastingAbility : 4,
		spells : ["misty step"],
		selection : ["misty step"],
		firstCol : 'oncesr'
	},
	usages : 1,
	recovery : "short rest"
};
FeatsList["flames of phlegethos-ua"] = {
	name : "Flames of Phlegethos",
	source : ["UA:FR", 3],
	prerequisite : "Being a Tiefling",
	prereqeval : function(v) { return CurrentRace.known.indexOf('tiefling') !== -1; },
	descriptionFull : "You learn to call on hellfire to serve your commands. You gain the following benefits:\n \u2022 Increase your Intelligence or Charisma score by 1, to a maximum of 20.\n \u2022 When you roll fire damage for a spell you cast, you can reroll any roll of 1 on the fire damage dice, but you must use the new roll, even if it is another 1.\n \u2022 Whenever you cast a spell that deals fire damage, you can cause flames to wreathe you until the end of your next turn. The flames don't harm you or your possessions, and they shed bright light out to 30 feet and dim light for an additional 30 feet. While the flames are present, any creature within 5 feet of you that hits you with a melee attack takes 1d4 fire damage.",
	description : "When I cast a fire damage spell, I can reroll any 1 on fire damage dice. I can then sheathe myself in flame until my next turn ends. These shed bright light in 30 ft, dim light in 30 ft and cause any within 5 ft that hit me in melee take 1d4 fire damage. [+1 Int or Cha]",
	scorestxt : "+1 Intelligence or Charisma"	
};
FeatsList["grudge-bearer-ua"] = {
	name : "Grudge-Bearer",
	source : ["UA:FR", 3],
	prerequisite : "Being a Dwarf",
	prereqeval : function(v) { return CurrentRace.known.indexOf('dwarf') !== -1; },
	descriptionFull : "You have a deep hatred for a particular kind of creature. Choose your foes, a type of creature to bear the burden of your wrath: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can choose two races of humanoid (such as gnolls and orcs). You gain the following benefits:\n \u2022 Increase your Strength, Constitution, or Wisdom score by 1, to a maximum of 20.\n \u2022 During the first round of any combat against your chosen foes, your attack rolls against any of them have advantage.\n \u2022 When any of your chosen foes makes an opportunity attack against you, it makes the attack roll with disadvantage.\n \u2022 Whenever you make an Intelligence (Arcana, History, Nature, or Religion) check to recall information about your chosen foes, you add double your proficiency bonus to the check, even if you're not normally proficient.",
	description : "My hatred for a creature type gives me these benefits against them: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related Arcana, History, Nature, and Religion checks. [+1 Str, Con, or Wis]",
	scorestxt : "+1 Strength, Constitution, or Wisdom",
	choices : ["2 Humanoids", "Aberrations", "Beasts", "Celestials", "Constructs", "Dragons", "Elementals", "Fey", "Fiends", "Giants", "Monstrosities", "Oozes", "Plants", "Undead"],
	"2 humanoids" : {
		description : "My hatred for 2 humanoid races gives me these benefits against them: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related Arcana/History/Nature/Religion checks. [+1 Str, Con, or Wis]"
	},
	aberrations : {
		description : "My hatred for aberrations gives me these benefits against them: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related Arcana, History, Nature, and Religion checks. [+1 Str, Con, or Wis]"
	},
	beasts : {
		description : "My hatred for beasts gives me these benefits against them: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related Arcana, History, Nature, and Religion checks. [+1 Str, Con, or Wis]"
	},
	celestials : {
		description : "My hatred for celestials gives me these benefits against them: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related Arcana, History, Nature, and Religion checks. [+1 Str, Con, or Wis]"
	},
	constructs : {
		description : "My hatred for constructs gives me these benefits against them: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related Arcana, History, Nature, and Religion checks. [+1 Str, Con, or Wis]"
	},
	dragons : {
		description : "My hatred for dragons gives me these benefits against them: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related Arcana, History, Nature, and Religion checks. [+1 Str, Con, or Wis]"
	},
	elementals : {
		description : "My hatred for elementals gives me these benefits against them: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related Arcana, History, Nature, and Religion checks. [+1 Str, Con, or Wis]"
	},
	fey : {
		description : "My hatred for fey gives me these benefits against them: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related Arcana, History, Nature, and Religion checks. [+1 Str, Con, or Wis]"
	},
	fiends : {
		description : "My hatred for fiends gives me these benefits against them: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related Arcana, History, Nature, and Religion checks. [+1 Str, Con, or Wis]"
	},
	giants : {
		description : "My hatred for giants gives me these benefits against them: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related Arcana, History, Nature, and Religion checks. [+1 Str, Con, or Wis]"
	},
	monstrosities : {
		description : "My hatred for monstrosities gives me these benefits against them: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related Arcana, History, Nature, and Religion checks. [+1 Str, Con, or Wis]"
	},
	oozes : {
		description : "My hatred for oozes gives me these benefits against them: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related Arcana, History, Nature, and Religion checks. [+1 Str, Con, or Wis]"
	},
	plants : {
		description : "My hatred for plants gives me these benefits against them: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related Arcana, History, Nature, and Religion checks. [+1 Str, Con, or Wis]"
	},
	undead : {
		description : "My hatred for undead gives me these benefits against them: Adv. on attacks in the first round of combat. Their opportunity attacks have disadv. against me. I add twice my prof. bonus on related Arcana, History, Nature, and Religion checks. [+1 Str, Con, or Wis]"
	}
};
FeatsList["human determination-ua"] = {
	name : "Human Determination",
	source : ["UA:FR", 3],
	prerequisite : "Being a Human",
	prereqeval : function(v) { return CurrentRace.known.indexOf('human') !== -1; },
	descriptionFull : "You are filled with a determination that can draw the unreachable within your reach. You gain the following benefits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 When you make an attack roll, an ability check, or a saving throw, you can do so with advantage. Once you use this ability, you can't use it again until you finish a short or long rest.",
	description : "When I make an attack roll, an ability check, or a saving throw, I can do so with advantage. Once I use this ability, I can't do so again until I finish a short rest.\n[+1 to one ability score]",
	scorestxt : "+1 to one ability score of your choice",
	usages : 1,
	recovery : "short rest",
	additional : "attack/check/save"
};
FeatsList["infernal constitution-ua"] = {
	name : "Infernal Constitution",
	source : ["UA:FR", 3],
	prerequisite : "Being a Tiefling",
	prereqeval : function(v) { return CurrentRace.known.indexOf('tiefling') !== -1; },
	descriptionFull : "Fiendish blood runs strong in you. You gain the following benefits:\n \u2022 Increase your Constitution score by 1, to a maximum of 20.\n \u2022 You have resistance to cold and poison damage.\n \u2022 You have advantage on saving throws against being poisoned.",
	description : "I have resistance to cold and poison damage and I have advantage on saving throws against being poisoned.\n[+1 Constitution]",
	scores : [0, 0, 1, 0, 0, 0],
	dmgres : ["Cold", "Poison"],
	savetxt : { adv_vs : ["poison"] }
};
FeatsList["orcish aggression-ua"] = {
	name : "Orcish Aggression",
	source : ["UA:FR", 3],
	prerequisite : "Being a Half-Orc",
	prereqeval : function(v) { return (/^(?=.*half)(?=.*orc).*$/i).test(CurrentRace.known); },
	descriptionFull : "As a bonus action, you can move up to your speed toward an enemy of your choice that you can see or hear. You must end this move closer to the enemy than you started.",
	description : "As a bonus action, I can move up to my speed toward an enemy of my choice that I can see or hear. I must end this move closer to the enemy than I started.",
	action : ["bonus action", ""]
};
FeatsList["orcish fury-ua"] = {
	name : "Orcish Fury",
	source : ["UA:FR", 4],
	prerequisite : "Being a Half-Orc",
	prereqeval : function(v) { return (/^(?=.*half)(?=.*orc).*$/i).test(CurrentRace.known); },
	descriptionFull : "Your fury burns tirelessly. You gain the following benefits:\n \u2022 Increase your Strength or Constitution score by 1, to a maximum of 20.\n \u2022 When you hit with an attack made with a simple or martial weapon, you can roll one of the weapon's damage dice an additional time and add it as extra damage of the weapon's damage type. Once you use this ability, you can't use it again until you finish a short or long rest.\n \u2022 Immediately after you use your Relentless Endurance trait, you can use your reaction to make one weapon attack.",
	description : "Once per short rest, I can roll an extra damage die for an attack with a simple or martial weapon. In addition, Immediately after I use my Relentless Endurance trait, I can use my reaction to make one weapon attack. [+1 Strength or Constitution]",
	scorestxt : "+1 Strength or Constitution",
	action : ["reaction", " (after Relentless Endurance)"],
	usages : 1,
	recovery : "short rest",
	additional : "extra damage"
};
FeatsList["prodigy-ua"] = {
	name : "Prodigy",
	source : ["UA:FR", 4],
	prerequisite : "Being a Half-Elf or a Human",
	prereqeval : function(v) { return (/human|^(?=.*half)(?=.*elf).*$/i).test(CurrentRace.known); },
	descriptionFull : "You have a knack for learning new things. You gain the following benefits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You gain one skill proficiency of your choice, one tool proficiency of your choice, and fluency in one language of your choice.",
	description : "I gain one skill proficiency of my choice, one tool proficiency of my choice, fluency in one language of my choice, and +1 to one ability score of my choice. [+1 to one ability score]",
	scorestxt : "+1 to one ability score of your choice",
	skillstxt : "Choose any one skill",
	languageProfs : [1],
	toolProfs : [["Any tool", 1]]
};
FeatsList["second chance-ua"] = {
	name : "Second Chance",
	source : ["UA:FR", 4],
	prerequisite : "Being a Halfling",
	prereqeval : function(v) { return CurrentRace.known.indexOf('halfling') !== -1; },
	descriptionFull : "You have a knack for learning new things. You gain the following benefits:\n \u2022 Increase your Dexterity, Constitution, or Charisma score by 1, to a maximum of 20.\n \u2022 When a creature you can see hits you with an attack roll, you can use your reaction to force that creature to reroll. Once you use this ability, you can't do so again until you finish a short or long rest.",
	description : "When a creature I can see hits me with an attack roll, I can use my reaction to force that creature to reroll. Once I use this ability, I can't do so again until I finish a short rest.\n[+1 Dexterity, Constitution, or Charisma]",
	scorestxt : "+1 Dexterity, Constitution, or Charisma",
	action : ["reaction", ""],
	usages : 1,
	recovery : "short rest"
};
FeatsList["squat nimbleness-ua"] = {
	name : "Squat Nimbleness",
	source : ["UA:FR", 4],
	prerequisite : "Being a Dwarf, Gnome, or Halfling",
	prereqeval : function(v) { return (/dwarf|gnome|halfling/i).test(CurrentRace.known); },
	descriptionFull : "You are uncommonly nimble for your race. You gain the following benefits:\n \u2022 Increase your Strength or Dexterity score by 1, to a maximum of 20.\n \u2022 Increase your walking speed by 5 feet.\n \u2022 You gain proficiency in the Acrobatics or Athletics skill. If you're already proficient in the skill, your proficiency bonus is doubled for any check you make with it.",
	description : "My walking speed increases by 5 ft. I gain proficiency in the Acrobatics or Athletics skill. If I'm already proficient in the chosen skill, I gain expertise with it instead.\n[+1 Strength or Dexterity]",
	scorestxt : "+1 Strength or Dexterity",
	skillstxt : "Proficiency with Acrobatics or Athletics; or gain Expertise if already proficient",
	speed : { walk : {spd : "+5", enc : "+5" } }
};
FeatsList["wonder maker-ua"] = {
	name : "Wonder Maker",
	source : ["UA:FR", 4],
	prerequisite : "Being a Rock Gnome",
	prereqeval : function(v) { return CurrentRace.known.indexOf('rock gnome') !== -1; },
	descriptionFull : "You master the tinker techniques of your people. You gain the following benefits:\n \u2022 When you make a check using your proficiency with tinker's tools, you add double your proficiency bonus to the check.\n \u2022 When you make a device with your Tinker trait, you have the following additional options for what you make:\n \u2022 " + toUni("Alarm") + ". This device senses when a creature moves to within 15 feet of it without speaking aloud a password chosen when you create it. One round after a creature moves into range, the alarm makes a shrill ringing that lasts for 1 minute and can be heard from up to 300 feet away.\n \u2022 " + toUni("Calculator") + ". This device makes doing sums easy.\n \u2022 " + toUni("Lifter") + ". This device can be used as a block and tackle, allowing its user to hoist five times the weight the user can normally lift.\n \u2022 " + toUni("Timekeeper") + ". This pocket watch keeps accurate time.\n \u2022 " + toUni("Weather Sensor") + ". When used as an action, this device predicts weather conditions in a 1-mile radius over the next 4 hours, showing one symbol (clouds, sun/moon, rain, or snow) for each hour.",
	description : "I gain expertise with Tinker's Tools. I get additional Tinker options: Alarm (audible to 300 ft for 1 min), Calculator, Lifter (as block and tackle that multiplies max lift weight by 5), Timekeeper (pocket watch), Weather Sensor (predict for 1-mile, 4 hours) [+1 Dex or Int]",
	scorestxt : "+1 Dexterity or Intelligence",
	eval : function () {
		if ((/tinker.*tool/i).test(What('Too Text'))) {
			Checkbox('Too Exp', true);
		};
	},
	removeeval : function () {
		if ((/tinker.*tool/i).test(What('Too Text'))) {
			Checkbox('Too Exp', false);
		};
	}
};
FeatsList["wood elf magic-ua"] = {
	name : "Wood Elf Magic",
	source : ["UA:FR", 4],
	prerequisite : "Being a Wood Elf",
	prereqeval : function(v) { return CurrentRace.known.indexOf('wood elf') !== -1; },
	descriptionFull : "You learn the magic of the primeval woods. You learn one druid cantrip of your choice. You also learn Longstrider and Pass Without Trace, each of which you can cast once without expending a spell slot. You regain the ability to cast the spell in this way when you finish a long rest. Wisdom is your spellcasting ability for these spells.",
	description : "I learn a druid cantrip. In addition, I can cast Longstrider and Pass Without Trace, without expending a spell slot, but each only once per long rest. Wisdom is my spellcasting ability for these three spells.",
	spellcastingBonus : [{
		name : "Druid Cantrip",
		spellcastingAbility : 5,
		"class" : "druid",
		level : [0, 0],
		firstCol : 'atwill'
	}, {
		name : "Once per long rest",
		spells : ["longstrider"],
		selection : ["longstrider"],
		firstCol : 'oncelr'
	}, {
		name : "Once per long rest",
		spells : ["pass without trace"],
		selection : ["pass without trace"],
		firstCol : 'oncelr'
	}]
};
