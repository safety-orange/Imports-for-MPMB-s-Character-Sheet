var iFileName = "pub_20181107_LLoK.js";
RequiredSheetVersion(13);
// This file adds the magic items from the Lost Laboratory of Kwalish adventure to MPMB's Character Record Sheet

// Define the source
SourceList["LLoK"] = {
	name : "Lost Laboratory of Kwalish [items, spells]",
	abbreviation : "LLoK",
	group : "Adventure Books",
	url : "https://www.dmsguild.com/product/258047",
	date : "2018/11/07"
};

// Magic Items
MagicItemsList["blade of the medusa"] = {
	name : "Blade of the Medusa",
	source : ["LLoK", 53],
	type : "weapon (any sword)",
	rarity : "very rare",
	magicItemTable : "H",
	description : "",
	descriptionFull : "When you attack a creature with this magic weapon and roll a 20 on the attack roll, the creature must make a DC 15 Constitution saving throw in addition to suffering the attack's normal effects. On a failed save, the creature is restrained and must make another Constitution saving throw at the end of each of its turns. If it successfully saves against this effect three times, the effect ends. If it fails its saves three times, it is turned to stone and subjected to the petrified condition for 1 hour.\n   A creature is immune to this effect if it is immune to damage of the weapon's type, does not have a body made of flesh, or has legendary actions.\n   " + toUni("Curse") + ". This weapon is cursed, and becoming attuned to it extends the curse to you. Until the curse is broken with a remove curse spell or similar magic, you are unwilling to part with the weapon. Whenever you attack a creature with this weapon and roll a 1 on the attack roll, you must succeed on a DC 15 Constitution saving throw or be restrained and forced to make additional saves against being petrified, as above.",
	attunement : true
}
MagicItemsList["deck of several things"] = {
	name : "Deck of Several Things",
	source : ["LLoK", 53],
	type : "wondrous item",
	rarity : "legendary",
	storyItemAL : true,
	description : "",
	descriptionFull : "Stored in a leather pouch, this unique deck contains twenty-two colored cards made of some strong but unknown metal, each of which features a design printed as a mosaic of raised dots. Before you draw a card, you must declare how many cards you intend to draw and then draw them randomly (you can use an altered deck of playing cards to simulate the deck). Any cards drawn in excess of this number have no effect. Otherwise, as soon as you draw a card from the deck, its magic takes effect. You must draw each card no more than 1 hour after the previous draw. If you fail to draw the chosen number, the remaining number of cards fly from the deck on their own and take effect all at once.\n   Once a card is drawn, it fades from existence. Unless the card is the Fool or the Jester, the card reappears in the deck, making it possible to draw the same card twice.\n\n" + toUni("1d22\tPlaying Card\tCard") + "\n1\tAce of diamonds\tVizier\n2\tKing of diamonds\tSun\n3\tQueen of diamonds\tMoon\n4\tJack of diamonds\tStar\n5\tTwo of diamonds\tComet\n6\tAce of hearts\tThe Fates\n7\tKing of hearts\tThrone\n8\tQueen of hearts\tKey\n9\tJack of hearts\tKnight\n10\tTwo of hearts\tGem\n11\tAce of clubs\tTalons\n12\tKing of clubs\tThe Void\n13\tQueen of clubs\tFlames\n14\tJack of clubs\tSkull\n15\tTwo of clubs\tIdiot\n16\tAce of spades\tDonjon\n17\tKing of spades\tRuin\n18\tQueen of spades\tEuryale\n19\tJack of spades\tRogue\n20\tTwo of spades\tBalance\n21\tJoker (with TM)\tFool\n22\tJoker (no TM)\tJester\n\n\n   " + toUni("Balance") + ". Your mind suffers a wrenching alteration, causing your alignment to change for the duration of the adventure. Lawful becomes chaotic, good becomes evil, and vice versa. If you are true neutral or unaligned, this card has no effect on you.\n   " + toUni("Comet") + ". If you single-handedly defeat the next hostile monster or group of monsters you encounter, you have advantage on ability checks made using one skill of your choice for the duration of the adventure. Otherwise, this card has no effect.\n   " + toUni("Donjon") + ". You are instantly teleported to and confined within the prison of the Monastery of the Distressed Body (area M6). Everything you were wearing and carrying stays behind in the space you occupied when you disappeared. You draw no more cards.\n   " + toUni("Euryale") + ". The card's medusa-like visage curses you. You take a -1 penalty on saving throws for the duration of the adventure.\n   " + toUni("The Fates") + ". Reality's fabric unravels and spins anew, allowing you to avoid or erase one event as if it never happened. You can use the card's magic as soon as you draw the card or at any other point during the adventure.\n   " + toUni("Flames") + ". The Grand Master of the Monastery of the Distressed Body becomes your enemy. The bone devil seeks your ruin, savoring your suffering before attempting to slay you. If the Grand Master has already been defeated, you gain the enmity of Garret Levistusson's patron\u2014a similarly powerful devil.\n   " + toUni("Fool") + ". For the duration of the adventure, you lose proficiency with one skill or gain disadvantage on all checks made with one skill (with the skill and the penalty determined by the DM). Discard this card and draw from the deck again, counting both draws as one of your declared draws.\n   " + toUni("Gem") + ". The 1,000 gp hoard of the leprechaun from the Wilderness Encounters table (see appendix A) appears at your feet. If that treasure has already been claimed, you gain an equivalent hoard.\n   " + toUni("Idiot") + ". Reduce your Intelligence by 1d4 + 1 (to a minimum score of 1) for the duration of the adventure. You can draw one additional card beyond your declared draws.\n   " + toUni("Jester") + ". You gain proficiency in a skill of your choice for the duration of the adventure, or you can draw two additional cards beyond your declared draws.\n   " + toUni("Key") + ". A common or uncommon magic weapon with which you are proficient, or a spell scroll featuring a spell of a level you can cast, appears in your hands. The DM chooses the weapon or spell, which you possess for the duration of this adventure.\n   " + toUni("Knight") + ". You gain the service of any of the NPCs in the \"Hirelings\" section not currently with the party, who appears in a space you choose within 30 feet of you. The NPC serves you loyally for the duration of the adventure, believing that the fates have drawn them to you. You control this character.\n   " + toUni("Moon") + ". You are granted the ability to cast any spell of 5th level or lower, and can use that ability 1d3 times for the duration of the adventure.\n   " + toUni("Rogue") + ". An NPC of the DM's choice becomes secretly hostile toward you. The identity of your new enemy isn't known until the NPC or someone else reveals it. Any enchantment spell cast on the NPC at 6th level or higher can end the NPC's hostility toward you.\n   " + toUni("Ruin") + ". All forms of wealth that you carry or own, other than magic items, are lost to you. This wealth can be recovered either in the treasury of the Monastery of the Distressed Body (area M10) or Kwalish's lab in Daoine Gloine (area O7), whichever comes later in the adventure.\n   " + toUni("Skull") + ". You summon an avatar of death\u2014a mechanical skeleton (use bone naga statistics) clad in a tattered black robe. It appears in a space of the DM's choice within 10 feet of you and attacks you, warning all others that you must win the battle alone. The avatar fights until you die or it drops to 0 hit points, whereupon it disappears. If anyone tries to help you, the helper summons its own avatar of death. A creature slain by an avatar of death can't be restored to life.\n   " + toUni("Star") + ". Increase one of your ability scores by 1 for the duration of the adventure. The score can exceed 20 but can't exceed 24.\n   " + toUni("Sun") + ". You gain proficiency in the skill of your choice for the duration of the adventure. In addition, a common or uncommon wondrous item appears in your hands. The DM chooses the item, which you possess for the duration of this adventure.\n   " + toUni("Talons") + ". Every magic item you wear or carry is lost to you. These items can be recovered either in the treasury of the Monastery of the Distressed Body (area M10) or Kwalish's lab in Daoine Gloine (area O7), whichever comes later in the adventure.\n   " + toUni("Throne") + ". You gain proficiency in the Persuasion skill and you double your proficiency bonus on checks made with that skill for the duration of the adventure. In addition, the Monastery of the Distressed Body's brains in jars regard you thereafter as the monastery's rightful master. You must defeat or otherwise clear out the Grand Master and its servants before you can claim the monastery as yours.\n   " + toUni("Vizier") + ". At any one time you choose within the duration of the adventure, you can ask a question in meditation and mentally receive a truthful answer to that question. Besides information, the answer helps you solve a puzzling problem or other dilemma. In other words, the knowledge comes with wisdom on how to apply it.\n   " + toUni("The Void") + ". This black card spells disaster. Your soul is drawn from your body and held within machinery in either the control room of the Monastery of the Distressed Body (area M8) or Kwalish's lab in Daoine Gloine (area O7), whichever comes later in the adventure. While your soul is trapped in this way, your body is incapacitated. Divination, Contact Other Plane, or a similar spell of 4th level or higher reveals the location of the machinery that holds your soul. You draw no more cards."
}
MagicItemsList["galder's bubble pipe"] = {
	name : "Galder's Bubble Pipe",
	source : ["LLoK", 55],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "G",
	description : "",
	descriptionFull : "This finely carved pipe blows odorless bubbles instead of smoke when used. The pipe has 3 charges, and it regains all spent charges daily at dawn. While you hold the pipe, you can expend charges to gain access to the following properties:\n \u2022 You can cast Fog Cloud as an action (1 charge).\n \u2022 You can cast Misty Step as a bonus action (2 charges).\n \u2022 You can summon a steam mephit as an action (3 charges). The mephit is friendly to you, obeys your verbal commands, and acts on its own turn in the initiative order. It disappears in a harmless puff of steam after 1 minute or if it ends its turn more than 60 feet from the pipe.",
	attunement : true
}
MagicItemsList["gambler's blade"] = {
	name : "Gambler's Blade",
	source : ["LLoK", 55],
	type : "weapon (any sword)",
	rarity : "rare",
	magicItemTable : "H",
	description : "",
	descriptionFull : "Choose a magical bonus of +1 to +3. This sword gains that bonus to its attack and damage rolls. For each point of bonus you choose for the sword, you take a corresponding penalty (-1 to -3) to your death saving throws. You can change this magical bonus each day at dawn.\n   " + toUni("Curse") + ". This weapon is cursed, and becoming attuned to it extends the curse to you. Until the curse is broken with a remove curse spell or similar magic, you are unwilling to part with the weapon.",
	attunement : true
}
MagicItemsList["heward's hireling armor"] = {
	name : "Heward's Hireling Armor",
	source : ["LLoK", 55],
	type : "armor (leather)",
	rarity : "very rare",
	magicItemTable : "G",
	description : "",
	descriptionFull : "A number of Kwalish's experiments were attempts to research the works of the legendary mage Heward, who first crafted what he named hireling armor. While wearing this armor, you gain a +1 bonus to AC. In addition, the armor's animated straps can assist with the drawing and sheathing of weapons, such that you can draw or stow two one-handed weapons when you would normally be able to draw or stow only one.\n   This armor also has six pockets, each of which is an extradimensional space. Each pocket can hold up to 20 pounds of material, not exceeding a volume of 2 cubic feet. The armor always weighs 10 pounds, regardless of its pockets' contents. Placing an object into one of the armor's pockets follows the normal rules for interacting with objects. Retrieving an item from a pocket of the armor requires you to use an action. When you reach into a pocket for a specific item, the item is always magically on top.\n   Placing the armor inside an extradimensional space created by a bag of holding, a Heward's handy haversack, or a similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate is sucked through it and deposited in a random location on the Astral Plane. The gate then closes. The gate is one-way only and can't be reopened.",
	weight : 10
}
if (MagicItemsList["ioun stone"]) {
	MagicItemsList["ioun stone"].choices = MagicItemsList["ioun stone"].choices.concat(["Supreme Intellect", "Historical Knowledge", "Natural Knowledge", "Religious Knowledge", "Language Knowledge", "Self-Preservation"]);
	MagicItemsList["ioun stone"].choices.sort();
	MagicItemsList["ioun stone"]["supreme intellect"] = {
		source : ["LLoK", 55],
		rarity : "rare",
		magicItemTable : "G",
		description : "",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect.\n   A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.\n   You gain a +1 bonus to Intelligence checks while this faceted sphere orbits your head."
	}
	MagicItemsList["ioun stone"]["historical knowledge"] = {
		source : ["LLoK", 55],
		rarity : "rare",
		magicItemTable : "G",
		description : "",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect.\n   A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.\n   You gain proficiency in the History skill, or a +1 bonus to checks with that skill if already proficient, while this polished, steely sphere orbits your head."
	}
	MagicItemsList["ioun stone"]["natural knowledge"] = {
		source : ["LLoK", 55],
		rarity : "rare",
		magicItemTable : "G",
		description : "",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect.\n   A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.\n   You gain proficiency in the Nature skill, or a +1 bonus to checks with that skill if already proficient, while this burnished, brassy stone orbits your head."
	}
	MagicItemsList["ioun stone"]["religious knowledge"] = {
		source : ["LLoK", 55],
		rarity : "rare",
		magicItemTable : "G",
		description : "",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect.\n   A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.\n   You gain proficiency in the Religion skill, or a +1 bonus to checks with that skill if already proficient, while this tiny golden gem orbits your head."
	}
	MagicItemsList["ioun stone"]["language knowledge"] = {
		source : ["LLoK", 55],
		rarity : "rare",
		magicItemTable : "G",
		description : "",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect.\n   A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.\n   You are fluent in one additional language while this pulsating bit of red jeweled crystal orbits your head. The DM chooses the language bestowed by the stone."
	}
	MagicItemsList["ioun stone"]["self-preservation"] = {
		source : ["LLoK", 55],
		rarity : "rare",
		description : "",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect.\n   A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.\n   You gain a +1 bonus to Intelligence saving throws while this silvery gem orbits your head."
	}
}
MagicItemsList["leather golem armor"] = {
	name : "Leather Golem Armor",
	source : ["LLoK", 55],
	type : "armor (leather)",
	rarity : "rare",
	description : "",
	descriptionFull : "Strange rituals have repurposed the body of a flesh golem into this partially sentient suit of leather armor. While wearing this armor, you gain a +1 bonus to AC and to saving throws against spells and other magical effects. In addition, you gain the following properties:\n \u2022 " + toUni("Immutable Form") + ". You are immune to any spell or effect that would alter your form.\n \u2022 " + toUni("Lightning Absorption") + ". You gain resistance to lightning damage. Whenever you take lightning damage, you gain 5 temporary hit points.\n\n" + toUni("Curse") + ". This armor is cursed, and becoming attuned to it extends the curse to you. Until the curse is broken with a remove curse spell or similar magic, you are unwilling to part with the armor. In addition, while you wear the cursed armor, you gain the following properties:\n \u2022 " + toUni("Aversion of Fire") + ". If you take fire damage, you have disadvantage on attack rolls and ability checks until the end of your next turn.\n \u2022 " + toUni("Berserk") + ". Whenever a critical hit is made against you, roll a d6. On a 6, the armor causes you to go berserk. On each of your turns while berserk, you attack the nearest creature you can see. If no creature is near enough to move to and attack, you attack an object, with preference for an object smaller than yourself. Once the armor causes you to go berserk, it cannot be removed. You continue to attack until you are incapacitated or until another creature is able to calm you with appropriate magic (such as a calm emotions spell) or a successful DC 15 Charisma (Persuasion) check.",
	attunement : true,
	weight : 10,
	cursed : true
}
MagicItemsList["polymorph blade"] = {
	name : "Polymorph Blade",
	source : ["LLoK", 59],
	type : "weapon (any sword)",
	rarity : "very rare",
	magicItemTable : "H",
	description : "",
	descriptionFull : "When you attack a creature with this magic weapon and roll a 20 on the attack roll, the creature must make a DC 15 Wisdom saving throw in addition to suffering the attack's normal effects. On a failed save, the creature also suffers the effects of a polymorph spell. Roll a d20 and consult the following table to determine the form the target creature is transformed into.\n\n" + toUni("d20\tNew Form\td20\tNew Form") + 
	"\n   1\tTyrannosaurus\t 11\tWolf" +
	"\n   2\tGiant ape   \t 12\tHorse" +
	"\n   3\tElephant    \t 13\tOx" +
	"\n   4\tGiant scorpion\t 14\tGiant frog" +
	"\n   5\tRhinoceros  \t 15\tPoisonous snake" +
	"\n   6\tPolar bear  \t 16\tHawk" +
	"\n   7\tGiant toad  \t 17\tOctopus" +
	"\n   8\tGiant eagle \t 18\tCat" +
	"\n   9\tBlack bear  \t 19\tRat" +
	"\n 10\tCrocodile   \t 20\tRabbit" +
	"\n\nA creature is immune to this effect if it is immune to damage of the weapon's type, is a shapechanger, or has legendary actions.\n   " + toUni("Curse") + ". This weapon is cursed, and becoming attuned to it extends the curse to you. Until the curse is broken with a remove curse spell or similar magic, you are unwilling to part with the weapon. Whenever you attack a creature with this weapon and roll a 1 on the attack roll, you suffer the effect of a polymorph spell for 1 hour, rolling on the table to determine your new form.",
	attunement : true
}
MagicItemsList["powered armor"] = {
	name : "Powered Armor",
	source : ["LLoK", 56],
	type : "armor (plate)",
	rarity : "legendary",
	notLegalAL : true,
	description : "",
	descriptionFull : "Powered armor resembles a suit of unusual plate armor, with finely articulated joints connected by an oily, black, leather-like material. The armor has been worked to create the appearance of a heavily muscled warrior, and its great helm is unusual in that it has no openings\u2014only a broad glass plate in the front with a second piece of glass above it. Strange plates, tubing, and large metal bosses adorn the armor in seemingly random fashion. On the back of the armor's left gauntlet is a rectangular metal box, from which projects a short rod tipped with a cone-shaped red crystal.\n   While wearing this armor, you gain the following benefits:\n \u2022 You have a +1 bonus to AC.\n \u2022 Your Strength score is 18 (this has no effect if your Strength is already 18 or higher).\n \u2022 You have advantage on death saving throws.\n\nThe armor has further capabilities that can be powered either by energy cells or by your own life energy. You can use a bonus action to draw power from an energy cell or sacrifice hit points to gain one of the following benefits:\n \u2022 Emit a force field to gain 2d6 + 5 temporary hit points (1 charge or 5 hit points).\n \u2022 Activate boosters to gain a flying speed of 15 feet for 1 minute (1 charge or 5 hit points).\n \u2022 Fire arm-mounted laser: +8 to hit, range 120 feet, one target. 2d6 radiant damage (1 charge or 5 hit points).\n \u2022 Translate any writing you can see in any nonmagical language, to a total of one thousand words over 1 minute (1 charge or 5 hit points).\n \u2022 Fill the armor with air, allowing you to breathe normally in any environment for up to 1 hour (1 charge or 5 hit points).\n \u2022 Gain darkvision to a range of 60 feet for up to 1 hour (1 charge or 5 hit points).\n\nThe armor can accept only one energy cell at a time. It is found with one energy cell attached, containing 2d10 charges.",
	attunement : true,
	weight : 65
}

