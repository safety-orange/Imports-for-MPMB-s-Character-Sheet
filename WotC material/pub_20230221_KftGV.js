var iFileName = "pub_20230221_KftGV.js";
RequiredSheetVersion("13.1.1");
// This file adds the magic items from the Keys from the Golden Vault adventure book to MPMB's Character Record Sheet

SourceList["KftGV"] = {
	name : "Keys from the Golden Vault [items]",
	abbreviation : "KftGV",
	group : "Adventure Books",
	url : "https://dnd.wizards.com/products/keys-from-the-golden-vault",
	date : "2023/02/21"
};

var KftGV_ConstantoriPortrait = [
	"This painting by famed artist Dkesii Kwan depicts Constantori, a beautiful courtier, who was paid a staggering sum to be Dkesii's model. Whether Constantori's actual appearance matches the painting remains a subject of debate. The portrait is one of several paintings commissioned by the late Daiyani Grysthorn, a crime lord who frequently gave magical paintings as gifts to her most esteemed associates.",
	">>Sentience<<. Constantori's Portrait is a sentient, lawful evil item with an Intelligence score of 14, a Wisdom score of 12, and a Charisma score of 8. It can hear within a range of 120 feet and has darkvision within a range of 60 feet, but it can't see anything behind itself.",
	"The painting can converse in Common, Draconic, and Elvish as if it were a living person, though Constantori's mouth doesn't move. Whenever conversation occurs within the portrait's auditory range, the painting eagerly gathers secrets, the names of secret tellers, significant events, or any political conversations.",
	">>Personality<<. Constantori's Portrait is demanding, condescending, and vain. It doesn't like being covered or placed out of sight, and it loudly condemns anyone who tries to remove it from its gold-leaf frame.",
	">>Wealth of Information<<. The painting's primary purpose is to observe and recall conversations. Over the past few decades, Constantori's Portrait has quietly observed countless conversations and now possesses an unquantifiable amount of lore\u2014everything from criminal conspiracies to secret passwords. The DM decides what the painting knows and what it doesn't.",
	"While attuned to the painting, you can take an action to telepathically contact it over any distance, provided the painting and you are on the same plane of existence. The painting can't telepathically contact you, however. Maintaining telepathic contact with the painting requires your concentration (as if concentrating on a spell).",
	">>Guardian Portrait<<. While you are attuned to the painting, you can command it to guard its location against one or more creatures you identify as the painting's enemies. The painting performs this function until you command it to stop or until your attunement to the painting ends.",
	"The painting has 3 charges. When a creature the painting identifies as its enemy starts its turn in a space the painting can see, the painting expends 1 of its charges to cast magic missile (3 missiles), targeting that creature. The painting regains all expended charges daily at dawn.",
	"The painting is a Small object with AC 12, 20 hit points, and immunity to poison damage. In its gold-leaf frame, the painting weighs 15 pounds. If the painting has at least 1 hit point and is targeted by a mending spell, it regains 2d6 hit points."
];
MagicItemsList["constantori's portrait"] = {
	name : "Constantori's Portrait",
	source : [["KftGV", 101]],
	type : "wondrous item",
	rarity : "very rare",
	attunement : true,
	description : "As an action, I can telepathically contact this sentient painting over any distance while on the same plane. It can't contact me. Maintaining contact requires concentration like on a spell. I can command the painting to guard an area. It can cast Magic Missile 3 times per dawn. See Notes page.",
	descriptionFull : KftGV_ConstantoriPortrait.join("\n   ").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
	toNotesPage : [{
		name : "Features",
		note : desc(KftGV_ConstantoriPortrait).replace(/>>(.*?)<</g, function(a, match) { return match.toUpperCase(); }).replace(/\bf(oo|ee)t\b/ig, "ft").replace(/your/g, "my").replace(/you are /ig, "I am ").replace(/(contact) you/ig, "$1 me").replace(/you /ig, "I ") + "\n\n" + sentientItemConflictTxt
	}],
	action : [["action", " (contact)"]],
	usages : 3,
	recovery : "dawn",
	spellFirstColTitle : "Ch",
	spellcastingBonus : {
		name : "1 charge",
		spells : ["magic missile"],
		selection : ["magic missile"],
		firstCol : 1
	}
};

