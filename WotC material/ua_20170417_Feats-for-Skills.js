var iFileName = "ua_20170417_Feats-for-Skills.js";
RequiredSheetVersion("13.0.8");
// This file adds the content from the Unearthed Arcana: Feats for Skills article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:FS"] = {
	name : "Unearthed Arcana: Feats for Skills",
	abbreviation : "UA:FS",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2017/dnd/downloads/UA-SkillFeats.pdf",
	date : "2017/04/17"
};

// Add 18 feats, corresponding with the 18 skills
FeatsList["acrobat-ua"] = {
	name : "Acrobat",
	source : [["UA:FS", 1]],
	descriptionFull : "You become more nimble, gaining the following benefits:\n \u2022 Increase your Dexterity score by 1, to a maximum of 20.\n \u2022 You gain proficiency in the Acrobatics skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.\n \u2022 As a bonus action, you can make a DC 15 Dexterity (Acrobatics) check. If you succeed, difficult terrain doesn't cost you extra movement until the end of the current turn.",
	description : "I gain expertise with Acrobatics, or proficiency if not so already. As a bonus action, I can make a DC 15 Dexterity (Acrobatics) check to have difficult terrain not cost me extra movement for this turn. [+1 Dexterity]",
	scores : [0, 1, 0, 0, 0, 0],
	skills : [["Acrobatics", "increment"]],
	action : [["bonus action", ""]]
};
FeatsList["animal handler-ua"] = {
	name : "Animal Handler",
	source : [["UA:FS", 1]],
	descriptionFull : "You master the techniques needed to train and handle animals. You gain the following benefits:\n \u2022 Increase your Wisdom score by 1, to a maximum of 20.\n \u2022 You gain proficiency in the Animal Handling skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.\n \u2022 You can use a bonus action on your turn to command one friendly beast within 60 feet of you that can hear you and that isn't currently following the command of someone else. You decide now what action the beast will take and where it will move during its next turn, or you issue a general command that lasts for 1 minute, such as to guard a particular area.",
	description : "I gain expertise with Animal Handling, or proficiency if not so already. As a bonus action, I can command a friendly beast not under another's command within 60 ft. If it hears me, I decide its next turn or give a general command lasting for 1 minute. [+1 Wisdom]",
	scores : [0, 0, 0, 0, 1, 0],
	skills : [["Animal Handling", "increment"]],
	action : [["bonus action", ""]]
};
FeatsList["arcanist-ua"] = {
	name : "Arcanist",
	source : [["UA:FS", 1]],
	descriptionFull : "You study the arcane arts, gaining the following benefits:\n \u2022 Increase your Intelligence score by 1, to a maximum of 20.\n \u2022 You gain proficiency in the Arcana skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.\n \u2022 You learn the Prestidigitation and Detect Magic spells. You can cast detect magic once without expending a spell slot, and you regain the ability to do so when you finish a long rest.",
	description : "I gain expertise with Arcana, or proficiency if not so already. I learn the Prestidigitation cantrip. I can cast Detect Magic without using a spell slot. Once I do so, I can't do it again until I finish a long rest. [+1 Intelligence]",
	scores : [0, 0, 0, 1, 0, 0],
	skills : [["Arcana", "increment"]],
	spellcastingBonus : [{
		name : "Arcanist",
		spellcastingAbility : 4,
		spells : ["prestidigitation"],
		selection : ["prestidigitation"],
		firstCol : "atwill"
	}, {
		name : "Arcanist (1x long rest)",
		spells : ["detect magic"],
		selection : ["detect magic"],
		firstCol : "oncelr"
	}]
};
FeatsList["brawny-ua"] = {
	name : "Brawny",
	source : [["UA:FS", 1]],
	descriptionFull : "You become stronger, gaining the following benefits:\n \u2022 Increase your Strength score by 1, to a maximum of 20.\n \u2022 You gain proficiency in the Athletics skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.\n \u2022 You count as if you were one size larger for the purpose of determining your carrying capacity.",
	description : "I gain expertise with Athletics, or proficiency if not so already. I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift. [+1 Strength]",
	scores : [1, 0, 0, 0, 0, 0],
	skills : [["Athletics", "increment"]],
	carryingCapacity : 2
};
FeatsList["diplomat-ua"] = {
	name : "Diplomat",
	source : [["UA:FS", 2]],
	descriptionFull : "You master the arts of diplomacy, gaining the following benefits:\n \u2022 Increase your Charisma score by 1, to a maximum of 20.\n \u2022 You gain proficiency in the Persuasion skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.\n \u2022 If you spend 1 minute talking to someone who can understand what you say, you can make a Charisma (Persuasion) check contested by the creature's Wisdom (Insight) check. If you or your companions are fighting the creature, your check automatically fails. If your check succeeds, the target is charmed by you as long as it remains within 60 feet of you and for 1 minute thereafter.",
	description : "I gain expertise with Persuasion, or proficiency if not so already. With a one minute long conversation outside of combat, I can make a Persuasion vs. its Insight. If successful, it is charmed by me as long as it remains within 60 ft and 1 minute after that [+1 Charisma]",
	scores : [0, 0, 0, 0, 0, 1],
	skills : [["Persuasion", "increment"]]
};
FeatsList["empathic-ua"] = {
	name : "Empathic",
	source : [["UA:FS", 2]],
	descriptionFull : "You possess keen insight into how other people think and feel. You gain the following benefits:\n \u2022 Increase your Wisdom score by 1, to a maximum of 20.\n \u2022 You gain proficiency in the Insight skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.\n \u2022 You can use your action to try to get uncanny insight about one humanoid you can see within 30 feet of you. Make a Wisdom (Insight) check contested by the target's Charisma (Deception) check. If your check succeeds, you have advantage on attack rolls and ability checks against the target until the end of your next turn.",
	description : "I gain expertise with Insight, or proficiency if not so already. As an action, a humanoid within 30 ft I can see must make its Deception vs. my Insight or I gain advantage on attacks and ability checks against it until the end of my next turn. [+1 Wisdom]",
	scores : [0, 0, 0, 0, 1, 0],
	skills : [["Insight", "increment"]]
};
FeatsList["historian-ua"] = {
	name : "Historian",
	source : [["UA:FS", 2]],
	descriptionFull : "Your study of history rewards you with the following benefits:\n \u2022 Increase your Intelligence score by 1, to a maximum of 20.\n \u2022 You gain proficiency in the History skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.\n \u2022 When you take the Help action to aid another creature's ability check, you can make a DC 15 Intelligence (History) check. On a success, that creature's check gains a bonus equal to your proficiency bonus, as you share pertinent advice and historical examples. To receive this bonus, the creature must be able to understand what you're saying.",
	description : "I gain expertise with History, or proficiency if not so already. When I use the Help action to help a creature that can understand me with an ability check, I can make a DC 15 Int (History) check to give a bonus equal to my proficiency bonus. [+1 Intelligence]",
	scores : [0, 0, 0, 1, 0, 0],
	skills : [["History", "increment"]],
	action : [["action", ""]]
};
FeatsList["investigator-ua"] = {
	name : "Investigator",
	source : [["UA:FS", 2]],
	descriptionFull : "You have an eye for detail and can pick out the smallest clues. You gain the following benefits:\n \u2022 Increase your Intelligence score by 1, to a maximum of 20.\n \u2022 You gain proficiency in the Investigation skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.\n \u2022 You can take the Search action as a bonus action.",
	description : "I gain expertise with Investigation, or proficiency if not so already. As a bonus action, I can take the Search action. [+1 Intelligence]",
	scores : [0, 0, 0, 1, 0, 0],
	skills : [["Investigation", "increment"]],
	action : [["bonus action", " (Search)"]]
};
FeatsList["medic-ua"] = {
	name : "Medic",
	source : [["UA:FS", 2]],
	descriptionFull : "You master the physician's arts, gaining the following benefits:\n \u2022 Increase your Wisdom score by 1, to a maximum of 20.\n \u2022 You gain proficiency in the Medicine skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.\n \u2022 During a short rest, you can clean and bind the wounds of up to six willing beasts and humanoids. Make a DC 15 Wisdom (Medicine) check for each creature. On a success, if a creature spends a Hit Die during this rest, that creature can forgo the roll and instead regain the maximum number of hit points the die can restore. A creature can do so only once per rest, regardless of how many Hit Dice it spends.",
	description : "I gain expertise with Medicine, or proficiency if not so already. During a short rest, I can attend to the wounds of up to 6 creatures. With a DC 15 Wis (Medicine) check for each creature, that target gets the maximum result on one of its HD that it uses. [+1 Wisdom]",
	scores : [0, 0, 0, 0, 1, 0],
	skills : [["Medicine", "increment"]]
};
FeatsList["menacing-ua"] = {
	name : "Menacing",
	source : [["UA:FS", 2]],
	descriptionFull : "You become fearsome to others, gaining the following benefits:\n \u2022 Increase your Charisma score by 1, to a maximum of 20.\n \u2022 You gain proficiency in the Intimidation skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.\n \u2022 When you take the Attack action on your turn, you can replace one attack with an attempt to demoralize one humanoid you can see within 30 feet of you that can see and hear you. Make a Charisma (Intimidation) check contested by the target's Wisdom (Insight) check. If your check succeeds, the target is frightened until the end of your next turn. If your check fails, the target can't be frightened by you in this way for 1 hour.",
	description : "I gain expertise with Intimidation, or proficiency if not so already. Instead of 1 attack in my Attack action, a humanoid within 30 ft I can see and that can see and hear me must make its Insight vs. my Intimidation or be frightened until end of my next turn. [+1 Cha]",
	scores : [0, 0, 0, 0, 0, 1],
	skills : [["Intimidation", "increment"]]
};
FeatsList["naturalist-ua"] = {
	name : "Naturalist",
	source : [["UA:FS", 3]],
	descriptionFull : "Your extensive study of nature rewards you with the following benefits:\n \u2022 Increase your Intelligence score by 1, to a maximum of 20.\n \u2022 You gain proficiency in the Nature skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.\n \u2022 You learn the Druidcraft and Detect Poison and Disease spells. You can cast Detect Poison and Disease once without expending a spell slot, and you regain the ability to do so when you finish a long rest.",
	description : "I gain expertise with Nature, or proficiency if not so already. I learn the Druidcraft cantrip. I can cast Detect Poison and Disease without using a spell slot. Once I do so, I can't do it again until I finish a long rest. [+1 Intelligence]",
	scores : [0, 0, 0, 1, 0, 0],
	skills : [["Nature", "increment"]],
	spellcastingBonus : [{
		name : "Naturalist",
		spellcastingAbility : 4,
		spells : ["druidcraft"],
		selection : ["druidcraft"],
		firstCol : "atwill"
	}, {
		name : "Naturalist (1x long rest)",
		spells : ["detect poison and disease"],
		selection : ["detect poison and disease"],
		firstCol : "oncelr"
	}]
};
FeatsList["perceptive-ua"] = {
	name : "Perceptive",
	source : [["UA:FS", 3]],
	descriptionFull : "You hone your senses until they become razor sharp. You gain the following benefits:\n \u2022 Increase your Wisdom score by 1, to a maximum of 20.\n \u2022 You gain proficiency in the Perception skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.\n \u2022 Being in a lightly obscured area doesn't impose disadvantage on your Wisdom (Perception) checks if you can both see and hear.",
	description : "I gain expertise with Perception, or proficiency if not so already. I don't have disadvantage on my Perception checks from being in a lightly obscured area (dim light), provided that I can still both see and hear. [+1 Wisdom]",
	scores : [0, 0, 0, 0, 1, 0],
	skills : [["Perception", "increment"]],
	vision : [["No disadv. on Perception in lightly obscured or dim light", 0]]
};
FeatsList["performer-ua"] = {
	name : "Performer",
	source : [["UA:FS", 3]],
	descriptionFull : "You master performance so that you can command any stage. You gain the following benefits:\n \u2022 Increase your Charisma score by 1, to a maximum of 20.\n \u2022 You gain proficiency in the Performance skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.\n \u2022 While performing, you can try to distract one humanoid you can see who can see and hear you. Make a Charisma (Performance) check contested by the humanoid's Wisdom (Insight) check. If your check succeeds, you grab the humanoid's attention enough that it makes Wisdom (Perception) and Intelligence (Investigation) checks with disadvantage until you stop performing.",
	description : "I gain expertise with Performance, or proficiency if not so already. While performing, I can distract one humanoid. It must make its Insight vs. my Performance or have disadv. on its Perception and Investigation checks until I stop performing. [+1 Charisma]",
	scores : [0, 0, 0, 0, 0, 1],
	skills : [["Performance", "increment"]]
};
FeatsList["quick-fingered-ua"] = {
	name : "Quick-Fingered",
	source : [["UA:FS", 3]],
	descriptionFull : "Your nimble fingers and agility let you perform sleight of hand. You gain the following benefits:\n \u2022 Increase your Dexterity score by 1, to a maximum of 20.\n \u2022 You gain proficiency in the Sleight of Hand skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.\n \u2022 As a bonus action, you can make a Dexterity (Sleight of Hand) check to plant something on someone else, conceal an object on a creature, lift a purse, or take something from a pocket.",
	description : "I gain expertise with Sleight of Hand, or proficiency if not so already. As a bonus action, I can make a Dexterity (Sleight of Hand) check to plant something on someone else, conceal an object on a creature, lift a purse, or take something from a pocket. [+1 Dexterity]",
	scores : [0, 1, 0, 0, 0, 0],
	skills : [["Sleight of Hand", "increment"]],
	action : [["bonus action", ""]]
};
FeatsList["silver-tongued-ua"] = {
	name : "Silver-Tongued",
	source : [["UA:FS", 3]],
	descriptionFull : "You develop your conversational skill to better deceive others. You gain the following benefits:\n \u2022 Increase your Charisma score by 1, to a maximum of 20.\n \u2022 You gain proficiency in the Deception skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.\n \u2022 When you take the Attack action on your turn, you can replace one attack with an attempt to deceive one humanoid you can see within 30 feet of you that can see and hear you. Make a Charisma (Deception) check contested by the target's Wisdom (Insight) check. If your check succeeds, your movement doesn't provoke opportunity attacks from the target and your attack rolls against it have advantage; both benefits last until the end of your next turn or until you use this ability on a different target. If your check fails, the target can't be deceived by you in this way for 1 hour.",
	description : "I gain expertise with Deception, or proficiency if not so already. Instead of 1 attack in my Attack action, a humanoid within 30 ft makes its Insight vs. my Deception or until end of my next turn, I gain adv. on attacks and don't provoke its opportunity attacks. [+1 Cha]",
	scores : [0, 0, 0, 0, 0, 1],
	skills : [["Deception", "increment"]]
};
FeatsList["stealthy-ua"] = {
	name : "Stealthy",
	source : [["UA:FS", 4]],
	descriptionFull : "You know how best to hide. You gain the following benefits:\n \u2022 Increase your Dexterity score by 1, to a maximum of 20.\n \u2022 You gain proficiency in the Stealth skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.\n \u2022 If you are hidden, you can move up to 10 feet in the open without revealing yourself if you end the move in a position where you're not clearly visible.",
	description : "I gain expertise with Stealth, or proficiency if not so already. When I'm hidden, I can move 10 ft to another position without revealing myself, provided that I won't be clearly visible in this new position either. [+1 Dexterity]",
	scores : [0, 1, 0, 0, 0, 0],
	skills : [["Stealth", "increment"]]
};
FeatsList["survivalist-ua"] = {
	name : "Survivalist",
	source : [["UA:FS", 4]],
	descriptionFull : "You master wilderness lore, gaining the following benefits:\n \u2022 Increase your Wisdom score by 1, to a maximum of 20.\n \u2022 You gain proficiency in the Survival skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.\n \u2022 You learn the Alarm spell. You can cast it once without expending a spell slot, and you regain the ability to do so when you finish a long rest.",
	description : "I gain expertise with Survival, or proficiency if not so already. I can cast Alarm without using a spell slot. Once I do so, I can't do it again until I finish a long rest. [+1 Wisdom]",
	scores : [0, 0, 0, 0, 1, 0],
	skills : [["Survival", "increment"]],
	spellcastingBonus : [{
		name : "1x long rest",
		spellcastingAbility : 5,
		spells : ["alarm"],
		selection : ["alarm"],
		firstCol : "oncelr"
	}]
};
FeatsList["theologian-ua"] = {
	name : "Theologian",
	source : [["UA:FS", 4]],
	descriptionFull : "Your extensive study of religion rewards you with the following benefits:\n \u2022 Increase your Intelligence score by 1, to a maximum of 20.\n \u2022 You gain proficiency in the Religion skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.\n \u2022 You learn the Thaumaturgy and Detect Evil and Good spells. You can cast Detect Evil and Good once without expending a spell slot, and you regain the ability to do so when you finish a long rest.",
	description : "I gain expertise with Religion, or proficiency if not so already. I learn the Thaumaturgy cantrip. I can cast Detect Evil and Good without using a spell slot. Once I do so, I can't do it again until I finish a long rest. [+1 Intelligence]",
	scores : [0, 0, 0, 1, 0, 0],
	skills : [["Religion", "increment"]],
	spellcastingBonus : [{
		name : "Theologian",
		spellcastingAbility : 4,
		spells : ["thaumaturgy"],
		selection : ["thaumaturgy"],
		firstCol : "atwill"
	}, {
		name : "Theologian (1x long rest)",
		spells : ["detect evil and good"],
		selection : ["detect evil and good"],
		firstCol : "oncelr"
	}]
};
