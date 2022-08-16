var iFileName = "pub_20220315_CotN.js";
RequiredSheetVersion("13.1.1");
// This file adds all the magic items from Critical Role: Call of the Netherdeep to MPMB's Character Record Sheet

SourceList.CotN = {
	name : "Critical Role: Call of the Netherdeep [magic items]",
	abbreviation : "CotN",
	abbreviationSpellsheet : "MO",
	group : "Adventure Books",
	campaignSetting : "Critical Role",
	url : "https://dnd.wizards.com/products/call-netherdeep",
	date : "2022/03/15"
};

MagicItemsList["breathing bubble"] = {
	name : "Breathing Bubble",
	source : [["W", 266], ["CotN", 212]],
	type : "wondrous item",
	rarity : "common",
	notLegalAL : true,
	description : "This translucent, bubble-like sphere has a slightly tacky outer surface. I gain its benefits only while wearing it over my head like a helmet. The bubble contains 1 hour of breathable air. The bubble regains all its expended air daily at dawn.",
	descriptionFull : "This translucent, bubble-like sphere has a slightly tacky outer surface, and you gain the item's benefits only while wearing it over your head like a helmet. The bubble contains 1 hour of breathable air. The bubble regains all its expended air daily at dawn.",
	usages : 1,
	recovery : "dawn"
};
MagicItemsList["earring of message"] = {
	name : "Earring of Message",
	source : [["CotN", 212]],
	type : "wondrous item",
	rarity : "common",
	notLegalAL : true,
	description : "The blue crystal of this earring is wrapped with delicate copper wire. The earring has 5 charges. While wearing it, I can use an action to expend 1 charge and cast the message spell. The earring regains 1d4 + 1 expended charges daily at dawn.",
	descriptionFull : "The blue crystal of this earring is wrapped with delicate copper wire. The earring has 5 charges. While wearing it, you can use an action to expend 1 charge and cast the message spell. The earring regains 1d4 + 1 expended charges daily at dawn.",
	usages : 5,
	recovery : "dawn",
	additional : "regains 1d4+1",
	spellcastingAbility : "class",
	spellFirstColTitle : "Ch",
	spellcastingBonus : {
		name : "1 charge",
		spells : ["message"],
		selection : ["message"],
		firstCol : '1'
	}
};
MagicItemsList["medal of muscle"] = {
	name : "Medal of Muscle",
	source : [["CotN", 214]],
	type : "wondrous item",
	rarity : "common",
	notLegalAL : true,
	description : "Once as a an action, I can squeeze this medal tightly in the palm of my hand. Doing so gives me advantage on Strength checks and Strength saving throws for 1 hour. Once this property has been used, it can't be used again, and the medal becomes nonmagical.",
	descriptionFull : "You can squeeze this medal tightly in the palm of your hand as an action. Doing so gives you advantage on Strength checks and Strength saving throws for 1 hour. Once this property has been used, it can't be used again, and the medal becomes nonmagical."
};
MagicItemsList["medal of the conch"] = {
	name : "Medal of the Conch",
	source : [["CotN", 214]],
	type : "wondrous item",
	rarity : "common",
	notLegalAL : true,
	description : "Once as an action, I can rub this medal to gain a swimming speed equal to my walking speed for 1 hour. Once this property has been used, it can't be used again, and the medal becomes nonmagical.",
	descriptionFull : "When you use an action to rub this medal, you gain a swimming speed equal to your walking speed for 1 hour. Once this property has been used, it can't be used again, and the medal becomes nonmagical."
};
MagicItemsList["medal of the horizonback"] = {
	name : "Medal of the Horizonback",
	source : [["CotN", 214]],
	type : "wondrous item",
	rarity : "common",
	notLegalAL : true,
	description : "Once as a reaction when I would be hit by an attack, I can increase my AC by 5 until the start of my next turn, including against the triggering attack. I must be wearing the medal and able to see the creature that made the triggering attack. Once this property has been used, the medal becomes nonmagical.",
	descriptionFull : "When you would be hit by an attack, you can use your reaction to increase your AC by 5 until the start of your next turn, including against the triggering attack. You must be wearing the medal and able to see the creature that made the triggering attack to use this property. Once this property has been used, it can't be used again, and the medal becomes nonmagical."
};
MagicItemsList["medal of the maze"] = {
	name : "Medal of the Maze",
	source : [["CotN", 214]],
	type : "wondrous item",
	rarity : "common",
	notLegalAL : true,
	description : "Once as an action, I can trace the maze inscribed on this medal to gain advantage on Wisdom checks and to know the quickest route to the end of any nonmagical path or maze for 1 hour. Once this property has been used, it can't be used again, and the medal becomes nonmagical.",
	descriptionFull : "When you use an action to trace the maze inscribed on this medal, you gain advantage on Wisdom checks and know the quickest route to the end of any nonmagical path or maze for 1 hour. Once this property has been used, it can't be used again, and the medal becomes nonmagical."
};
MagicItemsList["medal of the meat pie"] = {
	name : "Medal of the Meat Pie",
	source : [["CotN", 214]],
	type : "wondrous item",
	rarity : "common",
	notLegalAL : true,
	description : "Once as an action, I can press this medal to my mouth to gain 2d4 + 2 temporary hit points. Once this property has been used, it can't be used again, and the medal becomes nonmagical. While magical, this medal is slightly warm to the touch (as if it's fresh from the oven) and smells faintly of baked pie crust.",
	descriptionFull : "You gain 2d4 + 2 temporary hit points when you use an action to press this medal to your mouth. Once this property has been used, it can't be used again, and the medal becomes nonmagical."+
	"\n   While magical, this medal is slightly warm to the touch (as if it's fresh from the oven) and smells faintly of baked pie crust."
};
MagicItemsList["medal of the wetlands"] = {
	name : "Medal of the Wetlands",
	source : [["CotN", 214]],
	type : "wondrous item",
	rarity : "common",
	notLegalAL : true,
	description : "Once as an action, I can trace the edge of this medal, making it so that difficult terrain doesn't cost me extra movement for 1 hour. Once this property has been used, it can't be used again, and the medal becomes nonmagical.",
	descriptionFull : "When you use an action to trace the edge of this medal, difficult terrain doesn't cost you extra movement for 1 hour. Once this property has been used, it can't be used again, and the medal becomes nonmagical."
};
MagicItemsList["medal of wit"] = {
	name : "Medal of Wit",
	source : [["CotN", 214]],
	type : "wondrous item",
	rarity : "common",
	notLegalAL : true,
	description : "Once as an action, I can press this medal to my temple to give me advantage on Intelligence checks and Intelligence saving throws for 1 hour. Once this property has been used, it can't be used again, and the medal becomes nonmagical.",
	descriptionFull : "You can press this medal to your temple as an action. Doing so gives you advantage on Intelligence checks and Intelligence saving throws for 1 hour. Once this property has been used, it can't be used again, and the medal becomes nonmagical."
};
MagicItemsList["ring of red fury"] = {
	name : "Ring of Red Fury",
	source : [["CotN", 214]],
	type : "ring",
	rarity : "very rare",
	notLegalAL : true,
	attunement : true,
	description : "This ring allows me to breathe water and gives me a swimming speed equal to my walking speed. As a bonus action once per long rest, I can use it to, for 1 minute, have adv. on Str checks and saves, add my Prof. Bonus to damage rolls of my attacks, ignore difficult terrain, be immune to paralyzed and restrained.",
	descriptionLong : "While wearing this ring with a stripe of ruidium running through it, I am able to breathe water and I have a swimming speed equal to my walking speed. As a bonus action once per long rest, I can use it to, for 1 minute, have adv. on my Strength checks and saves, add my proficiency bonus to the damage rolls of my attacks, have difficult terrain not cost me extra movement, and be immune to being paralyzed and restrained. When I do this bonus action, I have to make a DC 20 Charisma save or gain 1 level of exhaustion and become corrupted. If the Apotheon is killed or redeemed, this ring turns into a Ring of Free Action.",
	descriptionFull : [
		"This ring has a stripe of ruidium running through it. While wearing the ring, you gain the following benefits:",
		"\u2022 You can breathe water.",
		"\u2022 You gain a swimming speed equal to your walking speed.",
		toUni("Ruidium Rage") + ". As a bonus action, you can use the ring to gain the following benefits, which last for 1 minute or until you are incapacitated:",
		"\u2022 You have advantage on Strength checks and Strength saving throws.",
		"\u2022 When you hit with an attack, you can add your proficiency bonus to the damage roll.",
		"\u2022 Difficult terrain doesn't cost you extra movement, and you are immune to the paralyzed and restrained conditions.",
		"You can't use this property of the ring again until you finish a long rest.",
		toUni("Ruidium Corruption") + ". When you use the Ruidium Rage property of the ring, you must make a DC 20 Charisma saving throw. On a failed save, you gain 1 level of exhaustion. If you are not already suffering from ruidium corruption, you become corrupted when you fail this save.",
		toUni("If Ruidium Is Destroyed") + ". If the Apotheon is killed or redeemed, all the ruidium in Exandria is destroyed instantly, and the ring of red fury becomes a Ring of Free Action."
	].join("\n   "),
	speed : { swim : { spd : "walk", enc : "walk" } },
	action : [["bonus action", ""]]
};
MagicItemsList["ruidium armor"] = {
	name : "Ruidium Armor",
	nameTest : "Ruidium",
	source : [["CotN", 215]],
	type : "armor (medium or heavy)",
	rarity : "very rare",
	notLegalAL : true,
	attunement : true,
	description : "This magic armor containing ruidium gives me resistance to psychic damage, a swimming speed equal to my walking speed, and allows me to breathe water. If I roll a 1 on a save while wearing it, I must make a DC 15 Charisma save or gain 1 level of exhaustion and become corrupted by ruidium.",
	descriptionFull : [
		"This magic armor has a dull, rusty color or has veins of ruidium running through it. While you wear this armor, you gain the following benefits:",
		"\u2022 You have resistance to psychic damage.",
		"\u2022 You can breathe water.",
		"\u2022 You gain a swimming speed equal to your walking speed.",
		toUni("Ruidium Corruption") + ". When you roll a 1 on a saving throw while wearing this armor, you must make a DC 15 Charisma saving throw. On a failed save, you gain 1 level of exhaustion. If you are not already suffering from ruidium corruption, you become corrupted when you fail this save.",
		toUni("If Ruidium Is Destroyed") + ". If the Apotheon is killed or redeemed, all the ruidium in Exandria is destroyed instantly, and ruidium armor becomes +1 armor."
	].join("\n   "),
	allowDuplicates : true,
	chooseGear : {
		type : "armor",
		prefixOrSuffix : "suffix",
		excludeCheck : function (inObjKey, inObj) {
			return !(/medium|heavy/i).test(inObj.type) || (/hide/i).test(inObj.name);
		},
		descriptionChange : ["prefix", "armor"]
	},
	dmgres : ["Psychic"],
	speed : { swim : { spd : "walk", enc : "walk" } }
};
MagicItemsList["ruidium shield"] = {
	name : "Ruidium Shield",
	source : [["CotN", 215]],
	type : "shield",
	rarity : "very rare",
	notLegalAL : true,
	attunement : true,
	description : "This magic shield gives me resistance to psychic damage, a swimming speed equal to my walking speed, and allows me to breathe water. As a reaction when I take psychic damage, I can have another creature I can see in 30 ft take the damage instead, but I must make a DC 20 Cha save or gain 1 level of exhaustion.",
	descriptionFull : [
		"Tendrils of ruidium extend across the metal surface of this shield. While this shield is on your person, you gain the following benefits:",
		"\u2022 You have resistance to psychic damage.",
		"\u2022 You can breathe water.",
		"\u2022 You gain a swimming speed equal to your walking speed.",
		toUni("Psychic Reflection") + ". When you take psychic damage while holding the shield, you can use your reaction to choose another creature you can see within 30 feet of you. That creature takes the psychic damage you would have taken.",
		toUni("Ruidium Corruption") + ". When you use the shield's Psychic Reflection property, you must make a DC 20 Charisma saving throw. On a failed save, you gain 1 level of exhaustion. If you are not already suffering from ruidium corruption, you become corrupted when you fail this save.",
		toUni("If Ruidium Is Destroyed") + ". If the Apotheon is killed or redeemed, all the ruidium in Exandria is destroyed instantly, and a ruidium shield becomes a +2 shield."
	].join("\n   "),
	weight : 6,
	shieldAdd : "Ruidium Shield",
	dmgres : ["Psychic"],
	speed : { swim : { spd : "walk", enc : "walk" } },
	action : [["reaction", " (if taking psychic damage)"]]
}
MagicItemsList["ruidium weapon"] = {
	name : "Ruidium Weapon",
	source : [["CotN", 216]],
	type : "weapon (any)",
	rarity : "very rare",
	notLegalAL : true,
	attunement : true,
	description : "This magic weapon deals an extra 2d6 psychic damage to creatures. It also allows me to breath water and gives me a swimming speed equal to my walking speed. If I roll a 1 on an attack roll with it, I must make a DC 20 Cha save or gain 1 level of exhaustion and become corrupted by ruidium.",
	descriptionFull : [
		"This magic weapon has a dull, rusty color or has veins of ruidium running through it. While this weapon is on your person, you gain the following benefits:",
		"\u2022 You can breathe water.",
		"\u2022 You gain a swimming speed equal to your walking speed.",
		toUni("Ruidium Strike") + ". A creature you hit with this weapon takes an extra 2d6 psychic damage.",
		toUni("Ruidium Corruption") + ". When you roll a 1 on an attack roll made with this weapon, you must make a DC 20 Charisma saving throw. On a failed save, you gain 1 level of exhaustion. If you are not already suffering from ruidium corruption, you become corrupted when you fail this save.",
		toUni("If Ruidium Is Destroyed") + ". If the Apotheon is killed or redeemed, all the ruidium in Exandria is destroyed instantly, and a ruidium weapon becomes a +2 weapon."
	].join("\n   "),
	allowDuplicates : true,
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "brackets",
		itemName1stPage : ["suffix", "Ruidium"],
		descriptionChange : ["replace", "weapon"]
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if ( /ruidium/i.test(v.WeaponTextName) ) {
					fields.Description += (fields.Description ? '; ' : '') + '+2d6 psychic damage vs. creatures';
				}
			},
			'If I include the word "Ruidium" in the name of a weapon, it will be treated as the magic item Ruidium Weapon. Whenever it hits a creature, it deals an extra 2d6 psychic damage.'
		]
	},
	speed : { swim : { spd : "walk", enc : "walk" } }
};
MagicItemsList["teleportation tablet"] = {
	name : "Teleportation Tablet",
	source : [["CotN", 216]],
	type : "wondrous item",
	rarity : "rare",
	notLegalAL : true,
	description : "Once as an action, I can break this clay tablet in half to create a 5-ft radius Teleportation Circle to its predetermined destination within 30 ft, lasting until the end of my next turn. I can learn its destination by studying it for 10 minutes and making a DC 21 Arcana check. Once broken, the tablet turns to dust.",
	descriptionFull : "This clay tablet is eight inches long, four inches wide, and half an inch thick. Inscribed on it is the sigil sequence for a permanent teleportation circle. A creature that studies the sequence for 10 minutes can make a DC 21 Intelligence (Arcana) check, learning the circle's destination on a success."+
	"\n   You can use an action to break the tablet in half, turning it to dust. If the tablet is broken while it is on the same plane of existence as the teleportation circle whose sigil sequence was engraved on it, a 10-foot-diameter teleportation circle of glowing blue light appears on the ground in an unoccupied space you choose within 30 feet of you. This teleportation circle has the characteristics of one created using the teleportation circle spell, except that it connects to the teleportation circle whose sigil sequence appears on the tablet."+
	"\n   The teleportation circle created by the tablet disappears at the end of your next turn."
};