MagicItemsList["shard of xeluan"] = {
	name : "Shard of Xeluan",
	source : [["KftGV", 134]],
	type : "wondrous item",
	rarity : "rare",
	attunement : true,
	description : "While holding this 1-ft long obsidian shard, I can use it as a spellcasting focus, and I gain a +1 bonus to my spell attack rolls. While it is on my person, I gain +4 Strength up to 22. Attuning to this shard extends its curse to me: When I roll a 1 on a check, attack, or save, I must roll on its misfortunes table, see Notes.",
	descriptionFull : "This 1-foot-long shard of obsidian has veins of silver and gold beneath its cold surface."+
	"\n   " + toUni("Empowered Magic") + ". While holding the shard, you can use it as a spellcasting focus, and it gives you a +1 bonus to your spell attack rolls."+
	"\n   " + toUni("Enhanced Strength") + ". Your Strength score increases by 4 while the shard is on your person. The shard can't raise your Strength score above 22."+
	"\n   " + toUni("Curse") + ". Attuning to this item extends its curse to you. You remain cursed until you are targeted by a remove curse spell or similar magic, or until the shard is reattached to Xeluan's petrified heart."+
	"\n   The shard's curse causes misfortune to befall you. When you roll a 1 on an attack roll, an ability check, or a saving throw, roll on the Shard Misfortunes table to determine the misfortune. For as long as this misfortune lasts, no other shard misfortunes befall you."+
	"\n\n " + toUni("d6\tMisfortune")+
	"\n  1\tYou accidentally cut yourself with the shard and are poisoned until the next dawn."+
	"\n  2\tYou experience a vision of an ancient calamity\u2014a beautiful city threatened by crumbling mountains and erupting volcanoes\u2014and are stunned until the end of your next turn."+
	"\n  3\tFor a few seconds, the ground shakes under you. You and each creature within 10 feet of you must succeed on a DC 16 Dexterity saving throw or be knocked prone."+
	"\n  4\tThe shard releases three glowing darts of magical force that target one random creature within 30 feet of you. If no such target exists, you become the target. Each dart hits automatically and deals 3 (1d4 + 1) force damage to the target."+
	"\n  5\tUntil the next dawn, Beasts with an Intelligence score of 3 or lower are hostile to you."+
	"\n  6\tNothing seems to go your way. Until the next dawn, you have disadvantage on ability checks.",
	calcChanges : {
		spellCalc : [
			function (type, spellcasters, ability) {
				if (type == "attack") return 1;
			},
			"I gain a +1 bonus to spell attack rolls."
		]
	},
	scores : [4, 0, 0, 0, 0, 0],
	scoresMaximum : [22, 0, 0, 0, 0, 0],
	toNotesPage : [{
		name : "Shard Misfortunes Table",
		note : [
			"Attuning to this item extends its curse to me. I remain cursed until I'm targeted by a remove curse spell or similar magic, or until the shard is reattached to Xeluan's petrified heart.",
			"The shard's curse causes misfortune to befall me. When I roll a 1 on an attack roll, an ability check, or a saving throw, roll on the Shard Misfortunes table to determine the misfortune. For as long as this misfortune lasts, no other shard misfortunes befall me.",
			"\n  d6\tMisfortune",
			"1\tI accidentally cut myself with the shard and are poisoned until the next dawn."+
			"2\tI experience a vision of an ancient calamity: a beautiful city threatened by crumbling mountains and erupting volcanoes. I am stunned until the end of my next turn."+
			"3\tFor a few seconds, the ground shakes under me. Each creature within 10 ft of me, myself included, must succeed on a DC 16 Dexterity saving throw or be knocked prone."+
			"4\tThe shard releases three glowing darts of magical force that target one random creature within 30 ft of me. If no such target exists, I become the target. Each dart hits automatically and deals 1d4+1 force damage to the target."+
			"5\tUntil the next dawn, Beasts with an Intelligence score of 3 or lower are hostile to me."+
			"6\tNothing seems to go my way. Until the next dawn, I have disadvantage on ability checks."
		]
	}]
};

