var iFileName = "pub_20200915_RotF.js";
RequiredSheetVersion("13.0.8");
// This file adds the content from the Icewind Dale: Rime of the Frostmaiden adventure to MPMB's Character Record Sheet

// Define the source
SourceList["RotF"] = {
	name : "Icewind Dale: Rime of the Frostmaiden [creatures, items, spells]",
	abbreviation : "RotF",
	group : "Adventure Books",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/icewind-dale-rime-frostmaiden",
	date : "2020/09/15"
};

// Winter Survival Gear (contains contributions by Nod_Hero on Discord)
GearList["cold weather"] = {
    infoname : "Cold Weather [10 gp]",
    name : "Cold weather clothes",
    source : [["RotF", 20]],
    amount : "",
    weight : 5,
    type : "clothes"
};
GearList["crampons (2)"] = {
    infoname : "Crampons (2) [2 gp]",
    name : "Crampons",
    source : [["RotF", 20]],
    amount : 2,
    weight : 0.125
};    
GearList["snowshoes"] = {
    infoname : "Snowshoes [2 gp]",
    name : "Snowshoes",
    source : [["RotF", 20]],
    amount : "",
    weight : 4
};

// Creatures - new beasts (each contain contributions by BraabHimself)
CreatureList["awakened white moose"] = {
	name : "Awakened White Moose",
	source : [["RotF", 82]],
	size : 2,
	type : "Beast",
	alignment : "Neutral Evil",
	ac : 11,
	hp : 68,
	hd : [8, 10],
	speed : "40 ft",
	scores : [19, 11, 16, 10, 12, 6],
	senses : "",
	passivePerception : 11,
	languages : "Druidic",
	challengeRating : "3",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
		name : "Antlers",
		ability : 1,
		damage : [2, 8, "piercing"],
		range : "Melee (5 ft)",
		description : "If used after moving 20 ft straight in the same round, see Charge trait"
	}, {
		name : "Hooves",
		ability : 1,
		damage : [2, 4, "bludgeoning"],
		range : "Melee (5 ft)",
		description : "One antlers and one hooves attack as an Attack action"
	}],
	traits : [{
		name : "Charge",
		description : "If the moose moves at least 20 ft straight toward a target and then hits it with an antlers attack on the same turn, the target takes an extra 9 (2d8) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone."
	}, {
		name : "Sure-Footed",
		description : "The moose has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
	}],
	actions : [{
		name : "Multiattack",
		description : "The moose makes two attacks: one with its antlers and one with its hooves."
	}],
	wildshapeString : "\u25C6 Multiattack: Makes two attacks: one with its antlers and one with its hooves."+
	"\n\u25C6 Charge: After moving 20 ft straight toward a target and then hitting it with an antlers attack on the same turn, the target takes an extra 2d8 bludgeoning damage and must make a DC 14 Str save or be knocked prone."+
	"\n\u25C6 Sure-Footed: Advantage on Str and Dex saves against effects that would knock it prone."
};
CreatureList["fox"] = {
	name : "Fox",
	companion : "familiar_not_al",
	source : [["RotF", 288]],
	size : 5,
	type : "Beast",
	alignment : "Unaligned",
	ac : 13,
	hp : 2,
	hd : [1, 4],
	speed : "30 ft, burrow 5 ft",
	scores : [2, 16, 11, 3, 12, 6],
	skills : {
		"perception" : 3,
		"stealth" : 5
	},
	senses : "Darkvision 60 ft; Adv. on Wis (Perception) checks using hearing",
	passivePerception : 13,
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 2,
		damage : [1, "", "piercing"],
		range : "Melee (5 ft)",
		description : "",
		abilitytodamage : false
	}],
	traits : [{
		name : "Keen Hearing",
		description : "The fox has advantage on Wisdom (Perception) checks that rely on hearing."
	}]
};
CreatureList["hare"] = {
	name : "Hare",
	source : [["RotF", 294]],
	companion : "familiar_not_al",
	size : 5,
	type : "Beast",
	alignment : "Unaligned",
	ac : 13,
	hp : 1,
	hd : [1, 4],
	speed : "20 ft, burrow 5 ft",
	scores : [1, 17, 9, 2, 11, 4],
	skills : {
		"perception" : 2,
		"stealth" : 5
	},
	senses : "",
	passivePerception : 12,
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 0,
	attacks : [],
	traits : [{
		name : "Escape",
		description : "The hare can take the Dash, Disengage, or Hide action as a bonus action on each of its turns."
	}]
};
CreatureList["knucklehead trout"] = {
	name : "Knucklehead Trout",
	source : [["RotF", 295]],
	size : 4,
	type : "Beast",
	alignment : "Unaligned",
	ac : 12,
	hp : 7,
	hd : [2, 6],
	speed : "0 ft, swim 30 ft",
	scores : [14, 14, 11, 1, 6, 1],
	senses : "Darkvision 60 ft",
	passivePerception : 8,
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 1,
		damage : [1, 4, "piercing"],
		range : "Melee (5 ft)",
		description : ""
	}, {
		name : "Tail",
		ability : 1,
		damage : [1, 4, "bludgeoning"],
		range : "Melee (5 ft)",
		description : ""
	}],
	traits : [{
		name : "Water Breathing",
		description : "The trout can breathe only underwater."
	}]
};
CreatureList["mountain goat"] = {
	name : "Mountain Goat",
	source : [["RotF", 304]],
	size : 3,
	type : "Beast",
	alignment : "Unaligned",
	ac : 11,
	hp : 13,
	hd : [2, 8],
	speed : "40 ft, climb 30 ft",
	scores : [14, 12, 14, 2, 10, 5],
	senses : "",
	passivePerception : 10,
	challengeRating : "1/8",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Ram",
		ability : 1,
		damage : [1, 6, "bludgeoning"],
		range : "Melee (5 ft)",
		description : "If used after moving 20 ft straight in the same round, see Charge trait"
	}],
	traits : [{
		name : "Charge",
		description : "If the goat moves at least 20 ft straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 3 (1d6) bludgeoning damage. If the target is a creature, it must succeed on a DC 12 Strength saving throw or be knocked prone."
	}, {
		name : "Sure-Footed",
		description : "The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
	}],
	wildshapeString : "\u25C6 Charge: After moving 20 ft straight toward a target and then hitting it with a ram attack on the same turn, the target takes an extra 1d6 bludgeoning damage and must make a DC 12 Strength save or be knocked prone."+
	"\n\u25C6 Sure-Footed: Advantage on Strength and Dexterity saves against effects that would knock it prone."
};
CreatureList["seal"] = {
	name : "Seal",
	source : [["RotF", 308]],
	size : 3,
	type : "Beast",
	alignment : "Unaligned",
	ac : 11,
	hp : 9,
	hd : [2, 8],
	speed : "20 ft, swim 40 ft",
	scores : [10, 12, 11, 3, 12, 5],
	senses : "Darkvision 60 ft; Adv. on Wis (Perception) checks using smell",
	passivePerception : 11,
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 1,
		damage : [1, "", "piercing"],
		range : "Melee (5 ft)",
		description : "",
		abilitytodamage : false
	}],
	traits : [{
		name : "Hold Breath",
		description : "The seal can hold its breath for 15 minutes."
	}, {
		name : "Keen Smell",
		description : "The seal has advantage on Wisdom (Perception) checks that rely on smell."
	}]
};
CreatureList["sperm whale"] = {
	name : "Sperm Whale",
	source : [["RotF", 309]],
	size : 0,
	type : "Beast",
	alignment : "Unaligned",
	ac : 13,
	hp : 189,
	hd : [14, 20],
	speed : "0 ft, swim 60 ft",
	scores : [26, 8, 17, 3, 12, 5],
	senses : "Blindsight 120 ft; Adv. on Wis (Perception) checks using hearing",
	passivePerception : 11,
	challengeRating : "8",
	proficiencyBonus : 3,
	attacksAction : 2,
	attacks : [{
		name : "Bite",
		ability : 1,
		damage : [3, 8, "piercing"],
		range : "Melee (5 ft)",
		description : "1 bite \u0026 1 tail attack as Attack action; See Swallow feature",
		tooltip : "If the target is a Large or smaller creature, it must succeed on a DC 14 Dexterity saving throw or be swallowed by the whale. A swallowed creature has total cover against attacks and other effects outside the whale, and it takes 3 (1d6) acid damage at the start of each of the whale's turns. If the whale takes 30 damage or more on a single turn from a creature inside it, the whale must succeed on a DC 16 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the whale. If the whale dies, a swallowed creature can escape from the corpse by using 20 feet of movement, exiting prone."
	}, {
		name : "Tail",
		ability : 1,
		damage : [3, 6, "bludgeoning"],
		range : "Melee (15 ft)",
		description : "1 bite \u0026 1 tail attack as Attack action; Double damage vs. objects",
		tooltip : "If the target is an object, the tail attack deal 6d6 + twice the Strength modifier bludgeoning damage."
	}],
	features : [{
		name : "Swallow",
		description : "A Large or smaller creature hit by the whale's bite attack must make a DC 14 Dexterity saving throw or be swallowed whole. A swallowed creature has total cover against attacks and other effects outside the whale, and it takes 3 (1d6) acid damage at the start of each of the whale's turns. If the whale takes 30 damage or more on a single turn from a creature inside it, the whale must succeed on a DC 16 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 ft of the whale. If the whale dies, a swallowed creature can escape from the corpse by using 20 ft of movement, exiting prone."
	}],
	traits : [{
		name : "Echolocation",
		description : "The whale can't use its blindsight while deafened."
	}, {
		name : "Hold Breath",
		description : "The whale can hold its breath for 90 minutes."
	}, {
		name : "Keen Hearing",
		description : "The whale has advantage on Wisdom (Perception) checks that rely on hearing."
	}],
	actions : [{
		name : "Multiattack",
		description : "The whale makes two attacks: one with its bite and one with its tail."
	}],
	wildshapeString : "\u25C6 Senses: Blindsight 120 ft (unless deafened); Adv. on Wis (Perception) checks using hearing."+
	"\n\u25C6 Hold Breath: Can hold its breath for 90 minutes."+
	"\n\u25C6 Swallow: Large or smaller hit with bite DC 14 Dex save or swallowed. Swallowed: total cover from outside whale, 1d6 acid damage at start of each turn. If whale takes 30 or more damage in a turn from inside, it DC 16 Con save or spit out creature prone in 10 ft at end of turn."
};
CreatureList["walrus"] = {
	name : "Walrus",
	source : [["RotF", 312]],
	size : 2,
	type : "Beast",
	alignment : "Unaligned",
	ac : 9,
	hp : 22,
	hd : [3, 10],
	speed : "20 ft, swim 40 ft",
	scores : [15, 9, 14, 3, 11, 4],
	senses : "",
	passivePerception : 10,
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Tusks",
		ability : 1,
		damage : [2, 4, "piercing"],
		range : "Melee (5 ft)",
		description : ""
	}],
	traits : [{
		name : "Hold Breath",
		description : "The walrus can hold its breath for 10 minutes."
	}]
};
CreatureList["giant walrus"] = {
	name : "Giant Walrus",
	source : [["RotF", 312]],
	size : 1,
	type : "Beast",
	alignment : "Unaligned",
	ac : 9,
	hp : 85,
	hd : [9, 12],
	speed : "20 ft, swim 40 ft",
	scores : [22, 9, 16, 3, 11, 4],
	senses : "Darkvision 60 ft",
	passivePerception : 10,
	challengeRating : "4",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
		name : "Body Flop",
		ability : 1,
		damage : [2, 8, "bludgeoning"],
		range : "Melee (5 ft)",
		description : "One body flop and one tusks attack as an Attack action"
	}, {
		name : "Tusks",
		ability : 1,
		damage : [3, 6, "piercing"],
		range : "Melee (5 ft)",
		description : "One body flop and one tusks attack as an Attack action"
	}],
	traits : [{
		name : "Hold Breath",
		description : "The walrus can hold its breath for 30 minutes."
	}],
	actions : [{
		name : "Multiattack",
		description : "The walrus makes two attacks: one with its body flop and one with its tusks."
	}]
};

