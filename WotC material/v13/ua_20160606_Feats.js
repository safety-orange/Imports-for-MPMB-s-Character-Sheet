var iFileName = "ua_20160606_Feats.js";
RequiredSheetVersion(13);
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
FeatsList["fell handed"] = {
	name : "Fell Handed",
	source : ["UA:F", 2],
	description : "With a handaxe, battleaxe, greataxe, warhammer, or maul, I get +1 to hit, knock prone if I have adv. and hit with both rolls, with disadv. still do Str mod in bludg. damage if I miss but the other die would've hit, can use Help to give ally +2 to hit vs. enemy with a shield.",
	calcChanges : {
		atkAdd : ["if ((/handaxe|battleaxe|greataxe|warhammer|maul/).test(WeaponName)) {fields.Description += (fields.Description ? '; ' : '') + 'Adv: knock prone if both dice hit; Disadv: Str Mod bludg. damage on miss but 2nd die would hit';}; ", "With a handaxe, battleaxe, greataxe, warhammer, or maul, I get the following benefits:\n - +1 to hit;\n - When attacking with advantage, the target is knocked prone if both die would hit;\n - When attacking with disadvantage and missing, still do my Strength modifier in bludgeoning damage."],
		atkCalc : ["if ((/handaxe|battleaxe|greataxe|warhammer|maul/).test(WeaponName)) {output.extraHit += 1;}; ", ""]
	}
};
FeatsList["blade mastery"] = {
	name : "Blade Mastery",
	source : ["UA:F", 2],
	description : "With a shortsword, longsword, greatsword, scimitar, or rapier, I get +1 to hit, advantage on opportunity attacks, and with the weapon in hand I can use my reaction to assume a parrying stance that gives me +1 AC until the start of my next turn.",
	calcChanges : {
		atkAdd : ["if ((/shortsword|longsword|greatsword|scimitar|rapier/).test(WeaponName)) {fields.Description += (fields.Description ? '; ' : '') + 'Advantage on opportunity attacks';}; ", "With a shortsword, longsword, greatsword, scimitar, or rapier, I get the following benefits:\n - +1 to hit;\n - Advantage on opportunity attacks."],
		atkCalc : ["if ((/shortsword|longsword|greatsword|scimitar|rapier/).test(WeaponName)) {output.extraHit += 1;}; ", ""]
	},
	action : ["reaction", " Parrying Stance"]
};
FeatsList["flail mastery"] = {
	name : "Flail Mastery",
	source : ["UA:F", 3],
	calculate : "event.value = 'With a flail, I get +1 to hit, and enemies hit by an opportunity attack with it have to make a Str save DC ' + (8 + Number(What('Proficiency Bonus')) + What('Str Mod')) + ' (8 + Prof. bonus + Str mod) or be knocked prone. As a bonus action, I can get +2 to hit with my flail vs. targets with shields until the end of my turn.';",
	calcChanges : {
		atkAdd : ["if (WeaponName === 'flail') {fields.Description += (fields.Description ? '; ' : '') + 'On opportunity attack hit, Strength save (DC 8 + Prof. bonus + Str mod) or knocked prone';}; ", "With a flail, I get the following benefits:\n - +1 to hit;\n - Targets hit with it must make a Strength saving throw (DC 8 + proficiency bonus + Strength modifier) or be knocked prone."],
		atkCalc : ["if (WeaponName === 'flail') {output.extraHit += 1;}; ", ""]
	},
	action : ["bonus action", ""]
};
FeatsList["spear mastery"] = {
	name : "Spear Mastery",
	source : ["UA:F", 3],
	description : "With a spear, I get +1 to hit and it does d8 damage (versatile d10). As a bonus action, I select a target at least 20 ft away. If it moves in reach on its next turn, I can attack it as a reaction, extra damage die. As a bonus action, I can increase the speer's reach with 5 ft.",
	calcChanges : {
		atkAdd : ["if (WeaponName === 'spear') { fields.Damage_Die = fields.Damage_Die === '1d6' ? '1d8' : fields.Damage_Die; fields.Description = fields.Description.replace('versatile (1d8)', 'versatile (1d10)'); }; ", "With a spear, I get the following benefits:\n - +1 to hit;\n - The spear damage die increases to d8 (versatile d10)."],
		atkCalc : ["if (WeaponName === 'spear') {output.extraHit += 1;}; ", ""]
	},
	action : [["bonus action", " (set vs. charge)"], ['bonus action', ' (increase reach)']]
};
FeatsList["alchemist"] = {
	name : "Alchemist",
	source : ["UA:F", 4],
	description : "I gain proficiency with alchemist's supplies, or expertise if already proficient. As an action, I can identify a potion within 5 ft. During a rest with alchemist's supplies, I can enhance a potion of healing, to heal its max. Consuming it within 1 hour maximizes its effects [+1 Int]",
	scores : [0, 0, 0, 1, 0, 0],
	action : ["action", " (identify potion)"],
	toolProfs : [["Alchemist's supplies", "Int"]],
	eval : "if (CurrentProfs.tool[\"Alchemist's supplies\"] && (/(alchemist|alchemy).*(supplies|kit)/i).test(What('Too Text'))) { Checkbox('Too Exp', true); }; ",
	removeeval : "if (CurrentProfs.tool[\"Alchemist's supplies\"] && (/(alchemist|alchemy).*(supplies|kit)/i).test(What('Too Text'))) { Checkbox('Too Exp', false); }; "
};
FeatsList["burglar"] = {
	name : "Burglar",
	source : ["UA:F", 4],
	description : "I gain proficiency with thieves' tools, or expertise with them if I'm already proficient. [+1 Dexterity]",
	scores : [0, 1, 0, 0, 0, 0],
	toolProfs : [["Thieves' tools", "Dex"]],
	eval : "if (CurrentProfs.tool[\"Thieves' tools\"] && (/thieves.*tools/i).test(What('Too Text'))) { Checkbox('Too Exp', true); }; ",
	removeeval : "if (CurrentProfs.tool[\"Thieves' tools\"] && (/thieves.*tools/i).test(What('Too Text'))) { Checkbox('Too Exp', false); }; "
};
FeatsList["gourmand"] = {
	name : "Gourmand",
	source : ["UA:F", 4],
	description : "I gain proficiency with cook's utensils, or expertise if already proficient. As an action, I can detect poison in food within 5 ft. In a long rest with food/supplies, I can have 6 creatures regain 2 extra HD and give them adv. on Con saves vs. disease for 24 hours. [+1 Con]",
	scores : [0, 0, 1, 0, 0, 0],
	action : ["action", " (inspect food)"],
	toolProfs : [["Cook's utensils", "Int"]],
	eval : "if (CurrentProfs.tool[\"Cook's utensils\"] && (/cook.*utensils/i).test(What('Too Text'))) { Checkbox('Too Exp', true); }; ",
	removeeval : "if (CurrentProfs.tool[\"Cook's utensils\"] && (/cook.*utensils/i).test(What('Too Text'))) { Checkbox('Too Exp', false); }; "
};
FeatsList["master of disguise"] = {
	name : "Master of Disguise",
	source : ["UA:F", 4],
	description : "I gain proficiency with the disguise kit, or expertise with it if I'm already proficient. After observing a creature for 1 hour, I can craft a disguise to mimic it in 8 hours with a disguise kit. Once finished, I can don this disguise as an action. [+1 Charisma]",
	scores : [0, 0, 0, 0, 0, 1],
	action : ["action", " (don disguise)"],
	toolProfs : [["Disguise kit", "Cha"]],
	eval : "if (CurrentProfs.tool['Disguise kit'] && (/disguise.*kit/i).test(What('Too Text'))) { Checkbox('Too Exp', true); }; ",
	removeeval : "if (CurrentProfs.tool['Disguise kit'] && (/disguise.*kit/i).test(What('Too Text'))) { Checkbox('Too Exp', false); }; "
};
