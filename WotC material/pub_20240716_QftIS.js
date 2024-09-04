var iFileName = "pub_20240716_QftIS.js";
RequiredSheetVersion("13.1.14");
// This file adds the futuristic and magic item from the Quests from the Infinite Staircase adventure anthology to MPMB's Character Record Sheet

// Define the source
SourceList["QftIS"] = {
	name : "Quests from the Infinite Staircase",
	abbreviation : "QftIS",
	group : "Adventure Books",
	url : "https://dndstore.wizards.com/us/en/product/928653/quests-from-the-infinite-staircase-digital-plus-physical-bundle",
	date : "2024/07/16"
};

try {
	var QftIS = { toDescrFull : BoMT.toDescrFull, to1stPerson : BoMT.to1stPerson };
} catch (err) {
// [dupl_start] redefine the variables, not needed in minified version
	var QftIS = {
		toDescrFull : function (sDescr) {
			if (typeof sDescr !== "string") sDescr = sDescr.join("\n   ");
			return sDescr.replace(/\[\[.*?\]\]/g, "$1")
				.replace(/>>(.*?)<</g, function(a, match) { return toUni(match); });
		},
		to1stPerson : function (sDescr, joinStr) {
			if (typeof sDescr === "string") sDescr = [sDescr];
			return desc(sDescr, joinStr).replace(/\bf(oo|ee)t\b/ig, "ft")
				.replace(/you aren't/ig, "I'm not").replace(/you were/ig, "I was")
				.replace(/you are|you're/ig, "I am").replace(/yours\b/ig, "mine")
				.replace(/\byou\b/ig, "I")
				.replace(/(aid|freeing|around|resurrected|beneath|between|\w\ws|by|of|to|for|on) I\b/ig, "$1 me")
				.replace(/(toward) I\b/ig, "$1s me")
				.replace(/(cards|items) me\b/ig, "$1 I")
				.replace(/\bI (to|a|an)\b/ig, "me $1")
				.replace(/yours\b/g, "mine").replace(/Yours/g, "Mine")
				.replace(/your/g, "my").replace(/Your/g, "My")
				.replace(/\[\[.*?\]\]/g, "")
				.replace(/(\n *|\u2022 |\u25C6 )>>(.*?)( \(.*?\))?<<\. /g, function(a, p1, p2, p3, p4) {
					if (/\n   /.test(p1)) {
						return "\n\n   " + p2.toUpperCase() + p3.toLowerCase() + "\n   ";
					} else {
						return p1 + p2 + p3 + ": ";
					}
				});
		}
	} // dupl_end
}
QftIS.replaceEnergyCellPlain = ">>Replacing the Energy Cell<<. While the >>THING<< has charges remaining, its energy cell can't be removed. Once the >>THING<< has 0 charges, you can replace the energy cell with a new cell by using an action or a bonus action."
QftIS.replaceEnergyCell = "\n   " + QftIS.replaceEnergyCellPlain.replace(">>Replacing the Energy Cell<<", toUni("Replacing the Energy Cell"));

// Futuristic items added as magic items, but set to be excluded by default
MagicItemsList["antigravity belt"] = {
	name : "Antigravity Belt",
	source : [["QftIS", 192]],
	type : "futuristic item", // not really magic items, so these use their own category 
	rarity : "priceless", // as per QftIS page 192
	defaultExcluded : true,
	description : "This belt has 10 charges per energy cell, which can be replaced as a (bonus) action if empty. As a bonus action, I can use charges to activate it for 1 min per charge, causing me to float in place. As a bonus action and when activating it, I can move 20 ft vertically. I can push off to move horizontally at half my speed.",
	descriptionLong : "Metal tubes ring the lower edge of this wide belt powered by an energy cell stored in a metal case near the buckle. It has 10 charges per energy cell, which can be replaced as a (bonus) action when empty. As a bonus action, I can expend charges to activate the belt for 1 min per charge. While active, I float in place. As a bonus action and as part of activating it, I can ascend or descend up to 20 ft vertically. I can move myself horizontally by being pushed or towed or by scooting myself along a surface at half my walking speed. I can deactivate it as a bonus action; If I'm still levitating when it deactivates, I fall.",
	descriptionFull : "Metal tubes ring the lower edge of this wide belt. It is powered by an energy cell stored in a metal case near the buckle. Placing a full energy cell in the belt gives the belt 10 charges."+
	"\n   " + toUni("Activating the Belt") + ". As a bonus action, you can expend any number of the belt's charges to activate it; the belt remains active for 1 minute per charge expended. You can use a bonus action to deactivate the belt early, but doing so doesn't recover any expended charges."+
	"\n   When you activate the belt, and as a bonus action while it remains active, you can rise or descend vertically up to 20 feet. You remain floating in place while the property is active, and you can move yourself horizontally by being pushed or towed or by scooting yourself along a surface, such as a wall or ceiling, at half your walking speed. If you are still levitating when the belt deactivates, you fall."+
	QftIS.replaceEnergyCell.replace(/>>THING<</g, "belt"),
	usages : 10,
	recovery : "E-Cell",
	action : [
		["bonus action", " (activate/stop)"],
		["bonus action", "Replace Energy Cell"]
	]
};
MagicItemsList["robot controller"] = {
	name : "Robot Controller",
	source : [["QftIS", 192]],
	type : "futuristic item",
	rarity : "priceless",
	defaultExcluded : true,
	description : "This handheld device has 3 charges per energy cell, which can be replaced as a (bonus) action if empty. As an action, I can use 1 charge to Control one construct within 60 ft or Disrupt all within 30 ft to become incapacitated. They can make a DC 15 Wisdom save to resist and repeat the save. See Notes page.",
	descriptionFull : "This small handheld device features a glass pane with a glowing display that responds to your touch."+
	"\n   The controller is powered by an energy cell stored in the device. Placing a full energy cell in the device gives the device 3 charges."+
	"\n   As an action while holding this device, you can expend 1 of its charges to cause one of the following effects:"+
	"\n \u2022 " + toUni("Control") + ". One Construct of your choice within 60 feet of you must succeed on a DC 15 Wisdom saving throw or have the charmed condition for 1 minute. While charmed in this way, the Construct obeys your verbal commands, and you and the Construct can communicate remotely with each other through the device. Whenever the charmed Construct takes damage, it can repeat the saving throw, ending the effect on itself on a success."+
	"\n \u2022 " + toUni("Disrupt") + ". Constructs of your choice within 30 feet of you must succeed on a DC 15 Wisdom saving throw or have the incapacitated condition for 1 minute. An incapacitated Construct can repeat the saving throw at the end of its turns, ending the effect on itself on a success.",
	usages : 3,
	recovery : "E-Cell",
	action : [["action", ""], ["bonus action", "Replace Energy Cell"]],
	toNotesPage : [{
		name : "Features",
		note : [
			"This small handheld device features a glass pane with a glowing display that responds to my touch. It is powered by an energy cell, which gives it 3 charges. As an action or a bonus action, I can replace this energy cell with a new one, but only once it is empty.",
			"As an action, I can expend 1 charge to cause one of the following effects:"+
			" \n \u2022 Control: One construct of my choice within 60 ft of me must succeed on a DC 15 Wisdom saving throw or have the charmed condition for 1 minute. While charmed in this way, the Construct obeys my verbal commands, and we can communicate remotely with each other through the device. Whenever the charmed construct takes damage, it can repeat the saving throw, ending the effect on itself on a success."+
			" \n \u2022 Disrupt: All constructs of my choice within 30 ft of me must succeed on a DC 15 Wisdom saving throw or have the incapacitated condition for 1 minute. An incapacitated construct can repeat the saving throw at the end of its turns, ending the effect on itself on a success."
		]
	}]
};
// Futuristic Grenades
WeaponsList["grenade, concussion"] = {
	regExpSearch : /^(?=.*grenade)(?=.*concussion).*$/i,
	name : "Concussion Grenade",
	nameAlt : ["Grenade, Concussion"],
	source : [["D", 268]],
	list : "explosive",
	ability : 0,
	type : "Explosive",
	damage : [6, 6, "force"],
	range : "60 ft",
	weight : 1,
	description : "All within 20-ft radius, Dex save halves",
	abilitytodamage : false,
	modifiers : [7, ""],
	dc : true,
	ammo : "grenade",
	isNotWeapon : true,
	isAlwaysProf : false,
	tooltip : "As an action, a character can throw a grenade at a point up to 60 feet away. With a grenade launcher, the character can propel the grenade up to 120 feet away."+
	"\n   A concussion grenade explodes in a concussive blast that fills a 20-foot-radius sphere. Each creature in that area must make a DC 15 Dexterity saving throw, taking 6d6 force damage on a failed save or half as much damage on a successful one.",
	defaultExcluded : true
};
if (MagicItemsList["grenade"]) {
	AddFeatureChoice(MagicItemsList["grenade"], false, "Concussion Grenade", {
		name : "Concussion Grenade",
		sortname : "Grenade, Concussion",
		source : [["QftIS", 192]],
		type : "explosive, futuristic",
		rarity : "priceless",
		defaultExcluded : true,
		description : "As an action, I can throw a grenade at a point up to 60 ft away or double that with a grenade launcher. All creatures within 20 ft of an exploding concussion grenade take 6d6 force damage, but can make a DC 15 Dexterity save to halve that damage.",
		descriptionFull : "As an action, a character can throw a grenade at a point up to 60 feet away. With a grenade launcher, the character can propel the grenade up to 120 feet away."+
		"\n   A concussion grenade explodes in a concussive blast that fills a 20-foot-radius sphere. Each creature in that area must make a DC 15 Dexterity saving throw, taking 6d6 force damage on a failed save or half as much damage on a successful one.",
		weaponsAdd : { select : ["Concussion Grenade"] },
		eval : function() { // make sure the weapon and ammo are not excluded
			if (CurrentSources.weapExcl.eject("grenade, concussion") !== -1) SetWeaponsdropdown();
			if (CurrentSources.ammoExcl.eject("grenade") !== -1) SetAmmosdropdown();
		}
	}, false, true);
	AddFeatureChoice(MagicItemsList["grenade"], false, "Sleep Grenade", {
		name : "Sleep Grenade",
		sortname : "Grenade, Sleep",
		source : [["QftIS", 192]],
		type : "explosive, futuristic",
		rarity : "priceless",
		defaultExcluded : true,
		description : "As an action, I can throw a grenade at a point up to 60 ft away or double that with a grenade launcher. A soporific mist releases from a sleep grenade, then dissipates. All within 20 ft of it must make a DC 15 Con save or fall unconscious for 1 hour, until taking damage, or until another using an action to shake awake.",
		descriptionFull : "As an action, a character can throw a grenade at a point up to 60 feet away. With a grenade launcher, the character can propel the grenade up to 120 feet away."+
		"\n   A sleep grenade releases a cloud of soporific mist that fills a 20-foot-radius sphere, then dissipates. Each creature in that area must succeed on a DC 15 Constitution saving throw or have the unconscious condition for 1 hour. The condition ends on a creature early if the creature takes damage or if another creature uses an action to shake it awake."
	}, false, true);
}
// Futuristic Weapons
MagicItemsList["needler pistol"] = {
	name : "Needler pistol",
	source : [["QftIS", 192]],
	type : "futuristic item",
	rarity : "priceless",
	defaultExcluded : true,
	description : "This pistol has 10 charges per energy cell, which can be replaced as a (bonus) action once empty. As an action, I can use 1 charge to fire a burst needlelike darts from it in a 15-ft cone, dealing 8d4 piercing damage to all creatures in the area. Creatures can make a DC 15 Dexterity saving throw to half the damage.",
	descriptionFull : "This strange pistol resembles a flask with a honeycomb of tubes sticking out its front. The weapon is powered by an energy cell stored at the base of the flask. Placing a full energy cell in the pistol gives the pistol 10 charges."+
	"\n   As an action while holding this pistol, you can expend 1 of its charges to fire a burst of glowing, needlelike darts from the pistol in a 15-foot cone. Each creature in that area must make a DC 15 Dexterity saving throw, taking 8d4 piercing damage on a failed save or half as much damage on a successful one."+
	QftIS.replaceEnergyCell.replace(/>>THING<</g, "pistol"),
	usages : 10,
	recovery : "E-Cell",
	weight : 2, // Guess by MPMB
	action : [["action", ""], ["bonus action", "Replace Energy Cell"]],
	weaponOptions : [{
		regExpSearch : /^(?=.*needler)(?=.*pistol).*$/i,
		name : "Needler Pistol",
		nameAlt : ["Pistol, Needler"],
		source : [["QftIS", 192]],
		ability : 0,
		type : "Firearm",
		damage : [8, 4, "piercing"],
		range : "15-ft Cone",
		weight : 2, // Guess by MPMB
		description : "Dex save for half damage; Ammunition, reload (10 shots)",
		abilitytodamage : false,
		modifiers : [7, ""],
		dc : true,
		ammo : "energy cell",
		isAlwaysProf : false,
		tooltip : "As an action while holding this pistol, you can expend 1 of its charges to fire a burst of glowing, needlelike darts from the pistol in a 15-ft cone. Each creature in that area must make a DC 15 Dexterity saving throw, taking 8d4 piercing damage on a failed save or half as much damage on a successful one." + QftIS.replaceEnergyCell.replace(/>>THING<</g, "pistol"),
		selectNow : true
	}]
};
MagicItemsList["paralysis pistol"] = {
	name : "Paralysis Pistol",
	source : [["QftIS", 192]],
	type : "technological device",
	rarity : "priceless",
	defaultExcluded : true,
	description : "This pistol has 6 charges per energy cell, which can be replaced as a (bonus) action once empty. As an action, I can use 1 charge to fire the pistol at a creature I can see within 60 ft, which must then make a DC 15 Constitution save or be paralyzed for 1 min. The target can repeat the save at the end of each of its turns.",
	descriptionFull : "This curious-looking pistol is shaped like a large, glass bulb with a handle on the bottom and brass prongs protruding from its front. The weapon is powered by an energy cell stored in its grip. Placing a full energy cell in the pistol gives the pistol 6 charges."+
	"\n   As an action while holding this pistol, you can expend 1 of its charges to fire a ray of crackling energy at a creature you can see within 60 feet of yourself. The target must succeed on a DC 15 Constitution saving throw or have the paralyzed condition for 1 minute. At the end of each of the target's turns, it can repeat the saving throw, ending the effect on itself on a success."+
	QftIS.replaceEnergyCell.replace(/>>THING<</g, "pistol"),
	usages : 6,
	recovery : "E-Cell",
	weight : 2, // Guess by MPMB
	action : [["action", ""], ["bonus action", "Replace Energy Cell"]],
	weaponOptions : [{
		regExpSearch : /^(?=.*paralysis)(?=.*pistol).*$/i,
		name : "Paralysis pistol",
		nameAlt : ["Pistol, Paralysis"],
		source : [["QftIS", 192]],
		ability : 0,
		type : "Firearm",
		damage : ["Con save", "", "Paralyzed"],
		range : "60 ft",
		weight : 2, // Guess by MPMB
		description : "Paralyzed for 1 min; Repeat save at end of turn; Ammunition, reload (6 shots)",
		abilitytodamage : false,
		modifiers : [7, ""],
		dc : true,
		ammo : "energy cell",
		isAlwaysProf : false,
		tooltip : "As an action while holding this pistol, you can expend 1 of its charges to fire a ray of crackling energy at a creature you can see within 60 ft of yourself. The target must succeed on a DC 15 Constitution saving throw or have the paralyzed condition for 1 minute. At the end of each of the target's turns, it can repeat the saving throw, ending the effect on itself on a success." + QftIS.replaceEnergyCell.replace(/>>THING<</g, "pistol"),
		selectNow : true
	}]
};
// Futuristic Armour
QftIS.poweredArmor = [
	"This suit of technologically advanced plate armor includes an under-suit that can fully seal, a helmet with a full face mask and crystal lenses in the eyeholes, and a set of gauntlets. The armor is powered by an energy cell stored in a compartment on the thigh plate.",
	"Placing a full energy cell in the armor gives the armor 24 charges. A suit of powered armor functions as a suit of normal plate armor, even when it has 0 charges remaining.",
	">>Activating the Armor<<. As an action, you can expend any number of the armor's charges to activate it; the armor remains active for 1 hour per charge expended. You can use a bonus action to deactivate the armor early, but doing so doesn't recover any expended charges.",
	"While the armor is active, you gain the following benefits:"+
	"\n \u2022 >>Augmented Physicality<<. You have advantage on Strength checks, and your carrying capacity is doubled."+
	"\n \u2022 >>Environmental Adaptation<<. The armor seals airtight and provides its own atmosphere. You can breathe normally in any environment and withstand extreme temperatures, and you're unaffected by harmful gases, as well as contact and inhaled poisons."+
	"\n \u2022 >>Force Field<<. When you would take damage, you can use your reaction to expend 1 of the armor's charges to deploy a defensive force field. Roll 3d10 and reduce the damage taken by the total rolled."+
	"\n \u2022 >>Propulsion<<. As a bonus action, you can expend 1 of the armor's charges to gain a flying speed equal to your walking speed for 1 minute. If you're airborne when this duration ends, you fall.",
	QftIS.replaceEnergyCellPlain.replace(/>>THING<</g, "armor")
]
MagicItemsList["powered armor"] = {
	name : "Powered Armor",
	source : [["QftIS", 192]],
	type : "technological device",
	rarity : "priceless",
	defaultExcluded : true,
	description : "This plate armor has 24 charges per energy cell, which can be replaced as a (bonus) action if empty. As an action, I can expend charges to active it for 1 hour per charge. While active, I gain adv. on Str, double carrying capacity, have my own atmosphere to breath in, and can use Force Field and Propulsion, see Notes.",
	descriptionFull : QftIS.toDescrFull(QftIS.poweredArmor),
	usages : 24,
	recovery : "E-Cell",
	weight : 65,
	action : [
		["action", "Activate Powered Armor (1 h/charge)"],
		["reaction", "Powered Armor: Force Field (1 charge)"],
		["bonus action", "Powered Armor: Propulsion (1 charge)"],
		["bonus action", "Replace Energy Cell"]
	],
	armorOptions : [{
		regExpSearch : /^(?=.*powered)(?=.*armou?r).*$/i,
		name : "Powered Armor",
		source : [["QftIS", 192]],
		type : "heavy",
		ac : 18,
		stealthdis : true,
		weight : 65,
		strReq : 15
	}],
	toNotesPage : [{
		name : "Features",
		note : QftIS.to1stPerson(QftIS.poweredArmor)
	}]
};

// Magic Items
QftIS.heretic = [
	"The blasphemous weapon Heretic was created by a cult to steal power from good-aligned gods. The blade hungers to strike down servants of the Upper Planes and weaken the forces of good.",
	"You gain a +3 bonus to attack and damage rolls made with this magic weapon. Heretic has 6 charges for the following properties; the sword regains 1d4 + 1 charges daily at dawn:"+
	"\n \u2022 >>Destroy Devotion<<. Once per turn when you hit a creature with this weapon, you can expend 1 of its charges to attempt to render the target powerless. The target must succeed on a DC 17 Constitution saving throw or have the paralyzed condition until the start of your next turn. Celestials have disadvantage on the save."+
	"\n \u2022 >>Faith Hunter<<. While holding the sword, you can use an action to expend 1 or more of its charges to cast one of the following spells from it: Detect Evil and Good (1 charge), Fly (2 charges), or True Seeing (3 charges).",
	">>Sentience<<. Heretic is a sentient, chaotic evil weapon with an Intelligence of 17, a Wisdom of 17, and a Charisma of 15. It has hearing and darkvision out to a range of 120 feet.",
	"The weapon can speak, read, and understand Common and Giant, and it can communicate with its wielder telepathically. Its voice is soft and deep but rises in a wild furor when it's aware Celestials or worshipers of good-aligned deities are present. While you are attuned to it, Heretic also understands every language you know.",
	">>Personality<<. Heretic craves the destruction of good-aligned gods and their supporters. The blade is condescending and snobby, especially in the company of priests and other pious folk, at whom it often directs sneering comments. When Heretic identifies its quarry, it erupts in a frenzied need for violence."
];
MagicItemsList["heretic"] = {
	name : "Heretic",
	source : [["QftIS", 192]],
	type : "weapon (longsword)",
	rarity : "legendary",
	description : "This sentient longsword adds +3 to hit and damage and has 6 charges, regaining 1d4+1 at dawn. Once per turn on a hit with it, I can use 1 charge to force a DC 17 Con save or paralyze until my next turn. As an action, I can cast spells from it: Detect Evil and Good (1 charge), Fly (2 charges), or True Seeing (3 charges).",
	descriptionFull : QftIS.toDescrFull(QftIS.heretic),
	attunement : true,
	prerequisite : "Requires attunement by a non-good creature",
	prereqeval : function(v) { return !/good/i.test(What("Alignment")); },
	weight : 3,
	weaponOptions : [{
		baseWeapon : "longsword",
		regExpSearch : /heretic/i,
		name : "Heretic",
		source : [["QftIS", 192]],
		description : "Versatile (1d10); On hit, 1 charge to paralyze (DC 17 Con save)",
		modifiers : [3, 3],
		selectNow : true
	}],
	toNotesPage : [{
		name : "Features",
		note : QftIS.to1stPerson(QftIS.heretic) + "\n\n" + sentientItemConflictTxt
	}],
	usages : 6,
	recovery : "dawn",
	additional : "regains 1d4+1",
	spellFirstColTitle : "Ch",
	spellcastingBonus : [{
		name : "1 charge",
		spells : ["detect evil and good"],
		selection : ["detect evil and good"],
		firstCol : 1
	}, {
		name : "2 charges",
		spells : ["fly"],
		selection : ["fly"],
		firstCol : 2
	}, {
		name : "3 charges",
		spells : ["true seeing"],
		selection : ["true seeing"],
		firstCol : 2
	}]
}
QftIS.staffOfRuling = [
	"An ornate carving of a serpent adorned with a coursing river spirals down the length of this redand-gold staff. While you're holding it, you can use an action to produce one of the following effects. Once the staff has produced an effect, it can't produce that effect again until the next dawn.",
	">>Orb of Lightning<<. You create a Small orb of lightning in an unoccupied space you can see within 60 feet of yourself. You concentrate on this orb as if concentrating on a spell. As a bonus action, you can move the orb up to 20 feet in any direction.",
	"When your concentration ends, or when a creature enters the orb's space or starts its turn there, the orb detonates in a 20-foot-radius sphere. Each creature in that area must make a DC 15 Dexterity saving throw, taking lightning damage equal to the total accumulated damage on a failed save, or half as much damage on a successful one; the orb's base damage is 6d6, and if at the end of your turn the orb hasn't detonated, its damage increases by 2d6, to a maximum of 10d6.",
	">>Staff to Snake<<. You throw the staff to an unoccupied space within 10 feet of you, and the staff becomes a giant poisonous snake. The snake is under your control and shares your initiative count, but it takes its turn immediately after yours.",
	"On your turn, you can mentally command the snake if it is within 60 feet of you and you don't have the incapacitated condition. You decide what action the snake takes and where it moves during its turn, or you can issue it a general command, such as to attack your enemies or guard a location.",
	"If you use a bonus action to speak the command word again, or if the snake is reduced to 0 hit points, the snake reverts to staff form in its current space.",
	">>Thunderclap<<. You point the staff skyward, producing a fearsome thunderclap. Each creature of your choice in a 30-foot-radius sphere centered on you must succeed on a DC 15 Constitution saving throw or have the deafened and frightened conditions until the end of your next turn."
];
MagicItemsList["staff of ruling"] = {
	name : "Staff of Ruling",
	source : [["QftIS", 192]],
	type : "staff",
	rarity : "rare",
	description : "As an action, I can use this redand-gold staff with an ornate serpent carving to produce one of several effects: Orb of Lightning, Staff to Snake, or Thunderclap. Once the staff has produced an effect, it can't produce that effect again until the next dawn. See Notes page for the effect descriptions.",
	descriptionFull : QftIS.toDescrFull(QftIS.staffOfRuling),
	attunement : true,
	weight : 4,
	toNotesPage : [{
		name : "Features",
		note : QftIS.to1stPerson(QftIS.staffOfRuling)
	}],
	action : [["action", ""]],
	extraLimitedFeatures : [{
		name : "Staff of Ruling: Orb of Lightning",
		usages : 1,
		recovery : "dawn"
	}, {
		name : "Staff of Ruling: Staff to Snake",
		usages : 1,
		recovery : "dawn"
	}, {
		name : "Staff of Ruling: Thunderclap",
		usages : 1,
		recovery : "dawn"
	}]
}