// Creatures - for the Create Magos spell (each contain contributions by BraabHimself)
CreatureList["demos magen"] = {
	name : "Magen, Demos",
	nameAlt : ["Demos Magen"],
	source : [["RotF", 300]],
	size : 3,
	type : "Construct",
	alignment : "Unaligned",
	ac : 16,
	hp : 51,
	hd : [6, 8],
	speed : "30 ft",
	scores : [14, 14, 18, 10, 10, 7],
	senses : "",
	damage_immunities : "poison",
	condition_immunities : "charmed, exhaustion, frightened, paralyzed, poisoned",
	passivePerception : 10,
	languages : "understands the languages of its creator but can't speak",
	challengeRating : "2",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
		name : "Greatsword",
		ability : 1,
		damage : [2, 6, "slashing"],
		range : "Melee (5 ft)",
		description : "Two greatsword attacks as an Attack action"
	}, {
		name : "Light Crossbow",
		ability : 2,
		damage : [1, 8, "piercing"],
		range : "80/320 ft",
		description : ""
	}],
	traits : [{
		name : "Fiery End",
		description : "If the magen dies, its body disintegrates in a harmless burst of fire and smoke, leaving behind anything it was wearing or carrying."
	}, {
		name : "Magic Resistance",
		description : "The magen has advantage on saving throws against spells and other magical effects."
	}, {
		name : "Unusual Nature",
		description : "The magen doesn't require air, food, drink, or sleep."
	}],
	features : [{
		name : "Magical Servants",
		description : "Magen make ideal servants. At creation, each is instilled with an instinct to protect itself and its creator, and it follows its creator's instructions without hesitation. When its taks is complete, a magen stands immobile and silent until its creator gives it new orders."
	}]
};
CreatureList["galvan magen"] = {
	name : "Magen, Galvan",
	nameAlt : ["Galvan Magen"],
	source : [["RotF", 301]],
	size : 3,
	type : "Construct",
	alignment : "Unaligned",
	ac : 14,
	hp : 68,
	hd : [8, 8],
	speed : "30 ft, fly 30 ft (hover)",
	scores : [10, 18, 18, 12, 10, 7],
	senses : "",
	damage_immunities : "lightning, poison",
	condition_immunities : "charmed, exhaustion, frightened, paralyzed, poisoned",
	passivePerception : 10,
	languages : "understands the languages of its creator but can't speak",
	challengeRating : "3",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
		name : "Shocking Touch",
		ability : 2,
		damage : [1, 6, "lightning"],
		range : "Melee (5 ft)",
		description : "Two shocking touch attacks as an Attack action; Adv. if target wears metal armor"
	}, {
		name : "Static Discharge (Recharge 5–6)",
		ability : 3,
		damage : [4, 10, "lightning"],
		range : "5-ft \xD7 30-ft line",
		description : "Hits all in area; Dex save, success\u2015 half damage; Disadv. if wearing metal armor",
		abilitytodamage : false,
		dc : true,
		tooltip : "The magen discharges a lightning bolt in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 14 Dexterity saving throw (with disadvantage if the creature is wearing armor made of metal), taking 22 (4d10) lightning damage on a failed save, or half as much damage on a successful one."
	}],
	traits : [{
		name : "Fiery End",
		description : "If the magen dies, its body disintegrates in a harmless burst of fire and smoke, leaving behind anything it was wearing or carrying."
	}, {
		name : "Magic Resistance",
		description : "The magen has advantage on saving throws against spells and other magical effects."
	}, {
		name : "Unusual Nature",
		description : "The magen doesn't require air, food, drink, or sleep."
	}],
	features : [{
		name : "Magical Servants",
		description : "Magen make ideal servants. At creation, each is instilled with an instinct to protect itself and its creator, and it follows its creator's instructions without hesitation. When its taks is complete, a magen stands immobile and silent until its creator gives it new orders."
	}],
	actions : [{
		name : "Static Discharge (Recharge 5–6)",
		description : "See Attack. The magen discharges a lightning bolt in a 60-ft line that is 5 ft wide. Each creature in that line must make a DC 14 Dexterity saving throw (with disadvantage if the creature is wearing armor made of metal), taking 4d12 lightning damage on a failed save, or half as much damage on a successful one."
	}]
};
CreatureList["hypnos magen"] = {
	name : "Magen, Hypnos",
	nameAlt : ["Hypnos Magen"],
	source : [["RotF", 301]],
	size : 3,
	type : "Construct",
	alignment : "Unaligned",
	ac : 12,
	hp : 34,
	hd : [4, 8],
	speed : "30 ft",
	scores : [10, 14, 18, 14, 10, 7],
	senses : "",
	damage_immunities : "poison",
	condition_immunities : "charmed, exhaustion, frightened, paralyzed, poisoned",
	passivePerception : 10,
	languages : "telepathy 30 ft, understands the languages of its creator but can't speak",
	challengeRating : "1",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Psychic Lash",
		ability : 4,
		damage : [2, 10, "psychic"],
		range : "60 ft",
		description : "One creature in sight; Wis save: success\u2015 no damage",
		abilitytodamage : false,
		dc : true
	}],
	traits : [{
		name : "Fiery End",
		description : "If the magen dies, its body disintegrates in a harmless burst of fire and smoke, leaving behind anything it was wearing or carrying."
	}, {
		name : "Magic Resistance",
		description : "The magen has advantage on saving throws against spells and other magical effects."
	}, {
		name : "Unusual Nature",
		description : "The magen doesn't require air, food, drink, or sleep."
	}],
	features : [{
		name : "Magical Servants",
		description : "Magen make ideal servants. At creation, each is instilled with an instinct to protect itself and its creator, and it follows its creator's instructions without hesitation. When its taks is complete, a magen stands immobile and silent until its creator gives it new orders."
	}],
	actions : [{
		name : "Suggestion",
		description : "The magen casts the Suggestion spell (save DC 12), requiring no material components. The target must be a creature that the magen can communicate with telepathically. If it succeeds on its saving throw, the target is immune to this magen's suggestion spell for the next 24 hours. The magen's spellcasting ability is Intelligence."
	}]
};

