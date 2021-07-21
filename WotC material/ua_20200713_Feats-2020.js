var iFileName = "ua_20200713_Feats-2020.js";
RequiredSheetVersion(13);
// This file adds the content from the Unearthed Arcana 2020: Feats article to MPMB's Character Record Sheet
// All content in this file contains contributions by AelarTheElfRogue

// Define the source
SourceList["UA:F2"] = {
	name: "Unearthed Arcana: Feats 2020",
	abbreviation: "UA:F2",
	group: "Unearthed Arcana",
	url: "https://media.wizards.com/2020/dnd/downloads/UA2020_Feats.pdf",
	date: "2020/07/13"
};

// [dupl_start] (mostly) the same as in Tasha's Cauldron of Everything
// feats that allow a change every level in UA, but not/different in TCoE are not added again, because the difference is so small
if (!SourceList.T) {
	FeatsList["artificer initiate"] = {
		name : "Artificer Initiate",
		source : [["T", 79], ["UA:F2", 1]],
		descriptionFull : "You've learned some of an artificer's inventiveness, granting you the following benefits:\n \u2022 You learn one cantrip of your choice from the artificer spell list, and you learn one 1st-level spell of your choice from that list. Intelligence is your spellcasting ability for these spells. Whenever you gain a level, you can replace one of these spells with another spell of the same level from the artificer spell list.\n \u2022 You can cast this feat's 1st-level spell without a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast the spell using any spell slots you have.\n \u2022 You gain proficiency with one type of artisan's tools of your choice, and you can use that type of tool as a spellcasting focus for any spell you cast that uses Intelligence as its spellcasting ability.", // only slightly different than TCoE: allowed to switch spells every level
		description: typePF ? "I learn a cantrip and a 1st-level spell from the artificer's spell list. Int is my spellcasting ability for these. Once per long rest, I can cast the 1st-level spell at its lowest level without using a spell slot. I gain proficiency in one artisan's tool, which I can use as a spellcasting focus for spells I cast with Int as spellcasting ability." : "I learn one cantrip and one 1st-level spell from the artificer's spell list. Intelligence is my spellcasting ability for these. I can cast the 1st-level spell at its lowest level once per long rest without using a spell slot. I gain proficiency in one artisan's tool, which I can use as a spellcasting focus for any spell I cast that uses Intelligence as its spellcasting ability.",
		spellcastingBonus : [{
			name : "Artificer cantrip",
			spellcastingAbility : 4,
			"class" : 'artificer',
			level : [0, 0],
			atwill : true
		}, {
			name : "1st-level artificer spell",
			"class" : 'artificer',
			level : [1, 1],
			oncelr : true
		}],
		toolProfs : [ ["Artisan's tools", 1] ]
	};
	FeatsList["chef"] = {
		name : "Chef",
		source : [["T", 79], ["UA:F2", 1]],
		descriptionFull : "Time spent mastering the culinary arts has paid off, granting you the following benefits:\n \u2022 Increase your Constitution or Wisdom score by 1, to a maximum of 20.\n \u2022 You gain proficiency with cook's utensils if you don't already have it.\n \u2022 As part of a short rest, you can cook special food, provided you have ingredients and cook's utensils on hand. You can prepare enough of this food for a number of creatures equal to 4 + your proficiency bonus. At the end of the short rest, any creature who eats the food and spends one or more Hit Dice to regain hit points regains an extra 1d8 hit points.\n \u2022 With one hour of work or when you finish a long rest, you can cook a number of treats equal to your proficiency bonus. These special treats last 8 hours after being made. A creature can use a bonus action to eat one of those treats to gain temporary hit points equal to your proficiency bonus.",
		description : "During a short rest, I can make food for 4 + my Prof" + (typePF ? "" : "iciency") + " Bonus creatures; if they eat it and spend 1" + (typePF ? "+ HD" : " or more Hit Die") + ", they regain 1d8 HP. In one hour or during a long rest, I can make treats equal to my Prof" + (typePF ? "" : "iciency") + " Bonus that last for 8 hours; As a bonus action, one can eat a treat, gaining my Prof" + (typePF ? "" : "iciency") + " Bonus in temporary HP. [+1 " + (typePF ? "Con or Wis" : "Constitution or Wisdom") + "]",
		action : [["bonus action", "Consume Chef's Treat"]],
		toolProfs : ["Cook's utensils"],
		scorestxt : "+1 Constitution or Wisdom"
	};
	FeatsList["eldritch adept"] = {
		name : "Eldritch Adept",
		source : [["T", 79], ["UA:F2", 1]],
		descriptionFull : "Studying occult lore, you have unlocked eldritch power within yourself: you learn one Eldritch Invocation option of your choice from the warlock class. If the invocation has a prerequisite, you can choose that invocation only if you're a warlock and only if you meet the prerequisite.\n   Whenever you gain a level, you can replace the invocation with another one from the warlock class.",
		description: 'I learn one Eldritch Invocation from the warlock class for which I meet the prerequisites (2nd page "Choose Feature" button). I can replace this invocation for another whenever I gain a level.',
		bonusClassExtrachoices : [{
			"class" : "warlock",
			feature : "eldritch invocations",
			bonus : 1
		}],
		prerequisite : "Spellcasting or Pact Magic feature",
		prereqeval : function (v) { return v.isSpellcastingClass; }
	};
	FeatsList["fey touched"] = {
		name : "Fey Touched",
		source : [["T", 79], ["UA:F2", 2]],
		descriptionFull : "Your exposure to the Feywild's magic has changed you, granting you the following benefits:\n \u2022 Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.\n \u2022 You learn the misty step spell and one 1st-level spell of your choice. The 1st-level spell must be from the divination or enchantment school of magic. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat.",
		description : "I learn Misty Step and one 1st level divination or enchantment spell. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them if I have a spell slot to do so. My spellcasting ability is the ability I choose to increase when I gain this feat. [+1 Intelligence, Wisdom, or Charisma]",
		spellcastingBonus : [{
			name : "Misty Step",
			spells : ["misty step"],
			selection : ["misty step"],
			firstCol : "oncelr"
		}, {
			name : "1st-level Ench/Div spell",
			'class': "any",
			school : ["Ench", "Div"],
			level : [1, 1],
			firstCol : "oncelr"
		}],
		spellcastingAbility : 4,
		choices : ["Intelligence", "Wisdom", "Charisma"],
		"intelligence": {
			description : "I learn Misty Step and one 1st level divination or enchantment spell. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them " + (typePF ? "by expending" : "with") + " a spell slot as normal. Intelligence is my spellcasting ability for these spells. [+1 Intelligence]",
			spellcastingAbility : 4,
			scores : [0, 0, 0, 1, 0, 0]
		},
		"wisdom": {
			description : "I learn Misty Step and one 1st level divination or enchantment spell. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Wisdom is my spellcasting ability for these spells. [+1 Wisdom]",
			spellcastingAbility : 5,
			scores : [0, 0, 0, 0, 1, 0]
		},
		"charisma": {
			description : "I learn Misty Step and one 1st level divination or enchantment spell. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Charisma is my spellcasting ability for these spells. [+1 Charisma]",
			spellcastingAbility : 6,
			scores : [0, 0, 0, 0, 0, 1]
		}
	};
	RunFunctionAtEnd(function() {
		if (!ClassList.fighter || !ClassList.fighter.features["fighting style"]) return;
		var FtngStyles = ClassList.fighter.features["fighting style"];
		FeatsList["fighting initiate"] = {
			name : "Fighting Initiate",
			source : [["T", 80], ["UA:F2", 2]],
			descriptionFull : "Your martial training has helped you develop a particular style of fighting. As a result, you learn one Fighting Style option of your choice from the fighter class. If you already have a style, the one you choose must be different.\n   Whenever you gain a level, you can replace this feat's fighting style with another one from the fighter class that you don't have.", // only slightly different than TCoE: allowed to switch style every level instead of only at ASI
			description: "I learn one Fighting Style from the fighter class, which must be one that I don't yet know. I can replace this fighting style for another whenever I gain a level.",
			prerequisite: "Proficiency with a martial weapon",
			prereqeval : function(v) {
				return v.martialWeaponsProf || v.otherWeaponsProf.some(function (n) {
					return WeaponsList[n] && (/Martial/i).test(WeaponsList[n].type);
				});
			},
			choices : [],
			"archery" : {
				description : "I gain a +2 bonus to attack rolls I make with ranged weapons. I can replace this fighting style for another whenever I gain a level.",
				source : FtngStyles.source
			},
			"defense" : {
				description : "I gain a +1 bonus to my AC while I'm wearing armor. I can replace this fighting style for another whenever I gain a level.",
				source : FtngStyles.source
			},
			"dueling" : {
				description : "When I wield a melee weapon in one hand and no other weapons, I gain a +2 bonus to damage rolls with that weapon. I can replace this fighting style for another whenever I gain a level.",
				source : FtngStyles.source
			},
			"great weapon fighting" : {
				description : "When I roll a 1 or 2 on a damage die for an attack I make with a two-handed or versatile melee weapon that I'm wielding with two hands, I can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. I can replace this fighting style for another whenever I gain a level.",
				source : FtngStyles.source
			},
			"protection" : {
				description : "When a creature I can see attacks a target other than me that is within 5 ft of me, I can use my reaction to impose disadvantage on the attack roll. I must be wielding a shield to do this. I can replace this fighting style for another whenever I gain a level.",
				source : FtngStyles.source
			},
			"two-weapon fighting" : {
				description : "When I engage in two-weapon fighting, I can add my ability modifier to the damage of the second (off-hand) attack. I can replace this fighting style for another whenever I gain a level.",
				source : FtngStyles.source
			},
			"blind fighting" : {
				description : "I have blindsight with a range of 10 ft, wherein I can effectively see anything that isn't behind total cover, including invisible things, even if I'm blinded or in darkness. This doesn't allow me to see things hidden from me. I can replace this fighting style for another whenever I gain a level.",
				source : [["T", 41]]
			},
			"interception" : {
				description : "As a reaction when a creature I can see hits a target, other than me, within 5 ft of me with an attack, I can reduce the damage the target takes by 1d10 + my proficiency bonus (min 0 damage). I must be wielding a shield or a simple or martial weapon to do this. I can replace this fighting style for another whenever I gain a level.",
				source : [["T", 41], ["UA:CFV", 12]]
			},
			"thrown weapon fighting" : {
				description : "I can draw a weapon that has the thrown property as part of the attack I make with the weapon. In addition, when I hit with a ranged attack using a thrown weapon, I gain a +2 bonus to the damage roll. I can replace this fighting style for another whenever I gain a level.",
				source : [["T", 42]]
			},
			"unarmed fighting" : {
				description : "My unarmed strikes deal 1d6 damage, or 1d8 if I'm not wielding any weapons or a shield. At the start of each of my turns, I can deal 1d4 bludgeoning damage to one creature grappled by me. I can replace this fighting style for another whenever I gain a level.",
				source : [["T", 42]]
			}
		};
		FtngStyles.choices.forEach(function (sName) {
			var sNameLC = sName.toLowerCase();
			if (!FtngStyles[sNameLC]) return;
			FeatsList["fighting initiate"].choices.push(sName);
			if (!FeatsList["fighting initiate"][sNameLC]) {
				FeatsList["fighting initiate"][sNameLC] = {
					description : FtngStyles[sNameLC].description.replace(/^\n   /i, '').replace(/\n   /g, '. ') + ". I can replace this fighting style whenever I gain a level.",
					source : FtngStyles[sNameLC].source ? FtngStyles[sNameLC].source : FtngStyles.source
				}
			}
			// Copy all attributes except name, source and description
			for (var attr in FtngStyles[sNameLC]) {
				if ((/\b(name|description|source)\b/i).test(attr)) continue;
				FeatsList["fighting initiate"][sNameLC][attr] = FtngStyles[sNameLC][attr];
			}
			if (!FeatsList["fighting initiate"][sNameLC].prereqeval) {
				FeatsList["fighting initiate"][sNameLC].prereqeval = function(v) {
					var knownStyles = GetFightingStyleSelection();
					return knownStyles[v.choice] ? false : true;
				};
				if (!FeatsList["fighting initiate"][sNameLC].prerequisite) FeatsList["fighting initiate"][sNameLC].prerequisite = sName + " Fighting Style is not selected anywhere else."
			};
		});
	});
	FeatsList["gunner"] = {
		name: "Gunner",
		source: [["T", 80], ["UA:F2", 2]],
		descriptionFull : "You have a quick hand and keen eye when employing firearms, granting you the following benefits:\n \u2022 Increase your Dexterity score by 1, to a maximum of 20.\n \u2022 You gain proficiency with firearms (see \"Firearms\" in the Dungeon Master's Guide).\n \u2022 You ignore the loading property of firearms.\n \u2022 Being within 5 feet of a hostile creature doesn't impose disadvantage on your ranged attack rolls.",
		description: "I gain proficiency with firearms. I ignore the loading property of firearms. I don't suffer disadvantage on ranged attack rolls for being within 5 ft of a hostile creature. [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
		weaponProfs: [false, false, ["Firearms"]],
		calcChanges: {
			atkAdd: [
				function (fields, v) {
					if ((/firearm/i).test(v.theWea.type) || (/firearm/i).test(v.theWea.list)) {
						fields.Description = fields.Description.replace(/([;,]? ?loading|loading[;,]? ?)/i, '');
					};
				},
				"I ignore the loading quality of firearms."
			]
		}
	};
	FeatsList["metamagic adept"] = {
		name: "Metamagic Adept",
		source : [["T", 80], ["UA:F2", 2]],
		descriptionFull : "You've learned how to exert your will on your spells to alter how they function. You gain the following benefits:\n \u2022 You learn two Metamagic options of your choice from the sorcerer class. You can use only one Metamagic option on a spell when you cast it, unless the option says otherwise. Whenever you gain a level, you can replace one of your Metamagic options with another one from the sorcerer class.\n \u2022 You gain 2 sorcery points to spend on Metamagic (these points are added to any sorcery points you have from another source but can be used only on Metamagic). You regain all spent sorcery points when you finish a long rest.", // only slightly different than TCoE: allowed to switch option every level instead of only at ASI
		description: 'I learn two Metamagic options from the sorcerer class (2nd page "Choose Feature" button). I can use only one option on a spell unless it says otherwise. I gain 2 sorcery points, which I can only use for Metamagic. I regain all expended sorcery points when I finish a long rest. I can change one ' + (typePF ? '' : 'Metamagic option ') + 'whenever I gain a level.',
		bonusClassExtrachoices : [{
			"class" : "sorcerer",
			feature : "metamagic",
			bonus : 2
		}],
		extraLimitedFeatures : [{
			name : "Sorcery Points",
			usages : 2,
			recovery : "long rest",
			addToExisting : true
		}],
		prerequisite : "Spellcasting or Pact Magic feature",
		prereqeval : function (v) { return v.isSpellcastingClass; }
	};
	FeatsList["piercer"] = {
		name : "Piercer",
		source : [["T", 80], ["UA:F2", 2]],
		descriptionFull : "You have achieved a penetrating precision in combat, granting you the following benefits:\n \u2022 Increase your Strength or Dexterity by 1, to a maximum of 20.\n \u2022 Once per turn, when you hit a creature with an attack that deals piercing damage, you can reroll one of the attack's damage dice, and you must use the new roll.\n \u2022 When you score a critical hit that deals piercing damage to a creature, you can roll one additional damage die when determining the extra piercing damage the target takes.",
		description : "Once per turn when I deal piercing damage to a target, I can reroll one of the damage die and use the new roll. If I deal piercing damage on a critical hit to a target I can roll one additional damage die. [+1 Strength or Dexterity]",
		scorestxt : "+1 Strength or Dexterity",
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if ((/pierc(\.|ing)/i).test(fields.Damage_Type)) {
						var extraCritRegex = /\d+(d\d+ extra on a crit(ical)?( hit)? in melee)/i;
						v.extraCritM = (v.extraCritM ? v.extraCritM : 0) + 1;
						if (extraCritRegex.test(fields.Description)) {
							fields.Description = fields.Description.replace(extraCritRegex, v.extraCritM + '$1');
						} else if ((/d\d/).test(fields.Damage_Die)) {
							fields.Description += (fields.Description ? '; ' : '') + v.extraCritM + fields.Damage_Die.replace(/.*(d\d+).*/, '$1') + ' extra on a crit in melee';
						}
						if (!(/re-?roll (one|1)? ?damage/i).test(fields.Description)) {
							fields.Description += '; Once per turn, re-roll one damage die';
						}
					}
				},
				"While wielding a two-handed or versatile melee weapon in two hands, I can re-roll a 1 or 2 on any damage die once."
			]
		}
	};
	FeatsList["poisoner"] = {
		name : "Poisoner",
		source : [["T", 80], ["UA:F2", 2]],
		descriptionFull : "You can prepare and deliver deadly poisons, gaining the following benefits:\n \u2022 When you make a damage roll, you ignore resistance to poison damage.\n \u2022 You can coat a weapon in poison as a bonus action, instead of an action.\n \u2022 You gain proficiency with the poisoner's kit if you don't already have it. With one hour of work using a poisoner's kit and expending 50 gp worth of materials, you can create a number of doses of potent poison equal to your proficiency bonus. Once applied, the poison retains potency for 1 minute or until you hit with the weapon. When a weapon coated in this poison deals damage to a creature, that creature must succeed on a DC 14 Constitution saving throw or take 2d8 poison damage and become poisoned until the end of your next turn.", // only slightly different than TCoE: not explicitly allowed to coat ammunition
		description : "My poison damage rolls ignore poison resistance. As a bonus action, I can apply poison to a weapon. I can use a poisoner's kit and 50 gp to create my Proficiency Bonus doses of poison in 1 hour. Potent 1 min after applying. DC 14 Con save or 2d8 poison damage and poisoned until the end of my next turn.",
		toolProfs : ["Poisoner's kit"],
		action : [["bonus action", "Apply poison to weapon/ammo"]]
	};
	FeatsList["slasher"] = {
		name : "Slasher",
		source : [["T", 81], ["UA:F2", 3]],
		descriptionFull : "You've learned where to cut to have the greatest results, granting you the following benefits:\n \u2022 Increase your Strength or Dexterity by 1, to a maximum of 20.\n \u2022 Once per turn when you hit a creature with an attack that deals slashing damage, you can reduce the speed of the target by 10 feet until the start of your next turn.\n \u2022 When you score a critical hit that deals slashing damage to a creature, you grievously wound it. Until the start of your next turn, the target has disadvantage on all attack rolls.",
		description : "Once per turn when I deal slashing damage to a target, I can reduce its speed by 10 ft until the start of my next turn. When I score a critical hit that deals slashing damage to a creature, the grievous wound causes it to have disadvantage on all attack rolls until the start of my next turn. [+1 Strength or Dexterity]",
		scorestxt : "+1 Strength or Dexterity"
	};
} // dupl_end
FeatsList["crusher-ua"] = {
	name : "Crusher",
	source : [["UA:F2", 1]],
	descriptionFull : "You are practiced in the art of crushing your enemies, granting you the following benefits:\n \u2022 Increase your Strength or Dexterity by 1, to a maximum of 20.\n \u2022 Once per turn, when you hit a creature with an attack that deals bludgeoning damage, you can move it 5 feet to an unoccupied space, provided the target is no more than one size larger than you.\n \u2022 When you score a critical hit that deals bludgeoning damage to a creature, attack rolls against that creature are made with advantage until the end of your next turn.",
	description : "Once per turn, when I hit a creature no more than one size larger than me with an attack that deals bludgeoning damage, I can move it 5 ft to an unoccupied space. If I score a critical hit that deals bludgeoning damage, attacks against the creature hit gain advantage until the start of my next turn. [+1 " + (typePF ? "Str or Dex" : "Strength or Dexterity") + "]",
	scorestxt : "+1 Strength or Dexterity"
};
FeatsList["practiced expert-ua"] = {
	name : "Practiced Expert",
	source : [["UA:F2", 3]],
	descriptionFull : "You have honed your proficiency with particular skills or tools, gaining the following benefits:\n \u2022 Increase one ability score of your choice by 1, to a maximum of 20.\n \u2022 You gain proficiency with one skill or tool of your choice.\n \u2022 Choose one of your skill or tool proficiencies. Your proficiency bonus is doubled for any ability check you make that uses the chosen proficiency.",
	description : "I gain proficiency in one skill or tool, and expertise in that same skill or tool, or another skill or tool I'm proficient with. [+1 to one ability score of my choice]",
	skillstxt : "Proficiency with one skill or tool, and\n   Expertise with one skill or tool I'm proficient with",
	scorestxt : "+1 to one ability score of my choice"
};
FeatsList["shadow touched-ua"] = {
	name: "Shadow Touched",
	source: [["UA:F2", 3]],
	descriptionFull : "You learn how to bend shadows from your experience with the Shadowfell. You gain the following benefits:\n \u2022 Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.\n \u2022 You learn the darkness spell and one 1st-level spell of your choice. The 1st-level spell must be from the illusion or necromancy school of magic. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level. The spells' spellcasting ability is the ability increased by this feat.",
	description : "I learn Darkness and one 1st level illusion or necromancy spell. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them if I have a spell slot to do so. My spellcasting ability is the ability I choose to increase when I gain this feat. [+1 Intelligence, Wisdom, or Charisma]",
	spellcastingBonus : [{
		name : "Darkness",
		spells : ["darkness"],
		selection : ["darkness"],
		firstCol : "oncelr"
	}, {
		name : "1st-level Illus/Necro spell",
		'class' : "any",
		school : ["Illus", "Necro"],
		level : [1, 1],
		firstCol : "oncelr"
	}],
	spellcastingAbility : 4,
	allowUpCasting : true,
	choices: ["Intelligence", "Wisdom", "Charisma"],
	"intelligence": {
		description : "I learn Darkness and one 1st level illusion or necromancy spell. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Intelligence is my spellcasting ability for these spells. [+1 Intelligence]",
		spellcastingAbility : 4,
		scores : [0, 0, 0, 1, 0, 0]
	},
	"wisdom": {
		description : "I learn Darkness and one 1st level illusion or necromancy spell. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Wisdom is my spellcasting ability for these spells. [+1 Wisdom]",
		spellcastingAbility : 5,
		scores : [0, 0, 0, 0, 1, 0]
	},
	"charisma": {
		description : "I learn Darkness and one 1st level illusion or necromancy spell. I can cast each once per long rest at their lowest level without expending a spell slot, and can cast them by expending a spell slot as normal. Charisma is my spellcasting ability for these spells. [+1 Charisma]",
		spellcastingAbility : 6,
		scores : [0, 0, 0, 0, 0, 1]
	}
};
FeatsList["shield training-ua"] = {
	name : "Shield Training",
	source : [["UA:F2", 3]],
	descriptionFull : "You've trained in the effective use of shields. You gain the following benefits:\n \u2022 Increase your Strength, Dexterity, or Constitution score by 1, to a maximum of 20.\n \u2022 You gain proficiency with shields.\n \u2022 In combat, you can don or doff a shield as the free object interaction on your turn.\n \u2022 If you have the Spellcasting or Pact Magic feature, you can use a shield as a spellcasting focus.",
	description : "I gain proficiency with shields. I can don or doff a shield as the free object interaction on my turn. If I have the Spellcasting or Pact Magic feature, I can use my shield as a spellcasting focus. [+1 Strength, Dexterity, or Constitution]",
	scorestxt : "+1 Strength, Dexterity, or Constitution",
	armorProfs : [false, false, false, true]
};
FeatsList["tandem tactician-ua"] = {
	name : "Tandem Tactician",
	source : [["UA:F2", 3]],
	descriptionFull : "Your presence in a scrap tends to elevate your comrades. You gain the following benefits:\n \u2022 You can use the Help action as a bonus action.\n \u2022 When you use the Help action to aid an ally in attacking a creature, increase the range of the Help action by 10 feet. Additionally, you can help two allies targeting the same creature within range when you use the Help action this way.",
	description : "I can use the Help action as a bonus action. When I use the Help action to aid an ally in attacking a creature, the range of the Help action increases with 10 ft. I can help two allies targeting the same creature within range when I use the Help action this way.",
	action : [["bonus action", ""]]
};
FeatsList["tracker-ua"] = {
	name : "Tracker",
	source : [["UA:F2", 3]],
	descriptionFull : "You have spent time hunting creatures and honed your skills, gaining the following benefits:\n \u2022 Increase your Wisdom score by 1, to a maximum of 20.\n \u2022 You learn the hunter's mark spell. You can cast it once without expending a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast the spell using any spell slots you have. Wisdom is your spellcasting ability for this spell.\n \u2022 You have advantage on Wisdom (Survival) checks to track creatures.",
	description : "I can cast Hunter's Mark once per long rest at its lowest level without expending a spell slot, and can cast it by expending a spell slot as normal. Wisdom is my spellcasting ability for this. I have advantage on Wisdom (Survival) checks to track creatures. [+1 Wisdom]",
	scores : [0, 0, 0, 0, 1, 0],
	spellcastingBonus : {
		name : "1\xD7/LR \u0026 spell slot",
		spellcastingAbility : 5,
		allowUpCasting : true,
		spells : ["hunter's mark"],
		selection : ["hunter's mark"],
		firstCol : "oncelr"
	}
};