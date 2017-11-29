var iFileName = "UA_20170417_Feats-for-Skills.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Unearthed Arcana: Feats for Skills article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:FS"] = {
	name : "Unearthed Arcana: Feats for Skills",
	abbreviation : "UA:FS",
	group : "Unearthed Arcana",
	url : "http://media.wizards.com/2017/dnd/downloads/UA-SkillFeats.pdf",
	date : "2017/04/17"
};

// Add 18 feats, corresponding with the 18 skills
FeatsList["acrobat"] = {
	name : "Acrobat",
	source : ["UA:FS", 1],
	description : "I gain expertise with Acrobatics, or proficiency if not so already. As a bonus action, I can make a DC 15 Dexterity (Acrobatics) check to have difficult terrain not cost me extra movement for this turn. [+1 Dexterity]",
	improvements : "Acrobat (feat): +1 Dexterity;",
	scores : [0, 1, 0, 0, 0, 0],
	skills : "\n\n" + toUni("Acrobat (feat)") + ": Acrobatics, or expertise if already proficient.",
	eval : "AddSkillProf('Acr', true, 'increment')",
	removeeval : "AddSkillProf('Acr', false, 'increment')",
	action : ["bonus action", ""]
};
FeatsList["animal handler"] = {
	name : "Animal Handler",
	source : ["UA:FS", 1],
	description : "I gain expertise with Animal Handling, or proficiency if not so already. As a bonus action, I can command a friendly beast not under another's command within 60 ft. If it hears me, I decide its next turn or give a general command lasting for 1 minute. [+1 Wisdom]",
	improvements : "Animal Handler (feat): +1 Wisdom;",
	scores : [0, 0, 0, 0, 1, 0],
	skills : "\n\n" + toUni("Animal Handler (feat)") + ": Animal Handling, or expertise if already proficient.",
	eval : "AddSkillProf('Ani', true, 'increment')",
	removeeval : "AddSkillProf('Ani', false, 'increment')",
	action : ["bonus action", ""]
};
FeatsList["arcanist"] = {
	name : "Arcanist",
	source : ["UA:FS", 1],
	description : "I gain expertise with Arcana, or proficiency if not so already. I learn the Prestidigitation cantrip. I can cast Detect Magic without using a spell slot. Once I do so, I can't do it again until I finish a long rest. [+1 Intelligence]",
	improvements : "Arcanist (feat): +1 Intelligence;",
	scores : [0, 0, 0, 1, 0, 0],
	skills : "\n\n" + toUni("Arcanist (feat)") + ": Arcana, or expertise if already proficient.",
	eval : "AddSkillProf('Arc', true, 'increment')",
	removeeval : "AddSkillProf('Arc', false, 'increment')",
	spellcastingBonus : [{
		name : "Arcanist",
		spellcastingAbility : 4,
		spells : ["prestidigitation"],
		selection : ["prestidigitation"],
		atwill : true
	}, {
		name : "Arcanist (1x long rest)",
		spells : ["detect magic"],
		selection : ["detect magic"],
		oncelr : true
	}]
};
FeatsList["brawny"] = {
	name : "Brawny",
	source : ["UA:FS", 1],
	description : "I gain expertise with Athletics, or proficiency if not so already. I count as one size larger when determining my carrying capacity and the weight I can push, drag, or lift. [+1 Strength]",
	improvements : "Brawny (feat): +1 Strength;",
	scores : [1, 0, 0, 0, 0, 0],
	skills : "\n\n" + toUni("Brawny (feat)") + ": Athletics, or expertise if already proficient.",
	eval : "AddSkillProf('Ath', true, 'increment'); tDoc.getField('Carrying Capacity Multiplier').value *= 2;",
	removeeval : "AddSkillProf('Ath', false, 'increment'); tDoc.getField('Carrying Capacity Multiplier').value /= 2;"
};
FeatsList["diplomat"] = {
	name : "Diplomat",
	source : ["UA:FS", 2],
	description : "I gain expertise with Persuasion, or proficiency if not so already. With a one minute long conversation outside of combat, I can make a Persuasion vs. its Insight. If successful, it is charmed by me as long as it remains within 60 ft and 1 minute after that [+1 Charisma]",
	improvements : "Diplomat (feat): +1 Charisma;",
	scores : [0, 0, 0, 0, 0, 1],
	skills : "\n\n" + toUni("Diplomat (feat)") + ": Persuasion, or expertise if already proficient.",
	eval : "AddSkillProf('Pers', true, 'increment')",
	removeeval : "AddSkillProf('Pers', false, 'increment')"
};
FeatsList["empathic"] = {
	name : "Empathic",
	source : ["UA:FS", 2],
	description : "I gain expertise with Insight, or proficiency if not so already. As an action, a humanoid within 30 ft I can see must make its Deception vs. my Insight or I gain advantage on attacks and ability checks against it until the end of my next turn. [+1 Wisdom]",
	improvements : "Empathic (feat): +1 Wisdom;",
	scores : [0, 0, 0, 0, 1, 0],
	skills : "\n\n" + toUni("Empathic (feat)") + ": Insight, or expertise if already proficient.",
	eval : "AddSkillProf('Ins', true, 'increment')",
	removeeval : "AddSkillProf('Ins', false, 'increment')"
};
FeatsList["historian"] = {
	name : "Historian",
	source : ["UA:FS", 2],
	description : "I gain expertise with History, or proficiency if not so already. When I use the Help action to help a creature that can understand me with an ability check, I can make a DC 15 Int (History) check to give a bonus equal to my proficiency bonus. [+1 Intelligence]",
	improvements : "Historian (feat): +1 Intelligence;",
	scores : [0, 0, 0, 1, 0, 0],
	skills : "\n\n" + toUni("Historian (feat)") + ": History, or expertise if already proficient.",
	eval : "AddSkillProf('His', true, 'increment')",
	removeeval : "AddSkillProf('His', false, 'increment')",
	action : ["action", ""]
};
FeatsList["investigator"] = {
	name : "Investigator",
	source : ["UA:FS", 2],
	description : "I gain expertise with Investigation, or proficiency if not so already. As a bonus action, I can take the Search action. [+1 Intelligence]",
	improvements : "Investigator (feat): +1 Intelligence;",
	scores : [0, 0, 0, 1, 0, 0],
	skills : "\n\n" + toUni("Investigator (feat)") + ": Investigation, or expertise if already proficient.",
	eval : "AddSkillProf('Inv', true, 'increment')",
	removeeval : "AddSkillProf('Inv', false, 'increment')",
	action : ["bonus action", " (Search)"]
};
FeatsList["medic"] = {
	name : "Medic",
	source : ["UA:FS", 2],
	description : "I gain expertise with Medicine, or proficiency if not so already. During a short rest, I can attend to the wounds of up to 6 creatures. With a DC 15 Wis (Medicine) check for each creature, that target gets the maximum result on one of its HD that it uses. [+1 Wisdom]",
	improvements : "Medic (feat): +1 Wisdom;",
	scores : [0, 0, 0, 0, 1, 0],
	skills : "\n\n" + toUni("Medic (feat)") + ": Medicine, or expertise if already proficient.",
	eval : "AddSkillProf('Med', true, 'increment')",
	removeeval : "AddSkillProf('Med', false, 'increment')"
};
FeatsList["menacing"] = {
	name : "Menacing",
	source : ["UA:FS", 2],
	description : "I gain expertise with Intimidation, or proficiency if not so already. Instead of 1 attack in my Attack action, a humanoid within 30 ft I can see and that can see and hear me must make its Insight vs. my Intimidation or be frightened until end of my next turn. [+1 Cha]",
	improvements : "Menacing (feat): +1 Charisma;",
	scores : [0, 0, 0, 0, 0, 1],
	skills : "\n\n" + toUni("Menacing (feat)") + ": Intimidation, or expertise if already proficient.",
	eval : "AddSkillProf('Inti', true, 'increment')",
	removeeval : "AddSkillProf('Inti', false, 'increment')"
};
FeatsList["naturalist"] = {
	name : "Naturalist",
	source : ["UA:FS", 3],
	description : "I gain expertise with Nature, or proficiency if not so already. I learn the Druidcraft cantrip. I can cast Detect Poison and Disease without using a spell slot. Once I do so, I can't do it again until I finish a long rest. [+1 Intelligence]",
	improvements : "Naturalist (feat): +1 Intelligence;",
	scores : [0, 0, 0, 1, 0, 0],
	skills : "\n\n" + toUni("Naturalist (feat)") + ": Nature, or expertise if already proficient.",
	eval : "AddSkillProf('Nat', true, 'increment')",
	removeeval : "AddSkillProf('Nat', false, 'increment')",
	spellcastingBonus : [{
		name : "Naturalist",
		spellcastingAbility : 4,
		spells : ["druidcraft"],
		selection : ["druidcraft"],
		atwill : true
	}, {
		name : "Naturalist (1x long rest)",
		spells : ["detect poison and disease"],
		selection : ["detect poison and disease"],
		oncelr : true
	}]
};
FeatsList["perceptive"] = {
	name : "Perceptive",
	source : ["UA:FS", 3],
	description : "I gain expertise with Perception, or proficiency if not so already. I don't have disadvantage on my Perception checks from being in a lightly obscured area (dim light), provided that I can still both see and hear. [+1 Wisdom]",
	improvements : "Perceptive (feat): +1 Wisdom;",
	scores : [0, 0, 0, 0, 1, 0],
	skills : "\n\n" + toUni("Perceptive (feat)") + ": Perception, or expertise if already proficient.",
	vision : [["No disadv. on Perception in lightly obscured or dim light", 0]],
	eval : "AddSkillProf('Perc', true, 'increment');",
	removeeval : "AddSkillProf('Perc', false, 'increment');"
};
FeatsList["performer"] = {
	name : "Performer",
	source : ["UA:FS", 3],
	description : "I gain expertise with Performance, or proficiency if not so already. While performing, I can distract one humanoid. It must make its Insight vs. my Performance or have disadv. on its Perception and Investigation checks until I stop performing. [+1 Charisma]",
	improvements : "Performer (feat): +1 Charisma;",
	scores : [0, 0, 0, 0, 0, 1],
	skills : "\n\n" + toUni("Performer (feat)") + ": Performance, or expertise if already proficient.",
	eval : "AddSkillProf('Perf', true, 'increment')",
	removeeval : "AddSkillProf('Perf', false, 'increment')"
};
FeatsList["quick-fingered"] = {
	name : "Quick-Fingered",
	source : ["UA:FS", 3],
	description : "I gain expertise with Sleight of Hand, or proficiency if not so already. As a bonus action, I can make a Dexterity (Sleight of Hand) check to plant something on someone else, conceal an object on a creature, lift a purse, or take something from a pocket. [+1 Dexterity]",
	improvements : "Quick-Fingered (feat): +1 Dexterity;",
	scores : [0, 1, 0, 0, 0, 0],
	skills : "\n\n" + toUni("Quick-Fingered (feat)") + ": Sleight of Hand, or expertise if already proficient.",
	eval : "AddSkillProf('Sle', true, 'increment')",
	removeeval : "AddSkillProf('Sle', false, 'increment')",
	action : ["bonus action", ""]
};
FeatsList["silver-tongued"] = {
	name : "Silver-Tongued",
	source : ["UA:FS", 3],
	description : "I gain expertise with Deception, or proficiency if not so already. Instead of 1 attack in my Attack action, a humanoid within 30 ft makes its Insight vs. my Deception or until end of my next turn, I gain adv. on attacks and don't provoke its opportunity attacks. [+1 Cha]",
	improvements : "Silver-Tongued (feat): +1 Charisma;",
	scores : [0, 0, 0, 0, 0, 1],
	skills : "\n\n" + toUni("Silver-Tongued (feat)") + ": Deception, or expertise if already proficient.",
	eval : "AddSkillProf('Dec', true, 'increment')",
	removeeval : "AddSkillProf('Dec', false, 'increment')"
};
FeatsList["stealthy"] = {
	name : "Stealthy",
	source : ["UA:FS", 4],
	description : "I gain expertise with Stealth, or proficiency if not so already. When I'm hidden, I can move 10 ft to another position without revealing myself, provided that I won't be clearly visible in this new position either. [+1 Dexterity]",
	improvements : "Stealthy (feat): +1 Dexterity;",
	scores : [0, 1, 0, 0, 0, 0],
	skills : "\n\n" + toUni("Stealthy (feat)") + ": Stealth, or expertise if already proficient.",
	eval : "AddSkillProf('Ste', true, 'increment')",
	removeeval : "AddSkillProf('Ste', false, 'increment')"
};
FeatsList["survivalist"] = {
	name : "Survivalist",
	source : ["UA:FS", 4],
	description : "I gain expertise with Survival, or proficiency if not so already. I can cast Alarm without using a spell slot. Once I do so, I can't do it again until I finish a long rest. [+1 Wisdom]",
	improvements : "Survivalist (feat): +1 Wisdom;",
	scores : [0, 0, 0, 0, 1, 0],
	skills : "\n\n" + toUni("Survivalist (feat)") + ": Survival, or expertise if already proficient.",
	eval : "AddSkillProf('Sur', true, 'increment')",
	removeeval : "AddSkillProf('Sur', false, 'increment')",
	spellcastingBonus : {
		name : "1x long rest",
		spellcastingAbility : 5,
		spells : ["alarm"],
		selection : ["alarm"],
		oncelr : true
	}
};
FeatsList["theologian"] = {
	name : "Theologian",
	source : ["UA:FS", 4],
	description : "I gain expertise with Religion, or proficiency if not so already. I learn the Thaumaturgy cantrip. I can cast Detect Evil and Good without using a spell slot. Once I do so, I can't do it again until I finish a long rest. [+1 Intelligence]",
	improvements : "Theologian (feat): +1 Intelligence;",
	scores : [0, 0, 0, 1, 0, 0],
	skills : "\n\n" + toUni("Theologian (feat)") + ": Religion, or expertise if already proficient.",
	eval : "AddSkillProf('Rel', true, 'increment')",
	removeeval : "AddSkillProf('Rel', false, 'increment')",
	spellcastingBonus : [{
		name : "Theologian",
		spellcastingAbility : 4,
		spells : ["thaumaturgy"],
		selection : ["thaumaturgy"],
		atwill : true
	}, {
		name : "Theologian (1x long rest)",
		spells : ["detect evil and good"],
		selection : ["detect evil and good"],
		oncelr : true
	}]
};