// Magic Items
MagicItemsList["abracadabrus"] = { // contains contributions by BraabHimself
	name : "Abracadabrus",
	source : [["RotF", 314]],
	type : "wondrous item",
	rarity : "very rare",
	description : "This gemstone-studded wooden chest with a volume of 1.5 cu ft has 20 charges, regaining 1d20 charges at dawn. I roll a d20 if I use its last charge. On a 1, it loses its magic and gems. As an action, I can touch it and expend 1 charge to have up to 1 gp of nonmagical objects form inside, provided they fit and it's empty.",
	descriptionLong : "This ornate, gemstone-studded wooden chest has a volume of 1.5 cu ft and weighs 25 lb. It has 20 charges and regains 1d20 expended charges daily at dawn. I roll a d20 if I use its last charge. On a 1, it loses its magic and gems. As an action, I can touch it and expend 1 charge to have up to 1 gp of nonmagical objects form inside (including raw materials, foodstuffs, and liquids), provided they fit inside and the chest is empty. Food and drink produced by the chest is delicious and spoils if not consumed after 24 hours. Gems and precious metals produced by the chest disappear after 1 minute.",
	descriptionFull : "An abracadabrus is an ornate, gemstone-studded wooden chest that weighs 25 pounds while empty. Its interior compartment is a cube measuring 1\u00BD feet on a side."+
	"\n   The chest has 20 charges. A creature can use an action to touch the closed lid of the chest and expend 1 of the chest's charges while naming one or more nonmagical objects (including raw materials, foodstuffs, and liquids) worth a total of 1 gp or less. The named objects magically appear in the chest, provided they can all fit inside it and the chest doesn't contain anything else. For example, the chest can conjure a plate of strawberries, a bowl of hot soup, a flagon of water, a stuffed animal, or a bag of twenty caltrops. Food and drink conjured by the chest are delicious, and they spoil if not consumed after 24 hours. Gems and precious metals created by the chest disappear after 1 minute."+
	"\n   The chest regains 1d20 expended charges daily at dawn. If the item's last charge is expended, roll a d20. On a 1, the chest loses its magic (becoming an ordinary chest), and its gemstones turn to dust.",
	weight : 25,
	usages : 20,
	recovery : "dawn",
	additional : "regains 1d20",
	action : [["action", ""]]
};
MagicItemsList["cauldron of plenty"] = { // contains contributions by BraabHimself
	name : "Cauldron of Plenty",
	source : [["RotF", 314]],
	type : "wondrous item",
	rarity : "rare",
	description : "This copper cauldron is 4 ft wide, 3.5 ft in diameter, and holds 30 gal. It has a lid, handles, and 5 clawed feet. Water stirred in it for 1 min becomes hot stew for 4 people per 1 gal. Stew stays hot in the cauldron, cools if removed, but cauldron's surface remains cool. Can be used 3 times per day, regaining all uses at dawn.",
	descriptionLong : "This thick copper cauldron has turned green with age. It is 4ft wide, has a 3.5 ft diameter mouth, and holds 30 gallons. It has a lid, handles, and 5 clawed feet. If water is poured into the cauldron and stirred for 1 minute, it transforms into a hearty, hot stew, which can provide one nourishing meal for up to four people per 1 gallon. The stew remains hot while in the cauldron, then cools naturally after it is removed. The outside of the cauldron remains safe to touch despite the heat of the stew. The cauldron can create stew three times. It then ceases to function until the next dawn, when it regains all its uses.",
	descriptionFull : "This cauldron is made of thick copper that has turned green with age. It is 4 feet wide, has a mouth 3\u00BD feet in diameter, weighs 50 pounds, and can hold up to 30 gallons of liquid. Embossed on its bulging sides are images of satyrs and nymphs in repose, holding ladles. The cauldron comes with a lid and has side handles. It sits on five little clawed feet that keep it from tipping."+
	"\n   If water is poured into the cauldron and stirred for 1 minute, it transforms into a hearty, hot stew, which can provide one nourishing meal for up to four people per gallon. The stew remains hot while in the cauldron, then cools naturally after it is removed. The outside of the cauldron remains safe to touch despite the heat of the stew."+
	"\n   The cauldron can create stew three times. It then ceases to function until the next dawn, when it regains all its uses.",
	weight : 50,
	usages : 3,
	recovery : "dawn"
};
var IDRotF_HookOfFishersDelightFullDescription = [
	"This tiny silver fishhook has a little gold feather attached to it. For it to function, the feathered hook must be tied to the end of a fishing line and immersed in enough water to fill at least a 10-foot cube. At the end of each uninterrupted hour of immersion, roll a d6. On a 6, a floppy, 6-inch-long magical fish appears on the end of the hook. The color and properties of the conjured fish are determined by rolling on the table below. Once the hook conjures a fish, it can't do so again until the next dawn.\n",
	">>d20\tFish color and result<<",
	"1-10\t>>Green with copper bands<<. This tasty fish provides a day's worth of nourishment to one creature that eats it. The fish loses this property and rots if it's not eaten within 24 hours of being caught.",
	"11-14\t>>Yellow with black stripes<<. Once removed from the hook, this awful-tasting fish can be thrown up to 120 feet, targeting a creature the thrower can see. The target must succeed on a DC 15 Strength saving throw or be knocked prone. The fish then disappears.",
	"15-18\t>>Blue with white bands<<. When released from the hook, this fish squirms free, sprouts wings, follows you around, and sings a beautiful tune in Aquan. It disappears after 2d4 hours or when reduced to 0 hit points. The fish uses the quipper stat block, except that it can breathe air and has a flying speed of 30 feet.",
	"19-20\t>>Gold with silver stripes<<. This tasty fish provides a day's worth of nourishment to one creature that eats it and grants 2d10 temporary hit points to that creature. The fish loses these properties and rots if it's not eaten within 24 hours of being caught."
];
MagicItemsList["hook of fisher's delight"] = { // contains contributions by BraabHimself
	name : "Hook of Fisher's Delight",
	source : [["RotF", 314]],
	type : "wondrous item",
	rarity : "rare",
	description : "For this tiny silver fishhook to work, I must attach it to the end of a fishing line and immerse it in at least 10 cu ft of water. Then, at the end of each uninterrupted hour of immersion, I roll a d6. On a 6, a magical fish appears on the hook; roll a d20 to determine the fish's properties on the table on the Notes page.",
	descriptionFull : IDRotF_HookOfFishersDelightFullDescription.join("\n   ").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
	toNotesPage : [{
		name : "Fish Properties Table",
		note : desc(IDRotF_HookOfFishersDelightFullDescription).replace(/>>|<</g, "").replace(/\byou\b/ig, "I").replace(/\bf(oo|ee)t\b/ig, "ft")
	}],
	usages : 1,
	recovery : "dawn"
};
MagicItemsList["lantern of tracking"] = function () { // contains contributions by BraabHimself
	var oObj = {
		name : "Lantern of Tracking",
		source : [["RotF", 314]],
		type : "wondrous item",
		rarity : "common",
		descriptionFull : [
			"This hooded lantern burns for 6 hours on 1 pint of oil, shedding bright light in a 30-foot radius and dim light for an additional 30 feet."+
			"\n   Each lantern of tracking is designed to track down a certain type of creature, which is determined by rolling on the Lantern of Tracking table. Once determined, this creature type can't be changed. While the lantern is within 300 feet of any creature of that type, its flame turns bright green. The lantern doesn't pinpoint the creature's exact location, however.\n",
			toUni("d10\tCreature Type"),
			"  1\tAberrations",
			"  2\tCelestials",
			"  3\tConstructs",
			"  4\tDragons",
			"  5\tElementals",
			"  6\tFey",
			"  7\tFiends",
			"  8\tGiants",
			"  9\tMonstrosities",
			"10\tUndead"
		].join("\n   "),
		allowDuplicates : true,
		weight : 2,
		choices : ["Aberrations", "Celestials", "Constructs", "Dragons", "Elementals", "Fey", "Fiends", "Giants", "Monstrosities", "Undead"]
	};
	var sDescr = "This hooded lantern burns for 6 hours on 1 pint of oil, shedding bright light in a 30-ft radius and dim light for an additional 30 ft. While this lantern is within 300 ft of any CREATURE TYPE, its flame turns bright green. The lantern doesn't pinpoint the creature's exact location, however.";
	oObj.description = sDescr.replace("any CREATURE TYPE", "a specified creature type");
	for (var i = 0; i < oObj.choices.length; i++) {
		var sChoice = oObj.choices[i].toLowerCase();
		oObj[sChoice] = {
			name : "Lantern of " + oObj.choices[i] + " Tracking",
			sortname : "Lantern of Tracking, " + oObj.choices[i],
			description : sDescr.replace("CREATURE TYPE", sChoice),
			usages : 1,
			recovery : "dawn"
		}
	}
	return oObj;
}();
// [dupl_start] reprint from Waterdeep: Dungeon of the Mad Mage
if (!MagicItemsList["professor orb"]) {
	
	MagicItemsList["professor orb"] = { // contains contributions by Pengsloth
		name : "Professor Orb",
		source : [["WDotMM", 131], ["RotF", 315]],
		type : "wondrous item",
		rarity : "rare",
		storyItemAL : true,
		description : "This orb is sentient with the personality of a scholar, but no will of its own. It has Int 18, Wis and Cha of 3d6 each. It knows and reads 4 languages, can see/hear as a human out to 60 ft, and has extensive knowledge of 4 narrow academic subjects (+9 on checks). It knows Mage Hand, which it uses to move around.",
		descriptionFull : "Each professor orb takes the form of a smooth, solid, 5-pound sphere of smoky gray quartz about the size of a grapefruit. Close examination reveals two or more pinpricks of silver light deep inside the sphere.\n   A Professor Orb is sentient and has the personality of a scholar. Its alignment is determined by rolling on the alignment table in the \"Sentient Magic Items\" section in chapter 7 of the Dungeon Master's Guide. Regardless of its disposition, the orb has an Intelligence of 18, and Wisdom and Charisma scores determined by rolling 3d6 for each ability. The orb speaks, reads, and understands four languages, and can see and hear normally out to a range of 60 feet. Unlike most sentient items, the orb has no will of its own and can't initiate a conflict with the creature in possession of it.\n   A Professor Orb has extensive knowledge of four narrow academic subjects. When making an Intelligence check to recall lore from any of its areas of expertise, the orb has a +9 bonus to its roll (including its Intelligence modifier).\n   In addition to the knowledge it possesses, a professor orb can cast the Mage Hand cantrip at will. It uses the spell only to transport itself. Its spellcasting ability is Intelligence."
	}
} // dupl_end
MagicItemsList["professor skant"] = { // contains contributions by Pengsloth
	name : "Professor Skant",
	source : [["RotF", 315]],
	type : "wondrous item",
	rarity : "rare",
	description : "This sentient orb with the personality of a scholar has Int 18, Wis 11, Cha 9, and no will of its own. It can hear and see out to 60 ft. It knows and reads Common, Draconic, Elvish, and Loross. It has+9 on checks regarding history of Netheril, vampirism, tarrasque, and Elverquisst. It moves itself around using Mage Hand.",
	descriptionLong: "This sentient orb, which calls itself Professor Skant, has the personality of a scholar, but no will of its own to cause conflicts. It's a smooth, solid, 5 lb sphere of smoky gray quartz about the size of a grapefruit with two or more pinpricks of silver light deep inside. It's alignment is lawful good and it has Intelligence 18, Wisdom 11, and Charisma 9. It knows and reads Common, Draconic, Elvish, and Loross. It has expertise in the following academic topics (+9 on checks): history of Netheril, vampirism and the traits of vampires, rituals surrounding the making, bottling, and drinking of Elverquisst, and the tarrasque.",
	descriptionFull : "The professor orb owned by Vellynne Harpell and stolen by Nass Lantomir calls itself Professor Skant. It is lawful good, and it has a Wisdom of 11 and a Charisma of 9 (as a professor orb, it has an Intelligence of 18). It speaks and reads Common, Draconic, Elvish, and Loross (the dead language of the Empire of Netheril). Professor Skant is a chatterbox and assumes all humanoids are dunderheads. When elaborating on its areas of expertise, it adopts an unintentionally patronizing tone. It has the following four areas of expertise:"+
	"\n \u2022 The history of Netheril (see the \"Fate of Netheril\" sidebar)"+
	"\n \u2022 Vampirism and the traits of vampires"+
	"\n \u2022 Rituals surrounding the making, bottling, and drinking of Elverquisst (a rare, ruby-colored elven liquor distilled from sunshine and rare summer fruits)"+
	"\n \u2022 The tarrasque (see the Monster Manual)"+
	"When making an Intelligence check to recall lore from any of its areas of expertise, the orb has a +9 bonus to its roll (including its Intelligence modifier)."+
	"\n   Professor Skant takes the form of a smooth, solid, 5-pound sphere of smoky gray quartz about the size of a grapefruit. Close examination reveals two or more pinpricks of silver light deep inside the sphere."+
	"\n   Professor Skant can see and hear normally out to a range of 60 feet. Unlike most sentient items, the orb has no will of its own and can't initiate a conflict with the creature in possession of it."+
	"\n   In addition to the knowledge it possesses, Professor Skant can cast the mage hand cantrip at will. It uses the spell only to transport itself. Its spellcasting ability is Intelligence."
};
MagicItemsList["psi crystal"] = { // contains contributions by BraabHimself
	name : "Psi Crystal",
	source : [["RotF", 315]],
	type : "wondrous item",
	rarity : "uncommon",
	attunement : true,
	prerequisite : "Requires attunement by a creature with an intelligence score of 3 or higher",
	prereqeval : function(v) { return Number(What("Int")) >= 3; },
	description : "While attuned to this orb, it glows with an inner purplish light and gives me telepathy. The range of telepathy and intensity of light are determined by my Intelligence score.",
	descriptionFull : "This crystal grants you telepathy for as long as you remain attuned to it. See the introduction of the Monster Manual for rules on how this telepathy works."+
	"\n   The crystal also glows with a purplish inner light while you are attuned to it."+
	"\n   The higher your intelligence, the greater the light's intensity and the greater the range of the telepathy (see the table below)."+
	toUni("\n\nIntelligence\tRange of   \tLight"+
	"\n    Score\t\tTelepathy  \tIntensity")+
	"\n      3-7\t\t  15 feet\t\tDim light out to a range of 5 ft"+
	"\n      8-11\t\t  30 feet\t\tBright light in a 5-ft radius and dim light for an additional 5 ft"+
	"\n    12-15\t\t  60 feet\t\tBright light in a 10-ft radius and dim light for an additional 10 ft"+
	"\n    16 or higher\t 120 feet\t\tBright light in a 15-ft radius and dim light for an additional 15 ft",
	weight : 3,
	choices : ["Intelligence   3-7", "Intelligence   8-11", "Intelligence 12-15", "Intelligence 16 or higher"],
	selfChoosing : function () {
		var iInt = Number(What("Int"));
		return iInt >= 16 ? "intelligence 16 or higher" : iInt >= 12 ? "intelligence 12-15" : iInt >= 8 ? "intelligence   8-11" : "intelligence   3-7";
	},
	"intelligence   3-7" : {
		name : "Psi Crystal (Int 3-7)",
		description : "While attuned to this orb, it glows with an inner purplish light, dim light out to a range of 5 ft. It also grants me telepathy out to a range of 15 ft. The range of telepathy and intensity of light are determined by my Intelligence score."
	},
	"intelligence   8-11" : {
		name : "Psi Crystal (Int 8-11)",
		description : "While attuned to this orb, it glows with an inner purplish light, bright light in a 5-ft radius and dim light for an additional 5 ft. It also grants me telepathy out to a range of 30 ft. The range of telepathy and intensity of light are determined by my Intelligence score."
	},
	"intelligence 12-15" : {
		name : "Psi Crystal (Int 12-15)",
		description : "While attuned to this orb, it glows with an inner purplish light, bright light in a 10-ft radius and dim light for an additional 10 ft. It also grants me telepathy out to a range of 60 ft. The range of telepathy and intensity of light are determined by my Intelligence score."
	},
	"intelligence 16 or higher" : {
		name : "Psi Crystal (Int 16+)",
		description : "While attuned to this orb, it glows with an inner purplish light, bright light in a 15-ft radius and dim light for an additional 15 ft. It also grants me telepathy out to a range of 120 ft. The range of telepathy and intensity of light are determined by my Intelligence score."
	}
};
MagicItemsList["scroll of tarrasque summoning"] = { // contains contributions by BraabHimself
	name : "Scroll of Tarrasque Summoning",
	source : [["RotF", 315]],
	type : "scroll",
	rarity : "legendary",
	description : "Once as an action, I can use this to cause the tarrasque to appear in an unoccupied space I can see within 1 mile. The tarrasque disappears when it drops to 0 hit points and is hostile toward all creatures other than itself.",
	descriptionFull : "Using an action to read the scroll causes the tarrasque (see the creature's entry in the Monster Manual) to appear in an unoccupied space you can see within 1 mile of you. The tarrasque disappears when it drops to 0 hit points and is hostile toward all creatures other than itself."
};
MagicItemsList["scroll of the comet"] = { // contains contributions by BraabHimself
	name : "Scroll of the Comet",
	source : [["RotF", 315]],
	type : "scroll",
	rarity : "legendary",
	description : "Once as an action outdoors, I can use this to cause a comet to fall on a point I can see within 1 mile, creating a 50-ft deep, 500-ft radius crater. All creatures in the radius take 30d10 force damage and can make a DC 20 Dex save to halve this damage. It destroys all nonmagical objects and structures within the area.",
	descriptionFull : "By using an action to read the scroll, you cause a comet to fall from the sky and crash to the ground at a point you can see up to 1 mile away from you. You must be outdoors when you use the scroll, or nothing happens and the scroll is wasted."+
	"\n   The comet creates a 50-foot-deep, 500-foot-radius crater on impact. Any creature in that radius must make a DC 20 Dexterity saving throw, taking 30d10 force damage on a failed saving throw, or half as much damage on a successful one. All structures in the crater are destroyed, as are all nonmagical objects that aren't being worn or held."
};
MagicItemsList["thermal cube"] = { // contains contributions by BraabHimself
	name : "Thermal Cube",
	source : [["RotF", 316]],
	type : "wondrous item",
	rarity : "common",
	description : "This 3-inch cube of solid brimstone generates enough dry heat to keep the temperature within 15 ft of it at 95 degrees Fahrenheit.",
	descriptionFull : "This 3-inch cube of solid brimstone generates enough dry heat to keep the temperature within 15 feet of it at 95 degrees Fahrenheit (35 degrees Celsius)."
};
MagicItemsList["ythryn mythallar"] = { // contains contributions by BraabHimself
	name : "Ythryn Mythallar",
	source : [["RotF", 316]],
	type : "wondrous item",
	rarity : "legendary",
	attunement : true,
	prerequisite : "Requires attunement by a spellcaster",
	prereqeval : function(v) { return v.isSpellcaster; },
	description : "This 50 ft diameter crystal ball sheds light in a 300 ft radius and dim light for an additional 300 ft. Up to 8 creatures can attune to it at one time, a 9th creature's attunement fails. All those attuned to it can sense when it is used and they all must agree to any properties being used. See Notes page.",
	descriptionFull : "A mythallar looks like an enormous crystal ball held in an ornate cradle. The globe sheds bright light in a 300-foot radius and dim light for an additional 300 feet. The globe draws magic from the Weave that can be harnessed for various purposes. For example, Netherese mages used mythallars to keep their cities aloft and empower their magic items. The bigger the mythallar, the more magic it can hold. The largest mythallars are 150 feet in diameter."+
	"\n   The Ythryn mythallar is a relatively small device\u2014a mere 50 feet in diameter. To attune to this mythallar, a creature must finish a short rest within 30 feet of it, meditating on the mythallar. Up to eight creatures can be attuned to it at one time; otherwise, the Ythryn mythallar follows the attunement rules in the Dungeon Master's Guide. If a ninth creature tries to attune to the mythallar, nothing happens."+
	"\n   All creatures attuned to the Ythryn mythallar can sense when the device is being used. A creature attuned to the device can use any of its properties, but only if all other creatures attuned to the device agree to allow it. The Ythryn mythallar's properties are as follows:"+
	"\n    \u2022 While you're on the same plane of existence as the Ythryn mythallar, you can use an action to cause it to fly in any direction you choose at a speed of 30 feet. All matter within 500 feet of the device moves with it. The Ythryn mythallar and all structures held aloft by it hover in place when not in motion."+
	"\n   \u2022 As an action, you can cause one magic item you are holding within 30 feet of the Ythryn mythallar to immediately regain all its expended charges or uses. A magic item recharged in this manner can't be recharged by the Ythryn mythallar again until after the item regains expended charges or uses on its own."+
	"\n   \u2022 You can use the Ythryn mythallar to cast the control weather spell without requiring any components and without the need for you to be outdoors. This casting of the spell has a 50-mile radius. For the duration of the spell's casting time, you must be within 30 feet of the Ythryn mythallar or the spell fails."+
	"\n" + toUni("Touching the Mythallar") + ". Any creature that touches the globe of the mythallar must make a DC 22 Constitution saving throw, taking 180 (20d10 + 70) radiant damage on a failed save, or half as much damage on a successful one. Undead have disadvantage on this saving throw. Any object that touches the globe, other than an artifact or the mythallar's cradle, is disintegrated instantly (no save).",
	toNotesPage : [{
		name : "Properties",
		note : [
			"The Ythryn Mythallar is a 50 ft diameter crystal ball that sits on a cradle",
			"It has the following properties:",
			"\u2022 Sheds light in a 300 ft radius and dim light for an additional 300 ft",
			"\u2022 Up to 8 creatures can attune to it, a 9th attunement fails",
			"\u2022 To attune, a creature must short rest within 30 ft of it",
			"\u2022 All those attuned to it can sense when sense when it is being used",
			"\u2022 All those attuned must agree to allow any properties to be used",
			"\u2022 You can use an action to use the Ythryn Mythallar in the following ways:",
			"  \u25E6 While on the same plane, give it a flying speed of 30 ft",
			"    All matter within 500 ft of it moves with it",
			"    The ball and all structures held aloft by it hover in place when not in motion",
			"  \u25E6 Cause one magic item to regain all charges/uses",
			"    I must be within 30 ft of the ball and holding the item",
			"    It cannot be recharged again until all charges/uses are expended",
			"  \u25E6 Cast the control weather spell without components or spell slots",
			"    It has a radius of 50 miles and can be cast inside",
			"    I must be within 30 ft of the ball for the casting time, or it will fail",
			"\nTOUCHING THE MYTHALLAR",
			"Any creature that touches the ball must make a DC 22 Constitution save",
			"On a failure, they take 20d10 + 70 radiant damage, or half that on a success",
			"Undead have disadvantage on this saving throw",
			"Objects touching the ball, except artifacts or the cradle, disintegrate instantly"
		]
	}]
};
MagicItemsList["the codicil of white"] = {
	name : "The Codicil of White",
	source : [["RotF", 317]],
	type : "wondrous item",
	rarity : "",
	notLegalAL : true,
	description : 'This volume bound in white fur, sealed with a silver lock, containing velum pages with silver edges is cold to the touch. While I have this tome in my possession, I gain resistance to cold damage. It contains the Frost Fingers spell which a wizard can learn and a poem incantation "Rime of the Frostmaiden".',
	descriptionFull : "The Codicil of White is a tall, thin volume bound in white ermine fur over seasoned boards of white pine and sealed with a clasp and lock of tarnished silver. The book is cold to the touch, and the fur is worn about the edges from use. The twenty-seven pages within are of vellum painted with silver gilt on the outer edges. The whole is sewn to a leather binding with strips of sinews, making it quite durable."+
	"\n   A creature with the codicil in its possession has resistance to cold damage."+
	"\n   The codicil was written by followers of Auril as a primer on her worship. The first page is a title page with the snowflake symbol of Auril on it. The remaining pages describe various priestly rituals and ceremonies in chilling detail. Nestled among these descriptions is a spell that wizards can learn (frost fingers, and a poem called \"Rime of the Frostmaiden\", see appendix E of Icewind Dale: Rime of the Frostmaiden). The poem is an incantation, the power of which can be used to split a glacier (see chapter 6 of Icewind Dale: Rime of the Frostmaiden). The poem might have other capabilities, at the DM's discretion",
	dmgres : ["Cold"],
	weight : 3
};
// [dupl_start] reprint (mostly) from Monster Manual
if (!MagicItemsList["shield guardian amulet"]) {
	MagicItemsList["shield guardian amulet"] = {
		name : "Shield Guardian Amulet",
		source : [["M", 271], ["RotF", 149]],
		type : "wondrous item",
		rarity : "rare",
		attunement : true,
		notLegalAL : true,
		prerequisite : "Requires attunement by a humanoid",
		prereqeval : function(v) { return !CurrentRace.known || !RaceList[CurrentRace.known] || !/creature type/i.test(RaceList[CurrentRace.known].trait); },
		description : "A shield guardian is magically linked to this amulet. It has AC 10, 10 HP, and immunity to poison and psychic damage. I know the distance and direction of the guardian while I'm wearing the amulet and I'm on the same plane as it. While within 10 ft of it, I can use the amulet to reactivate it with a DC 20 Arcana check.",
		descriptionFull : "The amulet is a 4-inch-wide disk composed of silver-framed wood, with a rune carved into its face. A detect magic spell reveals a magical aura of enchantment around the amulet."+
		"\n   Every shield guardian has an amulet magically linked to it. A shield guardian can have only one corresponding amulet, and if that amulet is destroyed, the shield guardian is incapacitated until a replacement amulet is created."+
		"\n   A shield guardian's amulet is subject to direct attack if it isn't being worn or carried. It has AC 10, 10 hit points, and immunity to poison and psychic damage. Crafting an amulet requires 1 week and costs 1,000 gp in components."+
		"\n   A shield guardian's solitary focus is to protect the amulet's wearer. The amulet's wearer can command the guardian to attack its enemies or to guard the wielder against attack. If an attack threatens to injure the wearer, the construct can magically absorb the blow into its own body, even at a distance."+
		"\n   A humanoid that attunes to this amulet knows the distance and direction of the shield guardian, provided the amulet and the guardian are on the same plane of existence. As an action, the amulet's attuned wearer can try to reactivate the shield guardian, doing so with a successful DC 20 Intelligence (Arcana) check. Reactivation can only be attempted while the amulet and guardian are within 10 feet of each other.",
		creaturesAdd : [["Shield Guardian"]],
		weight : 1
	}
} // dupl_end

