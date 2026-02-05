var iFileName = "pub_20210921_WBtW.js";
RequiredSheetVersion("14.0.5-beta");
// This file adds the content from The Wild Beyond the Witchlight adventure to MPMB's Character Record Sheet

SourceList.WBtW = {
	name : "The Wild Beyond the Witchlight",
	abbreviation : "WBtW",
	group : "Adventure Books",
	url : "https://dnd.wizards.com/products/wild-beyond-witchlight",
	date : "2021/09/21"
};

// Backgrounds
BackgroundList["feylost"] = {
	regExpSearch : /feylost/i,
	name : "Feylost",
	source : [["WBtW", 9], ["ALbackground", 0]],
	skills : ["Deception", "Survival"],
	toolProfs : [["Musical instrument", 1]],
	languageProfs : [["Elvish, Gnomish, Goblin, or Sylvan", 1]],
	gold : 8,
	equipleft : [
		["Musical instrument of my choice", "", ""],
		["Three Feywild trinkets", "", ""]
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Feywild Connection",
	trait : [
		"I'm haunted by fey laughter that only I can hear, though I know it's just my mind playing tricks on me.",
		"Like a nomad, I can't settle down in one place for very long.",
		"Good music makes me weep like a baby.",
		"Wherever I go, I try to bring a little of the warmth and tranquility of home with me.",
		"I have never lost my childlike sense of wonder.",
		"When I have a new idea, I get wildly excited about it until I come up with another, better idea.",
		"I live by my own set of weird and wonderful rules.",
		"I can't bring myself to trust most adults."
	],
	ideal : [
		["Friendship", "Friendship: I never leave a friend behind. (Good)"],
		["Empathy", "Empathy: No creature should be made to suffer. (Good)"],
		["Wanderlust", "Wanderlust: I prefer to take the less traveled path. (Chaotic)"],
		["Changeability", "Changeability: Change is good, which is why I live by an ever-changing set of rules. (Chaotic)"],
		["Honor", "Honor: A deal is a deal, and I would never break one. (Lawful)"],
		["Rule of Three", 'Rule of Three: Everything in the multiverse happens in threes. I see the "rule of three" everywhere. (Lawful)'],
		["Obsession", "Obsession: I won't let go of a grudge. (Evil)"],
		["Greed", "Greed: I will do whatever it takes to get what I want, regardless of the harm it might cause. (Evil)"]
	],
	bond : [
		"I would never break my word.",
		"I find magic in all its forms to be compelling. The more magical a place, the more I am drawn to it.",
		"I do what I can to protect the natural world.",
		"A trusted friend is the most important thing in the multiverse to me.",
		"I can't bring myself to harm a Fey creature, either because I consider myself one or because I fear the repercussions.",
		"The Witchlight Carnival feels like home to me.",
		"I'm drawn to the Feywild and long to return there, if only for a short while.",
		"I feel indebted to Mister Witch and Mister Light for giving me a home and a purpose."
	],
	flaw : [
		"I easily lose track of time. My poor sense of time means I'm always late.",
		"I think the whole multiverse is out to get me.",
		"I'm always operating under a tight timeline, and I'm obsessed with keeping everything on schedule.",
		"I'm a kleptomaniac who covets shiny, sparkling treasure.",
		"I'm forgetful. Sometimes I can't remember even the simplest things.",
		"I never give away anything for free and always expect something in return.",
		"I have many vices and tend to indulge them.",
		"I'm always changing my mind\u2014well, almost always."
	],
	extra : [
		"Select a Fey Mark",
		"Iridescent color eyes",
		"Sweet scent",
		"Long whiskers",
		"Furry ears",
		"Skin sparkles in moonlight",
		"Flowers bloom in my presence",
		"Flowers wilt in my presence",
		"Vines for hair",
		"Brambles for hair",
		"Tail"
	],
	toNotesPage : [{
		name : "Feywild Visitor",
		note : [
			"Whenever I'm sound asleep or in a deep trance during a long rest, a spirit of the Feywild might pay me a visit, if the DM wishes it. Determine the spirit's form by rolling on the table below. No harm ever comes to me as a result of such visits, which can last for minutes or hours, and I remember each visit when I wake up. Conversations that occur with a visitor can contain any number of things, from messages and insights to nonsense and red herrings, at the DM's discretion. Such conversations are always conducted in a language I can understand, even if the Feywild visitor can't speak that language normally.\n",
			"d8\tVisitor",
			" 1\tAwakened creature (beast or plant that had the Awaken spell cast on it)",
			" 2\tCentaur",
			" 3\tDryad",
			" 4\tFaerie dragon",
			" 5\tPixie",
			" 6\tSatyr",
			" 7\tSprite",
			" 8\tUnicorn"
		]
	}]
};
BackgroundFeatureList["feywild connection"] = {
	description : "My mannerisms and knowledge of fey customs are recognized by natives of the Feywild, who see me as one of their own. Because of this, friendly Fey creatures are inclined to come to my aid if I am lost or need help in the Feywild.",
	source : [["WBtW", 11], ["ALbackground", 0]]
};
BackgroundList["witchlight hand"] = {
	regExpSearch : /^(?=.*(witchlight|carnival))(?=.*hand).*$/i,
	name : "Witchlight Hand",
	source : [["WBtW", 11], ["ALbackground", 0]],
	skills : ["Performance", "Sleight of Hand"],
	toolProfs : [["Disguise kit or Musical instrument", 1]],
	languageProfs : [1],
	gold : 8,
	equipleft : [
		["Disguise kit or Musical instrument", "", ""],
		["Deck of cards", "", ""],
		["Feywild trinket", "", ""]
	],
	equipright : [
		["Carnival uniform or Costume", "", 4],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Carnival Fixture",
	trait : BackgroundList["feylost"].trait,
	ideal : BackgroundList["feylost"].ideal,
	bond : BackgroundList["feylost"].bond,
	flaw : BackgroundList["feylost"].flaw,
	extra : [
		"Select Carnival Companion",
		"Old, cantankerous Witchlight hand",
		"Young, impressionable Witchlight hand",
		"Performer",
		"Retired performer",
		"Seasoned animal trainer",
		"Old blink dog",
		"Your hair is made of vines or brambles and grows back to normal length within 1 hour of being cut.",
		"You have a tail like that of a dog or another animal."
	]
};
BackgroundFeatureList["carnival fixture"] = {
	description : "The Witchlight Carnival provides me with free, modest lodging and food. In addition, I may wander about the carnival and partake of its many wonders at no cost to me, provided I don't disrupt its shows or cause any other trouble.",
	source : [["WBtW", 11], ["ALbackground", 0]]
};

// Races
RaceList["fairy"] = {
	regExpSearch : /fairy/i,
	name : "Fairy",
	source : [["WBtW", 12], ["MotM", 14]],
	plural : "Fairies",
	size : 4,
	speed : {
		walk : { spd : 30, enc : 20 },
		fly : { spd : "walk", enc : 0 }
	},
	scoresGeneric : true,
	spellcastingAbility : [4, 5, 6],
	spellcastingBonus : [{
		name : "Fairy Magic",
		spells : ["druidcraft"],
		selection : ["druidcraft"],
	}],
	features : {
		"fairy magic (level 3)" : {
			name : "Fairy Magic (level 3)",
			minlevel : 3,
			spellcastingBonus : [{
				name : "Fairy Magic (level 3)",
				spells : ["faerie fire"],
				selection : ["faerie fire"],
				firstCol : 'oncelr',
				allowUpCasting : true
			}],
			extraLimitedFeatures : [{
				name : "Faerie Fire",
				usages : 1,
				recovery : "long rest",
				altResource : "SS 1+"
			}]
		},
		"fairy magic (level 5)" : {
			name : "Fairy Magic (level 5)",
			minlevel : 5,
			spellcastingBonus : [{
				name : "Fairy Magic (level 5)",
				spells : ["enlarge/reduce"],
				selection : ["enlarge/reduce"],
				firstCol : 'oncelr',
				allowUpCasting : true
			}],
			extraLimitedFeatures : [{
				name : "Enlarge/Reduce",
				usages : 1,
				recovery : "long rest",
				altResource : "SS 2+"
			}]
		}
	},
	trait : "Fairy"+
		(typePF ? "\n \u2022 Fey: My " : " (") + "creature type is fey, rather than humanoid" + (typePF ? "." : ")") +
		"\n \u2022 Flight: I have a flying speed equal to my walking speed. To use this speed, I can't be wearing medium or heavy armor."+
		"\n \u2022 Fairy Magic: I know the Druidcraft cantrip. At 3rd level, I can cast Faerie Fire. At 5th level, I can cast Enlarge/Reduce. I can cast each spell without using a spell slot once per long rest, as well as by using spell slots as normal. Intelligence, Wisdom, or Charisma is my spellcasting ability for these (one-time choice)."
};
RaceList["harengon"] = {
	regExpSearch : /harengon/i,
	name : "Harengon",
	source : [["WBtW", 13], ["MotM", 22]],
	plural : "Harengons",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 },
	},
	skills : ["Perception"],
	addMod : [{ type : "skill", field : "Init", mod : "Prof", text : "I can add my proficiency bonus to my initiative rolls." }],
	scoresGeneric : true,
	action : [["reaction", "Lucky Footwork"], ["bonus action", "Rabbit Hop"]],
	features : {
		"rabbit hop" : {
			name : "Rabbit Hop",
			minlevel : 1,
			usages : "Proficiency bonus per ",
			usagescalc : "event.value = How('Proficiency Bonus');",
			recovery : "long rest",
			additional : ProficiencyBonusList.map(function(n) {
				var hopDistance = n * 5 + ' ft';
				return What("Unit System") === "metric" ? ConvertToMetric(hopDistance) : hopDistance;
			})
		}
	},
	trait : "Harengon"+
		"\n \u2022 Hare-Trigger: I can add my proficiency bonus to my initiative rolls."+
		"\n \u2022 Leporine Senses: I have proficiency in the Perception skill."+
		"\n \u2022 Lucky Footwork: As a reaction when I fail a Dexterity saving throw, I can add +1d4 to the result, potentially making it a success. I can't do this if I'm prone or my speed is 0."+
		"\n \u2022 Rabbit Hop: As a bonus action if my speed isn't 0, I can jump 5 ft times my Prof Bonus without provoking opportunity attacks. I can do this my Prof Bonus times per long rest."
};

