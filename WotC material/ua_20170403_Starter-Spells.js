var iFileName = "ua_20170403_Starter-Spells.js";
RequiredSheetVersion(13);
// This file adds the content from the Unearthed Arcana: Starter Spells article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:SS"] = {
	name : "Unearthed Arcana: Starter Spells",
	abbreviation : "UA:SS",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2017/dnd/downloads/UA-Starter-Spells.pdf",
	date : "2017/04/03"
};

/*	Adds 17 spells of lower levels to all class' spell lists
	
	This code was contributed by SoilentBrad
*/
SpellsList["cause fear-uass"] = {
	name : "Cause Fear",
	classes : ["warlock", "wizard"],
	source : ["UA:SS", 2],
	level : 1,
	school : "Necro",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "1 crea save or frightened; crea disadvantage on save if 25 HP or less; no effect on undead/constructs",
	descriptionFull : "You awaken the sense of mortality in one creature you can see within range. The target must succeed on a Wisdom saving throw or become frightened for the duration. A target with 25 hit points or fewer makes the saving throw with disadvantage. The spell has no effect on constructs or undead."
};
SpellsList["ceremony-uass"] = {
	name : "Ceremony",
	classes : ["cleric", "paladin"],
	source : ["UA:SS", 2],
	ritual : true,
	level : 1,
	school : "Evoc",
	time : "1 h",
	range : "Touch",
	components : "V,S,M\u0192",
	compMaterial : "25 gp worth of powdered silver",
	duration : "Instantaneous",
	description : "Perform religious ceremony on target(s) that are within 10 ft throughout the casting; see book (25gp)",
	descriptionFull : "You perform one of several religious ceremonies. When you cast the spell, choose one of the following ceremonies, the target of which must be within 10 feet of you throughout the casting." + "\n   " + toUni("Atonement") + ": You touch one willing creature whose alignment has changed, and you make a DC 20 Wisdom (Insight) check. On a success, you restore the target to its original alignment." + "\n   " + toUni("Bless Water") + ": You touch one vial of water and cause it to become holy water." + "\n   " + toUni("Coming of Age") + ": You touch one humanoid old enough to be a young adult. For the next 24 hours, whenever the target makes an ability check, it can roll a d4 and add the number rolled to the ability check. A creature can benefit from this ceremony just once." + "\n   " + toUni("Dedication") + ": You touch one humanoid who would willingly convert to your religion or who wishes to be dedicated to your god's service. For the next 24 hours, whenever the target makes a saving throw, it can roll a d4 and add the number rolled to the save. A creature can benefit from this ceremony just once." + "\n   " + toUni("Funeral Rite") + ": You bless one corpse within 5 feet of you. For the next 24 hours, the target can't become undead by any means short of a wish spell." + "\n   " + toUni("Investiture") + ": You touch one willing humanoid. Choose one 1st-level spell you have prepared and expend a spell slot and any material components as if you were casting that spell. The spell has no effect. Instead, the target can cast this spell once without having to expend a spell slot or use material components. If the target doesn't cast the spell within 1 hour, the invested spell is lost." + "\n   " + toUni("Marriage") + ": You touch adult humanoids willing to be bonded together in marriage. For the next 24 hours, each target gains a +2 bonus to AC and saving throws while they are within 30 feet of each other. A creature can benefit from this ceremony just once."
};
SpellsList["chaos bolt-uass"] = {
	name : "Chaos Bolt",
	classes : ["sorcerer"],
	source : ["UA:SS", 2],
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Instantaneous",
	description : "Spell atk 2d8+1d6/SL dmg, d8s set dmg type, see B; double on d8s: new atk vs. crea in 30 ft of target",
	descriptionFull : "You hurl an undulating, warbling mass of chaotic energy at one creature in range. Make a ranged spell attack against the target. On a hit, the target takes 2d8 damage. Choose one of the d8s. The number it rolled determines the type of damage, as shown below." + "\n\n" + toUni("d8") + "\t" + toUni("Damage Type") + "\n  1\tAcid" + "\n  2\tCold" + "\n  3\tFire" + "\n  4\tForce" + "\n  5\tLightning" + "\n  6\tPoison" + "\n  7\tPsychic" + "\n  8\tThunder" + "\n\n   " + "If you roll the same number on both d8s, the chaotic energy leaps from the target to a different creature of your choice within 30 feet of it. Make a new attack roll against the new target, and make a new damage roll, which could cause the chaotic energy to leap again." + "\n   " + "A creature can be targeted only once by this mass of chaotic energy." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, each target takes extra damage of the type rolled. The extra damage equals 1d6 for each slot level above 1st."
};
SpellsList["guiding hand-uass"] = {
	name : "Guiding Hand",
	classes : ["bard", "cleric", "druid", "wizard"],
	source : ["UA:SS", 3],
	ritual : true,
	level : 1,
	school : "Div",
	time : "1 min",
	range : "5 ft",
	components : "V,S",
	duration : "Conc, 8 h",
	description : "Tiny incorporeal hand directs me to one major landmark I name that is on the same plane",
	descriptionFull : "You create a Tiny incorporeal hand of shimmering light in an unoccupied space you can see within range. The hand exists for the duration, but it disappears if you teleport or you travel to a different plane of existence." + "\n   " + "When the hand appears, you name one major landmark, such as a city, mountain, castle, or battlefield on the same plane of existence as you. Someone in history must have visited the site and mapped it. If the landmark appears on no map in existence, the spell fails. Otherwise, whenever you move toward the hand, it moves away from you at the same speed you moved, and it moves in the direction of the landmark, always remaining 5 feet away from you." + "\n   " + "If you don't move toward the hand, it remains in place until you do and beckons for you to follow once every 1d4 minutes."
};
SpellsList["hand of radiance-uass"] = {
	name : "Hand of Radiance",
	classes : ["cleric"],
	source : ["UA:SS", 3],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "5-ft rad",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	description : "Any creatures I can see in 5-ft radius save or 1d6 Radiant damage; +1d6 damage at CL 5, 11, and 17",
	descriptionCantripDie : "Any creatures I can see in 5-ft radius save or `CD`d6 Radiant damage",
	descriptionFull : "You raise your hand, and burning radiance erupts from it. Each creature of your choice that you can see within 5 feet of you must succeed on a Constitution saving throw or take 1d6 radiant damage." + "\n   " + "The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
};
SpellsList["healing elixir-uass"] = {
	name : "Healing Elixir",
	classes : ["warlock", "wizard"],
	source : ["UA:SS", 3],
	level : 1,
	school : "Conj",
	time : "1 min",
	range : "Self",
	components : "V,S,M\u0192",
	compMaterial : "Alchemist's supplies",
	duration : "24 h",
	description : "Make vial with alchemist's supplies; heals 2d4+2 HP as an action; if not used, disappears after 24 h",
	descriptionFull : "You create a healing elixir in a simple vial that appears in your hand. The elixir retains its potency for the duration or until it's consumed, at which point the vial vanishes." + "\n   " + "As an action, a creature can drink the elixir or administer it to another creature. The drinker regains 2d4 + 2 hit points."
};
SpellsList["infestation-uass"] = {
	name : "Infestation",
	classes : ["druid", "sorcerer", "warlock", "wizard"],
	source : ["UA:SS", 3],
	level : 0,
	school : "Conj",
	time : "1 a",
	range : "30 ft",
	components : "V,S,M",
	compMaterial : "A living flea",
	duration : "Instantaneous",
	save : "Con",
	description : "1 crea save or 1d6 Piercing damage and moved 5 ft in random direction; +1d6 at CL 5, 11, and 17",
	descriptionCantripDie : "1 crea save or `CD`d6 Piercing damage and moved 5 ft in random direction",
	descriptionFull : "You cause mites, fleas, and other parasites to appear momentarily on one creature you can see within range. The target must succeed on a Constitution saving throw or take 1d6 piercing damage. If the target takes any of that damage, the target moves 5 feet in a random direction. Roll a d8 for the direction:" + "\n\n" + toUni("d8") + "\t" + toUni("Direction") + "\n  1\tNorth" + "\n  2\tNortheast" + "\n  3\tEast" + "\n  4\tSoutheast" + "\n  5\tSouth" + "\n  6\tSouthwest" + "\n  7\tWest" + "\n  8\tNorthwest" + "\n\n   " + "The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
};
SpellsList["primal savagery-uass"] = {
	name : "Primal Savagery",
	classes : ["druid"],
	source : ["UA:SS", 3],
	level : 0,
	school : "Trans",
	time : "1 a",
	range : "5 ft",
	components : "S",
	duration : "Instantaneous",
	description : "Melee spell attack deals 1d10 Piercing or Slashing dmg (my choice); +1d10 at CL 5, 11, and 17",
	description : "Melee spell attack deals `CD`d10 Piercing or Slashing dmg (my choice)",
	descriptionFull : "Your teeth or fingernails lengthen and sharpen. You choose which. Make a melee spell attack against one creature within 5 feet of you. On a hit, the target takes 1d10 piercing or slashing damage (your choice). After you make the attack, your teeth or fingernails return to normal." + "\n   " + "The spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10)."
};
SpellsList["puppet-uass"] = {
	name : "Puppet",
	classes : ["bard", "warlock", "wizard"],
	source : ["UA:SS", 3],
	level : 1,
	school : "Ench",
	time : "1 a",
	range : "120 ft",
	components : "S",
	duration : "Instantaneous",
	save : "Con",
	description : "1 humanoid save or move its speed to where I choose and drop held items, if chosen (charm effect)",
	descriptionFull : "Your gesture forces one humanoid you can see within range to make a Constitution saving throw. On a failed save, the target must move up to its speed in a direction you choose. In addition, you can cause the target to drop whatever it is holding. This spell has no effect on a humanoid that is immune to being charmed."
};
SpellsList["sense emotion-uass"] = {
	name : "Sense Emotion",
	classes : ["bard", "warlock", "wizard"],
	source : ["UA:SS", 4],
	level : 1,
	school : "Div",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "Conc, 10 min",
	description : "Now and as 1 a for duration, sense emotion of humanoid in range; sense calm if not humanoid/charm",
	descriptionFull : "You attune your senses to pick up the emotions of others for the duration. When you cast the spell, and as your action on each turn until the spell ends, you can focus your senses on one humanoid you can see within 30 feet of you. You instantly learn the target's prevailing emotion, whether it's love, anger, pain, fear, calm, or something else. If the target isn't actually humanoid or it is immune to being charmed, you sense that it is calm."
};
SpellsList["snare-uass"] = {
	name : "Snare",
	classes : ["druid", "ranger", "wizard"],
	source : ["UA:SS", 4],
	level : 1,
	school : "Abjur",
	time : "1 min",
	range : "Touch",
	components : "V,S,M\u2020",
	compMaterial : "30 feet of cord or rope, which is consumed by the spell",
	duration : "Dispel/trigger",
	save : "Dex",
	description : "5-ft rad magical trap; Int (Inv) to see; save or restrained upside down 3 ft in the air; save/rnd at dis",
	descriptionFull : "While you cast this spell, you use the cord or rope to create a circle with a 5-foot radius on a flat surface within your reach. When you finish casting, the cord or rope disappears to become a magical trap." + "\n   " + "The trap is nearly invisible and requires a successful Intelligence (Investigation) check against your spell save DC to be found." + "\n   " + "The trap triggers when a Small creature or larger moves into the area protected by the spell. The triggering creature must succeed on a Dexterity saving throw or fall prone and be hoisted into the air until it hangs upside down 3 feet above the protected surface, where it is restrained." + "\n   " + "The restrained creature can make a Dexterity saving throw with disadvantage at the end of each of its turns and ends the restrained effect on a success. Alternatively, another creature that can reach the restrained creature can use an action to make an Intelligence (Arcana) check against your spell save DC. On a success, the restrained effect also ends."
};
SpellsList["sudden awakening-uass"] = {
	name : "Sudden Awakening",
	classes : ["bard", "ranger", "sorcerer", "wizard"],
	source : ["UA:SS", 4],
	level : 1,
	school : "Ench",
	time : "1 bns",
	range : "10 ft",
	components : "V",
	duration : "Instantaneous",
	description : "Any creatures within range awaken and can then stand up from prone without expending movement",
	descriptionFull : "Each sleeping creature you choose within range awakens, and then each prone creature within range can stand up without expending any movement."
};
SpellsList["unearthly chorus-uass"] = {
	name : "Unearthly Chorus",
	classes : ["bard"],
	source : ["UA:SS", 4],
	level : 1,
	school : "Illus",
	time : "1 a",
	range : "30-ft rad",
	components : "V",
	duration : "Conc, 10 min",
	save: "Cha",
	description : "Use bns a to make 1 crea in range save or be friendly for 1 h; I adv on Cha (Performance) checks",
	descriptionFull : "Music of a style you choose fills the air around you in a 30-foot radius. The music spreads around corners and can be heard from up to 100 feet away. The music moves with you, centered on you for the duration." + "\n   " + "Until the spell ends, you make Charisma (Performance) checks with advantage. In addition, you can use a bonus action on each of your turns to beguile one creature you choose within 30 feet of you that can see you and hear the music. The creature must make a Charisma saving throw. If you or your companions are attacking it, the creature automatically succeeds on the saving throw. On a failure, the creature becomes friendly to you for as long as it can hear the music and for 1 hour thereafter. You make Charisma (Deception) checks and Charisma (Persuasion) checks against creatures made friendly by this spell with advantage."
};
SpellsList["virtue-uass"] = {
	name : "Virtue",
	classes : ["cleric"],
	source : ["UA:SS", 5],
	level : 0,
	school : "Abjur",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "1 rnd",
	description : "1 creature that has at least 1 HP gets 1d4 + spellcasting ability modifier in temporary hit points",
	descriptionFull : "You touch one creature, imbuing it with vitality. If the target has at least 1 hit point, it gains a number of temporary hit points equal to 1d4 + your spellcasting ability modifier. The temporary hit points are lost when the spell ends."
};
SpellsList["wild cunning-uass"] = {
	name : "Wild Cunning",
	classes : ["druid", "ranger"],
	source : ["UA:SS", 5],
	ritual : true,
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Instantaneous",
	description : "Call spirits of nature to aid me with finding food, drink, tracks, shelter, or camping; see book",
	descriptionFull : "You call out to the spirits of nature to aid you. When you cast this spell, choose one of the following effects:" + "\n  \u2022 " + "If there are any tracks on the ground within range, you know where they are, and you make Wisdom (Survival) checks to follow these tracks with advantage for 1 hour or until you cast this spell again." + "\n  \u2022 " + "If there is edible forage within range, you know it and where to find it." + "\n  \u2022 " + "If there is clean drinking water within range, you know it and where to find it." + "\n  \u2022 " + "If there is suitable shelter for you and your companions with range, you know it and where to find." + "\n  \u2022 " + "Send the spirits to bring back wood for a fire and to set up a campsite in the area using your supplies. The spirits build the fire in a circle of stones, put up tents, unroll bedrolls, and put out any rations and water for consumption." + "\n  \u2022 " + "Have the spirits instantly break down a campsite, which includes putting out a fire, taking down tents, packing up bags, and burying any rubbish."
};
SpellsList["zephyr strike-uass"] = { // clarification: https://twitter.com/JeremyECrawford/status/849302527069884416
	name : "Zephyr Strike",
	classes : ["ranger"],
	source : ["UA:SS", 5],
	level : 1,
	school : "Trans",
	time : "1 bns",
	range : "Self",
	components : "V",
	duration : "Conc, 1 min",
	description : "Moving doesn't provoke opportunity atks; next wea atk has adv and gives +30 ft speed for that turn",
	descriptionFull : "You move like the wind. For the duration, your movement doesn't provoke opportunity attacks." + "\n   " + "In addition, the first time you make a weapon attack on your turn before the spell ends, you make the attack roll with advantage, and your speed increases by 30 feet until the end of that turn."
};