// Vestige of Divergence
var EGtW_Vestiges_Replace = function (sDescr) {
	return desc(sDescr).replace(/\bf(oo|ee)t\b/ig, "ft")
		.replace(/you are/ig, "I am").replace(/\byou\b/ig, "I")
		.replace(/(by|giving|grants|of|to|for) I\b/ig, "$1 me")
		.replace(/your/g, "my").replace(/Your/g, "My")
		.replace(/   >>(.*?)<<\. /g, function(a, match) { return "\n" + match.toUpperCase() + "\n   "; });
}
var EGtW_JewelOfThreePrayersFullDescription = [
	"The Jewel of Three Prayers is a Vestige of Divergence. In ancient times, Alyxian the Apotheon bore this amulet as a symbol of his covenant with three Prime Deities: Sehanine the Moon Weaver, Avandra the Change Bringer, and Corellon the Arch Heart.[[ When the jewel is found, only Sehanine's power thrums within its dormant heart. The power of the other two deities waits to be reawakened by a hero \u2014 or heroes \u2014 who can follow in Alyxian's footsteps.]]",
	">>Dormant<<. In this state, the Jewel of Three Prayers is a glittering golden disk attached to a fine golden chain. The chain magically resizes to function as a necklace for the creature that wears it.",
	"In its Dormant State, the jewel has the following properties:",
	"\u2022 You gain a +1 bonus to AC while wearing the jewel.",
	"\u2022 While wearing or holding the jewel, you can use an action to cause it to shed bright light in a 15-foot radius and dim light for an additional 15 feet. The light lasts until you extinguish it (no action required).",
	"\u2022 The jewel has 3 charges and regains all its expended charges daily at dawn. While holding the jewel, you can expend 1 charge from it to cast the invisibility spell.",
	">>Awakened<<. In this state, the jewel has received the blessing of Avandra the Change Bringer. Three delicate spires unfurl from the jewel's center, like the buds of flowers opening in the spring. Three lapis lazuli stones rest like dewdrops on these spires.",
	"The following benefits of the jewel improve:",
	"\u2022 The bonus that the jewel confers to your AC increases to +2.",
	"\u2022 Its number of charges increases to 5.",
	"The jewel gains the following additional properties, which you can use while wearing or holding it:",
	"\u2022 You can expend 1 of the jewel's charges (no action required) to end one of the following conditions on yourself: grappled, paralyzed, or restrained.",
	"\u2022 When another creature you can see within 60 feet of you fails a saving throw, you can expend 1 of the jewel's charges as a reaction to enable that creature to reroll the saving throw, potentially turning a failure into a success. The creature must use the new roll.",
	">>Exalted<<. In this state, the jewel has received the blessing of Corellon the Arch Heart. A gleaming emerald surrounded by a halo of gold appears on the jewel.",
	"The following benefits of the jewel improve:",
	"\u2022 The bonus that the jewel confers to your AC increases to +3.",
	"\u2022 Its number of charges increases to 7.",
	"The jewel gains the following additional properties, which you can use while wearing or holding it:",
	"\u2022 You gain the ability to breathe water, and you gain a swimming speed equal to your walking speed.",
	"\u2022 Each of your allies within 30 feet of you gains the ability to breathe water and gains a swimming speed equal to its walking speed.",
	"\u2022 As a bonus action, you can expend 1 of the jewel's charges to target yourself or one willing creature you can see within 15 feet of yourself. The target teleports to an unoccupied space of your choice within 15 feet of yourself, along with any equipment the target is wearing or carrying. The target appears in a flash of golden radiance, and each creature of your choice within 5 feet of the target's new location must make a DC 18 Constitution saving throw. On a failed save, the creature takes 4d10 radiant damage and is blinded until the start of your next turn. On a successful save, the creature takes half as much damage and isn't blinded."
];
MagicItemsList["jewel of three prayers"] = {
	name : "Jewel of Three Prayers",
	source : [["CotN", 213]],
	type : "wondrous item",
	rarity : "legendary",
	notLegalAL : true,
	attunement : true,
	description : "The golden chain of this intricate jewel magically resizes to function as a necklace for the creature that wears it. In ancient times, Alyxian the Apotheon bore this amulet as a symbol of his covenant with three Prime Deities: Sehanine the Moon Weaver, Avandra the Change Bringer, and Corellon the Arch Heart.",
	descriptionFull : EGtW_JewelOfThreePrayersFullDescription.join("\n   ").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }).replace(/\[\[|\]\]/g, ''),
	toNotesPage : [{
		name : "Features",
		note : EGtW_Vestiges_Replace(EGtW_JewelOfThreePrayersFullDescription).replace(/\[\[.*?\]\]/, '')
	}],
	choices : ["Dormant", "Awakened", "Exalted"],
	choicesNotInMenu : true,
	spellcastingAbility : "class",
	spellFirstColTitle : "Ch",
	spellcastingBonus : {
		name : "1 charge",
		spells : ["invisibility"],
		selection : ["invisibility"],
		firstCol : "1"
	},
	action : [["action", " (shed light)"]],
	"dormant" : {
		name : "Jewel of Three Prayers [dormant]",
		description : "This piece of jewelry grants me +1 AC and has 3 charges, regaining all at dawn. As an action, I can use it to shed bright light in a 15-ft radius and dim for another 15 ft (extinguishing requires no action). I can expend 1 charge to cast Invisibility.",
		usages : 3,
		recovery : "dawn",
		extraAC : [{name : "Jewel of Three Prayers", mod : 1, magic : true, text : "I gain a +1 bonus to AC while attuned."}]
	},
	"awakened" : {
		name : "Jewel of Three Prayers [awakened]",
		description : "This grants me +2 AC. It has 5 charges, regaining all at dawn. As an action, I can have it shed 15-ft radius bright light and dim for another 15 ft. I can use 1 charge to cast Invisibility or stop being grappled, paralyzed, or restrained. As a reaction when I see a creature in 60 ft fail a save, I can use 1 charge to have it reroll.",
		usages : 5,
		recovery : "dawn",
		extraAC : [{name : "Jewel of Three Prayers", mod : 2, magic : true, text : "I gain a +2 bonus to AC while attuned."}],
		action : [["reaction", "Jewel of Three Prayers (reroll save)"]]
	},
	"exalted" : {
		name : "Jewel of Three Prayers [exalted]",
		description : "This grants me +3 AC. It has 7 charges, regaining all at dawn. As an action, I can have it shed 15-ft radius bright light and dim for another 15 ft. I can use 1 charge to cast Invisibility or stop being grappled, paralyzed, or restrained. As a reaction when I see failed save in 60 ft, I can use 1 charge for a reroll. See notes.",
		usages : 7,
		recovery : "dawn",
		extraAC : [{name : "Jewel of Three Prayers", mod : 3, magic : true, text : "I gain a +3 bonus to AC while attuned."}],
		speed : { swim : { spd : "walk", enc : "walk" } },
		action : [["reaction", "Jewel of Three Prayers (reroll save)"], ["bonus action", "Jewel of Three Prayers (teleport)"]]
	}
}