// Magic Items
var WBtW_Sentient_Item_toNotes = function (sDescr, skipConflict) {
	var theR = desc(sDescr).replace(/\bf(oo|ee)t\b/ig, "ft")
		.replace(/you are/ig, "I am").replace(/\byou\b/ig, "I")
		.replace(/(by|of|to|for) I\b|\bI to|\bI an?\b/ig, "$1 me")
		.replace(/\bI (to|a|an)\b/ig, "me $1")
		.replace(/your/g, "my").replace(/Your/g, "My")
		.replace(/>>(.*?)<</g, function(a, match) { return match.toUpperCase(); });
	return skipConflict ? theR : theR + "\n\n" + sentientItemConflictTxt
}
MagicItemsList["bobbing lily pad"] = {
	name : "Bobbing Lily Pad",
	source : [["WBtW", 208]],
	type : "wondrous item",
	rarity : "very rare",
	attunement : true,
	description : "This 10-ft diameter vehicle float on water and has a walking, flying, and swimming speed of 20 ft, and it can hover. While I ride it, it moves according to my spoken directions. The lily pad can transport up to 600 lb, but moves at only half speed when carrying more than 300 lb.",
	descriptionFull : "This magic vehicle is a 10-foot-diameter leaf that floats on water. It has tendrils that propel it across land and across the water's surface (but not underwater), as well as through the air. It has a walking, flying, and swimming speed of 20 feet, and it can hover. It moves according to your spoken directions while you are riding it."+
	"\n   The lily pad can transport up to 300 pounds without hindrance. It can carry up to twice this weight, but it moves at half speed if it carries more than its normal capacity.",
}
MagicItemsList["chromatic rose"] = {
	name : "Chromatic Rose",
	source : [["WBtW", 208]],
	type : "wondrous item",
	rarity : "rare",
	description : "While I hold this magic rose, it grants me resistance to a damage type determined by its color. If I would take 10+ damage from a single source (after resistance), the rose disintegrates and I take no damage. As an action, I can destroy it by blowing on its petals, causing a 20-ft cone that deals 3d10 damage.",
	descriptionFull : "This magic rose comes in one of five colors, as noted in the table below. While a rose is held, it gains a harmless visual effect as indicated on the table."+
	"\n   While holding the rose by its stem, you gain resistance to damage of the type associated with the rose's color. If you would take more than 10 damage of this type from a single source (after applying the resistance), the rose disintegrates, and you take no damage instead."+
	"\n   As an action, you can blow the petals from the rose to produce a 20-foot cone of acid, lightning, poisonous gas, fire, or cold, as dictated by the rose's damage type. Each creature in the cone must make a DC 15 Constitution saving throw, taking 3d10 damage of the appropriate type on a failed save, or half as much damage on a successful one. Using this property destroys the rose."+
	toUni("\n Color\tVisual Effect\tDamage Type")+
	"\n Black\tDrips acid\tAcid"+
	"\n Blue\tCrackles with lightning\tLightning"+
	"\n Green\tIssues green gas\tPoison"+
	"\n Red\tWreathed in fire\tFire"+
	"\n White\tCovered in frost\tCold",
	allowDuplicates : true,
	action : [["action", "Destroy Chromatic Rose for Cone"]],
	choices : ["Black (acid)", "Blue (lightning)", "Green (poison)", "Red (fire)", "White (cold)"],
	choicesNotInMenu : true,
	"black (acid)" : {
		name : "Black Chromatic Rose",
		description : "While I hold this acid dripping rose, it grants me acid resistance. If I would take more than 10 acid damage from a single source (after resistance), the rose disintegrates and I take no damage. As an action, I can destroy it by blowing on its petals, causing a 20-ft cone that deals 3d10 acid damage, Con DC 15 halves.",
		dmgres : ["Acid"]
	},
	"blue (lightning)" : {
		name : "Blue Chromatic Rose",
		description : "While I hold this magic rose, it grants me lightning resistance. If I would take more than 10 lightning damage from a single source (after resistance), the rose disintegrates and I take no damage. As an action, I can destroy it by blowing on its petals, causing a 20-ft cone that deals 3d10 lightning damage, Con DC 15 halves.",
		dmgres : ["Lightning"]
	},
	"green (poison)" : {
		name : "Green Chromatic Rose",
		description : "While I hold this magic rose, it grants me poison resistance. If I would take more than 10 poison damage from a single source (after resistance), the rose disintegrates and I take no damage. As an action, I can destroy it by blowing on its petals, causing a 20-ft cone that deals 3d10 poison damage, Con DC 15 halves.",
		dmgres : ["Poison"]
	},
	"red (fire)" : {
		name : "Red Chromatic Rose",
		description : "While I hold this magic rose, it grants me fire resistance. If I would take more than 10 fire damage from a single source (after resistance), the rose disintegrates and I take no damage instead. As an action, I can destroy it by blowing on its petals, causing a 20-ft cone that deals 3d10 fire damage, Con DC 15 halves.",
		dmgres : ["Fire"]
	},
	"white (cold)" : {
		name : "White Chromatic Rose",
		description : "While I hold this magic rose, it grants me cold resistance. If I would take more than 10 cold damage from a single source (after resistance), the rose disintegrates and I take no damage. As an action, I can destroy it by blowing on its petals, causing a 20-ft cone that deals 3d10 cold damage, Con DC 15 halves.",
		dmgres : ["Cold"]
	}
}
MagicItemsList["dust of corrosion"] = {
	name : "Dust of Corrosion",
	source : [["WBtW", 209]],
	type : "wondrous item",
	rarity : "uncommon",
	description : "Once as an action, I can throw this dust in the air, affecting a 10-ft cube that extends from me. Objects made of nonmagical ferrous metal in the area corrode and turn to dust. Creatures in the area (partly) made out of ferrous metal take 4d8 necrotic damage and can make a DC 13 Con save to halve this damage.",
	descriptionFull : "As an action, you can throw this dust into the air, filling a 10-foot cube that extends out from you. Surfaces and objects made of nonmagical ferrous metal in the area instantly corrode and turn to dust, becoming useless and unsalvageable. Any creature in the area that is made wholly or partly out of ferrous metal must make a DC 13 Constitution saving throw, taking 4d8 necrotic damage on a failed save, or half as much damage on a successful one."+
	"\n   Found in a small packet, this dust is made from finely ground rust monster antennae. There is enough dust in each packet for one use.",
}
MagicItemsList["eldritch staff"] = {
	name : "Eldritch Staff",
	source : [["WBtW", 209]],
	type : "staff",
	rarity : "very rare",
	attunement : true,
	description : "This +1 quarterstaff has 10 charges, regaining 1d6+4 charges at dawn. 5% chance it's destroyed If I use its last charge. When I hit with it, I can deal +1d8 lightning damage per charge (max 3). As a reaction when I'm damaged, I can use 3 charges to teleport 60 ft and become invisible until my next turn starts, or I attack/cast.",
	descriptionLong : "This magic quarterstaff grants a +1 bonus to attack and damage rolls made with it. It has 10 charges and regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff is destroyed in an otherwise harmless burst of eldritch energy. When I hit with it in melee, I can expend up to 3 charges, dealing +1d8 lightning damage per charge. As a reaction when I'm damaged while holding the staff, I can use 3 charges to become invisible and teleport 60 ft to an empty space I can see. I then remain invisible until the start of my next turn or until I attack, cast a spell, or deal damage.",
	descriptionFull : "This staff can be wielded as a magic quarterstaff that grants a +1 bonus to attack and damage rolls made with it."+
	"\n   The staff has 10 charges and regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff is destroyed in an otherwise harmless burst of eldritch energy."+
	"\n   " + toUni("Eldritch Attack") + ". When you hit with a melee attack using the staff, you can expend up to 3 of its charges. For each charge you expend, the target takes an extra 1d8 lightning damage."+
	"\n   " + toUni("Eldritch Escape") + ". If you take damage while holding the staff, you can use your reaction to expend 3 of the staff's charges, whereupon you turn invisible and teleport yourself, along with any equipment you are wearing or carrying, up to 60 feet to an unoccupied space that you can see. You remain invisible until the start of your next turn or until you attack, cast a spell, or deal damage.",
	weight : 4,
	action : [["reaction", " (if damaged)"]],
	usages : 10,
	recovery : "dawn",
	additional : "regains 1d6+4",
	weaponOptions : [{
		baseWeapon : "quarterstaff",
		regExpSearch : /eldritch staff/i,
		name : "Eldritch Staff",
		source : [["WBtW", 209]],
		description : "Versatile (1d8); On hit, +1d8 lightning damage per charge (max 3)",
		modifiers : [1, 1],
		selectNow : true
	}]
}
MagicItemsList["ornithopter of flying"] = {
	name : "Ornithopter of Flying",
	source : [["WBtW", 212]],
	type : "wondrous item",
	rarity : "very rare",
	description : "This contraption can lift up to 300 lb in the air. It has a flying speed of 30 ft and moves according to my spoken directions while I am riding it. It can't hover. If the ornithopter loses its rider while airborne, it falls and can't fly again for 1d6 + 4 days. It is 8 ft long, has a 14-ft wingspan, and weighs 25 lb.",
	descriptionFull : "You can use this contraption to fly, provided your weight (including whatever you are wearing or carrying) doesn't exceed 300 pounds. The ornithopter has a flying speed of 30 feet, and it moves according to your spoken directions while you are riding it. It can't hover. If the ornithopter loses its rider while airborne, it falls and can't fly again for 1d6 + 4 days."+
	"\n   The ornithopter is 8 feet long, has a 14-foot wingspan, and weighs 25 pounds.",
	weight : 25
}
MagicItemsList["pixie dust"] = {
	name : "Pixie Dust",
	source : [["WBtW", 212]],
	type : "wondrous item",
	rarity : "uncommon",
	description : "Once as an action, I can sprinkle this dust on myself or another creature I can see within 5 ft. The recipient gains a flying speed of 30 ft and the ability to hover for 1 minute. If the creature is airborne when this effect ends, it falls safely to the ground, taking no damage and landing on its feet.",
	descriptionFull : "As an action, you can sprinkle this dust on yourself or another creature you can see within 5 feet of you. The recipient gains a flying speed of 30 feet and the ability to hover for 1 minute. If the creature is airborne when this effect ends, it falls safely to the ground, taking no damage and landing on its feet."+
	"\n   A small packet holds enough pixie dust for one use.",
}
MagicItemsList["potion of advantage"] = {
	name : "Potion of Advantage",
	source : [["WBtW", 212]],
	type : "potion",
	rarity : "uncommon",
	description : "Once as an action, I can drink this potion of a sparkling, golden mist that moves and pours like water or administer it to another. The consumer of the potion gains advantage on one ability check, attack roll, or saving throw of its choice that it makes within the next hour.",
	descriptionFull : "When you drink this potion, you gain advantage on one ability check, attack roll, or saving throw of your choice that you make within the next hour."+
	"\n   This potion takes the form of a sparkling, golden mist that moves and pours like water.",
}