// Weapons (attack cantrips)
WeaponsList["hand of radiance-uass"] = {
	regExpSearch : /^(?=.*hand)(?=.*radiance).*$/i,
	name : "Hand of Radiance",
	source : ["UA:SS", 3],
	list : "spell",
	ability : 5,
	type : "Cantrip",
	damage : ["C", 6, "radiant"],
	range : "5-ft radius",
	description : "Con save, success - no damage; Only chosen creatures I can see are affected",
	abilitytodamage : false,
	dc : true
};
WeaponsList["infestation-uass"] = {
	regExpSearch : /infestation/i,
	name : "Infestation",
	source : ["UA:SS", 3],
	list : "spell",
	ability : 6,
	type : "Cantrip",
	damage : ["C", 6, "piercing"],
	range : "30 ft",
	description : "Con save, success - no damage, fail - target also moved 5 ft in random direction",
	abilitytodamage : false,
	dc : true
};
WeaponsList["primal savagery-uass"] = {
	regExpSearch : /^(?=.*primal)(?=.*savagery).*$/i,
	name : "Primal Savagery",
	source : ["UA:SS", 3],
	list : "spell",
	ability : 5,
	type : "Cantrip",
	damage : ["C", 10, "piercing"],
	range : "Melee (5 ft)",
	description : "Does either Piercing or Slashing damage (my choice)",
	abilitytodamage : false
};
// dupl_start
if (!SourceList.X) {
	SpellsList["toll the dead"] = {
		name : "Toll the Dead",
		classes : ["cleric", "warlock", "wizard"],
		source : [["X", 169], ["UA:SS", 4]],
		level : 0,
		school : "Necro",
		time : "1 a",
		range : "60 ft",
		components : "V,S",
		duration : "Instantaneous",
		save : "Wis",
		description : "1 crea save or 1d12 Necrotic damage (only 1d8 if at full HP); +1d12/1d8 at CL 5, 11, and 17",
		descriptionCantripDie : "1 crea save or `CD`d12 Necrotic damage (only `CD`d8 if at full hp)",
		descriptionFull : "You point at one creature you can see within range, and the sound of a dolorous bell fills the air around it for a moment. The target must succeed on a Wisdom saving throw or take 1d8 necrotic damage. If the target is missing any of its hit points, it instead takes 1d12 necrotic damage." + "\n   " + "The spell's damage increases by one die when you reach 5th level (2d8 or 2d12), 11th level (3d8 or 3d12), and 17th level (4d8 or 4d12)."
	};
	WeaponsList["toll the dead"] = {
		regExpSearch : /^(?=.*toll)(?=.*the)(?=.*dead).*$/i,
		name : "Toll the Dead",
		source : [["X", 169], ["UA:SS", 4]],
		list : "spell",
		ability : 5,
		type : "Cantrip",
		damage : ["C", 12, "necrotic"],
		range : "60 ft",
		description : "Wis save, success - no damage; If target is at full HP, d8 instead of d12 damage",
		abilitytodamage : false,
		dc : true
	};
} // dupl_end