// Spells
SpellsList["blade of disaster"] = {
	name : "Blade of Disaster",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["T", 106], ["RotF", 318]],
	level : 9,
	school : "Conj",
	time : "1 bns",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	description : "Create weapon; 2 spell atks 4d12 Force dmg; crit on 18+, triple dmg; bns a to move 30 ft \u0026 do 2 atks",
	descriptionShorter : "Create wea; 2 spell atks 4d12 Force dmg; crit 18+, triple dmg; bns a to move 30 ft \u0026 2 atks",
	descriptionFull : "You create a blade-shaped planar rift about 3 feet long in an unoccupied space you can see within range. The blade lasts for the duration. When you cast this spell, you can make up to two melee spell attacks with the blade, each one against a creature, loose object, or structure within 5 feet of the blade. On a hit, the target takes 4d12 force damage. This attack scores a critical hit if the number on the d20 is 18 or higher. On a critical hit, the blade deals an extra 8d12 force damage (for a total of 12d12 force damage)."+
	"\n   As a bonus action on your turn, you can move the blade up to 30 feet to an unoccupied space you can see and then make up to two melee spell attacks with it again."+
	"\n   The blade can harmlessly pass through any barrier, including a wall of force."
};
SpellsList["create magen"] = { // contains contributions by BraabHimself
	name : "Create Magen",
	source : [["RotF", 318]],
	classes : ["wizard"],
	level : 7,
	school : "Trans",
	time : "1 h",
	range : "Touch",
	components : "V,S,M\u2020",
	compMaterial : "A vial of quicksilver worth 500 gp and a life-sized human doll, both of which the spell consumes, and an intricate crystal rod worth at least 1,500 gp that is not consumed",
	duration : "Instantaneous",
	description : "Transform doll into magen (500gp cons.); obeys me; my HP max reduced by its CR; see book (1.5k gp)",
	descriptionFull : "While casting the spell, you place a vial of quicksilver in the chest of a life-sized human doll stuffed with ash or dust. You then stitch up the doll and drip your blood on it. At the end of the casting, you tap the doll with a crystal rod, transforming it into a magen clothed in whatever the doll was wearing. The type of magen is chosen by you during the casting of the spell. See appendix C for different kinds of magen and their statistics."+
	"\n   When the magen appears, your hit point maximum decreases by an amount equal to the magen's challenge rating (minimum reduction of 1). Only a wish spell can undo this reduction to your hit point maximum."+
	"\n   Any magen you create with this spell obeys your commands without question."
};
SpellsList["frost fingers"] = { // contains contributions by BraabHimself
	name : "Frost Fingers",
	source : [["RotF", 318]],
	classes : ["wizard"],
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "S:15" + (typePF ? "-" : "") + "ft cone",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	description : "All in area 2d8+1d8/SL Cold dmg; save halves; unattended nonmagical liquids freeze",
	descriptionFull : "Freezing cold blasts from your fingertips in a 15-foot cone. Each creature in that area must make a Constitution saving throw, taking 2d8 cold damage on a failed save, or half as much damage on a successful one."+
	"\n   The cold freezes nonmagical liquids in the area that aren't being worn or carried."+
	AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
};