var KftGV_ShardSolitaire = {
	descriptionFull : "This gemstone contains an unstable extradimensional rift. Its facets are ribboned with iridescent veins that seem to move of their own accord. Five types of shard solitaire are known to exist, each one a different type of gemstone: black sapphire, diamond, jacinth, rainbow pearl, and ruby."+
	"\n   " + toUni("Rift Step") + ". As a bonus action, while wearing or holding the shard solitaire, you can teleport yourself, along with anything you're wearing or carrying, to an unoccupied space you can see within 30 feet of yourself."+
	"\n   When you use this property, you can tap into the unstable power of the stone's extradimensional rift to increase the teleport distance by up to 30 feet, but if you teleport more than 30 feet using Rift Step, you must succeed on a DC 16 Constitution saving throw or take 3d10 force damage immediately after you teleport."+
	"\n   " + toUni("Spellcasting") + ". The stone has 6 charges and regains 1d6 expended charges daily at dawn. ",
	descriptionTable : "The Shard Solitaire Types table lists the spells common to all shard solitaires, as well as the spells specific to each kind of stone. As an action, you can cast one of the stone's spells by expending the requisite number of charges, requiring no material components (save DC 16)."+
	"\n\n " + toUni("Shard Solitaire\tSpells")+
	"\n  All\t\tBanishment (3 charges; the target is banished to the stone's extradimensional space"+
	"\n\t\tfor the spell's duration), Mirror Image (1 charge)"+
	"\n  Black sapphire\tBlight (3 charges), Finger of Death (6 charges)"+
	"\n  Diamond\tIce Storm (3 charges), Simulacrum (6 charges; the duplicate created by the spell"+
	"\n\t\thas the same number of hit points as the creature it imitates)"+
	"\n  Jacinth\t\tFireball (2 charges), Fire Storm (6 charges)"+
	"\n  Rainbow pearl\tPrismatic Spray (6 charges), Water Breathing (2 charges)"+
	"\n  Ruby\t\tFly (2 charges), Teleport (6 charges)",
	spellcastingBonus : [{
		fixedDC : 16,
		name : "1 charge",
		spells : ["mirror image"],
		selection : ["mirror image"],
		firstCol : 1
	}, {
		name : "3 charges",
		spells : ["banishment"],
		selection : ["banishment"],
		firstCol : 3
	}],
	spellChanges_banishment : {
		description : "1 crea save or banished to the stone's extradimensional space for the spell's duration",
		changes : "The target is instead banished to the stone's extradimensional space for the spell's duration."
	}
};
MagicItemsList["shard solitaire"] = {
	name : "Shard Solitaire",
	source : [["KftGV", 193]],
	type : "wondrous item",
	rarity : "legendary",
	attunement : true,
	description : "As a bonus action while wearing or holding this gemstone, I can teleport up to 60 ft to an empty space I can see. If I teleport over 30 ft, I need to make a DC 16 Con save or take 3d10 force damage. It has 6 charges, regaining 1d6 at dawn. I can use these charges to cast several spells as an action, see the spell sheet.",
	descriptionFull : KftGV_ShardSolitaire.descriptionFull.replace(": black sapphire, diamond, jacinth, rainbow pearl, and ruby.", ", as shown in the Shard Solitaire Types table.") + KftGV_ShardSolitaire.descriptionTable,
	allowDuplicates : true,
	usages : 6,
	recovery : "dawn",
	additional : "regains 1d6",
	choices : ["Black Sapphire", "Diamond", "Jacinth", "Rainbow Pearl", "Ruby"],
	"black sapphire" : {
		descriptionFull : KftGV_ShardSolitaire.descriptionFull + "The black sapphire shard solitaire can be used to cast the following spells: Banishment (3 charges; the target is banished to the stone's extradimensional space for the spell's duration), Mirror Image (1 charge), Blight (3 charges), Finger of Death (6 charges).",
		action : [["bonus action", "Black Sapphire (Shard Step)"]],
		spellFirstColTitle : "Ch",
		spellcastingBonus : KftGV_ShardSolitaire.spellcastingBonus.concat([{
			name : "3 charges",
			spells : ["blight"],
			selection : ["blight"],
			firstCol : 3
		}, {
			name : "6 charges",
			spells : ["finger of death"],
			selection : ["finger of death"],
			firstCol : 6
		}]),
		spellChanges : {
			"banishment" : KftGV_ShardSolitaire.spellChanges_banishment
		}
	},
	"diamond" : {
		descriptionFull : KftGV_ShardSolitaire.descriptionFull + "The diamond shard solitaire can be used to cast the following spells: Banishment (3 charges; the target is banished to the stone's extradimensional space for the spell's duration), Mirror Image (1 charge), Ice Storm (3 charges), Simulacrum (6 charges; the duplicate created by the spell has the same number of hit points as the creature it imitates).",
		action : [["bonus action", "Diamond (Shard Step)"]],
		spellFirstColTitle : "Ch",
		spellcastingBonus : KftGV_ShardSolitaire.spellcastingBonus.concat([{
			name : "3 charges",
			spells : ["ice storm"],
			selection : ["ice storm"],
			firstCol : 3
		}, {
			name : "6 charges",
			spells : ["simulacrum"],
			selection : ["simulacrum"],
			firstCol : 6
		}]),
		spellChanges : {
			"banishment" : KftGV_ShardSolitaire.spellChanges_banishment,
			"simulacrum" : {
				time : "1 a",
				description : "Create illusory duplicate of humanoid/beast; follows my verbal commands; has full HP, not half; See B",
				changes : "Cast as 1 action and the duplicate created by the spell has the same number of hit points as the creature it imitates."
			}
		}
	},
	"jacinth" : {
		descriptionFull : KftGV_ShardSolitaire.descriptionFull + "The jacinth shard solitaire can be used to cast the following spells: Banishment (3 charges; the target is banished to the stone's extradimensional space for the spell's duration), Mirror Image (1 charge), Fireball (2 charges), Fire Storm (6 charges).",
		action : [["bonus action", "Jacinth (Shard Step)"]],
		spellFirstColTitle : "Ch",
		spellcastingBonus : KftGV_ShardSolitaire.spellcastingBonus.concat([{
			name : "2 charges",
			spells : ["fireball"],
			selection : ["fireball"],
			firstCol : 2
		}, {
			name : "6 charges",
			spells : ["fire storm"],
			selection : ["fire storm"],
			firstCol : 6
		}]),
		spellChanges : {
			"banishment" : KftGV_ShardSolitaire.spellChanges_banishment
		}
	},
	"rainbow pearl" : {
		descriptionFull : KftGV_ShardSolitaire.descriptionFull + "The rainbow pearl shard solitaire can be used to cast the following spells: Banishment (3 charges; the target is banished to the stone's extradimensional space for the spell's duration), Mirror Image (1 charge), Prismatic Spray (6 charges), Water Breathing (2 charges).",
		action : [["bonus action", "Rainbow Pearl (Shard Step)"]],
		spellFirstColTitle : "Ch",
		spellcastingBonus : KftGV_ShardSolitaire.spellcastingBonus.concat([{
			name : "6 charges",
			spells : ["prismatic spray"],
			selection : ["prismatic spray"],
			firstCol : 6
		}, {
			name : "2 charges",
			spells : ["water breathing"],
			selection : ["water breathing"],
			firstCol : 2
		}]),
		spellChanges : {
			"banishment" : KftGV_ShardSolitaire.spellChanges_banishment
		}
	},
	"ruby" : {
		descriptionFull : KftGV_ShardSolitaire.descriptionFull + "The ruby shard solitaire can be used to cast the following spells: Banishment (3 charges; the target is banished to the stone's extradimensional space for the spell's duration), Mirror Image (1 charge), Fly (2 charges), Teleport (6 charges).",
		action : [["bonus action", "Ruby (Shard Step)"]],
		spellFirstColTitle : "Ch",
		spellcastingBonus : KftGV_ShardSolitaire.spellcastingBonus.concat([{
			name : "2 charges",
			spells : ["fly"],
			selection : ["fly"],
			firstCol : 2
		}, {
			name : "6 charges",
			spells : ["teleport"],
			selection : ["teleport"],
			firstCol : 6
		}]),
		spellChanges : {
			"banishment" : KftGV_ShardSolitaire.spellChanges_banishment
		}
	}
};