// Spells (contains contributions by /u/KittenWithMittens)
SpellsList["flock of familiars"] = {
    name: "Flock of Familiars",
    classes: ["warlock", "wizard"],
    source: ["LLoK", 57],
    level: 2,
    school: "Conj",
    time: "1 min",
    range: "Touch",
    components: "V,S",
    duration: "Conc, 1 h",
    description: "",
    descriptionFull: "You temporarily summon three familiars—spirits that take animal forms of your choice. Each familiar uses the same rules and options for a familiar conjured by the find familiar spell. All the familiars conjured by this spell must be the same type of creature (celestials, fey, or fiends; your choice). If you already have a familiar conjured by the find familiar spell or similar means, then one fewer familiars are conjured by this spell.\n   Familiars summoned by this spell can telepathically communicate with you and share their visual or auditory senses while they are within 1 mile of you.\n   When you cast a spell with a range of touch, one of the familiars conjured by this spell can deliver the spell, as normal. However, you can cast a touch spell through only one familiar per turn." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, you conjure an additional familiar for each slot level above 2nd."
}
SpellsList["galder's speedy courier"] = {
    name: "Galder's Speedy Courier",
    classes: ["warlock", "wizard"],
    source: ["LLoK", 57],
    level: 4,
    school: "Conj",
    time: "1 a",
    range: "10 ft",
    components: "V,S,M\u2020",
    compMaterial: "25 gp, or mineral goods of equivalent value, which the spell consumes",
    duration: "10 min",
    description: " (25gp cons.)",
    descriptionFull: "You summon a Small air elemental to a spot within range. The air elemental is formless, nearly transparent, immune to all damage, and cannot interact with other creatures or objects. It carries an open, empty chest whose interior dimensions are 3 feet on each side. While the spell lasts, you can deposit as many items inside the chest as will fit. You can then name a living creature you have met and seen at least once before, or any creature for which you possess a body part, lock of hair, clipping from a nail, or similar portion of the creature's body.\n   As soon as the lid of the chest is closed, the elemental and the chest disappear, then reappear adjacent to the target creature. If the target creature is on another plane, or if it is proofed against magical detection or location, the contents of the chest reappear on the ground at your feet.\n   The target creature is made aware of the chest's contents before it chooses whether or not to open it, and knows how much of the spell's duration remains in which it can retrieve them. No other creature can open the chest and retrieve its contents. When the spell expires or when all the contents of the chest have been removed, the elemental and the chest disappear. The elemental also disappears if the target creature orders it to return the items to you. When the elemental disappears, any items not taken from the chest reappear on the ground at your feet." + AtHigherLevels + "When you cast this spell using an 8th-level spell slot, you can send the chest to a creature on a different plane of existence from you."
}
SpellsList["galder's tower"] = {
    name: "Galder's Tower",
    classes: ["wizard"],
    source: ["LLoK", 57],
    level: 3,
    school: "Conj",
    time: "10 min",
    range: "30 ft",
    components: "V,S,M",
    compMaterial: "A fragment of stone, wood, or other building material",
    duration: "24 h",
    description: "",
    descriptionFull: "You conjure a two-story tower made of stone, wood, or similar suitably sturdy materials. The tower can be round or square in shape. Each level of the tower is 10 feet tall and has an area of up to 100 square feet. Access between levels consists of a simple ladder and hatch. Each level takes one of the following forms, chosen by you when you cast the spell:" +
	"\n \u2022 A bedroom with a bed, chairs, chest, and magical fireplace" +
	"\n \u2022 A study with desks, books, bookshelves, parchments, ink, and ink pens" +
	"\n \u2022 A dining space with a table, chairs, magical fireplace, containers, and cooking utensils" +
	"\n \u2022 A lounge with couches, armchairs, side tables and footstools" +
	"\n \u2022 A washroom with toilets, washtubs, a magical brazier, and sauna benches" +
	"\n \u2022 An observatory with a telescope and maps of the night sky" +
	"\n \u2022 An unfurnished, empty room" +
	"\n\nThe interior of the tower is warm and dry, regardless of conditions outside. Any equipment or furnishings conjured with the tower dissipate into smoke if removed from it. At the end of the spell's duration, all creatures and objects within the tower that were not created by the spell appear safely outside on the ground, and all traces of the tower and its furnishings disappear." +
	"\n   You can cast this spell again while it is active to maintain the tower's existence for another 24 hours. You can create a permanent tower by casting this spell in the same location and with the same configuration every day for one year." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the tower can have one additional story for each slot level beyond 3rd."
}