var WBtW_Scissors_of_Shadow_Snipping_Full_Description = [
	"As an action, you make a few snips with these iron shears and cause the shadow of a Humanoid creature you can see within 5 feet of you to detach from its source. If the creature is unwilling to give up its shadow, it can make a DC 15 Charisma saving throw, retaining its shadow on a success. Whether or not the shadow is snipped, this property of the scissors can't be used again until the next dawn.",
	"The detached shadow is rooted to the spot where it was snipped until you use a bonus action to cause it to behave in one of the following ways, either of which is possible only if you can see the shadow:",
	"\u2022 You control the shadow's movements and can make the shadow move up to 30 feet across a solid or liquid surface, in any direction you choose (including along vertical surfaces), provided it remains within your sight at all times. The shadow is harmless and unable to be harmed, and it is invisible in darkness. It can't speak, and it doesn't require air, sleep, or nourishment.",
	"\u2022 You can relinquish control of the shadow, at which point it becomes autonomous and behaves as the DM wishes. It uses the shadow stat block in the Monster Manual, but its creature type is Fey instead of Undead. A creature whose Strength is reduced to 0 by this shadow's Strength Drain attack does not die but falls unconscious instead. The creature regains consciousness and all its Strength after finishing a short or long rest.",
	"A creature whose shadow has detached from it is cursed. If a shadowless creature is subjected to any spell that ends a curse, or if its detached shadow is reduced to 0 hit points, the detached shadow disappears, and the creature regains its normal shadow instantly."
];
MagicItemsList["scissors of shadow snipping"] = {
	name : "Scissors of Shadow Snipping",
	source : [["WBtW", 213]],
	type : "wondrous item",
	rarity : "rare",
	attunement : true,
	prerequisite : "Requires attunement by a fey or a spellcaster",
	prereqeval : function(v) { return v.isSpellcaster; }, // no fey player races exist that don't have racial spellcasting
	description : "As an action once per dawn, I can use these iron shears to detach the shadow of a Humanoid I can see within 5 ft. An involuntary target can make a DC 15 Cha save to resist. The detached shadow stays where it was snipped until I use a bonus action to control it or set it free. See Notes page.",
	descriptionFull : WBtW_Scissors_of_Shadow_Snipping_Full_Description.join("\n   "),
	toNotesPage : [{
		name : "Features",
		note : WBtW_Sentient_Item_toNotes(WBtW_Scissors_of_Shadow_Snipping_Full_Description, true)
	}],
	action : [["action", " (snip)"], ["bonus action", " (control)"]],
	usages : 1,
	recovery : "dawn"
}
var WBtW_Snicker_Snack_Full_Description = [
	"You gain a +3 bonus to attack and damage rolls made with this magic vorpal sword. In addition, the weapon ignores resistance to slashing damage. When you use this weapon to attack a creature that has at least one head and roll a 20 on the attack roll, you cut off one of the creature's heads. The creature dies if it can't survive without the lost head. A creature is immune to this effect if it is immune to slashing damage, it doesn't have or need a head, it has legendary actions, or the DM decides that the creature is too big for its head to be cut off with this weapon. Such a creature instead takes an extra 6d8 slashing damage from the hit.",
	"While attuned to Snicker-Snack, you have proficiency with greatswords, and you can use your Charisma modifier instead of your Strength modifier for attack and damage rolls made with the weapon.",
	">>Sentience<<. Snicker-Snack is a sentient, chaotic good greatsword with an Intelligence of 9, a Wisdom of 14, and a Charisma of 18. It has hearing and darkvision out to a range of 120 feet. It can speak, read, and understand Common, and its voice sounds silvery and melodic. Snicker-Snack craves the destruction of evil Dragons and urges you to seek out these creatures and slay them.",
	">>Personality<<. Snicker-Snack has a fickle personality. It ends its attunement to you if you miss on attack rolls with the weapon three times in a row. Each time you finish a long rest after that happens, you can attempt to regain the sword's trust by making a contested Charisma check against Snicker-Snack. If you win the contest, your attunement to the weapon is instantly restored. Your attunement to the weapon can't be restored in any other way."
];
MagicItemsList["snicker-snack"] = {
	name : "Snicker-Snack",
	source : [["WBtW", 213]],
	type : "weapon (greatsword)",
	rarity : "legendary",
	attunement : true,
	prerequisite : "Requires attunement by a non-evil creature",
	prereqeval : function(v) { return !/evil/i.test(What("Alignment")); },
	description : "I have a +3 bonus on attack and damage rolls with this sentient magic greatsword and can use Cha instead of Str. It ignores slashing resistance. On a 20 to hit, it cuts off " + (typePF ? "a head" : "one head, possibly killing it instantly") + ". If the target has legendary actions, no head, too wide neck, or is immune to slashing damage, it takes +6d8 damage instead. See Notes.",
	descriptionFull : WBtW_Snicker_Snack_Full_Description.join("\n   ").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
	weight : 6,
	toNotesPage : [{
		name : "Features",
		note : WBtW_Sentient_Item_toNotes(WBtW_Snicker_Snack_Full_Description)
	}],
	weaponProfs : [false, false ["greatsword"]],
	weaponOptions : [{
		baseWeapon : "greatsword",
		regExpSearch : /snicker.snack/i,
		name : "Snicker-Snack",
		source : [["WBtW", 213]],
		description : "Heavy, two-handed; Ignores slashing resistance; On 20 to hit: cut off head",
		modifiers : [3, 3],
		isSnickerSnack : true,
		selectNow : true
	}],
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (v.theWea.isSnickerSnack && fields.Mod === 1 && What('Cha') > What('Str')) {
					fields.Mod = 6;
				}
			},
			"I can use my Charisma modifier instead of my Strength modifier for attack and damage rolls made with Snicker-Snack."
		]
	}
}
var WBtW_Steel_Full_Description = [
	"You have a +2 bonus to attack and damage rolls made with this magic weapon.",
	">>Revivify<<. You can use an action to cast the revivify spell from the sword. You must touch the target with the sword to cast the spell. Once this property of the weapon is used, it can't be used again until the next dawn.",
	">>Sentience<<. Steel is a sentient, lawful good longsword with an Intelligence of 8, a Wisdom of 11, and a Charisma of 15. It can see and hear out to a range of 60 feet. The sword can speak, read, and understand Common and Draconic. It frets over your well-being while you are attuned to it, and it doesn't like to back down from a fight."
];
MagicItemsList["steel"] = {
	name : "Steel",
	source : [["WBtW", 214]],
	type : "weapon (longsword)",
	rarity : "very rare",
	attunement : true,
	prerequisite : "Requires attunement by a good-aligned creature",
	prereqeval : function(v) { return /good/i.test(What("Alignment")); },
	description : "This sentient longsword adds +2 to attack and damage rolls made with it. As an action once per dawn, I can use it to cast Revivify on a target I touch with the sword. Steel is lawful good and frets over my well-being and doesn't like to back down from a fight. It has Int 8, Wis 11, and Cha 15. See Notes page.",
	descriptionFull : WBtW_Steel_Full_Description.join("\n   ").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
	weight : 3,
	toNotesPage : [{
		name : "Features",
		note : WBtW_Sentient_Item_toNotes(WBtW_Steel_Full_Description)
	}],
	weaponOptions : [{
		baseWeapon : "longsword",
		regExpSearch : /['"]steel['"]/i,
		name : '"Steel"',
		source : [["WBtW", 214]],
		modifiers : [2, 2],
		selectNow : true
	}],
	usages : 1,
	recovery : "dawn",
	spellcastingBonus : [{
		name : "Once per dawn",
		spells : ["revivify"],
		selection : ["revivify"],
		firstCol : "oncelr"
	}]
}
MagicItemsList["woodcutter's axe"] = {
	name : "Woodcutter's Axe",
	source : [["WBtW", 214]],
	type : "weapon (greataxe)",
	rarity : "rare",
	description : "I have a +1 bonus to attack and damage rolls made with this magic greataxe. When I use this axe to make an attack against a plant (an ordinary plant or a creature with the Plant type) or a wooden object that isn't being worn or carried, the attack deals an extra 2d6 slashing damage on a hit.",
	descriptionFull : "You have a +1 bonus to attack and damage rolls made with this magic weapon."+
	"\n   When you use this axe to make an attack against a plant (an ordinary plant or a creature with the Plant type) or a wooden object that isn't being worn or carried, the attack deals an extra 2d6 slashing damage on a hit.",
	weight : 7,
	weaponOptions : [{
		baseWeapon : "greataxe",
		regExpSearch : /^(?=.*woodcutter)(?=.*axe).*$/i,
		name : "Woodcutter's Axe",
		source : [["WBtW", 214]],
		description : "Heavy, two-handed; +2d6 damage vs. plants/wood",
		modifiers : [1, 1],
		selectNow : true
	}]
}
var WBtW_Witchlight_Vane_Full_Description = [
	"This ornate rod is topped by a pair of butterfly wings and incorporates bits of red glass into its length. It weighs 3 pounds.",
	">>Magic Weapon<<. In the hands of one who is attuned to it, the vane can be wielded as a magic mace that grants a +3 bonus to attack and damage rolls made with it. In addition, the vane deals an extra 1d8 radiant damage on a hit.",
	">>Sense Mood<<. While the vane is inside the perimeter of the Witchlight Carnival, it can sense the mood of every creature in the carnival that has an Intelligence of 4 or higher. As an action, a creature attuned to the vane can use it to pinpoint the location of the happiest creature in the carnival.",
	"The butterfly shape at the top of the vane spins slowly clockwise when spirits in the carnival are generally high; if the general mood in the carnival is dour, the top of the vane spins slowly counterclockwise.",
	">>Sentience<<. The vane is a sentient, chaotic good wondrous item with an Intelligence of 11, a Wisdom of 14, and a Charisma of 14. It has hearing and normal vision out to a range of 30 feet, and it communicates by transmitting emotion to the creature attuned to it. Its purpose is to make sure everyone in the Witchlight Carnival is having a good time.",
	">>Additional Properties<<. The vane has the following additional properties:",
	"\u2022 The creature holding the vane has vulnerability to lightning damage.",
	"\u2022 The creature attuned to the vane can't be blinded, deafened, petrified, or stunned.",
	"\u2022 While carrying the vane, the creature attuned to it can cast the dancing lights, polymorph, or ray of frost spell as an action, requiring no spell components and using Charisma as the spellcasting ability. After the vane's polymorph spell is cast, roll a d8; on a roll of 3 or 8, the vane can't be used to cast this spell again until the next dawn."
];
MagicItemsList["witchlight vane"] = {
	name : "Witchlight Vane",
	source : [["WBtW", 27]],
	type : "wondrous item",
	rarity : "legendary",
	attunement : true,
	prerequisite : "Requires attunement by a mister light or his handpicked successor",
	description : "I can use this sentient ornate rod as a +3 mace that deals an extra 1d8 radiant damage on a hit. It can sense the mood of every creature in the carnival. As an action, I can pinpoint the happiest in the carnival. I can use it to cast spells. I can't be blinded, deafened, petrified, or stunned. See Notes page.",
	descriptionLong : "This sentient ornate rod is topped by a pair of butterfly wings and incorporates bits of red glass into its length. I can use it as a +3 mace that deals an extra 1d8 radiant damage on a hit. It can sense the mood of every creature in the carnival. As an action, I can use it to pinpoint the happiest in the carnival. I can use it to cast Dancing Light, Ray of Frost, and Polymorph. After I use it to cast Polymorph, roll a d8. On a roll of 3 or 8, the vane can't be used to cast Polymorph again until the next dawn. It makes me vulnerable to lightning damage, but I can't be blinded, deafened, petrified, or stunned. See Notes page.",
	descriptionFull : WBtW_Witchlight_Vane_Full_Description.join("\n   ").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
	weight : 3,
	toNotesPage : [{
		name : "Features",
		note : WBtW_Sentient_Item_toNotes(WBtW_Witchlight_Vane_Full_Description)
	}],
	action : [["action", " (find happiest)"]],
	weaponOptions : [{
		baseWeapon : "mace",
		regExpSearch : /^(?=.*witchlight)(?=.*vane).*$/i,
		name : "Witchlight Vane",
		source : [["WBtW", 27]],
		description : "+1d8 radiant damage",
		modifiers : [3, 3],
		selectNow : true
	}],
	extraLimitedFeatures : [{
		name : "Witchlight Vane [Polymorph] (25% chance use)",
		usages : 1,
		recovery : "dawn"
	}],
	spellcastingAbility : 6,
	spellcastingBonus : [{
		name : "At will",
		spells : ["dancing lights", "ray of frost"],
		selection : ["dancing lights", "ray of frost"],
	}, {
		name : "See Notes",
		spells : ["polymorph"],
		selection : ["polymorph"],
		firstCol : "SP"
	}],
	savetxt : {
		text : ["Vulnerable to lightning"],
		immune : ["blinded", "deafened", "petrified", "stunned"]
	}
}
var WBtW_Witchlight_Watch_Full_Description = [
	"This ornate pocket watch is fastened to the end of a gold chain. It glows with a faint golden light when opened, and it makes a soft ticking noise that can be heard only by the creature holding it. The face of the watch shows a miniature painting of the Witchlight Carnival ringed by a tiny henge, orbited at night by a mote of light small enough to slip through the eye of a needle. This light causes the henge to cast shadows, and these shadows allow the watch's owner to track the passage of time.",
	">>Carnival Setup and Takedown<<. The creature attuned to the watch can use an action to initiate the packing up or the unpacking of the Witchlight Carnival, provided the creature and the carnival are on the same plane of existence. In the span of 1 hour, all objects that are elements of the carnival are magically whisked about until everything is packed up and ready for travel, or unpacked and assembled. The watch has no effect on creatures, which can move about freely and safely while the carnival is being set up or taken down. Once the process of packing up or unpacking the carnival begins, it can't be stopped until the task is complete. When the watch is used to pack up or unpack the carnival, this property cannot be used again until 8 hours have elapsed.",
	">>Additional Properties<<. The pocket watch has the following additional properties:",
	"\u2022 While carrying the watch, the creature attuned to it can cast the fire bolt, invisibility, or message spell as an action, requiring no spell components and using Intelligence as the spellcasting ability. After the watch's invisibility spell is cast, roll a d8; on a roll of 3 or 8, the watch can't be used to cast this spell again until the next dawn.",
	"\u2022 The creature attuned to the watch gains 30 pounds. This extra weight vanishes when the attunement ends.",
	"\u2022 The creature attuned to the watch must eat and drink eight times the normal amount each day."
];
MagicItemsList["witchlight watch"] = {
	name : "Witchlight Watch",
	source : [["WBtW", 25]],
	type : "wondrous item",
	rarity : "legendary",
	attunement : true,
	prerequisite : "Requires attunement by a mister witch or his handpicked successor",
	description : "As an action once per 8 hours, I can use this ornate pocket watch to initiate the (un)packing of the carnival over the next hour. I can use it to cast Fire Bolt, Message, and Invisibility. After it casts Invisibility, I roll a d8. On a roll of 3 or 8, I can't cast this again until the next dawn. See Notes page.",
	descriptionLong : "This ornate pocket watch is fastened to the end of a gold chain and glows with a faint golden light when opened. As an action once per 8 hours, I can use this ornate pocket watch to initiate the (un)packing of the carnival over the next hour, provided the carnival and I are on the same plane of existence. I can use it to cast Fire Bolt, Message, and Invisibility. After I use it to cast Invisibility, roll a d8. On a roll of 3 or 8, it can't be used to cast Invisibility again until the next dawn. As long as I'm attuned to it, I'm 30 lb heavier and must eat and drink eight times the normal amount each day. See Notes page.",
	descriptionFull : WBtW_Witchlight_Watch_Full_Description.join("\n   ").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
	toNotesPage : [{
		name : "Features",
		note : WBtW_Sentient_Item_toNotes(WBtW_Witchlight_Watch_Full_Description, true)
	}],
	extraLimitedFeatures : [{
		name : "Witchlight Watch [initiate (un)packing]",
		usages : 1,
		recovery : "8 hrs"
	}, {
		name : "Witchlight Watch [Invisibility] (25% chance use)",
		usages : 1,
		recovery : "dawn"
	}],
	action : [["action", " [initiate (un)packing]"]],
	spellcastingAbility : 4,
	spellcastingBonus : [{
		name : "At will",
		spells : ["fire bolt", "message"],
		selection : ["fire bolt", "message"],
	}, {
		name : "See Notes",
		spells : ["invisibility"],
		selection : ["invisibility"],
		firstCol : "SP"
	}],
}
// [dupl_start] reprints from Xanathar's Guide to Everything
if (!SourceList.X) {
	MagicItemsList["cloak of many fashions"] = {
		name : "Cloak of Many Fashions",
		source : [["X", 136], ["WBtW", 208]],
		type : "wondrous item",
		rarity : "common",
		description : "As a bonus action while wearing this cloak, I can change its style, color, and apparent qualities. The cloak's weight doesn't change. Regardless of its appearance, the cloak can't be anything but a cloak. Although it can duplicate the appearance of other magic cloaks, it doesn't gain their magical properties.",
		descriptionFull : "While wearing this cloak, you can use a bonus action to change the style, color, and apparent quality of the garment. The cloak's weight doesn't change. Regardless of its appearance, the cloak can't be anything but a cloak. Although it can duplicate the appearance of other magic cloaks, it doesn't gain their magical properties.",
		action : [["bonus action", ""]]
	}
	MagicItemsList["dread helm"] = {
		name : "Dread Helm",
		source : [["X", 137], ["WBtW", 209]],
		type : "wondrous item",
		rarity : "common",
		description : "This fearsome steel helm makes my eyes glow red while I wear it.",
		descriptionFull : "This fearsome steel helm makes your eyes glow red while you wear it.",
		weight : 1
	}
	MagicItemsList["instrument of scribing"] = {
		name : "Instrument of Scribing",
		source : [["X", 138], ["WBtW", 212]],
		type : "wondrous item (instrument)",
		rarity : "common",
		description : "As an action while I'm playing this musical instrument, I can write a magical message on a nonmagical surface that I can see within 30 ft. The message can be up to 6 (or 7) words in a language I know and fades away after 24 hours or when Dispel Magic is cast on it. The instrument can be used like this 3 times per dawn.",
		descriptionFull : "This musical instrument has 3 charges. While you are playing it, you can use an action to expend 1 charge from the instrument and write a magical message on a nonmagical object or surface that you can see within 30 feet of you. The message can be up to six words long and is written in a language you know. If you are a bard, you can scribe an additional seven words and choose to make the message glow faintly, allowing it to be seen in nonmagical darkness. Casting Dispel Magic on the message erases it. Otherwise, the message fades away after 24 hours.\n   The instrument regains all expended charges daily at dawn.",
		attunement : true,
		weight : 3, // same as instrument of the bards
		choices : ["Bard (15-ft radius)", "Not a Bard (5-ft radius)"],
		selfChoosing : function () {
			return classes.known.bard ? "bard (15-ft radius)" : "not a bard (5-ft radius)";
		},
		"bard (15-ft radius)" : {
			name : "Instrument\u200A of Scribing",
			description : "As an action while I'm playing this musical instrument, I can write a magical message on a nonmagical surface that I can see within 30 ft. The message can be up to 7 words in a language I know and I can have it glow faintly. Dispel Magic erases it, otherwise it fades away after 24 hours. This can be used 3 times per dawn."
		},
		"not a bard (5-ft radius)" : {
			name : "Instrument\u200A\u200A of Scribing",
			description : "As an action while I'm playing this musical instrument, I can write a magical message on a nonmagical surface that I can see within 30 ft. The message can be up to 6 words in a language I know and fades away after 24 hours or when Dispel Magic is cast on it. The instrument can be used like this 3 times per dawn."
		}
	}
	MagicItemsList["orb of direction"] = {
		name : "Orb of Direction",
		source : [["X", 138], ["WBtW", 212]],
		type : "wondrous item",
		rarity : "common",
		description : "As an action while holding this orb, I can determine which way is north. This property functions only on the Material Plane.",
		descriptionFull : "While holding this orb, you can use an action to determine which way is north. This property functions only on the Material Plane.",
		weight : 3,
		action : [["action", ""]]
	}
	MagicItemsList["pipe of smoke monsters"] = {
		name : "Pipe of Smoke Monsters",
		source : [["X", 138], ["WBtW", 212]],
		type : "wondrous item",
		rarity : "common",
		description : "As an action while smoking this pipe, I can exhale a puff of smoke that takes the form of a single creature, such as a dragon, a flumph, or a froghemoth. The form must be small enough to fit in a 1-ft cube and loses its shape after a few seconds, becoming an ordinary puff of smoke.",
		descriptionFull : "While smoking this pipe, you can use an action to exhale a puff of smoke that takes the form of a single creature, such as a dragon, a flumph, or a froghemoth. The form must be small enough to fit in a 1-foot cube and loses its shape after a few seconds, becoming an ordinary puff of smoke."
	}
	MagicItemsList["pole of collapsing"] = {
		name : "Pole of Collapsing",
		source : [["X", 138], ["WBtW", 212]],
		type : "wondrous item",
		rarity : "common",
		description : "As an action while holding this 10 ft pole, I can speak a command word to have it collapse into a 1-ft-long rod. The poles weight doesn't change. As an action while holding the rod, I can speak a different command word to have it elongate back to a pole, but only as long as the surrounding space allows.",
		descriptionFull : "While holding this 10-foot pole, you can use an action to speak a command word and cause it to collapse into a 1-foot-long rod, for ease of storage. The poles weight doesn't change. You can use an action to speak a different command word and cause the rod to revert to a pole; however, the rod will elongate only as far as the surrounding space allows.",
		weight : 7,
		action : [["action", ""]]
	}
	MagicItemsList["talking doll"] = {
		name : "Talking Doll",
		source : [["X", 139], ["WBtW", 214]],
		type : "wondrous item",
		rarity : "common",
		attunement : true,
		description : "During a short rest with this doll within 5 ft of me, I can tell it to say up to 6 phrases of up to 6 words each, and set an observable condition under which the doll speaks each phrase. Conditions must happen within 5 ft of the doll. The doll can remember only 6 phrases and are lost when my attunement to it ends.",
		descriptionFull : "While this stuffed doll is within 5 feet of you, you can spend a short rest telling it to say up to six phrases, none of which can be more than six words long, and set an observable condition under which the doll speaks each phrase. You can also replace old phrases with new ones. Whatever the condition, it must occur within 5 feet of the doll to make it speak. For example, whenever someone picks up the doll, it might say, \"I want a piece of candy.\" The doll's phrases are lost when your attunement to the doll ends."
	}
	MagicItemsList["wand of scowls"] = {
		name : "Wand of Scowls",
		source : [["X", 140], ["WBtW", 214]],
		type : "wand",
		rarity : "common",
		description : "This wand has 3 charges, regain all at dawn. As an action, I can expend 1 of its charges and target a humanoid I can see within 30 ft. The target must succeed on a DC 10 Charisma save or be forced to scowl for 1 minute. If I expend the wand's last charge, roll a d20. On a 1, the wand transforms into a wand of smiles.",
		descriptionFull : "This wand has 3 charges. While holding it, you can use an action to expend 1 of its charges and target a humanoid you can see within 30 feet of you. The target must succeed on a DC 10 Charisma saving throw or be forced to scowl for 1 minute.\n   The wand regains all expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand transforms into a wand of smiles.",
		weight : 1,
		action : [["action", ""]],
		usages : 3,
		recovery : "dawn"
	}
	MagicItemsList["wand of smiles"] = {
		name : "Wand of Smiles",
		source : [["X", 140], ["WBtW", 214]],
		type : "wand",
		rarity : "common",
		description : "This wand has 3 charges, regain all at dawn. As an action, I can expend 1 of its charges and target a humanoid I can see within 30 ft. The target must succeed on a DC 10 Charisma save or be forced to smile for 1 minute. If I expend the wand's last charge, roll a d20. On a 1, the wand transforms into a wand of scowls.",
		descriptionFull : "This wand has 3 charges. While holding it, you can use an action to expend 1 of its charges and target a humanoid you can see within 30 feet of you. The target must succeed on a DC 10 Charisma saving throw or be forced to smile for 1 minute.\n   The wand regains all expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand transforms into a wand of scowls.",
		weight : 1,
		action : [["action", ""]],
		usages : 3,
		recovery : "dawn"
	}
} // dupl_end

// Beasts
CreatureList["giant swan"] = { // a giant eagle except that it has no talons, can attack twice with its beak as an action, and speaks Common and Auran
	name : "Giant Swan",
	nameAlt : ["Swan, Giant"],
	source : [["WBtW", 38]],
	size : 2, //Large
	type : "Beast",
	alignment : "Neutral Good",
	ac : 13,
	hp : 26,
	hd : [4, 10],
	speed : "10 ft, fly 80 ft",
	scores : [16, 17, 13, 8, 14, 10],
	skills : {
		"perception" : 4
	},
	senses : "Adv. on Wis (Perception) checks using sight",
	passivePerception : 14,
	languages : "Common and Auran",
	challengeRating : "1",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
		name : "Beak",
		ability : 1,
		damage : [1, 6, "piercing"],
		range : "Melee (5 ft)",
		description : "Two beak attack as an Attack action"
	}],
	actions : [{
		name : "Multiattack",
		description : "The swan makes two beak attacks."
	}],
	traits : [{
		name : "Keen Sight",
		description : "The swan has advantage on Wisdom (Perception) checks that rely on sight."
	}]
}
CreatureList["giant dragonfly"] = {
	name : "Giant Dragonfly",
	nameAlt : ["Dragonfly, Giant"],
	source : [["WBtW", 234]],
	size : 2,
	type : "Beast",
	alignment : "Unaligned",
	ac : 16,
	hp : 22,
	hd : [4, 10],
	speed : "10 ft, fly 60 ft",
	scores : [15, 18, 11, 3, 10, 3],
	passivePerception : 10,
	challengeRating : "1/2",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 2,
		damage : [1, 6, "piercing"],
		range : "Melee (5 ft)",
		description : ""
	}],
	traits : [{
		name : "Drone",
		description : "When it beats its wings, the dragonfly emits a loud droning sound that can be heard out to a range of 120 ft."
	}],
	actions : [{
		name : "Uncanny Dodge",
		description : "As a reaction, the dragonfly can halve the damage it takes from an attack made against it, provided it can see the attacker."
	}]
}
CreatureList["giant snail"] = {
	name : "Giant Snail",
	nameAlt : ["Snail, Giant"],
	source : [["WBtW", 234]],
	size : 2,
	type : "Beast",
	alignment : "Unaligned",
	ac : 11,
	hp : 22,
	hd : [4, 10],
	speed : "10 ft, climb 10 ft",
	scores : [15, 3, 11, 3, 10, 3],
	senses : "Darkvision 60 ft",
	passivePerception : 10,
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Slam",
		ability : 1,
		damage : [1, 6, "bludgeoning"],
		range : "Melee (5 ft)",
		description : ""
	}],
	traits : [{
		name : "Salt Osmosis",
		description : "Whenever the snail starts its turn in contact with a pound or more of salt, it takes 1d4 necrotic damage. Using an action to sprinkle a pound of salt on the snail deals 1d4 necrotic damage to it immediately and another 1d4 necrotic damage to it at the start of its next turn (after which the salt rubs off), provided the snail has not withdrawn into its shell."
	}],
	actions : [{
		name : "Shell Defense",
		description : "As an action, the snail withdraws into its shell, gaining a +4 bonus to its AC until it emerges. It can emerge from its shell as a bonus action on its turn."
	}]
}
