var iFileName = "ua_20160606_Feats.js";
RequiredSheetVersion("13.0.8");
// This file adds the content from the Unearthed Arcana: Feats article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:F"] = {
	name : "Unearthed Arcana: Feats",
	abbreviation : "UA:F",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2016/downloads/DND/UA-Feats-V1.pdf",
	date : "2016/06/06"
};

// Add 8 feats: 4 'weapon mastery' feats and 4 'tool' feats
// This doesn't add the "Warhammer Master" feat, as that is only in the article to illustrate how not to design a feat
FeatsList["fell handed-ua"] = {
	name : "Fell Handed",
	source : [["UA:F", 2], ["UA", 0]],
	descriptionFull : "You master the handaxe, battleaxe, greataxe, warhammer, and maul. You gain the following benefits when using any of them:\n \u2022 You gain a +1 bonus to attack rolls you make with the weapon.\n \u2022 Whenever you have advantage on a melee attack roll you make with the weapon and hit, you can knock the target prone if the lower of the two d20 rolls would also hit the target.\n \u2022 Whenever you have disadvantage on a melee attack roll you make with the weapon, the target takes bludgeoning damage equal to your Strength modifier (minimum of 0) if the attack misses but the higher of the two d20 rolls would have hit.\n \u2022 If you use the Help action to aid an ally's melee attack while you're wielding the weapon, you knock the target's shield aside momentarily. In addition to the ally gaining advantage on the attack roll, the ally gains a +2 bonus to the roll if the target is using a shield.",
	description : "With a handaxe, battleaxe, greataxe, warhammer, or maul, I get +1 to hit, knock prone if I have adv. and hit with both rolls, with disadv. still do Str mod in bludg. damage if I miss but the other die would've hit, can use Help to give ally +2 to hit vs. enemy with a shield.",
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if ((/handaxe|battleaxe|greataxe|warhammer|maul/).test(v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Adv: knock prone if both dice hit; Disadv: Str Mod bludg. damage on miss but 2nd die would hit';
				};
			},
			"With a handaxe, battleaxe, greataxe, warhammer, or maul, I get the following benefits:\n \u2022 +1 to hit;\n \u2022 When attacking with advantage, the target is knocked prone if both die would hit;\n \u2022 When attacking with disadvantage and missing, still do my Strength modifier in bludgeoning damage."
		],
		atkCalc : [
			function (fields, v, output) {
				if ((/handaxe|battleaxe|greataxe|warhammer|maul/).test(v.baseWeaponName)) output.extraHit += 1;
			}, ""]
	}
};
FeatsList["blade mastery-ua"] = {
	name : "Blade Mastery",
	source : [["UA:F", 2], ["UA", 0]],
	descriptionFull : "You master the shortsword, longsword, scimitar, rapier, and greatsword. You gain the following benefits when using any of them:\n \u2022 You gain a +1 bonus to attack rolls you make with the weapon.\n \u2022 On your turn, you can use your reaction to assume a parrying stance, provided you have the weapon in hand. Doing so grants you a +1 bonus to your AC until the start of your next turn or until you're not holding the weapon.\n \u2022 When you make an opportunity attack with the weapon, you have advantage on the attack roll.",
	description : "With a shortsword, longsword, greatsword, scimitar, or rapier, I get +1 to hit, advantage on opportunity attacks, and with the weapon in hand I can use my reaction to assume a parrying stance that gives me +1 AC until the start of my next turn.",
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if ((/shortsword|longsword|greatsword|scimitar|rapier/).test(v.baseWeaponName)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Advantage on opportunity attacks';
				};
			},
			"With a shortsword, longsword, greatsword, scimitar, or rapier, I get the following benefits:\n \u2022 +1 to hit;\n \u2022 Advantage on opportunity attacks."
		],
		atkCalc : [
			function (fields, v, output) {
				if ((/shortsword|longsword|greatsword|scimitar|rapier/).test(v.baseWeaponName)) output.extraHit += 1;
			}, ""]
	},
	action : ["reaction", " Parrying Stance"]
};
FeatsList["flail mastery-ua"] = {
	name : "Flail Mastery",
	source : [["UA:F", 3], ["UA", 0]],
	descriptionFull : "The flail is a tricky weapon to use, but you have spent countless hours mastering it. You gain the following benefits:\n \u2022 You gain a +1 bonus to attack rolls you make with a flail.\n \u2022 As a bonus action on your turn, you can prepare yourself to extend your flail to sweep over targets' shields. Until the end of this turn, your attack rolls with a flail gain a +2 bonus against any target using a shield.\n \u2022 When you hit with an opportunity attack using a flail, the target must succeed on a Strength saving throw (DC 8 + your proficiency bonus + your Strength modifier) or be knocked prone.",
	calculate : "event.value = 'With a flail, I get +1 to hit, and enemies hit by an opportunity attack with it have to make a Str save DC ' + (8 + Number(What('Proficiency Bonus')) + What('Str Mod')) + ' (8 + Prof. bonus + Str mod) or be knocked prone. As a bonus action, I can get +2 to hit with my flail vs. targets with shields until the end of my turn.';",
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.baseWeaponName == 'flail') {
					fields.Description += (fields.Description ? '; ' : '') + 'On opportunity attack hit, Strength save (DC 8 + Prof. bonus + Str mod) or knocked prone';
				};
			},
			"With a flail, I get the following benefits:\n \u2022 +1 to hit;\n \u2022 Targets hit with it must make a Strength saving throw (DC 8 + proficiency bonus + Strength modifier) or be knocked prone."
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.baseWeaponName == 'flail') output.extraHit += 1;
			}, ""]
	},
	action : ["bonus action", ""]
};
FeatsList["spear mastery-ua"] = {
	name : "Spear Mastery",
	source : [["UA:F", 3], ["UA", 0]],
	descriptionFull : "Though the spear is a simple weapon to learn, it rewards you for the time you have taken to master it. You gain the following benefits:\n \u2022 You gain a +1 bonus to attack rolls you make with a spear.\n \u2022 When you use a spear, its damage die changes from a d6 to a d8, and from a d8 to a d10 when wielded with two hands. (This benefit has no effect if another feature has already improved the weapon's die.)\n \u2022 You can set your spear to receive a charge. As a bonus action, choose a creature you can see that is at least 20 feet away from you. If that creature moves within your spear's reach on its next turn, you can make a melee attack against it with your spear as a reaction. If the attack hits, the target takes an extra 1d8 piercing damage, or an extra 1d10 piercing damage if you wield the spear with two hands. You can't use this ability if the creature used the Disengage action before moving.\n \u2022 As a bonus action on your turn, you can increase your reach with a spear by 5 feet for the rest of your turn.",
	description : "With a spear, I get +1 to hit and it does d8 damage (versatile d10). As a bonus action, I select a target at least 20 ft away. If it moves in reach on its next turn, I can attack it as a reaction, extra damage die. As a bonus action, I can increase the spear's reach by 5 ft.",
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.baseWeaponName == 'spear') {
					fields.Damage_Die = fields.Damage_Die === '1d6' ? '1d8' : fields.Damage_Die;
					fields.Description = fields.Description.replace('versatile (1d8)', 'versatile (1d10)');
				};
			},
			"With a spear, I get the following benefits:\n \u2022 +1 to hit;\n \u2022 The spear damage die increases to d8 (versatile d10).",
			1
		],
		atkCalc : [
			function (fields, v, output) {
				if (v.baseWeaponName == 'spear') output.extraHit += 1;
			}, ""]
	},
	action : [["bonus action", " (set vs. charge)"], ['bonus action', ' (increase reach)']]
};
FeatsList["alchemist-ua"] = {
	name : "Alchemist",
	source : [["UA:F", 4], ["UA", 0]],
	descriptionFull : "You have studied the secrets of alchemy and are an expert in its practice, gaining the following benefits:\n \u2022 Increase your Intelligence score by 1, to a maximum of 20.\n \u2022 You gain proficiency with alchemist's supplies. If you are already proficient with them, you add double your proficiency bonus to checks you make with them.\n \u2022 As an action, you can identify one potion within 5 feet of you, as if you had tasted it. You must see the liquid for this benefit to work.\n \u2022 Over the course of any short rest, you can temporarily improve the potency of one potion of healing of any rarity. To use this benefit, you must have alchemist's supplies with you, and the potion must be within reach. If the potion is drunk no more than 1 hour after the short rest ends, the creature drinking the potion can forgo the potion's die roll and regains the maximum number of hit points that the potion can restore.",
	description : "I gain proficiency with alchemist's supplies, or expertise if already proficient. As an action, I can identify a potion within 5 ft. During a rest with alchemist's supplies, I can enhance a potion of healing, to heal its max. Consuming it within 1 hour maximizes its effects [+1 Int]",
	scores : [0, 0, 0, 1, 0, 0],
	action : ["action", " (identify potion)"],
	toolProfs : [["Alchemist's supplies", "Int"]],
	eval : function () {
		if ((/(alchemist|alchemy).*(supplies|kit)/i).test(What('Too Text'))) {
			Checkbox('Too Exp', true);
		};
	},
	removeeval : function () {
		if ((/(alchemist|alchemy).*(supplies|kit)/i).test(What('Too Text'))) {
			Checkbox('Too Exp', false);
		};
	}
};
FeatsList["burglar-ua"] = {
	name : "Burglar",
	source : [["UA:F", 4], ["UA", 0]],
	descriptionFull : "You pride yourself on your quickness and your close study of certain clandestine activities. You gain the following benefits:\n \u2022 Increase your Dexterity score by 1, to a maximum of 20.\n \u2022 You gain proficiency with thieves' tools. If you are already proficient with them, you add double your proficiency bonus to checks you make with them.",
	description : "I gain proficiency with thieves' tools, or expertise with them if I'm already proficient. [+1 Dexterity]",
	scores : [0, 1, 0, 0, 0, 0],
	toolProfs : [["Thieves' tools", "Dex"]],
	eval : function () {
		if ((/thieve.?s.*tools/i).test(What('Too Text'))) {
			Checkbox('Too Exp', true);
		};
	},
	removeeval : function () {
		if ((/thieve.?s.*tools/i).test(What('Too Text'))) {
			Checkbox('Too Exp', false);
		};
	}
};
FeatsList["gourmand-ua"] = {
	name : "Gourmand",
	source : ["UA:F", 4],
	descriptionFull : "You have mastered a variety of special recipes, allowing you to prepare exotic dishes with useful effects. You gain the following benefits:\n \u2022 Increase your Constitution score by 1, to a maximum of 20.\n \u2022 You gain proficiency with cook's utensils. If you are already proficient with them, you add double your proficiency bonus to checks you make with them.\n \u2022 As an action, you can inspect a drink or plate of food within 5 feet of you and determine whether it is poisoned, provided that you can see and smell it.\n \u2022 During a long rest, you can prepare and serve a meal that helps you and your allies recover from the rigors of adventuring, provided you have suitable food, cook's utensils, and other supplies on hand. The meal serves up to six people, and each person who eats it regains two additional Hit Dice at the end of the long rest. In addition, those who partake of the meal have advantage on Constitution saving throws against disease for the next 24 hours.",
	description : "I gain proficiency with cook's utensils, or expertise if already proficient. As an action, I can detect poison in food within 5 ft. In a long rest with food/supplies, I can have 6 creatures regain 2 extra HD and give them adv. on Con saves vs. disease for 24 hours. [+1 Con]",
	scores : [0, 0, 1, 0, 0, 0],
	action : ["action", " (inspect food)"],
	toolProfs : [["Cook's utensils", "Int"]],
	eval : function () {
		if ((/cook.*utensils/i).test(What('Too Text'))) {
			Checkbox('Too Exp', true);
		};
	},
	removeeval : function () {
		if ((/cook.*utensils/i).test(What('Too Text'))) {
			Checkbox('Too Exp', false);
		};
	}
};
FeatsList["master of disguise-ua"] = {
	name : "Master of Disguise",
	source : [["UA:F", 4], ["UA", 0]],
	descriptionFull : "You have honed your ability to shape your personality and to read the personalities of others. You gain the following benefits:\n \u2022 Increase your Charisma score by 1, to a maximum of 20.\n \u2022 You gain proficiency with the disguise kit. If you are already proficient with it, you add double your proficiency bonus to checks you make with it.\n \u2022 If you spend 1 hour observing a creature, you can then spend 8 hours crafting a disguise you can quickly don to mimic that creature. Making the disguise requires a disguise kit. You must make checks as normal to disguise yourself, but you can assume the disguise as an action.",
	description : "I gain proficiency with the disguise kit, or expertise with it if I'm already proficient. After observing a creature for 1 hour, I can craft a disguise to mimic it in 8 hours with a disguise kit. Once finished, I can don this disguise as an action. [+1 Charisma]",
	scores : [0, 0, 0, 0, 0, 1],
	action : ["action", " (don disguise)"],
	toolProfs : [["Disguise kit", "Cha"]],
	eval : function () {
		if ((/disguise.*kit/i).test(What('Too Text'))) {
			Checkbox('Too Exp', true);
		};
	},
	removeeval : function () {
		if ((/disguise.*kit/i).test(What('Too Text'))) {
			Checkbox('Too Exp', false);
		};
	}
};
