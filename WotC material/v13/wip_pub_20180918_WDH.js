var iFileName = "pub_20180918_WDH.js";
RequiredSheetVersion(13);
// This file adds the magic items from the Waterdeep: Dragon Heist adventure to MPMB's Character Record Sheet

// Define the source
SourceList["WDH"] = {
	name : "Waterdeep: Dragon Heist [items]",
	abbreviation : "WDH",
	group : "Adventure Books",
	url : "https://dnd.wizards.com/products/tabletop-games/rpg-products/dragonheist",
	date : "2018/09/18"
};

// Magic Items
MagicItemsList["azuredge"] = {
	name : "Azuredge",
	source : ["WDH", 189],
	type : "weapon (battleaxe)",
	rarity : "legendary",
	storyItemAL : true,
	description : "",
	descriptionFull : "Forged by the archwizard Ahghairon, this intelligent battleaxe was crafted to defend Waterdeep. Its current wielder is a former member of Force Grey named Meloon Wardragon, but the weapon is searching for a new owner.\n   Azuredge has a solid steel handle etched with tiny runes, wrapped in blue dragon hide with a star sapphire set into the pommel. The axe head is forged from silver, electrum, and steel alloys whose edges constantly shimmer with a deep blue luminescence.\n   You gain a +3 bonus to attack and damage rolls made with this magic weapon. The Shield spell provides no defense against the axe, which passes through that spell's barrier of magical force.\n   When you hit a fiend or an undead with the axe, cold blue flames erupt from its blade and deal an extra 2d6 radiant damage to the target.\n   " + toUni("Hurling") + ". The battleaxe has 3 charges. You can expend 1 charge and make a ranged attack with the axe, hurling it as if it had the thrown property with a normal range of 60 feet and a long range of 180 feet. Whether it hits or misses, the axe flies back to you at the end of the current turn, landing in your open hand or at your feet in your space (as you choose). The axe regains all expended charges daily at dawn.\n   " + toUni("Illumination") + ". While holding the axe, you can use an action to cause the axe to glow blue or to quench the glow. This glow sheds bright light in a 30-foot radius and dim light for an additional 30 feet.\n   " + toUni("Sentience") + ". Azuredge is a sentient lawful neutral weapon with an Intelligence of 12, a Wisdom of 15, and a Charisma of 15. It has hearing and darkvision out to a range of 120 feet.\n   The weapon communicates telepathically with its wielder and can speak, read, and understand Common. It has a calm, delicate voice. The weapon can sense the presence of non-lawful creatures within 120 feet of it.\n   " + toUni("Personality") + ". Azuredge is sworn to protect Waterdeep, and it desires to be wielded by a law-abiding person willing to dedicate everything to the city's defense. The weapon is patient and takes its time finding its ideal wielder.\n   If someone tries to use Azuredge against its will, the axe can become ten times heavier than normal, and can magically adhere to any Medium or larger object or surface it comes into contact with. Once it does so, the axe can't be wielded. Nothing short of a Wish spell can separate the axe from the item or surface to which it is adhered without destroying one or the other, though the axe can choose to end the effect at any time.",
	attunement : true,
	weight : 4
}
MagicItemsList["badge of the watch"] = {
	name : "Badge of the Watch",
	source : ["WDH", 189],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "F",
	description : "",
	prerequisite : "Requires attunement by someone designated by the Open Lord of Waterdeep",
	descriptionFull : "A badge of the Watch is given only to those who have earned the trust of the Open Lord of Waterdeep. The badge, signifying the rank of captain in Waterdeep's City Watch, bears the emblem of Waterdeep and is meant to be worn or carried.\n   While wearing the badge, you gain a +2 bonus to AC if you aren't using a shield.\n   If the badge is more than 5 feet away from you for more than 1 minute, it vanishes and harmlessly reappears on a surface within 5 feet of the Open Lord. While holding the badge, the Open Lord knows your location, provided the two of you are on the same plane of existence and your attunement to the badge hasn't ended.\n   As an action, the Open Lord can touch the badge and end your attunement to it.",
	attunement : true
}
MagicItemsList["blackstaff"] = {
	name : "Blackstaff",
	source : ["WDH", 190],
	type : "staff",
	rarity : "legendary",
	storyItemAL : true,
	prerequisite : "Requires attunement by the Blackstaff heir, who must be a wizard",
	description : "",
	descriptionFull : "The Blackstaff is a sentient, rune-carved staff set with thin silver veins. It is the symbol of office for the Blackstaff, the highest-ranking wizard in Waterdeep. As the rightful owner of the Blackstaff, Vajra Safahr is the only one who can become attuned to it. The staff can, however, choose a new owner (see \"Personality\" below).\n   This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you gain a +2 bonus to Armor Class, saving throws, and spell attack rolls.\n   The staff has 20 charges for the following properties. The staff regains 2d8+4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff retains its +2 bonus to attack and damage roll but loses all other properties. On a 20, the staff regain 1d8+2 charges.\n   " + toUni("Power Strike") + ". When you hit with a melee attack using the staff, you can expend 1 charge to deal an extra 1d6 force damage to the target.\n   " + toUni("Spells") + ". While holding this staff, you can use an action to expend 1 or more of its charges to cast one of the following spells from it, using your spell save DC and spell attack bonus: Cone of Cold (5 charges), Fireball (5th-level version, 5 charges), Globe of Invulnerability (6 charges), Hold Monster (5 charges), Levitate (2 charges). Lightning Bolt (5th-level version, 5 charges), Magic Missile (1 charge), Ray of Enfeeblement (1 charge), or Wall of Force (5 charges).\n   " + toUni("Retributive Strike") + ". You can use an action to break the staff over your knee or against a solid surface, performing a retributive strike. The staff is destroyed and releases its remaining magic in an explosion that expands to fill a 30-foot-radius sphere centered on it.\n   You have a 50% chance to instantly travel to a random plane of existence, avoiding the explosion. If you fail to avoid the effect, you take force damage equal to 16 \xD7 the number of charges in the staff. Every other creature in the area must make a DC 17 Dexterity saving throw. On a failed save, a creature takes an amount of damage based on how far away it is from the point of origin, as shown in the following table. On a successful save, a creature takes half as much damage.\n\n" + toUni("Distance from Origin") + "\t" + toUni("Effect") + "\n10 ft. away or closer\t8 \xD7 the number of charges in the staff\n11 to 20 ft. away\t6 \xD7 the number of charges in the staff\n21 to 30 ft. away\t4 \xD7 the number of charges in the staff\n\n\n   " + toUni("Animate Walking Statues") + ". You can expend 1 or more of the staff's charges as an action to animate or deactivate one or more of the walking statues of Waterdeep. You must be in the city to use this property, and you can animate or deactivate one statue for each charge expended. An animated statue obeys the telepathic commands of Khelben Arunsun's spirit, which is trapped inside the staff (see \"Personality\" below). A walking statue becomes inanimate if deactivated or if the staff is broken.\n   " + toUni("Dispel Magic") + ". You can expend 1 of the staff's charges as a bonus action to cast Dispel Magic on a creature, an object, or a magical effect that you touch with the tip of the staff. If the target is an unwilling creature or an object in the possession of such a creature, you must hit the creature with a melee attack using the Blackstaff before you can expend the charge to cast the spell.\n   " + toUni("Drain Magic") + ". This property affects only creatures that use spell slots. When you hit such a creature with a melee attack using the Blackstaff, you can expend 1 of the staff's charges as a bonus action, causing the target to expend one spell slot of the highest spell level it can cast without casting a spell. If the target has already expended all its spell slots, nothing happens. Spell slots that are expended in this fashion are regained when the target finishes a long rest, as normal.\n   " + toUni("Master of Enchantment") + ". When you cast an enchantment spell of 1st level or higher while holding the staff, you can make an Intelligence (Arcana) check with a DC of 10 + the level of the spell. If the check succeeds, you cast the spell without expending a spell slot.\n   " + toUni("Sentience") + ". The Blackstaff is a sentient staff of neutral alignment, with an Intelligence of 22, a Wisdom of 15, and a Charisma of 18. It has hearing and darkvision out to a range of 120 feet, and it can communicate telepathically with any creature that is holding it.\n   " + toUni("Personality") + ". The staff has the spirits of all previous Blackstaffs trapped within it. Its creator, Khelben Arunsun, is the dominant personality among them. Like Khelben, the staff is extremely devious and manipulative. It prefers to counsel its owner without exerting outright control. The staff's primary goal is to protect Waterdeep and its Open Lord, currently Laeral Silverhand. Its secondary goal is to help its wielder become more powerful.\n   In the event that the holder of the office of the Blackstaff no longer serves the staff's wishes, the staff ceases to function until it finds a worthy inheritor\u2014someone whose loyalty to Waterdeep is beyond reproach.\n   " + toUni("Spirit Trap") + ". When the Blackstaff dies, the spirit of that individual becomes trapped in the staff along with the spirits of the previous Blackstaffs. (A Blackstaff whose spirit is trapped in the staff can't be raised from the dead.)\n   Destroying the staff would release the spirits trapped inside it, but in that event, Khelben's spirit can lodge itself inside any one piece of the staff that remains. The piece containing Khelben's spirit has the staff's Sentience property but none of its other properties. As long as this piece of the staff exists, Khelben's spirit can make the staff whole again whenever he wishes. When the staff is remade, the spirits of the previous Blackstaffs become trapped inside it again.",
	attunement : true,
	weight : 4
}
MagicItemsList["bracer of flying daggers"] = {
	name : "Bracer of Flying Daggers",
	source : ["WDH", 190],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "G",
	description : "",
	descriptionFull : "This armband appears to have thin daggers strapped to it. As an action, you can pull up to two magic daggers from the bracer and immediately hurl them, making a ranged attack with each dagger. A dagger vanishes if you don't hurl it right away, and the daggers disappear right after they hit or miss. The bracer never runs out of daggers.",
	attunement : true
}
MagicItemsList["dragonstaff of ahghairon"] = {
	name : "Dragonstaff of Ahghairon",
	source : ["WDH", 191],
	type : "staff",
	rarity : "legendary",
	storyItemAL : true,
	description : "",
	descriptionFull : "While holding the dragonstaff of Ahghairon, you have advantage on saving throws against the spells and breath weapons of dragons, as well as the breath weapons of other creatures of the dragon type (such as dragon turtles).\n   A creature of the dragon type that you touch with the staff can move through the city of Waterdeep, ignoring Ahghairon's dragonward (see \"Ahghairon's Dragonward,\" in the Introduction). This effect lasts until the creature is touched again by the staff or until a time you proclaim when you confer the benefit.\n   The staff has 10 charges. While holding it, you can expend 1 charge as an action to cast the Command spell. If you target a dragon with this casting, the dragon has disadvantage on its saving throw. The staff regains 1d10 charges daily at dawn.",
	attunement : true
}
MagicItemsList["feather of diatryma summoning"] = {
	name : "Feather of Diatryma Summoning",
	source : ["WDH", 191],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "D",
	description : "",
	descriptionFull : "This bright plume is made from the feather of a diatryma (pronounced dee-ah-TRY-mah), a Large, colorful, flightless bird native to the Underdark. If you use an action to speak the command word and throw the feather into a Large unoccupied space on the ground within 5 feet of you, the feather becomes a living diatryma for up to 6 hours, after which it reverts to its feather form. It reverts to feather form early if it drops to 0 hit points or if you use an action to speak the command word again while touching the bird.\n   When the diatryma reverts to feather form, the magic of the feather can't be used again until 7 days have passed.\n   The diatryma uses the statistics of an axe beak, except that its beak deals piercing damage instead of slashing damage. The creature is friendly to you and your companions, and it can be used as a mount. It understands your languages and obeys your spoken commands. If you issue no commands, the diatryma defends itself but takes no other actions.",
	attunement : true
}
MagicItemsList["knave's eye patch"] = {
	name : "Knave's Eye Patch",
	source : ["WDH", 191],
	type : "wondrous item",
	rarity : "rare",
	magicItemTable : "G",
	description : "",
	descriptionFull : "While wearing this eye patch, you gain these benefits:\n \u2022 You have advantage on Wisdom (Perception) checks that rely on sight.\n \u2022 If you have the Sunlight Sensitivity trait, you are unaffected by the trait.\n \u2022 You are immune to magic that allows other creatures to read your thoughts or determine whether you are lying. Creatures can communicate telepathically with you only if you allow it.",
	attunement : true
}
MagicItemsList["lord's ensemble"] = {
	name : "Lord's Ensemble",
	source : ["WDH", 191],
	type : "wondrous item",
	rarity : "very rare",
	storyItemAL : true,
	prerequisite : "requires attunement by a creature with a humanoid build",
	description : "",
	descriptionFull : "The Masked Lords of Waterdeep don this ensemble when meeting with one another. This raiment renders each lord indistinguishable from the others. The ensemble consists of three pieces\u2014a helm, an amulet, and a robe\u2014that function as a single magic item when worn together, but only within the city of Waterdeep and its sewers. You become attuned to the ensemble as a single item.\n   " + toUni("Lord's Helm") + ". This bucket helm covers your head and conceals your face. Screens over the eyes help to shroud your identity without blinding you. While you wear the helm, your voice is magically altered to sound genderless, and you are immune to magic that allows other creatures to read your thoughts, to determine whether you are lying, to know your alignment, or to know your creature type. Creatures can communicate telepathically with you only if you allow it.\n   " + toUni("Lord's Amulet") + ". This amulet bears the crest of Waterdeep. It functions as an amulet of proof against detection and location.\n   " + toUni("Lord's Robe") + ". This elegant robe functions as a ring of free action, and it creates the illusion that you have a nondescript, androgynous humanoid build and stand 6 feet tall.",
	attunement : true
}
MagicItemsList["paper bird"] = {
	name : "Paper Bird",
	source : ["WDH", 191],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "B",
	description : "",
	descriptionFull : "After you write a message of fifty words or fewer on this magic sheet of parchment and speak a creature's name, the parchment magically folds into a Tiny paper bird and flies to the recipient whose name you uttered. The recipient must be on the same plane of existence as you, otherwise the bird turns into ash as it takes flight.\n   The bird is an object that has 1 hit point, an Armor Class of 13, a flying speed of 60 feet, a Dexterity of 16 (+3), and a score of 1 (\u22125) in all other abilities, and it is immune to poison and psychic damage.\n   It travels to within 5 feet of its intended recipient by the most direct route, whereupon it turns into a nonmagical and inanimate sheet of parchment that can be unfolded only by the intended recipient. If the bird's hit points or speed is reduced to 0 or if it is otherwise immobilized, it turns into ash.\n   Paper birds usually come in small, flat boxes containing 1d6 + 3 sheets of the parchment."
}
MagicItemsList["ring of truth telling"] = {
	name : "Ring of Truth Telling",
	source : ["WDH", 192],
	type : "ring",
	rarity : "uncommon",
	magicItemTable : "B",
	description : "",
	descriptionFull : "While wearing this ring, you have advantage on Wisdom (Insight) checks to determine whether someone is lying to you.",
	attunement : true
}
MagicItemsList["teleporter ring"] = {
	name : "Teleporter Ring",
	source : ["WDH", 157],
	type : "ring",
	rarity : "unknown",
	description : "",
	descriptionFull : "As an action, a creature wearing a teleporter ring can activate the teleportation circle either in area K22 or area E1, teleporting itself and up to six other willing creatures from one circle to the other."
}
MagicItemsList["smokepowder"] = {
	name : "Smokepowder",
	source : ["WDH", 192],
	type : "wondrous item",
	rarity : "uncommon",
	magicItemTable : "B",
	description : "",
	descriptionFull : "Smokepowder is a magical explosive chiefly used to propel a bullet out of the barrel of a firearm. It is stored in airtight wooden kegs or tiny, waterproof leather packets. A packet contains enough smokepowder for five shots, and a keg holds enough smokepowder for five hundred shots.\n   If smokepowder is set on fire, dropped, or otherwise handled roughly, it explodes and deals fire damage to each creature or object within 20 feet of it: 1d6 for a packet, 9d6 for a keg. A successful DC 12 Dexterity saving throw halves the damage.\n   Casting Dispel Magic on smokepowder renders it permanently inert."
}
MagicItemsList["stone of golorr"] = {
	name : "Stone of Golorr",
	source : ["WDH", 192],
	type : "wondrous item",
	rarity : "artifact",
	storyItemAL : true,
	description : "",
	descriptionFull : "The Stone of Golorr is a glossy, greenish-gray stone that fits in the palm of your hand. The stone is actually an aboleth named Golorr, transformed by magic into an object.\n   " + toUni("Random Properties") + ". The Stone of Golorr has the following properties, determined by rolling on the tables in the \"Artifacts\" section in chapter 7 of the Dungeon Master's Guide:\n \u2022 1 minor beneficial property\n \u2022 1 minor detrimental property\n\n" + toUni("Legend Lore") + ". The Stone of Golorr has 3 charges and regains 1d3 expended charges daily at dawn. While holding the stone, you can expend 1 of its charges to cast the Legend Lore spell.\n   By using the stone to cast legend lore, you communicate directly with the aboleth, and it shares its knowledge with you. The aboleth can't lie to you, but the information it provides is often cryptic or vague.\n   The aboleth knows where Lord Neverember's secret vault is located. It also knows that three keys are needed to open the vault and that a gold dragon named Aurinax inhabits the vault and guards its treasures.\n   " + toUni("Failed Memory") + ". When your attunement to the Stone of Golorr ends, you must make a DC 16 Wisdom saving throw. On a failed save, you lose all memory of the stone being in your possession and all knowledge imparted by it. A Remove Curse spell cast on you has a 20% chance of restoring the lost knowledge and memories, and a Greater Restoration spell does so automatically.\n   " + toUni("Sentience") + ". The Stone of Golorr is a sentient lawful evil magic item with an Intelligence of 18, a Wisdom of 15, and a Charisma of 18. It has hearing and darkvision out to a range of 120 feet. It can communicate telepathically with the creature that is attuned to it, as long as that creature understands at least one language. In addition, the aboleth learns the greatest desires of any creature that communicates telepathically with the stone.\n   The Stone of Golorr hungers for information and prefers not to remain in the clutches of any creature for too long. Whenever the stone desires a new owner, it demands to be given to another intelligent creature as quickly as possible. If its demands are ignored, it tries to take control of its owner (see \"Sentient Magic Items\" in chapter 7 of the Dungeon Master's Guide).\n   " + toUni("Personality") + ". The Stone of Golorr has an alien intellect that is both domineering and hungry for knowledge. It thinks of itself as an ageless and immortal god.\n   " + toUni("Destroying the Stone") + ". While in stone form, the aboleth isn't a creature and isn't subject to effects that target creatures. The Stone of Golorr is immune to all damage. Casting an Antipathy/Sympathy spell on the stone destroys it if the antipathy effect is selected and the spell is directed to repel aberrations. When the spell is cast in this way, the stone transforms into mucus and is destroyed, and Golorr the aboleth appears in an unoccupied space within 30 feet of the stone's remains. The aboleth is incensed by the stone's destruction, and it attacks all other creatures it can see.",
	attunement : true
}
