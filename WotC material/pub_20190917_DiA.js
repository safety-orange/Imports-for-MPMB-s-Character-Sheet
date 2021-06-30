var iFileName = "pub_20190917_DiA.js";
RequiredSheetVersion("13.0.7");
// This file adds all material from the Baldur's Gate: Descent into Avernus adventure to MPMB's Character Record Sheet

// Define the source
SourceList["DiA"] = {
	name : "Baldur's Gate: Descent into Avernus [background, items]",
	abbreviation : "DiA",
	group : "Adventure Books",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/baldursgate_descent",
	date : "2019/09/17"
};

BackgroundList["faceless"] = {
	regExpSearch : /faceless/i,
	name : "Faceless",
	source : ["DiA", 203],
	skills : ["Deception", "Intimidation"],
	gold : 10,
	languageProfs : [1],
	toolProfs : ["Disguise kit"],
	equipleft : [
		["Disguise kit", "", 3]
	],
	equipright : [
		["Costume", "", 4],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Dual Personalities",
	trait : [
		"I'm earnest and uncommonly direct.",
		"I strive to have no personality\u2014it's easier to forget what's hardly there.",
		"I treasure a memento of the person or instance that set me upon my path.",
		"I sleep just as much as I need to and on an unusual schedule.",
		"I think far ahead, a detachedness often mistaken for daydreaming.",
		"I cultivate a single obscure hobby or study and eagerly discuss it at length.",
		"I am ever learning how to be among others\u2014when to stay quiet, when to laugh.",
		"I behave like an extreme opposite of my persona."
	],
	ideal : [
		["Justice",
			"Justice. Place in society shouldn't determine one's access to what is right. (Good)"
		],
		["Security",
			"Security. Doing what must be done can't bring the innocent to harm. (Lawful)"
		],
		["Confusion",
			"Confusion. Deception is a weapon. Strike from where your foes won't expect. (Chaotic)"
		],
		["Infamy",
			"Infamy. My name will be a malediction, a curse that fulfills my will. (Evil)"
		],
		["Incorruptibility",
			"Incorruptibility. Be a symbol, and leave your flawed being behind. (Any)"
		],
		["Anonymity",
			"Anonymity. It's my deeds that should be remembered, not their instrument. (Any)"
		]
	],
	bond : [
		"I do everything for my family. My first thought is keeping them safe.",
		"What I do, I do for the world. The people don't realize how much they need me.",
		"I've seen too many in need. I must not fail them as everyone else has.",
		"I stand in opposition, lest the wicked go unopposed.",
		"I am exceptional. I do this because no one else can, and no one can stop me.",
		"I do everything for those who were taken from me."
	],
	flaw : [
		"I am callous about death. It comes to us all eventually.",
		"I never make eye contact or hold it unflinchingly.",
		"I have no sense of humor. Laughing is uncomfortable and embarrassing.",
		"I overexert myself, sometimes needing to recuperate for a day or more.",
		"I think far ahead, a detachedness often mistaken for daydreaming.",
		"I see morality entirely in black and white."
	],
	extra : [
		"Select a Faceless Persona",
		"Flamboyant spy or brigand",
		"Incarnation of nation or people",
		"Scoundrel with masked guise",
		"Vengeful spirit",
		"Manifestation of deity or faith",
		"Beauty accented with makeup",
		"Impersonation of another hero",
		"Embodiment of a school of magic",
		"Warrior with distinctive armor",
		"Fear-inspiring monstrous disguise"
	]
};
BackgroundFeatureList["religious community"] = {
	description : "I'm tightly connected with the religious community of the city. I know if a deity has a following in the city, any places that faith openly congregates, and the neighborhoods those faithful typically inhabit. While this isn't remarkable for most of the city's larger faiths, keeping track of the hundreds of religions newcomers bring with them is no mean feat.",
	source : [["DiA", 202], ["ALbackground", 0]]
};
BackgroundFeatureList["long-lost heir"] = {
	description : "I can pose as the long-lost heir to some imaginary or dead lineage. I'm well-versed in the mannerisms and idiosyncrasies of nobility, imitating them smoothly enough to convince anybody of my authenticity. However, any true test is likely to reveal my deception. I can enter places that only nobility can and might be able to bluff other through with me.",
	source : [["DiA", 202], ["ALbackground", 0]]
};
BackgroundFeatureList["criminal connections"] = {
	description : "In a big city, crime is just another business. As a result, I can arrange a meeting with a low-ranking operative of nearly any business, noble family, crew, government institution, or guild. This operative will hear me out and, at their discretion, take my information or request up their chain of command. These meetings almost always occur in shady venues.",
	source : [["DiA", 202], ["ALbackground", 0]]
};
BackgroundFeatureList["backstage pass"] = {
	description : "I know that most of the real business, in entertainment or otherwise, happens behind the scenes. It's easy for me to case what sorts of audiences attend a venue. After a successful performance, I may meet an enthusiastic member of the crowd\u2014someone of an occupation or social class that frequents the venue, who is delighted to talk with me, and to listen.",
	source : [["DiA", 202], ["ALbackground", 0]]
};
BackgroundFeatureList["dual personalities"] = {
	description : "The world knows me as my persona and those who seek to learn more about me find themselves stymied by my disguise. I'm unidentifiable as my true self while disguised and behaving as my persona, allowing me to change appearances between my two personalities as I wish. My deception might lose its effectiveness if someone realize the connection.",
	source : [["DiA", 204], ["ALbackground", 0]]
};
BackgroundFeatureList["social vengeance"] = {
	description : "I've lived my whole life amongst the lower class of the city, seeing the upper class flaunt their wealth while my hardworking neighbors struggled. I know their eagerness to give the wealthy their comeuppance. I can convince 1d6 commoners in a busy area in 2d10 min" + (typePF ? "utes" : "") + " to perform a non-illegal act that inconveniences a guard, noble, or wealthy looking individual.",
	source : [["DiA", 204], ["ALbackground", 0]]
};
BackgroundFeatureList["professional courtesy"] = {
	description : "I conduct my business in one of the city's districts and I'm familiar with its local crews, their territories, and inter-crew politics. When I need information about something in my district, I can learn the local gossip from crew members. Within my district, I can gain entry to nearly any bank, guild hall, place of business, workhouse, or crew meeting place.",
	source : [["DiA", 205], ["ALbackground", 0]]
};
BackgroundFeatureList["the real city"] = {
	description : "I know the city that most of its inhabitants ignore, the dog-eat-dog world of the homeless and unfortunate. I know where to go for anonymity. In these slums and alley camps, I can get a damp bed and a bad meal, but also a degree of privacy and no questions asked. Living here isn't comfortable, but it's unlikely any will find me\u2014and I can stay as long as I want.",
	source : [["DiA", 205], ["ALbackground", 0]]
};
BackgroundFeatureList["patriar"] = {
	description : "As a member of an elite family of the city, I may pass through without paying tolls, enter the better part of town and stay there after dark, mingle among the nobility unquestioned, and impress those looking for wealthy patrons. My word is accepted over others' without question, and any corruption among guards or officials tends to work in my favor.",
	source : [["DiA", 206], ["ALbackground", 0]]
};
BackgroundFeatureList["immigrant experience"] = {
	description : "Even after my short time in the city, I've learned it holds more walls and gates than those the guards patrol. I'm known within the city's immigrant communities. Should I ever need to learn about a foreign land, people, tradition, or history, I know where to find someone with firsthand experience\u2014likely somewhere in the poorer part of town.",
	source : [["DiA", 206], ["ALbackground", 0]]
};
BackgroundFeatureList["rumor monger"] = {
	description : "Via my personal rumor mill and published articles, I can surmise a great deal about the secrets of the city's inhabitants\u2014necromancy, spying, smuggling, dealing in magical wares. Whenever a noteworthy crime or happening occurs in the city, I immediately have a list of 1d4 suspects who, if they aren't involved, have a strong chance of knowing who is.",
	source : [["DiA", 206], ["ALbackground", 0]]
};
BackgroundFeatureList["smuggler's sense"] = {
	description : "I'm familiar with the docks of the city, the movement of inspectors and tax collectors, the way cargo and coin flows, the movements of the harbor guards, and how to operate the port's machinery for moving wares. As a result, it's easy for me to hustle a load of cargo ashore or see such a cargo onto a cooperative ship without attracting suspicion or taxation.",
	source : [["DiA", 207], ["ALbackground", 0]]
};
BackgroundFeatureList["city guard: lower city (the flaming fists)"] = {
	description : "I'm required to take a regular shift patrolling the lower or outer city and I must report for training once every ten days. In return, I have access to the guard's fortresses and a direct line of communication with officers and other soldiers. I can also pass through the city's gates and go to the upper city without question, but can't bring guests to the upper city.",
	source : [["DiA", 207], ["ALbackground", 0]]
};
BackgroundFeatureList["city guard: upper city (the watch)"] = {
	description : "I'm required to take a regular shift patrolling the upper city or its gates and I must report for training once every ten days. In return, I have access to the citadel and a direct line of communication with officers and officials. My word carries considerable weight. I can escort people into the upper city unimpeded, but I'm regarded with suspicion in the lower city.",
	source : [["DiA", 207], ["ALbackground", 0]]
};
BackgroundFeatureList["loyalty test"] = {
	description : "I can spot the behaviors common to corrupt guards and military officers a mile away. While this doesn't equate to evidence, and my sense isn't foolproof, my instinct proves a starting point to determine who might take a bribe, who might turn a blind eye to a crime, who might have criminal connections, or who might fulfill their duties strictly by the book.",
	source : [["DiA", 207], ["ALbackground", 0]]
};
BackgroundFeatureList["gateguide connection"] = {
	description : "I've associated with enough of the Gateguides crew that I know their torch-based code. From the lighting, placement, and type of torch arranged on or near a structure, I can gather information about those who live or do business there\u2014if they deal fairly with strangers, have guild or government connections, or their standing with the Gateguides.",
	source : [["DiA", 207], ["ALbackground", 0]]
};

CreatureList["abyssal chicken"] = {
	name : "Abyssal Chicken",
	source : ["DiA", 97],
	size : 5,
	type : "Fiend",
	subtype : "demon",
	companion : "familiar_not_al",
	alignment : "Chaotic Evil",
	ac : 13,
	hp : 10,
	hd : [3, 4],
	speed : "30 ft, fly 30 ft",
	scores : [6, 14, 13, 4, 9, 5],
	damage_immunities : "cold, fire, lightning",
	condition_immunities : "blinded, poisoned",
	senses : "Blindsight 30 ft (blind beyond this radius)",
	passivePerception : 9,
	languages : "understands Abyssal but can't speak",
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 2,
	attacks : [{
		name : "Bite",
		ability : 2,
		damage : [1, 4, "piercing"],
		range : "Melee (5 ft)",
		description : "One bite and one claws attack as an Attack action"
	}, {
		name : "Claws",
		ability : 2,
		damage : [1, 6, "piercing"],
		range : "Melee (5 ft)",
		description : "One claws and one bite attack as an Attack action"
	}],
	traits : [{
		name : "Bad Flier",
		description : "The abyssal chicken falls at the end of a turn if it's airborne and the only thing holding it aloft is its flying speed."
	}]
}

MagicItemsList["battle standard of infernal power"] = {
	name : "Battle Standard of Infernal Power",
	source : ["DiA", 223],
	type : "wondrous item",
	rarity : "very rare",
	description : "While holding the banner, my weapon attacks and those of my allies within 300 ft of me count as magical for the purposes of overcoming damage immunities and resistances. The standard has a small unopenable cage with an incapacitated quasit within. It turns to smoke if killed or released and a new one appears.",
	descriptionLong : "While holding the banner, my weapon attacks and those of my allies within 300 ft of me count as magical for the purposes of overcoming damage immunities and resistances.\nThis hell-forged battle standard is made of infernal iron and fitted with a small, unopenable cage containing a quasit. The trapped quasit is incapacitated, and its cage has AC 19, 10 hit points, and immunity to all types of damage except force damage. If killed or somehow released, the quasit disappears in a cloud of smoke, and a new one appears in the cage, provided the cage is intact.",
	descriptionFull : "This hell-forged battle standard is made of infernal iron and fitted with a small, unopenable cage containing a quasit. The trapped quasit is incapacitated, and its cage has AC 19, 10 hit points, and immunity to all types of damage except force damage. If killed or somehow released, the quasit disappears in a cloud of smoke, and a new one appears in the cage, provided the cage is intact.\n   While you hold the banner, your weapon attacks and those of all allied creatures within 300 feet of you count as magical for the purposes of overcoming damage immunities and resistances.",
	attunement : true,
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.isSpell && !v.thisWeapon[1] && !v.theWea.isMagicWeapon && !(/counts as( a)? magical/i).test(fields.Description)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Counts as magical';
				};
			},
			"My weapon attacks count as magical for overcoming resistances and immunities."
		]
	}
}
MagicItemsList["gauntlets of flaming fury"] = {
	name : "Gauntlets of Flaming Fury",
	source : ["DiA", 223],
	type : "wondrous item",
	rarity : "rare",
	description : "While wearing both these steel gauntlets, any weapons I grasp with them count as magical. As a bonus action once per dawn, I can use them to envelop one or two melee weapons in my grasp with magical flames, causing them to deal an extra 1d6 fire damage on a hit. This last until I sheath or let go of a weapon.",
	descriptionFull : "While you wear both of these steel gauntlets, any non- magical weapon you grasp with either gauntlet is treated as a magic weapon. As a bonus action, you can use the gauntlets to cause magical flames to envelop one or two melee weapons in your grasp. Each flaming weapon deals an extra 1d6 fire damage on a hit. The flames last until you sheath or let go of either weapon. Once used, this property can't be used again until the next dawn.",
	attunement : true,
	action : [["bonus action", ""]],
	usages : 1,
	recovery : "dawn",
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.isSpell && !v.isNaturalWeapon && !v.thisWeapon[1] && !v.theWea.isMagicWeapon && !(/dancing|counts as( a)? magical/i).test(fields.Description)) {
					fields.Description += (fields.Description ? '; ' : '') + 'Counts as magical';
				};
			},
			"Any nonmagical weapons that I grasp with my Gauntlets of Flaming Fury count as magical for overcoming resistances and immunities."
		]
	}
}
MagicItemsList["fane-eater"] = {
	name : "Fane-Eater",
	source : ["DiA", 223],
	type : "weapon (battleaxe)",
	rarity : "legendary",
	description : "This battleaxe adds a +3 bonus to attack and damage rolls made with it. When I use it to attack a creature and roll a 20 on the attack roll, the creature takes an extra 2d8 necrotic damage, and I regain a number of hit points equal to the necrotic damage taken.",
	descriptionFull : "Fane-Eater is a battleaxe belonging to Arkhan the Cruel.\n   You gain a +3 bonus to attack and damage rolls with Fane-Eater. If you attack a creature with this weapon and roll a 20 on the attack roll, the creature takes an extra 2d8 necrotic damage, and you regain a number of hit points equal to the necrotic damage taken.",
	attunement : true,
	prerequisite : "Requires attunement by an evil cleric or paladin",
	prereqeval : function(v) { return (classes.known.paladin || classes.known.cleric) && (/evil/i).test(What("Alignment")); },
	weight : 4,
	weaponsAdd : ["Fane-Eater"],
	weaponOptions : {
		baseWeapon : "battleaxe",
		regExpSearch : /fane-eater/i,
		name : "Fane-Eater",
		source : ["DiA", 223],
		description : "Versatile (1d10); On 20 to hit: +2d8 necrotic damage and I heal same amount"
	}
}
MagicItemsList["hellfire weapon"] = {
	name : "Hellfire Weapon",
	nameTest : "Hellfire",
	source : ["DiA", 223],
	type : "weapon (any)",
	rarity : "uncommon",
	description : "This weapon is fashioned from infernal iron and traced with veins of hellfire that shed dim light in a 5-ft radius. Any humanoid killed by an attack made with this weapon has its soul funneled into the River Styx, where it's reborn instantly as a lemure devil.",
	descriptionFull : "This weapon is fashioned from infernal iron and traced with veins of hellfire that shed dim light in a 5-foot-radius.\n   Any humanoid killed by an attack made with this weapon has its soul funneled into the River Styx, where it's reborn instantly as a lemure devil.",
	chooseGear : {
		type : "weapon",
		prefixOrSuffix : "suffix",
		descriptionChange : ["replace", "weapon"]
	},
	calcChanges : {
		atkAdd : [
			function (fields, v) {
				if (!v.theWea.isMagicWeapon && (/hellfire/i).test(v.WeaponText)) {
					v.theWea.isMagicWeapon = true;
					fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + 'Humanoids killed lose their soul';
				}
			},
			'If I include the word "Hellfire" in a the name of a weapon, it will be treated as the magic weapon Hellfire Weapon. Any humanoid killed by the weapon has its soul funneled into the River Styx, and are instantly reborn as a lemure devil.'
		]
	}
}
MagicItemsList["helm of devil command"] = {
	name : "Helm of Devil Command",
	source : ["DiA", 223],
	type : "wondrous item",
	rarity : "very rare",
	description : "This helm has 3 charges, regaining all 24 h after using the last. I can use 1 charge to cast Dominate Monster on a devil, but it knows I tried to charm it. It allows me to know the exact location of all devils within 1000 ft and I can telepathically communicate with one of them at a time, or broadcast my thoughts to all.",
	descriptionLong : "This bulky, eyeless helmet resizes to fit my head and allows me to see out of it as if I was not wearing it. It has 3 charges, regaining all 24 hours after using the last charge. I can use 1 charge to cast Dominate Monster on a devil, but if it can see me do so, the devil knows I tried to charm it. The helm also allows me to know the exact location of all devils within 1000 ft and I can telepathically communicate with one of them at a time, or broadcast my thoughts to all within range, but they have no special means of replying. If I use its dominating power while I'm on the Nine Hells, there is a chance it attracts a narzugon.",
	descriptionFull : "This bulky, eyeless helmet is made for a pit fiend but magically resizes to fit the heads of other wearers.\n   While wearing the helm, you can see out of it as though you weren't wearing it. In addition, you know the exact location and type of all devils within 1,000 feet of you. You can telepathically communicate with a devil within range, or you can broadcast your thoughts to all devils within range. The devils receiving your broadcasted thoughts have no special means of replying to them.\n   The helm has 3 charges. As an action, you can expend 1 charge to cast dominate monster (save DC 21), which affects devils only. (The spell fails and the charge is wasted if you target any creature that's not a devil.) If a devil can see you when you cast this spell on it, the devil knows you tried to charm it. The helm regains all its charges 24 hours after its last charge is expended.\n   If you are not a devil, using the helm's dominate monster property in the Nine Hells has a 20 percent chance of attracting a narzugon, which arrives on the back of a nightmare mount in 1d4 hours. The narzugon tries to recover the helm, killing you if necessary to obtain it. If it gets the helm, the narzugon tries to deliver it to its infernal master.",
	attunement : true,
	prerequisite : "Requires attunement by a creature that can speak infernal",
	prereqeval : function(v) { return (/infernal/i).test(v.languageProfs); },
	usages : 3,
	recovery : "Special",
	fixedDC : 21,
	spellFirstColTitle : "Ch",
	spellcastingBonus : {
		name : "1 charge",
		spells : ["dominate monster"],
		selection : ["dominate monster"],
		firstCol : 1
	},
	spellChanges : {
		"dominate monster" : {
			description : "Devil save or charmed, follows telepathic commands, 1 a for complete control; save on dmg",
			changes : "Can only affect a devil."
		}
	}
}
MagicItemsList["infernal puzzle box"] = {
	name : "Infernal Puzzle Box",
	source : ["DiA", 224],
	type : "wondrous item",
	rarity : "uncommon",
	description : "This cube-shaped container is around 15 cm on a side and is composed of airtight, interlocking parts. It can't be magically opened and is immune to all damage. I can figure out how to open it in 1 hour with a DC 30 Investigation check. If failed by 5 or more, I take 12d6 psychic damage, Wis DC 18 halves.",
	descriptionLong : "This cube-shaped container is around 15 cm on a side and is composed of airtight, interlocking parts made from materials found in the Nine Hells. It can't be magically opened and is immune to all damage while shut. Every infernal puzzle box has an unique mundane way of opening it. I can figure out how to open this box in 1 hour with a DC 30 Investigation check, but if I fail this check by 5 or more, I take 12d6 psychic damage, Wisdom save DC 18 halves. Once I figure out the trick or sequence of steps needed to open this box, I can open it as an action, allowing access to the box's contents.",
	descriptionFull : "An infernal puzzle box is a cube-shaped container 5 to 6 inches on a side, composed of airtight, interlocking parts made from materials found in the Nine Hells. Most of these boxes are made of infernal iron, though some are carved from bone or horn. Infernal puzzle boxes are used to safeguard diabolical contracts signed between devils and mortals, even after the terms of these contracts are fulfilled. An empty infernal puzzle box weighs 3 pounds regardless of the materials used to fashion it.\n   When an object small enough to fit inside an infernal puzzle box is placed in it, the container magically seals shut around the object, and no magic can force the box open. The sealed box becomes immune to all damage as well. Every infernal puzzle box is constructed with a unique means of opening it. The trick to solving the puzzle is always mundane, never magical. Once a creature figures out the trick or sequence of steps needed to open a particular infernal puzzle box, that creature can open the box as an action, allowing access to the box's contents.\n   A creature that spends 1 hour holding an infernal puzzle box while trying to open it can make a DC 30 Intelligence (Investigation) check. If the check succeeds, the creature figures out the trick or sequence of steps needed to open the box. If the check fails by 5 or more, the creature must make a DC 18 Wisdom saving throw, taking 42 (12d6) psychic damage on a failed save, or half as much damage on a successful one.",
	weight : 3
}
// dupl_start
if (!SourceList.MToF) {
	MagicItemsList["infernal tack"] = {
		name : "Infernal Tack",
		source : [["MToF", 167], ["DiA", 224]],
		type : "wondrous item",
		rarity : "legendary",
		notLegalAL : true,
		description : "While wearing the spurs of this set, the nightmare equipped with the bridle, bit, reins, saddle, and stirrups is under my command. As an action, I can have it appear in 20 ft at the start of my next turn. It acts on as my ally on my initiative, remains for 1 day, until I or it dies, or I dismiss it as an action. If it dies, it reforms in 24 h.",
		descriptionLong : "This tack consists of a bridle, bit, reins, saddle, stirrups, and spurs. A nightmare equipped with the tack serves whoever wears the spurs until the wearer dies or the tack is removed. As an action, I can clash the spurs together or scrape them through blood, causing the nightmare to appear within 20 ft at the start of my next turn. It acts as my ally on my initiative count, remains for 1 day, until I or it dies, or until I dismiss it as an action. If it dies, it reforms within 24 hours, after which I can summon it again. The tack doesn't create a nightmare from thin air; one must first be subdued so the tack can be placed on it.",
		descriptionFull : "A narzugon binds a nightmare to its service with infernal tack, which consists of a bridle, bit, reins, saddle, stirrups, and spurs. A nightmare equipped with infernal tack must serve whoever wears the spurs until the wearer dies or the tack is removed.\n   You can use an action to call a nightmare equipped with infernal tack by clashing the spurs together or scraping them through blood. The nightmare appears at the start of your next turn, within 20 feet of you. It acts as your ally and takes its turn on your initiative count. It remains for 1 day, until you or it dies, or until you dismiss it as an action. If the nightmare dies, it reforms in the Nine Hells within 24 hours, after which you can summon it again.\n   The tack doesn't conjure a nightmare from thin air; one must first be subdued so the tack can be placed on it. No nightmare accepts this forced servitude willingly, but some eventually form strong loyalties to their masters and become true partners in evil.",
		attunement : true,
		weight : 26, // riding saddle (25) + bit and bridle (1)
		prerequisite : "Requires attunement by a creature of evil alignment",
		prereqeval : function(v) { return (/evil/i).test(What("Alignment")); },
		action : [["action", ""]],
		creaturesAdd : [["Nightmare", true,
		function (AddRemove, prefix) {
			if (!AddRemove) return;
			// Show equipment section
			CompOptions(prefix, ["visible", "comp.eqp"], true);
			// Add equipment when added
			var equip = ["bit and bridle", "riding"];
			for (var i = 0; i < equip.length; i++) {
				var gear = GearList[equip[i]];
				if (!gear) continue;
				AddToInv(prefix + "comp", "l", gear.name, gear.amount, gear.weight, "", false, false, false, false);
			}
			// Add notes
			var note = "I can use an action to call a nightmare equipped with infernal tack by clashing the spurs together or scraping them through blood. The nightmare appears at the start of my next turn, within 20 ft of me.\nThe nightmare acts as my ally and takes its turn on my initiative count. It remains for 1 day, until I or it dies, or until I dismiss it as an action. If the nightmare dies, it reforms in the Nine Hells within 24 hours, after which I can summon it again.";
			Value(prefix + "Comp.eqp.Notes", What("Unit System") === "metric" ? ConvertToMetric(note, 0.5) : note);
		}]]
	}
} // dupl_end
MagicItemsList["matalotok"] = {
	name : "Matalotok",
	source : ["DiA", 224],
	type : "weapon (warhammer)",
	rarity : "legendary",
	description : "This ancient warhammer, the Frost Father, was fashioned by Thrym. It is frigid to the touch and wreathed in mist. I'm immune to cold damage while holding it. Whenever I deal damage to a creature with it, it radiates a burst of intense cold in a 30-ft radius sphere, dealing 3d6 cold damage to all creatures within.",
	descriptionFull : "Matalotok, the Frost Father, is an ancient hammer fashioned by Thrym, the god of frost giants. The favored weapon of the demon lord Kostchtchie, Matalotok is frigid to the touch and wreathed in mist.\n   You are immune to cold damage while holding Matalotok. Whenever it deals damage to a creature, the hammer radiates a burst of intense cold in a 30-foot-radius sphere. Each creature in that area takes 10 (3d6) cold damage.",
	attunement : true,
	weight : 2,
	weaponsAdd : ["Matalotok"],
	weaponOptions : {
		baseWeapon : "warhammer",
		regExpSearch : /matalotok/i,
		name : "Matalotok",
		source : ["DiA", 224],
		description : "Versatile (1d10); On hit: all in 30-ft radius take 3d6 cold damage"
	},
	savetxt : { immune : ["cold"] }
}
MagicItemsList["obsidian flint dragon plate"] = {
	name : "Obsidian Flint Dragon Plate",
	source : ["DiA", 224],
	type : "armor (plate)",
	rarity : "legendary",
	description : "I gain a +2 bonus to AC and resistance to poison damage while I wear this plate armor. In addition, I gain advantage on ability checks and saving throws made to avoid or end the grappled condition on myself.",
	descriptionFull : "You gain a +2 bonus to AC and resistance to poison damage while you wear this armor. In addition, you gain advantage on ability checks and saving throws made to avoid or end the grappled condition on yourself.",
	armorAdd : "Obsidian Flint Dragon Plate",
	armorOptions : {
		regExpSearch : /^(?=.*obsidian)(?=.*flint)(?=.*dragon)(?=.*plate).*$/i,
		name : "Obsidian Flint Dragon Plate",
		source : ["DiA", 224],
		type : "heavy",
		ac : 20,
		stealthdis : true,
		weight : 65,
		strReq : 15
	},
	dmgres : ["Poison"],
	savetxt : { adv_vs : ["grappled"] }
}
var DiA_shieldOfTheHiddenLordFullDescription = [
	"The Shield of the Hidden Lord is of celestial origin and serves as a prison for the pit fiend Gargauth, whose mortal followers revere it as a god. Over time, Gargauth's evil has warped the shield's appearance, so that its celestial motif and designs have become twisted into a fiendish face that subtly moves in disturbing ways.",
	"While holding this shield, you gain a +2 bonus to AC and resistance to fire damage.",
	">>Sentience<<. The Shield of the Hidden Lord is sentient as long as it imprisons Gargauth. While sentient, the shield has the following properties:",
	"\u2022 The shield has an Intelligence of 22, a Wisdom of 18, and a Charisma of 24, as well as hearing and truesight out to a range of 120 feet.",
	"\u2022 The shield can speak, read, and understand Common and Infernal, and it can communicate telepathically with any creature it can sense within 120 feet of it. Its voice is a deep, hollow whisper.",
	"\u2022 The shield has 3 charges. You can use an action to expend 1 charge to cast Fireball or 2 charges to cast Wall of Fire from the shield (save DC 21 for each). The Wall of Fire spell lasts for 1 minute (no concentration required). The shield regains all expended charges daily at dawn.",
	"\u2022 Anytime during your turn, the shield can choose to radiate an aura of dread for 1 minute. (This is not a power of the shield that you control.) Any creature hostile to you that starts its turn within 20 feet of the shield must make a DC 18 Wisdom saving throw. On a failed save, the creature is frightened until the start of its next turn. On a successful save, the creature is immune to this power of the shield for the next 24 hours. Once the shield uses this power, it can't use it again until the next dawn.\n",
	">>Gargauth's Personality<<. Gargauth desperately seeks freedom but can't escape on its own. The pit fiend won't reveal its true nature, referring to itself only as the Hidden Lord. It drops hints and subtle suggestions that it is an angel trapped in an unholy prison. If released from the shield, the pit fiend honors the terms of whatever bargain it struck to facilitate its escape.",
	"While trapped in the shield, Gargauth carefully steers the shield's current owner toward committing acts of cruelty and domination, hoping to condemn the individual's soul to the Nine Hells. Conflict occurs if the shield's owner does anything that would make it more difficult for Gargauth to escape its prison, such as leaving the shield in a place where others are unlikely to find it.",
	"Gargauth doesn't know how to escape from the shield. The pit fiend believes (incorrectly) that it can break free of the shield if it's brought to the Nine Hells, for it's convinced that the shield's powers are weaker there.",
	">>Freeing Gargauth<<. Casting dispel evil and good on the shield has a 1 percent chance of freeing the pit fiend, or automatically succeeds if the spell is cast by a solar, a planetar, or an archdevil. A god can release the pit fiend by touching the shield and speaking Gargauth's name. When released, Gargauth appears in a random, unoccupied space as close to the shield as possible."
];
MagicItemsList["shield of the hidden lord"] = {
	name : "Shield of the Hidden Lord",
	source : ["DiA", 225],
	type : "shield",
	rarity : "legendary",
	storyItemAL : true,
	description : "This shield grants me +2 bonus to AC and resistance to fire damage. It has 3 charges, regaining all at dawn. I can expend 1 charge to cast Fireball or 2 charges to cast Wall of Fire from it at DC 21. The shield is sentient and can communicate telepathically with any creature within 120 ft of it. See \"Notes\" page for more.",
	descriptionFull : DiA_shieldOfTheHiddenLordFullDescription.join("\n   ").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
	attunement : true,
	toNotesPage : [{
		name : "Features",
		popupName : "Features of the Shield of the Hidden Lord",
		note : desc(DiA_shieldOfTheHiddenLordFullDescription).replace(/>>(.*?)<</g, function(a, match) { return match.toUpperCase(); }).replace(/your/g, "my").replace(/you are /ig, "I am ").replace(/(to) you/ig, "$1 me").replace(/you /ig, "I ") + "\n\n" + sentientItemConflictTxt
	}],
	weight : 6,
	shieldAdd : ["Shield of the Hidden Lord", 4, 6],
	usages : 3,
	recovery : "Dawn",
	fixedDC : 21,
	spellFirstColTitle : "Ch",
	spellcastingBonus : [{
		name : "1 charge",
		spells : ["fireball"],
		selection : ["fireball"],
		firstCol : 1
	}, {
		name : "2 charges",
		spells : ["wall of fire"],
		selection : ["wall of fire"],
		firstCol : 2
	}],
	spellChanges : {
		"wall of fire" : {
			duration : "1 min",
			changes : "The Wall of Fire lasts for 1 minute and does not require concentration."
		}
	}
}
var DiA_soulCoinFullDescription = [
	"Soul coins are about 5 inches across and about 1 inch thick, minted from infernal iron. Each coin weighs one-third of a pound, and is inscribed with Infernal writing and a spell that magically binds a single soul to the coin. Because each soul coin has a unique soul trapped within it, each has a story. A creature might have been imprisoned as a result of defaulting on a deal, while another might be the victim of a night hag's curse.",
	">>Carrying Soul Coins<<. To hold a soul coin is to feel the soul bound within it\u2014overcome with rage or fraught with despair.",
	"An evil creature can carry as many soul coins as it wishes (up to its maximum weight allowance). A non-evil creature can carry a number of soul coins equal to or less than its Constitution modifier without penalty. A non-evil creature carrying a number of soul coins greater than its Constitution modifier has disadvantage on its attack rolls, ability checks, and saving throws.",
	">>Using a Soul Coin<<. A soul coin has 3 charges. A creature carrying the coin can use its action to expend 1 charge from a soul coin and use it to do one of the following:",
	"\u2022 >>Drain Life<<. You siphon away some of the soul's essence and gain 1d10 temporary hit points.",
	"\u2022 >>Query<<. You telepathically ask the soul a question and receive a brief telepathic response, which you can understand. The soul knows only what it knew in life, but it must answer you truthfully and to the best of its ability. The answer is no more than a sentence or two and might be cryptic.\n",
	">>Freeing a Soul<<. Casting a spell that removes a curse on a soul coin frees the soul trapped within it, as does expending all of the coin's charges. The coin itself rusts from within and is destroyed once the soul is released. A freed soul travels to the realm of the god it served or the outer plane most closely tied to its alignment (DM's choice). The souls of lawful evil creatures released from soul coins typically emerge from the River Styx as lemure devils.",
	"A soul can also be freed by destroying the coin that contains it. A soul coin has AC 19, 1 hit point for each charge it has remaining, and immunity to all damage except that which is dealt by a hellfire weapon or an infernal war machine's furnace.",
	"Freeing a soul from a soul coin is considered a good act, even if the soul belongs to an evil creature.",
	">>Hellish Currency<<. Soul coins are a currency of the Nine Hells and are highly valued by devils. The coins are used among the infernal hierarchy to barter for favors, bribe the unwilling, and reward the faithful for services rendered.",
	"Soul coins are created by Mammon and his greater devils on Minauros, the third layer of the Nine Hells, in a vast chamber where the captured souls of evil mortals are bound into the coins. These coins are then distributed throughout the Nine Hells to be used for goods and services, infernal deals, dark bargains, and bribes."
];
MagicItemsList["soul coin"] = {
	name : "Soul Coin",
	source : ["DiA", 225],
	type : "wondrous item",
	rarity : "uncommon",
	description : "Each coin traps a unique soul, whose rage or despair is felt by me while I hold it. A coin has 3 charges. As an action, I can expend 1 charge to either siphon the soul's essence to grant me 1d10 temporary HP or telepathically ask the soul a question which it must answer truthfully. See \"Notes\" page for more.",
	descriptionFull : DiA_soulCoinFullDescription.join("\n   ").replace(/>>(.*?)<</g, function(a, match) { return toUni(match); }),
	toNotesPage : [{
		name : "Features",
		popupName : "Features of Soul Coins",
		note : desc(DiA_soulCoinFullDescription).replace(/>>(.*?)<</g, function(a, match) { return match.toUpperCase(); }).replace(/your/g, "my").replace(/you are /ig, "I am ").replace(/(answer) you/ig, "$1 me").replace(/you /ig, "I ")
	}],
	weight : 0.3,
	usages : 3,
	recovery : "Never",
	action : [["action", ""]]
}
